/**
 * Script to extract 9 top representative topics from each of the 10 specialties of Module 1.
 * Partitions them into 5 balanced batches (18 topics each) for parallel subagents.
 */

const fs = require('fs');
const path = require('path');

const loaders = {
  cardiologia: () => require('./master_cardiology_23_full_dataset.cjs').master23ClassesFullData,
  infectologia: () => require('./dataset_infectologia.cjs').infectologiaClasses,
  gastroenterologia: () => require('./dataset_gastroenterologia.cjs').gastroenterologiaClasses,
  neumologia: () => require('./dataset_neumologia.cjs').neumologiaClasses,
  nefrologia: () => require('./dataset_nefrologia.cjs').nefrologiaClasses,
  diabetes: () => require('./dataset_diabetes.cjs').diabetesClasses,
  endocrinologia: () => require('./dataset_endocrinologia.cjs').endocrinologiaClasses,
  hematologia: () => require('./dataset_hematologia.cjs').hematologiaClasses,
  reumatologia: () => require('./dataset_reumatologia.cjs').reumatologiaClasses,
  neurologia: () => require('./dataset_neurologia.cjs').neurologiaClasses,
};

const specMeta = {
  cardiologia: { name: 'Cardiología', codePrefix: '1.01' },
  infectologia: { name: 'Infectología', codePrefix: '1.04' },
  gastroenterologia: { name: 'Gastroenterología', codePrefix: '1.06' },
  neumologia: { name: 'Respiratorio', codePrefix: '1.05' },
  nefrologia: { name: 'Nefrología', codePrefix: '1.09' },
  diabetes: { name: 'Diabetes y Nutrición', codePrefix: '1.02' },
  endocrinologia: { name: 'Endocrinología', codePrefix: '1.03' },
  hematologia: { name: 'Hematología', codePrefix: '1.08' },
  reumatologia: { name: 'Reumatología', codePrefix: '1.11' },
  neurologia: { name: 'Neurología y Geriatría', codePrefix: '1.10' },
};

function select9Topics(specKey) {
  const classes = loaders[specKey]();
  const validClasses = classes.filter(c => c.perfilCode && c.title);

  const byBlock = {};
  validClasses.forEach(c => {
    const b = c.blockNum || 1;
    if (!byBlock[b]) byBlock[b] = [];
    byBlock[b].push(c);
  });

  const selected = [];
  const blockKeys = Object.keys(byBlock).sort((a, b) => a - b);
  
  let round = 0;
  while (selected.length < 9 && round < 5) {
    for (const b of blockKeys) {
      if (selected.length >= 9) break;
      const candidates = byBlock[b];
      if (candidates && candidates[round]) {
        selected.push(candidates[round]);
      }
    }
    round++;
  }

  if (selected.length < 9) {
    for (const c of validClasses) {
      if (!selected.some(s => s.id === c.id)) {
        selected.push(c);
        if (selected.length === 9) break;
      }
    }
  }

  return selected.slice(0, 9).map(c => ({
    specialtyKey: specKey,
    specialtyName: specMeta[specKey].name,
    classId: c.id || c.classId,
    title: c.title,
    perfilCode: c.perfilCode,
    dx: c.dx || 'Específico',
    tx: c.tx || 'Inicial',
    seg: c.seg || 'Derivar',
    ges: c.ges || null,
    tier: c.tier || 2,
    keyPoints: c.keyPoints || [],
    vignette: c.vignette || '',
    explicacion: c.explicacion || '',
    baseQuestions: (c.questions || []).map(q => ({
      stem: q.stem,
      options: q.options,
      correcta: q.correcta,
      explicacion: q.explicacion,
    })),
  }));
}

const allExtracted = {};
for (const spec of Object.keys(loaders)) {
  const sel = select9Topics(spec);
  allExtracted[spec] = sel;
  console.log(`${specMeta[spec].name}: selected ${sel.length} topics`);
}

// Prepare 5 balanced batches (18 topics each = 90 total)
const batch1 = [...allExtracted.cardiologia, ...allExtracted.infectologia];
const batch2 = [...allExtracted.gastroenterologia, ...allExtracted.neumologia];
const batch3 = [...allExtracted.nefrologia, ...allExtracted.diabetes];
const batch4 = [...allExtracted.endocrinologia, ...allExtracted.hematologia];
const batch5 = [...allExtracted.reumatologia, ...allExtracted.neurologia];

const dataDir = path.join(__dirname, '..', 'data');
fs.writeFileSync(path.join(dataDir, 'batch_input_1.json'), JSON.stringify(batch1, null, 2), 'utf8');
fs.writeFileSync(path.join(dataDir, 'batch_input_2.json'), JSON.stringify(batch2, null, 2), 'utf8');
fs.writeFileSync(path.join(dataDir, 'batch_input_3.json'), JSON.stringify(batch3, null, 2), 'utf8');
fs.writeFileSync(path.join(dataDir, 'batch_input_4.json'), JSON.stringify(batch4, null, 2), 'utf8');
fs.writeFileSync(path.join(dataDir, 'batch_input_5.json'), JSON.stringify(batch5, null, 2), 'utf8');

console.log(`Saved batch_input_1: ${batch1.length} topics (Cardiología + Infectología)`);
console.log(`Saved batch_input_2: ${batch2.length} topics (Gastroenterología + Respiratorio)`);
console.log(`Saved batch_input_3: ${batch3.length} topics (Nefrología + Diabetes)`);
console.log(`Saved batch_input_4: ${batch4.length} topics (Endocrinología + Hematología)`);
console.log(`Saved batch_input_5: ${batch5.length} topics (Reumatología + Neurología)`);
console.log(`TOTAL TOPICS: ${batch1.length + batch2.length + batch3.length + batch4.length + batch5.length}`);
