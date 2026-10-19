// Imagen de una pregunta real en los libros (PDF). El banco (books/data/real_questions_by_code.json) puede traer
// q.imagen = { src: 'biblioteca/_preguntas_reales/…jpg', credit, nota }, con src relativo a classes/media.
// qImageHtml(q) → <figure class="q-img"> con la imagen incrustada y la nota «Imagen representativa» en letra chica
// (o '' si la pregunta no tiene imagen). Busca por q.imagen o, si no viene, por la etiqueta (recTag o texto con
// «EUNACOM <Mes> <Año> · Pregunta N»).
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..', '..');
const TAG = /EUNACOM [A-Za-zé]+ \d{4} · Pregunta \d+/;
let BY_TAG = null;
function byTag() {
  if (BY_TAG) return BY_TAG;
  BY_TAG = {};
  try {
    const bank = JSON.parse(fs.readFileSync(path.join(ROOT, 'books', 'data', 'real_questions_by_code.json'), 'utf8'));
    for (const qs of Object.values(bank)) for (const q of qs) if (q.recTag && !BY_TAG[q.recTag]) BY_TAG[q.recTag] = q;
  } catch (e) { /* sin banco */ }
  return BY_TAG;
}
function imageOf(q) {
  if (!q) return null;
  if (q.imagen && q.imagen.src) return q.imagen;
  const m = String(q.recTag || q.tag || '').match(TAG) || String(q.explicacion || q.explanation || '').match(TAG);
  const b = m && byTag()[m[0]];
  return b && b.imagen && b.imagen.src ? b.imagen : null;
}
const CACHE = {};
function qImageHtml(q, cls = 'q-img') {
  const im = imageOf(q);
  if (!im) return '';
  const file = path.join(ROOT, 'classes', 'media', im.src);
  if (!fs.existsSync(file)) return '';
  if (!CACHE[file]) {
    const ext = path.extname(file).toLowerCase();
    const mime = ext === '.png' ? 'image/png' : ext === '.svg' ? 'image/svg+xml' : 'image/jpeg';
    CACHE[file] = `data:${mime};base64,${fs.readFileSync(file).toString('base64')}`;
  }
  return `<figure class="${cls}"><img src="${CACHE[file]}" alt=""><figcaption>Imagen representativa${im.credit ? ' · ' + String(im.credit).replace(/</g, '&lt;') : ''}</figcaption></figure>`;
}
// CSS mínimo para cualquier libro
const Q_IMG_CSS = `.q-img{margin:4px 0 6px;break-inside:avoid;text-align:center}.q-img img{max-width:62%;max-height:58mm;object-fit:contain;border:1px solid #e2e8f0;border-radius:3px}.q-img figcaption{font:400 6.5px/1.2 'IBM Plex Sans',sans-serif;color:#94a3b8;margin-top:2px}`;
module.exports = { qImageHtml, imageOf, Q_IMG_CSS };
