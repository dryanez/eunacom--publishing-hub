/**
 * dataset_to_deck_data.cjs
 * Convierte una(s) clase(s) de un dataset_<especialidad>.cjs del libro (books/scripts/)
 * directamente al formato JSON que DeckRunner.jsx ya sabe reproducir (el mismo usado
 * por cardio_decks_data.json), sin escribir un archivo .jsx a mano por tema.
 *
 * No escribe NADA sobre el dataset del libro (books/) — es de solo lectura.
 * El único archivo nuevo que sí edita el autor es exam_patterns_<especialidad>.json,
 * que vive en classes/, no en books/.
 *
 * Uso:
 *   node dataset_to_deck_data.cjs <especialidad> <topicLabel1> [topicLabel2 ...]
 *   node dataset_to_deck_data.cjs endocrinologia 1.1 7.9
 *
 * Salida: imprime el objeto {classId: {...}} listo para mezclarse en un
 * <especialidad>_decks_data.json (o pégalo a mano la primera vez).
 */

const path = require('path');
const matcher = require('./reconstruction_matcher.cjs');

const ACCENTS = {
  gastroenterologia: '#15803d',
  endocrinologia: '#7c3aed',
  cardiologia: '#e11d48',
  infectologia: '#0284c7',
};

function stripHtml(s) {
  return String(s || '').replace(/<[^>]+>/g, '');
}

// Un primer borrador de guion de teleprompter a partir de la prosa de la sección.
// No reemplaza una revisión humana, pero deja algo hablable desde el día uno.
function notesFromParagraphs(paragraphs, opts = {}) {
  const lead = opts.lead ? opts.lead + ' ' : '';
  return lead + (paragraphs || []).map(stripHtml).join(' ');
}

function reconArray(reconstrucciones) {
  if (!reconstrucciones) return [];
  if (Array.isArray(reconstrucciones)) return reconstrucciones;
  if (typeof reconstrucciones === 'string' && !/^Sin preguntas/.test(reconstrucciones)) {
    return reconstrucciones.split('·').map(s => s.trim()).filter(Boolean);
  }
  return [];
}

/**
 * examPatterns: { [topicLabel]: { summary, occurrencesNote } } — hand-authored,
 * vive fuera de books/. Si no existe entrada para el tema, se omite la diapositiva
 * de patrón en vez de inventar una.
 */
function buildPatronSlide(cls, examPatterns) {
  const entry = examPatterns && examPatterns[cls.topicLabel];
  if (!entry) return null;
  const real = matcher.getRealQuestionsForCodes(entry.perfilCodeReal || cls.perfilCode);
  return {
    type: 'bento',
    nav: 'Patrón de Examen',
    notes: `Presta atención a este patrón: ${stripHtml(entry.summary)}`,
    title: 'El Patrón que Resuelve la Pregunta',
    subtitle: `Cómo EUNACOM pregunta este tema en la práctica — no una regla teórica, sino lo que se repite en el banco real.`,
    tiles: [
      {
        colSpan: 3,
        gridColumns: 1,
        tag: real.length ? `Confirmado en ${real.length} preguntas reales del banco` : 'Patrón identificado',
        pillBg: '#7c3aed',
        title: entry.summary,
        bullets: entry.occurrences || [],
      },
    ],
  };
}

function convertClass(cls, specialtyKey, examPatterns) {
  const accent = ACCENTS[specialtyKey] || '#0284c7';
  const slides = [];

  // Preguntas reales del banco oficial (2013-2025)
  const realQuestions = matcher.getRealQuestionsForCodes(cls.perfilCode || []);

  // 1. Portada con Códigos y Citación de Historial EUNACOM
  const badges = [
    { label: 'EUNACOM 2026', bg: '#ffe4e6', color: '#e11d48', border: '#f43f5e' },
    { label: cls.blockName || specialtyKey, bg: '#ede9fe', color: accent, border: '#c4b5fd' },
    { label: 'Perfil V3 Oficial', bg: '#dcfce7', color: '#16a34a', border: '#4ade80' },
  ];

  if (realQuestions.length > 0) {
    badges.push({
      label: `${realQuestions.length} Preguntas Reales (2013-2025)`,
      bg: '#fef3c7',
      color: '#b45309',
      border: '#f59e0b',
    });
  }

  slides.push({
    type: 'cover',
    nav: 'Portada & Códigos',
    notes: `[SLIDE 1] Bienvenidos a la clase de ${cls.title}. Código oficial Perfil V3: ${cls.perfilCode || 'No codificado'}.${realQuestions.length ? ` Este tema ha sido evaluado en ${realQuestions.length} preguntas oficiales del banco EUNACOM.` : ''}`,
    kicker: `CÓDIGO PERFIL V3: ${cls.perfilCode || 'ASOFAMECh'}`,
    badges,
    title: cls.title,
    subtitle: cls.frecuencia ? `Frecuencia: ${cls.frecuencia}` : (cls.reconstrucciones || ''),
  });

  // 2. Matriz Perfil V3 con perla de competencia legal
  let legalPearl = 'El nivel de exigencia legal determina si debes resolver de forma autónoma en APS o estabilizar y derivar oportunamente.';
  if (cls.seg && /derivar/i.test(cls.seg)) {
    legalPearl = '⚠️ ALERTA APS: Esta patología exige derivación obligatoria al nivel secundario tras la sospecha o estabilización inicial.';
  } else if (cls.seg && /completo/i.test(cls.seg)) {
    legalPearl = '✅ MANEJO AUTÓNOMO APS: Esta condición debe ser diagnosticada, tratada y seguida íntegramente por el médico general en CESFAM.';
  }

  slides.push({
    type: 'table',
    nav: 'Matriz Perfil V3',
    notes: `[SLIDE 2] Exigencia legal según Perfil de Conocimientos ASOFAMECh: Diagnóstico: ${cls.dx || 'No especificado'}, Tratamiento: ${cls.tx || 'No especificado'}, Seguimiento: ${cls.seg || 'No especificado'}.`,
    title: `Matriz de Auditoría Legal: ${cls.title}`,
    subtitle: 'Nivel de competencia médica exigible por ley en Chile (EUNACOM 2026).',
    headers: ['Código', 'Situación Clínica', 'Diagnóstico', 'Tratamiento', 'Seguimiento'],
    highlightCol: 1,
    pearl: legalPearl,
    rows: [{ highlight: true, cells: [cls.perfilCode || '-', cls.title, cls.dx || '-', cls.tx || '-', cls.seg || '-'] }],
  });

  // 3. Diapositivas por sección clínica (fisiopatología, clínica, diagnóstico)
  (cls.contentSections || []).forEach((sec, i) => {
    slides.push({
      type: 'bento',
      nav: sec.subhead.replace(/^\d+\.\s*/, '').slice(0, 40),
      notes: `[SLIDE ${3 + i}] ${notesFromParagraphs(sec.paragraphs)}`,
      title: sec.subhead,
      tiles: [{ colSpan: 3, gridColumns: 1, bullets: (sec.paragraphs || []).map(stripHtml) }],
    });
  });

  let n = 3 + (cls.contentSections || []).length;

  // 4. Tablas clínicas de alta densidad (farmacoterapia, scores, criterios)
  ['table', 'severityTable', 'treatmentTable'].forEach(key => {
    if (!cls[key]) return;
    slides.push({
      type: 'table',
      nav: cls[key].title.slice(0, 30),
      notes: `[SLIDE ${n}] ${cls[key].title}.`,
      title: cls[key].title,
      headers: cls[key].headers,
      rows: cls[key].rows.map(r => ({ cells: r })),
    });
    n++;
  });

  // 5. Diagrama de decisión clínica / Algoritmo SVG
  if (cls.diagram && cls.diagram.svg) {
    slides.push({
      type: 'figura',
      nav: 'Algoritmo',
      notes: `[SLIDE ${n}] ${cls.algoTitle || 'Algoritmo de decisión clínica oficial.'}`,
      title: cls.diagram.title || cls.algoTitle,
      svg: cls.diagram.svg,
    });
    n++;
  }

  // 6. Patrón de examen EUNACOM (Trampas frecuentes)
  const patron = buildPatronSlide(cls, examPatterns);
  if (patron) {
    patron.notes = `[SLIDE ${n}] ${patron.notes}`;
    slides.push(patron);
    n++;
  }

  // 7. Preguntas de Autoevaluación & Casos Clínicos Reales
  // A. Primero los casos del dataset estructurado
  (cls.questions || []).forEach((q, i) => {
    slides.push({
      type: 'question',
      nav: `Caso Clínico ${i + 1}`,
      badge: 'Caso Clínico de Aplicación',
      notes: `[SLIDE ${n}] Caso clínico de aplicación número ${i + 1}.`,
      number: i + 1,
      caseText: q.stem,
      question: '¿Cuál es la conducta más adecuada?',
      options: (q.options || []).map(o => ({
        id: o.id,
        text: o.text,
        isCorrect: o.id === q.correcta,
      })),
      explanation: q.explicacion,
    });
    n++;
  });

  // B. Preguntas Reales Históricas del Banco EUNACOM (hasta 2 adicionales si no están repetidas)
  const datasetStems = new Set((cls.questions || []).map(q => q.stem.slice(0, 40).toLowerCase()));
  const extraReal = realQuestions.filter(rq => !datasetStems.has((rq.stem || '').slice(0, 40).toLowerCase())).slice(0, 2);

  extraReal.forEach((rq, i) => {
    slides.push({
      type: 'question',
      nav: `Pregunta Real EUNACOM`,
      badge: rq.recTag || `EUNACOM ${rq.year || 'Oficial'}`,
      notes: `[SLIDE ${n}] Pregunta oficial del banco EUNACOM: ${rq.recTag || ''}.`,
      number: (cls.questions || []).length + i + 1,
      caseText: rq.stem,
      question: '¿Cuál es la conducta o diagnóstico correcto?',
      options: (rq.options || []).map(o => ({
        id: o.id,
        text: o.text,
        isCorrect: o.id === rq.correcta,
      })),
      explanation: rq.explicacion || 'Pregunta clasificada según el Perfil de Conocimientos ASOFAMECh.',
    });
    n++;
  });

  // 8. Resumen de Alta Retención / Reglas de Oro del Examen
  slides.push({
    type: 'bento',
    nav: 'Reglas de Oro',
    notes: `[SLIDE ${n}] Repasemos las reglas de oro de este tema para no fallar en el EUNACOM.`,
    title: 'Reglas de Oro del Examen EUNACOM',
    tiles: [{ colSpan: 3, gridColumns: 1, bullets: cls.keyPoints || [] }],
  });

  return {
    id: cls.classId,
    topicLabel: cls.topicLabel,
    title: `${specialtyKey[0].toUpperCase()}${specialtyKey.slice(1)} ${cls.topicLabel}: ${cls.title}`,
    perfilCodes: [cls.perfilCode].filter(Boolean),
    tier: cls.tier,
    realQuestionCount: realQuestions.length,
    slideCount: slides.length,
    slides,
  };
}

module.exports = { convertClass, reconArray };

if (require.main === module) {
  const fs = require('fs');
  const args = process.argv.slice(2);
  const specialty = args[0];
  const isAll = args.includes('--all');
  const shouldSave = args.includes('--save');
  const labels = args.slice(1).filter(a => !a.startsWith('--'));

  if (!specialty || (!isAll && !labels.length)) {
    console.error('Uso: node dataset_to_deck_data.cjs <especialidad> [--all] [--save] [topicLabels...]');
    console.error('Ejemplos:');
    console.error('  node dataset_to_deck_data.cjs gastroenterologia 1.1 1.2');
    console.error('  node dataset_to_deck_data.cjs gastroenterologia --all --save');
    process.exit(1);
  }

  const datasetPath = path.join(__dirname, `dataset_${specialty}.cjs`);
  if (!fs.existsSync(datasetPath)) {
    console.error(`Dataset no encontrado: ${datasetPath}`);
    process.exit(1);
  }

  const dataset = require(datasetPath);
  const key = Object.keys(dataset).find(k => Array.isArray(dataset[k]));
  const classes = dataset[key];

  let examPatterns = {};
  try {
    examPatterns = require(path.join(__dirname, '..', '..', 'classes', 'curriculum', `exam_patterns_${specialty}.json`));
  } catch (e) { /* aún no autorado — se omite la diapositiva de patrón */ }

  const targets = isAll ? classes : classes.filter(c => labels.includes(c.topicLabel));
  const out = {};

  targets.forEach(cls => {
    out[cls.classId] = convertClass(cls, specialty, examPatterns);
  });

  if (shouldSave) {
    const destDir = path.join(__dirname, '..', '..', 'classes', 'curriculum');
    const destFile = path.join(destDir, `${specialty}_decks_data.json`);
    fs.writeFileSync(destFile, JSON.stringify(out, null, 2), 'utf8');
    console.log(`\n✔ Guardadas ${Object.keys(out).length} clases en: ${destFile}`);
    console.log('Resumen de clases generadas:');
    Object.values(out).forEach(c => {
      console.log(` - [${c.id}] ${c.title} -> ${c.slideCount} slides (${c.realQuestionCount} preguntas reales)`);
    });
  } else {
    console.log(JSON.stringify(out, null, 2));
  }
}
