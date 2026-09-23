/**
 * TOMO 15 · OFTALMOLOGÍA — COLECCIÓN OFICIAL EUNACOM 2026
 * Módulo 2: Cirugía & Especialidades Quirúrgicas
 * 18 Clases Canónicas · 4 Bloques Temáticos · Color Corporativo #0e7490
 * 48 Preguntas Oficiales Academia Examen EUNACOM (AEE)
 */

const b1 = require('./dataset_oftalmologia_bloque_1.cjs');
const b2 = require('./dataset_oftalmologia_bloque_2.cjs');
const b3 = require('./dataset_oftalmologia_bloque_3.cjs');
const b4 = require('./dataset_oftalmologia_bloque_4.cjs');

const oftalmologiaClasses = [
  ...b1.bloque1,
  ...b2.bloque2,
  ...b3.bloque3,
  ...b4.bloque4,
];

module.exports = {
  oftalmologiaClasses,
  flow: b1.flow,
};
