// Clase 21.9 — guion docente escrito a mano (ver gastro-01.cjs, gastro-02.cjs y sp-08.cjs para el formato).
// Fuente: books/scripts/dataset_saludpublica.cjs (sp-09).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'sp-09',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Azar versus sesgo, la variable de confusión y el único criterio obligatorio para hablar de causa',
      say: 'Bienvenidos. Hoy vemos cómo se evalúa si una asociación estadística es real: validez, causalidad, sesgos y confusión. Es un tema de alta frecuencia en el EUNACOM, porque casi siempre trae una pregunta sobre reconocer un tipo de sesgo específico, o sobre el único criterio de causalidad que es obligatorio. Partamos por la distinción que ordena todo lo demás.',
    },

    {
      type: 'points',
      kicker: 'La distinción de base',
      title: 'Error aleatorio versus error sistemático',
      cards: [
        { title: 'Error aleatorio', tag: 'Es azar, se arregla con más muestra', kind: 'normal', items: [
          { t: 'Variabilidad biológica y muestral', d: 'Afecta la precisión, no la tendencia',
            say: 'Cuando encuentras una asociación en un estudio, lo primero es preguntarte si es real o es un error. El error aleatorio es pura variabilidad del azar: afecta la precisión del resultado, pero no lo desvía sistemáticamente en una dirección.' },
          { t: 'Se reduce aumentando la muestra', d: 'Se mide con el valor p y el intervalo de confianza',
            say: 'Y lo importante para el examen: el error aleatorio se reduce aumentando el tamaño de la muestra, y se cuantifica con el valor p y el intervalo de confianza del noventa y cinco por ciento.' },
        ] },
        { title: 'Error sistemático', tag: 'Es sesgo, no se arregla con más muestra', kind: 'alert', items: [
          { t: 'Falla del diseño o la recolección', d: 'Desvía los resultados siempre en la misma dirección',
            say: 'El error sistemático, o sesgo, es distinto: es una falla en el diseño, en el reclutamiento o en el análisis, que desvía los resultados siempre hacia el mismo lado. No es mala suerte, es un problema de método.' },
          { t: 'No se corrige con más muestra', d: 'Afecta la validez interna del estudio',
            say: 'Y aquí está la trampa clásica del examen: por mucho que aumentes el número de pacientes, el sesgo no desaparece, porque el error está en cómo se construyó el estudio. El sesgo afecta la validez interna, y si la validez interna está comprometida, ni siquiera vale la pena preguntarse si el resultado se puede generalizar a otra población.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Sesgos de selección',
      title: 'Cuando los grupos que comparas no son comparables',
      cards: [
        { title: 'Sesgo de Berkson', tag: 'Admisión hospitalaria', kind: 'key', items: [
          { t: 'Casos y controles reclutados en el hospital', d: 'No representan a la comunidad general',
            say: 'El primer grupo son los sesgos de selección: ocurren cuando los grupos de estudio se arman de una forma que ya no son comparables entre sí. El más preguntado es el sesgo de Berkson, o de admisión hospitalaria: si eliges tus casos y tus controles solo entre pacientes hospitalizados, sus tasas de exposición y de otras enfermedades no representan a la comunidad general.' },
        ] },
        { title: 'Trabajador sano y voluntario', tag: 'La muestra se autoselecciona', kind: 'normal', items: [
          { t: 'Trabajadores activos: menos morbilidad', d: 'La población general incluye enfermos y jubilados',
            say: 'El sesgo del trabajador sano aparece cuando comparas trabajadores activos con la población general: los trabajadores activos, por definición, están sanos para trabajar, así que muestran menos morbilidad que una población general que incluye a los desempleados, los enfermos y los jubilados.' },
          { t: 'Voluntarios: más sanos que el promedio', d: 'Se ofrecen porque ya cuidan más su salud',
            say: 'Y el sesgo del voluntario, muy parecido: quien se ofrece a participar en un estudio suele tener un estilo de vida más sano y más interés por su salud que quien no se ofrece. En los tres casos, el problema es el mismo: el grupo que estudiaste no se parece al grupo que quieres describir.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Sesgos de información',
      title: 'Cuando la falla está en medir, no en elegir',
      cards: [
        { title: 'Sesgo de memoria', tag: 'El clásico de casos y controles', kind: 'alert', items: [
          { t: 'El enfermo recuerda mejor su exposición pasada', d: 'El sano casi no recuerda lo mismo',
            say: 'El segundo grupo son los sesgos de información: aquí el problema no es a quién eligiste, sino cómo mediste. El más preguntado es el sesgo de memoria, típico de los estudios de casos y controles: el paciente enfermo hace un esfuerzo mucho mayor por recordar sus exposiciones pasadas que el paciente sano, porque está buscando una explicación a su enfermedad.' },
        ] },
        { title: 'Entrevistador y vigilancia', tag: 'La falla está en quien mide', kind: 'normal', items: [
          { t: 'El entrevistador indaga más si conoce el diagnóstico', d: 'Se previene cegando al evaluador',
            say: 'El sesgo del entrevistador ocurre cuando quien aplica la encuesta pregunta con más insistencia por la exposición si ya sabe que ese paciente es un caso. Y el sesgo de vigilancia o detección aparece en los pacientes que tienen un factor de riesgo conocido: como se les controla más seguido, se les detectan más enfermedades asintomáticas, no porque tengan más enfermedad, sino porque se les buscó más.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Confusión',
      title: 'La variable de confusión: el ejemplo del café y el cáncer',
      nodes: [
        { id: 'cafe', col: 0, row: 1, k: 'cause', t: 'Consumo de café', s: 'Exposición estudiada' },
        { id: 'tab', col: 1, row: 0, k: 'trap', t: 'Tabaquismo', s: 'Asociado al café y causa real' },
        { id: 'canc', col: 2, row: 1, k: 'effect', t: 'Cáncer de páncreas', s: 'El desenlace' },
        { id: 'est', col: 3, row: 1, k: 'good', t: 'Análisis estratificado', s: 'Separa fumadores de no fumadores' },
        { id: 'des', col: 4, row: 1, k: 'refer', t: 'La asociación desaparece', s: 'El café no era la causa' },
      ],
      edges: [
        { from: 'cafe', to: 'canc', label: 'asociación aparente' },
        { from: 'tab', to: 'cafe', label: 'asociado a' },
        { from: 'tab', to: 'canc', label: 'causa real' },
        { from: 'canc', to: 'est' },
        { from: 'est', to: 'des' },
      ],
      steps: [
        { show: ['cafe', 'canc'], note: 'Café y cáncer de páncreas parecen asociados',
          say: 'Ahora la confusión, que es un fenómeno distinto al sesgo. Un estudio observa que las personas que toman café tienen más cáncer de páncreas. A primera vista, parece una asociación causal.' },
        { show: ['tab'], note: 'El tabaquismo cumple los tres requisitos de un confusor',
          say: 'Pero aparece una tercera variable, el tabaquismo, que cumple los tres requisitos para ser un factor de confusión: está asociado al café, porque los fumadores suelen tomar más café; es un factor de riesgo independiente para el cáncer de páncreas; y no es un paso intermedio en el camino entre el café y el cáncer, es una causa aparte.' },
        { show: ['est', 'des'], note: 'Controlar el confusor deshace la asociación falsa',
          say: 'Cuando controlas esa variable con un análisis estratificado, separando fumadores de no fumadores, la asociación entre el café y el cáncer desaparece. Eso confirma que el tabaquismo era el verdadero confusor, y el café nunca fue la causa. Y esto también se controla desde el diseño: con aleatorización en un ensayo clínico, con restricción, incluyendo solo un tipo de sujeto, o con emparejamiento por edad y sexo entre casos y controles.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios de Bradford Hill',
      title: 'Evaluar si una asociación es causal',
      cards: [
        { title: 'Temporalidad', tag: 'El único criterio obligatorio', kind: 'key', items: [
          { t: 'La causa precede al efecto', d: 'Sin excepción, sine qua non',
            say: 'Cuando ya descartaste el azar, el sesgo y la confusión, queda evaluar si la asociación es realmente causal. Para eso, Austin Bradford Hill propuso nueve criterios, pero solo uno es absolutamente obligatorio: la temporalidad. La exposición tiene que haber ocurrido antes que la enfermedad. Si la enfermedad ya existía antes de la exposición, la causalidad queda descartada, sin excepción.' },
        ] },
        { title: 'Criterios de apoyo', tag: 'Suman evidencia, no son obligatorios', kind: 'normal', items: [
          { t: 'Fuerza y dosis respuesta', d: 'Mayor riesgo relativo, mayor dosis, más daño',
            say: 'Los demás criterios suman evidencia, pero su ausencia no descarta la causalidad por sí sola. La fuerza de la asociación es la magnitud del riesgo relativo o del odds ratio. El gradiente biológico, o relación dosis respuesta, es que a mayor dosis o tiempo de exposición, mayor es el daño.' },
          { t: 'Plausibilidad y consistencia', d: 'Tiene sentido biológico y se repite en otros estudios',
            say: 'La plausibilidad biológica exige que la relación tenga sentido con lo que ya sabemos del organismo. Y la consistencia es que la asociación se repita en distintos estudios y poblaciones.' },
          { t: 'Cesación de la exposición', d: 'Si retiras la causa, el efecto disminuye',
            say: 'Y un criterio que se pregunta específicamente es la evidencia experimental, o cesación de la exposición: si retiras la causa, el efecto disminuye. Por eso erradicar el Helicobacter pylori y ver que baja la recidiva de la úlcera es evidencia de causalidad, y corresponde justamente a ese criterio de cesación, no a la fuerza de la asociación.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos todo en un solo árbol, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Reconocer el sesgo por su mecanismo',
      head: ['Tipo de sesgo', 'Mecanismo del error', 'Diseño más vulnerable', 'Cómo se controla'],
      rows: [
        { cells: ['Sesgo de Berkson', 'Casos y controles reclutados en el hospital', 'Casos y controles hospitalarios', 'Controles de base comunitaria'],
          say: 'Repasemos con la tabla final. El sesgo de Berkson se reconoce porque casos y controles salen del hospital: se controla eligiendo controles de base comunitaria.' },
        { cells: ['Sesgo de memoria', 'El enfermo recuerda mejor su exposición pasada', 'Casos y controles', 'Registros objetivos o cegar al paciente'],
          say: 'El sesgo de memoria se reconoce por la palabra clave recuerdo, siempre en casos y controles: se controla con registros médicos objetivos, no con lo que el paciente dice que recuerda.' },
        { cells: ['Sesgo del entrevistador', 'El evaluador indaga más si conoce el diagnóstico', 'Casos y controles o cohortes', 'Cegamiento riguroso del evaluador'],
          say: 'El sesgo del entrevistador se reconoce porque quien aplica la encuesta sabe a qué grupo pertenece el paciente: se controla cegando al evaluador.' },
        { cells: ['Factor de confusión', 'Tercera variable asociada a la exposición y causa independiente', 'Todos los observacionales', 'Estratificación o análisis multivariado'],
          say: 'Y la confusión se reconoce porque aparece una tercera variable, asociada a la exposición y causa independiente de la enfermedad, sin ser un paso intermedio: se controla con estratificación o con un análisis multivariado.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Estudio retrospectivo de casos y controles evalúa si el consumo de antibióticos en el primer trimestre del embarazo se asocia a cardiopatías congénitas. Se entrevista a madres de 100 niños con cardiopatías complejas y a 200 madres de niños sanos. Las madres de los niños con cardiopatía recuerdan con detalle haber tomado fármacos durante la gestación, mientras que las madres de niños sanos no recuerdan haber tomado medicamentos, a pesar de que sí constaba en sus fichas clínicas.',
      question: '¿A qué tipo de sesgo corresponde esta situación?',
      options: [
        { letter: 'A', text: 'Sesgo de memoria' },
        { letter: 'B', text: 'Sesgo de Berkson' },
        { letter: 'C', text: 'Factor de confusión' },
        { letter: 'D', text: 'Sesgo del trabajador sano' },
        { letter: 'E', text: 'Error aleatorio' },
      ],
      correct: 'A',
      explanation: 'Es el sesgo de memoria, típico de los estudios de casos y controles: las madres de niños enfermos recuerdan y reportan la exposición con más detalle que las madres de niños sanos, sobreestimando falsamente el riesgo, incluso cuando la ficha clínica muestra que ambos grupos estuvieron igualmente expuestos.',
      say: {
        stem: 'Vamos con un caso. Un estudio retrospectivo de casos y controles evalúa si tomar antibióticos en el primer trimestre del embarazo se asocia a cardiopatías congénitas. Se entrevista a las madres de cien niños con cardiopatías complejas y a doscientas madres de niños sanos. Las madres de los niños con cardiopatía recuerdan con detalle haber tomado fármacos durante el embarazo, mientras que las madres de niños sanos no recuerdan haber tomado nada, aunque sí constaba en sus fichas clínicas.',
        question: '¿A qué tipo de sesgo corresponde esta situación?',
        options: 'Las opciones: sesgo de memoria, sesgo de Berkson, factor de confusión, sesgo del trabajador sano, o error aleatorio. Piénsalo.',
        answer: 'Es la A, sesgo de memoria. Fíjate en la palabra clave: recuerdan. Las madres de los niños enfermos hacen un esfuerzo mayor por recordar exposiciones pasadas que las madres de niños sanos, y eso infla artificialmente la asociación. No es confusión, porque acá no hay una tercera variable distinta a la exposición que estás midiendo: el problema está en cómo se midió el recuerdo, no en a quién elegiste ni en una variable externa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 68',
      stem: 'Según los criterios de causalidad de Bradford Hill, se pregunta cuál es el requisito indispensable para establecer una asociación causal.',
      question: '¿Cuál es requisito para establecer una asociación causal?',
      options: [
        { letter: 'A', text: 'Fuerza de asociación' },
        { letter: 'B', text: 'Plausibilidad biológica' },
        { letter: 'C', text: 'Respuesta dosis dependiente' },
        { letter: 'D', text: 'Secuencia temporal' },
        { letter: 'E', text: 'Asociación estadística' },
      ],
      correct: 'D',
      explanation: 'La secuencia temporal es el único criterio de Bradford Hill absolutamente indispensable: si la causa no antecede al efecto, no puede ser la causa. Los demás criterios refuerzan la sospecha de causalidad, pero ninguno es obligatorio por sí solo.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Según los criterios de causalidad de Bradford Hill, preguntan cuál es el requisito indispensable para establecer una asociación causal.',
        question: '¿Cuál es requisito para establecer una asociación causal?',
        options: 'Las opciones: fuerza de asociación, plausibilidad biológica, respuesta dosis dependiente, secuencia temporal, o asociación estadística.',
        answer: 'Es la D, secuencia temporal. Si la causa no aparece antes que el efecto, sencillamente no puede ser la causa, así de simple. Los demás, fuerza, plausibilidad y dosis respuesta, refuerzan la sospecha, pero ninguno es obligatorio como la temporalidad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 32',
      stem: 'Un estudio busca la asociación entre el uso de anticonceptivos orales y el desarrollo de hipertensión arterial, y concluye que hay mayor hipertensión en las pacientes que usaban anticonceptivos. Sin embargo, las pacientes que recibían anticonceptivos orales fueron controladas tres veces más seguido que las que no los recibían.',
      question: '¿Qué sesgo se encuentra presente en el estudio descrito?',
      options: [
        { letter: 'A', text: 'Sesgo de selección' },
        { letter: 'B', text: 'Sesgo de notificación' },
        { letter: 'C', text: 'Sesgo de exclusión' },
        { letter: 'D', text: 'Sesgo de vigilancia' },
        { letter: 'E', text: 'Sesgo del evaluador' },
      ],
      correct: 'D',
      explanation: 'Es un sesgo de vigilancia o detección: al grupo que usaba anticonceptivos se le controló la presión arterial tres veces más seguido, así que era estadísticamente más probable detectar hipertensión en ese grupo solo por haberlo buscado más, no porque el fármaco necesariamente la produjera en esa magnitud.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil diecisiete. Un estudio busca la asociación entre el uso de anticonceptivos orales y la hipertensión arterial, y concluye que hay más hipertensión en las pacientes que usaban anticonceptivos. Pero esas pacientes fueron controladas tres veces más seguido que las que no los recibían.',
        question: '¿Qué sesgo se encuentra presente en el estudio descrito?',
        options: 'Las opciones: sesgo de selección, sesgo de notificación, sesgo de exclusión, sesgo de vigilancia, o sesgo del evaluador.',
        answer: 'Es la D, sesgo de vigilancia. Al grupo con anticonceptivos se le controló mucho más seguido, así que era casi inevitable que se detectara más hipertensión ahí, simplemente porque se buscó más. Es un clásico sesgo de vigilancia: se detectan más problemas en el grupo que está más vigilado.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Azar, sesgo y confusión', tag: 'Tres problemas distintos', kind: 'key', items: [
          { t: 'El azar se arregla con más muestra', d: 'El sesgo, nunca',
            say: 'Cerremos con las reglas de oro. El error aleatorio se corrige aumentando la muestra; el error sistemático, el sesgo, no se corrige nunca aumentando la muestra, porque el problema está en el diseño.' },
          { t: 'La confusión se controla, no se corrige', d: 'Estratificación, pareamiento o multivariado',
            say: 'La confusión es una tercera variable real que se controla con estratificación, pareamiento o análisis multivariado, no un error de medición.' },
        ] },
        { title: 'Causalidad', tag: 'Solo un criterio es obligatorio', kind: 'alert', items: [
          { t: 'Temporalidad', d: 'La causa siempre antecede al efecto',
            say: 'Y de los nueve criterios de Bradford Hill, solo uno es obligatorio: la temporalidad. Si te llevas una sola idea de hoy: antes de hablar de causa, primero descarta el azar, después el sesgo, y recién ahí evalúa la temporalidad. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Evaluar una asociación estadística paso a paso',
    root: N(
      'start', 'Encontraste una asociación estadística', '¿Es real o es un error?',
      'El primer paso siempre es descartar los errores antes de hablar de causalidad.',
      ['¿Cuánto varía si repites el estudio?', N(
        'q', '¿El error es aleatorio o sistemático?', 'Azar versus sesgo',
        'El azar afecta la precisión; el sesgo afecta la validez interna del estudio.',
        ['Se reduce aumentando la muestra', N(
          'ok', 'Error aleatorio', 'Se mide con valor p e intervalo de confianza',
          'No hay falla de diseño: es variabilidad esperable que se reduce con más pacientes.',
        )],
        ['No cambia aunque agregues muestra', N(
          'alert', 'Error sistemático (sesgo)', 'Falla del diseño, reclutamiento o medición',
          'Revisa si es un sesgo de selección, como Berkson, o de información, como el de memoria.',
        )],
      )],
      ['Ya descartaste azar y sesgo', N(
        'q', '¿Aparece una tercera variable que explique todo?', 'Buscar confusión',
        'Una variable de confusión está asociada a la exposición, es causa independiente de la enfermedad, y no es un paso intermedio.',
        ['Sí, y al estratificar la asociación desaparece', N(
          'refer', 'Factor de confusión', 'Controlar con estratificación o multivariado',
          'La asociación original era falsa: la tercera variable explicaba todo.',
        )],
        ['No, la asociación persiste en todos los estratos', N(
          'do', 'Evaluar causalidad con Bradford Hill', 'La temporalidad es obligatoria',
          'Revisa primero que la exposición haya precedido a la enfermedad; los demás criterios solo suman evidencia.',
        )],
      )],
    ),
  },
};
