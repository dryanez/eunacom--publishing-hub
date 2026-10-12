// Lleva a out/<clase>/data.js las fotos actuales de la lección (mismos tiempos y narración),
// para luego parchar solo esos tramos con patch_class.sh. Solo toca las diapositivas «image».
//   node refresh_slides.cjs <clase>   → imprime cuántas diapositivas cambiaron
const fs = require('fs'), path = require('path');
const id = process.argv[2], F = path.join(__dirname, 'out', id, 'data.js');
global.window = {}; eval(fs.readFileSync(F, 'utf8')); const D = window.CLASS;
const lesson = require(path.join(__dirname, '..', '..', 'lessons', id + '.cjs'));
const old = D.slides.filter(s => s.type === 'image'), now = lesson.slides.filter(s => s.type === 'image');
if (old.length !== now.length) { console.error(`${id}: cambió el número de diapositivas de imagen (${old.length} → ${now.length}); no se puede parchar`); process.exit(1); }
let n = 0;
old.forEach((s, i) => { const a = JSON.stringify(s.images), b = JSON.stringify(now[i].images);
  if (a !== b) { s.images = now[i].images; s.title = now[i].title; n++; } });
fs.writeFileSync(F, 'window.CLASS = ' + JSON.stringify(D) + ';\n');
console.log(`${id}: ${n} diapositivas de imagen actualizadas`);
