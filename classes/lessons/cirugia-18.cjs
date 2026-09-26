// Clase 11.18 — guion docente escrito a mano (ver gastro-01.cjs para el formato). Última clase del libro.
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-18).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-18',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Qué heridas se suturan, cuáles no, y quién necesita la vacuna del tétanos',
      say: 'Bienvenido a la última clase de cirugía. Terminamos con las heridas traumáticas y las mordeduras, un tema que se pregunta casi siempre con el mismo formato: te dan una herida y un estado de vacunación, y tienes que decidir vacuna, inmunoglobulina, o las dos. Aquí no hay que memorizar mil casos, hay dos preguntas que ordenan todo, y hoy te las voy a dejar bien claras, junto con lo que cambia cuando la herida es una mordedura.',
    },

    {
      type: 'points',
      kicker: 'Herida tetanígena',
      title: '¿Qué hace que una herida sea sucia?',
      cards: [
        { title: 'Herida tetanígena', tag: 'Alto riesgo', kind: 'alert', items: [
          { t: 'Contaminada con tierra o heces', d: 'También saliva o restos vegetales',
            say: 'Antes de decidir la profilaxis, tienes que reconocer qué herida es tetanígena, porque de ahí sale la mitad de la decisión. Lo es la que está contaminada con tierra, heces o saliva, ya que ahí es donde vive la bacteria del tétanos.' },
          { t: 'Punzante y profunda', d: 'Un clavo es el ejemplo clásico',
            say: 'También la herida punzante y profunda, con el clavo oxidado como el ejemplo que siempre usa el examen, porque ese ambiente sin oxígeno es justo el que la bacteria necesita para multiplicarse.' },
          { t: 'Aplastamiento o tejido muerto', d: 'O más de seis horas de evolución',
            say: 'Y la que tiene aplastamiento, tejido desvitalizado, o más de seis horas desde que ocurrió. Cualquiera de estas la hace tetanígena.' },
        ] },
        { title: 'Herida limpia', tag: 'Bajo riesgo', kind: 'normal', items: [
          { t: 'Superficial y reciente', d: 'Sin tierra ni tejido muerto',
            say: 'En cambio, la herida limpia es superficial, reciente, y sin ninguno de esos elementos contaminantes. Piensa por ejemplo en un corte limpio con un cuchillo de cocina, recién ocurrido.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Profilaxis antitetánica',
      title: 'Vacuna, inmunoglobulina, o ambas',
      nodes: [
        { id: 'ini', col: 0, row: 2, k: 'start', t: 'Herida en urgencia', s: '¿Cuántas dosis previas tiene?' },
        { id: 'com', col: 1, row: 0, k: 'q', t: 'Esquema completo', s: 'Tres dosis o más' },
        { id: 'inc', col: 1, row: 3, k: 'q', t: 'Incompleto o desconocido', s: 'Menos de tres dosis' },
        { id: 'cl1', col: 2, row: 0, k: 'good', t: 'Limpia: vacuna si pasaron 10 años', s: 'Nunca inmunoglobulina' },
        { id: 'su1', col: 2, row: 1, k: 'good', t: 'Sucia: vacuna si pasaron 5 años', s: 'Nunca inmunoglobulina' },
        { id: 'cl2', col: 2, row: 3, k: 'risk', t: 'Limpia: vacuna siempre', s: 'Sin inmunoglobulina' },
        { id: 'su2', col: 2, row: 4, k: 'alert', t: 'Sucia: vacuna e inmunoglobulina', s: 'Juntas, en sitios distintos' },
      ],
      edges: [
        { from: 'ini', to: 'com' }, { from: 'ini', to: 'inc' },
        { from: 'com', to: 'cl1' }, { from: 'com', to: 'su1' },
        { from: 'inc', to: 'cl2' }, { from: 'inc', to: 'su2' },
      ],
      steps: [
        { show: ['ini'], note: 'Dos preguntas deciden todo',
          say: 'Toda la profilaxis antitetánica se decide con dos preguntas: cuántas dosis de vacuna tiene el paciente, y si la herida es limpia o tetanígena.' },
        { show: ['com'], note: 'Con memoria inmunológica ya formada',
          say: 'Si el esquema está completo, con tres dosis o más, el paciente ya tiene memoria inmunológica.' },
        { show: ['cl1', 'su1'], note: 'La inmunoglobulina casi nunca aplica aquí',
          say: 'Con herida limpia, solo necesita un refuerzo si pasaron más de diez años. Con herida sucia, el corte baja a cinco años. Y en ninguno de los dos casos necesita inmunoglobulina, porque su memoria responde sola.' },
        { show: ['inc'], note: 'Aquí está la pregunta que más se repite',
          say: 'Pero si el esquema es incompleto, con menos de tres dosis, o simplemente no lo sabes, el paciente no tiene esa memoria protectora.' },
        { show: ['cl2'], note: 'Solo vacuna, para iniciar el esquema',
          say: 'Con herida limpia, se da vacuna siempre, para partir o completar el esquema.' },
        { show: ['su2'], note: 'La combinación que se pregunta siempre',
          say: 'Y con herida sucia, aquí está la combinación clave: vacuna e inmunoglobulina juntas, en dos sitios distintos del cuerpo, y con jeringas distintas. La vacuna genera la protección a largo plazo, y la inmunoglobulina, doscientas cincuenta unidades por vía intramuscular, cubre de inmediato mientras esa protección todavía no aparece. Esta es la pareja que el examen pregunta una y otra vez.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Mordeduras',
      title: 'Perro, gato y humano: no es lo mismo',
      cards: [
        { title: 'Quién muerde qué', tag: 'Distintos gérmenes', kind: 'normal', items: [
          { t: 'Gato: colmillos finos', d: 'Inoculan Pasteurella muy profundo',
            say: 'Las mordeduras cambian según quién muerde, y eso llega a tener hasta la mitad de riesgo de infección de una a otra. El gato tiene colmillos finos que actúan como agujas, e inoculan la Pasteurella muy profundo, en tendones y hueso: es la que más se infecta de las tres.' },
          { t: 'Perro: desgarro y aplastamiento', d: 'Más daño de tejido, menos infección',
            say: 'El perro produce más desgarro y aplastamiento del tejido, con gérmenes distintos, pero se infecta un poco menos que la del gato, porque sus colmillos no penetran tan profundo.' },
          { t: 'Humana: la más agresiva', d: 'Flora oral con Eikenella',
            say: 'Y la mordedura humana es la más agresiva de todas, por su flora oral rica en Eikenella y anaerobios, sobre todo cuando es en la mano, con el puño cerrado contra un diente.' },
        ] },
        { title: 'El mismo tratamiento para todas', tag: 'Regla de cierre', kind: 'key', items: [
          { t: 'Lavar con suero a presión', d: 'Es lo que más baja la carga bacteriana',
            say: 'Pero el manejo inicial es el mismo para las tres: irrigar con suero fisiológico a presión, que es lo que más reduce la carga bacteriana.' },
          { t: 'No suturar de entrada', d: 'Deja cicatrizar por segunda intención',
            say: 'Y la regla que más se pregunta: no suturas una mordedura de entrada. Se deja cicatrizar por segunda intención, o se cierra diferido a las cuarenta y ocho horas, porque cerrarla de inmediato atrapa la infección adentro.' },
          { t: 'Amoxicilina con ácido clavulánico', d: 'El antibiótico de elección',
            say: 'El antibiótico de elección para las tres es amoxicilina con ácido clavulánico, porque cubre bien la Pasteurella y la Eikenella.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Casos especiales',
      title: 'La excepción facial y la rabia',
      cards: [
        { title: 'Mordedura en la cara', tag: 'La única excepción', kind: 'alert', items: [
          { t: 'Sí se puede suturar', d: 'Solo por motivo estético',
            say: 'Dijimos que la mordedura no se sutura, pero hay una excepción: la herida facial extensa, donde el resultado estético importa mucho.' },
          { t: 'Lavado masivo primero', d: 'Y cobertura antibiótica estricta',
            say: 'Ahí se puede cerrar en forma laxa, pero solo después de un lavado quirúrgico masivo, y con cobertura antibiótica estricta desde el inicio.' },
        ] },
        { title: 'Profilaxis antirrábica', tag: 'Depende del animal', kind: 'key', items: [
          { t: 'Perro observable diez días', d: 'Se espera antes de vacunar',
            say: 'Y sobre la rabia: si el perro que muerde se puede observar por diez días y se mantiene sano, no necesitas vacunar.' },
          { t: 'Animal no ubicable o silvestre', d: 'Vacunas de inmediato, sin esperar',
            say: 'Pero si es un animal silvestre, un murciélago, o simplemente no lo puedes ubicar para observarlo, vacunas de inmediato, sin esperar ningún plazo.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora armemos el árbol completo, desde la herida hasta la decisión final.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Vacunación previa y tipo de herida',
      head: ['Vacunación previa', 'Herida limpia', 'Herida sucia'],
      rows: [
        { cells: ['Incierta o menos de 3 dosis', 'Solo vacuna', 'Vacuna + inmunoglobulina'],
          say: 'Repasemos en la tabla. Con vacunación incierta o menos de tres dosis: en herida limpia, solo vacuna; en herida sucia, vacuna e inmunoglobulina juntas.' },
        { cells: ['3 dosis, última hace menos de 5 años', 'Nada', 'Nada'],
          say: 'Con esquema completo y la última dosis hace menos de cinco años: no necesita nada, en ninguna de las dos heridas.' },
        { cells: ['3 dosis, última hace 5 a 10 años', 'Nada', 'Refuerzo con vacuna'],
          say: 'Entre cinco y diez años desde la última dosis: en herida limpia, nada; en herida sucia, un refuerzo de vacuna.' },
        { cells: ['3 dosis, última hace más de 10 años', 'Refuerzo con vacuna', 'Refuerzo con vacuna'],
          say: 'Y con más de diez años desde la última dosis: refuerzo de vacuna en ambos tipos de herida. En estos tres últimos casos nunca hay inmunoglobulina, porque el paciente ya tiene memoria inmunológica.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 58 años sufre una herida cortante de 4 centímetros en la pierna izquierda con una lata oxidada, visiblemente sucia con tierra. Refiere esquema de vacunación al día, con la última dosis de refuerzo hace 7 años.',
      question: '¿Cuál es la indicación correcta respecto a la profilaxis antitetánica?',
      options: [
        { letter: 'A', text: 'No requiere ninguna intervención porque la última dosis fue hace menos de 10 años' },
        { letter: 'B', text: 'Administrar únicamente una dosis de refuerzo de vacuna antitetánica' },
        { letter: 'C', text: 'Administrar únicamente inmunoglobulina antitetánica' },
        { letter: 'D', text: 'Administrar vacuna e inmunoglobulina antitetánica simultáneamente' },
        { letter: 'E', text: 'Indicar penicilina benzatina en lugar de profilaxis antitetánica' },
      ],
      correct: 'B',
      explanation: 'Con esquema completo previo y herida sucia, el corte para el refuerzo es de 5 años, no de 10. Como pasaron 7 años, corresponde una dosis de refuerzo de vacuna. No requiere inmunoglobulina, porque conserva memoria inmunológica que responde con el toxoide.',
      say: {
        stem: 'Vamos al caso. Mujer de cincuenta y ocho años sufre una herida cortante de cuatro centímetros en la pierna izquierda con una lata oxidada, visiblemente sucia con tierra. Cuenta que su esquema de vacunación está al día, y que su última dosis de refuerzo fue hace siete años.',
        question: '¿Cuál es la indicación correcta respecto a la profilaxis antitetánica?',
        options: 'Las opciones: no hacer nada porque fue hace menos de diez años, dar solo un refuerzo de vacuna, dar solo inmunoglobulina, dar vacuna e inmunoglobulina juntas, o indicar penicilina benzatina en su lugar. Piénsalo.',
        answer: 'La respuesta es la B. Aquí está la trampa: el corte de diez años es para la herida limpia, pero esta es una herida sucia, y ahí el corte baja a cinco años. Como pasaron siete, corresponde el refuerzo. Y no necesita inmunoglobulina, porque su esquema previo completo ya le dio memoria inmunológica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 93',
      stem: 'Niño de 7 años es mordido por un perro callejero en el brazo derecho.',
      question: 'Además del manejo de la herida, ¿cuál es la conducta más adecuada respecto a la profilaxis de la rabia?',
      options: [
        { letter: 'A', text: 'Observar al niño por 10 días' },
        { letter: 'B', text: 'Vacunar al niño solo si el perro presenta síntomas' },
        { letter: 'C', text: 'Administrar la vacuna antirrábica al niño' },
        { letter: 'D', text: 'Vacunar al niño solo si el perro muere' },
        { letter: 'E', text: 'Administrar inmunoglobulina antirrábica al niño' },
      ],
      correct: 'C',
      explanation: 'La normativa vigente indica vacunar de inmediato cuando el animal agresor no es observable, como ocurre con un perro callejero, independiente de si hubo o no provocación. La observación por 10 días se reserva para animales identificables y con dueño conocido.',
      say: {
        stem: 'Y ahora una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Niño de siete años es mordido por un perro callejero en el brazo derecho.',
        question: 'Además del manejo de la herida, la pregunta es cuál es la conducta más adecuada respecto a la profilaxis de la rabia.',
        options: 'Las opciones: observarlo por diez días, vacunarlo solo si el perro tiene síntomas, darle la vacuna antirrábica, vacunarlo solo si el perro muere, o darle inmunoglobulina antirrábica. Piénsalo.',
        answer: 'La respuesta es la C, vacunarlo ahora. La observación de diez días solo sirve cuando el animal es identificable y se le puede seguir. Un perro callejero no es observable, así que la conducta es vacunar de inmediato, sin esperar nada del animal.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Profilaxis antitetánica', tag: 'Dos preguntas deciden todo', kind: 'key', items: [
          { t: 'Dosis previas y tipo de herida', d: 'Esas dos variables lo definen',
            say: 'Cerremos con las reglas de oro. Todo se decide con dos preguntas: cuántas dosis previas tiene, y si la herida es limpia o sucia.' },
          { t: 'Inmunoglobulina solo si es incompleto', d: 'Y la herida es sucia',
            say: 'La inmunoglobulina solo entra si el esquema es incompleto y además la herida es sucia. Con esquema completo, nunca la necesitas.' },
        ] },
        { title: 'Mordeduras', tag: 'No se suturan', kind: 'alert', items: [
          { t: 'Lavado a presión, sin sutura', d: 'Amoxicilina con ácido clavulánico',
            say: 'Y en las mordeduras: lavado a presión, sin suturar de entrada, y amoxicilina con ácido clavulánico como antibiótico de elección.' },
          { t: 'Perro no observable: vacunar ya', d: 'No esperes al animal',
            say: 'Si te llevas una sola idea de hoy: la herida sucia y el esquema incompleto son los que más piden inmunoglobulina, y un animal que no puedes observar se vacuna de inmediato. Con esto cerramos cirugía completa. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Herida traumática: vacuna, inmunoglobulina, o ambas',
    root: N('start', 'Herida en urgencia', '¿Cuántas dosis previas tiene?',
      'Paciente con una herida traumática que llega a urgencia. Toda la decisión de profilaxis se arma con dos preguntas: cuántas dosis de vacuna tiene, y qué tan sucia es la herida.',
      ['', N('q', '¿El esquema de vacunación está completo?', 'Tres dosis o más, o menos',
        'Con esquema completo ya hay memoria inmunológica; sin él, no.',
        ['Completo', N('q', '¿La herida es limpia o sucia?', 'Cambia solo el plazo del refuerzo',
          'Con memoria inmunológica ya formada, la inmunoglobulina prácticamente nunca se necesita.',
          ['Limpia', N('ok', 'Refuerzo solo si pasaron 10 años', 'Sin inmunoglobulina',
            'Herida limpia con esquema completo: solo se refuerza si la última dosis fue hace más de diez años, y nunca lleva inmunoglobulina.')],
          ['Sucia', N('ok', 'Refuerzo solo si pasaron 5 años', 'Sin inmunoglobulina',
            'Herida sucia con esquema completo: el corte para el refuerzo baja a cinco años, y tampoco lleva inmunoglobulina, porque la memoria inmunológica responde sola.')])],
        ['Incompleto o desconocido', N('q', '¿La herida es limpia o sucia?', 'Aquí sí puede entrar la inmunoglobulina',
          'Sin memoria inmunológica previa, la herida sucia obliga a sumar inmunoglobulina.',
          ['Limpia', N('do', 'Solo vacuna', 'Iniciar o completar el esquema',
            'Herida limpia con esquema incompleto: se da vacuna para iniciar o completar el esquema, sin inmunoglobulina.')],
          ['Sucia', N('alert', 'Vacuna e inmunoglobulina juntas', 'En sitios distintos del cuerpo',
            'Herida sucia con esquema incompleto o desconocido: se administran vacuna e inmunoglobulina a la vez, en dos sitios distintos, y esta es la combinación que más se pregunta.')])])]),
  },
};
