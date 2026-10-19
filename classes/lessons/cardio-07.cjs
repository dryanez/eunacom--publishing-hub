// Clase 1.7 (Cardiología) — Taquicardia de complejo ancho, taquicardia ventricular, QT largo y cardioversión eléctrica. Guion escrito a mano.
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_1.cjs (cardio-07). Códigos 1.01.2.009 Taqui y bradiarritmia con compromiso
// hemodinámico (Dx específico, Tx inicial, seguimiento derivar) y 1.01.5.002 Cardioversión eléctrica (derivar a especialista), según
// books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-07 y --search "taquicardia ventricular|QT|cardioversión"): Diciembre 2018 P4 (taquiarritmia
// inestable: cardioversión), Julio 2019 P177 (síncope con infarto previo: TV) y Julio 2016 P92 (palpitaciones y reanimación con infarto
// previo: TV). Enunciados y alternativas copiados del banco. Se agrega una pregunta del banco del libro (Banco Oficial AEE) sobre el QTc
// de 581 ms con claritromicina.
// No usadas: Julio 2024 P93, Agosto 2021 P139 y Julio 2017 P25 (dependen del ECG o de una foto que el banco no trae); Diciembre 2017 P2
// (FA inestable: va en cardio-04); Julio 2024 P47 (QT largo y antibiótico en gastroenteritis: es de infectología).
// Fotos en contexto: Stroobandt, Barold y Sinnaeve, «ECG from Basics to Essentials» (Wiley, 2016), p. 283 (TV tipo BCRD y tipo BCRI) y
// p. 301 (torsión de puntas), en classes/media/biblioteca/20_cardiologia/cardio-07/.
// En movimiento: scenes/cardio_b1.html ?v=tv (gráfico propio: TV, cardioversión sincronizada y torsión de puntas).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });
const STRO = p => `Stroobandt, Barold y Sinnaeve. ECG from Basics to Essentials (Wiley, 2016), p. ${p}`;

module.exports = {
  id: 'cardio-07',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Asumir TV, mirar el pulso y la estabilidad primero, cardiovertir y reconocer el QT largo',
      say: 'Bienvenido. Una taquicardia con QRS ancho es la arritmia en la que el error cuesta la vida: la misma pantalla puede ser una taquicardia ventricular, que degenera en fibrilación, o una supraventricular con bloqueo de rama, y el verapamilo que salva a la segunda mata a la primera. Hoy aprendes una regla simple, a cardiovertir y a reconocer el QT largo, una causa silenciosa que provocan fármacos de uso cotidiano.',
    },

    {
      type: 'flow',
      kicker: 'Regla de oro',
      title: 'Ancho es ventricular hasta que se demuestre lo contrario',
      nodes: [
        { id: 'w', col: 0, row: 1, k: 'start', t: 'QRS ≥ 120 ms, rápido', s: 'Taquicardia ancha' },
        { id: 'p', col: 1, row: 1, k: 'q', t: '¿Hay pulso?', s: 'Sin pulso = paro' },
        { id: 'i', col: 2, row: 1, k: 'q', t: '¿Está inestable?', s: 'Shock, edema, isquemia, síncope' },
        { id: 'c', col: 3, row: 0, k: 'alert', t: 'Cardioversión sincronizada', s: 'Inmediata' },
        { id: 'a', col: 3, row: 2, k: 'good', t: 'Amiodarona 150 mg EV', s: 'En 10 minutos' },
        { id: 'x', col: 4, row: 2, k: 'trap', t: 'Verapamilo: NO', s: 'Colapso hemodinámico' },
      ],
      edges: [{ from: 'w', to: 'p' }, { from: 'p', to: 'i' }, { from: 'i', to: 'c', label: 'Sí' }, { from: 'i', to: 'a', label: 'No' }, { from: 'a', to: 'x' }],
      steps: [
        { show: ['w', 'p'], note: 'Primero, el pulso',
          say: 'Toda taquicardia regular con QRS de ciento veinte milisegundos o más se considera taquicardia ventricular hasta demostrar lo contrario, sobre todo si hay un infarto previo. Y la primera pregunta no es qué dice el trazado, sino si el paciente tiene pulso. Sin pulso, es un paro y se desfibrila.' },
        { show: ['i', 'c'], note: 'Inestable: cardiovertir',
          say: 'Con pulso, la pregunta es si está estable. Si tiene hipotensión, compromiso de conciencia, dolor isquémico o edema pulmonar, se indica cardioversión eléctrica sincronizada inmediata, sin esperar el electrocardiograma de doce derivaciones ni un fármaco.' },
        { show: ['a', 'x'], note: 'Estable: amiodarona',
          say: 'Si está estable, el fármaco de elección es la amiodarona, ciento cincuenta miligramos en diez minutos. Y el verapamilo está contraindicado en toda taquicardia de complejo ancho, porque si la arritmia es ventricular provoca un colapso hemodinámico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Reconocer',
      title: 'Qué sugiere TV y no una supraventricular',
      cards: [
        { title: 'En el ECG', tag: 'Datos a favor de TV', kind: 'criteria', items: [
          { t: 'Disociación AV, latidos de captura o fusión', d: 'P independientes de los QRS',
            say: 'La taquicardia ventricular se define por tres o más latidos ventriculares seguidos a más de cien. Mira estos dos trazados. En el primero, la morfología es de bloqueo de rama derecha, con las orejas de conejo de V uno, y en el segundo, de bloqueo de rama izquierda. Lo que más ayuda es ver ondas P que van por su cuenta, la disociación aurículo-ventricular, y los latidos de captura o fusión.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-07/01_taquicardia-ventricular-tipo-bcrd__stroobandt-ecg_p283.jpg', label: 'TV con patrón de BCRD', at: 'En el primero', credit: STRO(283) } },
          { t: 'QRS muy ancho · concordancia precordial · eje extremo', d: '> 140 ms (BCRD) · > 160 ms (BCRI)',
            say: 'También favorecen la taquicardia ventricular un QRS muy ancho, mayor de ciento cuarenta con forma de bloqueo derecho o de ciento sesenta con bloqueo izquierdo, la concordancia en todas las precordiales y un eje en tierra de nadie.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-07/02_taquicardia-ventricular-tipo-bcri__stroobandt-ecg_p283.jpg', label: 'TV con patrón de BCRI', at: 'También favorecen', credit: STRO(283) } },
        ] },
        { title: 'En la clínica', tag: 'Sustrato', kind: 'alert', items: [
          { t: 'Infarto previo o cardiopatía', d: 'La cicatriz es el sustrato de la reentrada',
            say: 'Pero lo más importante es la clínica. Un paciente con un infarto previo que presenta palpitaciones, un síncope o un paro tiene una taquicardia ventricular hasta que se demuestre lo contrario, porque la cicatriz es el sustrato de la reentrada.' },
          { t: 'La estabilidad no distingue', d: 'La TV puede tolerarse horas',
            say: 'Y la estabilidad no sirve para distinguirlas: una taquicardia ventricular puede ser bien tolerada durante horas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cardioversión eléctrica',
      title: 'Sincronizada, con pulso',
      cards: [
        { title: 'Cardioversión frente a desfibrilación', tag: 'Se confunden', kind: 'alert', items: [
          { t: 'Cardioversión: sincronizada, con pulso', d: 'Dispara sobre la onda R',
            say: 'La cardioversión es una descarga sincronizada con el QRS, en un paciente con pulso. El equipo detecta la onda R y dispara en ese instante, para no caer en la onda T y desencadenar una fibrilación.' },
          { t: 'Desfibrilación: no sincronizada, en el paro', d: 'FV, TV sin pulso y TV polimorfa',
            say: 'La desfibrilación es una descarga no sincronizada y de energía alta, para el paro con fibrilación ventricular o taquicardia sin pulso, y para la taquicardia polimorfa, donde no hay un QRS que sincronizar.' },
        ] },
        { title: 'Cómo se hace', tag: 'Técnica', kind: 'key', items: [
          { t: 'Sedación, parches, botón SYNC', d: 'Verificar el marcador sobre cada QRS',
            say: 'Se sedan y analgesian brevemente al paciente consciente, con vía aérea asegurada y monitoreo. Se colocan los parches, se activa el botón de sincronización y se comprueba que el marcador caiga sobre cada QRS.' },
          { t: 'TV monomorfa: 100 J · flutter y TPSV: 50-100 J · FA: 120-200 J', d: 'Si no revierte, subir la energía',
            say: 'Las energías bifásicas iniciales son de cien joules en la taquicardia ventricular monomorfa, de cincuenta a cien en el flutter y la TPSV, y de ciento veinte a doscientos en la fibrilación, con aumentos si no revierte.' },
          { t: 'Perfil del código: derivar', d: 'El inestable no espera',
            say: 'La cardioversión electiva y la estrategia de ritmo corresponden al cardiólogo, pero el paciente inestable no espera: el médico que está al lado cardiovierte si tiene el equipo y la formación, o lo prepara mientras llega el equipo.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Del trazado ancho a la descarga sincronizada',
      images: [
        { src: 'animaciones/cardio-07/A1_tv_cardioversion_torsion.mp4', label: 'TV, cardioversión y torsión de puntas', credit: 'Animación propia con los criterios del libro' },
      ],
      steps: [
        { note: 'La descarga cae sobre la R',
          say: 'Mira la secuencia. Aparece una taquicardia ventricular, con complejos anchos y regulares. Se activa la sincronización, y cada QRS recibe un marcador amarillo: la descarga va a caer justo sobre la onda R. Se descarga, el ritmo vuelve a ser sinusal y empieza el estudio. Más abajo, un paciente con QT largo que desarrolla una torsión de puntas, donde los complejos giran alrededor de la línea de base.' },
      ],
    },

    {
      type: 'points',
      kicker: 'TV estable y prevención',
      title: 'Qué se da y qué viene después',
      cards: [
        { title: 'TV monomorfa estable', tag: 'Amiodarona', kind: 'pharma', items: [
          { t: 'Amiodarona 150 mg EV en 10 min', d: 'Luego 1 mg/min por 6 horas',
            say: 'En la taquicardia ventricular monomorfa estable, amiodarona ciento cincuenta miligramos en diez minutos, seguidos de una infusión de uno por minuto durante seis horas. Alternativas son la procainamida y la lidocaína.' },
          { t: 'Corregir K > 4 y Mg', d: 'ECG de 12 derivaciones, buscar isquemia',
            say: 'Se corrigen el potasio y el magnesio, se toma un electrocardiograma de doce derivaciones y se busca la isquemia.' },
        ] },
        { title: 'Prevención de la muerte súbita', tag: 'Después', kind: 'key', items: [
          { t: 'Betabloqueador, tratar la IC, revascularizar', d: 'Ablación con catéter',
            say: 'Para prevenir recurrencias, un betabloqueador, tratamiento de la insuficiencia cardíaca, revascularización si hay isquemia y, en casos seleccionados, ablación con catéter.' },
          { t: 'DAI: prevención secundaria y FEVI ≤ 35%', d: 'Tras 3 meses de tratamiento óptimo',
            say: 'El desfibrilador implantable está indicado en la prevención secundaria, es decir, en quien sobrevivió a un paro o tuvo una taquicardia sostenida con compromiso, y en la primaria con fracción de eyección de treinta y cinco por ciento o menos, sintomática, tras tres meses de tratamiento óptimo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'QT largo',
      title: 'QTc > 500 ms: torsión de puntas',
      cards: [
        { title: 'Causas', tag: 'Fármacos y electrolitos', kind: 'alert', items: [
          { t: 'Macrólidos, quinolonas, antipsicóticos, ondansetrón, metadona', d: 'Antiarrítmicos IA y III',
            say: 'El QT largo adquirido es el más importante en la práctica. Las causas son fármacos, como los macrólidos, entre ellos la claritromicina y la azitromicina, las quinolonas, los antipsicóticos, el ondansetrón, la metadona y los antiarrítmicos de clase uno A y tres.' },
          { t: 'Hipokalemia, hipomagnesemia, hipocalcemia', d: 'Mujer, bradicardia, hepatopatía',
            say: 'Y los trastornos electrolíticos: hipokalemia, hipomagnesemia e hipocalcemia. También hay formas congénitas, que se sospechan en un niño con síncope con el ejercicio o el susto, o con antecedentes familiares de muerte súbita.' },
        ] },
        { title: 'Torsión de puntas', tag: 'TV polimorfa', kind: 'criteria', items: [
          { t: 'Aparece tras corto-largo-corto', d: 'Puede degenerar en FV',
            say: 'Mira este trazado. Hay un ritmo sinusal con QT largo y, al final, la taquicardia ventricular polimorfa, con complejos que giran alrededor de la línea de base. Se desencadena típicamente después de una pausa, la secuencia corto-largo-corto, y puede ser autolimitada, con un síncope, o degenerar en fibrilación ventricular.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-07/03_torsada-de-puntas-qt-largo-adquirido__stroobandt-ecg_p301.jpg', label: 'Torsión de puntas', at: 'Mira este trazado', credit: STRO(301) } },
        ] },
        { title: 'Conducta', tag: 'En orden', kind: 'key', items: [
          { t: 'Suspender el fármaco · corregir K, Mg y Ca', d: 'Monitorizar',
            say: 'La conducta ante un QTc largo es suspender el fármaco causante, monitorizar y corregir los electrolitos.' },
          { t: 'Sulfato de magnesio 2 g EV', d: 'NO amiodarona ni procainamida ni sotalol',
            say: 'La torsión de puntas se trata con sulfato de magnesio dos gramos endovenosos, aunque el magnesio sea normal; si degenera en fibrilación, desfibrilación. Y la amiodarona, la procainamida y el sotalol están contraindicados, porque alargan aún más el QT.' },
        ] },
      ],
    },

    { type: 'pathway', intro: 'Armemos el árbol: de la taquicardia ancha a la conducta.' },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Taquicardia ancha y QT largo: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Taquiarritmia con PA 70/40 y confusión', 'Cardioversión sincronizada', 'Maniobras vagales o adenosina'],
          say: 'Taquiarritmia con presión de setenta sobre cuarenta y confusión: cardioversión. Da igual cuál sea. El error es perder tiempo con maniobras o adenosina.' },
        { cells: ['Infarto previo + síncope con reanimación', 'Pensar en TV', 'Pensar en TPSV o FA'],
          say: 'Infarto previo con síncope que requirió reanimación: piensa en taquicardia ventricular.' },
        { cells: ['TV estable, 170 lpm', 'Amiodarona 150 mg EV', 'Verapamilo'],
          say: 'Taquicardia ventricular estable: amiodarona. El verapamilo causa colapso hemodinámico.' },
        { cells: ['QTc 581 ms con claritromicina', 'Suspender el fármaco y corregir K y Mg', 'Dar amiodarona'],
          say: 'QTc de quinientos ochenta y uno con claritromicina: se suspende el fármaco y se corrigen los electrolitos. La amiodarona alargaría el QT.' },
        { cells: ['Torsión de puntas', 'Magnesio 2 g EV', 'Amiodarona o procainamida'],
          say: 'Torsión de puntas: sulfato de magnesio. Amiodarona y procainamida están contraindicadas.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 62 años con infarto anterior hace 3 años (FEVI 32%), consulta por palpitaciones y disnea de 40 minutos. Está vigil, PA 102/68 mmHg, FC 172 lpm regular, sin dolor torácico ni edema pulmonar. ECG: taquicardia regular de QRS de 160 ms con disociación de las ondas P. El médico de turno sugiere verapamilo endovenoso.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Verapamilo 5 mg endovenoso' },
        { letter: 'B', text: 'Adenosina 6 mg en bolo' },
        { letter: 'C', text: 'Amiodarona 150 mg en 10 minutos, con monitor y desfibrilador, y derivar a cardiología' },
        { letter: 'D', text: 'Alta con betabloqueador oral' },
        { letter: 'E', text: 'Desfibrilación con 200 J no sincronizados' },
      ],
      correct: 'C',
      explanation: 'Es una TV monomorfa sostenida, estable, en un paciente con cardiopatía estructural: amiodarona 150 mg EV en 10 minutos con monitorización continua y desfibrilador a mano, y derivación para estudiar la isquemia y evaluar un DAI (FEVI ≤ 35%). Si se deteriora, cardioversión sincronizada. El verapamilo en una TV provoca colapso hemodinámico.',
      say: {
        stem: 'Un hombre de sesenta y dos años con un infarto anterior hace tres años y fracción de eyección de treinta y dos por ciento consulta por palpitaciones y disnea. Está vigil, con presión de ciento dos sobre sesenta y ocho y frecuencia de ciento setenta y dos, regular. El electrocardiograma muestra QRS de ciento sesenta milisegundos con disociación de las ondas P. El médico de turno sugiere verapamilo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: verapamilo; adenosina; amiodarona con monitor, desfibrilador y derivación; alta con betabloqueador; o desfibrilación no sincronizada. Piénsalo.',
        answer: 'Es la C. Es una taquicardia ventricular estable en un paciente con cardiopatía. Se da amiodarona, con el desfibrilador listo, y se deriva. La A tienta porque la taquicardia parece supraventricular, pero en una taquicardia ancha el verapamilo puede causar colapso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 4',
      stem: 'Un paciente ingresa al servicio de urgencia, por un cuadro de disnea marcada y síncopes. Al examen físico está confuso, con pulso de 200 latidos por minuto, regular y presión arterial de 70/40 mmHg. Además, tiene frialdad de extremidades y piel sudorosa.',
      question: '¿Cuál es el tratamiento inicial más adecuado en este momento?',
      options: [
        { letter: 'A', text: 'Maniobras vagales' },
        { letter: 'B', text: 'Amiodarona endovenosa' },
        { letter: 'C', text: 'Adenosina endovenosa' },
        { letter: 'D', text: 'Desfibrilación' },
        { letter: 'E', text: 'Cardioversión eléctrica' },
      ],
      correct: 'E',
      explanation: 'Por tener compromiso hemodinámico, da igual de qué taquiarritmia se trate: se cardioverte eléctricamente de inmediato. No debe confundirse con la desfibrilación, que se usa en el paro con FV o TV sin pulso.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Un paciente llega con disnea marcada y síncopes. Está confuso, con pulso de doscientos regular, presión de setenta sobre cuarenta, extremidades frías y piel sudorosa.',
        question: '¿Cuál es el tratamiento inicial más adecuado?',
        options: 'Las opciones: maniobras vagales; amiodarona; adenosina; desfibrilación; o cardioversión eléctrica. Piénsalo.',
        answer: 'Es la E. Por tener compromiso hemodinámico, da igual qué taquiarritmia sea: se cardioverte eléctricamente. La D tienta por el nombre, pero la desfibrilación es para el paro, sin pulso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 177',
      stem: 'Un paciente de 65 años, con antecedente de un infarto agudo al miocardio, hace 2 años, presenta un síncope, con compromiso de conciencia que requirió maniobras de reanimación para recuperarse.',
      question: '¿Qué arritmia es la que debe descartarse en primer lugar?',
      options: [
        { letter: 'A', text: 'Taquicardia paroxística supraventricular' },
        { letter: 'B', text: 'Bloqueo auriculoventricular completo' },
        { letter: 'C', text: 'Síndrome de Wolff Parkinson White' },
        { letter: 'D', text: 'Taquicardia ventricular' },
        { letter: 'E', text: 'Fibrilación auricular' },
      ],
      correct: 'D',
      explanation: 'Un infarto previo es el sustrato de la reentrada ventricular: el síncope con necesidad de reanimación orienta a una taquicardia ventricular, la arritmia más grave y letal de la lista.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Un paciente de sesenta y cinco años con un infarto hace dos años tiene un síncope con compromiso de conciencia que requirió reanimación.',
        question: '¿Qué arritmia debe descartarse en primer lugar?',
        options: 'Las opciones: TPSV; bloqueo AV completo; Wolff-Parkinson-White; taquicardia ventricular; o fibrilación auricular. Piénsalo.',
        answer: 'Es la D. El infarto previo orienta a taquicardia ventricular, que además es la más letal. La B tienta, porque un bloqueo completo también da síncope, pero el antecedente de infarto y la reanimación apuntan a la ventricular.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 92',
      stem: 'Hombre de 75 años que hace 4 años tuvo un infarto y actualmente presenta palpitaciones intensas y compromiso de conciencia que se recupera después de reanimación cardiopulmonar.',
      question: '¿Qué arritmia debe descartarse en primer lugar?',
      options: [
        { letter: 'A', text: 'Fibrilación Auricular' },
        { letter: 'B', text: 'Taquicardia Ventricular' },
        { letter: 'C', text: 'Taquicardia paroxística supraventricular' },
        { letter: 'D', text: 'Bloqueo A-V de segundo grado mobitz 1' },
        { letter: 'E', text: 'Flutter auricular' },
      ],
      correct: 'B',
      explanation: 'Palpitaciones con pérdida de conciencia y reanimación en un paciente con infarto previo: taquicardia ventricular, por reentrada alrededor de la cicatriz. También podría ser una fibrilación ventricular, que suele estar precedida de una TV.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un hombre de setenta y cinco años, con un infarto hace cuatro, tiene palpitaciones intensas y pérdida de conciencia que se recupera tras reanimación.',
        question: '¿Qué arritmia debe descartarse primero?',
        options: 'Las opciones: fibrilación auricular; taquicardia ventricular; TPSV; bloqueo AV Mobitz uno; o flutter. Piénsalo.',
        answer: 'Es la B. Palpitaciones, pérdida de conciencia y reanimación en alguien con infarto previo es una taquicardia ventricular. La A tienta porque las palpitaciones son comunes en la fibrilación, pero no explican el paro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 52 años en tratamiento con claritromicina por neumonía presenta palpitaciones y mareos. El ECG revela ritmo sinusal a 75 lpm, intervalo QT medido de 520 ms y RR de 800 ms (QTc calculado de 581 ms mediante fórmula de Bazett).',
      question: '¿Cuál es la conducta médica inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Suspender de inmediato la claritromicina, monitorizar al paciente y corregir eventuales trastornos hidroelectrolíticos' },
        { letter: 'B', text: 'Iniciar amiodarona endovenosa para prevenir taquiarritmias' },
        { letter: 'C', text: 'Indicar cardioversión eléctrica sincronizada' },
        { letter: 'D', text: 'Administrar sulfato de atropina 1 mg endovenoso' },
        { letter: 'E', text: 'Tranquilizar al paciente e indicar control ambulatorio en 1 semana' },
      ],
      correct: 'A',
      explanation: 'Un QTc mayor de 500 ms es un riesgo crítico de torsión de puntas: se suspende el fármaco causante, se monitoriza y se corrigen el potasio y el magnesio. La amiodarona prolonga el QT; no hay taquiarritmia que cardiovertir.',
      say: {
        stem: 'Una pregunta del banco del libro. Un hombre de cincuenta y dos años en tratamiento con claritromicina por una neumonía tiene palpitaciones y mareos. El electrocardiograma muestra ritmo sinusal con un QTc de quinientos ochenta y uno.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Las opciones: suspender la claritromicina, monitorizar y corregir los electrolitos; amiodarona; cardioversión; atropina; o control ambulatorio. Piénsalo.',
        answer: 'Es la A. Con un QTc mayor de quinientos se suspende el fármaco, se monitoriza y se corrigen los electrolitos. La B tienta porque la amiodarona es un antiarrítmico, pero alarga el QT y está contraindicada.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: taquicardia ancha y QT largo',
      cards: [
        { title: 'Taquicardia ancha', tag: 'Pulso y estabilidad', kind: 'key', items: [
          { t: 'Ancho = TV hasta demostrar lo contrario', d: 'Infarto previo: TV',
            say: 'Cerremos con las reglas de oro. Una taquicardia ancha es taquicardia ventricular hasta demostrar lo contrario.' },
          { t: 'Sin pulso: desfibrilar · inestable: cardioversión · estable: amiodarona', d: 'Verapamilo contraindicado',
            say: 'Sin pulso, se desfibrila; inestable con pulso, cardioversión sincronizada; estable, amiodarona. Y nunca verapamilo.' },
        ] },
        { title: 'QT largo', tag: 'QTc > 500 ms', kind: 'alert', items: [
          { t: 'Suspender el fármaco, corregir K, Mg y Ca', d: 'Macrólidos, quinolonas, antipsicóticos',
            say: 'Con un QTc sobre quinientos, suspendes el fármaco y corriges los electrolitos.' },
          { t: 'Torsión de puntas: magnesio 2 g EV', d: 'No amiodarona',
            say: 'La torsión de puntas se trata con sulfato de magnesio, y no con amiodarona.' },
          { t: 'DAI: prevención secundaria y FEVI ≤ 35%', d: 'Cardioversión ≠ desfibrilación',
            say: 'Si te llevas una sola idea de hoy: ante una taquicardia ancha, mira primero al paciente, no el trazado: pulso y estabilidad deciden la descarga. Nos vemos en la próxima clase, donde veremos el otro extremo del ritmo: las bradicardias y los bloqueos.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Taquicardia de complejo ancho: del pulso a la conducta',
    root: N('start', 'Taquicardia de QRS ancho', 'Asumir TV',
      'Llega un paciente con una taquicardia de complejo ancho. La asumes ventricular y lo primero que miras es si tiene pulso y si está estable.',
      ['Sin pulso', N('alert', 'Es un paro', 'Desfibrilar y RCP',
        'Sin pulso, es un paro por taquicardia ventricular sin pulso o fibrilación: desfibrilación y reanimación, como vimos en la clase de ACLS.')],
      ['Con pulso, inestable', N('alert', 'Cardioversión eléctrica sincronizada', 'Inmediata, con sedación',
        'Con pulso pero con hipotensión, compromiso de conciencia, dolor isquémico o edema pulmonar, cardioversión eléctrica sincronizada inmediata.')],
      ['Con pulso, estable', N('q', 'ECG de 12 derivaciones', 'Monitor y desfibrilador a mano',
        'Si está estable, monitorizas y tomas un electrocardiograma de doce derivaciones.',
        ['TV monomorfa', N('do', 'Amiodarona 150 mg EV en 10 min', 'Luego infusión · derivar',
          'Si es una taquicardia ventricular monomorfa, amiodarona ciento cincuenta miligramos en diez minutos, y derivas para estudiar la cardiopatía y evaluar un desfibrilador. Nunca verapamilo.')],
        ['QT largo, polimorfa', N('ok', 'Torsión de puntas', 'Magnesio 2 g EV · suspender fármaco',
          'Si el QTc es mayor de quinientos y la taquicardia es polimorfa, es una torsión de puntas: sulfato de magnesio, suspender el fármaco, corregir los electrolitos y, si degenera en fibrilación, desfibrilar.')],
      )],
    ),
  },
};
