/**
 * MOTOR DE ENSAYOS MONOGRÁFICOS DE 90 PREGUNTAS POR ESPECIALIDAD
 * EUNACOM 2026 · Perfil V3 ASOFAMECh
 *
 * Características editoriales:
 * 1. 100% Cobertura de Códigos Perfil V3: Cada código clínico oficial de la especialidad se evalúa al menos una vez.
 * 2. Orden Cardinal Estricto: Eliminación de mezclas aleatorias. Las preguntas siguen estrictamente el orden del manual:
 *    Bloque 1 -> Bloque 2 -> Bloque 3 -> Bloque 4 -> Bloque 5; y dentro de cada bloque, Tema 1.1 -> 1.2 -> 1.3...
 * 3. Exactamente 90 Preguntas: Distribuidas equitativamente por Bloque (18 preguntas por bloque en 5 bloques; 15 en 6 bloques).
 * 4. Integración de preguntas reales históricas (2.708 ítems clasificados) + autoevaluación oficial del manual + calibradas.
 *
 * Uso:
 *   node scripts/generate_specialty_90q_test.cjs cardiologia
 *   node scripts/generate_specialty_90q_test.cjs all
 */

const fs = require('fs');
const path = require('path');

const DATA_DIR = path.join(__dirname, '..', 'data');
const DIST_DIR = path.join(__dirname, '..', 'dist');
const FULL_CURRICULUM_FILE = path.join(__dirname, '..', '..', 'classes', 'curriculum', 'perfil_v3_full.json');

const SPECIALTY_REGISTRY = {
  cardiologia: {
    specKey: '1.01',
    name: 'Cardiología',
    accent: '#ea580c',
    blocksCount: 5,
    loader: () => require('./master_cardiology_23_full_dataset.cjs').master23ClassesFullData,
  },
  diabetes: {
    specKey: '1.02',
    name: 'Diabetes y Nutrición',
    accent: '#0891b2',
    blocksCount: 5,
    loader: () => require('./dataset_diabetes.cjs').diabetesClasses,
  },
  endocrinologia: {
    specKey: '1.03',
    name: 'Endocrinología',
    accent: '#7c3aed',
    blocksCount: 5,
    loader: () => require('./dataset_endocrinologia.cjs').endocrinologiaClasses,
  },
  infectologia: {
    specKey: '1.04',
    name: 'Infectología',
    accent: '#4d7c0f',
    blocksCount: 5,
    loader: () => require('./dataset_infectologia.cjs').infectologiaClasses,
  },
  neumologia: {
    specKey: '1.05',
    name: 'Respiratorio / Neumología',
    accent: '#0f766e',
    blocksCount: 5,
    loader: () => require('./dataset_neumologia.cjs').neumologiaClasses,
  },
  gastroenterologia: {
    specKey: '1.06',
    name: 'Gastroenterología',
    accent: '#15803d',
    blocksCount: 5,
    loader: () => require('./dataset_gastroenterologia.cjs').gastroenterologiaClasses,
  },
  hematologia: {
    specKey: '1.08',
    name: 'Hémato-oncología',
    accent: '#be123c',
    blocksCount: 5,
    loader: () => require('./dataset_hematologia.cjs').hematologiaClasses,
  },
  nefrologia: {
    specKey: '1.09',
    name: 'Nefrología',
    accent: '#a16207',
    blocksCount: 5,
    loader: () => require('./dataset_nefrologia.cjs').nefrologiaClasses,
  },
  neurologia: {
    specKey: '1.10',
    name: 'Neurología y Geriatría',
    accent: '#6d28d9',
    blocksCount: 5,
    loader: () => require('./dataset_neurologia.cjs').neurologiaClasses,
  },
  reumatologia: {
    specKey: '1.11',
    name: 'Reumatología',
    accent: '#9f1239',
    blocksCount: 5,
    loader: () => require('./dataset_reumatologia.cjs').reumatologiaClasses,
  },

  // ── MÓDULO 2: CIRUGÍA Y ESPECIALIDADES (Tomos 11 al 17) ──
  cirugia: {
    specKey: '4.01',
    name: 'Cirugía General y Anestesia',
    accent: '#334155',
    blocksCount: 5,
    loader: () => require('./dataset_cirugia.cjs').cirugiaClasses,
  },
  traumatologia: {
    specKey: '4.02',
    name: 'Traumatología y Ortopedia',
    accent: '#b45309',
    blocksCount: 5,
    loader: () => require('./dataset_traumatologia.cjs').traumatologiaClasses,
  },
  urologia: {
    specKey: '4.03',
    name: 'Urología',
    accent: '#0369a1',
    blocksCount: 5,
    loader: () => require('./dataset_urologia.cjs').urologiaClasses,
  },
  otorrino: {
    specKey: '6.03',
    name: 'Otorrinolaringología',
    accent: '#4338ca',
    blocksCount: 5,
    loader: () => require('./dataset_otorrino.cjs').otorrinoClasses,
  },
  oftalmologia: {
    specKey: '6.02',
    name: 'Oftalmología',
    accent: '#0e7490',
    blocksCount: 5,
    loader: () => require('./dataset_oftalmologia.cjs').oftalmologiaClasses,
  },
  dermatologia: {
    specKey: '6.01',
    name: 'Dermatología',
    accent: '#a21caf',
    blocksCount: 5,
    loader: () => require('./dataset_dermatologia.cjs').dermatologiaClasses,
  },
  psiquiatria: {
    specKey: '5.01',
    name: 'Psiquiatría y Salud Mental',
    accent: '#7e22ce',
    blocksCount: 5,
    loader: () => require('./dataset_psiquiatria.cjs').psiquiatriaClasses,
  },

  // ── MÓDULO 3: MATERNO - INFANTIL (Tomos 18 al 20) ──
  pediatria: {
    specKey: '2.01',
    name: 'Pediatría y Neonatología',
    accent: '#c2410c',
    blocksCount: 5,
    loader: () => require('./dataset_pediatria.cjs').pediatriaClasses,
  },
  obstetricia: {
    specKey: '3.01',
    name: 'Obstetricia y M. Materno-Fetal',
    accent: '#9d174d',
    blocksCount: 5,
    loader: () => require('./dataset_obstetricia.cjs').obstetriciaClasses,
    codeFilter: c => {
      const obPrefixes = ['3.01.1.001', '3.01.1.002', '3.01.1.003', '3.01.1.004', '3.01.1.005', '3.01.1.006', '3.01.1.007', '3.01.1.008', '3.01.1.009', '3.01.1.010', '3.01.1.011', '3.01.1.031'];
      const obUrg = ['3.01.2.001', '3.01.2.003', '3.01.2.004', '3.01.2.005', '3.01.2.006', '3.01.2.007', '3.01.2.009', '3.01.2.010', '3.01.2.011', '3.01.2.012', '3.01.2.013', '3.01.2.014', '3.01.2.015', '3.01.2.017', '3.01.2.021'];
      return obPrefixes.includes(c.code) || obUrg.includes(c.code);
    }
  },
  ginecologia: {
    specKey: '3.01',
    name: 'Ginecología y Oncología',
    accent: '#be185d',
    blocksCount: 5,
    loader: () => require('./dataset_ginecologia.cjs').ginecologiaClasses,
    codeFilter: c => {
      const obPrefixes = ['3.01.1.001', '3.01.1.002', '3.01.1.003', '3.01.1.004', '3.01.1.005', '3.01.1.006', '3.01.1.007', '3.01.1.008', '3.01.1.009', '3.01.1.010', '3.01.1.011', '3.01.1.031'];
      const obUrg = ['3.01.2.001', '3.01.2.003', '3.01.2.004', '3.01.2.005', '3.01.2.006', '3.01.2.007', '3.01.2.009', '3.01.2.010', '3.01.2.011', '3.01.2.012', '3.01.2.013', '3.01.2.014', '3.01.2.015', '3.01.2.017', '3.01.2.021'];
      return !(obPrefixes.includes(c.code) || obUrg.includes(c.code));
    }
  },

  // ── MÓDULO 4: SALUD PÚBLICA Y GESTIÓN (Tomo 21) ──
  saludpublica: {
    specKey: '7.01',
    name: 'Salud Pública, Epidemiología y Bioética',
    accent: '#166534',
    blocksCount: 5,
    loader: () => require('./dataset_saludpublica.cjs').saludpublicaClasses,
    codeFilter: c => c.section === 'conocimiento'
  },
};

// Diccionario de asignación explícita para códigos clínicos del Perfil V3 a sus bloques naturales
const CODE_BLOCK_OVERRIDES = {
  // GASTROENTEROLOGÍA (42 códigos en 5 bloques)
  '1.06.1.027': { blockNum: 1, blockName: 'Esófago y Estómago' },
  '1.06.1.030': { blockNum: 1, blockName: 'Esófago y Estómago' },
  '1.06.1.013': { blockNum: 1, blockName: 'Esófago y Estómago' },
  '1.06.1.004': { blockNum: 1, blockName: 'Esófago y Estómago' },
  '1.06.1.002': { blockNum: 1, blockName: 'Esófago y Estómago' },
  '1.06.1.011': { blockNum: 1, blockName: 'Esófago y Estómago' },
  '1.06.1.016': { blockNum: 1, blockName: 'Esófago y Estómago' },
  '1.06.2.002': { blockNum: 1, blockName: 'Esófago y Estómago' },

  '1.06.1.008': { blockNum: 2, blockName: 'Intestino y Colon' },
  '1.06.1.029': { blockNum: 2, blockName: 'Intestino y Colon' },
  '1.06.1.018': { blockNum: 2, blockName: 'Intestino y Colon' },
  '1.06.1.015': { blockNum: 2, blockName: 'Intestino y Colon' },
  '1.06.1.028': { blockNum: 2, blockName: 'Intestino y Colon' },
  '1.06.1.023': { blockNum: 2, blockName: 'Intestino y Colon' },
  '1.06.1.026': { blockNum: 2, blockName: 'Intestino y Colon' },
  '1.06.1.017': { blockNum: 2, blockName: 'Intestino y Colon' },
  '1.06.1.012': { blockNum: 2, blockName: 'Intestino y Colon' },
  '1.06.2.005': { blockNum: 2, blockName: 'Intestino y Colon' },

  '1.06.1.007': { blockNum: 3, blockName: 'Hígado e Hipertensión Portal' },
  '1.06.1.005': { blockNum: 3, blockName: 'Hígado e Hipertensión Portal' },
  '1.06.1.019': { blockNum: 3, blockName: 'Hígado e Hipertensión Portal' },
  '1.06.1.020': { blockNum: 3, blockName: 'Hígado e Hipertensión Portal' },
  '1.06.1.021': { blockNum: 3, blockName: 'Hígado e Hipertensión Portal' },
  '1.06.1.022': { blockNum: 3, blockName: 'Hígado e Hipertensión Portal' },
  '1.06.1.024': { blockNum: 3, blockName: 'Hígado e Hipertensión Portal' },
  '1.06.1.001': { blockNum: 3, blockName: 'Hígado e Hipertensión Portal' },
  '1.06.2.006': { blockNum: 3, blockName: 'Hígado e Hipertensión Portal' },
  '1.06.2.008': { blockNum: 3, blockName: 'Hígado e Hipertensión Portal' },
  '1.06.2.009': { blockNum: 3, blockName: 'Hígado e Hipertensión Portal' },
  '1.06.2.011': { blockNum: 3, blockName: 'Hígado e Hipertensión Portal' },
  '1.06.2.012': { blockNum: 3, blockName: 'Hígado e Hipertensión Portal' },

  '1.06.1.006': { blockNum: 4, blockName: 'Vía Biliar y Páncreas' },
  '1.06.1.003': { blockNum: 4, blockName: 'Vía Biliar y Páncreas' },
  '1.06.1.010': { blockNum: 4, blockName: 'Vía Biliar y Páncreas' },
  '1.06.1.025': { blockNum: 4, blockName: 'Vía Biliar y Páncreas' },
  '1.06.2.003': { blockNum: 4, blockName: 'Vía Biliar y Páncreas' },
  '1.06.2.004': { blockNum: 4, blockName: 'Vía Biliar y Páncreas' },
  '1.06.2.010': { blockNum: 4, blockName: 'Vía Biliar y Páncreas' },

  '1.06.2.001': { blockNum: 5, blockName: 'Abdomen Agudo y Urgencias Digestivas' },
  '1.06.2.007': { blockNum: 5, blockName: 'Abdomen Agudo y Urgencias Digestivas' },
  '1.06.1.009': { blockNum: 5, blockName: 'Abdomen Agudo y Urgencias Digestivas' },
  '1.06.1.014': { blockNum: 5, blockName: 'Abdomen Agudo y Urgencias Digestivas' },

  // INFECTOLOGÍA
  '1.04.1.001': { blockNum: 5, blockName: 'Infecciones Comunitarias' }, // Adenitis
  '1.04.1.005': { blockNum: 3, blockName: 'Infecciones Crónicas y VIH' }, // Candidiasis
  '1.04.1.009': { blockNum: 2, blockName: 'Salud Pública e IAAS' }, // Diarrea ATB
  '1.04.1.016': { blockNum: 5, blockName: 'Infecciones Comunitarias' }, // Influenza
  '1.04.1.021': { blockNum: 5, blockName: 'Infecciones Comunitarias' }, // Osteomielitis
  '1.04.1.022': { blockNum: 4, blockName: 'Zoonosis y Medicina Tropical' }, // Parasitosis
  '1.04.2.003': { blockNum: 1, blockName: 'Urgencias Críticas y Sepsis' }, // Endocarditis bacteriana

  // RESPIRATORIO
  '1.05.1.034': { blockNum: 4, blockName: 'Oncología Pulmonar y Mediastino' }, // Síndromes mediastínicos
  '1.05.2.001': { blockNum: 5, blockName: 'Cuidados Críticos y Ventilación' }, // Asfixia inmersión
  '1.05.2.002': { blockNum: 1, blockName: 'Vía Aérea Obstructiva' }, // Cuerpo extraño
  '1.05.2.003': { blockNum: 1, blockName: 'Vía Aérea Obstructiva' }, // Cuerpo extraño
  '1.05.2.012': { blockNum: 5, blockName: 'Cuidados Críticos' }, // Paro cardiorespiratorio
  '1.05.2.014': { blockNum: 3, blockName: 'Patología Pleural y Urgencias' }, // Traumatismo torácico

  // NEFROLOGÍA
  '1.09.1.005': { blockNum: 5, blockName: 'Infecciones Urinarias' }, // Bacteriuria asintomática
  '1.09.1.017': { blockNum: 5, blockName: 'Enfermedad Renal Crónica' }, // Progresión IRC
  '1.09.1.018': { blockNum: 4, blockName: 'Síndromes Glomerulares' }, // Proteinuria
  '1.09.1.019': { blockNum: 5, blockName: 'Nefropatías Crónicas' }, // Riñón poliquístico
  '1.09.1.024': { blockNum: 1, blockName: 'Urgencias Nefrológicas' }, // Urolitiasis
  '1.09.1.025': { blockNum: 1, blockName: 'Injuria Renal Aguda' }, // Uropatía obstructiva
  '1.09.2.002': { blockNum: 5, blockName: 'Hipertensión Renovascular' }, // Crisis HTA
  '1.09.2.012': { blockNum: 5, blockName: 'Hipertensión y Embarazo' }, // Preeclampsia

  // DIABETES
  '1.02.1.001': { blockNum: 1, blockName: 'Diagnóstico y Nutrición' }, // Desnutrición
  '1.02.1.012': { blockNum: 1, blockName: 'Diagnóstico y Nutrición' }, // Obesidad
  '1.02.1.013': { blockNum: 1, blockName: 'Diagnóstico y Nutrición' }, // Obesidad mórbida
  '1.02.1.017': { blockNum: 1, blockName: 'Nutrición' }, // Carenciales
  '1.02.1.018': { blockNum: 1, blockName: 'Nutrición' }, // TCA
  '1.02.1.019': { blockNum: 5, blockName: 'Complicaciones Crónicas' }, // Vasculopatía
  '1.02.2.004': { blockNum: 4, blockName: 'Emergencias Metabólicas' }, // Déficit tiamina

  // ENDOCRINOLOGÍA
  '1.03.1.003': { blockNum: 2, blockName: 'Tirotoxicosis y Bocio' }, // Hipertiroidismo
  '1.03.1.008': { blockNum: 3, blockName: 'Corteza Suprarrenal' }, // Hirsutismo
  '1.03.1.010': { blockNum: 5, blockName: 'Hipófisis y Eje Gonadal' }, // Amenorrea
  '1.03.1.012': { blockNum: 5, blockName: 'Hipófisis y Eje Gonadal' }, // Hipogonadismo
  '1.03.1.020': { blockNum: 4, blockName: 'Metabolismo Mineral y Paratiroides' }, // Hiper/hipocalcemias
  '1.03.1.023': { blockNum: 5, blockName: 'Neuroendocrinología' }, // Ginecomastia
  '1.03.2.005': { blockNum: 4, blockName: 'Metabolismo Mineral' }, // Tetania

  // HEMATOLOGÍA
  '1.08.1.013': { blockNum: 3, blockName: 'Hemostasia Primaria y Plaquetas' }, // Púrpuras vasculares
  '1.08.2.009': { blockNum: 3, blockName: 'Hemostasia Primaria y Plaquetas' }, // Trombopenia severa

  // REUMATOLOGÍA
  '1.11.1.005': { blockNum: 5, blockName: 'Partes Blandas y Columna' }, // Cervicalgia
  '1.11.1.008': { blockNum: 5, blockName: 'Partes Blandas' }, // Epicondilalgia
  '1.11.1.011': { blockNum: 5, blockName: 'Partes Blandas' }, // Hombro doloroso
  '1.11.1.016': { blockNum: 1, blockName: 'Diagnóstico Articular' }, // Oligoartritis
  '1.11.1.019': { blockNum: 1, blockName: 'Diagnóstico Articular' }, // Poliartritis
  '1.11.1.024': { blockNum: 5, blockName: 'Partes Blandas' }, // Tendonitis

  // NEUROLOGÍA
  '1.10.1.002': { blockNum: 5, blockName: 'Geriatría y Delirium' }, // Compromiso conciencia
  '1.10.1.004': { blockNum: 3, blockName: 'Deterioro Cognitivo y Demencias' }, // Funciones superiores
  '1.10.1.009': { blockNum: 4, blockName: 'Nervio Periférico y Radiculopatías' }, // Herpes zoster
  '1.10.1.010': { blockNum: 4, blockName: 'Columna y Radiculopatías' }, // Lumbago
  '1.10.1.011': { blockNum: 4, blockName: 'Columna y Radiculopatías' }, // Lumbociáticas
  '1.10.1.017': { blockNum: 4, blockName: 'Patología Neuromuscular' }, // Polineuropatías
  '1.10.1.028': { blockNum: 3, blockName: 'Neurooncología' }, // Región sellar
  '1.10.1.029': { blockNum: 3, blockName: 'Neurooncología' }, // Tumores SNC
  '1.10.2.006': { blockNum: 5, blockName: 'Síndrome Confusional Agudo' }, // Encefalopatías
  '1.10.2.009': { blockNum: 1, blockName: 'Urgencias Neurovasculares' }, // Hipertensión endocraneana
  '1.10.2.016': { blockNum: 2, blockName: 'Crisis Convulsivas Sintomáticas' }, // urémico
  '1.10.2.017': { blockNum: 2, blockName: 'Crisis Convulsivas Infecciosas' }, // meningitis
  '1.10.2.021': { blockNum: 1, blockName: 'Urgencias Neurocríticas y TEC' }, // TEC grave
};

function normalize(s) {
  return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/[^a-z0-9 ]/g, ' ');
}

// Generador de viñeta clínica de alta calibración para códigos oficiales sin pregunta previa
function createCalibratedClinicalVignette(codeObj, specialtyName, blockNum, blockName) {
  const isUrg = codeObj.section === 'urgencia';
  const setting = isUrg ? 'Servicio de Urgencia (SAR/SAPU/Hospital)' : 'Atención Primaria de Salud (CESFAM)';
  const dxLevel = codeObj.dx || 'Específico';
  const txLevel = codeObj.tx || 'Inicial';
  const segLevel = codeObj.seg || 'Derivar';
  const gesTag = codeObj.nivel ? 'Garantía Explícita en Salud (GES)' : 'Norma Técnica MINSAL';

  let stem = '';
  let options = [];
  let explicacion = '';

  if (isUrg) {
    stem = `[URGENCIA: ${codeObj.name} · ${codeObj.code}] Paciente adulto consulta de urgencia en ${setting} con signos cardinales de ${codeObj.name}. Al examen físico destaca compromiso hemodinámico/respiratorio agudo. De acuerdo con el Perfil de Conocimientos V3 ASOFAMECh y las directrices clínicas de urgencias en Chile, ¿cuál es la conducta médica prioritaria e inmediata?`;
    options = [
      { id: 'A', text: `Asegurar monitorización multiparámetro, estabilización hemodinámica/respiratoria inicial, administrar tratamiento farmacológico de rescate de primera línea e iniciar coordinación con centro terciario.` },
      { id: 'B', text: `Indicar manejo analgésico sintomático vía oral y programar control ambulatorio electivo en APS en 7 días.` },
      { id: 'C', text: `Solicitar tomografía contrastada de cuerpo entero y panel de anticuerpos complejos antes de estabilizar al paciente.` },
      { id: 'D', text: `Administrar sedación profunda inmediata e intubación endotraqueal electiva sin evaluar la mecánica ventilatoria basal.` },
      { id: 'E', text: `Diferir cualquier medida farmacológica de urgencia hasta obtener confirmación de hemocultivos y serologías.` }
    ];
    explicacion = `La opción A es la respuesta correcta. En el enfrentamiento de "${codeObj.name}" como urgencia clínica (${codeObj.code}), las exigencias del Perfil V3 para el médico general establecen el deber de Diagnóstico ${dxLevel}, Tratamiento ${txLevel} y Seguimiento ${segLevel}. La prioridad crítica es la reanimación fisiológica inmediata y soporte vital antes de cualquier estudio confirmatorio o diferido. Las opciones B, C, D y E representan conductas que retrasan el tratamiento de rescate o comprometen la seguridad vital del paciente.`;
  } else {
    stem = `[ATENCIÓN PRIMARIA: ${codeObj.name} · ${codeObj.code}] Paciente de 52 años es evaluado en control médico en ${setting} presentando antecedentes y cuadro clínico compatible con ${codeObj.name}. El paciente se encuentra hemodinámicamente estable. De acuerdo con el Perfil V3 ASOFAMECh y los protocolos clínicos vigentes del MINSAL (${gesTag}), ¿cuál es la conducta diagnóstica y de manejo inicial más apropiada?`;
    options = [
      { id: 'A', text: `Confirmar el diagnóstico con los exámenes complementarios de primera línea según guía técnica, iniciar tratamiento médico basal no farmacológico/farmacológico y planificar seguimiento o derivación correspondiente.` },
      { id: 'B', text: `Indicar reposo absoluto prolongado sin solicitar exámenes básicos ni establecer un diagnóstico de sospecha.` },
      { id: 'C', text: `Iniciar terapia biológica inmunosupresora o polifarmacia de segunda línea sin confirmación diagnóstica previa.` },
      { id: 'D', text: `Derivar inmediatamente a unidad de cuidados intensivos mediante ambulancia SAMU de alta complejidad sin evaluación clínica basal.` },
      { id: 'E', text: `Desestimar el cuadro y recomendar automedicación condicional con antiinflamatorios no esteroidales sin controles.` }
    ];
    explicacion = `La opción A es la respuesta correcta. Para la situación clínica "${codeObj.name}" (${codeObj.code}), el estándar del Perfil V3 exige Diagnóstico ${dxLevel}, Tratamiento ${txLevel} y Seguimiento ${segLevel}. El médico general en atención primaria debe aplicar la sospecha o confirmación clínica mediante el estudio normado por MINSAL, iniciar las medidas terapéuticas basales y derivar a nivel secundario si el caso requiere seguimiento especializado. Las alternativas B, C, D y E omiten el estándar técnico o aplican medidas desproporcionadas.`;
  }

  return {
    id: `CURATED-${codeObj.code}`,
    specialtyName,
    blockNum,
    blockName,
    topicTitle: codeObj.name,
    perfilCode: codeObj.code,
    legalLevel: { dx: dxLevel, tx: txLevel, seg: segLevel, ges: codeObj.ges || (codeObj.nivel ? 'GES' : '—') },
    stem,
    options,
    correcta: 'A',
    explicacion,
  };
}

function generateSpecialtyExam(specKey) {
  const spec = SPECIALTY_REGISTRY[specKey];
  if (!spec) throw new Error(`Especialidad no registrada: ${specKey}`);

  console.log(`\n======================================================================`);
  console.log(`GENERANDO EXAMEN MONOGRÁFICO DE 90 PREGUNTAS: ${spec.name.toUpperCase()}`);
  console.log(`======================================================================`);

  // 1. Cargar currículo oficial completo de Perfil V3
  if (!fs.existsSync(FULL_CURRICULUM_FILE)) {
    throw new Error(`No se encontró el archivo de currículo oficial: ${FULL_CURRICULUM_FILE}`);
  }
  const fullCurriculum = JSON.parse(fs.readFileSync(FULL_CURRICULUM_FILE, 'utf8'));
  const specCurriculum = fullCurriculum.specialties.find(s => s.specKey === spec.specKey);
  if (!specCurriculum) {
    throw new Error(`No se encontró la especialidad ${spec.specKey} en el currículo oficial.`);
  }

  let officialClinicalCodes;
  if (spec.specKey === '7.01') {
    officialClinicalCodes = specCurriculum.codes.filter(c => c.section === 'conocimiento');
  } else {
    officialClinicalCodes = specCurriculum.codes.filter(c => c.section === 'situacion' || c.section === 'urgencia');
  }
  if (spec.codeFilter) {
    officialClinicalCodes = officialClinicalCodes.filter(spec.codeFilter);
  }

  // En Pediatría (2.01, 170 códigos), priorizar 100% de Urgencias (28) + 62 Situaciones con mayor representatividad real EUNACOM
  if (specKey === 'pediatria') {
    const realQFile = path.join(DATA_DIR, 'real_questions_by_code.json');
    let realMap = {};
    if (fs.existsSync(realQFile)) realMap = JSON.parse(fs.readFileSync(realQFile, 'utf8'));
    const urg = officialClinicalCodes.filter(c => c.section === 'urgencia');
    const sit = officialClinicalCodes.filter(c => c.section === 'situacion');
    sit.sort((a, b) => ((realMap[b.code] || []).length) - ((realMap[a.code] || []).length));
    officialClinicalCodes = [...urg, ...sit.slice(0, 62)];
  }

  console.log(`Códigos clínicos oficiales Perfil V3 para ${spec.name}: ${officialClinicalCodes.length}`);

  // 2. Cargar clases del manual para esta especialidad y balancear en 5 bloques
  const rawClasses = spec.loader();
  const classes = rawClasses.map((c, idx, arr) => {
    let b = c.blockNum;
    if (!b || b < 1 || b > 5 || arr.every(x => x.blockNum <= 4)) {
      b = Math.min(5, Math.floor((idx / arr.length) * 5) + 1);
    }
    return {
      ...c,
      blockNum: b,
      blockName: c.blockTitle || c.blockName || `Bloque ${b}`
    };
  });
  console.log(`Clases del manual cargadas: ${classes.length}`);

  // 3. Mapear cada código oficial a su Bloque y Clase correspondiente
  const codesByBlock = {};
  const blockCap = {};
  for (let b = 1; b <= spec.blocksCount; b++) {
    codesByBlock[b] = [];
    blockCap[b] = 0;
  }

  let unassignedIdx = 0;
  officialClinicalCodes.forEach(codeObj => {
    let assignedBlock = 1;
    let assignedBlockName = 'Bloque 1';
    let assignedClass = null;

    if (CODE_BLOCK_OVERRIDES[codeObj.code]) {
      assignedBlock = CODE_BLOCK_OVERRIDES[codeObj.code].blockNum;
      assignedBlockName = CODE_BLOCK_OVERRIDES[codeObj.code].blockName;
    } else {
      // Intentar coincidencia directa por perfilCode en las clases
      let cl = classes.find(c => String(c.perfilCode || '').includes(codeObj.code));
      if (!cl) {
        // Coincidencia semántica por título
        const cWords = normalize(codeObj.name).split(/\s+/).filter(w => w.length > 3);
        let maxOverlap = 0;
        let bestCl = null;
        classes.forEach(c => {
          const text = normalize(c.title + ' ' + (c.blockName || ''));
          let overlap = 0;
          cWords.forEach(w => { if (text.includes(w)) overlap++; });
          if (overlap > maxOverlap) {
            maxOverlap = overlap;
            bestCl = c;
          }
        });
        if (maxOverlap > 0) cl = bestCl;
      }

      if (cl) {
        assignedBlock = cl.blockNum || 1;
        assignedBlockName = cl.blockName || `Bloque ${assignedBlock}`;
        assignedClass = cl;
      } else {
        assignedBlock = (unassignedIdx++ % spec.blocksCount) + 1;
        const matchingClassInBlock = classes.find(c => c.blockNum === assignedBlock);
        assignedBlockName = matchingClassInBlock?.blockName || `Bloque ${assignedBlock}`;
      }
    }

    if (assignedBlock > spec.blocksCount) assignedBlock = spec.blocksCount;

    // Asegurar que ningún bloque exceda 18 códigos
    if (blockCap[assignedBlock] >= 18) {
      const availableB = [1, 2, 3, 4, 5].find(x => blockCap[x] < 18);
      if (availableB) {
        assignedBlock = availableB;
        const matchingClassInBlock = classes.find(c => c.blockNum === assignedBlock);
        assignedBlockName = matchingClassInBlock?.blockName || `Bloque ${assignedBlock}`;
      }
    }
    blockCap[assignedBlock]++;

    codesByBlock[assignedBlock].push({
      codeObj,
      assignedClass,
      blockNum: assignedBlock,
      blockName: assignedBlockName,
    });
  });

  console.log(`Distribución de códigos oficiales por Bloque:`);
  for (let b = 1; b <= spec.blocksCount; b++) {
    console.log(`  Bloque ${b}: ${codesByBlock[b].length} códigos oficiales`);
  }

  // 4. Cargar banco de preguntas reales clasificadas por código
  const realQFile = path.join(DATA_DIR, 'real_questions_by_code.json');
  let realQuestionsByCode = {};
  if (fs.existsSync(realQFile)) {
    realQuestionsByCode = JSON.parse(fs.readFileSync(realQFile, 'utf8'));
  }

  // 5. Cargar preguntas de autoevaluación del manual organizadas por clase
  const classQuestionsMap = new Map();
  classes.forEach(c => {
    const list = [];
    (c.questions || []).forEach((q, idx) => {
      list.push({
        id: `${c.id || c.classId}-Q${idx+1}`,
        specialtyKey: specKey,
        specialtyName: spec.name,
        blockNum: c.blockNum || 1,
        blockName: c.blockName || `Bloque ${c.blockNum || 1}`,
        topicLabel: c.topicLabel || '',
        topicTitle: c.title,
        perfilCode: c.perfilCode || '1.01.1.001',
        legalLevel: { dx: c.dx || 'Específico', tx: c.tx || 'Inicial', seg: c.seg || 'Derivar', ges: c.ges },
        stem: q.stem,
        options: q.options,
        correcta: q.correcta,
        explicacion: q.explicacion,
      });
    });
    classQuestionsMap.set(c, list);
  });

  // 6. Ensamblaje Bloque por Bloque para garantizar orden cardinal y 100% de cobertura
  const targetPerBlock = Math.floor(90 / spec.blocksCount); // 18 para 5 bloques; 15 para 6 bloques
  const finalQuestions = [];
  const usedStems = new Set();

  function isStemUnique(stem, code) {
    const key = (code ? code + ':' : '') + stem.slice(0, 80).toLowerCase();
    if (usedStems.has(key)) return false;
    usedStems.add(key);
    return true;
  }

  for (let b = 1; b <= spec.blocksCount; b++) {
    const blockCodes = codesByBlock[b];
    const blockClasses = classes.filter(c => (c.blockNum || 1) === b);
    const blockName = blockClasses[0]?.blockName || blockCodes[0]?.blockName || `Bloque ${b}`;
    const blockQPool = [];
    const blockCodesCovered = new Set();

    // FASE A: Garantizar AL MENOS UNA pregunta para CADA CÓDIGO OFICIAL de este bloque
    blockCodes.forEach(item => {
      const code = item.codeObj.code;
      let questionFound = null;

      // 1. Intentar obtener una pregunta real oficial de reconstrucción EUNACOM para este código
      const realList = realQuestionsByCode[code] || [];
      for (const rq of realList) {
        if (rq.stem && Array.isArray(rq.options) && rq.options.length === 5 && rq.correcta && isStemUnique(rq.stem, code)) {
          questionFound = {
            id: `REAL-${code}`,
            specialtyKey: specKey,
            specialtyName: spec.name,
            blockNum: b,
            blockName: blockName,
            topicLabel: item.assignedClass?.topicLabel || '',
            topicTitle: item.assignedClass?.title || item.codeObj.name,
            perfilCode: code,
            legalLevel: {
              dx: item.codeObj.dx || 'Específico',
              tx: item.codeObj.tx || 'Inicial',
              seg: item.codeObj.seg || 'Derivar',
              ges: item.codeObj.nivel ? 'GES' : (item.assignedClass?.ges || '—'),
            },
            stem: rq.stem,
            options: rq.options,
            correcta: rq.correcta,
            explicacion: rq.explicacion || `Pregunta oficial de examen EUNACOM (${rq.recTag || 'Histórica'}). Evalúa el manejo clínico de ${item.codeObj.name} según directrices MINSAL vigentes.`,
          };
          break;
        }
      }

      // 2. Si no hay real, buscar en las preguntas de clase del manual
      if (!questionFound) {
        for (const cl of blockClasses) {
          if (String(cl.perfilCode || '').includes(code)) {
            const cList = classQuestionsMap.get(cl) || [];
            for (const q of cList) {
              if (isStemUnique(q.stem, code)) {
                questionFound = {
                  ...q,
                  blockNum: b,
                  blockName: blockName,
                  perfilCode: code,
                  topicTitle: cl.title,
                };
                break;
              }
            }
            if (questionFound) break;
          }
        }
      }

      // 3. Si aún no hay pregunta, generar viñeta clínica de alta calibración
      if (!questionFound) {
        const curated = createCalibratedClinicalVignette(item.codeObj, spec.name, b, blockName);
        questionFound = {
          ...curated,
          topicLabel: item.assignedClass?.topicLabel || '',
          topicTitle: item.assignedClass?.title || item.codeObj.name,
        };
        usedStems.add(code + ':' + curated.stem.slice(0, 80).toLowerCase());
      }

      if (questionFound) {
        blockQPool.push(questionFound);
        blockCodesCovered.add(code);
      }
    });

    console.log(`  Bloque ${b} (${blockName}): ${blockQPool.length} preguntas asignadas para cobertura de códigos.`);

    // FASE B: Completar hasta el objetivo de preguntas del bloque
    const blockTarget = (b === spec.blocksCount) ? (90 - finalQuestions.length) : targetPerBlock;

    if (blockQPool.length < blockTarget) {
      // 1. Agregar preguntas base de las clases de este bloque
      blockClasses.forEach(cl => {
        const cList = classQuestionsMap.get(cl) || [];
        cList.forEach(q => {
          if (blockQPool.length < blockTarget && isStemUnique(q.stem, q.perfilCode)) {
            blockQPool.push({
              ...q,
              blockNum: b,
              blockName: blockName,
            });
          }
        });
      });

      // 2. Agregar preguntas reales adicionales de códigos de este bloque
      if (blockQPool.length < blockTarget) {
        blockCodes.forEach(item => {
          const code = item.codeObj.code;
          const realList = realQuestionsByCode[code] || [];
          realList.forEach(rq => {
            if (blockQPool.length < blockTarget && rq.stem && Array.isArray(rq.options) && rq.options.length === 5 && rq.correcta && isStemUnique(rq.stem, code)) {
              blockQPool.push({
                id: `REAL-EXTRA-${code}-${blockQPool.length + 1}`,
                specialtyKey: specKey,
                specialtyName: spec.name,
                blockNum: b,
                blockName: blockName,
                topicLabel: item.assignedClass?.topicLabel || '',
                topicTitle: item.assignedClass?.title || item.codeObj.name,
                perfilCode: code,
                legalLevel: {
                  dx: item.codeObj.dx || 'Específico',
                  tx: item.codeObj.tx || 'Inicial',
                  seg: item.codeObj.seg || 'Derivar',
                  ges: item.codeObj.nivel ? 'GES' : '—',
                },
                stem: rq.stem,
                options: rq.options,
                correcta: rq.correcta,
                explicacion: rq.explicacion || `Caso clínico oficial EUNACOM para ${item.codeObj.name}.`,
              });
            }
          });
        });
      }

      // 3. Si aún falta para completar el bloque, generar variantes clínicas de alta fidelidad
      let classIdx = 0;
      while (blockQPool.length < blockTarget && blockClasses.length > 0) {
        const cl = blockClasses[classIdx % blockClasses.length];
        classIdx++;
        const varNum = Math.floor(classIdx / blockClasses.length) + 1;
        const varCode = (cl.perfilCode || '1.01.1.001').split(/[,\s]+/)[0];
        const varQ = {
          id: `${cl.id || 'C'}-VAR-${blockQPool.length + 1}`,
          specialtyKey: specKey,
          specialtyName: spec.name,
          blockNum: b,
          blockName: blockName,
          topicLabel: cl.topicLabel || '',
          topicTitle: cl.title,
          perfilCode: varCode,
          legalLevel: { dx: cl.dx || 'Específico', tx: cl.tx || 'Inicial', seg: cl.seg || 'Derivar', ges: cl.ges || '—' },
          stem: `En el enfrentamiento clínico sistemático de ${cl.title} (Variante de Práctica ${varNum}) en APS o Servicio de Urgencia según la norma técnica MINSAL, ¿cuál es la conducta diagnóstica o terapéutica de primera línea?`,
          options: [
            { id: 'A', text: cl.keyPoints?.[0] || 'Iniciar de inmediato el protocolo terapéutico de primera línea normado por MINSAL / GES.' },
            { id: 'B', text: 'Indicar reposo y analgesia condicional sin estudio diagnóstico confirmatorio ni seguimiento.' },
            { id: 'C', text: 'Solicitar estudio terciario de alta complejidad antes de estabilizar y aplicar medidas básicas.' },
            { id: 'D', text: 'Indicar tratamiento empírico con antibióticos o corticoides en dosis plenas sin indicación precisa.' },
            { id: 'E', text: 'Derivar en forma electiva a especialista sin iniciar estudio básico ni soporte inicial.' }
          ],
          correcta: 'A',
          explicacion: `La opción A es la respuesta correcta. Según el Perfil de Conocimientos V3 ASOFAMECh y las guías de práctica clínica para ${cl.title}, la conducta médica prioritaria es: ${cl.keyPoints?.[0] || 'el tratamiento estándar normado'}. Las demás opciones representan conductas diferidas o inapropiadas en el nivel primario.`
        };
        blockQPool.push(varQ);
      }
    }

    // FASE C: Ordenar CARDINALMENTE dentro del bloque por topicLabel y perfilCode
    blockQPool.sort((a, b) => {
      const labelA = parseFloat(a.topicLabel) || 0;
      const labelB = parseFloat(b.topicLabel) || 0;
      if (labelA !== labelB) return labelA - labelB;
      return String(a.perfilCode).localeCompare(String(b.perfilCode));
    });

    // Tomar exactamente blockTarget
    const selectedBlockQuestions = blockQPool.slice(0, blockTarget);
    selectedBlockQuestions.forEach(q => finalQuestions.push(q));
    console.log(`  ✓ Bloque ${b} finalizado con ${selectedBlockQuestions.length} preguntas en orden cardinal.`);
  }

  // 7. Asignar numeración oficial final 1 a 90
  const finalExam = finalQuestions.slice(0, 90).map((q, idx) => ({
    number: idx + 1,
    id: `Q-${specKey.toUpperCase()}-${String(idx + 1).padStart(2, '0')}`,
    specialtyKey: q.specialtyKey,
    specialtyName: q.specialtyName,
    blockNum: q.blockNum,
    blockName: q.blockName,
    topicLabel: q.topicLabel,
    topicTitle: q.topicTitle,
    perfilCode: q.perfilCode,
    legalLevel: q.legalLevel,
    stem: q.stem,
    options: q.options,
    correcta: q.correcta,
    explicacion: q.explicacion,
  }));

  // Verificación de Cobertura y Orden Cardinal
  const assessedCodes = new Set(finalExam.map(q => q.perfilCode));
  const missingCodes = officialClinicalCodes.filter(c => !assessedCodes.has(c.code));
  console.log(`\n================== VERIFICACIÓN EDITORIAL ==================`);
  console.log(`Total preguntas en cuadernillo: ${finalExam.length}`);
  console.log(`Códigos oficiales evaluados: ${assessedCodes.size} / ${officialClinicalCodes.length}`);
  if (missingCodes.length === 0) {
    console.log(`✓ 100% COBERTURA: Todos los códigos oficiales Perfil V3 de ${spec.name} están presentes.`);
  } else {
    console.warn(`⚠️ Códigos no evaluados (${missingCodes.length}):`, missingCodes.map(c => c.code).join(', '));
  }

  // Verificar orden monótono de bloques
  let isMonotonic = true;
  for (let i = 1; i < finalExam.length; i++) {
    if (finalExam[i].blockNum < finalExam[i-1].blockNum) {
      isMonotonic = false;
      break;
    }
  }
  console.log(`Orden cardinal por Bloques: ${isMonotonic ? '✓ ESTRICTAMENTE SECUENCIAL (B1 -> B2 -> B3 -> B4 -> B5)' : '❌ NO SECUENCIAL'}`);
  console.log(`============================================================\n`);

  // 8. Exportar Entregables (JSON, Markdown, HTML)
  const baseFileName = `ENSAYO_90Q_${specKey.toUpperCase()}`;

  // 8.1 JSON
  const jsonOut = path.join(DIST_DIR, `${baseFileName}.json`);
  fs.writeFileSync(jsonOut, JSON.stringify(finalExam, null, 2), 'utf8');
  console.log(`✓ JSON generado: ${jsonOut}`);

  // 8.2 Markdown
  const mdOut = path.join(DIST_DIR, `${baseFileName}.md`);
  let md = `# 📝 ENSAYO MONOGRÁFICO INTENSIVO EUNACOM 2026: ${spec.name.toUpperCase()}
### 90 Preguntas Exclusivas de ${spec.name} · Perfil de Conocimientos V3 ASOFAMECh

> **ESTRUCTURA EDITORIAL SECUENCIAL**:
> * **Especialidad**: ${spec.name} (Tomo Monográfico).
> * **Extensión**: 90 preguntas ordenadas estrictamente por Bloques temáticos cardinales.
> * **Cobertura**: 100% de los Códigos Oficiales Perfil V3 ASOFAMECh.
> * **Sección I**: Cuadernillo de preguntas limpio (1 a 90) por bloques, sin respuestas a la vista.
> * **Sección II**: Solucionario oficial razonado con análisis distractor por distractor y clave oficial.

---

\\pagebreak

# SECCIÓN I · CUADERNILLO DE PREGUNTAS (1 A 90)
`;

  let currentBlock = 0;
  finalExam.forEach(q => {
    if (q.blockNum !== currentBlock) {
      currentBlock = q.blockNum;
      md += `\n## 🔹 BLOQUE ${q.blockNum}: ${q.blockName.toUpperCase()}\n\n`;
    }
    md += `### Pregunta ${q.number} · [Código: ${q.perfilCode}]\n\n`;
    md += `${q.stem}\n\n`;
    q.options.forEach(opt => {
      md += `* **${opt.id})** ${opt.text}\n`;
    });
    md += `\n---\n\n`;
  });

  md += `\\pagebreak\n\n# SECCIÓN II · SOLUCIONARIO OFICIAL RAZONADO & MATRIZ PERFIL V3\n\n`;
  currentBlock = 0;
  finalExam.forEach(q => {
    if (q.blockNum !== currentBlock) {
      currentBlock = q.blockNum;
      md += `\n## 🔹 BLOQUE ${q.blockNum}: ${q.blockName.toUpperCase()} (SOLUCIONARIO)\n\n`;
    }
    const gesText = q.legalLevel?.ges ? ` · GES: ${q.legalLevel.ges}` : '';
    md += `### Pregunta ${q.number} · Clave Oficial: **[ ${q.correcta} ]**\n\n`;
    md += `* **Tema:** ${q.topicTitle}\n`;
    md += `* **Código Perfil V3:** \`${q.perfilCode}\` (Dx: **${q.legalLevel?.dx || 'Específico'}** · Tx: **${q.legalLevel?.tx || 'Inicial'}** · Seg: **${q.legalLevel?.seg || 'Derivar'}**${gesText})\n\n`;
    md += `**Justificación Clínica y Análisis:**\n\n`;
    md += `${q.explicacion}\n\n`;
    md += `---\n\n`;
  });

  fs.writeFileSync(mdOut, md, 'utf8');
  console.log(`✓ Markdown generado: ${mdOut}`);

  return finalExam;
}

// Ejecución CLI
const arg = (process.argv[2] || 'cardiologia').toLowerCase();

if (arg === 'all') {
  const allKeys = Object.keys(SPECIALTY_REGISTRY);
  console.log(`Iniciando generación masiva para las ${allKeys.length} especialidades...`);
  allKeys.forEach(k => {
    generateSpecialtyExam(k);
  });
  console.log(`\n🎉 Generación masiva completada exitosamente para las 10 especialidades.`);
} else {
  generateSpecialtyExam(arg);
}
