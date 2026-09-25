// Clase 11.6 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-06).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-06',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Anatomía del canal inguinal, hernia indirecta vs directa vs crural, complicaciones y técnica de Lichtenstein',
      say: 'Bienvenidos a la sexta clase de cirugía general. Hoy estudiamos las hernias de la pared abdominal, con énfasis en la región inguinocrural, una de las consultas quirúrgicas más habituales en la práctica médica y en el EUNACOM. Al terminar sabrás diferenciar la hernia indirecta de la directa, reconocer la hernia crural y su alto riesgo de estrangulación, aplicar la técnica de Lichtenstein y recordar la prohibición absoluta de realizar taxis en una hernia estrangulada. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Anatomía y clasificación',
      title: 'Topografía de las hernias de la región inguinocrural',
      nodes: [
        { id: 'ori', col: 0, row: 2, k: 'start', t: 'Región inguinocrural', s: 'Canal inguinal de 4 a 5 cm y anillo crural inferior' },
        { id: 'ind', col: 1, row: 0, k: 'alert', t: 'Hernia Inguinal Indirecta', s: 'Lateral a vasos epigástricos · anillo profundo · escroto' },
        { id: 'dir', col: 1, row: 2, k: 'mech', t: 'Hernia Inguinal Directa', s: 'Medial a vasos epigástricos · triángulo de Hesselbach' },
        { id: 'cru', col: 1, row: 4, k: 'risk', t: 'Hernia Crural o Femoral', s: 'BAJO ligamento inguinal · medial a vena femoral' },
        { id: 'ata', col: 2, row: 1, k: 'trap', t: 'Atascamiento o incarceración', s: 'Irreductible sin compromiso vascular inmediato' },
        { id: 'est', col: 3, row: 2, k: 'alert', t: 'Estrangulación isquémica', s: 'Necrosis transmural · PROHIBIDO REDUCIR MANUALMENTE' },
        { id: 'lic', col: 4, row: 2, k: 'good', t: 'Hernioplastia con malla', s: 'Técnica de Lichtenstein en adultos · ligadura simple en niños' },
      ],
      edges: [
        { from: 'ori', to: 'ind', label: 'anillo profundo' },
        { from: 'ori', to: 'dir', label: 'pared posterior' },
        { from: 'ori', to: 'cru', label: 'anillo femoral' },
        { from: 'ind', to: 'ata', label: 'estrechez anular' },
        { from: 'cru', to: 'ata', label: 'máximo riesgo 40%' },
        { from: 'ata', to: 'est', label: 'oclusión vascular' },
        { from: 'est', to: 'lic', label: 'resolución urgente' },
      ],
      steps: [
        {
          show: ['ori', 'ind'],
          note: 'Hernia inguinal indirecta',
          say: 'El canal inguinal mide cuatro a cinco centímetros de longitud y discurre oblicuo en la región inguinal. La hernia inguinal indirecta es la más frecuente de todas, representando el cincuenta por ciento de los casos. Es de origen congénito por falta de obliteración del conducto peritoneovaginal embrionario. Protruye por el anillo inguinal profundo, situándose lateral a los vasos epigástricos inferiores y descendiendo hacia el escroto o labio mayor.',
        },
        {
          show: ['dir'],
          note: 'Hernia inguinal directa',
          say: 'La hernia inguinal directa representa una cuarta parte de las hernias. Es de origen adquirido y se debe a la debilidad progresiva de la pared posterior del canal inguinal, formada por la fascia transversalis. Protruye a través del triángulo de Hesselbach, situándose medial a los vasos epigástricos inferiores. Es típica de adultos mayores o trabajadores con esfuerzos crónicos y rara vez desciende al escroto.',
        },
        {
          show: ['cru'],
          note: 'Hernia crural o femoral',
          say: 'La hernia crural o femoral protruye a través del anillo crural, ubicándose exactamente por debajo del ligamento inguinal y medial a la vena femoral. Es mucho más frecuente en mujeres multíparas de edad avanzada. Debido a la rigidez inextensible del anillo femoral, presenta la tasa de estrangulación más alta de toda la pared abdominal, alcanzando entre un treinta y cuarenta por ciento.',
        },
        {
          show: ['ata', 'est', 'lic'],
          note: 'De la incarceración a la hernioplastia',
          say: 'Una hernia reductible se reintroduce espontáneamente o con suave presión. Si queda atrapada sin compromiso vascular, hablamos de hernia atascada o incarcerada. Si la compresión ocluye el pedículo mesentérico con isquemia y necrosis, se convierte en hernia estrangulada. En adultos, el tratamiento definitivo de elección es la hernioplastia libre de tensión con malla de Lichtenstein.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología y examen físico',
      title: 'Exploración digital del conducto inguinal y signos clínicos',
      cards: [
        {
          title: 'Maniobra de examen digital del canal',
          kind: 'criteria',
          items: [
            {
              text: 'Exploración con el dedo índice invaginando la piel del escroto hacia el anillo superficial.',
              say: 'El diagnóstico de las hernias inguinales es eminentemente clínico. Se examina al paciente de pie y en decúbito. El examinador introduce la punta del dedo índice invaginando la piel del escroto en sentido craneal y posterior hasta palpar el orificio inguinal superficial y solicita al paciente realizar la maniobra de Valsalva o toser.',
            },
            {
              text: 'Impulso en la punta del dedo: hernia indirecta; impulso en la yema: hernia directa.',
              say: 'Si el saco herniario desciende por el canal y golpea directamente contra la punta del dedo del examinador, corresponde a una hernia inguinal indirecta. Si el saco empuja la yema o cara anterior del dedo emergiendo hacia adelante desde el piso del canal, corresponde a una hernia inguinal directa.',
            },
          ],
        },
        {
          title: 'Regla de oro topográfica: Ligamento inguinal',
          kind: 'key',
          items: [
            {
              text: 'Sobre el ligamento inguinal es hernia inguinal; bajo el ligamento inguinal es hernia crural.',
              say: 'La línea anatómica que une la espina ilíaca anterosuperior con la espina del pubis define el ligamento inguinal. Todo abultamiento herniario originado por encima de esta línea es una hernia inguinal; todo aumento de volumen situado por debajo de dicha línea en la raíz del muslo es una hernia crural.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Formas clínicas',
      title: 'Hernia reductible versus atascada versus estrangulada',
      cards: [
        {
          title: 'Hernia reductible e incarcerada',
          kind: 'criteria',
          items: [
            {
              text: 'Reductible: el contenido regresa a cavidad espontáneamente o con maniobra suave de decúbito.',
              say: 'Una hernia reductible reingresa a la cavidad abdominal al acostarse o mediante una suave compresión manual. Su tratamiento es la hernioplastia electiva ambulatoria para evitar futuras complicaciones.',
            },
            {
              text: 'Atascada o incarcerada: atrapamiento mecánico irreducible sin compromiso vascular.',
              say: 'La hernia incarcerada o atascada se encuentra atrapada por el orificio estrecho y no puede reducirse, pero no presenta compromiso isquémico de la pared intestinal ni signos inflamatorios locales.',
            },
          ],
        },
        {
          title: 'Hernia estrangulada: Emergencia isquémica',
          kind: 'alert',
          items: [
            {
              text: 'Isquemia vascular aguda con riesgo inminente de necrosis transmural y perforación.',
              say: 'La hernia estrangulada es una catástrofe quirúrgica producida por la oclusión del flujo arterial y venoso del asa atrapada. Cursa con dolor intenso y continuo sobre la masa, eritema cutáneo local, calor y fiebre.',
            },
            {
              text: 'Se asocia con frecuencia a signos de obstrucción intestinal mecánica difusa.',
              say: 'Si el asa atrapada ocluye completamente la luz, el paciente desarrolla además vómitos, distensión y detención del tránsito intestinal.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad clínica categórica',
      title: 'Prohibición absoluta de maniobras de taxis en hernia estrangulada',
      cards: [
        {
          title: 'Peligro mortal de la reducción forzada',
          kind: 'alert',
          items: [
            {
              text: 'Está formalmente prohibido realizar taxis o reducción forzada ante sospecha de estrangulación.',
              say: 'Una regla cardinal del EUNACOM: está formalmente prohibido realizar maniobras de taxis o reducción manual forzada ante una sospecha de hernia estrangulada.',
            },
            {
              text: 'Riesgo de reintroducir un asa intestinal necrótica o perforada a la cavidad peritoneal.',
              say: 'Reducir un asa desvitalizada reintroduce un segmento necrótico o perforado a la cavidad libre, provocando peritonitis fecal generalizada, shock séptico fulminante y muerte.',
            },
          ],
        },
        {
          title: 'Conducta inmediata correcta',
          kind: 'key',
          items: [
            {
              text: 'Laparotomía o abordaje quirúrgico inguinal de urgencia inmediata sin demora.',
              say: 'La conducta correcta es mantener al paciente en régimen cero, administrar analgesia endovenosa, hidratación con cristaloides y derivar a pabellón de inmediato para inspección directa de la viabilidad del asa.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Comparativa anatómica y clínica',
      title: 'Diferencias anatómicas y quirúrgicas de las hernias inguinocrurales',
      head: ['Tipo de hernia', 'Relación con vasos epigástricos', 'Mecanismo y población típica', 'Riesgo de estrangulación'],
      rows: [
        {
          cells: [
            'Hernia Inguinal Indirecta',
            'Lateral a los vasos epigástricos inferiores · sale por anillo profundo',
            'Congénita por persistencia del conducto peritoneovaginal · niños, jóvenes y adultos',
            'Moderado; puede descender al escroto constituyendo hernia inguinoescrotal.',
          ],
          say: 'La hernia inguinal indirecta viaja por dentro del cordón espermático, lateral a los vasos epigástricos. Es de causa congénita y afecta a niños, adolescentes y adultos jóvenes. Tiene un riesgo moderado de atascamiento al transitar por el anillo inguinal profundo.',
        },
        {
          cells: [
            'Hernia Inguinal Directa',
            'Medial a los vasos epigástricos inferiores · triángulo de Hesselbach',
            'Adquirida por debilidad de la fascia transversalis · adultos mayores y EPOC',
            'Muy bajo; posee un cuello ancho que rara vez se estrangula o desciende al escroto.',
          ],
          say: 'La hernia directa protruye medial a los vasos epigástricos a través del triángulo de Hesselbach. Su mecanismo es la debilidad adquirida del piso del canal. Su cuello es ancho y complaciente, por lo que el riesgo de estrangulación es extremadamente bajo.',
        },
        {
          cells: [
            'Hernia Crural o Femoral',
            'Por debajo del ligamento inguinal · medial a los vasos femorales',
            'Adquirida en anillo crural inextensible · mujeres añosas y multíparas',
            'Máximo riesgo: treinta a cuarenta por ciento se presentan estranguladas como debut.',
          ],
          say: 'La hernia crural nace bajo el ligamento inguinal, medial a la vena femoral. Afecta sobre todo a mujeres mayores. Dado que los límites del anillo femoral son rígidos y óseos, tiene la mayor tasa de estrangulación de toda la patología herniaria, debutando con frecuencia como abdomen agudo obstructivo.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Hernias ventrales de la línea media',
      title: 'Hernia umbilical del adulto y hernia epigástrica',
      cards: [
        {
          title: 'Hernia umbilical en adultos',
          kind: 'alert',
          items: [
            {
              text: 'Factores predisponentes: obesidad, embarazos múltiples y cirrosis hepática con ascitis.',
              say: 'La hernia umbilical en el adulto es adquirida por aumento crónico de la presión intraabdominal. En pacientes cirróticos con ascitis a tensión, la piel suprayacente puede adelgazarse hasta ulcerarse, presentando riesgo de rotura espontánea y peritonitis bacteriana.',
            },
            {
              text: 'Tratamiento quirúrgico con prótesis de malla si el defecto supera un centímetro y medio.',
              say: 'A diferencia de los niños, en los adultos la hernia umbilical nunca cierra espontáneamente. Defectos mayores a un centímetro y medio se reparan mediante hernioplastia con malla de polipropileno para evitar recidivas.',
            },
          ],
        },
        {
          title: 'Hernia epigástrica de la línea alba',
          kind: 'criteria',
          items: [
            {
              text: 'Protrusión de grasa preperitoneal a través de la línea alba entre apéndice xifoides y ombligo.',
              say: 'La hernia epigástrica se origina por un defecto en el entrecruzamiento de las fibras aponeuróticas de la línea alba. Frecuentemente contiene solo grasa preperitoneal estrangulada, provocando dolor focal agudo que simula una úlcera péptica o pancreatitis.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Patología de pared adquirida',
      title: 'Eventración o hernia incisional postoperatoria',
      cards: [
        {
          title: 'Factores de riesgo mayores',
          kind: 'alert',
          items: [
            {
              text: 'Defecto músculo-aponeurótico en una cicatriz quirúrgica previa.',
              say: 'La eventración o hernia incisional se produce por la reapertura o debilidad cicatrizal de una laparotomía previa. El factor de riesgo número uno con gran diferencia es la infección del sitio quirúrgico en el postoperatorio.',
            },
            {
              text: 'Cofactores biológicos: obesidad, diabetes, desnutrición, tabaquismo y EPOC con tos crónica.',
              say: 'Otros factores de riesgo mayores son la obesidad mórbida, desnutrición con hipoalbuminemia, tabaquismo activo y aumentos repetidos de presión intraabdominal por tos crónica o esfuerzo físico precoz.',
            },
          ],
        },
        {
          title: 'Técnica de reparación',
          kind: 'key',
          items: [
            {
              text: 'Hernioplastia con malla protésica retromuscular libre de tensión.',
              say: 'El tratamiento de elección en adultos es la hernioplastia incisional libre de tensión con colocación de malla retromuscular o preperitoneal, que asegura una resistencia duradera y minimiza la recidiva.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Variedades epónimas de alto rendimiento',
      title: 'Hernias de Richter, Littré, Amyand y Spiegel',
      cards: [
        {
          title: 'Hernia de Richter',
          kind: 'alert',
          items: [
            {
              text: 'Pinzamiento del borde antimesentérico del intestino sin obstruir toda la luz.',
              say: 'La hernia de Richter es el pellizcamiento de solo una porción del borde antimesentérico del asa. Como no ocluye completamente el lumen intestinal, el paciente no presenta distensión ni detención del tránsito, pero el asa se necrosa y perfora rápidamente. Es sumamente traicionera en la práctica médica.',
            },
          ],
        },
        {
          title: 'Hernias de Littré y de Amyand',
          kind: 'criteria',
          items: [
            {
              text: 'Hernia de Littré: presencia de un divertículo de Meckel dentro del saco herniario.',
              say: 'La hernia de Littré se define estrictamente por la presencia de un divertículo de Meckel en el interior del saco herniario.',
            },
            {
              text: 'Hernia de Amyand: presencia del apéndice cecal dentro de una hernia inguinal.',
              say: 'La hernia de Amyand contiene el apéndice cecal inflamado o no dentro de una hernia inguinal, mientras que si está en una hernia crural se denomina hernia de De Garengeot.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Anatomía nerviosa y zonas de peligro',
      title: 'Inervación del canal inguinal y anatomía laparoscópica de seguridad',
      cards: [
        {
          title: 'Nervios en riesgo durante cirugía abierta',
          kind: 'pharma',
          items: [
            {
              text: 'Nervio ilioinguinal: discurre anterior al cordón espermático; riesgo de inguinodinia por atrapamiento.',
              say: 'Durante la técnica abierta de Lichtenstein, el nervio ilioinguinal transcurre paralelo sobre el cordón. Su atrapamiento o lesión produce dolor neuropático crónico severo o inguinodinia en la base del pene y escroto.',
            },
            {
              text: 'Nervio iliohipogástrico y rama genital del genitofemoral.',
              say: 'Estos nervios deben ser minuciosamente respetados para evitar anestesia cutánea y disestesias permanentes en la ingle y muslo.',
            },
          ],
        },
        {
          title: 'Zonas de peligro laparoscópico',
          kind: 'alert',
          items: [
            {
              text: 'Triángulo de la Fatalidad: vasos ilíacos externos entre deferente y vasos espermáticos.',
              say: 'En laparoscopía, el triángulo de la fatalidad alberga los vasos ilíacos externos. Colocar grapas en esta zona produce una hemorragia catastrófica exanguinante.',
            },
            {
              text: 'Triángulo del Dolor: nervios femorales lateral a los vasos espermáticos.',
              say: 'En el triángulo del dolor viajan ramas sensitivas del nervio femoral. Está estrictamente prohibido grapar en esta área para no generar neuralgias irreversibles.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo quirúrgico',
      title: 'Toma de decisiones y tratamiento de la hernia inguinocrural',
      say: 'Revisemos el algoritmo terapéutico para definir la conducta quirúrgica electiva o de urgencia en pacientes con hernias de la pared abdominal.',
    },

    {
      type: 'points',
      kicker: 'Técnicas de reparación',
      title: 'Hernioplastia abierta libre de tensión de Lichtenstein versus Laparoscopía',
      cards: [
        {
          title: 'Técnica de Lichtenstein: Estándar abierto',
          kind: 'key',
          items: [
            {
              text: 'Hernioplastia libre de tensión con malla de polipropileno fijada a las estructuras del canal.',
              say: 'La técnica de Lichtenstein es el estándar de oro de la cirugía abierta. Consiste en fijar una malla de polipropileno sobre la pared posterior del canal inguinal, cubriendo el orificio profundo y el triángulo de Hesselbach sin traccionar los tejidos. Reduce la recidiva a menos del uno por ciento y causa mucho menor dolor postoperatorio que las técnicas antiguas con tensión.',
            },
            {
              text: 'Fijación de la malla al tubérculo del pubis, ligamento inguinal y tendón conjunto.',
              say: 'La malla se sutura inferiormente al ligamento inguinal, medialmente superando la espina del pubis y superiormente sobre el tendón conjunto, creando una nueva pared posterior resistente.',
            },
          ],
        },
        {
          title: 'Abordaje laparoscópico: Indicaciones precisas',
          kind: 'pharma',
          items: [
            {
              text: 'Indicaciones formales de laparoscopía: hernias bilaterales y recidivas tras cirugía abierta previa.',
              say: 'El abordaje laparoscópico mediante técnica totalmente extraperitoneal o transabdominal preperitoneal es la indicación de primera línea indiscutida en dos escenarios: hernias inguinales bilaterales, porque repara ambos lados por los mismos puertos, y en hernias recidivadas tras abordaje anterior previo, ya que evita la fibrosis cicatrizal.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Peculiaridades en pediatría',
      title: 'Manejo en niños: Hernia inguinal congénita y Hernia umbilical',
      cards: [
        {
          title: 'Hernia inguinal en niños',
          kind: 'criteria',
          items: [
            {
              text: 'Siempre es indirecta congénita por persistencia del conducto peritoneovaginal.',
              say: 'En pacientes pediátricos, la hernia inguinal es siempre indirecta y congénita debido a la falta de cierre del proceso vaginal embrionario. No existe debilidad de la fascia transversalis.',
            },
            {
              text: 'Tratamiento quirúrgico: herniotomía simple con ligadura alta del saco sin uso de malla.',
              say: 'Por lo tanto, en niños está prohibido utilizar mallas protésicas. La intervención consiste únicamente en la herniotomía con disección y ligadura alta del saco a nivel del anillo profundo.',
            },
          ],
        },
        {
          title: 'Hernia umbilical en niños',
          kind: 'key',
          items: [
            {
              text: 'Conducta expectante hasta los cuatro años; cierre espontáneo en más del noventa por ciento.',
              say: 'En lactantes y niños pequeños, la hernia umbilical fisiológica se vigila expectante hasta los tres a cuatro años, momento en que más del noventa por ciento ha cerrado espontáneamente sin intervención.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnósticos diferenciales y trampas',
      title: 'Trampas del EUNACOM en aumento de volumen inguinal y testicular',
      head: ['Patología simuladora', 'Hallazgo clínico clave', 'Diferenciación con hernia inguinal', 'Conducta médica'],
      rows: [
        {
          cells: [
            'Hidrocele testicular comunicante o simple',
            'Masa escrotal no dolorosa fluctuante · transiluminación intensamente positiva',
            'El hidrocele permite palpar claramente el cordón espermático normal sobre él en el polo superior.',
            'Ecografía doppler testicular; cirugía electiva ambulatoria si persiste o genera molestias.',
          ],
          say: 'El hidrocele presenta transiluminación positiva intensa y permite palpar el polo superior del cordón sano libre por encima del escroto, a diferencia de la hernia inguinoescrotal cuyo saco viene desde el canal.',
        },
        {
          cells: [
            'Adenitis inguinal o adenoflemón',
            'Masa fija, dolorosa, con signos inflamatorios cutáneos sin relación con maniobra de Valsalva',
            'No tiene impulso con la tos ni reductibilidad; suele haber lesión infectada en extremidad inferior.',
            'Tratamiento antimicrobiano sistémico o drenaje quirúrgico si hay colección fluctuante.',
          ],
          say: 'Una adenopatía inguinal reactiva no se modifica con el esfuerzo o la tos, no es reductible y se asocia a heridas o infecciones en la extremidad inferior o región genital.',
        },
        {
          cells: [
            'Hematoma inguinal precoz post hernioplastia',
            'Aumento de volumen doloroso con equimosis pocas horas tras la cirugía',
            'No es una recidiva herniaria; es sangrado postoperatorio en el lecho del canal inguinal',
            'Compresión suave, reposo y observación si es pequeño; reexploración si es expansivo.',
          ],
          say: 'Si a las pocas horas de una hernioplastia el paciente presenta aumento de volumen doloroso y equimosis local, el diagnóstico es un hematoma postoperatorio precoz, no una recidiva de la hernia.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 144',
      caseText: 'Una paciente de sesenta años consulta por aumento de volumen en la cara anterior del muslo derecho, que en ocasiones es doloroso y se asocia a náuseas y dolor abdominal difuso. Al examen físico se aprecia dicho aumento de volumen situado inmediatamente por debajo del ligamento inguinal. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Linfoma inguinal', isCorrect: false },
        { letter: 'B', text: 'Hernia inguinal directa', isCorrect: false },
        { letter: 'C', text: 'Adenopatía metastásica', isCorrect: false },
        { letter: 'D', text: 'Hernia femoral o crural', isCorrect: true },
        { letter: 'E', text: 'Sarcoma de partes blandas', isCorrect: false },
      ],
      correct: 'D',
      say: {
        stem: 'Revisemos esta pregunta oficial de diciembre de dos mil dieciocho. Una mujer de sesenta años presenta aumento de volumen en la cara anterior del muslo, doloroso y acompañado de síntomas digestivos, ubicado por debajo del ligamento inguinal.',
        question: 'Nos consultan por el diagnóstico más probable entre las opciones.',
        options: 'Las alternativas son: opción A, linfoma inguinal; opción B, hernia inguinal directa; opción C, adenopatía metastásica; opción D, hernia femoral o crural; y opción E, sarcoma de partes blandas. Piénsalo.',
        answer: 'La respuesta correcta es la opción D, hernia femoral o crural. La localización anatómica por debajo del ligamento inguinal en una mujer adulta mayor es la definición patognomónica de la hernia femoral. Su asociación con náuseas y dolor sugiere atascamiento u oclusión incipiente, lo que exige cirugía de urgencia por su alto riesgo de necrosis.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos clave para el EUNACOM',
      title: 'Reglas de oro en hernias de la pared abdominal',
      cards: [
        {
          title: 'Cuatro certezas clínicas',
          kind: 'key',
          items: [
            {
              text: 'Sobre el ligamento es inguinal, bajo el ligamento es crural.',
              say: 'Primera regla: la ubicación anatómica respecto al ligamento inguinal es absoluta: por encima es hernia inguinal, por debajo es hernia crural o femoral.',
            },
            {
              text: 'La hernia crural tiene la mayor tasa de estrangulación (cuarenta por ciento).',
              say: 'Segunda regla: la hernia crural es más frecuente en mujeres mayores y tiene la mayor tasa de estrangulación de toda la patología herniaria.',
            },
            {
              text: 'Prohibido realizar reducción manual o taxis en hernia estrangulada.',
              say: 'Tercera regla: ante una hernia estrangulada con dolor severo, eritema cutáneo o fiebre, está formalmente prohibido realizar taxis por riesgo de peritonitis letal.',
            },
            {
              text: 'Lichtenstein libre de tensión es el estándar de oro en adultos.',
              say: 'Cuarta regla: la hernioplastia de Lichtenstein con malla de polipropileno es el tratamiento estándar de elección en adultos; la laparoscopía se indica en bilaterales y recidivas.',
            },
          ],
        },
        {
          title: 'Idea final',
          kind: 'normal',
          items: [
            {
              text: 'En niños la hernia inguinal se opera sin malla mediante ligadura simple del saco.',
              say: 'Si te llevas una sola idea de hoy: en pediatría la hernia inguinal es congénita y se opera mediante herniotomía simple con ligadura alta del saco sin utilizar mallas protésicas. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo Diagnóstico y Terapéutico en Hernias Inguinocrurales',
    root: N(
      'start',
      'Paciente con aumento de volumen en región inguinocrural',
      'Masa palpable en ingle o raíz del muslo que protruye con el esfuerzo',
      'Iniciamos el enfrentamiento examinando la relación de la masa con el ligamento inguinal y evaluando signos de complicación.',
      [
        'Signos de estrangulación isquémica',
        N(
          'alert',
          'Hernia estrangulada de urgencia',
          'Dolor intenso continuo · eritema cutáneo local · fiebre · oclusión intestinal',
          'Ante signos de compromiso vascular, se prohíbe el taxis y se traslada a pabellón de inmediato.',
          [
            'Conducta de emergencia inmediata',
            N(
              'do',
              'Cirugía exploradora de urgencia',
              'PROHIBIDO TAXIS · pabellón urgente + incisión + evaluar viabilidad intestinal',
              'Se interviene de urgencia para inspeccionar el asa, resecando si existe necrosis o realizando hernioplastia si es viable.',
            ),
          ],
        ),
      ],
      [
        'Masa incarcerada sin estrangulación aguda',
        N(
          'q',
          'Hernia atascada irreductible reciente',
          'Masa irreducible sin eritema cutáneo ni taquicardia ni peritonitis',
          'Si la incarceración tiene pocas horas y no hay signos de estrangulación, se puede intentar reducción suave bajo analgesia.',
          [
            'Reducción suave exitosa',
            N(
              'ok',
              'Hospitalizar y programar hernioplastia diferida precoz',
              'Cirugía electiva prioritaria en la misma hospitalización',
              'Se reduce suavemente y se programa cirugía en las siguientes cuarenta y ocho horas.',
            ),
          ],
          [
            'Falla de reducción o duda clínica',
            N(
              'alert',
              'Pabellón de urgencia',
              'Resolución quirúrgica urgente',
              'Si no reduce suavemente, el paciente va a quirófano sin forzar maniobras.',
            ),
          ],
        ),
      ],
      [
        'Hernia reductible no complicada',
        N(
          'q',
          'Localización anatómica y perfil del paciente',
          'Ubicación sobre versus bajo el ligamento inguinal · edad',
          'Definimos la técnica quirúrgica electiva según el tipo de defecto y antecedentes.',
          [
            'Hernia crural bajo ligamento inguinal',
            N(
              'do',
              'Hernioplastia crural prioritaria',
              'Cirugía electiva precoz por alto riesgo de estrangulación del 40%',
              'La hernia crural se opera prioritariamente debido a su altísimo riesgo de atascamiento.',
            ),
          ],
          [
            'Hernia inguinal unilateral primaria en adulto',
            N(
              'do',
              'Hernioplastia abierta libre de tensión de Lichtenstein',
              'Malla de polipropileno fijada sobre pared posterior del canal',
              'Indicamos la técnica de Lichtenstein abierta como estándar de oro ambulatorio.',
            ),
          ],
          [
            'Hernia inguinal bilateral o recidivada',
            N(
              'do',
              'Hernioplastia laparoscópica TEP o TAPP',
              'Reparación preperitoneal mínimamente invasiva',
              'En bilaterales o recidivas tras Lichtenstein previo, indicamos abordaje laparoscópico.',
            ),
          ],
          [
            'Hernia inguinal en paciente pediátrico',
            N(
              'do',
              'Herniotomía simple sin malla',
              'Disección y ligadura alta del conducto peritoneovaginal',
              'En niños se efectúa herniotomía simple con ligadura alta del saco sin prótesis.',
            ),
          ],
        ),
      ],
    ),
  },
};
