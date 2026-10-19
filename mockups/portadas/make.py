# 5 opciones de portada para los libros de preguntas (Reconstrucciones, Gran Libro Gordo, Libros Gordos 90Q).
# Mismo fondo y velo que hoy; cambia la tipografía: título grande y arriba. Uso: python3 -I mockups/portadas/make.py
import os, subprocess
D = os.path.dirname(os.path.abspath(__file__)); R = os.path.abspath(os.path.join(D, '..', '..'))
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
LOGO = open(R + '/books/assets/aee-logo-7a-dark.svg').read()
U = lambda i, w=1600: f'https://images.unsplash.com/{i}?fm=jpg&q=80&w={w}&auto=format&fit=crop'
BOOKS = [
    dict(k='rec', photo=U('photo-1584515979956-d9f6e5d09982'), acc='#f43f5e', kick='Reconstrucciones oficiales · Banco histórico',
         t1='Reconstrucciones', t0='El Gran Libro', big='2013–2025', bigl='exámenes EUNACOM', sub='Preguntas reales con comentario razonado', chip='2.739 PREGUNTAS REALES · 16 EXÁMENES'),
    dict(k='gordo', photo=U('photo-1576091160399-112ba8d25d1d'), acc='#38bdf8', kick='Compilación enciclopédica · 21 tomos',
         t1='Libro Gordo', t0='El Gran', big='1.890', bigl='preguntas de práctica', sub='Con solucionario de cada alternativa', chip='21 ESPECIALIDADES · 90 POR TEMA'),
    dict(k='ped', photo=U('photo-1504743591040-f3bec9c542cd'), acc='#c2410c', kick='Módulo 3 · Tomo 18',
         t1='Pediatría', t0='Libro Gordo', big='90', bigl='preguntas de práctica', sub='Pediatría general & Neonatología', chip='TOMO 18 · PD'),
]
FONTS = "@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600;700&family=Syne:wght@800&family=DM+Mono:wght@500&family=Archivo:wght@800;900&display=swap');"
BASE = FONTS + """*{box-sizing:border-box;margin:0;padding:0}html,body{width:794px;height:1123px;overflow:hidden}
body{font-family:'IBM Plex Sans',sans-serif;color:#fff;background:#0b1420;-webkit-print-color-adjust:exact}
.ph{position:absolute;inset:0;background-size:cover;background-position:center;filter:grayscale(.4) brightness(.45) contrast(1.1)}
.vl{position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,20,32,.85) 0%,rgba(11,20,32,.5) 35%,rgba(11,20,32,.92) 75%,rgba(11,20,32,.98) 100%)}
.sp{position:absolute;left:0;top:0;bottom:0;width:14px;background:var(--a)}
.w{position:absolute;inset:0;padding:56px 60px 56px 72px;display:flex;flex-direction:column}
.top{display:flex;justify-content:space-between;align-items:flex-start}.top svg{height:96px;width:auto;margin-left:-38px;display:block}
.ed{font:700 11px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;color:var(--a);border:1px solid var(--a);padding:7px 11px;background:rgba(8,13,20,.6)}
.kick{font:700 11px/1.3 'IBM Plex Mono',monospace;letter-spacing:.16em;text-transform:uppercase;color:var(--a)}"""

def doc(b, css, body):
    return f'<!doctype html><html><head><meta charset="utf-8"><style>{BASE}{css}</style></head><body style="--a:{b["acc"]}"><div class="ph" style="background-image:url({b["photo"]})"></div><div class="vl"></div><div class="sp"></div><div class="w">{body}</div></body></html>'

def fit(b, base, room=13):
    n = len(b['t1'])
    return base if n <= room else int(base * room / n)

TOP = lambda b: f'<div class="top">{LOGO}<span class="ed">1ª EDICIÓN · 2026</span></div>'

# 1 · Título gigante arriba: el nombre llena el ancho justo bajo el logo
def o1(b):
    css = """.t0{font:600 22px/1 'IBM Plex Sans';color:#c6d0dd;margin-top:46px}
    .t1{font:900 104px/.86 'Barlow Condensed';text-transform:uppercase;letter-spacing:-.02em;margin-top:6px}
    .bar{height:6px;width:140px;background:var(--a);margin:22px 0 18px}.big{font:800 46px/1 'Barlow Condensed';color:var(--a)}.bl{font:600 18px/1.3 'IBM Plex Sans'}
    .bot{margin-top:auto;border-top:1px solid rgba(255,255,255,.35);padding-top:14px;display:flex;justify-content:space-between;font:600 11px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;color:#b6c1d0}"""
    return doc(b, css, f'{TOP(b)}<div class="t0">{b["t0"]}</div><div class="t1" style="font-size:{fit(b,104)}px">{b["t1"]}</div><div class="bar"></div><div><span class="big">{b["big"]}</span> <span class="bl">{b["bigl"]}</span></div>'
                       f'<div class="bl" style="color:#c6d0dd;font-weight:500;margin-top:6px">{b["sub"]}</div><div class="bot"><span>{b["chip"]}</span><span>ACADEMIA EXAMEN EUNACOM</span></div>')

# 2 · Número protagonista: la cifra enorme en color arriba, el título debajo
def o2(b):
    css = """.big{font:900 168px/.8 'Barlow Condensed';color:var(--a);letter-spacing:-.03em;margin-top:40px}.bl{font:700 15px/1 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase;margin-top:12px;color:#fff}
    .t1{font:900 78px/.9 'Barlow Condensed';text-transform:uppercase;margin-top:30px}.t0{font:600 20px/1 'IBM Plex Sans';color:#c6d0dd;margin-top:30px}
    .sub{font:500 17px/1.3 'IBM Plex Sans';color:#c6d0dd;margin-top:10px}.bot{margin-top:auto;font:600 11px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;color:#b6c1d0}"""
    return doc(b, css, f'{TOP(b)}<div class="big">{b["big"]}</div><div class="bl">{b["bigl"]}</div><div class="t0">{b["t0"]}</div><div class="t1" style="font-size:{fit(b,78)}px">{b["t1"]}</div><div class="sub">{b["sub"]}</div><div class="bot">{b["chip"]} · ACADEMIA EXAMEN EUNACOM</div>')

# 3 · Banda de color: título blanco dentro de una franja del color del libro, alto en la página
def o3(b):
    css = """.band{margin:44px -60px 0 -72px;padding:22px 60px 24px 72px;background:var(--a)}.band .t0{font:700 18px/1 'IBM Plex Sans';color:rgba(255,255,255,.85)}
    .band .t1{font:900 92px/.88 'Barlow Condensed';text-transform:uppercase;letter-spacing:-.02em;margin-top:6px}
    .big{font:800 54px/1 'Barlow Condensed';margin-top:26px}.big span{font:600 17px/1 'IBM Plex Sans';color:#c6d0dd;margin-left:8px}.sub{font:500 16px/1.3 'IBM Plex Sans';color:#c6d0dd;margin-top:6px}
    .bot{margin-top:auto;display:flex;justify-content:space-between;font:600 11px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;color:#b6c1d0}"""
    return doc(b, css, f'{TOP(b)}<div class="band"><div class="t0">{b["t0"]}</div><div class="t1" style="font-size:{fit(b,92)}px">{b["t1"]}</div></div><div class="big">{b["big"]}<span>{b["bigl"]}</span></div><div class="sub">{b["sub"]}</div><div class="bot"><span>{b["chip"]}</span><span>AEE</span></div>')

# 4 · Contorno + relleno: palabra principal en contorno gigante detrás y el título sólido encima
def o4(b):
    css = """.ghost{position:absolute;left:58px;top:150px;font:900 150px/.82 'Barlow Condensed';text-transform:uppercase;color:transparent;-webkit-text-stroke:1.5px rgba(255,255,255,.22);letter-spacing:-.02em;width:740px}
    .kick{margin-top:52px}.t1{font:900 96px/.86 'Barlow Condensed';text-transform:uppercase;margin-top:10px;position:relative}
    .t0{font:600 22px/1 'IBM Plex Sans';color:#c6d0dd;margin-top:14px}.row{display:flex;gap:26px;margin-top:26px;align-items:flex-end}
    .big{font:800 60px/.9 'Barlow Condensed';color:var(--a)}.bl{font:600 14px/1.3 'IBM Plex Sans';max-width:200px}
    .bot{margin-top:auto;border-top:1px solid rgba(255,255,255,.35);padding-top:14px;font:600 11px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;color:#b6c1d0}"""
    return doc(b, css, f'<div class="ghost" style="font-size:{fit(b,150,9)}px">{b["t1"]}</div>{TOP(b)}<div class="kick">{b["kick"]}</div><div class="t1" style="font-size:{fit(b,96)}px">{b["t1"]}</div><div class="t0">{b["t0"]} · {b["sub"]}</div>'
                       f'<div class="row"><div class="big">{b["big"]}</div><div class="bl">{b["bigl"]}</div></div><div class="bot">{b["chip"]} · ACADEMIA EXAMEN EUNACOM</div>')

# 5 · Igual que los 21 manuales, pero el bloque del título sube al tercio superior y crece
def o5(b):
    css = """.chip{align-self:flex-start;background:var(--a);font:700 12px/1 'IBM Plex Mono',monospace;letter-spacing:.16em;padding:7px 13px;margin-top:60px}
    .t0{font:500 20px/1.2 'IBM Plex Sans';color:#c6d0dd;margin-top:16px}.t1{font:900 98px/.9 'Barlow Condensed';text-transform:uppercase;letter-spacing:-.02em;margin:2px 0}
    .sub{font:600 22px/1.2 'IBM Plex Sans'}.div{height:1.5px;background:rgba(255,255,255,.4);margin:22px 0 16px}
    .stats{display:flex;gap:30px}.stats b{display:block;font:800 40px/1 'Barlow Condensed';color:var(--a)}.stats span{font:600 10px/1.3 'IBM Plex Mono',monospace;letter-spacing:.12em;text-transform:uppercase;color:#b6c1d0}
    .bot{margin-top:auto;font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.08em;color:#b6c1d0}"""
    return doc(b, css, f'{TOP(b)}<div class="chip">{b["chip"]}</div><div class="t0">{b["t0"]}</div><div class="t1" style="font-size:{fit(b,98)}px">{b["t1"]}</div><div class="sub">{b["sub"]}</div><div class="div"></div>'
                       f'<div class="stats"><div><b>{b["big"]}</b><span>{b["bigl"]}</span></div></div><div class="bot">Academia Examen EUNACOM · Colección 2026</div>')

if __name__ == '__main__':
    from PIL import Image, ImageDraw
    for i, f in enumerate([o1, o2, o3, o4, o5], 1):
        ims = []
        for b in BOOKS:
            h = f'{D}/op{i}_{b["k"]}.html'; png = h[:-5] + '.png'; open(h, 'w').write(f(b))
            subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--window-size=794,1123', '--virtual-time-budget=6000', f'--screenshot={png}', 'file://' + h], capture_output=True, timeout=120)
            ims.append(Image.open(png).convert('RGB'))
        w, hh = ims[0].size; S = Image.new('RGB', (w * 3 + 40, hh), '#e5e7eb')
        for j, im in enumerate(ims): S.paste(im, (j * (w + 20), 0))
        S.thumbnail((1800, 900)); S.save(f'{D}/opcion_{i}.png'); print('ok', i)
