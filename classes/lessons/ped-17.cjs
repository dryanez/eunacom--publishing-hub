// Clase 18.17 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-17).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

const pwExsang = N('alert', 'Exanguinotransfusión', 'Recambia dos volemias del paciente',
  'Y si la fototerapia falla, o el paciente muestra un signo precoz de encefalopatía aguda como el llanto agudo o el opistótonos, la conducta es la exanguinotransfusión, recambiando dos volemias completas.');

const pwFototerapia = N('do', 'Fototerapia LED continua', 'Controlas la respuesta en horas',
  'Si cae en la zona de alto riesgo, inicias fototerapia con luz azul de forma continua, y controlas la respuesta con bilirrubinas seriadas.',
  ['No responde', pwExsang]);

const pwObservacion = N('ok', 'Observación', 'Reforzar lactancia y control ambulatorio',
  'Si cae en la zona de bajo riesgo, no hay nada que hacer más que reforzar la lactancia y controlar de forma ambulatoria.');

const pwBhutani = N('q', '¿Qué muestra el nomograma de Bhutani?', 'Bilirrubina versus horas de vida',
  'Entre el segundo y el décimo día, lo esperable es que sea fisiológica. Para decidir si necesita tratamiento, ubicas la bilirrubina en el nomograma de Bhutani, cruzando el valor con las horas de vida exactas.',
  ['Bajo riesgo', pwObservacion],
  ['Alto riesgo', pwFototerapia]);

const pwPatologica = N('alert', 'Patológica: sospecha hemolítica', 'Coombs, hemograma y bilirrubina urgente',
  'Antes de las veinticuatro horas es patológica y hemolítica hasta que la descartes. Pides Coombs directo, hemograma y bilirrubina de urgencia, y casi siempre entra directo a fototerapia.');

const pwAtresia = N('refer', 'Sospecha de atresia biliar', 'Bilirrubina directa alta, acolia y coluria',
  'Y la última rama, la que más se te puede pasar: si la ictericia se mantiene después de las dos semanas, con bilirrubina directa alta, acolia y coluria, ya no piensas en fisiológico. Piensas en atresia de vías biliares y derivas para cirugía.');

const pwCuando = N('q', '¿Cuándo empezó la ictericia?', 'El momento manda sobre todo lo demás',
  'La pregunta es cuándo empezó. Antes de las veinticuatro horas, entre el segundo y el décimo día, o después de las dos semanas: cada momento te lleva a un lugar distinto.',
  ['Antes de las 24 horas', pwPatologica],
  ['Entre el día 2 y el 10', pwBhutani],
  ['Más de 14 días', pwAtresia]);

const pwRoot = N('start', 'Recién nacido con ictericia visible', 'Evalúas Kramer y horas de vida',
  'Aquí tienes el recién nacido con ictericia visible. Evalúas la zona de Kramer y las horas de vida, y eso te lleva a la pregunta que ordena todo el tema.',
  ['', pwCuando]);

module.exports = {
  id: 'ped-17',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo la ictericia es normal y cuándo es una emergencia hemolítica',
      say: 'Bienvenido a la clase de ictericia neonatal, uno de los temas que más se pregunta en pediatría dentro de este banco. Vas a aprender una sola pregunta que ordena todo el tema: ¿la ictericia apareció antes o después de las veinticuatro horas de vida? Esa pregunta te dice si estás frente a algo hemolítico y grave, o frente a algo fisiológico y benigno. Empecemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué el recién nacido se pone amarillo?',
      nodes: [
        { id: 'hto', col: 0, row: 0, k: 'cause', t: 'Hematócrito alto al nacer', s: 'Vida media del glóbulo rojo corta' },
        { id: 'ugt', col: 0, row: 1, k: 'cause', t: 'Glucuroniltransferasa inmadura', s: 'El hígado conjuga poco' },
        { id: 'ent', col: 0, row: 2, k: 'cause', t: 'Circulación enterohepática aumentada', s: 'El intestino recicla bilirrubina' },
        { id: 'bil', col: 1, row: 1, k: 'mech', t: 'Sube la bilirrubina indirecta', s: 'Se acumula en la sangre' },
        { id: 'ict', col: 2, row: 1, k: 'effect', t: 'Ictericia céfalo-caudal', s: 'De la cara hacia los pies' },
      ],
      edges: [
        { from: 'hto', to: 'bil' },
        { from: 'ugt', to: 'bil' },
        { from: 'ent', to: 'bil', label: 'recircula' },
        { from: 'bil', to: 'ict' },
      ],
      steps: [
        { show: ['hto'], note: 'Menos glóbulos rojos duran, más bilirrubina liberan',
          say: 'Fíjate primero en el punto de partida. Al nacer tienes un hematócrito alto, porque en el útero necesitabas más glóbulos rojos para compensar el poco oxígeno disponible. Esos glóbulos rojos duran menos tiempo, así que se destruyen rápido y liberan mucha bilirrubina de golpe.' },
        { show: ['ugt'], note: 'El hígado todavía no da abasto',
          say: 'Súmale que el hígado del recién nacido todavía no madura del todo la enzima que conjuga esa bilirrubina, la glucuroniltransferasa. Entonces entra más bilirrubina de la que el hígado alcanza a procesar, y se acumula en su forma indirecta.' },
        { show: ['ent'], note: 'Comer y evacuar poco empeora todo',
          say: 'Y hay un tercer factor que se te puede olvidar: el intestino del recién nacido recicla bilirrubina de vuelta a la sangre. Mientras menos come y menos evacúa, más recircula, y por eso ayuda tanto alimentarlo seguido.' },
        { show: ['bil', 'ict'], note: 'Kramer: estimas el nivel con solo mirar',
          say: 'Súmalo todo y tienes bilirrubina indirecta acumulada, que se deposita en la piel de arriba hacia abajo: primero la cara, después el tronco, y en los casos más severos hasta las palmas y las plantas. Esa progresión tiene un nombre, la zona de Kramer, y te sirve para estimar el nivel con solo mirar al paciente.' },
      ],
    },

    {
      type: 'points',
      kicker: 'La primera pregunta',
      title: 'Antes o después de las 24 horas: la pregunta que decide todo',
      cards: [
        { title: 'Ictericia patológica', tag: 'Antes de las 24 horas', kind: 'alert', items: [
          { t: 'Antes de las 24 horas', d: 'Es hemolítica hasta demostrar lo contrario',
            say: 'Grábate esta regla, porque resuelve la mitad de las preguntas del tema: si la ictericia aparece antes de las veinticuatro horas de vida, es patológica y hemolítica hasta que tú la descartes.' },
          { t: 'Sube rápido y muy alto', d: 'Más de 5 mg/dL al día',
            say: 'También es patológica si sube muy rápido, más de cinco miligramos por decilitro al día, o si supera los quince miligramos por decilitro en un recién nacido de término.' },
          { t: 'Bilirrubina directa alta', d: 'Sospecha de colestasia, no solo de hemólisis',
            say: 'Y hay un tercer signo de alarma que cambia el enfoque completo: si la bilirrubina directa está alta, ya no piensas solo en hemólisis, piensas en colestasia. Guarda esa idea, porque volvemos a ella al final.' },
        ] },
        { title: 'Ictericia fisiológica', tag: 'Después de las 24 horas', kind: 'key', items: [
          { t: 'Después de las 24 horas', d: 'Pico al tercer o quinto día',
            say: 'En cambio, si la ictericia aparece después de las veinticuatro horas, con pico entre el tercer y el quinto día, vas por buen camino.' },
          { t: 'Bebé activo y de buen aspecto', d: 'Sin signos de alarma',
            say: 'El recién nacido está activo, se alimenta bien, y no tiene ningún signo de alarma.' },
          { t: 'Resuelve antes del día 10', d: 'Después de eso, hay que estudiar',
            say: 'Y resuelve sola antes del día diez. Si se pasa de ese plazo, ya no la llamas fisiológica sin más: ahí tienes que estudiarla.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La causa hemolítica más preguntada',
      title: 'Incompatibilidad ABO versus incompatibilidad Rh',
      nodes: [
        { id: 'mad', col: 0, row: 1, k: 'start', t: 'Ictericia antes de las 24 horas', s: 'Buscas la causa hemolítica' },
        { id: 'abo', col: 1, row: 0, k: 'cause', t: 'Madre O, hijo A o B', s: 'Puede darse en el primer embarazo' },
        { id: 'rh', col: 1, row: 2, k: 'risk', t: 'Madre Rh negativo, hijo Rh positivo', s: 'Necesita sensibilización previa' },
        { id: 'abo2', col: 2, row: 0, k: 'effect', t: 'Cuadro leve a moderado', s: 'Coombs débil o incluso negativo' },
        { id: 'rh2', col: 2, row: 2, k: 'alert', t: 'Cuadro grave, a veces fulminante', s: 'Riesgo de hidrops fetal' },
      ],
      edges: [
        { from: 'mad', to: 'abo' },
        { from: 'mad', to: 'rh' },
        { from: 'abo', to: 'abo2' },
        { from: 'rh', to: 'rh2' },
      ],
      steps: [
        { show: ['mad'], note: 'Dos incompatibilidades, dos gravedades distintas',
          say: 'Con una ictericia antes de las veinticuatro horas, hay dos causas hemolíticas que tienes que distinguir, porque no pesan igual.' },
        { show: ['abo', 'abo2'], note: 'Puede pasar desde el primer hijo',
          say: 'La incompatibilidad de grupo clásico se da cuando la madre es grupo O y el hijo es grupo A o B. La madre ya trae anticuerpos que cruzan la placenta, así que puede pasar desde el primer embarazo. Y el cuadro suele ser leve a moderado: fíjate que el Coombs directo a veces sale débil, o incluso negativo, y eso no descarta el diagnóstico.' },
        { show: ['rh', 'rh2'], note: 'Rh: el segundo hijo es el que sufre',
          say: 'La incompatibilidad Rh necesita que la madre Rh negativo se haya sensibilizado antes, en un parto o aborto previo. Por eso casi nunca afecta al primer hijo. Pero cuando ocurre, el cuadro es grave, incluso fulminante, con anemia severa y riesgo de hidrops fetal. Esa diferencia de gravedad se pregunta seguido: ABO es más frecuente y más leve, Rh es más raro y más peligroso.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Dos causas benignas que se confunden',
      title: 'Lactancia ineficaz versus ictericia por leche materna',
      cards: [
        { title: 'Lactancia ineficaz', tag: 'Días 2 a 5', kind: 'normal', items: [
          { t: 'Poca leche, bebé se deshidrata', d: 'Orina poco y baja más del 10%',
            say: 'Ahora dos causas benignas que se prestan para confusión. La primera es la lactancia ineficaz: el bebé recibe poca leche, se deshidrata, orina poco y baja más del diez por ciento de su peso. Esa deshidratación aumenta la recirculación de bilirrubina que ya vimos.' },
          { t: 'Se corrige, nunca se suspende', d: 'Mejora el acople y la frecuencia',
            say: 'La conducta es mejorar la técnica de acople y aumentar la frecuencia de las tomas. Nunca se suspende la lactancia por esto.' },
        ] },
        { title: 'Ictericia por leche materna', tag: 'Después del día 5', kind: 'key', items: [
          { t: 'Empieza más tarde, sube de peso', d: 'El bebé está excelente y activo',
            say: 'La segunda, la ictericia por leche materna, empieza más tarde, al final de la primera semana, y aquí el bebé sube de peso vigorosamente y está en excelente estado. Ese detalle es justo lo que la separa de la anterior.' },
          { t: 'Es benigna y se va sola', d: 'En uno a tres meses',
            say: 'Es totalmente benigna y se resuelve sola en uno a tres meses. Y otra vez la misma regla: tampoco se suspende la lactancia.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cómo decides el tratamiento',
      title: 'El nomograma de Bhutani manda la conducta',
      nodes: [
        { id: 'biltot', col: 0, row: 1, k: 'start', t: 'Bilirrubina total y horas de vida', s: 'Se ubican juntas en la curva' },
        { id: 'zonabaja', col: 1, row: 0, k: 'good', t: 'Zona de bajo riesgo', s: 'Solo observación' },
        { id: 'zonainter', col: 1, row: 1, k: 'q', t: 'Zona intermedia', s: 'Control en 24 a 48 horas' },
        { id: 'zonaalta', col: 1, row: 2, k: 'risk', t: 'Zona de alto riesgo', s: 'Fototerapia LED continua' },
        { id: 'exsang', col: 2, row: 2, k: 'alert', t: 'Falla la fototerapia', s: 'O signos de encefalopatía aguda' },
        { id: 'exang2', col: 3, row: 2, k: 'trap', t: 'Exanguinotransfusión', s: 'Recambia dos volemias del paciente' },
      ],
      edges: [
        { from: 'biltot', to: 'zonabaja' },
        { from: 'biltot', to: 'zonainter' },
        { from: 'biltot', to: 'zonaalta' },
        { from: 'zonaalta', to: 'exsang', label: 'si falla' },
        { from: 'exsang', to: 'exang2' },
      ],
      steps: [
        { show: ['biltot'], note: 'No es un número fijo: depende de la hora',
          say: 'Ya sabes que la ictericia es fisiológica. Ahora, ¿necesita tratamiento? Eso no lo decide un número fijo de bilirrubina, lo decide el nomograma de Bhutani, que cruza el valor con las horas exactas de vida. La misma cifra puede ser normal a los cuatro días y una emergencia a las veinticuatro horas.' },
        { show: ['zonabaja'], note: 'Nada que hacer',
          say: 'Si el valor cae en la zona de bajo riesgo, no hay nada que hacer más que observar.' },
        { show: ['zonainter'], note: 'Repites el control pronto',
          say: 'Si cae en la zona intermedia, repites el control en veinticuatro a cuarenta y ocho horas, para ver hacia dónde va.' },
        { show: ['zonaalta'], note: 'Luz azul que fabrica lumirrubina',
          say: 'Y si cae en la zona de alto riesgo, inicias fototerapia con luz azul continua. El mecanismo es bonito: la luz transforma la bilirrubina en lumirrubina, un isómero que se elimina por la bilis y la orina sin que el hígado tenga que conjugarlo.' },
        { show: ['exsang', 'exang2'], note: 'El paso que previene el kernicterus',
          say: 'Y si la fototerapia falla, o aparece un signo precoz de encefalopatía aguda como el llanto agudo o la postura en opistótonos, ya no esperas más: vas a la exanguinotransfusión, que recambia dos volemias completas del paciente y previene el kernicterus.' },
      ],
    },

    {
      type: 'points',
      kicker: 'La bandera roja que no puedes pasar',
      title: 'Cuando la ictericia dura demasiado',
      cards: [
        { title: 'Colestasia neonatal', tag: 'Bilirrubina directa alta', kind: 'alert', items: [
          { t: 'Acolia y coluria', d: 'Heces blancas, orina oscura como té',
            say: 'Y aquí retomamos lo que dejamos pendiente. Si un recién nacido tiene acolia, heces pálidas como masilla, y coluria, orina oscura como té cargado, ya no estás frente a algo fisiológico.' },
          { t: 'Más de 14 días de ictericia', d: 'O más del 20% de bilirrubina directa',
            say: 'La sospechas cuando la ictericia pasa de los catorce días, o cuando la bilirrubina directa supera el veinte por ciento de la total.' },
          { t: 'Atresia de vías biliares', d: 'Cirugía de Kasai antes de los 60 días',
            say: 'La causa que más te importa descartar es la atresia de vías biliares, porque necesita cirugía de Kasai antes de los sesenta días de vida para evitar la cirrosis. Fíjate en el contraste con todo lo anterior: ahí el problema era exceso de bilirrubina indirecta; aquí, la bilis ni siquiera está saliendo.' },
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
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Ictericia antes de las 24 horas', 'Hospitalizar y estudiar hemólisis', 'Esperar a ver si es fisiológica'],
          say: 'Repasemos las trampas que más se repiten. Ictericia antes de las veinticuatro horas: hospitalizas y estudias hemólisis de inmediato. El error es esperar a ver si se comporta como fisiológica.' },
        { cells: ['Madre Rh positiva, hijo Rh negativo', 'No hay incompatibilidad Rh', 'Pensar en incompatibilidad Rh igual'],
          say: 'Madre Rh positiva e hijo Rh negativo: ahí no hay incompatibilidad Rh, porque quien se sensibiliza es siempre la madre Rh negativa frente a un hijo Rh positivo.' },
        { cells: ['Fisiológica, bebé sano y activo', 'Reforzar lactancia y control ambulatorio', 'Pedir estudio de hemólisis sin motivo'],
          say: 'Ictericia fisiológica en un bebé sano y activo: refuerzas la lactancia y controlas de forma ambulatoria. Pedir un estudio completo de hemólisis, sin ningún signo de alarma, solo retrasa el alta.' },
        { cells: ['Ictericia por leche materna, sube de peso', 'Tranquilizar y mantener la lactancia', 'Suspender el pecho materno'],
          say: 'Ictericia por leche materna, con el bebé subiendo de peso: tranquilizas a los padres y mantienes la lactancia. Suspender el pecho es la respuesta incorrecta más clásica de esta parte.' },
        { cells: ['Acolia y coluria', 'Derivar urgente para estudio y Kasai', 'Decir que es solo leche materna'],
          say: 'Y la última: acolia y coluria. Derivas urgente para estudio de vía biliar y eventual cirugía de Kasai. Confundirla con ictericia por leche materna, solo porque el bebé se ve bien, es el error que más cuesta caro en este tema.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Recién nacido de 16 horas de vida, de término, vigoroso, nacido por parto vaginal sin incidentes. La matrona nota ictericia marcada en cara, tronco y abdomen (zona 3 de Kramer). La madre es primigesta, grupo O Rh positivo; el recién nacido es grupo A Rh positivo. La bilirrubina total es de 9,2 mg/dL con bilirrubina directa de 0,4 mg/dL. El hematocrito es de 44%.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Dar de alta con control ambulatorio en 7 días' },
        { letter: 'B', text: 'Hospitalizar, iniciar fototerapia y solicitar Coombs directo' },
        { letter: 'C', text: 'Suspender la lactancia materna por 48 horas' },
        { letter: 'D', text: 'Solicitar ecografía abdominal para descartar atresia biliar' },
        { letter: 'E', text: 'Indicar fenobarbital oral para inducir la conjugación hepática' },
      ],
      correct: 'B',
      explanation: 'Ictericia a las 16 horas de vida: patológica y hemolítica hasta demostrar lo contrario. La madre grupo O y el hijo grupo A orientan a incompatibilidad ABO. A esa hora de vida, 9,2 mg/dL cae en zona de alto riesgo de Bhutani: fototerapia inmediata más Coombs directo.',
      say: {
        stem: 'Vamos con un caso. Recién nacido de dieciséis horas de vida, de término, vigoroso, con ictericia marcada en la cara, el tronco y el abdomen. La madre es primeriza, grupo O Rh positivo; el recién nacido es grupo A Rh positivo. La bilirrubina total es de nueve coma dos, con bilirrubina directa de cero coma cuatro. El hematocrito es cuarenta y cuatro por ciento.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: dar de alta con control en siete días, hospitalizar con fototerapia y Coombs directo, suspender la lactancia por cuarenta y ocho horas, pedir una ecografía abdominal, o indicar fenobarbital. Tómate unos segundos.',
        answer: 'La respuesta es la B. Dieciséis horas de vida es antes de las veinticuatro: patológica hasta que la descartes. Y la combinación madre O con hijo A apunta a incompatibilidad ABO. A esa hora de vida, ese valor de bilirrubina ya está en zona de alto riesgo. Hospitalizas, inicias fototerapia y pides el Coombs directo. Dar de alta ignora la regla de las veinticuatro horas, y ni la ecografía ni el fenobarbital tienen espacio aquí.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 60',
      stem: 'Un recién nacido de 18 horas de vida desarrolla ictericia hasta los muslos. Los niveles plasmáticos de bilirrubina resultan 15,3 mg/dl, con fracción indirecta de 15 mg/dl. La madre es O-IV Rh positiva y el niño es B-I Rh negativo.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Ictericia hemolítica por incompatibilidad de grupo clásico' },
        { letter: 'B', text: 'Ictericia hemolítica por incompatibilidad Rh' },
        { letter: 'C', text: 'Ictericia fisiológica' },
        { letter: 'D', text: 'Hepatitis neonatal' },
        { letter: 'E', text: 'Síndrome de Gilbert' },
      ],
      correct: 'A',
      explanation: 'Ictericia a las 18 horas: patológica. La madre O e hijo B calzan con incompatibilidad ABO. La incompatibilidad Rh exige madre Rh negativo e hijo Rh positivo; aquí es al revés (madre Rh positiva, hijo Rh negativo), así que esa opción queda descartada por definición.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Recién nacido de dieciocho horas de vida, con ictericia hasta los muslos. La bilirrubina total es quince coma tres, casi toda indirecta. La madre es grupo O Rh positivo, y el niño es grupo B Rh negativo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: incompatibilidad de grupo clásico, incompatibilidad Rh, ictericia fisiológica, hepatitis neonatal, o síndrome de Gilbert.',
        answer: 'Es la A. Dieciocho horas de vida ya es patológica, y madre O con hijo B calza exacto con incompatibilidad ABO. Fíjate en el distractor: para que exista incompatibilidad Rh, la madre tiene que ser Rh negativo y el hijo Rh positivo. Aquí es justo al revés, la madre es Rh positivo y el hijo Rh negativo, así que esa opción queda descartada solo por los grupos, sin necesitar ningún otro dato.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 39',
      stem: 'Un lactante de 5 días de vida, alimentado con lactancia materna exclusiva, presenta ictericia en la cara y el tronco, que inició hace 2 días. La bilirrubina plasmática resulta 10 mg/dl, bilirrubina directa de 0,3 mg/dl, hematocrito de 56%.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hepatitis neonatal' },
        { letter: 'B', text: 'Atresia biliar primaria' },
        { letter: 'C', text: 'Ictericia fisiológica' },
        { letter: 'D', text: 'Ictericia hemolítica' },
        { letter: 'E', text: 'Ictericia por leche materna' },
      ],
      correct: 'C',
      explanation: 'Ictericia que apareció al tercer día, con bilirrubina indirecta moderada y directa normal: patrón fisiológico. El hematocrito alto no cambia el diagnóstico, es parte esperable del recién nacido y no un signo de alarma por sí solo.',
      say: {
        stem: 'Esta es del EUNACOM de julio de dos mil diecisiete. Lactante de cinco días de vida, con lactancia materna exclusiva, que presenta ictericia en la cara y el tronco desde hace dos días. La bilirrubina total es diez, casi toda indirecta, y el hematocrito es cincuenta y seis por ciento.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hepatitis neonatal, atresia biliar primaria, ictericia fisiológica, ictericia hemolítica, o ictericia por leche materna. Piénsalo.',
        answer: 'Es la C, ictericia fisiológica. La ictericia empezó al tercer día, con bilirrubina indirecta moderada y directa normal: ese es el patrón esperado. El hematocrito alto puede sonar alarmante, pero es parte normal del recién nacido, no un signo de hemólisis por sí solo. Y para que fuera atresia biliar necesitarías bilirrubina directa alta, que aquí no existe.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 154',
      stem: 'Un niño de 6 semanas de vida presenta ictericia desde hace 2 semanas. Al examen físico se aprecia ictérico y presenta deposiciones claras en el pañal, sin otras alteraciones.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Estenosis hipertrófica del píloro' },
        { letter: 'B', text: 'Atresia biliar primaria' },
        { letter: 'C', text: 'Hepatitis viral' },
        { letter: 'D', text: 'Síndrome de Crigler Najjar' },
        { letter: 'E', text: 'Hipotiroidismo congénito' },
      ],
      correct: 'B',
      explanation: 'Ictericia tardía, de más de dos semanas, con deposiciones claras (acolia): patrón colestásico clásico de atresia biliar. Las otras opciones no explican las deposiciones acólicas.',
      say: {
        stem: 'Ahora una del EUNACOM de diciembre de dos mil dieciocho. Niño de seis semanas de vida, con ictericia desde hace dos semanas, y deposiciones claras en el pañal, sin ningún otro hallazgo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: estenosis hipertrófica del píloro, atresia biliar primaria, hepatitis viral, síndrome de Crigler Najjar, o hipotiroidismo congénito. Piénsalo.',
        answer: 'Es la B. La palabra clave del enunciado es una sola: deposiciones claras, que es la acolia. Ninguna otra opción explica que la bilis no esté llegando al intestino. Con ictericia tardía y acolia, la sospecha obligatoria es atresia de vías biliares, y necesita estudio y cirugía urgente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 117',
      stem: 'Un lactante de un mes, sin antecedentes perinatales, es traído por presentar ictericia hasta los muslos, resto normal. Su desarrollo psicomotor, crecimiento y alimentación han sido normales. Al preguntar dirigidamente, la madre refiere que también ha presentado orinas oscuras.',
      question: '¿Cuál es el examen de elección frente a este paciente?',
      options: [
        { letter: 'A', text: 'Ecografía abdominal' },
        { letter: 'B', text: 'Hormona estimulante de la tiroides' },
        { letter: 'C', text: 'Resonancia magnética abdominal' },
        { letter: 'D', text: 'Test de Coombs' },
        { letter: 'E', text: 'Bilirrubinemia diferenciada' },
      ],
      correct: 'E',
      explanation: 'Ictericia tardía con coluria: sospecha de colestasia. Pero antes de pedir imágenes, el primer paso siempre es medir la bilirrubina diferenciada, para confirmar que el componente directo está elevado. Recién con eso se justifica avanzar a la ecografía.',
      say: {
        stem: 'Una pregunta que se trata sobre el orden de los exámenes, del EUNACOM de julio de dos mil trece. Lactante de un mes, sin antecedentes, con ictericia hasta los muslos, con desarrollo, crecimiento y alimentación normales. Al preguntar directamente, la madre cuenta que también ha notado orinas oscuras.',
        question: '¿Cuál es el examen de elección frente a este paciente?',
        options: 'Las opciones: ecografía abdominal, hormona estimulante de la tiroides, resonancia magnética abdominal, test de Coombs, o bilirrubinemia diferenciada. Piénsalo.',
        answer: 'Es la E. Las orinas oscuras te hacen sospechar colestasia, igual que en los casos anteriores. Pero fíjate en el orden: antes de pedir una imagen, el primer paso siempre es confirmar con el laboratorio que el componente directo está elevado. Recién con la bilirrubina diferenciada alterada, avanzas a la ecografía. Pedir la ecografía de entrada es saltarse un paso.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La regla de las 24 horas', tag: 'Lo primero que miras', kind: 'key', items: [
          { t: 'Antes de las 24 horas', d: 'Patológica y hemolítica',
            say: 'Cerremos con las reglas de oro. Antes de las veinticuatro horas, es patológica y hemolítica hasta que la descartes.' },
          { t: 'Después de las 24 horas', d: 'Fisiológica si el bebé está bien',
            say: 'Después de las veinticuatro horas, y con el bebé de buen aspecto, es fisiológica.' },
        ] },
        { title: 'Hemólisis', tag: 'ABO frecuente, Rh grave', kind: 'alert', items: [
          { t: 'ABO: madre O, primer hijo', d: 'Cuadro leve, Coombs a veces débil',
            say: 'La incompatibilidad ABO es la más frecuente, puede darse desde el primer hijo, y suele ser leve.' },
          { t: 'Rh: necesita sensibilización previa', d: 'Cuadro grave, riesgo de hidrops',
            say: 'La incompatibilidad Rh necesita un embarazo previo que sensibilice a la madre, y cuando aparece es grave.' },
        ] },
        { title: 'Tratamiento y bandera roja', tag: 'Bhutani y colestasia', kind: 'pharma', items: [
          { t: 'Bhutani decide la fototerapia', d: 'El valor cruzado con la hora de vida',
            say: 'El nomograma de Bhutani, cruzando el valor con la hora de vida, es lo que decide si vas a fototerapia.' },
          { t: 'Acolia y coluria: atresia biliar', d: 'No lo confundas con leche materna',
            say: 'Y si ves acolia y coluria, olvídate de causas benignas: sospecha atresia de vías biliares y deriva rápido. Si te llevas una sola idea de hoy: antes de las veinticuatro horas es hemólisis, después de las dos semanas con acolia es atresia biliar, y todo lo del medio se decide con Bhutani. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Ictericia neonatal: cuándo es peligrosa',
    root: pwRoot,
  },
};
