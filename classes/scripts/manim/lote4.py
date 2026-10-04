"""Lote 4: diagramas clínicos (gases, gradiente, bilirrubina, facial, ojo, obstetricia, obstrucción)."""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from estilo import *
import random
from lote2 import gauge


# ------------------------------------------------------------------ nefro-11
class Nefro11Gases(Scene):
    def construct(self):
        title(self, 'Leer los gases en cuatro pasos', 'Ejemplo: pH 7,25 · HCO₃ 10 · pCO₂ 23 · Na 140 · Cl 105', BLUE_)
        steps = [('1', 'pH 7,25', 'Menor de 7,35: acidemia', RED_),
                 ('2', 'HCO₃ 10', 'Bajo 22: el trastorno primario es metabólico', AMBER),
                 ('3', 'Winter: 1,5 × 10 + 8 = 23 ± 2', 'pCO₂ medida 23: compensación adecuada', GREEN_),
                 ('4', 'Anión gap: 140 − (105 + 10) = 25', 'Alto: cetoacidosis, láctica, tóxicos, uremia', VIOLET)]
        rows = VGroup()
        for n, a, b, col in steps:
            c = Circle(radius=0.32, fill_color=col, fill_opacity=1, stroke_width=0)
            rows.add(VGroup(c, T(n, 26, BG, True).move_to(c),
                            VGroup(T(a, 28, INK, True), T(b, 22, col)).arrange(DOWN, aligned_edge=LEFT, buff=0.08).next_to(c, RIGHT, buff=0.35)))
        rows.arrange(DOWN, aligned_edge=LEFT, buff=0.38).shift(DOWN * 0.45 + LEFT * 0.8)
        for r in rows:
            self.play(FadeIn(r[0], scale=0.5), FadeIn(r[1]), run_time=0.4)
            self.play(Write(r[2][0]), run_time=0.9)
            self.play(FadeIn(r[2][1], shift=RIGHT * 0.2), run_time=0.5)
            self.wait(0.5)
        self.play(FadeIn(tag('Acidosis metabólica con anión gap alto, compensada', BLUE_, 22).to_edge(DOWN, buff=0.35)), run_time=0.6)
        self.wait(1.5)


# ------------------------------------------------------------------ resp-21
class _Gradiente(Scene):
    case = 'hipovent'

    def construct(self):
        cfg = {'hipovent': ('Hipoventilación: pulmón sano', 'Baja el oxígeno alveolar y el arterial por igual: gradiente normal', AMBER),
               'shunt': ('Shunt: pulmón dañado', 'El alvéolo lleno no oxigena: gradiente alto y el O₂ casi no corrige', RED_)}
        name, sub, col = cfg[self.case]
        title(self, name, sub, col)
        alv = Circle(radius=1.6, stroke_color=BLUE_, stroke_width=5, fill_color=BLUE_, fill_opacity=0.08).shift(LEFT * 2.6 + DOWN * 0.3)
        cap = Line(LEFT * 6 + DOWN * 2.4, RIGHT * 1 + DOWN * 2.4, color=RED_, stroke_width=22).set_opacity(0.6)
        self.add(alv, cap, T('alvéolo', 20, BLUE_).next_to(alv, UP, buff=0.1), T('capilar', 20, RED_).next_to(cap, DOWN, buff=0.1))
        pa = T('PAO₂ 100', 30, INK, True).move_to(alv)
        art = T('PaO₂ 90', 30, INK, True).move_to(RIGHT * 4.2 + DOWN * 2.0)
        grad = T('Gradiente 10', 30, GREEN_, True).move_to(RIGHT * 4.2 + UP * 0.6)
        self.add(pa, art, grad, Arrow(alv.get_bottom(), cap.get_center() + LEFT * 2.6, buff=0.05, color=MUTED))
        if self.case == 'hipovent':
            co2 = VGroup(*[T('CO₂', 18, MUTED).move_to(alv.get_center() + [np.cos(a) * 1.0, np.sin(a) * 1.0, 0]) for a in np.linspace(0, TAU, 7)[:-1]])
            self.play(FadeIn(co2, scale=0.5), run_time=1.2)
            self.play(Transform(pa, T('PAO₂ 70', 30, AMBER, True).move_to(pa)), Transform(art, T('PaO₂ 58', 30, AMBER, True).move_to(art)), run_time=1.6)
            self.play(Transform(grad, T('Gradiente 12: normal', 30, GREEN_, True).move_to(grad)), run_time=0.8)
            self.play(FadeIn(tag('Causa: opioides, neuromuscular', AMBER, 20).move_to(RIGHT * 4.2 + UP * 1.6)), run_time=0.5)
        else:
            fluid = Circle(radius=1.55, fill_color=AMBER, fill_opacity=0.55, stroke_width=0).move_to(alv)
            self.play(FadeIn(fluid), run_time=1.4)
            self.play(Transform(pa, T('PAO₂ 100', 30, INK, True).move_to(pa)), Transform(art, T('PaO₂ 50', 30, RED_, True).move_to(art)), run_time=1.4)
            self.play(Transform(grad, T('Gradiente 50: alto', 30, RED_, True).move_to(grad)), run_time=0.8)
            o2 = tag('O₂ 100 %', BLUE_, 22).move_to(LEFT * 2.6 + UP * 2.2)
            self.play(FadeIn(o2, shift=DOWN), run_time=0.6)
            self.play(Transform(art, T('PaO₂ 55', 30, RED_, True).move_to(art)), run_time=1.0)
            self.play(FadeIn(tag('SDRA, edema masivo, atelectasia', RED_, 20).move_to(RIGHT * 4.2 + UP * 1.6)), run_time=0.5)
        self.wait(1.5)


class Resp21Hipoventilacion(_Gradiente): case = 'hipovent'
class Resp21Shunt(_Gradiente): case = 'shunt'


# ------------------------------------------------------------------ gastro-13
class Gastro13Bilirrubina(Scene):
    def construct(self):
        title(self, 'El camino de la bilirrubina', 'Dónde se corta el camino define el tipo de ictericia', AMBER)
        nodes = [('Glóbulo rojo', 'hemoglobina', RED_, [-5.2, 1.2]), ('Sangre', 'B. indirecta + albúmina', AMBER, [-2.1, 1.2]),
                 ('Hígado', 'conjuga: B. directa', GREEN_, [1.0, 1.2]), ('Bilis', 'vía biliar', '#C9A227', [4.1, 1.2]),
                 ('Intestino', 'estercobilina: deposición café', '#8D6E63', [4.1, -1.3])]
        bx = [box(a, b, c, w=2.7, h=1.2).move_to([x, y, 0]) for a, b, c, (x, y) in nodes]
        arr = [Arrow(bx[i].get_right(), bx[i + 1].get_left(), buff=0.08, color=MUTED, stroke_width=4) for i in range(3)] + \
              [Arrow(bx[3].get_bottom(), bx[4].get_top(), buff=0.08, color=MUTED, stroke_width=4)]
        self.add(*bx, *arr)
        dot = Dot(radius=0.12, color=AMBER)
        path = VMobject().set_points_as_corners([bx[0].get_center(), bx[1].get_center(), bx[2].get_center(), bx[3].get_center(), bx[4].get_center()])
        self.play(MoveAlongPath(dot, path), run_time=3, rate_func=linear)
        self.remove(dot)
        blocks = [(arr[0], 'Prehepática: hemólisis', 'Sube la indirecta', RED_, [-4.6, -1.3]),
                  (arr[1], 'Hepática: hepatitis, cirrosis', 'Suben ambas', GREEN_, [-1.0, -2.3]),
                  (arr[3], 'Obstructiva: cálculo, tumor', 'Sube la directa: coluria y acolia', '#C9A227', [3.0, -3.2])]
        for a, t1, t2, col, pos in blocks:
            x = T('✕', 40, col, True).move_to(a.get_center())
            lab = VGroup(T(t1, 22, col, True), T(t2, 19, MUTED)).arrange(DOWN, buff=0.06).move_to([pos[0], pos[1], 0])
            self.play(FadeIn(x, scale=1.6), FadeIn(lab, shift=UP * 0.2), run_time=0.8)
            self.wait(0.5)
        self.wait(1.4)


# ------------------------------------------------------------------ neuro-19
class _Facial(Scene):
    kind = 'central'

    def face(self, pos):
        head = Ellipse(width=2.6, height=3.3, stroke_color=INK, stroke_width=3).move_to(pos)
        brow_l = Line(pos + [-0.85, 0.8, 0], pos + [-0.3, 0.85, 0], stroke_width=5, color=INK)
        brow_r = Line(pos + [0.3, 0.85, 0], pos + [0.85, 0.8, 0], stroke_width=5, color=INK)
        eye_l = Ellipse(width=0.45, height=0.22, stroke_color=INK).move_to(pos + [-0.55, 0.45, 0])
        eye_r = Ellipse(width=0.45, height=0.22, stroke_color=INK).move_to(pos + [0.55, 0.45, 0])
        mouth = ArcBetweenPoints(pos + [-0.6, -0.75, 0], pos + [0.6, -0.75, 0], angle=PI / 4, color=INK, stroke_width=5)
        return VGroup(head, brow_l, brow_r, eye_l, eye_r, mouth)

    def construct(self):
        if self.kind == 'central':
            title(self, 'Parálisis facial central', 'La frente se salva: recibe fibras de ambos hemisferios', BLUE_)
        else:
            title(self, 'Parálisis facial periférica', 'Se cae toda la hemicara, incluida la frente', RED_)
        ctx_l = Circle(radius=0.55, stroke_color=VIOLET, fill_color=VIOLET, fill_opacity=0.15).move_to([-4.5, 1.6, 0])
        ctx_r = Circle(radius=0.55, stroke_color=VIOLET, fill_color=VIOLET, fill_opacity=0.15).move_to([-2.0, 1.6, 0])
        nuc_up = Dot([-3.25, -0.2, 0], radius=0.12, color=AMBER)
        nuc_lo = Dot([-3.25, -1.0, 0], radius=0.12, color=AMBER)
        self.add(ctx_l, ctx_r, T('corteza izq.', 18, VIOLET).next_to(ctx_l, UP, buff=0.1), T('corteza der.', 18, VIOLET).next_to(ctx_r, UP, buff=0.1),
                 nuc_up, nuc_lo, T('núcleo facial: frente', 17, AMBER).next_to(nuc_up, LEFT, buff=0.15),
                 T('núcleo facial: boca', 17, AMBER).next_to(nuc_lo, LEFT, buff=0.15))
        f_up_l = Line(ctx_l.get_bottom(), nuc_up.get_center(), color=GREEN_, stroke_width=4)
        f_up_r = Line(ctx_r.get_bottom(), nuc_up.get_center(), color=GREEN_, stroke_width=4)
        f_lo_r = Line(ctx_r.get_bottom(), nuc_lo.get_center(), color=GREEN_, stroke_width=4)
        nerve = Line(nuc_lo.get_center(), [0.6, -0.6, 0], color=AMBER, stroke_width=6)
        self.add(f_up_l, f_up_r, f_lo_r, nerve)
        fc = self.face(np.array([3.5, -0.4, 0]))
        self.add(fc, T('hemicara izquierda', 18, MUTED).next_to(fc, DOWN, buff=0.15))
        if self.kind == 'central':
            x = T('✕', 44, RED_, True).move_to(ctx_r)
            self.play(FadeIn(x, scale=1.5), f_up_r.animate.set_color(RED_).set_opacity(0.3), f_lo_r.animate.set_color(RED_).set_opacity(0.3), run_time=1)
            self.play(Indicate(f_up_l, color=GREEN_), run_time=0.8)
            droop = ArcBetweenPoints(fc[5].get_start(), fc[5].get_end() + DOWN * 0.35, angle=PI / 6, color=RED_, stroke_width=5)
            self.play(Transform(fc[5], droop), run_time=1.2)
            self.add(tag('Frente se mueve', GREEN_, 20).next_to(fc, UP, buff=0.1))
        else:
            x = T('✕', 44, RED_, True).move_to(nerve.get_center())
            self.play(FadeIn(x, scale=1.5), nerve.animate.set_color(RED_).set_opacity(0.4), run_time=1)
            droop = ArcBetweenPoints(fc[5].get_start(), fc[5].get_end() + DOWN * 0.35, angle=PI / 6, color=RED_, stroke_width=5)
            self.play(Transform(fc[5], droop), fc[2].animate.shift(DOWN * 0.18).set_color(RED_), fc[4].animate.stretch(1.8, 1).set_color(RED_), run_time=1.4)
            self.add(tag('Frente paralizada, ojo no cierra', RED_, 20).next_to(fc, UP, buff=0.1))
        self.wait(1.6)


class Neuro19Central(_Facial): kind = 'central'
class Neuro19Periferica(_Facial): kind = 'periferica'


# ------------------------------------------------------------------ oftal-09
class _Refraccion(Scene):
    kind = 'emetrope'

    def construct(self):
        cfg = {'emetrope': ('Ojo normal (emétrope)', 'Los rayos enfocan justo en la retina', GREEN_, 0.0),
               'miope': ('Miopía', 'Enfoca delante de la retina: ve mal de lejos. Se corrige con lente divergente', BLUE_, -1.0),
               'hiper': ('Hipermetropía', 'Enfoca detrás de la retina: ve mal de cerca. Se corrige con lente convergente', AMBER, 1.0)}
        name, sub, col, shift = cfg[self.kind]
        title(self, name, sub, col)
        eye = Circle(radius=2.0, stroke_color=INK, stroke_width=4).shift(RIGHT * 1.5 + DOWN * 0.4)
        lens = Ellipse(width=0.5, height=1.6, stroke_color=BLUE_, fill_color=BLUE_, fill_opacity=0.2).move_to(eye.get_center() + LEFT * 1.4)
        retina = Arc(radius=2.0, start_angle=-PI / 3, angle=2 * PI / 3, arc_center=eye.get_center(), color=RED_, stroke_width=8)
        self.add(eye, lens, retina, T('retina', 18, RED_).next_to(retina, RIGHT, buff=0.1))
        focus = eye.get_center() + RIGHT * (2.0 + shift * 0.9)
        rays = VGroup()
        for y in (-0.6, 0, 0.6):
            r1 = Line([-6, y + eye.get_center()[1], 0], lens.get_center() + UP * y, color=AMBER, stroke_width=3)
            r2 = Line(lens.get_center() + UP * y, focus, color=AMBER, stroke_width=3)
            rays.add(r1, r2)
        self.play(LaggedStart(*[Create(r) for r in rays], lag_ratio=0.15), run_time=2.2)
        self.play(Flash(focus, color=col, flash_radius=0.3), run_time=0.7)
        if self.kind != 'emetrope':
            glass = (Polygon([-3.6, 0.9, 0], [-3.2, 0.9, 0], [-3.35, 0, 0], [-3.2, -0.9, 0], [-3.6, -0.9, 0], [-3.45, 0, 0], stroke_color=BLUE_, fill_color=BLUE_, fill_opacity=0.3)
                     if self.kind == 'miope' else Ellipse(width=0.5, height=1.9, stroke_color=AMBER, fill_color=AMBER, fill_opacity=0.3).move_to([-3.4, 0, 0]))
            glass.shift(DOWN * 0.4)
            self.play(FadeIn(glass), FadeOut(rays), run_time=0.8)
            good = eye.get_center() + RIGHT * 2.0
            new = VGroup()
            for y in (-0.6, 0, 0.6):
                y2 = y * (1.3 if self.kind == 'miope' else 0.75)
                new.add(Line([-6, y + eye.get_center()[1], 0], glass.get_center() + UP * y, color=AMBER, stroke_width=3),
                        Line(glass.get_center() + UP * y, lens.get_center() + UP * y2, color=AMBER, stroke_width=3),
                        Line(lens.get_center() + UP * y2, good, color=AMBER, stroke_width=3))
            self.play(LaggedStart(*[Create(r) for r in new], lag_ratio=0.1), run_time=2.2)
            self.play(Flash(good, color=GREEN_, flash_radius=0.3), FadeIn(tag('Corregido', GREEN_, 20).move_to([-3.4, -2.6, 0])), run_time=0.8)
        self.wait(1.4)


class Oftal09Emetrope(_Refraccion): kind = 'emetrope'
class Oftal09Miope(_Refraccion): kind = 'miope'
class Oftal09Hiper(_Refraccion): kind = 'hiper'


# ------------------------------------------------------------------ oftal-10
class Oftal10Campo(Scene):
    def construct(self):
        title(self, 'Desprendimiento de retina: lo que ve el paciente', 'Moscas, luego destellos, luego una cortina que avanza', RED_)
        field = Circle(radius=2.6, stroke_color=MUTED, stroke_width=3, fill_color='#20304A', fill_opacity=1).shift(DOWN * 0.4)
        self.add(field, T('campo visual del ojo afectado', 18, MUTED).next_to(field, DOWN, buff=0.1))
        lab = T('1 · Moscas volantes', 28, AMBER, True).to_edge(RIGHT, buff=0.6).shift(UP * 1.2)
        self.add(lab)
        random.seed(4)
        floaters = VGroup(*[Dot(radius=random.uniform(0.04, 0.09), color='#0B0F18').move_to(field.get_center() + [random.uniform(-1.6, 1.6), random.uniform(-1.6, 1.6), 0]) for _ in range(14)])
        self.play(FadeIn(floaters), *[f.animate.shift([random.uniform(-0.4, 0.4), random.uniform(-0.5, 0.2), 0]) for f in floaters], run_time=2)
        self.play(Transform(lab, T('2 · Destellos (fotopsias)', 28, AMBER, True).move_to(lab)), run_time=0.4)
        for p in ([1.4, 1.2], [-1.2, 0.8], [1.0, -0.6]):
            self.play(Flash(field.get_center() + [p[0], p[1], 0], color=WHITE, flash_radius=0.4, line_length=0.3), run_time=0.45)
        self.play(Transform(lab, T('3 · Cortina que avanza', 28, RED_, True).move_to(lab)), run_time=0.4)
        k = ValueTracker(0.01)
        curtain = always_redraw(lambda: Intersection(field, Rectangle(width=6, height=5.2 * k.get_value()).move_to(field.get_top(), aligned_edge=UP),
                                                     fill_color=BLACK, fill_opacity=0.92, stroke_width=0))
        self.add(curtain)
        self.play(k.animate.set_value(0.55), run_time=3, rate_func=smooth)
        self.play(FadeIn(tag('Urgencia: derivar el mismo día', RED_, 20).next_to(lab, DOWN, buff=0.3)), run_time=0.5)
        self.wait(1.4)


# ------------------------------------------------------------------ ob-13
def uterus(pos):
    body = Ellipse(width=3.6, height=4.4, stroke_color='#E57373', stroke_width=6, fill_color='#E57373', fill_opacity=0.12).move_to(pos)
    cervix = Rectangle(width=0.7, height=0.8, stroke_color='#E57373', stroke_width=6).next_to(body, DOWN, buff=-0.15)
    return VGroup(body, cervix)


class _Placenta(Scene):
    kind = 'previa'

    def construct(self):
        if self.kind == 'previa':
            title(self, 'Placenta previa', 'Cubre el orificio: sangrado rojo, indoloro, útero blando', BLUE_)
        else:
            title(self, 'Desprendimiento de placenta (DPPNI)', 'Hematoma detrás de la placenta: dolor y útero leñoso', RED_)
        u = uterus(np.array([-1.0, -0.2, 0]))
        self.add(u)
        fetus = Ellipse(width=1.6, height=2.3, fill_color=AMBER, fill_opacity=0.25, stroke_color=AMBER).move_to(u[0].get_center() + UP * 0.3)
        self.add(fetus, T('feto', 18, AMBER).move_to(fetus))
        if self.kind == 'previa':
            plac = ArcBetweenPoints(u[0].get_bottom() + LEFT * 1.0 + UP * 0.35, u[0].get_bottom() + RIGHT * 1.0 + UP * 0.35, angle=PI / 2.2,
                                    color=VIOLET, stroke_width=26)
            self.add(plac, T('placenta sobre el orificio', 20, VIOLET).next_to(u, RIGHT, buff=0.3).shift(DOWN * 1.6))
            drops = VGroup(*[Dot(radius=0.11, color='#FF3B30') for _ in range(8)])
            for i, d in enumerate(drops):
                d.move_to(u[1].get_bottom() + DOWN * 0.1)
            self.play(LaggedStart(*[d.animate.shift(DOWN * (0.25 + 0.16 * i) + RIGHT * (0.12 * ((-1) ** i))).set_opacity(0.9) for i, d in enumerate(drops)], lag_ratio=0.2), run_time=2.6)
            lines = VGroup(T('Sangre roja, abundante', 22, '#FF6B60', True), T('Sin dolor · útero blando', 22, INK), T('Nunca tacto vaginal', 22, AMBER, True)).arrange(DOWN, aligned_edge=LEFT).to_edge(RIGHT, buff=0.5).shift(UP * 0.8)
        else:
            plac = ArcBetweenPoints(u[0].get_top() + LEFT * 1.1 + DOWN * 0.35, u[0].get_top() + RIGHT * 1.1 + DOWN * 0.35, angle=-PI / 2.2,
                                    color=VIOLET, stroke_width=26)
            self.add(plac, T('placenta normoinserta', 20, VIOLET).next_to(u, RIGHT, buff=0.3).shift(UP * 1.6))
            hem = Ellipse(width=0.4, height=0.15, fill_color='#7B1010', fill_opacity=0.95, stroke_width=0).move_to(u[0].get_top() + DOWN * 0.22)
            self.add(hem)
            self.play(hem.animate.stretch_to_fit_width(1.9).stretch_to_fit_height(0.55), plac.animate.shift(DOWN * 0.25),
                      u[0].animate.set_stroke('#FF3B30', 9), run_time=2.6)
            self.play(Wiggle(u[0], scale_value=1.04, rotation_angle=0.01), run_time=0.8)
            lines = VGroup(T('Dolor intenso', 22, '#FF6B60', True), T('Útero leñoso, hipertónico', 22, INK), T('Sangre oscura, a veces escasa', 22, MUTED),
                           T('Sufrimiento fetal', 22, AMBER, True)).arrange(DOWN, aligned_edge=LEFT).to_edge(RIGHT, buff=0.5).shift(DOWN * 0.4)
        self.play(LaggedStart(*[FadeIn(l, shift=LEFT * 0.2) for l in lines], lag_ratio=0.3), run_time=1.5)
        self.wait(1.5)


class Ob13Previa(_Placenta): kind = 'previa'
class Ob13Dppni(_Placenta): kind = 'dppni'


# ------------------------------------------------------------------ ob-18
class Ob18Atonia(Scene):
    def construct(self):
        title(self, 'Hemorragia postparto: la atonía es la primera T', 'Útero blando que no se contrae; el masaje y la oxitocina lo cierran', RED_)
        u = uterus(np.array([-1.5, -0.2, 0]))
        u[0].set(width=4.2, height=4.8)
        self.add(u)
        lab = T('Útero atónico: blando, grande', 24, RED_, True).to_edge(RIGHT, buff=0.6).shift(UP * 1.5)
        self.add(lab)
        drops = VGroup(*[Dot(radius=0.12, color='#FF3B30').move_to(u[1].get_bottom() + DOWN * 0.1) for _ in range(9)])
        self.play(LaggedStart(*[d.animate.shift(DOWN * (0.25 + 0.14 * i) + RIGHT * (0.12 * ((-1) ** i))) for i, d in enumerate(drops)], lag_ratio=0.15), run_time=2)
        hand = T('masaje', 22, AMBER, True).next_to(u[0], LEFT, buff=0.2)
        oxy = tag('Oxitocina', BLUE_, 22).to_edge(RIGHT, buff=0.6).shift(UP * 0.4)
        self.play(FadeIn(hand), FadeIn(oxy), *[Wiggle(u[0], scale_value=1.03) for _ in range(1)], run_time=1.2)
        self.play(u[0].animate.set(width=2.8, height=3.4).set_stroke('#E57373', 9).set_fill('#E57373', 0.35), FadeOut(drops), run_time=2)
        self.play(Transform(lab, T('Contraído: deja de sangrar', 24, GREEN_, True).move_to(lab)), run_time=0.6)
        four = VGroup(*[T(s, 20, c, True) for s, c in (('Tono · 70 %', RED_), ('Trauma', AMBER), ('Tejido', VIOLET), ('Trombina', BLUE_))]).arrange(DOWN, aligned_edge=LEFT).to_edge(RIGHT, buff=0.8).shift(DOWN * 1.4)
        self.play(FadeIn(four, shift=UP * 0.2), run_time=0.8)
        self.wait(1.4)


# ------------------------------------------------------------------ cirugia-04
class Cirugia04Obstruccion(Scene):
    def construct(self):
        title(self, 'Obstrucción intestinal', 'Antes del obstáculo se acumulan gas y líquido; después, el intestino colapsa', AMBER)
        k = ValueTracker(0)
        def gut():
            g = VGroup()
            for i in range(14):
                x = -6 + i * 0.9
                proximal = x < 1.0
                r = (0.35 + 0.45 * k.get_value()) if proximal else 0.22
                g.add(Ellipse(width=0.95, height=2 * r, stroke_color='#E8A0A0', stroke_width=4, fill_color='#E8A0A0', fill_opacity=0.12).move_to([x, -0.6, 0]))
            return g
        loops = always_redraw(gut)
        self.add(loops)
        block = Rectangle(width=0.25, height=1.4, fill_color=RED_, fill_opacity=1, stroke_width=0).move_to([1.45, -0.6, 0])
        self.add(block, T('obstáculo', 20, RED_, True).next_to(block, UP, buff=0.1))
        gas = always_redraw(lambda: VGroup(*[Ellipse(width=0.7, height=max(0.05, 0.75 * k.get_value()), fill_color=BG, fill_opacity=1, stroke_width=0)
                                             .move_to([-6 + i * 0.9, -0.6 + 0.12 * k.get_value(), 0]) for i in range(8)]))
        fluid = always_redraw(lambda: VGroup(*[Rectangle(width=0.8, height=max(0.02, 0.5 * k.get_value()), fill_color='#4FA3FF', fill_opacity=0.6, stroke_width=0)
                                               .move_to([-6 + i * 0.9, -0.6 - (0.35 + 0.45 * k.get_value()) + 0.25 * k.get_value() + 0.02, 0]) for i in range(8)]))
        self.add(fluid, gas)
        self.play(k.animate.set_value(1), run_time=3.5)
        self.add(T('asas dilatadas con niveles hidroaéreos', 22, AMBER).move_to([-2.5, -2.4, 0]), T('colapsado', 20, MUTED).move_to([4, -1.4, 0]))
        self.play(FadeIn(tag('Vómitos, distensión, sin gases ni deposiciones', AMBER, 20).move_to([0, 1.6, 0])), run_time=0.6)
        self.wait(1.5)


# ------------------------------------------------------------------ oftal-06
class Oftal06Cierre(Scene):
    def construct(self):
        title(self, 'Glaucoma agudo: se cierra el ángulo', 'El humor acuoso no drena y la presión sube en horas', RED_)
        cornea = ArcBetweenPoints([-2.4, -0.5, 0], [2.4, -0.5, 0], angle=-PI / 2.2, color=BLUE_, stroke_width=5)
        k = ValueTracker(0)
        def iris():
            bow = 0.15 + 0.85 * k.get_value()
            left = VMobject(stroke_color='#8D6E63', stroke_width=12).set_points_smoothly([[-2.2, -0.6, 0], [-1.4, -0.6 + 0.35 * bow, 0], [-0.55, -0.55 + 0.1 * bow, 0]])
            right = VMobject(stroke_color='#8D6E63', stroke_width=12).set_points_smoothly([[2.2, -0.6, 0], [1.4, -0.6 + 0.35 * bow, 0], [0.55, -0.55 + 0.1 * bow, 0]])
            return VGroup(left, right)
        ir = always_redraw(iris)
        lens = Ellipse(width=1.8, height=0.9, stroke_color=INK, fill_color=INK, fill_opacity=0.08).move_to([0, -1.2, 0])
        mesh = VGroup(Dot([-2.15, -0.42, 0], radius=0.12, color=GREEN_), Dot([2.15, -0.42, 0], radius=0.12, color=GREEN_))
        self.add(cornea, lens, mesh, ir, T('córnea', 18, BLUE_).move_to([0, 1.05, 0]), T('iris', 18, '#8D6E63').move_to([-1.4, -1.25, 0]),
                 T('malla trabecular (ángulo)', 18, GREEN_).next_to(mesh[0], LEFT, buff=0.15))
        g = gauge('Presión intraocular', 10, 60, 15, GREEN_, 3.2).move_to([4.4, 1.0, 0])
        self.add(g)
        flow = VGroup(*[Dot(radius=0.06, color=BLUE_).move_to([0, -0.7, 0]) for _ in range(6)])
        self.add(flow)
        self.play(LaggedStart(*[f.animate.move_to([-2.1 if i % 2 else 2.1, -0.45, 0]).set_opacity(0) for i, f in enumerate(flow)], lag_ratio=0.15), run_time=1.6)
        self.play(k.animate.set_value(1), mesh.animate.set_color(RED_),
                  g[1].animate.stretch_to_fit_width(3.2 * (50 - 10) / 50).align_to(g[0], LEFT).set_color(RED_), run_time=3)
        self.add(T('50 mmHg', 26, RED_, True).next_to(g, DOWN, buff=0.15))
        self.play(FadeIn(tag('Dolor, ojo rojo, pupila media fija, visión borrosa', RED_, 20).move_to([0, -3.1, 0])), run_time=0.6)
        self.wait(1.4)
