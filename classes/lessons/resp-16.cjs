// Clase 4.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-16).
// Preguntas reales: banco EUNACOM (books/data/real_questions_by_code.json).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-16',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Primero las imágenes previas, después la TAC, y el tamaño decide si controlar, hacer PET o biopsiar',
      say: 'Bienvenidos. Abrimos el bloque de oncología pulmonar con un hallazgo cada vez más frecuente: el nódulo pulmonar solitario. Muchas veces aparece en una radiografía pedida por otra razón, en un paciente sin síntomas. Y el examen pregunta casi siempre lo mismo: cuál es el primer paso, qué signos en la TAC hablan de benignidad o de cáncer, y qué hacer según el tamaño. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Definición y primer paso',
      title: '¿Qué es un nódulo y qué haces primero?',
      cards: [
        { title: 'Definición', tag: 'Hasta 3 cm', kind: 'criteria', items: [
          { t: 'Opacidad única, redonda u oval', d: 'De 30 mm o menos',
            say: 'Primero, la definición. El nódulo pulmonar solitario es una opacidad única, redondeada u oval, de tres centímetros o menos de diámetro.' },
          { t: 'Rodeada de pulmón normal', d: 'Sin atelectasia, neumonía ni adenopatías',
            say: 'Además, tiene que estar completamente rodeada de pulmón aireado normal, sin atelectasia, sin neumonía y sin adenopatías mediastínicas evidentes. Es un hallazgo aislado.' },
          { t: 'Más de 3 cm: masa', d: 'Maligna hasta demostrar lo contrario',
            say: 'Si mide más de tres centímetros, ya no es un nódulo: es una masa pulmonar, y se asume maligna hasta demostrar lo contrario. Ese corte, tres centímetros, se pregunta.' },
        ] },
        { title: 'Primer paso', tag: 'Siempre', kind: 'key', items: [
          { t: 'Buscar imágenes previas', d: 'Radiografías o TAC antiguas',
            say: 'Ahora, la regla de oro número uno del tema. Frente a un nódulo recién encontrado, lo primero no es una TAC ni una biopsia. Lo primero es buscar radiografías o TAC antiguas y comparar.' },
          { t: 'Igual por 2 años o más: benigno', d: 'No requiere más estudio',
            say: '¿Por qué? Porque un cáncer crece. Si el nódulo tiene el mismo tamaño y la misma forma durante al menos dos años, se confirma que es benigno, y no necesita más estudios ni biopsias. Una radiografía vieja puede ahorrarle al paciente una cirugía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'TAC de tórax',
      title: 'Signos de benignidad vs malignidad',
      cards: [
        { title: 'Sin previas o nódulo nuevo', tag: 'Examen de elección', kind: 'key', items: [
          { t: 'TAC de tórax de cortes finos', d: 'Caracteriza el nódulo',
            say: 'Si no hay imágenes previas, o el nódulo es nuevo, el examen de elección es la TAC de tórax de cortes finos. La TAC te permite mirar el nódulo por dentro y ver sus bordes.' },
        ] },
        { title: 'Sugiere benignidad', tag: 'Tranquiliza', kind: 'normal', items: [
          { t: 'Menor de 6 mm, bordes lisos', d: 'Netos y regulares',
            say: 'Sugieren benignidad un tamaño menor de seis milímetros y los bordes lisos y netos.' },
          { t: 'Calcificación benigna', d: 'Central, concéntrica o difusa',
            say: 'Y sobre todo, el patrón de calcificación: central, concéntrica en capas, o difusa completa. Son patrones de lesiones antiguas, como un granuloma.' },
          { t: 'Popcorn: hamartoma', d: 'Palomitas de maíz, con grasa',
            say: 'Hay uno que es patognomónico: la calcificación en palomitas de maíz, o popcorn, que junto con grasa dentro del nódulo es diagnóstica de hamartoma pulmonar. Ese dato se pregunta tal cual.' },
        ] },
        { title: 'Sugiere malignidad', tag: 'Alerta', kind: 'alert', items: [
          { t: 'Mayor de 8–10 mm, espiculado', d: 'Bordes irregulares, corona radiada',
            say: 'En cambio, sugieren cáncer un tamaño mayor de ocho a diez milímetros, y los bordes espiculados, irregulares, como una corona. El tumor infiltra hacia afuera, y eso dibuja las espículas.' },
          { t: 'Vidrio esmerilado parcial', d: 'Retracción pleural, calcio excéntrico',
            say: 'También el nódulo en parte sólido y en parte en vidrio esmerilado, la retracción de la pleura, el broncograma aéreo con distorsión, y las calcificaciones excéntricas o punteadas. Fíjate que no es el calcio en sí lo que tranquiliza, sino su patrón.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Conducta',
      title: 'El tamaño y el riesgo deciden',
      nodes: [
        { id: 'rie', col: 0, row: 1, k: 'risk', t: 'Riesgo del paciente', s: '> 50 años, tabaco, cáncer previo, lóbulo superior' },
        { id: 'p6', col: 1, row: 0, k: 'good', t: 'Menor de 6 mm', s: 'Bajo riesgo: sin control' },
        { id: 'p68', col: 1, row: 1, k: 'q', t: '6 a 8 mm', s: 'TAC a 6–12 y 18–24 meses' },
        { id: 'p8', col: 1, row: 2, k: 'alert', t: 'Mayor de 8 mm', s: 'Probabilidad pretest de cáncer' },
        { id: 'pet', col: 2, row: 2, k: 'refer', t: 'Intermedia (5–65 %): PET-CT', s: 'Con 18-FDG' },
        { id: 'bio', col: 3, row: 2, k: 'refer', t: 'Alta o PET ávido', s: 'Biopsia o resección por VATS' },
      ],
      edges: [
        { from: 'rie', to: 'p6' }, { from: 'rie', to: 'p68' }, { from: 'rie', to: 'p8' },
        { from: 'p8', to: 'pet' }, { from: 'pet', to: 'bio', label: 'capta' }, { from: 'p8', to: 'bio', label: '> 65 %' },
      ],
      steps: [
        { show: ['rie'], note: 'Primero, quién es el paciente',
          say: 'Ahora la conducta, según las guías Fleischner. Antes del tamaño, mira al paciente. Son de alto riesgo la edad sobre cincuenta años, el tabaquismo importante, de veinte a treinta paquetes año o más, el antecedente de cáncer, y el nódulo en un lóbulo superior.' },
        { show: ['p6'], note: 'Pequeño: casi nunca se estudia',
          say: 'Si el nódulo mide menos de seis milímetros, en un paciente de bajo riesgo no requiere seguimiento. En uno de alto riesgo, una TAC a los doce meses es opcional.' },
        { show: ['p68'], note: 'Intermedio: vigilar si crece',
          say: 'Entre seis y ocho milímetros, se controla con TAC a los seis a doce meses, y después a los dieciocho a veinticuatro meses. Lo que se busca es si el nódulo duplica su volumen, porque eso es lo que hace un cáncer.' },
        { show: ['p8'], note: 'Más de 8 mm: estimar la probabilidad',
          say: 'Sobre ocho milímetros cambia la lógica. Ya no basta con vigilar: hay que estimar la probabilidad de que sea cáncer antes de cualquier examen.' },
        { show: ['pet'], note: 'PET-CT si la probabilidad es intermedia',
          say: 'Si la probabilidad es intermedia, entre cinco y sesenta y cinco por ciento, el examen no invasivo de elección es el PET-CT con fluorodesoxiglucosa, que muestra si el nódulo consume glucosa como un tumor.' },
        { show: ['bio'], note: 'Probabilidad alta: obtener tejido',
          say: 'Y si la probabilidad es alta, sobre sesenta y cinco por ciento, o el nódulo capta con avidez en el PET, se va al tejido: biopsia percutánea guiada por TAC o broncoscópica, o resección por videotoracoscopía, que diagnostica y trata a la vez. Eso lo retomamos en la próxima clase, de cáncer pulmonar.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Nódulo benigno vs maligno',
      head: ['Característica', 'Sugiere benignidad', 'Sugiere malignidad'],
      rows: [
        { cells: ['Tamaño', '< 6 mm, estable ≥ 2 años', '> 8–10 mm o crece'],
          say: 'Repasemos el contraste. Tamaño: menos de seis milímetros y estable por dos años es benigno; más de ocho a diez milímetros, o que crece en los controles, sugiere cáncer.' },
        { cells: ['Bordes', 'Lisos y netos', 'Espiculados, corona radiada'],
          say: 'Bordes: lisos y netos en lo benigno; espiculados, como una corona, en lo maligno.' },
        { cells: ['Calcificación', 'Central, concéntrica o popcorn', 'Ausente, excéntrica o punteada'],
          say: 'Calcificación: central, concéntrica o en popcorn es benigna. Ausente, excéntrica o punteada no tranquiliza.' },
        { cells: ['Densidad', 'Sólida homogénea o grasa', 'Parcialmente sólida'],
          say: 'Densidad: sólida homogénea, o con grasa como en el hamartoma, en lo benigno; parcialmente sólida, en vidrio esmerilado, en lo maligno.' },
        { cells: ['Localización', 'Cualquiera', 'Lóbulos superiores'],
          say: 'Localización: lo benigno puede estar en cualquier parte; el cáncer predomina en los lóbulos superiores.' },
        { cells: ['Conducta', 'Comparar con previas, observar', 'PET-CT, biopsia o VATS'],
          say: 'Y la conducta: comparar con previas y observar si todo es benigno; PET-CT, biopsia o resección por videotoracoscopía si sugiere cáncer.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 55 años, fumador de 25 paquetes-año, asintomático. Una TAC de tórax pedida por otro motivo muestra un nódulo sólido de 7 mm en el lóbulo superior derecho, de bordes lisos, sin calcificaciones. No tiene imágenes previas en ningún centro.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'No requiere seguimiento' },
        { letter: 'B', text: 'TAC de control a los 6 a 12 meses y luego a los 18 a 24 meses' },
        { letter: 'C', text: 'PET-CT con 18-FDG' },
        { letter: 'D', text: 'Biopsia percutánea guiada por TAC' },
        { letter: 'E', text: 'Lobectomía superior derecha' },
      ],
      correct: 'B',
      explanation: 'Sin imágenes previas para comparar, el tamaño manda: un nódulo de 6 a 8 mm se controla con TAC a los 6–12 meses y luego a los 18–24 meses, buscando crecimiento. El PET-CT y la biopsia se reservan para nódulos mayores de 8 mm.',
      say: {
        stem: 'Vamos con un caso. Hombre de cincuenta y cinco años, fumador de veinticinco paquetes año, sin síntomas. Una TAC pedida por otro motivo muestra un nódulo sólido de siete milímetros en el lóbulo superior derecho, de bordes lisos y sin calcio. No hay imágenes previas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: no seguir, TAC de control a los seis a doce meses y luego a los dieciocho a veinticuatro, PET-CT, biopsia percutánea, o lobectomía. Piénsalo.',
        answer: 'Es la B. Como no hay previas con qué comparar, manda el tamaño: siete milímetros está en el rango de seis a ocho, y ese nódulo se vigila con TAC seriada. El distractor tentador es el PET, porque el paciente es fumador, pero el PET se reserva para nódulos de más de ocho milímetros. Y no seguirlo sería un error en un nódulo de ese tamaño.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 139',
      stem: 'Paciente de 60 años, fumadora de 30 paquetes año, consulta por compromiso del estado general y baja de peso. Su examen físico es normal, se solicita radiografía de tórax que muestra lo siguiente: [radiografía: nódulo pulmonar solitario parahiliar derecho].',
      question: 'La conducta más adecuada en este caso es:',
      options: [
        { letter: 'A', text: 'Solicitar TAC de tórax' },
        { letter: 'B', text: 'Realizar punción transpleural' },
        { letter: 'C', text: 'Instalar tubo pleural con trampa de agua' },
        { letter: 'D', text: 'Realizar toracocentesis diagnóstica' },
        { letter: 'E', text: 'Realizar broncoscopía rígida' },
      ],
      correct: 'A',
      explanation: 'La radiografía mostraba un nódulo pulmonar solitario parahiliar derecho. Sin radiografías previas que revisar, el primer examen es la TAC de tórax; la biopsia viene después. Si hubiese tenido radiografías previas, lo primero habría sido compararlas.',
      say: {
        stem: 'Ahora preguntas reales. La primera es del EUNACOM de julio de dos mil trece. Paciente de sesenta años, fumadora de treinta paquetes año, con compromiso del estado general y baja de peso. La radiografía mostraba un nódulo pulmonar solitario parahiliar derecho.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: TAC de tórax, punción transpleural, tubo pleural, toracocentesis, o broncoscopía rígida. Piénsalo.',
        answer: 'Es la A, TAC de tórax. No hay radiografías previas que comparar, así que el siguiente paso es caracterizar el nódulo con TAC. La biopsia vendrá después, según lo que muestre. Y fíjate en los distractores: el tubo pleural y la toracocentesis son para aire o líquido en la pleura, no para un nódulo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 11',
      stem: 'Un paciente de 76 años, jubilado de la minería y fumador de 20 paquetes año consulta por tos y disnea de 2 meses de evolución, asociada a expectoración mucosa, que a veces tiene estrías de sangre. Ha bajado 4 kilogramos de peso y presenta astenia. Su examen pulmonar muestra murmullo pulmonar conservado, bilateral, con escasos crépitos y sibilancias, mayores en el lado derecho. Se solicita una radiografía, que se muestra a continuación: [radiografía: nódulo pulmonar].',
      question: '¿Cuál es el examen más adecuado para proseguir con el estudio de este paciente?',
      options: [
        { letter: 'A', text: 'TAC de tórax' },
        { letter: 'B', text: 'Broncoscopía' },
        { letter: 'C', text: 'Baciloscopías' },
        { letter: 'D', text: 'PET' },
        { letter: 'E', text: 'Resonancia magnética de tórax' },
      ],
      correct: 'A',
      explanation: 'Lo primero es revisar las radiografías previas; luego, la TAC es el examen de elección para enfrentar el nódulo pulmonar. El PET-CT es útil, pero viene después de la TAC; la biopsia por broncoscopía, al final.',
      say: {
        stem: 'La siguiente es del EUNACOM de diciembre de dos mil dieciocho. Paciente de setenta y seis años, exminero y fumador, con dos meses de tos, disnea y expectoración con estrías de sangre, baja de peso y astenia. La radiografía mostraba un nódulo pulmonar.',
        question: '¿Cuál es el examen más adecuado para proseguir el estudio?',
        options: 'Las alternativas: TAC de tórax, broncoscopía, baciloscopías, PET, o resonancia magnética. Piénsalo.',
        answer: 'Es la A, TAC de tórax. Aunque este paciente tiene mucha sospecha de cáncer, el orden no cambia: primero la TAC, que caracteriza el nódulo y lo etapifica. El PET es el distractor más tentador, y el mismo banco reconoce que es discutible, pero en el algoritmo va después de la TAC. Y la broncoscopía, para obtener tejido, viene al final.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El orden', tag: 'Paso a paso', kind: 'key', items: [
          { t: 'Primero: imágenes previas', d: 'Estable 2 años o más: benigno',
            say: 'Cerremos con las reglas de oro. Frente a un nódulo, lo primero es buscar imágenes previas. Si está igual por dos años o más, es benigno y no se estudia más.' },
          { t: 'Sin previas: TAC de tórax', d: 'Antes que PET o biopsia',
            say: 'Si no hay previas, la TAC de tórax va antes que el PET o la biopsia.' },
        ] },
        { title: 'La TAC', tag: 'Qué mirar', kind: 'criteria', items: [
          { t: 'Popcorn: hamartoma', d: 'Calcificación central o concéntrica: benigno',
            say: 'En la TAC, la calcificación en popcorn es patognomónica de hamartoma, y la central o concéntrica también tranquiliza.' },
          { t: 'Espiculado, > 8 mm, lóbulo superior', d: 'Alta sospecha de cáncer',
            say: 'Los bordes espiculados, el tamaño sobre ocho milímetros y el lóbulo superior hacen sospechar cáncer.' },
        ] },
        { title: 'El tamaño', tag: 'Fleischner', kind: 'alert', items: [
          { t: '6–8 mm: TAC seriada', d: 'Más de 8 mm: PET-CT o tejido',
            say: 'Y el tamaño decide: de seis a ocho milímetros, TAC de control; sobre ocho, PET-CT si la probabilidad es intermedia, o biopsia si es alta. Si te llevas una sola idea de hoy: antes de pedir cualquier examen, busca la radiografía antigua. En la próxima clase seguimos con el cáncer pulmonar. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Nódulo pulmonar solitario: del hallazgo a la conducta',
    root: N('start', 'Nódulo pulmonar solitario', 'Hasta 3 cm, rodeado de pulmón normal',
      'Aparece un nódulo en una radiografía o una TAC. Antes de pedir nada, hay una pregunta que se responde con el archivo del paciente.',
      ['', N('q', '¿Hay imágenes previas?', 'Radiografías o TAC antiguas',
        '¿Existen imágenes previas para comparar?',
        ['Estable ≥ 2 años', N('ok', 'Benigno', 'Sin más estudio',
          'Si el nódulo está igual por dos años o más, es benigno, y no requiere más estudios.')],
        ['No hay o es nuevo', N('q', 'TAC de cortes finos: ¿tamaño?', 'Y factores de riesgo',
          'Si no hay previas o el nódulo es nuevo, TAC de tórax de cortes finos. Ahora mandan el tamaño y el riesgo del paciente.',
          ['< 6 mm', N('ok', 'Bajo riesgo: sin control', 'Alto riesgo: TAC opcional a 12 meses',
            'Menos de seis milímetros: sin seguimiento en bajo riesgo, y una TAC opcional a los doce meses en alto riesgo.')],
          ['6–8 mm', N('do', 'TAC de control', 'A 6–12 y 18–24 meses',
            'Entre seis y ocho milímetros: TAC de control a los seis a doce meses y a los dieciocho a veinticuatro, buscando crecimiento.')],
          ['> 8 mm, probabilidad intermedia', N('refer', 'PET-CT con 18-FDG', 'Si capta: tejido',
            'Sobre ocho milímetros con probabilidad intermedia: PET-CT. Si capta con avidez, se va a biopsia.')],
          ['> 8 mm, probabilidad alta', N('alert', 'Biopsia o resección VATS', 'Percutánea, broncoscópica o quirúrgica',
            'Sobre ocho milímetros con probabilidad alta: tejido. Biopsia percutánea guiada por TAC, broncoscópica, o resección por videotoracoscopía.')])])]),
  },
};
