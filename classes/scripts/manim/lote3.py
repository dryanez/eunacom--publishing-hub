"""Lote 3: líneas de tiempo y curvas clínicas."""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from estilo import *
import random


def smooth_bump(t, a, b, rise=1.0, fall=1.0):
    """0 antes de a, sube a 1 y vuelve a 0 en b."""
    if t <= a or t >= b:
        return 0.0
    m = (a + b) / 2
    if t < m:
        x = (t - a) / (m - a)
    else:
        x = (b - t) / (b - m)
    return x * x * (3 - 2 * x)


def plateau(t, a, b, c, d):
    """sube entre a y b, se mantiene, baja entre c y d (d=None: se mantiene)."""
    if t <= a:
        return 0.0
    if t < b:
        x = (t - a) / (b - a); return x * x * (3 - 2 * x)
    if d is None or t < c:
        return 1.0
    if t < d:
        x = (d - t) / (d - c); return x * x * (3 - 2 * x)
    return 0.0


def draw_series(scene, ax, series, run_time=4):
    curves = []
    for f, col, lab, lx in series:
        c = ax.plot(f, x_range=[ax.x_range[0], ax.x_range[1], 0.05], color=col, stroke_width=5)
        curves.append((c, col, lab, lx, f))
    scene.play(*[Create(c[0]) for c in curves], run_time=run_time, rate_func=linear)
    scene.play(*[FadeIn(T(lab, 20, col, True).move_to(ax.c2p(lx, f(lx)) + UP * 0.28)) for c, col, lab, lx, f in curves], run_time=0.6)


# ------------------------------------------------------------------ infecto-16
class Infecto16Dengue(Scene):
    def construct(self):
        title(self, 'Dengue: el peligro llega cuando cae la fiebre', 'Fase crítica: fuga de plasma, hematocrito sube y plaquetas caen', RED_)
        ax, labs = axes([0, 10, 1], [0, 1.1, 0.2], x_len=10.5, y_len=4.4, xlabel='Días de enfermedad',
                        ticks_x=[(d, str(d)) for d in range(0, 11)])
        g = VGroup(ax, labs).shift(DOWN * 0.6)
        self.add(g)
        band = Rectangle(width=ax.c2p(6, 0)[0] - ax.c2p(3, 0)[0], height=4.4, fill_color=RED_, fill_opacity=0.12, stroke_width=0)
        band.move_to([(ax.c2p(3, 0)[0] + ax.c2p(6, 0)[0]) / 2, ax.c2p(0, 0.55)[1], 0])
        self.add(band, T('fase febril', 18, MUTED).move_to(ax.c2p(1.5, 1.08)), T('fase crítica', 18, RED_, True).move_to(ax.c2p(4.5, 1.08)),
                 T('recuperación', 18, MUTED).move_to(ax.c2p(8, 1.08)))
        fever = lambda d: 0.25 + 0.65 * plateau(d, 0, 0.6, 2.8, 3.6)
        plt = lambda d: 0.9 - 0.7 * smooth_bump(d, 1.5, 9.5)
        hto = lambda d: 0.35 + 0.4 * smooth_bump(d, 2.5, 8.5)
        draw_series(self, ax, [(fever, AMBER, 'Fiebre', 1.5), (plt, BLUE_, 'Plaquetas', 7.8), (hto, RED_, 'Hematocrito', 5.5)], run_time=5)
        self.play(FadeIn(tag('Signos de alarma: dolor abdominal, vómitos, sangrado', RED_, 20).move_to(ax.c2p(5, 0.12))), run_time=0.6)
        self.wait(1.6)


# ------------------------------------------------------------------ infecto-10
class Infecto10Cd4(Scene):
    def construct(self):
        title(self, 'Los CD4 como reloj', 'Cada umbral abre la puerta a nuevas infecciones', VIOLET)
        ax, labs = axes([0, 10, 1], [0, 1000, 100], x_len=10, y_len=4.5, xlabel='Años sin tratamiento', ylabel='CD4 / mm³',
                        ticks_y=[(v, str(v)) for v in (200, 500, 800)])
        g = VGroup(ax, labs).shift(DOWN * 0.55 + RIGHT * 0.3)
        self.add(g)
        f = lambda y: 900 * np.exp(-0.36 * y) + 15
        curve = ax.plot(f, x_range=[0, 10, 0.05], color=VIOLET, stroke_width=6)
        self.play(Create(curve), run_time=4, rate_func=linear)
        for thr, txt, col in ((200, 'Bajo 200: Pneumocystis', BLUE_), (100, 'Bajo 100: toxoplasma, criptococo', AMBER), (50, 'Bajo 50: Mycobacterium avium, CMV', RED_)):
            line = DashedLine(ax.c2p(0, thr), ax.c2p(10, thr), color=col, stroke_width=2)
            x = np.log(900 / (thr - 15)) / 0.36
            tg = tag(txt, col, 19).move_to(ax.c2p(7.2, {200: 820, 100: 660, 50: 500}[thr]))
            self.play(Create(line), Flash(ax.c2p(x, thr), color=col), FadeIn(tg), Create(Line(tg.get_bottom(), ax.c2p(x, thr), color=col, stroke_width=2)), run_time=0.9)
        self.wait(1.5)


# ------------------------------------------------------------------ gastro-14
class Gastro14Vhb(Scene):
    def construct(self):
        title(self, 'Hepatitis B aguda que se resuelve', 'Qué marcador aparece y cuándo (esquema)', AMBER)
        ax, labs = axes([0, 32, 4], [0, 1.15, 0.2], x_len=10.5, y_len=4.3, xlabel='Semanas desde el contagio',
                        ticks_x=[(w, str(w)) for w in range(0, 33, 4)])
        g = VGroup(ax, labs).shift(DOWN * 0.6)
        self.add(g)
        win = Rectangle(width=ax.c2p(24, 0)[0] - ax.c2p(20, 0)[0], height=4.3, fill_color=AMBER, fill_opacity=0.12, stroke_width=0)
        win.move_to([(ax.c2p(20, 0)[0] + ax.c2p(24, 0)[0]) / 2, ax.c2p(0, 0.575)[1], 0])
        series = [(lambda w: 0.9 * plateau(w, 4, 7, 16, 20), BLUE_, 'HBsAg', 10),
                  (lambda w: 0.6 * plateau(w, 6, 8, 12, 15), GREEN_, 'HBeAg', 10),
                  (lambda w: 0.75 * plateau(w, 8, 11, 22, 28), RED_, 'Anti-HBc IgM', 17),
                  (lambda w: 1.0 * plateau(w, 8, 12, 0, None), INK, 'Anti-HBc total', 29),
                  (lambda w: 0.55 * plateau(w, 23, 27, 0, None), VIOLET, 'Anti-HBs', 29)]
        draw_series(self, ax, series, run_time=5)
        self.play(FadeIn(win), FadeIn(tag('Ventana: solo anti-HBc IgM', AMBER, 19).move_to(ax.c2p(22, 0.15))), run_time=0.8)
        self.wait(1.6)


# ------------------------------------------------------------------ infecto-12
class Infecto12Sifilis(Scene):
    def construct(self):
        title(self, 'Sífilis: etapas y serología', 'El VDRL sigue la actividad; las treponémicas quedan positivas', RED_)
        ax, labs = axes([0, 14, 1], [0, 1.15, 0.2], x_len=10.5, y_len=4.0, xlabel='Meses (esquema)')
        g = VGroup(ax, labs).shift(DOWN * 0.8)
        self.add(g)
        stages = [(0.2, 1.8, 'Primaria', RED_), (1.8, 4.5, 'Secundaria', AMBER), (4.5, 12, 'Latente', MUTED)]
        for a, b, txt, col in stages:
            r = Rectangle(width=ax.c2p(b, 0)[0] - ax.c2p(a, 0)[0], height=0.4, fill_color=col, fill_opacity=0.25, stroke_width=0)
            r.move_to([(ax.c2p(a, 0)[0] + ax.c2p(b, 0)[0]) / 2, ax.c2p(0, 1.32)[1], 0])
            self.add(r, T(txt, 17, col, True).move_to(r))
        vdrl = lambda m: 0.15 * plateau(m, 0.8, 1.6, 0, None) + 0.75 * smooth_bump(m, 1.4, 9) if m < 7 else max(0.12, 0.15 + 0.75 * smooth_bump(m, 1.4, 9) * np.exp(-(m - 7) * 0.9))
        tp = lambda m: 0.95 * plateau(m, 0.6, 1.8, 0, None)
        draw_series(self, ax, [(tp, BLUE_, 'Treponémica (FTA-ABS)', 10.5), (vdrl, RED_, 'VDRL / RPR', 3.3)], run_time=4.5)
        pen = Arrow(ax.c2p(7, 1.0), ax.c2p(7, 0.7), color=GREEN_, buff=0, stroke_width=5)
        self.play(GrowArrow(pen), FadeIn(T('penicilina', 18, GREEN_, True).next_to(pen, UP, buff=0.05)), run_time=0.7)
        self.play(FadeIn(tag('Curación: el VDRL cae 4 veces en 6 a 12 meses', GREEN_, 19).move_to(ax.c2p(10.5, 0.3))), run_time=0.6)
        self.wait(1.5)


# ------------------------------------------------------------------ gin-01
class Gin01Ciclo(Scene):
    def construct(self):
        title(self, 'Ciclo menstrual de 28 días', 'Hormonas, folículo y endometrio, sincronizados', VIOLET)
        ax, labs = axes([0, 28, 2], [0, 1.1, 0.2], x_len=10.5, y_len=3.3, ticks_x=[(d, str(d)) for d in (1, 7, 14, 21, 28)])
        g = VGroup(ax, labs).shift(UP * 0.35 + RIGHT * 0.7)
        self.add(g)
        ov = DashedLine(ax.c2p(14, 0), ax.c2p(14, 1.08), color=MUTED, stroke_width=2)
        self.add(ov, T('ovulación', 17, MUTED).move_to(ax.c2p(14, 1.12)))
        fsh = lambda d: 0.25 + 0.15 * smooth_bump(d, 0, 8) + 0.25 * smooth_bump(d, 12.5, 15.5)
        lh = lambda d: 0.18 + 0.82 * smooth_bump(d, 12.3, 15.3) ** 1.5
        e2 = lambda d: 0.12 + 0.6 * smooth_bump(d, 3, 15) + 0.28 * smooth_bump(d, 16, 27)
        p4 = lambda d: 0.05 + 0.7 * smooth_bump(d, 14.5, 28)
        self.add(T('días', 18, MUTED).next_to(ax.c2p(28, 0), RIGHT, buff=0.1))
        tr = ValueTracker(0.01)
        endo = always_redraw(lambda: VGroup(*[Rectangle(width=ax.c2p(d + 0.5, 0)[0] - ax.c2p(d, 0)[0] + 0.01,
                                                        height=0.15 + 0.85 * (0.15 if d < 5 else min(1, 0.15 + (d - 5) / 9 * 0.5) if d < 14 else 0.65 + 0.35 * min(1, (d - 14) / 7)),
                                                        fill_color='#C0392B', fill_opacity=0.75, stroke_width=0)
                                              .move_to(ax.c2p(d + 0.25, 0) + DOWN * 1.35, aligned_edge=DOWN) for d in np.arange(0, min(tr.get_value(), 27.9), 0.5)]))
        foll = always_redraw(lambda: Circle(radius=0.08 + 0.32 * min(1, tr.get_value() / 14) if tr.get_value() < 14 else 0.32 * max(0.4, 1 - (tr.get_value() - 14) / 20),
                                            stroke_color=AMBER if tr.get_value() < 14 else GREEN_, stroke_width=4,
                                            fill_color=AMBER if tr.get_value() < 14 else GREEN_, fill_opacity=0.3)
                             .move_to(ax.c2p(min(tr.get_value(), 28), 0) + DOWN * 2.45))
        self.add(endo, foll, T('endometrio', 17, MUTED).next_to(ax.c2p(0, 0), LEFT, buff=0.15).shift(DOWN * 0.95),
                 T('folículo', 17, MUTED).next_to(ax.c2p(0, 0), LEFT, buff=0.15).shift(DOWN * 2.45))
        curves = [ax.plot(f, x_range=[0, 28, 0.05], color=c, stroke_width=4) for f, c in ((fsh, BLUE_), (lh, GREEN_), (e2, AMBER), (p4, RED_))]
        self.play(*[Create(c) for c in curves], tr.animate.set_value(28), run_time=6, rate_func=linear)
        self.play(*[FadeIn(T(n, 19, c, True).move_to(ax.c2p(x, f(x)) + UP * 0.25)) for n, c, x, f in
                    (('FSH', BLUE_, 4, fsh), ('LH', GREEN_, 14.8, lh), ('Estradiol', AMBER, 9.5, e2), ('Progesterona', RED_, 21, p4))], run_time=0.6)
        self.wait(1.5)


# ------------------------------------------------------------------ ped-17
class _Bhutani(Scene):
    kind = 'fisio'

    def construct(self):
        if self.kind == 'fisio':
            title(self, 'Ictericia fisiológica', 'Aparece después de las 24 h y se mantiene en zona baja', GREEN_)
        else:
            title(self, 'Ictericia patológica', 'Antes de las 24 h, sube rápido y cruza a zona de alto riesgo', RED_)
        ax, labs = axes([0, 144, 24], [0, 25, 5], x_len=9.5, y_len=4.5, xlabel='Horas de vida', ylabel='Bilirrubina (mg/dL)',
                        ticks_x=[(h, str(h)) for h in range(0, 145, 24)], ticks_y=[(v, str(v)) for v in (5, 10, 15, 20)])
        g = VGroup(ax, labs).shift(DOWN * 0.55)
        self.add(g)
        p95 = lambda h: 7 + 10 * (1 - np.exp(-np.asarray(h) / 40))
        p40 = lambda h: 4 + 9 * (1 - np.exp(-np.asarray(h) / 45))
        hi = ax.get_area(ax.plot(lambda h: 25 + 0 * np.asarray(h), x_range=[12, 144]), x_range=[12, 144], bounded_graph=ax.plot(p95, x_range=[12, 144]), color=RED_, opacity=0.18)
        lo = ax.get_area(ax.plot(p40, x_range=[12, 144]), x_range=[12, 144], color=GREEN_, opacity=0.15)
        self.add(hi, lo, ax.plot(p95, x_range=[12, 144], color=RED_, stroke_width=3), ax.plot(p40, x_range=[12, 144], color=GREEN_, stroke_width=3),
                 T('alto riesgo', 18, RED_).move_to(ax.c2p(110, 22)), T('bajo riesgo', 18, GREEN_).move_to(ax.c2p(110, 4)))
        r24 = Rectangle(width=ax.c2p(24, 0)[0] - ax.c2p(0, 0)[0], height=4.5, fill_color=RED_, fill_opacity=0.1, stroke_width=0).move_to(
            [(ax.c2p(0, 0)[0] + ax.c2p(24, 0)[0]) / 2, ax.c2p(0, 12.5)[1], 0])
        self.add(r24, T('< 24 h', 17, RED_).move_to(ax.c2p(12, 23.5)))
        pts = [(30, 4), (48, 7), (72, 9.5), (96, 10), (120, 8.5)] if self.kind == 'fisio' else [(10, 6), (18, 10), (30, 15), (42, 19)]
        col = GREEN_ if self.kind == 'fisio' else RED_
        prev = None
        for h, v in pts:
            d = Dot(ax.c2p(h, v), radius=0.11, color=col)
            anims = [GrowFromCenter(d)]
            if prev is not None:
                anims.append(Create(Line(prev, d.get_center(), color=col, stroke_width=4)))
            self.play(*anims, run_time=0.7)
            prev = d.get_center()
        if self.kind != 'fisio':
            self.play(FadeIn(tag('Fototerapia / buscar hemólisis', RED_, 20).move_to(ax.c2p(80, 14))), run_time=0.6)
        self.wait(1.5)


class Ped17Fisiologica(_Bhutani): kind = 'fisio'
class Ped17Patologica(_Bhutani): kind = 'pato'


# ------------------------------------------------------------------ ped-15
class Ped15Reanimacion(Scene):
    def construct(self):
        title(self, 'Reanimación neonatal: el minuto de oro', 'Cada paso se decide con la frecuencia cardíaca', GREEN_)
        steps = [('0 s', 'Al nacer', 'Secar, estimular, posicionar; evaluar respiración y FC', BLUE_),
                 ('30 s', 'Apnea o FC menor de 100', 'Ventilación a presión positiva', AMBER),
                 ('60 s', 'FC menor de 60 tras 30 s de VPP', 'Masaje 3:1 y oxígeno al 100 %', RED_),
                 ('90 s', 'Persiste menor de 60', 'Adrenalina', VIOLET)]
        rows = VGroup()
        for tt, cond, act, col in steps:
            tg = tag(tt, col, 26)
            c = T(cond, 24, INK, True)
            a = T(act, 22, MUTED)
            rows.add(VGroup(tg, VGroup(c, a).arrange(DOWN, aligned_edge=LEFT, buff=0.08).next_to(tg, RIGHT, buff=0.4)))
        rows.arrange(DOWN, aligned_edge=LEFT, buff=0.42).shift(DOWN * 0.45 + LEFT * 1.0)
        line = Line(rows[0][0].get_center(), rows[-1][0].get_center(), color=MUTED, stroke_width=3)
        self.add(line)
        for r in rows:
            self.play(FadeIn(r, shift=RIGHT * 0.3), run_time=0.9)
            self.wait(0.7)
        self.wait(1.2)


# ------------------------------------------------------------------ cirugia-09
class Cirugia09Abcde(Scene):
    def construct(self):
        title(self, 'Evaluación primaria: ABCDE', 'No pasas a la siguiente letra sin resolver la anterior', RED_)
        items = [('A', 'Vía aérea + columna cervical', RED_), ('B', 'Ventilación', AMBER), ('C', 'Circulación y control de hemorragia', BLUE_),
                 ('D', 'Déficit neurológico', VIOLET), ('E', 'Exposición y temperatura', GREEN_)]
        rows = VGroup()
        for L, txt, col in items:
            sq = RoundedRectangle(corner_radius=0.15, width=0.9, height=0.9, fill_color=col, fill_opacity=1, stroke_width=0)
            rows.add(VGroup(sq, T(L, 34, BG, True).move_to(sq), T(txt, 26, INK).next_to(sq, RIGHT, buff=0.35)))
        rows.arrange(DOWN, aligned_edge=LEFT, buff=0.28).shift(DOWN * 0.5 + LEFT * 1.5)
        for r in rows:
            r.set_opacity(0.18)
        self.add(rows)
        for i, r in enumerate(rows):
            self.play(r.animate.set_opacity(1), run_time=0.5)
            chk = T('✓ resuelto', 22, GREEN_, True).next_to(r, RIGHT, buff=0.5)
            self.play(FadeIn(chk), run_time=0.4)
            self.wait(0.35)
        self.wait(1.3)


# ------------------------------------------------------------------ gastro-11
class Gastro11Adenoma(Scene):
    def construct(self):
        title(self, 'De adenoma a cáncer: unos 10 años', 'Por eso la colonoscopía saca el pólipo antes de que degenere', AMBER)
        base = Line(LEFT * 6 + DOWN * 1.2, RIGHT * 6 + DOWN * 1.2, color='#E8A0A0', stroke_width=10)
        sub = Rectangle(width=12, height=1.2, fill_color='#5A2A2A', fill_opacity=0.6, stroke_width=0).next_to(base, DOWN, buff=0)
        self.add(sub, base, T('mucosa', 18, MUTED).next_to(base, LEFT, buff=0.1), T('pared', 18, MUTED).next_to(sub, LEFT, buff=0.1))
        stages = [('Mucosa normal', 0.0, GREEN_), ('Adenoma pequeño', 0.45, AMBER), ('Adenoma grande, velloso', 0.95, '#FF8A3D'),
                  ('Displasia de alto grado', 1.3, RED_), ('Carcinoma invasor', 1.5, '#B71C1C')]
        polyp = Ellipse(width=0.3, height=0.05, fill_color=GREEN_, fill_opacity=1, stroke_width=0).move_to(base.get_center())
        self.add(polyp)
        lab = T(stages[0][0], 28, GREEN_, True).move_to(UP * 1.5)
        yrs = T('año 0', 22, MUTED).next_to(lab, DOWN, buff=0.15)
        self.add(lab, yrs)
        for i, (name, s, col) in enumerate(stages[1:], 1):
            new = Ellipse(width=0.6 + 1.6 * s, height=0.2 + 1.5 * s, fill_color=col, fill_opacity=1, stroke_width=0).move_to(base.get_center(), aligned_edge=DOWN)
            nl, ny = T(name, 28, col, True).move_to(lab), T(f'año {i * 2 + (2 if i == 4 else 0)}', 22, MUTED).move_to(yrs)
            anims = [Transform(polyp, new), FadeOut(lab), FadeIn(nl), FadeOut(yrs), FadeIn(ny)]
            lab, yrs = nl, ny
            if i == 4:
                root = Polygon(base.get_center() + LEFT * 0.9, base.get_center() + RIGHT * 0.9, base.get_center() + DOWN * 1.1 + RIGHT * 0.3,
                               base.get_center() + DOWN * 1.0 + LEFT * 0.4, fill_color=col, fill_opacity=0.9, stroke_width=0)
                anims.append(FadeIn(root))
            self.play(*anims, run_time=1.3)
            self.wait(0.4)
        self.play(FadeIn(tag('Invade la pared: puede dar metástasis', RED_, 20).move_to(DOWN * 3.2)), run_time=0.6)
        self.wait(1.4)


# ------------------------------------------------------------------ hem-19
class Hem19Clon(Scene):
    def construct(self):
        title(self, 'Mieloma: un solo clon de células plasmáticas', 'Todas fabrican la misma inmunoglobulina: el pico M', VIOLET)
        marrow = RoundedRectangle(corner_radius=0.4, width=5.4, height=4.2, stroke_color=MUTED, fill_color='#1A1D24', fill_opacity=1).shift(LEFT * 3.2 + DOWN * 0.6)
        self.add(marrow, T('médula ósea', 18, MUTED).next_to(marrow, DOWN, buff=0.1))
        random.seed(2)
        normal = VGroup(*[Circle(radius=0.16, fill_color=random.choice([BLUE_, GREEN_, AMBER, RED_]), fill_opacity=0.8, stroke_width=0)
                          .move_to(marrow.get_center() + [random.uniform(-2.3, 2.3), random.uniform(-1.7, 1.7), 0]) for _ in range(26)])
        self.add(normal)
        ax, labs = axes([0, 10, 1], [0, 1.1, 0.2], x_len=5, y_len=3.3)
        g = VGroup(ax, labs).shift(RIGHT * 3.4 + DOWN * 0.6)
        self.add(g)
        for x, s in ((1.2, 'Alb'), (3.4, 'α1'), (4.6, 'α2'), (6.0, 'β'), (8.0, 'γ')):
            self.add(T(s, 18, MUTED).next_to(ax.c2p(x, 0), DOWN, buff=0.1))
        m = ValueTracker(0)
        spe = always_redraw(lambda: ax.plot(lambda x: 0.95 * np.exp(-((x - 1.2) / 0.45) ** 2) + 0.15 * np.exp(-((x - 3.4) / 0.4) ** 2)
                                            + 0.22 * np.exp(-((x - 4.6) / 0.45) ** 2) + 0.25 * np.exp(-((x - 6.0) / 0.5) ** 2)
                                            + 0.28 * np.exp(-((x - 8.0) / 1.0) ** 2) + m.get_value() * np.exp(-((x - 8.0) / 0.22) ** 2),
                                            x_range=[0, 10, 0.03], color=AMBER, stroke_width=4))
        self.add(spe, T('electroforesis', 18, MUTED).next_to(ax, UP, buff=0.1))
        clone = VGroup(*[Circle(radius=0.17, fill_color=VIOLET, fill_opacity=1, stroke_width=0).move_to(marrow.get_center() + [random.uniform(-2.3, 2.3), random.uniform(-1.7, 1.7), 0]) for _ in range(30)])
        self.play(LaggedStart(*[GrowFromCenter(c) for c in clone], lag_ratio=0.08), normal.animate.set_opacity(0.15), m.animate.set_value(0.95), run_time=4)
        self.play(FadeIn(tag('Pico M', VIOLET).move_to(ax.c2p(8, 1.15))), run_time=0.5)
        self.wait(1.5)


# ------------------------------------------------------------------ hem-11
class _Cascada(Scene):
    which = 'tp'

    def construct(self):
        if self.which == 'tp':
            title(self, 'El TP mide la vía extrínseca y la común', 'Lo prolonga la warfarina (factores II, VII, IX, X)', BLUE_)
        else:
            title(self, 'El TTPA mide la vía intrínseca y la común', 'Lo prolonga la heparina no fraccionada y la hemofilia', AMBER)
        def node(t, pos, col=MUTED):
            c = Circle(radius=0.42, stroke_color=col, stroke_width=3, fill_color=col, fill_opacity=0.08).move_to(pos)
            return VGroup(c, T(t, 22, INK, True).move_to(c))
        intr = [node(s, [-4.5, 1.5 - i * 0.9, 0]) for i, s in enumerate(['XII', 'XI', 'IX', 'VIII'])]
        extr = node('VII', [1.2, 1.0, 0])
        common = [node(s, [-1.6 + i * 1.35, -2.5, 0]) for i, s in enumerate(['X', 'V', 'II', 'Fbg'])]
        fib = tag('Fibrina', RED_).move_to([4.4, -2.5, 0])
        arrows = VGroup(*[Arrow(intr[i].get_bottom(), intr[i + 1].get_top(), buff=0.05, color=MUTED, stroke_width=3) for i in range(3)],
                        Arrow(intr[3].get_bottom(), common[0].get_left(), buff=0.1, color=MUTED, stroke_width=3),
                        Arrow(extr.get_bottom(), common[0].get_top(), buff=0.1, color=MUTED, stroke_width=3),
                        *[Arrow(common[i].get_right(), common[i + 1].get_left(), buff=0.05, color=MUTED, stroke_width=3) for i in range(3)],
                        Arrow(common[3].get_right(), fib.get_left(), buff=0.05, color=MUTED, stroke_width=3))
        self.add(*intr, extr, *common, fib, arrows, T('vía intrínseca', 20, MUTED).next_to(intr[0], RIGHT, buff=0.25),
                 T('vía extrínseca', 20, MUTED).next_to(extr, UP, buff=0.15), T('vía común', 20, MUTED).next_to(common[0], DOWN, buff=0.15).shift(RIGHT * 1.9))
        col = BLUE_ if self.which == 'tp' else AMBER
        path = ([extr] if self.which == 'tp' else intr) + common
        for n in path:
            self.play(n[0].animate.set_stroke(col, 6).set_fill(col, 0.35), run_time=0.45)
        self.play(Indicate(fib, color=col), run_time=0.8)
        if self.which == 'tp':
            self.add(tag('TP / INR', BLUE_, 26).move_to([3.6, 2.0, 0]))
        else:
            self.add(tag('TTPA', AMBER, 26).move_to([-2.4, 0.0, 0]))
        self.wait(1.5)


class Hem11Tp(_Cascada): which = 'tp'
class Hem11Ttpa(_Cascada): which = 'ttpa'
