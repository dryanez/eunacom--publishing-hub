"""Exporta piezas de Z-Anatomy (Startup.blend) a OBJ sueltos, en coordenadas de mundo.
    cp classes/scripts/blender/zexport_list.txt /tmp/   # una regex por línea (nombre exacto del objeto)
    Blender -b ~/Documents/Archive/Apps/assets3d/zanatomy/Z-Anatomy/Startup.blend -P classes/scripts/blender/zexport.py [-- lista.txt]
Salida: ~/Documents/Archive/Apps/assets3d/zanatomy/obj/<nombre>.obj (omite las ya exportadas).
NO usar oído interno ni riñón (licencia NC). Con '-- --list <regex>' solo imprime los nombres que coinciden.
"""
import bpy, os, re, sys
argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
OUT = os.path.expanduser('~/Documents/Archive/Apps/assets3d/zanatomy/obj')
os.makedirs(OUT, exist_ok=True)
meshes = [o for o in bpy.data.objects if o.type in ('MESH', 'CURVE')]
if argv[:1] == ['--list']:
    rx = re.compile(argv[1], re.I)
    for o in sorted(meshes, key=lambda o: o.name):
        if rx.search(o.name): print('Z>', o.name)
    sys.exit(0)
lst = argv[0] if argv and not argv[0].startswith('--') else '/tmp/zexport_list.txt'
pats = [re.compile(l.strip()) for l in open(lst) if l.strip() and not l.startswith('#')]
BAN = re.compile(r'cochlea|vestibul|semicircular|labyrinth|kidney|renal', re.I)
n = 0
dg = bpy.context.evaluated_depsgraph_get()


def write_obj(o, dst):
    """Escribe la geometría evaluada de UN objeto (malla o curva con grosor) en coordenadas de mundo."""
    ev = o.evaluated_get(dg)
    me = ev.to_mesh()
    mw = o.matrix_world
    with open(dst, 'w') as f:
        f.write(f'o {o.name}\n')
        for v in me.vertices:
            p = mw @ v.co
            f.write(f'v {p.x:.6f} {p.y:.6f} {p.z:.6f}\n')
        for poly in me.polygons:
            f.write('f ' + ' '.join(str(i + 1) for i in poly.vertices) + '\n')
    nv = len(me.vertices)
    ev.to_mesh_clear()
    return nv


for o in meshes:
    if not any(p.fullmatch(o.name) for p in pats) or BAN.search(o.name): continue
    dst = os.path.join(OUT, o.name + '.obj')
    if os.path.exists(dst) and '--force' not in argv: continue
    nv = write_obj(o, dst)
    n += 1; print('Z> exportado', o.name, nv, 'vértices')
print('Z> total', n)
