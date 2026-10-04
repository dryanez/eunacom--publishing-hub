"""Lote 2: mecanismos fisiológicos."""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from estilo import *
import random


def ion(color, label, r=0.17):
    c = Circle(radius=r, fill_color=color, fill_opacity=0.9, stroke_width=0)
    return VGroup(c, T(label, 13, BG, True).move_to(c))


def gauge(label, lo, hi, val, color, w=3.4):
    track = RoundedRectangle(corner_radius=0.1, width=w, height=0.28, fill_color=GRIDC, fill_opacity=1, stroke_width=0)
    fill = RoundedRectangle(corner_radius=0.1, width=max(0.05, w * (val - lo) / (hi - lo)), height=0.28,
                            fill_color=color, fill_opacity=1, stroke_width=0).align_to(track, LEFT)
    lab = T(label, 22, INK, True).next_to(track, UP, aligned_edge=LEFT, buff=0.12)
    return VGroup(track, fill, lab)


# ------------------------------------------------------------------ diab-17
class _Potasio(Scene):
    step = 1

    def construct(self):
        if self.step == 1:
            title(self, 'La insulina mete el potasio a la célula', 'Activa la bomba sodio-potasio: el potasio del plasma cae', AMBER)
        else:
            title(self, 'Por eso: si el K es menor de 3,3, no hay insulina', 'Primero potasio; la insulina lo bajaría aún más', RED_)
        cell = Ellipse(width=6.5, height=4.0, stroke_color=BLUE_, stroke_width=5, fill_color=BLUE_, fill_opacity=0.06).shift(LEFT * 1.8 + DOWN * 0.6)
        self.add(cell, T('Célula', 22, BLUE_).next_to(cell, DOWN, buff=0.15), T('Plasma', 22, MUTED).move_to(RIGHT * 4.6 + UP * 1.6))
        pump = VGroup(Circle(radius=0.38, fill_color=AMBER, fill_opacity=1, stroke_width=0),
                      T('Na/K', 16, BG, True)).move_to(cell.point_from_proportion(0.0))
        self.add(pump)
        random.seed(3)
        k_out = VGroup(*[ion(GREEN_, 'K').move_to([random.uniform(2.2, 6.2), random.uniform(-2.6, 1.2), 0]) for _ in range(12)])
        k_in = VGroup(*[ion(GREEN_, 'K').move_to(cell.get_center() + [random.uniform(-2.2, 2.2), random.uniform(-1.2, 1.2), 0]) for _ in range(10)])
        self.add(k_out, k_in)
        start_k = 3.0 if self.step == 2 else 5.5
        g = gauge('K⁺ plasmático', 2.0, 7.0, start_k, GREEN_).move_to(RIGHT * 4.3 + DOWN * 3.1)
        val = T(f'{start_k:.1f}'.replace('.', ','), 26, GREEN_, True).next_to(g[0], RIGHT, buff=0.2)
        self.add(g, val)
        ins = VGroup(*[T('insulina', 20, AMBER, True) for _ in range(1)]).move_to(RIGHT * 4.2 + UP * 0.6)
        self.play(FadeIn(ins, shift=LEFT), ins.animate.next_to(pump, RIGHT, buff=0.1), run_time=1.2)
        self.play(Rotate(pump, TAU, rate_func=linear), run_time=0.6)
        moves = []
        n = 9 if self.step == 1 else 6
        for i in range(n):
            target = cell.get_center() + [random.uniform(-2.0, 1.8), random.uniform(-1.1, 1.1), 0]
            moves.append(k_out[i].animate.move_to(target))
        end_k = start_k - (1.3 if self.step == 1 else 1.0)
        new_fill = g[1].copy().stretch_to_fit_width(max(0.05, 3.4 * (end_k - 2) / 5)).align_to(g[0], LEFT)
        self.play(LaggedStart(*moves, lag_ratio=0.15), Transform(g[1], new_fill),
                  Rotate(pump, 3 * TAU, rate_func=linear), run_time=3.2)
        self.play(Transform(val, T(f'{end_k:.1f}'.replace('.', ','), 26, RED_ if end_k < 3.3 else GREEN_, True).move_to(val)),
                  run_time=0.5)
        if self.step == 2:
            danger = tag('Arritmia: riesgo de paro', RED_).next_to(g, UP, buff=0.55)
            self.play(FadeIn(danger), g[1].animate.set_color(RED_), run_time=0.6)
        self.wait(1.5)


class Diab17Insulina(_Potasio): step = 1
class Diab17Umbral(_Potasio): step = 2


# ------------------------------------------------------------------ nefro-05
class _Neurona(Scene):
    step = 1

    def construct(self):
        cfg = {1: ('Hiponatremia aguda: el agua entra', 'Plasma hipotónico: la neurona se hincha (edema cerebral)', RED_),
               2: ('Crónica: el cerebro se adapta', 'Expulsa osmolitos en 48 h y recupera su tamaño', GREEN_),
               3: ('Corregir muy rápido: desmielinización', 'El agua sale de golpe; máximo 8 a 10 mEq/L en 24 h', AMBER)}
        name, sub, col = cfg[self.step]
        title(self, name, sub, col)
        skull = RoundedRectangle(corner_radius=1.5, width=7.2, height=4.6, stroke_color=MUTED, stroke_width=4).shift(DOWN * 0.6)
        self.add(skull, T('cráneo', 18, MUTED).next_to(skull, DOWN, buff=0.1))
        r0 = {1: 1.1, 2: 1.75, 3: 1.1}[self.step]
        neuron = Circle(radius=r0, stroke_color=BLUE_, stroke_width=5, fill_color=BLUE_, fill_opacity=0.15).move_to(skull)
        myelin = Circle(radius=r0 + 0.15, stroke_color=VIOLET, stroke_width=8).move_to(skull)
        self.add(myelin, neuron, T('neurona', 20, BLUE_).move_to(skull.get_center() + DOWN * 0.1))
        random.seed(5)
        drops = VGroup(*[T('H₂O', 18, BLUE_, True).move_to(skull.get_center() + [random.choice([-3.0, 3.0]) * random.uniform(0.75, 1), random.uniform(-1.8, 1.8), 0]) for _ in range(10)])
        self.add(drops)
        if self.step == 1:
            self.play(LaggedStart(*[d.animate.move_to(skull.get_center() + [random.uniform(-0.8, 0.8), random.uniform(-0.8, 0.8), 0]).set_opacity(0)
                                    for d in drops], lag_ratio=0.12),
                      neuron.animate.scale(1.6), myelin.animate.scale(1.55), run_time=3.5)
            self.play(Flash(skull.get_top(), color=RED_, flash_radius=0.5), run_time=0.8)
            self.add(tag('Presión dentro del cráneo', RED_).next_to(skull, UP, buff=0.1))
        elif self.step == 2:
            osm = VGroup(*[T('osmolitos', 16, AMBER).move_to(skull.get_center() + [random.uniform(-0.9, 0.9), random.uniform(-0.9, 0.9), 0]) for _ in range(5)])
            self.add(osm)
            self.play(LaggedStart(*[o.animate.shift(RIGHT * random.choice([-3.4, 3.4])).set_opacity(0) for o in osm], lag_ratio=0.2),
                      neuron.animate.scale(1.1 / 1.75), myelin.animate.scale(1.25 / 1.9), run_time=3.5)
        else:
            self.play(neuron.animate.scale(0.6), myelin.animate.set_stroke(opacity=0.15).scale(0.75),
                      LaggedStart(*[d.animate.shift(RIGHT * 0.8 if d.get_x() > 0 else LEFT * 0.8).set_opacity(0.3) for d in drops], lag_ratio=0.05),
                      run_time=3)
            self.play(FadeIn(tag('Mielinolisis pontina central', AMBER).next_to(skull, UP, buff=0.1)), run_time=0.6)
        self.wait(1.5)


class Nefro05Aguda(_Neurona): step = 1
class Nefro05Adaptacion(_Neurona): step = 2
class Nefro05Correccion(_Neurona): step = 3


# ------------------------------------------------------------------ neuro-17
class _Placa(Scene):
    step = 1

    def construct(self):
        if self.step == 1:
            title(self, 'Placa neuromuscular normal', 'La acetilcolina encuentra receptores libres', GREEN_)
        else:
            title(self, 'Miastenia gravis', 'Anticuerpos bloquean los receptores: la fuerza cae con el uso', RED_)
        term = RoundedRectangle(corner_radius=0.6, width=4.2, height=1.6, fill_color=VIOLET, fill_opacity=0.2, stroke_color=VIOLET).move_to(UP * 1.1 + LEFT * 2)
        musc = Rectangle(width=7.5, height=0.9, fill_color=RED_, fill_opacity=0.18, stroke_color=RED_).move_to(DOWN * 1.2 + LEFT * 2)
        self.add(term, musc, T('Nervio', 20, VIOLET).next_to(term, UP, buff=0.1), T('Músculo', 20, RED_).next_to(musc, DOWN, buff=0.1))
        recs = VGroup(*[RoundedRectangle(corner_radius=0.05, width=0.32, height=0.3, fill_color=GREEN_, fill_opacity=1, stroke_width=0)
                        .move_to(musc.get_top() + RIGHT * x + UP * 0.15) for x in np.linspace(-3.0, 3.0, 9)])
        self.add(recs)
        blocked = [1, 2, 4, 6, 7] if self.step == 2 else []
        abs_ = VGroup()
        for i in blocked:
            y = T('Y', 30, AMBER, True).next_to(recs[i], UP, buff=0.0)
            abs_.add(y)
            recs[i].set_fill(MUTED)
        self.add(abs_)
        ach = VGroup(*[Dot(radius=0.07, color=AMBER) for _ in range(9)])
        for i, d in enumerate(ach):
            d.move_to(term.get_bottom() + RIGHT * (np.linspace(-1.6, 1.6, 9)[i]) + UP * 0.2)
        bar_lbl = T('Fuerza', 22, INK, True).move_to(RIGHT * 4.6 + UP * 1.6)
        bars = VGroup()
        self.add(bar_lbl)
        for rep in range(3):
            a = ach.copy()
            self.add(a)
            anims = []
            for i, d in enumerate(a):
                tgt = recs[i].get_top() + UP * 0.05
                if i in blocked:
                    tgt = recs[i].get_top() + UP * 0.6 + RIGHT * 0.2
                anims.append(d.animate.move_to(tgt))
            free = 9 - len(blocked)
            eff = free / 9 * (1 - (0.22 * rep if self.step == 2 else 0.0))
            for i in range(9):
                if i not in blocked:
                    anims.append(recs[i].animate.set_fill(WHITE if True else GREEN_))
            self.play(*anims, run_time=0.9)
            self.play(*[recs[i].animate.set_fill(GREEN_) for i in range(9) if i not in blocked], FadeOut(a), run_time=0.3)
            b = Rectangle(width=0.6, height=max(0.08, 2.6 * eff), fill_color=GREEN_ if eff > 0.5 else RED_, fill_opacity=1, stroke_width=0)
            b.move_to(RIGHT * (3.9 + rep * 0.75) + DOWN * 1.6, aligned_edge=DOWN)
            self.play(GrowFromEdge(b, DOWN), run_time=0.4)
            bars.add(b)
        self.add(T('1     2     3', 18, MUTED).next_to(bars, DOWN, buff=0.1), T('contracciones', 16, MUTED).next_to(bars, DOWN, buff=0.4))
        self.wait(1.5)


class Neuro17Normal(_Placa): step = 1
class Neuro17Miastenia(_Placa): step = 2


# ------------------------------------------------------------------ hem-07
def rbc(color=RED_):
    return VGroup(Circle(radius=0.42, fill_color=color, fill_opacity=0.9, stroke_width=0),
                  Circle(radius=0.17, fill_color=BG, fill_opacity=0.35, stroke_width=0))


def ab(color=AMBER, size=30):
    return T('Y', size, color, True)


class _Coombs(Scene):
    kind = 'directo'

    def construct(self):
        if self.kind == 'directo':
            title(self, 'Coombs directo', '¿Los glóbulos del paciente ya traen anticuerpos pegados?', RED_)
        else:
            title(self, 'Coombs indirecto', '¿El suero tiene anticuerpos libres contra glóbulos rojos?', BLUE_)
        cells = VGroup(*[rbc() for _ in range(4)]).arrange(RIGHT, buff=1.3).scale(1.35).shift(DOWN * 0.9)
        self.add(cells)
        if self.kind == 'directo':
            for c in cells:
                for ang in (0.6, 2.4, 4.2):
                    c.add(ab(AMBER, 24).move_to(c.get_center() + 0.55 * np.array([np.cos(ang), np.sin(ang), 0])).rotate(ang - PI / 2))
            self.add(T('glóbulos del paciente con IgG pegada', 20, MUTED).next_to(cells, DOWN, buff=0.4))
        else:
            serum = VGroup(*[ab(AMBER, 28).move_to([x, 1.4, 0]) for x in np.linspace(-3.5, 3.5, 6)])
            slab = T('suero de la madre', 20, AMBER).next_to(serum, UP, buff=0.1)
            self.add(serum, slab,
                     T('glóbulos rojos de prueba', 20, MUTED).next_to(cells, DOWN, buff=0.4))
            self.play(*[s.animate.move_to(cells[i % 4].get_center() + UP * 0.7 + RIGHT * (0.3 if i > 3 else -0.3)) for i, s in enumerate(serum)], run_time=1.6)
            for i, s in enumerate(serum):
                cells[i % 4].add(s)
            self.remove(serum)
            self.add(cells)
            self.play(FadeOut(slab), run_time=0.3)
        reag = VGroup(*[T('anti-IgG', 20, VIOLET, True).move_to([x, 1.3, 0]) for x in np.linspace(-3.2, 3.2, 3)])
        self.play(FadeIn(reag, shift=DOWN), run_time=0.6)
        self.add(T('suero de Coombs (anti-IgG)', 20, VIOLET).next_to(reag, UP, buff=0.1))
        self.play(cells[0].animate.shift(RIGHT * 0.9), cells[1].animate.shift(RIGHT * 0.25), cells[2].animate.shift(LEFT * 0.25),
                  cells[3].animate.shift(LEFT * 0.9), *[r.animate.move_to(cells.get_center() + UP * (0.2 - i * 0.2) + RIGHT * (i - 1) * 1.1) for i, r in enumerate(reag)],
                  run_time=1.8)
        self.play(FadeIn(tag('Aglutinación = positivo', GREEN_).next_to(cells, UP, buff=1.0)), run_time=0.6)
        self.wait(1.5)


class Hem07Directo(_Coombs): kind = 'directo'
class Hem07Indirecto(_Coombs): kind = 'indirecto'


# ------------------------------------------------------------------ hem-15
class Hem15Cid(Scene):
    def construct(self):
        title(self, 'Coagula en todo, por eso sangra en todo',
              'Los microtrombos consumen plaquetas y factores', RED_)
        vessel = VGroup(Line(LEFT * 6 + UP * 0.6, RIGHT * 2 + UP * 0.6, color=RED_, stroke_width=6),
                        Line(LEFT * 6 + DOWN * 1.4, RIGHT * 2 + DOWN * 1.4, color=RED_, stroke_width=6))
        self.add(vessel, T('vaso pequeño', 20, MUTED).next_to(vessel, DOWN, buff=0.15))
        plq = gauge('Plaquetas', 0, 1, 1, AMBER, 3.0).move_to(RIGHT * 4.6 + UP * 1.4)
        fib = gauge('Fibrinógeno', 0, 1, 1, BLUE_, 3.0).move_to(RIGHT * 4.6 + DOWN * 0.1)
        self.add(plq, fib)
        clots = VGroup()
        random.seed(7)
        for k in range(7):
            x = -5.4 + k * 1.05
            clot = VGroup(*[Line([x + random.uniform(-0.3, 0.3), -1.3 + random.uniform(0, 1.8), 0],
                                 [x + random.uniform(-0.3, 0.3), -1.3 + random.uniform(0, 1.8), 0], color=AMBER, stroke_width=3) for _ in range(5)])
            clots.add(clot)
        self.play(LaggedStart(*[Create(c) for c in clots], lag_ratio=0.25),
                  plq[1].animate.stretch_to_fit_width(0.35).align_to(plq[0], LEFT),
                  fib[1].animate.stretch_to_fit_width(0.4).align_to(fib[0], LEFT), run_time=3.5)
        self.play(plq[1].animate.set_color(RED_), fib[1].animate.set_color(RED_), run_time=0.4)
        bleed = VGroup(*[Dot(radius=0.1, color=RED_).move_to([random.uniform(-5.5, 1.5), random.uniform(-3.0, -1.7), 0]) for _ in range(14)])
        self.play(LaggedStart(*[GrowFromCenter(b) for b in bleed], lag_ratio=0.08), run_time=1.5)
        self.add(tag('Sangrado difuso', RED_).move_to(LEFT * 2 + DOWN * 3.3))
        self.wait(1.5)


# ------------------------------------------------------------------ ob-20
class _Rh(Scene):
    step = 1

    def construct(self):
        cfg = {1: ('Primer embarazo: la madre se sensibiliza', 'Glóbulos fetales Rh positivos cruzan en el parto', AMBER),
               2: ('Siguiente embarazo: la IgG cruza la placenta', 'Los anticuerpos destruyen los glóbulos del feto', RED_),
               3: ('La anti-D lo previene', 'Elimina los glóbulos fetales antes de que la madre fabrique anticuerpos', GREEN_)}
        name, sub, col = cfg[self.step]
        title(self, name, sub, col)
        mom = RoundedRectangle(corner_radius=0.4, width=5.2, height=4.2, stroke_color=BLUE_, fill_color=BLUE_, fill_opacity=0.06).shift(LEFT * 3 + DOWN * 0.6)
        fet = RoundedRectangle(corner_radius=0.4, width=4.0, height=4.2, stroke_color=AMBER, fill_color=AMBER, fill_opacity=0.06).shift(RIGHT * 3.4 + DOWN * 0.6)
        plac = Line(UP * 1.5, DOWN * 2.7, color=VIOLET, stroke_width=10).shift(RIGHT * 0.9)
        self.add(mom, fet, plac, T('Madre Rh −', 22, BLUE_, True).next_to(mom, UP, buff=0.1), T('Feto Rh +', 22, AMBER, True).next_to(fet, UP, buff=0.1),
                 T('placenta', 18, VIOLET).next_to(plac, DOWN, buff=0.1))
        random.seed(11)
        fcells = VGroup(*[rbc(AMBER).scale(0.6).move_to(fet.get_center() + [random.uniform(-1.4, 1.4), random.uniform(-1.4, 1.4), 0]) for _ in range(6)])
        self.add(fcells)
        if self.step in (1, 3):
            cross = fcells[:3]
            self.play(*[c.animate.move_to(mom.get_center() + [random.uniform(-1.5, 1.0), random.uniform(-1.2, 1.2), 0]) for c in cross], run_time=1.8)
            if self.step == 1:
                abs_ = VGroup(*[ab(AMBER, 26).move_to(mom.get_center() + [random.uniform(-2, 1.6), random.uniform(-1.6, 1.6), 0]) for _ in range(8)])
                self.play(LaggedStart(*[FadeIn(a, scale=0.4) for a in abs_], lag_ratio=0.1), run_time=2)
                self.add(tag('Memoria IgG anti-D', AMBER).next_to(mom, DOWN, buff=0.15))
            else:
                antid = VGroup(*[T('anti-D', 18, GREEN_, True).move_to(c.get_center() + UP * 0.45) for c in cross])
                self.play(FadeIn(antid, shift=DOWN), run_time=0.8)
                self.play(*[FadeOut(VGroup(c, a), scale=0.3) for c, a in zip(cross, antid)], run_time=1.4)
                self.add(tag('No se forma memoria', GREEN_).next_to(mom, DOWN, buff=0.15))
        else:
            abs_ = VGroup(*[ab(AMBER, 26).move_to(mom.get_center() + [random.uniform(-2, 1.6), random.uniform(-1.6, 1.6), 0]) for _ in range(8)])
            self.add(abs_)
            self.play(*[a.animate.move_to(fcells[i % 6].get_center() + UP * 0.35) for i, a in enumerate(abs_[:6])], run_time=2.2)
            self.play(*[c.animate.set_opacity(0.15).scale(0.7) for c in fcells], run_time=1.2)
            self.add(tag('Hemólisis fetal: anemia, hidrops', RED_).next_to(fet, DOWN, buff=0.15))
        self.wait(1.5)


class Ob20Sensibilizacion(_Rh): step = 1
class Ob20Segundo(_Rh): step = 2
class Ob20AntiD(_Rh): step = 3


# ------------------------------------------------------------------ endo-11
class Endo11Supresion(Scene):
    def construct(self):
        title(self, 'Prueba de supresión con 1 mg de dexametasona',
              'Normal: el cortisol de la mañana cae. Cushing: no se suprime', BLUE_)
        ax, labs = axes([0, 3, 1], [0, 25, 5], x_len=7.5, y_len=4.2, ylabel='Cortisol (μg/dL)')
        g = VGroup(ax, labs).shift(DOWN * 0.7 + LEFT * 0.5)
        self.add(g)
        cut = DashedLine(ax.c2p(0, 1.8), ax.c2p(3, 1.8), color=GREEN_, stroke_width=3)
        self.add(cut, T('corte 1,8', 18, GREEN_).next_to(cut, RIGHT, buff=0.1))
        self.add(T('Antes', 20, MUTED).next_to(ax.c2p(0.75, 0), DOWN, buff=0.15), T('8 AM, tras la dexametasona', 20, MUTED).next_to(ax.c2p(2.15, 0), DOWN, buff=0.15))
        def bar(x, v, c):
            return Rectangle(width=0.55, height=0.01, fill_color=c, fill_opacity=1, stroke_width=0).move_to(ax.c2p(x, 0), aligned_edge=DOWN)
        n1, c1 = bar(0.55, 15, GREEN_), bar(0.95, 20, RED_)
        n2, c2 = bar(1.95, 1, GREEN_), bar(2.35, 18, RED_)
        self.add(n1, c1, n2, c2, T('sano', 20, GREEN_, True).move_to(RIGHT * 4.3 + UP * 1.2), T('Cushing', 20, RED_, True).move_to(RIGHT * 4.3 + UP * 0.7))
        h = lambda v: ax.c2p(0, v)[1] - ax.c2p(0, 0)[1]
        self.play(n1.animate.stretch_to_fit_height(h(15)).move_to(ax.c2p(0.55, 0), aligned_edge=DOWN),
                  c1.animate.stretch_to_fit_height(h(20)).move_to(ax.c2p(0.95, 0), aligned_edge=DOWN), run_time=1.4)
        pill = tag('Dexametasona 1 mg, 23 h', VIOLET).move_to(ax.c2p(1.6, 24.5))
        self.play(FadeIn(pill, shift=DOWN), run_time=0.8)
        self.play(n2.animate.stretch_to_fit_height(h(1.0)).move_to(ax.c2p(1.95, 0), aligned_edge=DOWN),
                  c2.animate.stretch_to_fit_height(h(18)).move_to(ax.c2p(2.35, 0), aligned_edge=DOWN), run_time=2)
        self.play(Indicate(c2, color=RED_), run_time=1)
        self.wait(1.5)
