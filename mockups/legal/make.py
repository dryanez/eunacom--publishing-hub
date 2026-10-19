# 5 propuestas de página legal / ficha editorial (A4). Uso: python3 -I mockups/legal/make.py  → mockups/legal/estilo_N.html + .png
import os, subprocess, re
D = os.path.dirname(os.path.abspath(__file__))
R = os.path.abspath(os.path.join(D, '..', '..'))
CHROME = '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
LOGO_D = open(R + '/books/assets/aee-logo-7a-dark.svg').read()     # texto claro (fondos oscuros)
LOGO_L = open(R + '/books/assets/aee-logo-smooth.svg').read()      # fondos claros

TITULO = 'Perfil EUNACOM V3 · Código por código'
FICHA = [('Título', TITULO), ('Autoría', 'Comité Médico Pedagógico de la Academia Examen EUNACOM (AEE)'),
         ('Entidad editora', 'Wiackowska Group SpA · Santiago de Chile'), ('Edición', 'Primera edición · 2026'),
         ('Contenido', '1.556 códigos del Perfil V3 · 21 especialidades · 4 módulos'),
         ('Alineación', 'Perfil de Conocimientos EUNACOM V3 2026 · ASOFAMECh / MINSAL'), ('Sitio', 'eunacom-examen.cl')]
LEGAL = [('Uso permitido', 'Esta guía es de distribución gratuita. Puede compartirse en su forma original, completa y sin modificaciones, siempre sin fines comerciales. Se prohíbe su venta, reventa, alteración, extracción de contenido o inclusión en bancos de preguntas no autorizados.'),
         ('Legislación aplicable', 'Obra protegida por las leyes de la República de Chile, en particular la Ley N° 17.336 sobre Propiedad Intelectual, sus reglamentos y los convenios internacionales ratificados por el Estado de Chile.'),
         ('Propiedad intelectual', 'Los textos, resúmenes, explicaciones, diseño y organización de esta obra son propiedad de Wiackowska Group SpA y la Academia Examen EUNACOM. Las preguntas reales EUNACOM se citan con fines educativos, indicando su examen de origen.'),
         ('Responsabilidad médica', 'Material de estudio para rendir el Examen Único Nacional de Conocimientos de Medicina. No reemplaza el juicio clínico, las guías clínicas MINSAL vigentes ni la indicación de un médico tratante.')]
COPY = '© 2026 Academia Examen EUNACOM (AEE) · Wiackowska Group SpA'
FONTS = "@import url('https://fonts.googleapis.com/css2?family=Spectral:ital,wght@0,400;0,600;0,700;1,400&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500;600&family=Barlow+Condensed:wght@600;700;800&family=Cormorant+Garamond:ital,wght@0,500;0,600;1,500&family=Syne:wght@800&family=DM+Mono:wght@500&display=swap');"
BASE = FONTS + "*{box-sizing:border-box;margin:0;padding:0}@page{size:A4;margin:0}html,body{width:794px;height:1123px}body{-webkit-print-color-adjust:exact;print-color-adjust:exact;overflow:hidden}"

def page(css, body): return f'<!doctype html><html lang="es"><head><meta charset="utf-8"><style>{BASE}{css}</style></head><body>{body}</body></html>'

# 1 · Clásico editorial: página de créditos de un libro impreso, todo serif, centrado, mucho aire
def s1():
    fic = ''.join(f'<p><span>{a}</span>{b}</p>' for a, b in FICHA)
    leg = ''.join(f'<p><i>{a}.</i> {b}</p>' for a, b in LEGAL)
    css = """body{background:#fdfcf8;color:#1c1917;font-family:'Spectral',serif}
    .w{position:absolute;inset:0;padding:120px 120px 90px;display:flex;flex-direction:column}
    .logo svg{height:46px;width:auto;display:block;margin:0 auto}
    h1{font:600 26px/1.25 'Cormorant Garamond',serif;text-align:center;margin:38px 0 6px;letter-spacing:.01em}
    .orn{text-align:center;color:#a8a29e;letter-spacing:.6em;margin:6px 0 34px;font-size:12px}
    .fic p{font-size:11px;line-height:1.9;text-align:center}.fic span{font-variant:small-caps;letter-spacing:.08em;color:#78716c;margin-right:8px}
    .leg{margin-top:auto;column-count:2;column-gap:34px}.leg p{font-size:9.6px;line-height:1.65;text-align:justify;margin-bottom:9px;break-inside:avoid;color:#44403c}.leg i{font-weight:600;font-style:italic;color:#1c1917}
    .cp{margin-top:22px;padding-top:12px;border-top:.6px solid #a8a29e;text-align:center;font-size:9.5px;font-variant:small-caps;letter-spacing:.12em;color:#57534e}"""
    return page(css, f'<div class="w"><div class="logo">{LOGO_L}</div><h1>{TITULO}</h1><div class="orn">◆ ◆ ◆</div><div class="fic">{fic}</div><div class="leg">{leg}</div><div class="cp">{COPY} · Todos los derechos reservados</div></div>')

# 2 · Certificado: fondo azul noche, doble marco fino, sello circular, aire de documento oficial
def s2():
    fic = ''.join(f'<tr><th>{a}</th><td>{b}</td></tr>' for a, b in FICHA)
    leg = ''.join(f'<div class="it"><b>{a}</b><p>{b}</p></div>' for a, b in LEGAL)
    css = """body{background:#0b1420;color:#e2e8f0;font-family:'IBM Plex Sans',sans-serif}
    .f1{position:absolute;inset:26px;border:1px solid rgba(11,217,231,.55)}.f2{position:absolute;inset:34px;border:.5px solid rgba(11,217,231,.25)}
    .w{position:absolute;inset:34px;padding:60px 64px 50px;display:flex;flex-direction:column}
    .top{display:flex;justify-content:space-between;align-items:center}.top svg{height:70px;width:auto;margin-left:-28px}
    .seal{width:96px;height:96px;border-radius:50%;border:1.5px solid #0bd9e7;display:flex;flex-direction:column;align-items:center;justify-content:center;text-align:center;font:600 8px/1.3 'IBM Plex Mono',monospace;letter-spacing:.14em;color:#0bd9e7}
    .seal b{font:800 22px/1 'Barlow Condensed';letter-spacing:0;color:#fff;margin:3px 0}
    .k{font:600 10px/1 'IBM Plex Mono',monospace;letter-spacing:.3em;color:#0bd9e7;margin-top:36px}
    h1{font:800 40px/1 'Barlow Condensed',sans-serif;text-transform:uppercase;color:#fff;margin:10px 0 24px;letter-spacing:.01em}
    table{width:100%;border-collapse:collapse;font-size:10.5px}th{text-align:left;width:150px;font:600 8.5px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#7dd3fc;padding:8px 0;border-bottom:.5px solid rgba(148,163,184,.25)}
    td{padding:8px 0;border-bottom:.5px solid rgba(148,163,184,.25);color:#f1f5f9}
    .legs{display:grid;grid-template-columns:1fr 1fr;gap:16px 26px;margin-top:30px}.it b{font:700 9px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0bd9e7}.it p{font-size:9.6px;line-height:1.6;color:#cbd5e1;margin-top:6px}
    .cp{margin-top:auto;text-align:center;font:500 9px/1.6 'IBM Plex Mono',monospace;letter-spacing:.12em;color:#94a3b8}"""
    return page(css, f'<div class="f1"></div><div class="f2"></div><div class="w"><div class="top">{LOGO_D}<div class="seal">OBRA<b>Ley 17.336</b>PROTEGIDA</div></div>'
                     f'<div class="k">FICHA EDITORIAL · PROPIEDAD INTELECTUAL</div><h1>{TITULO}</h1><table>{fic}</table><div class="legs">{leg}</div><div class="cp">{COPY}<br>SANTIAGO DE CHILE · TODOS LOS DERECHOS RESERVADOS</div></div>')

# 3 · Suizo: retícula, «©» gigante, etiquetas en mono a la izquierda, reglas negras
def s3():
    fic = ''.join(f'<div class="r"><span>{a}</span><b>{b}</b></div>' for a, b in FICHA)
    leg = ''.join(f'<div class="r"><span>{a}</span><p>{b}</p></div>' for a, b in LEGAL)
    css = """body{background:#fff;color:#0a0a0a;font-family:'IBM Plex Sans',sans-serif}
    .w{position:absolute;inset:0;padding:60px 56px 50px}
    .big{font:700 230px/.8 'IBM Plex Sans',sans-serif;letter-spacing:-.06em;color:#0a0a0a;margin-left:-10px}
    .hd{display:grid;grid-template-columns:1fr 1fr;align-items:end;border-bottom:3px solid #0a0a0a;padding-bottom:18px}
    .hd .t{font:700 21px/1.15 'IBM Plex Sans';letter-spacing:-.01em}.hd .t small{display:block;font:500 10px/1.4 'IBM Plex Mono',monospace;letter-spacing:.06em;color:#525252;margin-top:8px;text-transform:uppercase}
    .lg svg{height:44px;width:auto;display:block;margin-bottom:16px}
    .sec{font:600 9px/1 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase;margin:24px 0 4px;color:#0e7490}
    .r{display:grid;grid-template-columns:170px 1fr;border-bottom:1px solid #d4d4d4;padding:7px 0}.r span{font:500 9px/1.5 'IBM Plex Mono',monospace;text-transform:uppercase;letter-spacing:.08em;color:#525252}
    .r b{font-size:10.5px;font-weight:600}.r p{font-size:9.6px;line-height:1.55;color:#262626}
    .cp{position:absolute;left:56px;right:56px;bottom:44px;display:flex;justify-content:space-between;font:500 8.5px/1 'IBM Plex Mono',monospace;letter-spacing:.06em;border-top:3px solid #0a0a0a;padding-top:10px}"""
    return page(css, f'<div class="w"><div class="hd"><div class="big">©</div><div><div class="lg">{LOGO_L}</div><div class="t">{TITULO}<small>Ficha editorial · Propiedad intelectual</small></div></div></div>'
                     f'<div class="sec">01 · Ficha técnica</div>{fic}<div class="sec">02 · Marco legal</div>{leg}</div><div class="cp"><span>{COPY}</span><span>Santiago de Chile</span></div>')

# 4 · Documento notarial: membrete, artículos numerados, folio y línea de firma
def s4():
    fic = ''.join(f'<tr><th>{a}</th><td>{b}</td></tr>' for a, b in FICHA)
    leg = ''.join(f'<div class="art"><h4>Artículo {i}° · {a}</h4><p>{b}</p></div>' for i, (a, b) in enumerate(LEGAL, 1))
    css = """body{background:#fff;color:#111827;font-family:'Spectral',serif}
    .w{position:absolute;inset:0;padding:54px 74px 60px}
    .mh{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:2px solid #111827;padding-bottom:12px}.mh svg{height:46px;width:auto;display:block}
    .mh .r{text-align:right;font:500 8.5px/1.5 'IBM Plex Mono',monospace;letter-spacing:.08em;color:#4b5563;text-transform:uppercase}
    .rule2{height:.6px;background:#111827;margin-top:3px}
    h1{font:700 15px/1.3 'Spectral';text-align:center;letter-spacing:.22em;text-transform:uppercase;margin:34px 0 4px}.sub{text-align:center;font-style:italic;color:#4b5563;font-size:11px;margin-bottom:26px}
    table{width:100%;border-collapse:collapse;font-size:10.4px;margin-bottom:24px;border:1px solid #111827}th{text-align:left;width:160px;padding:6px 12px;background:#f3f4f6;border-bottom:1px solid #d1d5db;font:600 8.6px/1.3 'IBM Plex Sans';letter-spacing:.08em;text-transform:uppercase}td{padding:6px 12px;border-bottom:1px solid #d1d5db}
    .art{margin-bottom:12px}.art h4{font:700 10.6px/1.3 'Spectral';margin-bottom:3px}.art p{font-size:10.2px;line-height:1.6;text-align:justify;color:#1f2937}
    .sig{position:absolute;left:74px;right:74px;bottom:62px;display:flex;justify-content:space-between;align-items:flex-end}
    .sig .l{width:220px;border-top:1px solid #111827;padding-top:6px;text-align:center;font:500 8.6px/1.4 'IBM Plex Sans';color:#374151}
    .sig .f{font:500 8.5px/1.5 'IBM Plex Mono',monospace;color:#4b5563;text-align:right}"""
    return page(css, f'<div class="w"><div class="mh">{LOGO_L}<div class="r">Academia Examen EUNACOM<br>Wiackowska Group SpA · Santiago de Chile</div></div><div class="rule2"></div>'
                     f'<h1>Ficha editorial y aviso legal</h1><div class="sub">{TITULO}</div><table>{fic}</table>{leg}</div>'
                     f'<div class="sig"><div class="l">Comité Médico Pedagógico AEE</div><div class="f">{COPY}<br>Todos los derechos reservados · Folio PV3-2026</div></div>')

# 5 · AEE moderno: columna lateral azul noche con la ficha, texto legal a la derecha, acentos cian
def s5():
    fic = ''.join(f'<div class="fi"><span>{a}</span><b>{b}</b></div>' for a, b in FICHA)
    leg = ''.join(f'<div class="lg"><div class="n">0{i}</div><div><h4>{a}</h4><p>{b}</p></div></div>' for i, (a, b) in enumerate(LEGAL, 1))
    css = """body{background:#fff;color:#0f172a;font-family:'IBM Plex Sans',sans-serif}
    .side{position:absolute;left:0;top:0;bottom:0;width:286px;background:#0b1420;color:#e2e8f0;padding:56px 32px 44px 40px;display:flex;flex-direction:column}
    .side svg{height:78px;width:auto;margin-left:-32px}.side .k{font:600 9px/1.4 'IBM Plex Mono',monospace;letter-spacing:.24em;color:#0bd9e7;margin:34px 0 14px}
    .fi{padding:9px 0;border-bottom:.5px solid rgba(148,163,184,.25)}.fi span{display:block;font:600 7.8px/1 'IBM Plex Mono',monospace;letter-spacing:.16em;text-transform:uppercase;color:#7dd3fc;margin-bottom:5px}.fi b{font-size:10.2px;font-weight:500;line-height:1.4;color:#fff}
    .side .cp{margin-top:auto;font:500 8px/1.6 'IBM Plex Mono',monospace;color:#94a3b8;letter-spacing:.06em}
    .main{position:absolute;left:286px;right:0;top:0;bottom:0;padding:70px 52px 44px 46px}
    .strip{position:absolute;left:286px;top:0;bottom:0;width:6px;background:#0bd9e7}
    .main .k{font:600 9px/1 'IBM Plex Mono',monospace;letter-spacing:.24em;color:#0e7490}
    h1{font:800 44px/.95 'Barlow Condensed',sans-serif;text-transform:uppercase;margin:12px 0 10px;letter-spacing:-.01em}
    .lead{font-size:11px;line-height:1.55;color:#475569;margin-bottom:26px}
    .lg{display:grid;grid-template-columns:46px 1fr;gap:4px;padding:15px 0;border-top:1px solid #e2e8f0}.n{font:800 26px/1 'Barlow Condensed';color:#0bd9e7}
    .lg h4{font:700 10px/1.2 'IBM Plex Sans';letter-spacing:.12em;text-transform:uppercase;margin-bottom:5px}.lg p{font-size:10px;line-height:1.6;color:#334155}
    .rs{position:absolute;left:46px;right:52px;bottom:44px;font:600 9px/1.4 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#0f172a;border-top:2px solid #0f172a;padding-top:10px}"""
    return page(css, f'<div class="side">{LOGO_D}<div class="k">FICHA TÉCNICA</div>{fic}<div class="cp">{COPY}</div></div><div class="strip"></div>'
                     f'<div class="main"><div class="k">AVISO LEGAL · PROPIEDAD INTELECTUAL</div><h1>Derechos y<br>uso de esta obra</h1><p class="lead">{TITULO}. Primera edición, 2026.</p>{leg}<div class="rs">Santiago de Chile · Todos los derechos reservados</div></div>')

# logo AEE para fondo claro: mismo emblema, nombre en azul noche
LOGO_AEE = LOGO_D.replace('fill:#ffffff">ACADEMIA', 'fill:#08365f">ACADEMIA')

# timbre de tinta AEE (SVG con textura de tinta irregular)
def stamp(size=150, rot=-11):
    return f"""<svg class="stamp" width="{size}" height="{size}" viewBox="0 0 200 200" style="transform:rotate({rot}deg)">
 <defs><filter id="ink" x="-10%" y="-10%" width="120%" height="120%">
   <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="7" result="n"/>
   <feColorMatrix in="n" type="matrix" values="0 0 0 0 0  0 0 0 0 0  0 0 0 0 0  0 0 0 -1.1 1.32" result="m"/>
   <feComposite in="SourceGraphic" in2="m" operator="in" result="t"/>
   <feTurbulence type="turbulence" baseFrequency=".035" numOctaves="2" seed="3" result="w"/>
   <feDisplacementMap in="t" in2="w" scale="2.4"/></filter>
  <path id="arcT" d="M 30 100 A 70 70 0 0 1 170 100"/><path id="arcB" d="M 22 100 A 78 78 0 0 0 178 100"/></defs>
 <g filter="url(#ink)" fill="#0a3f7a" stroke="#0a3f7a" opacity=".9">
  <circle cx="100" cy="100" r="94" fill="none" stroke-width="4"/><circle cx="100" cy="100" r="86" fill="none" stroke-width="1.4"/>
  <circle cx="100" cy="100" r="52" fill="none" stroke-width="1.4"/>
  <text font-family="DM Mono, monospace" font-size="12" font-weight="500" letter-spacing="1.4" stroke="#0a3f7a" stroke-width=".35"><textPath href="#arcT" startOffset="50%" text-anchor="middle">ACADEMIA EXAMEN EUNACOM</textPath></text>
  <text font-family="DM Mono, monospace" font-size="11" letter-spacing="2" stroke="#0a3f7a" stroke-width=".35"><textPath href="#arcB" startOffset="50%" text-anchor="middle">★ OBRA PROTEGIDA · 2026 ★</textPath></text>
  <polygon points="66,78 134,78 134,108 120,122 66,122" fill="none" stroke-width="3.2" stroke-linejoin="round"/>
  <text x="100" y="109" text-anchor="middle" font-family="Syne, sans-serif" font-weight="800" font-size="27" stroke="none">AEE</text>
  <text x="100" y="140" text-anchor="middle" font-family="DM Mono, monospace" font-size="8.5" letter-spacing="1.5" stroke="none">LEY N° 17.336</text>
 </g></svg>"""

CSS4 = """body{background:#fff;color:#111827;font-family:'Spectral',serif}
    .w{position:absolute;inset:0;padding:50px 74px 60px}
    .mh{display:flex;justify-content:space-between;align-items:flex-end;border-bottom:2px solid #08365f;padding-bottom:12px}.mh svg{height:74px;width:auto;display:block;margin-left:-28px}
    .mh .r{text-align:right;font:500 8.5px/1.6 'IBM Plex Mono',monospace;letter-spacing:.08em;color:#4b5563;text-transform:uppercase}
    .rule2{height:.6px;background:#08365f;margin-top:3px}
    h1{font:700 15px/1.3 'Spectral';text-align:center;letter-spacing:.22em;text-transform:uppercase;margin:30px 0 4px;color:#08365f}.sub{text-align:center;font-style:italic;color:#4b5563;font-size:11px;margin-bottom:24px}
    table.f{width:100%;border-collapse:collapse;font-size:10.4px;margin-bottom:22px;border:1px solid #08365f}.f th{text-align:left;width:160px;padding:6px 12px;background:#eef4fa;border-bottom:1px solid #cdd9e6;font:600 8.6px/1.3 'IBM Plex Sans';letter-spacing:.08em;text-transform:uppercase;color:#08365f}.f td{padding:6px 12px;border-bottom:1px solid #cdd9e6}
    .art{margin-bottom:11px}.art h4{font:700 10.6px/1.3 'Spectral';margin-bottom:3px;color:#08365f}.art p{font-size:10.2px;line-height:1.6;text-align:justify;color:#1f2937}
    .sig{position:absolute;left:74px;right:74px;bottom:58px;display:flex;justify-content:space-between;align-items:flex-end}
    .sig .l{width:230px;border-top:1px solid #111827;padding-top:6px;text-align:center;font:500 8.6px/1.4 'IBM Plex Sans';color:#374151}
    .sig .f2{font:500 8.5px/1.6 'IBM Plex Mono',monospace;color:#4b5563;text-align:right}
    .stamp{position:absolute;left:150px;bottom:6px;mix-blend-mode:multiply}
    .folio{position:absolute;right:74px;top:28px;font:500 8px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;color:#94a3b8}"""

def s4b():
    fic = ''.join(f'<tr><th>{a}</th><td>{b}</td></tr>' for a, b in FICHA)
    leg = ''.join(f'<div class="art"><h4>Artículo {i}° · {a}</h4><p>{b}</p></div>' for i, (a, b) in enumerate(LEGAL, 1))
    return page(CSS4, f'<div class="folio">FOLIO PV3-2026 · PÁG. II</div><div class="w"><div class="mh">{LOGO_AEE}<div class="r">Academia Examen EUNACOM<br>Wiackowska Group SpA · Santiago de Chile<br>eunacom-examen.cl</div></div><div class="rule2"></div>'
                      f'<h1>Ficha editorial y aviso legal</h1><div class="sub">{TITULO}</div><table class="f">{fic}</table>{leg}</div>'
                      f'<div class="sig"><div class="l">Comité Médico Pedagógico AEE<br><span style="color:#6b7280">Dirección académica</span></div>{stamp(150)}<div class="f2">{COPY}<br>Todos los derechos reservados</div></div>')

# página de autores, misma línea notarial
AUT = [('Dirección académica y editorial', [('Dr. Felipe Yáñez, MD', 'Especialista en Medicina Interna', 'Klinikum Nürnberg · Núremberg, Alemania', 'Director académico')]),
       ('Comité médico científico y asesoría internacional', [
           ('Dr. José Petta, MD', 'Especialista en Pediatría', 'Múnich, Alemania', 'Pediatría'),
           ('Dr. Nicolo Durante, MD', 'Especialista en Oftalmología', 'Varsovia / Roma, Italia', 'Oftalmología'),
           ('Dr. Melvin Bauer, MD', 'Especialista en Neurocirugía', 'Zúrich, Suiza', 'Neurología y Neurocirugía'),
           ('Dr. Gordon Dunn, MD', 'Especialista en Psiquiatría y Salud Mental', 'Boston, Estados Unidos', 'Psiquiatría'),
           ('Dr. James Curtis, MD', 'Especialista en Dermatología', 'Dublín, Irlanda', 'Dermatología'),
           ('Equipo Académico EUNACOM', 'Revisión normativa GES y pautas clínicas MINSAL', 'Santiago de Chile', 'Normativa chilena')]),
       ('Edición y diseño', [('Equipo editorial AEE', 'Diseño, diagramación e ilustración', 'Wiackowska Group SpA', 'Edición 2026')])]

def ini(n):
    w = [x for x in re.sub(r'^Dr\.\s*|,.*$', '', n).split() if x[0].isupper()]
    return (w[0][0] + w[-1][0]) if len(w) > 1 else 'AEE'

def autores():
    css = CSS4 + """
    .grp{margin-bottom:16px}.grp h3{font:600 9px/1 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:#08365f;display:flex;align-items:center;gap:10px;margin-bottom:8px}
    .grp h3::after{content:'';flex:1;height:.6px;background:#08365f}
    .ppl{display:grid;grid-template-columns:1fr 1fr;gap:8px 14px}.ppl.one{grid-template-columns:1fr}
    .pp{display:grid;grid-template-columns:44px 1fr;gap:12px;align-items:center;border:1px solid #cdd9e6;padding:9px 11px;background:#fbfdff}
    .av{width:44px;height:44px;border-radius:50%;background:#08365f;color:#0bd9e7;display:flex;align-items:center;justify-content:center;font:800 10.5px/1 'Syne';letter-spacing:-.02em}
    .pp b{display:block;font:700 12px/1.25 'Spectral';color:#111827}.pp span{display:block;font-size:9.6px;color:#374151;line-height:1.45}.pp em{display:block;font:600 8px/1.3 'IBM Plex Mono',monospace;letter-spacing:.08em;text-transform:uppercase;color:#0e7490;font-style:normal;margin-top:2px}
    .intro{font-size:10.4px;line-height:1.65;color:#1f2937;text-align:justify;margin-bottom:20px}"""
    g = ''
    for title, ppl in AUT:
        cards = ''.join(f'<div class="pp"><div class="av">{ini(n)}</div><div><b>{n}</b><span>{t} · {u}</span><em>{r}</em></div></div>' for n, t, u, r in ppl)
        g += f'<div class="grp"><h3>{title}</h3><div class="ppl{" one" if len(ppl) == 1 else ""}">{cards}</div></div>'
    return page(css, f'<div class="folio">FOLIO PV3-2026 · PÁG. III</div><div class="w"><div class="mh">{LOGO_AEE}<div class="r">Academia Examen EUNACOM<br>Wiackowska Group SpA · Santiago de Chile<br>eunacom-examen.cl</div></div><div class="rule2"></div>'
                     f'<h1>Autores y comité académico</h1><div class="sub">{TITULO}</div>'
                     f'<p class="intro">Esta obra fue escrita y revisada por un equipo médico internacional junto al equipo académico de la AEE en Chile. Cada código del Perfil V3 se redactó al nivel exigido por ASOFAMECh y se contrastó con las guías clínicas MINSAL vigentes y con las preguntas reales de los exámenes 2013–2026.</p>{g}</div>'
                     f'<div class="sig"><div class="l">Dirección académica AEE</div>{stamp(130, 8)}<div class="f2">{COPY}<br>Todos los derechos reservados</div></div>')

QR = open('/tmp/qr_aee.svg').read() if os.path.exists('/tmp/qr_aee.svg') else ''
def autores_libro():
    acc = '#0e7490'
    dir_ = AUT[0][1][0]
    fac = AUT[1][1]
    card = lambda n, t, u, r: f'<div class="dc"><div class="av">{ini(n)}</div><div><b>{n}</b><span class="sp">{t}</span><span class="pl">{u}</span></div><em>{r}</em></div>'
    css = f"""body{{background:#fff;color:#15181d;font-family:'IBM Plex Sans',sans-serif}}
    .stripe{{position:absolute;left:0;top:0;bottom:0;width:12px;background:{acc}}}
    .w{{position:absolute;inset:0;padding:44px 48px 40px 60px;display:flex;flex-direction:column}}
    .hd{{display:flex;justify-content:space-between;align-items:flex-start;padding-bottom:14px;border-bottom:1px solid #cbd5e1}}
    .hd .l b{{display:block;font:600 9.5px/1 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:#0f172a}}.hd .l span{{display:block;font-size:9px;color:#64748b;margin-top:6px}}
    .hd .r{{text-align:right}}.hd .r b{{display:block;font:700 11px/1 'IBM Plex Mono',monospace;letter-spacing:.16em;color:{acc}}}.hd .r span{{display:block;font:700 12px/1.2 'IBM Plex Sans';letter-spacing:.06em;text-transform:uppercase;margin-top:4px}}
    .eb{{font:600 9px/1.3 'IBM Plex Sans';letter-spacing:.18em;text-transform:uppercase;color:{acc};margin-top:30px}}
    h1{{font:700 30px/1.1 'Spectral',serif;letter-spacing:-.01em;margin:4px 0 8px}}.rule{{height:3px;background:{acc};width:100%}}
    .lead{{font-size:10.6px;line-height:1.6;color:#475569;margin:12px 0 22px;max-width:620px}}
    .sec{{font:600 8.6px/1 'IBM Plex Mono',monospace;letter-spacing:.2em;text-transform:uppercase;color:#0f172a;padding-bottom:7px;border-bottom:1.5px solid #0f172a;margin-bottom:10px}}
    .dir{{display:grid;grid-template-columns:70px 1fr auto;gap:16px;align-items:center;background:#f1f5f9;border-left:4px solid {acc};padding:14px 18px;margin-bottom:22px}}
    .dir .av{{width:62px;height:62px;font-size:18px}}.dir b{{display:block;font:700 17px/1.2 'Spectral',serif}}.dir .sp{{display:block;font-size:11px;font-weight:600;color:#0f172a;margin-top:2px}}.dir .pl{{display:block;font-size:10px;color:#64748b;margin-top:2px}}
    .dir em{{font:600 8px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;font-style:normal;background:#0b1420;color:#fff;padding:6px 9px}}
    .av{{width:42px;height:42px;border-radius:50%;background:#0b1420;color:#0bd9e7;display:flex;align-items:center;justify-content:center;font:800 12px/1 'Syne'}}
    .grid{{display:grid;grid-template-columns:1fr 1fr;gap:10px}}
    .dc{{display:grid;grid-template-columns:42px 1fr;gap:12px;align-items:center;border:1px solid #cbd5e1;border-left:3px solid #64748b;padding:10px 12px;position:relative}}
    .dc b{{display:block;font:700 11.5px/1.25 'IBM Plex Sans'}}.dc .sp{{display:block;font-size:9.8px;color:#334155;margin-top:2px}}.dc .pl{{display:block;font-size:9px;color:#64748b;margin-top:1px}}
    .dc em{{position:absolute;right:10px;top:9px;font:600 7px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;text-transform:uppercase;font-style:normal;color:{acc}}}
    .plate{{margin-top:auto;border:1.5px solid #0b1420}}.ph{{background:#0b1420;color:#fff;display:flex;justify-content:space-between;align-items:center;padding:8px 14px;font:600 9px/1 'IBM Plex Mono',monospace;letter-spacing:.16em;text-transform:uppercase}}
    .ph span{{background:#0bd9e7;color:#0b1420;padding:4px 7px;font-size:7.6px}}
    .pb{{display:grid;grid-template-columns:120px 1fr;gap:18px;padding:14px;align-items:center}}.qr svg{{width:120px;height:120px;display:block}}
    .pb p{{font-size:9.8px;line-height:1.55;color:#334155;margin-bottom:8px}}.pb .k{{font:600 7.8px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;text-transform:uppercase;color:#64748b}}
    .pb .u{{font:700 13px/1.4 'IBM Plex Mono',monospace;color:#0f172a}}.code{{display:inline-block;font:700 15px/1 'IBM Plex Mono',monospace;letter-spacing:.2em;border:1.5px dashed #0b1420;padding:6px 12px;margin-top:4px}}
    .ft{{margin-top:16px;padding-top:9px;border-top:1px solid #cbd5e1;font-size:8px;line-height:1.5;color:#64748b}}.ft b{{color:#0f172a}}"""
    body = (f'<div class="stripe"></div><div class="w"><div class="hd"><div class="l"><b>Academia Examen EUNACOM · Colección 2026</b><span>Primera edición oficial · Perfil de Conocimientos ASOFAMECh V3</span></div>'
            f'<div class="r"><b>PERFIL V3</b><span>Código por código</span></div></div>'
            f'<div class="eb">Créditos</div><h1>Autores y comité académico</h1><div class="rule"></div>'
            f'<p class="lead">Esta obra fue escrita y revisada por un equipo médico internacional junto al equipo académico de la AEE en Chile. Cada código del Perfil V3 se redactó al nivel exigido por ASOFAMECh y se contrastó con las guías clínicas MINSAL vigentes y con las preguntas reales de los exámenes 2013–2026.</p>'
            f'<div class="sec">Dirección académica y editorial</div>'
            f'<div class="dir"><div class="av">{ini(dir_[0])}</div><div><b>{dir_[0]}</b><span class="sp">{dir_[1]}</span><span class="pl">{dir_[2]}</span></div><em>{dir_[3]}</em></div>'
            f'<div class="sec">Comité médico científico y asesoría internacional</div><div class="grid">{"".join(card(*x) for x in fac)}</div>'
            f'<div class="plate"><div class="ph">Plataforma de preparación EUNACOM<span>Guía gratuita · 25 % de descuento</span></div>'
            f'<div class="pb"><div class="qr">{QR}</div><div><p>Esta guía es parte del programa de preparación de la Academia: 21 manuales, más de 300 videoclases y el banco de preguntas reales 2013–2026.</p>'
            f'<div class="k">Portal</div><div class="u">eunacom-examen.cl</div><div class="k" style="margin-top:8px">Cupón 25 % de descuento</div><span class="code">PERFILV3</span></div></div></div>'
            f'<div class="ft"><b>© 2026 Academia Examen EUNACOM (AEE) · Wiackowska Group SpA. Todos los derechos reservados.</b> Guía de distribución gratuita: puede compartirse completa y sin modificaciones, sin fines comerciales. Las recomendaciones se verificaron con las guías clínicas GES y normas vigentes del MINSAL y ASOFAMECh.</div></div>')
    return page(css, body)

QR = open('/tmp/qr_aee.svg').read() if os.path.exists('/tmp/qr_aee.svg') else ''
def titulo_autores():
    blue, cy = '#08365f', '#0e7490'
    def person(n, cred, lines, big=True):
        nm, _, deg = n.partition(', ')
        return (f'<div class="pe{"" if big else " sm"}"><div class="nm">{nm}<span>{(", " + deg) if deg else ""}</span></div>'
                + ''.join(f'<div class="af">{l}</div>' for l in lines) + '</div>')
    d = AUT[0][1][0]
    fac = AUT[1][1]
    css = f"""body{{background:#fff;color:#1f2937;font-family:'IBM Plex Sans',sans-serif}}
    .w{{position:absolute;inset:0;padding:0 0 34px 0;display:flex;flex-direction:column}}
    .brand{{align-self:center;background:#0b1420;color:#fff;padding:14px 26px 12px;display:flex;align-items:center;gap:14px}}
    .brand svg{{height:54px;width:auto;margin:-6px -26px -6px -20px}}.brand b{{font:600 15px/1.2 'IBM Plex Mono',monospace;letter-spacing:.18em}}
    h1{{font:800 92px/.86 'Barlow Condensed',sans-serif;color:{blue};text-transform:uppercase;letter-spacing:-.02em;text-align:center;margin:26px 0 0}}
    h1 small{{display:block;font-size:52px;color:{cy};letter-spacing:.02em;margin-top:8px}}
    .band{{margin:22px 0 0 64px;background:#0bd9e7;color:#0b1420;padding:9px 0 9px 34px;font:700 21px/1 'IBM Plex Sans';letter-spacing:-.01em}}
    .band span{{font:600 11px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;margin-left:16px;color:#08365f}}
    .body{{padding:16px 64px 0 64px}}
    .by{{font:italic 700 16px/1 'IBM Plex Sans';color:#111827;margin:30px 0 12px}}
    .pe{{margin:0 0 9px}}.nm{{font:700 30px/1.15 'IBM Plex Sans';color:{blue};letter-spacing:-.01em}}.nm span{{font-size:16px}}
    .pe.sm{{margin-bottom:20px}}.pe.sm .nm{{font-size:21px}}.pe.sm .nm span{{font-size:14px}}
    .af{{font-size:12px;line-height:1.5;color:#1f2937;margin-top:2px}}
    .cols{{display:block}}
    .foot{{margin-top:auto;padding:0 64px;display:grid;grid-template-columns:150px 1fr;gap:18px;align-items:end}}
    .foot>div:first-child svg{{height:66px;width:auto;margin-left:-26px}}.foot .t{{font:700 10.4px/1.5 'IBM Plex Sans';color:#111827}}
    .qrr{{display:flex;align-items:center;justify-content:flex-end;gap:18px}}.qrr .t{{text-align:right;flex:1;min-width:0}}.qrr .t span{{display:block;font-weight:500;color:#0e7490;margin-top:6px}}.qrr .qr{{flex:none;width:100px;height:100px;padding:2px;background:#fff}}.qrr .qr svg{{width:96px!important;height:96px!important;display:block}}"""
    body = (f'<div class="w"><div class="brand"><b>ACADEMIA EXAMEN EUNACOM</b></div>'
            f'<h1>Perfil EUNACOM V3<small>Código por código</small></h1>'
            f'<div class="band">Primera edición<span>2026 · ASOFAMECh · 1.556 CÓDIGOS</span></div>'
            f'<div class="body"><div class="by">Dirigido por</div>{person(d[0], "", [d[1] + "; Director académico de la Academia Examen EUNACOM", d[2]])}'
            f'<div class="by">Comité médico científico y asesoría internacional</div><div class="cols">'
            + ''.join(person(n, '', [t + ' · ' + u], big=False) for n, t, u, r in fac) +
            f'</div></div><div class="foot"><div>{LOGO_AEE}</div><div class="qrr"><div class="t">Escanea el código para acceder a las clases, el banco de preguntas y los 21 manuales en <b>eunacom-examen.cl</b><br><span>Cupón <b>PERFILV3</b> · 25 % de descuento en los cursos</span></div><div class="qr">{QR}</div></div></div></div>')
    return page(css, body)

def _render(items):
  for i, f in items:
    h = f'{D}/estilo_{i}.html'; open(h, 'w').write(f())
    subprocess.run([CHROME, '--headless=new', '--disable-gpu', '--hide-scrollbars', '--window-size=794,1123', '--virtual-time-budget=4000', f'--screenshot={D}/estilo_{i}.png', 'file://' + h], capture_output=True, timeout=120)
    print('ok', i)
if __name__ == '__main__':
    _render([(41, s4b), (8, titulo_autores)])   # las 5 propuestas originales: _render(list(enumerate([s1, s2, s3, s4, s5], 1)))
