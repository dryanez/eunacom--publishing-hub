"""Hipertensión portal con anatomía real (Z-Anatomy, CC BY-SA 4.0).
Normal: la sangre del intestino y el bazo pasa por la porta y el hígado a la cava. Cirrosis: el hígado frena el paso,
el bazo crece, la sangre busca colaterales (várices esofágicas, cabeza de medusa) y aparece ascitis.
    Blender -b -P z_portal.py -- <out> <frames> [preview]
"""
import bpy, sys, os, math
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from anatomia3d import sphere, key, ease, color_key, bbox as obbox, setup as setup3d
from mathutils import Vector, Matrix

ZBLEND = os.path.expanduser('~/Documents/Archive/Apps/assets3d/zanatomy/Z-Anatomy/Startup.blend')
ZOBJ = os.path.expanduser('~/Documents/Archive/Apps/assets3d/zanatomy/obj')
argv = sys.argv[sys.argv.index('--') + 1:]
OUT, F = argv[0], int(argv[1]); PREV = argv[2] if len(argv) > 2 else None


def fr(t):
    return max(1, min(F, int(round(F * t))))


def mat(name, rgb, alpha=1.0, rough=0.45, emit=0.0):
    m = bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*rgb, 1); b.inputs['Roughness'].default_value = rough
    b.inputs['Coat Weight'].default_value = 0.15; b.inputs['Alpha'].default_value = alpha
    if emit:
        b.inputs['Emission Color'].default_value = (*rgb, 1); b.inputs['Emission Strength'].default_value = emit
    m.surface_render_method = 'DITHERED'
    return m


def zload(name, rgb, alpha=1.0, emit=0.0):
    bpy.ops.wm.obj_import(filepath=os.path.join(ZOBJ, name + '.obj'), forward_axis='Y', up_axis='Z')
    sel = [x for x in bpy.context.selected_objects if x.type == 'MESH']
    bpy.context.view_layer.objects.active = sel[0]
    if len(sel) > 1:
        bpy.ops.object.join()
    o = bpy.context.view_layer.objects.active; o.name = name
    o.data.materials.clear(); o.data.materials.append(mat(name, rgb, alpha, emit=emit))
    bpy.ops.object.shade_smooth()
    return o


def centerlines(names):
    """Puntos de las curvas originales de Z-Anatomy (coordenadas de mundo) -> {nombre: [[Vector,...], ...]}."""
    with bpy.data.libraries.load(ZBLEND, link=False) as (src, dst):
        dst.objects = [n for n in names if n in src.objects]
    out = {}
    for o in dst.objects:
        if o is None: continue
        bpy.context.scene.collection.objects.link(o)
        bpy.context.view_layer.update()
        mw = o.matrix_world.copy()
        out[o.name] = [[mw @ (p.co.xyz if hasattr(p.co, 'xyz') else p.co) for p in (sp.bezier_points if sp.type == 'BEZIER' else sp.points)]
                       for sp in o.data.splines]
        bpy.data.objects.remove(o, do_unlink=True)
    return out


def resample(pts, step):
    """Polilínea -> puntos cada `step` unidades."""
    out = [pts[0]]; acc = 0.0
    for a, b in zip(pts, pts[1:]):
        seg = (b - a).length; d = step - acc
        while d <= seg:
            out.append(a.lerp(b, d / seg)); d += step
        acc = seg - (d - step)
    out.append(pts[-1])
    return out


def ride(name, path, t0, t1, n, period, rgb, r=0.035, emit=2.0, gate=None):
    """n partículas recorren `path` en bucle (período en fracción del total) entre t0 y t1."""
    ps = []
    for i in range(n):
        p = sphere(f'{name}{i}', path[0], r, rgb, emit=emit)
        key(p, 'scale', 1, Vector((0.001,) * 3))
        start = fr(t0 + period * i / n)
        key(p, 'scale', max(1, start - 1), Vector((0.001,) * 3)); key(p, 'scale', start, Vector((1, 1, 1)))
        k = start; L = max(2, int(F * period))
        while k < fr(t1):
            for j, q in enumerate(path[::max(1, len(path) // 24)] + [path[-1]]):
                key(p, 'location', k + int(L * min(1, j / 24)), q)
            k += L
        key(p, 'scale', fr(t1), Vector((1, 1, 1))); key(p, 'scale', fr(t1) + 1, Vector((0.001,) * 3))
        for fc in p.animation_data.action.fcurves:
            for kp in fc.keyframe_points:
                kp.interpolation = 'LINEAR'
        ps.append(p)
    return ps


bpy.ops.wm.read_factory_settings(use_empty=True)
VEN = (0.30, 0.38, 0.85); PORT = (0.55, 0.35, 0.85); LIV = (0.62, 0.20, 0.17); CIRR = (0.50, 0.33, 0.16)
P = {}
P['liver'] = zload('Liver', LIV, alpha=0.55)
P['stomach'] = zload('Stomach', (0.90, 0.62, 0.56), alpha=0.35)
P['eso'] = zload('Oesophagus', (0.90, 0.60, 0.55), alpha=0.45)
P['spleen'] = zload('Spleen', (0.55, 0.18, 0.30))
P['jej'] = zload('Jejunum', (0.92, 0.68, 0.60), alpha=0.10)
for n in ('Ascending colon', 'Descending colon', 'Sigmoid colon'):
    P[n] = zload(n, (0.92, 0.70, 0.60), alpha=0.10)
P['aorta'] = zload('Abdominal aorta', (0.80, 0.15, 0.12), alpha=0.5)
VEINS = {'portal': 'Hepatic portal vein', 'splenic': 'Splenic vein', 'smv': 'Superior mesenteric vein', 'imv': 'Inferior mesenteric vein',
         'ivc': 'Inferior vena cava (abdominal part)', 'hep': 'Hepatic veins', 'azy': 'Azygos vein',
         'epis_l': 'Superior epigastric veins.l', 'epis_r': 'Superior epigastric veins.r',
         'epii_l': 'Inferior epigastric vein.l', 'epii_r': 'Inferior epigastric vein.r',
         'epif_l': 'Superficial epigastric vein.l', 'epif_r': 'Superficial epigastric vein.r'}
for k, n in VEINS.items():
    P[k] = zload(n, PORT if k in ('portal', 'splenic', 'smv', 'imv') else VEN, alpha=0.0 if k.startswith('epi') else 1.0)
CL = centerlines(list(VEINS.values()))

# normalizar: hígado + bazo + estómago + porta como núcleo
core = [P['liver'], P['spleen'], P['stomach'], P['portal'], P['smv']]
lo, hi = obbox(core[0])
for o in core[1:]:
    a, b = obbox(o); lo = Vector(map(min, lo, a)); hi = Vector(map(max, hi, b))
c = (lo + hi) / 2; s = 2.6 / max(hi - lo)
M = Matrix.Scale(s, 4) @ Matrix.Translation(-c)
for o in P.values():
    o.data.transform(M @ o.matrix_world); o.matrix_world = Matrix.Identity(4)
for k in CL:
    CL[k] = [[M @ p for p in sp] for sp in CL[k]]
print('CURVAS', {k: [len(sp) for sp in v] for k, v in CL.items()})



def main(k):
    """La spline más larga de la curva k."""
    return max(CL[VEINS[k] + '.001'] if VEINS[k] + '.001' in CL else CL[VEINS[k]], key=len)


CL = {k.replace('.001', ''): v for k, v in CL.items()}
def C(k):
    return max(CL[VEINS[k]], key=len)


def orient(path, end_near):
    """Devuelve el camino con su final cerca de `end_near`."""
    return path if (path[-1] - end_near).length < (path[0] - end_near).length else path[::-1]


def cut_at(path, q):
    i = min(range(len(path)), key=lambda j: (path[j] - q).length)
    return path[:i + 1]


llo, lhi = obbox(P['liver']); liv_c = (llo + lhi) / 2
portal = C('portal')
smv0, spl0 = C('smv'), C('splenic')
# extremo de la porta hacia la confluencia = el más cercano a la mesentérica
if (portal[0] - smv0[0]).length + 0 > min((portal[-1] - q).length for q in (smv0[0], smv0[-1])):
    pass
conf_end = min((portal[0], portal[-1]), key=lambda q: min((q - x).length for x in smv0 + spl0))
hil_end = portal[-1] if conf_end is portal[0] else portal[0]
portal = orient(portal, hil_end)
smv = orient(smv0, conf_end); spl = orient(spl0, conf_end)
hep = max(CL[VEINS['hep']], key=lambda sp: sum(p.z for p in sp))
ivc = orient(C('ivc'), Vector((0, 0, 99)))
hep = orient(hep, max(ivc, key=lambda p: p.z))
ivc_up = [p for p in ivc if p.z >= hep[-1].z - 0.05] or ivc[-2:]
liver_pass = [hil_end, hil_end.lerp(liv_c, 0.6), liv_c.lerp(hep[0], 0.5), hep[0]]
A = resample(smv + portal + liver_pass + hep + ivc_up, 0.04)
B = resample(spl + portal + liver_pass + hep + ivc_up, 0.04)
A_stop = resample(smv + portal, 0.04); B_stop = resample(spl + portal, 0.04)

# ------------------------------------------------------------------ guion
T1, T2, T3, T4, T5 = 0.22, 0.34, 0.46, 0.63, 0.79
BLOOD = (0.62, 0.45, 1.0)
ride('na', A, 0.0, T1 + 0.04, 8, 0.12, BLOOD, emit=1.3)
ride('nb', B, 0.0, T1 + 0.04, 8, 0.12, BLOOD, emit=1.3)
# cirrosis: el hígado cambia y el flujo se detiene en el hilio
color_key(P['liver'], fr(T1), LIV)
color_key(P['liver'], fr(T2), CIRR)
set_c = liv_c.copy()
for o in (P['liver'],):
    o.data.transform(Matrix.Translation(-set_c)); o.location = set_c
    key(o, 'scale', fr(T1), Vector((1, 1, 1))); key(o, 'scale', fr(T2), Vector((0.88, 0.88, 0.88)))
HOT = (1.0, 0.30, 0.25)
ride('sa', A_stop, T1, 1.0, 14, 0.22, HOT, emit=1.3)
ride('sb', B_stop, T1, 1.0, 14, 0.22, HOT, emit=1.3)
for k in ('portal', 'splenic', 'smv'):
    color_key(P[k], fr(T1), PORT)
    color_key(P[k], fr(T2), HOT, emit=0.8)
# esplenomegalia
slo, shi = obbox(P['spleen']); sc = (slo + shi) / 2
P['spleen'].data.transform(Matrix.Translation(-sc)); P['spleen'].location = sc
key(P['spleen'], 'scale', fr(T2), Vector((1, 1, 1))); key(P['spleen'], 'scale', fr(T3), Vector((1.5, 1.5, 1.5)))
lb = P['liver'].data.materials[0].node_tree.nodes['Principled BSDF'].inputs['Alpha']
for t, a_ in ((T3, 0.55), (T3 + 0.04, 0.18), (T4 + 0.02, 0.18), (T4 + 0.06, 0.4)):
    lb.default_value = a_; lb.keyframe_insert('default_value', frame=fr(t))
# várices esofágicas: del extremo esplénico/gástrico sube por el esófago distal al ácigos
ev = [v.co.copy() for v in P['eso'].data.vertices]
ezlo = min(v.z for v in ev)
def eso_at(z):
    sl = [v for v in ev if abs(v.z - z) < 0.04] or ev
    return sum(sl, Vector()) / len(sl)
ge = eso_at(ezlo + 0.03)
eso_r = max((v - ge).xy.length for v in ev if abs(v.z - ge.z) < 0.04)
var_pts = []
for j in range(9):
    z = ge.z + 0.05 + j * 0.06
    ctr = eso_at(z); ang = -math.pi / 2 + (j % 3 - 1) * 0.6
    var_pts.append(ctr + Vector((math.cos(ang) * eso_r * 1.05, math.sin(ang) * eso_r * 1.05, 0)))
for j, q in enumerate(var_pts):
    b = sphere(f'varice{j}', q, 0.05, (0.40, 0.25, 0.95), emit=0.9)
    b.scale = (0.001,) * 3; b.keyframe_insert('scale', frame=fr(T3 + 0.01 * j))
    b.scale = (1.0, 1.0, 1.6); b.keyframe_insert('scale', frame=fr(T3 + 0.06 + 0.01 * j))
conf = conf_end
azy = orient(C('azy'), Vector((0, 0, 99)))
azy_lo = min(azy, key=lambda p: (p - var_pts[-1]).length)
V = resample([conf, conf.lerp(ge, 0.5) + Vector((0, -0.05, 0)), ge] + var_pts + [azy_lo] + azy[azy.index(azy_lo):], 0.04)
ride('va', V, T3, 1.0, 10, 0.14, HOT, emit=1.3)
# cabeza de medusa: las epigástricas aparecen y se llenan
for k in ('epif_l', 'epif_r', 'epis_l', 'epis_r', 'epii_l', 'epii_r'):
    bsdf = P[k].data.materials[0].node_tree.nodes['Principled BSDF']
    bsdf.inputs['Alpha'].default_value = 0.0; bsdf.inputs['Alpha'].keyframe_insert('default_value', frame=fr(T4))
    bsdf.inputs['Alpha'].default_value = 1.0; bsdf.inputs['Alpha'].keyframe_insert('default_value', frame=fr(T4 + 0.06))
    color_key(P[k], fr(T4), VEN); color_key(P[k], fr(T4 + 0.08), (0.45, 0.35, 1.0), emit=1.2)
for k in ('epif_l', 'epif_r'):
    for i, sp in enumerate(CL[VEINS[k]]):
        if len(sp) < 3: continue
        top = max(sp, key=lambda p: p.z)
        path = resample(orient(sp, min(sp, key=lambda p: p.z)) if (sp[0] - top).length < 0.01 else orient(sp[::-1], min(sp, key=lambda p: p.z)), 0.04)
        ride(f'cm{k}{i}', path, T4 + 0.04, 1.0, 4, 0.12, HOT, r=0.03, emit=1.3)
# ascitis: líquido que sube en el abdomen
glo, ghi = obbox(P['Ascending colon'])
dlo, dhi = obbox(P['Descending colon'])
jlo, jhi = obbox(P['jej'])
xlo, xhi = min(glo.x, jlo.x), max(dhi.x, jhi.x)
asc = sphere('ascitis', Vector(((xlo + xhi) / 2, (jlo.y + jhi.y) / 2, jlo.z)), 1.0, (0.45, 0.75, 1.0))
asc.data.materials.clear(); asc.data.materials.append(mat('ascitis', (0.45, 0.75, 1.0), alpha=0.22, emit=0.25))
w = (xhi - xlo) * 0.42; d = (jhi.y - jlo.y) * 0.45; hgt = (jhi.z - jlo.z) * 0.22
asc.location.z = jlo.z + (jhi.z - jlo.z) * 0.18
key(asc, 'scale', 1, Vector((0.001,) * 3)); key(asc, 'scale', fr(T5), Vector((0.001,) * 3)); key(asc, 'scale', fr(T5) + 1, Vector((w * 0.6, d * 0.6, 0.02))); key(asc, 'scale', fr(0.97), Vector((w, d, hgt)))

cam = setup3d((0.25, -8.6, 0.6), (0.05, 0, -0.30), lens=45)
bpy.context.scene.eevee.taa_render_samples = 48
bpy.context.scene.frame_end = F
if PREV == 'still':
    os.makedirs(OUT, exist_ok=True)
    bpy.context.scene.render.filepath = os.path.join(OUT, 'still.png')
    bpy.ops.render.render(write_still=True)
    sys.exit(0)
bpy.context.scene.render.filepath = os.path.join(OUT, 'f_')
if PREV:
    os.makedirs(OUT, exist_ok=True)
    for i, t in enumerate((0.1, 0.3, 0.42, 0.58, 0.75, 0.97)):
        bpy.context.scene.frame_set(fr(t))
        bpy.context.scene.render.filepath = os.path.join(OUT, f'f_{i + 1:04d}.png')
        bpy.ops.render.render(write_still=True)
else:
    bpy.ops.render.render(animation=True)
