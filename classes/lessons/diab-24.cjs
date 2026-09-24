// Clase 5.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-24).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-24',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo el objetivo deja de ser el LDL, y cómo reconocer una hipercolesterolemia que viene de familia',
      say: 'Bienvenidos. En la clase anterior aprendimos que el objetivo casi siempre es el colesterol LDL y que la estatina es la reina. Hoy vemos las dos situaciones en que esa regla cambia: la hipertrigliceridemia severa, donde el enemigo inmediato es la pancreatitis y no el infarto, y la hipercolesterolemia familiar, que se reconoce por un LDL altísimo y unos nódulos en el tendón de Aquiles.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Cómo los triglicéridos inflaman el páncreas',
      nodes: [
        { id: 'tg', col: 0, row: 1, k: 'cause', t: 'Triglicéridos sobre 500–1.000', s: 'Suero lechoso, lactescente' },
        { id: 'ocl', col: 1, row: 1, k: 'mech', t: 'Quilomicrones y VLDL', s: 'Ocluyen capilares pancreáticos' },
        { id: 'lip', col: 2, row: 1, k: 'mech', t: 'La lipasa hidroliza los TG', s: 'Ácidos grasos libres masivos' },
        { id: 'dan', col: 3, row: 1, k: 'effect', t: 'Daño capilar e isquemia', s: 'Toxicidad directa' },
        { id: 'pan', col: 4, row: 1, k: 'alert', t: 'Pancreatitis aguda', s: 'Más necrosis que la biliar o alcohólica' },
      ],
      edges: [
        { from: 'tg', to: 'ocl' }, { from: 'ocl', to: 'lip' }, { from: 'lip', to: 'dan', label: 'citotóxicos' }, { from: 'dan', to: 'pan' },
      ],
      steps: [
        { show: ['tg'], note: 'Lo normal en ayunas es menos de 150',
          say: 'Partamos por el mecanismo. Los triglicéridos normales en ayunas están bajo ciento cincuenta. Cuando superan quinientos, y sobre todo mil, el suero se ve blanco y lechoso: lactescente.' },
        { show: ['ocl'], note: 'Partículas tan grandes que tapan capilares',
          say: 'A esos niveles, las partículas que transportan triglicéridos, los quilomicrones y las VLDL, son tantas que ocluyen la microcirculación de los capilares del páncreas.' },
        { show: ['lip'], note: 'La lipasa libera ácidos grasos',
          say: 'La lipasa pancreática que sale de las células hidroliza esos triglicéridos y libera ácidos grasos libres en concentraciones masivas, que son tóxicos.' },
        { show: ['dan', 'pan'], note: 'Una pancreatitis más agresiva',
          say: 'Esos ácidos grasos dañan el capilar, producen isquemia, y desencadenan una pancreatitis aguda. Y ojo: la pancreatitis por hipertrigliceridemia suele ser más agresiva y con más necrosis que la biliar o la alcohólica. Por eso, a estos niveles, la prioridad cambia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación',
      title: 'El nivel de triglicéridos decide la prioridad',
      cards: [
        { title: 'Bajo 500', tag: 'La prioridad es el LDL', kind: 'normal', items: [
          { t: '150–199: límite alto', d: 'Estilo de vida, menos azúcares simples',
            say: 'El nivel de triglicéridos te dice qué tratar primero. Entre ciento cincuenta y ciento noventa y nueve es límite alto: estilo de vida y una dieta baja en azúcares simples.' },
          { t: '200–499: moderadamente alto', d: 'Estatina si el riesgo CV es alto',
            say: 'Entre doscientos y cuatrocientos noventa y nueve, el riesgo es la ateroesclerosis acelerada, y se usan estatinas si el riesgo cardiovascular es alto, además del estilo de vida. Mientras estén bajo quinientos, el objetivo sigue siendo el LDL, como en la clase anterior.' },
        ] },
        { title: 'Sobre 500', tag: 'La prioridad es el páncreas', kind: 'alert', items: [
          { t: '500–999: severo', d: 'Riesgo inminente de pancreatitis: fibrato',
            say: 'Pero sobre quinientos, la hipertrigliceridemia es severa, con riesgo inminente de pancreatitis aguda, y se inicia un fibrato de urgencia.' },
          { t: '1.000 o más: crítico', d: 'Fibrato inmediato, cero alcohol, dieta casi sin grasa',
            say: 'Y sobre mil es crítica, con quilomicronemia y alto riesgo de pancreatitis: fibrato inmediato, cero alcohol y una dieta prácticamente sin grasas. Ese corte de quinientos es el que separa las respuestas en el examen.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento urgente',
      title: 'Hipertrigliceridemia severa: fibrato, cero alcohol y dieta',
      cards: [
        { title: 'Fármaco', tag: 'Primera línea', kind: 'pharma', items: [
          { t: 'Fenofibrato 160–200 mg/día', d: 'O gemfibrozilo 600 mg cada 12 h',
            say: 'Ahora la regla prioritaria: con triglicéridos sobre quinientos a mil, la meta no es el LDL ni el riesgo cardiovascular, es evitar la pancreatitis. El fármaco de primera línea es un fibrato: fenofibrato, ciento sesenta a doscientos miligramos al día, o gemfibrozilo, seiscientos miligramos cada doce horas.' },
        ] },
        { title: 'Medidas', tag: 'Tan importantes como el fármaco', kind: 'key', items: [
          { t: 'Prohibición absoluta del alcohol', d: 'Aumenta la síntesis hepática de TG',
            say: 'Junto al fibrato van dos medidas que no se negocian. La primera, la prohibición absoluta del alcohol, que junto con los azúcares simples es lo que más aumenta la síntesis de triglicéridos en el hígado.' },
          { t: 'Grasas bajo 15–20 % de las calorías', d: 'Sin azúcares simples ni fructosa',
            say: 'La segunda, una dieta estricta: grasas bajo el quince a veinte por ciento de las calorías, y cero azúcares simples y fructosa.' },
        ] },
        { title: 'Si hay que sumar una estatina', tag: 'Advertencia', kind: 'alert', items: [
          { t: 'Fenofibrato sí', d: 'Es el fibrato que se asocia',
            say: 'Y una advertencia de seguridad que se pregunta mucho. Si el paciente necesita un fibrato y una estatina a la vez, se usa fenofibrato.' },
          { t: 'Gemfibrozilo nunca con estatina', d: 'Rabdomiólisis: riesgo 15 a 20 veces mayor',
            say: 'Nunca gemfibrozilo. El gemfibrozilo inhibe la glucuronidación hepática de las estatinas, y multiplica por quince a veinte el riesgo de rabdomiólisis grave, la misma que vimos en la clase anterior.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hipercolesterolemia familiar',
      title: 'Un LDL altísimo desde el nacimiento',
      cards: [
        { title: 'Genética', tag: 'Autosómica dominante', kind: 'criteria', items: [
          { t: '1 de cada 250 a 300 personas', d: 'Heterocigota, monogénica',
            say: 'Pasemos a la segunda situación: la hipercolesterolemia familiar heterocigota. Es una enfermedad monogénica, autosómica dominante, y no es rara: una de cada doscientas cincuenta a trescientas personas.' },
          { t: 'Receptor de LDL en más del 85 %', d: 'También APOB o ganancia de función de PCSK9',
            say: 'En más del ochenta y cinco por ciento se debe a una mutación con pérdida de función del receptor de LDL. Si el receptor no funciona, el LDL no se retira de la sangre. Con menos frecuencia, la mutación está en la APOB, o es una ganancia de función de PCSK nueve.' },
        ] },
        { title: 'Laboratorio', tag: 'El dato que la sugiere', kind: 'key', items: [
          { t: 'LDL entre 190 y 350 mg/dL', d: 'Con triglicéridos normales',
            say: 'El laboratorio la delata: un LDL elevado desde el nacimiento, habitualmente entre ciento noventa y trescientos cincuenta, con triglicéridos normales. Fíjate en el contraste con la primera parte de la clase: aquí el problema es solo el LDL.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hipercolesterolemia familiar',
      title: 'Los estigmas que la delatan y su tratamiento',
      cards: [
        { title: 'Examen físico', tag: 'Estigmas', kind: 'alert', items: [
          { t: 'Xantomas tendinosos', d: 'Aquiles y extensores de la mano: patognomónicos',
            say: 'Al examen físico hay un signo patognomónico: los xantomas tendinosos, engrosamientos nodulares e indoloros en los tendones de Aquiles y en los extensores de las manos. Si un enunciado te habla de nódulos en el Aquiles, piensa en esto.' },
          { t: 'Arco corneal antes de los 45', d: 'Y xantelasmas en los párpados',
            say: 'Además, el arco corneal prematuro, un anillo grisáceo en la periferia de la córnea antes de los cuarenta y cinco años, y los xantelasmas, placas amarillentas en los párpados.' },
        ] },
        { title: 'Historia familiar', tag: 'Coronaria precoz', kind: 'criteria', items: [
          { t: 'Familiar de 1.er grado con IAM precoz', d: 'Hombre menor de 55, mujer menor de 65',
            say: 'Y la historia familiar: un familiar de primer grado con infarto o muerte súbita precoz, en un hombre menor de cincuenta y cinco o una mujer menor de sesenta y cinco.' },
        ] },
        { title: 'Tratamiento', tag: 'Intensivo y de por vida', kind: 'pharma', items: [
          { t: 'Estatina de alta potencia a dosis máxima', d: '+ ezetimiba + inhibidor de PCSK9',
            say: 'El tratamiento es intensivo y de por vida: estatina de alta potencia a dosis máxima, más ezetimiba, y si hace falta, un inhibidor de PCSK nueve como el evolocumab.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos las dos situaciones en un árbol que parte por el perfil lipídico.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['TG sobre 500–1.000, asintomático', 'Fibrato + cero alcohol + dieta', 'Estatina de alta intensidad para el infarto'],
          say: 'Repasemos las trampas. Triglicéridos sobre quinientos, aunque el paciente esté asintomático: fibrato, cero alcohol y dieta. Elegir una estatina para prevenir el infarto es el error, porque el riesgo inmediato es la pancreatitis.' },
        { cells: ['TG bajo 500 con LDL alto', 'Estatina', 'Fibrato'],
          say: 'Al revés, con triglicéridos bajo quinientos y LDL alto, la prioridad vuelve a ser el LDL: estatina, no fibrato.' },
        { cells: ['TG severos en usuario de estatina', 'Cambiar a gemfibrozilo, o usar fenofibrato si hay que combinar', 'Agregar gemfibrozilo a la estatina'],
          say: 'Si ya toma una estatina y los triglicéridos se disparan, nunca se le agrega gemfibrozilo. Si hay que combinar, se usa fenofibrato.' },
        { cells: ['LDL sobre 190, xantomas de Aquiles, padre con IAM joven', 'Hipercolesterolemia familiar', 'Hiperlipidemia combinada o disbetalipoproteinemia'],
          say: 'LDL sobre ciento noventa, xantomas en el Aquiles y un padre con infarto joven: hipercolesterolemia familiar, con triglicéridos normales.' },
        { cells: ['Hipercolesterolemia familiar', 'Estatina máxima + ezetimiba ± iPCSK9', 'Dieta sola o estatina a dosis baja'],
          say: 'Y su tratamiento es estatina a dosis máxima, ezetimiba y, si hace falta, un inhibidor de PCSK nueve. La dieta sola no alcanza para un problema genético.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 34 años consulta por nódulos indoloros y firmes en la cara posterior de ambos tobillos, sobre los tendones de Aquiles. Su padre falleció de un IAM a los 41 años. Perfil lipídico: colesterol total 340 mg/dL, HDL 48 mg/dL, triglicéridos 130 mg/dL, LDL 266 mg/dL.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hipercolesterolemia familiar heterocigota' },
        { letter: 'B', text: 'Hipertrigliceridemia familiar aislada' },
        { letter: 'C', text: 'Disbetalipoproteinemia familiar tipo III' },
        { letter: 'D', text: 'Hiperlipidemia familiar combinada' },
        { letter: 'E', text: 'Xantomatosis cerebrotendinosa recesiva' },
      ],
      correct: 'A',
      explanation: 'LDL muy elevado (más de 190 mg/dL) con triglicéridos normales, xantomas tendinosos en el Aquiles (patognomónicos) y un familiar de primer grado con enfermedad coronaria precoz: hipercolesterolemia familiar heterocigota, autosómica dominante, por mutación del receptor de LDL.',
      say: {
        stem: 'Vamos con un caso. Hombre de treinta y cuatro años que consulta por nódulos indoloros y firmes sobre ambos tendones de Aquiles. Su padre murió de un infarto a los cuarenta y un años. El LDL es doscientos sesenta y seis, y los triglicéridos, ciento treinta.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: hipercolesterolemia familiar heterocigota, hipertrigliceridemia familiar, disbetalipoproteinemia tipo tres, hiperlipidemia familiar combinada, o xantomatosis cerebrotendinosa. Piénsalo.',
        answer: 'La respuesta es la A. Están los tres pilares: LDL muy sobre ciento noventa con triglicéridos normales, xantomas en el Aquiles, que son patognomónicos, y un padre con infarto antes de los cincuenta y cinco. La hiperlipidemia combinada es el distractor tentador porque también es familiar, pero ahí suben los triglicéridos, y aquí están normales.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 41',
      stem: 'Un paciente dislipidémico, está en tratamiento con atorvastatina 10 mg/día y se realiza un perfil lipídico de control con colesterol total: 183 mg/dl, colesterol HDL: 32 triglicéridos: 860 mg/dl.',
      question: '¿Cuál es la dosis más adecuada?',
      options: [
        { letter: 'A', text: 'Subir la dosis de la atorvastatina a 40 mg/día' },
        { letter: 'B', text: 'Cambiar la atorvastatina por rosivastatina' },
        { letter: 'C', text: 'Agregar gemfobrozilo 900 mg/día' },
        { letter: 'D', text: 'Agregar ezetimibe al tratamiento' },
        { letter: 'E', text: 'Reemplazar la atorvastatina por gemfibrozilo 900 mg/día' },
      ],
      correct: 'E',
      explanation: 'Con triglicéridos sobre 500 mg/dL la prioridad es prevenir la pancreatitis con un fibrato. El gemfibrozilo no se combina con estatinas por el riesgo de rabdomiólisis, por eso se reemplaza la estatina en vez de agregarlo.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de diciembre de dos mil diecisiete. Un paciente dislipidémico, en tratamiento con atorvastatina diez, trae un control con triglicéridos de ochocientos sesenta.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: subir la atorvastatina a cuarenta, cambiarla por rosuvastatina, agregar gemfibrozilo, agregar ezetimiba, o reemplazar la atorvastatina por gemfibrozilo. Piénsalo.',
        answer: 'Es la E. Con triglicéridos sobre quinientos, la prioridad es el páncreas, así que el fármaco es un fibrato. Y aquí está la trampa: la C, agregar gemfibrozilo a la estatina, parece más completa, pero esa combinación dispara el riesgo de rabdomiólisis. Por eso se reemplaza. Si hubiera que combinar, sería con fenofibrato.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 152',
      stem: 'Diabético con HbA1c en buen rango, LDL 135 mg/dL y TG 330 mg/dL.',
      question: '¿Cuál es el tratamiento inicial más adecuado?',
      options: [
        { letter: 'A', text: 'Fenofibrato' },
        { letter: 'B', text: 'Gemfibrozilo' },
        { letter: 'C', text: 'Atorvastatina' },
        { letter: 'D', text: 'Omega-3 en dosis farmacológica' },
        { letter: 'E', text: 'Ezetimibe' },
      ],
      correct: 'C',
      explanation: 'Triglicéridos bajo 500 mg/dL: la prioridad es el LDL. En un diabético con LDL de 135 (meta bajo 100 o menos), el tratamiento inicial es una estatina.',
      say: {
        stem: 'La pregunta espejo, del EUNACOM de enero de dos mil veintitrés. Diabético bien controlado, con LDL de ciento treinta y cinco y triglicéridos de trescientos treinta.',
        question: '¿Cuál es el tratamiento inicial más adecuado?',
        options: 'Las opciones son: fenofibrato, gemfibrozilo, atorvastatina, omega tres, o ezetimiba. Piénsalo.',
        answer: 'Es la C, atorvastatina. Los triglicéridos están elevados, pero bajo quinientos, así que no hay riesgo inminente de pancreatitis y la prioridad vuelve a ser el LDL. Los dos fibratos son el distractor. Compárala con la anterior: el corte de quinientos cambia la respuesta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 134',
      stem: 'Un paciente de 35 años, en tratamiento con atorvastatina, por hipercolesterolemia y cuyo padre tuvo un infarto a los 40 años, presentó mialgias y artralgias, por lo que decidió suspender el medicamento, sin indicación médica. Se controla con exámenes, entre los que destaca colesterol total: 354 mg/dl, colesterol LDL: 244 mg/dl, colesterol HDL: 70 mg/dl, triglicéridos: 198 mg/dl, creatinfosfoquinasa: 254 UI/L.',
      question: 'El tratamiento más adecuado es:',
      options: [
        { letter: 'A', text: 'Colestiramina' },
        { letter: 'B', text: 'Dieta estricta' },
        { letter: 'C', text: 'Rosuvastatina' },
        { letter: 'D', text: 'Ezetimibe' },
        { letter: 'E', text: 'Fenofibrato' },
      ],
      correct: 'C',
      explanation: 'LDL de 244 con padre infartado a los 40 años: perfil de hipercolesterolemia familiar, que necesita estatina. Con mialgias y CK prácticamente normal, se cambia a otra estatina como rosuvastatina en vez de abandonar el tratamiento. Los demás fármacos no bastan para un LDL tan alto.',
      say: {
        stem: 'Y la última, del EUNACOM de diciembre de dos mil diecinueve. Paciente de treinta y cinco años con hipercolesterolemia, cuyo padre tuvo un infarto a los cuarenta. Tomaba atorvastatina, pero la suspendió por su cuenta por mialgias. Ahora su LDL es doscientos cuarenta y cuatro, los triglicéridos ciento noventa y ocho, y la CK doscientos cincuenta y cuatro.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones son: colestiramina, dieta estricta, rosuvastatina, ezetimiba, o fenofibrato. Piénsalo.',
        answer: 'Es la C, rosuvastatina. Junta las piezas: joven, LDL sobre doscientos, padre infartado a los cuarenta. Es el perfil de una hipercolesterolemia familiar, y necesita estatina sí o sí. La CK está prácticamente normal, así que fue una mialgia simple: se cambia a rosuvastatina en vez de abandonar. La ezetimiba sola o la dieta no alcanzan para un LDL de origen genético.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Triglicéridos', tag: 'El corte de 500', kind: 'alert', items: [
          { t: 'TG sobre 500–1.000', d: 'Prioridad: evitar la pancreatitis',
            say: 'Cerremos con las reglas de oro. Con triglicéridos sobre quinientos a mil, la prioridad es evitar la pancreatitis, no el infarto.' },
          { t: 'Fibrato + cero alcohol + dieta', d: 'TG bajo 500: la prioridad es el LDL',
            say: 'Se trata con fibrato, cero alcohol y dieta estricta. Bajo quinientos, el objetivo vuelve a ser el LDL.' },
          { t: 'Gemfibrozilo nunca con estatina', d: 'Si hay que combinar: fenofibrato',
            say: 'Y el gemfibrozilo nunca se combina con una estatina; si hay que combinar, fenofibrato.' },
        ] },
        { title: 'Hipercolesterolemia familiar', tag: 'Tres pilares', kind: 'key', items: [
          { t: 'LDL sobre 190 con TG normales', d: 'Xantomas de Aquiles + IAM familiar precoz',
            say: 'La hipercolesterolemia familiar se reconoce por un LDL sobre ciento noventa con triglicéridos normales, xantomas en el Aquiles e infartos precoces en la familia.' },
          { t: 'Estatina máxima + ezetimiba', d: '± inhibidor de PCSK9, de por vida',
            say: 'Si te llevas una sola idea de hoy: primero mira los triglicéridos, porque sobre quinientos mandan el fibrato y el páncreas; y si el LDL es altísimo con xantomas en el Aquiles, piensa en una enfermedad genética que se trata al máximo y de por vida. Con esto cerramos el bloque de complicaciones crónicas y dislipidemias. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Dislipidemia severa: qué tratar primero',
    root: N('start', 'Perfil lipídico alterado', 'Mira primero los triglicéridos',
      'Frente a un perfil lipídico muy alterado, la primera mirada va a los triglicéridos, porque ellos deciden la prioridad.',
      ['', N('q', '¿Triglicéridos sobre 500?', 'El corte que cambia la prioridad',
        '¿Los triglicéridos superan quinientos?',
        ['SÍ', N('alert', 'Riesgo de pancreatitis', 'Fibrato + cero alcohol + dieta',
          'Si superan quinientos, y sobre todo mil, el riesgo es la pancreatitis: fibrato inmediato, prohibición del alcohol y dieta estricta sin azúcares simples.',
          ['Usa estatina', N('do', 'Fenofibrato, nunca gemfibrozilo', 'O reemplazar la estatina',
            'Si además usa una estatina, el gemfibrozilo no se combina: se reemplaza la estatina, o se usa fenofibrato.')])],
        ['NO', N('q', '¿LDL sobre 190 con estigmas?', 'Xantomas, arco corneal, IAM familiar precoz',
          'Si están bajo quinientos, el objetivo es el LDL. ¿Es un LDL sobre ciento noventa con xantomas tendinosos, arco corneal precoz o infartos jóvenes en la familia?',
          ['SÍ', N('refer', 'Hipercolesterolemia familiar', 'Estatina máxima + ezetimiba ± iPCSK9',
            'Si es así, es una hipercolesterolemia familiar: estatina de alta potencia a dosis máxima, ezetimiba y, si hace falta, un inhibidor de PCSK nueve, de por vida.')],
          ['NO', N('ok', 'Manejo según riesgo CV', 'Estatina según la meta de LDL',
            'Si no, se maneja como en la clase anterior: estatina según el riesgo cardiovascular y su meta de LDL.')])])]),
  },
};
