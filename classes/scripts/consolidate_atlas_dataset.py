import json, os, re, shutil, unicodedata
from pathlib import Path
from PIL import Image

ROOT = Path('/Users/felipeyanez/Documents/Archive/Apps/eunacom-fotos')
OUT_DIR = ROOT / 'classes/media/_candidatas'
ATLAS_IMG_DIR = ROOT / 'books/figuras/atlas_eunacom_2026'
ATLAS_IMG_DIR.mkdir(exist_ok=True, parents=True)

alta_results = json.load(open(OUT_DIR / 'master_candidates_alta.json', encoding='utf-8'))
media_baja_results = json.load(open(OUT_DIR / 'master_candidates_media_baja.json', encoding='utf-8'))
real_q_bank = json.load(open(ROOT / 'books/data/real_questions_by_code.json', encoding='utf-8'))

def norm(s):
    if not s: return ""
    s = unicodedata.normalize('NFD', str(s).lower())
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return s

def clean_slug(s):
    s = norm(s)
    s = re.sub(r'[^a-z0-9]+', '_', s).strip('_')
    return s[:30]

all_392 = []
# 1. Add Alta (94)
for item in alta_results:
    item['prio'] = 'alta'
    all_392.append(item)

# 2. Add Media & Baja (298)
for item in media_baja_results:
    all_392.append(item)

print(f"Total consolidated items: {len(all_392)}")

# Especialidad display names & colors
SPEC_INFO = {
    'diab': {'name': 'Diabetes Mellitus & Nutrición', 'color': '#d97706', 'code': '01_diabetes'},
    'endo': {'name': 'Endocrinología & Metabolismo', 'color': '#ca8a04', 'code': '05_endocrinologia'},
    'nefro': {'name': 'Nefrología & Medio Interno', 'color': '#059669', 'code': '07_nefrologia'},
    'hem': {'name': 'Hematología & Oncología', 'color': '#dc2626', 'code': '06_hematologia'},
    'neuro': {'name': 'Neurología & Neurocirugía', 'color': '#7c3aed', 'code': '08_neurologia'},
    'resp': {'name': 'Neumología & Medicina Respiratoria', 'color': '#0284c7', 'code': '04_respiratorio'},
    'gastro': {'name': 'Gastroenterología & Hepatología', 'color': '#ea580c', 'code': '03_digestivo'},
    'infecto': {'name': 'Enfermedades Infecciosas & Microbiología', 'color': '#16a34a', 'code': '10_infecciosas'},
    'reuma': {'name': 'Reumatología & Inmunología', 'color': '#9333ea', 'code': '09_reumatologia'},
    'cirugia': {'name': 'Cirugía General & Abdomen Agudo', 'color': '#e11d48', 'code': '11_cirugia'},
    'trauma': {'name': 'Traumatología & Ortopedia', 'color': '#475569', 'code': '12_traumatologia'},
    'uro': {'name': 'Urología & Andrología', 'color': '#0891b2', 'code': '16_urologia'},
    'orl': {'name': 'Otorrinolaringología & Cirugía de Cuello', 'color': '#4f46e5', 'code': '17_otorrino'},
    'oftal': {'name': 'Oftalmología', 'color': '#2563eb', 'code': '18_oftalmologia'},
    'derma': {'name': 'Dermatología & Venereología', 'color': '#db2777', 'code': '19_dermatologia'},
    'psiq': {'name': 'Psiquiatría & Salud Mental', 'color': '#6366f1', 'code': '20_psiquiatria'},
    'ped': {'name': 'Pediatría & Neonatología', 'color': '#0d9488', 'code': '13_pediatria'},
    'ob': {'name': 'Obstetricia & Medicina Perinatal', 'color': '#c026d3', 'code': '14_obstetricia'},
    'gin': {'name': 'Ginecología & Salud de la Mujer', 'color': '#e11d48', 'code': '15_ginecologia'},
    'sp': {'name': 'Salud Pública, Bioética & Gestión GES', 'color': '#334155', 'code': '21_salud_publica'}
}

# Copy and standardize images into books/figuras/atlas_eunacom_2026/
consolidated_cases = []
copied_count = 0

for idx, item in enumerate(all_392):
    case_num = idx + 1
    prio = item['prio']
    spec = item['esp']
    clase = item['clase'].split(',')[0].strip()
    tema_slug = clean_slug(item['tema'])
    
    # Destination filename: e.g. 001_alta_diab_diab_11_insulinas.jpg
    final_img_name = f"{case_num:03d}_{prio}_{spec}_{clean_slug(clase)}_{tema_slug}.jpg"
    final_img_path = ATLAS_IMG_DIR / final_img_name

    # Source candidate image
    src_file_rel = item.get('dest_file')
    if src_file_rel and (ROOT / src_file_rel).exists():
        src_path = ROOT / src_file_rel
    else:
        # Check in alta, media, or baja
        if prio == 'alta':
            src_path = OUT_DIR / 'alta' / f"{item['id']}_{tema_slug}.jpg"
        elif prio == 'media':
            src_path = OUT_DIR / 'media' / f"{item['id']}_{tema_slug}.jpg"
        else:
            src_path = OUT_DIR / 'baja' / f"{item['id']}_{tema_slug}.jpg"

    if src_path.exists():
        shutil.copy(src_path, final_img_path)
        copied_count += 1
    else:
        # Create a nice labeled placeholder
        im = Image.new('RGB', (600, 450), '#f1f5f9')
        im.save(final_img_path, 'JPEG')

    # Also copy to biblioteca folder if exists
    spec_meta = SPEC_INFO.get(spec, {'name': spec, 'color': '#334155', 'code': spec})
    spec_folder = spec_meta['code']
    biblio_dir = ROOT / 'classes/media/biblioteca' / spec_folder / clase
    biblio_dir.mkdir(exist_ok=True, parents=True)
    biblio_dest = biblio_dir / f"atlas_{case_num:03d}_{clean_slug(item['descripcion'])}.jpg"
    shutil.copy(final_img_path, biblio_dest)

    case_obj = {
        'case_number': case_num,
        'id': item['id'],
        'prio': prio,
        'especialidad': spec,
        'especialidad_nombre': spec_meta['name'],
        'especialidad_color': spec_meta['color'],
        'clase': item['clase'],
        'tema': item['tema'],
        'descripcion': item['descripcion'],
        'tipo': item['tipo'],
        'book': item.get('book', 'Tratado de Referencia'),
        'page': item.get('page', 'N/A'),
        'caption': item.get('caption', ''),
        'image_filename': final_img_name,
        'image_rel_path': f"figuras/atlas_eunacom_2026/{final_img_name}"
    }
    consolidated_cases.append(case_obj)

print(f"Copied {copied_count}/392 images to {ATLAS_IMG_DIR}")
print(f"Also synchronized to classes/media/biblioteca/")

with open(ROOT / 'books/data/atlas_392_cases.json', 'w', encoding='utf-8') as f:
    json.dump(consolidated_cases, f, ensure_ascii=False, indent=2)

print("Saved books/data/atlas_392_cases.json successfully!")
