"""Gota (podagra) sobre el pie real (Z-Anatomy, CC BY-SA 4.0).
Urato disuelto en la sangre; en la 1.ª metatarsofalángica (fría, distal) precipita en cristales en aguja;
llegan neutrófilos, los fagocitan y se desata la inflamación.
    Blender -b -P z_gota.py -- <out> <frames> [preview]
"""
import bpy, sys, os, math, random
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from anatomia3d import sphere, key, ease, color_key, setup as setup3d
import zcommon as Z
from zcommon import fr, zload, bounds, alpha_key, mat
from mathutils import Vector, Matrix, kdtree

argv = sys.argv[sys.argv.index('--') + 1:]
OUT, F = argv[0], int(argv[1]); PREV = len(argv) > 2
Z.F[0] = F
random.seed(11)
bpy.ops.wm.read_factory_settings(use_empty=True)

BONE = (0.92, 0.88, 0.78)
names = [l.strip() for l in open('/tmp/zgota_names.txt')] if os.path.exists('/tmp/zgota_names.txt') else []
bones = []
for f in sorted(os.listdir(Z.ZOBJ)):
    n = f[:-4]
    if n.endswith('.r') and any(k in n for k in ('of foot', 'metatarsal', 'cuneiform', 'Navicular', 'Cuboid', 'Talus', 'Calcaneus')):
        o = zload(n, BONE)
        if o: bones.append(o)
lo, hi = bounds(bones); c = (lo + hi) / 2; s = 3.2 / max(hi - lo)
M = Matrix.Scale(s, 4) @ Matrix.Translation(-c)
for o in bones:
    o.data.transform(M @ o.matrix_world); o.matrix_world = Matrix.Identity(4)
mt1 = next(o for o in bones if o.name.startswith('First metatarsal'))
pp1 = next(o for o in bones if o.name.startswith('Proximal phalanx of first'))

# centro de la articulación: puntos más cercanos entre la cabeza del 1.er metatarsiano y la base de la falange
kd = kdtree.KDTree(len(pp1.data.vertices))
for i, v in enumerate(pp1.data.vertices): kd.insert(v.co, i)
kd.balance()
best = min(((v.co, kd.find(v.co)) for v in mt1.data.vertices), key=lambda t: t[1][2])
J = (best[0] + best[1][0]) / 2
axis = (bounds([pp1])[0] + bounds([pp1])[1]) / 2 - (bounds([mt1])[0] + bounds([mt1])[1]) / 2
axis.normalize()
print('MTF1', J, axis)

T_URATE, T_COLD, T_XTAL0, T_XTAL1, T_PMN, T_INFL = 0.10, 0.24, 0.30, 0.52, 0.55, 0.66
# cápsula articular translúcida
cap = sphere('capsula', J, 1.0, (0.85, 0.85, 0.95), alpha=0.22)
cap.data.materials.clear(); cap.data.materials.append(mat('capsula', (0.80, 0.85, 1.0), alpha=0.2))
cap.rotation_euler = axis.to_track_quat('Z', 'Y').to_euler(); cap.scale = (0.16, 0.16, 0.13)
alpha_key(cap, 0, 0.0); alpha_key(cap, T_URATE, 0.0); alpha_key(cap, T_URATE + 0.06, 0.22)

# urato disuelto (puntos amarillos) que deriva por la articulación; en el frío precipita en agujas
def rnd_in(r):
    while True:
        p = Vector((random.uniform(-1, 1), random.uniform(-1, 1), random.uniform(-1, 1)))
        if p.length <= 1: return J + p * r
xt = []
for i in range(34):
    a = rnd_in(0.13); b = rnd_in(0.13)
    d = sphere(f'urato{i}', a, 0.012, (1.0, 0.85, 0.25), emit=2.0)
    key(d, 'scale', 1, Vector((0.001,) * 3)); key(d, 'scale', fr(T_URATE), Vector((0.001,) * 3)); key(d, 'scale', fr(T_URATE + 0.03), Vector((1, 1, 1)))
    key(d, 'location', fr(T_URATE), a); key(d, 'location', fr(T_XTAL0), b)
    key(d, 'scale', fr(T_XTAL0 + 0.01 * (i % 10)), Vector((1, 1, 1))); key(d, 'scale', fr(T_XTAL0 + 0.01 * (i % 10)) + 3, Vector((0.001,) * 3))
    # aguja de urato monosódico en el mismo lugar
    bpy.ops.mesh.primitive_cylinder_add(radius=0.006, depth=0.09, location=b, vertices=6)
    n = bpy.context.active_object; n.name = f'cristal{i}'
    n.rotation_euler = (random.uniform(0, math.pi), random.uniform(0, math.pi), random.uniform(0, math.pi))
    n.data.materials.append(mat(f'cristal{i}', (0.95, 0.98, 1.0), emit=1.2))
    tx = T_XTAL0 + 0.01 * (i % 10) + 0.005
    key(n, 'scale', 1, Vector((0.001,) * 3)); key(n, 'scale', fr(tx), Vector((0.001,) * 3)); key(n, 'scale', fr(tx + 0.05), Vector((1, 1, 1)))
    xt.append(n)

# la punta del pie se enfría (tono azulado) antes de precipitar
toes = [o for o in bones if 'finger of foot' in o.name]
for o in toes + [mt1]:
    color_key(o, fr(T_COLD - 0.04), BONE); color_key(o, fr(T_COLD + 0.04), (0.78, 0.84, 0.95))
    color_key(o, fr(T_INFL), (0.78, 0.84, 0.95)); color_key(o, fr(T_INFL + 0.06), BONE)

# neutrófilos que llegan y se pegan a los cristales
for i in range(12):
    tgt = xt[i * 2].location
    start = J + Vector((random.uniform(-0.6, 0.6), random.uniform(-0.6, 0.6), random.uniform(0.3, 0.7)))
    p = sphere(f'pmn{i}', start, 0.035, (0.95, 0.95, 1.0), alpha=0.9, emit=0.4)
    t0 = T_PMN + 0.008 * i
    key(p, 'scale', 1, Vector((0.001,) * 3)); key(p, 'scale', fr(t0), Vector((0.001,) * 3)); key(p, 'scale', fr(t0) + 2, Vector((1, 1, 1)))
    key(p, 'location', fr(t0), start); key(p, 'location', fr(t0 + 0.08), tgt)

# inflamación: halo rojo que se hincha y late
infl = sphere('inflamacion', J, 1.0, (1.0, 0.25, 0.15))
infl.data.materials.clear(); infl.data.materials.append(mat('inflamacion', (1.0, 0.25, 0.15), alpha=0.0, emit=0.8))
infl.rotation_euler = cap.rotation_euler; infl.scale = (0.2, 0.2, 0.17)
alpha_key(infl, T_INFL, 0.0); alpha_key(infl, T_INFL + 0.06, 0.32)
k = fr(T_INFL + 0.06); on = True
while k < F:
    key(infl, 'scale', k, Vector((0.24, 0.24, 0.2)) if on else Vector((0.21, 0.21, 0.18))); k += max(6, F // 36); on = not on

# cámara: pie entero en 3/4 medial -> acercamiento a la 1.ª MTF
cam = setup3d((0, -6, 2), (0, 0, 0), lens=45)
side = Vector((J.x, 0, 0)).normalized() if abs(J.x) > 0.05 else Vector((-1, 0, 0))   # lado medial (el del dedo gordo)
for j in range(25):
    t = j / 24; z = ease((t - 0.18) / 0.22)
    tgt = Vector((0, 0, 0)).lerp(J, z)
    d = (side * 0.8 + Vector((0, -0.9, 0.7))).normalized().lerp((side * 0.55 + Vector((0, -0.5, 0.65))).normalized(), z).normalized()
    p = tgt + d * (6.2 - 4.2 * z)
    cam.location = p; cam.rotation_euler = (tgt - p).to_track_quat('-Z', 'Y').to_euler()
    cam.keyframe_insert('location', frame=fr(t)); cam.keyframe_insert('rotation_euler', frame=fr(t))
scn = bpy.context.scene; scn.frame_end = F
if PREV:
    os.makedirs(OUT, exist_ok=True)
    for i, t in enumerate((0.05, 0.28, 0.45, 0.62, 0.75, 0.97)):
        scn.frame_set(fr(t)); scn.render.filepath = os.path.join(OUT, f'f_{i + 1:04d}.png')
        bpy.ops.render.render(write_still=True)
else:
    scn.render.filepath = os.path.join(OUT, 'f_')
    bpy.ops.render.render(animation=True)
