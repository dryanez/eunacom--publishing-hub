/**
 * ============================================================================
 * TOMO 18: PEDIATRÍA GENERAL & NEONATOLOGÍA
 * Manual EUNACOM 2026 · Módulo 3: Materno - Infantil
 * Color Temático: #c2410c (Naranja Óxido) · Código: PE
 * 22 Clases Curriculares Oficiales · 4 Bloques Temáticos
 * 60 Preguntas Oficiales Academia Examen EUNACOM (AEE) con Solucionario Razonado
 * ============================================================================
 */

const b1 = require('./dataset_pediatria_bloque_1.cjs');
const b2 = require('./dataset_pediatria_bloque_2.cjs');
const b3 = require('./dataset_pediatria_bloque_3.cjs');
const b4 = require('./dataset_pediatria_bloque_4.cjs');
const { flowPediatria } = require('./flow_builder.cjs');

const rawClasses = [
  ...b1.bloque1Classes,
  ...b2.bloque2Classes,
  ...b3.bloque3Classes,
  ...b4.bloque4Classes
];

const pediatriaClasses = rawClasses.map(c => {
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
      recTag: q.recTag || ('Banco Oficial AEE · Perfil V3 ' + (c.perfilCode || '2.01.1.001'))
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
    questions: normQuestions
  };
});

module.exports = {
  pediatriaClasses,
  flow: flowPediatria
};
