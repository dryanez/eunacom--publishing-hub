/**
 * Reemplaza un tema de Cardiología por su versión reescrita (formato estándar).
 *   node books/scripts/cardio_integrar_tema.cjs <bloque 1-5> <archivo_tema.cjs> [--sec <parrafos.json>]
 * <archivo_tema.cjs> exporta el objeto del tema (mismo classId que el que reemplaza; ver cardio-14 en el bloque 2).
 * --sec escribe sus códigos al margen en books/data/v3_section_codes.json (solo quien integra; los agentes en paralelo NO).
 */
const fs = require('fs'), path = require('path');
const args = process.argv.slice(2);
const [n, entryFile] = args, si = args.indexOf('--sec');
const f = path.join(__dirname, `dataset_cardiologia_bloque_${n}.cjs`);
const src = fs.readFileSync(f, 'utf8');
const head = src.slice(0, src.indexOf(`const bloque${n} =`));
const arr = require(f)[`bloque${n}`];
const e = require(path.resolve(entryFile));
const i = arr.findIndex(c => c.classId === e.classId);
if (i < 0) { console.error(`${e.classId} no está en el bloque ${n}`); process.exit(1); }
for (const k of ['id', 'classId', 'tier', 'blockNum', 'blockName', 'topicLabel', 'title', 'perfilCode', 'contentSections', 'keyPoints', 'questions'])
  if (e[k] === undefined) { console.error(`falta el campo ${k}`); process.exit(1); }
arr[i] = e;
fs.writeFileSync(f, head + `const bloque${n} = ${JSON.stringify(arr, null, 2)};\n\nmodule.exports = { bloque${n} };\n`);
if (si >= 0) {
  const sf = path.join(__dirname, '..', 'data', 'v3_section_codes.json'), SC = JSON.parse(fs.readFileSync(sf, 'utf8'));
  SC[`cardiologia|${e.classId}`] = { parrafos: JSON.parse(fs.readFileSync(args[si + 1], 'utf8')), no_cubiertos: [], parcial: [], sugerencia: {} };
  fs.writeFileSync(sf, JSON.stringify(SC, null, 1));
}
console.log(`ok ${e.classId} (${e.topicLabel}) en el bloque ${n}`);
