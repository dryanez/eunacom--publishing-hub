/**
 * ══════════════════════════════════════════════════════════════════════════════
 * REPASO DE ÚLTIMA HORA · compilador multi-especialidad
 *   Un tomo compacto por especialidad, con el mismo diseño que los manuales
 *   (build_book.cjs): banda de color de la especialidad, portada con foto,
 *   IBM Plex Sans + Barlow Condensed + JetBrains Mono, tablas azul marino.
 *
 *   Cada tema = 1 página (máx. 2 en temas tier 3):
 *     encabezado (n.º, título, códigos V3 con Dx/Tx/Seg, ⭐ prioridad, GES)
 *     «Lo que te preguntan» (keyPoints del libro) + foto clave de la clase
 *     algoritmo (diagram/svg del libro → árbol de decisión de la clase → flujo de la clase)
 *     tabla principal del tema · «Trampas EUNACOM» (tabla de la clase) · «Regla de oro»
 *     pie: preguntas del Libro Gordo de la especialidad (n.º y páginas) + QR a la clase
 *   Al final: números que tienes que saber · fármacos de primera línea · GES ·
 *   plan de repaso de 7 días · índice por prioridad.
 *
 * Uso:   node books/scripts/build_repaso.cjs <libro> [--html]
 *        <libro> = clave de build_book.cjs (gastroenterologia, cardiologia, nefrologia…)
 *        --html  = solo escribe el HTML intermedio (books/scripts/temp_repaso_<libro>.html)
 *        --out <carpeta> = otra carpeta de salida (pruebas)
 * Salida: books/dist/Repaso/Repaso_Ultima_Hora_<Título>_2026.pdf
 *         books/dist/Repaso/Anki_<Título>.csv
 *
 * Fuentes (no se inventa contenido; solo se selecciona y compacta):
 *   books/scripts/dataset_<libro>*.cjs      tema, keyPoints, tabla, svg/diagram, GES, frecuencia
 *   classes/lessons/<classId>.cjs           trampas, reglas de oro (Cierre), fotos, fármacos, flujos
 *   classes/pathways/*_pathways.cjs         árbol de decisión de la clase (algoritmo)
 *   books/data/v3_topic_codes.json + v3_codemap.json         códigos y niveles Dx/Tx/Seg
 *   books/data/real_questions_by_code.json                   frecuencia real → ⭐
 *   books/dist/ENSAYO_90Q_*.json + Libro_Gordo_*_90Q.pdf     preguntas de práctica por tema
 *   books/data/repaso/<libro>.json (opcional)                ajustes editoriales (foto elegida…)
 * Requiere: playwright o puppeteer (como build_book.cjs), python3 + PyMuPDF (páginas del
 *           Libro Gordo) y el paquete npm «qrcode» (si falta, el QR queda como texto).
 * ══════════════════════════════════════════════════════════════════════════════
 */
const fs = require('fs');
const path = require('path');
const { spawnSync } = require('child_process');

let puppeteer;
try { puppeteer = require('puppeteer'); } catch (e) { puppeteer = require('./puppeteer_shim.cjs'); }
let QRCode = null;
for (const p of ['qrcode', '/private/tmp/qrjs/node_modules/qrcode', '/tmp/qrjs/node_modules/qrcode']) {
  try { QRCode = require(p); break; } catch (e) { /* siguiente */ }
}

const BB = require('./build_book.cjs');
const { applyV3, V3_MAP } = require('./v3_codes.cjs');

const BOOKS = path.join(__dirname, '..');
const REPO = path.join(BOOKS, '..');
const DIST = path.join(BOOKS, 'dist');
const OUT_DIR = path.join(DIST, 'Repaso');
const LESSONS = path.join(REPO, 'classes', 'lessons');
const PATHWAYS = path.join(REPO, 'classes', 'pathways');
const MEDIA = path.join(REPO, 'classes', 'media');
const CODEMAP = JSON.parse(fs.readFileSync(path.join(BOOKS, 'data', 'v3_codemap.json'), 'utf8'));
const REAL = JSON.parse(fs.readFileSync(path.join(BOOKS, 'data', 'real_questions_by_code.json'), 'utf8'));
for (const k of Object.keys(REAL)) REAL[k] = REAL[k].filter(q => !(q.audit && q.audit.excluir));   // audit del banco: excluidas no

/* URL de cada clase en la plataforma. Las rutas www.eunacomapp.cl/clase/<id> de build_book.cjs
 * están «por confirmar con el equipo web»; mientras tanto el QR lleva al sitio de la Academia
 * con UTM (utm_content = id de la clase, para medir qué tema se escanea).               */
const CLASS_URL = null; // p. ej. id => `https://www.eunacomapp.cl/clase/${id}` cuando esté publicada
const FALLBACK_URL = (prefix, id) => `https://eunacom-examen.cl/?utm_source=repaso_${prefix}&utm_content=${id}`;

/* ───────────────────────────── utilidades ───────────────────────────── */
const strip = s => String(s == null ? '' : s).replace(/<\/?[a-zA-Z][^>]*>/g, '').replace(/\s+/g, ' ').trim();
const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/'/g, '&#39;');
const md = t => String(t || '').replace(/\*\*([^*\n]+?)\*\*/g, '<b>$1</b>');
const CN = n => String(n).padStart(2, '0');
const norm = t => strip(t).normalize('NFD').replace(/[\u0300-\u036f]/g, '').toLowerCase();
const words = t => norm(t).split(/[^a-z0-9ñ]+/).filter(w => w.length >= 5).map(w => w.slice(0, 6));
const CODE_RE = /\b\d\.\d{2}\.\d\.\d{3}\b/g;
const LV_SHORT = v => { const s = String(v || '—'); return /espec/i.test(s) ? 'Específico' : /sosp/i.test(s) ? 'Sospecha' : /compl/i.test(s) ? 'Completo' : /inic/i.test(s) ? 'Inicial' : /deriv/i.test(s) ? 'Derivar' : /no req/i.test(s) ? 'No requiere' : s; };
const STARS = n => '★'.repeat(n) + '<span class="st-off">' + '★'.repeat(3 - n) + '</span>';
const STARS_TXT = n => '⭐'.repeat(n);
const PRIO_TXT = { 3: 'Prioridad alta', 2: 'Prioridad media', 1: 'Prioridad baja' };

// rangos compactos: [9,10,11,15] → «9–11, 15»
function ranges(nums) {
  const a = [...new Set(nums)].sort((x, y) => x - y); const out = [];
  for (let i = 0; i < a.length; i++) { let j = i; while (j + 1 < a.length && a[j + 1] === a[j] + 1) j++; out.push(j > i ? `${a[i]}–${a[j]}` : `${a[i]}`); i = j; }
  return out.join(', ');
}

// cifras: cortes, dosis, tiempos y metas
const NUM_RE = /(?:[≥≤<>~±]\s?\d[\d.,]*\s?(?:%|[a-zA-Záéíóúñµ³\/·²]+(?:\/[a-zA-Z³]+)?)?|\d[\d.,]*(?:\s?(?:[–-]|a)\s?\d[\d.,]*)?\s?(?:%|×|x\b|mg\/kg|mL\/kg|ml\/kg|mg\/dL|mg\/dl|g\/dL|g\/dl|mEq\/L|U\/L|UI|mg|mcg|µg|g\b|mL|ml\b|L\b|kg|cm|mm\b|mmHg|mm³|lpm|°C|horas?\b|h\b|hrs?\b|minutos?\b|min\b|días?\b|semanas?\b|meses\b|mes\b|años\b|veces|deposiciones|cc\b))/g;
const hasNum = t => { NUM_RE.lastIndex = 0; const s = strip(t).replace(CODE_RE, ''); return NUM_RE.test(s) && !/^\s*$/.test(s); };
const boldNums = t => String(t).replace(NUM_RE, m => `<b class="nm">${m}</b>`);
const numKind = t => {
  const s = norm(t);
  if (/\b(mg|mcg|g|ui|ml\/kg|mg\/kg|ml)\b|dosis|cada \d+ ?h/.test(s)) return 'Dosis';
  if (/meta|objetivo|mantener|lograr/.test(s)) return 'Meta';
  if (/\b(hora|horas|h|min|minutos|dias?|semanas?|mes|meses)\b/.test(s) && !/[≥≤<>]/.test(t)) return 'Tiempo';
  return 'Corte';
};
// fármacos (sufijos y nombres frecuentes; sirve para todas las especialidades)
const DRUG_RE = /(azol|prazol|cilina|micina|floxacino|ciclina|cef[a-z]+|olol\b|pril\b|sart[aá]n|statina|tiazida|semida|lactona|parina|xab[aá]n|gatr[aá]n|metformina|insulina|gliptina|gliflozina|glutida|tida\b|vir\b|virina|buvir|mab\b|nib\b|lactulosa|rifaximina|terlipresina|octre[oó]tido|somatostatina|propranolol|carvedilol|espironolactona|furosemida|albendazol|mebendazol|praziquantel|ivermectina|tinidazol|metronidazol|mesalazina|sulfasalazina|azatioprina|metotrexato|infliximab|adalimumab|vedolizumab|ustekinumab|corticoide|prednisona|budesonida|hidrocortisona|dexametasona|IBP|omeprazol|bismuto|tetraciclina|amoxicilina|claritromicina|celecoxib|toxina botul|bloqueadores? de calcio|nifedipino|amitriptilina|trimebutino|pinaverio|polietilenglicol|laxante|enzimas pancre|vitamina|tiamina|antibi[oó]tico|antiviral|vacuna|inmunomodulador|biol[oó]gico|anti-TNF|5-ASA|betabloq|diur[eé]tico|antidepresivo|inmunoglobulina|IgHB|opioide|morfina|dipirona|paracetamol|ketorolaco|antiespasm|imatinib|quimioterapia|aspirina|clopidogrel|heparina|warfarina|acenocumarol|atorvastatina|amiodarona|digoxina|adenosina|diltiazem|verapamilo|nitroglicerina|alteplasa|tenecteplasa|salbutamol|ipratropio|levotiroxina|tiamazol|propiltiouracilo|hierro|[aá]cido f[oó]lico|ursodesox|colestiramina|sueroterapia|SRO|sales de rehidrataci|antihistam|antiem[eé]tico|ondansetr[oó]n|metoclopramida|domperidona)/i;

/* ───────────────────────────── carga de datos ───────────────────────────── */
function loadLesson(classId) {
  const f = classId && path.join(LESSONS, `${classId}.cjs`);
  if (!f || !fs.existsSync(f)) return null;
  try { delete require.cache[require.resolve(f)]; return require(f); } catch (e) { console.warn(`  ! no se pudo leer ${classId}.cjs: ${e.message}`); return null; }
}
function loadPathways() {
  const out = {};
  if (!fs.existsSync(PATHWAYS)) return out;
  for (const f of fs.readdirSync(PATHWAYS).filter(f => f.endsWith('_pathways.cjs'))) {
    try { Object.assign(out, require(path.join(PATHWAYS, f))); } catch (e) { console.warn(`  ! ${f}: ${e.message}`); }
  }
  return out;
}
// especialidad → [ENSAYO json, PDF] tomado de build_libro_gordo_pdf.cjs (fuente única)
function libroGordoFiles(key) {
  const s = fs.readFileSync(path.join(__dirname, 'build_libro_gordo_pdf.cjs'), 'utf8');
  const re = /^\s{2}(\w+):\s*\{[\s\S]*?name:\s*'([^']+)'[\s\S]*?inputFile:\s*'([^']+)',\s*outFile:\s*'([^']+)'/gm; let m;
  while ((m = re.exec(s))) if (m[1] === key) return { name: m[2], json: path.join(DIST, m[3]), pdf: path.join(DIST, m[4]), file: m[4] };
  return null;
}
// página (1-based) de cada «PREGUNTA N» en el cuadernillo y en el solucionario del Libro Gordo
function libroGordoPages(pdf) {
  const py = `
import json, re, sys, fitz
d = fitz.open(sys.argv[1]); q = {}; s = {}; sol = False
for i, p in enumerate(d):
    t = p.get_text()
    if re.search(r'SOLUCIONARIO', t) and re.search(r'Respuesta:', t): sol = True
    for m in re.finditer(r'PREGUNTA\\s+(\\d+)', t):
        n = int(m.group(1)); (s if sol else q).setdefault(n, i + 1)
print(json.dumps({'q': q, 's': s, 'pages': d.page_count}))`;
  const r = spawnSync('python3', ['-c', py, pdf], { encoding: 'utf8' });
  if (r.status !== 0) { console.warn('  ! PyMuPDF no disponible: el pie mostrará solo n.º de pregunta'); return null; }
  return JSON.parse(r.stdout);
}

/* ───────────────────────────── preparación por tema ───────────────────────────── */
function lessonPhotos(L) {
  const out = []; if (!L) return out;
  const walk = o => {
    if (!o || typeof o !== 'object') return; if (Array.isArray(o)) return o.forEach(walk);
    if (o.photo) out.push(o.photo); if (o.photos) out.push(...o.photos);
    if (o.type === 'image') (o.images || []).forEach(im => out.push({ ...im, gallery: o.layout === 'gallery' }));
    for (const k in o) if (!['photo', 'photos', 'images'].includes(k)) walk(o[k]);
  };
  walk(L.slides);
  return out.filter(p => p && p.src && !/\.(mp4|webm|mov)$/i.test(p.src) && fs.existsSync(path.join(MEDIA, p.src)));
}
function lessonTraps(L) {
  const s = L && L.slides.find(s => s.type === 'table' && /trampa/i.test(`${s.kicker} ${s.title}`));
  return s ? { head: s.head || [], rows: (s.rows || []).map(r => (r.cells || r).map(strip)) } : null;
}
function lessonGold(L) {
  const s = L && L.slides.find(s => s.type === 'points' && /cierre|reglas? de oro/i.test(`${s.kicker} ${s.title}`));
  const it = s && s.cards && s.cards[0] && s.cards[0].items && s.cards[0].items[0];
  return it ? { t: strip(it.t), d: strip(it.d) } : null;
}
function lessonPharma(L) {
  const out = []; if (!L) return out;
  L.slides.filter(s => s.type === 'points' && !/cierre/i.test(s.kicker || '')).forEach(s => (s.cards || []).filter(c => c.kind === 'pharma').forEach(c =>
    (c.items || []).forEach(it => out.push({ ctx: strip(s.title), card: strip(c.title), tag: strip(c.tag), t: strip(it.t), d: strip(it.d) }))));
  return out;
}
function lessonItems(L) {
  const out = []; if (!L) return out;
  L.slides.filter(s => s.type === 'points').forEach(s => (s.cards || []).forEach(c => (c.items || []).forEach(it => out.push(`${strip(it.t)}${it.d ? ' — ' + strip(it.d) : ''}`))));
  return out;
}
function lessonFlow(L) {
  if (!L) return null;
  const flows = L.slides.filter(s => s.type === 'flow' && (s.nodes || []).length >= 4);
  if (!flows.length) return null;
  const pref = flows.find(s => /algoritmo|manejo|conducta|tratamiento|enfrentamiento/i.test(`${s.kicker} ${s.title}`));
  const f = pref || flows.sort((a, b) => b.nodes.length - a.nodes.length)[0];
  return { title: strip(f.title), nodes: f.nodes.map(n => ({ id: n.id, col: n.col, row: n.row, k: n.k, t: strip(n.t), s: strip(n.s) })), edges: (f.edges || []).map(e => ({ from: e.from, to: e.to, label: strip(e.label) })) };
}
const cleanTree = n => ({ k: n.k, t: strip(n.t), s: strip(n.s), kids: (n.kids || []).map(([l, c]) => [strip(l), cleanTree(c)]) });

function prepare(key, spec) {
  const data = applyV3(key, spec.dataset());
  const PW = loadPathways();
  const over = (() => { const f = path.join(BOOKS, 'data', 'repaso', `${key}.json`); return fs.existsSync(f) ? JSON.parse(fs.readFileSync(f, 'utf8')) : {}; })();
  const prefix = String((data.find(c => c.classId) || {}).classId || key).split('-')[0];

  const topics = data.map((c, i) => {
    const L = loadLesson(c.classId);
    const ent = V3_MAP[c.classId] || V3_MAP[`${key}:${c.topicLabel}`];
    const codes = ent ? ent.codes : (String(c.perfilCode || '').match(CODE_RE) || []);
    const names = ent ? ent.names : [];
    const SEC = { examen: 'Examen', procedimiento: 'Procedimiento', conocimiento: 'Conocimiento general', urgencia: 'Urgencia', clinica: 'Situación clínica' };
    const codeInfo = codes.map((k, j) => { const m = CODEMAP[k] || {}; return { code: k, name: m.name || names[j] || '', dx: m.dx && LV_SHORT(m.dx), tx: m.tx && LV_SHORT(m.tx), seg: m.seg && LV_SHORT(m.seg), nivel: m.nivel || SEC[m.section] || '' }; });
    // algoritmo: diagram/svg del libro → árbol de la clase → flujo de la clase
    let algo = null;
    const dsvg = c.diagram && c.diagram.svg ? c.diagram.svg : (c.svg ? BB.getSvg(c.svg) : '');
    const pw = (L && L.pathway) || PW[c.classId];
    const fl = lessonFlow(L);
    // prioridad: árbol de decisión de la clase (pathway) → diagram/svg del dataset → flujo de la clase
    if (pw && pw.root) { algo = { type: 'tree', title: strip(pw.title), root: cleanTree(pw.root) }; if (fl) algo.alt = { type: 'flow', title: fl.title, nodes: fl.nodes, edges: fl.edges }; }
    else if (dsvg) algo = { type: 'svg', title: (c.diagram && c.diagram.title) || c.algoTitle || 'Algoritmo', svg: dsvg };
    else if (fl) algo = { type: 'flow', title: fl.title, nodes: fl.nodes, edges: fl.edges };
    // foto clave
    const photos = lessonPhotos(L);
    const o = (over.topics || {})[c.classId] || {};
    let photo = null;
    if (o.photo === false) photo = null;
    else if (typeof o.photo === 'string') photo = photos.find(p => p.label === o.photo || p.src.endsWith(o.photo)) || null;
    else photo = photos.find(p => p.gallery) || photos[0] || null;
    const photo2 = photos.find(p => p !== photo && !(photo && p.src === photo.src)) || null;
    const more = photos.filter(p => !(photo && p.src === photo.src)).slice(0, 3);
    // trampas de la clase, sin repetir filas que ya están en la tabla principal
    const tr = lessonTraps(L);
    const WS = t => new Set(norm(t).split(/[^a-z0-9ñ]+/).filter(w => w.length >= 3));
    const jac = (a, b) => { const A = WS(a), B = WS(b); const i = [...A].filter(w => B.has(w)).length; return i / Math.max(1, Math.min(A.size, B.size)); };
    const mainRows = ((c.table && c.table.rows) || []).map(r => r.map(strip));
    const dup = r => mainRows.some(m => jac(r[0], m[0]) >= 0.6 || jac(r.join(' '), m.join(' ')) >= 0.6);
    const traps = tr ? { head: tr.head, rows: tr.rows.filter(r => !dup(r)) } : null;
    const trapsSame = !!(tr && tr.rows.length && traps.rows.length < tr.rows.length); // la tabla del libro ya contiene trampas de la clase
    const gold = lessonGold(L) || (c.keyPoints && c.keyPoints.length ? { t: strip(c.keyPoints[0]), d: '' } : null);
    const ges = strip(c.ges);
    const isGes = !!ges && /\bGES\b|garant[ií]a expl/i.test(ges) && !/^(sin|no)\b/i.test(ges) && !/sin garant|no ges|no tiene|no contempla/i.test(ges.split('·')[0]);
    return {
      i, c, L, key: c.classId || `${key}:${c.topicLabel}`, id: `T${c.topicLabel}`, label: c.topicLabel, title: strip(c.title),
      block: c.blockNum, blockName: c.blockName, tier: c.tier || 1, codes, codeInfo, algo, photo, photo2, more, traps, gold,
      ask: (c.keyPoints || []).map(strip).slice(0, 7), table: c.table, table2: c.treatmentTable || c.table2 || c.severityTable || null,
      trapsSame, trapsAll: tr, ges, isGes, why: strip(c.frecuencia), contexto: strip(c.contexto),
      url: (CLASS_URL && c.classId ? CLASS_URL(c.classId) : FALLBACK_URL(prefix, c.classId || c.topicLabel)),
      pharma: lessonPharma(L), items: lessonItems(L),
    };
  });

  /* frecuencia real: cada código se atribuye al tema donde aparece más arriba en su lista
     (código principal); así una pregunta real no se cuenta en varios temas */
  const pos = {};
  topics.forEach(t => t.codes.forEach((k, j) => { (pos[k] = pos[k] || []).push({ t, j }); }));
  topics.forEach(t => { t.realKeys = new Set(); t.realByCode = {}; });
  for (const [k, lst] of Object.entries(pos)) {
    const qs = REAL[k] || []; if (!qs.length) continue;
    const mn = Math.min(...lst.map(x => x.j));
    lst.filter(x => x.j === mn).forEach(x => { qs.forEach(q => x.t.realKeys.add(q.key || strip(q.stem).slice(0, 80))); x.t.realByCode[k] = qs.length; });
  }
  topics.forEach(t => { t.real = t.realKeys.size; });
  // ⭐ por terciles dentro de la especialidad (empates hacia arriba); 0 preguntas reales = ⭐
  const sorted = topics.map(t => t.real).sort((a, b) => b - a);
  const cut3 = sorted[Math.max(0, Math.ceil(sorted.length / 3) - 1)];
  const cut2 = sorted[Math.max(0, Math.ceil(2 * sorted.length / 3) - 1)];
  topics.forEach(t => { t.stars = t.real >= cut3 && t.real > 0 ? 3 : t.real >= cut2 && t.real > 0 ? 2 : 1; });

  /* Libro Gordo: pregunta → tema (por topicLabel si viene; si no, por código principal) */
  const LG = libroGordoFiles(key);
  const lg = { name: LG ? LG.name : spec.title, file: LG ? LG.file : null, unassigned: [], byLabel: 0, byCode: 0 };
  topics.forEach(t => { t.lgQ = []; });
  if (LG && fs.existsSync(LG.json)) {
    const Q = JSON.parse(fs.readFileSync(LG.json, 'utf8'));
    const pages = fs.existsSync(LG.pdf) ? libroGordoPages(LG.pdf) : null;
    lg.total = Q.length; lg.pages = pages;
    Q.forEach((q, i) => {
      const n = q.number || i + 1;
      const ov = (over.lg || {})[String(n)];
      let t = ov ? topics.find(x => x.label === String(ov)) : null;
      if (t) lg.byEditorial = (lg.byEditorial || 0) + 1;
      if (!t) t = q.topicLabel && topics.find(x => x.label === String(q.topicLabel) && (!q.topicTitle || norm(q.topicTitle) === norm(x.title)));
      if (t && !ov) lg.byLabel++;
      else if (!t) {
        const qc = String(q.perfilCode || '').match(CODE_RE) || [];
        let cands = topics.map(x => ({ x, j: Math.min(...qc.map(k => x.codes.indexOf(k)).filter(j => j >= 0)) })).filter(o => isFinite(o.j));
        if (cands.length) {
          const mn = Math.min(...cands.map(o => o.j)); cands = cands.filter(o => o.j === mn);
          const qw = new Set(words(`${q.topicTitle || ''} ${q.stem} ${(q.options || []).map(o => o.text).join(' ')}`));
          const score = x => words(`${x.title} ${x.ask.join(' ')} ${x.codeInfo.map(ci => ci.name).join(' ')}`).filter(w => qw.has(w)).length;
          cands.sort((a, b) => score(b.x) - score(a.x)); t = cands[0].x; lg.byCode++;
        }
      }
      if (!t) { // sin código compartido: tema con más palabras en común (mínimo 3)
        // palabras completas del título de la pregunta (los enunciados de plantilla no discriminan)
        const W = t => new Set(norm(t).split(/[^a-z0-9ñ]+/).filter(w => w.length >= 5 && !/^(sindrome|enfermedad|aguda|agudo|cronica|cronico|complicada|paciente)$/.test(w)).map(w => w.slice(0, 8)));
        const tw = W(`${q.topicTitle || ''}`);
        const small = x => W(`${x.title} ${x.ask.join(' ')} ${x.codeInfo.map(ci => ci.name).join(' ')} ${((x.table && x.table.rows) || []).flat().join(' ')}`);
        const big = x => W((x.c.contentSections || []).map(cs => `${cs.subhead} ${(cs.paragraphs || [cs.text]).join(' ')}`).join(' '));
        const hit = (S, B) => [...S].filter(w => B.has(w)).length;
        const Wa = t => new Set(norm(t).split(/[^a-z0-9ñ]+/).filter(w => w.length >= 5 && !/^(sindrome|paciente|aguda|agudo)$/.test(w)).map(w => w.slice(0, 8))), twa = Wa(q.topicTitle || '');
        const best = topics.map(x => ({ x, s: 3 * hit(twa, Wa(x.codeInfo.map(ci => ci.name).join(' '))) + 2 * hit(tw, small(x)) + hit(tw, big(x)) })).sort((a, b) => b.s - a.s)[0];
        if (best && best.s >= 2) { (lg.wordInfo = lg.wordInfo || []).push({ n, sug: `${best.x.label} ${best.x.title.slice(0, 50)}`, title: q.topicTitle, code: q.perfilCode, stem: strip(q.stem).slice(0, 110) }); } // solo sugerencia: se asigna a mano en books/data/repaso/<libro>.json (lg)
      }
      const rec = { n, q: pages && pages.q[n], s: pages && pages.s[n] };
      if (t) t.lgQ.push(rec); else { lg.unassigned.push(n); (lg.unassignedInfo = lg.unassignedInfo || []).push({ n, title: q.topicTitle, code: q.perfilCode, stem: strip(q.stem).slice(0, 230) }); }
    });
  }
  return { data, topics, lg, prefix, over };
}

/* ───────────────────────────── secciones finales: extracción ───────────────────────────── */
// cifras de una frase (solo las que acompañan a una unidad o comparador), como conjunto ordenado
const digits = s => { NUM_RE.lastIndex = 0; return [...new Set((strip(s).replace(CODE_RE, '').match(NUM_RE) || []).flatMap(m => m.match(/\d+(?:[.,]\d+)?/g) || []))].sort(); };
function extractNumbers(topics) {
  const rows = [];
  topics.forEach(t => {
    const seen = new Map();
    const add = (txt, src) => {
      let s = strip(txt).replace(/\s+—\s+$/, '');
      if (!hasNum(s)) return;
      if (s.length > 170) { const parts = s.split(/(?<=[.;])\s+/).filter(hasNum); if (!parts.length) return; s = parts[0]; if (s.length > 170) return; }
      const sig = digits(s).join('|');
      if (!sig) return;
      const prev = seen.get(sig);
      if (prev && prev.s.length <= s.length) return;
      seen.set(sig, { s, src });
    };
    t.ask.forEach(k => k.split(/(?<=\.)\s+(?=[A-ZÁÉÍÓÚ¿])/).forEach(x => add(x, 'kp')));
    t.items.forEach(x => add(x, 'clase'));
    const hd = ((t.table && t.table.headers) || []).map(strip);
    ((t.table && t.table.rows) || []).forEach(r => add(r.map(strip).filter((v, j) => v && !/error|trampa|incorrect|no hacer/i.test(hd[j] || '')).join(' · '), 'tabla'));
    // si dos frases comparten casi todas las cifras, se queda la más corta
    const list = [...seen.values()].sort((a, b) => a.s.length - b.s.length);
    const kept = [];
    list.forEach(e => { const ns = new Set(digits(e.s));
      if (kept.some(k => { const ks = new Set(digits(k.s)); return [...ns].every(v => ks.has(v)); })) return; kept.push(e); });
    kept.slice(0, 9).forEach(e => rows.push({ t, text: e.s, kind: numKind(e.s), src: e.src }));
  });
  return editNumbers(rows, topics);
}
/* pasada editorial: fuera filas ruidosas (fragmentos, concatenaciones de tabla, frases largas, ordinales sin dato),
   una sola vez cada dato en todo el repaso y máx. MAXN filas agrupadas por tema (prioridad ★ primero) */
const MAXN = 60;
function editNumbers(rows, topics) {
  const balanced = s => (s.match(/\(/g) || []).length === (s.match(/\)/g) || []).length;
  const noisy = r => {
    const s = r.text;
    if (s.length > 118 || (s.match(/ · /g) || []).length >= 3 || /[;,]$/.test(s) || !balanced(s) || /^[a-zá-ú]/.test(s) && !/^(mg|ml|mm|kg)\b/.test(s)) return true;
    if (/^(\d\.[º°]|\d\.(er|ª))\s/.test(s) && !/[≥≤<>]|\d\s?(mg|mL|mmHg|%|h\b|min|lpm|días|semanas)/.test(s.slice(4))) return true;
    const d = digits(s); if (!d.length || d.every(v => /^(19|20)\d\d$/.test(v))) return true;
    return false;
  };
  const score = r => 100 - r.text.length / 2 + (/[≥≤<>]/.test(r.text) ? 15 : 0) + (r.kind === 'Dosis' || r.kind === 'Meta' ? 8 : 0) + (r.text.includes(' — ') ? 6 : 0) + (r.src === 'kp' ? 4 : 0) - (/^\w+\s·\s/.test(r.text) ? 5 : 0);
  const order = [...topics].sort((a, b) => b.stars - a.stars || b.real - a.real || a.i - b.i);
  const per = new Map(order.map(t => [t, rows.filter(r => r.t === t && !noisy(r)).sort((a, b) => score(b) - score(a))]));
  const seen = new Set(); const take = new Map(order.map(t => [t, []]));
  let total = 0;
  const grab = t => { // mejor fila aún no usada de ese tema (dato no repetido en otro tema)
    const lst = per.get(t);
    while (lst.length) { const r = lst.shift(); const sig = digits(r.text).join('|'); const dupTxt = norm(r.text).slice(0, 40);
      if (seen.has(sig) || seen.has(dupTxt)) continue; seen.add(sig); seen.add(dupTxt); take.get(t).push(r); total++; return true; }
    return false;
  };
  for (const t of order) { if (total >= MAXN) break; grab(t); }
  for (let pass = 2; pass <= 4 && total < MAXN; pass++) for (const t of order) { if (total >= MAXN) break; if (t.stars + 1 >= pass || pass === 2) grab(t); }
  return topics.flatMap(t => take.get(t));
}
function extractDrugs(topics) {
  const rows = [];
  topics.forEach(t => {
    const seen = new Set();
    t.pharma.forEach(p => {
      if (/^(no|nunca|contraindicad|evitar)\b|desplazad|obsolet/i.test(p.t)) return;
      let drug = p.t, det = p.d, sit0 = '';
      if (!DRUG_RE.test(p.t)) { if (DRUG_RE.test(p.d) && p.t.length < 60) { sit0 = p.t; drug = p.d; det = ''; } else return; }
      const k = norm(drug).slice(0, 40); if (seen.has(k)) return; seen.add(k);
      const head = p.ctx.split(':')[0].trim();
      const ctx = head.length <= 36 && !/^(c[oó]mo|qu[eé]|lo que|educar|escalonado|diagn[oó]stico y|manejo|tratamiento|estudio|cu[aá]ndo|d[oó]nde)\b/i.test(head) ? head : '';
      const generic = /^(tratamiento|manejo|f[aá]rmacos?|elecci[oó]n|antibi[oó]ticos?|conducta|lo que se agrega|mientras tanto|manejo agudo|tratamiento inicial|medidas de base|qu[eé] hacer)$/i.test(p.card);
      const card = generic ? (p.tag && !/^(tratamiento|manejo|elecci[oó]n|curativo)$/i.test(p.tag) ? p.tag : '') : p.card;
      const sit = [ctx, card, sit0].filter(Boolean).filter((v, i, a) => a.indexOf(v) === i).join(' · ');
      rows.push({ t, sit, drug, det });
    });
    if (!t.pharma.length) t.ask.filter(k => /primera l[ií]nea|de elecci[oó]n/i.test(k) && DRUG_RE.test(k)).forEach(k => rows.push({ t, sit: t.title, drug: k, det: '' }));
  });
  return editDrugs(rows);
}

/* pasada editorial de fármacos: sin negaciones («no iniciar…», «suspender…»), sin fragmentos ni filas largas,
   sin repetir el mismo fármaco en otro tema, situación acortada a 2 niveles y máx. 4 filas por tema */
function editDrugs(rows) {
  const bal = v => (v.match(/\(/g) || []).length === (v.match(/\)/g) || []).length;
  const seen = new Set(); const cnt = new Map(); const out = [];
  rows.forEach(r => {
    const drug = r.drug.replace(/[;,]\s*$/, ''), det = r.det.replace(/[;,]\s*$/, '');
    if (/^(no|nunca|evitar|suspender|sin)\b|^causa:|^cuidado/i.test(drug) || drug.length > 115 || det.length > 115 || !bal(drug) || !bal(det) || /^[a-zá-ú]/.test(drug) && !/^(metoprolol|amoxicilina|apixab|rivarox|enalapril|losart|hidro|espiro|furos|aspirina|warfarina|atorva|verapamilo|diltiazem|nitro|colchi|heparina|penicilina|ampicilina|amiodarona|atropina|adenosina|insulina|metformina|[a-z]+)\b/.test(drug)) return;
    if (!DRUG_RE.test(drug) && !DRUG_RE.test(det)) return;
    const sig = norm(drug).slice(0, 38); if (seen.has(sig)) return;
    if ((cnt.get(r.t) || 0) >= 4) return;
    seen.add(sig); cnt.set(r.t, (cnt.get(r.t) || 0) + 1);
    const segs = r.sit.split(' · ').filter(Boolean); let sit = segs.length > 2 ? segs.slice(0, 2).join(' · ') : r.sit;
    if (sit.length > 75) sit = segs[0].length <= 75 ? segs[0] : segs[0].slice(0, 72).replace(/\s+\S*$/, '') + '…';
    out.push({ ...r, sit, drug, det });
  });
  return out;
}

/* ───────────────────────────── HTML ───────────────────────────── */
let PCOUNT = 0;
const gbar = (x, label) => `<div class="gbar"><span>Repaso de última hora · ${esc(x.spec.title)}${label ? `&nbsp;&nbsp;·&nbsp;&nbsp;${label}` : ''}</span></div>`;
const pnum = () => `<div class="pnum"></div>`;

function qrSvg(url) {
  if (!QRCode) return `<div class="qr-miss">QR</div>`;
  let out = '';
  QRCode.toString(url, { type: 'svg', margin: 0, errorCorrectionLevel: 'M', color: { dark: '#0f172a', light: '#ffffff' } }, (e, s) => { out = s || ''; });
  return out;
}

function coverPage(x) {
  const { spec, topics } = x;
  const meta = BB.COVER_METADATA[spec.ch] || { code: spec.ch, title: spec.title, sub: '', color: spec.accent, chip: spec.accent };
  const ph = meta.photo && path.join(BOOKS, 'assets', 'covers', meta.photo);
  const bg = ph && fs.existsSync(ph) ? `data:image/jpeg;base64,${fs.readFileSync(ph).toString('base64')}` : '';
  const logo = fs.readFileSync(path.join(BOOKS, 'assets', 'aee-logo-7a-dark.svg'), 'utf8');
  const n3 = topics.filter(t => t.stars === 3).length;
  // portada opción 1 (título grande arriba), igual que los Libros Gordos y los Gran Libros
  const t1 = meta.title.length <= 13 ? 104 : Math.floor(104 * 13 / meta.title.length);
  return `<section class="page cover-aee o1" data-id="COVER" style="--a:${meta.color}">
    ${bg ? `<div class="cover-bg" style="background-image:url('${bg}');background-position:${meta.pos || 'center'}"></div>` : ''}
    <div class="cover-veil"></div><div class="cover-stripe"></div>
    <div class="o1-w">
      <div class="o1-top"><div class="cover-logo">${logo}</div><span class="o1-ed">1ª EDICIÓN · 2026</span></div>
      <div class="o1-t0">Repaso de última hora</div>
      <h1 class="o1-t1" style="font-size:${Math.max(t1, 64)}px">${esc(meta.title)}</h1>
      <div class="o1-bar"></div>
      <div><span class="o1-big">${topics.length}</span> <span class="o1-bl">temas · 1 página cada uno</span></div>
      <div class="o1-sub">${esc((meta.sub || '').replace(/^&\s*/, ''))}</div>
      <div class="o1-sub o1-sm">${n3} temas <span style="color:#fbbf24">★★★</span> según preguntas reales 2013–2025 · plan de repaso de 7 días</div>
      <div class="o1-bot"><span>${esc(spec.module)} · Tomo ${spec.ch} · ${meta.code} · Repaso</span><span>Academia Examen EUNACOM</span></div>
    </div>
  </section>`;
}

function indexPage(x) {
  const { topics } = x;
  const blocks = [...new Set(topics.map(t => t.block))];
  const rows = blocks.map(bn => {
    const ts = topics.filter(t => t.block === bn);
    return `<div class="blk idx-chap"><div class="idx-chap-head"><span class="idx-cn">${CN(bn)}</span><span class="idx-ct">${esc(ts[0].blockName)}</span></div>
      <div class="idx-topics">${ts.map(t => `<div class="idx-t"><span class="idx-st s${t.stars}">${STARS(t.stars)}</span><span class="idx-tt">${t.label}. ${esc(t.title)}${t.isGes ? ' <span class="ges-mini">GES</span>' : ''}</span><span class="idx-dots"></span><span class="idx-tp" data-ref="${t.id}"></span></div>`).join('')}</div></div>`;
  }).join('');
  const ends = [['NUM', 'Números que tienes que saber'], ...(x.noDrugs ? [] : [['DRUG', 'Fármacos de primera línea']]), ['GES', 'GES de la especialidad'], ['PLAN', 'Plan de repaso de 7 días'], ['PRIO', 'Índice por prioridad <span class="s3">★</span>']];
  return `<section class="page flow" data-id="IDX" data-title="Índice">${gbar(x, 'Índice')}<div class="pbody">
    <div class="blk pg-lead"><h2>Índice</h2><div class="rule"></div></div>
    <div class="blk howto">
      <div><b>Cómo usarlo.</b> Un tema por página: lee «Lo que te preguntan», recorre el algoritmo y termina en las trampas y la regla de oro. Después haz las preguntas del Libro Gordo que indica el pie.</div>
      <div class="howto-leg"><span><b class="s3">★★★</b> alta · <b class="s2">★★</b><span class="st-off">★</span> media · <b class="s1">★</b><span class="st-off">★★</span> baja — según cuántas preguntas reales (EUNACOM 2013–2025) hay en los códigos del tema.</span>
      <span>Niveles Perfil V3: <b>Dx</b> diagnóstico · <b>Tx</b> tratamiento · <b>Seg</b> seguimiento.</span></div>
    </div>
    ${rows}
    <div class="blk idx-ends">${ends.map(([id, t]) => `<div class="idx-sol"><span class="idx-sol-t">${t}</span><span class="idx-sol-p" data-ref="${id}"></span></div>`).join('')}</div>
  </div>${pnum()}</section>`;
}

function lvTag(kind, v) {
  const c = { 'Específico': 'sol', 'Sospecha': 'out', 'Completo': 'ok', 'Inicial': 'mid', 'Derivar': 'low', 'No requiere': 'nil' }[v] || 'low';
  return `<span class="lv lv-${c}"><i>${kind}</i>${esc(v)}</span>`;
}
function codeChips(t) {
  // la misma situación clínica aparece con varios códigos (uno por especialidad): un solo chip con todos los códigos
  const norm = n => String(n || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/rr/g, 'r').replace(/[^a-z0-9]+/g, ' ').trim();
  const groups = [];
  t.codeInfo.forEach(ci => {
    const k = `${norm(ci.name)}|${ci.dx}|${ci.tx}|${ci.seg}|${ci.nivel}`;
    const g = groups.find(x => x.k === k);
    if (g) g.codes.push(ci.code); else groups.push({ k, ci, codes: [ci.code] });
  });
  const MAXC = groups.length > 6 ? 5 : 6;
  const own = groups.slice(0, MAXC);
  const rest = groups.slice(MAXC).flatMap(g => g.codes);
  return `<div class="codes">${own.map(({ ci, codes }) => `<div class="chip"><span class="chip-c">${codes.map(c => `<span>${c}</span>`).join('')}</span><span class="chip-n">${esc(ci.name)}</span><span class="chip-l">${ci.dx || ci.tx || ci.seg ? `${lvTag('Dx', ci.dx || '—')}${lvTag('Tx', ci.tx || '—')}${lvTag('Seg', ci.seg || '—')}` : `<span class="lv lv-nil">${esc(ci.nivel || '—')}</span>`}</span></div>`).join('')}
    ${rest.length ? `<div class="chip chip-more"><span class="chip-n">+ ${rest.length} código${rest.length > 1 ? 's' : ''} relacionado${rest.length > 1 ? 's' : ''}: ${rest.map(c => `<span class="mono">${c}</span>`).join(' · ')}</span></div>` : ''}
    ${!t.codeInfo.length ? `<div class="chip chip-more"><span class="chip-n">Sin código Perfil V3 propio · tema de apoyo</span></div>` : ''}</div>`;
}
function askList(t) {
  return t.ask.map((k, i) => {
    let s = esc(k);
    const m = s.match(/^(.{4,62}?)(:|\s=\s|\s→\s)/);
    if (m && !/[(]/.test(m[1].replace(/\([^)]*\)/g, ''))) s = `<b>${m[1]}</b>${s.slice(m[1].length)}`;
    const full = boldNums(s);
    // versión condensada (primeras frases hasta ~190 caracteres) para temas densos de 1 página
    let short = '';
    if (k.length > 190) {
      const parts = k.split(/(?<=[.;])\s+(?=[A-ZÁÉÍÓÚ¿(0-9])/); let acc = parts[0];
      for (let j = 1; j < parts.length && (acc + ' ' + parts[j]).length <= 190; j++) acc += ' ' + parts[j];
      if (acc.length < k.length) { short = esc(acc.length > 230 ? acc.slice(0, 200).replace(/[\s,;:]+\S*$/, '') + '…' : acc.replace(/;$/, '.')); const m2 = short.match(/^(.{4,62}?)(:|\s=\s|\s→\s)/); if (m2 && !/[(]/.test(m2[1].replace(/\([^)]*\)/g, ''))) short = `<b>${m2[1]}</b>${short.slice(m2[1].length)}`; short = boldNums(short); }
    }
    return `<li data-i="${i}"${short ? ` data-s="${esc(short)}"` : ''}>${full}</li>`;
  }).join('');
}
function dtable(tb, cls = '') {
  if (!tb) return '';
  return `<table class="dtbl ${cls}"><thead><tr>${tb.headers.map(h => `<th>${esc(strip(h))}</th>`).join('')}</tr></thead>
    <tbody>${tb.rows.map((r, i) => `<tr${i % 2 ? ' class="alt"' : ''}>${r.map((v, j) => `<td${j === 0 ? ' class="c0"' : ''}>${md(v)}</td>`).join('')}</tr>`).join('')}</tbody></table>`;
}
function practice(t, x) {
  const name = x.lg.name || x.spec.title;
  if (!t.lgQ.length) return `<div class="prac"><span class="prac-k">Practica</span><span class="prac-t">Sin preguntas de este tema en el <b>Libro Gordo ${esc(name)}</b>: usa las preguntas de la clase (QR).</span></div>`;
  const qs = t.lgQ.map(r => r.n), pq = t.lgQ.map(r => r.q).filter(Boolean), ps = t.lgQ.map(r => r.s).filter(Boolean);
  return `<div class="prac"><span class="prac-k">Practica</span><span class="prac-t"><b>Libro Gordo ${esc(name)}</b>, pregunta${qs.length > 1 ? 's' : ''} <b class="nm">${ranges(qs)}</b>${pq.length ? ` (pág${new Set(pq).size > 1 ? 's' : ''}. ${ranges(pq)})` : ''}${ps.length ? ` · solucionario pág${new Set(ps).size > 1 ? 's' : ''}. ${ranges(ps)}` : ''}.</span></div>`;
}
function photoFig(p, x, cls = '') {
  if (!p || !x.img.get(p.src)) return '';
  const cap = strip(p.label || '');
  const cr = strip(p.credit || '').replace(/^Ilustración:\s*/i, '');
  if (/\.(svg|png)$/i.test(p.src)) cls += ' scheme';
  return `<figure class="pfig ${cls}"><img src="${x.img.get(p.src)}" alt=""><figcaption><b>${esc(cap)}</b>${cr ? `<span>${esc(cr)}</span>` : ''}</figcaption></figure>`;
}
function algoCard(t) {
  if (!t.algo) return '';
  const legend = t.algo.type === 'svg' ? '' : `<span class="lg"><i class="k-alert"></i>urgencia<i class="k-ok"></i>resuelve<i class="k-refer"></i>derivar<i class="k-do"></i>examen/acción</span>`;
  const body = t.algo.type === 'svg' ? `<div class="algo-svg">${t.algo.svg}</div>` : `<div class="algo-box" data-algo='${esc(JSON.stringify(t.algo))}'></div>`;
  return `<div class="card algo fx-algo"><div class="sh"><span>Algoritmo · ${esc(t.algo.title)}</span>${legend}</div>${body}</div>`;
}

function topicPages(t, x) {
  const tierTag = t.tier === 3 ? '<span class="tier">Tier 3</span>' : '';
  const head = `
    <header class="th">
      <div class="th-l">
        <div class="th-eye">Bloque ${CN(t.block)} · ${esc(t.blockName)} ${tierTag}</div>
        <h2><span class="th-n">${t.label}</span>${esc(t.title)}</h2>
        ${t.why ? `<p class="th-why fx-why">${esc(t.why)}</p>` : ''}
      </div>
      <div class="th-r">
        <div class="prio p${t.stars}"><span class="stars">${STARS(t.stars)}</span><span class="prio-t">${PRIO_TXT[t.stars]}</span><span class="prio-n">${t.real} pregunta${t.real === 1 ? '' : 's'} real${t.real === 1 ? '' : 'es'} 2013–2025</span></div>
        ${t.isGes ? `<div class="ges-pill"><b>GES</b>${esc(t.ges.replace(/^GES:\s*/i, '').replace(/^./, m => m.toUpperCase()))}</div>` : ''}
      </div>
    </header>
    ${codeChips(t)}`;
  const askCard = `<div class="card ask"><div class="sh acc"><span>Lo que te preguntan</span></div><ul class="ask-l">${askList(t)}</ul></div>`;
  const photo = photoFig(t.photo, x, 'fx-photo');
  const row1 = photo ? `<div class="row1">${askCard}<div class="side">${photo}</div></div>` : askCard;
  const tbl = t.table ? `<div class="card tbl fx-tbl"><div class="sh navy"><span>Tabla ${t.label} · ${esc(strip(t.table.title))}</span>${t.trapsSame ? `<span class="sh-pill">= tabla de Trampas EUNACOM de la clase ${esc(t.c.classId || '')}</span>` : ''}</div>${dtable(t.table)}</div>` : '';
  const tr = t.traps && t.traps.rows.length ? `<div class="card traps fx-traps"><div class="sh red"><span>Trampas EUNACOM${t.trapsSame ? ' · además de la tabla' : ''}</span><span class="sh-note">clase ${esc(t.c.classId || '')}</span></div>${dtable({ headers: t.traps.head, rows: t.traps.rows }, 'trap-t')}</div>` : '';
  const gold = t.gold ? `<div class="gold fx-gold"><span class="gold-k">Regla de oro</span><span class="gold-t"><b>${esc(t.gold.t)}</b>${t.gold.d ? ` — ${esc(t.gold.d)}` : ''}</span></div>` : '';
  const foot = `<footer class="pfoot">${practice(t, x)}<div class="qr"><div class="qr-svg">${qrSvg(t.url)}</div><div class="qr-t"><b>Clase ${t.label} en video</b><span>Escanea para verla</span><span class="qr-u">eunacom-examen.cl</span></div></div></footer>`;
  // continuación (solo se usa si el tema no cabe en 1 página): se rellena con lo que se mueve + extras
  const extras = `${t.contexto ? `<div class="card ctx fx-ctx"><div class="sh acc"><span>¿Por qué se pregunta?</span></div><p>${esc(t.contexto)}</p></div>` : ''}
    ${t.table2 ? `<div class="card tbl"><div class="sh navy"><span>Tabla ${t.label}.B · ${esc(strip(t.table2.title))}</span></div>${dtable(t.table2)}</div>` : ''}
    ${t.more.length ? `<div class="card fx-photo2"><div class="sh acc"><span>Así se ve · fotos de la clase</span></div><div class="pgal n${t.more.length}">${t.more.map(p => photoFig(p, x, 'gal')).join('')}</div></div>` : ''}`;
  return `<section class="page tp" data-id="${t.id}" data-tier="${t.tier}" data-label="${t.label}">${gbar(x, `Bloque ${CN(t.block)} · Tema ${t.label}`)}
      <div class="pbody">${head}${row1}${algoCard(t)}${tbl}${tr}${gold}</div>${foot}${pnum()}</section>
    <section class="page tp tp-cont" data-cont="${t.id}" style="display:none">${gbar(x, `Bloque ${CN(t.block)} · Tema ${t.label} (2/2)`)}
      <div class="pbody"><header class="th th-cont"><div class="th-l"><div class="th-eye">Bloque ${CN(t.block)} · ${esc(t.blockName)}</div><h2><span class="th-n">${t.label}</span><span>${esc(t.title)} <span class="cont">Continuación · tabla, trampas y regla de oro</span></span></h2></div>
      <div class="th-r"><div class="prio p${t.stars}"><span class="stars">${STARS(t.stars)}</span><span class="prio-t">${PRIO_TXT[t.stars]}</span></div></div></header>
      <div class="cont-slot"></div><div class="cont-extras">${extras}</div></div>${foot}${pnum()}</section>`;
}

function flowSection(x, id, title, lead, blocks) {
  return `<section class="page flow" data-id="${id}" data-title="${esc(strip(title))}">${gbar(x, title)}<div class="pbody">
    <div class="blk pg-lead"><h2>${title}</h2>${lead ? `<p class="pg-lead-p">${lead}</p>` : ''}<div class="rule"></div></div>${blocks}</div>${pnum()}</section>`;
}
function numbersSection(x) {
  const rows = extractNumbers(x.topics); x.stats.numbers = rows.length;
  const blocks = [...new Set(x.topics.map(t => t.block))];
  const body = `<div class="blk tblk"><table class="dtbl nums"><thead><tr><th>Dato</th><th class="w-k">Tipo</th></tr></thead><tbody>` + blocks.map(bn => {
    const rs = rows.filter(r => r.t.block === bn); if (!rs.length) return '';
    const ts = [...new Set(rs.map(r => r.t))];
    return `<tr class="grp"><td colspan="2">Bloque ${CN(bn)} · ${esc(rs[0].t.blockName)}</td></tr>
      ${ts.map(t => `<tr class="grp tg"><td colspan="2"><b>${t.label}</b> ${esc(t.title)} <span class="tg-p">pág. <span data-ref="${t.id}"></span></span></td></tr>` +
        rs.filter(r => r.t === t).map((r, i) => `<tr${i % 2 ? ' class="alt"' : ''}><td>${boldNums(esc(r.text))}</td><td class="w-k"><span class="kd kd-${norm(r.kind)}">${r.kind}</span></td></tr>`).join('')).join('')}`;
  }).join('') + `</tbody></table></div>`;
  return flowSection(x, 'NUM', 'Números que tienes que saber', `Cortes, dosis, tiempos y metas de los ${x.topics.length} temas, tal como aparecen en el libro y en las clases. Las cifras van en negrita.`, body);
}
function drugsSection(x) {
  const rows = extractDrugs(x.topics); x.stats.drugs = rows.length;
  const ts = [...new Set(rows.map(r => r.t))];
  const body = `<div class="blk tblk"><table class="dtbl drugs"><thead><tr><th class="w-s">Situación</th><th>Fármaco / esquema</th><th>Detalle</th></tr></thead><tbody>
    ${ts.map(t => `<tr class="grp tg"><td colspan="3"><b>${t.label}</b> ${esc(t.title)} <span class="tg-p">pág. <span data-ref="${t.id}"></span></span></td></tr>` +
      rows.filter(r => r.t === t).map((r, i) => `<tr${i % 2 ? ' class="alt"' : ''}><td class="w-s">${esc(r.sit)}</td><td class="do">${boldNums(esc(r.drug))}</td><td>${boldNums(esc(r.det))}</td></tr>`).join('')).join('')}
  </tbody></table></div>`;
  return { body };
}
function gesSection(x, noHead) {
  const g = x.topics.filter(t => t.isGes); x.stats.ges = g.length;
  const cap = s => s.charAt(0).toUpperCase() + s.slice(1);
  const head = (noHead ? `<div data-anchor="GES" style="height:0"></div>` : `<div class="blk pg-lead sub" data-anchor="GES"><h2>GES de ${esc(x.spec.title)}</h2><p class="pg-lead-p">Garantías Explícitas en Salud que aparecen en los temas de esta especialidad: el EUNACOM pregunta la edad, el examen y el plazo que garantizan.</p><div class="rule"></div></div>`);
  const body = `${head}
    ${g.reduce((acc, t, i) => { if (i % 2 === 0) acc.push([]); acc[acc.length - 1].push(t); return acc; }, []).map(pair => `<div class="blk ges-grid">${pair.map(t => `<div class="ges-card"><div class="ges-h"><span class="ges-b">GES</span><span class="ges-tt">${esc(cap(t.ges.replace(/^GES:\s*/i, '')))}</span></div>
      <div class="ges-d"><span>Tema <b>${t.label}</b> · ${esc(t.title)}</span><span class="mono">${t.codes.slice(0, 3).join(' · ')}</span><span class="ges-p" data-ref="${t.id}"></span></div></div>`).join('')}</div>`).join('')}
    <div class="blk ges-none"><b>Sin garantía GES específica</b> (${x.topics.length - g.length} temas): ${x.topics.filter(t => !t.isGes).map(t => t.label).join(' · ')}. Revisa igual la norma MINSAL que cita cada página.</div>`;
  return { body };
}
function planSection(x) {
  const ord = [...x.topics].sort((a, b) => b.stars - a.stars || b.real - a.real || a.i - b.i);
  const DAYS = 6, base = Math.floor(ord.length / DAYS), extra = ord.length % DAYS; let k = 0;
  const days = Array.from({ length: DAYS }, (_, d) => { const n = base + (d < extra ? 1 : 0); const r = ord.slice(k, k + n); k += n; return r; }).filter(d => d.length);
  const card = (n, ts, extra) => {
    const qs = ts.flatMap(t => t.lgQ.map(r => r.n));
    return `<div class="day${n === 7 ? ' d7' : ''}"><div class="day-h"><span class="day-n">Día ${n}</span><span class="day-s">${ts.length ? `${ts.length} temas · ${'★'.repeat(Math.max(...ts.map(t => t.stars)))}` : ''}</span></div>
      ${ts.length ? `<div class="day-l">${ts.map(t => `<div class="day-t"><span class="idx-st s${t.stars}">${STARS(t.stars)}</span><span><b>${t.label}</b> ${esc(t.title)}</span><span class="idx-dots"></span><span class="day-p" data-ref="${t.id}"></span></div>`).join('')}</div>` : ''}
      ${extra || ''}
      ${qs.length ? `<div class="day-q"><b>Practica:</b> Libro Gordo ${esc(x.lg.name)}, preguntas ${ranges(qs)}.</div>` : ''}</div>`;
  };
  const top = x.topics.filter(t => t.stars === 3).map(t => t.label).join(' · ');
  const body = `<div class="blk plan-lead">Los temas van de mayor a menor prioridad (<span class="s3">★</span> según preguntas reales EUNACOM 2013–2025). Cada día: lee la página del tema, recorre su algoritmo y haz sus preguntas del Libro Gordo; corrige con el solucionario.</div>
    ${days.map((ts, d) => card(d + 1, ts)).reduce((a, c, i) => { if (i % 2 === 0) a.push([]); a[a.length - 1].push(c); return a; }, []).map(pair => `<div class="blk days">${pair.join('')}</div>`).join('')}
    <div class="blk days">${card(7, [], `<div class="day-l day-7"><div>▸ Relee «<b>Números que tienes que saber</b>»${x.noDrugs ? '' : ' y «<b>Fármacos de primera línea</b>»'} <span class="day-p" data-ref="NUM"></span></div>
      <div>▸ Repasa solo las <b>Trampas EUNACOM</b> y la <b>Regla de oro</b> de los temas <span class="s3">★★★</span>: ${top}</div>
      <div>▸ Simulacro: las <b>${x.lg.total || 90} preguntas</b> del Libro Gordo ${esc(x.lg.name)} en ${Math.round((x.lg.total || 90) * 1.33)} minutos; vuelve a la página de cada tema que falles.</div></div>`)}</div>`;
  return flowSection(x, 'PLAN', 'Plan de repaso de 7 días', '', body);
}
function prioSection(x) {
  const body = [3, 2, 1].map(s => {
    const ts = x.topics.filter(t => t.stars === s).sort((a, b) => b.real - a.real || a.i - b.i); if (!ts.length) return '';
    return `<div class="blk idx-chap"><div class="idx-chap-head"><span class="idx-cn s${s}">${'★'.repeat(s)}</span><span class="idx-ct">${PRIO_TXT[s]} · ${ts.length} temas</span></div>
      <div class="idx-topics">${ts.map(t => `<div class="idx-t"><span class="idx-real">${t.real}</span><span class="idx-tt">${t.label}. ${esc(t.title)}${t.isGes ? ' <span class="ges-mini">GES</span>' : ''}</span><span class="idx-dots"></span><span class="idx-tp" data-ref="${t.id}"></span></div>`).join('')}</div></div>`;
  }).join('');
  return flowSection(x, 'PRIO', 'Índice por prioridad <span style="color:#d97706">★</span>', 'El número a la izquierda es la cantidad de preguntas reales (EUNACOM 2013–2025) en los códigos Perfil V3 del tema.', body);
}

function buildHtml(x) {
  x.noDrugs = extractDrugs(x.topics).length === 0;
  const t = BB.themeVars(x.spec.accent);
  const body = [coverPage(x), indexPage(x), ...x.topics.map(tp => topicPages(tp, x)), numbersSection(x), (x.noDrugs ? flowSection(x, 'DRUG', 'GES de ' + esc(x.spec.title), 'Garantías Explícitas en Salud que aparecen en los temas de esta especialidad: el EUNACOM pregunta la edad, el examen y el plazo que garantizan.', gesSection(x, true).body) : flowSection(x, 'DRUG', 'Fármacos de primera línea', 'Esquemas de elección por enfermedad, tomados de las tarjetas de tratamiento de cada clase. Al final de la sección, las garantías GES.', drugsSection(x).body + gesSection(x).body)), planSection(x), prioSection(x)].join('\n');
  return `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>Repaso de última hora · ${esc(x.spec.title)}</title>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800;900&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@500;700&family=JetBrains+Mono:wght@400;500;700;800&display=swap" rel="stylesheet">
<style>${CSS(t)}</style></head><body>${body}<script>${PAGE_JS}</script></body></html>`;
}

/* ───────────────────────────── CSS ───────────────────────────── */
const CSS = t => `
:root{--acc:${t.acc};--acc-d:${t.accD};--acc-dp:${t.accDp};--acc-t:${t.accT};--acc-p:${t.accP};--acc-l:${t.accL};--acc-ink:${t.accInk};--navy:#1e3a8a;--red:#b91c1c}
*{box-sizing:border-box;margin:0;padding:0}
@page{size:A4;margin:0}
html{-webkit-print-color-adjust:exact;print-color-adjust:exact;width:210mm;overflow-x:hidden}
body{width:210mm;overflow-x:hidden;font-family:'IBM Plex Sans',system-ui,sans-serif;color:#15181d;font-size:12px;line-height:1.42;background:#fff}
.page{position:relative;width:210mm;height:297mm;overflow:hidden;contain:paint;break-after:page;page-break-after:always;background:#fff}
.page:last-child{break-after:auto;page-break-after:auto}
.gbar{height:22px;background:var(--acc);display:flex;align-items:center;justify-content:center;font:700 8.5px/1 'IBM Plex Sans',sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#fff7ed}
.pbody{position:absolute;top:22px;left:0;right:0;bottom:30px;padding:16px 34px 0;overflow:hidden}
.tp .pbody{bottom:84px}
.pnum{position:absolute;bottom:9px;left:0;right:0;text-align:center;font:600 9px/1 'IBM Plex Sans',sans-serif;color:#9aa3af}
.mono{font-family:'JetBrains Mono',monospace}
.rule{height:3px;background:var(--acc);margin-top:8px}
.pg-lead h2{font:700 25px/1.15 'Spectral','IBM Plex Sans',serif;letter-spacing:-.01em}
.pg-lead{margin-bottom:10px}
.pg-lead-p{font:400 11.5px/1.5 'IBM Plex Sans',sans-serif;color:#475569;max-width:680px;margin-top:5px}

/* PORTADA (misma que los tomos) */
.cover-aee{background:#0b1420}
.o1 .cover-bg{filter:grayscale(.4) brightness(.45) contrast(1.1)}
.o1 .cover-veil{background:linear-gradient(180deg,rgba(11,20,32,.85) 0%,rgba(11,20,32,.5) 35%,rgba(11,20,32,.92) 75%,rgba(11,20,32,.98) 100%)}
.o1 .cover-stripe{background:var(--a)}
.o1-w{position:absolute;inset:0;padding:56px 60px 56px 72px;display:flex;flex-direction:column;color:#fff}
.o1-top{display:flex;justify-content:space-between;align-items:flex-start}.o1-top .cover-logo svg{height:96px;margin-left:-38px}
.o1-ed{font:700 11px/1 'IBM Plex Mono',monospace;letter-spacing:.14em;color:var(--a);border:1px solid var(--a);padding:7px 11px;background:rgba(8,13,20,.6)}
.o1-t0{font:600 22px/1 'IBM Plex Sans',sans-serif;color:#c6d0dd;margin-top:46px}
.o1-t1{font:900 104px/.86 'Barlow Condensed',sans-serif;text-transform:uppercase;letter-spacing:-.02em;margin-top:6px;color:#fff}
.o1-bar{height:6px;width:140px;background:var(--a);margin:22px 0 18px}
.o1-big{font:800 46px/1 'Barlow Condensed',sans-serif;color:var(--a)}.o1-bl{font:600 18px/1.3 'IBM Plex Sans',sans-serif}
.o1-sub{font:500 18px/1.3 'IBM Plex Sans',sans-serif;color:#c6d0dd;margin-top:6px}.o1-sm{font-size:14px;color:#aab6c6}
.o1-bot{margin-top:auto;border-top:1px solid rgba(255,255,255,.35);padding-top:14px;display:flex;justify-content:space-between;font:600 11px/1 'IBM Plex Mono',monospace;letter-spacing:.12em;color:#b6c1d0;text-transform:uppercase}
.cover-bg{position:absolute;inset:0;background-size:cover;background-position:center}
.cover-veil{position:absolute;inset:0}
.cover-stripe{position:absolute;left:0;top:0;width:14px;height:100%}
.cover-content{position:absolute;inset:0;padding:64px 68px 64px 76px;display:flex;flex-direction:column;justify-content:space-between}
.cover-top-row{display:flex;justify-content:space-between;align-items:flex-start}
.cover-logo svg{height:111px;width:auto;display:block;margin-left:-43px}
.cover-badge{display:flex;flex-direction:column;align-items:flex-end;gap:7px}
.cover-badge .ed{font:800 18px/1 'JetBrains Mono',monospace;letter-spacing:.12em;color:#0bd9e7}
.cover-badge .subed{font:700 13px/1 'JetBrains Mono',monospace;letter-spacing:.1em;color:#e2e8f0}
.cover-bottom-box{display:flex;flex-direction:column;gap:18px}
.cover-chip{display:inline-flex;align-self:flex-start;padding:6px 14px;border-radius:2px}
.cover-chip span{font:700 12.5px/1 'IBM Plex Mono',monospace;letter-spacing:.16em;color:#fff}
.cover-title-group{display:flex;flex-direction:column;gap:2px}
.repaso-kicker{font:700 30px/1.05 'Barlow Condensed',sans-serif;letter-spacing:.01em;text-transform:uppercase}
.cover-title-group .main-title{font:900 58px/.95 'Barlow Condensed',sans-serif;text-transform:uppercase;color:#fff;letter-spacing:-.02em;margin:4px 0}
.cover-title-group .sub-title{font:600 22px/1.2 'IBM Plex Sans',sans-serif;color:#fff}
.cover-facts{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.16)}
.cover-facts>div{background:rgba(11,20,32,.78);padding:10px 12px;display:flex;flex-direction:column;gap:4px}
.cover-facts .n{font:700 30px/1 'Barlow Condensed',sans-serif;color:var(--acc-l)}
.cover-facts .t{font:500 10px/1.3 'IBM Plex Sans',sans-serif;letter-spacing:.04em;text-transform:uppercase;color:#cbd5e1}
.cover-divider{height:1.5px;background:rgba(255,255,255,.38)}
.cover-footer-row .foot-left{font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.08em;color:#b6c1d0}

/* ÍNDICE */
.howto{border-left:3px solid var(--acc);background:var(--acc-t);padding:8px 12px;font:400 11px/1.5 'IBM Plex Sans',sans-serif;color:#334155;display:flex;flex-direction:column;gap:4px;margin-bottom:4px}
.howto-leg{display:flex;flex-direction:column;gap:1px;font-size:10.5px;color:#475569}
.idx-chap{margin-top:12px}
.idx-chap-head{display:flex;align-items:baseline;gap:12px}
.idx-cn{font:700 24px/1 'Barlow Condensed',sans-serif;color:var(--acc);min-width:34px;flex:none}
.idx-ct{flex:1;font:700 13px/1.3 'IBM Plex Sans',sans-serif}
.idx-topics{display:flex;flex-direction:column;gap:1px;padding-left:46px;margin-top:3px}
.idx-t{display:flex;align-items:baseline;gap:8px;font:400 11.5px/1.5 'IBM Plex Sans',sans-serif}
.idx-st{flex:none;width:40px;font-size:11px;letter-spacing:.02em;color:#d97706}
.st-off{color:#e2e8f0}
.s3{color:#d97706}.s2{color:#d97706}.s1{color:#d97706}
.idx-real{flex:none;width:22px;text-align:right;font:700 11px/1 'JetBrains Mono',monospace;color:var(--acc-d)}
.idx-dots{flex:1;border-bottom:1px dotted #cbd5e1;position:relative;top:-3px;min-width:16px}
.idx-tp,.day-p,.ges-p{font:700 11px/1 'JetBrains Mono',monospace;color:var(--navy)}
.ges-mini{font:700 8.5px/1 'IBM Plex Sans',sans-serif;letter-spacing:.06em;color:#fff;background:var(--navy);padding:2px 4px;border-radius:2px;vertical-align:1px}
.idx-ends{margin-top:16px;display:flex;flex-direction:column;gap:4px}
.idx-sol{display:flex;align-items:baseline;gap:12px;background:#f1f5f9;padding:6px 12px;border-left:3px solid var(--acc)}
.idx-sol-t{flex:1;font:700 12px/1.3 'IBM Plex Sans',sans-serif}
.idx-sol-p{font:700 12px/1 'JetBrains Mono',monospace;color:var(--acc-dp)}

/* PÁGINA DE TEMA */
.th{display:flex;justify-content:space-between;gap:16px;align-items:flex-start}
.th-l{flex:1;min-width:0}
.th-eye{font:600 9.5px/1.3 'IBM Plex Sans',sans-serif;letter-spacing:.16em;text-transform:uppercase;color:var(--acc-d)}
.tier{font:700 8.5px/1 'JetBrains Mono',monospace;letter-spacing:.04em;color:#fff;background:#475569;padding:2px 5px;border-radius:2px;margin-left:6px;vertical-align:1px}
.th h2{font:700 21px/1.15 'IBM Plex Sans',sans-serif;letter-spacing:-.02em;margin-top:3px;display:flex;gap:10px;align-items:baseline}
.th-n{font:800 30px/.9 'Barlow Condensed',sans-serif;color:var(--acc);letter-spacing:-.01em;flex:none}
.th h2 .cont{display:block;font:600 10px/1.4 'IBM Plex Sans',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:#64748b;margin-top:2px}
.th-why{margin-top:4px;font:italic 400 11px/1.4 'IBM Plex Sans',sans-serif;color:#475569}
.th-r{display:flex;flex-direction:column;gap:6px;align-items:flex-end;flex:none;max-width:250px}
.prio{display:flex;flex-direction:column;align-items:flex-end;gap:2px;border:1px solid #e2e8f0;border-right:4px solid #d97706;padding:5px 9px 5px 12px;background:#fffbeb}
.prio .stars{font-size:19px;line-height:1;color:#d97706;letter-spacing:.04em}
.prio .st-off{color:#f3e2c0}
.prio-t{font:700 9.5px/1.1 'IBM Plex Sans',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#92400e}
.prio-n{font:500 9.5px/1.1 'IBM Plex Sans',sans-serif;color:#78716c}
.prio.p1{border-right-color:#cbd5e1;background:#f8fafc}.prio.p1 .prio-t{color:#475569}
.ges-pill{display:flex;gap:6px;align-items:baseline;font:500 9.5px/1.3 'IBM Plex Sans',sans-serif;color:var(--navy);background:#eff6ff;border:1px solid #bfdbfe;padding:4px 7px;max-width:250px;text-align:right}
.ges-pill b{font-weight:700;color:#fff;background:var(--navy);padding:1px 4px;border-radius:2px;flex:none}
.codes{display:grid;grid-template-columns:1fr 1fr;gap:4px 6px;margin-top:9px}
.chip{display:flex;align-items:center;gap:6px;border:1px solid var(--acc-p);background:#fff;border-radius:3px;padding:3px 5px 3px 0;overflow:hidden;min-width:0}
.chip .chip-n{flex:1;min-width:0;max-width:none}
.chip-c{font:700 9.5px/1 'JetBrains Mono',monospace;color:#fff;background:var(--acc-d);align-self:stretch;display:flex;flex-direction:column;justify-content:center;gap:3px;padding:3px 6px}
.chip-n{font:600 9.5px/1.15 'IBM Plex Sans',sans-serif;color:#1e293b}
.chip-l{display:flex;gap:2px;flex-shrink:0}
.chip-more{padding:3px 8px;background:#f8fafc;border-color:#e2e8f0}.chip-more .chip-n{max-width:none;font-weight:500;color:#475569;white-space:normal;line-height:1.35;overflow:visible}
.lv{font:600 8.5px/1 'IBM Plex Sans',sans-serif;padding:3px 4px;border-radius:2px;white-space:nowrap}
.lv i{font-style:normal;font-weight:700;opacity:.7;margin-right:2px}
.lv-sol{background:var(--acc);color:#fff}.lv-out{background:#fde68a;color:#78350f}.lv-ok{background:var(--acc-t);color:var(--acc-dp);box-shadow:inset 0 0 0 1px var(--acc-p)}
.lv-mid{background:#fef3c7;color:#78350f}.lv-low{background:#e2e8f0;color:#1e293b}.lv-nil{background:#f1f5f9;color:#64748b}
.card{border:1px solid #cbd5e1;margin-top:10px;break-inside:avoid;background:#fff}
.sh{display:flex;justify-content:space-between;align-items:center;gap:10px;padding:5px 10px;font:700 10px/1.25 'IBM Plex Sans',sans-serif;letter-spacing:.08em;text-transform:uppercase;background:#f1f5f9;color:var(--navy);border-bottom:1px solid #cbd5e1}
.sh.acc{background:var(--acc-t);color:var(--acc-dp);border-bottom-color:var(--acc-p)}
.sh.navy{background:var(--navy);color:#fff;border-bottom:none}
.sh.red{background:#7f1d1d;color:#fff;border-bottom:none}
.sh-pill{flex:none;font:700 8.5px/1 'IBM Plex Sans',sans-serif;letter-spacing:.06em;color:#fff;background:#7f1d1d;padding:3px 6px;border-radius:2px}
.sh-note{font:500 9px/1 'JetBrains Mono',monospace;letter-spacing:0;text-transform:none;opacity:.75}
.nophoto .row1{display:block}.nophoto .row1 .side{display:none}
.row1{display:grid;grid-template-columns:1fr 220px;gap:12px;align-items:stretch}
.row1 .card{margin-top:10px}
.side{margin-top:10px;display:flex;flex-direction:column;gap:8px}
.ask{border-top:3px solid var(--acc)}
.ask-l{list-style:none;padding:6px 12px 7px}
.ask-l li{position:relative;padding:2.5px 0 2.5px 15px;font:400 12px/1.4 'IBM Plex Sans',sans-serif;color:#0f172a}
.ask-l li+li{border-top:1px solid #f1f5f9}
.ask-l li::before{content:'▸';position:absolute;left:0;top:2px;color:var(--acc);font-size:11px}
.ask-l b{font-weight:700;color:#0f172a}
b.nm{font-weight:700;color:var(--navy)}
.pfig{display:flex;flex-direction:column;gap:3px;margin:0}
.pfig img{display:block;width:100%;height:auto;max-height:var(--ph,170px);object-fit:cover;border:1px solid #e2e8f0;border-radius:3px}
.side .pfig{flex:1;min-height:0}
.side .pfig img{flex:1 1 0;min-height:110px;max-height:none;height:0}
.side .pfig.scheme img{object-fit:contain;background:#fff}
.pfig figcaption{font:400 9px/1.3 'IBM Plex Sans',sans-serif;color:#64748b;display:flex;flex-direction:column}
.pfig figcaption b{font:700 9.5px/1.3 'IBM Plex Sans',sans-serif;color:#334155;letter-spacing:.02em;text-transform:uppercase}
.pfig.wide img{max-height:300px;object-fit:contain;width:auto;max-width:100%;margin:0 auto}
.pfig.wide figcaption{text-align:center;align-items:center}
.algo .sh .lg{display:flex;align-items:center;gap:4px;font:500 9px/1 'IBM Plex Sans',sans-serif;letter-spacing:.02em;text-transform:none;color:#475569}
.algo .sh .lg i{display:inline-block;width:10px;height:10px;border-radius:2px;margin-left:7px;border:1.5px solid}
.algo-box{position:relative;padding:8px 6px 6px;display:flex;justify-content:center;overflow:hidden}
.algo-svg{padding:6px 8px;display:flex;justify-content:center}
.algo-svg svg{width:100%!important;height:auto!important;max-height:var(--mh,330px);display:block}
.tcanvas{position:relative}
.tcanvas svg.edges{position:absolute;left:0;top:0;overflow:visible}
.tn{position:absolute;border:1.5px solid #94a3b8;border-radius:5px;background:#fff;padding:4px 7px;text-align:center}
.tn .t{display:block;font:700 11.5px/1.22 'IBM Plex Sans',sans-serif;color:#0f172a}
.tn .s{display:block;font:400 10px/1.25 'IBM Plex Sans',sans-serif;color:#475569;margin-top:1px}
.k-start{background:var(--acc-d)!important;border-color:var(--acc-d)!important}.tn.k-start .t,.tn.k-start .s{color:#fff}
.k-q{background:#fff!important;border-color:var(--acc)!important;border-style:solid}.tn.k-q{border-width:2px;border-radius:14px}
.k-do,.k-mech,.k-cause{background:#eff6ff!important;border-color:#3b5bb5!important}
.k-ok,.k-good,.k-effect{background:#ecfdf5!important;border-color:#15803d!important}
.k-refer,.k-key{background:#f5f3ff!important;border-color:#7c3aed!important}
.k-alert,.k-risk,.k-trap{background:#fef2f2!important;border-color:#dc2626!important}
.el.tab{transform:translate(0,-50%)}
.el{position:absolute;transform:translate(-50%,-50%);font:700 9.5px/1 'IBM Plex Sans',sans-serif;letter-spacing:.03em;color:#334155;background:#fff;border:1px solid #cbd5e1;border-radius:8px;padding:2px 5px;white-space:normal;max-width:128px;text-align:center;line-height:1.1}
.dtbl{width:100%;border-collapse:collapse;font-size:11px;table-layout:auto}
.dtbl th{text-align:left;padding:4px 8px;font:700 9.5px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:.05em;text-transform:uppercase;color:var(--navy);background:#e2e8f0}
.dtbl td{padding:3.5px 8px;border-bottom:1px solid #eef2f6;vertical-align:top;line-height:1.33}
.dtbl td.c0{font-weight:600;color:#0f172a}
.dtbl tr.alt td{background:#f6f8fb}
.dtbl.trap-t th{background:#fee2e2;color:#7f1d1d}
.dtbl.trap-t td:last-child{color:#991b1b}
.dtbl.trap-t tr.alt td{background:#fef7f7}
.tight2 .dtbl{font-size:10px}.tight2 .dtbl td{padding:2px 6px;line-height:1.25}.tight2 .dtbl th{padding:3px 6px}.tight2 .ask-l li{font-size:11.2px;line-height:1.32}.tight .dtbl{font-size:10.5px}.tight .dtbl td{padding:2.5px 7px;line-height:1.28}.tight .ask-l li{padding:1.5px 0 1.5px 15px}.tight .card{margin-top:8px}
.gold{margin-top:10px;display:flex;align-items:stretch;border:1px solid #f59e0b;background:#fffbeb}
.gold-k{flex:none;display:flex;align-items:center;padding:0 10px;background:#f59e0b;color:#fff;font:700 10px/1 'IBM Plex Sans',sans-serif;letter-spacing:.12em;text-transform:uppercase}
.gold-t{padding:6px 11px;font:400 12.5px/1.35 'IBM Plex Sans',sans-serif;color:#451a03}
.gold-t b{font-weight:700}
.pfoot{position:absolute;left:34px;right:34px;bottom:24px;height:56px;display:flex;align-items:center;gap:14px;border-top:2px solid var(--acc);padding-top:6px}
.prac{flex:1;display:flex;gap:10px;align-items:center}
.prac-k{flex:none;font:700 9.5px/1 'IBM Plex Sans',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:#fff;background:var(--acc);padding:5px 8px;border-radius:2px}
.prac-t{font:400 11px/1.4 'IBM Plex Sans',sans-serif;color:#1e293b}
.qr{flex:none;display:flex;gap:8px;align-items:center}
.qr-svg svg{width:50px;height:50px;display:block}
.qr-miss{width:50px;height:50px;border:1px dashed #94a3b8;display:flex;align-items:center;justify-content:center;font:700 10px 'JetBrains Mono',monospace;color:#94a3b8}
.qr-t{display:flex;flex-direction:column;gap:1px;font:400 9.5px/1.25 'IBM Plex Sans',sans-serif;color:#475569}
.qr-t b{font-weight:700;color:#0f172a;font-size:10px}
.qr-u{font:500 9px/1.2 'JetBrains Mono',monospace;color:var(--acc-d)}
.ctx p{padding:8px 12px;font:400 11.5px/1.5 'IBM Plex Sans',sans-serif;color:#334155}
.pg-cont h2{font-size:17px}.pg-cont h2 span{font-weight:400;color:#64748b}.cont-s{font-weight:400;opacity:.75}
.pgal{display:flex;gap:10px;padding:10px;justify-content:center;align-items:flex-start}
.pgal .pfig{flex:1;min-width:0;max-width:300px}
.pgal .pfig img{height:190px;max-height:none;object-fit:cover}
.pgal .pfig.scheme img{object-fit:contain}
.pgal.n1 .pfig{max-width:420px}.pgal.n1 .pfig img{height:280px;object-fit:contain}

/* SECCIONES FINALES */
.tblk{margin-top:8px}
.dtbl.nums td,.dtbl.drugs td{font-size:10.8px}
.dtbl .w-t{width:150px;color:#334155;font-size:10px}
.dtbl.nums td.w-t,.dtbl.drugs td.w-t{font-size:10px;line-height:1.3}
.dtbl .w-k{width:58px;text-align:center}
.dtbl .w-s{width:170px;color:#475569;font-size:10.3px}
.dtbl tr.grp.tg td{background:#f8fafc;color:#0f172a;font:600 10.5px/1.25 'IBM Plex Sans',sans-serif;letter-spacing:0;text-transform:none;border-bottom:1px solid #e2e8f0;border-top:1px solid #e2e8f0;padding:4px 8px}
.dtbl tr.grp.tg td b{color:var(--acc-d);margin-right:4px}
.tg-p{float:right;font:500 9.5px/1.25 'IBM Plex Sans',sans-serif;color:#64748b}.tg-p span{font-family:'JetBrains Mono',monospace;font-weight:700;color:var(--navy)}
.dtbl td.do{font-weight:600;color:#0f172a}
.dtbl tr.grp td{background:var(--acc-t);color:var(--acc-dp);font:700 10px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:.08em;text-transform:uppercase;border-bottom:1px solid var(--acc-p);padding:5px 8px}
.kd{display:inline-block;font:700 8.5px/1 'IBM Plex Sans',sans-serif;letter-spacing:.05em;text-transform:uppercase;padding:3px 5px;border-radius:2px}
.kd-corte{background:#e0e7ff;color:#1e3a8a}.kd-dosis{background:#dcfce7;color:#14532d}.kd-tiempo{background:#fef3c7;color:#78350f}.kd-meta{background:#fce7f3;color:#831843}
.pg-lead.sub{margin-top:22px}.pg-lead.sub h2{font-size:21px}
.ges-grid{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:10px}
.ges-card{border:1px solid #bfdbfe;border-left:4px solid var(--navy);background:#fff}
.ges-h{display:flex;gap:8px;align-items:flex-start;padding:9px 11px;background:#eff6ff}
.ges-b{flex:none;font:700 10px/1 'IBM Plex Sans',sans-serif;color:#fff;background:var(--navy);padding:3px 5px;border-radius:2px}
.ges-tt{font:600 12.5px/1.35 'IBM Plex Sans',sans-serif;color:#0f172a}
.ges-d{display:flex;flex-direction:column;gap:2px;padding:7px 11px;font:400 10.5px/1.35 'IBM Plex Sans',sans-serif;color:#475569}
.ges-d .mono{font-size:9.5px;color:var(--acc-d)}
.ges-d .ges-p::before{content:'pág. ';font-family:'IBM Plex Sans',sans-serif;font-weight:400;color:#64748b}
.ges-none{margin-top:12px;font:400 11px/1.5 'IBM Plex Sans',sans-serif;color:#475569;background:#f8fafc;border:1px solid #e2e8f0;padding:8px 12px}
.plan-lead{font:400 11.5px/1.5 'IBM Plex Sans',sans-serif;color:#475569;margin-bottom:6px}
.days{display:flex;flex-direction:column;gap:0}
.days{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:4px}
.day{border:1px solid #cbd5e1;border-left:4px solid var(--acc);display:flex;flex-direction:column}
.day .day-q{margin-top:auto}
.day.d7{grid-column:1/-1;border-left-color:#0f172a}.day.d7 .day-h{background:#0f172a;border-bottom:none}.day.d7 .day-n{color:#fff}
.day-h{display:flex;justify-content:space-between;align-items:baseline;padding:5px 11px;background:var(--acc-t);border-bottom:1px solid var(--acc-p)}
.day-n{font:700 19px/1 'Barlow Condensed',sans-serif;color:var(--acc-dp);letter-spacing:.02em;text-transform:uppercase}
.day-s{font:600 10px/1 'IBM Plex Sans',sans-serif;color:#92400e;letter-spacing:.05em}
.day-l{padding:4px 11px;display:flex;flex-direction:column;gap:0}
.day-t{display:flex;align-items:baseline;gap:6px;font:400 11px/1.4 'IBM Plex Sans',sans-serif;padding:1.5px 0}
.day-t .idx-st{width:30px;font-size:10px}
.day-7 div{font:400 11.5px/1.5 'IBM Plex Sans',sans-serif}
.day-7 .day-p::before{content:'pág. ';font-family:'IBM Plex Sans',sans-serif;font-weight:400;color:#64748b}
.day-q{padding:4px 11px 6px;font:400 10.5px/1.4 'IBM Plex Sans',sans-serif;color:#334155;border-top:1px dashed #e2e8f0}
`;

/* ───────────────────────────── JS en la página: algoritmos, ajuste y paginación ───────────────────────────── */
const PAGE_JS = String.raw`
(function(){
const REPORT = { topics: {}, warnings: [] };
const over = el => el.scrollHeight > el.clientHeight + 1;

/* ── árbol de decisión (TD o LR, el que quede más grande) ── */
function drawTree(box, algo, maxW, maxH){
  box.innerHTML = '';
  const nodes = []; const walk = (n, d, parent, label) => { const o = { n, d, parent, label, kids: [] }; nodes.push(o); if (parent) parent.kids.push(o); (n.kids||[]).forEach(([l,c]) => walk(c, d+1, o, l)); return o; };
  const root = walk(algo.root, 0, null, '');
  const D = Math.max(...nodes.map(o => o.d)) + 1, Lf = nodes.filter(o => !o.kids.length).length;
  function build(W){
    const cv = document.createElement('div'); cv.className = 'tcanvas'; box.appendChild(cv);
    nodes.forEach(o => { const e = document.createElement('div'); e.className = 'tn k-' + (o.n.k||'do'); e.style.width = W + 'px';
      e.innerHTML = '<span class="t"></span>' + (o.n.s ? '<span class="s"></span>' : ''); e.querySelector('.t').textContent = o.n.t; if (o.n.s) e.querySelector('.s').textContent = o.n.s;
      cv.appendChild(e); o.el = e; o.w = W; o.h = e.offsetHeight; });
    return cv;
  }
  function layoutTD(){
    const gx = 12, gy = 30;
    const W = Math.max(118, Math.min(176, (maxW - (Lf-1)*gx) / Lf));
    const cv = build(W);
    const rowH = Array(D).fill(0); nodes.forEach(o => rowH[o.d] = Math.max(rowH[o.d], o.h));
    const y = []; let acc = 0; for (let d = 0; d < D; d++){ y[d] = acc; acc += rowH[d] + gy; }
    let leaf = 0; const place = o => { if (!o.kids.length){ o.x = leaf++ * (W+gx); } else { o.kids.forEach(place); o.x = (o.kids[0].x + o.kids[o.kids.length-1].x)/2; } o.y = y[o.d] + (rowH[o.d]-o.h)/2; };
    place(root);
    const w = Lf*W + (Lf-1)*gx, h = acc - gy;
    let paths = '', labels = '';
    nodes.forEach(o => o.kids.forEach(k => { const x1 = o.x + W/2, y1 = o.y + o.h, x2 = k.x + W/2, y2 = k.y, my = y[k.d] - gy/2 - 2;
      paths += '<path d="M'+x1+','+y1+' V'+my+' H'+x2+' V'+y2+'"/>';
      if (k.label) labels += '<span class="el" style="left:'+x2+'px;top:'+(y[k.d]-gy/2+7)+'px">'+k.label+'</span>'; }));
    return finish(cv, w, h, paths, labels);
  }
  // ancho máximo de las etiquetas de flecha (SÍ/NO/…): define el espacio entre columnas en LR
  const probe = document.createElement('span'); probe.className = 'el'; probe.style.position = 'static'; probe.style.transform = 'none'; box.appendChild(probe);
  let labW = 0; nodes.forEach(o => { if (o.label){ probe.textContent = o.label; labW = Math.max(labW, probe.offsetWidth); } }); probe.remove();
  function layoutLR(){
    const gx = 30, gy = labW ? 17 : 9; // la etiqueta va como pestaña sobre el borde superior del nodo hijo
    const W = Math.max(112, Math.min(168, (maxW - (D-1)*gx) / D));
    const cv = build(W);
    let cur = 0; const place = o => { o.x = o.d*(W+gx);
      if (!o.kids.length){ o.y = cur; cur += o.h + gy; return; }
      o.kids.forEach(place); const c = (o.kids[0].y + o.kids[0].h/2 + o.kids[o.kids.length-1].y + o.kids[o.kids.length-1].h/2)/2; o.y = c - o.h/2; };
    place(root);
    const minY = Math.min(...nodes.map(o => o.y)); nodes.forEach(o => o.y -= minY);
    const w = D*W + (D-1)*gx, h = Math.max(...nodes.map(o => o.y + o.h));
    let paths = '', labels = '';
    nodes.forEach(o => o.kids.forEach(k => { const x1 = o.x + W, y1 = o.y + o.h/2, x2 = k.x, y2 = k.y + k.h/2, mx = x1 + 6;
      paths += '<path d="M'+x1+','+y1+' H'+mx+' V'+y2+' H'+x2+'"/>';
      if (k.label) labels += '<span class="el tab" style="left:'+(x2 + 8)+'px;top:'+(k.y - 1)+'px">'+k.label+'</span>'; }));
    return finish(cv, w, h, paths, labels);
  }
  function finish(cv, w, h, paths, labels){
    nodes.forEach(o => { o.el.style.left = o.x + 'px'; o.el.style.top = o.y + 'px'; });
    cv.insertAdjacentHTML('afterbegin', '<svg class="edges" width="'+w+'" height="'+h+'"><defs><marker id="ah" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#64748b"/></marker></defs><g fill="none" stroke="#64748b" stroke-width="1.4" marker-end="url(#ah)">'+paths+'</g></svg>');
    cv.insertAdjacentHTML('beforeend', labels);
    cv.style.width = w + 'px'; cv.style.height = h + 'px';
    const s = Math.min(1, maxW / w, maxH / h);
    return { cv, w, h, s };
  }
  const td = layoutTD(); const tdHtml = box.innerHTML; box.innerHTML = '';
  const lr = layoutLR();
  let best = lr;
  if (td.s >= lr.s * 0.92){ box.innerHTML = tdHtml; best = { cv: box.querySelector('.tcanvas'), w: td.w, h: td.h, s: td.s, o: 'td' }; } else best.o = 'lr';
  best.cv.style.zoom = best.s;
  box.style.height = (best.h * best.s + 14) + 'px';
  best.cv.style.marginLeft = 0;
  box.style.justifyContent = 'center';
  const wrap = document.createElement('div'); wrap.style.width = (best.w*best.s)+'px'; wrap.style.height = (best.h*best.s)+'px'; wrap.style.position = 'relative'; wrap.style.overflow = 'clip'; wrap.style.overflowClipMargin = '10px';
  best.cv.parentNode.insertBefore(wrap, best.cv); wrap.appendChild(best.cv);
  return { scale: +best.s.toFixed(2), orient: best.o };
}
/* ── flujo de la clase (nodos con col/row) ── */
function drawFlow(box, algo, maxW, maxH){
  box.innerHTML = '';
  const cols = Math.max(...algo.nodes.map(n => n.col)) + 1, rows = Math.max(...algo.nodes.map(n => n.row)) + 1;
  const gx = 30, gy = 16, W = Math.max(110, Math.min(170, (maxW - (cols-1)*gx)/cols));
  const cv = document.createElement('div'); cv.className = 'tcanvas'; box.appendChild(cv);
  const m = {}; algo.nodes.forEach(n => { const e = document.createElement('div'); e.className = 'tn k-' + (n.k||'do'); e.style.width = W+'px';
    e.innerHTML = '<span class="t"></span>' + (n.s ? '<span class="s"></span>' : ''); e.querySelector('.t').textContent = n.t; if (n.s) e.querySelector('.s').textContent = n.s; cv.appendChild(e); m[n.id] = { n, e, h: e.offsetHeight }; });
  const rh = Math.max(...Object.values(m).map(o => o.h)) + gy;
  Object.values(m).forEach(o => { o.x = o.n.col*(W+gx); o.y = o.n.row*rh + (rh-gy-o.h)/2; o.e.style.left = o.x+'px'; o.e.style.top = o.y+'px'; });
  const w = cols*W + (cols-1)*gx, h = rows*rh - gy; let paths = '', labels = '';
  algo.edges.forEach(ed => { const a = m[ed.from], b = m[ed.to]; if (!a || !b) return; let x1, y1, x2, y2;
    if (b.n.col > a.n.col){ x1 = a.x+W; y1 = a.y+a.h/2; x2 = b.x; y2 = b.y+b.h/2; } else if (b.n.col < a.n.col){ x1 = a.x; y1 = a.y+a.h/2; x2 = b.x+W; y2 = b.y+b.h/2; }
    else { x1 = a.x+W/2; x2 = b.x+W/2; if (b.n.row > a.n.row){ y1 = a.y+a.h; y2 = b.y; } else { y1 = a.y; y2 = b.y+b.h; } }
    paths += '<path d="M'+x1+','+y1+' L'+x2+','+y2+'"/>'; if (ed.label) labels += '<span class="el" style="left:'+((x1+x2)/2)+'px;top:'+((y1+y2)/2)+'px">'+ed.label+'</span>'; });
  cv.insertAdjacentHTML('afterbegin', '<svg class="edges" width="'+w+'" height="'+h+'"><defs><marker id="ah2" markerWidth="7" markerHeight="7" refX="6" refY="3.5" orient="auto"><path d="M0,0 L7,3.5 L0,7 z" fill="#64748b"/></marker></defs><g fill="none" stroke="#64748b" stroke-width="1.4" marker-end="url(#ah2)">'+paths+'</g></svg>');
  cv.insertAdjacentHTML('beforeend', labels); cv.style.width = w+'px'; cv.style.height = h+'px';
  const s = Math.min(1, maxW/w, maxH/h); cv.style.zoom = s;
  const wrap = document.createElement('div'); wrap.style.width = (w*s)+'px'; wrap.style.height = (h*s)+'px'; wrap.style.position = 'relative'; wrap.style.overflow = 'clip'; wrap.style.overflowClipMargin = '10px'; box.appendChild(wrap); wrap.appendChild(cv);
  box.style.height = (h*s + 14)+'px';
  return { scale: +s.toFixed(2), orient: 'grid' };
}
function renderAlgo(page, maxH){
  const box = page.querySelector('.algo-box'); const sv = page.querySelector('.algo-svg');
  if (sv){ sv.style.setProperty('--mh', maxH + 'px'); return { scale: 1, orient: 'svg' }; }
  if (!box) return null;
  const algo = JSON.parse(box.getAttribute('data-algo'));
  const maxW = box.clientWidth - 12;
  if (algo.type !== 'tree') return drawFlow(box, algo, maxW, maxH);
  const tr = drawTree(box, algo, maxW, maxH);
  // árbol muy chico → flujo de la clase si queda más legible
  if (tr.scale < 0.8 && algo.alt && algo.alt.nodes.length >= 4){
    const fl = drawFlow(box, algo.alt, maxW, maxH);
    if (fl.scale >= tr.scale + 0.08){ fl.alt = true; return fl; }
    return drawTree(box, algo, maxW, maxH);
  }
  return tr;
}

/* ── ajuste de una página de tema ── */
const MIN_SCALE = 0.8; // el algoritmo no se achica más que esto (texto de nodo ≥ 9,6 px)
function fitTopic(page){
  const id = page.dataset.id, tier = +page.dataset.tier, body = page.querySelector('.pbody');
  const cont = document.querySelector('[data-cont="' + id + '"]');
  const BASE = { algoH: 340, traps: 5, ask: 7, why: true, tight: false, photo: true, short: false, trows: 99, tight2: false };
  const st = Object.assign({}, BASE);
  const all = sel => [...document.querySelectorAll('[data-id="' + id + '"] ' + sel + ', [data-cont="' + id + '"] ' + sel)];
  const traps = all('.fx-traps tbody tr'), asks = all('.ask-l li'), trows = all('.fx-tbl tbody tr');
  asks.forEach(li => { if (li.dataset.s && !li.dataset.f) li.dataset.f = li.innerHTML; });
  let algoInfo = null;
  const apply = () => {
    all('.fx-why').forEach(w => w.style.display = st.why ? '' : 'none');
    traps.forEach((r, i) => r.style.display = i < st.traps ? '' : 'none');
    all('.fx-traps').forEach(c => c.style.display = st.traps > 0 ? '' : 'none');
    asks.forEach((r, i) => { r.style.display = i < st.ask ? '' : 'none'; if (r.dataset.s) r.innerHTML = st.short ? r.dataset.s : r.dataset.f; });
    trows.forEach((r, i) => r.style.display = i < st.trows ? '' : 'none');
    page.classList.toggle('tight2', st.tight2); if (cont) cont.classList.toggle('tight2', st.tight2);
    page.classList.toggle('tight', st.tight); if (cont) cont.classList.toggle('tight', st.tight);
    page.classList.toggle('nophoto', !st.photo);
    algoInfo = renderAlgo(page, st.algoH);
  };
  const STEPS = [
    () => st.why = false, () => st.traps = 4, () => st.traps = 3, () => st.ask = 6, () => st.tight = true,
    () => st.algoH = 300, () => st.algoH = 270, () => st.ask = 5, () => st.algoH = 245, () => st.algoH = 220,
  ];
  // temas de 1 página (tier 1-2) cuyo algoritmo queda chico: sin foto, la lista ocupa el ancho y libera alto
  const RESCUE = [() => { st.photo = false; st.algoH = 340; }, () => st.algoH = 300, () => st.algoH = 270, () => st.ask = 5, () => st.algoH = 245];
  // temas de tier 1-2: nunca a 2 páginas; se condensa «Lo que te preguntan», la tabla y las trampas
  const CONDENSE = [() => st.short = true, () => st.tight2 = true, () => st.trows = 8, () => { st.photo = false; st.algoH = 300; }, () => st.trows = 7, () => st.traps = 2, () => st.algoH = 260, () => st.trows = 6, () => st.ask = 5, () => st.algoH = 230, () => st.trows = 5, () => st.traps = 1, () => st.algoH = 200, () => st.ask = 4, () => st.trows = 4, () => st.traps = 0, () => st.algoH = 170, () => st.trows = 3];
  const shrink = (el, steps) => { let n = 0; while (over(el) && n < steps.length){ steps[n++](); apply(); if (tier === 3 && algoInfo && algoInfo.scale < MIN_SCALE) break; } return n; };
  // agranda el algoritmo mientras quepa (aprovecha el espacio libre)
  const grow = () => { if (!algoInfo || algoInfo.orient === 'svg') return; let prev = algoInfo.scale;
    while (!over(body) && algoInfo.scale < 1 && st.algoH < 520){ st.algoH += 20; apply(); if (over(body)){ st.algoH -= 20; apply(); break; } if (algoInfo.scale <= prev + 0.001) { st.algoH -= 20; apply(); break; } prev = algoInfo.scale; } };
  apply();
  let used = shrink(body, tier === 3 ? STEPS : STEPS.concat(CONDENSE)), split = false;
  if (over(body) || (tier === 3 && algoInfo && algoInfo.scale < MIN_SCALE)){
    // 2 páginas: tabla, trampas y regla de oro pasan a la 2.ª; vuelven a la 1.ª las que quepan
    split = true; Object.assign(st, BASE); cont.style.display = '';
    const slot = cont.querySelector('.cont-slot');
    const mv = ['.fx-tbl', '.fx-traps', '.fx-gold'].map(s => page.querySelector('.pbody ' + s)).filter(Boolean);
    mv.forEach(e => slot.appendChild(e)); apply();
    for (const e of mv){ body.appendChild(e); apply(); if (over(body)){ slot.insertBefore(e, slot.firstChild); apply(); break; } }
    if (!slot.children.length){ split = false; cont.style.display = 'none'; }
    used = shrink(body, STEPS.filter((_, i) => i !== 1 && i !== 2));
    const cb = cont.querySelector('.pbody');
    if (split){ shrink(cb, [() => st.traps = 4, () => st.traps = 3]);
      for (const e of [...cont.querySelectorAll('.cont-extras > *')].reverse()){ if (!over(cb)) break; e.remove(); }
      if (over(cb)) REPORT.warnings.push(id + ': la 2.ª página se desborda ' + (cb.scrollHeight - cb.clientHeight) + ' px'); }
  }
  grow();
  if (!split && tier !== 3 && algoInfo && algoInfo.scale < MIN_SCALE && page.querySelector('.pfig')){
    const keep = Object.assign({}, st), before = algoInfo.scale;
    Object.assign(st, keep); RESCUE[0](); apply(); let n = 1; while (over(body) && n < RESCUE.length){ RESCUE[n++](); apply(); }
    grow();
    if (over(body) || algoInfo.scale <= before + 0.02){ Object.assign(st, keep); apply(); grow(); }
  }
  // algoritmo aún chico en un tema de 1 página: se cede espacio a la tabla/trampas (nunca al algoritmo)
  if (!split && tier !== 3 && algoInfo && algoInfo.orient !== 'svg' && algoInfo.scale < MIN_SCALE){
    for (const f of [() => st.trows = Math.min(st.trows, 6), () => st.traps = Math.min(st.traps, 1), () => st.trows = 4, () => st.ask = Math.min(st.ask, 4), () => st.traps = 0, () => st.trows = 3]){
      f(); apply(); grow(); if (algoInfo.scale >= MIN_SCALE) break; }
  }
  const ov = over(body);
  if (ov) REPORT.warnings.push(id + ': se desborda ' + (body.scrollHeight - body.clientHeight) + ' px');
  if (split && tier !== 3) REPORT.warnings.push(id + ': tema tier ' + tier + ' en 2 páginas');
  if (algoInfo && algoInfo.scale < MIN_SCALE) REPORT.warnings.push(id + ': algoritmo al ' + Math.round(algoInfo.scale * 100) + ' %');
  REPORT.topics[id] = { steps: used, split, algo: algoInfo, algoH: st.algoH, traps: Math.min(st.traps, traps.length), ask: Math.min(st.ask, asks.length), tight: st.tight, overflow: ov };
  if (!split && cont) cont.remove();
}

/* ── paginación de secciones de flujo (índice, números, fármacos, GES, plan) ── */
function paginate(page){
  const body = page.querySelector('.pbody'); if (!over(body)) return;
  const next = page.cloneNode(true); const nb = next.querySelector('.pbody'); nb.innerHTML = '';
  next.removeAttribute('data-id'); page.after(next);
  nb.insertAdjacentHTML('beforeend', '<div class="blk pg-lead pg-cont"><h2>' + (page.dataset.title || '') + ' <span>· continuación</span></h2><div class="rule"></div></div>');
  const lead2 = nb.firstElementChild;
  let guard = 0, moved = 0;
  while (over(body) && guard++ < 800){
    const blks = [...body.children].filter((e, i) => !(i === 0 && e.classList.contains('pg-lead')));
    const last = blks[blks.length - 1]; if (!last) break;
    const tb = last.querySelector('table.dtbl');
    const rows = tb ? [...tb.tBodies[0].rows] : [];
    if (tb && rows.length > 2){
      const k = last.dataset.k || (last.dataset.k = 'k' + Math.random().toString(36).slice(2));
      let dst = nb.querySelector('[data-from="' + k + '"] tbody');
      if (!dst){ const cl = last.cloneNode(true); cl.removeAttribute('data-anchor'); cl.dataset.from = k; cl.querySelectorAll('[data-anchor]').forEach(a => a.removeAttribute('data-anchor')); cl.querySelector('tbody').innerHTML = ''; [...cl.children].forEach(ch => { if (ch.tagName !== 'TABLE') ch.remove(); }); lead2.after(cl); dst = cl.querySelector('tbody'); }
      dst.insertBefore(rows[rows.length - 1], dst.firstChild); moved++;
      // no dejar encabezados de grupo huérfanos al pie
      let rest = [...tb.tBodies[0].rows];
      while (rest.length && rest[rest.length-1].classList.contains('grp')){ dst.insertBefore(rest[rest.length-1], dst.firstChild); rest = [...tb.tBodies[0].rows]; }
    } else {
      if (blks.length === 1) break; // bloque único más alto que la página: se deja (y se avisa)
      nb.insertBefore(last, lead2.nextSibling); moved++;
    }
  }
  if (over(body)) REPORT.warnings.push((page.dataset.title || 'sección') + ': un bloque no cabe en una página');
  if (!moved){ next.remove(); return; }
  // la tabla continuada repite el encabezado de grupo vigente
  nb.querySelectorAll('[data-from]').forEach(cl => { const t = cl.querySelector('tbody'); const f = t.rows[0];
    if (f && !f.classList.contains('grp')){ const src = [...document.querySelectorAll('[data-k="' + cl.dataset.from + '"] tr.grp')].pop(); if (src){ const g = src.cloneNode(true); g.removeAttribute('data-anchor'); g.cells[0].insertAdjacentHTML('beforeend', ' <span class="cont-s">(cont.)</span>'); t.insertBefore(g, f); } } });
  paginate(next);
}

async function main(){
  await document.fonts.ready;
  await Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })));
  document.querySelectorAll('.page.tp:not(.tp-cont)').forEach(p => { try { fitTopic(p); } catch (e) { REPORT.warnings.push(p.dataset.id + ': error de ajuste ' + e.message); } });
  document.querySelectorAll('.page.flow').forEach(paginate);
  // numeración y referencias
  const pages = [...document.querySelectorAll('.page')].filter(p => p.style.display !== 'none');
  const where = {};
  pages.forEach((p, i) => { const n = p.querySelector('.pnum'); if (n) n.textContent = i + 1; if (p.dataset.id && !where[p.dataset.id]) where[p.dataset.id] = i + 1;
    p.querySelectorAll('[data-anchor]').forEach(a => { if (!where[a.dataset.anchor]) where[a.dataset.anchor] = i + 1; }); });
  document.querySelectorAll('[data-ref]').forEach(e => { e.textContent = where[e.dataset.ref] || '—'; });
  // desborde horizontal: cualquier elemento que sobresalga de la hoja hace que Chrome reduzca esa página al imprimir
  pages.forEach((p, i) => { const pr = p.getBoundingClientRect(); let bad = null;
    p.querySelectorAll('*').forEach(e => { if (bad) return; const r = e.getBoundingClientRect(); if (r.width > 0 && r.right - pr.left > pr.width + 1 && !e.closest('svg')) bad = e; });
    if (bad) REPORT.warnings.push('pág. ' + (i + 1) + ' (' + (p.dataset.id || p.dataset.title || '') + '): desborde horizontal por <' + bad.tagName.toLowerCase() + ' class="' + bad.className + '">'); });
  REPORT.pages = pages.length; REPORT.where = where;
  window.__REPORT = REPORT; window.__READY = true;
}
main().catch(e => { REPORT.warnings.push('error: ' + e.message); window.__REPORT = REPORT; window.__READY = true; });
})();
`;

/* ───────────────────────────── imágenes ───────────────────────────── */
async function compressImages(browser, srcs, maxW = 640) {
  const out = new Map();
  const pg = await browser.newPage();
  for (const src of srcs) {
    const f = path.join(MEDIA, src); const ext = path.extname(f).toLowerCase();
    if (ext === '.svg') { out.set(src, `data:image/svg+xml;base64,${fs.readFileSync(f).toString('base64')}`); continue; }
    const mime = ext === '.png' ? 'png' : ext === '.webp' ? 'webp' : 'jpeg';
    const raw = `data:image/${mime};base64,${fs.readFileSync(f).toString('base64')}`;
    try {
      const uri = await pg.evaluate(async (s, mw) => {
        const img = new Image(); img.src = s; await img.decode();
        const k = Math.min(1, mw / img.naturalWidth); const c = document.createElement('canvas');
        c.width = Math.round(img.naturalWidth * k); c.height = Math.round(img.naturalHeight * k);
        const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height); g.drawImage(img, 0, 0, c.width, c.height);
        return c.toDataURL('image/jpeg', 0.84);
      }, raw, maxW);
      out.set(src, uri);
    } catch (e) { console.warn(`  ! imagen ${src}: ${e.message}`); }
  }
  await pg.close();
  return out;
}

/* ───────────────────────────── Anki ───────────────────────────── */
function ankiCsv(x) {
  const q = s => `"${String(s).replace(/"/g, '""')}"`;
  const lines = ['#separator:semicolon', '#html:false', '#columns:Frente;Reverso;Etiquetas'];
  const tag = t => `repaso_${x.prefix} tema_${t.label.replace('.', '_')} prioridad_${t.stars}`;
  x.topics.forEach(t => {
    t.ask.forEach(k => {
      const m = k.match(/^(.{4,90}?)(?::\s|\s=\s|\s→\s)(.+)$/);
      if (m) lines.push([q(`${t.label} ${t.title} — ${m[1].trim()}`), q(m[2].trim()), q(tag(t))].join(';'));
      else lines.push([q(`${t.label} ${t.title} — ¿qué te preguntan?`), q(k), q(tag(t))].join(';'));
    });
    ((t.trapsAll && t.trapsAll.rows) || []).forEach(r => {
      const h = t.trapsAll.head || [];
      const back = r.slice(1).map((v, i) => `${strip(h[i + 1] || '')}: ${v}`).join(' | ');
      lines.push([q(`${t.label} Trampa EUNACOM — ${r[0]}`), q(back), q(tag(t) + ' trampa')].join(';'));
    });
  });
  return lines.join('\n') + '\n';
}

/* ───────────────────────────── principal ───────────────────────────── */
async function main() {
  const key = process.argv[2];
  const htmlOnly = process.argv.includes('--html');
  const base = BB.SPECIALTIES.find(s => s.key === key);
  if (!base) { console.error(`Uso: node build_repaso.cjs <libro>\nLibros: ${BB.SPECIALTIES.map(s => s.key).join(', ')}`); process.exit(1); }
  const spec = { ...base, accent: BB.ACCENTS[key] || '#334155' };
  const fileTitle = key === 'saludpublica' ? 'SaludPublica' : spec.title.split(/\s+[&y]\s+|\s+/)[0].normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  console.log(`▶ Repaso de última hora · ${spec.title}`);
  const x = { spec, ...prepare(key, spec), stats: {}, img: new Map() };
  console.log(`  ${x.topics.length} temas · Libro Gordo: ${x.lg.byLabel} preguntas por tema, ${x.lg.byCode} por código, ${x.lg.unassigned.length} sin tema`);

  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox'] });
  try {
    const srcs = [...new Set(x.topics.flatMap(t => [t.photo, ...t.more].filter(Boolean).map(p => p.src)))];
    x.img = await compressImages(browser, srcs);
    const html = buildHtml(x);
    const tmp = path.join(__dirname, `temp_repaso_${key}.html`);
    fs.writeFileSync(tmp, html);
    if (htmlOnly) { console.log('  HTML:', tmp); return; }
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'networkidle0', timeout: 120000 });
    for (let i = 0; i < 300; i++) { if (await page.evaluate('window.__READY === true')) break; await new Promise(r => setTimeout(r, 200)); }
    const rep = await page.evaluate('JSON.stringify(window.__REPORT)').then(JSON.parse);
    const PDFO = { format: 'A4', printBackground: true, preferCSSPageSize: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } };
    const pdf = await page.pdf(PDFO);
    await page.close();
    const oi = process.argv.indexOf('--out'); const outDir = oi > 0 ? path.resolve(process.argv[oi + 1]) : OUT_DIR;
    fs.mkdirSync(outDir, { recursive: true });
    const out = path.join(outDir, `Repaso_Ultima_Hora_${fileTitle}_2026.pdf`);
    fs.writeFileSync(out, pdf);
    const anki = path.join(outDir, `Anki_${fileTitle}.csv`);
    fs.writeFileSync(anki, ankiCsv(x));
    fs.writeFileSync(path.join(__dirname, `temp_repaso_${key}_report.json`), JSON.stringify({ report: rep, stars: x.topics.map(t => ({ t: t.label, real: t.real, stars: t.stars, lg: t.lgQ.map(r => r.n) })), lg: { ...x.lg, pages: undefined }, stats: x.stats }, null, 1));
    const splits = Object.entries(rep.topics).filter(([, v]) => v.split).map(([k]) => k);
    console.log(`  ✓ ${out}\n    ${rep.pages} páginas · ${(pdf.length / 1e6).toFixed(1)} MB · temas en 2 páginas: ${splits.join(', ') || 'ninguno'}`);
    console.log(`    números: ${x.stats.numbers} · fármacos: ${x.stats.drugs} · GES: ${x.stats.ges} · QR: ${QRCode ? 'sí' : 'NO (falta npm qrcode)'}`);
    console.log(`  ✓ ${anki}`);
    rep.warnings.forEach(w => console.log('    ! ' + w));
  } finally { await browser.close(); }
}

if (require.main === module) main().catch(e => { console.error(e); process.exit(1); });
module.exports = { prepare, extractNumbers, extractDrugs, CLASS_URL };
