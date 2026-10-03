"""
draw_ctg.py
Dibuja un registro cardiotocográfico (RBNE) en SVG, con papel milimetrado, canal de FCF y canal de
dinámica uterina, para usarlo como imagen en las clases (tipo de diapositiva 'image').

    python classes/scripts/draw_ctg.py reactivo classes/media/ob-03/rbne_reactivo.svg

Imprime la posición (en % del ancho/alto) de cada hallazgo, para usarla en las marcas de la diapositiva.
"""

import math
import random
import sys

W, H = 1200, 600
L, R = 70, 1180                 # márgenes del trazado
FCF_TOP, FCF_BOT = 30, 360      # canal de FCF: 210 → 50 lpm
TOCO_TOP, TOCO_BOT = 400, 560   # canal toco: 100 → 0 mmHg
MINUTES = 20


def fx(t):
    return L + (R - L) * t / (MINUTES * 60)


def fy(bpm):
    return FCF_BOT - (bpm - 50) * (FCF_BOT - FCF_TOP) / 160


def ty(mmhg):
    return TOCO_BOT - mmhg * (TOCO_BOT - TOCO_TOP) / 100


def trace(kind, seed=7):
    random.seed(seed)
    base = 140
    accels = [(240, 40), (600, 45), (960, 38)] if kind == 'reactivo' else []
    pts, v = [], 0.0
    for s in range(0, MINUTES * 60 + 1, 2):
        v = 0.75 * v + random.gauss(0, 3.2)          # variabilidad de corto plazo (~±7 lpm)
        bpm = base + v
        for start, dur in accels:
            if start <= s <= start + dur:
                bpm += 25 * math.sin(math.pi * (s - start) / dur)
        pts.append((s, bpm))
    return pts, accels


def toco(seed=3):
    random.seed(seed)
    pts = []
    for s in range(0, MINUTES * 60 + 1, 4):
        p = 12 + random.gauss(0, 1.2)
        for c in (420, 1020):                          # dos contracciones leves de Braxton Hicks
            if c <= s <= c + 70:
                p += 22 * math.sin(math.pi * (s - c) / 70)
        pts.append((s, p))
    return pts


def svg(kind):
    o = [f'<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 {W} {H}" font-family="Helvetica, Arial, sans-serif">',
         f'<rect width="{W}" height="{H}" fill="#fffdf8"/>']
    for top, bot, lo, hi, step, major in ((FCF_TOP, FCF_BOT, 50, 210, 10, 30), (TOCO_TOP, TOCO_BOT, 0, 100, 10, 50)):
        for val in range(lo, hi + 1, step):
            y = bot - (val - lo) * (bot - top) / (hi - lo)
            strong = val % major == 0
            o.append(f'<line x1="{L}" x2="{R}" y1="{y:.1f}" y2="{y:.1f}" stroke="{"#e6a9a9" if strong else "#f3d6d6"}" stroke-width="{1.2 if strong else 0.6}"/>')
            if strong:
                o.append(f'<text x="{L - 8}" y="{y + 4:.1f}" font-size="13" text-anchor="end" fill="#9a4a4a">{val}</text>')
        for sec in range(0, MINUTES * 60 + 1, 10):
            x = fx(sec)
            strong = sec % 60 == 0
            o.append(f'<line x1="{x:.1f}" x2="{x:.1f}" y1="{top}" y2="{bot}" stroke="{"#e6a9a9" if strong else "#f6e2e2"}" stroke-width="{1.2 if strong else 0.5}"/>')
    for m in range(0, MINUTES + 1, 2):
        o.append(f'<text x="{fx(m * 60):.1f}" y="{FCF_BOT + 22}" font-size="13" text-anchor="middle" fill="#9a4a4a">{m} min</text>')
    o.append(f'<rect x="{L}" y="{fy(160):.1f}" width="{R - L}" height="{fy(110) - fy(160):.1f}" fill="#2f6b3f" opacity="0.06"/>')
    o.append(f'<text x="{L + 8}" y="{FCF_TOP + 18}" font-size="15" font-weight="700" fill="#5a2a2a">FCF (lpm)</text>')
    o.append(f'<text x="{L + 8}" y="{TOCO_TOP + 18}" font-size="15" font-weight="700" fill="#5a2a2a">Dinámica uterina (mmHg)</text>')
    pts, accels = trace(kind)
    d = ' '.join(f'{"M" if i == 0 else "L"}{fx(s):.1f},{fy(b):.1f}' for i, (s, b) in enumerate(pts))
    o.append(f'<path d="{d}" fill="none" stroke="#111" stroke-width="1.6" stroke-linejoin="round"/>')
    tp = toco()
    d = ' '.join(f'{"M" if i == 0 else "L"}{fx(s):.1f},{ty(p):.1f}' for i, (s, p) in enumerate(tp))
    o.append(f'<path d="{d}" fill="none" stroke="#111" stroke-width="1.6"/>')
    for start, dur in accels:                          # marcas de movimiento fetal percibido por la madre
        o.append(f'<path d="M{fx(start + dur / 2):.1f},{TOCO_TOP - 3} l-6,-10 h12 z" fill="#111"/>')
    o.append('</svg>')
    marks = {
        'basal': (fx(60) / W * 100, fy(150) / H * 100, (fx(220) - fx(60)) / W * 100, (fy(130) - fy(150)) / H * 100),
        'variabilidad': (fx(700) / W * 100, fy(152) / H * 100, (fx(900) - fx(700)) / W * 100, (fy(128) - fy(152)) / H * 100),
        'aceleraciones': [(fx(s - 10) / W * 100, fy(172) / H * 100, (fx(s + dur + 10) - fx(s - 10)) / W * 100, (fy(135) - fy(172)) / H * 100) for s, dur in accels],
        'toco': (fx(400) / W * 100, ty(40) / H * 100, (fx(500) - fx(400)) / W * 100, (ty(5) - ty(40)) / H * 100),
    }
    return '\n'.join(o), marks


if __name__ == '__main__':
    kind, out = sys.argv[1], sys.argv[2]
    s, marks = svg(kind)
    open(out, 'w', encoding='utf-8').write(s)
    for k, v in marks.items():
        print(k, [tuple(round(x, 1) for x in m) for m in v] if isinstance(v, list) else tuple(round(x, 1) for x in v))
