/**
 * ============================================================================
 * TOMO 21: SALUD PÚBLICA, EPIDEMIOLOGÍA & BIOÉTICA
 * Manual EUNACOM 2026 · Módulo 4: Salud Pública & Gestión
 * Color Temático: #166534 (Verde Sanitario / Pino Esmeralda) · Código: SP
 * 14 Clases Curriculares Oficiales · 3 Bloques Temáticos
 * 42 Preguntas Oficiales Academia Examen EUNACOM (AEE) con Solucionario Razonado
 * ============================================================================
 */

const b1 = require('./dataset_saludpublica_bloque_1.cjs');
const b2 = require('./dataset_saludpublica_bloque_2.cjs');
const b3 = require('./dataset_saludpublica_bloque_3.cjs');
const { flowSaludPublica } = require('./flow_builder.cjs');

const rawClasses = [
  ...b1.bloque1Classes,
  ...b2.bloque2Classes,
  ...b3.bloque3Classes
];

const saludpublicaClasses = rawClasses.map(c => {
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
      recTag: q.recTag || ('Banco Oficial AEE · Perfil V3 ' + (c.perfilCode || '7.01.3.001'))
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
  saludpublicaClasses,
  flow: flowSaludPublica
};
