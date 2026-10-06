"""Artrosis de rodilla sobre huesos reales (Z-Anatomy, CC BY-SA 4.0).
El cartílago (capa generada sobre los cóndilos y el platillo) se gasta, sobre todo en el compartimento medial;
el espacio articular se estrecha y crecen osteofitos en los bordes.
    Blender -b -P z_artrosis.py -- <out> <frames> [preview]
"""
import bpy, bmesh, sys, os, math, random
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from anatomia3d import key, ease, color_key, setup as setup3d
import zcommon as Z
from zcommon import fr, zload, bounds, mat, alpha_key
from mathutils import Vector, Matrix

argv = sys.argv[sys.argv.index('--') + 1:]
OUT, F = argv[0], int(argv[1]); PREV = len(argv) > 2
Z.F[0] = F
random.seed(5)
bpy.ops.wm.read_factory_settings(use_empty=True)

BONE = (0.78, 0.72, 0.60); CART = (0.30, 0.58, 1.0)
fem = zload('Femur.r', BONE); tib = zload('Tibia.r', BONE); fib = zload('Fibula.r', BONE)
pat = zload('Patella.r', BONE, alpha=0.12)
men = [zload('Medial meniscus.r', (0.95, 0.92, 0.85)), zload('Lateral meniscus.r', (0.95, 0.92, 0.85))]
lig = [zload(n, (0.95, 0.90, 0.80), alpha=0.6) for n in ('Anterior cruciate ligament.r', 'Posterior cruciate ligament.r')]
objs = [o for o in [fem, tib, fib, pat] + men + lig if o]

flo, fhi = bounds([fem]); tlo, thi = bounds([tib])
knee = Vector(((flo.x + fhi.x) / 2, (flo.y + fhi.y) / 2, (flo.z + thi.z) / 2))
MED = Vector((1 if knee.x < 0 else -1, 0, 0))      # medial: hacia la línea media
s = 2.4 / (fhi.x - flo.x) * 0.9
M = Matrix.Scale(s, 4) @ Matrix.Translation(-knee)
for o in objs:
    o.data.transform(M @ o.matrix_world); o.matrix_world = Matrix.Identity(4)
flo, fhi = bounds([fem]); tlo, thi = bounds([tib])


def cartilage(src, keep, name, thick=0.035):
    """Capa de cartílago: caras del hueso que cumplen keep(p), desplazadas por la normal."""
    bm = bmesh.new(); bm.from_mesh(src.data)
    bmesh.ops.delete(bm, geom=[f for f in bm.faces if not all(keep(v.co) for v in f.verts)], context='FACES')
    bmesh.ops.delete(bm, geom=[v for v in bm.verts if not v.link_faces], context='VERTS')
    bm.normal_update()
    for v in bm.verts: v.co += v.normal * thick
    me = bpy.data.meshes.new(name); bm.to_mesh(me); bm.free()
    o = bpy.data.objects.new(name, me); bpy.context.scene.collection.objects.link(o)
    o.data.materials.append(mat(name, CART, alpha=0.9)); o.data.materials[0].use_backface_culling = False
    for p in o.data.polygons: p.use_smooth = True
    return o


cf = cartilage(fem, lambda p: p.z < flo.z + 0.24, 'cart_fem', thick=0.05)
ct = cartilage(tib, lambda p: p.z > thi.z - 0.08, 'cart_tib', thick=0.05)

T_WEAR0, T_WEAR1, T_OST0, T_OST1 = 0.20, 0.58, 0.50, 0.85
# desgaste: la capa vuelve hacia el hueso; más en el lado medial
for o in (cf, ct):
    o.shape_key_add(name='base'); sk = o.shape_key_add(name='gasto')
    for i, v in enumerate(o.data.vertices):
        med = max(0.0, v.co.dot(MED)) / 0.6
        w = min(1.0, 0.35 + 0.65 * min(1.0, med))
        sk.data[i].co = v.co - v.normal * 0.048 * w
    sk.value = 0; sk.keyframe_insert('value', frame=fr(T_WEAR0)); sk.value = 1; sk.keyframe_insert('value', frame=fr(T_WEAR1))
    color_key(o, fr(T_WEAR0), CART); color_key(o, fr(T_WEAR1), (0.85, 0.80, 0.62))
# el espacio articular medial se cierra: el fémur baja y se inclina hacia medial (varo)
for o in (fem, cf, pat):
    o.data.transform(Matrix.Translation(-Vector((0, 0, flo.z)))); o.location = Vector((0, 0, flo.z))
    key(o, 'location', fr(T_WEAR0), Vector((0, 0, flo.z))); key(o, 'location', fr(T_WEAR1), Vector((0, 0, flo.z - 0.045)))
    key(o, 'rotation_euler', fr(T_WEAR0), Vector((0, 0, 0)))
    key(o, 'rotation_euler', fr(T_WEAR1), Vector((0, math.radians(-3) * (1 if MED.x > 0 else -1), 0)))
# esclerosis subcondral: el hueso bajo el cartílago gastado se vuelve más blanco/denso
for o in (fem, tib):
    color_key(o, fr(T_WEAR0 + 0.1), BONE); color_key(o, fr(T_WEAR1 + 0.05), (0.86, 0.82, 0.72))

# osteofitos en los bordes del platillo y de los cóndilos
def rim(o, zsel, n):
    vs = [v.co.copy() for v in o.data.vertices if zsel(v.co)]
    cx = sum((p.x for p in vs), 0) / len(vs)
    left = sorted(vs, key=lambda p: p.x)[:n]; right = sorted(vs, key=lambda p: -p.x)[:n]
    return left + right, cx
pts_t, cxt = rim(tib, lambda p: p.z > thi.z - 0.10, 4)
pts_f, cxf = rim(fem, lambda p: p.z < flo.z + 0.18, 3)
for i, (p, cx, up) in enumerate([(q, cxt, 1) for q in pts_t] + [(q, cxf, -1) for q in pts_f]):
    out = Vector((1 if p.x > cx else -1, 0, 0.3 * up)).normalized()
    bpy.ops.mesh.primitive_cone_add(radius1=0.045, radius2=0.0, depth=0.12, location=p + out * 0.04, vertices=12)
    c = bpy.context.active_object; c.name = f'osteofito{i}'
    c.rotation_euler = out.to_track_quat('Z', 'Y').to_euler()
    c.data.materials.append(mat(c.name, (0.90, 0.84, 0.70)))
    t = T_OST0 + 0.25 * random.random()
    key(c, 'scale', 1, Vector((0.001,) * 3)); key(c, 'scale', fr(t), Vector((0.001,) * 3)); key(c, 'scale', fr(t + 0.1), Vector((1, 1, 1)))
    bpy.ops.object.shade_smooth()

cam = setup3d((0.6, -5.5, 0.4), (0, 0, 0), lens=60)
for j in range(13):
    t = j / 12; a = -0.35 + 0.35 * ease(t)
    p = Vector((math.sin(a) * 5.4, -math.cos(a) * 5.4, 0.25 - 0.2 * t)) + Vector((0, 0, flo.z))
    cam.location = p; cam.rotation_euler = (Vector((0, 0, flo.z)) - p).to_track_quat('-Z', 'Y').to_euler()
    cam.keyframe_insert('location', frame=fr(t)); cam.keyframe_insert('rotation_euler', frame=fr(t))
scn = bpy.context.scene; scn.frame_end = F
if PREV:
    os.makedirs(OUT, exist_ok=True)
    for i, t in enumerate((0.1, 0.4, 0.6, 0.97)):
        scn.frame_set(fr(t)); scn.render.filepath = os.path.join(OUT, f'f_{i + 1:04d}.png')
        bpy.ops.render.render(write_still=True)
else:
    scn.render.filepath = os.path.join(OUT, 'f_')
    bpy.ops.render.render(animation=True)
