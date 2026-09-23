// ============================================================================
// BLOQUE 02 REUMATOLOGÍA: ARTRITIS REUMATOIDE Y CONECTIVOPATÍAS MAYORES
// Manual EUNACOM 2026 · Tomo 09 Reumatología & Inmunología Clínica
// 5 Temas Curriculares (9.6 a 9.10) · 18 Preguntas Oficiales EUNACOM
// ============================================================================

const { flow } = require('./dataset_reumatologia_bloque_1.cjs');

const bloque2Classes = [
  {
    id: 'reuma-06', classId: 'reuma-06', tier: 3,
    blockNum: 2, blockName: 'Artritis Reumatoide y Enfermedades del Tejido Conectivo',
    topicLabel: '9.6',
    title: 'Artritis Reumatoide: Fisiopatología, Criterios ACR/EULAR 2010 y Manifestaciones Extraarticulares',
    perfilCode: '1.05.1.002', dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Artritis Reumatoide en personas de 15 años y más · Confirmación y tratamiento completo',
    reconstrucciones: 'EUNACOM 2018 Q#15 · EUNACOM 2020 Q#31 · EUNACOM 2022 Q#18 · EUNACOM 2024 Q#03',
    frecuencia: 'Muy Alta · Pilar estructural de la reumatología en EUNACOM y patología GES',
    svg: null, algoTitle: 'Algoritmo Diagnóstico Precoz en Artritis Reumatoide: Puntuación ACR/EULAR 2010',
    diagram: flow('Algoritmo Diagnóstico Artritis Reumatoide', [
      { k: 'box', t: 'Poliartritis Inflamatoria Simétrica y Rigidez Matinal > 60 min', s: 'Afecta muñecas, MCF e IFP · Duración ≥ 6 semanas · Típicamente respeta IFD', type: 'acc' },
      { k: 'split', q: 'Evaluación de Criterios Clasificatorios ACR/EULAR 2010', s: 'Sistema de puntaje acumulativo (Punto de corte: ≥ 6/10 puntos)',
        ll: 'Serología Inmunológica',
        left: { t: 'Anti-CCP (Anti-Péptido Citrulinado) y FR', s: 'Anti-CCP: Alta especificidad (96-98%) y valor pronóstico erosivo · FR sensible', type: 'warn' },
        rl: 'Distribución y Reactantes',
        right: { t: 'Compromiso Pequeñas Articulaciones + VHS/PCR', s: '4-10 pequeñas art (3 pts) · VHS o PCR elevadas (1 pt) · Duración ≥ 6 sem (1 pt)', type: 'dec' }
      },
      { k: 'box', t: 'Confirmación Diagnóstica: Puntaje ≥ 6 de 10 Puntos', s: 'Diagnóstico confirmado de Artritis Reumatoide · Notificación GES inmediata', type: 'crit' },
      { k: 'box', t: 'Búsqueda Activa de Manifestaciones Extraarticulares', s: 'Nódulos reumatoideos subcutáneos · Neumopatía intersticial · Síndrome de Felty · Subluxación C1-C2', type: 'acc' }
    ]),
    contexto: 'La Artritis Reumatoide (AR) es la artropatía inflamatoria crónica más prevalente en Chile y el mundo. Es una patología GES garantizada por ley. El EUNACOM enfatiza la sospecha temprana para evitar el daño osteoarticular erosivo irreversible, la aplicación de los criterios ACR/EULAR 2010 y el reconocimiento precoz de las manifestaciones extraarticulares graves, como la subluxación atloaxoidea.',
    contentSections: [
      {
        subhead: '1. Fisiopatología y Daño Articular Inducido por Pannus Sinovial',
        paragraphs: [
          'La AR es una enfermedad autoinmune sistémica mediada por linfocitos T CD4+ Th1 y Th17, linfocitos B productores de autoanticuerpos y macrófagos sinoviales activados. Estos liberan citoquinas proinflamatorias clave (<strong>TNF-alfa, Interleuquina-6, Interleuquina-1</strong>) que promueven la neoangiogénesis y la hiperplasia masiva de los sinoviocitos, conformando el <strong>pannus sinovial</strong> invasivo.',
          'El pannus secreta metaloproteinasas de matriz que degradan el cartílago articular hialino y activa osteoclastos vía ligando de RANK (RANKL), provocando <strong>erosiones óseas marginales y osteopenia yuxtaarticular</strong> en las zonas desprovistas de cartílago protector.',
          'Afecta predominantemente a mujeres (proporción 3:1 respecto a hombres), con pico de incidencia entre los 35 y 55 años. Existe una fuerte susceptibilidad genética ligada al alelo <strong>HLA-DR4</strong> (epítopo compartido) y un rol ambiental gatillante demostrado en el <strong>tabaquismo</strong>, que induce la citrulinación de proteínas en el epitelio alveolar pulmonar.'
        ]
      },
      {
        subhead: '2. Manifestaciones Articulares Típicas y Deformidades Tardías',
        paragraphs: [
          'El cuadro clínico clásico es un <strong>síndrome poliarticular inflamatorio crónico, bilateral y simétrico</strong>, de curso aditivo. Compromete típicamente pequeñas articulaciones:',
          '• Muñecas (articulación radiocarpiana y radiocubital distal).',
          '• Articulaciones Metacarpofalángicas (MCF).',
          '• Articulaciones Interfalángicas Proximales (IFP).',
          '• Metatarsofalángicas (MTF) en pies.',
          '• Grandes articulaciones: rodillas, hombros, codos y tobillos.',
          '<strong>Reglas de Oro Topográficas EUNACOM:</strong>',
          '1. La AR <strong>RESPETA típicamente las articulaciones interfalángicas distales (IFD)</strong> (su inflamación orienta a artrosis o artritis psoriásica).',
          '2. La AR <strong>RESPETA el esqueleto axial sacroilíaco y toracolumbar</strong> (su compromiso orienta a espondiloartropatías).',
          '3. <em>Excepción Crítica:</em> En la columna cervical puede haber inflamación sinovial de la apófisis odontoides y del ligamento transverso del atlas, produciendo <strong>subluxación atloaxoidea (C1-C2)</strong>. Puede debutar con parestesias, hiperreflexia o compresión medular mortal ante flexión forzada o intubación endotraqueal.',
          'El síntoma cardinal funcional es la <strong>rigidez matinal prolongada, superior a 45-60 minutos</strong> (frecuentemente > 2 horas), que mejora con la actividad y el movimiento.',
          'Deformidades tardías de la enfermedad avanzada no tratada: desviación ulnar de los dedos en ráfaga, dedos en ojal (boutonnière), dedos en cuello de cisne (hiperextensión de IFP con flexión de IFD) y pulgar en Z.'
        ]
      },
      {
        subhead: '3. Criterios Diagnósticos Clasificatorios ACR/EULAR 2010',
        paragraphs: [
          'Los criterios clásicos de 1987 esperaban deformidades y erosiones radiológicas, perdiendo la ventana de oportunidad terapéutica. Los <strong>criterios ACR/EULAR 2010</strong> se diseñaron para el diagnóstico precoz. Requieren presencia de sinovitis clínica en al menos una articulación no explicada por otra patología, y un puntaje <strong>≥ 6 de 10 puntos</strong>:',
          '<strong>A. Compromiso Articular (0 a 5 puntos):</strong>',
          '• 1 articulación mediana o grande: 0 puntos.',
          '• 2 a 10 articulaciones medianas o grandes: 1 punto.',
          '• 1 a 3 articulaciones pequeñas: 2 puntos.',
          '• 4 a 10 articulaciones pequeñas: 3 puntos.',
          '• > 10 articulaciones (al menos una pequeña): 5 puntos.',
          '<strong>B. Serología Inmunológica (0 a 3 puntos):</strong>',
          '• FR y Anti-CCP negativos: 0 puntos.',
          '• FR o Anti-CCP positivo a títulos bajos (≤ 3 veces valor normal): 2 puntos.',
          '• FR o Anti-CCP positivo a títulos ALTOS (> 3 veces valor normal): 3 puntos.',
          '<strong>C. Reactantes de Fase Aguda (0 a 1 punto):</strong>',
          '• VHS y PCR normales: 0 puntos.',
          '• VHS o PCR anormalmente elevadas: 1 punto.',
          '<strong>D. Duración de los Síntomas (0 a 1 punto):</strong>',
          '• < 6 semanas: 0 puntos.',
          '• ≥ 6 semanas: 1 punto.'
        ]
      },
      {
        subhead: '4. Perfil Serológico: Factor Reumatoide vs Anticuerpos Anti-CCP',
        paragraphs: [
          '• <strong>Factor Reumatoide (FR):</strong> Autoanticuerpo (habitualmente IgM) dirigido contra la porción Fc de la IgG humana. Sensibilidad del 70-80%, pero baja especificidad (se positiviza en síndrome de Sjögren [>80%], hepatopatías crónicas, endocarditis, lepra y hasta en un 5% de ancianos sanos).',
          '• <strong>Anti-Péptido Citrulinado Cíclico (Anti-CCP):</strong> Sensibilidad comparable a FR (70-80%), pero con <strong>especificidad sobresaliente del 96% al 98%</strong>. Aparece años antes de las primeras manifestaciones articulares. Su positividad a títulos altos es el mejor factor predictor de <strong>artritis reumatoide agresiva y fuertemente erosiva</strong>.'
        ]
      },
      {
        subhead: '5. Manifestaciones Extraarticulares de la Artritis Reumatoide',
        paragraphs: [
          'Aparecen predominantemente en pacientes con serología intensamente positiva (FR y Anti-CCP altos) y enfermedad de larga data:',
          '• <strong>Nódulos Reumatoideos Subcutáneos:</strong> Presentes en el 20-30%. Nódulos firmes, adheridos a planos profundos pero móviles sobre el hueso, indoloros, ubicados en zonas de presión repetida (superficie extensora del cúbito/olécranon, tendón de Aquiles). Histología: granuloma con necrosis fibrinoide central rodeada de histiocitos en empalizada.',
          '• <strong>Compromiso Pleuropulmonar:</strong> Enfermedad pulmonar intersticial difusa (EPID, patrón NIU o NINE), pleuritis con derrame pleural característico (<strong>glucosa sinovial extremadamente baja < 30 mg/dL</strong> y LDH muy alta), nódulos pulmonares reumatoides y <strong>Síndrome de Caplan</strong> (asociación de AR con neumoconiosis y nódulos pulmonares múltiples).',
          '• <strong>Compromiso Ocular:</strong> Queratoconjuntivitis seca secundaria (la más frecuente), epiescleritis (benigna, no dolorosa) y escleritis necrotizante anterior (urgencia oftalmológica: dolor ocular intenso y riesgo de perforación escleral).',
          '• <strong>Vasculitis Reumatoidea:</strong> Vasculitis necrotizante de vasos pequeños/medianos con úlceras isquémicas en extremidades inferiores, púrpura palpable y mononeuritis múltiple.',
          '• <strong>Síndrome de Felty:</strong> Tríada clásica consistente en: <strong>1) Artritis Reumatoide severa; 2) Esplenomegalia; y 3) Neutropenia (< 1.500/mm³)</strong>. Conlleva un alto riesgo de infecciones bacterianas piógenas graves recurrentes.'
        ]
      }
    ],
    table: {
      title: 'Desglose del Puntaje Diagnóstico ACR/EULAR 2010 para Artritis Reumatoide',
      headers: ['Categoría de Criterios', 'Hallazgos Específicos', 'Puntaje Asignado'],
      rows: [
        ['Compromiso Articular', '1 articulación grande / mediana afectada', '0 puntos'],
        ['', '2 – 10 articulaciones grandes / medianas afectadas', '1 punto'],
        ['', '1 – 3 articulaciones pequeñas afectadas', '2 puntos'],
        ['', '4 – 10 articulaciones pequeñas afectadas', '3 puntos'],
        ['', '> 10 articulaciones afectadas (al menos 1 pequeña)', '5 puntos'],
        ['Serología (FR / Anti-CCP)', 'FR y Anti-CCP negativos', '0 puntos'],
        ['', 'FR o Anti-CCP positivo a títulos bajos (≤ 3x VN)', '2 puntos'],
        ['', 'FR o Anti-CCP positivo a títulos ALTOS (> 3x VN)', '3 puntos'],
        ['Reactantes de Fase Aguda', 'VHS y PCR normales', '0 puntos'],
        ['', 'VHS o PCR anormalmente elevadas', '1 punto'],
        ['Duración de Síntomas', 'Duración < 6 semanas', '0 puntos'],
        ['', 'Duración ≥ 6 semanas', '1 punto']
      ]
    },
    severityTable: {
      title: 'Factores Clínico-Biológicos de Mal Pronóstico en Artritis Reumatoide',
      headers: ['Factor de Riesgo', 'Manifestación / Biomarcador', 'Implicancia Pronóstica'],
      rows: [
        ['Serología de Alto Título', 'Anti-CCP y Factor Reumatoide > 3 veces el límite superior', 'Rápida progresión a erosiones óseas y deformidad articular'],
        ['Reactantes Muy Elevados', 'VHS > 50 mm/h o PCR persistentemente elevada', 'Persistencia de actividad inflamatoria destructiva continua'],
        ['Erosiones Radiológicas Precoces', 'Presencia de erosiones marginales en los primeros 12 meses', 'Fenotipo erosivo agresivo con pérdida funcional prematura'],
        ['Manifestaciones Extraarticulares', 'Nódulos reumatoideos, vasculitis o afección pulmonar', 'Mayor morbimortalidad global y necesidad de terapia biológica precoz']
      ]
    },
    treatmentTable: {
      title: 'Evaluación y Metas de Remisión en Artritis Reumatoide (Treat-to-Target)',
      headers: ['Índice de Actividad', 'Parámetros Evaluados', 'Meta Terapéutica (Remisión)'],
      rows: [
        ['DAS28 (Disease Activity Score)', '28 articulaciones dolorosas/tumefactas + VHS/PCR + EVA global', 'DAS28 < 2.6 (Remisión clínica) o ≤ 3.2 (Baja actividad)'],
        ['CDAI (Clinical Disease Activity Index)', 'Recuento articular de 28 articulaciones + EVA médico + EVA paciente', 'CDAI ≤ 2.8 (Remisión clínica estricta sin reactantes)'],
        ['SDAI (Simplified Disease Activity)', 'CDAI + valor numérico de PCR (mg/dL)', 'SDAI ≤ 3.3 (Remisión estricta de Guías ACR/EULAR)']
      ]
    },
    vignette: 'Mujer de 46 años consulta por dolor e inflamación progresiva en ambas manos y muñecas de 8 semanas de evolución. Refiere que al despertar siente las manos engatilladas y rígidas, demorando más de 2 horas en poder preparar el desayuno. Al examen físico se constata tumefacción dolorosa a la palpación y peloteo sinovial en articulaciones metacarpofalángicas 2da y 3ra de ambas manos, interfalángicas proximales 3ra y 4ta bilaterales y ambas muñecas. Las interfalángicas distales son móviles e indoloras. En el codo derecho se palpa un nódulo subcutáneo firme de 1.5 cm indoloro. Laboratorio: VHS 58 mm/h, PCR 42 mg/L, Anti-CCP fuertemente positivo (180 U/mL, valor normal < 15).',
    explicacion: 'El cuadro cumple plenamente los criterios ACR/EULAR 2010 para Artritis Reumatoide con puntaje máximo: compromiso de > 10 articulaciones con pequeñas articulaciones (5 pts), Anti-CCP a títulos altos > 3x (3 pts), reactantes elevados (1 pt) y duración ≥ 6 semanas (1 pt), totalizando 10/10 puntos. El respeto de las interfalángicas distales es típico. La presencia de nódulos subcutáneos traduce enfermedad seropositiva establecida. Debe confirmarse e ingresarse de inmediato a la canasta GES para inicio urgente de FARME.',
    keyPoints: [
      'La AR es una poliartritis simétrica aditiva que compromete muñecas, MCF e IFP.',
      'La AR RESPETA clásicamente las interfalángicas distales (IFD) y el esqueleto axial lumbar/dorsal.',
      'La única región vertebral afectada por AR es la columna cervical (riesgo vital de subluxación atloaxoidea C1-C2).',
      'Rigidez matinal prolongada mayor a 45-60 minutos es el síntoma cardinal de actividad inflamatoria.',
      'Criterios ACR/EULAR 2010: puntaje ≥ 6 de 10 puntos confirma el diagnóstico.',
      'El Anti-CCP posee una especificidad del 96-98% para AR y predice enfermedad erosiva agresiva.',
      'El Síndrome de Felty consiste en la tríada: Artritis Reumatoide + Esplenomegalia + Neutropenia.',
      'El derrame pleural reumatoide se caracteriza patognomónicamente por niveles de glucosa extremadamente bajos (< 30 mg/dL).'
    ],
    questions: [
      {
        stem: 'Mujer de 39 años consulta por dolor y rigidez en ambas manos de 2 meses de evolución, con rigidez al despertar que supera los 90 minutos. Al examen se evidencia artritis en muñecas, 2da y 3ra metacarpofalángicas e interfalángicas proximales de forma bilateral y simétrica. Las articulaciones interfalángicas distales no presentan inflamación. El Factor Reumatoide es positivo a títulos moderados y los anticuerpos Anti-CCP son intensamente positivos. ¿Cuál es el examen radiológico inicial que debe solicitarse para evaluar daño estructural basal?',
        options: [
          { id: 'A', text: 'Resonancia magnética de columna lumbosacra con gadolinio' },
          { id: 'B', text: 'Radiografía simple comparativa de manos y pies en proyección anteroposterior' },
          { id: 'C', text: 'Cintigrama óseo trifásico corporal total' },
          { id: 'D', text: 'Tomografía computarizada de articulaciones sacroilíacas' },
          { id: 'E', text: 'Ecografía Doppler de grandes articulaciones axiales' }
        ],
        correcta: 'B',
        explicacion: 'En la evaluación basal de la Artritis Reumatoide, el estudio de imagen de elección para documentar la presencia o ausencia de erosiones marginales y osteopenia yuxtaarticular es la radiografía simple anteroposterior comparativa de manos y pies. Las articulaciones metatarsofalángicas (pies) presentan erosiones precoces incluso antes que las manos en un porcentaje significativo de pacientes.',
        recTag: 'EUNACOM 2018 · Q#15'
      },
      {
        stem: 'Hombre de 64 años con antecedente de artritis reumatoide de 15 años de evolución, portador de nódulos reumatoideos subcutáneos y deformidades en cuello de cisne, consulta por astenia y fiebre recurrente. Al examen destaca esplenomegalia palpable a 4 cm bajo el reborde costal. El hemograma muestra: hemoglobina 10.2 g/dL, leucocitos 2.100/mm³, recuento absoluto de neutrófilos 650/mm³ y plaquetas 190.000/mm³. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Síndrome de Sjögren primario complicado con linfoma' },
          { id: 'B', text: 'Síndrome de Felty' },
          { id: 'C', text: 'Lupus eritematoso sistémico secundario' },
          { id: 'D', text: 'Amiloidosis secundaria AL con infiltración esplénica' },
          { id: 'E', text: 'Toxicidad medular aislada por antiinflamatorios' }
        ],
        correcta: 'B',
        explicacion: 'La tríada clásica de Artritis Reumatoide crónica seropositiva severa + Esplenomegalia + Neutropenia (< 1.500/mm³) define el Síndrome de Felty. Estos pacientes presentan un riesgo muy elevado de infecciones bacterianas cutáneas y pulmonares graves recurrentes debido a la neutropenia severa secundaria a hiperesplenismo y destrucción autoinmune periférica.',
        recTag: 'EUNACOM 2020 · Q#31'
      },
      {
        stem: '¿Cuál de las siguientes alteraciones articulares es típicamente RESPETADA por la artritis reumatoide, orientando el diagnóstico hacia otra enfermedad si se encuentra comprometida?',
        options: [
          { id: 'A', text: 'Articulaciones metacarpofalángicas de manos' },
          { id: 'B', text: 'Articulación radiocarpiana de muñecas' },
          { id: 'C', text: 'Articulaciones interfalángicas distales de dedos de manos' },
          { id: 'D', text: 'Articulaciones metatarsofalángicas de pies' },
          { id: 'E', text: 'Articulación atlantoaxoidea de columna cervical' }
        ],
        correcta: 'C',
        explicacion: 'La Artritis Reumatoide respeta típicamente las articulaciones interfalángicas distales (IFD). Su afectación orienta prioritariamente a Artrosis (Nódulos de Heberden) o a Artritis Psoriásica. La AR compromete característicamente muñecas, MCF e IFP, y la única porción axial que afecta es la articulación atloaxoidea C1-C2 en columna cervical.',
        recTag: 'EUNACOM 2022 · Q#18'
      },
      {
        stem: 'Un paciente con artritis reumatoide severa de larga evolución va a ser sometido a una colecistectomía laparoscópica programada bajo anestesia general. ¿Qué estudio preoperatorio específico es indispensable solicitar para prevenir una complicación neurológica mortal durante la intubación orotraqueal?',
        options: [
          { id: 'A', text: 'Radiografía de columna lumbosacra anteroposterior y lateral' },
          { id: 'B', text: 'Radiografía de columna cervical funcional con flexión y extensión máximas' },
          { id: 'C', text: 'Electromiografía de cuatro extremidades' },
          { id: 'D', text: 'Resonancia nuclear magnética de articulaciones temporomandibulares' },
          { id: 'E', text: 'Ecocardiograma transesofágico para descartar endocarditis de Libman-Sacks' }
        ],
        correcta: 'B',
        explicacion: 'En pacientes con AR de larga data, la sinovitis crónica de la apófisis odontoides y del ligamento transverso del atlas puede provocar subluxación atloaxoidea (C1-C2). La hiperextensión cervical durante la intubación orotraqueal puede comprimir la médula espinal y provocar cuadriplejia o paro cardiorrespiratorio fatal. La radiografía de columna cervical funcional (en flexión y extensión) evalúa la distancia atlo-odontoidea (> 3 mm es anormal).',
        recTag: 'EUNACOM 2024 · Q#03'
      }
    ]
  },

  {
    id: 'reuma-07', classId: 'reuma-07', tier: 3,
    blockNum: 2, blockName: 'Artritis Reumatoide y Enfermedades del Tejido Conectivo',
    topicLabel: '9.7',
    title: 'Artritis Reumatoide: Farmacoterapia, FARME Convencionales, Biológicos y GES',
    perfilCode: '1.10.1.001', dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Acceso garantizado a FARME sintéticos y biológicos en AR activa',
    reconstrucciones: 'EUNACOM 2017 Q#21 · EUNACOM 2019 Q#08 · EUNACOM 2021 Q#44 · EUNACOM 2023 Q#37',
    frecuencia: 'Muy Alta · Manejo farmacológico de primera línea y seguridad biológica en EUNACOM',
    svg: null, algoTitle: 'Esquema Terapéutico Escalonado en Artritis Reumatoide (Estrategia Treat-to-Target GES)',
    diagram: flow('Escalamiento Farmacológico en AR', [
      { k: 'box', t: 'Diagnóstico Confirmado de Artritis Reumatoide (ACR/EULAR ≥ 6)', s: 'Inicio inmediato de FARME (dentro de los primeros 3 meses = Ventana de Oportunidad)', type: 'acc' },
      { k: 'box', t: 'Pilar Ineludible de Primera Línea: Metotrexato (MTX)', s: 'Dosis: 15 a 25 mg SEMANAL VO o SC + Ácido Fólico 5 mg semanal (24-48h post-MTX)', type: 'warn' },
      { k: 'split', q: 'Terapia de Puente y Evaluación a los 3 Meses', s: 'Objetivo Treat-to-Target: Mejoría > 50% a los 3 meses y Remisión (DAS28 < 2.6) a los 6 meses',
        ll: 'Respuesta Adecuada (DAS28 < 2.6)',
        left: { t: 'Mantener Dosis Efectiva de MTX', s: 'Retirar corticoides de puente · Control clínico y perfil hepático cada 3-6 meses', type: 'acc' },
        rl: 'Falla Terapéutica o Toxicidad',
        right: { t: 'Asociar FARME Sintéticos (Triple Terapia)', s: 'MTX + Sulfasalazina (2-3g/d) + Hidroxicloroquina (200-400mg/d) o Leflunomida (20mg/d)', type: 'dec' }
      },
      { k: 'box', t: 'Paso a Terapia Biológica Anti-TNF (Infliximab, Adalimumab, Etanercept)', s: 'REGLA DE ORO MANDATORIA: Descartar Tuberculosis Latente (PPD / IGRA + Rx Tórax) antes de iniciar', type: 'crit' },
      { k: 'box', t: 'Alternativas Biológicas Avanzadas: Tocilizumab (Anti-IL-6), Rituximab o Inhibidores JAK', s: 'Reservadas para refractariedad a biológicos anti-TNF · GES de segunda línea', type: 'acc' }
    ]),
    contexto: 'El tratamiento de la AR se rige por la estrategia Treat-to-Target: el objetivo es la remisión clínica estricta (DAS28 < 2.6) o al menos baja actividad de la enfermedad. El retraso en el inicio de FARME condiciona discapacidad laboral permanente. El EUNACOM interroga intensamente la dosificación semanal de metotrexato, la coadministración obligatoria de ácido fólico y el cribado mandatorio de tuberculosis previo al uso de fármacos biológicos.',
    contentSections: [
      {
        subhead: '1. Filosofía Treat-to-Target y Ventana de Oportunidad Terapéutica',
        paragraphs: [
          'La AR debe tratarse inmediatamente tras su confirmación diagnóstica. Existe una <strong>\"ventana de oportunidad\" crítica durante los primeros 3 meses</strong> desde el inicio de los síntomas en la que el inicio precoz de un Fármaco Modificador de la Enfermedad (FARME) detiene la progresión radiológica y preserva la capacidad funcional.',
          'La estrategia <em>Treat-to-Target</em> (tratar hasta alcanzar el objetivo) implica ajustar la farmacoterapia cada 1 a 3 meses hasta lograr la <strong>remisión clínica (DAS28 < 2.6)</strong> o baja actividad (DAS28 ≤ 3.2).',
          'Los analgésicos puros y AINEs solo controlan el dolor y la rigidez de forma transitoria, pero <strong>NO modifican el curso natural de la enfermedad ni evitan la destrucción osteoarticular</strong>.'
        ]
      },
      {
        subhead: '2. Metotrexato: Estándar de Oro y Reglas de Prescripción EUNACOM',
        paragraphs: [
          'El <strong>Metotrexato (MTX)</strong> es un antagonista del folato que ejerce su acción antiinflamatoria en dosis bajas mediante la acumulación y liberación extracelular de adenosina.',
          '<strong>Reglas Inquebrantables de Prescripción EUNACOM:</strong>',
          '• <strong>Dosificación SEMANAL (NUNCA DIARIA):</strong> La dosis inicial es de 10 a 15 mg una vez por semana, titulando rápidamente cada 2 a 4 semanas hasta 20 a 25 mg <strong>UNA VEZ A LA SEMANA</strong> por vía oral o subcutánea (la vía SC tiene mayor biodisponibilidad y menores efectos adversos digestivos). <em>Peligro mortal:</em> La prescripción accidental diaria produce aplasia medular y mucositis tóxica severa.',
          '• <strong>Suplementación con Ácido Fólico:</strong> Es <strong>MANDATORIO coadministrar Ácido Fólico (5 a 10 mg semanales)</strong> administrado 24 a 48 horas después de la dosis de metotrexato. Reduce en más de un 80% las náuseas, estomatitis ulcerosa, alopecia, citopenias y elevación asintomática de transaminasas, sin disminuir la eficacia terapéutica del MTX.',
          '• <strong>Monitorización:</strong> Hemograma y perfil hepático basales, y luego cada 1 a 3 meses. Si las transaminasas se elevan > 3 veces el límite superior normal se debe suspender temporalmente.',
          '• <strong>Contraindicaciones Absolutas:</strong> Embarazo y lactancia (es teratogénico y abortivo demostrado), hepatopatía crónica activa, consumo abusivo de alcohol, e insuficiencia renal severa (VFG < 30 mL/min).'
        ]
      },
      {
        subhead: '3. Otros FARME Sintéticos Convencionales (scDMARDs)',
        paragraphs: [
          '• <strong>Leflunomida:</strong> Inhibe la síntesis de novo de pirimidinas (dihidroorotato deshidrogenasa). Dosis: 20 mg/día oral. Eficacia similar a MTX. Muy teratogénica (requiere lavado con colestiramina si se desea embarazo).',
          '• <strong>Sulfasalazina:</strong> Dosis: 2 a 3 g/día oral. De elección ante contraindicación o intolerancia a MTX, y es el fármaco más seguro si la paciente busca embarazo planificado.',
          '• <strong>Hidroxicloroquina (HCQ):</strong> Dosis: 200 a 400 mg/día (≤ 5 mg/kg peso real/día). Potencia antiinflamatoria moderada, excelente como coadyuvante en combinaciones (ej. terapia triple: MTX + SSZ + HCQ). Requiere <strong>evaluación oftalmológica basal y anual después del 5to año</strong> para tamizar maculopatía en ojo de buey.',
          '• <strong>Terapia de Puente con Corticoides (Bridge Therapy):</strong> Como el MTX demora entre 6 y 12 semanas en alcanzar su efecto terapéutico pleno, se asocian <strong>corticoides orales a dosis bajas (Prednisona 5 a 10 mg/día)</strong> para alivio sintomático rápido, con el compromiso formal de desescalar y retirarlos completamente una vez que el FARME actúe.'
        ]
      },
      {
        subhead: '4. Terapia Biológica y Fármacos Dirigidos (GES): Regla de Oro en Tuberculosis',
        paragraphs: [
          'Indicada ante fracaso terapéutico (actividad moderada a alta DAS28 > 3.2 persistente tras 3 a 6 meses de MTX optimizado o combinación de FARME sintéticos):',
          '<strong>Familias de Biológicos Disponibles:</strong>',
          '• Inhibidores de TNF-alfa: <strong>Adalimumab, Infliximab, Etanercept, Golimumab, Certolizumab</strong>.',
          '• Inhibidores de receptor de IL-6: <strong>Tocilizumab</strong>.',
          '• Moduladores de la coestimulación de células T: <strong>Abatacept</strong>.',
          '• Depletores de linfocitos B anti-CD20: <strong>Rituximab</strong>.',
          '• Inhibidores de Janus Kinasas (JAK oral): <strong>Tofacitinib, Baricitinib, Upadacitinib</strong>.',
          '<strong>REGLA DE ORO DE SEGURIDAD BIOLÓGICA EUNACOM:</strong>',
          'Antes de prescribir cualquier fármaco inhibidor del TNF-alfa o terapia biológica inmunosupresora es <strong>ESTRICTAMENTE OBLIGATORIO descartar Tuberculosis Latente</strong> mediante:',
          '1. Radiografía de tórax frontal y lateral.',
          '2. Test de tuberculina (PPD) o Ensayo de liberación de interferón gamma (IGRA / QuantiFERON).',
          '3. Serología de Hepatitis B (HBsAg, Anti-HBc) y Hepatitis C.',
          '<em>Conducta ante PPD positivo (≥ 5 mm en este grupo) o IGRA positivo con radiografía normal:</em> Iniciar <strong>quimioprofilaxis con Isoniazida 300 mg/día + Vitamina B6 por 9 meses</strong> (o Rifampicina 4 meses). La terapia biológica solo puede iniciarse después de haber completado al menos <strong>1 mes de tratamiento tuberculostático</strong> para evitar la reactivación de una TBC miliar o extrapulmonar mortal.'
        ]
      }
    ],
    table: {
      title: 'Perfil Comparativo de FARME Sintéticos en Artritis Reumatoide',
      headers: ['Fármaco', 'Mecanismo de Acción', 'Dosis Habitual', 'Toxicidad Principal', 'Monitoreo Obligatorio'],
      rows: [
        ['Metotrexato (MTX)', 'Antagonista del folato / adenosina', '15 – 25 mg SEMANAL VO o SC', 'Hepatotoxicidad, citopenias, neumonitis', 'Hemograma y transaminasas cada 1-3 meses + Ácido Fólico'],
        ['Leflunomida', 'Inhibidor síntesis de pirimidinas', '20 mg / día oral', 'Diarrea, hipertensión, alopecia, hepatopatía', 'Presión arterial, hemograma y transaminasas'],
        ['Sulfasalazina', 'Modulación citoquinas / prostaglandinas', '2 – 3 g / día oral', 'Molestias GI, erupción cutánea, neutropenia', 'Hemograma y perfil hepático periódico'],
        ['Hidroxicloroquina', 'Inhibición de presentación antigénica', '200 – 400 mg / día (≤5mg/kg/d)', 'Toxicidad retiniana (maculopatía en ojo de buey)', 'Fondo de ojo y campo visual anual tras 5 años'],
        ['Prednisona (Puente)', 'Inhibición transcripcional NF-kB', '5 – 10 mg / día oral (transitorio)', 'Osteoporosis, síndrome de Cushing, diabetes', 'Densitometría ósea, glicemia, presión arterial']
      ]
    },
    severityTable: {
      title: 'Protocolo de Seguridad Previo al Inicio de Terapias Biológicas Anti-TNF',
      headers: ['Infección a Descartar', 'Herramienta de Tamizaje', 'Criterio de Positividad', 'Conducta Mandatoria Previa al Biológico'],
      rows: [
        ['Tuberculosis Latente', 'PPD (tuberculina) y/o IGRA + Radiografía de tórax', 'PPD ≥ 5 mm o IGRA reactivo', 'Isoniazida 300 mg/d por 9 meses; iniciar biológico tras 1 mes'],
        ['Hepatitis B Crónica', 'HBsAg y anticuerpo anti-HBc total', 'Cualquiera positivo', 'Carga viral VHB y profilaxis con Entecavir / Tenofovir'],
        ['Hepatitis C', 'Anticuerpos anti-VHC', 'Serología reactiva', 'Confirmación con ARN viral y tratamiento antiviral previo'],
        ['Infección activa bacteriana', 'Examen físico, sedimento orina, hemograma', 'Presencia de foco infeccioso', 'Tratar y resolver completamente la infección antes de iniciar']
      ]
    },
    treatmentTable: {
      title: 'Algoritmo de Escalonamiento Terapéutico en Artritis Reumatoide GES',
      headers: ['Línea Terapéutica', 'Fármacos Utilizados', 'Momento de Evaluación', 'Criterio de Cambio / Escalada'],
      rows: [
        ['Primera Línea', 'Metotrexato 15-25 mg/semana + Ácido Fólico 5mg + Prednisona puente', '3 meses (esperar mejoría >50%)', 'Si no hay remisión a los 6 meses (DAS28 > 3.2)'],
        ['Segunda Línea', 'Asociar FARME sintético (Leflunomida 20mg/d o Sulfasalazina 2g/d)', 'A los 3 meses de ajuste', 'Falla de respuesta o intolerancia a sintéticos'],
        ['Tercera Línea (Biológico)', 'Inhibidor de TNF-alfa (Adalimumab 40mg SC c/2 sem o Etanercept 50mg SC/sem)', 'A los 3 a 6 meses con biológico', 'Si DAS28 persiste > 3.2 tras descartar TBC'],
        ['Cuarta Línea (Biológico switch)', 'Cambio a Tocilizumab (Anti-IL-6), Abatacept o Inhibidor JAK (Tofacitinib)', 'Continuo', 'Refractariedad o pérdida secundaria de respuesta']
      ]
    },
    vignette: 'Mujer de 42 años con diagnóstico reciente de artritis reumatoide seropositiva (Anti-CCP fuertemente positivo) con puntaje ACR/EULAR de 9 puntos. Consulta en policlínico para inicio de tratamiento farmacológico modificador. Presenta marcada inflamación en muñecas e interfalángicas proximales bilaterales y rigidez matinal de 2 horas. Su hemograma, función renal y perfil hepático basales son normales.',
    explicacion: 'En toda artritis reumatoide recién diagnosticada, el tratamiento modificador de primera línea de elección absoluta es el Metotrexato a dosis de 15 mg/semana oral o subcutáneo, con titulación progresiva hasta 20-25 mg/semana. Es MANDATORIO prescribir de forma concomitante Ácido Fólico (5 a 10 mg semanales administrados 24-48 horas después del metotrexato) para prevenir toxicidad hepática, estomatitis y citopenias. Se puede asociar una pauta corta de prednisona a dosis baja (5-10 mg/día) como terapia de puente mientras el metotrexato alcanza su efecto.',
    keyPoints: [
      'Metotrexato es el fármaco modificador de la enfermedad (FARME) de primera línea indiscutido en Artritis Reumatoide.',
      'El metotrexato se prescribe SIEMPRE en dosis SEMANAL (15 a 25 mg/semana), NUNCA diaria.',
      'Es obligatorio prescribir Ácido Fólico (5 a 10 mg semanales) a las 24-48 horas del MTX para reducir toxicidad digestiva y hepática.',
      'El metotrexato está absolutamente contraindicado en el embarazo por ser teratogénico y abortivo.',
      'Los corticoides a dosis bajas (≤ 7.5-10 mg/día) se usan como terapia de puente inicial y deben retirarse gradualmente.',
      'REGLA DE ORO: Antes de iniciar cualquier terapia biológica (Anti-TNF) es MANDATORIO descartar Tuberculosis Latente (PPD/IGRA + Rx tórax).',
      'Ante PPD ≥ 5 mm o IGRA positivo se debe iniciar Isoniazida 300 mg/día por 9 meses, difiriendo el biológico al menos 1 mes.',
      'La meta terapéutica Treat-to-Target en AR es alcanzar la remisión clínica definida por un DAS28 < 2.6.'
    ],
    questions: [
      {
        stem: 'Mujer de 40 años diagnosticada de artritis reumatoide activa inicia tratamiento con Metotrexato a dosis de 15 mg por semana. ¿Qué fármaco coadyuvante es indispensable prescribir conjuntamente de forma semanal para prevenir toxicidad hematológica, hepática y mucocutánea?',
        options: [
          { id: 'A', text: 'Ácido fólico 5 mg semanal administrado 24 a 48 horas post-metotrexato' },
          { id: 'B', text: 'Vitamina B12 1.000 mcg intramuscular mensual' },
          { id: 'C', text: 'Hierro sacarato 200 mg endovenoso trisemanal' },
          { id: 'D', text: 'Carbonato de calcio 1.500 mg diario más colecalciferol' },
          { id: 'E', text: 'Omeprazol 40 mg diario en ayunas de por vida' }
        ],
        correcta: 'A',
        explicacion: 'El Metotrexato es un antagonista competitivo de la dihidrofolato reductasa. La administración complementaria de Ácido Fólico a dosis de 5 a 10 mg semanales (administrado 24 a 48 horas después del día de toma de metotrexato) es obligatoria, ya que reduce drásticamente los efectos adversos de intolerancia gastrointestinal, estomatitis aftosa, citopenias medulares y elevación de transaminasas sin mermar la eficacia clínica.',
        recTag: 'EUNACOM 2017 · Q#21'
      },
      {
        stem: 'Hombre de 50 años con artritis reumatoide severa mantiene actividad inflamatoria alta (DAS28 de 5.4) tras 6 meses de tratamiento optimizado con Metotrexato 25 mg/semana más Leflunomida 20 mg/día. Se decide iniciar terapia biológica con Adalimumab (anticuerpo monoclonal anti-TNF alfa). ¿Qué conducta médica es OBLIGATORIA e ineludible antes de administrar la primera dosis del biológico?',
        options: [
          { id: 'A', text: 'Realizar artroscopía diagnóstica de rodilla con biopsia sinovial' },
          { id: 'B', text: 'Descartar infección tuberculosa latente mediante PPD o IGRA y radiografía de tórax' },
          { id: 'C', text: 'Administrar vacuna con virus vivos atenuados contra fiebre amarilla' },
          { id: 'D', text: 'Suspender permanentemente el metotrexato 3 meses antes' },
          { id: 'E', text: 'Indicar pulsos de metilprednisolona 1 g EV por 3 días consecutivos' }
        ],
        correcta: 'B',
        explicacion: 'Los fármacos bloqueadores del TNF-alfa interfieren de forma crítica con la formación y mantenimiento de los granulomas de defensa frente a Mycobacterium tuberculosis. Por ello, antes de iniciar cualquier anti-TNF es estrictamente obligatorio descartar tuberculosis latente mediante PPD (o IGRA) y radiografía de tórax. Si el tamizaje es positivo, debe iniciarse quimioprofilaxis con isoniazida al menos 1 mes antes del biológico.',
        recTag: 'EUNACOM 2019 · Q#08'
      },
      {
        stem: '¿Cuál de las siguientes es una CONTRAINDICACIÓN absoluta para el uso de Metotrexato en un paciente con artritis reumatoide recién diagnosticada?',
        options: [
          { id: 'A', text: 'Hipertensión arterial controlada con enalapril' },
          { id: 'B', text: 'Embarazo activo o deseo inminente de gestación' },
          { id: 'C', text: 'Osteopenia en densitometría ósea de cadera' },
          { id: 'D', text: 'Presencia de nódulos reumatoideos en olécranon' },
          { id: 'E', text: 'Edad mayor a 55 años' }
        ],
        correcta: 'B',
        explicacion: 'El Metotrexato es un fármaco con potencial teratogénico y abortivo demostrado (categoría X), por lo que el embarazo activo o el deseo de embarazo en el corto plazo constituyen una contraindicación absoluta para su prescripción en mujeres y hombres en edad reproductiva. Debe suspenderse al menos 3 a 6 meses antes de planificar la concepción, pudiendo utilizarse Sulfasalazina como alternativa segura.',
        recTag: 'EUNACOM 2021 · Q#44'
      },
      {
        stem: 'Una paciente de 52 años con artritis reumatoide en tratamiento con Metotrexato oral a dosis de 15 mg/semana desde hace 2 meses consulta a control. El examen físico muestra persistencia de 8 articulaciones tumefactas y rigidez matinal de 1 hora. Las transaminasas y el hemograma son estrictamente normales. ¿Cuál es la conducta terapéutica indicada según la estrategia Treat-to-Target?',
        options: [
          { id: 'A', text: 'Suspender de inmediato el metotrexato y derivar a cirugía protésica' },
          { id: 'B', text: 'Optimizar la dosis de metotrexato aumentándola a 20 – 25 mg por semana' },
          { id: 'C', text: 'Cambiar el tratamiento a prednisona 60 mg al día en monoterapia' },
          { id: 'D', text: 'Mantener la misma dosis por 2 años antes de evaluar cambios' },
          { id: 'E', text: 'Suspender todo tratamiento inmunosupresor e indicar reposo absoluto' }
        ],
        correcta: 'B',
        explicacion: 'En la estrategia Treat-to-Target, si a los 2-3 meses de tratamiento inicial con metotrexato el paciente mantiene actividad inflamatoria clínica y los controles de laboratorio (hemograma y transaminasas) demuestran excelente tolerancia biológica, la conducta indicada es optimizar el fármaco escalando la dosis semanal hacia el rango pleno eficaz de 20 a 25 mg/semana (o cambiar a vía subcutánea).',
        recTag: 'EUNACOM 2023 · Q#37'
      }
    ]
  },

  {
    id: 'reuma-08', classId: 'reuma-08', tier: 3,
    blockNum: 2, blockName: 'Artritis Reumatoide y Enfermedades del Tejido Conectivo',
    topicLabel: '9.8',
    title: 'Lupus Eritematoso Sistémico (LES): Inmunopatogenia, Criterios EULAR/ACR 2019 y Manejo Basal',
    perfilCode: '1.05.1.001', dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Garantía Explícita en Salud (GES): Lupus Eritematoso Sistémico en personas de 15 años y más · Cobertura integral',
    reconstrucciones: 'EUNACOM 2018 Q#28 · EUNACOM 2020 Q#04 · EUNACOM 2022 Q#41 · EUNACOM 2024 Q#17',
    frecuencia: 'Muy Alta · Enfermedad paradigmática del tejido conectivo y patología GES',
    svg: null, algoTitle: 'Enfrentamiento Diagnóstico y Criterios Clasificatorios EULAR/ACR 2019 en LES',
    diagram: flow('Algoritmo Diagnóstico de LES', [
      { k: 'box', t: 'Sospecha Clínica de Lupus Eritematoso Sistémico (Mujer Joven)', s: 'Fotosensibilidad · Eritema malar · Artritis · Citopenias · Serositis · Proteinuria', type: 'acc' },
      { k: 'box', t: 'Paso 1 Obligatorio: Criterio de Entrada EULAR/ACR 2019', s: 'Anticuerpos Antinucleares (ANA) Positivos ≥ 1:80 (Sensibilidad > 98%) · Si es (-), NO clasifica', type: 'warn' },
      { k: 'split', q: 'Paso 2: Suma de Dominios Clínicos e Inmunológicos Ponderados', s: 'Se requiere una puntuación acumulada ≥ 10 puntos (Punto de corte)',
        ll: 'Dominios Clínicos Ponderados',
        left: { t: 'Mucocutáneo, Articular, Renal, Serositis', s: 'Eritema malar (6 pts) · Nefritis biopsiada Clase III/IV (10 pts) · Artritis (6 pts)', type: 'crit' },
        rl: 'Dominios Inmunológicos Ponderados',
        right: { t: 'Anti-dsDNA, Anti-Sm, Complemento, SAF', s: 'Anti-dsDNA o Anti-Sm (6 pts) · C3 y/o C4 bajos (3-4 pts) · Anticuerpos SAF (2 pts)', type: 'dec' }
      },
      { k: 'box', t: 'Pilar Terapéutico Basal Innegociable en TODO Paciente con LES', s: 'Hidroxicloroquina (HCQ) ≤ 5 mg/kg peso real/día (reduce mortalidad, brotes y daño renal)', type: 'acc' }
    ]),
    contexto: 'El Lupus Eritematoso Sistémico (LES) es el prototipo de enfermedad autoinmune multisistémica. En Chile es una patología garantizada por el GES. El EUNACOM pone a prueba de forma sistemática el criterio de entrada de los criterios EULAR/ACR 2019 (ANA ≥ 1:80), la interpretación de los anticuerpos específicos (Anti-dsDNA y Anti-Smith), el rol de los niveles de complemento (C3 y C4) como marcador de actividad y el uso mandatorio de hidroxicloroquina en todo paciente.',
    contentSections: [
      {
        subhead: '1. Inmunopatogenia, Epidemiología y Fenómenos Gatillantes',
        paragraphs: [
          'El LES se caracteriza por la pérdida de la autotolerancia frente a antígenos intracelulares nucleares y citoplasmáticos. El defecto primario involucra una <strong>depuración deficiente de las células apoptóticas</strong>: el material nuclear queda expuesto a las células dendríticas plasmocitoides, las cuales secretan grandes cantidades de <strong>Interferón alfa (firma de interferón)</strong>.',
          'Los linfocitos B autorreactivos producen autoanticuerpos dirigidos contra complejos ADN-histonas y ribonucleoproteínas (Anti-dsDNA, Anti-Smith, Anti-Ro, Anti-La). Estos autoanticuerpos forman <strong>inmunocomplejos circulantes que precipitan en endotelios y membranas basales</strong> (glomérulo renal, piel, pleura, pericardio, articulaciones), activando la vía clásica del complemento con atracción masiva de neutrófilos y daño tisular inflamatorio severo.',
          'Epidemiología: El 90% de los pacientes son <strong>mujeres en edad fértil (15 a 45 años)</strong> (relación mujer:hombre de 9:1). Los estrógenos amplifican la respuesta autoinmune.',
          'Factores gatillantes de brotes de actividad lúpica: <strong>Radiación ultravioleta (UVB)</strong> (induce apoptosis de queratinocitos y liberación masiva de autoantígenos), infecciones bacterianas o virales (EBV, CMV), estrés físico/emocional y fluctuaciones hormonales (embarazo y puerperio).'
        ]
      },
      {
        subhead: '2. Criterios Clasificatorios EULAR/ACR 2019 (El Nuevo Estándar)',
        paragraphs: [
          'Para clasificar a un paciente con LES según el consenso internacional EULAR/ACR 2019 se deben cumplir dos fases obligatorias:',
          '<strong>Fase 1: Criterio de Entrada Único y Mandatorio:</strong>',
          '• <strong>Anticuerpos Antinucleares (ANA) positivos por inmunofluorescencia indirecta en células HEp-2 en título ≥ 1:80</strong> (o técnica equivalente positiva).',
          '<em>Regla de Oro:</em> Si los ANA son negativos, <strong>el paciente NO puede clasificarse como LES</strong> (sensibilidad > 98%). Si los ANA son positivos, se pasa a evaluar los dominios adicionales.',
          '<strong>Fase 2: Sistema de Dominios Ponderados (Se requiere un puntaje ≥ 10 puntos):</strong>',
          'Solo se cuenta el criterio de mayor puntaje dentro de cada dominio:',
          '• <em>Dominio Constitucional:</em> Fiebre inexplicada > 38.3 °C (2 puntos).',
          '• <em>Dominio Hematológico:</em> Leucopenia < 4.000/mm³ (3 pts), Trombocitopenia < 100.000/mm³ (4 pts), Anemia hemolítica autoinmune con Coombs directo (+) (4 pts).',
          '• <em>Dominio Neuropsiquiátrico:</em> Delirium (2 pts), Psicosis (3 pts), Convulsiones (5 pts).',
          '• <em>Dominio Mucocutáneo:</em> Alopecia no cicatricial (2 pts), Úlceras orales indoloras (2 pts), Lupus cutáneo subagudo o discoide (4 pts), Lupus cutáneo agudo / <strong>Eritema malar en alas de mariposa que respeta los surcos nasogenianos</strong> (6 pts).',
          '• <em>Dominio Serositis:</em> Derrame pleural o pericárdico o pericarditis aguda clínica (5 pts).',
          '• <em>Dominio Musculoesquelético:</em> Afectación articular (sinovitis en ≥ 2 articulaciones o rigidez matinal > 30 min en ≥ 2 art) (6 pts). La artropatía lúpica clásica es la <strong>Artropatía de Jaccoud</strong>: deformidades articulares marcadas en manos que son <strong>reducibles pasivamente y NO presentan erosiones óseas en la radiografía</strong>.',
          '• <em>Dominio Renal:</em> Proteinuria > 0.5 g/24 horas (4 pts), Biopsia renal con nefritis lúpica Clase II o V (8 pts), Biopsia renal con nefritis Clase III o IV (10 pts).',
          '• <em>Dominio Anticuerpos Antifosfolípidos:</em> Anticoagulante lúpico, anticuerpos anticardiolipina o anti-beta-2-glicoproteína I positivos (2 pts).',
          '• <em>Dominio Proteínas del Complemento:</em> C3 bajo O C4 bajo (3 pts); C3 bajo Y C4 bajo (4 pts).',
          '• <em>Dominio Anticuerpos Específicos:</em> Anticuerpos <strong>Anti-dsDNA positivos O Anti-Smith (Anti-Sm) positivos</strong> (6 pts).'
        ]
      },
      {
        subhead: '3. Perfil de Autoanticuerpos y su Utilidad Clínica',
        paragraphs: [
          '• <strong>ANA (Antinucleares):</strong> Sensibilidad altísima (> 98%), pero baja especificidad (especificidad ~80-85%). Ideales para tamizaje de descarte.',
          '• <strong>Anti-dsDNA (ADN de doble hebra):</strong> Especificidad sobresaliente (> 95%). Se correlaciona directamente con la <strong>actividad de la enfermedad</strong> y con el desarrollo de <strong>nefritis lúpica proliferativa</strong>. Títulos en ascenso predicen un brote inminente.',
          '• <strong>Anti-Smith (Anti-Sm):</strong> Es el autoanticuerpo <strong>MÁS ESPECÍFICO de LES (> 99%)</strong>. Su presencia confirma el diagnóstico sin dudas, aunque su sensibilidad es de solo 20-30%. No suele variar con la actividad.',
          '• <strong>Anti-Ro (SSA) y Anti-La (SSB):</strong> Asociados a lupus cutáneo subagudo, fotosensibilidad extrema y riesgo de <strong>lupus neonatal con bloqueo cardíaco congénito</strong>.',
          '• <strong>Niveles de Complemento (C3 y C4):</strong> Durante los brotes inflamatorios sistémicos y renales, la activación masiva de la cascada consume complemento. El hallazgo de <strong>C3 y C4 disminuidos</strong> es el mejor marcador biológico de actividad lúpica aguda junto al Anti-dsDNA elevado.'
        ]
      },
      {
        subhead: '4. Tratamiento Farmacológico Basal: La Regla de la Hidroxicloroquina',
        paragraphs: [
          '<strong>Regla de Oro en Manejo de LES EUNACOM:</strong>',
          'Todo paciente con diagnóstico confirmado de Lupus Eritematoso Sistémico <strong>DEBE recibir Hidroxicloroquina (HCQ) de forma indefinida</strong>, salvo contraindicación formal oftalmológica comprobada.',
          '• <strong>Dosificación de Hidroxicloroquina:</strong> Dosis máxima de <strong>≤ 5 mg/kg de peso real al día</strong> (típicamente 200 a 400 mg/día vía oral).',
          '• <strong>Beneficios Demostrados:</strong> Reduce drásticamente la frecuencia y gravedad de los brotes clínicos, previene la progresión a daño renal irreversible, disminuye los eventos trombóticos arteriales y venosos, mejora el perfil lipídico y <strong>reduce la mortalidad global a largo plazo</strong>.',
          '• <strong>Seguridad Oftalmológica:</strong> El riesgo de maculopatía tóxica en ojo de buey es sumamente bajo (< 1%) en los primeros 5 años a dosis correctas. Se exige un examen oftalmológico basal (campo visual computarizado 10-2 y tomografía de coherencia óptica OCT) y luego controles anuales a partir del quinto año de uso.',
          '• <strong>Fotoprotección Rigurosa:</strong> Bloqueador solar FPS ≥ 50 diario cada 3-4 horas, ropa protectora y evitar la exposición solar directa.',
          '• <strong>Manejo de Brotes Leves/Moderados:</strong> Corticoides a dosis bajas a intermedias (Prednisona 5 a 20 mg/día) y AINEs de forma transitoria para artralgias o serositis leve.'
        ]
      }
    ],
    table: {
      title: 'Significado Clínico de los Autoanticuerpos en Lupus Eritematoso Sistémico',
      headers: ['Anticuerpo', 'Sensibilidad', 'Especificidad', 'Correlación Clínica y Utilidad'],
      rows: [
        ['ANA (Antinucleares)', '> 98%', '~80%', 'Criterio de entrada obligatorio; excelente valor predictivo negativo'],
        ['Anti-dsDNA (Doble hebra)', '60 – 70%', '> 95%', 'Marcador de actividad lúpica y predictor directo de Nefritis Lúpica'],
        ['Anti-Smith (Sm)', '20 – 30%', '> 99%', 'El más específico de LES; confirma diagnóstico indudable'],
        ['Anti-Ro (SSA)', '30 – 40%', 'Inespecífico', 'Lupus cutáneo subagudo, fotosensibilidad y Bloqueo AV congénito neonatal'],
        ['Anti-La (SSB)', '15 – 20%', 'Inespecífico', 'Suele coexistir con Anti-Ro; menor riesgo de nefritis'],
        ['Anti-Histona', '50 – 70%', 'Baja en LES', 'Positivo en > 95% del Lupus Inducido por Drogas (fármacos)'],
        ['Anti-RNP (U1-RNP)', '30%', 'Inespecífico', 'Típico de Enfermedad Mixta del Tejido Conectivo (EMTC) y fenómeno de Raynaud']
      ]
    },
    severityTable: {
      title: 'Monitoreo Biológico de Brote de Actividad en Lupus Eritematoso Sistémico',
      headers: ['Marcador de Laboratorio', 'Comportamiento en Remisión', 'Comportamiento en Brote Activo', 'Interpretación Clínica'],
      rows: [
        ['Títulos de Anti-dsDNA', 'Negativos o títulos basales bajos', 'Aumento marcado de títulos (> 2 a 3 veces)', 'Activación autoinmune sistémica con riesgo renal'],
        ['Niveles de Complemento C3', 'Normales (90 – 180 mg/dL)', 'Disminuidos (< 80-90 mg/dL)', 'Consumo activo por formación de inmunocomplejos'],
        ['Niveles de Complemento C4', 'Normales (10 – 40 mg/dL)', 'Disminuidos (< 10 mg/dL)', 'Consumo por activación de la vía clásica'],
        ['Sedimento Urinario', 'Limpio, sin proteinuria', 'Cilindros hemáticos, hematuria dismórfica', 'Sospecha inminente de Nefritis Lúpica Proliferativa'],
        ['Hemograma', 'Parámetros estables', 'Linfopenia (<1.000), leucopenia, trombocitopenia', 'Compromiso hematológico autoinmune activo']
      ]
    },
    treatmentTable: {
      title: 'Estrategia Terapéutica General en LES según Severidad de Órgano',
      headers: ['Nivel de Severidad', 'Manifestaciones Clínicas', 'Esquema Farmacológico Recomendado', 'Objetivo Clínico'],
      rows: [
        ['Basal (Todos los pacientes)', 'Cualquier estadio o remisión', 'Hidroxicloroquina ≤ 5 mg/kg/día + Fotoprotección FPS 50+', 'Prevención de brotes y disminución de mortalidad'],
        ['Leve', 'Artralgias, eritema malar, astenia', 'HCQ + Prednisona dosis baja (≤ 7.5 mg/d) o AINEs ciclos cortos', 'Control sintomático y ahorro de corticoides'],
        ['Moderado', 'Artritis franca, pleuropericarditis, plaquetas 50k-100k', 'HCQ + Prednisona 0.5 mg/kg/d + Azatioprina o Metotrexato', 'Inducción de remisión sin toxicidad glucocorticoidea'],
        ['Severo / Órgano Vital', 'Nefritis lúpica, convulsiones, hemorragia alveolar', 'Pulsos Metilprednisolona EV + Micofenolato o Ciclofosfamida', 'Rescate de órgano vital y supervivencia inmediata']
      ]
    },
    vignette: 'Mujer de 26 años consulta por fatiga progresiva, artralgias difusas en manos y rodillas de 3 meses y erupción en la cara tras exponerse al sol en la playa. Al examen físico destaca eritema maculopapular eritematoso sobre el dorso nasal y ambas mejillas, que respeta nítidamente los surcos nasogenianos. En el paladar duro se observan dos úlceras superficiales no dolorosas. Laboratorio: hemoglobina 10.4 g/dL, leucocitos 3.200/mm³ con 850 linfocitos/mm³, plaquetas 110.000/mm³. Los ANA resultan positivos en título 1:640 con patrón homogéneo difuso.',
    explicacion: 'La paciente presenta un Lupus Eritematoso Sistémico florido: cumple el criterio de entrada EULAR/ACR 2019 (ANA ≥ 1:80 con título 1:640) y suma múltiples dominios ponderados: eritema malar agudo (6 pts), úlceras orales indoloras (2 pts), leucopenia/linfopenia (3 pts), trombocitopenia (4 pts) y artralgias/artritis (6 pts), totalizando más de 20 puntos (corte ≥ 10). Debe confirmarse e incorporarse de inmediato al programa GES para inicio formal de Hidroxicloroquina a dosis de 5 mg/kg/día, corticoides orales a dosis intermedias y estudio renal preventivo.',
    keyPoints: [
      'El criterio de entrada OBLIGATORIO según EULAR/ACR 2019 es ANA (+) ≥ 1:80 en células HEp-2.',
      'Si los ANA son negativos por técnica estándar, el paciente NO puede clasificarse como LES.',
      'El eritema malar lúpico se caracteriza patognomónicamente por RESPETAR los surcos nasogenianos.',
      'El Anti-Smith (Sm) es el anticuerpo MÁS ESPECÍFICO de LES (> 99%).',
      'El Anti-dsDNA se correlaciona directamente con la actividad inflamatoria y el riesgo de nefritis lúpica.',
      'El descenso conjunto de C3 y C4 (hipocomplementemia) traduce consumo por brote lúpico activo.',
      'La Artropatía de Jaccoud en el lupus es una deformidad articular reductible pasivamente que NO produce erosiones.',
      'La Hidroxicloroquina está indicada en el 100% de los pacientes con LES de forma indefinida para reducir mortalidad.'
    ],
    questions: [
      {
        stem: 'Mujer de 24 años consulta por eritema facial en mariposa que respeta surcos nasogenianos, fotosensibilidad, úlceras orales indoloras y poliartralgias en manos de 6 semanas. Para confirmar la sospecha clínica de Lupus Eritematoso Sistémico según los criterios EULAR/ACR 2019, ¿cuál es el examen inmunológico que constituye el criterio de entrada obligatorio e indispensable?',
        options: [
          { id: 'A', text: 'Factor Reumatoide a títulos altos mayor a 3 veces el valor normal' },
          { id: 'B', text: 'Anticuerpos Antinucleares (ANA) positivos en título mayor o igual a 1:80' },
          { id: 'C', text: 'Niveles séricos de complemento C3 menores a 40 mg/dL' },
          { id: 'D', text: 'Biopsia de piel sana con depósito de inmunoglobulinas en banda lúpica' },
          { id: 'E', text: 'Anticuerpos Anti-Ro (SSA) positivos en dilución simple' }
        ],
        correcta: 'B',
        explicacion: 'Según los criterios clasificatorios EULAR/ACR 2019 para Lupus Eritematoso Sistémico, el criterio de entrada obligatorio e ineludible es la presencia de Anticuerpos Antinucleares (ANA) positivos por inmunofluorescencia indirecta en células HEp-2 en título ≥ 1:80. Si este examen es negativo, el paciente no clasifica como LES independientemente de las otras manifestaciones clínicas.',
        recTag: 'EUNACOM 2018 · Q#28'
      },
      {
        stem: '¿Cuál de los siguientes autoanticuerpos presenta la mayor especificidad diagnóstica (superior al 99%) para el Lupus Eritematoso Sistémico?',
        options: [
          { id: 'A', text: 'Anticuerpos Antinucleares (ANA)' },
          { id: 'B', text: 'Anticuerpos Anti-Smith (Anti-Sm)' },
          { id: 'C', text: 'Anticuerpos Anti-Ro (SSA)' },
          { id: 'D', text: 'Anticuerpos Anti-Histona' },
          { id: 'E', text: 'Anticuerpos Anticentrómero' }
        ],
        correcta: 'B',
        explicacion: 'El anticuerpo Anti-Smith (Anti-Sm), dirigido contra una ribonucleoproteína del núcleo, es el marcador serológico más específico de Lupus Eritematoso Sistémico (> 99%), considerándose patognomónico. Aunque solo está presente en el 20-30% de los pacientes lúpicos (baja sensibilidad), su hallazgo confirma el diagnóstico.',
        recTag: 'EUNACOM 2020 · Q#04'
      },
      {
        stem: 'Una paciente de 30 años con diagnóstico confirmado de Lupus Eritematoso Sistémico en tratamiento con Hidroxicloroquina 200 mg al día consulta a control médico asintomática. En sus exámenes de control destaca elevación significativa de los títulos de anticuerpos Anti-dsDNA y una caída marcada en los niveles séricos de C3 (48 mg/dL, normal > 90) y C4 (6 mg/dL, normal > 15). ¿Qué significado clínico tienen estos hallazgos biológicos?',
        options: [
          { id: 'A', text: 'Indican remisión completa y permiten suspender la hidroxicloroquina' },
          { id: 'B', text: 'Son marcadores inequívocos de toxicidad farmacológica por antipalúdicos' },
          { id: 'C', text: 'Traducen un brote de actividad autoinmune con consumo de complemento y riesgo de nefritis' },
          { id: 'D', text: 'Corresponden a una infección bacteriana piógena sobreagregada' },
          { id: 'E', text: 'Indican transformación maligna hacia linfoma de células B' }
        ],
        correcta: 'C',
        explicacion: 'En el Lupus Eritematoso Sistémico, el aumento en los títulos de anticuerpos Anti-dsDNA asociado a hipocomplementemia (C3 y C4 disminuidos por consumo en la activación de la vía clásica por inmunocomplejos) es el marcador por excelencia de brote de actividad biológica lúpica, con un riesgo muy elevado de compromiso renal proliferativo agudo.',
        recTag: 'EUNACOM 2022 · Q#41'
      },
      {
        stem: 'Mujer de 28 años con diagnóstico reciente de Lupus Eritematoso Sistémico leve manifestado por eritema malar y artralgias sin daño de órgano vital. ¿Cuál es el tratamiento farmacológico basal que debe indicarse de forma obligatoria e indefinida para reducir brotes y disminuir la mortalidad global?',
        options: [
          { id: 'A', text: 'Prednisona 60 mg al día en monoterapia permanente' },
          { id: 'B', text: 'Hidroxicloroquina a dosis menor o igual a 5 mg/kg peso real al día' },
          { id: 'C', text: 'Ciclofosfamida endovenosa mensual por 6 ciclos' },
          { id: 'D', text: 'Metotrexato 25 mg a la semana subcutáneo sin corticoides' },
          { id: 'E', text: 'Ácido acetilsalicílico 100 mg al día exclusivo' }
        ],
        correcta: 'B',
        explicacion: 'En todo paciente con LES, independientemente de la severidad o si está en remisión clínica, la Hidroxicloroquina (dosis ≤ 5 mg/kg peso real/día) es la piedra angular del tratamiento que debe mantenerse de por vida. Ha demostrado reducir significativamente la frecuencia de brotes, prevenir el daño orgánico renal, disminuir eventos trombóticos y reducir la mortalidad global.',
        recTag: 'EUNACOM 2024 · Q#17'
      }
    ]
  },

  {
    id: 'reuma-09', classId: 'reuma-09', tier: 3,
    blockNum: 2, blockName: 'Artritis Reumatoide y Enfermedades del Tejido Conectivo',
    topicLabel: '9.9',
    title: 'Nefritis Lúpica y Compromiso Orgánico Mayor en LES: Clasificación, Biopsia y Terapia Inmunosupresora',
    perfilCode: '1.05.1.001', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES): Nefritis Lúpica · Biopsia renal, inducción y mantenimiento cubiertos',
    reconstrucciones: 'EUNACOM 2017 Q#18 · EUNACOM 2019 Q#49 · EUNACOM 2021 Q#05 · EUNACOM 2023 Q#12',
    frecuencia: 'Muy Alta · Emergencia nefrológica y reumatológica de alto riesgo vital',
    svg: null, algoTitle: 'Algoritmo de Nefritis Lúpica: Biopsia Renal Clasificatoria e Inducción con Pulsos',
    diagram: flow('Algoritmo de Nefritis Lúpica', [
      { k: 'box', t: 'Sospecha de Nefritis Lúpica (Proteinuria > 0.5 g/24h o Sedimento Activo)', s: 'Hematuria glomerular (cilindros hemáticos) · Deterioro de VFG · Anti-dsDNA alto con C3/C4 bajos', type: 'acc' },
      { k: 'box', t: 'Paso Mandatorio de Diagnóstico y Pronóstico: Biopsia Renal', s: 'Clasificación histológica ISN/RPS (Clases I a VI) e índice de actividad/cronicidad', type: 'warn' },
      { k: 'split', q: 'Clasificación Histológica ISN/RPS en Biopsia', s: 'Decisión terapéutica según tipo proliferativo vs no proliferativo',
        ll: 'Clase III (Focal) y Clase IV (Proliferativa Difusa)',
        left: { t: 'Nefritis Proliferativa Activa (Mayor Gravedad)', s: 'Pulsos Metilprednisolona EV (0.5-1g x 3d) + Micofenolato Mofetilo (2-3g/d) o Ciclofosfamida', type: 'crit' },
        rl: 'Clase V (Membranosa)',
        right: { t: 'Síndrome Nefrótico Puro', s: 'Corticoides orales + Micofenolato o Inhibidores de Calcineurina (Tacrolimus) + IECA/ARA-II', type: 'dec' }
      },
      { k: 'box', t: 'Fase de Mantenimiento Prolongada (Mínimo 3 a 5 Años)', s: 'Micofenolato Mofetilo (1-2 g/día) o Azatioprina (2 mg/kg/día) + Dosis bajas de Prednisona + HCQ', type: 'acc' }
    ]),
    contexto: 'La nefritis lúpica es la principal causa de morbimortalidad en pacientes con LES. Hasta el 50% de los pacientes lúpicos desarrollan compromiso renal durante el curso de su enfermedad. El EUNACOM evalúa con alta frecuencia la indicación de biopsia renal frente a proteinuria o sedimento urinario activo, el reconocimiento de la Clase IV (proliferativa difusa) como la más agresiva y el esquema de rescate con pulsos de metilprednisolona y micofenolato mofetilo.',
    contentSections: [
      {
        subhead: '1. Fisiopatología Renal y Mecanismos de Daño Glomerular',
        paragraphs: [
          'La nefritis lúpica se origina por el <strong>depósito de inmunocomplejos circulantes ADN-anti-ADN</strong> en las distintas estructuras del glomérulo, o por la unión in situ de autoanticuerpos a antígenos plantados en la membrana basal glomerular.',
          'La localización del depósito determina el patrón histopatológico y clínico:',
          '• <strong>Depósitos Subendoteliales:</strong> Producen inflamación vascular directa en contacto con la sangre, activación masiva del complemento, reclutamiento masivo de neutrófilos y proliferación celular endocapilar severa (patrón <strong>proliferativo: Clases III y IV</strong>), cursando con síndrome nefrítico, hematuria con cilindros hemáticos, falla renal rápida e hipocomplementemia intensa.',
          '• <strong>Depósitos Subepiteliales:</strong> Localizados entre la membrana basal y los podocitos (fuera de la circulación directa). Provocan daño podocitario y alteración de la barrera de filtración con proteinuria masiva (patrón <strong>membranoso: Clase V</strong>), cursando con síndrome nefrótico puro sin proliferación celular acusada.'
        ]
      },
      {
        subhead: '2. Clasificación Histológica Internacional ISN/RPS (2004/2018)',
        paragraphs: [
          'La <strong>biopsia renal percutánea es obligatoria</strong> ante: proteinuria persistente ≥ 0.5 g/24 horas (o relación proteinuria/creatininuria en orina aislada ≥ 0.5 mg/mg), sedimento urinario activo (≥ 5 hematíes por campo de origen glomerular, acantocitos o cilindros hemáticos) o deterioro inexplicable de la función renal.',
          '<strong>Las 6 Clases Histológicas de la ISN/RPS:</strong>',
          '• <strong>Clase I (Mesangial mínima):</strong> Glomérulos normales en microscopía óptica con depósitos mesangiales en inmunofluorescencia. Rara, asintomática, excelente pronóstico.',
          '• <strong>Clase II (Proliferativa mesangial):</strong> Hipercelularidad mesangial pura. Microhematuria y proteinuria leve (< 1 g/24h). No requiere inmunosupresión agresiva.',
          '• <strong>Clase III (Proliferativa focal):</strong> Proliferación endo o extracapilar que afecta a <strong>< 50% de los glomérulos</strong>. Síndrome nefrítico/nefrótico.',
          '• <strong>Clase IV (Proliferativa difusa):</strong> La forma <strong>MÁS FRECUENTE (40-50%), MÁS GRAVE Y DE PEOR PRONÓSTICO</strong>. Compromete a <strong>≥ 50% de los glomérulos</strong>. Se observan asas capilares engrosadas en <em>asa de alambre (wire-loop)</em>, necrosis fibrinoide, semilunas celulares y trombos hialinos. Cursa con síndrome nefrítico-nefrótico severo, hipertensión arterial grave, falla renal aguda, títulos elevados de Anti-dsDNA y marcada caída de C3 y C4. Sin tratamiento progresa rápidamente a uremia terminal.',
          '• <strong>Clase V (Membranosa):</strong> Engrosamiento difuso de la pared capilar con depósitos subepiteliales continuos. Cursa con <strong>síndrome nefrótico florido puro</strong> (edema masivo, hipoalbuminemia, dislipidemia) y alto riesgo de trombosis venosa profunda o de la vena renal. Complemento frecuentemente normal o levemente bajo.',
          '• <strong>Clase VI (Esclerosante avanzada):</strong> Esclerosis de ≥ 90% de los glomérulos. Insuficiencia renal crónica terminal que requiere diálisis; no responde a inmunosupresores.'
        ]
      },
      {
        subhead: '3. Tratamiento de Inducción de la Remisión (Clases Proliferativas III y IV)',
        paragraphs: [
          'El objetivo en las formas proliferativas activas (Clases III y IV) es frenar de inmediato la inflamación necrotizante para evitar la fibrosis irreversible:',
          '<strong>Esquema de Inducción Inmunosupresora:</strong>',
          '1. <strong>Glucocorticoides a Dosis Altas:</strong>',
          '• Inicio con <strong>Pulsos de Metilprednisolona endovenosa: 500 a 1.000 mg/día por 3 días consecutivos</strong>.',
          '• Seguido de <strong>Prednisona oral: 0.5 a 1 mg/kg/día</strong> (típicamente 40-60 mg/día) con pauta de descenso progresivo rápido semanal hasta alcanzar dosis de mantención ≤ 5-7.5 mg/día a los 3-6 meses.',
          '2. <strong>Inmunosupresor Mayor Concomitante (Elegir una de dos opciones):</strong>',
          '• <strong>Micofenolato Mofetilo (MMF):</strong> Dosis: <strong>2 a 3 g/día vía oral</strong> divididos en 2 tomas. Es el fármaco de <strong>primera elección</strong> en la actualidad por su excelente tasa de remisión, menor toxicidad gonadal y mayor eficacia en pacientes no caucásicos e hispanos.',
          '• <strong>Ciclofosfamida Endovenosa:</strong> Esquema Euro-Lupus (dosis bajas: 500 mg EV cada 2 semanas por 6 dosis = 3 meses) o esquema clásico NIH (dosis altas mensuales: 0.5 a 1 g/m² EV mensual por 6 meses). De elección ante compromiso renal rápidamente progresivo con semilunas masivas o compromiso neurológico concomitante. <em>Toxicidad:</em> cistitis hemorrágica (prevenir con hidratación y Mesna), infertilidad/falla ovárica precoz y neoplasias secundarias.',
          '3. <strong>Terapias Coadyuvantes Obligatorias:</strong> Hidroxicloroquina en todos los pacientes, IECA o ARA-II (enalapril/losartán) para control estricto de PA (< 120-130/80 mmHg) y reducción de proteinuria, estatinas para dislipidemia y profilaxis contra <em>Pneumocystis jirovecii</em> con Cotrimoxazol durante la inmunosupresión profunda.'
        ]
      },
      {
        subhead: '4. Terapia de Mantenimiento de la Remisión y Seguimiento a Largo Plazo',
        paragraphs: [
          'Una vez alcanzada la remisión parcial o completa (habitualmente a los 6 meses):',
          '• Fármaco de primera elección: <strong>Micofenolato Mofetilo (1 a 2 g/día vía oral)</strong>.',
          '• Alternativa: <strong>Azatioprina (2 mg/kg/día oral)</strong>, de elección obligada si la paciente planea embarazo (el micofenolato es teratogénico y debe suspenderse al menos 6 semanas antes de la concepción).',
          '• Se asocian dosis bajas de Prednisona (2.5 a 5 mg/día) y se mantiene Hidroxicloroquina.',
          '• <strong>Duración de la mantención:</strong> Mínimo <strong>3 a 5 años de tratamiento continuo</strong> antes de considerar una reducción muy lenta y tentativa de la inmunosupresión.'
        ]
      }
    ],
    table: {
      title: 'Clasificación Histológica ISN/RPS de Nefritis Lúpica y Manejo Clínico',
      headers: ['Clase Histológica', 'Patología Renal Dominante', 'Presentación Clínica Típica', 'Esquema Terapéutico de Elección'],
      rows: [
        ['Clase I (Mesangial mínima)', 'Glomérulos normales en MO; depósitos mesangiales en IF', 'Sedimento normal o microhematuria leve', 'Manejo basal con Hidroxicloroquina'],
        ['Clase II (Proliferativa mesangial)', 'Hipercelularidad mesangial pura', 'Microhematuria y proteinuria < 1 g/24h', 'Corticoides orales solo si síntomas extra-renales'],
        ['Clase III (Proliferativa focal)', 'Proliferación endo/extracapilar en < 50% de glomérulos', 'Síndrome nefrítico, proteinuria, hipertensión', 'Pulsos Metilprednisolona + Micofenolato o Ciclofosfamida'],
        ['Clase IV (Proliferativa difusa)', 'Proliferación en ≥ 50% glomérulos; asas en alambre', 'Síndrome nefrítico-nefrótico severo, falla renal aguda', 'Pulsos Metilprednisolona + MMF (2-3g/d) o Ciclofosfamida'],
        ['Clase V (Membranosa)', 'Depósitos subepiteliales; engrosamiento de pared', 'Síndrome nefrótico florido puro, riesgo de TVP', 'Prednisona + Micofenolato o Tacrolimus + IECA/ARA-II'],
        ['Clase VI (Esclerosante avanzada)', 'Esclerosis global en ≥ 90% de los glomérulos', 'Insuficiencia renal crónica avanzada, uremia', 'Preparación para Terapia de Reemplazo Renal / Diálisis']
      ]
    },
    severityTable: {
      title: 'Indicaciones Formales de Biopsia Renal en Lupus Eritematoso Sistémico',
      headers: ['Parámetro Clínico / Urinario', 'Punto de Corte / Criterio Formal', 'Urgencia del Procedimiento', 'Objetivo de la Biopsia'],
      rows: [
        ['Proteinuria Aislada', 'Proteinuria ≥ 0.5 g/24h (o IPC ≥ 0.5 mg/mg)', 'Programada prioritaria (< 1-2 semanas)', 'Diferenciar Clase V membranosa de proliferativas'],
        ['Sedimento Urinario Activo', 'Hematuria glomerular (≥ 5 hematíes/campo o cilindros hemáticos)', 'Urgente (< 48-72 horas)', 'Confirmar proliferación activa endocapilar y necrosis'],
        ['Deterioro de Función Renal', 'Alza aguda de creatinina no explicada por deshidratación', 'Urgente inmediata (< 24-48 horas)', 'Detectar semilunas extracapilares y rescatar parénquima'],
        ['Refractariedad Terapéutica', 'Persistencia de proteinuria > 1-2 g tras 6-12 meses de terapia', 'Electiva', 'Evaluar índice de actividad vs índice de cronicidad']
      ]
    },
    treatmentTable: {
      title: 'Esquema de Inducción y Mantenimiento en Nefritis Lúpica Proliferativa (Clase III/IV)',
      headers: ['Fase del Protocolo', 'Fármacos y Dosificación', 'Duración Estimada', 'Monitoreo de Respuesta'],
      rows: [
        ['Inducción Aguda (Semana 1)', 'Pulsos Metilprednisolona EV 500-1000 mg/d x 3 días + MMF 2-3 g/d', '1 semana', 'Control de PA, glicemia, balance hídrico y creatinina'],
        ['Inducción Continuada (Meses 1-6)', 'Prednisona oral 0.5-1 mg/kg/d (descenso gradual) + MMF 2-3 g/d', '6 meses', 'Proteinuria de 24h, sedimento urinario, C3/C4 y Anti-dsDNA'],
        ['Mantenimiento (Años 1-5)', 'Micofenolato 1-2 g/d (o Azatioprina 2mg/kg/d) + Prednisona ≤ 5mg/d', '3 a 5 años mínimo', 'Creatinina sérica y proteinuria cada 2-3 meses'],
        ['Terapia Adyuvante Universal', 'Hidroxicloroquina ≤ 5 mg/kg/d + Enalapril/Losartán + Cotrimoxazol', 'Indefinida', 'Fondo de ojo anual tras 5 años; PA < 120/80']
      ]
    },
    vignette: 'Mujer de 24 años con antecedente de LES diagnosticado hace 1 año en tratamiento irregular con hidroxicloroquina. Consulta por edema progresivo de extremidades inferiores hasta rodillas, orinas espumosas y cefalea. Al examen físico destaca PA 160/100 mmHg, edema pretibial +++ con fóvea, y eritema malar tenue. Los exámenes de laboratorio revelan: creatinina plasmática 1.9 mg/dL (basal de 0.8 mg/dL hace 4 meses), nitrógeno ureico 38 mg/dL, albúmina sérica 2.4 g/dL. El examen de orina muestra proteinuria de 3.8 g/24 horas y sedimento con 30-40 glóbulos rojos dismórficos por campo y cilindros hemáticos. El complemento C3 está en 42 mg/dL y el Anti-dsDNA fuertemente positivo.',
    explicacion: 'La paciente presenta una Nefritis Lúpica proliferativa activa grave (síndrome nefrítico-nefrótico con deterioro agudo de función renal e hipertensión severa). La conducta diagnóstica de elección e inmediata es la realización de una biopsia renal percutánea para clasificar el daño (altamente sospechosa de Clase IV proliferativa difusa). El tratamiento de inducción urgente consiste en hospitalización, administración de pulsos de Metilprednisolona endovenosa (500 a 1.000 mg/día por 3 días) asociados a Micofenolato Mofetilo a dosis plenas (2-3 g/día) o Ciclofosfamida EV, más control riguroso de la presión arterial y soporte nefrológico.',
    keyPoints: [
      'La nefritis lúpica afecta hasta al 50% de los pacientes con LES y es su principal causa de morbimortalidad.',
      'La biopsia renal es el patrón de oro y está indicada formalmente ante proteinuria ≥ 0.5 g/24h o sedimento activo.',
      'La Clase IV (Proliferativa Difusa) es la más frecuente, más agresiva y de peor pronóstico si no se trata a tiempo.',
      'La Clase IV cursa típicamente con sedimento activo (cilindros hemáticos), hipocomplementemia severa y anti-dsDNA elevado.',
      'La Clase V (Membranosa) cursa con síndrome nefrótico puro con alto riesgo trombótico.',
      'El tratamiento de inducción de nefritis proliferativa requiere pulsos de Metilprednisolona EV + Micofenolato Mofetilo (o Ciclofosfamida).',
      'El Micofenolato Mofetilo es el inmunosupresor de primera línea para inducción y mantenimiento.',
      'La terapia de mantenimiento debe prolongarse por un mínimo estricto de 3 a 5 años.'
    ],
    questions: [
      {
        stem: 'Mujer de 22 años con diagnóstico de LES consulta por astenia y edema facial matinal. En sus exámenes destaca creatinina de 1.4 mg/dL, proteinuria en orina de 24 horas de 2.2 gramos y sedimento urinario con 25 glóbulos rojos por campo con acantocitos y abundantes cilindros hemáticos. El C3 es de 45 mg/dL. ¿Cuál es el procedimiento mandatorio de elección para definir la conducta terapéutica e inmunosupresora?',
        options: [
          { id: 'A', text: 'Tomografía computarizada contrastada de abdomen y pelvis' },
          { id: 'B', text: 'Biopsia renal percutánea con microscopía óptica e inmunofluorescencia' },
          { id: 'C', text: 'Cistoscopía diagnóstica con toma de muestra de mucosa vesical' },
          { id: 'D', text: 'Iniciar antibióticos empíricos por sospecha de pielonefritis' },
          { id: 'E', text: 'Urocultivo cuantitativo y diferir nuevas decisiones por 3 meses' }
        ],
        correcta: 'B',
        explicacion: 'En un paciente con LES que debuta con proteinuria significativa (≥ 0.5 g/24h), sedimento urinario activo (hematuria glomerular con cilindros hemáticos) y deterioro de función renal, la realización de una biopsia renal percutánea es el examen de elección mandatario. Permite identificar la clase histopatológica de nefritis lúpica (según clasificación ISN/RPS) y los índices de actividad y cronicidad, de los cuales depende la agresividad del esquema inmunosupresor.',
        recTag: 'EUNACOM 2017 · Q#18'
      },
      {
        stem: 'La biopsia renal de una paciente con LES informa una Nefritis Lúpica Clase IV (Proliferativa Difusa) con semilunas celulares en 30% de los glomérulos y necrosis fibrinoide activa. ¿Cuál es el esquema farmacológico de inducción de primera línea indicado para rescatar la función renal?',
        options: [
          { id: 'A', text: 'Pulsos de Metilprednisolona endovenosa seguidos de Prednisona oral más Micofenolato Mofetilo' },
          { id: 'B', text: 'Monoterapia con Hidroxicloroquina 200 mg al día sin corticoides' },
          { id: 'C', text: 'Prednisona oral 10 mg al día más calcio y vitamina D' },
          { id: 'D', text: 'Metotrexato 15 mg por semana más ácido fólico' },
          { id: 'E', text: 'Infliximab endovenoso más AINEs a dosis plenas' }
        ],
        correcta: 'A',
        explicacion: 'El tratamiento de inducción de primera línea para la Nefritis Lúpica Clase IV (proliferativa difusa, la forma más destructiva) consiste en la combinación sinérgica de corticoides a dosis altas (iniciando con pulsos de Metilprednisolona endovenosa de 500-1000 mg/día por 3 días consecutivos seguidos de prednisona oral) asociado a un inmunosupresor mayor potente como Micofenolato Mofetilo (2-3 g/día) o Ciclofosfamida EV.',
        recTag: 'EUNACOM 2019 · Q#49'
      },
      {
        stem: '¿Cuál de las siguientes clases histológicas de nefritis lúpica según la clasificación ISN/RPS cursa típicamente con síndrome nefrótico florido PURO, con engrosamiento difuso de la membrana basal sin proliferación endocapilar marcada y con menor consumo de complemento?',
        options: [
          { id: 'A', text: 'Clase I (Mesangial mínima)' },
          { id: 'B', text: 'Clase II (Proliferativa mesangial)' },
          { id: 'C', text: 'Clase IV (Proliferativa difusa)' },
          { id: 'D', text: 'Clase V (Membranosa)' },
          { id: 'E', text: 'Clase VI (Esclerosante avanzada)' }
        ],
        correcta: 'D',
        explicacion: 'La Nefritis Lúpica Clase V (Membranosa) se caracteriza por depósitos inmunes predominantemente subepiteliales que causan engrosamiento uniforme de la pared capilar. Clínicamente se manifiesta como un síndrome nefrótico puro con proteinuria en rango masivo, hipoalbuminemia y dislipidemia, habitualmente sin hematuria proliferativa y con complemento normal o mínimamente disminuido.',
        recTag: 'EUNACOM 2021 · Q#05'
      },
      {
        stem: 'Una paciente de 27 años con nefritis lúpica Clase IV tratada exitosamente con micofenolato mofetilo y corticoides alcanza la remisión completa tras 6 meses de tratamiento. Desea conocer el pronóstico y la duración de la terapia de mantenimiento. ¿Cuál es la indicación correcta?',
        options: [
          { id: 'A', text: 'Suspender toda la medicación inmunosupresora de inmediato por haber alcanzado la remisión' },
          { id: 'B', text: 'Mantener la terapia inmunosupresora de mantención (micofenolato o azatioprina) por un mínimo de 3 a 5 años' },
          { id: 'C', text: 'Reemplazar el micofenolato por ciclosporina durante 3 meses y luego dar de alta definitiva' },
          { id: 'D', text: 'Indicar que el daño renal se reactivará invariablemente requiriendo diálisis en menos de 1 año' },
          { id: 'E', text: 'Suspender la hidroxicloroquina y mantener únicamente dosis altas de prednisona' }
        ],
        correcta: 'B',
        explicacion: 'En la nefritis lúpica proliferativa, una vez alcanzada la remisión con la terapia de inducción, es indispensable continuar con una fase de mantenimiento prolongada (con Micofenolato Mofetilo o Azatioprina, más dosis bajas de corticoides e Hidroxicloroquina) durante un período mínimo estricto de 3 a 5 años para prevenir recaídas renales y progresión a enfermedad renal crónica.',
        recTag: 'EUNACOM 2023 · Q#12'
      }
    ]
  },

  {
    id: 'reuma-10', classId: 'reuma-10', tier: 2,
    blockNum: 2, blockName: 'Artritis Reumatoide y Enfermedades del Tejido Conectivo',
    topicLabel: '9.10',
    title: 'Lupus Cutáneo (Subagudo y Crónico Discoide) y Lupus Inducido por Drogas',
    perfilCode: '1.05.1.001', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía GES en Lupus Eritematoso Sistémico · Formas cutáneas exclusivas requieren derivación dermatológica',
    reconstrucciones: 'EUNACOM 2018 Q#39 · EUNACOM 2021 Q#14 · EUNACOM 2023 Q#40',
    frecuencia: 'Media-Alta · Diferenciación diagnóstica y farmacológica clásica en EUNACOM',
    svg: null, algoTitle: 'Diagnóstico Diferencial: Lupus Cutáneo Subagudo vs Discoide vs Inducido por Drogas',
    diagram: flow('Algoritmo de Lupus Cutáneo y Fármacos', [
      { k: 'box', t: 'Lesiones Cutáneas Lúpicas o Síntomas Lúpicos en Adulto', s: 'Identificación morfológica de las placas o antecedente de fármacos desencadenantes', type: 'acc' },
      { k: 'split', q: 'Patrón Clínico y Antecedente Farmacológico', s: 'Diferenciación biológica de las tres entidades',
        ll: 'Placas Cicatriciales / Atrofia / Alopecia',
        left: { t: 'Lupus Discoide Crónico', s: 'Placas con hiperqueratosis, tapones córneos y atrofia central · Cicatrización permanente · ANA (-) en 70%', type: 'warn' },
        rl: 'Lesiones Anulares Fotosensibles / No Cicatriz',
        right: { t: 'Lupus Cutáneo Subagudo (LCES)', s: 'Lesiones policíclicas descamativas en escote/espalda · Anti-Ro (+) 80% · Riesgo Bloqueo AV congénito', type: 'dec' }
      },
      { k: 'box', t: 'Lupus Inducido por Drogas (Hidralazina, Procainamida, Isoniazida)', s: 'Artralgias + Fiebre + Serositis · RESPETA Riñón y SNC · Anti-Histona (+) en > 95% · Cede al suspender fármaco', type: 'crit' }
    ]),
    contexto: 'Las formas cutáneas de lupus y el lupus farmacológico constituyen motivos recurrentes de preguntas en EUNACOM. Se debe distinguir el lupus discoide (que deja cicatriz atrófica permanente y rara vez se asocia a compromiso visceral) del lupus cutáneo subagudo (asociado a Anti-Ro y fotosensibilidad sin cicatriz). Asimismo, el lupus inducido por drogas destaca por sus anticuerpos anti-histona y el respeto absoluto del riñón y sistema nervioso central.',
    contentSections: [
      {
        subhead: '1. Lupus Eritematoso Cutáneo Crónico Discoide (LECD)',
        paragraphs: [
          'Es la variante cutánea crónica más común. Se presenta predominantemente en áreas fotoexpuestas de la cabeza y cuello (mejillas, dorso nasal, orejas y cuero cabelludo).',
          '<strong>Morfología de la lesión discoide clásica:</strong> Placa eritematosa redondeada bien delimitada con tres zonas concéntricas: 1) Borde eritematoso activo ligeramente sobreelevado con telangiectasias; 2) Escama hiperqueratósica adherente que al desprenderse muestra pequeñas prolongaciones espinosas (<em>signo de la tachuela o taponamiento folicular</em>); y 3) Centro atrófico hipopigmentado o despigmentado con pérdida de anejos.',
          '<strong>Riesgo de Alopecia:</strong> En el cuero cabelludo provoca <strong>alopecia cicatricial irreversible</strong> con destrucción definitiva de los folículos pilosos.',
          '<em>Evolución Sistémica:</em> Solo un 5% a 10% de los pacientes con lupus discoide aislado evolucionan a LES sistémico. Los ANA suelen ser negativos o a títulos bajos (positivos en solo 30-40%).',
          'Tratamiento: Fotoprotección estricta FPS 50+, corticoides tópicos de alta potencia (clobetasol) o intralesionales (triamcinolona), e <strong>Hidroxicloroquina oral (200-400 mg/día)</strong> en casos extensos o refractarios.'
        ]
      },
      {
        subhead: '2. Lupus Eritematoso Cutáneo Subagudo (LCES)',
        paragraphs: [
          'Se manifiesta como una erupción cutánea extraordinariamente fotosensible, distribuida en zonas expuestas al sol: escote (área en V), parte superior de la espalda, hombros y superficies extensoras de brazos, <strong>respetando típicamente la cara</strong>.',
          'Existen dos variantes morfológicas: <strong>anular policíclica</strong> (placas eritematosas circulares con aclaramiento central) y <strong>papuloescamosa / psoriasiforme</strong>.',
          '<em>Diferencia Crítica con el Discoide:</em> Las lesiones del lupus subagudo curan <strong>SIN dejar cicatriz atrófica ni alopecia definitiva</strong>, aunque pueden dejar despigmentación vitiliginosa transitoria.',
          '<strong>Serología e Implicancia Neonatal:</strong> Presenta una asociación abrumadora con anticuerpos <strong>Anti-Ro / SSA (positivos en > 70-80%)</strong> y Anti-La / SSB (30-50%).',
          '<em>Lupus Neonatal:</em> Los anticuerpos Anti-Ro maternos de clase IgG atraviesan la placenta y pueden dañar el tejido de conducción cardíaco fetal entre las semanas 16 y 24 de gestación, produciendo <strong>Bloqueo Auriculoventricular Congénito Completo</strong> irreversible (que requiere marcapasos definitivo al nacer), además de lesiones cutáneas lúpicas neonatales transitorias que desaparecen a los 6 meses al degradarse los anticuerpos maternos.'
        ]
      },
      {
        subhead: '3. Lupus Inducido por Drogas (Farmacológico)',
        paragraphs: [
          'Síndrome autoinmune reversible gatillado por la exposición continua a determinados fármacos.',
          '<strong>Fármacos Causales de Alto Riesgo:</strong>',
          '• <strong>Procainamida</strong> (antiarrítmico clase Ia: produce lupus en 20% tras 1 año).',
          '• <strong>Hidralazina</strong> (vasodilatador arterial antihipertensivo: produce lupus en 5-10% a dosis > 200 mg/d).',
          '• Fármacos de riesgo moderado: <strong>Isoniazida, Minociclina, Quinidina, Metildopa, Clorpromazina, Carbamazepina y Terapias Anti-TNF</strong>.',
          '<strong>Manifestaciones Clínicas y Diferencia Crucial con LES Idiopático:</strong>',
          'Cursa con fiebre, astenia, artralgias o artritis simétrica, mialgias, pleuropericarditis y rash cutáneo. <strong>REGLA DE ORO MANDATORIA EUNACOM: El lupus inducido por drogas TÍPICAMENTE RESPETA EL RIÑÓN Y EL SISTEMA NERVIOSO CENTRAL</strong> (la nefritis lúpica y las convulsiones/psicosis están prácticamente ausentes).',
          '<strong>Perfil Serológico Diagnóstico:</strong>',
          '• <strong>Anticuerpos Anti-Histona: Positivos en > 95% de los casos</strong> (su negatividad hace muy improbable el origen farmacológico).',
          '• ANA positivos en el 100%.',
          '• <strong>Anti-dsDNA y Anti-Smith: NEGATIVOS</strong> (su presencia confirma LES idiopático, no farmacológico).',
          '• Niveles de complemento C3 y C4 normales.',
          '<strong>Manejo:</strong> La conducta de elección es la <strong>suspensión inmediata del fármaco responsable</strong>. Los síntomas clínicos ceden en semanas y los anticuerpos se negativizan en meses. Se pueden usar AINEs o cursos breves de corticoides en dosis bajas para acelerar el alivio sintomático.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial: Lupus Eritematoso Sistémico vs Lupus Inducido por Drogas',
      headers: ['Característica', 'Lupus Sistémico (LES Idiopático)', 'Lupus Inducido por Drogas (Farmacológico)'],
      rows: [
        ['Sexo predominante', 'Mujeres jóvenes en edad fértil (9:1)', 'Distribución similar en ambos sexos; mayor en adultos mayores'],
        ['Compromiso renal (Nefritis)', 'Muy frecuente (hasta 50%), grave (Clase IV)', 'Excepcional / Prácticamente ausente'],
        ['Compromiso neuropsiquiátrico', 'Frecuente (convulsiones, psicosis, delirium)', 'Excepcional / Prácticamente ausente'],
        ['Anticuerpos Anti-Histona', 'Positivos en 50 – 60%', 'Positivos en > 95% de los casos'],
        ['Anticuerpos Anti-dsDNA', 'Positivos en 60 – 70% (marcador de actividad)', 'Típicamente NEGATIVOS'],
        ['Anticuerpos Anti-Smith (Sm)', 'Positivos en 20 – 30% (muy específico)', 'Típicamente NEGATIVOS'],
        ['Niveles de Complemento (C3/C4)', 'Frecuentemente DISMINUIDOS (consumo en brotes)', 'Típicamente NORMALES'],
        ['Evolución post-suspensión', 'Enfermedad crónica con brotes espontáneos', 'Resolución completa en pocas semanas tras retirar fármaco']
      ]
    },
    vignette: 'Hombre de 68 años con hipertensión arterial de difícil manejo en tratamiento con Hidralazina 100 mg cada 12 horas desde hace 9 meses. Consulta por cuadro de 4 semanas de astenia, fiebre vespertina de 38 °C, dolor en muñecas y rodillas y dolor torácico de tipo pleurítico. Al examen físico se ausculta un frote pericárdico leve y artritis en interfalángicas proximales de manos. No presenta edema ni alteraciones neurológicas. Exámenes: creatinina 0.9 mg/dL, examen de orina completamente normal sin proteinuria ni hematuria. Los ANA resultan positivos en título 1:320 y los anticuerpos Anti-Histona son fuertemente positivos. El Anti-dsDNA y el Anti-Smith son negativos, y el complemento C3/C4 es normal.',
    explicacion: 'El cuadro clínico y serológico es patognomónico de un Lupus Inducido por Drogas secundario a Hidralazina. Se manifiesta con artralgias, serositis (pleuropericarditis) y fiebre, con respeto absoluto de la función renal y del sistema nervioso central. La presencia de anticuerpos Anti-Histona en títulos altos (>95% de positividad) con Anti-dsDNA y Anti-Smith negativos y complemento normal confirman el diagnóstico. La conducta médica prioritaria y curativa es la suspensión inmediata de la Hidralazina, observándose remisión clínica en pocas semanas.',
    keyPoints: [
      'El Lupus Discoide se caracteriza por placas con hiperqueratosis, tapones foliculares y atrofia central cicatricial.',
      'En el cuero cabelludo, el lupus discoide provoca alopecia cicatricial permanente irreversible.',
      'El Lupus Cutáneo Subagudo cura SIN dejar cicatriz y se asocia intensamente a anticuerpos Anti-Ro (SSA).',
      'Las madres con Anti-Ro (+) tienen riesgo de tener recién nacidos con Bloqueo Auriculoventricular Congénito completo.',
      'El Lupus Inducido por Drogas es causado típicamente por Hidralazina, Procainamida, Isoniazida y anti-TNF.',
      'El Lupus Farmacológico se caracteriza por el RESPETO ABSOLUTO de riñón y sistema nervioso central.',
      'Los anticuerpos Anti-Histona son positivos en > 95% del lupus por drogas, mientras que Anti-dsDNA y Anti-Sm son negativos.',
      'El tratamiento del lupus farmacológico es la suspensión inmediata del medicamento causal.'
    ],
    questions: [
      {
        stem: 'Hombre de 65 años en tratamiento crónico con Hidralazina por hipertensión arterial refractaria consulta por poliartralgias en manos, astenia y dolor torácico pleurítico de 3 semanas. Los exámenes de laboratorio revelan ANA positivos 1:320 y anticuerpos Anti-Histona positivos en títulos altos. El sedimento de orina es normal sin proteinuria, la función renal es óptima y los anticuerpos Anti-dsDNA son negativos. ¿Cuál es la conducta terapéutica inicial más apropiada?',
        options: [
          { id: 'A', text: 'Iniciar pulsos de Ciclofosfamida endovenosa mensual' },
          { id: 'B', text: 'Suspender de inmediato la hidralazina' },
          { id: 'C', text: 'Indicar prednisona 60 mg al día por 2 años sin retirar fármacos' },
          { id: 'D', text: 'Realizar biopsia renal percutánea urgente' },
          { id: 'E', text: 'Prescribir metotrexato subcutáneo a dosis máximas' }
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a un Lupus Inducido por Drogas secundario a hidralazina, respaldado por la presencia de síntomas sistémicos y articulares con respeto renal, ausencia de anti-dsDNA y presencia característica de anticuerpos anti-histona positivos. La conducta primaria y curativa consiste en la suspensión inmediata del fármaco causante, lo que conduce a la resolución progresiva del cuadro clínico en pocas semanas.',
        recTag: 'EUNACOM 2018 · Q#39'
      },
      {
        stem: 'Mujer de 32 años embarazada de 18 semanas con diagnóstico de Lupus Cutáneo Subagudo acude a control prenatal. Sus exámenes confirman anticuerpos Anti-Ro (SSA) y Anti-La (SSB) fuertemente positivos. ¿Qué complicación fetal congénita irreversible debe monitorizarse estrictamente mediante ecocardiografía fetal seriada?',
        options: [
          { id: 'A', text: 'Tetralogía de Fallot' },
          { id: 'B', text: 'Bloqueo auriculoventricular congénito completo' },
          { id: 'C', text: 'Agenesia renal unilateral' },
          { id: 'D', text: 'Coartación aórtica severa' },
          { id: 'E', text: 'Transposición de grandes vasos' }
        ],
        correcta: 'B',
        explicacion: 'Los anticuerpos maternos Anti-Ro (SSA) y Anti-La (SSB) de clase IgG atraviesan la barrera placentaria y pueden unirse a las células del sistema de conducción cardíaco fetal en desarrollo, provocando inflamación, necrosis y fibrosis del nodo auriculoventricular. Esto produce un Bloqueo Auriculoventricular Congénito Completo, complicación irreversible que requiere seguimiento ecocardiográfico fetal estrecho y frecuentemente marcapasos definitivo tras el nacimiento.',
        recTag: 'EUNACOM 2021 · Q#14'
      }
    ]
  }
];

module.exports = { bloque2Classes };
