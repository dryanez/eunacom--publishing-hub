// Derivado: árboles de decisión de las clases infecto-NN (classes/lessons/<clase>.cjs → pathway). Usado por books/scripts/anki/extract_sources.cjs
const fs = require('fs'), path = require('path');
const dir = path.join(__dirname, '..', 'lessons');
const out = {};
for (const f of fs.readdirSync(dir).filter(f => /^infecto-\d+\.cjs$/.test(f)).sort()) {
  try { const L = require(path.join(dir, f)); if (L && L.pathway) out[f.replace('.cjs', '')] = L.pathway; } catch (e) { /* clase sin cargar */ }
}
module.exports = out;
