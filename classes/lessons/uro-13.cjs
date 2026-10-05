// Clase 13.13 (Urología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_urologia.cjs (uro-13). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (1.11.1.006) no tiene preguntas reales propias; de la búsqueda por tema se usaron Agosto 2021 P101 (prostatitis aguda, APE alto y disuria: ciprofloxacino) y Diciembre 2018 P48 (fiebre, dolor perineal y sedimento infectado: ciprofloxacino).
// Sin pregunta real sobre el masaje prostático: una pregunta del libro como "Caso representativo".
// Epididimitis (uro-06) y ITU del hombre se enlazan, no se repiten. Cistostomía suprapúbica: dato del libro.
// Imágenes: no se encontró en los libros ya extraídos una imagen clínica de prostatitis (solo hay un dibujo del tacto rectal en Bates); ver informe.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'uro-13',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Prostatitis aguda y crónica: sepsis, antibióticos prolongados y prostatodinia',
      say: 'Bienvenido. Hoy vemos la prostatitis. Es un tema corto pero muy preguntado, porque tiene una trampa clásica: lo que nunca debes hacer en la forma aguda. El examen pregunta cómo se reconoce, qué antibiótico sirve, cuánto tiempo se da, y cómo se distingue de la prostatodinia, que no es una infección.',
    },

    {
      type: 'points',
      kicker: 'Clasificación',
      title: 'Cuatro categorías NIH',
      cards: [
        { title: 'Infecciosas', tag: 'Con bacterias', kind: 'alert', items: [
          { t: 'I: bacteriana aguda', d: 'Fiebre, sepsis, urocultivo positivo',
            say: 'La categoría uno es la prostatitis bacteriana aguda: una infección grave, con fiebre, compromiso general y urocultivo positivo.' },
          { t: 'II: bacteriana crónica', d: 'ITU recurrentes, mismo germen',
            say: 'La categoría dos es la crónica: infecciones urinarias que recaen siempre por el mismo germen, con cultivo de secreción prostática positivo.' },
          { t: 'E. coli en 75 a 80%', d: 'Klebsiella, Proteus, Pseudomonas',
            say: 'El agente principal es Escherichia coli, en tres de cada cuatro casos. Siguen otras enterobacterias, como Klebsiella, Proteus y Pseudomonas.' },
        ] },
        { title: 'No infecciosas', tag: 'Cultivos estériles', kind: 'key', items: [
          { t: 'III: dolor pélvico crónico', d: 'Más de 3 meses, cultivos negativos',
            say: 'La categoría tres es el síndrome de dolor pélvico crónico, también llamado prostatodinia. Es dolor perineal de más de tres meses con urocultivos estériles. Si hay leucocitos en la secreción es la IIIa inflamatoria, y si no hay, la IIIb.' },
          { t: 'IV: asintomática', d: 'Hallazgo en biopsia o semen',
            say: 'La categoría cuatro es un hallazgo: inflamación vista en una biopsia o en el semen, sin síntomas. No se trata.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Prostatitis aguda',
      title: 'Cuadro agudo y la trampa',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'cause', t: 'Infección de la próstata', s: 'Enterobacterias' },
        { id: 'b', col: 1, row: 0, k: 'effect', t: 'Fiebre, calofríos, disuria', s: 'Dolor perineal al sentarse' },
        { id: 'c', col: 2, row: 0, k: 'effect', t: 'Próstata caliente y dolorosa', s: 'Tacto rectal suave' },
        { id: 'd', col: 3, row: 0, k: 'trap', t: 'Masaje prostático', s: 'Contraindicado' },
        { id: 'e', col: 4, row: 0, k: 'alert', t: 'Bacteriemia y shock', s: 'Translocación venosa' },
        { id: 'f', col: 2, row: 2, k: 'mech', t: 'Retención urinaria', s: 'Evitar sonda uretral' },
        { id: 'g', col: 3, row: 2, k: 'good', t: 'Cistostomía suprapúbica', s: 'Por punción' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' }, { from: 'a', to: 'f' }, { from: 'f', to: 'g' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'Debut brusco y febril',
          say: 'La prostatitis aguda comienza de golpe, con fiebre alta, calofríos, malestar general, dolor lumbosacro y perineal, y disuria. Un dato típico es el dolor punzante en el periné al sentarse.' },
        { show: ['c'], note: 'Tacto rectal: próstata dolorosa',
          say: 'Al tacto rectal suave la próstata se siente aumentada, caliente y exquisitamente dolorosa. Eso basta para sospechar el diagnóstico.' },
        { show: ['d', 'e'], note: 'Nunca masajear',
          say: 'Aquí está la regla de oro del examen. Está contraindicado el masaje prostático y también la palpación enérgica. Una glándula infectada y congestiva, al ser comprimida, empuja bacterias hacia los plexos venosos que la rodean. El resultado puede ser una bacteriemia y un shock séptico. Para el diagnóstico basta la clínica y el urocultivo de orina emitida.' },
        { show: ['f', 'g'], note: 'Retención: cistostomía',
          say: 'Si el paciente entra en retención de orina, pasar una sonda por la uretra es muy doloroso y puede lesionar la glándula inflamada. La conducta que plantea el libro es drenar la vejiga con una cistostomía suprapúbica por punción.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Antibiótico que penetre, y largo',
      cards: [
        { title: 'Por qué esos fármacos', tag: 'Farmacocinética', kind: 'key', items: [
          { t: 'Barrera hematoprostática', d: 'Frena a la mayoría de los betalactámicos',
            say: 'La próstata tiene una barrera lipofílica que impide el paso de muchos antibióticos, sobre todo los betalactámicos.' },
          { t: 'Fluoroquinolonas y cotrimoxazol', d: 'Liposolubles, penetran el tejido',
            say: 'Por eso se eligen las fluoroquinolonas, como el ciprofloxacino, y el cotrimoxazol: se disuelven bien en lípidos y llegan al tejido prostático.' },
        ] },
        { title: 'Cómo se indican', tag: 'Dosis y duración', kind: 'pharma', items: [
          { t: 'Ambulatorio: ciprofloxacino', d: '500 mg cada 12 h por vía oral',
            say: 'En un cuadro leve o moderado, ciprofloxacino quinientos miligramos cada doce horas por vía oral. Otras opciones son levofloxacino o cotrimoxazol forte.' },
          { t: 'Duración de 3 a 4 semanas', d: 'Evita la cronicidad',
            say: 'La duración es larga, de tres a cuatro semanas, para erradicar los focos bacterianos dentro de los acinos y evitar que pase a crónica. Esto se pregunta: no es un curso de siete días como una cistitis.' },
          { t: 'Con sepsis: hospitalizar', d: 'Ceftriaxona EV ± gentamicina',
            say: 'Si hay sepsis, vómitos o comorbilidades, se hospitaliza, se reanima y se da ceftriaxona endovenosa, con o sin gentamicina. Después de cuarenta y ocho horas sin fiebre se pasa a vía oral hasta completar cuatro semanas.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Crónicas',
      title: 'Categorías II, III y IV',
      head: ['Categoría', 'Cultivo / hallazgo', 'Tratamiento'],
      rows: [
        { cells: ['II · bacteriana crónica', 'Mismo germen; Meares-Stamey (+)', 'Fluoroquinolona 6-12 semanas'],
          say: 'En la crónica, la prueba de Meares y Stamey, que sí usa masaje, se hace en fase crónica, nunca en la aguda. Se trata con fluoroquinolonas por seis a doce semanas.' },
        { cells: ['IIIa · inflamatoria', 'Leucocitos, cultivos negativos', 'Alfa bloqueante + AINE'],
          say: 'En el dolor pélvico inflamatorio hay leucocitos pero no bacterias. Se usan alfa bloqueantes como tamsulosina, antiinflamatorios y, a veces, un ensayo corto de antibiótico.' },
        { cells: ['IIIb · prostatodinia', 'Sin leucocitos ni bacterias', 'Pregabalina, kinesioterapia'],
          say: 'En la prostatodinia no hay inflamación ni infección. Es un dolor miofascial del piso pélvico, y se maneja con neuromoduladores como pregabalina, fisioterapia del piso pélvico y apoyo psicológico. No necesita antibióticos prolongados.' },
        { cells: ['IV · asintomática', 'Leucocitos en biopsia o semen', 'No se trata'],
          say: 'Y la asintomática es un hallazgo inocuo, que no requiere tratamiento.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del hombre febril con dolor perineal a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Próstata caliente y dolorosa', 'Antibiótico, sin masaje', 'Masaje prostático'],
          say: 'Prostatitis aguda: el masaje está contraindicado, porque puede producir bacteriemia y shock.' },
        { cells: ['Prostatitis aguda', 'Ciprofloxacino', 'Betalactámico o nitrofurantoína'],
          say: 'Se elige un antibiótico que penetre la próstata, no uno que solo funciona en la orina, como la nitrofurantoína.' },
        { cells: ['Duración', '3 a 4 semanas', 'Siete días'],
          say: 'El curso corto lleva a recaída y cronicidad.' },
        { cells: ['Retención urinaria', 'Cistostomía suprapúbica', 'Sonda uretral'],
          say: 'La retención se drena por vía suprapúbica, no por la uretra inflamada.' },
        { cells: ['Dolor perineal, cultivos estériles', 'Pregabalina, fisioterapia', 'Más antibióticos'],
          say: 'Si el cultivo es negativo y el dolor lleva meses, piensa en prostatodinia y no sigas dando antibióticos.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 46 años, fiebre de 39,3 °C con calofríos, dolor lumbosacro, dolor punzante en el periné al sentarse y disuria de 24 horas. Sin globo vesical. Al tacto rectal suave, próstata discretamente aumentada, muy caliente y exquisitamente dolorosa.',
      question: '¿Cuál es la conducta adecuada?',
      options: [
        { letter: 'A', text: 'Masaje prostático para obtener secreción' },
        { letter: 'B', text: 'Urocultivo y ciprofloxacino por 4 semanas' },
        { letter: 'C', text: 'Nitrofurantoína por 7 días' },
        { letter: 'D', text: 'Antiinflamatorios y observación' },
        { letter: 'E', text: 'Biopsia prostática' },
      ],
      correct: 'B',
      explanation: 'Es una prostatitis bacteriana aguda. Se toma urocultivo sin masaje y se inicia una fluoroquinolona de buena penetración prostática por 3 a 4 semanas. El masaje puede causar bacteriemia y shock séptico.',
      say: {
        stem: 'Un hombre de cuarenta y seis años con fiebre de treinta y nueve grados, calofríos, dolor lumbosacro, dolor perineal al sentarse y disuria de un día. Al tacto rectal suave, la próstata está caliente y exquisitamente dolorosa.',
        question: '¿Cuál es la conducta adecuada?',
        options: 'Las opciones: masaje prostático; urocultivo y ciprofloxacino por cuatro semanas; nitrofurantoína por siete días; antiinflamatorios y observación; o biopsia prostática. Piénsalo.',
        answer: 'Es la B. Es una prostatitis aguda: se toma el urocultivo de orina emitida y se parte con ciprofloxacino, que penetra la próstata, por tres a cuatro semanas. La A es la trampa: el masaje puede provocar bacteriemia y shock séptico. La nitrofurantoína no alcanza concentraciones útiles en el tejido prostático.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 42 años con 24 horas de fiebre de 39,5 °C, calofríos, dolor perineal que empeora al sentarse y disuria. Al tacto rectal suave, próstata caliente, tumefacta y muy dolorosa.',
      question: '¿Cuál de las siguientes acciones está formalmente contraindicada?',
      options: [
        { letter: 'A', text: 'Tomar urocultivo de chorro medio antes de los antibióticos' },
        { letter: 'B', text: 'Realizar masaje prostático vigoroso para obtener secreción' },
        { letter: 'C', text: 'Administrar antipiréticos y AINE para el dolor' },
        { letter: 'D', text: 'Indicar ciprofloxacino oral por 4 semanas' },
        { letter: 'E', text: 'Realizar cistostomía suprapúbica si hay retención aguda de orina' },
      ],
      correct: 'B',
      explanation: 'En la prostatitis aguda el masaje está contraindicado: comprimir una glándula infectada puede diseminar bacterias a la sangre y causar shock séptico. El diagnóstico se hace con la clínica y el urocultivo.',
      say: {
        stem: 'Un hombre de cuarenta y dos años con un día de fiebre alta, calofríos, dolor perineal al sentarse y disuria. Al tacto rectal suave, la próstata está caliente, tumefacta y muy dolorosa.',
        question: '¿Cuál de las siguientes acciones está formalmente contraindicada?',
        options: 'Las opciones: urocultivo antes de los antibióticos; masaje prostático vigoroso; antipiréticos y antiinflamatorios; ciprofloxacino por cuatro semanas; o cistostomía suprapúbica si hay retención. Piénsalo.',
        answer: 'Es la B. Masajear una próstata infectada empuja bacterias a la sangre y puede producir un shock séptico. Todo lo demás es manejo correcto. El masaje con la prueba de Meares y Stamey se reserva solo para la prostatitis crónica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 101',
      stem: 'Un paciente de 56 años consulta por disminución del calibre miccional, asociado a disuria de esfuerzos de 3 meses de evolución. Hace 7 días se agrega disuria, polaquiuria y malestar. Se solicita APE, que resulta 14,7 ng/ml (valor normal: menor a 4 ng/ml). El tratamiento inicial más adecuado es:',
      question: '¿Cuál es el tratamiento inicial más adecuado?',
      options: [
        { letter: 'A', text: 'Tamsulosina' },
        { letter: 'B', text: 'Nitrofurantoína' },
        { letter: 'C', text: 'Ciprofloxacino' },
        { letter: 'D', text: 'Dutasteride' },
        { letter: 'E', text: 'Doxazosina' },
      ],
      correct: 'C',
      explanation: 'La clínica de infección urinaria con APE muy elevado sugiere prostatitis aguda. Se trata con ciprofloxacino, y el APE se repite después de tratarla.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un hombre de cincuenta y seis años con tres meses de chorro débil, y desde hace una semana disuria, polaquiuria y malestar. El antígeno prostático sale en catorce coma siete, con un normal bajo cuatro.',
        question: '¿Cuál es el tratamiento inicial más adecuado?',
        options: 'Las opciones: tamsulosina; nitrofurantoína; ciprofloxacino; dutasteride; o doxazosina. Piénsalo.',
        answer: 'Es la C. La infección reciente más un antígeno muy elevado indican prostatitis aguda, que sube el antígeno por inflamación. Se trata con ciprofloxacino, y el antígeno se repite después, no antes. Los bloqueadores alfa y el dutasteride son para la hiperplasia, y la nitrofurantoína no penetra la próstata.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 48',
      stem: 'Un hombre de 50 años consulta por disuria dolorosa y fiebre, asociada a malestar general, polaquiuria y dolor perineal. Al examen físico presenta fiebre alta, con hemodinamia estable. Se realizan exámenes entre los que destacan sedimento de orina con leucocitos +++, bacterias ++. Su urocultivo está pendiente. ¿Cuál es la conducta terapéutica más adecuada?',
      question: '¿Cuál es la conducta terapéutica más adecuada?',
      options: [
        { letter: 'A', text: 'Ciprofloxacino' },
        { letter: 'B', text: 'Amoxicilina' },
        { letter: 'C', text: 'Claritromicina' },
        { letter: 'D', text: 'Nitrofurantoína' },
        { letter: 'E', text: 'Doxiciclina' },
      ],
      correct: 'A',
      explanation: 'Fiebre, disuria y dolor perineal en un hombre sugieren prostatitis aguda o una infección urinaria febril. El ciprofloxacino cubre ambas.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Un hombre de cincuenta años con disuria dolorosa, fiebre alta, polaquiuria y dolor perineal, estable, con sedimento de orina infectado. El urocultivo está pendiente.',
        question: '¿Cuál es la conducta terapéutica más adecuada?',
        options: 'Las opciones: ciprofloxacino; amoxicilina; claritromicina; nitrofurantoína; o doxiciclina. Piénsalo.',
        answer: 'Es la A. En un hombre con fiebre y dolor perineal no sabes si es prostatitis o una infección urinaria alta, pero el ciprofloxacino cubre ambas y penetra la próstata. Fíjate que en un hombre febril no se usa nitrofurantoína, porque no alcanza niveles en tejido.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: prostatitis',
      cards: [
        { title: 'Aguda', tag: 'Categoría I', kind: 'alert', items: [
          { t: 'Fiebre, periné doloroso, próstata caliente', d: 'Prostatitis aguda',
            say: 'Cerremos con las reglas de oro. Fiebre, dolor perineal y una próstata caliente y dolorosa: prostatitis aguda.' },
          { t: 'Nunca masaje prostático', d: 'Riesgo de bacteriemia y shock',
            say: 'Nunca se masajea la próstata en la fase aguda.' },
          { t: 'Retención: cistostomía', d: 'No sonda uretral',
            say: 'Si hay retención de orina, se drena por vía suprapúbica.' },
        ] },
        { title: 'Tratamiento y crónicas', tag: 'Largo plazo', kind: 'key', items: [
          { t: 'Ciprofloxacino 3 a 4 semanas', d: 'Aguda; crónica 6 a 12',
            say: 'El tratamiento es ciprofloxacino o cotrimoxazol por tres a cuatro semanas en la aguda, y seis a doce en la crónica.' },
          { t: 'Cultivos estériles: prostatodinia', d: 'Pregabalina y fisioterapia',
            say: 'Si el dolor es crónico y los cultivos son negativos, es dolor pélvico crónico: pregabalina y fisioterapia, no más antibióticos. Si te llevas una sola idea de hoy: en la prostatitis aguda no se masajea, y el antibiótico debe penetrar la próstata y darse por semanas. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Prostatitis: del cuadro febril al tratamiento',
    root: N('start', 'Varón con fiebre y dolor perineal', 'Disuria, próstata dolorosa',
      'Un hombre con fiebre, calofríos, dolor perineal y disuria. Al tacto rectal suave, la próstata está caliente y muy dolorosa.',
      ['Siempre', N('alert', 'Sin masaje prostático', 'Urocultivo de orina emitida',
        'Se sospecha prostatitis bacteriana aguda. No se masajea. Se toma urocultivo y se parte el tratamiento.',
        ['Estable, vía oral', N('ok', 'Ciprofloxacino 3 a 4 semanas', 'O cotrimoxazol forte',
          'Si está estable y tolera la vía oral, ciprofloxacino, levofloxacino o cotrimoxazol por tres a cuatro semanas.')],
        ['Sepsis o vómitos', N('refer', 'Hospitalizar: ceftriaxona EV', 'Con o sin gentamicina',
          'Si hay sepsis, se hospitaliza, se reanima y se da ceftriaxona endovenosa, y luego vía oral hasta completar cuatro semanas.')],
        ['Retención urinaria', N('do', 'Cistostomía suprapúbica', 'Por punción',
          'Si hay retención, se drena la vejiga por vía suprapúbica en lugar de pasar una sonda por la uretra.')],
      )],
    ),
  },
};
