const fs = require('fs'), path = require('path');
const BANK = JSON.parse(fs.readFileSync(path.join(__dirname, '..', '..', 'books', 'data', 'real_questions_by_code.json'), 'utf8'));
const fix = s => s.replace(/([a-záéíóúñ])- ([a-záéíóúñ])/g, '$1$2').replace(/\s+/g, ' ').trim();
// Pregunta real del banco: enunciado y alternativas tal cual (solo se unen las palabras cortadas por guion del PDF).
function realQuiz(tag, explanation, say, edit) {
  let q; for (const v of Object.values(BANK)) { q = v.find(x => x.recTag === tag); if (q) break; }
  if (!q) throw new Error('no está en el banco: ' + tag);
  let stem = fix(q.stem), question = 'Elige la alternativa correcta.';
  const i = stem.lastIndexOf('¿');
  if (i > 0) { question = stem.slice(i); stem = stem.slice(0, i).trim(); }
  else { const m = stem.match(/^(.*[.?])\s+([^.?]+:)$/); if (m) { stem = m[1]; question = m[2]; } }
  const options = q.options.map(o => ({ letter: o.id, text: fix(o.text) }));
  if (edit) edit(options);
  return { type: 'quiz', kicker: 'Pregunta real EUNACOM', title: tag, stem, question, options, correct: q.correcta, explanation, say };
}
const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });
const PH_G = { src: 'biblioteca/20_cardiologia/cardio-20/01_mch-pieza-hipertrofia-septal__harrison_p2010.jpg', label: 'Septo asimétrico (pieza)', at: 'Mira esta pieza', credit: "Harrison's Principles of Internal Medicine, 21.ª ed., Fig. 259-15" };
const PH_E = { src: 'biblioteca/20_cardiologia/cardio-20/02_mch-ecocardiograma-septo__harrison_p2011.jpg', label: 'Eco: septo engrosado', at: 'Y en este ecocardiograma', credit: "Harrison's Principles of Internal Medicine, 21.ª ed., Fig. 259-16" };

module.exports = {
  id: 'cardio-20',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La cardiopatía hereditaria más frecuente y una causa principal de muerte súbita del deportista joven',
      say: 'Bienvenido. Un futbolista de diecinueve años se desmaya en plena cancha, y un hermano murió de muerte súbita a los veintidós. Son las historias que hacen pensar en la miocardiopatía hipertrófica. Hoy vemos qué es, por qué su soplo cambia con las maniobras, qué fármacos están prohibidos y quién necesita un desfibrilador. Es una pregunta frecuente del examen y, sobre todo, un diagnóstico que puede salvar la vida de un joven y de su familia.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'De una mutación a un septo que obstruye',
      nodes: [
        { id: 'g', col: 0, row: 1, k: 'cause', t: 'Mutación del sarcómero', s: 'Autosómica dominante' },
        { id: 'h', col: 1, row: 1, k: 'mech', t: 'Hipertrofia y desorden', s: 'Septo ≥ 15 mm' },
        { id: 'o', col: 2, row: 0, k: 'effect', t: 'Obstrucción dinámica', s: 'SAM de la mitral' },
        { id: 'd', col: 2, row: 2, k: 'effect', t: 'Rigidez diastólica', s: 'Disnea de esfuerzo' },
        { id: 'a', col: 3, row: 1, k: 'alert', t: 'Arritmias', s: 'TV, FA' },
        { id: 'm', col: 4, row: 1, k: 'alert', t: 'Muerte súbita', s: 'A veces la primera señal' },
      ],
      edges: [{ from: 'g', to: 'h' }, { from: 'h', to: 'o' }, { from: 'h', to: 'd' }, { from: 'o', to: 'a' }, { from: 'd', to: 'a' }, { from: 'a', to: 'm' }],
      steps: [
        { show: ['g', 'h'], note: 'Un defecto del sarcómero',
          say: 'La miocardiopatía hipertrófica es una enfermedad genética, autosómica dominante, por mutaciones en proteínas del sarcómero. Los miocitos crecen y se desorganizan, y el músculo se engruesa, sobre todo el tabique, quince milímetros o más. Afecta a uno de cada quinientos y cada hijo de un afectado tiene cincuenta por ciento de heredarla.' },
        { show: ['o', 'd'], note: 'Obstrucción y rigidez',
          say: 'Esto produce dos problemas. Uno es la rigidez: el ventrículo no se llena bien y eso da la disnea. El otro es la obstrucción dinámica: durante la sístole, el flujo rápido por la salida angosta succiona la valva anterior de la mitral contra el tabique, el movimiento sistólico anterior, y cierra el tracto de salida.' },
        { show: ['a', 'm'], note: 'El sustrato arritmogénico',
          say: 'La fibrosis y el desorden de las fibras crean un sustrato para la taquicardia ventricular y la fibrilación auricular. Por eso el síncope de esfuerzo y la muerte súbita son las complicaciones temidas, y a veces la primera manifestación.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Qué es',
      title: 'Hipertrofia que nadie explica',
      cards: [
        { title: 'Definición', tag: 'Septo ≥ 15 mm', kind: 'key', items: [
          { t: 'Hipertrofia asimétrica inexplicada', d: '≥ 15 mm; ≥ 13 si hay un familiar afectado',
            say: 'La definición es una hipertrofia ventricular izquierda inexplicada, habitualmente asimétrica, en el septo, de quince milímetros o más, o trece si hay un familiar afectado. Sin hipertensión ni estenosis aórtica que la expliquen. Mira esta pieza: el tabique es mucho más grueso que la pared libre del ventrículo.',
            photo: PH_G },
          { t: 'Genes MYH7 y MYBPC3', d: 'Expresión muy variable',
            say: 'Las mutaciones más frecuentes son las de la cadena pesada de la miosina beta y de la proteína C de unión a la miosina. La expresión es muy variable: algunos nunca tienen síntomas y otros mueren jóvenes.' },
        ] },
        { title: 'Cuatro consecuencias', tag: 'Fisiopatología', kind: 'criteria', items: [
          { t: 'Disfunción diastólica, obstrucción, isquemia, arritmia', d: 'Obstrucción en dos tercios',
            say: 'Las consecuencias son cuatro: disfunción diastólica, obstrucción del tracto de salida en cerca de dos tercios de los pacientes, isquemia por desbalance entre la masa y la microcirculación, con angina y coronarias normales, y un sustrato arritmogénico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Qué cuenta el paciente y qué antecedente pregunta el examen',
      cards: [
        { title: 'Síntomas', tag: 'Muchos son asintomáticos', kind: 'normal', items: [
          { t: 'Disnea de esfuerzo; angina', d: 'Los más frecuentes',
            say: 'Muchos pacientes no tienen síntomas y se diagnostican por un soplo o un electrocardiograma anormal. Los síntomas son la disnea de esfuerzo, la más frecuente, la angina y las palpitaciones.' },
          { t: 'Presíncope o síncope de esfuerzo', d: 'Obstrucción o arritmia ventricular',
            say: 'Y el síncope o el presíncope durante el ejercicio, por la obstrucción o por una arritmia ventricular.' },
        ] },
        { title: 'Alarma', tag: 'Origen cardíaco', kind: 'alert', items: [
          { t: 'Síncope durante el ejercicio', d: 'No al pararse, ni con la micción o la tos',
            say: 'Una pregunta real de dos mil diecinueve pide qué antecedente orienta a una causa cardiogénica en una adolescente que se desmayó. La respuesta es la relación con el ejercicio. El síncope al pararse es ortostático y el de la micción o la tos es situacional, ambos disautonómicos.' },
          { t: 'Familiar con muerte súbita < 50 años', d: 'Disnea inexplicada, palpitación súbita',
            say: 'Y es señal de alarma el familiar con muerte súbita antes de los cincuenta años, el dolor torácico de esfuerzo y la disnea inexplicada en un joven.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Examen físico',
      title: 'El soplo que cambia con las maniobras',
      cards: [
        { title: 'Qué se ausculta', tag: 'Borde esternal izquierdo', kind: 'key', items: [
          { t: 'Soplo sistólico eyectivo en rombo', d: 'No se irradia a las carótidas',
            say: 'Se palpa un choque de la punta sostenido, a veces con doble impulso, y un pulso carotídeo que sube rápido. Se ausculta un soplo sistólico eyectivo en el borde esternal izquierdo y el ápex, que a diferencia de la estenosis aórtica no se irradia a las carótidas.' },
          { t: 'Soplo apical holosistólico', d: 'Insuficiencia mitral por SAM',
            say: 'A veces se agrega un soplo holosistólico en el ápex: es la insuficiencia mitral producida por el movimiento sistólico anterior.' },
        ] },
        { title: 'La pregunta clave', tag: 'Cambia con el volumen del VI', kind: 'alert', items: [
          { t: 'AUMENTA: Valsalva, de pie, nitratos', d: 'Menos volumen del ventrículo',
            say: 'El soplo aumenta con las maniobras que reducen el volumen del ventrículo: el Valsalva, ponerse de pie, y los nitratos. Al haber menos volumen, la salida se estrecha más.' },
          { t: 'DISMINUYE: cuclillas, piernas arriba, handgrip', d: 'Más volumen o poscarga',
            say: 'Disminuye con las que aumentan el volumen o la poscarga: las cuclillas, elevar las piernas y el apretón de manos isométrico. Es lo opuesto a la estenosis aórtica.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'El soplo y la maniobra',
      images: [
        { src: 'animaciones/cardio-20/A1_soplo_mch_maniobras.mp4', label: 'Soplo de la MCH según la maniobra', credit: 'Gráfico propio · criterios del Manual EUNACOM de Cardiología' },
      ],
      steps: [
        { note: 'Cuatro maniobras, un soplo que sube y baja',
          say: 'Mira el sonido del soplo en un rombo, entre el primer y el segundo ruido. En reposo tiene una intensidad. Con el Valsalva el ventrículo se vacía y la obstrucción se agrava: el soplo aumenta. De pie, lo mismo. En cuclillas el retorno sube y la salida se abre: el soplo disminuye. Y con el handgrip, la poscarga sube y también disminuye. Abajo, la estenosis aórtica hace lo contrario.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Maniobras',
      title: 'Quién cambia cómo con cada maniobra',
      head: ['Maniobra', 'MCH', 'Estenosis aórtica', 'Insuf. mitral'],
      rows: [
        { cells: ['Valsalva o de pie', 'Aumenta', 'Disminuye', 'Casi no cambia'],
          say: 'Con el Valsalva o de pie, el soplo de la miocardiopatía aumenta, el de la estenosis aórtica disminuye y el de la insuficiencia mitral casi no cambia. El prolapso mitral es el otro soplo que aumenta.' },
        { cells: ['Cuclillas o piernas arriba', 'Disminuye', 'Aumenta', 'Casi no cambia'],
          say: 'En cuclillas o con las piernas arriba, el de la miocardiopatía disminuye y el de la estenosis aórtica aumenta.' },
        { cells: ['Handgrip', 'Disminuye', 'Disminuye', 'Aumenta'],
          say: 'Con el handgrip, el de la miocardiopatía disminuye y el de la insuficiencia mitral aumenta, porque sube la poscarga y hay más regurgitación.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'ECG, ecocardiograma y estudio familiar',
      cards: [
        { title: 'ECG', tag: 'Casi siempre anormal', kind: 'criteria', items: [
          { t: 'HVI, Q profundas, T invertidas gigantes', d: 'Q inferolaterales no son infarto',
            say: 'El electrocardiograma casi siempre es anormal: hipertrofia ventricular, ondas Q profundas y angostas en las derivaciones inferiores y laterales, que no son un infarto sino la hipertrofia del tabique, y ondas T invertidas gigantes. Una pregunta de dos mil trece describe una Q en DII, DIII y aVF y una S profunda de V uno a V tres en un joven que se desmaya haciendo ejercicio, con un soplo que aumenta con Valsalva.' },
        ] },
        { title: 'Ecocardiograma', tag: 'El examen diagnóstico', kind: 'key', items: [
          { t: 'Septo ≥ 15 mm, SAM y gradiente ≥ 30', d: 'RM: fibrosis; Holter: arritmias',
            say: 'El examen diagnóstico es el ecocardiograma Doppler. Y en este ecocardiograma se ve el septo mucho más grueso que la pared lateral. Mide el movimiento sistólico anterior y el gradiente en el tracto de salida: treinta milímetros de mercurio o más define la obstrucción. La resonancia mide la fibrosis y el Holter busca arritmias.',
            photo: PH_E },
        ] },
        { title: 'Diferencial y familia', tag: 'Qué no es', kind: 'normal', items: [
          { t: 'Atleta, HTA, estenosis aórtica, amiloidosis', d: 'El atleta: septo < 13-15 mm',
            say: 'Hay que separarla de la hipertrofia del atleta, con septo menor y que regresa con el desentrenamiento, de la cardiopatía hipertensiva, de la estenosis aórtica y de la amiloidosis. A todo familiar de primer grado se le hace electrocardiograma y ecocardiograma.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Qué dar y cuándo operar',
      cards: [
        { title: 'Medidas y fármacos', tag: 'Primera línea', kind: 'pharma', items: [
          { t: 'Betabloqueador: bisoprolol, propranolol', d: 'Alarga la diástole, baja el gradiente',
            say: 'El tratamiento de los síntomas parte con un betabloqueador, que baja la frecuencia, alarga la diástole y disminuye el gradiente. Si no se tolera, verapamilo o diltiazem, siempre que no haya obstrucción grave ni hipotensión.' },
          { t: 'Evitar deshidratación y alcohol', d: 'Sin deporte competitivo intenso',
            say: 'Se evitan la deshidratación y el alcohol, que reducen el volumen ventricular, y se restringe el ejercicio competitivo y los esfuerzos isométricos intensos.' },
        ] },
        { title: 'Segunda línea', tag: 'Obstructiva sintomática', kind: 'criteria', items: [
          { t: 'Disopiramida o mavacamten', d: 'Mavacamten: inhibidor de la miosina',
            say: 'En la forma obstructiva que sigue sintomática, se agrega disopiramida o mavacamten, un inhibidor de la miosina cardíaca que reduce la contractilidad y el gradiente.' },
          { t: 'Miectomía o ablación septal', d: 'Gradiente ≥ 50 mmHg y síntomas',
            say: 'Si persisten los síntomas con gradiente de cincuenta o más, la miectomía septal quirúrgica, de elección en jóvenes, o la ablación septal con alcohol. La fibrilación auricular se anticoagula siempre.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Prohibido',
      title: 'Lo que empeora la obstrucción',
      cards: [
        { title: 'Contraindicados', tag: 'Muy preguntado', kind: 'alert', items: [
          { t: 'Nitratos y vasodilatadores', d: 'Nifedipino, hidralazina, IECA con cuidado',
            say: 'Los fármacos que reducen el volumen ventricular o aumentan la contractilidad agravan la obstrucción y están contraindicados en la forma obstructiva. Los nitratos y otros vasodilatadores, como el nifedipino y la hidralazina.' },
          { t: 'Digoxina e inótropos', d: 'Dobutamina, dopamina, milrinona',
            say: 'La digoxina y los inótropos positivos, como la dobutamina.' },
          { t: 'Diuréticos en dosis altas', d: 'Si hay shock: volumen y fenilefrina',
            say: 'Y los diuréticos en dosis altas. Si el paciente está en shock, se trata con volumen y fenilefrina, no con inótropos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Muerte súbita del joven',
      title: 'Causas, riesgo y desfibrilador',
      cards: [
        { title: 'Causas en el deportista < 35', tag: 'Qué hay que pensar', kind: 'key', items: [
          { t: 'MCH primero', d: 'Coronarias anómalas, MAVD',
            say: 'La muerte súbita del deportista joven ocurre con más frecuencia por miocardiopatía hipertrófica. Siguen las anomalías coronarias congénitas y la miocardiopatía arritmogénica del ventrículo derecho.' },
          { t: 'Canalopatías, WPW, miocarditis, Marfán', d: 'Commotio cordis',
            say: 'Y las canalopatías, como el QT largo y el Brugada, el Wolff-Parkinson-White, la miocarditis, la disección del Marfán y la conmoción cardíaca por un golpe en el tórax.' },
        ] },
        { title: 'Quién necesita DAI', tag: 'HCM Risk-SCD', kind: 'alert', items: [
          { t: 'Paro previo o TV sostenida', d: 'DAI siempre (prevención secundaria)',
            say: 'Se estima el riesgo con el puntaje HCM Risk-SCD. El desfibrilador siempre se indica en prevención secundaria, es decir, si hubo un paro o una taquicardia ventricular sostenida.' },
          { t: 'Síncope inexplicado, familiar con MS, septo ≥ 30 mm', d: 'TV no sostenida, aneurisma apical',
            say: 'En prevención primaria pesan el síncope inexplicado, el familiar con muerte súbita, el septo de treinta milímetros o más, la taquicardia ventricular no sostenida, el aneurisma apical y la fibrosis extensa. Con riesgo a cinco años de seis por ciento o más, se considera el desfibrilador.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Conducta',
      title: 'Qué hace el médico general',
      cards: [
        { title: 'Ante un joven con síncope de esfuerzo', tag: 'El mismo día', kind: 'pharma', items: [
          { t: 'Suspender el deporte competitivo', d: 'No iniciar diuréticos, nitratos ni digoxina',
            say: 'Si ves a un joven con síncope de esfuerzo o un soplo que aumenta con Valsalva, suspendes el deporte competitivo y no inicias diuréticos, nitratos ni digoxina.' },
          { t: 'ECG, ecocardiograma y derivar', d: 'Estudio de los familiares',
            say: 'Pides electrocardiograma y ecocardiograma, derivas a cardiología y estudias a los familiares de primer grado, incluidos los niños desde la adolescencia.' },
        ] },
        { title: 'Otros', tag: 'Evolución', kind: 'normal', items: [
          { t: 'FA: anticoagular siempre', d: 'Fase dilatada: tratar como IC-FEr',
            say: 'La fibrilación auricular se anticoagula aunque el puntaje sea bajo. En la rara fase dilatada, con fracción de eyección baja, se trata como insuficiencia con fracción reducida.' },
        ] },
      ],
    },

    { type: 'pathway', intro: 'Armemos el árbol: del joven con síncope de esfuerzo al manejo.' },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Miocardiopatía hipertrófica: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Síncope de esfuerzo, soplo eyectivo, hermano fallecido', 'Miocardiopatía hipertrófica', 'Brugada o QT largo'],
          say: 'Síncope de esfuerzo, soplo eyectivo y un hermano fallecido de forma súbita: miocardiopatía hipertrófica, no Brugada ni QT largo.' },
        { cells: ['Soplo que aumenta con Valsalva y de pie', 'MCH', 'Estenosis aórtica'],
          say: 'Un soplo que aumenta al pararse o con Valsalva es de miocardiopatía hipertrófica. El de la estenosis aórtica disminuye.' },
        { cells: ['MCH obstructiva con disnea', 'Betabloqueador', 'Nitratos, diuréticos o digoxina'],
          say: 'Miocardiopatía obstructiva con síntomas: betabloqueador. Los nitratos, la digoxina y los diuréticos altos están prohibidos.' },
        { cells: ['Q en DII, DIII, aVF con HVI en un joven', 'Hipertrofia septal', 'Infarto inferior'],
          say: 'Ondas Q inferiores con hipertrofia en un joven que se desmaya con el esfuerzo: es la hipertrofia del tabique, no un infarto.' },
        { cells: ['Septo 18 mm en un atleta de élite', 'Estudiar; diferenciar de MCH', 'Asumir siempre MCH'],
          say: 'En el deportista de élite, la hipertrofia fisiológica es menor y regresa con el desentrenamiento. Se estudia con eco y resonancia.' },
        { cells: ['Síncope con micción o al incorporarse', 'Disautonómico', 'Causa cardíaca'],
          say: 'El síncope con la micción, la tos o al incorporarse es disautonómico. El de esfuerzo orienta a causa cardíaca.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 19 años, futbolista aficionado, con disnea de esfuerzo y dos episodios de pérdida de conciencia breve durante los partidos. Un hermano murió de muerte súbita a los 22 años. En el borde esternal izquierdo se ausculta un soplo sistólico eyectivo III/VI que aumenta al hacer Valsalva y disminuye en cuclillas. El ECG muestra hipertrofia ventricular izquierda.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Suspender el deporte competitivo, ecocardiograma, betabloqueador y evaluar un DAI; estudiar a los familiares' },
        { letter: 'B', text: 'Nitroglicerina sublingual y alta' },
        { letter: 'C', text: 'Furosemida y digoxina por la disnea' },
        { letter: 'D', text: 'Alta deportiva, es un soplo fisiológico del atleta' },
        { letter: 'E', text: 'Coronariografía urgente por posible infarto' },
      ],
      correct: 'A',
      explanation: 'Es una miocardiopatía hipertrófica obstructiva con factores de riesgo de muerte súbita (síncope de esfuerzo y familiar fallecido). Se suspende el deporte, se confirma con ecocardiograma, se inicia un betabloqueador y se evalúa el DAI; se estudian los familiares. Los nitratos, los diuréticos y la digoxina empeoran la obstrucción.',
      say: {
        stem: 'Un joven de diecinueve años, futbolista, tiene disnea de esfuerzo y dos desmayos durante los partidos. Un hermano murió súbitamente a los veintidós. Tiene un soplo eyectivo que aumenta con Valsalva y disminuye en cuclillas, y el electrocardiograma muestra hipertrofia.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: suspender el deporte, ecocardiograma, betabloqueador y evaluar un desfibrilador; nitroglicerina y alta; furosemida y digoxina; alta deportiva por soplo fisiológico; o coronariografía urgente. Piénsalo.',
        answer: 'Es la A. Es una miocardiopatía hipertrófica obstructiva, con síncope y un familiar fallecido: riesgo de muerte súbita. Se suspende el deporte, se confirma con ecocardiograma y se inicia el betabloqueador. La C tienta por la disnea, pero la digoxina y los diuréticos agravan la obstrucción.',
      },
    },

    realQuiz('EUNACOM Julio 2016 · Pregunta 41',
      'Síncope durante el ejercicio, disnea de esfuerzo progresiva, un hermano fallecido de forma súbita a los 25 años y un soplo sistólico eyectivo: es una miocardiopatía hipertrófica clásica. El TEP no tiene antecedente familiar; el Brugada y el QT largo producen síncope arrítmico pero sin soplo; el disautonómico no ocurre en el esfuerzo.',
      {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un paciente de cuarenta años tuvo un síncope jugando fútbol, con recuperación completa. Además refiere disnea de esfuerzos hace tres meses, que ha aumentado lentamente. Su hermano murió súbitamente a los veinticinco años. Al examen tiene un soplo sistólico eyectivo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: tromboembolismo pulmonar; síndrome de Brugada; miocardiopatía hipertrófica; síncope disautonómico; o síndrome de QT largo. Piénsalo.',
        answer: 'Es la C. Síncope de esfuerzo, hermano fallecido de forma súbita, disnea progresiva y soplo eyectivo: miocardiopatía hipertrófica. La B tienta porque el Brugada también se asocia a muerte súbita familiar, pero no da soplo ni disnea progresiva.',
      }),

    realQuiz('EUNACOM Julio 2013 · Pregunta 179',
      'Síncope de esfuerzo en un adolescente, soplo sistólico que aumenta con Valsalva y un ECG con hipertrofia ventricular (S profunda en V1-V3) y ondas Q inferiores: miocardiopatía hipertrófica. El soplo fisiológico no cambia el ECG; la dilatada y la estenosis mitral no producen un soplo que aumente con Valsalva.',
      {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Un joven de diecisiete años, sin antecedentes, llega a urgencia por un síncope mientras hacía ejercicio. Tiene un soplo sistólico que aumenta con la maniobra de Valsalva. El electrocardiograma muestra onda Q en DII, DIII y aVF, y una S profunda de V uno a V tres.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: miocardiopatía dilatada; lipotimia; soplo fisiológico; miocardiopatía hipertrófica; o estenosis mitral. Piénsalo.',
        answer: 'Es la D. Síncope de esfuerzo, soplo que aumenta con Valsalva y un ECG con hipertrofia y ondas Q septales. La C tienta porque hay un soplo, pero un soplo fisiológico no se acompaña de un electrocardiograma anormal ni de síncope de esfuerzo.',
      }),

    realQuiz('EUNACOM Julio 2019 · Pregunta 28',
      'El síncope que ocurre durante el ejercicio, o en reposo sin pródromos, sugiere causa cardiogénica (miocardiopatía hipertrófica, canalopatías, anomalías coronarias). Con la micción o la tos es situacional, y al incorporarse es ortostático; ambos disautonómicos. Un primer episodio no excluye el origen cardíaco.',
      {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Una paciente de catorce años cae al suelo con inconsciencia por treinta segundos y se recupera por completo.',
        question: '¿Cuál de los siguientes antecedentes orienta a una causa cardiogénica del cuadro?',
        options: 'Las opciones: ausencia de episodios anteriores; relación con la micción; relación con el ejercicio; relación con la tos; u ocurrencia al incorporarse desde la posición acostada. Piénsalo.',
        answer: 'Es la C. El síncope durante el ejercicio sugiere causa cardíaca, como una miocardiopatía hipertrófica. Las relacionadas con la micción o la tos son situacionales, y al incorporarse es ortostático. La A tienta, pero un primer episodio no descarta el origen cardíaco.',
      }),

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: miocardiopatía hipertrófica',
      cards: [
        { title: 'Reconocer', tag: 'Joven, esfuerzo, soplo', kind: 'key', items: [
          { t: 'Síncope de esfuerzo + familiar con MS', d: 'Soplo que AUMENTA con Valsalva y de pie',
            say: 'Cerremos con las reglas de oro. Un joven con síncope de esfuerzo, un familiar con muerte súbita y un soplo eyectivo que aumenta con Valsalva y al pararse, y disminuye en cuclillas, tiene una miocardiopatía hipertrófica hasta demostrar lo contrario.' },
          { t: 'ECG con HVI y Q; eco con septo ≥ 15 mm', d: 'Estudiar a la familia',
            say: 'El electrocardiograma muestra hipertrofia y ondas Q, el ecocardiograma confirma, y se estudia a los familiares.' },
        ] },
        { title: 'Tratar y prohibir', tag: 'Y prevenir', kind: 'alert', items: [
          { t: 'Betabloqueador; sin deporte competitivo', d: 'DAI según riesgo',
            say: 'Se trata con betabloqueador, se suspende el deporte competitivo y se evalúa el desfibrilador según el riesgo.' },
          { t: 'Nunca nitratos, digoxina ni diuréticos altos', d: 'Agravan la obstrucción',
            say: 'Y están prohibidos los nitratos, la digoxina y los diuréticos en dosis altas. Si te llevas una sola idea de hoy: en la miocardiopatía hipertrófica, todo lo que vacía el ventrículo empeora la obstrucción, y por eso el soplo sube con Valsalva y los vasodilatadores están prohibidos. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Miocardiopatía hipertrófica: del síncope de esfuerzo al manejo',
    root: N('start', 'Joven con síncope de esfuerzo', 'Soplo eyectivo, familiar con muerte súbita',
      'Llega un joven con un desmayo durante el ejercicio, disnea de esfuerzo y un soplo eyectivo. Preguntas por antecedentes familiares de muerte súbita y haces las maniobras.',
      ['Soplo aumenta con Valsalva', N('do', 'ECG y ecocardiograma', 'Septo ≥ 15 mm, SAM, gradiente',
        'Si el soplo aumenta con Valsalva y al pararse, sospechas la miocardiopatía y pides electrocardiograma y ecocardiograma, que confirma con el septo engrosado.',
        ['Confirmada', N('alert', 'Suspender deporte competitivo', 'Betabloqueador; evitar nitratos',
          'Si se confirma, suspendes el deporte competitivo, inicias un betabloqueador, prohíbes nitratos, digoxina y diuréticos altos, y estudias a los familiares.',
          ['Síncope inexplicado, TV, septo ≥ 30', N('refer', 'Evaluar DAI', 'HCM Risk-SCD',
            'Si hay factores de riesgo de muerte súbita, se evalúa el desfibrilador. Con un paro previo, siempre.')],
          ['Síntomas con gradiente ≥ 50', N('do', 'Mavacamten o miectomía', 'Reducción septal',
            'Si persisten los síntomas con un gradiente de cincuenta o más, se evalúa mavacamten, miectomía septal o ablación.')],
        )],
      )],
    ),
  },
};
