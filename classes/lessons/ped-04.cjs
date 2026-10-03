// Clase 18.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-04).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-04',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Dosis, edades y prohibiciones que se preguntan con precisión matemática',
      say: 'Bienvenido. Hoy vemos lactancia materna, alimentación complementaria, y la suplementación con vitamina D y con hierro. Es un tema donde el examen no te perdona un número: te va a pedir la dosis exacta y la edad exacta, así que vamos a ser precisos. Y al final vamos a ver qué nunca se le puede dar a un lactante, porque ahí también hay preguntas clásicas. Empecemos.',
    },

    {
      type: 'points',
      kicker: 'Lactancia materna',
      title: 'Por qué es el alimento de elección',
      cards: [
        { title: 'Sus beneficios', tag: 'Hasta los 6 meses, exclusiva', kind: 'key', items: [
          { t: 'Anticuerpos y factores protectores', d: 'Menos diarrea, otitis y neumonía',
            say: 'Empecemos por la lactancia. Aporta anticuerpos, lactoferrina y otros factores protectores que ninguna fórmula iguala, y reduce diarreas, otitis y neumonías en el lactante.' },
        ] },
        { title: 'Contraindicaciones maternas', tag: 'Muy pocas, pero se preguntan', kind: 'alert', items: [
          { t: 'VIH y HTLV uno o dos', d: 'Las dos contraindicaciones que más se preguntan',
            say: 'Pero hay contraindicaciones absolutas, y son las que más se preguntan: la infección materna por VIH, y la infección por HTLV uno o dos.' },
          { t: 'TBC bacilífera activa', d: 'Drogas ilícitas o quimioterapia',
            say: 'También la tuberculosis bacilífera activa sin tratar, y el consumo de drogas ilícitas o el uso de quimioterapia.' },
        ] },
        { title: 'Contraindicación del lactante', tag: 'Poco frecuente', kind: 'normal', items: [
          { t: 'Galactosemia clásica', d: 'Necesita fórmula sin lactosa',
            say: 'Y del lado del lactante, la única contraindicación real es la galactosemia clásica, que obliga a una fórmula sin lactosa.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Suplementación universal',
      title: 'Vitamina D: la misma dosis para todos',
      nodes: [
        { id: 'nac', col: 0, row: 2, k: 'start', t: 'Nace a término', s: 'Con o sin lactancia' },
        { id: 'mes', col: 1, row: 2, k: 'mech', t: 'Al mes de vida', s: 'Empieza la suplementación' },
        { id: 'dos', col: 2, row: 2, k: 'effect', t: 'Cuatrocientas UI al día', s: 'Vía oral, todos los días' },
        { id: 'fin', col: 3, row: 2, k: 'good', t: 'Hasta los doce meses', s: 'Se mantiene sin interrupción' },
      ],
      edges: [
        { from: 'nac', to: 'mes' }, { from: 'mes', to: 'dos' }, { from: 'dos', to: 'fin' },
      ],
      steps: [
        { show: ['nac'], note: 'Aplica a todos, sin excepción',
          say: 'Vamos con la vitamina D, porque aquí el número es exacto y se pregunta directo. Todo recién nacido de término la recibe, esté con lactancia materna o con fórmula.' },
        { show: ['mes'], note: 'No se da desde el nacimiento',
          say: 'Empieza al mes de vida, a los treinta días. No se indica antes de eso.' },
        { show: ['dos'], note: 'El número que tienes que memorizar',
          say: 'La dosis es cuatrocientas unidades internacionales al día, por vía oral. Ese número no cambia.' },
        { show: ['fin'], note: 'Doce meses, sin cortes',
          say: 'Y se mantiene todos los días hasta que el niño cumple los doce meses. Es la suplementación más simple de todas: una dosis fija, para todos, sin excepciones.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Suplementación universal',
      title: 'Hierro: la dosis depende de cómo nació',
      cards: [
        { title: 'Recién nacido de término', tag: 'Empieza a los 4 meses', kind: 'key', items: [
          { t: 'Un miligramo por kilo al día', d: 'Desde los 4 meses hasta el año',
            say: 'El hierro es distinto: aquí la dosis y la edad de inicio cambian según cómo nació el niño. En el recién nacido de término, empieza a los cuatro meses, a un miligramo por kilo al día, hasta el año.' },
        ] },
        { title: 'Prematuro o bajo peso', tag: 'Empieza antes, a mayor dosis', kind: 'alert', items: [
          { t: 'Dos a tres miligramos por kilo', d: 'Desde los 2 meses de vida',
            say: 'En el prematuro, menor de treinta y siete semanas, o en el niño con menos de dos mil quinientos gramos al nacer, empieza antes, a los dos meses, y a mayor dosis: entre dos y tres miligramos por kilo al día.' },
          { t: 'Depósitos agotados más rápido', d: 'Por eso el inicio precoz',
            say: 'La razón es que sus depósitos de hierro, que se traspasan sobre todo en el tercer trimestre, quedaron más bajos. Por eso no puede esperar hasta los cuatro meses como el niño de término.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Alimentación complementaria',
      title: 'Qué se introduce y cuándo',
      cards: [
        { title: 'A los 6 meses', tag: 'La primera comida', kind: 'normal', items: [
          { t: 'Primera papilla, el almuerzo', d: 'Con aceite vegetal crudo agregado',
            say: 'A los seis meses cumplidos se introduce la primera comida, el almuerzo, y le agregas una cucharadita de aceite vegetal crudo al servirla, para el aporte de ácidos grasos.' },
        ] },
        { title: 'A los 8 a 9 meses', tag: 'La segunda comida', kind: 'normal', items: [
          { t: 'Segunda papilla, la cena', d: 'Mismas características que el almuerzo',
            say: 'Entre los ocho y los nueve meses se agrega la segunda comida, la cena, con la misma lógica que el almuerzo.' },
        ] },
        { title: 'Prohibido el primer año', tag: 'Se pregunta seguido', kind: 'alert', items: [
          { t: 'Miel: riesgo de botulismo', d: 'Aunque esté diluida o cocida',
            say: 'Y lo que nunca se da en el primer año: la miel, por el riesgo de botulismo del lactante, sin importar si está diluida o mezclada con otra cosa.' },
          { t: 'Sal, azúcar y leche de vaca', d: 'Por la carga renal de solutos',
            say: 'Tampoco se agrega sal ni azúcar, y no se da leche de vaca entera, porque el riñón del lactante todavía no maneja bien esa carga de solutos.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos toda la suplementación en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las dosis y edades que más se confunden',
      head: ['Suplemento', 'Recién nacido de término', 'Prematuro o bajo peso'],
      rows: [
        { cells: ['Vitamina D', 'Cuatrocientas UI al día, desde el mes 1', 'La misma dosis, sin cambios'],
          say: 'Repasemos en una tabla. La vitamina D es igual para todos: cuatrocientas unidades al día, desde el mes de vida.' },
        { cells: ['Hierro', 'Un miligramo por kilo, desde los 4 meses', 'Dos a tres miligramos por kilo, desde los 2 meses'],
          say: 'El hierro sí cambia: en el de término, un miligramo por kilo desde los cuatro meses; en el prematuro, hasta tres veces esa dosis, y dos meses antes.' },
        { cells: ['Primera comida', '6 meses, con aceite vegetal', 'Igual, salvo indicación distinta'],
          say: 'La primera comida se introduce a los seis meses en ambos casos, siempre con aceite vegetal agregado.' },
        { cells: ['Miel, sal y azúcar', 'Prohibidas todo el primer año', 'Prohibidas todo el primer año'],
          say: 'Y la miel, la sal y el azúcar están prohibidas en cualquier lactante durante todo el primer año, sin excepción por prematurez.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 2 meses, nacido a las 33 semanas de gestación, con peso de nacimiento de 1.950 gramos. Se alimenta con lactancia materna exclusiva y recibe vitamina D desde los 30 días de vida.',
      question: '¿Cuál es la indicación de hierro más adecuada en este control?',
      options: [
        { letter: 'A', text: 'Esperar hasta los 6 meses, junto con la alimentación complementaria' },
        { letter: 'B', text: 'Iniciar hierro elemental a 2 a 3 miligramos por kilo al día, desde hoy' },
        { letter: 'C', text: 'Iniciar hierro elemental a 1 miligramo por kilo al día, a los 4 meses' },
        { letter: 'D', text: 'No requiere suplementación si la madre come carnes rojas' },
        { letter: 'E', text: 'Indicar hierro dextrano intramuscular una vez al mes' },
      ],
      correct: 'B',
      explanation: 'Un prematuro de 33 semanas y bajo peso de nacimiento debe iniciar hierro precozmente, a los 2 meses de vida, a dosis de 2 a 3 miligramos por kilo al día, por el menor traspaso de depósitos de hierro en el tercer trimestre.',
      say: {
        stem: 'Vamos con un caso. Lactante de dos meses, nacido a las treinta y tres semanas, con mil novecientos cincuenta gramos al nacer. Está con lactancia materna exclusiva, y recibe vitamina D desde los treinta días de vida.',
        question: '¿Cuál es la indicación de hierro más adecuada en este control?',
        options: 'Las opciones: esperar hasta los seis meses, iniciar hierro a dos o tres miligramos por kilo desde hoy, iniciarlo a un miligramo por kilo a los cuatro meses, no suplementar si la madre come carnes rojas, o dar hierro dextrano mensual. Piénsalo.',
        answer: 'Es la B. Este lactante nació antes de las treinta y siete semanas y con menos de dos mil quinientos gramos, así que le corresponde el esquema del prematuro: empieza ahora, a los dos meses, y a la dosis más alta, entre dos y tres miligramos por kilo. Esperar a los cuatro meses, como haces con el niño de término, sería tarde para él.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 109',
      stem: 'Lactante de 3 meses, que pesa 7 kilos, alimentado con lactancia materna exclusiva a libre demanda. Su Peso para la Edad está en más 1 DE, y su Peso para la Talla en más 2 DE.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Dar fórmula de relleno' },
        { letter: 'B', text: 'Amamantar cada 4 horas' },
        { letter: 'C', text: 'Dar agua entre cada toma' },
        { letter: 'D', text: 'Mantener la lactancia materna a libre demanda' },
        { letter: 'E', text: 'Suspender la lactancia nocturna' },
      ],
      correct: 'D',
      explanation: 'Aunque el Peso para la Talla en +2 DE corresponde a obesidad, mientras el lactante esté con lactancia materna exclusiva no se indica ninguna medida restrictiva: se mantiene la lactancia a libre demanda hasta los 6 meses.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil dieciséis. Lactante de tres meses, que pesa siete kilos, con lactancia materna exclusiva a libre demanda. Su peso para la edad está en más uno, y su peso para la talla en más dos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: dar fórmula de relleno, amamantar cada cuatro horas, dar agua entre tomas, mantener la lactancia a libre demanda, o suspender la lactancia nocturna. Piénsalo.',
        answer: 'Es la D. El peso para la talla en más dos marca obesidad, pero mientras el lactante esté en lactancia materna exclusiva, no se toca nada: ni horario, ni agua, ni fórmula. La lactancia a libre demanda se regula sola, y esa es siempre la respuesta antes de los seis meses.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Madre consulta en el CESFAM sobre la alimentación de su hijo de 7 meses, que recibe almuerzo desde los 6 meses. La abuela recomienda endulzar el puré de fruta con miel de abeja y agregar una pizca de sal a la sopa.',
      question: '¿Cuál es la recomendación médica correcta?',
      options: [
        { letter: 'A', text: 'Permitir la miel, pero restringir la sal' },
        { letter: 'B', text: 'Permitir una pizca de sal, pero contraindicar la miel' },
        { letter: 'C', text: 'Contraindicar estrictamente tanto la miel como la sal y el azúcar durante todo el primer año' },
        { letter: 'D', text: 'Autorizar ambos alimentos en pequeñas cantidades' },
        { letter: 'E', text: 'Diluir la miel en leche tibia para inactivar sus toxinas' },
      ],
      correct: 'C',
      explanation: 'La miel está prohibida en menores de 1 año por el riesgo de botulismo del lactante, causado por esporas de Clostridium botulinum que germinan en el intestino del lactante. La sal y el azúcar tampoco se agregan durante el primer año, por la inmadurez renal y la formación de preferencias hipertensogénicas.',
      say: {
        stem: 'Una pregunta del banco EUNACOM. Una madre consulta en su centro de salud sobre la alimentación de su hijo de siete meses, que recibe almuerzo desde los seis meses. La abuela recomienda endulzar el puré de fruta con miel de abeja, y agregar sal a la sopa.',
        question: '¿Cuál es la recomendación médica correcta?',
        options: 'Las opciones: permitir la miel y restringir la sal, permitir la sal y prohibir la miel, prohibir ambas por completo, autorizar las dos en poca cantidad, o diluir la miel en leche tibia. Piénsalo.',
        answer: 'Es la C. La miel está prohibida en todo menor de un año por el riesgo de botulismo del lactante, y ese riesgo no se elimina diluyéndola ni cocinándola. Y la sal y el azúcar tampoco se agregan durante el primer año, por el riñón todavía inmaduro del lactante. La abuela, con cariño, te está proponiendo justo lo que nunca debes autorizar.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Vitamina D', tag: 'Un número, para todos', kind: 'key', items: [
          { t: 'Cuatrocientas UI al día', d: 'Desde el mes 1 hasta el año',
            say: 'Cerremos con las reglas de oro. Vitamina D: cuatrocientas unidades al día, desde el mes de vida hasta el año, igual para todos.' },
        ] },
        { title: 'Hierro', tag: 'Depende de cómo nació', kind: 'pharma', items: [
          { t: 'Término: 1 mg/kg desde los 4', d: 'Prematuro: 2 a 3 mg/kg, desde los 2 meses',
            say: 'El hierro cambia con la prematurez: en el de término, un miligramo por kilo desde los cuatro meses; en el prematuro, más dosis y antes, desde los dos meses.' },
        ] },
        { title: 'Lo prohibido', tag: 'Todo el primer año', kind: 'alert', items: [
          { t: 'Miel: riesgo de botulismo', d: 'Sal, azúcar y leche de vaca entera',
            say: 'Y nunca en el primer año: miel, sal, azúcar y leche de vaca entera. Si te llevas una sola idea de hoy: la vitamina D es igual para todos, pero el hierro depende de cómo nació el niño. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Suplementación del lactante: vitamina D y hierro',
    root: N('start', 'Recién nacido en control de salud', 'Lactancia y suplementación',
      'Un recién nacido llega a su primer control. La vitamina D es igual para todos: cuatrocientas unidades al día, desde el mes de vida hasta el año. Para el hierro sí importa cómo nació.',
      ['', N('q', '¿Nació de término o prematuro?', 'Esto decide la dosis de hierro',
        'Pregúntate si nació de término y con peso adecuado, o si fue prematuro, o con bajo peso al nacer.',
        ['Término, sobre 2.500 gramos', N('do', 'Hierro desde los 4 meses', 'Un miligramo por kilo al día',
          'En el recién nacido de término, el hierro empieza a los cuatro meses, a un miligramo por kilo al día, hasta el año.',
          ['', N('do', 'A los 6 meses: alimentación complementaria', 'Primera comida, con aceite vegetal',
            'Y a los seis meses se introduce la primera comida, siempre con aceite vegetal agregado, y nunca con miel, sal ni azúcar.')])],
        ['Prematuro o bajo peso', N('alert', 'Hierro desde los 2 meses', 'Dos a tres miligramos por kilo al día',
          'En el prematuro o el niño bajo dos mil quinientos gramos, el hierro empieza antes, a los dos meses, y a mayor dosis, por sus depósitos más bajos.',
          ['', N('do', 'A los 6 meses: alimentación complementaria', 'Primera comida, con aceite vegetal',
            'Y a los seis meses, igual que en el niño de término, se introduce la primera comida, con aceite vegetal, y nunca con miel, sal ni azúcar.')])])]),
  },
};
