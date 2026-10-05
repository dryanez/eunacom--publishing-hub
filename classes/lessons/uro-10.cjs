// Clase 13.10 (Urología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_urologia.cjs (uro-10). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El código de la clase (1.12.1.002) no tiene preguntas reales propias; de la búsqueda por tema se usó Julio 2017 P162 (masa sólida intratesticular: orquiectomía radical, no punción).
// No usadas: Julio 2024 P122 (tamizaje con autoexamen; ya está en sp-10 y su explicación se contradice con la de Diciembre 2025 P124, que dice que el autoexamen no tiene evidencia).
// Los quistes de epidídimo, hidrocele y varicocele se ven en uro-07 y no se repiten; solo se enlazan.
// Sin pregunta real sobre AFP en seminoma ni criopreservación: dos preguntas del libro como "Caso representativo".
// Imágenes: Bailey & Love 27.ª ed., Fig. 80.16, 80.19 y 80.20.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'uro-10',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cáncer de testículo: masa indolora, marcadores AFP, beta-hCG y LDH, y orquiectomía inguinal radical',
      say: 'Bienvenido. En la clase de masas escrotales vimos las que son benignas, como el hidrocele, el quiste de epidídimo y el varicocele. Hoy vemos la que no se puede dejar pasar: la masa sólida dentro del testículo en un hombre joven. El examen pregunta tres cosas: qué examen pedir, qué marcador identifica cada tumor, y por dónde se opera. Y una regla que no admite excepciones: nunca se punciona.',
    },

    {
      type: 'points',
      kicker: 'Epidemiología',
      title: 'Tumor germinal en varón joven',
      cards: [
        { title: 'Quién y por qué', tag: 'Riesgo', kind: 'key', items: [
          { t: 'Pico entre 20 y 35 años', d: 'Neoplasia sólida más común del joven',
            say: 'Es el cáncer sólido más frecuente en varones jóvenes, con un pico entre los veinte y los treinta y cinco años. Y a la vez es de los más curables, con más de noventa y cinco por ciento de curación.' },
          { t: 'Criptorquidia', d: 'Riesgo 4 a 10 veces mayor',
            say: 'El factor de riesgo más importante es la criptorquidia, el testículo no descendido. Multiplica el riesgo entre cuatro y diez veces, y ojo: también aumenta el del testículo contralateral, aunque esté bien descendido. Operarlo temprano baja el riesgo, pero no lo elimina.' },
        ] },
        { title: 'Histología', tag: 'Más del 95% germinal', kind: 'normal', items: [
          { t: 'Seminoma', d: '50 a 55%',
            say: 'Más del noventa y cinco por ciento nace de células germinales y se divide en dos grupos que se tratan distinto. El seminoma, que es la mitad de los casos.' },
          { t: 'No seminoma', d: 'Embrionario, saco vitelino, coriocarcinoma, teratoma',
            say: 'Y el no seminoma, que reúne el carcinoma embrionario, el tumor del saco vitelino, el coriocarcinoma y el teratoma. Esta división es la que decide el tratamiento.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica y diagnóstico',
      title: 'Masa sólida, dura e indolora',
      cards: [
        { title: 'Presentación', tag: 'Clínica', kind: 'key', items: [
          { t: 'Nódulo pétreo, indoloro', d: 'No transilumina',
            say: 'El paciente se palpa un nódulo duro, pétreo e indoloro, muchas veces en la ducha o después de un golpe que lo hizo palparse. No transilumina, y eso lo separa del hidrocele.' },
          { t: 'Dolor agudo en pocos casos', d: 'Menos del 15%',
            say: 'Menos de uno de cada seis debuta con dolor, por necrosis hemorrágica dentro del tumor. Por eso, aunque duela, una masa sólida dentro del testículo obliga a descartar un tumor.' },
        ] },
        { title: 'Primer examen', tag: 'Imagen', kind: 'criteria', items: [
          { t: 'Ecografía Doppler testicular', d: 'Sensibilidad cercana al 100%',
            say: 'La ecografía Doppler testicular es el examen de primera línea y es obligatoria. Distingue lo que está dentro del testículo, que es maligno en más del noventa y cinco por ciento, de lo que está fuera, como el epidídimo o el hidrocele.' },
          { t: 'Masa hipoecogénica heterogénea', d: 'Con flujo aumentado',
            say: 'El patrón típico es una masa sólida, hipoecogénica, con más flujo. Toda masa sólida intratesticular se considera maligna hasta demostrar lo contrario.' },
        ] },
      ],
    },

    {
      type: 'image',
      light: true,
      kicker: 'Así se ve',
      title: 'Ecografía y metástasis del tumor testicular',
      images: [
        { src: 'biblioteca/19_urologia/uro-10/01_ecografia-tumor-testicular-pequeno__bailey-love_p1528.jpg', label: 'Ecografía testicular: nódulo intratesticular hipoecogénico', credit: 'Bailey & Love 27.ª ed., Fig. 80.16' },
        { src: 'biblioteca/19_urologia/uro-10/02_metastasis-pulmonares-bala-de-canon__bailey-love_p1529.jpg', label: 'Radiografía de tórax: metástasis pulmonares en bala de cañón', credit: 'Bailey & Love 27.ª ed., Fig. 80.19' },
        { src: 'biblioteca/19_urologia/uro-10/03_tac-masa-retroperitoneal-residual__bailey-love_p1530.jpg', label: 'TAC: masa retroperitoneal residual tras quimioterapia', credit: 'Bailey & Love 27.ª ed., Fig. 80.20' },
      ],
      steps: [
        { note: 'El tumor está dentro del parénquima',
          say: 'Mira la zona más oscura y redonda dentro del tejido testicular: es el tumor, un nódulo hipoecogénico en pleno parénquima. Eso es lo que diferencia un tumor de una lesión del epidídimo.' },
        { note: 'Metástasis pulmonares',
          say: 'Y esta es la radiografía de un tumor testicular diseminado: múltiples nódulos redondos en ambos pulmones, las llamadas balas de cañón. Es la forma de metástasis a distancia.' },
        { note: 'Masa residual después de quimioterapia',
          say: 'Aquí, en el TAC, una masa grande en el retroperitoneo después de la quimioterapia. Los ganglios retroperitoneales son el primer escalón de la diseminación, y estas masas residuales pueden requerir cirugía.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Marcadores',
      title: 'Marcadores: antes de operar',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'start', t: 'Masa intratesticular sólida', s: 'Ecografía confirma' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'AFP, beta-hCG y LDH', s: 'Antes de la orquiectomía' },
        { id: 'c', col: 2, row: 0, k: 'effect', t: 'AFP elevada', s: 'Saco vitelino o embrionario' },
        { id: 'd', col: 3, row: 0, k: 'alert', t: 'Es no seminoma', s: 'Nunca seminoma puro' },
        { id: 'e', col: 2, row: 2, k: 'effect', t: 'beta-hCG elevada', s: 'Coriocarcinoma; algunos seminomas' },
        { id: 'f', col: 3, row: 2, k: 'mech', t: 'LDH elevada', s: 'Masa tumoral, inespecífica' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'b', to: 'e' }, { from: 'b', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'Se miden antes de operar',
          say: 'Con una masa intratesticular confirmada, se piden tres marcadores antes de la cirugía: alfafetoproteína, gonadotrofina coriónica beta y deshidrogenasa láctica. Se toman antes porque la cirugía cambia sus valores, y se repiten después para el seguimiento.' },
        { show: ['c', 'd'], note: 'AFP: nunca en seminoma puro',
          say: 'La alfafetoproteína la producen el tumor del saco vitelino y el carcinoma embrionario. La regla de oro: el seminoma puro nunca eleva la alfafetoproteína. Si viene elevada, el tumor se trata como no seminoma, aunque el informe diga seminoma.' },
        { show: ['e'], note: 'beta-hCG: coriocarcinoma',
          say: 'La beta-hCG la produce el coriocarcinoma, con valores muy altos, y también entre quince y veinte por ciento de los seminomas. Por eso en el seminoma puede estar elevada, pero la alfafetoproteína no.' },
        { show: ['f'], note: 'LDH: inespecífica',
          say: 'La LDH no es específica: refleja cuánta masa tumoral hay y qué tan rápido se recambia. Sirve para pronóstico y seguimiento.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Marcadores por tumor',
      title: 'Perfil de marcadores',
      head: ['Tumor', 'AFP', 'beta-hCG', 'Radiosensible'],
      rows: [
        { cells: ['Seminoma puro', 'Siempre normal', 'Elevada en 15-20%', 'Sí'],
          say: 'El seminoma puro tiene alfafetoproteína siempre normal, beta-hCG elevada en uno de cada cinco, y es radiosensible y quimiosensible.' },
        { cells: ['Carcinoma embrionario', 'Elevada 60-70%', 'Elevada 60%', 'No'],
          say: 'El carcinoma embrionario eleva ambos marcadores con frecuencia, y es radiorresistente.' },
        { cells: ['Saco vitelino', 'Elevada >90%', 'Normal', 'No'],
          say: 'El saco vitelino es el de la alfafetoproteína muy alta, con beta-hCG normal.' },
        { cells: ['Coriocarcinoma', 'Normal', 'Muy elevada', 'No'],
          say: 'El coriocarcinoma es el inverso: beta-hCG muy alta, alfafetoproteína normal, y diseminación temprana por la sangre.' },
        { cells: ['Teratoma', 'Normal', 'Normal', 'No'],
          say: 'Y el teratoma tiene todos los marcadores normales. Es radiorresistente y se trata con cirugía.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cirugía',
      title: 'Orquiectomía inguinal, nunca escrotal',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'cause', t: 'Testículo drena a retroperitoneo', s: 'Ganglios lumboaórticos' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'Piel escrotal drena a la ingle', s: 'Ganglios inguinales' },
        { id: 'c', col: 2, row: 0, k: 'trap', t: 'Punción o abordaje escrotal', s: 'Prohibido' },
        { id: 'd', col: 3, row: 0, k: 'risk', t: 'Siembra y vía de diseminación nueva', s: 'Recidiva local' },
        { id: 'e', col: 2, row: 2, k: 'good', t: 'Orquiectomía inguinal radical', s: 'Clampeo alto del cordón' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'b', to: 'e' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'Dos drenajes distintos',
          say: 'La clave es el drenaje linfático. El testículo drena a los ganglios lumboaórticos del retroperitoneo, pero la piel del escroto drena a los ganglios inguinales superficiales.' },
        { show: ['c', 'd'], note: 'Punción o vía escrotal: prohibidas',
          say: 'Si punzas o abres el escroto, contaminas esa pared y abres una vía de diseminación a la ingle que no existía. Por eso la biopsia por punción y el abordaje escrotal están prohibidos. Es una de las respuestas que el examen pone como distractor.' },
        { show: ['e'], note: 'Se opera por la ingle',
          say: 'La conducta es la orquiectomía inguinal radical: incisión sobre el ligamento inguinal y control temprano del cordón espermático a nivel del anillo inguinal profundo, antes de mover el testículo. Es diagnóstica y terapéutica a la vez.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Etapificación y tratamiento',
      title: 'Después de la orquiectomía',
      cards: [
        { title: 'Etapificación', tag: 'TAC', kind: 'criteria', items: [
          { t: 'TAC de tórax, abdomen y pelvis', d: 'Retroperitoneo y pulmón',
            say: 'Con el testículo ya extirpado, se hace TAC de tórax, abdomen y pelvis con contraste. El primer escalón es el ganglio retroperitoneal y luego el pulmón.' },
          { t: 'Marcadores persistentes', d: 'Indican enfermedad residual',
            say: 'Si los marcadores siguen elevados después de operar, hay enfermedad a distancia aunque el TAC no la muestre, y se trata como enfermedad avanzada.' },
        ] },
        { title: 'Terapia según tipo', tag: 'Oncología', kind: 'pharma', items: [
          { t: 'Seminoma estadio I', d: 'Vigilancia, carboplatino o radioterapia',
            say: 'El seminoma es muy radiosensible y quimiosensible. En estadio uno se puede vigilar, dar un ciclo de carboplatino o hacer radioterapia lumboaórtica.' },
          { t: 'No seminoma avanzado', d: 'BEP: bleomicina, etopósido, cisplatino',
            say: 'El no seminoma es radiorresistente. En estadios avanzados se usa quimioterapia con cisplatino, el esquema BEP, y se reseca cualquier masa retroperitoneal residual.' },
          { t: 'Criopreservar semen', d: 'Antes de quimioterapia',
            say: 'Son hombres jóvenes en edad fértil, y la quimioterapia o la cirugía retroperitoneal pueden dejarlos infértiles. Por eso se ofrece criopreservación de semen antes de cualquier tratamiento adicional.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Etapas',
      title: 'Etapa y conducta tras orquiectomía',
      head: ['Etapa', 'Extensión', 'Seminoma', 'No seminoma'],
      rows: [
        { cells: ['I', 'Solo testículo, N0 M0', 'Vigilancia o carboplatino', 'Vigilancia o BEP 1 ciclo'],
          say: 'En estadio uno, el tumor está solo en el testículo y los marcadores se normalizan. El seminoma se vigila o recibe carboplatino. El no seminoma se vigila o recibe un ciclo de BEP si hay invasión vascular.' },
        { cells: ['II', 'Ganglios retroperitoneales', 'Radioterapia o BEP x3', 'BEP x3 ± linfadenectomía'],
          say: 'En estadio dos hay ganglios retroperitoneales. El seminoma recibe radioterapia retroperitoneal o tres ciclos de BEP. El no seminoma, tres ciclos de BEP y, si quedan masas ganglionares residuales, linfadenectomía retroperitoneal.' },
        { cells: ['III', 'Pulmón, ganglios sobre diafragma o vísceras', 'BEP 3-4 ciclos', 'BEP 3-4 ciclos'],
          say: 'En estadio tres, con metástasis pulmonares, supradiafragmáticas o viscerales, se da quimioterapia de inducción con BEP, de tres a cuatro ciclos según el riesgo.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del nódulo testicular a la orquiectomía.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Masa sólida intratesticular', 'Orquiectomía inguinal', 'Punción o vía escrotal'],
          say: 'Masa sólida intratesticular: orquiectomía inguinal radical. El error es la punción o el abordaje por el escroto.' },
        { cells: ['Sospecha de tumor', 'Marcadores antes de operar', 'Pedirlos después'],
          say: 'Los marcadores se toman antes de la cirugía, no después.' },
        { cells: ['"Seminoma" con AFP alta', 'Tratar como no seminoma', 'Tratar como seminoma'],
          say: 'Seminoma con alfafetoproteína elevada: es un no seminoma, y se trata como tal.' },
        { cells: ['Quiste de epidídimo o hidrocele', 'Observar', 'Orquiectomía'],
          say: 'Y la lesión que está fuera del testículo, como el quiste de epidídimo o el hidrocele, no se extirpa. Eso lo vimos en la clase de masas escrotales.' },
        { cells: ['Quimioterapia en hombre joven', 'Criopreservar semen', 'Olvidar la fertilidad'],
          say: 'Antes de la quimioterapia, se ofrece criopreservación de semen.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 25 años con aumento de volumen indoloro del testículo derecho de 2 meses. Masa pétrea de 3,5 cm intratesticular, que no transilumina. La ecografía Doppler muestra una masa sólida hipoecogénica vascularizada de 34 mm. AFP 120 ng/mL (normal <8), beta-hCG 45 mUI/mL y LDH 380 U/L.',
      question: '¿Cuál es la conducta inicial?',
      options: [
        { letter: 'A', text: 'Biopsia por punción transescrotal' },
        { letter: 'B', text: 'Orquiectomía inguinal radical con clampeo alto del cordón' },
        { letter: 'C', text: 'Enucleación del nódulo por vía escrotal' },
        { letter: 'D', text: 'Ecografía de control en 3 meses' },
        { letter: 'E', text: 'Quimioterapia con BEP antes de cirugía' },
      ],
      correct: 'B',
      explanation: 'Masa sólida intratesticular con marcadores elevados: tumor germinal no seminomatoso. Se opera por vía inguinal con clampeo alto del cordón. La punción o la vía escrotal están contraindicadas por la diseminación a los ganglios inguinales.',
      say: {
        stem: 'Un hombre de veinticinco años con un aumento de volumen indoloro del testículo derecho, masa pétrea de tres coma cinco centímetros, que no transilumina. La ecografía muestra una masa sólida hipoecogénica y vascularizada. La alfafetoproteína está en ciento veinte y la beta-hCG en cuarenta y cinco.',
        question: '¿Cuál es la conducta inicial?',
        options: 'Las opciones: biopsia por punción escrotal; orquiectomía inguinal radical; enucleación escrotal; ecografía de control en tres meses; o quimioterapia antes de operar. Piénsalo.',
        answer: 'Es la B. Con una masa sólida y marcadores elevados, el diagnóstico es un tumor germinal no seminoma, y se opera por la ingle. La A y la C pasan por el escroto, que está prohibido. La D retrasa un tumor curable.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 162',
      stem: 'Un paciente de 30 años consulta por aumento de volumen escrotal derecho. Al examen físico se palpa un tumor en relación al testículo derecho. Se solicita ecografía testicular que visualiza una lesión sólida, de 3 cm de diámetro, sin vascularización, que reemplaza al parénquima testicular, sin compromiso del epidídimo. ¿Cuál es la conducta?',
      question: '¿Cuál es la conducta?',
      options: [
        { letter: 'A', text: 'Radioterapia' },
        { letter: 'B', text: 'Quimioterapia' },
        { letter: 'C', text: 'Orquiectomía radical' },
        { letter: 'D', text: 'TAC de abdomen y pelvis' },
        { letter: 'E', text: 'Biopsia testicular por punción' },
      ],
      correct: 'C',
      explanation: 'Tumor testicular confirmado con la ecografía: orquiectomía radical, que es a la vez diagnóstica y terapéutica. La punción está prohibida; el TAC se pide después para etapificar.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un hombre de treinta años con aumento de volumen escrotal derecho. La ecografía muestra una lesión sólida de tres centímetros que reemplaza el parénquima testicular, sin compromiso del epidídimo.',
        question: '¿Cuál es la conducta?',
        options: 'Las opciones: radioterapia; quimioterapia; orquiectomía radical; TAC de abdomen y pelvis; o biopsia por punción. Piénsalo.',
        answer: 'Es la C. Una lesión sólida que reemplaza el testículo es un tumor, y se extirpa por vía inguinal. El TAC es para etapificar, después de operar, y la punción es justo lo que no se hace. La radioterapia y la quimioterapia vienen después, según la histología.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 30 años operado de orquiectomía inguinal. La biopsia informa "seminoma clásico puro", pero la alfafetoproteína es de 350 ng/mL (normal <8) antes y después de la cirugía.',
      question: '¿Cuál es la implicancia clínica?',
      options: [
        { letter: 'A', text: 'Es normal: la mitad de los seminomas puros secretan AFP' },
        { letter: 'B', text: 'El seminoma puro nunca produce AFP; se debe tratar como no seminoma' },
        { letter: 'C', text: 'La AFP se debe a necrosis tumoral y no cambia la conducta' },
        { letter: 'D', text: 'Indica insuficiencia hepática por la anestesia' },
        { letter: 'E', text: 'Indica un teratoma maduro benigno' },
      ],
      correct: 'B',
      explanation: 'El seminoma puro no sintetiza AFP. Si está elevada, hay un componente no seminomatoso no identificado (embrionario o saco vitelino) y el paciente se trata como no seminoma, que es radiorresistente y requiere quimioterapia.',
      say: {
        stem: 'Un hombre de treinta años operado de orquiectomía inguinal. La biopsia dice seminoma clásico puro, pero la alfafetoproteína es de trescientos cincuenta, antes y después de operar.',
        question: '¿Cuál es la implicancia clínica?',
        options: 'Las opciones: es normal en seminomas; el seminoma puro nunca produce alfafetoproteína; es por necrosis; es por la anestesia; o es un teratoma benigno. Piénsalo.',
        answer: 'Es la B. El seminoma puro no produce alfafetoproteína. Si está elevada, hay un componente no seminomatoso que la biopsia no vio, y se trata como no seminoma, con quimioterapia.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: cáncer de testículo',
      cards: [
        { title: 'Diagnóstico', tag: 'Joven, masa sólida', kind: 'key', items: [
          { t: 'Masa intratesticular: maligna hasta probar', d: 'Ecografía Doppler y marcadores',
            say: 'Cerremos con las reglas de oro. Toda masa sólida intratesticular en un varón joven es un tumor hasta demostrar lo contrario. Se pide ecografía Doppler y marcadores antes de operar.' },
          { t: 'Seminoma puro nunca eleva AFP', d: 'AFP alta es no seminoma',
            say: 'El seminoma puro no eleva alfafetoproteína. Si está alta, es no seminoma.' },
        ] },
        { title: 'Conducta', tag: 'Cirugía', kind: 'alert', items: [
          { t: 'Orquiectomía inguinal radical', d: 'Nunca punción ni vía escrotal',
            say: 'Se opera por la ingle, con control alto del cordón. Nunca se punciona ni se opera por el escroto.' },
          { t: 'Criopreservar semen', d: 'Antes de quimioterapia; GES 20',
            say: 'Y se ofrece criopreservación de semen. Es una enfermedad con garantía GES, curable en más del noventa y cinco por ciento. Si te llevas una sola idea de hoy: masa sólida intratesticular, orquiectomía por vía inguinal, jamás una punción. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Masa testicular indolora en varón joven',
    root: N('start', 'Masa testicular indolora', 'Ecografía Doppler testicular',
      'Un varón joven con una masa testicular indolora. El primer paso es la ecografía Doppler para ver si está dentro o fuera del testículo.',
      ['Lesión extratesticular', N('ok', 'Patología benigna', 'Quiste, hidrocele, varicocele',
        'Si la lesión está fuera del testículo, es casi siempre benigna, y se maneja como vimos en la clase de masas escrotales.')],
      ['Masa sólida intratesticular', N('do', 'Marcadores séricos', 'AFP, beta-hCG y LDH',
        'Si es sólida e intratesticular, se piden los marcadores antes de operar.',
        ['Siempre', N('alert', 'Orquiectomía inguinal radical', 'Clampeo alto, sin punción',
          'Se opera por vía inguinal, con control alto del cordón. La punción o la vía escrotal están prohibidas.',
          ['Con la histología', N('refer', 'TAC y oncología', 'Seminoma o no seminoma',
            'Después se etapifica con TAC y se deriva a oncología. Con alfafetoproteína elevada, se trata como no seminoma, y se ofrece criopreservar semen.')],
        )],
      )],
    ),
  },
};
