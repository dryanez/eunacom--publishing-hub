// Árboles de decisión de derma: los de classes/lessons/derma-NN.cjs → pathway (misma forma que classes/pathways/*_pathways.cjs)
const fs = require('fs'), path = require('path');
const D = path.join(__dirname, '..', '..', '..', 'classes', 'lessons');
const out = {};
for (const f of fs.readdirSync(D).filter(f => f.startsWith('derma-') && f.endsWith('.cjs'))) {
  const l = require(path.join(D, f));
  if (l.pathway) out[f.replace('.cjs', '')] = l.pathway;
}
module.exports = out;
