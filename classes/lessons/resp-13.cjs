// Clase 3.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-13).
// Preguntas reales: banco EUNACOM (books/data/real_questions_by_code.json).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-13',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Primario o secundario, pequeño o grande: qué decide observar, drenar u operar',
      say: 'Bienvenidos. Venimos de dos clases de líquido en la pleura, el derrame y el empiema. Hoy lo que entra a la pleura es aire: el neumotórax espontáneo. Es un tema que el examen pregunta mucho, y casi siempre con la misma lógica: si el neumotórax es primario o secundario, y si es pequeño o grande. Con esas dos preguntas decides si observas, drenas u operas.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Dos pacientes, dos neumotórax',
      nodes: [
        { id: 'jov', col: 0, row: 0, k: 'cause', t: 'Joven alto, delgado, fumador', s: 'Varón de 15 a 34 años' },
        { id: 'ble', col: 1, row: 0, k: 'mech', t: 'Rotura de blebs apicales', s: 'Bullas subpleurales pequeñas' },
        { id: 'nep', col: 2, row: 0, k: 'good', t: 'Neumotórax primario', s: 'Pulmón sano: buena tolerancia' },
        { id: 'epo', col: 0, row: 2, k: 'cause', t: 'Pulmón enfermo', s: 'EPOC con enfisema buloso, TBC, VIH' },
        { id: 'aire', col: 1, row: 1, k: 'mech', t: 'Aire en el espacio pleural', s: 'El pulmón se despega de la pared' },
        { id: 'nes', col: 2, row: 2, k: 'alert', t: 'Neumotórax secundario', s: 'Sin reserva: mala tolerancia' },
      ],
      edges: [
        { from: 'jov', to: 'ble' }, { from: 'ble', to: 'aire' }, { from: 'aire', to: 'nep', label: 'pulmón sano' },
        { from: 'epo', to: 'aire' }, { from: 'aire', to: 'nes', label: 'pulmón enfermo' },
      ],
      steps: [
        { show: ['jov'], note: 'El paciente típico del examen',
          say: 'Partamos por el paciente que el examen te va a describir una y otra vez: un hombre joven, entre quince y treinta y cuatro años, alto, delgado y fumador. Sin ninguna enfermedad pulmonar conocida.' },
        { show: ['ble'], note: 'Blebs: pequeñas bullas en el vértice',
          say: '¿Por qué él? Porque en el vértice del pulmón tiene pequeñas bullas bajo la pleura, que se llaman blebs. Un día, sin trauma y muchas veces en reposo, una de ellas se rompe.' },
        { show: ['aire'], note: 'Entra aire y el pulmón se despega',
          say: 'Por esa rotura entra aire al espacio pleural, y el pulmón se despega de la pared del tórax. Eso es el neumotórax.' },
        { show: ['nep'], note: 'Primario: sin enfermedad pulmonar previa',
          say: 'Cuando ocurre en un pulmón sano, lo llamamos neumotórax espontáneo primario. Y como el resto del pulmón funciona bien, el paciente lo tolera sorprendentemente bien: dolor en puntada y poca disnea.' },
        { show: ['epo'], note: 'Secundario: EPOC, TBC secuelar, Pneumocystis',
          say: 'El otro escenario es un pulmón que ya estaba enfermo. La causa principal es la EPOC con enfisema buloso, pero también la tuberculosis secuelar, el asma grave, el absceso o la neumonía por Pneumocystis jirovecii en el paciente con VIH.' },
        { show: ['nes'], note: 'Mismo aire, pero sin reserva: más grave',
          say: 'Eso es el neumotórax secundario. El aire es el mismo, pero el paciente no tiene reserva: un neumotórax pequeño puede llevarlo a la insuficiencia respiratoria. Por eso tiene mucha más morbimortalidad, y guarda esta idea, porque cambia toda la conducta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica y diagnóstico',
      title: '¿Cómo llega y cómo lo confirmas?',
      cards: [
        { title: 'Clínica', tag: 'Inicio súbito', kind: 'key', items: [
          { t: 'Dolor pleurítico súbito', d: 'Puntada de costado, a veces en reposo',
            say: 'El paciente consulta por un dolor torácico súbito, en puntada de costado, que aumenta con la inspiración. Muchas veces empezó estando en reposo, o haciendo deporte, y puede acompañarse de tos seca.' },
          { t: 'Murmullo pulmonar disminuido', d: 'Disnea leve si el pulmón es sano',
            say: 'Al examen, el murmullo pulmonar está disminuido en ese lado. Si es primario, la disnea es leve y la saturación suele estar normal. Fíjate que ese joven en buenas condiciones es justamente el que el examen pone en la pregunta.' },
        ] },
        { title: 'Radiografía de tórax', tag: 'Confirma y mide', kind: 'criteria', items: [
          { t: 'Línea de pleura visceral', d: 'Despegada de la pared costal',
            say: 'El diagnóstico se confirma con la radiografía de tórax. Lo que buscas es la línea de la pleura visceral, despegada de la pared costal.' },
          { t: 'Sin trama en la periferia', d: 'Ausencia de trama broncovascular',
            say: 'Y por fuera de esa línea, no hay trama broncovascular: solo aire. Pero la radiografía no solo confirma. También te da el dato que más importa para decidir: el tamaño.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Conducta',
      title: 'El tamaño y el tipo deciden la conducta',
      nodes: [
        { id: 'rx', col: 0, row: 1, k: 'start', t: 'Neumotórax en la radiografía', s: 'Medir la separación' },
        { id: 'tam', col: 1, row: 0, k: 'q', t: 'Primario: ¿qué tamaño?', s: 'Pequeño: < 2 cm en hilio o < 3 cm en vértice' },
        { id: 'peq', col: 2, row: 0, k: 'good', t: 'Pequeño y estable', s: 'Oxígeno + observar 4 a 6 horas' },
        { id: 'gra', col: 3, row: 0, k: 'refer', t: 'Grande o sintomático', s: 'Aspiración o tubo pleural' },
        { id: 'sec', col: 1, row: 2, k: 'alert', t: 'Secundario', s: 'Sin reserva funcional' },
        { id: 'tub', col: 2, row: 2, k: 'refer', t: 'Tubo pleural + hospitalizar', s: 'Casi siempre, aunque sea pequeño' },
      ],
      edges: [
        { from: 'rx', to: 'tam', label: 'primario' }, { from: 'tam', to: 'peq', label: '< 2 cm' }, { from: 'tam', to: 'gra', label: '≥ 2 cm' },
        { from: 'rx', to: 'sec', label: 'secundario' }, { from: 'sec', to: 'tub' },
      ],
      steps: [
        { show: ['rx'], note: 'Primero: ¿primario o secundario?',
          say: 'Ahora la parte que más se pregunta: qué hacer. Y aquí se juntan las dos ideas de la clase. La primera pregunta es si el neumotórax es primario o secundario.' },
        { show: ['tam'], note: 'Pequeño: menos de 2 cm en el hilio',
          say: 'Si es primario, lo que decide es el tamaño. Se considera pequeño cuando la separación entre la pleura y la pared es menor de dos centímetros a la altura del hilio, o menor de tres centímetros en el vértice. Si es de dos centímetros o más en el hilio, es grande.' },
        { show: ['peq'], note: 'Oxígeno a alto flujo y observación',
          say: 'Primario, pequeño y con el paciente estable: manejo conservador. Oxígeno por mascarilla y observación en urgencias por cuatro a seis horas. No se punciona ni se instala un tubo de entrada.' },
        { show: ['peq'], note: 'El oxígeno acelera la reabsorción',
          say: '¿Y por qué oxígeno si el paciente satura bien? Porque el oxígeno a alto flujo desnitrogena la sangre, y eso acelera la reabsorción del aire pleural: de uno coma veinticinco a cerca de cuatro por ciento al día. Esa pregunta se repite.' },
        { show: ['gra'], note: 'Grande o con síntomas: evacuar',
          say: 'En cambio, si es grande o el paciente tiene síntomas, hay que evacuar el aire. Puede ser una aspiración simple con catéter fino, o un tubo de drenaje torácico conectado a sello de agua o a una válvula de Heimlich.' },
        { show: ['sec'], note: 'El secundario no se mide igual',
          say: 'Y ahora vuelve la idea que te pedí guardar. En el neumotórax secundario, el tamaño pasa a segundo plano, porque el paciente no tiene reserva.' },
        { show: ['tub'], note: 'Trampa: observar a un EPOC',
          say: 'El secundario prácticamente siempre requiere tubo de drenaje pleural y hospitalización. Ojo con la trampa: un EPOC con un neumotórax pequeño no se va a observar con oxígeno como el joven. Ese es el error que el examen busca.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cirugía',
      title: '¿Cuándo se opera? VATS y pleurodesis',
      cards: [
        { title: 'Por qué operar', tag: 'Recurrencia', kind: 'key', items: [
          { t: 'Recurre 30 % tras el primero', d: 'Más de 50 % tras el segundo',
            say: 'El problema del neumotórax primario es que vuelve. Después de un primer episodio recurre cerca del treinta por ciento, y después de un segundo, más de la mitad. Por eso existe la cirugía preventiva.' },
          { t: 'VATS: resecar blebs + pleurodesis', d: 'Química o mecánica',
            say: 'Se hace por videotoracoscopía, que abreviamos VATS: se resecan los blebs y se hace una pleurodesis, química o mecánica, que pega la pleura al pulmón para que no se vuelva a despegar.' },
        ] },
        { title: 'Indicaciones', tag: 'Se preguntan', kind: 'alert', items: [
          { t: 'Segundo episodio homolateral', d: 'La indicación clásica',
            say: 'La indicación clásica, la que más se pregunta, es el segundo episodio en el mismo lado.' },
          { t: 'Contralateral o bilateral', d: 'Primer episodio contralateral o bilateral sincrónico',
            say: 'También se opera el primer neumotórax del lado contrario, y el neumotórax bilateral sincrónico, porque ahí el riesgo es quedarse sin ningún pulmón funcionando.' },
          { t: 'Fuga aérea persistente', d: 'Burbujeo después de 48 a 72 horas',
            say: 'Luego, la fuga aérea persistente: si el tubo sigue burbujeando después de cuarenta y ocho a setenta y dos horas de drenaje, el agujero no se va a cerrar solo.' },
          { t: 'Profesiones de riesgo', d: 'Pilotos comerciales, buzos profesionales',
            say: 'Y por último, las profesiones de riesgo, como pilotos comerciales o buzos profesionales, donde un neumotórax en el trabajo puede ser fatal. Fíjate que el primer episodio que se resolvió bien no está en la lista.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Primario vs secundario',
      head: ['Característica', 'Primario', 'Secundario'],
      rows: [
        { cells: ['Paciente típico', 'Varón joven, alto, delgado, fumador', 'Mayor de 60 con enfermedad pulmonar'],
          say: 'Repasemos el contraste que más se pregunta. El primario es el varón joven, alto, delgado y fumador; el secundario, el adulto mayor de sesenta años con una enfermedad pulmonar crónica.' },
        { cells: ['Causa', 'Rotura de blebs apicales', 'EPOC, fibrosis, TBC, P. jirovecii'],
          say: 'En el primario la causa es la rotura de blebs; en el secundario, la EPOC con enfisema, la fibrosis, la tuberculosis secuelar o el Pneumocystis.' },
        { cells: ['Tolerancia', 'Buena: dolor, disnea leve', 'Mala: insuficiencia respiratoria'],
          say: 'El primario se tolera bien, con dolor y disnea leve. El secundario se tolera mal, con insuficiencia respiratoria e inestabilidad frecuente.' },
        { cells: ['Si es pequeño', 'Oxígeno + observación', 'Tubo pleural casi siempre'],
          say: 'Y aquí está la trampa: si es pequeño, el primario se observa con oxígeno, pero el secundario lleva tubo pleural casi siempre.' },
        { cells: ['Recurrencia', '30 %; más de 50 % tras el segundo', 'Más de 50 %, alta mortalidad'],
          say: 'La recurrencia del primario es cerca del treinta por ciento, y pasa la mitad después del segundo episodio. En el secundario supera la mitad, y con alta mortalidad.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 68 años con EPOC con enfisema buloso consulta por disnea y dolor torácico derecho súbito. FR 26/min, SatO2 88 %, PA 130/80 mmHg. La radiografía de tórax muestra un neumotórax derecho con separación de 1,5 cm a nivel del hilio, sin desviación mediastínica.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Oxígeno por mascarilla y observación por 4 a 6 horas' },
        { letter: 'B', text: 'Alta con control radiológico en 24 horas' },
        { letter: 'C', text: 'Instalar tubo de drenaje pleural y hospitalizar' },
        { letter: 'D', text: 'Punción descompresiva en el 2.º espacio intercostal' },
        { letter: 'E', text: 'Videotoracoscopía con pleurodesis de urgencia' },
      ],
      correct: 'C',
      explanation: 'Neumotórax espontáneo secundario (EPOC con enfisema buloso). Aunque mide menos de 2 cm, el paciente no tiene reserva funcional: casi siempre requiere tubo de drenaje pleural y hospitalización. La observación con oxígeno es para el primario pequeño y estable; la punción es del neumotórax a tensión.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y ocho años, con EPOC y enfisema buloso, consulta por disnea y dolor torácico derecho de inicio súbito. Respira veintiséis veces por minuto y satura ochenta y ocho por ciento, con presión normal. La radiografía muestra un neumotórax derecho de uno coma cinco centímetros en el hilio, sin desviación del mediastino.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: oxígeno y observación por cuatro a seis horas, alta con control radiológico, tubo pleural y hospitalización, punción descompresiva, o videotoracoscopía de urgencia. Piénsalo.',
        answer: 'Es la C. El tamaño te tienta, porque mide menos de dos centímetros. Pero la primera pregunta no es el tamaño, es el tipo: este paciente tiene EPOC, así que es un neumotórax secundario, y ya está desaturado. Sin reserva, va a tubo pleural y hospitalización. La A sería correcta en el joven sano. Y la punción es del neumotórax a tensión, que no tiene: está estable y sin desviación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 80',
      stem: 'Paciente de 18 años, sin antecedentes mórbidos, es traído al servicio de urgencias por cuadro de dolor en hemitórax izquierdo de inicio súbito irradiado a miembro superior ipsilateral, asociado a disnea leve, el cual inició mientras jugaba un partido de basquetbol. Al examen físico se aprecia en buenas condiciones y a la auscultación pulmonar destaca disminución del murmullo pulmonar en hemitórax izquierdo, sin otros síntomas.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Angina inestable' },
        { letter: 'B', text: 'Tromboembolismo pulmonar' },
        { letter: 'C', text: 'Neumotorax espontáneo' },
        { letter: 'D', text: 'Perforación esofágica' },
        { letter: 'E', text: 'Contractura muscular' },
      ],
      correct: 'C',
      explanation: 'Joven sano, dolor torácico súbito con disnea leve, en buenas condiciones y con murmullo pulmonar disminuido en un hemitórax: neumotórax espontáneo (primario). La asimetría del murmullo es el dato que descarta la contractura muscular.',
      say: {
        stem: 'Ahora preguntas reales. La primera es del EUNACOM de julio de dos mil trece. Paciente de dieciocho años, sin antecedentes, con dolor súbito en el hemitórax izquierdo, irradiado al brazo, y disnea leve, que empezó jugando básquetbol. Está en buenas condiciones y tiene el murmullo pulmonar disminuido a izquierda.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: angina inestable, tromboembolismo pulmonar, neumotórax espontáneo, perforación esofágica o contractura muscular. Piénsalo.',
        answer: 'Es la C, neumotórax espontáneo. Es el paciente típico: joven, sano, dolor súbito y disnea leve. El distractor tentador es la contractura muscular, porque empezó haciendo deporte, pero una contractura no te disminuye el murmullo pulmonar. Ese dato del examen físico es el que te da la respuesta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 143',
      stem: 'Un paciente de 19 años consulta por dolor torácico derecho, de 24 horas de evolución, que aumenta con la inspiración. Al examen físico, se aprecia disminución del murmullo pulmonar en el lado derecho. Se solicita una radiografía, que se muestra a continuación: [radiografía: neumotórax derecho extenso].',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Control radiológico en 24 horas' },
        { letter: 'B', text: 'Solicitar TAC de tórax' },
        { letter: 'C', text: 'Realizar cirugía abierta' },
        { letter: 'D', text: 'Drenaje con tubo pleural' },
        { letter: 'E', text: 'Videotoracoscopía' },
      ],
      correct: 'D',
      explanation: 'La radiografía mostraba un neumotórax derecho grande. Neumotórax primario grande: se evacúa el aire con aspiración o tubo pleural. La videotoracoscopía no se indica en un primer episodio salvo fuga persistente u otra indicación.',
      say: {
        stem: 'La siguiente es del EUNACOM de diciembre de dos mil dieciocho. Paciente de diecinueve años con un día de dolor torácico derecho que aumenta con la inspiración, y murmullo disminuido a derecha. La radiografía mostraba un neumotórax derecho extenso.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: control radiológico en veinticuatro horas, TAC de tórax, cirugía abierta, drenaje con tubo pleural, o videotoracoscopía. Piénsalo.',
        answer: 'Es la D, drenaje con tubo pleural. Es un neumotórax primario, pero grande, así que hay que evacuar el aire. El distractor tentador es la videotoracoscopía, pero es un primer episodio: la cirugía queda para la recurrencia, la fuga persistente y las otras indicaciones que vimos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 93',
      stem: 'Un paciente de 28 años consulta por dolor torácico derecho, de 2 días de evolución, que aumenta con la inspiración y con la actividad física. Al examen físico está eupneico, con FR: 15x’, saturación de oxígeno normal, se aprecia disminución del murmullo pulmonar mayor en el lado derecho. Se solicita una radiografía, que se muestra a continuación: [radiografía: neumotórax derecho pequeño, sin colapso pulmonar].',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Control radiológico en 24 horas' },
        { letter: 'B', text: 'Solicitar TAC de tórax' },
        { letter: 'C', text: 'Realizar cirugía abierta' },
        { letter: 'D', text: 'Drenaje con tubo pleural' },
        { letter: 'E', text: 'Realizar videotoracoscopía' },
      ],
      correct: 'A',
      explanation: 'Mismas alternativas que la pregunta anterior, pero ahora el neumotórax es pequeño, sin colapso pulmonar, en un paciente eupneico y con saturación normal que lleva 2 días sin agravarse: manejo conservador con control radiológico.',
      say: {
        stem: 'Y fíjate en esta, del EUNACOM de agosto de dos mil veintiuno, porque es casi la misma. Paciente de veintiocho años con dos días de dolor torácico derecho pleurítico. Está eupneico, satura normal, y tiene el murmullo disminuido a derecha. Esta vez la radiografía mostraba un neumotórax pequeño, sin colapso del pulmón.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas son las mismas de antes: control radiológico en veinticuatro horas, TAC, cirugía abierta, tubo pleural o videotoracoscopía. Piénsalo.',
        answer: 'Ahora es la A, control radiológico. Mismas alternativas, respuesta distinta, y lo único que cambió es el tamaño. Primario, pequeño, estable y sin empeorar en dos días: manejo conservador. El tubo pleural, que antes era correcto, aquí sobra. Así te lo pregunta el examen: el tamaño decide.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Primero, el tipo', tag: 'Primario o secundario', kind: 'key', items: [
          { t: 'Primario: joven, alto, delgado', d: 'Blebs apicales, buena tolerancia',
            say: 'Cerremos con las reglas de oro. El primario es el joven alto, delgado y fumador, por rotura de blebs, y lo tolera bien.' },
          { t: 'Secundario: tubo casi siempre', d: 'EPOC sin reserva, aunque sea pequeño',
            say: 'El secundario, sobre todo en la EPOC, va a tubo pleural y hospitalización casi siempre, aunque sea pequeño.' },
        ] },
        { title: 'Luego, el tamaño', tag: 'En el primario', kind: 'pharma', items: [
          { t: 'Pequeño: oxígeno + observar', d: 'Menos de 2 cm en el hilio',
            say: 'En el primario manda el tamaño. Pequeño y estable: oxígeno a alto flujo y observación, porque el oxígeno acelera la reabsorción.' },
          { t: 'Grande o sintomático: evacuar', d: 'Aspiración o tubo pleural',
            say: 'Grande o con síntomas: aspiración o tubo pleural.' },
        ] },
        { title: 'Cirugía', tag: 'VATS + pleurodesis', kind: 'alert', items: [
          { t: 'Segundo episodio homolateral', d: 'O fuga aérea de más de 48 a 72 h',
            say: 'Y se opera por videotoracoscopía con pleurodesis ante el segundo episodio en el mismo lado o la fuga aérea persistente. Si te llevas una sola idea de hoy: primero pregunta si el pulmón era sano, y solo entonces mira el tamaño. En la próxima clase veremos el neumotórax que no da tiempo para medir nada: el neumotórax a tensión. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Neumotórax espontáneo: tipo, tamaño y cirugía',
    root: N('start', 'Dolor pleurítico súbito', 'Murmullo disminuido en un lado',
      'Paciente con dolor torácico súbito en puntada y murmullo disminuido en un hemitórax. La radiografía confirma el neumotórax, y ahora hay que decidir.',
      ['', N('q', '¿Quién es el paciente?', 'Estable o no · pulmón sano o enfermo',
        'Antes de medir nada, mira al paciente. ¿Está estable? Y si lo está, ¿su pulmón era sano, o tiene una EPOC u otra enfermedad pulmonar?',
        ['Shock, tráquea desviada', N('alert', 'Neumotórax a tensión', 'Descompresión inmediata',
          'Si está en shock y con la tráquea desviada, no es este tema: es un neumotórax a tensión, que vemos en la próxima clase. No se espera nada; se descomprime.')],
        ['Pulmón enfermo', N('refer', 'Secundario', 'Tubo pleural + hospitalizar',
          'Pulmón enfermo: neumotórax secundario. Sin reserva funcional, va a tubo pleural y hospitalización casi siempre, aunque sea pequeño.')],
        ['Pulmón sano', N('q', 'Primario: ¿tamaño?', '< 2 cm en hilio o < 3 cm en vértice',
          'Pulmón sano: neumotórax primario, y ahora sí manda el tamaño. Pequeño es menos de dos centímetros en el hilio, o menos de tres en el vértice.',
          ['Pequeño y estable', N('ok', 'Oxígeno + observar 4 a 6 h', 'Control radiológico',
            'Pequeño y estable: oxígeno a alto flujo y observación por cuatro a seis horas, con control radiológico.')],
          ['Grande o sintomático', N('do', 'Aspiración o tubo pleural', 'Sello de agua o válvula de Heimlich',
            'Grande o con síntomas: se evacua el aire con aspiración simple o tubo pleural.')],
          ['Recurrencia o fuga', N('refer', 'VATS + pleurodesis', '2.º episodio homolateral · fuga > 48–72 h',
            'Y si es el segundo episodio en el mismo lado, o el tubo sigue burbujeando pasadas las cuarenta y ocho a setenta y dos horas, se deriva a videotoracoscopía con pleurodesis.')])])]),
  },
};
