// Clase 2.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-08).
// Revisión: se separan las secciones 1 (definiciones) y 2 (planes de hidratación) del
// libro, que estaban fusionadas en una diapositiva; se agrega la tabla de planes A/B/C
// del libro, que no estaba; se reemplaza el caso representativo (C. difficile) por la
// misma situación clínica encontrada como pregunta real y fechada del banco, y se agregan
// dos preguntas reales más (una de diagnóstico diferencial en diarrea aguda, otra sobre
// el plan de hidratación C y una sobre constipación con alarma en el adulto).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-08',
  tier: 1,
  slides: [
    {
      type: 'cover',
      subtitle: 'Hidratar bien, no dar de más, y cuándo estudiar',
      say: 'Bienvenidos. Hoy vemos diarrea aguda, diarrea crónica y constipación. En la diarrea aguda casi todo el examen se resume en una idea: hidratar bien y no dar de más. Y cuando la diarrea se hace crónica, el eje pasa a ser los signos de alarma. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Definiciones',
      title: 'La regla de los tres: diarrea y constipación',
      cards: [
        { title: 'Diarrea', tag: 'Regla de los 3', kind: 'key', items: [
          { t: 'Más de 3 al día', d: 'Y de menor consistencia',
            say: 'Primero las definiciones, con la regla de los tres. Diarrea son deposiciones de menor consistencia, más de tres al día.' },
          { t: 'Aguda < 2 sem · prolongada 2–4 · crónica ≥ 4', d: 'El tiempo clasifica',
            say: 'Por duración, la diarrea es aguda si dura menos de dos semanas, prolongada entre dos y cuatro, y crónica desde las cuatro semanas.' },
        ] },
        { title: 'Constipación', tag: 'Lo inverso', kind: 'normal', items: [
          { t: 'Menos de 3 a la semana', d: 'Deposiciones duras',
            say: 'Y constipación es lo inverso: deposiciones duras, menos de tres a la semana.' },
        ] },
        { title: 'Diarrea aguda', tag: 'Casi siempre viral', kind: 'criteria', items: [
          { t: 'Infecciosa, más viral que bacteriana', d: 'Diagnóstico clínico',
            say: 'La aguda es casi siempre infecciosa, y más viral que bacteriana. Por eso no se estudia la causa: el diagnóstico es clínico y el manejo, sintomático.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Hidratación',
      title: 'La deshidratación decide el plan',
      nodes: [
        { id: 'agu', col: 0, row: 1, k: 'start', t: 'Diarrea aguda', s: '¿Cuánto perdió de peso?' },
        { id: 'pa', col: 1, row: 0, k: 'good', t: 'Plan A: < 5 %', s: 'SRO 100–200 mL tras cada deposición' },
        { id: 'pb', col: 1, row: 1, k: 'effect', t: 'Plan B: 5–10 %', s: 'SRO 50–100 mL/kg en 4–6 h' },
        { id: 'pc', col: 1, row: 2, k: 'alert', t: 'Plan C: > 10 % o shock', s: 'Cristaloides endovenosos' },
        { id: 'hip', col: 2, row: 2, k: 'trap', t: 'Hipernatremia', s: 'Soluciones hipotónicas o glucosalinas' },
      ],
      edges: [
        { from: 'agu', to: 'pa', label: 'sin deshidratación' },
        { from: 'agu', to: 'pb', label: 'moderada' },
        { from: 'agu', to: 'pc', label: 'grave' },
        { from: 'pc', to: 'hip' },
      ],
      steps: [
        { show: ['agu'], note: 'Lo que sí se evalúa siempre',
          say: 'Ahora, lo que sí se evalúa en toda diarrea aguda es la deshidratación, porque decide el plan.' },
        { show: ['pa'], note: 'En domicilio',
          say: 'Sin deshidratación, o con pérdida de peso menor al cinco por ciento: plan A. Sales de rehidratación oral, cien a doscientos mililitros después de cada deposición, en la casa.' },
        { show: ['pb'], note: 'Irritable, mucosas secas, ojos hundidos',
          say: 'Deshidratación moderada, entre cinco y diez por ciento, con irritabilidad, mucosas secas y ojos hundidos: plan B. Sales orales de cincuenta a cien mililitros por kilo en cuatro a seis horas, reevaluando. Si vomita, se fracciona a sorbos. Fíjate que sigue siendo por boca.' },
        { show: ['pc'], note: 'Shock, compromiso de conciencia, íleo, vómitos incoercibles',
          say: 'Plan C es la deshidratación grave, sobre diez por ciento, o cuando la vía oral no es posible: shock, compromiso de conciencia, íleo o vómitos incoercibles. Ahí se hidrata por vena, con suero fisiológico o Ringer lactato.' },
        { show: ['hip'], note: 'Detalle que se pregunta',
          say: 'Y un detalle: si hay hipernatremia, se prefieren soluciones hipotónicas o glucosalinas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Fármacos',
      title: 'Qué se da y qué no en la diarrea aguda',
      cards: [
        { title: 'Contraindicado', tag: 'Trampa clásica', kind: 'alert', items: [
          { t: 'Loperamida', d: 'Aumenta las complicaciones',
            say: 'Ahora los fármacos, y aquí está la trampa más clásica. En la diarrea aguda infecciosa no se usan antidiarreicos como la loperamida: frenar el intestino deja al germen adentro y aumenta el riesgo de complicaciones.' },
          { t: 'Sí: antieméticos y antiespasmódicos', d: 'Para el confort',
            say: 'Lo que sí puedes dar, para el confort, son antieméticos y antiespasmódicos.' },
        ] },
        { title: 'Antibiótico: solo si…', tag: 'La excepción', kind: 'criteria', items: [
          { t: 'Disentería', d: 'Sangre: Shigella, E. coli enteroinvasora',
            say: 'El antibiótico es la excepción, no la regla. Se indica en cuatro situaciones. Primera, disentería, es decir, sangre en las deposiciones, que hace pensar en Shigella o E. coli enteroinvasora.' },
          { t: 'Viajero, fiebre > 2–3 días o sepsis', d: 'Las otras tres indicaciones',
            say: 'Las otras tres son la diarrea del viajero, la fiebre que persiste más de dos o tres días, y el paciente séptico. Fuera de eso, el antibiótico rara vez cambia el curso.' },
        ] },
        { title: 'Elección', tag: 'Adulto', kind: 'pharma', items: [
          { t: 'Ciprofloxacino oral', d: 'Ceftriaxona EV si es grave',
            say: 'Y cuando se indica, el de elección es ciprofloxacino oral, o ceftriaxona endovenosa si el cuadro es grave.' },
          { t: 'Cólera o Campylobacter', d: 'Azitromicina',
            say: 'Dos excepciones: en el cólera y en el Campylobacter, azitromicina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Prolongada, crónica y constipación',
      title: 'Cuando la diarrea no se va',
      cards: [
        { title: 'Prolongada: 2 a 4 semanas', tag: 'Buscar el agente', kind: 'key', items: [
          { t: 'Coprocultivo + parasitológico seriado', d: 'Giardia, Entamoeba; rotatest',
            say: 'Si la diarrea pasa las dos semanas, ahora sí buscamos el agente: coprocultivo, parasitológico seriado buscando Giardia y Entamoeba, y rotatest.' },
          { t: 'Post antibiótico: C. difficile', d: 'PCR de toxina · metronidazol → vancomicina',
            say: 'Y si usó antibióticos en el último mes, sospecha Clostridioides difficile. Se diagnostica con PCR de toxina y se trata con metronidazol, y si falla, vancomicina oral. Ojo: la respuesta se evalúa por la clínica, no repitiendo la PCR.' },
        ] },
        { title: 'Crónica: 4 semanas o más', tag: 'Según la clínica', kind: 'criteria', items: [
          { t: 'Funcional, malabsorción, EII', d: 'SII · Sudán, D-xilosa · colonoscopía',
            say: 'La diarrea crónica se orienta por la clínica, y cada rama tiene su clase: funcional, como el intestino irritable; malabsorción, que vemos en la próxima clase con el Sudán y la D-xilosa; o enfermedad inflamatoria, que se estudia con colonoscopía.' },
          { t: 'Con alarma: colonoscopía', d: 'Descartar cáncer de colon',
            say: 'Y si hay signos de alarma, colonoscopía para descartar un cáncer de colon.' },
        ] },
        { title: 'Constipación', tag: 'Casi siempre funcional', kind: 'normal', items: [
          { t: 'Fibra, agua, educación', d: 'Proquinéticos si hace falta',
            say: 'La constipación casi siempre es funcional: educación, fibra, agua y proquinéticos. Pero en un adulto mayor con signos de alarma, la conducta es la misma que en la diarrea: colonoscopía.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Pongamos todo en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Diarrea aguda: plan de hidratación',
      head: ['Plan', 'Estado del paciente', 'Conducta'],
      rows: [
        { cells: ['A', 'Sin deshidratación (< 5 % pérdida de peso)', 'SRO 100–200 mL post deposición, en casa'],
          say: 'Repasemos los planes. Plan A, sin deshidratación, menos del cinco por ciento de pérdida de peso: sales de rehidratación oral en la casa.' },
        { cells: ['B', 'Deshidratación moderada (5–10 %): irritable, mucosas secas, ojos hundidos', 'SRO 50–100 mL/kg en 4–6 h y reevaluar'],
          say: 'Plan B, deshidratación moderada, entre cinco y diez por ciento: sales orales según el peso, y reevaluar en cuatro a seis horas.' },
        { cells: ['C', 'Deshidratación grave (> 10 %), shock, compromiso de conciencia, íleo, vómitos incoercibles', 'Cristaloides endovenosos'],
          say: 'Y plan C, deshidratación grave o shock: cristaloides por vena.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 34 años con 2 días de diarrea con sangre, dolor cólico y fiebre de 39 °C. Hemodinámicamente estable, tolera líquidos por boca, sin signos de deshidratación.',
      question: 'Además de la hidratación oral, ¿cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Loperamida oral' },
        { letter: 'B', text: 'Ciprofloxacino oral' },
        { letter: 'C', text: 'Solo sales de rehidratación, sin otros fármacos' },
        { letter: 'D', text: 'Colonoscopía urgente' },
        { letter: 'E', text: 'Vancomicina oral' },
      ],
      correct: 'B',
      explanation: 'Disentería (sangre en las deposiciones) es una de las indicaciones de antibiótico en la diarrea aguda: ciprofloxacino oral, o ceftriaxona endovenosa si es grave. La loperamida está contraindicada. La vancomicina es para C. difficile, que exige uso previo de antibióticos.',
      say: {
        stem: 'Vamos al caso. Hombre de treinta y cuatro años con dos días de diarrea con sangre, dolor cólico y fiebre de treinta y nueve grados. Está estable, tolera líquidos por boca y no está deshidratado.',
        question: 'Además de hidratarlo, ¿cuál es la conducta más adecuada?',
        options: 'Las alternativas: loperamida, ciprofloxacino oral, solo sales sin otros fármacos, colonoscopía urgente, o vancomicina oral. Piénsalo.',
        answer: 'Es la B. Diarrea con sangre es disentería, y esa es una de las cuatro indicaciones de antibiótico: ciprofloxacino oral. La C sería correcta en la gran mayoría de las diarreas agudas, pero aquí el caso te pone sangre justamente para sacarte de la regla. Y la loperamida, nunca en una diarrea infecciosa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 30',
      stem: 'Un paciente de 34 años lleva 48 horas con dolor abdominal tipo cólico, que ha ido en aumento, asociado a deposiciones líquidas abundantes y sensación febril. Al examen físico tiene temperatura axilar de 37,1 °C, frecuencia cardíaca de 80, presión arterial 120/80, dolor a la palpación del abdomen, mayor en la fosa ilíaca derecha, sin signo de Blumberg. Una ecografía abdominal muestra inflamación del íleon distal y del colon derecho, y el apéndice con leve edema de la pared y un coprolito en su base.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Apendicitis aguda' },
        { letter: 'B', text: 'Enteritis infecciosa' },
        { letter: 'C', text: 'Diverticulitis aguda' },
        { letter: 'D', text: 'Enfermedad de Crohn' },
        { letter: 'E', text: 'Colitis isquémica' },
      ],
      correct: 'B',
      explanation: 'El dolor en fosa ilíaca derecha con diarrea, fiebre baja y sin signo de Blumberg, con inflamación difusa del íleon y del colon derecho en la ecografía (no solo del apéndice), orienta a una enteritis infecciosa que compromete la zona ileocecal; el edema leve del apéndice y el coprolito son un hallazgo acompañante, no el foco principal.',
      say: {
        stem: 'Vamos con una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Paciente de treinta y cuatro años con dos días de dolor abdominal tipo cólico, en aumento, deposiciones líquidas abundantes y sensación febril. No tiene signo de Blumberg, y la ecografía muestra inflamación del íleon distal y del colon derecho, con el apéndice apenas edematoso y un coprolito en su base.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las alternativas: apendicitis aguda, enteritis infecciosa, diverticulitis aguda, enfermedad de Crohn, o colitis isquémica. Piénsalo.',
        answer: 'Es la B, enteritis infecciosa. El coprolito y el dolor en la fosa ilíaca derecha tientan hacia la apendicitis, pero la ecografía muestra la inflamación repartida en el íleon y el colon derecho, no concentrada en el apéndice, que además está apenas edematoso y sin signo de Blumberg. Es un cuadro de diarrea aguda que se disfraza de abdomen agudo quirúrgico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 132',
      stem: 'Un paciente es hospitalizado durante 10 días por una neumonía neumocócica adquirida en la comunidad. Algunos días después de ser dado de alta, presenta diarrea líquida abundante, con 5 a 6 evacuaciones al día, asociada a dolor abdominal, malestar general y febrículas hasta 37,3 °C.',
      question: '¿Cuál es el examen de elección para continuar el estudio?',
      options: [
        { letter: 'A', text: 'Colonoscopía' },
        { letter: 'B', text: 'Parasitológico ampliado de deposiciones' },
        { letter: 'C', text: 'Coprocultivo' },
        { letter: 'D', text: 'PCR para Clostridioides difficile' },
        { letter: 'E', text: 'Ecografía abdominal' },
      ],
      correct: 'D',
      explanation: 'Diarrea que aparece después de una hospitalización con uso de antibióticos obliga a descartar Clostridioides difficile. El examen de elección es la PCR de toxina en deposiciones, que reemplazó a las pruebas de toxina A y B.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil veinticuatro. Paciente hospitalizado diez días por una neumonía, que después del alta presenta diarrea líquida abundante, cinco a seis veces al día, con dolor abdominal y febrículas.',
        question: '¿Cuál es el examen de elección para continuar el estudio?',
        options: 'Las opciones: colonoscopía, parasitológico ampliado, coprocultivo, PCR para Clostridioides difficile, o ecografía abdominal. Piénsalo.',
        answer: 'Es la D. Diarrea que aparece tras una hospitalización con antibióticos es Clostridioides difficile hasta demostrar lo contrario, y el examen de elección es la PCR de toxina en deposiciones. El coprocultivo tienta, porque suena razonable pedirlo primero, pero no detecta esta bacteria de la forma en que la detecta la PCR.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 50',
      stem: 'Un paciente de 70 años consulta por un cuadro de varios meses de evolución de constipación, alternado con diarrea. Su examen físico no aporta mayor información. En sus exámenes destaca hematocrito de 36 % y hemoglobina de 12 g/dL.',
      question: '¿Qué examen debe solicitarse a continuación?',
      options: [
        { letter: 'A', text: 'Test de sangre oculta en deposiciones' },
        { letter: 'B', text: 'Ecografía abdominal' },
        { letter: 'C', text: 'TAC de abdomen y pelvis' },
        { letter: 'D', text: 'Colonoscopía' },
        { letter: 'E', text: 'Rectosigmoidoscopía' },
      ],
      correct: 'D',
      explanation: 'Constipación que alterna con diarrea (cambio del hábito intestinal) en un adulto mayor de 50 años es una señal de alarma que obliga a descartar cáncer de colon con colonoscopía, aunque los exámenes básicos aún estén casi normales.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de julio de dos mil dieciséis. Paciente de setenta años con varios meses de constipación que alterna con diarrea. Su hematocrito y su hemoglobina están casi normales.',
        question: '¿Qué examen debe solicitarse a continuación?',
        options: 'Las opciones: sangre oculta en deposiciones, ecografía abdominal, TAC de abdomen y pelvis, colonoscopía, o rectosigmoidoscopía. Piénsalo.',
        answer: 'Es la D, colonoscopía. Setenta años y un cambio del hábito intestinal, que alterna constipación con diarrea, son dos señales de alarma: la edad de inicio y el cambio reciente del patrón. Aunque el hematocrito casi no esté alterado, esa combinación en un adulto mayor obliga a descartar cáncer de colon con colonoscopía.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diarrea aguda', tag: 'Hidratar', kind: 'key', items: [
          { t: 'Plan A, B o C', d: 'Según el grado de deshidratación',
            say: 'Cerremos con las reglas de oro. En la diarrea aguda, el tratamiento es la hidratación, con el plan A, B o C según el grado de deshidratación.' },
          { t: 'Sin loperamida', d: 'Antibiótico solo si disentería, viajero, fiebre o sepsis',
            say: 'Nunca loperamida, y antibiótico solo si hay disentería, diarrea del viajero, fiebre persistente o sepsis, con ciprofloxacino.' },
        ] },
        { title: 'Más allá de dos semanas', tag: 'Estudiar', kind: 'alert', items: [
          { t: 'Post antibiótico: C. difficile', d: 'PCR de toxina, sin PCR de control',
            say: 'Si hubo antibióticos el último mes, Clostridioides difficile, con PCR de toxina y sin PCR de control.' },
          { t: 'Alarma: colonoscopía', d: 'Diarrea crónica o constipación',
            say: 'Y diarrea crónica o constipación con alarma en un adulto mayor: colonoscopía. Si te llevas una sola idea de hoy: la diarrea aguda se hidrata, no se frena. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Diarrea del adulto: el tiempo define el estudio',
    root: N('start', 'Diarrea', 'Más de 3 deposiciones al día',
      'Diarrea es más de tres deposiciones al día de menor consistencia. La primera pregunta es cuánto tiempo lleva.',
      ['', N('q', '¿Cuánto tiempo lleva?', 'Aguda · prolongada · crónica',
        '¿Menos de dos semanas, entre dos y cuatro, o cuatro semanas o más?',
        ['< 2 semanas', N('do', 'Hidratar: Plan A, B o C', 'Sin antidiarreicos',
          'La diarrea aguda es casi siempre viral. El manejo es la hidratación según el plan A, B o C. La loperamida está contraindicada.',
          ['', N('q', '¿Disentería, viajero o sepsis?', 'O fiebre persistente > 2–3 días',
            '¿Hay sangre en las deposiciones, es diarrea del viajero, fiebre persistente o sepsis?',
            ['SÍ', N('alert', 'Ciprofloxacino', 'Ceftriaxona si es grave',
              'Solo entonces se indica antibiótico: ciprofloxacino oral, o ceftriaxona endovenosa si es grave.')],
            ['NO', N('ok', 'Manejo sintomático', 'Antieméticos si vomita',
              'Si no, manejo sintomático: se pueden usar antieméticos y antiespasmódicos.')])])],
        ['2–4 semanas', N('do', 'Coprocultivo + parasitológico', 'Post-antibiótico → C. difficile',
          'En la diarrea prolongada se busca el agente: coprocultivo y parasitológico seriado. Si usó antibióticos el último mes, sospecha Clostridioides difficile y pide PCR de toxina.')],
        ['≥ 4 semanas', N('alert', 'Colonoscopía si hay alarma', 'SII · malabsorción · EII · cáncer',
          'La diarrea crónica se orienta según la clínica: funcional, malabsorción, enfermedad inflamatoria o cáncer. Con signos de alarma, colonoscopía.')])]),
  },
};
