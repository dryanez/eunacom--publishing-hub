// Clase Diabetes 1.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-03',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Por qué en el embarazo los cortes bajan y cómo separar la gestacional de la pregestacional',
      say: 'Bienvenidos. En la clase anterior aprendimos los cortes para diagnosticar diabetes en el adulto. Hoy los vamos a cambiar, porque en la embarazada no sirven. Diabetes y embarazo es de los temas más preguntados del examen, y se resuelve con tres ideas: en el embarazo no existe la prediabetes, el corte de ayuno es cien y no ciento veintiséis, y las doce semanas separan la diabetes gestacional de la pregestacional.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué el embarazo produce diabetes?',
      nodes: [
        { id: 'pla', col: 0, row: 1, k: 'cause', t: 'Hormonas placentarias', s: 'Lactógeno placentario, progesterona, cortisol, prolactina' },
        { id: 'res', col: 1, row: 1, k: 'mech', t: 'Resistencia a la insulina', s: 'Desde las 20–24 semanas' },
        { id: 'ok', col: 2, row: 0, k: 'good', t: 'Páncreas compensa', s: 'Glicemia normal' },
        { id: 'dmg', col: 2, row: 2, k: 'risk', t: 'No alcanza a compensar', s: 'Diabetes gestacional' },
        { id: 'fet', col: 3, row: 2, k: 'mech', t: 'Glucosa cruza la placenta', s: 'Hiperinsulinismo fetal' },
        { id: 'mac', col: 4, row: 2, k: 'effect', t: 'Macrosomía', s: 'Polihidramnios, distocia de hombros' },
      ],
      edges: [
        { from: 'pla', to: 'res' }, { from: 'res', to: 'ok', label: 'reserva suficiente' }, { from: 'res', to: 'dmg', label: 'reserva insuficiente' },
        { from: 'dmg', to: 'fet' }, { from: 'fet', to: 'mac' },
      ],
      steps: [
        { show: ['pla'], note: 'La placenta fabrica hormonas diabetogénicas',
          say: 'Partamos por el mecanismo. En la segunda mitad del embarazo, la placenta produce cantidades crecientes de hormonas que se oponen a la insulina: el lactógeno placentario, la progesterona, el cortisol y la prolactina.' },
        { show: ['res'], note: 'Resistencia fisiológica: asegura glucosa al feto',
          say: 'Esas hormonas generan una resistencia a la insulina que es fisiológica, y tiene un propósito: asegurar un flujo continuo de glucosa hacia el feto. Empieza a notarse desde las veinte a veinticuatro semanas. Fíjate que es el mismo mecanismo de la tipo dos que vimos en la primera clase, pero provocado por la placenta.' },
        { show: ['ok'], note: 'La mayoría compensa',
          say: 'La mayoría de las embarazadas compensa: su páncreas aumenta varias veces la secreción de insulina y la glicemia se mantiene normal.' },
        { show: ['dmg'], note: 'Si la reserva no alcanza: diabetes gestacional',
          say: 'Pero cuando la reserva del páncreas materno no alcanza, aparece la hiperglicemia. Eso es la diabetes gestacional.' },
        { show: ['fet', 'mac'], note: 'Por eso no hay "prediabetes" en el embarazo',
          say: 'Y aquí está la clave de todo el tema. La glucosa cruza la placenta; la insulina materna, no. El feto recibe más glucosa, fabrica más insulina, y la insulina es una hormona de crecimiento: el resultado es macrosomía, polihidramnios y distocia de hombros. Como incluso una hiperglicemia leve hace este daño, en el embarazo los cortes tienen que ser más bajos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios diagnósticos',
      title: 'En el embarazo no existe la prediabetes',
      cards: [
        { title: 'La regla de oro', tag: 'Se pregunta siempre', kind: 'alert', items: [
          { t: 'No hay GAA ni ITG', d: 'Lo que sería prediabetes, aquí es DMG',
            say: 'De ese mecanismo sale la regla de oro del tema. En la embarazada no existe la glicemia de ayuno alterada ni la intolerancia a la glucosa oral. Cualquier valor que en una mujer no embarazada sería prediabetes, en la embarazada es diabetes gestacional. Si ves esas opciones en una pregunta de embarazo, descártalas.' },
        ] },
        { title: 'Criterios de diabetes gestacional', tag: 'Basta uno', kind: 'criteria', items: [
          { t: 'Dos glicemias de ayuno ≥ 100 mg/dL', d: 'En días diferentes',
            say: 'Los criterios de diabetes gestacional son tres. El primero, dos glicemias de ayuno iguales o mayores a cien, en días diferentes. Cien, no ciento veintiséis.' },
          { t: 'PTGO 75 g: basal ≥ 100 o 2 h ≥ 140', d: 'A las 24–28 semanas; basta un valor',
            say: 'El segundo, la prueba de tolerancia a la glucosa con setenta y cinco gramos, entre las veinticuatro y veintiocho semanas: una basal de cien o más, o un valor a las dos horas de ciento cuarenta o más. Y basta un solo valor alterado.' },
          { t: 'Glicemia al azar ≥ 200 mg/dL', d: 'Con síntomas de hiperglicemia',
            say: 'Y el tercero, igual que fuera del embarazo: una glicemia al azar de doscientos o más con síntomas.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La regla de las 12 semanas',
      title: 'Gestacional o pregestacional: lo decide el momento',
      nodes: [
        { id: 'ini', col: 0, row: 1, k: 'start', t: 'Hiperglicemia en el embarazo', s: '¿Cuándo y con qué valor?' },
        { id: 'pre', col: 1, row: 0, k: 'risk', t: 'Diabetes pregestacional', s: 'Previa, o criterios de no embarazada antes de las 12 sem' },
        { id: 'org', col: 2, row: 0, k: 'mech', t: 'Hiperglicemia en la organogénesis', s: 'Primer trimestre' },
        { id: 'mal', col: 3, row: 0, k: 'alert', t: 'Malformaciones congénitas', s: 'Cardíacas, regresión caudal' },
        { id: 'ges', col: 1, row: 2, k: 'effect', t: 'Diabetes gestacional', s: 'Desde el 2.º trimestre, o ayuno 100–125' },
        { id: 'tar', col: 2, row: 2, k: 'mech', t: 'Organogénesis ya completa', s: 'Daño por exceso de crecimiento' },
        { id: 'mac', col: 3, row: 2, k: 'risk', t: 'Macrosomía', s: 'Polihidramnios, distocia de hombros' },
      ],
      edges: [
        { from: 'ini', to: 'pre', label: '≥ 126 antes de las 12 sem' }, { from: 'pre', to: 'org' }, { from: 'org', to: 'mal' },
        { from: 'ini', to: 'ges', label: '100–125 o después' }, { from: 'ges', to: 'tar' }, { from: 'tar', to: 'mac' },
      ],
      steps: [
        { show: ['ini'], note: 'Dos preguntas: cuándo, y con qué valor',
          say: 'Ahora la segunda gran diferencia: gestacional versus pregestacional. Se decide con dos preguntas: en qué momento del embarazo, y con qué valor.' },
        { show: ['pre'], note: 'Criterios de no embarazada en las primeras 12 semanas',
          say: 'La diabetes pregestacional es la de la mujer que ya era diabética antes de embarazarse. Pero también la de aquella que, en las primeras doce semanas, cumple los criterios de una mujer no embarazada: dos glicemias de ayuno de ciento veintiséis o más, o doscientos con síntomas. La lógica es simple: con esos valores tan temprano, la diabetes estaba desde antes y nadie la había diagnosticado.' },
        { show: ['org', 'mal'], note: 'El riesgo propio de la pregestacional',
          say: 'Y eso define su riesgo. Esa hiperglicemia estuvo presente durante la organogénesis, así que aumenta las malformaciones congénitas mayores: cardíacas, como la transposición de grandes vasos, y esqueléticas, como la regresión caudal.' },
        { show: ['ges'], note: 'Desde el 2.º trimestre, o ayuno 100–125 al inicio',
          say: 'La gestacional, en cambio, aparece o se detecta desde el segundo trimestre, o bien, en las primeras doce semanas, con glicemias de ayuno entre cien y ciento veinticinco.' },
        { show: ['tar', 'mac'], note: 'No aumenta malformaciones',
          say: 'Como la organogénesis ya ocurrió, la gestacional no aumenta las malformaciones. Su daño es el del mecanismo: macrosomía, polihidramnios y distocia de hombros. Esa asociación, pregestacional con malformaciones y gestacional con macrosomía, se pregunta.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tamizaje',
      title: 'Primer trimestre: glicemia de ayuno a todas',
      nodes: [
        { id: 'ing', col: 0, row: 1, k: 'start', t: 'Ingreso prenatal', s: 'Glicemia de ayuno a toda embarazada' },
        { id: 'nor', col: 1, row: 0, k: 'good', t: 'Menor de 100', s: 'Normal: PTGO a las 24–28 sem' },
        { id: 'r1', col: 1, row: 1, k: 'q', t: '100 a 125', s: 'Repetir de inmediato' },
        { id: 'r2', col: 1, row: 2, k: 'q', t: '126 o más', s: 'Repetir de inmediato' },
        { id: 'dmg', col: 2, row: 1, k: 'risk', t: 'Segunda ≥ 100', s: 'Diabetes gestacional' },
        { id: 'dmp', col: 2, row: 2, k: 'alert', t: 'Segunda ≥ 126', s: 'Diabetes pregestacional' },
        { id: 'tra', col: 3, row: 1, k: 'trap', t: 'Pedir PTGO como en la no embarazada', s: 'Aquí se repite el ayuno' },
      ],
      edges: [
        { from: 'ing', to: 'nor' }, { from: 'ing', to: 'r1' }, { from: 'ing', to: 'r2' },
        { from: 'r1', to: 'dmg' }, { from: 'r2', to: 'dmp' }, { from: 'r1', to: 'tra', label: 'error' },
      ],
      steps: [
        { show: ['ing'], note: 'Tamizaje universal desde el ingreso',
          say: 'Veamos el calendario de tamizaje de la guía perinatal. En el ingreso prenatal, a toda embarazada se le pide una glicemia de ayuno.' },
        { show: ['nor'], note: 'Normal: esperar la PTGO del segundo trimestre',
          say: 'Si es menor a cien, es normal, y queda programada la prueba de tolerancia entre las veinticuatro y veintiocho semanas.' },
        { show: ['r1', 'dmg'], note: '100–125: repetir; si vuelve ≥ 100, DMG',
          say: 'Si está entre cien y ciento veinticinco, se repite la glicemia de ayuno de inmediato. Si la segunda vuelve a dar cien o más, es diabetes gestacional.' },
        { show: ['tra'], note: 'Trampa: aplicar el algoritmo del adulto',
          say: 'Ojo con la trampa, que conecta con la clase anterior. En el adulto no embarazado, una glicemia entre cien y ciento veinticinco pide una prueba de tolerancia. En la embarazada, no: se repite la glicemia de ayuno. Si contestas la curva, estás aplicando el algoritmo equivocado.' },
        { show: ['r2', 'dmp'], note: '≥ 126 confirmada: pregestacional',
          say: 'Y si la primera es ciento veintiséis o más, también se repite de inmediato. Si la segunda vuelve a dar ciento veintiséis o más, es diabetes pregestacional.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tamizaje',
      title: 'Segundo y tercer trimestre: la PTGO',
      cards: [
        { title: 'Semanas 24 a 28', tag: 'Universal', kind: 'key', items: [
          { t: 'PTGO con 75 g a todas', d: 'Si el ayuno del 1.er trimestre fue normal',
            say: 'Entre las veinticuatro y veintiocho semanas, justo cuando la resistencia a la insulina se hace notar, viene la prueba de tolerancia con setenta y cinco gramos, universal: a toda embarazada que tuvo una glicemia normal en el primer trimestre.' },
          { t: 'Basal ≥ 100 o 2 h ≥ 140', d: 'Un solo valor confirma DMG',
            say: 'Si la basal es cien o más, o el valor a las dos horas es ciento cuarenta o más, se confirma la diabetes gestacional. Y fíjate: ciento cuarenta, que fuera del embarazo sería intolerancia, aquí ya es diabetes.' },
        ] },
        { title: 'Semanas 32 a 34', tag: 'Solo alto riesgo', kind: 'alert', items: [
          { t: 'Repetir la PTGO', d: 'Si la de 24–28 fue normal',
            say: 'Y hay una segunda oportunidad. Entre las treinta y dos y treinta y cuatro semanas se repite la curva, pero no a todas: solo si la de las veinticuatro a veintiocho fue normal y la paciente tiene factores de alto riesgo.' },
          { t: 'Feto grande, polihidramnios o DMG previa', d: 'Los tres factores que la indican',
            say: '¿Cuáles? Un feto grande para la edad gestacional en la ecografía, un polihidramnios, o una diabetes gestacional en un embarazo anterior. Los dos primeros son justamente los efectos de la hiperglicemia que vimos en el mecanismo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Metas estrictas y el orden del tratamiento',
      cards: [
        { title: 'Metas de autocontrol', tag: 'Guía MINSAL', kind: 'criteria', items: [
          { t: 'Ayuno 70 a 95 mg/dL', d: '1 h postprandial < 140 · 2 h < 120',
            say: 'Confirmado el diagnóstico, las metas son mucho más estrictas que fuera del embarazo, para evitar el hiperinsulinismo fetal. Glicemia de ayuno entre setenta y noventa y cinco; una hora después de comer, bajo ciento cuarenta; o a las dos horas, bajo ciento veinte.' },
        ] },
        { title: 'Pilares', tag: 'En este orden', kind: 'pharma', items: [
          { t: 'Primero: terapia nutricional', d: '4 comidas y 2 colaciones, carbohidratos complejos',
            say: 'El primer pilar es la terapia nutricional con nutricionista: la alimentación fraccionada en cuatro comidas y dos colaciones, con carbohidratos complejos y sin azúcares simples.' },
          { t: 'Si no logra metas en 1–2 semanas', d: 'O hay macrosomía: insulina NPH y cristalina',
            say: 'Si en una a dos semanas no logra las metas, o la ecografía muestra macrosomía, se inicia insulina subcutánea, NPH y cristalina o ultrarrápida. Según el libro, los hipoglicemiantes orales clásicos, como la glibenclamida, están contraindicados. El detalle del manejo lo vemos en la clase de tratamiento de la gestante.' },
        ] },
        { title: 'Después del parto', tag: 'No se olvida', kind: 'normal', items: [
          { t: 'Gestacional: PTGO a las 6–12 semanas', d: 'Pregestacional: sigue su tratamiento',
            say: 'Y después del parto, la gestacional se reevalúa con una prueba de tolerancia a las seis a doce semanas, mientras que la pregestacional mantiene su tratamiento crónico.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión para la embarazada.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Gestacional vs pregestacional',
      head: ['Característica', 'Diabetes gestacional', 'Diabetes pregestacional'],
      rows: [
        { cells: ['Momento', 'Durante el embarazo (típicamente > 12 semanas)', 'Previa o criterios de no embarazada < 12 semanas'],
          say: 'Repasemos en una tabla. El momento: la gestacional aparece durante el embarazo, típicamente después de las doce semanas; la pregestacional es previa, o se detecta antes de las doce semanas con criterios de mujer no embarazada.' },
        { cells: ['Glicemia de ayuno', '≥ 100 mg/dL en 2 ocasiones', '≥ 126 mg/dL en 2 ocasiones'],
          say: 'El ayuno: cien o más en dos ocasiones para la gestacional; ciento veintiséis o más en dos ocasiones para la pregestacional.' },
        { cells: ['PTGO a las 2 horas', '≥ 140 mg/dL', '≥ 200 mg/dL'],
          say: 'La curva a las dos horas: ciento cuarenta para la gestacional, doscientos para la pregestacional.' },
        { cells: ['Malformaciones', 'No aumentadas', 'Alto riesgo'],
          say: 'Las malformaciones: no aumentan en la gestacional; son el gran riesgo de la pregestacional.' },
        { cells: ['Complicaciones típicas', 'Macrosomía, polihidramnios, distocia', 'Malformaciones, RCIU, muerte in utero'],
          say: 'Las complicaciones: macrosomía, polihidramnios y distocia en la gestacional; malformaciones, restricción del crecimiento por daño vascular y muerte in utero en la pregestacional.' },
        { cells: ['Después del parto', 'PTGO a las 6–12 semanas', 'Mantener su tratamiento'],
          say: 'Y después del parto: curva a las seis a doce semanas en la gestacional; mantener el tratamiento en la pregestacional.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Primigesta de 26 años, embarazo de 10 semanas, asintomática. En sus exámenes de ingreso tiene glicemia de ayuno de 108 mg/dL. Se repite a los 4 días en ayuno estricto: 106 mg/dL. Sin glucosuria ni antecedentes familiares de diabetes.',
      question: '¿Cuál es el diagnóstico más adecuado?',
      options: [
        { letter: 'A', text: 'Glicemia de ayuno alterada' },
        { letter: 'B', text: 'Diabetes mellitus gestacional' },
        { letter: 'C', text: 'Diabetes mellitus pregestacional' },
        { letter: 'D', text: 'Embarazo normal; solicitar PTGO a las 24–28 semanas' },
        { letter: 'E', text: 'Intolerancia a la glucosa del embarazo' },
      ],
      correct: 'B',
      explanation: 'En el embarazo no existe la glicemia de ayuno alterada. Dos glicemias de ayuno ≥ 100 mg/dL y < 126 mg/dL: diabetes gestacional. No es pregestacional porque para eso se necesitan valores de no embarazada (≥ 126 mg/dL). Se deriva a alto riesgo obstétrico y se inicia plan de alimentación.',
      say: {
        stem: 'Vamos con un caso. Primigesta de veintiséis años, con diez semanas de embarazo y sin molestias. Su glicemia de ayuno de ingreso es ciento ocho, y al repetirla cuatro días después, ciento seis.',
        question: '¿Cuál es el diagnóstico más adecuado?',
        options: 'Las alternativas: glicemia de ayuno alterada, diabetes gestacional, diabetes pregestacional, embarazo normal con curva a las veinticuatro semanas, o intolerancia a la glucosa del embarazo. Piénsalo.',
        answer: 'Es la B, diabetes gestacional. Dos glicemias de ayuno de cien o más confirman la gestacional. La glicemia de ayuno alterada y la intolerancia son distractores que no existen en el embarazo. Y el más tentador es la pregestacional, porque estamos antes de las doce semanas; pero para eso se necesitan los valores de una mujer no embarazada, ciento veintiséis o más, y aquí no llega.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 44',
      stem: 'Una paciente de 30 años, acude a su primer control de un embarazo de 10 semanas. Sus partos anteriores fueron eutócicos, con recién nacidos de término de 4 kilogramos. Entre sus exámenes de control trae un Elisa VIH que resultó negativo, hematocrito de 38%, glicemia de ayuno de 112 mg/dL y urocultivo negativo. Su examen físico es normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar test de tolerancia a la glucosa oral' },
        { letter: 'B', text: 'Iniciar metformina oral' },
        { letter: 'C', text: 'Repetir glicemia de ayuno' },
        { letter: 'D', text: 'Repetir el urocultivo' },
        { letter: 'E', text: 'Mantener el control embarazo normal' },
      ],
      correct: 'C',
      explanation: 'Glicemia de ayuno ≥ 100 mg/dL en el embarazo: sospecha de diabetes gestacional, que se confirma repitiendo la glicemia de ayuno. La PTGO sería la conducta en una mujer no embarazada.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Paciente de treinta años, con diez semanas de embarazo, cuyos hijos anteriores pesaron cuatro kilos. En sus exámenes de ingreso, una glicemia de ayuno de ciento doce. El resto es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: pedir un test de tolerancia a la glucosa, iniciar metformina, repetir la glicemia de ayuno, repetir el urocultivo, o mantener el control normal. Piénsalo.',
        answer: 'Es la C, repetir la glicemia de ayuno. Ciento doce en una embarazada es sospecha de diabetes gestacional, y se confirma repitiendo el ayuno. El distractor es la curva de tolerancia, que es exactamente lo que harías si no estuviera embarazada. Y fíjate en el dato de los hijos de cuatro kilos: es un guiño a la macrosomía de un embarazo anterior.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 176',
      stem: 'Una mujer cursa un embarazo de 10 semanas y se realiza una glicemia de ayuno, que resulta 128 mg/dl.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Prediabetes' },
        { letter: 'B', text: 'Diabetes mellitus gestacional' },
        { letter: 'C', text: 'Glicemia de ayuno alterado' },
        { letter: 'D', text: 'Diabetes mellitus pregestacional' },
        { letter: 'E', text: 'Intolerancia a la glucosa oral' },
      ],
      correct: 'D',
      explanation: 'Glicemia de ayuno ≥ 126 mg/dL antes de las 12 semanas: sospecha de diabetes pregestacional (se confirma con una segunda glicemia ≥ 126 mg/dL). Prediabetes, GAA e ITG no existen en el embarazo.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Embarazo de diez semanas, con una glicemia de ayuno de ciento veintiocho.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: prediabetes, diabetes gestacional, glicemia de ayuno alterada, diabetes pregestacional, o intolerancia a la glucosa. Piénsalo.',
        answer: 'Es la D, pregestacional. Ciento veintiocho supera el corte de mujer no embarazada, y estamos antes de las doce semanas. Formalmente habría que repetirla para confirmar, pero la pregunta pide el diagnóstico más probable, y es ese. Tres de las alternativas se caen solas: prediabetes, glicemia alterada e intolerancia no existen en el embarazo. Y la gestacional queda para valores entre cien y ciento veinticinco.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 133',
      stem: 'Una paciente de 36 años, cursando su primer embarazo a las 28 semanas, se realiza un test de tolerancia a la glucosa oral, con 75 gramos de glucosa, que arroja una glicemia basal de 98 mg/dl y una glicemia postcarga, a las 2 horas, de 147 mg/dl.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Resistencia a la insulina' },
        { letter: 'B', text: 'Diabetes mellitus gestacional' },
        { letter: 'C', text: 'Diabetes mellitus pregestacional' },
        { letter: 'D', text: 'Intolerancia a la glucosa oral' },
        { letter: 'E', text: 'Embarazo normal' },
      ],
      correct: 'B',
      explanation: 'PTGO a las 2 horas ≥ 140 mg/dL en una embarazada: diabetes gestacional. Basta un valor alterado aunque la basal sea normal. La intolerancia a la glucosa no existe en el embarazo.',
      say: {
        stem: 'Una más, del EUNACOM de julio de dos mil diecisiete. Primigesta de treinta y seis años, con veintiocho semanas. Curva de tolerancia con setenta y cinco gramos: basal de noventa y ocho, y a las dos horas, ciento cuarenta y siete.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: resistencia a la insulina, diabetes gestacional, diabetes pregestacional, intolerancia a la glucosa oral, o embarazo normal. Piénsalo.',
        answer: 'Es la B, diabetes gestacional. La basal es normal, pero basta un valor alterado, y ciento cuarenta y siete a las dos horas supera el corte de ciento cuarenta. El distractor es la intolerancia a la glucosa: con ese valor, en una mujer no embarazada, sería la respuesta correcta. En la embarazada, no existe.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 81',
      stem: 'Una paciente de 29 años, cursando un embarazo de 28 semanas, se realiza una prueba de tolerancia a la glucosa oral, que muestra glicemia basal de 86 mg/dl y glicemia poscarga de 139 mg/dl.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Repetir la prueba de tolerancia a la glucosa a las 32 semanas' },
        { letter: 'B', text: 'Iniciar metformina' },
        { letter: 'C', text: 'Iniciar dieta hipoglucídica' },
        { letter: 'D', text: 'Iniciar insulina' },
        { letter: 'E', text: 'Mantener el control normal del embarazo' },
      ],
      correct: 'E',
      explanation: 'Basal < 100 y postcarga < 140 mg/dL: PTGO normal. Sin factores de alto riesgo (feto grande, polihidramnios, DMG previa) no se repite a las 32–34 semanas: control normal.',
      say: {
        stem: 'Y ahora la pregunta espejo, del EUNACOM de diciembre de dos mil diecinueve. Embarazo de veintiocho semanas, curva de tolerancia con basal de ochenta y seis y, a las dos horas, ciento treinta y nueve.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: repetir la curva a las treinta y dos semanas, iniciar metformina, iniciar dieta, iniciar insulina, o mantener el control normal. Piénsalo.',
        answer: 'Es la E. Ciento treinta y nueve está justo bajo ciento cuarenta, y la basal es normal: la curva es normal. El distractor tentador es repetirla a las treinta y dos semanas, pero eso se hace solo con factores de alto riesgo: feto grande, polihidramnios o diabetes gestacional previa, y el enunciado no menciona ninguno. Un punto bajo el corte es normal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 133',
      stem: 'Una mujer de 34 años, cursando un embarazo de 24 semanas, se realiza un test de tolerancia a la glucosa oral, con 75 gramos de glucosa, que resulta 205 a las 2 horas.',
      question: 'Además de dieta y ejercicio, el tratamiento de elección es:',
      options: [
        { letter: 'A', text: 'Acarbosa' },
        { letter: 'B', text: 'Sitaglipina' },
        { letter: 'C', text: 'Metformina' },
        { letter: 'D', text: 'Insulina' },
        { letter: 'E', text: 'Glibenclamida' },
      ],
      correct: 'D',
      explanation: 'Diabetes gestacional: primero terapia nutricional y, si no se logran las metas, insulina, que es el fármaco de elección en el embarazo.',
      say: {
        stem: 'Cerramos las preguntas con una de tratamiento, del EUNACOM de julio de dos mil dieciséis. Embarazo de veinticuatro semanas, curva de tolerancia con doscientos cinco a las dos horas.',
        question: 'Además de dieta y ejercicio, ¿cuál es el tratamiento de elección?',
        options: 'Las opciones: acarbosa, sitagliptina, metformina, insulina, o glibenclamida. Piénsalo.',
        answer: 'Es la D, insulina. Doscientos cinco a las dos horas es diabetes gestacional de sobra. Después de la terapia nutricional, el fármaco de elección en el embarazo es la insulina. La glibenclamida es el distractor clásico, porque es un fármaco que conoces bien, pero en la embarazada el libro la contraindica.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Los cortes bajan', kind: 'criteria', items: [
          { t: 'No existe la prediabetes', d: 'Ayuno ≥ 100 · PTGO 2 h ≥ 140',
            say: 'Cerremos con las reglas de oro. En el embarazo no existe la prediabetes: ayuno de cien o más, o curva de ciento cuarenta o más a las dos horas, es diabetes gestacional.' },
          { t: 'Ayuno 100–125 al ingreso: repetir', d: 'No pedir PTGO',
            say: 'Al ingreso, un ayuno entre cien y ciento veinticinco se repite; no se pide curva.' },
        ] },
        { title: 'Clasificación', tag: '12 semanas', kind: 'alert', items: [
          { t: '≥ 126 antes de las 12 semanas', d: 'Pregestacional: malformaciones',
            say: 'Ciento veintiséis o más antes de las doce semanas es pregestacional, y su riesgo son las malformaciones.' },
          { t: 'Gestacional: macrosomía', d: 'PTGO universal a las 24–28 semanas',
            say: 'La gestacional da macrosomía, y se busca con la curva universal a las veinticuatro a veintiocho semanas.' },
        ] },
        { title: 'Tratamiento', tag: 'Metas estrictas', kind: 'pharma', items: [
          { t: 'Nutrición, luego insulina', d: 'Ayuno 70–95 · 1 h < 140',
            say: 'Y el tratamiento parte con nutrición, y si no alcanza las metas, insulina. Si te llevas una sola idea de hoy: antes de interpretar una glicemia, pregunta si la paciente está embarazada y de cuántas semanas, porque eso cambia todos los cortes. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Diabetes en el embarazo: el momento y el valor',
    root: N('start', 'Embarazada', 'Glicemia de ayuno al ingreso',
      'Embarazada en su ingreso prenatal: a todas se les pide una glicemia de ayuno.',
      ['', N('q', '¿Cuánto da el ayuno?', 'Menor de 100 · 100–125 · 126 o más',
        '¿En qué rango está la glicemia de ayuno?',
        ['< 100', N('q', 'PTGO 75 g a las 24–28 sem', '¿Basal ≥ 100 o 2 h ≥ 140?',
          'Menor a cien es normal, y se programa la curva de tolerancia a las veinticuatro a veintiocho semanas. ¿Tiene una basal de cien o más, o un valor a las dos horas de ciento cuarenta o más?',
          ['SÍ', N('alert', 'Diabetes gestacional', 'Nutrición → insulina si no hay metas',
            'Basta un valor: diabetes gestacional. Terapia nutricional, e insulina si no logra las metas.')],
          ['NO', N('ok', 'Control normal', 'PTGO a las 32–34 sem solo si alto riesgo',
            'Curva normal: control habitual. Se repite a las treinta y dos a treinta y cuatro semanas solo si hay feto grande, polihidramnios o diabetes gestacional previa.')])],
        ['100–125', N('do', 'Repetir el ayuno', 'Segunda ≥ 100: diabetes gestacional',
          'Entre cien y ciento veinticinco: se repite la glicemia de ayuno. Si vuelve a dar cien o más, es diabetes gestacional.')],
        ['≥ 126', N('alert', 'Repetir el ayuno', 'Segunda ≥ 126: pregestacional',
          'Ciento veintiséis o más antes de las doce semanas: se repite. Si se confirma, es diabetes pregestacional, con riesgo de malformaciones.')])]),
  },
};
