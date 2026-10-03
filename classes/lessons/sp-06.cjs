// Clase 21.6 — guion docente escrito a mano (ver gastro-01.cjs, gastro-02.cjs y sp-04.cjs para el formato).
// Fuente: books/scripts/dataset_saludpublica.cjs / dataset_saludpublica_bloque_2.cjs (sp-06).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'sp-06',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo se selecciona a los sujetos: la pregunta que decide si es cohorte, casos y controles, transversal o ecológico',
      say: 'Bienvenidos. Hoy vemos los diseños de estudios epidemiológicos, uno de los temas de mayor rentabilidad del EUNACOM: en casi todos los exámenes aparece una viñeta metodológica que hay que clasificar. La buena noticia es que existe una sola pregunta que resuelve la mayoría de los casos: cómo se seleccionó a los sujetos, por su exposición o por su enfermedad. Vamos a ordenarla desde ahí.',
    },

    {
      type: 'points',
      kicker: 'Clasificación',
      title: 'Los cuatro ejes que clasifican cualquier estudio',
      cards: [
        { title: 'Control de la intervención', tag: 'Experimental vs observacional', kind: 'key', items: [
          { t: 'Experimental', d: 'El investigador asigna la exposición o el fármaco',
            say: 'Todo estudio se puede clasificar según cuatro ejes. El primero es el control de la intervención: en un estudio experimental, el investigador asigna de forma activa y deliberada la exposición o el fármaco.' },
          { t: 'Observacional', d: 'El investigador solo observa lo que ya ocurre',
            say: 'En uno observacional, el investigador no manipula nada: solo observa la naturaleza tal como ocurre, sin intervenir.' },
        ] },
        { title: 'Temporalidad y unidad de análisis', tag: 'Los otros tres ejes', kind: 'normal', items: [
          { t: 'Prospectivo o retrospectivo', d: 'Antes de que ocurra el evento, o después',
            say: 'El segundo eje es la temporalidad: prospectivo, si empieza antes de que ocurra el evento y se sigue en el tiempo, o retrospectivo, si el evento ya ocurrió cuando parte el estudio.' },
          { t: 'Transversal o longitudinal, individual o agregado', d: 'Una medición o varias; personas o poblaciones',
            say: 'El tercero es el número de mediciones: una sola, transversal, o al menos dos, longitudinal. Y el cuarto es la unidad de análisis: individuos, o datos agregados de poblaciones completas, que son los estudios ecológicos.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Algoritmo de clasificación',
      title: 'La pregunta que resuelve la mayoría de las viñetas',
      nodes: [
        { id: 'preg', col: 0, row: 1, k: 'start', t: 'Pregunta de investigación', s: '¿El investigador asigna la exposición?' },
        { id: 'exp', col: 1, row: 0, k: 'good', t: 'Sí: experimental', s: 'Ensayo clínico aleatorizado' },
        { id: 'obs', col: 1, row: 2, k: 'q', t: 'No: observacional', s: '¿Individuos o población agregada?' },
        { id: 'eco', col: 2, row: 3, k: 'trap', t: 'Población agregada', s: 'Estudio ecológico' },
        { id: 'ind', col: 2, row: 1, k: 'q', t: 'Individuos: ¿cómo se seleccionan?', s: 'Por exposición o por enfermedad' },
        { id: 'coh', col: 3, row: 0, k: 'good', t: 'Por exposición, sanos al inicio', s: 'Estudio de cohortes' },
        { id: 'cc', col: 3, row: 2, k: 'risk', t: 'Por enfermedad, ya establecida', s: 'Casos y controles' },
      ],
      edges: [
        { from: 'preg', to: 'exp', label: 'sí' }, { from: 'preg', to: 'obs', label: 'no' },
        { from: 'obs', to: 'eco', label: 'agregada' }, { from: 'obs', to: 'ind', label: 'individual' },
        { from: 'ind', to: 'coh', label: 'exposición' }, { from: 'ind', to: 'cc', label: 'enfermedad' },
      ],
      steps: [
        { show: ['preg', 'exp'], note: 'Primera pregunta: quién asigna la exposición',
          say: 'La primera pregunta que te tienes que hacer frente a cualquier viñeta metodológica es esta: ¿el investigador asignó la exposición de forma activa? Si la respuesta es sí, ya terminaste: es un estudio experimental, un ensayo clínico aleatorizado.' },
        { show: ['obs'], note: 'Si no hay asignación, es observacional',
          say: 'Si la respuesta es no, el investigador solo observó lo que ya ocurría, sin intervenir: es un estudio observacional. Y ahí viene la segunda pregunta.' },
        { show: ['eco'], note: 'Unidad de análisis: países, comunas, ciudades',
          say: 'Si la unidad de análisis son datos agregados, como el consumo de sal por país comparado con la mortalidad por accidente vascular, eso es un estudio ecológico.' },
        { show: ['ind'], note: 'La pregunta que más se repite en el examen',
          say: 'Pero si trabaja con individuos, viene la pregunta que más se repite en el examen: ¿cómo se seleccionó a los sujetos? ¿Por su exposición, o por su enfermedad?' },
        { show: ['coh'], note: 'Sanos al inicio, seguidos en el tiempo',
          say: 'Si se seleccionaron sujetos sanos según si estaban expuestos o no, y se les siguió en el tiempo para ver quién enferma, es un estudio de cohortes.' },
        { show: ['cc'], note: 'Enfermos y sanos, mirando hacia atrás',
          say: 'Y si se seleccionaron sujetos que ya tienen la enfermedad, comparados con sujetos sanos, indagando hacia atrás en su exposición, es un estudio de casos y controles. Con esta sola pregunta resuelves la mayoría de las viñetas del examen.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Observacionales individuales',
      title: 'Casos y controles versus cohortes: la diferencia que se pregunta',
      cards: [
        { title: 'Casos y controles', tag: 'Retrospectivo, por enfermedad', kind: 'alert', items: [
          { t: 'Selecciona por el desenlace', d: 'Enfermos versus sanos de la misma población base',
            say: 'En casos y controles, seleccionas primero a los enfermos y a los sanos, y después indagas retrospectivamente su exposición pasada.' },
          { t: 'De elección para enfermedades raras', d: 'Mide Odds Ratio; vulnerable al sesgo de memoria',
            say: 'Es el diseño de elección para enfermedades raras o de larga latencia, como el cáncer, porque reunir suficientes enfermos así es rápido y barato. Su medida es el Odds Ratio, y su gran vulnerabilidad es el sesgo de memoria: el enfermo recuerda su exposición pasada distinto que el sano.' },
        ] },
        { title: 'Cohortes', tag: 'Longitudinal, por exposición', kind: 'criteria', items: [
          { t: 'Selecciona por la exposición', d: 'Sanos al inicio, expuestos versus no expuestos',
            say: 'En cohortes, en cambio, seleccionas sujetos sanos, los clasificas según estén expuestos o no al factor sospechoso, y los sigues en el tiempo.' },
          { t: 'De elección para exposiciones raras', d: 'Mide incidencia directa y Riesgo Relativo',
            say: 'Es el diseño de elección para exposiciones infrecuentes, como un tóxico laboral, porque puede evaluar varios desenlaces de una misma exposición. Al partir de sanos, mide directamente la incidencia y el Riesgo Relativo, con la certeza de que la causa precedió al efecto. Es cara y lenta, y su gran vulnerabilidad son las pérdidas de seguimiento.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Observacional individual',
      title: 'El estudio transversal: una sola fotografía',
      cards: [
        { title: 'Exposición y enfermedad al mismo tiempo', tag: 'Prevalencia, no causalidad', kind: 'normal', items: [
          { t: 'Un único punto en el tiempo', d: 'Sin seguimiento posterior',
            say: 'El estudio transversal mide la exposición y la enfermedad al mismo tiempo, en un único momento, sin ningún período de seguimiento.' },
          { t: 'Rápido y barato, pero con ambigüedad temporal', d: 'No distingue si la causa precedió al efecto',
            say: 'Es rápido, económico, y perfecto para estimar la prevalencia y planificar recursos, como la Encuesta Nacional de Salud. Pero tiene una limitación que se pregunta mucho: la ambigüedad temporal. Como todo se mide junto, no puedes saber si la causa precedió al efecto, así que no permite establecer causalidad ni calcular incidencia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio experimental',
      title: 'El ensayo clínico aleatorizado: por qué es el estándar de oro',
      cards: [
        { title: 'Aleatorización y enmascaramiento', tag: 'Los dos pilares', kind: 'key', items: [
          { t: 'La aleatorización reparte los sesgos', d: 'Distribuye por igual los factores conocidos y desconocidos',
            say: 'El ensayo clínico aleatorizado es el estándar de oro para probar causalidad terapéutica, y descansa en dos pilares. La aleatorización asigna al azar a cada sujeto al grupo intervención o control, y su función es repartir de forma equilibrada tanto los factores de confusión conocidos como los que ni siquiera conocemos.' },
          { t: 'El ciego evita que el conocimiento distorsione', d: 'Simple, doble o triple ciego',
            say: 'El enmascaramiento evita que saber quién recibe qué altere el resultado. Simple ciego es cuando el paciente no sabe qué recibe; doble ciego, cuando tampoco lo sabe el médico tratante; y triple ciego, cuando ni siquiera lo sabe el bioestadístico que analiza los datos.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Farmacología clínica',
      title: 'Las cuatro fases del desarrollo de un fármaco',
      head: ['Fase', 'Población', 'Objetivo principal'],
      rows: [
        { cells: ['Fase I', 'Veinte a ochenta voluntarios sanos', 'Seguridad, dosis máxima tolerada y farmacocinética'],
          say: 'Un ensayo clínico no aparece de un día para otro: pasa por cuatro fases. La fase uno se hace en veinte a ochenta voluntarios sanos, y busca solamente seguridad, la dosis máxima tolerada y cómo se comporta el fármaco en el cuerpo.' },
        { cells: ['Fase II', 'Cien a trescientos pacientes enfermos', 'Eficacia preliminar y rango de dosis terapéutica'],
          say: 'La fase dos ya se hace en pacientes enfermos, entre cien y trescientos, y busca la eficacia preliminar y el rango de dosis que funciona.' },
        { cells: ['Fase III', 'Miles de pacientes, multicéntrico', 'Comparar contra el tratamiento estándar o placebo, para su aprobación'],
          say: 'La fase tres es el ensayo clínico aleatorizado masivo y multicéntrico que ya conoces, con miles de pacientes, comparando el fármaco nuevo contra el estándar o el placebo, y es la que decide si se aprueba.' },
        { cells: ['Fase IV', 'Población general que ya consume el fármaco', 'Farmacovigilancia: reacciones adversas raras o tardías'],
          say: 'Y la fase cuatro ocurre después de comercializado, con la población general que ya lo está usando, y busca detectar reacciones adversas raras o a largo plazo que un ensayo de miles de pacientes no alcanza a ver.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudios ecológicos',
      title: 'La falacia ecológica: el error de mirar países y concluir sobre personas',
      cards: [
        { title: 'Unidad agregada', tag: 'Países, comunas, ciudades', kind: 'alert', items: [
          { t: 'Correlaciona variables poblacionales', d: 'No mide a ningún individuo en particular',
            say: 'Los estudios ecológicos correlacionan variables medidas a nivel de poblaciones enteras, como el consumo de sal por país frente a la tasa de mortalidad por accidente vascular en ese mismo país. Nadie mide a un individuo en particular.' },
          { t: 'Falacia ecológica', d: 'Atribuir a las personas lo que se vio en el grupo',
            say: 'Y de ahí nace su trampa central, la falacia ecológica: asumir que lo que se observa a nivel de grupo se cumple necesariamente en cada persona. El país que más sal consume puede tener más accidentes vasculares por otra razón completamente distinta, y esa asociación grupal no te dice nada sobre un paciente individual.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en el árbol de decisión completo, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Qué diseño elegir según la pregunta de investigación',
      head: ['Escenario', 'Diseño óptimo', 'Principal riesgo de sesgo'],
      rows: [
        { cells: ['Enfermedad muy rara', 'Casos y controles', 'Sesgo de memoria al recordar la exposición'],
          say: 'Repasemos las trampas del examen con una tabla. Frente a una enfermedad muy rara, el diseño óptimo es casos y controles, porque permite reunir suficientes enfermos sin esperar décadas. Su riesgo principal es el sesgo de memoria.' },
        { cells: ['Exposición infrecuente', 'Cohortes', 'Pérdidas de seguimiento de los sujetos'],
          say: 'Frente a una exposición infrecuente, como un tóxico laboral, el diseño óptimo es cohortes, que garantiza seguir a los expuestos y ver múltiples desenlaces. Su riesgo principal son las pérdidas de seguimiento.' },
        { cells: ['Eficacia de un fármaco nuevo', 'Ensayo clínico aleatorizado doble ciego', 'Pérdida de validez externa si los criterios son muy estrictos'],
          say: 'Frente a la eficacia de un fármaco nuevo, el diseño óptimo es el ensayo clínico aleatorizado doble ciego, porque la aleatorización neutraliza los factores de confusión. Su riesgo es perder validez externa si los criterios de inclusión son demasiado estrictos.' },
        { cells: ['Prevalencia poblacional de una enfermedad', 'Estudio transversal', 'Ambigüedad temporal, no establece causa'],
          say: 'Y frente a la pregunta de cuánta gente tiene diabetes en Chile hoy, el diseño óptimo es el estudio transversal poblacional, con la ambigüedad temporal como su límite: no establece causa, solo retrata un momento.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un equipo de salud pública quiere estudiar si la exposición ocupacional al plomo se asocia con el desarrollo de insuficiencia renal crónica. Reclutan a 400 trabajadores de fundiciones, sin enfermedad renal al momento del ingreso, clasificados según su nivel de exposición al plomo en el ambiente laboral, y los siguen anualmente durante 12 años, midiendo la función renal.',
      question: '¿A qué diseño de estudio corresponde esta investigación?',
      options: [
        { letter: 'A', text: 'Estudio de cohortes prospectivo' },
        { letter: 'B', text: 'Estudio de casos y controles' },
        { letter: 'C', text: 'Estudio transversal' },
        { letter: 'D', text: 'Ensayo clínico aleatorizado' },
        { letter: 'E', text: 'Estudio ecológico' },
      ],
      correct: 'A',
      explanation: 'Los sujetos se seleccionan sanos al inicio, según su exposición al plomo, y se siguen prospectivamente para registrar la aparición de nuevos casos de insuficiencia renal. Esa estructura, selección por exposición y seguimiento longitudinal, define un estudio de cohortes prospectivo, el diseño de elección para una exposición ocupacional infrecuente.',
      say: {
        stem: 'Vamos con un caso. Un equipo de salud pública quiere estudiar si la exposición laboral al plomo se asocia con insuficiencia renal crónica. Reclutan a cuatrocientos trabajadores de fundiciones, sin enfermedad renal al ingresar, los clasifican según su nivel de exposición al plomo, y los siguen todos los años durante doce años, midiendo su función renal.',
        question: '¿A qué diseño de estudio corresponde esta investigación?',
        options: 'Las opciones: estudio de cohortes prospectivo, estudio de casos y controles, estudio transversal, ensayo clínico aleatorizado, o estudio ecológico. Piénsalo.',
        answer: 'Es la A, cohortes prospectivo. Los trabajadores se seleccionaron sanos al inicio, según su exposición al plomo, y se les siguió en el tiempo para ver quién desarrolla la enfermedad. Esa es la firma de un estudio de cohortes: selección por exposición y seguimiento longitudinal. Y es justo el diseño de elección aquí, porque la exposición al plomo es infrecuente en la población general.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 65',
      stem: 'En un estudio se analiza la tasa de infarto al miocardio en distintos países según el consumo de grasas saturadas, sin seguir a individuos en el tiempo.',
      question: '¿Qué tipo de diseño epidemiológico corresponde?',
      options: [
        { letter: 'A', text: 'Estudio ecológico' },
        { letter: 'B', text: 'Estudio de cohorte' },
        { letter: 'C', text: 'Estudio de casos y controles' },
        { letter: 'D', text: 'Ensayo clínico aleatorizado' },
        { letter: 'E', text: 'Estudio transversal' },
      ],
      correct: 'A',
      explanation: 'La unidad de análisis son países, no individuos: se comparan tasas agregadas de enfermedad entre grupos, sin seguir a ninguna persona. Eso define al estudio ecológico, cuya limitación principal es la falacia ecológica: no se puede inferir la asociación a nivel individual.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticinco. Un estudio analiza la tasa de infarto al miocardio en distintos países, según el consumo de grasas saturadas de cada país, sin seguir a ningún individuo en el tiempo.',
        question: '¿Qué tipo de diseño epidemiológico corresponde?',
        options: 'Las opciones: estudio ecológico, estudio de cohorte, estudio de casos y controles, ensayo clínico aleatorizado, o estudio transversal.',
        answer: 'Es la A, estudio ecológico. La unidad de análisis son países completos, no personas: se comparan tasas agregadas, y nadie sigue a ningún individuo. Ese es el sello del estudio ecológico, y su límite es justamente el que vimos: la falacia ecológica, porque esa asociación entre países no prueba nada sobre una persona en particular.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 110',
      stem: 'Se busca el diseño de estudio más adecuado para estudiar enfermedades muy infrecuentes en la población.',
      question: '¿Cuál es el diseño de estudio más adecuado para estudiar enfermedades muy infrecuentes?',
      options: [
        { letter: 'A', text: 'Cohortes prospectivas' },
        { letter: 'B', text: 'Caso control' },
        { letter: 'C', text: 'De prevalencia' },
        { letter: 'D', text: 'Ensayo clínico' },
        { letter: 'E', text: 'Cohortes retrospectiva' },
      ],
      correct: 'B',
      explanation: 'Casos y controles es el diseño más eficiente frente a enfermedades raras, porque permite reclutar directamente a los pocos enfermos existentes; un estudio de cohortes tendría que seguir a una población enorme durante años para observar un número suficiente de casos.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil diecinueve, va directo al punto: cuál es el diseño de estudio más adecuado para estudiar enfermedades muy infrecuentes.',
        question: '¿Cuál es el diseño de estudio más adecuado para estudiar enfermedades muy infrecuentes?',
        options: 'Las opciones: cohortes prospectivas, caso control, de prevalencia, ensayo clínico, o cohortes retrospectiva.',
        answer: 'Es la B, casos y controles. Con una enfermedad rara, reunir suficientes enfermos por cohorte tomaría años y una población enorme; casos y controles va directo a buscar a los pocos que ya están enfermos, y por eso es más eficiente y más barato.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 13',
      stem: 'En un estudio de cohortes sobre el tabaco y cáncer de pulmón, luego de 20 años, se determina que 65 de 2.000 pacientes fumadores enfermaron de cáncer.',
      question: '¿Qué medida es posible calcular con esta información?',
      options: [
        { letter: 'A', text: 'Incidencia acumulada en los pacientes fumadores' },
        { letter: 'B', text: 'Prevalencia en los pacientes fumadores' },
        { letter: 'C', text: 'Riesgo relativo' },
        { letter: 'D', text: 'Odds ratio' },
        { letter: 'E', text: 'Tasa de ataque en los pacientes fumadores' },
      ],
      correct: 'A',
      explanation: 'Con datos de un solo grupo (los fumadores) solo se puede calcular la incidencia acumulada en ese grupo: 65 dividido en 2.000. Para calcular Riesgo Relativo u Odds Ratio se necesitaría además el dato de los no fumadores, que aquí no está.',
      say: {
        stem: 'Y esta pregunta real, del EUNACOM de julio de dos mil dieciséis, prueba si entiendes qué se puede calcular con los datos que realmente tienes. En un estudio de cohortes sobre tabaco y cáncer de pulmón, después de veinte años, sesenta y cinco de dos mil pacientes fumadores desarrollaron cáncer.',
        question: '¿Qué medida es posible calcular con esta información?',
        options: 'Las opciones: incidencia acumulada en los fumadores, prevalencia en los fumadores, riesgo relativo, odds ratio, o tasa de ataque en los fumadores.',
        answer: 'Es la A. Solo tienes datos del grupo de fumadores, así que lo único calculable es su incidencia acumulada: sesenta y cinco dividido en dos mil. Para calcular el riesgo relativo o el odds ratio necesitarías también el dato de los no fumadores, que esta pregunta no te da. Fíjate en la trampa: el estudio es de cohortes, pero eso no significa que siempre puedas calcular el Riesgo Relativo si te falta la mitad de la tabla.' },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La pregunta que resuelve todo', tag: 'Cómo se seleccionó a los sujetos', kind: 'key', items: [
          { t: 'Por exposición, sanos al inicio', d: 'Cohortes',
            say: 'Cerremos con las reglas de oro. Si seleccionaron a los sujetos por su exposición, estando sanos al inicio, es cohortes.' },
          { t: 'Por enfermedad, mirando atrás', d: 'Casos y controles',
            say: 'Si los seleccionaron por tener o no la enfermedad, y miraron hacia atrás, es casos y controles.' },
          { t: 'Todo junto, en un solo momento', d: 'Transversal',
            say: 'Si midieron todo junto, en un solo momento, es transversal.' },
        ] },
        { title: 'Los dos que no se confunden', tag: 'Fuera del molde anterior', kind: 'alert', items: [
          { t: 'El investigador asigna la exposición', d: 'Ensayo clínico aleatorizado',
            say: 'Si el investigador asignó la exposición de forma activa, es experimental, un ensayo clínico.' },
          { t: 'La unidad son poblaciones completas', d: 'Ecológico, con riesgo de falacia ecológica',
            say: 'Y si la unidad de análisis son países o comunas enteras, es ecológico, con su riesgo de falacia ecológica. Si te llevas una sola idea de hoy: antes de mirar cualquier otro detalle de la viñeta, pregúntate cómo se seleccionó a los sujetos. Esa respuesta casi siempre resuelve el diseño completo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Qué diseño de estudio corresponde',
    root: N(
      'start', 'Investigador plantea una pregunta de investigación', '¿Asigna la exposición de forma activa?',
      'Frente a cualquier viñeta metodológica, la primera pregunta es si el investigador controló o no la exposición.',
      ['Sí, la asigna de forma activa', N(
        'ok', 'Estudio experimental', 'Ensayo clínico aleatorizado',
        'La aleatorización distribuye por igual los factores de confusión conocidos y desconocidos entre los grupos, y es el estándar de oro para probar causalidad.',
      )],
      ['No, solo observa', N(
        'q', '¿Individuos o población agregada?', 'Eso decide si es ecológico',
        'Si la unidad de análisis son países o comunas completas, ya es un estudio ecológico; si son personas, sigue la pregunta siguiente.',
        ['Población agregada (países, comunas)', N(
          'alert', 'Estudio ecológico', 'Riesgo de falacia ecológica',
          'Correlaciona variables medidas a nivel de grupo; su trampa es atribuir esa asociación grupal a cada individuo.',
        )],
        ['Individuos: ¿cómo se seleccionaron?', N(
          'q', '¿Por exposición o por enfermedad?', 'Eso decide cohortes o casos y controles',
          'Si se seleccionó a sujetos sanos según su exposición, es cohortes; si se seleccionó a enfermos y sanos y se miró hacia atrás, es casos y controles.',
          ['Por exposición, sanos al inicio, seguidos en el tiempo', N(
            'ok', 'Estudio de cohortes', 'Mide incidencia y Riesgo Relativo',
            'De elección para exposiciones infrecuentes; su riesgo principal son las pérdidas de seguimiento.',
          )],
          ['Por enfermedad, mirando la exposición pasada', N(
            'refer', 'Casos y controles', 'Mide Odds Ratio',
            'De elección para enfermedades raras o de larga latencia; su riesgo principal es el sesgo de memoria.',
          )],
          ['Exposición y enfermedad medidas juntas, una sola vez', N(
            'ok', 'Estudio transversal', 'Mide prevalencia, no causalidad',
            'Rápido y útil para planificar recursos, pero con ambigüedad temporal: no permite saber si la causa precedió al efecto.',
          )],
        )],
      )],
    ),
  },
};
