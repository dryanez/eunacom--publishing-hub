// Clase 12.15 (Traumatología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_traumatologia.cjs (trauma-15). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// Se cruza con trauma-11, que ya cubre lumbago mecánico e inflamatorio, panorama de manguito y capsulitis, tendinitis y bursitis;
// aquí se profundiza en signos de alarma del lumbago, hernia, cervicalgia y cervicobraquialgia, y manguito rotador (arco doloroso, Neer, Jobe).
// No se repiten las preguntas reales de trauma-11 (Julio 2019 P29, Agosto 2021 P82, Julio 2019 P72, Enero 2023 P159, Diciembre 2022 P141).
// Descartadas: Diciembre 2018 P140 (casi igual a Agosto 2021 P82 de trauma-11); Julio 2015 P126 (el banco responde AINE y kinesioterapia en un hombro con dolor activo y pasivo,
// y el libro indica corticoides para la capsulitis; ver informe); Julio 2013 P141 y Diciembre 2017 P101 repiten lo ya cubierto.
// El libro no trae las maniobras de Neer, Hawkins y Jobe, ni la prueba de Spurling, ni la cauda equina: se enseñan solo con lo que dicen el banco real y los pies de figura
// de Bailey & Love (ver informe, categoría C). Las tablas plantilla del libro (fracturas, neurovascular), la fibromialgia (sin sección en el libro) y la pregunta genérica no se usan.
// El caso clínico (cervicobraquialgia) está escrito para la clase.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'trauma-15',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Lumbago, cervicalgia y hombro doloroso: signos de alarma y manguito rotador',
      say: 'Bienvenido. Esta clase cierra el bloque de traumatología con el dolor osteomuscular que ves todos los días. Ya sabes separar lo mecánico de lo inflamatorio. Hoy vamos más lejos: qué signos de alarma te obligan a pedir imágenes en el dolor lumbar, cómo se maneja el cuello, y cómo examinar un hombro con manguito rotador.',
    },

    {
      type: 'points',
      kicker: 'Lumbago',
      title: 'Lumbago: lo común y lo alarmante',
      cards: [
        { title: 'Lumbago mecánico', tag: 'La gran mayoría', kind: 'key', items: [
          { t: 'Debilidad de la musculatura axial', d: 'Lumbar y abdominal', say: 'La causa más frecuente de dolor lumbar es el lumbago mecánico, por debilidad de la musculatura axial, lumbar y abdominal, que produce posiciones viciosas e irrita articulaciones, músculos o nervios.' },
          { t: 'AINE, actividad y kinesioterapia', d: 'Sin resonancia ni reposo prolongado', say: 'Se trata con antiinflamatorios, reposo relativo y kinesioterapia cuando el dolor cede. No se pide resonancia, y el reposo absoluto en cama prolonga la incapacidad.' },
        ] },
        { title: 'Cuándo sospechar otra cosa', tag: 'Signos de alarma', kind: 'alert', items: [
          { t: 'Resonancia solo con alarma', d: 'Fractura, cáncer, infección o déficit', say: 'La resonancia se reserva para el lumbago con signos de alarma: sospecha de fractura, de cáncer, de infección, de espondilitis anquilosante o compromiso neurológico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Lumbago',
      title: 'Los signos de alarma, uno por uno',
      cards: [
        { title: 'Qué buscar', tag: 'Banderas rojas', kind: 'alert', items: [
          { t: 'Fiebre y dolor vertebral', d: 'Discitis o espondilodiscitis', say: 'Primero, fiebre con dolor intenso a la palpación de la columna, sobre todo en un diabético o después de una infección urinaria: discitis o espondilodiscitis.' },
          { t: 'Dolor súbito en adulto mayor', d: 'Fractura vertebral por fragilidad', say: 'Segundo, un dolor súbito al levantar peso en una mujer mayor, con dolor a la palpación vertebral y un tórax encorvado: fractura vertebral.' },
          { t: 'Anestesia perineal o vesical', d: 'Cauda equina: urgencia', say: 'Tercero, anestesia en la zona perineal, o alteración de la función eréctil o urinaria: síndrome de cauda equina, una urgencia que se deriva de inmediato.' },
          { t: 'Dolor que mejora con ejercicio', d: 'Piensa en espondilitis anquilosante', say: 'Cuarto, el dolor inflamatorio de un joven, que empeora con el reposo y mejora con el ejercicio: espondilitis anquilosante.' },
        ] },
        { title: 'Hernia y lumbociática', tag: 'Neurológico', kind: 'key', items: [
          { t: 'Lumbociática: irradia a la pierna', d: 'Igual manejo si no hay déficit', say: 'La lumbociática es dolor lumbar que se irradia a la extremidad inferior, y se maneja igual que el lumbago mientras no haya compromiso neurológico.' },
          { t: 'Cirugía de la hernia: dos casos', d: 'Fracaso médico o déficit agudo', say: 'La cirugía de una hernia del núcleo pulposo se indica solo en dos casos: cuando fracasó un tratamiento médico bien llevado, o cuando hay un compromiso neurológico agudo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuello',
      title: 'Cervicalgia y cervicobraquialgia',
      cards: [
        { title: 'Mismo razonamiento', tag: 'Como el lumbago', kind: 'key', items: [
          { t: 'Cervicalgia: dolor de cuello', d: 'Mecánico en la mayoría', say: 'La cervicalgia es el dolor de cuello, y la cervicobraquialgia es el dolor cervical que se irradia al brazo. Siguen la misma lógica del lumbago.' },
          { t: 'AINE y kinesioterapia primero', d: 'Resonancia solo con alarma', say: 'El manejo inicial es médico, con antiinflamatorios y kinesioterapia. La resonancia se pide solo si hay signos de alarma.' },
        ] },
        { title: 'Cuando irradia al brazo', tag: 'Raíz nerviosa', kind: 'criteria', items: [
          { t: 'Prueba de Spurling', d: 'Extender y rotar el cuello', say: 'Para sospechar compromiso de una raíz nerviosa, se usa la prueba de Spurling. Extiendes el cuello y lo rotas hacia cada hombro.' },
          { t: 'Dolor que baja por el brazo', d: 'Sugiere compresión radicular', say: 'Si aparece un dolor como un latigazo que baja por el brazo, la prueba es positiva y sugiere compresión radicular.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hombro doloroso',
      title: 'Manguito rotador: qué es',
      cards: [
        { title: 'La causa más común', tag: 'Hombro doloroso', kind: 'key', items: [
          { t: 'Tendones inflamados, el supraespinoso', d: 'Por movimientos repetitivos', say: 'El síndrome del manguito rotador es la causa más común de hombro doloroso. Los movimientos repetitivos inflaman los tendones, sobre todo el del supraespinoso.' },
          { t: 'Pinzamiento bajo el acromion', d: 'El tendón roza al elevar el brazo', say: 'Al elevar el brazo, el tendón pasa por un espacio estrecho, entre la cabeza del húmero y el acromion, y se pinza. Por eso el cuadro también se llama pinzamiento subacromial.' },
        ] },
        { title: 'Clínica', tag: 'Lo que cuenta el paciente', kind: 'alert', items: [
          { t: 'Dolor nocturno', d: 'Peor al acostarse sobre el hombro', say: 'El dolor es más intenso de noche y aumenta al acostarse sobre el hombro afectado.' },
          { t: 'Duele abducir y elevar', d: 'Movilidad pasiva conservada', say: 'Duele al abducir y elevar el brazo, y también contra resistencia. La movilidad pasiva se conserva, y esa es la diferencia con la capsulitis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hombro doloroso',
      title: 'Maniobras: arco doloroso, Neer, Jobe',
      cards: [
        { title: 'Pinzamiento subacromial', tag: 'Maniobras', kind: 'criteria', items: [
          { t: 'Arco doloroso', d: 'Duele entre 60 y 120 grados', say: 'El arco doloroso es el dolor que aparece al elevar el brazo, en un tramo intermedio, de unos sesenta a ciento veinte grados, y que cede al seguir subiendo.' },
          { t: 'Neer y Hawkins positivos', d: 'Provocan dolor subacromial', say: 'Las pruebas de Neer y de Hawkins reproducen el dolor al comprimir el tendón bajo el acromion. Si ambas son positivas junto con el arco doloroso, es un pinzamiento subacromial.' },
          { t: 'Prueba de Jobe', d: 'Explora el supraespinoso', say: 'La prueba de Jobe evalúa el supraespinoso. Con el brazo elevado a la altura del hombro, el examinador empuja hacia abajo, y el dolor o la debilidad indican compromiso de ese tendón.' },
        ] },
        { title: 'Examen y tratamiento', tag: 'Conducta', kind: 'key', items: [
          { t: 'Diagnóstico clínico, ecografía', d: 'La más costo-efectiva', say: 'El diagnóstico es clínico. El examen de elección para ver la inflamación del tendón es la ecografía, que es la más costo-efectiva.' },
          { t: 'Reposo, AINE y kinesioterapia', d: 'Con kinesioterapia motora', say: 'Se trata con reposo, antiinflamatorios y kinesioterapia motora.' },
          { t: 'Cabeza humeral ascendida: rotura', d: 'Sospecha de rotura completa', say: 'Una radiografía con la cabeza del húmero ascendida y esclerosis del acromion, junto al cuadro de manguito, hace pensar en rotura completa del supraespinoso.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hombro doloroso',
      title: 'Manguito contra capsulitis adhesiva',
      cards: [
        { title: 'Manguito rotador', tag: 'Activo duele, pasivo libre', kind: 'normal', items: [
          { t: 'Movilidad pasiva conservada', d: 'Limita el dolor, no el hombro', say: 'En el manguito rotador, el movimiento pasivo está conservado. El dolor limita el movimiento activo, sobre todo al elevar el brazo.' },
        ] },
        { title: 'Capsulitis adhesiva', tag: 'Hombro congelado', kind: 'alert', items: [
          { t: 'Limitación activa y pasiva', d: 'Fase dolorosa y luego anquilosis', say: 'En la capsulitis adhesiva, la movilidad está limitada tanto de forma activa como pasiva. Pasa por una fase muy dolorosa y luego una de rigidez, donde el dolor cede pero el hombro no se mueve.' },
          { t: 'Corticoides y kinesioterapia intensiva', d: 'Recuperar el rango articular', say: 'A diferencia del manguito, aquí se usan corticoides, más una kinesioterapia intensiva para recuperar el rango articular.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Examen del hombro y del cuello',
      images: [
        { src: 'biblioteca/18_traumatologia/trauma-15/01_arco-doloroso-hombro__bailey-love_p471.jpg', label: 'Arco doloroso: brazo elevado a la altura del hombro', credit: 'Bailey & Love 27.ª ed., Fig. 31.23 (b)' },
        { src: 'biblioteca/18_traumatologia/trauma-15/02_prueba-de-jobe__bailey-love_p471.jpg', label: 'Prueba de Jobe contra resistencia', credit: 'Bailey & Love 27.ª ed., Fig. 31.24' },
        { src: 'biblioteca/18_traumatologia/trauma-15/03_rotura-manguito-rm__bailey-love_p511.jpg', label: 'Resonancia: rotura retraída del manguito', credit: 'Bailey & Love 27.ª ed., Fig. 34.6' },
        { src: 'biblioteca/18_traumatologia/trauma-15/04_prueba-de-spurling__bailey-love_p461.jpg', label: 'Prueba de Spurling: extensión y rotación del cuello', credit: 'Bailey & Love 27.ª ed., Fig. 31.4' },
      ],
      steps: [
        { note: 'Arco doloroso en el tramo intermedio',
          say: 'Aquí el brazo está elevado a la altura del hombro, el tramo donde suele doler en el pinzamiento. Fíjate en que el paciente lo eleva por sí mismo: es una prueba de movimiento activo.' },
        { note: 'Jobe: empujar contra resistencia',
          say: 'Esta es la prueba de Jobe. El examinador empuja el brazo hacia abajo mientras el paciente resiste. Duele o se debilita si el supraespinoso está comprometido.' },
        { note: 'Resonancia: tendón roto y retraído',
          say: 'Y esta resonancia muestra una rotura del manguito, con el tendón retraído. Es lo que el examen físico y la ecografía te hacen sospechar.' },
        { note: 'Spurling: cuello extendido y rotado',
          say: 'Y en el cuello, la prueba de Spurling: se extiende y se rota la cabeza hacia un lado. Un dolor que baja por el brazo indica compresión de una raíz.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del dolor lumbar, cervical o de hombro a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Columna y hombro: dato, diagnóstico, conducta',
      head: ['Dato', 'Diagnóstico', 'Conducta'],
      rows: [
        { cells: ['Lumbago mecánico sin alarma', 'Lumbago mecánico', 'AINE y kinesioterapia; sin RM'],
          say: 'Lumbago mecánico sin signos de alarma: antiinflamatorio y kinesioterapia, sin resonancia ni reposo en cama.' },
        { cells: ['Fiebre y dolor vertebral', 'Discitis', 'Estudio y derivación'],
          say: 'Fiebre con dolor a la palpación vertebral: discitis, no un lumbago mecánico.' },
        { cells: ['Anestesia en silla de montar', 'Cauda equina', 'Derivación urgente'],
          say: 'Dolor lumbar con anestesia perineal y disfunción sexual: cauda equina, derivación urgente.' },
        { cells: ['Anciana con dolor súbito', 'Fractura vertebral', 'Estudio con imágenes'],
          say: 'Mujer mayor con dolor súbito y dolor a la palpación vertebral: fractura vertebral, y no lumbago mecánico.' },
        { cells: ['Arco doloroso, Neer positivo', 'Manguito rotador', 'AINE y kinesioterapia'],
          say: 'Arco doloroso con Neer y Hawkins positivos: manguito rotador, con antiinflamatorio y kinesioterapia.' },
        { cells: ['Hombro rígido, pasivo limitado', 'Capsulitis adhesiva', 'Corticoides y kinesioterapia'],
          say: 'Hombro que no se mueve ni de forma pasiva: capsulitis adhesiva, y la trampa es llamarlo manguito.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Una mujer de 45 años consulta por dolor cervical de 3 semanas que se irradia al brazo derecho. No tiene fiebre, baja de peso ni debilidad, y el examen neurológico es normal. La prueba de Spurling reproduce el dolor en el brazo.',
      question: '¿Cuál es el manejo inicial más adecuado?',
      options: [
        { letter: 'A', text: 'Resonancia cervical urgente' },
        { letter: 'B', text: 'Antiinflamatorios y kinesioterapia' },
        { letter: 'C', text: 'Cirugía cervical' },
        { letter: 'D', text: 'Collarín rígido por tiempo prolongado' },
        { letter: 'E', text: 'Corticoides orales como primera línea' },
      ],
      correct: 'B',
      explanation: 'Es una cervicobraquialgia, que sigue la misma lógica del lumbago: manejo médico inicial con antiinflamatorios y kinesioterapia. La resonancia se pide solo con signos de alarma, y la cirugía solo si fracasa un tratamiento médico bien llevado o hay déficit neurológico agudo.',
      say: {
        stem: 'Una mujer de cuarenta y cinco años con tres semanas de dolor cervical que se irradia al brazo derecho. No tiene fiebre, baja de peso ni debilidad, el examen neurológico es normal, y la prueba de Spurling reproduce el dolor.',
        question: '¿Cuál es el manejo inicial más adecuado?',
        options: 'Las opciones: resonancia urgente; antiinflamatorios y kinesioterapia; cirugía cervical; collarín rígido prolongado; o corticoides orales. Piénsalo.',
        answer: 'Es la B. La cervicobraquialgia sigue la lógica del lumbago: tratamiento médico primero. La A es la trampa: sin signos de alarma no hay resonancia. Y la cirugía queda para el fracaso del tratamiento médico o un déficit agudo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 95',
      stem: 'Hombre de 45 años con lumbalgia mecánica de 5 días de evolución, sin irradiación, sin signos de alarma. EF: dolor a la palpación paravertebral lumbar, sin déficit neurológico. ¿Cuál es el manejo más adecuado?',
      question: '¿Cuál es el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'Analgesia (AINEs o paracetamol) + kinesioterapia activa; no reposo en cama' },
        { letter: 'B', text: 'Reposo absoluto por 7 días' },
        { letter: 'C', text: 'Cirugía de columna' },
        { letter: 'D', text: 'Infiltración epidural de corticoides' },
        { letter: 'E', text: 'Resonancia magnética urgente' },
      ],
      correct: 'A',
      explanation: 'Lumbalgia mecánica aguda sin alarma: AINE por corto plazo, actividad física progresiva y kinesioterapia. El reposo en cama prolonga la incapacidad, y no hay indicación de imagen en la fase aguda.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un hombre de cuarenta y cinco años con cinco días de lumbalgia mecánica, sin irradiación, sin signos de alarma, con dolor a la palpación paravertebral y sin déficit neurológico.',
        question: '¿Cuál es el manejo más adecuado?',
        options: 'Las opciones: analgesia más kinesioterapia activa sin reposo en cama; reposo absoluto por siete días; cirugía de columna; infiltración epidural de corticoides; o resonancia urgente. Piénsalo.',
        answer: 'Es la A. Sin signos de alarma, se usa analgesia, actividad progresiva y kinesioterapia. La B es la trampa clásica: el reposo en cama prolonga la incapacidad. Y la E no calza, porque sin alarma no hay indicación de imagen.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2018 · Pregunta 161',
      stem: 'Un paciente de 60 años, diabético, consulta por dolor lumbar intenso, de 5 días de evolución, asociado a malestar general y fiebre hasta 38,9°C. Al examinarlo, presenta marcado dolor al presionar la zona vertebral lumbar, con una contractura de la musculatura paravertebral. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Espondilitis anquilosante' },
        { letter: 'B', text: 'Aplastamiento vertebral' },
        { letter: 'C', text: 'Lumbago mecánico' },
        { letter: 'D', text: 'Lumbociática' },
        { letter: 'E', text: 'Discitis lumbar' },
      ],
      correct: 'E',
      explanation: 'Dolor lumbar intenso con fiebre, malestar general y dolor a la presión de la columna en un diabético: discitis lumbar.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciocho. Un paciente de sesenta años, diabético, con cinco días de dolor lumbar intenso, malestar general y fiebre de treinta y ocho coma nueve grados. Tiene un marcado dolor al presionar la columna lumbar, con contractura paravertebral.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: espondilitis anquilosante; aplastamiento vertebral; lumbago mecánico; lumbociática; o discitis lumbar. Piénsalo.',
        answer: 'Es la E. La fiebre en un diabético con dolor lumbar y dolor a la palpación de la columna es una infección: discitis. La C es la trampa: el lumbago mecánico no da fiebre.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 139',
      stem: 'Un paciente de 60 años consulta por lumbago intenso de 2 semanas de evolución, asociado a disfunción eréctil, que no ha respondido al tratamiento con analgésicos orales. Al examen físico, presenta limitación a los movimientos de flexoextensión y flexión lateral de la columna lumbar, debido al dolor. Además, se objetiva anestesia de la zona perineal. El diagnóstico más probable corresponde a un síndrome:',
      question: 'El diagnóstico más probable corresponde a un síndrome:',
      options: [
        { letter: 'A', text: 'Lumbociático' },
        { letter: 'B', text: 'Facetario lumbar' },
        { letter: 'C', text: 'De compresión medular' },
        { letter: 'D', text: 'Sacroilíaco' },
        { letter: 'E', text: 'De cauda equina' },
      ],
      correct: 'E',
      explanation: 'Tanto la compresión del cono medular como la de la cauda equina se presentan con anestesia en silla de montar y disfunción sexual. De las opciones, la más razonable es el síndrome de cauda equina, porque la compresión medular clásica tiene compromiso motor y sensitivo sin tanta afectación pudenda.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un paciente de sesenta años con dos semanas de lumbago intenso, disfunción eréctil y sin respuesta a los analgésicos. Tiene la columna lumbar limitada por el dolor y anestesia en la zona perineal.',
        question: '¿Qué síndrome es el más probable?',
        options: 'Las opciones: lumbociático; facetario lumbar; compresión medular; sacroilíaco; o cauda equina. Piénsalo.',
        answer: 'Es la E. La anestesia perineal con disfunción eréctil es la anestesia en silla de montar, propia de la cauda equina. La A es la trampa: la lumbociática irradia a la pierna, y no produce estos síntomas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 39',
      stem: 'Una paciente de 67 años consulta por dolor de espalda, que inició de manera súbita, en relación a actividades en las que levantaba peso en flexión. El dolor es intenso, por lo que limita sus actividades de la vida diaria. Al examen físico, se observa dolor a los movimientos de flexoextensión de la columna y se observa tórax encorvado, pero sin cifosis. Su examen neurológico es normal y presenta dolor a la palpación vertebral. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Lumbago mecánico' },
        { letter: 'B', text: 'Lumbociática mecánica' },
        { letter: 'C', text: 'Fractura de cuerpo vertebral' },
        { letter: 'D', text: 'Espondiloartrosis lumbar' },
        { letter: 'E', text: 'Espondilitis anquilosante' },
      ],
      correct: 'C',
      explanation: 'Aunque al inicio parece un lumbago mecánico, la edad, el tórax encorvado y el dolor a la palpación vertebral sugieren una fractura vertebral.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Una mujer de sesenta y siete años con dolor de espalda de inicio súbito, al levantar peso en flexión, intenso, que limita su vida diaria. Tiene dolor a la palpación vertebral y el tórax encorvado, y el examen neurológico es normal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: lumbago mecánico; lumbociática mecánica; fractura de cuerpo vertebral; espondiloartrosis lumbar; o espondilitis anquilosante. Piénsalo.',
        answer: 'Es la C. La edad, el inicio súbito y el dolor a la palpación de la vértebra apuntan a una fractura vertebral. La A es la tentación: parece un lumbago mecánico, pero este es un signo de alarma.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 127',
      stem: 'Hombre de 55 años con dolor en el hombro derecho al elevar el brazo entre 60-120° (arco doloroso). Prueba de Neer y Hawkins positivas. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Síndrome de pinzamiento subacromial (manguito rotador)' },
        { letter: 'B', text: 'Luxación glenohumeral' },
        { letter: 'C', text: 'Capsulitis adhesiva (hombro congelado)' },
        { letter: 'D', text: 'Artritis reumatoide de hombro' },
        { letter: 'E', text: 'Fractura de clavícula' },
      ],
      correct: 'A',
      explanation: 'Arco doloroso de 60 a 120 grados con Neer y Hawkins positivos es un síndrome de pinzamiento subacromial, por tendinitis o desgarro del manguito rotador. Tratamiento: kinesioterapia y antiinflamatorios, con o sin corticoides locales.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un hombre de cincuenta y cinco años con dolor en el hombro derecho al elevar el brazo entre sesenta y ciento veinte grados, un arco doloroso, con las pruebas de Neer y de Hawkins positivas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: pinzamiento subacromial, manguito rotador; luxación glenohumeral; capsulitis adhesiva; artritis reumatoide de hombro; o fractura de clavícula. Piénsalo.',
        answer: 'Es la A. Arco doloroso con Neer y Hawkins positivos es el pinzamiento subacromial del manguito rotador. La C es la trampa: la capsulitis limita el movimiento pasivo, y aquí no se describe.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 119',
      stem: 'Una paciente de 58 años presenta dolor en el hombro derecho desde hace 4 meses, que aumenta con la actividad física. Refiere que es intenso, con EVA 6/10, empeorando en la noche. Al examen físico, la movilidad pasiva está conservada, pero presenta limitación en la movilidad activa, especialmente para elevar el brazo por encima del hombro y en los movimientos de rotación interna. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Artrosis acromioclavicular' },
        { letter: 'B', text: 'Artrosis glenohumeral' },
        { letter: 'C', text: 'Síndrome del manguito rotador' },
        { letter: 'D', text: 'Capsulitis adhesiva' },
        { letter: 'E', text: 'Tendinopatía bicipital' },
      ],
      correct: 'C',
      explanation: 'Es un síndrome del manguito rotador clásico. La capsulitis adhesiva, en cambio, se caracteriza por la limitación tanto de la movilidad pasiva como de la activa.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Una mujer de cincuenta y ocho años con cuatro meses de dolor en el hombro derecho, que aumenta con la actividad y empeora de noche. La movilidad pasiva está conservada, pero la activa está limitada, sobre todo para elevar el brazo y en la rotación interna.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: artrosis acromioclavicular; artrosis glenohumeral; síndrome del manguito rotador; capsulitis adhesiva; o tendinopatía bicipital. Piénsalo.',
        answer: 'Es la C. Dolor nocturno con la movilidad pasiva conservada y la activa limitada es el manguito rotador. La D es la trampa: la capsulitis limita también la movilidad pasiva.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 68',
      stem: 'Un hombre de 42 años presenta dolor en el hombro derecho, de dos semanas de evolución, que inició en relación a un partido de tenis y que limita sus actividades, en especial, los movimientos de abducción y elevación. Al examen físico tiene dolor a la palpación subacromial, con dolor a la abducción y elevación del hombro, que dificulta estos movimientos, por sobre 80°. Se solicitan radiografías de hombro, que muestran esclerosis del acromion y leve ascenso de la cabeza humeral. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Tendinitis cálcica' },
        { letter: 'B', text: 'Pinzamiento subacromial' },
        { letter: 'C', text: 'Rotura completa del tendón del supraespinoso' },
        { letter: 'D', text: 'Capsulitis adhesiva' },
        { letter: 'E', text: 'Tendinitis bicipital' },
      ],
      correct: 'C',
      explanation: 'Parece un síndrome del manguito rotador, pero el ascenso de la cabeza humeral orienta a la rotura del tendón del supraespinoso. La capsulitis adhesiva limitaría totalmente los movimientos.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un hombre de cuarenta y dos años con dos semanas de dolor en el hombro derecho tras un partido de tenis, con dolor subacromial y dolor al abducir y elevar el brazo sobre ochenta grados. La radiografía muestra esclerosis del acromion y un leve ascenso de la cabeza humeral.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: tendinitis cálcica; pinzamiento subacromial; rotura completa del supraespinoso; capsulitis adhesiva; o tendinitis bicipital. Piénsalo.',
        answer: 'Es la C. El cuadro es de manguito rotador, pero el ascenso de la cabeza humeral en la radiografía indica que el tendón del supraespinoso está roto. La B es la tentación: sería el pinzamiento sin rotura, que no ascendería la cabeza.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: columna y hombro',
      cards: [
        { title: 'Columna', tag: 'Alarma o no', kind: 'alert', items: [
          { t: 'Sin alarma: AINE y kinesioterapia', d: 'Sin resonancia ni reposo en cama', say: 'Cerremos con las reglas de oro. En el dolor lumbar o cervical sin signos de alarma, se usan antiinflamatorios y kinesioterapia, sin resonancia ni reposo prolongado.' },
          { t: 'Con alarma: busca la causa', d: 'Fiebre, fractura, déficit, cauda equina', say: 'Si hay fiebre, dolor súbito en un adulto mayor, déficit neurológico o anestesia perineal, piensas en discitis, fractura vertebral o cauda equina, y pides imágenes o derivas.' },
        ] },
        { title: 'Hombro', tag: 'Mira el pasivo', kind: 'key', items: [
          { t: 'Arco doloroso, Neer, Jobe: manguito', d: 'Ecografía; AINE y kinesioterapia', say: 'En el hombro, el arco doloroso con Neer o Jobe positivos es un manguito rotador. Se confirma con ecografía y se trata con antiinflamatorios y kinesioterapia.' },
          { t: 'Pasivo limitado: capsulitis', d: 'Corticoides y kinesioterapia intensiva', say: 'Si el movimiento pasivo también está limitado, es una capsulitis adhesiva. Si te llevas una sola idea de hoy: en el dolor de columna busca primero el signo de alarma, y en el hombro mira el movimiento pasivo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Dolor de columna o de hombro',
    root: N('start', 'Dolor de columna o de hombro', 'Primero: ¿dónde duele?',
      'Un paciente con dolor de columna o de hombro. Lo primero es ubicar el dolor.',
      ['Lumbar o cervical', N('q', 'Signos de alarma', 'Fiebre, fractura, déficit',
        'Si el dolor es lumbar o cervical, buscas signos de alarma: fiebre, dolor súbito en un adulto mayor, déficit neurológico, anestesia perineal o sospecha de cáncer.',
        ['No hay alarma', N('ok', 'Manejo médico', 'AINE y kinesioterapia',
          'Sin signos de alarma, se usan antiinflamatorios, actividad y kinesioterapia. No pides resonancia ni indicas reposo en cama.')],
        ['Fiebre o dolor vertebral', N('refer', 'Discitis', 'Estudio y derivación',
          'Con fiebre y dolor a la palpación de la columna, piensas en discitis o espondilodiscitis, y se estudia y se deriva.')],
        ['Anestesia perineal', N('alert', 'Cauda equina', 'Derivación urgente',
          'Con anestesia en silla de montar y disfunción sexual o urinaria, es una cauda equina, y se deriva de urgencia.')],
        ['Dolor súbito en adulto mayor', N('refer', 'Fractura vertebral', 'Imágenes',
          'Un dolor súbito en un adulto mayor, con dolor a la palpación vertebral, es una fractura vertebral y requiere imágenes.')],
      )],
      ['Hombro: ¿movilidad pasiva?', N('q', 'Mira el movimiento pasivo', 'Libre o limitado',
        'Si el dolor es de hombro, examinas la movilidad pasiva.',
        ['Pasiva conservada', N('do', 'Manguito rotador', 'Ecografía; AINE y kinesioterapia',
          'Con la movilidad pasiva conservada, un arco doloroso y Neer o Jobe positivos, es un manguito rotador. Se trata con antiinflamatorios y kinesioterapia.')],
        ['Pasiva limitada', N('do', 'Capsulitis adhesiva', 'Corticoides y kinesioterapia',
          'Con la movilidad pasiva también limitada, es una capsulitis adhesiva, que se trata con corticoides y kinesioterapia intensiva.')],
      )],
    ),
  },
};
