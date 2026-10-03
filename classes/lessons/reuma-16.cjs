// Clase 1.16 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_4.cjs (reuma-16).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-16",
  tier: 2,
  slides: [
    {
      type: "cover",
      subtitle: "Concepto unificador, entesitis, HLA-B27 y diagnóstico diferencial entre dolor inflamatorio y mecánico",
      say: "Bienvenidos a la clase dieciséis. Iniciamos el bloque de las espondiloartritis con su pilar semiológico fundamental: la distinción precisa entre el lumbago inflamatorio y el lumbago mecánico común. Revisaremos el concepto unificador de este grupo de enfermedades, el rol central de la entesitis, la asociación con el antígeno HLA-B veintisiete, los criterios diagnósticos internacionales y la respuesta espectacular a los antiinflamatorios no esteroidales. Comencemos.",
    },

    {
      type: "flow",
      kicker: "Concepto unificador",
      title: "Espondiloartritis seronegativas: La entesis como diana primaria",
      nodes: [
        { id: "hla", col: 0, row: 1, k: "start", t: "Predisposición genética HLA-B27", s: "Asociación en más del noventa por ciento" },
        { id: "ent", col: 1, row: 0, k: "mech", t: "Entesitis primaria cardinal", s: "Inflamación de inserciones tendinosas y ligamentosas" },
        { id: "axi", col: 2, row: 0, k: "alert", t: "Compromiso axial y sacroilitis", s: "Esqueleto axial y columna vertebral" },
        { id: "ser", col: 1, row: 2, k: "good", t: "Seronegatividad inmunológica", s: "Factor reumatoide y ANA estrictamente negativos" },
      ],
      edges: [
        { from: "hla", to: "ent" },
        { from: "ent", to: "axi" },
        { from: "hla", to: "ser" },
      ],
      steps: [
        { show: ["hla", "ent"], note: "La entesitis como lesión primaria",
          say: "A diferencia de la artritis reumatoide, donde la diana primaria es la membrana sinovial articular, en las espondiloartritis el blanco patológico primordial es la entesis: la zona de inserción ósea de tendones, ligamentos y cápsulas articulares, gatillando inflamación y osificación secundaria." },
        { show: ["axi", "ser"], note: "Compromiso axial y seronegatividad",
          say: "Este proceso inflamatorio compromete predominantemente el esqueleto axial, con sacroilitis y espondilitis. Además, son enfermedades seronegativas por definición: el factor reumatoide y los anticuerpos antinucleares resultan constantemente negativos en el laboratorio." },
      ],
    },

    {
      type: "points",
      kicker: "Semiología comparada cardinal",
      title: "Lumbago Inflamatorio versus Lumbago Mecánico Común",
      cards: [
        { title: "Lumbago Inflamatorio (Espondiloartropatía)", tag: "Menores de 45 años con inicio insidioso", kind: "alert", items: [
          { t: "Inicio insidioso en pacientes jóvenes", d: "Menores de cuarenta y cinco años sin traumatismo",
            say: "El lumbago inflamatorio debuta casi invariablemente en pacientes menores de cuarenta y cinco años, habitualmente entre los veinte y treinta y cinco años, con un inicio insidioso y progresivo a lo largo de meses sin antecedente de sobreesfuerzo agudo." },
          { t: "Dolor nocturno que despierta al paciente", d: "Segunda mitad de la noche que obliga a levantarse",
            say: "Un rasgo cardinal en la anamnesis es que el dolor despierta al paciente durante la segunda mitad de la noche o en la madrugada, obligándolo a levantarse de la cama y caminar por la habitación para lograr alivio de las molestias lumbares." },
        ] },
        { title: "Lumbago Mecánico Común (Miofascial o Discal)", tag: "Empeora con la carga y calma en cama", kind: "normal", items: [
          { t: "Inicio súbito tras sobrecarga física", d: "Cualquier edad con antecedente de esfuerzo",
            say: "El lumbago mecánico común suele comenzar de forma aguda o subaguda tras levantar objetos pesados o realizar movimientos torsionales bruscos, afectando a personas de cualquier grupo etario, especialmente entre treinta y sesenta años." },
          { t: "Alivio completo con el reposo en cama", d: "Empeora al caminar y estar de pie",
            say: "El dolor mecánico empeora claramente con la carga de peso, la deambulación prolongada y los esfuerzos físicos, aliviándose de manera rápida y casi completa al acostarse en reposo sobre una superficie cómoda." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Efecto del movimiento y fármacos",
      title: "La prueba del ejercicio y la respuesta analgésica a AINEs",
      cards: [
        { title: "Respuesta al ejercicio y al reposo", tag: "Paradoja del dolor inflamatorio", kind: "criteria", items: [
          { t: "Mejora con el ejercicio físico", d: "Disminuye conforme el paciente se moviliza",
            say: "Esta es la regla de oro que jamás debes olvidar: el lumbago inflamatorio mejora de forma notoria con el ejercicio y la actividad física, y empeora marcadamente con el reposo prolongado y la inmovilidad en cama." },
          { t: "Rigidez matinal prolongada", d: "Mayor a treinta a sesenta minutos al despertar",
            say: "Al despertar por las mañanas, los pacientes presentan una rigidez de columna muy prolongada, superior a treinta o sesenta minutos, sintiéndose anquilosados hasta que logran ducharse con agua caliente y caminar." },
        ] },
        { title: "Respuesta terapéutica a los AINEs", tag: "Criterio diagnóstico orientador", kind: "pharma", items: [
          { t: "Alivio espectacular en 24 a 48 horas", d: "Respuesta excelente a dosis plenas de AINEs",
            say: "La administración de un antiinflamatorio no esteroidal a dosis plenas produce una mejoría espectacular y muy rápida de los síntomas, con una reducción del dolor superior al setenta y cinco por ciento dentro de las primeras cuarenta y ocho horas." },
          { t: "Dolor en nalgas alternante en báscula", d: "Traduce inflamación de articulaciones sacroilíacas",
            say: "Otro signo de enorme valor semiológico es el dolor glúteo alternante o en báscula: el paciente relata dolor profundo en una nalga que luego de algunos días o semanas migra hacia la otra nalga, traduciendo sacroilitis bilateral activa." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Criterios internacionales",
      title: "Criterios ASAS para dolor lumbar inflamatorio",
      nodes: [
        { id: "cro", col: 0, row: 1, k: "start", t: "Dolor lumbar crónico (> 3 meses)", s: "En personas menores de 45 años" },
        { id: "c1", col: 1, row: 0, k: "good", t: "Mejora con el ejercicio", s: "Sin alivio con el reposo en cama" },
        { id: "c2", col: 1, row: 1, k: "alert", t: "Dolor nocturno en madrugada", s: "Obliga a levantarse y caminar" },
        { id: "c3", col: 1, row: 2, k: "mech", t: "Inicio insidioso matinal", s: "Rigidez matinal mayor a 30 minutos" },
        { id: "dx", col: 2, row: 1, k: "good", t: "Lumbago Inflamatorio Confirmado", s: "Cumplimiento de al menos 4 de 5 parámetros" },
      ],
      edges: [
        { from: "cro", to: "c1" },
        { from: "cro", to: "c2" },
        { from: "cro", to: "c3" },
        { from: "c1", to: "dx" },
        { from: "c2", to: "dx" },
        { from: "c3", to: "dx" },
      ],
      steps: [
        { show: ["cro", "c1", "c2", "c3"], note: "Parámetros del consenso ASAS",
          say: "La sociedad internacional para la evaluación de espondiloartritis define el dolor lumbar inflamatorio en pacientes menores de cuarenta y cinco años con dolor de más de tres meses que reúnen al menos cuatro de cinco parámetros clave." },
        { show: ["dx"], note: "Confirmación de dolor inflamatorio",
          say: "Estos parámetros son: edad de inicio menor a cuarenta años, comienzo insidioso, mejoría con el ejercicio, ausencia de mejoría con el reposo y dolor nocturno con despertar en la madrugada. Su presencia orienta inmediatamente a patología axial." },
      ],
    },

    {
      type: "points",
      kicker: "Manifestaciones periféricas",
      title: "Entesitis periférica, dactilitis y oligoartritis",
      cards: [
        { title: "Entesitis en extremidades inferiores", tag: "Tendón de Aquiles y fascia plantar", kind: "alert", items: [
          { t: "Talalgia inflamatoria matinal", d: "Dolor exquisito a la palpación de la inserción aquiliana",
            say: "La entesitis periférica más frecuente y característica se localiza en la inserción del tendón de Aquiles en el calcáneo o en la fascia plantar. Provoca talalgia intensa al apoyar el talón en el suelo al levantarse por las mañanas." },
          { t: "Tumefacción del tendón aquiliano", d: "Engrosamiento local con eritema y calor",
            say: "Al examen físico destaca tumefacción visible y dolor a la presión directa sobre el talón o la cresta ilíaca, constituyendo una de las pistas clínicas periféricas más valiosas para el diagnóstico precoz." },
        ] },
        { title: "Dactilitis y oligoartritis asimétrica", tag: "Compromiso de grandes articulaciones", kind: "criteria", items: [
          { t: "Dactilitis o dedo en salchicha", d: "Inflamación difusa de todo un dedo por tenosinovitis",
            say: "La dactilitis consiste en la tumefacción eritematosa uniforme de todo un dedo de la mano o del pie, semejando una salchicha, producto de la combinación de artritis y tenosinovitis de los tendones flexores." },
          { t: "Oligoartritis asimétrica de miembros inferiores", d: "Rodillas y tobillos con derrame importante",
            say: "Cuando existe artritis periférica en las espondiloartritis, suele ser oligoarticular, asimétrica y con predilección casi exclusiva por las grandes articulaciones de extremidades inferiores como rodillas y tobillos." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Enfrentamiento y derivación",
      title: "Algoritmo inicial: Imágenes y confirmación",
      nodes: [
        { id: "lumb", col: 0, row: 1, k: "start", t: "Lumbago inflamatorio sospechado", s: "Joven con dolor nocturno y rigidez" },
        { id: "rx", col: 1, row: 0, k: "good", t: "Radiografía de Pelvis (Sacroilíacas)", s: "Busca esclerosis, erosiones o anquilosis" },
        { id: "rm", col: 1, row: 2, k: "alert", t: "Resonancia Magnética STIR precoz", s: "Edema óseo subcondral en etapas iniciales" },
        { id: "der", col: 2, row: 1, k: "good", t: "Derivación a Reumatología con AINEs", s: "Iniciar Naproxeno o Indometacina continua" },
      ],
      edges: [
        { from: "lumb", to: "rx" },
        { from: "lumb", to: "rm" },
        { from: "rx", to: "der" },
        { from: "rm", to: "der" },
      ],
      steps: [
        { show: ["lumb", "rx"], note: "Radiografía convencional de pelvis",
          say: "El primer estudio de imagen que debe solicitarse en atención primaria es la radiografía de pelvis centrada en articulaciones sacroilíacas. Permite pesquisar erosiones óseas, esclerosis del borde articular o fusión completa en casos avanzados." },
        { show: ["rm", "der"], note: "Resonancia magnética y tratamiento",
          say: "En etapas precoces la radiografía puede ser totalmente normal. Ante sospecha fundada con radiografía negativa, la resonancia magnética con secuencias STIR detecta edema óseo subcondral activo. Se indican AINEs continuos y se deriva a especialista." },
      ],
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Diagnóstico diferencial: Lumbago Inflamatorio vs Lumbago Mecánico",
      head: ["Parámetro Clínico", "Lumbago Inflamatorio", "Lumbago Mecánico Común"],
      rows: [
        { cells: ["Edad de inicio habitual", "Menor de 45 años (típico 20 a 35 años)", "Cualquier edad (pico entre 30 y 60 años)"],
          say: "Edad: el lumbago inflamatorio inicia en menores de cuarenta y cinco años, habitualmente jóvenes, mientras que el mecánico afecta a cualquier edad tras sobreesfuerzo." },
        { cells: ["Efecto del reposo en cama", "EMPEORA con el reposo prolongado", "MEJORA o desaparece con el reposo"],
          say: "Reposo: el lumbago inflamatorio empeora con el reposo en cama, mientras que el lumbago mecánico alivia de forma notable al acostarse." },
        { cells: ["Efecto de la actividad física", "MEJORA claramente con el movimiento", "EMPEORA con el ejercicio y la carga"],
          say: "Movimiento: el inflamatorio mejora marcadamente con el ejercicio matinal, mientras que el mecánico empeora con la deambulación y la carga física." },
        { cells: ["Dolor nocturno y rigidez", "Despierta en madrugada · Rigidez > 30-60 min", "Raro despertar · Rigidez breve < 15 min"],
          say: "Dolor nocturno: el inflamatorio despierta en la segunda mitad de la noche con rigidez de más de media hora; el mecánico presenta rigidez breve y sin despertar nocturno." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Hombre de 26 años, administrativo, consulta por dolor lumbar bajo y en ambas nalgas de 5 meses de evolución. Refiere que el dolor es mucho más intenso en las mañanas al despertar, acompañado de rigidez de columna que dura más de 1 hora y que le dificulta calzarse los zapatos. El dolor lo despierta a las 4:00 AM, obligándolo a pasear por la habitación. Conforme camina y avanza el día, el dolor disminuye significativamente. Ha tomado Ibuprofeno 400 mg de forma ocasional con alivio casi inmediato de los síntomas. Al examen físico se constata limitación dolorosa de la flexión anterior de tronco y dolor a la palpación de articulaciones sacroilíacas.",
      question: "¿Cuál es el diagnóstico clínico más probable y cuál es la conducta inicial más adecuada?",
      options: [
        { letter: "A", text: "Lumbago inflamatorio por sospecha de espondiloartritis; indicar AINEs a dosis plenas, solicitar radiografía de pelvis para evaluar sacroilíacas y derivar a reumatología" },
        { letter: "B", text: "Lumbago mecánico común por discopatía; indicar reposo absoluto en cama por 14 días y relajantes musculares" },
        { letter: "C", text: "Artritis reumatoide seronegativa; iniciar metotrexato oral 15 mg semanales y solicitar factor reumatoide" },
        { letter: "D", text: "Espondilodiscitis infecciosa piógena; hospitalizar de inmediato para hemocultivos y resonancia con contraste urgente" },
        { letter: "E", text: "Fibromialgia primaria; derivar a salud mental y descartar dolor lumbar con radiografía simple" },
      ],
      correct: "A",
      explanation: "El paciente cumple todos los criterios de dolor lumbar inflamatorio: edad menor a 45 años (26 años), curso crónico > 3 meses (5 meses), rigidez matinal prolongada (> 1 hora), dolor nocturno que despierta en la madrugada obligándolo a caminar, mejoría franca con el ejercicio, dolor en nalgas (sacroilitis) y excelente respuesta a AINEs. La conducta indicada es mantener AINEs en dosis plenas continuas, solicitar radiografía de pelvis centrada en sacroilíacas y derivar a reumatología.",
      say: {
        stem: "Caso clínico. Hombre de veintiséis años con lumbago crónico de cinco meses, dolor nocturno que lo despierta a las cuatro de la mañana, rigidez matinal prolongada de más de una hora, mejoría al caminar y excelente alivio con ibuprofeno.",
        question: "¿Cuál es el diagnóstico clínico más probable y cuál es la conducta inicial más adecuada?",
        options: "Las alternativas: lumbago inflamatorio con AINEs, radiografía de sacroilíacas y derivación a reumatología, lumbago mecánico con reposo prolongado, artritis reumatoide con metotrexato, espondilodiscitis infecciosa, o fibromialgia. Piénsalo.",
        answer: "La respuesta correcta es la A. Es un lumbago inflamatorio típico. Se deben prescribir AINEs a dosis plenas continuas, solicitar radiografía de pelvis para estudiar articulaciones sacroilíacas y derivar a reumatología.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2017 · Pregunta 14",
      stem: "Hombre de 28 años consulta por lumbago bajo de 4 meses de evolución. ¿Cuál de las siguientes características semiológicas apoya fuertemente el origen INFLAMATORIO del dolor por sobre una etiología mecánica?",
      options: [
        { letter: "A", text: "El dolor aumenta con la deambulación y calma completamente al acostarse en la cama" },
        { letter: "B", text: "El dolor despierta al paciente en la madrugada y mejora al iniciar la actividad física matinal" },
        { letter: "C", text: "El dolor inició bruscamente tras levantar una caja pesada en el trabajo" },
        { letter: "D", text: "La rigidez matinal de la columna dura menos de 10 minutos" },
        { letter: "E", text: "El dolor empeora con la tos y la maniobra de Valsalva" },
      ],
      correct: "B",
      explanation: "El dolor lumbar inflamatorio característico de las espondiloartropatías se define por presentarse en pacientes jóvenes (< 45 años), tener un inicio insidioso crónico, empeorar con el reposo en cama, despertar al paciente en la segunda mitad de la noche y MEJORAR claramente con el ejercicio y el movimiento físico. El dolor que calma con el reposo y aumenta con la carga es típicamente mecánico.",
      say: {
        stem: "EUNACOM dos mil diecisiete, pregunta catorce. Varón de veintiocho años con dolor lumbar bajo de cuatro meses de evolución.",
        question: "¿Cuál de las siguientes características semiológicas apoya fuertemente el origen inflamatorio del dolor por sobre una etiología mecánica?",
        options: "Las opciones: aumenta con la marcha y calma al acostarse, despierta al paciente en la madrugada y mejora con la actividad matinal, inició al levantar peso, rigidez menor a diez minutos, o empeora con maniobra de Valsalva. Piénsalo.",
        answer: "Es la B. El dolor lumbar que despierta al paciente en la segunda mitad de la noche y mejora al caminar e iniciar las actividades cotidianas es el sello patognomónico del lumbago inflamatorio.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2020 · Pregunta 29",
      stem: "¿Cuál es el antígeno leucocitario humano (HLA) que presenta una asociación genética superior al 90% con la Espondilitis Anquilosante y que se encuentra frecuentemente ligado a las espondiloartritis seronegativas?",
      options: [
        { letter: "A", text: "HLA-DR4" },
        { letter: "B", text: "HLA-B27" },
        { letter: "C", text: "HLA-DR3" },
        { letter: "D", text: "HLA-DQ2" },
        { letter: "E", text: "HLA-B51" },
      ],
      correct: "B",
      explanation: "El alelo HLA-B27 (complejo mayor de histocompatibilidad clase I) presenta una asociación fuertísima con las espondiloartritis seronegativas, encontrándose positivo en más del 90% de los pacientes con Espondilitis Anquilosante y en el 50-80% de las artritis reactivas y espondiloartritis axiales. El HLA-DR4 se asocia a Artritis Reumatoide y el HLA-B51 a Enfermedad de Behçet.",
      say: {
        stem: "EUNACOM dos mil veinte, pregunta veintinueve. Se indaga la predisposición genética en reumatología.",
        question: "¿Cuál es el antígeno leucocitario humano que presenta una asociación genética superior al noventa por ciento con la espondilitis anquilosante?",
        options: "Las alternativas: HLA-DR cuatro, HLA-B veintisiete, HLA-DR tres, HLA-DQ dos, o HLA-B cincuenta y uno. Piénsalo.",
        answer: "La respuesta correcta es la B. El antígeno HLA-B veintisiete se asocia en más del noventa por ciento de los casos a la espondilitis anquilosante y en proporciones elevadas al resto de las espondiloartritis seronegativas.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2023 · Pregunta 07",
      stem: "Hombre de 24 años consulta por dolor en talón derecho al apoyar el pie en las mañanas y dolor lumbar bajo intermitente que mejora al correr. Al examen físico destaca dolor exquisito a la palpación de la inserción del tendón de Aquiles en el calcáneo derecho, sin signos de infección cutánea. ¿Cuál es el sustrato anatomopatológico primario de esta manifestación periférica típica de las espondiloartritis?",
      options: [
        { letter: "A", text: "Sinovitis proliferativa con formación de pannus erosivo articular" },
        { letter: "B", text: "Entesitis (inflamación de la inserción ósea del tendón)" },
        { letter: "C", text: "Tromboflebitis superficial de la vena safena menor" },
        { letter: "D", text: "Neuroma de Morton interdigital" },
        { letter: "E", text: "Osteocondritis disecante subastragalina" },
      ],
      correct: "B",
      explanation: "La entesitis es la inflamación de las entesis (sitios anatómicos de inserción de tendones, ligamentos, aponeurosis o cápsulas articulares en el hueso). Constituye la lesión elemental primaria y distintiva de las espondiloartritis. La talalgia por entesitis del tendón de Aquiles o de la fascia plantar en el calcáneo es una de las quejas periféricas más típicas en adultos jóvenes.",
      say: {
        stem: "EUNACOM dos mil veintitrés, pregunta siete. Joven de veinticuatro años con dolor en talón derecho al apoyar el pie matinal y dolor a la palpación de la inserción del tendón de Aquiles.",
        question: "¿Cuál es el sustrato anatomopatológico primario de esta manifestación periférica típica de las espondiloartritis?",
        options: "Las opciones: sinovitis proliferativa con pannus, entesitis, tromboflebitis superficial, neuroma de Morton, u osteocondritis disecante. Piénsalo.",
        answer: "Es la B. La entesitis o inflamación de la inserción ósea del tendón es la lesión patológica cardinal de las espondiloartritis, siendo la entesitis aquiliana un motivo de consulta muy característico.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Lumbago inflamatorio y dolor nocturno", tag: "Mejora con ejercicio, empeora con reposo", kind: "criteria", items: [
          { t: "La prueba semiológica del movimiento", d: "El ejercicio alivia el dolor; el reposo en cama lo agrava",
            say: "Revisemos las tres reglas de oro. Primero: el lumbago inflamatorio se presenta en jóvenes menores de cuarenta y cinco años, despierta en la madrugada y tiene la paradoja de mejorar con el ejercicio y empeorar con el reposo." },
          { t: "Dolor glúteo alternante en báscula", d: "Traduce inflamación activa de articulaciones sacroilíacas",
            say: "El dolor en nalgas alternante traduce sacroilitis bilateral y es una pista diagnóstica de máxima especificidad para orientar el estudio hacia espondiloartropatías axiales." },
        ] },
        { title: "Entesis, HLA-B27 y respuesta a AINEs", tag: "Alivio espectacular y seronegatividad", kind: "pharma", items: [
          { t: "Entesitis como lesión primaria elemental", d: "Talalgia aquiliana y seronegatividad absoluta",
            say: "Segundo: la entesitis es la lesión elemental distintiva, el factor reumatoide es negativo y el antígeno HLA-B veintisiete muestra una asociación superior al noventa por ciento en casos axiales." },
          { t: "Respuesta rápida a AINEs de primera línea", d: "Alivio dramático en cuarenta y ocho horas",
            say: "Tercero: la excelente respuesta a los AINEs es diagnóstica y terapéutica. Si te llevas una sola idea de hoy: dolor lumbar en joven que despierta en la madrugada y mejora al caminar es inflamatorio; solicita radiografía de pelvis, inicia AINEs y deriva a reumatología. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo de diferenciación: Lumbago Inflamatorio vs Mecánico",
    root: N("start", "Paciente con Dolor Lumbar", "Anamnesis cronológica detallada y examen de columna",
      "Paciente que consulta por dolor en columna lumbar baja y región glútea.",
      ["", N("q", "¿Edad menor de 45 años, inicio insidioso y duración mayor a 3 meses?", "Evaluación de perfil demográfico y cronología",
        "Se evalúa la edad y la duración de los síntomas.",
        ["SÍ: Joven con dolor crónico insidioso", N("do", "Evaluar criterios de Lumbago Inflamatorio (ASAS)", "Interrogar dolor nocturno, efecto del ejercicio y rigidez matinal",
          "Sospecha de dolor inflamatorio. Se interrogan las características del dolor ante el reposo y la actividad.",
          ["", N("q", "¿Mejora con el ejercicio, empeora con reposo y despierta en la madrugada?", "Parámetros cardinales de inflamación axial",
            "Se evalúa la respuesta al movimiento y el patrón nocturno.",
            ["SÍ: Cumple criterios inflamatorios", N("alert", "Lumbago Inflamatorio: Sospecha de Espondiloartritis", "Solicitar Radiografía de Pelvis (Sacroilíacas), VHS/PCR e iniciar AINEs a dosis plenas",
              "Diagnóstico de lumbago inflamatorio. Iniciar antiinflamatorios continuos, solicitar radiografía de sacroilíacas y derivar a Reumatología.",
              ["", N("q", "¿Radiografía muestra Sacroilitis bilateral o entesitis aquiliana?", "Confirmación radiológica convencional",
                "Se revisa la presencia de esclerosis o erosiones en articulaciones sacroilíacas.",
                ["SÍ: Sacroilitis radiológica evidente", N("ok", "Espondiloartritis confirmada: Manejo con AINEs y Reumatología", "Mantener AINEs continuos y kinesioterapia de columna activa",
                  "Sacroilitis confirmada. Continuar AINEs en dosis plenas y seguimiento conjunto con reumatólogo.")],
                ["NO: Radiografía normal (etapa precoz)", N("refer", "Solicitar Resonancia Magnética de Sacroilíacas (STIR)", "Derivar para pesquisar edema óseo subcondral en espondiloartritis no radiográfica",
                  "Radiografía normal en fase temprana. Solicitar resonancia magnética para pesquisar sacroilitis activa precoz.")])])],
            ["NO: Empeora con ejercicio y calma en reposo", N("ok", "Lumbago Mecánico Común", "Paracetamol, AINEs en cursos cortos y reactivación precoz",
              "Cuadro mecánico. Indicar analgesia por pocos días, calor local y evitar reposo prolongado en cama.")])])],
        ["NO: Inicio agudo tras esfuerzo físico en cualquier edad", N("ok", "Lumbago Mecánico por sobrecarga o discopatía", "Tratamiento conservador ambulatorio y kinesioterapia",
          "Lumbago mecánico postural o por esfuerzo. Manejo conservador con analgesia SOS y deambulación precoz.")])]),
  },
};
