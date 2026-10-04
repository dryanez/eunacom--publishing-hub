"""Parkinson con anatomía real (Z-Anatomy, CC BY-SA 4.0): vía nigroestriada.
    Blender -b -P z_parkinson.py -- <out> <frames> [preview]
"""
import bpy, sys, os, math
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from anatomia3d import material, sphere, key, ease, color_key, bbox as obbox, setup as setup3d
from mathutils import Vector, Matrix

ZOBJ = os.path.expanduser('~/Documents/Archive/Apps/assets3d/zanatomy/obj')
argv = sys.argv[sys.argv.index('--') + 1:]
OUT, FR = argv[0], int(argv[1]); PREV = len(argv) > 2


def zload(name, rgb, alpha=1.0, emit=0.0):
    bpy.ops.wm.obj_import(filepath=os.path.join(ZOBJ, name + '.obj'), forward_axis='Y', up_axis='Z')
    o = bpy.context.selected_objects[0]; o.name = name
    o.data.materials.clear(); o.data.materials.append(material(name, rgb, alpha, emit=emit))
    bpy.ops.object.shade_smooth()
    return o


bpy.ops.wm.read_factory_settings(use_empty=True)
STRI = (0.25, 0.55, 0.95); NIG = (0.07, 0.05, 0.05)
P = {}
for s in 'lr':
    P['wm' + s] = zload(f'White matter of telencephalon.{s}', (0.92, 0.88, 0.84), alpha=0.035)
    P['cau' + s] = zload(f'Caudate nucleus.{s}', STRI)
    P['put' + s] = zload(f'Putamen.{s}', STRI)
    P['gp' + s] = zload(f'Globus pallidus.{s}', (0.60, 0.50, 0.88))
    P['tha' + s] = zload(f'Thalamus.{s}', (0.88, 0.68, 0.48))
    P['mid' + s] = zload(f'Midbrain.{s}', (0.84, 0.76, 0.70), alpha=0.45)
    P['rn' + s] = zload(f'Red nucleus.{s}', (0.85, 0.20, 0.20))
    P['bp' + s] = zload(f'Base of peduncle.{s}', (0.84, 0.76, 0.70), alpha=0.55)
    P['pons' + s] = zload(f'Pons.{s}', (0.84, 0.76, 0.70), alpha=0.35)

# normalizar: centro en ganglios basales, escala ~2 unidades
core = [P[k] for k in P if not k.startswith('wm')]
lo, hi = obbox(core[0])
for o in core[1:]:
    a, b = obbox(o); lo = Vector(map(min, lo, a)); hi = Vector(map(max, hi, b))
c = (lo + hi) / 2; s = 2.2 / max(hi - lo)
M = Matrix.Scale(s, 4) @ Matrix.Translation(-c)
for o in P.values():
    o.data.transform(M @ o.matrix_world); o.matrix_world = Matrix.Identity(4)

# sustancia nigra: lámina pigmentada entre la base del pedúnculo y el núcleo rojo
nig = []
for sd in 'lr':
    blo, bhi = obbox(P['bp' + sd]); rlo, rhi = obbox(P['rn' + sd])
    pos = (blo + bhi) / 2 * 0.5 + (rlo + rhi) / 2 * 0.5
    e = bhi - blo
    o = sphere(f'nigra_{sd}', pos, 1.0, NIG)
    o.scale = (e.x * 0.5, e.y * 0.28, e.z * 0.3)
    nig.append(o)

F = FR
src = nig[0].location.copy()
tl, th = obbox(P['putl']); put_c = (tl + th) / 2
cl, ch = obbox(P['caul']); cau_c = (cl + ch) / 2
for i in range(16):
    p = sphere(f'da{i}', src, 0.065, (1.0, 0.82, 0.2), emit=4.0)
    tgt = put_c if i % 2 else cau_c
    period = int(F * 0.22); t0 = 1 + (i % 8) * int(F * 0.03)
    k = t0
    while k < F:
        key(p, 'location', k, src)
        key(p, 'location', min(F, k + period - 1), tgt)
        k += period
    if i >= 4:   # en la enfermedad quedan pocas
        key(p, 'scale', int(F * 0.5), Vector((1, 1, 1)))
        key(p, 'scale', int(F * 0.72), Vector((0.001,) * 3))
for o in nig:
    color_key(o, int(F * 0.5), NIG)
    color_key(o, int(F * 0.75), (0.78, 0.74, 0.70))
for k_ in ('putl', 'caul', 'putr', 'caur'):
    color_key(P[k_], int(F * 0.5), STRI)
    color_key(P[k_], int(F * 0.75), (0.32, 0.38, 0.52))

# vista oblicua anterior-izquierda e inferior para ver mesencéfalo y estriado
cam = setup3d((-4.4, -6.0, -0.9), (0, 0, -0.1), lens=46)
bpy.context.scene.frame_end = F
bpy.context.scene.render.filepath = os.path.join(OUT, 'f_')
if PREV:
    os.makedirs(OUT, exist_ok=True)
    for i, fr in enumerate((0.15, 0.4, 0.95)):
        bpy.context.scene.frame_set(max(1, int(F * fr)))
        bpy.context.scene.render.filepath = os.path.join(OUT, f'f_{i + 1:04d}.png')
        bpy.ops.render.render(write_still=True)
else:
    bpy.ops.render.render(animation=True)
