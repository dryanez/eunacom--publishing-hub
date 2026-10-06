"""Glaucoma agudo por cierre angular, en un ojo real cortado (Z-Anatomy, CC BY-SA 4.0).
Normal: el humor acuoso sale del cuerpo ciliar, pasa por la pupila a la cámara anterior y drena por el ángulo.
Cierre: el iris se abomba hacia delante, tapa el ángulo, el acuoso queda atrapado y la presión sube.
    Blender -b -P z_glaucoma.py -- <out> <frames> [preview]
"""
import bpy, bmesh, sys, os, math
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from anatomia3d import sphere, key, ease, color_key, setup as setup3d
import zcommon as Z
from zcommon import fr, zload, bounds, alpha_key
from mathutils import Vector, Matrix

argv = sys.argv[sys.argv.index('--') + 1:]
OUT, F = argv[0], int(argv[1]); PREV = len(argv) > 2
Z.F[0] = F
bpy.ops.wm.read_factory_settings(use_empty=True)

P = {}
P['sclera'] = zload('Sclera.r', (0.95, 0.93, 0.90))
P['cornea'] = zload('Cornea.r', (0.80, 0.90, 1.0), alpha=0.35)
P['iris'] = zload('Iris.r', (0.30, 0.45, 0.70))
P['lens'] = zload('Lens.r', (0.95, 0.92, 0.75), alpha=0.75)
P['retina'] = zload('Retina.r', (0.90, 0.45, 0.40))
P['vit'] = zload('Vitreous body.r', (0.85, 0.90, 0.95), alpha=0.08)
P['zon'] = zload('Zonular fibres.r', (0.95, 0.95, 0.85), alpha=0.6)
P = {k: v for k, v in P.items() if v}
lo, hi = bounds([P['sclera']]); c = (lo + hi) / 2; s = 2.4 / max(hi - lo)
M = Matrix.Scale(s, 4) @ Matrix.Translation(-c)
for o in P.values():
    o.data.transform(M @ o.matrix_world); o.matrix_world = Matrix.Identity(4)
    m = o.data.materials[0]; m.use_backface_culling = False

# eje anteroposterior: del centro del globo al centro de la córnea
clo, chi = bounds([P['cornea']]); ccen = (clo + chi) / 2
AX = ccen.normalized()                       # hacia delante
ilo, ihi = bounds([P['iris']]); icen = (ilo + ihi) / 2


def rad(p):                                   # distancia al eje
    d = p - AX * p.dot(AX); return d.length


def ax(p):                                    # coordenada a lo largo del eje (positiva = anterior)
    return p.dot(AX)


# corte sagital: quitar la mitad lateral (x > 0) de cada pieza
SIDE = Vector((1, 0, 0)) if abs(AX.x) < 0.7 else Vector((0, 0, 1))
for o in P.values():
    bm = bmesh.new(); bm.from_mesh(o.data)
    bmesh.ops.delete(bm, geom=[v for v in bm.verts if v.co.dot(SIDE) > 0.0], context='VERTS')
    bm.to_mesh(o.data); bm.free()

iv = [v.co.copy() for v in P['iris'].data.vertices]
Ri = max(rad(p) for p in iv); rp = min(rad(p) for p in iv)
iris_ax = sum(ax(p) for p in iv) / len(iv)
cv = [v.co.copy() for v in P['cornea'].data.vertices]
corn_in = min(ax(p) for p in cv if rad(p) > 0.85 * Ri) if any(rad(p) > 0.85 * Ri for p in cv) else iris_ax + 0.2
lv = [v.co.copy() for v in P['lens'].data.vertices]
lens_front = max(ax(p) for p in lv)
gap = max(0.05, corn_in - iris_ax)
print('OJO', round(Ri, 3), round(rp, 3), round(iris_ax, 3), round(corn_in, 3), round(lens_front, 3), round(gap, 3))

# iris abombado: la periferia avanza hasta tocar la córnea (cierra el ángulo)
iris = P['iris']; iris.shape_key_add(name='base'); sk = iris.shape_key_add(name='bombe')
for i, v in enumerate(iris.data.vertices):
    t = (rad(v.co) - rp) / max(1e-6, Ri - rp)
    bulge = math.sin(math.pi * min(1.0, max(0.0, t)))            # convexidad media-periférica
    root = ease((t - 0.7) / 0.3)                                  # la raíz se pega a la malla trabecular
    sk.data[i].co = v.co + AX * (0.13 * bulge + gap * 0.95 * root)
T_FLOW, T_CLOSE0, T_CLOSE1, T_PIO = 0.10, 0.46, 0.62, 0.66
sk.value = 0; sk.keyframe_insert('value', frame=fr(T_CLOSE0)); sk.value = 1; sk.keyframe_insert('value', frame=fr(T_CLOSE1))

# humor acuoso en el plano de corte (un poco hacia la mitad que queda)
UPV = SIDE.cross(AX).normalized()           # dirección "arriba" en el plano del corte
plane_off = -SIDE * 0.03
def Pt(a, r, sgn):
    return AX * a + UPV * (r * sgn) + plane_off
AQ = (0.25, 0.65, 1.0)
for sgn in (1, -1):
    normal = [Pt(iris_ax - 0.10, Ri * 1.02, sgn), Pt(iris_ax - 0.07, Ri * 0.65, sgn), Pt(lens_front - 0.01, rp * 1.05, sgn),
              Pt(iris_ax + 0.03, rp * 0.9, sgn), Pt((iris_ax + corn_in) / 2 + 0.03, Ri * 0.5, sgn),
              Pt((iris_ax + corn_in) / 2, Ri * 0.9, sgn), Pt(iris_ax + gap * 0.4, Ri * 1.05, sgn), Pt(iris_ax + gap * 0.3, Ri * 1.2, sgn)]
    blocked = normal[:3]
    for i in range(9):
        p = sphere(f'aq{sgn}_{i}', normal[0], 0.03, AQ, emit=0.7)
        key(p, 'scale', 1, Vector((0.001,) * 3))
        k = fr(T_FLOW + 0.03 * i); L = max(12, int(F * 0.16))
        key(p, 'scale', k - 1, Vector((0.001,) * 3)); key(p, 'scale', k, Vector((1, 1, 1)))
        while k + L < fr(T_CLOSE0):
            for j, q in enumerate(normal):
                key(p, 'location', k + int(L * j / (len(normal) - 1)), q)
            k += L
        # tras el cierre: se acumula detrás del iris
        jit = Vector((0, 0, 0)) + UPV * (0.03 * (i % 3) * sgn) + AX * (-0.025 * (i // 3))
        key(p, 'location', fr(T_CLOSE0) + 2, blocked[0]); key(p, 'location', fr(T_CLOSE1), blocked[1] + jit)
        for fc in p.animation_data.action.fcurves:
            for kp in fc.keyframe_points: kp.interpolation = 'LINEAR'
    # más acuoso que se sigue produciendo y queda atrapado
    for i in range(10):
        p = sphere(f'aqx{sgn}_{i}', blocked[0], 0.03, AQ, emit=0.7)
        t = T_CLOSE1 + 0.03 * i
        key(p, 'scale', 1, Vector((0.001,) * 3)); key(p, 'scale', fr(t), Vector((0.001,) * 3)); key(p, 'scale', fr(t) + 2, Vector((1, 1, 1)))
        key(p, 'location', fr(t), blocked[0])
        key(p, 'location', fr(t + 0.06), blocked[1] + UPV * (0.03 * ((i % 4) - 1.5) * sgn) + AX * (-0.03 * (i // 4) - 0.02))

# presión alta: globo enrojecido, córnea turbia (edema)
color_key(P['sclera'], fr(T_PIO), (0.95, 0.93, 0.90)); color_key(P['sclera'], fr(T_PIO + 0.12), (0.95, 0.62, 0.60), emit=0.15)
color_key(P['cornea'], fr(T_PIO), (0.80, 0.90, 1.0)); color_key(P['cornea'], fr(T_PIO + 0.12), (0.92, 0.94, 0.96))
alpha_key(P['cornea'], T_PIO, 0.35); alpha_key(P['cornea'], T_PIO + 0.12, 0.8)

# cámara: de 3/4 anterior a perpendicular al corte, luego acercamiento al ángulo
cen0 = Vector((0, 0, 0)); look_angle = AX * (iris_ax + 0.22)
cam = setup3d(tuple(SIDE * 6 + AX * 2), (0, 0, 0), lens=50)
for j in range(25):
    t = j / 24
    a = ease(min(1, t / 0.12)); z = ease((t - T_CLOSE0 + 0.12) / 0.16)
    d = (SIDE * 6.2 + AX * 3.0 * (1 - a)).normalized() * (6.4 - 1.5 * z)
    tgt = cen0.lerp(look_angle, z)
    pcam = tgt + d
    cam.location = pcam; cam.rotation_euler = (tgt - pcam).to_track_quat('-Z', 'Y').to_euler()
    cam.keyframe_insert('location', frame=fr(t)); cam.keyframe_insert('rotation_euler', frame=fr(t))
scn = bpy.context.scene; scn.frame_end = F
if PREV:
    os.makedirs(OUT, exist_ok=True)
    for i, t in enumerate((0.02, 0.2, 0.4, 0.55, 0.7, 0.97)):
        scn.frame_set(fr(t)); scn.render.filepath = os.path.join(OUT, f'f_{i + 1:04d}.png')
        bpy.ops.render.render(write_still=True)
else:
    scn.render.filepath = os.path.join(OUT, 'f_')
    bpy.ops.render.render(animation=True)
