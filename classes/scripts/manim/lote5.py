"""Lote 5 (★★★): diabetes, endocrinología y hematología."""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from estilo import *
from lote2 import gauge, rbc, ab
from lote3 import plateau, smooth_bump, draw_series
import random


# ------------------------------------------------------------------ diab-01
class _Islote(Scene):
    kind = 1

    def construct(self):
        if self.kind == 1:
            title(self, 'Diabetes tipo 1: el islote se destruye', 'Autoinmunidad contra las células beta: falta absoluta de insulina', RED_)
        else:
            title(self, 'Diabetes tipo 2: resistencia y agotamiento', 'La insulina no funciona bien y la célula beta termina cansándose', AMBER)
        isl = Circle(radius=2.0, stroke_color=MUTED, fill_color='#1A1D24', fill_opacity=1).shift(LEFT * 2.6 + DOWN * 0.5)
        self.add(isl, T('islote de Langerhans', 18, MUTED).next_to(isl, DOWN, buff=0.1))
        random.seed(1)
        betas = VGroup(*[Circle(radius=0.22, fill_color=GREEN_, fill_opacity=0.9, stroke_width=0).move_to(isl.get_center() + [random.uniform(-1.4, 1.4), random.uniform(-1.4, 1.4), 0]) for _ in range(16)])
        self.add(betas, T('células beta', 18, GREEN_).move_to(isl.get_top() + DOWN * 0.3))
        g = gauge('Insulina', 0, 1, 0.8, GREEN_, 3.4).move_to(RIGHT * 3.6 + UP * 1.2)
        gl = gauge('Glicemia', 0, 1, 0.3, AMBER, 3.4).move_to(RIGHT * 3.6 + DOWN * 0.3)
        self.add(g, gl)
        if self.kind == 1:
            tcells = VGroup(*[T('T', 26, VIOLET, True).move_to(isl.get_center() + [np.cos(a) * 2.6, np.sin(a) * 2.6, 0]) for a in np.linspace(0, TAU, 9)[:-1]])
            self.play(FadeIn(tcells), run_time=0.6)
            self.play(*[t.animate.move_to(betas[i * 2].get_center()) for i, t in enumerate(tcells)], run_time=1.5)
            self.play(*[b.animate.set_fill(GRIDC).scale(0.6) for b in betas], FadeOut(tcells),
                      g[1].animate.stretch_to_fit_width(0.15).align_to(g[0], LEFT),
                      gl[1].animate.stretch_to_fit_width(3.2).align_to(gl[0], LEFT).set_color(RED_), run_time=2.5)
            self.add(tag('Necesita insulina desde el inicio', RED_, 20).move_to(RIGHT * 3.6 + DOWN * 1.8))
        else:
            cell = RoundedRectangle(corner_radius=0.3, width=2.6, height=1.4, stroke_color=BLUE_, fill_color=BLUE_, fill_opacity=0.08).move_to(RIGHT * 3.6 + DOWN * 2.3)
            self.add(cell, T('músculo / hígado', 16, BLUE_).next_to(cell, DOWN, buff=0.05))
            self.play(g[1].animate.stretch_to_fit_width(3.3).align_to(g[0], LEFT), gl[1].animate.stretch_to_fit_width(1.8).align_to(gl[0], LEFT),
                      *[b.animate.scale(1.25) for b in betas], run_time=2)
            self.add(T('resistencia', 18, BLUE_, True).move_to(cell))
            self.play(*[b.animate.set_fill(GRIDC).scale(0.7) for b in betas[::2]], g[1].animate.stretch_to_fit_width(1.4).align_to(g[0], LEFT),
                      gl[1].animate.stretch_to_fit_width(3.1).align_to(gl[0], LEFT).set_color(RED_), run_time=2.5)
            self.add(tag('Años después: se agota', AMBER, 20).move_to(LEFT * 2.6 + UP * 1.9))
        self.wait(1.5)


class Diab01Tipo1(_Islote): kind = 1
class Diab01Tipo2(_Islote): kind = 2


# ------------------------------------------------------------------ diab-10
class Diab10Eferente(Scene):
    def construct(self):
        title(self, 'Por qué el IECA protege el riñón', 'Dilata la arteriola eferente: baja la presión dentro del glomérulo', BLUE_)
        glom = Circle(radius=1.3, stroke_color=RED_, stroke_width=5, fill_color=RED_, fill_opacity=0.12).shift(DOWN * 0.4)
        k = ValueTracker(0)
        aff = Rectangle(width=3.2, height=0.7, fill_color=RED_, fill_opacity=0.5, stroke_width=0).next_to(glom, LEFT, buff=0)
        eff = always_redraw(lambda: Rectangle(width=3.2, height=0.35 + 0.35 * k.get_value(), fill_color=RED_, fill_opacity=0.5, stroke_width=0).next_to(glom, RIGHT, buff=0))
        self.add(aff, eff, glom, T('aferente', 20, MUTED).next_to(aff, UP, buff=0.1), T('eferente', 20, MUTED).next_to(eff, UP, buff=0.5),
                 T('glomérulo', 20, RED_).move_to(glom))
        g = always_redraw(lambda: gauge('Presión intraglomerular', 0, 1, 0.85 - 0.45 * k.get_value(), RED_ if k.get_value() < 0.5 else GREEN_, 4).move_to(DOWN * 2.9))
        alb = always_redraw(lambda: VGroup(*[Dot(radius=0.07, color=AMBER).move_to(glom.get_bottom() + DOWN * (0.25 + 0.18 * i) + RIGHT * (0.2 * (i % 3) - 0.2))
                                             for i in range(max(0, int(6 * (1 - k.get_value()))))]))
        self.add(g, alb, T('albúmina', 18, AMBER).move_to(glom.get_bottom() + DOWN * 0.3 + RIGHT * 1.0))
        self.wait(1.2)
        self.play(FadeIn(tag('IECA / ARA-II', GREEN_, 22).next_to(eff, DOWN, buff=0.3)), run_time=0.5)
        self.play(k.animate.set_value(1), run_time=3)
        self.wait(1.5)


# ------------------------------------------------------------------ diab-12
class _Madrugada(Scene):
    kind = 'somogyi'

    def construct(self):
        if self.kind == 'somogyi':
            title(self, 'Efecto Somogyi', 'Hipoglicemia de madrugada y rebote: hay que BAJAR la NPH nocturna', AMBER)
            f = lambda h: (150 - 95 * plateau(h, 1, 5, 0, None)) if h < 5 else (55 + 175 * plateau(h, 5, 8, 0, None))
        else:
            title(self, 'Fenómeno del alba', 'Glicemia normal a las 3 y alta al despertar: hay que SUBIR o mover la NPH', BLUE_)
            f = lambda h: 125 + 95 * plateau(h, 4, 8, 0, None)
        ax, labs = axes([0, 9, 1], [40, 280, 40], x_len=9.5, y_len=4.2, xlabel='Hora',
                        ticks_x=[(h, f'{(22 + h) % 24} h') for h in (0, 2, 5, 8)], ticks_y=[(v, str(v)) for v in (70, 180, 250)])
        gr = VGroup(ax, labs).shift(DOWN * 0.6)
        self.add(gr)
        band = Rectangle(width=9.5, height=ax.c2p(0, 180)[1] - ax.c2p(0, 70)[1], fill_color=GREEN_, fill_opacity=0.08, stroke_width=0).move_to(
            [ax.c2p(4.5, 0)[0], (ax.c2p(0, 180)[1] + ax.c2p(0, 70)[1]) / 2, 0])
        self.add(band, DashedLine(ax.c2p(0, 70), ax.c2p(9, 70), color=RED_, stroke_width=2), T('70', 16, RED_).next_to(ax.c2p(9, 70), RIGHT, buff=0.1))
        curve = ax.plot(lambda h: min(270, max(45, f(h))), x_range=[0, 9, 0.03], color=AMBER if self.kind == 'somogyi' else BLUE_, stroke_width=5)
        self.play(Create(curve), run_time=4, rate_func=linear)
        m3 = Dot(ax.c2p(5, min(270, max(45, f(5)))), radius=0.12, color=WHITE)
        self.play(FadeIn(m3, scale=0.4), FadeIn(tag('Medir a las 3 AM', VIOLET, 20).next_to(m3, UR, buff=0.15)), run_time=0.8)
        self.wait(1.6)


class Diab12Somogyi(_Madrugada): kind = 'somogyi'
class Diab12Alba(_Madrugada): kind = 'alba'


# ------------------------------------------------------------------ diab-15
class _Crisis(Scene):
    kind = 'cad'

    def construct(self):
        if self.kind == 'cad':
            title(self, 'Cetoacidosis: falta TOTAL de insulina', 'Sin insulina, la grasa se quema: cetonas y acidosis', RED_)
        else:
            title(self, 'Estado hiperosmolar: falta PARCIAL', 'Queda algo de insulina portal: sin cetosis, pero glicemia y osmolaridad altísimas', AMBER)
        liver = box('Hígado', None, BROWN if False else '#8D6E63', w=2.4, h=1.2).move_to(LEFT * 4 + UP * 0.2)
        fat = box('Tejido graso', None, AMBER, w=2.4, h=1.2).move_to(LEFT * 4 + DOWN * 1.9)
        self.add(liver, fat)
        ins = gauge('Insulina', 0, 1, 0.02 if self.kind == 'cad' else 0.25, GREEN_, 3.2).move_to(RIGHT * 3.6 + UP * 1.6)
        self.add(ins)
        glu = gauge('Glicemia', 0, 1, 0.2, AMBER, 3.2).move_to(RIGHT * 3.6 + UP * 0.5)
        ket = gauge('Cetonas', 0, 1, 0.02, RED_, 3.2).move_to(RIGHT * 3.6 + DOWN * 0.6)
        osm = gauge('Osmolaridad', 0, 1, 0.3, VIOLET, 3.2).move_to(RIGHT * 3.6 + DOWN * 1.7)
        self.add(glu, ket, osm)
        arr1 = Arrow(fat.get_right(), liver.get_right() + RIGHT * 0.1, path_arc=-1.2, color=AMBER, buff=0.1)
        self.play(GrowArrow(Arrow(liver.get_right(), liver.get_right() + RIGHT * 2.3, color=AMBER, buff=0.1)), glu[1].animate.stretch_to_fit_width(2.2 if self.kind == 'cad' else 3.15).align_to(glu[0], LEFT),
                  osm[1].animate.stretch_to_fit_width(1.6 if self.kind == 'cad' else 3.15).align_to(osm[0], LEFT), run_time=2)
        if self.kind == 'cad':
            self.play(Create(arr1), FadeIn(T('ácidos grasos → cetonas', 18, RED_).next_to(arr1, RIGHT, buff=0.1)), ket[1].animate.stretch_to_fit_width(3.1).align_to(ket[0], LEFT), run_time=2)
            self.add(tag('pH bajo 7,30 · bicarbonato bajo 18', RED_, 20).move_to(DOWN * 3.2))
        else:
            self.add(T('la insulina portal frena las cetonas', 18, GREEN_).move_to(LEFT * 4 + DOWN * 0.85))
            self.play(Indicate(ins, color=GREEN_), run_time=1)
            self.add(tag('Glicemia muy alta, deshidratación, compromiso de conciencia', AMBER, 20).move_to(DOWN * 3.2))
        self.wait(1.6)


class Diab15Cad(_Crisis): kind = 'cad'
class Diab15Hiperosmolar(_Crisis): kind = 'hhs'


# ------------------------------------------------------------------ endo-05
class Endo05Fases(Scene):
    def construct(self):
        title(self, 'Las tres fases de una tiroiditis destructiva', 'La glándula se rompe, se vacía y después se recupera', AMBER)
        ax, labs = axes([0, 26, 2], [0, 1.15, 0.2], x_len=10.5, y_len=4.0, xlabel='Semanas',
                        ticks_x=[(w, str(w)) for w in (0, 6, 16, 24)])
        g = VGroup(ax, labs).shift(DOWN * 0.7)
        self.add(g)
        for a, b, txt, col in ((0, 6, 'Tirotoxicosis', RED_), (6, 16, 'Hipotiroidismo', BLUE_), (16, 26, 'Recuperación', GREEN_)):
            r = Rectangle(width=ax.c2p(b, 0)[0] - ax.c2p(a, 0)[0], height=4.0, fill_color=col, fill_opacity=0.08, stroke_width=0).move_to(
                [(ax.c2p(a, 0)[0] + ax.c2p(b, 0)[0]) / 2, ax.c2p(0, 0.575)[1], 0])
            self.add(r, T(txt, 20, col, True).move_to(ax.c2p((a + b) / 2, 1.1)))
        t4 = lambda w: 0.45 + 0.45 * smooth_bump(w, -2, 9) - 0.3 * smooth_bump(w, 6, 18)
        tsh = lambda w: 0.45 - 0.38 * smooth_bump(w, -2, 9) + 0.42 * smooth_bump(w, 7, 19)
        draw_series(self, ax, [(t4, RED_, 'T4 libre', 3), (tsh, BLUE_, 'TSH', 12)], run_time=5)
        self.wait(1.6)


# ------------------------------------------------------------------ endo-06
class Endo06Graves(Scene):
    def construct(self):
        title(self, 'Graves: un anticuerpo que imita a la TSH', 'Estimula el receptor sin freno; la TSH real queda suprimida', RED_)
        pit = box('Hipófisis', 'TSH', BLUE_, w=2.6, h=1.0).move_to(LEFT * 4 + UP * 1.4)
        thy = Ellipse(width=3.6, height=2.2, stroke_color=RED_, fill_color=RED_, fill_opacity=0.15).move_to(LEFT * 0.5 + DOWN * 1.0)
        self.add(pit, thy, T('tiroides', 20, RED_).next_to(thy, DOWN, buff=0.1))
        recs = VGroup(*[T('⊔', 26, INK).move_to(thy.point_from_proportion(p)) for p in (0.1, 0.25, 0.4, 0.6, 0.75, 0.9)])
        self.add(recs)
        trab = VGroup(*[ab(VIOLET, 28).move_to([3.5 + random.uniform(-0.8, 0.8), 1.4 + random.uniform(-0.6, 0.6), 0]) for _ in range(6)])
        self.add(trab, T('anticuerpos anti receptor de TSH', 18, VIOLET).move_to([3.5, 2.3, 0]))
        self.play(*[t.animate.move_to(recs[i].get_center() + UP * 0.25) for i, t in enumerate(trab)], run_time=2)
        self.play(thy.animate.scale(1.25).set_fill(RED_, 0.35), run_time=1.2)
        t4 = VGroup(*[T('T4', 18, AMBER, True).move_to(thy.get_center() + [random.uniform(-1, 1), random.uniform(-0.5, 0.5), 0]) for _ in range(8)])
        self.play(LaggedStart(*[t.animate.shift(UP * 2.2 + RIGHT * random.uniform(-1, 1)) for t in t4], lag_ratio=0.1), run_time=1.6)
        fb = CurvedArrow(LEFT * 1.5 + UP * 0.4, pit.get_right(), angle=TAU / 6, color=AMBER)
        self.play(Create(fb), pit[0].animate.set_fill(GRIDC, 0.6).set_stroke(MUTED), run_time=1)
        self.add(tag('TSH suprimida · T4 libre alta', AMBER, 20).next_to(pit, DOWN, buff=0.2))
        self.wait(1.4)


# ------------------------------------------------------------------ endo-12
class _Suprarrenal(Scene):
    kind = 'addison'

    def construct(self):
        if self.kind == 'addison':
            title(self, 'Addison: falla la suprarrenal', 'Cortisol bajo, ACTH alta (pigmento) y aldosterona baja (potasio alto)', AMBER)
        else:
            title(self, 'Insuficiencia secundaria: falla la hipófisis', 'Cortisol bajo con ACTH baja: sin pigmento y aldosterona conservada', VIOLET)
        pit = box('Hipófisis', 'ACTH', VIOLET if self.kind != 'addison' else BLUE_, w=2.6, h=1.0).move_to(LEFT * 3.5 + UP * 1.4)
        adr = box('Suprarrenal', 'cortisol · aldosterona', AMBER if self.kind == 'addison' else BLUE_, w=3.2, h=1.1).move_to(LEFT * 3.5 + DOWN * 1.2)
        self.add(pit, adr, Arrow(pit.get_bottom(), adr.get_top(), buff=0.08, color=MUTED))
        bad = adr if self.kind == 'addison' else pit
        self.play(bad[0].animate.set_fill(RED_, 0.35).set_stroke(RED_), FadeIn(T('✕', 40, RED_, True).next_to(bad, LEFT, buff=0.2)), run_time=0.8)
        vals = (('ACTH', 0.95 if self.kind == 'addison' else 0.1, BLUE_), ('Cortisol', 0.12, AMBER), ('Aldosterona', 0.12 if self.kind == 'addison' else 0.55, GREEN_),
                ('Potasio', 0.9 if self.kind == 'addison' else 0.5, RED_))
        gs = VGroup(*[gauge(n, 0, 1, 0.5, c, 3.2) for n, v, c in vals]).arrange(DOWN, buff=0.45).move_to(RIGHT * 3.4 + DOWN * 0.3)
        self.add(gs)
        self.play(*[gs[i][1].animate.stretch_to_fit_width(max(0.1, 3.2 * v)).align_to(gs[i][0], LEFT) for i, (n, v, c) in enumerate(vals)], run_time=2)
        self.add(tag('Hiperpigmentación' if self.kind == 'addison' else 'Piel pálida, sin hiperkalemia', AMBER if self.kind == 'addison' else VIOLET, 20).move_to(LEFT * 3.5 + DOWN * 2.8))
        self.wait(1.6)


class Endo12Addison(_Suprarrenal): kind = 'addison'
class Endo12Secundaria(_Suprarrenal): kind = 'sec'


# ------------------------------------------------------------------ endo-15
class Endo15AlfaBeta(Scene):
    def construct(self):
        title(self, 'Feocromocitoma: alfa antes que beta', 'Bloquear beta primero deja al alfa sin oposición: crisis hipertensiva', RED_)
        vessel = VGroup(Line(LEFT * 5.5 + UP * 0.6, LEFT * 0.5 + UP * 0.6, color=RED_, stroke_width=6), Line(LEFT * 5.5 + DOWN * 0.6, LEFT * 0.5 + DOWN * 0.6, color=RED_, stroke_width=6))
        self.add(vessel, T('arteriola', 20, MUTED).next_to(vessel, DOWN, buff=0.1))
        cat = VGroup(*[Dot(radius=0.08, color=AMBER).move_to([random.uniform(-5.3, -0.7), random.uniform(-0.4, 0.4), 0]) for _ in range(16)])
        self.add(cat, T('catecolaminas', 18, AMBER).move_to(LEFT * 3 + UP * 1.1))
        pa = gauge('Presión arterial', 0, 1, 0.5, RED_, 3.4).move_to(RIGHT * 3.5 + UP * 1.0)
        self.add(pa)
        a = tag('Alfa: vasoconstricción', RED_, 20).move_to(RIGHT * 3.5 + DOWN * 0.3)
        b = tag('Beta-2: vasodilatación', GREEN_, 20).move_to(RIGHT * 3.5 + DOWN * 1.2)
        self.add(a, b)
        self.wait(0.6)
        self.play(FadeIn(T('✕ betabloqueo primero', 22, AMBER, True).next_to(b, DOWN, buff=0.25)), b.animate.set_opacity(0.25), run_time=0.8)
        self.play(vessel[0].animate.shift(DOWN * 0.38), vessel[1].animate.shift(UP * 0.38), pa[1].animate.stretch_to_fit_width(3.35).align_to(pa[0], LEFT), run_time=2)
        self.play(Flash(pa, color=RED_, flash_radius=1.2), run_time=0.8)
        self.add(tag('Primero fenoxibenzamina (alfa), días después beta', GREEN_, 20).move_to(DOWN * 3.1))
        self.wait(1.5)


# ------------------------------------------------------------------ endo-24
class _Adh(Scene):
    kind = 'di'

    def construct(self):
        cfg = {'di': ('Diabetes insípida', 'Sin ADH (o sin respuesta), el colector no reabsorbe agua: orina abundante y diluida', BLUE_),
               'siadh': ('SIADH', 'ADH sin motivo: el colector retiene agua y el sodio plasmático se diluye', AMBER)}
        name, sub, col = cfg[self.kind]
        title(self, name, sub, col)
        tub = RoundedRectangle(corner_radius=0.5, width=1.4, height=4.4, stroke_color=MUTED, fill_color=AMBER, fill_opacity=0.08).shift(LEFT * 3 + DOWN * 0.4)
        self.add(tub, T('túbulo colector', 18, MUTED).next_to(tub, UP, buff=0.1))
        aq = VGroup(*[RoundedRectangle(corner_radius=0.05, width=0.25, height=0.4, fill_color=BLUE_, fill_opacity=0.9, stroke_width=0).move_to(tub.get_right() + DOWN * (1.8 - i * 0.9) + LEFT * 0.08) for i in range(5)])
        self.add(aq, T('acuaporinas', 16, BLUE_).next_to(tub, LEFT, buff=0.15))
        n = 2 if self.kind == 'di' else 10
        water = VGroup(*[T('H₂O', 16, BLUE_, True).move_to(tub.get_center() + [random.uniform(-0.3, 0.3), 2.0 - i * 0.4, 0]) for i in range(10)])
        self.add(water)
        if self.kind == 'di':
            self.play(aq.animate.set_opacity(0.15), run_time=0.8)
        moves = [w.animate.move_to([tub.get_right()[0] + 1.6, w.get_y(), 0]) if i < n else w.animate.move_to(tub.get_bottom() + DOWN * (0.35 + 0.33 * ((i - n) // 4)) + RIGHT * (-1.3 + 0.85 * ((i - n) % 4))) for i, w in enumerate(water)]
        self.play(LaggedStart(*moves, lag_ratio=0.1), run_time=2.5)
        if self.kind == 'di':
            lines = VGroup(T('Orina: abundante y diluida', 24, BLUE_, True), T('Sodio plasmático tiende a subir', 22, INK), T('Desmopresina: si la orina se concentra, es central', 20, MUTED))
        else:
            lines = VGroup(T('Orina: escasa y concentrada', 24, AMBER, True), T('Hiponatremia euvolémica', 22, INK), T('Se trata restringiendo agua', 20, MUTED))
        self.play(FadeIn(lines.arrange(DOWN, aligned_edge=LEFT).move_to(RIGHT * 2.6 + DOWN * 0.3)), run_time=0.8)
        self.wait(1.6)


class Endo24Di(_Adh): kind = 'di'
class Endo24Siadh(_Adh): kind = 'siadh'


# ------------------------------------------------------------------ hem-03
class Hem03Etapas(Scene):
    def construct(self):
        title(self, 'La ferropenia avanza en etapas', 'Primero se vacían los depósitos; la anemia aparece al final', RED_)
        ax, labs = axes([0, 10, 1], [0, 1.1, 0.2], x_len=10, y_len=4.0, xlabel='Tiempo de balance negativo de hierro')
        g = VGroup(ax, labs).shift(DOWN * 0.7)
        self.add(g)
        for a, b, txt in ((0, 3.3, 'Depleción de depósitos'), (3.3, 6.6, 'Eritropoyesis ferropénica'), (6.6, 10, 'Anemia')):
            self.add(T(txt, 18, MUTED).move_to(ax.c2p((a + b) / 2, 1.08)), DashedLine(ax.c2p(b, 0), ax.c2p(b, 1.0), color=GRIDC) if b < 10 else VGroup())
        fer = lambda t: max(0.05, 0.9 - 0.85 * min(1, t / 3.5))
        sat = lambda t: 0.85 if t < 3 else max(0.12, 0.85 - 0.73 * min(1, (t - 3) / 3.5))
        hb = lambda t: 0.8 if t < 6.3 else max(0.35, 0.8 - 0.45 * (t - 6.3) / 3.7)
        vcm = lambda t: 0.7 if t < 6.8 else max(0.4, 0.7 - 0.3 * (t - 6.8) / 3.2)
        draw_series(self, ax, [(fer, AMBER, 'Ferritina', 1.6), (sat, BLUE_, 'Saturación', 4.6), (hb, RED_, 'Hemoglobina', 8.2), (vcm, VIOLET, 'VCM', 9.2)], run_time=5)
        self.wait(1.6)


# ------------------------------------------------------------------ hem-06
class Hem06ViajeB12(Scene):
    def construct(self):
        title(self, 'El largo viaje de la vitamina B12', 'Ácido gástrico, factor intrínseco e íleon terminal: cualquier falla produce déficit', VIOLET)
        stops = [('Alimento animal', 'B12 unida a proteína', AMBER, [-5.2, 1.2]), ('Estómago', 'ácido + factor intrínseco', RED_, [-1.8, 1.2]),
                 ('Duodeno', 'se une al factor intrínseco', BLUE_, [1.6, 1.2]), ('Íleon terminal', 'último tramo: se absorbe', GREEN_, [1.6, -1.4]),
                 ('Hígado', 'reservas de 3 a 5 años', '#8D6E63', [-1.8, -1.4])]
        bx = [box(a, b, c, w=3.0, h=1.15).move_to([x, y, 0]) for a, b, c, (x, y) in stops]
        arr = [Arrow(bx[0].get_right(), bx[1].get_left(), buff=0.08, color=MUTED), Arrow(bx[1].get_right(), bx[2].get_left(), buff=0.08, color=MUTED),
               Arrow(bx[2].get_bottom(), bx[3].get_top(), buff=0.08, color=MUTED), Arrow(bx[3].get_left(), bx[4].get_right(), buff=0.08, color=MUTED)]
        self.add(*bx, *arr)
        d = Dot(radius=0.14, color=VIOLET)
        path = VMobject().set_points_as_corners([b.get_center() for b in bx])
        self.play(MoveAlongPath(d, path), run_time=3.2, rate_func=linear)
        fails = [(bx[1], 'Anemia perniciosa, gastrectomía'), (bx[3], 'Resección ileal, Crohn'), (bx[0], 'Dieta vegana estricta')]
        for b, txt in fails:
            self.play(FadeIn(T('✕', 36, RED_, True).next_to(b, UP, buff=0.05)), FadeIn(T(txt, 17, RED_).next_to(b, DOWN, buff=0.08)), run_time=0.7)
        self.wait(1.4)


# ------------------------------------------------------------------ hem-09
class Hem09Falciforme(Scene):
    def construct(self):
        title(self, 'Anemia falciforme: la hemoglobina S polimeriza', 'Con hipoxia el glóbulo se vuelve hoz, se rompe y ocluye el capilar', RED_)
        cap = VGroup(Line(LEFT * 6 + UP * 0.5, RIGHT * 2 + UP * 0.5, color=RED_, stroke_width=5), Line(LEFT * 6 + DOWN * 0.5, RIGHT * 2 + DOWN * 0.5, color=RED_, stroke_width=5))
        self.add(cap, T('capilar', 18, MUTED).next_to(cap, DOWN, buff=0.1))
        cells = VGroup(*[rbc().scale(0.65).move_to([-5.5 + i * 1.0, 0, 0]) for i in range(6)])
        self.add(cells)
        o2 = gauge('Oxígeno', 0, 1, 0.9, BLUE_, 3.2).move_to(RIGHT * 4.3 + UP * 1.2)
        self.add(o2)
        self.play(cells.animate.shift(RIGHT * 1.5), o2[1].animate.stretch_to_fit_width(0.6).align_to(o2[0], LEFT), run_time=2)
        sickles = VGroup(*[ArcBetweenPoints(c.get_left() + DOWN * 0.1, c.get_right() + DOWN * 0.1, angle=-PI / 1.6, color=RED_, stroke_width=14) for c in cells])
        self.play(*[Transform(c, s) for c, s in zip(cells, sickles)], run_time=1.6)
        self.play(cells.animate.arrange(RIGHT, buff=-0.15).move_to(RIGHT * 1.4), run_time=1.2)
        self.add(tag('Oclusión: crisis de dolor, infarto', RED_, 20).move_to(RIGHT * 4.3 + DOWN * 0.4), tag('Hemólisis: anemia', AMBER, 20).move_to(RIGHT * 4.3 + DOWN * 1.3))
        self.wait(1.5)


# ------------------------------------------------------------------ hem-10
class Hem10Adamts13(Scene):
    def construct(self):
        title(self, 'PTT: sin ADAMTS13 el von Willebrand no se corta', 'Multímeros gigantes atrapan plaquetas y rompen glóbulos rojos', RED_)
        vessel = VGroup(Line(LEFT * 6 + UP * 1.2, RIGHT * 6 + UP * 1.2, color=RED_, stroke_width=5), Line(LEFT * 6 + DOWN * 1.6, RIGHT * 6 + DOWN * 1.6, color=RED_, stroke_width=5))
        self.add(vessel)
        vwf = VGroup(*[Line([x, 1.2, 0], [x + 0.3, -0.9, 0], color=AMBER, stroke_width=4) for x in np.linspace(-4.5, 3.5, 5)])
        self.add(vwf, T('von Willebrand gigante', 18, AMBER).move_to([-3.5, 1.6, 0]))
        sc = VGroup(*[T('✂', 26, GREEN_).move_to([x + 0.15, 0.2, 0]) for x in np.linspace(-4.5, 3.5, 5)])
        self.add(sc.set_opacity(0.2), T('ADAMTS13 ausente', 18, GREEN_).move_to([3.5, 1.6, 0]))
        plq = VGroup(*[Dot(radius=0.09, color=VIOLET).move_to([random.uniform(-5.8, -4.8), random.uniform(-1.3, 0.9), 0]) for _ in range(18)])
        self.add(plq)
        self.play(*[p.animate.move_to(vwf[i % 5].point_from_proportion(random.uniform(0.2, 0.9)) + RIGHT * 0.1) for i, p in enumerate(plq)], run_time=2.2)
        cells = VGroup(*[rbc().scale(0.5).move_to([-5.5, -0.9 + 0.5 * i, 0]) for i in range(3)])
        self.add(cells)
        self.play(cells.animate.shift(RIGHT * 4.2), run_time=1.5)
        frags = VGroup(*[Triangle(fill_color=RED_, fill_opacity=0.9, stroke_width=0).scale(0.12).move_to(cells[i].get_center() + [random.uniform(-0.3, 0.3), random.uniform(-0.2, 0.2), 0]) for i in range(3) for _ in range(3)])
        self.play(FadeOut(cells), FadeIn(frags), run_time=0.8)
        self.add(tag('Esquistocitos + plaquetas bajas: plasmaféresis, nunca plaquetas', RED_, 20).move_to(DOWN * 2.6))
        self.wait(1.4)


# ------------------------------------------------------------------ hem-14
class Hem14VitaminaK(Scene):
    def construct(self):
        title(self, 'La vitamina K activa cuatro factores', 'II, VII, IX y X necesitan vitamina K; la warfarina bloquea su reciclaje', BLUE_)
        fac = VGroup(*[Circle(radius=0.5, stroke_color=MUTED, fill_color=GRIDC, fill_opacity=1) for _ in range(4)]).arrange(RIGHT, buff=0.7).shift(DOWN * 0.4)
        labs = VGroup(*[T(s, 26, INK, True).move_to(fac[i]) for i, s in enumerate(['II', 'VII', 'IX', 'X'])])
        self.add(fac, labs, T('factores inactivos (hígado)', 20, MUTED).next_to(fac, DOWN, buff=0.25))
        vk = VGroup(*[T('K', 26, GREEN_, True).move_to([x, 2.0, 0]) for x in np.linspace(-3, 3, 4)])
        self.play(FadeIn(vk, shift=DOWN), run_time=0.6)
        self.play(*[v.animate.move_to(fac[i].get_top() + UP * 0.2) for i, v in enumerate(vk)], *[f.animate.set_fill(GREEN_, 0.5).set_stroke(GREEN_) for f in fac], run_time=1.5)
        ok = tag('Coagulación normal', GREEN_, 20).move_to(UP * 1.2 + RIGHT * 4.5)
        self.add(ok)
        self.wait(0.6)
        warf = tag('Warfarina', RED_, 22).move_to(UP * 2.3)
        self.play(FadeIn(warf), FadeOut(vk), FadeOut(ok), *[f.animate.set_fill(GRIDC, 1).set_stroke(MUTED) for f in fac], run_time=1.4)
        self.play(Indicate(fac[1], color=RED_), run_time=0.8)
        self.add(T('el VII tiene la vida media más corta: el TP se alarga primero', 20, AMBER).move_to(DOWN * 2.3))
        self.wait(1.5)


# ------------------------------------------------------------------ hem-17
class Hem17Filadelfia(Scene):
    def construct(self):
        title(self, 'Cromosoma Filadelfia: t(9;22)', 'Nace BCR-ABL, una tirosina quinasa siempre encendida; el imatinib la apaga', VIOLET)
        c9 = VGroup(RoundedRectangle(corner_radius=0.2, width=0.6, height=3.2, fill_color=BLUE_, fill_opacity=0.8, stroke_width=0),
                    RoundedRectangle(corner_radius=0.2, width=0.6, height=0.9, fill_color=GREEN_, fill_opacity=1, stroke_width=0)).arrange(DOWN, buff=0.05).move_to(LEFT * 4 + DOWN * 0.3)
        c22 = VGroup(RoundedRectangle(corner_radius=0.2, width=0.6, height=1.6, fill_color=AMBER, fill_opacity=0.8, stroke_width=0),
                     RoundedRectangle(corner_radius=0.2, width=0.6, height=0.9, fill_color=RED_, fill_opacity=1, stroke_width=0)).arrange(DOWN, buff=0.05).move_to(LEFT * 2 + DOWN * 0.6)
        abl = T('ABL', 18, GREEN_).next_to(c9[1], LEFT, buff=0.1)
        self.add(c9, c22, T('9', 24, BLUE_, True).next_to(c9, UP, buff=0.1), T('22', 24, AMBER, True).next_to(c22, UP, buff=0.1),
                 abl, T('BCR', 18, AMBER).next_to(c22[0], LEFT, buff=0.1))
        p9, p22 = c9[1].get_center(), c22[1].get_center()
        g9 = VGroup(c9[1], abl)
        self.play(g9.animate.shift(c22[0].get_bottom() + DOWN * 0.5 - c9[1].get_center()), c22[1].animate.move_to(p9), run_time=2)
        ph = VGroup(c22[0], c9[1])
        self.play(Indicate(ph, color=VIOLET), FadeIn(T('Filadelfia', 22, VIOLET, True).next_to(c22, RIGHT, buff=0.3)), run_time=1)
        kin = Circle(radius=0.7, fill_color=RED_, fill_opacity=0.6, stroke_width=0).move_to(RIGHT * 2.5 + DOWN * 0.3)
        self.play(FadeIn(kin), FadeIn(T('BCR-ABL', 22, INK, True).move_to(kin)), run_time=0.8)
        self.play(Flash(kin, color=RED_, flash_radius=1.0), run_time=0.8)
        self.add(T('proliferación mieloide sin freno', 20, RED_).next_to(kin, DOWN, buff=0.3))
        im = tag('Imatinib', GREEN_, 22).move_to(RIGHT * 5 + UP * 1.2)
        self.play(FadeIn(im), im.animate.move_to(kin.get_top() + UP * 0.2), kin.animate.set_fill(GRIDC, 0.8), run_time=1.4)
        self.wait(1.4)


# ------------------------------------------------------------------ hem-22
class Hem22Lisis(Scene):
    def construct(self):
        title(self, 'Síndrome de lisis tumoral', 'Las células se rompen: suben potasio, fósforo y ácido úrico; baja el calcio', RED_)
        random.seed(9)
        cells = VGroup(*[Circle(radius=0.32, fill_color=VIOLET, fill_opacity=0.8, stroke_width=0).move_to([random.uniform(-5.5, -1.5), random.uniform(-2.2, 1.4), 0]) for _ in range(14)])
        self.add(cells, T('blastos (Burkitt, LLA)', 18, VIOLET).move_to([-3.5, 1.9, 0]))
        q = tag('Quimioterapia', AMBER, 22).move_to([-3.5, -2.9, 0])
        self.play(FadeIn(q), run_time=0.5)
        bits = VGroup()
        for c in cells:
            for s, col in (('K', GREEN_), ('P', BLUE_), ('U', AMBER)):
                bits.add(T(s, 16, col, True).move_to(c.get_center()))
        self.play(*[c.animate.scale(0.2).set_opacity(0) for c in cells], LaggedStart(*[b.animate.shift([random.uniform(0.5, 2.5), random.uniform(-0.8, 0.8), 0]) for b in bits], lag_ratio=0.01), run_time=2)
        vals = (('Potasio', 0.9, GREEN_), ('Fósforo', 0.85, BLUE_), ('Ácido úrico', 0.9, AMBER), ('Calcio', 0.15, RED_))
        gs = VGroup(*[gauge(n, 0, 1, 0.45, c, 3.0) for n, v, c in vals]).arrange(DOWN, buff=0.4).move_to(RIGHT * 3.8 + DOWN * 0.3)
        self.add(gs)
        self.play(*[gs[i][1].animate.stretch_to_fit_width(3.0 * v).align_to(gs[i][0], LEFT) for i, (n, v, c) in enumerate(vals)], run_time=1.6)
        self.add(tag('Arritmia y falla renal', RED_, 20).move_to(RIGHT * 3.8 + DOWN * 2.8))
        self.wait(1.5)
