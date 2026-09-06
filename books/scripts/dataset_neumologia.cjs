/**
 * DATASET MAESTRO DE RESPIRATORIO & NEUMOLOGÍA · EUNACOM 2026
 * Cobertura 100% de los 52 códigos oficiales del Perfil V3 (ASOFAMECh)
 * 5 Bloques Clínicos Jerárquicos · 24 Clases Canónicas
 */

const b1 = require('./dataset_neumologia_bloque_1.cjs');
const b2 = require('./dataset_neumologia_bloque_2.cjs');
const b3 = require('./dataset_neumologia_bloque_3.cjs');
const b4 = require('./dataset_neumologia_bloque_4.cjs');
const b5 = require('./dataset_neumologia_bloque_5.cjs');

const neumologiaClasses = [
  ...b1.bloque1,
  ...b2.bloque2,
  ...b3.bloque3,
  ...b4.bloque4,
  ...b5.bloque5,
];

module.exports = {
  neumologiaClasses,
  flow: b1.flow,
};
