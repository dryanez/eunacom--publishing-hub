// Clase 18.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-02',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Los hitos que tienes que saber de memoria, y cuándo preocuparte',
      say: 'Bienvenido. Hoy vemos desarrollo psicomotor: los hitos madurativos y las dos herramientas que se usan en Chile para tamizarlo, la EEDP y el TEPSI. Fíjate que este tema tiene una lógica simple, aunque parezca mucha memoria: hay una edad esperada para cada logro, y hay una edad límite, más allá de la cual ya es una bandera roja. Si ordenas así la información, el examen se vuelve mucho más fácil. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Hitos madurativos',
      title: 'El camino esperado, mes a mes',
      nodes: [
        { id: 'm3', col: 0, row: 2, k: 'start', t: '3 meses', s: 'Sostén cefálico, sonrisa social' },
        { id: 'm6', col: 1, row: 1, k: 'cause', t: '6 meses', s: 'Se sienta con apoyo, transfiere objetos' },
        { id: 'm9', col: 2, row: 2, k: 'cause', t: '8 a 9 meses', s: 'Se sienta solo, pinza inferior' },
        { id: 'm12', col: 3, row: 1, k: 'mech', t: '12 meses', s: 'Bipedestación, una o dos palabras' },
        { id: 'm18', col: 4, row: 0, k: 'risk', t: '18 meses', s: 'Marcha independiente, señala para pedir' },
        { id: 'm24', col: 4, row: 3, k: 'effect', t: '24 meses', s: 'Corre, frases de dos palabras' },
      ],
      edges: [
        { from: 'm3', to: 'm6' }, { from: 'm6', to: 'm9' }, { from: 'm9', to: 'm12' },
        { from: 'm12', to: 'm18' }, { from: 'm18', to: 'm24' },
      ],
      steps: [
        { show: ['m3'], note: 'La cabeza firme, la primera sonrisa',
          say: 'Vamos con la línea de tiempo. A los tres meses, el lactante ya sostiene la cabeza con firmeza, y aparece la sonrisa social: te sonríe porque te reconoce, no por reflejo.' },
        { show: ['m6'], note: 'Se sienta con apoyo, pasa objetos de mano en mano',
          say: 'A los seis meses se sienta con apoyo, en trípode, y ya es capaz de pasar un objeto de una mano a la otra.' },
        { show: ['m9'], note: 'Ya no necesita apoyo para sentarse',
          say: 'Entre los ocho y los nueve meses, se sienta solo, sin ayuda, y toma las cosas con una pinza todavía gruesa, entre el dedo índice y el resto de la mano.' },
        { show: ['m12'], note: 'De pie, y ya dice algo con sentido',
          say: 'Al año, se pone de pie con apoyo o incluso da sus primeros pasos, y dice una o dos palabras con sentido, como mamá o agua.' },
        { show: ['m18'], note: 'El límite máximo para caminar solo',
          say: 'A los dieciocho meses camina solo, de forma fluida, y señala con el dedo para pedir algo. Guarda este número, porque es el límite máximo para la marcha independiente, y lo vamos a usar como bandera roja.' },
        { show: ['m24'], note: 'Corre y arma frases cortas',
          say: 'Y a los veinticuatro meses ya corre, sube y baja escaleras solo, y arma frases de dos palabras, como quiero agua. Con esta línea de tiempo en la cabeza, ahora podemos hablar de cómo se mide formalmente.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Instrumentos de tamizaje',
      title: 'EEDP y TEPSI: quién, cuándo y qué mide',
      cards: [
        { title: 'EEDP', tag: 'Del nacimiento a los 24 meses', kind: 'key', items: [
          { t: 'Se aplica hasta los 24 meses', d: 'Obligatoria a los 8 y a los 18 meses',
            say: 'Empecemos por la EEDP, la Escala de Evaluación del Desarrollo Psicomotor. Se usa desde que nace hasta los veinticuatro meses, pero la aplicación obligatoria en el control de salud es a los ocho y a los dieciocho meses.' },
        ] },
        { title: 'TEPSI', tag: 'De los 2 a los 5 años', kind: 'key', items: [
          { t: 'Se aplica de 2 a 5', d: 'Obligatoria a los 3 años',
            say: 'El TEPSI toma la posta entre los dos y los cinco años, y su aplicación universal en el control de salud es a los tres años cumplidos.' },
        ] },
        { title: 'Los puntajes de corte', tag: 'Se preguntan siempre', kind: 'alert', items: [
          { t: 'Ochenta y cinco o más: normal', d: 'Sigue su calendario habitual',
            say: 'Y los puntajes de corte, que se preguntan siempre. Ochenta y cinco puntos o más es normal.' },
          { t: 'Setenta a ochenta y cuatro: riesgo', d: 'Va a sala de estimulación',
            say: 'Entre setenta y ochenta y cuatro es riesgo: el niño entra a la sala de estimulación de tu centro de salud, y se reevalúa.' },
          { t: 'Menos de setenta: retraso', d: 'Evaluación médica y derivación',
            say: 'Y bajo setenta puntos ya es retraso: ahí necesitas una evaluación médica inmediata y derivar a especialista, sin esperar el próximo control.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Banderas rojas',
      title: 'Cuándo no puedes esperar al próximo control',
      nodes: [
        { id: 'soc', col: 0, row: 0, k: 'risk', t: 'Sin sonrisa social, 3 meses', s: 'Falta el primer hito social' },
        { id: 'cef', col: 0, row: 1, k: 'risk', t: 'Sin sostén cefálico, 4 meses', s: 'Hipotonía axial' },
        { id: 'sie', col: 0, row: 2, k: 'risk', t: 'No se sienta a los 9', s: 'Retraso motor grueso' },
        { id: 'mar', col: 0, row: 3, k: 'alert', t: 'No camina a los 18 meses', s: 'El límite máximo absoluto' },
        { id: 'reg', col: 0, row: 4, k: 'trap', t: 'Pierde una habilidad ya lograda', s: 'Regresión: alarma máxima' },
        { id: 'eva', col: 2, row: 2, k: 'good', t: 'Evaluación inmediata', s: 'No esperar el próximo control' },
      ],
      edges: [
        { from: 'soc', to: 'eva' }, { from: 'cef', to: 'eva' }, { from: 'sie', to: 'eva' },
        { from: 'mar', to: 'eva' }, { from: 'reg', to: 'eva', label: 'siempre' },
      ],
      steps: [
        { show: ['soc'], note: 'El primer hito social que falta',
          say: 'Ahora las banderas rojas, que son la otra cara de la línea de tiempo que vimos. Si a los tres meses no hay sonrisa social, ya es una alerta.' },
        { show: ['cef'], note: 'La cabeza debería sostenerse antes',
          say: 'Si a los cuatro meses no sostiene la cabeza, piensa en hipotonía axial.' },
        { show: ['sie'], note: 'El hito de los ocho o nueve meses, ausente',
          say: 'Si a los nueve meses no logra sentarse solo, hay un retraso motor grueso.' },
        { show: ['mar'], note: 'El límite que más se pregunta',
          say: 'Y la más preguntada: si a los dieciocho meses el niño todavía no camina de forma independiente, eso nunca es una variante normal. Es la edad límite absoluta.' },
        { show: ['reg'], note: 'Perder algo que ya se sabía hacer',
          say: 'Pero la alarma más grave de todas es la regresión: que el niño pierda una habilidad que ya tenía. Eso siempre te tiene que hacer pensar en algo neurológico serio, nunca en una variante normal.' },
        { show: ['eva'], note: 'Examen físico y neurológico, ya',
          say: 'Cualquiera de estos signos te lleva al mismo lugar: examen físico y neurológico completo, sin esperar al próximo control programado.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Un detalle que se pregunta',
      title: 'El prematuro se evalúa con edad corregida',
      cards: [
        { title: 'Edad corregida', tag: 'Hasta los 2 años', kind: 'normal', items: [
          { t: 'Se ajusta por semanas de prematurez', d: 'Restando desde las 40 semanas',
            say: 'Un detalle que suele aparecer en el examen: al lactante prematuro no lo evalúas con su edad cronológica, sino con su edad corregida, que se calcula descontando las semanas que le faltaron para llegar a las cuarenta.' },
          { t: 'Se usa hasta los 2 años', d: 'Después ya no hace diferencia',
            say: 'Este ajuste se mantiene hasta los dos años. Un prematuro que parece atrasado con su edad de nacimiento puede estar perfectamente normal si lo evalúas con su edad corregida.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un árbol de decisión, tal como se razona en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en desarrollo psicomotor',
      head: ['Situación', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['EEDP o TEPSI entre 70 y 84 puntos', 'Sala de estimulación y reevaluar', 'Derivar de inmediato a especialista'],
          say: 'Repasemos las trampas. Un puntaje entre setenta y ochenta y cuatro es riesgo, y va a sala de estimulación. El error es saltarse ese paso y derivar de inmediato a especialista.' },
        { cells: ['No camina a los 18 meses', 'Examen neurológico y derivar', 'Esperar hasta los 24 meses'],
          say: 'No caminar a los dieciocho meses siempre se estudia. El error clásico es decirle a la familia que espere hasta los dos años.' },
        { cells: ['Prematuro con hitos “atrasados”', 'Calcular la edad corregida', 'Compararlo con su edad cronológica'],
          say: 'En el prematuro, el error es compararlo con su edad de nacimiento en vez de calcular la edad corregida.' },
        { cells: ['Regresión de una habilidad', 'Estudio neurológico urgente', 'Observar y controlar en un mes'],
          say: 'Y ante una regresión, el error es tranquilizarse y controlar en un mes. La regresión nunca espera.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 10 meses, nacido a las 36 semanas de gestación, es traído a su control de salud pendiente de los 8 meses. Al examen no logra sentarse sin apoyo, no transfiere objetos entre sus manos, y solo emite sonidos guturales aislados. Se le aplica la EEDP y obtiene un puntaje de 65 puntos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Reforzar pautas de estimulación y controlar según calendario habitual' },
        { letter: 'B', text: 'Derivar a sala de estimulación y reevaluar con EEDP en 60 días' },
        { letter: 'C', text: 'Realizar examen neurológico y derivar a pediatría o neurología infantil' },
        { letter: 'D', text: 'Calcular su edad corregida por la prematurez y tranquilizar a la familia' },
        { letter: 'E', text: 'Indicar control telefónico en 6 meses' },
      ],
      correct: 'C',
      explanation: 'Un puntaje de 65 puntos en la EEDP corresponde a retraso del desarrollo psicomotor (< 70 puntos), que exige evaluación médica y derivación inmediatas. La prematurez de 36 semanas es leve y la edad corregida no alcanza a explicar un retraso de esta magnitud a los 10 meses.',
      say: {
        stem: 'Vamos con un caso. Lactante de diez meses, nacido a las treinta y seis semanas, que llega a su control de los ocho meses, pendiente. No se sienta sin apoyo, no transfiere objetos entre sus manos, y solo tiene sonidos guturales aislados. Al aplicarle la EEDP, saca sesenta y cinco puntos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: reforzar estimulación y control habitual, derivar a sala de estimulación, hacer examen neurológico y derivar a especialista, calcular edad corregida y tranquilizar, o control telefónico en seis meses. Piénsalo.',
        answer: 'Es la C. Sesenta y cinco puntos está bajo setenta, así que esto es retraso, no riesgo, y el retraso exige evaluación médica y derivación ya, no sala de estimulación. Y ojo con la trampa de la prematurez: nació a las treinta y seis semanas, una prematurez leve, que no alcanza a explicar un atraso tan marcado a los diez meses. No lo puedes justificar con edad corregida.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 46',
      stem: 'Una madre consulta por la evaluación del desarrollo de su hijo de 1 año y 3 meses. El niño camina solo, dice 3 palabras con significado, y construye una torre de 3 cubos.',
      question: '¿Cómo se interpreta su desarrollo psicomotor?',
      options: [
        { letter: 'A', text: 'Retraso en el lenguaje' },
        { letter: 'B', text: 'Retraso en el área motora' },
        { letter: 'C', text: 'Desarrollo normal para su edad' },
        { letter: 'D', text: 'Retraso global del desarrollo' },
        { letter: 'E', text: 'Requiere evaluación neurológica urgente' },
      ],
      correct: 'C',
      explanation: 'A los 15 meses, la marcha independiente (esperada a los 12 meses), 3 a 5 palabras y una torre de 2 a 3 cubos son hitos alcanzados o incluso adelantados. Es un control de salud infantil de rutina, sin ninguna alarma.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil veinticinco. Una madre consulta por el desarrollo de su hijo, de un año y tres meses. El niño camina solo, dice tres palabras con significado, y arma una torre de tres cubos.',
        question: '¿Cómo se interpreta su desarrollo psicomotor?',
        options: 'Las opciones: retraso del lenguaje, retraso motor, desarrollo normal, retraso global, o que necesita evaluación neurológica urgente.',
        answer: 'Es la C. Repasa los hitos que ya sabes: la marcha independiente se espera a los doce meses, y este niño ya camina a los quince. Decir tres palabras también es normal para su edad, y armar una torre de tres cubos está incluso un poco adelantado. No hay ningún hito ausente: es un control de salud de rutina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 128',
      stem: 'Un lactante de 4 meses, nacido prematuro a las 34 semanas, levanta la cabeza y lleva las manos al centro, pero no levanta el tronco apoyado en los antebrazos ni transfiere objetos de una mano a otra. Sonríe al interactuar, pero no ríe a carcajadas, y sigue con la mirada los objetos. Se alimenta con lactancia materna exclusiva.',
      question: '¿Cuál es su diagnóstico respecto al desarrollo psicomotor?',
      options: [
        { letter: 'A', text: 'Retraso motor fino' },
        { letter: 'B', text: 'Retraso motor grueso' },
        { letter: 'C', text: 'Retraso del desarrollo socioemocional' },
        { letter: 'D', text: 'Retraso global del desarrollo' },
        { letter: 'E', text: 'Desarrollo psicomotor normal' },
      ],
      correct: 'E',
      explanation: 'Al nacer a las 34 semanas, la edad corregida se calcula descontando 6 semanas desde las 40: este lactante de 4 meses tiene una edad corregida de 2,5 meses. Cumple exactamente los hitos de los 2 meses (sostén cefálico, manos al centro, sonrisa social) y todavía no alcanza los de los 4 meses, lo que es normal.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Lactante de cuatro meses, nacido prematuro a las treinta y cuatro semanas. Levanta la cabeza y lleva las manos al centro, pero no levanta el tronco apoyado en los antebrazos ni pasa objetos entre sus manos. Sonríe, pero no ríe a carcajadas, y sigue con la mirada.',
        question: '¿Cuál es su diagnóstico respecto al desarrollo psicomotor?',
        options: 'Las opciones: retraso motor fino, retraso motor grueso, retraso socioemocional, retraso global, o desarrollo normal. Piénsalo.',
        answer: 'Es la E, normal. Usa la edad corregida: nació con seis semanas de adelanto, así que su edad corregida es de dos meses y medio. Y lo que hace calza exactamente con los dos meses: sostén cefálico, manos al centro, sonrisa social. Si lo juzgaras por su edad de nacimiento, caerías en la trampa de decir que está atrasado.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Los instrumentos', tag: 'EEDP y TEPSI', kind: 'key', items: [
          { t: 'EEDP: 8 y 18 meses', d: 'TEPSI: 3 años',
            say: 'Cerremos con las reglas de oro. La EEDP se aplica de forma obligatoria a los ocho y a los dieciocho meses; el TEPSI, a los tres años.' },
          { t: 'Ochenta y cinco o más', d: 'Bajo setenta es retraso',
            say: 'Ochenta y cinco puntos o más es normal, y bajo setenta ya es retraso, con derivación inmediata.' },
        ] },
        { title: 'La bandera roja principal', tag: 'La marcha', kind: 'alert', items: [
          { t: 'Dieciocho meses: el límite', d: 'Nunca es una variante normal',
            say: 'No caminar a los dieciocho meses nunca es una variante normal: es el límite absoluto.' },
          { t: 'La regresión, siempre alarma', d: 'Perder lo ya logrado',
            say: 'Y la regresión, perder una habilidad ya lograda, siempre es alarma máxima.' },
        ] },
        { title: 'El detalle del prematuro', tag: 'Edad corregida', kind: 'normal', items: [
          { t: 'Se corrige hasta los 2 años', d: 'Restando las semanas que faltaron',
            say: 'Y no olvides al prematuro: se evalúa con edad corregida hasta los dos años. Si te llevas una sola idea de hoy: hay una edad esperada y una edad límite para cada hito, y entre ambas está tu margen de tranquilidad. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Desarrollo psicomotor: hito esperado versus bandera roja',
    root: N('start', 'Lactante en control de salud', 'Evaluación del desarrollo psicomotor',
      'Tienes un lactante en control y necesitas decidir si su desarrollo va bien. El primer paso es siempre el mismo: corregir la edad si nació prematuro.',
      ['', N('q', '¿Nació prematuro?', 'Antes de las 37 semanas',
        'Pregúntate si nació antes de las treinta y siete semanas.',
        ['Sí, y tiene menos de 2 años', N('do', 'Calcular edad corregida', 'Descontar las semanas que faltaron',
          'Descuenta desde las cuarenta semanas las que le faltaron al nacer, y evalúa los hitos con esa edad corregida, no con la cronológica.')],
        ['No, o ya tiene más de 2 años', N('q', '¿Cumple los hitos esperados?', 'Según su edad',
          'Compara lo que hace con lo esperado para su edad, cronológica o corregida.',
          ['Sí, todos presentes', N('ok', 'Desarrollo normal', 'Control de salud habitual',
            'Si cumple los hitos esperados, el desarrollo es normal: sigue su calendario de controles habitual.')],
          ['Falta un hito, sin regresión', N('q', '¿Está dentro de la EEDP o el TEPSI?', 'Según la edad',
            'Si falta un hito, aplica el instrumento correspondiente a su edad, la EEDP o el TEPSI, y mira el puntaje.',
            ['Setenta a ochenta y cuatro', N('refer', 'Riesgo', 'Sala de estimulación y reevaluar',
              'Riesgo: derivas a sala de estimulación y reevalúas en el plazo que indica la norma.')],
            ['Menos de setenta', N('alert', 'Retraso', 'Evaluación médica y derivación',
              'Retraso: evaluación médica inmediata y derivación a pediatría o neurología infantil.')])],
          ['Perdió una habilidad ya lograda', N('alert', 'Regresión', 'Estudio neurológico urgente',
            'La regresión nunca espera al próximo control: siempre exige estudio neurológico urgente, sin importar la edad.')])])]),
  },
};
