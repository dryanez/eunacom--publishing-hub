/**
 * FIG_SPEC automático: toma las imágenes de las diapositivas «image» de cada clase
 * (classes/lessons/<classId>.cjs) y las convierte en la figura del tema del libro.
 * Cada imagen lleva su referencia (credit de la clase) bajo el subrótulo.
 *
 *   FIG_FUENTES=libres (por defecto)  solo Commons / dominio público / CC / dibujos propios
 *   FIG_FUENTES=ninguna               solo las figuras escritas a mano
 *   FIG_FUENTES=todas                 incluye láminas de manuales comerciales (CTO, AMIR, Harrison…)
 *                                     → revisar derechos antes de imprimir para la venta.
 * Las entradas escritas a mano (p. ej. figspec_cardiologia.cjs) tienen prioridad.
 */
const fs = require('fs');
const path = require('path');

const MEDIA = path.join(__dirname, '..', '..', 'classes', 'media');
const LESSONS = path.join(__dirname, '..', '..', 'classes', 'lessons');
const MAX_ITEMS = 3;
// «Más imágenes» tiene rótulos generados del nombre de archivo (sin auditar) y «En movimiento» son videos
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

function autoFigSpec(data, manual = {}, mode = process.env.FIG_FUENTES || 'libres') {
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

module.exports = { autoFigSpec };
