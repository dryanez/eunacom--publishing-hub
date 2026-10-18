import json, re, unicodedata
from collections import defaultdict

def norm(s):
    if not s: return ""
    s = unicodedata.normalize('NFD', str(s).lower())
    s = ''.join(c for c in s if unicodedata.category(c) != 'Mn')
    return s

def clean_words(s):
    w = re.findall(r'[a-z0-9]{3,}', norm(s))
    stop = {'para', 'con', 'por', 'que', 'los', 'las', 'una', 'del', 'foto', 'clinica', 'tipo', 'caso', 'muestra', 'paciente', 'como', 'entre', 'sobre', 'este', 'esta'}
    return [x for x in w if x not in stop]

# Eponyms and clinical synonym mappings
SYNONYMS = {
    # Diab
    "lipohipertrofia": ["lipohypertrophy", "lipoatrophy", "subcutaneous", "insulin"],
    "kimmelstiel": ["kimmelstiel", "nodular glomerulosclerosis", "diabetic nephropathy"],
    "dedos en garra": ["claw toe", "hammer toe", "clawing", "neuropathic foot", "charcot"],
    "arco corneal": ["arcus senilis", "corneal arcus", "arcus lipoides", "arcus"],
    # Endo
    "waterhouse": ["waterhouse", "purpura fulminans", "meningococcal", "adrenal hemorrhage"],
    "conn": ["conn", "aldosteronoma", "adrenal adenoma", "hyperaldosteronism"],
    "osteitis fibrosa": ["osteitis fibrosa", "subperiosteal", "salt and pepper", "hyperparathyroidism"],
    "sestamibi": ["sestamibi", "parathyroid scan", "parathyroid adenoma", "mibi"],
    "craneofaringioma": ["craniopharyngioma", "suprasellar", "cystic sellar"],
    "men 2b": ["men 2b", "mucosal neuroma", "multiple endocrine neoplasia"],
    "bocio compresivo": ["goiter", "goitre", "tracheal compression", "substernal goiter"],
    "tiroideo": ["thyroid nodule", "tirads", "papillary carcinoma", "thyroid ultrasound"],
    # Nefro
    "rabdomiolisis": ["rhabdomyolysis", "myoglobinuria", "tea colored urine", "dark urine"],
    "mielinolisis": ["central pontine", "osmotic demyelination", "myelinolysis", "trident"],
    "amiloidosis": ["amyloidosis", "congo red", "apple green", "birefringence"],
    "membranosa": ["membranous nephropathy", "spikes", "silver stain", "effacement", "podocyte"],
    "semiluna": ["crescent", "crescentic", "rapidly progressive glomerulonephritis"],
    "asas de alambre": ["wire loop", "lupus nephritis", "class iv"],
    "hematuria": ["hematuria", "red blood cell cast", "coca-cola"],
    "absceso renal": ["renal abscess", "perinephric abscess", "pyelonephritis ct"],
    # Hem
    "reticulocitos": ["reticulocyte", "supravital", "cresyl blue"],
    "queilitis angular": ["angular cheilitis", "angular stomatitis", "iron deficiency"],
    "anemia ferropenica": ["iron deficiency", "hypochromic", "microcytic", "pencil cell"],
    "megaloblastos": ["megaloblast", "megaloblastic", "bone marrow aspirate", "hypersegmented"],
    "crioaglutininas": ["cold agglutinin", "autoagglutination", "cold autoimmune"],
    "esferocitosis": ["spherocytosis", "spherocyte", "osmotic fragility"],
    "dianocitos": ["target cell", "codocyte", "thalassemia minor", "target cells"],
    "howell-jolly": ["howell-jolly", "howell jolly", "hyposplenism", "asplenia"],
    "esquistocitos": ["schistocyte", "helmet cell", "microangiopathic", "ttp"],
    "hematoma del psoas": ["psoas hematoma", "iliopsoas hematoma", "retroperitoneal", "hemophilia"],
    "esplenomegalia masiva": ["massive splenomegaly", "myelofibrosis", "chronic myeloid"],
    "virchow": ["virchow", "supraclavicular node", "troisier"],
    "malt": ["malt lymphoma", "gastric malt", "marginal zone"],
    "policitemia vera": ["polycythemia vera", "plethora", "ruddy cyanosis"],
    "eritromelalgia": ["erythromelalgia", "burning feet", "thrombocythemia"],
    "necrosis cutanea": ["warfarin necrosis", "coumarin necrosis", "protein c"],
    # Neuro
    "infarto lacunar": ["lacunar infarct", "internal capsule", "lacune"],
    "ait": ["transient ischemic", "dwi", "diffusion restriction", "carotid stenosis"],
    "angiopatia amiloide": ["cerebral amyloid angiopathy", "lobar hemorrhage", "microbleed"],
    "xantocromia": ["xanthochromia", "subarachnoid hemorrhage", "csf"],
    "hidrocefalia": ["hydrocephalus", "ventricular dilatation", "acute hydrocephalus"],
    "trombosis venosa cerebral": ["cerebral venous thrombosis", "sagittal sinus", "delta sign"],
    "seno cavernoso": ["cavernous sinus", "proptosis", "chemosis", "ophthalmoplegia"],
    "colibri": ["hummingbird sign", "progressive supranuclear palsy", "penguin sign"],
    "cruz caliente": ["hot cross bun", "multiple system atrophy", "pons"],
    "leucoaraiosis": ["leukoaraiosis", "vascular dementia", "lacunar", "white matter hyperintensities"],
    # Resp
    "derrame pleural": ["pleural effusion", "thoracentesis", "pleural ultrasound"],
    "halo": ["halo sign", "aspergillosis", "invasive aspergillosis", "angioinvasive"],
    # Gastro / Cirugia
    "diverticulitis": ["diverticulitis", "hinchey", "pericolic abscess", "perforated diverticulitis"],
    "neumatosis": ["pneumatosis intestinalis", "portal venous gas", "ischemic bowel"],
    "neumoperitoneo": ["pneumoperitoneum", "subdiaphragmatic air", "perforated viscus", "free air"],
    "pila de boton": ["button battery", "disc battery", "foreign body esophagus", "double ring", "halo"],
    "invaginacion": ["intussusception", "target sign", "red currant jelly", "ileocolic"],
    "atresia esofagica": ["esophageal atresia", "tracheoesophageal", "coiled tube", "coiled nasogastric"],
    "finkelstein": ["finkelstein", "de quervain", "abductor pollicis", "extensor pollicis"],
    "maisonneuve": ["maisonneuve", "fibular fracture", "syndesmosis"],
    "sarcoma partes blandas": ["soft tissue sarcoma", "liposarcoma", "deep mass"],
    "cullen": ["cullen sign", "grey turner", "retroperitoneal hemorrhage", "pancreatitis"],
    # Derma
    "alopecia areata": ["alopecia areata", "exclamation mark hair", "trichoscopy", "dermoscopy"],
    "tina cruris": ["tinea cruris", "jock itch", "dermatophyte", "annular"],
    "costra lactea": ["cradle cap", "seborrheic dermatitis infant", "greasy scales"],
    # Uro / Gin / Ob / Ped
    "hidrocele": ["hydrocele", "transillumination", "scrotal ultrasound"],
    "quiste epididimo": ["epididymal cyst", "spermatocele", "scrotal ultrasound"],
    "prostate": ["prostate cancer", "mpmri", "pirads", "peripheral zone"],
    "schiller": ["schiller test", "lugol", "colposcopy", "iodine negative"],
    "vaginosis": ["bacterial vaginosis", "clue cells", "thin gray discharge", "whiff"],
    "bartolino": ["bartholin cyst", "bartholin gland", "vulvar mass"],
    "signo de la tortuga": ["turtle sign", "shoulder dystocia"],
    "ectopico roto": ["ruptured ectopic", "hemoperitoneum", "pouch of douglas", "free fluid pelvis"]
}

print("Loaded SYNONYMS dictionary with", len(SYNONYMS), "specialist patterns")
