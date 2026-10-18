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
      kicker: 'Tendinitis',
      title: 'Epicondilalgia y epitroclealgia',
      cards: [
        { title: 'Codo de tenista y de golfista', tag: 'Tendinopatía por sobrecarga', kind: 'key', items: [
          { t: 'Lateral: extensores, codo de tenista', d: 'Extensión resistida de muñeca o tercer dedo',
            say: 'La epicondilalgia lateral, el codo de tenista, es una tendinopatía degenerativa del origen de los extensores por sobrecarga repetida. El dolor está en el epicóndilo, aumenta al agarrar y levantar objetos, y se reproduce con la extensión resistida de la muñeca o del tercer dedo.' },
          { t: 'Medial: flexores, codo de golfista', d: 'Flexión y pronación resistidas',
            say: 'La epitroclealgia, el codo de golfista, compromete flexores y pronadores en el epicóndilo medial, y duele con la flexión y la pronación resistidas. En ambas, el codo se mueve normal y la radiografía no aporta.' },
        ] },
        { title: 'Manejo', tag: 'Autolimitado, 6 a 12 meses', kind: 'pharma', items: [
          { t: 'Reposo relativo, frío y AINE por pocos días', d: 'Cincha epicondílea y ejercicios excéntricos',
            say: 'El tratamiento inicial es reposo relativo con modificación de la actividad, frío local, antiinflamatorios por pocos días, cincha o banda epicondílea y kinesiterapia con ejercicios excéntricos.' },
          { t: 'Corticoide: alivia hoy, empeora mañana', d: 'No se repite; cirugía excepcional',
            say: 'La infiltración con corticoides alivia a corto plazo pero empeora el resultado a largo plazo, así que no se repite. Y si hay irradiación o déficit neurológico, piensa en radiculopatía de la sexta raíz cervical o en síndrome del túnel radial.' },
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
            photo: { src: 'biblioteca/18_traumatologia/trauma-11/01_bursitis-olecraniana__bailey-love_p522.jpg', label: 'Bursitis olecraniana', at: 'Mira el codo', credit: 'Bailey & Love 27.ª ed., Fig. 34.37' },
            say: 'La bursitis olecraniana da aumento de volumen en la punta del codo. Mira el codo: hay una tumefacción redondeada justo en la punta, sobre el olécranon, por fuera de la articulación.' },
          { t: 'Pertrocantérica: sobre el trocánter mayor', d: 'Dolor al palpar la cara lateral de la cadera',
            photo: { src: 'biblioteca/18_traumatologia/trauma-11/02_palpacion-bursa-trocanterica__bates_p709.jpg', label: 'Palpación de la bursa', at: 'Así se palpa', credit: 'Bates, Guía de exploración física, Fig. 16-65' },
            say: 'La bursitis pertrocantérica da dolor sobre el trocánter mayor del fémur, en la cara externa de la cadera. Así se palpa, con el paciente de costado: este punto lateral es el que duele.' },
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
      type: 'points',
      kicker: 'Lumbago de alarma',
      title: 'Banderas rojas: infección y tumor',
      cards: [
        { title: 'Banderas rojas', tag: 'Ante todo dolor lumbar', kind: 'alert', items: [
          { t: 'Edad menor de 20 o mayor de 55', d: 'Cáncer, fiebre, baja de peso',
            say: 'Ante un dolor lumbar buscas banderas rojas: inicio antes de los veinte o después de los cincuenta y cinco años, antecedente de cáncer, fiebre, baja de peso, y dolor nocturno o de reposo y progresivo.' },
          { t: 'Drogas endovenosas, inmunosupresión, trauma', d: 'Osteoporosis, corticoides, déficit neurológico',
            say: 'También drogas endovenosas o inmunosupresión, trauma significativo, osteoporosis o corticoides, y déficit neurológico.' },
          { t: 'Cauda equina: urgencia quirúrgica', d: 'Anestesia en silla de montar, retención urinaria',
            say: 'El síndrome de cauda equina es una urgencia quirúrgica: anestesia en silla de montar, retención urinaria, incontinencia fecal y debilidad de ambas piernas.' },
        ] },
        { title: 'Causas de fondo', tag: 'RM es el examen', kind: 'criteria', items: [
          { t: 'Espondilodiscitis y absceso epidural', d: 'S. aureus, tuberculosis, brucelosis',
            say: 'Entre las infecciosas está la espondilodiscitis, por Staphylococcus aureus, tuberculosis, el mal de Pott, o brucelosis, con dolor, fiebre y VHS y PCR elevadas. El absceso epidural suma déficit neurológico.' },
          { t: 'Metástasis, mieloma y linfoma', d: 'Mama, próstata, pulmón, riñón, tiroides',
            say: 'Entre las tumorales, las metástasis de mama, próstata, pulmón, riñón y tiroides, y el mieloma múltiple, con lesiones líticas, anemia, hipercalcemia y VHS alta.' },
          { t: 'Hemograma, VHS, PCR, calcio, fosfatasas y Rx', d: 'Resonancia magnética de elección; derivar',
            say: 'El estudio inicial incluye hemograma, VHS, PCR, calcio, fosfatasas alcalinas y radiografía, y el examen de elección es la resonancia. El médico general sospecha, inicia el estudio y deriva.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Lumbociática',
      title: 'Lumbociática radicular: qué raíz es',
      cards: [
        { title: 'Semiología por raíz', tag: 'Hernia L4-L5 o L5-S1', kind: 'key', items: [
          { t: 'L5: cara lateral de la pierna', d: 'Debilidad del hallux; marcha de talones',
            say: 'Cuando el dolor lumbar baja por debajo de la rodilla siguiendo un dermatoma, hay compromiso radicular, casi siempre por una hernia del núcleo pulposo. En la quinta raíz lumbar el dolor va por la cara lateral de la pierna y el dorso del pie, con debilidad de la extensión del hallux, la marcha de talones.' },
          { t: 'S1: planta del pie y reflejo aquiliano', d: 'Marcha de puntillas',
            say: 'En la primera raíz sacra el dolor va por la cara posterior de la pierna y la planta del pie, hay debilidad de la flexión plantar, o marcha de puntillas, y el reflejo aquiliano disminuido.' },
          { t: 'L4: muslo anterior y reflejo rotuliano', d: 'Cara medial de la pierna',
            say: 'En la cuarta raíz lumbar el dolor está en la cara anterior del muslo y medial de la pierna, y baja el reflejo rotuliano.' },
        ] },
        { title: 'Signos y manejo', tag: 'Como el lumbago', kind: 'criteria', items: [
          { t: 'Lasègue positivo a 30 a 70 grados', d: 'El cruzado es más específico',
            say: 'El signo de compresión radicular es la elevación de la pierna recta, o Lasègue: dolor entre treinta y setenta grados. El Lasègue cruzado es más específico.' },
          { t: 'AINE, analgesia y actividad', d: '80 a 90 % mejora en 6 a 12 semanas',
            say: 'El tratamiento inicial es el del lumbago: antiinflamatorios, analgesia y mantener la actividad según tolerancia. Entre ochenta y noventa por ciento mejora en seis a doce semanas.' },
          { t: 'RM solo si hay alarma', d: 'Déficit progresivo o candidato a cirugía',
            say: 'La resonancia se pide solo con déficit progresivo, signos de alarma o dolor persistente que sea candidato a cirugía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Infecciones osteoarticulares',
      title: 'Osteomielitis aguda',
      cards: [
        { title: 'Quién y dónde', tag: 'Niño, metáfisis', kind: 'key', items: [
          { t: 'Hematógena en la metáfisis del niño', d: 'Fémur distal, tibia proximal; S. aureus',
            say: 'La osteomielitis aguda hematógena afecta sobre todo a niños, en la metáfisis de los huesos largos, como el fémur distal y la tibia proximal, por Staphylococcus aureus. En la anemia falciforme se suma Salmonella.' },
          { t: 'Adulto: fractura expuesta, cirugía, pie diabético', d: 'Hueso palpable con el estilete',
            say: 'En el adulto es frecuente tras una fractura expuesta, una cirugía o en el pie diabético, donde se palpa hueso con el estilete.' },
        ] },
        { title: 'Diagnóstico y tratamiento', tag: 'La Rx es normal al inicio', kind: 'alert', items: [
          { t: 'Fiebre, dolor localizado, VHS y PCR altas', d: 'Radiografía normal 10 a 14 días',
            say: 'La clínica es fiebre, dolor intenso localizado, impotencia funcional y signos inflamatorios, con leucocitosis y VHS y PCR elevadas. La radiografía es normal los primeros diez a catorce días; después aparece la reacción perióstica y la lisis. La resonancia es el examen más sensible y precoz.' },
          { t: 'Cloxacilina o cefazolina EV por 4 a 6 semanas', d: 'Vancomicina si hay SAMR; drenar absceso',
            say: 'Se hospitaliza y se da antibiótico endovenoso antiestafilocócico, cloxacilina o cefazolina, y vancomicina si se sospecha SAMR, por cuatro a seis semanas, con drenaje quirúrgico si hay absceso o secuestro. La artritis séptica la vemos en la próxima clase.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Epicondilalgia lateral',
      images: [
        { src: 'animaciones/trauma-11/A1_epicondilalgia.mp4', label: 'El codo de tenista', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Sobrecarga del tendón extensor',
          say: 'Mira el codo. En la epicondilalgia lateral, el codo de tenista, la sobrecarga repetida degenera el tendón de los extensores en su origen, en el epicóndilo lateral. Duele al agarrar y levantar, y la extensión resistida de la muñeca reproduce el dolor. La movilidad del codo es normal. Se trata con reposo relativo, frío, antiinflamatorios por pocos días, una cincha epicondílea y ejercicios excéntricos. El corticoide repetido empeora el resultado.' },
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
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.11.1.008 · Epicondilalgia, epitroclealgias",
      "stem": "Mujer de 42 años, que trabaja en una fábrica de empaque con movimientos repetitivos de la muñeca, consulta por dolor en la cara lateral del codo derecho de 2 meses. Al examen presenta dolor a la palpación del epicóndilo lateral y al extender la muñeca contra resistencia.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Epitrocleítis (codo de golfista)"
        },
        {
          "letter": "B",
          "text": "Artritis reumatoide"
        },
        {
          "letter": "C",
          "text": "Bursitis olecraneana"
        },
        {
          "letter": "D",
          "text": "Síndrome del túnel carpiano"
        },
        {
          "letter": "E",
          "text": "Epicondilitis lateral (codo de tenista)"
        }
      ],
      "correct": "E",
      "explanation": "Dolor en el epicóndilo lateral que aumenta con la extensión resistida de la muñeca (prueba de Cozen) es una epicondilitis lateral, tendinopatía del extensor radial corto del carpo por sobreuso. Se trata con modificación de la actividad, AINE, ortesis y ejercicios excéntricos. La epitrocleítis duele en la cara medial y con la flexión resistida de la muñeca.",
      "say": {
        "stem": "Mujer de cuarenta y dos años con trabajo repetitivo y dolor en el epicóndilo lateral que aumenta al extender la muñeca contra resistencia.",
        "question": "¿Cuál es el diagnóstico?",
        "options": "Las opciones: epitrocleítis, artritis reumatoide, bursitis olecraneana, túnel carpiano o epicondilitis lateral. Piénsalo.",
        "answer": "Es la E. Epicondilitis lateral o codo de tenista. La epitrocleítis es su espejo: duele en la cara medial y con la flexión de la muñeca."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.11.1.012 · Lumbago infeccioso y tumoral",
      "stem": "Hombre de 45 años, usuario de drogas endovenosas, presenta dolor lumbar progresivo de 3 semanas, que no cede con el reposo y es peor de noche, con fiebre intermitente. Al examen hay dolor a la percusión de la apófisis espinosa de L3. PCR 120 mg/L, VHS 85 mm/h.",
      "question": "¿Cuál es el examen de elección para el diagnóstico?",
      "options": [
        {
          "letter": "A",
          "text": "Radiografía de columna lumbar"
        },
        {
          "letter": "B",
          "text": "Solo analgesia y control en 6 semanas"
        },
        {
          "letter": "C",
          "text": "Densitometría ósea"
        },
        {
          "letter": "D",
          "text": "Electromiografía"
        },
        {
          "letter": "E",
          "text": "Resonancia magnética de columna lumbar con gadolinio"
        }
      ],
      "correct": "E",
      "explanation": "Un lumbago con banderas rojas (fiebre, drogas endovenosas, dolor nocturno, reactantes elevados) sugiere espondilodiscitis o absceso epidural. La resonancia con gadolinio es el examen de elección por su sensibilidad precoz; la radiografía se altera tarde. Además se toman hemocultivos y, si son negativos, biopsia. Otras banderas rojas son el antecedente de cáncer y la baja de peso.",
      "say": {
        "stem": "Hombre de cuarenta y cinco años, usuario de drogas endovenosas, con lumbago nocturno progresivo, fiebre y reactantes muy elevados.",
        "question": "¿Qué examen pides?",
        "options": "Las opciones: radiografía lumbar, solo analgesia, densitometría, electromiografía o resonancia con gadolinio. Piénsalo.",
        "answer": "Es la E. Resonancia con gadolinio, por sospecha de espondilodiscitis. La radiografía es lo primero que se piensa, pero se altera semanas después y puede salir normal."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2013 · Pregunta 167",
      "stem": "Paciente de 67 años, con antecedente de pielonefritis tratada hace 2 meses, presenta dolor lumbar desde hace 1 mes que se ha ido intensificando, asociado a sensación febril durante los últimos días. Al examen físico tiene temperatura de 38 °C y dolor a la palpación de la zona lumbar media. La radiografía lumbar muestra aplastamiento de L2 y L3, con imagen radiolúcida alrededor del disco intervertebral.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Osteosarcoma"
        },
        {
          "letter": "B",
          "text": "Pielonefritis aguda"
        },
        {
          "letter": "C",
          "text": "Osteoma osteoide"
        },
        {
          "letter": "D",
          "text": "Espondilodiscitis"
        },
        {
          "letter": "E",
          "text": "Espondilolistesis"
        }
      ],
      "correct": "D",
      "explanation": "Lumbago progresivo con fiebre tras una bacteriemia de origen urinario, con erosión de dos platillos vertebrales contiguos y del disco entre ellos, es espondilodiscitis (siembra hematógena). La infección cruza el disco; los tumores típicamente lo respetan. Se confirma con resonancia, hemocultivos y biopsia o punción guiada.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil trece. Paciente de sesenta y siete años, con pielonefritis hace dos meses, que consulta por lumbago progresivo de un mes, ahora con fiebre. La radiografía muestra aplastamiento de dos vértebras lumbares contiguas con imagen radiolúcida alrededor del disco entre ellas.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: osteosarcoma, pielonefritis aguda, osteoma osteoide, espondilodiscitis o espondilolistesis. Piénsalo.",
        "answer": "Es la D. Fiebre más lumbago progresivo tras una infección urinaria, con daño de dos vértebras y el disco entre ellas, es una espondilodiscitis hematógena. La pielonefritis tienta por el antecedente, pero no explica la destrucción vertebral en la radiografía."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.02.3.005 · Lumbociática radicular",
      "stem": "Hombre de 38 años presenta lumbago de inicio tras levantar peso hace 10 días, irradiado por la cara posterolateral del muslo y la pierna hasta el dorso del pie y el ortejo mayor derechos, con parestesias en esa zona. Lasègue positivo a 40°. Debilidad leve de la dorsiflexión del ortejo mayor. Reflejos aquilianos simétricos. Sin alteración esfinteriana ni anestesia en silla de montar.",
      "question": "¿Qué raíz está más probablemente comprometida y cuál es la conducta inicial?",
      "options": [
        {
          "letter": "A",
          "text": "S1; resonancia magnética urgente"
        },
        {
          "letter": "B",
          "text": "S1; reposo absoluto en cama por 2 semanas"
        },
        {
          "letter": "C",
          "text": "L4; cirugía descompresiva electiva"
        },
        {
          "letter": "D",
          "text": "L5; resonancia magnética urgente y cirugía"
        },
        {
          "letter": "E",
          "text": "L5; tratamiento médico con analgesia y actividad según tolerancia"
        }
      ],
      "correct": "E",
      "explanation": "Dolor hasta el dorso del pie y ortejo mayor, debilidad del extensor del hallux y aquiliano normal indican radiculopatía L5 (hernia L4-L5). Sin déficit progresivo ni síndrome de cauda equina, el manejo inicial es médico por 4 a 6 semanas, con analgesia y mantenerse activo; la resonancia se reserva para banderas rojas o falla del tratamiento.",
      "say": {
        "stem": "Hombre de treinta y ocho años con lumbago irradiado hasta el dorso del pie y el ortejo mayor, debilidad leve para levantar el ortejo, reflejo aquiliano normal y sin alteración de esfínteres.",
        "question": "¿Qué raíz está comprometida y cuál es la conducta inicial?",
        "options": "Las opciones: ese uno con resonancia urgente, ese uno con reposo absoluto, ele cuatro con cirugía, ele cinco con resonancia y cirugía urgente o ele cinco con tratamiento médico. Piénsalo.",
        "answer": "Es la E. Es una radiculopatía ele cinco sin banderas rojas, que se trata primero con analgesia y actividad según tolerancia. La resonancia urgente tienta, pero solo se indica ante déficit progresivo o síndrome de cola de caballo."
      }
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
