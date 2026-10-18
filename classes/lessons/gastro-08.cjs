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
            say: 'Y si usó antibióticos en el último mes, sospecha Clostridioides difficile. Se diagnostica con PCR de toxina y se trata con metronidazol, y si falla, vancomicina oral. Ojo: la respuesta se evalúa por la clínica, no repitiendo la PCR. Mira esta colonoscopía: placas amarillentas, las seudomembranas, sobre la mucosa.',
            photo: { src: 'biblioteca/01_gastroenterologia/gastro-08/03_colitis-pseudomembranosa-cdifficile__atlas-eunacom.jpg', label: 'C. difficile en colonoscopía', at: 'Mira esta colonoscopía', credit: 'Atlas EUNACOM 2026' } },
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
      type: 'points',
      kicker: 'Parasitosis',
      title: 'Parasitosis intestinales del adulto',
      cards: [
        { title: 'Cómo se diagnostican', tag: 'Parasitológico seriado', kind: 'key', items: [
          { t: 'Tres muestras, días distintos', d: 'Con conservante; eosinofilia como pista',
            say: 'El diagnóstico es el parasitológico seriado de deposiciones: tres muestras en días distintos, con conservante. La eosinofilia en el hemograma es una pista.' },
          { t: 'Test de Graham para oxiuros', d: 'Cinta adhesiva perianal',
            say: 'Para los oxiuros no sirve el parasitológico: se usa el test de Graham, con una cinta adhesiva en la región perianal.' },
        ] },
        { title: 'Protozoos', tag: 'Tratamiento', kind: 'pharma', items: [
          { t: 'Giardia: tinidazol o metronidazol', d: 'Tinidazol 2 g en dosis única',
            say: 'Giardia da flatulencia, dolor cólico y diarrea con malabsorción. Mira estos trofozoítos al microscopio, con forma de pera y flagelos. Se trata con tinidazol, dos gramos en dosis única, o con metronidazol por cinco días.',
            photo: { src: 'biblioteca/01_gastroenterologia/gastro-08/04_giardia-trofozoitos__atlas-eunacom.jpg', label: 'Trofozoítos de Giardia', at: 'Mira estos trofozoítos', credit: 'Atlas EUNACOM 2026' } },
          { t: 'Entamoeba: metronidazol y amebicida luminal', d: 'Disentería y absceso hepático',
            say: 'Entamoeba histolytica causa disentería y absceso hepático. Se trata con metronidazol por siete a diez días, seguido de un amebicida luminal.' },
        ] },
        { title: 'Helmintos', tag: 'Tratamiento', kind: 'pharma', items: [
          { t: 'Áscaris y tricocéfalo: albendazol', d: 'Dosis única en áscaris; tres días en tricocéfalo',
            say: 'Áscaris y tricocéfalo se tratan con albendazol o mebendazol: una dosis única en el áscaris, tres días en el tricocéfalo. Este es el huevo de Ascaris, redondeado y de cubierta irregular. Y este es el del tricocéfalo, alargado como un barril, con un tapón claro en cada extremo.',
            photos: [
              { src: 'biblioteca/01_gastroenterologia/gastro-08/01_huevo-ascaris__nelson_p2813.jpg', label: 'Huevo de Ascaris', at: 'Este es el huevo de Ascaris', credit: 'Nelson 22.ª ed., p. 2813' },
              { src: 'biblioteca/01_gastroenterologia/gastro-08/02_huevo-trichuris__nelson_p2820.jpg', label: 'Huevo de tricocéfalo', at: 'Y este es el del tricocéfalo', credit: 'Nelson 22.ª ed., p. 2820' },
            ] },
          { t: 'Oxiuros: repetir y tratar a la familia', d: 'Repetir a las 2 semanas',
            say: 'En los oxiuros se repite el tratamiento a las dos semanas y se trata a todo el grupo familiar.' },
          { t: 'Teniasis: praziquantel · Strongyloides: ivermectina', d: 'Riesgo de hiperinfección en inmunosuprimidos',
            say: 'La teniasis se trata con praziquantel. Y Strongyloides, que da diarrea y eosinofilia y puede hiperinfectar a un inmunosuprimido, con ivermectina.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Constipación',
      title: 'Fecaloma: la diarrea que engaña',
      cards: [
        { title: 'Quién y cómo se presenta', tag: 'Adulto mayor', kind: 'alert', items: [
          { t: 'Postrado, con opioides o anticolinérgicos', d: 'Masa dura en el recto',
            say: 'El fecaloma es una masa de deposición endurecida en el recto. Es propio del adulto mayor postrado o que usa opioides, anticolinérgicos, o tiene constipación crónica.' },
          { t: 'Diarrea por rebosamiento', d: 'Incontinencia, retención urinaria, delirium',
            say: 'La trampa es que puede dar diarrea por rebosamiento, la llamada diarrea paradójica. También produce incontinencia fecal, retención urinaria, dolor y delirium.' },
        ] },
        { title: 'Diagnóstico', tag: 'Tacto rectal', kind: 'key', items: [
          { t: 'Tacto rectal', d: 'Masa dura y ampolla llena',
            say: 'Se diagnostica con el tacto rectal: masa dura y ampolla llena. La radiografía de abdomen lo confirma si el fecaloma está alto.' },
        ] },
        { title: 'Tratamiento', tag: 'Y después prevenir', kind: 'pharma', items: [
          { t: 'Desimpactar', d: 'Enema, supositorios de glicerina, fragmentación manual',
            say: 'Primero se desimpacta: enema, supositorios de glicerina o fragmentación manual.' },
          { t: 'Prevenir', d: 'Fibra, agua, movilización, laxante osmótico',
            say: 'Después se previene con fibra, hidratación, movilización, revisando los fármacos constipantes y con un laxante osmótico de mantención. Si no se trata, puede llegar a la obstrucción o a una úlcera con perforación.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Planes A, B y C',
      images: [
        { src: 'animaciones/gastro-08/A1_planes_abc.mp4', label: 'Deshidratación', credit: 'Animación propia' },
      ],
      steps: [
        { note: 'Según cuánto peso perdió',
          say: 'Con pérdida de peso menor al cinco por ciento, plan A: sales orales en casa, de cien a doscientos mililitros tras cada deposición. Entre cinco y diez por ciento, plan B: de cincuenta a cien mililitros por kilo en cuatro a seis horas. Sobre diez por ciento o en shock, plan C: cristaloides endovenosos.' },
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
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.06.1.011 · Diarrea crónica",
      "stem": "Mujer de 45 años con 4 meses de diarrea acuosa, 4 a 5 veces al día, que la despierta en la noche, con baja de 6 kg. No ha viajado. Al examen hay palidez leve. Hemoglobina 10,5 g/dL y VCM 76 fL.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Diagnosticar síndrome de intestino irritable e indicar dieta baja en FODMAP"
        },
        {
          "letter": "B",
          "text": "Loperamida y control en 3 meses"
        },
        {
          "letter": "C",
          "text": "Coprocultivo como único examen"
        },
        {
          "letter": "D",
          "text": "Estudio de diarrea crónica orgánica, con exámenes de laboratorio y colonoscopía con biopsias"
        },
        {
          "letter": "E",
          "text": "Metronidazol empírico por 7 días"
        }
      ],
      "correct": "D",
      "explanation": "Diarrea de más de 4 semanas con signos de alarma —nocturna, baja de peso y anemia— es orgánica hasta demostrar lo contrario. Se estudia con laboratorio (hemograma, PCR, serología celíaca, parasitológico) y colonoscopía con biopsias. El intestino irritable no despierta en la noche ni produce anemia.",
      "say": {
        "stem": "Vamos con una pregunta de práctica. Mujer de cuarenta y cinco años con cuatro meses de diarrea acuosa, cuatro a cinco veces al día, que la despierta en la noche. Bajó seis kilos, está algo pálida y tiene una anemia microcítica, con hemoglobina de diez coma cinco.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: diagnosticar intestino irritable, loperamida y control, coprocultivo solo, estudio de diarrea orgánica con colonoscopía o metronidazol empírico. Piénsalo.",
        "answer": "Es la D. Una diarrea crónica que despierta en la noche, con baja de peso y anemia, tiene signos de alarma y se estudia como orgánica, incluyendo colonoscopía con biopsias. El intestino irritable es la trampa: nunca despierta al paciente ni da anemia."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2015 · Pregunta 119",
      "stem": "Mujer de 27 años con constipación de 3 años de evolución, con deposiciones caprinas y duras, que evacua una vez a la semana. Se realiza una radiografía de abdomen que muestra dolicocolon, con contenido fecal en toda su extensión.",
      "question": "¿Cuál es el tratamiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Laxantes osmóticos"
        },
        {
          "letter": "B",
          "text": "Laxantes de contacto"
        },
        {
          "letter": "C",
          "text": "Cambios de hábitos"
        },
        {
          "letter": "D",
          "text": "Proquinéticos"
        },
        {
          "letter": "E",
          "text": "Cirugía"
        }
      ],
      "correct": "C",
      "explanation": "En una paciente joven sin signos de alarma, la constipación funcional se trata primero con cambios de hábitos: fibra, líquidos, actividad física y horario defecatorio. El dolicocolon es un hallazgo sin relevancia terapéutica y no justifica cirugía. Los laxantes quedan como segunda línea si las medidas fallan.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil quince. Mujer de veintisiete años con tres años de constipación, deposiciones duras en bolitas y una evacuación por semana. La radiografía de abdomen muestra un colon largo, o dolicocolon, con deposiciones en todo su trayecto.",
        "question": "¿Cuál es el tratamiento más adecuado?",
        "options": "Las opciones: laxantes osmóticos, laxantes de contacto, cambios de hábitos, proquinéticos, o cirugía. Piénsalo.",
        "answer": "Es la C, cambios de hábitos. Es una constipación funcional en una mujer joven sin alarma, y lo primero es fibra, agua, actividad física y un horario para ir al baño. La cirugía tienta por el dolicocolon, pero ese hallazgo no explica ni cambia el tratamiento."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2015 · Pregunta 128",
      "stem": "Una paciente está en tratamiento con ciprofloxacino por una infección urinaria. Al séptimo día inicia diarrea acuosa, abundante, asociada a dolor abdominal. Al examen físico se constata dolor a la palpación abdominal, sin irritación peritoneal, con aumento de los ruidos hidroaéreos. Los leucocitos fecales resultan positivos.",
      "question": "¿Cuál es el agente etiológico?",
      "options": [
        {
          "letter": "A",
          "text": "Escherichia coli"
        },
        {
          "letter": "B",
          "text": "Clostridioides (Clostridium) difficile"
        },
        {
          "letter": "C",
          "text": "Shigella flexneri"
        },
        {
          "letter": "D",
          "text": "Rotavirus"
        },
        {
          "letter": "E",
          "text": "Campylobacter jejuni"
        }
      ],
      "correct": "B",
      "explanation": "Diarrea inflamatoria durante un tratamiento antibiótico obliga a sospechar C. difficile, la principal causa de diarrea asociada a antibióticos (fluoroquinolonas, clindamicina, cefalosporinas). Se confirma con toxinas o PCR en deposiciones y se suspende el antibiótico si es posible. Hoy se trata con vancomicina oral o fidaxomicina; el metronidazol es alternativa.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil quince. Una mujer en tratamiento con ciprofloxacino por infección urinaria inicia al séptimo día diarrea acuosa abundante con dolor abdominal y leucocitos fecales positivos.",
        "question": "¿Cuál es el agente etiológico?",
        "options": "Las opciones: Escherichia coli, Clostridioides difficile, Shigella, rotavirus o Campylobacter. Piénsalo.",
        "answer": "Es la B. La diarrea inflamatoria durante un antibiótico es Clostridioides difficile hasta demostrar lo contrario. Shigella tienta por los leucocitos fecales, pero el contexto antibiótico apunta claramente a difficile."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2025 · Pregunta 101",
      "stem": "Paciente de 45 años con diarrea crónica de 6 meses. Se realiza una colonoscopía que muestra parásitos filiformes adheridos a la mucosa del colon ascendente.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Giardia lamblia"
        },
        {
          "letter": "B",
          "text": "Entamoeba histolytica"
        },
        {
          "letter": "C",
          "text": "Trichuris trichiura"
        },
        {
          "letter": "D",
          "text": "Ascaris lumbricoides"
        },
        {
          "letter": "E",
          "text": "Cryptosporidium"
        }
      ],
      "correct": "C",
      "explanation": "Trichuris trichiura (tricocéfalo) es un nematodo en forma de látigo que se adhiere a la mucosa del ciego y colon ascendente, visible en colonoscopía; causa diarrea crónica y, en infecciones masivas, disentería y prolapso rectal. Giardia vive en el duodeno, Ascaris en el intestino delgado, y los protozoos son microscópicos. Se trata con albendazol o mebendazol.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un paciente de cuarenta y cinco años con diarrea crónica de seis meses tiene en la colonoscopía pequeños gusanos filiformes adheridos a la mucosa del colon ascendente.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: Giardia, Entamoeba histolytica, Trichuris trichiura, Ascaris o Cryptosporidium. Piénsalo.",
        "answer": "Es la C. El tricocéfalo es un gusano en forma de látigo que se ve adherido al ciego y colon ascendente. Ascaris tienta por ser un gusano visible, pero vive en el intestino delgado."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2025 · Pregunta 110",
      "stem": "Puérpera de 5 días, hospitalizada durante el parto, presenta deposiciones líquidas múltiples con moco y sangre, calambres abdominales y fiebre de 38,5 °C.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Infección por Clostridioides difficile"
        },
        {
          "letter": "B",
          "text": "Gastroenteritis viral"
        },
        {
          "letter": "C",
          "text": "Colitis ulcerosa de novo"
        },
        {
          "letter": "D",
          "text": "Salmonelosis"
        },
        {
          "letter": "E",
          "text": "Síndrome de intestino irritable postinfeccioso"
        }
      ],
      "correct": "A",
      "explanation": "La hospitalización y los antibióticos del periparto (profilaxis o cesárea) son el principal factor de riesgo de Clostridioides difficile, que causa diarrea con fiebre, dolor cólico y a veces sangre. Se confirma con toxinas o PCR en deposiciones y se trata con vancomicina o fidaxomicina oral. Una gastroenteritis viral rara vez es disentérica.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticinco. Puérpera de cinco días, hospitalizada en el parto, con diarrea líquida con moco y sangre, cólicos y fiebre.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: Clostridioides difficile, gastroenteritis viral, colitis ulcerosa de novo, salmonelosis, o intestino irritable postinfeccioso. Piénsalo.",
        "answer": "Es la A. La hospitalización y los antibióticos del parto son el gran factor de riesgo para Clostridioides difficile. La gastroenteritis viral es tentadora, pero casi nunca da diarrea con sangre."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2019 · Pregunta 178",
      "stem": "Un paciente de 65 años estuvo hospitalizado por una neumonía y, al cuarto día después del alta, inicia dolor abdominal asociado a diarrea acuosa, malestar general e incontinencia fecal, que han ido empeorando en los 7 días siguientes. Al examen tiene abdomen distendido, doloroso a la palpación, sin signos de irritación peritoneal y con ruidos hidroaéreos aumentados.",
      "question": "¿Cuál es el examen de elección para el estudio inicial de este paciente?",
      "options": [
        {
          "letter": "A",
          "text": "Colonoscopía"
        },
        {
          "letter": "B",
          "text": "Coprocultivo"
        },
        {
          "letter": "C",
          "text": "Recuento de leucocitos fecales"
        },
        {
          "letter": "D",
          "text": "Parasitológico de deposiciones"
        },
        {
          "letter": "E",
          "text": "Toxinas A y B de Clostridioides difficile en deposiciones"
        }
      ],
      "correct": "E",
      "explanation": "Diarrea acuosa tras una hospitalización con antibióticos sugiere Clostridioides difficile. El estudio inicial es la detección de toxinas A y B o PCR en deposiciones, a menudo junto con GDH. El coprocultivo habitual no detecta toxinas y la colonoscopía se reserva para casos dudosos o graves. El tratamiento actual es vancomicina o fidaxomicina oral.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecinueve. Hombre de sesenta y cinco años que, días después del alta por una neumonía tratada con antibióticos, presenta diarrea acuosa y dolor abdominal.",
        "question": "¿Qué examen pides?",
        "options": "Las opciones: colonoscopía, coprocultivo, leucocitos fecales, parasitológico, o toxinas de Clostridioides difficile. Piénsalo.",
        "answer": "Es la E. Toxinas A y B de Clostridioides difficile. El coprocultivo tienta, pero el cultivo habitual no busca este germen ni sus toxinas."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.07.1.002 · Constipación y fecalomas",
      "stem": "Mujer de 86 años, postrada y usuaria de opioides por artrosis, es traída por \"diarrea\" de 5 días: escurrimiento de deposiciones líquidas en pequeña cantidad, con distensión y dolor abdominal leve. No elimina deposiciones formadas hace 10 días. Al tacto rectal se palpa una masa de deposiciones duras en la ampolla.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Loperamida"
        },
        {
          "letter": "B",
          "text": "Coprocultivo y ciprofloxacino"
        },
        {
          "letter": "C",
          "text": "Colonoscopía urgente"
        },
        {
          "letter": "D",
          "text": "Desimpactación (extracción manual y enemas) seguida de laxantes osmóticos"
        },
        {
          "letter": "E",
          "text": "Ayuno y suero endovenoso"
        }
      ],
      "correct": "D",
      "explanation": "Es un fecaloma con diarrea por rebalse: el líquido escurre alrededor de la impactación. Se trata con desimpactación (extracción digital y enemas) y luego laxantes osmóticos regulares, revisando fármacos constipantes como los opioides. La loperamida empeoraría el cuadro y los antibióticos no tienen indicación.",
      "say": {
        "stem": "Mujer de ochenta y seis años, postrada y con opioides, con escurrimiento de deposiciones líquidas y una masa de heces duras al tacto rectal.",
        "question": "¿Qué haces?",
        "options": "Las opciones: loperamida, coprocultivo y antibiótico, colonoscopía urgente, desimpactación seguida de laxantes o ayuno con suero. Piénsalo.",
        "answer": "Es la D. Es un fecaloma con diarrea por rebalse, así que se desimpacta y luego se dan laxantes. La loperamida parece lógica ante una diarrea, pero agravaría la impactación."
      }
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
