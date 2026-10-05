// Clase 13.9 (Urología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_urologia.cjs (uro-09). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El código de la clase (4.01.1.013) no tiene preguntas reales propias; de la búsqueda por tema se usó Enero 2023 P103 (vigilancia activa en adulto mayor, Gleason 3+3 mínimo).
// No usada: Diciembre 2022 P82 (misma situación y misma respuesta que Enero 2023 P103, no enseña nada distinto).
// No usadas por ser de otras clases: Diciembre 2024 P18 (hem-22), Enero 2023 P105 y Diciembre 2022 P123 (hipercalcemia, endo-16).
// Sin pregunta real sobre opciones curativas en riesgo intermedio, flare up ni incontinencia posprostatectomía: tres preguntas del libro como "Caso representativo".
// Cifras de secuelas: se sigue el texto principal (disfunción eréctil 30 a 80%, incontinencia 5 a 15%); la tabla del libro dice 30 a 70% y 5 a 10% (ver informe, categoría B).
// El diagnóstico, APE, Gleason y GES se ven en uro-08 y no se repiten.
// Imágenes: Bailey & Love 27.ª ed., Fig. 75.27a y 75.27b.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'uro-09',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cáncer de próstata: tratamiento según el grupo de riesgo, de la vigilancia activa a la deprivación androgénica',
      say: 'Bienvenido. En la clase anterior llegamos al diagnóstico del cáncer de próstata. Hoy decidimos qué hacer con él, y la respuesta depende de dos cosas: el grupo de riesgo y la esperanza de vida del paciente. El examen pregunta quién se vigila, quién se opera o se irradia, y por qué un paciente metastásico se castra, con una trampa famosa con el leuprolide.',
    },

    {
      type: 'table',
      kicker: 'Estratificación',
      title: 'Grupos de riesgo de D’Amico',
      head: ['Riesgo', 'Criterios', 'Estudio', 'Manejo inicial'],
      rows: [
        { cells: ['Bajo', 'T1c-T2a, APE <10, ISUP 1', 'Sin imágenes', 'Vigilancia activa'],
          say: 'En el riesgo bajo, tumor pequeño, APE bajo diez y grupo ISUP uno, no se piden imágenes de etapificación, y el manejo de elección es la vigilancia activa. La prostatectomía y la braquiterapia son alternativas.' },
        { cells: ['Intermedio', 'T2b, o APE 10-20, o ISUP 2-3', 'TAC y cintigrama óseo', 'Cirugía o radioterapia + TDA corta'],
          say: 'En el riesgo intermedio basta uno de estos criterios: tumor en estadio dos b, APE entre diez y veinte, o Gleason siete. Se pide TAC y cintigrama óseo, y se ofrece prostatectomía con linfadenectomía, o radioterapia con deprivación androgénica corta, de cuatro a seis meses.' },
        { cells: ['Alto', 'T2c-T3a, o APE >20, o ISUP 4-5', 'TAC, cintigrama y RM', 'Radioterapia + TDA 2-3 años'],
          say: 'En el alto riesgo, tumor en estadio dos c o tres a, APE sobre veinte o grupo cuatro o cinco, se agrega resonancia. El manejo es radioterapia con deprivación androgénica prolongada, de dos a tres años, o cirugía en casos seleccionados.' },
        { cells: ['Metastásico', 'Metástasis óseas o ganglionares', 'Cintigrama y TAC', 'Deprivación androgénica'],
          say: 'Y con metástasis, el tratamiento ya no es local: es hormonal, con deprivación androgénica continua.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Enfermedad localizada',
      title: 'Vigilar o tratar con intención curativa',
      cards: [
        { title: 'Vigilancia activa', tag: 'Bajo riesgo', kind: 'normal', items: [
          { t: 'Gleason 6, APE bajo 10, T1c-T2a', d: 'Evita el sobretratamiento',
            say: 'Es el estándar para el cáncer de bajo riesgo: Gleason seis, grupo uno, APE bajo diez. La idea es evitar tratar un tumor que quizás nunca dará problemas.' },
          { t: 'APE cada 3 a 6 meses', d: 'Tacto semestral y rebiopsia o RM',
            say: 'No es no hacer nada. Se controla el APE cada tres a seis meses, tacto rectal cada seis meses y se repite la biopsia o resonancia. Se trata solo si hay progresión.' },
          { t: 'Adulto mayor con tumor mínimo', d: 'También se observa',
            say: 'Y en un adulto mayor con un tumor mínimo, la conducta también es vigilar. Lo vemos en una pregunta real.' },
        ] },
        { title: 'Tratamiento curativo', tag: 'Riesgo intermedio y alto', kind: 'key', items: [
          { t: 'Expectativa de vida sobre 10 años', d: 'Si no, no se justifica',
            say: 'El tratamiento curativo se indica en riesgo intermedio y alto cuando el paciente tiene una expectativa de vida de más de diez años.' },
          { t: 'Prostatectomía radical', d: 'Próstata, vesículas y ganglios',
            say: 'Una opción es la prostatectomía radical, que extirpa la próstata, las vesículas seminales y los ganglios obturatrices e ilíacos.' },
          { t: 'Radioterapia externa', d: 'Con braquiterapia u hormonas',
            say: 'La otra es la radioterapia externa, que según el riesgo se combina con braquiterapia o con hormonoterapia. Ambas tienen sobrevida global equivalente, y se elige según el perfil de efectos secundarios que prefiera el paciente.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Efectos adversos',
      title: 'Secuelas de cirugía y radioterapia',
      cards: [
        { title: 'Prostatectomía radical', tag: 'Daño local', kind: 'alert', items: [
          { t: 'Disfunción eréctil', d: '30 a 80%, bandeletas de Walsh',
            say: 'Se produce por lesión de las bandeletas neurovasculares de Walsh, y es frecuente, entre treinta y ochenta por ciento.' },
          { t: 'Incontinencia de esfuerzo', d: '5 a 15%, esfínter estriado',
            say: 'La incontinencia es de esfuerzo, por daño del esfínter estriado. Mejora en los primeros meses, y la conducta inicial es kinesiterapia del piso pélvico.' },
        ] },
        { title: 'Radioterapia', tag: 'Daño tardío', kind: 'pharma', items: [
          { t: 'Proctitis actínica', d: 'Rectorragia indolora crónica',
            say: 'La radioterapia no produce incontinencia inmediata, pero sí proctitis actínica, con sangrado rectal indoloro y crónico.' },
          { t: 'Cistitis actínica', d: 'Hematuria y polaquiuria',
            say: 'También cistitis actínica, con hematuria y polaquiuria.' },
          { t: 'Disfunción eréctil progresiva', d: 'A los 2 o 3 años',
            say: 'Y disfunción eréctil progresiva, a los dos o tres años, por endarteritis obliterante.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Enfermedad avanzada',
      title: 'Por qué se castra y el efecto flare',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'cause', t: 'Tumor andrógeno-dependiente', s: 'Crece con testosterona' },
        { id: 'b', col: 1, row: 1, k: 'good', t: 'Quitar la testosterona', s: 'Menos de 50 ng/dL' },
        { id: 'c', col: 2, row: 0, k: 'mech', t: 'Agonista de GnRH', s: 'Leuprolide, goserelina' },
        { id: 'd', col: 3, row: 0, k: 'risk', t: 'Brote inicial: flare up', s: 'Sube LH y testosterona' },
        { id: 'e', col: 4, row: 0, k: 'alert', t: 'Dolor y compresión medular', s: 'Si hay metástasis vertebrales' },
        { id: 'f', col: 3, row: 2, k: 'good', t: 'Bicalutamida antes', s: 'Bloquea el receptor' },
        { id: 'g', col: 2, row: 2, k: 'effect', t: 'Degarelix o orquiectomía', s: 'Sin flare' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' },
        { from: 'd', to: 'f' }, { from: 'b', to: 'g' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'El cáncer depende de andrógenos',
          say: 'El adenocarcinoma de próstata depende de la testosterona. Si hay metástasis, el pilar es bajarla a niveles de castración, menos de cincuenta nanogramos por decilitro.' },
        { show: ['g'], note: 'Dos vías sin flare',
          say: 'Se logra con orquiectomía bilateral, que es la castración quirúrgica, o con degarelix, un antagonista puro de GnRH, que baja la testosterona de inmediato sin efecto flare.' },
        { show: ['c', 'd', 'e'], note: 'El agonista primero estimula',
          say: 'Los agonistas, como leuprolide y goserelina, primero estimulan la hipófisis, y durante los primeros siete a catorce días suben la LH y la testosterona. Es el flare up, y en un paciente con metástasis vertebrales puede causar dolor intenso, retención urinaria o compresión medular.' },
        { show: ['f'], note: 'Se bloquea con antiandrógeno previo',
          say: 'Por eso se da bicalutamida antes y durante las primeras semanas, que bloquea el receptor y neutraliza el brote. Esa es la pregunta clásica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Enfermedad metastásica',
      title: 'Metástasis y deprivación androgénica',
      cards: [
        { title: 'Cómo se ve', tag: 'Metástasis blásticas', kind: 'key', items: [
          { t: 'Osteoblásticas, hipercaptantes', d: 'Columna, pelvis y costillas',
            say: 'Las metástasis del cáncer de próstata son característicamente osteoblásticas, en columna lumbar, pelvis y costillas, y se ven como focos calientes en el cintigrama óseo.' },
          { t: 'APE y fosfatasa alcalina muy altos', d: 'Dolor óseo nocturno',
            say: 'Suelen acompañarse de dolor óseo que empeora de noche, APE muy elevado y fosfatasas alcalinas altas.' },
        ] },
        { title: 'Tratamiento', tag: 'TDA', kind: 'pharma', items: [
          { t: 'Deprivación androgénica continua', d: 'Quirúrgica o médica',
            say: 'La base es la terapia de deprivación androgénica, quirúrgica o con análogos de GnRH. Es lo que más alivia el dolor óseo y más impacta la sobrevida.' },
          { t: 'Efectos de la castración', d: 'Sofocos, osteoporosis, libido baja',
            say: 'Produce pérdida de libido, sofocos, osteoporosis, síndrome metabólico y ginecomastia.' },
          { t: 'Resistente a la castración', d: 'Enzalutamida, abiraterona',
            say: 'Si el tumor progresa a pesar de la castración, se agregan antiandrógenos de nueva generación, como enzalutamida o abiraterona.' },
        ] },
      ],
    },

    {
      type: 'image',
      light: true,
      kicker: 'Así se ve',
      title: 'Cintigrama óseo en metástasis',
      images: [
        { src: 'biblioteca/19_urologia/uro-09/01_cintigrama-oseo-bajo-volumen__bailey-love_p1414.jpg', label: 'Cintigrama óseo: pocos focos hipercaptantes en columna y pelvis', credit: 'Bailey & Love 27.ª ed., Fig. 75.27a' },
        { src: 'biblioteca/19_urologia/uro-09/02_cintigrama-oseo-alto-volumen__bailey-love_p1414.jpg', label: 'Cintigrama óseo: múltiples focos en esqueleto axial y costillas', credit: 'Bailey & Love 27.ª ed., Fig. 75.27b' },
      ],
      steps: [
        { note: 'Enfermedad metastásica de bajo volumen',
          say: 'Mira los puntos oscuros: son focos que captan más el trazador, es decir, hueso con mucha actividad. Aquí son pocos, sobre todo en columna y pelvis.' },
        { note: 'Enfermedad de alto volumen',
          say: 'Y aquí, un paciente con enfermedad extensa: columna, costillas, hombros y pelvis llenos de focos. Es el patrón del cáncer de próstata metastásico, que se trata con deprivación androgénica.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del grupo de riesgo al tratamiento.',
    },

    {
      type: 'table',
      kicker: 'Modalidades',
      title: 'Opciones y su efecto adverso',
      head: ['Modalidad', 'Cuándo', 'Efecto adverso típico'],
      rows: [
        { cells: ['Vigilancia activa', 'Bajo riesgo', 'Ansiedad, pérdida de seguimiento'],
          say: 'La vigilancia activa es para el riesgo bajo, y su riesgo es la ansiedad y que el paciente abandone los controles.' },
        { cells: ['Prostatectomía radical', 'Intermedio o alto, más de 10 años', 'Disfunción eréctil, incontinencia'],
          say: 'La prostatectomía, en riesgo intermedio o alto con buena expectativa de vida, deja disfunción eréctil e incontinencia de esfuerzo.' },
        { cells: ['Radioterapia + TDA', 'Intermedio o alto', 'Proctitis y cistitis actínica'],
          say: 'La radioterapia con deprivación hormonal deja proctitis y cistitis actínica, además de sofocos.' },
        { cells: ['Castración médica', 'Metastásico', 'Libido baja, osteoporosis'],
          say: 'La castración médica es para la enfermedad metastásica, con pérdida de libido y osteoporosis.' },
        { cells: ['Antiandrógenos nuevos', 'Resistente a castración', 'Fatiga, hipertensión, fracturas'],
          say: 'Y los antiandrógenos de nueva generación se reservan para la resistencia a la castración.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Tratamiento: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Gleason 6 o tumor mínimo en adulto mayor', 'Vigilancia u observación', 'Operar o irradiar'],
          say: 'Tumor mínimo en un adulto mayor: vigilancia. El error es operar o irradiar.' },
        { cells: ['Localizado, 20 años de vida', 'Cirugía o radioterapia', 'Hormonas solas'],
          say: 'Localizado y con larga expectativa de vida: cirugía o radioterapia. Las hormonas solas no curan.' },
        { cells: ['Metástasis ósea', 'Deprivación androgénica', 'Cirugía radical'],
          say: 'Con metástasis, el tratamiento es hormonal, y no se hace prostatectomía radical.' },
        { cells: ['Leuprolide en metastásico', 'Bicalutamida antes', 'Dar solo el agonista'],
          say: 'Leuprolide en un paciente con metástasis vertebrales: bicalutamida antes, para evitar el flare.' },
        { cells: ['Incontinencia tras prostatectomía', 'Kinesiterapia pélvica', 'Anticolinérgicos o sonda'],
          say: 'La incontinencia después de la prostatectomía es de esfuerzo, y se parte con kinesiterapia.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 76 años con dolor lumbar de 2 meses que empeora de noche. Sin déficit neurológico. Próstata pétrea y fija. APE 145 ng/mL y fosfatasas alcalinas 420 U/L. El cintigrama óseo muestra múltiples focos hipercaptantes en columna, pelvis y fémures.',
      question: '¿Cuál es el tratamiento de primera línea?',
      options: [
        { letter: 'A', text: 'Prostatectomía radical con linfadenectomía' },
        { letter: 'B', text: 'Terapia de deprivación androgénica' },
        { letter: 'C', text: 'Vigilancia activa con APE cada 3 meses' },
        { letter: 'D', text: 'Radioterapia prostática exclusiva con intención curativa' },
        { letter: 'E', text: 'Resección transuretral de próstata' },
      ],
      correct: 'B',
      explanation: 'Cáncer de próstata metastásico óseo: el pilar es la deprivación androgénica, médica o quirúrgica. Si se usa un agonista de GnRH como leuprolide, se agrega bicalutamida inicial para evitar el flare.',
      say: {
        stem: 'Un hombre de setenta y seis años con dolor lumbar de dos meses que empeora de noche, próstata pétrea y fija, APE de ciento cuarenta y cinco, fosfatasas alcalinas altas y un cintigrama con múltiples focos hipercaptantes en columna, pelvis y fémures.',
        question: '¿Cuál es el tratamiento de primera línea?',
        options: 'Las opciones: prostatectomía radical; deprivación androgénica; vigilancia activa; radioterapia exclusiva con intención curativa; o resección transuretral. Piénsalo.',
        answer: 'Es la B. Tiene metástasis óseas, así que el tratamiento es sistémico y hormonal. La A y la D son tratamientos locales para un tumor localizado. Y si usas leuprolide, no olvides la bicalutamida inicial.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 103',
      stem: 'Paciente de 83 años con APE 10, adenocarcinoma de próstata Gleason 3+3 en 0,3% de la muestra, estudio de diseminación negativo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Vigilancia activa con control en 3 meses' },
        { letter: 'B', text: 'Prostatectomía radical' },
        { letter: 'C', text: 'Radioterapia de haz externo' },
        { letter: 'D', text: 'Braquiterapia prostática' },
        { letter: 'E', text: 'Deprivación androgénica' },
      ],
      correct: 'A',
      explanation: 'Tumor de bajo riesgo, mínimo, sin diseminación, en un adulto mayor: vigilancia activa.',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un hombre de ochenta y tres años, con APE de diez y un adenocarcinoma Gleason tres más tres en cero coma tres por ciento de la muestra. El estudio de diseminación es negativo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: vigilancia activa con control en tres meses; prostatectomía radical; radioterapia externa; braquiterapia; o deprivación androgénica. Piénsalo.',
        answer: 'Es la A. Es un tumor de bajo riesgo, mínimo, en un paciente de edad avanzada: tratarlo expone a secuelas sin beneficio. Las otras cuatro son sobretratamiento, y la deprivación androgénica es para enfermedad metastásica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 58 años, activo, con expectativa de vida sobre 20 años. Adenocarcinoma ISUP 2 (Gleason 3+4=7) en 4 de 12 cilindros, APE 7,5 ng/mL, cT1c. TAC y cintigrama óseo sin metástasis.',
      question: '¿Cuáles son las dos opciones curativas estándar?',
      options: [
        { letter: 'A', text: 'Prostatectomía radical o radioterapia externa' },
        { letter: 'B', text: 'Quimioterapia con docetaxel o deprivación androgénica exclusiva' },
        { letter: 'C', text: 'Vigilancia activa o cistectomía radical' },
        { letter: 'D', text: 'Resección transuretral o tamsulosina' },
        { letter: 'E', text: 'Inmunoterapia o castración quirúrgica inmediata' },
      ],
      correct: 'A',
      explanation: 'Riesgo intermedio localizado en un paciente con larga expectativa de vida: prostatectomía radical o radioterapia externa, con sobrevida equivalente. La elección depende de los efectos secundarios.',
      say: {
        stem: 'Un hombre de cincuenta y ocho años, activo, con más de veinte años de expectativa de vida. Adenocarcinoma grupo dos, APE de siete coma cinco, estadio uno c, y el estudio de diseminación es negativo.',
        question: '¿Cuáles son las dos opciones curativas estándar?',
        options: 'Las opciones: prostatectomía radical o radioterapia externa; quimioterapia o deprivación androgénica; vigilancia o cistectomía; resección transuretral o tamsulosina; o inmunoterapia o castración. Piénsalo.',
        answer: 'Es la A. Riesgo intermedio localizado con larga expectativa de vida: las dos opciones curativas son cirugía o radioterapia, con sobrevida equivalente. Elegir una u otra depende de qué efectos adversos prefiere el paciente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 73 años con cáncer de próstata metastásico óseo inicia leuprolide intramuscular mensual.',
      question: '¿Por qué se prescribe bicalutamida los primeros 14 días?',
      options: [
        { letter: 'A', text: 'Prevenir la hepatotoxicidad aguda del leuprolide' },
        { letter: 'B', text: 'Bloquear el brote inicial de testosterona que puede causar dolor óseo y compresión medular' },
        { letter: 'C', text: 'Acelerar la eliminación renal del leuprolide' },
        { letter: 'D', text: 'Evitar la hiponatremia por ADH' },
        { letter: 'E', text: 'Prevenir la necrosis avascular de la cabeza femoral' },
      ],
      correct: 'B',
      explanation: 'Los agonistas de GnRH producen un aumento transitorio de LH y testosterona los primeros 7 a 14 días (flare up). En metástasis vertebrales puede causar dolor intenso, retención urinaria o compresión medular, y se bloquea con un antiandrógeno.',
      say: {
        stem: 'Un hombre de setenta y tres años con cáncer de próstata metastásico en hueso empieza leuprolide mensual.',
        question: '¿Por qué se le da bicalutamida durante los primeros catorce días?',
        options: 'Las opciones: evitar hepatotoxicidad; bloquear el brote inicial de testosterona; acelerar la eliminación renal; evitar hiponatremia; o prevenir necrosis avascular. Piénsalo.',
        answer: 'Es la B. El agonista primero estimula el eje y sube la testosterona de siete a catorce días, y con metástasis vertebrales eso puede causar compresión medular. El antiandrógeno bloquea el receptor.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: tratamiento del cáncer de próstata',
      cards: [
        { title: 'Localizado', tag: 'Según riesgo', kind: 'key', items: [
          { t: 'Bajo riesgo o adulto mayor: vigilancia', d: 'No se sobretrata',
            say: 'Cerremos con las reglas de oro. Bajo riesgo, o tumor mínimo en un adulto mayor, se vigila.' },
          { t: 'Intermedio y alto: cirugía o radioterapia', d: 'Con más de 10 años de vida',
            say: 'En riesgo intermedio y alto, con más de diez años de expectativa de vida, cirugía o radioterapia, que se complementa con deprivación androgénica.' },
        ] },
        { title: 'Metastásico', tag: 'Hormonal', kind: 'alert', items: [
          { t: 'Metástasis blásticas: deprivación androgénica', d: 'Castración médica o quirúrgica',
            say: 'Con metástasis, el pilar es la deprivación androgénica, y no se opera la próstata.' },
          { t: 'Leuprolide con bicalutamida inicial', d: 'Evita el flare y la compresión medular',
            say: 'Y si usas un agonista de GnRH, bicalutamida primero. Si te llevas una sola idea de hoy: el cáncer localizado de bajo riesgo se vigila, y el metastásico se castra, con protección contra el flare. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Tratamiento del cáncer de próstata',
    root: N('start', 'Cáncer de próstata confirmado', 'Clasificar el riesgo',
      'Un cáncer de próstata ya confirmado con biopsia. Lo primero es clasificar el riesgo según el tacto, el APE y el Gleason, y descartar metástasis.',
      ['Metástasis óseas o ganglionares', N('alert', 'Enfermedad metastásica', 'Cintigrama óseo con focos',
        'Si hay metástasis, el tratamiento ya no es local, sino hormonal.',
        ['Tratamiento de base', N('do', 'Deprivación androgénica', 'Orquiectomía o análogos de GnRH',
          'Se baja la testosterona a nivel de castración, con orquiectomía o con análogos de GnRH.',
          ['Si usas agonista', N('refer', 'Bicalutamida inicial', 'Evita el flare y la compresión medular',
            'Con leuprolide o goserelina se da primero un antiandrógeno, para neutralizar el brote de testosterona.')],
        )],
      )],
      ['Localizado, bajo riesgo', N('ok', 'Vigilancia activa', 'APE cada 3 a 6 meses',
        'Gleason seis, APE bajo diez y tumor pequeño: se vigila con APE, tacto y rebiopsia. Se trata solo si progresa.')],
      ['Localizado, intermedio o alto', N('q', 'Expectativa de vida', 'Más de 10 años',
        'En riesgo intermedio o alto, preguntas por la expectativa de vida del paciente.',
        ['Más de 10 años', N('do', 'Cirugía o radioterapia', 'Radioterapia con TDA',
          'Se ofrece prostatectomía radical o radioterapia externa, esta última con deprivación androgénica corta en riesgo intermedio y prolongada en alto riesgo.')],
        ['Menos de 10 años', N('ok', 'Observación', 'Sin intención curativa',
          'Con poca expectativa de vida, el tratamiento curativo no compensa sus secuelas, y se observa.')],
      )],
    ),
  },
};
