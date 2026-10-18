import json, os, re, sys, textwrap, unicodedata, shutil
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

ROOT = Path('/Users/felipeyanez/Documents/Archive/Apps/eunacom-fotos')
OUT_DIR = ROOT / 'classes/media/_candidatas'
MEDIA_DIR = OUT_DIR / 'media'
BAJA_DIR = OUT_DIR / 'baja'
MEDIA_DIR.mkdir(exist_ok=True, parents=True)
BAJA_DIR.mkdir(exist_ok=True, parents=True)

def norm(s):
    if not s: return ""
    s = unicodedata.normalize('NFD', str(s).lower())
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return s

def clean_slug(s):
    s = norm(s)
    s = re.sub(r'[^a-z0-9]+', '_', s).strip('_')
    return s[:35]

print("Loading index.json and items...")
raw_idx = json.load(open(OUT_DIR / 'index.json', encoding='utf-8'))
media_items = json.load(open(OUT_DIR / 'items_media.json', encoding='utf-8'))
baja_items = json.load(open(OUT_DIR / 'items_baja.json', encoding='utf-8'))
overrides = json.load(open(ROOT / 'classes/scripts/search_overrides.json', encoding='utf-8'))

print("Pre-normalizing 19,157 index entries into memory...")
fast_idx = []
for r in raw_idx:
    fast_idx.append({
        'r': r,
        'pie_norm': norm(r.get('pie', '')),
        'txt_norm': norm(r.get('texto_pagina', '')),
        'pdf_norm': norm(r.get('pdf', '')),
        'ancho': r.get('ancho', 300),
        'alto': r.get('alto', 300)
    })
print("Pre-normalization complete.")

SPEC_BOOKS = {
    'diab': ['bates', 'fitzpatrick', 'harrison'],
    'endo': ['harrison', 'bailey', 'amir'],
    'nefro': ['harrison', 'bailey', 'nelson'],
    'hem': ['harrison', 'nelson', 'fitzpatrick'],
    'neuro': ['harrison', 'nelson', 'kanski'],
    'resp': ['harrison', 'cxr', 'nelson'],
    'gastro': ['bailey', 'harrison', 'nelson'],
    'infecto': ['harrison', 'fitzpatrick', 'nelson'],
    'reuma': ['harrison', 'fitzpatrick', 'kanski'],
    'cirugia': ['bailey', 'atls', 'harrison'],
    'trauma': ['bailey', 'atls', 'nelson'],
    'uro': ['bailey', 'harrison', 'nelson'],
    'orl': ['bailey', 'nelson', 'kanski'],
    'oftal': ['kanski'],
    'derma': ['fitzpatrick'],
    'psiq': ['harrison', 'nelson'],
    'ped': ['nelson', 'meneghello'],
    'ob': ['williams_ob', 'williams'],
    'gin': ['williams_gy', 'williams'],
    'sp': ['harrison', 'bailey']
}

def search_candidate(item):
    item_id = item['id']
    spec = item['esp']
    queries = overrides.get(item_id, [])
    if not queries:
        queries = [norm(item['descripcion'])]

    preferred = SPEC_BOOKS.get(spec, [])
    best_cand = None
    best_score = -999

    for q_idx, q in enumerate(queries):
        q_norm = norm(q)
        q_words = [w for w in re.findall(r'[a-z0-9]{3,}', q_norm) if w not in {'para', 'con', 'por', 'que', 'los', 'las', 'una', 'del', 'foto', 'clinica', 'tipo', 'caso', 'muestra', 'paciente'}]
        if not q_words:
            continue

        for entry in fast_idx:
            pie_norm = entry['pie_norm']
            txt_norm = entry['txt_norm']
            pdf_norm = entry['pdf_norm']

            score = 0
            if q_norm in pie_norm:
                score += 120 - (q_idx * 10)
            elif all(w in pie_norm for w in q_words):
                score += 85 - (q_idx * 10)
            elif any(w in pie_norm for w in q_words):
                matching_w = sum(1 for w in q_words if w in pie_norm)
                score += (matching_w / len(q_words)) * 40 - (q_idx * 5)
            
            if all(w in txt_norm for w in q_words):
                score += 30 - (q_idx * 5)
            elif any(w in txt_norm for w in q_words):
                matching_w = sum(1 for w in q_words if w in txt_norm)
                score += (matching_w / len(q_words)) * 12

            if score <= 0:
                continue

            for b in preferred:
                if b in pdf_norm:
                    score += 25
                    break

            w_px = entry['ancho']
            h_px = entry['alto']
            if w_px < 150 or h_px < 150:
                score -= 40
            elif w_px >= 300 and h_px >= 250:
                score += 10

            if score > best_score:
                best_score = score
                best_cand = entry['r']

        if best_score >= 100:
            break

    return best_cand, best_score

all_results = []

def process_batch(items, out_subfolder, prio_name):
    print(f"\nProcessing {len(items)} {prio_name} items...")
    matched_count = 0
    for idx_item, item in enumerate(items):
        cand, score = search_candidate(item)
        res_entry = {
            'id': item['id'],
            'prio': item['prio'],
            'esp': item['esp'],
            'clase': item['clase'],
            'tema': item['tema'],
            'descripcion': item['descripcion'],
            'tipo': item['tipo'],
            'score': round(score, 1)
        }

        dest_name = f"{item['id']}_{clean_slug(item['tema'])}.jpg"
        dest_path = out_subfolder / dest_name

        if cand and score > 15:
            matched_count += 1
            src_rel = cand['archivo']
            src_full = OUT_DIR / src_rel
            book_name = cand['pdf'].replace('\\', '/').split('/')[-1]
            
            res_entry['matched'] = True
            res_entry['src_file'] = str(src_rel)
            res_entry['book'] = book_name
            res_entry['page'] = cand['pagina']
            res_entry['caption'] = cand.get('pie', '')[:200]
            res_entry['dest_file'] = str(dest_path.relative_to(ROOT))

            try:
                if src_full.exists():
                    im = Image.open(src_full).convert('RGB')
                    im.save(dest_path, 'JPEG', quality=85)
                else:
                    res_entry['dest_file'] = None
                    res_entry['matched'] = False
            except Exception as e:
                print(f"Error copying {item['id']}: {e}")
                res_entry['matched'] = False
        else:
            res_entry['matched'] = False
            res_entry['src_file'] = None
            res_entry['book'] = None
            res_entry['page'] = None
            res_entry['caption'] = None
            res_entry['dest_file'] = None

        all_results.append(res_entry)

    print(f"{prio_name}: {matched_count}/{len(items)} matched (Score > 15)")

process_batch(media_items, MEDIA_DIR, "Prioridad Media")
process_batch(baja_items, BAJA_DIR, "Prioridad Baja")

# Save master JSON
with open(OUT_DIR / 'master_candidates_media_baja.json', 'w', encoding='utf-8') as f:
    json.dump(all_results, f, ensure_ascii=False, indent=2)

print("\nSaved master JSON to classes/media/_candidatas/master_candidates_media_baja.json")

# CONTACT SHEET GENERATION
print("\n--- Generating Contact Sheets ---")
def create_contact_sheet(items_slice, dest_file, sheet_title):
    W, H, CAP = 300, 220, 60
    cols = 4
    rows = (len(items_slice) + cols - 1) // cols
    sheet = Image.new('RGB', (cols * W, rows * (H + CAP)), '#f8fafc')
    d = ImageDraw.Draw(sheet)
    try:
        font_b = ImageFont.truetype('arial.ttf', 11)
        font_s = ImageFont.truetype('arial.ttf', 9)
    except OSError:
        font_b = ImageFont.load_default()
        font_s = ImageFont.load_default()

    for k, item_entry in enumerate(items_slice):
        col = k % cols
        row = k // cols
        x = col * W
        y = row * (H + CAP)

        # Draw card background
        d.rectangle([x + 3, y + 3, x + W - 3, y + H + CAP - 3], fill='#ffffff', outline='#cbd5e1')

        # Paste image or placeholder
        dest_rel = item_entry.get('dest_file')
        img_pasted = False
        if dest_rel:
            full_img_p = ROOT / dest_rel
            if full_img_p.exists():
                try:
                    im = Image.open(full_img_p).convert('RGB')
                    im.thumbnail((W - 12, H - 10))
                    # Center thumbnail
                    im_x = x + 6 + (W - 12 - im.width) // 2
                    im_y = y + 6 + (H - 10 - im.height) // 2
                    sheet.paste(im, (im_x, im_y))
                    img_pasted = True
                except Exception:
                    pass

        if not img_pasted:
            d.rectangle([x + 8, y + 8, x + W - 8, y + H - 8], fill='#f1f5f9', outline='#94a3b8')
            d.text((x + 16, y + H//2 - 12), "[Búsqueda manual / biblioteca]", fill='#64748b', font=font_b)

        # Text footer
        item_id = item_entry['id']
        tema = item_entry.get('tema', '')[:30]
        book = item_entry.get('book', 'Sin libro')
        if book:
            book_short = book[:18]
        else:
            book_short = 'Sin libro'
        page = item_entry.get('page', '')
        score = item_entry.get('score', 0)

        header_line = f"[{item_id}] {tema}"
        sub_line = f"{book_short} p.{page} (sc:{score})"
        desc_line = item_entry.get('descripcion', '')[:45]

        d.text((x + 6, y + H + 4), header_line, fill='#0f172a', font=font_b)
        d.text((x + 6, y + H + 18), sub_line, fill='#0284c7', font=font_s)
        d.text((x + 6, y + H + 32), desc_line, fill='#475569', font=font_s)

    sheet.save(dest_file, quality=85)
    print(f"Generated {dest_file.name} ({len(items_slice)} items, {sheet.size})")

# Split media items into chunks of 20 (11 sheets)
media_results = [r for r in all_results if r['prio'] == 'media']
for i in range(0, len(media_results), 20):
    sheet_num = (i // 20) + 1
    chunk = media_results[i:i+20]
    out_sheet = OUT_DIR / f"hoja_media_{sheet_num:02d}.jpg"
    create_contact_sheet(chunk, out_sheet, f"Prioridad Media - Hoja {sheet_num:02d}")

# Split baja items into chunks of 20 (4 sheets)
baja_results = [r for r in all_results if r['prio'] == 'baja']
for i in range(0, len(baja_results), 20):
    sheet_num = (i // 20) + 1
    chunk = baja_results[i:i+20]
    out_sheet = OUT_DIR / f"hoja_baja_{sheet_num:02d}.jpg"
    create_contact_sheet(chunk, out_sheet, f"Prioridad Baja - Hoja {sheet_num:02d}")

print("\n--- ALL CONTACT SHEETS GENERATED SUCCESSFULLY ---")
