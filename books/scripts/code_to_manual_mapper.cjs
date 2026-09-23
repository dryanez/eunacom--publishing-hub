/**
 * code_to_manual_mapper.cjs
 * Módulo de enlace curricular oficial entre Códigos Perfil V3 y los Manuales de Estudio AEE.
 *
 * Mapea cada código clínico a:
 * - Tomo (01 al 21) y Especialidad
 * - Tema / Clase específica del manual
 * - Número de página de inicio en el libro de texto
 */

const fs = require('fs');
const path = require('path');

const SPECIALTIES = [
  { key: 'cardiologia', ch: '01', title: 'Cardiología', file: 'master_cardiology_23_full_dataset.cjs', prop: 'master23ClassesFullData' },
  { key: 'infectologia', ch: '02', title: 'Infectología', file: 'dataset_infectologia.cjs', prop: 'infectologiaClasses' },
  { key: 'gastroenterologia', ch: '03', title: 'Gastroenterología', file: 'dataset_gastroenterologia.cjs', prop: 'gastroenterologiaClasses' },
  { key: 'neumologia', ch: '04', title: 'Respiratorio', file: 'dataset_neumologia.cjs', prop: 'neumologiaClasses' },
  { key: 'nefrologia', ch: '05', title: 'Nefrología', file: 'dataset_nefrologia.cjs', prop: 'nefrologiaClasses' },
  { key: 'diabetes', ch: '06', title: 'Diabetes Mellitus', file: 'dataset_diabetes.cjs', prop: 'diabetesClasses' },
  { key: 'endocrinologia', ch: '07', title: 'Endocrinología', file: 'dataset_endocrinologia.cjs', prop: 'endocrinologiaClasses' },
  { key: 'hematologia', ch: '08', title: 'Hematología', file: 'dataset_hematologia.cjs', prop: 'hematologiaClasses' },
  { key: 'reumatologia', ch: '09', title: 'Reumatología', file: 'dataset_reumatologia.cjs', prop: 'reumatologiaClasses' },
  { key: 'neurologia', ch: '10', title: 'Neurología y Geriatría', file: 'dataset_neurologia.cjs', prop: 'neurologiaClasses' },
  { key: 'cirugia', ch: '11', title: 'Cirugía General', file: 'dataset_cirugia.cjs', prop: 'cirugiaClasses' },
  { key: 'traumatologia', ch: '12', title: 'Traumatología y Ortopedia', file: 'dataset_traumatologia.cjs', prop: 'traumatologiaClasses' },
  { key: 'urologia', ch: '13', title: 'Urología', file: 'dataset_urologia.cjs', prop: 'urologiaClasses' },
  { key: 'otorrino', ch: '14', title: 'Otorrinolaringología', file: 'dataset_otorrino.cjs', prop: 'otorrinoClasses' },
  { key: 'oftalmologia', ch: '15', title: 'Oftalmología', file: 'dataset_oftalmologia.cjs', prop: 'oftalmologiaClasses' },
  { key: 'dermatologia', ch: '16', title: 'Dermatología', file: 'dataset_dermatologia.cjs', prop: 'dermatologiaClasses' },
  { key: 'psiquiatria', ch: '17', title: 'Psiquiatría General', file: 'dataset_psiquiatria.cjs', prop: 'psiquiatriaClasses' },
  { key: 'pediatria', ch: '18', title: 'Pediatría General', file: 'dataset_pediatria.cjs', prop: 'pediatriaClasses' },
  { key: 'obstetricia', ch: '19', title: 'Obstetricia', file: 'dataset_obstetricia.cjs', prop: 'obstetriciaClasses' },
  { key: 'ginecologia', ch: '20', title: 'Ginecología', file: 'dataset_ginecologia.cjs', prop: 'ginecologiaClasses' },
  { key: 'saludpublica', ch: '21', title: 'Salud Pública', file: 'dataset_saludpublica.cjs', prop: 'saludpublicaClasses' },
];

let cacheMap = null;

function buildMap() {
  if (cacheMap) return cacheMap;
  cacheMap = {};

  // 1. Cargar desde los datasets de libros (con cálculo exacto de páginas según maqueta 1b)
  SPECIALTIES.forEach(spec => {
    try {
      const filePath = path.join(__dirname, spec.file);
      if (!fs.existsSync(filePath)) return;
      const mod = require(filePath);
      const classes = mod[spec.prop] || [];
      if (!Array.isArray(classes)) return;

      let cursor = 3;
      const bns = [...new Set(classes.map(c => c.blockNum))].sort((a, b) => a - b);
      bns.forEach(bn => {
        cursor += 2; // Portada doble de bloque
        const bClasses = classes.filter(c => c.blockNum === bn);
        bClasses.forEach((c, idx) => {
          const isT3 = c.tier === 3 && ((c.questions && c.questions.length >= 4) || c.treatmentTable || c.table2);
          const pCount = isT3 ? 4 : 2;
          const startP = cursor;
          cursor += pCount;

          const rawCodes = String(c.perfilCode || '').split(/[,\s]+/).map(s => s.trim()).filter(Boolean);
          const cleanTitle = (c.title || '').split('(')[0].trim();
          const label = c.topicLabel || `Tema ${bn}.${idx + 1}`;

          rawCodes.forEach(code => {
            if (!cacheMap[code]) {
              cacheMap[code] = {
                code,
                tomoNum: spec.ch,
                tomoTitle: spec.title,
                topicLabel: label,
                topicTitle: cleanTitle,
                page: startP,
                referenceString: `Tomo ${spec.ch} · ${label} (Pág. ${startP})`
              };
            }
          });
        });
        cursor += 1;
      });
    } catch (e) {
      console.warn(`[code_to_manual_mapper] Advertencia cargando ${spec.key}:`, e.message);
    }
  });

  // 2. Complementar con el MASTER_CURRICULUM_547_CATALOG.json para códigos secundarios o no asignados
  try {
    const masterPath = path.join(__dirname, '..', '..', 'classes', 'curriculum', 'MASTER_CURRICULUM_547_CATALOG.json');
    if (fs.existsSync(masterPath)) {
      const cat = JSON.parse(fs.readFileSync(masterPath, 'utf8'));
      for (const [modKey, modData] of Object.entries(cat)) {
        if (!modData.classes) continue;
        modData.classes.forEach((c, idx) => {
          if (!c.eunacomCode) return;
          const code = c.eunacomCode.trim();
          if (!cacheMap[code]) {
            // Deducir especialidad por prefijo
            const pfx = code.split('.').slice(0, 2).join('.');
            const spec = SPECIALTIES.find(s => {
              if (pfx === '1.01') return s.key === 'cardiologia';
              if (pfx === '1.02') return s.key === 'diabetes';
              if (pfx === '1.03') return s.key === 'endocrinologia';
              if (pfx === '1.04') return s.key === 'infectologia';
              if (pfx === '1.05') return s.key === 'neumologia';
              if (pfx === '1.06') return s.key === 'gastroenterologia';
              if (pfx === '1.08') return s.key === 'hematologia';
              if (pfx === '1.09') return s.key === 'nefrologia';
              if (pfx === '1.10') return s.key === 'neurologia';
              if (pfx === '1.11') return s.key === 'reumatologia';
              if (pfx === '2.01') return s.key === 'pediatria';
              if (pfx === '3.01') {
                return (c.topic || '').toLowerCase().includes('embarazo') || (c.topic || '').toLowerCase().includes('parto')
                  ? s.key === 'obstetricia' : s.key === 'ginecologia';
              }
              if (pfx === '4.01') return s.key === 'cirugia';
              if (pfx === '4.02') return s.key === 'traumatologia';
              if (pfx === '4.03') return s.key === 'urologia';
              if (pfx === '5.01') return s.key === 'psiquiatria';
              if (pfx === '6.01') return s.key === 'dermatologia';
              if (pfx === '6.02') return s.key === 'oftalmologia';
              if (pfx === '6.03') return s.key === 'otorrino';
              if (pfx === '7.01') return s.key === 'saludpublica';
              return false;
            }) || { ch: '01', title: 'Medicina General' };

            const calcPage = 6 + (idx * 2);
            cacheMap[code] = {
              code,
              tomoNum: spec.ch,
              tomoTitle: spec.title,
              topicLabel: `Clase ${idx + 1}`,
              topicTitle: c.topic || 'Tema General',
              page: calcPage,
              referenceString: `Tomo ${spec.ch} · C.${idx + 1} (Pág. ${calcPage})`
            };
          }
        });
      }
    }
  } catch (e) {
    console.warn('[code_to_manual_mapper] Advertencia procesando master curriculum:', e.message);
  }

  return cacheMap;
}

function getManualReference(perfilCode) {
  if (!perfilCode) return null;
  const map = buildMap();
  const rawCodes = String(perfilCode).split(/[,\s]+/).map(s => s.trim()).filter(Boolean);
  for (const c of rawCodes) {
    if (map[c]) return map[c];
  }
  // Fallback por prefijo si es código no registrado
  const pfx = String(perfilCode).split('.').slice(0, 2).join('.');
  const pfxMap = {
    '1.01': { tomoNum: '01', title: 'Cardiología' },
    '1.02': { tomoNum: '06', title: 'Diabetes Mellitus' },
    '1.03': { tomoNum: '07', title: 'Endocrinología' },
    '1.04': { tomoNum: '02', title: 'Infectología' },
    '1.05': { tomoNum: '04', title: 'Respiratorio' },
    '1.06': { tomoNum: '03', title: 'Gastroenterología' },
    '1.08': { tomoNum: '08', title: 'Hematología' },
    '1.09': { tomoNum: '05', title: 'Nefrología' },
    '1.10': { tomoNum: '10', title: 'Neurología' },
    '1.11': { tomoNum: '09', title: 'Reumatología' },
    '2.01': { tomoNum: '18', title: 'Pediatría' },
    '3.01': { tomoNum: '19', title: 'Obstetricia y Ginecología' },
    '4.01': { tomoNum: '11', title: 'Cirugía General' },
    '4.02': { tomoNum: '12', title: 'Traumatología' },
    '4.03': { tomoNum: '13', title: 'Urología' },
    '5.01': { tomoNum: '17', title: 'Psiquiatría' },
    '6.01': { tomoNum: '16', title: 'Dermatología' },
    '6.02': { tomoNum: '15', title: 'Oftalmología' },
    '6.03': { tomoNum: '14', title: 'Otorrinolaringología' },
    '7.01': { tomoNum: '21', title: 'Salud Pública' },
  };
  const fallback = pfxMap[pfx];
  if (fallback) {
    return {
      code: perfilCode,
      tomoNum: fallback.tomoNum,
      tomoTitle: fallback.title,
      topicLabel: 'Temario General',
      topicTitle: 'Manual de Especialidad',
      page: 8,
      referenceString: `Tomo ${fallback.tomoNum} · ${fallback.title} (Pág. 8)`
    };
  }
  return {
    code: perfilCode,
    tomoNum: '01',
    tomoTitle: 'Manual General',
    topicLabel: 'General',
    topicTitle: 'Temario Oficial',
    page: 6,
    referenceString: `Manual General · Pág. 6`
  };
}

module.exports = {
  buildMap,
  getManualReference,
  SPECIALTIES
};
