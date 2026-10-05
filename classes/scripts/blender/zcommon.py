"""Utilidades comunes para escenas con piezas OBJ de Z-Anatomy (CC BY-SA 4.0) exportadas con zexport.py."""
import bpy, os
from mathutils import Vector

ZOBJ = os.path.expanduser('~/Documents/Archive/Apps/assets3d/zanatomy/obj')
ZBLEND = os.path.expanduser('~/Documents/Archive/Apps/assets3d/zanatomy/Z-Anatomy/Startup.blend')
HERE = os.path.dirname(os.path.abspath(__file__))
F = [120]


def fr(t):
    return max(1, min(F[0], int(round(F[0] * t))))


def mat(name, rgb, alpha=1.0, rough=0.45, emit=0.0):
    m = bpy.data.materials.new(name); m.use_nodes = True
    b = m.node_tree.nodes['Principled BSDF']
    b.inputs['Base Color'].default_value = (*rgb, 1); b.inputs['Roughness'].default_value = rough
    b.inputs['Coat Weight'].default_value = 0.12; b.inputs['Alpha'].default_value = alpha
    if emit:
        b.inputs['Emission Color'].default_value = (*rgb, 1); b.inputs['Emission Strength'].default_value = emit
    m.surface_render_method = 'DITHERED'
    return m


def zload(name, rgb, alpha=1.0, emit=0.0):
    p = os.path.join(ZOBJ, name + '.obj')
    if not os.path.exists(p):
        print('FALTA', name); return None
    bpy.ops.wm.obj_import(filepath=p, forward_axis='Y', up_axis='Z')
    sel = [x for x in bpy.context.selected_objects if x.type == 'MESH']
    bpy.context.view_layer.objects.active = sel[0]
    if len(sel) > 1:
        bpy.ops.object.join()
    o = bpy.context.view_layer.objects.active; o.name = name
    o.data.materials.clear(); o.data.materials.append(mat(name, rgb, alpha, emit=emit))
    bpy.ops.object.shade_smooth()
    return o


def alpha_key(o, t, a):
    b = o.data.materials[0].node_tree.nodes['Principled BSDF'].inputs['Alpha']
    b.default_value = a; b.keyframe_insert('default_value', frame=fr(t))


def fade(o, t0, t1, a0, a1):
    alpha_key(o, t0, a0); alpha_key(o, t1, a1)
    if a1 <= 0.001:
        o.hide_render = False; o.keyframe_insert('hide_render', frame=fr(t1))
        o.hide_render = True; o.keyframe_insert('hide_render', frame=fr(t1) + 1)


def bounds(objs):
    pts = [o.matrix_world @ v.co for o in objs for v in o.data.vertices]
    lo = Vector([min(p[i] for p in pts) for i in range(3)]); hi = Vector([max(p[i] for p in pts) for i in range(3)])
    return lo, hi


def centerlines(names):
    """Puntos de las curvas originales (mundo): {nombre: [[Vector...], ...]}."""
    with bpy.data.libraries.load(ZBLEND, link=False) as (src, dst):
        dst.objects = [n for n in names if n in src.objects]
    out = {}
    for o in dst.objects:
        if o is None: continue
        bpy.context.scene.collection.objects.link(o); bpy.context.view_layer.update()
        if o.type != 'CURVE':
            bpy.data.objects.remove(o, do_unlink=True); continue
        mw = o.matrix_world.copy(); nm = o.name.rsplit('.0', 1)[0] if o.name[-4:-3] == '.' and o.name[-3:].isdigit() else o.name
        out[nm] = [[mw @ p.co.xyz for p in (sp.bezier_points if sp.type == 'BEZIER' else sp.points)] for sp in o.data.splines]
        bpy.data.objects.remove(o, do_unlink=True)
    return out


def resample(pts, step):
    out = [pts[0]]; acc = 0.0
    for a, b in zip(pts, pts[1:]):
        seg = (b - a).length
        if seg == 0: continue
        d = step - acc
        while d <= seg:
            out.append(a.lerp(b, d / seg)); d += step
        acc = seg - (d - step)
    out.append(pts[-1])
    return out


def mesh_centerline(o, n=24):
    """Línea central aproximada de un vaso-malla: proyección sobre el eje principal y promedio por tramos."""
    import numpy as np
    P = np.array([tuple(o.matrix_world @ v.co) for v in o.data.vertices])
    c = P.mean(0); u = np.linalg.svd(P - c, full_matrices=False)[2][0]
    t = (P - c) @ u; edges = np.linspace(t.min(), t.max(), n + 1)
    out = []
    for a, b in zip(edges, edges[1:]):
        m = (t >= a) & (t <= b)
        if m.any(): out.append(Vector(P[m].mean(0)))
    return out
