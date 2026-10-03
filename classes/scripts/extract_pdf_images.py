"""
extract_pdf_images.py
Recorre una carpeta con PDFs (y/o imágenes sueltas), extrae cada imagen con su página y el texto
cercano (pie de figura), y propone a qué clase sirve, usando la columna "Imagen" de
classes/docs/PLAN_IMAGENES.md.

Se corre en el computador que ve el servidor (no en la nube):

    pip install pymupdf
    python classes/scripts/extract_pdf_images.py "\\192.168.18.16\carpeta" --out classes/media/_candidatas

Salida en --out:
    <pdf>/p012_1.jpeg ...     imágenes extraídas (se descartan íconos y logos pequeños)
    index.json                una fila por imagen: archivo, pdf, página, tamaño, pie de figura, texto de la página
    matches.csv               por cada clase del plan: las 5 imágenes candidatas con mejor puntaje
    inventario_pdfs.csv       cada PDF: páginas, imágenes extraídas, título probable

Nada se copia al reproductor: esto solo arma candidatas para revisar.
"""

import argparse
import csv
import json
import re
import sys
import unicodedata
from pathlib import Path

try:
    import pymupdf as fitz
except ImportError:
    try:
        import fitz
    except ImportError:
        sys.exit('Falta PyMuPDF: pip install pymupdf')

ROOT = Path(__file__).resolve().parents[2]
PLAN = ROOT / 'classes' / 'docs' / 'PLAN_IMAGENES.md'
IMG_EXT = {'.png', '.jpg', '.jpeg', '.webp', '.gif', '.tif', '.tiff', '.bmp'}

STOP = set('''de la el los las del y o en con por para un una al a se que su sus vs no es
foto rx tac rm eco ecg ctg fondo frotis curva esquema reusar ver tipo tipos signo grados'''.split())


def norm(s):
    s = unicodedata.normalize('NFD', str(s or '').lower())
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return re.sub(r'[^a-z0-9 ]+', ' ', s)


def words(s):
    return {w for w in norm(s).split() if len(w) > 3 and w not in STOP}


def load_plan():
    rows = []
    for line in PLAN.read_text(encoding='utf-8').splitlines():
        m = re.match(r'\| ([a-z]+-\d\d) \| ([^|]*)\| (★★★|★★|★|—) \| ([^|]*)\|', line)
        if m and m.group(3) != '—':
            cid, tema, nivel, imagen = (g.strip() for g in m.groups())
            rows.append({'clase': cid, 'tema': tema, 'nivel': nivel, 'imagen': imagen,
                         'kw_img': words(imagen), 'kw_tema': words(tema)})
    return rows


def caption_near(page, bbox):
    """Texto en bloques justo debajo o encima de la imagen (pie de figura típico)."""
    if bbox is None:
        return ''
    out = []
    for x0, y0, x1, y1, txt, *_ in page.get_text('blocks'):
        horiz = min(x1, bbox.x1) - max(x0, bbox.x0) > 0
        below = 0 <= y0 - bbox.y1 < 60
        above = 0 <= bbox.y0 - y1 < 40
        if horiz and (below or above):
            out.append(' '.join(txt.split()))
    return ' | '.join(out)[:400]


def extract_pdf(pdf_path, out_dir, min_px):
    rows = []
    try:
        doc = fitz.open(pdf_path)
    except Exception as e:
        print(f'  ! no se pudo abrir {pdf_path.name}: {e}')
        return rows, 0, ''
    slug = re.sub(r'[^A-Za-z0-9]+', '_', pdf_path.stem)[:60]
    title = (doc.metadata or {}).get('title') or ''
    seen = set()
    for pno in range(len(doc)):
        page = doc[pno]
        page_text = ' '.join(page.get_text().split())[:1500]
        for n, info in enumerate(page.get_images(full=True), 1):
            xref = info[0]
            if xref in seen:          # logos repetidos en cada página
                continue
            try:
                img = doc.extract_image(xref)
            except Exception:
                continue
            w, h = img.get('width', 0), img.get('height', 0)
            if w < min_px or h < min_px:
                continue
            seen.add(xref)
            rects = page.get_image_rects(xref)
            bbox = rects[0] if rects else None
            dest = out_dir / slug / f'p{pno + 1:03d}_{n}.{img["ext"]}'
            dest.parent.mkdir(parents=True, exist_ok=True)
            dest.write_bytes(img['image'])
            rows.append({'archivo': str(dest.relative_to(out_dir)), 'pdf': str(pdf_path), 'pagina': pno + 1,
                         'ancho': w, 'alto': h, 'pie': caption_near(page, bbox), 'texto_pagina': page_text})
    return rows, len(doc), title


def score(row, plan_row):
    """El tema de la clase tiene que aparecer en el pie o en el encabezado de la página;
    recién ahí suman las palabras de la imagen buscada. Evita que una radiografía de
    cardiología calce con "radiografía de tórax" de neumología."""
    pie = words(row['pie'])
    head = words(row['texto_pagina'][:250]) | words(Path(row['pdf']).stem)
    page = words(row['texto_pagina'])
    tema_hit = len(plan_row['kw_tema'] & (pie | head))
    if not tema_hit:
        return 0
    return 2 * tema_hit + 2 * len(plan_row['kw_img'] & pie) + len(plan_row['kw_img'] & page)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument('src', help='carpeta con PDFs y/o imágenes (se recorre completa)')
    ap.add_argument('--out', default=str(ROOT / 'classes' / 'media' / '_candidatas'))
    ap.add_argument('--min-px', type=int, default=180, help='descarta imágenes más chicas (íconos, logos)')
    a = ap.parse_args()
    src, out = Path(a.src), Path(a.out)
    out.mkdir(parents=True, exist_ok=True)

    index, inventory = [], []
    pdfs = sorted(p for p in src.rglob('*') if p.suffix.lower() == '.pdf')
    loose = sorted(p for p in src.rglob('*') if p.suffix.lower() in IMG_EXT)
    print(f'{len(pdfs)} PDFs y {len(loose)} imágenes sueltas en {src}')
    for i, pdf in enumerate(pdfs, 1):
        rows, pages, title = extract_pdf(pdf, out, a.min_px)
        print(f'  [{i}/{len(pdfs)}] {pdf.name}: {pages} págs, {len(rows)} imágenes')
        index += rows
        inventory.append({'pdf': str(pdf), 'paginas': pages, 'imagenes': len(rows), 'titulo': title})
    for p in loose:
        index.append({'archivo': str(p), 'pdf': str(p.parent), 'pagina': '', 'ancho': '', 'alto': '',
                      'pie': p.stem, 'texto_pagina': str(p.parent.name)})

    (out / 'index.json').write_text(json.dumps(index, ensure_ascii=False, indent=1), encoding='utf-8')
    with open(out / 'inventario_pdfs.csv', 'w', newline='', encoding='utf-8') as f:
        w = csv.DictWriter(f, fieldnames=['pdf', 'paginas', 'imagenes', 'titulo'])
        w.writeheader(); w.writerows(inventory)

    plan = load_plan()
    with open(out / 'matches.csv', 'w', newline='', encoding='utf-8') as f:
        w = csv.writer(f)
        w.writerow(['clase', 'nivel', 'imagen_buscada', 'puntaje', 'archivo', 'pdf', 'pagina', 'pie'])
        covered = 0
        for pr in plan:
            ranked = sorted(((score(r, pr), r) for r in index), key=lambda t: -t[0])[:5]
            ranked = [(s, r) for s, r in ranked if s >= 4]
            covered += bool(ranked)
            if not ranked:
                w.writerow([pr['clase'], pr['nivel'], pr['imagen'], 0, '', '', '', 'SIN CANDIDATA'])
            for s, r in ranked:
                w.writerow([pr['clase'], pr['nivel'], pr['imagen'], s, r['archivo'], r['pdf'], r['pagina'], r['pie']])
    print(f'\n{len(index)} imágenes indexadas · {covered}/{len(plan)} clases del plan con al menos una candidata')
    print(f'Revisar: {out / "matches.csv"}')


if __name__ == '__main__':
    main()
