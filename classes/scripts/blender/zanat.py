"""
Utilidades para escenas con Z-Anatomy (CC BY-SA 4.0; deriva de BodyParts3D).
Se abre Startup.blend, se conservan solo los objetos pedidos y se borra el resto.
NO usar los modelos de oído interno ni riñón de Z-Anatomy (licencia no comercial).
"""
import bpy, math, os, re
from mathutils import Vector, Matrix

ZBLEND = os.path.expanduser('~/Documents/Archive/Apps/assets3d/zanatomy/Z-Anatomy/Startup.blend')


def keep_only(patterns):
    """patterns: lista de nombres exactos o regex. Devuelve dict nombre->objeto conservado."""
    rx = [re.compile(p) for p in patterns]
    keep = {}
    for o in list(bpy.data.objects):
        if o.type == 'MESH' and any(r.fullmatch(o.name) for r in rx):
            keep[o.name] = o
    for o in list(bpy.data.objects):
        if o.name not in keep:
            bpy.data.objects.remove(o, do_unlink=True)
    for o in keep.values():
        if o.parent:
            mw = o.matrix_world.copy(); o.parent = None; o.matrix_world = mw
        for m in list(o.modifiers):
            o.modifiers.remove(m)
        o.hide_render = False; o.hide_viewport = False; o.hide_set(False)
        if not o.users_collection or bpy.context.scene.collection not in o.users_collection:
            bpy.context.scene.collection.objects.link(o) if o.name not in bpy.context.scene.collection.objects else None
    for c in list(bpy.data.collections):
        for o in list(c.objects):
            c.objects.unlink(o)
            if o.name not in bpy.context.scene.collection.objects:
                bpy.context.scene.collection.objects.link(o)
    return keep


def material(name, rgb, alpha=1.0, rough=0.45, emit=0.0):
    m = bpy.data.materials.new(name)
    m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*rgb, 1)
    b.inputs['Roughness'].default_value = rough
    b.inputs['Coat Weight'].default_value = 0.1
    if alpha < 1:
        b.inputs['Alpha'].default_value = alpha
        try:
            m.surface_render_method = 'BLENDED'
        except Exception:
            m.blend_method = 'BLEND'
        m.use_backface_culling = True
    if emit:
        b.inputs['Emission Color'].default_value = (*rgb, 1)
        b.inputs['Emission Strength'].default_value = emit
    return m


def paint(o, rgb, alpha=1.0, emit=0.0):
    o.data.materials.clear()
    o.data.materials.append(material(o.name + '_m', rgb, alpha, emit=emit))
    for p in o.data.polygons:
        p.use_smooth = True


def bbox(objs):
    pts = [o.matrix_world @ Vector(c) for o in objs for c in o.bound_box]
    lo = Vector([min(p[i] for p in pts) for i in range(3)]); hi = Vector([max(p[i] for p in pts) for i in range(3)])
    return lo, hi


def center(objs):
    lo, hi = bbox(objs)
    return (lo + hi) / 2, max(hi - lo)


def setup(cam_loc, look_at, lens=50, frames=120, out='/tmp/z', res=(1280, 720), bg=(0.012, 0.014, 0.02), lights=None):
    scn = bpy.context.scene
    cam = bpy.data.objects.new('cam', bpy.data.cameras.new('cam'))
    scn.collection.objects.link(cam); scn.camera = cam
    cam.location = Vector(cam_loc)
    cam.rotation_euler = (Vector(look_at) - cam.location).to_track_quat('-Z', 'Y').to_euler()
    cam.data.lens = lens
    cam.data.clip_start = 0.001
    L0 = Vector(look_at); d = (cam.location - L0).length
    for off, energy, col in (lights or [((-0.6, -1.0, 0.8), 1.0, (1, 0.96, 0.92)), ((0.9, -0.4, 0.1), 0.45, (0.85, 0.9, 1)), ((0, 1.0, 0.8), 0.9, (1, 1, 1))]):
        L = bpy.data.objects.new('L', bpy.data.lights.new('L', 'AREA'))
        L.data.energy = energy * 300 * d * d; L.data.color = col; L.data.size = d * 0.8
        L.location = L0 + Vector(off) * d
        L.rotation_euler = (L0 - L.location).to_track_quat('-Z', 'Y').to_euler()
        scn.collection.objects.link(L)
    w = bpy.data.worlds.new('w'); scn.world = w; w.use_nodes = True
    w.node_tree.nodes['Background'].inputs['Color'].default_value = (*bg, 1)
    scn.render.engine = 'BLENDER_EEVEE_NEXT'
    scn.render.use_freestyle = False
    for vl in scn.view_layers:
        vl.material_override = None
        vl.use_freestyle = False
    scn.render.film_transparent = False
    scn.display_settings.display_device = 'sRGB'
    scn.view_settings.look = 'None'
    scn.view_settings.exposure = 0; scn.view_settings.gamma = 1
    scn.eevee.taa_render_samples = 32
    scn.render.resolution_x, scn.render.resolution_y = res
    scn.frame_start, scn.frame_end = 1, frames
    scn.render.fps = 24
    scn.view_settings.view_transform = 'Standard'
    scn.render.image_settings.file_format = 'PNG'
    scn.render.filepath = os.path.join(out, 'f_')
    return cam


def key(o, path, frame, value):
    setattr(o, path, value)
    o.keyframe_insert(path, frame=frame)


def ease(t):
    t = max(0.0, min(1.0, t))
    return t * t * (3 - 2 * t)


def color_key(o, frame, rgb, emit=None, alpha=None):
    b = o.active_material.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*rgb, 1)
    b.inputs['Base Color'].keyframe_insert('default_value', frame=frame)
    if emit is not None:
        b.inputs['Emission Color'].default_value = (*rgb, 1)
        b.inputs['Emission Strength'].default_value = emit
        b.inputs['Emission Color'].keyframe_insert('default_value', frame=frame)
        b.inputs['Emission Strength'].keyframe_insert('default_value', frame=frame)
    if alpha is not None:
        b.inputs['Alpha'].default_value = alpha
        b.inputs['Alpha'].keyframe_insert('default_value', frame=frame)


def sphere(name, loc, r, rgb, alpha=1.0, emit=0.0):
    bpy.ops.mesh.primitive_uv_sphere_add(radius=r, location=loc, segments=32, ring_count=16)
    o = bpy.context.active_object; o.name = name
    o.data.materials.append(material(name, rgb, alpha, emit=emit))
    bpy.ops.object.shade_smooth()
    return o


def render(preview=False, frames=None):
    scn = bpy.context.scene
    if preview:
        out = os.path.dirname(scn.render.filepath)
        os.makedirs(out, exist_ok=True)
        F = scn.frame_end
        for i, fr in enumerate((0.05, 0.5, 0.97)):
            scn.frame_set(max(1, int(F * fr)))
            scn.render.filepath = os.path.join(out, f'f_{i + 1:04d}.png')
            bpy.ops.render.render(write_still=True)
    else:
        bpy.ops.render.render(animation=True)
