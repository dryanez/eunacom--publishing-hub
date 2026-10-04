"""Lote 1: espirometría (resp-01), curva ROC (sp-08), eje tiroideo (endo-01), insulinas (diab-11)."""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from estilo import *


# ------------------------------------------------------------------ resp-01
def fv_loop(fev_scale=1.0, vol=5.0, scoop=0.0, peak=9.0):
    """Curva flujo-volumen: rama espiratoria arriba (pico precoz y bajada), inspiratoria abajo (semicírculo)."""
    xs = np.linspace(0, vol, 200)
    up = []
    for x in xs:
        u = x / vol
        if u < 0.12:
            y = peak * fev_scale * (u / 0.12) ** 0.6
        else:
            lin = peak * fev_scale * (1 - (u - 0.12) / 0.88)
            y = lin * (1 - scoop * np.sin(np.pi * (u - 0.12) / 0.88)) if scoop else lin
        up.append((x, max(y, 0)))
    down = [(vol - x, -6 * np.sin(np.pi * x / vol) * (vol / 5) ** 0.3) for x in xs]
    return up + down


class _FV(Scene):
    kind = 'normal'

    def construct(self):
        names = {'normal': ('Curva normal', 'Pico rápido y bajada recta', GREEN_),
                 'obstructiva': ('Patrón obstructivo', 'La bajada se excava: forma de cuchara', AMBER),
                 'restrictiva': ('Patrón restrictivo', 'Forma normal, pero todo más pequeño', BLUE_)}
        name, sub, col = names[self.kind]
        title(self, name, sub, col)
        ax, labs = axes([0, 6, 1], [-7, 10, 1], x_len=8, y_len=5.2, xlabel='Volumen (L)', ylabel='Flujo (L/s)')
        g = VGroup(ax, labs).shift(DOWN * 0.45)
        self.add(g)
        self.add(T('Espiración', 20, MUTED).move_to(ax.c2p(5.4, 8)), T('Inspiración', 20, MUTED).move_to(ax.c2p(5.4, -5.6)))
        ref = fv_loop()
        if self.kind != 'normal':
            ghost = VMobject(stroke_color=MUTED, stroke_width=2, stroke_opacity=0.5).set_points_smoothly(
                [ax.c2p(*p) for p in ref])
            ghost.set_stroke(opacity=0.45)
            self.add(DashedVMobject(ghost, num_dashes=90), T('normal', 18, MUTED).move_to(ax.c2p(1.6, 9.4)))
        pts = {'normal': ref, 'obstructiva': fv_loop(0.62, 4.6, scoop=0.55),
               'restrictiva': fv_loop(0.75, 2.9)}[self.kind]
        curve = VMobject(stroke_color=col, stroke_width=6).set_points_smoothly([ax.c2p(*p) for p in pts])
        dot = Dot(color=WHITE, radius=0.08)
        dot.add_updater(lambda d: d.move_to(curve.get_end()))
        self.add(dot)
        self.play(Create(curve), run_time=4.5, rate_func=linear)
        if self.kind == 'obstructiva':
            self.play(Indicate(curve, color=AMBER, scale_factor=1.0), run_time=1)
            self.play(FadeIn(tag('Concavidad', AMBER).move_to(ax.c2p(2.6, 4.6))), run_time=0.6)
        if self.kind == 'restrictiva':
            self.play(FadeIn(tag('CVF baja', BLUE_).move_to(ax.c2p(2.9, -1.2))), run_time=0.6)
        self.wait(1.4)


class Resp01Normal(_FV): kind = 'normal'
class Resp01Obstructiva(_FV): kind = 'obstructiva'
class Resp01Restrictiva(_FV): kind = 'restrictiva'


# ------------------------------------------------------------------ sp-08
class Sp08Roc(Scene):
    def construct(self):
        title(self, 'Mover el punto de corte', 'Lo que ganas en sensibilidad lo pierdes en especificidad')
        ax, labs = axes([0, 10, 1], [0, 0.5, 0.1], x_len=6.2, y_len=3.3, xlabel='Resultado del examen')
        left = VGroup(ax, labs).to_edge(LEFT, buff=0.6).shift(DOWN * 0.6)
        sano = lambda x: 0.42 * np.exp(-((x - 3.8) / 1.5) ** 2)
        enf = lambda x: 0.42 * np.exp(-((x - 6.0) / 1.6) ** 2)
        a1 = ax.get_area(ax.plot(sano, x_range=[0, 10]), x_range=[0, 10], color=BLUE_, opacity=0.25)
        a2 = ax.get_area(ax.plot(enf, x_range=[0, 10]), x_range=[0, 10], color=RED_, opacity=0.25)
        c1 = ax.plot(sano, x_range=[0, 10], color=BLUE_, stroke_width=4)
        c2 = ax.plot(enf, x_range=[0, 10], color=RED_, stroke_width=4)
        self.add(left, a1, a2, c1, c2, T('Sanos', 22, BLUE_).move_to(ax.c2p(2.3, 0.47)),
                 T('Enfermos', 22, RED_).move_to(ax.c2p(7.6, 0.47)))
        rx, rl = axes([0, 1, 0.25], [0, 1, 0.25], x_len=3.6, y_len=3.6, xlabel='1 − especificidad', ylabel='Sensibilidad')
        right = VGroup(rx, rl).to_edge(RIGHT, buff=0.8).shift(DOWN * 0.5)
        self.add(right, DashedLine(rx.c2p(0, 0), rx.c2p(1, 1), color=MUTED, stroke_width=2))
        from math import erf
        cdf = lambda x, m, s: 0.5 * (1 + erf((x - m) / (s * np.sqrt(2))))
        sens = lambda c: 1 - cdf(c, 6.0, 1.6 / np.sqrt(2))
        fpr = lambda c: 1 - cdf(c, 3.8, 1.5 / np.sqrt(2))
        roc = VMobject(stroke_color=AMBER, stroke_width=4).set_points_smoothly(
            [rx.c2p(fpr(c), sens(c)) for c in np.linspace(10, 0, 80)])
        self.add(roc)
        k = ValueTracker(7.5)
        cut = always_redraw(lambda: Line(ax.c2p(k.get_value(), 0), ax.c2p(k.get_value(), 0.5), color=WHITE, stroke_width=4))
        pt = always_redraw(lambda: Dot(rx.c2p(fpr(k.get_value()), sens(k.get_value())), radius=0.1, color=WHITE))
        read = always_redraw(lambda: VGroup(
            T(f'Sensibilidad {round(100 * sens(k.get_value()))} %', 24, RED_, True),
            T(f'Especificidad {round(100 * (1 - fpr(k.get_value())))} %', 24, BLUE_, True)).arrange(DOWN, aligned_edge=LEFT)
            .next_to(right, UP, buff=0.25))
        self.add(cut, pt, read)
        self.play(k.animate.set_value(2.5), run_time=6, rate_func=there_and_back_with_pause)
        self.wait(0.5)


# ------------------------------------------------------------------ endo-01
class _Eje(Scene):
    case = 'normal'

    def construct(self):
        cfg = {'normal': ('Eje normal', 'La T4 libre frena a la TSH', 1.0, 1.0, GREEN_),
               'primario': ('Hipotiroidismo primario', 'Falla la tiroides: T4L baja, la TSH sube', 2.6, 0.35, RED_),
               'hiper': ('Hipertiroidismo primario', 'Exceso de T4L: la TSH se suprime', 0.12, 2.4, AMBER),
               'central': ('Hipotiroidismo central', 'Falla la hipófisis: T4L baja y TSH baja o normal', 0.45, 0.35, VIOLET)}
        name, sub, tsh, t4, col = cfg[self.case]
        title(self, name, sub, col)
        hip = box('Hipotálamo', 'TRH', BLUE_).move_to(LEFT * 2.8 + UP * 1.4)
        pit = box('Hipófisis', 'TSH', VIOLET if self.case == 'central' else BLUE_).move_to(LEFT * 2.8 + DOWN * 0.3)
        thy = box('Tiroides', 'T4 libre', RED_ if self.case == 'primario' else BLUE_).move_to(LEFT * 2.8 + DOWN * 2.0)
        a1 = Arrow(hip.get_bottom(), pit.get_top(), buff=0.08, color=MUTED, stroke_width=5)
        a2 = Arrow(pit.get_bottom(), thy.get_top(), buff=0.08, color=MUTED, stroke_width=5)
        fb = CurvedArrow(thy.get_right() + RIGHT * 0.05, pit.get_right() + RIGHT * 0.05, angle=TAU / 4, color=AMBER, stroke_width=4)
        fbl = T('frena', 20, AMBER).next_to(fb, RIGHT, buff=0.1)
        if self.case == 'central':
            pit[0].set_fill(VIOLET, 0.35)
            self.add(T('✕', 44, VIOLET, True).next_to(pit, LEFT, buff=0.2))
        if self.case == 'primario':
            thy[0].set_fill(RED_, 0.35)
            self.add(T('✕', 44, RED_, True).next_to(thy, LEFT, buff=0.2))
        self.add(hip, pit, thy, a1, a2, fb, fbl)
        # barras de nivel
        base = DOWN * 2.3
        bars = VGroup()
        for i, (lab, val, c) in enumerate((('TSH', tsh, BLUE_), ('T4 libre', t4, RED_))):
            x = RIGHT * (2.2 + i * 2.2)
            band = Rectangle(width=1.2, height=1.6, stroke_width=0, fill_color=GREEN_, fill_opacity=0.12).move_to(base + x + UP * 1.8)
            bar = Rectangle(width=1.0, height=0.01, stroke_width=0, fill_color=c, fill_opacity=0.95)
            bar.move_to(base + x, aligned_edge=DOWN)
            bars.add(VGroup(band, bar, T(lab, 24, INK, True).next_to(base + x, DOWN, buff=0.25)))
        self.add(bars, T('rango normal', 18, GREEN_).next_to(bars[0][0], LEFT, buff=0.1).shift(UP * 0.3))
        pulses = [Dot(color=WHITE, radius=0.07) for _ in range(2)]
        self.play(*[bars[i][1].animate.stretch_to_fit_height(1.8 * v).move_to(base + RIGHT * (2.2 + i * 2.2), aligned_edge=DOWN)
                    for i, v in enumerate((tsh, t4))],
                  MoveAlongPath(pulses[0], a1), MoveAlongPath(pulses[1], a2), run_time=2.5)
        self.play(ShowPassingFlash(fb.copy().set_stroke(WHITE, 8), time_width=0.5), run_time=1.2)
        self.wait(1.5)


class Endo01Normal(_Eje): case = 'normal'
class Endo01Primario(_Eje): case = 'primario'
class Endo01Hiper(_Eje): case = 'hiper'
class Endo01Central(_Eje): case = 'central'


# ------------------------------------------------------------------ diab-11
def ins_curve(onset, peak, dur, height=1.0, flat=False):
    def f(t):
        if t < 0:
            return 0
        if flat:
            return 0.45 * min(1, t / 2) if t < 24 else 0.45
        if t < peak:
            return height * (t / peak) ** 2 * (3 - 2 * t / peak)
        return height * max(0, 1 - (t - peak) / (dur - peak)) ** 1.6
    return f


class _Ins(Scene):
    which = 'basal'

    def construct(self):
        if self.which == 'basal':
            title(self, 'Insulinas basales', 'Un fondo para el ayuno y entre comidas', BLUE_)
        else:
            title(self, 'Insulinas prandiales', 'Un pulso para cada comida', AMBER)
        ax, labs = axes([0, 24, 2], [0, 1.2, 0.2], x_len=10, y_len=4.2, xlabel='Horas',
                        ticks_x=[(h, str(h)) for h in range(0, 25, 4)])
        g = VGroup(ax, labs).shift(DOWN * 0.6)
        self.add(g)
        meals = [7, 13, 20]
        for m in meals:
            self.add(DashedLine(ax.c2p(m, 0), ax.c2p(m, 1.15), color=GRIDC, stroke_width=2),
                     T('comida', 16, MUTED).move_to(ax.c2p(m, 1.18)))
        if self.which == 'basal':
            nph = ax.plot(lambda t: ins_curve(1.5, 6, 16)(t - 22 if t >= 22 else t + 2) * 0.9, x_range=[0, 24, 0.05], color=BLUE_, stroke_width=5)
            gla = ax.plot(lambda t: 0.42, x_range=[0, 24], color=GREEN_, stroke_width=5)
            self.play(Create(nph), run_time=3, rate_func=linear)
            self.play(FadeIn(tag('NPH: peak a las 4 a 10 h', BLUE_).move_to(ax.c2p(9, 1.0))), run_time=0.6)
            self.play(Create(gla), run_time=2.5, rate_func=linear)
            self.play(FadeIn(tag('Glargina: plana, 24 h', GREEN_).move_to(ax.c2p(18, 0.62))), run_time=0.6)
        else:
            reg = VGroup(*[ax.plot(lambda t, m=m: ins_curve(0.75, 2.5, 7, 0.8)(t - m + 0.5), x_range=[0, 24, 0.05],
                                   color=AMBER, stroke_width=5) for m in meals])
            lis = VGroup(*[ax.plot(lambda t, m=m: ins_curve(0.2, 1.0, 4, 1.0)(t - m), x_range=[0, 24, 0.05],
                                   color=RED_, stroke_width=5) for m in meals])
            self.play(Create(reg), run_time=3, rate_func=linear)
            self.play(FadeIn(tag('Cristalina: 30 min antes, peak 2 a 3 h', AMBER).move_to(ax.c2p(18.5, 0.95))), run_time=0.6)
            self.play(Create(lis), run_time=3, rate_func=linear)
            self.play(FadeIn(tag('Lispro / aspart: al comer, peak 1 h', RED_).move_to(ax.c2p(4.2, 1.12))), run_time=0.6)
        self.wait(1.5)


class Diab11Basales(_Ins): which = 'basal'
class Diab11Prandiales(_Ins): which = 'prandial'
