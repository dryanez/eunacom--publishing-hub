// Clase Diabetes 1.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-01).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-01',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Reconocer el mecanismo detrás de cada diabetes para saber quién necesita insulina',
      say: 'Bienvenidos. Abrimos el bloque de diabetes con la pregunta de base: qué tipo de diabetes tiene este paciente. Parece académico, pero no lo es, porque el tipo decide el tratamiento. Vamos a ver la diabetes tipo uno, la tipo dos y las dos variantes que el examen adora: la LADA y la MODY. Y todo se ordena con una sola idea: ¿al páncreas le queda insulina o no?',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Dos mecanismos opuestos',
      nodes: [
        { id: 'aut', col: 0, row: 0, k: 'cause', t: 'Autoinmunidad', s: 'Linfocitos T contra la célula beta' },
        { id: 'def', col: 1, row: 0, k: 'mech', t: 'Déficit absoluto de insulina', s: 'Célula beta destruida' },
        { id: 'dm1', col: 2, row: 0, k: 'risk', t: 'DM tipo 1 (5–10 %)', s: 'Baja de peso, cetosis, CAD' },
        { id: 'obe', col: 0, row: 2, k: 'cause', t: 'Obesidad visceral', s: 'Y sedentarismo' },
        { id: 'res', col: 1, row: 2, k: 'mech', t: 'Resistencia a la insulina', s: 'La insulina existe, pero no actúa' },
        { id: 'ago', col: 2, row: 2, k: 'mech', t: 'Agotamiento progresivo', s: 'La célula beta ya no compensa' },
        { id: 'dm2', col: 3, row: 2, k: 'effect', t: 'DM tipo 2 (90–95 %)', s: 'Adulto con sobrepeso' },
      ],
      edges: [
        { from: 'aut', to: 'def' }, { from: 'def', to: 'dm1' },
        { from: 'obe', to: 'res' }, { from: 'res', to: 'ago', label: 'con los años' }, { from: 'ago', to: 'dm2' },
      ],
      steps: [
        { show: ['aut'], note: 'Tipo 1: el sistema inmune ataca al islote',
          say: 'Partamos por el mecanismo, porque de aquí sale todo lo demás. En la diabetes tipo uno el problema es inmunológico: los linfocitos T destruyen de forma selectiva las células beta de los islotes del páncreas.' },
        { show: ['def'], note: 'Sin célula beta, no hay insulina',
          say: 'Y si no hay célula beta, no hay insulina. El déficit es absoluto. Retén esa palabra, absoluto, porque explica la clínica y el tratamiento.' },
        { show: ['dm1'], note: 'Sin insulina el cuerpo se consume: cetosis',
          say: 'Sin insulina, el cuerpo no puede usar la glucosa y empieza a quemar grasa y músculo. Por eso el paciente baja de peso, produce cuerpos cetónicos y puede debutar con una cetoacidosis diabética. Es entre el cinco y el diez por ciento de las diabetes, típicamente en niños, adolescentes y adultos jóvenes.' },
        { show: ['obe', 'res'], note: 'Tipo 2: insulina hay, pero no funciona',
          say: 'La diabetes tipo dos es exactamente lo contrario. Su gatillante modificable es la obesidad visceral y el sedentarismo, que producen resistencia periférica a la insulina. Aquí la insulina existe, e incluso está alta, pero los tejidos no le responden.' },
        { show: ['ago'], note: 'El páncreas compensa… hasta que se agota',
          say: 'Al principio el páncreas compensa fabricando más. Pero con los años esa célula beta se va agotando, y cuando ya no alcanza, aparece la hiperglicemia.' },
        { show: ['dm2'], note: 'Nueve de cada diez diabéticos',
          say: 'Esa es la diabetes tipo dos: entre el noventa y el noventa y cinco por ciento de los casos, en adultos con sobrepeso. Y ojo con la consecuencia práctica: como todavía hay insulina propia, responde a metformina y a cambios de estilo de vida.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: '¿Cómo se ve cada paciente?',
      cards: [
        { title: 'DM tipo 1', tag: 'Déficit absoluto', kind: 'alert', items: [
          { t: 'Niño, adolescente o adulto joven', d: 'Normopeso o bajo peso',
            say: 'Veamos cómo se traduce esto en la consulta. El paciente con diabetes tipo uno es un niño, un adolescente o un adulto joven, normopeso o incluso flaco.' },
          { t: 'Debut agudo y catabólico', d: 'Polidipsia, polifagia, baja de peso marcada',
            say: 'Debuta de forma aguda, en semanas: polidipsia, polifagia y una baja de peso marcada. Y tiene propensión a la cetoacidosis, que muchas veces es la forma en que se hace el diagnóstico.' },
          { t: 'Insulina obligatoria', d: 'Nula respuesta a hipoglicemiantes orales',
            say: 'El tratamiento sale directo del mecanismo: si no hay insulina, hay que ponerla. Los hipoglicemiantes orales no sirven.' },
        ] },
        { title: 'DM tipo 2', tag: 'Resistencia', kind: 'normal', items: [
          { t: 'Adulto con sobrepeso u obesidad', d: 'Habitualmente sobre 35 a 45 años',
            say: 'El paciente con diabetes tipo dos, en cambio, es un adulto, habitualmente sobre los treinta y cinco a cuarenta y cinco años, con sobrepeso u obesidad, y con familiares diabéticos.' },
          { t: 'Signos de resistencia', d: 'Acantosis nigricans, acrocordones',
            say: 'Busca los signos de resistencia a la insulina en la piel: la acantosis nigricans en el cuello y las axilas, y los acrocordones. Cuando aparecen en el enunciado, te están diciendo tipo dos.' },
          { t: 'Metformina + estilo de vida', d: 'Buena respuesta inicial',
            say: 'Y responde bien, al inicio, a metformina más dieta y ejercicio.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Formas especiales',
      title: 'LADA: la tipo 1 que llega tarde',
      nodes: [
        { id: 'adu', col: 0, row: 1, k: 'start', t: 'Adulto 25 a 45 años', s: 'Normopeso o sobrepeso leve' },
        { id: 'aut', col: 1, row: 0, k: 'cause', t: 'Otra autoinmunidad', s: 'Hashimoto, vitiligo' },
        { id: 'lad', col: 1, row: 2, k: 'mech', t: 'Autoinmune lenta', s: 'DM1 de progresión lenta' },
        { id: 'fal', col: 2, row: 1, k: 'risk', t: 'Falla precoz a orales', s: 'Pese a dosis altas' },
        { id: 'ins', col: 3, row: 1, k: 'good', t: 'Insulina precoz', s: 'Como una tipo 1' },
        { id: 'tra', col: 3, row: 2, k: 'trap', t: 'Llamarla DM2 resistente', s: 'Y seguir subiendo orales' },
      ],
      edges: [
        { from: 'adu', to: 'fal' }, { from: 'aut', to: 'fal', label: 'orienta' }, { from: 'lad', to: 'fal' },
        { from: 'fal', to: 'ins' }, { from: 'fal', to: 'tra', label: 'error' },
      ],
      steps: [
        { show: ['adu'], note: 'Parece una tipo 2… pero no calza',
          say: 'Ahora las formas especiales, que son las que más se preguntan. La primera es la LADA, la diabetes autoinmune latente del adulto. El paciente es un adulto, habitualmente entre veinticinco y cuarenta y cinco años, normopeso o con sobrepeso leve. A primera vista parece una tipo dos, y por eso se escapa.' },
        { show: ['lad'], note: 'Mismo mecanismo de la tipo 1, en cámara lenta',
          say: 'Pero el mecanismo es el de la tipo uno: una destrucción autoinmune de la célula beta, solo que de progresión lenta. Por eso los primeros meses todavía queda algo de insulina.' },
        { show: ['aut'], note: 'La pista del enunciado: otra enfermedad autoinmune',
          say: 'La pista que te deja el enunciado casi siempre es otra autoinmunidad, personal o familiar: tiroiditis de Hashimoto o vitiligo. Una paciente hipotiroidea con vitiligo y diabetes debe encender la alarma.' },
        { show: ['fal'], note: 'La clave de examen: no responde a orales',
          say: 'Y la clave de examen es la evolución: no responde a los hipoglicemiantes orales. Sigue mal controlada aunque tome metformina y glibenclamida en dosis altas.' },
        { show: ['ins', 'tra'], note: 'Se trata como tipo 1: insulina',
          say: 'La conducta es insulina precoz, igual que en la tipo uno. La trampa es rotularla como una tipo dos difícil y seguir sumando pastillas: la célula beta se sigue destruyendo y el paciente se descompensa.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Formas especiales',
      title: 'MODY: la diabetes que se hereda en vertical',
      cards: [
        { title: 'El perfil', tag: 'Monogénica', kind: 'key', items: [
          { t: 'Joven delgado, antes de los 25', d: 'Sin obesidad ni acantosis',
            say: 'La segunda forma especial es la MODY, una diabetes monogénica. El perfil es un joven que se diagnostica antes de los veinticinco años, delgado, sin obesidad y sin acantosis. O sea, no tiene cara de tipo dos.' },
          { t: 'Anticuerpos negativos', d: 'No hay autoinmunidad',
            say: 'Pero tampoco es una tipo uno, porque no hay autoinmunidad: los anticuerpos son negativos, y no debuta con cetoacidosis.' },
        ] },
        { title: 'La pista', tag: 'Autosómica dominante', kind: 'criteria', items: [
          { t: 'Tres generaciones afectadas', d: 'Padre, tío, abuelo: diabéticos jóvenes y flacos',
            say: 'La pista está en la familia. Es autosómica dominante, así que afecta a generaciones sucesivas: el padre, la tía, el abuelo, todos diabéticos desde jóvenes y todos delgados. Cuando el enunciado te dibuja un árbol familiar vertical, piensa en MODY.' },
        ] },
        { title: 'El tratamiento', tag: 'Dato de examen', kind: 'pharma', items: [
          { t: 'Excelente respuesta a sulfonilureas', d: 'Dosis bajas; la forma más frecuente es MODY-3',
            say: 'Y el dato de tratamiento: la forma más frecuente, la MODY tres, responde de manera exquisita a dosis bajas de sulfonilureas, como la glibenclamida. Fíjate en el contraste: la LADA fracasa con los orales, la MODY se controla con ellos.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Laboratorio',
      title: 'Péptido C y anticuerpos: el laboratorio confirma el mecanismo',
      nodes: [
        { id: 'dud', col: 0, row: 1, k: 'start', t: 'Duda diagnóstica', s: 'La clínica no basta' },
        { id: 'pep', col: 1, row: 0, k: 'q', t: 'Péptido C', s: 'Reserva de insulina propia' },
        { id: 'bajo', col: 2, row: 0, k: 'risk', t: 'Bajo o indetectable', s: 'DM1 o LADA avanzada' },
        { id: 'alto', col: 3, row: 0, k: 'good', t: 'Elevado o normal', s: 'DM2 (resistencia)' },
        { id: 'ac', col: 1, row: 2, k: 'q', t: 'Anticuerpos pancreáticos', s: 'Anti-GAD65, anti-IA2, IAA, ZnT8' },
        { id: 'pos', col: 2, row: 2, k: 'risk', t: 'Positivos', s: 'Autoinmune: DM1 o LADA' },
        { id: 'neg', col: 3, row: 2, k: 'effect', t: 'Negativos', s: 'DM2 o MODY' },
      ],
      edges: [
        { from: 'dud', to: 'pep' }, { from: 'pep', to: 'bajo' }, { from: 'pep', to: 'alto' },
        { from: 'dud', to: 'ac' }, { from: 'ac', to: 'pos' }, { from: 'ac', to: 'neg' },
      ],
      steps: [
        { show: ['dud'], note: 'Primero la clínica; el laboratorio, si hay duda',
          say: 'La diferenciación es, ante todo, clínica. Pero cuando hay duda, el laboratorio confirma el mecanismo con dos herramientas.' },
        { show: ['pep'], note: 'Sale en la misma cantidad que la insulina',
          say: 'La primera es el péptido C. Cuando el páncreas corta la proinsulina, libera insulina y péptido C en la misma cantidad. Por eso el péptido C mide fielmente cuánta insulina propia fabrica el paciente.' },
        { show: ['bajo', 'alto'], note: 'Bajo: no queda insulina. Alto: hay, pero no actúa',
          say: 'Si está muy bajo o indetectable, no queda reserva: es una tipo uno o una LADA avanzada. Si está elevado o normal, la insulina está, pero no actúa: es una tipo dos. Es el mecanismo del comienzo, medido en sangre.' },
        { show: ['ac'], note: 'Anti-GAD65: el más sensible en LADA',
          say: 'La segunda herramienta son los anticuerpos pancreáticos: anti GAD sesenta y cinco, anti IA dos, antiinsulina y anti transportador de zinc ocho. De todos, el que tienes que recordar es el anti GAD, el más sensible en la LADA.' },
        { show: ['pos', 'neg'], note: 'Positivos = autoinmune',
          say: 'Si son positivos, confirman la etiología autoinmune: tipo uno o LADA. Si son negativos, hablamos de tipo dos o de MODY. Y así, con dos exámenes, separas las cuatro.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un árbol de decisión, tal como vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las cuatro diabetes lado a lado',
      head: ['Tipo', 'Perfil clínico', 'Laboratorio', 'Tratamiento inicial'],
      rows: [
        { cells: ['DM tipo 1', 'Menor de 20, normo o bajo peso, CAD', 'Péptido C ausente · anticuerpos +', 'Insulina obligatoria'],
          say: 'Repasemos lado a lado. Tipo uno: menor de veinte años, flaco, con baja de peso o cetoacidosis. Péptido C ausente, anticuerpos positivos, y la insulina es obligatoria.' },
        { cells: ['DM tipo 2', 'Adulto con obesidad, acantosis', 'Péptido C normal o alto · anticuerpos −', 'Metformina + estilo de vida'],
          say: 'Tipo dos: adulto con obesidad y acantosis. Péptido C normal o alto, anticuerpos negativos, y parte con metformina y estilo de vida.' },
        { cells: ['LADA', 'Adulto 25–45, delgado, otra autoinmunidad', 'Anti-GAD + · péptido C en descenso', 'Insulina precoz'],
          say: 'LADA: adulto delgado con otra autoinmunidad. Anti GAD positivo, péptido C bajando, y el error es insistir con orales: va insulina precoz.' },
        { cells: ['MODY', 'Menor de 25, delgado, 3 generaciones', 'Anticuerpos − · péptido C detectable', 'Sulfonilureas en dosis bajas'],
          say: 'MODY: joven delgado con tres generaciones afectadas. Anticuerpos negativos, péptido C detectable, y excelente respuesta a sulfonilureas. El error es pensar que todo joven con diabetes necesita insulina.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 28 años con tiroiditis de Hashimoto en tratamiento con levotiroxina, IMC 21,5 kg/m². Consulta por polidipsia, astenia y baja de 4 kg en 2 meses. Glicemia de ayuno 285 mg/dL, HbA1c 10,2 %, sin cetonuria. Se inició metformina, sin descenso glicémico tras 4 semanas de escalamiento.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Agregar glibenclamida y controlar en 3 meses' },
        { letter: 'B', text: 'Solicitar anti-GAD65 y péptido C, e iniciar insulina' },
        { letter: 'C', text: 'Solicitar estudio genético para MODY' },
        { letter: 'D', text: 'Solicitar una prueba de tolerancia a la glucosa oral' },
        { letter: 'E', text: 'Aumentar la metformina a dosis máxima' },
      ],
      correct: 'B',
      explanation: 'Adulta joven, delgada, con autoinmunidad previa (Hashimoto), hiperglicemia sintomática y falla a metformina: LADA. Se piden anti-GAD65 y péptido C y se inicia insulina de inmediato para frenar el catabolismo. Sumar orales solo retrasa el tratamiento.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintiocho años con tiroiditis de Hashimoto en tratamiento, de peso normal. Consulta por sed, cansancio y cuatro kilos menos en dos meses. Glicemia de ayuno de doscientos ochenta y cinco, hemoglobina glicosilada de diez coma dos, sin cetonas en la orina. Le iniciaron metformina y, tras cuatro semanas subiendo la dosis, la glicemia no baja.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: agregar glibenclamida, pedir anti GAD y péptido C e iniciar insulina, pedir un estudio genético para MODY, pedir una prueba de tolerancia a la glucosa, o subir la metformina al máximo. Piénsalo.',
        answer: 'Es la B. Suma las pistas: adulta joven, delgada, con otra enfermedad autoinmune, y que no responde a metformina. Es una LADA. Se confirma con anti GAD y péptido C, pero la insulina no espera el resultado, porque el catabolismo sigue avanzando. El distractor tentador es agregar glibenclamida: es lo que harías en una tipo dos, y aquí solo retrasa lo inevitable. Y la MODY no calza, porque no hay herencia familiar y sí hay autoinmunidad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 113',
      stem: 'Una paciente de 36 años, hipotiroidea y con antecedente de vitíligo fue diagnosticada de diabetes hace un año. Está en tratamiento con 2 gramos de metforminal al día y 20 mg de glibenclamida al día, más dieta. Su hemoglobina glicosilada es de 8,5% y su glicemia de ayuno resulta 196 mg/dl.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Diabetes mellitus 1 - LADA' },
        { letter: 'B', text: 'Diabetes mellitus Mody' },
        { letter: 'C', text: 'Diabetes mellitus secundaria' },
        { letter: 'D', text: 'Diabetes mellitus 2 con tendencia a la cetosis' },
        { letter: 'E', text: 'Diabetes mellitus controlada' },
      ],
      correct: 'A',
      explanation: 'Autoinmunidad asociada (hipotiroidismo y vitíligo) más mal control pese a dosis altas de metformina y glibenclamida: diabetes LADA, la autoinmune del adulto, que se trata con insulina.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecinueve. Paciente de treinta y seis años, hipotiroidea y con vitiligo, diagnosticada de diabetes hace un año. Toma dos gramos de metformina y veinte miligramos de glibenclamida al día, más dieta. Su hemoglobina glicosilada es ocho coma cinco y su glicemia de ayuno, ciento noventa y seis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: diabetes tipo uno LADA, diabetes MODY, diabetes secundaria, diabetes tipo dos con tendencia a la cetosis, o diabetes controlada. Piénsalo.',
        answer: 'Es la A, LADA. Es el caso de la clase casi calcado: dos enfermedades autoinmunes y un mal control a pesar de dosis altas de dos orales. La MODY es el distractor, pero la MODY se controla con sulfonilureas, y esta paciente está tomando veinte miligramos de glibenclamida sin resultado. Y claramente no está controlada: su hemoglobina glicosilada está sobre ocho.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2018 · Pregunta 114',
      stem: 'Un paciente de 32 años, normopeso, diagnosticado de diabetes desde los 20 años, en tratamiento. Su padre, su hermano y su abuelo son diabéticos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'DM tipo 1' },
        { letter: 'B', text: 'DM tipo 2' },
        { letter: 'C', text: 'DM LADA' },
        { letter: 'D', text: 'DM Mody' },
        { letter: 'E', text: 'DM mitocondrial' },
      ],
      correct: 'D',
      explanation: 'Diabetes diagnosticada antes de los 25 años en un paciente normopeso, con tres generaciones afectadas (abuelo, padre, hermano): herencia autosómica dominante, típica de la MODY. La LADA es autoinmune y no se repite así en la familia; la mitocondrial se hereda por vía materna.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil dieciocho. Paciente de treinta y dos años, normopeso, diabético desde los veinte. Su padre, su hermano y su abuelo son diabéticos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: tipo uno, tipo dos, LADA, MODY, o diabetes mitocondrial. Piénsalo.',
        answer: 'Es la D, MODY. Mira cómo el enunciado es solo dos datos: diabetes antes de los veinticinco en un paciente delgado, y un árbol familiar vertical de tres generaciones. Eso es herencia autosómica dominante. La mitocondrial es un distractor ingenioso, pero se hereda por la madre, y aquí la línea es paterna.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 33',
      stem: 'Un paciente de 17 años, obeso, se realiza chequeo con glicemia de ayuno que resulta en 130, por lo que se repite este examen obteniendo 137, no ha presentado síntomas. En el examen físico destaca presencia de acantosis nígricans en pliegue cervical y acrocordones.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Diabetes mellitus tipo 1' },
        { letter: 'B', text: 'Diabetes mellitus tipo 2' },
        { letter: 'C', text: 'Diabetes mellitus autoinmune' },
        { letter: 'D', text: 'Intolerancia a la glucosa' },
        { letter: 'E', text: 'Glicemia de ayuno alterada' },
      ],
      correct: 'B',
      explanation: 'Dos glicemias de ayuno ≥ 126 mg/dL confirman diabetes. En un adolescente obeso, asintomático y con acantosis nigricans y acrocordones (resistencia a la insulina), el tipo más probable es la DM2, pese a la edad.',
      say: {
        stem: 'Y una tercera, del EUNACOM de julio de dos mil trece. Paciente de diecisiete años, obeso, con una glicemia de ayuno de ciento treinta, que al repetirla da ciento treinta y siete. No tiene síntomas. Al examen, acantosis nigricans en el cuello y acrocordones.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: tipo uno, tipo dos, diabetes autoinmune, intolerancia a la glucosa, o glicemia de ayuno alterada. Piénsalo.',
        answer: 'Es la B, tipo dos. Esta pregunta pone a prueba si te dejas llevar por la edad. Diecisiete años hace pensar en tipo uno, pero el mecanismo dice otra cosa: obesidad, acantosis y acrocordones son resistencia a la insulina, y el cuadro es asintomático, sin catabolismo. Además, dos glicemias de ayuno sobre ciento veintiséis ya son diabetes, así que la intolerancia y la glicemia alterada quedan fuera. Ese corte lo vemos a fondo en la próxima clase.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Mecanismo', tag: '¿Queda insulina?', kind: 'key', items: [
          { t: 'Tipo 1: déficit absoluto', d: 'Joven, flaco, cetosis: insulina',
            say: 'Cerremos con las reglas de oro. La tipo uno es un déficit absoluto de insulina: joven, flaco, con cetosis, y la insulina es obligatoria.' },
          { t: 'Tipo 2: resistencia', d: 'Obesidad y acantosis: metformina',
            say: 'La tipo dos es resistencia a la insulina: obesidad y acantosis, y parte con metformina, aunque el paciente sea adolescente.' },
        ] },
        { title: 'Formas especiales', tag: 'Las que se preguntan', kind: 'alert', items: [
          { t: 'LADA: adulto + autoinmunidad + falla a orales', d: 'Anti-GAD positivo: insulina precoz',
            say: 'LADA: adulto delgado, con otra autoinmunidad y falla a los orales. Anti GAD positivo e insulina precoz.' },
          { t: 'MODY: joven delgado + 3 generaciones', d: 'Anticuerpos negativos: sulfonilureas',
            say: 'MODY: joven delgado con tres generaciones afectadas, anticuerpos negativos, y responde a sulfonilureas.' },
        ] },
        { title: 'Laboratorio', tag: 'Si hay duda', kind: 'criteria', items: [
          { t: 'Péptido C = insulina propia', d: 'Anticuerpos = autoinmunidad',
            say: 'Y si hay duda, el péptido C mide la insulina propia y los anticuerpos confirman la autoinmunidad. Si te llevas una sola idea de hoy: pregúntate siempre si al páncreas le queda insulina, porque esa respuesta decide el tratamiento. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Tipos de diabetes: ¿le queda insulina al páncreas?',
    root: N('start', 'Diabetes confirmada', 'Edad, peso, debut y familia',
      'Tienes un paciente con diabetes confirmada. Antes de tratar, mira cuatro cosas: la edad, el peso, cómo debutó y quiénes más son diabéticos en la familia.',
      ['', N('q', '¿Fenotipo de resistencia?', 'Adulto obeso vs joven o delgado',
        '¿Tiene el fenotipo clásico de resistencia a la insulina, o es joven, delgado o con un debut catabólico rápido?',
        ['Adulto obeso', N('ok', 'DM tipo 2', 'Metformina + estilo de vida',
          'Adulto obeso, con acantosis: diabetes tipo dos. Péptido C conservado, y parte con metformina y cambios de estilo de vida.')],
        ['Joven o delgado', N('q', '¿Cuál es el contexto?', 'Péptido C y anticuerpos',
          'Si es joven, delgado o debuta con catabolismo, sospecha una tipo uno, una LADA o una MODY, y apóyate en el péptido C y los anticuerpos.',
          ['Niño con CAD', N('alert', 'DM tipo 1', 'Insulina obligatoria',
            'Niño o adolescente que debuta con baja de peso o cetoacidosis: tipo uno. Déficit absoluto, e insulina obligatoria.')],
          ['Adulto, falla a orales', N('alert', 'LADA', 'Anti-GAD + → insulina precoz',
            'Adulto delgado, con otra autoinmunidad y que no responde a los orales: LADA. Anti GAD positivo, e insulina precoz.')],
          ['Familia vertical', N('do', 'MODY', 'Sulfonilureas en dosis bajas',
            'Joven delgado, anticuerpos negativos y tres generaciones afectadas: MODY. Se controla muy bien con dosis bajas de sulfonilureas.')])])]),
  },
};
