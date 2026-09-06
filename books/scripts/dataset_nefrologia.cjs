/**
 * DATASET MASTER · Tomo 05: Nefrología
 * EUNACOM 2026 · Colección Oficial · Módulo 1 Medicina Interna
 * Arquitectura de Tiers Dinámicos:
 *  - Tier 3 (4 páginas · 2 doble páginas): Fisiopatología, Algoritmo, Tabla diagnóstica, Tabla de rescate escalonado, Caso clínico razonado y 4 Preguntas Oficiales
 *  - Tier 2 (2 páginas · 1 doble página): Algoritmo diagnóstico, Contenido, Tabla diferencial, Caso clínico y 2 Preguntas Oficiales
 *  - Tier 1 (2 páginas · 1 doble página concisa): Algoritmo de decisión, Tabla comparativa, Caso clínico y 2 Preguntas Oficiales
 */

const { bloque1 } = require('./dataset_nefrologia_bloque_1.cjs');
const { bloque2 } = require('./dataset_nefrologia_bloque_2.cjs');
const { bloque3 } = require('./dataset_nefrologia_bloque_3.cjs');
const { bloque4 } = require('./dataset_nefrologia_bloque_4.cjs');
const { bloque5 } = require('./dataset_nefrologia_bloque_5.cjs');

const nefrologiaClasses = [
  ...bloque1,
  ...bloque2,
  ...bloque3,
  ...bloque4,
  ...bloque5,
];

console.log(`[DATASET NEFROLOGÍA] Cargados ${nefrologiaClasses.length} temas en 5 bloques:`);
console.log(` - Bloque 1: ${bloque1.length} temas`);
console.log(` - Bloque 2: ${bloque2.length} temas`);
console.log(` - Bloque 3: ${bloque3.length} temas`);
console.log(` - Bloque 4: ${bloque4.length} temas`);
console.log(` - Bloque 5: ${bloque5.length} temas`);
const t3Count = nefrologiaClasses.filter(c => c.tier === 3).length;
const t2Count = nefrologiaClasses.filter(c => c.tier === 2).length;
const t1Count = nefrologiaClasses.filter(c => c.tier === 1).length;
console.log(` - Distribución de Tiers: Tier 3 = ${t3Count} (4 páginas c/u), Tier 2 = ${t2Count} (2 páginas), Tier 1 = ${t1Count} (2 páginas)`);

module.exports = { nefrologiaClasses };
