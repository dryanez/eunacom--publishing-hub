"""
draw_animations.py
Animaciones SVG (SMIL) que se dibujan solas en bucle. Funcionan dentro de <img>, así que el reproductor
las muestra con la diapositiva `type: 'image'` sin cambios.

    python classes/scripts/draw_animations.py            # todas
    python classes/scripts/draw_animations.py ob-17      # solo una clase

Salida: classes/media/biblioteca/<esp>/<clase>/A*_<nombre>__animacion.svg
Los trazados son esquemas didácticos (forma y relación temporal), no registros reales.
"""
import math, os, random, sys

ROOT = os.path.join(os.path.dirname(__file__), '..', 'media', 'biblioteca')
FONT = "font-family='Helvetica, Arial, sans-serif'"
INK, RED, BLUE, GRID, MUTED = '#1d1d1f', '#c0392b', '#1f5fa8', '#f3c4c4', '#6e6e73'


def path(points):
    return 'M' + ' L'.join(f'{x:.1f},{y:.1f}' for x, y in points)


def reveal(cid, x0, y0, w, h, dur, hold=0.25):
    """clipPath cuyo ancho crece de 0 a w (dibuja de izquierda a derecha), espera y reinicia."""
    kt = f'0;{1 - hold:.2f};1'
    return (f"<clipPath id='{cid}'><rect x='{x0}' y='{y0}' width='0' height='{h}'>"
            f"<animate attributeName='width' values='0;{w};{w}' keyTimes='{kt}' dur='{dur}s' repeatCount='indefinite'/>"
            f"</rect></clipPath>")


def cursor(x0, y0, w, h, dur, hold=0.25):
    kt = f'0;{1 - hold:.2f};1'
    return (f"<line x1='{x0}' x2='{x0}' y1='{y0}' y2='{y0 + h}' stroke='{RED}' stroke-width='2' opacity='0.55'>"
            f"<animate attributeName='x1' values='{x0};{x0 + w};{x0 + w}' keyTimes='{kt}' dur='{dur}s' repeatCount='indefinite'/>"
            f"<animate attributeName='x2' values='{x0};{x0 + w};{x0 + w}' keyTimes='{kt}' dur='{dur}s' repeatCount='indefinite'/>"
            f"</line>")


def save(rel, svg):
    out = os.path.join(ROOT, rel)
    os.makedirs(os.path.dirname(out), exist_ok=True)
    open(out, 'w', encoding='utf-8').write(svg)
    print('  ', rel)


# ---------------------------------------------------------------- ob-17: desaceleraciones
def ctg(kind):
    W, H = 1050, 470
    X0, PW = 70, 860                      # área de trazado
    FY0, FH = 70, 220                     # panel FCF (110–170 lpm)
    TY0, TH = 330, 100                    # panel tocograma (0–100 mmHg)
    minutes = 10
    peaks = [2.0, 5.3, 8.4]               # minutos
    rnd = random.Random({'precoz': 1, 'tardia': 2, 'variable': 3}[kind])

    def fy(bpm): return FY0 + (170 - bpm) / 90 * FH
    def ty(p): return TY0 + TH - p / 100 * TH
    def tx(m): return X0 + m / minutes * PW

    def contraction(m):
        return sum(70 * math.exp(-((m - p) / 0.38) ** 2) for p in peaks)

    def dip(m):
        d = 0
        for i, p in enumerate(peaks):
            if kind == 'precoz':          # espejo de la contracción, nadir en el acmé
                d += 22 * math.exp(-((m - p) / 0.38) ** 2)
            elif kind == 'tardia':        # empieza tarde, nadir ~40 s después del acmé, recupera lento
                c = p + 0.65
                s = 0.38 if m < c else 0.6
                d += 25 * math.exp(-((m - c) / s) ** 2)
            else:                         # variable: brusca, en V, sin relación fija
                c = p + [-0.5, 0.15, 0.7][i]
                depth = [40, 52, 34][i]
                w = 0.12
                d += depth * max(0, 1 - abs(m - c) / w) ** 1.4
                d -= 6 * math.exp(-((m - (c - w - 0.08)) / 0.06) ** 2)   # hombros
                d -= 6 * math.exp(-((m - (c + w + 0.08)) / 0.06) ** 2)
        return d

    knots = [rnd.uniform(-5, 5) for _ in range(minutes * 12 + 2)]      # variabilidad: un valor cada 5 s, interpolado
    def var(m):
        f = m * 12; i = int(f); a = f - i
        return knots[i] * (1 - a) + knots[i + 1] * a
    fhr, toco = [], []
    n = 900
    for k in range(n + 1):
        m = k / n * minutes
        v = var(m)
        fhr.append((tx(m), fy(140 + v - dip(m))))
        toco.append((tx(m), ty(8 + contraction(m))))

    grid = []
    for b in range(80, 171, 10):
        grid.append(f"<line x1='{X0}' x2='{X0 + PW}' y1='{fy(b):.1f}' y2='{fy(b):.1f}' stroke='{GRID}' stroke-width='{1.4 if b % 30 == 20 else 0.7}'/>")
        if b % 30 == 20:
            grid.append(f"<text x='{X0 - 10}' y='{fy(b) + 4:.1f}' text-anchor='end' font-size='13' fill='{MUTED}' {FONT}>{b}</text>")
    for p in (0, 50, 100):
        grid.append(f"<line x1='{X0}' x2='{X0 + PW}' y1='{ty(p):.1f}' y2='{ty(p):.1f}' stroke='{GRID}' stroke-width='0.8'/>")
    for m in range(minutes + 1):
        grid.append(f"<line x1='{tx(m):.1f}' x2='{tx(m):.1f}' y1='{FY0}' y2='{TY0 + TH}' stroke='{GRID}' stroke-width='0.7'/>")
    peak_lines = ''.join(
        f"<line x1='{tx(p):.1f}' x2='{tx(p):.1f}' y1='{FY0}' y2='{TY0 + TH}' stroke='{BLUE}' stroke-width='1.5' stroke-dasharray='6 5' opacity='0.7'/>"
        for p in peaks)

    titles = {'precoz': ('Desaceleración precoz', 'Espejo de la contracción: el punto más bajo coincide con el acmé', '#2e7d32'),
              'tardia': ('Desaceleración tardía', 'Empieza después del acmé y se recupera lento: hipoxia', RED),
              'variable': ('Desaceleración variable', 'Brusca, en V, sin relación fija: compresión del cordón', '#b26a00')}
    t1, t2, col = titles[kind]
    dur = 9
    svg = f"""<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 {W} {H}'>
<rect width='{W}' height='{H}' fill='#fffdfa'/>
<defs>{reveal('r', X0, 0, PW, H, dur)}</defs>
<text x='{X0}' y='34' font-size='24' font-weight='700' fill='{col}' {FONT}>{t1}</text>
<text x='{X0}' y='56' font-size='15' fill='{MUTED}' {FONT}>{t2}</text>
{''.join(grid)}
<text x='{X0 + PW + 8}' y='{FY0 + 14}' font-size='13' fill='{MUTED}' {FONT}>FCF</text>
<text x='{X0 + PW + 8}' y='{FY0 + 30}' font-size='12' fill='{MUTED}' {FONT}>lpm</text>
<text x='{X0 + PW + 8}' y='{TY0 + 14}' font-size='13' fill='{MUTED}' {FONT}>Contracción</text>
{peak_lines}
<text x='{tx(peaks[0]) + 6:.1f}' y='{TY0 - 8}' font-size='12' fill='{BLUE}' {FONT}>acmé</text>
<g clip-path='url(#r)'>
  <path d='{path(fhr)}' fill='none' stroke='{INK}' stroke-width='2'/>
  <path d='{path(toco)}' fill='none' stroke='{BLUE}' stroke-width='2.4'/>
</g>
{cursor(X0, FY0, PW, TY0 + TH - FY0, dur)}
<text x='{X0}' y='{H - 10}' font-size='12' fill='{MUTED}' {FONT}>1 cuadro = 1 minuto · esquema didáctico</text>
</svg>"""
    return svg


# ---------------------------------------------------------------- nefro-09: hiperkalemia
def ecg(stage):
    W, H = 960, 330
    X0, PW, Y0 = 40, 880, 190
    S = {  # p_amp, pr, qrs_w, t_amp, t_w, label, nota, color
        'normal': (14, 0.16, 0.08, 28, 0.16, 'K⁺ normal', 'P, QRS angosto y T de base ancha', INK),
        't': (14, 0.16, 0.09, 85, 0.09, 'K⁺ 5,5 a 6,5', 'T alta, picuda, simétrica y de base angosta', '#b26a00'),
        'pr': (5, 0.26, 0.11, 85, 0.09, 'K⁺ 6,5 a 7,0', 'PR largo y P aplanada', '#d35400'),
        'qrs': (0, 0.26, 0.22, 80, 0.13, 'K⁺ 7,0 a 8,0', 'Sin onda P, QRS ancho que se funde con la T', RED),
        'sin': (0, 0, 0, 0, 0, 'K⁺ sobre 8', 'Onda sinusoidal: paso previo al paro', '#7b1010'),
    }
    p_amp, pr, qw, t_amp, t_w, label, note, col = S[stage]
    beat = 1.0 if stage != 'sin' else 1.25           # s
    secs = 4.4
    pts = []
    n = 1400
    for k in range(n + 1):
        t = k / n * secs
        if stage == 'sin':
            y = 70 * math.sin(2 * math.pi * t / beat)
        else:
            y = 0
            for u in (t % beat, t % beat + beat, t % beat - beat):     # suma el latido anterior y el siguiente
                y += p_amp * math.exp(-((u - 0.10) / 0.035) ** 2)
                q0 = 0.10 + pr
                # QRS: q pequeña, R, S; se ensancha con qw
                y += -10 * math.exp(-((u - q0) / (qw * 0.18)) ** 2)
                y += 110 * math.exp(-((u - q0 - qw * 0.35) / (qw * 0.22)) ** 2)
                y += -28 * math.exp(-((u - q0 - qw * 0.75) / (qw * 0.22)) ** 2)
                tc = q0 + qw + 0.18 + t_w
                y += t_amp * math.exp(-((u - tc) / t_w) ** 2)
        pts.append((X0 + t / secs * PW, Y0 - y))
    grid = []
    for gx in range(X0, X0 + PW + 1, 20):
        grid.append(f"<line x1='{gx}' x2='{gx}' y1='70' y2='{H - 20}' stroke='{GRID}' stroke-width='{1.2 if (gx - X0) % 100 == 0 else 0.5}'/>")
    for gy in range(70, H - 19, 20):
        grid.append(f"<line x1='{X0}' x2='{X0 + PW}' y1='{gy}' y2='{gy}' stroke='{GRID}' stroke-width='{1.2 if (gy - 70) % 100 == 0 else 0.5}'/>")
    dur = 5
    return f"""<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 {W} {H}'>
<rect width='{W}' height='{H}' fill='#fffdfa'/>
<defs>{reveal('r', X0, 0, PW, H, dur)}</defs>
{''.join(grid)}
<text x='{X0}' y='34' font-size='26' font-weight='700' fill='{col}' {FONT}>{label}</text>
<text x='{X0}' y='58' font-size='16' fill='{MUTED}' {FONT}>{note}</text>
<g clip-path='url(#r)'><path d='{path(pts)}' fill='none' stroke='{col}' stroke-width='2.6' stroke-linejoin='round'/></g>
{cursor(X0, 70, PW, H - 90, dur)}
<text x='{X0 + PW}' y='{H - 4}' text-anchor='end' font-size='12' fill='{MUTED}' {FONT}>esquema didáctico</text>
</svg>"""


JOBS = {
    'ob-17': [(f'14_obstetricia/ob-17/A{i}_desaceleracion_{k}__animacion.svg', lambda k=k: ctg(k))
              for i, k in enumerate(['precoz', 'tardia', 'variable'], 1)],
    'nefro-09': [(f'03_nefrologia/nefro-09/A{i}_ecg_hiperkalemia_{k}__animacion.svg', lambda k=k: ecg(k))
                 for i, k in enumerate(['normal', 't', 'pr', 'qrs', 'sin'], 1)],
}

if __name__ == '__main__':
    for cls in (sys.argv[1:] or JOBS):
        print(cls)
        for rel, fn in JOBS[cls]:
            save(rel, fn())
