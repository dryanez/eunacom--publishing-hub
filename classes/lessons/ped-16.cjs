// Clase 18.16 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-16).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-16',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo se cruza la edad gestacional con el peso, y qué riesgo trae cada casilla',
      say: 'Bienvenido a la clase de evaluación de la edad gestacional y clasificación ponderal del recién nacido. Hoy vas a aprender a clasificarlo por su edad gestacional, a estimarla con el examen físico cuando no tienes una fecha confiable, y a cruzarla con el peso para anticipar sus complicaciones. Es la continuación natural de la clase anterior: ahí decidiste cómo nace; aquí decides qué vigilar después. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Semanas cumplidas',
      title: 'Pretérmino, término o postérmino',
      cards: [
        { title: 'Pretérmino', tag: 'Menos de 37 semanas', kind: 'criteria', items: [
          { t: 'Extremo: menos de 28 semanas', d: 'El de mayor riesgo',
            say: 'Empecemos por la edad gestacional. Pretérmino es nacer antes de las treinta y siete semanas. El extremo, antes de las veintiocho, es el de mayor riesgo.' },
          { t: 'Tardío: 34 a 36 semanas', d: 'Hasta 36 semanas y 6 días',
            say: 'Y fíjate en el prematuro tardío, entre las treinta y cuatro y las treinta y seis semanas: es el más frecuente, cerca del setenta por ciento de los prematuros, y aun así tiene más riesgo que uno de término.' },
        ] },
        { title: 'Término', tag: 'La mayoría de los nacimientos', kind: 'normal', items: [
          { t: '37 a 41 semanas', d: 'Hasta 41 semanas y 6 días',
            say: 'Término es entre las treinta y siete semanas y las cuarenta y uno más seis días. Es el rango de menor riesgo.' },
        ] },
        { title: 'Postérmino', tag: '42 semanas o más', kind: 'alert', items: [
          { t: 'Insuficiencia placentaria', d: 'Riesgo de meconio y macrosomía',
            say: 'Y postérmino es desde las cuarenta y dos semanas, con el riesgo de una placenta que ya no alcanza, líquido con meconio, y a veces macrosomía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuando la fecha no es confiable',
      title: 'Estimar la edad gestacional por el examen físico',
      cards: [
        { title: 'Test de Capurro', tag: 'Desde las 29 semanas', kind: 'key', items: [
          { t: '5 signos somáticos', d: 'Oreja, mama, pezón, piel, pliegues',
            say: 'Cuando no tienes una fecha de última regla confiable ni una ecografía precoz, estimas la edad con el examen físico. El test de Capurro, desde las veintinueve semanas, evalúa cinco signos: la oreja, la mama, el pezón, la piel y los pliegues plantares.' },
        ] },
        { title: 'Test de Ballard', tag: 'Prematuros extremos', kind: 'criteria', items: [
          { t: 'Suma signos neuromusculares', d: 'Postura, ángulo poplíteo, bufanda',
            say: 'Y el test de Ballard, que además de lo físico suma signos neuromusculares como la postura o el ángulo poplíteo, lo usas de preferencia en el prematuro extremo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cruzando edad y peso',
      title: 'Pequeño, adecuado o grande para la edad gestacional',
      cards: [
        { title: 'Pequeño para la EG (PEG)', tag: 'Bajo el percentil 10', kind: 'alert', items: [
          { t: 'Hipoglicemia', d: 'Por poca reserva de glucógeno',
            say: 'Ahora cruzas el peso con la edad gestacional. Pequeño para la edad gestacional es estar bajo el percentil diez, y su riesgo cardinal es la hipoglicemia, porque el hígado se queda sin reserva de glucógeno.' },
          { t: 'Hipotermia y poliglobulia', d: 'Poca grasa parda, más eritropoyetina',
            say: 'Además tiene poca grasa parda, así que se enfría con facilidad, y suele tener poliglobulia, por la hipoxia crónica que vivió dentro del útero.' },
        ] },
        { title: 'Adecuado para la EG (AEG)', tag: 'Entre el percentil 10 y 90', kind: 'normal', items: [
          { t: 'Bajo riesgo general', d: 'La mayoría de los recién nacidos',
            say: 'Adecuado para la edad gestacional es estar entre el percentil diez y el noventa: es donde está la mayoría, y el riesgo neonatal es bajo.' },
        ] },
        { title: 'Grande para la EG (GEG)', tag: 'Sobre el percentil 90', kind: 'alert', items: [
          { t: 'Hipoglicemia por hiperinsulinismo', d: 'Clásico del hijo de madre diabética',
            say: 'Y grande para la edad gestacional es estar sobre el percentil noventa. Aquí la hipoglicemia también es el riesgo cardinal, pero por otro mecanismo: hiperinsulinismo, típico del hijo de madre diabética.' },
          { t: 'Trauma obstétrico', d: 'Distocia de hombros, fractura de clavícula',
            say: 'Y además tiene riesgo de trauma obstétrico: distocia de hombros, parálisis braquial, o fractura de clavícula.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora crucemos la edad gestacional con el peso en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'La matriz que más se pregunta',
      head: ['Categoría', 'Percentil de peso', 'Riesgo principal'],
      rows: [
        { cells: ['Pretérmino PEG', 'Menor a 10', 'Hipoglicemia grave, hipotermia'],
          say: 'Repasemos la matriz. Pretérmino y pequeño para la edad: el riesgo más alto de todos, hipoglicemia grave e hipotermia.' },
        { cells: ['Pretérmino AEG', 'Entre 10 y 90', 'Dificultad respiratoria, ictericia'],
          say: 'Pretérmino adecuado: el riesgo principal es la dificultad respiratoria y la ictericia, por la sola inmadurez.' },
        { cells: ['Término PEG', 'Menor a 10', 'Hipoglicemia por falta de depósitos'],
          say: 'Término pero pequeño: hipoglicemia, aunque nazca a tiempo, porque los depósitos igual le faltaron.' },
        { cells: ['Término GEG', 'Mayor a 90', 'Distocia de hombros, hipoglicemia'],
          say: 'Término y grande: el riesgo cambia a trauma del parto y a la hipoglicemia por hiperinsulinismo.' },
        { cells: ['Postérmino', 'Cualquiera', 'Aspiración meconial, piel descamada'],
          say: 'Y el postérmino, sea cual sea su peso, tiene riesgo de aspiración meconial y de una piel ya descamada por el tiempo de más dentro del útero.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Recién nacido de sexo masculino, parto vaginal a las 35 semanas, peso de nacimiento de 2.850 gramos. En las curvas de crecimiento intrauterino, ese peso corresponde al percentil 92 para las 35 semanas.',
      question: '¿Cuál es la clasificación correcta de este paciente?',
      options: [
        { letter: 'A', text: 'Recién nacido de término, pequeño para la edad gestacional' },
        { letter: 'B', text: 'Recién nacido de término, adecuado para la edad gestacional' },
        { letter: 'C', text: 'Recién nacido pretérmino, grande para la edad gestacional' },
        { letter: 'D', text: 'Recién nacido pretérmino, adecuado para la edad gestacional' },
        { letter: 'E', text: 'Recién nacido postérmino, grande para la edad gestacional' },
      ],
      correct: 'C',
      explanation: 'A las 35 semanas es pretérmino, y un peso en el percentil 92 está sobre el percentil 90, lo que define grande para la edad gestacional: pretérmino GEG.',
      say: {
        stem: 'Vamos con un caso. Recién nacido, parto vaginal a las treinta y cinco semanas, con un peso de dos mil ochocientos cincuenta gramos. Ese peso corresponde al percentil noventa y dos para su edad gestacional.',
        question: '¿Cuál es la clasificación correcta de este paciente?',
        options: 'Tienes cinco opciones: término pequeño, término adecuado, pretérmino grande, pretérmino adecuado, o postérmino grande. Piénsalo.',
        answer: 'Es la C. Treinta y cinco semanas es pretérmino, no término: ya puedes descartar dos opciones. Y un percentil noventa y dos está sobre el noventa, así que es grande para la edad gestacional, no adecuado. La clasificación cruzada correcta es pretérmino, grande para la edad gestacional.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 8',
      stem: 'Recién nacido pequeño para la edad gestacional, con un peso de 2.500 gramos.',
      question: '¿Qué conducta tomas respecto de la alimentación?',
      options: [
        { letter: 'A', text: 'Iniciar fórmula láctea hipercalórica' },
        { letter: 'B', text: 'Instalar sonda nasogástrica para alimentación' },
        { letter: 'C', text: 'Ayuno de 6 horas y luego fórmula de prematuro' },
        { letter: 'D', text: 'Pecho materno precoz y control de glicemia a las 2 horas' },
        { letter: 'E', text: 'Suero glucosado al 10% endovenoso' },
      ],
      correct: 'D',
      explanation: 'El recién nacido pequeño para la edad gestacional tiene alto riesgo de hipoglicemia precoz: la conducta es alimentar precozmente al pecho y controlar la glicemia a las 2 horas de vida.',
      say: {
        stem: 'Y una pregunta real, del EUNACOM de enero de dos mil veintitrés. Recién nacido pequeño para la edad gestacional, con un peso de dos mil quinientos gramos.',
        question: '¿Qué conducta tomas respecto de la alimentación?',
        options: 'Las opciones: fórmula hipercalórica, sonda nasogástrica, ayuno de seis horas y luego fórmula de prematuro, pecho materno precoz con control de glicemia, o suero glucosado endovenoso.',
        answer: 'Es la D. Ya sabes que el riesgo cardinal del pequeño para la edad gestacional es la hipoglicemia por falta de reservas. La conducta no es el ayuno ni la sonda: es alimentarlo precozmente al pecho materno y controlar la glicemia a las dos horas de vida.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Edad gestacional', tag: 'Semanas cumplidas', kind: 'key', items: [
          { t: 'Término: 37 a 41 semanas', d: 'Pretérmino antes, postérmino después',
            say: 'Cerremos con las reglas de oro. Término es entre treinta y siete y cuarenta y uno más seis días; antes es pretérmino, después es postérmino.' },
        ] },
        { title: 'Clasificación ponderal', tag: 'Percentiles', kind: 'criteria', items: [
          { t: 'PEG bajo 10, GEG sobre 90', d: 'AEG queda entre esos dos',
            say: 'Pequeño para la edad es bajo el percentil diez, grande es sobre el noventa, y adecuado queda entre esos dos.' },
        ] },
        { title: 'Riesgos', tag: 'Los vigilas distinto', kind: 'alert', items: [
          { t: 'PEG: hipoglicemia por reservas', d: 'GEG: hipoglicemia por hiperinsulinismo',
            say: 'El pequeño hace hipoglicemia por falta de reservas; el grande, por hiperinsulinismo. Si te llevas una sola idea de hoy: siempre cruzas la edad gestacional con el peso antes de decidir qué vigilar. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Cruzar edad gestacional y peso al nacer',
    root: N('start', 'Recién nacido en la maternidad', 'Edad gestacional y peso al nacer',
      'Tienes un recién nacido recién examinado, con su edad gestacional y su peso de nacimiento.',
      ['', N('q', '¿En qué rango de edad gestacional está?', 'Decide el primer eje',
        'Primero ubicas la edad gestacional en su rango.',
        ['Menos de 37 semanas', N('q', '¿En qué percentil de peso está?', 'Decide el segundo eje',
          'Si es pretérmino, ahora ubicas el percentil de peso para esa edad.',
          ['Bajo percentil 10', N('alert', 'Pretérmino PEG', 'El de mayor riesgo: hipoglicemia e hipotermia',
            'Pretérmino y bajo el percentil diez es la combinación de mayor riesgo: hipoglicemia grave, hipotermia y enterocolitis.')],
          ['Sobre percentil 90', N('alert', 'Pretérmino GEG', 'Pensar en hijo de madre diabética',
            'Pretérmino pero sobre el percentil noventa te hace pensar en un hijo de madre diabética, con hipoglicemia por hiperinsulinismo.')])],
        ['37 semanas o más', N('q', '¿En qué percentil de peso está?', 'Decide el segundo eje',
          'Si es de término o más, también ubicas el percentil de peso.',
          ['Bajo percentil 10', N('alert', 'Término PEG', 'Vigilar hipoglicemia por reservas',
            'De término pero bajo el percentil diez: vigilas hipoglicemia por falta de depósitos, aunque haya nacido a tiempo.')],
          ['Sobre percentil 90', N('alert', 'Término GEG', 'Vigilar trauma obstétrico e hipoglicemia',
            'De término y sobre el percentil noventa: vigilas trauma obstétrico, como la distocia de hombros, y también hipoglicemia por hiperinsulinismo.')])])]),
  },
};
