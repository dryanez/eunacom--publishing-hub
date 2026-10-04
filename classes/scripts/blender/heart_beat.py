"""
Corazón anatómico que late (BodyParts3D, CC BY 4.0). Se ejecuta sin abrir Blender:

    /Applications/Blender.app/Contents/MacOS/Blender -b -P classes/scripts/blender/heart_beat.py -- <salida_dir> [frames]

Renderiza PNG por cuadro; luego ffmpeg los une. Ciclo: aurículas se contraen (0–15 %), ventrículos (25–55 %).
"""
import bpy, bmesh, math, os, sys
from mathutils import Vector

ASSETS = os.path.expanduser('~/Documents/Archive/Apps/assets3d')
OBJ_DIR = os.path.join(ASSETS, 'bp3d', 'partof_BP3D_4.0_obj_99')
argv = sys.argv[sys.argv.index('--') + 1:] if '--' in sys.argv else []
OUT = argv[0] if argv else '/tmp/heart_frames'
FRAMES = int(argv[1]) if len(argv) > 1 else 72        # 72 cuadros a 24 fps = 3 s (dos latidos)

# grupos: concepto FMA -> (nombre, color RGB, grupo de animación)
GROUPS = {
    'FMA7096': ('auricula_der', (0.45, 0.10, 0.16), 'atria'),
    'FMA7097': ('auricula_izq', (0.62, 0.10, 0.10), 'atria'),
    'FMA7098': ('ventriculo_der', (0.52, 0.10, 0.14), 'vent'),
    'FMA7101': ('ventriculo_izq', (0.66, 0.09, 0.08), 'vent'),
    'FMA3736': ('aorta_ascendente', (0.80, 0.12, 0.10), None),
    'FMA3768': ('arco_aortico', (0.80, 0.12, 0.10), None),
    'FMA8612': ('tronco_pulmonar', (0.14, 0.22, 0.62), None),
    'FMA4720': ('vena_cava_sup', (0.12, 0.18, 0.55), None),
    'FMA3802': ('coronaria_der', (0.95, 0.62, 0.12), 'vent'),
    'FMA3855': ('coronaria_izq', (0.95, 0.62, 0.12), 'vent'),
    'FMA3862': ('descendente_ant', (0.95, 0.62, 0.12), 'vent'),
    'FMA3895': ('circunfleja', (0.95, 0.62, 0.12), 'vent'),
}


def element_files():
    m = {}
    for line in open(os.path.join(ASSETS, 'partof_element_parts.txt'), encoding='utf-8').read().splitlines()[1:]:
        cid, name, fj = line.split('\t')
        m.setdefault(cid, []).append(fj)
    return m


def material(name, rgb):
    mat = bpy.data.materials.new(name)
    mat.use_nodes = True
    b = mat.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*rgb, 1)
    b.inputs['Roughness'].default_value = 0.38
    b.inputs['Coat Weight'].default_value = 0.2          # brillo húmedo
    b.inputs['Subsurface Weight'].default_value = 0.15
    b.inputs['Subsurface Radius'].default_value = (0.9, 0.3, 0.2)
    return mat


def import_group(files, name, mat):
    objs = []
    for fj in files:
        p = os.path.join(OBJ_DIR, fj + '.obj')
        if not os.path.exists(p):
            continue
        bpy.ops.wm.obj_import(filepath=p)
        objs += list(bpy.context.selected_objects)
    if not objs:
        return None
    bpy.ops.object.select_all(action='DESELECT')
    for o in objs:
        o.select_set(True)
    bpy.context.view_layer.objects.active = objs[0]
    if len(objs) > 1:
        bpy.ops.object.join()
    ob = bpy.context.view_layer.objects.active
    ob.name = name
    ob.data.materials.clear()
    ob.data.materials.append(mat)
    bpy.ops.object.shade_smooth()
    return ob


def main():
    bpy.ops.wm.read_factory_settings(use_empty=True)
    files = element_files()
    parts = []
    for cid, (name, rgb, grp) in GROUPS.items():
        ob = import_group(files.get(cid, []), name, material(name, rgb))
        if ob:
            parts.append((ob, grp))

    # centrar todo en el origen y escalar (BodyParts3D está en mm)
    allv = [o.matrix_world @ v.co for o, _ in parts for v in o.data.vertices]
    lo = Vector((min(v.x for v in allv), min(v.y for v in allv), min(v.z for v in allv)))
    hi = Vector((max(v.x for v in allv), max(v.y for v in allv), max(v.z for v in allv)))
    center, size = (lo + hi) / 2, max(hi - lo)
    root = bpy.data.objects.new('heart_root', None)
    bpy.context.scene.collection.objects.link(root)
    for o, _ in parts:
        o.location -= center
        o.parent = root
    root.scale = (2.0 / size,) * 3

    # latido: escala alrededor del centro de cada grupo
    heart_c = Vector((0, 0, 0))
    for o, grp in parts:
        if not grp:
            continue
        bpy.context.view_layer.objects.active = o
        bpy.ops.object.select_all(action='DESELECT'); o.select_set(True)
        bpy.ops.object.origin_set(type='ORIGIN_GEOMETRY', center='BOUNDS')
        per = FRAMES // 2                                   # dos latidos
        for k in range(FRAMES + 1):
            ph = (k % per) / per
            if grp == 'atria':
                c = math.sin(math.pi * min(1, ph / 0.15)) if ph < 0.15 else 0
                s = 1 - 0.07 * c
            else:
                c = math.sin(math.pi * (ph - 0.25) / 0.30) if 0.25 <= ph < 0.55 else 0
                s = 1 - 0.10 * c
            o.scale = (s, s, s)
            o.keyframe_insert('scale', frame=k + 1)

    # giro lento de presentación
    root.rotation_euler = (math.radians(-90), 0, math.radians(-18))   # modelo: -y = arriba, -z = anterior
    root.keyframe_insert('rotation_euler', frame=1)
    root.rotation_euler = (math.radians(-90), 0, math.radians(18))
    root.keyframe_insert('rotation_euler', frame=FRAMES + 1)

    # cámara, luces y fondo
    scn = bpy.context.scene
    cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam'))
    scn.collection.objects.link(cam); scn.camera = cam
    cam.location = (0, -5.2, -0.12); cam.rotation_euler = (math.radians(90), 0, 0)
    cam.data.lens = 50
    for loc, energy, color in [((-3, -3, 3), 380, (1, 0.95, 0.9)), ((3, -2, 0), 140, (0.85, 0.9, 1)), ((0, 3, 2), 420, (1, 1, 1))]:
        L = bpy.data.objects.new('L', bpy.data.lights.new('L', 'AREA'))
        L.data.energy, L.data.color, L.data.size = energy, color, 3
        L.location = loc
        L.rotation_euler = (Vector((0, 0, 0)) - Vector(loc)).to_track_quat('-Z', 'Y').to_euler()
        scn.collection.objects.link(L)
    world = bpy.data.worlds.new('w'); scn.world = world; world.use_nodes = True
    world.node_tree.nodes['Background'].inputs['Color'].default_value = (0.012, 0.014, 0.02, 1)

    scn.render.engine = 'BLENDER_EEVEE_NEXT'
    scn.eevee.taa_render_samples = 32
    scn.render.resolution_x, scn.render.resolution_y = 1280, 960
    scn.render.film_transparent = False
    scn.frame_start, scn.frame_end = 1, FRAMES
    scn.render.fps = 24
    scn.view_settings.view_transform = 'Standard'
    scn.view_settings.look = 'None'
    scn.render.image_settings.file_format = 'PNG'
    scn.render.filepath = os.path.join(OUT, 'f_')
    bpy.ops.render.render(animation=True)


main()
