// Clase 2.2 (Diabetes) — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-07).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-07',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'El riñón decide la metformina; la edad y la hipoglicemia deciden la glibenclamida',
      say: 'Bienvenidos. En la clase anterior armamos la escalera del tratamiento, y sus dos primeros peldaños eran la metformina y la glibenclamida. Hoy los miramos de cerca, porque el examen no pregunta tanto cuándo usarlos, sino cuándo no: la metformina tiene un límite renal estricto, y la glibenclamida produce una de las hipoglicemias más peligrosas de la medicina. Partamos por la metformina.',
    },

    {
      type: 'flow',
      kicker: 'Metformina',
      title: '¿Cómo baja la glicemia la metformina?',
      nodes: [
        { id: 'met', col: 0, row: 1, k: 'cause', t: 'Metformina', s: 'Biguanida' },
        { id: 'ampk', col: 1, row: 1, k: 'mech', t: 'Activa la AMPK hepática', s: 'Proteína quinasa activada por AMP' },
        { id: 'neo', col: 2, row: 0, k: 'mech', t: 'Frena la gluconeogénesis', s: 'Y la glucogenólisis' },
        { id: 'hep', col: 3, row: 0, k: 'good', t: 'Menos glucosa hepática', s: 'Efecto principal' },
        { id: 'mus', col: 2, row: 2, k: 'effect', t: 'Más captación muscular', s: 'En menor medida' },
        { id: 'hip', col: 4, row: 1, k: 'good', t: 'Sin hipoglicemia', s: 'En monoterapia' },
      ],
      edges: [
        { from: 'met', to: 'ampk' }, { from: 'ampk', to: 'neo' }, { from: 'neo', to: 'hep' },
        { from: 'ampk', to: 'mus' }, { from: 'hep', to: 'hip' }, { from: 'mus', to: 'hip' },
      ],
      steps: [
        { show: ['met', 'ampk'], note: 'La misma enzima del ejercicio',
          say: '¿Recuerdas la AMPK de la clase de ejercicio? La metformina activa esa misma enzima, pero sobre todo en el hígado.' },
        { show: ['neo'], note: 'El hígado deja de fabricar glucosa',
          say: 'Al activarla, frena la gluconeogénesis y la glucogenólisis. Es decir, el hígado deja de fabricar glucosa y de liberar la que tenía guardada.' },
        { show: ['hep'], note: 'El efecto principal',
          say: 'El resultado es una caída importante de la producción hepática de glucosa. Ese es su efecto principal, y explica por qué la metformina es tan buena para bajar la glicemia de ayuno, que depende del hígado durante la noche.' },
        { show: ['mus'], note: 'Efecto secundario',
          say: 'En menor medida, también aumenta la captación de glucosa en el músculo.' },
        { show: ['hip'], note: 'No obliga al páncreas a nada',
          say: 'Y fíjate en lo que no hace: no estimula al páncreas a liberar insulina. Por eso, usada sola, no produce hipoglicemia. Guarda este contraste, porque la glibenclamida hace exactamente lo contrario.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Metformina',
      title: 'El riñón decide la dosis',
      nodes: [
        { id: 'vfg', col: 0, row: 2, k: 'start', t: 'VFG del paciente', s: 'mL/min/1,73 m²' },
        { id: 'a45', col: 1, row: 0, k: 'good', t: 'VFG ≥ 45', s: 'Dosis plena, hasta 2.550 mg/día' },
        { id: 'a30', col: 1, row: 2, k: 'refer', t: 'VFG 30 a 44', s: 'Máximo 1.000 mg/día' },
        { id: 'b30', col: 1, row: 4, k: 'alert', t: 'VFG < 30', s: 'Contraindicación absoluta' },
        { id: 'lac', col: 2, row: 4, k: 'risk', t: 'Acidosis láctica', s: 'Mortalidad 40 a 50 %' },
        { id: 'con', col: 3, row: 1, k: 'trap', t: 'Contraste yodado o cirugía', s: 'Suspender 48 h antes' },
      ],
      edges: [
        { from: 'vfg', to: 'a45' }, { from: 'vfg', to: 'a30' }, { from: 'vfg', to: 'b30' },
        { from: 'b30', to: 'lac', label: 'se acumula' },
      ],
      steps: [
        { show: ['vfg'], note: 'Se elimina por el riñón',
          say: 'Ahora, la regla que más se pregunta. La metformina se elimina por el riñón, así que lo que decide la dosis es la velocidad de filtración glomerular.' },
        { show: ['a45'], note: 'Sobre 45: sin restricción',
          say: 'Con una filtración de cuarenta y cinco o más, se usa a dosis plena, hasta dos mil quinientos cincuenta miligramos al día.' },
        { show: ['a30'], note: 'Entre 30 y 44: se reduce',
          say: 'Entre treinta y cuarenta y cuatro, se reduce a un máximo de mil miligramos al día, es decir, quinientos cada doce horas, y se controla la función renal cada tres meses.' },
        { show: ['b30'], note: 'Bajo 30: se suspende',
          say: 'Y bajo treinta, es una contraindicación absoluta. Se suspende de inmediato, sin bajar la dosis ni esperar.' },
        { show: ['lac'], note: 'La complicación que se quiere evitar',
          say: '¿Por qué tan estricto? Porque si el riñón no la elimina, se acumula y produce acidosis láctica, un cuadro con una mortalidad de cuarenta a cincuenta por ciento. Es rara, pero es letal, y por eso el corte de treinta no se discute.' },
        { show: ['con'], note: 'Suspensión transitoria',
          say: 'Hay además dos situaciones en que se suspende transitoriamente, cuarenta y ocho horas antes: un estudio con medio de contraste yodado endovenoso, y una cirugía mayor. Las dos pueden dañar el riñón de golpe.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Metformina',
      title: 'Perfil clínico de la metformina',
      cards: [
        { title: 'Ventajas', tag: 'Primera línea', kind: 'key', items: [
          { t: 'Neutra o baja 1 a 2 kg', d: 'Ideal en el obeso',
            say: 'Resumamos el perfil de la metformina. En el peso es neutra, o incluso baja uno a dos kilos, lo que la hace ideal en un paciente con obesidad.' },
          { t: 'De elección en el adulto mayor', d: 'Si la función renal es segura',
            say: 'Y en el adulto mayor sigue siendo de elección, siempre que su función renal lo permita. Lo que limita la metformina en el anciano no es la edad, es el riñón.' },
        ] },
        { title: 'Efecto adverso cardinal', tag: 'Digestivo', kind: 'alert', items: [
          { t: 'Diarrea, náuseas, meteorismo', d: 'Titular lento y tomar con comida',
            say: 'Su efecto adverso cardinal es digestivo: diarrea, náuseas y meteorismo. Como vimos en la clase anterior, se evita titulando lento y tomándola con las comidas.' },
          { t: 'Déficit de B12 a largo plazo', d: 'Por malabsorción ileal',
            say: 'Y a largo plazo, el déficit de vitamina B doce. Si un diabético con años de metformina aparece con anemia o neuropatía, acuérdate de este dato.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Glibenclamida',
      title: 'Un secretagogo que no mira la glicemia',
      nodes: [
        { id: 'gli', col: 0, row: 1, k: 'cause', t: 'Glibenclamida', s: 'Sulfonilurea' },
        { id: 'sur', col: 1, row: 1, k: 'mech', t: 'Se une al receptor SUR-1', s: 'En la célula beta' },
        { id: 'katp', col: 2, row: 1, k: 'mech', t: 'Cierra los canales K-ATP', s: 'La membrana se despolariza' },
        { id: 'ins', col: 3, row: 1, k: 'effect', t: 'Libera insulina', s: 'Independiente de la glucosa' },
        { id: 'hip', col: 4, row: 0, k: 'risk', t: 'Hipoglicemia', s: 'Aunque la glicemia ya esté baja' },
        { id: 'met', col: 4, row: 2, k: 'alert', t: 'Metabolitos activos', s: 'Eliminación renal: 24 a 48 h' },
      ],
      edges: [
        { from: 'gli', to: 'sur' }, { from: 'sur', to: 'katp' }, { from: 'katp', to: 'ins' },
        { from: 'ins', to: 'hip' }, { from: 'gli', to: 'met', label: 'hígado' }, { from: 'met', to: 'hip', label: 'prolonga' },
      ],
      steps: [
        { show: ['gli'], note: 'El segundo escalón en APS',
          say: 'Vamos con la glibenclamida, la sulfonilurea de la canasta GES. Es un secretagogo de insulina: su trabajo es obligar al páncreas a liberar insulina.' },
        { show: ['sur', 'katp'], note: 'Cierra el canal de potasio',
          say: 'Se une al receptor SUR uno de la célula beta y cierra los canales de potasio dependientes de ATP. Al cerrarse, la membrana se despolariza.' },
        { show: ['ins'], note: 'Libera insulina sin importar la glicemia',
          say: 'Y la célula libera en forma masiva la insulina que tenía guardada. El punto clave es que lo hace en forma independiente de la concentración de glucosa. La glibenclamida no mira la glicemia.' },
        { show: ['hip'], note: 'Por eso produce hipoglicemia',
          say: 'Entonces, aunque la glicemia ya esté baja, el paciente sigue liberando insulina. Eso es la hipoglicemia, y es el efecto adverso más temido de este fármaco. Compáralo con la metformina, que no toca el páncreas.' },
        { show: ['met'], note: 'Por eso la hipoglicemia dura tanto',
          say: 'Y hay un segundo problema. La glibenclamida tiene metabolitos activos que se eliminan por el riñón. En un adulto mayor o en un paciente con falla renal, se acumulan, y la hipoglicemia puede durar veinticuatro a cuarenta y ocho horas continuas, aunque le pongas glucosa.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Glibenclamida',
      title: 'Efectos adversos y a quién evitársela',
      cards: [
        { title: 'Efectos adversos', tag: 'Tres', kind: 'alert', items: [
          { t: 'Hipoglicemia severa y prolongada', d: 'El más temido',
            say: 'Los efectos adversos de la glibenclamida son tres. El primero, ya lo vimos: hipoglicemias severas y prolongadas.' },
          { t: 'Aumento de peso de 2 a 4 kg', d: 'Por la hiperinsulinemia',
            say: 'El segundo, el aumento de peso, de dos a cuatro kilos en promedio, por la insulina alta que produce. Es lo opuesto a la metformina.' },
          { t: 'Agota la célula beta', d: 'Con los años',
            say: 'Y el tercero, que con los años agota la reserva de la célula beta, de tanto obligarla a trabajar.' },
        ] },
        { title: 'A quién evitársela', tag: 'Lo que se pregunta', kind: 'criteria', items: [
          { t: 'Adulto mayor', d: 'Desaconsejada: criterios de Beers',
            say: '¿A quién no se le da? Al adulto mayor: los criterios de Beers la marcan como un fármaco a evitar. Es el paciente que más acumula metabolitos y el que peor tolera una hipoglicemia.' },
          { t: 'Falla renal', d: 'VFG 30 a 44: precaución · VFG < 30: contraindicada',
            say: 'Y al paciente con falla renal: con una filtración entre treinta y cuarenta y cuatro se usa con precaución o se evita, y bajo treinta está contraindicada, por hipoglicemia refractaria. Fíjate que bajo treinta se caen los dos fármacos de esta clase, cada uno por su motivo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia',
      title: 'Hipoglicemia por glibenclamida: nunca de alta',
      nodes: [
        { id: 'pac', col: 0, row: 1, k: 'start', t: 'Hipoglicemia severa', s: 'Glicemia < 50 o compromiso de conciencia' },
        { id: 'bol', col: 1, row: 1, k: 'mech', t: 'Bolo de glucosa', s: 'Recupera la conciencia' },
        { id: 'alta', col: 2, row: 0, k: 'trap', t: 'Dar de alta', s: 'Error fatal' },
        { id: 'hos', col: 2, row: 2, k: 'good', t: 'Hospitalizar', s: 'Suero glucosado al 10 % por ≥ 24 h' },
        { id: 'sus', col: 3, row: 2, k: 'good', t: 'Suspender glibenclamida', s: 'En forma definitiva' },
      ],
      edges: [
        { from: 'pac', to: 'bol' }, { from: 'bol', to: 'alta', label: 'nunca' },
        { from: 'bol', to: 'hos' }, { from: 'hos', to: 'sus' },
      ],
      steps: [
        { show: ['pac'], note: 'El escenario típico del examen',
          say: 'Y esto nos lleva a la regla de oro de urgencia de esta clase. Llega un paciente usuario de glibenclamida con una hipoglicemia severa: glicemia bajo cincuenta, o compromiso de conciencia.' },
        { show: ['bol'], note: 'Se corrige rápido',
          say: 'Se le pone un bolo de glucosa endovenosa, y el paciente despierta en minutos, con una glicemia normal. Se siente bien y pide irse.' },
        { show: ['alta'], note: 'La glibenclamida sigue circulando',
          say: 'Darle el alta es un error fatal. Piensa en el mecanismo: el fármaco y sus metabolitos siguen circulando, y siguen obligando al páncreas a liberar insulina. Apenas se termine el azúcar del bolo, vuelve a caer en coma hipoglicémico.' },
        { show: ['hos'], note: 'Al menos 24 horas de glucosa continua',
          say: 'Por eso el paciente se hospitaliza en observación, con una infusión continua de suero glucosado al diez por ciento, durante al menos veinticuatro horas.' },
        { show: ['sus'], note: 'Y no se reinicia',
          say: 'Y la glibenclamida se suspende en forma definitiva. Esa es la respuesta completa: hospitalizar, glucosa continua y suspender el fármaco.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos las dos decisiones de la clase en un solo árbol: qué fármaco puede usar este paciente, y qué hacer si hace una hipoglicemia.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Metformina vs glibenclamida',
      head: ['Parámetro', 'Metformina', 'Glibenclamida'],
      rows: [
        { cells: ['Mecanismo', 'Frena la gluconeogénesis hepática (AMPK)', 'Secretagogo: cierra canales K-ATP'],
          say: 'Comparemos los dos en una tabla, que es como el examen los enfrenta. En el mecanismo, la metformina frena al hígado; la glibenclamida obliga al páncreas.' },
        { cells: ['Hipoglicemia', 'Nula en monoterapia', 'Alto riesgo, prolongada y grave'],
          say: 'Por eso la metformina no da hipoglicemia en monoterapia, y la glibenclamida sí, prolongada y grave.' },
        { cells: ['Peso', 'Neutro o baja 1 a 2 kg', 'Sube 2 a 4 kg'],
          say: 'En el peso, la metformina es neutra o lo baja; la glibenclamida lo sube.' },
        { cells: ['VFG 30 a 44', 'Máximo 1.000 mg/día', 'Precaución o evitar'],
          say: 'Con filtración de treinta a cuarenta y cuatro, la metformina baja a mil miligramos, y la glibenclamida se usa con precaución o se evita.' },
        { cells: ['VFG < 30', 'Contraindicada: acidosis láctica', 'Contraindicada: hipoglicemia refractaria'],
          say: 'Bajo treinta, las dos están contraindicadas: la metformina por acidosis láctica, la glibenclamida por hipoglicemia refractaria.' },
        { cells: ['Adulto mayor', 'De elección si el riñón lo permite', 'Evitar (criterios de Beers)'],
          say: 'En el adulto mayor, la metformina es de elección si el riñón lo permite, y la glibenclamida se evita.' },
        { cells: ['Efecto adverso cardinal', 'Digestivo', 'Hipoglicemia sintomática grave'],
          say: 'Y el efecto adverso cardinal: digestivo para la metformina, hipoglicemia grave para la glibenclamida.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 76 años con DM2 de 15 años de evolución, en tratamiento con glibenclamida 5 mg cada 12 horas y metformina 850 mg/día. Llega en ambulancia por compromiso de conciencia y sudoración profusa. Hemoglucotest: 36 mg/dL. Tras dos ampollas de glucosa al 30% endovenosa recupera la conciencia, con glicemia de 110 mg/dL.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Alta con colación y control en APS' },
        { letter: 'B', text: 'Alta reduciendo la glibenclamida a la mitad' },
        { letter: 'C', text: 'Hospitalizar con suero glucosado al 10% por al menos 24 horas y suspender la glibenclamida' },
        { letter: 'D', text: 'Glucagón intramuscular y alta' },
        { letter: 'E', text: 'Suspender la metformina y dar el alta' },
      ],
      correct: 'C',
      explanation: 'Hipoglicemia severa por glibenclamida en una adulta mayor: los metabolitos activos se acumulan y la hipoglicemia recurre al terminar el bolo. Se hospitaliza con glucosa al 10% continua por 24 horas y se suspende la glibenclamida en forma definitiva.',
      say: {
        stem: 'Vamos con un caso. Mujer de setenta y seis años, diabética hace quince años, con glibenclamida y metformina. Llega en ambulancia con compromiso de conciencia y sudoración, y una glicemia de treinta y seis. Con dos ampollas de glucosa endovenosa despierta, y la glicemia sube a ciento diez.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: alta con colación, alta bajando la glibenclamida a la mitad, hospitalizar con suero glucosado y suspender la glibenclamida, glucagón y alta, o suspender la metformina y dar el alta. Piénsalo.',
        answer: 'Es la C. Es una hipoglicemia por glibenclamida en una adulta mayor, que acumula los metabolitos. Cuando se acabe el bolo, vuelve a caer. Se hospitaliza con glucosa continua por veinticuatro horas y se suspende la glibenclamida. La B es la trampa más tentadora: suena prudente, pero se va de alta con el fármaco circulando. Y la E culpa a la metformina, que no produce hipoglicemia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 118',
      stem: 'Un paciente de 85 años, con antecedente de deterioro funcional y cognitivo inicial y diagnóstico de diabetes mellitus tipo 2, en tratamiento con metformina 850 mg dos veces al día y glibenclamida 5 mg cada 12 horas, se realiza exámenes de control entre los que destaca una creatinina de 1,0 mg/dL y una hemoglobina glicosilada de 6,9%. Su examen físico no muestra alteraciones.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Suspender la glibenclamida' },
        { letter: 'B', text: 'Disminuir la dosis de glibenclamida a 5 mg una vez al día' },
        { letter: 'C', text: 'Suspender metformina' },
        { letter: 'D', text: 'Disminuir dosis de metformina' },
        { letter: 'E', text: 'Mantener el tratamiento sin cambios' },
      ],
      correct: 'A',
      explanation: 'Adulto mayor frágil, con deterioro funcional y cognitivo, en meta holgada: la glibenclamida debe evitarse en el adulto mayor por el riesgo de hipoglicemia prolongada. La metformina se mantiene porque su función renal lo permite.',
      say: {
        stem: 'Ahora las preguntas reales. La primera, del EUNACOM de agosto de dos mil veintiuno, es el caso que te anuncié en la clase anterior. Paciente de ochenta y cinco años, con deterioro funcional y cognitivo inicial, con metformina y glibenclamida. Creatinina normal y hemoglobina glicosilada de seis coma nueve.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: suspender la glibenclamida, bajarla a una vez al día, suspender la metformina, bajar la metformina, o mantener sin cambios. Piénsalo.',
        answer: 'Es la A. Con cincuenta y nueve años la respuesta era mantener. Pero este es un adulto mayor frágil, que además está bien controlado: la glibenclamida sobra, y es justamente el fármaco que se evita en el anciano por la hipoglicemia prolongada. La B es la trampa: bajar la dosis no elimina el riesgo. Y la metformina se queda, porque su riñón está bien.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 72',
      stem: 'Un paciente de 78 años, diabético, en tratamiento con glibenclamida 15 mg/día, presenta convulsiones tónico-clónicas subintrantes desde hace algunos minutos. Hace 3 días se realizó control de exámenes, con glicemia de ayuno de 185 mg/dl y electrolitos plasmáticos dentro de rangos normales.',
      question: '¿Cuál es la causa más probable de sus convulsiones?',
      options: [
        { letter: 'A', text: 'Hipomagnesemia' },
        { letter: 'B', text: 'Hipernatremia' },
        { letter: 'C', text: 'Hipoglicemia' },
        { letter: 'D', text: 'Hipocalcemia' },
        { letter: 'E', text: 'Cetoacidosis' },
      ],
      correct: 'C',
      explanation: 'La glibenclamida tiene alto riesgo de hipoglicemia, sobre todo en el adulto mayor. Una glicemia alta hace 3 días no impide que ahora esté baja: es típico que el paciente mal controlado refuerce por su cuenta la dosis.',
      say: {
        stem: 'Del EUNACOM de agosto de dos mil veintiuno. Paciente de setenta y ocho años con glibenclamida, quince miligramos al día, que presenta convulsiones tónico clónicas subintrantes. Hace tres días tenía una glicemia de ayuno de ciento ochenta y cinco y electrolitos normales.',
        question: '¿Cuál es la causa más probable de sus convulsiones?',
        options: 'Las opciones: hipomagnesemia, hipernatremia, hipoglicemia, hipocalcemia o cetoacidosis. Piénsalo.',
        answer: 'Es la C, hipoglicemia. Adulto mayor con glibenclamida: ese es el paciente con más riesgo. El distractor es la glicemia de ciento ochenta y cinco de hace tres días, que te invita a pensar en hiperglicemia. Pero es típico que el paciente, al ver ese resultado, se refuerce la dosis por su cuenta. Y recuerda que, una vez corregida, esta hipoglicemia obliga a hospitalizar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 40',
      stem: 'Un paciente de 67 años, diabético, tipo 2, en tratamiento con metformina 1700 mg/día y glibenclamida 20 mg/día, ambos separados en dos dosis diarias consulta por episodios repetidos de mareos, malestar y sudoración, asociado a temblor, que ocurren al final de la mañana o antes de almuerzo. Han coincidido con glicemias capilares de 65 mg/dl. Su IMC es 32 Kg/m2. Su hemoglobina A1c resulta 8,1.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Suspender la glibenclamida' },
        { letter: 'B', text: 'Agregar una colación con 25 gramos de hidrato de carbono antes del almuerzo' },
        { letter: 'C', text: 'Suspender la glibenclamida' },
        { letter: 'D', text: 'Reemplazar la glibenclamida por sitagliptina' },
        { letter: 'E', text: 'Reemplazar la metformina por pioglitazona' },
      ],
      correct: 'D',
      explanation: 'Las hipoglicemias son causadas por la glibenclamida, que debe cambiarse por otro hipoglicemiante sin riesgo de hipoglicemia. Como el control metabólico es malo (HbA1c 8,1), no basta con suspenderla ni con agregar una colación.',
      say: {
        stem: 'Y la última, del EUNACOM de diciembre de dos mil diecisiete. Paciente de sesenta y siete años, obeso, con metformina y glibenclamida en dosis alta. Tiene episodios de mareo, sudoración y temblor antes del almuerzo, con glicemias de sesenta y cinco. Su hemoglobina glicosilada es ocho coma uno.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: suspender la glibenclamida, que aparece dos veces, agregar una colación antes del almuerzo, reemplazar la glibenclamida por sitagliptina, o reemplazar la metformina por pioglitazona. Piénsalo.',
        answer: 'Es la D. La culpable de las hipoglicemias es la glibenclamida, así que hay que sacarla. Pero ojo: la hemoglobina glicosilada es ocho coma uno, está mal controlado, así que no basta con suspenderla; hay que reemplazarla por un fármaco que no dé hipoglicemia, como la sitagliptina. Y la colación sería tapar el problema subiendo aún más su glicemia. Las gliptinas las vemos en la próxima clase.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Metformina', tag: 'Manda el riñón', kind: 'key', items: [
          { t: 'Frena al hígado, sin hipoglicemia', d: 'Vía AMPK',
            say: 'Cerremos con las reglas de oro. La metformina frena la producción hepática de glucosa por la AMPK, y sola no produce hipoglicemia.' },
          { t: 'VFG 30 a 44: máx. 1.000 mg', d: 'VFG < 30: suspender (acidosis láctica)',
            say: 'Con filtración de treinta a cuarenta y cuatro, máximo mil miligramos; bajo treinta, se suspende por el riesgo de acidosis láctica.' },
        ] },
        { title: 'Glibenclamida', tag: 'Manda la edad', kind: 'alert', items: [
          { t: 'Libera insulina sin mirar la glicemia', d: 'Hipoglicemia de 24 a 48 horas',
            say: 'La glibenclamida libera insulina sin mirar la glicemia, y sus metabolitos prolongan la hipoglicemia hasta dos días.' },
          { t: 'Evitar en adulto mayor y nefrópata', d: 'Suspender si está sobretratado',
            say: 'Se evita en el adulto mayor y en la falla renal, y en el anciano bien controlado se suspende.' },
        ] },
        { title: 'Urgencia', tag: 'Regla de oro', kind: 'criteria', items: [
          { t: 'Hipoglicemia por glibenclamida', d: 'Hospitalizar + glucosa al 10 % por 24 h',
            say: 'Y la hipoglicemia por glibenclamida nunca se va de alta tras el bolo: se hospitaliza con glucosa continua por veinticuatro horas. Si te llevas una sola idea de hoy: la metformina la limita el riñón, y la glibenclamida, la hipoglicemia. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Metformina y glibenclamida: seguridad',
    root: N('start', 'DM2 con metformina y/o glibenclamida', 'Control o urgencia',
      'Paciente diabético tipo dos que usa metformina, glibenclamida o ambas. Dos preguntas ordenan la conducta: si hay una urgencia, y cómo está el riñón.',
      ['', N('q', '¿Hipoglicemia severa?', 'Glicemia < 50 o compromiso de conciencia',
        'Primero, la urgencia: ¿llega con una hipoglicemia severa?',
        ['Sí, con glibenclamida', N('alert', 'Hospitalizar 24 h', 'Glucosa al 10 % continua + suspender glibenclamida',
          'Si usa glibenclamida, bolo de glucosa y luego hospitalizar con suero glucosado al diez por ciento continuo por al menos veinticuatro horas, y suspender la glibenclamida. Nunca de alta tras el bolo.')],
        ['No', N('q', '¿VFG?', 'Decide la metformina',
          'Si no hay urgencia, la siguiente pregunta es el riñón.',
          ['≥ 45', N('ok', 'Metformina a dosis plena', 'Hasta 2.550 mg/día',
            'Con cuarenta y cinco o más, metformina a dosis plena.',
            ['Adulto mayor con glibenclamida', N('alert', 'Evitar glibenclamida', 'Criterios de Beers',
              'Pero aunque el riñón esté bien, en el adulto mayor la glibenclamida se evita, y si está sobretratado, se suspende. La metformina se queda.')])],
          ['30 a 44', N('do', 'Metformina máx. 1.000 mg/día', 'Glibenclamida con precaución o evitar',
            'Entre treinta y cuarenta y cuatro, metformina hasta mil miligramos, control renal cada tres meses, y la glibenclamida con precaución o evitarla.')],
          ['< 30', N('refer', 'Suspender ambas', 'Acidosis láctica · hipoglicemia refractaria',
            'Bajo treinta, se suspenden las dos: la metformina por acidosis láctica y la glibenclamida por hipoglicemia refractaria.')])])]),
  },
};
