// Imagen de las preguntas reales: el banco (books/data/real_questions_by_code.json) puede traer
// q.imagen = { src: 'biblioteca/_preguntas_reales/…jpg', credit, nota } (src relativo a classes/media).
// attachQuizImages(slides) le pone s.image a cada diapositiva quiz (guiones) o question (decks_data)
// cuya etiqueta «EUNACOM <Mes> <Año> · Pregunta N» tenga imagen en el banco. Se muestra con la nota «Imagen representativa».
const fs = require('fs');
const path = require('path');
const ROOT = path.join(__dirname, '..', '..');
let BY_TAG = null;
function byTag() {
  if (BY_TAG) return BY_TAG;
  BY_TAG = {};
  try {
    const bank = JSON.parse(fs.readFileSync(path.join(ROOT, 'books', 'data', 'real_questions_by_code.json'), 'utf8'));
    for (const qs of Object.values(bank)) for (const q of qs) if (q.recTag && !BY_TAG[q.recTag]) BY_TAG[q.recTag] = q;
  } catch (e) { /* sin banco: sin imágenes */ }
  return BY_TAG;
}
const TAG = /EUNACOM [A-Za-zé]+ \d{4} · Pregunta \d+/;
function imageForTag(tag) {
  const q = tag && byTag()[tag];
  const im = q && q.imagen;
  if (!im || !im.src || !fs.existsSync(path.join(ROOT, 'classes', 'media', im.src))) return null;
  return { src: im.src, credit: im.credit || '', nota: 'Imagen representativa', caption: 'Imagen representativa' };
}
function attachQuizImages(slides) {
  (slides || []).forEach(s => {
    if (!s || (s.type !== 'quiz' && s.type !== 'question') || s.image) return;
    const m = String(s.title || s.badge || s.notes || '').match(TAG);
    const im = m && imageForTag(m[0]);
    if (im) s.image = im;
  });
  return slides;
}
module.exports = { attachQuizImages, imageForTag };
