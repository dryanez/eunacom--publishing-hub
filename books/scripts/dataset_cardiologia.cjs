/**
 * Tomo 01: Cardiología
 * Módulo 1: Medicina Interna — Editorial EUNACOM 2026
 * 38 temas en 5 bloques (classId cardio-01 … cardio-38), mismo formato que los otros tomos (p. ej. dataset_endocrinologia.cjs).
 * Reemplaza a master_cardiology_23_full_dataset.cjs + dataset_bloque_1..5.cjs (25 temas; respaldo en _old_cardio/).
 */

const b1 = require('./dataset_cardiologia_bloque_1.cjs');
const b2 = require('./dataset_cardiologia_bloque_2.cjs');
const b3 = require('./dataset_cardiologia_bloque_3.cjs');
const b4 = require('./dataset_cardiologia_bloque_4.cjs');
const b5 = require('./dataset_cardiologia_bloque_5.cjs');

const rawClasses = [
  ...b1.bloque1,
  ...b2.bloque2,
  ...b3.bloque3,
  ...b4.bloque4,
  ...b5.bloque5
];

// Normaliza el formato de alternativas (options [{id,text}] u opciones ['A) …'])
const cardiologiaClasses = rawClasses.map(c => {
  const normQuestions = (c.questions || []).map(q => {
    let options = q.options;
    if (!options && q.opciones) {
      options = q.opciones.map(opt => ({ id: opt.charAt(0), text: opt.replace(/^[A-E]\)\s*/, '') }));
    }
    return {
      stem: q.stem,
      options,
      correcta: q.correcta,
      explicacion: q.explicacion,
      recTag: q.recTag || 'Reconstrucción oficial EUNACOM'
    };
  });
  return { ...c, questions: normQuestions };
});

module.exports = { cardiologiaClasses };
