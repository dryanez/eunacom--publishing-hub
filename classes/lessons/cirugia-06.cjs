// Clase 11.6 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs / dataset_cirugia_bloque_2.cjs (cir-06, classId cirugia-06).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-06',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Indirecta, directa o crural: la ubicación decide el riesgo',
      say: 'Hoy vemos las hernias de la pared abdominal. Es un tema muy rentable en el examen, con preguntas casi todos los años, y se ordena con una sola idea: la ubicación exacta del defecto te dice de qué hernia se trata, y de eso depende qué tan urgente es operarla. Empecemos por la anatomía.',
    },

    {
      type: 'flow',
      kicker: 'Anatomía',
      title: 'Tres hernias, tres ubicaciones distintas',
      nodes: [
        { id: 'ind', col: 0, row: 0, k: 'cause', t: 'Indirecta', s: 'Congénita, la más frecuente' },
        { id: 'anp', col: 1, row: 0, k: 'mech', t: 'Anillo inguinal profundo', s: 'Lateral a los vasos epigástricos' },
        { id: 'dir', col: 0, row: 1, k: 'cause', t: 'Directa', s: 'Adquirida, adultos mayores' },
        { id: 'hes', col: 1, row: 1, k: 'mech', t: 'Triángulo de Hesselbach', s: 'Medial a los vasos epigástricos' },
        { id: 'cru', col: 0, row: 2, k: 'risk', t: 'Crural', s: 'Mujeres multíparas' },
        { id: 'lig', col: 1, row: 2, k: 'mech', t: 'Bajo el ligamento inguinal', s: 'Medial a la vena femoral' },
        { id: 'est', col: 2, row: 2, k: 'alert', t: 'Mayor riesgo de estrangular', s: 'Anillo rígido y estrecho' },
      ],
      edges: [
        { from: 'ind', to: 'anp' }, { from: 'dir', to: 'hes' },
        { from: 'cru', to: 'lig' }, { from: 'lig', to: 'est' },
      ],
      steps: [
        { show: ['ind', 'anp'], note: 'La más frecuente de todas',
          say: 'Partamos por la más frecuente: la hernia inguinal indirecta. Es congénita, por un conducto que debió cerrarse antes de nacer y no se cerró. Sale por el anillo inguinal profundo, lateral a los vasos epigástricos, y por eso puede acompañar al cordón espermático hasta el escroto.' },
        { show: ['dir', 'hes'], note: 'La pared se debilitó con los años',
          say: 'La directa es distinta: es adquirida, por debilidad de la pared en el triángulo de Hesselbach, y protruye medial a esos mismos vasos epigástricos. Fíjate en la palabra clave: lateral es indirecta, medial es directa.' },
        { show: ['cru', 'lig'], note: 'Por debajo del ligamento inguinal',
          say: 'Y la crural, o femoral, sale por debajo del ligamento inguinal, medial a la vena femoral. Es más frecuente en mujeres que han tenido varios partos.' },
        { show: ['est'], note: 'El anillo no da espacio para el intestino',
          say: 'Y esta es la que más te tienes que grabar: por lo rígido y estrecho de ese anillo crural, es la que más se estrangula, hasta en un tercio de los casos. Cualquier hernia crural se opera pronto, aunque no dé molestias.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Examen físico',
      title: 'Cómo distinguir indirecta de directa con el dedo',
      cards: [
        { title: 'Maniobra de Valsalva', tag: 'Con el dedo en el canal', kind: 'key', items: [
          { t: 'Choca en la punta', d: 'El impulso viene de indirecta',
            say: 'Al examinar, metes el dedo por el orificio inguinal superficial y le pides al paciente que puje. Si el impulso te choca en la punta del dedo, es indirecta: viene de lejos, por el canal.' },
          { t: 'Empuja la cara anterior', d: 'El impulso viene de directa',
            say: 'Si en cambio empuja la cara anterior del dedo, desde atrás, es directa: la pared posterior está cediendo justo ahí.' },
        ] },
        { title: 'El canal inguinal', tag: 'Cuatro a cinco centímetros', kind: 'normal', items: [
          { t: 'Techo y piso', d: 'Oblicuo interno arriba, ligamento inguinal abajo',
            say: 'Y para entender por dónde pasa cada hernia, recuerda el canal inguinal: mide cuatro a cinco centímetros, con el oblicuo interno formando el techo, y el ligamento inguinal, el piso.' },
          { t: 'Pared anterior y posterior', d: 'Oblicuo externo delante, fascia transversalis detrás',
            say: 'La pared anterior es la aponeurosis del oblicuo externo, y la posterior es la fascia transversalis, que es justamente la que se debilita en la hernia directa.' },
        ] },
        { title: 'Variedades que se preguntan', tag: 'Nombres propios', kind: 'normal', items: [
          { t: 'Richter', d: 'Solo el borde antimesentérico se necrosa',
            say: 'Y hay variedades con nombre propio que te pueden poner como distractor. La hernia de Richter atasca solo el borde antimesentérico del asa: puede necrosarse y perforarse sin dar una obstrucción completa.' },
          { t: 'Littré y Amyand', d: 'Divertículo de Meckel o apéndice en el saco',
            say: 'La de Littré lleva un divertículo de Meckel dentro del saco, y la de Amyand lleva el apéndice cecal. Y hay una cuarta, la de Maydl, en forma de W, que estrangula el asa intermedia que queda dentro del abdomen. Son datos de examen, no cambian la urgencia de fondo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Epidemiología',
      title: 'Cuánto pesa cada tipo, y cuándo pides imagen',
      cards: [
        { title: 'Frecuencia relativa', tag: 'Tres de cada cuatro son inguinales', kind: 'normal', items: [
          { t: 'Indirecta: la mitad de los casos', d: 'La más común de todas',
            say: 'Un dato de contexto que ayuda a decidir rápido: las hernias inguinales son el setenta y cinco por ciento de todas las hernias de la pared. Y dentro de ellas, la indirecta es la mitad de los casos, así que ante la duda, apuesta primero por esa.' },
          { t: 'Directa: uno de cada cuatro', d: 'Crural: la más rara, la más grave',
            say: 'La directa es una de cada cuatro, y la crural es la más rara de las tres, solo un cinco a diez por ciento, pero la que más te tiene que preocupar por su riesgo de estrangularse.' },
        ] },
        { title: '¿Cuándo pides imagen?', tag: 'El diagnóstico es clínico', kind: 'key', items: [
          { t: 'Duda diagnóstica en obesos', d: 'Ecografía de partes blandas',
            say: 'El diagnóstico de la hernia inguinal es clínico, con el examen que ya vimos. Pides imagen solo si hay duda, por ejemplo en un paciente obeso donde cuesta palpar bien.' },
          { t: 'Dolor sin masa palpable', d: 'Descartar pubalgia o tendinopatía',
            say: 'También cuando hay dolor inguinal pero no encuentras ninguna masa, para descartar una pubalgia del deportista o una tendinopatía de los aductores, que duelen parecido pero se tratan muy distinto.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cuando se complica',
      title: 'Reductible, atascada o estrangulada',
      nodes: [
        { id: 'red', col: 0, row: 0, k: 'good', t: 'Reductible', s: 'Entra y sale sola' },
        { id: 'ata', col: 0, row: 1, k: 'q', t: 'Atascada', s: 'No entra, pero riega bien' },
        { id: 'tax', col: 1, row: 1, k: 'good', t: 'Taxis suave', s: 'Si lleva menos de 6 horas' },
        { id: 'est', col: 0, row: 2, k: 'risk', t: 'Estrangulada', s: 'Isquemia del asa atrapada' },
        { id: 'noc', col: 1, row: 2, k: 'trap', t: 'Taxis prohibido', s: 'Reduciría un asa necrosada' },
        { id: 'cx', col: 2, row: 2, k: 'alert', t: 'Cirugía de urgencia', s: 'Sin intentar reducir antes' },
      ],
      edges: [
        { from: 'ata', to: 'tax' }, { from: 'est', to: 'noc' }, { from: 'noc', to: 'cx' },
      ],
      steps: [
        { show: ['red'], note: 'Se opera igual, pero sin apuro',
          say: 'La hernia reductible entra y sale sola de la cavidad. Igual se opera, pero de forma electiva.' },
        { show: ['ata', 'tax'], note: 'El vaso todavía riega el intestino',
          say: 'La atascada no se reduce, pero el intestino todavía tiene buena circulación. Si lleva menos de seis horas, puedes intentar una reducción manual suave, el taxis.' },
        { show: ['est'], note: 'El intestino se está muriendo adentro',
          say: 'La estrangulada es distinta: aquí el vaso está comprimido, el asa se isquemia y empieza a necrosarse. La ves con dolor exquisito, piel enrojecida y caliente sobre la hernia, y fiebre.' },
        { show: ['noc', 'cx'], note: 'La regla que más se pregunta en hernias',
          say: 'Y aquí está la regla de oro del tema: nunca intentes el taxis en una hernia estrangulada. Reducir un asa necrosada la manda de vuelta al abdomen y produce una peritonitis fecaloidea catastrófica. Vas directo a cirugía de urgencia, sin tocarla antes.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Malla en el adulto, nunca en el niño',
      cards: [
        { title: 'Adulto: Lichtenstein', tag: 'Estándar de oro', kind: 'key', items: [
          { t: 'Malla libre de tensión', d: 'Recidiva menor al 2 %',
            say: 'En el adulto, la técnica de elección es la hernioplastia de Lichtenstein: una malla de polipropileno libre de tensión que refuerza toda la pared posterior, con muy poca recidiva.' },
          { t: 'Laparoscopía: TAPP o TEP', d: 'Bilaterales o recidivadas',
            say: 'La laparoscopía, TAPP o TEP, la reservas para hernias bilaterales o para las que ya se operaron antes, porque entras por un plano limpio.' },
        ] },
        { title: 'Niño menor de 15 años', tag: 'Sin malla', kind: 'alert', items: [
          { t: 'Herniotomía simple', d: 'Solo ligar el saco, sin malla',
            say: 'Y en el niño menor de quince años, la pared está sana: el problema es solo el conducto que no cerró. Por eso el tratamiento es la herniotomía simple, ligar el saco en alto, sin colocar ninguna malla. Colocarla interferiría con el crecimiento.' },
        ] },
        { title: 'Hernia crural: técnica distinta', tag: 'No siempre Lichtenstein', kind: 'normal', items: [
          { t: 'Técnica de McVay', d: 'Cierra el anillo contra el ligamento de Cooper',
            say: 'Un matiz que se pregunta poco pero vale la pena: la hernia crural no siempre se repara igual que la inguinal. La técnica de McVay fija el tejido al ligamento de Cooper, cerrando específicamente ese anillo tan estrecho.' },
          { t: 'O malla cónica tipo plug', d: 'Alternativa igual de válida',
            say: 'Y una alternativa igual de válida es un tapón de malla cónico, el plug, que rellena directamente el defecto crural.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Casos especiales',
      title: 'Cuando la hernia es enorme o ya se operó antes',
      cards: [
        { title: 'Pérdida de domicilio', tag: 'Más de la mitad de las vísceras afuera', kind: 'alert', items: [
          { t: 'Saco gigante, irreductible', d: 'De larga data, abdomen retráctil',
            say: 'Hay un escenario extremo que a veces sale como distractor: la hernia con pérdida de domicilio, donde más de la mitad de las vísceras llevan años viviendo fuera del abdomen, en un saco gigante e irreductible.' },
          { t: 'Neumoperitoneo progresivo antes', d: 'Prepara el abdomen para recibirlas de vuelta',
            say: 'Ahí no puedes operar directo: primero preparas al paciente con neumoperitoneo progresivo, inyectando aire poco a poco, para que el abdomen se acostumbre a recibir esas vísceras de vuelta sin que se te dispare la presión.' },
        ] },
        { title: 'GES en menores de 15 años', tag: 'Ley 19.966', kind: 'criteria', items: [
          { t: 'Garantía N° 58', d: 'Tratamiento quirúrgico de la hernia del desarrollo',
            say: 'Y no olvides el nombre exacto para el examen: es la Garantía GES número cincuenta y ocho, tratamiento quirúrgico de hernia del desarrollo de la pared abdominal en menores de quince años.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo esto en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Ubicación, riesgo y conducta',
      head: ['Tipo de hernia', 'Relación anatómica', 'Conducta correcta'],
      rows: [
        { cells: ['Indirecta', 'Lateral a los vasos epigástricos', 'Hernioplastia electiva con malla'],
          say: 'Repasemos en la tabla. Indirecta, lateral a los vasos epigástricos: hernioplastia electiva con malla.' },
        { cells: ['Directa', 'Medial a los vasos epigástricos', 'Hernioplastia electiva con malla'],
          say: 'Directa, medial a esos mismos vasos: la conducta electiva es igual, la diferencia es solo anatómica.' },
        { cells: ['Crural', 'Bajo el ligamento, medial a la vena femoral', 'Operar pronto, aunque no duela'],
          say: 'Crural, bajo el ligamento inguinal y medial a la vena femoral: se opera pronto, aunque esté asintomática, por el riesgo de estrangularse.' },
        { cells: ['Estrangulada', 'Piel roja, caliente, dolor intenso', 'Cirugía urgente, sin taxis'],
          say: 'Estrangulada, con piel roja, caliente y dolor intenso: cirugía urgente, y el error clásico y más castigado en el examen es intentar reducirla con la mano antes de operar.' },
        { cells: ['Niño menor de 15 años', 'Conducto peritoneovaginal permeable', 'Herniotomía simple, sin malla'],
          say: 'Y en el niño, herniotomía simple sin malla. Ponerle una malla a un niño es la respuesta incorrecta más clásica de esta parte.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 68 años, multípara de 5 hijos, consulta por dolor intenso de 10 horas de evolución en una masa de 2 cm en la ingle derecha, por debajo del ligamento inguinal y medial al pulso femoral, irreductible, con la piel algo enrojecida. Tiene náuseas y el abdomen está distendido con ruidos aumentados.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Intentar reducción manual suave (taxis) en urgencia' },
        { letter: 'B', text: 'Cirugía de urgencia sin intentar reducirla' },
        { letter: 'C', text: 'Indicar analgesia y control ecográfico en 48 horas' },
        { letter: 'D', text: 'Colocar braguero compresivo y observar' },
        { letter: 'E', text: 'Programar hernioplastia electiva en 6 semanas' },
      ],
      correct: 'B',
      explanation: 'Ubicación bajo el ligamento inguinal y medial a la vena femoral: hernia crural, con signos ya de estrangulación (enrojecimiento, dolor intenso, obstrucción). El taxis está formalmente prohibido; la conducta es cirugía de urgencia.',
      say: {
        stem: 'Vamos al caso. Mujer de sesenta y ocho años, con cinco partos, y diez horas de dolor intenso en una masa de dos centímetros en la ingle derecha, por debajo del ligamento inguinal y medial al pulso femoral. Es irreductible, con la piel algo enrojecida, náuseas, y el abdomen distendido con ruidos aumentados.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: intentar el taxis en urgencia, cirugía de urgencia sin reducirla, analgesia y control en cuarenta y ocho horas, braguero y observación, o programar cirugía electiva en seis semanas. Piénsalo.',
        answer: 'Es la B. La ubicación, bajo el ligamento inguinal y medial a la vena femoral, es la hernia crural, la de mayor riesgo de estrangularse. Y aquí tienes el enrojecimiento y la obstrucción que confirman que ya se está estrangulando. Intentar el taxis, la opción A, es la trampa: está prohibido, porque devuelve al abdomen un asa que ya se está necrosando, y así cambias una hernia por una peritonitis fecaloidea mucho más grave.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 144',
      stem: 'Paciente de 60 años consulta por aumento de volumen en la cara anterior del muslo, que en ocasiones es doloroso y se asocia a náuseas y dolor abdominal. Al examen físico se aprecia dicho aumento de volumen por debajo del ligamento inguinal.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Linfoma' },
        { letter: 'B', text: 'Hernia inguinal' },
        { letter: 'C', text: 'Adenopatía metastásica' },
        { letter: 'D', text: 'Hernia femoral' },
        { letter: 'E', text: 'Sarcoma de partes blandas' },
      ],
      correct: 'D',
      explanation: 'Aumento de volumen por debajo del ligamento inguinal, con dolor y síntomas digestivos: hernia femoral, más frecuente en mujeres y con mayor riesgo de complicarse que la inguinal.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Paciente de sesenta años, con un aumento de volumen en la cara anterior del muslo, que a veces duele y se acompaña de náuseas y dolor abdominal. Al examen está por debajo del ligamento inguinal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: linfoma, hernia inguinal, adenopatía metastásica, hernia femoral, o sarcoma de partes blandas. Piénsalo.',
        answer: 'Es la D. La palabra clave es "por debajo del ligamento inguinal": esa es justamente la ubicación de la hernia femoral o crural, no de la inguinal. Y que se acompañe de náuseas y dolor abdominal te avisa que ya está dando síntomas de obstrucción, así que a esta paciente hay que operarla pronto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 3',
      stem: 'Recién nacido de 3 días con protuberancia blanda en la línea media abdominal, de 1 centímetro de diámetro, reductible, sin signos inflamatorios.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Cirugía electiva inmediata' },
        { letter: 'B', text: 'Cirugía de urgencia' },
        { letter: 'C', text: 'Derivación a cirugía pediátrica urgente' },
        { letter: 'D', text: 'Antibióticos profilácticos' },
        { letter: 'E', text: 'Observación: la mayoría se cierra sola antes de los 4 años' },
      ],
      correct: 'E',
      explanation: 'La hernia umbilical del recién nacido es fisiológica y se cierra espontáneamente en la gran mayoría de los casos antes de los 4 años. No requiere cirugía ni antibióticos mientras sea reductible y sin signos inflamatorios.',
      say: {
        stem: 'Y una pregunta real más, del EUNACOM de julio de dos mil veinticinco, sobre otra hernia que conviene conocer. Recién nacido de tres días, con una protuberancia blanda en la línea media del abdomen, de un centímetro, reductible, sin ningún signo inflamatorio.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: cirugía electiva inmediata, cirugía de urgencia, derivación urgente a cirugía pediátrica, antibióticos profilácticos, u observación porque la mayoría se cierra sola antes de los cuatro años. Piénsalo.',
        answer: 'Es la E. La hernia umbilical del recién nacido es distinta a todo lo que vimos hoy: es fisiológica, por un anillo umbilical que todavía no termina de cerrar, y en la enorme mayoría de los casos se cierra solo antes de los cuatro años. Aquí no hay ninguna urgencia: nada de cirugía ni de antibióticos mientras siga reductible y sin inflamación.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Anatomía', tag: 'Lateral o medial', kind: 'key', items: [
          { t: 'Indirecta: lateral a epigástricos', d: 'Directa: medial a epigástricos',
            say: 'Cerremos con las reglas de oro. Indirecta, lateral a los vasos epigástricos; directa, medial a esos mismos vasos.' },
          { t: 'Crural: bajo el ligamento', d: 'La de mayor riesgo de estrangular',
            say: 'Y la crural, bajo el ligamento inguinal, es la que más se estrangula, así que se opera pronto aunque no te esté dando ningún síntoma todavía.' },
        ] },
        { title: 'La regla que salva', tag: 'Nunca reducir a ciegas', kind: 'alert', items: [
          { t: 'Estrangulada: cirugía ya', d: 'El taxis está prohibido',
            say: 'Si está estrangulada, nunca intentes reducirla con la mano: cirugía de urgencia, ya. Reducir un asa necrosada la manda de vuelta al abdomen, y ahí sí que tienes un problema mucho más grave que la hernia misma.' },
        ] },
        { title: 'Tratamiento', tag: 'Malla o sin malla', kind: 'pharma', items: [
          { t: 'Adulto: Lichtenstein con malla', d: 'Niño: herniotomía, sin malla',
            say: 'Y en tratamiento, el adulto va con malla, técnica de Lichtenstein, y el niño va sin malla, con herniotomía simple. Si te llevas una sola idea de hoy: la ubicación te dice el tipo de hernia, y los signos inflamatorios te dicen si puedes esperar o si el paciente necesita pabellón ahora mismo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hernias de pared abdominal: ubicación y urgencia',
    root: N('start', 'Masa en la región inguinal o crural', 'Con la maniobra de Valsalva',
      'Un paciente llega con una masa que aparece o crece al pujar. Antes de pensar en cirugía, resuelve dos preguntas en orden: primero dónde está exactamente el defecto, y después si ya se complicó.',
      ['', N('q', '¿Dónde emerge la masa?', 'La ubicación define el tipo',
        'Pide la maniobra de Valsalva y ubica el defecto respecto al ligamento inguinal y a los vasos epigástricos inferiores. Esa relación anatómica, no el tamaño ni el dolor, es lo que clasifica la hernia.',
        ['Lateral a epigástricos, sale por el anillo profundo', N('ok', 'Hernia indirecta', 'Congénita, la más frecuente',
          'Lateral a los vasos epigástricos y por el anillo inguinal profundo: hernia indirecta, la más común de todas, típica de jóvenes y niños, y la que suele descender hasta el escroto.')],
        ['Medial a epigástricos, en Hesselbach', N('ok', 'Hernia directa', 'Adquirida, adultos mayores',
          'Medial a los vasos epigástricos, en el triángulo de Hesselbach: hernia directa, por debilidad adquirida de la fascia transversalis, más propia del adulto mayor.')],
        ['Bajo el ligamento, medial a la vena femoral', N('q', '¿Está complicada?', 'Alto riesgo de estrangular',
          'Es una hernia crural. Por lo rígido y estrecho de ese anillo, revisa siempre si ya se complicó antes de decidir el momento de la cirugía.',
          ['Reductible', N('do', 'Hernioplastia pronto', 'Aunque esté asintomática',
            'Sin complicación todavía, igual se opera pronto, y no se espera a que dé síntomas, por el alto riesgo de que termine estrangulándose.')],
          ['Dolor, piel roja, obstrucción', N('alert', 'Cirugía de urgencia', 'Taxis formalmente prohibido',
            'Con signos de estrangulación, vas directo a cirugía de urgencia: nunca intentes reducirla con la mano, porque puedes devolver al abdomen un asa que ya se está necrosando.')])])]),
  },
};
