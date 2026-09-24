// Clase 1.6 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-06).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-06',
  tier: 1,
  slides: [
    {
      type: 'cover',
      subtitle: 'Qué se observa y qué se opera',
      say: 'Bienvenidos. Hoy vemos hernia hiatal, hernia diafragmática y tumores del mediastino. Es una clase corta: estos temas casi nunca son el diagnóstico principal de una pregunta, sino una alternativa a descartar o un hallazgo en una radiografía. Por eso vamos a una sola idea: qué es benigno y se observa, y qué necesita cirugía.',
    },

    {
      type: 'flow',
      kicker: 'Hernias',
      title: 'Hiato y diafragma: ¿observar u operar?',
      nodes: [
        { id: 'hh', col: 0, row: 0, k: 'start', t: 'Hernia hiatal', s: '¿Qué es lo que sube?' },
        { id: 't1', col: 1, row: 0, k: 'good', t: 'Tipo I: por deslizamiento', s: '> 95 %: sube la unión gastroesofágica' },
        { id: 'obs', col: 2, row: 0, k: 'good', t: 'Observar', s: 'Tratar el reflujo solo si lo hay' },
        { id: 'par', col: 1, row: 1, k: 'risk', t: 'Paraesofágica (II–IV)', s: '< 5 %: sube el fondo gástrico' },
        { id: 'cir', col: 2, row: 1, k: 'refer', t: 'Cirugía electiva', s: 'Urgente si se complica' },
        { id: 'hdt', col: 0, row: 3, k: 'cause', t: 'Hernia diafragmática traumática', s: 'Trauma toracoabdominal, más a izquierda' },
        { id: 'ag', col: 1, row: 3, k: 'alert', t: 'Aguda o complicada', s: 'Cirugía de urgencia' },
        { id: 'cr', col: 2, row: 3, k: 'refer', t: 'Crónica, hallazgo', s: 'Cirugía electiva: nunca se observa' },
      ],
      edges: [
        { from: 'hh', to: 't1' }, { from: 't1', to: 'obs' },
        { from: 'hh', to: 'par' }, { from: 'par', to: 'cir', label: 'vólvulo' },
        { from: 'hdt', to: 'ag' }, { from: 'hdt', to: 'cr' },
      ],
      steps: [
        { show: ['hh'], note: 'La pregunta es qué sube al tórax',
          say: 'Partamos por la hernia hiatal. La pregunta clave es qué parte del estómago sube al tórax, porque de eso depende todo.' },
        { show: ['t1'], note: 'Más del 95 %: casi una variante normal',
          say: 'En más del noventa y cinco por ciento de los casos es tipo uno, por deslizamiento: la unión gastroesofágica se desliza hacia arriba. Es prácticamente una variante normal. Ya la vimos en la clase de reflujo como un factor que debilita la barrera.' },
        { show: ['obs'], note: 'Hallazgo sin síntomas: se observa',
          say: 'Por eso no se opera. Si es un hallazgo en una endoscopía y no hay síntomas, se observa. Y si hay reflujo, lo que se trata es el reflujo, no la hernia.' },
        { show: ['par'], note: 'Menos del 5 %: una hernia real',
          say: 'La otra, menos del cinco por ciento, es la paraesofágica, tipos dos a cuatro. Aquí la unión se queda en su sitio y es el fondo gástrico el que sube al lado del esófago. Es una hernia real, con un saco donde el estómago se puede torcer.' },
        { show: ['cir'], note: 'Riesgo de vólvulo, incarceración y estrangulación',
          say: 'Tiene riesgo de vólvulo, incarceración y estrangulación, así que se opera de forma electiva, con reparación más funduplicatura, y de urgencia si se complica.' },
        { show: ['hdt'], note: 'Después de un trauma, a veces años después',
          say: 'La hernia diafragmática traumática aparece después de un trauma toracoabdominal, más frecuente a izquierda. Puede verse en la fase aguda, o años después, como un hallazgo: asas intestinales o la cámara gástrica en el hemitórax.' },
        { show: ['ag', 'cr'], note: 'Nunca se observa',
          say: 'En la fase aguda, con compromiso respiratorio o una víscera estrangulada, cirugía de urgencia. Y en la fase crónica, aunque el paciente esté estable, cirugía electiva, para prevenir una obstrucción o estrangulación futura. Esa es la trampa: una hernia diafragmática verdadera nunca se observa.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Mediastino',
      title: 'Masa mediastínica: dónde está y cómo se estudia',
      cards: [
        { title: 'Anterior', tag: 'Las 4 T', kind: 'key', items: [
          { t: 'Timoma, Terrible linfoma', d: 'Teratoma, Tiroides (bocio endotorácico)',
            say: 'Ahora el mediastino. Aquí la localización orienta la causa. En el mediastino anterior usamos la regla de las cuatro T: timoma, el terrible linfoma, teratoma y otros tumores germinales, y tiroides, el bocio endotorácico.' },
        ] },
        { title: 'Medio y posterior', tag: 'Por compartimento', kind: 'normal', items: [
          { t: 'Medio: quistes y adenopatías', d: 'Broncogénicos, pericárdicos, aneurismas',
            say: 'En el mediastino medio, quistes broncogénicos y pericárdicos, adenopatías y aneurismas.' },
          { t: 'Posterior: neurogénicos', d: 'Los más frecuentes del mediastino',
            say: 'Y en el posterior, los tumores neurogénicos, como el neurinoma y el ganglioneuroma. Ojo con este dato: son los más frecuentes del mediastino en total.' },
        ] },
        { title: 'Estudio y manejo', tag: 'TAC primero', kind: 'alert', items: [
          { t: 'TAC de tórax con contraste', d: 'Examen de elección en cualquier compartimento',
            say: 'Sea cual sea el compartimento, el examen de elección es el TAC de tórax con contraste: muestra localización, tamaño y relación con los vasos. Según el caso se completa con marcadores, como alfa feto proteína y beta hCG en los germinales, o con biopsia.' },
          { t: 'Timoma con miastenia: timectomía', d: 'Puede mejorar la miastenia',
            say: 'El timoma se reseca si es grande, da síntomas o se asocia a miastenia gravis, y la timectomía puede mejorar la miastenia. En cambio, el linfoma no se opera: se trata con quimioterapia. Y el teratoma maduro se reseca.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora todo en un árbol: la pregunta es siempre si esto se observa o se opera.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Qué se observa y qué se opera',
      head: ['Hallazgo', 'Conducta', 'Por qué'],
      rows: [
        { cells: ['Hernia hiatal tipo I asintomática', 'Observar', 'Casi una variante normal'],
          say: 'Repasemos. Hernia hiatal por deslizamiento sin síntomas: se observa.' },
        { cells: ['Hernia paraesofágica (II–IV)', 'Cirugía electiva', 'Riesgo de vólvulo y estrangulación'],
          say: 'Paraesofágica: cirugía electiva, por el riesgo de vólvulo y estrangulación.' },
        { cells: ['Hernia diafragmática traumática aguda', 'Cirugía de urgencia', 'Compromiso respiratorio o estrangulación'],
          say: 'Diafragmática traumática aguda: cirugía de urgencia.' },
        { cells: ['Hernia diafragmática traumática crónica', 'Cirugía electiva', 'Prevenir obstrucción futura'],
          say: 'Diafragmática crónica, como hallazgo: cirugía electiva, aunque no tenga síntomas.' },
        { cells: ['Masa mediastínica', 'TAC de tórax con contraste', 'Cualquier compartimento'],
          say: 'Cualquier masa mediastínica: TAC de tórax con contraste.' },
        { cells: ['Timoma con miastenia gravis', 'Timectomía', 'Puede mejorar la miastenia'],
          say: 'Y timoma con miastenia gravis: timectomía.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 34 años con antecedente de accidente de tránsito con trauma toracoabdominal hace 3 años. Una radiografía de tórax por un cuadro respiratorio banal muestra asas intestinales en el tercio inferior del hemitórax izquierdo. Está asintomático desde el punto de vista digestivo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Observación y radiografía de control en 6 meses' },
        { letter: 'B', text: 'Cirugía de reparación electiva' },
        { letter: 'C', text: 'Cirugía de urgencia' },
        { letter: 'D', text: 'Inhibidor de la bomba de protones y control' },
        { letter: 'E', text: 'Endoscopía digestiva alta' },
      ],
      correct: 'B',
      explanation: 'Hernia diafragmática traumática crónica descubierta como hallazgo. Aunque esté asintomático, no se observa: se repara de forma electiva para evitar obstrucción, incarceración o estrangulación. La cirugía de urgencia se reserva para la fase aguda o la hernia complicada.',
      say: {
        stem: 'Vamos al caso. Hombre de treinta y cuatro años que hace tres años tuvo un accidente de tránsito con trauma toracoabdominal. Una radiografía de tórax, pedida por un cuadro respiratorio banal, muestra asas intestinales en la base del hemitórax izquierdo. No tiene síntomas digestivos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: observar y controlar, cirugía electiva, cirugía de urgencia, IBP y control, o endoscopía. Piénsalo.',
        answer: 'Es la B, cirugía electiva. Es una hernia diafragmática traumática crónica, y aunque el paciente esté asintomático, no se observa: se repara para evitar la estrangulación, que tiene alta mortalidad. El distractor tentador es observar, justamente porque está sin síntomas. Y la cirugía de urgencia queda para la fase aguda o la hernia complicada, que no es este caso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'En una radiografía de tórax de control se observa un ensanchamiento del mediastino anterior en un paciente de 40 años con diplopía y fatigabilidad muscular que mejora con el reposo.',
      question: '¿Cuál es el examen a solicitar y la sospecha?',
      options: [
        { letter: 'A', text: 'Ecografía torácica; quiste pericárdico' },
        { letter: 'B', text: 'TAC de tórax con contraste; timoma asociado a miastenia gravis' },
        { letter: 'C', text: 'Resonancia de columna; tumor neurogénico' },
        { letter: 'D', text: 'PET-CT; linfoma de Hodgkin' },
        { letter: 'E', text: 'Cintigrafía tiroidea; bocio endotorácico' },
      ],
      correct: 'B',
      explanation: 'Masa en el mediastino anterior + miastenia gravis (diplopía y debilidad fluctuante que mejora con el reposo) orientan a timoma. El examen de elección para cualquier masa mediastínica es el TAC de tórax con contraste. Timoma con miastenia: timectomía, que puede mejorar la miastenia.',
      say: {
        stem: 'Ahora una pregunta del banco EUNACOM, un caso representativo. En una radiografía de control se ve un ensanchamiento del mediastino anterior, en un paciente de cuarenta años con diplopía y fatigabilidad muscular que mejora con el reposo.',
        question: '¿Cuál es el examen a solicitar y la sospecha?',
        options: 'Las opciones: ecografía y quiste pericárdico, TAC con contraste y timoma con miastenia, resonancia y tumor neurogénico, PET y linfoma, o cintigrafía y bocio. Piénsalo.',
        answer: 'La respuesta es la B. Mediastino anterior te da las cuatro T, y la diplopía con debilidad que mejora con el reposo es una miastenia gravis: eso apunta al timoma. Y el examen de cualquier masa mediastínica es el TAC de tórax con contraste. El distractor es el linfoma, que también está en el mediastino anterior, pero no explica la miastenia.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Hernias', tag: 'Observar u operar', kind: 'key', items: [
          { t: 'Tipo I: observar', d: 'Paraesofágica: cirugía electiva',
            say: 'Cerremos. Hernia hiatal por deslizamiento: se observa, y solo se trata el reflujo si existe. Paraesofágica: cirugía electiva.' },
          { t: 'Diafragmática traumática: siempre se opera', d: 'Aguda urgente, crónica electiva',
            say: 'Hernia diafragmática traumática: aguda, cirugía de urgencia; crónica, cirugía electiva. Nunca se observa.' },
        ] },
        { title: 'Mediastino', tag: 'TAC con contraste', kind: 'alert', items: [
          { t: 'Anterior: las 4 T', d: 'Timoma con miastenia: timectomía',
            say: 'Y el mediastino: anterior, las cuatro T; toda masa se estudia con TAC de tórax con contraste; y el timoma con miastenia se opera. Si te llevas una sola idea de hoy: la hernia por deslizamiento se observa, pero la paraesofágica y la diafragmática se operan. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hiato, diafragma y mediastino: ¿observar u operar?',
    root: N('start', 'Hallazgo torácico o hiatal', 'Imagen o endoscopía',
      'Aquí la pregunta del examen es casi siempre la misma: ¿esto se observa o se opera?',
      ['', N('q', '¿Qué tipo de lesión?', 'Hernia hiatal, diafragmática o masa',
        '¿Frente a qué lesión estamos?',
        ['Hernia hiatal', N('q', '¿Tipo I, por deslizamiento?', 'Más del 95 % de los casos',
          '¿Es tipo uno, por deslizamiento, donde sube la unión gastroesofágica?',
          ['SÍ', N('ok', 'Observar', 'Tratar el reflujo solo si hay síntomas',
            'La hernia por deslizamiento es casi una variante normal. Se observa, y solo se trata el reflujo si existe.')],
          ['NO', N('refer', 'Cirugía electiva', 'Paraesofágica: riesgo de vólvulo',
            'La hernia paraesofágica es una hernia real, con riesgo de vólvulo y estrangulación: cirugía electiva, y urgente si se complica.')])],
        ['Diafragmática traumática', N('alert', 'Siempre se opera', 'Aguda: urgencia · Crónica: electiva',
          'La hernia diafragmática traumática nunca se observa. Si es aguda o complicada, cirugía de urgencia; si es un hallazgo crónico, cirugía electiva.')],
        ['Masa mediastínica', N('do', 'TAC de tórax con contraste', 'Anterior: las 4 T',
          'Toda masa mediastínica se estudia con TAC de tórax con contraste. En el mediastino anterior piensa en las cuatro T: timoma, linfoma, teratoma y tiroides.',
          ['', N('refer', 'Timoma con miastenia: timectomía', 'Linfoma: quimioterapia, no cirugía',
            'El timoma con miastenia gravis se reseca, y la timectomía puede mejorar la miastenia. El linfoma, en cambio, se trata con quimioterapia.')])])]),
  },
};
