"""Lote 8: anatomía real. Ilustraciones Blausen (CC BY 3.0) limpias de rótulos, con movimiento y rótulos propios."""
from estilo import *

# ------------------------------------------------------------------ nefro-08: dónde actúa cada diurético
NEFRONA = dict(IMG='Nephron Anatomy.png', CROP=(0.47, 0.245, 0.94, 0.93))
# recorrido del filtrado (fracciones de la imagen original)
TUBULO = [(0.585, 0.425), (0.63, 0.40), (0.68, 0.335), (0.73, 0.31), (0.735, 0.37), (0.70, 0.43), (0.675, 0.50),
          (0.672, 0.65), (0.675, 0.80), (0.69, 0.875), (0.715, 0.82), (0.718, 0.65), (0.72, 0.50), (0.75, 0.44),
          (0.80, 0.42), (0.84, 0.40), (0.865, 0.43), (0.865, 0.60), (0.862, 0.75), (0.86, 0.88)]


class Nefro08Diureticos(BlausenScene):
    IMG, CROP = NEFRONA['IMG'], NEFRONA['CROP']

    def construct(self):
        title(self, 'Dónde actúa cada diurético', 'Un segmento de la nefrona para cada fármaco', AMBER)
        self.lamina(height=6.2, center=RIGHT * 3.0 + DOWN * 0.45)
        tub = self.path(TUBULO)
        dots, t = self.flow(tub, n=14, color=AMBER, r=0.055, run=3.0)
        items = [
            ('Acetazolamida', 'túbulo proximal', (0.71, 0.345), VIOLET, 0),
            ('Furosemida', 'asa de Henle (rama gruesa)', (0.718, 0.62), RED_, 2),
            ('Tiazidas', 'túbulo distal', (0.80, 0.42), BLUE_, 1),
            ('Espironolactona', 'túbulo colector', (0.864, 0.66), GREEN_, 3),
        ]
        for name, seg, (fx, fy), col, slot in items:
            y = 1.55 - 1.35 * slot
            p = self.P(fx, fy)
            lab = VGroup(T(name, 30, col, bold=True), T(seg, 21, MUTED)).arrange(DOWN, aligned_edge=LEFT, buff=0.08)
            lab.move_to(LEFT * 4.3 + UP * y, aligned_edge=LEFT).shift(LEFT * 0.9)
            ring = Circle(radius=0.28, color=col, stroke_width=6).move_to(p)
            glow = Dot(p, radius=0.28, color=col).set_opacity(0.35)
            ln = Line(lab.get_right() + RIGHT * 0.15, p + (lab.get_right() - p) / np.linalg.norm(lab.get_right() - p) * 0.3,
                      color=col, stroke_width=3)
            self.play(FadeIn(lab, shift=RIGHT * 0.2), Create(ln), GrowFromCenter(ring), FadeIn(glow),
                      t.animate.increment_value(0.25), run_time=1.0, rate_func=linear)
            self.play(glow.animate.scale(1.5).set_opacity(0.0), t.animate.increment_value(0.35), run_time=1.1, rate_func=linear)
        self.play(t.animate.increment_value(1), run_time=3, rate_func=linear)


# ------------------------------------------------------------------ diab-10: arteriola eferente e IECA
AFERENTE = [(0.455, 0.535), (0.48, 0.50), (0.505, 0.465), (0.535, 0.435), (0.57, 0.425)]
EFERENTE = [(0.565, 0.415), (0.535, 0.41), (0.508, 0.395), (0.495, 0.36), (0.50, 0.32), (0.525, 0.29), (0.565, 0.272),
            (0.61, 0.272), (0.65, 0.285), (0.69, 0.30)]
GLOM = (0.585, 0.43)


class Diab10Eferente(BlausenScene):
    IMG, CROP = 'Nephron Anatomy.png', (0.478, 0.25, 0.73, 0.56)

    def construct(self):
        title(self, 'La arteriola eferente', 'El IECA la dilata y baja la presión dentro del glomérulo', GREEN_)
        self.lamina(height=5.9, center=RIGHT * 2.7 + DOWN * 0.45)
        af, ef = self.path(AFERENTE), self.path(EFERENTE)
        g = self.P(*GLOM)
        la = tag('Aferente: entra', RED_, 22).move_to(self.P(0.47, 0.545) + LEFT * 2.3 + DOWN * 0.1)
        le = tag('Eferente: sale', VIOLET, 22).move_to(self.P(0.565, 0.315))
        lg = tag('Glomérulo', AMBER, 22).move_to(g + DOWN * 1.45 + RIGHT * 0.2)
        # medidor de presión glomerular
        frame = RoundedRectangle(corner_radius=0.1, width=0.55, height=2.6, stroke_color=MUTED, stroke_width=2).move_to(LEFT * 5.6 + DOWN * 1.75)
        lvl = ValueTracker(0.45)
        fill = always_redraw(lambda: Rectangle(width=0.43, height=2.46 * lvl.get_value(), fill_opacity=1, stroke_width=0,
                                               fill_color=interpolate_color(ManimColor(GREEN_), ManimColor(RED_), lvl.get_value()))
                             .align_to(frame, DOWN).shift(UP * 0.07).set_x(frame.get_x()))
        gl = VGroup(T('Presión en', 20, MUTED), T('el glomérulo', 20, MUTED)).arrange(DOWN, aligned_edge=LEFT, buff=0.05).next_to(frame, RIGHT, buff=0.25)
        glow = always_redraw(lambda: Dot(g, radius=0.45 + 0.5 * lvl.get_value(), color=RED_).set_opacity(0.15 + 0.35 * lvl.get_value()))
        self.add(glow, frame, fill, gl)
        self.play(FadeIn(la), FadeIn(le), FadeIn(lg), run_time=0.8)
        blood = VGroup()
        ta, te = ValueTracker(0), ValueTracker(0)
        speed = {'e': 1.0}
        for path, tr, n in ((af, ta, 7), (ef, te, 9)):
            for i in range(n):
                d = Dot(radius=0.07, color='#C0392B').set_stroke(WHITE, 1)
                d.add_updater(lambda m, p=path, tr=tr, i=i, n=n: m.move_to(p.point_from_proportion((tr.get_value() + i / n) % 1)))
                blood.add(d)
        self.add(blood)
        self.play(ta.animate.increment_value(1), te.animate.increment_value(1), run_time=2.5, rate_func=linear)
        # angiotensina II contrae la eferente
        pinch = self.P(0.497, 0.355)
        arr = VGroup(Arrow(pinch + LEFT * 0.75, pinch + LEFT * 0.18, buff=0, color=RED_, stroke_width=6),
                     Arrow(pinch + RIGHT * 0.75, pinch + RIGHT * 0.18, buff=0, color=RED_, stroke_width=6))
        t1 = VGroup(T('Diabetes: la angiotensina II', 24, RED_, bold=True), T('contrae la eferente', 24, RED_, bold=True),
                    T('hiperfiltración, se escapa albúmina', 20, MUTED)).arrange(DOWN, aligned_edge=LEFT, buff=0.08).to_edge(LEFT, buff=0.5).shift(UP * 0.9)
        self.play(GrowArrow(arr[0]), GrowArrow(arr[1]), FadeIn(t1), lvl.animate.set_value(0.92),
                  ta.animate.increment_value(0.6), te.animate.increment_value(0.3), run_time=2.0, rate_func=linear)
        alb = VGroup(*[Dot(g + np.array([np.cos(a), np.sin(a), 0]) * 0.2, radius=0.05, color=AMBER) for a in np.linspace(0, 2 * PI, 7)])
        self.play(*[d.animate.shift(np.array([0.9 + 0.3 * np.cos(i), -0.35 + 0.3 * np.sin(i), 0])).set_opacity(0) for i, d in enumerate(alb)],
                  ta.animate.increment_value(0.6), te.animate.increment_value(0.3), run_time=1.6, rate_func=linear)
        # IECA: la eferente se dilata
        arr2 = VGroup(Arrow(pinch + LEFT * 0.18, pinch + LEFT * 0.75, buff=0, color=GREEN_, stroke_width=6),
                      Arrow(pinch + RIGHT * 0.18, pinch + RIGHT * 0.75, buff=0, color=GREEN_, stroke_width=6))
        t2 = VGroup(T('IECA o ARA II: la eferente', 24, GREEN_, bold=True), T('se dilata', 24, GREEN_, bold=True),
                    T('baja la presión, menos albuminuria', 20, MUTED)).arrange(DOWN, aligned_edge=LEFT, buff=0.08).move_to(t1, aligned_edge=LEFT)
        self.play(ReplacementTransform(arr, arr2), FadeOut(t1), FadeIn(t2), lvl.animate.set_value(0.45),
                  ta.animate.increment_value(0.8), te.animate.increment_value(1.0), run_time=2.0, rate_func=linear)
        self.play(ta.animate.increment_value(1.2), te.animate.increment_value(1.6), run_time=3.0, rate_func=linear)


# ------------------------------------------------------------------ resp-04: enfisema y atrapamiento aéreo
class Resp04Enfisema(BlausenScene):
    IMG = 'Blausen 0343 Emphysema.png'

    def construct(self):
        title(self, 'Enfisema', 'Se rompen los tabiques: menos superficie y aire atrapado', BLUE_)
        a = self.lamina(width=6.3, center=LEFT * 3.4 + DOWN * 0.55, crop=(0.02, 0.05, 0.52, 0.35))
        b = self.lamina(width=6.3, center=RIGHT * 3.4 + DOWN * 0.55, crop=(0.02, 0.42, 0.52, 0.74), credit=False)
        la = T('Alvéolos normales', 28, GREEN_, bold=True).next_to(a, UP, buff=0.3)
        lb = T('Enfisema', 28, RED_, bold=True).next_to(b, UP, buff=0.3)
        self.play(FadeIn(la), FadeIn(lb), run_time=0.6)
        na = [(0.07, 0.20), (0.14, 0.13), (0.20, 0.20), (0.27, 0.15), (0.25, 0.26), (0.33, 0.19), (0.15, 0.26), (0.31, 0.29), (0.40, 0.16)]
        nb = [(0.10, 0.60), (0.20, 0.58), (0.28, 0.61), (0.35, 0.58), (0.22, 0.66), (0.15, 0.53), (0.30, 0.68), (0.42, 0.56), (0.12, 0.66)]
        ea, eb = self.P(0.50, 0.155, a), self.P(0.50, 0.545, b)
        A = VGroup(*[Dot(ea, radius=0.09, color=BLUE_).set_stroke(WHITE, 1.5) for _ in na])
        B = VGroup(*[Dot(eb, radius=0.09, color=BLUE_).set_stroke(WHITE, 1.5) for _ in nb])
        self.add(A, B)
        trapped = 0
        cnt = T('', 22)
        for cycle in range(3):
            ins = T('Inspiración', 24, INK).to_edge(DOWN, buff=0.35)
            self.play(FadeIn(ins, run_time=0.2),
                      *[d.animate.move_to(self.P(*p, img=a)) for d, p in zip(A, na)],
                      *[d.animate.move_to(self.P(*p, img=b)) for d, p in zip(B, nb) if d.get_center()[0] > self.P(0.45, 0.5, b)[0] or True],
                      run_time=1.3)
            exp = T('Espiración', 24, INK).to_edge(DOWN, buff=0.35)
            keep = 3 * (cycle + 1)                      # en el enfisema una parte no sale
            self.play(FadeOut(ins, run_time=0.2), FadeIn(exp, run_time=0.2),
                      *[d.animate.move_to(ea) for d in A],
                      *[d.animate.move_to(eb) for d in B[keep:]],
                      run_time=1.3)
            self.play(FadeOut(exp), run_time=0.2)
            if cycle == 0:
                # tabiques rotos
                marks = VGroup(*[Cross(scale_factor=0.13, stroke_color=RED_, stroke_width=5).move_to(self.P(*p, img=b))
                                 for p in ((0.115, 0.575), (0.185, 0.635), (0.245, 0.525), (0.30, 0.655))])
                t1 = T('Tabiques rotos: espacios grandes', 22, RED_).next_to(b, DOWN, buff=0.2)
                t0 = T('Muchos tabiques: gran superficie', 22, GREEN_).next_to(a, DOWN, buff=0.2)
                self.play(LaggedStart(*[GrowFromCenter(m) for m in marks], lag_ratio=0.2), FadeIn(t0), FadeIn(t1), run_time=1.2)
        for d in B[:9]:
            d.set_color(AMBER)
        t2 = tag('Aire atrapado: hiperinsuflación', AMBER, 24).move_to(b.get_center() + UP * 1.2)
        self.play(FadeOut(marks), FadeIn(t2), *[Indicate(d, color=AMBER, scale_factor=1.4) for d in B[:9]], run_time=1.4)
        self.wait(1.5)


# ------------------------------------------------------------------ gastro-17: un cálculo, cuatro cuadros
class Gastro17Calculo(BlausenScene):
    IMG, CROP = 'Gallstones.png', (0.12, 0.08, 0.80, 0.76)
    ERASE = [(0.385, 0.29, 0.425, 0.335)]               # el cálculo dibujado en el colédoco
    DESAT = [(0.30, 0.20, 0.52, 0.45)]                 # y su halo rojo

    def construct(self):
        title(self, 'Un cálculo, cuatro cuadros', 'Lo que importa es dónde se enclava', AMBER)
        self.lamina(height=6.25, center=RIGHT * 3.05 + DOWN * 0.45)
        P = self.P
        GB, NECK, CYST = (0.20, 0.31), (0.355, 0.195), (0.402, 0.218)
        CBD = [(0.43, 0.25), (0.41, 0.30), (0.395, 0.36), (0.385, 0.41), (0.37, 0.46), (0.345, 0.50), (0.315, 0.53)]
        stone = VGroup(Dot(radius=0.13, color='#D9D2C2').set_stroke('#5A5345', 3), Dot(radius=0.05, color='#B8AE98').shift(UL * 0.03))
        stone.move_to(P(*GB))
        duct = self.path([(0.445, 0.235), (0.43, 0.26), (0.415, 0.29), (0.405, 0.32), (0.398, 0.35)])
        duct.set_stroke('#4F5E2C', 11, opacity=0.9)
        self.add(duct)
        steps = [('Cólico biliar', 'obstruye el bacinete un rato', AMBER), ('Colecistitis', 'se enclava en el cístico', RED_),
                 ('Coledocolitiasis y colangitis', 'baja al colédoco: ictericia, fiebre', VIOLET), ('Pancreatitis biliar', 'tapa la ampolla', BLUE_)]
        labs = VGroup()
        for i, (a, b, col) in enumerate(steps):
            g = VGroup(T(a, 27, col, bold=True), T(b, 20, MUTED)).arrange(DOWN, aligned_edge=LEFT, buff=0.06)
            labs.add(g)
        labs.arrange(DOWN, aligned_edge=LEFT, buff=0.42).to_edge(LEFT, buff=0.5).shift(DOWN * 0.45)
        for g in labs: g.set_opacity(0.25)
        self.add(labs)
        self.play(FadeIn(stone, scale=0.5), run_time=0.6)

        def on(i):
            return [labs[i].animate.set_opacity(1)] + [labs[j].animate.set_opacity(0.25) for j in range(4) if j != i]

        def glow(pt, r, col):
            return Dot(pt, radius=r, color=col).set_opacity(0)

        # 1. cólico: sube al bacinete y vuelve
        self.play(*on(0), stone.animate.move_to(P(*NECK)), run_time=1.2)
        g1 = glow(P(0.33, 0.20), 0.45, AMBER); self.add(g1)
        self.play(g1.animate.set_opacity(0.45), run_time=0.5); self.play(g1.animate.set_opacity(0), run_time=0.5)
        self.play(stone.animate.move_to(P(*GB)), run_time=1.0)
        # 2. colecistitis: se enclava en el cístico, la vesícula se inflama
        self.play(*on(1), MoveAlongPath(stone, self.path([GB, (0.29, 0.20), NECK, CYST])), run_time=1.4)
        g2 = glow(P(0.255, 0.255), 0.95, RED_).stretch(0.7, 1); self.add(g2)
        self.play(g2.animate.set_opacity(0.38), run_time=1.0)
        self.wait(0.6)
        # 3. colédoco: la bilis se devuelve (ictericia) y se infecta
        g3 = glow(P(0.465, 0.17), 0.55, '#C8D84A')
        self.add(g3)
        self.play(*on(2), g2.animate.set_opacity(0), MoveAlongPath(stone, self.path([CYST] + CBD[:4])), run_time=1.5)
        bact = VGroup(*[Dot(P(0.43 + 0.02 * np.cos(k), 0.26 + 0.03 * np.sin(k)), radius=0.045, color=VIOLET) for k in range(8)])
        self.play(g3.animate.set_opacity(0.4), FadeIn(bact, lag_ratio=0.15), run_time=1.2)
        self.play(*[d.animate.shift(UP * 0.5 + RIGHT * 0.2 * np.cos(i)) for i, d in enumerate(bact)], run_time=1.0)
        # 4. ampolla: tapa el conducto pancreático
        self.play(*on(3), FadeOut(bact), g3.animate.set_opacity(0), MoveAlongPath(stone, self.path(CBD[3:])), run_time=1.4)
        g4 = glow(P(0.60, 0.34), 1.55, RED_).stretch(0.42, 1).rotate(0.22)
        g5 = glow(P(0.44, 0.50), 1.0, RED_)
        self.add(g4, g5)
        self.play(g4.animate.set_opacity(0.3), g5.animate.set_opacity(0.3), Flash(stone, color=RED_, line_length=0.25), run_time=1.3)
        self.wait(1.5)


# ------------------------------------------------------------------ ob-13: desprendimiento de placenta (DPPNI)
class Ob13Desprendimiento(BlausenScene):
    IMG, CROP = 'Blausen 0737 PlacentalAbruption.png', (0.0, 0.17, 1.0, 0.87)
    ERASE = [(0.31, 0.05, 0.36, 0.14), (0.63, 0.04, 0.72, 0.205), (0.76, 0.04, 0.85, 0.205),
             (0.43, 0.78, 0.50, 0.93), (0.57, 0.78, 0.62, 0.93), (0.40, 0.75, 0.44, 0.80), (0.50, 0.34, 0.55, 0.40)]

    def construct(self):
        title(self, 'Desprendimiento de placenta', 'Un hematoma crece detrás de la placenta normoinserta', RED_)
        img = self.lamina(width=8.3, center=RIGHT * 2.5 + DOWN * 0.75)
        P = self.P
        la = T('Hemorragia externa', 22, RED_, bold=True).next_to(img, UP, buff=0.12).set_x(P(0.22, 0.5)[0])
        lb = T('Hemorragia oculta', 22, RED_, bold=True).next_to(img, UP, buff=0.12).set_x(P(0.75, 0.5)[0])
        self.play(FadeIn(la), FadeIn(lb), run_time=0.6)
        ha = Ellipse(width=0.55, height=0.32, color=RED_, fill_opacity=0.0, stroke_width=0).move_to(P(0.385, 0.775)).rotate(-0.6)
        hb = Ellipse(width=1.0, height=0.34, color=RED_, fill_opacity=0.0, stroke_width=0).move_to(P(0.565, 0.33)).rotate(1.15)
        self.add(ha, hb)
        self.play(ha.animate.set_fill(opacity=0.45).scale(1.25), hb.animate.set_fill(opacity=0.45).scale(1.25), run_time=1.5)
        out = self.path([(0.40, 0.77), (0.425, 0.735), (0.455, 0.71), (0.49, 0.69), (0.52, 0.675)])
        drops = VGroup(*[Dot(radius=0.055, color='#B3121B') for _ in range(9)])
        t = ValueTracker(0)
        drops.add_updater(lambda g: [d.move_to(out.point_from_proportion((t.get_value() + i / 9) % 1)) for i, d in enumerate(g)])
        self.add(drops)
        col = VGroup(
            VGroup(T('Externa', 24, RED_, bold=True), T('sangre oscura por vagina', 20, MUTED)).arrange(DOWN, aligned_edge=LEFT, buff=0.05),
            VGroup(T('Oculta', 24, RED_, bold=True), T('no sale: el útero se llena', 20, MUTED)).arrange(DOWN, aligned_edge=LEFT, buff=0.05),
            T('Dolor intenso', 24, INK, bold=True),
            T('Útero duro como madera', 24, AMBER, bold=True),
            T('El feto sufre', 24, INK, bold=True),
        ).arrange(DOWN, aligned_edge=LEFT, buff=0.3).to_edge(LEFT, buff=0.4).shift(DOWN * 0.35)
        self.play(FadeIn(col[0]), t.animate.set_value(0.6), run_time=1.2, rate_func=linear)
        self.play(FadeIn(col[1]), hb.animate.scale(1.08), t.animate.increment_value(0.6), run_time=1.2, rate_func=linear)
        self.play(FadeIn(col[2]), FadeIn(col[3]), t.animate.increment_value(0.6), run_time=1.2, rate_func=linear)
        heart = T('♥', 40, RED_).next_to(col[4], DOWN, aligned_edge=LEFT, buff=0.25)
        fv = ValueTracker(140)
        anchor = heart.get_right() + RIGHT * 0.25
        fcf = always_redraw(lambda: T(str(int(round(fv.get_value()))), 34, RED_ if fv.get_value() < 110 else INK, bold=True)
                            .move_to(anchor, aligned_edge=LEFT))
        lpm = T('lpm', 18, MUTED).move_to(anchor + RIGHT * 1.0, aligned_edge=LEFT)
        self.play(FadeIn(col[4]), FadeIn(heart), FadeIn(fcf), FadeIn(lpm), t.animate.increment_value(0.3), run_time=0.6, rate_func=linear)
        for k, v in enumerate((130, 115, 100, 90, 80)):
            self.play(heart.animate.scale(1.25), t.animate.increment_value(0.2), rate_func=there_and_back, run_time=0.35 + 0.1 * k)
            self.play(fv.animate.set_value(v), t.animate.increment_value(0.2), run_time=0.3, rate_func=linear)
        self.play(t.animate.increment_value(0.6), run_time=1.2, rate_func=linear)


# ------------------------------------------------------------------ hem-09: drepanocitosis
def sprite(img_name, box, key):
    """Recorta una figura de una ilustración Blausen y vuelve transparente el fondo blanco."""
    import os
    from PIL import Image
    from blausen_clean import clean
    dst = f'/tmp/sprite_{key}.png'
    if not os.path.exists(dst):
        clean(img_name, f'/tmp/sprite_{key}_src.png')
        im = Image.open(f'/tmp/sprite_{key}_src.png').convert('RGBA')
        W, H = im.size
        im = im.crop((int(box[0] * W), int(box[1] * H), int(box[2] * W), int(box[3] * H)))
        px = im.load()
        for y in range(im.size[1]):
            for x in range(im.size[0]):
                r, g, b, a = px[x, y]
                m = min(r, g, b)
                if m > 235: px[x, y] = (r, g, b, 0)
                elif m > 200: px[x, y] = (r, g, b, int(255 * (235 - m) / 35))
        im.save(dst)
    return ImageMobject(dst)


class Hem09Falciforme(BlausenScene):
    IMG = 'Sickle Cell Anemia.png'
    ERASE = [(0.30, 0.53, 0.66, 0.60), (0.28, 0.885, 0.72, 0.96), (0.50, 0.39, 0.845, 0.45)]

    def construct(self):
        title(self, 'Anemia de células falciformes', 'Con poco oxígeno la hemoglobina S polimeriza y el glóbulo se vuelve hoz', RED_)
        top = self.lamina(width=10.2, center=UP * 0.45 + RIGHT * 1.45, crop=(0.04, 0.29, 0.97, 0.535))
        bot = self.lamina(width=10.2, center=DOWN * 2.55 + RIGHT * 1.45, crop=(0.04, 0.645, 0.97, 0.895), credit=False)
        P = self.P
        lt = T('Normal', 26, GREEN_, bold=True).next_to(top, LEFT, buff=0.3).align_to(top, UP)
        lb = T('Hemoglobina S', 26, RED_, bold=True).next_to(bot, LEFT, buff=0.3).align_to(bot, UP)
        self.add(lt, lb)
        IMGF = 'Sickle Cell Anemia.png'
        # glóbulos normales que pasan por el capilar de arriba
        y_top = P(0.5, 0.41, top)[1]
        cells = Group(*[sprite(IMGF, (0.045, 0.02, 0.16, 0.11), 'rbc').set(height=1.0) for _ in range(3)])
        xs = ValueTracker(0)
        x0, x1 = top.get_left()[0] + 0.55, top.get_right()[0] - 0.55
        def upd(g):
            for i, c in enumerate(g):
                f = (xs.get_value() + i / 3) % 1
                c.move_to([x0 + (x1 - x0) * f, y_top + 0.06 * np.sin(6 * f + i), 0])
                c.set_opacity(min(1, f / 0.08, (1 - f) / 0.08))
        cells.add_updater(upd); upd(cells)
        self.add(cells)
        cap1 = VGroup(T('Flexibles:', 20, GREEN_), T('pasan por', 20, GREEN_), T('el capilar', 20, GREEN_)).arrange(DOWN, aligned_edge=LEFT, buff=0.05).next_to(lt, DOWN, aligned_edge=LEFT, buff=0.15)
        self.play(FadeIn(cap1), xs.animate.set_value(1), run_time=3, rate_func=linear)
        # un glóbulo se transforma en hoz (abajo, a la entrada)
        y_bot = P(0.5, 0.78, bot)[1]
        n = sprite(IMGF, (0.045, 0.02, 0.16, 0.11), 'rbc').set(height=1.0).move_to([lb.get_center()[0], y_bot - 0.35, 0])
        sk = sprite(IMGF, (0.05, 0.12, 0.16, 0.235), 'sickle').set(height=1.05).move_to(n)
        o2 = T('Poco oxígeno', 20, BLUE_).next_to(lb, DOWN, aligned_edge=LEFT, buff=0.15)
        self.play(FadeIn(n), FadeIn(o2), xs.animate.increment_value(0.4), run_time=0.8, rate_func=linear)
        self.play(FadeTransform(n, sk), xs.animate.increment_value(0.5), run_time=1.2, rate_func=linear)
        poly = VGroup(T('Polimeriza:', 20, RED_), T('hoz rígida', 20, RED_)).arrange(DOWN, aligned_edge=LEFT, buff=0.05).next_to(lb, DOWN, aligned_edge=LEFT, buff=0.15)
        self.play(ReplacementTransform(o2, poly), xs.animate.increment_value(0.4), run_time=0.8, rate_func=linear)
        # la hoz entra y se atasca en el tapón
        jam = P(0.50, 0.78, bot)
        self.play(sk.animate.move_to(jam + LEFT * 0.2).rotate(-0.5).scale(0.9), FadeOut(poly), xs.animate.increment_value(0.5), run_time=1.4)
        isq = Rectangle(width=bot.width * 0.38, height=bot.height * 0.8, stroke_width=0, fill_color=VIOLET, fill_opacity=0)
        isq.move_to(P(0.78, 0.775, bot))
        ti = tag('Sin flujo: isquemia, crisis de dolor', VIOLET, 20).move_to(P(0.78, 0.68, bot))
        self.add(isq)
        for _ in range(2):
            self.play(isq.animate.set_fill(opacity=0.35), xs.animate.increment_value(0.3), run_time=0.7, rate_func=linear)
            self.play(isq.animate.set_fill(opacity=0.1), xs.animate.increment_value(0.3), run_time=0.7, rate_func=linear)
        self.play(FadeIn(ti), isq.animate.set_fill(opacity=0.3), run_time=0.6)
        # hemólisis
        frag = VGroup(*[Dot(sk.get_center() + np.array([np.cos(a), np.sin(a), 0]) * 0.1, radius=0.05, color=RED_) for a in np.linspace(0, 2 * PI, 8)])
        th = tag('Se rompen: hemólisis y anemia', RED_, 20).move_to(P(0.78, 0.86, bot))
        self.play(FadeOut(sk), FadeIn(frag), run_time=0.4)
        self.play(*[d.animate.shift(np.array([np.cos(a), np.sin(a), 0]) * 0.6).set_opacity(0) for d, a in zip(frag, np.linspace(0, 2 * PI, 8))],
                  FadeIn(th), xs.animate.increment_value(0.4), run_time=1.2)
        self.play(xs.animate.increment_value(0.8), run_time=2.0, rate_func=linear)


# ------------------------------------------------------------------ derma-01: lesiones elementales según profundidad
class Derma01Lesiones(BlausenScene):
    IMG, CROP = 'Blausen 0810 SkinAnatomy 01.png', (0.175, 0.25, 0.40, 0.565)
    ERASE = [(0.565, 0.66, 0.59, 0.83)]

    def construct(self):
        title(self, 'Lesiones elementales', 'Qué capa de la piel compromete cada una', VIOLET)
        img = self.lamina(height=6.25, center=RIGHT * 4.2 + DOWN * 0.5)
        z = 1.35
        P = self.P
        # profundidades (fracciones de la imagen original, columna x≈0.20)
        ys, yj, yd, yh = 0.293, 0.330, 0.47, 0.558
        xb = img.get_left()[0] - 0.25
        def bracket(y0, y1, txt, col):
            a, b = P(0.2, y0)[1], P(0.2, y1)[1]
            br = VGroup(Line([xb, a, 0], [xb, b, 0], color=col, stroke_width=4),
                        Line([xb, a, 0], [xb + 0.15, a, 0], color=col, stroke_width=4),
                        Line([xb, b, 0], [xb + 0.15, b, 0], color=col, stroke_width=4))
            t = T(txt, 21, col, bold=True).next_to(br, LEFT, buff=0.15)
            return VGroup(br, t)
        br = VGroup(bracket(ys, yj, 'Epidermis', '#F4A6A0'), bracket(yj, yd, 'Dermis', '#E07A8C'), bracket(yd, yh, 'Hipodermis', AMBER))
        self.play(LaggedStart(*[FadeIn(b, shift=RIGHT * 0.2) for b in br], lag_ratio=0.3), run_time=1.5)
        X = 0.27                                     # lugar de la lesión
        sy = P(X, ys)[1]; jy = P(X, yj)[1]
        cx = P(X, ys)[0]
        def dome(w, h, y_base, col, op, stroke=None):
            pts = [np.array([cx + w / 2 * np.cos(a), y_base + h * np.sin(a), 0]) for a in np.linspace(0, PI, 40)]
            d = Polygon(*pts, fill_color=col, fill_opacity=op, stroke_color=stroke or col, stroke_width=3)
            return d
        cap = VGroup()
        items = [
            ('Mácula', 'plana: solo cambia el color', 'mac'),
            ('Pápula', 'sólida, elevada, menos de 1 cm', 'pap'),
            ('Vesícula', 'líquido, menos de 1 cm', 'ves'),
            ('Ampolla', 'líquido, más de 1 cm', 'amp'),
            ('Pústula', 'contiene pus', 'pus'),
            ('Nódulo', 'profundo, se palpa más que se ve', 'nod'),
        ]
        names = VGroup(*[T(a, 25, INK, bold=True) for a, _, _ in items]).arrange(DOWN, aligned_edge=LEFT, buff=0.32)
        names.to_edge(LEFT, buff=0.5).shift(UP * 0.35)
        names.set_opacity(0.3)
        self.add(names)
        sub = T('', 20)
        cur = VGroup()
        for i, (name, desc, k) in enumerate(items):
            if k == 'mac':
                g = VGroup(*[Ellipse(width=0.9 * z * f, height=abs(sy - jy) * 0.8 * f, stroke_width=0, fill_color='#6B3A1F', fill_opacity=0.16).move_to([cx, (sy + jy) / 2, 0]) for f in (1.0, 0.85, 0.7, 0.55)])
            elif k == 'pap':
                g = dome(0.75 * z, 0.32 * z, sy, '#E9A39A', 1.0, '#B5675E')
            elif k == 'ves':
                cav = Ellipse(width=0.42 * z, height=abs(sy - jy) * 0.6, fill_color='#BFE3FF', fill_opacity=0.9, stroke_color=BLUE_, stroke_width=2).move_to([cx, sy - abs(sy - jy) * 0.45 + 0.13 * z, 0])
                g = VGroup(dome(0.5 * z, 0.18 * z, sy, '#F2B8AE', 1.0, '#B5675E'), cav)
            elif k == 'amp':
                roof = dome(1.3 * z, 0.42 * z, sy, '#F2B8AE', 1.0, '#B5675E')
                cav = Polygon(*[np.array([cx + 0.6 * z * np.cos(a), jy + 0.02 + (sy - jy + 0.36 * z) * np.sin(a), 0]) for a in np.linspace(0, PI, 40)],
                              fill_color='#BFE3FF', fill_opacity=0.9, stroke_color=BLUE_, stroke_width=2)
                g = VGroup(roof, cav)
            elif k == 'pus':
                cav = Ellipse(width=0.48 * z, height=0.26 * z, fill_color='#F3D35B', fill_opacity=0.95, stroke_color=AMBER, stroke_width=2).move_to([cx, sy + 0.04 * z, 0])
                g = VGroup(dome(0.6 * z, 0.24 * z, sy, '#F2B8AE', 1.0, '#B5675E'), cav)
            else:
                ny = P(X, 0.44)[1]
                g = VGroup(dome(0.9 * z, 0.16 * z, sy, '#EBA59C', 1.0, '#B5675E'),
                           Ellipse(width=0.95 * z, height=0.75 * z, fill_color='#C2566A', fill_opacity=0.85, stroke_color=RED_, stroke_width=3).move_to([cx, ny, 0]))
            d = T(desc, 22, AMBER).next_to(names, DOWN, aligned_edge=LEFT, buff=0.45)
            anims = [names[i].animate.set_opacity(1)] + ([names[i - 1].animate.set_opacity(0.3)] if i else [])
            self.play(*anims, FadeOut(cur), FadeOut(sub), FadeIn(g, scale=0.6), FadeIn(d), run_time=0.9)
            cur, sub = g, d
            if k == 'amp':
                n2 = VGroup(T('Intraepidérmica: pénfigo (frágil, se rompe)', 19, BLUE_),
                            T('Subepidérmica: penfigoide (tensa)', 19, BLUE_)).arrange(DOWN, aligned_edge=LEFT, buff=0.06).next_to(d, DOWN, aligned_edge=LEFT, buff=0.12)
                self.play(FadeIn(n2), run_time=0.6); self.wait(1.4); self.play(FadeOut(n2), run_time=0.3)
            else:
                self.wait(1.3)
        self.play(names.animate.set_opacity(1), run_time=0.6)
        self.wait(1)


# ------------------------------------------------------------------ infecto-23: herpes zóster
def _line_boxes(a, b, n=14, r=0.012):
    return [(a[0] + (b[0] - a[0]) * t - r, a[1] + (b[1] - a[1]) * t - r, a[0] + (b[0] - a[0]) * t + r, a[1] + (b[1] - a[1]) * t + r)
            for t in np.linspace(0, 1, n)]


ZOSTER_LINE = _line_boxes((0.585, 0.43), (0.455, 0.705)) + [(0.775, 0.33, 0.82, 0.41)]


def zoster_prep():
    """/tmp/zoster_full.png (limpia, con erupción y lupa) y /tmp/zoster_base.png (sin erupción ni lupa)."""
    import os, cv2
    from blausen_clean import clean
    full, base = '/tmp/zoster_full.png', '/tmp/zoster_base.png'
    if os.path.exists(full) and os.path.exists(base):
        return full, base
    clean('Herpes Zoster Rash.png', full, None, ZOSTER_LINE)
    im = cv2.imread(full); h, w = im.shape[:2]
    ring = np.zeros((h, w), np.uint8)                   # el círculo negro sobre la erupción: borrar solo el anillo
    cv2.circle(ring, (int(0.418 * w), int(0.710 * h)), int(0.0205 * w), 255, int(0.008 * w))
    im = cv2.inpaint(im, ring, 5, cv2.INPAINT_TELEA); cv2.imwrite(full, im)
    lab = cv2.cvtColor(im, cv2.COLOR_BGR2LAB).astype(np.float32)
    box = np.zeros((h, w), bool); box[int(0.585 * h):int(0.885 * h), int(0.32 * w):int(0.56 * w)] = True
    a_ref = np.percentile(lab[int(0.65 * h):int(0.80 * h), int(0.22 * w):int(0.30 * w), 1], 95)
    bg = im.min(axis=2) > 232
    bgd = cv2.dilate(bg.astype(np.uint8), np.ones((5, 5), np.uint8), 1).astype(bool)
    m = (box & (lab[..., 1] > a_ref + 2) & ~bgd).astype(np.uint8) * 255
    m = cv2.dilate(m, np.ones((9, 9), np.uint8), 2); m[bg] = 0
    tmp = im.copy(); tmp[bg] = np.median(im[int(0.65 * h):int(0.80 * h), int(0.22 * w):int(0.30 * w)].reshape(-1, 3), axis=0)
    out = cv2.inpaint(tmp, m, 12, cv2.INPAINT_TELEA).astype(np.float32)
    mm = (cv2.GaussianBlur(m.astype(np.float32), (0, 0), 2) / 255.0)[..., None]
    out = cv2.GaussianBlur(out, (0, 0), 3) * mm + out * (1 - mm)
    out[bg] = im[bg]
    out = out.astype(np.uint8)
    out[int(0.305 * h):int(0.585 * h), int(0.695 * w):int(0.965 * w)] = 255     # sin lupa
    cv2.imwrite(base, out)
    return full, base


class Infecto23Zoster(BlausenScene):
    IMG, CROP = 'Herpes Zoster Rash.png', (0.02, 0.0, 0.98, 0.92)
    RASH = (0.32, 0.585, 0.56, 0.885)
    LENS = (0.695, 0.305, 0.965, 0.585)

    def PREP(self):
        return zoster_prep()[1]

    def piece(self, box):
        """Recorte de la ilustración completa (con erupción), ubicado exactamente en su lugar."""
        import cv2, hashlib
        full = zoster_prep()[0]
        im = cv2.imread(full); h, w = im.shape[:2]
        png = '/tmp/zoster_piece_' + hashlib.md5(repr(box).encode()).hexdigest()[:8] + '.png'
        cv2.imwrite(png, im[int(box[1] * h):int(box[3] * h), int(box[0] * w):int(box[2] * w)])
        x0, y0, x1, y1 = self.CROP
        m = ImageMobject(png).set(width=(box[2] - box[0]) / (x1 - x0) * self.img.width)
        return m.move_to(self.P((box[0] + box[2]) / 2, (box[1] + box[3]) / 2))

    def construct(self):
        title(self, 'Herpes zóster', 'El virus de la varicela despierta y baja por un nervio', VIOLET)
        img = self.lamina(height=5.85, center=RIGHT * 2.75 + DOWN * 0.68)
        P = self.P
        mid = DashedLine(P(0.345, 0.30), P(0.345, 0.91), color=MUTED, stroke_width=3, dash_length=0.12)
        lm = tag('Línea media', MUTED, 17).next_to(P(0.345, 0.88), LEFT, buff=0.12)
        gang = Dot(P(0.352, 0.60), radius=0.13, color=AMBER).set_stroke(WHITE, 2)
        col = VGroup(T('1. Varicela en la infancia', 23, INK, bold=True), T('el virus queda dormido en un', 20, MUTED),
                     T('ganglio sensitivo', 20, AMBER),
                     T('2. Años después reactiva', 23, INK, bold=True), T('(edad, inmunosupresión)', 20, MUTED),
                     T('3. Baja por ese nervio', 23, INK, bold=True), T('dolor quemante, luego la erupción', 20, MUTED),
                     T('4. Vesículas en un dermatoma', 23, INK, bold=True), T('no cruza la línea media', 20, RED_)
                     ).arrange(DOWN, aligned_edge=LEFT, buff=0.1).to_edge(LEFT, buff=0.4).shift(DOWN * 0.3)
        for i in (3, 5, 7):
            col[i:].shift(DOWN * 0.18)
        self.play(Create(mid), FadeIn(lm), GrowFromCenter(gang), FadeIn(col[0:3]), run_time=1.4)
        virus = VGroup(*[Dot(gang.get_center() + 0.06 * np.array([np.cos(a), np.sin(a), 0]), radius=0.035, color=VIOLET) for a in np.linspace(0, 2 * PI, 6)])
        self.play(FadeIn(virus), run_time=0.5)
        self.play(gang.animate.scale(1.25), rate_func=there_and_back, run_time=0.8)
        self.wait(0.4)
        nerve = self.path([(0.352, 0.60), (0.40, 0.625), (0.45, 0.66), (0.49, 0.71), (0.515, 0.77), (0.525, 0.84)])
        nerve.set_stroke(AMBER, 4)
        self.play(FadeIn(col[3:5]), gang.animate.set_color(RED_), Flash(gang, color=RED_, line_length=0.2), run_time=1.0)
        self.play(Create(nerve), FadeIn(col[5:7]), run_time=1.3)
        t = ValueTracker(0)
        vs = VGroup(*[Dot(radius=0.045, color=VIOLET).set_stroke(WHITE, 1) for _ in range(8)])
        vs.add_updater(lambda g: [d.move_to(nerve.point_from_proportion(min(1, max(0, t.get_value() - i * 0.08)))) for i, d in enumerate(g)])
        self.add(vs)
        self.play(t.animate.set_value(1.6), run_time=2.0, rate_func=linear)
        rash = self.piece(self.RASH)
        self.remove(nerve, gang, virus); self.add(rash, nerve, gang, virus)
        rash.set_opacity(0)
        self.play(rash.animate.set_opacity(1), FadeOut(vs), FadeIn(col[7:9]), run_time=1.6)
        lm2 = tag('No cruza la línea media', RED_, 17).move_to(lm, aligned_edge=RIGHT)
        self.play(mid.animate.set_color(RED_).set_stroke(width=5), ReplacementTransform(lm, lm2), run_time=0.6)
        lens = self.piece(self.LENS)
        lv = VGroup(T('Vesículas agrupadas', 17, BG, bold=True), T('sobre base roja', 17, BG, bold=True)).arrange(DOWN, buff=0.05).next_to(lens, DOWN, buff=0.1).shift(LEFT * 0.3)
        self.play(FadeIn(lens, scale=0.6), FadeIn(lv), run_time=1.0)
        self.wait(2.0)


# ------------------------------------------------------------------ resp-02: el bronquio en la crisis asmática
class Resp02Asma(BlausenScene):
    IMG = 'Blausen 0620 Lungs NormalvsInflamedAirway.png'
    ERASE = [('ring', 0.775, 0.468, 0.175, 0.03), ('dark', 0.605, 0.36, 0.70, 0.65), ('dark', 0.64, 0.27, 0.70, 0.36),
             (0.58, 0.44, 0.63, 0.50), (0.68, 0.60, 0.72, 0.66), (0.78, 0.72, 0.84, 0.79)]

    def air(self, center, r_lumen, n, run, blocked=False):
        """Partículas de aire que entran a la luz (convergen al centro y se achican)."""
        dots = VGroup()
        anims = []
        rng = np.random.default_rng(3 if blocked else 1)
        for i in range(n):
            a = rng.uniform(0, 2 * PI)
            start = center + np.array([np.cos(a), np.sin(a), 0]) * rng.uniform(0.9, 1.5) + np.array([-0.4, -0.5, 0])
            d = Dot(start, radius=0.07, color=BLUE_).set_stroke(WHITE, 1.2)
            dots.add(d)
            if blocked and i % 3:
                anims.append(Succession(d.animate(run_time=run * 0.45).move_to(center + (start - center) * 0.45),
                                        d.animate(run_time=run * 0.55).move_to(start).set_opacity(0)))
            else:
                anims.append(d.animate(run_time=run).move_to(center + rng.uniform(-0.3, 0.3, 3) * np.array([r_lumen, r_lumen, 0])).scale(0.2).set_opacity(0.2))
        return dots, anims

    def construct(self):
        title(self, 'El bronquio en la crisis asmática', 'Broncoespasmo, edema y moco cierran la luz', BLUE_)
        nor = self.lamina(height=4.5, center=LEFT * 4.35 + DOWN * 0.35, crop=(0.035, 0.27, 0.36, 0.72))
        inf = self.lamina(height=4.5, center=RIGHT * 0.45 + DOWN * 0.35, crop=(0.62, 0.21, 0.975, 0.72), credit=False)
        self.add(T(BLAUSEN_CREDIT, 13, MUTED).to_corner(DR, buff=0.15))
        P = self.P
        ln = T('Normal', 26, GREEN_, bold=True).next_to(nor, UP, buff=0.2)
        li = T('En la crisis', 26, RED_, bold=True).next_to(inf, UP, buff=0.2)
        self.play(FadeIn(ln), FadeIn(li), run_time=0.6)
        cn, ci = P(0.13, 0.60, nor), P(0.868, 0.592, inf)
        # el aire entra sin problema vs casi no pasa
        for _ in range(2):
            d1, a1 = self.air(cn, 0.5, 12, 1.4)
            d2, a2 = self.air(ci, 0.18, 9, 1.4, blocked=True)
            self.add(d1, d2)
            self.play(*a1, *a2)
            self.remove(d1, d2)
        cap = VGroup(T('Luz amplia: el aire pasa', 20, GREEN_).next_to(nor, DOWN, buff=0.15),
                     T('Luz estrecha: sibilancias', 20, RED_).next_to(inf, DOWN, buff=0.15))
        self.play(FadeIn(cap), run_time=0.6)
        # tres mecanismos sobre la pared real
        mech = [('Broncoespasmo', 'el músculo se contrae', (0.80, 0.395), UP * 1.35 + RIGHT * 0.2),
                ('Edema', 'la pared se engruesa', (0.95, 0.60), RIGHT * 1.15 + UP * 0.35),
                ('Moco', 'tapona la luz', (0.842, 0.555), LEFT * 1.6 + DOWN * 0.15)]
        pins = VGroup()
        for name, sub, (fx, fy), off in mech:
            p = P(fx, fy, inf)
            lab = VGroup(T(name, 22, AMBER, bold=True), T(sub, 17, INK)).arrange(DOWN, buff=0.04)
            box = BackgroundRectangle(lab, color=BG, fill_opacity=0.85, buff=0.1, corner_radius=0.08)
            g = VGroup(box, lab).move_to(p + off)
            ln_ = Line(g.get_critical_point(-np.sign(off) * np.array([1, 1, 0])), p, color=AMBER, stroke_width=3)
            dot = Dot(p, radius=0.07, color=AMBER)
            self.play(FadeIn(g), Create(ln_), FadeIn(dot), run_time=0.7)
            pins.add(g, ln_, dot)
            self.wait(0.5)
        # comparación del calibre
        ring_n = DashedVMobject(Circle(radius=0.48, color=GREEN_, stroke_width=4), num_dashes=24).move_to(cn)
        self.play(Create(ring_n), run_time=0.6)
        self.play(ring_n.animate.move_to(ci), run_time=1.0)
        self.wait(0.6)
        self.play(FadeOut(ring_n), run_time=0.3)
        # CO2: baja al comienzo; si se normaliza, el paciente se agota
        panel = RoundedRectangle(corner_radius=0.15, width=2.55, height=3.4, stroke_color=MUTED, stroke_width=2).move_to(RIGHT * 5.75 + DOWN * 0.35)
        hdr = T('CO₂ en sangre', 22, INK, bold=True).next_to(panel.get_top(), DOWN, buff=0.25)
        v = ValueTracker(40)
        num = always_redraw(lambda: T(f'{int(round(v.get_value()))}', 56, GREEN_ if v.get_value() < 37 else (RED_ if v.get_value() > 38.5 else INK), bold=True).move_to(panel.get_center() + UP * 0.2))
        unit = T('mmHg', 18, MUTED).next_to(panel.get_center() + DOWN * 0.35, DOWN, buff=0.05)
        msg = T('', 18)
        self.play(Create(panel), FadeIn(hdr), FadeIn(num), FadeIn(unit), run_time=0.7)
        m1 = VGroup(T('Bajo: hiperventila', 19, GREEN_), T('(lo esperable)', 17, MUTED)).arrange(DOWN, buff=0.04).next_to(unit, DOWN, buff=0.25)
        self.play(v.animate.set_value(30), FadeIn(m1), run_time=1.4)
        self.wait(0.8)
        m2 = VGroup(T('Normal = se agota', 19, RED_, bold=True), T('¡alarma!', 19, RED_, bold=True)).arrange(DOWN, buff=0.04).move_to(m1)
        self.play(v.animate.set_value(40), FadeOut(m1), FadeIn(m2), run_time=1.6)
        self.play(Indicate(m2, color=RED_, scale_factor=1.15), Indicate(panel, color=RED_), run_time=0.9)
        self.wait(1.5)


# ------------------------------------------------------------------ cirugia-12: hematoma epidural vs subdural
DURA = [(0.102, 0.276), (0.115, 0.215), (0.136, 0.178), (0.16, 0.158), (0.186, 0.147), (0.22, 0.141), (0.257, 0.140),
        (0.285, 0.142), (0.312, 0.146), (0.338, 0.156), (0.362, 0.170), (0.387, 0.185), (0.409, 0.203), (0.425, 0.224),
        (0.438, 0.248), (0.449, 0.275), (0.455, 0.304), (0.459, 0.338), (0.459, 0.371), (0.451, 0.427)]
BRAIN_C = (0.275, 0.31)


class Cirugia12Hematomas(BlausenScene):
    IMG = 'Hematoma Comparison.png'
    CROP = (0.05, 0.085, 0.485, 0.56)

    def clot(self, img, seg, thick, tracker, color='#7A0E12', taper=True):
        """Coágulo entre la tabla interna y la duramadre: borde externo = contorno; borde interno hacia el cerebro."""
        def build():
            k = tracker.get_value()
            pts_o, pts_i = [], []
            n = len(seg)
            for j, (fx, fy) in enumerate(seg):
                s = j / (n - 1)
                prof = np.sin(PI * s) ** (1.2 if taper else 0.35)
                o = self.P(fx, fy, img)
                c = self.P(*BRAIN_C, img)
                nrm = (c - o) / np.linalg.norm(c - o)
                pts_o.append(o + nrm * 0.02)
                pts_i.append(o + nrm * (0.02 + thick * k * prof))
            return Polygon(*pts_o, *pts_i[::-1], fill_color=color, fill_opacity=0.92, stroke_color='#3A0306', stroke_width=1.5)
        return always_redraw(build)

    def curve(self, origin, w, h, pts, color):
        ax = VGroup(Line(origin, origin + RIGHT * w, color=MUTED, stroke_width=2), Line(origin, origin + UP * h, color=MUTED, stroke_width=2))
        lab = T('Conciencia', 16, MUTED).rotate(PI / 2).next_to(ax[1], LEFT, buff=0.08)
        path = VMobject(color=color, stroke_width=5).set_points_as_corners([origin + RIGHT * w * x + UP * h * y for x, y in pts])
        return VGroup(ax, lab), path

    def construct(self):
        title(self, 'Hematoma epidural o subdural', 'Mismo golpe, distinto espacio, distinta evolución', RED_)
        A = self.lamina(width=5.1, center=LEFT * 3.45 + DOWN * 0.05, crop=self.CROP, credit=False)
        B = self.lamina(width=5.1, center=RIGHT * 3.45 + DOWN * 0.05, crop=self.CROP, credit=False)
        self.add(T(BLAUSEN_CREDIT, 12, MUTED).to_corner(DR, buff=0.06))
        ta = T('Epidural', 26, RED_, bold=True).next_to(A, UP, buff=0.1)
        tb = T('Subdural', 26, BLUE_, bold=True).next_to(B, UP, buff=0.1)
        self.play(FadeIn(ta), FadeIn(tb), run_time=0.6)
        art = Dot(self.P(0.30, 0.144, A), radius=0.09, color=RED_).set_stroke(WHITE, 1.5)
        la = tag('Arteria meníngea media', RED_, 17).next_to(A, DOWN, buff=0.12).align_to(A, LEFT)
        veins = VGroup(*[Line(self.P(fx, fy, B), self.P(fx, fy, B) + (self.P(*BRAIN_C, B) - self.P(fx, fy, B)) * 0.12, color=BLUE_, stroke_width=4)
                         for fx, fy in DURA[3:16:3]])
        lb = tag('Venas puente', BLUE_, 17).next_to(B, DOWN, buff=0.12).align_to(B, LEFT)
        self.play(GrowFromCenter(art), FadeIn(la), Create(veins), FadeIn(lb), run_time=1.0)
        ka, kb = ValueTracker(0), ValueTracker(0)
        self.add(self.clot(A, DURA[6:14], 0.62, ka), self.clot(B, DURA[1:19], 0.17, kb, color='#5E1A2E', taper=False))
        # curvas de conciencia (se dibujan con un rastreador de avance)
        ga, pa = self.curve(A.get_corner(DL) + DOWN * 1.42 + RIGHT * 0.45, 4.4, 0.72,
                            [(0, 1), (0.08, 1), (0.13, 0.45), (0.25, 0.95), (0.55, 0.95), (0.62, 0.5), (0.75, 0.08), (1, 0.05)], RED_)
        gb, pb = self.curve(B.get_corner(DL) + DOWN * 1.42 + RIGHT * 0.45, 4.4, 0.72,
                            [(0, 1), (0.08, 1), (0.13, 0.85), (0.3, 0.83), (0.6, 0.65), (1, 0.3)], BLUE_)
        va, vb = ValueTracker(0.001), ValueTracker(0.001)
        ca = always_redraw(lambda: pa.copy().pointwise_become_partial(pa, 0, va.get_value()))
        cb = always_redraw(lambda: pb.copy().pointwise_become_partial(pb, 0, vb.get_value()))
        self.play(FadeIn(ga), FadeIn(gb), run_time=0.5)
        self.add(ca, cb)
        self.play(Flash(art, color=RED_, line_length=0.25), va.animate.set_value(0.32), vb.animate.set_value(0.2), run_time=1.4)
        ilu = T('intervalo lúcido', 16, AMBER).move_to(ga[0][0].get_start() + RIGHT * 4.4 * 0.4 + UP * 0.72 * 0.55)
        self.play(FadeIn(ilu), va.animate.set_value(0.5), vb.animate.set_value(0.3), run_time=0.9)
        self.play(ka.animate.set_value(1), kb.animate.set_value(0.4), va.animate.set_value(1), vb.animate.set_value(0.55),
                  Flash(art, color=RED_, line_length=0.2, run_time=1.0), run_time=3.0)
        da = T('Lente · crece en horas', 17, INK).next_to(la, RIGHT, buff=0.2)
        self.play(FadeIn(da), kb.animate.set_value(0.7), vb.animate.set_value(0.75), run_time=1.5)
        db = T('Media luna · crece en días', 17, INK).next_to(lb, RIGHT, buff=0.2)
        self.play(FadeIn(db), kb.animate.set_value(1), vb.animate.set_value(1), run_time=1.8)
        self.wait(2)


# ------------------------------------------------------------------ resp-11: trasudado vs exudado
class Resp11Derrame(BlausenScene):
    IMG, CROP = 'Blausen 0993 PleuralEffusion.png', (0.20, 0.43, 0.80, 0.84)
    ERASE = [(0.22, 0.0, 0.75, 0.08), (0.26, 0.38, 0.31, 0.44), (0.85, 0.42, 0.90, 0.48)]

    def membrane(self, center, damaged):
        w, h = 4.6, 2.3
        frame = RoundedRectangle(corner_radius=0.15, width=w, height=h, stroke_color=MUTED, stroke_width=2).move_to(center)
        vessel = Rectangle(width=w - 0.1, height=0.75, fill_color='#C0392B', fill_opacity=0.25, stroke_width=0).move_to(center + UP * 0.72)
        vlab = T('capilar', 15, MUTED).move_to(vessel.get_corner(UR) + LEFT * 0.4 + DOWN * 0.15)
        wall = VGroup()
        n = 9
        for i in range(n):
            x = center[0] - w / 2 + 0.3 + i * (w - 0.6) / (n - 1)
            gap = 0.08 if not damaged or i % 3 else 0.32
            wall.add(Line([x - (w - 0.6) / (n - 1) / 2 + gap / 2, center[1] + 0.3, 0], [x + (w - 0.6) / (n - 1) / 2 - gap / 2, center[1] + 0.3, 0],
                          color='#E8B4B8', stroke_width=9))
        space = T('espacio pleural', 15, MUTED).move_to(center + DOWN * 0.85 + RIGHT * 1.4)
        return VGroup(frame, vessel, vlab, wall, space)

    def cross(self, center, damaged):
        rng = np.random.default_rng(5 if damaged else 2)
        anims, dots = [], VGroup()
        if not damaged:
            pass
        for i in range(14):
            x = center[0] + rng.uniform(-1.9, 1.9)
            d = Dot([x, center[1] + 0.75 + rng.uniform(-0.2, 0.2), 0], radius=0.05, color=BLUE_)
            dots.add(d); anims.append(d.animate.shift(DOWN * rng.uniform(1.1, 1.6)))
        for i in range(5):
            x = center[0] - 2.3 + 0.3 + (3 * i % 9) * (4.0 / 8)
            p = Dot([x, center[1] + 0.75, 0], radius=0.1, color=AMBER).set_stroke(WHITE, 1)
            dots.add(p)
            if damaged:
                anims.append(p.animate.shift(DOWN * rng.uniform(1.1, 1.5)))
            else:                                           # la pleura sana retiene las proteínas
                anims.append(p.animate(rate_func=there_and_back).shift(DOWN * 0.38))
        return dots, anims

    def construct(self):
        title(self, 'Derrame pleural: trasudado o exudado', 'Qué cruza la pleura decide el tipo', BLUE_)
        img = self.lamina(height=5.4, center=LEFT * 3.4 + DOWN * 0.55)
        P = self.P
        glow = Polygon(*[P(x, y) for x, y in [(0.555, 0.735), (0.62, 0.765), (0.68, 0.775), (0.725, 0.76), (0.73, 0.79), (0.70, 0.805), (0.60, 0.795), (0.555, 0.77)]],
                       fill_color=BLUE_, fill_opacity=0.0, stroke_width=0)
        lab = tag('Líquido en el espacio pleural', BLUE_, 18).next_to(img, DOWN, buff=0.1)
        self.add(glow)
        self.play(glow.animate.set_fill(opacity=0.55), FadeIn(lab), run_time=1.0)
        self.play(glow.animate.set_fill(opacity=0.2), run_time=0.6)
        self.play(glow.animate.set_fill(opacity=0.55), run_time=0.6)
        # membrana: trasudado
        c1 = RIGHT * 3.6 + UP * 1.0
        m1 = self.membrane(c1, False)
        t1 = VGroup(T('Trasudado', 24, BLUE_, bold=True), T('pleura sana · pasa solo agua, por presión', 17, INK),
                    T('insuficiencia cardíaca, cirrosis, nefrosis', 16, MUTED)).arrange(DOWN, aligned_edge=LEFT, buff=0.04).next_to(m1, DOWN, aligned_edge=LEFT, buff=0.08)
        self.play(FadeIn(m1), FadeIn(t1[0]), run_time=0.7)
        d1, a1 = self.cross(c1, False)
        self.add(d1)
        self.play(*a1, FadeIn(t1[1:]), run_time=1.8)
        self.play(FadeOut(m1), FadeOut(d1), FadeOut(t1), run_time=0.5)
        # exudado
        m2 = self.membrane(c1, True)
        t2 = VGroup(T('Exudado', 24, AMBER, bold=True), T('pleura dañada · pasan agua y proteínas', 17, INK),
                    T('neumonía, cáncer, tuberculosis', 16, MUTED)).arrange(DOWN, aligned_edge=LEFT, buff=0.04).next_to(m2, DOWN, aligned_edge=LEFT, buff=0.08)
        self.play(FadeIn(m2), FadeIn(t2[0]), run_time=0.7)
        d2, a2 = self.cross(c1, True)
        self.add(d2)
        self.play(*a2, FadeIn(t2[1:]), run_time=1.8)
        light = VGroup(T('Criterios de Light', 22, INK, bold=True),
                       T('basta uno para decir exudado', 19, AMBER)).arrange(DOWN, aligned_edge=LEFT, buff=0.05).next_to(t2, DOWN, aligned_edge=LEFT, buff=0.3)
        self.play(FadeIn(light), run_time=0.8)
        self.wait(2)


# ------------------------------------------------------------------ resp-22: el alvéolo inundado (distrés)
class Resp22Distres(BlausenScene):
    IMG = 'Blausen 0994 Pneumonia.png'

    def construct(self):
        title(self, 'Distrés respiratorio: el alvéolo inundado', 'Líquido rico en proteínas llena los alvéolos', RED_)
        a = self.lamina(width=5.6, center=LEFT * 3.45 + UP * 0.12, crop=(0.05, 0.085, 0.47, 0.44), credit=False)
        b = self.lamina(width=5.6, center=RIGHT * 3.45 + UP * 0.12, crop=(0.05, 0.565, 0.47, 0.92), credit=False)
        self.add(T(BLAUSEN_CREDIT, 12, MUTED).to_corner(DR, buff=0.06))
        P = self.P
        la = T('Normal: alvéolos con aire', 22, GREEN_, bold=True).next_to(a, UP, buff=0.12)
        lb = T('Distrés: alvéolos con líquido', 22, RED_, bold=True).next_to(b, UP, buff=0.12)
        self.play(FadeIn(la), FadeIn(lb), run_time=0.6)
        na = [(0.12, 0.25), (0.18, 0.32), (0.22, 0.24), (0.27, 0.22), (0.30, 0.32), (0.34, 0.26), (0.37, 0.22), (0.41, 0.22), (0.19, 0.16)]
        nb = [(x, y + 0.48) for x, y in na]
        ea, eb = P(0.47, 0.215, a), P(0.47, 0.695, b)
        for cyc in range(2):
            A = VGroup(*[Dot(ea, radius=0.08, color=BLUE_).set_stroke(WHITE, 1.2) for _ in na])
            B = VGroup(*[Dot(eb, radius=0.08, color=BLUE_).set_stroke(WHITE, 1.2) for _ in nb])
            self.add(A, B)
            self.play(*[d.animate.move_to(P(*p, img=a)) for d, p in zip(A, na)],
                      *[d.animate(rate_func=there_and_back).move_to(eb + LEFT * 0.7) for d in B], run_time=1.4)
            o2 = VGroup(*[Dot(P(*p, img=a), radius=0.06, color=RED_) for p in na])
            self.add(o2)
            self.play(*[d.animate.move_to(P(p[0], 0.39 if p[1] > 0.24 else 0.115, img=a)).set_opacity(0) for d, p in zip(o2, na)],
                      FadeOut(A), FadeOut(B), run_time=1.0)
            if cyc == 0:
                ca = T('El oxígeno pasa a la sangre', 20, GREEN_).next_to(a, DOWN, buff=0.12)
                cb = T('El aire no entra: no hay intercambio', 20, RED_).next_to(b, DOWN, buff=0.12)
                self.play(FadeIn(ca), FadeIn(cb), run_time=0.6)
        hip = tag('Hipoxemia que no mejora con oxígeno', RED_, 20).next_to(cb, DOWN, buff=0.18)
        self.play(FadeIn(hip), run_time=0.6)
        self.wait(0.5)
        vp = VGroup(T('Ventilación protectora', 24, INK, bold=True),
                    T('Volumen corriente bajo: 6 ml/kg de peso ideal', 20, AMBER),
                    T('Presión meseta bajo 30', 20, AMBER),
                    T('PEEP alta: mantiene abiertos los alvéolos', 20, AMBER)).arrange(DOWN, aligned_edge=LEFT, buff=0.08)
        vp.next_to(ca, DOWN, buff=0.18).align_to(a, LEFT)
        for m in vp:
            self.play(FadeIn(m, shift=RIGHT * 0.2), run_time=0.5)
        self.wait(2)


# ------------------------------------------------------------------ ped-05: bronquiolitis (aire que entra y no sale)
class Ped05Bronquiolitis(BlausenScene):
    IMG = 'Bronchitis.png'

    def construct(self):
        title(self, 'Bronquiolitis: aire que entra y no sale', 'En el lactante el bronquiolo es tan pequeño que el edema y el moco lo tapan', BLUE_)
        a = self.lamina(width=5.3, center=LEFT * 3.4 + DOWN * 0.45, crop=(0.04, 0.085, 0.45, 0.48), credit=False)
        b = self.lamina(width=5.3, center=RIGHT * 3.4 + DOWN * 0.45, crop=(0.04, 0.575, 0.45, 0.97), credit=False)
        self.add(T(BLAUSEN_CREDIT, 12, MUTED).to_corner(DR, buff=0.06))
        P = self.P
        la = T('Bronquiolo sano', 24, GREEN_, bold=True).next_to(a, UP, buff=0.12)
        lb = T('Bronquiolitis: edema y moco', 24, RED_, bold=True).next_to(b, UP, buff=0.12)
        self.play(FadeIn(la), FadeIn(lb), run_time=0.6)
        axA = [(0.075, 0.425), (0.14, 0.375), (0.21, 0.315), (0.28, 0.25), (0.34, 0.18), (0.375, 0.14)]
        axB = [(x, y + 0.49) for x, y in axA]
        pa, pb = self.path(axA, img=a), self.path(axB, img=b)
        n = 7
        A = VGroup(*[Dot(pa.get_start(), radius=0.075, color=BLUE_).set_stroke(WHITE, 1.2) for _ in range(n)])
        B = VGroup(*[Dot(pb.get_start(), radius=0.075, color=BLUE_).set_stroke(WHITE, 1.2) for _ in range(n)])
        self.add(A, B)
        trapped = 0
        phase = T('', 22)
        for cyc in range(3):
            ins = T('Inspiración', 22, INK).to_edge(DOWN, buff=0.25)
            self.play(FadeIn(ins, run_time=0.2),
                      *[d.animate.move_to(pa.point_from_proportion(0.55 + 0.4 * i / n)) for i, d in enumerate(A)],
                      *[d.animate.move_to(pb.point_from_proportion(0.55 + 0.4 * i / n)) for i, d in enumerate(B)], run_time=1.5)
            exp = T('Espiración', 22, INK).to_edge(DOWN, buff=0.25)
            # en la espiración la vía se estrecha más: parte del aire queda atrapada
            trapped = min(n, trapped + 2)
            self.play(FadeOut(ins, run_time=0.2), FadeIn(exp, run_time=0.2),
                      *[d.animate.move_to(pa.get_start()) for d in A],
                      *[d.animate.move_to(pb.get_start()) for d in B[trapped:]],
                      *[d.animate.move_to(pb.point_from_proportion(0.8 + 0.18 * i / n)).set_color(AMBER) for i, d in enumerate(B[:trapped])],
                      run_time=1.5)
            self.play(FadeOut(exp), run_time=0.2)
            if cyc == 0:
                plug = Circle(radius=0.35, color=AMBER, stroke_width=5).move_to(pb.point_from_proportion(0.45))
                tp = tag('Edema y moco: la luz se cierra al espirar', AMBER, 18).next_to(b, DOWN, buff=0.1)
                ta = T('El aire entra y sale', 20, GREEN_).next_to(a, DOWN, buff=0.12)
                self.play(Create(plug), FadeIn(tp), FadeIn(ta), run_time=0.8)
        res = VGroup(T('Aire atrapado', 22, AMBER, bold=True), T('sibilancias y retracciones', 20, INK)).arrange(DOWN, buff=0.05)
        res.move_to(pb.point_from_proportion(0.92) + RIGHT * 0.2 + DOWN * 1.1)
        bg = BackgroundRectangle(res, color=BG, fill_opacity=0.85, buff=0.12, corner_radius=0.1)
        self.play(FadeIn(bg), FadeIn(res), *[Indicate(d, color=AMBER) for d in B[:trapped]], run_time=1.2)
        self.wait(1.8)
