"""Crisis focal que se propaga (Z-Anatomy, CC BY-SA 4.0).
Foco en la corteza motora izquierda -> se extiende por el hemisferio -> pasa al otro (bilateral tónico-clónica).
    Blender -b -P z_crisis.py -- <out> <frames> [preview]
"""
import bpy, sys, os, math
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from anatomia3d import ease, color_key, setup as setup3d
import zcommon as Z
from zcommon import fr, zload, bounds
from mathutils import Vector, Matrix

argv = sys.argv[sys.argv.index('--') + 1:]
OUT, F = argv[0], int(argv[1]); PREV = len(argv) > 2
Z.F[0] = F
bpy.ops.wm.read_factory_settings(use_empty=True)

CORTEX = (0.93, 0.76, 0.70); CEREB = (0.86, 0.62, 0.58); STEM = (0.84, 0.76, 0.70)
HOT = (1.0, 0.50, 0.08); HOT2 = (0.85, 0.16, 0.08)
names = [l.strip() for l in open(os.path.join(Z.HERE, 'zparts_cerebro.txt')) if l.strip()]
CEREB_RX = ('lobule', 'vermis', 'Culmen', 'Declive', 'Flocculus', 'flocculus', 'Lingula', 'Tonsil', 'Central lobule')
cortex, other = [], []
for n in names:
    if n in ('Hippocampus.l', 'Hippocampus.r', 'Fornix.l', 'Fornix.r', 'Corpus callosum'):
        continue
    is_c = any(k in n for k in CEREB_RX) and 'parietal' not in n
    o = zload(n, CEREB if is_c else CORTEX)
    if o: (other if is_c else cortex).append(o)
for p in ('Midbrain', 'Pons', 'Medulla oblongata'):
    for s in 'lr':
        o = zload(f'{p}.{s}', STEM)
        if o: other.append(o)
for s in 'lr':
    o = zload(f'White matter of telencephalon.{s}', (0.86, 0.78, 0.74))
    if o: other.append(o)

lo, hi = bounds(cortex); c = (lo + hi) / 2; sc = 4.0 / max(hi - lo)
M = Matrix.Scale(sc, 4) @ Matrix.Translation(-c)
for o in cortex + other:
    o.data.transform(M @ o.matrix_world); o.matrix_world = Matrix.Identity(4)

focus = next(o for o in cortex if o.name == 'Precentral gyrus.l')
flo, fhi = bounds([focus]); fc = (flo + fhi) / 2
LEFT = 1 if fc.x > 0 else -1                      # lado del hemisferio izquierdo en x


def cen(o):
    a, b = bounds([o]); return (a + b) / 2


T_FOCUS, T_SPREAD0, T_SPREAD1, T_CROSS0, T_CROSS1 = 0.06, 0.30, 0.55, 0.58, 0.80
PULSE = max(4, F // 48)


def activate(o, t, strong=1.0):
    """Desde t la circunvolución late con actividad eléctrica hasta el final."""
    k = fr(t)
    color_key(o, max(1, k - 1), CORTEX, emit=0.0)
    on = True
    while k < F:
        color_key(o, k, HOT if on else HOT2, emit=(1.1 if on else 0.35) * strong)
        k += PULSE; on = not on


left = [o for o in cortex if o.name.endswith('.l') and o is not focus]
right = [o for o in cortex if not o.name.endswith('.l')]
activate(focus, T_FOCUS, 1.2)
left.sort(key=lambda o: (cen(o) - fc).length)
for i, o in enumerate(left):
    activate(o, T_SPREAD0 + (T_SPREAD1 - T_SPREAD0) * i / max(1, len(left) - 1))
mirror = Vector((-fc.x, fc.y, fc.z))
right.sort(key=lambda o: (cen(o) - mirror).length)
for i, o in enumerate(right):
    activate(o, T_CROSS0 + (T_CROSS1 - T_CROSS0) * i / max(1, len(right) - 1))
for o in cortex:                                   # el resto queda en reposo hasta activarse
    color_key(o, 1, CORTEX, emit=0.0)

# cámara: lateral izquierda (ve el foco) -> arriba y atrás para ver ambos hemisferios
cam = setup3d((LEFT * 9.5, -2.0, 2.0), (0, 0, 0.2), lens=45)
pts = [(0.0, Vector((LEFT * 9.5, -2.0, 2.0))), (T_SPREAD1, Vector((LEFT * 8.8, -3.5, 4.0))),
       (T_CROSS0 + 0.04, Vector((LEFT * 4.0, 1.5, 8.5))), (0.97, Vector((0.3 * LEFT, 3.6, 9.2)))]
for j in range(41):
    t = 0.97 * j / 40
    for (ta, pa), (tb, pb) in zip(pts, pts[1:]):
        if ta <= t <= tb:
            a = ease((t - ta) / (tb - ta)); p = pa.lerp(pb, a); break
    cam.location = p
    cam.rotation_euler = (Vector((0, 0, 0.1)) - p).to_track_quat('-Z', 'Y').to_euler()
    cam.keyframe_insert('location', frame=fr(t)); cam.keyframe_insert('rotation_euler', frame=fr(t))

scn = bpy.context.scene; scn.frame_end = F
if PREV:
    os.makedirs(OUT, exist_ok=True)
    for i, t in enumerate((0.04, 0.2, 0.42, 0.56, 0.7, 0.95)):
        scn.frame_set(fr(t)); scn.render.filepath = os.path.join(OUT, f'f_{i + 1:04d}.png')
        bpy.ops.render.render(write_still=True)
else:
    scn.render.filepath = os.path.join(OUT, 'f_')
    bpy.ops.render.render(animation=True)
