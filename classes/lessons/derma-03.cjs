// Clase 16.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_dermatologia_bloque_1.cjs (derma-03).
// Pregunta real EUNACOM: node classes/scripts/class_questions.cjs --search "rosácea"
// -> EUNACOM Diciembre 2018 · Pregunta 61 (código 6.01.1.026, confianza 0.95).
// Las demás preguntas reales que devuelve el código 6.01.1.003 son de carcinomas cutáneos
// (basocelular/espinocelular) y no de rosácea: se descartan por no enseñar nada del tema.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-03',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La regla que descarta acné, los cuatro subtipos y la trampa del corticoide',
      say: 'Bienvenidos. Hoy vemos rosácea, y conectamos directo con la clase de acné: dos enfermedades que en la piel se pueden parecer, pero que se tratan distinto y que el examen ama contraponer. Es una dermatosis inflamatoria crónica y muy común del área centrofacial, que afecta sobre todo a mujeres adultas de piel clara. La perla que ordena todo el tema es una sola frase, cortita, y te la vas a llevar grabada: la rosácea nunca tiene comedones. Partamos por ahí.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Por qué se enrojece la cara',
      nodes: [
        { id: 'vas', col: 0, row: 0, k: 'cause', t: 'Disregulación vascular', s: 'Hiperreactividad de los vasos' },
        { id: 'inm', col: 0, row: 1, k: 'cause', t: 'Inmunidad innata alterada', s: 'Más catelicidina LL-37' },
        { id: 'dem', col: 0, row: 2, k: 'cause', t: 'Demodex folliculorum', s: 'Ácaro colonizador' },
        { id: 'des', col: 1, row: 1, k: 'mech', t: 'Desencadenantes', s: 'Sol, calor, alcohol, picantes, estrés' },
        { id: 'ros', col: 2, row: 1, k: 'effect', t: 'Rosácea', s: 'Eritema, flushing, pápulas o fima' },
      ],
      edges: [
        { from: 'vas', to: 'des' }, { from: 'inm', to: 'des' }, { from: 'dem', to: 'des' },
        { from: 'des', to: 'ros' },
      ],
      steps: [
        { show: ['vas'], note: 'La base es vascular',
          say: 'La rosácea combina tres cosas. Primero, una disregulación vascular: los vasos de la cara reaccionan de forma exagerada.' },
        { show: ['inm'], note: 'Inflamación de bajo grado',
          say: 'Segundo, una alteración de la inmunidad innata, con más producción de catelicidina, una molécula que favorece la inflamación.' },
        { show: ['dem'], note: 'Convive con todos, pero en la rosácea molesta más',
          say: 'Y tercero, la colonización por el ácaro Demodex folliculorum, que vive en la piel de casi todos, pero en la rosácea contribuye a la inflamación.' },
        { show: ['des'], note: 'Los que se preguntan en el examen',
          say: 'Sobre esa base, hay desencadenantes clásicos de las crisis, el llamado flushing o bochorno facial: la exposición solar, el calor ambiental, el alcohol, las comidas picantes o condimentadas, las bebidas calientes, los cambios bruscos de temperatura, y el estrés emocional. En el interrogatorio, preguntar por estos gatillantes es casi tan útil como el examen físico.' },
        { show: ['ros'], note: 'La regla de oro del tema',
          say: 'Y de ahí nace la rosácea. Pero antes de seguir, la regla de oro que no puedes olvidar: la rosácea nunca tiene comedones. Si el paciente tiene comedones, es acné, no rosácea, aunque el resto del cuadro se parezca.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Subtipos clínicos',
      title: 'Cuatro formas, cuatro tratamientos',
      cards: [
        { title: 'Eritematotelangiectásica', tag: 'Subtipo 1', kind: 'normal', items: [
          { t: 'Eritema fijo + flushing', d: 'Con telangiectasias finas',
            say: 'El subtipo uno, eritematotelangiectásico, tiene eritema centrofacial persistente, episodios de flushing, telangiectasias finas y sensación de ardor.' },
        ] },
        { title: 'Pápulo-pustulosa', tag: 'Subtipo 2 · sin comedones', kind: 'criteria', items: [
          { t: 'Pápulas y pústulas', d: 'Sobre el eritema de base, sin comedones',
            say: 'El subtipo dos, pápulo-pustuloso, típico en mujeres de treinta a cincuenta años, suma pápulas y pústulas sobre ese eritema, pero nunca comedones.' },
        ] },
        { title: 'Fimatosa y ocular', tag: 'Subtipos 3 y 4', kind: 'alert', items: [
          { t: 'Rinofima', d: 'Nariz bulbosa, hipertrofia sebácea y fibrosis',
            say: 'El subtipo tres es la fimatosa: hipertrofia de las glándulas sebáceas con fibrosis, casi siempre en la nariz de un hombre, dando el rinofima.' },
          { t: 'Ocular', d: 'Blefaritis, ojo con arenilla, hasta la mitad de los pacientes',
            say: 'Y el subtipo cuatro es el ocular, hasta en la mitad de los pacientes: blefaritis, ojo rojo, sensación de arenilla, y chalazión que se repite.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La trampa grave',
      title: 'Por qué el corticoide tópico está prohibido',
      nodes: [
        { id: 'cor', col: 0, row: 1, k: 'trap', t: 'Corticoide tópico', s: 'Parece prudente' },
        { id: 'mej', col: 1, row: 0, k: 'effect', t: 'Mejoría inicial engañosa', s: 'Vasoconstricción transitoria' },
        { id: 'reb', col: 2, row: 1, k: 'alert', t: 'Rebote al suspender', s: 'Rosácea esteroidal' },
        { id: 'dan', col: 3, row: 1, k: 'risk', t: 'Telangiectasias y atrofia', s: 'Brote pustuloso masivo' },
      ],
      edges: [
        { from: 'cor', to: 'mej' }, { from: 'mej', to: 'reb', label: 'al retirarlo' }, { from: 'reb', to: 'dan' },
      ],
      steps: [
        { show: ['cor'], note: 'La trampa más grave del tema',
          say: 'Y aquí viene la trampa más grave de toda la clase, la del corticoide tópico. Puede aparecer como alternativa tentadora, porque suena antiinflamatorio.' },
        { show: ['mej'], note: 'Blanquea la piel por vasoconstricción',
          say: 'Al inicio parece funcionar, porque produce vasoconstricción y la cara se ve menos roja.' },
        { show: ['reb'], note: 'El rebote es severo',
          say: 'Pero al suspenderlo aparece un rebote severo: es la llamada rosácea esteroidal, o una dermatitis perioral, de manejo mucho más difícil que la rosácea original.' },
        { show: ['dan'], note: 'Peor que el cuadro de partida',
          say: 'Con telangiectasias mucho más marcadas, atrofia de la piel y un brote pustuloso masivo. Por eso el corticoide tópico está formalmente contraindicado en rosácea, sin excepción.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Manejo médico por subtipo',
      cards: [
        { title: 'Medidas generales', tag: 'En todos los subtipos', kind: 'normal', items: [
          { t: 'Fotoprotección de amplio espectro', d: 'Factor 50 o más, todos los días',
            say: 'El tratamiento parte igual en todos los subtipos: fotoprotección solar de amplio espectro, factor cincuenta o más, todos los días, más emolientes suaves y evitar los desencadenantes.' },
        ] },
        { title: 'Eritema y flushing', tag: 'Subtipo 1', kind: 'pharma', items: [
          { t: 'Brimonidina tópica', d: 'Vasoconstrictor de acción temporal',
            say: 'Para el eritema y el flushing, brimonidina tópica, un agonista alfa dos que da vasoconstricción temporal, o láser vascular.' },
        ] },
        { title: 'Pápulo-pustulosa', tag: 'Subtipo 2', kind: 'pharma', items: [
          { t: 'Metronidazol o ivermectina tópica', d: 'Primera línea si es leve',
            say: 'Para la pápulo-pustulosa leve, metronidazol tópico o ivermectina tópica, que además actúa sobre el Demodex.' },
          { t: 'Doxiciclina oral en dosis antiinflamatoria', d: 'Si es moderada a severa, por 8 a 12 semanas',
            say: 'Si es moderada a severa o no responde, doxiciclina oral en dosis antiinflamatoria, por ocho a doce semanas.' },
        ] },
        { title: 'Fimatosa y ocular', tag: 'Subtipos 3 y 4', kind: 'alert', items: [
          { t: 'Rinofima: cirugía o láser', d: 'Resección con bisturí, electrocirugía o láser de dióxido de carbono',
            say: 'El rinofima ya establecido no responde a fármacos, porque el tejido está fibrosado. Se trata con resección quirúrgica, electrocirugía, o láser ablativo de dióxido de carbono, que remodela la forma de la nariz.' },
          { t: 'Ocular: higiene palpebral', d: 'Lágrimas artificiales y doxiciclina oral en dosis bajas',
            say: 'Y en la rosácea ocular, la base es la higiene de los párpados con compresas tibias, más lágrimas artificiales, y doxiciclina oral en dosis bajas por unas seis semanas si persiste la blefaritis.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora armemos el árbol completo de la rosácea, del diagnóstico al tratamiento.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Rosácea: lo que más se confunde',
      head: ['Situación', 'Correcto', 'Error frecuente'],
      rows: [
        { cells: ['Eritema facial con pápulas', 'Buscar comedones antes de decidir', 'Diagnosticar acné del adulto sin revisar'],
          say: 'Repasemos las trampas. Ante un eritema facial con pápulas, lo primero es buscar comedones. El error es diagnosticar acné del adulto sin haber revisado ese único dato.' },
        { cells: ['Rosácea pápulo-pustulosa leve', 'Metronidazol o ivermectina tópica', 'Corticoide tópico "para bajar la inflamación"'],
          say: 'En la rosácea pápulo-pustulosa leve, metronidazol o ivermectina tópica. El error más grave es el corticoide tópico, que parece razonable y termina empeorando todo.' },
        { cells: ['Rinofima establecido', 'Cirugía o láser ablativo', 'Insistir con tratamiento médico'],
          say: 'El rinofima ya establecido, con fibrosis, se trata con cirugía o láser, no con más crema: el tejido fibroso no responde a fármacos.' },
        { cells: ['Síntomas oculares con antecedente de rosácea', 'Higiene palpebral + doxiciclina oral', 'Tratarlo solo como conjuntivitis'],
          say: 'Y si un paciente con antecedente de rosácea tiene molestias oculares, piensa en la rosácea ocular: higiene de párpados y doxiciclina oral, no solo un colirio para conjuntivitis.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 38 años de tez clara consulta por enrojecimiento persistente en mejillas y nariz de 1 año de evolución, que empeora al tomar café caliente, beber vino tinto o salir al sol. En el último mes aparecieron pápulas y pústulas milimétricas en mejillas y dorso nasal, con telangiectasias visibles. No se identifican comedones en ninguna zona del rostro.',
      question: '¿Cuál es la conducta terapéutica más adecuada?',
      options: [
        { letter: 'A', text: 'Clobetasol tópico de alta potencia por 2 semanas' },
        { letter: 'B', text: 'Adapaleno tópico en monoterapia' },
        { letter: 'C', text: 'Fotoprotección, evitar desencadenantes y metronidazol tópico' },
        { letter: 'D', text: 'Doxiciclina oral 100 mg al día de forma indefinida' },
        { letter: 'E', text: 'Isotretinoína oral por su componente pustuloso' },
      ],
      correct: 'C',
      explanation: 'Eritema centrofacial que empeora con calor, alcohol y sol, con telangiectasias y pápulo-pústulas, sin comedones: rosácea pápulo-pustulosa. La primera línea es fotoprotección, evitar desencadenantes y metronidazol o ivermectina tópica. El corticoide está contraindicado; el adapaleno y la isotretinoína son de acné; la doxiciclina se reserva para formas moderadas-severas y por tiempo acotado.',
      say: {
        stem: 'Vamos al caso. Mujer de treinta y ocho años, de piel clara, con enrojecimiento persistente en mejillas y nariz desde hace un año, que empeora con el café caliente, el vino tinto o el sol. En el último mes aparecieron pápulas y pústulas pequeñas en las mejillas y el dorso nasal, con telangiectasias visibles. No hay comedones en ninguna parte de la cara.',
        question: '¿Cuál es la conducta terapéutica más adecuada?',
        options: 'Las opciones: clobetasol tópico, adapaleno tópico solo, fotoprotección con metronidazol tópico, doxiciclina indefinida, o isotretinoína. Piénsalo.',
        answer: 'Es la C. Sin comedones, con eritema que empeora por calor, alcohol y sol, es una rosácea pápulo-pustulosa, y la primera línea es exactamente eso: fotoprotección, evitar los gatillantes, y metronidazol o ivermectina tópica. El clobetasol es la trampa grave que ya vimos. El adapaleno y la isotretinoína son para acné, y aquí no hay comedones. Y la doxiciclina indefinida no corresponde: se usa por semanas, en formas más severas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 61',
      stem: 'Una paciente de 30 años consulta por aparición de eritema, pápulas y pústulas en ambas mejillas, de varios meses de evolución, que aumentan con la exposición solar.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Acné del adulto' },
        { letter: 'B', text: 'Rosácea' },
        { letter: 'C', text: 'Dermatomiositis' },
        { letter: 'D', text: 'Erupción polimorfa solar' },
        { letter: 'E', text: 'Lupus cutáneo crónico' },
      ],
      correct: 'B',
      explanation: 'Eritema con pápulas y pústulas en mejillas que empeora con el sol: rosácea. El acné del adulto tendría comedones; la dermatomiositis daría otros signos cutáneos y debilidad muscular; la erupción polimorfa solar no tiene pústulas; el lupus cutáneo crónico es una o más placas de curso más lento, sin tantas pústulas.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Mujer de treinta años, con eritema, pápulas y pústulas en ambas mejillas, de varios meses de evolución, que aumentan con la exposición al sol.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: acné del adulto, rosácea, dermatomiositis, erupción polimorfa solar, o lupus cutáneo crónico. Piénsalo.',
        answer: 'Es la B, rosácea. El enunciado no menciona comedones en ningún momento, y el empeoramiento claro con el sol calza con lo que vimos de los desencadenantes. El acné del adulto es la trampa más natural, pero exige comedones que aquí no aparecen. El lupus cutáneo crónico se ve como placas de curso lento, no como pústulas múltiples.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico diferencial', tag: 'Con acné', kind: 'key', items: [
          { t: 'La rosácea nunca tiene comedones', d: 'Si hay comedones, es acné',
            say: 'Cerremos con las reglas de oro. La rosácea nunca tiene comedones: si los hay, es acné, no rosácea.' },
        ] },
        { title: 'Tratamiento', tag: 'Por subtipo', kind: 'pharma', items: [
          { t: 'Eritema: brimonidina o láser', d: 'Pápulo-pustulosa: metronidazol o ivermectina',
            say: 'El eritema y el flushing se tratan con brimonidina tópica o láser vascular. La forma pápulo-pustulosa, con metronidazol o ivermectina tópica.' },
          { t: 'Rinofima: cirugía', d: 'No responde a fármacos',
            say: 'El rinofima ya establecido se trata con cirugía o láser, porque el tejido fibroso no responde a cremas ni pastillas.' },
        ] },
        { title: 'Contraindicación absoluta', tag: 'Sin excepción', kind: 'alert', items: [
          { t: 'Jamás corticoide tópico', d: 'Mejoría inicial, rebote destructivo después',
            say: 'Y jamás uses corticoide tópico en rosácea: mejora al principio, por vasoconstricción, y destruye después, con rebote y atrofia de la piel. Es un error que se ve incluso en la práctica real, no solo en el examen.' },
          { t: 'Evitar desencadenantes siempre', d: 'Sol, calor, alcohol y picantes',
            say: 'Si te llevas una sola idea de hoy: sin comedones, piensa en rosácea, evita el corticoide, y no olvides que evitar los desencadenantes vale para los cuatro subtipos. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Rosácea: del subtipo al tratamiento',
    root: N('start', 'Eritema centrofacial persistente', 'Adulto, con o sin flushing',
      'Ante un eritema centrofacial persistente, lo primero, antes de cualquier otra cosa, es buscar comedones.',
      ['', N('q', '¿Hay comedones?', 'Define acné o rosácea',
        'Si hay comedones, es acné, no rosácea, y se maneja como tal. Si no hay comedones, seguimos por rosácea.',
        ['Sí, hay comedones', N('refer', 'Es acné, no rosácea', 'Manejo según la clase de acné',
          'Con comedones el diagnóstico es acné vulgar, y se trata con el escalonamiento que ya vimos, no con el de rosácea.')],
        ['No hay comedones', N('q', '¿Cuál es el hallazgo dominante?', 'Eritema · pápulo-pústulas · fima · ocular',
          'Sin comedones, es rosácea. Ahora hay que ver qué subtipo domina el cuadro.',
          ['Eritema y telangiectasias', N('ok', 'Subtipo eritematotelangiectásico', 'Brimonidina tópica o láser vascular',
            'Eritema fijo, flushing y telangiectasias: subtipo eritematotelangiectásico. Brimonidina tópica o láser vascular, y fotoprotección siempre.')],
          ['Pápulas y pústulas', N('do', 'Subtipo pápulo-pustuloso', 'Metronidazol o ivermectina tópica',
            'Pápulas y pústulas sobre el eritema, sin comedones: metronidazol o ivermectina tópica; doxiciclina oral si es moderado a severo.')],
          ['Nariz bulbosa y fibrosa', N('alert', 'Subtipo fimatoso', 'Cirugía o láser ablativo',
            'Hipertrofia sebácea y fibrosis nasal, el rinofima: no responde a fármacos, se trata con cirugía o láser.')],
          ['Ojo rojo y arenilla', N('alert', 'Subtipo ocular', 'Higiene palpebral + doxiciclina oral. Y en cualquier subtipo: jamás corticoide tópico, mejora al inicio y da un rebote destructivo',
            'Blefaritis, ardor y chalazión recurrente: higiene de párpados, lágrimas artificiales y doxiciclina oral en dosis bajas. Y algo válido para los cuatro subtipos: nunca corticoide tópico, porque mejora al inicio por vasoconstricción y produce un rebote destructivo al suspenderlo.')])])]),
  },
};
