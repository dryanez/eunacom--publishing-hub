"""
draw_figures.py
Figuras propias en SVG para las clases (curvas, gráficos y esquemas que no necesitan foto).
Estilo Suizo del reproductor: fondo blanco, tinta negra, pocos colores con significado.

    python classes/scripts/draw_figures.py            # dibuja todas
    python classes/scripts/draw_figures.py resp-01    # solo una clase

Salida: classes/media/biblioteca/<especialidad>/<clase>/NN_nombre__propio.svg
Los datos clínicos de cada figura están escritos en su función, con la fuente cuando aplica.
"""

import json
import math
import os
import sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
LIB = os.path.join(ROOT, 'classes', 'media', 'biblioteca')
SPEC = {'gastro': '01_gastroenterologia', 'resp': '02_neumologia', 'nefro': '03_nefrologia', 'diab': '04_diabetes',
        'endo': '05_endocrinologia', 'hem': '06_hematologia', 'infecto': '07_infectologia', 'reuma': '08_reumatologia',
        'neuro': '09_neurologia', 'cirugia': '10_cirugia', 'derma': '11_dermatologia', 'oftal': '12_oftalmologia',
        'gin': '13_ginecologia', 'ob': '14_obstetricia', 'ped': '15_pediatria', 'sp': '16_salud_publica'}

INK, MUTED, GRID, PAPER = '#111111', '#57534E', '#DCD8CE', '#FFFFFF'
BLUE, RED, GREEN, AMBER, PURPLE, TEAL = '#0369A1', '#B4322A', '#2F6B3F', '#B45309', '#6D28D9', '#0F766E'
FONT = 'Helvetica, Arial, sans-serif'


class SVG:
    def __init__(self, w=1200, h=700):
        self.w, self.h, self.o = w, h, []

    def add(self, s):
        self.o.append(s)

    def rect(self, x, y, w, h, fill='none', stroke=INK, sw=1.5, rx=0, op=1):
        self.add(f'<rect x="{x:.1f}" y="{y:.1f}" width="{w:.1f}" height="{h:.1f}" rx="{rx}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}" opacity="{op}"/>')

    def line(self, x1, y1, x2, y2, stroke=INK, sw=1.5, dash=None, arrow=False):
        d = f' stroke-dasharray="{dash}"' if dash else ''
        m = ' marker-end="url(#ah)"' if arrow else ''
        self.add(f'<line x1="{x1:.1f}" y1="{y1:.1f}" x2="{x2:.1f}" y2="{y2:.1f}" stroke="{stroke}" stroke-width="{sw}"{d}{m}/>')

    def path(self, d, stroke=INK, sw=2.5, fill='none', dash=None, op=1, arrow=False):
        da = f' stroke-dasharray="{dash}"' if dash else ''
        m = ' marker-end="url(#ah)"' if arrow else ''
        self.add(f'<path d="{d}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}" stroke-linejoin="round" stroke-linecap="round" opacity="{op}"{da}{m}/>')

    def poly(self, pts, **kw):
        self.path('M' + ' L'.join(f'{x:.1f},{y:.1f}' for x, y in pts), **kw)

    def circle(self, x, y, r, fill='none', stroke=INK, sw=1.5):
        self.add(f'<circle cx="{x:.1f}" cy="{y:.1f}" r="{r:.1f}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>')

    def ellipse(self, x, y, rx, ry, fill='none', stroke=INK, sw=1.5):
        self.add(f'<ellipse cx="{x:.1f}" cy="{y:.1f}" rx="{rx:.1f}" ry="{ry:.1f}" fill="{fill}" stroke="{stroke}" stroke-width="{sw}"/>')

    def text(self, x, y, s, size=16, fill=INK, anchor='start', weight=400, rot=0, italic=False):
        tr = f' transform="rotate({rot} {x:.1f} {y:.1f})"' if rot else ''
        st = ' font-style="italic"' if italic else ''
        s = str(s).replace('&', '&amp;').replace('<', '&lt;').replace('>', '&gt;')
        self.add(f'<text x="{x:.1f}" y="{y:.1f}" font-size="{size}" fill="{fill}" text-anchor="{anchor}" font-weight="{weight}"{st}{tr}>{s}</text>')

    def title(self, s, sub=None):
        self.text(40, 46, s, 26, weight=700)
        if sub:
            self.text(40, 74, sub, 15, MUTED)

    def svg(self):
        head = (f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {self.w} {self.h}" font-family="{FONT}">'
                f'<defs><marker id="ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">'
                f'<path d="M0,0 L10,5 L0,10 z" fill="{INK}"/></marker></defs>'
                f'<rect width="{self.w}" height="{self.h}" fill="{PAPER}"/>')
        return head + ''.join(self.o) + '</svg>'


class Axes:
    """Ejes con escala lineal: los datos van en unidades clínicas reales."""

    def __init__(self, s, x0, y0, x1, y1, xmin, xmax, ymin, ymax):
        self.s, self.box = s, (x0, y0, x1, y1)
        self.xmin, self.xmax, self.ymin, self.ymax = xmin, xmax, ymin, ymax

    def X(self, v):
        x0, _, x1, _ = self.box
        return x0 + (v - self.xmin) * (x1 - x0) / (self.xmax - self.xmin)

    def Y(self, v):
        _, y0, _, y1 = self.box
        return y1 - (v - self.ymin) * (y1 - y0) / (self.ymax - self.ymin)

    def grid(self, xs=(), ys=(), xfmt=str, yfmt=str, xlabel='', ylabel=''):
        s = self.s
        x0, y0, x1, y1 = self.box
        for v in ys:
            s.line(x0, self.Y(v), x1, self.Y(v), GRID, 1)
            s.text(x0 - 10, self.Y(v) + 5, yfmt(v), 13, MUTED, 'end')
        for v in xs:
            s.line(self.X(v), y0, self.X(v), y1, GRID, 1)
            s.text(self.X(v), y1 + 22, xfmt(v), 13, MUTED, 'middle')
        s.line(x0, y1, x1, y1, INK, 1.5)
        s.line(x0, y0, x0, y1, INK, 1.5)
        if xlabel:
            s.text((x0 + x1) / 2, y1 + 48, xlabel, 15, INK, 'middle', 600)
        if ylabel:
            s.text(x0 - 58, (y0 + y1) / 2, ylabel, 15, INK, 'middle', 600, rot=-90)

    def curve(self, pts, **kw):
        self.s.poly([(self.X(x), self.Y(y)) for x, y in pts], **kw)


def legend(s, x, y, items, size=15):
    for i, (color, label, dash) in enumerate(items):
        yy = y + i * 26
        s.line(x, yy - 5, x + 34, yy - 5, color, 4, dash)
        s.text(x + 44, yy, label, size)


def gauss(x, mu, sd):
    return math.exp(-0.5 * ((x - mu) / sd) ** 2)


def frange(a, b, n):
    return [a + (b - a) * i / n for i in range(n + 1)]


# ---------------------------------------------------------------------------
# Neumología
# ---------------------------------------------------------------------------
def resp_01():
    s = SVG()
    s.title('Curvas flujo-volumen', 'Espiración hacia arriba, inspiración hacia abajo. CPT a la izquierda, VR a la derecha.')
    a = Axes(s, 120, 110, 1080, 620, 0, 7, -6, 10)
    a.grid(xs=range(0, 8), ys=range(-6, 11, 2), xlabel='Volumen (L)', ylabel='Flujo (L/s)')
    s.line(a.X(0), a.Y(0), a.X(7), a.Y(0), INK, 1.2)

    def loop(tlc, rv, pef, shape, color, dash=None):
        fvc = rv - tlc
        exp, insp = [], []
        for t in frange(0, 1, 80):
            v = tlc + fvc * t
            if t < 0.12:
                f = pef * math.sin(t / 0.12 * math.pi / 2)
            else:
                u = (t - 0.12) / 0.88
                f = pef * (1 - u) ** shape
            exp.append((v, f))
        for t in frange(0, 1, 60):
            v = rv - fvc * t
            insp.append((v, -0.75 * pef * math.sin(math.pi * t) ** 0.9 * (0.75 if shape > 1.4 else 1)))
        a.curve(exp + insp, stroke=color, sw=3.5, dash=dash)

    loop(1.0, 5.6, 9.0, 1.0, INK)            # normal: descenso lineal
    loop(0.4, 5.8, 4.2, 2.6, RED)            # obstructiva: pico bajo, curva excavada, volúmenes altos
    loop(2.4, 5.4, 7.0, 1.0, BLUE, '10 6')   # restrictiva: estrecha, forma conservada
    legend(s, 820, 150, [(INK, 'Normal', None), (RED, 'Obstructiva: excavada', None), (BLUE, 'Restrictiva: estrecha', '10 6')])
    s.text(a.X(1.4), a.Y(9.4), 'Flujo espiratorio máximo', 13, MUTED)
    s.text(a.X(3.2), a.Y(2.6), 'Concavidad = obstrucción', 13, RED, weight=700)
    return s


def resp_03():
    s = SVG()
    s.title('Prueba broncodilatadora positiva', 'Curva volumen-tiempo antes y 15 minutos después de 400 µg de salbutamol')
    a = Axes(s, 120, 110, 760, 620, 0, 6, 0, 4.5)
    a.grid(xs=range(0, 7), ys=[0, 1, 2, 3, 4], xlabel='Tiempo (s)', ylabel='Volumen espirado (L)')

    def vt(fvc, fev1):
        k = -math.log(1 - fev1 / fvc)
        return [(t, fvc * (1 - math.exp(-k * t))) for t in frange(0, 6, 120)]
    a.curve(vt(3.3, 1.9), stroke=MUTED, sw=3.5)
    a.curve(vt(3.6, 2.35), stroke=GREEN, sw=3.5)
    s.line(a.X(1), a.Y(0), a.X(1), a.Y(4.3), INK, 1.5, '6 5')
    s.text(a.X(1) + 8, a.Y(4.25), '1 segundo', 13, INK, weight=700)
    for v, c, t in [(1.9, MUTED, 'VEF1 pre 1,90 L'), (2.35, GREEN, 'VEF1 post 2,35 L')]:
        s.circle(a.X(1), a.Y(v), 6, c, c)
        s.text(a.X(1) + 14, a.Y(v) + 5, t, 14, c, weight=700)
    legend(s, 400, 560, [(MUTED, 'Basal', None), (GREEN, 'Post broncodilatador', None)])
    x = 810
    s.rect(x, 130, 350, 300, '#F5F3EE', GRID, 1, 8)
    s.text(x + 20, 168, 'Cambio en VEF1', 18, weight=700)
    s.text(x + 20, 205, '+450 mL y +24 %', 24, GREEN, weight=700)
    s.text(x + 20, 250, 'Positiva si aumenta:', 15)
    s.text(x + 20, 278, '≥ 12 %  y  ≥ 200 mL', 20, weight=700)
    s.text(x + 20, 320, 'Reversibilidad: apoya asma.', 15, MUTED)
    s.text(x + 20, 345, 'En EPOC, VEF1/CVF post-BD < 0,7', 15, MUTED)
    s.text(x + 20, 370, 'persiste aunque mejore algo.', 15, MUTED)
    return s


def resp_24():
    s = SVG()
    s.title('Monóxido de carbono y curva de disociación de la hemoglobina',
            'El CO ocupa hemoglobina (afinidad ~240 veces mayor) y desvía la curva a la izquierda')
    a = Axes(s, 120, 110, 1000, 620, 0, 100, 0, 100)
    a.grid(xs=range(0, 101, 20), ys=range(0, 101, 20), xlabel='PaO2 (mmHg)', ylabel='Saturación / contenido de O2 (%)')

    def hill(p50, cap, n=2.7):
        return [(p, cap * p ** n / (p ** n + p50 ** n)) for p in frange(0.5, 100, 120)]
    a.curve(hill(26.8, 100), stroke=INK, sw=3.5)
    a.curve(hill(17, 60), stroke=RED, sw=3.5)
    s.line(a.X(26.8), a.Y(0), a.X(26.8), a.Y(50), MUTED, 1, '5 5')
    s.text(a.X(26.8) + 6, a.Y(4), 'P50 normal 27', 12, MUTED)
    legend(s, 620, 470, [(INK, 'Normal', None), (RED, 'COHb 40 %: menos O2 y lo suelta peor', None)])
    s.text(a.X(55), a.Y(68), 'Saturómetro: puede marcar normal', 15, RED, weight=700)
    s.text(a.X(55), a.Y(62), '(no distingue COHb de O2Hb)', 14, RED)
    return s


# ---------------------------------------------------------------------------
# Gastroenterología
# ---------------------------------------------------------------------------
def gastro_14():
    s = SVG(1200, 690)
    s.title('Hepatitis B aguda que se resuelve: marcadores en el tiempo', 'Semanas desde el contagio (esquema)')
    a = Axes(s, 120, 200, 1120, 620, 0, 52, 0, 100)
    a.grid(xs=range(0, 53, 4), ys=[], xlabel='Semanas')

    def bump(t0, t1, t2, t3, h):     # sube entre t0-t1, meseta, baja entre t2-t3
        def f(t):
            if t < t0 or t > t3:
                return 0
            if t < t1:
                return h * (t - t0) / (t1 - t0)
            if t <= t2:
                return h
            return h * (t3 - t) / (t3 - t2)
        return [(t, f(t)) for t in frange(0, 52, 260)]
    a.add = None
    s.rect(a.X(22), 200, a.X(26) - a.X(22), 420, '#FEF3C7', 'none', 0)
    s.text(a.X(24), 222, 'Período de ventana', 13, AMBER, 'middle', 700)
    s.text(a.X(24), 240, 'solo anti-HBc IgM', 12, AMBER, 'middle')
    series = [
        (bump(4, 10, 14, 22, 70), BLUE, 'HBsAg'),
        (bump(6, 9, 12, 16, 45), PURPLE, 'HBeAg'),
        (bump(9, 13, 18, 32, 55), RED, 'Anti-HBc IgM'),
        (bump(9, 16, 60, 61, 85), INK, 'Anti-HBc total (para siempre)'),
        (bump(16, 22, 60, 61, 35), '#8B5E3C', 'Anti-HBe'),
        (bump(26, 34, 60, 61, 65), GREEN, 'Anti-HBs = inmunidad'),
        (bump(8, 13, 15, 22, 40), AMBER, 'ALT (transaminasas)'),
    ]
    for pts, c, _ in series:
        a.curve(pts, stroke=c, sw=3.5, dash='8 6' if 'ALT' in _ else None)
    for i, (_, c, l) in enumerate(series):
        legend(s, 120 + (i % 4) * 255, 112 + (i // 4) * 28, [(c, l, '8 6' if 'ALT' in l else None)], 14)
    return s


# ---------------------------------------------------------------------------
# Hematología
# ---------------------------------------------------------------------------
def hem_19():
    s = SVG()
    s.title('Electroforesis de proteínas: pico monoclonal', 'Una banda alta y angosta en gamma = un solo clon de células plasmáticas')
    for k, (x0, title, mspike) in enumerate([(80, 'Normal', False), (640, 'Mieloma múltiple', True)]):
        a = Axes(s, x0 + 20, 150, x0 + 500, 560, 0, 1, 0, 1.15)
        s.line(x0 + 20, 560, x0 + 500, 560, INK, 1.5)
        s.text(x0 + 260, 125, title, 20, RED if mspike else INK, 'middle', 700)
        peaks = [(0.14, 0.045, 1.0), (0.33, 0.03, 0.12), (0.45, 0.04, 0.2), (0.6, 0.04, 0.22), (0.82, 0.08, 0.32)]
        if mspike:
            peaks[-1] = (0.82, 0.08, 0.12)
            peaks.append((0.8, 0.018, 1.05))
            peaks[0] = (0.14, 0.045, 0.8)
        pts = [(x, sum(h * gauss(x, m, sd) for m, sd, h in peaks)) for x in frange(0, 1, 300)]
        a.curve(pts + [(1, 0), (0, 0)], stroke=INK, sw=2.5, fill='#E8F0F6' if not mspike else '#FBEAE8')
        for x, lab in [(0.14, 'Albúmina'), (0.33, 'α1'), (0.45, 'α2'), (0.6, 'β'), (0.82, 'γ')]:
            s.text(a.X(x), 590, lab, 15, MUTED, 'middle', 600)
        if mspike:
            s.text(a.X(0.8), a.Y(1.08) - 6, 'Pico M', 17, RED, 'middle', 700)
    s.text(600, 650, 'Busca también: proteinuria de Bence Jones, CRAB (hipercalcemia, falla renal, anemia, lesiones líticas)', 15, MUTED, 'middle')
    return s


# ---------------------------------------------------------------------------
# Obstetricia
# ---------------------------------------------------------------------------
def _wave(a, x0, x1, base, peak, dia, color, periods=3, a_wave=None):
    pts = []
    for x in frange(x0, x1, 400):
        ph = ((x - x0) / (x1 - x0) * periods) % 1
        if a_wave is None:
            v = base + (peak * math.sin(ph / 0.22 * math.pi / 2) if ph < 0.22 else
                        dia + (peak - dia) * (1 - (ph - 0.22) / 0.78) ** 2.2)
        else:   # ductus venoso: onda S, onda D, onda a
            v = base + peak * gauss(ph, 0.18, 0.07) + 0.75 * peak * gauss(ph, 0.55, 0.08) + a_wave * gauss(ph, 0.86, 0.05) + peak * 0.25
        pts.append((x, v))
    a.curve(pts, stroke=color, sw=3)


def ob_04():
    s = SVG(1200, 760)
    s.title('Doppler fetal en restricción del crecimiento', 'Arteria umbilical: de normal a reverso. Ductus venoso: onda a')
    rows = [('Arteria umbilical normal', 0.35, GREEN, 'Flujo diastólico presente'),
            ('Diástole ausente (AEDV)', 0.0, AMBER, 'Interrupción: extrae pronto'),
            ('Diástole reversa (REDV)', -0.25, RED, 'Flujo invertido: emergencia')]
    for i, (lab, dia, c, note) in enumerate(rows):
        y0 = 100 + i * 150
        a = Axes(s, 300, y0, 900, y0 + 120, 0, 3, -0.5, 1.1)
        s.line(300, a.Y(0), 900, a.Y(0), MUTED, 1, '4 4')
        _wave(a, 0, 3, 0, 1, dia, c)
        s.text(40, y0 + 55, lab, 16, c, weight=700)
        s.text(930, y0 + 55, note, 15, c, weight=600)
    y0 = 560
    s.text(40, y0 + 30, 'Ductus venoso', 16, weight=700)
    for j, (aw, c, lab, x0) in enumerate([(0.25, GREEN, 'Onda a positiva: normal', 300), (-0.9, RED, 'Onda a reversa: acidemia', 640)]):
        a = Axes(s, x0, y0, x0 + 300, y0 + 130, 0, 2, -1, 1.6)
        s.line(x0, a.Y(0), x0 + 300, a.Y(0), MUTED, 1, '4 4')
        _wave(a, 0, 2, 0, 1, 0, c, 2, aw)
        s.text(x0 + 150, y0 + 160, lab, 15, c, 'middle', 700)
    return s


def ob_20():
    s = SVG()
    s.title('Doppler de arteria cerebral media en aloinmunización', 'Velocidad sistólica máxima (VSM) sobre 1,5 MoM sugiere anemia fetal moderada a severa')
    for i, (lab, pk, c, note) in enumerate([('Feto sin anemia', 0.62, GREEN, 'VSM < 1,5 MoM: control'),
                                           ('Feto con anemia', 1.0, RED, 'VSM > 1,5 MoM: cordocentesis / transfusión')]):
        y0 = 140 + i * 230
        a = Axes(s, 300, y0, 900, y0 + 170, 0, 3, -0.1, 1.1)
        s.line(300, a.Y(0), 900, a.Y(0), MUTED, 1, '4 4')
        _wave(a, 0, 3, 0, pk, 0.12 * pk, c)
        s.line(300, a.Y(pk), 900, a.Y(pk), c, 1, '6 5')
        s.text(40, y0 + 90, lab, 17, c, weight=700)
        s.text(930, y0 + 90, note, 15, c, weight=600)
    s.text(600, 650, 'La sangre anémica es menos viscosa y el gasto aumenta: la velocidad sube.', 15, MUTED, 'middle')
    return s


# ---------------------------------------------------------------------------
# Salud pública
# ---------------------------------------------------------------------------
def sp_08():
    s = SVG()
    s.title('Curva ROC', 'Cada punto es un punto de corte. Mientras más se acerca a la esquina superior izquierda, mejor el examen.')
    a = Axes(s, 140, 110, 620, 590, 0, 1, 0, 1)
    a.grid(xs=[0, .2, .4, .6, .8, 1], ys=[0, .2, .4, .6, .8, 1], xfmt=lambda v: f'{v:.1f}'.replace('.', ','),
           yfmt=lambda v: f'{v:.1f}'.replace('.', ','), xlabel='1 − especificidad (falsos positivos)', ylabel='Sensibilidad')
    a.curve([(0, 0), (1, 1)], stroke=MUTED, sw=2.5, dash='8 6')
    a.curve([(x, x ** 0.35) for x in frange(0, 1, 100)], stroke=BLUE, sw=3.5)
    a.curve([(x, x ** 0.08) for x in frange(0, 1, 100)], stroke=GREEN, sw=3.5)
    pt = (0.15, 0.15 ** 0.35)
    s.circle(a.X(pt[0]), a.Y(pt[1]), 8, RED, RED)
    s.text(a.X(pt[0]) + 14, a.Y(pt[1]) + 22, 'Corte elegido', 14, RED, weight=700)
    legend(s, 700, 170, [(GREEN, 'Excelente: AUC ≈ 0,95', None), (BLUE, 'Buena: AUC ≈ 0,75', None), (MUTED, 'Inútil: AUC 0,5 (azar)', '8 6')])
    s.text(700, 300, 'Bajar el punto de corte:', 16, weight=700)
    s.text(700, 326, '↑ sensibilidad, ↓ especificidad', 16)
    s.text(700, 370, 'Área bajo la curva (AUC):', 16, weight=700)
    s.text(700, 396, 'capacidad global de discriminar', 16)
    s.text(700, 422, 'enfermos de sanos.', 16)
    return s


# ---------------------------------------------------------------------------
# Ginecología
# ---------------------------------------------------------------------------
def gin_01():
    s = SVG(1200, 760)
    s.title('Ciclo menstrual de 28 días', 'Hormonas, ovario y endometrio')
    a = Axes(s, 140, 100, 1100, 470, 1, 28, 0, 100)
    a.grid(xs=[1, 7, 14, 21, 28], ys=[], xlabel='')
    s.rect(a.X(1), 100, a.X(14) - a.X(1), 370, '#F0F9FF', 'none', 0)
    s.rect(a.X(14), 100, a.X(28) - a.X(14), 370, '#FFFBEB', 'none', 0)
    s.text(a.X(7.5), 122, 'FASE FOLICULAR', 13, BLUE, 'middle', 700)
    s.text(a.X(21), 122, 'FASE LÚTEA', 13, AMBER, 'middle', 700)
    s.line(a.X(14), 100, a.X(14), 470, INK, 1.5, '6 5')
    s.text(a.X(14), 92, 'Ovulación (día 14)', 13, INK, 'middle', 700)
    D = frange(1, 28, 270)
    lh = [(d, 10 + 78 * gauss(d, 13.6, 0.7)) for d in D]
    fsh = [(d, 14 + 10 * gauss(d, 3, 3) + 22 * gauss(d, 13.6, 0.8) + 6 * gauss(d, 28, 2)) for d in D]
    e2 = [(d, 8 + 52 * gauss(d, 12.6, 1.8) + 26 * gauss(d, 21, 3)) for d in D]
    p4 = [(d, 4 + 62 * gauss(d, 21, 3.2) * (d > 14)) for d in D]
    for pts, c, l, dash in [(lh, RED, 'LH (peak día 13-14)', None), (fsh, PURPLE, 'FSH', None),
                            (e2, BLUE, 'Estradiol', None), (p4, AMBER, 'Progesterona', '9 6')]:
        a.curve(pts, stroke=c, sw=3.2, dash=dash)
    legend(s, 860, 160, [(RED, 'LH', None), (PURPLE, 'FSH', None), (BLUE, 'Estradiol', None), (AMBER, 'Progesterona', '9 6')])
    # endometrio
    y = 520
    s.text(40, y + 40, 'Endometrio', 15, weight=700)
    for d0, d1, c, l in [(1, 5, RED, 'Menstrual'), (5, 14, BLUE, 'Proliferativo'), (14, 28, AMBER, 'Secretor')]:
        s.rect(a.X(d0), y, a.X(d1) - a.X(d0), 60, c, 'none', 0, 0, 0.18)
        s.text((a.X(d0) + a.X(d1)) / 2, y + 36, l, 15, c, 'middle', 700)
    th = [(d, (2 if d < 5 else 2 + 8 * (d - 5) / 9 if d < 14 else 10 + 4 * min(1, (d - 14) / 7))) for d in D]
    a2 = Axes(s, 140, y, 1100, y + 60, 1, 28, 0, 16)
    a2.curve(th, stroke=INK, sw=2.5)
    # temperatura basal
    y = 620
    s.text(40, y + 40, 'T° basal', 15, weight=700)
    a3 = Axes(s, 140, y, 1100, y + 70, 1, 28, 36.2, 37.0)
    a3.curve([(d, 36.4 if d < 14.5 else 36.85) for d in D], stroke=INK, sw=2.5)
    s.text(a.X(21), y + 14, '+0,3 a 0,5 °C por progesterona', 13, MUTED, 'middle')
    for d in [1, 7, 14, 21, 28]:
        s.text(a.X(d), 745, f'Día {d}', 13, MUTED, 'middle')
    return s


# ---------------------------------------------------------------------------
# Pediatría
# ---------------------------------------------------------------------------
def ped_01():
    s = SVG(1200, 760)
    s.title('Peso para la edad, niñas de 0 a 2 años (OMS 2006)', 'Caso: lactante que cae de carril. La tendencia importa más que un punto aislado.')
    t = json.load(open(os.path.join(ROOT, 'classes', 'scripts', 'data', 'oms', 'wfa_girls_0_5_zscores.json')))
    t = [r for r in t if int(r['Month']) <= 24]
    a = Axes(s, 120, 110, 980, 660, 0, 24, 1, 16)
    a.grid(xs=range(0, 25, 2), ys=range(2, 17, 2), xlabel='Edad (meses)', ylabel='Peso (kg)')
    col = {'SD3neg': RED, 'SD2neg': RED, 'SD1neg': AMBER, 'SD0': GREEN, 'SD1': AMBER, 'SD2': RED, 'SD3': RED}
    lab = {'SD3neg': '−3', 'SD2neg': '−2', 'SD1neg': '−1', 'SD0': '0', 'SD1': '+1', 'SD2': '+2', 'SD3': '+3'}
    for k in col:
        pts = [(int(r['Month']), float(r[k])) for r in t]
        a.curve(pts, stroke=col[k], sw=2.6 if k == 'SD0' else 2, dash=None if k in ('SD0', 'SD2neg', 'SD2') else '7 5')
        s.text(a.X(24) + 8, a.Y(pts[-1][1]) + 5, lab[k] + ' DE', 13, col[k], weight=700)
    case = [(0, 3.3), (1, 4.3), (2, 5.3), (4, 6.2), (6, 6.5), (8, 6.6), (10, 6.6), (12, 6.7)]
    a.curve(case, stroke=BLUE, sw=3.5)
    for m, w in case:
        s.circle(a.X(m), a.Y(w), 6, BLUE, '#FFFFFF', 2)
    s.text(a.X(12) + 12, a.Y(6.7) + 26, '12 meses: 6,7 kg', 15, BLUE, weight=700)
    s.text(a.X(12) + 12, a.Y(6.7) + 46, 'P/E bajo −2 DE: desnutrición', 15, BLUE)
    x = 1010
    for i, (c, l) in enumerate([(GREEN, 'Mediana'), (AMBER, '±1 DE: vigilar'), (RED, '±2 DE: anormal')]):
        s.line(x, 140 + i * 26, x + 30, 140 + i * 26, c, 3)
        s.text(x + 36, 145 + i * 26, l, 13)
    return s


def ped_02():
    s = SVG(1200, 720)
    s.title('Hitos del desarrollo psicomotor', 'Edad habitual de logro (barra) y edad límite de alerta (punto rojo)')
    hitos = [('Sonrisa social', 1, 2, 3), ('Sostén cefálico', 2, 3, 4), ('Prensión voluntaria', 3, 5, 6),
             ('Se sienta sin apoyo', 6, 7, 9), ('Gatea', 8, 9, 12), ('Pinza fina', 9, 10, 12),
             ('Camina solo', 11, 13, 18), ('Primeras palabras', 10, 12, 15), ('Frases de 2 palabras', 18, 24, 30)]
    a = Axes(s, 300, 110, 1150, 620, 0, 30, 0, len(hitos))
    a.grid(xs=range(0, 31, 3), ys=[], xlabel='Edad (meses)')
    for i, (l, m0, m1, alert) in enumerate(hitos):
        y = a.Y(len(hitos) - i - 0.5)
        s.text(285, y + 5, l, 15, INK, 'end', 600)
        s.rect(a.X(m0), y - 11, a.X(m1) - a.X(m0), 22, BLUE, 'none', 0, 4, 0.75)
        s.circle(a.X(alert), y, 7, RED, RED)
    s.text(300, 705, 'Tamizaje en Chile: EEDP (0 a 2 años) y TEPSI (2 a 5 años). Pérdida de hitos ya logrados: siempre alarma.', 15, MUTED)
    return s


def ped_17():
    s = SVG(1200, 720)
    s.title('Ictericia neonatal: nomograma de Bhutani y zonas de Kramer', 'Bilirrubina según horas de vida (esquema basado en Bhutani 1999, valores aproximados)')
    a = Axes(s, 110, 110, 720, 620, 0, 144, 0, 25)
    a.grid(xs=range(0, 145, 24), ys=range(0, 26, 5), xlabel='Horas de vida', ylabel='Bilirrubina total (mg/dL)')
    H = [12, 24, 36, 48, 60, 72, 84, 96, 108, 120, 132, 144]
    p95 = [5.5, 8.0, 11.7, 15.2, 16.4, 17.4, 17.7, 17.6, 17.5, 17.5, 17.6, 17.7]
    p75 = [4.4, 6.5, 9.7, 13.0, 14.2, 15.2, 15.6, 15.8, 15.9, 16.0, 16.1, 16.2]
    p40 = [3.2, 4.6, 7.6, 8.8, 10.2, 11.3, 12.6, 13.3, 13.6, 13.8, 14.2, 14.5]
    top = [(h, 25) for h in reversed(H)]
    for pts, nxt, c, l in [(p95, None, RED, 'Riesgo alto (> p95)'), (p75, p95, AMBER, 'Intermedio alto'), (p40, p75, '#CA8A04', 'Intermedio bajo')]:
        upper = top if nxt is None else [(h, v) for h, v in zip(reversed(H), reversed(nxt))]
        a.curve(list(zip(H, pts)) + upper, stroke='none', fill=c, op=0.12, sw=0)
        a.curve(list(zip(H, pts)), stroke=c, sw=3)
    for v, l, c in [(p95[-1], 'p95', RED), (p75[-1], 'p75', AMBER), (p40[-1], 'p40', '#CA8A04')]:
        s.text(a.X(144) + 6, a.Y(v) + 5, l, 13, c, weight=700)
    s.text(a.X(100), a.Y(21), 'Riesgo alto', 15, RED, 'middle', 700)
    s.text(a.X(100), a.Y(6), 'Riesgo bajo', 15, GREEN, 'middle', 700)
    s.text(a.X(14), a.Y(23.5), 'Antes de 24 h: siempre patológica', 14, RED, weight=700)
    # Kramer: progresión cefalocaudal (cuerpo esquemático)
    x0, y0 = 960, 120
    s.text(x0, 112, 'Zonas de Kramer', 18, INK, 'middle', 700)
    shades = ['#FEF9C3', '#FDE68A', '#FCD34D', '#FBBF24', '#F59E0B']
    s.circle(x0, y0 + 38, 32, shades[0], INK, 2)                 # 1 cabeza y cuello
    s.rect(x0 - 45, y0 + 74, 90, 70, shades[1], INK, 2, 12)     # 2 tronco superior
    s.rect(x0 - 45, y0 + 144, 90, 110, shades[2], INK, 2, 12)   # 3 tronco inferior y muslos
    s.rect(x0 - 84, y0 + 78, 32, 120, shades[3], INK, 2, 10)    # 4 brazos
    s.rect(x0 + 52, y0 + 78, 32, 120, shades[3], INK, 2, 10)
    s.rect(x0 - 40, y0 + 254, 34, 90, shades[3], INK, 2, 10)    # 4 piernas
    s.rect(x0 + 6, y0 + 254, 34, 90, shades[3], INK, 2, 10)
    for xx, yy in [(x0 - 68, y0 + 210), (x0 + 68, y0 + 210), (x0 - 23, y0 + 354), (x0 + 23, y0 + 354)]:
        s.ellipse(xx, yy, 15, 10, shades[4], INK, 2)            # 5 palmas y plantas
    for n, (xx, yy) in enumerate([(x0, y0 + 44), (x0, y0 + 115), (x0, y0 + 205), (x0 - 68, y0 + 145), (x0 + 68, y0 + 215)], 1):
        s.text(xx, yy, str(n), 17, INK, 'middle', 700)
    for i, (n, l, v) in enumerate([(1, 'Cabeza y cuello', '≈ 5 mg/dL'), (2, 'Tronco superior', '≈ 9'), (3, 'Tronco inferior y muslos', '≈ 12'),
                                   (4, 'Brazos y piernas', '≈ 15'), (5, 'Palmas y plantas', '> 15')]):
        s.text(820, 515 + i * 24, f'{n}. {l}: {v}', 14, INK)
    return s


# ---------------------------------------------------------------------------
# Endocrinología / Nefrología
# ---------------------------------------------------------------------------
def endo_18():
    s = SVG()
    s.title('Densitometría ósea (DEXA): cómo leer el T-score', 'Mujer de 64 años, columna lumbar L1-L4')
    x0, x1, y = 120, 1080, 300
    def X(t):
        return x0 + (t + 4) * (x1 - x0) / 6
    for t0, t1, c, l in [(-4, -2.5, RED, 'Osteoporosis'), (-2.5, -1, AMBER, 'Osteopenia'), (-1, 2, GREEN, 'Normal')]:
        s.rect(X(t0), y, X(t1) - X(t0), 70, c, 'none', 0, 0, 0.22)
        s.text((X(t0) + X(t1)) / 2, y + 44, l, 20, c, 'middle', 700)
    for t in [-4, -3, -2.5, -2, -1, 0, 1, 2]:
        s.line(X(t), y + 70, X(t), y + 82, INK, 1.5)
        s.text(X(t), y + 104, (f'{t:+.1f}' if t % 1 else f'{t:+d}').replace('.', ',').replace('+0', '0'), 15, INK, 'middle', 600)
    s.text((x0 + x1) / 2, y + 140, 'T-score (desviaciones estándar respecto del adulto joven)', 15, MUTED, 'middle')
    s.line(X(-2.8), y - 60, X(-2.8), y + 70, INK, 3)
    s.circle(X(-2.8), y - 60, 9, INK, INK)
    s.text(X(-2.8) + 14, y - 66, 'Paciente: T = −2,8', 20, INK, weight=700)
    s.rect(120, 520, 960, 120, '#F5F3EE', GRID, 1, 8)
    s.text(140, 555, 'T-score ≤ −2,5 = osteoporosis (en posmenopáusicas y hombres > 50 años).', 16, weight=700)
    s.text(140, 585, 'Una fractura por fragilidad de cadera o vértebra es osteoporosis aunque el T-score no llegue.', 16)
    s.text(140, 615, 'Z-score (comparado con su edad) se usa en premenopáusicas, hombres jóvenes y niños.', 16, MUTED)
    return s


def nefro_18():
    s = SVG(1200, 720)
    s.title('Clasificación KDIGO de la enfermedad renal crónica', 'Pronóstico según filtrado (G) y albuminuria (A). El color es el riesgo.')
    G = [('G1', 'Normal o alto', '≥ 90'), ('G2', 'Levemente disminuido', '60 – 89'), ('G3a', 'Leve a moderado', '45 – 59'),
         ('G3b', 'Moderado a severo', '30 – 44'), ('G4', 'Severamente disminuido', '15 – 29'), ('G5', 'Falla renal', '< 15')]
    A = [('A1', '< 30 mg/g'), ('A2', '30 – 300 mg/g'), ('A3', '> 300 mg/g')]
    C = {'g': '#86EFAC', 'y': '#FDE68A', 'o': '#FDBA74', 'r': '#F87171', 'R': '#B91C1C'}
    grid = ['gyo', 'gyo', 'yor', 'orR', 'rRR', 'RRR']
    x0, y0, cw, ch = 520, 150, 200, 76
    for j, (a, v) in enumerate(A):
        s.text(x0 + cw * j + cw / 2, y0 - 34, a, 18, INK, 'middle', 700)
        s.text(x0 + cw * j + cw / 2, y0 - 12, v, 14, MUTED, 'middle')
    for i, (g, l, v) in enumerate(G):
        y = y0 + ch * i
        s.text(60, y + 32, g, 18, INK, weight=700)
        s.text(120, y + 32, l, 15)
        s.text(120, y + 54, f'FG {v} mL/min/1,73 m²', 13, MUTED)
        for j in range(3):
            s.rect(x0 + cw * j, y, cw, ch, C[grid[i][j]], '#FFFFFF', 3)
    lx = 60
    for k, (c, l) in enumerate([('g', 'Bajo riesgo'), ('y', 'Moderado'), ('o', 'Alto'), ('r', 'Muy alto'), ('R', 'Muy alto')][:4]):
        s.rect(lx + k * 200, 640, 26, 20, C[c], 'none', 0, 3)
        s.text(lx + k * 200 + 34, 656, l, 14)
    s.text(1140, 700, 'ERC: daño o FG < 60 por más de 3 meses', 13, MUTED, 'end')
    return s


# ---------------------------------------------------------------------------
# Registro
# ---------------------------------------------------------------------------
FIGURES = {
    'resp-01': [('flujo-volumen', resp_01)],
    'resp-03': [('prueba-broncodilatadora', resp_03)],
    'resp-24': [('co-curva-disociacion', resp_24)],
    'gastro-14': [('serologia-vhb', gastro_14)],
    'hem-19': [('electroforesis-pico-m', hem_19)],
    'ob-04': [('doppler-umbilical-ductus', ob_04)],
    'ob-20': [('doppler-acm', ob_20)],
    'sp-08': [('curva-roc', sp_08)],
    'gin-01': [('ciclo-menstrual', gin_01)],
    'ped-01': [('peso-edad-oms-ninas', ped_01)],
    'ped-02': [('hitos-dsm', ped_02)],
    'ped-17': [('bhutani-kramer', ped_17)],
    'endo-18': [('dexa-t-score', endo_18)],
    'nefro-18': [('kdigo', nefro_18)],
}


def main(only=None):
    try:
        import draw_schemes  # esquemas (segunda parte), si existe
        FIGURES.update(draw_schemes.FIGURES)
    except ImportError:
        pass
    done = []
    for cid, figs in FIGURES.items():
        if only and cid not in only:
            continue
        d = os.path.join(LIB, SPEC[cid.split('-')[0]], cid)
        os.makedirs(d, exist_ok=True)
        for k, (name, fn) in enumerate(figs, 1):
            path = os.path.join(d, f'S{k}_{name}__propio.svg')
            open(path, 'w', encoding='utf-8').write(fn().svg())
            done.append(os.path.relpath(path, ROOT))
    print('\n'.join(done))


if __name__ == '__main__':
    sys.path.insert(0, os.path.dirname(__file__))
    main(set(sys.argv[1:]) or None)
