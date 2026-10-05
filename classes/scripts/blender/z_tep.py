"""Tromboembolismo pulmonar con anatomía real (Z-Anatomy, CC BY-SA 4.0).
Se forma un trombo en las venas de la pantorrilla izquierda, se suelta y la cámara lo sigue: poplítea, femoral,
ilíacas, cava, aurícula y ventrículo derechos, tronco pulmonar; se enclava en la arteria pulmonar derecha,
el pulmón distal queda sin perfusión y el ventrículo derecho se dilata.
    Blender -b -P z_tep.py -- <out> <frames> [preview]
"""
import bpy, sys, os, math
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from anatomia3d import sphere, key, ease, color_key, setup as setup3d
import zcommon as Z
from zcommon import fr, zload, bounds, centerlines, resample, alpha_key
from mathutils import Vector, Matrix

argv = sys.argv[sys.argv.index('--') + 1:]
OUT, F = argv[0], int(argv[1]); PREV = len(argv) > 2
Z.F[0] = F
bpy.ops.wm.read_factory_settings(use_empty=True)

VEN = (0.30, 0.40, 0.90); PA = (0.40, 0.35, 0.90); BONE = (0.90, 0.86, 0.76); LUNG = (0.93, 0.60, 0.62); ISCH = (0.45, 0.48, 0.62)
P = {}
ROUTE = ['Posterior tibial veins.l', 'Popliteal vein.l', 'Femoral vein.l', 'External iliac vein.l', 'Common iliac vein.l',
         'Inferior vena cava (abdominal part)', 'Inferior vena cava (thoracic part)']
for n in ROUTE + ['Common iliac vein.r', 'External iliac vein.r', 'Femoral vein.r', 'Superior vena cava']:
    P[n] = zload(n, VEN)
for n in ('Pulmonary trunk', 'Right pulmonary artery', 'Left pulmonary artery'):
    P[n] = zload(n, PA)
P['RA'] = zload('Right atrium', (0.55, 0.30, 0.70), alpha=0.45)
P['RV'] = zload('Right ventricle', (0.55, 0.30, 0.70), alpha=0.45)
P['LA'] = zload('Left atrium', (0.80, 0.30, 0.30), alpha=0.25)
P['LV'] = zload('Left ventricle', (0.80, 0.30, 0.30), alpha=0.25)
P['Ao'] = zload('Ascending aorta', (0.85, 0.15, 0.12), alpha=0.5)
lungs_r = [zload(n, LUNG, alpha=0.32) for n in ('Superior lobe of right lung', 'Middle lobe of right lung', 'Inferior lobe of right lung')]
lungs_l = [zload(n, LUNG, alpha=0.32) for n in ('Superior lobe of left lung', 'Inferior lobe of left lung')]
bones = [zload(n, BONE, alpha=0.75) for n in ('Femur.l', 'Tibia.l', 'Fibula.l', 'Patella.l', 'Hip bone.l', 'Hip bone.r', 'Sacrum')]
allo = [o for o in list(P.values()) + lungs_r + lungs_l + bones if o]
CL = centerlines(ROUTE + ['Pulmonary trunk', 'Right pulmonary artery'])

lo, hi = bounds(allo); c = (lo + hi) / 2; s = 6.0 / (hi.z - lo.z)
M = Matrix.Scale(s, 4) @ Matrix.Translation(-c)
for o in allo:
    o.data.transform(M @ o.matrix_world); o.matrix_world = Matrix.Identity(4)
CL = {k: [[M @ p for p in sp] for sp in v] for k, v in CL.items()}


def C(n):
    return max(CL[n], key=len) if CL.get(n) else Z.mesh_centerline(P[n] if n in P else None)


def cen(o):
    a, b = bounds([o]); return (a + b) / 2


# recorrido del émbolo
seg0 = C(ROUTE[0]); seg0 = seg0 if seg0[0].z < seg0[-1].z else seg0[::-1]
path = list(seg0)
for n in ROUTE[1:] + ['Pulmonary trunk', 'Right pulmonary artery']:
    sg = C(n)
    if not sg: continue
    if n == 'Pulmonary trunk':          # pasar por la aurícula y el ventrículo derechos
        path += [cen(P['RA']), cen(P['RV'])]
    sg = sg if (sg[0] - path[-1]).length < (sg[-1] - path[-1]).length else sg[::-1]
    path += sg
pr = C('Right pulmonary artery'); pts = resample(path, 0.03)
stop_i = len(pts) - max(1, int(len(pr) and len(resample(pr, 0.03)) * 0.4))
pts = pts[:stop_i]

T_DVT0, T_DVT1, T_BREAK, T_ARRIVE, T_ISCH, T_RV = 0.03, 0.22, 0.26, 0.74, 0.78, 0.84
CLOT = (0.45, 0.04, 0.04)
i0 = int(len(resample(seg0, 0.03)) * 0.55)
dvt_p = pts[i0]
thr = sphere('trombo', dvt_p, 1.0, CLOT, emit=0.1)
key(thr, 'scale', 1, Vector((0.001,) * 3)); key(thr, 'scale', fr(T_DVT0), Vector((0.001,) * 3))
key(thr, 'scale', fr(T_DVT1), Vector((0.04, 0.04, 0.15)))
key(thr, 'scale', fr(T_BREAK), Vector((0.04, 0.04, 0.15))); key(thr, 'scale', fr(T_BREAK + 0.02), Vector((0.045, 0.045, 0.08)))
emb = sphere('embolo', dvt_p, 1.0, CLOT, emit=0.25)
key(emb, 'scale', 1, Vector((0.001,) * 3)); key(emb, 'scale', fr(T_BREAK - 0.005), Vector((0.001,) * 3))
key(emb, 'scale', fr(T_BREAK), Vector((0.05, 0.05, 0.09)))
N = 60
for j in range(N + 1):
    a = j / N
    t = T_BREAK + (T_ARRIVE - T_BREAK) * a
    q = pts[min(len(pts) - 1, i0 + int((len(pts) - 1 - i0) * a))]
    key(emb, 'location', fr(t), q)
key(emb, 'location', F, pts[-1])
color_key(emb, fr(T_ARRIVE), CLOT, emit=0.25); color_key(emb, fr(T_ARRIVE + 0.02), (0.9, 0.2, 0.15), emit=2.0)
color_key(emb, fr(T_ARRIVE + 0.06), CLOT, emit=0.4)

# pulmón derecho sin perfusión; VD se dilata
for o in lungs_r:
    color_key(o, fr(T_ISCH), LUNG); color_key(o, fr(T_ISCH + 0.1), ISCH)
    alpha_key(o, T_ISCH, 0.32); alpha_key(o, T_ISCH + 0.1, 0.5)
rv = P['RV']; rc = cen(rv); rv.data.transform(Matrix.Translation(-rc)); rv.location = rc
key(rv, 'scale', fr(T_RV), Vector((1, 1, 1))); key(rv, 'scale', fr(T_RV + 0.1), Vector((1.2, 1.2, 1.2)))
color_key(rv, fr(T_RV), (0.55, 0.30, 0.70)); color_key(rv, fr(T_RV + 0.1), (0.85, 0.35, 0.45), emit=0.3)

# cámara que sigue al émbolo (anterior), alejándose al subir
cam = setup3d((0, -3, 0), (0, 0, 0), lens=40)
heart = cen(P['RV'])
def cam_at(t):
    if t <= T_BREAK:
        a = ease(t / T_BREAK); tgt = dvt_p + Vector((0, 0, 0.6 * (1 - a))); dist = 3.2 - 1.3 * a
    elif t <= T_ARRIVE:
        a = (t - T_BREAK) / (T_ARRIVE - T_BREAK)
        tgt = pts[min(len(pts) - 1, i0 + int((len(pts) - 1 - i0) * a))]; dist = 1.9 + 2.4 * ease(a)
    else:
        a = ease((t - T_ARRIVE) / (1 - T_ARRIVE))
        tgt = pts[-1].lerp(heart, 0.35) + Vector((0, 0, 1.0 * a)); dist = 4.3 - 0.8 * a
    return tgt, dist
prev = None
for j in range(97):
    t = j / 96
    tgt, dist = cam_at(t)
    if prev is not None:
        tgt = prev.lerp(tgt, 0.35)                 # suavizado
    prev = tgt
    ang = math.pi / 2 - math.pi * ease((t - T_BREAK) / 0.32)     # detrás de la pantorrilla -> lateral -> delante
    p = tgt + Vector((math.cos(ang) * dist + 0.25 * dist * (1 - math.cos(ang)) * 0, math.sin(ang) * dist, 0.18 * dist))
    cam.location = p; cam.rotation_euler = (tgt - p).to_track_quat('-Z', 'Y').to_euler()
    cam.keyframe_insert('location', frame=fr(t)); cam.keyframe_insert('rotation_euler', frame=fr(t))
scn = bpy.context.scene; scn.frame_end = F
if PREV:
    os.makedirs(OUT, exist_ok=True)
    for i, t in enumerate((0.15, 0.3, 0.45, 0.6, 0.76, 0.97)):
        scn.frame_set(fr(t)); scn.render.filepath = os.path.join(OUT, f'f_{i + 1:04d}.png')
        bpy.ops.render.render(write_still=True)
else:
    scn.render.filepath = os.path.join(OUT, 'f_')
    bpy.ops.render.render(animation=True)
