// Clase 12.8 (Traumatología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_traumatologia.cjs (trauma-08). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El libro deja vacía la sección de ligamentos colaterales: se enseña solo lo que sale del libro (bostezo en varo forzado del colateral lateral)
// y del banco real (dolor al valgo sin bostezo = colateral medial). Lachman y hemartros salen de la pregunta real, no del libro.
// Se sigue el texto principal para el LCA ("quirúrgico, habitual en jóvenes o deportistas"), no la explicación de la pregunta del libro
// ("siempre se opera"). El meniscal y el patelofemoral no tienen pregunta real: se usa un caso del libro rotulado "Caso representativo".
// Las tablas plantilla del libro (Parámetro clínico / Criterio quirúrgico) no corresponden al tema y no se usan.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'trauma-08',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Rodilla: meniscos, ligamentos cruzados y colaterales, y dolor patelofemoral',
      say: 'Bienvenido. Hoy vemos la rodilla. En el examen te dan un mecanismo y un síntoma, y tienes que decir qué se lesionó y con qué examen se confirma. Si el síntoma es bloqueo, piensas en el menisco. Si es inestabilidad, en un ligamento. Y si es dolor anterior al subir escaleras, en la rótula.',
    },

    {
      type: 'points',
      kicker: 'Concepto',
      title: 'La rodilla y qué ve la radiografía',
      cards: [
        { title: 'Lo común a todas', tag: 'Clínica base', kind: 'key', items: [
          { t: 'Dolor de rodilla e impotencia', d: 'Todas las lesiones los producen',
            say: 'Todas las lesiones de la rodilla, sean meniscales o ligamentosas, comparten dos cosas: dolor de rodilla e impotencia funcional. Lo que las distingue es el síntoma asociado.' },
          { t: 'Cada síntoma, una estructura', d: 'Bloqueo, inestabilidad, dolor anterior',
            say: 'El bloqueo orienta al menisco, la inestabilidad a los ligamentos, y el dolor anterior con la actividad a la articulación patelofemoral.' },
        ] },
        { title: 'Qué examen pedir', tag: 'Imagen', kind: 'alert', items: [
          { t: 'No se ven en radiografía', d: 'Meniscos y ligamentos: tejido blando y fibrocartílago',
            say: 'Los meniscos y los ligamentos son fibrocartílago y tejido conectivo, así que no se ven en la radiografía convencional. Ese es el error típico: pedir radiografía para confirmar una lesión meniscal.' },
          { t: 'Resonancia magnética: examen de elección', d: 'Estándar de oro para partes blandas',
            say: 'El estándar de oro para diagnosticar las lesiones de partes blandas de la rodilla es la resonancia magnética nuclear.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Meniscos',
      title: 'Lesión meniscal',
      cards: [
        { title: 'Mecanismo', tag: 'Torsión', kind: 'key', items: [
          { t: 'Giro brusco con el pie fijo', d: 'Los meniscos amortiguan y estabilizan',
            say: 'Los meniscos, medial y lateral, amortiguan y estabilizan la rodilla. Se lesionan por un mecanismo de torsión brusca: un giro con el pie fijo en el suelo.' },
        ] },
        { title: 'Clínica específica', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Bloqueo articular', d: 'La rodilla se queda trabada al caminar',
            say: 'El síntoma clave es el bloqueo: el paciente siente que la rodilla se queda atascada o trabada al caminar. Es lo que separa un menisco de un ligamento.' },
          { t: 'Dolor en la interlínea', d: 'A la palpación entre fémur y tibia',
            say: 'Además hay dolor a la palpación directa de la interlínea articular, el espacio entre el fémur y la tibia, y a veces sensación de inestabilidad.' },
          { t: 'Maniobra de Apley', d: 'El talón apunta al menisco afectado',
            say: 'En la maniobra de Apley, si duele al rotar hacia afuera, el lesionado es el menisco interno. El diagnóstico se confirma con resonancia magnética, no con radiografía.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Ligamentos cruzados',
      title: 'Cruzado anterior y posterior',
      head: ['Característica', 'LCA', 'LCP'],
      rows: [
        { cells: ['Mecanismo', 'Hiperextensión o frenada brusca', 'Hiperflexión o golpe en tablero'],
          say: 'Los ligamentos cruzados evitan que la tibia se vaya hacia adelante o hacia atrás. El cruzado anterior se lesiona en hiperextensión o en una desaceleración brusca. El posterior, en hiperflexión o por un golpe directo en la cara anterior de la tibia, el clásico golpe de tablero en un accidente.' },
        { cells: ['Signo clínico', 'Cajón anterior', 'Cajón posterior'],
          say: 'El signo se nombra por la dirección: cajón anterior, la tibia se desplaza hacia adelante, es del cruzado anterior. Cajón posterior, la tibia se va hacia atrás, es del posterior.' },
        { cells: ['Frecuencia', 'Mucho más frecuente', 'Menos frecuente'],
          say: 'El cruzado anterior es mucho más frecuente que el posterior.' },
        { cells: ['Tratamiento', 'Quirúrgico en jóvenes y activos', 'Conservador al inicio'],
          say: 'En el tratamiento, el cruzado anterior se opera con reconstrucción artroscópica en la mayoría de los jóvenes y deportistas, porque queda con inestabilidad funcional. El posterior se maneja de forma conservadora al inicio, y se opera en deportistas.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cruzado anterior',
      title: 'Del giro a la cirugía',
      nodes: [
        { id: 'mec', col: 0, row: 1, k: 'cause', t: 'Giro o hiperextensión', s: 'Futbolista, esquiador' },
        { id: 'lca', col: 1, row: 1, k: 'mech', t: 'Rotura del LCA', s: 'La tibia se adelanta' },
        { id: 'cl', col: 2, row: 0, k: 'effect', t: 'Hemartros e inestabilidad', s: 'La rodilla se va' },
        { id: 'ex', col: 2, row: 2, k: 'q', t: 'Cajón anterior y Lachman', s: 'Confirma con resonancia' },
        { id: 'tx', col: 3, row: 1, k: 'good', t: 'Reconstrucción artroscópica', s: 'Jóvenes y activos' },
      ],
      edges: [
        { from: 'mec', to: 'lca' },
        { from: 'lca', to: 'cl' },
        { from: 'lca', to: 'ex' },
        { from: 'ex', to: 'tx' },
      ],
      steps: [
        { show: ['mec', 'lca'], note: 'Mecanismo típico: giro con la rodilla semiflexionada',
          say: 'Piensa en un futbolista que da un giro brusco con la rodilla semiflexionada, o en una hiperextensión. Se rompe el cruzado anterior y la tibia queda libre para irse hacia adelante.' },
        { show: ['cl'], note: 'El síntoma cardinal es la inestabilidad',
          say: 'El síntoma cardinal es la inestabilidad: el paciente dice siento que la rodilla se me va. Y en el trauma agudo suele haber un edema rápido de la articulación, un hemartros.' },
        { show: ['ex', 'tx'], note: 'Examen físico y resolución',
          say: 'Al examen, el cajón anterior y la prueba de Lachman son positivos. Se confirma con resonancia y, en el joven activo, se resuelve con reconstrucción artroscópica. Por eso, un cajón anterior positivo no se trata con reposo y antiinflamatorios como tratamiento definitivo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Colaterales',
      title: 'Ligamentos colaterales',
      cards: [
        { title: 'Cómo se examinan', tag: 'Estrés lateral', kind: 'key', items: [
          { t: 'Valgo forzado: colateral medial', d: 'Dolor y, si hay rotura, bostezo',
            say: 'Los colaterales se prueban forzando la rodilla hacia los lados. Con un estrés en valgo examinas el colateral medial: si duele, hay esguince; si además la articulación se abre, hay un bostezo, que indica laxitud.' },
          { t: 'Varo forzado: colateral lateral', d: 'Bostezo hacia lateral',
            say: 'Con un estrés en varo examinas el colateral lateral. Su rotura da bostezo hacia lateral. No da cajón anterior: eso es del cruzado.' },
        ] },
        { title: 'Qué se pregunta', tag: 'Diferenciar', kind: 'alert', items: [
          { t: 'Dolor al valgo, sin bostezo', d: 'Esguince colateral medial leve',
            say: 'Un caso típico: torsión de rodilla jugando fútbol, dolor al estrés en valgo, pero sin bostezo. Es un esguince del colateral medial, sin rotura completa.' },
          { t: 'Estabilidad en extensión completa', d: 'Si se abre en extensión, hay más daño',
            say: 'El libro de Bailey agrega algo útil: el estrés en valgo se hace con la rodilla en treinta grados de flexión. Si se abre en extensión completa, sospecha una lesión de estructuras posteriores, como la cápsula o el cruzado posterior.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Examen y resonancia de rodilla',
      images: [
        { src: 'biblioteca/18_traumatologia/trauma-08/01_ligamentos-colaterales-rodilla__bailey-love_p476.jpg', label: 'Prueba de estrés de los ligamentos colaterales de la rodilla', credit: 'Bailey & Love 27.ª ed., Fig. 31.30' },
        { src: 'biblioteca/18_traumatologia/trauma-08/02_prueba-cajon-rodilla__bailey-love_p477.jpg', label: 'Prueba del cajón: rodilla flexionada y tibia sujeta con la mano', credit: 'Bailey & Love 27.ª ed., Fig. 31.32' },
        { src: 'biblioteca/18_traumatologia/trauma-08/03_rm-rodilla-lca-lcm-lcl__bailey-love_p487.jpg', label: 'Resonancia de rodilla con rotura del LCA, del colateral medial y del lateral', credit: 'Bailey & Love 27.ª ed., Fig. 32.8' },
      ],
      steps: [
        { note: 'Colaterales: estrés hacia los lados',
          say: 'Fíjate en la posición: el examinador sostiene el tobillo con una mano y con la otra empuja la rodilla hacia un lado, para ver si la articulación se abre. Así se examinan el colateral medial y el lateral. Se compara siempre con la otra rodilla.' },
        { note: 'Cajón: la tibia se mueve sobre el fémur',
          say: 'Esta es la prueba del cajón. Con la rodilla flexionada, el examinador sujeta la parte alta de la tibia y la desplaza hacia adelante o hacia atrás. Si se va hacia adelante, es el cruzado anterior; si va hacia atrás, el posterior.' },
        { note: 'Resonancia: lo que la radiografía no ve',
          say: 'Y esta es la resonancia de un esquiador con una lesión grave, con roturas del cruzado anterior y de los dos colaterales. Es el examen que sí muestra ligamentos y meniscos, justo lo que la radiografía no puede hacer.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Patelofemoral',
      title: 'Disfunción patelofemoral',
      cards: [
        { title: 'Cuadro clínico', tag: 'Jóvenes activos', kind: 'key', items: [
          { t: 'Dolor anterior, detrás de la rótula', d: 'Sin bloqueo articular',
            say: 'Es una causa muy frecuente de consulta en gente joven que hace deporte. Da dolor anterior de rodilla, localizado detrás o alrededor de la rótula.' },
          { t: 'Escaleras, cerros y estar sentado', d: 'Desencadenantes típicos',
            say: 'Se desencadena al subir o bajar escaleras, al caminar por cerros, en el trekking, o al estar sentado mucho rato. A veces el paciente siente que la rótula se corre.' },
        ] },
        { title: 'Diagnóstico y tratamiento', tag: 'Clínico', kind: 'alert', items: [
          { t: 'Diagnóstico eminentemente clínico', d: 'Sin resonancia de entrada',
            say: 'Ojo con esto: el diagnóstico es clínico. No necesitas resonancia de entrada, a menos que sospeches una lesión meniscal o ligamentaria asociada.' },
          { t: 'Fortalecer el cuádriceps', d: 'Sobre todo el vasto medial',
            say: 'El tratamiento tiene un pilar: fortalecer el cuádriceps, especialmente el vasto medial, para centrar la rótula. En la fase aguda se agrega reposo relativo y antiinflamatorios.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'No siempre es un esguince',
      title: 'La rodilla que engaña',
      cards: [
        { title: 'Trauma banal, lesión grave', tag: 'Banco real', kind: 'alert', items: [
          { t: 'Esguince que no mejora', d: 'Dolor creciente: pedir radiografía',
            say: 'Un adolescente con una torsión de rodilla, diagnosticado de esguince, que no mejora e incluso empeora con el tiempo, con dolor creciente que no cede con analgesia. Pide radiografía: si ves reacción perióstica y aspecto heterogéneo, piensa en un tumor óseo maligno, un osteosarcoma.' },
          { t: 'Antecedente de golpe', d: 'El examen lo pone aunque no tenga relación',
            say: 'El examen suele dar el antecedente de un golpe o torsión en estos casos, aunque el trauma no tenga relación con el tumor. Lo veremos en la clase de tumores óseos.' },
        ] },
        { title: 'Otras trampas', tag: 'Localización', kind: 'key', items: [
          { t: 'Rodilla sin causa: examina la cadera', d: 'La patología de cadera da dolor de rodilla',
            say: 'Si un adulto tiene dolor de rodilla y la rodilla está normal, examina la cadera: la patología de cadera puede dar dolor referido a la rodilla.' },
          { t: 'Depresión sobre la rótula', d: 'Rotura del tendón del cuádriceps',
            say: 'Y si tras una caída hay una depresión por encima de la rótula, con radiografía sin fractura, es una rotura del tendón del cuádriceps, que está sobre la rótula. El tendón rotuliano está debajo, y se inserta en la tuberosidad tibial.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Rodilla: síntoma, estructura, examen',
      head: ['Dato', 'Estructura', 'Examen o conducta'],
      rows: [
        { cells: ['Bloqueo articular', 'Menisco', 'Resonancia magnética'],
          say: 'Bloqueo articular: menisco, y se confirma con resonancia. No con radiografía.' },
        { cells: ['Inestabilidad y cajón anterior', 'Cruzado anterior', 'Resonancia; cirugía en joven activo'],
          say: 'Inestabilidad con cajón anterior positivo: cruzado anterior, confirmación con resonancia y cirugía artroscópica en el joven activo.' },
        { cells: ['Golpe de tablero, cajón posterior', 'Cruzado posterior', 'Conservador al inicio'],
          say: 'Golpe en el tablero y cajón posterior: cruzado posterior, de manejo conservador al inicio.' },
        { cells: ['Dolor anterior al subir escaleras', 'Patelofemoral', 'Clínico; fortalecer cuádriceps'],
          say: 'Dolor anterior al subir escaleras o caminar por cerros: disfunción patelofemoral, diagnóstico clínico y fortalecimiento del cuádriceps. No pides resonancia de entrada.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del síntoma de la rodilla a la estructura, el examen y el tratamiento.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Una mujer de 23 años, aficionada al trekking, consulta por dolor anterior de rodilla de varios meses, detrás de la rótula, que empeora al bajar escaleras y al estar sentada mucho tiempo. No refiere bloqueo ni episodios de la rodilla que se vaya. El examen no muestra bostezo ni cajón.',
      question: '¿Cuál es el diagnóstico y el manejo más adecuados?',
      options: [
        { letter: 'A', text: 'Disfunción patelofemoral; fortalecer el cuádriceps y antiinflamatorios' },
        { letter: 'B', text: 'Lesión meniscal; resonancia magnética urgente' },
        { letter: 'C', text: 'Rotura del ligamento cruzado anterior; cirugía artroscópica' },
        { letter: 'D', text: 'Esguince del colateral medial; inmovilizador de rodilla' },
        { letter: 'E', text: 'Disfunción patelofemoral; resonancia magnética de entrada' },
      ],
      correct: 'A',
      explanation: 'El dolor anterior retropatelar con escaleras y sedestación, sin bloqueo ni inestabilidad, es una disfunción patelofemoral. Su diagnóstico es clínico y su pilar de tratamiento es el fortalecimiento del cuádriceps, con reposo relativo y AINE en la fase aguda. No requiere resonancia de entrada.',
      say: {
        stem: 'Una mujer de veintitrés años que hace trekking, con dolor anterior de rodilla de varios meses, detrás de la rótula, que empeora al bajar escaleras y al estar sentada mucho rato. No tiene bloqueo ni sensación de que la rodilla se vaya, y el examen no muestra bostezo ni cajón.',
        question: '¿Cuál es el diagnóstico y el manejo más adecuados?',
        options: 'Las opciones: disfunción patelofemoral con fortalecimiento del cuádriceps; lesión meniscal con resonancia urgente; rotura del cruzado anterior con cirugía; esguince del colateral medial con inmovilizador; o disfunción patelofemoral con resonancia de entrada. Piénsalo.',
        answer: 'Es la A. Dolor anterior con escaleras y estar sentado, sin bloqueo ni inestabilidad, es disfunción patelofemoral. El diagnóstico es clínico y el tratamiento es fortalecer el cuádriceps. La E es la trampa: el diagnóstico es correcto, pero no pides resonancia de entrada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 162',
      stem: 'Futbolista de 22 años que sufre giro brusco con la rodilla semiflexionada. Presenta edema articular rápido (hemartros), signo del cajón anterior positivo y prueba de Lachman positiva.',
      question: '¿Qué estructura se lesionó?',
      options: [
        { letter: 'A', text: 'Ligamento cruzado anterior (LCA)' },
        { letter: 'B', text: 'Ligamento cruzado posterior (LCP)' },
        { letter: 'C', text: 'Ligamento colateral medial (LCM)' },
        { letter: 'D', text: 'Menisco medial' },
        { letter: 'E', text: 'Ligamento patelofemoral' },
      ],
      correct: 'A',
      explanation: 'Cajón anterior (+) + Lachman (+) + hemartros post trauma en valgus/rotación = ruptura del ligamento cruzado anterior (LCA). Es la lesión ligamentaria más frecuente en deportistas jóvenes.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un futbolista de veintidós años con un giro brusco con la rodilla semiflexionada. Tiene edema articular rápido, un hemartros, con signo del cajón anterior positivo y prueba de Lachman positiva.',
        question: '¿Qué estructura se lesionó?',
        options: 'Las opciones: ligamento cruzado anterior; cruzado posterior; colateral medial; menisco medial; o ligamento patelofemoral. Piénsalo.',
        answer: 'Es la A. Giro en la rodilla, hemartros, cajón anterior y Lachman positivos son una rotura del cruzado anterior, la lesión ligamentaria más frecuente en deportistas jóvenes. El menisco daría bloqueo, y el cruzado posterior daría cajón posterior.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 154',
      stem: 'Un paciente de 15 años sufre una torsión de rodilla derecha, siendo diagnosticado de un esguince, por lo que se indica inmovilizador de rodilla. Sin embargo, no mejora luego de 10 días, sino que, por el contrario, el dolor ha ido en aumento y no responde bien a la analgesia con naproxeno y ketorolaco. Al examen físico, presenta dolor a los movimientos de flexoextensión de la rodilla y a la palpación en la zona proximal y medial de la tibia derecha, sin signo de bostezo al varo ni al valgo. Se solicita una radiografía de rodilla, que muestra aspecto heterogéneo de la tibia proximal, con reacción perióstica.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Osteosarcoma' },
        { letter: 'B', text: 'Fractura' },
        { letter: 'C', text: 'Osteomielitis' },
        { letter: 'D', text: 'Esguince severo de rodilla' },
        { letter: 'E', text: 'Hematoma en organización' },
      ],
      correct: 'A',
      explanation: 'Los tumores óseos se diagnostican principalmente con la radiografía, que aporta información crucial para diferenciar benignos de malignos. Aspecto heterogéneo de la metáfisis con reacción perióstica en un adolescente corresponde a un osteosarcoma.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veintidós. Un adolescente de quince años con torsión de rodilla, tratado como esguince. A los diez días el dolor aumenta pese a la analgesia, y duele la tibia proximal y medial, sin bostezo. La radiografía muestra la tibia proximal heterogénea, con reacción perióstica.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: osteosarcoma; fractura; osteomielitis; esguince severo de rodilla; o hematoma en organización. Piénsalo.',
        answer: 'Es la A. Un esguince que empeora, sin bostezo, con dolor sobre el hueso y una tibia proximal heterogénea con reacción perióstica, en un adolescente, es un osteosarcoma. Fíjate que no hay laxitud ligamentaria, así que el esguince severo no explica el cuadro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 8',
      stem: 'Un paciente de 65 años sufre una caída a nivel, con golpe en la rodilla derecha. Evoluciona con dolor e impotencia funcional. Se observa depresión suprarrotuliana en dicha rodilla y se solicita una radiografía de rodilla derecha, que no evidencia rasgos de fractura.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Luxación de rótula' },
        { letter: 'B', text: 'Disfunción patelo-femoral' },
        { letter: 'C', text: 'Rotura del ligamento cruzado anterior' },
        { letter: 'D', text: 'Rotura del ligamento rotuliano' },
        { letter: 'E', text: 'Rotura del ligamento del cuádriceps' },
      ],
      correct: 'E',
      explanation: 'Solo por la anatomía es posible adivinar la respuesta. El ligamento del cuádriceps está sobre la rótula. El tendón rotuliano está debajo de la rótula y se inserta en la tuberosidad tibial.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Un paciente de sesenta y cinco años que cae a nivel y se golpea la rodilla derecha. Tiene dolor e impotencia funcional y se ve una depresión por encima de la rótula. La radiografía no muestra fractura.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: luxación de rótula; disfunción patelofemoral; rotura del cruzado anterior; rotura del ligamento rotuliano; o rotura del tendón del cuádriceps. Piénsalo.',
        answer: 'Es la E. La depresión suprarrotuliana, por encima de la rótula, es donde está el tendón del cuádriceps; si se rompe, ahí queda el hueco. El ligamento rotuliano está debajo de la rótula y se inserta en la tuberosidad tibial, así que su rotura daría la depresión por debajo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 139',
      stem: 'Un paciente de 60 años, sin antecedentes de importancia, consulta por dolor de la rodilla izquierda, de 4 semanas de evolución, que le dificulta la marcha. Al examen físico, su rodilla no tiene alteraciones.',
      question: '¿Qué otra articulación se debe examinar?',
      options: [
        { letter: 'A', text: 'La cadera' },
        { letter: 'B', text: 'La sínfisis del pubis' },
        { letter: 'C', text: 'La sacroilíaca' },
        { letter: 'D', text: 'El tobillo' },
        { letter: 'E', text: 'La articulación astragalotarsiana' },
      ],
      correct: 'A',
      explanation: 'Recordar que la patología de cadera puede producir gonalgia (dolor de rodilla).',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Un paciente de sesenta años con dolor de la rodilla izquierda de cuatro semanas, que le dificulta la marcha. La rodilla, al examen, está normal.',
        question: '¿Qué otra articulación debes examinar?',
        options: 'Las opciones: la cadera; la sínfisis del pubis; la sacroilíaca; el tobillo; o la articulación astragalotarsiana. Piénsalo.',
        answer: 'Es la A. Cuando la rodilla está normal y duele, examinas la cadera, porque su patología puede producir dolor referido a la rodilla.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente relata que al caminar siente que su rodilla se queda atascada y le duele. Al examen con la maniobra de Apley, le duele al rotar en rotación externa.',
      question: '¿Cuál es el diagnóstico y el examen de elección?',
      options: [
        { letter: 'A', text: 'Lesión del menisco externo; radiografía de rodilla' },
        { letter: 'B', text: 'Lesión del menisco interno; resonancia magnética nuclear' },
        { letter: 'C', text: 'Rotura del ligamento cruzado anterior; resonancia magnética' },
        { letter: 'D', text: 'Lesión del menisco interno; radiografía de rodilla en dos proyecciones' },
        { letter: 'E', text: 'Disfunción patelofemoral; solo reposo y AINEs' },
      ],
      correct: 'B',
      explanation: 'Con la maniobra de Apley, si duele a la rotación externa está lesionado el menisco interno. El bloqueo articular es característico de lesión meniscal, y el diagnóstico se confirma con resonancia magnética, porque la radiografía no ve los meniscos.',
      say: {
        stem: 'Un paciente cuenta que al caminar siente que su rodilla se queda atascada, y le duele. En la maniobra de Apley, le duele al rotar hacia afuera.',
        question: '¿Cuál es el diagnóstico y el examen de elección?',
        options: 'Las opciones: menisco externo con radiografía; menisco interno con resonancia; cruzado anterior con resonancia; menisco interno con radiografía en dos proyecciones; o disfunción patelofemoral con reposo. Piénsalo.',
        answer: 'Es la B. El bloqueo articular es de menisco, y con Apley, dolor a la rotación externa es menisco interno. Se confirma con resonancia. La D es la trampa: acierta el menisco, pero la radiografía no ve fibrocartílago. El cruzado anterior daría inestabilidad, no bloqueo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: rodilla',
      cards: [
        { title: 'Síntoma y estructura', tag: 'Orientar', kind: 'key', items: [
          { t: 'Bloqueo: menisco', d: 'Resonancia, no radiografía',
            say: 'Cerremos con las reglas de oro. Bloqueo articular y dolor en la interlínea: menisco, y se confirma con resonancia, porque la radiografía no ve fibrocartílago.' },
          { t: 'Inestabilidad y cajón anterior: LCA', d: 'Cirugía en el joven activo',
            say: 'Inestabilidad con cajón anterior y Lachman positivos, o hemartros tras un giro: cruzado anterior, que se reconstruye en el joven activo.' },
        ] },
        { title: 'Para no equivocarse', tag: 'Trampas', kind: 'alert', items: [
          { t: 'Anterior con escaleras: patelofemoral', d: 'Clínico; fortalecer cuádriceps',
            say: 'Dolor anterior al subir escaleras, sin bloqueo: disfunción patelofemoral, diagnóstico clínico y fortalecimiento del cuádriceps.' },
          { t: 'Esguince que empeora: mira más allá', d: 'Radiografía, tumor, cadera',
            say: 'Un esguince que empeora pide radiografía, y una rodilla normal que duele pide examinar la cadera. Si te llevas una sola idea de hoy: el síntoma te dice la estructura, bloqueo es menisco, inestabilidad es ligamento y dolor anterior es rótula. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Dolor de rodilla tras un trauma o con actividad',
    root: N('start', 'Paciente con dolor de rodilla', 'Trauma o actividad física',
      'Un paciente con dolor de rodilla. Lo primero es preguntar qué síntoma acompaña al dolor, porque eso te dice la estructura.',
      ['Bloqueo articular', N('do', 'Sospechar lesión meniscal', 'Dolor en la interlínea; Apley',
        'Si la rodilla se traba o se bloquea, sospechas lesión meniscal, con dolor en la interlínea y maniobra de Apley.',
        ['Confirmación', N('ok', 'Resonancia magnética', 'No radiografía',
          'Se confirma con resonancia magnética, porque la radiografía no ve los meniscos.')],
      )],
      ['Inestabilidad o hemartros tras un giro', N('alert', 'Lesión ligamentaria', 'Cajón y Lachman',
        'Si hay inestabilidad o un hemartros tras un giro, sospechas una lesión ligamentaria y buscas el cajón y la prueba de Lachman.',
        ['Cajón anterior positivo', N('refer', 'Cruzado anterior: cirugía', 'Joven activo: artroscopía',
          'Con cajón anterior positivo es el cruzado anterior, que se reconstruye por artroscopía en el joven activo.')],
        ['Cajón posterior o golpe de tablero', N('do', 'Cruzado posterior: conservador', 'Al inicio',
          'Con cajón posterior tras un golpe de tablero es el cruzado posterior, de manejo conservador al inicio.')],
      )],
      ['Dolor anterior con escaleras o sentado', N('ok', 'Disfunción patelofemoral', 'Clínico; cuádriceps',
        'Si el dolor es anterior, con escaleras o al estar sentado, es disfunción patelofemoral: diagnóstico clínico y fortalecimiento del cuádriceps.')],
      ['Esguince que empeora o rodilla normal', N('refer', 'Radiografía y examinar la cadera', 'Descartar tumor o dolor referido',
        'Si un esguince no mejora y empeora, pides radiografía por la sospecha de un tumor óseo. Y si la rodilla está normal, examinas la cadera.')],
    ),
  },
};
