// Clase 14.20 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-20). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El banco real no tiene pregunta de PAAF versus biopsia abierta de la masa cervical: ese tema usa un caso representativo del libro.
// Disfonía crónica y nasofibroscopía ya se vieron en orl-16; aquí se retoman solo como paso de la secuencia.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-20',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cáncer de cabeza y cuello: las banderas rojas, la masa cervical del fumador y lo que nunca se hace con ella',
      say: 'Bienvenido. Cerramos el libro de otorrino con el cáncer de cabeza y cuello. El examen casi nunca pregunta tratamientos oncológicos. Pregunta si reconoces las banderas rojas y qué examen pides primero. Y hay una prohibición que aparece una y otra vez: la biopsia abierta de un ganglio del cuello. Veamos por qué.',
    },

    {
      type: 'points',
      kicker: 'Epidemiología',
      title: 'Carcinoma escamoso y sus causas',
      cards: [
        { title: 'El tumor', tag: 'Más del 90%', kind: 'key', items: [
          { t: 'Carcinoma de células escamosas', d: 'Más del 90% de los cánceres de cabeza y cuello',
            say: 'Más del noventa por ciento de los cánceres malignos de cabeza y cuello son carcinomas de células escamosas, también llamados epidermoides o espinocelulares. Nacen en el epitelio de la mucosa de laringe, orofaringe, cavidad oral, hipofaringe y nasofaringe.' },
        ] },
        { title: 'Causas', tag: 'Dos perfiles', kind: 'criteria', items: [
          { t: 'Tabaco y alcohol', d: 'Sinergia: riesgo hasta 30 veces mayor',
            say: 'La causa clásica es el tabaquismo crónico junto con el consumo nocivo de alcohol. No se suman, se potencian: el riesgo puede multiplicarse hasta por treinta.' },
          { t: 'VPH-16 en la orofaringe', d: 'Adultos jóvenes, sin tabaquismo pesado',
            say: 'Hay un segundo perfil, que ha crecido en las últimas décadas: cáncer de orofaringe, en amígdala y base de la lengua, en adultos más jóvenes sin tabaquismo pesado, por virus del papiloma humano oncogénico, sobre todo el tipo dieciséis. Tiene mejor pronóstico y responde bien a la radioterapia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Banderas rojas',
      title: 'Cinco señales de alarma en ORL',
      cards: [
        { title: 'Derivación prioritaria', tag: 'Banderas rojas', kind: 'alert', items: [
          { t: 'Disfonía mayor de 3 semanas', d: 'En fumador: cáncer de laringe',
            say: 'La primera ya la conoces de la clase de disfonía: una disfonía persistente de más de dos a tres semanas en un adulto fumador es sospecha de cáncer de cuerda vocal o laringe.' },
          { t: 'Otalgia unilateral con otoscopía normal', d: 'Dolor referido desde faringe o laringe',
            say: 'La segunda es la otalgia unilateral persistente con otoscopía rigurosamente normal. Es dolor referido de un tumor de la base de la lengua, la amígdala, la hipofaringe o la laringe.' },
          { t: 'Úlcera o placa que no cicatriza', d: 'Leucoplaquia o eritroplasia, más de 2 semanas',
            say: 'La tercera es una úlcera indurada, o una placa blanca o roja, leucoplaquia o eritroplasia, en la lengua o la boca, que no cicatriza en dos semanas.' },
          { t: 'Odinofagia o disfagia unilateral', d: 'Progresiva, con cuerpo extraño constante',
            say: 'La cuarta es la odinofagia o disfagia unilateral y progresiva, con sensación constante de cuerpo extraño en la faringe.' },
          { t: 'Obstrucción nasal unilateral en adulto', d: 'Epistaxis u otitis con efusión: cavum',
            say: 'Y la quinta: obstrucción nasal unilateral, epistaxis recurrente de un lado u otitis con efusión unilateral en un adulto. Eso es un cáncer de cavum, la nasofaringe, vinculado al virus de Epstein-Barr, y el tumor tapa la trompa de Eustaquio.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Por qué duele el oído sano',
      nodes: [
        { id: 'tu', col: 0, row: 1, k: 'cause', t: 'Tumor en faringe o laringe', s: 'Base de lengua, amígdala' },
        { id: 'ne', col: 1, row: 0, k: 'mech', t: 'Nervio glosofaríngeo', s: 'Rama de Jacobson' },
        { id: 'va', col: 1, row: 2, k: 'mech', t: 'Nervio vago', s: 'Rama de Arnold' },
        { id: 'ot', col: 2, row: 1, k: 'effect', t: 'Otalgia refleja', s: 'Unilateral y persistente' },
        { id: 'no', col: 3, row: 1, k: 'alert', t: 'Otoscopía normal', s: 'Bandera roja mayor' },
      ],
      edges: [
        { from: 'tu', to: 'ne' },
        { from: 'tu', to: 'va' },
        { from: 'ne', to: 'ot' },
        { from: 'va', to: 'ot' },
        { from: 'ot', to: 'no' },
      ],
      steps: [
        { show: ['tu', 'ne', 'va'], note: 'La faringe y el oído comparten nervios',
          say: 'Veamos por qué un tumor de la garganta da dolor de oído. La orofaringe y la hipofaringe están inervadas por el glosofaríngeo y el vago, y esos mismos nervios mandan ramas al oído: la rama de Jacobson, del glosofaríngeo, y la de Arnold, del vago.' },
        { show: ['ot', 'no'], note: 'El cerebro lo interpreta como dolor del oído',
          say: 'El cerebro recibe la señal por esa vía compartida y la proyecta al oído. Por eso el paciente dice que le duele el oído, pero el oído está sano. Cuando un adulto, sobre todo fumador, tiene otalgia unilateral persistente con otoscopía normal, tienes que mirar la garganta, y eso se hace con nasofibroscopía.' },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Cáncer y lesión premaligna de la lengua',
      images: [
        { src: 'biblioteca/17_otorrino/orl-20/01_carcinoma-de-lengua__bates_p286.jpg', label: 'Carcinoma en el borde izquierdo de la lengua', credit: 'Bates 12.ª ed., Fig. 7-71' },
        { src: 'biblioteca/17_otorrino/orl-20/02_leucoplaquia-displasia-lengua__bailey-love_p788.jpg', label: 'Leucoplaquia con displasia severa en el borde lateral de la lengua', credit: 'Bailey & Love 27.ª ed., Fig. 48.11 (a)' },
      ],
      steps: [
        { note: 'Carcinoma: lesión irregular en el borde lateral',
          say: 'Esta es la imagen de un carcinoma en el lado izquierdo de la lengua. Mira que no es una lesión lisa: tiene una superficie irregular y áspera, con áreas blanquecinas. Los bordes laterales y el piso de la boca son los sitios donde más hay que buscar.' },
        { note: 'Leucoplaquia: la placa blanca que no sale',
          say: 'Y esta es una leucoplaquia con displasia severa en el borde lateral de la lengua: una placa blanquecina de superficie lisa. Es premaligna. Una placa de este tipo que no desaparece en dos semanas se deriva y se biopsia.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Regla de los 80',
      title: 'La masa cervical del adulto mayor de 40',
      nodes: [
        { id: 'ma', col: 0, row: 1, k: 'start', t: 'Masa cervical persistente', s: 'Mayor de 40, más de 3 semanas' },
        { id: 'ne', col: 1, row: 1, k: 'effect', t: '80% neoplásicas', s: 'Solo 20% benignas o infecciosas' },
        { id: 'ml', col: 2, row: 1, k: 'risk', t: '80% malignas', s: 'De las neoplásicas' },
        { id: 'me', col: 3, row: 0, k: 'alert', t: '80% metástasis ganglionares', s: 'De las malignas' },
        { id: 'es', col: 3, row: 2, k: 'alert', t: '80% de carcinoma escamoso', s: 'Primario sobre las clavículas' },
      ],
      edges: [
        { from: 'ma', to: 'ne' },
        { from: 'ne', to: 'ml' },
        { from: 'ml', to: 'me' },
        { from: 'me', to: 'es' },
      ],
      steps: [
        { show: ['ma', 'ne'], note: 'En el adulto, la masa casi siempre es tumor',
          say: 'La masa cervical en un adulto sigue la regla de los ochenta de Skandalakis. Vale para una masa cervical no tiroidea, persistente por más de tres semanas, en mayor de cuarenta años. Primero: ochenta por ciento son neoplásicas.' },
        { show: ['ml', 'me'], note: 'La mayoría son metástasis, no tumores primarios',
          say: 'Segundo: de las neoplásicas, ochenta por ciento son malignas. Tercero: de las malignas, ochenta por ciento son metástasis ganglionares, y el resto, tumores primarios como los linfomas.' },
        { show: ['es'], note: 'El primario está en la vía aerodigestiva superior',
          say: 'Y cuarto: de esas metástasis, ochenta por ciento vienen de un carcinoma escamoso de la vía aerodigestiva superior, por encima de las clavículas. Entonces, una masa pétrea e indolora en el cuello de un fumador mayor de cuarenta años es una metástasis de un carcinoma escamoso hasta demostrar lo contrario. Y hay que encontrar el tumor primario.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Regla de oro',
      title: 'Estudio de la masa cervical',
      nodes: [
        { id: 'o1', col: 0, row: 1, k: 'start', t: '1. Examen ORL y nasofibroscopía', s: 'Cavum, orofaringe, hipofaringe, laringe' },
        { id: 'o2', col: 1, row: 1, k: 'good', t: '2. PAAF guiada por ecografía', s: 'Sensibilidad y especificidad sobre 95%' },
        { id: 'o3', col: 2, row: 1, k: 'mech', t: '3. TAC de cuello y tórax', s: 'Etapificación' },
        { id: 'bx', col: 1, row: 2, k: 'trap', t: 'Biopsia abierta del ganglio', s: 'Prohibida sin estudio previo' },
      ],
      edges: [
        { from: 'o1', to: 'o2' },
        { from: 'o2', to: 'o3' },
        { from: 'o2', to: 'bx', label: 'no' },
      ],
      steps: [
        { show: ['o1'], note: 'Primero buscar el tumor primario',
          say: 'La secuencia tiene un orden. Primero, examen otorrinolaringológico completo con nasofibroscopía: se recorre toda la mucosa del cavum, la orofaringe, la hipofaringe y la laringe, buscando el tumor primario.' },
        { show: ['o2', 'o3'], note: 'PAAF para confirmar, TAC para etapificar',
          say: 'Segundo, punción aspirativa con aguja fina, guiada por ecografía. Es el método de primera línea, con sensibilidad y especificidad sobre noventa y cinco por ciento, y no altera la anatomía del ganglio. Con eso se pide un escáner de cuello y tórax con contraste para etapificar.' },
        { show: ['bx'], note: 'Abrir el ganglio siembra el tumor',
          say: 'Y la prohibición: no se hace biopsia incisional ni escisional abierta del ganglio sin estudio previo. Abrir una adenopatía metastásica rompe las barreras fasciales del cuello, siembra células tumorales en el tejido subcutáneo, empeora la sobrevida y multiplica la recidiva cervical. Si el primario aparece, el ganglio se tratará junto con él.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Masa cervical según la edad',
      head: ['Edad', 'Causa más frecuente', 'Ejemplos', 'Conducta inicial'],
      rows: [
        { cells: ['Menor de 15 años', 'Infecciosa o inflamatoria', 'Adenitis, adenoflemón', 'Antibiótico; ecografía si no cede'],
          say: 'Esta tabla separa por edad. En el niño, la masa cervical suele ser infecciosa, una adenitis reactiva o un adenoflemón. Se da antibiótico y se hace ecografía si no cede.' },
        { cells: ['16 a 40 años', 'Congénita, infecciosa o linfoma', 'Quiste tirogloso, quiste branquial, mononucleosis', 'Ecografía; PAAF si sospecha de linfoma'],
          say: 'En el adulto joven aparecen los quistes congénitos, como el tirogloso o el branquial, las infecciones como la mononucleosis, y el linfoma. Se hace ecografía y PAAF si se sospecha linfoma.' },
        { cells: ['Mayor de 40 años', 'Neoplásica maligna', 'Metástasis de carcinoma escamoso', 'PAAF y nasofibroscopía; no biopsia abierta'],
          say: 'Y en el mayor de cuarenta años, la causa más frecuente es la neoplasia maligna: la metástasis de un carcinoma escamoso. Se hace PAAF y nasofibroscopía urgente, y no biopsia abierta.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la bandera roja o la masa cervical, al examen que se pide primero.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hombre de 58 años, fumador de 30 cigarrillos al día por 35 años y bebedor diario de vino, consulta por un aumento de volumen indoloro en la región lateral derecha del cuello, de 1 mes y creciente. Desde hace 3 semanas tiene un dolor punzante en el oído derecho al tragar, sin secreción ni sordera. Se palpa una masa de 3,5 cm en el nivel II derecho, pétrea, adherida a planos profundos e indolora. La otoscopía de ambos oídos es normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Biopsia excisional del ganglio en pabellón' },
        { letter: 'B', text: 'Ciclo de cefadroxilo oral por 21 días y control' },
        { letter: 'C', text: 'Nasofibroscopía para buscar el tumor primario y PAAF guiada por ecografía' },
        { letter: 'D', text: 'Drenaje de la masa pensando en un quiste sebáceo' },
        { letter: 'E', text: 'Observar y reevaluar en 3 meses' },
      ],
      correct: 'C',
      explanation: 'Masa pétrea y fija en un fumador mayor de 40 años, más otalgia refleja con otoscopía normal: metástasis de un carcinoma escamoso de la vía aerodigestiva superior hasta demostrar lo contrario. Se hace examen ORL con nasofibroscopía y PAAF guiada por ecografía, y luego TAC para etapificar. Está prohibida la biopsia abierta sin estudio previo.',
      say: {
        stem: 'Un hombre de cincuenta y ocho años, fumador pesado y bebedor diario, con un mes de aumento de volumen indoloro en el cuello a la derecha, y tres semanas de dolor de oído derecho al tragar. La masa mide tres centímetros y medio, es pétrea y está adherida a planos profundos. La otoscopía es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: biopsia excisional del ganglio en pabellón; cefadroxilo por veintiún días; nasofibroscopía y punción con aguja fina guiada por ecografía; drenaje por sospecha de quiste sebáceo; u observar tres meses. Piénsalo.',
        answer: 'Es la C. Dos banderas rojas juntas: la masa pétrea del fumador mayor de cuarenta años y la otalgia refleja con oído normal. Hay que buscar el primario con nasofibroscopía y confirmar con punción. La A es la tentación: parece lógico sacar el ganglio y analizarlo. Pero abrirlo siembra el tumor y empeora el pronóstico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un hombre de 62 años, fumador crónico, consulta por una masa en la región lateral izquierda del cuello de 4 semanas de evolución, indolora y pétrea, de 3 cm. Refiere además otalgia refleja izquierda ocasional con otoscopía normal.',
      question: '¿Cuál es el método de elección para la confirmación anatomopatológica y cuál procedimiento está formalmente contraindicado?',
      options: [
        { letter: 'A', text: 'Elección: biopsia incisional abierta en pabellón. Contraindicada: PAAF bajo ecografía' },
        { letter: 'B', text: 'Elección: PAAF guiada por ecografía. Contraindicada: biopsia ganglionar abierta antes de descartar un tumor primario en la vía aérea superior' },
        { letter: 'C', text: 'Elección: aspiración con trócar grueso por sospecha de quiste sebáceo. Contraindicada: tomografía computarizada' },
        { letter: 'D', text: 'Elección: exéresis de urgencia de la glándula tiroides. Contraindicada: nasofibroscopía flexible' },
        { letter: 'E', text: 'Elección: cefadroxilo oral por 21 días. Contraindicada: evaluación por otorrinolaringólogo' },
      ],
      correct: 'B',
      explanation: 'En un fumador mayor de 40 años, una masa cervical pétrea es una metástasis de carcinoma escamoso hasta demostrar lo contrario. La PAAF guiada por ecografía es el método citológico de primera línea y no disemina células. Está prohibida la biopsia abierta del ganglio sin evaluar antes la vía aérea superior y sin PAAF.',
      say: {
        stem: 'Un caso representativo del banco. Un hombre de sesenta y dos años, fumador crónico, con una masa pétrea e indolora de tres centímetros en el cuello, de cuatro semanas, y otalgia refleja con otoscopía normal.',
        question: '¿Cuál es el método de elección para confirmar el diagnóstico, y cuál procedimiento está contraindicado?',
        options: 'Las opciones son combinaciones. A: biopsia abierta como elección y punción como contraindicada. B: punción con aguja fina como elección y biopsia abierta como contraindicada. Las otras tres proponen un trócar grueso, quitar la tiroides o dar antibiótico. Piénsalo.',
        answer: 'Es la B. La punción aspirativa con aguja fina, guiada por ecografía, confirma sin alterar la anatomía. Y lo que está formalmente contraindicado es la biopsia abierta del ganglio antes de buscar el primario. La A es justamente el error al revés: cambia el método de elección por el prohibido.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 7',
      stem: 'Un paciente de 66 años, fumador de 20 paquetes año, consulta por otalgia derecha, de algunos meses de evolución, asociado a odinofagia y disfagia, a lo que se le ha agregado atoramiento con algunos alimentos y cambios en la resonancia de la voz.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Cáncer de esófago' },
        { letter: 'B', text: 'Disfunción temporomandibular' },
        { letter: 'C', text: 'Cáncer de hipofaringe' },
        { letter: 'D', text: 'Faringitis crónica' },
        { letter: 'E', text: 'Cáncer de laringe' },
      ],
      correct: 'C',
      explanation: 'Es un cáncer de hipofaringe clásico. El cáncer de laringe suele presentar disfonía progresiva, sin los otros síntomas, y el cáncer de esófago presenta disfagia sin los otros síntomas.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Un paciente de sesenta y seis años, fumador, con meses de dolor de oído derecho, odinofagia y disfagia, a los que se agregan atoramientos con la comida y cambios en la resonancia de la voz.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: cáncer de esófago; disfunción temporomandibular; cáncer de hipofaringe; faringitis crónica; o cáncer de laringe. Piénsalo.',
        answer: 'Es la C. Aquí está la otalgia refleja que vimos hoy, acompañada de disfagia, atoramiento y cambio en la resonancia de la voz, que es lo que produce un tumor en la hipofaringe. En el cáncer de laringe lo central sería la disfonía progresiva, y en el de esófago, la disfagia sola. Y la disfunción temporomandibular no explica nada de lo demás.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 2',
      stem: 'Un paciente de 58 años, fumador de 20 paquetes año, consulta por disfonía de 3 semanas de evolución, asociada a ligera odinofagia. Al examen físico, además, se palpa una adenopatía submandibular, de consistencia aumentada.',
      question: '¿Cuál es el examen más adecuado para proseguir el estudio?',
      options: [
        { letter: 'A', text: 'TAC de cuello' },
        { letter: 'B', text: 'TAC de tórax' },
        { letter: 'C', text: 'Ecografía de cuello' },
        { letter: 'D', text: 'Nasofibrolaringoscopía' },
        { letter: 'E', text: 'Endoscopía digestiva alta' },
      ],
      correct: 'D',
      explanation: 'Toda disfonía crónica se estudia con nasofibrolaringoscopía. Además, el cuadro sugiere un cáncer de laringe, así que con mayor razón está indicada.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil diecinueve, y une esta clase con la de disfonía. Un paciente de cincuenta y ocho años, fumador, con tres semanas de disfonía, ligera odinofagia y una adenopatía submandibular de consistencia aumentada.',
        question: '¿Cuál es el examen más adecuado para proseguir el estudio?',
        options: 'Las opciones: escáner de cuello; escáner de tórax; ecografía de cuello; nasofibrolaringoscopía; o endoscopía digestiva alta. Piénsalo.',
        answer: 'Es la D. Este es el primer paso de la secuencia de hoy: antes que cualquier imagen, se mira la mucosa para encontrar el tumor primario. Aquí el primario casi seguro es la laringe, y la adenopatía dura es su metástasis. Las imágenes vienen después, para etapificar.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: cáncer de cabeza y cuello',
      cards: [
        { title: 'Reconocerlo', tag: 'Banderas rojas', kind: 'alert', items: [
          { t: 'Escamoso en más del 90%', d: 'Tabaco y alcohol; VPH-16 en orofaringe',
            say: 'Cerremos con las reglas de oro. El cáncer de cabeza y cuello es carcinoma escamoso en más del noventa por ciento, por tabaco y alcohol, y por virus del papiloma humano en la orofaringe del adulto joven.' },
          { t: 'Otalgia con otoscopía normal', d: 'Más disfonía larga o úlcera que no cierra',
            say: 'Las banderas rojas: otalgia unilateral con oído normal, disfonía de más de tres semanas, y úlcera o placa de la boca que no cicatriza.' },
        ] },
        { title: 'Estudiarlo', tag: 'Secuencia', kind: 'key', items: [
          { t: 'Masa pétrea mayor de 40: cáncer', d: 'Nasofibroscopía y PAAF por ecografía',
            say: 'Una masa cervical pétrea en un fumador mayor de cuarenta años es una metástasis de carcinoma escamoso, hasta demostrar lo contrario. Se estudia con nasofibroscopía y punción con aguja fina guiada por ecografía.' },
          { t: 'Nunca biopsia abierta del ganglio', d: 'Siembra el tumor y empeora el pronóstico',
            say: 'Si te llevas una sola idea de hoy: la masa cervical del fumador mayor de cuarenta años se estudia con nasofibroscopía y punción, y jamás con biopsia abierta del ganglio. Y con esto cerramos el libro de otorrinolaringología. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de banderas rojas y masa cervical en el adulto',
    root: N('start', 'Adulto con sospecha oncológica', '¿Qué bandera roja tiene?',
      'Un adulto, sobre todo fumador, con una posible bandera roja oncológica. Veamos cuál.',
      ['Masa cervical pétrea', N('alert', 'Metástasis de escamoso', 'Hasta demostrar lo contrario',
        'Una masa cervical pétrea en un fumador mayor de cuarenta años es una metástasis de carcinoma escamoso hasta demostrar lo contrario.',
        ['Estudio inicial', N('do', 'Nasofibroscopía y PAAF por ecografía', 'Buscar el tumor primario',
          'Se hace nasofibroscopía completa y punción con aguja fina guiada por ecografía.',
          ['PAAF positiva', N('refer', 'TAC y derivación oncológica', 'Etapificación',
            'Con la confirmación, se pide escáner de cuello y tórax y se deriva a oncología de cabeza y cuello.')],
        )],
        ['Biopsia abierta', N('alert', 'Prohibida sin estudio previo', 'Siembra el tumor',
          'La biopsia incisional o escisional abierta está prohibida sin estudio previo: siembra el tumor.')],
      )],
      ['Disfonía de más de 3 semanas', N('do', 'Nasofibroscopía', 'Descartar cáncer de laringe',
        'La disfonía persistente en un fumador se estudia con nasofibroscopía, como vimos en la clase de disfonía.')],
      ['Otalgia unilateral, otoscopía normal', N('do', 'Examinar faringe y laringe', 'Nasofibroscopía',
        'Es dolor referido: se busca el primario en la base de lengua, amígdala, hipofaringe o laringe.')],
      ['Úlcera o placa oral, más de 2 semanas', N('refer', 'Derivar y biopsiar', 'Leucoplaquia o eritroplasia',
        'Una úlcera indurada o una placa blanca o roja que no cicatriza se deriva y se biopsia.')],
      ['Obstrucción nasal o efusión unilateral', N('refer', 'Sospecha de cáncer de cavum', 'Nasofibroscopía y biopsia',
        'En un adulto, obstrucción nasal o otitis con efusión de un solo lado hace sospechar un cáncer de cavum.')],
    ),
  },
};
