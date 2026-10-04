"""
Tira de ECG que se dibuja sincronizada con el latido renderizado en Blender (1 latido por segundo).
    ~/.venvs/manim/bin/manim -qh --fps 24 -r 1280,320 classes/scripts/manim/ecg_strip.py EcgStrip
"""
import numpy as np
from manim import *

BEAT = 1.0          # s por latido (igual que heart_beat.py con 48 cuadros = 2 latidos)
SECS = 2.0
BG = '#03040A'
TRACE = '#FFD25A'


def ecg(t):
    u = t % BEAT
    y = 0.12 * np.exp(-((u - 0.06) / 0.03) ** 2)                 # P (antes de la sístole auricular)
    y += -0.10 * np.exp(-((u - 0.19) / 0.012) ** 2)              # Q
    y += 1.00 * np.exp(-((u - 0.21) / 0.013) ** 2)               # R
    y += -0.25 * np.exp(-((u - 0.235) / 0.013) ** 2)             # S
    y += 0.28 * np.exp(-((u - 0.47) / 0.055) ** 2)               # T
    return y


class EcgStrip(Scene):
    def construct(self):
        self.camera.background_color = BG
        W = config.frame_width - 0.8
        x0 = -W / 2
        grid = VGroup(*[Line([x0 + i * W / 20, -1.3, 0], [x0 + i * W / 20, 1.3, 0], stroke_width=1 if i % 5 else 2,
                             color='#3A1B22') for i in range(21)],
                      *[Line([x0, -1.3 + j * 0.26, 0], [x0 + W, -1.3 + j * 0.26, 0], stroke_width=1 if j % 5 else 2,
                             color='#3A1B22') for j in range(11)])
        self.add(grid)
        t = ValueTracker(0)

        def curve():
            T = max(t.get_value(), 1e-3)
            xs = np.linspace(0, T, max(2, int(T * 400)))
            pts = [[x0 + x / SECS * W, -0.9 + 1.9 * ecg(x), 0] for x in xs]
            return VMobject(stroke_color=TRACE, stroke_width=4).set_points_smoothly(pts)

        trace = always_redraw(curve)
        head = always_redraw(lambda: Dot([x0 + t.get_value() / SECS * W, -0.9 + 1.9 * ecg(t.get_value()), 0],
                                         radius=0.07, color=WHITE).set_glow_factor(1) if hasattr(Dot, 'set_glow_factor') else
                             Dot([x0 + t.get_value() / SECS * W, -0.9 + 1.9 * ecg(t.get_value()), 0], radius=0.07, color=WHITE))
        labels = VGroup()
        for b in range(2):
            for txt, tt, dy in (('P', 0.06, 0.45), ('QRS', 0.21, 2.15), ('T', 0.47, 0.75)):
                labels.add(Text(txt, font='Helvetica', weight=BOLD, font_size=26, color='#F5F5F7')
                           .move_to([x0 + (b * BEAT + tt) / SECS * W, -0.9 + dy, 0]))
        self.add(trace, head)
        for lab, when in zip(labels, [0.06, 0.21, 0.47, 1.06, 1.21, 1.47]):
            lab.set_opacity(0)
            self.add(lab)
            lab.add_updater(lambda m, w=when: m.set_opacity(1 if t.get_value() >= w else 0))
        self.play(t.animate.set_value(SECS), run_time=SECS, rate_func=linear)
