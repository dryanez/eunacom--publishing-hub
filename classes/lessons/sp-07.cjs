// Clase 21.7 — guion docente escrito a mano (ver gastro-01.cjs, gastro-02.cjs y sp-04.cjs para el formato).
// Fuente: books/scripts/dataset_saludpublica.cjs / dataset_saludpublica_bloque_2.cjs (sp-07).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'sp-07',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Riesgo Relativo, Odds Ratio, reducción absoluta y número necesario a tratar: las cinco fórmulas que el examen te obliga a calcular',
      say: 'Bienvenidos. Hoy vemos las medidas de frecuencia, de asociación y de impacto, el tema de bioestadística que casi siempre trae un ejercicio matemático obligatorio en el EUNACOM. No te asustes con las fórmulas: son simples, y cada una responde una pregunta clínica distinta. Vamos a armarlas paso a paso, con números, para que en el examen no dudes cuál usar.',
    },

    {
      type: 'points',
      kicker: 'Medidas de frecuencia',
      title: 'Prevalencia e incidencia: no son lo mismo',
      cards: [
        { title: 'Prevalencia', tag: 'Una fotografía', kind: 'normal', items: [
          { t: 'Casos existentes en un momento', d: 'Casos totales dividido en la población en ese momento',
            say: 'Empecemos por la base: la prevalencia es la proporción de personas que tienen la enfermedad en un momento determinado. Es una fotografía, y refleja la carga total de la enfermedad en la población. Sube si la gente vive más tiempo enferma, y baja si se cura rápido o si la enfermedad mata rápido.' },
        ] },
        { title: 'Incidencia', tag: 'Una película', kind: 'key', items: [
          { t: 'Incidencia acumulada', d: 'Casos nuevos dividido en la población sana al inicio, en un período',
            say: 'La incidencia acumulada es distinta: es la proporción de personas inicialmente sanas que desarrollan la enfermedad durante un período de seguimiento. Necesita, por definición, tiempo y seguimiento.' },
          { t: 'Densidad de incidencia', d: 'Casos nuevos dividido en el tiempo-persona de observación',
            say: 'Y la densidad de incidencia agrega un detalle: mide la velocidad de aparición de casos, dividiendo por el tiempo-persona real que cada sujeto aportó a la observación, útil en cohortes donde la gente entra y sale en momentos distintos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'La base de todo cálculo',
      title: 'La tabla dos por dos: memorízala así',
      cards: [
        { title: 'Cuatro casillas', tag: 'a, b, c, d', kind: 'criteria', items: [
          { t: 'a: expuestos enfermos, b: expuestos sanos', d: 'La fila de arriba son los expuestos',
            say: 'Toda fórmula de esta clase sale de la misma tabla de cuatro casillas, así que grábatela. La casilla a son los expuestos que enfermaron; la casilla b, los expuestos que no enfermaron.' },
          { t: 'c: no expuestos enfermos, d: no expuestos sanos', d: 'La fila de abajo son los no expuestos',
            say: 'La casilla c son los no expuestos que enfermaron, y la casilla d, los no expuestos sanos. Con estas cuatro letras armamos absolutamente todo lo que viene.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Medidas de asociación',
      title: 'Riesgo Relativo y Odds Ratio: los usa el diseño, no tu preferencia',
      nodes: [
        { id: 'tab', col: 0, row: 1, k: 'start', t: 'Tabla 2x2 completa', s: 'a, b, c y d ya calculados' },
        { id: 'preg', col: 1, row: 1, k: 'q', t: '¿Qué diseño generó los datos?', s: 'Cohorte o ensayo, versus casos y controles' },
        { id: 'rr', col: 2, row: 0, k: 'good', t: 'Riesgo Relativo', s: 'Incidencia en expuestos entre incidencia en no expuestos' },
        { id: 'or', col: 2, row: 2, k: 'risk', t: 'Odds Ratio', s: 'Producto cruzado: a por d, entre b por c' },
      ],
      edges: [
        { from: 'tab', to: 'preg' },
        { from: 'preg', to: 'rr', label: 'cohorte o ensayo' },
        { from: 'preg', to: 'or', label: 'casos y controles' },
      ],
      steps: [
        { show: ['tab', 'preg'], note: 'El diseño decide la fórmula, no al revés',
          say: 'Con la tabla lista, la pregunta que decide todo es qué diseño generó esos datos. Y esto es clave: la fórmula no la eliges tú a gusto, la impone el diseño del estudio.' },
        { show: ['rr'], note: 'Solo se calcula en cohortes y ensayos clínicos',
          say: 'Si los datos vienen de una cohorte o de un ensayo clínico, calculas el Riesgo Relativo: la incidencia en los expuestos, dividida en la incidencia en los no expuestos. Un Riesgo Relativo de uno significa que no hay asociación; mayor que uno, factor de riesgo; menor que uno, factor protector.' },
        { show: ['or'], note: 'Se calcula en casos y controles, donde no hay incidencia real',
          say: 'Si los datos vienen de casos y controles, calculas el Odds Ratio, con el producto cruzado: a por d, dividido en b por c. ¿Por qué no el Riesgo Relativo? Porque en casos y controles tú decidiste cuántos enfermos y cuántos sanos reclutar, así que no existe una incidencia real que calcular. Y un detalle que se pregunta: si la enfermedad es rara, el Odds Ratio se acerca mucho al Riesgo Relativo.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Medidas de impacto',
      title: 'De la reducción absoluta al número necesario a tratar, con números reales',
      nodes: [
        { id: 'rc', col: 0, row: 0, k: 'start', t: 'Riesgo en el control', s: 'Diez de cada cien pacientes' },
        { id: 'rt', col: 0, row: 2, k: 'start', t: 'Riesgo con el fármaco', s: 'Seis de cada cien pacientes' },
        { id: 'rra', col: 1, row: 1, k: 'mech', t: 'Reducción absoluta', s: 'Riesgo control menos riesgo tratamiento' },
        { id: 'rrr', col: 2, row: 0, k: 'good', t: 'Reducción relativa', s: 'Reducción absoluta dividida en el riesgo control' },
        { id: 'nnt', col: 2, row: 2, k: 'effect', t: 'Número necesario a tratar', s: 'Uno dividido en la reducción absoluta' },
      ],
      edges: [
        { from: 'rc', to: 'rra' }, { from: 'rt', to: 'rra' },
        { from: 'rra', to: 'rrr' }, { from: 'rra', to: 'nnt' },
      ],
      steps: [
        { show: ['rc', 'rt'], note: 'Un ejemplo con números redondos',
          say: 'Vamos con un ejemplo concreto, con números redondos. En un ensayo clínico, el riesgo de morir con placebo es de diez pacientes de cada cien. Con el fármaco nuevo, baja a seis de cada cien.' },
        { show: ['rra'], note: 'La resta simple: el beneficio real',
          say: 'La reducción absoluta del riesgo es la resta simple: diez menos seis, cuatro puntos porcentuales. Esa cifra es el beneficio real y neto que aporta el fármaco.' },
        { show: ['rrr'], note: 'Suena más grande porque es relativo al riesgo base',
          say: 'La reducción relativa del riesgo divide esos mismos cuatro puntos por el riesgo del grupo control: cuatro dividido en diez, cuarenta por ciento. Fíjate que el número suena mucho más impresionante, y por eso la industria farmacéutica prefiere anunciar la reducción relativa: cuarenta por ciento suena mejor que cuatro puntos.' },
        { show: ['nnt'], note: 'Siempre se redondea hacia arriba',
          say: 'Y el número necesario a tratar es uno dividido en la reducción absoluta: uno dividido en cero coma cero cuatro, veinticinco. Eso significa que hay que tratar a veinticinco pacientes con este fármaco para evitar exactamente una muerte adicional. Regla de oro: el número necesario a tratar siempre se redondea hacia arriba, nunca hacia abajo, porque no puedes salvar una fracción de paciente.' },
      ],
    },

    {
      type: 'points',
      kicker: 'El reverso del beneficio',
      title: 'Número necesario para dañar: la misma lógica, para el riesgo',
      cards: [
        { title: 'NND o NNH', tag: 'Pacientes expuestos para un daño adicional', kind: 'alert', items: [
          { t: 'Mismo cálculo, pero con el evento adverso', d: 'Uno dividido en la diferencia de riesgos de daño',
            say: 'La misma lógica del número necesario a tratar sirve para medir el daño. El número necesario para dañar, o NND, es el número de pacientes que hay que exponer al tratamiento para que ocurra un evento adverso grave adicional, y se calcula igual: uno dividido en la diferencia de riesgo de daño entre el grupo tratado y el control.' },
          { t: 'Mientras más alto, más seguro', d: 'Al revés que el NNT',
            say: 'Aquí la lectura se invierte respecto al número necesario a tratar: mientras más alto es el número necesario para dañar, más seguro es el fármaco, porque hace falta exponer a muchísimos pacientes para que aparezca un daño adicional. Un fármaco ideal tiene un número necesario a tratar bajo, y un número necesario para dañar alto.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Significancia estadística',
      title: 'Cómo leer el intervalo de confianza en cada medida',
      head: ['Medida', 'Valor nulo', 'Es significativo cuando'],
      rows: [
        { cells: ['Riesgo Relativo u Odds Ratio', 'Uno coma cero', 'El intervalo de confianza no incluye el uno'],
          say: 'Un último ingrediente antes de los casos: cómo leer el intervalo de confianza. Para el Riesgo Relativo y el Odds Ratio, el valor nulo es uno coma cero. Es significativo solo cuando el intervalo de confianza no incluye ese uno.' },
        { cells: ['Reducción absoluta del riesgo', 'Cero', 'El intervalo de confianza no incluye el cero'],
          say: 'Para la reducción absoluta del riesgo, el valor nulo es cero, no uno. Es significativa solo cuando el intervalo no cruza el cero.' },
        { cells: ['Un intervalo que cruza el valor nulo', 'No hay asociación demostrada', 'Se dice que no es estadísticamente significativo'],
          say: 'Y la trampa más repetida del examen: si el intervalo de confianza cruza el valor nulo, sea uno o cero, no puedes afirmar que existe una asociación demostrada, aunque el número puntual se vea llamativo. Hay que decir que no alcanzó significancia estadística, y que el resultado podría deberse al azar.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos el razonamiento completo, tal como se arma en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Qué medida usar según lo que te preguntan',
      head: ['Te preguntan por…', 'Medida correcta', 'Error frecuente'],
      rows: [
        { cells: ['Cuántas veces más riesgo hay en cohorte o ensayo', 'Riesgo Relativo', 'Calcular Odds Ratio sin que sea casos y controles'],
          say: 'Repasemos con una tabla final. Si te preguntan cuántas veces más riesgo hay, y los datos vienen de una cohorte o un ensayo, la medida correcta es el Riesgo Relativo. El error clásico es usar el Odds Ratio cuando el diseño no es casos y controles.' },
        { cells: ['La asociación en un estudio de casos y controles', 'Odds Ratio', 'Decir que el Odds Ratio es directamente el riesgo'],
          say: 'Si el estudio es de casos y controles, la medida es el Odds Ratio. El error clásico es leer un Odds Ratio de uno coma tres como si fuera un treinta por ciento más de riesgo real: es una razón de momios, no una incidencia.' },
        { cells: ['El beneficio real de un tratamiento', 'Reducción absoluta y número necesario a tratar', 'Quedarse solo con la reducción relativa'],
          say: 'Si te preguntan por el beneficio real de un tratamiento, la medida es la reducción absoluta y el número necesario a tratar. El error clásico es quedarse solo con la reducción relativa, que siempre parece más grande e impresionante.' },
        { cells: ['Si un intervalo de confianza es significativo', 'Ver si incluye el valor nulo', 'Fijarse solo en el valor puntual del estimador'],
          say: 'Y si te preguntan si un resultado es significativo, revisa si el intervalo de confianza incluye el valor nulo. El error clásico es mirar solo el número puntual, como uno coma tres, e ignorar que su intervalo pasa por el uno.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un ensayo clínico aleatorizado compara un nuevo antiagregante plaquetario frente a aspirina para prevenir accidente cerebrovascular isquémico recurrente a 2 años. La incidencia acumulada de ACV fue de 12% en el grupo aspirina y de 8% en el grupo con el nuevo fármaco.',
      question: '¿Cuál es el número necesario a tratar con el nuevo fármaco para evitar un accidente cerebrovascular?',
      options: [
        { letter: 'A', text: '25 pacientes' },
        { letter: 'B', text: '8 pacientes' },
        { letter: 'C', text: '12 pacientes' },
        { letter: 'D', text: '33 pacientes' },
        { letter: 'E', text: '4 pacientes' },
      ],
      correct: 'A',
      explanation: 'La reducción absoluta del riesgo es 12% menos 8%, es decir 4 puntos porcentuales (0,04). El número necesario a tratar es 1 dividido en 0,04, es decir 25 pacientes deben tratarse con el nuevo fármaco durante 2 años para evitar un accidente cerebrovascular isquémico adicional.',
      say: {
        stem: 'Vamos con un caso. Un ensayo clínico aleatorizado compara un nuevo antiagregante plaquetario contra aspirina, para prevenir un accidente cerebrovascular isquémico recurrente a dos años. La incidencia acumulada de accidente cerebrovascular fue de doce por ciento con aspirina, y de ocho por ciento con el nuevo fármaco.',
        question: '¿Cuál es el número necesario a tratar con el nuevo fármaco para evitar un accidente cerebrovascular?',
        options: 'Las opciones: veinticinco pacientes, ocho pacientes, doce pacientes, treinta y tres pacientes, o cuatro pacientes. Piénsalo.',
        answer: 'Es la A, veinticinco. Primero la reducción absoluta: doce menos ocho, cuatro puntos porcentuales, es decir cero coma cero cuatro. Y el número necesario a tratar es uno dividido en esa reducción absoluta: uno dividido en cero coma cero cuatro, veinticinco. La trampa es confundir el cuatro por ciento de reducción absoluta con el número necesario a tratar: son cosas distintas, y hay que invertir la fracción.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 71',
      stem: 'Se busca la asociación entre distintos parámetros con el cáncer de tiroides, en un estudio de caso control, con el Odds Ratio (OR) más un intervalo de confianza (IC) al 95%: antecedentes familiares OR 1,88 IC 0,56 a 4,01; edad OR 2,6 IC 0,95 a 3,17; sexo masculino OR 0,56 IC 0,33 a 0,87; exposición a radiación OR 1,52 IC 0,91 a 2,01; tiroiditis de Hashimoto OR 4,6 IC 0,7 a 6,2.',
      question: '¿Qué factor es más importante en esta asociación?',
      options: [
        { letter: 'A', text: 'Antecedentes familiares: OR 1,88; IC 0,56 a 4,01' },
        { letter: 'B', text: 'Edad: OR 2,6; IC 0,95 a 3,17' },
        { letter: 'C', text: 'Sexo masculino: OR 0,56; IC 0,33 a 0,87' },
        { letter: 'D', text: 'Exposición a radiación: OR 1,52; IC 0,91 a 2,01' },
        { letter: 'E', text: 'Tiroiditis de Hashimoto: OR 4,6; IC 0,7 a 6,2' },
      ],
      correct: 'C',
      explanation: 'Solo la opción del sexo masculino tiene un intervalo de confianza que no cruza el uno, con ambos límites bajo uno: es la única estadísticamente significativa, y corresponde a un factor protector, ya que su Odds Ratio es menor a uno. Las otras cuatro, aunque tienen Odds Ratio numéricamente más llamativos, tienen intervalos que incluyen el valor nulo.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Un estudio de casos y controles busca la asociación entre distintos factores y el cáncer de tiroides, entregando el Odds Ratio y su intervalo de confianza de cada uno: antecedentes familiares, edad, sexo masculino, exposición a radiación, y tiroiditis de Hashimoto.',
        question: '¿Qué factor es más importante en esta asociación?',
        options: 'Cada opción trae su Odds Ratio y su intervalo de confianza: antecedentes familiares con uno coma ochenta y ocho, edad con dos coma seis, sexo masculino con cero coma cincuenta y seis, exposición a radiación con uno coma cincuenta y dos, y tiroiditis de Hashimoto con cuatro coma seis. Revisa con calma cada intervalo.',
        answer: 'Es la C, sexo masculino. La trampa es dejarte deslumbrar por el Odds Ratio más alto, la tiroiditis de Hashimoto con cuatro coma seis, pero su intervalo va de cero coma siete a seis coma dos y cruza el uno: no es significativo, igual que los otros tres. Solo el sexo masculino tiene un intervalo que no cruza el uno y es menor a uno en ambos extremos, así que es un factor protector real y significativo.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 31',
      stem: 'Se busca la medida de asociación más adecuada para establecer cuántas veces aumentan los casos de asma en la población fumadora, en comparación con la población no fumadora.',
      question: '¿Cuál de las siguientes medidas de asociación es la más adecuada?',
      options: [
        { letter: 'A', text: 'Riesgo relativo' },
        { letter: 'B', text: 'Riesgo atribuible' },
        { letter: 'C', text: 'Razón de prevalencias' },
        { letter: 'D', text: 'Tasa de incidencia' },
        { letter: 'E', text: 'Riesgo atribuible porcentual' },
      ],
      correct: 'A',
      explanation: 'El Riesgo Relativo es, por definición, la razón entre la incidencia en expuestos y la incidencia en no expuestos: expresa directamente cuántas veces más frecuente es el evento en un grupo respecto al otro. El riesgo atribuible y el riesgo atribuible porcentual son medidas de impacto, no de cuántas veces más riesgo hay.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil diecinueve. Buscan la medida de asociación más adecuada para establecer cuántas veces aumentan los casos de asma en la población fumadora, comparada con la no fumadora.',
        question: '¿Cuál de las siguientes medidas de asociación es la más adecuada?',
        options: 'Las opciones: riesgo relativo, riesgo atribuible, razón de prevalencias, tasa de incidencia, o riesgo atribuible porcentual.',
        answer: 'Es la A, riesgo relativo. La palabra clave es cuántas veces más: eso es exactamente lo que expresa una razón, como el Riesgo Relativo, la incidencia en expuestos dividida en la incidencia en no expuestos. El riesgo atribuible y su versión porcentual son medidas de impacto poblacional, no de cuántas veces más frecuente es el evento.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 35',
      stem: 'Un estudio de cohortes busca establecer la asociación entre la exposición a estrógenos y el cáncer de ovario. Luego de analizar los datos, se obtiene que el Odds Ratio es 1,3 con un intervalo de confianza al 95% de 0,86 a 2,1.',
      question: '¿Cuál de las siguientes afirmaciones es correcta con estos resultados?',
      options: [
        { letter: 'A', text: 'Las mujeres expuestas a estrógeno tienen 1,3 veces más riesgo de presentar cáncer de ovario' },
        { letter: 'B', text: 'Las mujeres expuestas a estrógeno tienen 30% más de riesgo de presentar cáncer de ovario' },
        { letter: 'C', text: 'Existe una asociación entre el uso de estrógenos y el desarrollo de cáncer de ovario, pero no es significativa' },
        { letter: 'D', text: 'Las mujeres que tienen cáncer de ovario estuvieron expuestas a un 30% más de estrógeno' },
        { letter: 'E', text: 'Se prueba la asociación entre el uso de estrógenos y el desarrollo de cáncer de ovario, pero no es extrapolable' },
      ],
      correct: 'C',
      explanation: 'El Odds Ratio de 1,3 sugiere un aumento del riesgo, pero su intervalo de confianza al 95% va de 0,86 a 2,1 e incluye el valor nulo de 1,0. Eso significa que la asociación observada no alcanza significancia estadística: no se puede descartar que el resultado se deba al azar, aunque el punto estimado sugiera un factor de riesgo.',
      say: {
        stem: 'Y esta pregunta real, del EUNACOM de diciembre de dos mil diecinueve, repite la misma lección con otro ejemplo. Un estudio de cohortes busca la asociación entre la exposición a estrógenos y el cáncer de ovario, y obtiene un Odds Ratio de uno coma tres, con un intervalo de confianza que va de cero coma ochenta y seis a dos coma uno.',
        question: '¿Cuál de las siguientes afirmaciones es correcta con estos resultados?',
        options: 'Las opciones: que tienen uno coma tres veces más riesgo, que tienen treinta por ciento más riesgo, que existe asociación pero no es significativa, que las que tienen cáncer estuvieron más expuestas, o que la asociación se probó pero no es extrapolable.',
        answer: 'Es la C. El punto estimado de uno coma tres parece sugerir más riesgo, pero su intervalo de confianza va de cero coma ochenta y seis a dos coma uno, y ese intervalo incluye el uno. Eso significa que no se puede descartar que el resultado se deba solamente al azar. Las opciones A y B caen en la misma trampa: afirman el riesgo como si fuera un hecho probado, ignorando que el intervalo cruza el valor nulo.' },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Qué fórmula usar', tag: 'La decide el diseño', kind: 'key', items: [
          { t: 'Cohorte o ensayo clínico', d: 'Riesgo Relativo',
            say: 'Cerremos con las reglas de oro. En cohorte o ensayo clínico, la medida es el Riesgo Relativo.' },
          { t: 'Casos y controles', d: 'Odds Ratio',
            say: 'En casos y controles, es el Odds Ratio.' },
          { t: 'Beneficio real de un tratamiento', d: 'Reducción absoluta y número necesario a tratar',
            say: 'Y para el beneficio real de un tratamiento, son la reducción absoluta del riesgo y el número necesario a tratar, siempre redondeado hacia arriba.' },
        ] },
        { title: 'La lectura del intervalo', tag: 'Nunca te quedes con el número solo', kind: 'alert', items: [
          { t: 'Revisa siempre si cruza el valor nulo', d: 'Uno para razones, cero para diferencias',
            say: 'Antes de afirmar cualquier asociación, revisa si su intervalo de confianza cruza el valor nulo: el uno para el Riesgo Relativo y el Odds Ratio, el cero para la reducción absoluta. Si te llevas una sola idea de hoy: el diseño te dice qué fórmula usar, y el intervalo de confianza te dice si esa fórmula significa algo de verdad. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Qué medida calcular y cómo leerla',
    root: N(
      'start', 'Tienes la tabla 2x2 completa', '¿Qué diseño generó estos datos?',
      'El diseño del estudio, no tu preferencia, decide qué fórmula corresponde calcular.',
      ['Cohorte o ensayo clínico (hay incidencia real)', N(
        'ok', 'Riesgo Relativo', 'Incidencia en expuestos entre incidencia en no expuestos',
        'Uno significa sin asociación, mayor a uno factor de riesgo, menor a uno factor protector.',
        ['¿Es un ensayo clínico con tratamiento?', N(
          'do', 'Calcula también RRA y NNT', 'Reducción absoluta y número necesario a tratar',
          'La reducción absoluta es la resta de riesgos; el número necesario a tratar es uno dividido en esa resta, redondeado hacia arriba.',
        )],
      )],
      ['Casos y controles (no hay incidencia real)', N(
        'refer', 'Odds Ratio', 'Producto cruzado: a por d, entre b por c',
        'Se aproxima al Riesgo Relativo cuando la enfermedad es rara; es la única medida calculable en este diseño.',
      )],
      ['En cualquiera de los dos casos', N(
        'q', '¿El intervalo de confianza cruza el valor nulo?', 'Uno para razones, cero para diferencias',
        'Si el intervalo incluye el valor nulo, el resultado no es estadísticamente significativo, sin importar cuán llamativo se vea el número puntual.',
      )],
    ),
  },
};
