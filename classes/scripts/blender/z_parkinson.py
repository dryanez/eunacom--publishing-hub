"""Parkinson con anatomía real (Z-Anatomy, CC BY-SA 4.0): vía nigroestriada.
Cerebro completo que gira; se retiran por capas corteza, cerebelo, sustancia blanca y tálamo hasta dejar
solo estriado, mesencéfalo y sustancia nigra; luego la dopamina viaja y la nigra se despigmenta.
    Blender -b -P z_parkinson.py -- <out> <frames> [preview]
"""
import bpy, sys, os, math
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from anatomia3d import sphere, key, ease, color_key, bbox as obbox, setup as setup3d
from mathutils import Vector, Matrix

HERE = os.path.dirname(os.path.abspath(__file__))
ZOBJ = os.path.expanduser('~/Documents/Archive/Apps/assets3d/zanatomy/obj')
argv = sys.argv[sys.argv.index('--') + 1:]
OUT, FR = argv[0], int(argv[1]); PREV = len(argv) > 2
F = FR


def fr(t):
    return max(1, int(round(F * t)))


def mat(name, rgb, alpha=1.0, rough=0.5):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*rgb, 1)
    b.inputs['Roughness'].default_value = rough
    b.inputs['Coat Weight'].default_value = 0.12
    b.inputs['Alpha'].default_value = alpha
    m.surface_render_method = 'DITHERED'          # orden correcto al desvanecer muchas piezas superpuestas
    return m


def zload(name, rgb, alpha=1.0):
    p = os.path.join(ZOBJ, name + '.obj')
    if not os.path.exists(p):
        print('FALTA', name); return None
    bpy.ops.wm.obj_import(filepath=p, forward_axis='Y', up_axis='Z')
    sel = [x for x in bpy.context.selected_objects if x.type == 'MESH']
    bpy.context.view_layer.objects.active = sel[0]
    if len(sel) > 1:
        bpy.ops.object.join()
    o = bpy.context.view_layer.objects.active; o.name = name
    o.data.materials.clear(); o.data.materials.append(mat(name, rgb, alpha))
    bpy.ops.object.shade_smooth()
    return o


def fade(o, t0, t1, a0, a1):
    """Desvanece el material de o entre t0 y t1 (fracciones del total); si llega a 0 se oculta del render."""
    b = o.data.materials[0].node_tree.nodes['Principled BSDF'].inputs['Alpha']
    b.default_value = a0; b.keyframe_insert('default_value', frame=fr(t0))
    b.default_value = a1; b.keyframe_insert('default_value', frame=fr(t1))
    if a1 <= 0.001:
        o.hide_render = False; o.keyframe_insert('hide_render', frame=fr(t1))
        o.hide_render = True; o.keyframe_insert('hide_render', frame=fr(t1) + 1)


bpy.ops.wm.read_factory_settings(use_empty=True)
STRI = (0.25, 0.55, 0.95); NIG = (0.07, 0.05, 0.05)
CORTEX = (0.93, 0.76, 0.70); CEREB = (0.86, 0.62, 0.58); STEM = (0.84, 0.76, 0.70)

P = {}
for s in 'lr':
    P['cau' + s] = zload(f'Caudate nucleus.{s}', STRI)
    P['put' + s] = zload(f'Putamen.{s}', STRI)
    P['gp' + s] = zload(f'Globus pallidus.{s}', (0.60, 0.50, 0.88))
    P['tha' + s] = zload(f'Thalamus.{s}', (0.88, 0.68, 0.48))
    P['mid' + s] = zload(f'Midbrain.{s}', STEM)
    P['rn' + s] = zload(f'Red nucleus.{s}', (0.85, 0.20, 0.20))
    P['bp' + s] = zload(f'Base of peduncle.{s}', STEM)
    P['pons' + s] = zload(f'Pons.{s}', STEM)
    P['med' + s] = zload(f'Medulla oblongata.{s}', STEM)
    P['wm' + s] = zload(f'White matter of telencephalon.{s}', (0.86, 0.78, 0.74))
    P['lv' + s] = zload(f'Lateral ventricle.{s}', (0.45, 0.70, 0.95))
for n in ('Third ventricle', 'Fourth ventricle', 'Hypothalamus'):
    P[n] = zload(n, (0.45, 0.70, 0.95) if 'ventricle' in n else STEM)

names = [l.strip() for l in open(os.path.join(HERE, 'zparts_cerebro.txt')) if l.strip()]
CEREB_RX = ('lobule', 'vermis', 'Culmen', 'Declive', 'Flocculus', 'flocculus', 'Lingula', 'Tonsil', 'Central lobule')
cortex, cereb, deep = [], [], []
for n in names:
    is_c = any(k in n for k in CEREB_RX) and 'parietal' not in n
    if n in ('Hippocampus.l', 'Hippocampus.r', 'Fornix.l', 'Fornix.r', 'Corpus callosum'):
        o = zload(n, (0.95, 0.92, 0.88)); deep.append(o)
    elif is_c:
        o = zload(n, CEREB); cereb.append(o)
    else:
        o = zload(n, CORTEX); cortex.append(o)
cortex = [o for o in cortex if o]; cereb = [o for o in cereb if o]; deep = [o for o in deep if o]

# normalizar: centro en ganglios basales, escala ~2,2 unidades para el núcleo (igual que la versión anterior)
core = [P[k] for k in P if P[k] and k[:-1] in ('cau', 'put', 'gp', 'tha', 'mid', 'rn', 'bp', 'pons')]
lo, hi = obbox(core[0])
for o in core[1:]:
    a, b = obbox(o); lo = Vector(map(min, lo, a)); hi = Vector(map(max, hi, b))
c = (lo + hi) / 2; s = 2.2 / max(hi - lo)
M = Matrix.Scale(s, 4) @ Matrix.Translation(-c)
allobj = [o for o in list(P.values()) + cortex + cereb + deep if o]
for o in allobj:
    o.data.transform(M @ o.matrix_world); o.matrix_world = Matrix.Identity(4)

blo, bhi = obbox(cortex[0])
for o in cortex[1:] + cereb:
    a, b = obbox(o); blo = Vector(map(min, blo, a)); bhi = Vector(map(max, bhi, b))
brain_c = (blo + bhi) / 2

# ------------------------------------------------------------------ guion
T_PEEL0, T_PEEL1 = 0.17, 0.38      # corteza
T_CB0, T_CB1 = 0.27, 0.38          # cerebelo
T_DEEP0, T_DEEP1 = 0.36, 0.48      # sustancia blanca, cuerpo calloso, ventrículos, hipocampo
T_ZOOM0, T_ZOOM1 = 0.40, 0.55      # la cámara se acerca
T_PD = 0.56                        # comienza la vía nigroestriada

# corteza: primero lo más lejano del centro (las piezas externas), por hemisferio
cortex.sort(key=lambda o: -((sum(obbox(o), Vector()) / 2) - brain_c).length)
for i, o in enumerate(cortex):
    t0 = T_PEEL0 + (T_PEEL1 - T_PEEL0 - 0.06) * i / max(1, len(cortex) - 1)
    fade(o, t0, t0 + 0.06, 1.0, 0.0)
for i, o in enumerate(cereb):
    t0 = T_CB0 + (T_CB1 - T_CB0 - 0.05) * i / max(1, len(cereb) - 1)
    fade(o, t0, t0 + 0.05, 1.0, 0.0)
for o in deep + [P['wml'], P['wmr'], P['lvl'], P['lvr'], P['Third ventricle'], P['Fourth ventricle']]:
    if o: fade(o, T_DEEP0, T_DEEP1, 1.0, 0.0)
for k in ('thal', 'thar'):
    fade(P[k], T_DEEP0 + 0.04, T_DEEP1 + 0.04, 1.0, 0.35)
for k in ('midl', 'midr'):
    fade(P[k], T_DEEP0 + 0.04, T_DEEP1 + 0.04, 1.0, 0.22)
for k in ('bpl', 'bpr'):
    fade(P[k], T_DEEP0 + 0.04, T_DEEP1 + 0.04, 1.0, 0.3)
for k in ('ponsl', 'ponsr'):
    fade(P[k], T_DEEP0 + 0.04, T_DEEP1 + 0.04, 1.0, 0.3)
for k in ('medl', 'medr', 'Hypothalamus'):
    fade(P[k], T_DEEP0 + 0.04, T_DEEP1 + 0.04, 1.0, 0.0)

# sustancia nigra: lámina pigmentada entre la base del pedúnculo y el núcleo rojo
nig = []
for sd in 'lr':
    blo_, bhi_ = obbox(P['bp' + sd]); rlo, rhi = obbox(P['rn' + sd])
    pos = (blo_ + bhi_) / 2 * 0.5 + (rlo + rhi) / 2 * 0.5
    e = bhi_ - blo_
    o = sphere(f'nigra_{sd}', pos, 1.0, NIG)
    o.scale = (e.x * 0.55, e.y * 0.32, e.z * 0.34)
    nig.append(o)

# dopamina: aparece al terminar el pelado
src = nig[0].location.copy()
tl, th = obbox(P['putl']); put_c = (tl + th) / 2
cl, ch = obbox(P['caul']); cau_c = (cl + ch) / 2
t_on, t_sick0, t_sick1 = T_PD, 0.80, 0.90
for i in range(16):
    p = sphere(f'da{i}', src, 0.065, (1.0, 0.82, 0.2), emit=4.0)
    tgt = put_c if i % 2 else cau_c
    period = int(F * 0.11); k = fr(t_on) + (i % 8) * int(F * 0.014)
    key(p, 'scale', 1, Vector((0.001,) * 3)); key(p, 'scale', k - 1, Vector((0.001,) * 3)); key(p, 'scale', k, Vector((1, 1, 1)))
    while k < F:
        key(p, 'location', k, src)
        key(p, 'location', min(F, k + period - 1), tgt)
        k += period
    if i >= 4:   # en la enfermedad quedan pocas
        key(p, 'scale', fr(t_sick0), Vector((1, 1, 1)))
        key(p, 'scale', fr(t_sick1), Vector((0.001,) * 3))
for o in nig:
    color_key(o, fr(t_sick0), NIG)
    color_key(o, fr(t_sick1), (0.78, 0.74, 0.70))
for k_ in ('putl', 'caul', 'putr', 'caur'):
    color_key(P[k_], fr(t_sick0), STRI)
    color_key(P[k_], fr(t_sick1), (0.32, 0.38, 0.52))

# ------------------------------------------------------------------ cámara: órbita lateral izq. -> anterior -> oblicua final
cam = setup3d((-4.4, -6.0, -0.9), (0, 0, -0.1), lens=46)
tgt = bpy.data.objects.new('mira', None); bpy.context.scene.collection.objects.link(tgt)
con = cam.constraints.new('TRACK_TO'); con.target = tgt; con.track_axis = 'TRACK_NEGATIVE_Z'; con.up_axis = 'UP_Y'
END = Vector((-4.4, -6.0, -0.9)); END_LOOK = Vector((0, 0, -0.1))
R0 = 15.0; ang_end = math.atan2(END.y, END.x)            # ~ -126°
N = 40
for j in range(N + 1):
    t = T_ZOOM1 * j / N
    a = ease(t / T_ZOOM1)                                  # 0..1 durante órbita + acercamiento
    ang = 0.0 + (ang_end - 0.0) * a
    zoom = ease((t - T_ZOOM0) / (T_ZOOM1 - T_ZOOM0))       # acercamiento al final
    r = R0 + (END.xy.length - R0) * zoom
    elev = 0.25 + (END.z / END.xy.length - 0.25) * a
    pos = Vector((math.cos(ang) * r, math.sin(ang) * r, elev * r))
    look = brain_c.lerp(END_LOOK, zoom)
    key(cam, 'location', fr(t), pos)
    key(tgt, 'location', fr(t), look)
key(cam, 'location', F, END); key(tgt, 'location', F, END_LOOK)

bpy.context.scene.frame_end = F
bpy.context.scene.render.filepath = os.path.join(OUT, 'f_')
if PREV:
    os.makedirs(OUT, exist_ok=True)
    for i, t in enumerate((0.02, 0.15, 0.27, 0.37, 0.46, 0.6, 0.95)):
        bpy.context.scene.frame_set(fr(t))
        bpy.context.scene.render.filepath = os.path.join(OUT, f'f_{i + 1:04d}.png')
        bpy.ops.render.render(write_still=True)
else:
    bpy.ops.render.render(animation=True)
