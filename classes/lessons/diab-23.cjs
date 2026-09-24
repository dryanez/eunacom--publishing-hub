// Clase 5.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-23).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-23',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'El riesgo decide la meta, la meta decide la estatina y la CK decide qué hacer con el dolor muscular',
      say: 'Bienvenidos. Cerramos las complicaciones crónicas y entramos a las dislipidemias, un tema muy preguntado. La idea central de hoy es que no se trata un número de colesterol aislado: se trata el riesgo cardiovascular del paciente. Si sabes en qué categoría de riesgo está, sabes su meta de colesterol LDL, y con eso sabes qué estatina darle. Y al final vemos qué hacer cuando al paciente le duelen los músculos.',
    },

    {
      type: 'flow',
      kicker: 'La lógica del tema',
      title: 'Primero el riesgo, después el colesterol',
      nodes: [
        { id: 'pac', col: 0, row: 1, k: 'start', t: 'Paciente con perfil lipídico', s: 'Un LDL elevado' },
        { id: 'rcv', col: 1, row: 1, k: 'q', t: 'Riesgo cardiovascular global', s: 'A 10 años' },
        { id: 'met', col: 2, row: 1, k: 'mech', t: 'Meta de c-LDL', s: 'Más estricta a mayor riesgo' },
        { id: 'est', col: 3, row: 1, k: 'good', t: 'Estatina', s: 'Intensidad según la meta' },
        { id: 'eze', col: 4, row: 1, k: 'refer', t: '+ Ezetimiba 10 mg', s: 'Si no se alcanza la meta' },
        { id: 'trp', col: 1, row: 3, k: 'trap', t: 'Mirar solo el colesterol total', s: 'Un número sin contexto' },
      ],
      edges: [
        { from: 'pac', to: 'rcv' }, { from: 'rcv', to: 'met' }, { from: 'met', to: 'est' },
        { from: 'est', to: 'eze', label: 'dosis máxima tolerada' }, { from: 'pac', to: 'trp', label: 'error' },
      ],
      steps: [
        { show: ['pac', 'rcv'], note: 'El número solo no decide',
          say: 'Partamos por la lógica, porque es la que usa el examen. En Chile, el enfoque no es tratar un valor de colesterol, sino el riesgo cardiovascular global del paciente a diez años. El mismo LDL puede ser aceptable en un joven sano y peligroso en alguien que ya tuvo un infarto.' },
        { show: ['met'], note: 'Más riesgo, meta más baja',
          say: 'Ese riesgo define la meta de colesterol LDL. Mientras más alto el riesgo, más baja la meta.' },
        { show: ['est'], note: 'La meta define la intensidad',
          say: 'Y la meta define qué tan intensa debe ser la estatina. Las estatinas inhiben la enzima HMG-CoA reductasa, y son los fármacos de primera línea indiscutidos para reducir la morbimortalidad cardiovascular.' },
        { show: ['eze'], note: 'Si no basta la estatina',
          say: 'Si con la dosis máxima tolerada de estatina no se llega a la meta, se agrega ezetimiba, diez miligramos al día.' },
        { show: ['trp'], note: 'La trampa clásica',
          say: 'Y la trampa clásica del examen: mantener el tratamiento porque el colesterol total está bajo doscientos. El colesterol total no es la meta; la meta es el LDL según el riesgo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Estratificación',
      title: 'Riesgo muy alto: el paciente que ya tuvo el evento',
      cards: [
        { title: 'Enfermedad ateroesclerótica documentada', tag: 'Prevención secundaria', kind: 'alert', items: [
          { t: 'Coronaria', d: 'IAM previo, angina inestable, revascularización',
            say: 'Veamos las categorías. La de riesgo muy alto es la que más se pregunta, y la mayoría son pacientes que ya tuvieron un evento: infarto previo, angina inestable o una revascularización coronaria.' },
          { t: 'Cerebral y periférica', d: 'ACV isquémico, AIT, enfermedad arterial periférica',
            say: 'También el ataque cerebrovascular isquémico, el ataque isquémico transitorio y la enfermedad arterial periférica. Es la misma ateroesclerosis en otro territorio.' },
        ] },
        { title: 'Sin evento, pero con daño', tag: 'También muy alto', kind: 'criteria', items: [
          { t: 'Diabético con daño de órgano blanco', d: 'Microalbuminuria o retinopatía',
            say: 'Y sin haber tenido un evento, también son de riesgo muy alto el diabético con daño de órgano blanco, es decir, con microalbuminuria o retinopatía, lo que vimos en las dos clases anteriores.' },
          { t: 'ERC avanzada', d: 'VFG menor de 45 ml/min',
            say: 'Y la enfermedad renal crónica avanzada, con filtración glomerular bajo cuarenta y cinco.' },
        ] },
        { title: 'Meta', tag: 'La más estricta', kind: 'key', items: [
          { t: 'c-LDL menor de 55 mg/dL', d: 'O menor de 70 según guía MINSAL',
            say: 'La meta es un LDL bajo cincuenta y cinco miligramos por decilitro, o bajo setenta según la guía del MINSAL.' },
          { t: 'Y reducir al menos 50 %', d: 'Respecto del valor basal',
            say: 'Y, además, reducir al menos la mitad del valor basal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estratificación',
      title: 'Riesgo alto, moderado y bajo',
      cards: [
        { title: 'Riesgo alto', tag: 'Meta menor de 70', kind: 'alert', items: [
          { t: 'DM de más de 10 años sin daño', d: 'HTA severa 160/100 o más, ERC 3a, Framingham 10 a 19 %',
            say: 'Riesgo alto: el diabético de larga data, más de diez años, pero sin daño de órgano blanco; la hipertensión severa, de ciento sesenta con cien o más; la enfermedad renal etapa tres a; o un Framingham de diez a diecinueve por ciento.' },
          { t: 'c-LDL menor de 70 mg/dL', d: 'O menor de 100',
            say: 'Su meta es un LDL bajo setenta, o bajo cien según la guía que se use.' },
        ] },
        { title: 'Riesgo moderado', tag: 'Meta menor de 100', kind: 'normal', items: [
          { t: 'DM de menos de 10 años', d: 'Sin otros factores mayores; Framingham 5 a 9 %',
            say: 'Riesgo moderado: el diabético de corta evolución, menos de diez años, sin otros factores mayores, o un Framingham de cinco a nueve por ciento. Meta, LDL bajo cien.' },
        ] },
        { title: 'Riesgo bajo', tag: 'Estilo de vida', kind: 'normal', items: [
          { t: 'Framingham menor de 5 %', d: 'Meta menor de 116 o de 130 mg/dL',
            say: 'Y el riesgo bajo, con Framingham bajo cinco por ciento, tiene una meta más holgada, bajo ciento dieciséis o ciento treinta, y se maneja con cambios de estilo de vida: dieta mediterránea y ejercicio. Fíjate que el diabético nunca cae en riesgo bajo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estatinas',
      title: 'Alta vs moderada intensidad',
      cards: [
        { title: 'Alta intensidad', tag: 'Baja el LDL 50 % o más', kind: 'pharma', items: [
          { t: 'Atorvastatina 40 a 80 mg', d: 'O rosuvastatina 20 a 40 mg',
            say: 'Ahora las estatinas, y este dato se memoriza tal cual. Alta intensidad son solo dos: atorvastatina cuarenta a ochenta miligramos, y rosuvastatina veinte a cuarenta. Bajan el LDL en la mitad o más.' },
          { t: 'Todo riesgo muy alto', d: 'Y después de un síndrome coronario agudo',
            say: 'Se indican en todo paciente de riesgo muy alto y en la prevención secundaria después de un síndrome coronario agudo.' },
        ] },
        { title: 'Moderada intensidad', tag: 'Baja el LDL 30 a 49 %', kind: 'normal', items: [
          { t: 'Atorvastatina 10 a 20 mg', d: 'Rosuvastatina 5 a 10 mg, simvastatina 20 a 40 mg',
            say: 'Moderada intensidad: atorvastatina diez a veinte, rosuvastatina cinco a diez, o simvastatina veinte a cuarenta. Bajan el LDL entre un treinta y un cuarenta y nueve por ciento. Fíjate que la misma atorvastatina es moderada o alta según la dosis: el infartado con diez miligramos está subtratado.' },
        ] },
        { title: 'Si no se llega a la meta', tag: 'Asociación', kind: 'key', items: [
          { t: 'Ezetimiba 10 mg/día', d: 'Baja un 15 a 20 % adicional',
            say: 'Y si con la dosis máxima tolerada no se llega, se asocia ezetimiba, que inhibe la absorción intestinal de colesterol y baja otro quince a veinte por ciento.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Efectos adversos',
      title: 'Dolor muscular con estatinas: lo decide la CK',
      nodes: [
        { id: 'dol', col: 0, row: 1, k: 'start', t: 'Mialgias proximales bilaterales', s: 'Debilidad o calambres' },
        { id: 'ck', col: 1, row: 1, k: 'q', t: 'Medir creatina kinasa', s: 'No suspender a ciegas' },
        { id: 'sim', col: 2, row: 0, k: 'good', t: 'CK normal: mialgia simple', s: '5 a 10 % de los pacientes' },
        { id: 'mio', col: 2, row: 2, k: 'risk', t: 'CK 3 a 10 veces: miositis', s: 'Suspender la estatina' },
        { id: 'rab', col: 3, row: 3, k: 'alert', t: 'CK más de 10 veces: rabdomiólisis', s: 'Mioglobinuria y falla renal' },
        { id: 'cam', col: 3, row: 0, k: 'refer', t: 'Pausa y reintroducir', s: 'Dosis menor, o rosuvastatina o pravastatina' },
      ],
      edges: [
        { from: 'dol', to: 'ck' }, { from: 'ck', to: 'sim', label: 'normal' }, { from: 'sim', to: 'cam' },
        { from: 'ck', to: 'mio', label: 'elevada' }, { from: 'mio', to: 'rab', label: 'masiva' },
      ],
      steps: [
        { show: ['dol'], note: 'El efecto adverso más común',
          say: 'Vamos a los efectos adversos. El más común son los síntomas musculares asociados a estatinas: mialgias proximales y bilaterales, debilidad, o calambres en las piernas.' },
        { show: ['ck'], note: 'El primer paso es un examen',
          say: 'Y la conducta que se pregunta es una sola: medir la creatina kinasa, la CK. No se suspende la estatina de forma precipitada sin confirmar, ni se ignora el síntoma.' },
        { show: ['sim', 'cam'], note: 'CK normal',
          say: 'Si la CK es normal, es una mialgia simple, que ocurre en el cinco a diez por ciento de los pacientes. Se suspende temporalmente la estatina, se reevalúan los síntomas, y se reinicia con una dosis menor, o se cambia a una estatina más hidrofílica, como rosuvastatina o pravastatina.' },
        { show: ['mio'], note: 'CK elevada de forma moderada',
          say: 'Si hay dolor con la CK elevada entre tres y diez veces el límite normal, es una miositis, y exige suspender el fármaco.' },
        { show: ['rab'], note: 'Infrecuente, pero potencialmente fatal',
          say: 'Y el extremo, infrecuente pero potencialmente fatal: la rabdomiólisis. La CK supera diez veces lo normal, a menudo más de diez mil, con dolor muscular intenso, orinas oscuras color coñac por la mioglobinuria, e insuficiencia renal aguda.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol: del perfil lipídico a la estatina correcta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['IAM previo, LDL 118 con atorvastatina 10 mg', 'Subir a atorvastatina 40–80 mg', 'Mantener porque el colesterol total es menor de 200'],
          say: 'Repasemos las trampas. Infartado con LDL de ciento dieciocho, tomando atorvastatina diez: hay que subir a alta intensidad, cuarenta a ochenta. Mantener la dosis porque el colesterol total está normal es el error.' },
        { cells: ['Prevención secundaria', 'Estatina de alta intensidad', 'Rosuvastatina 10 o simvastatina: moderadas'],
          say: 'En prevención secundaria la estatina es de alta intensidad. Rosuvastatina diez o simvastatina son de intensidad moderada, y suelen estar como distractor.' },
        { cells: ['Ateroesclerosis documentada con LDL cercano a 90', 'Iniciar estatina', 'No tratar porque el LDL está bajo 100'],
          say: 'Un paciente con ateroesclerosis documentada es de riesgo muy alto aunque su LDL esté bajo cien: igual necesita estatina.' },
        { cells: ['Meta no alcanzada con dosis máxima', 'Agregar ezetimiba 10 mg', 'Cambiar a fibrato'],
          say: 'Si no alcanza la meta con la dosis máxima tolerada, se agrega ezetimiba. Cambiar a un fibrato es la trampa: el objetivo sigue siendo el LDL.' },
        { cells: ['Mialgias con estatina', 'Medir CK', 'Suspender sin confirmar, o pedir ANA'],
          say: 'Mialgias con estatinas: primero la CK. Ni suspender a ciegas, ni irse a exámenes reumatológicos.' },
        { cells: ['CK más de 10 veces, orina color coñac', 'Rabdomiólisis: suspender', 'Llamarlo mialgia simple'],
          say: 'Y CK más de diez veces lo normal con orina color coñac es rabdomiólisis: se suspende la estatina, y ojo con la falla renal aguda.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 70 años, con IAM hace 1 año, en tratamiento con atorvastatina 80 mg. Consulta por 3 días de dolor muscular intenso en muslos y hombros, debilidad y orinas oscuras. CK 15.000 UI/L, creatinina 2,1 mg/dL (basal 1,0).',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Mialgia simple por estatinas' },
        { letter: 'B', text: 'Miositis por estatinas' },
        { letter: 'C', text: 'Rabdomiólisis por estatinas' },
        { letter: 'D', text: 'Polimialgia reumática' },
        { letter: 'E', text: 'Polineuropatía diabética' },
      ],
      correct: 'C',
      explanation: 'Dolor muscular intenso, orinas oscuras (mioglobinuria), CK mayor a 10 veces el límite normal e insuficiencia renal aguda: rabdomiólisis por estatinas. La mialgia simple tiene CK normal; la miositis, CK de 3 a 10 veces el límite normal sin falla renal.',
      say: {
        stem: 'Vamos con un caso. Hombre de setenta años, con un infarto hace un año, que toma atorvastatina ochenta miligramos. Consulta por tres días de dolor muscular intenso en muslos y hombros, debilidad, y orinas oscuras. Su CK es quince mil, y la creatinina subió de uno a dos coma uno.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: mialgia simple, miositis, rabdomiólisis por estatinas, polimialgia reumática, o polineuropatía diabética. Piénsalo.',
        answer: 'La respuesta es la C, rabdomiólisis. La CK supera largamente diez veces lo normal, la orina oscura es mioglobinuria, y la creatinina que sube es la falla renal aguda. La miositis es el distractor más tentador, pero tiene CK de tres a diez veces lo normal y no daña el riñón. Y la mialgia simple tiene la CK normal. Se suspende la estatina de inmediato.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 157',
      stem: 'Un paciente de 66 años, diabético e hipertenso, con antecedente de un infarto agudo al miocardio, hace 1 año, se realiza perfil lipídico, que muestra triglicéridos: 325 mg/dl, colesterol LDL: 125 mg/dl, colesterol HDL: 30, colesterol total: 220 mg/dl.',
      question: '¿Cuál es el tratamiento de elección para el manejo de su dislipidemia?',
      options: [
        { letter: 'A', text: 'Atorvastatina 40 mg/día' },
        { letter: 'B', text: 'Fenofibrato 160 mg/día' },
        { letter: 'C', text: 'Gemfibrozilo 600 mg cada 12 horas' },
        { letter: 'D', text: 'Aporte de ácidos grasos omega 3' },
        { letter: 'E', text: 'Rosuvastatina 10 mg/día' },
      ],
      correct: 'A',
      explanation: 'Infarto previo: riesgo cardiovascular muy alto, meta de c-LDL bajo 55–70 mg/dL. Con triglicéridos bajo 500 mg/dL la prioridad es el LDL, y se indica una estatina de alta intensidad: atorvastatina 40 mg. Rosuvastatina 10 mg es de intensidad moderada.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de diciembre de dos mil veintidós. Paciente de sesenta y seis años, diabético e hipertenso, con un infarto hace un año. Su perfil muestra triglicéridos de trescientos veinticinco, LDL de ciento veinticinco y HDL de treinta.',
        question: '¿Cuál es el tratamiento de elección para su dislipidemia?',
        options: 'Las opciones son: atorvastatina cuarenta, fenofibrato, gemfibrozilo, omega tres, o rosuvastatina diez. Piénsalo.',
        answer: 'Es la A, atorvastatina cuarenta. El infarto lo pone en riesgo muy alto, y su LDL está muy lejos de la meta. Los triglicéridos tientan a elegir un fibrato, pero están bajo quinientos, así que la prioridad sigue siendo el LDL. Y fíjate en la E: rosuvastatina diez es una estatina, pero de intensidad moderada. En prevención secundaria se usa alta intensidad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 139',
      stem: 'Un paciente de 68 años con diagnóstico reciente de ateromatosis aórtica y carotídea se realiza un perfil lipídico que muestra: colesterol total: 194 mg/dL, colesterol LDL: 93 mg/dL, HDL: 37 mg/dL y triglicéridos: 287 mg/dL.',
      question: '¿Cuál es la conducta más adecuada para el manejo de este paciente?',
      options: [
        { letter: 'A', text: 'Iniciar metformina' },
        { letter: 'B', text: 'Iniciar gemfibrozilo' },
        { letter: 'C', text: 'Iniciar atorvastatina' },
        { letter: 'D', text: 'Iniciar ácido nicotínico' },
        { letter: 'E', text: 'Iniciar ezetimibe' },
      ],
      correct: 'C',
      explanation: 'La ateromatosis aórtica y carotídea es enfermedad ateroesclerótica documentada: el riesgo es alto o muy alto y la meta de c-LDL es menor de 70 mg/dL. Un LDL de 93 no está en meta. Con triglicéridos bajo 500 mg/dL la prioridad es el LDL: estatina.',
      say: {
        stem: 'Otra del EUNACOM de julio de dos mil veinticuatro. Paciente de sesenta y ocho años con diagnóstico reciente de ateromatosis aórtica y carotídea. Su LDL es noventa y tres, el HDL treinta y siete, y los triglicéridos doscientos ochenta y siete.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: metformina, gemfibrozilo, atorvastatina, ácido nicotínico, o ezetimiba. Piénsalo.',
        answer: 'Es la C, atorvastatina. Aquí está la lección del riesgo: un LDL de noventa y tres parece normal, pero este paciente ya tiene ateroesclerosis documentada, así que su meta es bajo setenta o menos. Los triglicéridos tientan hacia el gemfibrozilo, pero están bajo quinientos. Y la ezetimiba se agrega a una estatina, no la reemplaza.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 89',
      stem: 'Paciente de 62 años, diabético diagnosticado hace 3 meses, en tratamiento con hipoglicemiantes orales, como parte de un chequeo se realiza exámenes de chequeo donde se aprecia creatinina de 0,9 mg/dL, hemoglobina glicosilada menor a 7% y un perfil lipídico que muestra triglicéridos: 250 mg/dL, colesterol total: 253 mg/dL, HDL: 51 mg/dL, LDL: 152 mg/dL. No presenta síntomas.',
      question: 'El tratamiento más adecuado para disminuir su riesgo cardiovascular es:',
      options: [
        { letter: 'A', text: 'Fibratos' },
        { letter: 'B', text: 'Estatinas' },
        { letter: 'C', text: 'Dieta baja en ácidos grasos saturados' },
        { letter: 'D', text: 'Ácido nicotínico' },
        { letter: 'E', text: 'Ezetimibe' },
      ],
      correct: 'B',
      explanation: 'Diabético de corta evolución: al menos riesgo moderado, con meta de c-LDL menor de 100 mg/dL. Un LDL de 152 está fuera de meta y los triglicéridos están bajo 500: la prioridad es el LDL y se indican estatinas.',
      say: {
        stem: 'Una más, del EUNACOM de agosto de dos mil veintiuno. Paciente de sesenta y dos años, diabético diagnosticado hace tres meses, bien controlado, asintomático. Su LDL es ciento cincuenta y dos y sus triglicéridos doscientos cincuenta.',
        question: '¿Cuál es el tratamiento más adecuado para disminuir su riesgo cardiovascular?',
        options: 'Las opciones son: fibratos, estatinas, dieta baja en grasas saturadas, ácido nicotínico, o ezetimiba. Piénsalo.',
        answer: 'Es la B, estatinas. Aunque la diabetes sea reciente, el diabético nunca es de riesgo bajo: como mínimo es moderado, con meta de LDL bajo cien, y ciento cincuenta y dos está lejos. Los triglicéridos están bajo quinientos, así que el objetivo es el LDL, no el fibrato. Y la dieta sola se queda corta si la pregunta es qué baja el riesgo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 108',
      stem: 'Un paciente diabético, hipertenso y con antecedente de una cardiopatía coronaria, en tratamiento con aspirina, metformina, glibenclamida y enalapril, se realiza un perfil lipídico, que se informa como LDL: 165 mg/dl, HDL: 38 mg/dl, triglicéridos: 288 mg/dl. Inició atorvastatina 40 mg al día, las que suspendió por presentar artralgias y mialgias.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar rosuvastatina 10 mg y controlar con CK' },
        { letter: 'B', text: 'Iniciar fenofibrato mg y controlar con perfil lipídico y glicemia' },
        { letter: 'C', text: 'Iniciar atorvastatina 5 mg cada 2 días' },
        { letter: 'D', text: 'Iniciar ezetimibe' },
        { letter: 'E', text: 'Reforzar la dieta' },
      ],
      correct: 'A',
      explanation: 'Coronario: necesita estatina. Ante síntomas musculares, se reintroduce con otra estatina más hidrofílica y a dosis menor (rosuvastatina), controlando con CK para descartar miopatía. Abandonar la estatina deja al paciente sin su principal protección.',
      say: {
        stem: 'Ahora dos sobre el músculo. Esta es del EUNACOM de diciembre de dos mil dieciocho. Paciente diabético, hipertenso y coronario, con LDL de ciento sesenta y cinco. Inició atorvastatina cuarenta, pero la suspendió porque le dieron mialgias y artralgias.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: rosuvastatina diez controlando con CK, fenofibrato, atorvastatina cinco miligramos día por medio, ezetimiba, o reforzar la dieta. Piénsalo.',
        answer: 'Es la A. Es un paciente coronario: no puede quedarse sin estatina. Frente a los síntomas musculares, la conducta es reintroducir con una dosis menor, o cambiar a una estatina más hidrofílica como la rosuvastatina, y controlar con CK. La ezetimiba sola o la dieta lo dejan desprotegido, y el fibrato no apunta a su problema, que es el LDL.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 109',
      stem: 'Un paciente de 82 años, con antecedente de diabetes y enfermedad coronaria, en tratamiento farmacológico con metformina 1 gramo cada 8 horas, glibenclamida 10 mg cada 12 horas, aspirina 100 mg al día y atorvastatina 40 mg al día, presenta un cuadro de mialgias generalizadas, asociadas a debilidad muscular, mayor en la cintura escapular y los muslos. Se solicitan exámenes, entre los que destacan CK: 1.320 UI/L, GOT: 128 UI/L y GOT: 133 UI/L.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Miopatía diabética' },
        { letter: 'B', text: 'Polineuropatía diabética' },
        { letter: 'C', text: 'Miopatía por estatinas' },
        { letter: 'D', text: 'Polimiositis' },
        { letter: 'E', text: 'Polimialgia reumática' },
      ],
      correct: 'C',
      explanation: 'Usuario de atorvastatina con mialgias proximales, debilidad y CK elevada varias veces sobre lo normal: miopatía por estatinas (miositis). Exige suspender la estatina.',
      say: {
        stem: 'Y la última, también de diciembre de dos mil dieciocho. Paciente de ochenta y dos años, diabético y coronario, que toma atorvastatina cuarenta. Tiene mialgias generalizadas y debilidad de cintura escapular y muslos. La CK es mil trescientos veinte, con transaminasas elevadas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: miopatía diabética, polineuropatía diabética, miopatía por estatinas, polimiositis, o polimialgia reumática. Piénsalo.',
        answer: 'Es la C, miopatía por estatinas. Hay dolor y debilidad proximal con la CK elevada varias veces sobre lo normal, en un usuario de atorvastatina: una miositis por estatinas, que exige suspenderla. La polimiositis también da debilidad proximal con CK alta, pero aquí el fármaco lo explica todo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Riesgo y meta', tag: 'Primero el riesgo', kind: 'key', items: [
          { t: 'Evento previo = riesgo muy alto', d: 'IAM, ACV, AIT, arteriopatía periférica',
            say: 'Cerremos con las reglas de oro. Todo paciente con enfermedad cardiovascular ateroesclerótica, infarto, ataque cerebrovascular o arteriopatía periférica, es de riesgo muy alto.' },
          { t: 'Meta: LDL, no colesterol total', d: 'Muy alto: bajo 55 o 70 · Alto: bajo 70 o 100',
            say: 'La meta es el LDL según el riesgo, nunca el colesterol total.' },
        ] },
        { title: 'Estatinas', tag: 'Alta intensidad', kind: 'pharma', items: [
          { t: 'Atorvastatina 40–80 · Rosuvastatina 20–40', d: 'Bajan el LDL 50 % o más',
            say: 'Alta intensidad es atorvastatina cuarenta a ochenta, o rosuvastatina veinte a cuarenta.' },
          { t: 'Sin meta con dosis máxima', d: 'Agregar ezetimiba 10 mg',
            say: 'Y si no llega a la meta con la dosis máxima tolerada, se agrega ezetimiba.' },
        ] },
        { title: 'Músculo', tag: 'Pedir CK', kind: 'alert', items: [
          { t: 'Mialgias: medir CK', d: 'Más de 10 veces: rabdomiólisis',
            say: 'Si te llevas una sola idea de hoy: primero clasificas el riesgo, y el riesgo te dice la meta y la estatina; y si le duelen los músculos, pides una CK antes de decidir. En la próxima clase vemos el otro extremo: las dislipidemias severas, la hipertrigliceridemia que produce pancreatitis y la hipercolesterolemia familiar. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Dislipidemia: del riesgo a la estatina',
    root: N('start', 'Paciente con perfil lipídico', 'Triglicéridos bajo 500',
      'Tienes un perfil lipídico con triglicéridos bajo quinientos, así que el objetivo es el LDL. Antes de mirar el número, clasifica el riesgo.',
      ['', N('q', '¿Cuál es su riesgo cardiovascular?', 'Riesgo global a 10 años',
        '¿En qué categoría de riesgo está el paciente?',
        ['Muy alto', N('alert', 'Evento ateroesclerótico o DM con daño', 'Meta LDL bajo 55 o 70',
          'Riesgo muy alto: infarto, ataque cerebrovascular, arteriopatía periférica, diabético con daño de órgano blanco, o enfermedad renal avanzada. Meta, LDL bajo cincuenta y cinco o setenta, y reducir la mitad.',
          ['', N('do', 'Estatina de alta intensidad', 'Atorvastatina 40–80 o rosuvastatina 20–40',
            'Estatina de alta intensidad: atorvastatina cuarenta a ochenta, o rosuvastatina veinte a cuarenta.',
            ['Sin meta', N('refer', 'Agregar ezetimiba 10 mg', 'Con dosis máxima tolerada',
              'Si con la dosis máxima tolerada no llega a la meta, se agrega ezetimiba.')])])],
        ['Alto', N('do', 'Meta LDL bajo 70 o 100', 'Estatina alta o moderada',
          'Riesgo alto, como el diabético de más de diez años sin daño: meta bajo setenta o cien, con estatina de intensidad alta o moderada.')],
        ['Moderado', N('do', 'Meta LDL bajo 100', 'Estatina de moderada intensidad',
          'Riesgo moderado, como el diabético de menos de diez años: meta bajo cien, con estatina de moderada intensidad.')],
        ['Bajo', N('ok', 'Estilo de vida', 'Dieta mediterránea y ejercicio',
          'Riesgo bajo: cambios del estilo de vida, con dieta mediterránea y ejercicio.')])]),
  },
};
