// Clase 11.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs / dataset_cirugia_bloque_1.cjs (cir-01, classId cirugia-01).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-01',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'El score que decide entre pabellón directo, imágenes o esperar',
      say: 'Bienvenido a cirugía. Empezamos con apendicitis aguda, la urgencia quirúrgica más frecuente del mundo, y probablemente el tema que más rinde en todo el examen. Hoy vas a aprender a usar el score de Alvarado para decidir en segundos si operas, pides una imagen, o esperas, y qué hacer cuando el paciente llega tarde y ya tiene un plastrón. Partamos por el mecanismo.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'De la obstrucción al dolor que migra',
      nodes: [
        { id: 'obs', col: 0, row: 1, k: 'cause', t: 'Se obstruye el apéndice', s: 'Fecalito o hiperplasia linfoide' },
        { id: 'pre', col: 1, row: 1, k: 'mech', t: 'Sube la presión interna', s: 'Bacterias proliferan adentro' },
        { id: 'vis', col: 2, row: 0, k: 'effect', t: 'Dolor visceral difuso', s: 'Epigastrio o periumbilical' },
        { id: 'mig', col: 3, row: 0, k: 'effect', t: 'Dolor migra a FID', s: '6 a 12 horas después' },
        { id: 'per', col: 2, row: 2, k: 'risk', t: 'Compromete toda la pared', s: 'Irrita el peritoneo' },
        { id: 'per2', col: 3, row: 2, k: 'alert', t: 'Necrosis y perforación', s: 'Después de 36 horas' },
      ],
      edges: [
        { from: 'obs', to: 'pre' },
        { from: 'pre', to: 'vis', label: 'fibras viscerales' },
        { from: 'pre', to: 'per', label: 'invade la pared' },
        { from: 'vis', to: 'mig' },
        { from: 'per', to: 'mig', label: 'fibras somáticas' },
        { from: 'per', to: 'per2', label: 'si se demora' },
      ],
      steps: [
        { show: ['obs'], note: 'El fecalito tapa la luz del apéndice',
          say: 'Todo parte con la obstrucción de la luz del apéndice, casi siempre por un fecalito. Guarda esta imagen, porque explica todo lo que viene.' },
        { show: ['pre'], note: 'Se acumula secreción, sube la presión',
          say: 'Con la salida tapada, se acumula secreción adentro, sube la presión, y las bacterias que viven ahí empiezan a proliferar sin control.' },
        { show: ['vis'], note: 'Fibras que no localizan bien el dolor',
          say: 'Al principio, el dolor viaja por fibras viscerales que no localizan bien: por eso el paciente te dice que le duele el epigastrio o alrededor del ombligo, no la fosa ilíaca.' },
        { show: ['per'], note: 'Ahora sí duele donde está el apéndice',
          say: 'Pero cuando la inflamación compromete toda la pared y toca el peritoneo, entran en juego fibras que sí localizan bien.' },
        { show: ['mig'], note: 'La cronología de Murphy',
          say: 'Y ahí tienes la migración clásica: entre seis y doce horas después, el dolor se traslada a la fosa ilíaca derecha y se vuelve punzante y continuo. Esto se llama la cronología de Murphy, y es el dato más específico que puedes preguntar en la anamnesis.' },
        { show: ['per2'], note: 'Después de 36 horas el riesgo se dispara',
          say: 'Si nadie opera a tiempo, después de treinta y seis horas el apéndice se necrosa y se perfora. La tasa de perforación pasa de menos de cinco por ciento en las primeras horas a más de treinta por ciento pasado ese plazo. Por eso el tiempo es tan importante en este tema.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Examen físico',
      title: 'Los signos que confirman la fosa ilíaca derecha',
      cards: [
        { title: 'Signos clásicos', tag: 'Irritación peritoneal', kind: 'key', items: [
          { t: 'McBurney', d: 'Dolor exquisito en ese punto exacto',
            say: 'Fíjate en los signos que se preguntan. McBurney es el dolor exquisito justo en la unión del tercio externo con los dos tercios internos de la línea que va del ombligo a la cadera.' },
          { t: 'Blumberg', d: 'Dolor al soltar la mano de golpe',
            say: 'Blumberg es el dolor al descomprimir bruscamente, el típico rebote.' },
          { t: 'Rovsing', d: 'Duele a la derecha al comprimir la izquierda',
            say: 'Y Rovsing es cuando comprimes la fosa ilíaca izquierda y el dolor aparece a la derecha, porque el gas se desplaza hacia allá y estira el peritoneo inflamado. Ninguno de estos tres signos aparece solo: se preguntan juntos, como un conjunto que confirma la irritación peritoneal focal.' },
        ] },
        { title: 'Posiciones atípicas', tag: 'Ojo con la posición del apéndice', kind: 'alert', items: [
          { t: 'Psoas', d: 'Apéndice retrocecal: duele al estirar la cadera',
            say: 'Y hay dos signos que te delatan dónde está el apéndice. El signo del psoas, dolor al estirar la cadera hacia atrás, te dice que el apéndice está retrocecal.' },
          { t: 'Obturador', d: 'Apéndice pelviano: duele al rotar la cadera',
            say: 'El signo del obturador, dolor al rotar la cadera flexionada hacia adentro, te dice que el apéndice está en la pelvis. Acuérdate de estos dos: son la trampa cuando el cuadro no es tan típico.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'El score de Alvarado decide el siguiente paso',
      nodes: [
        { id: 'sco', col: 0, row: 1, k: 'start', t: 'Score de Alvarado', s: 'Hasta 10 puntos' },
        { id: 'baj', col: 1, row: 0, k: 'good', t: '0 a 3 puntos', s: 'Muy poco probable' },
        { id: 'med', col: 1, row: 1, k: 'q', t: '4 a 6 puntos', s: 'Probabilidad intermedia' },
        { id: 'alt', col: 1, row: 2, k: 'risk', t: '7 a 10 puntos', s: 'Alta probabilidad' },
        { id: 'obs2', col: 2, row: 0, k: 'good', t: 'Observar', s: 'Buscar otra causa' },
        { id: 'img', col: 2, row: 1, k: 'refer', t: 'Pedir imagen', s: 'TAC o ecografía' },
        { id: 'pab', col: 2, row: 2, k: 'alert', t: 'Pabellón directo', s: 'Sin esperar ninguna imagen' },
      ],
      edges: [
        { from: 'sco', to: 'baj' }, { from: 'sco', to: 'med' }, { from: 'sco', to: 'alt' },
        { from: 'baj', to: 'obs2' }, { from: 'med', to: 'img' }, { from: 'alt', to: 'pab' },
      ],
      steps: [
        { show: ['sco'], note: 'Suma síntomas, signos y laboratorio',
          say: 'Con toda esa clínica arma el score de Alvarado. Suma migración del dolor, anorexia, náuseas, dolor en la fosa ilíaca derecha que vale dos puntos, rebote, fiebre sobre treinta y siete coma tres, y dos hallazgos de laboratorio: leucocitos sobre diez mil, que también vale dos puntos, y neutrofilia.' },
        { show: ['baj'], note: 'Busca otro diagnóstico',
          say: 'Con cero a tres puntos, la apendicitis es muy poco probable: observas y buscas otra causa.' },
        { show: ['med'], note: 'Aquí sí necesitas una imagen',
          say: 'Con cuatro a seis, la probabilidad es intermedia, y ahí sí necesitas una imagen. Y aquí hay un matiz que se pregunta: en mujeres en edad fértil, niños y embarazadas pides imagen aunque el score no llegue a seis, porque los diagnósticos diferenciales son distintos.' },
        { show: ['alt'], note: 'Aquí el examen espera que operes ya',
          say: 'Y con siete a diez puntos, en un hombre joven con clínica típica, vas directo a pabellón. No pierdas tiempo pidiendo un TAC que solo demora la cirugía y aumenta el riesgo de que el apéndice termine perforándose mientras esperas el resultado.' },
        { show: ['img'], note: 'TAC en adultos, ecografía en niños y embarazadas',
          say: 'Cuando toca pedir imagen: en el adulto no embarazada, el TAC de abdomen y pelvis con contraste es el estándar de oro. En niños, mujeres jóvenes y embarazadas, empiezas con ecografía, para no dar radiación de más.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuando el paciente llega tarde',
      title: 'Plastrón y absceso: no siempre se opera de urgencia',
      cards: [
        { title: 'Plastrón apendicular', tag: 'Más de 5 días de evolución', kind: 'criteria', items: [
          { t: 'Masa firme en la FID', d: 'El epiplón contuvo la perforación',
            say: 'Ahora, un escenario distinto. Si el paciente lleva varios días, más de cinco, puede que el epiplón haya contenido la perforación y se forme una masa firme y dolorosa: el plastrón apendicular.' },
          { t: 'Tratamiento médico primero', d: 'Antibióticos, y cirugía recién en 8 a 12 semanas',
            say: 'Aquí no operas de entrada. Tratas con antibióticos, y programas la apendicectomía electiva ocho a doce semanas después. Si operas de urgencia sobre un plastrón, el riesgo de terminar sacando parte del intestino es alto.' },
        ] },
        { title: 'Absceso organizado', tag: 'Colección con pus', kind: 'alert', items: [
          { t: 'Drenaje percutáneo', d: 'Guiado por TAC o ecografía',
            say: 'Y si el TAC muestra que ya hay una colección de pus formada, en vez de un flemón sólido, la conducta cambia: drenaje percutáneo guiado por imagen, más antibióticos. La cirugía de urgencia queda solo para la peritonitis generalizada o si el tratamiento falla.' },
          { t: 'Distinguir flemón de absceso', d: 'Es el TAC el que separa a uno de otro',
            say: 'La diferencia entre estos dos escenarios no la das tú con la mano: la da el TAC. Un flemón es sólido y se trata con antibióticos; un absceso tiene líquido adentro y ese líquido hay que drenarlo. Confundir uno con otro es justamente lo que el examen te pone a prueba.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Cirugía y antibióticos: cómo y por cuánto tiempo',
      cards: [
        { title: 'Vía de abordaje', tag: 'Laparoscopía es la regla', kind: 'key', items: [
          { t: 'Laparoscópica de elección', d: 'Menos dolor, menos infección de herida',
            say: 'Vamos al tratamiento. La apendicectomía laparoscópica es la vía de elección: duele menos, la herida se infecta menos, y de paso te deja ver los ovarios si hay duda con un diagnóstico ginecológico.' },
        ] },
        { title: 'No complicada', tag: 'Dosis única', kind: 'pharma', items: [
          { t: 'Cefazolina más metronidazol', d: 'Una sola dosis antes de la incisión',
            say: 'Si el apéndice está catarral o flegmonoso, sin perforar, la profilaxis es cefazolina más metronidazol, en una sola dosis antes de cortar. Nada de continuar antibióticos después: no baja infecciones y sí suma resistencia y costos.' },
        ] },
        { title: 'Perforada con peritonitis', tag: 'Ahora sí varios días', kind: 'alert', items: [
          { t: 'Ceftriaxona más metronidazol', d: 'Tres a cinco días, hasta que baje la fiebre',
            say: 'Distinto es si ya perforó y hay peritonitis: ahí sí mantienes ceftriaxona más metronidazol, tres a cinco días, hasta que el paciente esté sin fiebre y con los leucocitos normales. La diferencia la marca si perforó o no, no cuánto te demoraste en operar.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo esto en un solo árbol, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en apendicitis',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Hombre joven, Alvarado 7 a 10', 'Apendicectomía directa', 'Pedir TAC antes de operar'],
          say: 'Repasemos las trampas. Hombre joven con Alvarado alto: apendicectomía directa. El error es pedir un TAC que solo retrasa la cirugía.' },
        { cells: ['Mujer en edad fértil o niño', 'Ecografía primero', 'Pedir TAC de entrada'],
          say: 'En mujeres jóvenes o niños, la ecografía va primero. El error es saltarse ese paso y pedir TAC de entrada, exponiendo a radiación innecesaria.' },
        { cells: ['Plastrón flemoso, sin colección', 'Antibióticos y cirugía diferida', 'Operar de urgencia'],
          say: 'Plastrón sin colección líquida: antibióticos y cirugía diferida. Operar de urgencia aquí es la respuesta incorrecta más clásica.' },
        { cells: ['Apendicitis no perforada', 'Antibiótico en dosis única', 'Mantener antibióticos varios días'],
          say: 'Y en la apendicitis no perforada, el antibiótico es una sola dosis antes de la cirugía. Mantenerlo varios días después no cambia nada y es un error que se pregunta seguido.' },
        { cells: ['Duda entre torsión ovárica y apendicitis', 'Ecografía ginecológica primero', 'Operar sin descartar la causa ginecológica'],
          say: 'Y una última que ya viste en el caso de la mujer joven: si hay duda con la fosa ilíaca derecha en una mujer, la ecografía ginecológica va primero. Operar directo sin mirar los anexos te puede hacer perder una torsión ovárica que también corre contra el tiempo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 22 años consulta por dolor que comenzó hace 14 horas en el epigastrio y hace 4 horas se trasladó a la fosa ilíaca derecha. Tiene anorexia y una náusea. Temperatura 37,6 grados, dolor exquisito en McBurney con Blumberg positivo. Leucocitos 12.500 con 78% de neutrófilos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar TAC de abdomen y pelvis antes de decidir' },
        { letter: 'B', text: 'Indicar profilaxis antibiótica y apendicectomía directa' },
        { letter: 'C', text: 'Solicitar ecografía abdominal de urgencia' },
        { letter: 'D', text: 'Iniciar antibióticos orales y observar 24 horas' },
        { letter: 'E', text: 'Solicitar radiografía simple de abdomen de pie' },
      ],
      correct: 'B',
      explanation: 'El caso suma 8 puntos en el score de Alvarado: migración (1), anorexia (1), náuseas (1), dolor en FID (2), Blumberg (1), neutrofilia (1) y leucocitosis (2). En un hombre joven con esta clínica y score alto, la conducta es apendicectomía directa, sin necesidad de imágenes.',
      say: {
        stem: 'Vamos con un caso. Hombre de veintidós años, con dolor que empezó hace catorce horas en el epigastrio y hace cuatro horas se trasladó a la fosa ilíaca derecha. Tiene anorexia y una náusea. Temperatura de treinta y siete coma seis, dolor exquisito en McBurney con Blumberg positivo, y doce mil quinientos leucocitos con setenta y ocho por ciento de neutrófilos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: pedir un TAC antes de decidir, dar profilaxis antibiótica y operar directo, pedir una ecografía urgente, dar antibióticos orales y observar, o pedir una radiografía simple. Piénsalo.',
        answer: 'Es la B. Súmale los puntos: migración, anorexia, náuseas, dos por el dolor en la fosa ilíaca derecha, rebote, dos por la leucocitosis y uno por la neutrofilia. Da ocho puntos, alta probabilidad. En un hombre joven con este cuadro, no necesitas ninguna imagen: profilaxis antibiótica y apendicectomía directa. Pedir TAC o ecografía aquí solo demora una cirugía que ya está indicada, y encima expone al paciente a radiación o a un examen que no va a cambiar tu conducta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 68',
      stem: 'Niña de 7 años con 12 horas de fiebre y dolor hipogástrico. Temperatura 38,7 grados, frecuencia cardíaca 100, presión arterial 100/60. Dolor a la palpación de hipogastrio, Blumberg positivo y resistencia de la pared abdominal. Leucocitos 18.000. Sedimento urinario con 20 leucocitos por campo. Proteína C reactiva 15.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Pielonefritis aguda' },
        { letter: 'B', text: 'Apendicitis aguda' },
        { letter: 'C', text: 'ITU baja' },
        { letter: 'D', text: 'Torsión ovárica' },
        { letter: 'E', text: 'Plastrón apendicular' },
      ],
      correct: 'B',
      explanation: 'Fiebre, Blumberg positivo, resistencia muscular y leucocitosis marcan una irritación peritoneal focal, propia de apendicitis aguda. Los leucocitos en la orina pueden verse por vecindad de un apéndice inflamado pegado a la vejiga, y no bastan para diagnosticar una infección urinaria por sí solos.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil dieciséis. Niña de siete años, con doce horas de fiebre y dolor en el hipogastrio. Temperatura de treinta y ocho coma siete, frecuencia cardíaca de cien, dolor a la palpación con Blumberg positivo y resistencia de la pared. Dieciocho mil leucocitos, y el sedimento de orina muestra veinte leucocitos por campo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: pielonefritis aguda, apendicitis aguda, infección urinaria baja, torsión ovárica, o plastrón apendicular. Piénsalo.',
        answer: 'Es la B, apendicitis aguda. Fíjate en el distractor: los leucocitos en la orina tientan a pensar en una infección urinaria, pero un apéndice inflamado que toca la vejiga puede irritarla y dar ese mismo hallazgo, sin que exista infección urinaria real. Lo que manda acá es el Blumberg positivo con resistencia muscular: eso es irritación peritoneal, no una simple cistitis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 62',
      stem: 'Mujer de 25 años con dolor abdominal intenso, mayor en la fosa ilíaca derecha y el hipogastrio, EVA 8/10. Frecuencia cardíaca 90, presión arterial 110/70, abdomen doloroso a la palpación de ambas fosas ilíacas. Dos horas después, presenta deterioro marcado, con frecuencia cardíaca de 120 y presión arterial de 80/40.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Apendicitis aguda' },
        { letter: 'B', text: 'Perforación intestinal' },
        { letter: 'C', text: 'Torsión ovárica' },
        { letter: 'D', text: 'Absceso tubo-ovárico roto' },
        { letter: 'E', text: 'Embarazo ectópico roto' },
      ],
      correct: 'A',
      explanation: 'El dolor bilateral en ambas fosas ilíacas con deterioro hemodinámico brusco en pocas horas corresponde a una apendicitis que perforó y generó una peritonitis con shock séptico incipiente. Los diferenciales ginecológicos no explican igual de bien la instalación tan rápida del shock sobre un dolor que ya venía siendo bilateral.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil veintidós. Mujer de veinticinco años, con dolor abdominal intenso en la fosa ilíaca derecha y el hipogastrio. Dos horas después de llegar a urgencias, se descompensa: la frecuencia cardíaca sube a ciento veinte y la presión baja a ochenta sobre cuarenta.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: apendicitis aguda, perforación intestinal, torsión ovárica, absceso tubo-ovárico roto, o embarazo ectópico roto. Piénsalo.',
        answer: 'La respuesta es la A. El punto clave es la velocidad del deterioro: en dos horas pasa de un dolor abdominal a un shock franco. Eso habla de una apendicitis que ya se perforó y está generando una peritonitis séptica. Los diagnósticos ginecológicos son tentadores por ser mujer joven, pero ninguno explica tan bien ese colapso hemodinámico tan rápido sobre un dolor que ya afectaba ambas fosas ilíacas.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'El score manda', kind: 'key', items: [
          { t: 'Alvarado 7 a 10', d: 'Pabellón directo, sin imágenes',
            say: 'Cerremos con las reglas de oro. Con Alvarado alto en un cuadro típico, vas directo a pabellón.' },
          { t: 'Score intermedio', d: 'TAC en adultos, ecografía en niños y embarazadas',
            say: 'Con score intermedio, pides imagen: TAC en el adulto, ecografía si es niño, mujer joven o embarazada.' },
        ] },
        { title: 'Tratamiento', tag: 'Dosis única', kind: 'pharma', items: [
          { t: 'Profilaxis en dosis única', d: 'No se prolonga si no está perforada',
            say: 'En apendicitis no perforada, el antibiótico es dosis única antes de operar. Nada más.' },
        ] },
        { title: 'Cuando llega tarde', tag: 'No siempre se opera ya', kind: 'alert', items: [
          { t: 'Plastrón: antibióticos primero', d: 'Cirugía electiva en 8 a 12 semanas',
            say: 'Y si el paciente llega con un plastrón, no operas de entrada: antibióticos, y cirugía electiva más adelante, cuando la inflamación ya bajó y disecar es seguro.' },
          { t: 'Mujer joven con duda', d: 'Ecografía ginecológica antes de operar',
            say: 'Si te llevas una sola idea de hoy: el score de Alvarado te dice cuándo operar sin pensarlo, y cuándo detenerte a mirar una imagen, sobre todo en mujeres jóvenes, niños y embarazadas. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Apendicitis aguda: del dolor al pabellón',
    root: N('start', 'Sospecha de apendicitis', 'Dolor que migra a la FID',
      'Un paciente llega con dolor que migró del epigastrio a la fosa ilíaca derecha. Antes de examinar más, arma el score de Alvarado: ahí está la decisión completa.',
      ['', N('q', '¿Cuántos puntos suma?', 'El score decide el siguiente paso',
        'Suma migración, anorexia, náuseas, dolor y rebote en la fosa ilíaca derecha, fiebre, leucocitosis y neutrofilia.',
        ['0 a 3 puntos', N('ok', 'Poco probable', 'Buscar otro diagnóstico',
          'Con un score bajo, la apendicitis es poco probable: observas y piensas en otra causa del dolor.')],
        ['4 a 6 puntos', N('q', 'Probabilidad intermedia', '¿Es hombre joven o no?',
          'Con score intermedio necesitas una imagen antes de decidir, y el examen elegido cambia según el paciente.',
          ['Adulto no embarazada', N('do', 'TAC de abdomen y pelvis', 'Con contraste intravenoso',
            'En el adulto que no está embarazada, el TAC con contraste es el estándar de oro para confirmar o descartar.')],
          ['Niño, mujer joven o embarazada', N('do', 'Ecografía abdominal', 'Evita la radiación',
            'En niños, mujeres en edad fértil y embarazadas, empiezas con ecografía para no exponer a radiación de más.')])],
        ['7 a 10 puntos', N('alert', 'Alta probabilidad', 'Pabellón sin esperar imágenes',
          'Con score alto y clínica típica, no pierdes tiempo: profilaxis antibiótica en dosis única y apendicectomía directa.')])],
      ['', N('q', '¿Cuántos días de evolución trae?', 'Cambia todo si llega tarde',
        'Si el paciente lleva varios días de evolución, antes de pensar en cirugía de urgencia pregúntate si ya se formó una masa.',
        ['Más de 5 días, masa firme', N('alert', 'Plastrón apendicular', 'Antibióticos primero, cirugía en 8 a 12 semanas',
          'Con un plastrón flemoso, sin colección líquida, tratas con antibióticos y difieres la cirugía ocho a doce semanas.')],
        ['Colección con pus en el TAC', N('refer', 'Drenaje percutáneo', 'Guiado por TAC o ecografía',
          'Si ya hay un absceso organizado, el drenaje percutáneo guiado por imagen resuelve el foco sin necesidad de laparotomía.')])]),
  },
};
