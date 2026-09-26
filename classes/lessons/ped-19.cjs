// Clase 18.19 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-19).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

const pwTardia = N('alert', 'Sepsis tardía: nosocomial', 'Vancomicina más amikacina',
  'Si empezó después de las setenta y dos horas, piensas en transmisión nosocomial, casi siempre por Staphylococcus coagulasa negativo. El esquema cambia por completo: vancomicina más amikacina.');

const pwMeningitis = N('alert', 'Sospecha de meningitis', 'Cefotaxima en vez de gentamicina',
  'Y si hay signos de meningitis, cambias la gentamicina por cefotaxima, porque penetra mucho mejor al líquido cefalorraquídeo. La ampicilina se mantiene siempre, por la Listeria.');

const pwPrecoz = N('do', 'Ampicilina más gentamicina', 'Sin esperar los cultivos',
  'Si empezó antes de las setenta y dos horas, es sepsis precoz, casi siempre por transmisión vertical. Inicias ampicilina más gentamicina de inmediato, sin esperar los cultivos.',
  ['Sospecha meningitis', pwMeningitis]);

const pwMomento = N('q', '¿Antes o después de 72 horas?', 'El momento decide el germen y el esquema',
  'La pregunta que ordena todo el tema es una sola: ¿esto empezó antes o después de las setenta y dos horas de vida? Antes, es transmisión vertical. Después, es nosocomial. Y cada una tiene su propio esquema antibiótico.',
  ['Antes de 72 horas', pwPrecoz],
  ['Después de 72 horas', pwTardia]);

const pwRoot = N('start', 'Recién nacido con signos sutiles', 'Hipotermia, letargia, mala succión, apneas',
  'Tienes un recién nacido con signos sutiles: hipotermia en vez de fiebre, letargia, mala succión, o apneas. Ya sospechas sepsis neonatal, y ahora necesitas ordenar el estudio y el tratamiento.',
  ['', pwMomento]);

module.exports = {
  id: 'ped-19',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Antes o después de las 72 horas: la pregunta que decide el germen y el esquema',
      say: 'Bienvenido a la clase de sepsis neonatal, una urgencia pediátrica mayor y uno de los temas de mayor rentabilidad del banco. Vas a ver que todo el tema se ordena con una sola pregunta: ¿esto empezó antes o después de las setenta y dos horas de vida? De esa respuesta depende el germen que sospechas, los factores de riesgo que buscas en la historia obstétrica, y el esquema antibiótico que inicias, siempre antes de tener el resultado del cultivo. Empecemos.',
    },

    {
      type: 'points',
      kicker: 'La clínica es sutil',
      title: 'Cómo se ve un recién nacido séptico',
      cards: [
        { title: 'Signos que se te pueden pasar', tag: 'Nada de fiebre alta y evidente', kind: 'alert', items: [
          { t: 'Hipotermia, no fiebre', d: 'Más frecuente en el prematuro',
            say: 'Olvídate de buscar fiebre alta como en el adulto. En el recién nacido, sobre todo en el prematuro, el signo más frecuente de infección grave es la hipotermia, no la fiebre.' },
          { t: 'Letargia y mala succión', d: 'El bebé deja de comer bien',
            say: 'Se suma letargia, hipotonía, y algo que las madres notan enseguida: el bebé deja de mamar bien.' },
          { t: 'Apneas y llene capilar lento', d: 'Más de 3 segundos',
            say: 'Y en lo cardiorrespiratorio, apneas que aparecen de la nada, taquicardia persistente, y un llene capilar de más de tres segundos, que ya te habla de mala perfusión y de un shock que empieza a instalarse.' },
        ] },
        { title: 'El laboratorio que confirma la sospecha', tag: 'No es la leucocitosis', kind: 'key', items: [
          { t: 'Leucopenia, no leucocitosis', d: 'Menos de 5.000 por mm3',
            say: 'Aquí hay una trampa clásica: el marcador más grave no es la leucocitosis, es la leucopenia, por debajo de cinco mil, porque significa que la médula ya se agotó.' },
          { t: 'Relación inmaduros/totales alta', d: 'Más de 0,20',
            say: 'Y el marcador más sensible es la relación entre neutrófilos inmaduros y totales, que sobre cero coma veinte te habla de una desviación muy marcada hacia la izquierda.' },
          { t: 'Trombocitopenia', d: 'Menos de 100.000 por mm3',
            say: 'Súmale la trombocitopenia, por debajo de cien mil, que refleja el consumo de plaquetas dentro de una coagulación intravascular que ya empezó.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'No olvides el resto del cuerpo',
      title: 'Otros signos que acompañan la sepsis',
      cards: [
        { title: 'Digestivo y metabólico', tag: 'Signos que se te pueden pasar', kind: 'normal', items: [
          { t: 'Distensión y residuo bilioso', d: 'El intestino también sufre la sepsis',
            say: 'No te quedes solo con lo respiratorio y lo hemodinámico. El bebé también puede tener vómitos, distensión abdominal y residuo gástrico bilioso, porque el intestino sufre igual que el resto del cuerpo.' },
          { t: 'Hipoglicemia o hiperglicemia', d: 'Disfunción metabólica por la sepsis',
            say: 'Y la glicemia se descontrola en ambos sentidos: hipoglicemia o hiperglicemia, según qué tan comprometido esté el paciente. Por eso el aporte de glucosa se mantiene continuo mientras dura el tratamiento, y se controla varias veces al día junto con el resto de los signos vitales.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Sepsis precoz',
      title: 'Transmisión vertical: madre a hijo',
      nodes: [
        { id: 'rpm', col: 0, row: 0, k: 'cause', t: 'Rotura de membranas prolongada', s: 'Más de 18 horas' },
        { id: 'cor', col: 0, row: 1, k: 'cause', t: 'Corioamnionitis materna', s: 'Fiebre intraparto, útero doloroso' },
        { id: 'egb', col: 0, row: 2, k: 'cause', t: 'Madre colonizada por estreptococo', s: 'Sin profilaxis completa' },
        { id: 'ver', col: 1, row: 1, k: 'mech', t: 'Transmisión por el canal del parto', s: 'El recién nacido se contamina al nacer' },
        { id: 'ger', col: 2, row: 1, k: 'effect', t: 'Estreptococo agalactiae y E. coli', s: 'Los dos gérmenes más frecuentes' },
      ],
      edges: [
        { from: 'rpm', to: 'ver' },
        { from: 'cor', to: 'ver' },
        { from: 'egb', to: 'ver' },
        { from: 'ver', to: 'ger' },
      ],
      steps: [
        { show: ['rpm'], note: 'Más de 18 horas: factor de riesgo mayor',
          say: 'Partamos por la sepsis precoz, la que empieza antes de las setenta y dos horas de vida y explica la mayoría de los casos graves. El primer factor de riesgo que te tienes que aprender es la rotura de membranas de más de dieciocho horas.' },
        { show: ['cor'], note: 'Fiebre materna intraparto',
          say: 'El segundo es la corioamnionitis materna: fiebre durante el trabajo de parto, taquicardia fetal, útero doloroso a la palpación, o una secreción vaginal con mal olor.' },
        { show: ['egb'], note: 'La colonización sin profilaxis completa el riesgo',
          say: 'Y el tercero es que la madre esté colonizada por estreptococo grupo B y no haya recibido la profilaxis antibiótica completa durante el parto. Esa profilaxis se hace con penicilina o ampicilina endovenosa, iniciada al menos cuatro horas antes de que nazca el bebé; si empieza más tarde, ya no cuenta como completa.' },
        { show: ['ver', 'ger'], note: 'El niño se infecta al pasar por el canal',
          say: 'Con cualquiera de estos factores, el recién nacido se contamina al pasar por el canal del parto, y los dos gérmenes que más vas a encontrar son el estreptococo agalactiae, que explica más de la mitad de los casos, y la escherichia coli, más frecuente en el prematuro.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Sepsis tardía',
      title: 'La otra cara del tema: infección nosocomial',
      cards: [
        { title: 'Sepsis tardía', tag: 'Después de las 72 horas', kind: 'criteria', items: [
          { t: 'Nosocomial o comunitaria', d: 'Catéteres, tubos, personal de salud',
            say: 'Y ahora la otra cara del tema. La sepsis tardía empieza después de las setenta y dos horas, casi siempre por transmisión nosocomial, a través de catéteres venosos, tubos endotraqueales o el personal de salud dentro de la unidad de cuidados intensivos neonatales.' },
          { t: 'Staphylococcus coagulasa negativo', d: 'El germen más frecuente en UCIN',
            say: 'El germen más frecuente ya no es el estreptococo, es el Staphylococcus coagulasa negativo, junto con enterobacterias hospitalarias.' },
          { t: 'Se ve más insidiosa', d: 'Apneas, mala tolerancia digestiva',
            say: 'Y la clínica suele ser más insidiosa que la precoz: apneas, mala tolerancia a la alimentación, y a veces meningitis asociada. Aparece sobre todo en el prematuro que lleva días o semanas en la unidad neonatal, conectado a catéteres o a un tubo endotraqueal.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Antibióticos empíricos',
      title: 'El esquema no espera al cultivo',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Sospecha de sepsis precoz', s: 'Hemocultivos antes de tratar' },
        { id: 'amp', col: 1, row: 0, k: 'good', t: 'Ampicilina', s: 'Cubre estreptococo y Listeria' },
        { id: 'gen', col: 2, row: 0, k: 'good', t: 'Gentamicina', s: 'Cubre gramnegativos, hace sinergia' },
        { id: 'cef', col: 2, row: 2, k: 'trap', t: 'Cefotaxima', s: 'Si hay sospecha de meningitis' },
        { id: 'lis', col: 3, row: 1, k: 'alert', t: 'Listeria resiste a cefalosporinas', s: 'Por eso la ampicilina es obligatoria' },
      ],
      edges: [
        { from: 'sos', to: 'amp' },
        { from: 'sos', to: 'gen' },
        { from: 'gen', to: 'cef', label: 'si hay meningitis' },
        { from: 'amp', to: 'lis', label: 'la cubre solo ella' },
      ],
      steps: [
        { show: ['sos'], note: 'Tomas los cultivos, pero no esperas el resultado',
          say: 'Con la sospecha de sepsis precoz, tomas hemocultivos, hemograma y punción lumbar, pero no esperas ningún resultado para empezar a tratar. El esquema se inicia dentro de la primera hora.' },
        { show: ['amp'], note: 'La base del esquema',
          say: 'La base es la ampicilina, que cubre al estreptococo agalactiae y, algo que muchos olvidan, a la Listeria monocytogenes.' },
        { show: ['gen'], note: 'Cubre lo que la ampicilina no cubre',
          say: 'Se combina con gentamicina, que cubre los gramnegativos como la escherichia coli, y además hace sinergia con la ampicilina contra el estreptococo.' },
        { show: ['cef'], note: 'Se cambia, no se agrega',
          say: 'Si hay sospecha de meningitis, cambias la gentamicina por cefotaxima, porque penetra mucho mejor al líquido cefalorraquídeo. Fíjate que se reemplaza, no se suma a las dos.' },
        { show: ['lis'], note: 'La razón por la que nunca falta la ampicilina',
          say: 'Y aquí está la pregunta de mecanismo que más se repite: la Listeria tiene resistencia intrínseca a todas las cefalosporinas, sin excepción, porque carece de los receptores a los que ese fármaco se une. Por eso, aunque uses cefotaxima para la meningitis, la ampicilina nunca se quita del esquema.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Dosis que se preguntan',
      title: 'Cómo se dosifican los antibióticos',
      head: ['Antimicrobiano', 'Dosis', 'Espectro que cubre'],
      rows: [
        { cells: ['Ampicilina', '100 a 200 mg/kg/día cada 12 h', 'Estreptococo agalactiae y Listeria'],
          say: 'Un par de dosis que se preguntan. La ampicilina se da entre cien y doscientos miligramos por kilo al día, cada doce horas en la primera semana, y cubre al estreptococo agalactiae y a la Listeria.' },
        { cells: ['Gentamicina', '4 a 5 mg/kg cada 24 h', 'Bacilos gramnegativos, sinergia con ampicilina'],
          say: 'La gentamicina, cuatro a cinco miligramos por kilo cada veinticuatro horas, cubre los bacilos gramnegativos y potencia a la ampicilina contra el estreptococo.' },
        { cells: ['Cefotaxima', '100 a 150 mg/kg/día', 'Gramnegativos, excelente en el LCR'],
          say: 'La cefotaxima, cien a ciento cincuenta miligramos por kilo al día, es la que eliges cuando necesitas buena penetración al líquido cefalorraquídeo.' },
        { cells: ['Vancomicina', '10 a 15 mg/kg cada 8 a 12 h', 'Staphylococcus, con niveles en sangre'],
          say: 'Y la vancomicina, diez a quince miligramos por kilo cada ocho a doce horas, con monitoreo de niveles en sangre, para la sepsis tardía por Staphylococcus.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Sepsis tardía: el otro esquema',
      title: 'Cuando el germen ya no es el mismo',
      cards: [
        { title: 'Esquema para la sepsis tardía', tag: 'Cubre Staphylococcus', kind: 'pharma', items: [
          { t: 'Vancomicina más amikacina', d: 'O meropenem si hay shock séptico',
            say: 'Para la sepsis tardía, el esquema cambia por completo: vancomicina, que cubre el Staphylococcus coagulasa negativo y el aureus resistente, más amikacina, o meropenem si el paciente está en shock séptico o si sospechas una pseudomona, muy típica de los pacientes que llevan mucho tiempo intubados en la unidad neonatal.' },
          { t: 'No repitas el esquema precoz', d: 'El germen ya cambió',
            say: 'Si repites ampicilina y gentamicina en una sepsis tardía, te equivocaste de germen: ya no estás tratando lo que trajo el parto, estás tratando lo que trajo la unidad neonatal. Y si el paciente no mejora con vancomicina y amikacina, hay que pensar también en Candida, sobre todo en el prematuro extremo con catéter central por muchos días.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos las setenta y dos horas y los dos esquemas en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Precoz versus tardía: lo que decide el examen',
      head: ['Situación', 'Sospecha', 'Esquema'],
      rows: [
        { cells: ['Antes de 72 horas, RPM o corioamnionitis', 'Sepsis precoz, transmisión vertical', 'Ampicilina más gentamicina'],
          say: 'Repasemos las trampas. Antes de las setenta y dos horas, con rotura de membranas o corioamnionitis: sepsis precoz. Ampicilina más gentamicina, sin esperar el cultivo.' },
        { cells: ['Sospecha de meningitis asociada', 'Cambia el aminoglucósido', 'Ampicilina más cefotaxima'],
          say: 'Si hay sospecha de meningitis: cambias el aminoglucósido, no la ampicilina. Ampicilina más cefotaxima.' },
        { cells: ['Después de 72 horas, en UCIN', 'Sepsis tardía, nosocomial', 'Vancomicina más amikacina'],
          say: 'Después de las setenta y dos horas, en una unidad neonatal: sepsis tardía. Vancomicina más amikacina, no el esquema de la precoz.' },
        { cells: ['Cefalosporina de tercera generación sola', 'Deja sin cubrir a Listeria', 'Siempre agregar ampicilina'],
          say: 'Y la trampa de mecanismo: usar una cefalosporina de tercera generación sola deja a la Listeria sin cubrir. Siempre agregas ampicilina.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Recién nacido de 28 horas de vida, hijo de madre sin controles prenatales regulares, cuyo parto ocurrió tras 22 horas de rotura de membranas con fiebre materna intraparto de 38,4 grados. El niño no quiere mamar, está pálido y frío al tacto. Temperatura axilar de 35,8 grados, frecuencia cardíaca 174 por minuto, llene capilar de 4 segundos. El hemograma muestra 4.100 leucocitos por mm3 con una relación de inmaduros sobre totales de 0,32.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Alta con control ambulatorio en 48 horas' },
        { letter: 'B', text: 'Hospitalizar, tomar cultivos e iniciar ampicilina más gentamicina de inmediato' },
        { letter: 'C', text: 'Solo antipiréticos y observación por 24 horas' },
        { letter: 'D', text: 'Iniciar vancomicina más amikacina de entrada' },
        { letter: 'E', text: 'Suero glucosado y control de glicemia exclusivamente' },
      ],
      correct: 'B',
      explanation: 'Menos de 72 horas de vida, con factores de riesgo mayores (RPM prolongada y sospecha de corioamnionitis) y signos de sepsis (hipotermia, mala succión, taquicardia, llene capilar lento) más leucopenia con desviación a la izquierda: sepsis neonatal precoz. Se hospitaliza, se toman cultivos y se inicia ampicilina más gentamicina sin retrasar el tratamiento.',
      say: {
        stem: 'Vamos con un caso. Recién nacido de veintiocho horas de vida, con veintidós horas de rotura de membranas y fiebre materna intraparto. El niño no quiere mamar, está pálido y frío, con hipotermia y taquicardia. El llene capilar tarda cuatro segundos, y el hemograma muestra leucopenia con desviación a la izquierda marcada.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: alta con control en cuarenta y ocho horas, hospitalizar con cultivos e iniciar ampicilina más gentamicina, solo antipiréticos y observación, vancomicina más amikacina de entrada, o solo suero glucosado. Tómate unos segundos.',
        answer: 'Es la B. Menos de setenta y dos horas de vida, con rotura de membranas prolongada y fiebre materna: los dos factores de riesgo mayores de sepsis precoz. Y el cuadro lo confirma: hipotermia, mala succión, taquicardia, llene capilar lento, leucopenia con desviación a la izquierda marcada. Hospitalizas, tomas los cultivos, e inicias ampicilina más gentamicina sin esperar ningún resultado. La vancomicina es para la sepsis tardía, y aquí el reloj corre en horas, no en días.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 99',
      stem: 'Recién nacido de 10 días de vida, sin antecedentes perinatales, inicia desde hace 5 horas un cuadro caracterizado por fiebre hasta 39 grados asociada a rechazo alimentario e hiporreactividad, sin otros síntomas. Su examen físico resulta normal. La bioquímica de orina muestra leucocitos ++.',
      question: '¿Cuál es la conducta más adecuada en este caso?',
      options: [
        { letter: 'A', text: 'Solicitar sedimento de orina y decidir conducta según resultados' },
        { letter: 'B', text: 'Hospitalizar para estudio y manejo' },
        { letter: 'C', text: 'Indicar antipiréticos orales y control en dos días' },
        { letter: 'D', text: 'Indicar antibióticos vía oral y control en dos días' },
        { letter: 'E', text: 'Solicitar ecografía renal y vesical' },
      ],
      correct: 'B',
      explanation: 'Recién nacido con fiebre alta, rechazo alimentario e hiporreactividad: cuadro compatible con sepsis neonatal hasta que se demuestre lo contrario. La conducta es hospitalizar para estudio séptico completo y manejo, no manejar de forma ambulatoria ni por vía oral.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil trece. Recién nacido de diez días de vida, sin antecedentes, que desde hace cinco horas tiene fiebre hasta treinta y nueve grados, rechazo alimentario e hiporreactividad, sin otros síntomas y con examen físico normal.',
        question: '¿Cuál es la conducta más adecuada en este caso?',
        options: 'Las opciones: sedimento de orina y decidir según resultado, hospitalizar para estudio y manejo, antipiréticos orales y control en dos días, antibióticos orales y control en dos días, o ecografía renal y vesical. Piénsalo.',
        answer: 'Es la B. En un recién nacido, fiebre alta con rechazo alimentario e hiporreactividad no se maneja nunca de forma ambulatoria ni por vía oral: es sepsis neonatal hasta que se demuestre lo contrario. Hospitalizas, tomas cultivos, y empiezas el manejo completo. Esperar el sedimento de orina en la casa, o tratarlo con antibióticos orales, subestima la gravedad de un recién nacido séptico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Un residente propone tratar la sospecha de sepsis neonatal precoz solo con cefotaxima, en lugar de la combinación de ampicilina más un aminoglucósido, argumentando que la cefotaxima ya cubre bien a los gramnegativos.',
      question: '¿Por qué la ampicilina es obligatoria en el esquema, y no puede reemplazarse por cefotaxima sola?',
      options: [
        { letter: 'A', text: 'Porque las cefalosporinas no cubren a Escherichia coli' },
        { letter: 'B', text: 'Porque Listeria monocytogenes tiene resistencia intrínseca a todas las cefalosporinas' },
        { letter: 'C', text: 'Porque la ampicilina es el único fármaco activo contra Pseudomonas' },
        { letter: 'D', text: 'Porque las cefalosporinas están contraindicadas en el recién nacido' },
        { letter: 'E', text: 'Por razones exclusivamente de costo' },
      ],
      correct: 'B',
      explanation: 'La Listeria monocytogenes es intrínsecamente resistente a todas las cefalosporinas, incluida la cefotaxima. Por eso la ampicilina es un componente insustituible del esquema empírico de la sepsis neonatal precoz, sin importar cuánto cubra la cefotaxima a los demás gérmenes.',
      say: {
        stem: 'Una última, del banco, sobre el mecanismo detrás del esquema. Un residente propone tratar la sospecha de sepsis precoz solo con cefotaxima, en vez de ampicilina más un aminoglucósido, porque dice que la cefotaxima ya cubre bien a los gramnegativos.',
        question: '¿Por qué la ampicilina es obligatoria, y no se puede reemplazar por cefotaxima sola?',
        options: 'Las opciones: las cefalosporinas no cubren escherichia coli, la Listeria resiste a todas las cefalosporinas, la ampicilina es la única activa contra pseudomona, las cefalosporinas están contraindicadas en el recién nacido, o es solo por costo. Piénsalo.',
        answer: 'Es la B. El residente tiene razón en que la cefotaxima cubre bien a los gramnegativos, pero se le escapa un germen: la Listeria monocytogenes tiene resistencia intrínseca a todas las cefalosporinas, sin excepción. Por eso la ampicilina nunca se saca del esquema empírico, sin importar qué tan buena sea la cefalosporina que elijas para lo demás.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La regla de las 72 horas', tag: 'Lo primero que preguntas', kind: 'key', items: [
          { t: 'Antes de las 72 horas', d: 'Vertical: estreptococo y E. coli',
            say: 'Cerremos con las reglas de oro. Antes de las setenta y dos horas, transmisión vertical: estreptococo agalactiae y escherichia coli.' },
          { t: 'Después de las 72 horas', d: 'Nosocomial: Staphylococcus coagulasa negativo',
            say: 'Después de las setenta y dos horas, transmisión nosocomial: Staphylococcus coagulasa negativo.' },
        ] },
        { title: 'Clínica sutil', tag: 'No busques fiebre', kind: 'alert', items: [
          { t: 'Hipotermia, no fiebre', d: 'Con leucopenia, no leucocitosis',
            say: 'En el recién nacido, el signo grave es la hipotermia, no la fiebre, y el laboratorio grave es la leucopenia, no la leucocitosis.' },
        ] },
        { title: 'Los esquemas', tag: 'No se mezclan', kind: 'pharma', items: [
          { t: 'Precoz: ampicilina más gentamicina', d: 'Cefotaxima si hay meningitis',
            say: 'En la precoz, ampicilina más gentamicina, y cambias a cefotaxima si sospechas meningitis.' },
          { t: 'Tardía: vancomicina más amikacina', d: 'La ampicilina nunca se quita',
            say: 'En la tardía, vancomicina más amikacina. Y en cualquiera de los dos esquemas, la ampicilina cubre algo que ningún otro fármaco cubre: la Listeria. Si te llevas una sola idea de hoy: antes de las setenta y dos horas es vertical, después es nosocomial, y el tratamiento empieza antes de tener el cultivo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Sepsis neonatal: precoz versus tardía',
    root: pwRoot,
  },
};
