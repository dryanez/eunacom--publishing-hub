/**
 * reconstruction_matcher.cjs
 * Motor de vinculación oficial entre Códigos Perfil V3 y Preguntas Reales EUNACOM (2013-2025).
 *
 * Resuelve la fuente de la verdad para:
 * 1. Etiqueta 'reconstrucciones' en la cabecera de cada clase / tema.
 * 2. Cuadrícula de Historial de Preguntas Reales en la Portadilla del Bloque.
 * 3. Banco de preguntas reales por código V3.
 */

const fs = require('fs');
const path = require('path');

// Ubicaciones de búsqueda del banco consolidado
const SEARCH_PATHS = [
  path.join(__dirname, '..', 'data', 'real_questions_by_code.json'),
  path.join(__dirname, '..', '..', '..', 'eunacom-app-v2', 'book', 'scripts', 'reconstruction_classifier', 'real_questions_by_code.json'),
  path.join(__dirname, 'real_questions_by_code.json'),
];

let bankCache = null;

function loadBank() {
  if (bankCache) return bankCache;
  for (const p of SEARCH_PATHS) {
    if (fs.existsSync(p)) {
      try {
        bankCache = JSON.parse(fs.readFileSync(p, 'utf8'));
        return bankCache;
      } catch (e) {
        console.error(`[reconstruction_matcher] Error cargando ${p}:`, e.message);
      }
    }
  }
  console.warn('[reconstruction_matcher] No se encontró real_questions_by_code.json en las rutas previstas.');
  bankCache = {};
  return bankCache;
}

/**
 * Normaliza y separa una cadena de códigos V3.
 * Ejemplo: "1.04.1.013, 1.04.1.027" -> ["1.04.1.013", "1.04.1.027"]
 */
function parseCodes(rawCodes) {
  if (!rawCodes) return [];
  if (Array.isArray(rawCodes)) return rawCodes.map(s => String(s).trim()).filter(Boolean);
  return String(rawCodes)
    .split(/[,\s]+/)
    .map(s => s.trim())
    .filter(s => /^\d+\.\d+\.\d+\.\d+$/.test(s));
}

/**
 * Obtiene todas las preguntas reales asociadas a uno o más códigos Perfil V3.
 * @param {string|string[]} perfilCode - Código(s) V3 (ej: "1.04.2.006" o "1.04.1.013, 1.04.1.027")
 * @returns {Array} Array de preguntas ordenadas cronológicamente (más recientes primero)
 */
function getRealQuestionsForCodes(perfilCode) {
  const bank = loadBank();
  const codes = parseCodes(perfilCode);
  const seenKeys = new Set();
  const matched = [];

  for (const code of codes) {
    const list = bank[code] || [];
    for (const q of list) {
      const qKey = q.key || `${q.recTag}_${q.stem.slice(0, 30)}`;
      if (!seenKeys.has(qKey)) {
        seenKeys.add(qKey);
        matched.push({
          ...q,
          v3Code: code,
        });
      }
    }
  }

  // Orden cronológico: mayor año primero, luego si tiene explicación
  matched.sort((a, b) => (b.year || 0) - (a.year || 0) || (b.hasExpl ? 1 : 0) - (a.hasExpl ? 1 : 0));
  return matched;
}

/**
 * Formatea un tag corto para el encabezado o portadilla.
 * Convierte "EUNACOM Julio 2024 · Pregunta 62" a "EUNACOM Julio 2024 (Q#62)"
 */
function formatTagToCitation(recTag) {
  if (!recTag) return '';
  const m = String(recTag).match(/EUNACOM\s+([A-Za-záéíóúÁÉÍÓÚ]+)?\s*(\d{4})\s*·\s*Pregunta\s*(\d+)/i);
  if (m) {
    const mes = m[1] ? m[1].trim() + ' ' : '';
    const ano = m[2];
    const num = m[3];
    return `EUNACOM ${mes}${ano} (Q#${num})`.replace(/\s+/g, ' ');
  }
  return recTag;
}

/**
 * Genera la cadena canónica de reconstrucciones para la cabecera de la ficha del tema.
 *
 * @param {string|string[]} perfilCode - Código(s) V3
 * @param {number} maxCitations - Cantidad máxima de citas a mostrar (default: 4)
 * @returns {string} Cadena formateada para `reconstrucciones:`
 */
function getReconstruccionesString(perfilCode, maxCitations = 4) {
  const qs = getRealQuestionsForCodes(perfilCode);

  if (!qs.length) {
    return 'Sin preguntas en exámenes 2013-2025 · Foco prioritario Perfil V3 2026';
  }

  const citations = qs
    .slice(0, maxCitations)
    .map(q => formatTagToCitation(q.recTag));

  return citations.join(' · ');
}

/**
 * Extrae objetos estructurados para la sección de Historial de Preguntas de la Portadilla.
 * @param {string|string[]} perfilCode
 * @param {string} topicTitle
 */
function getHistoryItemsForTopic(perfilCode, topicTitle) {
  const qs = getRealQuestionsForCodes(perfilCode);
  return qs.slice(0, 6).map(q => {
    const citation = formatTagToCitation(q.recTag);
    return {
      tag: citation,
      text: topicTitle,
      year: q.year || 0,
      recTag: q.recTag,
      stem: q.stem,
      key: q.key,
      code: q.v3Code,
    };
  });
}

module.exports = {
  loadBank,
  parseCodes,
  getRealQuestionsForCodes,
  formatTagToCitation,
  getReconstruccionesString,
  getHistoryItemsForTopic,
};
