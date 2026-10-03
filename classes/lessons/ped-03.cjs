// Clase 18.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-03',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'El calendario que tienes que saber de memoria, edad por edad',
      say: 'Bienvenido. Hoy vemos el Programa Nacional de Inmunizaciones, el calendario de vacunas de Chile. Es el tema pediátrico más preguntado del examen, así que vale la pena que le dediques atención. Vas a aprender el calendario completo, edad por edad, y sobre todo vas a aprender a distinguir las contraindicaciones reales de las falsas, que es justo donde el examen te tiende la trampa. Empecemos.',
    },

    {
      type: 'flow',
      kicker: 'El calendario',
      title: 'Del nacimiento a los dieciocho meses',
      nodes: [
        { id: 'rn', col: 0, row: 2, k: 'start', t: 'Recién nacido', s: 'BCG y Hepatitis B' },
        { id: 'm24', col: 1, row: 0, k: 'mech', t: '2 y 4 meses', s: 'Hexavalente y Neumocócica' },
        { id: 'm6', col: 2, row: 1, k: 'mech', t: '6 meses', s: 'Hexavalente, tercera dosis' },
        { id: 'm12', col: 3, row: 0, k: 'effect', t: '12 meses', s: 'Tresvírica, Meningocócica, refuerzo' },
        { id: 'm18', col: 4, row: 2, k: 'risk', t: '18 meses', s: 'Hexavalente, Hepatitis A, Varicela' },
      ],
      edges: [
        { from: 'rn', to: 'm24' }, { from: 'm24', to: 'm6' }, { from: 'm6', to: 'm12' }, { from: 'm12', to: 'm18' },
      ],
      steps: [
        { show: ['rn'], note: 'Las dos primeras vacunas de la vida',
          say: 'Empecemos por el principio. En la maternidad, el recién nacido recibe dos vacunas: la BCG, que protege de las formas graves de tuberculosis, y la Hepatitis B, en las primeras horas de vida.' },
        { show: ['m24'], note: 'La base del esquema',
          say: 'A los dos y a los cuatro meses, se dan dos vacunas juntas: la hexavalente, que junta difteria, tétanos, tos convulsiva, Haemophilus, hepatitis B y polio inactivada en una sola inyección, y la neumocócica conjugada.' },
        { show: ['m6'], note: 'Se completa la serie de tres dosis',
          say: 'A los seis meses va la tercera dosis de hexavalente, completando la serie de base.' },
        { show: ['m12'], note: 'Aparecen las primeras vacunas vivas',
          say: 'Al año aparecen tres vacunas nuevas: la tresvírica, contra sarampión, rubéola y paperas, la meningocócica que cubre los serogrupos A, C, W ciento treinta y cinco, e Y, y un refuerzo de la neumocócica.' },
        { show: ['m18'], note: 'El último hito del lactante',
          say: 'Y a los dieciocho meses, el cuarto refuerzo de hexavalente, más hepatitis A, más la primera dosis de varicela. Con esto termina el calendario del lactante, y lo que sigue son las dosis escolares.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Vacunas vivas versus inactivadas',
      title: 'Por qué importa esta diferencia',
      cards: [
        { title: 'Vivas atenuadas', tag: 'Cuatro vacunas', kind: 'alert', items: [
          { t: 'BCG, Tresvírica, Varicela', d: 'Contraindicadas en inmunosupresión',
            say: 'Fíjate en cuáles vacunas son de microorganismo vivo, porque de ahí salen las contraindicaciones reales: la BCG, la tresvírica y la varicela. Están prohibidas en embarazo y en inmunosupresión grave.' },
        ] },
        { title: 'El resto: inactivadas', tag: 'Hexavalente, neumococo, meningococo', kind: 'normal', items: [
          { t: 'Sin microorganismo vivo', d: 'Seguras en el inmunosuprimido',
            say: 'Todas las demás, la hexavalente, la neumocócica, la meningocócica, la hepatitis A, son inactivadas o de fragmentos. No tienen microorganismo capaz de replicarse, así que son seguras incluso en un paciente inmunosuprimido.' },
        ] },
        { title: 'Nirsevimab', tag: 'No es una vacuna', kind: 'key', items: [
          { t: 'Anticuerpo contra el VRS', d: 'Universal en menores de 6 meses',
            say: 'Y un dato de actualidad que se pregunta cada vez más: el nirsevimab. No es una vacuna, es un anticuerpo monoclonal contra el virus respiratorio sincicial, que se da a todo recién nacido y lactante menor de seis meses antes de su primer invierno.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La trampa clásica',
      title: 'Contraindicaciones reales versus falsas',
      nodes: [
        { id: 'res', col: 0, row: 0, k: 'good', t: 'Resfrío o fiebre baja', s: 'No contraindica nada' },
        { id: 'atb', col: 0, row: 1, k: 'good', t: 'Antibióticos en curso', s: 'No contraindica nada' },
        { id: 'hue', col: 0, row: 2, k: 'good', t: 'Alergia al huevo', s: 'No contraindica la trivírica' },
        { id: 'pre', col: 0, row: 3, k: 'good', t: 'Prematurez', s: 'Se vacuna por edad cronológica' },
        { id: 'ok', col: 2, row: 1, k: 'effect', t: 'Se vacuna igual', s: 'Falsas contraindicaciones' },
        { id: 'emb', col: 0, row: 4, k: 'risk', t: 'Embarazo o inmunosupresión grave', s: 'Contraindican las vivas' },
        { id: 'no', col: 2, row: 4, k: 'alert', t: 'No se dan las vivas', s: 'Contraindicación real' },
      ],
      edges: [
        { from: 'res', to: 'ok' }, { from: 'atb', to: 'ok' }, { from: 'hue', to: 'ok' }, { from: 'pre', to: 'ok' },
        { from: 'emb', to: 'no' },
      ],
      steps: [
        { show: ['res', 'atb'], note: 'Los errores más comunes del examen',
          say: 'Ahora la parte que más se presta para confusión. Un resfrío común, una diarrea leve, o fiebre baja, bajo treinta y ocho coma cinco, no contraindican ninguna vacuna. Y estar tomando antibióticos tampoco.' },
        { show: ['hue'], note: 'Un mito muy instalado',
          say: 'La alergia al huevo tampoco contraindica la tresvírica ni la influenza actual: se puede vacunar sin pruebas previas.' },
        { show: ['pre'], note: 'No se usa la edad corregida aquí',
          say: 'Y la prematurez: se vacuna según la edad cronológica, la misma que ya cumplió, nunca según la edad gestacional corregida. Ojo, porque esto es al revés de lo que aprendiste en la clase de desarrollo psicomotor.' },
        { show: ['ok'], note: 'En los cuatro casos, se vacuna',
          say: 'En los cuatro casos, la conducta es la misma: se vacuna sin cambios.' },
        { show: ['emb'], note: 'Aquí sí hay que detenerse',
          say: 'Las contraindicaciones reales son solo dos: el embarazo y la inmunosupresión grave, como una quimioterapia o corticoides en dosis altas por más de dos semanas.' },
        { show: ['no'], note: 'Solo se suspenden las vivas',
          say: 'Y en esos dos casos, lo que se suspende son las vacunas vivas: la tresvírica, la varicela y la BCG. Las inactivadas se mantienen igual.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos todo el calendario en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que el examen confunde a propósito',
      head: ['Situación', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Prematuro de 2 meses', 'Vacunar según edad cronológica', 'Ajustar por edad gestacional'],
          say: 'Repasemos las trampas. Un prematuro de dos meses se vacuna igual que cualquier niño de dos meses. El error es ajustar la edad, como si fuera desarrollo psicomotor.' },
        { cells: ['Alergia al huevo', 'Vacunar sin pruebas previas', 'Pedir test cutáneo o posponer'],
          say: 'La alergia al huevo no cambia nada. El error es pedir un test cutáneo antes de vacunar.' },
        { cells: ['Fiebre baja o resfrío', 'Vacunar sin cambios', 'Posponer la vacuna'],
          say: 'Un resfrío o fiebre baja no posponen nada. El error es citar a otro día.' },
        { cells: ['Corticoides en dosis alta', 'Suspender solo las vivas', 'Suspender todo el esquema'],
          say: 'Con corticoides en dosis alta, solo se suspenden las vivas. El error es suspender el calendario completo, incluidas las inactivadas.' },
        { cells: ['Vacuna trivírica y fiebre', 'Fiebre a los 7 a 10 días', 'Atribuirla de inmediato a la vacuna'],
          say: 'Y si hay fiebre después de vacunar, la trivírica la da tarde, entre siete y diez días después, por ser un virus vivo. Las inactivadas, como la pertusis, dan fiebre casi de inmediato.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 18 meses, con antecedente de haber nacido prematuro, está en tratamiento con corticoides sistémicos por un cuadro obstructivo bronquial recurrente severo. Su última vacuna fue la BCG, al nacer. La madre consulta para regularizar su calendario, que está atrasado desde entonces.',
      question: '¿Qué vacuna está contraindicada mientras el niño reciba corticoides?',
      options: [
        { letter: 'A', text: 'Antineumocócica' },
        { letter: 'B', text: 'Antimeningocócica' },
        { letter: 'C', text: 'Tresvírica' },
        { letter: 'D', text: 'Virus hepatitis A' },
        { letter: 'E', text: 'Hexavalente' },
      ],
      correct: 'C',
      explanation: 'Mientras el paciente reciba corticoides sistémicos en dosis inmunosupresoras, están contraindicadas las vacunas de virus vivo atenuado: tresvírica, varicela, fiebre amarilla y rotavirus oral. Las inactivadas, incluida la hexavalente, la antineumocócica, la antimeningocócica y la hepatitis A, se administran sin problema.',
      say: {
        stem: 'Vamos con un caso. Lactante de dieciocho meses, nacido prematuro, en tratamiento con corticoides por un cuadro bronquial obstructivo severo. Su última vacuna fue la BCG, al nacer, y su calendario está atrasado desde entonces. La madre quiere ponerlo al día.',
        question: '¿Qué vacuna está contraindicada mientras el niño reciba corticoides?',
        options: 'Las opciones: antineumocócica, antimeningocócica, tresvírica, hepatitis A, o hexavalente. Piénsalo.',
        answer: 'Es la C, la tresvírica. Recuerda la regla que vimos: con corticoides en dosis inmunosupresoras, lo único que se suspende son las vacunas vivas, y la tresvírica es la única viva entre las opciones. Todas las demás, hexavalente, neumocócica, meningocócica y hepatitis A, son inactivadas y se pueden poner de inmediato, junto con las que le faltan por su edad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 151',
      stem: 'Un niño de 2 meses, con antecedente de haber nacido a las 34 semanas de gestación, acude a control.',
      question: '¿En qué momento debe administrarse la vacuna antineumocócica conjugada?',
      options: [
        { letter: 'A', text: 'En este momento' },
        { letter: 'B', text: 'En 4 semanas más' },
        { letter: 'C', text: 'En 6 semanas más' },
        { letter: 'D', text: 'A los 12 meses de edad' },
        { letter: 'E', text: 'No debe administrarse' },
      ],
      correct: 'A',
      explanation: 'El calendario de vacunas se administra según la edad cronológica, no la edad corregida por prematurez. La única excepción es la BCG, que espera a que el niño alcance un peso mínimo de 2.000 gramos.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de agosto de dos mil veintiuno. Niño de dos meses, que nació a las treinta y cuatro semanas de gestación, llega a control.',
        question: '¿En qué momento debe administrarse la vacuna antineumocócica conjugada?',
        options: 'Las opciones: en este momento, en cuatro semanas más, en seis semanas más, a los doce meses, o que no debe administrarse.',
        answer: 'Es la A. El calendario de vacunas se guía por la edad cronológica, no por la edad corregida: esta es exactamente la trampa que ya te advertí. La única vacuna que sí se ajusta es la BCG, que espera a que el niño llegue a los dos kilos de peso. Como este niño ya tiene dos meses de edad cronológica, le corresponde su vacuna hoy mismo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 67',
      stem: 'Un niño de 9 meses debe vacunarse por primera vez contra la influenza. Tiene el antecedente de haber desarrollado un rash eritematoso en las dos oportunidades en que se le dio a probar huevo.',
      question: '¿Cuál es la conducta más adecuada para su vacunación?',
      options: [
        { letter: 'A', text: 'Vacunar, de acuerdo al programa, sin cambios' },
        { letter: 'B', text: 'Prohibir permanentemente la vacunación contra la influenza' },
        { letter: 'C', text: 'Esperar la reacción ante la vacuna trivírica y decidir según aquello' },
        { letter: 'D', text: 'Postergar la vacunación hasta que cumpla 24 meses' },
        { letter: 'E', text: 'Realizar test cutáneo de alergia y decidir según resultado' },
      ],
      correct: 'A',
      explanation: 'La alergia al huevo es una falsa contraindicación para las vacunas actuales contra la influenza y para la tresvírica. Solo son contraindicaciones reales las reacciones adversas graves a una dosis previa o la alergia grave y conocida a un componente de la vacuna.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil diecinueve. Niño de nueve meses, que debe vacunarse por primera vez contra la influenza. Tiene el antecedente de un rash cuando probó huevo, en dos ocasiones.',
        question: '¿Cuál es la conducta más adecuada para su vacunación?',
        options: 'Las opciones: vacunar sin cambios, prohibir la vacuna para siempre, esperar la reacción a la trivírica antes de decidir, postergar hasta los veinticuatro meses, o hacer un test cutáneo primero. Piénsalo.',
        answer: 'Es la A. La alergia al huevo es una falsa contraindicación, tanto para la influenza como para la tresvírica: se vacuna sin cambios, sin pruebas previas y sin postergar nada. Fíjate que ninguna de las otras opciones tiene sustento, y todas nacen del mismo mito, que ya deberías tener identificado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 103',
      stem: 'Un niño de 12 meses recibe sus vacunas según el Plan Nacional de Inmunizaciones, más una dosis de la vacuna pentavalente que estaba atrasada. Diez días después, presenta fiebre hasta 38 grados.',
      question: '¿Qué vacuna es la responsable de la fiebre, con mayor probabilidad?',
      options: [
        { letter: 'A', text: 'Antimeningocócica' },
        { letter: 'B', text: 'Antineumocócica' },
        { letter: 'C', text: 'Trivírica' },
        { letter: 'D', text: 'Pertusis' },
        { letter: 'E', text: 'Anti-Haemophilus' },
      ],
      correct: 'C',
      explanation: 'La pertusis, por ser un componente inactivado, produce fiebre de inmediato o al día siguiente. La trivírica, por ser de virus vivo, puede producir un cuadro febril entre 7 y 10 días después de administrada.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil diecisiete. Niño de doce meses, que recibe sus vacunas del Plan Nacional, más una dosis atrasada de pentavalente. Diez días después, hace fiebre hasta treinta y ocho grados.',
        question: '¿Qué vacuna es la responsable de la fiebre, con mayor probabilidad?',
        options: 'Las opciones: antimeningocócica, antineumocócica, trivírica, pertusis, o anti-Haemophilus.',
        answer: 'Es la C, la trivírica. Este es el detalle fino que vimos en la tabla: las vacunas inactivadas, como la pertusis, dan fiebre casi de inmediato. La trivírica, por ser de virus vivo, se demora entre siete y diez días en dar fiebre, porque necesita que el virus se replique primero. Diez días después calza justo con ese patrón.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El calendario', tag: 'Edad por edad', kind: 'key', items: [
          { t: 'BCG y Hepatitis B: al nacer', d: 'Hexavalente: 2, 4, 6 y 18 meses',
            say: 'Cerremos con las reglas de oro. BCG y hepatitis B al nacer; hexavalente a los dos, cuatro, seis y dieciocho meses.' },
          { t: 'Tresvírica: 12 meses', d: 'Varicela y hepatitis A: 18 meses',
            say: 'Tresvírica al año; varicela y hepatitis A a los dieciocho meses.' },
        ] },
        { title: 'Falsas contraindicaciones', tag: 'Se vacuna igual', kind: 'normal', items: [
          { t: 'Resfrío, fiebre baja, antibióticos', d: 'Y la alergia al huevo',
            say: 'Un resfrío, fiebre baja, antibióticos y la alergia al huevo no contraindican nada.' },
        ] },
        { title: 'Las dos contraindicaciones reales', tag: 'Solo para las vivas', kind: 'alert', items: [
          { t: 'Embarazo e inmunosupresión grave', d: 'Suspenden solo BCG, tresvírica y varicela',
            say: 'Y las únicas contraindicaciones reales son el embarazo y la inmunosupresión grave, y solo afectan a las vacunas vivas. Si te llevas una sola idea de hoy: en vacunas, la edad siempre es la cronológica, nunca la corregida. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Vacunación: calendario y contraindicaciones',
    root: N('start', 'Niño que llega a vacunarse', 'Según su edad',
      'Un niño llega a vacunarse. Antes de mirar el calendario, pregúntate si hay algo que realmente contraindique la vacuna.',
      ['', N('q', '¿Tiene una contraindicación real?', 'Embarazo o inmunosupresión grave',
        'Solo dos cosas contraindican de verdad: el embarazo y la inmunosupresión grave, como quimioterapia o corticoides en dosis alta.',
        ['Sí', N('alert', 'Suspender solo las vivas', 'BCG, tresvírica y varicela',
          'Se suspenden únicamente las vacunas de virus vivo: BCG, tresvírica y varicela. Las inactivadas se mantienen igual.')],
        ['No, pero tiene resfrío, fiebre baja, alergia al huevo o nació prematuro', N('ok', 'Son falsas contraindicaciones', 'Se vacuna sin cambios',
          'Ninguna de estas condiciones cambia nada: se vacuna según lo que corresponda a su edad cronológica.')],
        ['No tiene ninguna condición especial', N('q', '¿Qué edad tiene?', 'El calendario según la edad',
          'Sin ninguna condición especial, sigues directo el calendario según su edad.',
          ['Recién nacido', N('do', 'BCG y Hepatitis B', 'En las primeras horas de vida', 'Las dos primeras vacunas de la vida, en la maternidad.')],
          ['2, 4 o 6 meses', N('do', 'Hexavalente y Neumocócica', 'La base del esquema', 'Hexavalente en las tres dosis, y neumocócica a los dos y cuatro meses.')],
          ['12 meses', N('do', 'Tresvírica, Meningocócica ACWY, refuerzo Neumocócica', 'Las primeras vivas', 'Aparecen las vacunas vivas: tresvírica y meningocócica, más el refuerzo de neumocócica.')],
          ['18 meses', N('do', 'Hexavalente, Hepatitis A, Varicela', 'Cierra el esquema del lactante', 'El cuarto refuerzo de hexavalente, hepatitis A, y la primera dosis de varicela.')])]),
    ]),
  },
};
