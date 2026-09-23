#!/usr/bin/env node

/**
 * Clinical Pathway Generator
 * Converts medical knowledge from datasets into structured decision pathways
 *
 * ERGE Pathway Example:
 * Entry: "Patient with ERGE suspicion"
 *   ↓ (10 frames)
 * Decision: "Red flags or age ≥50?"
 *   ├─ YES → EDA immediately (biopsy + staging)
 *   └─ NO → Clinical management in APS (empirical IBP trial)
 *
 * Usage: node generate_clinical_pathways.cjs gastro-01
 */

const fs = require('fs');
const path = require('path');

/**
 * ERGE & Barrett - The flagship pathway
 */
const ERGE_PATHWAY = {
  id: 'gastro-01-pathway',
  title: 'Algoritmo de Decisión: ERGE y Esófago de Barrett',
  steps: [
    {
      type: 'entry',
      label: 'PACIENTE CON SOSPECHA DE ERGE O SÍNTOMAS TÍPICOS',
      duration: 30,
    },
    {
      type: 'decision',
      label: '¿Presenta banderas rojas o edad ≥ 50 años?',
      duration: 60,
      details: [
        'Banderas rojas: Disfagia, baja de peso, anemia, hematemesis, melena',
        'Edad: ≥ 50 años aumenta riesgo de Barrett y adenocarcinoma',
      ],
    },
    {
      type: 'branch',
      duration: 90,
      yes: [
        'EDA inmediata con biopsias',
        'Determinar presencia de Barrett o erosiones',
        'Obtener estadio de displasia si aplica',
      ],
      no: [
        'Síntomas típicos + <50 años = Diagnóstico CLÍNICO',
        'Prueba empírica con IBP 4-8 semanas',
        'Evaluar respuesta (mejoría >75%)',
      ],
    },
    {
      type: 'decision',
      label: 'Resultado de endoscopía',
      duration: 60,
      details: [
        'Barrett: Metaplasia intestinal del esófago distal',
        'Erosiones grado LA',
        'Esófago normal',
      ],
    },
    {
      type: 'branch',
      duration: 90,
      yes: [
        'Barrett CON DISPLASIA:',
        '→ Referencia urgente a GI especialista',
        '→ Terapia endoscópica o cirugía según grado',
      ],
      no: [
        'Barrett SIN DISPLASIA:',
        '→ IBP continuo + vigilancia cada 2-3 años',
        '→ Cirugía CONTRAINDICADA',
      ],
    },
    {
      type: 'conduct',
      label: 'CONDUCTA FINAL: Manejo y Seguimiento',
      duration: 60,
      warning: false,
    },
  ],
  talkingPoints: [
    'La incompetencia de la barrera antirreflujo es el defecto primario en ERGE',
    'Las relajaciones transitorias del esfínter explican >90% de los episodios',
    'La hernia hiatal agrava el cuadro al desalinear el esfínter con el diafragma crural',
    'En pacientes <50 sin banderas rojas, el diagnóstico es clínico: no necesitan EDA inicial',
    'El Barrett sin displasia requiere IBP continuo + vigilancia, NUNCA cirugía',
    'La disfagia (independiente del tipo de síntoma) obliga a EDA para descartar cáncer',
  ],
};

/**
 * Dispepsia Funcional / Úlcera Péptica Pathway
 */
const DISPEPSIA_PATHWAY = {
  id: 'gastro-02-pathway',
  title: 'Algoritmo: Dispepsia Funcional y Úlcera Péptica',
  steps: [
    {
      type: 'entry',
      label: 'PACIENTE CON DISPEPSIA (Dolor epigástrico/plenitud postprandial)',
      duration: 30,
    },
    {
      type: 'decision',
      label: '¿Edad < 60 años SIN banderas rojas de alarma?',
      duration: 60,
    },
    {
      type: 'branch',
      duration: 90,
      yes: [
        'TEST & TREAT para H. pylori (antes de IBP)',
        'Si H. pylori (+): Erradicación (triple o cuádruple terapia)',
        'Si H. pylori (−): Trial con IBP 4-8 semanas',
      ],
      no: [
        'Edad ≥60 o banderas rojas presentes:',
        'EDA inmediata',
        'Descartar úlcera, cáncer gástrico, o patología estructural',
      ],
    },
    {
      type: 'decision',
      label: 'Respuesta al tratamiento',
      duration: 60,
    },
    {
      type: 'conduct',
      label: 'Síntomas resueltos: Seguimiento en APS, evitar AINE',
      duration: 45,
    },
    {
      type: 'conduct',
      label: 'Síntomas persistentes: Endoscopía y evaluación psicosocial',
      duration: 45,
      warning: true,
    },
  ],
  talkingPoints: [
    'La dispepsia funcional es el 60% de casos sin hallazgos estructurales',
    'El H. pylori es causa reversible: primero test, luego IBP si es negativo',
    'Los AINE son la segunda causa de úlcera péptica (15-20% de usuarios)',
    'La etiología multifactorial requiere considerar factores psicosociales',
  ],
};

/**
 * Hemorragia Digestiva Alta (HDA) - Emergency Pathway
 */
const HDA_PATHWAY = {
  id: 'gastro-03-pathway',
  title: 'Manejo de Hemorragia Digestiva Alta (HDA) - EMERGENCIA',
  steps: [
    {
      type: 'entry',
      label: 'HEMATEMESIS O MELENA (Sangrado de esófago/estómago)',
      duration: 30,
    },
    {
      type: 'decision',
      label: 'Estabilidad hemodinámica',
      duration: 60,
    },
    {
      type: 'branch',
      duration: 90,
      yes: [
        'Estable: Hospitalización, IV, tipaje cruzado',
        'NPO (nada por boca)',
        'EDA en 12-24 horas',
      ],
      no: [
        'Inestable: Reanimación agresiva',
        '2 líneas IV, productos de sangre',
        'EDA URGENTE en sala (<1 hora)',
      ],
    },
    {
      type: 'conduct',
      label: 'Hemostasia endoscópica según etiología (varices vs úlcera)',
      duration: 60,
    },
    {
      type: 'conduct',
      label: 'Manejo post-EDA: IBP, seguimiento de complicaciones',
      duration: 60,
    },
  ],
  talkingPoints: [
    'La mortalidad de HDA sin manejo es >30%',
    'La reanimación agresiva es el primer paso, ANTES de cualquier diagnóstico',
    'Varices esofágicas: Endoscopia + fármacos vasoactivos + profilaxis antibiótica',
    'Úlcera péptica sangrante: Endoscopia hemostática + IBP + erradicación H. pylori',
  ],
};

/**
 * Enfermedad Inflamatoria Intestinal (EII) Pathway
 */
const EII_PATHWAY = {
  id: 'gastro-04-pathway',
  title: 'Enfermedad Inflamatoria Intestinal: Diagnóstico y Manejo Inicial',
  steps: [
    {
      type: 'entry',
      label: 'SÍNTOMAS CRÓNICOS: Diarrea + dolor abdominal + pérdida de peso',
      duration: 30,
    },
    {
      type: 'decision',
      label: '¿Duración > 4 semanas? ¿Marcadores inflamatorios elevados?',
      duration: 60,
    },
    {
      type: 'branch',
      duration: 90,
      yes: [
        'Colonoscopía con biopsias múltiples',
        'Determinar patrón (pancolitis vs segmentaria)',
        'Histología: Inflamación transmural (Crohn) vs mucosa (UC)',
      ],
      no: [
        'Probable infección aguda o intolerancia alimentaria',
        'Manejo sintomático, reevaluar en 2 semanas',
      ],
    },
    {
      type: 'decision',
      label: 'Tipo de EII y gravedad',
      duration: 60,
    },
    {
      type: 'conduct',
      label: 'Leve-Moderada: 5-ASA ± corticoides',
      duration: 45,
    },
    {
      type: 'conduct',
      label: 'Grave: Hospitalización, nutrición, biólogicos (anti-TNF), considerar cirugía',
      duration: 45,
      warning: true,
    },
  ],
  talkingPoints: [
    'La EII es condición crónica que requiere manejo por especialista',
    'El Crohn afecta transmuralmente (todo el GI), UC solo colon',
    'Complicaciones de Crohn: Fístulas, estenosis, abscesos intraabdominales',
    'La malnutrición y deficiencias vitamínicas son comunes: requieren suplementación',
  ],
};

/**
 * Cáncer Gástrico Precoz - Red Flags & Screening
 */
const GASTRIC_CANCER_PATHWAY = {
  id: 'gastro-05-pathway',
  title: 'Cáncer Gástrico Precoz: Reconocimiento de Banderas Rojas',
  steps: [
    {
      type: 'entry',
      label: 'PACIENTE CON DISPEPSIA CRÓNICA O SÍNTOMAS NUEVOS',
      duration: 30,
    },
    {
      type: 'decision',
      label: '¿Edad > 60 años? ¿Antecedentes de úlcera o H. pylori?',
      duration: 60,
    },
    {
      type: 'branch',
      duration: 90,
      yes: [
        'EDA OBLIGATORIA, incluso si síntomas leves',
        'Biopsias de cualquier úlcera o área sospechosa',
        'H. pylori seropositivo: Erradicación + vigilancia',
      ],
      no: [
        'Síntomas < 4 semanas sin alarma: Trial IBP 4 semanas',
        'Reevaluar si persisten síntomas',
      ],
    },
    {
      type: 'conduct',
      label: 'Si se encuentra cáncer precoz (T1a-T1b): Referencia oncología urgente',
      duration: 60,
      warning: true,
    },
  ],
  talkingPoints: [
    'La detección precoz es clave: T1 tiene >90% de 5-año supervivencia',
    'El H. pylori es factor de riesgo obligado a tratar y vigilar',
    'La familia de primer grado del paciente con cáncer gástrico debe ser cribada',
  ],
};

/**
 * Síndrome de Intestino Irritable (SII) - Diagnóstico ROMA IV
 */
const IBS_PATHWAY = {
  id: 'gastro-06-pathway',
  title: 'Síndrome de Intestino Irritable (SII): Diagnóstico y Manejo',
  steps: [
    {
      type: 'entry',
      label: 'SÍNTOMAS ABDOMINALES CRÓNICOS (> 3 meses)',
      duration: 30,
    },
    {
      type: 'decision',
      label: '¿Criterios ROMA IV presentes? ¿Sin banderas rojas?',
      duration: 60,
      details: [
        'ROMA IV: Dolor abdominal recurrente ≥1 día/semana, asociado a deposiciones',
        'Banderas rojas ausentes: No pérdida peso, no anemia, no sangrado',
      ],
    },
    {
      type: 'branch',
      duration: 90,
      yes: [
        'DIAGNÓSTICO CLÍNICO de SII (subtipo: Diarrea, Estreñimiento, Mixto)',
        'Manejo: Dieta personalizada, ejercicio, psicoterapia',
        'Fármacos según síntomas (antidiarreicos, laxantes, antiespasmódicos)',
      ],
      no: [
        'Presencia de alarma: EDA y/o colonoscopía',
        'Descartar inflamación, neoplasia, o infección crónica',
      ],
    },
    {
      type: 'conduct',
      label: 'Seguimiento: APS, evitar fármacos innecesarios, educación del paciente',
      duration: 45,
    },
  ],
  talkingPoints: [
    'SII afecta 10-15% de la población general, más mujeres',
    'El diagnóstico es clínico, no existe prueba específica',
    'Los antidepresivos tricíclicos son efectivos incluso en ausencia de depresión',
    'La psicoterapia (CBT, mindfulness) tiene evidencia sólida',
  ],
};

/**
 * Master pathway registry
 */
const PATHWAYS = {
  'gastro-01': ERGE_PATHWAY,
  'gastro-02': DISPEPSIA_PATHWAY,
  'gastro-03': HDA_PATHWAY,
  'gastro-04': EII_PATHWAY,
  'gastro-05': GASTRIC_CANCER_PATHWAY,
  'gastro-06': IBS_PATHWAY,
};

/**
 * Generate pathway JSON
 */
function generatePathway(classId) {
  const pathway = PATHWAYS[classId];

  if (!pathway) {
    console.error(`❌ Pathway not found for ${classId}`);
    return null;
  }

  const outputDir = path.join(__dirname, '../pathways');
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  const outputFile = path.join(outputDir, `${classId}_pathway.json`);
  fs.writeFileSync(outputFile, JSON.stringify(pathway, null, 2));

  console.log(`✓ Pathway generated: ${classId}`);
  console.log(`  Total steps: ${pathway.steps.length}`);
  console.log(`  Duration: ${pathway.steps.reduce((sum, s) => sum + (s.duration || 30), 0)} frames`);
  console.log(`  File: ${outputFile}`);

  return pathway;
}

/**
 * Generate all pathways
 */
function generateAllPathways() {
  Object.keys(PATHWAYS).forEach(classId => {
    generatePathway(classId);
  });

  console.log('\n✓ All pathways generated!');
  console.log(`  Total pathways: ${Object.keys(PATHWAYS).length}`);
}

// CLI
const classId = process.argv[2];

if (classId === '--all') {
  generateAllPathways();
} else if (classId) {
  generatePathway(classId);
} else {
  console.log('Usage:');
  console.log('  node generate_clinical_pathways.cjs gastro-01');
  console.log('  node generate_clinical_pathways.cjs --all');
}
