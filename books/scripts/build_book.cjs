/**
 * ══════════════════════════════════════════════════════════════════════════════
 * MANUAL EUNACOM · COMPILADOR MULTI-ESPECIALIDAD
 * Estilo editorial "Maqueta 1b — Alta densidad codificada"
 *   · banda de color de la especialidad a sangre en el borde superior
 *   · portada oscura con numeral Barlow · pestaña de sección en la esquina
 *   · página de tema a doble columna · figuras dinámicas · síntesis · solucionario
 *
 * Cada especialidad tiene su PROPIO color (portada, banda, reglas, tarjetas)
 * para diferenciar los tomos de un vistazo. El azul marino de las tablas de
 * datos y el verde del solucionario se mantienen constantes en toda la serie.
 *
 * Uso:   node scripts/build_maqueta_1b_book.cjs [clave]
 *        clave = cardiologia | neumologia | neurologia | ...  (por defecto: todas
 *        las que tengan dataset estructurado)
 *
 * Datos: cada especialidad requiere un dataset con la forma de
 *        master_cardiology_23_full_dataset.cjs (array de clases con
 *        contentSections, table, vignette, explicacion, keyPoints, questions…).
 * ══════════════════════════════════════════════════════════════════════════════
 */

const fs = require('fs');
const path = require('path');
let puppeteer;
try {
  puppeteer = require('puppeteer');
} catch (e) {
  try {
    puppeteer = require('d:/Anti/Eunacom/eunacom-app-v2/node_modules/puppeteer');
  } catch (err2) {
    throw new Error("Cannot find module 'puppeteer'. Please run 'npm install' first.");
  }
}
const matcher = require('./reconstruction_matcher.cjs');

const ROOT = path.join(__dirname, '..');
const SVG_DIR = path.join(ROOT, 'svg_diagrams');
const FIG_DIR = path.join(ROOT, 'figuras');
const DIST_DIR = path.join(ROOT, 'dist');

/* ══════════════════════════ PALETA POR ESPECIALIDAD ══════════════════════════
 * Un color base por especialidad; los tonos (tinte, borde, oscuro…) se derivan.
 * Colores elegidos para máxima separación cromática entre tomos contiguos.     */
// enlaces libro ↔ sitio (rutas por confirmar con el equipo web; base en una sola constante)
const SITE = {
  base: 'https://www.eunacomapp.cl',
  clase: id => `https://www.eunacomapp.cl/clase/${id}`,
  preguntas: id => `https://www.eunacomapp.cl/preguntas/${id}`,
};

const ACCENTS = {
  cardiologia:   '#ea580c', // naranja
  diabetes:      '#0891b2', // cian
  endocrinologia:'#7c3aed', // violeta
  gastroenterologia: '#15803d', // verde bosque
  hematologia:   '#be123c', // carmesí
  infectologia:  '#4d7c0f', // oliva
  nefrologia:    '#a16207', // ámbar oscuro
  neurologia:    '#6d28d9', // púrpura
  neumologia:    '#0f766e', // teal profundo
  reumatologia:  '#9f1239', // granate
  // Módulo 2 / 3 (para cuando haya dataset)
  cirugia:       '#334155',
  traumatologia: '#b45309',
  urologia:      '#0369a1',
  dermatologia:  '#a21caf',
  oftalmologia:  '#0e7490',
  otorrino:      '#4338ca',
  psiquiatria:   '#7e22ce',
  saludpublica:  '#166534',
  pediatria:     '#c2410c',
  ginecologia:   '#be185d',
  obstetricia:   '#9d174d',
};

function mix(hex, other, t) {
  const a = hex.replace('#', '').match(/../g).map(x => parseInt(x, 16));
  const b = other.replace('#', '').match(/../g).map(x => parseInt(x, 16));
  return '#' + a.map((v, i) => Math.round(v + (b[i] - v) * t).toString(16).padStart(2, '0')).join('');
}
function themeVars(acc) {
  return {
    acc,
    accD:  mix(acc, '#000000', 0.20),
    accDp: mix(acc, '#000000', 0.40),
    accT:  mix(acc, '#ffffff', 0.93),
    accP:  mix(acc, '#ffffff', 0.74),
    accL:  mix(acc, '#ffffff', 0.55),
    accInk: mix(acc, '#000000', 0.58),
  };
}

/* ══════════════════════════ REGISTRO DE ESPECIALIDADES ══════════════════════ */
const SPECIALTIES = [
  // ── MÓDULO 1: MEDICINA INTERNA (Tomos 01 al 10) ──
  {
    key: 'cardiologia', ch: '01', title: 'Cardiología',
    module: 'Módulo 1 · Medicina Interna', moduleDir: 'Modulo_1_Medicina_Interna',
    subtitle: 'Electrocardiografía y arritmias, síndromes coronarios, insuficiencia cardíaca y shock, valvulopatías, hipertensión y patología vascular.',
    dataset: () => require('./master_cardiology_23_full_dataset.cjs').master23ClassesFullData,
    figDir: FIG_DIR,
    figSpec: require('./figspec_cardiologia.cjs'),
    out: 'Manual_EUNACOM_Cardiologia_Completo_2026.pdf',
  },
  {
    key: 'infectologia', ch: '02', title: 'Infectología',
    module: 'Módulo 1 · Medicina Interna', moduleDir: 'Modulo_1_Medicina_Interna',
    subtitle: 'Sepsis y shock séptico, infecciones del sistema nervioso central, profilaxis y manejo de contactos, VIH, tuberculosis, zoonosis y micosis.',
    dataset: () => require('./dataset_infectologia.cjs').infectologiaClasses,
    figSpec: {},
    out: 'Manual_EUNACOM_Infectologia_Completo_2026.pdf',
  },
  {
    key: 'gastroenterologia', ch: '03', title: 'Gastroenterología',
    module: 'Módulo 1 · Medicina Interna', moduleDir: 'Modulo_1_Medicina_Interna',
    subtitle: 'Esófago y estómago, intestino y colon, hígado e hipertensión portal, vía biliar y páncreas.',
    dataset: () => require('./dataset_gastroenterologia.cjs').gastroenterologiaClasses,
    figSpec: {},
    out: 'Manual_EUNACOM_Gastroenterologia_Completo_2026.pdf',
  },
  {
    key: 'neumologia', ch: '04', title: 'Respiratorio',
    module: 'Módulo 1 · Medicina Interna', moduleDir: 'Modulo_1_Medicina_Interna',
    subtitle: 'Crisis asmática, EPOC, neumonía adquirida en la comunidad, tuberculosis pulmonar, tromboembolismo pulmonar, derrame pleural y neumotórax.',
    dataset: () => require('./dataset_neumologia.cjs').neumologiaClasses,
    figSpec: {},
    out: 'Manual_EUNACOM_Respiratorio_Completo_2026.pdf',
  },
  {
    key: 'nefrologia', ch: '05', title: 'Nefrología',
    module: 'Módulo 1 · Medicina Interna', moduleDir: 'Modulo_1_Medicina_Interna',
    subtitle: 'Injuria renal aguda KDIGO, enfermedad renal crónica, trastornos de sodio y potasio, equilibrio ácido-base y glomerulopatías.',
    dataset: () => require('./dataset_nefrologia.cjs').nefrologiaClasses,
    figSpec: {},
    out: 'Manual_EUNACOM_Nefrologia_Completo_2026.pdf',
  },
  {
    key: 'diabetes', ch: '06', title: 'Diabetes Mellitus & Dislipidemias',
    module: 'Módulo 1 · Medicina Interna', moduleDir: 'Modulo_1_Medicina_Interna',
    subtitle: 'Criterios diagnósticos, tratamiento escalonado DM2 GES, esquemas de insulinoterapia, cetoacidosis diabética, pie diabético y manejo de dislipidemias.',
    dataset: () => require('./dataset_diabetes.cjs').diabetesClasses,
    figSpec: {},
    out: 'Manual_EUNACOM_Diabetes_Completo_2026.pdf',
  },
  {
    key: 'endocrinologia', ch: '07', title: 'Endocrinología & Metabolismo',
    module: 'Módulo 1 · Medicina Interna', moduleDir: 'Modulo_1_Medicina_Interna',
    subtitle: 'Patología tiroidea (hipo/hipertiroidismo, nódulo y cáncer), patología suprarrenal (Cushing, Addison, Conn, feocromocitoma), calcio e hipófisis.',
    dataset: () => require('./dataset_endocrinologia.cjs').endocrinologiaClasses,
    figSpec: {},
    out: 'Manual_EUNACOM_Endocrinologia_Completo_2026.pdf',
  },
  {
    key: 'hematologia', ch: '08', title: 'Hematología & Hemostasia',
    module: 'Módulo 1 · Medicina Interna', moduleDir: 'Modulo_1_Medicina_Interna',
    subtitle: 'Síndromes anémicos hipo y regenerativos, hemostasia y trombocitopenias, leucemias agudas y crónicas, linfomas, gammapatías monoclonales y medicina transfusional.',
    dataset: () => require('./dataset_hematologia.cjs').hematologiaClasses,
    figSpec: {},
    out: 'Manual_EUNACOM_Hematologia_Completo_2026.pdf',
  },
  {
    key: 'reumatologia', ch: '09', title: 'Reumatología',
    module: 'Módulo 1 · Medicina Interna', moduleDir: 'Modulo_1_Medicina_Interna',
    subtitle: 'Artritis reumatoide, lupus eritematoso sistémico, espondiloartritis, vasculitis, artropatías por cristales y fibromialgia.',
    dataset: () => require('./dataset_reumatologia.cjs').reumatologiaClasses,
    figSpec: {},
    out: 'Manual_EUNACOM_Reumatologia_Completo_2026.pdf',
  },
  {
    key: 'neurologia', ch: '10', title: 'Neurología y Geriatría',
    module: 'Módulo 1 · Medicina Interna', moduleDir: 'Modulo_1_Medicina_Interna',
    subtitle: 'Enfermedad cerebrovascular GES, cefaleas y neuralgia del trigémino, epilepsia y status convulsivo, Parkinson y demencias, patología neuromuscular y grandes síndromes geriátricos.',
    dataset: () => require('./dataset_neurologia.cjs').neurologiaClasses,
    figSpec: {},
    out: 'Manual_EUNACOM_Neurologia_Completo_2026.pdf',
  },

  // ── MÓDULO 2: CIRUGÍA Y ESPECIALIDADES QUIRÚRGICAS (Tomos 11 al 17) ──
  // ── MÓDULO 2: CIRUGÍA Y ESPECIALIDADES QUIRÚRGICAS (Tomos 11 al 17) ──
  {
    key: 'cirugia', ch: '11', title: 'Cirugía General y Anestesia',
    module: 'Módulo 2 · Cirugía y Especialidades', moduleDir: 'Modulo_2_Cirugia',
    subtitle: 'Abdomen agudo quirúrgico, patología herniaria, trauma y ATLS, quemaduras, shock hemorrágico y evaluación preoperatoria.',
    dataset: () => require('./dataset_cirugia.cjs').cirugiaClasses,
    figSpec: {},
    out: 'Tomo_11_Cirugia_General_Completo_2026.pdf',
  },
  {
    key: 'traumatologia', ch: '12', title: 'Traumatología y Ortopedia',
    module: 'Módulo 2 · Cirugía y Especialidades', moduleDir: 'Modulo_2_Cirugia',
    subtitle: 'Fracturas de cadera, fracturas expuestas, luxaciones, lesiones ligamentosas y patología de columna vertebral.',
    dataset: () => require('./dataset_traumatologia.cjs').traumatologiaClasses,
    figSpec: {},
    out: 'Tomo_12_Traumatologia_Completo_2026.pdf',
  },
  {
    key: 'urologia', ch: '13', title: 'Urología',
    module: 'Módulo 2 · Cirugía y Especialidades', moduleDir: 'Modulo_2_Cirugia',
    subtitle: 'Urolitiasis, hiperplasia prostática benigna, cáncer urológico (próstata, riñón, testículo), escroto agudo y trauma urinario.',
    dataset: () => require('./dataset_urologia.cjs').urologiaClasses,
    figSpec: {},
    out: 'Tomo_13_Urologia_Completo_2026.pdf',
  },
  {
    key: 'otorrino', ch: '14', title: 'Otorrinolaringología',
    module: 'Módulo 2 · Cirugía y Especialidades', moduleDir: 'Modulo_2_Cirugia',
    subtitle: 'Otitis media aguda y crónica, hipoacusias, síndrome vertiginoso, rinosinusitis, epistaxis y patología faringoamigdalina.',
    dataset: () => require('./dataset_otorrino.cjs').otorrinoClasses,
    figSpec: {},
    out: 'Tomo_14_Otorrinolaringologia_Completo_2026.pdf',
  },
  {
    key: 'oftalmologia', ch: '15', title: 'Oftalmología',
    module: 'Módulo 2 · Cirugía y Especialidades', moduleDir: 'Modulo_2_Cirugia',
    subtitle: 'Ojo rojo grave vs benigno, glaucoma agudo y crónico, desprendimiento de retina, trauma ocular y vicios de refracción.',
    dataset: () => require('./dataset_oftalmologia.cjs').oftalmologiaClasses,
    figSpec: {},
    out: 'Tomo_15_Oftalmologia_Completo_2026.pdf',
  },
  {
    key: 'dermatologia', ch: '16', title: 'Dermatología',
    module: 'Módulo 2 · Cirugía y Especialidades', moduleDir: 'Modulo_2_Cirugia',
    subtitle: 'Cáncer de piel (melanoma, basocelular, espinocelular), farmacodermias graves, psoriasis, eccemas, acné y micosis cutáneas.',
    dataset: () => require('./dataset_dermatologia.cjs').dermatologiaClasses,
    figSpec: {},
    out: 'Tomo_16_Dermatologia_Completo_2026.pdf',
  },
  {
    key: 'psiquiatria', ch: '17', title: 'Psiquiatría y Salud Mental',
    module: 'Módulo 2 · Cirugía y Especialidades', moduleDir: 'Modulo_2_Cirugia',
    subtitle: 'Trastornos depresivos GES, trastorno bipolar, esquizofrenia, trastornos de ansiedad y pánico, adicciones y urgencias psiquiátricas.',
    dataset: () => require('./dataset_psiquiatria.cjs').psiquiatriaClasses,
    figSpec: {},
    out: 'Tomo_17_Psiquiatria_Completo_2026.pdf',
  },

  // ── MÓDULO 3: MATERNO - INFANTIL (Tomos 18 al 20) ──
  {
    key: 'pediatria', ch: '18', title: 'Pediatría y Neonatología',
    module: 'Módulo 3 · Materno - Infantil', moduleDir: 'Modulo_3_Materno_Infantil',
    subtitle: 'Crecimiento y desarrollo, PNI, infecciones respiratorias agudas bajas, exantemas infantiles, diarrea y deshidratación, y reanimación neonatal.',
    dataset: () => require('./dataset_pediatria.cjs').pediatriaClasses,
    figSpec: {},
    out: 'Tomo_18_Pediatria_Completo_2026.pdf',
  },
  {
    key: 'obstetricia', ch: '19', title: 'Obstetricia y Medicina Materno-Fetal',
    module: 'Módulo 3 · Materno - Infantil', moduleDir: 'Modulo_3_Materno_Infantil',
    subtitle: 'Control prenatal, estados hipertensivos del embarazo GES, metrorragias, trabajo de parto, monitorización y patología puerperal.',
    dataset: () => require('./dataset_obstetricia.cjs').obstetriciaClasses,
    figSpec: {},
    out: 'Tomo_19_Obstetricia_Completo_2026.pdf',
  },
  {
    key: 'ginecologia', ch: '20', title: 'Ginecología y Oncología',
    module: 'Módulo 3 · Materno - Infantil', moduleDir: 'Modulo_3_Materno_Infantil',
    subtitle: 'Cáncer cervicouterino y de mama GES, hemorragia uterina anormal, síndrome de ovario poliquístico, anticoncepción y climaterio.',
    dataset: () => require('./dataset_ginecologia.cjs').ginecologiaClasses,
    figSpec: {},
    out: 'Tomo_20_Ginecologia_Completo_2026.pdf',
  },

  // ── MÓDULO 4: SALUD PÚBLICA & GESTIÓN (Tomo 21) ──
  {
    key: 'saludpublica', ch: '21', title: 'Salud Pública y Bioética',
    module: 'Módulo 4 · Salud Pública y Gestión', moduleDir: 'Modulo_4_Salud_Publica',
    subtitle: 'Garantías Explícitas en Salud (GES), modelo de atención integral en salud (MAIS), epidemiología clínica, bioética y medicina legal.',
    dataset: () => require('./dataset_saludpublica.cjs').saludpublicaClasses,
    figSpec: {},
    out: 'Tomo_21_Salud_Publica_Completo_2026.pdf',
  },
];

/* ───────────────────────────── helpers ───────────────────────────── */

function getSvg(name) {
  if (!name) return '';
  const p = path.join(SVG_DIR, name);
  if (!fs.existsSync(p)) return '';
  let s = fs.readFileSync(p, 'utf8');
  s = s.replace(/<ellipse[^>]+fill=["']#222222["'][^>]*\/>/gi, '');
  s = s.replace(/<line[^>]+y1=["']35["'][^>]+y2=["']55["'][^>]*\/>/gi, '');
  return s;
}
const stripTags = (s = '') => String(s).replace(/<[^>]+>/g, '').replace(/&bull;/g, '·').trim();
function truncate(s, n) {
  s = stripTags(s);
  if (s.length <= n) return s;
  let cut = s.slice(0, n);
  const sp = cut.lastIndexOf(' ');
  if (sp > n * 0.6) cut = cut.slice(0, sp);
  return cut.replace(/[\s,.;:–—-]+$/, '') + '…';
}
function sentences(s = '') {
  return stripTags(s).split(/(?<=[.:])\s+(?=[A-ZÁÉÍÓÚ¿0-9])/).map(x => x.trim()).filter(Boolean);
}
const firstSentence = s => sentences(s)[0] || '';
function parseReconstrucciones(str, title) {
  if (!str) return [];
  const out = [];
  stripTags(str).split('·').forEach(chunk => {
    const trimmed = chunk.trim();
    if (!trimmed || trimmed.toLowerCase().startsWith('sin preguntas')) return;
    const m = trimmed.match(/EUNACOM\s+([A-Za-záéíóúÁÉÍÓÚ]+)?\s*(\d{4})\s*\(([^)]+)\)/i)
      || trimmed.match(/(\d{4})\s*\(([^)]+)\)/);
    if (!m) return;
    const mes = m[1] && isNaN(m[1]) ? m[1].trim() + ' ' : '';
    const ano = m[2] && !isNaN(m[2]) ? m[2] : m[1];
    const rawQ = m[3] || m[2];
    rawQ.split(',').forEach(q => {
      const qn = q.replace(/[^\d#]/g, '');
      if (qn) out.push({ tag: `EUNACOM ${mes}${ano} · ${qn.startsWith('#') ? qn : 'Q' + qn}`.replace(/\s+/g, ' '), text: title });
    });
  });
  return out;
}
const TRAP_RE = /(prohib|contraindic|nunca|jam[aá]s|no se debe|no está indicad|no debe|evitar|error|trampa|descarta|anula)/i;
const CIFRA_RE = /(?:≥|≤|>|<|~|±)?\s?\d[\d.,]*\s?(?:mm\/s|mmHg|mm|ms|mcg|µg|mg\/dl|mg|kg|mEq|mL|lpm|%|J|min|h)\b/i;
function extractCifras(kps) {
  const seen = new Set(), out = [];
  kps.forEach(k => {
    const plain = stripTags(k);
    const m = plain.match(CIFRA_RE);
    if (!m) return;
    const val = m[0].replace(/\s+/g, ' ').trim();
    const key = val.replace(/[^\d a-z%]/gi, '').toLowerCase();
    if (seen.has(key) || val.length < 3) return;
    seen.add(key);
    let label = '';
    const colonIdx = plain.indexOf(':');
    if (colonIdx > 4 && colonIdx < 45) {
      label = plain.slice(0, colonIdx).trim();
    } else {
      label = truncate(plain, 48);
    }
    out.push({ val, label });
  });
  return out.slice(0, 6);
}
function extractMnemos(kps) {
  const mn = [];
  kps.forEach(k => {
    const m = stripTags(k).match(/^([A-ZÁÉÍÓÚ0-9][^—–]{1,44}?)\s+[—–]\s+(.+)/);
    if (m) mn.push({ name: m[1].trim(), expl: truncate(m[2], 118) });
  });
  if (mn.length) return mn.slice(0, 4);
  return kps.slice(0, 4).map(k => ({ name: '', expl: truncate(k, 128) }));
}
const CN = n => String(n).padStart(2, '0');

/* ───────────────────────────── prepare ───────────────────────────── */

function prepare(data, figSpec) {
  // Sincronizar automáticamente cada clase con el banco oficial de reconstrucciones reales
  data.forEach(c => {
    if (c.perfilCode) {
      c.reconstrucciones = matcher.getReconstruccionesString(c.perfilCode);
    }
  });

  const bns = [...new Set(data.map(c => c.blockNum))].sort((a, b) => a - b);
  const blocks = bns.map(bn => {
    const classes = data.filter(c => c.blockNum === bn);
    return { bn, name: classes[0].blockName, classes };
  });
  let cursor = 3;
  blocks.forEach(b => {
    b.startPage = cursor; cursor += 2; // 2 páginas para la portada oscura de bloque
    b.classes.forEach(c => {
      c.startPage = cursor;
      const isT3 = c.tier === 3 && ((c.questions && c.questions.length >= 4) || c.treatmentTable || c.table2);
      const pCount = isT3 ? 4 : (figSpec[c.topicLabel] ? 3 : 2);
      c.pageCount = pCount;
      cursor += pCount;
    });
    cursor += 1;
  });
  return {
    blocks, solPage: cursor,
    totalQuestions: data.reduce((n, c) => n + (c.questions ? c.questions.length : 0), 0),
    totalRecon: data.reduce((n, c) => n + parseReconstrucciones(c.reconstrucciones, c.title).length, 0),
    uniqueCodes: new Set(data.flatMap(c => String(c.perfilCode || '').split(/[,\s]+/).filter(Boolean))).size,
  };
}

/* ───────────────────────────── page builders ───────────────────────────── */

/* Cada sección va envuelta en una tabla: el <thead> (banda de color, centrada)
   se repite automáticamente en la parte superior de CADA página impresa. */
function sec(x, label, body, opt = {}) {
  const txt = `Manual EUNACOM de ${x.spec.title}${label ? `&nbsp;&nbsp;·&nbsp;&nbsp;${label}` : ''}`;
  return `<table class="secwrap"><thead><tr><td><div class="gbar"><span>${txt}</span></div></td></tr></thead>`
    + `<tbody><tr><td class="secbody${opt.flush ? ' flush' : ''}${opt.dark ? ' dark' : ''}">${body}</td></tr></tbody></table>`;
}

const COVER_METADATA = {
  '01': { code: 'CD', title: 'Cardiología', sub: '& Sistema Cardiovascular', color: '#ea580c', chip: '#b8410a', photo: '01_cardiologia.jpg' },
  '02': { code: 'IF', title: 'Enfermedades Infecciosas', sub: '& Microbiología', color: '#4d7c0f', chip: '#3d6209', photo: '02_infectologia.jpg' },
  '03': { code: 'GH', title: 'Gastroenterología', sub: '& Hepatología', color: '#15803d', chip: '#10602e', photo: '03_gastroenterologia.jpg' },
  '04': { code: 'RP', title: 'Enfermedades Respiratorias', sub: '& Neumología', color: '#0f766e', chip: '#0b5a54', photo: '04_respiratorio.jpg' },
  '05': { code: 'NF', title: 'Nefrología', sub: '& Medio Interno', color: '#a16207', chip: '#7d4c05', photo: '05_nefrologia.jpg' },
  '06': { code: 'DM', title: 'Diabetes Mellitus', sub: '& Dislipidemias', color: '#0891b2', chip: '#06697f', photo: '06_diabetes.jpg', dense: true, filter: 'grayscale(0.55) brightness(0.5) contrast(1.05)' },
  '07': { code: 'EM', title: 'Endocrinología', sub: '& Metabolismo', color: '#7c3aed', chip: '#5b21b6', photo: '07_endocrinologia.jpg', dense: true, filter: 'brightness(0.62) contrast(1.05)' },
  '08': { code: 'HO', title: 'Hematología', sub: '& Oncología Médica', color: '#be123c', chip: '#91092d', photo: '08_hematologia.jpg' },
  '09': { code: 'RI', title: 'Reumatología', sub: '& Inmunología Clínica', color: '#9f1239', chip: '#7c0e2d', photo: '09_reumatologia.jpg' },
  '10': { code: 'NR', title: 'Neurología', sub: '& Geriatría', color: '#6d28d9', chip: '#4c1d95', photo: '10_neurologia.jpg' },
  '11': { code: 'CG', title: 'Cirugía General', sub: 'Abdomen Agudo & Anestesia', color: '#334155', chip: '#1f2937', photo: '11_cirugia.jpg' },
  '12': { code: 'TO', title: 'Traumatología', sub: '& Ortopedia', color: '#b45309', chip: '#8a3f06', photo: '12_traumatologia.jpg' },
  '13': { code: 'UR', title: 'Urología', sub: 'Urolitiasis, HPB & Cáncer', color: '#0369a1', chip: '#024e79', photo: '13_urologia.jpg' },
  '14': { code: 'OR', title: 'Otorrinolaringología', sub: 'ORL', color: '#4338ca', chip: '#312a99', photo: '14_otorrino.jpg', dense: true },
  '15': { code: 'OF', title: 'Oftalmología', sub: 'Ojo rojo, Glaucoma & Retina', color: '#0e7490', chip: '#0a5566', photo: '15_oftalmologia.jpg' },
  '16': { code: 'DE', title: 'Dermatología', sub: 'Psoriasis, Cáncer de piel & NET', color: '#a21caf', chip: '#79148a', photo: '16_dermatologia.jpg' },
  '17': { code: 'PS', title: 'Psiquiatría General', sub: '& Salud Mental', color: '#7e22ce', chip: '#5d189c', photo: '17_psiquiatria.jpg', dense: true, filter: 'brightness(0.62) contrast(1.05)' },
  '18': { code: 'PE', title: 'Pediatría General', sub: '& Neonatología', color: '#c2410c', chip: '#93300a', photo: '18_pediatria.jpg', dense: true, filter: 'brightness(0.7) contrast(1.05)' },
  '19': { code: 'OB', title: 'Obstetricia', sub: '& Medicina Materno-Fetal', color: '#9d174d', chip: '#76103a', photo: '19_obstetricia.jpg', dense: true },
  '20': { code: 'GO', title: 'Ginecología', sub: '& Oncología Ginecológica', color: '#be185d', chip: '#8f1246', photo: '20_ginecologia.jpg', dense: true, filter: 'brightness(0.62) contrast(1.05)' },
  '21': { code: 'SP', title: 'Salud Pública', sub: 'Epidemiología & Bioética', color: '#166534', chip: '#0f4a26', photo: '21_saludpublica.jpg' },
};

function coverPage(x) {
  const { spec, data } = x;
  const meta = COVER_METADATA[spec.ch] || {
    code: spec.ch,
    title: spec.title,
    sub: spec.subtitle,
    color: spec.accent,
    chip: spec.accent,
    photo: null
  };

  const photoPath = meta.photo ? path.join(__dirname, '..', 'assets', 'covers', meta.photo) : null;
  let photoDataUri = '';
  if (photoPath && fs.existsSync(photoPath)) {
    photoDataUri = `data:image/jpeg;base64,${fs.readFileSync(photoPath).toString('base64')}`;
  }

  const logoPath = path.join(__dirname, '..', 'assets', 'aee-logo-smooth.svg');
  let logoSvg = '';
  if (fs.existsSync(logoPath)) {
    logoSvg = fs.readFileSync(logoPath, 'utf8')
      .replace(/<\?xml[^>]*\?>/i, '')
      .replace(/<metadata>[\s\S]*?<\/metadata>/i, '')
      .replace(/width="188px"/i, 'width="120px"')
      .replace(/height="142px"/i, 'height="90px" style="height:48px;width:auto;display:block"');
  }

  const veil = meta.dense
    ? 'linear-gradient(180deg, rgba(11,20,32,0.86) 0%, rgba(11,20,32,0.62) 40%, rgba(11,20,32,0.92) 74%, rgba(11,20,32,0.98) 100%)'
    : 'linear-gradient(180deg, rgba(11,20,32,0.74) 0%, rgba(11,20,32,0.22) 34%, rgba(11,20,32,0.88) 72%, rgba(11,20,32,0.97) 100%)';
  const filter = meta.filter || 'none';

  return `
  <div class="cover-aee">
    ${photoDataUri ? `<div class="cover-bg" style="background-image: url('${photoDataUri}'); filter: ${filter};"></div>` : ''}
    <div class="cover-veil" style="background: ${veil};"></div>
    <div class="cover-stripe" style="background: ${meta.color};"></div>
    <div class="cover-content">
      <div class="cover-top-row">
        ${logoSvg ? `<div class="cover-logo">${logoSvg}</div>` : `<span style="font-family:'IBM Plex Mono',monospace;font-size:16px;color:#fff;font-weight:700">AEE</span>`}
        <div class="cover-badge">
          <span class="ed">1ª EDICIÓN · 2026</span>
          <span class="subed">ASOFAMECh PERFIL V3</span>
        </div>
      </div>
      <div class="cover-bottom-box">
        <div class="cover-chip" style="background: ${meta.chip};">
          <span>TOMO ${spec.ch} · ${meta.code}</span>
        </div>
        <div class="cover-title-group">
          <span class="manual-de">Manual de</span>
          <h1 class="main-title">${meta.title}</h1>
          <span class="sub-title">${meta.sub}</span>
        </div>
        <div class="cover-divider"></div>
        <div class="cover-footer-row">
          <span class="foot-left">Academia Examen EUNACOM · ${spec.module || 'Módulo 2 · Cirugía y Especialidades'} · ${data.length} clases</span>
          <span class="foot-right">Edición Oficial 2026</span>
        </div>
      </div>
    </div>
  </div>`;
}

function indexPage(x) {
  const { spec, blocks, solPage } = x;
  const rows = blocks.map(b => `
    <div class="idx-chap">
      <div class="idx-chap-head">
        <span class="idx-cn">${CN(b.bn)}</span><span class="idx-ct">${b.name}</span><span class="idx-cp">${b.startPage}</span>
      </div>
      <div class="idx-topics">
        ${b.classes.map(c => `<div class="idx-t"><span class="idx-tt">${c.topicLabel}. ${c.title}</span><span class="idx-dots"></span><span class="idx-tp">${c.startPage}</span></div>`).join('')}
      </div>
    </div>`).join('');
  return sec(x, 'Índice general', `
    <div class="pg-lead">
      <h2>Índice general</h2><div class="rule"></div>
    </div>
    ${rows}
    <div class="idx-sol"><span class="idx-sol-t">Solucionario &amp; Justificaciones Razonadas EUNACOM</span><span class="idx-sol-p">${solPage}</span></div>
  `);
}

const LVL = (kind, v) => {
  let s = String(v || '—').trim();
  if (/espec/i.test(s)) s = 'Específico';
  else if (/susp|sosp/i.test(s)) s = 'Sospecha';
  else if (/compl/i.test(s)) s = 'Completo';
  else if (/inic/i.test(s)) s = 'Inicial';
  else if (/der/i.test(s)) s = 'Derivar';
  else if (/no requiere/i.test(s)) s = 'No requiere';
  const c = { 'Específico': 'sol', 'Sospecha': 'out', 'Completo': 'ok', 'Inicial': 'mid', 'Derivar': 'low', 'No requiere': 'nil' }[s] || 'low';
  return `<span class="lv lv-${c}" title="${kind}">${s}</span>`;
};

function chapterOpener(b, x) {
  const { spec, blocks } = x;
  const nRecon = b.classes.reduce((n, c) => n + parseReconstrucciones(c.reconstrucciones, c.title).length, 0);
  const nQ = b.classes.reduce((n, c) => n + (c.questions ? c.questions.length : 0), 0);
  const hasGes = b.classes.some(c => /GES|garant/i.test(c.ges || ''));
  const nC = b.classes.length;
  const plc = nC === 1 ? '' : 's';
  const qStat = nRecon > 0
    ? `<div><span class="n">${nRecon}</span><span class="t">preguntas reales de años anteriores</span></div>`
    : `<div><span class="n">${nQ}</span><span class="t">casos del banco EUNACOM resueltos</span></div>`;

  const matrix = b.classes.map((c, i) => `
    <tr${i % 2 ? ' class="alt"' : ''}>
      <td class="mono">${c.perfilCode}</td>
      <td class="bcov-tema">${c.title.split('(')[0].trim()}</td>
      <td>${LVL('Diagnóstico', c.dx)}</td>
      <td>${LVL('Tratamiento', c.tx)}</td>
      <td>${LVL('Seguimiento', c.seg)}</td>
    </tr>`).join('');

  const conceptRows = b.classes.flatMap(c => c.keyPoints).slice(0, 6).map(k => {
    const trap = TRAP_RE.test(stripTags(k));
    return `<p class="bcov-concept${trap ? ' trap' : ''}">${trap ? '<strong>! Trampa · </strong>' : ''}${k}</p>`;
  }).join('');

  const histRows = b.classes.map(c => {
    const recs = parseReconstrucciones(c.reconstrucciones, c.title);
    if (!recs.length) return '';
    return `<div class="bcov-hist-row"><span class="bcov-hist-t">${c.title.split('(')[0].trim()}</span><span class="bcov-hist-tags">${recs.map(r => `<span class="bcov-htag">${r.tag}</span>`).join('')}</span></div>`;
  }).join('');
  const nWithRec = b.classes.filter(c => parseReconstrucciones(c.reconstrucciones, c.title).length).length;

  const toc = b.classes.map(c => `
    <div class="bcov-toc-row">
      <span class="bcov-toc-n">${c.topicLabel}</span>
      <span class="bcov-toc-t">${c.title}</span>
      <span class="bcov-toc-dots"></span>
      <span class="bcov-toc-p">${c.startPage}</span>
    </div>`).join('');

  // ── Página 1 del cover: héroe + contenido del bloque (con nº de página) + matriz V3 ──
  const page1 = `
  <div class="bcov">
    <div class="bcov-spine"><span>${b.name.toUpperCase()}</span></div>
    <div class="bcov-inner">
      <div class="bcov-top">
        <div class="bcov-eyebrow">
          <span class="l1">Manual EUNACOM de ${spec.title}</span>
          <span class="l2">Bloque ${CN(b.bn)} de ${CN(blocks.length)} · Perfil de Conocimientos V3 ASOFAMECh</span>
        </div>
        <div class="bcov-codebox"><span class="k">perfil v3 asofamech</span><span class="v">${nC} código${plc} oficial${plc ? 'es' : ''}</span></div>
      </div>

      <div class="bcov-hero">
        <div class="bcov-numrow">
          <span class="bignum">${CN(b.bn)}</span>
          <div class="bcov-numlabel"><span class="k">Bloque temático</span><span class="v">${nC} clase${plc}</span></div>
        </div>
        <h1>${b.name}</h1>
        <div class="bcov-rule"></div>
      </div>

      <div class="bcov-stats bcov-stats-3">
        <div><span class="n">${nC}</span><span class="t">clase${plc} del bloque</span></div>
        ${qStat}
        <div><span class="n">${hasGes ? 'GES' : 'MINSAL'}</span><span class="t">norma vigente 2026</span></div>
      </div>

      <div class="bcov-sec">
        <div class="bcov-sh"><span>El contenido de este bloque</span><span class="pill ghost">Página</span></div>
        <div class="bcov-toc">${toc}</div>
      </div>

      <div class="bcov-sec">
        <div class="bcov-sh"><span>Competencias oficiales del Perfil V3 — nivel legal exigido en el EUNACOM</span><span class="pill">${nC} código${plc}</span></div>
        <table>
          <thead><tr><th>Código V3</th><th>Situación clínica oficial</th><th>Dx</th><th>Tx</th><th>Seg</th></tr></thead>
          <tbody>${matrix}</tbody>
        </table>
      </div>
    </div>
  </div>`;

  // ── Página 2 del cover: conceptos clave & trampas + preguntas reales de años anteriores ──
  const page2 = `
  <div class="bcov bcov--cont">
    <div class="bcov-spine"><span>${b.name.toUpperCase()}</span></div>
    <div class="bcov-inner">
      <div class="bcov-top">
        <div class="bcov-eyebrow">
          <span class="l1">Bloque ${CN(b.bn)} · ${b.name}</span>
          <span class="l2">Continuación · Conceptos clave y preguntas reales de años anteriores</span>
        </div>
        <div class="bcov-codebox"><span class="k">años anteriores</span><span class="v">${nRecon} pregunta${nRecon === 1 ? '' : 's'} real${nRecon === 1 ? '' : 'es'}</span></div>
      </div>

      <div class="bcov-sec">
        <div class="bcov-sh"><span>Conceptos clave &amp; trampas frecuentes del bloque</span><span class="pill ghost">Alto rendimiento</span></div>
        <div class="bcov-concept-list">${conceptRows}</div>
      </div>

      ${histRows ? `<div class="bcov-sec">
        <div class="bcov-sh"><span>Preguntas reales de años anteriores en este bloque</span><span class="pill ghost">${nWithRec} de ${nC} tema${nWithRec === 1 ? '' : 's'}</span></div>
        <div class="bcov-hist">${histRows}</div>
      </div>`
      : `<div class="bcov-sec">
        <div class="bcov-sh"><span>Preguntas reales de años anteriores en este bloque</span><span class="pill ghost">En construcción</span></div>
        <p class="bcov-hist-empty">Aún no hemos mapeado preguntas reales de años anteriores a los temas de este bloque. Las autoevaluaciones de cada tema usan casos representativos del banco EUNACOM mientras completamos ese cruce.</p>
      </div>`}
    </div>
  </div>`;

  return sec(x, `Bloque ${CN(b.bn)} — ${b.name}`, page1, { flush: true, dark: true })
    + sec(x, `Bloque ${CN(b.bn)} — ${b.name}`, page2, { flush: true, dark: true });
}

function figureBlock(c, x) {
  const spec = x.figSpec[c.topicLabel];
  if (!spec) return '';
  const imgs = spec.items.map((it, i) => {
    const src = x.figMap.get(it.file);
    if (!src) return '';
    const tag = spec.items.length > 1 ? `<b>${String.fromCharCode(65 + i)}.</b> ` : '';
    return `<figure class="fx"><img src="${src}" alt=""><figcaption>${tag}${it.cap}</figcaption></figure>`;
  }).join('');
  if (!imgs) return '';
  return `<div class="figblock ${spec.mode || 'wide'}"><div class="figrow">${imgs}</div><p class="figcap"><b>Figura ${c.topicLabel}.</b> ${spec.desc}</p></div>`;
}

function topicPageStandard(c, b, x) {
  const prose = c.contentSections.map(s => `<h3>${s.subhead}</h3>${(s.paragraphs || [s.text]).map(p => `<p>${p}</p>`).join('')}`).join('');
  const diagramObj = c.diagram || (c.svg ? { title: c.algoTitle, svg: getSvg(c.svg) } : null);
  const algoCard = diagramObj && diagramObj.svg ? `<div class="algo-card"><div class="algo-head">Figura ${c.topicLabel} · ${diagramObj.title}</div><div class="algo-body">${diagramObj.svg}</div></div>` : '';
  const tbl = c.table ? `
    <div class="card tbl-card">
      <div class="card-head navy"><span>Tabla ${c.topicLabel} · ${c.table.title}</span><span class="pill light mono">${c.perfilCode}</span></div>
      <table class="dtbl"><thead><tr>${c.table.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${c.table.rows.map((r, i) => `<tr${i % 2 ? ' class="alt"' : ''}>${r.map(v => `<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table>
    </div>` : '';
  const rules = c.keyPoints.map(k => `<span>▸ ${k}</span>`).join('');

  const contexto = c.contexto
    ? `<div class="contexto"><span class="contexto-tag">¿Por qué?</span><p>${c.contexto}</p></div>` : '';
  const watch = c.classId
    ? `<a class="lnk" href="${SITE.clase(c.classId)}">▶&nbsp;Ver masterclass de este tema</a>` : '';
  const moreQ = c.classId
    ? `<a class="lnk ghost" href="${SITE.preguntas(c.classId)}">Más preguntas online de ${c.title.split(':')[0].split('(')[0].trim()} →</a>` : '';

  const vignetteText = typeof c.vignette === 'object' && c.vignette !== null ? (c.vignette.text || '') : (c.vignette || '');
  const explicacionText = c.explicacion || (typeof c.vignette === 'object' && c.vignette !== null ? (c.vignette.conducta || '') : '');

  const qbank = `
    <div class="qbank">
      <div class="qbank-head"><span>Banco Oficial Academia Examen EUNACOM (AEE) · Tema ${c.topicLabel}</span><span class="qbank-note">Solucionario razonado al final del libro</span></div>
      <div class="qbank-body">
        ${c.questions.map((q, i) => `<div class="q"><span class="q-tag">${stripTags(q.recTag || `Banco Oficial AEE · Perfil V3 ${c.perfilCode || ''}`)}</span><p class="q-stem"><strong>${i + 1}.</strong> ${q.stem}</p><div class="q-opts">${q.options.map(o => `${o.id}) ${o.text}`).join('<br>')}</div></div>`).join('')}
      </div>
      ${moreQ ? `<div class="qbank-foot">${moreQ}</div>` : ''}
    </div>`;

  return sec(x, `Bloque ${CN(b.bn)} · Tema ${c.topicLabel}`, `
    <div class="topic-title">
      <h2>${c.topicLabel}. ${c.title}</h2><div class="rule"></div>
    </div>
    ${watch ? `<div class="watch-row">${watch}</div>` : ''}
    ${contexto}
    <div class="prose">${prose}</div>
    ${figureBlock(c, x)}
    ${algoCard}
    ${tbl}
    <div class="case-row">
      <div class="case">
        <div class="case-head"><span>Caso clínico tipo EUNACOM</span><span class="mono">${c.topicLabel}</span></div>
        <div class="case-body"><p>${vignetteText}</p><p class="conducta"><strong>Conducta oficial. </strong>${explicacionText}</p></div>
      </div>
      <div class="rules"><div class="rules-head">Reglas de oro del examen</div><div class="rules-body">${rules}</div></div>
    </div>
    ${qbank}
  `);
}

function topicPageTier3(c, b, x) {
  const watch = c.classId ? `<a class="lnk" href="${SITE.clase(c.classId)}">▶&nbsp;Ver masterclass de este tema</a>` : '';
  const moreQ = c.classId ? `<a class="lnk ghost" href="${SITE.preguntas(c.classId)}">Más preguntas online de ${c.title.split(':')[0].split('(')[0].trim()} →</a>` : '';
  const contexto = c.contexto ? `<div class="contexto"><span class="contexto-tag">¿Por qué?</span><p>${c.contexto}</p></div>` : '';
  
  // Page 1: Fundamentos y Presentación Clínica (1/4)
  const secPart1 = c.contentSections.slice(0, 2).map(s => `<h3>${s.subhead}</h3>${(s.paragraphs || [s.text]).map(p => `<p>${p}</p>`).join('')}`).join('');
  const tbl1 = c.table ? `
    <div class="card tbl-card">
      <div class="card-head navy"><span>Tabla ${c.topicLabel}.A · ${c.table.title}</span><span class="pill light mono">${c.perfilCode}</span></div>
      <table class="dtbl"><thead><tr>${c.table.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${c.table.rows.map((r, i) => `<tr${i % 2 ? ' class="alt"' : ''}>${r.map(v => `<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table>
    </div>` : '';

  const page1 = `
    <div class="topic-title">
      <h2>${c.topicLabel}. ${c.title}</h2><div class="rule"></div>
    </div>
    ${watch ? `<div class="watch-row">${watch}</div>` : ''}
    ${contexto}
    <div class="prose">${secPart1}</div>
    ${tbl1}
  `;

  // Page 2: Criterios Diagnósticos, Algoritmo Vectorial y Scores (2/4)
  const secPart2 = c.contentSections.slice(2, 3).map(s => `<h3>${s.subhead}</h3>${(s.paragraphs || [s.text]).map(p => `<p>${p}</p>`).join('')}`).join('');
  const diagramObj = c.diagram || (c.svg ? { title: c.algoTitle, svg: getSvg(c.svg) } : null);
  const algoCard = diagramObj && diagramObj.svg ? `<div class="algo-card"><div class="algo-head">Figura ${c.topicLabel} · ${diagramObj.title}</div><div class="algo-body">${diagramObj.svg}</div></div>` : '';
  const tbl2Obj = c.severityTable || c.table2;
  const tbl2 = tbl2Obj ? `
    <div class="card tbl-card">
      <div class="card-head navy"><span>Tabla ${c.topicLabel}.B · ${tbl2Obj.title}</span><span class="pill light mono">Criterios de Gravedad</span></div>
      <table class="dtbl"><thead><tr>${tbl2Obj.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${tbl2Obj.rows.map((r, i) => `<tr${i % 2 ? ' class="alt"' : ''}>${r.map(v => `<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table>
    </div>` : '';

  const page2 = `
    <div class="topic-title">
      <h2>${c.topicLabel}. ${c.title} — Enfrentamiento Diagnóstico</h2><div class="rule"></div>
    </div>
    ${secPart2 ? `<div class="prose" style="column-count:1;margin-bottom:10px">${secPart2}</div>` : ''}
    ${algoCard}
    ${tbl2}
  `;

  // Page 3: Manejo Farmacológico Escalonado y Urgencias (3/4)
  const secPart3 = c.contentSections.slice(3).map(s => `<h3>${s.subhead}</h3>${(s.paragraphs || [s.text]).map(p => `<p>${p}</p>`).join('')}`).join('');
  const tblTx = c.treatmentTable ? `
    <div class="card tbl-card">
      <div class="card-head navy"><span>Tabla ${c.topicLabel}.C · ${c.treatmentTable.title}</span><span class="pill light mono">Protocolo Terapéutico</span></div>
      <table class="dtbl"><thead><tr>${c.treatmentTable.headers.map(h => `<th>${h}</th>`).join('')}</tr></thead>
      <tbody>${c.treatmentTable.rows.map((r, i) => `<tr${i % 2 ? ' class="alt"' : ''}>${r.map(v => `<td>${v}</td>`).join('')}</tr>`).join('')}</tbody></table>
    </div>` : '';
  const rules = c.keyPoints.map(k => `<span>▸ ${k}</span>`).join('');

  const page3 = `
    <div class="topic-title">
      <h2>${c.topicLabel}. ${c.title} — Manejo Terapéutico y Urgencias</h2><div class="rule"></div>
    </div>
    <div class="prose">${secPart3}</div>
    ${tblTx}
  `;

  // Page 4: Reglas de Oro, Caso Clínico Razonado y Banco de Autoevaluación Ampliado (4/4)
  const qbank4 = `
    <div class="qbank" style="margin-top:10px">
      <div class="qbank-head"><span>Banco Oficial Academia Examen EUNACOM (AEE) · Tema ${c.topicLabel} (Evaluación Avanzada)</span><span class="qbank-note">Solucionario razonado al final del libro</span></div>
      <div class="qbank-body" style="display:grid;grid-template-columns:1fr 1fr;gap:14px">
        ${c.questions.map((q, i) => `<div class="q"><span class="q-tag">${stripTags(q.recTag || `Banco Oficial AEE · Perfil V3 ${c.perfilCode || ''}`)}</span><p class="q-stem"><strong>${i + 1}.</strong> ${q.stem}</p><div class="q-opts">${q.options.map(o => `${o.id}) ${o.text}`).join('<br>')}</div></div>`).join('')}
      </div>
      ${moreQ ? `<div class="qbank-foot">${moreQ}</div>` : ''}
    </div>`;

  const vignetteText4 = typeof c.vignette === 'object' && c.vignette !== null ? (c.vignette.text || '') : (c.vignette || '');
  const explicacionText4 = c.explicacion || (typeof c.vignette === 'object' && c.vignette !== null ? (c.vignette.conducta || '') : '');

  const page4 = `
    <div class="topic-title">
      <h2>${c.topicLabel}. ${c.title} — Caso Clínico y Autoevaluación</h2><div class="rule"></div>
    </div>
    <div class="rules" style="margin-top:10px"><div class="rules-head">Reglas de oro y trampas del examen (${c.title.split(':')[0].trim()})</div><div class="rules-body" style="display:grid;grid-template-columns:1fr 1fr;gap:4px 14px;">${rules}</div></div>
    <div class="case" style="margin-top:10px">
      <div class="case-head"><span>Caso clínico tipo EUNACOM · Discusión de Alta Complejidad</span><span class="mono">${c.topicLabel}</span></div>
      <div class="case-body"><p>${vignetteText4}</p><p class="conducta"><strong>Conducta oficial razonada. </strong>${explicacionText4}</p></div>
    </div>
    ${qbank4}
  `;

  return sec(x, `Bloque ${CN(b.bn)} · Tema ${c.topicLabel} (1/4)`, page1)
    + sec(x, `Bloque ${CN(b.bn)} · Tema ${c.topicLabel} (2/4)`, page2)
    + sec(x, `Bloque ${CN(b.bn)} · Tema ${c.topicLabel} (3/4)`, page3)
    + sec(x, `Bloque ${CN(b.bn)} · Tema ${c.topicLabel} (4/4)`, page4);
}

function topicPage(c, b, x) {
  const isT3 = c.tier === 3 && ((c.questions && c.questions.length >= 4) || c.treatmentTable || c.table2);
  if (isT3) {
    return topicPageTier3(c, b, x);
  }
  return topicPageStandard(c, b, x);
}

function synthesisPage(b, x) {
  const synthRows = b.classes.map((c, i) => {
    const hallazgo = truncate(c.keyPoints[0], 88);
    const conducta = truncate(c.keyPoints[1] || firstSentence(c.explicacion), 88);
    const trapRaw = [...c.keyPoints.slice(2), c.explicacion, ...c.keyPoints].map(stripTags).find(s => TRAP_RE.test(s));
    let err = trapRaw ? truncate(trapRaw, 88) : '—';
    if (err === hallazgo || err === conducta) err = '—';
    return `<tr${i % 2 ? ' class="alt"' : ''}><td><strong>${c.title}</strong></td><td>${hallazgo}</td><td class="do">${conducta}</td><td class="err">${err}</td></tr>`;
  }).join('');
  const cifraGrid = extractCifras(b.classes.flatMap(c => c.keyPoints)).map(v => `<div class="cifra"><span class="cifra-n">${v.val}</span><span class="cifra-t">${v.label}</span></div>`).join('');
  const mnemoList = extractMnemos(b.classes.flatMap(c => c.keyPoints)).map(m => `<div>${m.name ? `<strong>${m.name} — </strong>` : ''}${m.expl}</div>`).join('');
  
  const realGesClasses = b.classes.filter(c => {
    if (!c.ges) return false;
    const s = stripTags(c.ges).toLowerCase();
    if (s.startsWith('no ges') || s.startsWith('sin garant') || s.startsWith('sin ges') || s.includes('no contemplada') || s.includes('no tiene') || s.includes('sin cobertura')) return false;
    return /ges\s*#?\d+|garant[ií]a\s+expl[ií]cita|ges\b/i.test(s);
  });
  const ges = realGesClasses.slice(0, 3).map(c => `<div class="ges-item"><span class="ges-t">${truncate(c.ges, 60)}</span><span class="ges-d">Tema ${c.topicLabel} · ${c.title} · código ${c.perfilCode}</span></div>`).join('');
  const chk = b.classes.map(c => `<div class="chk-item"><span class="chk-txt">${truncate(c.keyPoints[0], 115)}</span><span class="chk-pill">Tema ${c.topicLabel} &rarr;</span></div>`).join('');

  const decisionRules = b.classes.flatMap(c => c.keyPoints.slice(1, 3)).slice(0, 4).map(k => `<div class="concept">▸ ${k}</div>`).join('');

  return sec(x, `Síntesis · Bloque ${CN(b.bn)}`, `
    <div class="synth-title">
      <h2>Síntesis operativa: qué responder en el examen</h2>
      <span class="pill outline">Repaso de 10 minutos</span>
    </div>
    <div class="rule"></div>
    <div class="card">
      <div class="card-head navy"><span>Tabla ${b.bn}.S · Conducta obligatoria por escenario clínico</span><span class="pill light mono">temas ${b.classes[0].topicLabel} a ${b.classes[b.classes.length - 1].topicLabel}</span></div>
      <table class="dtbl"><thead><tr><th>Escenario</th><th>Hallazgo decisivo</th><th>Conducta de 1.ª línea</th><th>Error que anula la respuesta</th></tr></thead><tbody>${synthRows}</tbody></table>
    </div>
    <div class="synth-grid">
      <div class="synth-col">
        <div class="card card-accent">
          <div class="card-head"><span>Reglas y mnemotecnias del bloque</span></div>
          <div class="mnemo">${mnemoList}</div>
        </div>
        <div class="card">
          <div class="card-head grey"><span>Puntos críticos de decisión clínica</span></div>
          <div class="concept-list">${decisionRules}</div>
        </div>
      </div>
      <div class="synth-col">
        <div class="card card-dark">
          <div class="card-head dark"><span>Autochequeo final · Si dudas en esto, repasa el tema indicado</span></div>
          <div class="chk-list">${chk}</div>
        </div>
      </div>
    </div>
  `);
}

function solucionarioPages(x) {
  let qn = 0;
  const cards = x.data.flatMap(c => c.questions.map(q => {
    qn++;
    const opt = (q.options.find(o => o.id === q.correcta) || {}).text || '';
    const sen = sentences(q.explicacion);
    const perla = sen.length > 1 ? sen.pop() : '';
    const isTrap = TRAP_RE.test(perla);
    return `
      <div class="sol-card">
        <div class="sol-card-head"><span class="mono">TEMA ${c.topicLabel} · PREGUNTA ${qn}</span><span class="mono light">${stripTags(q.recTag || '')}</span></div>
        <div class="sol-card-body">
          <p class="sol-recap">${truncate(q.stem, 120)}</p>
          <div class="sol-clave"><span class="sol-pill">Clave ${q.correcta}</span><span class="sol-opt">${opt}</span></div>
          <p class="sol-just">${sen.join(' ')}</p>
          ${perla ? `<p class="sol-perla${isTrap ? ' trap' : ''}"><strong>${isTrap ? 'Trampa. ' : 'Perla. '}</strong>${perla}</p>` : ''}
        </div>
      </div>`;
  })).join('');
  return sec(x, 'Solucionario razonado', `
    <div class="pg-lead">
      <h2>Solucionario &amp; Justificaciones Razonadas EUNACOM</h2>
      <p class="pg-lead-p">Clave oficial y justificación clínica de cada reconstrucción. Las preguntas se presentan sin clave en la página del tema; aquí se resuelven con la perla de examen correspondiente.</p>
      <div class="rule"></div>
    </div>
    <div class="sol-grid">${cards}</div>
  `);
}

/* ───────────────────────────── document ───────────────────────────── */

function buildHtml(x) {
  const t = themeVars(x.spec.accent);
  const body = [
    coverPage(x), indexPage(x),
    ...x.blocks.flatMap(b => [chapterOpener(b, x), ...b.classes.map(c => topicPage(c, b, x)), synthesisPage(b, x)]),
    solucionarioPages(x),
  ].join('\n');

  return `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;700&family=Spectral:wght@400;600;700&display=swap" rel="stylesheet">
<style>
@import url('https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=JetBrains+Mono:wght@400;500;700&family=Spectral:wght@400;600;700&display=swap');
:root{--acc:${t.acc};--acc-d:${t.accD};--acc-dp:${t.accDp};--acc-t:${t.accT};--acc-p:${t.accP};--acc-l:${t.accL};--acc-ink:${t.accInk}}
*{box-sizing:border-box;margin:0;padding:0}
@page{size:A4;margin:0}
html{-webkit-print-color-adjust:exact;print-color-adjust:exact}
body{font-family:'IBM Plex Sans',system-ui,sans-serif;color:#15181d;font-size:10.2px;line-height:1.5;background:#fff}

/* cada sección = una tabla; el <thead> (banda de color) se repite en cada página */
.secwrap{width:794px;border-collapse:collapse;table-layout:fixed;page-break-after:always}
.secwrap:last-child{page-break-after:auto}
.secwrap thead{display:table-header-group}
.secwrap>thead>tr>td{padding:0}
.gbar{height:22px;background:var(--acc);-webkit-print-color-adjust:exact;display:flex;align-items:center;justify-content:center;
  font:700 8.5px/1 'IBM Plex Sans',sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#fff7ed}
.secbody{padding:18px 42px 14px;vertical-align:top}
.secbody.flush{padding:0}
.secbody.dark{background:#0f172a}
.watch-row{margin-top:8px}

.eyebrow{display:block;font:600 9px/1.3 'IBM Plex Sans',sans-serif;letter-spacing:.18em;text-transform:uppercase;color:var(--acc-d)}
.mono{font-family:'JetBrains Mono',monospace}
.rule{height:3px;background:var(--acc);margin-top:8px}
.pg-lead h2{font:700 25px/1.15 'Spectral',serif;letter-spacing:-.01em;margin-top:3px}
.pg-lead-p{font:400 10.2px/1.5 'IBM Plex Sans',sans-serif;color:#475569;max-width:640px;margin-top:6px}

/* COVER CANÓNICA AEE */
.cover-aee{position:relative;width:794px;height:1123px;overflow:hidden;background:#0b1420;page-break-after:always;-webkit-print-color-adjust:exact;print-color-adjust:exact}
.cover-bg{position:absolute;inset:0;background-size:cover;background-position:center}
.cover-veil{position:absolute;inset:0}
.cover-stripe{position:absolute;left:0;top:0;width:14px;height:100%}
.cover-content{position:absolute;inset:0;padding:64px 68px 64px 76px;display:flex;flex-direction:column;justify-content:space-between}
.cover-top-row{display:flex;justify-content:space-between;align-items:flex-start}
.cover-logo svg{height:46px;width:auto;display:block}
.cover-badge{display:flex;flex-direction:column;align-items:flex-end;gap:3px}
.cover-badge .ed{font:700 13px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;color:#0bd9e7}
.cover-badge .subed{font:500 9.5px/1 'IBM Plex Mono',monospace;letter-spacing:.1em;color:#94a3b8}
.cover-bottom-box{display:flex;flex-direction:column;gap:18px}
.cover-chip{display:inline-flex;align-self:flex-start;padding:6px 14px;border-radius:2px}
.cover-chip span{font:700 12.5px/1 'IBM Plex Mono',monospace;letter-spacing:.16em;color:#ffffff}
.cover-title-group{display:flex;flex-direction:column;gap:2px}
.cover-title-group .manual-de{font:500 18px/1.2 'IBM Plex Sans',sans-serif;color:#c6d0dd}
.cover-title-group .main-title{font:900 58px/.95 'Barlow Condensed',sans-serif;text-transform:uppercase;color:#ffffff;letter-spacing:-.02em;margin:4px 0}
.cover-title-group .sub-title{font:600 22px/1.2 'IBM Plex Sans',sans-serif;color:#ffffff}
.cover-divider{height:1.5px;background:rgba(255,255,255,0.38);width:100%}
.cover-footer-row{display:flex;justify-content:space-between;align-items:center}
.cover-footer-row .foot-left{font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.08em;color:#b6c1d0}
.cover-footer-row .foot-right{font:500 11px/1 'IBM Plex Mono',monospace;letter-spacing:.08em;color:#94a3b8}

/* ÍNDICE */
.idx-chap{margin-top:18px}
.idx-chap-head{display:flex;align-items:baseline;gap:12px}
.idx-cn{font:700 26px/1 'Barlow Condensed',sans-serif;color:var(--acc);width:34px;flex:none}
.idx-ct{flex:1;font:700 13px/1.3 'IBM Plex Sans',sans-serif}
.idx-cp{font:700 12px/1 'JetBrains Mono',monospace;color:#1e3a8a}
.idx-topics{display:flex;flex-direction:column;gap:3px;padding-left:46px;margin-top:5px}
.idx-t{display:flex;align-items:baseline;gap:8px;font:400 11px/1.5 'IBM Plex Sans',sans-serif}
.idx-dots{flex:1;border-bottom:1px dotted #cbd5e1;position:relative;top:-3px}
.idx-sol{margin-top:20px;display:flex;align-items:baseline;gap:12px;background:#f1f5f9;padding:9px 12px;border-left:3px solid var(--acc)}
.idx-sol-t{flex:1;font:700 12px/1.3 'IBM Plex Sans',sans-serif}
.idx-sol-p{font:700 12px/1 'JetBrains Mono',monospace;color:var(--acc-dp)}

/* CARDS */
.card{border:1px solid #cbd5e1;margin-top:12px;break-inside:avoid}
.card-accent{border-top:3px solid var(--acc)}
.card-head{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:6px 12px;background:var(--acc-t);border-bottom:1px solid var(--acc-p);font:700 9.5px/1.25 'IBM Plex Sans',sans-serif;letter-spacing:.07em;text-transform:uppercase;color:var(--acc-dp)}
.card-head.navy{background:#1e3a8a;border-bottom:none;color:#fff}
.card-head.grey{background:#f8fafc;border-bottom:1px solid #cbd5e1;color:#334155}
.card-head.dark{background:#1e293b;border-bottom:none;color:#fff}
.pill{font:700 8px/1 'IBM Plex Sans',sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:4px 8px;border-radius:2px;white-space:nowrap}
.pill.dark{background:var(--acc-dp);color:#fff}
.pill.light{background:#fff;color:#1e3a8a}
.pill.plain{background:transparent;color:#64748b;padding:0;font-weight:600}
.pill.outline{background:var(--acc-t);border:1px solid var(--acc-p);color:var(--acc-dp)}
.pill.mono{font-family:'JetBrains Mono',monospace;letter-spacing:.02em}
.card-body-p{padding:9px 12px;font:400 10px/1.5 'IBM Plex Sans',sans-serif;text-align:justify;hyphens:auto}
.dtbl{width:100%;border-collapse:collapse;font-size:9px}
.dtbl th{text-align:left;padding:4.5px 8px;font:700 8px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:.05em;text-transform:uppercase;color:#1e3a8a;background:#e2e8f0}
.dtbl td{padding:4.5px 8px;border-bottom:1px solid #eef2f6;vertical-align:top;line-height:1.35}
.dtbl tr.alt td{background:#f1f5f9}
.dtbl td.mono{font-family:'JetBrains Mono',monospace;font-size:8px}
.dtbl td.ges{color:#1e3a8a;font-weight:600}
.dtbl td.do{font-weight:600}
.dtbl td.err{color:#991b1b}

/* PORTADA DE BLOQUE — misma familia visual que la portada del tomo, con los paneles de datos encima */
.bcov{position:relative;background:#0f172a;-webkit-print-color-adjust:exact;print-color-adjust:exact;color:#fff;height:1101px;min-height:calc(297mm - 22px);overflow:hidden}
.bcov-spine{position:absolute;left:0;top:0;bottom:0;width:38px;background:var(--acc);display:flex;align-items:center;justify-content:center;overflow:hidden}
.bcov-spine span{font:700 8.5px/1 'IBM Plex Sans',sans-serif;letter-spacing:.22em;text-transform:uppercase;color:var(--acc-t);writing-mode:vertical-rl;transform:rotate(180deg);white-space:nowrap}
.bcov-inner{position:relative;margin-left:38px;padding:44px 48px 40px;display:flex;flex-direction:column;gap:18px}
.bcov-top{display:flex;justify-content:space-between;align-items:flex-start;gap:20px}
.bcov-eyebrow{display:flex;flex-direction:column;gap:6px}
.bcov-eyebrow .l1{font:700 12px/1.1 'IBM Plex Sans',sans-serif;letter-spacing:.2em;text-transform:uppercase;color:var(--acc-l)}
.bcov-eyebrow .l2{font:400 9px/1.3 'IBM Plex Sans',sans-serif;letter-spacing:.13em;text-transform:uppercase;color:#94a3b8}
.bcov-codebox{border:1px solid #334155;padding:8px 12px;display:flex;flex-direction:column;gap:3px;align-items:flex-end;flex:none}
.bcov-codebox .k{font:400 8px/1 'JetBrains Mono',monospace;letter-spacing:.1em;color:#94a3b8}
.bcov-codebox .v{font:700 9.5px/1 'IBM Plex Sans',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#fff}
.bcov-hero{margin-top:20px;display:flex;flex-direction:column;gap:10px}
.bcov-numrow{display:flex;align-items:flex-end;gap:16px}
.bcov-numrow .bignum{font:700 110px/.78 'Barlow Condensed',sans-serif;color:var(--acc-l);letter-spacing:-.02em}
.bcov-numlabel{display:flex;flex-direction:column;gap:3px;padding-bottom:10px}
.bcov-numlabel .k{font:600 10px/1 'IBM Plex Sans',sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#94a3b8}
.bcov-numlabel .v{font:700 30px/.9 'Barlow Condensed',sans-serif;color:#475569}
.bcov-inner h1{font:700 44px/.98 'Barlow Condensed',sans-serif;text-transform:uppercase;letter-spacing:-.01em;color:#fff}
.bcov-rule{height:4px;width:270px;background:var(--acc)}
.bcov-desc{max-width:600px;font:400 11px/1.45 'IBM Plex Sans',sans-serif;color:#cbd5e1}
.bcov-stats{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:#1e293b;border:1px solid #1e293b;margin-top:4px}
.bcov-stats>div{background:#0f172a;padding:9px 12px;display:flex;flex-direction:column;gap:3px}
.bcov-stats .n{font:700 25px/1 'Barlow Condensed',sans-serif;color:var(--acc-l)}
.bcov-stats .t{font:400 7.8px/1.3 'IBM Plex Sans',sans-serif;letter-spacing:.04em;text-transform:uppercase;color:#94a3b8}
.bcov-sec{border:1px solid #1e293b}
.bcov-sh{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:7px 12px;background:#131f33;border-bottom:1px solid #1e293b;font:700 9px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:.07em;text-transform:uppercase;color:var(--acc-l)}
.bcov-sh .pill{background:var(--acc);color:#fff;padding:3px 7px;border-radius:2px;font:700 7.5px/1 'IBM Plex Sans',sans-serif;letter-spacing:.06em;white-space:nowrap}
.bcov-sh .pill.ghost{background:transparent;border:1px solid #334155;color:#94a3b8}
.bcov table{width:100%;border-collapse:collapse;table-layout:fixed}
.bcov table td:nth-child(1),.bcov table th:nth-child(1){width:95px}
.bcov table td:nth-child(3),.bcov table td:nth-child(4),.bcov table td:nth-child(5),
.bcov table th:nth-child(3),.bcov table th:nth-child(4),.bcov table th:nth-child(5){width:82px;text-align:center}
.bcov table th{text-align:left;padding:6px 10px;font:700 8px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:.05em;text-transform:uppercase;color:#94a3b8;background:#131f33}
.bcov table td{padding:5px 10px;border-bottom:1px solid #1e293b;vertical-align:middle;color:#e2e8f0;font-size:9.8px;line-height:1.35}
.bcov table tr.alt td{background:#0c1626}
.bcov table td.mono{font-family:'JetBrains Mono',monospace;font-size:8.5px;color:#cbd5e1}
.bcov-tema{font-weight:600;color:#fff}
.bcov-hist{display:flex;flex-direction:column}
.bcov-hist-row{display:flex;gap:14px;align-items:baseline;padding:8px 13px;border-bottom:1px solid #1e293b}
.bcov-hist-row:last-child{border-bottom:none}
.bcov-hist-t{flex:0 0 200px;font:600 9px/1.35 'IBM Plex Sans',sans-serif;color:#e2e8f0}
.bcov-hist-tags{display:flex;flex-wrap:wrap;gap:5px}
.bcov-htag{font:600 7.5px/1 'JetBrains Mono',monospace;letter-spacing:.02em;color:var(--acc-l);background:#0c1626;border:1px solid #29405f;border-radius:2px;padding:3px 6px;white-space:nowrap}
.bcov-concept-list{display:flex;flex-direction:column}
.bcov-concept{padding:7px 12px;border-bottom:1px solid #1e293b;font:400 9.5px/1.45 'IBM Plex Sans',sans-serif;color:#cbd5e1}
.bcov-concept:last-child{border-bottom:none}
.bcov-concept.trap{background:#2a1416;color:#fca5a5}
.bcov-concept.trap strong{font-size:8px;letter-spacing:.08em;text-transform:uppercase;color:#f87171}

.bcov--cont .bcov-inner{gap:20px}
.bcov--cont .bcov-eyebrow .l1{font-size:13px}
.bcov-toc{display:flex;flex-direction:column}
.bcov-toc-row{display:flex;align-items:baseline;gap:8px;padding:6px 12px;border-bottom:1px solid #1e293b}
.bcov-toc-row:last-child{border-bottom:none}
.bcov-toc-n{flex:0 0 32px;font:700 9px/1 'JetBrains Mono',monospace;color:var(--acc-l)}
.bcov-toc-t{font:600 10px/1.35 'IBM Plex Sans',sans-serif;color:#e2e8f0}
.bcov-toc-dots{flex:1;border-bottom:1px dotted #334155;transform:translateY(-3px)}
.bcov-toc-p{font:700 10px/1 'Barlow Condensed',sans-serif;color:#94a3b8;min-width:20px;text-align:right}
.bcov-hist-empty{padding:10px 13px;font:400 9.5px/1.5 'IBM Plex Sans',sans-serif;color:#94a3b8}

/* Matriz de competencias V3 / Pills (100% idéntico a Gastroenterología) */
.lv{display:inline-block;font:700 8.5px/1 'IBM Plex Sans',sans-serif;letter-spacing:.02em;padding:3.5px 8px;border-radius:999px;white-space:nowrap;text-align:center}
.lv-sol{background:var(--acc);color:#fff}
.lv-out{background:#ffffff;color:#0f172a;font-weight:700}
.lv-ok{background:#ffffff;color:#0f172a;font-weight:700}
.lv-mid{background:#fef3c7;color:#78350f;font-weight:700}
.lv-low{background:#e2e8f0;color:#1e293b;font-weight:700}
.lv-nil{background:#334155;color:#94a3b8}

/* SÍNTESIS / HISTORIAL Y CONCEPTOS */
.op-title{display:flex;align-items:flex-start;gap:18px}
.op-num{font:700 58px/.9 'Barlow Condensed',sans-serif;color:var(--acc)}
.op-title h1{font:700 25px/1.15 'IBM Plex Sans',sans-serif;letter-spacing:-.02em;max-width:600px;margin-top:2px}
.hist-grid{display:grid;grid-template-columns:1fr 1fr;gap:1px;background:#e2e8f0}
.hist-item{background:#fff;padding:6px 10px;display:flex;flex-direction:column;gap:2px}
.hist-tag{font:700 8px/1 'JetBrains Mono',monospace;color:var(--acc)}
.hist-txt{font:400 9.5px/1.35 'IBM Plex Sans',sans-serif}
.concept-list{display:flex;flex-direction:column}
.concept{padding:7px 12px;border-bottom:1px solid #eef2f6;font:400 10px/1.45 'IBM Plex Sans',sans-serif}
.concept:last-child{border-bottom:none}
.concept.trap{background:#fef2f2;color:#991b1b;border-bottom-color:#fecaca}
.concept.trap strong{font-size:8.5px;letter-spacing:.08em;text-transform:uppercase}

/* TEMA */
.topic-title h2{font:700 20px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:-.02em;margin-top:3px}
.topic-eyebrow{display:flex;align-items:center;gap:14px;flex-wrap:wrap;padding-right:150px}
.lnk{font:700 8px/1.3 'IBM Plex Sans',sans-serif;letter-spacing:.04em;text-transform:uppercase;color:#fff;background:var(--acc);padding:4px 9px;border-radius:3px;text-decoration:none;white-space:nowrap}
.lnk.ghost{background:transparent;color:var(--acc-d);border:1px solid var(--acc-p);text-transform:none;letter-spacing:.01em}
.contexto{margin-top:10px;border-left:3px solid var(--acc);background:var(--acc-t);padding:7px 12px;break-inside:avoid}
.contexto-tag{font:700 8px/1 'IBM Plex Sans',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--acc-dp)}
.contexto p{margin-top:3px;font:400 9.6px/1.5 'IBM Plex Sans',sans-serif;color:#334155;text-align:justify}
.qbank-foot{border:1px solid #cbd5e1;border-top:none;padding:7px 10px;display:flex;justify-content:flex-end}
.prose{padding:14px 0 0;column-count:2;column-gap:22px;font:400 10.2px/1.5 'IBM Plex Sans',sans-serif;text-align:justify;hyphens:auto}
.prose h3{font:700 9px/1.3 'IBM Plex Sans',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:var(--acc-d);margin:10px 0 5px;break-after:avoid}
.prose h3:first-child{margin-top:0}
.prose p{margin:0 0 8px}
.prose strong{color:#1e3a8a}
.figblock{margin:14px 0 4px;break-inside:avoid}
.figblock.full{column-span:all;-webkit-column-span:all}
.figrow{display:flex;flex-wrap:wrap;gap:14px 16px;justify-content:center;align-items:flex-end}
.figrow .fx{margin:0;display:flex;flex-direction:column;gap:5px;align-items:center;max-width:100%}
.figrow .fx img{display:block;width:auto;height:auto;max-width:100%;border:1px solid #e2e8f0;border-radius:3px;background:#fff}
.figblock.full .fx img{max-height:340px}
.figblock.wide .fx img{max-height:250px}
.figrow .fx figcaption{font:600 7.6px/1.3 'IBM Plex Sans',sans-serif;letter-spacing:.03em;text-transform:uppercase;color:#64748b;text-align:center;max-width:280px}
.figrow .fx figcaption b{color:#1e3a8a}
.figcap{margin-top:8px;font:400 8.8px/1.45 'IBM Plex Sans',sans-serif;color:#334155;text-align:justify}
.figcap b{color:var(--acc-d);font-weight:700}
.figblock.full .figcap{max-width:720px;margin-left:auto;margin-right:auto}
.algo-card{border:1px solid #cbd5e1;margin:14px 0 4px;column-span:all;-webkit-column-span:all;break-inside:avoid}
.algo-head{padding:6px 12px;background:#f1f5f9;border-bottom:1px solid #cbd5e1;font:700 9.5px/1.25 'IBM Plex Sans',sans-serif;letter-spacing:.07em;text-transform:uppercase;color:#1e3a8a}
.algo-body{padding:10px 12px;display:flex;justify-content:center}
.algo-body svg{width:100%!important;max-width:100%!important;height:auto!important;display:block}
.tbl-card{break-inside:avoid;margin-top:12px}
.case-row{display:flex;gap:14px;margin-top:12px;break-inside:avoid;page-break-before:always;break-before:page}
.case{flex:1.35;border:1px solid #cbd5e1;border-left:4px solid #1e3a8a;display:flex;flex-direction:column;break-inside:avoid;page-break-inside:avoid}
.case-head{display:flex;justify-content:space-between;padding:5px 10px;background:#f8fafc;border-bottom:1px solid #e2e8f0;font:700 9px/1 'IBM Plex Sans',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#1e3a8a}
.case-head .mono{color:#64748b}
.case-body{padding:8px 10px;display:flex;flex-direction:column;gap:5px}
.case-body p{font:400 9.6px/1.45 'IBM Plex Sans',sans-serif;text-align:justify}
.case-body .conducta{color:#334155}
.case-body .conducta strong{color:var(--acc-d)}
.rules{flex:1;border:1px solid var(--acc-p);background:var(--acc-t);display:flex;flex-direction:column;break-inside:avoid;page-break-inside:avoid}
.rules-head{padding:5px 10px;border-bottom:1px solid var(--acc-p);font:700 9px/1 'IBM Plex Sans',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:var(--acc-dp)}
.rules-body{padding:8px 10px;display:flex;flex-direction:column;gap:4px;font:400 9.4px/1.4 'IBM Plex Sans',sans-serif;color:var(--acc-ink)}
.qbank{margin-top:12px;break-inside:avoid}
.qbank-head{display:flex;justify-content:space-between;align-items:center;padding:5px 10px;background:#1e293b;font:700 9px/1 'IBM Plex Sans',sans-serif;letter-spacing:.08em;text-transform:uppercase;color:#fff}
.qbank-note{font-weight:600;font-size:8px;color:#94a3b8}
.qbank-body{display:flex;gap:14px;border:1px solid #cbd5e1;border-top:none;padding:9px 10px}
.q{flex:1;display:flex;flex-direction:column;gap:3px}
.q-tag{font:700 8px/1 'JetBrains Mono',monospace;color:var(--acc)}
.q-stem{font:400 9.6px/1.4 'IBM Plex Sans',sans-serif;text-align:justify}
.q-opts{font:400 9.2px/1.5 'IBM Plex Sans',sans-serif;color:#334155}

/* SÍNTESIS */
.synth-title{display:flex;justify-content:space-between;align-items:flex-end;gap:16px}
.synth-title h2{font:700 20px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:-.02em;margin-top:3px}
.synth-grid{display:grid;grid-template-columns:1.05fr 0.95fr;gap:14px;margin-top:12px;align-items:start}
.synth-col{display:flex;flex-direction:column;gap:11px}
.cifra-grid{padding:10px 12px;display:grid;grid-template-columns:repeat(auto-fit, minmax(120px, 1fr));gap:10px 14px}
.cifra{display:flex;flex-direction:column;gap:2px}
.cifra-n{font:700 18px/1.1 'Barlow Condensed',sans-serif;color:#1e3a8a}
.cifra-t{font:400 8.8px/1.35 'IBM Plex Sans',sans-serif;color:#475569}
.mnemo{padding:9px 12px;display:flex;flex-direction:column;gap:7px;font:400 9.3px/1.45 'IBM Plex Sans',sans-serif;color:var(--acc-ink)}
.ges-grid{display:flex;flex-direction:column;background:#fff}
.ges-item{background:#fff;padding:8px 12px;display:flex;flex-direction:column;gap:2px;border-bottom:1px solid #e2e8f0}
.ges-item:last-child{border-bottom:none}
.ges-t{font:700 9.2px/1.25 'IBM Plex Sans',sans-serif;color:var(--acc-dp)}
.ges-d{font:400 8.6px/1.3 'IBM Plex Sans',sans-serif;color:#475569}
.chk-list{display:flex;flex-direction:column;background:#fff}
.chk-item{padding:9px 12px;border-bottom:1px solid #e2e8f0;display:flex;justify-content:space-between;align-items:center;gap:12px}
.chk-item:last-child{border-bottom:none}
.chk-txt{font:400 9.4px/1.45 'IBM Plex Sans',sans-serif;color:#1e293b;flex:1}
.chk-pill{font:700 8.5px/1 'JetBrains Mono',monospace;color:var(--acc);background:var(--acc-t);border:1px solid var(--acc-p);padding:3px 7px;border-radius:3px;white-space:nowrap}

/* SOLUCIONARIO */
.sol-grid{margin-top:16px;display:grid;grid-template-columns:1fr 1fr;gap:12px;align-content:start}
.sol-card{border:1px solid #cbd5e1;display:flex;flex-direction:column;break-inside:avoid}
.sol-card-head{display:flex;justify-content:space-between;align-items:center;gap:8px;padding:5px 10px;background:#f8fafc;border-bottom:1px solid #cbd5e1;font:700 8.5px/1.2 'JetBrains Mono',monospace;color:#334155}
.sol-card-head .light{color:#64748b;font-weight:400;font-size:8px}
.sol-card-body{padding:8px 10px;display:flex;flex-direction:column;gap:6px}
.sol-recap{font:400 9.4px/1.4 'IBM Plex Sans',sans-serif;color:#475569}
.sol-clave{display:flex;align-items:center;gap:8px}
.sol-pill{font:700 9px/1 'IBM Plex Sans',sans-serif;letter-spacing:.08em;text-transform:uppercase;background:var(--acc-t);color:var(--acc-dp);border:1px solid var(--acc-p);padding:4px 8px;border-radius:999px;white-space:nowrap}
.sol-opt{font:600 9.4px/1.3 'IBM Plex Sans',sans-serif}
.sol-just{font:400 9.6px/1.45 'IBM Plex Sans',sans-serif}
.sol-perla{background:var(--acc-t);border-left:3px solid var(--acc);padding:5px 8px;font:400 9.2px/1.4 'IBM Plex Sans',sans-serif;color:var(--acc-ink)}
.sol-perla.trap{background:#fef2f2;border-left-color:#b91c1c;color:#7f1d1d}
</style></head><body>
${body}
</body></html>`;
}

/* ───────────────────────────── render ───────────────────────────── */

async function compressImage(browser, file, crop, maxW = 1180) {
  const ext = path.extname(file).toLowerCase();
  const mime = ext === '.png' ? 'png' : 'jpeg';
  const raw = `data:image/${mime};base64,${fs.readFileSync(file).toString('base64')}`;
  const pg = await browser.newPage();
  try {
    return await pg.evaluate(async (src, maxW, crop) => {
      const img = new Image(); img.src = src; await img.decode();
      const W = img.naturalWidth, H = img.naturalHeight;
      let sx = 0, sy = 0, sw = W, sh = H;
      if (crop && crop.length === 4) {
        sx = Math.round(W * crop[0] / 100); sy = Math.round(H * crop[1] / 100);
        sw = Math.round(W * crop[2] / 100); sh = Math.round(H * crop[3] / 100);
      } else {
        const probe = document.createElement('canvas'); probe.width = W; probe.height = H;
        const pc = probe.getContext('2d'); pc.drawImage(img, 0, 0);
        let x0 = W, y0 = H, x1 = 0, y1 = 0;
        try {
          const d = pc.getImageData(0, 0, W, H).data;
          for (let y = 0; y < H; y += 2) for (let x = 0; x < W; x += 2) {
            const i = (y * W + x) * 4;
            if (d[i + 3] > 8 && (d[i] < 244 || d[i + 1] < 244 || d[i + 2] < 244)) {
              if (x < x0) x0 = x; if (x > x1) x1 = x; if (y < y0) y0 = y; if (y > y1) y1 = y;
            }
          }
        } catch (e) { x0 = 0; y0 = 0; x1 = W; y1 = H; }
        if (x1 - x0 > W * 0.25 && y1 - y0 > H * 0.15) {
          const pad = Math.round(Math.min(W, H) * 0.012);
          sx = Math.max(0, x0 - pad); sy = Math.max(0, y0 - pad);
          sw = Math.min(W, x1 + pad) - sx; sh = Math.min(H, y1 + pad) - sy;
        }
      }
      const scale = Math.min(1, maxW / sw);
      const c = document.createElement('canvas');
      c.width = Math.round(sw * scale); c.height = Math.round(sh * scale);
      const ctx = c.getContext('2d');
      ctx.fillStyle = '#fff'; ctx.fillRect(0, 0, c.width, c.height);
      ctx.drawImage(img, sx, sy, sw, sh, 0, 0, c.width, c.height);
      return c.toDataURL('image/jpeg', 0.82);
    }, raw, maxW, crop);
  } catch (e) { return raw; } finally { await pg.close(); }
}

function figJobs(figSpec, figDir) {
  const jobs = [];
  Object.values(figSpec).forEach(spec => spec.items.forEach(it => {
    const p = path.join(figDir, it.file);
    if (fs.existsSync(p)) jobs.push({ key: it.file, path: p, crop: it.crop || spec.crop || null });
  }));
  return jobs;
}

async function buildBook(spec, browser) {
  const t = themeVars(spec.accent);
  const data = spec.dataset();
  const figSpec = spec.figSpec || {};
  const meta = prepare(data, figSpec);
  const x = { spec: { ...spec, accent: spec.accent }, data, figSpec, figMap: new Map(), ...meta };

  const jobs = figSpec && spec.figDir ? figJobs(figSpec, spec.figDir) : [];
  for (const j of jobs) x.figMap.set(j.key, await compressImage(browser, j.path, j.crop));

  const html = buildHtml(x);
  fs.writeFileSync(path.join(__dirname, `temp_maqueta_${spec.key}.html`), html);

  const page = await browser.newPage();
  await page.setContent(html, { waitUntil: 'networkidle0', timeout: 90000 });
  await page.evaluateHandle('document.fonts.ready');
  const pdf = await page.pdf({
    format: 'A4', printBackground: true, displayHeaderFooter: true,
    headerTemplate: '<div></div>',
    footerTemplate: `<div style="width:100%;font:600 7px 'Helvetica',Arial,sans-serif;color:#9aa3af;text-align:center;"><span class="pageNumber"></span></div>`,
    margin: { top: '0', bottom: '0', left: '0', right: '0' },
  });
  await page.close();

  const outMain = spec.moduleDir
    ? path.join(DIST_DIR, spec.moduleDir, spec.out || `Manual_EUNACOM_${spec.title.replace(/\s+/g, '_')}_Completo_2026.pdf`)
    : path.join(DIST_DIR, spec.out || `Manual_EUNACOM_${spec.title.replace(/\s+/g, '_')}_Completo_2026.pdf`);
  fs.mkdirSync(path.dirname(outMain), { recursive: true });
  let savedPath = null;
  const candidates = [
    outMain,
    outMain.replace(/\.pdf$/, '_NEW.pdf'),
    outMain.replace(/\.pdf$/, '_v2.pdf'),
    outMain.replace(/\.pdf$/, `_${Date.now()}.pdf`),
  ];
  for (const cand of candidates) {
    try {
      fs.writeFileSync(cand, pdf);
      savedPath = cand;
      break;
    } catch (err) {}
  }
  if (savedPath) {
    console.log('     ✓', savedPath);
  } else {
    throw new Error('No se pudo escribir el PDF, todos los nombres posibles están bloqueados por el lector.');
  }
  console.log(`     ${data.length} clases · ${meta.totalQuestions} preguntas · ${(pdf.length / 1e6).toFixed(1)} MB · color ${spec.accent}`);
}

async function main() {
  const arg = process.argv[2];
  const targets = SPECIALTIES
    .map(s => ({ ...s, accent: ACCENTS[s.key] || '#334155' }))
    .filter(s => !arg || s.key === arg);

  console.log('▶ MANUAL EUNACOM · compilador multi-especialidad (Maqueta 1b)\n');
  const chromePath = ['C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'].find(p => fs.existsSync(p));
  const launchOpts = { headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'] };
  if (chromePath) launchOpts.executablePath = chromePath;
  const browser = await puppeteer.launch(launchOpts);

  for (const spec of targets) {
    if (!spec.dataset) {
      console.log(`  ⏭  ${spec.title.padEnd(28)} pendiente — falta dataset estructurado (scripts/dataset_${spec.key}.cjs)`);
      continue;
    }
    console.log(`  ▶  ${spec.title.padEnd(28)} [${spec.accent}]`);
    try { await buildBook(spec, browser); } catch (e) { console.error(`     ✗ ${e.message}`); }
  }
  await browser.close();
  console.log('\n✔ Fin.');
}

main().catch(e => { console.error(e); process.exit(1); });
