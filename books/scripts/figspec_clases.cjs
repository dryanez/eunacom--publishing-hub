/**
 * FIG_SPEC automático: toma las imágenes de las diapositivas «image» de cada clase
 * (classes/lessons/<classId>.cjs) y las convierte en la figura del tema del libro.
 * Cada imagen lleva su referencia (credit de la clase) bajo el subrótulo.
 *
 *   FIG_FUENTES=libres                solo Commons / dominio público / CC / dibujos propios
 *   FIG_FUENTES=ninguna               solo las figuras escritas a mano
 *   FIG_FUENTES=todas (por defecto)   incluye láminas de manuales comerciales (CTO, AMIR, Harrison…)
 *                                     → revisar derechos antes de imprimir para la venta.
 * Las entradas escritas a mano (p. ej. figspec_cardiologia.cjs) tienen prioridad.
 */
const fs = require('fs');
const path = require('path');

const MEDIA = path.join(__dirname, '..', '..', 'classes', 'media');
const LESSONS = path.join(__dirname, '..', '..', 'classes', 'lessons');
const MAX_ITEMS = 3;
// «En movimiento» son videos; «Más imágenes» entra después de «Así se ve» (rótulos auditados oct-2026)
const SKIP_KICKER = /Más imágenes|En movimiento/i;

const LIBRE = /Wikimedia Commons|Public domain|Dominio público|CC0|CC BY|Dibujo propio|Animación propia|CDC|MINSAL|Blausen/i;

function cleanCredit(s) {
  return (s || '')
    .replace(/\s*Author info.*$/i, '')
    .replace(/\s+-\s*Reusing images.*$/i, '')
    .replace(/\s+/g, ' ')
    .trim();
}

function lessonImages(classId) {
  const f = path.join(LESSONS, `${classId}.cjs`);
  if (!fs.existsSync(f)) return null;
  const L = require(f);
  const seen = new Set();
  const out = [];
  let first = null;
  for (const s of L.slides || []) {
    if (s.type !== 'image' || SKIP_KICKER.test(s.kicker || '')) continue;
    for (const im of s.images || []) {
      if (!im.src || /\.(mp4|webm)$/i.test(im.src) || seen.has(im.src)) continue;
      const p = path.join(MEDIA, im.src);
      if (!fs.existsSync(p)) continue;
      seen.add(im.src);
      if (!first) first = s;
      out.push({ src: im.src, path: p, label: im.label || '', credit: cleanCredit(im.credit) });
    }
  }
  return { slide: first, images: out };
}

function autoFigSpec(data, manual = {}, mode = process.env.FIG_FUENTES || 'todas') {
  const spec = { ...manual };
  if (mode === 'ninguna') return spec;
  for (const c of data) {
    if (!c.classId || spec[c.topicLabel]) continue;
    const r = lessonImages(c.classId);
    if (!r) continue;
    const imgs = r.images.filter(im => mode === 'todas' || LIBRE.test(im.credit)).slice(0, MAX_ITEMS);
    if (!imgs.length) continue;
    const title = r.slide && r.slide.title ? r.slide.title : c.title;
    spec[c.topicLabel] = {
      mode: imgs.length === 1 ? 'wide' : 'full',
      desc: `${title}.`,
      items: imgs.map(im => ({ file: im.src, path: im.path, cap: im.label, src: im.credit })),
    };
  }
  return spec;
}

/* ── referencias en el texto: «(ver Imagen 9.4A)» en el párrafo que habla de esa imagen ── */
const norm = t => (t || '').normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/<[^>]+>/g, ' ').toLowerCase();
const STOP = new Set(['imagen', 'imagenes', 'esquema', 'vista', 'otra', 'tipico', 'tipica', 'signo', 'clinica', 'clinico', 'inicial',
  'ecografia', 'endoscopia', 'histologia', 'radiografia', 'aspecto', 'patron', 'normal', 'sobre', 'entre', 'desde']);
const words = t => norm(t).split(/[^a-z0-9ñ]+/).filter(w => w.length >= 5 && !STOP.has(w));
const letter = i => String.fromCharCode(65 + i);

function withFigRefs(c, spec) {
  if (!spec || !spec.items || !c.contentSections) return c.contentSections;
  const secs = c.contentSections.map(s => ({ ...s, paragraphs: [...(s.paragraphs || [s.text])] }));
  const paras = [];
  secs.forEach((s, si) => s.paragraphs.forEach((p, pi) => paras.push({ si, pi, w: new Set(words(p)) })));
  if (!paras.length) return c.contentSections;
  const multi = spec.items.length > 1;
  const hits = new Map();
  spec.items.forEach((it, i) => {
    const kw = words(it.cap);
    let best = null, score = 0;
    paras.forEach(pp => { const n = kw.filter(w => pp.w.has(w)).length; if (n > score) { score = n; best = pp; } });
    const at = best || paras[0];
    const k = `${at.si}:${at.pi}`;
    if (!hits.has(k)) hits.set(k, { at, ls: [] });
    hits.get(k).ls.push(multi ? letter(i) : '');
  });
  for (const { at, ls } of hits.values()) {
    const tag = ls[0] === '' ? '' : (ls.length === 1 ? ls[0] : ls.slice(0, -1).join(', ') + ' y ' + ls[ls.length - 1]);
    secs[at.si].paragraphs[at.pi] += ` <span class="figref">(ver Imagen ${c.topicLabel}${tag})</span>`;
  }
  return secs;
}

module.exports = { autoFigSpec, withFigRefs };
