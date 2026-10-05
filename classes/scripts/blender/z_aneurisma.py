"""Hemorragia subaracnoidea por rotura de aneurisma (Z-Anatomy, CC BY-SA 4.0).
El cerebro gira hasta verse desde la base, se vuelve translúcido y aparece el polígono de Willis con flujo;
un aneurisma de la comunicante anterior crece, se rompe y la sangre llena las cisternas basales.
    Blender -b -P z_aneurisma.py -- <out> <frames> [preview]
"""
import bpy, sys, os, math, random
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from anatomia3d import sphere, key, ease, color_key
import zcommon as Z
from zcommon import fr, zload, fade, alpha_key, bounds, centerlines, resample
from mathutils import Vector, Matrix

argv = sys.argv[sys.argv.index('--') + 1:]
OUT, F = argv[0], int(argv[1]); PREV = len(argv) > 2
Z.F[0] = F
random.seed(4)
bpy.ops.wm.read_factory_settings(use_empty=True)

CORTEX = (0.93, 0.76, 0.70); CEREB = (0.86, 0.62, 0.58); STEM = (0.84, 0.76, 0.70); ART = (0.88, 0.10, 0.08)
names = [l.strip() for l in open(os.path.join(Z.HERE, 'zparts_cerebro.txt')) if l.strip()]
CEREB_RX = ('lobule', 'vermis', 'Culmen', 'Declive', 'Flocculus', 'flocculus', 'Lingula', 'Tonsil', 'Central lobule')
cortex, cereb = [], []
for n in names:
    if n in ('Hippocampus.l', 'Hippocampus.r', 'Fornix.l', 'Fornix.r', 'Corpus callosum'):
        continue
    is_c = any(k in n for k in CEREB_RX) and 'parietal' not in n
    o = zload(n, CEREB if is_c else CORTEX)
    if o: (cereb if is_c else cortex).append(o)
stem = [zload(f'{p}.{s}', STEM) for p in ('Midbrain', 'Pons', 'Medulla oblongata') for s in 'lr']
stem = [o for o in stem if o]
for s in 'lr':
    for n in ('Optic chiasm', 'Optic tract'):
        o = zload(f'{n}.{s}', (0.95, 0.90, 0.75)); stem.append(o)
ARTS = ['Anterior cerebral artery.l', 'Anterior cerebral artery.r', 'Anterior communicating artery', 'Basilar artery',
        'Internal carotid artery.l', 'Internal carotid artery.r', 'Middle cerebral artery (M1-segment).l', 'Middle cerebral artery (M1-segment).r',
        'Middle cerebral artery (M3 segment).l', 'Middle cerebral artery (M3-segment).r', 'Posterior cerebral artery.l', 'Posterior cerebral artery.r',
        'Posterior communicating artery.l', 'Posterior communicating artery.r', 'Superior cerebellar artery.l', 'Superior cerebellar artery.r',
        'Vertebral artery.l', 'Vertebral artery.r']
art = {n: zload(n, ART, emit=0.15) for n in ARTS}
CL = centerlines(ARTS)

# normalizar: centro en el polígono, cerebro de ~4 unidades
core = [art[n] for n in ('Anterior communicating artery', 'Posterior communicating artery.l', 'Posterior communicating artery.r', 'Basilar artery')]
clo, chi = bounds(core); c = (clo + chi) / 2
blo, bhi = bounds(cortex); s = 4.0 / max(bhi - blo)
M = Matrix.Scale(s, 4) @ Matrix.Translation(-c)
for o in cortex + cereb + stem + list(art.values()):
    o.data.transform(M @ o.matrix_world); o.matrix_world = Matrix.Identity(4)
CL = {k: [[M @ p for p in sp] for sp in v] for k, v in CL.items()}
blo, bhi = bounds(cortex)
print('BRAIN', blo, bhi)


def C(n):
    return max(CL[n], key=len) if CL.get(n) else Z.mesh_centerline(art[n])


def chain(*paths):
    out = list(paths[0])
    for p in paths[1:]:
        p = p if (p[0] - out[-1]).length < (p[-1] - out[-1]).length else p[::-1]
        out += p
    return out


def up(p):     # de abajo hacia arriba
    return p if p[0].z < p[-1].z else p[::-1]


# ------------------------------------------------------------------ guion
T_ORB, T_FADE0, T_FADE1, T_AN0, T_RUP, T_BLOOD1 = 0.24, 0.20, 0.36, 0.40, 0.57, 0.86
for i, o in enumerate(cortex):
    t0 = T_FADE0 + 0.08 * (i / max(1, len(cortex) - 1))
    fade(o, t0, t0 + 0.08, 1.0, 0.13)
for o in cereb:
    fade(o, T_FADE0, T_FADE1, 1.0, 0.0)
for o in stem:
    fade(o, T_FADE0, T_FADE1, 1.0, 0.35)

# flujo arterial
BLOOD = (1.0, 0.35, 0.30)
paths = []
for sd in 'lr':
    ica = up(C(f'Internal carotid artery.{sd}'))
    paths.append(chain(ica, C(f'Middle cerebral artery (M1-segment).{sd}')))
    paths.append(chain(ica, C(f'Anterior cerebral artery.{sd}')))
bas = chain(up(C('Vertebral artery.l')), C('Basilar artery'))
for sd in 'lr':
    paths.append(chain(bas, C(f'Posterior cerebral artery.{sd}')))
for pi, path in enumerate(paths):
    pts = resample(path, 0.05)
    for i in range(6):
        p = sphere(f'f{pi}_{i}', pts[0], 0.028, BLOOD, emit=2.0)
        key(p, 'scale', 1, Vector((0.001,) * 3)); start = fr(0.30 + 0.012 * i)
        key(p, 'scale', start - 1, Vector((0.001,) * 3)); key(p, 'scale', start, Vector((1, 1, 1)))
        L = int(F * 0.09); k = start
        while k < fr(T_RUP + 0.1):
            for j in range(0, len(pts), max(1, len(pts) // 16)):
                key(p, 'location', k + int(L * j / len(pts)), pts[j])
            key(p, 'location', k + L - 1, pts[-1]); k += L
        key(p, 'scale', fr(T_RUP + 0.1), Vector((1, 1, 1))); key(p, 'scale', fr(T_RUP + 0.12), Vector((0.001,) * 3))
        for fc in p.animation_data.action.fcurves:
            for kp in fc.keyframe_points: kp.interpolation = 'LINEAR'

# aneurisma en la comunicante anterior
acom = C('Anterior communicating artery'); an_p = sum(acom, Vector()) / len(acom)
an_p = an_p + Vector((0, -0.04, -0.03))
an = sphere('aneurisma', an_p, 0.085, (0.95, 0.18, 0.12), emit=0.3)
key(an, 'scale', 1, Vector((0.001,) * 3)); key(an, 'scale', fr(T_AN0), Vector((0.001,) * 3))
key(an, 'scale', fr(T_AN0 + 0.08), Vector((0.75,) * 3))
for k in range(4):                                   # late con el pulso
    key(an, 'scale', fr(T_AN0 + 0.09 + k * 0.02), Vector((0.9,) * 3)); key(an, 'scale', fr(T_AN0 + 0.10 + k * 0.02), Vector((0.8,) * 3))
key(an, 'scale', fr(T_RUP - 0.005), Vector((1.0,) * 3))
color_key(an, fr(T_RUP - 0.01), (0.95, 0.18, 0.12), emit=0.3)
color_key(an, fr(T_RUP), (1.0, 0.95, 0.85), emit=6.0)      # destello
color_key(an, fr(T_RUP + 0.03), (0.55, 0.05, 0.04), emit=0.2)
key(an, 'scale', fr(T_RUP + 0.03), Vector((0.6,) * 3))

# sangre en las cisternas: manchas planas que avanzan desde el aneurisma (cisura de Silvio, interhemisférica, alrededor del tronco)
SANG = (0.45, 0.02, 0.03)
rays = [(Vector((1.3, 0.25, 0.08)), 1.4), (Vector((-1.3, 0.25, 0.08)), 1.4), (Vector((0, -1.1, 0.05)), 0.8),
        (Vector((0.6, 0.85, -0.08)), 1.0), (Vector((-0.6, 0.85, -0.08)), 1.0), (Vector((0.25, 0.45, -0.12)), 0.6), (Vector((-0.25, 0.45, -0.12)), 0.6)]
blobs = 0
for d, w in rays:
    n = int(26 * w)
    for i in range(n):
        f = (i + 1) / n
        q = an_p + d * f + Vector((random.uniform(-0.09, 0.09), random.uniform(-0.09, 0.09), random.uniform(-0.03, 0.03)))
        b = sphere(f'sangre{blobs}', q, 1.0, SANG, alpha=0.9, emit=0.15); blobs += 1
        r = random.uniform(0.09, 0.16) * (1.2 - 0.5 * f)
        t = T_RUP + 0.01 + (T_BLOOD1 - T_RUP - 0.06) * f + random.uniform(0, 0.03)
        key(b, 'scale', 1, Vector((0.001,) * 3)); key(b, 'scale', fr(t), Vector((0.001,) * 3))
        key(b, 'scale', fr(t + 0.05), Vector((r, r, r * 0.35)))

# ------------------------------------------------------------------ cámara: lateral izquierda -> base (anterior arriba)
cam_c = Vector((0, 0, 0))
cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam')); bpy.context.scene.collection.objects.link(cam)
bpy.context.scene.camera = cam; cam.data.lens = 40
from anatomia3d import setup as setup3d
setup3d((9, 0, 0), (0, 0, 0), lens=40)                  # luces y render; luego reemplazamos su cámara
bpy.context.scene.camera = cam
R = 11.0
d0 = Vector((1.0, -0.35, -0.25)).normalized(); d1 = Vector((0.0, -0.22, -1.0)).normalized()
for j in range(31):
    t = T_ORB * j / 30; a = ease(j / 30)
    d = d0.lerp(d1, a).normalized()
    rr = R - (R - 8.2) * ease((t - 0.1) / (T_ORB - 0.1))
    cam.location = d * rr
    cam.rotation_euler = (-d).to_track_quat('-Z', 'Y').to_euler()
    cam.keyframe_insert('location', frame=fr(t)); cam.keyframe_insert('rotation_euler', frame=fr(t))
# acercamiento suave a las cisternas tras la rotura
d = d1; cam.location = d * 8.2; cam.keyframe_insert('location', frame=fr(T_RUP))
cam.location = d * 7.0; cam.keyframe_insert('location', frame=fr(0.95))

scn = bpy.context.scene; scn.frame_end = F
for o in list(scn.objects):          # quitar la cámara extra de setup3d
    if o.type == 'CAMERA' and o is not cam:
        bpy.data.objects.remove(o, do_unlink=True)
if PREV:
    os.makedirs(OUT, exist_ok=True)
    for i, t in enumerate((0.03, 0.18, 0.30, 0.48, 0.62, 0.95)):
        scn.frame_set(fr(t)); scn.render.filepath = os.path.join(OUT, f'f_{i + 1:04d}.png')
        bpy.ops.render.render(write_still=True)
else:
    scn.render.filepath = os.path.join(OUT, 'f_')
    bpy.ops.render.render(animation=True)
