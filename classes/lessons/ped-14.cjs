// Clase 18.14 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-14).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-14',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo es benigna, cuándo pides punción lumbar y qué le dices a los padres',
      say: 'Bienvenido a la clase de convulsiones febriles, el trastorno convulsivo más frecuente de la infancia. Hoy vas a aprender a distinguir la crisis simple de la compleja, a saber cuándo una punción lumbar no se discute, y qué decirle a unos padres angustiados sobre el pronóstico. Vamos a revisar preguntas reales que ponen a prueba justo esa diferencia. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: '¿Por qué la fiebre hace convulsionar?',
      nodes: [
        { id: 'fie', col: 0, row: 1, k: 'cause', t: 'Fiebre que sube rápido', s: 'Sobre los 38 grados' },
        { id: 'inm', col: 0, row: 3, k: 'cause', t: 'Cerebro inmaduro', s: 'Entre 6 meses y 5 años' },
        { id: 'umb', col: 1, row: 2, k: 'mech', t: 'Baja el umbral convulsivo', s: 'El cerebro se irrita más fácil' },
        { id: 'cri', col: 2, row: 2, k: 'effect', t: 'Convulsión asociada a fiebre', s: 'La más frecuente en la infancia' },
        { id: 'sim', col: 3, row: 0, k: 'good', t: 'Simple: generalizada y breve', s: 'Menos de 15 minutos, única en 24 horas' },
        { id: 'com', col: 3, row: 3, k: 'alert', t: 'Compleja: focal o prolongada', s: 'O se repite, o deja secuela transitoria' },
      ],
      edges: [
        { from: 'fie', to: 'umb' },
        { from: 'inm', to: 'umb', label: 'predispone' },
        { from: 'umb', to: 'cri' },
        { from: 'cri', to: 'sim', label: '70 a 80%' },
        { from: 'cri', to: 'com', label: '20 a 30%' },
      ],
      steps: [
        { show: ['fie'], note: 'El gatillo',
          say: 'Empecemos por el porqué. En estos niños, la fiebre que sube rápido, sobre los treinta y ocho grados, es el gatillo.' },
        { show: ['inm'], note: 'El terreno que lo permite',
          say: 'Y el terreno que lo permite es un cerebro todavía inmaduro, entre los seis meses y los cinco años de vida, con un pico alrededor de los dieciocho meses.' },
        { show: ['umb'], note: 'Se irrita con más facilidad',
          say: 'Esa combinación baja el umbral convulsivo: el cerebro se irrita con más facilidad de lo normal.' },
        { show: ['cri'], note: 'El trastorno más frecuente de la infancia',
          say: 'Y el resultado es la convulsión asociada a fiebre, el trastorno convulsivo más frecuente de la infancia.' },
        { show: ['sim'], note: 'La gran mayoría, y con excelente pronóstico',
          say: 'La gran mayoría, entre el setenta y el ochenta por ciento, es una crisis simple: generalizada, dura menos de quince minutos, aparece una sola vez en veinticuatro horas, y el niño se recupera por completo. Excelente pronóstico, y no necesitas ni electroencefalograma, ni imagen, ni fármaco de mantención.' },
        { show: ['com'], note: 'Basta un solo signo para que deje de ser simple',
          say: 'El resto, entre el veinte y el treinta por ciento, es una crisis compleja: tiene un inicio focal, dura más de quince minutos, se repite en el mismo día, o deja una paresia transitoria, la parálisis de Todd. Fíjate bien: basta uno solo de esos signos para que deje de ser simple.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Descartar meningitis',
      title: 'Punción lumbar: cuándo no se discute',
      cards: [
        { title: 'Indicaciones formales', tag: 'Cualquiera de estas basta', kind: 'alert', items: [
          { t: 'Signos meníngeos', d: 'Rigidez de nuca, Kernig o Brudzinski',
            say: 'Vamos con la pregunta que más se repite: ¿cuándo pides la punción lumbar? Primero, si hay signos meníngeos: rigidez de nuca, Kernig o Brudzinski.' },
          { t: 'Letargia que no mejora', d: 'Persiste pasado el postictal',
            say: 'Segundo, si la letargia o la irritabilidad extrema persisten más allá del período postictal esperado.' },
          { t: 'Menor de 12 meses sin vacunas', d: 'Contra Haemophilus o neumococo',
            say: 'Tercero, si es un lactante entre seis y doce meses con las vacunas contra Haemophilus o neumococo incompletas.' },
          { t: 'Antibiótico previo', d: 'Puede enmascarar una meningitis',
            say: 'Y cuarto, si el niño venía tomando antibióticos, porque eso puede enmascarar una meningitis decapitada. Con cualquiera de estos cuatro, la punción lumbar deja de ser opcional.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Consejería',
      title: 'Pronóstico: lo que le dices a los padres',
      cards: [
        { title: 'Riesgo de recurrencia', tag: 'En un futuro episodio febril', kind: 'normal', items: [
          { t: 'Un 30% tendrá otra crisis', d: '50% si debutó antes del año',
            say: 'Sobre la recurrencia: cerca de un treinta por ciento va a tener otra convulsión con fiebre en el futuro, y ese riesgo sube a un cincuenta por ciento si el debut fue antes del año de vida.' },
        ] },
        { title: 'Riesgo de epilepsia futura', tag: 'La pregunta que más se pregunta', kind: 'key', items: [
          { t: 'Simple: igual a la población', d: 'Uno a dos por ciento',
            say: 'Después de una crisis simple, el riesgo de epilepsia futura es prácticamente el mismo que en cualquier niño: uno a dos por ciento. Tranquiliza a los padres con este dato.' },
          { t: 'Compleja: sube a 5-10%', d: 'Más con antecedente familiar o daño previo',
            say: 'Después de una crisis compleja, con antecedente familiar de epilepsia o daño neurológico previo, ese riesgo sube a un cinco a diez por ciento.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos la clasificación y la punción lumbar en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Simple, compleja y punción lumbar',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Crisis generalizada, menos de 15 minutos, típica', 'Alta con educación a los padres', 'Pedir EEG o TAC de rutina'],
          say: 'Repasemos las trampas. Crisis generalizada, típica y breve: alta con educación a los padres. El error es pedir electroencefalograma o TAC de rutina.' },
        { cells: ['Signos meníngeos o letargia persistente', 'Punción lumbar', 'Asumir que es solo la crisis febril'],
          say: 'Signos meníngeos o letargia que no mejora: punción lumbar. El error es asumir que es solo la crisis febril y dar de alta igual.' },
        { cells: ['Lactante sin vacunas contra Haemophilus o neumococo', 'Punción lumbar', 'No estudiar por parecer benigna'],
          say: 'Lactante sin esas vacunas al día: también punción lumbar. El error es no estudiar solo porque el resto del cuadro parece benigno.' },
        { cells: ['Primera crisis febril simple', 'Sin fármaco antiepiléptico de mantención', 'Iniciar ácido valproico por si acaso'],
          say: 'Primera crisis simple: no vas a fármaco antiepiléptico de mantención. El error es iniciar ácido valproico por si acaso.' },
        { cells: ['Crisis focal o que se repite en 24 horas', 'Clasificarla como compleja y estudiar', 'Llamarla simple porque cede sola'],
          say: 'Y una crisis focal, o que se repite en veinticuatro horas: la clasificas como compleja y estudias. El error es llamarla simple solo porque cedió sola.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 18 meses, previamente sano y con vacunas al día. Con fiebre de 39,2 °C por una faringoamigdalitis, presenta una crisis tónico-clónica generalizada, de 3 minutos, que cede sola. Veinte minutos después está afebril, activo, reactivo, se conecta con sus padres, sin rigidez de nuca ni déficit motor.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Diagnosticar convulsión febril simple, tratar el foco infeccioso y educar a los padres' },
        { letter: 'B', text: 'Solicitar electroencefalograma antes del alta' },
        { letter: 'C', text: 'Hospitalizar en UCI para iniciar fenitoína' },
        { letter: 'D', text: 'Realizar punción lumbar de urgencia' },
        { letter: 'E', text: 'Iniciar ácido valproico profiláctico' },
      ],
      correct: 'A',
      explanation: 'Edad típica, crisis generalizada breve y única, recuperación completa sin signos meníngeos: es una convulsión febril simple. No requiere EEG, punción lumbar ni fármaco de mantención; se trata el foco infeccioso y se educa a los padres.',
      say: {
        stem: 'Vamos al caso. Lactante de dieciocho meses, previamente sano y con vacunas al día. Con fiebre de treinta y nueve coma dos por una faringoamigdalitis, presenta una crisis generalizada de tres minutos que cede sola. Veinte minutos después está afebril, activo y reactivo, sin rigidez de nuca ni déficit motor.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: diagnosticar convulsión febril simple y educar a los padres, pedir un electroencefalograma, hospitalizar para fenitoína, hacer una punción lumbar de urgencia, o iniciar ácido valproico. Piénsalo.',
        answer: 'Es la A. Edad típica, crisis generalizada y breve, única, y una recuperación completa sin ningún signo de alarma: es una convulsión febril simple. Ni el electroencefalograma, ni la punción lumbar, ni el fármaco de mantención tienen espacio aquí. Solo tratas el foco infeccioso y educas a los padres.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 158',
      stem: 'Lactante de 15 meses con una convulsión tónico-clónica de 1 minuto, autolimitada, con fiebre de 39 °C. Al examen está bien perfundido, consciente, con pulso y presión arterial normales, sin signos focales ni signos meníngeos.',
      question: 'Además de bajar la temperatura, ¿cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar punción lumbar' },
        { letter: 'B', text: 'Iniciar diazepam' },
        { letter: 'C', text: 'Solicitar resonancia magnética de cerebro' },
        { letter: 'D', text: 'Iniciar ácido valproico' },
        { letter: 'E', text: 'Mantener en observación' },
      ],
      correct: 'E',
      explanation: 'Convulsión febril simple, sin signos meníngeos ni focales: no hay indicación de punción lumbar, imagen ni fármaco de mantención; la conducta es observar.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecisiete. Lactante de quince meses con una crisis tónico-clónica de un minuto, autolimitada, con fiebre de treinta y nueve grados. Está bien perfundido, consciente, sin signos focales ni signos meníngeos.',
        question: 'Además de bajar la temperatura, ¿cuál es la conducta más adecuada?',
        options: 'Las opciones: punción lumbar, diazepam, resonancia de cerebro, ácido valproico, u observación.',
        answer: 'Es la E. Es una convulsión febril benigna: sin signos que hagan sospechar meningitis, y al ser la primera crisis, tampoco hay espacio para antiepilépticos. La conducta es mantenerlo en observación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 22',
      stem: 'Niño de 4 años, con antecedente de una convulsión febril hace 2 años, presenta fiebre y cefalea, seguidas de deterioro del estado general y compromiso de conciencia, y luego una convulsión. La punción lumbar muestra 300 glóbulos blancos por milímetro cúbico, 80% mononucleares, y 60 glóbulos rojos crenados.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Encefalitis herpética' },
        { letter: 'B', text: 'Hemorragia subaracnoidea' },
        { letter: 'C', text: 'Meningitis bacteriana' },
        { letter: 'D', text: 'Meningitis tuberculosa' },
        { letter: 'E', text: 'Convulsión febril benigna' },
      ],
      correct: 'A',
      explanation: 'El compromiso de conciencia persistente y el líquido cefalorraquídeo hemorrágico con pleocitosis mononuclear no corresponden a una convulsión febril simple: orientan a una encefalitis herpética, que suele afectar los lóbulos temporales.',
      say: {
        stem: 'Y una segunda pregunta real, del EUNACOM de julio de dos mil quince. Niño de cuatro años, con una convulsión febril hace dos años, que ahora presenta fiebre, cefalea, deterioro del estado general y compromiso de conciencia, y luego convulsiona. La punción lumbar muestra trescientas células, con predominio mononuclear, y glóbulos rojos crenados.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: encefalitis herpética, hemorragia subaracnoidea, meningitis bacteriana, meningitis tuberculosa, o convulsión febril benigna.',
        answer: 'Es la A, encefalitis herpética. Fíjate en el distractor: el antecedente de una convulsión febril previa tienta a marcar la E, pero el compromiso de conciencia que no mejora y un líquido hemorrágico con células mononucleares no son de una crisis benigna. Son de una encefalitis herpética, que ataca justamente los lóbulos temporales. Esa diferencia entre lo benigno y lo grave es la que hoy tienes que manejar.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Clasificación', tag: 'Basta un solo signo', kind: 'key', items: [
          { t: 'Simple: generalizada y breve', d: 'Única en 24 horas, sin secuela',
            say: 'Cerremos con las reglas de oro. Simple es generalizada, breve, única en veinticuatro horas y sin secuela.' },
          { t: 'Compleja: uno solo de estos signos', d: 'Focal, prolongada, repetida o con Todd',
            say: 'Y basta uno solo de estos signos para volverla compleja: focal, prolongada, repetida, o con parálisis de Todd.' },
        ] },
        { title: 'Punción lumbar', tag: 'No se discute si...', kind: 'alert', items: [
          { t: 'Signos meníngeos o letargia', d: 'O lactante sin vacunas, o antibiótico previo',
            say: 'La punción lumbar no se discute si hay signos meníngeos, letargia persistente, un lactante sin vacunas al día, o antibiótico previo.' },
        ] },
        { title: 'Pronóstico', tag: 'Para tranquilizar', kind: 'normal', items: [
          { t: 'Epilepsia futura: 1-2% si es simple', d: 'Sube a 5-10% si es compleja',
            say: 'Y el riesgo de epilepsia futura es bajo, uno a dos por ciento, si la crisis fue simple. Si te llevas una sola idea de hoy: la crisis simple no necesita ni estudio ni fármaco, y basta un solo signo de alarma para cambiar toda la conducta. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Convulsión con fiebre: simple, compleja o meningitis',
    root: N('start', 'Niño de 6 meses a 5 años que convulsiona con fiebre', 'Primero clasificas la crisis',
      'Tienes un niño entre seis meses y cinco años que convulsiona con fiebre. Antes de nada, clasificas la crisis por su forma y duración.',
      ['', N('q', '¿Cómo fue la crisis?', 'Duración y forma deciden',
        'La pregunta es: ¿fue generalizada y breve, o tuvo algo distinto?',
        ['Generalizada, menos de 15 minutos, única', N('q', '¿Hay signos meníngeos o letargia persistente?', 'Antes de dar de alta',
          'Si fue una crisis simple, antes de dar de alta revisas si hay signos meníngeos o letargia que no mejora.',
          ['No', N('ok', 'Crisis febril simple', 'Educar a los padres y dar de alta',
            'Si no hay ninguno de esos signos, confirmas la crisis febril simple: educas a los padres y das de alta, sin más estudio.')],
          ['Sí', N('alert', 'Punción lumbar', 'Descartar meningitis',
            'Pero si hay signos meníngeos o la letargia persiste, ahí la punción lumbar deja de ser opcional: hay que descartar una meningitis.')])],
        ['Focal, más de 15 minutos, repetida o con parálisis de Todd', N('alert', 'Crisis febril compleja', 'Requiere estudio dirigido',
          'Si en cambio la crisis fue focal, duró más de quince minutos, se repitió, o dejó una parálisis de Todd, es una crisis compleja, y requiere estudio dirigido según cómo evolucione.')])]),
  },
};
