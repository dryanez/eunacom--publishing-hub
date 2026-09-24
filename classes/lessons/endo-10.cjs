// Clase 7.10 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-10).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-10',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuatro subtipos, dos células de origen y un marcador para cada uno',
      say: 'Bienvenidos. En la clase anterior dejamos al paciente con una citología Bethesda cinco o seis. Hoy vemos qué pasa cuando se confirma el cáncer de tiroides, un tema de frecuencia alta en el EUNACOM. Todo se ordena con una sola pregunta: ¿de qué célula viene el tumor? Esa respuesta te dice cómo se disemina, qué marcador sigues y si el radioyodo sirve o no.',
    },

    {
      type: 'flow',
      kicker: 'El mapa',
      title: 'Dos células, cuatro cánceres',
      nodes: [
        { id: 'fol', col: 0, row: 1, k: 'cause', t: 'Célula folicular', s: 'Fabrica tiroglobulina, capta yodo' },
        { id: 'cc', col: 0, row: 3, k: 'cause', t: 'Célula C parafolicular', s: 'Viene de la cresta neural' },
        { id: 'pap', col: 2, row: 0, k: 'good', t: 'Papilar', s: '85–90 %, el de mejor pronóstico' },
        { id: 'flc', col: 2, row: 1, k: 'mech', t: 'Folicular', s: '5–10 %' },
        { id: 'ana', col: 2, row: 2, k: 'alert', t: 'Anaplásico', s: '1–2 %, indiferenciado' },
        { id: 'med', col: 2, row: 3, k: 'risk', t: 'Medular', s: '3–5 %, secreta calcitonina' },
        { id: 'dif', col: 4, row: 0, k: 'effect', t: 'Diferenciados', s: '90–95 %: sobrevida a 10 años sobre 95 %' },
      ],
      edges: [
        { from: 'fol', to: 'pap' }, { from: 'fol', to: 'flc' },
        { from: 'fol', to: 'ana', label: 'pierde diferenciación' },
        { from: 'cc', to: 'med' },
        { from: 'pap', to: 'dif' }, { from: 'flc', to: 'dif' },
      ],
      steps: [
        { show: ['fol'], note: 'La célula que hace hormona tiroidea',
          say: 'Partamos por el mapa. El cáncer de tiroides es la neoplasia endocrina más frecuente, y afecta sobre todo a mujeres jóvenes, tres por cada hombre. En la tiroides hay dos tipos de células. La primera es la célula folicular, la que capta yodo y fabrica tiroglobulina para hacer hormona.' },
        { show: ['pap', 'flc'], note: 'Papilar y folicular: los diferenciados',
          say: 'De la célula folicular nacen los dos cánceres diferenciados: el papilar, que es el ochenta y cinco a noventa por ciento de los casos, y el folicular, cinco a diez por ciento. Se llaman diferenciados porque conservan las funciones de su célula: siguen captando yodo y fabricando tiroglobulina.' },
        { show: ['dif'], note: 'Por eso tienen tan buen pronóstico',
          say: 'Juntos son el noventa a noventa y cinco por ciento de los cánceres de tiroides, y su sobrevida a diez años supera el noventa y cinco por ciento. Guarda esa idea, porque todo el tratamiento se aprovecha de que estas células siguen captando yodo.' },
        { show: ['ana'], note: 'Cuando la célula folicular pierde todo',
          say: 'Si la célula folicular pierde por completo su diferenciación, aparece el anaplásico: solo uno a dos por ciento, pero es uno de los tumores más agresivos de toda la medicina.' },
        { show: ['cc', 'med'], note: 'Otra célula, otras reglas',
          say: 'Y la otra célula es la célula C, o parafolicular, que viene de la cresta neural y fabrica calcitonina. De ella nace el carcinoma medular, tres a cinco por ciento. No es una célula folicular, así que no capta yodo ni fabrica tiroglobulina. Esa diferencia se pregunta mucho.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diferenciados',
      title: 'Papilar y folicular: cómo se diseminan',
      cards: [
        { title: 'Carcinoma papilar', tag: 'El más frecuente', kind: 'key', items: [
          { t: 'Cuerpos de psamoma', d: 'Papilas y núcleos en vidrio esmerilado',
            say: 'Veamos los diferenciados uno a uno. El papilar tiene una histología muy característica: papilas verdaderas, cuerpos de psamoma, que son calcificaciones concéntricas, y núcleos en vidrio esmerilado con hendiduras. Los psamomas son las microcalcificaciones que viste en la ecografía la clase pasada.' },
          { t: 'Vía linfática', d: 'Ganglios cervicales centrales y laterales',
            say: 'Se disemina por vía linfática, a los ganglios del cuello, primero del compartimento central y luego del lateral. Y ojo: tener ganglios comprometidos no empeora mucho la sobrevida global.' },
        ] },
        { title: 'Carcinoma folicular', tag: 'Hematógeno', kind: 'alert', items: [
          { t: 'Pacientes mayores, déficit de yodo', d: 'Imita folículos normales',
            say: 'El folicular afecta a pacientes algo mayores y es más frecuente en zonas con déficit de yodo. Al microscopio se parece mucho a los folículos normales.' },
          { t: 'Vía hematógena', d: 'Pulmón y hueso, metástasis osteolíticas',
            say: 'Se disemina por vía hematógena, a pulmón y a hueso, con metástasis osteolíticas. Papilar linfático, folicular hematógeno: ese contraste es clásico.' },
          { t: 'La PAAF no lo diagnostica', d: 'Se necesita ver cápsula y vasos',
            say: 'Y recuerda la clase pasada: la punción no puede diagnosticarlo, porque el cáncer folicular se define por invasión de la cápsula o de los vasos, y eso solo se ve en la pieza operatoria.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Los otros dos',
      title: 'Medular y anaplásico',
      cards: [
        { title: 'Carcinoma medular', tag: 'Células C', kind: 'pharma', items: [
          { t: 'Calcitonina y CEA', d: 'Marcadores de diagnóstico y seguimiento',
            say: 'Vamos al medular. Como nace de la célula C, secreta calcitonina, y también antígeno carcinoembrionario, el CEA. Ambos son sus marcadores, para el diagnóstico y para el seguimiento.' },
          { t: 'No capta I-131', d: 'El radioyodo es inútil',
            say: 'Y como no es una célula folicular, no capta yodo: el radioyodo no le sirve para nada. Se disemina temprano, tanto por vía linfática como hematógena.' },
          { t: '25 % hereditario', d: 'NEM 2A o 2B por mutación RET',
            say: 'Un veinticinco por ciento es hereditario, parte de la neoplasia endocrina múltiple tipo dos A o dos B, por mutaciones del protooncogén RET. Por eso el medular obliga a pensar en la familia y en otros tumores, que vemos en un momento.' },
        ] },
        { title: 'Carcinoma anaplásico', tag: 'Letal', kind: 'alert', items: [
          { t: 'Mayor de 65–70 años', d: 'Masa pétrea, fija, crece en semanas',
            say: 'El anaplásico es otra historia. Es propio del adulto mayor, sobre sesenta y cinco a setenta años, y debuta como una masa cervical dura como piedra, fija, que crece en semanas.' },
          { t: 'Disfonía, estridor, disfagia', d: 'Invade recurrente, tráquea y esófago',
            say: 'Infiltra rápido la tráquea, el esófago y el nervio recurrente, y por eso da disfonía, estridor y disfagia. La sobrevida media es de solo tres a seis meses, y el manejo suele ser paliativo, con radioterapia. Adulto mayor con masa que crece en semanas y estridor: piensa en anaplásico.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento del diferenciado',
      title: 'Cirugía, radioyodo y TSH frenada',
      nodes: [
        { id: 'dx', col: 0, row: 2, k: 'start', t: 'Carcinoma diferenciado', s: 'Papilar o folicular' },
        { id: 'tt', col: 1, row: 1, k: 'good', t: 'Tiroidectomía total', s: 'Mayor de 4 cm, ganglios, extensión o multifocal' },
        { id: 'lob', col: 1, row: 3, k: 'mech', t: 'Lobectomía', s: 'Papilar unifocal de 1 a 4 cm, bajo riesgo' },
        { id: 'rai', col: 2, row: 1, k: 'good', t: 'I-131 ablativo', s: 'Riesgo intermedio y alto' },
        { id: 'tg', col: 3, row: 0, k: 'effect', t: 'Tiroglobulina útil', s: 'Queda como marcador de recidiva' },
        { id: 'lt4', col: 3, row: 2, k: 'good', t: 'Levotiroxina supresora', s: 'La TSH hace crecer el tumor' },
        { id: 'meta', col: 4, row: 2, k: 'q', t: 'Meta de TSH', s: 'Alto riesgo: menor de 0,1 · bajo-moderado: 0,1 a 0,5' },
      ],
      edges: [
        { from: 'dx', to: 'tt' }, { from: 'dx', to: 'lob', label: 'centros especializados' },
        { from: 'tt', to: 'rai' }, { from: 'rai', to: 'tg', label: 'permite' },
        { from: 'rai', to: 'lt4' }, { from: 'lt4', to: 'meta' },
      ],
      steps: [
        { show: ['dx', 'tt'], note: 'El estándar es sacar toda la glándula',
          say: 'Ahora el tratamiento del diferenciado, que tiene tres pasos. El primero es la cirugía. El estándar oncológico es la tiroidectomía total cuando el tumor mide más de cuatro centímetros, se extiende fuera de la tiroides, tiene ganglios comprometidos o es multifocal.' },
        { show: ['lob'], note: 'La excepción: papilar chico y de bajo riesgo',
          say: 'La excepción es el papilar de bajo riesgo: unifocal, dentro de la tiroides, de uno a cuatro centímetros. Ahí se puede considerar solo una lobectomía, en centros especializados.' },
        { show: ['rai'], note: 'Se aprovecha que la célula capta yodo',
          say: 'El segundo paso es el radioyodo ablativo, en los de riesgo intermedio y alto: ganglios comprometidos, invasión capsular extensa, márgenes positivos o metástasis a distancia. Como la célula diferenciada capta yodo, el yodo radiactivo la destruye desde dentro.' },
        { show: ['tg'], note: 'Borrar el remanente sano también sirve para seguir',
          say: 'El radioyodo destruye los restos microscópicos de tiroides sana y las metástasis ocultas. Y tiene un beneficio extra: si no queda ninguna célula tiroidea, la tiroglobulina en sangre debería ser cero, y así se transforma en un marcador de recidiva.' },
        { show: ['lt4'], note: 'La TSH es un factor de crecimiento para el tumor',
          say: 'El tercer paso es la levotiroxina en dosis supresoras. ¿Por qué? Porque las células del carcinoma diferenciado tienen receptores de TSH, y la TSH las estimula a proliferar. Si frenas la TSH, le quitas un factor de crecimiento al tumor.' },
        { show: ['meta'], note: 'Cuánto frenar depende del riesgo',
          say: 'La meta depende del riesgo: TSH bajo cero coma uno en los de alto riesgo, y entre cero coma uno y cero coma cinco en los de riesgo bajo a moderado. Fíjate que esto aplica solo al diferenciado: en el medular la TSH no juega ningún rol.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguimiento',
      title: 'Un marcador para cada célula',
      cards: [
        { title: 'Diferenciado', tag: 'Tiroglobulina', kind: 'key', items: [
          { t: 'Tiroglobulina + anti-Tg', d: 'Siempre pedidos juntos',
            say: 'En el seguimiento del papilar y del folicular, el marcador de elección es la tiroglobulina en sangre. Y se pide siempre junto con los anticuerpos antitiroglobulina.' },
          { t: 'Anti-Tg falsean la Tg', d: 'La dejan artificialmente baja',
            say: '¿Por qué juntos? Porque si hay anticuerpos antitiroglobulina, interfieren con la medición y dejan la tiroglobulina falsamente baja. Una tiroglobulina indetectable no te tranquiliza si no sabes cómo están los anticuerpos.' },
          { t: 'Tras cirugía + I-131: indetectable', d: 'Menor de 0,2 ng/mL; si sube, recidiva',
            say: 'Después de una tiroidectomía total más ablación, la tiroglobulina debe ser prácticamente indetectable, bajo cero coma dos nanogramos por mililitro. Si sube o persiste, piensa en recidiva o metástasis.' },
          { t: 'Ecografía de cuello anual', d: 'Busca adenopatías metastásicas',
            say: 'Y se agrega una ecografía de cuello periódica, anual, para pillar temprano las adenopatías en las cadenas cervicales.' },
        ] },
        { title: 'Medular', tag: 'Calcitonina', kind: 'pharma', items: [
          { t: 'Calcitonina y CEA', d: 'La tiroglobulina no sirve',
            say: 'En el medular, en cambio, se siguen la calcitonina y el CEA. Pedir tiroglobulina en un medular es un error clásico, porque la célula C no la fabrica.' },
          { t: 'Sin I-131 ni TSH supresora', d: 'Tiroidectomía total + vaciamiento central',
            say: 'Y su tratamiento es distinto: tiroidectomía total obligatoria con vaciamiento ganglionar central profiláctico. El radioyodo y la supresión de TSH no tienen ningún rol.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Medular',
      title: 'Antes de operar el cuello',
      nodes: [
        { id: 'cmt', col: 0, row: 2, k: 'start', t: 'Carcinoma medular', s: 'Confirmado por citología' },
        { id: 'feo', col: 1, row: 1, k: 'alert', t: 'Descartar feocromocitoma', s: 'Metanefrinas plasma u orina' },
        { id: 'ret', col: 1, row: 3, k: 'q', t: 'Estudio de RET', s: 'Y a familiares de primer grado' },
        { id: 'sif', col: 2, row: 0, k: 'risk', t: 'Si hay feocromocitoma', s: 'Se opera primero' },
        { id: 'cri', col: 3, row: 0, k: 'trap', t: 'Si se omite', s: 'Crisis adrenérgica en pabellón' },
        { id: 'tt', col: 3, row: 2, k: 'good', t: 'Tiroidectomía total', s: 'Con vaciamiento central' },
      ],
      edges: [
        { from: 'cmt', to: 'feo' }, { from: 'cmt', to: 'ret' },
        { from: 'feo', to: 'sif' }, { from: 'sif', to: 'cri', label: 'no detectado' },
        { from: 'feo', to: 'tt', label: 'descartado o resecado' },
      ],
      steps: [
        { show: ['cmt'], note: 'El medular puede ser parte de un síndrome',
          say: 'Detengámonos en el medular, porque tiene una regla que se pregunta. Llega un paciente con un carcinoma medular confirmado. Antes de programar la cirugía, recuerda que uno de cada cuatro es hereditario y puede venir acompañado.' },
        { show: ['feo'], note: 'La prioridad antes del pabellón',
          say: 'La prioridad es descartar un feocromocitoma, que es parte de la neoplasia endocrina múltiple tipo dos. Se piden metanefrinas en plasma o en orina de veinticuatro horas.' },
        { show: ['sif', 'cri'], note: 'Por qué el orden importa',
          say: 'Si hay un feocromocitoma y no lo detectas, la anestesia o la manipulación del cuello pueden gatillar una crisis adrenérgica masiva, potencialmente fatal en pabellón. Por eso, si existe, el feocromocitoma se opera siempre antes que la tiroides.' },
        { show: ['ret'], note: 'El estudio genético es para toda la familia',
          say: 'En paralelo se estudia la mutación del RET, y si está presente, se extiende el estudio genético a los familiares de primer grado.' },
        { show: ['tt'], note: 'Recién entonces, el cuello',
          say: 'Con el feocromocitoma descartado o ya resecado, recién entonces se hace la tiroidectomía total con vaciamiento central. Feocromocitoma primero, cuello después.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Conducta y GES',
      title: 'Qué haces tú como médico general',
      cards: [
        { title: 'Derivación', tag: 'GES', kind: 'criteria', items: [
          { t: 'Cáncer en personas de 15 años y más', d: 'Diagnóstico 40 días · etapificación 30 · cirugía 30',
            say: 'Aterricemos. El cáncer de tiroides tiene garantía GES en personas de quince años y más: acceso al diagnóstico en cuarenta días, etapificación en treinta y cirugía en treinta días desde su indicación.' },
          { t: 'Ecografía de todo el cuello', d: 'Compartimento central y lateral',
            say: 'Confirmada la malignidad, se etapifica con una ecografía completa del cuello, mirando los ganglios del compartimento central y del lateral, porque eso define la extensión de la cirugía.' },
        ] },
        { title: 'Después de operado', tag: 'De por vida', kind: 'alert', items: [
          { t: 'Sin tiroides: levotiroxina siempre', d: 'Si la suspende, hipotiroidismo',
            say: 'Y un punto práctico que el examen sí pregunta: el paciente con tiroidectomía total no tiene tiroides. Si deja la levotiroxina, hace un hipotiroidismo franco, con todo lo que vimos en las clases de hipotiroidismo.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, desde la citología maligna hasta el seguimiento.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Los cuatro subtipos lado a lado',
      head: ['Subtipo', 'Diseminación', 'Marcador', 'Radioyodo'],
      rows: [
        { cells: ['Papilar (85–90 %)', 'Linfática: ganglios cervicales', 'Tiroglobulina', 'Excelente respuesta'],
          say: 'Repasemos la tabla que más se pregunta. Papilar: el más frecuente, linfático, se sigue con tiroglobulina y responde muy bien al radioyodo.' },
        { cells: ['Folicular (5–10 %)', 'Hematógena: pulmón y hueso', 'Tiroglobulina', 'Buena respuesta'],
          say: 'Folicular: hematógeno, a pulmón y hueso, también tiroglobulina y también capta radioyodo. La trampa es creer que se diagnostica con la punción.' },
        { cells: ['Medular (3–5 %)', 'Linfática y hematógena precoz', 'Calcitonina y CEA', 'Nula'],
          say: 'Medular: calcitonina y CEA, y el radioyodo no sirve. La trampa es pedir tiroglobulina o indicar yodo, o peor, operar sin descartar un feocromocitoma.' },
        { cells: ['Anaplásico (1–2 %)', 'Invasión local destructiva', 'Ninguno confiable', 'Nula'],
          say: 'Y anaplásico: invasión local brutal, sin marcador confiable y sin respuesta al radioyodo. Adulto mayor, masa pétrea y estridor.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 74 años consulta por una masa cervical anterior que notó hace 4 semanas y que ha crecido rápidamente. Refiere disfonía, dificultad para tragar y en las últimas horas ruido al respirar. Al examen se palpa una masa tiroidea de 6 cm, pétrea, fija a planos profundos, con estridor inspiratorio.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Carcinoma papilar de tiroides' },
        { letter: 'B', text: 'Carcinoma folicular de tiroides' },
        { letter: 'C', text: 'Carcinoma anaplásico de tiroides' },
        { letter: 'D', text: 'Bocio multinodular' },
        { letter: 'E', text: 'Tiroiditis subaguda de De Quervain' },
      ],
      correct: 'C',
      explanation: 'Adulta mayor con masa pétrea y fija que crece en semanas e invade nervio recurrente, esófago y tráquea (disfonía, disfagia, estridor): carcinoma anaplásico, 1–2 % de los casos, con sobrevida media de 3 a 6 meses. El papilar y el folicular crecen lento y afectan a pacientes más jóvenes.',
      say: {
        stem: 'Vamos a un caso. Mujer de setenta y cuatro años con una masa en el cuello que notó hace cuatro semanas y que ha crecido rápido. Tiene disfonía, le cuesta tragar y ahora hace ruido al respirar. Se palpa una masa tiroidea de seis centímetros, dura como piedra, fija, con estridor inspiratorio.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las alternativas: carcinoma papilar, carcinoma folicular, carcinoma anaplásico, bocio multinodular, o tiroiditis de De Quervain. Piénsalo.',
        answer: 'Es la C, carcinoma anaplásico. Junta las tres pistas: adulta mayor, crecimiento en semanas, e invasión del recurrente, el esófago y la tráquea. El distractor tentador es el papilar, porque es el más frecuente, pero el papilar crece lento y es de gente joven. Y la De Quervain duele y no da una masa pétrea que infiltra.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 146',
      stem: 'Una paciente de 42 años, consulta por adenopatía supraclavicular derecha persistente. Al examen físico se palpa además un nódulo cervical paratraqueal derecho de consistencia aumentada, que asciende con la deglución, de alrededor de 2 cm de diámetro.',
      question: '¿Cuál es el examen de elección para iniciar el estudio de esta paciente?',
      options: [
        { letter: 'A', text: 'Niveles plasmáticos de calcitonina' },
        { letter: 'B', text: 'Ecografía cervical' },
        { letter: 'C', text: 'TAC de cuello' },
        { letter: 'D', text: 'Resonancia magnética de cuello' },
        { letter: 'E', text: 'Biopsia quirúrgica' },
      ],
      correct: 'B',
      explanation: 'Un nódulo que asciende con la deglución es tiroideo, y junto a una adenopatía persistente sugiere cáncer con diseminación linfática. Aun así, el estudio parte con ecografía cervical, que caracteriza el nódulo y los ganglios y guía la punción. La calcitonina no es el examen inicial.',
      say: {
        stem: 'Ahora, preguntas reales. La primera es del EUNACOM de julio de dos mil diecisiete. Paciente de cuarenta y dos años con una adenopatía supraclavicular derecha persistente. Además se palpa un nódulo de unos dos centímetros, de consistencia aumentada, que sube al tragar.',
        question: '¿Cuál es el examen de elección para iniciar el estudio?',
        options: 'Las opciones: calcitonina, ecografía cervical, TAC de cuello, resonancia de cuello, o biopsia quirúrgica. Piénsalo.',
        answer: 'Es la B, la ecografía cervical. Un nódulo que sube al tragar es tiroideo, y con un ganglio persistente la sospecha de cáncer es alta, porque el papilar se disemina por vía linfática. Pero la sospecha no cambia el primer paso de imagen: la ecografía mira el nódulo y los ganglios, y guía la punción. El distractor tentador es la calcitonina, que suena a cáncer de tiroides, pero solo sirve para el medular y no es el examen inicial.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 36',
      stem: 'Un paciente se realiza una tiroidectomía total hace varios años, por un carcinoma tiroideo. Suspende el tratamiento con levotiroxina hace 6 meses.',
      question: '¿Qué alteración tendrá con mayor probabilidad en su examen físico?',
      options: [
        { letter: 'A', text: 'Mixedema pretibial' },
        { letter: 'B', text: 'Exoftalmo' },
        { letter: 'C', text: 'Melanoplaquias' },
        { letter: 'D', text: 'Piel seca' },
        { letter: 'E', text: 'Acantosis nigricans' },
      ],
      correct: 'D',
      explanation: 'Sin tiroides y sin levotiroxina, el paciente desarrolla hipotiroidismo, que se caracteriza por piel seca. El mixedema pretibial y el exoftalmo son de la enfermedad de Graves, las melanoplaquias del Addison y la acantosis nigricans de la resistencia a la insulina.',
      say: {
        stem: 'La segunda es del EUNACOM de diciembre de dos mil diecisiete. Un paciente tiene una tiroidectomía total hace varios años por un carcinoma tiroideo, y hace seis meses suspendió la levotiroxina.',
        question: '¿Qué alteración tendrá con mayor probabilidad en su examen físico?',
        options: 'Las opciones: mixedema pretibial, exoftalmo, melanoplaquias, piel seca, o acantosis nigricans. Piénsalo.',
        answer: 'Es la D, piel seca. Sin tiroides y sin levotiroxina, el paciente está hipotiroideo. El distractor tentador es el mixedema pretibial, por la palabra mixedema, pero el pretibial es de Graves, igual que el exoftalmo. Y las melanoplaquias son del Addison, que veremos en dos clases más.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 82',
      stem: 'Una mujer de 29 años, con antecedente de tiroidectomía por cáncer de tiroides hace 5 meses, consulta por síntomas de una semana de evolución, consistentes en astenia, nerviosismo y palpitaciones, que han ido en aumento. Además, el día de hoy presentó convulsiones en una oportunidad, por lo que fue traída al Servicio de Urgencia. Al examen físico está en Glasgow 15, sin convulsiones actuales ni focalidad neurológica. Se solicitan exámenes de laboratorio, entre los que destacan glicemia: 120 mg/dl, potasemia: 4,0 mEq/l, natremia: 144 mEq/L, calcemia 6,3 mg/dl, fósforo: 5,5 mg/dl, albúmina: 3,9 g/dl y hematocrito: 48%.',
      question: '¿Cuál es la conducta inicial más adecuada en esta paciente?',
      options: [
        { letter: 'A', text: 'Administrar suero fisiológico' },
        { letter: 'B', text: 'Solicitar TAC de cerebro' },
        { letter: 'C', text: 'Administrar calcio endovenoso' },
        { letter: 'D', text: 'Administrar lorazepam endovenoso' },
        { letter: 'E', text: 'Administrar calcitonina' },
      ],
      correct: 'C',
      explanation: 'Calcemia de 6,3 con fósforo alto y albúmina normal tras una tiroidectomía: hipocalcemia por hipoparatiroidismo postquirúrgico, que ya dio una convulsión. La conducta inicial es calcio endovenoso.',
      say: {
        stem: 'La tercera es del EUNACOM de julio de dos mil veinticuatro. Mujer de veintinueve años, operada de la tiroides por un cáncer hace cinco meses. Lleva una semana con astenia, nerviosismo y palpitaciones, y hoy tuvo una convulsión. Ahora está lúcida. La calcemia es seis coma tres, con fósforo alto, en cinco coma cinco, y albúmina normal.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: suero fisiológico, TAC de cerebro, calcio endovenoso, lorazepam endovenoso, o calcitonina. Piénsalo.',
        answer: 'Es la C, calcio endovenoso. El calcio bajo con fósforo alto, en una paciente con tiroidectomía, es un hipoparatiroidismo postquirúrgico: en la cirugía se sacaron o se dañaron las paratiroides. El distractor tentador es el TAC de cerebro por la convulsión, pero la causa ya está en el laboratorio. Y la calcitonina baja aún más el calcio. Este tema lo vemos a fondo en la clase de hipocalcemia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Una paciente de 45 años, previamente operada de tiroidectomía total y dosis ablativa de I-131 hace 2 años por un carcinoma papilar de tiroides, asiste a control anual de seguimiento oncológico.',
      question: '¿Cuál es el examen de laboratorio principal que se debe solicitar en sangre para pesquisar precozmente una recidiva tumoral?',
      options: [
        { letter: 'A', text: 'Calcitonina sérica basal' },
        { letter: 'B', text: 'Tiroglobulina sérica en conjunto con anticuerpos anti-tiroglobulina' },
        { letter: 'C', text: 'Antígeno carcinoembrionario (CEA)' },
        { letter: 'D', text: 'TSH y T3 total' },
        { letter: 'E', text: 'Fosfatasas alcalinas óseas' },
      ],
      correct: 'B',
      explanation: 'En el carcinoma diferenciado tratado con tiroidectomía total y ablación, la tiroglobulina debe quedar indetectable (menor de 0,2 ng/mL); si reaparece o sube, indica recidiva. Se pide siempre con anticuerpos anti-tiroglobulina, porque estos pueden dejarla falsamente baja.',
      say: {
        stem: 'Ahora dos casos representativos del banco, sobre lo que más se estudia de este tema. El primero: paciente de cuarenta y cinco años, operada con tiroidectomía total y radioyodo hace dos años por un carcinoma papilar, que viene a su control anual.',
        question: '¿Qué examen de sangre pides para pesquisar precozmente una recidiva?',
        options: 'Las opciones: calcitonina, tiroglobulina junto con anticuerpos antitiroglobulina, CEA, TSH con T tres total, o fosfatasas alcalinas óseas. Piénsalo.',
        answer: 'Es la B, tiroglobulina con anticuerpos antitiroglobulina. Sin tiroides y sin remanente, la tiroglobulina debe ser indetectable, y si reaparece, hay recidiva. Los distractores tentadores son la calcitonina y el CEA, pero esos son los marcadores del medular, no del papilar. Y recuerda pedir los anticuerpos, que pueden dejar la tiroglobulina falsamente baja.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un hombre de 38 años presenta un nódulo tiroideo de 2.5 cm cuya biopsia por punción confirma un Carcinoma Medular de Tiroides. El paciente refiere que su padre falleció a los 45 años por una causa no precisada asociada a crisis de cefalea e hipertensión severa.',
      question: 'Previo a programar la cirugía de resección cervical, ¿cuál es la conducta diagnóstica de máxima prioridad que debe llevarse a cabo?',
      options: [
        { letter: 'A', text: 'Indicar una dosis terapéutica inmediata de radioyodo I-131' },
        { letter: 'B', text: 'Descartar la coexistencia de un feocromocitoma mediante metanefrinas plasmáticas o urinarias y realizar estudio genético de la mutación del protooncogén RET' },
        { letter: 'C', text: 'Administrar quimioterapia con cisplatino para reducir la masa antes de la tiroidectomía' },
        { letter: 'D', text: 'Indicar levotiroxina a dosis altas para suprimir la TSH a valores menores a 0.01 mIU/L' },
        { letter: 'E', text: 'Solicitar una cintigrafía con yodo radiactivo de cuerpo entero' },
      ],
      correct: 'B',
      explanation: 'El 25 % de los carcinomas medulares es hereditario (NEM 2A o 2B, mutación RET). Antes de operar el cuello hay que descartar un feocromocitoma con metanefrinas: si no se detecta, la anestesia puede gatillar una crisis adrenérgica fatal. Si existe, se reseca antes que la tiroides.',
      say: {
        stem: 'El segundo: hombre de treinta y ocho años con un carcinoma medular confirmado por punción. Su padre murió a los cuarenta y cinco años con crisis de cefalea e hipertensión severa.',
        question: 'Antes de programar la cirugía del cuello, ¿cuál es la conducta de máxima prioridad?',
        options: 'Las opciones: radioyodo, descartar feocromocitoma con metanefrinas y estudiar el RET, quimioterapia con cisplatino, levotiroxina supresora, o cintigrama de cuerpo entero con yodo. Piénsalo.',
        answer: 'Es la B. Las crisis de cefalea e hipertensión del padre gritan feocromocitoma, y el medular puede ser parte de una neoplasia endocrina múltiple tipo dos. Si operas sin descartarlo, arriesgas una crisis adrenérgica en pabellón. Los distractores tentadores son el radioyodo, el cintigrama con yodo y la TSH supresora, y los tres caen por lo mismo: la célula C no capta yodo ni depende de la TSH.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Subtipos', tag: 'Origen celular', kind: 'key', items: [
          { t: 'Papilar: linfático · folicular: hematógeno', d: 'Ambos: tiroglobulina y radioyodo',
            say: 'Cerremos con las reglas de oro. Papilar linfático, folicular hematógeno, y los dos se siguen con tiroglobulina y responden al radioyodo.' },
          { t: 'Medular: calcitonina y CEA', d: 'Sin radioyodo; feocromocitoma antes del cuello',
            say: 'El medular viene de la célula C: calcitonina y CEA, nada de radioyodo, y antes de operarlo se descarta un feocromocitoma y se estudia el RET.' },
          { t: 'Anaplásico: adulto mayor, semanas', d: 'Masa pétrea, estridor, pronóstico ominoso',
            say: 'El anaplásico es el del adulto mayor con una masa pétrea que crece en semanas y compromete la vía aérea.' },
        ] },
        { title: 'Diferenciado', tag: 'Tratamiento y control', kind: 'criteria', items: [
          { t: 'Cirugía + I-131 + TSH frenada', d: 'Tg siempre con anti-Tg',
            say: 'En el diferenciado: cirugía, radioyodo según riesgo y levotiroxina para frenar la TSH, y en el control, tiroglobulina siempre con anticuerpos. Si te llevas una sola idea de hoy: pregúntate de qué célula viene el tumor, porque eso decide el marcador, el radioyodo y la cirugía. En la próxima clase pasamos a las suprarrenales, con el síndrome de Cushing. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Cáncer de tiroides: del subtipo al seguimiento',
    root: N('start', 'Malignidad confirmada', 'Bethesda V o VI, o biopsia',
      'Parte con la malignidad confirmada, por citología Bethesda cinco o seis o por la biopsia quirúrgica. Se etapifica con una ecografía completa del cuello y se deriva por el GES.',
      ['', N('q', '¿De qué célula viene?', 'Folicular o célula C',
        'La primera pregunta es de qué célula viene el tumor, porque cambia todo el manejo.',
        ['Diferenciado', N('do', 'Tiroidectomía total', 'Lobectomía si papilar de bajo riesgo',
          'Si es papilar o folicular, tiroidectomía total, o lobectomía en el papilar unifocal de bajo riesgo en centros especializados.',
          ['Riesgo intermedio o alto', N('do', 'I-131 + levotiroxina supresora', 'TSH según riesgo',
            'En riesgo intermedio o alto se agrega radioyodo ablativo, y levotiroxina para frenar la TSH según el riesgo.',
            ['Control', N('ok', 'Tiroglobulina + anti-Tg + ecografía', 'Tg indetectable: remisión',
              'El seguimiento es con tiroglobulina y anticuerpos, más ecografía de cuello anual. Tiroglobulina indetectable significa remisión; si sube, recidiva.')])])],
        ['Medular', N('alert', 'Descartar feocromocitoma', 'Metanefrinas + estudio RET',
          'Si es medular, antes de operar se descartan un feocromocitoma y la mutación del RET, con estudio a los familiares.',
          ['Descartado o resecado', N('refer', 'Tiroidectomía total + vaciamiento central', 'Seguir con calcitonina y CEA',
            'Luego, tiroidectomía total con vaciamiento central, y seguimiento con calcitonina y CEA, sin radioyodo.')])],
        ['Anaplásico', N('alert', 'Manejo paliativo', 'Radioterapia, sobrevida de meses',
          'Si es anaplásico, el pronóstico es ominoso y el manejo suele ser paliativo, con radioterapia.')])]),
  },
};
