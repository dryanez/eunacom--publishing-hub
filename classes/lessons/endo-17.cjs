// Clase 7.17 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-17).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-17',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Reconocer la tetania, rescatar con calcio endovenoso y no olvidar el magnesio',
      say: 'Bienvenidos. En la clase anterior vimos el calcio alto; hoy vemos el calcio bajo, la hipocalcemia. Es un tema muy preguntado, y casi siempre con el mismo paciente: alguien a quien le sacaron el tiroides hace un par de días y ahora tiene hormigueo en la boca. El examen quiere tres cosas: que reconozcas la tetania, que sepas rescatarla, y que te acuerdes del magnesio. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué baja el calcio y por qué da tetania?',
      nodes: [
        { id: 'qx', col: 0, row: 0, k: 'cause', t: 'Tiroidectomía total', s: 'Paratiroides resecadas o isquémicas' },
        { id: 'mg', col: 0, row: 1, k: 'cause', t: 'Hipomagnesemia severa', s: 'Menos de 1,0 mg/dL' },
        { id: 'otr', col: 0, row: 2, k: 'cause', t: 'Otras causas', s: 'Pancreatitis, sepsis, transfusión masiva' },
        { id: 'hc', col: 1, row: 1, k: 'mech', t: 'Hipocalcemia', s: 'Calcio corregido bajo 8,5 mg/dL' },
        { id: 'na', col: 2, row: 1, k: 'mech', t: 'Canales de sodio inestables', s: 'Baja el umbral de despolarización' },
        { id: 'tet', col: 3, row: 1, k: 'risk', t: 'Hiperexcitabilidad', s: 'Tetania, laringoespasmo, arritmias' },
      ],
      edges: [
        { from: 'qx', to: 'hc', label: 'sin PTH' }, { from: 'mg', to: 'hc', label: 'bloquea PTH' },
        { from: 'otr', to: 'hc' }, { from: 'hc', to: 'na' }, { from: 'na', to: 'tet' },
      ],
      steps: [
        { show: ['qx'], note: 'Causa número uno: 24 a 72 horas post tiroidectomía',
          say: 'Partamos por la causa. La número uno en el examen es el hipoparatiroidismo postquirúrgico: en una tiroidectomía total o un vaciamiento cervical, las paratiroides se sacan por accidente o quedan sin irrigación. Sin paratohormona, el calcio cae, y típicamente aparece entre las veinticuatro y las setenta y dos horas después de la cirugía.' },
        { show: ['mg'], note: 'Sin magnesio no hay PTH ni respuesta a ella',
          say: 'La segunda causa que tienes que tener en la cabeza es la hipomagnesemia severa, bajo uno coma cero miligramos por decilitro. El magnesio es necesario para secretar paratohormona y para que los tejidos respondan a ella. Sin magnesio, el eje del calcio queda bloqueado. Guarda esto, porque vuelve en el tratamiento.' },
        { show: ['otr'], note: 'El citrato de la sangre transfundida secuestra calcio',
          say: 'Hay otras causas: la pancreatitis aguda severa, donde el calcio queda atrapado en la grasa saponificada; la sepsis con shock; el déficit severo de vitamina D; y la transfusión masiva, porque el citrato que anticoagula la sangre secuestra el calcio iónico.' },
        { show: ['hc'], note: 'Calcio corregido bajo 8,5 o iónico bajo 4,0 mg/dL',
          say: 'Por cualquiera de estos caminos llegamos a la hipocalcemia: calcio total corregido por albúmina bajo ocho coma cinco, o calcio iónico bajo cuatro miligramos por decilitro.' },
        { show: ['na'], note: 'El calcio estabiliza la membrana',
          say: 'Ahora, ¿por qué da síntomas? El calcio de afuera de la célula estabiliza los canales de sodio de los nervios y del músculo. Cuando falta, la membrana se despolariza con cualquier estímulo.' },
        { show: ['tet'], note: 'Descargas espontáneas: tetania',
          say: 'Y el resultado es una hiperexcitabilidad neuromuscular: descargas espontáneas y repetidas. Eso es la tetania. El mecanismo te explica toda la clínica que viene.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: '¿Cómo se ve la hipocalcemia?',
      cards: [
        { title: 'Síntomas', tag: 'De leve a grave', kind: 'criteria', items: [
          { t: 'Parestesias periorales y distales', d: 'El signo más precoz',
            say: 'Veamos cómo llega el paciente. Lo primero que aparece es el hormigueo alrededor de la boca y en la punta de los dedos de manos y pies. Es el síntoma más precoz, y en un operado de tiroides es tu primera alarma.' },
          { t: 'Espasmo carpopedal', d: 'Mano de obstetra, hiperreflexia',
            say: 'Luego vienen las fasciculaciones, la hiperreflexia y el espasmo carpopedal espontáneo: la mano en comadrón, o mano de obstetra.' },
          { t: 'Laringoespasmo y convulsiones', d: 'Estridor: amenaza la vía aérea',
            say: 'Y en la forma grave, broncoespasmo, laringoespasmo con estridor inspiratorio, y convulsiones. El estridor es lo que convierte esto en una emergencia: la vía aérea está en juego.' },
        ] },
        { title: 'Signos latentes', tag: 'Se preguntan', kind: 'key', items: [
          { t: 'Chvostek', d: 'Percutir el facial: se contrae la cara',
            say: 'Si la tetania todavía no es evidente, la buscas. El signo de Chvostek: percutes el nervio facial por delante del trago, y se contrae el labio o el ala nasal del mismo lado.' },
          { t: 'Trousseau: más sensible y específico', d: 'Manguito sobre la sistólica por 3 min',
            say: 'Y el signo de Trousseau: inflas el manguito de presión sobre la sistólica durante tres minutos, y aparece el espasmo carpopedal. Ojo, que esto se pregunta: el Trousseau es más sensible y más específico que el Chvostek.' },
        ] },
        { title: 'Electrocardiograma', tag: 'Monitor siempre', kind: 'alert', items: [
          { t: 'QT prolongado', d: 'Por alargamiento del ST',
            say: 'Y en el electrocardiograma, lo característico es el QT prolongado, a expensas del segmento ST. Ese QT largo es el riesgo de arritmias ventriculares, como la torsión de puntas, y es la razón por la que todo el tratamiento se hace con monitor.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia',
      title: 'Rescate: calcio endovenoso y después el magnesio',
      nodes: [
        { id: 'sin', col: 0, row: 1, k: 'start', t: 'Hipocalcemia sintomática', s: 'Tetania, estridor o QT largo' },
        { id: 'glu', col: 1, row: 1, k: 'good', t: 'Gluconato de calcio 10 %', s: '1–2 ampollas EV en 10–20 min' },
        { id: 'clo', col: 1, row: 2, k: 'trap', t: 'Cloruro de calcio', s: 'Necrosis si se extravasa' },
        { id: 'inf', col: 2, row: 1, k: 'good', t: 'Infusión continua', s: '10 ampollas en 1000 mL SG 5 %' },
        { id: 'ref', col: 2, row: 0, k: 'q', t: '¿No responde?', s: 'Refractaria al calcio' },
        { id: 'mg', col: 3, row: 0, k: 'alert', t: 'Sulfato de magnesio EV', s: '1–2 g en 20 min' },
      ],
      edges: [
        { from: 'sin', to: 'glu' }, { from: 'glu', to: 'clo', label: 'no' }, { from: 'glu', to: 'inf' },
        { from: 'glu', to: 'ref' }, { from: 'ref', to: 'mg', label: 'medir Mg' },
      ],
      steps: [
        { show: ['sin'], note: 'Síntomas = emergencia, no se trata por vía oral',
          say: 'Vamos al tratamiento. Si la hipocalcemia da síntomas, tetania, estridor o un QT largo, es una emergencia. Y en una emergencia el calcio no va por la boca: es demasiado lento.' },
        { show: ['glu'], note: 'Diluido en SG 5 %, con monitor',
          say: 'El rescate es gluconato de calcio al diez por ciento: una a dos ampollas, diluidas en cincuenta a cien mililitros de suero glucosado, por vía endovenosa lenta en diez a veinte minutos, con monitor cardíaco continuo.' },
        { show: ['clo'], note: 'Se prefiere el gluconato',
          say: '¿Por qué gluconato y no cloruro de calcio? Porque el cloruro produce necrosis grave del tejido si se extravasa. Por eso el gluconato es el de elección.' },
        { show: ['inf'], note: 'El bolo dura poco: se sigue con infusión',
          say: 'El bolo rescata, pero dura poco. Después se deja una infusión continua: diez ampollas en mil mililitros de suero glucosado al cinco por ciento, a cincuenta a cien mililitros por hora, hasta que el cuadro se resuelva.' },
        { show: ['ref'], note: 'Si no sube, la pregunta es el magnesio',
          say: 'Y aquí viene la regla de oro. Si le das calcio una y otra vez y el calcio no sube, no es que falte más calcio. Es que falta magnesio: sin magnesio no hay paratohormona, y la hipocalcemia es refractaria.' },
        { show: ['mg'], note: 'Siempre medir magnesio en la hipocalcemia refractaria',
          say: 'Entonces mides el magnesio y, si está bajo, das sulfato de magnesio endovenoso, uno a dos gramos en veinte minutos. Solo así el calcio vuelve a responder. Esto es lo que más se pregunta del tema.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento crónico',
      title: 'Hipoparatiroidismo permanente',
      cards: [
        { title: 'Calcio oral', tag: 'Con las comidas', kind: 'pharma', items: [
          { t: 'Carbonato de calcio', d: '1 a 3 g/día de calcio elemental, repartido',
            say: 'Si el hipoparatiroidismo queda permanente, pasamos a la vía oral. Carbonato de calcio, uno a tres gramos al día de calcio elemental, repartidos con las comidas.' },
        ] },
        { title: 'Vitamina D activa', tag: 'Obligatoria', kind: 'key', items: [
          { t: 'Calcitriol 0,25 a 1,0 mcg/día', d: 'La 1,25-dihidroxivitamina D',
            say: 'Y siempre asociado a calcitriol, que es la vitamina D ya activada, en dosis de cero coma veinticinco a un microgramo al día.' },
          { t: 'El colecalciferol no sirve', d: 'Sin PTH el riñón no la activa',
            say: '¿Por qué calcitriol y no la vitamina D común? Porque quien activa la vitamina D en el riñón es la uno alfa hidroxilasa, y esa enzima necesita paratohormona. Sin paratohormona, el colecalciferol se queda sin activar. Fíjate cómo el mecanismo decide el fármaco.' },
        ] },
        { title: 'Meta', tag: 'Límite bajo-normal', kind: 'alert', items: [
          { t: 'Calcio entre 8,0 y 8,5 mg/dL', d: 'Evita hipercalciuria y nefrocalcinosis',
            say: 'Y la meta no es un calcio normal alto. Se busca el límite bajo de lo normal, entre ocho y ocho coma cinco, porque sin paratohormona el riñón pierde calcio por la orina, y subirlo más produce hipercalciuria y nefrocalcinosis.' },
          { t: 'Controlar calcio, magnesio y fósforo', d: 'Producto calcio-fósforo',
            say: 'El seguimiento es con calcemia, magnesemia y el producto calcio fósforo.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Tres hipocalcemias, tres conductas',
      head: ['Escenario', 'Clave', 'Conducta'],
      rows: [
        { cells: ['Aguda grave', 'Trousseau +, laringoespasmo, QT largo', 'Gluconato de calcio 10 % EV lento + monitor'],
          say: 'Repasemos en una tabla. Hipocalcemia aguda grave: Trousseau positivo, laringoespasmo o QT largo. Gluconato de calcio endovenoso lento, con monitor, y cuidando que no se extravase.' },
        { cells: ['Crónica estable', 'Asintomática, cataratas, calcificación de ganglios basales', 'Carbonato de calcio + calcitriol oral'],
          say: 'Hipocalcemia crónica estable: suele ser asintomática, y a largo plazo da cataratas y calcificación de los ganglios basales. Se trata por boca, con carbonato de calcio y calcitriol, y meta en ocho a ocho coma cinco.' },
        { cells: ['Por hipomagnesemia', 'No responde al calcio repetido', 'Sulfato de magnesio EV primero'],
          say: 'Y la hipocalcemia por hipomagnesemia: la que no responde a bolos repetidos de calcio. La conducta es sulfato de magnesio endovenoso. La regla es medir siempre el magnesio antes de decir que el calcio falló.' },
        { cells: ['Síntomas en hipoparatiroideo con calcio oral', 'Chvostek + o convulsión', 'Calcio EV; no subir la dosis oral'],
          say: 'Una más, que viene directo de las preguntas reales. El paciente hipoparatiroideo que ya toma calcio oral y ahora tiene Chvostek o convulsiona: calcio endovenoso. El error es solo aumentar la dosis oral.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 54 años, alcohólico crónico y desnutrido, ingresa con tetania y parestesias. Calcio sérico 6,8 mg/dL. Recibe dos bolos EV de gluconato de calcio al 10 %, pero persiste tetánico con calcio de 6,9 mg/dL.',
      question: '¿Qué examen se debe solicitar de inmediato?',
      options: [
        { letter: 'A', text: 'Magnesemia' },
        { letter: 'B', text: 'Calcitonina sérica' },
        { letter: 'C', text: 'TSH' },
        { letter: 'D', text: 'Ácido fólico plasmático' },
        { letter: 'E', text: 'Plombemia' },
      ],
      correct: 'A',
      explanation: 'Hipocalcemia refractaria a calcio EV en un alcohólico desnutrido: hipomagnesemia hasta demostrar lo contrario. Sin magnesio no se secreta PTH ni actúa en hueso y riñón. Se corrige con sulfato de magnesio EV y recién entonces responde el calcio.',
      say: {
        stem: 'Vamos con un caso. Hombre de cincuenta y cuatro años, alcohólico crónico y desnutrido, que ingresa con tetania y parestesias. El calcio está en seis coma ocho. Le dan dos bolos de gluconato de calcio, y sigue tetánico, con el calcio en seis coma nueve.',
        question: '¿Qué examen pides de inmediato?',
        options: 'Las opciones: magnesemia, calcitonina, TSH, ácido fólico o plombemia. Piénsalo.',
        answer: 'Es la A, la magnesemia. Fíjate en las dos pistas: es alcohólico y desnutrido, y la hipocalcemia no responde al calcio. Eso es hipomagnesemia hasta demostrar lo contrario, porque sin magnesio no hay paratohormona. La calcitonina es el distractor más tentador porque también regula el calcio, pero no explica la refractariedad. Con sulfato de magnesio, recién ahí el calcio va a subir.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 110',
      stem: 'Paciente con tiroidectomía total e hipoparatiroidismo, presenta debilidad, parestesias y signo de Chvostek positivo.',
      question: '¿Cuál es el tratamiento inicial?',
      options: [
        { letter: 'A', text: 'Calcitriol oral más calcio oral' },
        { letter: 'B', text: 'Gluconato de calcio endovenoso' },
        { letter: 'C', text: 'Carbonato de calcio 1 g oral' },
        { letter: 'D', text: 'PTH recombinante subcutáneo' },
        { letter: 'E', text: 'Terlipresina endovenosa' },
      ],
      correct: 'B',
      explanation: 'Parestesias con Chvostek positivo en un paciente sin paratiroides: hipocalcemia sintomática. El tratamiento inicial es gluconato de calcio EV. El calcio oral con calcitriol es el tratamiento de mantención, no el rescate.',
      say: {
        stem: 'Ahora las preguntas reales. Esta es del EUNACOM de enero de dos mil veintitrés. Paciente con tiroidectomía total e hipoparatiroidismo, que presenta debilidad, parestesias y signo de Chvostek positivo.',
        question: '¿Cuál es el tratamiento inicial?',
        options: 'Las opciones: calcitriol más calcio oral, gluconato de calcio endovenoso, carbonato de calcio oral, paratohormona recombinante, o terlipresina. Piénsalo.',
        answer: 'Es la B, gluconato de calcio endovenoso. Tiene síntomas y un signo de tetania latente, así que es una hipocalcemia sintomática. La trampa es la A: calcio oral con calcitriol es exactamente lo que va a necesitar después, pero es la mantención. La palabra clave del enunciado es inicial.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 25',
      stem: 'Un paciente, con antecedente de tiroidectomía total e hipoparatiroidismo, en tratamiento con levotiroxina, calcio y vitamina D, por vía oral, presenta diarrea aguda, de 2 días de evolución, abundante. Evoluciona con astenia, marcada debilidad, dolor en las extremidades inferiores y calambres. Al examen físico tiene reflejos osteotendíneos vivos y signo de Chvostek positivo.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Suero fisiológico endovenoso' },
        { letter: 'B', text: 'Gluconato de calcio endovenoso' },
        { letter: 'C', text: 'Suero glucosado con potasio endovenoso' },
        { letter: 'D', text: 'Suero Ringer endovenoso' },
        { letter: 'E', text: 'Hidrocortisona endovenosa' },
      ],
      correct: 'B',
      explanation: 'Un hipoparatiroideo que depende del calcio oral deja de absorberlo con la diarrea y cae en hipocalcemia sintomática: calambres, hiperreflexia y Chvostek positivo. Conducta inicial: gluconato de calcio EV.',
      say: {
        stem: 'La siguiente es del EUNACOM de diciembre de dos mil dieciocho. Paciente con tiroidectomía total e hipoparatiroidismo, que toma levotiroxina, calcio y vitamina D por boca. Hace dos días tiene una diarrea abundante, y ahora está débil, con calambres, reflejos vivos y Chvostek positivo.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: suero fisiológico, gluconato de calcio, suero glucosado con potasio, Ringer, o hidrocortisona, todos endovenosos. Piénsalo.',
        answer: 'Es la B. Este paciente vive del calcio que absorbe por el intestino, y con la diarrea dejó de absorberlo. Los calambres, la hiperreflexia y el Chvostek son tetania. El distractor tentador es el suero, porque hay diarrea, pero la hidratación no corrige el calcio. Primero el gluconato de calcio endovenoso.',
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
      explanation: 'Calcio de 6,3 mg/dL con albúmina normal y fósforo alto tras una tiroidectomía: hipoparatiroidismo postquirúrgico. La convulsión es una manifestación grave de hipocalcemia y se trata con calcio EV. La calcitonina bajaría aún más el calcio.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil veinticuatro. Mujer de veintinueve años, operada del tiroides por un cáncer hace cinco meses, con una semana de astenia, nerviosismo y palpitaciones, que hoy convulsionó una vez. Está lúcida y sin focalidad. En los exámenes destaca un calcio de seis coma tres, con albúmina normal y fósforo alto.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: suero fisiológico, TAC de cerebro, calcio endovenoso, lorazepam endovenoso, o calcitonina. Piénsalo.',
        answer: 'Es la C, calcio endovenoso. Fíjate en la pista del fósforo: calcio bajo con fósforo alto es la firma de la falta de paratohormona, y el antecedente de tiroidectomía cierra el diagnóstico. La convulsión es una forma grave de hipocalcemia. El TAC y el lorazepam tientan porque convulsionó, pero no tratan la causa. Y la calcitonina es el error más grave: baja todavía más el calcio.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Post tiroidectomía', kind: 'key', items: [
          { t: 'Parestesias tras tiroidectomía', d: 'Hipoparatiroidismo hasta demostrar lo contrario',
            say: 'Cerremos con las reglas de oro. Hormigueo en la boca uno a tres días después de una tiroidectomía: hipoparatiroidismo postquirúrgico hasta demostrar lo contrario.' },
          { t: 'Trousseau > Chvostek', d: 'ECG: QT prolongado',
            say: 'El Trousseau es más sensible y específico que el Chvostek, y el electrocardiograma muestra un QT prolongado.' },
        ] },
        { title: 'Urgencia', tag: 'Gluconato EV', kind: 'alert', items: [
          { t: 'Sintomática: gluconato de calcio EV', d: 'Lento, con monitor; nunca vía oral',
            say: 'Si tiene síntomas, gluconato de calcio endovenoso lento con monitor. La vía oral es la mantención, no el rescate.' },
          { t: 'Refractaria: medir magnesio', d: 'Sulfato de magnesio EV',
            say: 'Si no responde, mide el magnesio y corrígelo.' },
        ] },
        { title: 'Crónico', tag: 'Calcitriol', kind: 'pharma', items: [
          { t: 'Carbonato de calcio + calcitriol', d: 'Meta 8,0–8,5 mg/dL',
            say: 'Y en el hipoparatiroidismo permanente, calcio oral con calcitriol, apuntando al límite bajo de lo normal. Si te llevas una sola idea de hoy: la hipocalcemia con síntomas se rescata con gluconato de calcio endovenoso, y la que no responde es un problema de magnesio. En la próxima clase pasamos del calcio al hueso, con la osteoporosis. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hipocalcemia: rescatar, revisar el magnesio y mantener',
    root: N('start', 'Hipocalcemia', 'Calcio corregido bajo 8,5 mg/dL',
      'Paciente con calcio corregido bajo, típicamente después de una tiroidectomía. La primera pregunta no es la cifra: es si tiene síntomas.',
      ['', N('q', '¿Tetania, laringoespasmo o QT largo?', 'Gravedad clínica',
        '¿Hay tetania, laringoespasmo o un QT prolongado en el electrocardiograma? Eso separa la emergencia del manejo ambulatorio.',
        ['SÍ', N('alert', 'Gluconato de calcio 10 % EV', '1–2 ampollas en 10–20 min + monitor',
          'Si hay síntomas, es una emergencia: gluconato de calcio al diez por ciento, una a dos ampollas en diez a veinte minutos con monitor, y luego infusión continua.',
          ['', N('q', '¿Responde el calcio?', 'Si no: medir magnesio',
            '¿El calcio sube y los síntomas ceden? Si no responde a bolos repetidos, la pregunta es el magnesio.',
            ['NO', N('alert', 'Sulfato de magnesio EV', '1–2 g en 20 min',
              'Si el magnesio está bajo, sulfato de magnesio endovenoso, uno a dos gramos en veinte minutos. Sin eso, la hipocalcemia es refractaria.')],
            ['SÍ', N('do', 'Infusión y paso a vía oral', 'Hasta estabilizar',
              'Si responde, se mantiene la infusión hasta estabilizar y luego se pasa a la vía oral.')])])],
        ['NO', N('ok', 'Carbonato de calcio + calcitriol', 'Meta 8,0–8,5 mg/dL',
          'Si es crónica y asintomática, manejo oral: carbonato de calcio con calcitriol, con meta en el límite bajo de lo normal para evitar la hipercalciuria.')])]),
  },
};
