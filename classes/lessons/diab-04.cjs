// Clase Diabetes 1.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-04).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-04',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Por qué la meta no es la misma para todos y cuándo no hay que subir el tratamiento',
      say: 'Bienvenidos. Ya sabemos diagnosticar la diabetes; ahora la pregunta es hasta dónde bajar la glucosa. Y la respuesta del examen no es un número único: depende del paciente. Es un tema con trampas constantes, sobre todo en el adulto mayor, donde muchas veces la respuesta correcta es no hacer nada. Vamos a ver por qué.',
    },

    {
      type: 'flow',
      kicker: 'El porqué de las metas',
      title: 'Más bajo no siempre es mejor',
      nodes: [
        { id: 'hip', col: 0, row: 0, k: 'cause', t: 'Hiperglicemia crónica', s: 'Daña los vasos pequeños' },
        { id: 'mic', col: 1, row: 0, k: 'risk', t: 'Nefropatía y retinopatía', s: 'Complicaciones microvasculares' },
        { id: 'met', col: 2, row: 0, k: 'good', t: 'HbA1c < 7 %', s: 'Las previene' },
        { id: 'agr', col: 0, row: 2, k: 'cause', t: 'Control agresivo', s: 'HbA1c < 6 % (ensayo ACCORD)' },
        { id: 'hipo', col: 1, row: 2, k: 'mech', t: 'Hipoglicemias severas', s: 'Arritmias' },
        { id: 'mor', col: 2, row: 2, k: 'alert', t: 'Más mortalidad', s: 'En diabetes de larga data y alto riesgo CV' },
        { id: 'ind', col: 3, row: 1, k: 'q', t: 'Meta individualizada', s: 'Beneficio vs riesgo de hipoglicemia' },
      ],
      edges: [
        { from: 'hip', to: 'mic' }, { from: 'met', to: 'mic', label: 'previene' },
        { from: 'agr', to: 'hipo' }, { from: 'hipo', to: 'mor' },
        { from: 'met', to: 'ind' }, { from: 'mor', to: 'ind' },
      ],
      steps: [
        { show: ['hip', 'mic'], note: 'El objetivo: proteger los vasos pequeños',
          say: 'Partamos por el porqué. La hiperglicemia sostenida daña los vasos pequeños, y de ahí salen la nefropatía y la retinopatía. Controlar la glucosa sirve, sobre todo, para prevenir esas complicaciones microvasculares.' },
        { show: ['met'], note: 'Meta estándar: HbA1c < 7 %',
          say: 'La meta que lo logra es una hemoglobina glicosilada bajo siete por ciento, que equivale a una glicemia promedio cercana a ciento cincuenta y cuatro.' },
        { show: ['agr', 'hipo'], note: 'ACCORD: intentar normalizar la glicemia',
          say: 'Entonces, ¿por qué no bajarla todavía más? Eso fue lo que probó el ensayo ACCORD: en diabéticos de larga data y alto riesgo cardiovascular, buscó una hemoglobina glicosilada bajo seis. Y aparecieron hipoglicemias severas.' },
        { show: ['mor'], note: 'Aumentó la mortalidad',
          say: 'El resultado fue un aumento de la mortalidad general, que el libro atribuye a arritmias secundarias a esas hipoglicemias. La lección es clara: bajar la glucosa tiene un precio, y ese precio es la hipoglicemia.' },
        { show: ['ind'], note: 'La meta se ajusta a cada paciente',
          say: 'De ahí sale el paradigma actual: la meta se individualiza. Para cada paciente se pesa el beneficio de prevenir complicaciones a largo plazo contra el riesgo de una hipoglicemia hoy.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Metas',
      title: 'La meta estándar y cuándo ser más estricto',
      cards: [
        { title: 'Adulto estándar', tag: 'La mayoría', kind: 'key', items: [
          { t: 'HbA1c < 7 %', d: 'Expectativa de vida sobre 15 años',
            say: 'Veamos las metas concretas. Para la mayoría de los adultos con diabetes tipo dos, con una expectativa de vida sobre quince años, la meta es hemoglobina glicosilada bajo siete por ciento.' },
          { t: 'Preprandial 80–130 · postprandial < 180', d: 'Glicemias capilares',
            say: 'Y en las glicemias capilares, entre ochenta y ciento treinta antes de comer, y bajo ciento ochenta dos horas después.' },
        ] },
        { title: 'Meta más estricta', tag: 'Joven y sin riesgo', kind: 'normal', items: [
          { t: 'HbA1c < 6,5 %', d: 'Joven, diagnóstico reciente, sin daño cardiovascular',
            say: 'Se puede ser más estricto, bajo seis coma cinco, en el paciente joven, con diagnóstico reciente, sin daño cardiovascular.' },
          { t: 'Solo con fármacos sin hipoglicemia', d: 'Metformina, iSGLT2',
            say: 'Pero con una condición: que esté tratado con fármacos que no producen hipoglicemia, como la metformina o los inhibidores SGLT dos. La lógica es la misma de siempre: si el riesgo de hipoglicemia es bajo, puedo exigir más.' },
        ] },
        { title: 'Cómo se mide', tag: 'Examen de control', kind: 'criteria', items: [
          { t: 'HbA1c: últimos 2–3 meses', d: 'La fructosamina refleja 2–3 semanas',
            say: 'Y el examen para evaluar el control es la hemoglobina glicosilada, que mira los últimos dos a tres meses. No la glicemia de ayuno aislada, ni la curva de tolerancia, que es para diagnosticar.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Adulto mayor',
      title: 'En el adulto mayor, la meta se afloja',
      nodes: [
        { id: 'am', col: 0, row: 1, k: 'start', t: 'Adulto mayor con DM2', s: '¿Cómo está funcionalmente?' },
        { id: 'act', col: 1, row: 0, k: 'good', t: 'Funcional y activo', s: 'Pocas comorbilidades' },
        { id: 'm75', col: 2, row: 0, k: 'good', t: 'HbA1c < 7,5 %', s: 'Meta del adulto mayor activo' },
        { id: 'fra', col: 1, row: 2, k: 'risk', t: 'Frágil o dependiente', s: 'Caídas, demencia, ERC 4–5' },
        { id: 'm8', col: 2, row: 2, k: 'risk', t: 'HbA1c < 8,0–8,5 %', s: 'Meta del adulto mayor frágil' },
        { id: 'reg', col: 3, row: 1, k: 'alert', t: 'Si está en meta: mantener', s: 'No intensificar' },
      ],
      edges: [
        { from: 'am', to: 'act' }, { from: 'act', to: 'm75' },
        { from: 'am', to: 'fra' }, { from: 'fra', to: 'm8' },
        { from: 'm75', to: 'reg' }, { from: 'm8', to: 'reg' },
      ],
      steps: [
        { show: ['am'], note: 'La hipoglicemia pesa más que la retinopatía a 20 años',
          say: 'Ahora el escenario que más se pregunta: el adulto mayor. Aquí la balanza se inclina, porque el riesgo de una hipoglicemia supera ampliamente el beneficio de prevenir una retinopatía en veinte años. Una hipoglicemia en un anciano es una caída, una fractura o un evento cardiovascular.' },
        { show: ['act', 'm75'], note: 'Activo: meta bajo 7,5 %',
          say: 'Si el adulto mayor es funcional y activo, con pocas comorbilidades, la meta es bajo siete coma cinco por ciento.' },
        { show: ['fra', 'm8'], note: 'Frágil: meta bajo 8 a 8,5 %',
          say: 'Si es frágil o dependiente, con caídas, deterioro cognitivo o enfermedad renal crónica etapa cuatro o cinco, la meta se afloja a bajo ocho a ocho coma cinco por ciento.' },
        { show: ['reg'], note: 'La regla de oro del examen',
          say: 'Y de aquí sale la regla de oro del examen. Si un adulto mayor de ochenta años, en tratamiento con sulfonilureas o insulina, trae una hemoglobina glicosilada de siete coma seis, la conducta correcta es mantener el esquema. No subirlo. Las alternativas que agregan glibenclamida o insulina para llegar a siete son la trampa.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Más allá de la glucosa',
      title: 'Las otras metas: presión, lípidos y tamizaje',
      cards: [
        { title: 'Riesgo cardiovascular', tag: 'Lo que más protege', kind: 'key', items: [
          { t: 'Presión arterial < 130/80 mmHg', d: 'Si es bien tolerada',
            say: 'El control no termina en la glucosa. De hecho, el riesgo cardiovascular del diabético baja mucho más tratando la presión y los lípidos que solo la glucosa. La meta de presión es bajo ciento treinta con ochenta, siempre que sea bien tolerada.' },
          { t: 'LDL < 70 mg/dL', d: '< 55 si muy alto riesgo: coronario o daño renal',
            say: 'Y el colesterol LDL, bajo setenta en el diabético de alto riesgo, y bajo cincuenta y cinco si el riesgo es muy alto, es decir, con enfermedad coronaria o daño renal.' },
        ] },
        { title: 'Tamizaje microvascular', tag: 'Anual', kind: 'criteria', items: [
          { t: 'Albuminuria: RAC en orina matinal', d: 'Una vez al año',
            say: 'Y las complicaciones microvasculares que queremos prevenir se buscan activamente, una vez al año: la albuminuria, con la razón albúmina creatinina en orina matinal.' },
          { t: 'Fondo de ojo', d: 'Cámara no midriática',
            say: 'Y el fondo de ojo con cámara no midriática. Ambos los veremos en detalle en el bloque de complicaciones crónicas.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Metas según el paciente',
      head: ['Perfil del paciente', 'Meta de HbA1c', 'Glicemia preprandial'],
      rows: [
        { cells: ['Joven, diagnóstico reciente, sin complicaciones', '< 6,5–7,0 %', '80 a 130 mg/dL'],
          say: 'Repasemos en una tabla. Joven, con diagnóstico reciente y sin complicaciones: bajo seis coma cinco a siete, con preprandiales de ochenta a ciento treinta.' },
        { cells: ['Adulto estándar con DM2', '< 7,0 %', '80 a 130 mg/dL'],
          say: 'El adulto estándar: bajo siete.' },
        { cells: ['Adulto mayor activo', '< 7,5 %', '90 a 140 mg/dL'],
          say: 'El adulto mayor activo: bajo siete coma cinco, con preprandiales de noventa a ciento cuarenta.' },
        { cells: ['Adulto mayor frágil, demencia, ERC 4–5 o hipoglicemias', '< 8,0–8,5 %', '100 a 150 mg/dL'],
          say: 'El frágil, con demencia, enfermedad renal avanzada o hipoglicemias: bajo ocho a ocho coma cinco, con preprandiales de cien a ciento cincuenta. Aquí el error típico es intensificar para llegar a siete.' },
        { cells: ['Embarazada con diabetes gestacional', '< 6,0 % sin hipoglicemia', '< 90–95 mg/dL'],
          say: 'Y en el otro extremo, la embarazada con diabetes gestacional, que conecta con la clase anterior: la meta es la más estricta de todas, bajo seis por ciento sin hipoglicemias, con ayuno bajo noventa a noventa y cinco.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 82 años, DM2 de 20 años de evolución, artrosis severa y ERC etapa 3b (VFG 38 mL/min). Usa insulina NPH nocturna 14 UI y metformina 500 mg/día. HbA1c 7,7 %, glicemias preprandiales matinales de 115 a 135 mg/dL, sin hipoglicemias. Pregunta si debe aumentar la insulina.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Aumentar la NPH hasta lograr HbA1c < 7 %' },
        { letter: 'B', text: 'Agregar glibenclamida 5 mg en la mañana' },
        { letter: 'C', text: 'Mantener el esquema actual' },
        { letter: 'D', text: 'Agregar insulina cristalina antes de cada comida' },
        { letter: 'E', text: 'Suspender la insulina y dejar solo metformina' },
      ],
      correct: 'C',
      explanation: 'Adulto mayor de 82 años, con ERC y movilidad reducida: la meta de HbA1c es 7,5–8,5 %. Con 7,7 % y sin hipoglicemias está en meta; intensificar solo aumenta el riesgo de hipoglicemia nocturna, caídas y eventos cardiovasculares.',
      say: {
        stem: 'Vamos con un caso. Hombre de ochenta y dos años, diabético hace veinte, con artrosis severa y enfermedad renal crónica etapa tres b. Usa insulina NPH nocturna y metformina. Su hemoglobina glicosilada es siete coma siete, sus glicemias de la mañana están entre ciento quince y ciento treinta y cinco, y no ha tenido hipoglicemias. Pregunta si debe subir la insulina.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: subir la NPH hasta bajar de siete, agregar glibenclamida, mantener el esquema, agregar insulina cristalina antes de las comidas, o suspender la insulina. Piénsalo.',
        answer: 'Es la C, mantener. Es un adulto mayor con daño renal y movilidad reducida: su meta está entre siete coma cinco y ocho coma cinco, y siete coma siete está dentro. El distractor tentador es la A, porque siete es la meta que todos recordamos; pero en este paciente, forzarla solo le compra hipoglicemias nocturnas, caídas y fracturas. Y agregar glibenclamida, además, suma un fármaco que produce hipoglicemia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 24',
      stem: 'Un paciente de 81 años, con antecedente de diabetes, en tratamiento con metformina 850 al día, se realiza exámenes de control, entre los que destaca una hemoglobina A1c de 7,5%.',
      question: 'La conducta más adecuada es:',
      options: [
        { letter: 'A', text: 'Mantener el tratamiento' },
        { letter: 'B', text: 'Agregar glibenclamida' },
        { letter: 'C', text: 'Subir la dosis de metformina' },
        { letter: 'D', text: 'Agregar insulina' },
        { letter: 'E', text: 'Agregar sitagliptina' },
      ],
      correct: 'A',
      explanation: 'En el adulto mayor la meta de HbA1c se flexibiliza (bajo 7,5–8 %). Con 7,5 % está en meta: se mantiene el tratamiento.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecinueve. Paciente de ochenta y un años, diabético, en tratamiento con metformina, con una hemoglobina glicosilada de siete coma cinco.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: mantener el tratamiento, agregar glibenclamida, subir la metformina, agregar insulina, o agregar sitagliptina. Piénsalo.',
        answer: 'Es la A, mantener. Es la regla de oro en su forma más pura: ochenta y un años y siete coma cinco está en meta. Todas las demás alternativas intensifican el tratamiento, y ese es el reflejo que el examen quiere que corrijas: en el adulto mayor, un siete coma cinco no es un fracaso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 105',
      stem: 'Un paciente de 59 años, con diagnóstico de diabetes mellitus tipo 2, en tratamiento con metformina 850mg dos veces al día y glibenclamida 5mg cada 12 horas, se realiza exámenes de control entre los que destaca una creatinina de 1,0 mg/dL y una hemoglobina glicosilada de 6,9%. Su examen físico no muestra alteraciones.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Suspender la glibenclamida' },
        { letter: 'B', text: 'Aumentar dosis de glibenclamida' },
        { letter: 'C', text: 'Suspender metformina' },
        { letter: 'D', text: 'Aumentar dosis de metformina' },
        { letter: 'E', text: 'Mantener el tratamiento sin cambios' },
      ],
      correct: 'E',
      explanation: 'Adulto de 59 años con HbA1c bajo 7 %, función renal normal y sin hipoglicemias: está en meta, no se modifica el tratamiento.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil diecisiete. Paciente de cincuenta y nueve años con diabetes tipo dos, en tratamiento con metformina y glibenclamida. Creatinina normal y hemoglobina glicosilada de seis coma nueve.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: suspender la glibenclamida, aumentarla, suspender la metformina, aumentarla, o mantener el tratamiento sin cambios. Piénsalo.',
        answer: 'Es la E, mantener. Un adulto de cincuenta y nueve años, con la meta estándar bajo siete, cumplida, y función renal normal para seguir con metformina. No hay nada que corregir. Guarda estos mismos números, porque la siguiente pregunta los repite en otro paciente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 118',
      stem: 'Un paciente de 85 años, con antecedente de deterioro funcional y cognitivo inicial y diagnóstico de diabetes mellitus tipo 2, en tratamiento con metformina 850 mg dos veces al día y glibenclamida 5 mg cada 12 horas, se realiza exámenes de control entre los que destaca una creatinina de 1,0 mg/dL y una hemoglobina glicosilada de 6,9%. Su examen físico no muestra alteraciones.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Suspender la glibenclamida' },
        { letter: 'B', text: 'Disminuir la dosis de glibenclamida a 5 mg una vez al día' },
        { letter: 'C', text: 'Suspender metformina' },
        { letter: 'D', text: 'Disminuir dosis de metformina' },
        { letter: 'E', text: 'Mantener el tratamiento sin cambios' },
      ],
      correct: 'A',
      explanation: 'Adulto mayor frágil (85 años, deterioro funcional y cognitivo): meta de HbA1c bajo 8–8,5 %. Con 6,9 % está sobretratado y en riesgo de hipoglicemia; se suspende la glibenclamida, la sulfonilurea que la produce, y se mantiene la metformina.',
      say: {
        stem: 'Y la pregunta gemela, del EUNACOM de agosto de dos mil veintiuno. Mismo tratamiento, metformina y glibenclamida, misma creatinina normal, misma hemoglobina glicosilada de seis coma nueve. Pero ahora el paciente tiene ochenta y cinco años y un deterioro funcional y cognitivo inicial.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: suspender la glibenclamida, bajarla a una dosis diaria, suspender la metformina, bajar la metformina, o mantener sin cambios. Piénsalo.',
        answer: 'Es la A, suspender la glibenclamida. Los números son idénticos a la pregunta anterior, y la respuesta cambia, porque cambió el paciente. Un anciano frágil, con deterioro cognitivo, tiene meta bajo ocho a ocho coma cinco; con seis coma nueve está sobretratado, y la glibenclamida es justamente el fármaco que le puede provocar una hipoglicemia grave. Mantener, que era correcto en el joven, aquí es el distractor.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Metas de HbA1c', tag: 'Individualizar', kind: 'key', items: [
          { t: 'Estándar < 7 % · joven < 6,5 %', d: 'Estricto solo sin riesgo de hipoglicemia',
            say: 'Cerremos con las reglas de oro. La meta estándar es bajo siete; en el joven sin riesgo cardiovascular y con fármacos que no dan hipoglicemia, bajo seis coma cinco.' },
          { t: 'Activo < 7,5 % · frágil < 8–8,5 %', d: 'En meta: no intensificar',
            say: 'En el adulto mayor activo, bajo siete coma cinco; en el frágil, bajo ocho a ocho coma cinco. Y si está en meta, no se intensifica.' },
        ] },
        { title: 'El precio', tag: 'ACCORD', kind: 'alert', items: [
          { t: 'Control agresivo = más mortalidad', d: 'Por hipoglicemias',
            say: 'Bajar demasiado mata: esa es la lección del ACCORD. En el anciano sobretratado, se retira el fármaco que produce hipoglicemia.' },
        ] },
        { title: 'Más allá de la glucosa', tag: 'Riesgo CV', kind: 'criteria', items: [
          { t: 'PA < 130/80 · LDL < 70 (o < 55)', d: 'RAC y fondo de ojo anuales',
            say: 'Y no olvides la presión bajo ciento treinta con ochenta, el LDL bajo setenta o cincuenta y cinco, y el tamizaje anual de riñón y retina. Si te llevas una sola idea de hoy: la meta de hemoglobina glicosilada se elige mirando al paciente, no al número, y en el adulto mayor la hipoglicemia es más peligrosa que la hiperglicemia. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Metas de HbA1c: ¿quién es el paciente?',
    root: N('start', 'DM2 en control', 'HbA1c de control',
      'Paciente con diabetes tipo dos que trae su hemoglobina glicosilada de control. Antes de mirar el número, define quién es el paciente.',
      ['', N('q', '¿Qué perfil tiene?', 'Joven · adulto estándar · adulto mayor',
        '¿Es un joven sin complicaciones, un adulto estándar, o un adulto mayor?',
        ['Joven, sin riesgo CV', N('ok', 'Meta < 6,5 %', 'Con fármacos sin hipoglicemia',
          'Joven, con diagnóstico reciente y sin daño cardiovascular: se puede buscar bajo seis coma cinco, usando fármacos que no dan hipoglicemia.')],
        ['Adulto estándar', N('ok', 'Meta < 7 %', 'Si está en meta: mantener',
          'Adulto estándar: bajo siete. Si está en meta, se mantiene el tratamiento.')],
        ['Adulto mayor', N('q', '¿Activo o frágil?', 'Caídas, demencia, ERC 4–5',
          '¿Es un adulto mayor activo, o frágil, con caídas, demencia o enfermedad renal avanzada?',
          ['Activo', N('ok', 'Meta < 7,5 %', 'No intensificar si está en meta',
            'Activo y con pocas comorbilidades: bajo siete coma cinco.')],
          ['Frágil', N('alert', 'Meta < 8–8,5 %', 'Sobretratado: retirar sulfonilurea',
            'Frágil: bajo ocho a ocho coma cinco. Si está muy por debajo con una sulfonilurea o insulina, está sobretratado, y se retira el fármaco que produce hipoglicemia.')])])]),
  },
};
