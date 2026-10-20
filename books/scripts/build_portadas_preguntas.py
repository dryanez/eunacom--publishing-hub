# Portadas (opción 1: título grande arriba) para los libros de preguntas: Gran Libro de Reconstrucciones,
# Gran Libro Gordo y los 22 Libros Gordos 90Q. Genera cada portada como PDF de una página y la cambia por la
# página 1 del libro, sin tocar el resto (el contenido queda como está en books/dist).
# Uso (desde la raíz del repo): python3 -I books/scripts/build_portadas_preguntas.py [clave ...]
# Requiere pypdf en /usr/bin/python3 (el pyexpat de Homebrew está roto en este Mac).
import json, os, re, subprocess, sys, html, tempfile
R = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
DIST = R + '/books/dist'
CHROME = os.environ.get('CHROME_PATH', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome')
LOGO = open(R + '/books/assets/aee-logo-7a-dark.svg').read()
E = html.escape

# datos de los Libros Gordos tal como están en build_libro_gordo_pdf.cjs
NODE = r"""const fs=require('fs');const src=fs.readFileSync('books/scripts/build_libro_gordo_pdf.cjs','utf8');
const i=src.indexOf('const SPECIALTIES');const j=src.indexOf('\n};',i)+3;
const U=id=>'https://images.unsplash.com/'+id+'?fm=jpg&q=80&w=1600&auto=format&fit=crop';
eval(src.slice(i,j).replace('const SPECIALTIES','global.SP'));
fs.writeFileSync(process.argv[1],JSON.stringify(Object.entries(SP).map(([k,v])=>({k,...v}))));"""
tmpj = tempfile.mktemp(suffix='.json')
subprocess.run(['node', '-e', NODE, tmpj], cwd=R, check=True)
SPECS = json.load(open(tmpj))

U = lambda i: f'https://images.unsplash.com/{i}?fm=jpg&q=80&w=1600&auto=format&fit=crop'
BOOKS = [dict(k='reconstrucciones', file='El_Gran_Libro_EUNACOM_Reconstrucciones_2013_2025.pdf', photo=U('photo-1584515979956-d9f6e5d09982'), acc='#f43f5e',
              t0='El Gran Libro', t1='Reconstrucciones', big='2013–2025', bigl='exámenes EUNACOM', sub='Preguntas reales con comentario razonado',
              chip='2.739 preguntas reales · 16 exámenes'),
         dict(k='gran_gordo', file='El_Gran_Libro_Gordo_EUNACOM_1890Q.pdf', photo=U('photo-1576091160399-112ba8d25d1d'), acc='#38bdf8',
              t0='El Gran', t1='Libro Gordo', big='1.890', bigl='preguntas de práctica', sub='Con solucionario de cada alternativa · 21 manuales',
              chip='21 especialidades · 90 por tema')]
for s in SPECS:
    pond = s['k'] == 'ponderado'
    BOOKS.append(dict(k=s['k'], file=s['outFile'], photo=s['photo'], acc=s['color'],
                      t0='Libro Gordo · Ensayo ponderado' if pond else 'Libro Gordo', t1='Medicina Interna' if pond else s['name'],
                      big='90', bigl='preguntas de práctica', sub=s['sub'] if pond else re.sub(r'^&\s*', '', s.get('sub', '')),
                      chip=(f"{s.get('modulo') or 'Módulo 1'} · Tomo {s['num']} · {s['code']}")))

def fit(t, base=104, room=13):
    return base if len(t) <= room else int(base * room / len(t))

CSS = """@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800;900&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@500;600;700&family=Syne:wght@800&family=DM+Mono:wght@500&display=swap');
@page{size:A4;margin:0}*{box-sizing:border-box;margin:0;padding:0}html,body{width:210mm;height:297mm;overflow:hidden}
body{font-family:'IBM Plex Sans',sans-serif;color:#fff;background:#0b1420;-webkit-print-color-adjust:exact;print-color-adjust:exact;position:relative}
.ph{position:absolute;inset:0;background-size:cover;background-position:center;filter:grayscale(.4) brightness(.45) contrast(1.1)}
.vl{position:absolute;inset:0;background:linear-gradient(180deg,rgba(11,20,32,.85) 0%,rgba(11,20,32,.5) 35%,rgba(11,20,32,.92) 75%,rgba(11,20,32,.98) 100%)}
.sp{position:absolute;left:0;top:0;bottom:0;width:14px;background:var(--a)}
.w{position:absolute;inset:0;padding:56px 60px 56px 72px;display:flex;flex-direction:column}
.top{display:flex;justify-content:space-between;align-items:flex-start}.top svg{height:96px;width:auto;margin-left:-38px;display:block}
.ed{font:700 11px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;color:var(--a);border:1px solid var(--a);padding:7px 11px;background:rgba(8,13,20,.6)}
.t0{font:600 22px/1 'IBM Plex Sans';color:#c6d0dd;margin-top:46px}
.t1{font:900 104px/.86 'Barlow Condensed';text-transform:uppercase;letter-spacing:-.02em;margin-top:6px}
.bar{height:6px;width:140px;background:var(--a);margin:22px 0 18px}.big{font:800 46px/1 'Barlow Condensed';color:var(--a)}.bl{font:600 18px/1.3 'IBM Plex Sans'}
.sub{font:500 18px/1.3 'IBM Plex Sans';color:#c6d0dd;margin-top:6px}
.bot{margin-top:auto;border-top:1px solid rgba(255,255,255,.35);padding-top:14px;display:flex;justify-content:space-between;font:600 11px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;color:#b6c1d0;text-transform:uppercase}"""

def cover(b):
    return (f'<!doctype html><html lang="es"><head><meta charset="utf-8"><style>{CSS}</style></head><body style="--a:{b["acc"]}">'
            f'<div class="ph" style="background-image:url({b["photo"]})"></div><div class="vl"></div><div class="sp"></div><div class="w">'
            f'<div class="top">{LOGO}<span class="ed">1ª EDICIÓN · 2026</span></div><div class="t0">{E(b["t0"])}</div>'
            f'<div class="t1" style="font-size:{fit(b["t1"])}px">{E(b["t1"])}</div><div class="bar"></div>'
            f'<div><span class="big">{E(b["big"])}</span> <span class="bl">{E(b["bigl"])}</span></div><div class="sub">{E(b["sub"])}</div>'
            f'<div class="bot"><span>{E(b["chip"])}</span><span>Academia Examen EUNACOM</span></div></div></body></html>')

SWAP = r"""import sys, pypdf
cov, book = sys.argv[1], sys.argv[2]
w = pypdf.PdfWriter(); w.add_page(pypdf.PdfReader(cov).pages[0])
for p in pypdf.PdfReader(book).pages[1:]: w.add_page(p)
w.write(book + '.tmp')"""

want = set(sys.argv[1:])
for b in BOOKS:
    if want and b['k'] not in want: continue
    sub = '03_Reconstrucciones' if 'Reconstrucciones' in b['file'] else '02_Libros_Gordos_90Q'
    book = f'{DIST}/{sub}/{b["file"]}'
    if not os.path.exists(book): print('falta', b['file']); continue
    h = tempfile.mktemp(suffix='.html'); pdf = h[:-5] + '.pdf'; open(h, 'w').write(cover(b))
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--no-pdf-header-footer', '--virtual-time-budget=8000', f'--print-to-pdf={pdf}', 'file://' + h], capture_output=True, timeout=180)
    subprocess.run(['/usr/bin/python3', '-c', SWAP, pdf, book], check=True)
    os.replace(book + '.tmp', book)
    print('portada', b['file'])
