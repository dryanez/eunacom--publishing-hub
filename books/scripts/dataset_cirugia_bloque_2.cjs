const { flowCirugia } = require('./flow_builder.cjs');

const bloque2Classes = [
  // ==========================================================================
  // TEMA 11.6: HERNIAS DE PARED ABDOMINAL (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-06',
    classId: 'cirugia-06',
    tier: 3,
    blockNum: 2,
    blockName: 'Pared Abdominal, Hernias & Proctología',
    topicLabel: '11.6',
    title: 'Hernias de Pared Abdominal: Inguinal Directa/Indirecta, Crural & Complicaciones',
    perfilCode: '4.01.1.021',
    dx: 'Sospecha',
    tx: 'Inicial',
    seg: 'Completo',
    ges: 'GES N° 58: Tratamiento quirúrgico de hernia del desarrollo de la pared abdominal en personas menores de 15 años · En adultos la reparación electiva previene el atascamiento y la estrangulación de urgencia.',
    reconstrucciones: 'EUNACOM Julio 2022 (Q#87) · EUNACOM Diciembre 2017 (Q#112)',
    frecuencia: 'Muy alta rentabilidad en EUNACOM · Patología quirúrgica electiva y de urgencia extremadamente evaluada',
    diagram: flowCirugia('Algoritmo Diagnóstico y Terapéutico de las Hernias de Pared Abdominal', [
      { t: 'Masa o Protrusión en Región Inguino-Crural o Pared Abdominal', s: 'Examen físico en bipedestación y con maniobra de Valsalva activa', type: 'acc' },
      { t: 'Diferenciación Anatómica: Inguinal Indirecta vs Directa vs Crural', s: 'Relación con vasos epigástricos inferiores y ligamento inguinal (arriba: inguinal / abajo: crural)', type: 'warn' },
      { k: 'split', q: '¿Estado Clínico de la Hernia: Reductible vs Complicada?', s: 'Evaluación inmediata de irreductibilidad, dolor y compromiso vascular',
        ll: 'Reductible (Asintomática u Oligosintomática)',
        left: { t: 'Hernioplastia Electiva con Malla', s: 'Técnica de Lichtenstein de elección (o laparoscópica TAPP/TEP) · Programación ambulatoria', type: 'acc' },
        rl: 'Atascada o Estrangulada (Dolor, cambios cutáneos, íleo)',
        right: { t: 'Urgencia Quirúrgica Inmediata', s: 'Atascada < 4-6 h: Intento suave de taxis · Estrangulada: PROHIBIDA TAXIS -> Pabellón urgente', type: 'crit' }
      },
      { t: 'Complicaciones Graves: Hernia de Richter y Necrosis de Asa', s: 'Richter: Atascamiento parcial de borde antimesentérico sin obstrucción franca pero con necrosis', type: 'crit' },
      { t: 'Cirugía de Urgencia: Laparotomía / Hernioplastia con Resección', s: 'Evaluación de viabilidad intestinal · Resección de asa no viable · Profilaxis antibiótica', type: 'acc' }
    ]),
    contexto: 'Una hernia es la protrusión anómala de un saco peritoneal con contenido intraabdominal a través de un orificio o debilidad congénita o adquirida de la pared. Las hernias inguinales representan el 75% de todas las hernias de la pared abdominal. La distinción entre hernia indirecta (congénita, lateral a vasos epigástricos), directa (adquirida por debilidad de la fascia transversalis en el triángulo de Hesselbach, medial a vasos epigástricos) y crural (por debajo del ligamento inguinal) es una pregunta angular en el EUNACOM. La hernia crural posee el mayor riesgo de estrangulación isquémica y siempre debe operarse de forma preferente.',
    contentSections: [
      {
        subhead: '1. Anatomía Quirúrgica y Clasificación: Inguinal vs Crural',
        paragraphs: [
          'El canal inguinal mide aproximadamente 4 a 5 cm de longitud y discurre oblicuo en la región inguinal inferior. Sus límites anatómicos son: <strong>Pared anterior:</strong> Aponeurosis del músculo oblicuo externo (mayor); <strong>Pared posterior:</strong> Fascia transversalis y tendón conjunto; <strong>Techo:</strong> Fibras arciformes del oblicuo interno y transverso; <strong>Piso:</strong> Ligamento inguinal (arco crural de Poupart) y ligamento lacunar (Gimbernat).',
          '<strong>Hernia Inguinal Indirecta:</strong> Es la más frecuente de todas (50% de las hernias inguinales, común en jóvenes y niños). Es de origen congénito por permeabilidad del conducto peritoneovaginal embrionario. Emerge por el <strong>anillo inguinal profundo</strong>, situándose <strong>LATERAL a los vasos epigástricos inferiores</strong>. Acompaña al cordón espermático dentro de sus túnicas fasciales y con frecuencia desciende hacia el escroto (<em>hernia inguinoescrotal</em>).',
          '<strong>Hernia Inguinal Directa:</strong> Representa el 25% de las hernias. Es de origen adquirido por debilidad estructural de la pared posterior (fascia transversalis) en el <strong>Triángulo de Hesselbach</strong> (delimitado por el ligamento inguinal inferiormente, el borde lateral del músculo recto anterior medialmente y los vasos epigástricos inferiores lateralmente). Emerge <strong>MEDIAL a los vasos epigástricos inferiores</strong>; protruye directamente hacia adelante y rara vez desciende al escroto.',
          '<strong>Hernia Crural (Femoral):</strong> Protruye a través del anillo crural, situándose <strong>POR DEBAJO del ligamento inguinal</strong> y <strong>MEDIAL a la vena femoral</strong> (delimitada medialmente por el ligamento lacunar de Gimbernat y posteriormente por el ligamento de Cooper). Es más frecuente en mujeres multíparas añosas. Debido a la rigidez inextensible del anillo crural, presenta el <strong>mayor riesgo de atascamiento y estrangulación (hasta 30-40%)</strong>.'
        ]
      },
      {
        subhead: '2. Formas Clínicas y Complicaciones: Reductible vs Atascada vs Estrangulada',
        paragraphs: [
          '<strong>Hernia Reductible:</strong> El contenido del saco herniario ingresa espontáneamente a la cavidad peritoneal al adoptar el decúbito o mediante maniobra manual suave. Puede ser <em>coercible</em> (permanece reducida) o <em>incoercible</em> (reaparece de inmediato al ponerse de pie).',
          '<strong>Hernia Incarcerada o Atascada:</strong> El contenido no se puede reducir a la cavidad peritoneal debido a estrechez del anillo o adherencias, pero el <strong>flujo vascular mesentérico está preservado</strong>. El paciente presenta una masa dolorosa irreductible, sin signos inflamatorios cutáneos locales ni repercusión sistémica.',
          '<strong>Hernia Estrangulada:</strong> Urgencia quirúrgica extrema. Ocurre compresión vascular del pedículo mesentérico con isquemia arterial, necrosis parietal, traslocación bacteriana y gangrena del asa atrapada. Se manifiesta por <strong>dolor exquisito desproporcionado, enrojecimiento, calor y edema de la piel suprayacente, fiebre, taquicardia, íleo obstructivo y leucocitosis</strong>.',
          '<em>Regla de Oro EUNACOM:</em> <strong>ESTÁ FORMALMENTE PROHIBIDO INTENTAR REDUCIR (TAXIS) UNA HERNIA ESTRANGULADA</strong>, ya que reintroducir un asa necrosada o perforada al abdomen produce una peritonitis fecaloidea generalizada catastrófica y shock séptico (<em>reducción en masa</em>).',
          '<strong>Variedades epónimas de alta rentabilidad:</strong> 1) <strong>Hernia de Richter:</strong> Atascamiento de solo una porción del borde antimesentérico del asa, pudiendo necrosarse y perforarse sin causar obstrucción mecánica luminal completa; 2) <strong>Hernia de Littré:</strong> Contiene un Divertículo de Meckel en el saco; 3) <strong>Hernia de Amyand:</strong> Contiene el apéndice cecal dentro del saco inguinal; 4) <strong>Hernia de Maydl:</strong> Hernia en "W" con estrangulación del asa intraabdominal intermedia.'
        ]
      },
      {
        subhead: '3. Diagnóstico Clínico y Exámenes Complementarios',
        paragraphs: [
          'El diagnóstico de la hernia inguinal es <strong>eminentemente clínico</strong>. Se evalúa al paciente de pie y en decúbito. Mediante la introducción del dedo índice del examinador a través del orificio inguinal superficial invaginando la piel escrotal, se solicita al paciente realizar la <strong>maniobra de Valsalva</strong> (pujar o toser):',
          '• Si el impulso choca contra la <strong>punta del dedo</strong> del examinador que avanza por el trayecto inguinal, corresponde a una <strong>hernia indirecta</strong>.',
          '• Si el impulso empuja la <strong>yema o cara anterior del dedo</strong> desde la pared posterior del canal, corresponde a una <strong>hernia directa</strong>.',
          'Las imágenes (ecografía de partes blandas o TAC de abdomen y pelvis) se reservan para dudas diagnósticas en pacientes obesos, dolor inguinal sin masa palpable evidente (descartar pubalgia o tendinopatía de aductores) o hernias incisionales complejas multiloculadas con pérdida de domicilio.'
        ]
      },
      {
        subhead: '4. Tratamiento Quirúrgico: Hernioplastia Libre de Tensión y Laparoscopía',
        paragraphs: [
          'El tratamiento definitivo de la hernia en adultos es siempre quirúrgico, ya que no existe cicatrización espontánea y el orificio tiende a agrandarse progresivamente con riesgo constante de atascamiento.',
          '<strong>Técnica Abierta de Lichtenstein:</strong> Es el estándar de oro de la hernioplastia inguinal abierta. Consiste en la colocación de una <strong>malla protésica de polipropileno libre de tensión</strong> fijada al ligamento inguinal y tendón conjunto para reforzar toda la pared posterior del canal inguinal, reduciendo la tasa de recidiva a menos del 1-2%. Las técnicas anatómicas con tensión sin malla (Shouldice, Bassini) están relegadas para casos con contaminación bacteriana franca o resección intestinal sucia donde la prótesis está contraindicada.',
          '<strong>Abordaje Laparoscópico (TAPP / TEP):</strong> Indicado preferentemente en <strong>hernias bilaterales</strong> y en <strong>hernias recidivadas</strong> post-cirugía abierta previa (al ingresar por un plano no disecado previamente). TAPP (Transabdominal Preperitoneal) y TEP (Totalmente Extraperitoneal) ofrecen menor dolor postoperatorio precoz y retorno laboral más rápido.',
          '<strong>Hernias en Pediatría:</strong> En niños menores de 15 años, la causa es estrictamente la persistencia del conducto peritoneovaginal permeable (hernia indirecta) con pared muscular posterior intacta; por ello, el tratamiento de elección es la <strong>Herniotomía simple</strong> (disección, ligadura alta y sección del saco herniario a nivel del anillo profundo) <strong>SIN COLOCACIÓN DE MALLA</strong>.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Anatómico y Diferencial: Hernia Inguinal Indirecta vs Directa vs Crural',
      headers: ['Tipo de Hernia', 'Mecanismo Patogénico', 'Relación Anatómica Cardinal', 'Riesgo de Estrangulación y Población'],
      rows: [
        ['Inguinal Indirecta (50%)', 'Congénita (persistencia conducto peritoneovaginal)', 'Emerge por anillo profundo, LATERAL a vasos epigástricos', 'Riesgo moderado; muy frecuente en hombres jóvenes y niños'],
        ['Inguinal Directa (25%)', 'Adquirida (debilidad fascia transversalis en Hesselbach)', 'Protruye en triángulo de Hesselbach, MEDIAL a vasos epigástricos', 'Riesgo bajo de estrangulación (anillo ancho); adultos mayores'],
        ['Crural / Femoral (5-10%)', 'Adquirida (debilidad de tabique crural)', 'POR DEBAJO del ligamento inguinal, medial a vena femoral', 'MÁXIMO RIESGO DE ESTRANGULACIÓN (35-40%); mujeres multíparas'],
        ['Hernia Umbilical', 'Falla de cierre de anillo umbilical fibroso', 'Orificio umbilical en línea media', 'GES en < 15 años; riesgo de estrangulación alto si cuello estrecho']
      ]
    },
    severityTable: {
      title: 'Estratificación Clínica de las Hernias de Pared y Conducta Quirúrgica',
      headers: ['Estado Clínico', 'Definición Fisiopatológica', 'Hallazgos de Examen Físico', 'Estrategia Terapéutica'],
      rows: [
        ['Reductible', 'El contenido herniario entra y sale libremente del saco', 'Masa blanda indolora que protruye con Valsalva y reduce en reposo', 'Cirugía electiva programada (Lichtenstein con malla)'],
        ['Incarcerada / Atascada', 'El contenido no reduce a cavidad; vascularización indemne', 'Masa dolorosa a la palpación, firme, irreductible, sin eritema', 'Intento de reducción manual suave (taxis) si < 4-6 h; si falla: cirugía'],
        ['Estrangulada', 'Isquemia vascular arterial y venosa del asa atrapada', 'Dolor intenso, piel eritematosa violácea, calor local, íleo, fiebre', 'URGENCIA QUIRÚRGICA INMEDIATA; ¡PROHIBIDA TAXIS MANUAL!'],
        ['Hernia con Pérdida de Domicilio', '> 50% de vísceras abdominales residen crónicamente en saco', 'Abdomen retráctil con saco gigante irreductible de larga data', 'Preparación preoperatoria con neumoperitoneo progresivo (Goni Moreno)']
      ]
    },
    treatmentTable: {
      title: 'Técnicas Quirúrgicas de Reparación de Hernias Inguinales y Crurales',
      headers: ['Técnica Quirúrgica', 'Tipo de Abordaje / Material', 'Indicación Primaria', 'Ventajas y Prevención de Complicaciones'],
      rows: [
        ['Técnica de Lichtenstein', 'Abierta, libre de tensión, malla polipropileno', 'Estándar en hernia inguinal primaria del adulto', 'Baja recidiva (< 1%), anestesia local o raquídea ambulatoria'],
        ['TAPP / TEP Laparoscópica', 'Laparoscópica preperitoneal con malla', 'Hernias bilaterales y hernias recidivadas', 'Menor dolor postoperatorio, evita cicatrices previas'],
        ['Herniotomía Pediátrica', 'Abierta, ligadura alta exclusiva del saco', 'Hernia inguinal en lactantes y niños < 15 años', 'NO USAR MALLA en pediatría; respeta el crecimiento parietal'],
        ['Reparación de Hernia Crural', 'Técnica de McVay (a Cooper) o malla cónica (plug)', 'Hernia femoral confirmada reducible o atascada', 'Cierre estricto del anillo crural para evitar recidiva'],
        ['Hernia Estrangulada Séptica', 'Laparotomía, enterectomía de asa desvitalizada', 'Urgencia por necrosis intestinal peritonítica', 'Evitar mallas de polipropileno en campo purulento sucio']
      ]
    },
    vignette: 'Mujer de 76 años, hipertensa y multípara de 4 hijos, consulta en el servicio de urgencia por cuadro de 10 horas de evolución caracterizado por la aparición súbita de una masa intensamente dolorosa en la región de la ingle derecha, asociado a náuseas y vómitos alimentarios en tres oportunidades. Al examen físico: PA 135/85 mmHg, FC 98 lpm, afebril. A la inspección de la región inguinal derecha se aprecia una masa nodular de 2.5 cm, dura, muy sensible, irreductible a la palpación suave, ubicada inmediatamente por debajo del ligamento inguinal y medial al pulso de la arteria femoral, con ligero enrojecimiento de la piel suprayacente. El abdomen se encuentra discretamente distendido con ruidos metálicos.',
    explicacion: 'El cuadro corresponde a una hernia crural o femoral derecha atascada con sospecha de sufrimiento isquémico (estrangulación precoz), evidenciado por la localización estricta por debajo del ligamento inguinal medial a los vasos femorales, la irreductibilidad, el dolor exquisito, los cambios inflamatorios cutáneos iniciales y los signos de obstrucción mecánica intestinal incipiente. Debido a la rigidez del anillo crural, estas hernias evolucionan velozmente a la necrosis transmural del asa. Está formalmente contraindicada la reducción manual (taxis). La conducta correcta e inmediata es régimen cero, vía venosa periférica, analgesia endovenosa, antibióticos profilácticos preoperatorios y traslado urgente a pabellón para exploración quirúrgica, descompresión del anillo crural, evaluación de la viabilidad del asa herniada y hernioplastia.',
    keyPoints: [
      'Hernia indirecta = congénita, sale por anillo profundo, lateral a vasos epigástricos, desciende a escroto, más común en jóvenes.',
      'Hernia directa = adquirida, triángulo de Hesselbach, medial a vasos epigástricos, debilidad de fascia transversalis.',
      'Hernia crural = por debajo del ligamento inguinal y medial a vena femoral; máxima tasa de estrangulación (30-40%) en mujeres añosas.',
      'Hernia estrangulada = dolor severo + signos inflamatorios cutáneos + íleo; CONTRAINDICADA LA REDUCCIÓN MANUAL (TAXIS).',
      'Hernia de Richter = pinzamiento del borde antimesentérico con isquemia y necrosis sin obstrucción luminal completa.',
      'En adultos, la técnica abierta de elección es Lichtenstein (malla de polipropileno libre de tensión); laparoscopía en bilaterales y recidivadas.',
      'En niños menores de 15 años el tratamiento es herniotomía simple con ligadura alta del saco SIN MALLA (Garantía GES N° 58).'
    ],
    questions: [
      {
        stem: 'Un hombre de 26 años acude a control médico por presentar un aumento de volumen en la región inguinal derecha que aumenta al levantar peso y desciende hacia el escroto. Al examen físico con el paciente en bipedestación, se introduce el dedo a través del orificio inguinal superficial y al solicitarle que tosa, se percibe un claro impulso que choca contra la punta del dedo explorador. ¿Cuál es la estructura anatómica que sirve como límite medial para el orificio de salida de esta hernia?',
        options: [
          { id: 'A', text: 'Arteria y vena epigástricas inferiores' },
          { id: 'B', text: 'Borde lateral del músculo recto anterior del abdomen' },
          { id: 'C', text: 'Ligamento lacunar de Gimbernat' },
          { id: 'D', text: 'Tracto iliopúbico de Thompson' },
          { id: 'E', text: 'Ligamento pectíneo de Cooper' }
        ],
        correcta: 'A',
        explicacion: 'El cuadro clínico (paciente joven, hernia que desciende al escroto y cuyo impulso choca contra la punta del dedo en el canal) corresponde a una hernia inguinal indirecta. Las hernias inguinales indirectas emergen a través del anillo inguinal profundo, el cual se ubica anatómicamente LATERAL a los vasos epigástricos inferiores. Por lo tanto, los vasos epigástricos inferiores constituyen el límite medial del orificio herniario profundo.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.1.021'
      },
      {
        stem: 'Una mujer de 74 años consulta en urgencias por dolor intenso y una masa palpable no reductible en la región inguinocrural derecha de 8 horas de evolución, con eritema cutáneo local y náuseas. Al examen se palpa un nódulo irreductible de 3 cm inmediatamente por debajo del ligamento inguinal. ¿Cuál de las siguientes acciones está FORMALMENTE CONTRAINDICADA?',
        options: [
          { id: 'A', text: 'Indicar hidratación endovenosa y analgesia parenteral' },
          { id: 'B', text: 'Realizar maniobras de compresión y reducción manual forzada (taxis)' },
          { id: 'C', text: 'Solicitar hemograma y pruebas de coagulación preoperatorias' },
          { id: 'D', text: 'Indicar profilaxis antibiótica endovenosa antes de pabellón' },
          { id: 'E', text: 'Programar exploración quirúrgica de urgencia en pabellón central' }
        ],
        correcta: 'B',
        explicacion: 'La paciente presenta una hernia crural estrangulada (dolor severo, irreductibilidad, eritema cutáneo y horas de evolución). Intentar una reducción manual forzada (taxis) está estrictamente proscrito porque puede reducir en masa un asa intestinal isquémica, gangrenada o perforada hacia la cavidad abdominal libre, desencadenando una peritonitis fecaloidea fulminante y shock séptico.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.1.021'
      },
      {
        stem: '¿Cuál es la técnica quirúrgica estándar de elección para la reparación primaria de una hernia inguinal en un adulto de 52 años en cirugía electiva abierta?',
        options: [
          { id: 'A', text: 'Hernioplastia libre de tensión con malla de polipropileno (Técnica de Lichtenstein)' },
          { id: 'B', text: 'Reparación anatómica por planos con tensión muscular (Técnica de Bassini)' },
          { id: 'C', text: 'Herniotomía simple con ligadura alta del saco sin colocar prótesis' },
          { id: 'D', text: 'Cierre exclusivo del orificio con sutura invaginante de Marcy' },
          { id: 'E', text: 'Implantación de tapón biológico reabsorbible de colágeno' }
        ],
        correcta: 'A',
        explicacion: 'La hernioplastia libre de tensión según la técnica de Lichtenstein es el estándar de oro de la cirugía herniaria inguinal abierta en adultos. Consiste en interponer una malla protésica de polipropileno que refuerza el piso del canal inguinal sin traccionar los tejidos musculares, asociándose a una tasa de recidiva menor al 1% y permitiendo una rápida recuperación.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.1.021'
      },
      {
        stem: 'Un lactante de 14 meses presenta aumento de volumen inguinal derecho que aparece con el llanto y se reduce fácilmente en reposo. El examen confirma una hernia inguinal indirecta reductible. Según las normas clínicas y la Garantía Explícita en Salud (GES N° 58), ¿cuál es el procedimiento quirúrgico indicado?',
        options: [
          { id: 'A', text: 'Hernioplastia abierta con colocación de malla de polipropileno de baja densidad' },
          { id: 'B', text: 'Herniotomía simple con ligadura alta del saco herniario sin uso de malla' },
          { id: 'C', text: 'Manejo expectante con bragueros compresivos hasta los 5 años de edad' },
          { id: 'D', text: 'Reparación laparoscópica con fijación de malla preperitoneal TEP' },
          { id: 'E', text: 'Punción evacuadora percutánea del saco herniario' }
        ],
        correcta: 'B',
        explicacion: 'En pacientes pediátricos (menores de 15 años), la hernia inguinal se debe casi exclusivamente a la persistencia del conducto peritoneovaginal embrionario permeable, manteniendo una pared muscular inguinal sana. El tratamiento garantizado por el GES N° 58 es la herniotomía simple (disección y ligadura alta del saco a nivel del anillo profundo). El uso de mallas protésicas está formalmente proscrito en niños porque interfiere con el crecimiento normal de las estructuras de la pared abdominal y del cordón espermático.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.1.021'
      }
    ]
  },
  // ==========================================================================
  // TEMA 11.7: PATOLOGÍA ORIFICIAL BENIGNA (TIER 2 · 2-3 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-07',
    classId: 'cirugia-07',
    tier: 2,
    blockNum: 2,
    blockName: 'Pared Abdominal, Hernias & Proctología',
    topicLabel: '11.7',
    title: 'Patología Orificial Benigna: Fisura Anal, Hemorroides Internas/Externas & Abscesos/Fístulas',
    perfilCode: '4.01.1.016, 4.01.1.017',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Completo',
    ges: 'Sin garantía GES específica · Manejo médico de primera línea en atención primaria y derivación quirúrgica para abscesos anorrectales o patología refractaria.',
    reconstrucciones: 'EUNACOM Julio 2023 (Q#121) · EUNACOM Diciembre 2019 (Q#45)',
    frecuencia: 'Alta frecuencia en el EUNACOM · Motivo de consulta proctológica más común en atención primaria y urgencias',
    diagram: flowCirugia('Diagnóstico Diferencial y Algoritmo Terapéutico en Patología Orificial', [
      { t: 'Paciente con Síntomas Anorrectales (Dolor anal, Sangrado, Masa o Supuración)', s: 'Anamnesis dirigida: Relación con defecación + Tipo de sangrado + Tiempo de evolución', type: 'acc' },
      { t: 'Inspección Anal Cuidadosa y Separación Suave de Glúteos', s: 'Visualización de fisura en línea media, paquetes hemorroidales o abombamiento eritematoso', type: 'warn' },
      { k: 'split', q: '¿Síntoma Predominante y Hallazgo Físico Principal?', s: 'Diferenciación entre dolor lancinante, sangrado indoloro o masa pulsátil',
        ll: 'Dolor defecatorio lacerante intenso ("vidrios") + Sangre escasa',
        left: { t: 'Fisura Anal Aguda / Crónica', s: 'Línea media posterior (90%) · Tríada de Brodie · Manejo médico: Diltiazem tópico 2% / Baños asiento', type: 'dec' },
        rl: 'Masa dolorosa perianal eritematosa y pulsátil continua',
        right: { t: 'Absceso Anorrectal Agudo', s: 'Infección criptoglandular · DRENAJE QUIRÚRGICO DE URGENCIA INMEDIATO (No esperar fluctuación)', type: 'crit' }
      },
      { t: 'Sangrado Rojo Rutilante Indoloro en Gotas / Prolapso', s: 'Hemorroides internas (Grados I a IV) · Grado I-II: Médico/Bandas · Grado III-IV: Cirugía', type: 'acc' },
      { t: 'Trombosis Hemorroidal Externa Aguda (< 72 horas)', s: 'Masa azulada dolorosa en margen anal · Enucleación o trombectomía bajo anestesia local', type: 'acc' }
    ]),
    contexto: 'La patología orificial benigna agrupa las afecciones más frecuentes del canal anal. Su enfrentamiento se basa en semiología rigurosa: el dolor anal severo defecatorio orienta a fisura anal; el dolor continuo pulsátil con masa sugiere un absceso anorrectal; el dolor brusco con nódulo azulado es una trombosis hemorroidal externa; y el sangrado rectal indoloro rutilante post-defecación es característico de hemorroides internas. La regla cardinal en el EUNACOM es que todo absceso anorrectal se drena quirúrgicamente de inmediato sin esperar fluctuación ni limitarse a antibióticos.',
    contentSections: [
      {
        subhead: '1. Fisura Anal: Etiopatogenia, Tríada de Brodie y Manejo Escalonado',
        paragraphs: [
          'La fisura anal es una úlcera o desgarro longitudinal del anodermo por debajo de la línea dentada, extendiéndose hasta el margen anal. En más del <strong>90% de los casos se localiza en la línea media posterior</strong>, zona con menor irrigación sanguínea capilar y mayor debilidad anatómica. Es desencadenada por el paso de deposiciones duras en pacientes con constipación, generando un círculo vicioso de dolor, <strong>hipertonía e isquemia del esfínter anal interno (EAI)</strong>.',
          '<strong>Cuadro clínico clásico:</strong> Dolor anal lacerante exquisito, descrito como "cortadura por cristales rotos", que inicia durante la defecación y persiste intensamente durante varias horas posteriores, acompañado de escasa rectorragia roja fresca en el papel higiénico.',
          'En la <strong>fisura anal crónica</strong> (> 6-8 semanas) se observa la clásica <strong>Tríada de Brodie</strong>: 1) Úlcera profunda con visualización de las fibras circulares blancas del esfínter interno en su base; 2) Plicoma o papila anal hipertrófica en el extremo superior proximal; y 3) Hemorroide centinela o colgajo cutáneo en el extremo distal exterior.',
          '<strong>Tratamiento médico de 1ª línea (éxito > 80%):</strong> Dieta rica en fibra y abundante agua para heces blandas, baños de asiento con agua tibia (relajan el esfínter por termoterapia) y bloqueadores de canales de calcio tópicos como <strong>Diltiazem gel al 2%</strong> (o nitroglicerina ungüento al 0.2%) aplicados en el canal anal dos a tres veces al día por 6 a 8 semanas.',
          '<strong>Tratamiento quirúrgico de 2ª línea:</strong> <strong>Esfinterotomía Lateral Interna (ELI)</strong>, estándar de oro para fisuras crónicas refractarias al tratamiento médico conservador.'
        ]
      },
      {
        subhead: '2. Enfermedad Hemorroidal: Internas vs Externas y Trombosis Aguda',
        paragraphs: [
          'Las hemorroides son almohadillas vasculares submucosas normales compuestas por sinusoides arteriovenosos, músculo liso (músculo de Treitz) y tejido conectivo fibroelástico, cuya función es contribuir a la continencia anal fina.',
          '<strong>Hemorroides Internas:</strong> Situadas por encima de la línea dentada (plexo hemorroidal superior), cubiertas por epitelio columnar insensible al dolor somático. Se manifiestan clásicamente por <strong>rectorragia roja rutilante indolora</strong> al final de la deposición (goteo en la taza o estrías en las heces) y sensación de prolapso anal. Se clasifican en 4 grados: <strong>Grado I:</strong> Sangran pero no prolapsan; <strong>Grado II:</strong> Prolapsan al defecar pero se reducen espontáneamente; <strong>Grado III:</strong> Prolapsan y requieren reducción manual; <strong>Grado IV:</strong> Prolapso permanente irreductible. Tratamiento: Grados I-II con medidas higiénico-dietéticas o ligadura con bandas elásticas en policlínico; Grados III-IV con <strong>Hemorroidectomía quirúrgica</strong> (técnica de Milligan-Morgan abierta o Ferguson cerrada).',
          '<strong>Hemorroides Externas:</strong> Situadas por debajo de la línea dentada (plexo hemorroidal inferior), cubiertas por anodermo ricamente inervado por nervios rectales inferiores somáticos. Son habitualmente asintomáticas salvo que sufran una <strong>Trombosis Hemorroidal Externa Aguda</strong> (aparición súbita tras esfuerzo defecatorio de una masa nodular azulada, violácea, tensa y exquisitamente dolorosa en el margen anal). Conducta en trombosis: Si consulta en las <strong>primeras 72 horas</strong>, el tratamiento de elección es la <strong>trombectomía o enucleación del coágulo bajo anestesia local</strong> en sala de procedimiento, aliviando el dolor de forma instantánea. Si consulta después de 72 horas, el dolor ya va en remisión espontánea y se indica manejo conservador con calor local, analgésicos orales y reposo.'
        ]
      },
      {
        subhead: '3. Abscesos y Fístulas Anorrectales: Criptoglandular y Goodsall',
        paragraphs: [
          'Tanto los abscesos como las fístulas son dos fases evolutivas de una misma enfermedad de origen <strong>criptoglandular (teoría de Eisenhammer)</strong>: se inician por la obstrucción e infección bacteriana aguda de las glándulas anales que desembocan en las criptas de Morgagni a nivel de la línea pectínea.',
          '<strong>Absceso Anorrectal:</strong> Fase aguda supurativa. El más frecuente es el <strong>absceso perianal (60%)</strong>, seguido del isquiorrectal (30%). Se manifiesta por dolor perianal continuo, pulsátil, progresivo, no ligado exclusivamente a la defecación, que impide sentarse, acompañado de tumefacción eritematosa, indurada y caliente. <strong>REGLA DE ORO EUNACOM: El tratamiento de TODO absceso perianal es el DRENAJE QUIRÚRGICO DE URGENCIA INMEDIATO</strong> bajo anestesia local o regional con incisión amplia en cruz o elíptica. <em>Nunca se debe postergar el drenaje esperando que fluctúe ni pretender tratarlo exclusivamente con antibióticos</em>, por el riesgo inminente de extensión al espacio isquiorrectal o sepsis perineal severa (Gangrena de Fournier).',
          '<strong>Fístula Anorrectal:</strong> Fase crónica comunicante que se desarrolla en el 30-50% de los pacientes tras el drenaje de un absceso. Consiste en un trayecto epitelizado que comunica un orificio interno (en la cripta de la línea dentada) con un orificio externo perianal cutáneo que supura material purulento o serosanguinolento crónico. La <strong>Regla de Goodsall</strong> predice el trayecto fistuloso: las fístulas con orificio externo anterior a una línea transversa imaginaria siguen un trayecto radial recto hacia la cripta más cercana; las fístulas con orificio externo posterior siguen un trayecto curvo hacia la línea media posterior.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial Cardinal en Patología Orificial Benigna',
      headers: ['Patología Proctológica', 'Síntoma Principal Guía', 'Hallazgo Físico Patognomónico', 'Conducta Terapéutica de Elección'],
      rows: [
        ['Fisura Anal', 'Dolor lacerante exquisito defecatorio persistente', 'Desgarro lineal anodérmico en línea media posterior (90%)', 'Médico: Fibra, baños de asiento, Diltiazem tópico 2% (o ELI)'],
        ['Hemorroides Internas', 'Rectorragia roja rutilante indolora post-defecación', 'Prolapso de paquetes mucosos vasculares con Valsalva', 'Grado I-II: Dieta/Bandas elásticas · Grado III-IV: Hemorroidectomía'],
        ['Trombosis Hemorroidal', 'Dolor brusco severo continuo no defecatorio', 'Nódulo violáceo tenso, palpable, azulado en margen anal', '< 72 h: Trombectomía bajo anestesia local · > 72 h: Conservador'],
        ['Absceso Perianal', 'Dolor pulsátil continuo severo, tumefacción', 'Masa indurada eritematosa caliente perianal dolorosa', 'DRENAJE QUIRÚRGICO INMEDIATO (No esperar fluctuación)'],
        ['Fístula Anorrectal', 'Supuración purulenta crónica intermitente indolora', 'Orificio cutáneo perianal permeable con cordón fibroso', 'Fistulotomía o colocación de sedal (seton) según trayecto']
      ]
    },
    vignette: 'Hombre de 41 años consulta en el servicio de urgencia por intenso dolor anal de 2 días de evolución, de carácter pulsátil y continuo, que le impide sentarse y caminar con normalidad, acompañado de sensación febril y malestar general. No ha presentado sangrado rectal franco. Al examen físico en posición de decúbito lateral con glúteos separados, se aprecia en el cuadrante posterolateral derecho del margen perianal una zona de aumento de volumen de 4 cm de diámetro, francamente eritematosa, caliente al tacto y extremadamente dolorosa a la palpación digital superficial, indurada, sin fluctuación evidente en este momento. La temperatura axilar es de 38.0 °C.',
    explicacion: 'El cuadro clínico y el examen físico son diagnósticos de un absceso perianal agudo en fase de flemón/celulitis indurada. La conducta mandataria, inaplazable y de elección ante la confirmación clínica de cualquier absceso perianal es el drenaje quirúrgico de urgencia inmediato mediante incisión amplia cercana al margen anal bajo anestesia local o regional, con desbridamiento digital de los tabiques y evacuación del pus. Un error grave y recurrente en el examen EUNACOM es indicar antibióticos orales exclusivos o diferir el procedimiento esperando que la lesión "madure o fluctúe", lo cual predispone a la extensión de la infección hacia la fosa isquiorrectal o el desarrollo de una fascitis necrotizante perineal (Gangrena de Fournier).',
    keyPoints: [
      'Dolor lacerante ("cristales rotos") durante y tras la defecación = fisura anal (90% línea media posterior).',
      'El tratamiento de 1ª línea de la fisura anal es médico: fibra, agua, baños de asiento tibios y Diltiazem tópico al 2%.',
      'Esfinterotomía lateral interna (ELI) es el estándar quirúrgico para la fisura anal crónica refractaria.',
      'Hemorroides internas = sangrado rojo rutilante indoloro en gotas; Grado I-II bandas elásticas, Grado III-IV hemorroidectomía.',
      'Trombosis hemorroidal externa < 72 horas se trata con trombectomía/enucleación del coágulo bajo anestesia local.',
      'TODO absceso anorrectal se DRENA QUIRÚRGICAMENTE DE INMEDIATO; no esperar fluctuación ni tratar solo con antibióticos.',
      'La Regla de Goodsall predice el trayecto fistuloso: orificios anteriores trayecto recto, posteriores trayecto curvo a la línea media.'
    ],
    questions: [
      {
        stem: 'Un hombre de 34 años con antecedentes de constipación consulta por intenso dolor anal desgarrador durante la evacuación que persiste durante varias horas después de defecar, asociado al manchado de escasa sangre roja fresca en el papel higiénico. A la separación suave de los glúteos se visualiza un desgarro longitudinal superficial en la línea media posterior del margen anal. ¿Cuál es el tratamiento inicial de primera línea más apropiado?',
        options: [
          { id: 'A', text: 'Esfinterotomía lateral interna de urgencia' },
          { id: 'B', text: 'Régimen rico en fibra, abundante agua, baños de asiento tibios y Diltiazem tópico al 2%' },
          { id: 'C', text: 'Antibioticoterapia parenteral con ceftriaxona más metronidazol' },
          { id: 'D', text: 'Infiltración local de corticoides de depósito en la mucosa anal' },
          { id: 'E', text: 'Cauterización química inmediata de la lesión con nitrato de plata' }
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta una fisura anal aguda típica en la línea media posterior. El tratamiento médico conservador de primera línea logra la curación en más del 80-90% de los casos y consiste en reblandecer las deposiciones mediante dieta rica en fibra y agua, baños de asiento con agua tibia (que disminuyen el tono del esfínter anal interno) y aplicación tópica de relajantes del esfínter como Diltiazem al 2% o nitroglicerina al 0.2%. La cirugía (esfinterotomía lateral interna, A) se reserva para fisuras crónicas que fracasan tras 6-8 semanas de terapia médica.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.1.016'
      },
      {
        stem: 'Un paciente de 48 años consulta por 36 horas de dolor anal pulsátil severo y continuo, que le impide conciliar el sueño y sentarse. Al examen físico se aprecia una masa eritematosa, tensa, indurada y muy dolorosa de 3.5 cm en la región perianal izquierda, sin fluctuación clara aún a la palpación. El paciente está afebril y hemodinámicamente estable. ¿Cuál es la conducta médica correcta?',
        options: [
          { id: 'A', text: 'Indicar ciprofloxacino más metronidazol oral por 7 días y reevaluar cuando haya fluctuación' },
          { id: 'B', text: 'Realizar drenaje quirúrgico inmediato bajo anestesia' },
          { id: 'C', text: 'Indicar analgésicos antiinflamatorios orales y reposo en cama' },
          { id: 'D', text: 'Solicitar resonancia magnética de pelvis para confirmar la presencia de líquido purulento' },
          { id: 'E', text: 'Punción aspirativa con aguja fina en el policlínico ambulatorio' }
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta un absceso perianal en fase aguda. El principio fundamental del manejo de todo absceso anorrectal es el DRENAJE QUIRÚRGICO DE URGENCIA INMEDIATO. Esperar a que la lesión "fluctúe" o intentar tratarla exclusivamente con antibióticos (A) es un error médico mayor que favorece la diseminación profunda de la infección hacia las fosas isquiorrectales, la formación de fístulas complejas o la progresión hacia sepsis y gangrena de Fournier.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.1.017'
      }
    ]
  },
  // ==========================================================================
  // TEMA 11.8: PATOLOGÍA PILONIDAL, HIDROSADENITIS & TUMORES DE PARTES BLANDAS (TIER 2 · 2-3 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-08',
    classId: 'cirugia-08',
    tier: 2,
    blockNum: 2,
    blockName: 'Pared Abdominal, Hernias & Proctología',
    topicLabel: '11.8',
    title: 'Patología Pilonidal, Hidrosadenitis & Tumores Benignos de Partes Blandas',
    perfilCode: '4.01.1.018, 4.01.1.053',
    dx: 'Sospecha',
    tx: 'Inicial',
    seg: 'Completo',
    ges: 'Sin garantía GES específica · Cirugía ambulatoria menor en atención primaria y pabellón ambulatorio.',
    reconstrucciones: 'EUNACOM Julio 2020 (Q#71) · EUNACOM Diciembre 2016 (Q#105) · EUNACOM Julio 2014 (Q#82)',
    frecuencia: 'Media frecuencia en el EUNACOM · Patología dermatológica y de partes blandas de resolución quirúrgica frecuente',
    diagram: flowCirugia('Enfrentamiento Clínico de Patología Pilonidal y Lesiones de Partes Blandas', [
      { t: 'Lesión Inflamatoria o Tumefacción en Piel y Partes Blandas', s: 'Identificación anatómica: Hendidura interglútea vs Pliegues axilares/inguinales vs Tejido celular SC', type: 'acc' },
      { t: 'Hendidura Interglútea Sacrococcígea (Orificios en línea media y pelos)', s: 'Enfermedad del Seno Pilonidal (Quiste Pilonidal)', type: 'warn' },
      { k: 'split', q: '¿Fase Evolutiva de la Enfermedad Pilonidal?', s: 'Diferenciación entre fase aguda supurada y fase crónica fistulosa',
        ll: 'Fase Aguda: Absceso Pilonidal Doloroso Fluctuante',
        left: { t: 'Drenaje Quirúrgico Simple Urgente', s: 'Incisión lateral fuera de la línea media + Curetaje de pelos + Curaciones húmedas', type: 'crit' },
        rl: 'Fase Crónica: Fístula / Orificios Asintomáticos o Supurativos',
        right: { t: 'Resección Quirúrgica Electiva en Bloque', s: 'Extirpación completa del trayecto fistuloso · Cierre diferido o colgajo de Limberg/Karydakis', type: 'dec' }
      },
      { t: 'Tumor Subcutáneo Blando Móvil e Indoloro: Lipoma vs Quiste', s: 'Lipoma: Lobulado, móvil, sin poro · Quiste epidérmico: Poro central punctiforme maloliente', type: 'acc' },
      { t: 'Criterios de Biopsia / Malignidad en Masas de Partes Blandas', s: 'Alerta Sarcoma: Tamaño > 5 cm, crecimiento rápido, consistencia pétrea, fijación a planos profundos', type: 'crit' }
    ]),
    contexto: 'La patología de partes blandas es uno de los campos quirúrgicos más comunes en atención primaria. La enfermedad pilonidal afecta a adultos jóvenes hirsutos en el surco natal sacrococcígeo, distinguiéndose tajantemente el manejo de la urgencia aguda (drenaje simple fuera de la línea media) del tratamiento curativo definitivo (resección electiva del seno). En los tumores mesenquimáticos de partes blandas, la regla cardinal es diferenciar un lipoma benigno superficial de un sarcoma de partes blandas, donde una masa mayor a 5 cm profunda y fija obliga a estudio con resonancia magnética previa a cualquier manipulación.',
    contentSections: [
      {
        subhead: '1. Enfermedad del Seno Pilonidal: Patogenia, Fases y Manejo',
        paragraphs: [
          'La <strong>enfermedad pilonidal</strong> (quiste o seno sacrococcígeo) es una afección adquirida producida por la penetración e invaginación de pelos desprendidos en los folículos pilosos dilatados de la hendidura interglútea natal, favorecida por la fricción local al sentarse, el sudor, la obesidad y el vello abundante.',
          '<strong>Fase Aguda (Absceso Pilonidal):</strong> Masa intensamente dolorosa, fluctuante, eritematosa y caliente en la región sacrococcígea superior, con celulitis circundante. <strong>Conducta de urgencia:</strong> Drenaje quirúrgico simple bajo anestesia local con una incisión vertical <em>preferentemente lateralizada (1-2 cm fuera de la línea media)</em> para evitar cicatrices viciosas en el fondo del surco, lavado copioso y curetaje para extraer los mechones de pelos retenidos.',
          '<strong>Fase Crónica (Fístula Pilonidal):</strong> Uno o múltiples orificios puntiformes ciegos (<em>pits</em>) en la línea media del surco sacrococcígeo con salida intermitente de secreción seropurulenta o sanguinolenta y pelos visibles. El tratamiento definitivo curativo es la <strong>resección quirúrgica completa en bloque</strong> del trayecto y sus ramificaciones en un tiempo electivo, pudiendo dejarse cicatrizar por segunda intención (menor recidiva, cierre prolongado en 6-8 semanas) o mediante técnicas de aplanamiento del surco con colgajos asimétricos (Técnica de Karydakis o colgajo en rombo de Limberg) para reducir la tasa de recurrencia.'
        ]
      },
      {
        subhead: '2. Hidrosadenitis Supurativa (Enfermedad de Verneuil)',
        paragraphs: [
          'Es una enfermedad inflamatoria cutánea crónica y recidivante del epitelio folicular de las <strong>glándulas sudoríparas apocrinas</strong>, caracterizada por la formación de nódulos inflamatorios profundos dolorosos, abscesos coalescentes, trayectos fistulosos dérmicos y cicatrices retráctiles desfigurantes (<em>cicatrices en cuerda de violín</em>).',
          'Afecta predominantemente las áreas intertriginosas ricas en glándulas apocrinas: <strong>axilas, regiones inguinales, perineo y pliegues inframamarios</strong>.',
          'El manejo médico incluye medidas higiénicas, cese de tabaquismo (principal desencadenante), antibióticos orales (doxiciclina o combinación de clindamicina + rifampicina en brotes) y terapias biológicas anti-TNF (adalimumab) en casos moderados a severos (Clasificación de Hurley estadios II y III). El tratamiento quirúrgico se reserva para trayectos fistulosos crónicos organizados mediante destechamiento (<em>deroofing</em>) o escisión amplia del tejido glandular comprometido.'
        ]
      },
      {
        subhead: '3. Tumores Benignos de Partes Blandas y Banderas Rojas de Sarcoma',
        paragraphs: [
          '<strong>Lipoma Subcutáneo:</strong> Es el tumor mesenquimático benigno más común del cuerpo humano, compuesto por adipocitos maduros encapsulados. Clínicamente se presenta como una masa blanda, móvil, lobulada, no dolorosa, bien delimitada, situada en el tejido celular subcutáneo de extremidades, tronco o cuello, que se desliza bajo los dedos al palparla ("signo del resbalamiento"). La indicación de extirpación quirúrgica electiva se basa en criterios estéticos, compresión nerviosa o crecimiento progresivo.',
          '<strong>Quiste Epidérmico / Quiste Sebáceo:</strong> Lesión quística dérmica benigna revestida por epitelio escamoso estratificado que acumula queratina laminar blanquecina de olor fétido. Se caracteriza por un <strong>orificio o poro central puntiforme (punctum)</strong> visible adherido a la epidermis. La extirpación quirúrgica debe incluir la <strong>cápsula quística íntegra</strong>; si la cápsula se rompe o queda retenida, la probabilidad de recidiva local es prácticamente del 100%. Si está infectado agudamente (enrojecido y fluctuante), solo debe realizarse incisión y drenaje, difiriendo la exéresis de la cápsula para cuando la inflamación haya cedido.',
          '<strong>Banderas Rojas de Malignidad (Sospecha de Sarcoma de Partes Blandas):</strong>',
          '• <strong>Tamaño > 5 cm de diámetro mayor.</strong>',
          '• <strong>Localización profunda</strong> (subfascial o intramuscular).',
          '• <strong>Crecimiento rápido</strong> o acelerado en pocas semanas/meses.',
          '• <strong>Fijación a planos profundos</strong> óseos o musculares.',
          '• <em>Conducta mandatoria ante banderas rojas:</em> <strong>PROHIBIDA LA RESECCIÓN MARGINAL A CIEGAS</strong>. Se debe solicitar <strong>Resonancia Magnética con contraste</strong> del segmento anatómico afectado y derivar a un centro oncológico terciario para biopsia con aguja gruesa (tru-cut) planificada en el eje de la futura incisión quirúrgica oncológica.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial: Lipoma vs Quiste Epidérmico vs Sarcoma de Partes Blandas',
      headers: ['Característica', 'Lipoma Benigno Subcutáneo', 'Quiste Epidérmico (Sebáceo)', 'Sarcoma de Partes Blandas (Maligno)'],
      rows: [
        ['Capa anatómica', 'Tejo celular subcutáneo superficial', 'Intradérmico adherido a epidermis', 'Profundo (subfascial o intramuscular)'],
        ['Consistencia y bordes', 'Blando, lobulado, bordes netos móviles', 'Elástico, renitente, adherido a piel', 'Duro, pétreo, firme, mal delimitado o lobulado'],
        ['Signo patognomónico', 'Signo del resbalamiento bajo los dedos', 'Poro / Punctum central visible en piel', 'Fijación estricta a planos profundos o hueso'],
        ['Tamaño y evolución', 'Habitualmente < 5 cm, crecimiento lento', 'Varía 1 a 4 cm, puede sobreinfectarse', '> 5 cm, crecimiento rápido e inexorable'],
        ['Tratamiento definitivo', 'Enucleación quirúrgica con cápsula', 'Exéresis completa de la cápsula íntegra', 'Resonancia + Biopsia Tru-Cut + Cirugía oncológica']
      ]
    },
    vignette: 'Hombre de 22 años, estudiante universitario con vello corporal abundante y sobrepeso, consulta por dolor intenso, tumefacción y calor en la región glútea superior de 3 días de evolución, que se intensifica al permanecer sentado frente al computador y le impide dormir decúbito supino. Al examen físico en posición prona se observa en la zona media sacrococcígea interglútea una tumefacción intensamente eritematosa, caliente y fluctuante de 4 cm de diámetro, muy dolorosa al tacto, con un orificio puntiforme central del que emerge un pequeño mechón de pelos negros. No presenta compromiso hemodinámico ni fiebre.',
    explicacion: 'El cuadro corresponde a un absceso sacrococcígeo pilonidal en fase aguda. El tratamiento de urgencia indiscutido es la incisión y drenaje quirúrgico simple de la colección bajo anestesia local, complementado con la extracción meticulosa de los pelos y restos de queratina retenidos en la cavidad mediante curetaje suave y curaciones secundarias con gasa húmeda. Una incisión lateralizada (a 1-2 cm de la línea media) favorece una mejor cicatrización. No está indicada la resección amplia en bloque del trayecto pilonidal durante la fase de infección aguda activa, ya que se asocia a tasas elevadas de dehiscencia de herida e infección severa; la cirugía curativa electiva definitiva se programa semanas después de resuelto el proceso flemoso agudo.',
    keyPoints: [
      'La enfermedad pilonidal se produce por invaginación de pelos en los folículos de la hendidura interglútea en jóvenes.',
      'En fase aguda (absceso pilonidal), la conducta es DRENAJE QUIRÚRGICO SIMPLE con curetaje de pelos (no resección amplia).',
      'La resección en bloque del seno pilonidal se programa de forma ELECTIVA tras resolver el proceso agudo infeccioso.',
      'La hidrosadenitis supurativa compromete glándulas apocrinas en axilas e ingles con fístulas y cicatrices cordonales crónicas.',
      'Quiste epidérmico = orificio o poro central punctiforme adherido a epidermis; extirpación completa de la cápsula para evitar recidiva.',
      'Banderas rojas de Sarcoma de partes blandas: tamaño > 5 cm, localización profunda/subfascial, consistencia dura y crecimiento rápido.',
      'Ante sospecha de Sarcoma, está proscrita la exéresis a ciegas: solicitar Resonancia Magnética y derivar a oncología para biopsia Tru-Cut.'
    ],
    questions: [
      {
        stem: 'Un hombre de 23 años acude a urgencias por una masa fluctuante dolorosa y caliente en la región sacrococcígea interglútea de 48 horas de evolución, compatible con un absceso pilonidal agudo. ¿Cuál es el tratamiento quirúrgico de urgencia más apropiado?',
        options: [
          { id: 'A', text: 'Resección radical amplia en bloque con colgajo de avance fasciocutáneo inmediato' },
          { id: 'B', text: 'Incisión y drenaje quirúrgico simple bajo anestesia local con extracción de pelos' },
          { id: 'C', text: 'Prescripción exclusiva de antibióticos orales por 14 días y reposo estricto' },
          { id: 'D', text: 'Punción aspirativa con jeringa fina ambulatoria' },
          { id: 'E', text: 'Cauterización química con nitrato de plata de los orificios fistulosos' }
        ],
        correcta: 'B',
        explicacion: 'El absceso pilonidal agudo es una colección purulenta cerrada que requiere descompresión quirúrgica inmediata mediante incisión y drenaje bajo anestesia local con curetaje de los detritos pilosos. La resección radical amplia (A) está formalmente contraindicada durante la fase séptica aguda debido al riesgo excesivo de necrosis tisular, dehiscencia de colgajos y fracaso quirúrgico, debiendo reservarse para un tiempo electivo diferido.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.1.018'
      },
      {
        stem: 'Un hombre de 55 años consulta por la aparición de una masa indolora en el muslo derecho de 6 meses de evolución, que ha presentado un crecimiento acelerado en el último mes. Al examen físico se palpa una masa de 7 cm de diámetro, firme, no dolorosa, profundamente adherida a la masa muscular del cuádriceps, sin movilidad respecto a los planos profundos. ¿Cuál es la conducta inicial correcta?',
        options: [
          { id: 'A', text: 'Realizar resección marginal ambulatoria bajo anestesia local en policlínico' },
          { id: 'B', text: 'Solicitar Resonancia Magnética del muslo y derivar a comité oncológico para biopsia con aguja gruesa' },
          { id: 'C', text: 'Punción aspirativa con aguja fina (PAAF) para estudio citológico inmediato' },
          { id: 'D', text: 'Indicar tratamiento con antiinflamatorios no esteroidales y control clínico en 6 meses' },
          { id: 'E', text: 'Realizar ecografía de partes blandas y proceder a enucleación quirúrgica directa' }
        ],
        correcta: 'B',
        explicacion: 'La presencia de una masa de partes blandas con "banderas rojas" (tamaño > 5 cm, localización profunda subfascial/muscular, fijación a planos profundos y crecimiento rápido) confiere una alta probabilidad de Sarcoma de Partes Blandas. Realizar una resección marginal incompleta o a ciegas (A) contamina catastróficamente los compartimentos musculares y empeora el pronóstico de sobrevida y preservación de la extremidad. La conducta normada es solicitar Resonancia Magnética con contraste para evaluar extensión anatómica y derivar a un centro oncológico especializado para una biopsia Tru-cut planificada en el eje quirúrgico definitivo.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.1.053'
      }
    ]
  }
];

module.exports = { bloque2Classes };
