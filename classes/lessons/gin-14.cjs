// Clase 20.14 — guion docente escrito a mano (estándar Módulo 3 · Ginecología).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-14).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-14',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cáncer de mama GES, tamizaje mamográfico bienal, sistema BI-RADS, patología benigna, subtipos moleculares y radioterapia adyuvante',
      say: 'Bienvenidos a la clase sobre patología mamaria y cáncer de mama, la primera causa de muerte oncológica en las mujeres de nuestro país y uno de los ejes temáticos más evaluados en el examen EUNACOM. En esta sesión dominaremos las garantías del tamizaje mamográfico, interpretaremos con soltura las categorías del sistema BI-RADS indicando la biopsia percutánea cuando corresponda, diferenciaremos la patología benigna como fibroadenomas y papilomas, y fijaremos las conductas quirúrgicas y adyuvantes en oncología mamaria. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo biológico y progresión',
      title: 'Carcinogénesis Mamaria y Vías de Diseminación Neoplásica',
      nodes: [
        { id: 'mut', col: 0, row: 1, k: 'start', t: 'Mutación ductal o lobulillar', s: 'Alteraciones genéticas en epitelio luminal; mutaciones en BRCA1, BRCA2 o p53' },
        { id: 'cis', col: 1, row: 1, k: 'mech', t: 'Carcinoma in situ', s: 'Proliferación clonal confinada a la membrana basal del conducto galactóforo' },
        { id: 'inv', col: 2, row: 1, k: 'effect', t: 'Invasión del estroma', s: 'Ruptura basal, invasión vascular y reacción desmoplásica con espículas densas' },
        { id: 'dis', col: 3, row: 1, k: 'alert', t: 'Diseminación ganglionar y ósea', s: 'Metástasis a ganglios axilares, hueso, pulmón, pleura, hígado y cerebro' },
      ],
      edges: [
        { from: 'mut', to: 'cis', label: 'proliferación monoclonal' },
        { from: 'cis', to: 'inv', label: 'ruptura de membrana basal' },
        { from: 'inv', to: 'dis', label: 'diseminación linfática y hemática' },
      ],
      steps: [
        {
          show: ['mut', 'cis'],
          note: 'Origen en la unidad terminal ducto-lobulillar y fase in situ',
          say: 'El carcinoma mamario se origina fundamentalmente a partir del epitelio de la unidad terminal ducto lobulillar, impulsado por una compleja interacción entre mutaciones genéticas germinales en genes supresores como BRCA uno y dos o alteraciones somáticas adquiridas por el estímulo mitogénico sostenido de los estrógenos circulantes.',
        },
        {
          show: ['inv', 'dis'],
          note: 'Ruptura de membrana basal, invasión y metástasis axilares',
          say: 'Al perforar la membrana basal, las células del carcinoma ductal infiltrante invaden el estroma conjuntivo provocando una densa reacción esclerosante desmoplásica con espículas radiológicas características. A través de los capilares linfáticos periductales, el tumor metastatiza inicialmente hacia los ganglios de la axila ipsilateral, diseminándose posteriormente a nivel esquelético, pulmonar y hepático.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Salud pública y tamizaje',
      title: 'Epidemiología y Tamizaje Mamográfico Universal del Cáncer de Mama GES',
      cards: [
        {
          title: 'Epidemiología e Impacto Nacional',
          tag: 'Primera causa de muerte por cáncer en mujeres',
          kind: 'alert',
          items: [
            {
              t: 'Principal causa de muerte oncológica femenina en Chile',
              d: 'Mortalidad superior a 1500 mujeres al año; máxima incidencia a partir de los cincuenta años',
              say: 'El cáncer de mama representa la primera causa de muerte por patología oncológica en las mujeres de Chile, cobrando la vida de más de mil quinientas mujeres cada año y concentrando su mayor tasa de incidencia y letalidad a partir de los cincuenta años de edad.',
            },
            {
              t: 'Factores de riesgo genéticos y hormonales',
              d: 'Mutaciones BRCA, menarquia precoz, menopausia tardía, nuliparidad y terapia hormonal prolongada',
              say: 'Los factores de riesgo mayores demostrados incluyen antecedentes familiares de primer grado con mutaciones genéticas en BRCA uno o BRCA dos, una exposición estrogénica acumulada por menarquia precoz y menopausia tardía, nuliparidad, ausencia de lactancia materna y obesidad en la postmenopausia.',
            },
          ],
        },
        {
          title: 'Programa Nacional de Tamizaje GES',
          tag: 'Garantía Explícita en Salud Número Cuatro',
          kind: 'criteria',
          items: [
            {
              t: 'Mamografía bianual entre los 50 y 69 años de edad',
              d: 'Examen de tamizaje cada dos años en mujeres asintomáticas garantizado universalmente',
              say: 'El protocolo ministerial y las garantías explícitas en salud establecen como regla de oro el tamizaje mamográfico bianual universal en toda mujer asintomática entre los cincuenta y los sesenta y nueve años.',
            },
            {
              t: 'Detección preclínica que reduce la mortalidad',
              d: 'Pesquisa microcalcificaciones y nódulos no palpables reduciendo la mortalidad en un treinta por ciento',
              say: 'La mamografía en dos proyecciones permite detectar carcinomas invasores en fase subclínica hasta dos años antes de que sean palpables, reduciendo la mortalidad específica en cerca de un treinta por ciento.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación radiológica internacional',
      title: 'Sistema BI-RADS: Categorías Cero a Tres y Conducta Médica',
      cards: [
        {
          title: 'Categorías Cero a Dos (Negativas o Benignas)',
          tag: 'Estudio adicional o tamizaje habitual',
          kind: 'normal',
          items: [
            {
              t: 'BI-RADS 0: Examen incompleto o no concluyente',
              d: 'Requiere evaluación con imágenes adicionales como ecografía mamaria o proyecciones magnificadas',
              say: 'La categoría BI-RADS cero corresponde a un estudio mamográfico técnicamente incompleto o no concluyente por tejido mamario denso o asimetrías dudosas, exigiendo siempre una evaluación complementaria inmediata mediante ecografía mamaria o proyecciones radiológicas magnificadas.',
            },
            {
              t: 'BI-RADS 1 y 2: Normal o hallazgos benignos definidos',
              d: 'Riesgo de malignidad de cero por ciento; continuar tamizaje mamográfico habitual cada dos años',
              say: 'Las categorías uno y dos representan estudios normales o con hallazgos netamente benignos como quistes simples o fibroadenomas calcificados, manteniendo el tamizaje rutinario cada dos años.',
            },
          ],
        },
        {
          title: 'BI-RADS 3: Hallazgo Probablemente Benigno',
          tag: 'Control estricto semestral por dos años',
          kind: 'criteria',
          items: [
            {
              t: 'Riesgo de malignidad menor al dos por ciento',
              d: 'Nódulo sólido circunscrito no palpable o grupo aislado de microcalcificaciones redondas',
              say: 'La categoría BI-RADS tres se define por una probabilidad estadística de malignidad estrictamente inferior al dos por ciento frente a nódulos sólidos circunscritos no palpables o pequeños grupos de microcalcificaciones redondas homogéneas de baja sospecha.',
            },
            {
              t: 'Conducta: Seguimiento a los seis meses',
              d: 'Control mamográfico unilateral estricto a los seis, doce y veinticuatro meses para confirmar estabilidad',
              say: 'La conducta médica indiscutible ante un BI-RADS tres es el seguimiento mamográfico a los seis meses, repitiendo a los doce y veinticuatro meses para documentar estabilidad y descartar progresión.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Sospecha y confirmación histológica',
      title: 'Sistema BI-RADS: Categorías Cuatro y Cinco y Biopsia Mandatoria',
      cards: [
        {
          title: 'Categorías Cuatro y Cinco: Sospecha de Cáncer',
          tag: 'Indicación formal de confirmación tisular',
          kind: 'alert',
          items: [
            {
              t: 'BI-RADS 4: Sospechoso de malignidad (2 a 95 por ciento)',
              d: 'Microcalcificaciones pleomórficas agrupadas o nódulos de contornos oscuros no espiculados',
              say: 'La categoría BI-RADS cuatro engloba lesiones sospechosas de malignidad con un amplio rango probabilístico que oscila entre el dos y el noventa y cinco por ciento, subdividiéndose en baja sospecha cuatro A, moderada cuatro B y alta sospecha cuatro C según el grado de pleomorfismo y contorno.',
            },
            {
              t: 'BI-RADS 5: Altamente sugerente de malignidad (> 95 por ciento)',
              d: 'Nódulo denso marcadamente espiculado con retracción de piel y calcificaciones lineales ramificadas',
              say: 'La categoría BI-RADS cinco corresponde a masas hiperdensas marcadamente espiculadas con retracción de la piel o del pezón y microcalcificaciones lineales ramificadas finas, con una probabilidad casi categórica superior al noventa y cinco por ciento de corresponder a un carcinoma ductal infiltrante.',
            },
          ],
        },
        {
          title: 'Procedimiento Mandatorio: Core Biopsy Guiada',
          tag: 'Biopsia con aguja gruesa obligatoria',
          kind: 'key',
          items: [
            {
              t: 'Biopsia con aguja gruesa (Core Biopsy o Tru-Cut)',
              d: 'Obtención percutánea de cilindros tisulares guiada por ecografía mamaria o estereotaxia',
              say: 'Todo hallazgo BI-RADS cuatro o cinco tiene indicación mandatoria de confirmación histológica mediante biopsia percutánea con aguja gruesa guiada por imágenes, conocida como Core Biopsy o Tru-Cut.',
            },
            {
              t: 'Permite estudio de invasión y receptores tumorales',
              d: 'Diferencia carcinoma in situ de invasor y entrega tejido para inmunohistoquímica de RE, RP y HER2',
              say: 'La biopsia con aguja gruesa es indispensable porque aporta cilindros que distinguen la invasión estromal y permiten procesar de inmediato los receptores hormonales y la proteína HER dos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Patología mamaria benigna',
      title: 'Patología Benigna: Fibroadenoma Mamario y Cambios Fibroquísticos',
      cards: [
        {
          title: 'Fibroadenoma Mamario',
          tag: 'Tumor benigno más común en jóvenes',
          kind: 'key',
          items: [
            {
              t: 'Perfil clínico en menores de 35 años',
              d: 'Nódulo redondeado u ovoide, móvil, de consistencia gomosa elástica, bordes netos e indoloro',
              say: 'El fibroadenoma es el tumor sólido benigno más frecuente en la mujer joven menor de treinta y cinco años, compuesto por una proliferación mixta de estroma fibroso y epitelio ductal que conforma un nódulo liso, de consistencia gomosa elástica, intensamente móvil bajo los dedos y totalmente indoloro.',
            },
            {
              t: 'Manejo conservador y ecográfico',
              d: 'Observación y seguimiento ecográfico si mide menos de 2 a 3 cm; resección si crece rápidamente',
              say: 'En ecografía se observa una masa hipoecogénica homogénea bien delimitada; la conducta habitual es la observación periódica, extirpándose solo si supera los tres centímetros o genera dudas.',
            },
          ],
        },
        {
          title: 'Mastopatía Fibroquística (Condición Fibroquística)',
          tag: 'Mastodinia premenstrual bilateral',
          kind: 'normal',
          items: [
            {
              t: 'Dolor mamario cíclico bilateral (Mastodinia)',
              d: 'Congestión y dolor mamario acentuado en fase lútea premenstrual que alivia tras la menstruación',
              say: 'La condición fibroquística o displasia mamaria representa la causa más frecuente de mastodinia o dolor mamario bilateral cíclico, desencadenado por una respuesta exagerada del tejido a los estrógenos lúteos que genera congestión dolorosa acentuada en los cuadrantes superiores antes de cada menstruación.',
            },
            {
              t: 'Palpación en plato de arvejas y quistes simples',
              d: 'Empastamiento nodular difuso irregular; los quistes a tensión dolorosos se manejan con punción evacuadora',
              say: 'A la palpación se percibe un empastamiento granular difuso en plato de arvejas. Si se evidencian quistes simples a tensión dolorosos, el procedimiento de elección es la punción aspirativa evacuadora.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Secreción por el pezón',
      title: 'Telorrea Patológica: Papiloma Intraductal versus Galactorrea Endocrina',
      cards: [
        {
          title: 'Telorrea Unilateral Serohemática',
          tag: 'Papiloma intraductal solitario',
          kind: 'alert',
          items: [
            {
              t: 'Secreción espontánea unicanalicular serohemática',
              d: 'Líquido hemático o rosado que brota por un único poro del pezón sin nódulos palpables',
              say: 'La salida espontánea e involuntaria de secreción serohemática, rosada o francamente hemática por un único conducto o poro del pezón de manera unilateral orienta con altísima probabilidad clínica hacia un papiloma intraductal solitario en los conductos principales retroareolares.',
            },
            {
              t: 'Causa benigna más frecuente y conducta quirúrgica',
              d: 'Proliferación epitelial vascularizada retroareolar que exige microdoquectomía para descartar carcinoma',
              say: 'El papiloma intraductal es la causa benigna más común de secreción hemática y exige estudio con ecografía y resección quirúrgica del conducto comprometido o microdoquectomía.',
            },
          ],
        },
        {
          title: 'Galactorrea Bilateral Pluricanalicular',
          tag: 'Origen endocrinológico o farmacológico',
          kind: 'normal',
          items: [
            {
              t: 'Secreción lechosa bilateral por múltiples poros',
              d: 'Líquido blanquecino no hemático desencadenado por estímulo o hiperprolactinemia sostenida',
              say: 'La galactorrea verdadera se define por la salida bilateral de secreción blanquecina de aspecto lechoso no hemático que brota espontáneamente o a la compresión por múltiples orificios galactóforos en ambas mamas, asociada habitualmente a adenomas hipofisarios productores de prolactina o fármacos dopaminérgicos.',
            },
            {
              t: 'Estudio endocrinológico con prolactina sérica',
              d: 'Medición de prolactina plasmática matinal, TSH y revisión de fármacos antidopaminérgicos',
              say: 'El estudio de la galactorrea requiere medir prolactina sérica y hormona tiroidea, suspendiendo si es posible fármacos bloqueadores dopaminérgicos como metoclopramida o neurolépticos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Inmunohistoquímica y subtipos tumorales',
      title: 'Subtipos Moleculares del Cáncer de Mama y Terapias Dirigidas',
      cards: [
        {
          title: 'Tumores con Receptores Hormonales Positivos',
          tag: 'Subtipos Luminal A y Luminal B',
          kind: 'key',
          items: [
            {
              t: 'Luminal A: Receptores positivos y Ki-67 bajo',
              d: 'Receptores de estrógeno y progesterona positivos, HER2 negativo y Ki-67 menor al 20%; excelente pronóstico',
              say: 'El subtipo Luminal A expresa fuertemente receptores nucleares de estrógeno y progesterona con un índice proliferativo Ki sesenta y siete bajo, ofreciendo el mejor pronóstico clínico y respondiendo de forma excelente a la hormonoterapia oral prolongada durante cinco a diez años continuos.',
            },
            {
              t: 'Luminal B: Mayor proliferación celular',
              d: 'Receptores de estrógeno positivos con Ki-67 alto o HER2 positivo; suele requerir quimioterapia',
              say: 'El subtipo Luminal B presenta receptores hormonales pero con alta tasa proliferativa o sobreexpresión de HER dos, requiriendo con frecuencia esquemas combinados de quimioterapia y hormonoterapia.',
            },
          ],
        },
        {
          title: 'Tumores HER2 Enriquecido y Triple Negativo',
          tag: 'Terapias biológicas y quimioterapia',
          kind: 'alert',
          items: [
            {
              t: 'HER2 enriquecido: Terapia dirigida con Trastuzumab',
              d: 'Sobreexpresión de la oncoproteína HER2; indicación formal de anticuerpos monoclonales anti-HER2',
              say: 'Los tumores con sobreexpresión de la oncoproteína transmembrana HER dos se caracterizan por una marcada agresividad biológica con alta tasa de diseminación axilar, pero son extraordinariamente sensibles al bloqueo biológico selectivo mediante anticuerpos monoclonales dirigidos como trastuzumab y pertuzumab.',
            },
            {
              t: 'Triple Negativo: Cáncer agresivo sin dianas moleculares',
              d: 'RE negativo, RP negativo y HER2 negativo; NO responde a tamoxifeno ni trastuzumab; pilar es quimioterapia',
              say: 'El carcinoma triple negativo carece de receptores hormonales y de HER dos; no se beneficia de hormonoterapia ni de trastuzumab, descansando su tratamiento en quimioterapia citotóxica intensiva.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento quirúrgico y adyuvancia',
      title: 'Principios Quirúrgicos: Cirugía Conservadora y Radioterapia Obligatoria',
      cards: [
        {
          title: 'Tumorectomía Conservadora versus Mastectomía',
          tag: 'Misma sobrevida con preservación mamaria',
          kind: 'key',
          items: [
            {
              t: 'Cirugía conservadora con márgenes histológicos libres',
              d: 'Extirpación tumoral amplia conservando la mama; indicada en tumores menores de 3 a 4 cm',
              say: 'La cirugía conservadora mediante tumorectomía o cuadrantectomía busca la extirpación oncológica completa de la neoplasia con márgenes microscópicos teñidos rigurosamente libres de células tumorales, permitiendo preservar la glándula mamaria y su aspecto cosmético.',
            },
            {
              t: '¡Radioterapia externa adyuvante obligatoria!',
              d: 'Toda cirugía conservadora DEBE ir seguida de radioterapia para igualar la sobrevida de la mastectomía',
              say: 'Graben esta regla de oro: toda tumorectomía conservadora debe ir seguida obligatoriamente de radioterapia adyuvante sobre la mama restante; omitirla dispara la recidiva local a más del treinta por ciento.',
            },
          ],
        },
        {
          title: 'Manejo de la Axila: Biopsia de Ganglio Centinela',
          tag: 'Evita el vaciamiento axilar y el linfedema',
          kind: 'criteria',
          items: [
            {
              t: 'Biopsia del ganglio centinela en axila negativa',
              d: 'Inyección de radioisótopo o azul de metileno para extirpar únicamente los primeros ganglios de drenaje',
              say: 'En toda paciente con axila clínicamente negativa sin adenopatías palpables se realiza de rigor la técnica de biopsia del ganglio centinela mediante inyección periareolar de radioisótopo o azul de metileno, identificando y extirpando selectivamente los primeros ganglios que reciben el drenaje tumoral.',
            },
            {
              t: 'Prevención del linfedema de la extremidad',
              d: 'Si el ganglio centinela es negativo histológicamente se omite la linfadenectomía axilar completa',
              say: 'Si el análisis histopatológico diferido o intraoperatorio del ganglio centinela resulta negativo para células tumorales, se omite con total seguridad la linfadenectomía axilar completa, evitando de forma categórica complicaciones crónicas e invalidantes como el linfedema doloroso y la rigidez funcional del miembro superior ipsilateral.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Resumen BI-RADS',
      title: 'Clasificación BI-RADS: Hallazgos, Riesgo de Cáncer y Conducta Médica',
      head: ['Categoría BI-RADS', 'Riesgo de Malignidad', 'Conducta Médica Estandarizada'],
      rows: [
        {
          cells: ['BI-RADS 0', 'No determinado', 'Estudio adicional obligatorio con ecografía mamaria o proyecciones'],
          say: 'La categoría cero es no concluyente y exige completar estudio con ecografía o proyecciones adicionales.',
        },
        {
          cells: ['BI-RADS 1 y 2', '0% (Benigno)', 'Mantener tamizaje mamográfico habitual cada dos años'],
          say: 'Las categorías uno y dos son normales o benignas y continúan el tamizaje habitual cada dos años.',
        },
        {
          cells: ['BI-RADS 3', '< 2% (Probable benigno)', 'Seguimiento mamográfico estricto a los seis, doce y veinticuatro meses'],
          say: 'La categoría tres tiene riesgo menor al dos por ciento y exige control seriado a los seis meses.',
        },
        {
          cells: ['BI-RADS 4 y 5', '2% a > 95% (Sospechoso)', 'Biopsia con aguja gruesa (Core Biopsy o Tru-Cut) guiada por imágenes'],
          say: 'Las categorías cuatro y cinco son sospechosas e imponen realizar biopsia con aguja gruesa guiada.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo de Abordaje del Nódulo Mamario y Tamizaje',
      say: 'Revisemos el algoritmo estructurado para clasificar un hallazgo mamográfico o nódulo palpable entre seguimiento de bajo riesgo versus biopsia confirmatoria.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'BI-RADS 4 · Conducta Diagnóstica Mandatoria',
      stem: 'Una mujer de 52 años, asintomática, se realiza una mamografía de tamizaje en el CESFAM. El informe radiológico describe en el cuadrante superior externo de la mama izquierda un nódulo denso de 14 mm de contornos espiculados asociado a un grupo de microcalcificaciones pleomórficas heterogéneas, catalogado como BI-RADS 4.',
      question: '¿Cuál es la conducta diagnóstica de elección que debe indicarse de inmediato?',
      options: [
        { letter: 'A', text: 'Control mamográfico estricto a los 6 meses para evaluar estabilidad' },
        { letter: 'B', text: 'Realización de Biopsia con aguja gruesa (Core Biopsy) guiada por imágenes' },
        { letter: 'C', text: 'Mastectomía radical de urgencia sin confirmación anatomopatológica previa' },
        { letter: 'D', text: 'Punción con aguja fina (PAAF) para estudio citológico exclusivo' },
        { letter: 'E', text: 'Administración empírica de tamoxifeno oral durante 3 meses' },
      ],
      correct: 'B',
      explanation: 'Todo hallazgo radiológico clasificado como BI-RADS 4 (sospechoso de malignidad con riesgo de 2 a 95%) o BI-RADS 5 (> 95%) tiene indicación formal y mandatoria de confirmación histológica mediante Biopsia Percutánea con Aguja Gruesa (Core Biopsy o Tru-Cut) guiada por ecografía o estereotaxia. Este procedimiento obtiene cilindros de tejido que permiten diagnosticar invasión del estroma y realizar el panel inmunohistoquímico completo (RE, RP, HER2 y Ki-67). La PAAF no distingue carcinoma in situ de invasor.',
      say: {
        stem: 'Mujer de cincuenta y dos años con mamografía de tamizaje que muestra nódulo espiculado con microcalcificaciones pleomórficas catalogado como BI-RADS cuatro.',
        question: '¿Cuál es la conducta diagnóstica de elección que debe indicarse de inmediato?',
        options: 'La opción A propone control en seis meses. La B biopsia con aguja gruesa Core Biopsy guiada por imágenes. La C mastectomía radical de urgencia. La D punción con aguja fina. La E tamoxifeno empírico. Piénsalo.',
        answer: 'La respuesta correcta es la B. Toda lesión BI-RADS cuatro o cinco debe biopsiarse con aguja gruesa bajo visión ecográfica o estereotaxia para obtener diagnóstico histológico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Cirugía Conservadora de Mama · Radioterapia Adyuvante',
      stem: 'Una mujer de 58 años es sometida a una tumorectomía conservadora de mama con márgenes quirúrgicos libres por un carcinoma ductal infiltrante de 18 mm.',
      question: '¿Cuál de las siguientes terapias adyuvantes locales es ESTRICTAMENTE OBLIGATORIA tras una cirugía conservadora de mama?',
      options: [
        { letter: 'A', text: 'Radioterapia externa sobre la glándula mamaria restante' },
        { letter: 'B', text: 'Quimioterapia con metotrexato intratecal' },
        { letter: 'C', text: 'Vaciamiento ganglionar axilar radical bilateral' },
        { letter: 'D', text: 'Inyecciones locales de interferón alfa intralesional' },
        { letter: 'E', text: 'Ninguna, la cirugía conservadora con bordes libres no requiere tratamientos adicionales' },
      ],
      correct: 'A',
      explanation: 'El estándar oncológico internacional y las guías del MINSAL establecen como regla de oro indiscutible que TODA Cirugía Conservadora de Mama (tumorectomía o cuadrantectomía) DEBE ir seguida obligatoriamente de RADIOTERAPIA EXTERNA ADYUVANTE sobre la glándula mamaria residual. Los ensayos clínicos clásicos (NSABP B-06) demostraron que la cirugía conservadora MÁS radioterapia ofrece exactamente la misma tasa de sobrevida global a largo plazo que la mastectomía radical, pero omitir la radioterapia eleva la tasa de recidiva local a más del 25-35%.',
      say: {
        stem: 'Mujer de cincuenta y ocho años sometida a tumorectomía conservadora con bordes libres por carcinoma ductal invasor de dieciocho milímetros.',
        question: '¿Cuál de las siguientes terapias adyuvantes locales es estrictamente obligatoria tras una cirugía conservadora de mama?',
        options: 'La opción A propone radioterapia externa sobre la glándula mamaria restante. La B metotrexato intratecal. La C vaciamiento axilar bilateral. La D interferón intralesional. La E ninguna terapia adicional. Piénsalo.',
        answer: 'La respuesta correcta es la A. Toda cirugía conservadora de mama exige radioterapia adyuvante complementaria para reducir la tasa de recidiva tumoral local.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Telorrea Serohemática Unilateral · Papiloma Intraductal',
      stem: 'Una paciente de 46 años, no lactante, consulta por la salida espontánea de secreción serohemática (líquido rosado con estrías de sangre) por un único poro del pezón de la mama derecha desde hace 3 semanas. A la palpación física no se identifican nódulos dominantes ni adenopatías axilares.',
      question: '¿Cuál es la causa etiológica benigna más frecuente de este tipo de telorrea?',
      options: [
        { letter: 'A', text: 'Fibroadenoma mamario simple' },
        { letter: 'B', text: 'Papiloma intraductal solitario' },
        { letter: 'C', text: 'Prolactinoma hipofisario' },
        { letter: 'D', text: 'Mastitis granulomatosa idiopática' },
        { letter: 'E', text: 'Ectasia ductal senil' },
      ],
      correct: 'B',
      explanation: 'La causa benigna más frecuente de telorrea serohemática o hemática unilateral, unicanalicular (que brota por un único poro del pezón) y espontánea en mujeres en edad reproductiva o perimenopáusica es el Papiloma Intraductal Benigno. Consiste en una pequeña proliferación de epitelio ductal vascularizado que asienta en los conductos galactóforos principales retroareolares. Debe estudiarse con ecografía/mamografía y resolverse mediante resección del conducto afectado (microdoquectomía) para descartar un carcinoma papilar subyacente.',
      say: {
        stem: 'Mujer de cuarenta y seis años no lactante con salida espontánea de secreción serohemática unilateral por un único poro del pezón sin masas palpables.',
        question: '¿Cuál es la causa etiológica benigna más frecuente de este tipo de telorrea?',
        options: 'La opción A propone fibroadenoma mamario simple. La B papiloma intraductal solitario. La C prolactinoma hipofisario. La D mastitis granulomatosa. La E ectasia ductal. Piénsalo.',
        answer: 'La respuesta correcta es la B. La telorrea serohemática unicanalicular espontánea es producida de forma preponderante por un papiloma intraductal benigno.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Cáncer Triple Negativo · Tratamiento Sistémico',
      stem: 'Una paciente de 42 años diagnosticada de cáncer de mama invasor presenta el siguiente informe de inmunohistoquímica tumoral: Receptores de Estrógeno (RE) negativos (0%), Receptores de Progesterona (RP) negativos (0%) y HER2 negativo (Score 0).',
      question: '¿A qué subtipo molecular corresponde este tumor y cuál es su implicancia terapéutica respecto a la hormonoterapia y anticuerpos monoclonales?',
      options: [
        { letter: 'A', text: 'Subtipo Luminal A; responderá excelentemente a Tamoxifeno como única terapia' },
        { letter: 'B', text: 'Subtipo Triple Negativo; NO responderá a hormonoterapia ni a Trastuzumab, requiriendo quimioterapia citotóxica' },
        { letter: 'C', text: 'Subtipo HER2 enriquecido; indicación prioritaria de Trastuzumab con Pertuzumab' },
        { letter: 'D', text: 'Subtipo Luminal B; requiere monoterapia con inhibidores de aromatasa' },
        { letter: 'E', text: 'Carcinoma basocelular de la mama; solo requiere seguimiento sin fármacos' },
      ],
      correct: 'B',
      explanation: 'El tumor que resulta negativo para los tres marcadores clásicos (RE negativo, RP negativo y HER2 negativo) se clasifica como Cáncer de Mama Triple Negativo. Representa aproximadamente el 15% de los cánceres mamarios y se asocia con mayor frecuencia a pacientes jóvenes y portadoras de mutaciones en el gen BRCA1. Desde el punto de vista terapéutico, al carecer de receptores hormonales y de la proteína HER2, este tumor NO se beneficia de la hormonoterapia (tamoxifeno/anastrozol) ni de la terapia dirigida anti-HER2 (Trastuzumab); su tratamiento médico descansa fundamentalmente en la Quimioterapia Citotóxica combinada.',
      say: {
        stem: 'Paciente de cuarenta y dos años con cáncer mamario invasor cuyos receptores de estrógeno, progesterona y HER dos resultan completamente negativos.',
        question: '¿A qué subtipo molecular corresponde este tumor y cuál es su implicancia terapéutica?',
        options: 'La opción A propone Luminal A sensible a tamoxifeno. La B subtipo Triple Negativo que no responde a hormonoterapia ni a trastuzumab requiriendo quimioterapia. La C HER dos enriquecido. La D Luminal B. La E carcinoma basocelular. Piénsalo.',
        answer: 'La respuesta correcta es la B. El cáncer triple negativo carece de receptores hormonales y dianas de HER dos, basándose exclusivamente en quimioterapia citotóxica.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Patología Mamaria y Cáncer de Mama',
      cards: [
        {
          title: 'Tamizaje y Conducta ante BI-RADS',
          tag: 'Mamografía y Core Biopsy',
          kind: 'key',
          items: [
            {
              t: 'Tamizaje mamográfico bienal de 50 a 69 años',
              d: 'Garantía GES número cuatro obligatoria; examen en dos proyecciones cada dos años',
              say: 'El tamizaje mamográfico se realiza cada dos años en mujeres de cincuenta a sesenta y nueve años garantizado por las normas de salud pública.',
            },
            {
              t: 'BI-RADS 4 y 5 exigen Core Biopsy guiada',
              d: 'Confirmación histológica percutánea con aguja gruesa para clasificar invasión y receptores',
              say: 'Toda imagen BI-RADS cuatro o cinco exige biopsia con aguja gruesa guiada por imágenes para obtener cilindros histológicos antes de cualquier cirugía.',
            },
          ],
        },
        {
          title: 'Patología Benigna Clásica',
          tag: 'Fibroadenoma y telorrea',
          kind: 'criteria',
          items: [
            {
              t: 'Fibroadenoma: Tumor móvil en mujer joven',
              d: 'Nódulo elástico liso e indoloro en menores de 35 años; se observa si mide menos de 3 cm',
              say: 'El fibroadenoma es el nódulo mamario benigno más común en jóvenes y se vigila ecográficamente si mide menos de tres centímetros.',
            },
            {
              t: 'Papiloma intraductal y telorrea serohemática',
              d: 'Secreción espontánea unicanalicular serosanguinolenta resuelta con microdoquectomía',
              say: 'La telorrea unilateral serohemática que sale por un solo poro es causada típicamente por un papiloma intraductal y requiere resección quirúrgica del conducto.',
            },
          ],
        },
        {
          title: 'Oncología Quirúrgica y Subtipos',
          tag: 'Radioterapia y biología molecular',
          kind: 'alert',
          items: [
            {
              t: 'Radioterapia obligatoria tras tumorectomía',
              d: 'La cirugía conservadora con márgenes libres exige radioterapia adyuvante para evitar recidivas',
              say: 'Toda cirugía conservadora con tumorectomía exige radioterapia adyuvante obligatoria sobre la mama restante para igualar la sobrevida de la mastectomía.',
            },
            {
              t: 'Subtipo Triple Negativo sin dianas hormonales',
              d: 'RE, RP y HER2 negativos; no responde a tamoxifeno ni trastuzumab; se trata con quimioterapia',
              say: 'El fenotipo triple negativo requiere quimioterapia citotóxica sistémica. Si te llevas una sola idea de hoy: la mamografía anual a partir de los cincuenta años es el único tamizaje que reduce la mortalidad por cáncer de mama en la población general. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Abordaje del Nódulo Mamario y Tamizaje',
    root: N(
      'start',
      'Mujer Asintomática en Tamizaje o con Nódulo Mamario Palpable',
      'Examen físico mamario meticuloso · mamografía bilateral en dos proyecciones · ecografía complementaria',
      'Iniciamos la evaluación mediante examen físico y mamografía bilateral complementada con ecografía.',
      [
        'Informe Mamográfico BI-RADS 4 o 5 (Sospecha de Malignidad)',
        N(
          'alert',
          'Biopsia Percutánea con Aguja Gruesa (Core Biopsy / Tru-Cut)',
          'Biopsia ecoguiada o estereotáxica para confirmación histológica y receptores hormonales',
          'Ante un hallazgo BI-RADS cuatro o cinco indicamos de inmediato Core Biopsy guiada por imágenes.',
          [
            'Histología confirma Carcinoma Invasor Confinado Menor a 3 a 4 cm',
            N(
              'do',
              'Cirugía Conservadora (Tumorectomía) + RADIOTERAPIA ADYUVANTE OBLIGATORIA',
              'Bordes libres garantizados + Biopsia de Ganglio Centinela + Radioterapia externa sobre mama',
              'Realizamos tumorectomía conservadora con bordes libres y biopsia de ganglio centinela seguida de radioterapia obligatoria.',
            ),
          ],
          [
            'Histología confirma Lesión Benigna Concordante con la Imagen',
            N(
              'ok',
              'Seguimiento Clínico y Mamográfico Periódico',
              'Control en seis a doce meses para confirmar estabilidad anatómica de la lesión',
              'Si la biopsia resulta benigna y concuerda con la imagen mantenemos seguimiento periódico.',
            ),
          ],
        ),
      ],
      [
        'Informe Mamográfico BI-RADS 3 (Hallazgo Probablemente Benigno)',
        N(
          'do',
          'Seguimiento Mamográfico Estricto Unilateral en Seis Meses',
          'Control a los 6, 12 y 24 meses para demostrar estabilidad · biopsia solo si crece o cambia',
          'Ante un BI-RADS tres indicamos control mamográfico semestral estricto para certificar estabilidad.',
        ),
      ],
      [
        'Informe Mamográfico BI-RADS 1 o 2 (Normal o Hallazgos Benignos)',
        N(
          'ok',
          'Continuar Tamizaje Bienal Universal GES (Cada Dos Años)',
          'Control mamográfico regular entre los 50 y 69 años de edad en atención primaria',
          'Con mamografía normal o benigna mantenemos el tamizaje mamográfico habitual cada dos años.',
        ),
      ],
    ),
  },
};
