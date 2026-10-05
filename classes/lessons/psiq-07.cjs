// Clase 17.7 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-07). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (1.09.1.006) solo trae una pregunta real mal clasificada (nefropatía lúpica, Diciembre 2018 P113): no se usa.
// La psiquiatría real está bajo 5.01.1.00x. De la búsqueda por tema se usaron:
//   Diciembre 2017 P104 (TAG clásico, con clonazepam intermitente), Julio 2025 P89 (fobia social: ISRS de primera línea, no propranolol ni alprazolam),
//   Julio 2024 P123 (diagnóstico: ansiedad social, mente en blanco al exponer), Diciembre 2017 P106 (fobia social generalizada grave, no psicosis),
//   Julio 2016 P44 (miedo a volar: fobia específica, no TAG ni pánico).
// No usadas: Julio 2016 P129, Julio 2015 P82, Julio 2013 P9 y Julio 2016 P35 (mismo punto diagnóstico que Julio 2024 P123);
//   Diciembre 2024 P156 (enunciado de fobia social pero la clave dice "trastorno de ansiedad generalizada": clave incoherente, descartada);
//   Diciembre 2018 P128 y Diciembre 2019 P13 (viraje a manía con ISRS: tema de la clase de bipolar);
//   Diciembre 2024 P35, Julio 2016 P161, Julio 2025 P103 y otras de la búsqueda (otro tema).
// Cuidado clínico: las benzodiacepinas no se enseñan como tratamiento de mantención; el propranolol se enseña solo como rescate puntual del miedo escénico circunscrito (no como tratamiento de fondo).
// Imágenes: ninguna (psiquiatría; no hay figura clínica útil en los libros extraídos).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-07',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Ansiedad generalizada y fobia social: ISRS, terapia cognitivo-conductual y cero benzodiacepinas de mantención',
      say: 'Bienvenido. Después del pánico, hoy vemos las dos formas de ansiedad crónica que más se ven en la consulta: el trastorno de ansiedad generalizada y la fobia social. El paciente casi nunca dice que está ansioso: llega con cefalea, contracturas o insomnio. En el examen se repiten tres ideas: cómo distinguirlas, que los inhibidores selectivos de la recaptación de serotonina son la primera línea, y que las benzodiacepinas no son tratamiento de mantención.',
    },

    {
      type: 'points',
      kicker: 'Panorama',
      title: 'Dos ansiedades, dos focos',
      cards: [
        { title: 'Ansiedad generalizada', tag: 'TAG', kind: 'key', items: [
          { t: 'Preocupación por todo', d: 'Salud, plata, familia, trabajo',
            say: 'En el trastorno de ansiedad generalizada el paciente vive en alerta permanente, con una preocupación flotante por muchas cosas a la vez: la salud, el dinero, la familia, el trabajo. No hay un objeto único del miedo.' },
          { t: 'Ruido de fondo continuo', d: 'No hay crisis bruscas',
            say: 'A diferencia del pánico, no hay picos bruscos con sensación de muerte. Es un ruido de fondo que no se apaga.' },
        ] },
        { title: 'Fobia social', tag: 'Ansiedad social', kind: 'alert', items: [
          { t: 'Miedo al juicio de otros', d: 'Humillación y vergüenza',
            say: 'En la fobia social, o trastorno de ansiedad social, el centro es el temor a ser evaluado negativamente, a hacer el ridículo o a que se note la ansiedad.' },
          { t: 'Aparece con exposición social', d: 'Hablar, comer o actuar frente a otros',
            say: 'Y se dispara cuando hay exposición: interactuar, comer frente a otros o actuar en público. Esa es la pista para separarla de la generalizada.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clínica del TAG',
      title: 'Cómo llega el paciente con TAG',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'cause', t: 'Preocupación excesiva', s: 'Difícil de controlar' },
        { id: 'b', col: 1, row: 2, k: 'mech', t: 'Alerta sostenida', s: 'Tensión muscular, mente agitada' },
        { id: 'c', col: 2, row: 1, k: 'effect', t: 'Dolor y contractura', s: 'Cefalea tensional, bruxismo' },
        { id: 'd', col: 2, row: 3, k: 'effect', t: 'Insomnio', s: 'Rumiación al acostarse' },
        { id: 'e', col: 3, row: 2, k: 'alert', t: 'Consulta por lo somático', s: 'Cuello, cabeza, colon irritable' },
        { id: 'f', col: 4, row: 2, k: 'good', t: 'Preguntar por preocupaciones', s: 'Ahí está el diagnóstico' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'b', to: 'd' }, { from: 'c', to: 'e' }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'La preocupación mantiene el cuerpo en alerta',
          say: 'El paciente no puede apagar la preocupación, y su cuerpo vive como si hubiera un peligro permanente. El resultado es tensión muscular sostenida y una mente que no descansa.' },
        { show: ['c', 'd'], note: 'Dolor e insomnio',
          say: 'Esa tensión da contracturas cervicales, bruxismo y cefalea tensional. Y al acostarse aparece la rumiación, con insomnio de conciliación y sueño poco reparador.' },
        { show: ['e', 'f'], note: 'Consultan por el síntoma, no por la ansiedad',
          say: 'Por eso consultan por el dolor de cuello o por el colon irritable. Fíjate: tu trabajo es preguntar por las preocupaciones, porque ahí está el diagnóstico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico TAG',
      title: 'Seis meses y tres síntomas',
      cards: [
        { title: 'Núcleo del cuadro', tag: 'DSM-5', kind: 'criteria', items: [
          { t: 'Preocupación excesiva, 6 meses', d: 'La mayor parte de los días',
            say: 'El criterio central es ansiedad y preocupación excesivas, sobre una amplia gama de situaciones, presentes la mayor parte de los días durante al menos seis meses. Ese tiempo se pregunta.' },
          { t: 'Le cuesta controlarla', d: '«No puedo parar de pensar en lo peor»',
            say: 'Además, al paciente le resulta muy difícil controlar la preocupación. Sabe que es excesiva, pero no puede frenarla.' },
        ] },
        { title: 'Al menos 3 de 6 síntomas', tag: 'Asociados', kind: 'key', items: [
          { t: 'Inquietud, fatiga, mente en blanco', d: 'Y dificultad para concentrarse',
            say: 'Se asocia a al menos tres de seis síntomas: inquietud o sensación de nervios de punta, fatiga fácil, y dificultad para concentrarse o mente en blanco.' },
          { t: 'Irritabilidad y tensión muscular', d: 'Contracturas, bruxismo, cefalea',
            say: 'Luego la irritabilidad y la tensión muscular, que es el síntoma somático más distintivo.' },
          { t: 'Trastorno del sueño', d: 'Insomnio de conciliación',
            say: 'Y el trastorno del sueño, típicamente insomnio de conciliación o sueño inquieto.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico fobia social',
      title: 'Miedo al escrutinio',
      cards: [
        { title: 'Criterios', tag: 'DSM-5', kind: 'criteria', items: [
          { t: 'Miedo en situaciones sociales', d: 'Interacción, comer, actuar ante otros',
            say: 'La fobia social es un miedo o ansiedad intensos en situaciones donde la persona está expuesta al posible examen de otros: conversar, ser observado comiendo o bebiendo, o actuar delante de gente.' },
          { t: 'Teme que se note su ansiedad', d: 'Rubor, temblor, sudor',
            say: 'Teme actuar de cierta manera o mostrar síntomas, como rubor facial, temblor de voz o sudoración, que los demás evalúen mal. Y las situaciones se evitan o se soportan con gran sufrimiento.' },
        ] },
        { title: 'Subtipo circunscrito', tag: 'De actuación', kind: 'key', items: [
          { t: 'Solo hablar o actuar en público', d: 'Músicos, expositores, estudiantes',
            say: 'Hay un subtipo circunscrito, o de actuación, donde el miedo se limita a hablar o actuar en público. En lo informal la persona se desenvuelve bien. Este subtipo cambia el tratamiento, como veremos.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Diferencial',
      title: 'TAG, fobia social y pánico',
      head: ['Criterio', 'TAG', 'Fobia social', 'Pánico'],
      rows: [
        { cells: ['Foco', 'Preocupación difusa', 'Juicio y vergüenza', 'Miedo a morir'],
          say: 'Lo primero es el foco. En el TAG, la preocupación difusa por temas cotidianos. En la fobia social, el miedo al juicio ajeno. En el pánico, el miedo a morir o a volverse loco.' },
        { cells: ['Curso', 'Continuo, 6 meses', 'Gatillado por exposición', 'Crisis, pico en 10 min'],
          say: 'El curso también separa: el TAG es continuo por seis meses, la fobia social aparece al exponerse, y el pánico va en crisis con pico en diez minutos.' },
        { cells: ['Síntomas', 'Tensión, bruxismo, insomnio', 'Rubor, temblor de voz, sudor', 'Palpitaciones, ahogo'],
          say: 'En la fobia social los síntomas se ven y se temen: rubor, temblor de voz y sudor. En el pánico dominan las palpitaciones y el ahogo, y en el TAG la tensión muscular.' },
        { cells: ['Tratamiento', 'ISRS más TCC', 'ISRS; propranolol si es de actuación', 'ISRS más TCC'],
          say: 'El tratamiento de fondo es ISRS con terapia cognitivo-conductual en las tres. La excepción es el miedo escénico puro, donde se puede usar propranolol puntual.' },
        { cells: ['Error clásico', 'Clonazepam crónico', 'Olvidar propranolol puntual', 'Pensar infarto y no tratar'],
          say: 'Y el error clásico del TAG es dejar clonazepam o diazepam de forma indefinida.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diferencial fino',
      title: 'Lo que se parece',
      cards: [
        { title: 'Fobia social frente a otros cuadros', tag: 'Diagnóstico diferencial', kind: 'alert', items: [
          { t: 'Timidez normal', d: 'No hay deterioro ni evitación',
            say: 'La timidez normal no produce deterioro laboral ni evitación incapacitante. En la fobia social sí los hay.' },
          { t: 'Personalidad esquizoide', d: 'No desea relacionarse',
            say: 'El paciente con personalidad esquizoide no tiene interés en socializar. El fóbico social sí quiere relacionarse, pero el miedo al escrutinio lo paraliza.' },
          { t: 'Agorafobia', d: 'Miedo a no escapar, no al juicio',
            say: 'Y la agorafobia, que vimos la clase pasada, teme quedar atrapado sin ayuda, no ser juzgado.' },
        ] },
        { title: 'Fobia específica', tag: 'Un solo objeto', kind: 'key', items: [
          { t: 'Miedo a un estímulo concreto', d: 'Volar, alturas, animales',
            say: 'La fobia específica es el miedo a un objeto o situación concreta, como volar. Hay evitación, pero no preocupación difusa ni miedo al juicio. Una pregunta real del banco la contrapone al TAG y al pánico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'ISRS y terapia cognitivo-conductual',
      cards: [
        { title: 'Primera línea', tag: 'TAG y fobia social generalizada', kind: 'pharma', items: [
          { t: 'ISRS: escitalopram, sertralina', d: 'También paroxetina',
            say: 'La primera línea, tanto en el TAG como en la fobia social generalizada, son los inhibidores selectivos de la recaptación de serotonina: escitalopram de diez a veinte miligramos al día, sertralina desde cincuenta, o paroxetina.' },
          { t: 'Venlafaxina como alternativa', d: '75 a 150 mg al día',
            say: 'Una alternativa es el inhibidor dual venlafaxina, de setenta y cinco a ciento cincuenta miligramos. Tienen buena eficacia a largo plazo y no producen abuso.' },
        ] },
        { title: 'Psicoterapia y apoyo', tag: 'TCC', kind: 'key', items: [
          { t: 'Terapia cognitivo-conductual', d: 'Reestructuración y relajación',
            say: 'Se asocia terapia cognitivo-conductual, con reestructuración de los pensamientos catastróficos y técnicas de relajación muscular progresiva, para desactivar la tensión del cuerpo.' },
          { t: 'Higiene del sueño', d: 'Parte del plan del TAG',
            say: 'Y se trabaja la higiene del sueño, porque el insomnio mantiene el círculo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fobia social',
      title: 'Generalizada o de actuación',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'start', t: 'Fobia social', s: 'Miedo al juicio de otros' },
        { id: 'b', col: 1, row: 2, k: 'q', t: '¿Cuántas situaciones?', s: 'Todas o solo hablar en público' },
        { id: 'c', col: 2, row: 1, k: 'good', t: 'Generalizada', s: 'Varias situaciones sociales' },
        { id: 'd', col: 3, row: 1, k: 'good', t: 'ISRS más TCC', s: 'Tratamiento de fondo' },
        { id: 'e', col: 2, row: 3, k: 'mech', t: 'Solo actuación', s: 'Exponer, rendir, tocar' },
        { id: 'f', col: 3, row: 3, k: 'refer', t: 'Propranolol puntual', s: '10 a 40 mg, 30 a 60 min antes' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'b', to: 'e' }, { from: 'e', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b', 'c', 'd'], note: 'Generalizada: tratamiento de fondo',
          say: 'Si el miedo abarca muchas situaciones sociales, es una fobia social generalizada y se trata como una ansiedad crónica: ISRS más terapia cognitivo-conductual. Esta es la respuesta de una pregunta real reciente, que veremos.' },
        { show: ['e', 'f'], note: 'Actuación: rescate puntual',
          say: 'Si el miedo es solo a actuar en público, el rescate de elección es el propranolol, un betabloqueador, de diez a cuarenta miligramos por vía oral, treinta a sesenta minutos antes del evento. Bloquea la taquicardia, el temblor y el rubor, y permite desempeñarse. Eso sí: antes de indicarlo se descarta asma y bradicardia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Trampa clásica',
      title: 'Benzodiacepinas: no de mantención',
      cards: [
        { title: 'Por qué no', tag: 'Regla EUNACOM', kind: 'alert', items: [
          { t: 'Pasadas 4 a 8 semanas', d: 'Tolerancia, dependencia, memoria',
            say: 'Las benzodiacepinas están desaconsejadas como tratamiento crónico. Usadas más allá de cuatro a ocho semanas, producen tolerancia, dependencia física y deterioro de la memoria.' },
          { t: 'No tratan la preocupación', d: 'Solo tapan el síntoma',
            say: 'Y no tratan el origen de la preocupación. En una pregunta real, la paciente con TAG se tranquilizaba con clonazepam dos o tres veces por semana: ese es justamente el patrón que hay que reconocer y reorientar.' },
        ] },
        { title: 'Si el ISRS no basta', tag: 'Segunda línea', kind: 'pharma', items: [
          { t: 'Pregabalina en TAG', d: 'Intolerancia o falta de respuesta',
            say: 'Como segunda línea en el TAG, el libro propone la pregabalina, un modulador gabaérgico, cuando hay intolerancia o falta de respuesta a los inhibidores de la recaptación de serotonina.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la ansiedad crónica al tratamiento correcto.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Preocupación múltiple, 6 meses', 'TAG: ISRS más TCC', 'Clonazepam indefinido'],
          say: 'Preocupación por varios temas durante más de seis meses con tensión muscular: ansiedad generalizada, con ISRS y terapia. El error es dejar una benzodiacepina crónica.' },
        { cells: ['Evita presentaciones y reuniones', 'Fobia social: ISRS', 'Propranolol o alprazolam diario'],
          say: 'Si hay evitación social amplia, es fobia social generalizada y se parte con un ISRS. El alprazolam diario es la trampa, y el propranolol es solo puntual.' },
        { cells: ['Solo teme exponer en público', 'Propranolol antes del evento', 'Antidepresivo continuo de entrada'],
          say: 'Si el miedo es solo a exponer, el rescate es propranolol antes de la exposición, no un antidepresivo continuo.' },
        { cells: ['Teme juicio, quiere socializar', 'Fobia social', 'Personalidad esquizoide'],
          say: 'Si desea relacionarse pero el miedo lo paraliza, es fobia social. En la esquizoide no hay interés por el vínculo.' },
        { cells: ['Miedo a un solo estímulo, volar', 'Fobia específica', 'TAG o pánico'],
          say: 'Miedo a un solo estímulo, como volar: fobia específica.' },
        { cells: ['Crisis bruscas con miedo a morir', 'Pánico, no TAG', 'Tratar como TAG'],
          say: 'Y si son crisis bruscas con miedo a morir, es pánico, que vimos la clase pasada.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 28 años, egresado de derecho, consulta por ansiedad y contracturas musculares. Hace más de 1 año vive preocupado en exceso: teme no aprobar su examen de grado, que sus padres enfermen, que su auto falle, que sus ahorros no alcancen. Reconoce que es exagerado pero no logra controlarlo. Tiene cefalea tensional frecuente, bruxismo nocturno, fatiga matinal y dificultad para conciliar el sueño. No ha tenido crisis de pánico ni miedo a relacionarse con sus pares.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Clonazepam cada 8 horas de forma indefinida' },
        { letter: 'B', text: 'ISRS, terapia cognitivo-conductual e higiene del sueño' },
        { letter: 'C', text: 'Propranolol 40 mg en la mañana todos los días' },
        { letter: 'D', text: 'Haloperidol en dosis bajas' },
        { letter: 'E', text: 'Solo reposo y analgésicos para la cefalea' },
      ],
      correct: 'B',
      explanation: 'Trastorno de ansiedad generalizada: preocupación excesiva e incontrolable por varios temas por más de 6 meses, con tensión muscular, fatiga, cefalea e insomnio. Tratamiento de primera línea: ISRS (escitalopram o sertralina), TCC con relajación muscular e higiene del sueño. Las benzodiacepinas crónicas están contraindicadas.',
      say: {
        stem: 'Un hombre de veintiocho años, egresado de derecho, consulta por ansiedad y contracturas. Hace más de un año vive preocupado en exceso por su examen, la salud de sus padres, su auto y sus ahorros. Reconoce que es exagerado, pero no lo controla. Tiene cefalea tensional, bruxismo, fatiga y le cuesta conciliar el sueño. No tiene crisis de pánico ni miedo a relacionarse.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: clonazepam indefinido; ISRS, terapia cognitivo-conductual e higiene del sueño; propranolol diario; haloperidol; o solo reposo y analgésicos. Piénsalo.',
        answer: 'Es la B. Preocupación múltiple por más de seis meses con tensión muscular, fatiga e insomnio: ansiedad generalizada. Se trata con un ISRS, terapia cognitivo-conductual e higiene del sueño. El clonazepam indefinido es el error clásico, el propranolol no es tratamiento de mantención del TAG y el haloperidol no tiene indicación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 104',
      stem: 'Una mujer de 30 años se preocupa mucho por las finanzas y la salud de su familia. Además, le angustia que alguno de sus familiares pudiera quedarse sin trabajo o que la economía decayera. Refiere estar pasando por un periodo de estrés laboral y estar estresada porque muchas cosas dependen de ella, tanto en su trabajo, como en su familia. Refiere que en el último tiempo, lo único que la mantiene más tranquila es tomar un poco de clonazepam, el que consume 2 a 3 veces por semana. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno obsesivo compulsivo' },
        { letter: 'B', text: 'Trastorno de pánico' },
        { letter: 'C', text: 'Trastorno de personalidad dependiente' },
        { letter: 'D', text: 'Reacción adversa a las benzodiazepinas' },
        { letter: 'E', text: 'Trastorno de ansiedad generalizada' },
      ],
      correct: 'E',
      explanation: 'Tiene preocupaciones distintas y de distintos tipos (finanzas, salud de la familia, trabajo): es un trastorno de ansiedad generalizada clásico.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Una mujer de treinta años se preocupa mucho por las finanzas y la salud de su familia, y le angustia que alguien pierda el trabajo o que la economía decaiga. Está estresada porque muchas cosas dependen de ella. Lo único que la tranquiliza es un poco de clonazepam, dos a tres veces por semana.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: obsesivo compulsivo; pánico; personalidad dependiente; reacción adversa a benzodiacepinas; o ansiedad generalizada. Piénsalo.',
        answer: 'Es la E. Preocupaciones de distintos tipos, finanzas, familia, trabajo: ansiedad generalizada clásica. El clonazepam es un dato que distrae, pero no hace el diagnóstico. En el manejo, esa benzodiacepina intermitente es justo lo que se reorienta hacia un ISRS con terapia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 89',
      stem: 'Paciente de 28 años con miedo intenso y síntomas físicos ante situaciones de hablar en público o comer frente a otros. Evita reuniones sociales y ha rechazado ascensos laborales por esto. ¿Cuál es el tratamiento farmacológico de primera línea?',
      question: '¿Cuál es el tratamiento farmacológico de primera línea?',
      options: [
        { letter: 'A', text: 'Escitalopram (ISRS)' },
        { letter: 'B', text: 'Propranolol a demanda' },
        { letter: 'C', text: 'Alprazolam a diario' },
        { letter: 'D', text: 'Haloperidol' },
        { letter: 'E', text: 'Carbamazepina' },
      ],
      correct: 'A',
      explanation: 'Fobia social o trastorno de ansiedad social: el tratamiento farmacológico de primera línea son los ISRS (sertralina, escitalopram, paroxetina), combinados con TCC. El propranolol es para situaciones puntuales.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un paciente de veintiocho años con miedo intenso y síntomas físicos al hablar en público o comer frente a otros. Evita reuniones sociales y ha rechazado ascensos por esto.',
        question: '¿Cuál es el tratamiento farmacológico de primera línea?',
        options: 'Las opciones: escitalopram; propranolol a demanda; alprazolam diario; haloperidol; o carbamazepina. Piénsalo.',
        answer: 'Es la A. El miedo se extiende a varias situaciones sociales y lo limita en la vida: fobia social generalizada, y la primera línea es un ISRS más terapia. El propranolol a demanda es la trampa: sirve para situaciones puntuales de actuación, no como base. El alprazolam diario es el error de las benzodiacepinas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 123',
      stem: 'Un hombre de 21 años experimenta dificultades para realizar presentaciones en público, que han afectado su rendimiento académico. Además, refiere enrojecimiento facial y torpeza en situaciones sociales. Recientemente no pudo terminar una presentación oral frente a su curso, ya que refiere que su mente se quedó en blanco en un momento. Todo esto le ha generado angustia y tristeza. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Fobia específica' },
        { letter: 'B', text: 'Agorafobia' },
        { letter: 'C', text: 'Trastorno de ansiedad generalizada' },
        { letter: 'D', text: 'Trastorno de ansiedad social' },
        { letter: 'E', text: 'Trastorno de personalidad evitativa' },
      ],
      correct: 'D',
      explanation: 'El cuadro describe una fobia social, también llamada trastorno de ansiedad social.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un hombre de veintiún años con dificultades para presentar en público, que afectan su rendimiento académico. Tiene rubor facial y torpeza social. No pudo terminar una presentación porque su mente se quedó en blanco. Todo esto le genera angustia y tristeza.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: fobia específica; agorafobia; ansiedad generalizada; ansiedad social; o personalidad evitativa. Piénsalo.',
        answer: 'Es la D. El miedo se centra en ser evaluado por otros, con rubor y mente en blanco: trastorno de ansiedad social. La fobia específica es a un objeto concreto, la generalizada es preocupación difusa y la agorafobia es miedo a no poder escapar. La personalidad evitativa es un distractor frecuente, pero aquí hay un cuadro focal que se ajusta a ansiedad social.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 106',
      stem: 'Un paciente de 21 años no sale de su casa por miedo a encontrarse con alguien que conozca y que le haga preguntas sobre su vida. Incluso desconecta el teléfono, para evitar que sus familiares lo llamen y le hagan preguntas. Se siente muy incómodo por lo que pudieran pensar de él las demás personas. Desde el colegio era muy tímido, pero esto empeoró al entrar a estudiar sus estudios superiores y actualmente afecta significativamente su vida. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Depresión psicótica' },
        { letter: 'B', text: 'Trastorno de ansiedad social' },
        { letter: 'C', text: 'Trastorno obsesivo compulsivo' },
        { letter: 'D', text: 'Esquizofrenia' },
        { letter: 'E', text: 'Trastorno delirante crónico' },
      ],
      correct: 'B',
      explanation: 'Es una fobia social generalizada y bastante grave: evita a los demás por lo que puedan pensar de él, y la timidez previa empeoró hasta afectar significativamente su vida.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un paciente de veintiún años no sale de casa por miedo a encontrarse con alguien conocido que le haga preguntas. Incluso desconecta el teléfono para que su familia no lo llame. Se siente muy incómodo por lo que otros puedan pensar de él. Era tímido desde el colegio, pero empeoró en la educación superior y hoy afecta mucho su vida.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: depresión psicótica; ansiedad social; obsesivo compulsivo; esquizofrenia; o trastorno delirante crónico. Piénsalo.',
        answer: 'Es la B. Aísla a este joven el temor al juicio de los demás, y la timidez previa llegó a deteriorar su vida: ansiedad social generalizada. No hay delirios ni alucinaciones, así que se descartan los cuadros psicóticos. Y fíjate: acá la timidez ya no es normal, porque hay evitación incapacitante.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 44',
      stem: 'Paciente masculino de 27 años de edad , quien presenta desde hace 1 año temor a volar, por lo que prefiere desplazarse por tierra siempre. Incluso ha dejado de asistir a congresos y visitar a familiares en el extranjero. Siente mucha angustia y palpitaciones, cada vez que sabe que debe tomar un avión, desde los días antes y en dos oportunidades, previo a los vuelos, ha tomado benzodiacepinas con respuesta parcial. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Trastorno de ansiedad generalizada' },
        { letter: 'B', text: 'Fobia específica' },
        { letter: 'C', text: 'Agorafobia' },
        { letter: 'D', text: 'Trastorno de pánico' },
        { letter: 'E', text: 'Trastorno por ansiedad de separación' },
      ],
      correct: 'B',
      explanation: 'Es una aerofobia, que es la fobia específica a volar.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un hombre de veintisiete años con temor a volar desde hace un año, por lo que viaja siempre por tierra. Ha dejado de ir a congresos y de visitar familiares en el extranjero. Siente angustia y palpitaciones desde días antes de un vuelo, y dos veces tomó benzodiacepinas con respuesta parcial.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: ansiedad generalizada; fobia específica; agorafobia; pánico; o ansiedad de separación. Piénsalo.',
        answer: 'Es la B. El miedo es a un estímulo concreto, volar, y se evita: fobia específica. No hay preocupación por muchos temas, como en el TAG, ni crisis imprevistas con evitación de lugares, como en pánico y agorafobia.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: TAG y fobia social',
      cards: [
        { title: 'Diagnóstico', tag: 'Distinguir', kind: 'key', items: [
          { t: 'TAG: 6 meses, 3 síntomas', d: 'Preocupación múltiple, tensión muscular',
            say: 'Cerremos con las reglas de oro. El trastorno de ansiedad generalizada es preocupación excesiva e incontrolable por varios temas durante al menos seis meses, con tensión muscular como síntoma distintivo.' },
          { t: 'Fobia social: miedo al juicio', d: 'Generalizada o de actuación',
            say: 'La fobia social es el miedo a ser evaluado negativamente, y puede ser generalizada o circunscrita a actuar en público.' },
        ] },
        { title: 'Conducta', tag: 'Tratamiento', kind: 'alert', items: [
          { t: 'ISRS más TCC', d: 'Propranolol solo puntual en actuación',
            say: 'Para ambas, la base es un ISRS más terapia cognitivo-conductual. El propranolol es solo un rescate puntual para el miedo a actuar en público.' },
          { t: 'Sin benzodiacepinas de mantención', d: 'Tolerancia y dependencia',
            say: 'Y las benzodiacepinas no se dejan como mantención. Si te llevas una sola idea de hoy: la ansiedad crónica se trata con ISRS y psicoterapia, no con benzodiacepinas. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Ansiedad crónica: del síntoma al tratamiento',
    root: N('start', 'Ansiedad crónica con disfunción', 'Cefalea, contracturas, insomnio, evitación',
      'Un paciente consulta por síntomas de ansiedad crónica que le afectan la vida. Primero preguntamos qué la dispara, y recordamos descartar causas médicas y consumo de sustancias, como vimos en pánico.',
      ['Preocupación difusa por todo, más de seis meses', N('ok', 'TAG', 'Tensión muscular, insomnio',
        'Es ansiedad generalizada. La base es un ISRS más terapia cognitivo-conductual e higiene del sueño. Si no responde o no tolera, la pregabalina es una segunda línea. Nunca benzodiacepinas de mantención.')],
      ['Miedo a ser juzgado por otros', N('q', 'Fobia social', '¿Generalizada o de actuación?',
        'El miedo es al juicio de los demás. Ahora hay que separar cuántas situaciones abarca.',
        ['Varias situaciones sociales', N('ok', 'ISRS más TCC', 'Escitalopram o sertralina',
          'Fobia social generalizada: ISRS más terapia cognitivo-conductual. Esa fue la respuesta de la pregunta real de julio de dos mil veinticinco.')],
        ['Solo hablar o actuar en público', N('ok', 'Propranolol puntual', '10 a 40 mg, 30 a 60 min antes',
          'Si es solo de actuación, propranolol de diez a cuarenta miligramos, treinta a sesenta minutos antes. Antes se descarta asma y bradicardia.')],
      )],
      ['Crisis bruscas con miedo a morir', N('refer', 'Ir a pánico', 'ISRS más TCC; BZD solo rescate',
        'Si son crisis bruscas con miedo a morir, el cuadro es el pánico de la clase anterior.')],
      ['Miedo a un solo estímulo, como volar', N('refer', 'Fobia específica', 'Evitación del estímulo concreto',
        'Si el miedo es a un solo objeto o situación, por ejemplo volar, es una fobia específica.')],
    ),
  },
};
