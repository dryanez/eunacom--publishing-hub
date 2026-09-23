/**
 * Extracts exactly the 14 missing top-frequency topics for:
 * - 6 Cardiología
 * - 6 Gastroenterología
 * - 2 Respiratorio
 */

const fs = require('fs');
const path = require('path');

const cardioClasses = require('./master_cardiology_23_full_dataset.cjs').master23ClassesFullData;
const gastroClasses = require('./dataset_gastroenterologia.cjs').gastroenterologiaClasses;
const neumoClasses = require('./dataset_neumologia.cjs').neumologiaClasses;

const cardioIds = [
  'cardio-03', // FA & Flutter
  'cardio-04', // TPSV & WPW
  'cardio-05', // Bradicardias & Bloqueos AV
  'cardio-08', // SCACEST: IAM con SDST
  'cardio-20', // Crisis Hipertensivas
  'cardio-22', // Disección Aórtica Aguda
];

const gastroIds = [
  'gastro-03', // Disfagia y Trastornos Motores
  'gastro-05', // Cáncer Gástrico
  'gastro-10', // EII: Colitis Ulcerosa y Crohn
  'gastro-11', // Pólipos y Cáncer Colorrectal
  'gastro-15', // Daño Hepático Crónico e HTP
  'gastro-18', // Pancreatitis Aguda
];

const neumoIds = [
  'resp-03', // Asma Bronquial Crónica GINA
  'resp-10', // Tuberculosis Pulmonar MINSAL
];

function findClass(list, id) {
  return list.find(c => c.id === id || c.classId === id);
}

const extraTopics = [];

cardioIds.forEach(id => {
  const c = findClass(cardioClasses, id);
  if (!c) throw new Error(`Cardio class ${id} not found`);
  extraTopics.push({
    specialtyKey: 'cardiologia',
    specialtyName: 'Cardiología',
    classId: c.id,
    title: c.title,
    perfilCode: c.perfilCode,
    dx: c.dx || 'Específico',
    tx: c.tx || 'Inicial',
    seg: c.seg || 'Derivar',
    ges: c.ges || null,
    keyPoints: c.keyPoints || [],
    vignette: c.vignette || '',
    explicacion: c.explicacion || '',
    baseQuestions: (c.questions || []).map(q => ({
      stem: q.stem,
      options: q.options,
      correcta: q.correcta,
      explicacion: q.explicacion,
    })),
  });
});

gastroIds.forEach(id => {
  const c = findClass(gastroClasses, id);
  if (!c) throw new Error(`Gastro class ${id} not found`);
  extraTopics.push({
    specialtyKey: 'gastroenterologia',
    specialtyName: 'Gastroenterología',
    classId: c.id,
    title: c.title,
    perfilCode: c.perfilCode,
    dx: c.dx || 'Específico',
    tx: c.tx || 'Inicial',
    seg: c.seg || 'Derivar',
    ges: c.ges || null,
    keyPoints: c.keyPoints || [],
    vignette: c.vignette || '',
    explicacion: c.explicacion || '',
    baseQuestions: (c.questions || []).map(q => ({
      stem: q.stem,
      options: q.options,
      correcta: q.correcta,
      explicacion: q.explicacion,
    })),
  });
});

neumoIds.forEach(id => {
  const c = findClass(neumoClasses, id);
  if (!c) throw new Error(`Neumo class ${id} not found`);
  extraTopics.push({
    specialtyKey: 'neumologia',
    specialtyName: 'Respiratorio',
    classId: c.id,
    title: c.title,
    perfilCode: c.perfilCode,
    dx: c.dx || 'Específico',
    tx: c.tx || 'Inicial',
    seg: c.seg || 'Derivar',
    ges: c.ges || null,
    keyPoints: c.keyPoints || [],
    vignette: c.vignette || '',
    explicacion: c.explicacion || '',
    baseQuestions: (c.questions || []).map(q => ({
      stem: q.stem,
      options: q.options,
      correcta: q.correcta,
      explicacion: q.explicacion,
    })),
  });
});

console.log(`Successfully extracted ${extraTopics.length} extra topics:`);
extraTopics.forEach((t, i) => console.log(`${i+1}. [${t.specialtyName}] ${t.title} (${t.perfilCode})`));

const outPath = path.join(__dirname, '..', 'data', 'batch_input_weighted_extra.json');
fs.writeFileSync(outPath, JSON.stringify(extraTopics, null, 2), 'utf8');
console.log(`Saved to ${outPath}`);
