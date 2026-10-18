// Clase 13.6 (Urología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_urologia.cjs (uro-06). Preguntas: banco real EUNACOM (class_questions.cjs uro-06 y --search).
// Del código de la clase (1.04.1.010) solo se usan las de orquiepididimitis; las demás son de uretritis y sífilis y no se usan aquí.
// Ninguna pregunta usada aparece en otra clase. Julio 2017 P175 se usa por la edad y E. coli; el banco la comenta con dudas, pero la clave coincide con el libro.
// Dato del libro que no se enseña: en hombres que tienen sexo con hombres la tabla pone ceftriaxona más ciprofloxacino, pero el propio libro dice que la ciprofloxacino no cubre bien Chlamydia; se enseña cobertura de entéricos y de transmisión sexual sin fijar ese esquema (ver informe, nota A).
// Imágenes: Bates trae ilustraciones de epididimitis de menos de 250 px y Bailey no tiene figura de epididimitis extraída; ver informe.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'uro-06',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Orquiepididimitis aguda: la edad decide el germen, y el germen decide el antibiótico',
      say: 'Bienvenido. En la clase anterior vimos la torsión, el escroto agudo que no puede esperar. Hoy vemos su gran diferencial, la orquiepididimitis, la causa más común de escroto agudo en el adulto. El examen la pregunta de una manera muy predecible: qué germen es según la edad, y qué antibiótico corresponde. Y también cómo la separas de la torsión.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'De dónde viene la infección',
      nodes: [
        { id: 'u', col: 0, row: 1, k: 'cause', t: 'Infección de uretra o vejiga', s: 'Foco de partida' },
        { id: 'r', col: 1, row: 1, k: 'mech', t: 'Ascenso por el deferente', s: 'Vía canalicular retrógrada' },
        { id: 'e', col: 2, row: 1, k: 'effect', t: 'Epididimitis', s: 'Epidídimo inflamado' },
        { id: 'j', col: 3, row: 0, k: 'good', t: 'Menor de 35 años', s: 'Chlamydia y gonococo' },
        { id: 'm', col: 3, row: 2, k: 'risk', t: 'Mayor de 35 años', s: 'E. coli y patología prostática' },
      ],
      edges: [
        { from: 'u', to: 'r' }, { from: 'r', to: 'e' },
        { from: 'e', to: 'j', label: 'joven' }, { from: 'e', to: 'm', label: 'mayor' },
      ],
      steps: [
        { show: ['u', 'r', 'e'], note: 'La infección sube desde abajo',
          say: 'La epididimitis casi siempre llega por vía canalicular retrógrada. Una infección de la uretra o de la vejiga asciende por los conductos deferentes hasta el epidídimo. A diferencia de la torsión, esto es una infección, y por eso hay fiebre y síntomas urinarios.' },
        { show: ['j'], note: 'Menor de 35: transmisión sexual',
          say: 'Y aquí está el concepto más evaluado. En el varón menor de treinta y cinco años, los gérmenes son los de transmisión sexual: Chlamydia trachomatis y Neisseria gonorrhoeae.' },
        { show: ['m'], note: 'Mayor de 35: entéricos',
          say: 'En el mayor de treinta y cinco, o con patología urológica, predominan las enterobacterias, sobre todo Escherichia coli, asociadas a patología prostática, obstrucción o instrumentación.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Cómo se presenta',
      cards: [
        { title: 'Historia', tag: 'Subaguda', kind: 'key', items: [
          { t: 'Dolor de 1 a 3 días', d: 'Escroto rojo, caliente, hinchado',
            say: 'El dolor escrotal es sordo y progresa en uno a tres días, con aumento de volumen, rubor y calor. No es el inicio brutal de la torsión.' },
          { t: 'Fiebre y síntomas urinarios', d: 'Disuria, polaquiuria, secreción',
            say: 'Frecuentemente hay fiebre sobre treinta y ocho grados, disuria, polaquiuria o secreción uretral matinal.' },
        ] },
        { title: 'Examen', tag: 'Dos signos clave', kind: 'alert', items: [
          { t: 'Epidídimo engrosado y doloroso', d: 'Primero la cola, luego todo',
            say: 'Se palpa un epidídimo engrosado y muy doloroso, primero en la cola y luego en toda la glándula y el testículo, y por eso se llama orquiepididimitis. Mira esta ecografía Doppler: el epidídimo está engrosado y lleno de color, hipervascular, la huella de la inflamación.',
            photo: { src: '_web/260_uro_Orquiepididimitis__Commons_3.jpg', label: 'Epidídimo hipervascular', at: 'Mira esta ecografía', credit: 'Wikimedia Commons, CC0' } },
          { t: 'Prehn positivo', d: 'Elevarlo alivia el dolor',
            say: 'El signo de Prehn es positivo: al elevar suavemente el testículo, el dolor se alivia. Es lo contrario de la torsión.' },
          { t: 'Cremastérico conservado', d: 'Ausente solo en torsión',
            say: 'Y el reflejo cremastérico está conservado. Si lo encuentras abolido, piensa en torsión.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Antibiótico según la edad',
      cards: [
        { title: 'Menor de 35 años', tag: 'Transmisión sexual', kind: 'pharma', items: [
          { t: 'Ceftriaxona 500 mg IM, una dosis', d: 'Cubre el gonococo',
            say: 'En el menor de treinta y cinco, esquema dual. Ceftriaxona, quinientos miligramos intramuscular en dosis única, que cubre el gonococo.' },
          { t: 'Doxiciclina 100 mg cada 12 h', d: 'Cubre Chlamydia, 10 a 14 días',
            say: 'Más doxiciclina, cien miligramos cada doce horas por diez a catorce días, que cubre Chlamydia. Se toman antes muestras de orina y de la uretra.' },
          { t: 'Tratar a la pareja', d: 'Últimos 60 días y abstinencia',
            say: 'Y se cita y se trata a las parejas sexuales de los últimos sesenta días, con abstinencia hasta terminar. Gonorrea y clamidia son de notificación obligatoria.' },
        ] },
        { title: 'Mayor de 35 años', tag: 'Entéricos', kind: 'pharma', items: [
          { t: 'Ciprofloxacino 500 mg cada 12 h', d: 'O levofloxacino 500 mg al día',
            say: 'En el mayor de treinta y cinco o con patología urológica, se cubren los gramnegativos entéricos: ciprofloxacino, quinientos miligramos cada doce horas, o levofloxacino, quinientos miligramos al día, por diez a catorce días.' },
          { t: 'Estudiar la vía urinaria baja', d: 'Buscar HPB u obstrucción',
            say: 'Y después se estudia la vía urinaria baja, porque la hiperplasia prostática o la obstrucción suelen ser la causa de fondo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Transmisión sexual',
      title: 'Uretritis: gonocócica o no gonocócica',
      cards: [
        { title: 'Cómo distinguirlas', tag: 'Disuria y secreción', kind: 'key', items: [
          { t: 'Gonocócica: pus abundante', d: 'Incubación 2 a 5 días; diplococos en el Gram',
            say: 'Con disuria y secreción por el meato, primero distingue el tipo. La gonocócica incuba de dos a cinco días y da una secreción purulenta abundante; el Gram uretral muestra diplococos gramnegativos dentro de los leucocitos. Mira esta fotografía: el pus que asoma por el meato.',
            photo: { src: 'biblioteca/19_urologia/uro-06/01_secrecion-uretral-gonococica__nelson_p1602.jpg', label: 'Secreción uretral purulenta', at: 'Mira esta fotografía', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., p. 1602 (Fig. 163.4)' } },
          { t: 'No gonocócica: Chlamydia', d: 'Secreción escasa y mucoide',
            say: 'La no gonocócica es sobre todo Chlamydia trachomatis, además de Mycoplasma, Ureaplasma y Trichomonas, con secreción escasa y mucoide. En la práctica se trata como las dos a la vez.' },
        ] },
        { title: 'Diagnóstico y conducta', tag: 'Tratamiento empírico', kind: 'pharma', items: [
          { t: 'PCR en primera orina', d: 'O frotis uretral',
            say: 'El diagnóstico se confirma con PCR en primera orina o con un frotis uretral.' },
          { t: 'Ceftriaxona más azitromicina', d: '500 mg IM más 1 g oral, dosis única',
            say: 'El tratamiento empírico cubre ambas: ceftriaxona quinientos miligramos intramuscular, más azitromicina un gramo oral, ambas en dosis única; o doxiciclina cien miligramos cada doce horas por siete días en lugar de la azitromicina.' },
          { t: 'Tratar a la pareja', d: 'Últimos 60 días; VIH y VDRL',
            say: 'Se trata y estudia a la pareja de los últimos sesenta días, se indica abstinencia hasta siete días después y se ofrece VIH y VDRL. La gonorrea y la sífilis son de notificación obligatoria. Sin tratamiento, evoluciona a epididimitis, prostatitis y estenosis uretral.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Transmisión sexual',
      title: 'Úlceras y verrugas genitales',
      head: ['Cuadro', 'Cómo es', 'Tratamiento'],
      rows: [
        { cells: ['Sífilis primaria', 'Chancro único, indoloro, duro', 'Penicilina benzatina 2,4 millones UI IM'],
          say: 'La sífilis primaria da un chancro único, indoloro, de borde duro y fondo limpio, con adenopatía inguinal no dolorosa. Se confirma con VDRL y una prueba treponémica, y se trata con penicilina benzatina, dos coma cuatro millones de unidades, una dosis. En alérgicos, doxiciclina por catorce días.' },
        { cells: ['Herpes genital', 'Vesículas agrupadas dolorosas', 'Aciclovir 400 mg cada 8 h, 7 a 10 días'],
          say: 'El herpes da vesículas agrupadas y dolorosas que se ulceran y recurren. La primoinfección se trata con aciclovir cuatrocientos miligramos cada ocho horas por siete a diez días; las recurrencias, cinco días.' },
        { cells: ['Chancroide', 'Úlcera dolorosa, blanda, fondo sucio', 'Adenopatía supurada'],
          say: 'El chancroide, por Haemophilus ducreyi, es lo opuesto al chancro sifilítico: úlcera dolorosa, blanda y de fondo sucio, con adenopatía supurada.' },
        { cells: ['Linfogranuloma venéreo', 'Úlcera fugaz y bubones inguinales', 'Doxiciclina 21 días'],
          say: 'El linfogranuloma venéreo, por Chlamydia de los serotipos L uno a tres, deja una úlcera fugaz y bubones inguinales, y se trata con doxiciclina por veintiún días.' },
        { cells: ['Condilomas (VPH 6 y 11)', 'Blandos, en cresta de gallo', 'Podofilotoxina, imiquimod o crioterapia'],
          say: 'Las verrugas anogenitales las producen los tipos seis y once del virus papiloma: lesiones blandas, exofíticas, en cresta de gallo. Se tratan con podofilotoxina o imiquimod, crioterapia o electrocoagulación, y se previenen con la vacuna.' },
        { cells: ['Tricomoniasis', 'Uretritis o flujo', 'Metronidazol 2 g, y a la pareja'],
          say: 'La tricomoniasis se trata con metronidazol dos gramos en dosis única, también a la pareja. En toda ITS: consejería, preservativo, tamizaje de VIH y sífilis, y tratar a las parejas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo',
      title: 'Medidas generales y complicaciones',
      cards: [
        { title: 'Siempre', tag: 'Junto al antibiótico', kind: 'key', items: [
          { t: 'Reposo y suspensorio', d: 'Elevar e inmovilizar el escroto',
            say: 'Además del antibiótico, siempre: reposo, suspensorio escrotal para elevar e inmovilizar, compresas frías y antiinflamatorios por cinco a siete días.' },
        ] },
        { title: 'Si no mejora', tag: 'Fiebre a las 48 a 72 h', kind: 'alert', items: [
          { t: 'Eco Doppler de control', d: 'Buscar absceso o infarto',
            say: 'Si después de cuarenta y ocho a setenta y dos horas de antibiótico adecuado persiste la fiebre o empeora, se pide una ecografía Doppler escrotal, para descartar un absceso o un infarto testicular.' },
          { t: 'Absceso: urología y drenaje', d: 'Orquiectomía si el testículo está destruido',
            say: 'Una zona fluctuante con fiebre alta es un absceso: hospitalización, antibiótico parenteral y drenaje quirúrgico, y orquiectomía si el testículo está destruido.' },
          { t: 'Duda con torsión: explorar', d: 'Ante la duda, pabellón',
            say: 'Y ojo con un punto: si en algún momento no puedes descartar una torsión, se explora. La epididimitis se diagnostica cuando el cuadro es claro.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'El camino de la infección',
      images: [
        { src: 'animaciones/uro-06/A1_orquiepididimitis_ascenso.mp4', label: 'Cómo llega al epidídimo', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Cómo llega al epidídimo',
          say: 'Mira el camino: las bacterias suben desde la uretra, pasan por la próstata y el conducto deferente, y llegan al epidídimo, que se inflama. En el menor de treinta y cinco años suele ser transmisión sexual, y en el mayor, enterobacterias. Al elevar el testículo el dolor alivia, es el signo de Prehn positivo, y el cremastérico está conservado.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del escroto agudo con fiebre al antibiótico según la edad.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Epididimitis: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Menor de 35, sexualmente activo', 'Ceftriaxona más doxiciclina', 'Ciprofloxacino solo'],
          say: 'Joven sexualmente activo: ceftriaxona más doxiciclina. El error es dar solo ciprofloxacino, que no cubre bien Chlamydia ni gonococo.' },
        { cells: ['Mayor de 35 o con HPB', 'Ciprofloxacino o levofloxacino', 'Pensar en Chlamydia'],
          say: 'Mayor de treinta y cinco o con hiperplasia prostática: E. coli, y quinolona. El error es pensar en Chlamydia.' },
        { cells: ['Prehn positivo, cremastérico presente', 'Epididimitis', 'Pensar en torsión'],
          say: 'Prehn positivo con reflejo cremastérico presente: epididimitis, no torsión.' },
        { cells: ['Fiebre persistente a las 72 h', 'Doppler y buscar absceso', 'Subir la dosis y esperar'],
          say: 'Si no mejora a las setenta y dos horas, se busca un absceso con Doppler. El error es subir la dosis y esperar.' },
        { cells: ['Epididimitis por ETS', 'Tratar a la pareja', 'Tratar solo al paciente'],
          say: 'En la de transmisión sexual, se trata también a la pareja.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 26 años, sexualmente activo sin preservativo, consulta por dolor progresivo en el hemiescroto derecho de 48 horas, con sensación febril y ardor al orinar. T° 37,9 °C. Hemiescroto tumefacto y caliente, epidídimo derecho engrosado y muy sensible. Reflejo cremastérico presente. Al elevar el testículo, el dolor se alivia.',
      question: '¿Cuál es el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'Exploración quirúrgica urgente' },
        { letter: 'B', text: 'Ceftriaxona 500 mg IM más doxiciclina 100 mg cada 12 horas' },
        { letter: 'C', text: 'Ciprofloxacino 500 mg cada 12 horas en monoterapia' },
        { letter: 'D', text: 'Reposo y AINE sin antibiótico' },
        { letter: 'E', text: 'Doppler y esperar el resultado antes de tratar' },
      ],
      correct: 'B',
      explanation: 'Epididimitis aguda en un menor de 35 años sexualmente activo: Prehn positivo y reflejo cremastérico presente. Se toman muestras y se inicia esquema dual con ceftriaxona y doxiciclina, más reposo, suspensorio y tratamiento de la pareja.',
      say: {
        stem: 'Un hombre de veintiséis años, sexualmente activo sin preservativo, con dolor progresivo en el hemiescroto derecho de cuarenta y ocho horas, febrícula y ardor al orinar. El epidídimo está engrosado y muy sensible, el reflejo cremastérico está presente y, al elevar el testículo, el dolor se alivia.',
        question: '¿Cuál es el manejo más adecuado?',
        options: 'Las opciones: exploración quirúrgica; ceftriaxona más doxiciclina; ciprofloxacino solo; reposo y antiinflamatorio sin antibiótico; o Doppler antes de tratar. Piénsalo.',
        answer: 'Es la B. Menor de treinta y cinco, sexualmente activo: Chlamydia y gonococo, esquema dual. El Prehn positivo y el reflejo presente descartan la torsión, por eso la A no corresponde. La C es la trampa: la ciprofloxacino sola no cubre bien esos gérmenes.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 179',
      stem: 'Un paciente de 60 años fue tratado hace 7 días con ciprofloxacino, por disuria. Hace dos días presenta dolor testicular izquierdo, asociado a fiebre. Al examen físico tiene aumento de volumen testicular, con dolor a la palpación, especialmente del conducto espermático. Se observa ligero edema escrotal, con eritema.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hidrocele' },
        { letter: 'B', text: 'Varicocele' },
        { letter: 'C', text: 'Torsión testicular' },
        { letter: 'D', text: 'Tumor testicular' },
        { letter: 'E', text: 'Orquiepididimitis' },
      ],
      correct: 'E',
      explanation: 'Un varón de 60 años con infección urinaria reciente, fiebre y dolor testicular con edema y eritema escrotal: orquiepididimitis clásica. Se distingue de la torsión por la edad, la fiebre y el inicio subagudo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un paciente de sesenta años fue tratado hace una semana con ciprofloxacino por disuria. Ahora tiene dos días de dolor testicular izquierdo con fiebre, aumento de volumen, dolor sobre el conducto espermático y eritema escrotal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hidrocele; varicocele; torsión testicular; tumor testicular; u orquiepididimitis. Piénsalo.',
        answer: 'Es la E. La infección urinaria previa es el foco, la fiebre y el inicio de dos días orientan a infección. La C es la tentación en cualquier escroto agudo, pero a los sesenta años y con fiebre, la torsión es muy poco probable.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 175',
      stem: 'Un paciente de 65 años consulta por dolor escrotal derecho de 3 días de evolución. Al examen físico presenta dolor y eritema en la zona escrotal derecha y se palpa aumento de volumen y dolor, del testículo y del epidídimo. Refiere tener pareja sexual monogámica.',
      question: '¿Cuál es el agente etiológico más probable?',
      options: [
        { letter: 'A', text: 'Streptococcus pyogenes' },
        { letter: 'B', text: 'Staphilococcus aureus' },
        { letter: 'C', text: 'Chlamydia trachomatis' },
        { letter: 'D', text: 'Neisseria gonorreae' },
        { letter: 'E', text: 'Escherichia coli' },
      ],
      correct: 'E',
      explanation: 'En mayores de 35 años, y sin conducta sexual de riesgo, la orquiepididimitis la causa más frecuente es E. coli, por reflujo desde la vía urinaria.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un paciente de sesenta y cinco años con dolor escrotal derecho de tres días, eritema, y aumento de volumen y dolor del testículo y del epidídimo. Tiene una pareja sexual monogámica.',
        question: '¿Cuál es el agente etiológico más probable?',
        options: 'Las opciones: Streptococcus pyogenes; Staphylococcus aureus; Chlamydia trachomatis; Neisseria gonorrhoeae; o Escherichia coli. Piénsalo.',
        answer: 'Es la E. Sesenta y cinco años y pareja única: es una infección urinaria ascendente, y el germen es E. coli. La C y la D son los gérmenes del joven.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 161',
      stem: 'Un paciente de 21 años, sexualmente activo, consulta por dolor y aumento de volumen progresivos en relación al testículo izquierdo, que inició hace 5 días y se ha asociado a disuria y escasa secreción uretral. Al examen físico, presenta frecuencia cardíaca 65 latidos por minuto, presión arterial 110/70 mmHg y temperatura axilar de 37,1 °C. El examen genital muestra escroto aumentado de volumen y enrojecido a izquierda; se palpa testículo izquierdo ligeramente aumentado de volumen, sin masas, y epidídimo izquierdo con gran aumento de volumen, muy doloroso a la palpación.',
      question: '¿Qué tratamiento es el más adecuado?',
      options: [
        { letter: 'A', text: 'Ceftriaxona intramuscular' },
        { letter: 'B', text: 'Ciprofloxacino oral' },
        { letter: 'C', text: 'Amoxicilina con ácido clavulánico oral' },
        { letter: 'D', text: 'Doxiciclina oral' },
        { letter: 'E', text: 'Exploración quirúrgica' },
      ],
      correct: 'D',
      explanation: 'Orquiepididimitis con uretritis en un joven sexualmente activo, de curso subagudo y con escasa secreción: lo más probable es Chlamydia, que se trata con doxiciclina. En la práctica se cubren ambos gérmenes, con ceftriaxona más doxiciclina.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un joven de veintiún años, sexualmente activo, con cinco días de dolor y aumento de volumen del testículo izquierdo, disuria y escasa secreción uretral. No tiene fiebre. El epidídimo está muy aumentado de volumen y doloroso.',
        question: '¿Qué tratamiento es el más adecuado?',
        options: 'Las opciones: ceftriaxona intramuscular; ciprofloxacino oral; amoxicilina con clavulánico; doxiciclina oral; o exploración quirúrgica. Piénsalo.',
        answer: 'Es la D. Joven sexualmente activo, curso subagudo y secreción escasa: lo más probable es Chlamydia, y se trata con doxiciclina. La A es el gonococo, que da una secreción más purulenta. En la práctica, igual se cubren ambos con ceftriaxona más doxiciclina, como vimos. La B no cubre bien Chlamydia.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.1.006 · Enfermedades de transmisión sexual",
      "stem": "Hombre de 30 años consulta por una úlcera en el glande de 10 días, indolora, de bordes indurados y fondo limpio, de 1 cm, con adenopatías inguinales bilaterales firmes e indoloras. Tuvo relaciones sexuales sin preservativo hace 4 semanas. No es alérgico a medicamentos. VDRL reactivo 1:16.",
      "question": "¿Cuál es el tratamiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Penicilina benzatina 2.400.000 UI intramuscular por una vez, más estudio de VIH y tratamiento de la pareja"
        },
        {
          "letter": "B",
          "text": "Aciclovir 400 mg cada 8 horas por 7 días"
        },
        {
          "letter": "C",
          "text": "Ceftriaxona 500 mg intramuscular más doxiciclina"
        },
        {
          "letter": "D",
          "text": "Azitromicina 1 g oral por una vez"
        },
        {
          "letter": "E",
          "text": "Penicilina sódica endovenosa por 14 días"
        }
      ],
      "correct": "A",
      "explanation": "Úlcera genital única, indolora e indurada, con adenopatías inguinales indoloras, es un chancro de sífilis primaria. El tratamiento es penicilina benzatina 2.400.000 UI intramuscular en dosis única, con notificación, estudio de VIH y otras ITS, y tratamiento de los contactos. La penicilina sódica endovenosa es para neurosífilis.",
      "say": {
        "stem": "Un hombre de treinta años tiene una úlcera en el glande de diez días, indolora, de bordes duros y fondo limpio, con ganglios inguinales firmes que no duelen. El VDRL es reactivo.",
        "question": "¿Cuál es el tratamiento más adecuado?",
        "options": "Las opciones: penicilina benzatina intramuscular única con estudio de VIH y tratamiento de la pareja, aciclovir, ceftriaxona con doxiciclina, azitromicina o penicilina sódica endovenosa. Piénsalo.",
        "answer": "Es la A. Una úlcera indolora e indurada es el chancro de la sífilis primaria, y se trata con una dosis de penicilina benzatina, estudiando VIH y tratando a la pareja. El aciclovir tienta por ser una lesión genital, pero el herpes da vesículas y úlceras dolorosas."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: orquiepididimitis',
      cards: [
        { title: 'Diagnóstico', tag: 'Infección', kind: 'key', items: [
          { t: 'Subaguda, fiebre, Prehn positivo', d: 'Cremastérico presente',
            say: 'Cerremos con las reglas de oro. La epididimitis es subaguda, con fiebre y síntomas urinarios, Prehn positivo y reflejo cremastérico presente. Si no puedes descartar una torsión, se explora.' },
          { t: 'La edad dicta el germen', d: 'Menor de 35: ETS; mayor: E. coli',
            say: 'La edad decide el germen. Menor de treinta y cinco, Chlamydia y gonococo. Mayor de treinta y cinco, E. coli.' },
        ] },
        { title: 'Tratamiento', tag: 'Según el germen', kind: 'pharma', items: [
          { t: 'Joven: ceftriaxona y doxiciclina', d: 'Y tratar a la pareja',
            say: 'En el joven, ceftriaxona más doxiciclina, y se trata a la pareja.' },
          { t: 'Mayor: ciprofloxacino o levofloxacino', d: 'Doppler si no mejora en 72 h',
            say: 'En el mayor, ciprofloxacino o levofloxacino, y se estudia la vía urinaria. Si no mejora a las setenta y dos horas, Doppler para buscar un absceso. Si te llevas una sola idea de hoy: en la epididimitis la edad decide el antibiótico, y Prehn positivo la separa de la torsión. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Orquiepididimitis: edad y antibiótico',
    root: N('start', 'Escroto agudo con fiebre', 'Subagudo, disuria',
      'Un adulto con dolor escrotal de uno a tres días, fiebre y síntomas urinarios. Antes de pensar en infección, descarta que sea una torsión.',
      ['Brusco, cremastérico abolido, Prehn negativo', N('alert', 'Pensar en torsión', 'Explorar, no esperar',
        'Si el inicio es brusco, el reflejo cremastérico está abolido y elevar el testículo no alivia, es torsión, y se explora de inmediato.')],
      ['Subagudo, Prehn positivo, cremastérico presente', N('do', 'Epididimitis aguda', 'Muestras y antibiótico empírico',
        'Si es subagudo, con Prehn positivo y reflejo presente, es epididimitis. Se toman muestras de orina y de uretra, y se parte con antibiótico empírico según la edad.',
        ['Menor de 35 años', N('ok', 'Ceftriaxona más doxiciclina', 'Y tratar a la pareja',
          'En el menor de treinta y cinco, Chlamydia y gonococo: ceftriaxona intramuscular más doxiciclina por diez a catorce días, y se trata a la pareja.')],
        ['Mayor de 35 años', N('ok', 'Ciprofloxacino o levofloxacino', 'Estudiar la vía urinaria baja',
          'En el mayor de treinta y cinco, entéricos: ciprofloxacino o levofloxacino por diez a catorce días, y se estudia la vía urinaria.')],
        ['Sin mejoría a las 72 horas', N('refer', 'Doppler y buscar absceso', 'Drenaje o urología',
          'Si persiste la fiebre a las setenta y dos horas, se pide Doppler escrotal para descartar absceso o infarto, con drenaje quirúrgico si hay colección.')],
      )],
    ),
  },
};
