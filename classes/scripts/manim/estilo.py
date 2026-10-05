"""Estilo común de las animaciones Manim (fondo oscuro como el escenario de imágenes del reproductor)."""
import numpy as np
from manim import *

BG = '#0E1116'
INK = '#F5F5F7'
MUTED = '#9AA0A6'
GRIDC = '#2A2F38'
RED_ = '#FF5A4E'
BLUE_ = '#4FA3FF'
GREEN_ = '#3DDC84'
AMBER = '#FFC247'
VIOLET = '#B388FF'
FONT = 'Helvetica'

config.background_color = BG


def T(s, size=28, color=INK, bold=False):
    return Text(s, font=FONT, font_size=size, color=color, weight=BOLD if bold else NORMAL)


def title(scene, main, sub=None, color=INK):
    t = T(main, 38, color, bold=True).to_corner(UL, buff=0.45)
    g = VGroup(t)
    if sub:
        s = T(sub, 24, MUTED).next_to(t, DOWN, aligned_edge=LEFT, buff=0.15)
        g.add(s)
    scene.add(g)
    return g


def axes(x_range, y_range, x_len=9, y_len=4.6, xlabel='', ylabel='', ticks_x=None, ticks_y=None):
    ax = Axes(x_range=x_range, y_range=y_range, x_length=x_len, y_length=y_len,
              axis_config={'color': MUTED, 'stroke_width': 2, 'include_tip': False, 'include_ticks': False})
    labels = VGroup()
    if xlabel:
        labels.add(T(xlabel, 22, MUTED).next_to(ax.c2p((x_range[0] + x_range[1]) / 2, y_range[0]), DOWN, buff=0.45))
    if ylabel:
        labels.add(T(ylabel, 22, MUTED).rotate(PI / 2).next_to(ax.y_axis, LEFT, buff=0.35))
    for v, s in (ticks_x or []):
        labels.add(T(s, 18, MUTED).next_to(ax.c2p(v, y_range[0]), DOWN, buff=0.12))
    for v, s in (ticks_y or []):
        labels.add(T(s, 18, MUTED).next_to(ax.c2p(x_range[0], v), LEFT, buff=0.12))
    return ax, labels


def tag(text, color, size=24):
    t = T(text, size, BG, bold=True)
    box = RoundedRectangle(corner_radius=0.12, width=t.width + 0.4, height=t.height + 0.26, fill_color=color,
                           fill_opacity=1, stroke_width=0)
    return VGroup(box, t.move_to(box))


def box(text, sub=None, color=BLUE_, w=3.2, h=1.1):
    r = RoundedRectangle(corner_radius=0.18, width=w, height=h, stroke_color=color, stroke_width=3,
                         fill_color=color, fill_opacity=0.12)
    t = T(text, 26, INK, bold=True)
    g = VGroup(r, t)
    if sub:
        s = T(sub, 18, MUTED)
        VGroup(t, s).arrange(DOWN, buff=0.08).move_to(r)
        g.add(s)
    else:
        t.move_to(r)
    return g


# ------------------------------------------------------------------ ilustración real (Blausen) de fondo
BLAUSEN_CREDIT = 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios'


class BlausenScene(Scene):
    """Escena con una ilustración Blausen limpia (sin rótulos en inglés) como fondo.
    Definir IMG, CROP=(x0,y0,x1,y1) y ERASE=[...] en fracciones de la imagen ORIGINAL; luego self.lamina(...)
    y self.P(fx, fy) devuelve el punto de la escena que corresponde a esa fracción de la imagen original."""
    IMG = ''
    CROP = (0, 0, 1, 1)
    ERASE = ()
    DESAT = ()

    def lamina(self, height=6.0, center=DOWN * 0.35, card=True, crop=None, width=None, credit=True):
        import hashlib, os, sys
        sys.path.insert(0, os.path.dirname(os.path.abspath(__file__)))
        from blausen_clean import clean
        crop = crop or self.CROP
        key = hashlib.md5(repr((self.IMG, crop, self.ERASE, self.DESAT)).encode()).hexdigest()[:10]
        png = f'/tmp/blausen_{key}.png'
        if getattr(self, 'PREP', None):                     # imagen ya preparada por la escena (sin recortar)
            import cv2
            src = self.PREP()
            im = cv2.imread(src); h, w = im.shape[:2]
            cv2.imwrite(png, im[int(crop[1] * h):int(crop[3] * h), int(crop[0] * w):int(crop[2] * w)])
        elif not os.path.exists(png):
            clean(self.IMG, png, crop, self.ERASE, self.DESAT)
        img = ImageMobject(png)
        img.set(width=width) if width else img.set(height=height)
        img.move_to(center)
        img.crop_ = crop
        self.img = img
        if card:
            bg = RoundedRectangle(corner_radius=0.2, width=img.width + 0.3, height=img.height + 0.3,
                                  fill_color=WHITE, fill_opacity=1, stroke_width=0).move_to(img)
            self.add(bg)
        self.add(img)
        if credit:
            self.add(T(BLAUSEN_CREDIT, 13, MUTED).to_corner(DR, buff=0.15))
        return img

    def P(self, fx, fy, img=None):
        img = img or self.img
        x0, y0, x1, y1 = img.crop_
        u, v = (fx - x0) / (x1 - x0), (fy - y0) / (y1 - y0)
        return img.get_corner(UL) + RIGHT * u * img.width + DOWN * v * img.height

    def path(self, pts, img=None):
        return VMobject().set_points_smoothly([self.P(*p, img=img) for p in pts])

    def flow(self, path, n=10, color=BLUE_, r=0.06, run=4.0, loops=1):
        """Partículas que recorren `path` (VMobject) n a la vez, desfasadas."""
        dots = VGroup(*[Dot(radius=r, color=color).set_stroke(WHITE, 1.2) for _ in range(n)])
        t = ValueTracker(0)
        def upd(g):
            for i, d in enumerate(g):
                a = (t.get_value() + i / n) % 1
                d.move_to(path.point_from_proportion(a))
        dots.add_updater(upd); upd(dots)
        self.add(dots)
        self.play(t.animate.set_value(loops), run_time=run, rate_func=linear)
        return dots, t

    def pin(self, fx, fy, text, color, side=LEFT, size=22, at=None):
        """Rótulo con línea guía hasta un punto de la ilustración. Devuelve (grupo, punto)."""
        p = self.P(fx, fy)
        lab = tag(text, color, size)
        lab.move_to(at if at is not None else p + side * 2.6)
        a = lab.get_edge_center(-side) if at is None else lab.get_critical_point(np.sign(p - lab.get_center()) * np.array([1, 0, 0]))
        ln = Line(a, p, color=color, stroke_width=3)
        ring = Circle(radius=0.16, color=color, stroke_width=4).move_to(p)
        return VGroup(ln, ring, lab), p
