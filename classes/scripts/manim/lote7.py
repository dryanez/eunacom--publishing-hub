"""Lote 7 (★★★): obstetricia, oftalmología, pediatría, respiratorio, salud pública, piel, cirugía."""
import sys, os
sys.path.insert(0, os.path.dirname(__file__))
from estilo import *
from lote2 import gauge, rbc
from lote3 import plateau, smooth_bump, draw_series
from lote6 import skin_layers
import random


# ------------------------------------------------------------------ cirugia-12
class _Hematoma(Scene):
    kind = 'epidural'

    def construct(self):
        if self.kind == 'epidural':
            title(self, 'Hematoma epidural', 'Arteria meníngea media: crece rápido, forma de lente, intervalo lúcido', RED_)
        else:
            title(self, 'Hematoma subdural', 'Venas puente: crece lento, forma de media luna, adulto mayor o alcohólico', AMBER)
        skull = Circle(radius=2.4, stroke_color=INK, stroke_width=10).shift(LEFT * 2.2 + DOWN * 0.5)
        brain = Circle(radius=2.15, fill_color='#C9A5A5', fill_opacity=0.35, stroke_width=0).move_to(skull)
        self.add(brain, skull, T('cráneo', 18, MUTED).next_to(skull, UP, buff=0.1))
        k = ValueTracker(0.02)
        c = skull.get_center()
        if self.kind == 'epidural':
            shape = always_redraw(lambda: Intersection(Circle(radius=2.35).move_to(c), Ellipse(width=1.6 * k.get_value() + 0.05, height=3.0 * k.get_value() + 0.05).move_to(c + LEFT * 2.35),
                                                       fill_color='#7B1010', fill_opacity=0.95, stroke_width=0))
        else:
            shape = always_redraw(lambda: Difference(Circle(radius=2.35).move_to(c), Circle(radius=2.35 - 0.55 * k.get_value() - 0.02).move_to(c + RIGHT * 0.25 * k.get_value()),
                                                     fill_color='#7B1010', fill_opacity=0.9, stroke_width=0).set_clip_path if False else
                                  Intersection(Difference(Circle(radius=2.35).move_to(c), Circle(radius=2.35 - 0.55 * k.get_value() - 0.02).move_to(c + RIGHT * 0.25 * k.get_value())),
                                               Rectangle(width=2.6, height=4.8).move_to(c + LEFT * 1.3), fill_color='#7B1010', fill_opacity=0.9, stroke_width=0))
        self.add(shape)
        ax, labs = axes([0, 6, 1], [0, 15, 3], x_len=4.6, y_len=3.0, xlabel='horas' if self.kind == 'epidural' else 'días', ylabel='Glasgow',
                        ticks_y=[(v, str(v)) for v in (3, 8, 15)])
        g = VGroup(ax, labs).shift(RIGHT * 3.6 + DOWN * 0.3)
        self.add(g)
        if self.kind == 'epidural':
            gcs = lambda h: 15 - 5 * smooth_bump(h, 0, 1.4) if h < 3 else max(4, 15 - 11 * min(1, (h - 3) / 2))
            self.play(k.animate.set_value(1), Create(ax.plot(gcs, x_range=[0, 6, 0.03], color=RED_, stroke_width=5)), run_time=4, rate_func=linear)
            self.add(T('intervalo lúcido', 18, GREEN_).move_to(ax.c2p(2.2, 16.5)))
        else:
            gcs = lambda d: 15 - 7 * min(1, d / 6) ** 1.5
            self.play(k.animate.set_value(1), Create(ax.plot(gcs, x_range=[0, 6, 0.03], color=AMBER, stroke_width=5)), run_time=4, rate_func=linear)
        self.wait(1.4)


class Cirugia12Epidural(_Hematoma): kind = 'epidural'
class Cirugia12Subdural(_Hematoma): kind = 'subdural'


# ------------------------------------------------------------------ piel (derma-01/11/13)
class Derma01Capas(Scene):
    def construct(self):
        title(self, 'Dónde está cada lesión', 'La profundidad y el contenido definen el nombre', AMBER)
        L = skin_layers(1.2)
        self.add(L[0], L[1], L[2])
        x = [-4.6, -2.9, -1.2, 0.5, 2.0]
        top = L[0][0].get_top()[1]
        items = []
        mac = Rectangle(width=1.0, height=0.12, fill_color='#6D4C41', fill_opacity=1, stroke_width=0).move_to([x[0], top - 0.1, 0]); items.append((mac, 'Mácula', 'plana, cambio de color'))
        pap = Arc(radius=0.5, start_angle=0, angle=PI, fill_color='#D9A189', fill_opacity=1, stroke_color='#D9A189').move_to([x[1], top + 0.25, 0]); items.append((pap, 'Pápula', 'sólida, menor de 1 cm'))
        ves = Arc(radius=0.35, start_angle=0, angle=PI, fill_color='#BFE3F2', fill_opacity=0.9, stroke_color=WHITE).move_to([x[2], top + 0.17, 0]); items.append((ves, 'Vesícula', 'líquido, menor de 0,5 cm'))
        amp = Arc(radius=0.75, start_angle=0, angle=PI, fill_color='#BFE3F2', fill_opacity=0.9, stroke_color=WHITE).move_to([x[3], top + 0.37, 0]); items.append((amp, 'Ampolla', 'líquido, mayor de 0,5 cm'))
        pus = Arc(radius=0.35, start_angle=0, angle=PI, fill_color='#F2D16B', fill_opacity=0.95, stroke_color=WHITE).move_to([x[4], top + 0.17, 0]); items.append((pus, 'Pústula', 'contenido purulento'))
        for m, a, b in items:
            lab = VGroup(T(a, 20, INK, True), T(b, 15, MUTED)).arrange(DOWN, buff=0.05).next_to(m, UP, buff=0.25)
            self.play(FadeIn(m, scale=0.6), FadeIn(lab), run_time=0.8)
            self.wait(0.3)
        self.wait(1.4)


class Derma11Ampollas(Scene):
    def construct(self):
        title(self, 'Pénfigo o penfigoide: dónde se separa la piel', 'Intraepidérmica es flácida; subepidérmica es tensa', VIOLET)
        for side, (name, sub, col, split) in enumerate((('Pénfigo vulgar', 'acantólisis: ampolla flácida, compromete mucosas', RED_, 'intra'),
                                                       ('Penfigoide ampolloso', 'bajo la epidermis: ampolla tensa, adulto mayor', BLUE_, 'sub'))):
            cx = -3.4 + side * 6.8
            epi = Rectangle(width=5.0, height=0.7, fill_color='#E8C4A8', fill_opacity=0.9, stroke_width=0).move_to([cx, 0.3, 0])
            der = Rectangle(width=5.0, height=1.4, fill_color='#D9A189', fill_opacity=0.9, stroke_width=0).next_to(epi, DOWN, buff=0)
            self.add(epi, der, T('epidermis', 15, BG, True).move_to(epi.get_left() + RIGHT * 0.65), T('dermis', 15, BG, True).move_to(der.get_left() + RIGHT * 0.5))
            k = ValueTracker(0.01)
            if split == 'intra':
                bl = always_redraw(lambda c=cx, epi=epi: Ellipse(width=2.4, height=0.05 + 0.5 * k.get_value(), fill_color='#BFE3F2', fill_opacity=0.9, stroke_width=0).move_to([c, epi.get_center()[1], 0]))
            else:
                bl = always_redraw(lambda c=cx, epi=epi: Ellipse(width=2.4, height=0.05 + 1.2 * k.get_value(), fill_color='#BFE3F2', fill_opacity=0.9, stroke_width=0).move_to([c, epi.get_bottom()[1], 0]))
            self.add(bl, VGroup(T(name, 22, col, True), T(sub, 16, INK)).arrange(DOWN).move_to([cx, -2.4, 0]))
            self.play(k.animate.set_value(1), run_time=1.8)
        self.add(T('Nikolsky positivo en el pénfigo', 20, AMBER).move_to(UP * 1.9))
        self.wait(1.5)


class Derma13Breslow(Scene):
    def construct(self):
        title(self, 'Melanoma: crecimiento radial y vertical', 'El Breslow mide cuán profundo llegó: decide el margen y el ganglio centinela', RED_)
        L = skin_layers(1.2)
        self.add(L[0], L[1], L[2])
        top = L[0][0].get_top()[1]
        k = ValueTracker(0.01)
        rad = always_redraw(lambda: Rectangle(width=0.6 + 3.4 * min(1, k.get_value() * 2), height=0.18, fill_color='#2B1B17', fill_opacity=1, stroke_width=0).move_to([-1.6, top - 0.12, 0]))
        vert = always_redraw(lambda: Polygon([-2.4, top - 0.2, 0], [-0.8, top - 0.2, 0], [-1.3, top - 0.2 - 2.0 * max(0, k.get_value() - 0.5) * 2, 0], [-1.9, top - 0.2 - 2.0 * max(0, k.get_value() - 0.5) * 2, 0],
                                             fill_color='#2B1B17', fill_opacity=1, stroke_width=0))
        self.add(rad, vert)
        lab = T('Fase radial: se extiende en superficie', 22, AMBER, True).move_to(RIGHT * 4.6 + UP * 0.6)
        self.add(lab)
        self.play(k.animate.set_value(0.5), run_time=2)
        self.play(Transform(lab, T('Fase vertical: invade la dermis', 22, RED_, True).move_to(lab)), k.animate.set_value(1), run_time=2.5)
        depth = DoubleArrow([0.2, top, 0], [0.2, top - 2.2, 0], buff=0, color=WHITE, stroke_width=3)
        self.play(GrowFromCenter(depth), FadeIn(T('Breslow', 20, INK, True).next_to(depth, RIGHT, buff=0.1)), run_time=0.8)
        self.wait(1.4)


# ------------------------------------------------------------------ gin-13
class Gin13Vph(Scene):
    def construct(self):
        title(self, 'Del VPH al cáncer cervicouterino', 'En la zona de transformación, años de infección persistente', VIOLET)
        stages = [('Infección por VPH', 'la mayoría se elimina en 1 a 2 años', GREEN_), ('LSIL (NIE 1)', 'lesión de bajo grado: suele regresar', AMBER),
                  ('HSIL (NIE 2 y 3)', 'alto grado: se trata con conización', '#FF8A3D'), ('Cáncer invasor', 'atraviesa la membrana basal', RED_)]
        epi = VGroup(*[Rectangle(width=2.6, height=1.6, fill_color='#E8C4A8', fill_opacity=0.25, stroke_color=MUTED) for _ in range(4)]).arrange(RIGHT, buff=0.35).shift(UP * 0.2)
        self.add(epi)
        for i, (a, b, col) in enumerate(stages):
            frac = (0.15, 0.35, 0.85, 1.0)[i]
            fill = Rectangle(width=2.6, height=1.6 * frac, fill_color=col, fill_opacity=0.6, stroke_width=0).move_to(epi[i].get_bottom(), aligned_edge=DOWN)
            extra = VGroup()
            if i == 3:
                extra = Polygon(epi[i].get_bottom() + LEFT * 0.6, epi[i].get_bottom() + RIGHT * 0.6, epi[i].get_bottom() + DOWN * 0.8, fill_color=col, fill_opacity=0.8, stroke_width=0)
            lab = VGroup(T(a, 19, col, True), T(b, 14, INK)).arrange(DOWN, buff=0.06).next_to(epi[i], DOWN, buff=0.35 if i < 3 else 0.95)
            self.play(GrowFromEdge(fill, DOWN), FadeIn(extra), FadeIn(lab), run_time=1.0)
            self.wait(0.4)
        self.add(T('membrana basal', 16, MUTED).next_to(epi, LEFT, buff=0.1).shift(DOWN * 0.8))
        self.add(tag('El PAP detecta las lesiones antes del cáncer', VIOLET, 20).move_to(UP * 2.0))
        self.wait(1.4)


# ------------------------------------------------------------------ ob-03
class Ob03Reactivo(Scene):
    def construct(self):
        title(self, 'Registro basal reactivo', 'Cuando el feto se mueve, la frecuencia sube 15 latidos por 15 segundos', GREEN_)
        ax, labs = axes([0, 20, 2], [100, 180, 20], x_len=10.5, y_len=4.0, xlabel='minutos', ticks_y=[(v, str(v)) for v in (110, 140, 160)])
        g = VGroup(ax, labs).shift(DOWN * 0.5)
        self.add(g)
        band = Rectangle(width=10.5, height=ax.c2p(0, 160)[1] - ax.c2p(0, 110)[1], fill_color=GREEN_, fill_opacity=0.06, stroke_width=0).move_to(
            [ax.c2p(10, 0)[0], (ax.c2p(0, 160)[1] + ax.c2p(0, 110)[1]) / 2, 0])
        self.add(band)
        random.seed(3)
        kn = [random.uniform(-6, 6) for _ in range(250)]
        accs = [4, 11, 16.5]
        f = lambda m: 138 + kn[int(m * 12)] * 0.8 + sum(22 * plateau(m, a, a + 0.4, a + 0.9, a + 1.4) for a in accs)
        self.play(Create(ax.plot(f, x_range=[0, 19.9, 0.03], color=INK, stroke_width=3)), run_time=5, rate_func=linear)
        for a in accs:
            self.add(T('▲', 22, AMBER).move_to(ax.c2p(a + 0.6, 104)))
        self.add(T('▲ = movimiento fetal', 18, AMBER).move_to(ax.c2p(17, 172)))
        self.play(FadeIn(tag('Dos o más aceleraciones en 20 minutos: reactivo', GREEN_, 20).move_to(DOWN * 3.2)), run_time=0.6)
        self.wait(1.4)


# ------------------------------------------------------------------ ob-04
class Ob04Redistribucion(Scene):
    def construct(self):
        title(self, 'Restricción de crecimiento: el feto protege su cerebro', 'Sube la resistencia en la umbilical y baja en la cerebral media', RED_)
        ax1, l1 = axes([0, 3, 1], [0, 1, 0.2], x_len=4.6, y_len=2.2)
        ax2, l2 = axes([0, 3, 1], [0, 1, 0.2], x_len=4.6, y_len=2.2)
        VGroup(VGroup(ax1, l1), VGroup(ax2, l2)).arrange(RIGHT, buff=1.2).shift(UP * 0.1)
        self.add(ax1, ax2, T('Arteria umbilical', 22, AMBER, True).next_to(ax1, UP, buff=0.15), T('Arteria cerebral media', 22, BLUE_, True).next_to(ax2, UP, buff=0.15))
        k = ValueTracker(0)
        def wave(dia_rest, sys=0.9):
            def f(t):
                u = t % 1
                return sys * np.exp(-((u - 0.15) / 0.08) ** 2) + max(dia_rest, 0) * (1 - u) * 0.9 + 0.02 if True else 0
            return f
        um = always_redraw(lambda: ax1.plot(lambda t: (0.9 * np.exp(-(((t % 1) - 0.15) / 0.08) ** 2)) + (0.45 - 0.55 * k.get_value()) * (1 - (t % 1)) * 0.9 + 0.05,
                                            x_range=[0, 3, 0.01], color=AMBER, stroke_width=4))
        cm = always_redraw(lambda: ax2.plot(lambda t: (0.9 * np.exp(-(((t % 1) - 0.15) / 0.08) ** 2)) + (0.08 + 0.4 * k.get_value()) * (1 - (t % 1)) * 0.9 + 0.05,
                                            x_range=[0, 3, 0.01], color=BLUE_, stroke_width=4))
        self.add(um, cm, DashedLine(ax1.c2p(0, 0.05), ax1.c2p(3, 0.05), color=GRIDC))
        lab = T('Feto normal', 24, GREEN_, True).move_to(DOWN * 2.4)
        self.add(lab)
        self.wait(1)
        self.play(k.animate.set_value(1), Transform(lab, T('Diástole umbilical ausente o reversa · cerebral con más flujo', 22, RED_, True).move_to(lab)), run_time=3.5)
        self.add(T('cuanto peor el Doppler, antes se interrumpe', 18, MUTED).move_to(DOWN * 3.0))
        self.wait(1.4)


# ------------------------------------------------------------------ ob-05
class Ob05Placentacion(Scene):
    def construct(self):
        title(self, 'Preeclampsia: la placenta que no se implantó bien', 'Las arterias espirales no se remodelan: placenta isquémica y daño endotelial', RED_)
        for side, (name, col, wide) in enumerate((('Embarazo normal', GREEN_, True), ('Preeclampsia', RED_, False))):
            cx = -3.4 + side * 6.8
            myo = Rectangle(width=4.6, height=2.6, fill_color='#B5524B', fill_opacity=0.35, stroke_width=0).move_to([cx, -0.8, 0])
            plac = Rectangle(width=4.6, height=0.8, fill_color=VIOLET, fill_opacity=0.45, stroke_width=0).next_to(myo, UP, buff=0)
            self.add(myo, plac, T(name, 24, col, True).next_to(plac, UP, buff=0.2), T('miometrio', 15, MUTED).move_to(myo.get_bottom() + UP * 0.25))
            arts = VGroup()
            for x in (-1.3, 0, 1.3):
                w = 0.55 if wide else 0.14
                pts = [[cx + x + 0.15 * np.sin(i), -2.0 + i * 0.25, 0] for i in range(10)]
                arts.add(VMobject(stroke_color=RED_, stroke_width=4).set_points_smoothly(pts))
            self.play(Create(arts), run_time=1)
            self.play(*[a.animate.set_stroke(width=16 if wide else 3) for a in arts], run_time=1.2)
            self.add(T('arterias anchas, baja resistencia' if wide else 'arterias estrechas, alta resistencia', 17, col).move_to([cx, -2.6, 0]))
        self.add(tag('Hipertensión, proteinuria, daño de órganos después de las 20 semanas', RED_, 20).move_to(DOWN * 3.3))
        self.wait(1.4)


# ------------------------------------------------------------------ oftal-07
class Oftal07Excavacion(Scene):
    def construct(self):
        title(self, 'Glaucoma crónico: silencioso', 'La excavación de la papila crece y el campo se pierde desde la periferia', BLUE_)
        disc = Circle(radius=1.4, fill_color='#E8A35A', fill_opacity=0.9, stroke_width=0).shift(LEFT * 3.2 + DOWN * 0.4)
        k = ValueTracker(0)
        cup = always_redraw(lambda: Circle(radius=0.42 + 0.8 * k.get_value(), fill_color='#FFE9B8', fill_opacity=0.95, stroke_width=0).move_to(disc))
        self.add(disc, cup, T('papila', 20, AMBER).next_to(disc, DOWN, buff=0.2))
        ratio = always_redraw(lambda: T(f'excavación {0.3 + 0.55 * k.get_value():.1f}'.replace('.', ','), 22, INK, True).next_to(disc, UP, buff=0.2))
        self.add(ratio)
        field = Circle(radius=1.8, fill_color='#20304A', fill_opacity=1, stroke_color=MUTED).shift(RIGHT * 3.0 + DOWN * 0.4)
        lost = always_redraw(lambda: Difference(field.copy(), Circle(radius=max(0.05, 1.8 - 1.45 * k.get_value())).move_to(field), fill_color=BLACK, fill_opacity=0.9, stroke_width=0))
        self.add(field, lost, T('campo visual', 20, MUTED).next_to(field, DOWN, buff=0.2))
        self.play(k.animate.set_value(1), run_time=5, rate_func=linear)
        self.add(tag('Visión en túnel: el paciente lo nota tarde', BLUE_, 20).move_to(DOWN * 3.2))
        self.wait(1.4)


# ------------------------------------------------------------------ oftal-18
class Oftal18Linterna(Scene):
    def construct(self):
        title(self, 'Prueba de la linterna oscilante', 'Defecto pupilar aferente derecho (Marcus Gunn)', VIOLET)
        eyes = []
        for x in (-2.2, 2.2):
            white = Ellipse(width=3.0, height=1.6, fill_color=WHITE, fill_opacity=0.95, stroke_width=0).move_to([x, -0.2, 0])
            iris = Circle(radius=0.62, fill_color='#5D7FA3', fill_opacity=1, stroke_width=0).move_to(white)
            pup = Circle(radius=0.3, fill_color=BLACK, fill_opacity=1, stroke_width=0).move_to(white)
            self.add(white, iris, pup)
            eyes.append(pup)
        self.add(T('ojo derecho (enfermo)', 20, RED_).move_to([-2.2, -1.5, 0]), T('ojo izquierdo (sano)', 20, GREEN_).move_to([2.2, -1.5, 0]))
        light = Dot(radius=0.18, color=YELLOW).move_to([2.2, 1.5, 0])
        self.add(light)
        lab = T('Luz al ojo sano: ambas pupilas se contraen', 22, GREEN_, True).move_to(DOWN * 2.6)
        self.add(lab)
        self.play(light.animate.move_to([2.2, 0.9, 0]), eyes[0].animate.scale(0.55), eyes[1].animate.scale(0.55), run_time=1.2)
        self.wait(0.6)
        self.play(light.animate.move_to([-2.2, 0.9, 0]), Transform(lab, T('Luz al ojo enfermo: ambas se dilatan', 22, RED_, True).move_to(lab)), run_time=1.0)
        self.play(eyes[0].animate.scale(1.9), eyes[1].animate.scale(1.9), run_time=1.2)
        self.add(T('el nervio óptico derecho conduce menos luz', 18, MUTED).move_to(DOWN * 3.2))
        self.wait(1.4)


# ------------------------------------------------------------------ ped-05
class Ped05Bronquiolo(Scene):
    def construct(self):
        title(self, 'Bronquiolitis: el bronquiolo se tapa', 'Edema y moco en un conducto muy pequeño: el aire entra y no sale', BLUE_)
        k = ValueTracker(0)
        wall = always_redraw(lambda: VGroup(Line([-6, 0.7, 0], [1, 0.7, 0], color='#E8A0A0', stroke_width=8 + 18 * k.get_value()),
                                            Line([-6, -0.7, 0], [1, -0.7, 0], color='#E8A0A0', stroke_width=8 + 18 * k.get_value())))
        mucus = always_redraw(lambda: VGroup(*[Ellipse(width=0.6, height=0.9 * k.get_value() + 0.01, fill_color='#E6E3B0', fill_opacity=0.9, stroke_width=0).move_to([x, 0, 0]) for x in (-4, -2.2, -0.4)]))
        alv = always_redraw(lambda: Circle(radius=0.9 + 0.6 * k.get_value(), stroke_color=BLUE_, fill_color=BLUE_, fill_opacity=0.15).move_to([2.5, 0, 0]))
        self.add(wall, mucus, alv, T('alvéolo', 18, BLUE_).move_to([2.5, -1.9, 0]))
        lab = T('Bronquiolo normal', 22, GREEN_, True).move_to(DOWN * 2.6)
        self.add(lab)
        self.wait(0.8)
        self.play(k.animate.set_value(1), Transform(lab, T('Edema y moco: atrapamiento aéreo, sibilancias y retracciones', 22, BLUE_, True).move_to(lab)), run_time=3)
        self.add(T('virus respiratorio sincicial · menor de 2 años', 18, MUTED).move_to(DOWN * 3.2))
        self.wait(1.4)


# ------------------------------------------------------------------ ped-10
class Ped10Fiebre(Scene):
    def construct(self):
        title(self, 'Fiebre y exantema en el tiempo', 'La relación entre ambos da el diagnóstico', AMBER)
        rows = [('Exantema súbito', 'la fiebre cae y recién aparece el exantema', (0, 3), (3, 5), BLUE_),
                ('Sarampión', 'exantema en el peak de fiebre, con Koplik antes', (0, 7), (4, 8), RED_),
                ('Escarlatina', 'fiebre y exantema juntos desde el día 1 o 2', (0, 4), (1, 6), AMBER),
                ('Kawasaki', 'fiebre de 5 días o más con exantema', (0, 8), (3, 7), VIOLET)]
        x0, sc = -1.5, 0.7
        for i, (n, d, fv, ex, col) in enumerate(rows):
            y = 1.6 - i * 1.2
            self.add(T(n, 22, col, True).move_to([-4.6, y + 0.1, 0]), T(d, 14, MUTED).move_to([-4.6, y - 0.25, 0]))
            f = Rectangle(width=(fv[1] - fv[0]) * sc, height=0.22, fill_color=RED_, fill_opacity=0.7, stroke_width=0).move_to([x0 + (fv[0] + fv[1]) / 2 * sc, y + 0.15, 0])
            e = Rectangle(width=(ex[1] - ex[0]) * sc, height=0.22, fill_color=GREEN_, fill_opacity=0.7, stroke_width=0).move_to([x0 + (ex[0] + ex[1]) / 2 * sc, y - 0.15, 0])
            self.play(GrowFromEdge(f, LEFT), run_time=0.5)
            self.play(GrowFromEdge(e, LEFT), run_time=0.5)
        self.add(T('■ fiebre', 18, RED_).move_to([4.5, 2.3, 0]), T('■ exantema', 18, GREEN_).move_to([5.9, 2.3, 0]),
                 *[T(f'día {d}', 14, MUTED).move_to([x0 + d * sc, -3.0, 0]) for d in (0, 2, 4, 6, 8)])
        self.wait(1.6)


# ------------------------------------------------------------------ resp-02
class Resp02Crisis(Scene):
    def construct(self):
        title(self, 'Crisis asmática: el bronquio se cierra', 'Broncoespasmo, edema y moco; un CO₂ normal en la crisis es una alarma', RED_)
        k = ValueTracker(0)
        ring = always_redraw(lambda: Circle(radius=1.6, stroke_color='#B5524B', stroke_width=14 + 20 * k.get_value()).shift(LEFT * 3 + DOWN * 0.4))
        lumen = always_redraw(lambda: Circle(radius=max(0.15, 1.2 - 0.95 * k.get_value()), fill_color=BLUE_, fill_opacity=0.25, stroke_color=BLUE_).move_to(LEFT * 3 + DOWN * 0.4))
        self.add(ring, lumen, T('corte del bronquio', 18, MUTED).move_to(LEFT * 3 + DOWN * 2.6))
        ax, labs = axes([0, 3, 1], [20, 60, 10], x_len=4.6, y_len=3.0, xlabel='evolución de la crisis', ylabel='PaCO₂', ticks_y=[(v, str(v)) for v in (30, 40, 50)])
        g = VGroup(ax, labs).shift(RIGHT * 3.2 + DOWN * 0.4)
        self.add(g)
        co2 = lambda t: 40 - 10 * smooth_bump(t, 0, 2.0) if t < 1.0 else (30 + 12 * (t - 1)) if t < 2.5 else 48
        self.play(k.animate.set_value(1), Create(ax.plot(co2, x_range=[0, 3, 0.02], color=AMBER, stroke_width=5)), run_time=4, rate_func=linear)
        self.add(T('hiperventila: CO₂ bajo', 16, GREEN_).move_to(ax.c2p(0.9, 26)), T('se agota: CO₂ normal o alto', 16, RED_).move_to(ax.c2p(2.1, 55)))
        self.wait(1.4)


# ------------------------------------------------------------------ resp-04
class Resp04Enfisema(Scene):
    def construct(self):
        title(self, 'Enfisema: se rompen los tabiques alveolares', 'Menos superficie de intercambio y aire atrapado', AMBER)
        random.seed(4)
        cells = VGroup(*[Circle(radius=0.32, stroke_color='#E8A0A0', stroke_width=4, fill_color='#E8A0A0', fill_opacity=0.08).move_to([-4 + (i % 7) * 0.68 + (0.34 if (i // 7) % 2 else 0), 1.2 - (i // 7) * 0.62, 0]) for i in range(35)])
        self.add(cells, T('alvéolos normales', 18, MUTED).next_to(cells, DOWN, buff=0.2))
        self.wait(0.8)
        big = VGroup(*[Circle(radius=0.95, stroke_color='#E8A0A0', stroke_width=4, fill_color='#E8A0A0', fill_opacity=0.08).move_to([-3.4 + (i % 3) * 1.9, 0.6 - (i // 3) * 1.6, 0]) for i in range(6)])
        self.play(ReplacementTransform(cells, big), run_time=2.5)
        self.add(T('espacios grandes, pocos tabiques', 18, AMBER).move_to([-1.5, -2.6, 0]))
        lines = VGroup(T('Menos superficie: baja la difusión', 22, INK), T('Pierde elasticidad: atrapa aire', 22, INK), T('Pulmón hiperinsuflado', 22, AMBER, True)).arrange(DOWN, aligned_edge=LEFT).move_to(RIGHT * 4.0)
        self.play(FadeIn(lines), run_time=0.8)
        self.wait(1.4)


# ------------------------------------------------------------------ resp-11
class Resp11Light(Scene):
    def construct(self):
        title(self, 'Trasudado o exudado', 'El problema está fuera de la pleura (presiones) o en la pleura (permeabilidad)', BLUE_)
        for side, (name, sub, col, prot) in enumerate((('Trasudado', 'insuficiencia cardíaca, cirrosis', BLUE_, False), ('Exudado', 'neumonía, cáncer, tuberculosis', AMBER, True))):
            cx = -3.4 + side * 6.8
            cap = RoundedRectangle(corner_radius=0.4, width=4.4, height=0.9, fill_color=RED_, fill_opacity=0.2, stroke_color=RED_).move_to([cx, 1.0, 0])
            pleura = Rectangle(width=4.4, height=1.6, fill_color=BLUE_, fill_opacity=0.08, stroke_color=MUTED).move_to([cx, -0.6, 0])
            self.add(cap, pleura, T(name, 26, col, True).next_to(cap, UP, buff=0.2), T(sub, 16, MUTED).next_to(pleura, DOWN, buff=0.15), T('espacio pleural', 14, MUTED).move_to(pleura.get_bottom() + UP * 0.2))
            water = VGroup(*[T('H₂O', 14, BLUE_, True).move_to([cx + x, 1.0, 0]) for x in (-1.5, -0.5, 0.5, 1.5)])
            prots = VGroup(*[Dot(radius=0.08, color=AMBER).move_to([cx + x, 1.0, 0]) for x in (-1.0, 0.0, 1.0)])
            self.add(water, prots)
            anims = [w.animate.shift(DOWN * 1.5) for w in water]
            if prot:
                anims += [p.animate.shift(DOWN * 1.6) for p in prots]
            self.play(*anims, run_time=1.5)
        crit = VGroup(T('Light: basta un criterio para exudado', 20, AMBER, True), T('Proteínas pleura/suero mayor de 0,5', 18, INK),
                      T('LDH pleura/suero mayor de 0,6', 18, INK), T('LDH pleural mayor de 2/3 del límite normal', 18, INK)).arrange(DOWN, aligned_edge=LEFT).move_to(DOWN * 2.9 + RIGHT * 0.0)
        crit.scale(0.85)
        self.play(FadeIn(crit), run_time=0.8)
        self.wait(1.4)


# ------------------------------------------------------------------ resp-22
class Resp22Distres(Scene):
    def construct(self):
        title(self, 'Distrés respiratorio agudo', 'El alvéolo se inunda por permeabilidad: ventilar con volumen bajo', RED_)
        alv = Circle(radius=1.8, stroke_color='#E8A0A0', stroke_width=6, fill_color=BLUE_, fill_opacity=0.08).shift(LEFT * 3 + DOWN * 0.4)
        cap = Arc(radius=2.0, start_angle=-PI * 0.9, angle=PI * 0.8, arc_center=alv.get_center(), color=RED_, stroke_width=14)
        self.add(alv, cap, T('alvéolo', 18, MUTED).next_to(alv, UP, buff=0.1))
        k = ValueTracker(0)
        flood = always_redraw(lambda: Intersection(alv.copy(), Rectangle(width=4, height=3.6 * k.get_value() + 0.01).move_to(alv.get_bottom(), aligned_edge=DOWN),
                                                   fill_color='#F2D16B', fill_opacity=0.6, stroke_width=0))
        self.add(flood)
        self.play(k.animate.set_value(0.8), run_time=2.5)
        self.add(T('líquido rico en proteínas', 18, AMBER).move_to(alv.get_center() + DOWN * 0.8))
        rules = VGroup(T('Volumen corriente 6 mL/kg de peso ideal', 22, GREEN_, True), T('Presión meseta menor de 30', 22, INK), T('PEEP alta · prono si es grave', 22, INK)).arrange(DOWN, aligned_edge=LEFT).move_to(RIGHT * 3.4)
        self.play(FadeIn(rules), run_time=0.8)
        self.wait(1.4)


# ------------------------------------------------------------------ salud pública
class Sp06Disenos(Scene):
    def construct(self):
        title(self, 'Cohorte o casos y controles', 'La dirección en que se mira define el diseño', GREEN_)
        for side, (name, col) in enumerate((('Cohorte', GREEN_), ('Casos y controles', AMBER))):
            cx = -3.4 + side * 6.8
            self.add(T(name, 28, col, True).move_to([cx, 2.0, 0]))
            exp = box('Expuestos / no expuestos', None, BLUE_, 4.2, 0.8).move_to([cx, 0.6 if side == 0 else -1.6, 0])
            eff = box('Enfermos / sanos', None, RED_, 4.2, 0.8).move_to([cx, -1.6 if side == 0 else 0.6, 0])
            self.add(exp, eff)
            arr = Arrow(exp.get_bottom() if side == 0 else eff.get_bottom(), eff.get_top() if side == 0 else exp.get_top(), color=col, stroke_width=6, buff=0.1)
            self.play(GrowArrow(arr), run_time=1.2)
            self.add(T('parte de la exposición y sigue en el tiempo' if side == 0 else 'parte de la enfermedad y mira hacia atrás', 18, col).move_to([cx, -2.6, 0]),
                     T('mide riesgo relativo e incidencia' if side == 0 else 'mide odds ratio · ideal para enfermedades raras', 16, MUTED).move_to([cx, -3.1, 0]))
            self.wait(0.6)
        self.wait(1.4)


class Sp07Tabla(Scene):
    def construct(self):
        title(self, 'La tabla dos por dos', 'Con los mismos cuatro números se calcula riesgo, RR y NNT', BLUE_)
        a, b, c, d = 10, 90, 20, 80
        grid = VGroup()
        for i, row in enumerate(((a, b), (c, d))):
            for j, v in enumerate(row):
                sq = Square(side_length=1.3, stroke_color=MUTED).move_to([-3.6 + j * 1.3, 0.6 - i * 1.3, 0])
                grid.add(VGroup(sq, T(str(v), 28, INK, True).move_to(sq)))
        self.add(grid, T('evento', 18, RED_).move_to([-3.6, 1.55, 0]), T('sin evento', 18, MUTED).move_to([-2.3, 1.55, 0]),
                 T('tratados', 18, GREEN_).move_to([-5.3, 0.6, 0]), T('controles', 18, AMBER).move_to([-5.3, -0.7, 0]))
        steps = [('Riesgo tratados = 10 / 100 = 10 %', GREEN_), ('Riesgo controles = 20 / 100 = 20 %', AMBER), ('RR = 10 / 20 = 0,5', BLUE_),
                 ('Reducción absoluta = 20 − 10 = 10 %', VIOLET), ('NNT = 1 / 0,10 = 10 pacientes', RED_)]
        g = VGroup()
        for i, (txt, col) in enumerate(steps):
            t = T(txt, 24, col, True).move_to([2.6, 1.4 - i * 0.75, 0])
            self.play(Write(t), run_time=0.9)
            if i == 0:
                self.play(Indicate(grid[0], color=GREEN_), run_time=0.5)
            if i == 1:
                self.play(Indicate(grid[2], color=AMBER), run_time=0.5)
        self.wait(1.4)


class Sp08Prevalencia(Scene):
    def construct(self):
        title(self, 'El VPP cambia con la prevalencia', 'Misma prueba (90 % sensible y específica), distinta población', VIOLET)
        def panel(cx, prev, name):
            random.seed(1)
            dots = VGroup()
            n_sick = int(100 * prev)
            for i in range(100):
                sick = i < n_sick
                pos = (random.random() < 0.9) if sick else (random.random() < 0.1)
                col = RED_ if (sick and pos) else (AMBER if (not sick and pos) else GRIDC)
                dots.add(Dot(radius=0.11, color=col).move_to([cx - 1.8 + (i % 10) * 0.4, 1.4 - (i // 10) * 0.4, 0]))
            tp = sum(1 for i in range(n_sick)); fp = 10 if prev < 0.5 else 5
            return dots
        for side, (prev, name) in enumerate(((0.02, 'Población general: prevalencia 2 %'), (0.5, 'Consulta con síntomas: prevalencia 50 %'))):
            cx = -3.4 + side * 6.8
            dots = panel(cx, prev, name)
            self.add(T(name, 18, INK, True).move_to([cx, 2.2, 0]))
            self.play(LaggedStart(*[FadeIn(d) for d in dots], lag_ratio=0.01), run_time=1.5)
            sick = prev * 100; tp = 0.9 * sick; fp = 0.1 * (100 - sick)
            vpp = tp / (tp + fp)
            self.add(T(f'VPP ≈ {round(100 * vpp)} %', 30, RED_ if vpp < 0.5 else GREEN_, True).move_to([cx, -2.7, 0]))
        self.add(T('● verdadero positivo   ● falso positivo', 18, MUTED).move_to(DOWN * 3.4))
        self.wait(1.6)


class Sp10Adelanto(Scene):
    def construct(self):
        title(self, 'Sesgo de adelanto', 'El tamizaje adelanta el diagnóstico, pero el paciente muere el mismo día', AMBER)
        line = NumberLine(x_range=[0, 10, 1], length=10, color=MUTED, include_numbers=False).shift(UP * 0.4)
        self.add(line, T('años', 16, MUTED).next_to(line, RIGHT, buff=0.1))
        onset, scr, sym, death = 1, 3, 7, 9
        for x, t in ((onset, 'inicio biológico'), (death, 'muerte')):
            self.add(Dot(line.n2p(x), color=WHITE), T(t, 16, INK).next_to(line.n2p(x), UP, buff=0.15))
        r1 = Line(line.n2p(sym) + DOWN * 1.0, line.n2p(death) + DOWN * 1.0, color=RED_, stroke_width=10)
        r2 = Line(line.n2p(scr) + DOWN * 2.0, line.n2p(death) + DOWN * 2.0, color=GREEN_, stroke_width=10)
        self.play(Create(r1), FadeIn(T('Sin tamizaje: diagnóstico por síntomas → 2 años de sobrevida', 18, RED_).next_to(r1, LEFT, buff=0.2)), run_time=1.5)
        self.play(Create(r2), FadeIn(T('Con tamizaje → 6 años', 18, GREEN_).next_to(r2, LEFT, buff=0.2)), run_time=1.5)
        self.play(Indicate(Dot(line.n2p(death), color=RED_, radius=0.15)), run_time=0.8)
        self.add(tag('La muerte no cambió: mira la mortalidad, no la sobrevida a 5 años', AMBER, 20).move_to(DOWN * 3.2))
        self.wait(1.4)


# ------------------------------------------------------------------ cirugia-06
class Cirugia06Hernias(Scene):
    def construct(self):
        title(self, 'Hernia indirecta o directa', 'Los vasos epigástricos inferiores las separan', VIOLET)
        wall = Rectangle(width=9, height=4.4, fill_color='#B5524B', fill_opacity=0.15, stroke_color=MUTED).shift(DOWN * 0.4)
        vessels = Line([0.2, 1.6, 0], [0.2, -2.4, 0], color=RED_, stroke_width=8)
        ring = Circle(radius=0.45, stroke_color=AMBER, stroke_width=5).move_to([-1.8, 0.2, 0])
        hess = Polygon([0.5, 1.2, 0], [3.6, -2.2, 0], [0.5, -2.2, 0], stroke_color=GREEN_, stroke_width=4, fill_color=GREEN_, fill_opacity=0.12)
        self.add(wall, vessels, ring, hess, T('vasos epigástricos', 18, RED_).next_to(vessels, UP, buff=0.1), T('anillo inguinal profundo', 18, AMBER).next_to(ring, UP, buff=0.15),
                 T('triángulo de Hesselbach', 18, GREEN_).move_to([2.3, -0.4, 0]), T('lateral', 16, MUTED).move_to([-4, 1.5, 0]), T('medial', 16, MUTED).move_to([4, 1.5, 0]))
        ind = Circle(radius=0.3, fill_color=AMBER, fill_opacity=0.9, stroke_width=0).move_to(ring)
        self.play(GrowFromCenter(ind), run_time=0.6)
        self.play(ind.animate.shift(DOWN * 2.0 + RIGHT * 0.6), run_time=1.5)
        self.add(T('Indirecta: lateral a los vasos, por el anillo profundo, baja al escroto', 18, AMBER).move_to([-2.6, -2.9, 0]))
        d = Circle(radius=0.3, fill_color=GREEN_, fill_opacity=0.9, stroke_width=0).move_to([1.4, -1.2, 0])
        self.play(GrowFromCenter(d), d.animate.scale(1.5), run_time=1.2)
        self.add(T('Directa: medial, por la pared débil', 18, GREEN_).move_to([2.8, -2.9, 0]))
        self.wait(1.4)
