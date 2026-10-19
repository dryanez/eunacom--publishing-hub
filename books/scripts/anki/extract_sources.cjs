#!/usr/bin/env node
/**
 * extract_sources.cjs <libro>
 * Vuelca a JSON + Markdown todo lo que el mazo Anki necesita de un libro, para que
 * build_anki.py (Python) no tenga que leer .cjs y para que quien escriba tarjetas
 * tenga un resumen por tema con las cifras exactas del libro.
 *
 * Salidas (regenerables, no editar a mano):
 *   books/data/anki/<libro>/_fuentes/fuentes.json   (meta, fotos, pathway por tema)
 *   books/data/anki/<libro>/_fuentes/<classId>.md   (digest para redactar tarjetas)
 */
const fs = require('fs');
const path = require('path');

const ROOT = path.resolve(__dirname, '..', '..', '..');
const R2_SUBIDOS = (() => { try { return Object.fromEntries(fs.readFileSync(path.join(ROOT, 'classes/scripts/jsvideo/out/r2_subidos.txt'), 'utf8').trim().split('\n').map(l => l.split('\t')).map(([c, , k]) => [c, 'r2://' + k])); } catch (e) { return {}; } })();
const libro = process.argv[2];
const REG = JSON.parse(fs.readFileSync(path.join(__dirname, 'libros.json'), 'utf8'));
if (!libro || !REG[libro]) { console.error('Uso: extract_sources.cjs <libro>  (' + Object.keys(REG).filter(k => k[0] !== '_').join(', ') + ')'); process.exit(1); }
const cfg = REG[libro];
const rd = p => JSON.parse(fs.readFileSync(path.join(ROOT, p), 'utf8'));
// Serializa viñetas/casos que vienen como objeto ({title,text,...}) o arreglo, en vez de «[object Object]».
const ser = v => {
  if (v == null) return '';
  if (typeof v === 'string') return v;
  if (typeof v === 'number' || typeof v === 'boolean') return String(v);
  if (Array.isArray(v)) return v.map(ser).filter(Boolean).join(' ');
  if (typeof v === 'object') {
    const skip = new Set(['src', 'id', 'k', 'kind', 'type', 'credit']);
    return Object.entries(v).filter(([k]) => !skip.has(k)).map(([k, x]) => {
      const t = ser(x); if (!t) return '';
      return ['text', 'title', 'stem', 'caso', 'enunciado'].includes(k) ? t : `${k}: ${t}`;
    }).filter(Boolean).join(' ');
  }
  return String(v);
};
// Solo se quitan etiquetas HTML reales (<b>, </p>, <br/>…); «< 4 cm/año» y «> 60%» se conservan completos.
const TAG = /<\/?(?:b|i|u|em|strong|br|span|p|div|sub|sup|ul|ol|li|a|small|mark|code|table|thead|tbody|tr|td|th|img|font|h[1-6])(?:\s[^<>]*)?\/?>/gi;
const strip = s => ser(s).replace(TAG, '').replace(/&nbsp;/g, ' ').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&').replace(/\s+/g, ' ').trim();

// ── dataset: primer export que sea arreglo de clases
const ds = require(path.join(ROOT, cfg.dataset));
const classes = Object.values(ds).find(v => Array.isArray(v) && v[0] && v[0].classId) || [];
const topicCodes = rd('books/data/v3_topic_codes.json');
const codemap = rd('books/data/v3_codemap.json');
const realQ = rd('books/data/real_questions_by_code.json');
const atlas = rd('books/data/atlas_fotos_verificadas.json');
let pathways = {};
if (cfg.pathways) { try { pathways = require(path.join(ROOT, cfg.pathways)); } catch (e) { console.warn('sin pathways:', e.message); } }
let ensayo = [];
try { ensayo = rd(cfg.ensayo_90q); } catch (e) { console.warn('sin ensayo 90Q'); }

const MEDIA = path.join(ROOT, 'classes', 'media');

function flattenPathway(node, id = 'r', depth = 0, out = [], parent = null, label = '') {
  if (!node) return out;
  out.push({ id, k: node.k, t: strip(node.t), s: strip(node.s), say: strip(node.say), depth, parent, label });
  (node.kids || []).forEach(([lab, child], i) => flattenPathway(child, `${id}.${i}`, depth + 1, out, id, lab));
  return out;
}

const OUTDIR = path.join(ROOT, 'books', 'data', 'anki', libro, '_fuentes');
fs.mkdirSync(OUTDIR, { recursive: true });
const fuentes = { libro, generado: new Date().toISOString(), temas: {} };

for (const c of classes) {
  const cid = c.classId;
  let lesson = null;
  try { lesson = require(path.join(ROOT, 'classes', 'lessons', `${cid}.cjs`)); } catch (e) { /* sin clase */ }
  const codes = (topicCodes[cid] && topicCodes[cid].codes) || (c.perfilCode ? [c.perfilCode] : []);
  const codeInfo = codes.map(code => ({ code, ...(codemap[code] || {}) }));

  // fotos: clase (photo/photos en pasos) + atlas verificado
  const photos = []; const seen = new Set();
  const addPhoto = (p, ctx, origen) => {
    if (!p || !p.src || seen.has(p.src)) return; seen.add(p.src);
    photos.push({ src: p.src, label: strip(p.label), credit: strip(p.credit), ctx: strip(ctx).slice(0, 400), origen, existe: fs.existsSync(path.join(MEDIA, p.src)) });
  };
  if (lesson) {
    const walk = (o, ctx) => {
      if (!o || typeof o !== 'object') return;
      if (Array.isArray(o)) return o.forEach(x => walk(x, ctx));
      const say = typeof o.say === 'string' ? o.say : ctx;
      if (o.photo) addPhoto(o.photo, say, 'clase');
      if (Array.isArray(o.photos)) o.photos.forEach(p => addPhoto(p, say, 'clase'));
      for (const [k, v] of Object.entries(o)) if (k !== 'photo' && k !== 'photos') walk(v, say);
    };
    walk(lesson.slides, '');
  }
  for (const a of atlas) if ((a.clases || []).includes(cid)) addPhoto({ src: a.file, label: a.cap, credit: a.credit }, a.desc, 'atlas');

  // preguntas reales vinculadas a los códigos
  const reales = []; const seenQ = new Set();
  for (const code of codes) for (const q of (realQ[code] || [])) {
    const key = q.recTag || q.stem.slice(0, 60);
    if (seenQ.has(key)) continue; seenQ.add(key);
    const ok = (q.options || []).find(o => o.id === q.correcta);
    reales.push({ code, recTag: q.recTag, stem: strip(q.stem), correcta: ok ? strip(ok.text) : q.correcta, explicacion: strip(q.explicacion) });
  }
  const lg = ensayo.filter(q => codes.includes(q.perfilCode)).map(q => q.number);
  // tiempos de cada diapositiva en el video (fin del último beat = diapositiva completa)
  let slideTimes = null;
  const dataJs = path.join(ROOT, 'classes/scripts/jsvideo/out', cid, 'data.js');
  if (fs.existsSync(dataJs)) {
    global.window = {}; delete require.cache[dataJs]; require(dataJs);
    const C = global.window.CLASS || {};
    const vt = {};
    for (const b of C.beats || []) {
      if (b.slide < 0) continue;
      const cur = vt[b.slide];
      vt[b.slide] = { start: cur ? cur.start : b.t0, end: Math.max(cur ? cur.end : 0, b.t0 + b.dur) };
    }
    // el video puede omitir diapositivas (p. ej. quizzes): emparejar por tipo + título
    slideTimes = {};
    const used = new Set();
    (lesson ? lesson.slides : []).forEach((ls, li) => {
      const vi = (C.slides || []).findIndex((vs, j) => !used.has(j) && vs.type === ls.type && strip(vs.title) === strip(ls.title) && strip(vs.stem) === strip(ls.stem));
      if (vi >= 0 && vt[vi]) { used.add(vi); slideTimes[li] = { video: vi, ...vt[vi] }; }
    });
  }
  const pwSrc = pathways[cid] || (lesson && lesson.pathway) || null; // si no hay archivo de pathways, el árbol viene en la clase
  const pw = pwSrc ? { title: strip(pwSrc.title), nodes: flattenPathway(pwSrc.root) } : null;

  fuentes.temas[cid] = {
    classId: cid, title: c.title, topicLabel: c.topicLabel, blockNum: c.blockNum, blockName: c.blockName,
    perfilCode: c.perfilCode, dx: c.dx, tx: c.tx, seg: c.seg, ges: c.ges, codes: codeInfo,
    realQuestions: reales.map(r => ({ code: r.code, recTag: r.recTag })), libroGordoQ: lg,
    photos, pathway: pw, slideTimes,
    table: c.table ? { title: c.table.title, headers: c.table.headers || [], rows: c.table.rows || [] } : null,
    slideTypes: lesson ? lesson.slides.map(x => x.type) : [],
    // texto plano de cada diapositiva (para ubicar el minuto del video de cada tarjeta / término)
    slideText: lesson ? lesson.slides.map(sl => { const o = []; const w = v => { if (typeof v === 'string') o.push(strip(v)); else if (v && typeof v === 'object') for (const [k, x] of Object.entries(v)) if (!['src', 'photo', 'photos', 'id', 'k', 'kind', 'type', 'credit'].includes(k)) w(x); }; w(sl); return o.join(' '); }) : [],
    // secciones del libro (título + texto) → tags de concepto y glosario
    sections: (c.contentSections || []).map(s => ({ title: strip(s.subhead), text: [...(s.paragraphs || []), ...(s.bullets || [])].map(strip).join(' ') })),
    keyPoints: (c.keyPoints || []).map(strip),
    // video local o ya subido a R2 (out/r2_subidos.txt: clase\ttamaño\tbucket/clave)
    video: fs.existsSync(path.join(ROOT, 'classes/scripts/jsvideo/out', cid, `${cid}_clase.mp4`)) ? `classes/scripts/jsvideo/out/${cid}/${cid}_clase.mp4` : (R2_SUBIDOS[cid] || null),
  };

  // ── digest Markdown para redactores
  const L = [];
  L.push(`# ${cid} · ${c.topicLabel} ${c.title}`);
  L.push(`Perfil principal ${c.perfilCode} · Dx ${c.dx} · Tx ${c.tx} · Seg ${c.seg} · GES: ${strip(c.ges)}`);
  L.push('Códigos del tema: ' + codeInfo.map(x => `${x.code} ${x.name || ''} (Dx ${x.dx || '-'}/Tx ${x.tx || '-'}/Seg ${x.seg || '-'})`).join(' · '));
  L.push(`Preguntas reales vinculadas: ${reales.length} · Libro Gordo Q: ${lg.join(', ') || '—'}`);
  if (c.contexto) L.push('\n## ¿Por qué?\n' + strip(c.contexto));
  L.push('\n## LIBRO · contenido');
  for (const s of c.contentSections || []) {
    L.push(`\n### ${strip(s.subhead)}`);
    for (const p of s.paragraphs || []) L.push('- ' + strip(p));
    for (const b of s.bullets || []) L.push('  • ' + strip(b));
  }
  if (c.table) {
    L.push(`\n## [libro:tabla] LIBRO · tabla: ${strip(c.table.title)}`);
    L.push('| ' + (c.table.headers || []).map(strip).join(' | ') + ' |');
    for (const r of c.table.rows || []) L.push('| ' + r.map(strip).join(' | ') + ' |');
  }
  if (c.keyPoints) { L.push('\n## LIBRO · puntos clave'); c.keyPoints.forEach(k => L.push('- ' + strip(k))); }
  if (c.vignette) L.push(`\n## LIBRO · caso\n${strip(c.vignette)}\n→ ${strip(c.explicacion)}`);
  for (const q of c.questions || []) {
    const ok = (q.options || []).find(o => o.id === q.correcta);
    L.push(`\n## LIBRO · pregunta (${strip(q.recTag)})\n${strip(q.stem)}\n✔ ${ok ? strip(ok.text) : q.correcta}\n→ ${strip(q.explicacion)}`);
  }
  if (lesson) {
    L.push('\n## CLASE');
    lesson.slides.forEach((s, si) => {
      const S = `[clase:${si}]`;
      if (s.type === 'points') {
        L.push(`\n### ${S} ${strip(s.title)} (${strip(s.kicker)})`);
        for (const cd of s.cards || []) {
          L.push(`- [${strip(cd.title)}${cd.tag ? ' · ' + strip(cd.tag) : ''}]`);
          for (const it of cd.items || []) L.push(`  • ${strip(it.t)} — ${strip(it.d)}`);
        }
      } else if (s.type === 'table') {
        L.push(`\n### ${S} TABLA DE TRAMPAS: ${strip(s.title)}`);
        L.push('| ' + (s.head || []).map(strip).join(' | ') + ' |');
        for (const r of s.rows || []) L.push('| ' + (r.cells || r).map(strip).join(' | ') + ' |');
      } else if (s.type === 'flow') {
        L.push(`\n### ${S} Diagrama: ${strip(s.title)}`);
        L.push((s.nodes || []).map(n => `${strip(n.t)} (${strip(n.s)})`).join(' → '));
      } else if (s.type === 'quiz') {
        const ok = (s.options || []).find(o => o.letter === s.correct);
        L.push(`\n### ${S} Quiz (${strip(s.title)})\n${strip(s.stem)} ${strip(s.question)}\n✔ ${ok ? strip(ok.text) : s.correct}\n→ ${strip(s.explanation)}`);
      }
    });
  }
  if (pw) {
    L.push(`\n## [algoritmo] ALGORITMO (pathway): ${pw.title}`);
    for (const n of pw.nodes) L.push(`${'  '.repeat(n.depth)}- [${n.id}] ${n.label ? '(' + n.label + ') ' : ''}${n.k}: ${n.t} — ${n.s}`);
  }
  L.push('\n## FOTOS DISPONIBLES (usar el src exacto en "imagen")');
  for (const p of photos.filter(p => p.existe)) L.push(`- ${p.src} | ${p.label} | ${p.credit} | contexto: ${p.ctx.slice(0, 220)}`);
  L.push('\n## PREGUNTAS REALES (códigos del tema)');
  for (const r of reales) L.push(`- ${r.recTag} [${r.code}]: ${r.stem.slice(0, 260)} ✔ ${r.correcta}${r.explicacion ? ' → ' + r.explicacion.slice(0, 220) : ''}`);
  fs.writeFileSync(path.join(OUTDIR, `${cid}.md`), L.join('\n') + '\n');
}
fs.writeFileSync(path.join(OUTDIR, 'fuentes.json'), JSON.stringify(fuentes, null, 1));
console.log(`OK ${Object.keys(fuentes.temas).length} temas → ${path.relative(ROOT, OUTDIR)}`);
