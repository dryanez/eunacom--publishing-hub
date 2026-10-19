// Clase 1.6 (Cardiología) — Taquicardia paroxística supraventricular y síndrome de Wolff-Parkinson-White. Guion escrito a mano.
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_1.cjs (cardio-06). Código 1.01.1.024 Taquicardia paroxística supraventricular
// (Dx específico, Tx inicial, seguimiento completo), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-06): Julio 2025 P44 (TPSV estable: adenosina), Enero 2023 P141 (adenosina 6 mg en bolo
// rápido) y Julio 2025 P134 (PR corto y onda delta: WPW). Enunciados y alternativas copiados del banco. Se agrega una pregunta del banco
// del libro (Banco Oficial AEE) sobre el fármaco prohibido en la FA preexcitada.
// No usadas: Diciembre 2025 P3, Diciembre 2022 P59 y Diciembre 2022 P87 (dependen de un ECG que el banco no trae; P87 además tiene clave
// dudosa: dice bloqueo de rama izquierda para una TPSV); Julio 2013 P69 (niño de 10 años: la clave es el masaje carotídeo, que otra
// pregunta del banco desaconseja en niños; anotada en las dudas); Enero 2023 P140 (repite Julio 2025 P134); Diciembre 2024 P31 (alternativas rotas).
// Fotos en contexto: Stroobandt, Barold y Sinnaeve, «ECG from Basics to Essentials» (Wiley, 2016), p. 270, 275, 313 y 320, en
// classes/media/biblioteca/20_cardiologia/cardio-06/.
// En movimiento: scenes/cardio_b1.html ?v=tpsv (gráfico propio del circuito de reentrada y del ECG).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });
const STRO = p => `Stroobandt, Barold y Sinnaeve. ECG from Basics to Essentials (Wiley, 2016), p. ${p}`;

module.exports = {
  id: 'cardio-06',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Maniobras vagales, adenosina en bolo rápido y el fármaco que nunca se da en el WPW con fibrilación',
      say: 'Bienvenido. Un joven llega al SAPU con el corazón a ciento ochenta, regular, que empezó de golpe. Es la taquicardia paroxística supraventricular, y el examen la pregunta casi todos los años: primero maniobras vagales, después adenosina en bolo rápido. Detrás está el síndrome de Wolff-Parkinson-White, que esconde una trampa mortal: la fibrilación auricular preexcitada, en la que los frenadores del nodo están prohibidos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Un circuito que gira',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'cause', t: 'Extrasístole auricular', s: 'Gatillo de la crisis' },
        { id: 'l', col: 1, row: 0, k: 'mech', t: 'Vía lenta', s: 'Refractario corto' },
        { id: 'r', col: 1, row: 2, k: 'mech', t: 'Vía rápida', s: 'Refractario largo' },
        { id: 'c', col: 2, row: 1, k: 'effect', t: 'Reentrada', s: 'El impulso gira 150-220/min' },
        { id: 'e', col: 3, row: 1, k: 'alert', t: 'QRS estrecho regular', s: 'Inicio y fin súbitos' },
        { id: 'g', col: 4, row: 1, k: 'good', t: 'Cortar el circuito', s: 'Vagal o adenosina' },
      ],
      edges: [{ from: 'a', to: 'l' }, { from: 'a', to: 'r' }, { from: 'l', to: 'c' }, { from: 'r', to: 'c' }, { from: 'c', to: 'e' }, { from: 'e', to: 'g' }],
      steps: [
        { show: ['a', 'l', 'r'], note: 'Dos vías en el nodo AV',
          say: 'En seis de cada diez casos la causa es una reentrada nodal: el nodo aurículo-ventricular tiene dos vías, una lenta y otra rápida. Una extrasístole auricular entra por una de ellas y vuelve por la otra, y el impulso empieza a girar.' },
        { show: ['c', 'e'], note: 'Taquicardia regular y angosta',
          say: 'Ese circuito produce una taquicardia regular de QRS angosto, entre ciento cincuenta y doscientos veinte latidos por minuto, de inicio y término súbitos. En tres de cada diez casos el circuito pasa por una vía accesoria, un haz de Kent, y es el síndrome de Wolff-Parkinson-White.' },
        { show: ['g'], note: 'Se corta bloqueando el nodo AV',
          say: 'Para terminar la crisis hay que bloquear un instante el nodo aurículo-ventricular: eso hacen las maniobras vagales y la adenosina.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Taquicardia regular de QRS estrecho',
      cards: [
        { title: 'El trazado', tag: 'TPSV típica', kind: 'criteria', items: [
          { t: 'Regular, QRS < 120 ms, 150-220 lpm', d: 'P oculta o pseudo-r\' en V1',
            say: 'Mira este electrocardiograma. Es una taquicardia regular, de complejo estrecho, sin ondas P visibles: están escondidas dentro del QRS. A veces se ven como una pequeña r prima en V uno. Así se ve una taquicardia por reentrada nodal.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-06/01_tpsv-reentrada-nodal-qrs-estrecho__stroobandt-ecg_p270.jpg', label: 'TPSV por reentrada nodal', at: 'Mira este electrocardiograma', credit: STRO(270) } },
          { t: 'Joven sano, palpitaciones súbitas', d: 'Cafeína, alcohol, estrés',
            say: 'Típicamente es un adulto joven sin cardiopatía, con palpitaciones regulares de inicio brusco, opresión torácica y mareo.' },
        ] },
        { title: 'Diferenciales', tag: 'Regular y angosta', kind: 'alert', items: [
          { t: 'Taquicardia sinusal: inicio gradual', d: '< 150-160 y con causa',
            say: 'La taquicardia sinusal empieza gradual, rara vez pasa de ciento cincuenta y tiene una causa, como fiebre o anemia.' },
          { t: 'Flutter 2:1: 150 exactos', d: 'Sierra con maniobra vagal o adenosina',
            say: 'El flutter con conducción dos a uno es de ciento cincuenta exactos, y las ondas de sierra aparecen con la maniobra vagal o la adenosina, sin terminar la arritmia.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'El circuito y la adenosina',
      images: [
        { src: 'animaciones/cardio-06/A1_tpsv_reentrada_adenosina.mp4', label: 'Reentrada nodal, inicio y término de la crisis', credit: 'Animación propia con los criterios del libro' },
      ],
      steps: [
        { note: 'Gira, se corta y vuelve el ritmo sinusal',
          say: 'Mira cómo funciona. Con ritmo sinusal normal, una extrasístole inicia la crisis: el impulso gira entre la vía lenta y la rápida, y en el trazado aparece una taquicardia regular de ciento ochenta. La maniobra vagal puede cortarla. Si no, la adenosina en bolo rápido bloquea un instante el nodo, el circuito se interrumpe, hay una breve pausa y vuelve el ritmo sinusal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Paciente inestable o estable',
      title: 'Manejo escalonado',
      cards: [
        { title: 'Inestable', tag: 'No se espera', kind: 'alert', items: [
          { t: 'Cardioversión eléctrica sincronizada', d: '50-100 J, con sedación si es posible',
            say: 'Si hay hipotensión, shock, edema pulmonar o dolor isquémico, como en toda taquiarritmia inestable, cardioversión eléctrica sincronizada inmediata.' },
        ] },
        { title: 'Estable', tag: 'Tres escalones', kind: 'key', items: [
          { t: '1.º maniobra de Valsalva modificada', d: 'Soplar 15 s y acostar con las piernas arriba',
            say: 'En el paciente estable, primer escalón: las maniobras vagales. La más efectiva es el Valsalva modificado: sentado, sopla en una jeringa de diez mililitros durante quince segundos y, de inmediato, lo acuestas con las piernas elevadas por quince segundos. Revierte casi la mitad de los episodios. El masaje carotídeo no se recomienda en adultos mayores con ateroma ni en niños, y la presión ocular está contraindicada.' },
          { t: '2.º adenosina 6 mg en bolo + 20 mL de suero', d: 'Si no revierte: 12 mg, hasta 2 veces',
            say: 'Segundo escalón, adenosina seis miligramos en bolo ultrarrápido, en uno a dos segundos, por una vena gruesa, seguida inmediatamente de veinte mililitros de suero. Si no revierte, doce miligramos, y una segunda vez doce.' },
          { t: '3.º verapamilo 5-10 mg EV lento', d: 'Sin IC ni hipotensión',
            say: 'Tercer escalón, verapamilo cinco a diez miligramos endovenosos lentos, siempre que no haya insuficiencia cardíaca ni hipotensión.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Adenosina',
      title: 'Por qué en bolo rápido',
      cards: [
        { title: 'Farmacología', tag: 'Vida media < 10 segundos', kind: 'pharma', items: [
          { t: 'Vena proximal, bolo en 1-2 s, suero rápido', d: 'Elevar el brazo',
            say: 'La adenosina tiene una vida media de menos de diez segundos. Por eso se inyecta en bolo ultrarrápido en una vena proximal y se empuja con suero: si se pasa lento, no llega al nodo.' },
          { t: 'Rubor, opresión torácica, pausa transitoria', d: 'Avisar al paciente',
            say: 'Avisas al paciente que sentirá rubor, opresión en el pecho y una breve pausa. Está contraindicada en el asma grave. El dipiridamol y la carbamazepina potencian su efecto y la teofilina y la cafeína lo bloquean.' },
        ] },
        { title: 'Después', tag: 'Tratamiento definitivo', kind: 'key', items: [
          { t: 'Ablación por radiofrecuencia', d: 'Curativa en más del 95%',
            say: 'El tratamiento definitivo de la taquicardia recidivante o mal tolerada es la ablación por radiofrecuencia, curativa en más del noventa y cinco por ciento de los casos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Síndrome de Wolff-Parkinson-White',
      title: 'PR corto, onda delta y QRS ancho',
      cards: [
        { title: 'Preexcitación en ritmo sinusal', tag: 'La tríada', kind: 'criteria', items: [
          { t: 'PR < 120 ms · onda delta · QRS > 120 ms', d: 'Empastamiento del inicio del QRS',
            say: 'El síndrome de Wolff-Parkinson-White se reconoce en ritmo sinusal por una tríada: PR corto, menor de ciento veinte milisegundos; onda delta, que es el empastamiento al inicio del QRS; y un QRS ancho. Mira este trazado.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-06/03_wpw-pr-corto-onda-delta__stroobandt-ecg_p313.jpg', label: 'WPW: PR corto y onda delta', at: 'Mira este trazado', credit: STRO(313) } },
          { t: 'Vía accesoria: el haz de Kent', d: 'Une aurícula y ventrículo sin retraso',
            say: 'La vía accesoria conduce el impulso sin el retraso del nodo, y por eso una parte del ventrículo se activa antes. Puede dar crisis de taquicardia ortodrómica, con QRS estrecho, o antidrómica, con QRS ancho.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-06/02_wpw-sinusal-ortodromica-antidromica__stroobandt-ecg_p275.jpg', label: 'Sinusal, orto y antidrómica', at: 'Puede dar crisis de taquicardia', credit: STRO(275) } },
        ] },
        { title: 'Otras ideas', tag: 'Para el examen', kind: 'key', items: [
          { t: 'Puede simular un infarto', d: 'Q falsas por la preexcitación',
            say: 'La preexcitación puede simular ondas Q de infarto. Y el síndrome aparece en jóvenes, a veces con una anomalía de Ebstein.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'La trampa mortal',
      title: 'FA preexcitada: fármacos prohibidos',
      cards: [
        { title: 'Reconocerla', tag: 'Ancha, irregular y > 200', kind: 'alert', items: [
          { t: 'QRS ancho, irregular, 200-250 lpm', d: 'Complejos de morfología variable',
            say: 'La complicación más letal del síndrome es la fibrilación auricular que conduce por la vía accesoria. Mira este electrocardiograma: una taquicardia de complejo ancho, completamente irregular, con QRS de morfología variable y más de doscientos latidos por minuto. Parece una taquicardia ventricular, pero la irregularidad extrema la delata.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-06/04_fa-preexcitada-wpw-rapida-irregular__stroobandt-ecg_p320.jpg', label: 'FA preexcitada en WPW', at: 'Mira este electrocardiograma', credit: STRO(320) } },
        ] },
        { title: 'Qué no se da', tag: 'Bloquean el nodo AV', kind: 'alert', items: [
          { t: 'Adenosina, verapamilo, diltiazem, digoxina, betabloqueadores', d: 'También amiodarona',
            say: 'En este cuadro están prohibidos todos los fármacos que frenan el nodo: adenosina, verapamilo, diltiazem, digoxina y betabloqueadores. Al bloquear el nodo, todos los impulsos auriculares caóticos pasan por la vía accesoria, de conducción ultrarrápida, y se desencadena una fibrilación ventricular.' },
          { t: 'Cardioversión eléctrica o procainamida', d: 'Ablación de la vía accesoria',
            say: 'El tratamiento es la cardioversión eléctrica sincronizada, o procainamida endovenosa si está estable, y después ablación de la vía accesoria.' },
        ] },
      ],
    },

    { type: 'pathway', intro: 'Armemos el árbol: de la taquicardia angosta al tratamiento.' },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'TPSV y WPW: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Taquicardia regular angosta, estable', 'Valsalva modificado → adenosina 6 mg', 'Amiodarona o verapamilo primero'],
          say: 'Taquicardia regular y angosta en un paciente estable: Valsalva modificado y luego adenosina seis miligramos. El error es partir por amiodarona o verapamilo.' },
        { cells: ['Adenosina que no revierte', 'Bolo rápido con 20 mL de suero; 12 mg', 'Pasarla lenta'],
          say: 'Si la adenosina no revierte, revisas la técnica: bolo rápido con suero. Pasarla lenta es un error.' },
        { cells: ['Inestable', 'Cardioversión sincronizada', 'Insistir con fármacos'],
          say: 'Si está inestable, cardioversión, aunque sea supraventricular. Insistir con fármacos es el error.' },
        { cells: ['PR corto + onda delta', 'WPW: ablación', 'Dar digoxina o verapamilo'],
          say: 'PR corto con onda delta es Wolff-Parkinson-White: ablación. Digoxina o verapamilo no se dan.' },
        { cells: ['QRS ancho, irregular, > 200 lpm', 'Cardioversión o procainamida', 'Verapamilo, adenosina o betabloqueador'],
          say: 'QRS ancho, irregular y más de doscientos: fibrilación preexcitada. Cardioversión o procainamida; el verapamilo, la adenosina y los betabloqueadores matan.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 24 años con palpitaciones ocasionales desde la adolescencia consulta por palpitaciones intensas, mareo y disnea. ECG: taquicardia de QRS ancho de 150 ms, de morfología variable, totalmente irregular, a 220 lpm. PA 105/65 mmHg. El interno propone verapamilo 5 mg EV.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Verapamilo 5 mg endovenoso' },
        { letter: 'B', text: 'Adenosina 6 mg en bolo rápido' },
        { letter: 'C', text: 'Digoxina endovenosa' },
        { letter: 'D', text: 'Cardioversión eléctrica sincronizada (o procainamida si está estable)' },
        { letter: 'E', text: 'Propranolol endovenoso' },
      ],
      correct: 'D',
      explanation: 'Taquicardia de QRS ancho, irregular y a más de 200 lpm en una mujer joven con palpitaciones previas: fibrilación auricular preexcitada (WPW). Los fármacos que frenan el nodo AV (verapamilo, adenosina, digoxina, betabloqueadores) derivan todo por el haz de Kent y provocan fibrilación ventricular. Corresponde cardioversión sincronizada o procainamida, y ablación de la vía accesoria.',
      say: {
        stem: 'Una mujer de veinticuatro años, con palpitaciones ocasionales desde joven, consulta por palpitaciones intensas, mareo y disnea. El electrocardiograma muestra una taquicardia de complejo ancho, de morfología variable, totalmente irregular, a doscientos veinte por minuto. La presión es de ciento cinco sobre sesenta y cinco. El interno propone verapamilo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: verapamilo; adenosina; digoxina; cardioversión sincronizada o procainamida; o propranolol. Piénsalo.',
        answer: 'Es la D. Es una fibrilación auricular preexcitada: la conducta es la cardioversión sincronizada, o procainamida si está estable. La A, la B, la C y la E bloquean el nodo y desvían todo por la vía accesoria, con riesgo de fibrilación ventricular. La B tienta porque la adenosina es la estrella de la clase, pero acá está prohibida.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 44',
      stem: 'Joven de 22 años con palpitaciones súbitas de inicio y término brusco. ECG en crisis: taquicardia regular de QRS estrecho a 180 lpm. Cede con maniobra de Valsalva.',
      question: '¿Cuál es el tratamiento farmacológico de elección si reaparece?',
      options: [
        { letter: 'A', text: 'Adenosina IV en bolo rápido' },
        { letter: 'B', text: 'Amiodarona EV' },
        { letter: 'C', text: 'Metoprolol oral' },
        { letter: 'D', text: 'Digoxina IV' },
        { letter: 'E', text: 'Cardioversión eléctrica sincronizada' },
      ],
      correct: 'A',
      explanation: 'Es una TPSV estable: si las maniobras vagales fallan, la adenosina IV 6 mg en bolo rápido es el fármaco de elección por su efecto ultrabreve sobre el nodo AV. La cardioversión se reserva para la inestabilidad.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un joven de veintidós años tiene palpitaciones de inicio y término bruscos. El electrocardiograma muestra una taquicardia regular de QRS estrecho a ciento ochenta, que cede con la maniobra de Valsalva.',
        question: '¿Cuál es el tratamiento farmacológico de elección si reaparece?',
        options: 'Las opciones: adenosina en bolo rápido; amiodarona; metoprolol oral; digoxina; o cardioversión sincronizada. Piénsalo.',
        answer: 'Es la A. Es una TPSV estable; si las maniobras no bastan, adenosina en bolo rápido. La E tienta, pero la cardioversión se reserva para el paciente inestable.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 141',
      stem: 'Paciente con palpitaciones regulares y taquicardia supraventricular en el ECG.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Verapamilo 5 mg EV lento' },
        { letter: 'B', text: 'Amiodarona 300 mg EV' },
        { letter: 'C', text: 'Cardioversión eléctrica sincronizada' },
        { letter: 'D', text: 'Metoprolol 5 mg EV' },
        { letter: 'E', text: 'Adenosina 6 mg IV en bolo rápido' },
      ],
      correct: 'E',
      explanation: 'Tras las maniobras vagales, el tratamiento farmacológico de la TPSV estable es la adenosina 6 mg IV en bolo rápido. El verapamilo es de tercera línea y la cardioversión se reserva para el paciente inestable.',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un paciente tiene palpitaciones regulares y una taquicardia supraventricular en el electrocardiograma.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: verapamilo lento; amiodarona; cardioversión sincronizada; metoprolol; o adenosina seis miligramos en bolo rápido. Piénsalo.',
        answer: 'Es la E. La adenosina seis miligramos en bolo rápido es el fármaco de elección después de las maniobras vagales. La A tienta porque el verapamilo también frena el nodo, pero es de tercera línea.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 134',
      stem: 'Mujer de 25 años con palpitaciones paroxísticas. ECG en sinusal muestra intervalo PR corto y onda delta. Episodio de TPSV con QRS ancho.',
      question: '¿Cuál es el diagnóstico?',
      options: [
        { letter: 'A', text: 'Síndrome de Wolff-Parkinson-White (WPW)' },
        { letter: 'B', text: 'Fibrilación auricular' },
        { letter: 'C', text: 'Taquicardia ventricular' },
        { letter: 'D', text: 'Bloqueo AV completo' },
        { letter: 'E', text: 'Síndrome de QT largo' },
      ],
      correct: 'A',
      explanation: 'PR corto más onda delta en ritmo sinusal define la preexcitación; con taquicardias paroxísticas es un síndrome de Wolff-Parkinson-White. La taquicardia puede ser ortodrómica (QRS estrecho) o antidrómica (QRS ancho).',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Una mujer de veinticinco años con palpitaciones paroxísticas tiene, en ritmo sinusal, un PR corto y una onda delta, y un episodio de taquicardia con QRS ancho.',
        question: '¿Cuál es el diagnóstico?',
        options: 'Las opciones: Wolff-Parkinson-White; fibrilación auricular; taquicardia ventricular; bloqueo AV completo; o QT largo. Piénsalo.',
        answer: 'Es la A. PR corto y onda delta son la preexcitación, y con crisis paroxísticas es un Wolff-Parkinson-White. La C tienta por el QRS ancho, pero la antidrómica también es ancha.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: '¿Cuál de los siguientes fármacos puede desencadenar fibrilación ventricular y paro cardíaco si se administra a un paciente con fibrilación auricular preexcitada (Wolff-Parkinson-White)?',
      question: '',
      options: [
        { letter: 'A', text: 'Verapamilo' },
        { letter: 'B', text: 'Procainamida' },
        { letter: 'C', text: 'Ibutilide' },
        { letter: 'D', text: 'Sulfato de magnesio' },
        { letter: 'E', text: 'Quinidina' },
      ],
      correct: 'A',
      explanation: 'El verapamilo frena el nodo AV sin afectar la vía accesoria: los impulsos auriculares pasan sin resistencia por la vía rápida y gatillan una fibrilación ventricular. En la FA preexcitada se cardioverte o se da procainamida.',
      say: {
        stem: 'Una pregunta del banco del libro. Se pregunta cuál fármaco puede desencadenar fibrilación ventricular en un paciente con fibrilación auricular preexcitada.',
        question: '¿Cuál es el fármaco?',
        options: 'Las opciones: verapamilo; procainamida; ibutilide; sulfato de magnesio; o quinidina. Piénsalo.',
        answer: 'Es la A. El verapamilo frena el nodo y desvía los impulsos por la vía accesoria. La B tienta, pero la procainamida es justamente el fármaco que se usa en el paciente estable.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: TPSV y WPW',
      cards: [
        { title: 'TPSV', tag: 'Regular y angosta', kind: 'key', items: [
          { t: 'Inestable: cardioversión', d: 'Estable: Valsalva → adenosina → verapamilo',
            say: 'Cerremos con las reglas de oro. En la taquicardia supraventricular inestable, cardioversión. Si está estable, primero Valsalva modificado, luego adenosina seis miligramos en bolo rápido con suero, y como tercer escalón, verapamilo.' },
          { t: 'Adenosina: vida media < 10 s', d: 'Asma grave: contraindicada',
            say: 'La adenosina se da en bolo ultrarrápido por su vida media corta, y está contraindicada en el asma grave.' },
        ] },
        { title: 'WPW', tag: 'La trampa', kind: 'alert', items: [
          { t: 'PR corto + onda delta', d: 'Ablación curativa',
            say: 'El síndrome de Wolff-Parkinson-White tiene PR corto y onda delta, y se cura con ablación.' },
          { t: 'FA preexcitada: ancha, irregular, > 200', d: 'Cardioversión o procainamida',
            say: 'Si el cuadro es de complejo ancho, irregular y de más de doscientos, es fibrilación preexcitada: cardioversión o procainamida.' },
          { t: 'Nunca adenosina, verapamilo, digoxina ni betabloqueador', d: 'Bloquean el nodo y matan',
            say: 'Si te llevas una sola idea de hoy: lo que frena el nodo salva a la taquicardia angosta y mata a la ancha preexcitada. Mira el QRS y la regularidad antes de elegir el fármaco. Nos vemos en la próxima clase, donde veremos la taquicardia de complejo ancho y el QT largo.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Taquicardia paroxística supraventricular: de la crisis a la conducta',
    root: N('start', 'Taquicardia regular de QRS estrecho', '150-220 lpm, inicio súbito',
      'Llega un joven con palpitaciones de inicio súbito. El electrocardiograma muestra una taquicardia regular de QRS estrecho, entre ciento cincuenta y doscientos veinte: una taquicardia paroxística supraventricular.',
      ['Inestable', N('alert', 'Cardioversión eléctrica sincronizada', '50-100 J',
        'Si hay hipotensión, shock, edema pulmonar o dolor isquémico, cardioversión eléctrica sincronizada inmediata.')],
      ['Estable', N('q', 'Maniobra de Valsalva modificada', 'Primera línea',
        'Si está estable, partes con maniobras vagales, y la más efectiva es el Valsalva modificado.',
        ['No revierte', N('do', 'Adenosina 6 mg en bolo + 20 mL', 'Luego 12 mg, hasta 2 veces',
          'Si no revierte, adenosina seis miligramos en bolo rápido con veinte mililitros de suero, y doce miligramos si es necesario.',
          ['Falla', N('refer', 'Verapamilo 5-10 mg EV lento', 'Sin IC ni hipotensión',
            'Si falla, verapamilo lento, siempre que no haya insuficiencia cardíaca ni hipotensión. Y para evitar recidivas, se deriva a ablación.')])],
        ['Revierte', N('ok', 'Ritmo sinusal', 'Ablación si recidiva o WPW',
          'Si revierte, buscas un síndrome de Wolff-Parkinson-White en el ECG de reposo y, si recidiva o hay preexcitación, derivas a ablación.')],
      )],
      ['QRS ancho, irregular, > 200', N('alert', 'FA preexcitada (WPW)', 'Cardioversión o procainamida',
        'Si la taquicardia es de complejo ancho, irregular y de más de doscientos, es una fibrilación auricular preexcitada: cardioversión sincronizada o procainamida. Nunca adenosina, verapamilo, digoxina ni betabloqueadores.')],
    ),
  },
};
