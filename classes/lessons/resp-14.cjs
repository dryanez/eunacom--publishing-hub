// Clase 3.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-14).
// Preguntas reales: banco EUNACOM (books/data/real_questions_by_code.json).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-14',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Diagnóstico clínico, descompresión sin esperar la radiografía y cuándo el hemotórax va a pabellón',
      say: 'Bienvenidos. En la clase anterior vimos el neumotórax espontáneo, donde había tiempo para medir y decidir con calma. Hoy vemos dos cuadros donde no hay tiempo: el neumotórax a tensión y el hemotórax masivo. Son urgencias con riesgo vital inmediato, y el examen las pregunta muchísimo. La buena noticia es que se resuelven con el examen físico: la percusión y las venas del cuello te dicen qué es y qué hacer.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Una válvula que solo deja entrar aire',
      nodes: [
        { id: 'les', col: 0, row: 1, k: 'cause', t: 'Lesión de pleura o pared', s: 'Pulmón, pleura visceral o pared' },
        { id: 'val', col: 1, row: 1, k: 'mech', t: 'Válvula unidireccional', s: 'Entra en inspiración, no sale' },
        { id: 'pre', col: 2, row: 1, k: 'mech', t: 'Presión pleural sube', s: 'Sobre la atmosférica' },
        { id: 'col', col: 3, row: 0, k: 'effect', t: 'Pulmón colapsado', s: 'Mediastino y tráquea al otro lado' },
        { id: 'cav', col: 3, row: 2, k: 'effect', t: 'Cavas comprimidas', s: 'Cae el retorno venoso' },
        { id: 'sho', col: 4, row: 2, k: 'alert', t: 'Shock obstructivo', s: 'Paro en AESP' },
      ],
      edges: [
        { from: 'les', to: 'val' }, { from: 'val', to: 'pre', label: 'cada respiración' },
        { from: 'pre', to: 'col' }, { from: 'pre', to: 'cav' }, { from: 'cav', to: 'sho' },
      ],
      steps: [
        { show: ['les'], note: 'Puede ser trauma, pero también un ventilador',
          say: 'Partamos por el mecanismo, porque de él sale toda la clínica. Todo empieza con una disrupción: en la pleura visceral, en el pulmón o en la pared del tórax. Puede ser una puñalada, un choque, o incluso un paciente conectado a un ventilador.' },
        { show: ['val'], note: 'Check-valve: el aire entra y queda atrapado',
          say: 'Lo especial es que esa lesión funciona como una válvula de una sola vía. En cada inspiración entra aire al espacio pleural, pero en la espiración ese aire no puede salir. Queda atrapado.' },
        { show: ['pre'], note: 'Cada respiración agrega aire',
          say: 'Entonces, con cada respiración, se acumula más aire, y la presión dentro de la pleura sube hasta superar la presión atmosférica. Aquí está la diferencia con el neumotórax simple: este no se queda quieto, crece.' },
        { show: ['col'], note: 'Tráquea desviada al lado contrario',
          say: 'Esa presión colapsa por completo el pulmón de ese lado, y además empuja el mediastino y la tráquea hacia el lado contrario. Por eso la tráquea desviada es uno de los signos clave.' },
        { show: ['cav'], note: 'Lo que mata es la precarga, no el pulmón',
          say: 'Pero lo que mata al paciente no es el pulmón colapsado. Es que la presión aplasta las venas cavas superior e inferior, y la sangre deja de volver al corazón. Se cae la precarga.' },
        { show: ['sho'], note: 'Shock obstructivo → paro en AESP',
          say: 'Sin retorno venoso, el corazón no tiene qué bombear: shock obstructivo, hipotensión grave, y si no actúas, paro cardiorrespiratorio en actividad eléctrica sin pulso. El monitor muestra ritmo, pero no hay pulso. Todo esto ocurre en minutos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'El diagnóstico es clínico: nunca esperes la radiografía',
      cards: [
        { title: 'Regla de oro', tag: 'Sin imágenes', kind: 'alert', items: [
          { t: 'Diagnóstico estrictamente clínico', d: 'Pedir radiografía está contraindicado',
            say: 'De ese mecanismo sale la regla de oro de la clase, la que más se pregunta. El diagnóstico del neumotórax a tensión es estrictamente clínico. Pedir o esperar una radiografía en un paciente inestable está contraindicado, porque la demora lo mata en minutos.' },
        ] },
        { title: 'La tétrada', tag: 'Lo que ves al lado de la camilla', kind: 'criteria', items: [
          { t: 'Shock e hipotensión grave', d: 'Taquicardia extrema o bradicardia preparo',
            say: 'Y cada signo lo puedes deducir del mecanismo. Primero, el shock: hipotensión grave, con taquicardia extrema, o bradicardia cuando ya está cerca del paro.' },
          { t: 'Yugulares ingurgitadas', d: 'La sangre no logra entrar al corazón',
            say: 'Segundo, las yugulares ingurgitadas. Si las cavas están aplastadas, la sangre se acumula antes del obstáculo, y las venas del cuello se ven llenas. Guarda este signo, porque es el que lo separa del hemotórax.' },
          { t: 'Tráquea desviada al lado contrario', d: 'Visible o palpable en la horquilla',
            say: 'Tercero, la tráquea desviada hacia el lado contrario de la lesión, que puedes ver o palpar en la horquilla esternal.' },
          { t: 'Timpanismo y murmullo abolido', d: 'Hemitórax abombado e inmóvil',
            say: 'Y cuarto, el hemitórax afectado: abombado, inmóvil, con timpanismo o hipersonoridad a la percusión, porque está lleno de aire, y con el murmullo pulmonar abolido.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Dos pasos: aguja primero, tubo después',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Sospecha clínica fundada', s: 'Shock + yugulares + tráquea' },
        { id: 'agu', col: 1, row: 1, k: 'good', t: 'Paso 1: descompresión con aguja', s: '14–16 G, 2.º EIC línea medioclavicular' },
        { id: 'alt', col: 1, row: 2, k: 'good', t: 'Alternativa ATLS', s: '5.º EIC línea axilar anterior' },
        { id: 'sim', col: 2, row: 1, k: 'mech', t: 'Pasa a neumotórax simple', s: 'Sale aire a presión' },
        { id: 'tub', col: 3, row: 1, k: 'good', t: 'Paso 2: tubo pleural', s: '28–32 Fr, 5.º EIC axilar media' },
        { id: 'iot', col: 1, row: 0, k: 'trap', t: 'Intubar sin descomprimir', s: 'Precipita el paro' },
      ],
      edges: [
        { from: 'sos', to: 'agu' }, { from: 'sos', to: 'alt', label: 'o' }, { from: 'agu', to: 'sim' }, { from: 'alt', to: 'sim' },
        { from: 'sim', to: 'tub', label: 'siempre' }, { from: 'sos', to: 'iot', label: 'nunca' },
      ],
      steps: [
        { show: ['sos'], note: 'Basta la sospecha clínica',
          say: 'Pasemos a la conducta. Con la sospecha clínica fundada, y sin ningún examen, la conducta tiene dos pasos, y el orden importa.' },
        { show: ['agu'], note: 'Sobre el borde superior de la 3.ª costilla',
          say: 'El paso uno es la descompresión inmediata con aguja. Se usa un catéter venoso grueso, de calibre catorce o dieciséis, de al menos cinco centímetros de largo, en el segundo espacio intercostal, en la línea medioclavicular. Se entra justo sobre el borde superior de la tercera costilla, para no dañar el paquete vasculonervioso, que corre bajo cada costilla.' },
        { show: ['alt'], note: 'Otro sitio válido',
          say: 'La décima edición del ATLS avala un sitio alternativo: el quinto espacio intercostal, en la línea axilar anterior.' },
        { show: ['sim'], note: 'Se descomprime el mediastino',
          say: 'Al puncionar se escucha la salida brusca del aire a presión. En ese momento el neumotórax a tensión se transforma en un neumotórax simple, el mediastino se descomprime y la sangre vuelve a llegar al corazón.' },
        { show: ['tub'], note: 'La aguja compra tiempo; el tubo resuelve',
          say: 'Pero la aguja solo compra tiempo. El paso dos, obligatorio, es la pleurostomía definitiva: un tubo pleural grueso, de veintiocho a treinta y dos French, en el quinto espacio intercostal, línea axilar media, conectado a una trampa de agua.' },
        { show: ['iot'], note: 'Presión positiva sobre un tórax a tensión',
          say: 'Y ojo con la trampa. Si intubas y ventilas con presión positiva a un paciente con neumotórax a tensión sin descomprimirlo, le metes todavía más aire a la pleura, y precipitas el paro de inmediato. Por eso, si el paciente ya está en ventilación mecánica y de pronto sube la presión de la vía aérea y cae la presión arterial, piensa en esto: desconectas y descomprimes.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Hemotórax masivo',
      title: 'Sangre en la pleura: mismo lado, otro shock',
      nodes: [
        { id: 'vas', col: 0, row: 1, k: 'cause', t: 'Desgarro vascular', s: 'Intercostales, mamaria interna, hiliares' },
        { id: 'san', col: 1, row: 1, k: 'mech', t: '≥ 1.500 mL en la pleura', s: 'O más de 1/3 de la volemia' },
        { id: 'mat', col: 2, row: 0, k: 'effect', t: 'Matidez + murmullo abolido', s: 'Líquido en el hemitórax' },
        { id: 'hip', col: 2, row: 2, k: 'effect', t: 'Shock hipovolémico', s: 'Se pierde la sangre' },
        { id: 'pla', col: 3, row: 2, k: 'alert', t: 'Yugulares planas', s: 'No hay volumen que las llene' },
      ],
      edges: [
        { from: 'vas', to: 'san' }, { from: 'san', to: 'mat' }, { from: 'san', to: 'hip' }, { from: 'hip', to: 'pla' },
      ],
      steps: [
        { show: ['vas'], note: 'Vasos sistémicos que sangran a presión',
          say: 'Ahora el segundo cuadro. En el hemotórax masivo lo que llena la pleura no es aire, es sangre. Habitualmente viene del desgarro de vasos sistémicos: las arterias intercostales, la mamaria interna, o los grandes vasos del hilio.' },
        { show: ['san'], note: 'Definición: 1.500 mL o un tercio de la volemia',
          say: 'Se define como la acumulación rápida de mil quinientos mililitros de sangre o más en la cavidad pleural, o más de un tercio de la volemia del paciente. Esa cifra, mil quinientos, la vas a volver a ver en la conducta.' },
        { show: ['mat'], note: 'Líquido: matidez, no timpanismo',
          say: 'Al examen, el hemitórax tiene el murmullo disminuido o abolido, igual que en el neumotórax. Pero a la percusión hay matidez franca, porque lo que hay es líquido, no aire.' },
        { show: ['hip'], note: 'El shock es por pérdida de sangre',
          say: 'Y el shock tiene otro mecanismo: aquí el problema no es una obstrucción, es que el paciente perdió su sangre en el tórax. Es un shock hipovolémico, hemorrágico.' },
        { show: ['pla'], note: 'La diferencia clave: las venas del cuello',
          say: 'Por eso las yugulares están planas, colapsadas: no hay volumen que las llene. Y esta es la diferencia que más se pregunta. Los dos tienen shock y murmullo abolido, pero el neumotórax a tensión tiene timpanismo y yugulares ingurgitadas, y el hemotórax, matidez y yugulares planas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hemotórax: conducta',
      title: 'Reponer, drenar y medir el débito',
      cards: [
        { title: 'Manejo inicial', tag: 'Al mismo tiempo', kind: 'pharma', items: [
          { t: 'Hemoderivados 1:1:1', d: 'Glóbulos rojos, plasma y plaquetas',
            say: 'El manejo inicial del hemotórax tiene dos brazos. El primero es reanimar con hemoderivados, en relación balanceada uno a uno a uno: glóbulos rojos, plasma fresco congelado y plaquetas.' },
          { t: 'Evitar exceso de cristaloides', d: 'Presión arterial meta cercana a 90',
            say: 'Y sin exceso de cristaloides, que diluyen la sangre y pueden desplazar los coágulos. La meta es una presión arterial sistólica cercana a noventa.' },
          { t: 'Tubo pleural grueso 28–32 Fr', d: 'Drena y permite medir el débito',
            say: 'El segundo brazo es instalar de inmediato un tubo pleural grueso, de veintiocho a treinta y dos French. Ese tubo drena la sangre, pero además te da el dato que decide todo: cuánto sale.' },
        ] },
        { title: 'Toracotomía de urgencia', tag: 'Criterios', kind: 'alert', items: [
          { t: 'Drenaje inicial ≥ 1.500 mL', d: 'Sangre fresca al instalar el tubo',
            say: 'Y el débito decide si el paciente va a pabellón. Criterio uno: si al instalar el tubo salen de inmediato mil quinientos mililitros de sangre o más.' },
          { t: 'Más de 200 mL/h por 2 a 4 horas', d: 'Sangrado que continúa',
            say: 'Criterio dos: si sigue sangrando más de doscientos mililitros por hora durante dos a cuatro horas seguidas.' },
          { t: 'Transfusión persistente', d: 'Inestable pese a reponer',
            say: 'Y criterio tres: si necesita transfusiones de forma persistente para mantenerse estable. Cualquiera de los tres indica toracotomía abierta de urgencia, porque ese vaso no va a dejar de sangrar solo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Prioridad ATLS',
      title: 'Las lesiones torácicas que matan primero',
      cards: [
        { title: 'Shock + yugulares ingurgitadas', tag: 'Obstructivo', kind: 'alert', items: [
          { t: 'Neumotórax a tensión', d: 'Timpanismo + tráquea desviada',
            say: 'Ordenemos las lesiones torácicas con riesgo vital, porque el examen te las mezcla en el mismo paciente. Si hay shock con yugulares ingurgitadas, timpanismo y tráquea desviada, es el neumotórax a tensión: aguja y después tubo.' },
          { t: 'Taponamiento cardíaco', d: 'Tríada de Beck, pulmones normales',
            say: 'El taponamiento cardíaco también da hipotensión con yugulares ingurgitadas, más ruidos cardíacos apagados: la tríada de Beck. Pero los pulmones ventilan simétricos, sin timpanismo ni matidez, y la tráquea está en la línea media. Se trata con pericardiocentesis o ventana pericárdica.' },
        ] },
        { title: 'Shock + yugulares planas', tag: 'Hipovolémico', kind: 'key', items: [
          { t: 'Hemotórax masivo', d: 'Matidez + sangre ≥ 1.500 mL',
            say: 'Si el shock viene con yugulares planas y matidez, es el hemotórax masivo: tubo grueso, hemoderivados y, según el débito, toracotomía.' },
        ] },
        { title: 'Insuficiencia respiratoria', tag: 'Sin shock obstructivo', kind: 'normal', items: [
          { t: 'Tórax volante', d: 'Respiración paradójica',
            say: 'Y el tórax volante, con un segmento de la pared que se mueve al revés, la respiración paradójica, por fracturas costales múltiples. Aquí el problema es la contusión pulmonar debajo: oxígeno, analgesia, y ventilación mecánica si hay hipoxemia.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar frente al paciente.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Tensión, hemotórax o taponamiento',
      head: ['Signo', 'Neumotórax a tensión', 'Hemotórax masivo', 'Taponamiento'],
      rows: [
        { cells: ['Presión arterial', 'Shock obstructivo', 'Shock hipovolémico', 'Hipotensión (Beck)'],
          say: 'Repasemos en una tabla, porque es exactamente como el examen te pone las alternativas. Los tres tienen hipotensión: obstructiva en el neumotórax a tensión, hipovolémica en el hemotórax, y como parte de la tríada de Beck en el taponamiento.' },
        { cells: ['Yugulares', 'Ingurgitadas', 'Planas', 'Ingurgitadas'],
          say: 'Las yugulares: ingurgitadas en el neumotórax a tensión y en el taponamiento; planas en el hemotórax. Solo con eso ya separas al hemotórax.' },
        { cells: ['Percusión', 'Timpanismo', 'Matidez', 'Normal'],
          say: 'La percusión separa los otros dos: timpanismo en el neumotórax, matidez en el hemotórax, y normal en el taponamiento.' },
        { cells: ['Murmullo', 'Abolido ipsilateral', 'Disminuido o abolido', 'Conservado bilateral'],
          say: 'El murmullo está abolido en el lado afectado en los dos cuadros pleurales, y conservado en ambos lados en el taponamiento.' },
        { cells: ['Tráquea', 'Desviada al otro lado', 'Centrada o leve desviación', 'Línea media'],
          say: 'La tráquea se desvía claramente al lado contrario en el neumotórax a tensión; en el hemotórax está centrada o apenas desviada, y en el taponamiento, en la línea media.' },
        { cells: ['Primera conducta', 'Aguja 14 G → tubo', 'Tubo + hemoderivados', 'Pericardiocentesis o ventana'],
          say: 'Y la conducta: aguja y luego tubo en el neumotórax a tensión; tubo y hemoderivados en el hemotórax; y pericardiocentesis o ventana pericárdica en el taponamiento.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 30 años, conductora sin cinturón, ingresa tras colisión frontal. Pálida, sudorosa, confusa. PA 78/48 mmHg, FC 124/min, FR 28/min. Yugulares colapsadas. Dolor a la palpación de arcos costales izquierdos, matidez en los dos tercios inferiores del hemitórax izquierdo y ausencia de ruidos respiratorios.',
      question: '¿Cuál es el diagnóstico más probable y la conducta inicial?',
      options: [
        { letter: 'A', text: 'Neumotórax a tensión; punción con aguja en el 2.º espacio intercostal' },
        { letter: 'B', text: 'Taponamiento cardíaco; pericardiocentesis subxifoidea' },
        { letter: 'C', text: 'Hemotórax masivo; tubo pleural grueso y hemoderivados' },
        { letter: 'D', text: 'Contusión pulmonar; nebulización y analgesia oral' },
        { letter: 'E', text: 'Radiografía de tórax antes de decidir' },
      ],
      correct: 'C',
      explanation: 'Shock con yugulares planas + matidez + murmullo abolido en el hemitórax traumatizado: hemotórax masivo. Conducta: tubo pleural 28–32 Fr y resucitación con hemoderivados 1:1:1. El neumotórax a tensión tendría timpanismo y yugulares ingurgitadas; el taponamiento, yugulares ingurgitadas y percusión normal.',
      say: {
        stem: 'Vamos con un caso. Mujer de treinta años, conductora sin cinturón, tras una colisión frontal. Está pálida, sudorosa y confusa, con presión de setenta y ocho sobre cuarenta y ocho y ciento veinticuatro de pulso. Las yugulares están colapsadas. Tiene dolor en las costillas izquierdas, matidez en los dos tercios inferiores del hemitórax izquierdo, y no se escuchan ruidos respiratorios.',
        question: '¿Cuál es el diagnóstico más probable y la conducta inicial?',
        options: 'Las opciones: neumotórax a tensión con punción, taponamiento con pericardiocentesis, hemotórax masivo con tubo y hemoderivados, contusión pulmonar con analgesia, o una radiografía antes de decidir. Piénsalo.',
        answer: 'Es la C. Usa los dos signos de la tabla: yugulares planas y matidez. Eso es hemotórax masivo, un shock hipovolémico. El distractor tentador es el neumotórax a tensión, porque también hay shock y murmullo abolido, pero tendría timpanismo y yugulares ingurgitadas. Y la radiografía, en un paciente en shock, solo retrasa lo que salva la vida.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 32',
      stem: 'Un paciente de 28 años sufre una puñalada en el tórax, en el lado derecho. Al examen físico está en buenas condiciones, con dolor torácico y presenta disminución del murmullo pulmonar, asociado a hipersonoridad a la percusión en el hemitórax derecho.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Pedir radiografía de tórax' },
        { letter: 'B', text: 'Pedir resonancia magnética de tórax' },
        { letter: 'C', text: 'Instalar un tubo pleural' },
        { letter: 'D', text: 'Solicitar TAC de tórax' },
        { letter: 'E', text: 'Realizar videotoracoscopía' },
      ],
      correct: 'A',
      explanation: 'Probable neumotórax traumático, pero sin clínica de tensión: está en buenas condiciones, sin shock, sin yugulares ingurgitadas ni desviación traqueal. Sin tensión no se punciona: primero la radiografía, para ver el tamaño del neumotórax y descartar otras lesiones, como un hemotórax.',
      say: {
        stem: 'Ahora preguntas reales, y parto con una que pone a prueba la regla al revés. Es del EUNACOM de julio de dos mil quince. Paciente de veintiocho años con una puñalada en el hemitórax derecho. Está en buenas condiciones, con dolor, murmullo disminuido e hipersonoridad a derecha.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: radiografía de tórax, resonancia, tubo pleural, TAC de tórax o videotoracoscopía. Piénsalo.',
        answer: 'Es la A, radiografía de tórax. Tiene un neumotórax traumático, pero fíjate que está en buenas condiciones: no hay shock, ni yugulares ingurgitadas, ni tráquea desviada. No es a tensión. Y la regla de no esperar la radiografía vale solo para el paciente inestable. Si está estable, la radiografía mide el neumotórax y busca un hemotórax asociado. El distractor tentador es el tubo, pero primero se confirma.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 123',
      stem: 'Un paciente de 32 años sufre accidente de tránsito, golpeándose el pecho contra el piso. Algunos minutos después evoluciona con dificultad respiratoria, malestar general y compromiso del nivel de conciencia, siendo llevado al servicio de urgencias. Se constata frecuencia cardíaca: 140 por minuto, presión arterial: 86/50 mmHg, frecuencia respiratoria: 45 respiraciones por minuto y saturación de oxígeno: 82% a aire ambiental. En el examen segmentario, se observa ingurgitación yugular con desviación de la tráquea y se ausculta disminución del murmullo pulmonar derecho y ruidos cardíacos apagados.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Contusión pulmonar' },
        { letter: 'B', text: 'Taponamiento cardíaco' },
        { letter: 'C', text: 'Disección aórtica' },
        { letter: 'D', text: 'Neumotórax hipertensivo' },
        { letter: 'E', text: 'Hemotórax masivo' },
      ],
      correct: 'D',
      explanation: 'Shock + ingurgitación yugular + desviación traqueal + murmullo disminuido: neumotórax a tensión. El taponamiento también da taquicardia, hipotensión, yugulares ingurgitadas y ruidos apagados, pero no desvía la tráquea ni disminuye el murmullo. Se descomprime de inmediato.',
      say: {
        stem: 'La siguiente es del EUNACOM de diciembre de dos mil veinticinco. Paciente de treinta y dos años que se golpea el pecho en un accidente de tránsito. Minutos después tiene dificultad respiratoria y compromiso de conciencia, con ciento cuarenta de pulso, presión de ochenta y seis sobre cincuenta, y satura ochenta y dos por ciento. Tiene yugulares ingurgitadas, tráquea desviada, murmullo disminuido a derecha y ruidos cardíacos apagados.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: contusión pulmonar, taponamiento cardíaco, disección aórtica, neumotórax hipertensivo o hemotórax masivo. Piénsalo.',
        answer: 'Es la D, neumotórax hipertensivo, que es lo mismo que a tensión. Esta pregunta está hecha para confundirte con el taponamiento, porque pusieron los ruidos cardíacos apagados. Pero el taponamiento no desvía la tráquea ni te quita el murmullo de un lado. Y el hemotórax cae por las yugulares, que aquí están ingurgitadas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 71',
      stem: 'Paciente de 25 años tras accidente de tránsito llega con timpanismo a la percusión del hemitórax derecho, ausencia de murmullo vesicular derecho, disnea severa y desviación traqueal hacia la izquierda.',
      question: '¿Cuál es el diagnóstico y conducta inmediata?',
      options: [
        { letter: 'A', text: 'Neumotórax a tensión: descompresión con aguja en 2° espacio intercostal' },
        { letter: 'B', text: 'Hemotórax masivo: drenaje pleural' },
        { letter: 'C', text: 'Contusión pulmonar: oxígeno y observación' },
        { letter: 'D', text: 'Fractura de costillas: analgesia' },
        { letter: 'E', text: 'Taponamiento cardíaco: pericardiocentesis' },
      ],
      correct: 'A',
      explanation: 'Timpanismo + murmullo ausente + desviación traqueal contralateral = neumotórax a tensión. Emergencia: descompresión inmediata con aguja en el 2.º espacio intercostal, línea medioclavicular, sin esperar la radiografía.',
      say: {
        stem: 'Esta es del EUNACOM de julio de dos mil veinticinco. Paciente de veinticinco años, tras un accidente de tránsito, con timpanismo y sin murmullo en el hemitórax derecho, disnea severa, y la tráquea desviada a la izquierda.',
        question: '¿Cuál es el diagnóstico y la conducta inmediata?',
        options: 'Las alternativas combinan diagnóstico y conducta: neumotórax a tensión con aguja, hemotórax con drenaje, contusión con oxígeno, fracturas costales con analgesia, o taponamiento con pericardiocentesis. Piénsalo.',
        answer: 'Es la A. Timpanismo, murmullo ausente y tráquea desviada al lado contrario: neumotórax a tensión, y la conducta inmediata es la aguja en el segundo espacio intercostal, sin esperar la radiografía. El hemotórax es el distractor, pero tendría matidez, no timpanismo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 134',
      stem: 'Un niño de 8 años sufre un atropello mientras cruzaba la calle, resultando con golpe en la espalda y las extremidades. Ingresa con marcada disnea, saturando 85% a aire ambiental. Sus signos vitales muestran taquicardia a 150 latidos por minuto y presión arterial 70/40 mmHg. Además, se observan múltiples equimosis y, en el examen pulmonar se ausculta asimetría del murmullo pulmonar, con abolición del murmullo pulmonar izquierdo.',
      question: '¿Cuál de las siguientes es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar intubación orotraqueal' },
        { letter: 'B', text: 'Administrar oxígeno por mascarilla de recirculación' },
        { letter: 'C', text: 'Puncionar el espacio pleural izquierdo' },
        { letter: 'D', text: 'Solicitar radiografía de tórax' },
        { letter: 'E', text: 'Solicitar TAC de tórax' },
      ],
      correct: 'C',
      explanation: 'Trauma, shock, desaturación y murmullo abolido en un hemitórax: neumotórax a tensión hasta demostrar lo contrario. Se descomprime de inmediato (punción o toracostomía), antes que la vía aérea con presión positiva y sin esperar imágenes.',
      say: {
        stem: 'La siguiente, del EUNACOM de diciembre de dos mil veinticinco, cambia el paciente. Niño de ocho años atropellado. Llega con disnea marcada, saturando ochenta y cinco por ciento, con ciento cincuenta de pulso y presión de setenta sobre cuarenta. Tiene el murmullo abolido a izquierda.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: intubar, oxígeno con mascarilla de recirculación, puncionar el espacio pleural izquierdo, radiografía o TAC de tórax. Piénsalo.',
        answer: 'Es la C, puncionar. Trauma, shock y murmullo abolido de un lado: neumotórax a tensión, también en el niño. El distractor más tentador es la intubación, porque está desaturado. Pero recuerda la trampa: ventilar con presión positiva sin descomprimir precipita el paro. Y la radiografía o la TAC, en shock, están contraindicadas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 102',
      stem: 'Una paciente de 56 años ingresa al servicio de urgencias tras sufrir un accidente automovilístico de alta energía. Presenta múltiples lesiones, hemorragia masiva, taquicardia, hipotensión e inestabilidad hemodinámica. Se sospecha una fractura de pelvis en el examen físico. Se solicitan imágenes, entre las que se informan una TAC cerebral con un hematoma subdural izquierdo con desplazamiento de 11 mm desde la línea media de la masa encefálica; una TAC de tórax revela múltiples fracturas costales, neumotórax izquierdo con desplazamiento de la tráquea hacia la derecha; TAC de abdomen y pelvis con fractura de pelvis desplazada.',
      question: '¿Cuál de las siguientes medidas terapéuticas es la más urgente?',
      options: [
        { letter: 'A', text: 'Intubación orotraqueal' },
        { letter: 'B', text: 'Laparotomía exploradora' },
        { letter: 'C', text: 'Evacuación quirúrgica del hematoma subdural' },
        { letter: 'D', text: 'Pleurostomía izquierda' },
        { letter: 'E', text: 'Estabilización de la fractura de pelvis con un dispositivo de compresión neumática' },
      ],
      correct: 'D',
      explanation: 'Entre múltiples lesiones graves, la más urgente es el neumotórax a tensión (desviación traqueal contralateral + hipotensión). Entre las alternativas, la pleurostomía izquierda es la medida prioritaria; si hubiera estado disponible, la descompresión con aguja iría primero.',
      say: {
        stem: 'La última de este tema es del EUNACOM de julio de dos mil veinticuatro, y es un politraumatizado grave. Paciente de cincuenta y seis años, inestable, con un hematoma subdural que desplaza la línea media, fracturas costales múltiples, un neumotórax izquierdo que desplaza la tráquea a la derecha, y una fractura de pelvis desplazada.',
        question: '¿Cuál de las medidas es la más urgente?',
        options: 'Las opciones: intubación, laparotomía, evacuar el hematoma subdural, pleurostomía izquierda, o estabilizar la pelvis. Piénsalo.',
        answer: 'Es la D, pleurostomía izquierda. Todas las lesiones son graves, pero el neumotórax con la tráquea desviada y el paciente hipotenso es un neumotórax a tensión, y ese mata en minutos. Como la aguja no está entre las alternativas, lo correcto es la pleurostomía. Y fíjate en la intubación: sin descomprimir, empeora las cosas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Paciente traumatizado ingresa con un hemotórax masivo derecho. Se instala un tubo de drenaje torácico 32 Fr, con salida inmediata de 1.700 mL de sangre fresca. Pese a la reposición con fluidos y glóbulos rojos, en las 2 horas siguientes el débito es de 250 mL/hora continuo.',
      question: '¿Cuál es la indicación de manejo definitivo?',
      options: [
        { letter: 'A', text: 'Instalar un segundo tubo pleural en el mismo hemitórax' },
        { letter: 'B', text: 'Pinzar el tubo para favorecer el coágulo intratorácico' },
        { letter: 'C', text: 'Toracotomía de urgencia en pabellón' },
        { letter: 'D', text: 'Embolización selectiva por angiografía en 24 horas' },
        { letter: 'E', text: 'Ácido tranexámico y observación en sala' },
      ],
      correct: 'C',
      explanation: 'Cumple los dos criterios de toracotomía de urgencia: drenaje inicial ≥ 1.500 mL (1.700 mL) y débito > 200 mL/h por 2 a 4 horas (250 mL/h). Pinzar el tubo provocaría un hemotórax a tensión.',
      say: {
        stem: 'Para el hemotórax, el banco real no trae preguntas, así que cerramos con un caso representativo del banco EUNACOM. Paciente traumatizado con un hemotórax masivo derecho. Al instalar un tubo de treinta y dos French salen de inmediato mil setecientos mililitros de sangre fresca, y en las dos horas siguientes sigue drenando doscientos cincuenta mililitros por hora, pese a la reposición.',
        question: '¿Cuál es la indicación de manejo definitivo?',
        options: 'Las alternativas: un segundo tubo pleural, pinzar el tubo, toracotomía de urgencia, embolización en veinticuatro horas, o ácido tranexámico y observación. Piénsalo.',
        answer: 'Es la C, toracotomía de urgencia. Cumple los dos criterios de débito: más de mil quinientos mililitros al instalar el tubo, y más de doscientos por hora durante dos horas. El distractor peligroso es pinzar el tubo: la sangre no deja de salir del vaso, solo se acumula en el tórax, y lo conviertes en un hemotórax a tensión.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Neumotórax a tensión', tag: 'Diagnóstico clínico', kind: 'alert', items: [
          { t: 'Shock + yugulares + tráquea desviada', d: 'Con timpanismo: no pidas radiografía',
            say: 'Cerremos con las reglas de oro. Shock, yugulares ingurgitadas, tráquea desviada y timpanismo: neumotórax a tensión. El diagnóstico es clínico, y la radiografía está contraindicada.' },
          { t: 'Aguja 2.º EIC → tubo 28–32 Fr', d: 'Nunca presión positiva antes',
            say: 'Aguja en el segundo espacio intercostal, línea medioclavicular, y después tubo pleural. Nunca ventilación con presión positiva antes de descomprimir.' },
        ] },
        { title: 'Hemotórax masivo', tag: 'Hipovolémico', kind: 'pharma', items: [
          { t: 'Matidez + yugulares planas', d: 'Tubo grueso + hemoderivados 1:1:1',
            say: 'Matidez con yugulares planas: hemotórax masivo. Tubo grueso y hemoderivados uno a uno a uno.' },
          { t: 'Toracotomía: 1.500 mL o 200 mL/h', d: 'Por 2 a 4 horas',
            say: 'Y va a toracotomía si drena mil quinientos mililitros de entrada, o más de doscientos por hora durante dos a cuatro horas.' },
        ] },
        { title: 'La trampa', tag: 'Paciente estable', kind: 'key', items: [
          { t: 'Estable: primero la radiografía', d: 'La regla de no esperar es para el inestable',
            say: 'Y la trampa inversa: si el paciente con neumotórax traumático está estable, primero va la radiografía. Si te llevas una sola idea de hoy: en el tórax traumatizado en shock, las venas del cuello y la percusión te dan el diagnóstico, y el tratamiento no espera ninguna imagen. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Trauma torácico en shock: qué dicen el cuello y la percusión',
    root: N('start', 'Trauma torácico + shock', 'Murmullo abolido en un lado',
      'Paciente con trauma de tórax, en shock, con el murmullo abolido en un hemitórax. No hay tiempo para imágenes: el examen físico decide.',
      ['', N('q', '¿Cómo están las yugulares?', 'Ingurgitadas o planas',
        'La primera pregunta es el cuello: ¿las yugulares están ingurgitadas o planas? Eso te dice si el shock es obstructivo o hipovolémico.',
        ['Ingurgitadas', N('q', '¿Percusión y tráquea?', 'Timpanismo y desviación',
          'Yugulares ingurgitadas: shock obstructivo. Ahora mira la percusión y la tráquea.',
          ['Timpanismo + tráquea desviada', N('alert', 'Neumotórax a tensión', 'Aguja 2.º EIC → tubo 28–32 Fr',
            'Timpanismo y tráquea desviada al otro lado: neumotórax a tensión. Aguja gruesa en el segundo espacio intercostal, y luego tubo pleural. Sin radiografía.')],
          ['Pulmones normales, ruidos apagados', N('refer', 'Taponamiento cardíaco', 'Pericardiocentesis o ventana',
            'Si los pulmones ventilan simétricos y los ruidos cardíacos están apagados, es un taponamiento: pericardiocentesis o ventana pericárdica.')])],
        ['Planas', N('do', 'Hemotórax masivo', 'Tubo grueso + hemoderivados 1:1:1',
          'Yugulares planas con matidez: hemotórax masivo. Tubo pleural grueso y reanimación con hemoderivados.',
          ['Débito ≥ 1.500 mL o > 200 mL/h', N('alert', 'Toracotomía de urgencia', 'Por 2 a 4 horas',
            'Si al instalar el tubo salen mil quinientos mililitros o más, o sigue sangrando más de doscientos por hora durante dos a cuatro horas, va a toracotomía de urgencia.')],
          ['Débito bajo y estable', N('ok', 'Tubo + vigilar débito', 'Reanimación balanceada',
            'Si el débito es bajo y el paciente se estabiliza, se mantiene el tubo y se vigila el débito.')])])]),
  },
};
