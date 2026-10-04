"""Lote 6 (★★★): gastro, infecto, nefro, neuro."""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from estilo import *
from lote2 import gauge
from lote3 import plateau, smooth_bump, draw_series
import random


# ------------------------------------------------------------------ gastro-03
class _Mano(Scene):
    kind = 'normal'

    def construct(self):
        if self.kind == 'normal':
            title(self, 'Deglución normal', 'Una onda peristáltica baja y el esfínter inferior se relaja a tiempo', GREEN_)
        else:
            title(self, 'Acalasia', 'Sin peristalsis y el esfínter inferior no se relaja: el bolo se estanca', RED_)
        top, bot = UP * 2.0, DOWN * 2.4
        x0 = LEFT * 2.5
        wall_l = Line(x0 + LEFT * 0.5 + top, x0 + LEFT * 0.5 + bot, color='#E8A0A0', stroke_width=8)
        wall_r = Line(x0 + RIGHT * 0.5 + top, x0 + RIGHT * 0.5 + bot, color='#E8A0A0', stroke_width=8)
        les = Rectangle(width=1.6, height=0.35, fill_color=RED_ if self.kind == 'acalasia' else AMBER, fill_opacity=0.9, stroke_width=0).move_to(x0 + bot + UP * 0.2)
        self.add(wall_l, wall_r, les, T('esfínter inferior', 18, AMBER).next_to(les, RIGHT, buff=0.2), T('esófago', 18, MUTED).next_to(wall_r, RIGHT, buff=0.2).shift(UP * 1.5))
        bolus = Circle(radius=0.38, fill_color=AMBER, fill_opacity=0.9, stroke_width=0).move_to(x0 + top + DOWN * 0.3)
        self.add(bolus)
        ax, labs = axes([0, 6, 1], [0, 1, 0.2], x_len=5, y_len=3.4, xlabel='tiempo')
        g = VGroup(ax, labs).shift(RIGHT * 3.3 + DOWN * 0.4)
        self.add(g, T('presión del esfínter', 18, MUTED).next_to(ax, UP, buff=0.1))
        if self.kind == 'normal':
            p = lambda t: 0.6 - 0.5 * smooth_bump(t, 1.2, 4.2)
            wave = Rectangle(width=1.2, height=0.25, fill_color=GREEN_, fill_opacity=0.6, stroke_width=0).move_to(x0 + top)
            self.add(wave)
            self.play(Create(ax.plot(p, x_range=[0, 6, 0.05], color=GREEN_, stroke_width=5)), wave.animate.move_to(x0 + bot + UP * 0.8),
                      bolus.animate.move_to(x0 + bot + UP * 0.9), run_time=2.5, rate_func=linear)
            self.play(les.animate.stretch_to_fit_width(0.6), bolus.animate.move_to(x0 + bot + DOWN * 0.5).scale(0.7), run_time=1)
            self.play(les.animate.stretch_to_fit_width(1.6), run_time=0.5)
        else:
            p = lambda t: 0.85 + 0.0 * t
            self.play(Create(ax.plot(p, x_range=[0, 6, 0.05], color=RED_, stroke_width=5)), bolus.animate.move_to(x0 + bot + UP * 0.8), run_time=2.5)
            self.play(wall_l.animate.shift(LEFT * 0.5), wall_r.animate.shift(RIGHT * 0.5), bolus.animate.scale(1.6).shift(UP * 0.4), run_time=1.5)
            self.add(tag('Pico de pájaro: esófago dilatado arriba', RED_, 20).move_to(LEFT * 2.5 + DOWN * 3.2))
        self.wait(1.4)


class Gastro03Normal(_Mano): kind = 'normal'
class Gastro03Acalasia(_Mano): kind = 'acalasia'


# ------------------------------------------------------------------ gastro-10
def colon_path():
    pts = [[3.0, -2.6, 0], [3.0, 1.4, 0], [2.4, 1.9, 0], [-2.4, 1.9, 0], [-3.0, 1.4, 0], [-3.0, -1.6, 0], [-2.2, -2.4, 0], [-0.8, -2.0, 0], [-0.4, -3.0, 0]]
    return [[-x, y, z] for x, y, z in pts]          # vista anterior: el ciego (derecha del paciente) a la izquierda de la pantalla


class _Eii(Scene):
    kind = 'cu'

    def construct(self):
        if self.kind == 'cu':
            title(self, 'Colitis ulcerosa', 'Continua, parte en el recto y sube; solo afecta la mucosa', AMBER)
        else:
            title(self, 'Enfermedad de Crohn', 'Salteada, de la boca al ano (sobre todo íleon terminal), afecta toda la pared', VIOLET)
        base = VMobject(stroke_color='#E8A0A0', stroke_width=26, stroke_opacity=0.35).set_points_smoothly(colon_path())
        self.add(base, T('recto', 18, MUTED).next_to(base.get_end(), LEFT, buff=0.2), T('ciego', 18, MUTED).move_to([-3.7, -2.6, 0]),
                 T('íleon', 18, MUTED).move_to([-4.6, -1.3, 0]))
        ileum = VMobject(stroke_color='#E8A0A0', stroke_width=16, stroke_opacity=0.35).set_points_smoothly([[-3.0, -2.2, 0], [-4.0, -1.8, 0], [-5.2, -1.0, 0]])
        self.add(ileum)
        col = AMBER if self.kind == 'cu' else VIOLET
        if self.kind == 'cu':
            k = ValueTracker(0.001)
            dis = always_redraw(lambda: VMobject(stroke_color=col, stroke_width=26).set_points_smoothly(colon_path()[::-1]).pointwise_become_partial(
                VMobject().set_points_smoothly(colon_path()[::-1]), 0, k.get_value()).set_stroke(col, 26))
            self.add(dis)
            self.play(k.animate.set_value(0.55), run_time=3.5)
            self.add(tag('Sin zonas sanas · mucosa', AMBER, 20).move_to(DOWN * 0.3))
        else:
            segs = [(0.08, 0.16), (0.35, 0.42), (0.62, 0.68), (0.9, 0.97)]
            full = VMobject().set_points_smoothly(colon_path())
            parts = [VMobject().pointwise_become_partial(full, a, b).set_stroke(col, 26) for a, b in segs]
            il = VMobject().pointwise_become_partial(ileum, 0.0, 0.8).set_stroke(col, 18)
            self.play(Create(il), run_time=1)
            self.play(LaggedStart(*[Create(p) for p in parts], lag_ratio=0.3), run_time=2.5)
            self.add(tag('Lesiones salteadas · transmural: fístulas', VIOLET, 20).move_to(DOWN * 0.3))
        self.wait(1.6)


class Gastro10Cu(_Eii): kind = 'cu'
class Gastro10Crohn(_Eii): kind = 'crohn'


# ------------------------------------------------------------------ gastro-15
class Gastro15Portal(Scene):
    def construct(self):
        title(self, 'Hipertensión portal', 'El hígado cirrótico frena la sangre: busca colaterales y se filtra al abdomen', RED_)
        liver = Ellipse(width=3.4, height=1.8, fill_color='#8D6E63', fill_opacity=0.6, stroke_width=0).move_to(UP * 1.2 + LEFT * 0.5)
        self.add(liver, T('hígado cirrótico', 20, INK, True).move_to(liver))
        portal = Line(DOWN * 2.2 + LEFT * 0.5, liver.get_bottom(), color=BLUE_, stroke_width=14)
        self.add(portal, T('vena porta', 18, BLUE_).next_to(portal, LEFT, buff=0.2))
        g = gauge('Presión portal', 0, 1, 0.3, BLUE_, 3.0).move_to(RIGHT * 4.2 + UP * 0.9)
        self.add(g)
        flow = VGroup(*[Dot(radius=0.08, color=BLUE_).move_to(portal.get_start()) for _ in range(6)])
        self.add(flow)
        self.play(LaggedStart(*[f.animate.move_to(liver.get_bottom() + DOWN * 0.15) for f in flow], lag_ratio=0.2),
                  g[1].animate.stretch_to_fit_width(2.8).align_to(g[0], LEFT).set_color(RED_), portal.animate.set_stroke(width=22), run_time=2.5)
        var = VMobject(stroke_color=VIOLET, stroke_width=7).set_points_smoothly([[-0.5, -0.4, 0], [-2.2, 0.2, 0], [-2.6, 1.9, 0]])
        med = VGroup(*[ArcBetweenPoints([0, -2.6, 0] + np.array([0.2 * np.cos(a), 0.2 * np.sin(a), 0]), [0, -2.6, 0] + np.array([1.1 * np.cos(a), 1.1 * np.sin(a), 0]), angle=0.6, color=VIOLET, stroke_width=5)
                       for a in np.linspace(0, TAU, 7)[:-1]]).move_to(RIGHT * 2.2 + DOWN * 1.8)
        self.play(Create(var), FadeIn(T('várices esofágicas', 18, VIOLET).next_to(var, LEFT, buff=0.1)), run_time=1.2)
        self.play(Create(med), FadeIn(T('cabeza de medusa', 18, VIOLET).next_to(med, UP, buff=0.1)), run_time=1.2)
        asc = VGroup(*[Dot(radius=0.07, color='#9FD3FF').move_to([random.uniform(-4.5, 4), random.uniform(-3.4, -3.0), 0]) for _ in range(30)])
        self.play(LaggedStart(*[GrowFromCenter(a) for a in asc], lag_ratio=0.03), FadeIn(T('ascitis', 20, '#9FD3FF', True).move_to(LEFT * 4.6 + DOWN * 2.6)), run_time=1.5)
        self.wait(1.4)


# ------------------------------------------------------------------ gastro-17
class Gastro17Calculo(Scene):
    def construct(self):
        title(self, 'Un cálculo, cuatro cuadros', 'Dónde se enclava decide el diagnóstico', AMBER)
        gb = Ellipse(width=1.6, height=2.4, stroke_color=GREEN_, stroke_width=5, fill_color=GREEN_, fill_opacity=0.12).move_to(LEFT * 3.2 + UP * 0.3).rotate(0.5)
        cystic = Line(gb.get_top() + RIGHT * 0.3, LEFT * 1.6 + UP * 1.6, color=GREEN_, stroke_width=6)
        hep = Line(LEFT * 1.6 + UP * 2.6, LEFT * 1.6 + UP * 1.6, color=GREEN_, stroke_width=8)
        cbd = Line(LEFT * 1.6 + UP * 1.6, LEFT * 1.0 + DOWN * 2.0, color=GREEN_, stroke_width=8)
        panc = Line(RIGHT * 2.2 + DOWN * 2.0, LEFT * 0.95 + DOWN * 2.0, color=AMBER, stroke_width=6)
        duo = Arc(radius=1.2, start_angle=PI * 0.6, angle=-PI * 1.1, arc_center=LEFT * 0.6 + DOWN * 2.0, color='#E8A0A0', stroke_width=14)
        self.add(gb, cystic, hep, cbd, panc, duo, T('vesícula', 18, GREEN_).next_to(gb, LEFT, buff=0.1), T('colédoco', 18, GREEN_).next_to(cbd, LEFT, buff=0.1),
                 T('Wirsung', 18, AMBER).next_to(panc, UP, buff=0.1), T('ampolla', 18, MUTED).next_to(cbd.get_end(), DOWN, buff=0.35))
        stone = Dot(radius=0.16, color='#C9A227').move_to(gb.get_center())
        self.add(stone)
        stops = [(gb.get_center() + UP * 0.6, 'Bacinete transitorio', 'Cólico biliar', GREEN_), (cystic.point_from_proportion(0.3), 'Enclavado en el cístico', 'Colecistitis aguda', AMBER),
                 (cbd.point_from_proportion(0.5), 'En el colédoco', 'Coledocolitiasis / colangitis', RED_), (cbd.get_end() + DOWN * 0.05, 'En la ampolla', 'Pancreatitis biliar', VIOLET)]
        lab = VGroup()
        for p, a, b, c in stops:
            nl = VGroup(T(a, 24, c, True), T(b, 22, INK)).arrange(DOWN, aligned_edge=LEFT).move_to(RIGHT * 3.6 + UP * 0.8)
            self.play(stone.animate.move_to(p), FadeOut(lab), FadeIn(nl), run_time=1.3)
            lab = nl
            self.wait(0.8)
        self.wait(1.0)


# ------------------------------------------------------------------ gastro-25
class Gastro25Invaginacion(Scene):
    def construct(self):
        title(self, 'Invaginación intestinal', 'Un segmento se mete dentro del siguiente: dolor intermitente y jalea de grosella', RED_)
        k = ValueTracker(0)
        def gut():
            x_in = -1.0 + 2.6 * k.get_value()
            outer = VGroup(Line([-6, 0.8, 0], [6, 0.8, 0], color='#E8A0A0', stroke_width=8), Line([-6, -0.8, 0], [6, -0.8, 0], color='#E8A0A0', stroke_width=8))
            inner = VGroup(Line([-6, 0.45, 0], [x_in, 0.45, 0], color=RED_, stroke_width=7), Line([-6, -0.45, 0], [x_in, -0.45, 0], color=RED_, stroke_width=7),
                           Arc(radius=0.45, start_angle=-PI / 2, angle=PI, arc_center=[x_in, 0, 0], color=RED_, stroke_width=7))
            return VGroup(outer, inner)
        g = always_redraw(gut)
        self.add(g, T('íleon', 20, RED_, True).move_to([-4.5, 0, 0]), T('colon', 20, '#E8A0A0', True).move_to([4.5, 1.2, 0]))
        self.play(k.animate.set_value(1), run_time=3.5)
        rings = VGroup(*[Circle(radius=r, stroke_color=c, stroke_width=5) for r, c in ((1.1, '#E8A0A0'), (0.75, RED_), (0.4, '#E8A0A0'))]).move_to(DOWN * 2.6 + RIGHT * 3.6)
        self.play(FadeIn(rings), FadeIn(T('en la ecografía: diana', 20, AMBER).next_to(rings, LEFT, buff=0.3)), run_time=1)
        self.add(tag('Lactante de 6 meses a 2 años', RED_, 20).move_to(DOWN * 2.6 + LEFT * 3.2))
        self.wait(1.4)


# ------------------------------------------------------------------ piel (infecto-04, infecto-20)
def skin_layers(y0=0.8):
    layers = [('Epidermis', 0.5, '#E8C4A8'), ('Dermis', 1.1, '#D9A189'), ('Hipodermis', 1.1, '#E9D58F'), ('Fascia', 0.25, '#BFC7D5'), ('Músculo', 1.0, '#B5524B')]
    g = VGroup(); y = y0
    for n, h, c in layers:
        r = Rectangle(width=8.0, height=h, fill_color=c, fill_opacity=0.85, stroke_width=0).move_to([-1.6, y - h / 2, 0])
        g.add(VGroup(r, T(n, 18, BG, True).move_to(r.get_left() + RIGHT * 0.9)))
        y -= h
    return g


class Infecto20Profundidad(Scene):
    def construct(self):
        title(self, 'La profundidad decide el cuadro', 'Del impétigo superficial a la fascitis que corre por la fascia', RED_)
        L = skin_layers()
        self.add(L)
        levels = [('Impétigo', 'epidermis superficial', 0, '#C9A227'), ('Erisipela', 'dermis superficial: borde nítido', 1, RED_),
                  ('Celulitis', 'dermis profunda: borde difuso', 2, AMBER), ('Fascitis necrotizante', 'la fascia: dolor desproporcionado', 3, VIOLET)]
        prev = VGroup()
        for name, desc, idx, col in levels:
            band = L[idx][0].copy().set_fill(col, 0.85).set_stroke(WHITE, 3)
            lab = VGroup(T(name, 26, col, True), T(desc, 20, INK)).arrange(DOWN, aligned_edge=LEFT).next_to(L, RIGHT, buff=0.3).shift(UP * 0.3)
            self.play(FadeOut(prev), FadeIn(band), FadeIn(lab), run_time=0.9)
            self.wait(1.0)
            prev = VGroup(band, lab)
        self.wait(1.0)


class Infecto04Fascitis(Scene):
    def construct(self):
        title(self, 'Fascitis necrotizante', 'La infección corre por la fascia bajo una piel que todavía se ve casi sana', RED_)
        L = skin_layers()
        self.add(L)
        k = ValueTracker(0.02)
        spread = always_redraw(lambda: Rectangle(width=8.0 * k.get_value(), height=0.32, fill_color='#3A0A0A', fill_opacity=0.95, stroke_width=0)
                               .move_to(L[3][0].get_center()))
        self.add(spread)
        redness = always_redraw(lambda: Rectangle(width=max(0.05, 2.0 * k.get_value()), height=0.5, fill_color=RED_, fill_opacity=0.45, stroke_width=0).move_to(L[0][0].get_center()))
        self.add(redness)
        pain = gauge('Dolor', 0, 1, 0.2, RED_, 3.0).move_to(RIGHT * 4.5 + UP * 1.6)
        self.add(pain)
        self.play(k.animate.set_value(1), pain[1].animate.stretch_to_fit_width(2.9).align_to(pain[0], LEFT), run_time=4)
        self.add(T('piel: poco eritema', 20, INK).move_to(RIGHT * 4.5 + UP * 0.4), T('fascia: necrosis extensa', 20, '#FF6B60', True).move_to(RIGHT * 4.5 + DOWN * 0.1))
        self.play(FadeIn(tag('Pabellón urgente: desbridamiento', RED_, 20).move_to(RIGHT * 4.5 + DOWN * 1.2)), run_time=0.6)
        self.wait(1.4)


# ------------------------------------------------------------------ infecto-06
class _Neurotox(Scene):
    kind = 'rabia'

    def construct(self):
        if self.kind == 'rabia':
            title(self, 'Rabia: el virus sube por el nervio', 'De la mordedura a la médula y el cerebro: la vacuna debe llegar antes', RED_)
        else:
            title(self, 'Tétanos: la toxina quita el freno', 'Bloquea las interneuronas inhibitorias: contracción sin control', AMBER)
        nerve = VMobject(stroke_color=AMBER, stroke_width=6).set_points_smoothly([[-5.5, -2.6, 0], [-3.5, -1.8, 0], [-1.5, -0.6, 0], [0.5, 0.3, 0], [1.5, 0.9, 0]])
        cns = Circle(radius=0.8, stroke_color=VIOLET, fill_color=VIOLET, fill_opacity=0.15).move_to([2.3, 1.2, 0])
        self.add(nerve, cns, T('sistema nervioso central', 18, VIOLET).next_to(cns, RIGHT, buff=0.2), T('herida', 18, RED_).move_to([-5.5, -3.1, 0]))
        p = Dot(radius=0.14, color=RED_ if self.kind == 'rabia' else AMBER).move_to(nerve.get_start())
        self.add(p)
        self.play(MoveAlongPath(p, nerve), run_time=3, rate_func=linear)
        self.play(p.animate.move_to(cns.get_center()), cns.animate.set_fill(RED_ if self.kind == 'rabia' else AMBER, 0.4), run_time=0.8)
        if self.kind == 'rabia':
            vac = tag('Vacuna + inmunoglobulina: días 0, 3, 7, 14 y 28', GREEN_, 20).move_to(DOWN * 2.8 + RIGHT * 2.4)
            self.play(FadeIn(vac), run_time=0.6)
            self.add(T('incubación: semanas a meses', 20, MUTED).move_to(DOWN * 1.8 + RIGHT * 2.4))
        else:
            brake = tag('Freno inhibitorio (GABA, glicina)', GREEN_, 20).move_to(RIGHT * 3.6 + DOWN * 0.6)
            self.add(brake)
            self.play(brake.animate.set_opacity(0.2), FadeIn(T('✕', 40, RED_, True).next_to(brake, LEFT, buff=0.2)), run_time=0.8)
            self.add(tag('Trismus, risa sardónica, opistótonos', AMBER, 20).move_to(RIGHT * 3.4 + DOWN * 2.0))
        self.wait(1.4)


class Infecto06Rabia(_Neurotox): kind = 'rabia'
class Infecto06Tetanos(_Neurotox): kind = 'tetanos'


# ------------------------------------------------------------------ infecto-08
class Infecto08Reloj(Scene):
    def construct(self):
        title(self, 'El reloj de la incubación', 'Las horas desde la comida delatan el mecanismo', AMBER)
        ax = NumberLine(x_range=[0, 48, 6], length=11, include_numbers=False, color=MUTED).shift(DOWN * 0.3)
        self.add(ax, *[T(f'{h} h', 18, MUTED).next_to(ax.n2p(h), DOWN, buff=0.15) for h in (0, 6, 16, 24, 48)])
        groups = [(0, 6, 'Menos de 6 h', 'Toxina preformada: S. aureus, B. cereus', 'Vómitos', RED_),
                  (8, 16, '8 a 16 h', 'Toxina en el intestino: C. perfringens', 'Diarrea', AMBER),
                  (16, 48, 'Más de 16 h', 'Invasión o toxina: Salmonella, Shigella, E. coli', 'Diarrea, a veces fiebre', VIOLET)]
        for a, b, t1, t2, t3, col in groups:
            r = Rectangle(width=ax.n2p(b)[0] - ax.n2p(a)[0], height=0.5, fill_color=col, fill_opacity=0.6, stroke_width=0).move_to([(ax.n2p(a)[0] + ax.n2p(b)[0]) / 2, -0.3, 0])
            lab = VGroup(T(t1, 22, col, True), T(t2, 18, INK), T(t3, 18, MUTED)).arrange(DOWN, buff=0.06)
            lab.next_to(r, UP if col != AMBER else DOWN, buff=0.35 if col != AMBER else 0.7)
            if lab.get_left()[0] < -6.9:
                lab.shift(RIGHT * (-6.9 - lab.get_left()[0]))
            self.play(GrowFromEdge(r, LEFT), FadeIn(lab), run_time=1.2)
            self.wait(0.6)
        self.wait(1.2)


# ------------------------------------------------------------------ infecto-23
class Infecto23Zoster(Scene):
    def construct(self):
        title(self, 'Del varicela al zóster', 'El virus queda latente en el ganglio y reactiva siguiendo un dermatoma', VIOLET)
        spine = Rectangle(width=0.6, height=5.0, fill_color=GRIDC, fill_opacity=1, stroke_width=0).move_to(LEFT * 4.5 + DOWN * 0.3)
        gang = Circle(radius=0.3, fill_color=AMBER, fill_opacity=0.8, stroke_width=0).move_to(LEFT * 3.6 + UP * 0.5)
        self.add(spine, gang, T('médula', 18, MUTED).next_to(spine, DOWN, buff=0.1), T('ganglio dorsal', 18, AMBER).next_to(gang, UP, buff=0.1))
        body = Ellipse(width=4.2, height=5.2, stroke_color=MUTED, stroke_width=3).move_to(RIGHT * 2.2 + DOWN * 0.3)
        mid = DashedLine(body.get_top(), body.get_bottom(), color=GRIDC)
        self.add(body, mid, T('línea media', 16, MUTED).next_to(body.get_top(), UP, buff=0.05))
        vir = Dot(radius=0.12, color=VIOLET).move_to(gang.get_center())
        self.add(vir, T('latente por años', 18, VIOLET).next_to(gang, DOWN, buff=0.2))
        self.wait(1)
        nerve = VMobject(stroke_color=VIOLET, stroke_width=5).set_points_smoothly([gang.get_center(), [-1.5, 0.6, 0], [0.5, 0.2, 0], [1.8, -0.1, 0]])
        self.play(Create(nerve), MoveAlongPath(vir, nerve), run_time=2)
        band = VGroup(*[Dot(radius=0.11, color=RED_).move_to([x, -0.1 + 0.25 * np.sin(x * 2) + random.uniform(-0.25, 0.25), 0]) for x in np.linspace(0.3, 1.85, 11)])
        self.play(LaggedStart(*[GrowFromCenter(b) for b in band], lag_ratio=0.08), run_time=1.5)
        self.add(tag('Vesículas en una franja que no cruza la línea media', RED_, 20).move_to(DOWN * 3.2 + RIGHT * 1.2))
        self.wait(1.4)


# ------------------------------------------------------------------ nefro-01
class _Renal(Scene):
    kind = 'auto'

    def construct(self):
        cfg = {'auto': ('El riñón defiende su filtración', 'Si cae la presión, dilata la aferente (prostaglandinas) y contrae la eferente (angiotensina II)', BLUE_),
               'tres': ('Prerrenal, renal o posrenal', 'Antes, dentro o después del riñón', AMBER)}
        name, sub, col = cfg[self.kind]
        title(self, name, sub, col)
        if self.kind == 'auto':
            glom = Circle(radius=1.1, stroke_color=RED_, stroke_width=5, fill_color=RED_, fill_opacity=0.12).shift(DOWN * 0.4)
            k = ValueTracker(0)
            aff = always_redraw(lambda: Rectangle(width=3.0, height=0.45 + 0.35 * k.get_value(), fill_color=RED_, fill_opacity=0.5, stroke_width=0).next_to(glom, LEFT, buff=0))
            eff = always_redraw(lambda: Rectangle(width=3.0, height=0.6 - 0.28 * k.get_value(), fill_color=RED_, fill_opacity=0.5, stroke_width=0).next_to(glom, RIGHT, buff=0))
            self.add(aff, eff, glom, T('aferente', 18, MUTED).move_to(LEFT * 2.6 + UP * 0.6), T('eferente', 18, MUTED).move_to(RIGHT * 2.6 + UP * 0.6))
            pa = gauge('Presión arterial', 0, 1, 0.8, BLUE_, 3).move_to(LEFT * 3.5 + DOWN * 2.6)
            fg = gauge('Filtración glomerular', 0, 1, 0.8, GREEN_, 3).move_to(RIGHT * 3.5 + DOWN * 2.6)
            self.add(pa, fg)
            self.play(pa[1].animate.stretch_to_fit_width(1.2).align_to(pa[0], LEFT), fg[1].animate.stretch_to_fit_width(1.4).align_to(fg[0], LEFT), run_time=1.5)
            self.play(k.animate.set_value(1), fg[1].animate.stretch_to_fit_width(2.3).align_to(fg[0], LEFT), run_time=2)
            self.add(T('AINE bloquea la aferente · IECA bloquea la eferente', 20, AMBER, True).move_to(UP * 1.4))
        else:
            boxes = [box('Prerrenal', 'hipovolemia, falla cardíaca', BLUE_, 3.4, 1.3), box('Renal', 'necrosis tubular, nefritis', RED_, 3.4, 1.3),
                     box('Posrenal', 'obstrucción', VIOLET, 3.4, 1.3)]
            VGroup(*boxes).arrange(RIGHT, buff=0.5).shift(UP * 0.2)
            for b in boxes:
                self.play(FadeIn(b, shift=UP * 0.2), run_time=0.6)
            info = [('Sodio urinario bajo 20 · FeNa bajo 1 %', boxes[0]), ('Sodio urinario alto · cilindros granulosos', boxes[1]), ('Hidronefrosis en la ecografía', boxes[2])]
            for txt, b in info:
                self.play(FadeIn(T(txt, 18, INK).next_to(b, DOWN, buff=0.3)), run_time=0.6)
            self.add(tag('Primero descartar la obstrucción: ecografía', VIOLET, 20).move_to(DOWN * 2.8))
        self.wait(1.4)


class Nefro01Autorregulacion(_Renal): kind = 'auto'


# ------------------------------------------------------------------ nefro-07
class Nefro07Prueba(Scene):
    def construct(self):
        title(self, 'Prueba de privación de agua y desmopresina', 'Qué hace la osmolaridad urinaria separa las tres poliurias', BLUE_)
        ax, labs = axes([0, 16, 2], [0, 900, 100], x_len=10, y_len=4.2, xlabel='Horas', ylabel='Osm urinaria',
                        ticks_x=[(h, str(h)) for h in (0, 6, 12, 14)], ticks_y=[(v, str(v)) for v in (100, 300, 600, 800)])
        g = VGroup(ax, labs).shift(DOWN * 0.6 + RIGHT * 0.3)
        self.add(g, DashedLine(ax.c2p(12, 0), ax.c2p(12, 880), color=GREEN_), T('desmopresina', 18, GREEN_).next_to(ax.c2p(12, 880), UP, buff=0.05),
                 T('privación de agua', 18, MUTED).move_to(ax.c2p(6, 880)))
        pol = lambda h: 150 + 550 * min(1, h / 8) if h < 12 else 720
        cen = lambda h: 120 + 30 * min(1, h / 12) if h < 12 else 150 + 400 * min(1, (h - 12) / 2)
        nef = lambda h: 110 + 20 * min(1, h / 12) if h < 12 else 130 + 15 * min(1, (h - 12) / 2)
        draw_series(self, ax, [(pol, GREEN_, 'Polidipsia primaria', 6), (cen, BLUE_, 'DI central', 14.6), (nef, RED_, 'DI nefrogénica', 14.6)], run_time=5)
        self.wait(1.6)


# ------------------------------------------------------------------ nefro-08
class Nefro08Sueros(Scene):
    def construct(self):
        title(self, 'Dónde se queda cada suero', 'De cada litro infundido: vaso, intersticio y célula', BLUE_)
        comps = [('Vaso', 1.0, RED_), ('Intersticio', 2.8, AMBER), ('Célula', 5.6, BLUE_)]
        bars = VGroup()
        x = -4.6
        for n, w, c in comps:
            r = Rectangle(width=w, height=2.0, stroke_color=c, stroke_width=3, fill_color=c, fill_opacity=0.08).move_to([x + w / 2, 0.2, 0])
            bars.add(VGroup(r, T(n, 20, c, True).next_to(r, UP, buff=0.1)))
            x += w + 0.1
        self.add(bars)
        def fill(fr):
            return VGroup(*[Rectangle(width=bars[i][0].width * 0.98, height=max(0.02, 1.9 * f), fill_color=comps[i][2], fill_opacity=0.7, stroke_width=0)
                            .move_to(bars[i][0].get_bottom() + UP * (0.95 * f + 0.05)) for i, f in enumerate(fr)])
        cur = fill([0, 0, 0])
        self.add(cur)
        for nm, fr, txt in (('Suero fisiológico / Ringer', [0.75, 0.75, 0.0], 'Un cuarto queda en el vaso, nada entra a la célula'),
                            ('Suero glucosado al 5 %', [0.25, 0.25, 0.33], 'Es agua libre: dos tercios entran a las células')):
            lab = VGroup(T(nm, 26, INK, True), T(txt, 20, MUTED)).arrange(DOWN).move_to(DOWN * 2.4)
            new = fill(fr)
            self.play(Transform(cur, new), FadeIn(lab), run_time=1.6)
            self.wait(1.4)
            self.play(FadeOut(lab), run_time=0.3)
        self.wait(0.6)


class Nefro08Diureticos(Scene):
    def construct(self):
        title(self, 'Dónde actúa cada diurético', 'La nefrona y su segmento', AMBER)
        path = [[-5, 1.6, 0], [-3.2, 1.6, 0], [-2.6, 0.6, 0], [-2.2, -2.4, 0], [-1.6, -2.6, 0], [-1.0, -2.4, 0], [-0.6, 0.6, 0], [0.4, 1.4, 0], [2.0, 1.4, 0], [3.0, 0.2, 0], [3.0, -2.8, 0]]
        neph = VMobject(stroke_color='#E8C4A8', stroke_width=14).set_points_smoothly(path)
        glom = Circle(radius=0.45, stroke_color=RED_, fill_color=RED_, fill_opacity=0.3).move_to([-5.3, 1.6, 0])
        self.add(neph, glom)
        sites = [([-3.0, 1.3, 0], 'Túbulo proximal', 'Acetazolamida', VIOLET), ([-1.0, -1.4, 0], 'Asa de Henle', 'Furosemida: la más potente', RED_),
                 ([1.4, 1.4, 0], 'Túbulo distal', 'Tiazidas', BLUE_), ([3.0, -1.4, 0], 'Colector', 'Espironolactona, amilorida', GREEN_)]
        for p, a, b, c in sites:
            d = Dot(p, radius=0.17, color=c)
            lab = VGroup(T(a, 20, c, True), T(b, 18, INK)).arrange(DOWN, aligned_edge=LEFT)
            lab.next_to(d, RIGHT, buff=0.25)
            self.play(GrowFromCenter(d), FadeIn(lab), run_time=0.9)
            self.wait(0.5)
        self.add(T('Con filtración bajo 30, las tiazidas pierden efecto; el asa sigue funcionando', 18, AMBER).move_to(DOWN * 3.3))
        self.wait(1.4)


# ------------------------------------------------------------------ nefro-13
class Nefro13Podocito(Scene):
    def construct(self):
        title(self, 'El podocito dañado deja escapar proteínas', 'Proteinuria masiva, albúmina baja y edema', RED_)
        cap = RoundedRectangle(corner_radius=0.6, width=7, height=1.4, fill_color=RED_, fill_opacity=0.15, stroke_color=RED_).move_to(UP * 1.1)
        self.add(cap, T('capilar glomerular', 18, RED_).next_to(cap, UP, buff=0.1))
        feet = VGroup(*[RoundedRectangle(corner_radius=0.1, width=0.5, height=0.35, fill_color=GREEN_, fill_opacity=0.9, stroke_width=0).move_to([x, 0.15, 0]) for x in np.linspace(-3.2, 3.2, 12)])
        self.add(feet, T('pies de los podocitos', 18, GREEN_).next_to(feet, DOWN, buff=0.1).shift(LEFT * 2.6))
        alb = VGroup(*[Dot(radius=0.09, color=AMBER).move_to([random.uniform(-3, 3), random.uniform(0.8, 1.4), 0]) for _ in range(22)])
        self.add(alb)
        self.wait(0.6)
        self.play(*[f.animate.stretch_to_fit_width(0.18).set_fill(MUTED) for f in feet], run_time=1.2)
        self.play(LaggedStart(*[a.animate.move_to([a.get_x(), random.uniform(-1.6, -0.6), 0]) for a in alb[:16]], lag_ratio=0.05), run_time=2)
        vals = VGroup(T('Proteinuria sobre 3,5 g al día', 20, AMBER, True), T('Albúmina baja → edema', 20, INK), T('Colesterol alto y riesgo de trombosis', 20, MUTED)).arrange(DOWN, aligned_edge=LEFT).move_to(DOWN * 2.7)
        self.play(FadeIn(vals), run_time=0.8)
        self.wait(1.4)


# ------------------------------------------------------------------ neuro-01
class Neuro01Penumbra(Scene):
    def construct(self):
        title(self, 'Tiempo es cerebro', 'El núcleo del infarto crece y se come la penumbra que todavía se puede salvar', RED_)
        brain = Ellipse(width=6.0, height=4.6, stroke_color=MUTED, stroke_width=3, fill_color='#1A1D24', fill_opacity=1).shift(LEFT * 1.2 + DOWN * 0.4)
        self.add(brain)
        k = ValueTracker(0)
        pen = always_redraw(lambda: Circle(radius=1.6, fill_color=AMBER, fill_opacity=0.35 * (1 - 0.7 * k.get_value()), stroke_width=0).move_to(brain.get_center() + RIGHT * 0.6))
        core = always_redraw(lambda: Circle(radius=0.4 + 1.15 * k.get_value(), fill_color=RED_, fill_opacity=0.85, stroke_width=0).move_to(brain.get_center() + RIGHT * 0.6))
        self.add(pen, core, T('penumbra: salvable', 20, AMBER, True).move_to(RIGHT * 4.0 + UP * 1.0), T('núcleo: muerto', 20, RED_, True).move_to(RIGHT * 4.0 + UP * 0.4))
        clock = always_redraw(lambda: T(f'{4.5 * k.get_value():.1f} h'.replace('.', ','), 34, INK, True).move_to(RIGHT * 4.0 + DOWN * 0.6))
        self.add(clock)
        self.play(k.animate.set_value(1), run_time=5, rate_func=linear)
        self.add(tag('Trombólisis hasta 4,5 h · trombectomía hasta 24 h si hay penumbra', GREEN_, 20).move_to(DOWN * 3.2))
        self.wait(1.4)


# ------------------------------------------------------------------ neuro-04
class Neuro04Aneurisma(Scene):
    def construct(self):
        title(self, 'Hemorragia subaracnoidea', 'Un aneurisma del polígono de Willis se rompe y llena las cisternas', RED_)
        circ = Circle(radius=1.4, stroke_color=RED_, stroke_width=6).shift(DOWN * 0.3)
        branches = VGroup(*[Line(circ.point_at_angle(a), circ.point_at_angle(a) + 1.1 * np.array([np.cos(a), np.sin(a), 0]), color=RED_, stroke_width=5) for a in (PI / 2.6, PI - PI / 2.6, PI * 1.1, -PI * 0.1, -PI / 2)])
        self.add(circ, branches, T('polígono de Willis', 18, MUTED).next_to(circ, DOWN, buff=1.3))
        an = Circle(radius=0.12, fill_color=RED_, fill_opacity=1, stroke_width=0).move_to(circ.point_at_angle(PI / 2.2) + UP * 0.05)
        self.add(an, T('aneurisma (comunicante anterior)', 18, AMBER).next_to(an, UP, buff=0.4))
        self.play(an.animate.scale(2.6), run_time=1.5)
        self.play(Flash(an, color=RED_, flash_radius=0.6), run_time=0.6)
        blood = VGroup(*[Circle(radius=r, fill_color=RED_, fill_opacity=0.25, stroke_width=0).move_to(circ.get_center()) for r in (0.5, 1.0, 1.5, 1.9)])
        self.play(LaggedStart(*[GrowFromCenter(b) for b in blood], lag_ratio=0.25), run_time=2)
        self.add(VGroup(T('Cefalea en trueno', 24, RED_, True), T('TC sin contraste; si es normal,', 20, INK), T('punción lumbar', 20, INK)).arrange(DOWN, aligned_edge=LEFT).to_edge(RIGHT, buff=0.4).shift(DOWN * 0.3))
        self.wait(1.4)


# ------------------------------------------------------------------ neuro-08
class Neuro08Propagacion(Scene):
    def construct(self):
        title(self, 'Crisis focal que se generaliza', 'Empieza en un foco y se propaga a ambos hemisferios', VIOLET)
        L = Ellipse(width=3.2, height=4.2, stroke_color=MUTED, fill_color='#1A1D24', fill_opacity=1).shift(LEFT * 1.8 + DOWN * 0.4)
        R = Ellipse(width=3.2, height=4.2, stroke_color=MUTED, fill_color='#1A1D24', fill_opacity=1).shift(RIGHT * 1.8 + DOWN * 0.4)
        self.add(L, R, T('hemisferio izquierdo', 18, MUTED).next_to(L, DOWN, buff=0.1), T('hemisferio derecho', 18, MUTED).next_to(R, DOWN, buff=0.1))
        focus = L.get_center() + LEFT * 0.6 + UP * 0.8
        k = ValueTracker(0.05)
        wave = always_redraw(lambda: Intersection(Circle(radius=0.2 + 3.2 * k.get_value()).move_to(focus), Union(L, R), fill_color=VIOLET, fill_opacity=0.55, stroke_width=0))
        self.add(wave, Dot(focus, radius=0.12, color=WHITE))
        lab = T('Focal: síntomas de un área (sacudida de una mano)', 22, VIOLET, True).move_to(DOWN * 3.2)
        self.add(lab)
        self.play(k.animate.set_value(0.32), run_time=1.6)
        self.play(Transform(lab, T('Se extiende por el hemisferio', 22, VIOLET, True).move_to(lab)), k.animate.set_value(0.6), run_time=1.6)
        self.play(Transform(lab, T('Bilateral tónico-clónica: pérdida de conciencia', 22, RED_, True).move_to(lab)), k.animate.set_value(1.6), run_time=2)
        self.wait(1.4)


# ------------------------------------------------------------------ neuro-09
class Neuro09Estatus(Scene):
    def construct(self):
        title(self, 'Estatus epiléptico: el reloj manda', 'A los 5 minutos se trata; a los 30 empieza el daño', RED_)
        ax = NumberLine(x_range=[0, 40, 5], length=11, include_numbers=False, color=MUTED).shift(DOWN * 0.2)
        self.add(ax, *[T(f'{m} min', 18, MUTED).next_to(ax.n2p(m), DOWN, buff=0.15) for m in (0, 5, 10, 20, 30, 40)])
        steps = [(0, 5, 'Vía aérea, oxígeno, glicemia', MUTED), (5, 10, 'Benzodiacepina: lorazepam EV o midazolam IM', AMBER),
                 (10, 20, 'Segunda benzodiacepina, luego levetiracetam, valproato o fenitoína EV', BLUE_), (20, 40, 'Refractario: coma inducido en UCI', RED_)]
        for i, (a, b, txt, col) in enumerate(steps):
            r = Rectangle(width=ax.n2p(b)[0] - ax.n2p(a)[0], height=0.45, fill_color=col, fill_opacity=0.6, stroke_width=0).move_to([(ax.n2p(a)[0] + ax.n2p(b)[0]) / 2, -0.2, 0])
            lab = T(txt, 19, col, True)
            lab.move_to([(ax.n2p(a)[0] + ax.n2p(b)[0]) / 2, 0.6 + 0.5 * i, 0])
            if lab.get_right()[0] > 6.8:
                lab.shift(LEFT * (lab.get_right()[0] - 6.8))
            if lab.get_left()[0] < -6.8:
                lab.shift(RIGHT * (-6.8 - lab.get_left()[0]))
            self.play(GrowFromEdge(r, LEFT), FadeIn(lab), run_time=1.0)
            self.wait(0.6)
        for m, c in ((5, AMBER), (30, RED_)):
            self.play(Flash(ax.n2p(m), color=c, flash_radius=0.5), run_time=0.5)
        self.add(T('t1 = 5 min: iniciar tratamiento   ·   t2 = 30 min: daño neuronal', 20, INK).move_to(DOWN * 1.6))
        self.wait(1.4)


# ------------------------------------------------------------------ neuro-11
class Neuro11Nigra(Scene):
    def construct(self):
        title(self, 'Parkinson: falta dopamina en el estriado', 'Se pierden las neuronas de la sustancia nigra; la levodopa repone la dopamina', VIOLET)
        nigra = Ellipse(width=2.0, height=0.8, fill_color='#2A2A2A', fill_opacity=1, stroke_color=MUTED).move_to(LEFT * 3 + DOWN * 1.8)
        stri = Ellipse(width=2.6, height=1.6, fill_color=BLUE_, fill_opacity=0.15, stroke_color=BLUE_).move_to(RIGHT * 2 + UP * 1.0)
        self.add(nigra, stri, T('sustancia nigra', 18, MUTED).next_to(nigra, DOWN, buff=0.1), T('estriado', 18, BLUE_).next_to(stri, UP, buff=0.1))
        neurons = VGroup(*[Dot(nigra.get_center() + [x, 0, 0], radius=0.11, color='#B0B0B0') for x in np.linspace(-0.7, 0.7, 6)])
        self.add(neurons)
        path = Line(nigra.get_top(), stri.get_left(), color=MUTED, stroke_width=3)
        self.add(path)
        da = lambda: VGroup(*[Dot(radius=0.07, color=AMBER) for _ in range(6)])
        d = da().arrange(RIGHT, buff=0.1).move_to(nigra.get_top())
        self.play(d.animate.move_to(stri.get_center()), run_time=1.4)
        mov = gauge('Movimiento', 0, 1, 0.85, GREEN_, 3).move_to(RIGHT * 4.3 + DOWN * 1.6)
        self.add(mov)
        self.play(FadeOut(d), *[n.animate.set_opacity(0.1) for n in neurons[:4]], mov[1].animate.stretch_to_fit_width(1.0).align_to(mov[0], LEFT).set_color(RED_), run_time=2)
        self.add(T('pérdida de 50 a 70 % antes de los síntomas', 18, RED_).next_to(nigra, UP, buff=0.4))
        ld = tag('Levodopa', GREEN_, 22).move_to(LEFT * 3 + UP * 1.8)
        self.play(FadeIn(ld), run_time=0.4)
        d2 = da().arrange(RIGHT, buff=0.1).move_to(ld.get_center())
        self.play(d2.animate.move_to(stri.get_center()), mov[1].animate.stretch_to_fit_width(2.4).align_to(mov[0], LEFT).set_color(GREEN_), run_time=1.6)
        self.wait(1.4)


# ------------------------------------------------------------------ neuro-16
class Neuro16Guillain(Scene):
    def construct(self):
        title(self, 'Guillain-Barré: debilidad que sube', 'Desmielinización ascendente; la capacidad vital avisa la falla respiratoria', RED_)
        body = VGroup(Circle(radius=0.45, stroke_color=MUTED).move_to(LEFT * 3.5 + UP * 2.2),
                      Line(LEFT * 3.5 + UP * 1.7, LEFT * 3.5 + DOWN * 0.6, color=MUTED, stroke_width=6),
                      Line(LEFT * 3.5 + UP * 1.2, LEFT * 4.6 + UP * 0.0, color=MUTED, stroke_width=6), Line(LEFT * 3.5 + UP * 1.2, LEFT * 2.4 + UP * 0.0, color=MUTED, stroke_width=6),
                      Line(LEFT * 3.5 + DOWN * 0.6, LEFT * 4.2 + DOWN * 2.8, color=MUTED, stroke_width=6), Line(LEFT * 3.5 + DOWN * 0.6, LEFT * 2.8 + DOWN * 2.8, color=MUTED, stroke_width=6))
        self.add(body)
        k = ValueTracker(0)
        level = always_redraw(lambda: Rectangle(width=3.0, height=max(0.01, 5.4 * k.get_value()), fill_color=RED_, fill_opacity=0.25, stroke_width=0)
                              .move_to(LEFT * 3.5 + DOWN * 2.9, aligned_edge=DOWN))
        self.add(level)
        ax, labs = axes([0, 4, 1], [0, 70, 10], x_len=5, y_len=3.4, xlabel='Semanas', ylabel='CVF mL/kg', ticks_y=[(v, str(v)) for v in (15, 20, 60)])
        g = VGroup(ax, labs).shift(RIGHT * 2.8 + DOWN * 0.4)
        self.add(g, DashedLine(ax.c2p(0, 20), ax.c2p(4, 20), color=AMBER), DashedLine(ax.c2p(0, 15), ax.c2p(4, 15), color=RED_))
        cvf = ax.plot(lambda w: 62 - 50 * smooth_bump(min(w, 2.0), 0, 4) * 1.0 if w < 2 else 12 + 0 * w, x_range=[0, 4, 0.03], color=AMBER, stroke_width=5)
        self.play(k.animate.set_value(0.85), Create(cvf), run_time=4, rate_func=linear)
        self.add(tag('CVF bajo 20: UCI · bajo 15: intubar', RED_, 20).move_to(RIGHT * 2.8 + DOWN * 2.9))
        self.wait(1.4)
