"""Enfermedad de Graves con anatomía real (Z-Anatomy, CC BY-SA 4.0).
Anticuerpos contra el receptor de TSH llegan y se pegan a la tiroides; la glándula crece, se vuelve hiperactiva
y libera exceso de hormona por las venas yugulares.
    Blender -b -P z_graves.py -- <out> <frames> [preview]
"""
import bpy, sys, os, math, random
sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
from anatomia3d import sphere, key, ease, color_key, setup as setup3d
import zcommon as Z
from zcommon import fr, zload, bounds, mat
from mathutils import Vector, Matrix

argv = sys.argv[sys.argv.index('--') + 1:]
OUT, F = argv[0], int(argv[1]); PREV = len(argv) > 2
Z.F[0] = F
random.seed(7)
bpy.ops.wm.read_factory_settings(use_empty=True)

THY = (0.78, 0.30, 0.30); HOTTHY = (0.95, 0.22, 0.20); CART = (0.86, 0.84, 0.76); BONE = (0.90, 0.86, 0.76)
P = {}
P['thy'] = zload('Thyroid gland', THY)
P['tc'] = zload('Thyroid cartilage', CART)
P['cc'] = zload('Cricoid cartilage', CART)
P['hy'] = zload('Hyoid bone', BONE)
P['tr'] = zload('Trachea', CART, alpha=0.9)
P['ep'] = zload('Epiglottis', CART)
for s in 'lr':
    P['ij' + s] = zload(f'Internal jugular vein.{s}', (0.30, 0.38, 0.85), alpha=0.85)
    P['ita' + s] = zload(f'Inferior thyroid artery.{s}', (0.85, 0.12, 0.10))
P['ccl'] = zload('Left common carotid artery', (0.85, 0.12, 0.10))
P['ccr'] = zload('Right common carotid artery', (0.85, 0.12, 0.10))
P = {k: v for k, v in P.items() if v}

core = [P['thy'], P['tc'], P['cc']]
lo, hi = bounds(core); c = (lo + hi) / 2; s = 2.2 / max(hi - lo)
M = Matrix.Scale(s, 4) @ Matrix.Translation(-c)
for o in P.values():
    o.data.transform(M @ o.matrix_world); o.matrix_world = Matrix.Identity(4)

thy = P['thy']; tlo, thi = bounds([thy]); tc = (tlo + thi) / 2
thy.data.transform(Matrix.Translation(-tc)); thy.location = tc

T_AB0, T_AB1, T_GROW0, T_GROW1, T_HORM = 0.12, 0.40, 0.36, 0.62, 0.55
# anticuerpos en forma de Y que llegan desde los lados y se pegan a la cara anterior de la tiroides
verts = [thy.matrix_world @ v.co for v in thy.data.vertices]
norms = [(thy.matrix_world.to_3x3() @ v.normal).normalized() for v in thy.data.vertices]
front = [(p, n) for p, n in zip(verts, norms) if n.y < -0.5]
random.shuffle(front)
AB = (0.35, 0.85, 0.55)
for i, (p, n) in enumerate(front[:16]):
    root = bpy.data.objects.new(f'ac{i}', None); bpy.context.scene.collection.objects.link(root)
    parts = []
    for name, a, b in (('t', (0, 0, 0), (0, 0, 0.09)), ('l', (0, 0, 0.09), (-0.05, 0, 0.15)), ('r', (0, 0, 0.09), (0.05, 0, 0.15))):
        bpy.ops.mesh.primitive_cylinder_add(radius=0.016, depth=(Vector(b) - Vector(a)).length, location=(Vector(a) + Vector(b)) / 2)
        cy = bpy.context.active_object
        cy.rotation_euler = (Vector(b) - Vector(a)).to_track_quat('Z', 'Y').to_euler()
        cy.data.materials.append(mat(f'ac{i}{name}', AB, emit=0.8)); cy.parent = root
    # orientar: las puntas de la Y apuntan a la superficie
    root.rotation_euler = (-n).to_track_quat('Z', 'Y').to_euler()
    dock = p + n * 0.29
    start = dock + Vector((random.choice((-1, 1)) * random.uniform(1.6, 2.4), -random.uniform(0.3, 1.0), random.uniform(-0.8, 0.8)))
    t0 = T_AB0 + (T_AB1 - T_AB0 - 0.1) * i / 15
    key(root, 'scale', 1, Vector((0.001,) * 3)); key(root, 'scale', fr(t0), Vector((0.001,) * 3)); key(root, 'scale', fr(t0) + 2, Vector((1.9, 1.9, 1.9)))
    key(root, 'location', fr(t0), start)
    key(root, 'location', fr(t0 + 0.1), dock)
    # el tiroides crece: el anticuerpo se mueve con la superficie
    key(root, 'location', fr(T_GROW0), dock)
    key(root, 'location', fr(T_GROW1), tc + (dock - tc) * 1.32)

# la glándula crece, se enrojece y "late" (hiperactiva)
key(thy, 'scale', fr(T_GROW0), Vector((1, 1, 1))); key(thy, 'scale', fr(T_GROW1), Vector((1.32, 1.32, 1.32)))
color_key(thy, fr(T_GROW0), THY, emit=0.0)
k = fr(T_GROW0 + 0.06); on = True
while k < F:
    color_key(thy, k, HOTTHY, emit=0.7 if on else 0.2); k += max(5, F // 40); on = not on

# hormona (T4/T3): sale de la glándula, entra a la yugular de su lado y baja
HOR = (1.0, 0.80, 0.20)
for s_ in 'lr':
    ij = P.get('ij' + s_)
    if not ij: continue
    vs = [ij.matrix_world @ v.co for v in ij.data.vertices]
    def vein_at(z):
        sl = [q for q in vs if abs(q.z - z) < 0.06] or vs
        return sum(sl, Vector()) / len(sl)
    zbot = min(q.z for q in vs)
    vc = vein_at(tc.z)
    for i in range(10):
        z0 = tc.z + random.uniform(-0.25, 0.2)
        src = tc.lerp(vein_at(z0), 0.55); src.z = z0
        a_ = vein_at(z0); b_ = vein_at(zbot + 0.15)
        p = sphere(f'h{s_}{i}', src, 0.055, HOR, emit=3.0)
        key(p, 'scale', 1, Vector((0.001,) * 3))
        k = fr(T_HORM + 0.015 * i); L = max(12, int(F * 0.13))
        key(p, 'scale', k - 1, Vector((0.001,) * 3)); key(p, 'scale', k, Vector((1, 1, 1)))
        while k + L < F:
            key(p, 'location', k, src); key(p, 'location', k + L // 3, a_)
            key(p, 'location', k + L - 1, b_); k += L

cam = setup3d((0.9, -6.2, 0.6), (0, 0, -0.05), lens=50)
scn = bpy.context.scene; scn.frame_end = F
# giro suave alrededor del cuello
for j in range(13):
    t = j / 12; a = -0.35 + 0.55 * ease(t)
    p = Vector((math.sin(a) * 8.6, -math.cos(a) * 8.6, 0.4 - 0.2 * t))
    cam.location = p; cam.rotation_euler = (Vector((0, 0, -0.25)) - p).to_track_quat('-Z', 'Y').to_euler()
    cam.keyframe_insert('location', frame=fr(t)); cam.keyframe_insert('rotation_euler', frame=fr(t))
if PREV:
    os.makedirs(OUT, exist_ok=True)
    for i, t in enumerate((0.05, 0.25, 0.42, 0.6, 0.8, 0.97)):
        scn.frame_set(fr(t)); scn.render.filepath = os.path.join(OUT, f'f_{i + 1:04d}.png')
        bpy.ops.render.render(write_still=True)
else:
    scn.render.filepath = os.path.join(OUT, 'f_')
    bpy.ops.render.render(animation=True)
