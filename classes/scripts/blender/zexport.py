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
meshes = [o for o in bpy.data.objects if o.type == 'MESH']
if argv[:1] == ['--list']:
    rx = re.compile(argv[1], re.I)
    for o in sorted(meshes, key=lambda o: o.name):
        if rx.search(o.name): print('Z>', o.name)
    sys.exit(0)
lst = argv[0] if argv else '/tmp/zexport_list.txt'
pats = [re.compile(l.strip()) for l in open(lst) if l.strip() and not l.startswith('#')]
BAN = re.compile(r'cochlea|vestibul|semicircular|labyrinth|kidney|renal', re.I)
n = 0
for o in meshes:
    if not any(p.fullmatch(o.name) for p in pats) or BAN.search(o.name): continue
    dst = os.path.join(OUT, o.name + '.obj')
    if os.path.exists(dst): continue
    bpy.ops.object.select_all(action='DESELECT')
    o.hide_set(False); o.hide_viewport = False; o.select_set(True)
    bpy.context.view_layer.objects.active = o
    bpy.ops.wm.obj_export(filepath=dst, export_selected_objects=True, apply_modifiers=True, export_materials=False,
                          forward_axis='Y', up_axis='Z')
    n += 1; print('Z> exportado', o.name)
print('Z> total', n)
