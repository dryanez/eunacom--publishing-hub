// Clase 3.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-11).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-11',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo empieza, cuándo hace peak y cuándo se inicia',
      say: 'Bienvenidos al bloque de insulinoterapia. Hoy vemos los tipos de insulina y cuándo se inicia en la diabetes tipo dos. Parece un tema de memoria, con tablas de horas, pero en el examen se usa para razonar: por qué un paciente hace una hipoglicemia a las tres de la mañana, o qué insulina corrige una glicemia después de comer. Y sobre todo, en qué momento dejamos de agregar pastillas y pasamos a la insulina.',
    },

    {
      type: 'flow',
      kicker: 'La idea base',
      title: 'Dos necesidades: basal y prandial',
      nodes: [
        { id: 'pan', col: 0, row: 1, k: 'start', t: 'Páncreas normal', s: 'Secreta de dos formas' },
        { id: 'bas', col: 1, row: 0, k: 'mech', t: 'Secreción basal', s: 'Todo el día y la noche' },
        { id: 'pra', col: 1, row: 2, k: 'mech', t: 'Secreción prandial', s: 'Peak con cada comida' },
        { id: 'ib', col: 2, row: 0, k: 'good', t: 'Insulinas basales', s: 'NPH, glargina, degludec' },
        { id: 'ip', col: 2, row: 2, k: 'good', t: 'Insulinas prandiales', s: 'Cristalina, lispro, aspart' },
        { id: 'ayu', col: 3, row: 0, k: 'effect', t: 'Controlan el ayuno', s: 'Y entre comidas' },
        { id: 'pos', col: 3, row: 2, k: 'effect', t: 'Controlan el postprandial', s: 'De esa comida' },
      ],
      edges: [
        { from: 'pan', to: 'bas' }, { from: 'pan', to: 'pra' },
        { from: 'bas', to: 'ib', label: 'imitan' }, { from: 'pra', to: 'ip', label: 'imitan' },
        { from: 'ib', to: 'ayu' }, { from: 'ip', to: 'pos' },
      ],
      steps: [
        { show: ['pan'], note: 'Imitar lo que hace el páncreas',
          say: 'Partamos por la lógica. La insulina que indicamos intenta imitar lo que hace un páncreas sano, y el páncreas secreta insulina de dos maneras.' },
        { show: ['bas', 'ib'], note: 'Un fondo constante',
          say: 'La primera es un fondo constante, de día y de noche, que frena al hígado para que no libere glucosa. Eso lo imitan las insulinas basales: la NPH y los análogos de acción prolongada, como glargina y degludec.' },
        { show: ['pra', 'ip'], note: 'Un pulso con cada comida',
          say: 'La segunda es un pulso cada vez que comemos. Eso lo imitan las insulinas prandiales: la cristalina, también llamada regular, y los análogos ultrarrápidos, como lispro, aspart o glulisina.' },
        { show: ['ayu', 'pos'], note: 'Cada insulina corrige su propia glicemia',
          say: 'Y de aquí sale una regla que usarás en toda la unidad: la basal controla la glicemia de ayuno; la prandial controla la glicemia después de la comida que cubre. Si sabes qué glicemia está alta, sabes qué insulina tocar.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Farmacocinética',
      title: 'Insulinas basales',
      cards: [
        { title: 'NPH', tag: 'Intermedia · humana', kind: 'pharma', items: [
          { t: 'Inicio 1–2 h · peak 4–10 h', d: 'Duración 12 a 18 horas',
            say: 'La NPH es la insulina basal clásica, la que más vas a usar en atención primaria. Es de acción intermedia: empieza a actuar en una a dos horas, tiene un peak marcado entre las cuatro y las diez horas, y dura de doce a dieciocho horas.' },
          { t: 'El peak es su problema', d: 'Principal causa de hipoglicemia nocturna',
            say: 'Y ese peak es su punto débil. Es marcado y poco predecible, y es la principal causa de hipoglicemia nocturna cuando se inyecta en el momento equivocado. Lo vemos en detalle en un momento.' },
        ] },
        { title: 'Análogos prolongados', tag: 'Glargina · degludec', kind: 'key', items: [
          { t: 'Sin peak: perfil plano', d: 'Absorción lenta y pareja',
            say: 'Los análogos basales, como glargina y degludec, se absorben lento y no tienen un peak pronunciado. Se dice que tienen un perfil plano.' },
          { t: 'Una vez al día, 24 h o más', d: 'Mucha menos hipoglicemia nocturna',
            say: 'Se inyectan una vez al día, a la misma hora, y duran veinticuatro horas o más; la degludec llega hasta cuarenta y dos. Como no tienen peak, reducen mucho el riesgo de hipoglicemia nocturna.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Farmacocinética',
      title: 'Insulinas prandiales',
      cards: [
        { title: 'Cristalina o regular', tag: 'Rápida · humana', kind: 'pharma', items: [
          { t: 'Inicio 30–60 min · peak 2–3 h', d: 'Duración 6 a 8 horas',
            say: 'La insulina cristalina, o regular, empieza a actuar entre treinta y sesenta minutos, hace su peak a las dos o tres horas y dura de seis a ocho horas.' },
          { t: '30 minutos antes de comer', d: 'Única que se usa endovenosa',
            say: 'Como demora en partir, se inyecta treinta minutos antes de comer. Y tiene un dato que se pregunta: es la única insulina que se puede administrar por vía endovenosa, en bomba de infusión, como en la cetoacidosis o en la unidad de cuidados intensivos.' },
        ] },
        { title: 'Ultrarrápidas', tag: 'Lispro · aspart · glulisina', kind: 'key', items: [
          { t: 'Inicio 10–15 min · peak ~1 h', d: 'Duración 3 a 5 horas',
            say: 'Los análogos ultrarrápidos empiezan en diez a quince minutos, hacen su peak alrededor de la hora y duran de tres a cinco horas.' },
          { t: 'Justo antes de comer', d: 'O incluso inmediatamente después',
            say: 'Por eso se inyectan justo antes de comer, o incluso inmediatamente después. Esa es la diferencia práctica con la cristalina: una se pone media hora antes, la otra al sentarse a la mesa.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'NPH en la cena vs al acostarse',
      nodes: [
        { id: 'cen', col: 0, row: 0, k: 'cause', t: 'NPH con la cena', s: '20:00 h' },
        { id: 'pk1', col: 1, row: 0, k: 'mech', t: 'Peak a las 2–4 AM', s: 'Coincide con la glicemia más baja' },
        { id: 'hip', col: 2, row: 0, k: 'alert', t: 'Hipoglicemia nocturna', s: 'Sudor, temblor, palpitaciones' },
        { id: 'bed', col: 0, row: 2, k: 'good', t: 'NPH al acostarse', s: '22:00 a 23:00 h' },
        { id: 'pk2', col: 1, row: 2, k: 'mech', t: 'Peak a las 6–8 AM', s: 'Coincide con el despertar' },
        { id: 'ok', col: 2, row: 2, k: 'good', t: 'Ayuno controlado', s: 'Sin hipoglicemia' },
      ],
      edges: [
        { from: 'cen', to: 'pk1' }, { from: 'pk1', to: 'hip' },
        { from: 'bed', to: 'pk2' }, { from: 'pk2', to: 'ok' },
        { from: 'hip', to: 'bed', label: 'se corrige' },
      ],
      steps: [
        { show: ['cen', 'pk1'], note: 'Suma horas: peak de madrugada',
          say: 'Ahora usemos la farmacocinética. Si la NPH se inyecta con la cena, a las ocho de la noche, y su peak llega entre cuatro y diez horas después, cae justo en la madrugada, entre las dos y las cuatro. Y esa es la hora en que la glicemia fisiológica está más baja.' },
        { show: ['hip'], note: 'El paciente despierta sudando',
          say: 'Resultado: hipoglicemia nocturna. El paciente despierta con sudoración, temblor y palpitaciones a las tres de la mañana.' },
        { show: ['bed', 'pk2'], note: 'Correr la hora, no quitar la insulina',
          say: 'La solución no es suspender la NPH. Es moverla: inyectarla al acostarse, entre las diez y las once de la noche. El peak se corre hacia las seis a ocho de la mañana, justo cuando el paciente despierta y toma desayuno.' },
        { show: ['ok'], note: 'Por eso la NPH se indica bedtime',
          say: 'Así controla el ayuno sin producir hipoglicemia. Por eso la NPH nocturna siempre se indica al acostarse. Es una pregunta clásica: te dan la hora de la inyección y la hora de los síntomas, y tú sumas.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Indicaciones',
      title: '¿Cuándo se inicia insulina en la DM2?',
      nodes: [
        { id: 'dm2', col: 0, row: 2, k: 'start', t: 'Paciente con DM2', s: '¿Sigue con orales?' },
        { id: 'cat', col: 1, row: 0, k: 'alert', t: 'Descompensación catabólica', s: 'HbA1c ≥ 9–10 % · ayuno > 250–300' },
        { id: 'fal', col: 1, row: 1, k: 'risk', t: 'Falla secundaria', s: '2 o 3 orales, 3 meses sobre meta' },
        { id: 'con', col: 1, row: 2, k: 'risk', t: 'Orales contraindicados', s: 'VFG < 30 o falla hepática grave' },
        { id: 'emb', col: 1, row: 3, k: 'risk', t: 'Embarazo', s: 'Fármaco de elección' },
        { id: 'hos', col: 1, row: 4, k: 'risk', t: 'Hospitalización aguda', s: 'IAM, ACV, sepsis, cirugía, corticoides' },
        { id: 'ins', col: 3, row: 2, k: 'good', t: 'Insulina', s: 'Sin agregar otra pastilla' },
      ],
      edges: [
        { from: 'dm2', to: 'cat' }, { from: 'dm2', to: 'fal' }, { from: 'dm2', to: 'con' },
        { from: 'dm2', to: 'emb' }, { from: 'dm2', to: 'hos' },
        { from: 'cat', to: 'ins' }, { from: 'fal', to: 'ins' }, { from: 'con', to: 'ins' },
        { from: 'emb', to: 'ins' }, { from: 'hos', to: 'ins' },
      ],
      steps: [
        { show: ['dm2'], note: 'La pregunta: ¿cuándo dejo las pastillas?',
          say: 'Pasemos a la otra mitad de la clase: cuándo se inicia insulina en un diabético tipo dos. Hay cinco escenarios, y el examen pregunta sobre todo los dos primeros.' },
        { show: ['cat'], note: 'El más preguntado',
          say: 'El primero es la descompensación catabólica: hemoglobina glicosilada de nueve a diez por ciento o más, glicemias de ayuno sobre doscientos cincuenta a trescientos, poliuria, polidipsia, baja de peso involuntaria o cetonuria. Ese paciente está perdiendo peso porque le falta insulina, y la respuesta es darle insulina, aunque sea obeso y aunque recién debute.' },
        { show: ['fal'], note: 'Cuando las pastillas ya no bastan',
          say: 'El segundo es la falla secundaria: un paciente con dos o tres orales a dosis óptimas, por ejemplo metformina con sulfonilurea, que después de tres meses sigue con la hemoglobina glicosilada sobre su meta. Seguir sumando pastillas no es la respuesta.' },
        { show: ['con'], note: 'Cuando las pastillas no se pueden usar',
          say: 'El tercero es cuando los orales están contraindicados: enfermedad renal con filtración bajo treinta, donde la metformina está contraindicada, o falla hepática grave. Ahí la insulina es el hipoglicemiante más seguro.' },
        { show: ['emb', 'hos'], note: 'Embarazo y hospitalización',
          say: 'El cuarto es el embarazo, como vimos en la clase de la gestante. Y el quinto, la hospitalización por un evento agudo: infarto, accidente cerebrovascular, sepsis grave, cirugía mayor, o corticoides en dosis altas.' },
        { show: ['ins'], note: 'Cómo se parte: NPH al acostarse',
          say: 'En todos, la respuesta es insulina. Y en el paciente ambulatorio se parte simple: NPH al acostarse, diez unidades o cero coma uno a cero coma dos unidades por kilo, manteniendo la metformina. El ajuste lo vemos en la próxima clase.' },
      ],
    },

    {
      type: 'points',
      kicker: 'En la práctica',
      title: 'Conservación y técnica de inyección',
      cards: [
        { title: 'Conservación', tag: 'Se pregunta', kind: 'criteria', items: [
          { t: 'Cerrada: refrigerador 2–8 °C', d: 'Nunca congelar',
            say: 'Unos datos prácticos que también se preguntan. La insulina cerrada se guarda en el refrigerador, entre dos y ocho grados, y nunca se congela.' },
          { t: 'Abierta: hasta 28–30 días', d: 'A temperatura ambiente, sin sol',
            say: 'Una vez abierto el frasco o el lápiz, puede quedar a temperatura ambiente, hasta veinticinco a treinta grados, por un máximo de veintiocho a treinta días, lejos del calor y del sol.' },
        ] },
        { title: 'Lipohipertrofia', tag: 'Rotar siempre', kind: 'alert', items: [
          { t: 'Por no rotar los sitios', d: 'Abdomen, muslos, brazos, glúteos',
            say: 'La insulina se inyecta subcutánea en abdomen, muslos, brazos o glúteos, rotando siempre el sitio. Si el paciente pincha siempre en el mismo punto, se forma un acúmulo de grasa fibrosa: la lipohipertrofia.' },
          { t: 'Absorción errática', d: 'Glicemias que oscilan sin explicación',
            say: 'Y ahí la insulina se absorbe de forma errática, con glicemias que suben y bajan sin explicación, y que se confunden con resistencia a la insulina. Ante un control inexplicable, revisa los sitios de inyección antes de subir la dosis.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Resumamos las indicaciones de inicio en un árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Perfiles de acción que se preguntan',
      head: ['Insulina', 'Inicio · peak · duración', 'Cuándo se inyecta'],
      rows: [
        { cells: ['Ultrarrápida (lispro, aspart)', '10–15 min · 1–2 h · 3–5 h', 'Justo antes de comer, o después'],
          say: 'Repasemos los perfiles en una tabla. Ultrarrápida: parte en diez a quince minutos y dura de tres a cinco horas. Se inyecta justo antes de comer.' },
        { cells: ['Cristalina (regular)', '30–60 min · 2–3 h · 6–8 h', '30 min antes de comer; también EV'],
          say: 'Cristalina: parte en media hora a una hora y dura de seis a ocho. Treinta minutos antes de comer, y es la única endovenosa.' },
        { cells: ['NPH', '1–2 h · 4–10 h · 12–18 h', 'Al acostarse (22–23 h) o c/12 h'],
          say: 'NPH: peak de cuatro a diez horas. Al acostarse, o cada doce horas. El error es ponerla con la cena.' },
        { cells: ['Glargina U100, detemir', '1–2 h · sin peak · 20–24 h', '1 vez al día, misma hora'],
          say: 'Glargina: sin peak, una vez al día, siempre a la misma hora.' },
        { cells: ['Degludec, glargina U300', '30–90 min · sin peak · > 24 h', '1 vez al día, horario flexible'],
          say: 'Y degludec: sin peak, más de veinticuatro horas, con mayor flexibilidad de horario.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 56 años con DM2 de 8 años, con metformina 850 mg c/8 h y glibenclamida 10 mg c/12 h, adherencia confirmada. Consulta por astenia, baja de 5 kg en 2 meses y nicturia. IMC 27, PA 130/80. Glicemia de ayuno 264 mg/dL, HbA1c 10,4 %, creatinina 0,9 mg/dL, orina sin cetonas.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Agregar sitagliptina y controlar en 3 meses' },
        { letter: 'B', text: 'Iniciar NPH al acostarse, manteniendo la metformina' },
        { letter: 'C', text: 'Aumentar la glibenclamida a dosis máxima' },
        { letter: 'D', text: 'Suspender los orales e iniciar insulina cristalina endovenosa' },
        { letter: 'E', text: 'Iniciar NPH con la cena y suspender la metformina' },
      ],
      correct: 'B',
      explanation: 'Falla secundaria a biterapia oral a dosis plenas, con HbA1c > 10 % y síntomas catabólicos: se inicia insulina basal, NPH al acostarse (10 UI o 0,1–0,2 UI/kg), manteniendo la metformina. La NPH con la cena produce hipoglicemia nocturna; la vía endovenosa es para el paciente hospitalizado grave.',
      say: {
        stem: 'Vamos con un caso. Hombre de cincuenta y seis años, diabético de ocho años, con metformina y glibenclamida a dosis altas y buena adherencia. Consulta por cansancio, baja de cinco kilos en dos meses y nicturia. Tiene una glicemia de ayuno de doscientos sesenta y cuatro, hemoglobina glicosilada de diez coma cuatro, creatinina normal y orina sin cetonas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: agregar sitagliptina, NPH al acostarse manteniendo la metformina, subir la glibenclamida, insulina cristalina endovenosa, o NPH con la cena suspendiendo la metformina. Piénsalo.',
        answer: 'Es la B. Tiene dos indicaciones a la vez: falla secundaria a dos orales, y síntomas catabólicos con hemoglobina glicosilada sobre diez. Agregar otra pastilla es la trampa más tentadora, pero no alcanza. Se inicia NPH al acostarse y se mantiene la metformina. La E falla dos veces: la NPH con la cena da hipoglicemia de madrugada, y la metformina no se suspende. La cristalina endovenosa es para el hospitalizado grave, no para este paciente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 17',
      stem: 'Un hombre de 33 años, obeso, consulta por polidipsia y baja de peso de 6 kilogramos, en los últimos dos meses. Su examen físico no aporta mayor información. Se solicitan exámenes, entre los que destacan glicemia de ayuno de 245 mg/dl y hemoglobina glicosilada: 9,2%.',
      question: 'El tratamiento inicial más adecuado es:',
      options: [
        { letter: 'A', text: 'Metformina' },
        { letter: 'B', text: 'Sitagliptina' },
        { letter: 'C', text: 'Insulina' },
        { letter: 'D', text: 'Liraglutide' },
        { letter: 'E', text: 'Glibenclamida' },
      ],
      correct: 'C',
      explanation: 'Síntomas de descompensación catabólica (polidipsia, baja de peso) con HbA1c mayor a 9 %: está indicada la insulina desde el inicio, aunque el paciente sea obeso.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Hombre de treinta y tres años, obeso, que consulta por polidipsia y baja de seis kilos en dos meses. Tiene una glicemia de ayuno de doscientos cuarenta y cinco y una hemoglobina glicosilada de nueve coma dos.',
        question: '¿Cuál es el tratamiento inicial más adecuado?',
        options: 'Las opciones: metformina, sitagliptina, insulina, liraglutide o glibenclamida. Piénsalo.',
        answer: 'Es la C, insulina. Tiene síntomas catabólicos, polidipsia y baja de peso, y una hemoglobina glicosilada sobre nueve. Eso es déficit de insulina, y se trata con insulina desde el inicio. La metformina es la trampa: el paciente es obeso y joven, y suena a diabetes tipo dos típica que parte con metformina. Pero la baja de peso te está diciendo que al páncreas ya no le alcanza.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 125',
      stem: 'Un paciente de 55 años, diabético e hipertenso, en tratamiento con metformina 2000mg al día, glibenclamida 15mg al día y enalapril 20mg al día, acude a control con exámenes, donde destaca glicemia de ayuno de 180mg/dL y hemoglobina glicosilada de 8,8%. Se ha mantenido sin síntomas y su examen físico es normal.',
      question: 'La conducta más adecuada en este caso es:',
      options: [
        { letter: 'A', text: 'Aumentar dosis de glibenclamida' },
        { letter: 'B', text: 'Aumentar dosis de metformina' },
        { letter: 'C', text: 'Iniciar insulina' },
        { letter: 'D', text: 'Reemplazar metformina con rosiglitazona' },
        { letter: 'E', text: 'Reemplazar glibenclamida con sitagliptina' },
      ],
      correct: 'C',
      explanation: 'Falla secundaria: con metformina y glibenclamida en dosis altas sigue con HbA1c de 8,8 %. Subir algo las dosis tendría poco efecto para lo lejos que está de la meta; se inicia insulina.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil trece. Paciente de cincuenta y cinco años, diabético e hipertenso, con metformina dos gramos al día, glibenclamida quince miligramos y enalapril. Está asintomático, con glicemia de ayuno de ciento ochenta y hemoglobina glicosilada de ocho coma ocho.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: subir la glibenclamida, subir la metformina, iniciar insulina, cambiar la metformina por rosiglitazona, o cambiar la glibenclamida por sitagliptina. Piénsalo.',
        answer: 'Es la C, iniciar insulina. Aquí no hay síntomas catabólicos: la indicación es la falla secundaria. Ya usa dos orales en dosis altas y sigue lejos de la meta. Subir un poco la glibenclamida o la metformina es tentador, porque todavía queda margen, pero el efecto sería pequeño para una hemoglobina glicosilada de ocho coma ocho.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 149',
      stem: 'Un paciente de 82 años, diabético tipo 2, en tratamiento con metformina y dieta, acude a control, con glicemia de ayuno de 355 mg/dl, hemoglobina glicosilada de 9,5%.',
      question: '¿Cuál es la conducta más adecuada para el manejo de su diabetes?',
      options: [
        { letter: 'A', text: 'Agregar glibenclamida' },
        { letter: 'B', text: 'Agregar sitagliptina' },
        { letter: 'C', text: 'Inicial insulina NPH' },
        { letter: 'D', text: 'Iniciar insulina glargina' },
        { letter: 'E', text: 'Iniciar liraglutide' },
      ],
      correct: 'C',
      explanation: 'Glicemia de ayuno > 300 mg/dL y HbA1c > 9 %: indicación de insulina. La insulina basal de inicio en atención primaria es la NPH al acostarse, manteniendo la metformina.',
      say: {
        stem: 'Una más, del EUNACOM de diciembre de dos mil veintidós. Paciente de ochenta y dos años, diabético tipo dos, con metformina y dieta, que llega con una glicemia de ayuno de trescientos cincuenta y cinco y una hemoglobina glicosilada de nueve coma cinco.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: agregar glibenclamida, agregar sitagliptina, iniciar NPH, iniciar glargina, o iniciar liraglutide. Piénsalo.',
        answer: 'Es la C, insulina NPH. Una glicemia de ayuno sobre trescientos con hemoglobina glicosilada sobre nueve es indicación de insulina, sin importar la edad. La duda es entre la C y la D, y la clave es el escenario: en atención primaria, la insulina basal con la que se parte es la NPH al acostarse. La glargina es la alternativa si se dispone de ella.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 24',
      stem: 'Mujer de 55 años con DM2 en tratamiento con metformina, requiere corticoterapia con prednisona 40 mg/día por enfermedad pulmonar. Sus glicemias de ayuno eran 130 mg/dL y post-prandiales suben a 280 mg/dL.',
      question: '¿Cuál es el ajuste más adecuado?',
      options: [
        { letter: 'A', text: 'Iniciar insulina' },
        { letter: 'B', text: 'Agregar metformina adicional' },
        { letter: 'C', text: 'Pioglitazona' },
        { letter: 'D', text: 'Glibenclamida' },
        { letter: 'E', text: 'Sitagliptina' },
      ],
      correct: 'A',
      explanation: 'Los corticoides en dosis altas son una de las indicaciones de insulinoterapia: permiten ajustar rápido y con flexibilidad. Los hipoglicemiantes orales no logran el control necesario.',
      say: {
        stem: 'La última, del EUNACOM de julio de dos mil veinticinco. Mujer de cincuenta y cinco años, diabética con metformina, que necesita prednisona cuarenta miligramos al día por una enfermedad pulmonar. Sus ayunos eran de ciento treinta, y ahora las glicemias después de comer suben a doscientos ochenta.',
        question: '¿Cuál es el ajuste más adecuado?',
        options: 'Las opciones: iniciar insulina, más metformina, pioglitazona, glibenclamida o sitagliptina. Piénsalo.',
        answer: 'Es la A, iniciar insulina. Los corticoides en dosis altas están en la lista de indicaciones de insulina, y la insulina permite ajustar rápido mientras dura el tratamiento. Fíjate que el ayuno casi no cambió: lo que se dispara es el postprandial, y eso lo controla una insulina prandial. Agregar otra pastilla es el distractor, pero no da el control que se necesita.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Perfiles', tag: 'Sumar horas', kind: 'pharma', items: [
          { t: 'NPH: peak 4–10 h', d: 'Siempre al acostarse',
            say: 'Cerremos con las reglas de oro. La NPH tiene un peak de cuatro a diez horas: con la cena da hipoglicemia de madrugada, y por eso va al acostarse.' },
          { t: 'Cristalina 30 min antes', d: 'Ultrarrápida justo antes; cristalina EV',
            say: 'La cristalina se pone treinta minutos antes de comer; la ultrarrápida, justo antes. Y la cristalina es la única endovenosa.' },
        ] },
        { title: 'Inicio en DM2', tag: 'No más pastillas', kind: 'alert', items: [
          { t: 'Catabolismo o HbA1c ≥ 9–10 %', d: 'Aunque sea obeso o recién diagnosticado',
            say: 'Se inicia insulina ante una descompensación catabólica o hemoglobina glicosilada de nueve a diez o más, aunque el paciente sea obeso.' },
          { t: 'Falla de 2 o 3 orales', d: 'También VFG < 30, embarazo, hospitalización',
            say: 'También ante la falla de dos o tres orales, la filtración bajo treinta, el embarazo y la hospitalización aguda.' },
        ] },
        { title: 'Cómo se parte', tag: 'APS', kind: 'key', items: [
          { t: 'NPH bedtime + metformina', d: '10 UI o 0,1–0,2 UI/kg',
            say: 'Y se parte con NPH al acostarse más metformina. Si te llevas una sola idea de hoy: cuando el paciente baja de peso o las pastillas ya no alcanzan, la respuesta es insulina, y la NPH va al acostarse. En la próxima clase aprendemos a ajustarla. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'DM2: ¿cuándo se inicia insulina?',
    root: N('start', 'Paciente con DM2', 'En control ambulatorio',
      'Paciente con diabetes tipo dos en control. La pregunta es si sigue con orales o si ya es momento de insulina.',
      ['', N('q', '¿Catabolismo o HbA1c ≥ 9–10 %?', 'Baja de peso, poliuria, ayuno > 250–300',
        '¿Tiene síntomas catabólicos, glicemias de ayuno sobre doscientos cincuenta a trescientos, o hemoglobina glicosilada de nueve a diez o más?',
        ['SÍ', N('alert', 'Insulina de entrada', 'Aunque sea obeso o debute',
          'Si la respuesta es sí, insulina de entrada, sin probar otra pastilla, aunque el paciente sea obeso o recién diagnosticado.')],
        ['NO', N('q', '¿Falla o contraindicación de orales?', '2–3 orales sobre meta · VFG < 30',
          'Si no hay catabolismo, ¿sigue sobre su meta tras tres meses con dos o tres orales a dosis óptimas, o tiene los orales contraindicados, como una filtración bajo treinta?',
          ['SÍ', N('do', 'NPH al acostarse', '10 UI o 0,1–0,2 UI/kg + metformina',
            'Si es así, se inicia NPH al acostarse, diez unidades o cero coma uno a cero coma dos por kilo, manteniendo la metformina si no está contraindicada.')],
          ['NO', N('ok', 'Seguir con orales', 'Ajustar según meta',
            'Si no, se continúa con el tratamiento oral escalonado. Pero recuerda: el embarazo y la hospitalización aguda también son indicación de insulina.')])])]),
  },
};
