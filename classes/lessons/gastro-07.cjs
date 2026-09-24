// Clase 2.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-07).
// Tier 1 en 8 diapositivas: las secciones 1 y 2 del libro van juntas, y la tabla
// "funcional vs orgánico" del libro se integra en la diapositiva de signos de alarma.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-07',
  tier: 1,
  slides: [
    {
      type: 'cover',
      subtitle: 'Un diagnóstico positivo, no de descarte',
      say: 'Bienvenidos. Con esta clase empezamos intestino y colon, y partimos por los trastornos digestivos funcionales y el síndrome de intestino irritable. En el examen aparece de dos formas: como diagnóstico diferencial del dolor abdominal crónico, y como pregunta de signos de alarma. Y, como en el reflujo y la dispepsia, lo que decide todo es saber cuándo basta la clínica y cuándo hay que estudiar.',
    },

    {
      type: 'points',
      kicker: 'Concepto y diagnóstico',
      title: '¿Qué es y cómo se diagnostica?',
      cards: [
        { title: 'Trastorno funcional', tag: 'Eje cerebro-intestino', kind: 'key', items: [
          { t: 'Síntomas crónicos sin lesión', d: 'Primera causa de consulta gastroenterológica',
            say: 'Partamos por el concepto. Un trastorno funcional es un síntoma digestivo crónico o recurrente, sin una anomalía estructural ni bioquímica que lo explique. Y no es un tema menor: es la primera causa de consulta gastroenterológica, y la principal causa de dolor abdominal, diarrea y constipación crónicos.' },
          { t: 'Hipersensibilidad visceral + motilidad', d: 'Gatillos: estrés, dieta, disbiosis',
            say: 'Hoy se entiende como un trastorno del eje cerebro intestino: un intestino que siente de más y que se mueve distinto, gatillado por el estrés, la dieta y la disbiosis. El prototipo es el síndrome de intestino irritable.' },
        ] },
        { title: 'Criterios de Roma IV', tag: 'Síndrome de intestino irritable', kind: 'criteria', items: [
          { t: 'Dolor ≥ 1 día por semana', d: 'En los últimos 3 meses',
            say: '¿Cómo se diagnostica? Con los criterios de Roma cuatro. Dolor abdominal recurrente, al menos un día por semana en los últimos tres meses.' },
          { t: 'Más 2 o más de 3', d: 'Defecación, frecuencia, consistencia',
            say: 'Y asociado a dos o más de estos tres: relación con la defecación, cambio en la frecuencia de las deposiciones, o cambio en su consistencia. Fíjate que todo gira en torno a la defecación: el dolor que alivia o cambia al defecar es la firma del cuadro.' },
        ] },
        { title: 'Diagnóstico positivo', tag: 'No de descarte', kind: 'alert', items: [
          { t: 'Criterios + sin alarma = SII', d: 'Sin batería de exámenes',
            say: 'Y aquí está la idea que más se pregunta. El diagnóstico es clínico y positivo, no de descarte. Si cumple los criterios y no tiene signos de alarma, no necesitas colonoscopía ni una batería de exámenes.' },
          { t: 'Exámenes básicos de rutina', d: 'Hemograma, PCR, TSH, celíaca; calprotectina si hay diarrea',
            say: 'Lo que sí se pide de rutina es poco: hemograma, PCR, TSH y anticuerpos de enfermedad celíaca, más calprotectina fecal si predomina la diarrea.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Banderas rojas',
      title: 'Signos de alarma: la regla ABCDEFH',
      nodes: [
        { id: 'ab', col: 0, row: 0, k: 'risk', t: 'A · B: Anemia, baja de peso', s: 'No se explican por un intestino sensible' },
        { id: 'c', col: 0, row: 1, k: 'risk', t: 'C: Cambio reciente del hábito', s: 'O del patrón de síntomas' },
        { id: 'd', col: 0, row: 2, k: 'risk', t: 'D: Disfagia', s: 'Síntoma alto' },
        { id: 'e', col: 0, row: 3, k: 'risk', t: 'E: Edad de inicio > 50', s: 'El funcional parte joven' },
        { id: 'fh', col: 0, row: 4, k: 'risk', t: 'F · H: Familiar con cáncer, hemorragia', s: 'Y síntomas nocturnos que despiertan' },
        { id: 'est', col: 2, row: 2, k: 'good', t: 'EDA o colonoscopía', s: 'Según dónde está el síntoma' },
        { id: 'trap', col: 3, row: 2, k: 'trap', t: 'Seguir como funcional', s: 'Retrasa el diagnóstico de cáncer' },
      ],
      edges: [
        { from: 'ab', to: 'est' }, { from: 'c', to: 'est' }, { from: 'd', to: 'est' },
        { from: 'e', to: 'est' }, { from: 'fh', to: 'est' },
        { from: 'est', to: 'trap', label: 'nunca' },
      ],
      steps: [
        { show: ['ab'], note: 'Un trastorno funcional no hace bajar de peso',
          say: 'Ahora, ¿qué te obliga a abandonar la hipótesis funcional? Los signos de alarma, con la regla A B C D E F H. A y B: anemia y baja de peso. Un intestino sensible no hace bajar de peso ni sangrar; eso es orgánico.' },
        { show: ['c'], note: 'Lo nuevo preocupa más que lo antiguo',
          say: 'C: cambio reciente del hábito intestinal, o del patrón de los síntomas. Un paciente con años de molestias que de pronto cambia, merece estudio.' },
        { show: ['d', 'e'], note: 'El funcional típico parte joven',
          say: 'D: disfagia. Y E: edad de inicio sobre los cincuenta años. El trastorno funcional típico parte joven; si los síntomas debutan después de los cincuenta, piensa en un cáncer.' },
        { show: ['fh'], note: 'Y lo que despierta al paciente',
          say: 'F: familiar de primer grado con cáncer digestivo. Y H: hemorragia, rectorragia o melena. Súmale los síntomas nocturnos que despiertan al paciente: el intestino irritable no despierta.' },
        { show: ['est'], note: 'Basta uno solo',
          say: 'Basta un solo signo para cambiar la conducta: se estudia con endoscopía digestiva alta o colonoscopía, según dónde esté el síntoma. Y en la enfermedad orgánica los exámenes básicos suelen salir alterados: anemia, PCR o calprotectina elevadas.' },
        { show: ['trap'], note: 'Trampa: antiespasmódico y control',
          say: 'La trampa es la alternativa que dice iniciar antiespasmódicos y controlar en unos meses. Si hay alarma, tratar como funcional solo retrasa el diagnóstico de un cáncer.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Educar primero, fármacos según el síntoma',
      cards: [
        { title: 'La base', tag: 'Siempre', kind: 'normal', items: [
          { t: 'Educación', d: 'Explicar que es benigno y descartar cáncer',
            say: 'El tratamiento parte por la educación: explicarle al paciente que su cuadro es benigno, y descartar el cáncer de forma explícita en la conversación. Muchas veces eso es lo que más lo tranquiliza.' },
          { t: 'Manejo del estrés y dieta', d: 'Baja en FODMAP, fibra soluble',
            say: 'Luego, manejo del estrés y ajuste de la dieta: dieta baja en FODMAP y fibra soluble. Tiene lógica si recuerdas el eje cerebro intestino.' },
        ] },
        { title: 'Fármacos', tag: 'Según el síntoma que predomina', kind: 'pharma', items: [
          { t: 'Dolor: antiespasmódicos', d: 'Trimebutino, bromuro de pinaverio',
            say: 'Los fármacos se eligen según el síntoma que predomina. Si predomina el dolor, antiespasmódicos: trimebutino o bromuro de pinaverio.' },
          { t: 'Diarrea: amitriptilina en dosis baja', d: 'Antidepresivo tricíclico',
            say: 'Si predomina la diarrea, un antidepresivo tricíclico en dosis baja, la amitriptilina.' },
          { t: 'Constipación: polietilenglicol', d: 'Laxante osmótico',
            say: 'Y si predomina la constipación, un laxante osmótico, el polietilenglicol.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol: primero la alarma, después los criterios, y al final el síntoma que manda.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 32 años con 8 meses de dolor en hipogastrio que alivia tras defecar, con períodos alternados de diarrea y constipación. Sin baja de peso, rectorragia ni anemia. Examen físico y hemograma normales.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Colonoscopía para descartar cáncer de colon' },
        { letter: 'B', text: 'TAC de abdomen y pelvis con contraste' },
        { letter: 'C', text: 'Diagnosticar SII e iniciar educación y dieta baja en FODMAP' },
        { letter: 'D', text: 'Endoscopía digestiva alta con biopsias' },
        { letter: 'E', text: 'Test de sangre oculta en deposiciones' },
      ],
      correct: 'C',
      explanation: 'Cumple Roma IV (dolor recurrente relacionado con la defecación, con cambio en la frecuencia y forma de las deposiciones) y no tiene signos de alarma. El diagnóstico de SII es clínico y positivo: no requiere colonoscopía ni imágenes. Manejo: educación, dieta baja en FODMAP y fármacos según el síntoma.',
      say: {
        stem: 'Vamos al caso. Mujer de treinta y dos años con ocho meses de dolor en el hipogastrio que alivia después de defecar, con períodos de diarrea que alternan con constipación. No ha bajado de peso, no tiene rectorragia ni anemia, y el examen físico y el hemograma son normales.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: colonoscopía, TAC de abdomen, diagnosticar intestino irritable e iniciar educación y dieta, endoscopía alta con biopsias, o test de sangre oculta. Piénsalo.',
        answer: 'Es la C. Cumple Roma cuatro: dolor recurrente que alivia al defecar, con cambios en la frecuencia y la forma de las deposiciones. Y revisa la regla de alarma: joven, sin baja de peso, sin sangrado, hemograma normal. El distractor tentador es la colonoscopía, que suena prudente. Pero el diagnóstico es clínico y positivo, y sin alarma no se necesita.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'Reconstrucción EUNACOM Diciembre 2018 · Pregunta #41',
      stem: 'Mujer de 48 años con distensión y dolor abdominal de 1 año, alternando diarrea y constipación. En los últimos 2 meses refiere deposiciones más frecuentes, baja de 4 kg de peso no buscada y un episodio de rectorragia. Su madre tuvo cáncer de colon a los 55 años.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Diagnosticar síndrome de intestino irritable e iniciar dieta baja en FODMAP' },
        { letter: 'B', text: 'Solicitar colonoscopía' },
        { letter: 'C', text: 'Indicar antiespasmódicos y control en 3 meses' },
        { letter: 'D', text: 'Solicitar test de sangre oculta en deposiciones y repetir en 1 año' },
        { letter: 'E', text: 'Iniciar amitriptilina en dosis baja' },
      ],
      correct: 'B',
      explanation: 'Múltiples signos de alarma: baja de peso involuntaria, cambio reciente del hábito, rectorragia y familiar de primer grado con cáncer de colon. Eso descarta el manejo funcional (A, C, E) y obliga a colonoscopía. El test de sangre oculta (D) es tamizaje en asintomáticos, no estudio de un paciente con banderas rojas.',
      say: {
        stem: 'Y ahora una pregunta real, reconstruida del EUNACOM de diciembre de dos mil dieciocho. Mujer de cuarenta y ocho años con un año de distensión y dolor abdominal, alternando diarrea y constipación. En los últimos dos meses tiene deposiciones más frecuentes, bajó cuatro kilos sin buscarlo y tuvo un episodio de rectorragia. Su madre tuvo cáncer de colon a los cincuenta y cinco años.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: diagnosticar intestino irritable con dieta, colonoscopía, antiespasmódicos y control, sangre oculta y repetir en un año, o amitriptilina. Piénsalo.',
        answer: 'La respuesta es la B, colonoscopía. Cuenta las banderas rojas: cambio reciente del hábito, baja de peso, rectorragia y una madre con cáncer de colon. Basta una para abandonar la hipótesis funcional, y aquí hay cuatro. El distractor más fino es la sangre oculta: sirve para tamizar a personas sin síntomas, no para estudiar a una paciente que ya sangró.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Positivo', kind: 'key', items: [
          { t: 'Roma IV sin alarma = SII', d: 'No se necesita endoscopía',
            say: 'Cerremos con las reglas de oro. Criterios de Roma cuatro sin signos de alarma: síndrome de intestino irritable, y no necesitas endoscopía ni colonoscopía.' },
          { t: 'Cualquier alarma: EDA o colonoscopía', d: 'ABCDEFH',
            say: 'Con cualquier signo de alarma, la regla A B C D E F H, se estudia con endoscopía o colonoscopía.' },
        ] },
        { title: 'Tratamiento', tag: 'Según el síntoma', kind: 'pharma', items: [
          { t: 'Educación, estrés, FODMAP', d: 'Diarrea: amitriptilina · constipación: PEG',
            say: 'Y el tratamiento parte por educar, manejar el estrés y la dieta baja en FODMAP; amitriptilina si predomina la diarrea, polietilenglicol si predomina la constipación. Si te llevas una sola idea de hoy: el intestino irritable es un diagnóstico positivo, pero solo si antes buscaste los signos de alarma. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Síndrome de intestino irritable: diagnóstico positivo',
    root: N('start', 'Dolor abdominal crónico recurrente', 'Con cambios en las deposiciones',
      'Paciente con dolor abdominal recurrente y cambios en las deposiciones. Lo primero no es pedir exámenes, sino buscar signos de alarma.',
      ['', N('q', '¿Signos de alarma?', 'ABCDEFH',
        'Recuerda la regla A B C D E F H: anemia, baja de peso, cambio reciente del hábito, disfagia, edad de inicio sobre cincuenta años, familiar con cáncer digestivo y hemorragia, más los síntomas nocturnos.',
        ['SÍ', N('alert', 'EDA o colonoscopía', 'Se abandona la hipótesis funcional',
          'Con cualquier signo de alarma se abandona la hipótesis funcional y se estudia con endoscopía o colonoscopía según el síntoma.')],
        ['NO', N('ok', 'SII por criterios de Roma IV', 'Educación + estrés + dieta baja en FODMAP',
          'Sin alarma y con criterios de Roma cuatro, el diagnóstico es clínico y positivo, no de descarte. La base del tratamiento es educar, manejar el estrés y la dieta baja en FODMAP.',
          ['', N('q', '¿Síntoma predominante?', 'Fármaco dirigido al síntoma',
            'Los fármacos se eligen según el síntoma que predomina.',
            ['Dolor', N('ok', 'Antiespasmódicos', 'Trimebutino · pinaverio',
              'Si predomina el dolor: antiespasmódicos, como trimebutino o bromuro de pinaverio.')],
            ['Diarrea', N('ok', 'Amitriptilina dosis baja', 'Antidepresivo tricíclico',
              'Si predomina la diarrea: amitriptilina en dosis baja.')],
            ['Constipación', N('ok', 'Polietilenglicol', 'Laxante osmótico',
              'Si predomina la constipación: un laxante osmótico, el polietilenglicol.')])])])]),
  },
};
