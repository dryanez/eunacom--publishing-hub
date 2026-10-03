// Clase ped-05 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria_bloque_2.cjs (id "ped-05").

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-05',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'El score que decide todo: cuándo es leve, cuándo se hospitaliza',
      say: 'Bienvenido. Empezamos el bloque respiratorio con el tema que más se pregunta de toda la pediatría: la bronquiolitis y el síndrome bronquial obstructivo del lactante. Y la buena noticia es que casi todo el tema se resuelve con una sola herramienta: el score de Tal. Si aprendes a calcularlo bien, sabes qué hacer con este paciente. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué el lactante llega tapado?',
      nodes: [
        { id: 'vrs', col: 0, row: 0, k: 'cause', t: 'Virus respiratorio sincicial', s: 'El culpable en la mayoría de los casos' },
        { id: 'inf', col: 1, row: 0, k: 'mech', t: 'Inflama el bronquiolo', s: 'Y deja un tapón de moco' },
        { id: 'obs', col: 2, row: 0, k: 'mech', t: 'El aire entra, no sale', s: 'Queda atrapado en el pulmón' },
        { id: 'cli', col: 3, row: 0, k: 'effect', t: 'Taquipnea y sibilancias', s: 'Con tiraje, a veces cianosis' },
      ],
      edges: [
        { from: 'vrs', to: 'inf' }, { from: 'inf', to: 'obs' }, { from: 'obs', to: 'cli' },
      ],
      steps: [
        { show: ['vrs'], note: 'El principal responsable',
          say: 'Fíjate primero en el virus. El virus respiratorio sincicial explica la gran mayoría de los cuadros, sobre todo en el lactante menor de dos años. Esa edad no es un dato menor: si es el primer episodio de obstrucción bronquial antes de los dos años, se llama bronquiolitis.' },
        { show: ['inf'], note: 'No es solo broncoespasmo',
          say: 'El virus invade el epitelio del bronquiolo, lo daña, y deja detrás un tapón de moco espeso. Ojo con esto, porque es distinto al asma: aquí el problema no es solo que el músculo se contraiga, es que la vía aérea queda literalmente taponada.' },
        { show: ['obs'], note: 'El aire queda atrapado',
          say: 'Y como el bronquiolo es angosto y está tapado, el aire entra con más facilidad de la que sale. Eso atrapa aire dentro del pulmón, y ese atrapamiento explica todo lo que vas a examinar a continuación.' },
        { show: ['cli'], note: 'El mecanismo explica la clínica',
          say: 'Por eso el lactante te llega respirando rápido, con sibilancias, con tiraje, y en los casos más graves, con cianosis. Guarda esta cadena, porque el score que viene a continuación mide exactamente estos mismos signos. Y hay algo más que conviene que sepas: este mismo mecanismo, cuando se repite varias veces en un mismo niño, ya no se llama bronquiolitis, sino síndrome bronquial obstructivo recurrente, y ahí hay que buscar otras causas además del virus.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: '¿Cómo empieza este cuadro?',
      cards: [
        { title: 'Pródromo típico', tag: 'Antes de la crisis', kind: 'criteria', items: [
          { t: 'Coriza y tos', d: 'Dos a tres días antes',
            say: 'Casi siempre empieza igual: dos a tres días de coriza, congestión y tos seca, con poca fiebre. Un cuadro catarral común, sin nada llamativo todavía.' },
          { t: 'Luego, dificultad para respirar', d: 'Y rechazo de la alimentación',
            say: 'Y ahí, de forma progresiva, se agrega la dificultad respiratoria y el niño empieza a rechazar el pecho o la mamadera. Ese cambio es la señal de que hay que examinarlo con más cuidado.' },
        ] },
        { title: 'Diagnóstico', tag: 'Es clínico', kind: 'key', items: [
          { t: 'No se pide radiografía siempre', d: 'Solo si hay duda o complicación',
            say: 'El diagnóstico es clínico, y esto se pregunta harto: no le pidas radiografía de tórax a todo lactante con sibilancias. La reservas para cuando hay duda diagnóstica, o sospechas una complicación como atelectasia o neumotórax. Pedirla de rutina no cambia la conducta y solo expone al niño a radiación innecesaria, así que si te la ofrecen como primera opción en una pregunta, casi siempre es la alternativa incorrecta.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Score de Tal',
      title: 'Un puntaje, tres conductas',
      nodes: [
        { id: 'sco', col: 0, row: 1, k: 'q', t: '¿Cuánto suma?', s: 'Frecuencia, sibilancias, cianosis, tiraje' },
        { id: 'lev', col: 1, row: 0, k: 'good', t: 'Cinco o menos', s: 'Leve' },
        { id: 'amb', col: 2, row: 0, k: 'good', t: 'Salbutamol en casa', s: 'Y control en dos días' },
        { id: 'mod', col: 1, row: 1, k: 'alert', t: 'Seis a ocho', s: 'Moderado' },
        { id: 'hab', col: 2, row: 1, k: 'alert', t: 'Hospitalización abreviada', s: 'Salbutamol cada diez minutos, una hora' },
        { id: 'sev', col: 1, row: 2, k: 'risk', t: 'Nueve a doce', s: 'Severo' },
        { id: 'hos', col: 2, row: 2, k: 'risk', t: 'Hospitalizar de inmediato', s: 'Oxígeno y observación estricta' },
      ],
      edges: [
        { from: 'sco', to: 'lev' }, { from: 'sco', to: 'mod' }, { from: 'sco', to: 'sev' },
        { from: 'lev', to: 'amb' }, { from: 'mod', to: 'hab' }, { from: 'sev', to: 'hos' },
      ],
      steps: [
        { show: ['sco'], note: 'Cuatro signos, de cero a tres puntos cada uno',
          say: 'Vamos al score de Tal, que es la columna vertebral de esta clase. Evalúa cuatro cosas: la frecuencia respiratoria, según la edad; las sibilancias, que van de ausentes a audibles sin fonendoscopio; la cianosis, y la retracción o tiraje. Sumas los cuatro puntajes y con eso decides la conducta.' },
        { show: ['lev', 'amb'], note: 'Cinco o menos: no te compliques',
          say: 'Si la suma da cinco o menos, es leve, y el manejo es ambulatorio: salbutamol en aerosol con aerocámara, y control si no mejora.' },
        { show: ['mod', 'hab'], note: 'Aquí está lo que más se pregunta',
          say: 'Si suma entre seis y ocho, es moderado, y aquí viene lo que más te van a preguntar: la hospitalización abreviada. Se le da salbutamol con aerocámara cada diez minutos, durante una hora completa, y luego se reevalúa.' },
        { show: ['sev', 'hos'], note: 'Nueve o más: no se espera',
          say: 'Y si suma nueve o más, es severo, y ahí no hay hospitalización abreviada que valga: se hospitaliza de inmediato, con oxígeno, y se considera apoyo ventilatorio si no responde.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hospitalización abreviada',
      title: 'Qué pasa si no baja el puntaje',
      cards: [
        { title: 'Al terminar la hora', tag: 'Reevaluar siempre', kind: 'pharma', items: [
          { t: 'Bajó a cinco o menos', d: 'Alta con salbutamol y control',
            say: 'Al término de esa hora, reevalúas. Si el puntaje bajó a cinco o menos, das el alta con salbutamol cada cuatro horas y un control al día siguiente.' },
          { t: 'Sigue entre seis y ocho', d: 'Corticoide oral y otra hora',
            say: 'Pero si sigue entre seis y ocho, agregas un corticoide oral, la prednisona, e inicias una segunda hora de salbutamol. Si después de esa segunda hora tampoco mejora, ahí sí se hospitaliza.' },
        ] },
        { title: 'Lo que el examen tienta a hacer mal', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Broncodilatador de rutina', d: 'Beneficio marginal en la bronquiolitis pura',
            say: 'Y aquí una trampa fina: en la bronquiolitis viral pura, el beneficio del broncodilatador y del corticoide es marginal, y lo que realmente cambia el pronóstico es el oxígeno. Ojo, esto no significa que no se use: se prueba y se sigue solo si el niño responde.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Profilaxis y trampas',
      title: 'Lo que llega antes de que el niño se enferme',
      cards: [
        { title: 'Nirsevimab', tag: 'Profilaxis universal', kind: 'pharma', items: [
          { t: 'Anticuerpo de vida larga', d: 'Se da a todo recién nacido',
            say: 'Desde hace poco Chile protege a todos los recién nacidos con nirsevimab, un anticuerpo monoclonal de vida media larga contra el virus respiratorio sincicial. No es una vacuna: es protección pasiva, y se administra en la maternidad. Desde que se implementó, las hospitalizaciones por bronquiolitis grave bajaron de forma muy marcada, así que si te preguntan qué intervención tuvo más impacto poblacional en esta enfermedad, la respuesta es esta.' },
        ] },
        { title: 'Tórax silente', tag: 'Máxima gravedad', kind: 'alert', items: [
          { t: 'Sin sibilancias no es mejoría', d: 'Es obstrucción tan severa que no suena',
            say: 'Y guarda esta idea para el examen: si un lactante grave deja de sibilar de golpe, no pienses que mejoró. Puede ser tórax silente, la obstrucción tan extrema que casi no entra aire y por eso no hace ruido. En el score, eso puntúa como lo más grave posible. Si además el niño está agotado, pálido y con la conciencia comprometida, estás ante una insuficiencia respiratoria inminente.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'No todo ruido respiratorio es lo mismo',
      nodes: [
        { id: 'lac', col: 0, row: 1, k: 'start', t: 'Lactante con ruido raro', s: '¿Qué tipo de ruido, y cómo empezó?' },
        { id: 'sbo', col: 1, row: 0, k: 'good', t: 'Sibilancias, empezó de a poco', s: 'Bronquiolitis o síndrome obstructivo' },
        { id: 'cro', col: 1, row: 1, k: 'alert', t: 'Estridor y tos perruna', s: 'Laringitis: la vemos en la próxima clase' },
        { id: 'cex', col: 1, row: 2, k: 'trap', t: 'Empezó de golpe, comiendo', s: 'Cuerpo extraño: viene más adelante' },
        { id: 'tra', col: 1, row: 3, k: 'risk', t: 'Fiebre alta, aspecto tóxico', s: 'Traqueítis bacteriana' },
      ],
      edges: [
        { from: 'lac', to: 'sbo', label: 'gradual' }, { from: 'lac', to: 'cro', label: 'estridor' },
        { from: 'lac', to: 'cex', label: 'súbito' }, { from: 'lac', to: 'tra', label: 'tóxico' },
      ],
      steps: [
        { show: ['lac'], note: 'La forma de inicio ya te orienta',
          say: 'Antes de seguir, ordenemos algo que el examen mezcla a propósito: no todo lactante con ruido al respirar tiene lo mismo. Pregúntate cómo empezó y qué tipo de ruido hace.' },
        { show: ['sbo'], note: 'Nuestro tema de hoy',
          say: 'Si el inicio fue gradual, con pródromo catarral, y el ruido es sibilancia espiratoria, estás en bronquiolitis o síndrome obstructivo, que es justo lo que estamos viendo.' },
        { show: ['cro'], note: 'Se viene en la próxima clase',
          say: 'Si en cambio el ruido es un estridor, con tos que suena a perro y la voz ronca, eso ya no es bronquiolitis: es laringitis, y esa la vemos en detalle en la próxima clase.' },
        { show: ['cex'], note: 'Un tema que también viene en este bloque',
          say: 'Si el inicio fue súbito, mientras el niño jugaba o comía, sospecha cuerpo extraño en la vía aérea. También lo revisamos más adelante en este mismo bloque.' },
        { show: ['tra'], note: 'El niño se ve muy enfermo',
          say: 'Y si hay fiebre muy alta y el niño se ve tóxico, con mal aspecto general, piensa en traqueítis bacteriana. Guarda este mapa, porque te va a servir en las próximas clases.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo el razonamiento del score de Tal en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en bronquiolitis',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Score de Tal cinco o menos', 'Salbutamol en casa y control', 'Hospitalizar sin necesidad'],
          say: 'Repasemos con una tabla. Score de cinco o menos: salbutamol en casa y control. El error es hospitalizar a un lactante que no lo necesita.' },
        { cells: ['Score entre seis y ocho', 'Hospitalización abreviada, una hora', 'Hospitalizar de entrada sin probar'],
          say: 'Score entre seis y ocho: hospitalización abreviada por una hora. El error es saltarse ese paso y hospitalizar de entrada.' },
        { cells: ['Persiste moderado tras la hora', 'Corticoide oral y segunda hora', 'Repetir salbutamol sin corticoide'],
          say: 'Si persiste moderado al término de la hora: corticoide oral y una segunda hora de salbutamol. El error es solo repetir el broncodilatador sin agregar el corticoide.' },
        { cells: ['Deja de sibilar y está grave', 'Pensar en tórax silente', 'Interpretarlo como mejoría'],
          say: 'Si un lactante grave deja de sibilar de golpe, piensa en tórax silente. El error clásico es leerlo como mejoría.' },
        { cells: ['Cuadro típico, sin alarma', 'No pedir radiografía', 'Pedir radiografía a todos'],
          say: 'Y en el cuadro típico sin alarma, no se pide radiografía de rutina. El error frecuente es pedirla a todo lactante con sibilancias.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 6 meses, con 2 días de coriza y tos, presenta ahora dificultad respiratoria. Al examen: FR 58 rpm, sibilancias en toda la espiración auscultadas con fonendoscopio, tiraje subcostal moderado, sin cianosis.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Hospitalización abreviada con salbutamol cada 10 minutos por 1 hora' },
        { letter: 'B', text: 'Alta con salbutamol cada 6 horas y control en 1 semana' },
        { letter: 'C', text: 'Hospitalización directa en UCI con ventilación mecánica' },
        { letter: 'D', text: 'Solicitar radiografía de tórax antes de decidir' },
        { letter: 'E', text: 'Nebulización con adrenalina racémica y observación' },
      ],
      correct: 'A',
      explanation: 'FR 58 (2 puntos) + sibilancias en toda la espiración (2 puntos) + tiraje subcostal moderado (2 puntos) + sin cianosis (0 puntos) = 6 puntos, moderado. Corresponde hospitalización abreviada con salbutamol cada 10 minutos por 1 hora.',
      say: {
        stem: 'Vamos con un caso. Lactante de seis meses, con dos días de coriza y tos, que ahora tiene dificultad respiratoria. Al examen: frecuencia respiratoria de cincuenta y ocho, sibilancias en toda la espiración con fonendoscopio, tiraje subcostal moderado, sin cianosis.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: hospitalización abreviada con salbutamol cada diez minutos, alta con salbutamol cada seis horas, hospitalización directa en la unidad de cuidados intensivos, pedir radiografía antes de decidir, o adrenalina racémica en observación. Piénsalo.',
        answer: 'Es la A. Súmalo tú mismo: la frecuencia da dos puntos, las sibilancias en toda la espiración dan dos puntos, el tiraje subcostal moderado da dos puntos más, y la ausencia de cianosis no suma nada. En total, seis puntos: moderado. Eso es justo el rango de la hospitalización abreviada. La radiografía no aporta nada aquí, porque el cuadro es típico y no hay duda diagnóstica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 72',
      stem: 'Un lactante de 5 meses presenta un cuadro de tos y coriza, asociado a fiebre hasta 38,5°C. Al día siguiente evoluciona con dificultad respiratoria, taquipnea, retracción subcostal. Al examen físico tiene FR 70x\', uso de musculatura accesoria, sibilancias inspiratorias y espiratorias difusas e intensas, más cianosis perioral.',
      question: '¿Cuál es el agente etiológico más probable?',
      options: [
        { letter: 'A', text: 'Virus respiratorio sincicial' },
        { letter: 'B', text: 'Bordetella pertussis' },
        { letter: 'C', text: 'Virus influenza' },
        { letter: 'D', text: 'Virus parainfluenza' },
        { letter: 'E', text: 'Neumococo' },
      ],
      correct: 'A',
      explanation: 'Bronquiolitis clásica del lactante, cuyo agente etiológico principal es el virus respiratorio sincicial.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Lactante de cinco meses con tos y coriza, y fiebre hasta treinta y ocho y medio. Al día siguiente aparece dificultad respiratoria y taquipnea, con frecuencia respiratoria de setenta, uso de musculatura accesoria, sibilancias en toda la espiración y la inspiración, y cianosis perioral.',
        question: '¿Cuál es el agente etiológico más probable?',
        options: 'Las opciones: virus respiratorio sincicial, Bordetella pertussis, virus influenza, virus parainfluenza, o neumococo.',
        answer: 'Es la A, virus respiratorio sincicial. Es la bronquiolitis clásica que vimos al inicio de la clase, y este virus explica la gran mayoría de los casos. Fíjate que aquí el score de Tal daría un puntaje severo: frecuencia muy alta, sibilancias intensas y cianosis, así que a este paciente le corresponde hospitalizar de inmediato.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 158',
      stem: 'Un lactante de 8 meses presenta fiebre y rinorrea de 48 horas de evolución, con dificultad respiratoria en las últimas horas. Al examen físico presenta retracción subcostal e intercostal moderada, FC 120x\', FR 35x\', saturación de oxígeno del 93%. En el examen pulmonar se auscultan sibilancias y crépitos bilaterales.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Bronquiolitis' },
        { letter: 'B', text: 'Asma del lactante' },
        { letter: 'C', text: 'Neumonía multifocal' },
        { letter: 'D', text: 'Neumonía atípica' },
        { letter: 'E', text: 'Cardiopatía congénita' },
      ],
      correct: 'A',
      explanation: 'Cuadro catarral seguido de dificultad respiratoria con sibilancias en un lactante: caso clásico de bronquiolitis, definida como el primer episodio de síndrome bronquial obstructivo.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil veinticuatro. Lactante de ocho meses con fiebre y rinorrea de dos días, y dificultad respiratoria en las últimas horas. Al examen: tiraje subcostal e intercostal moderado, frecuencia cardíaca de ciento veinte, frecuencia respiratoria de treinta y cinco, saturación de noventa y tres por ciento, con sibilancias y crépitos en ambos pulmones.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: bronquiolitis, asma del lactante, neumonía multifocal, neumonía atípica, o cardiopatía congénita.',
        answer: 'La respuesta es la A, bronquiolitis. Es exactamente el mecanismo que vimos: pródromo catarral y luego dificultad respiratoria con sibilancias, en un lactante pequeño. La asma del lactante es la trampa tentadora, pero ese término se reserva para cuadros recurrentes, no para un primer episodio como este.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 148',
      stem: 'Un lactante de 5 meses de edad es llevado a urgencias, por presentar un cuadro de obstrucción bronquial. Al examen físico presenta taquipnea importante, satura 90%, tiene retracción intercostal, cianosis perioral y sibilancias bilaterales intensas.',
      question: '¿Cuál es la primera medida que se debe tomar?',
      options: [
        { letter: 'A', text: 'Nebulizaciones con salbutamol' },
        { letter: 'B', text: 'Nebulizaciones con budesonida' },
        { letter: 'C', text: 'Dar corticoides orales' },
        { letter: 'D', text: 'Dar oxígeno por mascarilla' },
        { letter: 'E', text: 'Administrar corticoides endovenosos' },
      ],
      correct: 'D',
      explanation: 'Ante hipoxemia en un lactante grave, la medida más urgente es corregir la oxigenación; el oxígeno es la intervención con mayor evidencia de beneficio en la bronquiolitis, más que broncodilatadores o corticoides.',
      say: {
        stem: 'Una última pregunta real, del EUNACOM de julio de dos mil quince. Lactante de cinco meses con obstrucción bronquial, taquipneico, saturando noventa, con retracción intercostal, cianosis perioral y sibilancias intensas en ambos pulmones.',
        question: '¿Cuál es la primera medida que se debe tomar?',
        options: 'Las opciones: nebulizar con salbutamol, nebulizar con budesonida, dar corticoides orales, dar oxígeno por mascarilla, o corticoides endovenosos.',
        answer: 'Es la D, oxígeno. Este paciente está hipoxémico, y ante eso lo primero siempre es corregir la oxigenación. Conecta esto con lo que dijimos antes: en la bronquiolitis pura, el broncodilatador y el corticoide tienen un beneficio marginal, y lo que de verdad cambia el pronóstico es el oxígeno.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El score manda', tag: 'Memorízalo', kind: 'key', items: [
          { t: 'Cinco o menos', d: 'Casa, con salbutamol',
            say: 'Cerremos con las reglas de oro. Score de cinco o menos: manejo en casa.' },
          { t: 'Seis a ocho', d: 'Hospitalización abreviada, una hora',
            say: 'Entre seis y ocho: hospitalización abreviada por una hora, y si persiste, corticoide y una segunda hora.' },
          { t: 'Nueve o más', d: 'Hospitalizar de inmediato',
            say: 'Nueve o más: se hospitaliza de inmediato, sin intentar nada abreviado.' },
        ] },
        { title: 'Lo que se pregunta distinto', tag: 'No lo olvides', kind: 'alert', items: [
          { t: 'Tórax silente', d: 'Es lo más grave, no una mejoría',
            say: 'El tórax silente es la máxima gravedad, jamás lo leas como mejoría.' },
          { t: 'El oxígeno es lo que salva', d: 'Más que el broncodilatador o el corticoide',
            say: 'Y si te llevas una sola idea de hoy: en la bronquiolitis, el score de Tal decide todo, y el oxígeno es lo que de verdad cambia el pronóstico. Nos vemos en la próxima clase, con la laringitis.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Bronquiolitis y SBO: el score decide la conducta',
    root: N('start', 'Lactante con sibilancias', 'Primer episodio, antes de los dos años',
      'Tienes un lactante con su primer episodio de sibilancias, antes de los dos años. Antes de decidir nada, calcula el score de Tal: frecuencia respiratoria, sibilancias, cianosis y tiraje.',
      ['', N('q', '¿Cuánto suma el score de Tal?', 'De cero a doce puntos',
        'Súmalos y mira en qué rango cae.',
        ['Cinco o menos', N('ok', 'Leve', 'Salbutamol en casa y control',
          'Cinco o menos es leve. Se maneja en la casa, con salbutamol con aerocámara y control si no mejora.')],
        ['Seis a ocho', N('do', 'Hospitalización abreviada', 'Salbutamol cada diez minutos, una hora',
          'Entre seis y ocho es moderado. Inicias hospitalización abreviada: salbutamol cada diez minutos, durante una hora completa, y luego reevalúas.',
          ['Baja a cinco o menos', N('ok', 'Alta', 'Salbutamol cada cuatro horas y control',
            'Si al término de la hora bajó a cinco o menos, das el alta con salbutamol cada cuatro horas y control al día siguiente.')],
          ['Sigue entre seis y ocho', N('alert', 'Corticoide y segunda hora', 'Prednisona oral, más otra hora de salbutamol',
            'Si sigue igual, agregas un corticoide oral e inicias una segunda hora de salbutamol. Si tampoco mejora, ahí sí se hospitaliza para oxígeno y manejo continuo.')])],
        ['Nueve a doce', N('alert', 'Severo: hospitalizar ya', 'Oxígeno y observación estricta',
          'Nueve o más es severo, y aquí no hay hospitalización abreviada: se hospitaliza de inmediato, con oxígeno, y se considera apoyo ventilatorio si no responde.')])]),
  },
};
