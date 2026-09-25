// Clase 8.11 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-11).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-11',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Qué mide cada examen y cómo se lee el patrón de un paciente que sangra',
      say: 'Bienvenidos. Abrimos el bloque de hemostasia, y esta clase es la base de todas las que vienen: la trombocitopenia inmune, las hemofilias, el von Willebrand y la coagulación intravascular diseminada. Hoy vamos a aprender a leer cuatro exámenes: el recuento de plaquetas, el tiempo de protrombina, el TTPK y el fibrinógeno. Si sabes qué mide cada uno, el diagnóstico sale casi solo.',
    },

    {
      type: 'flow',
      kicker: 'Fisiología',
      title: 'Dos fases: el tapón y la malla',
      nodes: [
        { id: 'les', col: 0, row: 2, k: 'start', t: 'Lesión del endotelio', s: 'Se expone el colágeno' },
        { id: 'vwf', col: 1, row: 1, k: 'mech', t: 'Adhesión por von Willebrand', s: 'Receptor GP Ib/IX/V' },
        { id: 'agr', col: 2, row: 1, k: 'mech', t: 'Agregación por GP IIb/IIIa', s: 'El fibrinógeno une plaquetas' },
        { id: 'tap', col: 3, row: 1, k: 'effect', t: 'Tapón plaquetario', s: 'Hemostasia primaria' },
        { id: 'ft', col: 1, row: 3, k: 'mech', t: 'Factor tisular + VIIa', s: 'El iniciador real in vivo' },
        { id: 'tro', col: 2, row: 3, k: 'mech', t: 'Trombina', s: 'Amplifica XI, VIII y V' },
        { id: 'fib', col: 3, row: 3, k: 'good', t: 'Fibrina estable', s: 'Hemostasia secundaria (XIIIa)' },
      ],
      edges: [
        { from: 'les', to: 'vwf' }, { from: 'vwf', to: 'agr', label: 'activación' }, { from: 'agr', to: 'tap' },
        { from: 'les', to: 'ft' }, { from: 'ft', to: 'tro' }, { from: 'tro', to: 'fib' },
        { from: 'tap', to: 'fib', label: 'consolida' },
      ],
      steps: [
        { show: ['les'], note: 'Todo parte de un vaso roto',
          say: 'Partamos por la fisiología, porque de aquí sale todo. Cuando se rompe el endotelio, queda expuesto el colágeno de la pared. Desde ese momento corren dos procesos al mismo tiempo: uno arma un tapón y el otro lo refuerza.' },
        { show: ['vwf'], note: 'Adhesión: el vWF ancla la plaqueta al colágeno',
          say: 'El primero es la hemostasia primaria. El factor de von Willebrand se pega al colágeno y ancla a las plaquetas a través de su receptor, la glicoproteína Ib. Eso es la adhesión. Guarda este nombre, porque la enfermedad de von Willebrand falla justo aquí.' },
        { show: ['agr'], note: 'La plaqueta activada libera ADP y tromboxano A2',
          say: 'La plaqueta se activa, libera sus gránulos y fabrica tromboxano A dos. Eso cambia la forma del receptor dos b tres a, y el fibrinógeno hace de puente entre una plaqueta y la siguiente. Eso es la agregación.' },
        { show: ['tap'], note: 'Si falla: sangrado mucocutáneo inmediato',
          say: 'El resultado es el tapón plaquetario primario. Es rápido, pero frágil.' },
        { show: ['ft', 'tro'], note: 'In vivo, la cascada parte por la vía extrínseca',
          say: 'Ahí entra la hemostasia secundaria, la cascada de coagulación. En el laboratorio la dividimos en vía intrínseca y extrínseca, pero en el cuerpo la que arranca todo es el complejo factor tisular con factor siete activado. Se genera trombina, y la trombina amplifica los factores once, ocho y cinco.' },
        { show: ['fib'], note: 'Si falla: sangrado profundo y tardío',
          say: 'Esa explosión de trombina convierte el fibrinógeno en fibrina, que el factor trece deja estable. La fibrina es la malla que consolida el tapón. Un tapón sin malla se deshace, y eso explica la clínica que viene.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'El tipo de sangrado te dice qué fase falla',
      cards: [
        { title: 'Hemostasia primaria', tag: 'Plaquetas y von Willebrand', kind: 'key', items: [
          { t: 'Sangrado inmediato y superficial', d: 'Petequias, epistaxis, gingivorragia',
            say: 'Antes de pedir un solo examen, mira cómo sangra el paciente. Si falla el tapón plaquetario, el sangrado es inmediato y superficial: petequias, equimosis pequeñas, epistaxis y gingivorragia.' },
          { t: 'Mucosas: metrorragia', d: 'Se evalúa con recuento y frotis',
            say: 'También sangran las mucosas, como la metrorragia o las reglas abundantes. Esta fase se evalúa con el recuento de plaquetas y el frotis.' },
        ] },
        { title: 'Hemostasia secundaria', tag: 'Factores de coagulación', kind: 'alert', items: [
          { t: 'Sangrado profundo y retardado', d: 'Hematomas musculares, hemartrosis',
            say: 'Si falla la cascada, el tapón se forma pero no se consolida. Por eso el sangrado es profundo y aparece tarde: hematomas dentro del músculo y hemartrosis, sangre dentro de la articulación.' },
          { t: 'Sangrado posquirúrgico tardío', d: 'Se evalúa con TP y TTPK',
            say: 'Y el sangrado que aparece horas después de una cirugía o de una extracción dental. Esta fase se evalúa con el tiempo de protrombina y el TTPK. Petequia apunta a plaquetas; hemartrosis apunta a factores. Esa diferencia se pregunta siempre.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tiempo de protrombina',
      title: 'TP e INR: la vía extrínseca',
      cards: [
        { title: 'Qué mide', tag: 'Vía extrínseca y común', kind: 'criteria', items: [
          { t: 'Factores VII, X, V, II y fibrinógeno', d: 'Normal: 11–13,5 s o 70–100 %',
            say: 'Ahora los exámenes. El tiempo de protrombina mide la vía extrínseca y la vía común: los factores siete, diez, cinco, dos y el fibrinógeno. Lo normal es entre once y trece coma cinco segundos, o una actividad de setenta a cien por ciento, que en Chile muchas veces se informa como protrombinemia.' },
          { t: 'INR normal: 0,8 a 1,2', d: 'Estandariza el reactivo de cada laboratorio',
            say: 'Como el reactivo cambia entre laboratorios, el resultado se estandariza con el INR, la razón internacional normalizada. En una persona sana está entre cero coma ocho y uno coma dos.' },
        ] },
        { title: 'TP prolongado aislado', tag: 'Déficit de factor VII', kind: 'key', items: [
          { t: 'Factor VII: vida media de 4–6 h', d: 'La más corta de todos los factores',
            say: 'Si solo se alarga el TP, con TTPK normal, el problema está en el factor siete. ¿Y por qué justo ese? Porque es el factor con la vida media más corta, de cuatro a seis horas. Es el primero que se agota cuando falta producción.' },
          { t: 'Primero en alterarse', d: 'Cumarínicos, déficit de vitamina K, falla hepática',
            say: 'Por eso el TP es el primero que se prolonga al iniciar acenocumarol o warfarina, en las fases iniciales del déficit de vitamina K, y es el marcador más precoz de una falla hepática aguda grave. Lo vamos a retomar en la clase de coagulopatías adquiridas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'TTPK',
      title: 'TTPK: la vía intrínseca',
      cards: [
        { title: 'Qué mide', tag: 'Vía intrínseca y común', kind: 'criteria', items: [
          { t: 'Factores XII, XI, IX, VIII + vía común', d: 'Normal: 25–35 s',
            say: 'El tiempo de tromboplastina parcial activada, el TTPK, mide la vía intrínseca y la común: los factores doce, once, nueve y ocho, más diez, cinco, dos y el fibrinógeno. Lo normal va de veinticinco a treinta y cinco segundos.' },
          { t: 'Alterado: más de 6–8 s sobre el control', d: 'O razón paciente/control mayor de 1,25',
            say: 'Se considera alterado cuando supera al control en más de seis a ocho segundos, o cuando la razón entre el paciente y el control pasa de uno coma veinticinco.' },
        ] },
        { title: 'Para qué se usa', tag: 'Dos usos clave', kind: 'pharma', items: [
          { t: 'Monitorizar heparina no fraccionada', d: 'Meta: 1,5 a 2,5 veces el control',
            say: 'Tiene dos usos que se preguntan. El primero: es el examen para controlar la heparina no fraccionada, con una meta de uno coma cinco a dos coma cinco veces el valor control.' },
          { t: 'Tamizar coagulopatías congénitas', d: 'Hemofilia A (VIII), B (IX), von Willebrand grave',
            say: 'El segundo: tamizar las coagulopatías congénitas clásicas. La hemofilia A, por falta de factor ocho; la hemofilia B, por falta de factor nueve; y la enfermedad de von Willebrand grave. Fíjate que el TP es para los fármacos cumarínicos, y el TTPK para la heparina y las hemofilias.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Prueba de mezcla',
      title: 'TTPK largo: ¿falta un factor o hay un inhibidor?',
      nodes: [
        { id: 'ttp', col: 0, row: 1, k: 'start', t: 'TTPK prolongado aislado', s: 'TP normal' },
        { id: 'mez', col: 1, row: 1, k: 'mech', t: 'Mezcla 1:1 con plasma normal', s: 'Test de corrección' },
        { id: 'q', col: 2, row: 1, k: 'q', t: '¿Se corrige el TTPK?', s: 'Se normaliza o sigue largo' },
        { id: 'def', col: 3, row: 0, k: 'good', t: 'Corrige: déficit de factor', s: 'Dosificar VIII, IX y XI' },
        { id: 'inh', col: 3, row: 2, k: 'alert', t: 'No corrige: inhibidor', s: 'Anticoagulante lúpico o anti-VIII' },
      ],
      edges: [
        { from: 'ttp', to: 'mez' }, { from: 'mez', to: 'q' },
        { from: 'q', to: 'def', label: 'sí' }, { from: 'q', to: 'inh', label: 'no' },
      ],
      steps: [
        { show: ['ttp'], note: 'La conducta de laboratorio es obligada',
          say: 'Ahora la pregunta que más se repite en este tema. Tienes un TTPK prolongado con TP normal. Antes de adivinar, hay un examen que responde la duda.' },
        { show: ['mez'], note: 'Se mezcla el plasma del paciente con plasma sano',
          say: 'Es la prueba de mezcla, o test de corrección: se mezcla el plasma del paciente con plasma normal, mitad y mitad, y se repite el TTPK.' },
        { show: ['q'], note: 'La lógica: el plasma sano aporta los factores',
          say: 'La lógica es simple. El plasma sano trae todos los factores. Si al paciente solo le faltaba uno, la mezcla lo repone. Pero si el paciente tiene algo que bloquea la coagulación, ese algo también bloquea el plasma sano.' },
        { show: ['def'], note: 'Corrige: faltaba un factor',
          say: 'Si el TTPK se corrige, había un déficit de factor: ocho, nueve u once. El paso siguiente es dosificar esos factores, y ahí aparecen las hemofilias.' },
        { show: ['inh'], note: 'No corrige: hay un anticuerpo circulante',
          say: 'Si no se corrige, hay un inhibidor circulante: el anticoagulante lúpico, o un anticuerpo adquirido contra el factor ocho. Y ojo con la paradoja: el anticoagulante lúpico alarga el TTPK en el tubo, pero en el paciente produce trombosis, no sangrado.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol: frente a un paciente que sangra, o frente a un preoperatorio alterado, así se razona.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cuatro patrones que tienes que reconocer',
      head: ['Patrón', 'Vía afectada', 'Causas frecuentes', 'Conducta'],
      rows: [
        { cells: ['TP largo, TTPK normal', 'Extrínseca (factor VII)', 'Cumarínicos, déficit inicial de vitamina K, hepatopatía leve', 'Revisar fármacos; vitamina K si sangra'],
          say: 'Repasemos los cuatro patrones. TP largo con TTPK normal: vía extrínseca, factor siete. Piensa en cumarínicos, déficit inicial de vitamina K o hepatopatía leve. Revisa los fármacos y da vitamina K si sangra.' },
        { cells: ['TTPK largo, TP normal', 'Intrínseca (VIII, IX, XI, XII)', 'Hemofilia A o B, von Willebrand, heparina, anticoagulante lúpico', 'Prueba de mezcla; si corrige, dosificar VIII y IX'],
          say: 'TTPK largo con TP normal: vía intrínseca. Hemofilias, von Willebrand, heparina o anticoagulante lúpico. La conducta es la prueba de mezcla, y si corrige, dosificar los factores ocho y nueve.' },
        { cells: ['TP y TTPK largos', 'Común (X, V, II, I) o múltiple', 'Daño hepático grave, CID, déficit masivo de vitamina K, ACOD', 'Fibrinógeno, plaquetas y dímero D'],
          say: 'Los dos largos: vía común o varias vías a la vez. Daño hepático grave, coagulación intravascular diseminada, déficit masivo de vitamina K, o exceso de anticoagulantes orales directos como el rivaroxabán. Pide fibrinógeno, plaquetas y dímero D para descartar la coagulación intravascular.' },
        { cells: ['Plaquetas bajas, TP y TTPK normales', 'Solo hemostasia primaria', 'PTI, hiperesplenismo, toxicidad medular', 'Frotis: descartar pseudotrombocitopenia por EDTA'],
          say: 'Y plaquetas bajas con tiempos normales: solo falla la hemostasia primaria. Trombocitopenia inmune, hiperesplenismo o toxicidad de la médula. Pero antes de etiquetar, mira el frotis, porque el anticoagulante del tubo puede agrupar las plaquetas y dar un recuento falsamente bajo. Eso es la pseudotrombocitopenia.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 22 años, sin antecedentes de sangrado ni cirugías, programado para una cirugía electiva. Exámenes: Hb 14,2 g/dL, plaquetas 245.000/µL, TP 12,2 s (INR 1,05), TTPK 58 s (control 30 s). La mezcla 1:1 con plasma normal corrige el TTPK a 31 s.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Operar sin cambios: nunca ha sangrado' },
        { letter: 'B', text: 'Solicitar anticoagulante lúpico y anticuerpos antifosfolípidos' },
        { letter: 'C', text: 'Diferir la cirugía y dosificar factores VIII, IX y XI' },
        { letter: 'D', text: 'Administrar vitamina K y repetir el TP' },
        { letter: 'E', text: 'Transfundir plaquetas antes de la cirugía' },
      ],
      correct: 'C',
      explanation: 'TTPK prolongado aislado que corrige con la mezcla: déficit de un factor de la vía intrínseca, no un inhibidor. Se difiere la cirugía no urgente y se dosifican VIII, IX y XI para diagnosticar una hemofilia leve asintomática. La vitamina K corrige el TP, que aquí es normal.',
      say: {
        stem: 'Vamos con un caso. Hombre de veintidós años, sano, sin sangrados ni cirugías previas, programado para una cirugía electiva. Hemoglobina y plaquetas normales, TP normal, con INR de uno coma cero cinco. Pero el TTPK es de cincuenta y ocho segundos, con un control de treinta. Y la mezcla con plasma normal lo corrige a treinta y uno.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: operar igual porque nunca ha sangrado, pedir anticoagulante lúpico, diferir la cirugía y dosificar los factores ocho, nueve y once, dar vitamina K, o transfundir plaquetas. Piénsalo.',
        answer: 'La respuesta es la C. El TTPK está largo y solo, y la mezcla lo corrige: le falta un factor de la vía intrínseca. Se difiere la cirugía, que no es urgente, y se dosifican los factores para buscar una hemofilia leve que nunca se había manifestado. El distractor tentador es el anticoagulante lúpico, pero un inhibidor no corrige con la mezcla. Y la vitamina K arregla el TP, que aquí es normal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 159',
      stem: 'Un niño de 2 años presenta tendencia a las hemorragias, ya que sangra con facilidad y presenta múltiples equimosis. En el examen físico, se observan extremidades inferiores con equimosis en distinto grado de resolución, algunas de gran tamaño. Se solicitan exámenes, entre los que destacan hemograma con recuento de plaquetas normal, TP normal y TTPA alargado.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Púrpura trombocitopénica inmune' },
        { letter: 'B', text: 'Hemofilia' },
        { letter: 'C', text: 'Enfermedad de von Willebrand' },
        { letter: 'D', text: 'Enfermedad de Glanzmann' },
        { letter: 'E', text: 'Púrpura trombocitopénica trombótica' },
      ],
      correct: 'B',
      explanation: 'Plaquetas normales, TP normal y TTPA alargado: vía intrínseca. En un niño pequeño con equimosis grandes, la hemofilia es lo más probable. PTI y PTT tienen plaquetas bajas; Glanzmann y von Willebrand alteran la hemostasia primaria y habitualmente no alargan el TTPA, salvo algunas formas de von Willebrand.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Niño de dos años que sangra con facilidad y tiene múltiples equimosis en las piernas, algunas grandes y en distintas etapas de resolución. Plaquetas normales, TP normal y TTPA alargado.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: trombocitopenia inmune, hemofilia, enfermedad de von Willebrand, enfermedad de Glanzmann, o púrpura trombocitopénico trombótico. Piénsalo.',
        answer: 'Es la B, hemofilia. Lee el patrón: plaquetas normales descartan la trombocitopenia inmune y el púrpura trombótico. TP normal con TTPA largo es vía intrínseca, factores ocho o nueve. El distractor es el von Willebrand, que también puede alargar el TTPA; pero da un sangrado más leve, de mucosas, y aquí tienes un niño pequeño con equimosis grandes. Eso es hemofilia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 55',
      stem: 'Un paciente de 18 años consulta por dolor y aumento de volumen en la pantorrilla izquierda, en relación a un pequeño traumatismo. Se solicita un estudio Doppler de las extremidades inferiores, que muestra alteraciones del drenaje venoso profundo de la zona. En sus exámenes, se constata hematocrito: 38%, hemoglobina: 12,8 g/dl, plaquetas: 145.000 por mm3, blancos: 8.000 por mm3, TTPA 54 segundos, protrombina: 85%.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Déficit de antitrombina III' },
        { letter: 'B', text: 'Hemofilia A' },
        { letter: 'C', text: 'Trombofilia por anticoagulante lúpico' },
        { letter: 'D', text: 'Hemofilia B' },
        { letter: 'E', text: 'Enfermedad de Von Willebrand' },
      ],
      correct: 'C',
      explanation: 'El Doppler muestra una trombosis venosa profunda, no un hematoma. Trombosis con TTPA alargado y TP normal: anticoagulante lúpico, un inhibidor que alarga el TTPA in vitro pero produce trombosis in vivo. Las hemofilias y el von Willebrand sangran; el déficit de antitrombina no alarga el TTPA.',
      say: {
        stem: 'Otra pregunta real, también de diciembre de dos mil diecinueve. Joven de dieciocho años con dolor y aumento de volumen de la pantorrilla después de un golpe pequeño. El Doppler muestra alteración del drenaje venoso profundo. Plaquetas en ciento cuarenta y cinco mil, protrombina de ochenta y cinco por ciento, y TTPA de cincuenta y cuatro segundos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: déficit de antitrombina, hemofilia A, trombofilia por anticoagulante lúpico, hemofilia B, o enfermedad de von Willebrand. Piénsalo.',
        answer: 'Es la C. La clave está en el Doppler: esto no es un hematoma, es una trombosis venosa profunda. Y una trombosis con TTPA largo es la paradoja que vimos en la prueba de mezcla: el anticoagulante lúpico alarga el tiempo en el tubo, pero coagula en el paciente. El distractor es la hemofilia, porque el TTPA largo y el golpe en la pierna te empujan a pensar en un hematoma; pero la hemofilia sangra, no trombosa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 78',
      stem: 'Una niña de 15 años presenta hipermenorrea y menometrorragia de larga data. Se solicita un hemograma, que muestra hemoglobina: 9g/dl, hematocrito: 27%, blancos: 6.000 por mm3 y plaquetas: 240.000 por mm3. Su ecografía ginecológica es normal.',
      question: '¿Cuál es la conducta más adecuada para proseguir el estudio?',
      options: [
        { letter: 'A', text: 'Resonancia magnética de pelvis' },
        { letter: 'B', text: 'Prueba de progesterona' },
        { letter: 'C', text: 'Biopsia de endometrio' },
        { letter: 'D', text: 'Estudio de trombofilias' },
        { letter: 'E', text: 'Estudio de hemostasia' },
      ],
      correct: 'E',
      explanation: 'Adolescente con sangrado menstrual abundante de larga data y ecografía normal: se estudia la hemostasia (plaquetas, TP, TTPK y luego estudio de von Willebrand). La trombofilia es el estudio de quien trombosa, no de quien sangra.',
      say: {
        stem: 'Una más, del EUNACOM de julio de dos mil diecinueve. Niña de quince años con reglas muy abundantes y prolongadas desde hace tiempo. Tiene anemia, con hemoglobina de nueve, plaquetas normales, y una ecografía ginecológica normal.',
        question: '¿Cómo sigues el estudio?',
        options: 'Las opciones son: resonancia de pelvis, prueba de progesterona, biopsia de endometrio, estudio de trombofilias, o estudio de hemostasia. Piénsalo.',
        answer: 'Es la E, estudio de hemostasia. El sangrado de mucosas, como la metrorragia, es hemostasia primaria, y en una adolescente con ecografía normal hay que buscar un trastorno de la coagulación, sobre todo el von Willebrand. El distractor es el estudio de trombofilias: suena parecido, pero la trombofilia se estudia en quien hace trombosis, no en quien sangra. Y la biopsia de endometrio no tiene sentido a los quince años.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La clínica', tag: 'Primero mira cómo sangra', kind: 'key', items: [
          { t: 'Petequias y mucosas: plaquetas', d: 'Hemostasia primaria',
            say: 'Cerremos con las reglas de oro. Petequias, epistaxis y sangrado de mucosas apuntan a la hemostasia primaria: plaquetas o von Willebrand.' },
          { t: 'Hemartrosis y hematomas: factores', d: 'Hemostasia secundaria',
            say: 'Hemartrosis, hematomas musculares y sangrado tardío apuntan a los factores de la coagulación.' },
        ] },
        { title: 'Los exámenes', tag: 'Qué mide cada uno', kind: 'criteria', items: [
          { t: 'TP solo: factor VII', d: 'Cumarínicos, vitamina K, hígado',
            say: 'TP largo aislado es factor siete: cumarínicos, déficit de vitamina K o hígado.' },
          { t: 'TTPK solo: VIII, IX, XI o heparina', d: 'Y el anticoagulante lúpico',
            say: 'TTPK largo aislado es vía intrínseca: hemofilias, von Willebrand, heparina, o el anticoagulante lúpico.' },
        ] },
        { title: 'La prueba de mezcla', tag: 'Decide la conducta', kind: 'alert', items: [
          { t: 'Corrige: falta un factor', d: 'No corrige: hay un inhibidor',
            say: 'Y la prueba de mezcla decide: si corrige, falta un factor; si no corrige, hay un inhibidor. Si te llevas una sola idea de hoy: mira cómo sangra el paciente, lee qué tiempo está largo, y deja que la mezcla te diga si falta algo o si algo sobra. En la próxima clase usamos todo esto en la trombocitopenia inmune. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Pruebas de coagulación: leer el patrón',
    root: N('start', 'Paciente que sangra o preoperatorio alterado', 'Plaquetas, TP/INR, TTPK y fibrinógeno',
      'Paciente que sangra, o un preoperatorio alterado. Pides siempre los cuatro exámenes básicos: plaquetas, tiempo de protrombina, TTPK y fibrinógeno.',
      ['', N('q', '¿Qué patrón muestra?', 'Plaquetas · TP · TTPK',
        'La pregunta es qué está alterado. Cada patrón te lleva a una vía distinta, y cada vía a un grupo de causas.',
        ['Plaquetas bajas, tiempos normales', N('do', 'Frotis de sangre', 'Descartar pseudotrombocitopenia por EDTA',
          'Plaquetas bajas con tiempos normales: falla solo la hemostasia primaria. Primero el frotis, para descartar la pseudotrombocitopenia, y luego piensas en trombocitopenia inmune, hiperesplenismo o toxicidad medular.')],
        ['TP largo solo', N('ok', 'Vía extrínseca: factor VII', 'Revisar cumarínicos; vitamina K si sangra',
          'TP largo con TTPK normal: factor siete. Revisa si toma acenocumarol, piensa en déficit inicial de vitamina K o en el hígado, y da vitamina K si sangra.')],
        ['TTPK largo solo', N('q', 'Prueba de mezcla 1:1', '¿Corrige el TTPK?',
          'TTPK largo con TP normal: vía intrínseca. Descarta la heparina y haz la prueba de mezcla con plasma normal.',
          ['Corrige', N('ok', 'Déficit de factor', 'Dosificar VIII, IX y XI',
            'Si corrige, falta un factor. Dosificas ocho, nueve y once para buscar una hemofilia.')],
          ['No corrige', N('alert', 'Inhibidor circulante', 'Anticoagulante lúpico o anti-VIII',
            'Si no corrige, hay un inhibidor: anticoagulante lúpico, que trombosa, o un anticuerpo contra el factor ocho, que sangra.')])],
        ['TP y TTPK largos', N('alert', 'Vía común o múltiple', 'Fibrinógeno, plaquetas y dímero D',
          'Los dos largos: daño hepático grave, coagulación intravascular diseminada, déficit masivo de vitamina K o anticoagulantes orales directos. Pide fibrinógeno, plaquetas y dímero D para descartar la coagulación intravascular.')])]),
  },
};
