// Clase 20.11 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-11).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-11',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'La tríada que la diagnostica, la ecografía que decide si se hospitaliza',
      say: 'Bienvenida. Hoy vemos la enfermedad pélvica inflamatoria, una infección que sube desde el cuello uterino hasta las trompas y el peritoneo. Es un tema de alta rentabilidad, y se ordena con dos herramientas: los criterios de Hager, que la diagnostican, y la clasificación de Monif, que te dice qué tan grave es y si hospitalizas o no. Vamos paso a paso.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Una infección que sube',
      nodes: [
        { id: 'its', col: 0, row: 1, k: 'cause', t: 'Gonococo o Chlamydia', s: 'Suben desde el cuello uterino' },
        { id: 'end', col: 1, row: 0, k: 'mech', t: 'Endometritis', s: 'Primer escalón' },
        { id: 'sal', col: 1, row: 1, k: 'mech', t: 'Salpingitis', s: 'Llega a las trompas' },
        { id: 'per', col: 1, row: 2, k: 'risk', t: 'Peritonitis pélvica', s: 'Se derrama al peritoneo' },
        { id: 'ato', col: 2, row: 2, k: 'alert', t: 'Absceso tubo-ovárico', s: 'La forma más grave' },
        { id: 'sec', col: 3, row: 1, k: 'risk', t: 'Infertilidad y ectópico', s: 'Cicatrices que dejan las trompas dañadas' },
      ],
      edges: [
        { from: 'its', to: 'end' },
        { from: 'end', to: 'sal' },
        { from: 'sal', to: 'per', label: 'si avanza' },
        { from: 'per', to: 'ato', label: 'se forma la colección' },
        { from: 'sal', to: 'sec' },
      ],
      steps: [
        { show: ['its'], note: 'Los mismos dos agentes de la cervicitis',
          say: 'Empecemos por el mecanismo. Casi siempre parte con Chlamydia o gonococo, subiendo desde el cuello uterino, y después se agregan bacterias anaerobias y enterobacterias.' },
        { show: ['end'], note: 'El primer escalón, dentro del útero',
          say: 'El primer escalón es la endometritis: la infección ya entró al útero.' },
        { show: ['sal'], note: 'Ya llegó a las trompas',
          say: 'Si sigue subiendo, llega a las trompas: es la salpingitis, y aquí ya hablamos de enfermedad pélvica inflamatoria propiamente dicha.' },
        { show: ['per'], note: 'El peritoneo se irrita',
          say: 'Si continúa, se derrama al peritoneo pélvico, y aparece el dolor peritoneal que vas a ver al examen.' },
        { show: ['ato'], note: 'Una colección que puede romperse',
          say: 'Y en el punto más grave, se forma un absceso tubo-ovárico: una colección de pus dentro de la trompa y el ovario, que puede romperse.' },
        { show: ['sec'], note: 'El daño se queda aunque la infección se cure',
          say: 'Fíjate en algo importante: aunque trates la infección, las trompas quedan con cicatrices. Por eso las secuelas son infertilidad y embarazo ectópico, y eso no cambia con el antibiótico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Los criterios de Hager',
      cards: [
        { title: 'Los tres mayores', tag: 'Los tres, obligatorios', kind: 'key', items: [
          { t: 'Dolor en el abdomen bajo', d: 'A la palpación del hipogastrio',
            say: 'El diagnóstico se basa en los criterios de Hager, y necesitas los tres mayores presentes. El primero: dolor a la palpación del abdomen bajo.' },
          { t: 'Dolor al mover el cuello', d: 'Signo de Frenkel positivo',
            say: 'El segundo: dolor al movilizar el cuello uterino, lo que se llama el signo de Frenkel.' },
          { t: 'Dolor anexial al tacto', d: 'Uno o los dos anexos',
            say: 'Y el tercero: dolor a la palpación de los anexos. Si te faltan estos tres, no puedes llamarlo enfermedad pélvica inflamatoria.' },
        ] },
        { title: 'Los menores', tag: 'Al menos uno lo refuerza', kind: 'criteria', items: [
          { t: 'Fiebre sobre 38,3 grados', d: 'O leucorrea patológica',
            say: 'Y los menores refuerzan el diagnóstico: fiebre sobre treinta y ocho coma tres, leucorrea anormal.' },
          { t: 'PCR o glóbulos blancos altos', d: 'O cultivo positivo para gonococo o Chlamydia',
            say: 'También PCR elevada, leucocitosis, o un cultivo positivo para gonococo o Chlamydia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación de Monif',
      title: 'Qué tan grave es, y dónde se trata',
      cards: [
        { title: 'Estadios I y II', tag: 'Ambulatorio', kind: 'normal', items: [
          { t: 'Estadio I: salpingitis sola', d: 'Sin peritonitis ni masas',
            say: 'La clasificación de Monif te dice qué tan grave es. El estadio uno es salpingitis, sin peritonitis y sin masas: manejo ambulatorio.' },
          { t: 'Estadio II: con peritonitis local', d: 'Ambulatorio estricto, u hospitalizada',
            say: 'El estadio dos suma peritonitis pélvica localizada. Aquí depende de qué tan bien luzca la paciente.' },
        ] },
        { title: 'Estadios III y IV', tag: 'Hospitalización obligatoria', kind: 'alert', items: [
          { t: 'Estadio III: absceso tubo-ovárico', d: 'Palpable o visto en la ecografía',
            say: 'El estadio tres es el absceso tubo-ovárico, íntegro, y aquí la hospitalización ya no se discute.' },
          { t: 'Estadio IV: absceso roto', d: 'Peritonitis y shock séptico',
            say: 'Y el estadio cuatro es el absceso roto, con peritonitis generalizada y shock séptico: es una emergencia quirúrgica.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: '¿Ambulatorio, u hospitalizada?',
      nodes: [
        { id: 'diag', col: 0, row: 1, k: 'start', t: 'EIP diagnosticada', s: 'Con los criterios de Hager' },
        { id: 'crit', col: 1, row: 1, k: 'q', t: '¿Hay criterios de gravedad?', s: 'Absceso, embarazo, peritonitis, falla oral' },
        { id: 'amb', col: 2, row: 0, k: 'good', t: 'Ambulatorio', s: 'Ceftriaxona + doxiciclina + metronidazol, 14 días' },
        { id: 'hos', col: 2, row: 2, k: 'alert', t: 'Hospitalizada, vía endovenosa', s: 'Mismo esquema, o clindamicina más gentamicina' },
      ],
      edges: [
        { from: 'diag', to: 'crit' },
        { from: 'crit', to: 'amb', label: 'no' },
        { from: 'crit', to: 'hos', label: 'sí' },
      ],
      steps: [
        { show: ['diag'], note: 'Ya tienes el diagnóstico, ahora decides dónde tratar',
          say: 'Con el diagnóstico hecho, la siguiente pregunta es dónde tratar a la paciente.' },
        { show: ['crit'], note: 'Absceso, embarazo, peritonitis difusa, o que no responde',
          say: 'Y eso lo deciden los criterios de gravedad: absceso tubo-ovárico, embarazo, sospecha de otra urgencia quirúrgica, un cuadro muy grave, o que no responde en setenta y dos horas.' },
        { show: ['amb'], note: 'Los mismos tres antibióticos, por vía oral',
          say: 'Sin esos criterios, el manejo es ambulatorio: ceftriaxona intramuscular en dosis única, más doxiciclina y metronidazol orales, por catorce días completos, con control a las cuarenta y ocho o setenta y dos horas.' },
        { show: ['hos'], note: 'Mismo objetivo, distinta vía',
          say: 'Y con esos criterios, se hospitaliza y se usa la vía endovenosa: el mismo esquema, o clindamicina más gentamicina, que cubre muy bien anaerobios y el absceso tubo-ovárico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones',
      title: 'Lo que no se te puede escapar',
      cards: [
        { title: 'Síndrome de Fitz-Hugh-Curtis', tag: 'Simula colecistitis', kind: 'alert', items: [
          { t: 'Dolor en el hipocondrio derecho', d: 'La infección sube por el peritoneo',
            say: 'La primera complicación que se pregunta es el síndrome de Fitz-Hugh-Curtis: dolor en el hipocondrio derecho, porque la infección sube por el peritoneo hasta la cápsula del hígado.' },
          { t: 'Adherencias en cuerdas de violín', d: 'Entre el hígado y la pared',
            say: 'Al operar, se ven adherencias finas entre la cápsula hepática y la pared, como cuerdas de violín. El tratamiento sigue siendo el mismo esquema para la enfermedad pélvica inflamatoria.' },
        ] },
        { title: 'DIU y secuelas', tag: 'Dos datos que se preguntan', kind: 'criteria', items: [
          { t: 'DIU: riesgo solo el primer mes', d: 'Después no aumenta el riesgo de enfermedad pélvica',
            say: 'Y sobre el dispositivo intrauterino: solo aumenta el riesgo en las primeras semanas después de instalarlo. Pasado ese tiempo, no es un factor de riesgo.' },
          { t: 'Infertilidad tubárica', d: 'Sube con cada episodio repetido',
            say: 'Y la secuela más importante a largo plazo es la infertilidad tubárica, que aumenta mucho con cada episodio que se repite.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en el examen',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Los tres criterios mayores de Hager', 'Ya puedes diagnosticar', 'Pedir imágenes antes de tratar'],
          say: 'Repasemos las trampas. Con los tres criterios mayores de Hager, ya puedes diagnosticar. El error es demorar el tratamiento pidiendo estudios de imagen primero.' },
        { cells: ['Absceso tubo-ovárico en la ecografía', 'Hospitalización obligatoria', 'Manejarlo ambulatorio'],
          say: 'Absceso tubo-ovárico visto en la ecografía: hospitalización obligatoria. El error es tratarlo de forma ambulatoria porque la paciente luce bien.' },
        { cells: ['Dolor en hipocondrio derecho con EIP', 'Síndrome de Fitz-Hugh-Curtis', 'Pensar solo en colecistitis'],
          say: 'Dolor en el hipocondrio derecho junto con una EIP: piensa en Fitz-Hugh-Curtis. El error es enfocarse solo en la vesícula.' },
        { cells: ['DIU instalado hace un año', 'No es factor de riesgo de EIP', 'Retirarlo por precaución'],
          say: 'Y un DIU instalado hace un año: ya no es factor de riesgo. El error es retirarlo sin necesidad, cuando el riesgo real solo dura las primeras semanas.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 23 años, sexualmente activa, con dolor en hipogastrio de 3 días, fiebre de 38,6 grados y flujo purulento. Al tacto bimanual hay dolor a la movilización cervical y dolor anexial bilateral, sin masas. La ecografía transvaginal no muestra colecciones y el test de embarazo es negativo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Hospitalizar para tratamiento endovenoso' },
        { letter: 'B', text: 'Laparoscopía exploradora de urgencia' },
        { letter: 'C', text: 'Ceftriaxona intramuscular más doxiciclina y metronidazol orales por 14 días' },
        { letter: 'D', text: 'Solo doxiciclina oral por 7 días' },
        { letter: 'E', text: 'Retirar el DIU y esperar evolución' },
      ],
      correct: 'C',
      explanation: 'Se cumplen los tres criterios mayores de Hager, con un criterio menor (fiebre), sin masas ni signos de gravedad: EIP estadio I-II de Monif, de manejo ambulatorio con el esquema triple durante 14 días.',
      say: {
        stem: 'Vamos al caso. Mujer de veintitrés años, sexualmente activa, con dolor en el hipogastrio de tres días, fiebre de treinta y ocho coma seis, y flujo purulento. Al tacto bimanual, dolor al mover el cuello uterino y dolor anexial de los dos lados, sin masas. La ecografía no muestra colecciones, y el test de embarazo es negativo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: hospitalizar para tratamiento endovenoso, laparoscopía de urgencia, ceftriaxona más doxiciclina y metronidazol orales por catorce días, solo doxiciclina por siete días, o retirar el DIU y esperar. Piénsalo.',
        answer: 'Es la C. Cumple los tres criterios mayores de Hager, y la fiebre suma como criterio menor: es una enfermedad pélvica inflamatoria. Sin masas ni signos de gravedad, no hay motivo para hospitalizar. El esquema ambulatorio completo, con los tres antibióticos, es lo que corresponde.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 152',
      stem: 'Mujer de 25 años, sexualmente activa, sin métodos de barrera, con fiebre, dolor abdominal, disuria, polaquiuria y leucorrea. Temperatura 38 grados, dolor a la palpación abdominal mayor en la fosa ilíaca derecha, leucorrea y dolor a la palpación bimanual.',
      question: '¿Cuál es el agente etiológico más probable?',
      options: [
        { letter: 'A', text: 'Escherichia coli' },
        { letter: 'B', text: 'Gardnerella vaginalis' },
        { letter: 'C', text: 'Trichomona vaginalis' },
        { letter: 'D', text: 'Estreptococo grupo A' },
        { letter: 'E', text: 'Gonococo' },
      ],
      correct: 'E',
      explanation: 'Cuadro clínico de enfermedad pélvica inflamatoria (fiebre, dolor abdominal bajo y dolor a la palpación bimanual): el agente etiológico clásico es el gonococo, junto con Chlamydia trachomatis.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Mujer de veinticinco años, sexualmente activa, sin métodos de barrera, con fiebre, dolor abdominal, disuria, y leucorrea. Temperatura de treinta y ocho grados, dolor abdominal mayor en la fosa ilíaca derecha, y dolor a la palpación bimanual.',
        question: '¿Cuál es el agente etiológico más probable?',
        options: 'Las opciones: Escherichia coli, Gardnerella vaginalis, Trichomona vaginalis, estreptococo grupo A, o gonococo. Piénsalo.',
        answer: 'Es la E, gonococo. El cuadro es una enfermedad pélvica inflamatoria clásica, y el gonococo, junto con la Chlamydia, son los agentes que inician casi todos estos cuadros. La Gardnerella y la Trichomona dan flujo vaginal, no esta clínica de dolor pélvico con fiebre.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 174',
      stem: 'Mujer de 26 años, sexualmente activa, consulta por disuria y dolor abdominal bajo que luego se extiende al hipocondrio derecho, con leucorrea. Al examen hay dolor a la palpación hipogástrica y del hipocondrio derecho, y en el examen ginecológico se constata leucorrea, sin mal olor.',
      question: '¿Cuál es el agente etiológico más probable?',
      options: [
        { letter: 'A', text: 'Enterococcus faecalis' },
        { letter: 'B', text: 'Ureaplasma urealyticum' },
        { letter: 'C', text: 'Chlamydia trachomatis' },
        { letter: 'D', text: 'Treponema pallidum' },
        { letter: 'E', text: 'Mycoplasma genitalium' },
      ],
      correct: 'C',
      explanation: 'Dolor pélvico que se extiende al hipocondrio derecho: síndrome de Fitz-Hugh-Curtis, complicación de la enfermedad pélvica inflamatoria causada habitualmente por Chlamydia trachomatis o gonococo.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de julio de dos mil diecinueve. Mujer de veintiséis años, sexualmente activa, con disuria y dolor abdominal bajo que se extiende al hipocondrio derecho, con leucorrea sin mal olor.',
        question: '¿Cuál es el agente etiológico más probable?',
        options: 'Las opciones: Enterococcus faecalis, Ureaplasma urealyticum, Chlamydia trachomatis, Treponema pallidum, o Mycoplasma genitalium. Piénsalo.',
        answer: 'Es la C, Chlamydia trachomatis. El dolor que sube hasta el hipocondrio derecho es el síndrome de Fitz-Hugh-Curtis, la perihepatitis que acompaña a la enfermedad pélvica inflamatoria, y su causa habitual es justamente la Chlamydia, o el gonococo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Los tres de Hager', kind: 'key', items: [
          { t: 'Hipogastrio, cuello y anexos', d: 'Los tres, siempre',
            say: 'Cerremos con las reglas de oro. Los tres criterios mayores de Hager: dolor en el hipogastrio, al mover el cuello, y en los anexos.' },
          { t: 'Un menor lo refuerza', d: 'Fiebre, leucorrea o laboratorio alterado',
            say: 'Y un criterio menor lo refuerza: fiebre, leucorrea, o el laboratorio alterado.' },
        ] },
        { title: 'Gravedad', tag: 'Monif decide dónde tratar', kind: 'alert', items: [
          { t: 'Absceso tubo-ovárico: hospitalizar', d: 'Siempre',
            say: 'El absceso tubo-ovárico siempre se hospitaliza.' },
          { t: 'Sin eso: esquema oral, 14 días', d: 'Ceftriaxona, doxiciclina y metronidazol',
            say: 'Sin absceso, sin embarazo y sin peritonitis difusa, el esquema ambulatorio de catorce días funciona bien.' },
        ] },
        { title: 'Última idea', tag: 'Para el examen', kind: 'pharma', items: [
          { t: 'Dolor en hipocondrio derecho', d: 'Piensa en Fitz-Hugh-Curtis, no solo colecistitis',
            say: 'Si te llevas una sola idea de hoy: ante dolor en el hipocondrio derecho en una mujer joven con antecedente pélvico, piensa en Fitz-Hugh-Curtis antes que en la vesícula. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Enfermedad pélvica inflamatoria: diagnóstico y gravedad',
    root: N('start', 'Mujer joven con dolor pélvico', 'Sexualmente activa',
      'Partamos de la sospecha. Lo primero es aplicar los criterios de Hager.',
      ['', N('q', '¿Están los tres criterios mayores?', 'Hipogastrio, cuello y anexos',
        'Necesitas los tres presentes para diagnosticar.',
        ['No, faltan', N('ok', 'Busca otro diagnóstico', 'No es enfermedad pélvica inflamatoria',
          'Sin los tres criterios mayores, no puedes llamarlo enfermedad pélvica inflamatoria: busca otra causa del dolor.')],
        ['Sí, los tres', N('q', '¿Hay criterios de gravedad?', 'Absceso, embarazo, peritonitis o falla del tratamiento',
          'Con el diagnóstico confirmado, revisa si hay algún criterio de hospitalización.',
          ['No', N('do', 'Esquema ambulatorio, 14 días', 'Ceftriaxona + doxiciclina + metronidazol',
            'Sin criterios de gravedad, tratamiento ambulatorio con los tres antibióticos, y control en cuarenta y ocho a setenta y dos horas.')],
          ['Sí', N('alert', 'Hospitalizar, vía endovenosa', 'Mismo esquema, o clindamicina más gentamicina',
            'Con algún criterio de gravedad, hospitalizas y usas la vía endovenosa, vigilando si el absceso necesita drenaje quirúrgico.')])])]),
  },
};
