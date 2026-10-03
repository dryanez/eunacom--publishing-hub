// Clase 8.10 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-10).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-10',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Esquistocitos, plaquetas bajas y coagulación normal: una emergencia',
      say: 'Bienvenidos. Cerramos el bloque de anemias hemolíticas con las microangiopatías trombóticas: el púrpura trombocitopénico trombótico, o PTT, y el síndrome hemolítico urémico, o SHU. En las clases anteriores el glóbulo se rompía por anticuerpos o por un defecto propio; aquí se rompe a golpes, contra trombos en los vasos pequeños. Es una emergencia, y el examen pregunta tres cosas: reconocerla, indicar la plasmaféresis y no transfundir plaquetas.',
    },

    {
      type: 'flow',
      kicker: 'Concepto',
      title: 'Microtrombos que rompen glóbulos y gastan plaquetas',
      nodes: [
        { id: 'tro', col: 0, row: 1, k: 'mech', t: 'Microtrombos plaquetarios', s: 'Arteriolas y capilares' },
        { id: 'pla', col: 1, row: 0, k: 'effect', t: 'Trombocitopenia de consumo', s: 'Las plaquetas se gastan' },
        { id: 'esq', col: 1, row: 2, k: 'effect', t: 'Esquistocitos', s: 'Glóbulos fragmentados' },
        { id: 'isq', col: 2, row: 1, k: 'risk', t: 'Isquemia de órganos', s: 'Cerebro, riñón, corazón' },
        { id: 'ptt', col: 3, row: 0, k: 'cause', t: 'PTT', s: 'Déficit de ADAMTS13' },
        { id: 'shu', col: 3, row: 2, k: 'cause', t: 'SHU', s: 'Toxina Shiga' },
      ],
      edges: [
        { from: 'tro', to: 'pla' }, { from: 'tro', to: 'esq', label: 'choque mecánico' }, { from: 'tro', to: 'isq' },
        { from: 'isq', to: 'ptt', label: 'adulto' }, { from: 'isq', to: 'shu', label: 'niño' },
      ],
      steps: [
        { show: ['tro'], note: 'El problema: trombos de plaquetas en vasos pequeños',
          say: 'Partamos por la idea común. En una microangiopatía trombótica se forman microtrombos de plaquetas en las arteriolas y capilares de muchos órganos.' },
        { show: ['pla'], note: 'Se forman trombos y faltan plaquetas',
          say: 'Esos trombos consumen plaquetas, así que el paciente tiene trombocitopenia. Parece una paradoja: está formando trombos y a la vez le faltan plaquetas. No lo es: le faltan justamente porque se están gastando en los trombos.' },
        { show: ['esq'], note: 'Hemólisis mecánica: Coombs negativo',
          say: 'Y los glóbulos rojos, al pasar a gran velocidad por esas redes de trombos, se rompen. Los fragmentos se ven en el frotis como esquistocitos, o glóbulos en casco. Es una hemólisis mecánica, con Coombs negativo.' },
        { show: ['isq'], note: 'Los trombos dañan cerebro, riñón y corazón',
          say: 'Además, los trombos tapan la circulación de los órganos: cerebro, riñón y corazón.' },
        { show: ['ptt', 'shu'], note: 'Dos causas, dos pacientes distintos',
          say: 'Hay dos causas clásicas. El PTT, típico del adulto, por falta de una enzima llamada ADAMTS trece. Y el SHU, típico del niño, por la toxina Shiga. Veamos cada una.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'PTT · Fisiopatología',
      title: 'Sin ADAMTS13, el von Willebrand no se corta',
      nodes: [
        { id: 'ac', col: 0, row: 1, k: 'cause', t: 'Autoanticuerpos IgG', s: '95 % de los adultos' },
        { id: 'ada', col: 1, row: 1, k: 'mech', t: 'ADAMTS13 menor de 10 %', s: 'La enzima que corta el vWF' },
        { id: 'vwf', col: 2, row: 1, k: 'mech', t: 'Multímeros gigantes de vWF', s: 'Anclados al endotelio' },
        { id: 'agr', col: 3, row: 0, k: 'effect', t: 'Agregación plaquetaria masiva', s: 'Microtrombos en todo el cuerpo' },
        { id: 'coa', col: 3, row: 2, k: 'good', t: 'Coagulación normal', s: 'TP, TTPK y fibrinógeno normales' },
      ],
      edges: [
        { from: 'ac', to: 'ada', label: 'inhiben' }, { from: 'ada', to: 'vwf' },
        { from: 'vwf', to: 'agr' }, { from: 'agr', to: 'coa', label: 'sin consumo de factores' },
      ],
      steps: [
        { show: ['ada'], note: 'ADAMTS13: la tijera del factor von Willebrand',
          say: 'Veamos el PTT. El endotelio libera el factor von Willebrand en multímeros ultralargos, y una enzima del plasma, la ADAMTS trece, los corta. Funciona como una tijera. En el PTT, la actividad de esa enzima cae bajo el diez por ciento.' },
        { show: ['ac'], note: 'En el adulto, la causa es autoinmune',
          say: '¿Por qué cae? En el noventa y cinco por ciento de los adultos es autoinmune: hay autoanticuerpos IgG que neutralizan la enzima. Guarda este dato, porque explica el tratamiento.' },
        { show: ['vwf', 'agr'], note: 'Multímeros gigantes que atrapan plaquetas',
          say: 'Sin la tijera, los multímeros gigantes quedan anclados al endotelio, se despliegan con el flujo de la sangre, y atrapan y activan plaquetas en forma espontánea y masiva. Así se forman los microtrombos, sobre todo en cerebro, corazón y riñón.' },
        { show: ['coa'], note: 'La gran diferencia con la CID',
          say: 'Y aquí está el dato de laboratorio que más se pregunta. Los trombos son de plaquetas, no se consumen factores de coagulación. Por eso el tiempo de protrombina, el TTPK y el fibrinógeno son normales. Eso separa al PTT de la coagulación intravascular diseminada, donde sí están alterados.' },
      ],
    },

    {
      type: 'points',
      kicker: 'PTT · Clínica',
      title: 'Péntada de Moschcowitz: pero bastan dos',
      cards: [
        { title: 'La péntada clásica', tag: 'Moschcowitz', kind: 'criteria', items: [
          { t: 'Trombocitopenia grave', d: 'Habitualmente < 20.000–30.000, con petequias',
            say: 'La forma clásica del PTT se describe con la péntada de Moschcowitz. Primero, trombocitopenia grave, habitualmente bajo veinte a treinta mil, con púrpura petequial.' },
          { t: 'Anemia hemolítica microangiopática', d: 'LDH > 1.000, esquistocitos > 1–2 %',
            say: 'Segundo, anemia hemolítica microangiopática: Coombs negativo, reticulocitos altos, LDH altísima, sobre mil, y esquistocitos sobre uno a dos por ciento en el frotis.' },
          { t: 'Neurológico fluctuante', d: 'Cefalea, confusión, afasia, convulsiones',
            say: 'Tercero, síntomas neurológicos fluctuantes y bizarros, en más de dos tercios de los casos: cefalea, desorientación, afasia transitoria, convulsiones, paresias o coma. Que vayan y vengan es muy típico.' },
          { t: 'Fiebre y compromiso renal leve', d: 'Hematuria, proteinuria, creatinina algo alta',
            say: 'Y cuarto y quinto: fiebre sin foco, en la mitad de los casos, y compromiso renal leve a moderado. Fíjate: en el PTT el riñón se afecta poco; manda el cerebro.' },
        ] },
        { title: 'Lo que basta para actuar', tag: 'No esperar la péntada', kind: 'alert', items: [
          { t: 'Trombocitopenia + anemia con esquistocitos', d: 'Sin otra causa evidente',
            say: 'Pero ojo: hoy no se exigen los cinco elementos. Trombocitopenia más anemia con esquistocitos, sin otra causa evidente, es suficiente para sospechar un PTT e iniciar el tratamiento urgente. Si esperas la péntada completa, llegas tarde.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'SHU típico',
      title: 'Diarrea con sangre, y días después el riñón',
      nodes: [
        { id: 'eco', col: 0, row: 1, k: 'cause', t: 'E. coli O157:H7 o Shigella', s: 'Diarrea con sangre' },
        { id: 'stx', col: 1, row: 1, k: 'mech', t: 'Toxina Shiga', s: 'Daña el endotelio glomerular' },
        { id: 'tri', col: 2, row: 1, k: 'effect', t: 'Tríada del SHU', s: 'Anemia, plaquetopenia, falla renal' },
        { id: 'ren', col: 3, row: 0, k: 'risk', t: 'Falla renal oligoanúrica', s: 'El órgano dominante' },
        { id: 'edad', col: 3, row: 2, k: 'effect', t: 'Niños de 1 a 5 años', s: '5 a 10 días tras la diarrea' },
      ],
      edges: [
        { from: 'eco', to: 'stx' }, { from: 'stx', to: 'tri' }, { from: 'tri', to: 'ren' }, { from: 'tri', to: 'edad' },
      ],
      steps: [
        { show: ['eco'], note: 'Primero hay una diarrea disenteriforme',
          say: 'Pasemos al SHU típico. La historia empieza con una diarrea con sangre, por Escherichia coli enterohemorrágica, el serotipo clásico O ciento cincuenta y siete, o por Shigella dysenteriae.' },
        { show: ['stx'], note: 'No hay déficit de ADAMTS13',
          say: 'Estas bacterias producen la toxina Shiga, que daña directamente el endotelio del glomérulo. Fíjate que aquí no hay déficit de ADAMTS trece: el mecanismo es otro.' },
        { show: ['tri'], note: 'Anemia microangiopática + plaquetopenia + falla renal',
          say: 'El resultado es la tríada del SHU: anemia hemolítica microangiopática, trombocitopenia y falla renal aguda.' },
        { show: ['ren'], note: 'En el SHU manda el riñón; en el PTT, el cerebro',
          say: 'Y aquí el órgano que manda es el riñón, con una falla renal aguda grave y oligoanúrica. El compromiso neurológico es infrecuente. Es el espejo del PTT.' },
        { show: ['edad'], note: 'El paciente típico: un preescolar',
          say: 'El paciente típico es un lactante o niño pequeño, de uno a cinco años, que hace el cuadro cinco a diez días después de la diarrea. Niño, diarrea con sangre, y días después palidez, petequias y poca orina: SHU.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'Esquistocitos y plaquetas bajas: ¿MAT o CID?',
      nodes: [
        { id: 'ini', col: 0, row: 1, k: 'start', t: 'Esquistocitos + plaquetopenia', s: 'Coombs negativo' },
        { id: 'coa', col: 1, row: 1, k: 'q', t: '¿TP, TTPK y fibrinógeno?', s: 'Pruebas de coagulación' },
        { id: 'cid', col: 2, row: 2, k: 'alert', t: 'CID', s: 'TP y TTPK largos, fibrinógeno bajo' },
        { id: 'mat', col: 2, row: 0, k: 'good', t: 'Microangiopatía trombótica', s: 'Coagulación normal' },
        { id: 'ptt', col: 3, row: 0, k: 'risk', t: 'Adulto, predomina el SNC', s: 'PTT' },
        { id: 'shu', col: 3, row: 1, k: 'risk', t: 'Niño, predomina el riñón', s: 'SHU' },
      ],
      edges: [
        { from: 'ini', to: 'coa' }, { from: 'coa', to: 'mat', label: 'normales' }, { from: 'coa', to: 'cid', label: 'alteradas' },
        { from: 'mat', to: 'ptt' }, { from: 'mat', to: 'shu' },
      ],
      steps: [
        { show: ['ini', 'coa'], note: 'Primer corte: la coagulación',
          say: 'Ahora juntemos la diferencia que más se pregunta. Tienes esquistocitos y plaquetas bajas. El primer corte lo dan las pruebas de coagulación: tiempo de protrombina, TTPK y fibrinógeno.' },
        { show: ['cid'], note: 'CID: se consumen los factores',
          say: 'Si están alteradas, con tiempos prolongados, fibrinógeno bajo y dímero D muy alto, es una coagulación intravascular diseminada, en un paciente crítico, séptico o politraumatizado. Esa la vemos más adelante en el curso.' },
        { show: ['mat'], note: 'MAT: coagulación estrictamente normal',
          say: 'Si están normales, es una microangiopatía trombótica.' },
        { show: ['ptt', 'shu'], note: 'Segundo corte: la edad y el órgano',
          say: 'Y el segundo corte es la edad y el órgano que domina. Adulto, más frecuente una mujer joven, con compromiso neurológico: PTT. Niño pequeño, después de una diarrea con sangre, con falla renal: SHU.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento de emergencia',
      title: 'Plasmaféresis ya, y nunca plaquetas',
      cards: [
        { title: 'PTT', tag: 'UCI inmediata', kind: 'pharma', items: [
          { t: 'Plasmaféresis diaria urgente', d: 'Recambio plasmático terapéutico',
            say: 'Vamos al tratamiento. El PTT sin tratamiento oportuno tiene una mortalidad sobre noventa por ciento. El pilar es la plasmaféresis, o recambio plasmático terapéutico, diario y en una UCI. Saca los autoanticuerpos y los multímeros gigantes, y aporta plasma con ADAMTS trece normal.' },
          { t: 'Si se retrasa: plasma fresco', d: '15 a 30 mL/kg/día',
            say: 'Si la plasmaféresis se retrasa, por ejemplo por un traslado, se infunde plasma fresco congelado, quince a treinta mililitros por kilo al día, mientras tanto.' },
          { t: 'Corticoides en dosis altas', d: 'Metilprednisolona EV o prednisona 1 mg/kg/día',
            say: 'Al mismo tiempo, corticoides en dosis altas, metilprednisolona endovenosa o prednisona a un miligramo por kilo al día, para frenar la producción del autoanticuerpo. En centros terciarios se agregan caplacizumab y rituximab.' },
        ] },
        { title: 'SHU', tag: 'Soporte', kind: 'normal', items: [
          { t: 'Soporte hidroelectrolítico', d: 'Diálisis si hay oliguria',
            say: 'En el SHU, en cambio, no hay anticuerpo que sacar. El tratamiento es de soporte hidroelectrolítico, con diálisis si hay oliguria.' },
        ] },
        { title: 'Contraindicación', tag: 'Alerta vital', kind: 'alert', items: [
          { t: 'No transfundir plaquetas', d: 'Ni en PTT ni en SHU',
            say: 'Y la regla que salva vidas: está contraindicado transfundir plaquetas en una microangiopatía, tanto PTT como SHU. Las plaquetas nuevas se pegan a los multímeros y alimentan más trombos en el cerebro y el corazón. Es echar leña al fuego.' },
          { t: 'Única excepción', d: 'Hemorragia intracraneal activa',
            say: 'La única excepción es una hemorragia intracraneal activa que amenaza la vida. Las plaquetas en veinte mil tientan a transfundir, pero en este paciente es la respuesta incorrecta.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en el árbol de urgencia frente a una sospecha de microangiopatía.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'PTT vs SHU vs CID',
      head: ['Parámetro', 'PTT', 'SHU típico', 'CID'],
      rows: [
        { cells: ['Paciente', 'Adulto, mujer 20–50 años', 'Niño de 1–5 años', 'Crítico: sepsis, trauma'],
          say: 'Repasemos las tres. El paciente: el PTT es del adulto, más en mujeres jóvenes; el SHU, del niño de uno a cinco años; la CID, del paciente crítico, séptico o politraumatizado.' },
        { cells: ['Mecanismo', 'ADAMTS13 < 10 % (anticuerpos)', 'Toxina Shiga', 'Consumo de factores'],
          say: 'El mecanismo: falta de ADAMTS trece por anticuerpos, toxina Shiga, y consumo masivo de factores de coagulación.' },
        { cells: ['Órgano dominante', 'Sistema nervioso central', 'Riñón (oligoanuria)', 'Multiorgánico'],
          say: 'El órgano que manda: el cerebro en el PTT, el riñón en el SHU, y en la CID, todo el organismo, con hemorragia y trombosis.' },
        { cells: ['TP y TTPK', 'Normales', 'Normales', 'Prolongados, fibrinógeno bajo'],
          say: 'La coagulación: normal en el PTT y en el SHU, alterada en la CID. Ese es el dato que separa.' },
        { cells: ['Tratamiento', 'Plasmaféresis + corticoides', 'Soporte ± diálisis', 'Tratar la causa + hemocomponentes'],
          say: 'Y el tratamiento: plasmaféresis y corticoides en el PTT; soporte y diálisis en el SHU; tratar la causa y reponer con plasma o crioprecipitado en la CID.' },
        { cells: ['Error frecuente', 'Transfundir plaquetas', 'Transfundir plaquetas', 'Olvidar la causa'],
          say: 'El error que más se castiga en las microangiopatías es transfundir plaquetas. En la CID, en cambio, el error es tratar solo los exámenes y olvidar la sepsis o la causa de fondo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 36 años, previamente sana, con 24 horas de desorientación fluctuante y cefalea. Febril (38,1 °C), confusa, con petequias diseminadas, sin focalidad motora. Hb 7,2 g/dL, plaquetas 18.000/µL, LDH 1.450 UI/L, bilirrubina indirecta 3,6 mg/dL, creatinina 1,6 mg/dL. TP 12 s (100 %), TTPK 31 s, fibrinógeno 320 mg/dL. Frotis: esquistocitos 3,5 %. Coombs directo negativo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Transfundir concentrado de plaquetas y observar' },
        { letter: 'B', text: 'Plasmaféresis urgente en UCI y corticoides en dosis altas' },
        { letter: 'C', text: 'Plasma fresco y crioprecipitado, y buscar foco séptico' },
        { letter: 'D', text: 'Hemodiálisis de urgencia' },
        { letter: 'E', text: 'Inmunoglobulina endovenosa como en la PTI' },
      ],
      correct: 'B',
      explanation: 'Trombocitopenia grave, anemia hemolítica con esquistocitos y Coombs negativo, síntomas neurológicos fluctuantes, fiebre y compromiso renal leve, con coagulación normal: PTT. Plasmaféresis urgente en UCI y corticoides. Transfundir plaquetas está contraindicado; la coagulación normal descarta CID.',
      say: {
        stem: 'Vamos con un caso. Mujer de treinta y seis años, previamente sana, con veinticuatro horas de desorientación que va y viene, y cefalea. Está febril, confusa, con petequias, sin focalidad motora. Hemoglobina de siete coma dos, plaquetas de dieciocho mil, LDH de mil cuatrocientos cincuenta, bilirrubina indirecta alta y creatinina de uno coma seis. El tiempo de protrombina, el TTPK y el fibrinógeno son normales. Hay tres coma cinco por ciento de esquistocitos y el Coombs es negativo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: transfundir plaquetas, plasmaféresis urgente con corticoides, plasma y crioprecipitado buscando sepsis, hemodiálisis de urgencia, o inmunoglobulina como en la PTI. Piénsalo.',
        answer: 'Es la B. Tiene la péntada completa: plaquetas bajas, hemólisis con esquistocitos, cerebro fluctuante, fiebre y riñón leve, con coagulación normal. Es un PTT: plasmaféresis urgente en UCI y corticoides. La A es la trampa mortal: con dieciocho mil plaquetas y petequias dan ganas de transfundir, pero eso alimenta los trombos. La C sería para una CID, y aquí la coagulación es normal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 131',
      stem: 'Un paciente de 24 años presenta un cuadro de cefalea y desorientación, asociado a malestar general e ictericia. Al examen físico tiene ictericia de piel y escleras, PA: 160/100 mmHg, se palpa edema de ambas extremidades inferiores. Se solicitan exámenes, entre los que destacan bilirrubina total: 12 mg/dl, LDH: 2.100 UI/L, creatinina: 3,5 mg/dl, hemoglobina: 7,0 g/dl, hematocrito: 22%, plaquetas: 50.000/mm3, blancos: 8.000/mm3, frotis con esquistocitos, poiquilocitos, anisocitosis y disminución de las plaquetas.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Púrpura inmune trombocitopénica' },
        { letter: 'B', text: 'Síndrome de Evans' },
        { letter: 'C', text: 'Anemia hemolítica autoinmune' },
        { letter: 'D', text: 'Púrpura trombótico trombocitopénico' },
        { letter: 'E', text: 'Lupus eritematoso sistémico' },
      ],
      correct: 'D',
      explanation: 'PTT clásico: trombocitopenia, anemia hemolítica (LDH alta, esquistocitos, bilirrubina indirecta), falla renal y compromiso neurológico. El síndrome de Evans es anemia hemolítica autoinmune más trombocitopenia autoinmune, sin esquistocitos ni falla renal.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecinueve. Paciente de veinticuatro años con cefalea, desorientación e ictericia. Presión de ciento sesenta con cien y edema de extremidades. Bilirrubina de doce, LDH de dos mil cien, creatinina de tres coma cinco, hemoglobina de siete, plaquetas de cincuenta mil, y esquistocitos en el frotis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: púrpura trombocitopénico inmune, síndrome de Evans, anemia hemolítica autoinmune, púrpura trombótico trombocitopénico, o lupus. Piénsalo.',
        answer: 'Es la D, PTT. Plaquetas bajas, hemólisis con esquistocitos, riñón comprometido y un cerebro confuso: son los elementos de la péntada. El distractor tentador es el síndrome de Evans, que también junta hemólisis y plaquetas bajas, pero es autoinmune, con Coombs positivo, y no da esquistocitos ni falla renal. Los esquistocitos son la palabra clave: hemólisis mecánica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 122',
      stem: 'Una niña de 3 años presenta, hace 4 días, un cuadro de diarrea y fiebre hasta 38ºC, a la que se agrega sangre en las deposiciones, 48 horas después. En su examen físico se ve decaída, pálida y en sus exámenes destaca hematocrito de 28%, leucocitos 9.800, plaquetas 75.000, BUN 28, creatinina 2,3 mg/dl.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Leucemia aguda' },
        { letter: 'B', text: 'Síndrome hemolítico urémico' },
        { letter: 'C', text: 'Shock Séptico' },
        { letter: 'D', text: 'Glomerulonefritis aguda' },
        { letter: 'E', text: 'Púrpura de Schölein Henoch' },
      ],
      correct: 'B',
      explanation: 'SHU clásico: niña pequeña, diarrea con sangre, falla renal aguda grave, anemia y trombocitopenia.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil dieciséis. Niña de tres años con cuatro días de diarrea y fiebre, a la que se agrega sangre en las deposiciones. Está decaída y pálida. Tiene hematocrito de veintiocho, plaquetas de setenta y cinco mil y creatinina de dos coma tres.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: leucemia aguda, síndrome hemolítico urémico, shock séptico, glomerulonefritis aguda, o púrpura de Schönlein-Henoch. Piénsalo.',
        answer: 'Es la B, síndrome hemolítico urémico. Niña de tres años, diarrea con sangre, y luego anemia, plaquetas bajas y una creatinina muy alta para su edad: es la tríada típica. La glomerulonefritis tienta por la falla renal, pero no explica la anemia ni las plaquetas bajas, y aparece días o semanas después de una infección estreptocócica, no tras una disentería.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 61',
      stem: 'Un niño de 5 años es hospitalizado por una neumonía con hemocultivos positivos para Streptococcus pneumoniae. Está en tratamiento con ceftriaxona endovenosa. Al tercer día evoluciona con deterioro del estado general y oliguria, por lo que se solicitan exámenes que muestran creatinina: 3,1 mg/dL, BUN: 68 mg/dL, hemograma con hematocrito: 27%, hemoglobina: 9 g/dL, glóbulos blancos: 13.000/mm³, 70% de neutrófilos y plaquetas 70.000/mm³, el tiempo de protrombina resulta 16,2 segundos y los niveles de complemento muestran C3: 81 mg/dL (normal: 90–180 mg/dL) y C4: 8,5 mg/dL (normal: 11–40 mg/dL). El sedimento de orina muestra hematuria con 15% de dismorfia.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Coagulación intravascular diseminada' },
        { letter: 'B', text: 'Glomerulonefritis aguda posinfecciosa' },
        { letter: 'C', text: 'Síndrome hemolítico urémico' },
        { letter: 'D', text: 'Sepsis por neumococo' },
        { letter: 'E', text: 'Insuficiencia renal aguda prerrenal' },
      ],
      correct: 'C',
      explanation: 'SHU: falla renal aguda con anemia y plaquetopenia. Sus causas incluyen E. coli enterohemorrágica, Shigella y también Streptococcus pneumoniae. La glomerulonefritis posinfecciosa aparece días después, suele ser por S. pyogenes y no da plaquetopenia.',
      say: {
        stem: 'Una última pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Niño de cinco años hospitalizado por una neumonía con hemocultivos positivos para neumococo, en tratamiento con ceftriaxona. Al tercer día se deteriora y queda oligúrico. Creatinina de tres coma uno, hemoglobina de nueve, plaquetas de setenta mil, tiempo de protrombina de dieciséis segundos, complemento algo bajo y hematuria con poca dismorfia.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: coagulación intravascular diseminada, glomerulonefritis posinfecciosa, síndrome hemolítico urémico, sepsis por neumococo, o falla renal prerrenal. Piénsalo.',
        answer: 'Es la C, síndrome hemolítico urémico. Falla renal oligúrica, anemia y plaquetas bajas en un niño: la tríada. Lo nuevo es la causa: además de la Escherichia coli y la Shigella, el neumococo también puede producir un SHU. La glomerulonefritis tienta por el complemento y la hematuria, pero aparece días después de la infección, suele ser estreptocócica y no baja las plaquetas.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Reconocer', tag: 'Esquistocitos', kind: 'key', items: [
          { t: 'Esquistocitos + plaquetas bajas', d: 'Basta para sospechar una MAT',
            say: 'Cerremos con las reglas de oro. Esquistocitos con plaquetas bajas y Coombs negativo: microangiopatía trombótica, y no esperas la péntada completa para actuar.' },
          { t: 'Coagulación normal', d: 'La separa de la CID',
            say: 'Si el tiempo de protrombina, el TTPK y el fibrinógeno son normales, no es una CID.' },
        ] },
        { title: 'Separar', tag: 'Edad y órgano', kind: 'criteria', items: [
          { t: 'Adulto + cerebro fluctuante', d: 'PTT: ADAMTS13 < 10 %',
            say: 'Adulto con síntomas neurológicos que van y vienen: PTT.' },
          { t: 'Niño + diarrea con sangre + riñón', d: 'SHU: toxina Shiga',
            say: 'Niño con diarrea con sangre y, días después, falla renal: SHU.' },
        ] },
        { title: 'Tratar', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'PTT: plasmaféresis + corticoides', d: 'Plasma fresco si se retrasa',
            say: 'El PTT se trata con plasmaféresis urgente y corticoides; el SHU, con soporte y diálisis.' },
          { t: 'Nunca plaquetas', d: 'Salvo hemorragia intracraneal',
            say: 'Y nunca transfundes plaquetas. Si te llevas una sola idea de hoy: esquistocitos, plaquetas bajas y coagulación normal es una emergencia que se trata con plasmaféresis, no con plaquetas. En la próxima clase entramos a la hemostasia y sus exámenes. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Sospecha de microangiopatía trombótica',
    root: N('start', 'Plaquetopenia + anemia hemolítica', 'Esquistocitos, LDH alta, Coombs negativo',
      'Paciente con plaquetas bajas, anemia hemolítica con esquistocitos, LDH alta y Coombs negativo. Pensar en microangiopatía y actuar rápido.',
      ['', N('q', '¿TP, TTPK y fibrinógeno?', 'Pruebas de coagulación',
        'Lo primero es mirar la coagulación: ¿están normales el tiempo de protrombina, el TTPK y el fibrinógeno?',
        ['Alterados', N('alert', 'CID', 'Tratar la causa + hemocomponentes',
          'Si están alterados, con fibrinógeno bajo y dímero D alto, es una CID: se trata la sepsis o la causa, y se repone con plasma o crioprecipitado.')],
        ['Normales', N('q', '¿Qué paciente y qué órgano?', 'Microangiopatía trombótica',
          'Si están normales, es una microangiopatía trombótica. Ahora mira la edad y qué órgano manda.',
          ['Adulto, neurológico', N('alert', 'PTT: plasmaféresis urgente', 'UCI + corticoides',
            'Adulto con síntomas neurológicos fluctuantes: PTT. Plasmaféresis diaria urgente en UCI y corticoides en dosis altas.',
            ['Si se retrasa', N('do', 'Plasma fresco congelado', '15–30 mL/kg/día',
              'Si la plasmaféresis se demora, plasma fresco congelado, quince a treinta mililitros por kilo al día, mientras tanto.')])],
          ['Niño, diarrea con sangre, riñón', N('refer', 'SHU: soporte', 'Diálisis si hay oliguria',
            'Niño con diarrea con sangre y falla renal: SHU. Soporte hidroelectrolítico y diálisis si hay oliguria.')],
          ['En ambos', N('alert', 'No transfundir plaquetas', 'Salvo hemorragia intracraneal',
            'Y en ambos casos, no se transfunden plaquetas, salvo una hemorragia intracraneal activa.')])])]),
  },
};
