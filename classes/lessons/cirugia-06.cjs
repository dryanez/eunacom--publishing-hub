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
        {
          title: 'Hernia estrangulada y prohibición de taxis',
          kind: 'alert',
          items: [
            {
              text: 'Signos de estrangulación: dolor intenso continuo, eritema cutáneo local, taquicardia y fiebre.',
              say: 'La hernia estrangulada se reconoce por dolor severo e incoercible sobre la masa, eritema o calor en la piel suprayacente, leucocitosis, taquicardia y detención del tránsito intestinal por íleo obstructivo.',
            },
            {
              text: 'Regla categórica: PROHIBIDO INTENTAR REDUCCIÓN MANUAL O TAXIS EN HERNIA ESTRANGULADA.',
              say: 'Una regla cardinal del EUNACOM: está formalmente prohibido realizar maniobras de taxis o reducción manual forzada ante una sospecha de hernia estrangulada. Reducir un asa desvitalizada reintroduce un segmento necrótico o perforado a la cavidad libre, provocando peritonitis fecal generalizada y muerte.',
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
      kicker: 'Variedades epónimas y otras localizaciones',
      title: 'Hernias con epónimo, umbilicales y eventraciones',
      cards: [
        {
          title: 'Hernias epónimas de alto rendimiento',
          kind: 'alert',
          items: [
            {
              text: 'Hernia de Richter: pinzamiento de borde antimesentérico con isquemia sin oclusión total.',
              say: 'La hernia de Richter es el pinzamiento de solo una porción del borde antimesentérico del asa dentro del orificio. Como no ocluye completamente la luz, el paciente no presenta obstrucción intestinal franca ni distensión, pero el segmento pellizcado se necrosa y perfora rápidamente. Es sumamente engañosa en urgencias.',
            },
            {
              text: 'Hernia de Littré y Hernia de Amyand: Meckel y apéndice en el saco.',
              say: 'La hernia de Littré se define por la presencia de un divertículo de Meckel en el saco herniario. La hernia de Amyand contiene el apéndice cecal dentro de una hernia inguinal, mientras que la hernia de De Garengeot contiene el apéndice dentro de una hernia crural.',
            },
          ],
        },
        {
          title: 'Hernia umbilical del niño y del adulto',
          kind: 'criteria',
          items: [
            {
              text: 'En niños: observar hasta los cuatro años; cirugía GES si persiste o mide más de dos centímetros.',
              say: 'En pediatría, la hernia umbilical es un defecto del anillo que cierra espontáneamente en más del noventa por ciento de los niños antes de los tres a cuatro años de edad. Solo se interviene antes si el defecto supera dos centímetros o produce episodios de atascamiento. En adultos, en cambio, no cierra espontáneamente y requiere hernioplastia con malla si mide más de un centímetro y medio.',
            },
          ],
        },
        {
          title: 'Eventración o hernia incisional',
          kind: 'key',
          items: [
            {
              text: 'Defecto en una cicatriz quirúrgica previa; principal factor de riesgo es la infección de herida.',
              say: 'La eventración o hernia incisional es la protrusión visceral a través de una cicatriz quirúrgica abdominal previa. El factor de riesgo principal es haber cursado con infección del sitio quirúrgico en el postoperatorio, seguido de obesidad, diabetes, desnutrición y tabaquismo. Su reparación en adultos se realiza con malla protésica retromuscular libre de tensión.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Anatomía quirúrgica y nervios del canal',
      title: 'Inervación del canal inguinal y zonas de peligro laparoscópico',
      cards: [
        {
          title: 'Nervios en riesgo durante cirugía abierta',
          kind: 'pharma',
          items: [
            {
              text: 'Nervio ilioinguinal: cruza sobre el cordón espermático bajo la aponeurosis del oblicuo mayor.',
              say: 'Durante la hernioplastia abierta de Lichtenstein, el nervio ilioinguinal discurre paralelo y por delante del cordón espermático. Su lesión o atrapamiento en una sutura causa dolor crónico inguinal invalidante o inguinodinia, así como pérdida de sensibilidad en la base del pene y cara anterior del escroto.',
            },
            {
              text: 'Nervio iliohipogástrico y rama genital del nervio genitofemoral.',
              say: 'El nervio iliohipogástrico discurre craneal al cordón y la rama genital del genitofemoral viaja por dentro del cordón inervando el músculo cremáster y la piel escrotal. Deben identificarse y protegerse meticulosamente para evitar secuelas sensitivas y neuralgias postoperatorias.',
            },
          ],
        },
        {
          title: 'Zonas de peligro en hernioplastia laparoscópica',
          kind: 'alert',
          items: [
            {
              text: 'Triángulo de la Fatalidad o del Desastre: delimitado por el conducto deferente y vasos espermáticos.',
              say: 'En el abordaje laparoscópico, el triángulo de la fatalidad está comprendido entre los vasos espermáticos lateralmente y el conducto deferente medialmente. Por allí transcurren los vasos ilíacos externos: colocar grapas o puntos en esta zona causa hemorragia exanguinante inmediata.',
            },
            {
              text: 'Triángulo del Dolor: lateral a los vasos espermáticos e inferior a la cintilla iliopúbica.',
              say: 'El triángulo del dolor se ubica lateral a los vasos espermáticos y por debajo de la cintilla iliopúbica. Por allí viajan los nervios cutáneo femoral lateral y la rama femoral del genitofemoral. Está prohibido disparar tachas o grapas en este triángulo para no lesionar los nervios femorales.',
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
      kicker: 'Técnicas de reparación quirúrgica',
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
              text: 'Indicado de elección en hernias inguinales bilaterales y en hernias recidivadas.',
              say: 'El abordaje laparoscópico transabdominal preperitoneal o totalmente extraperitoneal está indicado formalmente ante hernias inguinales bilaterales, ya que permite reparar ambos lados por las mismas incisiones, y en hernias recidivadas tras cirugía abierta para evitar disecar un canal con cicatrices densas.',
            },
          ],
        },
        {
          title: 'Conducta en hernia estrangulada',
          kind: 'alert',
          items: [
            {
              text: 'Apertura del saco, evaluación de viabilidad del asa y resección intestinal si hay necrosis.',
              say: 'En la cirugía de urgencia por hernia estrangulada, el primer paso tras abrir el saco es sujetar el asa comprometida antes de liberar el anillo para evitar que retorne inadvertida a la cavidad. Se aplica calor con suero tibio y oxígeno al cien por ciento durante diez a quince minutos: si el asa no recupera color rosado, peristaltismo ni pulsos arteriales marginales, se realiza resección intestinal y anastomosis.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnósticos diferenciales y trampas',
      title: 'Trampas del EUNACOM en aumento de volumen inguinal y testicular',
      head: ['Patología simuladora', 'Hallazgo clínico diferenciador', 'Transiluminación o imágenes', 'Conducta correcta'],
      rows: [
        {
          cells: [
            'Hidrocele testicular comunicante o no comunicante',
            'Aumento de volumen escrotal blando e indoloro; el examinador puede palpar por encima de la masa la raíz del cordón',
            'Transiluminación positiva (la luz atraviesa con brillo rojizo el líquido claro escrotal)',
            'Cirugía electiva en hidroceles sintomáticos o comunicantes; no se confunde con hernia estrangulada.',
          ],
          say: 'El hidrocele testicular se distingue porque el examinador puede situar sus dedos por encima del tumor en el orificio inguinal superficial, el testículo queda inmerso en líquido y la transiluminación es intensamente positiva con la linterna. La hernia en cambio desciende desde el canal.',
        },
        {
          cells: [
            'Adenopatía inguinal o adenoflemón',
            'Nódulo móvil o fijo sin orificio herniario palpable; a menudo bilateral o con foco cutáneo infeccioso en extremidad inferior',
            'Ecografía de partes blandas demuestra ganglio con hilio graso o licuefacción sin asa intestinal',
            'Antibioticoterapia si es infeccioso o biopsia si hay sospecha de neoplasia o linfoma.',
          ],
          say: 'Una adenopatía inguinal dolorosa puede simular una hernia atascada, pero no cambia de tamaño con la tos ni con el decúbito. La anamnesis suele revelar heridas o infecciones en la extremidad inferior o antecedentes de neoplasias pélvicas.',
        },
        {
          cells: [
            'Varicocele izquierdo',
            'Dilatación tortuosa del plexo pampiniforme descrita como una bolsa de gusanos que aumenta con Valsalva de pie',
            'Ecografía Doppler testicular demuestra reflujo venoso retrógrado',
            'Varicocelectomía electiva si hay dolor o alteración espermática; no es una hernia.',
          ],
          say: 'El varicocele se presenta casi siempre en el lado izquierdo y al palpar se siente como una bolsa de gusanos que colapsa en decúbito dorsal y se repleta al ponerse de pie. El Doppler testicular confirma la incompetencia de la vena espermática.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 144',
      caseText: 'Una paciente de sesenta años consulta por aumento de volumen en la cara anterior del muslo, que en ocasiones es dolorosa y se asocia a náuseas y dolor abdominal. Al examen físico se aprecia dicho aumento de volumen, por debajo del ligamento inguinal. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Linfoma inguinal', isCorrect: false },
        { letter: 'B', text: 'Hernia inguinal directa', isCorrect: false },
        { letter: 'C', text: 'Adenopatía metastásica', isCorrect: false },
        { letter: 'D', text: 'Hernia femoral', isCorrect: true },
        { letter: 'E', text: 'Sarcoma de partes blandas', isCorrect: false },
      ],
      correct: 'D',
      say: {
        stem: 'Analicemos esta pregunta oficial de diciembre de dos mil dieciocho. Una paciente mujer de sesenta años consulta por aumento de volumen doloroso en la cara anterior del muslo que se acompaña de molestias abdominales y náuseas. Al examen físico la masa se ubica claramente por debajo del ligamento inguinal.',
        question: 'Nos consultan por el diagnóstico más probable.',
        options: 'Las alternativas son: opción A, linfoma inguinal; opción B, hernia inguinal directa; opción C, adenopatía metastásica; opción D, hernia femoral; y opción E, sarcoma de partes blandas.',
        answer: 'La respuesta correcta es la opción D, hernia femoral o crural. El punto de referencia anatómico clave es la ubicación por debajo del ligamento inguinal en la raíz del muslo, lo que define por definición a la hernia crural. Además, la presencia de dolor y náuseas alerta sobre suboclusión intestinal por atascamiento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      caseText: 'Un hombre de setenta y dos años consulta por la aparición súbita hace seis horas de dolor muy intenso en la región inguinal derecha, acompañado de náuseas y vómitos. Al examen físico se observa una masa firme de cinco centímetros en la fosa inguinal derecha que no se reduce con el decúbito ni a la presión suave. La piel que recubre la masa se encuentra eritematosa y caliente. El paciente presenta taquicardia de ciento cinco latidos por minuto y facies dolorosa. ¿Cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar maniobra de taxis con presión bimanual profunda y relajantes musculares', isCorrect: false },
        { letter: 'B', text: 'Solicitar tomografía computarizada de abdomen y pelvis ambulatoria', isCorrect: false },
        { letter: 'C', text: 'Cirugía de urgencia inmediata para exploración, evaluación de viabilidad y hernioplastia', isCorrect: true },
        { letter: 'D', text: 'Indicar reposo en cama con compresión fría local y control en cuarenta y ocho horas', isCorrect: false },
        { letter: 'E', text: 'Punción aspirativa con aguja fina de la masa para aliviar la tensión', isCorrect: false },
      ],
      correct: 'C',
      say: {
        stem: 'Revisemos este caso representativo de hernia estrangulada. Un paciente adulto mayor presenta dolor súbito intenso, masa irreducible con signos inflamatorios cutáneos eritematosos y taquicardia sostenida.',
        question: 'Se pregunta cuál es la conducta más adecuada.',
        options: 'Las opciones son: opción A, maniobra de taxis bimanual; opción B, tomografía ambulatoria; opción C, cirugía de urgencia inmediata para exploración, viabilidad y hernioplastia; opción D, reposo y frío local; y opción E, punción de la masa.',
        answer: 'La respuesta correcta es la opción C. El paciente cursa con una hernia inguinal estrangulada. Los signos inflamatorios locales y la taquicardia reflejan isquemia y necrosis parietal. La reducción manual o taxis está formalmente contraindicada y se debe ingresar de urgencia inmediata a pabellón quirúrgico.',
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
              text: 'Hernia indirecta es lateral y sale por anillo profundo; directa es medial en Hesselbach.',
              say: 'Primera regla: la hernia indirecta es lateral a los vasos epigástricos y viaja al escroto por el anillo profundo; la hernia directa es medial a los vasos epigástricos por debilidad de la fascia transversalis.',
            },
            {
              text: 'La hernia crural se ubica bajo el ligamento inguinal y tiene la máxima tasa de estrangulación.',
              say: 'Segunda regla: la hernia crural se sitúa por debajo del ligamento inguinal y medial a la vena femoral; afecta sobre todo a mujeres y se estrangula en hasta un cuarenta por ciento.',
            },
            {
              text: 'Jamás realizar taxis en una hernia estrangulada.',
              say: 'Tercera regla: si hay eritema cutáneo, dolor severo continuo o fiebre, la hernia está estrangulada y la maniobra de taxis está absolutamente prohibida; requiere cirugía de urgencia inmediata.',
            },
            {
              text: 'Lichtenstein con malla en adultos; herniotomía simple sin malla en niños.',
              say: 'Cuarta regla: el tratamiento estándar en adultos es la hernioplastia libre de tensión de Lichtenstein; en pacientes pediátricos menores de quince años se realiza ligadura simple del saco sin malla.',
            },
          ],
        },
        {
          title: 'Idea final',
          kind: 'normal',
          items: [
            {
              text: 'En laparoscopía: indicada de elección en hernias bilaterales y recidivadas.',
              say: 'Si te llevas una sola idea de hoy: la hernioplastia laparoscópica es la técnica de elección ante hernias inguinales bilaterales o recidivadas tras cirugía abierta, mientras que la hernia crural es la que con mayor frecuencia debuta estrangulada. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo de Hernias Inguinocrurales',
    root: N(
      'start',
      'Paciente con masa o aumento de volumen en región inguinocrural',
      'Evaluación clínica en bipedestación y decúbito con maniobra de Valsalva',
      'Iniciamos el enfrentamiento determinando la localización anatómica respecto al ligamento inguinal y la reductibilidad de la masa.',
      [
        'Masa ubicada por debajo del ligamento inguinal (Hernia Crural)',
        N(
          'alert',
          'Hernia Crural o Femoral sospechada',
          'Alta tasa de estrangulación (30 a 40%) en mujeres añosas',
          'Toda masa bajo el ligamento inguinal corresponde a una hernia crural y tiene indicación quirúrgica formal obligatoria.',
          [
            'Conducta en hernia crural',
            N(
              'do',
              'Hernioplastia crural quirúrgica prioritaria',
              'Reparación urgente si está atascada · electiva pronta si reduce',
              'Indicamos reparación quirúrgica sin demoras para prevenir la estrangulación intestinal.',
            ),
          ],
        ),
      ],
      [
        'Masa ubicada por encima del ligamento inguinal (Hernia Inguinal)',
        N(
          'q',
          'Evaluar si la hernia es reductible o está complicada',
          'Exploración digital del canal: choque en punta (indirecta) vs yema (directa)',
          'Evaluamos si el contenido de la hernia inguinal se reduce espontáneamente o si presenta signos de complicación.',
          [
            'Hernia reductible no complicada',
            N(
              'do',
              'Hernioplastia programada según edad y lateralidad',
              'Técnica libre de tensión con malla de polipropileno',
              'En hernias reductibles programamos hernioplastia electiva.',
              [
                'Adulto con hernia unilateral primaria',
                N(
                  'ok',
                  'Técnica de Lichtenstein abierta',
                  'Malla de polipropileno libre de tensión · recidiva < 1%',
                  'En adultos con hernia unilateral primaria realizamos la técnica abierta de Lichtenstein.',
                ),
              ],
              [
                'Hernia bilateral o recidivada',
                N(
                  'ok',
                  'Abordaje laparoscópico TAPP o TEP',
                  'Reparación preperitoneal mínimamente invasiva',
                  'En hernias bilaterales o recidivadas el abordaje laparoscópico es la indicación de elección.',
                ),
              ],
              [
                'Paciente pediátrico menor de 15 años',
                N(
                  'ok',
                  'Herniotomía simple sin malla',
                  'Ligadura alta y sección del saco · Garantía GES N° 58',
                  'En niños se realiza ligadura alta del saco herniario sin colocar malla protésica.',
                ),
              ],
            ),
          ],
          [
            'Hernia atascada o estrangulada',
            N(
              'alert',
              'Masa irreductible con dolor agudo intenso',
              'Diferenciar incarceración simple de estrangulación vascular',
              'Frente a una hernia irreductible evaluamos si existen signos de compromiso vascular isquémico.',
              [
                'Signos de estrangulación: eritema, calor, fiebre, taquicardia',
                N(
                  'alert',
                  'Hernia Estrangulada confirmada: PROHIBIDO TAXIS',
                  'Laparotomía o inguinotomía urgente inmediata con evaluación de viabilidad',
                  'Ante signos inflamatorios locales o shock está prohibido realizar taxis y se opera de urgencia inmediata.',
                ),
              ],
              [
                'Incarceración reciente sin signos inflamatorios',
                N(
                  'do',
                  'Intento cuidadoso de reducción suave en decúbito',
                  'Si reduce: programar cirugía · si no reduce: pabellón urgente',
                  'En atascamiento temprano sin signos de isquemia se intenta reducción suave; si fracasa, se opera de urgencia.',
                ),
              ],
            ),
          ],
        ),
      ],
    ),
  },
};
