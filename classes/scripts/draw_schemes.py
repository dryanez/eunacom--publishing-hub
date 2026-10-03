"""
draw_schemes.py
Segunda parte de las figuras propias: esquemas (anatomía simplificada, clasificaciones, mecanismos).
Se registra solo en draw_figures.py; correr siempre ese script.
"""

import math
import random

from draw_figures import SVG, Axes, legend, gauss, frange, INK, MUTED, GRID, BLUE, RED, GREEN, AMBER, PURPLE, TEAL

SOFT = '#F5F3EE'
PINK = '#F4C7C3'
MUSCLE = '#E9A6A0'


def box(s, x, y, w, h, title, lines=(), color=INK, fill=SOFT, tsize=17, lsize=14):
    s.rect(x, y, w, h, fill, color, 2, 8)
    s.text(x + 14, y + 28, title, tsize, color, weight=700)
    for i, l in enumerate(lines):
        s.text(x + 14, y + 54 + i * 21, l, lsize, INK)


def arrow(s, x1, y1, x2, y2, color=INK, sw=2):
    s.line(x1, y1, x2, y2, color, sw, arrow=True)


# ---------------------------------------------------------------------------
# Gastroenterología
# ---------------------------------------------------------------------------
def gastro_05():
    s = SVG(1200, 640)
    s.title('Clasificación de Borrmann del cáncer gástrico avanzado', 'Corte de la pared gástrica: mucosa arriba (rosado), capa muscular abajo')
    labels = [('I', 'Polipoide', 'Masa que protruye, bien delimitada'), ('II', 'Ulcerado, bordes netos', 'Úlcera con bordes elevados'),
              ('III', 'Ulcerado infiltrante', 'Bordes mal definidos, infiltra'), ('IV', 'Infiltrante difuso', 'Linitis plástica: estómago rígido')]
    for k, (n, t, d) in enumerate(labels):
        x0 = 40 + k * 285
        y0 = 260
        w = 250
        s.rect(x0, y0, w, 26, PINK, 'none', 0)                     # mucosa
        s.rect(x0, y0 + 26, w, 40, '#FBE3D6', 'none', 0)          # submucosa
        s.rect(x0, y0 + 66, w, 50, MUSCLE, 'none', 0)             # muscular
        tumor = '#7F1D1D'
        cx = x0 + w / 2
        if n == 'I':
            s.path(f'M{cx-70},{y0} C{cx-70},{y0-120} {cx+70},{y0-120} {cx+70},{y0} Z', fill=tumor, stroke=INK, sw=2)
        elif n == 'II':
            s.path(f'M{cx-90},{y0} C{cx-90},{y0-55} {cx-45},{y0-55} {cx-35},{y0-10} L{cx-25},{y0+30} L{cx+25},{y0+30} L{cx+35},{y0-10} '
                   f'C{cx+45},{y0-55} {cx+90},{y0-55} {cx+90},{y0} Z', fill=tumor, stroke=INK, sw=2)
            s.path(f'M{cx-35},{y0-10} L{cx-25},{y0+30} L{cx+25},{y0+30} L{cx+35},{y0-10} Z', fill='#FFFFFF', stroke=INK, sw=2)
        elif n == 'III':
            s.path(f'M{cx-110},{y0+4} C{cx-80},{y0-22} {cx-50},{y0-20} {cx-35},{y0} L{cx-25},{y0+38} L{cx+25},{y0+38} L{cx+35},{y0} '
                   f'C{cx+50},{y0-20} {cx+80},{y0-22} {cx+110},{y0+4} L{cx+90},{y0+70} L{cx-90},{y0+70} Z', fill=tumor, stroke=INK, sw=2, op=0.9)
            s.path(f'M{cx-35},{y0} L{cx-25},{y0+38} L{cx+25},{y0+38} L{cx+35},{y0} Z', fill='#FFFFFF', stroke=INK, sw=2)
        else:
            s.rect(x0, y0 - 10, w, 125, tumor, 'none', 0, 0, 0.75)
        s.text(cx, 130, f'Tipo {n}', 22, INK, 'middle', 700)
        s.text(cx, 158, t, 16, RED, 'middle', 700)
        s.text(cx, 430, d, 14, MUTED, 'middle')
    s.text(40, 520, 'El Borrmann describe el aspecto macroscópico (endoscopía). El tipo IV es el de peor pronóstico.', 16)
    s.text(40, 548, 'El cáncer gástrico incipiente (limitado a mucosa y submucosa) se clasifica aparte (japonesa, tipos 0).', 16, MUTED)
    return s


def gastro_06():
    s = SVG(1200, 700)
    s.title('Compartimentos del mediastino (radiografía lateral)', 'División de Felson y lo que se busca en cada uno')
    # tórax lateral esquemático
    s.path('M260,140 C200,160 170,320 190,560 L620,560 C640,320 610,160 540,140 Z', fill='#F8FAFC', stroke=INK, sw=2)
    s.rect(240, 160, 20, 330, '#E7E5E4', INK, 1.5, 6)            # esternón
    for i in range(8):                                             # columna
        s.rect(540, 170 + i * 46, 50, 38, '#E7E5E4', INK, 1.5, 4)
    s.ellipse(390, 400, 110, 95, '#FBE3D6', INK, 2)               # corazón
    s.rect(390, 150, 30, 160, '#FFFFFF', INK, 2, 12)              # tráquea
    s.rect(262, 150, 120, 390, BLUE, 'none', 0, 0, 0.12)          # anterior
    s.rect(382, 150, 150, 390, AMBER, 'none', 0, 0, 0.12)         # medio
    s.rect(532, 150, 80, 390, GREEN, 'none', 0, 0, 0.14)          # posterior
    s.text(320, 590, 'Anterior', 16, BLUE, 'middle', 700)
    s.text(455, 590, 'Medio', 16, AMBER, 'middle', 700)
    s.text(572, 590, 'Posterior', 16, GREEN, 'middle', 700)
    s.text(250, 125, 'Esternón', 13, MUTED, 'middle')
    s.text(565, 125, 'Columna', 13, MUTED, 'middle')
    box(s, 680, 120, 480, 140, 'Anterior: las 4 T', ['Timoma, Teratoma (germinales)', 'Tiroides endotorácico, "Terrible" linfoma'], BLUE)
    box(s, 680, 280, 480, 140, 'Medio', ['Adenopatías (linfoma, sarcoidosis, TBC)', 'Quiste broncogénico, aneurisma aórtico,', 'hernia hiatal'], AMBER)
    box(s, 680, 440, 480, 120, 'Posterior (paravertebral)', ['Tumores neurogénicos:', 'schwannoma, neurofibroma, neuroblastoma'], GREEN)
    return s


# ---------------------------------------------------------------------------
# Hematología
# ---------------------------------------------------------------------------
def _rbc(s, x, y, r=34):
    s.circle(x, y, r, '#FCA5A5', '#B91C1C', 2)
    s.circle(x, y, r * 0.45, '#FECACA', 'none', 0)


def _ab(s, x, y, ang, color=BLUE, size=16):
    a = math.radians(ang)
    ex, ey = x + size * math.cos(a), y + size * math.sin(a)
    for d in (-35, 35):
        b = a + math.radians(d)
        s.line(ex, ey, ex + 12 * math.cos(b), ey + 12 * math.sin(b), color, 3)
    s.line(x, y, ex, ey, color, 3)


def hem_07():
    s = SVG(1200, 680)
    s.title('Test de Coombs', 'Detecta anticuerpos contra glóbulos rojos usando antiglobulina humana (reactivo de Coombs)')
    # directo
    s.text(300, 120, 'Coombs DIRECTO', 20, INK, 'middle', 700)
    s.text(300, 146, '¿Los glóbulos rojos del paciente ya traen anticuerpos?', 14, MUTED, 'middle')
    for i, (x, y) in enumerate([(170, 260), (250, 300)]):
        _rbc(s, x, y)
        for ang in (200, 250, 300, 340):
            a = math.radians(ang)
            _ab(s, x + 34 * math.cos(a), y + 34 * math.sin(a), ang)
    arrow(s, 320, 280, 400, 280)
    s.text(360, 266, '+ Coombs', 13, PURPLE, 'middle', 700)
    for x, y in [(470, 250), (520, 320)]:
        _rbc(s, x, y)
    s.line(470, 250, 520, 320, PURPLE, 4)
    s.text(495, 400, 'Aglutinación = positivo', 15, RED, 'middle', 700)
    s.text(300, 450, 'Úsalo en: anemia hemolítica autoinmune,', 15, INK, 'middle')
    s.text(300, 472, 'enfermedad hemolítica del RN, reacción transfusional', 15, INK, 'middle')
    # indirecto
    s.text(900, 120, 'Coombs INDIRECTO', 20, INK, 'middle', 700)
    s.text(900, 146, '¿El suero del paciente tiene anticuerpos libres?', 14, MUTED, 'middle')
    s.rect(700, 190, 120, 140, '#FEF9C3', INK, 2, 10)
    s.text(760, 215, 'Suero', 14, INK, 'middle', 700)
    for k in range(5):
        _ab(s, 725 + (k % 3) * 30, 245 + (k // 3) * 40, 270)
    s.text(760, 352, '+ GR de reactivo', 13, MUTED, 'middle')
    arrow(s, 830, 260, 900, 260)
    for x, y in [(960, 230), (1010, 300)]:
        _rbc(s, x, y)
        for ang in (210, 300):
            a = math.radians(ang)
            _ab(s, x + 34 * math.cos(a), y + 34 * math.sin(a), ang)
    s.line(960, 230, 1010, 300, PURPLE, 4)
    s.text(985, 380, '+ Coombs → aglutina', 15, RED, 'middle', 700)
    s.text(900, 450, 'Úsalo en: tamizaje de embarazada Rh (−),', 15, INK, 'middle')
    s.text(900, 472, 'pruebas cruzadas antes de transfundir', 15, INK, 'middle')
    legend(s, 360, 570, [(BLUE, 'Anticuerpo IgG del paciente', None), (PURPLE, 'Antiglobulina (reactivo de Coombs)', None)])
    return s


def hem_11():
    s = SVG(1200, 720)
    s.title('Cascada de la coagulación y sus exámenes', 'Modelo clásico: útil para interpretar TP/INR y TTPK')
    box(s, 60, 110, 320, 220, 'Vía intrínseca', ['XII → XI → IX', 'IX + VIII (cofactor)', '', 'Mide: TTPK', 'Hemofilia A (VIII), B (IX)', 'Heparina no fraccionada'], BLUE)
    box(s, 820, 110, 320, 220, 'Vía extrínseca', ['Factor tisular + VII', '', '', 'Mide: TP / INR', 'Primero en caer con', 'déficit de vit. K y warfarina'], GREEN)
    box(s, 380, 400, 440, 240, 'Vía común', ['X + V (cofactor)', '↓', 'II protrombina → trombina', '↓', 'Fibrinógeno → fibrina (+ XIII)'], RED)
    arrow(s, 300, 330, 470, 400, BLUE, 3)
    arrow(s, 900, 330, 730, 400, GREEN, 3)
    s.rect(60, 660, 1080, 46, SOFT, GRID, 1, 6)
    s.text(80, 690, 'Dependientes de vitamina K: II, VII, IX, X (y proteínas C y S).  Warfarina: TP/INR.  Heparina: TTPK.', 16, INK, weight=600)
    return s


# ---------------------------------------------------------------------------
# Oftalmología
# ---------------------------------------------------------------------------
def _eye(s, x, y, focus_dx, lens=None, label='', color=INK):
    s.ellipse(x, y, 140, 100, '#FFFFFF', INK, 2.5)
    s.path(f'M{x-140},{y-40} C{x-165},{y-20} {x-165},{y+20} {x-140},{y+40}', stroke=INK, sw=2.5)   # córnea
    s.ellipse(x - 100, y, 14, 42, '#E0F2FE', INK, 2)                                               # cristalino
    retina_x = x + 138
    fx = retina_x + focus_dx
    for dy in (-30, 0, 30):
        s.line(x - 330, y + dy, x - 110, y + dy, color, 2)
        s.line(x - 110, y + dy, fx, y, color, 2)
    s.circle(fx, y, 5, RED, RED)
    if lens == 'concave':
        s.path(f'M{x-250},{y-60} Q{x-232},{y} {x-250},{y+60} L{x-226},{y+60} Q{x-244},{y} {x-226},{y-60} Z', fill='#DBEAFE', stroke=BLUE, sw=2)
    if lens == 'convex':
        s.path(f'M{x-238},{y-60} Q{x-262},{y} {x-238},{y+60} Q{x-214},{y} {x-238},{y-60} Z', fill='#DCFCE7', stroke=GREEN, sw=2)
    s.text(x - 30, y + 140, label, 16, INK, 'middle', 700)


def oftal_09():
    s = SVG(1200, 760)
    s.title('Vicios de refracción', 'Dónde enfocan los rayos y qué lente lo corrige')
    _eye(s, 380, 200, 0, label='Emétrope: enfoca en la retina')
    _eye(s, 380, 470, -70, label='Miope: enfoca delante · ve mal de lejos')
    _eye(s, 880, 470, 70, label='Hipermétrope: enfoca detrás · ve mal de cerca')
    s.text(760, 160, 'Corrección', 18, INK, weight=700)
    s.text(760, 192, 'Miopía: lente divergente (cóncavo, −)', 16, BLUE)
    s.text(760, 220, 'Hipermetropía: lente convergente (+)', 16, GREEN)
    s.text(760, 248, 'Presbicia: pérdida de acomodación > 40 años', 16, INK)
    s.text(760, 276, 'Astigmatismo: lente cilíndrico', 16, INK)
    s.text(60, 730, 'En el niño, un vicio no corregido o un estrabismo pueden causar ambliopía: tratar antes de los 7-8 años.', 15, MUTED)
    return s


def oftal_14():
    s = SVG(1200, 640)
    s.title('Rejilla de Amsler', 'Se mira el punto central con un ojo a la vez, a 30 cm')
    for k, (title, mode) in enumerate([('Normal', 0), ('Metamorfopsia (DMAE)', 1), ('Escotoma central', 2)]):
        x0, y0, n, c = 60 + k * 380, 130, 20, 16
        s.rect(x0, y0, n * c, n * c, '#FFFFFF', INK, 2)
        cx, cy = x0 + n * c / 2, y0 + n * c / 2
        for i in range(n + 1):
            for vertical in (True, False):
                pts = []
                for t in frange(0, n * c, 60):
                    if vertical:
                        x, y = x0 + i * c, y0 + t
                    else:
                        x, y = x0 + t, y0 + i * c
                    if mode == 1:
                        d = math.hypot(x - cx, y - cy)
                        w = 9 * math.exp(-(d / 60) ** 2)
                        if vertical:
                            x += w * math.sin((y - cy) / 14)
                        else:
                            y += w * math.sin((x - cx) / 14)
                    pts.append((x, y))
                s.poly(pts, stroke=INK, sw=1)
        s.circle(cx, cy, 5, INK, INK)
        if mode == 2:
            s.add(f'<circle cx="{cx}" cy="{cy}" r="58" fill="#57534E" opacity="0.85"/>')
        s.text(cx, y0 + n * c + 40, title, 18, RED if mode else INK, 'middle', 700)
    s.text(60, 600, 'Líneas onduladas o una mancha central de aparición reciente: derivar a oftalmología (DMAE húmeda).', 15, MUTED)
    return s


def oftal_18():
    s = SVG(1200, 640)
    s.title('Defecto pupilar aferente relativo (pupila de Marcus Gunn)', 'Prueba de la linterna oscilante: lesión del nervio óptico DERECHO')

    def pair(y, light, left_r, right_r, note):
        for x, r, lit in [(420, right_r, light == 'R'), (720, left_r, light == 'L')]:
            s.ellipse(x, y, 90, 48, '#FFFFFF', INK, 2.5)
            s.circle(x, y, 40, '#9CA3AF', INK, 1.5)
            s.circle(x, y, r, INK, INK)
            if lit:
                s.path(f'M{x-180},{y+90} L{x-40},{y+20} L{x-30},{y+40} Z', fill='#FDE68A', stroke=AMBER, sw=1.5)
        s.text(860, y + 6, note, 16, INK, weight=600)
    s.text(420, 120, 'Ojo derecho (enfermo)', 15, RED, 'middle', 700)
    s.text(720, 120, 'Ojo izquierdo (sano)', 15, INK, 'middle', 700)
    pair(210, 'L', 12, 12, 'Luz en el sano: ambas se contraen')
    pair(380, 'R', 22, 22, 'Luz en el enfermo: ambas se DILATAN')
    s.text(60, 520, 'La vía eferente está intacta (ambas pupilas responden igual); falla la entrada de luz del ojo enfermo.', 15)
    s.text(60, 548, 'Causas: neuritis óptica, isquemia del nervio, desprendimiento de retina extenso. No la produce la catarata.', 15, MUTED)
    return s


# ---------------------------------------------------------------------------
# Neurología
# ---------------------------------------------------------------------------
def neuro_06():
    s = SVG(1200, 640)
    s.title('Aura visual de la migraña: espectro de fortificación', 'Avanza desde el centro hacia la periferia en 5 a 60 minutos, y luego viene la cefalea')
    for k, (r, t) in enumerate([(50, '0 min'), (120, '10 min'), (200, '20 min')]):
        cx, cy = 230 + k * 370, 350
        s.rect(cx - 170, cy - 210, 340, 340, '#F8FAFC', GRID, 1, 8)
        s.circle(cx, cy, 4, INK, INK)
        pts = []
        for i, ang in enumerate(frange(-150, 60, 36)):
            rr = r + (12 if i % 2 else -12)
            a = math.radians(ang)
            pts.append((cx + rr * math.cos(a) * 0.75, cy + rr * math.sin(a) * 0.75))
        for j, c in enumerate([RED, AMBER, BLUE]):
            s.poly([(x + j * 4, y + j * 4) for x, y in pts], stroke=c, sw=3)
        a0 = math.radians(-60)
        s.add(f'<path d="M{cx},{cy} L{cx + r*0.7*math.cos(math.radians(-150)):.0f},{cy + r*0.7*math.sin(math.radians(-150)):.0f} '
              f'A{r*0.7:.0f},{r*0.7:.0f} 0 0 1 {cx + r*0.7*math.cos(math.radians(60)):.0f},{cy + r*0.7*math.sin(math.radians(60)):.0f} Z" '
              f'fill="#57534E" opacity="0.25"/>')
        s.text(cx, cy + 160, t, 16, INK, 'middle', 700)
    s.text(60, 600, 'Zigzag brillante con escotoma por dentro. Aura motora, de más de 60 minutos o "la peor cefalea": descartar otras causas.', 15, MUTED)
    return s


def neuro_11():
    s = SVG(1200, 560)
    s.title('Micrografía en la enfermedad de Parkinson', 'La letra se va achicando a lo largo de la línea')
    phrase = 'Hoy es un buen día para caminar por el parque'
    x = 60
    for i, w in enumerate(phrase.split()):
        size = 48 - i * 3.6
        s.text(x, 240, w, size, INK, italic=True)
        x += size * 0.56 * len(w) + size * 0.45
    s.text(60, 330, 'Escritura normal, para comparar:', 15, MUTED)
    s.text(60, 380, phrase, 32, INK, italic=True)
    s.text(60, 470, 'Parte de la bradicinesia: los movimientos repetidos pierden amplitud (también al golpear los dedos).', 15, MUTED)
    return s


def neuro_13():
    s = SVG(1200, 620)
    s.title('Espiral de Arquímedes', 'Se pide dibujar una espiral sin apoyar la mano')
    random.seed(4)
    for k, (title, amp, color) in enumerate([('Normal', 0, INK), ('Temblor esencial: oscilación en todo el trazo', 7, RED)]):
        cx, cy = 300 + k * 560, 340
        pts = []
        for t in frange(0, 6 * math.pi, 700):
            r = 8 + 11 * t
            j = amp * math.sin(t * 9) if amp else 0
            pts.append((cx + (r + j) * math.cos(t), cy + (r + j) * math.sin(t)))
        s.poly(pts, stroke=color, sw=2.2)
        s.text(cx, 580, title, 17, color, 'middle', 700)
    return s


def neuro_14():
    s = SVG(1200, 640)
    s.title('Test del reloj', '"Dibuje un reloj con todos los números y marque las 11 y 10"')
    for k, (title, bad) in enumerate([('Normal', False), ('Alterado (demencia)', True)]):
        cx, cy, r = 320 + k * 560, 340, 200
        s.circle(cx, cy, r, '#FFFFFF', INK, 3)
        for n in range(1, 13):
            a = math.radians(n * 30 - 90) if not bad else math.radians(-90 + n * 15)
            rr = r - 32
            s.text(cx + rr * math.cos(a), cy + rr * math.sin(a) + 8, n, 24, INK, 'middle', 600)
        if not bad:
            for ang, L in [(-90 + 11 * 30 + 5, 110), (-90 + 2 * 30, 160)]:
                a = math.radians(ang)
                s.line(cx, cy, cx + L * math.cos(a), cy + L * math.sin(a), INK, 5)
        else:
            s.line(cx, cy, cx + 120, cy + 40, INK, 5)
        s.circle(cx, cy, 6, INK, INK)
        s.text(cx, cy + r + 50, title, 18, RED if bad else INK, 'middle', 700)
    s.text(60, 620, 'Evalúa planificación, memoria semántica y función visuoespacial. Complementa el MMSE / MoCA.', 15, MUTED)
    return s


def neuro_24():
    s = SVG(1200, 560)
    s.title('Cascada de prescripción en el adulto mayor', 'Un efecto adverso se confunde con un problema nuevo y se trata con otro fármaco')
    steps = [('Amlodipino', 'para la HTA'), ('Edema maleolar', 'efecto adverso'), ('Furosemida', 'para el edema'),
             ('Incontinencia', 'por la diuresis'), ('Oxibutinina', 'anticolinérgico'), ('Delirium', 'caída, fractura')]
    for i, (t, d) in enumerate(steps):
        x = 40 + i * 190
        bad = i % 2 == 1
        s.rect(x, 200, 160, 110, '#FEF2F2' if bad else SOFT, RED if bad else INK, 2, 10)
        s.text(x + 80, 245, t, 17, RED if bad else INK, 'middle', 700)
        s.text(x + 80, 272, d, 14, MUTED, 'middle')
        if i < len(steps) - 1:
            arrow(s, x + 162, 255, x + 188, 255)
    s.text(40, 400, 'La salida correcta: ante un síntoma nuevo, pregunta primero qué fármaco empezó antes.', 17, INK, weight=700)
    s.text(40, 432, 'Herramientas: criterios de Beers y STOPP/START. Revisa la lista completa de fármacos en cada control.', 15, MUTED)
    return s


# ---------------------------------------------------------------------------
# Ginecología
# ---------------------------------------------------------------------------
def gin_03():
    s = SVG(1200, 620)
    s.title('Sangrado uterino anormal: clasificación FIGO PALM-COEIN', 'Primero descarta embarazo. Luego busca causa estructural (PALM) o no estructural (COEIN)')
    pal = [('P', 'Pólipo'), ('A', 'Adenomiosis'), ('L', 'Leiomioma'), ('M', 'Malignidad e hiperplasia')]
    coe = [('C', 'Coagulopatía'), ('O', 'Ovulatoria (disfunción)'), ('E', 'Endometrial'), ('I', 'Iatrogénica'), ('N', 'No clasificada')]
    for g, (title, items, color, x0) in enumerate([('Estructurales: se ven en la ecografía o la histología', pal, BLUE, 60),
                                                    ('No estructurales', coe, AMBER, 640)]):
        s.text(x0, 130, title, 17, color, weight=700)
        for i, (l, t) in enumerate(items):
            y = 160 + i * 74
            s.rect(x0, y, 64, 60, color, 'none', 0, 8, 0.9)
            s.text(x0 + 32, y + 42, l, 30, '#FFFFFF', 'middle', 700)
            s.text(x0 + 84, y + 38, t, 19, INK, weight=600)
    s.text(60, 590, 'Sobre 40 años o con factores de riesgo de cáncer de endometrio: biopsia endometrial.', 15, MUTED)
    return s


def _uterus(s, cx, cy, sc=1.0):
    p = (f'M{cx-150*sc},{cy-120*sc} C{cx-150*sc},{cy-220*sc} {cx+150*sc},{cy-220*sc} {cx+150*sc},{cy-120*sc} '
         f'C{cx+150*sc},{cy+30*sc} {cx+60*sc},{cy+100*sc} {cx+45*sc},{cy+190*sc} L{cx-45*sc},{cy+190*sc} '
         f'C{cx-60*sc},{cy+100*sc} {cx-150*sc},{cy+30*sc} {cx-150*sc},{cy-120*sc} Z')
    s.path(p, fill=MUSCLE, stroke=INK, sw=2.5)
    q = (f'M{cx-80*sc},{cy-130*sc} C{cx-60*sc},{cy-150*sc} {cx+60*sc},{cy-150*sc} {cx+80*sc},{cy-130*sc} '
         f'L{cx+12*sc},{cy+60*sc} L{cx+12*sc},{cy+190*sc} L{cx-12*sc},{cy+190*sc} L{cx-12*sc},{cy+60*sc} Z')
    s.path(q, fill='#FDE2E4', stroke=INK, sw=2)


def gin_04():
    s = SVG(1200, 700)
    s.title('Clasificación FIGO de los miomas (0 a 8)', 'Según su relación con la cavidad (submucosos) y con la serosa (subserosos)')
    cx, cy = 430, 380
    _uterus(s, cx, cy, 1.25)
    my = '#FDF2E9'

    def m(x, y, r, n):
        s.circle(x, y, r, my, INK, 2)
        s.text(x, y + 7, n, 20, INK, 'middle', 700)
    m(cx - 10, cy - 120, 26, '0')        # pediculado en la cavidad
    m(cx + 75, cy - 120, 28, '1')        # <50 % intramural, protruye a la cavidad
    m(cx - 115, cy - 80, 30, '2')
    m(cx + 140, cy - 40, 30, '3')
    m(cx - 160, cy + 20, 26, '4')
    m(cx + 185, cy - 190, 30, '5')
    m(cx - 215, cy - 200, 30, '6')
    s.line(cx + 160, cy + 60, cx + 230, cy + 110, INK, 2)
    m(cx + 245, cy + 125, 26, '7')        # pediculado subseroso
    m(cx + 60, cy + 210, 22, '8')         # cervical
    items = ['0  Submucoso pediculado, dentro de la cavidad', '1  Submucoso, menos de 50 % intramural', '2  Submucoso, 50 % o más intramural',
             '3  Intramural que contacta el endometrio', '4  Intramural puro', '5  Subseroso, 50 % o más intramural',
             '6  Subseroso, menos de 50 % intramural', '7  Subseroso pediculado', '8  Otros: cervical, parasitario']
    for i, t in enumerate(items):
        s.text(760, 150 + i * 44, t, 16, RED if i <= 2 else INK, weight=700 if i <= 2 else 400)
    s.text(760, 560, 'Los submucosos (0 a 2) son los que más sangran', 15, RED, weight=700)
    s.text(760, 584, 'y los que se resecan por histeroscopía.', 15, RED)
    return s


def gin_06():
    s = SVG(1200, 680)
    s.title('Sistema POP-Q', 'Cada punto se mide en cm respecto del himen: negativo por encima, positivo por debajo')
    cells = [('Aa', 'Pared anterior, 3 cm'), ('Ba', 'Pared anterior, punto más bajo'), ('C', 'Cérvix o cúpula'),
             ('gh', 'Hiato genital'), ('pb', 'Cuerpo perineal'), ('tvl', 'Longitud vaginal total'),
             ('Ap', 'Pared posterior, 3 cm'), ('Bp', 'Pared posterior, punto más bajo'), ('D', 'Fondo de saco posterior')]
    for i, (code, desc) in enumerate(cells):
        x, y = 60 + (i % 3) * 190, 120 + (i // 3) * 120
        s.rect(x, y, 180, 110, SOFT, INK, 2, 6)
        s.text(x + 90, y + 48, code, 28, BLUE, 'middle', 700)
        s.text(x + 90, y + 76, desc.split(',')[0], 13, MUTED, 'middle')
        if ',' in desc:
            s.text(x + 90, y + 94, desc.split(',')[1].strip(), 13, MUTED, 'middle')
    s.text(60, 520, 'Anterior arriba, posterior abajo. gh, pb y tvl no son puntos de prolapso.', 14, MUTED)
    stages = [('0', 'Sin prolapso'), ('I', 'Punto más bajo a más de 1 cm sobre el himen (< −1)'),
              ('II', 'Entre 1 cm sobre y 1 cm bajo el himen (−1 a +1)'), ('III', 'Más de 1 cm bajo el himen, sin eversión total'),
              ('IV', 'Eversión completa de la vagina')]
    s.text(680, 140, 'Estadios', 20, weight=700)
    for i, (st, d) in enumerate(stages):
        y = 180 + i * 72
        s.rect(680, y, 54, 54, [GREEN, '#CA8A04', AMBER, RED, '#7F1D1D'][i], 'none', 0, 8)
        s.text(707, y + 36, st, 22, '#FFFFFF', 'middle', 700)
        words, lines = d.split(), ['']
        for w in words:
            if len(lines[-1]) + len(w) > 42:
                lines.append('')
            lines[-1] += (' ' if lines[-1] else '') + w
        for j, part in enumerate(lines):
            s.text(750, y + 24 + j * 20, part, 15)
    return s


# ---------------------------------------------------------------------------
# Obstetricia
# ---------------------------------------------------------------------------
def _uterus_sag(s, cx, cy):
    s.path(f'M{cx-120},{cy+120} C{cx-190},{cy} {cx-160},{cy-190} {cx},{cy-200} C{cx+160},{cy-190} {cx+190},{cy} {cx+120},{cy+120} '
           f'C{cx+80},{cy+170} {cx+40},{cy+180} {cx+28},{cy+230} L{cx-28},{cy+230} C{cx-40},{cy+180} {cx-80},{cy+170} {cx-120},{cy+120} Z',
           fill=MUSCLE, stroke=INK, sw=2.5)
    s.path(f'M{cx-95},{cy+95} C{cx-150},{cy} {cx-125},{cy-160} {cx},{cy-165} C{cx+125},{cy-160} {cx+150},{cy} {cx+95},{cy+95} '
           f'C{cx+60},{cy+140} {cx+20},{cy+150} {cx+12},{cy+180} L{cx-12},{cy+180} C{cx-20},{cy+150} {cx-60},{cy+140} {cx-95},{cy+95} Z',
           fill='#FFF7ED', stroke=INK, sw=1.5)
    s.text(cx, cy + 260, 'OCI', 12, MUTED, 'middle')


def ob_13():
    s = SVG(1200, 700)
    s.title('Metrorragia de la segunda mitad: dónde está la placenta', 'Placenta previa (indolora, sangre roja) vs DPPNI (dolor, útero duro, sangre oscura)')
    titles = [('Normoinserta', GREEN), ('Previa oclusiva total', RED), ('Previa marginal / baja', AMBER), ('DPPNI (desprendimiento)', RED)]
    for k, (t, c) in enumerate(titles):
        cx, cy = 155 + k * 295, 380
        s.add(f'<g transform="translate({cx} {cy}) scale(0.78) translate({-cx} {-cy})">')
        _uterus_sag(s, cx, cy)
        plc = '#7C3AED'
        if k == 0:
            s.path(f'M{cx-80},{cy-140} C{cx-30},{cy-175} {cx+30},{cy-175} {cx+80},{cy-140} L{cx+60},{cy-115} C{cx+20},{cy-140} {cx-20},{cy-140} {cx-60},{cy-115} Z', fill=plc, stroke=INK, sw=1.5)
        elif k == 1:
            s.path(f'M{cx-80},{cy+80} C{cx-40},{cy+150} {cx+40},{cy+150} {cx+80},{cy+80} L{cx+60},{cy+60} C{cx+30},{cy+115} {cx-30},{cy+115} {cx-60},{cy+60} Z', fill=plc, stroke=INK, sw=1.5)
        elif k == 2:
            s.path(f'M{cx+90},{cy+70} C{cx+60},{cy+130} {cx+30},{cy+150} {cx+14},{cy+165} L{cx+20},{cy+135} C{cx+40},{cy+115} {cx+60},{cy+90} {cx+70},{cy+50} Z', fill=plc, stroke=INK, sw=1.5)
        else:
            s.path(f'M{cx-80},{cy-140} C{cx-30},{cy-175} {cx+30},{cy-175} {cx+80},{cy-140} L{cx+60},{cy-115} C{cx+20},{cy-140} {cx-20},{cy-140} {cx-60},{cy-115} Z', fill=plc, stroke=INK, sw=1.5)
            s.path(f'M{cx-70},{cy-150} C{cx-30},{cy-185} {cx+20},{cy-185} {cx+60},{cy-155} C{cx+20},{cy-170} {cx-30},{cy-170} {cx-70},{cy-150} Z', fill='#450A0A', stroke='none', sw=0)
            s.text(cx, cy - 90, 'Hematoma', 13, RED, 'middle', 700)
            s.text(cx, cy - 72, 'retroplacentario', 13, RED, 'middle', 700)
        s.add('</g>')
        s.text(cx, 128, t, 16, c, 'middle', 700)
    s.text(60, 670, 'Ante metrorragia de la 2.ª mitad: NO hacer tacto vaginal hasta descartar placenta previa con ecografía.', 16, RED, weight=700)
    return s


def ob_16():
    s = SVG(1200, 700)
    s.title('Variedades de posición y fontanelas', 'Pelvis materna vista desde abajo (como en el tacto vaginal)')
    # cabeza fetal: fontanelas
    hx, hy = 230, 370
    s.ellipse(hx, hy, 140, 170, '#FDE7D3', INK, 2.5)
    s.line(hx, hy - 120, hx, hy + 120, INK, 2.5)
    s.line(hx - 120, hy - 70, hx + 120, hy - 70, INK, 2)
    s.path(f'M{hx},{hy-120} L{hx-30},{hy-70} L{hx},{hy-20} L{hx+30},{hy-70} Z', fill='#FFFFFF', stroke=INK, sw=2)    # bregmática
    s.path(f'M{hx},{hy+120} L{hx-40},{hy+150} L{hx+40},{hy+150} Z', fill='#FFFFFF', stroke=INK, sw=2)                 # lambdática
    s.text(hx + 150, hy - 66, 'Bregmática (anterior):', 13, INK, weight=700)
    s.text(hx + 150, hy - 48, 'rombo, 4 suturas', 13, MUTED)
    s.line(hx + 32, hy - 70, hx + 145, hy - 70, MUTED, 1)
    s.text(hx + 150, hy + 140, 'Lambdática (posterior):', 13, INK, weight=700)
    s.text(hx + 150, hy + 158, 'triángulo: occipucio', 13, MUTED)
    s.line(hx + 42, hy + 136, hx + 145, hy + 136, MUTED, 1)
    s.text(hx, hy - 190, 'Sutura sagital', 13, MUTED, 'middle')
    # rosa de variedades
    px, py, R = 880, 380, 180
    s.circle(px, py, R, '#F8FAFC', INK, 2.5)
    s.text(px, py - R - 14, 'Pubis', 16, INK, 'middle', 700)
    s.text(px, py + R + 30, 'Sacro', 16, INK, 'middle', 700)
    s.text(px + R + 16, py + 6, 'Izquierda materna', 14, BLUE, weight=700)
    s.text(px - R - 16, py + 6, 'Derecha materna', 14, BLUE, 'end', 700)
    vars_ = [('OP', -90), ('OIIA', -45), ('OIIT', 0), ('OIIP', 45), ('OS', 90), ('OIDP', 135), ('OIDT', 180), ('OIDA', 225)]
    for lab, ang in vars_:
        a = math.radians(ang)
        x, y = px + (R - 40) * math.cos(a), py + (R - 40) * math.sin(a)
        common = lab == 'OIIA'
        s.circle(x, y, 30, '#DBEAFE' if not common else '#BBF7D0', GREEN if common else BLUE, 2)
        s.text(x, y + 5, lab, 13, INK, 'middle', 700)
    arrow(s, px, py, px + 95 * math.cos(math.radians(-45)), py + 95 * math.sin(math.radians(-45)), GREEN, 4)
    s.text(px, py + 40, 'La flecha apunta al occipucio', 13, MUTED, 'middle')
    s.text(60, 660, 'OIIA (occípito-ilíaca izquierda anterior) es la más frecuente. Las posteriores (OIDP, OIIP) se asocian a parto prolongado.', 15, MUTED)
    return s


def ob_16b():
    s = SVG(1200, 680)
    s.title('Partograma (modelo OMS clásico)', 'Dilatación en fase activa: la curva debe quedar a la izquierda de la línea de alerta')
    a = Axes(s, 120, 100, 1000, 580, 0, 12, 0, 10)
    a.grid(xs=range(0, 13), ys=range(0, 11), xlabel='Horas de fase activa', ylabel='Dilatación cervical (cm)')
    a.curve([(0, 4), (6, 10)], stroke=AMBER, sw=3)
    a.curve([(4, 4), (10, 10)], stroke=RED, sw=3)
    s.text(a.X(6.2), a.Y(9.9), 'Línea de alerta (1 cm/h)', 14, AMBER, 'start', 700)
    s.text(a.X(9.8), a.Y(8.3), 'Línea de acción (+4 h)', 14, RED, 'start', 700)
    normal = [(0, 4), (1, 5), (2, 6.2), (3, 7.4), (4, 8.6), (5, 10)]
    arrest = [(0, 4), (2, 5.5), (4, 6), (6, 6), (8, 6.2)]
    a.curve(normal, stroke=GREEN, sw=3.5)
    for x, y in normal:
        s.add(f'<text x="{a.X(x):.0f}" y="{a.Y(y)+6:.0f}" font-size="18" text-anchor="middle" fill="{GREEN}" font-weight="700">×</text>')
    a.curve(arrest, stroke=PURPLE, sw=3.5, dash='8 6')
    legend(s, 680, 470, [(GREEN, 'Progreso normal', None), (PURPLE, 'Detención de la dilatación', '8 6')])
    return s


def ob_18():
    s = SVG(1200, 650)
    s.title('Hemorragia posparto: tratamientos conservadores del útero', 'Si los uterotónicos no bastan: taponamiento con balón y suturas de compresión')
    _uterus(s, 300, 360, 1.0)
    s.ellipse(300, 290, 70, 90, '#93C5FD', BLUE, 3)
    s.line(300, 380, 300, 575, BLUE, 4)
    s.text(300, 112, 'Balón intrauterino (Bakri)', 18, BLUE, 'middle', 700)
    s.text(425, 300, 'Se infla con', 14, MUTED)
    s.text(425, 320, '300-500 mL de suero', 14, MUTED)
    _uterus(s, 860, 360, 1.0)
    for dx in (-60, 60):
        s.path(f'M{860+dx*0.9},{205} C{860+dx*1.2},{150} {860+dx*2.4},{170} {860+dx*2.3},{330} C{860+dx*2.2},{430} {860+dx*1.2},{480} {860+dx*0.9},{470}', stroke=GREEN, sw=4)
    s.text(860, 112, 'Sutura de B-Lynch', 18, GREEN, 'middle', 700)
    s.text(60, 620, 'Orden: masaje + oxitocina → otros uterotónicos + ácido tranexámico → balón / suturas → ligaduras → histerectomía.', 15, MUTED)
    return s


# ---------------------------------------------------------------------------
# Pediatría
# ---------------------------------------------------------------------------
def ped_13():
    s = SVG(1200, 600)
    s.title('Grados de reflujo vesicoureteral (cistouretrografía)', 'El contraste sube desde la vejiga: grado según hasta dónde llega y cuánto dilata')
    for k in range(5):
        x0 = 120 + k * 230
        g = k + 1
        s.ellipse(x0, 200, 55, 80, '#FFFFFF', INK, 2)                                   # riñón
        wpel = [10, 12, 22, 34, 46][k]
        uw = [5, 6, 10, 16, 24][k]
        fill = '#60A5FA'
        if g >= 2:
            s.ellipse(x0 + 10, 215, wpel / 1.6, wpel, fill, INK, 1.5)                  # pelvis
            for dy in (-40, 0, 40):
                r = [6, 7, 10, 14, 18][k]
                s.circle(x0 + 30, 215 + dy, r, fill, INK, 1.5)                       # cálices
        tort = [0, 0, 4, 12, 22][k]
        pts = [(x0 + 10 + tort * math.sin(t / 22), 240 + t) for t in frange(0, 220, 60)]
        if g == 1:
            pts = [p for p in pts if p[1] > 360]
        s.poly(pts, stroke=fill, sw=uw)
        s.poly([(x0 + 10 + tort * math.sin(t / 22), 240 + t) for t in frange(0, 220, 60)], stroke=INK, sw=1, dash='3 4')
        s.ellipse(x0 + 10, 490, 60, 34, fill, INK, 2)                                  # vejiga
        s.text(x0 + 10, 112, f'Grado {["I", "II", "III", "IV", "V"][k]}', 18, RED if g >= 4 else INK, 'middle', 700)
    s.text(60, 570, 'I: solo uréter · II: llega al riñón sin dilatar · III: dilatación leve · IV: dilatación y tortuosidad · V: severa, cálices deformados', 14, MUTED)
    return s


# ---------------------------------------------------------------------------
# Cirugía
# ---------------------------------------------------------------------------
def cirugia_01():
    s = SVG(1200, 680)
    s.title('Apendicitis: puntos y signos del examen', 'Abdomen visto de frente (derecha del paciente a tu izquierda)')
    s.path('M300,110 C230,140 220,420 260,620 L700,620 C740,420 730,140 660,110 Z', fill='#FDF2E9', stroke=INK, sw=2.5)
    um = (480, 340)
    s.circle(*um, 8, '#FFFFFF', INK, 2)
    s.text(um[0] + 14, um[1] + 5, 'Ombligo', 13, MUTED)
    eias_d, eias_i = (300, 520), (660, 520)
    for p, l in [(eias_d, 'EIAS derecha'), (eias_i, 'EIAS izquierda')]:
        s.circle(*p, 7, INK, INK)
        s.text(p[0], p[1] + 26, l, 13, MUTED, 'middle')
    s.line(*um, *eias_d, INK, 1.5, '6 5')
    mb = (eias_d[0] + (um[0] - eias_d[0]) / 3, eias_d[1] + (um[1] - eias_d[1]) / 3)
    s.circle(*mb, 14, RED, INK, 2)
    s.text(mb[0] - 20, mb[1] - 22, 'McBurney: unión del 1/3 externo', 15, RED, 'end', 700)
    s.text(mb[0] - 20, mb[1] - 4, 'con los 2/3 internos', 15, RED, 'end', 700)
    arrow(s, 600, 470, mb[0] + 30, mb[1] - 6, BLUE, 3)
    s.circle(610, 475, 12, '#BFDBFE', BLUE, 2)
    s.text(800, 200, 'Signos', 20, weight=700)
    for i, (t, d) in enumerate([('Rovsing', 'Presionar la fosa ilíaca izquierda duele a la derecha'),
                                ('Blumberg', 'Dolor al descomprimir: irritación peritoneal'),
                                ('Psoas', 'Dolor al extender la cadera derecha (apéndice retrocecal)'),
                                ('Obturador', 'Dolor a la rotación interna del muslo flexionado (pélvico)')]):
        s.text(800, 245 + i * 70, t, 17, BLUE if t == 'Rovsing' else INK, weight=700)
        s.text(800, 268 + i * 70, d, 14, MUTED)
    return s


def cirugia_06():
    s = SVG(1200, 680)
    s.title('Hernia inguinal directa vs indirecta', 'Región inguinal derecha vista desde adelante. La referencia son los vasos epigástricos inferiores.')
    s.rect(80, 110, 640, 480, '#FDF2E9', 'none', 0, 10)
    s.line(140, 520, 680, 330, INK, 4)                       # ligamento inguinal
    s.text(200, 552, 'Ligamento inguinal', 14, INK, weight=700, rot=-19)
    s.line(250, 140, 250, 520, INK, 3)                       # borde del recto
    s.text(232, 160, 'Borde lateral', 13, MUTED, 'end')
    s.text(232, 178, 'del recto', 13, MUTED, 'end')
    s.path('M450,415 C440,330 420,240 400,140', stroke=RED, sw=6)   # vasos epigástricos
    s.text(470, 200, 'Vasos epigástricos', 14, RED, weight=700)
    s.text(470, 218, 'inferiores', 14, RED, weight=700)
    s.path('M250,470 L250,250 L432,330 L450,415 Z', fill=BLUE, op=0.18, stroke='none', sw=0)
    s.text(330, 400, 'Triángulo de', 14, BLUE, 'middle', 700)
    s.text(330, 418, 'Hesselbach', 14, BLUE, 'middle', 700)
    s.circle(560, 370, 24, '#FFFFFF', INK, 2.5)               # anillo inguinal profundo
    s.text(560, 330, 'Anillo profundo', 13, MUTED, 'middle')
    s.circle(330, 340, 16, BLUE, INK, 2)
    s.circle(560, 370, 14, GREEN, INK, 2)
    box(s, 760, 130, 400, 180, 'Directa', ['Medial a los vasos epigástricos', 'Por debilidad de la pared posterior', '(fascia transversalis)', 'Adulto mayor, esfuerzo'], BLUE)
    box(s, 760, 330, 400, 180, 'Indirecta', ['Lateral a los vasos epigástricos', 'Entra por el anillo profundo', 'y sigue el cordón', 'La más frecuente (también en niños)'], GREEN)
    s.text(80, 640, 'Crural (femoral): por debajo del ligamento inguinal, más en mujeres, la que más se estrangula.', 15, MUTED)
    return s


def cirugia_09():
    s = SVG(1200, 600)
    s.title('Evaluación primaria del politraumatizado (ATLS)', 'En orden, y resolviendo cada problema antes de pasar al siguiente')
    rows = [('A', 'Vía aérea + columna cervical', 'Habla = vía aérea permeable. Collar cervical.'),
            ('B', 'Ventilación', 'Neumotórax a tensión, hemotórax masivo, tórax volante.'),
            ('C', 'Circulación + control de hemorragia', 'Compresión directa, 2 vías gruesas, cristaloides tibios.'),
            ('D', 'Déficit neurológico', 'Glasgow y pupilas.'),
            ('E', 'Exposición + control de temperatura', 'Desvestir completo, evitar hipotermia.')]
    for i, (l, t, d) in enumerate(rows):
        y = 120 + i * 90
        s.rect(60, y, 74, 74, RED if i < 3 else INK, 'none', 0, 8)
        s.text(97, y + 50, l, 36, '#FFFFFF', 'middle', 700)
        s.text(160, y + 32, t, 20, INK, weight=700)
        s.text(160, y + 58, d, 15, MUTED)
    return s


# ---------------------------------------------------------------------------
# Salud pública, nefrología, neumología
# ---------------------------------------------------------------------------
def sp_06():
    s = SVG(1200, 700)
    s.title('Diseños de estudios epidemiológicos', 'Dos preguntas ordenan todo: ¿quién asigna la exposición? y ¿en qué dirección se mira?')
    box(s, 420, 100, 360, 70, '¿El investigador asigna la exposición?', [], INK, tsize=16)
    box(s, 780, 220, 360, 120, 'Sí: EXPERIMENTAL', ['Ensayo clínico aleatorizado', 'Mejor evidencia de causalidad'], GREEN)
    box(s, 60, 220, 420, 70, 'No: OBSERVACIONAL. ¿Hay grupo de comparación?', [], BLUE, tsize=15)
    arrow(s, 700, 170, 900, 220)
    arrow(s, 500, 170, 300, 220)
    box(s, 60, 340, 300, 160, 'No: DESCRIPTIVO', ['Reporte / serie de casos', 'Transversal (prevalencia)', 'Ecológico'], MUTED)
    box(s, 400, 340, 360, 300, 'Sí: ANALÍTICO', ['Cohorte: exposición → desenlace', '   mide incidencia, RR', '', 'Casos y controles: desenlace →', '   exposición; mide OR, ideal', '   para enfermedades raras', '', 'Transversal analítico: ambos', '   al mismo tiempo'], BLUE)
    arrow(s, 170, 290, 200, 340)
    arrow(s, 380, 290, 520, 340)
    return s


def nefro_19():
    s = SVG(1200, 680)
    s.title('Complicaciones de la enfermedad renal crónica', 'Todas nacen de la caída del filtrado y de la pérdida de funciones endocrinas del riñón')
    cx, cy = 600, 360
    s.circle(cx, cy, 95, '#FEE2E2', RED, 3)
    s.text(cx, cy - 8, '↓ Filtrado', 22, RED, 'middle', 700)
    s.text(cx, cy + 20, 'glomerular', 18, RED, 'middle', 700)
    items = [((150, 140), 'Anemia', ['↓ eritropoyetina', 'normocítica normocrómica']),
             ((850, 140), 'Trastorno mineral óseo', ['↑ fósforo, ↓ calcitriol, ↓ calcio', '→ ↑ PTH (hiperparatiroidismo 2.º)']),
             ((80, 470), 'Acidosis metabólica', ['↓ excreción de ácido', 'anión gap normal y luego alto']),
             ((870, 470), 'Hiperkalemia', ['↓ excreción de K', 'ojo con IECA/ARA II']),
             ((470, 560), 'HTA y edema', ['retención de sodio y agua'])]
    for (x, y), t, lines in items:
        box(s, x, y, 280, 100, t, lines, INK)
        arrow(s, cx + (x + 140 - cx) * 0.33, cy + (y + 50 - cy) * 0.33, cx + (x + 140 - cx) * 0.62, cy + (y + 50 - cy) * 0.62)
    return s


def resp_23():
    s = SVG(1200, 680)
    s.title('Apnea obstructiva en la polisomnografía', 'El flujo se detiene, pero el esfuerzo continúa: la vía aérea está cerrada')
    tracks = [('Flujo nasal', BLUE), ('Esfuerzo torácico', GREEN), ('SatO2', RED)]
    for i, (lab, c) in enumerate(tracks):
        y0 = 120 + i * 170
        a = Axes(s, 220, y0, 1150, y0 + 130, 0, 60, -1.2, 1.2) if i < 2 else Axes(s, 220, y0, 1150, y0 + 130, 0, 60, 80, 100)
        s.text(200, y0 + 70, lab, 16, c, 'end', 700)
        pts = []
        for t in frange(0, 60, 900):
            apnea = 18 <= t <= 38
            if i == 0:
                v = 0.04 * math.sin(t * 2 * math.pi / 4) if apnea else math.sin(t * 2 * math.pi / 4)
            elif i == 1:
                v = (1.15 if apnea else 1) * math.sin(t * 2 * math.pi / 4)
            else:
                v = 96 - (8 * min(1, max(0, (t - 26) / 14)) if t < 44 else 8 * max(0, 1 - (t - 44) / 5))
            pts.append((t, v))
        a.curve(pts, stroke=c, sw=2.5)
    s.rect(220 + 18 / 60 * 930, 110, 20 / 60 * 930, 470, AMBER, 'none', 0, 0, 0.1)
    s.text(220 + 28 / 60 * 930, 104, 'Apnea ≥ 10 s', 15, AMBER, 'middle', 700)
    s.text(220, 640, 'IAH (apneas + hipopneas por hora): 5-14 leve · 15-29 moderado · ≥ 30 severo. Desaturación con retraso de segundos.', 15, MUTED)
    return s


FIGURES = {
    'gastro-05': [('borrmann', gastro_05)],
    'gastro-06': [('mediastino-compartimentos', gastro_06)],
    'hem-07': [('coombs', hem_07)],
    'hem-11': [('cascada-coagulacion', hem_11)],
    'oftal-09': [('vicios-refraccion', oftal_09)],
    'oftal-14': [('rejilla-amsler', oftal_14)],
    'oftal-18': [('marcus-gunn', oftal_18)],
    'neuro-06': [('aura-fortificacion', neuro_06)],
    'neuro-11': [('micrografia', neuro_11)],
    'neuro-13': [('espiral-arquimedes', neuro_13)],
    'neuro-14': [('test-del-reloj', neuro_14)],
    'neuro-24': [('cascada-prescripcion', neuro_24)],
    'gin-03': [('palm-coein', gin_03)],
    'gin-04': [('figo-miomas', gin_04)],
    'gin-06': [('pop-q', gin_06)],
    'ob-13': [('placenta-previa-dppni', ob_13)],
    'ob-16': [('variedades-fontanelas', ob_16), ('partograma', ob_16b)],
    'ob-18': [('balon-b-lynch', ob_18)],
    'ped-13': [('grados-rvu', ped_13)],
    'cirugia-01': [('puntos-apendicitis', cirugia_01)],
    'cirugia-06': [('hesselbach', cirugia_06)],
    'cirugia-09': [('abcde', cirugia_09)],
    'sp-06': [('disenos-estudio', sp_06)],
    'nefro-19': [('complicaciones-erc', nefro_19)],
    'resp-23': [('polisomnografia-apnea', resp_23)],
}
