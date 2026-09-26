// Clase 19.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-05).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

const pwCronica = N('do', 'Hipertensión crónica', 'Cambias labetalol o metildopa, nunca IECA',
  'Si ya la tenía antes de las veinte semanas, es hipertensión crónica. Lo primero que haces es cambiar su fármaco a uno seguro para el embarazo: labetalol o metildopa. Nunca un inhibidor de la enzima convertidora ni un antagonista de la angiotensina.');

const pwSinProt = N('ok', 'Hipertensión gestacional', 'Sin proteinuria, control y parto a las 38-39 semanas',
  'Si no hay proteinuria ni daño de órgano, es hipertensión gestacional. Tiene buen pronóstico: la sigues de cerca y planificas el parto entre las treinta y ocho y treinta y nueve semanas.');

const pwConProt = N('do', 'Preeclampsia sin criterios de severidad', 'A la Unidad de Alto Riesgo, parto a las 37 semanas',
  'Si hay proteinuria significativa, o daño de órgano aunque no haya proteinuria, es preeclampsia. Sin criterios de severidad, la derivas a la unidad de alto riesgo obstétrico y programas la interrupción a las treinta y siete semanas.');

const pwSevera = N('alert', 'Con criterio de severidad', 'Eso ya es la clase que viene',
  'Y si aparece un solo criterio de severidad, ya no estás en esta clase: pasaste a la emergencia hipertensiva, y eso lo vemos en la próxima.');

const pwProteinuria = N('q', '¿Hay proteinuria o daño de órgano?', 'Eso separa las dos categorías',
  'Ahora, si empezó después de la semana veinte, hazte la segunda pregunta: ¿hay proteinuria significativa, o algún signo de daño de órgano?',
  ['No', pwSinProt],
  ['Sí, sin severidad', pwConProt],
  ['Sí, con severidad', pwSevera]);

const pwRoot = N('start', 'Presión arterial alta en el embarazo', 'Confirmada en dos tomas separadas por 4 horas',
  'Tienes a tu paciente con la presión alta, ya confirmada. La primera pregunta que te haces es en qué semana empezó.',
  ['Antes de la semana 20', pwCronica],
  ['Desde la semana 20 en adelante', pwProteinuria]);

module.exports = {
  id: 'ob-05',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo distingues hipertensión crónica, gestacional y preeclampsia sin criterios de severidad',
      say: 'Bienvenida a esta clase de trastornos hipertensivos del embarazo, un tema de máxima rentabilidad en el EUNACOM. Hoy vamos a ver las formas leves: la hipertensión crónica, la gestacional y la preeclampsia sin criterios de severidad. La próxima clase es la continuación directa: ahí vemos qué pasa cuando esto se complica. Empecemos por lo que decide todo: el momento en que aparece la presión alta.',
    },

    {
      type: 'flow',
      kicker: 'Clasificación',
      title: '¿Qué tipo de hipertensión es?',
      nodes: [
        { id: 'pa', col: 0, row: 1, k: 'start', t: 'PA 140/90 o más', s: 'Confirmada en 2 tomas, 4 horas de diferencia' },
        { id: 'sem', col: 1, row: 1, k: 'q', t: '¿Antes o después de las 20?', s: 'Esa semana lo decide todo' },
        { id: 'cro', col: 2, row: 0, k: 'risk', t: 'Hipertensión crónica', s: 'Ya la tenía, o persiste tras el parto' },
        { id: 'ges', col: 2, row: 1, k: 'effect', t: 'Hipertensión gestacional', s: 'Nueva, sin proteinuria' },
        { id: 'pre', col: 2, row: 2, k: 'risk', t: 'Preeclampsia', s: 'Nueva, con proteinuria o daño de órgano' },
      ],
      edges: [
        { from: 'pa', to: 'sem' },
        { from: 'sem', to: 'cro', label: 'antes de las 20' },
        { from: 'sem', to: 'ges', label: 'después, sin proteinuria' },
        { from: 'sem', to: 'pre', label: 'después, con proteinuria' },
      ],
      steps: [
        { show: ['pa'], note: 'Dos tomas, cuatro horas de diferencia',
          say: 'Partamos por la definición. Hipertensión en el embarazo es una presión arterial de ciento cuarenta sobre noventa o más, confirmada en dos tomas separadas por cuatro horas.' },
        { show: ['sem'], note: 'La semana veinte parte el mapa completo',
          say: 'Y lo primero que te preguntas, siempre, es cuándo empezó. Esa fecha, la semana veinte, es la que ordena todo este tema.' },
        { show: ['cro'], note: 'Preexistente, o no baja tras el parto',
          say: 'Si ya la tenía antes de esa semana, o si viene de antes del embarazo, es hipertensión crónica. Y también la llamas crónica si persiste más de doce semanas después del parto.' },
        { show: ['ges'], note: 'Aparece después, mucho más simple',
          say: 'Si aparece después de la semana veinte y no hay proteinuria ni daño de ningún órgano, es hipertensión gestacional. Es la más simple de las tres.' },
        { show: ['pre'], note: 'Aparece después, y con daño asociado',
          say: 'Y si aparece después de la semana veinte junto con proteinuria, o con algún signo de daño de órgano aunque no haya proteinuria, ya estás frente a una preeclampsia. Fíjate en algo importante: hoy en día no necesitas proteinuria para decir preeclampsia. Basta el daño de órgano.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: '¿Cómo confirmas cada categoría?',
      cards: [
        { title: 'Proteinuria significativa', tag: 'El corte que separa todo', kind: 'key', items: [
          { t: '300 mg en orina de 24h', d: 'O índice proteinuria-creatininuria de 0,3',
            say: 'Vamos al detalle del diagnóstico. La proteinuria significativa se define con trescientos miligramos en orina de veinticuatro horas, o un índice proteinuria sobre creatininuria de cero coma tres.' },
          { t: 'Sin proteinuria: busca daño de órgano', d: 'Plaquetas, transaminasas, creatinina',
            say: 'Y si la proteinuria no está, no te quedes tranquila: revisa las plaquetas, las transaminasas y la creatinina, porque cualquiera de esos alterados también define preeclampsia.' },
        ] },
        { title: 'La trampa del corte', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Proteinuria bajo 300 mg', d: 'No es preeclampsia, aunque la presión sea alta',
            say: 'Y aquí viene una trampa que se pregunta seguido: una paciente con la presión bien alta, pero con una proteinuria de, digamos, doscientos ochenta miligramos, que queda justo bajo el corte. Esa paciente no es preeclampsia todavía.' },
          { t: 'Tratas igual con antihipertensivo oral', d: 'Aunque no cumpla el criterio completo',
            say: 'Pero eso no significa que no hagas nada: si la presión sigue alta, igual inicias un antihipertensivo oral. Lo que cambia es la etiqueta, no el hecho de que la trates.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: '¿Con qué tratas la presión, y con qué nunca?',
      nodes: [
        { id: 'lab', col: 0, row: 0, k: 'good', t: 'Labetalol oral', s: 'Fármaco de elección' },
        { id: 'met', col: 0, row: 1, k: 'good', t: 'Metildopa', s: 'Acción central, segura' },
        { id: 'nif', col: 0, row: 2, k: 'good', t: 'Nifedipino oral', s: 'De liberación prolongada' },
        { id: 'sic', col: 2, row: 1, k: 'trap', t: 'IECA y ARA-II', s: 'Enalapril, losartán' },
        { id: 'dan', col: 3, row: 1, k: 'alert', t: 'Daño renal fetal letal', s: 'Oligohidroamnios, hipoplasia pulmonar' },
      ],
      edges: [
        { from: 'sic', to: 'dan', label: 'si se usan' },
      ],
      steps: [
        { show: ['lab'], note: 'Combina bloqueo alfa y beta',
          say: 'Pasemos al tratamiento. El fármaco de elección es el labetalol oral, que bloquea receptores alfa y beta a la vez.' },
        { show: ['met'], note: 'Segura, pero de inicio más lento',
          say: 'La metildopa es la alternativa clásica: actúa en el sistema nervioso central, es igual de segura, pero le cuesta un poco más hacer efecto.' },
        { show: ['nif'], note: 'Bloqueador de canales de calcio',
          say: 'Y el nifedipino oral, de liberación prolongada, también entra en esta lista de fármacos seguros.' },
        { show: ['sic', 'dan'], note: 'Nunca, en ningún trimestre',
          say: 'Y aquí está lo que más se pregunta: los inhibidores de la enzima convertidora, como el enalapril, y los antagonistas de la angiotensina, como el losartán, están absolutamente prohibidos en cualquier momento del embarazo. Le hacen al riñón fetal un daño que puede ser letal: oligohidroamnios severo, hipoplasia pulmonar y muerte fetal. Si tu paciente con hipertensión crónica llega tomando uno de estos, tu primera acción es cambiarlo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Preeclampsia sin severidad',
      title: 'Manejo: vigilar y programar el parto',
      cards: [
        { title: 'Estudio completo', tag: 'Al ingresar a alto riesgo', kind: 'key', items: [
          { t: 'Hemograma, plaquetas y función hepática', d: 'Más creatinina y ácido úrico',
            say: 'Con preeclampsia sin severidad, ingresas a tu paciente a la unidad de alto riesgo obstétrico y pides el estudio completo: hemograma, plaquetas, función hepática, creatinina y ácido úrico.' },
          { t: 'Ecografía con Doppler fetal', d: 'Buscando restricción de crecimiento',
            say: 'Y una ecografía con Doppler fetal, buscando si ya hay restricción de crecimiento.' },
        ] },
        { title: 'El momento del parto', tag: 'No se espera más', kind: 'pharma', items: [
          { t: 'Interrupción a las 37 semanas', d: 'Aunque esté estable y asintomática',
            say: 'Y la conducta que más se pregunta: aunque tu paciente esté estable y sin síntomas, la interrupción programada va a las treinta y siete semanas. No esperas a que se complique.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos las tres categorías en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en este tema',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['PA alta, proteinuria justo bajo 300 mg', 'Antihipertensivo oral, sin llamarla preeclampsia', 'Diagnosticar preeclampsia igual'],
          say: 'Repasemos las trampas. Presión alta con proteinuria justo bajo trescientos: tratas con antihipertensivo oral, pero no la llamas preeclampsia todavía. El error es etiquetarla como preeclampsia solo porque la presión asusta.' },
        { cells: ['Hipertensión crónica con IECA previo', 'Suspender y cambiar a labetalol o metildopa', 'Mantener el mismo fármaco'],
          say: 'Hipertensión crónica que ya venía con un inhibidor de la enzima convertidora: lo suspendes y cambias a labetalol o metildopa. El error es dejarla con el mismo fármaco porque ya lo toleraba bien antes del embarazo.' },
        { cells: ['Preeclampsia sin severidad, estable', 'Interrumpir a las 37 semanas', 'Esperar a que aparezcan síntomas'],
          say: 'Preeclampsia sin severidad y paciente estable: interrumpes a las treinta y siete semanas igual. El error es esperar a que se ponga sintomática para recién actuar.' },
        { cells: ['Hipertensión gestacional sin proteinuria', 'Parto a las 38 a 39 semanas', 'Interrumpir antes, como si fuera preeclampsia'],
          say: 'Y la hipertensión gestacional, sin proteinuria: el parto va a las treinta y ocho a treinta y nueve semanas, un poco más tarde que la preeclampsia. El error es adelantarla como si tuviera el mismo riesgo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Secundigesta de 34 semanas, con hipertensión arterial crónica en tratamiento con enalapril desde hace 3 años, acude por primera vez a control en este embarazo. Se constata PA de 144/92 mmHg, confirmada a los 15 minutos. Está asintomática, con altura uterina acorde y latidos cardiofetales presentes.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Mantener el enalapril y solicitar proteinuria de 24 horas' },
        { letter: 'B', text: 'Suspender el enalapril e iniciar labetalol o metildopa' },
        { letter: 'C', text: 'Aumentar la dosis de enalapril para lograr mejor control' },
        { letter: 'D', text: 'Indicar sulfato de magnesio de forma profiláctica' },
        { letter: 'E', text: 'Interrumpir el embarazo de inmediato' },
      ],
      correct: 'B',
      explanation: 'El enalapril está absolutamente contraindicado en el embarazo por su teratogenicidad renal fetal. La conducta inmediata es suspenderlo y reemplazarlo por un antihipertensivo seguro, además de estudiar proteinuria y Doppler para descartar preeclampsia sobreagregada.',
      say: {
        stem: 'Vamos con un caso. Secundigesta de treinta y cuatro semanas, con hipertensión crónica tratada con enalapril desde hace tres años, que llega por primera vez a control en este embarazo. Su presión es ciento cuarenta y cuatro sobre noventa y dos, confirmada a los quince minutos. Está asintomática, con altura uterina acorde y latidos fetales presentes.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Tienes cinco opciones: mantener el enalapril y pedir proteinuria, suspenderlo e iniciar labetalol o metildopa, subir la dosis de enalapril, dar sulfato de magnesio profiláctico, o interrumpir de inmediato. Piénsalo.',
        answer: 'Es la B. No importa que lleve tres años tomándolo bien: el enalapril nunca se mantiene en el embarazo, por el daño renal que le hace al feto. Lo primero, siempre, es suspenderlo y cambiar a un fármaco seguro. Después completas el estudio para descartar una preeclampsia sobreagregada, pero ese primer paso no espera.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 173',
      stem: 'Paciente de 25 años cursando su primer embarazo de 37 semanas acude a control. Se observa leve edema de extremidades inferiores, presión arterial de 140/90 mmHg y frecuencia cardíaca fetal de 125 latidos por minuto. Está asintomática.',
      question: '¿Qué examen es más adecuado para precisar el diagnóstico?',
      options: [
        { letter: 'A', text: 'Monitoreo ambulatorio de presión arterial de 24 horas' },
        { letter: 'B', text: 'Ecografía Doppler renal' },
        { letter: 'C', text: 'Ecografía obstétrica con Doppler fetal' },
        { letter: 'D', text: 'Proteinuria de 24 horas' },
        { letter: 'E', text: 'Test de tolerancia a las contracciones' },
      ],
      correct: 'D',
      explanation: 'Con presión igual o mayor a 140/90 mmHg después de la semana 20, lo que decide entre hipertensión gestacional y preeclampsia es la proteinuria. El edema aislado orienta pero no define; la proteinuria de 24 horas sí.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de veinticinco años, en su primer embarazo de treinta y siete semanas. Tiene un edema leve en las piernas, presión ciento cuarenta sobre noventa, y los latidos fetales están en ciento veinticinco. Está asintomática.',
        question: '¿Qué examen es más adecuado para precisar el diagnóstico?',
        options: 'Las opciones: monitoreo ambulatorio de presión de veinticuatro horas, ecografía Doppler renal, ecografía obstétrica con Doppler fetal, proteinuria de veinticuatro horas, o test de tolerancia a las contracciones. Piénsalo.',
        answer: 'Es la D. Ya tiene el criterio de presión para hipertensión del embarazo, y ahora la pregunta es cuál de las dos categorías. El edema te hace sospechar, pero lo que realmente separa hipertensión gestacional de preeclampsia es la proteinuria, y por eso es el examen que falta pedir.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2018 · Pregunta 10',
      stem: 'Paciente de 41 años, embarazada de 24 semanas, con presión arterial de 155/100 mmHg. Los exámenes muestran una proteinuria en 24 horas de 280 mg y el examen físico es normal, sin edema ni signos de preeclampsia severa.',
      question: '¿Cuál es el tratamiento más apropiado?',
      options: [
        { letter: 'A', text: 'Iniciar metildopa oral' },
        { letter: 'B', text: 'Iniciar hidralazina intravenosa' },
        { letter: 'C', text: 'Observación y control en 1 semana' },
        { letter: 'D', text: 'Iniciar nifedipino de acción prolongada' },
        { letter: 'E', text: 'Sulfato de magnesio intravenoso' },
      ],
      correct: 'A',
      explanation: 'La proteinuria de 280 mg queda bajo el corte de 300 mg, así que todavía no es preeclampsia. Pero la presión ya justifica tratamiento oral, y el fármaco de elección en este contexto es la metildopa.',
      say: {
        stem: 'Y una pregunta real, del EUNACOM de julio de dos mil dieciocho. Paciente de cuarenta y un años, embarazada de veinticuatro semanas, con presión ciento cincuenta y cinco sobre cien. Su proteinuria de veinticuatro horas sale en doscientos ochenta miligramos, y el examen físico es normal, sin edema ni signos de severidad.',
        question: '¿Cuál es el tratamiento más apropiado?',
        options: 'Las opciones: iniciar metildopa oral, hidralazina endovenosa, solo observar y controlar en una semana, nifedipino de acción prolongada, o sulfato de magnesio endovenoso. Piénsalo.',
        answer: 'Es la A. Fíjate en el número: doscientos ochenta queda justo bajo los trescientos miligramos, así que técnicamente todavía no es preeclampsia. Pero eso no significa no hacer nada: con esta presión, empiezas tratamiento oral, y la metildopa es la elección clásica aquí. Solo observar la dejaría con la presión alta sin motivo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 155',
      stem: 'Paciente de 33 años, con 13 semanas de embarazo, con antecedente de cesárea de urgencia en un embarazo anterior, a las 31 semanas, por una preeclampsia severa.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar aspirina' },
        { letter: 'B', text: 'Indicar heparina' },
        { letter: 'C', text: 'Indicar L-arginina' },
        { letter: 'D', text: 'Indicar ácidos grasos omega 3' },
        { letter: 'E', text: 'Indicar dexametasona' },
      ],
      correct: 'A',
      explanation: 'El antecedente de preeclampsia severa previa define alto riesgo para este embarazo. La medida que reduce esa recurrencia es la aspirina en dosis baja, idealmente iniciada antes de las 16 semanas.',
      say: {
        stem: 'Última pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Paciente de treinta y tres años, con trece semanas de embarazo, que tuvo una cesárea de urgencia en su embarazo anterior, a las treinta y una semanas, por una preeclampsia severa.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: indicar aspirina, heparina, L-arginina, ácidos grasos omega tres, o dexametasona. Piénsalo.',
        answer: 'Es la A. Esta paciente ya demostró que hace preeclampsia severa, y eso la pone en alto riesgo de que se repita. La aspirina en dosis baja, partiendo antes de las dieciséis semanas, es la medida que reduce ese riesgo. Ninguna de las otras alternativas tiene ese rol en este contexto.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Clasificación', tag: 'La semana veinte lo decide', kind: 'key', items: [
          { t: 'Antes de la semana 20', d: 'Es hipertensión crónica',
            say: 'Cerremos con las reglas de oro. Si empezó antes de la semana veinte, es hipertensión crónica.' },
          { t: 'Después, con proteinuria o daño', d: 'Es preeclampsia',
            say: 'Si empezó después, con proteinuria o daño de órgano, es preeclampsia.' },
        ] },
        { title: 'Tratamiento', tag: 'Nunca IECA ni ARA-II', kind: 'pharma', items: [
          { t: 'Labetalol, metildopa o nifedipino', d: 'Los tres son seguros',
            say: 'Tratas con labetalol, metildopa o nifedipino: los tres son seguros.' },
          { t: 'Enalapril y losartán: prohibidos', d: 'En cualquier trimestre',
            say: 'Y el enalapril y el losartán están prohibidos en cualquier trimestre.' },
        ] },
        { title: 'El parto', tag: 'No se espera la severidad', kind: 'alert', items: [
          { t: 'Preeclampsia sin severidad', d: 'Interrupción a las 37 semanas',
            say: 'Y la preeclampsia sin severidad se interrumpe a las treinta y siete semanas, sin esperar que se complique. Si te llevas una sola idea de hoy: la semana veinte y la proteinuria son las dos preguntas que clasifican todo este tema. Nos vemos en la próxima clase, donde vemos qué hacer cuando esto se convierte en una emergencia.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Trastornos hipertensivos del embarazo: clasificación',
    root: pwRoot,
  },
};
