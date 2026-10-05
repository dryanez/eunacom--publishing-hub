// Clase 12.11 (Traumatología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_traumatologia.cjs (trauma-11). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// Alcance: lumbago mecánico contra inflamatorio, panorama del hombro doloroso (manguito y capsulitis), tendinitis y bursitis.
// El detalle del manguito rotador y de la cervicalgia queda para trauma-15.
// Las tablas plantilla del libro (Parámetro clínico / Criterio quirúrgico) y sus keyPoints sobre fracturas no corresponden al tema y no se usan.
// El GES de artrosis que trae el campo `ges` se enseña en trauma-12, no aquí.
// Lumbago agudo: se sigue el libro (kinesioterapia cuando cede el dolor) y la pregunta real de Julio 2019; no se usa la de Julio 2025,
// que indica kinesioterapia activa desde el inicio (ver informe).
// Tendinitis específicas y epicondilitis: el banco real no tiene preguntas; se usa el caso del libro rotulado "Caso representativo".

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'trauma-11',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Lumbago, hombro doloroso, tendinitis y bursitis: lo mecánico contra lo inflamatorio',
      say: 'Bienvenido. Hoy vemos el dolor osteomuscular que no viene de un trauma, y que llena las consultas de atención primaria. Tu trabajo como médico general es separar lo mecánico de lo inflamatorio, buscar signos de alarma y partir con un tratamiento inicial simple y efectivo. Veremos el lumbago, el hombro, las tendinitis y las bursitis.',
    },

    {
      type: 'table',
      kicker: 'Lumbago',
      title: 'Mecánico contra inflamatorio',
      head: ['Dato', 'Mecánico', 'Inflamatorio'],
      rows: [
        { cells: ['Con el movimiento', 'Aumenta', 'Mejora con ejercicio'],
          say: 'El lumbago es simplemente dolor en la zona lumbar. La pregunta clave es cómo se comporta con el movimiento. En el mecánico, el dolor aumenta al moverte. En el inflamatorio, el dolor mejora con el ejercicio.' },
        { cells: ['Con el reposo', 'Disminuye', 'Aumenta'],
          say: 'Con el reposo pasa lo contrario. El mecánico disminuye al descansar, mientras que el inflamatorio aumenta con el reposo. Por eso el dolor inflamatorio empeora de noche y se alivia en la mañana al empezar a moverse.' },
        { cells: ['Frecuencia', 'La causa más frecuente', 'Poco frecuente'],
          say: 'La inmensa mayoría de los lumbagos son mecánicos. Cuando piensas en un lumbago inflamatorio, tienes que buscar el diagnóstico de fondo.' },
        { cells: ['Qué pensar', 'Debilidad de la musculatura axial', 'Espondiloartritis'],
          say: 'El mecánico nace de una debilidad de la musculatura axial. El inflamatorio sugiere una espondiloartritis, que ya viste en reumatología.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Lumbago mecánico',
      title: 'Por qué duele y cómo se trata',
      cards: [
        { title: 'Mecanismo', tag: 'Musculatura axial', kind: 'key', items: [
          { t: 'Músculos lumbares y abdominales débiles', d: 'Generan posiciones viciosas',
            say: 'La causa más frecuente es la debilidad de la musculatura axial, la lumbar y la abdominal. Esa debilidad genera posiciones viciosas, que irritan las estructuras articulares y musculares de la columna.' },
          { t: 'Lumbociática', d: 'Dolor lumbar irradiado a las piernas',
            say: 'Si el dolor lumbar se irradia hacia las extremidades inferiores, se llama lumbociática. Su manejo inicial es idéntico al del lumbago simple.' },
        ] },
        { title: 'Manejo inicial', tag: 'Tres pilares', kind: 'pharma', items: [
          { t: 'Reposo relativo', d: 'Evita el reposo prolongado en cama',
            say: 'El primer pilar es el reposo relativo. Se evita el reposo prolongado en cama, y se mantiene la actividad según tolerancia.' },
          { t: 'Antiinflamatorios no esteroidales', d: 'Analgesia de primera línea',
            say: 'El segundo pilar son los antiinflamatorios no esteroidales, los AINE, como analgesia de primera línea.' },
          { t: 'Kinesioterapia, cuando cede el dolor', d: 'No en la fase aguda',
            say: 'El tercer pilar es la kinesioterapia, pero ojo con el momento. No se hace en la fase aguda. Se inicia cuando el dolor ya cedió, para fortalecer la musculatura y prevenir recurrencias.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hombro doloroso',
      title: 'Manguito rotador: el panorama',
      cards: [
        { title: 'Causa más común', tag: 'Síndrome de manguito', kind: 'key', items: [
          { t: 'Dolor con movimientos repetitivos', d: 'Más intenso en la noche',
            say: 'La causa más común de hombro doloroso es el síndrome del manguito rotador. El dolor aumenta con los movimientos repetitivos y es más intenso en la noche.' },
          { t: 'Duele abducción y extensión contra resistencia', d: 'La movilidad pasiva se conserva',
            say: 'Duele especialmente al hacer abducción y extensión contra resistencia. Y algo que se pregunta: la movilidad pasiva se conserva. El hombro se puede mover, pero duele.' },
        ] },
        { title: 'Diagnóstico y manejo', tag: 'Clínico', kind: 'alert', items: [
          { t: 'Diagnóstico clínico', d: 'La ecografía objetiva la inflamación',
            say: 'El diagnóstico es clínico. Para objetivar la inflamación, el examen de elección es la ecografía, que es más costo efectiva que la resonancia.' },
          { t: 'Reposo, AINE, kinesioterapia motora', d: 'El detalle, en la clase de manguito rotador',
            say: 'El tratamiento es reposo, AINE y kinesioterapia motora. El detalle del manguito rotador, con sus maniobras y sus roturas, lo vemos en otra clase.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Hombro doloroso',
      title: 'Manguito rotador contra capsulitis adhesiva',
      head: ['Dato', 'Manguito rotador', 'Capsulitis adhesiva'],
      rows: [
        { cells: ['Movilidad pasiva', 'Conservada', 'Limitada, activa y pasiva'],
          say: 'La diferencia clave está en el movimiento pasivo. En el manguito rotador el hombro tiene movilidad completa, aunque duele en ciertas maniobras. En la capsulitis adhesiva, el dolor impide la movilidad tanto activa como pasiva.' },
        { cells: ['Qué es', 'Tendinopatía', 'Inflamación y fibrosis de la cápsula'],
          say: 'La capsulitis adhesiva, o hombro congelado, es una inflamación de la cápsula articular que lleva a una restricción severa del movimiento.' },
        { cells: ['Evolución', 'Dolor con ciertos movimientos', 'Fase dolorosa y luego rigidez sin dolor'],
          say: 'La capsulitis evoluciona de una fase dolorosa a una fase de anquilosis, que es rigidez sin dolor.' },
        { cells: ['Tratamiento', 'Reposo, AINE, kinesioterapia', 'Corticoides y kinesioterapia intensiva'],
          say: 'En el tratamiento, el manguito rotador se maneja con reposo, AINE y kinesioterapia. En la capsulitis, a diferencia del manguito, se usan corticoides, sistémicos o en infiltración, con kinesioterapia intensiva.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tendinitis',
      title: 'Tendinitis específicas',
      cards: [
        { title: 'Cómo se reconocen', tag: 'Clínica', kind: 'key', items: [
          { t: 'Duele al palpar y estirar', d: 'El tendón comprometido',
            say: 'Todas las tendinitis se caracterizan por dolor a la palpación y al estiramiento del tendón involucrado. Lo que cambia es dónde está el dolor.' },
          { t: 'Pata de ganso', d: 'Anteromedial e inferior de la rodilla',
            say: 'La tendinitis de la pata de ganso da dolor en la zona anteromedial e inferior de la rodilla, y es común en el montañismo y el trekking.' },
        ] },
        { title: 'Por localización', tag: 'Lo que se pregunta', kind: 'criteria', items: [
          { t: 'Rotuliana: tuberosidad tibial', d: 'Incluye Osgood-Schlatter del adolescente',
            say: 'En la tendinitis rotuliana el dolor está en la tuberosidad tibial. Esta categoría incluye la enfermedad de Osgood-Schlatter en adolescentes.' },
          { t: 'Fascia lata: rodilla del maratonista', d: 'Dolor en la cara lateral de la rodilla',
            say: 'La tendinitis de la fascia lata, o síndrome de la banda iliotibial, da dolor en la cara lateral de la rodilla. Es típica de los corredores y se la llama la rodilla del maratonista.' },
          { t: 'De Quervain: muñeca lateral', d: 'Extensor corto y abductor largo del pulgar',
            say: 'La tendinitis de De Quervain da dolor en la zona lateral de la muñeca, y compromete al extensor corto y al abductor largo del pulgar.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Bursitis',
      title: 'Bursitis: inflamación de la bursa',
      cards: [
        { title: 'Qué las distingue', tag: 'Clínica', kind: 'key', items: [
          { t: 'Eritema y aumento de volumen visible', d: 'A diferencia de la tendinitis',
            say: 'La bursa es un saco sinovial extraarticular. A diferencia de la tendinitis, la bursitis suele mostrar eritema y un aumento de volumen que se ve a simple vista.' },
          { t: 'Olecraniana: punta del codo', d: 'Aumento de volumen sobre el olécranon',
            say: 'La bursitis olecraniana da aumento de volumen en la punta del codo.' },
          { t: 'Pertrocantérica: sobre el trocánter mayor', d: 'Dolor al palpar la cara lateral de la cadera',
            say: 'La bursitis pertrocantérica da dolor sobre el trocánter mayor del fémur, en la cara externa de la cadera.' },
        ] },
        { title: 'Tratamiento y trampa', tag: 'Conducta', kind: 'alert', items: [
          { t: 'AINE y frío local', d: 'Corticoides en casos refractarios',
            say: 'El tratamiento son los AINE y el frío local. Los corticoides quedan para los casos refractarios.' },
          { t: 'Bursitis no es artritis séptica', d: 'La bursitis es superficial y externa a la articulación',
            say: 'La trampa es confundirla con una artritis séptica. En la bursitis la inflamación es superficial y externa a la articulación. En la artritis hay un derrame articular profundo y una limitación dolorosa de todo el rango de movimiento.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Bursitis del codo y de la cadera',
      images: [
        { src: 'biblioteca/18_traumatologia/trauma-11/01_bursitis-olecraniana__bailey-love_p522.jpg', label: 'Bursitis olecraniana: aumento de volumen en la punta del codo', credit: 'Bailey & Love 27.ª ed., Fig. 34.37' },
        { src: 'biblioteca/18_traumatologia/trauma-11/02_palpacion-bursa-trocanterica__bates_p709.jpg', label: 'Palpación de la bursa trocantérica, sobre el trocánter mayor', credit: 'Bates, Guía de exploración física, Fig. 16-65' },
      ],
      steps: [
        { note: 'Visible a simple vista',
          say: 'Mira el codo. Hay una tumefacción redondeada justo en la punta, sobre el olécranon. Es el aumento de volumen visible que distingue a la bursitis de la tendinitis, y está por fuera de la articulación.' },
        { note: 'Se palpa sobre el trocánter',
          say: 'En la cadera la bursa está bajo la piel, sobre el trocánter mayor. El examinador palpa esa zona con el paciente de costado. En la bursitis trocantérica este punto, en la cara lateral de la cadera, es el que duele.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del dolor osteomuscular sin trauma al diagnóstico y el tratamiento inicial.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dolor osteomuscular: dato, diagnóstico, manejo',
      head: ['Dato', 'Diagnóstico', 'Manejo'],
      rows: [
        { cells: ['Lumbago que mejora con ejercicio', 'Inflamatorio: espondiloartritis', 'Estudiar la causa'],
          say: 'Dolor lumbar que aumenta con el reposo y mejora con el ejercicio: lumbago inflamatorio, y piensas en espondiloartritis.' },
        { cells: ['Lumbago que empeora al moverse', 'Mecánico', 'Reposo relativo, AINE; kinesioterapia después'],
          say: 'Lumbago que empeora al moverse y mejora con el reposo: mecánico. Reposo relativo y AINE, y la kinesioterapia viene después, cuando el dolor cede.' },
        { cells: ['Hombro: pasivo libre', 'Manguito rotador', 'Reposo, AINE, kinesioterapia'],
          say: 'Hombro con dolor nocturno y movilidad pasiva completa: manguito rotador, con reposo, AINE y kinesioterapia.' },
        { cells: ['Hombro: no se mueve ni pasivo', 'Capsulitis adhesiva', 'Corticoides y kinesioterapia'],
          say: 'Hombro que no se mueve ni siquiera de forma pasiva: capsulitis adhesiva, con corticoides y kinesioterapia intensiva.' },
        { cells: ['Dolor sobre trocánter mayor', 'Bursitis trocantérica', 'AINE y frío local'],
          say: 'Dolor sobre el trocánter mayor, en la cara lateral de la cadera: bursitis trocantérica.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un obrero de 50 años consulta por aumento de volumen en la punta del codo derecho, de una semana, con eritema local y dolor leve. Mueve el codo en todo su rango sin dolor y no tiene fiebre. No hay derrame articular profundo.',
      question: '¿Cuál es el diagnóstico y el manejo inicial?',
      options: [
        { letter: 'A', text: 'Artritis séptica de codo; punción articular y antibióticos' },
        { letter: 'B', text: 'Bursitis olecraniana; AINE y frío local' },
        { letter: 'C', text: 'Epicondilitis lateral; epicondilera' },
        { letter: 'D', text: 'Gota de codo; alopurinol' },
        { letter: 'E', text: 'Bursitis olecraniana; cirugía inmediata' },
      ],
      correct: 'B',
      explanation: 'Un aumento de volumen visible en la punta del codo, con eritema, superficial y con movilidad conservada, es una bursitis olecraniana. Se trata con AINE y frío local; los corticoides quedan para los casos refractarios. La artritis séptica tiene derrame profundo y limitación dolorosa de todo el rango de movimiento.',
      say: {
        stem: 'Un obrero de cincuenta años con aumento de volumen en la punta del codo derecho desde hace una semana, con eritema y dolor leve. Mueve el codo en todo su rango sin dolor, no tiene fiebre y no hay derrame articular profundo.',
        question: '¿Cuál es el diagnóstico y el manejo inicial?',
        options: 'Las opciones: artritis séptica con punción y antibióticos; bursitis olecraniana con AINE y frío; epicondilitis lateral con epicondilera; gota con alopurinol; o bursitis con cirugía inmediata. Piénsalo.',
        answer: 'Es la B. Es una bursitis olecraniana: aumento de volumen visible, superficial, con movilidad conservada. Se trata con AINE y frío local. La A es la trampa: la artritis séptica tendría derrame profundo y dolor en todo el rango de movimiento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Mujer de 35 años, tenista amateur, consulta por dolor en la cara lateral del codo derecho de dos meses de evolución, que aumenta al extender la muñeca contra resistencia. No hay eritema ni aumento de volumen articular.',
      question: '¿Cuál es el diagnóstico y el manejo inicial correcto?',
      options: [
        { letter: 'A', text: 'Bursitis del olécranon: AINE más calor local' },
        { letter: 'B', text: 'Epitrocleitis o codo del golfista: reposo, AINE y epicondilera' },
        { letter: 'C', text: 'Artritis séptica de codo: punción articular urgente y antibióticos' },
        { letter: 'D', text: 'Epicondilitis lateral o codo del tenista: reposo, AINE, epicondilera y kinesioterapia' },
        { letter: 'E', text: 'Tendinitis del manguito rotador: ecografía de hombro y corticoides' },
      ],
      correct: 'D',
      explanation: 'La epicondilitis lateral afecta la inserción de los extensores del antebrazo en el epicóndilo. Da dolor en la cara lateral del codo que aumenta con la extensión de la muñeca contra resistencia, y es frecuente en tenistas. Se trata con reposo relativo, AINE, kinesioterapia y epicondilera. No hay eritema ni aumento de volumen, lo que descarta bursitis y artritis séptica.',
      say: {
        stem: 'Una mujer de treinta y cinco años, tenista aficionada, con dolor de la cara lateral del codo derecho desde hace dos meses, que aumenta al extender la muñeca contra resistencia. No hay eritema ni aumento de volumen articular.',
        question: '¿Cuál es el diagnóstico y el manejo inicial correcto?',
        options: 'Las opciones: bursitis del olécranon con AINE y calor; epitrocleitis con reposo, AINE y epicondilera; artritis séptica con punción y antibióticos; epicondilitis lateral con reposo, AINE, epicondilera y kinesioterapia; o tendinitis del manguito con ecografía y corticoides. Piénsalo.',
        answer: 'Es la D. Dolor lateral del codo que aumenta al extender la muñeca contra resistencia, en una tenista, es una epicondilitis lateral. La B es la trampa: la epitrocleitis es del lado medial. La bursitis y la artritis séptica tendrían eritema y aumento de volumen.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 72',
      stem: 'Un paciente de 39 años, trabajador de la construcción, con IMC de 30, psoriático, consulta por dolor en la zona glútea profunda, de predominio nocturno, muy intenso y que va desapareciendo en la mañana, a medida que realiza sus actividades. El dolor inició hace 3 meses y ha aumentado. Hace 2 meses presentó una uveítis derecha.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Radiculopatía S1' },
        { letter: 'B', text: 'Espondiloartritis' },
        { letter: 'C', text: 'Espondilodiscitis' },
        { letter: 'D', text: 'Hernia del núcleo pulposo con compresión del plexo lumbar' },
        { letter: 'E', text: 'Raquiestenosis' },
      ],
      correct: 'B',
      explanation: 'Dolor de predominio nocturno que mejora con la actividad es un dolor inflamatorio, y la uveítis refuerza el diagnóstico: espondiloartritis, con una espondilitis anquilosante clásica.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Un trabajador de la construcción de treinta y nueve años, psoriático, con dolor glúteo profundo, nocturno, muy intenso, que desaparece en la mañana cuando se mueve. Empezó hace tres meses, y hace dos meses tuvo una uveítis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: radiculopatía S uno; espondiloartritis; espondilodiscitis; hernia del núcleo pulposo con compresión del plexo lumbar; o raquiestenosis. Piénsalo.',
        answer: 'Es la B. Un dolor que empeora de noche y con el reposo, y mejora al moverse, es un dolor inflamatorio. Con la psoriasis y la uveítis, es una espondiloartritis. Una radiculopatía o una hernia darían un dolor mecánico, que empeora al moverse.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 29',
      stem: 'Un paciente de 40 años, oficinista, estuvo moviendo muebles durante 2 días, evolucionando luego con intenso dolor lumbar, que le impide realizar sus actividades. Al examen físico se aprecia muy adolorido, con dificultades para subirse a la camilla y para caminar, tiene IMC de 28 y se observa una contractura muscular a nivel lumbar, con dolor ante todos los movimientos de la columna lumbar, sin signos de irritación nerviosa.',
      question: 'Además de administrar analgésicos, la indicación más adecuada es:',
      options: [
        { letter: 'A', text: 'Resonancia magnética nuclear' },
        { letter: 'B', text: 'Radiografía de columna lumbosacra' },
        { letter: 'C', text: 'Kinesioterapia motora por 10 días' },
        { letter: 'D', text: 'Reposo en cama por 5 días' },
        { letter: 'E', text: 'Reposo laboral por 3 días' },
      ],
      correct: 'E',
      explanation: 'Es un lumbago mecánico agudo, sin signos de irritación nerviosa. Se maneja con analgesia y reposo relativo, no en cama, que aquí es un breve reposo laboral. La kinesioterapia se inicia cuando el dolor cede, para fortalecer la musculatura y evitar recurrencias, y no se piden imágenes.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Un oficinista de cuarenta años que movió muebles durante dos días y quedó con intenso dolor lumbar. Está muy adolorido, camina con dificultad, tiene contractura muscular lumbar y dolor con todos los movimientos, sin signos de irritación nerviosa.',
        question: 'Además de los analgésicos, ¿cuál es la indicación más adecuada?',
        options: 'Las opciones: resonancia magnética; radiografía de columna lumbosacra; kinesioterapia motora por diez días; reposo en cama por cinco días; o reposo laboral por tres días. Piénsalo.',
        answer: 'Es la E. Es un lumbago mecánico agudo: analgesia y reposo relativo, aquí un breve reposo laboral. La D es la trampa: se evita el reposo prolongado en cama. Y la kinesioterapia, la C, viene cuando el dolor ya cedió, no en la fase aguda.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 82',
      stem: 'Una paciente de 43 años, secretaria, consulta porque, desde hace dos semanas, presenta dolor en el hombro derecho, que es más intenso durante la noche y que empeora con los movimientos del mismo, por lo que ha ido limitando sus actividades normales. El dolor aumenta con la abducción y con la elevación del brazo derecho, por sobre el hombro. Al examen físico tiene movilidad completa del hombro, con dolor en las maniobras descritas.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Capsulitis adhesiva de hombro' },
        { letter: 'B', text: 'Tendinopatía del manguito rotador' },
        { letter: 'C', text: 'Disyunción acromioclavicular' },
        { letter: 'D', text: 'Tendinopatía de la cabeza larga del bíceps braquial' },
        { letter: 'E', text: 'Hernia cervical con compresión radicular' },
      ],
      correct: 'B',
      explanation: 'Es una tendinopatía del manguito rotador clásica. La capsulitis adhesiva tiene más dolor y una clara limitación de los movimientos, por el dolor y, en la última fase, por fibrosis. La tendinopatía bicipital da dolor en la cara anterior del hombro.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Una secretaria de cuarenta y tres años con dolor de hombro derecho desde hace dos semanas, más intenso de noche y con los movimientos, sobre todo en la abducción y al elevar el brazo. Al examen tiene movilidad completa, con dolor en esas maniobras.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: capsulitis adhesiva; tendinopatía del manguito rotador; disyunción acromioclavicular; tendinopatía de la cabeza larga del bíceps; o hernia cervical con compresión radicular. Piénsalo.',
        answer: 'Es la B. Dolor nocturno que aumenta con la abducción y la elevación, con movilidad completa, es un manguito rotador. La A es la trampa: en la capsulitis adhesiva el hombro está limitado, y la movilidad completa la descarta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 141',
      stem: 'Una paciente de 65 años, con IMC: 34, consulta por dolor progresivo, de una semana de evolución, en la cara lateral de la cadera, que aumenta con la caminata y limita sus movimientos. Además, en el último tiempo, el dolor le impide dormir para ese lado. Al examen físico tiene dolor a la palpación de la cara externa de la cadera y a la rotación externa forzada.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Coxartrosis' },
        { letter: 'B', text: 'Fractura incompleta de cadera por estrés' },
        { letter: 'C', text: 'Hernia del núcleo pulposo, con radiculopatía L2' },
        { letter: 'D', text: 'Bursitis trocantérica' },
        { letter: 'E', text: 'Síndrome de la fascia lata rígida' },
      ],
      correct: 'D',
      explanation: 'Dolor lateral de la cadera, que empeora al caminar y al dormir sobre ese lado, con dolor a la palpación de la cara externa, en una paciente obesa, es una bursitis trocantérica.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veintidós. Una mujer de sesenta y cinco años, obesa, con dolor de una semana en la cara lateral de la cadera, que aumenta al caminar y le impide dormir sobre ese lado. Duele a la palpación de la cara externa y a la rotación externa forzada.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: coxartrosis; fractura incompleta de cadera por estrés; hernia del núcleo pulposo con radiculopatía L dos; bursitis trocantérica; o síndrome de la fascia lata rígida. Piénsalo.',
        answer: 'Es la D. Dolor en la cara lateral de la cadera, que empeora al dormir de ese lado, con dolor a la palpación sobre el trocánter, es una bursitis trocantérica. La coxartrosis daría dolor inguinal y pérdida de la rotación interna, no dolor lateral.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 159',
      stem: 'Paciente obeso con dolor en la cara externa de la cadera, claudicación y dolor a la palpación lateral con limitación a la rotación interna.',
      question: '¿Diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Coxartrosis (artrosis de cadera)' },
        { letter: 'B', text: 'Síndrome de la banda iliotibial' },
        { letter: 'C', text: 'Tendinopatía del glúteo medio' },
        { letter: 'D', text: 'Bursitis trocantérica' },
        { letter: 'E', text: 'Fractura de estrés del cuello femoral' },
      ],
      correct: 'D',
      explanation: 'Un paciente obeso con dolor en la cara externa de la cadera y dolor a la palpación lateral tiene una bursitis trocantérica.',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un paciente obeso con dolor en la cara externa de la cadera, claudicación y dolor a la palpación lateral, con limitación a la rotación interna.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: coxartrosis; síndrome de la banda iliotibial; tendinopatía del glúteo medio; bursitis trocantérica; o fractura de estrés del cuello femoral. Piénsalo.',
        answer: 'Es la D. Obesidad, dolor lateral de la cadera y dolor a la palpación sobre el trocánter son una bursitis trocantérica. El síndrome de la banda iliotibial es de la cara lateral de la rodilla, en corredores, no de la cadera.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: dolor osteomuscular',
      cards: [
        { title: 'Lumbago y hombro', tag: 'Orientar', kind: 'key', items: [
          { t: 'Mecánico: empeora al moverse', d: 'Reposo relativo y AINE; kinesioterapia después',
            say: 'Cerremos con las reglas de oro. Lumbago que empeora al moverse y mejora con el reposo: mecánico, con reposo relativo y AINE, y kinesioterapia cuando el dolor cede. Si empeora con el reposo y mejora con el ejercicio, piensa en espondiloartritis.' },
          { t: 'Hombro: mira el movimiento pasivo', d: 'Libre: manguito; limitado: capsulitis',
            say: 'En el hombro, mira el movimiento pasivo. Si el hombro se mueve completo, es el manguito rotador. Si no se mueve ni de forma pasiva, es una capsulitis adhesiva, que lleva corticoides.' },
        ] },
        { title: 'Tendinitis y bursitis', tag: 'Trampas', kind: 'alert', items: [
          { t: 'Tendinitis: dolor al estirar el tendón', d: 'Pata de ganso, De Quervain, banda iliotibial',
            say: 'La tendinitis duele a la palpación y al estiramiento del tendón. Aprende la localización: pata de ganso, rotuliana, banda iliotibial y De Quervain.' },
          { t: 'Bursitis: superficial y visible', d: 'No es una artritis séptica',
            say: 'La bursitis es superficial, con eritema y aumento de volumen visible, y se trata con AINE y frío local. No es una artritis séptica. Si te llevas una sola idea de hoy: primero decide si el dolor es mecánico o inflamatorio, y luego busca la estructura. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Dolor osteomuscular sin trauma',
    root: N('start', 'Dolor osteomuscular sin trauma', 'Lumbar, hombro o periarticular',
      'Un paciente con dolor osteomuscular sin antecedente de trauma. Lo primero es ubicar la región y preguntar cómo se comporta el dolor con el movimiento y con el reposo.',
      ['Dolor lumbar', N('q', 'Con el movimiento y el reposo', 'Mecánico o inflamatorio',
        'Si es dolor lumbar, preguntas qué pasa con el movimiento y con el reposo.',
        ['Aumenta al moverse', N('do', 'Lumbago mecánico', 'Reposo relativo y AINE',
          'Si aumenta al moverse y disminuye con el reposo, es un lumbago mecánico. Se maneja con reposo relativo y AINE, y kinesioterapia cuando el dolor cede.')],
        ['Aumenta con el reposo', N('refer', 'Sospechar espondiloartritis', 'Mejora con ejercicio',
          'Si aumenta con el reposo y mejora con el ejercicio, es un lumbago inflamatorio, y sospechas una espondiloartritis.')],
      )],
      ['Hombro doloroso', N('q', 'Movilidad pasiva', 'Conservada o limitada',
        'Si es dolor de hombro, examinas la movilidad pasiva.',
        ['Conservada', N('do', 'Manguito rotador', 'Reposo, AINE, kinesioterapia',
          'Si la movilidad pasiva está conservada, es un manguito rotador, con reposo, AINE y kinesioterapia motora.')],
        ['Limitada, activa y pasiva', N('do', 'Capsulitis adhesiva', 'Corticoides y kinesioterapia',
          'Si el dolor impide el movimiento tanto activo como pasivo, es una capsulitis adhesiva, que se trata con corticoides y kinesioterapia intensiva.')],
      )],
      ['Dolor sobre un tendón o una bursa', N('q', 'Eritema o aumento de volumen', 'Superficial o profundo',
        'Si el dolor está en un tendón o sobre una bursa, miras si hay eritema y aumento de volumen visible.',
        ['Dolor al estirar el tendón', N('ok', 'Tendinitis específica', 'Según localización; AINE',
          'Si duele al palpar y estirar el tendón, es una tendinitis, y el nombre depende de la localización.')],
        ['Aumento de volumen superficial', N('ok', 'Bursitis', 'AINE y frío local',
          'Si hay eritema y aumento de volumen superficial, es una bursitis, con AINE y frío local. Si el derrame es profundo y todo el rango duele, piensa en artritis séptica.')],
      )],
    ),
  },
};
