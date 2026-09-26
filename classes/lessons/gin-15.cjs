// Clase 20.15 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-15, bloque 4).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-15',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'La regla de oro del sangrado postmenopáusico y los signos de la masa anexial',
      say: 'Bienvenido a la clase de hoy. Vamos a ver dos neoplasias del tracto genital interno: el cáncer de endometrio y el cáncer de ovario. El endometrio suele avisar temprano, con sangrado. El ovario es al revés: casi no da señales hasta que ya está avanzado. Vas a aprender la regla que nunca falla frente a un sangrado en la postmenopausia, y a leer una masa anexial con los mismos ojos con que la lee el radiólogo.',
    },

    {
      type: 'points',
      kicker: 'Cáncer de endometrio',
      title: 'Quién tiene más riesgo',
      cards: [
        { title: 'Tipo I, estrógeno-dependiente', tag: '80 de cada 100 casos', kind: 'criteria', items: [
          { t: 'Endometrioide', d: 'Buen pronóstico, grado bajo a moderado',
            say: 'El cáncer de endometrio tiene dos caminos, y el más frecuente es el tipo uno, endometrioide, que explica ochenta de cada cien casos, con buen pronóstico.' },
          { t: 'Hiperestrogenismo sin oposición', d: 'La progesterona deja de frenar el endometrio',
            say: 'Se origina por hiperestrogenismo crónico, sin la progesterona que normalmente lo frena. Por eso todos sus factores de riesgo apuntan al mismo lugar: más estrógeno, sin oposición.' },
        ] },
        { title: 'Factores de riesgo', tag: 'Se preguntan siempre', kind: 'alert', items: [
          { t: 'Obesidad', d: 'El más potente, por aromatización periférica',
            say: 'El factor de riesgo más potente es la obesidad: el tejido graso convierte andrógenos en estrógeno, y mantiene ese estímulo todo el tiempo.' },
          { t: 'Tamoxifeno', d: 'Actúa como estrógeno en el endometrio',
            say: 'También pesa el tamoxifeno, que en la mama bloquea el estrógeno, pero en el endometrio actúa igual que él. Toda paciente con tamoxifeno y sangrado se biopsia.' },
          { t: 'Síndrome de Lynch', d: 'Hasta 60 de cada 100 de riesgo',
            say: 'Y el síndrome de Lynch, con mutaciones en los genes de reparación del ADN, da hasta sesenta de cada cien de riesgo de cáncer de endometrio y de colon.' },
        ] },
        { title: 'Tipo II, el agresivo', tag: 'Estrógeno-independiente', kind: 'normal', items: [
          { t: 'Seroso o de células claras', d: 'En mujeres mayores, endometrio atrófico',
            say: 'El tipo dos es distinto: aparece en mujeres mayores, con un endometrio atrófico, sin relación con el estrógeno, y es mucho más agresivo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Metrorragia postmenopáusica',
      title: 'La regla que nunca falla',
      nodes: [
        { id: 'sang', col: 0, row: 1, k: 'start', t: 'Sangrado postmenopáusico', s: 'Es cáncer hasta que se descarte' },
        { id: 'eco', col: 1, row: 1, k: 'mech', t: 'Ecografía transvaginal', s: 'Mide el grosor endometrial' },
        { id: 'fino', col: 2, row: 0, k: 'good', t: 'Menor a 4-5 mm', s: 'Atrofia, baja probabilidad' },
        { id: 'grueso', col: 2, row: 2, k: 'risk', t: '4-5 mm o más', s: 'U 8 mm o más si usa TRH' },
        { id: 'biopsia', col: 3, row: 2, k: 'alert', t: 'Biopsia endometrial', s: 'Con cánula de Pipelle, obligatoria' },
        { id: 'histero', col: 4, row: 2, k: 'refer', t: 'Histeroscopía', s: 'Si el Pipelle no alcanza' },
      ],
      edges: [
        { from: 'sang', to: 'eco' }, { from: 'eco', to: 'fino' }, { from: 'eco', to: 'grueso' },
        { from: 'grueso', to: 'biopsia' }, { from: 'biopsia', to: 'histero', label: 'si es insuficiente' },
      ],
      steps: [
        { show: ['sang'], note: 'La regla de oro de todo el tema',
          say: 'Guarda esta regla, porque ordena toda la clase: todo sangrado en la postmenopausia es cáncer de endometrio hasta que se demuestre lo contrario.' },
        { show: ['eco'], note: 'El primer paso, casi siempre',
          say: 'El primer examen es la ecografía transvaginal, midiendo el grosor del endometrio.' },
        { show: ['fino'], note: 'Casi siempre es atrofia',
          say: 'Si el endometrio mide menos de cuatro a cinco milímetros, la causa más probable es la atrofia, con una probabilidad de cáncer menor a uno de cada cien.' },
        { show: ['grueso'], note: 'El corte sube si usa hormonas',
          say: 'Pero si mide cuatro a cinco milímetros o más, o si la paciente usa terapia de reemplazo hormonal, el corte sube a ocho milímetros. Ojo con ese matiz, porque se pregunta seguido.' },
        { show: ['biopsia'], note: 'Ambulatoria, con cánula de Pipelle',
          say: 'Con el endometrio engrosado, la biopsia endometrial es obligatoria, y se hace de forma ambulatoria, con la cánula de Pipelle.' },
        { show: ['histero'], note: 'Cuando el Pipelle no alcanza',
          say: 'Si esa muestra sale insuficiente, o hay sospecha de un pólipo, el siguiente paso es la histeroscopía, con biopsia dirigida.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Cirugía etapificadora del endometrio',
      cards: [
        { title: 'Cirugía primaria', tag: 'Etapificadora', kind: 'key', items: [
          { t: 'Histerectomía total', d: 'Con salpingooforectomía bilateral',
            say: 'El tratamiento del cáncer de endometrio es quirúrgico: histerectomía total, con extirpación de ambas trompas y ovarios.' },
          { t: 'Linfadenectomía o centinela', d: 'Completa la etapificación',
            say: 'Y se completa con linfadenectomía, o con el mapeo del ganglio centinela, para saber si hay diseminación.' },
        ] },
        { title: 'Antes de operar', tag: 'Etapificación por imagen', kind: 'normal', items: [
          { t: 'TAC de tórax, abdomen y pelvis', d: 'Si la biopsia confirma el cáncer',
            say: 'Y antes de llevarla a pabellón, si la biopsia confirma el cáncer, se pide un TAC de tórax, abdomen y pelvis, para buscar diseminación antes de operar.' },
        ] },
        { title: 'Adyuvancia', tag: 'Según el estadio', kind: 'pharma', items: [
          { t: 'Estadio I de bajo riesgo', d: 'Solo observación, sin más tratamiento',
            say: 'En estadio uno, de bajo riesgo, basta con la cirugía: se observa, sin nada más.' },
          { t: 'Estadio avanzado', d: 'Quimioterapia y radioterapia',
            say: 'Pero en estadios más avanzados, se agrega quimioterapia y radioterapia externa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Masa anexial',
      title: 'El cáncer de ovario: el asesino silencioso',
      cards: [
        { title: 'Diagnóstico tardío', tag: 'Se detecta tarde', kind: 'alert', items: [
          { t: 'Más de 70 de cada 100', d: 'Ya en estadio III o IV al diagnóstico',
            say: 'Cambiemos al ovario. Le dicen el asesino silencioso, porque más de setenta de cada cien casos se diagnostican ya en estadio tres o cuatro.' },
          { t: 'Síntomas digestivos vagos', d: 'Distensión, saciedad precoz, dolor sordo',
            say: 'Y la razón es que los primeros síntomas son vagos y digestivos: distensión, saciedad precoz, dolor pélvico sordo. Se confunden fácil con un colon irritable.' },
          { t: 'Aumento del abdomen y polaquiuria', d: 'Por la masa que comprime la vejiga',
            say: 'También puede aparecer un aumento del perímetro abdominal, y polaquiuria, porque la masa comprime la vejiga desde afuera.' },
        ] },
        { title: 'Histología', tag: 'La más frecuente', kind: 'criteria', items: [
          { t: 'Carcinoma seroso de alto grado', d: 'Se origina en la fimbria tubárica',
            say: 'El tipo más frecuente es el carcinoma epitelial seroso de alto grado, que explica entre setenta y ochenta de cada cien casos y se origina en la fimbria de la trompa, no en el ovario mismo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios IOTA',
      title: 'Leer una masa anexial en la ecografía',
      cards: [
        { title: 'Signos de benignidad', tag: 'Quiste simple', kind: 'criteria', items: [
          { t: 'Unilocular y anecoico', d: 'Sin tabiques ni componente sólido',
            say: 'Para leer la ecografía de una masa anexial, están las reglas IOTA. Del lado benigno: un quiste unilocular, anecoico, sin tabiques ni componente sólido.' },
          { t: 'Sin flujo Doppler', d: 'Control ecográfico en 6 a 12 semanas',
            say: 'Sin flujo Doppler, y sin ascitis. Ahí la conducta es control ecográfico en seis a doce semanas, porque suele ser un quiste funcional.' },
        ] },
        { title: 'Signos de malignidad', tag: 'Reglas M de IOTA', kind: 'alert', items: [
          { t: 'Papilas mayores a 3 mm', d: 'Sólidas, proyectándose dentro del quiste',
            say: 'Del lado maligno: proyecciones papilares sólidas de más de tres milímetros dentro del quiste, y tabiques gruesos, también de más de tres milímetros.' },
          { t: 'Ascitis y Doppler central', d: 'Flujo vascular intenso dentro del tumor',
            say: 'Súmale la ascitis, y un flujo Doppler central intenso dentro de la masa. Con esos signos, la derivación a ginecología oncológica es directa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Marcadores tumorales',
      title: 'A quién le sirve cada marcador',
      cards: [
        { title: 'CA-125', tag: 'En la postmenopáusica', kind: 'key', items: [
          { t: 'Muy predictivo tras la menopausia', d: 'Con una masa anexial compleja',
            say: 'El CA-125 es el marcador principal, pero su valor cambia con la edad. En la postmenopáusica, con una masa anexial compleja, es altamente predictivo de cáncer.' },
          { t: 'Poco específico en la joven', d: 'Sube con miomas y endometriosis',
            say: 'En la mujer joven es poco específico, porque también sube con miomas, endometriosis o un embarazo. Ahí no sirve solo.' },
        ] },
        { title: 'Tumores germinales', tag: 'En la mujer joven', kind: 'criteria', items: [
          { t: 'Alfafetoproteína', d: 'Tumor del seno endodérmico',
            say: 'En mujeres jóvenes con una masa sólida de crecimiento rápido, hay que pensar en tumores germinales, y ahí se piden otros marcadores: la alfafetoproteína, para el tumor del seno endodérmico.' },
          { t: 'Beta-hCG y LDH', d: 'Coriocarcinoma y disgerminoma',
            say: 'La beta gonadotrofina coriónica, para el coriocarcinoma, y la deshidrogenasa láctica, para el disgerminoma.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Casos especiales',
      title: 'Lynch y los tumores germinales',
      cards: [
        { title: 'Síndrome de Lynch', tag: 'Consejo genético', kind: 'alert', items: [
          { t: 'Tamizaje anual desde los 30', d: 'Ecografía y biopsia endometrial',
            say: 'Si sospechas un síndrome de Lynch, por varios familiares con cáncer de colon y de endometrio a edad joven, el manejo cambia: tamizaje anual con ecografía y biopsia endometrial desde los treinta a treinta y cinco años.' },
          { t: 'Histerectomía profiláctica', d: 'A los 40 años, cumplida la paridad',
            say: 'Y una vez cumplida la paridad, se ofrece histerectomía profiláctica a los cuarenta años, para sacarle ventaja al riesgo antes de que aparezca el cáncer.' },
        ] },
        { title: 'Tumores germinales', tag: 'Preservar la fertilidad', kind: 'pharma', items: [
          { t: 'Cirugía conservadora', d: 'Se preserva el útero y el ovario sano',
            say: 'Y en los tumores germinales de la mujer joven, la cirugía es conservadora: se saca el tumor, preservando el útero y el ovario contralateral sano.' },
          { t: 'Esquema BEP', d: 'Bleomicina, etopósido y cisplatino',
            say: 'La quimioterapia es el esquema BEP, con bleomicina, etopósido y cisplatino, y es curativa en la gran mayoría de los casos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Citorreducción, y nunca puncionar',
      cards: [
        { title: 'Cirugía citorreductora', tag: 'El pilar del tratamiento', kind: 'pharma', items: [
          { t: 'Citorreducción máxima', d: 'Sin tumor residual visible',
            say: 'El tratamiento del cáncer de ovario es la cirugía de citorreducción máxima: sacar todo el tumor visible, sin dejar residuo.' },
          { t: 'Quimioterapia después', d: 'Carboplatino más paclitaxel',
            say: 'Y después de la cirugía, quimioterapia con carboplatino más paclitaxel.' },
        ] },
        { title: 'Nunca puncionar', tag: 'Regla absoluta', kind: 'alert', items: [
          { t: 'Riesgo de siembra peritoneal', d: 'Empeora el estadio y el pronóstico',
            say: 'Y una regla que no tiene excepción: nunca se punciona una masa ovárica sospechosa. Si rompes la cápsula, siembras células malignas en todo el peritoneo, y un tumor que estaba confinado al ovario pasa a un estadio peor, con mucho peor pronóstico para la paciente.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos el sangrado postmenopáusico y la masa anexial en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Endometrio y ovario: lo que más se pregunta',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Sangrado postmenopáusico', 'Ecografía y biopsia si el endometrio ≥ 4-5 mm', 'Observar o dar hormonas sin biopsiar'],
          say: 'Repasemos las trampas. Sangrado en la postmenopausia: ecografía y biopsia si el endometrio mide cuatro a cinco milímetros o más. Observar, o dar hormonas sin biopsiar, retrasa el diagnóstico.' },
        { cells: ['Con terapia de reemplazo hormonal', 'El corte sube a 8 mm', 'Aplicar el mismo corte de 4-5 mm'],
          say: 'Si usa terapia de reemplazo hormonal, el corte sube a ocho milímetros. Aplicar el mismo corte de siempre es la trampa clásica.' },
        { cells: ['Masa anexial con criterios IOTA benignos', 'Control ecográfico en 6 a 12 semanas', 'Cirugía o marcadores de entrada'],
          say: 'Masa con criterios IOTA benignos: control ecográfico, sin apurar cirugía ni marcadores.' },
        { cells: ['Masa anexial con criterios de malignidad', 'Derivar a ginecología oncológica', 'Puncionar para aliviar o para biopsiar'],
          say: 'Y con criterios de malignidad, se deriva a ginecología oncológica. Puncionar, aunque sea para aliviar síntomas, está formalmente prohibido.' },
        { cells: ['CA-125 elevado en mujer joven', 'Pensar también en miomas o endometriosis', 'Asumir cáncer de entrada'],
          say: 'Y el CA-125 elevado en una mujer joven no es sinónimo de cáncer: piensa también en miomas o endometriosis antes de asumir lo peor.' },
        { cells: ['Sospecha de síndrome de Lynch', 'Tamizaje anual desde los 30-35', 'Esperar a que aparezcan síntomas'],
          say: 'Y con antecedente familiar sugerente de síndrome de Lynch, el tamizaje anual empieza a los treinta o treinta y cinco años. Esperar a que aparezcan síntomas es dejar pasar la ventana de detección precoz.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 58 años, con menopausia hace 7 años, sin terapia de reemplazo hormonal, consulta por un sangrado genital escaso de 10 días de evolución. La ecografía transvaginal muestra un endometrio de 9 mm, heterogéneo, con anexos normales.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar estrógenos vaginales y controlar en 3 meses' },
        { letter: 'B', text: 'Realizar biopsia endometrial ambulatoria con cánula de Pipelle' },
        { letter: 'C', text: 'Solicitar resonancia magnética de pelvis' },
        { letter: 'D', text: 'Indicar reposo y observar la evolución' },
        { letter: 'E', text: 'Programar histerectomía sin estudio previo' },
      ],
      correct: 'B',
      explanation: 'Sangrado postmenopáusico con endometrio de 9 mm, muy por encima del corte de 4 a 5 mm sin TRH: se biopsia de inmediato con cánula de Pipelle. Los estrógenos, el reposo o la observación retrasan un diagnóstico posible de cáncer, y operar sin biopsia previa es un error grave.',
      say: {
        stem: 'Vamos con un caso. Mujer de cincuenta y ocho años, con menopausia hace siete años, sin terapia de reemplazo hormonal, con un sangrado genital escaso de diez días de evolución. La ecografía transvaginal muestra un endometrio de nueve milímetros, heterogéneo, con anexos normales.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: estrógenos vaginales y control en tres meses, biopsia endometrial ambulatoria con cánula de Pipelle, resonancia de pelvis, reposo y observación, o histerectomía sin estudio previo. Piénsalo.',
        answer: 'Es la B. El endometrio mide nueve milímetros, muy por encima del corte de cuatro a cinco, y sin terapia hormonal de por medio. Eso es biopsia ya, con Pipelle. Los estrógenos, el reposo o la observación solo retrasan el diagnóstico de un posible cáncer, y operar sin biopsia previa es un error grave.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 46',
      stem: 'Una paciente de 55 años, con menopausia a los 51 años y usuaria de estrógenos transdérmicos como terapia de reemplazo hormonal, consulta por sangrado genital de 5 días de evolución. Al examen físico, sus signos vitales son normales y la especuloscopía no muestra metrorragia activa ni lesiones del cuello uterino.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar histerectomía' },
        { letter: 'B', text: 'Aumentar la dosis de estrógenos' },
        { letter: 'C', text: 'Iniciar anticonceptivos orales' },
        { letter: 'D', text: 'Solicitar biopsia de endometrio' },
        { letter: 'E', text: 'Indicar ácido tranexámico vía oral' },
      ],
      correct: 'D',
      explanation: 'Toda metrorragia postmenopáusica se estudia. Con terapia de reemplazo hormonal, el corte para biopsiar sube a 8 mm; sin describir el grosor exacto en el enunciado, la conducta correcta sigue siendo biopsiar, nunca aumentar estrógenos ni tratar el sangrado sin diagnóstico.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de cincuenta y cinco años, con menopausia a los cincuenta y uno, que usa estrógenos transdérmicos como terapia de reemplazo hormonal, y consulta por un sangrado genital de cinco días. Sus signos vitales son normales, y la especuloscopía no muestra sangrado activo ni lesiones del cuello.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: histerectomía, aumentar la dosis de estrógenos, iniciar anticonceptivos orales, solicitar biopsia de endometrio, o dar ácido tranexámico. Piénsalo.',
        answer: 'Es la D. Toda metrorragia postmenopáusica se biopsia, y el hecho de que use terapia hormonal no cambia esa obligación, aunque el corte para el grosor endometrial sea más alto. Aumentar estrógenos o dar un hemostático sin diagnóstico es tratar el síntoma e ignorar la posibilidad de un cáncer detrás.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 81',
      stem: 'Una paciente de 56 años, en tratamiento con tamoxifeno 20 mg al día por un cáncer de mama diagnosticado hace 9 años, presenta metrorragia escasa desde hace 5 días, por lo que se solicita una ecografía transvaginal, que muestra un endometrio de 8 mm, sin alteraciones anexiales.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar terapia de reemplazo hormonal oral' },
        { letter: 'B', text: 'Instalar dispositivo intrauterino medicado' },
        { letter: 'C', text: 'Disminuir la dosis de tamoxifeno' },
        { letter: 'D', text: 'Solicitar biopsia endometrial' },
        { letter: 'E', text: 'Realizar histerectomía' },
      ],
      correct: 'D',
      explanation: 'El tamoxifeno actúa como estrógeno en el endometrio y sube el riesgo de hiperplasia y cáncer endometrial. Con metrorragia postmenopáusica y un endometrio de 8 mm, la conducta es biopsiar, no ajustar el tamoxifeno ni operar sin diagnóstico previo.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de agosto de dos mil veintiuno. Paciente de cincuenta y seis años, en tratamiento con tamoxifeno, veinte miligramos al día, por un cáncer de mama de hace nueve años, con una metrorragia escasa de cinco días. La ecografía muestra un endometrio de ocho milímetros, sin alteraciones anexiales.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: iniciar terapia de reemplazo hormonal, instalar un dispositivo intrauterino medicado, disminuir el tamoxifeno, solicitar biopsia endometrial, o hacer histerectomía. Piénsalo.',
        answer: 'Es la D. El tamoxifeno es justo el factor de riesgo que vimos: actúa como estrógeno en el endometrio, y con metrorragia y un endometrio de ocho milímetros, la conducta es biopsiar. No se toca la dosis de tamoxifeno por esto, y operar sin biopsia previa es adelantarse al diagnóstico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 87',
      stem: 'Una paciente de 70 años consulta por dolor abdominal de intensidad progresiva, que inició hace 4 meses. Ha bajado 5 kilogramos de peso. Al examen físico se observa abdomen distendido y destaca una masa anexial de 7 cm, de consistencia aumentada.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Quiste funcional' },
        { letter: 'B', text: 'Mioma uterino' },
        { letter: 'C', text: 'Cáncer de ovario' },
        { letter: 'D', text: 'Cáncer de colon' },
        { letter: 'E', text: 'Endometriosis' },
      ],
      correct: 'C',
      explanation: 'Mujer postmenopáusica con dolor abdominal progresivo, baja de peso y una masa anexial firme y de consistencia aumentada: es el cuadro clásico del cáncer de ovario, que se presenta tarde y con síntomas inespecíficos.',
      say: {
        stem: 'Una pregunta real más, del EUNACOM de diciembre de dos mil dieciocho. Paciente de setenta años, con dolor abdominal progresivo de cuatro meses, que ha bajado cinco kilos de peso. Al examen tiene el abdomen distendido, y se palpa una masa anexial de siete centímetros, de consistencia aumentada.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: quiste funcional, mioma uterino, cáncer de ovario, cáncer de colon, o endometriosis. Piénsalo.',
        answer: 'Es la C. Esto calza exactamente con lo que vimos: una mujer mayor, con síntomas vagos y progresivos, baja de peso, y una masa anexial firme. Un quiste funcional no ocurre a esta edad, un mioma no explica la baja de peso, y la endometriosis no aparece recién en la postmenopausia.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Endometrio', tag: 'La regla que nunca falla', kind: 'key', items: [
          { t: 'Sangrado postmenopáusico', d: 'Es cáncer hasta que se descarte',
            say: 'Cerremos con las reglas de oro. Todo sangrado en la postmenopausia es cáncer de endometrio hasta que se demuestre lo contrario.' },
          { t: 'Endometrio ≥ 4-5 mm', d: 'U 8 mm si usa terapia hormonal',
            say: 'Y el corte para biopsiar es de cuatro a cinco milímetros, u ocho si usa terapia hormonal.' },
        ] },
        { title: 'Masa anexial', tag: 'Cómo se lee', kind: 'criteria', items: [
          { t: 'Papilas, tabiques gruesos, ascitis', d: 'Signos de malignidad de IOTA',
            say: 'En la masa anexial, papilas sólidas, tabiques gruesos y ascitis son los signos de malignidad.' },
        ] },
        { title: 'Cáncer de ovario', tag: 'Regla absoluta', kind: 'alert', items: [
          { t: 'Nunca puncionar', d: 'Siembra el peritoneo y empeora el estadio',
            say: 'Y nunca se punciona una masa sospechosa: siembra el peritoneo y empeora el pronóstico. Si te llevas una sola idea de hoy: el sangrado postmenopáusico se biopsia siempre, y la masa anexial sospechosa jamás se punciona. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Sangrado postmenopáusico y masa anexial',
    root: N('start', 'Sospecha oncológica ginecológica', '¿Sangrado o masa anexial?',
      'Mujer en la postmenopausia con un sangrado genital, o con una masa anexial encontrada en la ecografía. El camino se separa según cuál de las dos tienes delante.',
      ['Sangrado genital', N('do', 'Ecografía transvaginal', 'Mide el grosor endometrial',
        'Con sangrado, el primer paso es medir el endometrio.',
        ['Menor a 4-5 mm', N('ok', 'Atrofia endometrial', 'Baja probabilidad de cáncer',
          'Endometrio fino: la causa más probable es la atrofia, con bajo riesgo de cáncer.')],
        ['4-5 mm o más, u 8 con TRH', N('alert', 'Biopsia endometrial', 'Con cánula de Pipelle, obligatoria',
          'Endometrio grueso para su contexto: biopsia obligatoria con Pipelle, e histeroscopía si la muestra no alcanza.')])],
      ['Masa anexial en la ecografía', N('q', '¿Criterios IOTA?', 'Benignidad o malignidad',
        'Con una masa anexial, lo que decide todo son los criterios ecográficos IOTA.',
        ['Benignos: unilocular, sin Doppler', N('ok', 'Control ecográfico', 'En 6 a 12 semanas',
          'Quiste simple, sin componente sólido ni flujo: control ecográfico, casi siempre se resuelve solo.')],
        ['Malignos: papilas, tabiques, ascitis', N('alert', 'Derivar a ginecología oncológica', 'Nunca puncionar la masa',
          'Con signos de malignidad, se deriva para cirugía citorreductora. Puncionar está formalmente prohibido, por el riesgo de sembrar el peritoneo.')])]),
  },
};
