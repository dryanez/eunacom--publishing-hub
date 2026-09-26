// Clase 11.17 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-17).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-17',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'De la profilaxis correcta a la evisceración que no se puede esperar',
      say: 'Bienvenido. En la clase anterior vimos por qué aparece la fiebre según el día postoperatorio, y una de esas letras era Wound, la herida. Hoy nos metemos de lleno en esa herida: cómo se previene su infección, cómo se clasifica cuando ya aparece, y qué haces si la pared abdominal se abre por completo. Esta última es una urgencia real, así que préstale mucha atención a esa parte.',
    },

    {
      type: 'points',
      kicker: 'Prevención',
      title: 'Clasificación de la herida y profilaxis',
      cards: [
        { title: 'Según contaminación', tag: 'Cuatro clases', kind: 'key', items: [
          { t: 'Limpia', d: 'Sin abrir tubo digestivo ni vía urinaria',
            say: 'Toda herida se clasifica antes de operar, porque de ahí sale la decisión de dar o no antibióticos. La limpia es la que no abre el tubo digestivo, la vía biliar ni la urinaria, como una tiroidectomía.' },
          { t: 'Limpia contaminada', d: 'Abre el tubo digestivo en forma controlada',
            say: 'La limpia contaminada abre el tubo digestivo, la vía biliar o la urinaria, pero de forma programada y controlada, como una colecistectomía o una apendicectomía no complicada.' },
          { t: 'Contaminada y sucia', d: 'Derrame grosero o pus ya presente',
            say: 'La contaminada tiene un derrame grosero de contenido intestinal, y la sucia ya tiene pus libre, como una peritonitis por perforación. Ahí ya no hablamos de profilaxis, sino de tratamiento antibiótico.' },
        ] },
        { title: 'La profilaxis correcta', tag: 'Cefazolina', kind: 'pharma', items: [
          { t: 'Solo en limpia contaminada', d: 'La limpia casi nunca la necesita',
            say: 'La profilaxis antibiótica se da en la limpia contaminada y en la contaminada. La limpia no la necesita, salvo que se instale una malla o una prótesis.' },
          { t: 'Antes de la incisión', d: 'Entre treinta y sesenta minutos antes',
            say: 'Y el detalle que más se pregunta: se administra entre treinta y sesenta minutos antes de la incisión, no después, para que el antibiótico ya esté actuando cuando el cirujano corta.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clasificación',
      title: '¿Dónde está la infección en la herida?',
      nodes: [
        { id: 'ini', col: 0, row: 2, k: 'start', t: 'Fiebre y herida sospechosa', s: '¿Hasta dónde llega?' },
        { id: 'sup', col: 1, row: 0, k: 'risk', t: 'Piel y tejido subcutáneo', s: 'Infección incisional superficial' },
        { id: 'pro', col: 1, row: 2, k: 'risk', t: 'Fascia y músculo', s: 'Infección incisional profunda' },
        { id: 'org', col: 1, row: 4, k: 'alert', t: 'Cavidad manipulada', s: 'Infección de órgano o espacio' },
        { id: 'ts', col: 2, row: 0, k: 'good', t: 'Retirar puntos y drenar', s: 'Curación abierta' },
        { id: 'tp', col: 2, row: 2, k: 'good', t: 'Desbridar tejido no viable', s: 'Drenaje amplio' },
        { id: 'to', col: 2, row: 4, k: 'refer', t: 'Drenaje guiado por escáner', s: 'O nueva cirugía de aseo' },
      ],
      edges: [
        { from: 'ini', to: 'sup' }, { from: 'ini', to: 'pro' }, { from: 'ini', to: 'org' },
        { from: 'sup', to: 'ts' }, { from: 'pro', to: 'tp' }, { from: 'org', to: 'to' },
      ],
      steps: [
        { show: ['ini'], note: 'La profundidad decide el manejo',
          say: 'Ya con la infección instalada, lo que decide el manejo es qué tan profundo llega el compromiso.' },
        { show: ['sup', 'ts'], note: 'La más frecuente y la más simple',
          say: 'Si solo compromete la piel y el tejido subcutáneo, es una infección incisional superficial. Se retiran los puntos de esa zona, se abre y se drena, con curaciones abiertas después.' },
        { show: ['pro', 'tp'], note: 'Ya compromete la fascia',
          say: 'Si llega hasta la fascia o el músculo, es una infección incisional profunda, y ahí necesitas desbridar el tejido que ya no está viable, además del drenaje.' },
        { show: ['org', 'to'], note: 'La más grave, dentro del abdomen',
          say: 'Y si el compromiso está dentro de la cavidad que se manipuló, es una infección de órgano o espacio, como un absceso intraabdominal. Ahí el drenaje se hace guiado por escáner o ecografía, o con una nueva cirugía de aseo si no alcanza.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Dehiscencia',
      title: 'Cuando la pared abdominal se abre',
      cards: [
        { title: 'El signo que la anuncia', tag: 'Día cinco a ocho', kind: 'alert', items: [
          { t: 'Líquido rosado abundante', d: 'Se le llama agua de carne',
            say: 'Antes de la evisceración hay un aviso: la salida de un líquido rosado y abundante, que se conoce como agua de carne. Aparece típicamente entre el día cinco y el ocho.' },
          { t: 'Anuncia la fascia rota', d: 'No es un simple seroma',
            say: 'Ese signo casi siempre significa que la fascia por debajo ya cedió, y no es un seroma cualquiera. Fíjate bien en él, porque es la pista que se pregunta.' },
        ] },
        { title: 'Evisceración: qué haces', tag: 'Urgencia quirúrgica', kind: 'key', items: [
          { t: 'Cubrir con compresas tibias', d: 'Empapadas en suero fisiológico',
            say: 'Si las asas ya salieron por la herida, lo primero es cubrirlas con compresas estériles empapadas en suero fisiológico tibio, para que no se sequen ni se dañen.' },
          { t: 'Nunca reintroducirlas', d: 'Puedes perforar el intestino',
            say: 'Nunca intentes meter las asas de vuelta ahí mismo: puedes perforar el intestino o contaminar todavía más la cavidad.' },
          { t: 'Traslado urgente a pabellón', d: 'Con vía venosa y suero',
            say: 'Instala una vía venosa, pasa suero, y trasládalo de inmediato a pabellón para el cierre definitivo. No es algo que se pueda dejar para más tarde.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, desde la herida infectada hasta la evisceración.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Herida, profilaxis y dehiscencia',
      head: ['Situación', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Colecistectomía electiva', 'Cefazolina 30 a 60 minutos antes', 'Darla después de cerrar la piel'],
          say: 'Repasemos las trampas. En una colecistectomía electiva, la cefazolina se da entre treinta y sesenta minutos antes de la incisión. El error es administrarla después de terminar la cirugía.' },
        { cells: ['Hernioplastía con malla', 'Sí lleva profilaxis, aunque sea limpia', 'Omitirla por ser cirugía limpia'],
          say: 'En una hernioplastía con malla sí se da profilaxis, aunque la herida sea limpia, porque hay un cuerpo extraño de por medio. El error es omitirla solo por la clasificación.' },
        { cells: ['Infección superficial de la herida', 'Abrir y drenar', 'Partir con antibióticos sin drenar'],
          say: 'Frente a una infección superficial de la herida, la conducta es abrir y drenar. Partir con antibióticos sin drenar retrasa la curación.' },
        { cells: ['Líquido en agua de carne', 'Sospechar dehiscencia de fascia', 'Confundirlo con un seroma banal'],
          say: 'El líquido en agua de carne te obliga a sospechar una dehiscencia de fascia. El error es confundirlo con un seroma banal y no revisar la herida.' },
        { cells: ['Evisceración', 'Compresas húmedas + pabellón urgente', 'Reintroducir las asas en la cama'],
          say: 'Y ante una evisceración: compresas húmedas tibias y pabellón urgente. El error, el más grave de esta clase, es reintroducir las asas en la cama del paciente.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 68 años, obeso y con tos crónica por EPOC, operado hace 6 días de una laparotomía de urgencia por peritonitis apendicular. Mientras tose con fuerza, siente un dolor agudo en el abdomen. Al revisar la herida, el apósito está empapado de líquido serosanguinolento abundante, y se observan asas de intestino delgado protruyendo a través de la herida, con serosa enrojecida pero viable.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Reintroducir las asas manualmente y cerrar la piel con puntos gruesos' },
        { letter: 'B', text: 'Cubrir las asas con compresas estériles empapadas en suero tibio y trasladar a pabellón' },
        { letter: 'C', text: 'Aplicar un vendaje compresivo seco y mantener observación ambulatoria' },
        { letter: 'D', text: 'Instalar un sistema de aspiración negativa directo sobre las asas expuestas' },
        { letter: 'E', text: 'Indicar heparina de bajo peso molecular y solicitar un escáner de abdomen' },
      ],
      correct: 'B',
      explanation: 'Es una evisceración aguda, favorecida por la tos crónica y la peritonitis previa. Se cubren las asas con compresas estériles húmedas tibias para evitar su desecación y necrosis, sin intentar reintroducirlas, y se traslada de inmediato a pabellón para el cierre definitivo.',
      say: {
        stem: 'Vamos al caso. Hombre de sesenta y ocho años, obeso, con tos crónica por su EPOC, operado hace seis días de una laparotomía de urgencia por una peritonitis apendicular. Mientras tose con fuerza, siente un dolor agudo en el abdomen. Al revisar la herida, el apósito está empapado de un líquido rosado abundante, y se ven asas de intestino delgado saliendo por la herida, con la serosa enrojecida pero viable.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Las opciones: reintroducir las asas y cerrar la piel, cubrirlas con compresas tibias y trasladar a pabellón, aplicar un vendaje seco y observar, instalar aspiración directa sobre las asas, o dar anticoagulante y pedir un escáner. Piénsalo.',
        answer: 'La respuesta es la B. Es una evisceración: la tos crónica subió tanto la presión dentro del abdomen que rompió la fascia ya debilitada por la peritonitis previa. Cubres las asas con compresas húmedas tibias, para que no se sequen ni se necrosen, y trasladas de inmediato a pabellón. Reintroducirlas tú mismo es la trampa más peligrosa de esta pregunta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 11',
      stem: 'Mujer de 35 años consulta por dolor abdominal epigástrico recurrente. La ecografía abdominal muestra múltiples cálculos en la vesícula biliar, y se decide realizar una colecistectomía laparoscópica electiva.',
      question: '¿Cuál esquema antibiótico es de elección como profilaxis de infección de la herida operatoria?',
      options: [
        { letter: 'A', text: 'Amoxicilina con ácido clavulánico' },
        { letter: 'B', text: 'Ceftriaxona' },
        { letter: 'C', text: 'Clindamicina' },
        { letter: 'D', text: 'Cloxacilina' },
        { letter: 'E', text: 'Cefazolina' },
      ],
      correct: 'E',
      explanation: 'Toda cirugía limpia contaminada, como la colecistectomía electiva, requiere profilaxis antibiótica dirigida a cubrir cocáceas grampositivas y flora entérica. La cefazolina es el fármaco de elección en la mayoría de las cirugías abdominales, incluida esta.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Mujer de treinta y cinco años consulta por dolor epigástrico recurrente. La ecografía muestra múltiples cálculos en la vesícula, y se decide una colecistectomía laparoscópica electiva.',
        question: 'La pregunta es cuál esquema antibiótico es de elección como profilaxis de la infección de la herida operatoria.',
        options: 'Las opciones son: amoxicilina con ácido clavulánico, ceftriaxona, clindamicina, cloxacilina, o cefazolina. Piénsalo.',
        answer: 'La respuesta es la E, cefazolina. Esta cirugía es limpia contaminada, porque abre la vía biliar de forma programada, y ese es exactamente el grupo donde la profilaxis se indica. La cefazolina cubre bien la flora que importa aquí, y es la primera elección en la gran mayoría de las cirugías abdominales.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Profilaxis', tag: 'El momento importa', kind: 'pharma', items: [
          { t: 'Cefazolina en limpia contaminada', d: 'Treinta a sesenta minutos antes',
            say: 'Cerremos con las reglas de oro. La cefazolina se da en la cirugía limpia contaminada, entre treinta y sesenta minutos antes de la incisión.' },
          { t: 'Malla o prótesis', d: 'También lleva profilaxis',
            say: 'Y aunque la herida sea limpia, si hay malla o prótesis, también lleva profilaxis.' },
        ] },
        { title: 'Infección de la herida', tag: 'Drenar primero', kind: 'key', items: [
          { t: 'Abrir y drenar', d: 'Los antibióticos son un apoyo',
            say: 'Frente a la herida infectada, el pilar es abrir y drenar; los antibióticos son un apoyo, no el tratamiento principal.' },
        ] },
        { title: 'Evisceración', tag: 'No se improvisa', kind: 'alert', items: [
          { t: 'Compresas húmedas tibias', d: 'Y traslado urgente a pabellón',
            say: 'Y ante la evisceración: compresas húmedas tibias y traslado urgente a pabellón.' },
          { t: 'Nunca reintroducir las asas', d: 'En la sala o en la cama',
            say: 'Si te llevas una sola idea de hoy: nunca reintroduzcas las asas tú mismo, y nunca olvides que el agua de carne anuncia lo que viene. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Herida operatoria: de la prevención a la evisceración',
    root: N('start', 'Cirugía abdominal', '¿Qué tan sucia es la herida?',
      'Toda cirugía se clasifica antes de operar, porque de eso depende si se da profilaxis antibiótica, y esa misma herida es la que después puede complicarse.',
      ['', N('q', '¿Cómo se clasifica la herida?', 'Limpia · limpia contaminada · contaminada · sucia',
        'Cuatro categorías según cuánto se contamina la herida durante la cirugía.',
        ['Limpia contaminada', N('do', 'Cefazolina preincisional', 'Treinta a sesenta minutos antes',
          'Abre el tubo digestivo o la vía biliar de forma programada, como una colecistectomía: se da cefazolina entre treinta y sesenta minutos antes de la incisión.')],
        ['Limpia con malla', N('do', 'Cefazolina igual', 'Por el cuerpo extraño protésico',
          'Aunque sea limpia, si se instala una malla o una prótesis, también se da profilaxis, porque infectar ese material es una catástrofe.')],
        ['Ya hay fiebre y herida sospechosa', N('q', '¿Hasta dónde llega el compromiso?', 'Superficial · profunda · de órgano',
          'Con la infección ya instalada, el manejo depende de la profundidad que alcanza.',
          ['Superficial', N('ok', 'Retirar puntos y drenar', 'Curación abierta',
            'Compromete piel y tejido subcutáneo: se abre esa zona, se drena y se cura abierta.')],
          ['Profunda u órgano', N('alert', 'Desbridar o drenar guiado', 'Antibióticos si hay compromiso extenso',
            'Compromete fascia o la cavidad manipulada: se desbrida el tejido no viable, o se drena guiado por imágenes, sumando antibióticos si hay celulitis extensa o sepsis.')])],
        ['Líquido en agua de carne', N('alert', 'Sospecha de dehiscencia de fascia', 'Revisar la herida de inmediato',
          'Salida de líquido rosado abundante entre el día cinco y ocho: la fascia probablemente ya cedió por debajo, aunque la piel se vea intacta.')],
        ['Asas visibles en la herida', N('refer', 'Evisceración: pabellón urgente', 'Compresas húmedas tibias, nunca reintroducir',
          'Se cubren las asas con compresas estériles empapadas en suero tibio, nunca se reintroducen a la fuerza, y se traslada de inmediato a pabellón para el cierre definitivo.')])]),
  },
};
