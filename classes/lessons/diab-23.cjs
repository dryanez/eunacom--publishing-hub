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
      type: 'points',
      kicker: 'Prevención',
      title: 'Controla todo el riesgo, no un número',
      cards: [
        { title: 'Factores de riesgo vascular', tag: 'Diabético y ERC', kind: 'key', items: [
          { t: 'Tabaco: consejería, reemplazo, vareniclina', d: 'Cesación en cada control',
            say: 'Vamos a la prevención, que en el diabético y en el paciente con enfermedad renal crónica es la base del manejo. Se parte por la cesación del tabaco, con consejería breve, terapia de reemplazo de nicotina o vareniclina.' },
          { t: 'PA < 130/80 con IECA o ARA-II si hay albuminuria', d: 'HbA1c individualizada, LDL según riesgo',
            say: 'Presión bajo ciento treinta sobre ochenta, con IECA o ARA dos si hay albuminuria; hemoglobina glicosilada individualizada y LDL según el riesgo.' },
          { t: '150 min/semana, dieta mediterránea', d: 'Sal < 5 g/día, alcohol limitado',
            say: 'Peso saludable y cintura controlada, ciento cincuenta minutos semanales de actividad física, alimentación mediterránea con menos de cinco gramos de sal al día y alcohol limitado.' },
        ] },
        { title: 'Lo que se evita o se agrega', tag: 'Regla', kind: 'criteria', items: [
          { t: 'En ERC: evitar AINE, agregar iSGLT2', d: 'Aspirina 100 mg solo en prevención secundaria',
            say: 'En enfermedad renal crónica se evitan los antiinflamatorios no esteroidales y se agrega un inhibidor de SGLT dos cuando corresponde. La aspirina se reserva para prevención secundaria. La regla es tratar el riesgo global y no un valor aislado.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Prevención',
      title: 'Prevenir las dislipidemias',
      cards: [
        { title: 'Pesquisa y medidas', tag: 'Prevención primaria', kind: 'normal', items: [
          { t: 'Perfil lipídico periódico en el EMPA', d: 'Hijos de familias con HF desde la infancia',
            say: 'Para prevenir las dislipidemias, el perfil lipídico se pesquisa de forma periódica en el adulto en el EMPA, con más frecuencia si hay factores de riesgo o antecedente familiar. En familias con hipercolesterolemia familiar se tamiza a los hijos desde la infancia.' },
          { t: 'Depósitos de colesterol al examen', d: 'Xantelasma y xantomas tendinosos',
            say: 'Al examinar, busca los depósitos de colesterol. Mira este párpado: las placas amarillas son xantelasmas, que pueden verse con colesterol normal pero obligan a medirlo. Y en este tendón de Aquiles, el xantoma tendinoso sí es específico: sugiere hipercolesterolemia familiar.',
            photos: [{ src: 'biblioteca/04_diabetes/diab-23/01_xantelasma__amir-endocrino_p120.jpg', label: 'Xantelasma', at: 'Mira este párpado', credit: 'Manual AMIR Endocrinología, p. 120' }, { src: 'biblioteca/04_diabetes/diab-23/01_xantomas_tendinosos__fitzpatrick_p1311.jpg', label: 'Xantoma tendinoso', at: 'Y en este tendón de Aquiles', credit: 'Fitzpatrick 7.ª ed., Fig. 135-4' }] },
          { t: 'Menos grasa saturada, más fibra y pescado', d: 'Bajar 5–10 % del peso baja TG cerca de 20 %',
            say: 'Las medidas: reducir grasas saturadas y trans, aumentar fibra y pescado, y bajar entre cinco y diez por ciento del peso, que reduce los triglicéridos cerca de veinte por ciento. El ejercicio aeróbico sube el HDL y baja los triglicéridos, y dejar el tabaco también sube el HDL.' },
        ] },
        { title: 'Antes de decir «primaria»', tag: 'Causas secundarias', kind: 'alert', items: [
          { t: 'Hipotiroidismo, nefrótico, colestasis', d: 'DM descompensada, alcohol, fármacos',
            say: 'Y antes de rotular una dislipidemia como primaria, se corrigen las causas secundarias: hipotiroidismo, síndrome nefrótico, colestasis, diabetes descompensada y alcohol.' },
          { t: 'Fármacos: tiazidas, betabloqueadores, corticoides', d: 'Anticonceptivos, retinoides, inhibidores de proteasa',
            say: 'Entre los fármacos que las producen están las tiazidas, los betabloqueadores, los corticoides, los anticonceptivos, los retinoides y los inhibidores de proteasa.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'La placa crece; la estatina la estabiliza',
      images: [
        { src: 'animaciones/diab-23/A1_ateroma_estatina.mp4', label: 'Ateroma', credit: 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'La meta es el LDL según el riesgo',
          say: 'El LDL entra a la pared de la arteria y la placa crece; si su cápsula es delgada, puede romperse y causar un infarto. La estatina baja el LDL y engruesa la cápsula. La meta depende del riesgo: mientras más alto, más bajo el LDL. Y si no se llega con la dosis máxima, se agrega ezetimiba.' },
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
        { cells: ['Dislipidemia en usuario de tiazidas, corticoides o con hipotiroidismo', 'Corregir la causa secundaria primero', 'Rotularla de primaria e indicar fármaco'],
          say: 'Y la dislipidemia en alguien con hipotiroidismo, síndrome nefrótico o corticoides: primero se corrige la causa secundaria. La trampa es rotularla de primaria y partir con un fármaco.' },
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
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.3.013 · Riesgo cardiovascular global",
      "stem": "Mujer de 46 años, no fumadora, sin diabetes, consulta en el CESFAM para ingresar al Programa de Salud Cardiovascular. En 3 controles distintos tiene presión arterial promedio de 166/104 mmHg. Perfil lipídico: colesterol total 205 mg/dL, HDL 52 mg/dL, LDL 128 mg/dL. Creatinina 0,7 mg/dL, sin albuminuria.",
      "question": "Según el MINSAL, ¿cómo se clasifica su riesgo cardiovascular?",
      "options": [
        {
          "letter": "A",
          "text": "Bajo, porque es mujer menor de 50 años y no fuma"
        },
        {
          "letter": "B",
          "text": "Moderado, según las tablas de Framingham adaptadas a Chile"
        },
        {
          "letter": "C",
          "text": "No se puede clasificar sin una prueba de esfuerzo"
        },
        {
          "letter": "D",
          "text": "Alto, directamente, sin necesidad de usar tablas, por presión arterial de 160/100 mmHg o más"
        },
        {
          "letter": "E",
          "text": "Alto solo si el LDL supera 190 mg/dL"
        }
      ],
      "correct": "D",
      "explanation": "En el Programa de Salud Cardiovascular algunas condiciones clasifican directamente como alto riesgo, sin tablas: enfermedad cardiovascular previa, diabetes, ERC etapa 3b o más, LDL 190 mg/dL o más y presión arterial persistente de 160/100 mmHg o más. En los demás se usa la tabla de Framingham adaptada a Chile.",
      "say": {
        "stem": "Mujer de cuarenta y seis años, no fumadora y sin diabetes, que en tres controles tiene una presión promedio de ciento sesenta y seis con ciento cuatro. Su LDL es ciento veintiocho y su función renal es normal.",
        "question": "Según el ministerio, ¿cómo se clasifica su riesgo cardiovascular?",
        "options": "Las opciones: bajo, moderado según tablas, requiere prueba de esfuerzo, alto directo por presión de ciento sesenta con cien o más o alto solo con LDL sobre ciento noventa. Piénsalo.",
        "answer": "Es la D. Una presión persistente de ciento sesenta con cien o más clasifica como alto riesgo de inmediato, sin calcular tablas. Usar la tabla de Framingham tienta porque es una mujer joven sin otros factores, pero la tabla solo se usa cuando no hay una condición de alto riesgo directo."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.4.021 · Perfil lipídico",
      "stem": "Hombre de 52 años con obesidad y consumo diario de alcohol, en control de salud. Perfil lipídico en ayunas de 12 horas: colesterol total 260 mg/dL, HDL 34 mg/dL, triglicéridos 520 mg/dL. El informe del laboratorio no entrega el valor de LDL.",
      "question": "¿Cuál es la interpretación más adecuada respecto al colesterol LDL?",
      "options": [
        {
          "letter": "A",
          "text": "Calcular el LDL con la fórmula de Friedewald: 122 mg/dL"
        },
        {
          "letter": "B",
          "text": "El LDL no tiene importancia en este paciente"
        },
        {
          "letter": "C",
          "text": "Repetir el perfil sin ayuno para obtener el LDL"
        },
        {
          "letter": "D",
          "text": "El LDL es igual al colesterol total menos el HDL"
        },
        {
          "letter": "E",
          "text": "Con triglicéridos sobre 400 mg/dL la fórmula de Friedewald no es válida; se usa LDL medido en forma directa o el colesterol no HDL"
        }
      ],
      "correct": "E",
      "explanation": "La fórmula de Friedewald (LDL = colesterol total − HDL − triglicéridos/5) solo es válida con triglicéridos bajo 400 mg/dL. Sobre ese valor sobreestima las VLDL y subestima el LDL. Se pide LDL directo o se usa el colesterol no HDL (aquí 226 mg/dL). Además, con triglicéridos sobre 500 la prioridad es prevenir la pancreatitis.",
      "say": {
        "stem": "Hombre de cincuenta y dos años, obeso y bebedor diario. Su perfil lipídico en ayunas muestra colesterol total doscientos sesenta, HDL treinta y cuatro y triglicéridos quinientos veinte. El laboratorio no informa el LDL.",
        "question": "¿Cuál es la interpretación más adecuada respecto al colesterol LDL?",
        "options": "Las opciones: calcularlo con Friedewald, el LDL no importa, repetir sin ayuno, colesterol total menos HDL es el LDL o Friedewald no válida y pedir LDL directo o usar el no HDL. Piénsalo.",
        "answer": "Es la E. La fórmula de Friedewald solo sirve con triglicéridos bajo cuatrocientos; con quinientos veinte el LDL calculado sale falsamente bajo. Calcularlo igual tienta porque el laboratorio no lo dio, pero ese ciento veintidós no es real. El total menos el HDL es el colesterol no HDL, no el LDL."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.002 · Dislipidemias",
      "stem": "Un niño de 11 años es derivado por colesterol LDL de 205 mg/dL, confirmado en dos mediciones. Su padre tuvo un infarto agudo al miocardio a los 42 años. Lleva 6 meses con dieta y actividad física supervisadas, con LDL de control de 198 mg/dL. Su IMC es normal y no tiene otras enfermedades.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Mantener solo dieta y controlar en un año"
        },
        {
          "letter": "B",
          "text": "Indicar suplementos de omega 3 como única medida"
        },
        {
          "letter": "C",
          "text": "Iniciar fibratos"
        },
        {
          "letter": "D",
          "text": "Esperar hasta los 18 años para iniciar fármacos"
        },
        {
          "letter": "E",
          "text": "Iniciar una estatina en dosis baja manteniendo la dieta"
        }
      ],
      "correct": "E",
      "explanation": "LDL de 190 mg/dL o más persistente tras 6 meses de dieta, en un niño de 10 años o más, sugiere hipercolesterolemia familiar y es indicación de estatina, sobre todo con antecedente de enfermedad coronaria precoz. Se inicia en dosis baja, manteniendo cambios de estilo de vida y vigilando CK y transaminasas. Los fibratos son para hipertrigliceridemia.",
      "say": {
        "stem": "Un niño de once años tiene un colesterol LDL cercano a doscientos que no baja tras seis meses de dieta, y su padre tuvo un infarto a los cuarenta y dos años.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: solo dieta, omega tres, fibratos, esperar a los dieciocho años o estatina en dosis baja. Piénsalo.",
        "answer": "Es la E. Un LDL sobre ciento noventa que persiste pese a la dieta en un niño de diez años o más, con infarto precoz familiar, indica estatina. Mantener solo la dieta tienta, pero ya fracasó y el riesgo cardiovascular es alto."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.4.019 · Perfil lipídico",
      "stem": "En el control de salud de un niño de 5 años, sano y con IMC normal, la madre refiere que el padre del niño tuvo un infarto agudo al miocardio a los 45 años y tiene colesterol total de 320 mg/dL.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "No solicitar exámenes hasta los 18 años"
        },
        {
          "letter": "B",
          "text": "Solicitar solo glicemia"
        },
        {
          "letter": "C",
          "text": "Iniciar estatina empírica"
        },
        {
          "letter": "D",
          "text": "Solicitar perfil lipídico en ayunas"
        },
        {
          "letter": "E",
          "text": "Solicitar perfil lipídico solo si desarrolla obesidad"
        }
      ],
      "correct": "D",
      "explanation": "Se recomienda tamizaje selectivo con perfil lipídico desde los 2 años en niños con antecedente familiar de enfermedad cardiovascular precoz (hombres menores de 55 años, mujeres menores de 65) o dislipidemia familiar, además de un tamizaje universal entre los 9 y 11 años. Así se pesquisa la hipercolesterolemia familiar, que requiere manejo precoz. Las estatinas no se usan sin diagnóstico.",
      "say": {
        "stem": "Un niño de cinco años sano tiene un padre con infarto a los cuarenta y cinco años y colesterol muy alto.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: esperar a los dieciocho años, solo glicemia, estatina empírica, perfil lipídico o perfil lipídico solo si engorda. Piénsalo.",
        "answer": "Es la D. Con antecedente familiar de enfermedad coronaria precoz se pide perfil lipídico desde los dos años. Iniciar estatina tienta por el riesgo, pero no corresponde sin confirmar una dislipidemia."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2015 · Pregunta 53",
      "stem": "Un paciente hipertenso y diabético se realiza un perfil lipídico, que muestra triglicéridos de 350 mg/dL, colesterol LDL de 230 mg/dL y colesterol HDL de 37 mg/dL.",
      "question": "¿Qué tratamiento debe indicarse?",
      "options": [
        {
          "letter": "A",
          "text": "Atorvastatina"
        },
        {
          "letter": "B",
          "text": "Gemfibrozilo"
        },
        {
          "letter": "C",
          "text": "Insulina"
        },
        {
          "letter": "D",
          "text": "Lovastatina más gemfibrozilo"
        },
        {
          "letter": "E",
          "text": "Ezetimibe"
        }
      ],
      "correct": "A",
      "explanation": "En un diabético hipertenso, de alto riesgo, el objetivo primario es el LDL; con triglicéridos bajo 500 mg/dL no se prioriza el fibrato. Corresponde una estatina potente como atorvastatina. La combinación de estatina con gemfibrozilo aumenta el riesgo de miopatía y rabdomiólisis.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil quince. Un paciente hipertenso y diabético tiene triglicéridos de trescientos cincuenta, LDL de doscientos treinta y HDL de treinta y siete.",
        "question": "¿Qué tratamiento debe indicarse?",
        "options": "Las opciones: atorvastatina, gemfibrozilo, insulina, lovastatina más gemfibrozilo o ezetimibe. Piénsalo.",
        "answer": "Es la A. Con triglicéridos bajo quinientos el blanco es el LDL, y en un diabético de alto riesgo va una estatina potente. El gemfibrozilo tienta por los triglicéridos, pero no es la prioridad y combinado con estatina aumenta la miopatía."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.01.4.013 · Perfil lipídico",
      "stem": "Un hombre de 50 años se realiza un perfil lipídico con 12 horas de ayuno: colesterol total 260 mg/dL, HDL 40 mg/dL y triglicéridos 600 mg/dL. El laboratorio no informa el LDL calculado.",
      "question": "¿Por qué no se informa el colesterol LDL?",
      "options": [
        {
          "letter": "A",
          "text": "Porque el ayuno fue insuficiente"
        },
        {
          "letter": "B",
          "text": "Porque el LDL solo se mide en diabéticos"
        },
        {
          "letter": "C",
          "text": "Porque el HDL es bajo"
        },
        {
          "letter": "D",
          "text": "Porque el colesterol total es normal"
        },
        {
          "letter": "E",
          "text": "Porque la fórmula de Friedewald no es válida con triglicéridos sobre 400 mg/dL"
        }
      ],
      "correct": "E",
      "explanation": "El LDL suele calcularse con Friedewald: LDL = CT − HDL − TG/5. Con triglicéridos sobre 400 mg/dL la fórmula pierde validez y se mide el LDL directo o se usa el colesterol no-HDL (CT − HDL), aquí 220 mg/dL. Con TG sobre 500, la prioridad es bajarlos para prevenir pancreatitis.",
      "say": {
        "stem": "Un hombre de cincuenta años tiene en ayuno colesterol total de doscientos sesenta, HDL de cuarenta y triglicéridos de seiscientos. El laboratorio no informa el LDL.",
        "question": "¿Por qué no se informa el LDL?",
        "options": "Las opciones: ayuno insuficiente, el LDL solo se mide en diabéticos, HDL bajo, colesterol total normal o la fórmula de Friedewald no sirve con triglicéridos sobre cuatrocientos. Piénsalo.",
        "answer": "Es la E. La fórmula de Friedewald pierde validez con triglicéridos sobre cuatrocientos, así que se usa el colesterol no HDL o el LDL directo. El ayuno insuficiente tienta, pero él tenía doce horas de ayuno."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.3.007 · Prevención de dislipidemias",
      "stem": "Un hombre de 42 años, con colesterol LDL de 145 mg/dL, sin otros factores de riesgo y con riesgo cardiovascular bajo, pregunta qué cambio alimentario reduce más su LDL.",
      "question": "¿Cuál es la medida dietética más efectiva para reducir el colesterol LDL?",
      "options": [
        {
          "letter": "A",
          "text": "Suprimir todas las grasas, incluidos el aceite de oliva y los frutos secos"
        },
        {
          "letter": "B",
          "text": "Eliminar completamente los huevos"
        },
        {
          "letter": "C",
          "text": "Aumentar el consumo de azúcares simples"
        },
        {
          "letter": "D",
          "text": "Consumir más carnes rojas procesadas"
        },
        {
          "letter": "E",
          "text": "Reducir las grasas saturadas y trans, reemplazándolas por grasas insaturadas"
        }
      ],
      "correct": "E",
      "explanation": "Las grasas saturadas (carnes grasas, mantequilla, embutidos) y trans son los principales determinantes dietéticos del LDL. Reemplazarlas por grasas insaturadas (aceite de oliva o canola, frutos secos, pescado), sumando fibra soluble y actividad física, es la base de la prevención. El colesterol del huevo influye menos.",
      "say": {
        "stem": "Un hombre de cuarenta y dos años con LDL de ciento cuarenta y cinco y riesgo cardiovascular bajo pregunta qué cambio alimentario le baja más el LDL.",
        "question": "¿Cuál es la medida dietética más efectiva?",
        "options": "Las opciones: suprimir todas las grasas, eliminar los huevos, más azúcares simples, más carnes procesadas o reemplazar grasas saturadas y trans por insaturadas. Piénsalo.",
        "answer": "Es la E. Lo que más sube el LDL son las grasas saturadas y trans, y reemplazarlas por insaturadas es lo más eficaz. Eliminar los huevos tienta, pero el colesterol dietario pesa menos que las grasas saturadas."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.3.002 · Control de factores de riesgo de enfermedad vascular",
      "stem": "Hombre de 58 años con DM2, hipertensión y tabaquismo activo, sin eventos cardiovasculares previos, tiene colesterol LDL de 132 mg/dL. Se clasifica como de riesgo cardiovascular alto.",
      "question": "¿Cuál es la meta de colesterol LDL más adecuada para este paciente?",
      "options": [
        {
          "letter": "A",
          "text": "Menor de 190 mg/dL"
        },
        {
          "letter": "B",
          "text": "Menor de 160 mg/dL"
        },
        {
          "letter": "C",
          "text": "Menor de 130 mg/dL"
        },
        {
          "letter": "D",
          "text": "Menor de 70 mg/dL"
        },
        {
          "letter": "E",
          "text": "No requiere meta de LDL, solo control glicémico"
        }
      ],
      "correct": "D",
      "explanation": "En pacientes de riesgo cardiovascular alto, como diabéticos con otros factores de riesgo, la meta de LDL es menor de 70 mg/dL, idealmente con una reducción de al menos 50%, usando estatinas de alta intensidad. El control integral de factores de riesgo incluye cesación tabáquica, control de presión y glicemia; dejar de fumar es la medida aislada de mayor impacto.",
      "say": {
        "stem": "Hombre de cincuenta y ocho años, diabético, hipertenso y fumador, con riesgo cardiovascular alto y LDL de ciento treinta y dos.",
        "question": "¿Cuál es su meta de LDL?",
        "options": "Las opciones: bajo ciento noventa, bajo ciento sesenta, bajo ciento treinta, bajo setenta, o sin meta. Piénsalo.",
        "answer": "Es la D. Bajo setenta, por ser de riesgo alto. Bajo ciento treinta sirve para riesgo bajo, pero en este paciente es insuficiente."
      }
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
