// Ayuda para pasar las fotos de las diapositivas «Así se ve» (type image, sin .mp4) a «fotos en contexto»
// (photo/photos en el ítem donde la voz las nombra; ver LESSON_STANDARD.md).
//   node classes/scripts/fotos_contexto_sugerir.cjs <clase> [<clase>…]   → por cada foto, los 3 ítems candidatos
//   node classes/scripts/fotos_contexto_sugerir.cjs --pendientes [prefijo]  → clases que aún tienen galerías de fotos
// Solo sugiere: el agente decide el ítem, escribe `photo`, ajusta el `say` («mira…») y borra la galería vacía.
const fs = require('fs'), path = require('path');
const LES = path.join(__dirname, '..', 'lessons');
const norm = s => (s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, '');
const STOP = new Set('de la el los las del en con por para que una uno un y o a al se su sus es son como mas muy sin ver aqui esta este esto asi'.split(' '));
const words = s => norm(s).split(/[^a-z0-9ñ]+/).filter(w => w.length > 2 && !STOP.has(w));
const isPhotoGallery = s => s.type === 'image' && !JSON.stringify(s).includes('.mp4');

function items(lesson) {
  const out = [];
  lesson.slides.forEach((s, si) => {
    if (s.type === 'points') (s.cards || []).forEach((c, ci) => (c.items || []).forEach((it, ii) =>
      out.push({ ref: `slide ${si} «${s.title}» · tarjeta ${ci} «${c.title || ''}» · ítem ${ii} «${it.t}»`, text: [s.title, c.title, it.t, it.d, it.say].join(' '), has: !!(it.photo || it.photos) })));
    if (s.type === 'flow') (s.steps || []).forEach((st, k) =>
      out.push({ ref: `slide ${si} «${s.title}» · paso ${k} «${st.t || st.label || ''}»`, text: [s.title, st.t, st.d, st.say].join(' '), has: !!(st.photo || st.photos) }));
    if (s.type === 'table') (s.rows || []).forEach((r, k) =>
      out.push({ ref: `slide ${si} «${s.title}» · fila ${k}`, text: [s.title, JSON.stringify(r)].join(' '), has: !!(r.photo || r.photos) }));
  });
  return out;
}

function suggest(id) {
  const lesson = require(path.join(LES, id + '.cjs'));
  const gal = lesson.slides.map((s, si) => [s, si]).filter(([s]) => isPhotoGallery(s));
  if (!gal.length) { console.log(`${id}: sin galerías de fotos`); return; }
  const its = items(lesson);
  for (const [s, si] of gal) {
    console.log(`\n${id} · slide ${si} «${s.title}» (${(s.images || []).length} fotos)`);
    (s.images || []).forEach((im, k) => {
      const q = new Set(words([im.label, im.caption, s.title, (s.steps || [])[k] && s.steps[k].say, s.say].join(' ')));
      const scored = its.map(it => ({ it, n: words(it.text).filter(w => q.has(w)).length })).filter(x => x.n).sort((a, b) => b.n - a.n).slice(0, 3);
      console.log(`  foto ${k}: ${im.src}  [${im.label || ''}]`);
      scored.forEach(x => console.log(`     ${x.n} · ${x.it.ref}${x.it.has ? ' (ya tiene foto)' : ''}`));
      if (!scored.length) console.log('     (sin candidato: agrega un ítem breve donde la voz la nombre, o deja la galería)');
    });
  }
}

const args = process.argv.slice(2);
if (args[0] === '--pendientes') {
  const pre = args[1] || '';
  const ids = fs.readdirSync(LES).filter(f => f.endsWith('.cjs') && f.startsWith(pre)).map(f => f.slice(0, -4)).sort();
  const pend = ids.filter(id => { try { return require(path.join(LES, id + '.cjs')).slides.some(isPhotoGallery); } catch (e) { return false; } });
  console.log(`${pend.length} clases con galerías de fotos: ${pend.join(' ')}`);
} else args.forEach(suggest);
