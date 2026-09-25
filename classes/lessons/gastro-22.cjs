// Clase 5.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-22).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-22',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Dónde está el objeto, qué objeto es y cuándo se retira',
      say: 'Bienvenidos. Hoy vemos el cuerpo extraño digestivo, un tema que se ve mucho en la urgencia pediátrica y también en adultos con comida atascada. La buena noticia es que se resuelve con dos preguntas: dónde está el objeto, y qué objeto es. Y hay una lista corta de objetos que se sacan siempre, que te tienes que aprender de memoria.',
    },

    {
      type: 'points',
      kicker: 'Evaluación inicial',
      title: 'Localizar el objeto y buscar la alarma',
      cards: [
        { title: 'Radiografía', tag: 'Primer examen', kind: 'key', items: [
          { t: 'Cuello, tórax y abdomen', d: 'Para localizarlo',
            say: 'Ante la sospecha de que un paciente se tragó algo, lo primero es localizarlo. Se pide radiografía de cuello, tórax y abdomen, las tres, porque el objeto puede estar en cualquier punto del recorrido.' },
          { t: 'Radiolúcidos pueden no verse', d: 'Plástico, espinas de pescado',
            say: 'Pero ojo: una radiografía normal no descarta nada si el objeto es radiolúcido, como el plástico o una espina de pescado.' },
        ] },
        { title: 'Alarma esofágica', tag: 'Con cuerpo extraño en el esófago', kind: 'alert', items: [
          { t: 'Sialorrea', d: 'No logra tragar ni la saliva',
            say: 'Después buscamos los síntomas de alarma. La sialorrea significa que el paciente no logra tragar ni su propia saliva: el esófago está completamente obstruido.' },
          { t: 'Odinofagia', d: 'Dolor al tragar',
            say: 'La odinofagia, el dolor al tragar, también es alarma.' },
          { t: 'Dolor torácico', d: 'Perforación y mediastinitis',
            say: 'Y sobre todo, el dolor torácico. Con un cuerpo extraño en el esófago, el dolor torácico es perforación y mediastinitis hasta que se demuestre lo contrario, como vimos en la clase de perforación esofágica.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'En el esófago',
      title: 'Se retira siempre',
      nodes: [
        { id: 'eso', col: 0, row: 1, k: 'start', t: 'Cuerpo extraño en el esófago', s: 'Riesgo de perforación' },
        { id: 'eda', col: 1, row: 1, k: 'good', t: 'Endoscopía digestiva alta', s: 'Siempre se retira' },
        { id: 'urg', col: 2, row: 0, k: 'alert', t: 'Urgente si…', s: 'Obstrucción, pila, afilado o > 24 h' },
        { id: 'pil', col: 2, row: 2, k: 'cause', t: 'Pila de botón', s: 'Quemadura eléctrica' },
        { id: 'nec', col: 3, row: 2, k: 'alert', t: 'Necrosis en pocas horas', s: 'Extracción inmediata' },
      ],
      edges: [
        { from: 'eso', to: 'eda' }, { from: 'eda', to: 'urg' },
        { from: 'eso', to: 'pil', label: 'si es una pila' }, { from: 'pil', to: 'nec' },
      ],
      steps: [
        { show: ['eso'], note: 'Primera pregunta: ¿dónde está?',
          say: 'Primera pregunta: ¿dónde está el objeto? Si está en el esófago, la conducta es una sola.' },
        { show: ['eda'], note: 'No se espera a que baje',
          say: 'Se retira siempre por endoscopía digestiva alta. No se espera a que pase solo, porque un objeto detenido en el esófago puede perforarlo y producir una mediastinitis.' },
        { show: ['urg'], note: 'Cuándo no puede esperar',
          say: '¿Y cuándo es urgente? Cuando hay obstrucción completa, es decir, el paciente no traga su saliva; cuando es una pila o un objeto afilado; o cuando lleva más de veinticuatro horas impactado.' },
        { show: ['pil'], note: 'La pila es distinta a cualquier otro objeto',
          say: 'De esos, la pila de botón merece un lugar aparte. No es solo un objeto que obstruye: genera corriente, y produce una quemadura eléctrica de la pared.' },
        { show: ['nec'], note: 'Pila en el esófago = emergencia',
          say: 'En pocas horas hay necrosis, con riesgo de perforación y fístula traqueoesofágica. Por eso una pila de botón en el esófago es una emergencia: extracción inmediata, aunque el niño esté asintomático.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Más allá del esófago',
      title: '¿Observar o retirar?',
      nodes: [
        { id: 'est', col: 0, row: 1, k: 'start', t: 'Ya pasó el esófago', s: 'Estómago o intestino' },
        { id: 'q', col: 1, row: 1, k: 'q', t: '¿Qué objeto es?', s: 'Segunda pregunta' },
        { id: 'obs', col: 2, row: 0, k: 'good', t: 'Romo, pequeño, asintomático', s: 'Observar' },
        { id: 'rx', col: 3, row: 0, k: 'good', t: 'Rx cada 1–2 semanas', s: 'No buscar en deposiciones' },
        { id: 'lis', col: 2, row: 2, k: 'alert', t: 'La lista que se retira', s: 'Esté donde esté' },
        { id: 'why', col: 3, row: 2, k: 'mech', t: 'Pilas, ≥ 2 imanes, afilados o > 5 cm', s: 'Y bolitas absorbentes' },
      ],
      edges: [
        { from: 'est', to: 'q' },
        { from: 'q', to: 'obs', label: 'romo' }, { from: 'obs', to: 'rx' },
        { from: 'q', to: 'lis', label: 'de la lista' }, { from: 'lis', to: 'why' },
      ],
      steps: [
        { show: ['est', 'q'], note: 'Ahora importa qué es',
          say: 'Si el objeto ya pasó el esófago, la ubicación deja de mandar, y la pregunta pasa a ser qué objeto es.' },
        { show: ['obs'], note: 'La gran mayoría se elimina sola',
          say: 'Si es un objeto romo y pequeño, como una moneda, y el paciente está asintomático, se observa.' },
        { show: ['rx'], note: 'Seguimiento radiológico',
          say: 'El seguimiento es con radiografía cada una a dos semanas hasta que se elimine. Y un detalle práctico: no hay que buscarlo en las deposiciones.' },
        { show: ['lis'], note: 'Se retiran en cualquier ubicación',
          say: 'Pero hay una lista de objetos que se retiran siempre, estén en el esófago, en el estómago o más allá. Esta lista es lo que más se pregunta.' },
        { show: ['why'], note: 'Cada uno tiene su porqué',
          say: 'Las pilas, por la quemadura. Dos o más imanes, porque se atraen a través de las asas y producen necrosis y perforación. Los objetos afilados o de más de cinco centímetros. Y las bolitas de polímero absorbente, que se hinchan con el agua y obstruyen.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Comida impactada',
      title: 'Cuándo esperar y cuándo endoscopiar',
      nodes: [
        { id: 'com', col: 0, row: 1, k: 'start', t: 'Alimento impactado', s: 'En el esófago' },
        { id: 'q', col: 1, row: 1, k: 'q', t: '¿Traga líquidos? ¿Dolor?', s: '¿Cuánto tiempo lleva?' },
        { id: 'obs', col: 2, row: 0, k: 'good', t: 'Observar hasta 24 h', s: 'Tolera líquidos, sin dolor' },
        { id: 'eda', col: 2, row: 2, k: 'alert', t: 'Endoscopía para desimpactar', s: 'No traga, dolor o > 24 h' },
        { id: 'est', col: 3, row: 1, k: 'refer', t: 'Estudiar el esófago', s: 'Esofagitis eosinofílica, estenosis, anillo' },
      ],
      edges: [
        { from: 'com', to: 'q' },
        { from: 'q', to: 'obs', label: 'tolera' }, { from: 'q', to: 'eda', label: 'no tolera' },
        { from: 'obs', to: 'est' }, { from: 'eda', to: 'est' },
      ],
      steps: [
        { show: ['com'], note: 'El caso típico del adulto',
          say: 'Ahora el adulto: el trozo de carne que se queda atascado en el esófago. Aquí la regla cambia un poco.' },
        { show: ['q'], note: 'Tres preguntas',
          say: 'Tienes que preguntar tres cosas: si puede tragar líquidos, si tiene dolor, y cuánto tiempo lleva.' },
        { show: ['obs'], note: 'Se puede esperar',
          say: 'Si tolera líquidos y no tiene dolor, se puede observar hasta veinticuatro horas. El esófago no está completamente tapado, y el alimento puede pasar solo.' },
        { show: ['eda'], note: 'Sin demora',
          say: 'Si no traga líquidos, tiene dolor, o ya pasaron más de veinticuatro horas, endoscopía para desimpactar. Fíjate que es la misma lógica de la alarma: no tragar y el dolor son los que apuran.' },
        { show: ['est'], note: 'Buscar la causa',
          say: 'Y después del episodio, se estudia el esófago. Detrás de una impactación puede haber una esofagitis eosinofílica, una estenosis o un anillo, y eso se busca una vez resuelto el episodio, igual que en cualquier disfagia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones',
      title: 'Cuándo es cirugía y qué no hacer',
      cards: [
        { title: 'Cirugía', tag: 'Cuerpo extraño distal', kind: 'alert', items: [
          { t: 'Obstrucción intestinal o perforación', d: 'Tratamiento quirúrgico',
            say: 'Cuando un cuerpo extraño que ya pasó el esófago produce obstrucción intestinal o perforación, el endoscopio ya no alcanza: el tratamiento es quirúrgico.' },
        ] },
        { title: 'No hacer', tag: 'Trampa', kind: 'criteria', items: [
          { t: 'Nada de maniobra de Heimlich', d: 'Solo en obstrucción de la vía aérea',
            say: 'Y una trampa que aparece en las alternativas: la maniobra de Heimlich. No se hace por un cuerpo extraño digestivo; se usa solo en la obstrucción completa de la vía aérea. Son dos problemas distintos: uno tapa la vía aérea, el otro el tubo digestivo.' },
          { t: 'No apurar el tránsito', d: 'El objeto romo se observa',
            say: 'Y el objeto romo que ya pasó el esófago no necesita que lo apuremos con laxantes: se observa con radiografías, y la gran mayoría se elimina sola.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos las dos preguntas en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: '¿Retirar u observar?',
      head: ['Situación', 'Conducta', 'Por qué'],
      rows: [
        { cells: ['Cualquier objeto en el esófago', 'Retiro endoscópico', 'Riesgo de perforación y mediastinitis'],
          say: 'Repasemos. Cualquier objeto en el esófago se retira por endoscopía, por el riesgo de perforación.' },
        { cells: ['Pila de botón en el esófago', 'Extracción inmediata', 'Necrosis en pocas horas'],
          say: 'Pila de botón en el esófago: extracción inmediata, porque la necrosis aparece en horas.' },
        { cells: ['Romo y pequeño, ya en el estómago, asintomático', 'Observar + Rx cada 1–2 semanas', 'La mayoría se elimina solo'],
          say: 'Objeto romo y pequeño que ya está en el estómago, sin síntomas: observar, con radiografía cada una a dos semanas.' },
        { cells: ['Pilas, ≥ 2 imanes, afilado o > 5 cm, bolitas', 'Retirar siempre', 'Quemadura, necrosis, perforación, obstrucción'],
          say: 'Pilas, dos o más imanes, objetos afilados o de más de cinco centímetros, y bolitas absorbentes: se retiran siempre, estén donde estén.' },
        { cells: ['Comida impactada, tolera líquidos, sin dolor', 'Observar hasta 24 h', 'Puede pasar sola'],
          say: 'Comida impactada que tolera líquidos y sin dolor: se observa hasta veinticuatro horas.' },
        { cells: ['Comida impactada con dolor o sin tragar', 'Endoscopía para desimpactar', 'Riesgo de aspiración y perforación'],
          say: 'Y comida impactada con dolor, o que no deja tragar: endoscopía para desimpactar.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Niño de 2 años llevado a urgencias porque hace 1 hora tragó una pila de botón del control remoto. Está asintomático. La radiografía de tórax muestra la pila en el esófago medio, con signo del "doble halo".',
      question: '¿Cuál es la conducta?',
      options: [
        { letter: 'A', text: 'Observar y repetir la radiografía en 24 horas' },
        { letter: 'B', text: 'Extracción endoscópica inmediata' },
        { letter: 'C', text: 'Observar con radiografía cada 1–2 semanas' },
        { letter: 'D', text: 'Administrar un laxante' },
        { letter: 'E', text: 'Endoscopía electiva solo si aparecen síntomas' },
      ],
      correct: 'B',
      explanation: 'Pila de botón en el esófago: emergencia. La corriente genera una quemadura de la pared en horas, con riesgo de perforación, fístula traqueoesofágica y mediastinitis. Extracción endoscópica inmediata, aunque el niño esté asintomático.',
      say: {
        stem: 'Vamos al caso. Niño de dos años que llega a urgencias porque hace una hora se tragó la pila de botón del control remoto. Está asintomático. La radiografía de tórax muestra la pila en el esófago medio, con el signo del doble halo.',
        question: '¿Cuál es la conducta?',
        options: 'Las alternativas: observar y repetir la radiografía mañana, extracción endoscópica inmediata, observar con radiografías cada una a dos semanas, dar un laxante, o endoscopía solo si aparecen síntomas. Piénsalo.',
        answer: 'Es la B. Pila de botón en el esófago es una emergencia: quema la pared en horas y puede perforarla. El distractor tentador es la E, porque el niño está asintomático. Pero con una pila, esperar a que aparezcan los síntomas es esperar a que ya haya necrosis. Y la observación con radiografías es para el objeto romo que ya está en el estómago, nunca para una pila.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 50',
      stem: 'Paciente con disfagia a nivel de la apófisis xifoides luego de comer pollo, que no permite el paso ni siquiera de agua.',
      question: '¿Cuál es la conducta?',
      options: [
        { letter: 'A', text: 'Endoscopía digestiva alta' },
        { letter: 'B', text: 'Radiografía' },
        { letter: 'C', text: 'Nasolaringoscopia' },
        { letter: 'D', text: 'Manometría esofágica' },
        { letter: 'E', text: 'Derrame pleural' },
      ],
      correct: 'A',
      explanation: 'Comida impactada en el esófago (probablemente un hueso de pollo) que no deja pasar ni siquiera agua: es una obstrucción completa. La conducta es la endoscopía digestiva alta, sin demora, para desimpactar y por el riesgo de perforación. No se observa, porque no tolera ni líquidos.',
      say: {
        stem: 'Vamos con una pregunta real del examen, de diciembre de dos mil veinticuatro. Un paciente presenta disfagia a nivel del hueso del pecho después de comer pollo, y no logra pasar ni siquiera agua.',
        question: '¿Cuál es la conducta?',
        options: 'Las opciones: endoscopía digestiva alta, radiografía, nasolaringoscopia, manometría esofágica, o derrame pleural. Piénsalo.',
        answer: 'La respuesta es la A. No tragar ni agua es obstrucción completa del esófago, probablemente por un hueso de pollo, y eso exige endoscopía digestiva alta para desimpactar, sin esperar. La radiografía puede pedirse antes, pero no reemplaza la endoscopía, que además es terapéutica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 150',
      stem: 'Hombre de 70 años, desdentado, con disfagia alta para sólidos de inicio súbito tras comer. En la endoscopía se encuentra un cuerpo extraño, un trozo de carne, impactado en el esófago superior, y ya se realizó la endoscopía de extracción, con éxito.',
      question: '¿Cuál es el estudio de seguimiento más importante?',
      options: [
        { letter: 'A', text: 'Nueva endoscopía para evaluar la mucosa esofágica subyacente y descartar estenosis o tumor' },
        { letter: 'B', text: 'Radiografía de tórax de control' },
        { letter: 'C', text: 'TAC de cuello y tórax' },
        { letter: 'D', text: 'Alta directa sin más estudio' },
        { letter: 'E', text: 'Esofagografía con bario' },
      ],
      correct: 'A',
      explanation: 'Toda impactación de alimento en el esófago, sobre todo en el adulto mayor, obliga a estudiar el esófago después de resuelto el episodio: puede haber una estenosis péptica, un anillo de Schatzki o incluso un tumor detrás. El estudio es una nueva endoscopía, que ve la mucosa directamente y permite biopsiar si hace falta.',
      say: {
        stem: 'Y otra pregunta real, de julio de dos mil veinticinco. Hombre de setenta años, desdentado, con disfagia alta para sólidos de inicio súbito después de comer. En la endoscopía se encontró un trozo de carne impactado en el esófago superior, y ya se hizo la endoscopía de extracción, con éxito.',
        question: '¿Cuál es el estudio de seguimiento más importante?',
        options: 'Las opciones: nueva endoscopía para ver la mucosa y descartar estenosis o tumor, radiografía de tórax de control, TAC de cuello y tórax, alta directa sin más estudio, o esofagografía con bario. Piénsalo.',
        answer: 'Es la A. Ya lo vimos: después de una impactación de alimento hay que estudiar el esófago, porque puede haber una causa de base, como una estenosis, un anillo o un tumor, sobre todo en un adulto mayor desdentado. Dar de alta sin estudiar sería dejar pasar la causa, y por eso la D es la trampa más peligrosa.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Dónde está', tag: 'Primera pregunta', kind: 'key', items: [
          { t: 'Esófago: se retira siempre', d: 'Pila de botón = emergencia',
            say: 'Cerremos con las reglas de oro. En el esófago, todo se retira por endoscopía, y la pila de botón es una emergencia.' },
          { t: 'Dolor torácico = perforación', d: 'Hasta demostrar lo contrario',
            say: 'Con un cuerpo extraño esofágico, el dolor torácico es perforación hasta que se demuestre lo contrario.' },
        ] },
        { title: 'Qué es', tag: 'Segunda pregunta', kind: 'alert', items: [
          { t: 'Pilas, ≥ 2 imanes, afilados o > 5 cm, bolitas', d: 'Se retiran siempre',
            say: 'Pilas, dos o más imanes, objetos afilados o de más de cinco centímetros, y bolitas absorbentes: se retiran siempre, estén donde estén.' },
          { t: 'Romo en el estómago: observar', d: 'Rx cada 1–2 semanas',
            say: 'El objeto romo en el estómago de un niño asintomático se observa con radiografías.' },
        ] },
        { title: 'Comida impactada', tag: 'Adulto', kind: 'normal', items: [
          { t: 'No traga o duele: endoscopía', d: 'Tolera y sin dolor: hasta 24 h',
            say: 'Y la comida impactada se endoscopia si no traga o duele; si tolera líquidos, se espera hasta veinticuatro horas. Si te llevas una sola idea de hoy: pregunta primero dónde está y después qué es, y recuerda que la pila se saca siempre. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Cuerpo extraño digestivo: ¿retirar u observar?',
    root: N('start', 'Ingesta de cuerpo extraño', 'Sospecha clínica',
      'Paciente con sospecha de haber tragado un cuerpo extraño.',
      ['', N('do', 'Rx de cuello, tórax y abdomen', 'Localizar el objeto',
        'Lo primero es localizarlo, con radiografía de cuello, tórax y abdomen. Recuerda que los objetos radiolúcidos pueden no verse.',
        ['', N('q', '¿Dónde está?', 'Esófago vs más allá',
          'Primera pregunta: ¿está en el esófago, o ya pasó más allá?',
          ['Esófago', N('q', '¿Pila, afilado u obstrucción?', 'O más de 24 h impactado',
            '¿Es una pila o un objeto afilado, hay obstrucción completa, o lleva más de veinticuatro horas?',
            ['SÍ', N('alert', 'Endoscopía urgente', 'Pila de botón = emergencia',
              'Entonces la endoscopía es urgente. Y si es una pila de botón, extracción inmediata, porque quema la pared en horas.')],
            ['NO', N('refer', 'Endoscopía para retirarlo', 'En el esófago siempre se retira',
              'Aunque no sea urgente, en el esófago siempre se retira por endoscopía, por el riesgo de perforación.')])],
          ['Más allá', N('q', '¿Está en la lista?', 'Pilas · ≥ 2 imanes · afilado o > 5 cm · bolitas',
            'Segunda pregunta: ¿es una pila, dos o más imanes, un objeto afilado o de más de cinco centímetros, o bolitas absorbentes?',
            ['SÍ', N('alert', 'Retirar siempre', 'En cualquier ubicación',
              'Esos se retiran siempre, estén donde estén.')],
            ['NO', N('ok', 'Observar + Rx cada 1–2 semanas', 'Romo, pequeño, asintomático',
              'Objeto romo y pequeño en un paciente asintomático: se observa, con radiografía cada una a dos semanas hasta que se elimine.')])])])]),
  },
};
