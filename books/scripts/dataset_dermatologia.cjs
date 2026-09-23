/**
 * DATASET MASTER · TOMO 16: DERMATOLOGÍA
 * Colección Oficial EUNACOM 2026 · Módulo 2 Cirugía y Especialidades Quirúrgicas
 * Color Oficial: #a21caf (Magenta) · Código: DE · 16 Clases · 4 Bloques · 44 Preguntas AEE
 */

const b1 = require('./dataset_dermatologia_bloque_1.cjs');
const b2 = require('./dataset_dermatologia_bloque_2.cjs');
const b3 = require('./dataset_dermatologia_bloque_3.cjs');
const b4 = require('./dataset_dermatologia_bloque_4.cjs');

const dermatologiaClasses = [
  ...b1.bloque1,
  ...b2.bloque2,
  ...b3.bloque3,
  ...b4.bloque4
];

module.exports = {
  dermatologiaClasses,
  flow: b1.flow
};
