"""Obstrucción intestinal por brida (Z-Anatomy, CC BY-SA 4.0).
Una brida estrangula el íleon distal: las asas proximales se dilatan con gas y líquido (y luchan), el colon queda colapsado.
    Blender -b -P z_obstruccion.py -- <out> <frames> [preview]
"""
import bpy, sys, os, math, random
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from anatomia3d import sphere, key, ease, color_key, cylinder, setup as setup3d
import zcommon as Z
from zcommon import fr, zload, bounds, alpha_key
from mathutils import Vector, Matrix, kdtree

argv = sys.argv[sys.argv.index('--') + 1:]
OUT, F = argv[0], int(argv[1]); PREV = len(argv) > 2
Z.F[0] = F
random.seed(3)
bpy.ops.wm.read_factory_settings(use_empty=True)

SB = (0.92, 0.62, 0.56); SBHOT = (0.90, 0.36, 0.32); COL = (0.86, 0.70, 0.58); PALE = (0.80, 0.76, 0.70)
P = {}
P['sb'] = zload('Jejunum', SB, alpha=1.0)
P['duo'] = zload('Duodenum', SB)
P['sto'] = zload('Stomach', (0.90, 0.66, 0.60), alpha=0.5)
P['liv'] = zload('Liver', (0.62, 0.22, 0.18), alpha=0.25)
for n in ('Ascending colon', 'Transverse colon', 'Descending colon', 'Sigmoid colon', 'Vermiform appendix'):
    P[n] = zload(n, COL)
P = {k: v for k, v in P.items() if v}
colon = [P[n] for n in ('Ascending colon', 'Transverse colon', 'Descending colon', 'Sigmoid colon') if n in P]

lo, hi = bounds([P['sb']] + colon); c = (lo + hi) / 2; s = 2.8 / max(hi - lo)
M = Matrix.Scale(s, 4) @ Matrix.Translation(-c)
for o in P.values():
    o.data.transform(M @ o.matrix_world); o.matrix_world = Matrix.Identity(4)

sb = P['sb']
# punto de obstrucción: íleon terminal, cerca del ciego
asc = P['Ascending colon']; av = [asc.matrix_world @ v.co for v in asc.data.vertices]
cecum = min(av, key=lambda q: q.z)
kd = kdtree.KDTree(len(sb.data.vertices))
for i, v in enumerate(sb.data.vertices): kd.insert(v.co, i)
kd.balance()
O, _, _ = kd.find(cecum)
# alejarse un poco del ciego, hacia el interior del abdomen
O = Vector(kd.find(O + (Vector((0, 0, 0)) - O).normalized() * 0.12)[0])

T_BAND, T_DIL0, T_DIL1, T_GAS, T_COL = 0.12, 0.28, 0.66, 0.40, 0.34
# brida: banda fibrosa que cruza por delante del asa
band = cylinder('brida', O + Vector((-0.42, -0.10, 0.32)), O + Vector((0.40, -0.10, -0.26)), 0.032, (1.0, 0.95, 0.70), emit=0.6)
key(band, 'scale', 1, Vector((0.001, 0.001, 0.001))); key(band, 'scale', fr(T_BAND), Vector((0.001, 0.001, 0.001)))
key(band, 'scale', fr(T_BAND + 0.08), Vector((1, 1, 1)))

# dilatación de las asas proximales (lejos de la brida); el íleon distal a la brida queda fino
sb.shape_key_add(name='base'); dil = sb.shape_key_add(name='dil')
for i, v in enumerate(sb.data.vertices):
    d = (v.co - O).length
    w = ease((d - 0.10) / 0.30)
    pinch = 1 - ease(d / 0.09)
    dil.data[i].co = v.co + v.normal * (0.075 * w - 0.03 * pinch)
dil.value = 0; dil.keyframe_insert('value', frame=fr(T_DIL0))
k = fr(T_DIL0); val = 0.0; step = max(6, F // 30); j = 0
while k < F:                                       # peristaltismo de lucha: crece en pulsos
    base = min(1.0, (k - fr(T_DIL0)) / max(1, fr(T_DIL1) - fr(T_DIL0)))
    dil.value = base * (0.88 if j % 2 else 1.0); dil.keyframe_insert('value', frame=k)
    k += step; j += 1
color_key(sb, fr(T_DIL0), SB); color_key(sb, fr(T_DIL1), SBHOT, emit=0.1)
alpha_key(sb, T_GAS - 0.02, 1.0); alpha_key(sb, T_GAS + 0.06, 0.62)

# gas: burbujas dentro de las asas dilatadas
verts = [(v.co.copy(), v.normal.copy()) for v in sb.data.vertices if (v.co - O).length > 0.45]
random.shuffle(verts)
for i, (p, n) in enumerate(verts[:46]):
    b = sphere(f'gas{i}', p - n * 0.05, random.uniform(0.03, 0.05), (0.95, 0.97, 1.0), emit=0.6)
    t = T_GAS + 0.25 * random.random()
    key(b, 'scale', 1, Vector((0.001,) * 3)); key(b, 'scale', fr(t), Vector((0.001,) * 3)); key(b, 'scale', fr(t + 0.05), Vector((1, 1, 1)))

# colon distal colapsado
for o in colon:
    o.shape_key_add(name='base'); sk = o.shape_key_add(name='colapso')
    for i, v in enumerate(o.data.vertices):
        sk.data[i].co = v.co - v.normal * 0.018
    sk.value = 0; sk.keyframe_insert('value', frame=fr(T_COL)); sk.value = 1; sk.keyframe_insert('value', frame=fr(T_COL + 0.2))
    color_key(o, fr(T_COL), COL); color_key(o, fr(T_COL + 0.2), PALE)

cam = setup3d((0.6, -7.6, 0.6), (0.0, 0, 0.1), lens=44)
scn = bpy.context.scene; scn.frame_end = F
for j in range(13):
    t = j / 12; a = -0.18 + 0.30 * ease(t)
    p = Vector((math.sin(a) * 7.6, -math.cos(a) * 7.6, 0.6 + 0.3 * t)) * (1 - 0.06 * ease(t))
    cam.location = p; cam.rotation_euler = (Vector((0, 0, 0.1)) - p).to_track_quat('-Z', 'Y').to_euler()
    cam.keyframe_insert('location', frame=fr(t)); cam.keyframe_insert('rotation_euler', frame=fr(t))
print('OBSTRUCCION', tuple(round(x, 3) for x in O))
if PREV:
    os.makedirs(OUT, exist_ok=True)
    for i, t in enumerate((0.05, 0.22, 0.45, 0.7, 0.97)):
        scn.frame_set(fr(t)); scn.render.filepath = os.path.join(OUT, f'f_{i + 1:04d}.png')
        bpy.ops.render.render(write_still=True)
else:
    scn.render.filepath = os.path.join(OUT, 'f_')
    bpy.ops.render.render(animation=True)
