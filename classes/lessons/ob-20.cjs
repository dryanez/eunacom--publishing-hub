// Clase 19.20 — guion docente reescrito (voz "tú", texto en pantalla corto; ver gastro-01.cjs y gastro-02.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia_bloque_4.cjs (ob-20).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-20',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'A quién le das la vacuna anti-D, y a quién ya no le sirve',
      say: 'Bienvenido. Hoy cerramos el bloque con la aloinmunización Rh: la madre Rh negativa y el hijo Rh positivo. Es un tema de alta rentabilidad, y se resuelve casi todo con dos preguntas: si tu paciente está o no sensibilizada, y si el examen sale antes o después del parto. Vas a terminar sabiendo exactamente cuándo se da la inmunoglobulina anti-D y cuándo es completamente inútil. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: '¿Por qué se sensibiliza una madre Rh negativa?',
      nodes: [
        { id: 'rh', col: 0, row: 0, k: 'cause', t: 'Madre Rh negativa', s: 'Sin el antígeno D' },
        { id: 'hem', col: 1, row: 0, k: 'mech', t: 'Sangre fetal Rh positiva', s: 'Cruza al parto o al aborto' },
        { id: 'igg', col: 2, row: 0, k: 'risk', t: 'Anticuerpos de memoria', s: 'De tipo inmunoglobulina G' },
        { id: 'sig', col: 3, row: 0, k: 'alert', t: 'Siguiente embarazo', s: 'Cruzan la placenta y hemolizan' },
      ],
      edges: [
        { from: 'rh', to: 'hem' }, { from: 'hem', to: 'igg' }, { from: 'igg', to: 'sig' },
      ],
      steps: [
        { show: ['rh'], note: 'Punto de partida: no tiene el antígeno D',
          say: 'Empecemos por el mecanismo. Tu paciente es Rh negativa: sus glóbulos rojos no tienen el antígeno D. El padre del niño es Rh positivo, y el feto hereda ese antígeno.' },
        { show: ['hem'], note: 'En el parto, un aborto o un procedimiento invasivo',
          say: 'Durante el parto, un aborto, o cualquier procedimiento invasivo, un poco de sangre fetal Rh positiva pasa a la circulación de tu paciente.' },
        { show: ['igg'], note: 'La primera vez no alcanza a dañar',
          say: 'La primera vez, el sistema inmune de tu paciente forma anticuerpos de memoria, de tipo inmunoglobulina G. En ese primer embarazo no alcanzan a hacer daño.' },
        { show: ['sig'], note: 'Aquí está el peligro real',
          say: 'Pero en un embarazo siguiente, con otro feto Rh positivo, esos anticuerpos ya formados cruzan la placenta libremente y destruyen los glóbulos rojos fetales. Por eso toda la estrategia apunta a evitar que se formen la primera vez.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Coombs indirecto y Coombs directo',
      cards: [
        { title: 'Coombs indirecto', tag: 'En la madre', kind: 'key', items: [
          { t: 'Se mide en la madre', d: 'Busca anticuerpos anti-D libres',
            say: 'Y esta diferencia se pregunta seguido. El Coombs indirecto se hace en el suero de la madre: busca si ya tiene anticuerpos anti-D circulando. Lo pides a toda embarazada Rh negativa, en el primer control.' },
        ] },
        { title: 'Coombs directo', tag: 'En el recién nacido', kind: 'key', items: [
          { t: 'Se mide en el recién nacido', d: 'Busca anticuerpos ya pegados al glóbulo',
            say: 'El Coombs directo, en cambio, se hace en la sangre del cordón: busca anticuerpos que ya están pegados a los glóbulos rojos del niño. Si sale positivo, confirmas que el recién nacido tiene la enfermedad hemolítica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Profilaxis',
      title: 'A quién y cuándo le das la anti-D',
      cards: [
        { title: 'No sensibilizada', tag: 'Coombs indirecto negativo', kind: 'pharma', items: [
          { t: 'A las 28 semanas', d: 'Trescientos microgramos intramuscular',
            say: 'Si el Coombs indirecto sale negativo, tu paciente no está sensibilizada, y ahí es cuando das la inmunoglobulina anti-D: trescientos microgramos intramusculares a las veintiocho semanas.' },
          { t: 'De nuevo tras el parto', d: 'Antes de 72 horas, si el hijo es Rh positivo',
            say: 'Y una segunda dosis, dentro de las primeras setenta y dos horas después del parto, si el recién nacido resulta ser Rh positivo.' },
        ] },
        { title: 'Eventos que también la piden', tag: 'Dentro de setenta y dos horas', kind: 'criteria', items: [
          { t: 'Aborto, ectópico, trauma', d: 'O cualquier procedimiento invasivo',
            say: 'Y das la misma dosis después de un aborto, un embarazo ectópico, un traumatismo abdominal, o cualquier procedimiento invasivo como la amniocentesis. La regla es siempre la misma: dentro de las setenta y dos horas del evento.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Profilaxis',
      title: 'Cuándo la anti-D no sirve para nada',
      cards: [
        { title: 'Ya sensibilizada', tag: 'Coombs indirecto positivo', kind: 'alert', items: [
          { t: 'No la administres', d: 'Es completamente inútil',
            say: 'Y aquí está la trampa que más se pregunta. Si el Coombs indirecto ya sale positivo, tu paciente ya está sensibilizada, y la inmunoglobulina anti-D es completamente inútil: no revierte los anticuerpos que ya se formaron.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Sensibilizada',
      title: 'Cómo sigues a la madre ya sensibilizada',
      nodes: [
        { id: 'sen', col: 0, row: 1, k: 'start', t: 'Coombs indirecto positivo', s: 'Ya sensibilizada' },
        { id: 'tit', col: 1, row: 1, k: 'mech', t: 'Titular anticuerpos', s: 'Cada mes o cada dos semanas' },
        { id: 'cri', col: 2, row: 0, k: 'q', t: 'Título crítico', s: 'Uno en dieciséis a uno en treinta y dos' },
        { id: 'dop', col: 3, row: 0, k: 'mech', t: 'Doppler de arteria cerebral media', s: 'Busca anemia fetal' },
        { id: 'cor', col: 3, row: 2, k: 'alert', t: 'Cordocentesis y transfusión', s: 'Si la anemia es grave' },
      ],
      edges: [
        { from: 'sen', to: 'tit' }, { from: 'tit', to: 'cri' },
        { from: 'cri', to: 'dop', label: 'sobre el crítico' }, { from: 'dop', to: 'cor', label: 'anemia grave' },
      ],
      steps: [
        { show: ['sen'], note: 'Se define solo por el Coombs indirecto',
          say: 'Si tu paciente ya está sensibilizada, cambias por completo la estrategia: ya no sirve prevenir, ahora hay que vigilar al feto.' },
        { show: ['tit'], note: 'Se repite de forma periódica',
          say: 'Vigilas titulando los anticuerpos de forma periódica, cada mes al principio y luego cada dos semanas.' },
        { show: ['cri'], note: 'Bajo ese título, el riesgo es casi nulo',
          say: 'Existe un título crítico, entre uno en dieciséis y uno en treinta y dos. Por debajo de eso, el riesgo de anemia grave es casi nulo.' },
        { show: ['dop'], note: 'No invasivo, y muy sensible',
          say: 'Si el título supera ese umbral, pasas al Doppler de la arteria cerebral media. La anemia fetal hace que la sangre fluya más rápido, y eso lo detecta este examen sin pinchar al feto.' },
        { show: ['cor'], note: 'Diagnóstica y trata al mismo tiempo',
          say: 'Y si el Doppler muestra una anemia grave, confirmas con una cordocentesis, y en el mismo procedimiento transfundes glóbulos rojos directamente al feto.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos la profilaxis y el seguimiento en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cuándo sí y cuándo no',
      head: ['Situación', 'Coombs indirecto', 'Conducta'],
      rows: [
        { cells: ['Control a las 28 semanas', 'Negativo', 'Dar la anti-D preventiva'],
          say: 'Repasemos en una tabla. A las veintiocho semanas, con el Coombs negativo, das la anti-D preventiva.' },
        { cells: ['Postparto', 'Negativo, hijo Rh positivo', 'Segunda dosis antes de 72 horas'],
          say: 'Después del parto, si sigue negativo y el hijo es Rh positivo, va la segunda dosis, antes de setenta y dos horas.' },
        { cells: ['Aborto o procedimiento invasivo', 'Negativo', 'Dosis dentro de 72 horas'],
          say: 'Tras un aborto o un procedimiento invasivo, con el Coombs negativo, la dosis va dentro de las setenta y dos horas.' },
        { cells: ['Cualquier control', 'Positivo', 'Nunca dar anti-D; seguir con títulos y Doppler'],
          say: 'Y con el Coombs positivo, nunca des la anti-D. Ahí sigues con títulos de anticuerpos y Doppler de la arteria cerebral media.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Primigesta de 28 semanas, Rh negativa, con Coombs indirecto negativo en este control. Su pareja es Rh positiva.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar inmunoglobulina anti-D, trescientos microgramos intramuscular' },
        { letter: 'B', text: 'Iniciar titulación seriada de anticuerpos, porque ya está sensibilizada' },
        { letter: 'C', text: 'Solicitar Doppler de arteria cerebral media de inmediato' },
        { letter: 'D', text: 'No indicar nada hasta el parto' },
        { letter: 'E', text: 'Realizar cordocentesis diagnóstica' },
      ],
      correct: 'A',
      explanation: 'Rh negativa no sensibilizada, con Coombs indirecto negativo a las 28 semanas: corresponde la dosis antenatal de rutina de inmunoglobulina anti-D. La titulación, el Doppler y la cordocentesis son solo para la paciente ya sensibilizada.',
      say: {
        stem: 'Vamos con un caso. Una primigesta de veintiocho semanas, Rh negativa, tiene el Coombs indirecto negativo en este control. Su pareja es Rh positiva.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: dar la inmunoglobulina anti-D, iniciar titulación de anticuerpos porque ya estaría sensibilizada, pedir un Doppler de arteria cerebral media de inmediato, no indicar nada hasta el parto, o hacer una cordocentesis diagnóstica. Piénsalo.',
        answer: 'Es la A. Coombs indirecto negativo a las veintiocho semanas es justo el momento de la dosis antenatal de rutina. La B es la trampa: negativo significa que no está sensibilizada, todo lo contrario de lo que dice esa opción. El Doppler y la cordocentesis son para la paciente ya sensibilizada, y no dar nada la deja sin protección.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 74',
      stem: 'Primigesta de 13 semanas. Su determinación de grupo sanguíneo se informa como AB, Rh negativo, D-u positivo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar Doppler de arteria cerebral media fetal' },
        { letter: 'B', text: 'Solicitar Coombs indirecto a las 18 semanas' },
        { letter: 'C', text: 'Administrar Rhogam a las 28 semanas' },
        { letter: 'D', text: 'Determinar grupo y Rh del padre' },
        { letter: 'E', text: 'Mantener control habitual del embarazo' },
      ],
      correct: 'E',
      explanation: 'Un D-u positivo indica que la paciente en realidad expresa el antígeno D de forma débil, y se maneja como Rh positivo: no necesita Coombs seriado ni inmunoglobulina anti-D, sino el control habitual del embarazo.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de agosto de dos mil veintiuno. Una primigesta de trece semanas tiene su grupo sanguíneo informado como AB, Rh negativo, con D-u positivo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: pedir Doppler de arteria cerebral media, pedir Coombs indirecto a las dieciocho semanas, dar Rhogam a las veintiocho semanas, determinar el grupo y Rh del padre, o mantener el control habitual del embarazo. Piénsalo.',
        answer: 'Es la E. El detalle que decide todo es el D-u positivo: significa que en realidad esta paciente expresa el antígeno D, aunque de forma débil, y por eso se maneja como Rh positiva, sin necesidad de Coombs seriado ni de anti-D. Es un dato que no está en los libros clásicos, pero que el banco real sí pregunta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 129',
      stem: 'Recién nacido de 18 horas de vida con ictericia hasta los muslos. La bilirrubina resulta en 15,3 miligramos por decilitro, con fracción indirecta de 15. La madre es de grupo O, Rh positiva; el niño es de grupo B, Rh negativo.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Ictericia hemolítica por incompatibilidad de grupo clásico' },
        { letter: 'B', text: 'Ictericia hemolítica por incompatibilidad Rh' },
        { letter: 'C', text: 'Ictericia fisiológica' },
        { letter: 'D', text: 'Hepatitis neonatal' },
        { letter: 'E', text: 'Ictericia por lactancia materna' },
      ],
      correct: 'A',
      explanation: 'Solo una madre Rh negativa puede hemolizar a un hijo Rh positivo; aquí es al revés, así que la incompatibilidad Rh queda descartada. En cambio, una madre de grupo O puede hemolizar a un hijo de grupo A o B: es incompatibilidad de grupo clásico.',
      say: {
        stem: 'Y esta es del EUNACOM de diciembre de dos mil diecisiete. Un recién nacido de dieciocho horas de vida tiene ictericia hasta los muslos, con bilirrubina de quince coma tres, de predominio indirecto. La madre es de grupo O, Rh positiva; el niño es de grupo B, Rh negativo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: incompatibilidad de grupo clásico, incompatibilidad Rh, ictericia fisiológica, hepatitis neonatal, o ictericia por lactancia materna. Piénsalo.',
        answer: 'Es la A. Fíjate bien en los grupos: la incompatibilidad Rh solo existe si la madre es Rh negativa y el hijo Rh positivo, y aquí es exactamente al revés. Lo que sí puede hemolizar es la incompatibilidad de grupo clásico, porque una madre de grupo O forma anticuerpos contra los hijos de grupo A o B.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Profilaxis', tag: 'Solo si no está sensibilizada', kind: 'key', items: [
          { t: 'Coombs indirecto negativo', d: 'Anti-D a las 28 semanas y postparto',
            say: 'Cerremos con las reglas de oro. Con Coombs indirecto negativo, das la anti-D a las veintiocho semanas y otra vez tras el parto.' },
          { t: 'Coombs positivo: nunca anti-D', d: 'Ya está sensibilizada',
            say: 'Con el Coombs positivo, nunca des la anti-D: ya está sensibilizada, y no sirve de nada.' },
        ] },
        { title: 'Seguimiento', tag: 'De la sensibilizada', kind: 'alert', items: [
          { t: 'Títulos y Doppler de ACM', d: 'Cordocentesis si hay anemia grave',
            say: 'Y a la paciente sensibilizada la sigues con títulos de anticuerpos y Doppler de arteria cerebral media, con cordocentesis si la anemia es grave. Si te llevas una sola idea de hoy: el Coombs indirecto es el que decide todo, prevenir si es negativo, vigilar si es positivo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: buildPathway(),
};

function buildPathway() {
  const abortoNode = N('do', 'Anti-D dentro de 72 horas', 'Del evento sensibilizante',
    'Ante un aborto, un ectópico o un procedimiento invasivo, la misma dosis dentro de setenta y dos horas.');
  const antiDNode = N('do', 'Anti-D a las 28 semanas', 'Y de nuevo tras el parto',
    'Trescientos microgramos a las veintiocho semanas, y otra dosis tras el parto si el hijo es Rh positivo.',
    ['Aborto o trauma', abortoNode]);
  const noSensibilizadaNode = N('ok', 'No sensibilizada', 'Aquí sí sirve la anti-D',
    'No sensibilizada: aquí la inmunoglobulina anti-D previene el problema.',
    ['', antiDNode]);

  const dopplerNode = N('refer', 'Doppler de ACM', 'Y cordocentesis si hay anemia grave',
    'Si supera el título crítico, Doppler de arteria cerebral media, y cordocentesis con transfusión si la anemia es grave.');
  const titularNode = N('do', 'Titular anticuerpos', 'Cada mes o cada dos semanas',
    'Titulas los anticuerpos de forma periódica.',
    ['Sobre el título crítico', dopplerNode]);
  const sensibilizadaNode = N('alert', 'Ya sensibilizada', 'La anti-D ya no sirve',
    'Ya sensibilizada: la anti-D no tiene ningún efecto, ahora hay que vigilar al feto.',
    ['', titularNode]);

  const coombsNode = N('q', '¿Cómo sale el Coombs indirecto?', 'Negativo o positivo',
    'Todo depende de un solo resultado: ¿está o no sensibilizada?',
    ['Negativo', noSensibilizadaNode],
    ['Positivo', sensibilizadaNode]);

  return {
    title: 'Aloinmunización Rh: prevenir o vigilar',
    root: N('start', 'Embarazada Rh negativa', 'Primer control prenatal',
      'Tu paciente es Rh negativa. Antes de decidir nada, pides el Coombs indirecto.',
      ['', coombsNode]),
  };
}
