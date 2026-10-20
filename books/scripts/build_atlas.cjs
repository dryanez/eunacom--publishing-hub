/**
 * ══════════════════════════════════════════════════════════════════════════════
 * ATLAS DE IMÁGENES EUNACOM · compilador multi-especialidad
 *   Mismo diseño que los tomos (build_book.cjs) y el Repaso (build_repaso.cjs):
 *   portada AEE con foto y banda de color, IBM Plex Sans + Barlow Condensed + JetBrains Mono.
 *
 *   Por imagen (½ página; 1 página si size = "full"):
 *     imagen con 1–3 marcadores numerados (SVG) · «Qué tienes que ver» · diagnóstico + frase
 *     · conducta inicial + códigos Perfil V3 (Dx/Tx/Seg) · «Se confunde con…»
 *     · pie: pregunta real (recTag), página del tomo, QR a la clase · crédito de la imagen.
 *   Secciones: portada · índice por tema · fichas (orden del tomo) · «Parecidas pero distintas»
 *   · «Signos con nombre propio» · índice por tipo de imagen · autoevaluación + soluciones.
 *
 * Uso:   node books/scripts/build_atlas.cjs <libro> [--html] [--out <carpeta>]
 *        node books/scripts/build_atlas.cjs <libro> --draft   → borrador del archivo editorial
 * Salida: books/dist/Atlas/Atlas_Imagenes_<Título>_2026.pdf
 *
 * Fuentes (el texto no se inventa: sale del tomo y de la clase):
 *   books/data/atlas/<libro>.json     selección editorial: imágenes (vistas una a una), marcadores,
 *                                     claves, conducta, códigos, «se confunde con», pares, signos, descartes
 *   classes/media/…                   las imágenes (fotos en contexto, biblioteca, atlas verificado)
 *   classes/lessons/<classId>.cjs     créditos y rótulos de las fotos
 *   books/data/atlas_fotos_verificadas.json   créditos del atlas 392
 *   books/data/v3_codemap.json        nombre y niveles Dx/Tx/Seg de cada código
 *   books/data/real_questions_by_code.json    preguntas reales (por recTag)
 *   books/dist/<módulo>/<tomo>.pdf    página del tomo donde aparece cada imagen (PyMuPDF)
 * ══════════════════════════════════════════════════════════════════════════════
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');
const { spawnSync } = require('child_process');

let puppeteer;
try { puppeteer = require('puppeteer'); } catch (e) { puppeteer = require('./puppeteer_shim.cjs'); }
let QRCode = null;
for (const p of ['qrcode', '/private/tmp/qrjs/node_modules/qrcode', '/tmp/qrjs/node_modules/qrcode']) {
  try { QRCode = require(p); break; } catch (e) { /* siguiente */ }
}
const BB = require('./build_book.cjs');
const { applyV3 } = require('./v3_codes.cjs');
const { CLASS_URL } = require('./build_repaso.cjs'); // misma constante «por confirmar» que el Repaso

const BOOKS = path.join(__dirname, '..');
const REPO = path.join(BOOKS, '..');
const DIST = path.join(BOOKS, 'dist');
const OUT_DIR = path.join(DIST, '06_Atlas');
const MEDIA = path.join(REPO, 'classes', 'media');
const LESSONS = path.join(REPO, 'classes', 'lessons');
const CODEMAP = JSON.parse(fs.readFileSync(path.join(BOOKS, 'data', 'v3_codemap.json'), 'utf8'));
const REAL = JSON.parse(fs.readFileSync(path.join(BOOKS, 'data', 'real_questions_by_code.json'), 'utf8'));
const ATLAS392 = (() => { try { return JSON.parse(fs.readFileSync(path.join(BOOKS, 'data', 'atlas_fotos_verificadas.json'), 'utf8')); } catch (e) { return []; } })();
const FALLBACK_URL = (prefix, id) => `https://eunacom-examen.cl/?utm_source=atlas_${prefix}&utm_content=${id}`;

/* ───────────────────────────── utilidades ───────────────────────────── */
const strip = s => String(s == null ? '' : s).replace(/<\/?[a-zA-Z][^>]*>/g, '').replace(/\s+/g, ' ').trim();
const esc = s => String(s == null ? '' : s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
const norm = t => strip(t).normalize('NFD').replace(/[̀-ͯ]/g, '').toLowerCase().replace(/[«»"“”]/g, '').replace(/\s+/g, ' ');
const CN = n => String(n).padStart(2, '0');
const LV_SHORT = v => { const s = String(v || '—'); return /espec/i.test(s) ? 'Específico' : /sosp/i.test(s) ? 'Sospecha' : /compl/i.test(s) ? 'Completo' : /inic/i.test(s) ? 'Inicial' : /deriv/i.test(s) ? 'Derivar' : /no req/i.test(s) ? 'No requiere' : s; };
const TYPES = { clinica: 'Foto clínica', dermatoscopia: 'Dermatoscopía', histologia: 'Histología / citología', esquema: 'Esquema', imagen: 'Imagen radiológica', otra: 'Otra (agente o vector)' };
const ABBR = s => s.replace(/^EUNACOM\s+/, '').replace(/Pregunta\s+/, 'P');

function qrSvg(url) {
  if (!QRCode) return `<div class="qr-miss">QR</div>`;
  let out = '';
  QRCode.toString(url, { type: 'svg', margin: 0, errorCorrectionLevel: 'M', color: { dark: '#0f172a', light: '#ffffff' } }, (e, s) => { out = s || ''; });
  return out;
}

/* créditos: clase → atlas 392 → nombre de archivo de la biblioteca */
const BOOKNAMES = { 'cto-derma': 'Manual CTO Dermatología 14.ª ed.', 'amir-derma': 'Manual AMIR Dermatología', 'amir-reuma': 'Manual AMIR Reumatología', 'amir-orl': 'Manual AMIR Otorrinolaringología', fitzpatrick: "Fitzpatrick's Dermatology", nelson: 'Nelson Textbook of Pediatrics, 22.ª ed.', kanski: "Kanski's Clinical Ophthalmology, 8.ª ed.", 'bailey-love': "Bailey & Love's Short Practice of Surgery, 27.ª ed.", harrison: "Harrison's Principles of Internal Medicine, 21.ª ed.", knoop: 'The Atlas of Emergency Medicine (Knoop)', 'kumar-clark': 'Kumar & Clark, Clinical Medicine', sherman: 'Atlas of Clinical Emergency Medicine (Sherman)' };
function lessonPhotoIndex(prefix) {
  const idx = {};
  if (!fs.existsSync(LESSONS)) return idx;
  for (const f of fs.readdirSync(LESSONS).filter(f => f.startsWith(prefix + '-') && f.endsWith('.cjs'))) {
    let L; try { L = require(path.join(LESSONS, f)); } catch (e) { continue; }
    const id = f.replace(/\.cjs$/, '');
    (function walk(o) {
      if (!o || typeof o !== 'object') return; if (Array.isArray(o)) return o.forEach(walk);
      const add = p => { if (p && p.src && !idx[p.src]) idx[p.src] = { label: strip(p.label), credit: strip(p.credit).replace(/\s*Author info.*$/i, ''), classId: id }; };
      if (o.photo) add(o.photo); if (Array.isArray(o.photos)) o.photos.forEach(add);
      if (o.type === 'image') (o.images || []).forEach(add);
      for (const k in o) if (!['photo', 'photos'].includes(k)) walk(o[k]);
    })(L.slides);
  }
  return idx;
}
function creditFor(src, LIDX) {
  if (LIDX[src] && LIDX[src].credit) return LIDX[src].credit;
  const a = ATLAS392.find(a => a.file === src || src.endsWith(path.basename(a.file)));
  if (a && a.credit) return a.credit;
  const m = path.basename(src).match(/__([a-z-]+)_p(\d+)/i);
  if (m) return `${BOOKNAMES[m[1]] || m[1]}, p. ${m[2]}`;
  return 'Fuente por confirmar';
}

/* páginas del tomo (PyMuPDF): texto por página */
function tomoPages(pdf) {
  const py = `import json, sys, fitz\nd = fitz.open(sys.argv[1])\nprint(json.dumps([p.get_text() for p in d]))`;
  const r = spawnSync('python3', ['-c', py, pdf], { encoding: 'utf8', maxBuffer: 256 * 1024 * 1024 });
  if (r.status !== 0) { console.warn('  ! PyMuPDF no disponible: sin páginas del tomo'); return null; }
  return JSON.parse(r.stdout);
}

/* ───────────────────────────── preparación ───────────────────────────── */
function prepare(key, spec) {
  const fdata = path.join(BOOKS, 'data', 'atlas', `${key}.json`);
  if (!fs.existsSync(fdata)) { console.error(`Falta ${path.relative(REPO, fdata)} (usa --draft para generar el borrador)`); process.exit(1); }
  const A = JSON.parse(fs.readFileSync(fdata, 'utf8'));
  const data = applyV3(key, spec.dataset());
  const topicOf = {}; data.forEach(c => { if (c.classId) topicOf[c.classId] = c; });
  const LIDX = lessonPhotoIndex(A.prefix);

  // tomo: rango de páginas de cada tema (encabezado «T E M A  1 6 . 5») y búsqueda de rótulos
  const tomoPdf = path.join(DIST, '01_Tomos', spec.moduleDir, spec.out);
  const P = fs.existsSync(tomoPdf) ? tomoPages(tomoPdf) : null;
  const PN = P ? P.map(norm) : null;
  const range = {};
  if (P) P.forEach((t, i) => {
    const h = t.slice(0, 260).replace(/\s+/g, '');
    const m = h.match(/TEMA(\d+\.\d+)/);
    if (m) { const r = range[m[1]] || (range[m[1]] = { a: i + 1, b: i + 1 }); r.b = i + 1; }
  });
  const findPage = (terms, label) => {
    if (!PN) return null;
    const r = range[label];
    const pages = r ? Array.from({ length: r.b - r.a + 1 }, (_, k) => r.a + k) : [];
    for (const t of terms.filter(Boolean).map(norm).filter(t => t.length >= 4)) {
      const hit = pages.find(p => PN[p - 1].includes(t));
      if (hit) return { p: hit, exact: true };
    }
    return r ? { p: r.a, exact: false } : null;
  };

  const realByTag = {}; Object.values(REAL).flat().forEach(q => { if (q.recTag && !realByTag[q.recTag] && !(q.audit && q.audit.excluir)) realByTag[q.recTag] = q; });   // audit: excluidas no
  const imgs = A.images.map((im, i) => {
    const c = topicOf[im.topic] || {};
    const L = LIDX[im.src] || {};
    const a392 = ATLAS392.find(a => a.file === im.src);
    const tp = findPage([L.label, a392 && a392.cap, im.title], c.topicLabel);
    const q = im.q ? realByTag[im.q] : null;
    const codes = (im.codes || []).map(k => { const m = CODEMAP[k] || {}; return { code: k, name: m.name || '', dx: m.dx && LV_SHORT(m.dx), tx: m.tx && LV_SHORT(m.tx), seg: m.seg && LV_SHORT(m.seg) }; });
    return {
      ...im, num: i + 1, anchor: `IMG-${im.id}`, label: c.topicLabel || '', topicTitle: A.topics[im.topic] || strip(c.title),
      block: c.blockNum, blockName: c.blockName, credit: creditFor(im.src, LIDX), tomo: tp, codeInfo: codes,
      real: q ? { tag: q.recTag, stem: strip(q.stem), ans: strip(((q.options || []).find(o => o.id === q.correcta) || {}).text).replace(/(\D)2(c|ca|s)/g, '$1ti$2') } : null,
      url: CLASS_URL ? CLASS_URL(im.topic) : FALLBACK_URL(A.prefix, im.topic),
    };
  });
  const byId = Object.fromEntries(imgs.map(x => [x.id, x]));
  const signos = (A.signos || []).map(s => {
    let p = s.page_pref || null;
    if (!p && PN) { const t = norm(s.find); const lab = topicOf[s.topic] && topicOf[s.topic].topicLabel; const r = range[lab];
      const pages = r ? Array.from({ length: r.b - r.a + 1 }, (_, k) => r.a + k) : [];
      p = pages.find(k => PN[k - 1].includes(t)) || (PN.findIndex(x => x.includes(t)) + 1) || null; }
    return { ...s, page: p, im: s.img ? byId[s.img] : null };
  });
  const dermPage = PN ? (PN.findIndex(x => x.includes('dermatoscopia: herramienta')) + 1 || PN.findIndex(x => x.includes('dermatoscopia')) + 1) : null;
  return { A, data, imgs, byId, signos, pairs: (A.pairs || []).map(p => ({ ...p, A: byId[p.a], B: byId[p.b] })), tomoFile: spec.out, hasTomo: !!P, dermPage };
}

/* ───────────────────────────── geometría y marcadores ───────────────────────────── */
function fit(w, h, W, H) { const k = Math.min(W / w, H / h); return { w: Math.round(w * k), h: Math.round(h * k) }; }
function markerSvg(im, W, H, sz = 1) {
  const mk = im.claves.map((c, i) => ({ ...c, n: i + 1 })).filter(c => c.m);
  const R = 11 * sz, mn = Math.min(W, H); const placed = [];
  const parts = mk.map((c, j) => {
    const [fx, fy, fr = 0.07] = c.m; const x = fx * W, y = fy * H, r = fr * mn;
    let dx = fx - 0.5, dy = fy - 0.5; if (Math.hypot(dx, dy) < 0.08) { dx = 0.7; dy = -0.7; }
    let ang = Math.atan2(dy, dx), bx, by, tries = 0;
    const dist = (r > 0 ? r : 6) + R + 12 * sz;
    do {
      bx = Math.min(W - R - 3, Math.max(R + 3, x + Math.cos(ang) * dist));
      by = Math.min(H - R - 3, Math.max(R + 3, y + Math.sin(ang) * dist));
      ang += Math.PI / 3; tries++;
    } while (tries < 7 && placed.some(p => Math.hypot(p[0] - bx, p[1] - by) < 2.6 * R));
    placed.push([bx, by]);
    // línea desde el borde del badge hasta el borde del anillo (o la punta, si r = 0)
    const L = Math.hypot(x - bx, y - by) || 1, ux = (x - bx) / L, uy = (y - by) / L;
    const sx = bx + ux * R, sy = by + uy * R, ex = x - ux * (r > 0 ? r : 2), ey = y - uy * (r > 0 ? r : 2);
    const line = L > R + (r > 0 ? r : 0) + 2 ? `<line x1="${sx.toFixed(1)}" y1="${sy.toFixed(1)}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" class="mk-halo"/><line x1="${sx.toFixed(1)}" y1="${sy.toFixed(1)}" x2="${ex.toFixed(1)}" y2="${ey.toFixed(1)}" class="mk-line"${r > 0 ? '' : ' marker-end="url(#ah)"'}/>` : '';
    const ring = r > 0 ? `<circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" class="mk-halo"/><circle cx="${x.toFixed(1)}" cy="${y.toFixed(1)}" r="${r.toFixed(1)}" class="mk-ring"/>` : '';
    return `${ring}${line}<circle cx="${bx.toFixed(1)}" cy="${by.toFixed(1)}" r="${R}" class="mk-b"/><text x="${bx.toFixed(1)}" y="${(by + 4.6 * sz).toFixed(1)}" class="mk-t" style="font-size:${13 * sz}px">${c.n}</text>`;
  }).join('');
  return `<svg class="mk" viewBox="0 0 ${W} ${H}" width="${W}" height="${H}"><defs><marker id="ah" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="5" markerHeight="5" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#fde047"/></marker></defs>${parts}</svg>`;
}
function figure(im, x, W, H, opts = {}) {
  const d = x.img.get(im.id); if (!d) return `<div class="fig-miss">imagen no disponible</div>`;
  const s = fit(d.w, d.h, W, H);
  return `<div class="fig" style="width:${s.w}px;height:${s.h}px"><img src="${d.uri}" style="width:${s.w}px;height:${s.h}px" alt="">${opts.clean ? '' : markerSvg(im, s.w, s.h)}</div>`;
}

/* ───────────────────────────── HTML: piezas ───────────────────────────── */
const gbar = (x, label) => `<div class="gbar"><span>Atlas de imágenes · ${esc(x.spec.title)}${label ? `&nbsp;&nbsp;·&nbsp;&nbsp;${label}` : ''}</span></div>`;
const pnum = () => `<div class="pnum"></div>`;
const lv = (k, v) => { const c = { 'Específico': 'sol', 'Sospecha': 'out', 'Completo': 'ok', 'Inicial': 'mid', 'Derivar': 'low', 'No requiere': 'nil' }[v] || 'nil'; return `<span class="lv lv-${c}"><i>${k}</i>${esc(v || '—')}</span>`; };
const chips = im => im.codeInfo.length
  ? im.codeInfo.map(ci => `<div class="chip"><span class="chip-c">${ci.code}</span><span class="chip-n">${esc(ci.name)}</span>${ci.dx || ci.tx || ci.seg ? `<span class="chip-l">${lv('Dx', ci.dx)}${lv('Tx', ci.tx)}${lv('Seg', ci.seg)}</span>` : '<span class="chip-l"><span class="lv lv-nil">examen/procedimiento</span></span>'}</div>`).join('')
  : `<div class="chip chip-none"><span class="chip-n">Lesión elemental: sin código propio · ver códigos del tema ${esc(im.label)}</span></div>`;

function textBlocks(im) {
  const claves = im.claves.map((c, i) => `<li class="${c.m ? '' : 'nm'}"><span class="kb">${c.m ? i + 1 : '•'}</span><span>${esc(c.t)}</span></li>`).join('');
  return `
    <div class="tb tb-see"><div class="tk">Qué tienes que ver</div><ul class="see">${claves}</ul></div>
    <div class="tb tb-dx"><div class="tk">Diagnóstico</div><div class="dx">${esc(im.title)}</div><div class="frase">${esc(im.frase)}</div></div>
    <div class="tb tb-cd"><div class="tk">Conducta inicial</div><div class="cd">${esc(im.conducta)}</div><div class="chips">${chips(im)}</div></div>
    <div class="tb tb-cf"><div class="tk tk-red">Se confunde con…</div><div class="cf">${esc(im.confunde)}</div></div>`;
}
function cardFoot(im) {
  const q = im.real;
  const stem = q ? (q.stem.length > 150 ? q.stem.slice(0, 146).replace(/\s+\S*$/, '') + '…' : q.stem) : '';
  return `<footer class="cfoot">
    <div class="cq">${q ? `<span class="cq-k">Pregunta real</span><span class="cq-t"><b>${esc(ABBR(q.tag))}</b> «${esc(stem)}»${q.ans ? ` <span class="cq-a">→ ${esc(q.ans)}</span>` : ''}</span>` : `<span class="cq-k cq-k0">Pregunta real</span><span class="cq-t cq-0">Sin pregunta real 2013–2025 con este código: practica con la clase (QR).</span>`}</div>
    <div class="ct"><span class="ct-k">Tomo ${esc(im.spec)}</span><span class="ct-p">${im.tomo ? `p. ${im.tomo.p}` : '—'}</span><span class="ct-s">Tema ${esc(im.label)}</span></div>
    <div class="qr"><div class="qr-svg">${qrSvg(im.url)}</div><div class="qr-t"><b>Clase ${esc(im.label)}</b><span>en video</span></div></div>
  </footer>`;
}
function card(im, x) {
  im.spec = x.spec.title;
  const full = im.size === 'full';
  const head = `<header class="ch"><span class="cn">${CN(im.num)}</span><div class="ch-m"><span class="ch-e">Tema ${esc(im.label)} · ${esc(im.topicTitle)}</span></div><span class="ty ty-${im.type}">${esc(TYPES[im.type] || im.type)}</span></header>`;
  const cred = `<div class="cred">Imagen: ${esc(im.credit)}${im.note ? ` · ${esc(im.note)}` : ''}</div>`;
  if (full) {
    return `<article class="card full" data-anchor="${im.anchor}">${head}
      <div class="fbody"><div class="fimg">${figure(im, x, 726, 560)}${cred}</div><div class="ftext">${textBlocks(im)}</div></div>${cardFoot(im)}</article>`;
  }
  return `<article class="card half" data-anchor="${im.anchor}">${head}
    <div class="hbody"><div class="himg">${figure(im, x, 410, 376)}${cred}</div><div class="htext">${textBlocks(im)}</div></div>${cardFoot(im)}</article>`;
}

/* paginación de fichas: 2 medias por página; una ficha completa espera a que se cierre la página en curso */
function cardPages(x) {
  const pages = []; let cur = []; const waiting = [];
  const flush = () => { if (cur.length) { pages.push(cur); cur = []; } };
  for (const im of x.imgs) {
    if (im.size === 'full') { if (cur.length) waiting.push(im); else pages.push([im]); continue; }
    cur.push(im); if (cur.length === 2) { flush(); while (waiting.length) pages.push([waiting.shift()]); }
  }
  flush(); while (waiting.length) pages.push([waiting.shift()]);
  return pages.map(p => `<section class="page cards" ${p[0].label ? `data-title="Tema ${esc(p[0].label)}"` : ''}>${gbar(x, `Tema ${p.map(i => i.label).filter((v, i, a) => a.indexOf(v) === i).join(' · ')}`)}<div class="pbody">${p.map(im => card(im, x)).join('')}</div>${pnum()}</section>`).join('\n');
}

function coverPage(x) {
  const { spec } = x;
  const meta = BB.COVER_METADATA[spec.ch] || { code: spec.ch, title: spec.title, sub: '', color: spec.accent, chip: spec.accent };
  const ph = meta.photo && path.join(BOOKS, 'assets', 'covers', meta.photo);
  const bg = ph && fs.existsSync(ph) ? `data:image/jpeg;base64,${fs.readFileSync(ph).toString('base64')}` : '';
  const logo = fs.readFileSync(path.join(BOOKS, 'assets', 'aee-logo-7a-dark.svg'), 'utf8');
  const veil = meta.dense
    ? 'linear-gradient(180deg, rgba(11,20,32,0.86) 0%, rgba(11,20,32,0.62) 40%, rgba(11,20,32,0.92) 74%, rgba(11,20,32,0.98) 100%)'
    : 'linear-gradient(180deg, rgba(11,20,32,0.74) 0%, rgba(11,20,32,0.22) 34%, rgba(11,20,32,0.88) 72%, rgba(11,20,32,0.97) 100%)';
  const nt = new Set(x.imgs.map(i => i.topic)).size;
  return `<section class="page cover-aee">
    ${bg ? `<div class="cover-bg" style="background-image:url('${bg}');background-position:${meta.pos || 'center'};filter:${meta.filter || 'none'}"></div>` : ''}
    <div class="cover-veil" style="background:${veil}"></div>
    <div class="cover-stripe" style="background:${meta.color}"></div>
    <div class="cover-content">
      <div class="cover-top-row"><div class="cover-logo">${logo}</div>
        <div class="cover-badge"><span class="ed">1ª EDICIÓN · 2026</span><span class="subed">ASOFAMECh PERFIL V3</span></div></div>
      <div class="cover-bottom-box">
        <div class="cover-chip" style="background:${meta.chip}"><span>TOMO ${spec.ch} · ${meta.code} · ATLAS</span></div>
        <div class="cover-title-group">
          <span class="repaso-kicker" style="color:${BB.mix(meta.color, '#ffffff', 0.55)}">Atlas de imágenes EUNACOM ·</span>
          <h1 class="main-title">${esc(meta.title)}</h1>
          <span class="sub-title">Lo que tienes que ver en cada foto, y qué hacer después</span>
        </div>
        <div class="cover-facts">
          <div><span class="n">${x.imgs.length}</span><span class="t">imágenes comentadas con marcadores</span></div>
          <div><span class="n">${nt}</span><span class="t">temas, en el orden del tomo</span></div>
          <div><span class="n">${x.pairs.length}</span><span class="t">pares «parecidas pero distintas»</span></div>
        </div>
        <div class="cover-divider"></div>
        <div class="cover-footer-row"><span class="foot-left">${esc(spec.module)} · complemento visual del Tomo ${spec.ch}</span></div>
      </div>
    </div>
  </section>`;
}

function indexPages(x) {
  const ends = [['PAIRS', 'Parecidas pero distintas'], ['SIGNS', 'Signos con nombre propio'], ['TYPES', 'Índice por tipo de imagen'], ['AUTO', 'Autoevaluación'], ['SOL', 'Soluciones de la autoevaluación']];
  const topics = []; x.imgs.forEach(im => { let t = topics.find(t => t.topic === im.topic); if (!t) topics.push(t = { topic: im.topic, label: im.label, title: im.topicTitle, block: im.block, blockName: im.blockName, ims: [] }); t.ims.push(im); });
  const lines = t => 1.6 + t.ims.length; // líneas estimadas
  const items = []; let lastBlock = null;
  topics.forEach(t => {
    if (t.block !== lastBlock) { items.push({ h: 2, html: `<div class="ix-b"><span class="ix-bn">${CN(t.block)}</span><span>${esc(t.blockName || '')}</span></div>` }); lastBlock = t.block; }
    items.push({ h: lines(t), html: `<div class="ix-t"><div class="ix-th"><b>${esc(t.label)}</b> ${esc(t.title)}</div>${t.ims.map(im => `<div class="ix-i"><span class="ix-n">${CN(im.num)}</span><span class="ix-tt">${esc(im.title)}</span><span class="ix-d"></span><span class="ix-p" data-ref="${im.anchor}"></span></div>`).join('')}</div>` });
  });
  const CAP1 = 66, CAP = 96; const pages = [[]]; let used = 0;
  items.forEach(it => { const cap = pages.length === 1 ? CAP1 : CAP; if (used + it.h > cap && pages[pages.length - 1].length) { pages.push([]); used = 0; } pages[pages.length - 1].push(it); used += it.h; });
  return pages.map((p, i) => `<section class="page flow" data-title="Índice">${gbar(x, 'Índice por tema')}<div class="pbody">
    ${i === 0 ? `<div class="pg-lead"><h2>Índice por tema</h2><div class="rule"></div></div>
    <div class="howto"><div><b>Cómo usarlo.</b> Mira primero la foto y busca tú los hallazgos; después compara con los marcadores numerados y con «Qué tienes que ver». Cierra con la conducta y la pregunta real del pie. Al final, pruébate sin respuestas en la Autoevaluación.</div>
    <div class="howto-leg">Niveles Perfil V3: <b>Dx</b> diagnóstico · <b>Tx</b> tratamiento · <b>Seg</b> seguimiento. «Tomo p.» = página del Tomo ${x.spec.ch} donde se trata esa imagen o su tema.</div></div>
    <div class="ix-ends">${ends.map(([id, t]) => `<div class="ix-e"><span>${t}</span><span class="ix-d"></span><span class="ix-p" data-ref="${id}"></span></div>`).join('')}</div>` : `<div class="pg-lead pg-cont"><h2>Índice por tema <span>· continuación</span></h2><div class="rule"></div></div>`}
    <div class="ix-cols">${p.map(it => it.html).join('')}</div></div>${pnum()}</section>`).join('\n');
}

function pairsPages(x) {
  const block = p => `<article class="pair"><div class="pr-h"><span class="pr-k">Parecidas pero distintas</span><h3>${esc(p.title)}</h3></div>
    <div class="pr-row">${[[p.A, p.la], [p.B, p.lb]].map(([im, l], k) => `<div class="pr-c"><div class="pr-img">${figure(im, x, 340, 314, { clean: true })}</div>
      <div class="pr-dx"><span class="pr-l">${k ? 'B' : 'A'}</span>${esc(im.title)}</div><ul class="pr-ul">${l.map(t => `<li>${esc(t)}</li>`).join('')}</ul>
      <div class="pr-ref">Ficha n.º ${CN(im.num)} · p. <span data-ref="${im.anchor}"></span></div></div>`).join('<div class="pr-vs">vs</div>')}</div>
    <div class="pr-diff"><span class="pr-dk">La diferencia</span><span>${esc(p.diff)}</span></div></article>`;
  const out = [];
  for (let i = 0; i < x.pairs.length; i += 2) {
    const ps = x.pairs.slice(i, i + 2);
    out.push(`<section class="page flow"${i === 0 ? ' data-id="PAIRS"' : ''} data-title="Parecidas pero distintas">${gbar(x, 'Parecidas pero distintas')}<div class="pbody">
      ${i === 0 ? `<div class="pg-lead slim"><h2>Parecidas pero distintas</h2><p class="pg-lead-p">Las mismas fotos de las fichas, lado a lado y sin marcadores: primero intenta decir cuál es cuál.</p><div class="rule"></div></div>` : ''}
      ${ps.map(block).join('')}</div>${pnum()}</section>`);
  }
  return out.join('\n');
}

function signsPages(x) {
  const cardS = s => `<div class="sg">${s.im ? `<div class="sg-img">${figure(s.im, x, 104, 84, { clean: true })}</div>` : `<div class="sg-img sg-noimg"><span>sin foto en el atlas</span></div>`}
    <div class="sg-t"><div class="sg-n">${esc(s.name)}</div><div class="sg-d">${esc(s.def)}</div><div class="sg-x"><b>Se ve en:</b> ${esc(s.dx)}</div>
    <div class="sg-p">Tomo p. <b>${s.page || '—'}</b>${s.im ? ` · Atlas: ficha n.º ${CN(s.im.num)}, p. <b data-ref="${s.im.anchor}"></b>` : ''}</div></div></div>`;
  const per = 10, out = [];
  for (let i = 0; i < x.signos.length; i += per) {
    out.push(`<section class="page flow"${i === 0 ? ' data-id="SIGNS"' : ''}>${gbar(x, 'Signos con nombre propio')}<div class="pbody">
      ${i === 0 ? `<div class="pg-lead slim"><h2>Signos con nombre propio</h2><p class="pg-lead-p">Lo que el examen nombra con un epónimo o una imagen: qué es, en qué enfermedad aparece y dónde está en el tomo.</p><div class="rule"></div></div>` : `<div class="pg-lead pg-cont"><h2>Signos con nombre propio <span>· continuación</span></h2><div class="rule"></div></div>`}
      <div class="sg-grid">${x.signos.slice(i, i + per).map(cardS).join('')}</div></div>${pnum()}</section>`);
  }
  return out.join('\n');
}

function typesPage(x) {
  const groups = Object.keys(TYPES).map(k => ({ k, ims: x.imgs.filter(i => i.type === k) }));
  return `<section class="page flow" data-id="TYPES">${gbar(x, 'Índice por tipo de imagen')}<div class="pbody">
    <div class="pg-lead slim"><h2>Índice por tipo de imagen</h2><div class="rule"></div></div>
    <div class="ty-sum">${groups.map(g => `<div class="ty-box ty-${g.k}"><span class="n">${g.ims.length}</span><span class="t">${esc(TYPES[g.k])}</span></div>`).join('')}</div>
    <div class="ix-cols ty-cols" style="column-count:3;column-gap:16px">${groups.map(g => `<div class="ix-t"><div class="ix-th"><b>${esc(TYPES[g.k])}</b> · ${g.ims.length}</div>${g.ims.length ? g.ims.map(im => `<div class="ix-i"><span class="ix-n">${CN(im.num)}</span><span class="ix-tt">${esc(im.title)} <i>(${esc(im.label)})</i></span><span class="ix-d"></span><span class="ix-p" data-ref="${im.anchor}"></span></div>`).join('')
      : `<div class="ix-none">${g.k === 'dermatoscopia' && x.dermPage ? `Sin imágenes de dermatoscopía en las fuentes de este tomo; los patrones se describen en el Tomo, p. ${x.dermPage}.` : 'Sin imágenes de este tipo en las fuentes.'}</div>`}</div>`).join('')}</div>
  </div>${pnum()}</section>`;
}

function autoPages(x) {
  const A = x.imgs.filter(i => i.auto); x.auto = A;
  const per = 6, out = [];
  for (let i = 0; i < A.length; i += per) {
    out.push(`<section class="page flow"${i === 0 ? ' data-id="AUTO"' : ''}>${gbar(x, 'Autoevaluación')}<div class="pbody">
      ${i === 0 ? `<div class="pg-lead slim"><h2>Autoevaluación</h2><p class="pg-lead-p">${A.length} fotos de las fichas, sin marcadores ni rótulos. Escribe el diagnóstico y el hallazgo que lo confirma; las soluciones están al final.</p><div class="rule"></div></div>` : ''}
      <div class="au-grid${i === 0 ? ' first' : ''}">${A.slice(i, i + per).map((im, k) => `<div class="au"><div class="au-h"><span class="au-n">${i + k + 1}</span><span class="au-q">¿Diagnóstico? ¿Qué lo confirma?</span></div>
        <div class="au-img">${figure(im, x, 338, i === 0 ? 196 : 236, { clean: true })}</div><div class="au-l"></div><div class="au-l"></div></div>`).join('')}</div>
    </div>${pnum()}</section>`);
  }
  return out.join('\n');
}
function solPage(x) {
  const per = Math.ceil(x.auto.length / Math.ceil(x.auto.length / 46)), out = [];
  for (let i = 0; i < x.auto.length; i += per) {
    const rows = x.auto.slice(i, i + per).map((im, j) => { const k = i + j; return `<tr${k % 2 ? ' class="alt"' : ''}><td class="c0">${k + 1}</td><td><b>${esc(im.title)}</b></td><td>${esc((im.claves[0] || {}).t || '')}</td><td class="c3">${CN(im.num)} · p. <span data-ref="${im.anchor}"></span></td></tr>`; }).join('');
    out.push(`<section class="page flow"${i === 0 ? ' data-id="SOL"' : ''} data-title="Soluciones">${gbar(x, 'Soluciones de la autoevaluación')}<div class="pbody">
    ${i === 0 ? '<div class="pg-lead slim"><h2>Soluciones de la autoevaluación</h2><div class="rule"></div></div>' : '<div class="pg-lead pg-cont"><h2>Soluciones <span>· continuación</span></h2><div class="rule"></div></div>'}
    <div class="blk"><table class="dtbl sol"><thead><tr><th>N.º</th><th>Diagnóstico</th><th>Lo que lo confirma</th><th>Ficha</th></tr></thead><tbody>${rows}</tbody></table></div>
  </div>${pnum()}</section>`);
  }
  return out.join('\n');
}
function buildHtml(x) {
  const t = BB.themeVars(x.spec.accent);
  const body = [coverPage(x), indexPages(x), cardPages(x), pairsPages(x), signsPages(x), typesPage(x), autoPages(x), solPage(x)].join('\n');
  return `<!DOCTYPE html><html lang="es"><head><meta charset="UTF-8"><title>Atlas de imágenes · ${esc(x.spec.title)}</title>
<link href="https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800;900&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;0,700;1,400&family=IBM+Plex+Mono:wght@500;700&family=JetBrains+Mono:wght@400;500;700;800&display=swap" rel="stylesheet">
<style>${CSS(t)}</style></head><body>${body}<script>${PAGE_JS}</script></body></html>`;
}

/* ───────────────────────────── CSS ───────────────────────────── */
const CSS = t => `
:root{--acc:${t.acc};--acc-d:${t.accD};--acc-dp:${t.accDp};--acc-t:${t.accT};--acc-p:${t.accP};--acc-l:${t.accL};--navy:#1e3a8a;--red:#b91c1c}
*{box-sizing:border-box;margin:0;padding:0}
@page{size:A4;margin:0}
html{-webkit-print-color-adjust:exact;print-color-adjust:exact;width:210mm;overflow-x:hidden}
body{width:210mm;overflow-x:hidden;font-family:'IBM Plex Sans',system-ui,sans-serif;color:#15181d;font-size:11px;line-height:1.4;background:#fff}
.page{position:relative;width:210mm;height:297mm;overflow:hidden;contain:paint;break-after:page;page-break-after:always;background:#fff}
.page:last-child{break-after:auto;page-break-after:auto}
.gbar{height:22px;background:var(--acc);display:flex;align-items:center;justify-content:center;font:700 8.5px/1 'IBM Plex Sans',sans-serif;letter-spacing:.2em;text-transform:uppercase;color:#fdf4ff}
.pbody{position:absolute;top:22px;left:0;right:0;bottom:30px;padding:14px 34px 0;overflow:hidden}
.pnum{position:absolute;bottom:9px;left:0;right:0;text-align:center;font:600 9px/1 'IBM Plex Sans',sans-serif;color:#9aa3af}
.rule{height:3px;background:var(--acc);margin-top:8px}
.pg-lead h2{font:700 25px/1.15 'IBM Plex Sans',sans-serif;letter-spacing:-.01em}
.pg-lead{margin-bottom:10px}.pg-lead.slim{margin-bottom:8px}.pg-lead.slim h2{font-size:22px}
.pg-cont h2{font-size:17px}.pg-cont h2 span{font-weight:400;color:#64748b}
.pg-lead-p{font:400 11px/1.45 'IBM Plex Sans',sans-serif;color:#475569;margin-top:4px}

/* PORTADA */
.cover-aee{background:#0b1420}
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
.cover-title-group .sub-title{font:600 20px/1.25 'IBM Plex Sans',sans-serif;color:#fff}
.cover-facts{display:grid;grid-template-columns:repeat(3,1fr);gap:1px;background:rgba(255,255,255,.16);border:1px solid rgba(255,255,255,.16)}
.cover-facts>div{background:rgba(11,20,32,.78);padding:10px 12px;display:flex;flex-direction:column;gap:4px}
.cover-facts .n{font:700 30px/1 'Barlow Condensed',sans-serif;color:var(--acc-l)}
.cover-facts .t{font:500 10px/1.3 'IBM Plex Sans',sans-serif;letter-spacing:.04em;text-transform:uppercase;color:#cbd5e1}
.cover-divider{height:1.5px;background:rgba(255,255,255,.38)}
.cover-footer-row .foot-left{font:500 11.5px/1 'IBM Plex Mono',monospace;letter-spacing:.08em;color:#b6c1d0}

/* ÍNDICES */
.howto{border-left:3px solid var(--acc);background:var(--acc-t);padding:7px 12px;font:400 10.5px/1.45 'IBM Plex Sans',sans-serif;color:#334155;display:flex;flex-direction:column;gap:3px}
.howto-leg{font-size:10px;color:#475569}
.ix-ends{display:grid;grid-template-columns:1fr 1fr;gap:3px 18px;margin:8px 0 10px}
.ix-e{display:flex;align-items:baseline;gap:8px;background:#f1f5f9;border-left:3px solid var(--acc);padding:4px 10px;font:700 11px/1.3 'IBM Plex Sans',sans-serif}
.ix-cols{column-count:2;column-gap:22px}
.ix-b{break-inside:avoid;break-after:avoid;display:flex;align-items:baseline;gap:8px;margin:6px 0 2px;font:700 10.5px/1.3 'IBM Plex Sans',sans-serif;color:#0f172a;border-bottom:1px solid var(--acc-p);padding-bottom:2px}
.ix-bn{font:800 18px/1 'Barlow Condensed',sans-serif;color:var(--acc)}
.ix-t{break-inside:avoid;margin:3px 0 5px}
.ix-th{font:600 10.5px/1.35 'IBM Plex Sans',sans-serif;color:#0f172a;margin-bottom:1px}.ix-th b{color:var(--acc-d)}
.ix-i{display:flex;align-items:baseline;gap:6px;font:400 10px/1.5 'IBM Plex Sans',sans-serif;padding-left:8px}
.ix-n{font:700 9.5px/1 'JetBrains Mono',monospace;color:var(--acc);width:16px;flex:none}
.ix-tt{min-width:0}.ix-tt i{color:#64748b;font-style:normal}
.ix-d{flex:1;border-bottom:1px dotted #cbd5e1;position:relative;top:-3px;min-width:10px}
.ix-p{font:700 10px/1 'JetBrains Mono',monospace;color:var(--navy);flex:none}
.ix-none{font:italic 400 10px/1.4 'IBM Plex Sans',sans-serif;color:#64748b;padding-left:8px}
.ty-sum{display:grid;grid-template-columns:repeat(6,1fr);gap:6px;margin-bottom:12px}
.ty-box{border:1px solid #e2e8f0;border-top:3px solid var(--acc);padding:6px 8px;display:flex;flex-direction:column;gap:2px}
.ty-box .n{font:800 24px/1 'Barlow Condensed',sans-serif;color:var(--acc-d)}.ty-box .t{font:600 9px/1.2 'IBM Plex Sans',sans-serif;text-transform:uppercase;letter-spacing:.05em;color:#475569}

/* FICHAS */
.cards .pbody{display:flex;flex-direction:column;gap:14px;padding-top:12px}
.card{position:relative;border:1px solid #d6dbe3;border-top:3px solid var(--acc);background:#fff;display:flex;flex-direction:column;overflow:hidden}
.card.half{height:513px}.card.full{height:1040px}
.ch{display:flex;align-items:center;gap:10px;padding:5px 10px 5px 8px;background:var(--acc-t);border-bottom:1px solid var(--acc-p);flex:none}
.cn{font:800 26px/1 'Barlow Condensed',sans-serif;color:var(--acc);min-width:30px}
.ch-m{flex:1;min-width:0}.ch-e{font:700 9.5px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--acc-dp)}
.ty{font:700 8.5px/1 'IBM Plex Sans',sans-serif;letter-spacing:.08em;text-transform:uppercase;padding:3px 7px;border-radius:2px;background:#fff;color:#334155;border:1px solid #cbd5e1;flex:none}
.ty-histologia{background:#eef2ff;color:#3730a3;border-color:#c7d2fe}.ty-esquema{background:#fefce8;color:#854d0e;border-color:#fde68a}.ty-otra{background:#f0fdf4;color:#166534;border-color:#bbf7d0}
.hbody{flex:1;display:flex;gap:14px;padding:10px 12px 6px;min-height:0}
.himg{flex:none;width:410px;display:flex;flex-direction:column;align-items:center;justify-content:center;gap:4px}
.htext{flex:1;min-width:0;display:flex;flex-direction:column;gap:7px;overflow:hidden;justify-content:center}
.fbody{flex:1;display:flex;flex-direction:column;justify-content:center;gap:14px;padding:10px 12px 6px;min-height:0}
.fimg{display:flex;flex-direction:column;align-items:center;gap:4px}
.ftext{flex:none;display:grid;grid-template-columns:1fr 1fr;gap:8px 16px;align-content:start;overflow:hidden}
.fig{position:relative;flex:none;border-radius:3px;overflow:hidden;box-shadow:0 0 0 1px #cbd5e1}
.fig img{display:block}
.fig svg.mk{position:absolute;left:0;top:0;overflow:visible}
.mk-halo{fill:none;stroke:rgba(15,23,42,.75);stroke-width:4.2}
.mk-ring{fill:none;stroke:#fde047;stroke-width:2.2}
.mk-line{stroke:#fde047;stroke-width:2}
.mk-b{fill:var(--acc);stroke:#fff;stroke-width:2.2}
.mk-t{fill:#fff;font-family:'IBM Plex Sans',sans-serif;font-weight:700;text-anchor:middle}
.cred{font:400 8px/1.25 'IBM Plex Sans',sans-serif;color:#94a3b8;text-align:center;max-width:410px}
.tk{font:700 8.8px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:.12em;text-transform:uppercase;color:var(--acc-dp);margin-bottom:2px}
.tk-red{color:#991b1b}
.see{list-style:none;display:flex;flex-direction:column;gap:3px}
.see li{display:flex;gap:7px;align-items:flex-start;font:500 11.8px/1.34 'IBM Plex Sans',sans-serif;color:#0f172a}
.kb{flex:none;width:17px;height:17px;border-radius:50%;background:var(--acc);color:#fff;font:700 10px/17px 'IBM Plex Sans',sans-serif;text-align:center;box-shadow:0 0 0 1.5px #fde047}
.see li.nm .kb{background:#fff;color:var(--acc);box-shadow:inset 0 0 0 1.5px var(--acc-p)}
.tb-dx{border-left:3px solid var(--acc);background:var(--acc-t);padding:5px 9px}
.dx{font:700 16.5px/1.18 'IBM Plex Sans',sans-serif;color:#0f172a;letter-spacing:-.01em}
.frase{font:italic 400 11.2px/1.36 'IBM Plex Sans',sans-serif;color:#334155;margin-top:2px}
.cd{font:400 11.2px/1.36 'IBM Plex Sans',sans-serif;color:#0f172a}
.chips{display:flex;flex-direction:column;gap:3px;margin-top:4px}
.chip{display:flex;flex-wrap:wrap;align-items:center;gap:3px 6px;border:1px solid var(--acc-p);border-radius:3px;padding:0 4px 3px 0;overflow:hidden}
.chip-c{font:700 9px/1 'JetBrains Mono',monospace;color:#fff;background:var(--acc-d);display:flex;align-items:center;padding:4px 5px;flex:none;border-radius:0 0 3px 0}
.chip-n{flex:1 1 120px;min-width:0;font:600 9.4px/1.2 'IBM Plex Sans',sans-serif;color:#1e293b;padding-top:2px}
.chip-none{padding:3px 7px;background:#f8fafc;border-color:#e2e8f0}.chip-none .chip-n{white-space:normal;font-weight:500;color:#475569}
.chip-l{display:flex;gap:2px;flex:none;margin-left:auto;padding-left:4px}
.lv{font:600 7.8px/1 'IBM Plex Sans',sans-serif;padding:2.5px 3px;border-radius:2px;white-space:nowrap}
.lv i{font-style:normal;font-weight:700;opacity:.7;margin-right:2px}
.lv-sol{background:var(--acc);color:#fff}.lv-out{background:#fde68a;color:#78350f}.lv-ok{background:var(--acc-t);color:var(--acc-dp);box-shadow:inset 0 0 0 1px var(--acc-p)}
.lv-mid{background:#fef3c7;color:#78350f}.lv-low{background:#e2e8f0;color:#1e293b}.lv-nil{background:#f1f5f9;color:#64748b}
.tb-cf{border-left:3px solid #b91c1c;background:#fef2f2;padding:4px 9px}
.cf{font:400 11.2px/1.36 'IBM Plex Sans',sans-serif;color:#450a0a}
.card.s1 .see li,.card.s1 .cd,.card.s1 .cf,.card.s1 .frase{font-size:10.6px}.card.s1 .dx{font-size:15px}.card.s1 .htext{justify-content:flex-start}
.card.s2 .see li,.card.s2 .cd,.card.s2 .cf,.card.s2 .frase{font-size:9.8px;line-height:1.28}.card.s2 .dx{font-size:13.5px}.card.s2 .htext{gap:4px;justify-content:flex-start}
.cfoot{flex:none;height:62px;display:flex;align-items:center;gap:12px;border-top:1.5px solid var(--acc-p);padding:5px 10px;background:#fcfcfd}
.cq{flex:1;display:flex;gap:8px;align-items:center;min-width:0}
.cq-k{flex:none;font:700 8.5px/1.1 'IBM Plex Sans',sans-serif;letter-spacing:.1em;text-transform:uppercase;color:#fff;background:var(--navy);padding:4px 6px;border-radius:2px;width:62px;text-align:center}
.cq-k0{background:#94a3b8}
.cq-t{font:400 9.4px/1.32 'IBM Plex Sans',sans-serif;color:#1e293b;display:-webkit-box;-webkit-line-clamp:3;-webkit-box-orient:vertical;overflow:hidden}
.cq-t b{color:var(--navy)}.cq-a{font-weight:700;color:#166534}.cq-0{color:#64748b;font-style:italic}
.ct{flex:none;display:flex;flex-direction:column;align-items:center;border-left:1px solid #e2e8f0;border-right:1px solid #e2e8f0;padding:0 10px;gap:1px}
.ct-k{font:600 8px/1.1 'IBM Plex Sans',sans-serif;letter-spacing:.06em;text-transform:uppercase;color:#64748b}
.ct-p{font:800 19px/1 'Barlow Condensed',sans-serif;color:var(--acc-d)}
.ct-s{font:500 8px/1 'JetBrains Mono',monospace;color:#64748b}
.qr{flex:none;display:flex;gap:6px;align-items:center}
.qr-svg svg{width:48px;height:48px;display:block}
.qr-miss{width:48px;height:48px;border:1px dashed #94a3b8}
.qr-t{display:flex;flex-direction:column;font:400 8.5px/1.25 'IBM Plex Sans',sans-serif;color:#475569}.qr-t b{color:#0f172a;font-size:9px}

.ty-cols .ix-t{break-inside:auto}.ty-cols .ix-i{font-size:9.4px;line-height:1.42;padding-left:4px}
.card.full .see li{font-size:13px}.card.full .dx{font-size:20px}.card.full .cd,.card.full .cf,.card.full .frase{font-size:12.4px}.card.full .tk{font-size:9.6px}.card.full .ftext{gap:10px 18px}
/* PARECIDAS */
.pair{border:1px solid #d6dbe3;border-top:3px solid var(--acc);margin-bottom:12px;break-inside:avoid}
.pr-h{display:flex;align-items:baseline;gap:10px;padding:6px 12px;background:var(--acc-t);border-bottom:1px solid var(--acc-p)}
.pr-k{font:700 8.5px/1 'IBM Plex Sans',sans-serif;letter-spacing:.14em;text-transform:uppercase;color:var(--acc-dp)}
.pr-h h3{font:700 15px/1.2 'IBM Plex Sans',sans-serif;color:#0f172a}
.pr-row{display:flex;align-items:stretch;padding:8px 10px 4px;gap:6px}
.pr-c{flex:1;min-width:0;display:flex;flex-direction:column;gap:4px}
.pr-img{height:318px;display:flex;align-items:center;justify-content:center;background:#f8fafc;border-radius:3px}
.pr-vs{flex:none;align-self:center;font:900 22px/1 'Barlow Condensed',sans-serif;color:var(--acc);text-transform:uppercase}
.pr-dx{font:700 12.5px/1.25 'IBM Plex Sans',sans-serif;color:#0f172a;display:flex;gap:6px;align-items:baseline}
.pr-l{flex:none;font:700 10px/1 'IBM Plex Sans',sans-serif;color:#fff;background:var(--acc);border-radius:2px;padding:2px 5px}
.pr-ul{list-style:none;font:400 10.5px/1.35 'IBM Plex Sans',sans-serif;color:#1e293b}
.pr-ul li{padding-left:12px;position:relative}.pr-ul li::before{content:'▸';position:absolute;left:0;color:var(--acc)}
.pr-ref{font:500 8.8px/1 'JetBrains Mono',monospace;color:#64748b}
.pr-diff{display:flex;align-items:stretch;margin:4px 10px 10px;border:1px solid #f59e0b;background:#fffbeb}
.pr-dk{flex:none;display:flex;align-items:center;padding:0 9px;background:#f59e0b;color:#fff;font:700 9px/1 'IBM Plex Sans',sans-serif;letter-spacing:.1em;text-transform:uppercase}
.pr-diff span:last-child{padding:5px 10px;font:500 11px/1.35 'IBM Plex Sans',sans-serif;color:#451a03}

/* SIGNOS */
.sg-grid{display:grid;grid-template-columns:1fr 1fr;gap:9px 14px}
.sg{display:flex;gap:9px;border:1px solid #e2e8f0;border-left:3px solid var(--acc);padding:7px;min-height:104px}
.sg-img{flex:none;width:104px;height:88px;display:flex;align-items:center;justify-content:center;background:#f8fafc;border-radius:3px}
.sg-noimg span{font:italic 400 8.5px/1.2 'IBM Plex Sans',sans-serif;color:#94a3b8;text-align:center;padding:4px}
.sg-t{flex:1;min-width:0;display:flex;flex-direction:column;gap:2px}
.sg-n{font:800 16px/1.05 'Barlow Condensed',sans-serif;color:var(--acc-dp);text-transform:uppercase;letter-spacing:.01em}
.sg-d{font:400 10.2px/1.33 'IBM Plex Sans',sans-serif;color:#0f172a}
.sg-x{font:400 9.6px/1.3 'IBM Plex Sans',sans-serif;color:#475569}
.sg-p{margin-top:auto;font:500 9px/1.2 'JetBrains Mono',monospace;color:#64748b}.sg-p b{color:var(--navy)}

/* AUTOEVALUACIÓN */
.au-grid{display:grid;grid-template-columns:1fr 1fr;grid-template-rows:repeat(3,1fr);gap:10px 14px;height:1036px}
.au-grid.first{height:930px}
.au{border:1px solid #d6dbe3;border-radius:3px;padding:6px 8px;display:flex;flex-direction:column;gap:4px}
.au-h{display:flex;align-items:center;gap:8px}
.au-n{flex:none;width:24px;height:24px;border-radius:50%;background:var(--acc);color:#fff;font:800 14px/24px 'Barlow Condensed',sans-serif;text-align:center}
.au-q{font:600 9.5px/1.2 'IBM Plex Sans',sans-serif;color:#64748b;letter-spacing:.04em}
.au-img{flex:1;display:flex;align-items:center;justify-content:center;min-height:0}
.au-l{height:17px;border-bottom:1px solid #94a3b8;flex:none}
.dtbl{width:100%;border-collapse:collapse;font-size:10.2px}
.dtbl th{text-align:left;padding:4px 7px;font:700 9px/1.2 'IBM Plex Sans',sans-serif;letter-spacing:.05em;text-transform:uppercase;color:var(--navy);background:#e2e8f0}
.dtbl td{padding:2.4px 7px;border-bottom:1px solid #eef2f6;vertical-align:top;line-height:1.3}
.dtbl tr.alt td{background:#f6f8fb}
.dtbl td.c0{font:700 10px/1.3 'JetBrains Mono',monospace;color:var(--acc);width:26px}
.dtbl td.c3{font:500 9.5px/1.3 'JetBrains Mono',monospace;color:var(--navy);white-space:nowrap;width:80px}
`;

/* ───────────────────────────── JS en la página: ajuste, numeración, verificación ───────────────────────────── */
const PAGE_JS = String.raw`
(function(){
const REPORT = { warnings: [], shrunk: [] };
const over = el => el.scrollHeight > el.clientHeight + 1;
async function main(){
  await document.fonts.ready;
  await Promise.all([...document.images].map(i => i.complete ? 0 : new Promise(r => { i.onload = i.onerror = r; })));
  // texto de la ficha: si no cabe, se baja un paso la letra SOLO en esa ficha (nunca el documento)
  document.querySelectorAll('.card').forEach(c => {
    const t = c.querySelector('.htext, .ftext');
    if (!t) return;
    if (over(t)) { c.classList.add('s1'); if (over(t)) { c.classList.remove('s1'); c.classList.add('s2'); } REPORT.shrunk.push(c.dataset.anchor + (c.classList.contains('s2') ? ' (2)' : ' (1)')); }
    if (over(t)) REPORT.warnings.push(c.dataset.anchor + ': el texto no cabe en la ficha');
  });
  document.querySelectorAll('.page .pbody').forEach(b => { if (over(b)) REPORT.warnings.push('desborde vertical en ' + (b.closest('.page').dataset.title || b.closest('.page').dataset.id || 'página')); });
  const pages = [...document.querySelectorAll('.page')];
  const where = {};
  pages.forEach((p, i) => { const n = p.querySelector('.pnum'); if (n) n.textContent = i + 1; if (p.dataset.id && !where[p.dataset.id]) where[p.dataset.id] = i + 1;
    p.querySelectorAll('[data-anchor]').forEach(a => { if (!where[a.dataset.anchor]) where[a.dataset.anchor] = i + 1; }); });
  document.querySelectorAll('[data-ref]').forEach(e => { e.textContent = where[e.dataset.ref] || '—'; if (!where[e.dataset.ref]) REPORT.warnings.push('referencia sin destino: ' + e.dataset.ref); });
  // desborde horizontal: cualquier elemento fuera de la hoja hace que Chrome reduzca la página al imprimir
  pages.forEach((p, i) => { const pr = p.getBoundingClientRect(); let bad = null;
    p.querySelectorAll('*').forEach(e => { if (bad || e.closest('svg')) return; const r = e.getBoundingClientRect(); if (r.width > 0 && (r.right - pr.left > pr.width + 1 || r.left < pr.left - 1)) bad = e; });
    if (bad) REPORT.warnings.push('pág. ' + (i + 1) + ': desborde horizontal por <' + bad.tagName.toLowerCase() + ' class="' + bad.className + '">'); });
  REPORT.pages = pages.length; REPORT.where = where;
  window.__REPORT = REPORT; window.__READY = true;
}
main().catch(e => { REPORT.warnings.push('error: ' + e.message); window.__REPORT = REPORT; window.__READY = true; });
})();
`;

/* ───────────────────────────── imágenes: recorte + compresión ───────────────────────────── */
async function loadImages(browser, imgs, maxW = 1100) {
  const out = new Map();
  const pg = await browser.newPage();
  for (const im of imgs) {
    const f = path.join(MEDIA, im.src); const ext = path.extname(f).toLowerCase();
    if (!fs.existsSync(f)) { console.warn(`  ! falta ${im.src}`); continue; }
    const mime = ext === '.png' ? 'png' : ext === '.webp' ? 'webp' : ext === '.svg' ? 'svg+xml' : 'jpeg';
    const raw = `data:image/${mime};base64,${fs.readFileSync(f).toString('base64')}`;
    try {
      const r = await pg.evaluate(async (s, mw, crop) => {
        const img = new Image(); img.src = s; await img.decode();
        const W = img.naturalWidth, H = img.naturalHeight;
        const [x0, y0, x1, y1] = crop || [0, 0, 1, 1];
        const sw = (x1 - x0) * W, sh = (y1 - y0) * H;
        const k = Math.min(1, mw / sw); const c = document.createElement('canvas');
        c.width = Math.round(sw * k); c.height = Math.round(sh * k);
        const g = c.getContext('2d'); g.fillStyle = '#fff'; g.fillRect(0, 0, c.width, c.height);
        g.imageSmoothingQuality = 'high'; g.drawImage(img, x0 * W, y0 * H, sw, sh, 0, 0, c.width, c.height);
        return { uri: c.toDataURL('image/jpeg', 0.9), w: c.width, h: c.height };
      }, raw, maxW, im.crop || null);
      out.set(im.id, r);
    } catch (e) { console.warn(`  ! imagen ${im.src}: ${e.message}`); }
  }
  await pg.close();
  return out;
}

/* ───────────────────────────── borrador editorial (para generalizar a otra especialidad) ───────────────────────────── */
function draft(key, spec) {
  const data = applyV3(key, spec.dataset());
  const prefix = String((data.find(c => c.classId) || {}).classId || key).split('-')[0];
  const LIDX = lessonPhotoIndex(prefix);
  const seen = new Map(); const add = (src, topic, label) => {
    const f = path.join(MEDIA, src); if (!fs.existsSync(f) || /\.(mp4|webm|mov)$/i.test(src)) return;
    const h = crypto.createHash('md5').update(fs.readFileSync(f)).digest('hex'); if (seen.has(h)) return;
    seen.set(h, { id: path.basename(src).replace(/\.[a-z]+$/i, '').slice(0, 40), src, topic, type: 'clinica', size: 'half', title: label || '', frase: '', claves: [{ t: '', m: [0.5, 0.5, 0.08] }], conducta: '', codes: [], confunde: '', q: null, auto: false });
  };
  Object.entries(LIDX).forEach(([src, v]) => add(src, v.classId, v.label));
  ATLAS392.filter(a => a.clases.some(c => c.startsWith(prefix + '-'))).forEach(a => add(a.file, a.clases.find(c => c.startsWith(prefix + '-')), a.cap));
  const bib = path.join(MEDIA, 'biblioteca');
  if (fs.existsSync(bib)) for (const d of fs.readdirSync(bib)) for (const c of fs.readdirSync(path.join(bib, d)).filter(c => c.startsWith(prefix + '-'))) for (const f of fs.readdirSync(path.join(bib, d, c))) add(`biblioteca/${d}/${c}/${f}`, c, '');
  const topics = Object.fromEntries(data.filter(c => c.classId).map(c => [c.classId, strip(c.title).split(':')[0]]));
  const out = path.join(BOOKS, 'data', 'atlas', `${key}.draft.json`);
  fs.mkdirSync(path.dirname(out), { recursive: true });
  fs.writeFileSync(out, JSON.stringify({ libro: key, title: spec.title, prefix, topics, images: [...seen.values()], pairs: [], signos: [], discarded: [] }, null, 1));
  console.log(`  ✓ borrador: ${path.relative(REPO, out)} · ${seen.size} imágenes únicas (sin texto ni marcadores: hay que mirarlas y completarlo)`);
}

/* ───────────────────────────── principal ───────────────────────────── */
async function main() {
  const key = process.argv[2];
  const base = BB.SPECIALTIES.find(s => s.key === key);
  if (!base) { console.error(`Uso: node build_atlas.cjs <libro> [--html|--draft]\nLibros: ${BB.SPECIALTIES.map(s => s.key).join(', ')}`); process.exit(1); }
  const spec = { ...base, accent: BB.ACCENTS[key] || '#334155' };
  if (process.argv.includes('--draft')) return draft(key, spec);
  const fileTitle = key === 'saludpublica' ? 'SaludPublica' : spec.title.split(/\s+[&y]\s+|\s+/)[0].normalize('NFD').replace(/[̀-ͯ]/g, '');
  console.log(`▶ Atlas de imágenes · ${spec.title}`);
  const x = { spec, ...prepare(key, spec) };
  const noTomo = x.imgs.filter(i => !i.tomo || !i.tomo.exact).length;
  console.log(`  ${x.imgs.length} imágenes · ${x.pairs.length} pares · ${x.signos.length} signos · tomo: ${x.hasTomo ? `${x.imgs.length - noTomo} con página exacta, ${noTomo} con la página del tema` : 'NO encontrado'}`);
  const chromePath = ['C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'].find(p => fs.existsSync(p)); // como build_book.cjs
  const browser = await puppeteer.launch({ headless: 'new', args: ['--no-sandbox', '--disable-setuid-sandbox'], ...(chromePath ? { executablePath: chromePath } : {}) });
  try {
    x.img = await loadImages(browser, x.imgs);
    const html = buildHtml(x);
    const tmp = path.join(__dirname, `temp_atlas_${key}.html`);
    fs.writeFileSync(tmp, html);
    if (process.argv.includes('--html')) { console.log('  HTML:', tmp); return; }
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'load', timeout: 180000 });
    for (let i = 0; i < 300; i++) { if (await page.evaluate('window.__READY === true')) break; await new Promise(r => setTimeout(r, 200)); }
    const rep = await page.evaluate('JSON.stringify(window.__REPORT)').then(JSON.parse);
    const pdf = await page.pdf({ format: 'A4', printBackground: true, preferCSSPageSize: true, margin: { top: 0, right: 0, bottom: 0, left: 0 } });
    await page.close();
    const oi = process.argv.indexOf('--out'); const outDir = oi > 0 ? path.resolve(process.argv[oi + 1]) : OUT_DIR;
    fs.mkdirSync(outDir, { recursive: true });
    const out = path.join(outDir, `Atlas_Imagenes_${fileTitle}_2026.pdf`);
    fs.writeFileSync(out, pdf);
    fs.writeFileSync(path.join(__dirname, `temp_atlas_${key}_report.json`), JSON.stringify({ report: rep, tomo: x.imgs.map(i => ({ id: i.id, p: i.tomo && i.tomo.p, exact: i.tomo && i.tomo.exact })) }, null, 1));
    console.log(`  ✓ ${out}\n    ${rep.pages} páginas · ${(pdf.length / 1e6).toFixed(1)} MB · autoevaluación: ${x.auto.length} · QR: ${QRCode ? 'sí' : 'NO (falta npm qrcode)'}`);
    if (rep.shrunk.length) console.log(`    fichas con letra ajustada: ${rep.shrunk.join(', ')}`);
    rep.warnings.forEach(w => console.log('    ! ' + w));
  } finally { await browser.close(); }
}

if (require.main === module) main().catch(e => { console.error(e); process.exit(1); });
module.exports = { prepare };
