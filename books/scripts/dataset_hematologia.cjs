/**
 * Tomo 08: Hematología & Hemostasia
 * Módulo 1: Medicina Interna — Editorial EUNACOM 2026
 * 24 Temas (8 Tier 3 de 4 páginas c/u + 16 Tier 2 de 2 páginas c/u = 64 páginas clínicas)
 * 64 Preguntas Oficiales EUNACOM con Solucionario Razonado Completo
 * Cabecera del Solucionario: Carmesí (#be123c)
 */

const b1 = require('./dataset_hematologia_bloque_1.cjs');
const b2 = require('./dataset_hematologia_bloque_2.cjs');
const b3 = require('./dataset_hematologia_bloque_3.cjs');
const b4 = require('./dataset_hematologia_bloque_4.cjs');
const b5 = require('./dataset_hematologia_bloque_5.cjs');

const rawClasses = [
  ...b1.bloque1,
  ...b2.bloque2,
  ...b3.bloque3,
  ...b4.bloque4,
  ...b5.bloque5
];

// Normalize question options format across all blocks
const hematologiaClasses = rawClasses.map(c => {
  const normQuestions = (c.questions || []).map(q => {
    let options = q.options;
    if (!options && q.opciones) {
      options = q.opciones.map(opt => {
        const id = opt.charAt(0);
        const text = opt.replace(/^[A-E]\)\s*/, '');
        return { id, text };
      });
    }
    return {
      stem: q.stem,
      options,
      correcta: q.correcta,
      explicacion: q.explicacion,
      recTag: q.recTag || 'Reconstrucción oficial EUNACOM'
    };
  });

  return {
    ...c,
    questions: normQuestions
  };
});

module.exports = {
  hematologiaClasses,
  flow: b1.flow
};
