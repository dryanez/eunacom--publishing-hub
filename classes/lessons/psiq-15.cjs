// Clase 17.15 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-15). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (1.09.1.001) trae una sola pregunta (Julio 2024 P6) y no es de la clase (acidosis metabólica en insuficiencia renal): no se usa.
// Las de abstinencia, delirium tremens, Wernicke y motivación están bajo 5.01.1.012, 5.01.1.014, 5.01.1.011 y 1.02.2.004. De la búsqueda por tema se usaron:
//   Diciembre 2019 P37 (delirium tremens tras traumatismo: benzodiacepina; lorazepam si hay hepatopatía), Enero 2023 P131 (abstinencia a las 48 horas: lorazepam y no glucosado ni haloperidol),
//   Diciembre 2025 P72 (antecedente de delirium tremens: desintoxicar hospitalizado; lorazepam en daño hepático), Agosto 2021 P133 (abstinencia de alcohol que no llega a delirium tremens),
//   Diciembre 2024 P22 (tríada de Wernicke tras cirugía bariátrica y consumo de alcohol; texto de la alternativa A limpiado de comentarios de la fuente), Diciembre 2025 P73 (consumo perjudicial en precontemplación: entrevista motivacional).
// No usadas por repetir lo mismo: Julio 2015 P81, Julio 2017 P51 (delirium tremens), Julio 2017 P114 (abstinencia moderada; el enunciado viene truncado), Julio 2025 P103 (delirium tremens; ya lo usa neuro-21).
// DESCARTADA: Diciembre 2022 P148 (agitación a las 48 horas con desorientación y temblor tras ingreso por trauma; la clave del banco dice "Tiamina" y la explicación no corresponde): el tratamiento del delirium tremens es la benzodiacepina; la tiamina se da además, no en vez de. No se enseña.
// Sin pregunta real sobre alucinosis alcohólica ni sobre naltrexona: dos preguntas del libro como "Caso representativo".
// Cuidado clínico: tiamina antes o junto con la glucosa (sin retrasar la glucosa si hay hipoglicemia grave); antipsicóticos no son tratamiento de la abstinencia; fenitoína no se usa para las convulsiones de abstinencia.
//   Lenguaje: "persona con consumo problemático de alcohol". Los enunciados reales se copian tal cual (usan "alcohólico").
// Imágenes: ninguna (los libros extraídos no traen RM de Wernicke ni figuras clínicas útiles); se proponen animaciones.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-15',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Trastorno por uso de alcohol: abstinencia, delirium tremens, encefalopatía de Wernicke, CIWA-Ar y tratamiento de mantención',
      say: 'Bienvenido. Hoy vemos el consumo problemático de alcohol, la principal adicción en Chile y una causa constante de urgencias. Partimos por el mecanismo de la abstinencia, que explica el temblor, la agitación y las convulsiones. Seguimos con la cronología, la diferencia entre alucinosis y delirium tremens, y la escala CIWA para decidir el tratamiento. Después viene la regla de oro de la tiamina antes de la glucosa, la encefalopatía de Wernicke, y el abordaje del consumo en atención primaria.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Por qué aparece la abstinencia',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'cause', t: 'Alcohol crónico', s: 'Facilita GABA, frena NMDA' },
        { id: 'b', col: 1, row: 2, k: 'mech', t: 'El cerebro se adapta', s: 'Menos GABA-A, más NMDA' },
        { id: 'c', col: 2, row: 2, k: 'alert', t: 'Se suspende el alcohol', s: 'Cae el freno, queda el acelerador' },
        { id: 'd', col: 3, row: 1, k: 'effect', t: 'Exceso de glutamato', s: 'Neurotoxicidad' },
        { id: 'e', col: 3, row: 3, k: 'effect', t: 'Hiperactividad autonómica', s: 'Noradrenalina alta' },
        { id: 'f', col: 4, row: 2, k: 'risk', t: 'Abstinencia', s: 'Temblor, convulsiones, delirium' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'c', to: 'e' }, { from: 'd', to: 'f' }, { from: 'e', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'Cerebro adaptado al alcohol',
          say: 'El alcohol potencia el receptor inhibidor GABA A y frena el receptor excitador NMDA, el del glutamato. Con el consumo crónico el cerebro compensa: baja los receptores GABA A y sube los NMDA. Está equilibrado, pero solo mientras haya alcohol.' },
        { show: ['c', 'd', 'e'], note: 'Sin alcohol, hiperexcitación',
          say: 'Cuando el consumo se corta o se reduce de golpe, desaparece el freno y queda el acelerador. Hay un exceso de glutamato y de actividad noradrenérgica: es una tormenta de hiperexcitación.' },
        { show: ['f'], note: 'Temblor, convulsiones, delirium',
          say: 'Eso se ve como temblor, sudor, taquicardia, convulsiones y, en el extremo, delirium tremens. Por esta misma razón el tratamiento son las benzodiacepinas, que reponen el freno GABA.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Cronología',
      title: 'Abstinencia: qué pasa y cuándo',
      head: ['Etapa', 'Horas desde el último trago', 'Qué se ve', 'Conciencia'],
      rows: [
        { cells: ['Abstinencia leve', '6 a 12', 'Temblor, sudor, taquicardia, náuseas', 'Vigil y orientado'],
          say: 'A las seis a doce horas aparece la abstinencia leve: temblor fino de manos, sudor, taquicardia, náuseas, ansiedad e insomnio. El paciente está vigil y orientado.' },
        { cells: ['Alucinosis alcohólica', '12 a 24', 'Alucinaciones auditivas o visuales', 'Lúcido y orientado'],
          say: 'De las doce a las veinticuatro horas puede haber alucinosis alcohólica: alucinaciones, pero con la conciencia lúcida y la persona orientada. Esa lucidez la distingue del delirium tremens.' },
        { cells: ['Convulsiones', '12 a 48', 'Tónico-clónicas generalizadas, únicas o en salvas', 'Estupor postictal breve'],
          say: 'Entre las doce y las cuarenta y ocho horas pueden aparecer convulsiones tónico-clónicas generalizadas, únicas o en salvas breves, y autolimitadas.' },
        { cells: ['Delirium tremens', '48 a 96', 'Confusión, zoopsias, fiebre, disautonomía', 'Comprometida'],
          say: 'Entre las cuarenta y ocho y las noventa y seis horas, y hasta siete días, puede aparecer el delirium tremens: confusión global, desorientación, fiebre, disautonomía y alucinaciones de animales pequeños.' },
        { cells: ['Wernicke', 'Cualquier momento', 'Oftalmoplejía, ataxia, confusión', 'Confusional agudo'],
          say: 'Y la encefalopatía de Wernicke puede aparecer en cualquier momento, porque no depende del tiempo de abstinencia sino del déficit de tiamina.' },
      ],
    },

    {
      type: 'points',
      kicker: 'La comparación',
      title: 'Alucinosis y delirium tremens',
      cards: [
        { title: 'Alucinosis alcohólica', tag: 'Más precoz', kind: 'normal', items: [
          { t: 'Alucinaciones con conciencia lúcida', d: 'Orientado; a veces reconoce que son por dejar el alcohol',
            say: 'En la alucinosis hay voces o imágenes, pero la persona está lúcida, orientada en tiempo y espacio, con atención conservada, y a veces reconoce que podrían deberse a haber dejado de beber.' },
          { t: '12 a 24 horas', d: 'No hay fiebre ni disautonomía importante',
            say: 'Aparece temprano, a las doce a veinticuatro horas, y sin la tormenta autonómica del delirium. Una esquizofrenia exigiría seis meses de evolución, así que no es una opción.' },
        ] },
        { title: 'Delirium tremens', tag: 'Emergencia vital', kind: 'alert', items: [
          { t: 'Confusión y desorientación', d: 'Zoopsias: ver insectos o animales',
            say: 'En el delirium tremens hay confusión global y desorientación, con alucinaciones visuales de insectos, culebras o ratas, y mucho miedo. La conciencia está comprometida.' },
          { t: 'Fiebre, sudor y taquicardia intensos', d: 'Mortalidad hasta 15% sin tratamiento',
            say: 'Además, temblor grosero, fiebre, sudor profuso, hipertensión y agitación extrema. Sin tratamiento, la mortalidad llega hasta quince por ciento, por colapso hemodinámico y arritmias.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'CIWA-Ar',
      title: 'Medir la gravedad para decidir',
      head: ['Puntaje CIWA-Ar', 'Gravedad', 'Conducta'],
      rows: [
        { cells: ['Menos de 10', 'Leve', 'Medidas generales; sin benzodiacepina de rutina'],
          say: 'La escala CIWA-Ar mide náuseas, temblor, sudor, ansiedad, agitación, alteraciones sensoriales, cefalea y orientación, con un puntaje de cero a sesenta y siete. Con menos de diez, la abstinencia es leve: hidratación, medidas generales, y no se usan benzodiacepinas de rutina.' },
        { cells: ['10 a 19', 'Moderada', 'Benzodiacepina oral supervisada; observación'],
          say: 'De diez a diecinueve es moderada. Se da una benzodiacepina oral supervisada, titulada según el puntaje, con observación médica.' },
        { cells: ['20 o más, o delirium tremens', 'Severa', 'Hospitalizar, cama monitorizada, benzodiacepina enérgica'],
          say: 'Con veinte o más, o ante un delirium tremens, la abstinencia es grave. Se hospitaliza en cama monitorizada, y si el cuadro es crítico, en unidad de paciente crítico, con benzodiacepinas en dosis enérgicas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Benzodiacepinas: cuál y a quién',
      cards: [
        { title: 'Diazepam', tag: 'Hígado conservado', kind: 'pharma', items: [
          { t: 'Primera línea con hígado sano', d: 'Inicio rápido; vida media larga',
            say: 'El diazepam es la primera línea cuando la función hepática está conservada. Actúa rápido y tiene metabolitos activos que prolongan el efecto y se autotitulan, lo que previene convulsiones de rebote.' },
          { t: '10 a 20 mg VO cada 1 a 2 h', d: 'Según CIWA-Ar, hasta puntaje bajo 10',
            say: 'Se dan diez a veinte miligramos por vía oral cada una a dos horas, según el puntaje, hasta que el CIWA baje de diez.' },
        ] },
        { title: 'Lorazepam', tag: 'Hepatopatía', kind: 'pharma', items: [
          { t: 'Cirrosis, adulto mayor, EPOC', d: 'Sin metabolitos activos: no se acumula',
            say: 'En cirrosis o daño hepático crónico, en adultos mayores y en EPOC severo, la elección es lorazepam. Se elimina por glucuronidación, sin metabolitos activos, y no se acumula en la falla hepática, mientras que el diazepam sí puede gatillar una encefalopatía hepática.' },
          { t: '2 a 4 mg VO o SL cada 2 h', d: 'Según CIWA-Ar',
            say: 'Se usan dos a cuatro miligramos por vía oral o sublingual cada dos horas, según el puntaje. Esa es la respuesta del EUNACOM ante un delirium tremens con enfermedad hepática.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones',
      title: 'Convulsiones, antipsicóticos y soporte',
      cards: [
        { title: 'Qué sí', tag: 'Manejo', kind: 'key', items: [
          { t: 'Convulsiones: benzodiacepina', d: 'Sin fenitoína de mantención',
            say: 'Las convulsiones de abstinencia se tratan con benzodiacepinas. No requieren fenitoína de mantención, una trampa clásica.' },
          { t: 'Hidratar y corregir electrolitos', d: 'Suero fisiológico, magnesio y potasio',
            say: 'En el delirium tremens hay deshidratación y alteraciones electrolíticas, así que se hidrata con suero fisiológico y se corrigen el magnesio y el potasio. Y un box tranquilo y con luz ayuda.' },
        ] },
        { title: 'Qué no', tag: 'Trampa', kind: 'alert', items: [
          { t: 'Antipsicótico solo: no es tratamiento', d: 'No previene convulsiones ni trata la causa',
            say: 'El haloperidol solo no es el tratamiento de la abstinencia. Baja el umbral convulsivo y no trata la hiperexcitación. La base es siempre la benzodiacepina.' },
          { t: 'Suero glucosado antes que tiamina', d: 'Puede precipitar un Wernicke',
            say: 'Y la otra trampa: el suero glucosado sin tiamina previa. Eso lo vemos ahora.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Wernicke',
      title: 'Déficit de tiamina y glucosa',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'cause', t: 'Déficit de tiamina', s: 'Desnutrición, malabsorción, OH' },
        { id: 'b', col: 1, row: 2, k: 'mech', t: 'Cerebro sin cofactor', s: 'Falla el metabolismo de glucosa' },
        { id: 'c', col: 2, row: 1, k: 'alert', t: 'Dar glucosa sola', s: 'Gasta la B1 que queda' },
        { id: 'd', col: 2, row: 3, k: 'good', t: 'Tiamina primero o junto', s: 'EV o IM' },
        { id: 'e', col: 3, row: 1, k: 'risk', t: 'Wernicke o Korsakoff', s: 'Daño en cuerpos mamilares' },
        { id: 'f', col: 3, row: 3, k: 'good', t: 'Cuadro reversible', s: 'Si se trata a tiempo' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'b', to: 'd' }, { from: 'c', to: 'e' }, { from: 'd', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'La B1 mueve la glucosa en el cerebro',
          say: 'La tiamina es un cofactor necesario para que el cerebro use la glucosa. Las personas con consumo problemático de alcohol suelen tener poca reserva por desnutrición y mala absorción intestinal.' },
        { show: ['c', 'e'], note: 'Glucosa sola agota lo que queda',
          say: 'Si le das glucosa a alguien con poca tiamina, la glucosa entra a la vía metabólica y consume la poca vitamina que queda. Eso puede precipitar un Wernicke, con daño en los cuerpos mamilares y el tálamo.' },
        { show: ['d', 'f'], note: 'Tiamina antes, o al mismo tiempo',
          say: 'Por eso la regla es dar la tiamina antes de la glucosa o junto con ella, nunca la glucosa sola. Si la glicemia está muy baja, no se retrasa la glucosa: se administran juntas. Eso se pregunta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Wernicke y Korsakoff',
      title: 'Reconocer y tratar',
      cards: [
        { title: 'Tríada de Wernicke', tag: 'Emergencia neurológica', kind: 'criteria', items: [
          { t: 'Oftalmoplejía o nistagmo', d: 'Parálisis del VI par, mirada conjugada',
            say: 'La tríada es oftalmoplejía, con parálisis del sexto par o nistagmo, ataxia de la marcha y del tronco, y confusión. Un truco: encefalopatía, oftalmoplejía y ataxia.' },
          { t: 'Ataxia y confusión', d: 'Basta uno o dos signos para sospechar',
            say: 'La tríada completa aparece solo en alrededor de un tercio de los casos. En una persona con consumo crónico, con uno o dos de estos signos, ya hay que sospecharlo y tratar. Puede aparecer también tras una cirugía bariátrica.' },
        ] },
        { title: 'Tratamiento y secuela', tag: 'Tiamina', kind: 'pharma', items: [
          { t: 'Tiamina 100 a 300 mg EV o IM al día', d: 'Por 3 a 5 días',
            say: 'El tratamiento es tiamina, de cien a trescientos miligramos por vía endovenosa o intramuscular al día, durante tres a cinco días, según el libro. En un Wernicke ya instalado, el equipo tratante suele usar dosis mayores.' },
          { t: 'Korsakoff: amnesia y confabulación', d: 'Secuela irreversible del Wernicke tratado tarde',
            say: 'La secuela es el síndrome de Korsakoff: amnesia anterógrada profunda y confabulación, es decir, inventar historias verosímiles sin intención de mentir. La memoria remota queda relativamente preservada.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Atención primaria',
      title: 'Detección: AUDIT',
      cards: [
        { title: 'Cuestionario AUDIT', tag: '10 preguntas', kind: 'criteria', items: [
          { t: 'Menos de 8: bajo riesgo', d: 'Refuerzo positivo y consejo',
            say: 'El AUDIT es el cuestionario de diez preguntas que usa el MINSAL en atención primaria. Menos de ocho puntos es consumo de bajo riesgo.' },
          { t: '8 a 15: consumo de riesgo', d: 'Consejería e intervención breve',
            say: 'De ocho a quince es consumo de riesgo, y corresponde consejería e intervención breve.' },
          { t: '16 o más: probable dependencia', d: 'Derivar a programa especializado',
            say: 'Con dieciséis o más hay probable dependencia, y se deriva a un programa especializado. En menores de veinte años el consumo perjudicial o la dependencia de alcohol y drogas tiene garantía explícita en salud.' },
        ] },
        { title: 'Entrevista motivacional', tag: 'Prochaska y DiClemente', kind: 'key', items: [
          { t: 'Precontemplación a mantenimiento', d: 'Cinco etapas del cambio',
            say: 'Para decidir cómo intervenir, se identifica la etapa del cambio: precontemplación, cuando no reconoce el problema; contemplación, con ambivalencia; preparación; acción y mantenimiento.' },
          { t: 'Adaptar la intervención, sin confrontar', d: 'Primero la motivación, luego el fármaco',
            say: 'Si la persona no reconoce que tiene un problema, no sirve indicar fármacos ni derivar a psicoterapia: primero se trabaja la motivación, sin confrontar. Y la entrevista motivacional es la herramienta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Después de la abstinencia',
      title: 'Fármacos para mantener',
      cards: [
        { title: 'Naltrexona', tag: 'Anticraving', kind: 'pharma', items: [
          { t: 'Antagonista opioide: 50 mg al día', d: 'Reduce el deseo y el placer de beber',
            say: 'La naltrexona es un antagonista opioide: bloquea los receptores mu en el sistema de recompensa, y reduce el craving, el deseo compulsivo de beber, y el placer del consumo. Se usa a cincuenta miligramos al día.' },
          { t: 'Evitar con opioides o falla hepática', d: 'Contraindicación',
            say: 'No se usa si la persona consume opioides ni en falla hepática aguda.' },
        ] },
        { title: 'Disulfiram y acamprosato', tag: 'Otras opciones', kind: 'pharma', items: [
          { t: 'Disulfiram 250 mg: aversivo', d: 'Acetaldehído si bebe; exige motivación',
            say: 'El disulfiram inhibe la aldehído deshidrogenasa. Si la persona bebe, se acumula acetaldehído y aparecen vómitos, rubor, hipotensión y taquicardia. Requiere alta motivación y supervisión.' },
          { t: 'Acamprosato: modula NMDA', d: 'Eliminación renal; seguro en hepatopatía',
            say: 'El acamprosato modula el glutamato y reduce la disforia prolongada de la abstinencia. Se elimina por vía renal, y es seguro en insuficiencia hepática.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la persona con consumo problemático de alcohol a la abstinencia, la urgencia y la mantención.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Voces a las 18 horas, orientado', 'Alucinosis alcohólica', 'Llamarlo delirium tremens o esquizofrenia'],
          say: 'Voces a las dieciocho horas con la persona orientada y lúcida: alucinosis alcohólica. El error es llamarlo delirium tremens, que exige desorientación.' },
        { cells: ['Agitación, zoopsias, fiebre a las 48 horas', 'Delirium tremens: benzodiacepina', 'Haloperidol solo'],
          say: 'Agitación con zoopsias, fiebre y desorientación a las cuarenta y ocho horas del último trago: delirium tremens, que se trata con benzodiacepina. El error es dar solo haloperidol.' },
        { cells: ['Delirium tremens con cirrosis', 'Lorazepam', 'Diazepam por acumulación'],
          say: 'Con cirrosis o daño hepático, se prefiere lorazepam y no diazepam, que se acumula.' },
        { cells: ['Ataxia, nistagmo, confusión, glicemia baja', 'Tiamina antes o con la glucosa', 'Glucosa sola'],
          say: 'Tríada de Wernicke con glicemia baja: tiamina antes o junto con la glucosa. El error es dar glucosa sola.' },
        { cells: ['Convulsión de abstinencia', 'Benzodiacepina', 'Fenitoína de mantención'],
          say: 'Convulsión por abstinencia: benzodiacepina. No se mantiene fenitoína.' },
        { cells: ['Consumo perjudicial sin conciencia del problema', 'Entrevista motivacional', 'Disulfiram o derivar a psicoterapia'],
          say: 'Si hay consumo perjudicial pero sin conciencia de problema, es precontemplación: se parte por la entrevista motivacional, no por el fármaco.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 52 años en situación de calle, con consumo diario de alcohol, es llevado a urgencias por confusión. Está soporoso, con nistagmo horizontal bilateral y ataxia de tronco que impide la bipedestación. La glicemia capilar es de 48 mg/dL. No tiene fiebre ni temblor grosero.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solo suero glucosado hipertónico en bolo, y la vitamina más tarde' },
        { letter: 'B', text: 'Tiamina endovenosa antes o junto con la glucosa, sin retrasar el tratamiento de la hipoglicemia' },
        { letter: 'C', text: 'Fenitoína en infusión rápida' },
        { letter: 'D', text: 'Haloperidol 5 mg intramuscular por la confusión' },
        { letter: 'E', text: 'Insulina cristalina subcutánea' },
      ],
      correct: 'B',
      explanation: 'Tríada de Wernicke (confusión, oftalmoplejía o nistagmo, ataxia) con hipoglicemia en una persona con consumo crónico y desnutrición. La glucosa sola puede agotar la tiamina residual y precipitar daño cerebral irreversible. Se da tiamina por vía endovenosa antes o junto con la glucosa, sin dejar sin tratar la hipoglicemia. La fenitoína no trata el Wernicke, el haloperidol no corresponde y la insulina empeoraría la hipoglicemia.',
      say: {
        stem: 'Un hombre de cincuenta y dos años en situación de calle, con consumo diario de alcohol, llega por confusión. Está soporoso, con nistagmo horizontal y ataxia de tronco que le impide ponerse de pie. La glicemia capilar es de cuarenta y ocho. No tiene fiebre ni temblor grosero.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: glucosa sola y vitamina después; tiamina antes o junto con la glucosa; fenitoína; haloperidol; o insulina. Piénsalo.',
        answer: 'Es la B. Tiene la tríada de Wernicke, con una hipoglicemia que también hay que tratar. Por eso la tiamina se da antes o junto con la glucosa, nunca después ni sin ella, porque la glucosa sola puede agotar la tiamina que queda. Ni la fenitoína ni el haloperidol tratan esto, y la insulina empeoraría la hipoglicemia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 37',
      stem: 'Un paciente se hospitaliza hace 48 horas, por un traumatismo, secundario a un accidente de tránsito. Como antecedente, toma 1 botella de vino al día, sin llegar a la ebriedad. Al segundo día de ingreso presenta un cuadro de agitación psicomotora, desorientación temporoespacial, temblor y alucinaciones visuales zoomórficas. ¿Cuál es el tratamiento más adecuado?',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Haloperidol' },
        { letter: 'B', text: 'Lorazepam' },
        { letter: 'C', text: 'Risperidona' },
        { letter: 'D', text: 'Carbamacepina' },
        { letter: 'E', text: 'Tiamina' },
      ],
      correct: 'B',
      explanation: 'Tiene un delirium tremens clásico, que se trata con benzodiacepinas, en especial el diazepam. El lorazepam también es útil y es el de elección en el DHC.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un paciente se hospitaliza por un traumatismo en un accidente de tránsito. Bebe una botella de vino al día. Al segundo día de ingreso tiene agitación, desorientación en tiempo y espacio, temblor y alucinaciones visuales de animales.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: haloperidol; lorazepam; risperidona; carbamazepina; o tiamina. Piénsalo.',
        answer: 'Es la B. Es un delirium tremens clásico, a las cuarenta y ocho horas, con desorientación, temblor y zoopsias, y se trata con una benzodiacepina. El lorazepam es válido y es el preferido si hay daño hepático. El haloperidol y la risperidona no tratan la abstinencia. La tiamina se da además, pero no reemplaza la benzodiacepina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 131',
      stem: 'Paciente con hálito alcohólico en urgencias; TAC descarta lesiones. A las 48 horas, agitación y desorientación. ¿Cuál es el tratamiento más adecuado?',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Haloperidol 5 mg IM' },
        { letter: 'B', text: 'Tiamina 100 mg EV' },
        { letter: 'C', text: 'Suero glucosado 10% endovenoso' },
        { letter: 'D', text: 'Metadona oral' },
        { letter: 'E', text: 'Lorazepam endovenoso (manejo de síndrome de abstinencia alcohólica)' },
      ],
      correct: 'E',
      explanation: 'Agitación y desorientación a las 48 horas de la última ingesta es un síndrome de abstinencia alcohólica grave. Se trata con una benzodiacepina, aquí lorazepam endovenoso. No se da suero glucosado solo ni un antipsicótico como único tratamiento.',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un paciente con hálito alcohólico llega a urgencias, y el TAC no muestra lesiones. A las cuarenta y ocho horas tiene agitación y desorientación.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: haloperidol intramuscular; tiamina endovenosa; suero glucosado al diez por ciento; metadona oral; o lorazepam endovenoso. Piénsalo.',
        answer: 'Es la E. Descartada una lesión por la tomografía, la agitación y la desorientación a las cuarenta y ocho horas son una abstinencia grave, y su tratamiento es una benzodiacepina. La tiamina es necesaria, pero sola no controla el cuadro; el glucosado solo es justo la trampa de la tiamina; y el haloperidol solo no trata la causa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 72',
      stem: 'Un paciente de 70 años, con antecedente de daño hepático crónico y consumo de alcohol activo, consulta porque quiere dejar de beber. Consume 3 litros de cerveza al día y comenta que hace un año intentó bajar el consumo a 1 litro al día, sin embargo, presentó agitación, angustia y la visualización de insectos que él no sabía que no eran reales. ¿Cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar el cese inmediato del consumo de alcohol' },
        { letter: 'B', text: 'Iniciar disulfiram' },
        { letter: 'C', text: 'Hospitalizar para desintoxicación' },
        { letter: 'D', text: 'Indicar lorazepam' },
        { letter: 'E', text: 'Derivar para psicoterapia cognitivo-conductual' },
      ],
      correct: 'C',
      explanation: 'Tiene un trastorno por uso de alcohol y está motivado para dejar de beber, pero tiene antecedente de un síndrome de abstinencia grave, con delirium tremens previo, por lo que lo razonable es que inicie la discontinuación bajo supervisión médica, en el hospital. Si presentara síntomas de abstinencia grave, se trataría con lorazepam, ya que el diazepam no se recomienda en el daño hepático crónico.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un paciente de setenta años, con daño hepático crónico y consumo activo de alcohol, quiere dejar de beber. Toma tres litros de cerveza al día. Hace un año intentó bajar a un litro, y presentó agitación, angustia y la visión de insectos, que sabía que no eran reales.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: cese inmediato del consumo; iniciar disulfiram; hospitalizar para desintoxicación; indicar lorazepam; o derivar a psicoterapia. Piénsalo.',
        answer: 'Es la C. Está motivado, pero tiene antecedente de abstinencia grave, con alucinaciones, y un daño hepático crónico. Con ese riesgo, la desintoxicación se hace hospitalizado y con supervisión médica. Cortar de golpe en la casa es peligroso, el disulfiram no corresponde antes de desintoxicar, y si la abstinencia fuera grave, el fármaco sería lorazepam por el hígado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 133',
      stem: 'Un paciente de 20 años, fumador y consumidor de alcohol, desde hace un mes presenta consumo diario de alcohol. Decide suspenderlo hace algunos días, sin embargo, evoluciona con intranquilidad, sudoración, palpitaciones y angustia, asociado a insomnio y malestar general, que han ido empeorando. Sus padres refieren que está muy asustado y que ha fumado marihuana en los últimos dos días, para disminuir su ansiedad. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Delirium tremens' },
        { letter: 'B', text: 'Síndrome de abstinencia de alcohol' },
        { letter: 'C', text: 'Síndrome de abstinencia de marihuana' },
        { letter: 'D', text: 'Esquizofrenia' },
        { letter: 'E', text: 'Intoxicación por canabis' },
      ],
      correct: 'B',
      explanation: 'Tiene un síndrome de privación alcohólica clásico (suele ser peor en el día 3-4 desde el cese del consumo). El que consuma marihuana es algo que puede orientar a un brote, en contexto de esquizofrenia, pero la clínica es distinta y, además, en este caso aparecieron los síntomas antes y comenzó a fumar marihuana después.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un joven de veinte años, fumador y consumidor diario de alcohol hace un mes, lo suspende hace unos días. Evoluciona con intranquilidad, sudor, palpitaciones, angustia, insomnio y malestar que empeoran. Sus padres dicen que está muy asustado, y que fumó marihuana los últimos dos días para calmar la ansiedad.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: delirium tremens; abstinencia de alcohol; abstinencia de marihuana; esquizofrenia; o intoxicación por cannabis. Piénsalo.',
        answer: 'Es la B. Inquietud, sudor, palpitaciones e insomnio tras suspender un consumo diario: abstinencia alcohólica, que suele empeorar al tercer o cuarto día. No hay desorientación ni alucinaciones, así que no es delirium tremens. La marihuana vino después, para aliviar los síntomas, y no es la causa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 22',
      stem: 'Hombre con antecedente de cirugía bariátrica hace 1 año y consumo de alcohol desde hace 7 meses, deja de asistir a control médico. Parte con 1 semana de evolución de ataxia, dificultad de la marcha, visión doble, confusión y somnolencia. ¿Cuál es la deficiencia?',
      question: '¿Cuál es la deficiencia?',
      options: [
        { letter: 'A', text: 'Tiamina (encefalopatía de Wernicke)' },
        { letter: 'B', text: 'Vitamina B12' },
        { letter: 'C', text: 'Vitamina C' },
        { letter: 'D', text: 'Laparotomía exploratoria' },
        { letter: 'E', text: 'Cirugía laparoscópica' },
      ],
      correct: 'A',
      explanation: 'Es la tríada de Wernicke: encefalopatía, oftalmoplejía (visión doble) y ataxia, por déficit de tiamina, en una persona con cirugía bariátrica y consumo de alcohol.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticuatro. Un hombre operado de cirugía bariátrica hace un año, con consumo de alcohol desde hace siete meses, deja de asistir a sus controles. Llega con una semana de ataxia, dificultad para caminar, visión doble, confusión y somnolencia.',
        question: '¿Cuál es la deficiencia?',
        options: 'Las opciones: tiamina; vitamina B doce; vitamina C; o dos opciones de cirugía que no corresponden. Piénsalo.',
        answer: 'Es la A. Ataxia, visión doble por oftalmoplejía y confusión forman la tríada de Wernicke, por déficit de tiamina. Los factores de riesgo son el alcohol y la cirugía bariátrica, que reduce la absorción. La vitamina B doce da neuropatía y anemia, no esta tríada aguda.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 73',
      stem: 'Una paciente de 35 años es traída al servicio de urgencia debido a que, luego del consumo de alcohol en una fiesta, presentó una actitud agresiva peleando con otros invitados, a quienes arrojó vasos de vidrio, por lo que fue retirada del lugar. Refiere que consume alcohol de manera esporádica, habitualmente solo durante los fines de semana, y que lo hace como una forma de distenderse de su alta carga laboral. En una oportunidad fue detenida por manejar en estado de ebriedad, sin embargo, ella no considera que ello sea un problema. ¿Cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar disulfiram vía oral' },
        { letter: 'B', text: 'Indicar benzodiacepinas vía oral' },
        { letter: 'C', text: 'Iniciar bupropión vía oral' },
        { letter: 'D', text: 'Realizar entrevista motivacional' },
        { letter: 'E', text: 'Derivar para psicoterapia cognitivo-conductual' },
      ],
      correct: 'D',
      explanation: 'Presenta un consumo perjudicial de alcohol con escasa conciencia de enfermedad (etapa precontemplativa), por lo que primero se debe trabajar la motivación al cambio. De nada sirve iniciar fármacos o derivar a psicoterapia, si no tiene intenciones de cambiar.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Una mujer de treinta y cinco años llega a urgencias porque, tras beber en una fiesta, se puso agresiva y arrojó vasos a otros invitados. Dice que bebe solo los fines de semana, para distenderse de su carga laboral. Una vez la detuvieron por conducir en estado de ebriedad, pero ella no lo considera un problema.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: disulfiram; benzodiacepinas orales; bupropión; entrevista motivacional; o derivar a psicoterapia cognitivo-conductual. Piénsalo.',
        answer: 'Es la D. Es un consumo perjudicial, con consecuencias, y ella no lo reconoce: precontemplación. Mientras no vea el problema, ni el disulfiram ni la psicoterapia funcionan, así que se parte por la entrevista motivacional. Las benzodiacepinas no tienen lugar: no está en abstinencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente alcohólico de 42 años consulta en urgencias a las 18 horas de su último trago refiriendo escuchar voces de personas desconocidas que murmuran amenazas a través de la pared del baño. En el examen mental se constata vigil, perfectamente orientado en tiempo y espacio (sabe la fecha exacta y dónde está), con atención preservada y juicio parcialmente conservado, reconociendo que las voces podrían deberse a haber dejado el trago. El examen neurológico es normal. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Delirium tremens' },
        { letter: 'B', text: 'Alucinosis alcohólica' },
        { letter: 'C', text: 'Esquizofrenia paranoide de inicio tardío' },
        { letter: 'D', text: 'Encefalopatía hepática grado IV' },
        { letter: 'E', text: 'Demencia de Korsakoff' },
      ],
      correct: 'B',
      explanation: 'Alucinosis alcohólica: alucinaciones auditivas o visuales vívidas en las primeras 12 a 24 horas, con el sensorio lúcido y la persona orientada. Esa lucidez la distingue del delirium tremens, que aparece a las 48 horas o más, con confusión global, desorientación e inestabilidad autonómica. La esquizofrenia exige seis meses de evolución.',
      say: {
        stem: 'Una pregunta de práctica del banco EUNACOM. Un hombre de cuarenta y dos años llega a urgencias a las dieciocho horas de su último trago, escuchando voces de desconocidos que murmuran amenazas a través de la pared. Está vigil, perfectamente orientado, con atención preservada, y reconoce que las voces podrían deberse a haber dejado de beber. El examen neurológico es normal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: delirium tremens; alucinosis alcohólica; esquizofrenia paranoide tardía; encefalopatía hepática; o Korsakoff. Piénsalo.',
        answer: 'Es la B. Alucinaciones a las dieciocho horas, con total lucidez y orientación: alucinosis alcohólica. El delirium tremens llega más tarde, con confusión y desorientación. La esquizofrenia exige seis meses, y Korsakoff es una amnesia crónica, no un cuadro agudo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un hombre de 38 años con dependencia severa al alcohol logra superar la abstinencia hospitalaria con éxito y se encuentra motivado para mantenerse sin beber. En policlínico de adicciones se decide indicar un fármaco que actúa como antagonista de los receptores opioides mu, bloqueando los efectos reforzadores placenteros del alcohol y reduciendo el "craving" o deseo impulsivo de consumo. ¿Cuál es dicho fármaco?',
      question: '¿Cuál es dicho fármaco?',
      options: [
        { letter: 'A', text: 'Disulfiram' },
        { letter: 'B', text: 'Naltrexona' },
        { letter: 'C', text: 'Metadona' },
        { letter: 'D', text: 'Acamprosato' },
        { letter: 'E', text: 'Buprenorfina' },
      ],
      correct: 'B',
      explanation: 'La naltrexona es un antagonista de los receptores opioides mu: reduce el efecto placentero del alcohol y el craving. El disulfiram inhibe la aldehído deshidrogenasa y produce una reacción aversiva; el acamprosato modula el glutamato (NMDA); la metadona y la buprenorfina son para la dependencia de opioides.',
      say: {
        stem: 'Una pregunta de práctica del banco EUNACOM. Un hombre de treinta y ocho años con dependencia severa al alcohol superó la abstinencia en el hospital y está motivado para no beber. En el policlínico de adicciones se indica un fármaco que es antagonista de los receptores opioides mu, que bloquea el efecto placentero del alcohol y reduce el craving.',
        question: '¿Cuál es dicho fármaco?',
        options: 'Las opciones: disulfiram; naltrexona; metadona; acamprosato; o buprenorfina. Piénsalo.',
        answer: 'Es la B. Antagonista opioide mu es la naltrexona. El disulfiram no bloquea el placer, sino que produce una reacción aversiva por acetaldehído. El acamprosato actúa sobre el glutamato, y la metadona y la buprenorfina son agonistas opioides para la dependencia de opioides, no del alcohol.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro',
      title: 'Lo que te llevas',
      cards: [
        { title: 'Abstinencia', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Alucinosis lúcida; delirium desorientado', d: 'Alucinosis a las 12 a 24 h; delirium desde las 48 h',
            say: 'Cerremos con las reglas de oro. La alucinosis alcohólica tiene alucinaciones con conciencia lúcida, a las doce a veinticuatro horas. El delirium tremens tiene confusión y desorientación, desde las cuarenta y ocho horas, y es una emergencia.' },
          { t: 'Benzodiacepina titulada por CIWA-Ar', d: 'Lorazepam si hay daño hepático',
            say: 'El tratamiento es la benzodiacepina titulada por el CIWA-Ar. Diazepam si el hígado está sano, y lorazepam en cirrosis, adulto mayor o EPOC. El haloperidol solo no es tratamiento, y las convulsiones se tratan con benzodiacepinas, no con fenitoína.' },
        ] },
        { title: 'Tiamina y mantención', tag: 'Para recordar', kind: 'key', items: [
          { t: 'Tiamina antes o junto con la glucosa', d: 'Wernicke: oftalmoplejía, ataxia, confusión',
            say: 'La tiamina se da antes de la glucosa o junto con ella, nunca la glucosa sola. El Wernicke es la tríada de oftalmoplejía, ataxia y confusión, y la secuela es el Korsakoff, con amnesia y confabulación.' },
          { t: 'AUDIT, motivación y naltrexona', d: 'Primero la motivación, luego el fármaco',
            say: 'En atención primaria, se detecta con el AUDIT y se trabaja la motivación según la etapa del cambio. Después, naltrexona para el craving. Si te llevas una sola idea de hoy: ante abstinencia, benzodiacepina y tiamina; y la glucosa nunca sola. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Persona con consumo problemático de alcohol: abstinencia, Wernicke y mantención',
    root: N('start', 'Consumo problemático de alcohol', 'Consulta por abstinencia o por consumo',
      'Una persona con consumo problemático de alcohol consulta. Lo primero es saber si está en abstinencia, porque eso decide si es una urgencia o una intervención de motivación.',
      ['Abstinencia: temblor, sudor, agitación', N('alert', 'Medir CIWA-Ar y dar tiamina', 'Y buscar signos de Wernicke',
        'Si hay síntomas de abstinencia, se mide el CIWA-Ar, se busca oftalmoplejía, ataxia y confusión, y se administra tiamina antes de cualquier glucosa o junto con ella.',
        ['CIWA menor de 10', N('ok', 'Medidas generales', 'Sin benzodiacepina de rutina',
          'Con menos de diez, abstinencia leve: hidratación y medidas generales, sin benzodiacepina de rutina.')],
        ['CIWA de 10 a 19', N('do', 'Benzodiacepina oral supervisada', 'Observación médica',
          'De diez a diecinueve, abstinencia moderada: benzodiacepina oral supervisada y observación.')],
        ['CIWA 20 o más, o delirium tremens', N('do', 'Hospitalizar y benzodiacepina', 'Diazepam; lorazepam si hay hígado',
          'Con veinte o más, o delirium tremens, se hospitaliza en cama monitorizada, con benzodiacepinas enérgicas. Diazepam si el hígado está sano, lorazepam si hay hepatopatía. Se corrigen hidratación y electrolitos.',
          ['Convulsión', N('refer', 'Benzodiacepina', 'No fenitoína de mantención',
            'Si hay una convulsión de abstinencia, se trata con benzodiacepina y no se deja fenitoína de mantención.')],
        )],
      )],
      ['Sin abstinencia: consumo', N('do', 'Aplicar AUDIT', 'Menos de 8, 8 a 15, 16 o más',
        'Si no hay abstinencia, se aplica el AUDIT para clasificar el consumo y se identifica la etapa del cambio.',
        ['8 a 15, sin conciencia del problema', N('ok', 'Entrevista motivacional', 'Intervención breve',
          'Con consumo de riesgo o perjudicial sin conciencia del problema, se parte con consejería, intervención breve y entrevista motivacional.')],
        ['16 o más, motivado', N('refer', 'Programa especializado', 'Naltrexona para el craving',
          'Con probable dependencia y motivación, se deriva a un programa especializado y se considera naltrexona, o disulfiram o acamprosato según el caso.')],
      )],
    ),
  },
};
