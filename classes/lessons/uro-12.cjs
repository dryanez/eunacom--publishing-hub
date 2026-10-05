// Clase 13.12 (Urología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_urologia.cjs (uro-12). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (4.03.1.023) no tiene preguntas reales propias; de la búsqueda por tema se usaron Julio 2016 P159 (hematuria monosintomática en fumadora: cáncer de vejiga) y Julio 2015 P45 (hematuria con TAC normal: cistoscopía).
// No usada: Diciembre 2017 P77 (mismo diagnóstico que Julio 2016 P159, no enseña nada distinto).
// Aviso: Julio 2016 P159 y Julio 2015 P45 son del código de hematuria (4.03.1.003 / 4.03.5.002), que probablemente reutilizará uro-15; aquí son la única pregunta real del punto central de esta clase.
// Sin pregunta real sobre BCG en T1: una pregunta del libro como "Caso representativo".
// El estudio completo de la hematuria (sedimento, ecografía, uro-TAC) se ve en uro-15 y solo se enlaza.
// Imágenes: Bailey & Love 27.ª ed., Fig. 77.48 y Fig. 77.51b.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'uro-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cáncer de vejiga: hematuria macroscópica silente, cistoscopía y resección transuretral',
      say: 'Bienvenido. Hoy vemos el cáncer de vejiga, el tumor que se esconde detrás de una orina roja que no duele. El examen pregunta cómo se sospecha, qué examen lo confirma, y cómo cambia el manejo según el tumor invade o no el músculo. El estudio completo de la hematuria lo vemos en la clase de hematuria, y aquí nos centramos en el cáncer.',
    },

    {
      type: 'points',
      kicker: 'Epidemiología y clínica',
      title: 'Carcinoma urotelial y su señal',
      cards: [
        { title: 'Quién', tag: 'Riesgo', kind: 'key', items: [
          { t: 'Carcinoma urotelial: más del 90%', d: 'Nace del epitelio de transición',
            say: 'Más del noventa por ciento es un carcinoma urotelial, que nace del epitelio de transición.' },
          { t: 'Tabaquismo: factor principal', d: 'Riesgo 3 a 4 veces mayor',
            say: 'El tabaco es el principal factor de riesgo, y multiplica el riesgo entre tres y cuatro veces. Sus aminas aromáticas se eliminan por el riñón y quedan en contacto con el urotelio de la vejiga.' },
          { t: 'Tinturas, caucho, ciclofosfamida', d: 'Schistosoma: escamoso',
            say: 'Otras causas son las tinturas industriales, el caucho, la ciclofosfamida y la infección crónica por Schistosoma, que produce un carcinoma escamoso.' },
        ] },
        { title: 'Presentación', tag: 'Clínica', kind: 'alert', items: [
          { t: 'Hematuria macroscópica indolora', d: 'Total, intermitente, con coágulos',
            say: 'El síntoma clásico, en más de ochenta y cinco por ciento, es la hematuria macroscópica total, indolora, intermitente y con coágulos, en un adulto mayor fumador. Es la hematuria monosintomática: sin dolor, sin fiebre, sin síntomas urinarios.' },
          { t: 'Irritación vesical refractaria', d: 'Típico del carcinoma in situ',
            say: 'Con menos frecuencia debuta con polaquiuria, urgencia y tenesmo que no mejoran con antibióticos, que es el cuadro del carcinoma in situ.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'Cistoscopía y resección transuretral',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'start', t: 'Hematuria indolora en fumador', s: 'Sin infección' },
        { id: 'b', col: 1, row: 1, k: 'good', t: 'Cistoscopía', s: 'Examen de elección' },
        { id: 'c', col: 2, row: 0, k: 'effect', t: 'Tumor papilar, vegetante', s: 'Frondas, como coliflor' },
        { id: 'd', col: 3, row: 0, k: 'good', t: 'Resección transuretral', s: 'Diagnóstica y terapéutica' },
        { id: 'e', col: 4, row: 0, k: 'alert', t: 'Debe incluir el detrusor', s: 'Define la invasión' },
        { id: 'f', col: 2, row: 2, k: 'mech', t: 'Uro-TAC', s: 'Vía urinaria superior' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' }, { from: 'b', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'La cistoscopía confirma',
          say: 'Ante una hematuria macroscópica sin causa infecciosa, en un fumador, el examen que confirma el cáncer de vejiga es la cistoscopía, que muestra directamente la mucosa. La citología de orina complementa, pero no la reemplaza. El estudio ordenado de la hematuria lo vemos en la clase de hematuria.' },
        { show: ['c', 'd'], note: 'Se reseca en el mismo acto',
          say: 'El tumor suele verse como una lesión papilar, vegetante, con frondas como helecho. Se reseca por vía transuretral en el mismo acto, y así el procedimiento es diagnóstico y terapéutico.' },
        { show: ['e'], note: 'La muestra debe tener músculo',
          say: 'La resección debe llegar hasta el músculo detrusor, y el patólogo tiene que certificar que hay músculo en la muestra, porque eso define la profundidad de invasión y por lo tanto el tratamiento.' },
        { show: ['f'], note: 'Se estudia también la vía superior',
          say: 'Además se hace un uro-TAC, con fase de excreción, para ver cálices y uréteres, porque el urotelio es el mismo en toda la vía urinaria.' },
      ],
    },

    {
      type: 'image',
      light: true,
      kicker: 'Así se ve',
      title: 'Tumor vesical por cistoscopía y RM',
      images: [
        { src: 'biblioteca/19_urologia/uro-12/01_cistoscopia-tumor-papilar-pTa__bailey-love_p1467.jpg', label: 'Cistoscopía: tumor papilar pTa antes de la resección', credit: 'Bailey & Love 27.ª ed., Fig. 77.48' },
        { src: 'biblioteca/19_urologia/uro-12/02_rm-cancer-vesical-invasor__bailey-love_p1471.jpg', label: 'Resonancia: cáncer vesical que invade la pared', credit: 'Bailey & Love 27.ª ed., Fig. 77.51b' },
      ],
      steps: [
        { note: 'Papilar y vegetante',
          say: 'Mira la superficie: muchas frondas finas, como pequeños dedos, que salen de la mucosa. Es el aspecto del tumor papilar no invasor, el que se reseca por vía transuretral.' },
        { note: 'Tumor que invade la pared',
          say: 'Y esta es una resonancia de un cáncer que invade la pared de la vejiga: engrosamiento sólido en vez de frondas. Es el que va a requerir mucho más que una resección.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Invasión muscular',
      title: 'No invasivo versus invasivo',
      head: ['Característica', 'No músculo invasivo', 'Músculo invasivo'],
      rows: [
        { cells: ['Etapas', 'Ta, T1, Tis', 'T2 o más'],
          say: 'El no invasivo incluye Ta, que es papilar y superficial, T uno, que invade la lámina propia pero no el músculo, y Tis, el carcinoma in situ plano de alto grado. El invasivo es T dos o más: infiltra el detrusor.' },
        { cells: ['Frecuencia', '~75%', '~25%'],
          say: 'Tres de cada cuatro son no invasivos al diagnóstico.' },
        { cells: ['Aspecto', 'Papilar, en frondas', 'Sólido, sésil, ulcerado'],
          say: 'El no invasivo es papilar, y el invasivo es sólido, sésil y ulcerado.' },
        { cells: ['Tratamiento', 'RTU + BCG o mitomicina', 'Cisplatino + cistectomía radical'],
          say: 'El no invasivo se trata con resección completa más instilaciones intravesicales de BCG o de mitomicina. El invasivo, con quimioterapia con cisplatino antes de la cistectomía radical.' },
        { cells: ['Riesgo', 'Recidiva 50-70%', 'Metástasis precoces'],
          say: 'El no invasivo recidiva mucho, entre cincuenta y setenta por ciento, y el invasivo da metástasis ganglionares y a distancia rápidas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'BCG o cistectomía',
      cards: [
        { title: 'No músculo invasivo', tag: 'Conservador', kind: 'normal', items: [
          { t: 'Resección transuretral completa', d: 'Con músculo en la muestra',
            say: 'Se hace una resección completa. Después, para bajar la recidiva y la progresión, se instila en la vejiga.' },
          { t: 'BCG intravesical', d: 'Inducción semanal por 6 semanas',
            say: 'La instilación de BCG, el bacilo de Calmette-Guérin, es el tratamiento adyuvante de elección en los tumores de mayor riesgo, como el T uno de alto grado. Se da una vez por semana durante seis semanas y luego mantención. Otra opción es la mitomicina C.' },
        ] },
        { title: 'Músculo invasivo', tag: 'Radical', kind: 'alert', items: [
          { t: 'Quimioterapia con cisplatino', d: 'Antes de la cirugía',
            say: 'Quimioterapia neoadyuvante con cisplatino.' },
          { t: 'Cistectomía radical', d: 'Más linfadenectomía pélvica',
            say: 'Y cistectomía radical. En el hombre se extirpan vejiga, próstata y vesículas seminales, y en la mujer, vejiga, útero, ovarios y parte de la vagina. Se reconstruye con conducto ileal de Bricker o neovejiga.' },
          { t: 'BCG se reserva', d: 'Falla del BCG o ≥ T2',
            say: 'La cistectomía también se usa cuando falla el BCG.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la hematuria silente al tratamiento según el músculo.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Hematuria indolora, fumador', 'Cistoscopía', 'Tratar como infección'],
          say: 'Hematuria sin dolor en un fumador: cáncer de vejiga hasta demostrar lo contrario, y se hace cistoscopía.' },
        { cells: ['TAC normal y hematuria', 'Cistoscopía igual', 'Dar de alta'],
          say: 'Un TAC normal no descarta cáncer de vejiga. Hay que hacer la cistoscopía.' },
        { cells: ['Resección sin músculo', 'Repetir o completar', 'Clasificar como superficial'],
          say: 'Si la muestra no tiene músculo, no se sabe la profundidad.' },
        { cells: ['Tumor T uno o Ta', 'BCG o mitomicina', 'Cistectomía de entrada'],
          say: 'Tumor no invasivo: resección más BCG, no cistectomía inmediata.' },
        { cells: ['Tumor músculo invasivo', 'Cisplatino y cistectomía', 'Solo resección'],
          say: 'Y el invasivo muscular se trata con quimioterapia y cistectomía radical, no basta resecar.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 65 años, fumador de 30 cigarrillos diarios por 40 años. Hace 5 días tuvo orina francamente roja con coágulos alargados durante toda la micción, indolora, que cedió en 24 horas. Examen físico normal. Sedimento con hematuria sin leucocitos ni proteinuria.',
      question: '¿Cuál es el examen que confirma el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Antígeno prostático específico' },
        { letter: 'B', text: 'Cistoscopía' },
        { letter: 'C', text: 'Urocultivo y antibióticos empíricos' },
        { letter: 'D', text: 'Radiografía simple de abdomen' },
        { letter: 'E', text: 'Observación, porque cedió solo' },
      ],
      correct: 'B',
      explanation: 'Hematuria macroscópica indolora con coágulos en un fumador adulto mayor es cáncer de vejiga hasta demostrar lo contrario. Que ceda solo no lo descarta. Se confirma con cistoscopía y resección transuretral.',
      say: {
        stem: 'Un hombre de sesenta y cinco años, fumador de treinta cigarrillos al día por cuarenta años, con un episodio de orina roja con coágulos, indoloro, que cedió en un día. El sedimento muestra hematuria sin leucocitos.',
        question: '¿Cuál es el examen que confirma el diagnóstico más probable?',
        options: 'Las opciones: antígeno prostático; cistoscopía; urocultivo con antibióticos; radiografía simple; u observación. Piénsalo.',
        answer: 'Es la B. La hematuria indolora en un fumador es un cáncer de vejiga hasta demostrar lo contrario. Que se detenga no lo descarta: la hematuria del tumor es intermitente. Se confirma con cistoscopía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 159',
      stem: 'Paciente femenina, fumadora de 30 paquetes/año, presenta hematuria, con abundante coágulos de sangre. No presenta dolor, fiebre, ni otros síntomas. Se solicita un sedimento de orina, que muestra abundantes eritrocitos, sin bacterias. El diagnóstico más probable es:',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Cistitis hemorrágica' },
        { letter: 'B', text: 'Cáncer de vejiga' },
        { letter: 'C', text: 'Cáncer renal.' },
        { letter: 'D', text: 'Tuberculosis renal' },
        { letter: 'E', text: 'Infección urinaria' },
      ],
      correct: 'B',
      explanation: 'El cáncer de vejiga es la causa más frecuente de hematuria monosintomática en el adulto, en especial en un fumador. Las otras opciones tienen otros síntomas.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Una mujer fumadora de treinta paquetes al año con hematuria abundante con coágulos, sin dolor, sin fiebre ni otros síntomas. El sedimento muestra abundantes eritrocitos y no hay bacterias.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: cistitis hemorrágica; cáncer de vejiga; cáncer renal; tuberculosis renal; o infección urinaria. Piénsalo.',
        answer: 'Es la B. La hematuria monosintomática, sin otros síntomas, es cáncer de vejiga, y más en una fumadora. Si hubiera síntomas de infección sería infección, y si hubiera dolor de cólico, litiasis. El cáncer renal rara vez se presenta con solo hematuria.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 45',
      stem: 'Un paciente de 68 años, fumador de 20 paquetes-año, presenta hematuria abundante, con coágulos. Se realiza un sedimento que muestra incontables glóbulos rojos y un urocultivo que resulta negativo. Se le realiza un TAC de abdomen y pelvis que no muestra alteraciones. ¿Qué examen es el más adecuado para proseguir con el estudio en este paciente?',
      question: '¿Qué examen es el más adecuado para proseguir el estudio?',
      options: [
        { letter: 'A', text: 'Ecografía pélvica' },
        { letter: 'B', text: 'Resonancia magnética nuclear' },
        { letter: 'C', text: 'Pielografía de eliminación' },
        { letter: 'D', text: 'Cistoscopía' },
        { letter: 'E', text: 'Uretrocistografía' },
      ],
      correct: 'D',
      explanation: 'Probable cáncer de vejiga. El TAC ya descartó causa renal, y falta ver la mucosa de la vejiga con cistoscopía.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Un hombre de sesenta y ocho años, fumador, con hematuria abundante con coágulos. El urocultivo es negativo y el TAC de abdomen y pelvis no muestra alteraciones.',
        question: '¿Qué examen es el más adecuado para proseguir el estudio?',
        options: 'Las opciones: ecografía pélvica; resonancia; pielografía de eliminación; cistoscopía; o uretrocistografía. Piénsalo.',
        answer: 'Es la D. El TAC normal descarta el riñón, pero una lesión de la mucosa de la vejiga puede no verse. Un fumador con hematuria indolora necesita cistoscopía, que es el examen que confirma el cáncer de vejiga.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 62 años operado de resección transuretral de una masa vegetante vesical. La biopsia informa carcinoma urotelial de alto grado que infiltra la lámina propia, con músculo detrusor indemne en la muestra (T1).',
      question: '¿Cuál es el tratamiento adyuvante de elección?',
      options: [
        { letter: 'A', text: 'Cistectomía radical inmediata con conducto ileal' },
        { letter: 'B', text: 'Instilaciones intravesicales con BCG' },
        { letter: 'C', text: 'Radioterapia pélvica externa' },
        { letter: 'D', text: 'Quimioterapia sistémica MVAC por 6 ciclos' },
        { letter: 'E', text: 'Observación sin terapia adicional' },
      ],
      correct: 'B',
      explanation: 'Es un cáncer no músculo invasivo T1 de alto riesgo. Tras la resección completa, el tratamiento adyuvante estándar para reducir la recidiva y la progresión es el BCG intravesical. La cistectomía se reserva para falla del BCG o invasión muscular.',
      say: {
        stem: 'Un hombre de sesenta y dos años operado de resección transuretral de una masa vesical. La biopsia muestra un carcinoma urotelial de alto grado que infiltra la lámina propia, con el músculo detrusor indemne.',
        question: '¿Cuál es el tratamiento adyuvante de elección?',
        options: 'Las opciones: cistectomía radical inmediata; BCG intravesical; radioterapia pélvica; quimioterapia sistémica; u observación. Piénsalo.',
        answer: 'Es la B. Invade la lámina propia pero no el músculo: es un tumor no músculo invasivo, T uno. Después de resecarlo, se instila BCG. La cistectomía sería para falla del BCG o invasión muscular.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: cáncer de vejiga',
      cards: [
        { title: 'Diagnóstico', tag: 'Hematuria silente', kind: 'key', items: [
          { t: 'Hematuria indolora en fumador', d: 'Cáncer hasta probar lo contrario',
            say: 'Cerremos con las reglas de oro. Hematuria macroscópica indolora en un fumador mayor es cáncer de vejiga hasta demostrar lo contrario.' },
          { t: 'Cistoscopía y resección', d: 'Con músculo en la muestra',
            say: 'Se confirma con cistoscopía y resección transuretral, y la muestra debe incluir músculo.' },
        ] },
        { title: 'Conducta', tag: 'Según el músculo', kind: 'alert', items: [
          { t: 'No invasivo: resección y BCG', d: 'Ta, T1, Tis',
            say: 'Si el tumor no invade el músculo, resección más BCG.' },
          { t: 'Invasivo: cisplatino y cistectomía', d: 'T2 o más; GES',
            say: 'Si invade el músculo, quimioterapia con cisplatino y cistectomía radical. Si te llevas una sola idea de hoy: la hematuria que no duele, en un fumador, se estudia con cistoscopía, y el tratamiento depende de si el tumor llegó al músculo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Cáncer de vejiga: de la hematuria al tratamiento',
    root: N('start', 'Hematuria indolora en fumador', 'Sin infección en el sedimento',
      'Un adulto mayor fumador con hematuria macroscópica que no duele, sin infección. Se sospecha cáncer de vejiga, aunque el TAC sea normal.',
      ['Siempre', N('do', 'Cistoscopía y resección', 'Muestra con músculo detrusor',
        'Se hace cistoscopía, y si hay tumor, resección transuretral hasta el músculo. El patólogo informa si hay invasión muscular.',
        ['No invade el músculo', N('ok', 'Resección más BCG', 'Ta, T1 o Tis',
          'Si es no músculo invasivo, resección completa y BCG o mitomicina para bajar la recidiva.')],
        ['Invade el músculo', N('refer', 'Cisplatino y cistectomía radical', 'T2 o más',
          'Si invade el músculo, quimioterapia neoadyuvante con cisplatino y cistectomía radical con derivación urinaria.')],
      )],
    ),
  },
};
