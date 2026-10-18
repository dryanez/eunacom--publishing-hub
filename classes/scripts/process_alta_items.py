import json, os, re, sys, unicodedata, shutil
from pathlib import Path
from PIL import Image

ROOT = Path('/Users/felipeyanez/Documents/Archive/Apps/eunacom-fotos')
OUT_DIR = ROOT / 'classes/media/_candidatas'
ALTA_DIR = OUT_DIR / 'alta'
ALTA_DIR.mkdir(exist_ok=True, parents=True)

def norm(s):
    if not s: return ""
    s = unicodedata.normalize('NFD', str(s).lower())
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return s

def clean_slug(s):
    s = norm(s)
    s = re.sub(r'[^a-z0-9]+', '_', s).strip('_')
    return s[:35]

print("Loading index.json and items_alta.json...")
raw_idx = json.load(open(OUT_DIR / 'index.json', encoding='utf-8'))
alta_items = json.load(open(OUT_DIR / 'items_alta.json', encoding='utf-8'))

# Pre-normalized fast index
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

# Known candidate file overrides
KNOWN_FILES = {
    4: 'candidate_04_monofilament_bates.jpg',
    5: 'candidate_05_diabetic_ischemic_ulcer.jpg',
    6: 'candidate_06_diabetic_foot_osteomyelitis.jpg',
    7: 'candidate_07_gammagrafia_blanca.jpg',
    10: 'candidate_10_eco_doppler_amiodarona_2.jpg',
    12: 'candidate_12_looser_milkman_pseudofracture.jpg',
    13: 'candidate_13_maltese_cross_lipiduria.jpg',
    15: 'candidate_15_cavitary_wegener_ct.jpg',
    19: 'candidate_19_hemarthrosis_knee.jpg',
    22: 'candidate_22_intracerebral_hemorrhage_0.jpg',
    26: 'candidate_26_62_hip_femur_shortened_ext_rot.jpg',
    28: 'candidate_28_popcorn_hamartoma.jpg',
    29: 'candidate_29_cardiogenic_pulmonary_edema.jpg',
    31: 'candidate_31_zenker.jpg',
    35: 'candidate_35_varices.jpg',
    36: 'candidate_36_asterixis_flapping_tremor.jpg',
    37: 'candidate_37_fecaloma_constipation_child.jpg',
    40: 'candidate_40_ecthyma_gangrenosum_0.jpg',
    58: 'candidate_58_wrist_drop_radial.jpg',
    59: 'candidate_59_supracondylar_lateral.jpg',
    60: 'candidate_60_pseudoartrosis_hipertrofica.jpg',
    61: 'candidate_61_pseudoartrosis_atrofica.jpg',
    62: 'candidate_26_62_hip_femur_shortened_ext_rot.jpg',
    63: 'candidate_63_gouty_arthritis.jpg',
    88: 'candidate_88_doppler_umbilical_clean.jpg',
    89: 'candidate_89_ductus_venoso_reverso.jpg',
    90: 'candidate_90_sinusoidal_panel5.jpg',
    91: 'candidate_91_placenta_previa_ultrasound.jpg',
    92: 'williams_fig6_2_0.jpg'
}

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

alta_results = []
matched_count = 0

for idx_item, item in enumerate(alta_items):
    num = item['num']
    item_id = item['id']
    spec = item['esp']
    dest_name = f"{item_id}_{clean_slug(item['tema'])}.jpg"
    dest_path = ALTA_DIR / dest_name

    res_entry = {
        'id': item_id,
        'prio': 'alta',
        'esp': spec,
        'clase': item['clase'],
        'tema': item['tema'],
        'descripcion': item['descripcion'],
        'tipo': item['tipo'],
        'dest_file': str(dest_path.relative_to(ROOT))
    }

    # Check known file
    if num in KNOWN_FILES and (OUT_DIR / KNOWN_FILES[num]).exists():
        src_f = OUT_DIR / KNOWN_FILES[num]
        try:
            im = Image.open(src_f).convert('RGB')
            im.save(dest_path, 'JPEG', quality=85)
            res_entry['matched'] = True
            res_entry['book'] = 'Texto Fuente / Archivo Candidato'
            res_entry['page'] = 'N/A'
            res_entry['src_file'] = str(src_f.relative_to(ROOT))
            matched_count += 1
            alta_results.append(res_entry)
            continue
        except Exception as e:
            print(f"Error copying known {num}: {e}")

    # Fallback to search in index
    desc_words = [w for w in re.findall(r'[a-z0-9]{3,}', norm(item['descripcion'])) if w not in {'para', 'con', 'por', 'que', 'los', 'las', 'una', 'del', 'foto', 'clinica', 'tipo', 'caso', 'muestra', 'paciente'}]
    tema_words = [w for w in re.findall(r'[a-z0-9]{3,}', norm(item['tema'])) if w not in {'para', 'con', 'por', 'que', 'los', 'las', 'una', 'del'}]
    
    preferred = SPEC_BOOKS.get(spec, [])
    best_cand = None
    best_score = -999

    for entry in fast_idx:
        pie_norm = entry['pie_norm']
        txt_norm = entry['txt_norm']
        pdf_norm = entry['pdf_norm']

        score = 0
        matching_desc = sum(1 for w in desc_words if w in pie_norm)
        matching_tema = sum(1 for w in tema_words if w in pie_norm)
        if matching_desc > 0:
            score += (matching_desc / max(1, len(desc_words))) * 80
        if matching_tema > 0:
            score += (matching_tema / max(1, len(tema_words))) * 40

        if score == 0:
            matching_txt = sum(1 for w in desc_words if w in txt_norm)
            if matching_txt > 0:
                score += (matching_txt / max(1, len(desc_words))) * 25

        if score <= 0: continue

        for b in preferred:
            if b in pdf_norm:
                score += 25
                break

        w_px = entry['ancho']
        h_px = entry['alto']
        if w_px < 150 or h_px < 150: score -= 40
        elif w_px >= 300 and h_px >= 250: score += 10

        if score > best_score:
            best_score = score
            best_cand = entry['r']

    if best_cand and best_score > 10:
        src_rel = best_cand['archivo']
        src_full = OUT_DIR / src_rel
        try:
            if src_full.exists():
                im = Image.open(src_full).convert('RGB')
                im.save(dest_path, 'JPEG', quality=85)
                res_entry['matched'] = True
                res_entry['book'] = best_cand['pdf'].replace('\\', '/').split('/')[-1]
                res_entry['page'] = best_cand['pagina']
                res_entry['caption'] = best_cand.get('pie', '')[:200]
                res_entry['src_file'] = str(src_rel)
                matched_count += 1
            else:
                res_entry['matched'] = False
        except Exception as e:
            res_entry['matched'] = False
    else:
        res_entry['matched'] = False

    alta_results.append(res_entry)

print(f"Prioridad Alta: {matched_count}/94 matched and saved to {ALTA_DIR}")

with open(OUT_DIR / 'master_candidates_alta.json', 'w', encoding='utf-8') as f:
    json.dump(alta_results, f, ensure_ascii=False, indent=2)

print("Saved classes/media/_candidatas/master_candidates_alta.json")
