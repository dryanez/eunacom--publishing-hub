// Clase 4.6 (Cardiología) — Cardiopatías congénitas del adulto: CIA, CIV, ductus y coartación. Guion escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_4.cjs (cardio-27). Código: 1.01.1.003 Cardiopatía congénita en adulto
// (Dx sospecha · Tx inicial · Seguimiento derivar), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-27): Julio 2025 P147 (CIA, embarazo), Diciembre 2019 P28 (CIA con FA y BCRD), Julio 2016 P86 (CIA
// clásica) y Julio 2019 P137 (CIA con antecedente de soplo). Enunciados y alternativas del banco.
// Descartadas: Diciembre 2022 P3 (recoartación operada con soplo DIASTÓLICO: la clave marca recoartación, pero el cuadro es de insuficiencia aórtica;
// la misma historia en Diciembre 2018 P91 tiene clave insuficiencia aórtica y va en cardio-24); Diciembre 2022 P17 (el enunciado es una CIA
// clásica con latido paraesternal derecho y la clave marca coartación aórtica: clave dudosa); Julio 2018 P32 (válida, repite lo de la CIA);
// Julio 2017 P24 (enunciado con palabras cortadas); Diciembre 2019 P113 y Diciembre 2017 P1 (soplo funcional del joven con clave CIA: ambigua);
// Julio 2024 P88 (ductus: se usa en cardio-22); Diciembre 2024 P68 (alternativas rotas).
// Fotos en contexto: Doppler color de una CIA ostium secundum (Harrison 21.ª ed., p. 1898), radiografía de coartación del adulto con muescas
// costales (de Lacey y cols., The Chest X-Ray: A Survival Guide, Elsevier 2008, p. 365) y aortografía antes y después del stent (Nelson 22.ª ed., p. 2795).
// En movimiento: scenes/cardio_b4.html ?v=cia (desdoblamiento del segundo ruido fisiológico y fijo de la CIA), gráfico propio de código.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cardio-27',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'CIA, CIV, ductus y coartación: reconocerlos por la semiología y saber cuándo cerrarlos',
      say: 'Bienvenido. Las cardiopatías congénitas ya no son solo de los niños: la mayoría de los defectos simples llega a la edad adulta, y a veces se descubre tarde, por un soplo en un examen laboral, una fibrilación auricular a los cuarenta años, un embarazo o una hipertensión en un joven. El examen las pregunta siempre por la semiología, y la comunicación interauricular es la reina. Hoy aprendes a reconocer los cuatro defectos clave y su tratamiento.',
    },

    {
      type: 'flow',
      kicker: 'Comunicación interauricular',
      title: 'El cortocircuito que sobrecarga el lado derecho',
      nodes: [
        { id: 'd', col: 0, row: 1, k: 'cause', t: 'CIA ostium secundum', s: '70%; fosa oval' },
        { id: 's', col: 1, row: 1, k: 'mech', t: 'Cortocircuito izquierda-derecha', s: 'Más flujo al VD y al pulmón' },
        { id: 'a', col: 2, row: 0, k: 'effect', t: 'FA, flutter, embolia paradójica', s: 'Entre los 30 y los 40 años' },
        { id: 'h', col: 2, row: 2, k: 'risk', t: 'Hipertensión pulmonar', s: 'Si se hace fija: Eisenmenger' },
        { id: 'c', col: 4, row: 1, k: 'good', t: 'Cierre percutáneo', s: 'Sobrecarga del VD o Qp:Qs > 1,5' },
      ],
      edges: [{ from: 'd', to: 's' }, { from: 's', to: 'a' }, { from: 's', to: 'h' }, { from: 'a', to: 'c' }, { from: 'h', to: 'c' }],
      steps: [
        { show: ['d', 's'], note: 'El defecto más frecuente en el adulto',
          say: 'La comunicación interauricular es la cardiopatía congénita que más se diagnostica en el adulto, y es más frecuente en mujeres. El tipo común es el ostium secundum, en la fosa oval, que da el setenta por ciento. Como el ventrículo derecho es más distensible, la sangre pasa de la aurícula izquierda a la derecha. El corazón derecho se sobrecarga de volumen y aumenta el flujo pulmonar.' },
        { show: ['a', 'h'], note: 'Tardío: arritmias y embolia paradójica',
          say: 'Es asintomática hasta la tercera o cuarta década. Después aparecen disnea, palpitaciones por fibrilación auricular o flutter, y a veces una embolia paradójica: un trombo venoso que cruza al lado izquierdo y produce un accidente cerebrovascular. Con los años puede aparecer hipertensión pulmonar, y si se hace fija, el cortocircuito se invierte.' },
        { show: ['c'], note: 'Se cierra con dispositivo',
          say: 'Se cierra si hay sobrecarga del ventrículo derecho o un cociente de flujos mayor de uno coma cinco, aunque no haya síntomas. De elección, el cierre percutáneo con dispositivo Amplatzer en el ostium secundum con bordes adecuados. Está contraindicado en el síndrome de Eisenmenger.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología de la CIA',
      title: 'Desdoblamiento fijo, rSR\' y botón pulmonar',
      cards: [
        { title: 'Auscultación', tag: 'Patognomónico', kind: 'key', items: [
          { t: 'R2 desdoblado amplio y FIJO', d: 'No varía con la respiración',
            say: 'La semiología patognomónica es el desdoblamiento amplio y fijo del segundo ruido, que no varía con la respiración. El volumen extra de la aurícula derecha retrasa el cierre pulmonar, y en la inspiración el mayor retorno se compensa con un menor cortocircuito, de modo que el intervalo no cambia.' },
          { t: 'Soplo eyectivo en el foco pulmonar', d: 'Por hiperflujo, no por el shunt',
            say: 'Se ausculta un soplo sistólico eyectivo en el foco pulmonar, producido por el hiperflujo y no por el cortocircuito, que es silencioso.' },
        ] },
        { title: 'ECG y radiografía', tag: 'Corazón derecho', kind: 'criteria', items: [
          { t: 'Bloqueo incompleto de rama derecha', d: 'rSR\' en V1; eje derecho (primum: izquierdo)',
            say: 'El electrocardiograma muestra un bloqueo incompleto de rama derecha, con un patrón rSR prima en V uno, y eje a la derecha en el secundum. En el adulto, con fibrilación auricular.' },
          { t: 'Hiperflujo y botón pulmonar', d: 'Cardiomegalia derecha',
            say: 'La radiografía muestra aumento del flujo pulmonar, con la arteria pulmonar prominente, el botón pulmonar, y cardiomegalia derecha.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'El segundo ruido: normal y en la CIA',
      images: [
        { src: 'animaciones/cardio-27/A1_cia_r2_fijo.mp4', label: 'Desdoblamiento fisiológico y fijo', credit: 'Animación propia con los criterios del libro' },
      ],
      steps: [
        { note: 'En el normal cambia con la respiración; en la CIA, no',
          say: 'Mira los dos fonocardiogramas. Arriba, un corazón normal: cuando el círculo azul de la respiración sube, en la inspiración, el cierre aórtico y el pulmonar se separan, y en la espiración se juntan. Abajo, la comunicación interauricular: la separación es amplia y no cambia nunca, respire como respire. Ese es el desdoblamiento fijo, la clave de la CIA.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Imagen y tratamiento',
      title: 'Eco de la CIA y complicaciones',
      cards: [
        { title: 'Ecocardiograma', tag: 'Doppler color', kind: 'key', items: [
          { t: 'Defecto del septo con flujo', d: 'Sobrecarga del VD',
            say: 'El ecocardiograma con Doppler color muestra el defecto y la sobrecarga derecha. Mira esta CIA grande: en el septo entre las dos aurículas se ve el defecto, y a la derecha el color muestra el flujo que lo atraviesa.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-27/01_cia-ostium-secundum-subcostal-doppler-color__harrison_p1898.jpg', label: 'Eco: CIA ostium secundum', at: 'Mira esta CIA grande', credit: 'Harrison, Principios de Medicina Interna, 21.ª ed., p. 1898' } },
        ] },
        { title: 'Otros tipos', tag: 'Se operan', kind: 'normal', items: [
          { t: 'Primum, seno venoso, seno coronario', d: 'Cirugía; primum con eje izquierdo',
            say: 'Los otros tipos son el ostium primum, que se asocia al síndrome de Down y tiene eje a la izquierda, el seno venoso, con drenaje anómalo de venas pulmonares, y el seno coronario. Esos se cierran con cirugía. Si hay fibrilación auricular se anticoagula.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'CIV y ductus',
      title: 'Holosistólico con frémito y soplo continuo',
      cards: [
        { title: 'Comunicación interventricular', tag: 'Soplo en barra', kind: 'key', items: [
          { t: 'Holosistólico rudo + frémito', d: 'Borde esternal izquierdo bajo',
            say: 'La comunicación interventricular da un soplo holosistólico rudo, en barra, en el borde esternal izquierdo bajo, con frémito palpable. En los defectos pequeños, la enfermedad de Roger, suena más fuerte que en los grandes.' },
          { t: 'Pequeña: control; grande: cierre', d: 'Qp:Qs > 1,5, endocarditis o IAo asociada',
            say: 'La pequeña es asintomática y se controla. Una grande produce cardiomegalia izquierda e insuficiencia cardíaca, y, sin corregir, Eisenmenger. Se cierra con Qp:Qs mayor de uno coma cinco, con sobrecarga del ventrículo izquierdo, endocarditis previa o insuficiencia aórtica asociada.' },
        ] },
        { title: 'Ductus arterioso', tag: 'En maquinaria', kind: 'criteria', items: [
          { t: 'Soplo continuo de Gibson', d: 'Infraclavicular izquierdo; pulso saltón',
            say: 'El ductus es una comunicación entre la aorta y la arteria pulmonar. Da un soplo continuo, en maquinaria de vapor, el soplo de Gibson, bajo la clavícula izquierda, con pulso saltón.' },
          { t: 'Cierre percutáneo; Eisenmenger: cianosis diferencial', d: 'Pies cianóticos, manos rosadas',
            say: 'En el adulto se cierra por vía percutánea, con dispositivo o coils. Si se hizo hipertensión pulmonar fija, aparece la cianosis diferencial: los pies cianóticos y las manos rosadas, y entonces ya no se cierra.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Coartación de la aorta',
      title: 'Hipertensión en los brazos, pulsos débiles en las piernas',
      cards: [
        { title: 'Semiología cardinal', tag: 'Hipertensión del joven', kind: 'alert', items: [
          { t: 'HTA en los brazos, pulsos femorales débiles', d: 'Gradiente braquio-femoral > 20 mmHg',
            say: 'La coartación es una estenosis de la aorta, casi siempre justo después de la arteria subclavia izquierda. Se asocia a válvula bicúspide, al síndrome de Turner y a aneurismas cerebrales. Se descubre en un joven con hipertensión de difícil manejo. Lo cardinal: hipertensión en los brazos, pulsos femorales muy disminuidos o retardados, y un gradiente de presión entre el brazo y la pierna de más de veinte milímetros de mercurio.' },
          { t: 'Retraso radiofemoral', d: 'Soplo interescapular',
            say: 'Se palpa un retraso entre el pulso radial y el femoral, y puede haber un soplo sistólico interescapular.' },
        ] },
        { title: 'Radiografía', tag: 'Roesler y signo del 3', kind: 'criteria', items: [
          { t: 'Muescas costales de Roesler', d: 'Costillas 3.ª a 8.ª, borde inferior',
            say: 'La radiografía muestra las muescas en el borde inferior de las costillas, de la tercera a la octava, el signo de Roesler. Mira esta radiografía de un adulto con coartación: en las costillas posteriores se ven las erosiones, por la circulación colateral de arterias intercostales dilatadas.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-27/02_coartacion-adulto-rx-torax-muescas-costales__cxr_p365.jpg', label: 'Rx: muescas costales', at: 'Mira esta radiografía', credit: 'de Lacey y cols., The Chest X-Ray: A Survival Guide (Elsevier, 2008), p. 365' } },
          { t: 'Signo del 3 en la aorta', d: 'Indentación en la coartación',
            say: 'Y el signo del tres en el contorno de la aorta, que marca el sitio de la estrechez. La confirmación se hace con ecocardiograma supraesternal, angioTAC o resonancia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento de la coartación',
      title: 'Stent o cirugía, y control de por vida',
      cards: [
        { title: 'Tratamiento', tag: 'Del adulto', kind: 'pharma', items: [
          { t: 'Angioplastía con stent', d: 'De elección si la anatomía lo permite',
            say: 'En el adulto, el tratamiento de elección es la angioplastía con stent. Mira esta aortografía: a la izquierda, la estrechez de la aorta, y a la derecha, la arteria ya abierta después de implantar el stent. La cirugía se reserva para anatomías complejas.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-27/03_coartacion-aortografia-antes-y-despues-stent__nelson_p2795.jpg', label: 'Aortografía antes y después', at: 'Mira esta aortografía', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., p. 2795' } },
          { t: 'Control de por vida', d: 'HTA, bicúspide, aorta, recoartación',
            say: 'Después de corregirla, persisten la hipertensión y el riesgo de aneurismas, recoartación, disección y enfermedad coronaria precoz, por lo que se controla de por vida. Y un operado de coartación con un soplo diastólico tiene una insuficiencia aórtica por su válvula bicúspide, no una recoartación.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Síndrome de Eisenmenger',
      title: 'Cuando el cortocircuito se invierte',
      cards: [
        { title: 'Qué pasa', tag: 'Cianosis y eritrocitosis', kind: 'alert', items: [
          { t: 'Hipertensión pulmonar fija', d: 'Cortocircuito derecha-izquierda',
            say: 'Cualquier cortocircuito grande, sin corregir, puede terminar en el síndrome de Eisenmenger: el flujo excesivo daña los vasos pulmonares, la resistencia supera a la sistémica y el cortocircuito se invierte.' },
          { t: 'Cianosis, dedos en palillo de tambor, eritrocitosis', d: 'Hemoptisis y arritmias',
            say: 'El paciente tiene cianosis, dedos en palillo de tambor y eritrocitosis, con hemoptisis y arritmias.' },
        ] },
        { title: 'Conducta', tag: 'No cerrar el defecto', kind: 'normal', items: [
          { t: 'No se cierra', d: 'Vasodilatadores pulmonares',
            say: 'Aquí el defecto no se cierra, porque el ventrículo derecho no tolera la presión pulmonar. Se usan vasodilatadores pulmonares, como sildenafilo o bosentán, y se evitan la altitud y la deshidratación.' },
          { t: 'Embarazo contraindicado', d: 'Mortalidad materna de 30 a 50%',
            say: 'El embarazo está contraindicado, con una mortalidad materna de treinta a cincuenta por ciento. Y la profilaxis de endocarditis solo corresponde a la cardiopatía cianótica no reparada, a la reparada con material protésico en los primeros seis meses y a la con defecto residual junto al material.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del hallazgo al defecto congénito.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Congénitas del adulto: dato, diagnóstico, error',
      head: ['Dato', 'Diagnóstico', 'Error típico'],
      rows: [
        { cells: ['R2 desdoblado fijo + rSR\' en V1', 'CIA', 'Estenosis pulmonar'],
          say: 'Segundo ruido desdoblado fijo con un bloqueo incompleto de rama derecha: comunicación interauricular. No una estenosis pulmonar.' },
        { cells: ['Holosistólico en barra con frémito', 'CIV', 'Ductus o CIA'],
          say: 'Soplo holosistólico en barra con frémito: comunicación interventricular.' },
        { cells: ['Soplo continuo infraclavicular, pulso saltón', 'Ductus arterioso', 'CIV'],
          say: 'Soplo continuo bajo la clavícula izquierda con pulso saltón: ductus. La CIV no es continua.' },
        { cells: ['HTA en brazos, pulsos femorales débiles', 'Coartación', 'Feocromocitoma o hiperaldosteronismo'],
          say: 'Hipertensión en los brazos con pulsos femorales débiles: coartación. Es una hipertensión secundaria con un hallazgo físico, y no un feocromocitoma.' },
        { cells: ['Operado de coartación con soplo diastólico', 'Insuficiencia aórtica (bicúspide)', 'Recoartación'],
          say: 'Un operado de coartación con un soplo diastólico: insuficiencia aórtica por la válvula bicúspide, no una recoartación.' },
        { cells: ['Pies cianóticos, manos rosadas, ductus', 'Eisenmenger: no cerrar', 'Cerrar el ductus'],
          say: 'Pies cianóticos con manos rosadas en un ductus: Eisenmenger. No se cierra.' },
        { cells: ['Adulto con una CIA y sobrecarga del VD', 'Cierre percutáneo (Amplatzer)', 'Esperar a que dé síntomas'],
          say: 'Adulto con una CIA y sobrecarga del ventrículo derecho: cierre percutáneo, aunque no tenga síntomas. Esperar es el error.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 22 años es derivado desde un chequeo laboral por hallazgo de hipertensión arterial (PA 175/95 mmHg en el brazo derecho). Pulsos radiales llenos y vigorosos, pero pulsos femorales y pedios muy débiles y retardados; la presión en el tobillo es de 100/60 mmHg. La radiografía de tórax muestra muescas erosivas en el borde inferior de las costillas posteriores y una indentación aórtica en 3. ECG con hipertrofia ventricular izquierda.',
      question: '¿Cuál es el diagnóstico y el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Feocromocitoma; cirugía suprarrenal' },
        { letter: 'B', text: 'Coartación aórtica; angioplastía con stent' },
        { letter: 'C', text: 'Estenosis de la arteria renal; angioplastía renal' },
        { letter: 'D', text: 'Ductus arterioso persistente; cierre con coils' },
        { letter: 'E', text: 'Hiperaldosteronismo primario; espironolactona' },
      ],
      correct: 'B',
      explanation: 'Hipertensión en las extremidades superiores, pulsos femorales disminuidos y retardados, gradiente braquio-femoral mayor de 20 mmHg y el signo de Roesler son patognomónicos de coartación aórtica. La confirmación es con ecocardiograma supraesternal y angioTAC, y el tratamiento de elección en el adulto es la angioplastía con stent (o cirugía en anatomías complejas), con control de por vida.',
      say: {
        stem: 'Un hombre de veintidós años llega de un chequeo laboral por hipertensión: ciento setenta y cinco sobre noventa y cinco en el brazo derecho. Los pulsos radiales son vigorosos, pero los femorales y pedios son muy débiles y retardados, y la presión en el tobillo es mucho menor. La radiografía muestra muescas en el borde inferior de las costillas posteriores y una indentación de la aorta en forma de tres.',
        question: '¿Cuál es el diagnóstico y el tratamiento de elección?',
        options: 'Las opciones: feocromocitoma; coartación aórtica con angioplastía con stent; estenosis de la arteria renal; ductus arterioso con cierre; o hiperaldosteronismo con espironolactona. Piénsalo.',
        answer: 'Es la B. La hipertensión en los brazos con pulsos femorales débiles y el signo de Roesler es una coartación aórtica, y en el adulto se trata con angioplastía con stent. La C tienta porque también es una hipertensión secundaria del joven, pero la estenosis renal no da pulsos femorales débiles ni muescas costales.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 147',
      stem: 'Mujer de 45 años que recuerda que durante un embarazo hace 20 años le diagnosticaron un soplo cardíaco. Actualmente asintomática, tolera el ejercicio normal. Auscultación: soplo sistólico II/VI en foco pulmonar con desdoblamiento fijo del segundo ruido.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Tetralogía de Fallot' },
        { letter: 'B', text: 'Ductus arterioso persistente' },
        { letter: 'C', text: 'Estenosis pulmonar' },
        { letter: 'D', text: 'Comunicación interauricular (CIA)' },
        { letter: 'E', text: 'Comunicación interventricular' },
      ],
      correct: 'D',
      explanation: 'Soplo sistólico eyectivo en el foco pulmonar con desdoblamiento fijo del segundo ruido: comunicación interauricular, que suele diagnosticarse por primera vez en el adulto o en un embarazo. El ductus daría un soplo continuo y la CIV, un soplo holosistólico con frémito.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Una mujer de cuarenta y cinco años recuerda que en un embarazo, hace veinte años, le encontraron un soplo. Hoy no tiene síntomas y tolera el ejercicio. Tiene un soplo sistólico de grado dos en el foco pulmonar y el segundo ruido desdoblado de forma fija.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: tetralogía de Fallot; ductus arterioso persistente; estenosis pulmonar; comunicación interauricular; o comunicación interventricular. Piénsalo.',
        answer: 'Es la D. El soplo en el foco pulmonar con desdoblamiento fijo del segundo ruido es una comunicación interauricular, que se descubre en el embarazo porque aumenta el gasto cardíaco. La C tienta porque el soplo está en el foco pulmonar, pero la estenosis pulmonar no tiene el desdoblamiento fijo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 28',
      stem: 'Un hombre de 40 años consulta por disnea de esfuerzos de algunos años de evolución, que aparece con medianos esfuerzos, asociada a palpitaciones ocasionales. Al examen físico tiene edema de extremidades inferiores, FC: 75x’, PA: 120/80 mmHg, murmullo pulmonar presente, con escasos crépitos bibasales y al examen cardíaco presenta un soplo sistólico de ubicación paraesternal, con segundo ruido desdoblado fijo. Se solicita un electrocardiograma, que muestra eje a +120°, fibrilación auricular, con un bloqueo completo de la rama derecha del haz de His.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Comunicación interauricular' },
        { letter: 'B', text: 'Ductus arteriosos persistente' },
        { letter: 'C', text: 'Comunicación interventricular' },
        { letter: 'D', text: 'Estenosis aórtica' },
        { letter: 'E', text: 'Estenosis mitral' },
      ],
      correct: 'A',
      explanation: 'Un adulto con disnea, edema, soplo sistólico paraesternal, R2 desdoblado fijo, fibrilación auricular y bloqueo completo de rama derecha: comunicación interauricular con dilatación derecha, el cuadro completo del adulto sin tratar. La estenosis aórtica no desdobla el segundo ruido y la mitral da un retumbo diastólico.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un hombre de cuarenta años tiene disnea de esfuerzos desde hace años y palpitaciones. Tiene edema de las piernas, un soplo sistólico paraesternal con el segundo ruido desdoblado fijo, y un electrocardiograma con eje a la derecha, fibrilación auricular y bloqueo completo de rama derecha.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: comunicación interauricular; ductus arterioso persistente; comunicación interventricular; estenosis aórtica; o estenosis mitral. Piénsalo.',
        answer: 'Es la A. Es la comunicación interauricular del adulto sin tratar: desdoblamiento fijo, fibrilación auricular por la dilatación de la aurícula derecha, eje a la derecha y bloqueo de rama derecha. La E tienta por la fibrilación auricular, pero la estenosis mitral da un retumbo diastólico y no un desdoblamiento fijo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 86',
      stem: 'Un hombre de 40 años consulta por disnea y palpitaciones ocasionales. Al examen físico presenta un soplo sistólico basal, con desdoblamiento fijo del segundo ruido. Se solicita un electrocardiograma, que muestra un bloqueo completo de rama derecha.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Comunicación interauricular' },
        { letter: 'B', text: 'Ductus arteriosos persistente' },
        { letter: 'C', text: 'Comunicación interventricular' },
        { letter: 'D', text: 'Estenosis aórtica' },
        { letter: 'E', text: 'Estenosis pulmonar' },
      ],
      correct: 'A',
      explanation: 'Un soplo sistólico basal con desdoblamiento fijo del segundo ruido y bloqueo de rama derecha es una comunicación interauricular, aun en un adulto: el hallazgo clave es la fijeza del desdoblamiento, que no cambia con la respiración.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un hombre de cuarenta años tiene disnea y palpitaciones ocasionales. Al examen, un soplo sistólico basal con el segundo ruido desdoblado de forma fija, y un bloqueo completo de rama derecha en el electrocardiograma.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: comunicación interauricular; ductus arterioso persistente; comunicación interventricular; estenosis aórtica; o estenosis pulmonar. Piénsalo.',
        answer: 'Es la A. El desdoblamiento fijo con bloqueo de rama derecha es una comunicación interauricular, aunque ya sea un adulto. La E tienta porque la estenosis pulmonar también tiene un soplo basal y puede dar bloqueo de rama derecha, pero no tiene el desdoblamiento fijo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 137',
      stem: 'Un paciente de 24 años presenta disnea de esfuerzos, asociado a edema de extremidades inferiores. Refiere antecedente de soplo en la infancia. Al examen físico tiene PA: 120/80 mmHg, FC: 74x’, examen cardiopulmona con un segundo ruido desdoblado y fijo, un soplo sistólico eyectivo, paraesternal izquierdo y crepitaciones escasas en ambas bases pulmonares. El electrocardiograma muestra una imagen de bloqueo completo de rama derecha.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Comunicación interauricular' },
        { letter: 'B', text: 'Comunicación interventricular' },
        { letter: 'C', text: 'Coartación aórtica' },
        { letter: 'D', text: 'Ductus arterioso persistente' },
        { letter: 'E', text: 'Tetralogía de Fallot' },
      ],
      correct: 'A',
      explanation: 'Un adulto joven con antecedente de soplo en la infancia, disnea, edema, soplo eyectivo paraesternal izquierdo, segundo ruido desdoblado fijo y bloqueo de rama derecha: comunicación interauricular. La coartación presenta hipertensión con pulsos femorales débiles, y el ductus un soplo continuo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Un joven de veinticuatro años, con un soplo en la infancia, tiene disnea de esfuerzos y edema de las piernas. Tiene el segundo ruido desdoblado y fijo, un soplo eyectivo paraesternal izquierdo y un bloqueo completo de rama derecha en el electrocardiograma.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: comunicación interauricular; comunicación interventricular; coartación aórtica; ductus arterioso persistente; o tetralogía de Fallot. Piénsalo.',
        answer: 'Es la A. Otra vez la comunicación interauricular: soplo infantil, desdoblamiento fijo y bloqueo de rama derecha. La B tienta porque también es un defecto del septo, pero la comunicación interventricular tiene un soplo holosistólico con frémito y un segundo ruido que sí varía.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: congénitas del adulto',
      cards: [
        { title: 'Reconocer', tag: 'Semiología', kind: 'key', items: [
          { t: 'CIA: R2 fijo + rSR\' en V1', d: 'Cierre con Amplatzer si Qp:Qs > 1,5',
            say: 'Cerremos con las reglas de oro. La comunicación interauricular se reconoce por el desdoblamiento fijo del segundo ruido y el bloqueo incompleto de rama derecha, y se cierra con dispositivo si hay sobrecarga o un cociente mayor de uno coma cinco.' },
          { t: 'CIV: holosistólico con frémito · Ductus: continuo', d: 'Gibson infraclavicular izquierdo',
            say: 'La CIV da un soplo holosistólico con frémito, y el ductus un soplo continuo en maquinaria bajo la clavícula izquierda.' },
        ] },
        { title: 'Decidir', tag: 'Coartación y Eisenmenger', kind: 'alert', items: [
          { t: 'Coartación: HTA en brazos, pulsos femorales débiles', d: 'Roesler; stent; control de por vida',
            say: 'La coartación: hipertensión en los brazos, pulsos femorales débiles y signo de Roesler. Se trata con stent y se controla de por vida, con la válvula bicúspide y la aorta.' },
          { t: 'Eisenmenger: no cerrar', d: 'Cianosis diferencial; sin embarazo',
            say: 'Y en el síndrome de Eisenmenger, el cortocircuito se invierte: no se cierra, se dan vasodilatadores pulmonares y se evita el embarazo. Si te llevas una sola idea de hoy: un soplo con el segundo ruido desdoblado y fijo es una CIA hasta demostrar lo contrario. Nos vemos en la próxima clase, con la endocarditis.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Cardiopatía congénita del adulto: del hallazgo al defecto',
    root: N('start', 'Soplo, arritmia o hipertensión en un joven', 'Antecedente de soplo infantil',
      'Un adulto con un soplo desde la infancia, una fibrilación auricular joven, una disnea en el embarazo o una hipertensión en un menor de treinta años. Examina los pulsos de las cuatro extremidades y ausculta con cuidado.',
      ['R2 fijo, soplo pulmonar, rSR\' en V1', N('do', 'CIA', 'Cierre con dispositivo si hay sobrecarga',
        'Si el segundo ruido está desdoblado y fijo, con soplo en el foco pulmonar y bloqueo incompleto de rama derecha, es una comunicación interauricular. Se cierra con dispositivo si hay sobrecarga del ventrículo derecho.')],
      ['Holosistólico con frémito o continuo', N('do', 'CIV o ductus', 'Cierre si Qp:Qs > 1,5',
        'Si es un holosistólico con frémito, es una comunicación interventricular, y si es continuo, un ductus. Ambos se estudian con ecocardiograma y se cierran si hay sobrecarga.')],
      ['HTA en brazos, pulsos femorales débiles', N('alert', 'Coartación', 'AngioTAC; stent',
        'Si hay hipertensión en los brazos con pulsos femorales débiles, es una coartación. Se confirma con angioTAC y se trata con stent.')],
      ['Cianosis, hipertensión pulmonar fija', N('refer', 'Eisenmenger', 'No cerrar; vasodilatadores',
        'Si hay cianosis con hipertensión pulmonar fija, es un síndrome de Eisenmenger: no se cierra el defecto, y se derivan a una unidad especializada.')],
    ),
  },
};
