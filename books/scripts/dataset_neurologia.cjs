/**
 * ============================================================================
 * TOMO 10: NEUROLOGÍA & GERIATRÍA
 * Manual EUNACOM 2026 · Módulo 1: Medicina Interna
 * Dataset Maestro Consolidado (Bloques 01 a 05)
 * 24 Temas Curriculares (Tier 3 = 4 páginas, Tier 2 = 2-3 páginas)
 * 72 Preguntas Oficiales AEE con Solucionario Razonado Completo
 * Cabecera y Color Temático: Púrpura (#6d28d9)
 * ============================================================================
 */

const b1 = require('./dataset_neurologia_bloque_1.cjs');
const b2 = require('./dataset_neurologia_bloque_2.cjs');
const b3 = require('./dataset_neurologia_bloque_3.cjs');
const b4 = require('./dataset_neurologia_bloque_4.cjs');
const b5 = require('./dataset_neurologia_bloque_5.cjs');

// Preguntas Oficiales AEE extraídas directamente de questionDB (6.000+ preguntas)
let aeeQuestions = {};
try {
  aeeQuestions = require('./aee_formatted_neurologia.json');
} catch (e) {
  console.warn('aee_formatted_neurologia.json not loaded, falling back to embedded questions');
}

const rawClasses = [
  ...b1.bloque1Classes,
  ...b2.bloque2Classes,
  ...b3.bloque3Classes,
  ...b4.bloque4Classes,
  ...b5.bloque5Classes
];

// Normalización de preguntas, casos clínicos (vignette/conducta) y diagramas vectoriales
const neurologiaClasses = rawClasses.map(c => {
  // Inyectar preguntas del Banco Oficial AEE si están disponibles para este tema
  const topicAee = aeeQuestions[c.topicLabel];
  const sourceQuestions = (topicAee && topicAee.length > 0) ? topicAee : (c.questions || []);

  // Normalizar opciones de preguntas A-E
  const normQuestions = sourceQuestions.map(q => {
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
      recTag: q.recTag || `Banco Oficial AEE · Perfil V3 ${c.perfilCode || '1.10.1'}`
    };
  });

  // Normalizar texto de viñeta clínica y conducta oficial (prevención de [object Object] y undefined)
  const vignetteText = typeof c.vignette === 'object' && c.vignette !== null
    ? (c.vignette.text || '')
    : (c.vignette || '');

  const explicacionText = c.explicacion
    || (typeof c.vignette === 'object' && c.vignette !== null ? (c.vignette.conducta || '') : '');

  const vignetteObj = typeof c.vignette === 'object' && c.vignette !== null
    ? c.vignette
    : {
        title: 'Caso Clínico Tipo EUNACOM',
        text: vignetteText,
        conducta: explicacionText
      };

  // Normalizar diagrama SVG para compatibilidad total con renderizadores web y de libro
  let diagram = c.diagram;
  if (typeof diagram === 'string') {
    diagram = {
      title: c.algoTitle || c.title,
      svg: c.diagram,
      toString() { return this.svg; }
    };
  }

  return {
    ...c,
    vignette: vignetteObj,
    vignetteText,
    explicacion: explicacionText,
    diagram,
    questions: normQuestions
  };
});

module.exports = {
  neurologiaClasses,
  flow: b1.flow
};
