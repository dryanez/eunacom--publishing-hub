/**
 * TOMO 19: OBSTETRICIA & MEDICINA MATERNO-FETAL · BLOQUE 2
 * Patologías Médicas del Embarazo (19.5 a 19.9)
 */

const { flowObstetricia } = require('./flow_builder.cjs');

const rawClasses = [
  {
    "id": "ob-05",
    "classId": "ob-05",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Patologías Médicas del Embarazo",
    "topicLabel": "19.5",
    "title": "Trastornos Hipertensivos del Embarazo: HTA Crónica, HTA Gestacional y Preeclampsia sin Criterios de Severidad",
    "perfilCode": "3.01.1.011",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Cubierto por Guía Clínica Perinatal de Síndrome Hipertensivo del Embarazo (MINSAL).",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#33) · EUNACOM Julio 2023 (Q#11) · EUNACOM Diciembre 2021 (Q#4)",
    "frecuencia": "Máxima rentabilidad · Diagnóstico diferencial según semana 20 de gestación y presencia de proteinuria",
    "svg": null,
    "algoTitle": "Algoritmo de Clasificación Diagnóstica del Síndrome Hipertensivo del Embarazo (SHE)",
    "diagramRows": [
      {
        "t": "Embarazada con Presión Arterial ≥ 140/90 mmHg en 2 tomas (separadas por 4h)",
        "s": "Evaluar semana gestacional de inicio: ¿Antes o después de la semana 20?",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Momento de Inicio de la Hipertensión",
        "al": "Inicio < 20 sem vs ≥ 20 sem",
        "ll": "Inicio < Semana 20 de Gestación",
        "left": {
          "t": "HIPERTENSIÓN CRÓNICA",
          "s": "Preexistente al embarazo o persiste > 12 semanas postparto · Ajustar fármacos: Labetalol o Metildopa (¡No IECA/ARA-II!)",
          "type": "warn"
        },
        "rl": "Inicio ≥ Semana 20 de Gestación",
        "right": {
          "t": "HTA GESTACIONAL vs PREECLAMPSIA",
          "s": "Solicitar Proteinuria de 24h (o IPC) y laboratorio de disfunción orgánica materno-fetal",
          "type": "crit"
        }
      },
      {
        "k": "split",
        "q": "Evaluación de Proteinuria (≥ 300 mg/24h o IPC ≥ 0.3)",
        "al": "Presencia de Proteinuria o Disfunción de Órgano Blanco",
        "ll": "Sin Proteinuria ni Daño Orgánico",
        "left": {
          "t": "Hipertensión Gestacional (Transitoria)",
          "s": "PA ≥ 140/90 mmHg sin proteinuria · Buen pronóstico · Parto a las 38-39 semanas",
          "type": "acc"
        },
        "rl": "Proteinuria (+) o Disfunción Orgánica",
        "right": {
          "t": "Preeclampsia sin Criterios de Severidad",
          "s": "PA 140-159 / 90-109 + Proteinuria significativa · Manejo en ARO · Interrupción programada a las 37 semanas",
          "type": "crit"
        }
      }
    ],
    "contexto": "El Síndrome Hipertensivo del Embarazo (SHE) es la principal causa de morbimortalidad materna directa y nacimiento prematuro iatrogénico en Chile. Se divide en cuatro grandes categorías según la semana de aparición y la presencia de proteinuria o daño de órgano blanco: Hipertensión Crónica, Hipertensión Gestacional, Preeclampsia y Preeclampsia sobreagregada a HTA crónica. El médico general debe saber que los IECA y ARA-II están absolutamente contraindicados por teratogenicidad letal, y que la preeclampsia sin criterios de severidad se interrumpe electivamente a las 37 semanas.",
    "contentSections": [
      {
        "subhead": "1. Definición y Clasificación Oficial del SHE (ACOG / MINSAL)",
        "paragraphs": [
          "Se define <strong>Hipertensión Arterial en el Embarazo</strong> como la presión arterial sistólica (PAS) <strong>≥ 140 mmHg</strong> y/o presión arterial diastólica (PAD) <strong>≥ 90 mmHg</strong>, confirmada en al menos dos tomas separadas por un intervalo mínimo de 4 horas (o una toma ≥ 160/110 mmHg confirmada en 15 minutos).",
          "<strong>Clasificación en Cuatro Categorías:</strong>",
          "• <strong>1) Hipertensión Arterial Crónica:</strong> Hipertensión presente <strong>antes del embarazo o diagnosticada ANTES de la semana 20 de gestación</strong>. También incluye la hipertensión que persiste más allá de las 12 semanas del puerperio.",
          "• <strong>2) Hipertensión Gestacional:</strong> Hipertensión que aparece <strong>a partir de la semana 20 de gestación</strong>, en ausencia de proteinuria y sin ningún signo de disfunción de órgano blanco materno ni fetal. Las cifras tensionales se normalizan en las primeras 12 semanas postparto.",
          "• <strong>3) Preeclampsia:</strong> Hipertensión que aparece <strong>después de la semana 20 de gestación</strong>, asociada a <strong>Proteinuria significativa</strong> (≥ 300 mg en orina de 24 horas, o índice proteinuria/creatininuria [IPC] ≥ 0.3 mg/mg). <em>Nota actual fundamental:</em> En ausencia de proteinuria, se diagnostica igualmente preeclampsia si la hipertensión se acompaña de <strong>disfunción de órgano blanco</strong> (plaquetopenia < 100.000, duplicación de transaminasas, creatinina > 1.1 mg/dL, edema pulmonar, síntomas visuales/cerebrales o RCF).",
          "• <strong>4) Preeclampsia Sobreagregada a Hipertensión Crónica:</strong> Paciente con HTA crónica previa que después de la semana 20 presenta aparición brusca de proteinuria, aumento súbito de las cifras tensionales o disfunción orgánica."
        ]
      },
      {
        "subhead": "2. Tratamiento Antihipertensivo en el Embarazo",
        "paragraphs": [
          "• <strong>Fármacos Antihipertensivos de Primera Línea Seguros en el Embarazo:</strong>",
          "  - <strong>Labetalol oral:</strong> 100 a 400 mg cada 8 a 12 horas (máximo 1.200 a 2.400 mg/día). Fármaco de elección por su acción combinada alfa y betabloqueadora.",
          "  - <strong>Metildopa (Alfa-metildopa) oral:</strong> 250 a 500 mg cada 8 horas (máximo 2 g/día). Fármaco clásico de acción central, seguro pero de inicio lento y efecto sedante.",
          "  - <strong>Nifedipino oral (acción retardada):</strong> 10 a 20 mg cada 12 horas (máximo 60-90 mg/día). Bloqueador de canales de calcio.",
          "• <strong>FÁRMACOS ESTRICTAMENTE CONTRAINDICADOS (Pregunta Crítica EUNACOM):</strong>",
          "  - <strong>IECA (Enalapril, Captopril) y ARA-II (Losartán, Valsartán):</strong> <strong>ABSOLUTAMENTE CONTRAINDICADOS durante todo el embarazo</strong> por fetotoxicidad severa: producen disgenesia renal fetal, anuria, oligohidramnios severo, hipoplasia pulmonar, deformidades craneofaciales y muerte fetal intrauterina.",
          "  - <strong>Diuréticos (Furosemida, Hidroclorotiazida):</strong> Contraindicados porque reducen aún más el volumen plasmático materno y empeoran la perfusión útero-placentaria (solo se usan ante Edema Agudo de Pulmón)."
        ]
      },
      {
        "subhead": "3. Manejo de la Preeclampsia sin Criterios de Severidad",
        "paragraphs": [
          "• Se define por PA entre 140-159 / 90-109 mmHg con proteinuria, pero <strong>sin síntomas premonitorios ni daño de órgano blanco</strong>.",
          "• <strong>Manejo:</strong> Ingreso a Unidad de Alto Riesgo Obstétrico (ARO) para estudio materno-fetal completo (hemograma, plaquetas, función hepática, creatinina, ácido úrico, proteinuria de 24h, ecografía y Doppler fetal).",
          "• <strong>Momento de la Interrupción Programada:</strong> La conducta consensuada es mantener vigilancia expectante hasta cumplir las <strong>37 semanas de gestación</strong>, momento en el cual se procede a la <strong>interrupción del embarazo</strong> (mediante inducción del parto vaginal si las condiciones cervicales son favorables), balanceando los riesgos maternos frente a la madurez fetal completa."
        ]
      }
    ],
    "table": {
      "title": "Clasificación y Criterios Diagnósticos de los Trastornos Hipertensivos del Embarazo",
      "headers": [
        "Categoría Clínica",
        "Momento de Aparición",
        "Presencia de Proteinuria",
        "Resolución Postparto"
      ],
      "rows": [
        [
          "Hipertensión Crónica",
          "Antes de semana 20 (o previa)",
          "Ausente (salvo nefropatía basal)",
          "Persiste más allá de 12 semanas postparto"
        ],
        [
          "Hipertensión Gestacional",
          "Semana 20 o posterior",
          "Ausente (< 300 mg/24h)",
          "Se normaliza antes de 12 semanas postparto"
        ],
        [
          "Preeclampsia sin Severidad",
          "Semana 20 o posterior",
          "Presente (≥ 300 mg/24h o IPC ≥ 0.3)",
          "Se normaliza en el puerperio"
        ],
        [
          "Preeclampsia con Severidad",
          "Semana 20 o posterior",
          "Presente o Daño de Órgano Blanco",
          "Riesgo materno grave · Requiere interrupción"
        ],
        [
          "HTA Crónica + Preeclampsia",
          "Hipertensión previa a sem 20",
          "Aparición de novo de proteinuria > 20 sem",
          "Empeoramiento agudo del pronóstico"
        ]
      ]
    },
    "vignette": "Secundigesta de 34 semanas, con antecedente de hipertensión arterial crónica en tratamiento con Enalapril 10 mg al día desde hace 3 años, acude por primera vez a control prenatal en este embarazo. Al examen físico en el box se constata PA de 144/92 mmHg, confirmada a los 15 minutos en el brazo contralateral. Se encuentra asintomática, con altura uterina acorde y latidos cardiofetales presentes.",
    "explicacion": "Una paciente con hipertensión arterial previa al embarazo o diagnosticada antes de la semana 20 presenta una Hipertensión Arterial Crónica. La conducta médica inmediata más crítica es SUSPENDER DE INMEDIATO el Enalapril, dado que los Inhibidores de la Enzima Convertidora de Angiotensina (IECA) y los ARA-II están formalmente contraindicados en el embarazo debido a su teratogenicidad nefrotóxica fetal (hipoplasia renal, anuria y oligohidramnios). En su reemplazo, se debe iniciar un antihipertensivo seguro en el embarazo como Labetalol oral o Alfa-metildopa, solicitando proteinuria de 24 horas y ecografía con Doppler para descartar RCF o preeclampsia sobreagregada.",
    "keyPoints": [
      "Hipertensión en el embarazo: PA sistólica ≥ 140 mmHg y/o diastólica ≥ 90 mmHg.",
      "HTA crónica: diagnosticada antes de la semana 20 de gestación o previa al embarazo.",
      "Preeclampsia: hipertensión que aparece después de la semana 20 asociada a proteinuria (≥ 300 mg/24h).",
      "Antihipertensivos de 1.ª línea orales seguros: Labetalol, Alfa-metildopa y Nifedipino.",
      "¡IECA (Enalapril) y ARA-II (Losartán) están ESTRICTAMENTE CONTRAINDICADOS por daño renal fetal!",
      "La preeclampsia sin criterios de severidad se interrumpe de forma programada a las 37 semanas.",
      "La presencia de plaquetopenia, duplicación de transaminasas o creatinina elevada define preeclampsia severa aun sin proteinuria."
    ],
    "questions": [
      {
        "stem": "Una primigesta de 32 semanas de gestación acude a control prenatal. Se constata presión arterial de 145/95 mmHg, repetida a las 4 horas con 148/94 mmHg. Se encuentra asintomática, sin cefalea ni escotomas. La proteinuria de 24 horas informa 450 mg (normal < 300 mg). El recuento de plaquetas es de 210.000/mm³, creatinina 0.7 mg/dL y transaminasas normales. ¿Cuál es el diagnóstico más adecuado?",
        "options": [
          {
            "id": "A",
            "text": "Hipertensión arterial crónica"
          },
          {
            "id": "B",
            "text": "Hipertensión gestacional transitoria"
          },
          {
            "id": "C",
            "text": "Preeclampsia sin criterios de severidad"
          },
          {
            "id": "D",
            "text": "Síndrome HELLP incipiente"
          },
          {
            "id": "E",
            "text": "Eclampsia inminente"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. La HTA crónica se diagnostica antes de la semana 20.\nB) Incorrecta. La hipertensión gestacional no presenta proteinuria significativa (< 300 mg/24h).\nC) Correcta. La paciente presenta hipertensión arterial de novo diagnosticada después de la semana 20 (semana 32), asociada a proteinuria significativa (450 mg en 24 horas, umbral ≥ 300 mg), en ausencia de síntomas premonitorios de eclampsia o daño de órgano blanco hematológico, hepático o renal (plaquetas normales, enzimas hepáticas normales, creatinina normal y PA < 160/110). Esto configura la definición exacta de Preeclampsia sin Criterios de Severidad.\nD) Incorrecta. El síndrome HELLP requiere hemólisis, enzimas hepáticas elevadas y plaquetopenia < 100.000.\nE) Incorrecta. No tiene síntomas neurológicos.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.011"
      },
      {
        "stem": "¿Cuál de los siguientes fármacos antihipertensivos está CONTRAINDICADO DE FORMA ABSOLUTA durante el segundo y tercer trimestre del embarazo debido a su asociación con hipoplasia pulmonar, oligohidramnios y falla renal fetal anúrica irreversible?",
        "options": [
          {
            "id": "A",
            "text": "Labetalol"
          },
          {
            "id": "B",
            "text": "Alfa-metildopa"
          },
          {
            "id": "C",
            "text": "Enalapril"
          },
          {
            "id": "D",
            "text": "Nifedipino"
          },
          {
            "id": "E",
            "text": "Hidralazina"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. Es el fármaco de primera línea seguro.\nB) Incorrecta. Es un antihipertensivo central con amplísimo perfil de seguridad en embarazo.\nC) Correcta. Los Inhibidores de la Enzima Convertidora de Angiotensina (IECA, como Enalapril) y los Antagonistas de los Receptores de Angiotensina II (ARA-II, como Losartán) están absolutamente contraindicados en el embarazo. Durante el 2.° y 3.er trimestre, el bloqueo del sistema renina-angiotensina fetal causa disminución crítica de la perfusión renal del feto, produciendo anuria, oligohidramnios severo (secuencia de Potter), hipoplasia pulmonar letal, hipocalvaria ósea y muerte perinatal.\nD) Incorrecta. Es un bloqueador de canales de calcio seguro.\nE) Incorrecta. Vasodilatador seguro en crisis hipertensiva.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.011"
      }
    ]
  },
  {
    "id": "ob-06",
    "classId": "ob-06",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Patologías Médicas del Embarazo",
    "topicLabel": "19.6",
    "title": "Emergencias Hipertensivas en el Embarazo: Preeclampsia Severa, Eclampsia, Síndrome HELLP y Sulfato de Magnesio",
    "perfilCode": "3.01.2.004",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Emergencia obstétrica mayor con riesgo inminente de muerte materna y fetal.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#11) · EUNACOM Julio 2023 (Q#28) · EUNACOM Diciembre 2022 (Q#16)",
    "frecuencia": "Máxima rentabilidad · Protocolo de Sulfato de Magnesio (Zuspan), Labetalol EV y criterios de HELLP",
    "svg": null,
    "algoTitle": "Algoritmo de Manejo de la Emergencia Hipertensiva, Eclampsia y Síndrome HELLP en Sala de Partos",
    "diagramRows": [
      {
        "t": "Crisis Hipertensiva (PA ≥ 160/110 mmHg) o Preeclampsia con Criterios de Severidad",
        "s": "Criterios: PA ≥ 160/110 · Plaquetas < 100.000 · Transaminasas x 2 · Creatinina > 1.1 · Epigastralgia · Cefalea/Escotomas",
        "type": "crit"
      },
      {
        "t": "Dos Pilares Terapéuticos Simultáneos Inmediatos",
        "s": "1) Prevención/Manejo de Convulsiones (Neuroprotección) + 2) Control de la Presión Arterial",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Fármacos Inmediatos Obligatorios",
        "al": "Sulfato de Magnesio + Antihipertensivo EV",
        "ll": "Sulfato de Magnesio (Esquema de Zuspan)",
        "left": {
          "t": "Neuroprotección Anticonvulsivante",
          "s": "Carga: 4 a 5 g EV en 20 min · Mantención: 1 a 2 g/h en BIC · Antídoto: Gluconato de Calcio al 10% 1g EV",
          "type": "crit"
        },
        "rl": "Antihipertensivo de Rescate EV",
        "right": {
          "t": "Labetalol EV o Nifedipino Oral",
          "s": "Labetalol: 20 mg EV en bolo, duplicar cada 10-20 min (40, 80 mg) o Nifedipino 10-20 mg VO · Meta: 140-150 / 90-100",
          "type": "acc"
        }
      },
      {
        "t": "Interrupción del Embarazo tras Estabilización Materna",
        "s": "Eclampsia o HELLP: Interrumpir inmediatamente tras estabilizar · No intentar mantener embarazo",
        "type": "warn"
      }
    ],
    "contexto": "Las emergencias hipertensivas en el embarazo (Preeclampsia con criterios de severidad, Eclampsia y Síndrome HELLP) representan catástrofes obstétricas con riesgo de hemorragia cerebral materna (principal causa de muerte en eclampsia), desprendimiento de placenta, rotura hepática y muerte fetal. El médico general debe actuar con reflejos de reanimación: prescribir de inmediato el protocolo de Sulfato de Magnesio (el único fármaco que previene y trata las convulsiones eclámpticas), administrar Labetalol EV para bajar la PA a niveles seguros y activar la interrupción expedita del embarazo.",
    "contentSections": [
      {
        "subhead": "1. Criterios de Severidad en Preeclampsia",
        "paragraphs": [
          "La presencia de <strong>al menos UNO</strong> de los siguientes criterios clasifica a la preeclampsia como <strong>Preeclampsia con Criterios de Severidad (Severa)</strong>:",
          "• <strong>Presión Arterial Severa:</strong> PAS <strong>≥ 160 mmHg</strong> y/o PAD <strong>≥ 110 mmHg</strong> confirmada en dos tomas con 15 minutos de diferencia.",
          "• <strong>Trombocitopenia:</strong> Recuento de plaquetas <strong>< 100.000/mm³</strong>.",
          "• <strong>Disfunción Hepática:</strong> Elevación de transaminasas séricas (GOT/AST o GPT/ALT) al <strong>doble del límite superior normal</strong>, o <strong>dolor severo persistente en epigastrio o hipocondrio derecho</strong> que no cede a analgésicos (por distensión de la cápsula de Glisson y hematoma subcapsular).",
          "• <strong>Insuficiencia Renal Progresiva:</strong> Creatinina sérica <strong>> 1.1 mg/dL</strong> (o duplicación del valor basal).",
          "• <strong>Edema Pulmonar Agudo.</strong>",
          "• <strong>Síntomas Neurológicos / Visuales Premonitorios de Eclampsia:</strong> Cefalea holocraneana severa refractaria a analgésicos, escotomas centellantes, fosfenos, visión borrosa, amaurosis fugaz, hiperreflexia patológica con clonus agotable o inagotable."
        ]
      },
      {
        "subhead": "2. Eclampsia y Síndrome HELLP",
        "paragraphs": [
          "• <strong>Eclampsia:</strong> Aparición de <strong>convulsiones tónico-clónicas generalizadas</strong> y/o coma en una mujer con preeclampsia, en ausencia de otras causas neurológicas (epilepsia, hemorragia subaracnoidea, meningitis). Puede ocurrir en el anteparto (50%), intraparto (25%) o puerperio temprano (25%). <em>Complicación letal materna:</em> Hemorragia intracerebral masiva.",
          "• <strong>Síndrome HELLP (Criterios de Tennessee):</strong>",
          "  - <strong>H (Hemolysis):</strong> Anemia hemolítica microangiopática con esquistocitos en frotis sanguíneo, <strong>Bilirrubina total ≥ 1.2 mg/dL</strong> (a expensas de indirecta) o <strong>LDH > 600 U/L</strong>.",
          "  - <strong>EL (Elevated Liver enzymes):</strong> Transaminasas séricas (AST/GOT) <strong>≥ 70 U/L</strong> o al doble del valor normal.",
          "  - <strong>LP (Low Platelets):</strong> Trombocitopenia con <strong>plaquetas < 100.000/mm³</strong>.",
          "  - <em>Complicación quirúrgica catastrófica:</em> <strong>Hematoma subcapsular hepático y rotura hepática</strong> (dolor epigástrico en puñalada con hemoperitoneo y shock hipovolémico súbito)."
        ]
      },
      {
        "subhead": "3. Manejo Farmacológico: Sulfato de Magnesio y Antihipertensivos Endovenosos",
        "paragraphs": [
          "• <strong>Pilar 1: Sulfato de Magnesio (MgSO4) (Prevención y Manejo de Convulsiones):</strong>",
          "  - <strong>Mecanismo:</strong> Bloqueador de receptores NMDA cerebrales, vasodilatador cerebral y estabilizador de membrana. Es muy superior a diazepam o fenitoína.",
          "  - <strong>Esquema de Zuspan (Vía Endovenosa):</strong>",
          "    • <strong>Dosis de Carga:</strong> <strong>4 a 5 gramos de Sulfato de Magnesio al 20% diluidos en 100 mL de SG 5% o SF 0.9% por vía endovenosa en 15 a 20 minutos</strong>.",
          "    • <strong>Dosis de Mantenimiento:</strong> <strong>1 a 2 gramos por hora en infusión continua</strong> con bomba de infusión durante todo el trabajo de parto y mantenida por <strong>24 horas postparto</strong>.",
          "  - <strong>Control de Toxicidad por Magnesio (Monitoreo Clínico Obligatorio):</strong>",
          "    1) <strong>Reflejo rotuliano o patelar presente</strong> (su abolición es el primer signo de toxicidad, a niveles de 8-10 mEq/L).",
          "    2) <strong>Frecuencia respiratoria ≥ 12 a 16 rpm</strong> (la depresión respiratoria ocurre con niveles > 12 mEq/L).",
          "    3) <strong>Diuresis horaria ≥ 30 mL/hora (o > 0.5 mL/kg/h)</strong> (el magnesio se excreta 100% por el riñón; la oliguria provoca intoxicación acumulativa).",
          "  - <strong>Antídoto Obligatorio ante Toxicidad por Magnesio:</strong> <strong>Gluconato de Calcio al 10% (1 gramo EV lento en 3 a 5 minutos)</strong>. Debe estar disponible al lado de la cama.",
          "• <strong>Pilar 2: Control Antihipertensivo de Emergencia (Crisis Hipertensiva PA ≥ 160/110):</strong>",
          "  - <strong>Labetalol Endovenoso:</strong> Bolo inicial de <strong>20 mg EV</strong> en 2 minutos. Si la PA persiste ≥ 160/110 a los 10-20 min, administrar <strong>40 mg EV</strong>, luego <strong>80 mg EV</strong> cada 10-20 min (dosis máxima acumulada 220-300 mg).",
          "  - <strong>Nifedipino de liberación rápida oral:</strong> 10 a 20 mg vía oral (tragar, ¡no morder ni sublingual por hipotensión brusca!).",
          "  - <strong>Meta terapéutica:</strong> Bajar la PA a <strong>140-150 / 90-100 mmHg</strong>. <em>¡Nunca bajar la presión a cifras normales (< 120/80) para no colapsar la perfusión placentaria!</em>",
          "• <strong>Pilar 3: Interrupción del Embarazo:</strong>",
          "  - En <strong>Eclampsia y Síndrome HELLP</strong>: La interrupción del embarazo es la <strong>ÚNICA cura definitiva</strong>. Debe realizarse de inmediato una vez estabilizada la madre con sulfato de magnesio y control tensional, independientemente de la edad gestacional."
        ]
      }
    ],
    "table": {
      "title": "Criterios Diagnósticos del Síndrome HELLP (Criterios de Tennessee)",
      "headers": [
        "Componente HELLP",
        "Parámetro de Laboratorio",
        "Valor de Corte Diagnóstico",
        "Riesgo Clínico"
      ],
      "rows": [
        [
          "H - Hemólisis Microangiopática",
          "LDH sérica / Bilirrubina / Frotis",
          "LDH > 600 U/L · BT ≥ 1.2 mg/dL · Esquistocitos",
          "Anemia aguda severa, hemoglobinuria"
        ],
        [
          "EL - Elevación Enzimas Hepáticas",
          "Transaminasas séricas (AST/GOT)",
          "AST ≥ 70 U/L (o doble del valor normal)",
          "Hematoma subcapsular hepático, necrosis"
        ],
        [
          "LP - Trombocitopenia (Plaquetas)",
          "Recuento de plaquetas en sangre",
          "Plaquetas < 100.000 / mm³",
          "Coagulopatía, CID, hemorragia postparto"
        ]
      ]
    },
    "severityTable": {
      "title": "Niveles Plasmáticos de Magnesio y Signos de Toxicidad Clínica",
      "headers": [
        "Nivel Plasmático de Magnesio",
        "Efecto Fisiológico / Clínico",
        "Signo de Examen Físico",
        "Conducta Médica"
      ],
      "rows": [
        [
          "4.0 a 7.0 mEq/L (4.8 - 8.4 mg/dL)",
          "Rango Terapéutico Anticonvulsivante",
          "Reflejos conservados, diuresis normal",
          "Mantener infusión continua de 1-2 g/h"
        ],
        [
          "8.0 a 10.0 mEq/L",
          "Pérdida de la transmisión neuromuscular",
          "Abolición del Reflejo Rotuliano (Patelar)",
          "Suspender infusión de Sulfato de Magnesio"
        ],
        [
          "10.0 a 12.0 mEq/L",
          "Parálisis muscular y depresión central",
          "Depresión respiratoria (FR < 12 rpm)",
          "Suspender MgSO4 + Gluconato de Calcio EV"
        ],
        [
          "> 15.0 mEq/L",
          "Bloqueo de conducción cardíaca AV",
          "Paro cardiorrespiratorio en asistolía",
          "Gluconato Calcio EV + Intubación y RCP"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Protocolo Farmacológico Estandarizado de Emergencia Hipertensiva Obstétrica",
      "headers": [
        "Fármaco",
        "Dosis de Carga Inicial",
        "Mantenimiento / Dosis Repetida",
        "Antídoto / Cuidados Críticos"
      ],
      "rows": [
        [
          "Sulfato de Magnesio (Zuspan)",
          "4 a 5 g EV en 15-20 minutos",
          "1 a 2 g/hora en BIC continua x 24h",
          "Gluconato de Calcio al 10% (1g EV en 3 min)"
        ],
        [
          "Labetalol Endovenoso",
          "20 mg EV directo en 2 minutos",
          "40 mg a los 10 min -> 80 mg c/10 min (máx 300 mg)",
          "Meta PAS 140-150 / PAD 90-100 mmHg"
        ],
        [
          "Nifedipino Oral",
          "10 a 20 mg oral (tragar)",
          "Repetir 10-20 mg en 30 minutos SOS",
          "¡No usar vía sublingual! (hipotensión severa)"
        ],
        [
          "Hidralazina Endovenosa",
          "5 mg EV lento en 2 minutos",
          "5 a 10 mg cada 20-30 min (máx 20-30 mg)",
          "Alternativa si bradicardia o asma (no Labetalol)"
        ]
      ]
    },
    "vignette": "Embarazada de 35 semanas acude traída por el SAMU tras presentar una convulsión tónico-clónica generalizada en su hogar que duró 2 minutos, con pérdida de conciencia y relajación de esfínteres. Al llegar al box de reanimación obstétrica se encuentra en período postictal, desorientada y con sialorrea. Control de signos vitales: PA 174/114 mmHg, FC 108 lpm, FR 18 rpm, SatO2 96%. En el examen segmentario destaca hiperreflexia rotuliana patológica con clonus bilateral y edema en extremidades inferiores (+++). La monitorización fetal muestra FCF de 145 lpm con desaceleraciones variables transitorias.",
    "explicacion": "La paciente presenta un cuadro categórico de Eclampsia (crisis convulsiva tónico-clónica asociada a crisis hipertensiva en el tercer trimestre). La conducta médica de reanimación inmediata e ineludible consiste en: 1) Proteger la vía aérea y oxigenoterapia; 2) Administrar inmediatamente Sulfato de Magnesio por vía endovenosa (dosis de carga de 4 a 5 g en 15-20 minutos seguida de infusión continua a 1-2 g/hora según esquema de Zuspan) para yugular y prevenir nuevas convulsiones; 3) Tratar la crisis hipertensiva con Labetalol EV (20 mg en bolo) para llevar la PA a rango seguro (140-150/90-100 mmHg); y 4) Planificar la interrupción urgente del embarazo mediante cesárea una vez lograda la estabilización hemodinámica y neurológica materna.",
    "keyPoints": [
      "Preeclampsia severa: PA ≥ 160/110, plaquetas < 100.000, transaminasas elevadas x2, creatinina > 1.1 o epigastralgia.",
      "Eclampsia: Convulsiones tónico-clónicas generalizadas en una paciente con preeclampsia.",
      "El Sulfato de Magnesio es el fármaco de elección para prevenir y tratar la eclampsia (muy superior a benzodiacepinas).",
      "Dosis de Sulfato de Magnesio: Carga de 4-5 g EV en 20 min, luego mantención de 1-2 g/h en BIC x 24h postparto.",
      "Monitoreo estricto de magnesemia clínica: Reflejo rotuliano presente, FR ≥ 12 rpm y diuresis ≥ 30 mL/h.",
      "El antídoto de la intoxicación por sulfato de magnesio es el Gluconato de Calcio al 10% (1 g EV lento).",
      "Síndrome HELLP: Hemólisis (LDH > 600), Transaminasas elevadas (AST ≥ 70) y Plaquetopenia (< 100.000).",
      "La crisis hipertensiva (PA ≥ 160/110) se trata de rescate con Labetalol EV o Nifedipino oral."
    ],
    "questions": [
      {
        "stem": "Una paciente de 34 semanas con diagnóstico de preeclampsia con criterios de severidad se encuentra en tratamiento con infusión continua de Sulfato de Magnesio a 2 g/hora. Al realizar el control clínico horario, el médico constata: paciente somnolienta pero orientada, frecuencia respiratoria de 10 respiraciones por minuto y ausencia completa del reflejo rotuliano bilateral. La diuresis de la última hora fue de 15 mL. ¿Cuál es la conducta médica inmediata?",
        "options": [
          {
            "id": "A",
            "text": "Aumentar la infusión de sulfato de magnesio a 3 g/hora para asegurar efecto anticonvulsivante"
          },
          {
            "id": "B",
            "text": "Suspender de inmediato la infusión de Sulfato de Magnesio y administrar Gluconato de Calcio al 10% 1 g por vía endovenosa lenta"
          },
          {
            "id": "C",
            "text": "Administrar un bolo de Diazepam endovenoso"
          },
          {
            "id": "D",
            "text": "Realizar intubación orotraqueal sin administrar antídotos"
          },
          {
            "id": "E",
            "text": "Indicar Furosemida endovenosa para forzar la diuresis"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Aumentar el magnesio provocaría paro respiratorio y cardíaco inminente.\nB) Correcta. La paciente presenta una Intoxicación Aguda por Sulfato de Magnesio, manifestada por la tríada clásica: abolición del reflejo rotuliano (ocurre con magnesemia > 8-10 mEq/L), bradipnea/depresión respiratoria con FR < 12 rpm (ocurre con niveles > 10-12 mEq/L) y oliguria (< 30 mL/h) que favorece la acumulación del fármaco al excretarse 100% por vía renal. La conducta inmediata de emergencia consiste en suspender de inmediato la infusión de sulfato de magnesio y administrar el antídoto específico: Gluconato de Calcio al 10% (1 ampolla de 10 mL = 1 gramo) administrado por vía endovenosa lenta en 3 a 5 minutos para antagonizar el bloqueo neuromuscular.\nC) Incorrecta. El diazepam empeoraría la depresión respiratoria.\nD) Incorrecta. El gluconato de calcio revierte el bloqueo; la intubación solo se requiere si persiste el paro respiratorio.\nE) Incorrecta. Los diuréticos no revierten la toxicidad aguda.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.2.004"
      },
      {
        "stem": "Una embarazada de 32 semanas consulta en urgencia por dolor epigástrico intenso y constante irradiado al hipocondrio derecho y náuseas. PA: 165/105 mmHg. En los exámenes de laboratorio se constata: Hemoglobina 9.2 g/dL, Frotis con abundantes esquistocitos, LDH 880 U/L, Bilirrubina total 2.4 mg/dL a predominio indirecto, GOT/AST 160 U/L, GPT/ALT 145 U/L y recuento de plaquetas de 62.000/mm³. ¿Cuál es el diagnóstico y la conducta obstétrica definitiva?",
        "options": [
          {
            "id": "A",
            "text": "Hepatitis viral aguda; manejo médico ambulatorio con reposo"
          },
          {
            "id": "B",
            "text": "Colecistitis aguda litiásica; colecistectomía laparoscópica de urgencia"
          },
          {
            "id": "C",
            "text": "Síndrome HELLP; estabilización materna con sulfato de magnesio, antihipertensivos e interrupción del embarazo"
          },
          {
            "id": "D",
            "text": "Púrpura trombocitopénico trombótico; plasmaféresis de urgencia manteniendo el embarazo"
          },
          {
            "id": "E",
            "text": "Hígado graso agudo del embarazo; manejo expectante con corticoides por 7 días"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. La hepatitis no presenta hemólisis microangiopática ni plaquetopenia con hipertensión arterial.\nB) Incorrecta. La epigastralgia en preeclampsia refleja distensión de la cápsula hepática de Glisson.\nC) Correcta. El cuadro clínico y analítico cumple estrictamente los criterios diagnósticos del Síndrome HELLP (Tennessee): Hemólisis microangiopática (esquistocitos, LDH > 600 U/L, bilirrubina indirecta elevada), Enzimas hepáticas elevadas (AST/ALT > 70 U/L) y Plaquetopenia (< 100.000/mm³), en una paciente con hipertensión severa y dolor en cuadrante superior derecho. El síndrome HELLP es una emergencia obstétrica que requiere hospitalización inmediata en UCI/ARO, profilaxis con Sulfato de Magnesio, control antihipertensivo y la interrupción expedita del embarazo (independiente de la edad gestacional), que constituye el único tratamiento causal curativo.\nD) Incorrecta. El contexto hipertensivo del tercer trimestre define HELLP.\nE) Incorrecta. El hígado graso cursa con hipoglicemia severa, hiperuricemia extrema y coagulopatía precoz.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.2.004"
      },
      {
        "stem": "Durante el trabajo de parto de una primigesta de 38 semanas con preeclampsia severa, se registra una presión arterial sostenida de 175/115 mmHg. La paciente refiere cefalea frontal punzante. ¿Cuál es el fármaco de rescate endovenoso de primera línea para el control rápido de la crisis hipertensiva en este contexto?",
        "options": [
          {
            "id": "A",
            "text": "Nitroprusiato de sodio en infusión continua"
          },
          {
            "id": "B",
            "text": "Labetalol endovenoso en bolos crecientes (20 mg inicial, luego 40 y 80 mg)"
          },
          {
            "id": "C",
            "text": "Enalapril endovenoso a 1.25 mg"
          },
          {
            "id": "D",
            "text": "Furosemida endovenosa en bolo de 40 mg"
          },
          {
            "id": "E",
            "text": "Nifedipino sublingual mordido"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El nitroprusiato produce toxicidad fetal por cianuro/tiocianato y se reserva como último recurso ante edema pulmonar masivo refractario.\nB) Correcta. Para el manejo agudo de la crisis hipertensiva severa en el embarazo (PA ≥ 160/110 mmHg), el fármaco endovenoso de primera línea y de elección absoluta es el Labetalol EV. Se inicia con un bolo de 20 mg EV directo en 2 minutos; si a los 10-20 minutos la PA persiste en rango severo, se administra un segundo bolo de 40 mg, y posteriormente 80 mg cada 10-20 minutos hasta una dosis máxima de 220-300 mg. La meta es reducir la PA a 140-150 / 90-100 mmHg para prevenir la hemorragia cerebral materna sin comprometer la perfusión placentaria.\nC) Incorrecta. Los IECA están absolutamente contraindicados en el embarazo.\nD) Incorrecta. La furosemida disminuye el volumen intravascular y contrae la volemia.\nE) Incorrecta. La vía sublingual de nifedipino está proscrita por riesgo de caída tensional precipitada no controlada, muerte fetal y ACV materno.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.2.004"
      },
      {
        "stem": "¿Cuál es la causa directa más frecuente de muerte materna en pacientes que sufren una crisis de Eclampsia?",
        "options": [
          {
            "id": "A",
            "text": "Ruptura uterina masiva"
          },
          {
            "id": "B",
            "text": "Hemorragia intracerebral / Accidente cerebrovascular hemorrágico"
          },
          {
            "id": "C",
            "text": "Insuficiencia renal aguda tubular"
          },
          {
            "id": "D",
            "text": "Shock anafiláctico por sulfato de magnesio"
          },
          {
            "id": "E",
            "text": "Embolia de líquido amniótico"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. No es la causa principal en eclampsia.\nB) Correcta. En las pacientes con eclampsia y crisis hipertensivas severas del embarazo, la complicación fatal más frecuente que explica más del 60-70% de las muertes maternas es el Accidente Cerebrovascular Hemorrágico (Hemorragia Intracerebral masiva secundaria al fallo de la autorregulación vascular cerebral ante presiones arteriales extremas). Por esta razón, el control enérgico de la crisis hipertensiva con Labetalol o Nifedipino y la profilaxis con Sulfato de Magnesio son de máxima urgencia vital.\nC) Incorrecta. La injuria renal causa morbilidad pero rara vez mortalidad inmediata.\nD) Incorrecta. Extremadamente raro.\nE) Incorrecta. Es una catástrofe del parto pero no secundaria a eclampsia.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.2.004"
      }
    ]
  },
  {
    "id": "ob-07",
    "classId": "ob-07",
    "tier": 3,
    "blockNum": 2,
    "blockName": "Patologías Médicas del Embarazo",
    "topicLabel": "19.7",
    "title": "Diabetes Gestacional y Pregestacional: Tamizaje PTGO 75g (24-28 sem), Metas Glucémicas e Insulinoterapia",
    "perfilCode": "3.01.1.004",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Cubierto por Guía Perinatal MINSAL de Diabetes y Embarazo.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#36) · EUNACOM Julio 2023 (Q#33) · EUNACOM Diciembre 2021 (Q#10)",
    "frecuencia": "Máxima rentabilidad · Diagnóstico con glicemia en ayunas en 1.er trimestre vs PTGO 75g a las 24-28 semanas y metas",
    "svg": null,
    "algoTitle": "Algoritmo de Pesquisa, Diagnóstico y Manejo Escalonado de la Diabetes Gestacional (MINSAL)",
    "diagramRows": [
      {
        "t": "Glicemia en Ayunas en Primer Control Prenatal (< 12-20 sem)",
        "s": "Evaluar: Si Glicemia < 100 mg/dL -> Normal (ir a PTGO en sem 24-28)",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Glicemia de Ayunas Alterada en 1.er Trimestre",
        "al": "Glicemias en Ayunas 1.er Trimestre",
        "ll": "Glicemia 100 a 125 mg/dL en 2 ocasiones",
        "left": {
          "t": "DIABETES GESTACIONAL PRECOZ",
          "s": "Confirmar con segunda glicemia en ayunas ≥ 100 mg/dL en días distintos -> Iniciar Dieta y automonitoreo",
          "type": "warn"
        },
        "rl": "Glicemia ≥ 126 mg/dL (o casual ≥ 200)",
        "right": {
          "t": "DIABETES PREGESTACIONAL MANIFIESTA",
          "s": "Diabetes mellitus preexistente no diagnosticada · Alto riesgo de malformaciones congénitas",
          "type": "crit"
        }
      },
      {
        "t": "Tamizaje Universal a las 24 a 28 Semanas: PTGO con 75 g de Glucosa",
        "s": "Glicemia basal y a las 2 horas post-carga oral de 75 g de glucosa anhidra",
        "type": "dec"
      },
      {
        "t": "Criterio Diagnóstico PTGO: Glicemia a las 2 Horas ≥ 140 mg/dL",
        "s": "Dieta normocalórica/fraccionada x 1-2 sem · Si > 20% de glicemias sobre meta (ayunas <95, 2h <120) -> Iniciar INSULINA NPH / Cristalina",
        "type": "crit"
      }
    ],
    "contexto": "La Diabetes Gestacional (DG) es una de las complicaciones médicas más frecuentes del embarazo, afectando a más del 10-12% de las gestantes en Chile debido a la prevalencia de sobrepeso y obesidad. El aumento fisiológico de hormonas diabetogénicas placentarias (lactógeno placentario, progesterona, cortisol y prolactina) en la segunda mitad del embarazo induce una marcada resistencia a la insulina. El médico general debe aplicar rigurosamente el algoritmo chileno de dos pasos (glicemia de ayunas precoz y PTGO 75g a las 24-28 semanas), manejar las metas glucémicas estrictas y saber cuándo prescribir insulina.",
    "contentSections": [
      {
        "subhead": "1. Criterios Diagnósticos Oficiales en Chile (Norma MINSAL)",
        "paragraphs": [
          "En Chile, el diagnóstico se establece mediante dos estrategias temporales:",
          "• <strong>1) En el Primer Trimestre (o antes de la semana 20):</strong>",
          "  - Se solicita <strong>Glicemia en ayunas</strong> a toda embarazada en su examen de ingreso.",
          "  - Si la glicemia es <strong>< 100 mg/dL:</strong> Es normal. Se programa tamizaje con PTGO para las 24-28 semanas.",
          "  - Si la glicemia es de <strong>100 a 125 mg/dL:</strong> Se solicita una <strong>segunda glicemia en ayunas</strong> en días distintos. Si se confirma nuevamente <strong>≥ 100 mg/dL</strong>, se establece el diagnóstico formal de <strong>Diabetes Gestacional Precoz</strong>.",
          "  - Si la glicemia es <strong>≥ 126 mg/dL</strong> en dos ocasiones (o una glicemia al azar ≥ 200 mg/dL con síntomas clásicos o HbA1c ≥ 6.5%): se diagnostica <strong>Diabetes Pregestacional (DM tipo 2 o 1 previa)</strong>.",
          "• <strong>2) En el Segundo Trimestre (entre las 24 y 28 semanas):</strong>",
          "  - A todas las pacientes con glicemia normal en el 1.er trimestre se les realiza la <strong>Prueba de Tolerancia a la Glucosa Oral con 75 gramos de glucosa (PTGO 75g)</strong>.",
          "  - <strong>Criterio Diagnóstico Único en Chile:</strong> <strong>Glicemia a las 2 horas post-carga ≥ 140 mg/dL</strong> (independientemente del valor basal).",
          "  - <em>Nota:</em> En embarazadas con factores de riesgo alto que resulten con PTGO normal a las 24-28 sem, se repite la PTGO a las 32-34 semanas."
        ]
      },
      {
        "subhead": "2. Complicaciones Materno-Fetales",
        "paragraphs": [
          "• <strong>Complicaciones Fetales y Neonatales:</strong>",
          "  - <strong>Macrosomía Fetal (Peso > 4.000 g o > P90):</strong> La hiperglicemia materna produce hiperglicemia fetal persistente y consiguiente <strong>hiperinsulinismo fetal reactivo</strong> (la insulina es la principal hormona anabólica fetal), estimulando el depósito masivo de grasa en hombros y tronco.",
          "  - <strong>Trauma Obstétrico:</strong> Distocia de hombros, lesión del plexo braquial (parálisis de Erb-Duchenne) y fractura de clavícula.",
          "  - <strong>Hipoglicemia Neonatal Precoz:</strong> Al nacer y cortarse el cordón umbilical, cesa abruptamente el aporte de glucosa materna pero persiste el hiperinsulinismo fetal, produciendo hipoglicemia severa en las primeras 1 a 2 horas de vida.",
          "  - <strong>Enfermedad de Membrana Hialina:</strong> El exceso de insulina fetal inhibe la inducción enzimática de surfactante mediada por el cortisol en los neumocitos tipo II.",
          "  - Policitemia neonatal, hiperbilirrubinemia y miocardiopatía hipertrófica septal asimétrica transitoria.",
          "• <strong>Diferencia Crítica con Diabetes Pregestacional:</strong> Las <strong>malformaciones congénitas mayores</strong> (cardiopatías como transposición de grandes vasos, agenesia sacra / regresión caudal y defectos del tubo neural) ocurren <strong>ÚNICAMENTE en Diabetes Pregestacional mal controlada durante la embriogénesis (< 8 semanas)</strong>. La Diabetes Gestacional típica no aumenta el riesgo de malformaciones porque se inicia después de la organogénesis."
        ]
      },
      {
        "subhead": "3. Metas de Control Glucémico y Tratamiento Escalonado",
        "paragraphs": [
          "• <strong>Metas Glucémicas Estrictas en el Embarazo (Automonitoreo con HGT):</strong>",
          "  1) <strong>Glicemia en ayunas (preprandial):</strong> <strong>70 a 90 mg/dL (o < 95 mg/dL)</strong>.",
          "  2) <strong>Glicemia 1 hora postprandial:</strong> <strong>< 140 mg/dL</strong>.",
          "  3) <strong>Glicemia 2 horas postprandial:</strong> <strong>< 120 mg/dL</strong>.",
          "• <strong>Paso 1: Terapia Nutricional y Ejercicio (Pilar Inicial):</strong>",
          "  - Dieta fraccionada en 4 comidas y 2 colaciones (para evitar hipoglicemias y cetosis de ayuno), con restricción estricta de azúcares simples y carbohidratos refinados.",
          "  - Actividad física moderada (caminata 30 min diarios postprandial).",
          "• <strong>Paso 2: Insulinoterapia (Indicación Formal):</strong>",
          "  - Se indica si tras <strong>1 a 2 semanas de dieta estricta, más del 20% de los controles glucémicos están por encima de las metas</strong> (o si la ecografía detecta macrosomía precoz con circunferencia abdominal fetal > P75).",
          "  - Fármaco de elección: <strong>Insulina Humana NPH</strong> (acción intermedia) combinada con <strong>Insulina Cristalina (Regular) o análogos ultrarrápidos (Lispro/Aspart)</strong> antes de las comidas.",
          "  - <em>Fármacos Orales:</em> La Metformina y las sulfonilureas <strong>NO son el tratamiento estándar de primera línea en la guía clínica del MINSAL</strong> (la insulina no cruza la placenta, mientras que la metformina sí cruza la barrera placentaria)."
        ]
      }
    ],
    "table": {
      "title": "Criterios Diagnósticos y Metas Glucémicas de la Diabetes Gestacional (Guía Perinatal MINSAL)",
      "headers": [
        "Etapa / Momento",
        "Prueba de Laboratorio",
        "Valor Diagnóstico",
        "Meta Terapéutica con Tratamiento"
      ],
      "rows": [
        [
          "Primer Trimestre (< 12 sem)",
          "Glicemia en ayunas (x 2 días)",
          "≥ 100 mg/dL en dos ocasiones",
          "Ayunas: 70 a 90 mg/dL (< 95 mg/dL)"
        ],
        [
          "Semana 24 a 28",
          "PTGO 75g (Glicemia a las 2 horas)",
          "≥ 140 mg/dL a las 2 horas",
          "Postprandial 1 hora: < 140 mg/dL"
        ],
        [
          "Cualquier momento",
          "Glicemia casual o al azar",
          "≥ 200 mg/dL (DM Pregestacional)",
          "Postprandial 2 horas: < 120 mg/dL"
        ],
        [
          "Postparto (6-12 semanas)",
          "PTGO 75g de reclasificación",
          "≥ 140 mg/dL = Intolerancia o DM2",
          "Normal < 140 mg/dL"
        ]
      ]
    },
    "severityTable": {
      "title": "Complicaciones Perinatales según Momento de Hiperglicemia",
      "headers": [
        "Tipo de Diabetes",
        "Momento del Daño Fisiopatológico",
        "Complicación Principal",
        "Prevención Médica"
      ],
      "rows": [
        [
          "Diabetes Pregestacional",
          "Primeras 8 semanas (Organogénesis)",
          "Malformaciones congénitas mayores (cardíacas, sacras)",
          "Control preconcepcional estricto (HbA1c < 6.5%)"
        ],
        [
          "Diabetes Gestacional",
          "2.° y 3.er trimestre (Anabolismo fetal)",
          "Macrosomía (>4 kg), distocia de hombros, asfixia",
          "Dieta estricta + Insulina si falla"
        ],
        [
          "Periparto / Neonatal",
          "Inmediato tras el nacimiento",
          "Hipoglicemia neonatal (< 45 mg/dL), EMH",
          "Control HGT neonatal a las 2h + lactancia precoz"
        ],
        [
          "Fetal Crónico",
          "Tercer trimestre avanzado",
          "Polihidramnios, miocardiopatía hipertrófica, óbito",
          "Monitoreo ecográfico y RBNE semanal desde sem 32"
        ]
      ]
    },
    "treatmentTable": {
      "title": "Esquema Escalonado de Manejo de la Diabetes Gestacional",
      "headers": [
        "Línea Terapéutica",
        "Intervención",
        "Criterio de Aplicación",
        "Monitoreo y Meta"
      ],
      "rows": [
        [
          "1.ª Línea (Universal)",
          "Régimen dietético fraccionado + Ejercicio",
          "Al momento del diagnóstico en todas",
          "HGT 4-6 veces al día · 80% dentro de rango"
        ],
        [
          "2.ª Línea (Farmacológica)",
          "Insulina NPH humana subcutánea",
          "> 20% de valores sobre meta tras 1-2 semanas de dieta",
          "Dosis inicial 0.2 a 0.3 UI/kg/día ajustada según patrón"
        ],
        [
          "Insulina Rápida",
          "Insulina Cristalina o Lispro/Aspart",
          "Hiperglicemias postprandiales aisladas",
          "Preprandial 15-30 min antes de la comida alterada"
        ],
        [
          "Momento de Parto",
          "Interrupción programada a las 38-40 sem",
          "Semana 38-39 si usa insulina; sem 40 si con dieta",
          "Suspender insulina matinal el día del parto"
        ]
      ]
    },
    "vignette": "Secundigesta de 26 semanas de gestación, con IMC de 28 kg/m² (sobrepeso). Su glicemia en ayunas en el primer trimestre fue de 88 mg/dL. Se realiza la Prueba de Tolerancia a la Glucosa Oral (PTGO) con 75 g de glucosa a las 25 semanas, la cual arroja: Glicemia basal en ayunas de 92 mg/dL y Glicemia a las 2 horas post-carga de 158 mg/dL. La paciente se encuentra totalmente asintomática.",
    "explicacion": "La paciente presenta una glicemia a las 2 horas post-carga oral de 75 g de glucosa mayor o igual a 140 mg/dL (158 mg/dL), lo que según los criterios ministeriales chilenos establece el diagnóstico definitivo de Diabetes Gestacional. La conducta médica inmediata consiste en iniciar Terapia Nutricional con régimen diabético fraccionado en 4 comidas y 2 colaciones con restricción de carbohidratos refinados, indicar automonitoreo glucémico capilar seriado (en ayunas y 2 horas postprandial) y reevaluar los perfiles glucémicos en 1 a 2 semanas. Si más del 20% de los controles superan las metas (ayunas < 95 mg/dL o 2h postprandial < 120 mg/dL), se debe iniciar tratamiento con Insulina NPH.",
    "keyPoints": [
      "Diagnóstico en 1.er trimestre: Glicemia en ayunas ≥ 100 mg/dL en dos ocasiones define Diabetes Gestacional precoz.",
      "Glicemia en ayunas ≥ 126 mg/dL en 1.er trimestre define Diabetes Pregestacional manifiesta.",
      "Tamizaje a las 24-28 semanas: PTGO con 75 g; valor a las 2 horas ≥ 140 mg/dL es diagnóstico.",
      "Metas de control: Glicemia en ayunas < 95 mg/dL (70-90) y postprandial a las 2 horas < 120 mg/dL.",
      "Si > 20% de las glicemias exceden la meta tras 1-2 semanas de dieta, se inicia Insulina.",
      "La macrosomía fetal se produce por hiperinsulinismo fetal secundario a la hiperglicemia materna.",
      "Las malformaciones congénitas solo aumentan en Diabetes Pregestacional mal controlada, no en la gestacional típica."
    ],
    "questions": [
      {
        "stem": "Una primigesta de 26 semanas sin antecedentes mórbidos se realiza la Prueba de Tolerancia a la Glucosa Oral con 75 g (PTGO 75g). Los resultados informan: Glicemia basal de 86 mg/dL y Glicemia a las 2 horas de 152 mg/dL. ¿Cuál es el diagnóstico y la conducta inicial correcta?",
        "options": [
          {
            "id": "A",
            "text": "Examen normal; citar a control prenatal habitual en 4 semanas"
          },
          {
            "id": "B",
            "text": "Intolerancia a la glucosa del embarazo; repetir la prueba a las 32 semanas"
          },
          {
            "id": "C",
            "text": "Diabetes Gestacional; iniciar terapia nutricional fraccionada y automonitoreo glucémico capilar"
          },
          {
            "id": "D",
            "text": "Diabetes Pregestacional; hospitalizar de inmediato para bomba de insulina endovenosa"
          },
          {
            "id": "E",
            "text": "Diabetes Gestacional; iniciar Metformina oral 850 mg cada 12 horas como fármaco de elección"
          }
        ],
        "correcta": "C",
        "explicacion": "A) Incorrecta. El valor a las 2 horas está alterado (≥ 140 mg/dL).\nB) Incorrecta. En el embarazo no existe la categoría de 'intolerancia' separada; ≥ 140 mg/dL a las 2h es formalmente Diabetes Gestacional.\nC) Correcta. La norma chilena del MINSAL establece que un valor de glicemia a las 2 horas post-carga de 75 g de glucosa ≥ 140 mg/dL en el segundo trimestre es diagnóstico categórico de Diabetes Gestacional. El pilar de tratamiento inicial es la terapia médico-nutricional con dieta normocalórica fraccionada y automonitoreo de glicemias capilares pre y postprandiales durante 1 a 2 semanas antes de evaluar la necesidad de insulina.\nD) Incorrecta. La diabetes pregestacional se pesquisa en el primer trimestre con glicemias ≥ 126 mg/dL.\nE) Incorrecta. La metformina no es el fármaco de primera línea de elección según el MINSAL; si la dieta fracasa se usa insulina.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.004"
      },
      {
        "stem": "Una paciente con Diabetes Gestacional en tratamiento con dieta estricta desde hace 2 semanas trae su registro de glicemias capilares ambulatorias (4 controles diarios: ayunas y 2 horas post desayuno, almuerzo y cena). De 28 controles realizados en la semana, 8 controles postprandiales se sitúan entre 135 y 150 mg/dL (metas: ayunas < 95 mg/dL, 2 horas < 120 mg/dL). ¿Cuál es la conducta médica indicada?",
        "options": [
          {
            "id": "A",
            "text": "Mantener solo la dieta y reevaluar en 1 mes"
          },
          {
            "id": "B",
            "text": "Iniciar tratamiento farmacológico con Insulina"
          },
          {
            "id": "C",
            "text": "Indicar ayuno prolongado saltándose la cena"
          },
          {
            "id": "D",
            "text": "Prescribir Glibenclamida oral"
          },
          {
            "id": "E",
            "text": "Interrumpir el embarazo de inmediato por vía cesárea"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Dejar a la paciente con hiperglicemias postprandiales no controladas aumentará el riesgo de macrosomía y muerte fetal.\nB) Correcta. El criterio estándar para iniciar farmacoterapia en Diabetes Gestacional es la presencia de más del 20% de los controles glucémicos por encima de las metas terapéuticas (en este caso 8 de 28 = 28.5% alterados tras 2 semanas de dieta). El tratamiento farmacológico de elección indiscutido en Chile es la Insulina humana (NPH y/o rápida), que logra un control metabólico óptimo sin atravesar la barrera placentaria.\nC) Incorrecta. El ayuno genera cetonemia y desnutrición fetal.\nD) Incorrecta. La glibenclamida atraviesa la placenta y causa hiperinsulinismo e hipoglicemia neonatal severa prolongada.\nE) Incorrecta. La interrupción precoz sin intentar optimizar el control no está justificada.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.004"
      },
      {
        "stem": "¿Cuál de las siguientes complicaciones neonatales se asocia DIRECTAMENTE con la hiperglicemia materna no controlada durante el embarazo mediante el mecanismo de hiperinsulinismo fetal reactivo?",
        "options": [
          {
            "id": "A",
            "text": "Hiperglicemia neonatal cetósica en las primeras horas de vida"
          },
          {
            "id": "B",
            "text": "Hipoglicemia neonatal sintomática severa en las primeras 2 a 4 horas de vida"
          },
          {
            "id": "C",
            "text": "Anemia hemolítica autoinmune"
          },
          {
            "id": "D",
            "text": "Agenesia renal bilateral congénita"
          },
          {
            "id": "E",
            "text": "Hipercalcemia neonatal idiopática"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Desarrollan hipoglicemia por exceso de insulina fetal, no hiperglicemia.\nB) Correcta. La glucosa materna atraviesa libremente la placenta por difusión facilitada, mientras que la insulina materna no la cruza. La hiperglicemia fetal crónica estimula la hipertrofia e hiperplasia de los islotes de células beta pancreáticas fetales con secreción masiva de insulina fetal. Al nacer y clampear el cordón umbilical, el suministro continuo de glucosa materna cesa de forma inmediata, pero los niveles de insulina del neonato permanecen marcadamente elevados, provocando una rápida captación de glucosa celular y una caída crítica de la glicemia (< 40-45 mg/dL) en las primeras 1 a 4 horas de vida.\nC) Incorrecta. No es autoinmune.\nD) Incorrecta. Es una malformación estructural asociada a oligoamnios extremo.\nE) Incorrecta. Suelen desarrollar hipocalcemia e hipomagnesemia.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.004"
      },
      {
        "stem": "A una embarazada de 10 semanas se le realiza su primer control prenatal. La glicemia plasmática en ayunas resulta en 108 mg/dL. Se repite a los 4 días en ayunas y arroja 106 mg/dL. ¿Cuál es el diagnóstico según la normativa perinatal de Chile?",
        "options": [
          {
            "id": "A",
            "text": "Embarazo normal; el corte de ayunas en el primer trimestre es 110 mg/dL"
          },
          {
            "id": "B",
            "text": "Diabetes Gestacional precoz"
          },
          {
            "id": "C",
            "text": "Diabetes Mellitus pregestacional manifiesta"
          },
          {
            "id": "D",
            "text": "Intolerancia a los carbohidratos que no requiere seguimiento"
          },
          {
            "id": "E",
            "text": "Falso positivo por estrés del primer trimestre"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. El umbral chileno en ayunas en el primer trimestre es 100 mg/dL.\nB) Correcta. La guía perinatal del MINSAL establece que una glicemia en ayunas en el primer trimestre entre 100 y 125 mg/dL comprobada en dos oportunidades en días distintos es diagnóstica de Diabetes Gestacional de inicio precoz. Requiere ingreso inmediato a programa de diabetes y embarazo para terapia nutricional y automonitoreo sin esperar la semana 24.\nC) Incorrecta. La diabetes pregestacional manifiesta requiere glicemia en ayunas ≥ 126 mg/dL en dos ocasiones.\nD) Incorrecta. Es formalmente una diabetes gestacional.\nE) Incorrecta. Dos tomas alteradas confirman el diagnóstico.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.004"
      }
    ]
  },
  {
    "id": "ob-08",
    "classId": "ob-08",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Patologías Médicas del Embarazo",
    "topicLabel": "19.8",
    "title": "Colestasia Intrahepática del Embarazo (CIE): Prurito Palmoplantar, Ácidos Biliares y Ácido Ursodesoxicólico",
    "perfilCode": "3.01.1.003",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Patología obstétrica frecuente en Chile con protocolo ministerial específico.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#34) · EUNACOM Julio 2023 (Q#19) · EUNACOM Diciembre 2021 (Q#48)",
    "frecuencia": "Alta rentabilidad · Prurito palmoplantar de predominio nocturno sin lesiones primarias y riesgo de óbito fetal",
    "svg": null,
    "algoTitle": "Algoritmo de Diagnóstico, Estratificación por Ácidos Biliares y Manejo de la CIE",
    "diagramRows": [
      {
        "t": "Embarazada de 2.° o 3.er Trimestre con Prurito Cutáneo Intenso",
        "s": "Prurito de predominio nocturno en palmas y plantas sin lesiones cutáneas primarias (solo escoriaciones)",
        "type": "acc"
      },
      {
        "t": "Diagnóstico Clínico + Confirmación de Laboratorio",
        "s": "Ácidos Biliares Séricos Totales (Estándar de Oro) + Transaminasas (GOT/GPT elevadas en 60%) + Bilirrubina",
        "type": "dec"
      },
      {
        "k": "split",
        "q": "Estratificación de Severidad según Ácidos Biliares",
        "al": "CIE Anictérica vs Ictérica / Ácidos Biliares",
        "ll": "Ácidos Biliares < 40 umol/L (CIE Moderada)",
        "left": {
          "t": "CIE Moderada / Anictérica",
          "s": "Ácido Ursodesoxicólico 10-15 mg/kg/día · Control semanal · Interrupción electiva a las 37-38 semanas",
          "type": "warn"
        },
        "rl": "Ácidos Biliares ≥ 40-100 umol/L (CIE Severa / Ictérica)",
        "right": {
          "t": "CIE Severa (Alto Riesgo de Óbito Súbito)",
          "s": "Hospitalización en ARO · Mayor riesgo de meconio y muerte fetal · Interrupción a las 36 semanas (o 34-36 si > 100)",
          "type": "crit"
        }
      },
      {
        "t": "Manejo Farmacológico Sintomático y Protector",
        "s": "Ácido Ursodesoxicólico (disminuye ácidos biliares y prurito) ± Clorfenamina nocturna",
        "type": "acc"
      }
    ],
    "contexto": "La Colestasia Intrahepática del Embarazo (CIE) es la enfermedad hepática propia de la gestación más prevalente en Chile (históricamente afectaba al 1-4% de los embarazos, con base genética y estrogénica). Su síntoma cardinal es el prurito palmoplantar de predominio nocturno que respeta la piel (sin exantema primario). Aunque es un cuadro benigno para la madre, confiere un riesgo severo para el feto de parto prematuro espontáneo, líquido amniótico meconial y, de forma temible, <strong>muerte fetal intrauterina súbita aguda</strong> por arritmia cardíaca inducida por ácidos biliares tóxicos. El médico general debe saber diagnosticarla clínicamente, prescribir ácido ursodesoxicólico y programar la interrupción a las 36-38 semanas.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Manifestaciones Clínicas Cardinales",
        "paragraphs": [
          "La CIE se produce por una susceptibilidad genética en transportadores canaliculares biliares hepáticos (ABCB4/BSEP) exacerbada por los altos niveles de estrógenos y progesterona del tercer trimestre, provocando colestasia intrahepática y acumulación sistémica de ácidos biliares.",
          "• <strong>Clínica Cardinal:</strong>",
          "  - <strong>Prurito palmo-plantar intenso de predominio nocturno:</strong> Es el síntoma inicial e invariable (inicia en palmas y plantas y luego se generaliza al abdomen y extremidades).",
          "  - <strong>Ausencia de lesiones cutáneas primarias:</strong> La piel está sana; únicamente se observan <strong>lesiones de rascado secundarias (escoriaciones lineales)</strong>. (Si hay pápulas o placas eritematosas pruriginosas en estrías, pensar en PEP/PUPPP).",
          "  - <strong>Ictericia:</strong> Solo se presenta en el 10-15% de los casos (CIE ictérica), apareciendo 1 a 2 semanas tras el inicio del prurito. Se acompaña de coluria e hipocolia transitoria.",
          "  - Desaparición completa del prurito en las primeras 24 a 48 horas postparto."
        ]
      },
      {
        "subhead": "2. Diagnóstico de Laboratorio y Estratificación de Riesgo Fetal",
        "paragraphs": [
          "• <strong>Ácidos Biliares Séricos Totales (Estándar de Oro):</strong>",
          "  - Nivel normal en el embarazo: < 10 a 11 umol/L.",
          "  - <strong>CIE Leve a Moderada:</strong> Ácidos biliares entre <strong>10 y 39 umol/L</strong>.",
          "  - <strong>CIE Severa:</strong> Ácidos biliares <strong>≥ 40 umol/L</strong>. Si los niveles superan los <strong>100 umol/L</strong>, el riesgo de óbito fetal súbito se dispara exponencialmente (riesgo de muerte intrauterina > 3-5%).",
          "• <strong>Pruebas Hepáticas:</strong> Elevación de transaminasas (GOT y GPT) en el 60-80% de los casos (habitualmente entre 2 y 5 veces el límite superior, rara vez > 500 U/L) y elevación moderada de fosfatasa alcalina (FA) y bilirrubina total (< 5 mg/dL a predominio directo)."
        ]
      },
      {
        "subhead": "3. Tratamiento Farmacológico y Momento de Interrupción del Parto",
        "paragraphs": [
          "• <strong>Tratamiento Médico de Elección:</strong>",
          "  - <strong>Ácido Ursodesoxicólico (UDCA):</strong> Dosis de <strong>10 a 15 mg/kg/día por vía oral</strong> (habitualmente 300 mg cada 8 a 12 horas / 600 a 1.200 mg/día).",
          "  - Mecanismo: Es un ácido biliar hidrofílico no citotóxico que desplaza a los ácidos biliares hidrófobos tóxicos del hepatocito, estimula la secreción biliar y cruza la placenta depurando los ácidos biliares del compartimento fetal. Alivia eficazmente el prurito y normaliza las pruebas hepáticas.",
          "  - Coadyuvantes: Clorfenamina oral (4 mg noche) para facilitar el sueño.",
          "• <strong>Programación de la Interrupción del Embarazo (Regla Vital MINSAL):</strong>",
          "  - La monitorización fetal (RBNE) <strong>NO predice el óbito fetal súbito</strong> en CIE, ya que la muerte ocurre por vasoespasmo placentario o arritmia miocárdica fetal aguda por ácidos biliares.",
          "  - Por lo tanto, la prevención de la muerte fetal se logra mediante la <strong>interrupción programada del embarazo</strong>:",
          "    • <strong>CIE Anictérica (Ácidos biliares < 40 umol/L):</strong> Parto programado a las <strong>37 a 38 semanas</strong>.",
          "    • <strong>CIE Ictérica o Severa (Ácidos biliares ≥ 40 umol/L):</strong> Parto programado a las <strong>36 semanas</strong>.",
          "    • <strong>CIE Extrema (Ácidos biliares > 100 umol/L o falla hepática):</strong> Parto a las <strong>34 a 36 semanas</strong> previa maduración pulmonar con corticoides."
        ]
      }
    ],
    "table": {
      "title": "Estratificación de Severidad y Criterios de Interrupción en Colestasia Intrahepática",
      "headers": [
        "Categoría Clínica",
        "Nivel de Ácidos Biliares",
        "Presencia de Ictericia",
        "Edad Gestacional de Interrupción"
      ],
      "rows": [
        [
          "CIE Leve / Moderada",
          "10 a 39 umol/L",
          "Anictérica (Bilirrubina normal)",
          "Semana 37 a 38"
        ],
        [
          "CIE Severa",
          "40 a 99 umol/L",
          "Anictérica o Ictérica",
          "Semana 36"
        ],
        [
          "CIE Extrema / Alto Riesgo",
          "≥ 100 umol/L",
          "Frecuentemente ictérica",
          "Semana 34 a 36 (con corticoides)"
        ]
      ]
    },
    "vignette": "Multigesta de 34 semanas de gestación consulta en SAPU por presentar prurito cutáneo exasperante de 10 días de evolución, que empeora notablemente durante la noche impidiéndole conciliar el sueño. El prurito comenzó en las palmas de las manos y plantas de los pies y se ha extendido a los antebrazos y abdomen. Al examen físico: piel sin erupciones eritematosas ni lesiones elementales primarias, observándose únicamente excoriaciones lineales secundarias al rascado ungueal. Escleras anictéricas y signos vitales normales.",
    "explicacion": "El cuadro clínico de prurito palmoplantar intenso de predominio nocturno en el tercer trimestre sin lesiones dermatológicas primarias es diagnóstico clínico inequívoco de Colestasia Intrahepática del Embarazo (CIE). La conducta médica inmediata es iniciar tratamiento con Ácido Ursodesoxicólico (UDCA) a 10-15 mg/kg/día (300 mg cada 8 o 12 horas VO), solicitar estudio de laboratorio con ácidos biliares séricos totales y pruebas hepáticas (transaminasas y bilirrubina), y derivar a la Unidad de Alto Riesgo Obstétrico (ARO) para seguimiento y programación de la interrupción del embarazo entre las 36 y 38 semanas según la severidad.",
    "keyPoints": [
      "Prurito palmoplantar nocturno sin lesiones cutáneas primarias en el tercer trimestre = CIE.",
      "El riesgo fetal mayor es la muerte intrauterina súbita por arritmia cardíaca fetal inducida por ácidos biliares.",
      "El monitoreo fetal (RBNE) no predice el óbito en CIE; la prevención es la interrupción programada.",
      "El examen de confirmación estándar de oro es la medición de Ácidos Biliares Séricos Totales.",
      "Ácidos biliares ≥ 40 umol/L define CIE severa; ≥ 100 umol/L es de riesgo extremo de óbito.",
      "El fármaco de elección es el Ácido Ursodesoxicólico (UDCA) a 10-15 mg/kg/día oral.",
      "Momento de interrupción: 37-38 sem en anictérica moderada (< 40 umol/L); 36 sem en severa (≥ 40 umol/L)."
    ],
    "questions": [
      {
        "stem": "Una embarazada de 33 semanas consulta por prurito intenso en palmas de las manos y plantas de los pies que empeora por las noches desde hace una semana. Al examen físico no presenta erupciones cutáneas, solo lesiones lineales de rascado. Las pruebas hepáticas muestran GOT 85 U/L y GPT 110 U/L con bilirrubina total de 0.9 mg/dL. Los ácidos biliares séricos resultan en 54 umol/L. ¿Cuál es el diagnóstico y el fármaco de elección?",
        "options": [
          {
            "id": "A",
            "text": "Erupción polimorfa del embarazo; Clobetasol tópico"
          },
          {
            "id": "B",
            "text": "Colestasia intrahepática del embarazo severa; Ácido Ursodesoxicólico oral"
          },
          {
            "id": "C",
            "text": "Hígado graso agudo del embarazo; Hidrocortisona endovenosa"
          },
          {
            "id": "D",
            "text": "Escabiosis del embarazo; Permetrina al 5% tópica"
          },
          {
            "id": "E",
            "text": "Preeclampsia atípica; Sulfato de magnesio en infusión continua"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La erupción polimorfa (PUPPP) presenta pápulas y placas eritematosas en estrías abdominales con respeto periumbilical.\nB) Correcta. El prurito palmo-plantar nocturno sin lesiones primarias, transaminasas elevadas y ácidos biliares séricos ≥ 40 umol/L (54 umol/L) confirma el diagnóstico de Colestasia Intrahepática del Embarazo (CIE) Severa. El tratamiento farmacológico de elección avalado internacionalmente y por el MINSAL es el Ácido Ursodesoxicólico (UDCA) a dosis de 10 a 15 mg/kg/día por vía oral, el cual depura los ácidos biliares tóxicos y alivia el prurito materno. Además, por ser severa (≥ 40 umol/L), se debe programar la interrupción a las 36 semanas.\nC) Incorrecta. El hígado graso cursa con insuficiencia hepática, hipoglicemia y coagulopatía.\nD) Incorrecta. La escabiosis presenta surcos acarianos interdigitales y prurito familiar.\nE) Incorrecta. No tiene hipertensión ni proteinuria.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.003"
      },
      {
        "stem": "¿Por qué motivo la monitorización fetal electrónica anteparto habitual (Registro Basal No Estresante semanal) NO es suficiente para garantizar la seguridad fetal en pacientes con Colestasia Intrahepática del Embarazo severa?",
        "options": [
          {
            "id": "A",
            "text": "Porque los ácidos biliares impiden la transmisión de las ondas Doppler"
          },
          {
            "id": "B",
            "text": "Porque la muerte fetal en CIE ocurre por un evento súbito e impredecible de arritmia cardíaca fetal aguda o vasoespasmo placentario agudo, sin hipoxia crónica previa"
          },
          {
            "id": "C",
            "text": "Porque todos los fetos con CIE presentan taquicardia basal fija irreversible"
          },
          {
            "id": "D",
            "text": "Porque la colestasia solo afecta a la madre y el feto nunca tiene complicaciones"
          },
          {
            "id": "E",
            "text": "Porque el ácido ursodesoxicólico altera artificialmente el trazado cardiofetal"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. Los ácidos biliares no alteran la física del ultrasonido.\nB) Correcta. En la Colestasia Intrahepática del Embarazo, a diferencia del RCF o la preeclampsia donde existe una insuficiencia placentaria crónica progresiva detectable con Doppler, el óbito fetal ocurre típicamente de forma aguda, súbita e impredecible en fetos con crecimiento y líquido amniótico normales. El mecanismo patogénico es la toxicidad directa de los ácidos biliares sobre los miocardiocitos fetales (generando arritmias cardíacas fatales) y vasoespasmo agudo de las venas de la placa coriónica. Por ello, un RBNE normal no predice la sobrevida a corto plazo y la única estrategia eficaz para evitar el óbito es la interrupción programada del embarazo entre las 36 y 38 semanas según niveles de ácidos biliares.\nC) Incorrecta. La FCF basal suele ser normal.\nD) Incorrecta. El feto tiene riesgo severo de muerte intrauterina.\nE) Incorrecta. El UDCA no altera el RBNE.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.003"
      }
    ]
  },
  {
    "id": "ob-09",
    "classId": "ob-09",
    "tier": 2,
    "blockNum": 2,
    "blockName": "Patologías Médicas del Embarazo",
    "topicLabel": "19.9",
    "title": "Infección del Tracto Urinario en el Embarazo: Bacteriuria Asintomática, Cistitis y Pielonefritis Aguda",
    "perfilCode": "3.01.1.019",
    "dx": "Específico",
    "tx": "Completo",
    "seg": "Completo",
    "ges": "No GES. Cubierto por Guía Perinatal MINSAL.",
    "reconstrucciones": "EUNACOM Diciembre 2024 (Q#31) · EUNACOM Julio 2023 (Q#35)",
    "frecuencia": "Alta rentabilidad · Tamizaje y tratamiento obligatorio de la Bacteriuria Asintomática y riesgo de parto prematuro",
    "svg": null,
    "algoTitle": "Algoritmo de Pesquisa, Tratamiento y Profilaxis de la ITU en el Embarazo (MINSAL)",
    "diagramRows": [
      {
        "t": "Urocultivo de Tamizaje Universal en 1.er Trimestre (12 a 16 semanas)",
        "s": "Pesquisa obligatoria a TODAS las embarazadas asintomáticas (alto riesgo de pielonefritis)",
        "type": "acc"
      },
      {
        "k": "split",
        "q": "Resultado del Urocultivo y Clínica",
        "al": "Bacteriuria Asintomática vs ITU Sintomática",
        "ll": "Asintomática con ≥ 100.000 UFC/mL",
        "left": {
          "t": "BACTERIURIA ASINTOMÁTICA",
          "s": "¡Tratar SIEMPRE! Cefadroxilo oral x 7 días (o Nitrofurantoína <36 sem) · Urocultivo de control a los 7-14 días post-tto",
          "type": "warn"
        },
        "rl": "Fiebre, Dolor Lumbar y PPL (+)",
        "right": {
          "t": "PIELONEFRITIS AGUDA EN EL EMBARAZO",
          "s": "HOSPITALIZACIÓN OBLIGATORIA + Cefazolina o Ceftriaxona EV · Alto riesgo de shock séptico y APP · Profilaxis posterior",
          "type": "crit"
        }
      },
      {
        "t": "Profilaxis Antibiótica Post-Pielonefritis o ITU Recurrente",
        "s": "Cefadroxilo 500 mg o Nitrofurantoína 100 mg cada noche hasta el término del embarazo",
        "type": "acc"
      }
    ],
    "contexto": "La infección del tracto urinario (ITU) es la complicación infecciosa bacteriana más común del embarazo. Los cambios anatómicos y hormonales gestacionales (dilatación de la pelvis y uréteres por efecto relajante de la progesterona sobre el músculo liso, compresión ureteral mecánica por el útero grávido dextrorrotado y estasis urinaria) facilitan el ascenso bacteriano. El médico debe dominar la regla de oro: la bacteriuria asintomática en la embarazada SE TRATA SIEMPRE (a diferencia de la mujer no gestante) para prevenir la pielonefritis aguda en un 30-40% de los casos y evitar el parto prematuro.",
    "contentSections": [
      {
        "subhead": "1. Fisiopatología y Bacteriuria Asintomática (BA)",
        "paragraphs": [
          "El uropatógeno principal es <strong>Escherichia coli</strong> (80-85%), seguido por <em>Klebsiella pneumoniae</em>, <em>Proteus mirabilis</em>, <em>Enterococcus faecalis</em> y <em>Streptococcus agalactiae (EGB)</em>.",
          "• <strong>Bacteriuria Asintomática (BA):</strong>",
          "  - Se define por el aislamiento de <strong>≥ 100.000 UFC/mL (≥ 10⁵ UFC/mL)</strong> de un único germen en urocultivo tomado por segundo chorro limpio, en una embarazada <strong>sin ningún síntoma urinario ni sistémico</strong>.",
          "  - <strong>REGLA DE ORO VITAL EUNACOM:</strong> En la población general no embarazada la BA NO se trata. En la EMBARAZADA, la BA <strong>DEBE TRATARSE SIEMPRE</strong>, porque si no se trata, <strong>hasta un 30 a 40% progresará a Pielonefritis Aguda</strong> durante el 2.° y 3.er trimestre, asociándose fuertemente a <strong>parto prematuro y bajo peso al nacer</strong>.",
          "  - <em>Tratamiento:</em> <strong>Cefadroxilo oral (500 mg c/12h por 7 días)</strong> o <strong>Nitrofurantoína (100 mg c/8h por 7 días)</strong> (evitar nitrofurantoína en las semanas 36-40 por riesgo teórico de anemia hemolítica neonatal si déficit de G6PD).",
          "  - <strong>Urocultivo de Control:</strong> Obligatorio a los <strong>7 a 14 días de terminado el tratamiento</strong> para confirmar erradicación."
        ]
      },
      {
        "subhead": "2. Cistitis Aguda y Pielonefritis Aguda",
        "paragraphs": [
          "• <strong>Cistitis Aguda:</strong> Síntomas miccionales bajos (disuria, polaquiuria, tenesmo vesical, dolor suprapúbico) sin fiebre ni compromiso sistémico. Tratamiento ambulatorio con <strong>Cefadroxilo oral 500 mg cada 12 horas por 7 días</strong>.",
          "• <strong>Pielonefritis Aguda (Infección Renal Alta):</strong>",
          "  - Clínica: Fiebre alta en agujas (≥ 38.5°C), calofríos intensos, <strong>dolor lumbar con puñopercusión (PPL) positiva</strong> (más frecuente en fosa lumbar derecha por dextrorrotación uterina), náuseas y vómitos.",
          "  - <strong>Conducta Mandatoria:</strong> <strong>HOSPITALIZACIÓN INMEDIATA OBLIGATORIA</strong> en todas las embarazadas.",
          "  - Riesgos mayores: <strong>Sepsis y shock séptico por endotoxinas</strong>, <strong>Síndrome de Distress Respiratorio del Adulto (SDRA materno)</strong> y <strong>desencadenamiento de Amenaza de Parto Prematuro (APP)</strong>.",
          "  - <strong>Tratamiento Antibiótico Endovenoso de Elección:</strong>",
          "    • <strong>Cefazolina EV (1 g cada 8 horas)</strong> o <strong>Ceftriaxona EV (1 a 2 g cada 24 horas)</strong> o Cefotaxima EV.",
          "    • Mantener vía endovenosa hasta cumplir <strong>48 horas afebril y asintomática</strong>, pasando luego a vía oral (Cefadroxilo) hasta completar <strong>14 días totales</strong>.",
          "  - <strong>Profilaxis Antibiótica Secundaria Continua:</strong> Toda embarazada que sufre un episodio de Pielonefritis Aguda (o ≥ 2 episodios de ITU en el embarazo) debe recibir <strong>quimioprofilaxis antibiótica nocturna continua</strong> con <strong>Cefadroxilo (500 mg/noche)</strong> o <strong>Nitrofurantoína (100 mg/noche)</strong> hasta el momento del parto para evitar recidivas."
        ]
      }
    ],
    "table": {
      "title": "Espectro Clínico y Manejo de las Infecciones Urinarias en el Embarazo (MINSAL)",
      "headers": [
        "Cuadro Clínico",
        "Manifestaciones Cardinales",
        "Lugar de Tratamiento",
        "Esquema Antibiótico de Elección"
      ],
      "rows": [
        [
          "Bacteriuria Asintomática",
          "Sin síntomas · Urocultivo ≥ 10⁵ UFC/mL",
          "Ambulatorio",
          "Cefadroxilo 500 mg c/12h x 7 días (o Nitrofurantoína)"
        ],
        [
          "Cistitis Aguda",
          "Disuria, polaquiuria, urgencia, afebril",
          "Ambulatorio",
          "Cefadroxilo 500 mg c/12h x 7 días"
        ],
        [
          "Pielonefritis Aguda",
          "Fiebre alta, calofríos, dolor lumbar, PPL (+)",
          "Hospitalización OBLIGATORIA",
          "Cefazolina 1g c/8h EV o Ceftriaxona 1-2g c/24h EV x 14d"
        ],
        [
          "Profilaxis Secundaria",
          "Post-pielonefritis o ITU recurrente",
          "Ambulatorio continuo",
          "Cefadroxilo 500 mg o Nitrofurantoína 100 mg cada noche"
        ]
      ]
    },
    "vignette": "Secundigesta de 14 semanas acude a control prenatal con los exámenes del primer trimestre. Se encuentra completamente asintomática, sin disuria ni dolor abdominal. El urocultivo tomado por segundo chorro informa desarrollo de más de 100.000 UFC/mL de Escherichia coli sensible a cefalosporinas, ampicilina y nitrofurantoína. La paciente pregunta si es necesario tomar antibióticos dado que no tiene ninguna molestia para orinar.",
    "explicacion": "El aislamiento de ≥ 100.000 UFC/mL en una paciente asintomática configura el diagnóstico de Bacteriuria Asintomática en el embarazo. A diferencia de la población no gestante, en el embarazo la bacteriuria asintomática DEBE tratarse siempre con antibióticos debido a que el 30-40% evoluciona a pielonefritis aguda durante el segundo y tercer trimestre, con riesgo de sepsis materna y parto prematuro. La conducta correcta es prescribir Cefadroxilo oral a dosis de 500 mg cada 12 horas durante 7 días (o Nitrofurantoína 100 mg cada 8 horas) y solicitar un urocultivo de control a los 7 a 14 días post-tratamiento para confirmar la erradicación bacteriana.",
    "keyPoints": [
      "La bacteriuria asintomática en el embarazo SE TRATA SIEMPRE para prevenir pielonefritis y parto prematuro.",
      "Diagnóstico de BA: Urocultivo por segundo chorro con ≥ 100.000 UFC/mL sin síntomas.",
      "Antibiótico ambulatorio de 1.ª línea para BA y cistitis: Cefadroxilo oral por 7 días.",
      "La Pielonefritis Aguda en el embarazo requiere HOSPITALIZACIÓN INMEDIATA OBLIGATORIA.",
      "Tratamiento de pielonefritis: Cefazolina o Ceftriaxona endovenosa hasta 48h afebril, completando 14 días oral.",
      "Riesgos de pielonefritis gestacional: Sepsis grave, SDRA materno y amenaza de parto prematuro.",
      "Toda paciente post-pielonefritis debe recibir profilaxis antibiótica nocturna hasta el parto."
    ],
    "questions": [
      {
        "stem": "Una embarazada de 16 semanas acude a control prenatal asintomática. El urocultivo de rutina del primer trimestre informa: recuento de colonias de Escherichia coli de 150.000 UFC/mL, sensible a cefadroxilo, nitrofurantoína y ampicilina. ¿Cuál es la conducta médica correcta?",
        "options": [
          {
            "id": "A",
            "text": "No tratar, dado que la bacteriuria asintomática no se trata en mujeres jóvenes"
          },
          {
            "id": "B",
            "text": "Indicar Cefadroxilo oral por 7 días y solicitar urocultivo de control a los 7-14 días de finalizado el tratamiento"
          },
          {
            "id": "C",
            "text": "Hospitalizar de inmediato para tratamiento con Ceftriaxona endovenosa"
          },
          {
            "id": "D",
            "text": "Indicar consumo abundante de jugo de arándanos sin antibióticos"
          },
          {
            "id": "E",
            "text": "Repetir el urocultivo a las 28 semanas sin iniciar fármacos"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. En la embarazada la bacteriuria asintomática siempre debe tratarse para evitar la progresión a pielonefritis.\nB) Correcta. El hallazgo de ≥ 100.000 UFC/mL en una gestante asintomática define Bacteriuria Asintomática. La norma oficial del MINSAL y la evidencia médica indican tratamiento antibiótico obligatorio con Cefadroxilo oral 500 mg cada 12 horas por 7 días (o Nitrofurantoína por 7 días), seguido de un urocultivo de control a los 7 a 14 días post-tratamiento para certificar la curación microbiológica. El tratamiento reduce la incidencia de pielonefritis de un 30-40% a menos del 3-5%.\nC) Incorrecta. La vía endovenosa se reserva para pielonefritis sintomática.\nD) Incorrecta. El arándano no sustituye la terapia antimicrobiana curativa.\nE) Incorrecta. Postergar el tratamiento expone a la paciente a pielonefritis en el segundo trimestre.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.019"
      },
      {
        "stem": "Una primigesta de 28 semanas consulta en Urgencia por fiebre de 39.2°C con calofríos intensos, vómitos y dolor en fosa lumbar derecha de 24 horas de evolución. Al examen: T° 39.0°C, PA 105/65 mmHg, FC 112 lpm. Puñopercusión lumbar derecha francamente positiva. En el monitor cardiofetal se detectan contracciones uterinas aisladas y FCF de 160 lpm. ¿Cuál es el lugar y el tratamiento de elección inicial?",
        "options": [
          {
            "id": "A",
            "text": "Manejo ambulatorio con Cefadroxilo oral 500 mg cada 12 horas por 7 días"
          },
          {
            "id": "B",
            "text": "Hospitalización inmediata en sala de obstetricia para Ceftriaxona o Cefazolina endovenosa, hidratación y monitoreo materno-fetal"
          },
          {
            "id": "C",
            "text": "Manejo ambulatorio con Ciprofloxacino oral por 10 días"
          },
          {
            "id": "D",
            "text": "Cesárea de urgencia por riesgo inminente de sepsis"
          },
          {
            "id": "E",
            "text": "Indicar paracetamol oral y derivar a policlínico de urología"
          }
        ],
        "correcta": "B",
        "explicacion": "A) Incorrecta. La pielonefritis aguda en el embarazo NUNCA se trata en forma ambulatoria por el alto riesgo de bacteriemia, shock séptico, SDRA y parto prematuro.\nB) Correcta. La combinación de fiebre alta, calofríos y puñopercusión lumbar positiva en el embarazo es diagnóstica de Pielonefritis Aguda. Toda pielonefritis en el embarazo requiere HOSPITALIZACIÓN OBLIGATORIA para hidratación parenteral vigorosa, monitorización de la dinámica uterina y bienestar fetal, y antibioticoterapia endovenosa empírica inmediata con Cefalosporinas de 1.ª o 3.ª generación (Cefazolina 1 g c/8h EV o Ceftriaxona 1 a 2 g c/24h EV), manteniéndola hasta 48 horas afebril y completando 14 días por vía oral.\nC) Incorrecta. Las fluoroquinolonas están contraindicadas en el embarazo por toxicidad sobre el cartílago de crecimiento fetal.\nD) Incorrecta. El parto no está indicado; la infección se trata médicamente y las contracciones suelen ceder al enfriar el cuadro infeccioso.\nE) Incorrecta. Negligente ante una infección sistémica.",
        "recTag": "Banco Oficial AEE · Perfil V3 3.01.1.019"
      }
    ]
  }
];

const bloque2Classes = rawClasses.map(c => ({
  ...c,
  diagram: c.diagramRows ? flowObstetricia(c.algoTitle, c.diagramRows) : null
}));

module.exports = { bloque2Classes };
