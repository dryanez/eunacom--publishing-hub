// Clase ped-08 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria_bloque_2.cjs (id "ped-08").

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-08',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cinco golpes, cinco compresiones, y una maniobra que nunca uses antes del año',
      say: 'Bienvenido. Cerramos el bloque respiratorio con el cuerpo extraño en la vía aérea, un tema que te van a preguntar de dos formas muy distintas: el niño que se está asfixiando ahora mismo, y el que llegó semanas después con una tos que no se explica. En los dos casos hay una maniobra exacta, y un detalle según la edad que se pregunta siempre. Vamos a eso.',
    },

    {
      type: 'points',
      kicker: 'Quién y con qué',
      title: 'A quién le pasa, y con qué se atora',
      cards: [
        { title: 'El niño típico', tag: 'Uno a tres años', kind: 'criteria', items: [
          { t: 'Explora todo con la boca', d: 'Y todavía no tiene molares',
            say: 'El cuadro típico es un niño de uno a tres años, justo la edad en la que explora el mundo metiéndoselo todo a la boca, y todavía no tiene molares para masticar bien.' },
        ] },
        { title: 'Lo que se atora', tag: 'Alto riesgo', kind: 'alert', items: [
          { t: 'Frutos secos y uvas', d: 'También trozos de salchicha',
            say: 'Lo que más se atora son los alimentos: maní, nueces, uvas enteras, trozos de salchicha. Casi siempre son alimentos, más que juguetes.' },
          { t: 'Va al bronquio derecho', d: 'Es más ancho y más vertical',
            say: 'Y por la anatomía, el objeto casi siempre termina en el bronquio derecho, que es más ancho, más vertical, y sigue casi en línea recta la tráquea.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Emergencia',
      title: '¿Tose con fuerza, o ya no puede?',
      nodes: [
        { id: 'atr', col: 0, row: 1, k: 'start', t: 'Niño se atora de golpe', s: 'Comiendo o jugando' },
        { id: 'tos', col: 1, row: 0, k: 'q', t: '¿Tose con fuerza y llora?', s: 'Obstrucción parcial' },
        { id: 'esp', col: 2, row: 0, k: 'good', t: 'Déjalo toser', s: 'No lo golpees ni lo toques' },
        { id: 'sil', col: 1, row: 2, k: 'risk', t: 'No tose, no llora', s: 'Obstrucción completa' },
        { id: 'men', col: 2, row: 1, k: 'alert', t: 'Menor de un año', s: 'Golpes y compresiones torácicas' },
        { id: 'may', col: 2, row: 2, k: 'alert', t: 'Mayor de un año', s: 'Maniobra de Heimlich' },
      ],
      edges: [
        { from: 'atr', to: 'tos' }, { from: 'tos', to: 'esp', label: 'sí' }, { from: 'tos', to: 'sil', label: 'no' },
        { from: 'sil', to: 'men' }, { from: 'sil', to: 'may' },
      ],
      steps: [
        { show: ['atr'], note: 'El momento en que hay que decidir rápido',
          say: 'Imagina al niño que se atora mientras come o juega. Lo primero que tienes que evaluar, en segundos, es si la obstrucción es parcial o completa.' },
        { show: ['tos', 'esp'], note: 'No interfieras con una tos que funciona',
          say: 'Si tose con fuerza y todavía llora, la obstrucción es parcial, y ahí no haces nada: lo dejas toser, porque su propia tos es lo más efectivo para sacar el objeto. Golpearlo en ese momento puede empujar el objeto y completar la obstrucción.' },
        { show: ['sil'], note: 'Aquí sí actúas de inmediato',
          say: 'Pero si ya no tose con fuerza, no llora, no emite ningún sonido, la obstrucción es completa, y ahí actúas de inmediato. Y la maniobra que uses depende de una sola cosa: la edad.' },
        { show: ['men'], note: 'Nunca Heimlich en este grupo',
          say: 'En el menor de un año: cinco golpes firmes entre los omóplatos, con el niño boca abajo sobre tu antebrazo, y luego cinco compresiones en el pecho. Repites esa secuencia hasta que salga el objeto o pierda el conocimiento.' },
        { show: ['may'], note: 'La maniobra clásica del adulto',
          say: 'En el mayor de un año, la maniobra es la de Heimlich: compresiones abdominales hacia adentro y hacia arriba, con el rescatador parado detrás del niño.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Lo que nunca hay que hacer',
      title: 'Dos prohibiciones que salvan o dañan',
      cards: [
        { title: 'Heimlich en el lactante', tag: 'Prohibido', kind: 'alert', items: [
          { t: 'Puede romper el hígado', d: 'O el bazo: son muy vulnerables',
            say: 'La maniobra de Heimlich está prohibida en el menor de un año. Sus órganos abdominales, en especial el hígado y el bazo, son muy vulnerables, y la compresión puede desgarrarlos.' },
        ] },
        { title: 'Barrido a ciegas', tag: 'Prohibido siempre', kind: 'alert', items: [
          { t: 'Nunca metas el dedo sin ver', d: 'Puede empujarlo más profundo',
            say: 'Y esto aplica a cualquier edad: nunca metas el dedo a ciegas en la boca del niño para buscar el objeto. Puedes empujarlo más abajo y transformar una obstrucción parcial en una completa. Solo lo retiras si lo ves directamente.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Si pierde el conocimiento',
      title: 'Cuando el niño ya no responde',
      cards: [
        { title: 'Reanimación', tag: 'Empieza ya', kind: 'key', items: [
          { t: 'Inicia la reanimación cardiopulmonar', d: 'Igual que ante cualquier paro',
            say: 'Si el niño pierde el conocimiento en cualquier momento de esto, dejas las maniobras de desobstrucción e inicias reanimación cardiopulmonar, igual que ante cualquier otro paro.' },
          { t: 'Mira antes de ventilar', d: 'Retira el objeto solo si lo ves',
            say: 'La única diferencia es que, antes de cada ventilación, miras dentro de la boca, y solo retiras el objeto si lo ves directamente. Si no lo ves, sigues con la reanimación de todas formas.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fase subaguda',
      title: 'Cuando el episodio ya pasó, semanas atrás',
      nodes: [
        { id: 'ant', col: 0, row: 0, k: 'cause', t: 'Atragantamiento hace semanas', s: 'A veces ni lo recuerdan' },
        { id: 'lat', col: 1, row: 0, k: 'mech', t: 'Fase silenciosa', s: 'El objeto se aloja distal' },
        { id: 'sib', col: 2, row: 0, k: 'effect', t: 'Sibilancias solo de un lado', s: 'Que no ceden con salbutamol' },
        { id: 'rx3', col: 3, row: 0, k: 'q', t: 'Radiografía en espiración', s: 'Un pulmón que no se desinfla' },
        { id: 'bro', col: 4, row: 0, k: 'good', t: 'Broncoscopía rígida', s: 'Diagnostica y extrae' },
      ],
      edges: [
        { from: 'ant', to: 'lat' }, { from: 'lat', to: 'sib' }, { from: 'sib', to: 'rx3' }, { from: 'rx3', to: 'bro' },
      ],
      steps: [
        { show: ['ant', 'lat'], note: 'La historia no siempre es clara',
          say: 'Ahora la otra forma en que se pregunta este tema. A veces el episodio de atragantamiento pasa casi inadvertido, o el niño ya no lo recuerda, y el objeto se queda alojado en el bronquio sin dar síntomas por un tiempo.' },
        { show: ['sib'], note: 'Unilateral y no responde a nada',
          say: 'Semanas después, aparece tos y sibilancias que suenan solo de un lado, y que no mejoran con el salbutamol. Esa falta de respuesta, y que sea unilateral, es lo que te tiene que hacer sospechar.' },
        { show: ['rx3'], note: 'El signo indirecto clásico',
          say: 'La radiografía en espiración muestra el signo clave: el pulmón del lado del cuerpo extraño no se desinfla, porque el objeto actúa como una válvula que deja entrar el aire pero no salir, y eso empuja el mediastino hacia el lado sano.' },
        { show: ['bro'], note: 'Diagnostica y extrae en el mismo acto',
          say: 'Y con esa sospecha, el paso siguiente es la broncoscopía rígida, en pabellón, que es a la vez el examen que confirma el diagnóstico y el procedimiento que extrae el objeto.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo, desde el momento agudo hasta la fase tardía, en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en cuerpo extraño',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Tose con fuerza, todavía llora', 'Dejarlo toser, no tocarlo', 'Darle golpes en la espalda'],
          say: 'Repasemos con la tabla. Si tose con fuerza y todavía llora, lo dejas toser sin tocarlo. El error es golpearlo, pensando que ayuda.' },
        { cells: ['Obstrucción completa, menor de un año', 'Golpes en la espalda y compresiones torácicas', 'Maniobra de Heimlich'],
          say: 'Obstrucción completa en el menor de un año: golpes en la espalda y compresiones torácicas. El error, que puede ser grave, es hacer Heimlich a esa edad.' },
        { cells: ['Obstrucción completa, mayor de un año', 'Maniobra de Heimlich', 'Golpes en la espalda como única maniobra'],
          say: 'Obstrucción completa en el mayor de un año: Heimlich. Ahí el error es quedarse solo con los golpes en la espalda.' },
        { cells: ['Objeto no visible en la boca', 'No meter el dedo a ciegas', 'Barrido digital para buscarlo'],
          say: 'Si el objeto no se ve directamente, no metes el dedo a buscarlo. El error clásico es el barrido a ciegas, que puede empeorar todo.' },
        { cells: ['Sibilancias unilaterales, semanas después', 'Sospechar cuerpo extraño, broncoscopía', 'Tratarlo como asma y repetir salbutamol'],
          say: 'Y sibilancias unilaterales que aparecen semanas después de un atragantamiento: sospechas cuerpo extraño y vas a broncoscopía. El error es tratarlo como asma y repetir el salbutamol sin parar.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 7 meses, en brazos de su madre comiendo puré, comienza súbitamente con tos intensa. A los pocos segundos deja de toser, no llora, no emite sonidos, y presenta cianosis progresiva con tiraje universal.',
      question: '¿Cuál es la maniobra indicada en este momento?',
      options: [
        { letter: 'A', text: 'Maniobra de Heimlich con 5 compresiones abdominales' },
        { letter: 'B', text: '5 golpes interescapulares seguidos de 5 compresiones torácicas' },
        { letter: 'C', text: 'Barrido digital a ciegas de la cavidad oral' },
        { letter: 'D', text: 'Ventilaciones boca a boca de inmediato' },
        { letter: 'E', text: 'Observar y esperar a que el objeto salga solo' },
      ],
      correct: 'B',
      explanation: 'Obstrucción completa en un lactante menor de 1 año: la maniobra indicada es 5 golpes interescapulares seguidos de 5 compresiones torácicas. La maniobra de Heimlich está contraindicada a esta edad por el riesgo de lesión hepática o esplénica.',
      say: {
        stem: 'Vamos con un caso. Lactante de siete meses, en brazos de su madre comiendo puré, comienza de golpe con tos intensa. A los pocos segundos deja de toser, no llora, no emite ningún sonido, y aparece cianosis progresiva con tiraje generalizado.',
        question: '¿Cuál es la maniobra indicada en este momento?',
        options: 'Tienes cinco opciones: maniobra de Heimlich, cinco golpes en la espalda seguidos de cinco compresiones torácicas, barrido digital a ciegas, ventilaciones boca a boca de inmediato, u observar y esperar. Piénsalo.',
        answer: 'Es la B. Este lactante tiene una obstrucción completa: no tose, no llora, no respira bien. Como es menor de un año, la maniobra de Heimlich queda descartada por el riesgo de dañarle el hígado o el bazo. Y el barrido a ciegas está prohibido siempre, porque puede empujar el objeto más adentro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 35',
      stem: 'Un lactante de 10 meses de edad, sin antecedentes, mientras come su almuerzo comienza súbitamente con tos asociado a disminución del esfuerzo respiratorio e hipotonía.',
      question: '¿Cuál es la conducta más adecuada en este caso?',
      options: [
        { letter: 'A', text: 'Iniciar reanimación cardiopulmonar' },
        { letter: 'B', text: 'Exploración digital de su cavidad oral' },
        { letter: 'C', text: 'Iniciar presión digital en epigastrio' },
        { letter: 'D', text: 'Dar golpes en la espalda' },
        { letter: 'E', text: 'Iniciar ventilaciones boca a boca' },
      ],
      correct: 'D',
      explanation: 'Cuerpo extraño laríngeo obstructivo en un lactante: la maniobra inicial es dar golpes en la espalda; si no funciona, se combinan con compresiones torácicas, repitiendo la secuencia. La maniobra de Heimlich se reserva para el mayor de 1 año.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil trece. Lactante de diez meses, sin antecedentes, que mientras come su almuerzo comienza de golpe con tos, junto con menos esfuerzo respiratorio e hipotonía.',
        question: '¿Cuál es la conducta más adecuada en este caso?',
        options: 'Las opciones: iniciar reanimación cardiopulmonar, explorar la boca con el dedo, hacer presión digital en el epigastrio, dar golpes en la espalda, o ventilaciones boca a boca.',
        answer: 'Es la D. El inicio súbito mientras comía, con tos y luego menos esfuerzo respiratorio, es cuerpo extraño laríngeo obstructivo, y este lactante tiene menos de un año. Empiezas con los golpes en la espalda; si no resulta, sigues con las compresiones torácicas, y repites la secuencia hasta que salga el objeto. La presión digital en el epigastrio, que es básicamente Heimlich, se guarda para después del año.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 64',
      stem: 'Una niña de 3 años presenta tos persistente desde hace 7 días, inicialmente seca, pero que desde hace 3 días se volvió productiva, por lo que se le indicó amoxicilina oral, sin mayor respuesta. Al examen físico se escucha estridor respiratorio, tiraje supraesternal y subcostal, y en la auscultación respiratoria se constatan sibilancias en el lado derecho. La radiografía de tórax muestra atelectasia del lóbulo medio.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Laringitis viral' },
        { letter: 'B', text: 'Bronquiolitis aguda' },
        { letter: 'C', text: 'Neumonía atípica' },
        { letter: 'D', text: 'Cuerpo extraño bronquial' },
        { letter: 'E', text: 'Traqueítis bacteriana' },
      ],
      correct: 'D',
      explanation: 'Tos que no responde a amoxicilina, sibilancias unilaterales derechas y atelectasia del lóbulo medio: patrón clásico de cuerpo extraño bronquial en el bronquio derecho. La conducta es la broncoscopía rígida.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Niña de tres años con tos persistente desde hace siete días, que no respondió a la amoxicilina. Al examen: estridor, tiraje, y sibilancias solo en el lado derecho. La radiografía muestra atelectasia del lóbulo medio.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: laringitis viral, bronquiolitis aguda, neumonía atípica, cuerpo extraño bronquial, o traqueítis bacteriana.',
        answer: 'Es la D, cuerpo extraño bronquial. Fíjate en las tres pistas juntas: no respondió al antibiótico, las sibilancias son de un solo lado, y hay atelectasia justo en el lóbulo medio derecho, la localización clásica. Ese conjunto no es asma ni infección: es un objeto tapando el bronquio, y la conducta es la broncoscopía rígida.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La edad decide la maniobra', tag: 'Nunca al revés', kind: 'key', items: [
          { t: 'Menor de un año', d: 'Golpes en la espalda y compresiones torácicas',
            say: 'Cerremos con las reglas de oro. En el menor de un año: golpes en la espalda y compresiones torácicas, nunca Heimlich.' },
          { t: 'Mayor de un año', d: 'Maniobra de Heimlich',
            say: 'En el mayor de un año, ya sí corresponde la maniobra de Heimlich.' },
        ] },
        { title: 'Lo que nunca haces', tag: 'En cualquier edad', kind: 'alert', items: [
          { t: 'Tos efectiva', d: 'No la interrumpas',
            say: 'Si la tos es efectiva, no la interrumpas, déjala trabajar.' },
          { t: 'Barrido a ciegas', d: 'Solo si lo ves directamente',
            say: 'Y nunca metas el dedo a ciegas: solo retiras el objeto si lo ves.' },
        ] },
        { title: 'Semanas después', tag: 'Fase silenciosa', kind: 'pharma', items: [
          { t: 'Sibilancias unilaterales que no ceden', d: 'Piensa en cuerpo extraño, broncoscopía',
            say: 'Y si semanas después aparecen sibilancias de un solo lado que no ceden con broncodilatador, piensa en cuerpo extraño y ve a la broncoscopía. Si te llevas una sola idea de hoy: la edad manda la maniobra, y nunca el dedo a ciegas. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Cuerpo extraño en la vía aérea: la edad decide',
    root: N('start', 'Niño se atora de golpe', 'Comiendo o jugando',
      'Tienes un niño que se atora de golpe. Antes de tocarlo, pregúntate si su tos todavía funciona.',
      ['', N('q', '¿Tose con fuerza y llora?', 'Obstrucción parcial o completa',
        'Si tose fuerte y llora, la obstrucción es parcial; si no, es completa.',
        ['Sí, tose y llora', N('ok', 'Déjalo toser', 'No lo golpees ni lo toques',
          'No intervengas: su propia tos es lo más efectivo para sacar el objeto.')],
        ['No, obstrucción completa', N('q', '¿Qué edad tiene?', 'Eso decide la maniobra',
          'Con obstrucción completa, la edad es lo que decide qué maniobra usar.',
          ['Menor de un año', N('do', 'Golpes y compresiones', 'Cinco y cinco, en secuencia',
            'Cinco golpes interescapulares y cinco compresiones torácicas, repitiendo la secuencia. Nunca Heimlich a esta edad, por el riesgo de dañar el hígado o el bazo.')],
          ['Mayor de un año', N('do', 'Maniobra de Heimlich', 'Compresiones abdominales',
            'Maniobra de Heimlich, con compresiones abdominales hacia adentro y hacia arriba.')])])]),
  },
};
