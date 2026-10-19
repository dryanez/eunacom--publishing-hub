/**
 * Verificación de códigos Perfil V3 de Cardiología (38 temas).
 *   node books/scripts/_old_cardio/verificar_codigos_cardio.cjs
 * 1) los 53 códigos que tenían los 25 temas antiguos (respaldo /tmp/v3_topic_codes.bak.json o la lista fija de abajo)
 *    siguen asignados a algún cardio-NN; 2) v3_topic_codes y el dataset coinciden; 3) todo código existe en v3_codemap;
 * 4) cada código del tema aparece al margen de algún párrafo (v3_section_codes); 5) no quedan claves cardiologia:* ;
 * 6) las fotos del atlas apuntan a classId que existen.
 */
const fs = require('fs'), path = require('path');
const D = path.join(__dirname, '..', '..', 'data');
const TC = require(path.join(D, 'v3_topic_codes.json')), SC = require(path.join(D, 'v3_section_codes.json'));
const CM = require(path.join(D, 'v3_codemap.json'));
const DS = require('../dataset_cardiologia.cjs').cardiologiaClasses;
const ANTES = ['1.01.1.001','1.01.1.002','1.01.1.003','1.01.1.006','1.01.1.007','1.01.1.009','1.01.1.010','1.01.1.011','1.01.1.012','1.01.1.013','1.01.1.014','1.01.1.015','1.01.1.016','1.01.1.017','1.01.1.018','1.01.1.019','1.01.1.020','1.01.1.021','1.01.1.022','1.01.1.024','1.01.2.001','1.01.2.002','1.01.2.004','1.01.2.005','1.01.2.006','1.01.2.007','1.01.2.008','1.01.2.009','1.01.3.003','1.01.4.001','1.01.4.002','1.01.4.005','1.01.4.006','1.01.4.007','1.01.4.008','1.01.4.009','1.01.4.011','1.01.4.014','1.01.5.002','1.01.5.004','1.01.5.006','1.01.5.007','1.01.5.009','1.04.2.003','1.04.3.007','1.05.2.005','1.05.2.012','1.05.5.010','1.09.2.002','4.01.1.049','4.01.2.022','4.01.2.030','4.01.5.028'];
let bad = 0; const err = m => { bad++; console.log('  ✗ ' + m); };
const ids = DS.map(c => c.classId);
console.log(`Temas en el dataset: ${DS.length} (${ids[0]} … ${ids.at(-1)})`);
const asig = {}; for (const id of ids) (TC[id] ? TC[id].codes : []).forEach(c => (asig[c] = asig[c] || []).push(id));
console.log('\n1) Códigos de los 25 temas antiguos (' + ANTES.length + ')');
ANTES.forEach(c => { if (!asig[c]) err(`${c} ${CM[c] ? CM[c].name : ''} sin tema`); });
if (!ANTES.some(c => !asig[c])) console.log('  ✓ los ' + ANTES.length + ' siguen asignados');
console.log('\n2-4) Tema por tema');
for (const c of DS) {
  const t = TC[c.classId]; if (!t) { err(`${c.classId} sin entrada en v3_topic_codes`); continue; }
  const ds = (String(c.perfilCode).match(/\d\.\d{2}\.\d\.\d{3}/g) || []);
  if (ds.join() !== t.codes.join()) err(`${c.classId}: dataset ${ds.join(', ')} ≠ v3_topic_codes ${t.codes.join(', ')}`);
  t.codes.forEach(k => { if (!CM[k]) err(`${c.classId}: ${k} no existe en v3_codemap`); });
  const P = ((SC[`cardiologia|${c.classId}`] || {}).parrafos) || {};
  const margen = new Set(Object.values(P).flat());
  const sin = t.codes.filter(k => !margen.has(k));
  console.log(`  ${c.classId} ${c.topicLabel.padEnd(4)} ${t.codes.join(', ').padEnd(60)} ${sin.length ? 'sin margen: ' + sin.join(', ') : '✓ margen'}  [${c._estado || '?'}]`);
}
console.log('\n5) Claves antiguas');
const quedan = Object.keys(TC).filter(k => k.startsWith('cardiologia:')).concat(Object.keys(SC).filter(k => /^cardiologia\|\d/.test(k)));
quedan.length ? err('quedan ' + quedan.join(', ')) : console.log('  ✓ ninguna clave cardiologia:* ni cardiologia|<label>');
console.log('\n6) Atlas');
const atlas = require(path.join(D, 'atlas_fotos_verificadas.json'));
const ADD = path.join(D, 'atlas_add'); if (fs.existsSync(ADD)) fs.readdirSync(ADD).filter(f => f.endsWith('.json')).forEach(f => atlas.push(...require(path.join(ADD, f))));
atlas.filter(a => a.clases.some(k => /^cardio/.test(k))).forEach(a => a.clases.filter(k => /^cardio/.test(k)).forEach(k => {
  if (!ids.includes(k)) err(`foto ${a.file} → ${k} no existe`); else console.log(`  ✓ ${k} ← ${path.basename(a.file)}`);
}));
console.log(bad ? `\n${bad} problema(s)` : '\nTodo OK');
process.exit(bad ? 1 : 0);
