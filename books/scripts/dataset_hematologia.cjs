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

const aeeQuestions = require('./aee_formatted_hematologia.json');

// Normalize question options format across all blocks and wire Banco Oficial AEE
const hematologiaClasses = rawClasses.map(c => {
  const aeeQs = aeeQuestions[c.topicLabel];
  const finalQuestions = (aeeQs && aeeQs.length > 0) ? aeeQs : (c.questions || []).map(q => {
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
      recTag: `Banco Oficial AEE · Perfil V3 ${c.perfilCode || ''}`
    };
  });

  const vignetteText = typeof c.vignette === 'object' && c.vignette !== null 
    ? (c.vignette.text || '') 
    : (c.vignette || '');
    
  const explicacionText = c.explicacion 
    || (typeof c.vignette === 'object' && c.vignette !== null ? (c.vignette.conducta || '') : '');

  return {
    ...c,
    vignette: vignetteText,
    explicacion: explicacionText,
    questions: finalQuestions
  };
});

module.exports = {
  hematologiaClasses,
  flow: b1.flow
};
