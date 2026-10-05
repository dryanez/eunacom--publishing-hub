// Clase 13.8 (Urología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_urologia.cjs (uro-08). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El código de la clase (1.12.1.001) no tiene preguntas reales propias; de la búsqueda por tema se usó Diciembre 2017 P78 (nódulo duro con APE alto, biopsia).
// Descartada: Julio 2017 P41 (85 años, APE 7,5, clave biopsia): su propia explicación dice que es una mala pregunta y que a esa edad no se debió pedir el APE.
// No usadas aquí por ser de tratamiento (clase uro-09): Enero 2023 P103 y Diciembre 2022 P82. Diciembre 2024 P18 la usa hem-22.
// Sin pregunta real sobre nódulo con APE normal, Gleason/ISUP ni plazos GES: tres preguntas del libro como "Caso representativo".
// Seguridad: el libro tamiza desde los 50 sin tope de edad; el banco real indica tamizaje entre 50 y 70 años. Se enseña el tope y no se tamiza a adultos mayores de rutina.
// No se dice el número de la garantía GES (ver informe). La estratificación de D'Amico y la etapificación quedan para uro-09.
// Enlace con uro-03: zonas de McNeal y APE bajo finasteride (se multiplica por dos) no se repiten.
// Imágenes: Bailey & Love 27.ª ed., Fig. 75.17a y 75.18b.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'uro-08',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cáncer de próstata: APE, tacto rectal, biopsia, Gleason y garantía GES',
      say: 'Bienvenido. Hoy vemos cómo se sospecha y se confirma el cáncer de próstata. Es el cáncer más frecuente en el hombre en Chile, y el examen insiste en reglas muy concretas: qué valor de APE obliga a actuar, por qué un tacto rectal sospechoso manda sobre un APE normal, cómo se lee el Gleason y en cuántos días se garantiza la biopsia. El tratamiento según el riesgo lo vemos en la clase siguiente.',
    },

    {
      type: 'points',
      kicker: 'Epidemiología',
      title: 'Quién tiene riesgo y dónde nace',
      cards: [
        { title: 'Factores de riesgo', tag: 'Demostrados', kind: 'key', items: [
          { t: 'Edad avanzada', d: 'Excepcional antes de los 45 años',
            say: 'La incidencia sube con la edad y es excepcional antes de los cuarenta y cinco años.' },
          { t: 'Etnia afrodescendiente', d: 'Mayor riesgo',
            say: 'La etnia afrodescendiente también aumenta el riesgo.' },
          { t: 'Familiar de primer grado', d: 'Duplica o triplica el riesgo',
            say: 'Un padre o hermano con cáncer de próstata duplica o triplica el riesgo, sobre todo si fue diagnosticado antes de los sesenta y cinco años o si hay mutaciones BRCA.' },
        ] },
        { title: 'Dónde nace', tag: 'Zona periférica', kind: 'normal', items: [
          { t: 'Zona periférica posterior', d: 'Cerca de 75% de los casos',
            say: 'Alrededor de tres cuartos de los adenocarcinomas nacen en la zona periférica. Las zonas de McNeal ya las vimos en la clase de hiperplasia prostática, donde la zona de transición era la de la HPB.' },
          { t: 'Lejos de la uretra', d: 'No obstruye al inicio',
            say: 'Como está lejos de la uretra, el tumor inicial no obstruye. Y como es posterior, queda al alcance del dedo en el tacto rectal.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Por qué se diagnostica con APE y tacto',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'cause', t: 'Tumor en zona periférica', s: 'Posterior y subcapsular' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'No comprime la uretra', s: 'Sin síntomas obstructivos' },
        { id: 'c', col: 2, row: 1, k: 'risk', t: 'Etapa precoz asintomática', s: 'El paciente se siente sano' },
        { id: 'd', col: 3, row: 0, k: 'good', t: 'Tacto rectal', s: 'Palpa el nódulo' },
        { id: 'e', col: 3, row: 2, k: 'good', t: 'APE', s: 'Marcador en sangre' },
        { id: 'f', col: 4, row: 1, k: 'alert', t: 'Biopsia confirma', s: 'Único método definitivo' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' },
        { from: 'c', to: 'e' }, { from: 'd', to: 'f' }, { from: 'e', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b', 'c'], note: 'Sin síntomas al inicio',
          say: 'Diferente de la hiperplasia benigna, el cáncer inicial no da síntomas urinarios. Nace en la periferia, no estrecha la uretra, y el paciente llega a consulta sano o con el examen alterado.' },
        { show: ['d', 'e'], note: 'Dos herramientas que se complementan',
          say: 'Por eso la detección se apoya en dos herramientas: el tacto rectal y el antígeno prostático específico. Ninguna reemplaza a la otra, y esa idea es la que más cae en el examen.' },
        { show: ['f'], note: 'Solo la biopsia confirma',
          say: 'Pero ninguna de las dos confirma nada. El diagnóstico definitivo es siempre la biopsia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'APE',
      title: 'Qué es el antígeno prostático',
      cards: [
        { title: 'Qué mide', tag: 'Concepto clave', kind: 'key', items: [
          { t: 'Órgano-específico, no cáncer-específico', d: 'Proteasa que licúa el semen',
            say: 'El APE es una proteasa que produce el epitelio prostático para licuar el semen. Es específico de la próstata, pero no del cáncer.' },
          { t: 'Sube sin cáncer', d: 'Es la trampa del examen',
            say: 'Por eso sube también con hiperplasia benigna, prostatitis aguda, retención urinaria, instrumentación y eyaculación reciente.' },
        ] },
        { title: 'Cómo se usa', tag: 'Tamizaje', kind: 'criteria', items: [
          { t: 'Desde los 50 años', d: '45 si hay riesgo alto',
            say: 'El tamizaje, junto al tacto rectal, parte a los cincuenta años en la población general, y a los cuarenta y cinco si hay familiar de primer grado o raza negra.' },
          { t: 'No se tamiza al adulto mayor', d: 'Más allá de 70 años',
            say: 'Y más allá de los setenta años no se tamiza de rutina. Recuerda que en las preguntas de adultos muy mayores con tumores pequeños, la conducta es observar.' },
          { t: 'Corte clásico: 4 ng/mL', d: 'Bajo finasteride se multiplica por 2',
            say: 'El corte tradicional es cuatro nanogramos por mililitro. Y si el paciente usa finasteride, ya sabes que el valor medido se multiplica por dos, como vimos en la clase de hiperplasia.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Cinética del APE',
      title: 'Parámetros que afinan la sospecha',
      head: ['Parámetro', 'Normal', 'Sospecha', 'Para qué sirve'],
      rows: [
        { cells: ['APE total', 'Menos de 4', 'Más de 4; más de 10 alto', 'Marcador inicial'],
          say: 'El APE total es el marcador inicial. Sobre cuatro es sospechoso, y sobre diez la probabilidad de cáncer pasa de cincuenta por ciento.' },
        { cells: ['APE libre sobre total', 'Más de 20%', 'Menos de 15 a 18%', 'Zona gris 4 a 10'],
          say: 'En la zona gris, entre cuatro y diez, el porcentaje de APE libre ayuda. Una fracción libre baja, menos de quince a dieciocho por ciento, orienta a cáncer.' },
        { cells: ['Densidad del APE', 'Menos de 0,15', 'Más de 0,15', 'Próstata grande o tumor'],
          say: 'La densidad divide el APE por el volumen de la próstata. Sobre cero coma quince, es más probable un tumor que una próstata benigna grande.' },
        { cells: ['Velocidad del APE', 'Estable', 'Más de 0,75 al año', 'Sube con valor basal normal'],
          say: 'Y la velocidad: un aumento de más de cero coma setenta y cinco nanogramos en un año sugiere proliferación maligna, incluso con valores absolutos normales.' },
        { cells: ['Tacto rectal', 'Liso, simétrico', 'Nódulo pétreo, asimetría', 'Biopsia directa'],
          say: 'El tacto sospechoso, por su parte, lleva directo a biopsia, sin importar el APE.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Conducta',
      title: 'Cuándo se hace la biopsia',
      cards: [
        { title: 'Indicaciones', tag: 'Se preguntan', kind: 'alert', items: [
          { t: 'Nódulo pétreo: biopsia', d: 'Aunque el APE sea normal',
            say: 'La regla de oro: un tacto rectal con nódulo duro, pétreo o asimetría es indicación formal de biopsia, aunque el APE sea normal. Entre quince y veinticinco por ciento de los cánceres relevantes cursan con APE bajo cuatro.' },
          { t: 'APE sobre 4 persistente', d: 'Confirmado a las 4 a 6 semanas',
            say: 'Si el APE sale elevado, descartas infección urinaria y lo repites a las cuatro a seis semanas. Si persiste, se biopsia. En la zona gris, un APE libre bajo quince por ciento refuerza la indicación.' },
        ] },
        { title: 'Cómo se hace', tag: 'Procedimiento', kind: 'key', items: [
          { t: 'Transrectal guiada por ecografía', d: 'O fusión con resonancia',
            say: 'La biopsia es guiada por ecografía transrectal, o con fusión con resonancia magnética multiparamétrica. Es el único método confirmatorio.' },
          { t: '10 a 12 cilindros', d: 'Con profilaxis antibiótica',
            say: 'Se toman entre diez y doce cilindros de la glándula, con profilaxis antibiótica.' },
        ] },
      ],
    },

    {
      type: 'image',
      light: true,
      kicker: 'Así se ve',
      title: 'Ecografía transrectal y cilindros',
      images: [
        { src: 'biblioteca/19_urologia/uro-08/01_ecografia-transrectal-zonas-prostata__bailey-love_p1408.jpg', label: 'Ecografía transrectal de próstata normal: zona de transición y zona periférica', credit: 'Bailey & Love 27.ª ed., Fig. 75.17a' },
        { src: 'biblioteca/19_urologia/uro-08/02_cilindros-biopsia-prostatica__bailey-love_p1408.jpg', label: 'Cilindros de biopsia separados por lóbulo derecho e izquierdo', credit: 'Bailey & Love 27.ª ed., Fig. 75.18b' },
      ],
      steps: [
        { note: 'Transición adelante, periférica atrás',
          say: 'Mira el corte transversal. Adelante, la zona de transición, la de la hiperplasia. Atrás y en forma de cuernos, la zona periférica, donde nace el cáncer y donde llega el dedo en el tacto rectal.' },
        { note: 'Cilindros por lóbulo',
          say: 'Y aquí, los cilindros de la biopsia, en dos cajas, una por cada lóbulo. Se toman muestras sistemáticas de los dos lados, por eso son diez a doce.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Histología',
      title: 'Cómo se lee el Gleason',
      cards: [
        { title: 'Score de Gleason', tag: 'Dos patrones', kind: 'key', items: [
          { t: 'Patrones de 1 a 5', d: '1 bien diferenciado, 5 indiferenciado',
            say: 'El patólogo gradúa la arquitectura de las glándulas de uno a cinco. Uno es bien diferenciado, y cinco, láminas de células sin diferenciar.' },
          { t: 'Primer número: el más abundante', d: 'Segundo: el siguiente más frecuente',
            say: 'El Gleason suma dos patrones. El primer número es el patrón que más predomina, y el segundo es el que sigue. Así, tres más cuatro es siete.' },
        ] },
        { title: 'La trampa', tag: 'Mismo 7, distinto pronóstico', kind: 'alert', items: [
          { t: '3+4 y 4+3 no son iguales', d: 'Predominio del patrón 4 empeora',
            say: 'Los dos suman siete, pero no son lo mismo. En cuatro más tres predomina el patrón cuatro, y el pronóstico es peor que en tres más cuatro.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Gleason e ISUP',
      title: 'Equivalencia con los grupos ISUP',
      head: ['Grupo ISUP', 'Gleason', 'Pronóstico'],
      rows: [
        { cells: ['1', '6 o menos (3+3)', 'Excelente; vigilancia activa'],
          say: 'El grupo uno es Gleason seis o menos, de excelente pronóstico y candidato prototipo para vigilancia activa.' },
        { cells: ['2', '7 (3+4)', 'Intermedio favorable'],
          say: 'El grupo dos es tres más cuatro, riesgo intermedio favorable.' },
        { cells: ['3', '7 (4+3)', 'Intermedio desfavorable'],
          say: 'El grupo tres es cuatro más tres. Mismo siete, peor pronóstico.' },
        { cells: ['4', '8', 'Alto riesgo'],
          say: 'El grupo cuatro es Gleason ocho: alto riesgo.' },
        { cells: ['5', '9 a 10', 'Muy alto riesgo'],
          say: 'Y el grupo cinco, Gleason nueve y diez, es de muy alto riesgo y obliga a estudiar la diseminación sistémica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Garantías GES',
      title: 'Plazos del cáncer de próstata',
      cards: [
        { title: 'Plazos garantizados', tag: 'Personas de 15 años y más', kind: 'criteria', items: [
          { t: 'Biopsia en 30 días', d: 'Desde la sospecha fundada',
            say: 'El cáncer de próstata tiene garantía GES. La confirmación con biopsia se garantiza dentro de treinta días desde la sospecha.' },
          { t: 'Tratamiento primario en 60 días', d: 'Desde la confirmación histológica',
            say: 'El tratamiento primario, quirúrgico o radioterápico, se inicia dentro de sesenta días desde la confirmación.' },
          { t: 'Deprivación androgénica en 30 días', d: 'Desde la indicación médica',
            say: 'Y la terapia de deprivación androgénica, dentro de treinta días desde la indicación. Con esto, cuando sospeches un cáncer, derivas con garantía.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del tacto y el APE a la biopsia.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cáncer de próstata: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Nódulo pétreo y APE normal', 'Biopsia', 'Tranquilizar por el APE'],
          say: 'Nódulo duro con APE normal: biopsia. El error es tranquilizar por el APE.' },
        { cells: ['APE alto con infección urinaria', 'Tratar y repetir', 'Biopsiar sin repetir'],
          say: 'APE alto durante una infección urinaria: se trata, se repite, y si persiste alto se biopsia.' },
        { cells: ['APE entre 4 y 10', 'APE libre sobre total', 'Mandar a cirugía'],
          say: 'En la zona gris, usa el porcentaje de APE libre. Menos de quince por ciento orienta a cáncer.' },
        { cells: ['Gleason 4+3', 'Grupo ISUP 3', 'Igualarlo al 3+4'],
          say: 'Gleason cuatro más tres es grupo tres. El error es igualarlo a tres más cuatro.' },
        { cells: ['Sospecha de cáncer', 'Biopsia en 30 días', 'Confundir los plazos'],
          say: 'Biopsia en treinta días, tratamiento en sesenta.' },
        { cells: ['Adulto muy mayor, APE de rutina', 'No tamizar', 'Biopsiar por APE alto'],
          say: 'En un adulto muy mayor no se tamiza de rutina.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 63 años, asintomático, en chequeo de salud. El tacto rectal muestra una próstata algo aumentada con un nódulo indurado, pétreo, de 1 cm en el lóbulo derecho. Trae un APE total de 2,2 ng/mL y se siente aliviado.',
      question: '¿Cuál es la conducta?',
      options: [
        { letter: 'A', text: 'Control con APE en 1 año, porque es normal' },
        { letter: 'B', text: 'Biopsia prostática transrectal ecoguiada' },
        { letter: 'C', text: 'Antibióticos por 4 semanas por prostatitis' },
        { letter: 'D', text: 'Solicitar APE libre sobre total para decidir' },
        { letter: 'E', text: 'Iniciar finasteride y repetir el APE' },
      ],
      correct: 'B',
      explanation: 'Un nódulo pétreo es indicación de biopsia aunque el APE sea normal, porque entre 15 y 25% de los cánceres relevantes tienen APE bajo 4. Se deriva a urología para biopsia con garantía GES.',
      say: {
        stem: 'Un hombre de sesenta y tres años, asintomático. En el tacto rectal tiene un nódulo duro, pétreo, de un centímetro en el lóbulo derecho. Su APE total es dos coma dos y está aliviado por eso.',
        question: '¿Cuál es la conducta?',
        options: 'Las opciones: control en un año; biopsia transrectal ecoguiada; antibióticos por cuatro semanas; pedir APE libre sobre total; o iniciar finasteride. Piénsalo.',
        answer: 'Es la B. El nódulo pétreo manda sobre el APE: se biopsia siempre. La A es la tentación del paciente, y la E es peor, porque el finasteride baja el APE y enmascara el diagnóstico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 78',
      stem: 'Un paciente de 60 años, que durante una infección urinaria, se detectó APE de 14,2 ng/ml y un tacto rectal, con presencia de un nódulo prostático duro. Una vez tratada con éxito su infección, el APE bajó a 12 ng/ml.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Prostatectomía radical' },
        { letter: 'B', text: 'Seguimiento con APE y tacto en 1 año' },
        { letter: 'C', text: 'Ecografía de próstata' },
        { letter: 'D', text: 'Resección transuretral' },
        { letter: 'E', text: 'Biopsia prostática' },
      ],
      correct: 'E',
      explanation: 'Tanto por el nódulo como por el APE mayor a 4, está indicada la biopsia.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un hombre de sesenta años, con una infección urinaria, tiene un APE de catorce coma dos y un nódulo duro en el tacto. Tratada la infección, el APE baja a doce.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: prostatectomía radical; seguimiento en un año; ecografía de próstata; resección transuretral; o biopsia prostática. Piénsalo.',
        answer: 'Es la E. Aunque la infección explique parte del APE, el valor sigue muy sobre cuatro y además hay un nódulo duro, y cualquiera de los dos basta para biopsiar. La A es la trampa: no se opera sin confirmación histológica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 61 años, asintomático. Tacto rectal normal. APE total de 6,2 ng/mL; descartada una infección urinaria, se repite a las 4 semanas: 6,4 ng/mL, con relación APE libre/total de 9%.',
      question: '¿Cuál es la conducta diagnóstica más adecuada?',
      options: [
        { letter: 'A', text: 'Tamsulosina y control con APE en 1 año' },
        { letter: 'B', text: 'Biopsia prostática guiada por ecografía transrectal' },
        { letter: 'C', text: 'Cintigrama óseo de entrada' },
        { letter: 'D', text: 'Finasteride por 6 meses para ver si el APE baja' },
        { letter: 'E', text: 'Tranquilizar porque no hay nódulo' },
      ],
      correct: 'B',
      explanation: 'APE confirmado en la zona gris con fracción libre de 9%, menor de 15%: alto riesgo de cáncer. Corresponde biopsia. El finasteride enmascararía el APE y retrasaría el diagnóstico.',
      say: {
        stem: 'Un hombre de sesenta y un años, asintomático, con tacto rectal normal. Su APE es seis coma dos, y repetido a las cuatro semanas, sin infección, seis coma cuatro, con APE libre sobre total de nueve por ciento.',
        question: '¿Cuál es la conducta diagnóstica más adecuada?',
        options: 'Las opciones: tamsulosina y control en un año; biopsia; cintigrama óseo; finasteride por seis meses; o tranquilizar. Piénsalo.',
        answer: 'Es la B. APE confirmado en zona gris y fracción libre bajo quince por ciento. La D es la trampa, porque el finasteride baja el APE y retrasa el diagnóstico. Y la E es el error de creer que sin nódulo no hay riesgo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'La biopsia prostática informa: adenocarcinoma acinar con patrón Gleason primario 4 en 60% del tumor y patrón secundario 3 en 40%.',
      question: '¿Cuál es el score de Gleason y el grupo ISUP?',
      options: [
        { letter: 'A', text: 'Gleason 3+4=7; ISUP 2' },
        { letter: 'B', text: 'Gleason 4+3=7; ISUP 3' },
        { letter: 'C', text: 'Gleason 4+4=8; ISUP 4' },
        { letter: 'D', text: 'Gleason 3+3=6; ISUP 1' },
        { letter: 'E', text: 'Gleason 4+5=9; ISUP 5' },
      ],
      correct: 'B',
      explanation: 'El primer número es el patrón más abundante (4) y el segundo el siguiente (3): 4+3=7, grupo ISUP 3, de peor pronóstico que 3+4.',
      say: {
        stem: 'La biopsia informa un adenocarcinoma con patrón Gleason primario cuatro en sesenta por ciento del tumor, y secundario tres en cuarenta por ciento.',
        question: '¿Cuál es el score de Gleason y el grupo ISUP?',
        options: 'Las opciones: tres más cuatro, grupo dos; cuatro más tres, grupo tres; cuatro más cuatro, grupo cuatro; tres más tres, grupo uno; o cuatro más cinco, grupo cinco. Piénsalo.',
        answer: 'Es la B. El patrón que más predomina va primero: cuatro más tres, siete, grupo tres. La A es la trampa, porque el mismo siete tiene mejor pronóstico cuando predomina el patrón tres.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'En relación con las garantías explícitas en salud para el cáncer de próstata en Chile, ¿cuál es el plazo máximo para realizar la confirmación diagnóstica con biopsia desde la sospecha clínica fundada?',
      question: '¿Cuál es el plazo máximo?',
      options: [
        { letter: 'A', text: '10 días' },
        { letter: 'B', text: '30 días' },
        { letter: 'C', text: '60 días' },
        { letter: 'D', text: '90 días' },
        { letter: 'E', text: '180 días' },
      ],
      correct: 'B',
      explanation: 'La biopsia se garantiza dentro de 30 días desde la sospecha. Una vez confirmada, el tratamiento primario comienza dentro de 60 días.',
      say: {
        stem: 'Sobre las garantías explícitas en salud para el cáncer de próstata en Chile: ¿cuál es el plazo máximo para la biopsia confirmatoria desde la sospecha fundada?',
        question: '¿Cuál es el plazo máximo?',
        options: 'Las opciones: diez días; treinta días; sesenta días; noventa días; o ciento ochenta días. Piénsalo.',
        answer: 'Es la B, treinta días. El sesenta de la C es el plazo para iniciar el tratamiento una vez confirmada la biopsia, y es el distractor más tentador.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: diagnóstico del cáncer de próstata',
      cards: [
        { title: 'Sospecha', tag: 'APE y tacto', kind: 'alert', items: [
          { t: 'Nódulo pétreo: biopsia siempre', d: 'Aunque el APE sea normal',
            say: 'Cerremos con las reglas de oro. Un nódulo pétreo en el tacto rectal se biopsia, aunque el APE sea normal.' },
          { t: 'APE sube sin cáncer', d: 'Repetir a las 4 a 6 semanas',
            say: 'El APE es específico de órgano, no de cáncer. Se repite a las cuatro a seis semanas y, en la zona gris, la fracción libre bajo quince por ciento orienta a cáncer.' },
        ] },
        { title: 'Confirmación', tag: 'Biopsia y GES', kind: 'key', items: [
          { t: 'Biopsia ecoguiada, 10-12 cilindros', d: 'Gleason: el primer número predomina',
            say: 'Solo la biopsia confirma. En el Gleason, el primer número es el patrón dominante, y cuatro más tres es peor que tres más cuatro.' },
          { t: 'GES: biopsia 30 días', d: 'Tratamiento a los 60 días',
            say: 'La garantía es treinta días para la biopsia y sesenta para iniciar el tratamiento. Si te llevas una sola idea de hoy: un tacto rectal con nódulo duro se biopsia, aunque el APE sea normal. Nos vemos en la próxima clase, donde vemos el tratamiento según el riesgo.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Sospecha de cáncer de próstata',
    root: N('start', 'Hombre de 50 a 70 años', 'Tacto rectal y APE',
      'Un hombre en edad de tamizaje. Lo evalúas con tacto rectal y APE, y recuerda que se complementan y ninguno reemplaza al otro.',
      ['Tacto con nódulo pétreo o asimetría', N('alert', 'Tacto sospechoso', 'Sin importar el APE',
        'Si el tacto muestra un nódulo duro o asimetría, la sospecha es alta, aunque el APE sea normal.',
        ['Derivar', N('refer', 'Biopsia transrectal ecoguiada', '10 a 12 cilindros, en 30 días GES',
          'Se deriva a urología para biopsia con profilaxis antibiótica, garantizada dentro de treinta días.')],
      )],
      ['Tacto normal, APE sobre 4', N('q', 'Confirmar el APE', 'A las 4 a 6 semanas, sin infección',
        'Si el tacto es normal pero el APE está elevado, primero descartas infección urinaria y repites el valor a las cuatro a seis semanas.',
        ['Persiste entre 4 y 10', N('do', 'Pedir APE libre sobre total', 'Menos de 15 a 18%',
          'En la zona gris se pide la fracción libre. Si es menor de quince a dieciocho por ciento, hay riesgo alto de cáncer y se biopsia.')],
        ['Persiste sobre 10', N('refer', 'Biopsia prostática', 'Más de 50% de probabilidad',
          'Con APE sobre diez, la probabilidad de cáncer pasa de cincuenta por ciento, y se biopsia.')],
      )],
      ['Tacto normal, APE normal', N('ok', 'Seguimiento de tamizaje', 'Sin tamizar sobre 70 años',
        'Si ambos son normales, se sigue el tamizaje. Pasados los setenta años, ya no se tamiza de rutina.')],
    ),
  },
};
