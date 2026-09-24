// Clase 2.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-08).
// Tema tier 1: las secciones 1 y 2 del libro (definiciones y planes A/B/C) van en un solo flujo,
// y la tabla del libro (planes de hidratación) queda cubierta ahí, para no pasar de 8 diapositivas.

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
      type: 'flow',
      kicker: 'Definiciones e hidratación',
      title: 'El tiempo clasifica, la deshidratación decide el plan',
      nodes: [
        { id: 'def', col: 0, row: 1, k: 'start', t: 'Diarrea', s: 'Más de 3 al día, menor consistencia' },
        { id: 'agu', col: 1, row: 1, k: 'mech', t: 'Aguda: < 2 semanas', s: 'Casi siempre viral · diagnóstico clínico' },
        { id: 'pa', col: 2, row: 0, k: 'good', t: 'Plan A: < 5 %', s: 'SRO 100–200 mL tras cada deposición' },
        { id: 'pb', col: 2, row: 1, k: 'effect', t: 'Plan B: 5–10 %', s: 'SRO 50–100 mL/kg en 4–6 h' },
        { id: 'pc', col: 2, row: 2, k: 'alert', t: 'Plan C: > 10 % o shock', s: 'Cristaloides endovenosos' },
        { id: 'hip', col: 3, row: 2, k: 'trap', t: 'Hipernatremia', s: 'Soluciones hipotónicas o glucosalinas' },
      ],
      edges: [
        { from: 'def', to: 'agu' },
        { from: 'agu', to: 'pa', label: 'sin deshidratación' },
        { from: 'agu', to: 'pb', label: 'moderada' },
        { from: 'agu', to: 'pc', label: 'grave' },
        { from: 'pc', to: 'hip' },
      ],
      steps: [
        { show: ['def'], note: 'Regla de los 3: más de 3 al día; constipación, menos de 3 a la semana',
          say: 'Primero las definiciones, con la regla de los tres. Diarrea son deposiciones de menor consistencia, más de tres al día. Y constipación es lo inverso: deposiciones duras, menos de tres a la semana.' },
        { show: ['agu'], note: 'Aguda < 2 sem · prolongada 2–4 · crónica ≥ 4',
          say: 'Por duración, la diarrea es aguda si dura menos de dos semanas, prolongada entre dos y cuatro, y crónica desde las cuatro semanas. La aguda es casi siempre infecciosa, y más viral que bacteriana. Por eso no se estudia la causa: el diagnóstico es clínico y el manejo, sintomático.' },
        { show: ['pa'], note: 'En domicilio',
          say: 'Lo que sí se evalúa es la deshidratación, porque decide el plan. Sin deshidratación, o con pérdida de peso menor al cinco por ciento: plan A. Sales de rehidratación oral, cien a doscientos mililitros después de cada deposición, en la casa.' },
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
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Hombre de 46 años con diarrea líquida de 3 semanas, que comenzó 10 días después de terminar amoxicilina-clavulánico por una neumonía. Sin sangre en las deposiciones.',
      question: '¿Cuál es el examen más adecuado para confirmar la etiología?',
      options: [
        { letter: 'A', text: 'Coprocultivo corriente' },
        { letter: 'B', text: 'PCR de toxina para Clostridioides difficile en deposiciones' },
        { letter: 'C', text: 'Parasitológico seriado de deposiciones' },
        { letter: 'D', text: 'Colonoscopía con biopsias' },
        { letter: 'E', text: 'Calprotectina fecal' },
      ],
      correct: 'B',
      explanation: 'Diarrea hasta un mes después de usar antibióticos obliga a descartar C. difficile. El examen de elección es la PCR de toxina en deposiciones. Tratamiento: metronidazol oral y, si falla, vancomicina oral; la respuesta se evalúa por la clínica, no repitiendo la PCR.',
      say: {
        stem: 'Y ahora una pregunta del banco EUNACOM. Hombre de cuarenta y seis años con diarrea líquida de tres semanas, que empezó diez días después de terminar amoxicilina con ácido clavulánico por una neumonía. Sin sangre.',
        question: '¿Cuál es el examen más adecuado para confirmar la causa?',
        options: 'Las opciones: coprocultivo, PCR de toxina de Clostridioides difficile, parasitológico seriado, colonoscopía con biopsias, o calprotectina fecal. Piénsalo.',
        answer: 'La respuesta es la B. Diarrea prolongada que parte después de un antibiótico, dentro del mes: es Clostridioides difficile hasta demostrar lo contrario, y se confirma con PCR de toxina. El parasitológico tienta, porque es una diarrea prolongada, pero el dato del antibiótico manda. Y recuerda: después del tratamiento no se repite la PCR, porque puede seguir positiva por semanas.',
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
