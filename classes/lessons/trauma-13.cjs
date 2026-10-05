// Clase 12.13 (Traumatología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_traumatologia.cjs (trauma-13). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// Las tablas plantilla del libro (Parámetro clínico / Criterio quirúrgico, severidad, tratamiento, puntos clave de fracturas y el GES de displasia de cadera)
// no corresponden al tema y no se usan. El libro llama "de Yubin" al sarcoma de Ewing: no se enseña ese nombre (ver informe, categoría A).
// Preguntas reales que ya usa otra clase (no se repiten): Diciembre 2022 P154 (trauma-08).
// Preguntas reales descartadas: Julio 2019 P152 (Ewing) porque depende de una radiografía y una resonancia que el banco no trae;
// Julio 2017 P53 es la misma pregunta que Diciembre 2019 P39 (se usa una sola); Julio 2025 P9 y Enero 2023 P160 y P161 repiten lo que ya enseñan las otras.
// El caso clínico escrito para la clase (sarcoma de Ewing) sale de la segunda pregunta de ejemplo del libro, sin fecha.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'trauma-13',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Tumores óseos: osteocondroma, osteoma osteoide, osteosarcoma, Ewing y células gigantes',
      say: 'Bienvenido. Los tumores óseos se preguntan poco en el EUNACOM, pero cuando aparecen son preguntas muy precisas. Casi siempre se resuelven con tres datos: la edad del paciente, el lugar del hueso donde está la lesión y cómo se ve en la radiografía. Hoy aprendemos a leer esos tres datos.',
    },

    {
      type: 'points',
      kicker: 'Generalidades',
      title: 'Cómo se presenta un tumor óseo',
      cards: [
        { title: 'Tres escenarios', tag: 'Clínica', kind: 'key', items: [
          { t: 'Hallazgo incidental', d: 'Radiografía pedida por otro motivo', say: 'Primero, el hallazgo casual. Una radiografía pedida por otra razón muestra una lesión, y es lo más frecuente en los tumores benignos.' },
          { t: 'Dolor sordo o nocturno', d: 'Persistente, no cede con el reposo', say: 'Segundo, el dolor. Puede ser sordo, persistente o de predominio nocturno.' },
          { t: 'Fractura en hueso patológico', d: 'Un golpe mínimo rompe el hueso', say: 'Y tercero, la fractura patológica. El tumor debilita la cortical hasta que el hueso se rompe con un traumatismo mínimo.' },
        ] },
        { title: 'Tres datos para el examen', tag: 'Diagnóstico', kind: 'alert', items: [
          { t: 'Edad del paciente', d: 'Niño, adolescente o adulto', say: 'Para el diagnóstico diferencial fíjate siempre en tres cosas. La edad del paciente.' },
          { t: 'Lugar en el hueso', d: 'Epífisis, metáfisis o diáfisis', say: 'La localización dentro del hueso: epífisis, metáfisis o diáfisis.' },
          { t: 'Aspecto en la radiografía', d: 'Signos de benignidad o malignidad', say: 'Y el aspecto radiológico, que te dice si la lesión es benigna o agresiva. Eso es lo que vemos ahora.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Radiografía',
      title: 'Benigno contra maligno en la imagen',
      head: ['Signo', 'Benigno', 'Maligno'],
      rows: [
        { cells: ['Cortical', 'Respetada o adelgazada', 'Rota o interrumpida'],
          say: 'En un tumor benigno la cortical se respeta o apenas se adelgaza. En el maligno se rompe.' },
        { cells: ['Partes blandas', 'No invadidas', 'Invadidas'],
          say: 'El benigno no sale del hueso. El maligno invade las partes blandas, y por eso a veces se palpa una masa dura.' },
        { cells: ['Límites', 'Bien delimitados', 'Mal delimitados, heterogéneos'],
          say: 'El benigno tiene bordes nítidos, como dibujados. El maligno tiene límites difusos y un aspecto heterogéneo, con zonas que se destruyen y otras que se densifican.' },
        { cells: ['Reacción perióstica', 'Ausente o simple', 'Compleja'],
          say: 'Y la reacción del periostio. En el benigno no hay o es simple. En el maligno es compleja, y es el signo de mayor agresividad.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Radiografía',
      title: 'Reacción perióstica compleja',
      cards: [
        { title: 'Signo de agresividad', tag: 'Maligno', kind: 'alert', items: [
          { t: 'Sol naciente', d: 'Crece rápido y levanta el periostio', say: 'El sol naciente, o sol radiante, aparece cuando el tumor crece tan rápido que levanta el periostio. Es típico del osteosarcoma.' },
          { t: 'Telas de cebolla', d: 'Capas sucesivas de hueso reactivo', say: 'Las telas de cebolla son capas sucesivas de hueso reactivo. Es la imagen clásica del sarcoma de Ewing.' },
          { t: 'Reacción triangular', d: 'Se describe en casos de osteosarcoma', say: 'En las preguntas también verás una reacción perióstica triangular, que es otra forma de decir que el periostio fue levantado por un tumor agresivo.' },
        ] },
        { title: 'Lo que hay que concluir', tag: 'Conducta', kind: 'key', items: [
          { t: 'Aspecto maligno: derivar', d: 'Estudio y tratamiento por especialista', say: 'Si la radiografía tiene aspecto maligno, tu conducta como médico general es derivar al especialista. El diagnóstico lo completa la biopsia y el tratamiento no es tuyo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tumores benignos',
      title: 'Osteocondroma y osteoma osteoide',
      cards: [
        { title: 'Osteocondroma', tag: 'El benigno más frecuente', kind: 'key', items: [
          { t: 'Joven con bulto óseo indoloro', d: 'Muchas veces asintomático', say: 'El osteocondroma es el tumor óseo benigno más frecuente. Se ve en jóvenes, que están asintomáticos o consultan por un bulto duro que no duele.' },
          { t: 'Radiografía: cachito de hueso', d: 'Crece hacia afuera de la metáfisis', say: 'En la radiografía parece un cachito de hueso que crece hacia afuera desde la metáfisis, como un hijo del hueso.' },
          { t: 'Observación', d: 'Cirugía si comprime o duele por roce', say: 'Se observa. Solo se opera si comprime una estructura o duele por roce.' },
        ] },
        { title: 'Osteoma osteoide', tag: 'Dolor que cede con aspirina', kind: 'alert', items: [
          { t: 'Dolor nocturno en joven', d: 'Cede con aspirina o AINE', say: 'En el osteoma osteoide la pista es el dolor nocturno de un joven que cede con aspirina o con antiinflamatorios.' },
          { t: 'Nidus radiolúcido con halo', d: 'Pequeño, en la cortical', say: 'La radiografía muestra una lesión pequeña y radiolúcida, el nidus, rodeada de un halo de esclerosis, típicamente en la cortical.' },
          { t: 'AINE; cirugía o ablación', d: 'Si el dolor no cede o es grande', say: 'Se trata con antiinflamatorios. Si no responde o la lesión es grande, se plantea cirugía o ablación por radiofrecuencia.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tumores malignos',
      title: 'Edad más lugar: el diagnóstico',
      nodes: [
        { id: 'r', col: 0, row: 1, k: 'start', t: 'Lesión de aspecto maligno', s: 'Cortical rota, reacción perióstica' },
        { id: 'o', col: 2, row: 0, k: 'alert', t: 'Osteosarcoma', s: 'Adolescente · metáfisis · rodilla' },
        { id: 'e', col: 2, row: 1, k: 'risk', t: 'Sarcoma de Ewing', s: 'Niño · diáfisis o pelvis' },
        { id: 'g', col: 2, row: 2, k: 'mech', t: 'Células gigantes', s: 'Adulto 40 a 50 · epífisis' },
        { id: 't', col: 4, row: 1, k: 'refer', t: 'Biopsia y derivación', s: 'Cirugía más quimioterapia' },
      ],
      edges: [
        { from: 'r', to: 'o', label: '15 a 20 años' },
        { from: 'r', to: 'e', label: 'niño' },
        { from: 'r', to: 'g', label: 'adulto' },
        { from: 'o', to: 't' },
        { from: 'e', to: 't' },
        { from: 'g', to: 't' },
      ],
      steps: [
        { show: ['r'], note: 'Primero: ¿se ve maligna?',
          say: 'Primero decides si la lesión se ve maligna: cortical rota, partes blandas invadidas y reacción perióstica compleja. Si es así, el diagnóstico sale de la edad y de la localización.' },
        { show: ['o'], note: 'Adolescente y metáfisis: osteosarcoma',
          say: 'Un adolescente, de quince a veinte años, con una lesión en la metáfisis de un hueso largo, cerca de la rodilla: osteosarcoma.' },
        { show: ['e'], note: 'Niño y diáfisis: Ewing',
          say: 'Un niño o adolescente con una lesión en la diáfisis de un hueso largo, o en la pelvis: sarcoma de Ewing. La diáfisis es lo que lo separa del osteosarcoma.' },
        { show: ['g', 't'], note: 'Adulto en la epífisis: células gigantes',
          say: 'Un adulto de cuarenta a cincuenta años con una lesión alrededor de la rodilla, en la epífisis y la metáfisis: tumor de células gigantes. En todos los casos, la conducta es biopsia y derivación al especialista.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tumores malignos',
      title: 'Osteosarcoma',
      cards: [
        { title: 'Quién y dónde', tag: 'El maligno más común', kind: 'key', items: [
          { t: 'Tumor óseo maligno primario más común', d: 'Adolescentes y mayores de 65 años', say: 'El osteosarcoma es el tumor óseo maligno primario más frecuente. Tiene dos picos: adolescentes y adultos jóvenes de quince a veinte años, y adultos mayores de sesenta y cinco.' },
          { t: 'Metáfisis, cerca de la rodilla', d: 'Fémur distal y tibia proximal', say: 'Se ubica en la metáfisis de los huesos largos, sobre todo alrededor de la rodilla.' },
        ] },
        { title: 'Radiografía y tratamiento', tag: 'Agresivo', kind: 'alert', items: [
          { t: 'Lesión heterogénea, sol naciente', d: 'Cortical rota y partes blandas invadidas', say: 'La radiografía es francamente maligna: heterogénea, con cortical interrumpida y reacción en sol naciente. Ojo que el examen muestra zonas que se destruyen y otras que se densifican.' },
          { t: 'Cirugía radical más quimioterapia', d: 'A veces con conservación de la extremidad', say: 'Se trata con cirugía radical, que a veces conserva la extremidad, más quimioterapia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tumores malignos',
      title: 'Ewing y células gigantes',
      cards: [
        { title: 'Sarcoma de Ewing', tag: 'Niño y diáfisis', kind: 'alert', items: [
          { t: 'Niños y adolescentes', d: 'Diáfisis de huesos largos o pelvis', say: 'El sarcoma de Ewing es de niños y adolescentes. Su sitio clásico es la diáfisis de los huesos largos o la pelvis.' },
          { t: 'Telas de cebolla', d: 'Reacción perióstica en capas', say: 'En la radiografía busca las telas de cebolla.' },
          { t: 'Biopsia: células azules redondas', d: 'Parece un linfoma', say: 'La biopsia muestra células pequeñas, redondas y azules, parecidas a un linfoma.' },
          { t: 'Quimioterapia, cirugía y radioterapia', d: 'Pronóstico reservado, mejora hoy', say: 'Se trata con quimioterapia, cirugía y a veces radioterapia. El pronóstico es reservado, pero ha mejorado con los tratamientos actuales.' },
        ] },
        { title: 'Tumor de células gigantes', tag: 'Adulto, rodilla', kind: 'key', items: [
          { t: 'Adultos de 40 a 50 años', d: 'Fémur distal o tibia proximal', say: 'El tumor de células gigantes aparece en adultos de cuarenta a cincuenta años, en la epífisis y la metáfisis alrededor de la rodilla.' },
          { t: 'Agresivo local, sin metástasis', d: 'Rompe cortical e invade partes blandas', say: 'Es localmente muy agresivo, rompe la cortical e invade partes blandas, pero generalmente no da metástasis. Biológicamente es benigno y radiológicamente parece maligno.' },
          { t: 'Legrado amplio', d: 'Curetaje quirúrgico', say: 'Se trata con cirugía: un legrado o curetaje amplio.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Tumores óseos en la radiografía',
      images: [
        { src: 'biblioteca/18_traumatologia/trauma-13/01_osteosarcoma-esclerotico-femur-distal__bailey-love_p556.jpg', label: 'Osteosarcoma esclerótico del fémur distal', credit: 'Bailey & Love 27.ª ed., Fig. 37.4' },
        { src: 'biblioteca/18_traumatologia/trauma-13/02_osteocondroma-perone__bailey-love_p560.jpg', label: 'Osteocondroma del peroné proximal', credit: 'Bailey & Love 27.ª ed., Fig. 37.14' },
        { src: 'biblioteca/18_traumatologia/trauma-13/03_osteoma-osteoide-tibia__bailey-love_p559.jpg', label: 'Osteoma osteoide de la diáfisis tibial', credit: 'Bailey & Love 27.ª ed., Fig. 37.11' },
        { src: 'biblioteca/18_traumatologia/trauma-13/04_tumor-celulas-gigantes-radio__bailey-love_p563.jpg', label: 'Tumor de células gigantes del radio distal', credit: 'Bailey & Love 27.ª ed., Fig. 37.22' },
        { src: 'biblioteca/18_traumatologia/trauma-13/05_sarcoma-de-ewing-perone__bailey-love_p558.jpg', label: 'Sarcoma de Ewing del peroné proximal: reacción perióstica en capas', credit: 'Bailey & Love 27.ª ed., Fig. 37.8' },
      ],
      steps: [
        { note: 'Osteosarcoma: hueso denso en la metáfisis',
          say: 'Este es un osteosarcoma esclerótico en el fémur distal de un niño. Fíjate en que está en la metáfisis, junto a la rodilla, y en que el hueso se ve denso y mal delimitado.' },
        { note: 'Osteocondroma: crece hacia afuera',
          say: 'Aquí un osteocondroma en el peroné proximal. Es una proyección ósea que sale hacia afuera de la metáfisis, con bordes nítidos. Es benigno.' },
        { note: 'Osteoma osteoide en la diáfisis',
          say: 'Este osteoma osteoide en la tibia muestra la cortical engrosada por hueso reactivo alrededor de una lesión pequeña. Es el joven con dolor nocturno que cede con aspirina.' },
        { note: 'Células gigantes: lítico, cerca de la articulación',
          say: 'Y un tumor de células gigantes en el radio distal, una lesión lítica que llega hasta el extremo del hueso, en un adulto. Cerca de la articulación es lo que se pregunta.' },
        { note: 'Ewing: reacción perióstica en capas',
          say: 'Por último, un sarcoma de Ewing en el peroné de un niño. Mira el periostio levantado en capas finas a lo largo del hueso: es la imagen en telas de cebolla.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la lesión ósea en la radiografía al diagnóstico más probable.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Tumor óseo: edad, lugar, imagen',
      head: ['Dato', 'Diagnóstico', 'Conducta'],
      rows: [
        { cells: ['Joven, bulto duro indoloro', 'Osteocondroma', 'Observar'],
          say: 'Joven con un bulto duro e indoloro, que crece hacia afuera de la metáfisis: osteocondroma, se observa.' },
        { cells: ['Dolor nocturno que cede con AINE', 'Osteoma osteoide', 'AINE; ablación si no cede'],
          say: 'Dolor nocturno que cede con aspirina o antiinflamatorios: osteoma osteoide.' },
        { cells: ['Adolescente, metáfisis, sol naciente', 'Osteosarcoma', 'Cirugía y quimioterapia'],
          say: 'Adolescente, metáfisis cerca de la rodilla, sol naciente: osteosarcoma.' },
        { cells: ['Niño, diáfisis, telas de cebolla', 'Sarcoma de Ewing', 'Quimioterapia, cirugía'],
          say: 'Niño con una lesión en la diáfisis y telas de cebolla: sarcoma de Ewing.' },
        { cells: ['Adulto 40 a 50, rodilla', 'Células gigantes', 'Legrado amplio'],
          say: 'Adulto de cuarenta a cincuenta años con una lesión lítica alrededor de la rodilla: tumor de células gigantes.' },
        { cells: ['Esguince que no mejora, con reacción perióstica', 'Tumor maligno', 'Derivar'],
          say: 'La trampa más repetida: un golpe en la rodilla, un esguince que no mejora y una radiografía con reacción perióstica. El golpe solo lo hizo consultar, y el diagnóstico es un tumor maligno.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un niño de 10 años consulta por dolor en el brazo. La radiografía muestra una lesión en la diáfisis del húmero, de aspecto heterogéneo, con rotura de la cortical y extensión a partes blandas.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Osteosarcoma' },
        { letter: 'B', text: 'Sarcoma de Ewing' },
        { letter: 'C', text: 'Tumor de células gigantes' },
        { letter: 'D', text: 'Osteocondroma' },
        { letter: 'E', text: 'Enfermedad de Paget' },
      ],
      correct: 'B',
      explanation: 'Un niño con una lesión maligna en la diáfisis es un sarcoma de Ewing hasta que se demuestre lo contrario. El osteosarcoma prefiere la metáfisis, el tumor de células gigantes es de adultos, el osteocondroma es benigno y el Paget es de adultos mayores.',
      say: {
        stem: 'Un niño de diez años con dolor en el brazo. La radiografía muestra una lesión en la diáfisis del húmero, heterogénea, con la cortical rota y extensión a partes blandas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: osteosarcoma; sarcoma de Ewing; tumor de células gigantes; osteocondroma; o enfermedad de Paget. Piénsalo.',
        answer: 'Es la B. Niño más diáfisis más aspecto maligno es sarcoma de Ewing. La A es la trampa: el osteosarcoma es también de jóvenes, pero prefiere la metáfisis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 9',
      stem: 'Un adolescente de 16 años presenta dolor en la rodilla derecha, luego de haberse golpeado. Al examen físico se palpa aumento de volumen de consistencia ósea, por lo que se solicita una radiografía, que muestra una lesión ósea herterogénea, ubicada en el extremo distal del fémur, con disrupción de la cortical y zonas líticas, con otras de aumento de la densidad. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Osteocondroma' },
        { letter: 'B', text: 'Tumor de células gigantes' },
        { letter: 'C', text: 'Osteosarcoma' },
        { letter: 'D', text: 'Displasia ósea fibrosa' },
        { letter: 'E', text: 'Quiste óseo' },
      ],
      correct: 'C',
      explanation: 'Tumor óseo de aspecto maligno. Por la ubicación y la edad es un osteosarcoma, que aparece en adolescentes y adultos mayores. El sarcoma de Ewing es diafisiario.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Un adolescente de dieciséis años con dolor en la rodilla derecha tras un golpe, con aumento de volumen duro. La radiografía muestra una lesión heterogénea en el extremo distal del fémur, con la cortical rota y zonas líticas junto a zonas más densas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: osteocondroma; tumor de células gigantes; osteosarcoma; displasia ósea fibrosa; o quiste óseo. Piénsalo.',
        answer: 'Es la C. Adolescente, extremo distal del fémur y una lesión mezclada, con zonas líticas y densas y la cortical rota: osteosarcoma. La B no calza, porque el tumor de células gigantes es de adultos, y la A es benigna, con bordes nítidos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 94',
      stem: 'Un paciente de 19 años, sin antecedentes, hace un mes sufre golpe contuso en rodilla izquierda mientras jugaba futbol, tras lo cual ha permanecido con dolor el cual ha aumentado en las últimas semana, asociado a aumento de volumen duro. Se solicita radiografía de rodilla que muestra lesión de gran tamaño en metáfisis y diáfisis de fémur, asociado a compromiso cortical. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Sarcoma de Ewing' },
        { letter: 'B', text: 'Osteosarcoma' },
        { letter: 'C', text: 'Osteoma osteoide' },
        { letter: 'D', text: 'Sarcoma de partes blandas' },
        { letter: 'E', text: 'Tumor de células gigantes' },
      ],
      correct: 'B',
      explanation: 'Por la edad es un osteosarcoma. El tumor de células gigantes es de los 40 a los 55 años. El sarcoma de Ewing es de localización diafisiaria, no metafisiaria.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Un paciente de diecinueve años, con un golpe en la rodilla jugando fútbol hace un mes, y dolor que aumenta, con un aumento de volumen duro. La radiografía muestra una lesión grande en la metáfisis y la diáfisis del fémur, con compromiso de la cortical.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: sarcoma de Ewing; osteosarcoma; osteoma osteoide; sarcoma de partes blandas; o tumor de células gigantes. Piénsalo.',
        answer: 'Es la B. Diecinueve años y una lesión que parte en la metáfisis: osteosarcoma. La A es la trampa, porque también es de jóvenes, pero el Ewing es diafisiario. Y la E no calza porque es de adultos de cuarenta años o más.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 39',
      stem: 'Una mujer de 18 años presenta traumatismo en la rodilla derecha, siendo diagnosticada de esguince de rodilla, el que se maneja con reposo y antiinflamatorios. Evoluciona con dolor persistente, por lo que consulta nuevamente. Se solicita una radiografía de rodilla que muestra reacción perióstica y compromiso de partes blandas. El diagnóstico más probable es:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Osteomielitis del fémur distal' },
        { letter: 'B', text: 'Osteosarcoma osteogénico' },
        { letter: 'C', text: 'Fractura del fémur distal, con callo óseo' },
        { letter: 'D', text: 'Osteocondroma' },
        { letter: 'E', text: 'Hematoma calcificado' },
      ],
      correct: 'B',
      explanation: 'La reacción perióstica y el compromiso de partes blandas son clásicos de un tumor maligno, y por la edad lo más probable es un osteosarcoma. En el EUNACOM es frecuente que se dé el antecedente de un trauma aunque no tenga relación con el tumor, porque el golpe es lo que hace que el paciente se palpe la lesión.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Una mujer de dieciocho años con un golpe en la rodilla, tratada como esguince con reposo y antiinflamatorios, que sigue con dolor. La radiografía muestra reacción perióstica y compromiso de partes blandas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: osteomielitis del fémur distal; osteosarcoma; fractura con callo óseo; osteocondroma; o hematoma calcificado. Piénsalo.',
        answer: 'Es la B. Un dolor que persiste después de un esguince, con reacción perióstica y partes blandas comprometidas, es un tumor maligno, y a los dieciocho años es un osteosarcoma. El golpe es solo el motivo de consulta. La C es la tentación, pero un callo no invade partes blandas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 90',
      stem: 'Un adolescente de 17 años presenta un golpe en la rodilla izquierda, evolucionando con dolor en la cara anterior de la rodilla, que es manejado con analgésicos, sin embargo, no responde adecuadamente, por lo que se solicita una radiografía de rodilla y pierna, que muestra discontinuidad de la cortical de la diáfisis de la tibia, calcificación de partes blandas, reacción perióstica triangular de 2 cm y algunas zonas osteoblásticas con otras osteolíticas. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Fractura en maduración' },
        { letter: 'B', text: 'Hematoma calcificado' },
        { letter: 'C', text: 'Osteomielitis aguda' },
        { letter: 'D', text: 'Tumor óseo maligno' },
        { letter: 'E', text: 'Condromalacia' },
      ],
      correct: 'D',
      explanation: 'Los tumores óseos se diagnostican principalmente con la radiografía. Cortical interrumpida, calcificación de partes blandas, reacción perióstica triangular y zonas osteoblásticas junto a otras osteolíticas indican un tumor óseo maligno.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veintidós. Un adolescente de diecisiete años con un golpe en la rodilla y dolor que no responde a los analgésicos. La radiografía muestra la cortical de la diáfisis de la tibia interrumpida, calcificación de partes blandas, una reacción perióstica triangular y zonas densas mezcladas con zonas líticas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: fractura en maduración; hematoma calcificado; osteomielitis aguda; tumor óseo maligno; o condromalacia. Piénsalo.',
        answer: 'Es la D. Cortical rota, partes blandas calcificadas y reacción perióstica triangular son un tumor óseo maligno. La B es la trampa porque hay un golpe previo, pero un hematoma no destruye la cortical ni mezcla zonas líticas y densas.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: tumores óseos',
      cards: [
        { title: 'Benignos', tag: 'Bordes nítidos', kind: 'key', items: [
          { t: 'Osteocondroma: observar', d: 'Cirugía si comprime o duele por roce', say: 'Cerremos con las reglas de oro. El osteocondroma es el benigno más frecuente y se observa; solo se opera si comprime o duele por roce.' },
          { t: 'Osteoma osteoide: dolor nocturno', d: 'Cede con aspirina o AINE', say: 'El osteoma osteoide es dolor nocturno de un joven que cede con aspirina o antiinflamatorios.' },
        ] },
        { title: 'Malignos', tag: 'Edad más lugar', kind: 'alert', items: [
          { t: 'Metáfisis y adolescente: osteosarcoma', d: 'Diáfisis y niño: Ewing', say: 'En los malignos, la edad y el lugar deciden. Adolescente y metáfisis, osteosarcoma. Niño y diáfisis, con telas de cebolla, sarcoma de Ewing.' },
          { t: 'Adulto 40 a 50: células gigantes', d: 'Alrededor de la rodilla', say: 'Un adulto de cuarenta a cincuenta años con una lesión alrededor de la rodilla es un tumor de células gigantes.' },
          { t: 'Esguince que no mejora: radiografía', d: 'Reacción perióstica: derivar', say: 'Si te llevas una sola idea de hoy: un dolor que persiste después de un golpe y una radiografía con reacción perióstica es un tumor maligno hasta que se demuestre lo contrario, y se deriva. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Lesión ósea: benigna o maligna, y cuál',
    root: N('start', 'Lesión ósea en la radiografía', 'Mira cortical, bordes y periostio',
      'Tienes una lesión ósea en una radiografía. Lo primero es decidir si se ve benigna o maligna.',
      ['Bordes nítidos, cortical respetada', N('ok', 'Tumor benigno', 'Edad y síntoma',
        'Si los bordes son nítidos, la cortical está respetada y no hay reacción perióstica, es probablemente benigno. Ahora miras el síntoma.',
        ['Bulto duro indoloro, joven', N('ok', 'Osteocondroma', 'Observar',
          'Un bulto duro indoloro que crece hacia afuera de la metáfisis es un osteocondroma. Se observa, y se opera solo si comprime o duele por roce.')],
        ['Dolor nocturno que cede con aspirina', N('do', 'Osteoma osteoide', 'AINE o ablación',
          'Dolor nocturno que cede con aspirina, con un nidus rodeado de esclerosis: osteoma osteoide. Se trata con antiinflamatorios y, si no responde, con cirugía o ablación por radiofrecuencia.')],
      )],
      ['Cortical rota, reacción perióstica', N('alert', 'Aspecto maligno', 'Edad y lugar',
        'Si la cortical está rota y hay reacción perióstica compleja, se ve maligno. Aquí deciden la edad y el lugar del hueso.',
        ['Adolescente, metáfisis', N('refer', 'Osteosarcoma', 'Cirugía y quimioterapia',
          'Un adolescente con una lesión en la metáfisis, cerca de la rodilla, es un osteosarcoma. Biopsia, y cirugía radical más quimioterapia.')],
        ['Niño, diáfisis, telas de cebolla', N('refer', 'Sarcoma de Ewing', 'Quimioterapia y cirugía',
          'Un niño con una lesión diafisiaria y telas de cebolla es un sarcoma de Ewing. Se trata con quimioterapia, cirugía y a veces radioterapia.')],
        ['Adulto 40 a 50, rodilla', N('refer', 'Tumor de células gigantes', 'Legrado amplio',
          'Un adulto de cuarenta a cincuenta años con una lesión alrededor de la rodilla es un tumor de células gigantes. Localmente agresivo, sin metástasis, con legrado amplio.')],
      )],
    ),
  },
};
