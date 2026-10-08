// Tramos de un video de clase ya hecho: fotos (a parchar), clips (tapar créditos) y preguntas sobrantes (a cortar).
//   node seg_info.cjs <clase>  → JSON {photos:[[a,b]], clips:[[a,b]], cut:[[a,b]], total}
const fs = require('fs'), path = require('path');
const id = process.argv[2]; global.window = {};
eval(fs.readFileSync(path.join(__dirname, 'out', id, 'data.js'), 'utf8'));
const D = window.CLASS, B = D.beats, R = { photos: [], clips: [], cut: [], total: D.total }, seen = new Set();
const span = si => { const bs = B.filter(b => b.slide === si); return [bs[0].t0, bs[bs.length - 1].t0 + bs[bs.length - 1].dur]; };
D.slides.forEach((s, si) => {
  if (!B.some(b => b.slide === si)) return;
  if (s.type === 'image') (s.images.some(i => D.media[i.src]) ? R.clips : R.photos).push(span(si));
  if (s.type === 'quiz') { const k = /caso/i.test(s.kicker || '') ? 'caso' : 'pregunta'; if (seen.has(k)) R.cut.push(span(si)); seen.add(k); }
});
console.log(JSON.stringify(R));
