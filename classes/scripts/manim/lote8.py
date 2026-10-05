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
