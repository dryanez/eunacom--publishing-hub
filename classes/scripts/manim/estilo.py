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
