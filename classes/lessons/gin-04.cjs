// Clase 20.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-04).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-04',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La ubicación decide si sangra, y la fertilidad decide si se opera',
      say: 'Bienvenidos. Cerramos el bloque de endocrinología ginecológica con la patología benigna del útero: los miomas y la adenomiosis. Ya sabes, de la clase anterior, que el leiomioma es la L de PALM-COEIN. Hoy vamos a ver por qué unos miomas sangran y otros no, y cómo se elige entre observar, operar conservando el útero, o la histerectomía.',
    },

    {
      type: 'flow',
      kicker: 'Clasificación FIGO',
      title: 'La ubicación decide el síntoma',
      nodes: [
        { id: 'mio', col: 0, row: 2, k: 'start', t: 'Mioma uterino', s: 'Tumor benigno del músculo liso' },
        { id: 'sub', col: 1, row: 0, k: 'risk', t: 'Submucoso', s: 'Contacto con la cavidad' },
        { id: 'intra', col: 1, row: 2, k: 'mech', t: 'Intramural', s: 'Dentro del miometrio' },
        { id: 'subs', col: 1, row: 4, k: 'effect', t: 'Subseroso', s: 'Hacia la cavidad peritoneal' },
        { id: 'sang', col: 2, row: 0, k: 'trap', t: 'El que más sangra', s: 'Distorsiona el endometrio' },
        { id: 'comp', col: 2, row: 4, k: 'effect', t: 'El que más comprime', s: 'Vejiga o recto vecinos' },
      ],
      edges: [
        { from: 'mio', to: 'sub' }, { from: 'mio', to: 'intra' }, { from: 'mio', to: 'subs' },
        { from: 'sub', to: 'sang' }, { from: 'subs', to: 'comp' },
      ],
      steps: [
        { show: ['mio'], note: 'El tumor benigno más común del aparato genital',
          say: 'Empecemos por la clasificación, porque es lo que ordena toda la clase. El mioma es el tumor benigno sólido más frecuente del aparato genital femenino, y la clasificación FIGO lo ubica según su relación con la cavidad y la serosa.' },
        { show: ['sub'], note: 'Grados cero, uno y dos',
          say: 'El submucoso está en contacto con la cavidad endometrial.' },
        { show: ['sang'], note: 'Por eso sangra y por eso da infertilidad',
          say: 'Y por estar ahí, distorsiona la cavidad: es el que más sangra, y el que más se asocia a infertilidad.' },
        { show: ['intra'], note: 'El grupo intermedio',
          say: 'El intramural está dentro del espesor del miometrio, sin tocar la cavidad ni la serosa; su impacto depende de qué tan cerca está de cada una.' },
        { show: ['subs'], note: 'Hacia afuera del útero',
          say: 'Y el subseroso crece hacia la cavidad peritoneal.' },
        { show: ['comp'], note: 'No sangra más, pero comprime',
          say: 'Ese no aumenta el sangrado, porque no toca el endometrio, pero puede comprimir la vejiga o el recto vecinos, dando síntomas urinarios o digestivos. Guarda esta regla: mientras más cerca de la cavidad, más sangra; mientras más hacia afuera, más comprime.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'La mayoría no da nada',
      cards: [
        { title: 'Asintomático', tag: 'Más de la mitad', kind: 'normal', items: [
          { t: 'Hallazgo ecográfico', d: 'No requiere tratamiento',
            say: 'Y aquí va el primer punto importante: más de la mitad de los miomas son completamente asintomáticos, y se encuentran como hallazgo en una ecografía pedida por otro motivo.' },
        ] },
        { title: 'Sintomático', tag: 'Cuando sí da la cara', kind: 'alert', items: [
          { t: 'Hemorragia uterina anormal', d: 'El síntoma más frecuente cuando aparece',
            say: 'Cuando sí da síntomas, el más frecuente es el sangrado uterino anormal, con anemia ferropénica si es severo y mantenido.' },
          { t: 'Síntomas compresivos', d: 'Polaquiuria, constipación, dolor pélvico',
            say: 'Y los síntomas compresivos: sensación de peso, polaquiuria por compresión vesical, o constipación por compresión rectal, típicos del mioma subseroso grande.' },
        ] },
        { title: 'El otro gran diferencial', tag: 'Adenomiosis', kind: 'criteria', items: [
          { t: 'Glándulas endometriales en el miometrio', d: 'Útero aumentado, doloroso y globuloso',
            say: 'Y antes de seguir, un diferencial que el examen cruza todo el tiempo con el mioma: la adenomiosis, glándulas endometriales que quedan atrapadas dentro del miometrio, dando un útero aumentado de tamaño, doloroso y globuloso, con dismenorrea severa. La vamos a desarrollar en detalle en la próxima clase, junto con la endometriosis.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Complicación en el embarazo',
      title: 'Degeneración roja: la trampa del segundo trimestre',
      nodes: [
        { id: 'emb', col: 0, row: 1, k: 'cause', t: 'Embarazo', s: 'El mioma crece rápido' },
        { id: 'isq', col: 1, row: 1, k: 'mech', t: 'El aporte vascular no alcanza', s: 'Isquemia del tejido' },
        { id: 'infa', col: 2, row: 1, k: 'risk', t: 'Infarto hemorrágico', s: 'Degeneración roja' },
        { id: 'dolor', col: 3, row: 0, k: 'effect', t: 'Dolor agudo y fiebre baja', s: 'Con leucocitosis' },
        { id: 'manejo', col: 3, row: 2, k: 'good', t: 'Manejo médico', s: 'Reposo, hidratación, analgesia' },
      ],
      edges: [
        { from: 'emb', to: 'isq' }, { from: 'isq', to: 'infa' }, { from: 'infa', to: 'dolor' }, { from: 'infa', to: 'manejo' },
      ],
      steps: [
        { show: ['emb', 'isq'], note: 'Segundo o tercer trimestre',
          say: 'Hay una complicación que se pregunta siempre, y ocurre durante el embarazo. En el segundo o tercer trimestre, el mioma puede crecer muy rápido por el estímulo hormonal, más rápido de lo que su aporte vascular puede sostener.' },
        { show: ['infa'], note: 'Necrobiosis aséptica',
          say: 'Eso produce isquemia y un infarto hemorrágico dentro del mioma: es la degeneración roja, o necrobiosis aséptica.' },
        { show: ['dolor'], note: 'Se parece a un abdomen agudo',
          say: 'Da un dolor abdominal agudo e intenso, con fiebre moderada y leucocitosis, un cuadro que puede simular un abdomen quirúrgico.' },
        { show: ['manejo'], note: 'La trampa: no se opera',
          say: 'Pero el tratamiento es médico y conservador: reposo, hidratación y analgesia. La miomectomía durante el embarazo está formalmente contraindicada, por el riesgo altísimo de hemorragia y de pérdida del embarazo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Degeneraciones',
      title: 'La roja no es la única',
      cards: [
        { title: 'Fuera del embarazo', tag: 'Las más frecuentes', kind: 'normal', items: [
          { t: 'Hialina', d: 'La más común, cerca de un sesenta por ciento',
            say: 'Fuera del embarazo hay otras degeneraciones que también se preguntan. La más frecuente, con mucha diferencia, es la degeneración hialina: el mioma se sustituye por tejido conjuntivo, sin mayor consecuencia clínica.' },
          { t: 'Quística y calcificada', d: 'Frecuentes en la postmenopausia',
            say: 'Y en la postmenopausia son frecuentes la degeneración quística y la calcificada, ambas hallazgos benignos y esperables por la edad.' },
        ] },
        { title: 'La que sí preocupa', tag: 'Degeneración sarcomatosa', kind: 'alert', items: [
          { t: 'Extremadamente rara', d: 'Sospechar si crece rápido en la postmenopausia',
            say: 'La que sí preocupa es la degeneración sarcomatosa, hacia un leiomiosarcoma: es extraordinariamente rara, pero se sospecha cuando un mioma crece rápido en una mujer postmenopáusica, que ya no tiene el estímulo hormonal que explicaría ese crecimiento.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Asintomático, y sintomático según fertilidad',
      cards: [
        { title: 'Asintomático', tag: 'Conducta expectante', kind: 'normal', items: [
          { t: 'Control ecográfico periódico', d: 'No se opera de rutina',
            say: 'El tratamiento del mioma asintomático es la conducta expectante, con control ecográfico periódico. No se opera solo porque existe.' },
        ] },
        { title: 'Desea fertilidad', tag: 'Miomectomía', kind: 'key', items: [
          { t: 'Histeroscópica en el submucoso', d: 'Conserva el útero',
            say: 'Cuando el mioma es sintomático y la paciente desea preservar la fertilidad, la cirugía conservadora es la miomectomía: histeroscópica cuando es submucoso, y laparoscópica o por laparotomía cuando es intramural o subseroso.' },
        ] },
        { title: 'Paridad cumplida', tag: 'Histerectomía', kind: 'alert', items: [
          { t: 'Tratamiento curativo definitivo', d: 'En la paciente que ya no busca hijos',
            say: 'Y en la paciente sintomática con paridad ya cumplida, el tratamiento curativo definitivo es la histerectomía total.' },
          { t: 'Análogos de GnRH', d: 'Solo como puente antes de la cirugía',
            say: 'Los análogos de GnRH reducen el tamaño del mioma, pero se usan solo por unos meses, como preparación antes de la cirugía, nunca como tratamiento definitivo, por el riesgo de osteoporosis si se prolongan.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos síntomas y fertilidad en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Mioma asintomático, hallazgo incidental', 'Observación y control ecográfico', 'Operar solo porque se encontró'],
          say: 'Repasemos las trampas. Mioma asintomático, encontrado por casualidad: se observa. El error es operarlo solo porque apareció en la ecografía.' },
        { cells: ['Sangrado con endometrio grueso en postmenopausia', 'Biopsia de endometrio', 'Atribuir el sangrado al mioma'],
          say: 'Sangrado en la postmenopausia con endometrio grueso: biopsia de endometrio. El error es echarle la culpa al mioma, que casi nunca es la causa real de la metrorragia en esa edad.' },
        { cells: ['Dolor agudo en el segundo trimestre del embarazo', 'Manejo médico: reposo, hidratación, analgesia', 'Realizar miomectomía de urgencia'],
          say: 'Dolor agudo por un mioma en el segundo trimestre: manejo médico. El error es intentar operarlo de urgencia durante el embarazo.' },
        { cells: ['Submucoso sintomático, desea embarazo', 'Miomectomía histeroscópica', 'Indicar histerectomía'],
          say: 'Y submucoso sintomático en una mujer que desea embarazo: miomectomía histeroscópica. El error es ofrecerle una histerectomía, que termina con cualquier posibilidad de gestar.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 41 años, multípara de 3 con paridad cumplida, consulta por menstruaciones muy abundantes con coágulos desde hace 8 meses, con astenia progresiva. Hemoglobina de 8,5 g/dL. Ecografía transvaginal: útero de tamaño equivalente a 10 semanas, con dos miomas intramurales de 5 y 6 cm que no contactan la cavidad endometrial. Biopsia de endometrio: proliferativo, sin atipias.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Miomectomía histeroscópica' },
        { letter: 'B', text: 'Histerectomía total' },
        { letter: 'C', text: 'Análogos de GnRH de forma indefinida' },
        { letter: 'D', text: 'Observación con control ecográfico anual' },
        { letter: 'E', text: 'Dispositivo intrauterino de cobre' },
      ],
      correct: 'B',
      explanation: 'Miomatosis sintomática con anemia severa, biopsia endometrial ya benigna y paridad cumplida: el tratamiento curativo definitivo es la histerectomía total. La miomectomía histeroscópica no aplica porque los miomas son intramurales, sin contacto con la cavidad.',
      say: {
        stem: 'Vamos con un caso. Mujer de cuarenta y un años, con tres hijos y paridad cumplida, con ocho meses de menstruaciones muy abundantes y astenia progresiva. Su hemoglobina es ocho con cinco. La ecografía muestra un útero aumentado de tamaño, con dos miomas intramurales que no tocan la cavidad, y la biopsia de endometrio es benigna.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: miomectomía histeroscópica, histerectomía total, análogos de GnRH indefinidos, observación anual, o un dispositivo de cobre. Piénsalo.',
        answer: 'Es la B. Tiene miomatosis sintomática, con anemia severa y benignidad endometrial ya confirmada, y su paridad está cumplida: el tratamiento curativo es la histerectomía total. La miomectomía histeroscópica no sirve aquí, porque los miomas son intramurales y no tocan la cavidad, así que no hay nada que resecar por esa vía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 51',
      stem: 'Una paciente de 35 años, nulípara, consulta por una historia de un año de flujo menstrual abundante y, en ocasiones, flujo intermenstrual escaso. Usa preservativo como método anticonceptivo. Trae hemograma con hemoglobina de 10,5 mg/dL, hematocrito de 31 %. Se realiza ecografía transvaginal, que demuestra presencia de un mioma submucoso de 2 cm de diámetro.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Histerectomía total' },
        { letter: 'B', text: 'Resonancia magnética nuclear de pelvis' },
        { letter: 'C', text: 'Observar evolución' },
        { letter: 'D', text: 'Miomectomía histeroscópica' },
        { letter: 'E', text: 'Resección del mioma por laparoscopía' },
      ],
      correct: 'D',
      explanation: 'Mioma submucoso sintomático, con anemia asociada, en mujer nulípara: el tratamiento de elección es la miomectomía histeroscópica, que resuelve el sangrado conservando el útero y la fertilidad.',
      say: {
        stem: 'Vamos con preguntas reales. Esta es del EUNACOM de julio de dos mil veinticuatro. Paciente de treinta y cinco años, nulípara, con un año de flujo menstrual abundante y algo de sangrado entre reglas. Su hemoglobina está algo baja. La ecografía muestra un mioma submucoso pequeño.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: histerectomía total, resonancia de pelvis, observar, miomectomía histeroscópica, o resección por laparoscopía. Piénsalo.',
        answer: 'Es la D. Es un mioma submucoso, el que más sangra, en una mujer nulípara que probablemente quiera preservar su fertilidad. La miomectomía histeroscópica es el tratamiento de elección exacto para esta ubicación: resuelve el sangrado sin tocar el resto del útero.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 151',
      stem: 'Una paciente de 43 años, multípara de 4, consulta porque se ha sentido más cansada de lo normal, con disnea de grandes esfuerzos. Sus reglas son abundantes. Hemoglobina de 8 g/dL, hematocrito de 23 %, con hipocromía y microcitosis. Ecografía transvaginal: múltiples miomas intramurales de hasta 5 cm, más un mioma submucoso de 4 cm.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar histeroscopía' },
        { letter: 'B', text: 'Realizar histerectomía total' },
        { letter: 'C', text: 'Administrar análogos de la GnRH' },
        { letter: 'D', text: 'Iniciar anticonceptivos orales' },
        { letter: 'E', text: 'Antifibrinolíticos' },
      ],
      correct: 'B',
      explanation: 'Miomatosis sintomática con anemia severa en una mujer con paridad cumplida (multípara de 4): el tratamiento curativo definitivo es la histerectomía total.',
      say: {
        stem: 'Esta es del EUNACOM de diciembre de dos mil diecisiete. Mujer de cuarenta y tres años, con cuatro partos, que se siente más cansada, con disnea al esfuerzo. Su hemoglobina es ocho, con anemia franca. La ecografía muestra múltiples miomas intramurales grandes, más uno submucoso.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: histeroscopía, histerectomía total, análogos de GnRH, anticonceptivos orales, o antifibrinolíticos. Piénsalo.',
        answer: 'Es la B. La miomatosis es sintomática, con anemia severa, y esta paciente ya tiene cuatro hijos: su paridad está cumplida. Con eso, el tratamiento definitivo es la histerectomía total, no un manejo médico que solo controlaría el síntoma sin resolver la causa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 43',
      stem: 'Una paciente de 56 años, usuaria de terapia de reemplazo hormonal y sin síntomas ginecológicos, se realiza una ecografía abdominal durante el estudio de un cuadro de constipación crónica. En dicho examen se detecta un mioma uterino subseroso de 32 por 35 mm.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar laparoscopía' },
        { letter: 'B', text: 'Suspender la terapia de reemplazo hormonal' },
        { letter: 'C', text: 'Iniciar anticonceptivos orales' },
        { letter: 'D', text: 'Realizar histerectomía' },
        { letter: 'E', text: 'Realizar control ecográfico en 6 meses' },
      ],
      correct: 'E',
      explanation: 'Mioma asintomático, hallazgo incidental en una ecografía pedida por otro motivo: la conducta es la observación con control ecográfico, sin importar su clasificación FIGO.',
      say: {
        stem: 'Y esta es del EUNACOM de diciembre de dos mil veinticinco. Paciente de cincuenta y seis años, en terapia de reemplazo hormonal, sin síntomas ginecológicos, a quien se le encuentra un mioma subseroso mientras se estudia una constipación crónica.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: laparoscopía, suspender la terapia de reemplazo, iniciar anticonceptivos, histerectomía, o control ecográfico en seis meses. Piénsalo.',
        answer: 'Es la E. Es un mioma asintomático, un hallazgo incidental durante el estudio de otro problema. Sin importar su clasificación FIGO, ni su tamaño, el mioma asintomático se observa. Operarlo, o suspender una terapia hormonal que no le está dando síntomas, no tiene ninguna indicación aquí.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Clínica', tag: 'La ubicación manda', kind: 'key', items: [
          { t: 'Submucoso: sangra', d: 'Subseroso: comprime',
            say: 'Cerremos con las reglas de oro. El submucoso es el que sangra; el subseroso es el que comprime.' },
          { t: 'Asintomático: se observa', d: 'No se opera de rutina',
            say: 'Y el mioma asintomático se observa, sin importar su tamaño ni su clasificación.' },
        ] },
        { title: 'Tratamiento', tag: 'Lo decide la fertilidad', kind: 'pharma', items: [
          { t: 'Desea fertilidad: miomectomía', d: 'Histeroscópica en el submucoso',
            say: 'Si desea fertilidad, miomectomía, histeroscópica cuando el mioma es submucoso.' },
          { t: 'Paridad cumplida: histerectomía', d: 'Tratamiento curativo definitivo',
            say: 'Y con paridad cumplida, histerectomía. Si te llevas una sola idea de hoy: pregúntate dónde está el mioma y qué quiere la paciente para su fertilidad, y la conducta se ordena sola. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: (() => {
    const nHister = N('alert', 'Histerectomía', 'Tratamiento curativo definitivo',
      'En la paciente con paridad cumplida, la histerectomía resuelve el sangrado y elimina el riesgo de nuevos miomas.');
    const nMiomSub = N('ok', 'Miomectomía histeroscópica', 'Para el submucoso',
      'Es la vía de elección cuando el mioma toca la cavidad endometrial.');
    const nMiomOtro = N('ok', 'Miomectomía laparoscópica o abierta', 'Para el intramural o subseroso',
      'Conserva el útero mientras se extirpa el mioma sintomático.');
    const nUbic = N('q', '¿Es submucoso?', 'Contacto con la cavidad',
      'La vía quirúrgica depende de dónde está el mioma.',
      ['Sí', nMiomSub], ['No', nMiomOtro]);
    const nFertilidad = N('q', '¿Desea preservar la fertilidad?', 'Define la vía quirúrgica',
      'Con síntomas que requieren cirugía, la pregunta central es el deseo reproductivo.',
      ['Sí', nUbic], ['No', nHister]);
    const nObservar = N('ok', 'Observación', 'Control ecográfico periódico',
      'El mioma asintomático no se opera, sin importar su tamaño ni su clasificación.');
    const nSintomas = N('q', '¿Es sintomático?', 'Sangrado, anemia o compresión',
      'Diagnosticado el mioma por ecografía, la primera pregunta es si da síntomas.',
      ['No', nObservar], ['Sí', nFertilidad]);
    const root = N('start', 'Miomatosis uterina', 'Diagnóstico por ecografía transvaginal',
      'Con el mioma ya diagnosticado, dos preguntas ordenan toda la conducta: si da síntomas, y si la paciente quiere preservar la fertilidad.',
      ['', nSintomas]);
    return { title: 'Miomatosis uterina: síntomas y fertilidad', root };
  })(),
};
