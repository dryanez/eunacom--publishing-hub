import json, os, subprocess, sys
from pathlib import Path

ROOT = Path('/Users/felipeyanez/Documents/Archive/Apps/eunacom-fotos')
DIST_DIR = ROOT / 'books/dist'
DIST_DIR.mkdir(exist_ok=True, parents=True)

HTML_OUT = DIST_DIR / 'Atlas_Clinico_Imagenes_EUNACOM_2026.html'
PDF_OUT = DIST_DIR / 'Atlas_Clinico_Imagenes_EUNACOM_2026.pdf'

cases = json.load(open(ROOT / 'books/data/atlas_392_enriched.json', encoding='utf-8'))
print(f"Loaded {len(cases)} enriched cases for PDF atlas generation.")

# Specialty order
SPEC_ORDER = [
    'diab', 'endo', 'nefro', 'hem', 'neuro', 'resp', 'gastro', 'infecto',
    'reuma', 'cirugia', 'trauma', 'uro', 'orl', 'oftal', 'derma', 'psiq',
    'ped', 'ob', 'gin', 'sp'
]

# Group by specialty
by_spec = {}
for c in cases:
    sp = c['especialidad']
    by_spec.setdefault(sp, []).append(c)

html = []
html.append("""<!DOCTYPE html>
<html lang="es">
<head>
<meta charset="utf-8">
<title>Atlas Clínico y Banco de Imágenes EUNACOM 2026</title>
<style>
@page {
    size: A4 portrait;
    margin: 12mm 10mm 14mm 10mm;
    @bottom-right {
        content: counter(page);
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        font-size: 8pt;
        color: #64748b;
    }
}

* { box-sizing: border-box; }
body {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    color: #0f172a;
    background: #ffffff;
    font-size: 8.5pt;
    line-height: 1.35;
}

.page-break { page-break-after: always; }
.avoid-break { page-break-inside: avoid; }

/* MASTER COVER */
.cover-page {
    width: 100%;
    height: 270mm;
    background: linear-gradient(135deg, #090d16 0%, #0f172a 45%, #1e293b 100%);
    color: #ffffff;
    padding: 25mm 15mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    page-break-after: always;
    border: 4px solid #38bdf8;
    border-radius: 4px;
}

.cover-badge-top {
    display: inline-block;
    padding: 4px 14px;
    background: rgba(56, 189, 248, 0.15);
    border: 1px solid #38bdf8;
    color: #38bdf8;
    font-weight: 700;
    font-size: 9pt;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    border-radius: 20px;
    margin-bottom: 25px;
}

.cover-title {
    font-size: 26pt;
    font-weight: 800;
    letter-spacing: -0.5px;
    line-height: 1.15;
    margin: 0 0 15px 0;
    color: #ffffff;
}

.cover-title span {
    color: #38bdf8;
}

.cover-subtitle {
    font-size: 13pt;
    color: #94a3b8;
    font-weight: 400;
    line-height: 1.4;
    margin: 0 0 35px 0;
}

.cover-features {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 12px;
    margin-top: 20px;
}

.feature-box {
    background: rgba(255, 255, 255, 0.05);
    border: 1px solid rgba(255, 255, 255, 0.1);
    padding: 10px 14px;
    border-radius: 6px;
}

.feature-title {
    font-size: 10pt;
    font-weight: 700;
    color: #f8fafc;
    margin-bottom: 2px;
}

.feature-desc {
    font-size: 7.5pt;
    color: #cbd5e1;
}

.cover-footer {
    border-top: 1px solid rgba(255, 255, 255, 0.15);
    padding-top: 15px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 8pt;
    color: #94a3b8;
}

/* SECTION DIVIDER (PORTADA ESPECIALIDAD) */
.section-cover {
    width: 100%;
    min-height: 260mm;
    background: #f8fafc;
    border-top: 8px solid;
    padding: 25mm 15mm;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    page-break-after: always;
    border-radius: 4px;
}

.sec-badge {
    font-size: 8pt;
    font-weight: 800;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #64748b;
    margin-bottom: 8px;
}

.sec-title {
    font-size: 22pt;
    font-weight: 800;
    margin: 0 0 10px 0;
    line-height: 1.2;
}

.sec-stats {
    font-size: 10pt;
    color: #475569;
    margin-bottom: 25px;
}

.sec-toc {
    background: #ffffff;
    border: 1px solid #e2e8f0;
    border-radius: 6px;
    padding: 15px;
    margin-bottom: 30px;
}

.sec-toc-title {
    font-size: 9pt;
    font-weight: 700;
    color: #0f172a;
    margin-bottom: 10px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.sec-toc-list {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 6px 15px;
    font-size: 7.5pt;
    color: #334155;
}

/* CASE CARD */
.case-card {
    background: #ffffff;
    border: 1px solid #cbd5e1;
    border-radius: 6px;
    margin-bottom: 12px;
    padding: 10px;
    display: grid;
    grid-template-columns: 210px 1fr;
    gap: 12px;
    page-break-inside: avoid;
}

.case-media {
    display: flex;
    flex-direction: column;
}

.case-img-box {
    width: 210px;
    height: 155px;
    background: #f1f5f9;
    border: 1px solid #e2e8f0;
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 6px;
}

.case-img-box img {
    max-width: 100%;
    max-height: 100%;
    object-fit: contain;
}

.case-meta {
    font-size: 7pt;
    color: #475569;
    line-height: 1.25;
}

.case-source {
    font-size: 6.5pt;
    color: #0284c7;
    font-weight: 600;
    margin-top: 3px;
}

.case-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}

.case-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid #f1f5f9;
    padding-bottom: 4px;
    margin-bottom: 6px;
}

.case-tag {
    font-size: 7.5pt;
    font-weight: 700;
    color: #0f172a;
}

.case-prio {
    font-size: 6.5pt;
    padding: 2px 6px;
    border-radius: 3px;
    font-weight: 700;
    text-transform: uppercase;
}

.prio-alta { background: #fee2e2; color: #b91c1c; }
.prio-media { background: #fef3c7; color: #b45309; }
.prio-baja { background: #f1f5f9; color: #475569; }

.q-stem {
    font-size: 7.8pt;
    font-weight: 600;
    color: #1e293b;
    margin-bottom: 6px;
    line-height: 1.3;
}

.q-options {
    display: flex;
    flex-direction: column;
    gap: 3px;
    margin-bottom: 6px;
}

.q-opt {
    font-size: 7.2pt;
    color: #334155;
    padding: 2px 6px;
    border-radius: 3px;
    background: #f8fafc;
    border: 1px solid #f1f5f9;
}

.q-opt.correct {
    background: #ecfdf5;
    border-color: #a7f3d0;
    color: #065f46;
    font-weight: 600;
}

.q-rationale {
    background: #f8fafc;
    border-left: 3px solid #0284c7;
    padding: 4px 8px;
    font-size: 7pt;
    color: #334155;
    line-height: 1.25;
    margin-top: 4px;
}

.q-rationale strong { color: #0284c7; }
</style>
</head>
<body>
""")

# 1. RENDER MASTER COVER
html.append("""
<div class="cover-page">
    <div>
        <div class="cover-badge-top">EUNACOM 2026 · Edición Oficial</div>
        <h1 class="cover-title">Atlas Clínico &<br><span>Banco de Imágenes</span></h1>
        <p class="cover-subtitle">Compendio Visual de Alta Densidad para el Examen Único Nacional de Conocimientos de Medicina: <strong>392 casos clínicos con imágenes reales de referencia, viñetas de examen y resolución razonada</strong>.</p>
    </div>

    <div>
        <div class="cover-features">
            <div class="feature-box">
                <div class="feature-title">📷 392 Fotografías & Estudios Reales</div>
                <div class="feature-desc">Radiología, TAC, Resonancia, Ultrasonido, Frotis, Histopatología y Lesiones Clínicas elementales extraídas de tratados fuente oficiales.</div>
            </div>
            <div class="feature-box">
                <div class="feature-title">🩺 20 Especialidades Médicas</div>
                <div class="feature-desc">Cobertura exhaustiva desde Diabetes, Medicina Interna y Cirugía hasta Pediatría, Gineco-Obstetricia y Salud Pública.</div>
            </div>
            <div class="feature-box">
                <div class="feature-title">🎯 Casos Clínicos EUNACOM</div>
                <div class="feature-desc">Preguntas oficiales vinculadas y viñetas clínicas de 5 alternativas estructuradas bajo el estándar de evaluación chileno.</div>
            </div>
            <div class="feature-box">
                <div class="feature-title">💡 Justificación Clínica y Perlas</div>
                <div class="feature-desc">Respuestas correctas argumentadas con criterios diagnósticos de guías MINSAL y conducta terapéutica de primera línea.</div>
            </div>
        </div>
    </div>

    <div class="cover-footer">
        <div>Editorial Médica EUNACOM 2026 · New EUNACOM SpA</div>
        <div>Santiago de Chile · Distribución Oficial</div>
    </div>
</div>
""")

# 2. RENDER SPECIALTY SECTIONS & CASES
for spec_key in SPEC_ORDER:
    spec_cases = by_spec.get(spec_key, [])
    if not spec_cases: continue

    spec_name = spec_cases[0]['especialidad_nombre']
    spec_color = spec_cases[0]['especialidad_color']

    # Specialty Divider
    html.append(f"""
    <div class="section-cover" style="border-top-color: {spec_color};">
        <div>
            <div class="sec-badge">Sección de Especialidad</div>
            <h2 class="sec-title" style="color: {spec_color};">{spec_name}</h2>
            <div class="sec-stats"><strong>{len(spec_cases)}</strong> casos clínicos con imágenes auditadas y preguntas asociadas</div>

            <div class="sec-toc">
                <div class="sec-toc-title">Índice de Temas Incluidos</div>
                <div class="sec-toc-list">
    """)

    for sc in spec_cases:
        html.append(f"<div>• <strong>[{sc['clase']}]</strong> {sc['tema'][:40]}</div>")

    html.append("""
                </div>
            </div>
        </div>

        <div style="font-size: 8pt; color: #94a3b8; border-top: 1px solid #e2e8f0; padding-top: 10px;">
            Atlas Clínico EUNACOM 2026 · Material de Estudio Exclusivo
        </div>
    </div>
    """)

    # Render Cases in pairs of 2 per page
    for i in range(0, len(spec_cases), 2):
        pair = spec_cases[i:i+2]
        html.append('<div class="page-container">')
        for case in pair:
            img_rel = case['image_rel_path']
            # absolute path for Chrome rendering
            img_abs = str(ROOT / 'books' / img_rel)
            
            prio = case['prio']
            prio_class = f"prio-{prio}"
            prio_label = f"Prioridad {prio.capitalize()}"

            q = case['pregunta']
            correct_letter = q['correcta']

            html.append(f"""
            <div class="case-card">
                <div class="case-media">
                    <div class="case-img-box">
                        <img src="file://{img_abs}" alt="{case['tema']}">
                    </div>
                    <div class="case-meta">
                        <strong>{case['tipo'].capitalize()}</strong>: {case['descripcion'][:75]}
                    </div>
                    <div class="case-source">
                        {case['book']} · Pág. {case['page']}
                    </div>
                </div>

                <div class="case-content">
                    <div>
                        <div class="case-header">
                            <span class="case-tag">Caso #{case['case_number']:03d} · {case['clase']} · {case['tema'][:35]}</span>
                            <span class="case-prio {prio_class}">{prio_label}</span>
                        </div>
                        <div class="q-stem">{q['enunciado']}</div>
                        <div class="q-options">
            """)

            for opt in q['opciones']:
                is_corr = (opt['letter'] == correct_letter)
                corr_cls = "correct" if is_corr else ""
                marker = "✓ " if is_corr else ""
                html.append(f"""
                            <div class="q-opt {corr_cls}"><strong>{opt['letter']})</strong> {marker}{opt['text']}</div>
                """)

            html.append(f"""
                        </div>
                    </div>
                    <div class="q-rationale">
                        <strong>Respuesta: Alternativa {correct_letter}</strong> — {q['explicacion']}
                    </div>
                </div>
            </div>
            """)

        html.append('</div>')
        html.append('<div class="page-break"></div>')

html.append("""
</body>
</html>
""")

with open(HTML_OUT, 'w', encoding='utf-8') as f:
    f.write(''.join(html))

print(f"Generated HTML template: {HTML_OUT} ({len(html)} chunks)")

# RUN CHROME HEADLESS TO GENERATE PDF
print(f"Rendering PDF with Google Chrome Headless...")
chrome_path = "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome"
cmd = [
    chrome_path,
    "--headless",
    "--disable-gpu",
    "--no-pdf-header-footer",
    f"--print-to-pdf={PDF_OUT}",
    f"file://{HTML_OUT}"
]

res = subprocess.run(cmd, capture_output=True, text=True)
if res.returncode == 0 and PDF_OUT.exists():
    size_mb = os.path.getsize(PDF_OUT) / (1024 * 1024)
    print(f"SUCCESS: Generated {PDF_OUT} ({size_mb:.2f} MB)")
else:
    print(f"Error compiling PDF: {res.stderr}")
