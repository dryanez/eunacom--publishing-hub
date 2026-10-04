"""
Escenas 3D con anatomía real (BodyParts3D, DBCLS, CC BY 4.0). Se ejecuta sin abrir Blender:

    Blender -b -P classes/scripts/blender/anatomia3d.py -- <escena> <dir_cuadros> [cuadros]

Coordenadas del modelo: mm, -y = arriba, -z = anterior, +x = izquierda del paciente.
Tras normalizar: z = arriba, -y = anterior (hacia la cámara), +x = izquierda del paciente (derecha de la pantalla).
"""
import bpy, bmesh, math, os, sys
from mathutils import Vector, Matrix

ASSETS = os.path.expanduser('~/Documents/Archive/Apps/assets3d')
OBJ_DIR = os.path.join(ASSETS, 'bp3d', 'partof_BP3D_4.0_obj_99')
argv = sys.argv[sys.argv.index('--') + 1:] if ('--' in sys.argv and __name__ == '__main__') else []
SCENE = argv[0] if argv else 'resp14_tension'
OUT = argv[1] if len(argv) > 1 else '/tmp/a3d'
FRAMES = int(argv[2]) if len(argv) > 2 else 120

BONE = (0.86, 0.82, 0.72)
LUNG = (0.92, 0.55, 0.58)
HEART = (0.70, 0.12, 0.12)
AIRWAY = (0.85, 0.80, 0.70)
ARTERY = (0.85, 0.12, 0.10)
GUT = (0.88, 0.55, 0.50)

_FILES = None


def files_for(cid):
    global _FILES
    if _FILES is None:
        _FILES = {}
        for line in open(os.path.join(ASSETS, 'partof_element_parts.txt'), encoding='utf-8').read().splitlines()[1:]:
            c, n, f = line.split('\t')
            _FILES.setdefault(c, []).append(f)
    return _FILES.get(cid, [])


def material(name, rgb, alpha=1.0, rough=0.45, emit=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*rgb, 1)
    b.inputs['Roughness'].default_value = rough
    b.inputs['Coat Weight'].default_value = 0.15
    if alpha < 1:
        b.inputs['Alpha'].default_value = alpha
        try:
            m.surface_render_method = 'BLENDED'
        except Exception:
            m.blend_method = 'BLEND'
        m.use_backface_culling = True
    if emit:
        b.inputs['Emission Color'].default_value = (*rgb, 1)
        b.inputs['Emission Strength'].default_value = emit
    return m


def load(cid, name, rgb, alpha=1.0):
    objs = []
    for fj in files_for(cid):
        p = os.path.join(OBJ_DIR, fj + '.obj')
        if os.path.exists(p):
            bpy.ops.wm.obj_import(filepath=p)
            objs += list(bpy.context.selected_objects)
    if not objs:
        print('SIN MALLA', cid, name)
        return None
    if len(objs) > 4:                                      # descartar piezas muy alejadas del resto (errores del modelo)
        cents = [sum((v.co for v in o.data.vertices), Vector()) / max(1, len(o.data.vertices)) for o in objs]
        med = Vector([sorted(c[i] for c in cents)[len(cents) // 2] for i in range(3)])
        spread = sorted((c - med).length for c in cents)[int(len(cents) * 0.8)]
        keep = []
        for o, c in zip(objs, cents):
            if (c - med).length > 2.2 * spread + 1e-6:
                bpy.data.objects.remove(o, do_unlink=True)
            else:
                keep.append(o)
        objs = keep
    bpy.ops.object.select_all(action='DESELECT')
    for o in objs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    if len(objs) > 1:
        bpy.ops.object.join()
    ob = bpy.context.view_layer.objects.active
    ob.name = name
    ob.data.materials.clear()
    ob.data.materials.append(material(name, rgb, alpha))
    bpy.ops.object.shade_smooth()
    return ob


def normalize(objs, fit=2.0):
    """Orientación anatómica estándar, centrado y escala común. Devuelve (centro_modelo, escala)."""
    objs = [o for o in objs if o]
    pts = [o.matrix_world @ v.co for o in objs for v in o.data.vertices]
    lo = Vector([min(p[i] for p in pts) for i in range(3)]); hi = Vector([max(p[i] for p in pts) for i in range(3)])
    c, size = (lo + hi) / 2, max(hi - lo)
    s = fit / size
    M = Matrix.Scale(s, 4) @ Matrix.Rotation(math.radians(-90), 4, 'X') @ Matrix.Translation(-c)
    for o in objs:
        o.data.transform(M @ o.matrix_world)
        o.matrix_world = Matrix.Identity(4)
    return c, s


def to_world(p_model, c, s):
    return (Matrix.Scale(s, 4) @ Matrix.Rotation(math.radians(-90), 4, 'X') @ Matrix.Translation(-c)) @ Vector(p_model)


def bbox(o):
    pts = [o.matrix_world @ v.co for v in o.data.vertices]
    lo = Vector([min(p[i] for p in pts) for i in range(3)]); hi = Vector([max(p[i] for p in pts) for i in range(3)])
    return lo, hi


def shell(src, name, rgb, alpha=0.55, voxel=0.06, smooth=6):
    """Volumen pulmonar: envoltura convexa del árbol bronquial, remallada y suavizada."""
    me = src.data.copy()
    o = bpy.data.objects.new(name, me)
    bpy.context.scene.collection.objects.link(o)
    o.matrix_world = src.matrix_world.copy()
    bm = bmesh.new(); bm.from_mesh(me)
    res = bmesh.ops.convex_hull(bm, input=bm.verts)
    bmesh.ops.delete(bm, geom=[g for g in res.get('geom_interior', []) + res.get('geom_unused', []) if isinstance(g, bmesh.types.BMVert)], context='VERTS')
    bm.to_mesh(me); bm.free()
    m = o.modifiers.new('remesh', 'REMESH'); m.mode = 'VOXEL'; m.voxel_size = voxel
    s = o.modifiers.new('smooth', 'SMOOTH'); s.iterations = smooth; s.factor = 0.8
    bpy.context.view_layer.objects.active = o
    for mod in list(o.modifiers):
        bpy.ops.object.modifier_apply(modifier=mod.name)
    o.data.materials.clear(); o.data.materials.append(material(name, rgb, alpha, rough=0.35))
    bpy.ops.object.select_all(action='DESELECT'); o.select_set(True); bpy.ops.object.shade_smooth()
    return o


def set_origin(o, point):
    """Mueve el origen del objeto a `point` (mundo) sin mover la malla."""
    off = point - o.location
    o.data.transform(Matrix.Translation(-off))
    o.location = point


def key(o, path, frame, value):
    setattr(o, path, value)
    o.keyframe_insert(path, frame=frame)


def ease(t):
    t = max(0.0, min(1.0, t))
    return t * t * (3 - 2 * t)


def setup(cam_loc, look_at=(0, 0, 0), lens=50, bg=(0.012, 0.014, 0.02)):
    scn = bpy.context.scene
    cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam'))
    scn.collection.objects.link(cam); scn.camera = cam
    cam.location = Vector(cam_loc)
    cam.rotation_euler = (Vector(look_at) - cam.location).to_track_quat('-Z', 'Y').to_euler()
    cam.data.lens = lens
    for loc, energy, color in [((-3, -4, 3), 420, (1, 0.96, 0.92)), ((4, -2, 0.5), 160, (0.85, 0.9, 1)), ((0, 4, 3), 420, (1, 1, 1))]:
        L = bpy.data.objects.new('L', bpy.data.lights.new('L', 'AREA'))
        L.data.energy, L.data.color, L.data.size = energy, color, 3
        L.location = loc
        L.rotation_euler = (Vector((0, 0, 0)) - Vector(loc)).to_track_quat('-Z', 'Y').to_euler()
        scn.collection.objects.link(L)
    w = bpy.data.worlds.new('w'); scn.world = w; w.use_nodes = True
    w.node_tree.nodes['Background'].inputs['Color'].default_value = (*bg, 1)
    w.node_tree.nodes['Background'].inputs['Strength'].default_value = 1.0
    scn.render.engine = 'BLENDER_EEVEE_NEXT'
    scn.eevee.taa_render_samples = 32
    scn.render.resolution_x, scn.render.resolution_y = 1280, 720
    scn.frame_start, scn.frame_end = 1, FRAMES
    scn.render.fps = 24
    scn.view_settings.view_transform = 'Standard'
    scn.render.image_settings.file_format = 'PNG'
    scn.render.filepath = os.path.join(OUT, 'f_')
    return cam


def cylinder(name, a, b, r, rgb, emit=0.0):
    a, b = Vector(a), Vector(b)
    d = b - a
    bpy.ops.mesh.primitive_cylinder_add(radius=r, depth=d.length, location=(a + b) / 2)
    o = bpy.context.active_object
    o.rotation_euler = d.to_track_quat('Z', 'Y').to_euler()
    o.name = name
    o.data.materials.append(material(name, rgb, emit=emit))
    return o


def sphere(name, loc, r, rgb, alpha=1.0, emit=0.0, scale=(1, 1, 1)):
    bpy.ops.mesh.primitive_uv_sphere_add(radius=r, location=loc, segments=48, ring_count=24)
    o = bpy.context.active_object
    o.scale = scale
    o.name = name
    o.data.materials.append(material(name, rgb, alpha, emit=emit))
    bpy.ops.object.shade_smooth()
    return o


def torus(name, loc, major, minor, rgb, rot=(0, 0, 0), alpha=1.0):
    bpy.ops.mesh.primitive_torus_add(major_radius=major, minor_radius=minor, location=loc, rotation=rot, major_segments=96, minor_segments=24)
    o = bpy.context.active_object
    o.name = name
    o.data.materials.append(material(name, rgb, alpha))
    bpy.ops.object.shade_smooth()
    return o


def color_key(o, frame, rgb, emit=None):
    b = o.active_material.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*rgb, 1)
    b.inputs['Base Color'].keyframe_insert('default_value', frame=frame)
    if emit is not None:
        b.inputs['Emission Color'].default_value = (*rgb, 1)
        b.inputs['Emission Strength'].default_value = emit
        b.inputs['Emission Color'].keyframe_insert('default_value', frame=frame)
        b.inputs['Emission Strength'].keyframe_insert('default_value', frame=frame)


# =============================================================== escenas
def resp14(decompress):
    lr = load('FMA7309', 'arbol_der', (0.95, 0.75, 0.75))
    ll = load('FMA7310', 'arbol_izq', (0.95, 0.75, 0.75))
    hr = load('FMA7088', 'corazon', HEART)
    tr = load('FMA7394', 'traquea', AIRWAY)
    bd = load('FMA7395', 'bronquio_der', AIRWAY)
    bi = load('FMA7396', 'bronquio_izq', AIRWAY)
    rc = load('FMA7480', 'parrilla', BONE, alpha=0.16)
    st = load('FMA7485', 'esternon', BONE, alpha=0.3)
    c, s = normalize([lr, ll, hr, tr, bd, bi, rc, st], fit=2.4)
    pr = shell(lr, 'pulmon_der', LUNG, alpha=0.5)
    pl = shell(ll, 'pulmon_izq', LUNG, alpha=0.5)
    lo, hi = bbox(pr)
    hilum = Vector((hi.x - 0.08, (lo.y + hi.y) / 2, (lo.z + hi.z) / 2 + 0.1))
    for o in (pr, lr):
        set_origin(o, hilum)
    med = [hr, tr, bd, bi, ll, pl]
    shift = lambda o: 0.24 if o not in (ll, pl) else 0.12
    F = FRAMES
    collapsed = Vector((0.42, 0.62, 0.55))
    rlo, rhi = bbox(rc)
    if not decompress:
        for f, k in ((1, 0), (int(F * 0.15), 0), (int(F * 0.75), 1), (F, 1)):
            e = ease(k)
            for o in (pr, lr):
                key(o, 'scale', f, Vector((1, 1, 1)).lerp(collapsed, e))
            for o in med:
                key(o, 'location', f, o.location * 0 + Vector((shift(o) * e, 0, 0)) + (o.location if f == 1 else Vector((0, 0, 0))) * 0)
        air = sphere('aire', (lo.x * 0.6 + hi.x * 0.4, (lo.y + hi.y) / 2, (lo.z + hi.z) / 2), 0.36, (0.35, 0.6, 1.0), alpha=0.22, scale=(0.9, 0.8, 1.55))
        for f, k in ((1, 0.001), (int(F * 0.15), 0.001), (int(F * 0.75), 1), (F, 1)):
            key(air, 'scale', f, Vector((0.9, 0.8, 1.55)) * max(0.001, ease(k)))
    else:
        for o in med:
            key(o, 'location', 1, Vector((shift(o), 0, 0)))
        for o in (pr, lr):
            key(o, 'scale', 1, collapsed)
        # aguja: 2.º espacio intercostal, línea medioclavicular derecha (pared anterior)
        tip = Vector((rlo.x * 0.48, rlo.y + 0.1, rhi.z - (rhi.z - rlo.z) * 0.27))
        out = Vector((-0.42, -0.62, 0.32))
        needle = cylinder('aguja', tip + out * 0.2, tip + out, 0.018, (0.88, 0.88, 0.92))
        hub = cylinder('cono', tip + out, tip + out * 1.25, 0.045, (1.0, 0.75, 0.1))
        for ob in (needle, hub):
            start = ob.location + out * 0.9
            key(ob, 'location', 1, start)
            key(ob, 'location', int(F * 0.25), ob.location.copy() if False else start - out * 0.9)
        for f, k in ((int(F * 0.3), 0), (int(F * 0.8), 1), (F, 1)):
            e = ease(k)
            for o in (pr, lr):
                key(o, 'scale', f, collapsed.lerp(Vector((1, 1, 1)), e))
            for o in med:
                key(o, 'location', f, Vector((shift(o) * (1 - e), 0, 0)))
    setup((0, -6.2, 0.3), (0, 0, 0.1), lens=54)


def bronquio(kind):
    tr = load('FMA7394', 'traquea', AIRWAY)
    bd = load('FMA7395', 'bronquio_der', AIRWAY)
    bi = load('FMA7396', 'bronquio_izq', AIRWAY)
    lr = load('FMA7309', 'pulmon_der', LUNG, alpha=0.22)
    ll = load('FMA7310', 'pulmon_izq', LUNG, alpha=0.22)
    lob = load('FMA7337', 'lobulo_inf_der', (0.95, 0.75, 0.75)) if kind != 'cuerpo' else None
    c, s = normalize([o for o in (tr, bd, bi, lr, ll, lob) if o], fit=2.3)
    tlo, thi = bbox(tr)
    blo, bhi = bbox(bd)
    top = Vector(((tlo.x + thi.x) / 2, (tlo.y + thi.y) / 2, thi.z - 0.05))
    carina = Vector(((tlo.x + thi.x) / 2, (tlo.y + thi.y) / 2, tlo.z + 0.02))
    end = Vector((blo.x + 0.05, (blo.y + bhi.y) / 2, blo.z + 0.05))
    F = FRAMES
    if kind == 'cuerpo':
        ob = sphere('mani', top, 0.045, (0.95, 0.75, 0.2), emit=0.6, scale=(1, 1, 1.3))
        for f, p in ((1, top), (int(F * 0.45), carina), (int(F * 0.75), end), (F, end)):
            key(ob, 'location', f, p)
    else:
        rll_lo, rll_hi = bbox(lob)
        target = (rll_lo + rll_hi) / 2
        drops = [sphere(f'gota{i}', top, 0.03, (0.4, 0.75, 1.0), emit=0.5) for i in range(10)]
        for i, d in enumerate(drops):
            t0 = 1 + i * int(F * 0.05)
            key(d, 'location', 1, top)
            key(d, 'location', t0, top)
            key(d, 'location', t0 + int(F * 0.2), carina)
            key(d, 'location', t0 + int(F * 0.35), end)
            key(d, 'location', min(F, t0 + int(F * 0.5)), target + Vector(((i % 3 - 1) * 0.12, 0, (i // 3) * 0.08)))
        color_key(lob, int(F * 0.55), (0.95, 0.75, 0.75), emit=0.0)
        color_key(lob, int(F * 0.9), (1.0, 0.25, 0.15), emit=0.9)
    setup((0.0, -5.6, 0.25), (0, 0, 0.1), lens=48)


def acm():
    circ = load('FMA50454', 'poligono', ARTERY)
    mca = load('FMA50082', 'acm_der', ARTERY)
    bas = load('FMA50542', 'basilar', ARTERY)
    c, s = normalize([circ, mca, bas], fit=2.3)
    lo, hi = bbox(mca)
    F = FRAMES
    clot = sphere('trombo', (hi.x - 0.08, (lo.y + hi.y) / 2, (lo.z + hi.z) / 2), 0.05, (0.2, 0.05, 0.05), scale=(1.6, 1, 1))
    key(clot, 'scale', 1, Vector((0.001, 0.001, 0.001)))
    key(clot, 'scale', int(F * 0.3), Vector((0.001, 0.001, 0.001)))
    key(clot, 'scale', int(F * 0.45), Vector((1.6, 1, 1)))
    color_key(mca, int(F * 0.45), ARTERY, emit=0.4)
    color_key(mca, int(F * 0.8), (0.35, 0.35, 0.4), emit=0.0)
    for o in (circ, bas):
        color_key(o, 1, ARTERY, emit=0.4)
    cam = setup((0, 0, 5.0), (0, 0, 0), lens=55)
    cam.rotation_euler = (0, 0, math.pi)              # vista superior: anterior arriba, derecha del paciente a la derecha


def cadera():
    hb_r = load('FMA16586', 'coxal_der', BONE)
    hb_l = load('FMA16587', 'coxal_izq', BONE)
    sac = load('FMA16202', 'sacro', BONE)
    fr = load('FMA24474', 'femur_der', BONE)
    fl = load('FMA24475', 'femur_izq', BONE)
    low_r = [load(c, n, BONE) for c, n in (('FMA24477', 'tibia_der'), ('FMA24480', 'perone_der'), ('FMA24486', 'rotula_der'), ('FMA11343', 'pie_der'))]
    low_l = [load(c, n, BONE) for c, n in (('FMA24478', 'tibia_izq'), ('FMA24481', 'perone_izq'), ('FMA24487', 'rotula_izq'), ('FMA11344', 'pie_izq'))]
    low_r = [o for o in low_r if o]; low_l = [o for o in low_l if o]
    c, s = normalize([hb_r, hb_l, sac, fr, fl] + low_r + low_l, fit=2.6)
    lo, hi = bbox(fr)
    upper = [v.co for v in fr.data.vertices if v.co.z > hi.z - 0.3]
    medial = max(upper, key=lambda p: p.x)                 # medial del fémur derecho = hacia +x
    hc = Vector((medial.x - 0.045, medial.y, medial.z))
    bpy.ops.object.select_all(action='DESELECT'); fr.select_set(True)
    bpy.context.view_layer.objects.active = fr
    bpy.ops.object.mode_set(mode='EDIT')
    bm = bmesh.from_edit_mesh(fr.data)
    for v in bm.verts:
        v.select = (v.co - hc).length < 0.075
    bmesh.update_edit_mesh(fr.data)
    bpy.ops.mesh.separate(type='SELECTED')
    bpy.ops.object.mode_set(mode='OBJECT')
    shaft_top = Vector((hc.x - 0.09, hc.y, hc.z - 0.05))
    set_origin(fr, shaft_top)
    bpy.context.view_layer.update()
    for o in low_r:
        o.parent = fr
        o.matrix_parent_inverse = fr.matrix_world.inverted()
    tlo, thi = bbox(low_r[0]) if low_r else (lo, hi)
    knee = Vector(((tlo.x + thi.x) / 2, (tlo.y + thi.y) / 2, thi.z))
    axis = (shaft_top - knee).normalized()                  # eje mecánico del miembro
    fr.rotation_mode = 'AXIS_ANGLE'
    F = FRAMES
    for f, k in ((1, 0), (int(F * 0.25), 0), (int(F * 0.75), 1), (F, 1)):
        e = ease(k)
        key(fr, 'location', f, shaft_top + Vector((0, 0, 0.16 * e)))
        fr.rotation_axis_angle = (math.radians(-55) * e, axis.x, axis.y, axis.z)   # rotación externa: el pie derecho mira hacia afuera
        fr.keyframe_insert('rotation_axis_angle', frame=f)
    setup((0.1, -6.9, 0.1), (0.0, 0, 0.12), lens=40)


def vertebra():
    ids = [('FMA10059', 'T11'), ('FMA10081', 'T12'), ('FMA13072', 'L1'), ('FMA13073', 'L2'), ('FMA13074', 'L3'), ('FMA13075', 'L4'), ('FMA13076', 'L5')]
    vs = [load(cid, n, BONE) for cid, n in ids]
    c, s = normalize(vs, fit=2.4)
    L1 = vs[2]
    lo, hi = bbox(L1)
    cz = (lo.z + hi.z) / 2
    sk = L1.shape_key_add(name='base')
    w = L1.shape_key_add(name='cuña', from_mix=False)
    for i, v in enumerate(L1.data.vertices):
        p = v.co
        f = max(0.0, min(1.0, (hi.y - p.y) / (hi.y - lo.y)))     # 1 = anterior (y bajo)
        f = f ** 1.5
        w.data[i].co = Vector((p.x, p.y, cz + (p.z - cz) * (1 - 0.55 * f)))
    F = FRAMES
    for f, k in ((1, 0), (int(F * 0.25), 0), (int(F * 0.7), 1), (F, 1)):
        w.value = ease(k); w.keyframe_insert('value', frame=f)
        for o in vs[:2]:
            key(o, 'location', f, Vector((0, 0, -0.06 * ease(k))))
        key(o, 'rotation_euler', f, Vector((math.radians(6) * ease(k), 0, 0)))
    color_key(L1, int(F * 0.25), BONE)
    color_key(L1, int(F * 0.7), (0.95, 0.45, 0.3))
    setup((-6.6, -1.3, 0.25), (0, 0, 0.22), lens=50)       # vista lateral


def apendice():
    cec = load('FMA14541', 'ciego', GUT)
    app = load('FMA14542', 'apendice', GUT)
    asc = load('FMA14545', 'colon_asc', GUT)
    ile = load('FMA7208', 'ileon', (0.9, 0.62, 0.55), alpha=0.35)
    c, s = normalize([cec, app, asc], fit=2.2)
    ile.data.transform(Matrix.Scale(s, 4) @ Matrix.Rotation(math.radians(-90), 4, 'X') @ Matrix.Translation(-c))
    lo, hi = bbox(app)
    base = Vector(((lo.x + hi.x) / 2, (lo.y + hi.y) / 2, hi.z))
    set_origin(app, base)
    F = FRAMES
    for f, k in ((1, 0), (int(F * 0.2), 0), (int(F * 0.75), 1), (F, 1)):
        e = ease(k)
        key(app, 'scale', f, Vector((1 + 0.9 * e, 1 + 0.9 * e, 1 + 0.15 * e)))
    color_key(app, int(F * 0.2), GUT, emit=0.0)
    color_key(app, int(F * 0.75), (0.95, 0.15, 0.1), emit=0.8)
    setup((0.3, -6.4, 0.0), (0, 0, -0.05), lens=42)


def hipofisis():
    pit = load('FMA13889', 'hipofisis', (0.95, 0.65, 0.55))
    c, s = normalize([pit], fit=0.5)
    lo, hi = bbox(pit)
    top = Vector(((lo.x + hi.x) / 2, (lo.y + hi.y) / 2, hi.z))
    # quiasma óptico (procedural): dos nervios que se cruzan sobre la hipófisis
    zc = top.z + 0.55
    nerves = [cylinder('n_izq', (-0.9, -1.0, zc + 0.1), (0, 0, zc), 0.06, (0.95, 0.9, 0.6)),
              cylinder('n_der', (0.9, -1.0, zc + 0.1), (0, 0, zc), 0.06, (0.95, 0.9, 0.6)),
              cylinder('t_izq', (0, 0, zc), (-0.9, 1.0, zc + 0.05), 0.06, (0.95, 0.9, 0.6)),
              cylinder('t_der', (0, 0, zc), (0.9, 1.0, zc + 0.05), 0.06, (0.95, 0.9, 0.6))]
    chi = sphere('quiasma', (0, 0, zc), 0.11, (0.95, 0.9, 0.6), scale=(1.6, 1.0, 0.6))
    ad = sphere('adenoma', top, 0.12, (0.85, 0.35, 0.55))
    F = FRAMES
    for f, k in ((1, 0.25), (int(F * 0.15), 0.25), (int(F * 0.7), 1.0), (F, 1.0)):
        e = ease((k - 0.25) / 0.75)
        key(ad, 'scale', f, Vector((1, 1, 1)) * (0.5 + 2.6 * e))
        key(ad, 'location', f, top + Vector((0, 0, 0.32 * e)))
        key(chi, 'location', f, Vector((0, 0, zc + 0.08 * e)))
    color_key(chi, int(F * 0.45), (0.95, 0.9, 0.6), emit=0.0)
    color_key(chi, int(F * 0.75), (1.0, 0.25, 0.2), emit=1.2)
    setup((0.6, -3.6, 1.6), (0, 0, top.z + 0.35), lens=48)


def vppb():
    """Laberinto procedural: tres conductos semicirculares + vestíbulo; otolitos en el posterior."""
    ves = sphere('vestibulo', (0, 0, 0), 0.32, (0.9, 0.85, 0.75), alpha=0.5)
    sup = torus('superior', (0.15, 0.55, 0.55), 0.55, 0.05, (0.9, 0.85, 0.75), rot=(0, math.radians(90), math.radians(40)), alpha=0.6)
    post = torus('posterior', (0.15, -0.55, 0.55), 0.55, 0.06, (0.95, 0.75, 0.4), rot=(0, math.radians(90), math.radians(-40)), alpha=0.7)
    lat = torus('lateral', (0.65, 0, 0.05), 0.5, 0.05, (0.9, 0.85, 0.75), rot=(0, 0, 0), alpha=0.6)
    root = bpy.data.objects.new('cabeza', None); bpy.context.scene.collection.objects.link(root)
    for o in (ves, sup, post, lat):
        o.parent = root
    # otolitos: recorren el anillo posterior hacia su punto más bajo en cada posición de la cabeza
    oto = [sphere(f'oto{i}', (0, 0, 0), 0.035, (1.0, 1.0, 1.0), emit=1.5) for i in range(5)]
    F = FRAMES
    poses = [(0, 0), (0.12, -45), (0.3, -45), (0.42, 45), (0.6, 45), (0.72, 135), (0.88, 135), (1.0, 135)]  # (fracción, giro)
    pc = Vector((0.15, -0.55, 0.55)); R = 0.55
    ring_rot = (0, math.radians(90), math.radians(-40))
    def ring_point(theta, head_angle):
        local = Vector((R * math.cos(theta), R * math.sin(theta), 0))
        Mr = bpy.types.Object.__new__ if False else None
        m = (Matrix.Rotation(ring_rot[2], 4, 'Z') @ Matrix.Rotation(ring_rot[1], 4, 'Y') @ Matrix.Rotation(ring_rot[0], 4, 'X'))
        p = m @ local + pc
        return Matrix.Rotation(math.radians(head_angle), 4, 'X') @ p
    for f, ang in [(max(1, int(F * fr)), a) for fr, a in poses]:
        key(root, 'rotation_euler', f, Vector((math.radians(ang), 0, 0)))
        best = min((ring_point(t / 60 * 2 * math.pi, ang).z, t) for t in range(60))[1] * 2 * math.pi / 60
        for i, o in enumerate(oto):
            p = ring_point(best + (i - 2) * 0.08, ang)
            if f >= int(F * 0.85):
                p = Matrix.Rotation(math.radians(ang), 4, 'X') @ Vector((0.0, -0.05 * (i - 2), -0.05))
            key(o, 'location', f, p)
    setup((4.2, -0.8, 0.6), (0.3, 0, 0.3), lens=45)


def parto():
    hb_r = load('FMA16586', 'coxal_der', BONE, alpha=0.55)
    hb_l = load('FMA16587', 'coxal_izq', BONE, alpha=0.55)
    sac = load('FMA16202', 'sacro', BONE)
    c, s = normalize([hb_r, hb_l, sac], fit=2.4)
    lo = Vector((min(bbox(o)[0].x for o in (hb_r, hb_l)), 0, min(bbox(o)[0].z for o in (hb_r, hb_l))))
    hi = Vector((max(bbox(o)[1].x for o in (hb_r, hb_l)), 0, max(bbox(o)[1].z for o in (hb_r, hb_l))))
    cx = (lo.x + hi.x) / 2
    head = sphere('cabeza_fetal', (cx, 0.0, hi.z + 0.25), 0.33, (0.95, 0.75, 0.62), scale=(1.0, 1.25, 1.05))
    occ = sphere('occipucio', (0, 0.36, 0.1), 0.07, (0.25, 0.45, 1.0), emit=1.0)
    occ.parent = head
    F = FRAMES
    # (fracción, posición z, y, giro vertical (rotación interna), flexión/extensión)
    track = [(0.0, hi.z + 0.35, 0.05, 90, 0), (0.18, hi.z - 0.1, 0.05, 90, 0), (0.35, hi.z - 0.45, 0.02, 90, 20),
             (0.55, lo.z + 0.35, -0.05, 0, 25), (0.75, lo.z - 0.05, -0.35, 0, -35), (0.9, lo.z - 0.25, -0.45, 90, -35), (1.0, lo.z - 0.25, -0.45, 90, -35)]
    for fr, z, y, rot, flex in track:
        f = max(1, int(F * fr))
        key(head, 'location', f, Vector((cx, y, z)))
        key(head, 'rotation_euler', f, Vector((math.radians(flex), 0, math.radians(rot))))
    setup((-2.2, -6.4, 0.0), (cx, 0, lo.z + 0.45), lens=36)


def acalasia(normal=False):
    eso = load('FMA7131', 'esofago', (0.88, 0.55, 0.50), alpha=0.55)
    sto = load('FMA7148', 'estomago', GUT, alpha=0.6 if normal else 1.0)
    bpy.context.view_layer.objects.active = eso
    m = eso.modifiers.new('sub', 'SUBSURF'); m.levels = 2; bpy.ops.object.modifier_apply(modifier='sub')
    c, s = normalize([eso, sto], fit=2.3)
    # línea central del esófago por cortes en z
    vs = [v.co.copy() for v in eso.data.vertices]
    zlo = min(v.z for v in vs); zhi = max(v.z for v in vs)
    N = 40; cen = []
    for i in range(N + 1):
        z = zlo + (zhi - zlo) * i / N
        sl = [v for v in vs if abs(v.z - z) < (zhi - zlo) / N]
        if sl: cen.append(sum(sl, Vector()) / len(sl))
    def at(z):
        return min(cen, key=lambda p: abs(p.z - z))
    z_les = zlo + 0.06 * (zhi - zlo)
    # megaesófago: shape key que ensancha el tercio distal sobre el EEI (pico de pájaro abajo)
    eso.shape_key_add(name='base')
    sk = eso.shape_key_add(name='mega')
    span = 0.55 * (zhi - zlo)
    for i, v in enumerate(eso.data.vertices):
        z = v.co.z
        t = (z - z_les) / span
        if 0 < t < 1:
            w = ease(t / 0.3) * (1 - ease((t - 0.55) / 0.45))
            ctr = at(z); d = v.co - ctr; d.z = 0
            sk.data[i].co = v.co + d * (2.4 * w)
    F = FRAMES
    sk.value = 0; sk.keyframe_insert('value', frame=int(F * 0.45))
    sk.value = 0 if normal else 1; sk.keyframe_insert('value', frame=int(F * 0.85))
    ring = torus('eei', at(z_les), 0.075, 0.022, (0.95, 0.2, 0.15))
    if normal:
        slo, shi = bbox(sto); s_c = (slo + shi) / 2
        GRN = (0.25, 0.85, 0.5)
        for j in range(4):
            b = sphere(f'bolo{j}', at(zhi - 0.05), 0.055, (0.95, 0.85, 0.55), emit=0.6)
            t0 = int(F * (0.03 + 0.2 * j)); dur = int(F * 0.16)
            key(b, 'scale', max(1, t0 - 1), Vector((0.001,) * 3)); key(b, 'scale', t0, Vector((1, 1, 1)))
            zs = [zhi - 0.05 - k * 0.06 for k in range(60)]; zs = [z for z in zs if z > z_les] + [z_les]
            for k, z in enumerate(zs):
                key(b, 'location', t0 + int(dur * k / len(zs)), at(z))
            tin = t0 + dur
            key(b, 'location', tin + int(F * 0.06), s_c + Vector((0.05 * j - 0.08, 0, 0.05)))
            key(b, 'scale', tin + int(F * 0.06), Vector((1, 1, 1))); key(b, 'scale', tin + int(F * 0.14), Vector((0.001,) * 3))
            # el EEI se abre justo cuando llega el bolo
            key(ring, 'scale', max(1, tin - int(F * 0.05)), Vector((1, 1, 1)))
            key(ring, 'scale', tin - 1, Vector((1.7, 1.7, 1)))
            key(ring, 'scale', tin + int(F * 0.05), Vector((1, 1, 1)))
            color_key(ring, max(1, tin - int(F * 0.05)), (0.95, 0.2, 0.15), emit=0.4)
            color_key(ring, tin - 1, GRN, emit=1.5)
            color_key(ring, tin + int(F * 0.05), (0.95, 0.2, 0.15), emit=0.4)
        look = at(z_les + 0.35 * (zhi - zlo)) * 0.6 + Vector((0.15, 0, z_les)) * 0.4
        setup((look.x + 0.7, look.y - 4.6, look.z + 0.25), tuple(look), lens=40)
        return
    for f in range(int(F * 0.25), F, max(6, F // 14)):
        color_key(ring, f, (0.95, 0.2, 0.15), emit=0.4)
        color_key(ring, f + max(3, F // 28), (1.0, 0.35, 0.25), emit=2.5)
    # bolos que bajan y se acumulan sobre el EEI
    food = (0.95, 0.85, 0.55)
    for j in range(5):
        b = sphere(f'bolo{j}', at(zhi - 0.05), 0.055, food, emit=0.6)
        t0 = int(F * (0.03 + 0.11 * j)); stop = z_les + 0.09 + j * 0.085
        path = [z for z in [zhi - 0.05 - k * 0.06 for k in range(60)] if z > stop] + [stop]
        n = len(path); dur = int(F * 0.22)
        key(b, 'location', 1, at(path[0])); b.scale = (0.001,) * 3; b.keyframe_insert('scale', frame=max(1, t0 - 1))
        key(b, 'scale', t0, Vector((1, 1, 1)))
        for k, z in enumerate(path):
            key(b, 'location', t0 + int(dur * k / max(1, n - 1)), at(z))
    look = at(z_les + 0.35 * (zhi - zlo)) * 0.6 + Vector((0.15, 0, z_les)) * 0.4
    setup((look.x + 0.7, look.y - 4.6, look.z + 0.25), tuple(look), lens=40)


SCENES = {
    'gastro03_acalasia': acalasia,
    'gastro03_normal': lambda: acalasia(True),
    'resp14_tension': lambda: resp14(False),
    'resp14_puncion': lambda: resp14(True),
    'ped08_cuerpo': lambda: bronquio('cuerpo'),
    'resp08_aspiracion': lambda: bronquio('aspiracion'),
    'neuro01_acm': acm,
    'neuro23_cadera': cadera,
    'reuma24_vertebra': vertebra,
    'gastro19_apendice': apendice,
    'endo20_hipofisis': hipofisis,
    'neuro20_vppb': vppb,
    'ob16_parto': parto,
}

if __name__ == '__main__':
  bpy.ops.wm.read_factory_settings(use_empty=True)
  SCENES[SCENE]()
  if os.environ.get('A3D_PREVIEW'):
      scn = bpy.context.scene
      os.makedirs(OUT, exist_ok=True)
      for i, fr in enumerate((0.05, 0.5, 0.97)):
          scn.frame_set(max(1, int(FRAMES * fr)))
          scn.render.filepath = os.path.join(OUT, f'f_{i + 1:04d}.png')
          bpy.ops.render.render(write_still=True)
  else:
      bpy.ops.render.render(animation=True)
