// Clase 1.9 (Cardiología) — Extrasístoles ventriculares y Holter de ritmo. Guion escrito a mano (tier 3, modelo cardio-14).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_1.cjs (cardio-09). Códigos 1.01.1.011 Extrasistolía ventricular benigna
// (Dx específico, Tx inicial, seguimiento completo) y 1.01.4.014 Holter de ritmo (emplea informe), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-09 y --search "Holter|extrasíst|palpitaciones|síncope"): Diciembre 2017 P7 (síndrome de
// taquicardia-bradicardia: el examen es el monitoreo de 24 horas). Enunciado y alternativas copiados del banco. Se agregan tres preguntas
// del banco del libro (Banco Oficial AEE): extrasístoles benignas, carga alta con caída de la FEVI y flecainida en cardiopatía.
// No usadas: Julio 2024 P180 (síncope con FC 40: va en cardio-01); Diciembre 2024 P62 (alternativas rotas).
// Fotos en contexto: Stroobandt, Barold y Sinnaeve, «ECG from Basics to Essentials» (Wiley, 2016), p. 221 (extrasístoles ventriculares en
// bigeminismo, trigeminismo, cuadrigeminismo, parejas y tripletas) y Blausen «Holter Monitor» (CC BY 3.0), en
// classes/media/biblioteca/20_cardiologia/cardio-09/.
// En movimiento: scenes/cardio_b1.html ?v=holter (gráfico propio: registro de 24 horas y carga de extrasístoles).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });
const STRO = p => `Stroobandt, Barold y Sinnaeve. ECG from Basics to Essentials (Wiley, 2016), p. ${p}`;
const BLA = 'Ilustración: Blausen.com staff (2014), CC BY 3.0';
const Qb = (title, stem, question, opts, correct, explanation, say) => ({
  type: 'quiz', kicker: 'Pregunta del banco EUNACOM', title, stem, question, options: opts.map((text, i) => ({ letter: 'ABCDE'[i], text })), correct, explanation, say,
});

module.exports = {
  id: 'cardio-09',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo tranquilizar, cuándo derivar y cómo emplear el informe de un Holter',
      say: 'Bienvenido a la última clase del bloque de arritmias. Las extrasístoles ventriculares son la causa más frecuente de palpitaciones, y en un corazón sano son benignas. Pero en un corazón enfermo pueden anunciar arritmias malignas. Por eso el médico general debe saber distinguirlas, saber pedir un Holter de ritmo y saber interpretar su informe. El examen pregunta cuándo tranquilizar, qué fármacos están prohibidos y qué examen pedir según la frecuencia de los síntomas.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Un latido que nace antes de tiempo',
      nodes: [
        { id: 'f', col: 0, row: 1, k: 'cause', t: 'Foco ventricular', s: 'Dispara antes del latido sinusal' },
        { id: 'q', col: 1, row: 1, k: 'mech', t: 'QRS ancho, prematuro', s: 'Sin onda P previa' },
        { id: 'p', col: 2, row: 1, k: 'mech', t: 'Pausa compensadora', s: 'Completa' },
        { id: 's', col: 3, row: 0, k: 'effect', t: 'Salto o vuelco', s: 'Latido fuerte tras la pausa' },
        { id: 'b', col: 3, row: 2, k: 'good', t: 'Corazón sano: benigna', s: 'Tranquilizar' },
        { id: 'r', col: 4, row: 2, k: 'alert', t: 'Cardiopatía: alarma', s: 'Estudiar y derivar' },
      ],
      edges: [{ from: 'f', to: 'q' }, { from: 'q', to: 'p' }, { from: 'p', to: 's' }, { from: 'p', to: 'b' }, { from: 'b', to: 'r' }],
      steps: [
        { show: ['f', 'q'], note: 'Se adelanta el ventrículo',
          say: 'La extrasístole ventricular es un latido prematuro que nace en el ventrículo. En el electrocardiograma es un complejo QRS ancho, de ciento veinte milisegundos o más, que llega antes de tiempo, sin onda P antes y con una onda T de sentido opuesto.' },
        { show: ['p', 's'], note: 'Y luego, una pausa',
          say: 'Después viene una pausa compensadora completa. El paciente la siente como un salto o un vuelco en el pecho, o como un latido fuerte tras la pausa, y muchos no sienten nada.' },
        { show: ['b', 'r'], note: 'Todo depende del corazón',
          say: 'La pregunta clave es una sola: ¿el corazón está estructuralmente sano? Si lo está, la extrasístole es benigna y se tranquiliza. Si no, puede anunciar una arritmia grave y se estudia y se deriva.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Reconocer',
      title: 'Cómo se ven y cómo se llaman',
      cards: [
        { title: 'En el ECG', tag: 'Patrones', kind: 'criteria', items: [
          { t: 'Bigeminismo · trigeminismo · cuadrigeminismo', d: 'Una extrasístole cada 2, 3 o 4 latidos',
            say: 'Mira este registro. Las extrasístoles pueden ser aisladas, o repetirse en patrones: en bigeminismo, una de cada dos; en trigeminismo, una de cada tres; en cuadrigeminismo, una de cada cuatro. También vienen en parejas o en salvas de tres, que ya son una taquicardia ventricular no sostenida.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-09/01_extrasistoles-ventriculares-bigeminismo-trigeminismo-parejas__stroobandt-ecg_p221.jpg', label: 'EV en bigeminismo y parejas', at: 'Mira este registro', credit: STRO(221) } },
          { t: 'Monomorfas o polimorfas', d: 'Una o varias morfologías',
            say: 'Se llaman monomorfas si todas tienen la misma forma, y polimorfas si tienen varias, lo que sugiere más de un foco.' },
        ] },
        { title: 'Diferencial', tag: 'Ancho o angosto', kind: 'key', items: [
          { t: 'QRS ancho + pausa completa = ventricular', d: 'QRS angosto + P prematura = supraventricular',
            say: 'La regla práctica: si el QRS es ancho, con pausa compensadora completa y sin P previa, es ventricular. Si el QRS es angosto y hay una onda P prematura, es supraventricular, más benigna aún.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Benignas',
      title: 'Cuándo tranquilizar',
      cards: [
        { title: 'Todas estas condiciones', tag: 'Corazón sano', kind: 'key', items: [
          { t: 'ECG basal y ecocardiograma normales', d: 'Corazón estructuralmente sano',
            say: 'Una extrasístole es benigna si se cumplen todas estas condiciones. Primero, el corazón es estructuralmente sano: examen, electrocardiograma y ecocardiograma normales.' },
          { t: 'Aisladas, monomorfas, desaparecen con el ejercicio', d: 'Sin síncope ni familiares con muerte súbita',
            say: 'Segundo, son aisladas y monomorfas, y desaparecen o disminuyen con el ejercicio. Tercero, no hay síncope ni antecedente familiar de muerte súbita.' },
          { t: 'Carga < 10% en el Holter', d: 'Origen en el tracto de salida del VD',
            say: 'Y cuarto, la carga es baja, menor del diez por ciento de los latidos en el Holter. Suelen nacer en el tracto de salida del ventrículo derecho, con morfología de bloqueo de rama izquierda y eje inferior.' },
        ] },
        { title: 'Gatillantes', tag: 'Qué suprimir', kind: 'normal', items: [
          { t: 'Cafeína, alcohol, tabaco, energizantes', d: 'Descongestionantes, simpaticomiméticos',
            say: 'Los gatillantes son la cafeína, el alcohol, el tabaco, los energizantes y los simpaticomiméticos, además del estrés y la falta de sueño.' },
          { t: 'Hipertiroidismo, K y Mg bajos, digital', d: 'Anemia, hipoxia, apnea',
            say: 'También el hipertiroidismo, las alteraciones del potasio y el magnesio, y la intoxicación digitálica. Tratar la causa suele eliminar el problema.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Alarma',
      title: 'Banderas rojas: derivar',
      cards: [
        { title: 'Clínica', tag: 'Qué cambia la conducta', kind: 'alert', items: [
          { t: 'Cardiopatía estructural: infarto, miocardiopatía, FEVI baja', d: 'Hipertrofia importante',
            say: 'Las banderas rojas obligan a derivar. La primera, la cardiopatía estructural: infarto previo, miocardiopatía, fracción de eyección deprimida o hipertrofia importante.' },
          { t: 'Síncope o presíncope · familiares con muerte súbita', d: 'QT largo',
            say: 'La segunda, el síncope o presíncope y el antecedente familiar de muerte súbita, así como un QT largo.' },
        ] },
        { title: 'En el registro', tag: 'Hallazgos', kind: 'alert', items: [
          { t: 'Polimorfas · parejas · TV no sostenida · R sobre T', d: 'Aumentan con el ejercicio',
            say: 'En el registro, son de alarma las extrasístoles polimorfas, las parejas, la taquicardia ventricular no sostenida, el fenómeno de R sobre T y las que aumentan con el ejercicio.' },
          { t: 'Carga > 10-15%', d: 'Riesgo de miocardiopatía por extrasístoles',
            say: 'Y una carga mayor de diez a quince por ciento, porque puede producir una miocardiopatía por extrasístoles, con caída de la fracción de eyección, que es reversible si se trata.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio inicial',
      title: 'Qué se pide',
      cards: [
        { title: 'Básico', tag: 'Siempre', kind: 'key', items: [
          { t: 'Anamnesis y examen cardiovascular', d: 'Fármacos, drogas, cafeína, familiares',
            say: 'El estudio parte con la anamnesis, preguntando por fármacos, drogas, cafeína y antecedentes familiares, y el examen cardiovascular.' },
          { t: 'ECG, electrolitos, TSH, ecocardiograma', d: 'Descartar cardiopatía estructural',
            say: 'Se piden un electrocardiograma de doce derivaciones, potasio y magnesio, TSH y un ecocardiograma, para descartar una cardiopatía estructural.' },
        ] },
        { title: 'Complementario', tag: 'Cuando corresponde', kind: 'criteria', items: [
          { t: 'Holter de 24 horas', d: 'Carga, parejas, TV no sostenida',
            say: 'Se agrega un Holter de veinticuatro horas para cuantificar la carga y descartar taquicardia ventricular.' },
          { t: 'Prueba de esfuerzo', d: 'Si hay sospecha de isquemia o aumentan con el ejercicio',
            say: 'Y una prueba de esfuerzo si se sospecha isquemia o si las extrasístoles aparecen con el ejercicio.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Qué hacer y qué no',
      cards: [
        { title: 'Benignas', tag: 'No se tratan', kind: 'key', items: [
          { t: 'Tranquilizar y suprimir gatillantes', d: 'El pronóstico es excelente',
            say: 'Las extrasístoles benignas, asintomáticas o poco sintomáticas, no se tratan. Se tranquiliza al paciente, explicando que el pronóstico es excelente, y se suprimen café, alcohol, tabaco, energizantes y descongestionantes. Tratar el número de extrasístoles no mejora la sobrevida.' },
          { t: 'Muy sintomáticas: betabloqueador o verapamilo', d: 'Bisoprolol, metoprolol, diltiazem',
            say: 'Si molestan mucho, la primera línea es un betabloqueador, como bisoprolol o metoprolol, o un calcioantagonista no dihidropiridínico, verapamilo o diltiazem.' },
        ] },
        { title: 'Prohibido', tag: 'CAST', kind: 'alert', items: [
          { t: 'Flecainida, propafenona y amiodarona: no en el consultorio', d: 'Contraindicados en cardiopatía estructural',
            say: 'Los antiarrítmicos de clase uno, flecainida y propafenona, y la amiodarona no se indican en el consultorio, y están contraindicados en la cardiopatía estructural: el estudio CAST mostró más mortalidad con flecainida después de un infarto.' },
          { t: 'Ablación: carga alta, refractarias o FEVI en descenso', d: 'Derivar a cardiología',
            say: 'Se deriva a cardiología para evaluar una ablación con catéter si los síntomas son refractarios, la carga es alta o la fracción de eyección baja.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cardiopatía y situaciones especiales',
      title: 'Después de un infarto, en el embarazo y en el deportista',
      cards: [
        { title: 'Con cardiopatía', tag: 'Tratar la enfermedad', kind: 'alert', items: [
          { t: 'Infarto previo o FEVI baja', d: 'Betabloqueador, tratamiento de la IC, DAI si corresponde',
            say: 'En el paciente con infarto previo o fracción de eyección baja, las extrasístoles frecuentes se manejan tratando la enfermedad de base: betabloqueador, el resto del tratamiento de la insuficiencia cardíaca y, si cumple los criterios, evaluar un desfibrilador. Nunca flecainida.' },
        ] },
        { title: 'Otros contextos', tag: 'Benignas la mayoría', kind: 'normal', items: [
          { t: 'Embarazo: benignas · metoprolol si molestan', d: 'Deportista: ¿desaparecen con el esfuerzo?',
            say: 'En el embarazo las extrasístoles son frecuentes y benignas; si molestan, se usa metoprolol. En el deportista, las que desaparecen con el ejercicio son benignas, y las que aumentan o se asocian a síncope obligan a estudiar una miocardiopatía.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Veinticuatro horas en un minuto',
      images: [
        { src: 'animaciones/cardio-09/A1_holter_extrasistoles.mp4', label: 'Registro, tendencia de la FC y carga de extrasístoles', credit: 'Animación propia con los criterios del libro' },
      ],
      steps: [
        { note: 'De la extrasístole a la carga',
          say: 'Mira cómo trabaja el Holter. Arriba, el registro continuo, donde se identifican las extrasístoles: un QRS ancho, prematuro, con pausa compensadora. Abajo se resume el día: la tendencia de la frecuencia cardíaca y, en amarillo, cuántas extrasístoles hubo en cada hora. A la derecha, la carga: tres por ciento en una paciente sana es benigno; veintidós por ciento con caída de la fracción de eyección es una miocardiopatía por extrasístoles, y se deriva.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Holter de ritmo',
      title: 'Qué es y cuándo se pide',
      cards: [
        { title: 'El examen', tag: 'Registro ambulatorio', kind: 'key', items: [
          { t: 'ECG continuo de 24 a 48 horas', d: 'Diario de síntomas; parches 7-14 días',
            say: 'El Holter de ritmo es un registro electrocardiográfico continuo de veinticuatro a cuarenta y ocho horas, mientras el paciente hace su vida habitual y anota sus síntomas en un diario. Con parches adhesivos se puede extender a siete o catorce días.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-09/02_holter-electrodos-y-registrador__blausen.jpg', label: 'Holter y registrador', at: 'El Holter de ritmo es', credit: BLA } },
        ] },
        { title: 'Indicaciones', tag: 'Para qué', kind: 'criteria', items: [
          { t: 'Palpitaciones, mareo, presíncope o síncope', d: 'Correlacionar síntoma y ritmo',
            say: 'Se pide en palpitaciones, mareo, presíncope o síncope, para correlacionar el síntoma con el ritmo, y para cuantificar la carga de extrasístoles.' },
          { t: 'FA paroxística, control de frecuencia, pausas', d: 'ACV criptogénico · enfermedad del nodo',
            say: 'También para detectar fibrilación paroxística en un ACV criptogénico, evaluar el control de la frecuencia, buscar pausas o bloqueos en la enfermedad del nodo y controlar la respuesta al tratamiento antiarrítmico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Qué registro pedir',
      title: 'Según la frecuencia de los síntomas',
      cards: [
        { title: 'Escalera', tag: 'Cuánto dura el síntoma', kind: 'criteria', items: [
          { t: 'Diarios: Holter de 24-48 horas', d: 'Semanales: parche de 7-14 días',
            say: 'La elección depende de qué tan seguido ocurre el síntoma. Si es diario, un Holter de veinticuatro a cuarenta y ocho horas. Si ocurre cada semana, un parche de siete a catorce días.' },
          { t: 'Mensuales: monitor de eventos', d: 'Muy infrecuentes: registrador implantable',
            say: 'Si es mensual, un monitor de eventos externo de hasta treinta días, que el paciente activa al sentir el síntoma. Y si es muy infrecuente, o es un síncope inexplicado, un registrador implantable de meses a años. Un Holter normal no descarta una arritmia que ocurre menos de una vez al día.' },
        ] },
        { title: 'Lo que no sirve', tag: 'Otros exámenes', kind: 'alert', items: [
          { t: 'Síncope vasovagal u ortostático: tilt test', d: 'No Holter',
            say: 'El Holter no sirve para el síncope vasovagal ni ortostático, donde se usa la prueba de inclinación, ni para evaluar isquemia, que requiere prueba de esfuerzo.' },
          { t: 'Holter de presión (MAPA): otro examen', d: 'Tema 5.1',
            say: 'Y no se confunde con el Holter de presión, el MAPA, que mide la presión arterial en veinticuatro horas y lo veremos en el bloque de hipertensión.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Emplear el informe',
      title: 'Qué mirar y qué cambia la conducta',
      cards: [
        { title: 'El informe', tag: 'Variables', kind: 'key', items: [
          { t: 'FC mínima, media y máxima · pausas', d: 'Pausa > 3 s en vigilia: patológica',
            say: 'En el informe se revisa la frecuencia mínima, media y máxima, y las pausas: una pausa de más de tres segundos en vigilia es patológica.' },
          { t: 'Carga de EV · parejas · TV no sostenida', d: 'FA o flutter · taquicardia supraventricular',
            say: 'También los bloqueos de alto grado, la carga de extrasístoles, las parejas, los episodios de taquicardia ventricular no sostenida, la fibrilación o el flutter, y la correlación con el diario de síntomas.' },
        ] },
        { title: 'Conducta', tag: 'Según el hallazgo', kind: 'alert', items: [
          { t: 'Pausas sintomáticas o BAV Mobitz II/completo', d: 'Derivar para marcapaso',
            say: 'Las pausas sintomáticas o los bloqueos de alto grado indican marcapaso. La taquicardia ventricular no sostenida con cardiopatía obliga a derivar.' },
          { t: 'Carga > 10-15% → ecocardiograma y ablación · FA paroxística → CHA₂DS₂-VASc', d: 'Síntomas sin arritmia: otra causa',
            say: 'Una carga de más de diez a quince por ciento orienta a ecocardiograma y ablación. La fibrilación paroxística obliga a calcular el puntaje de riesgo y anticoagular si corresponde. Y si el paciente tuvo síntomas sin ningún cambio del ritmo, la arritmia no los explica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Síncope',
      title: 'Alto riesgo: se hospitaliza',
      cards: [
        { title: 'Banderas', tag: 'Síncope de alto riesgo', kind: 'alert', items: [
          { t: 'Durante el esfuerzo o en decúbito', d: 'Con palpitaciones previas',
            say: 'En el síncope, el electrocardiograma inicial es obligatorio. Son de alto riesgo y se hospitalizan el síncope durante el esfuerzo o en decúbito, con palpitaciones previas.' },
          { t: 'Cardiopatía, familiares con muerte súbita, ECG anormal', d: 'BAV de alto grado, bifascicular, QT largo, Brugada, preexcitación',
            say: 'También el que ocurre con cardiopatía estructural, con antecedente familiar de muerte súbita o con un electrocardiograma anormal, como bloqueo de alto grado, QT largo, patrón de Brugada o preexcitación.' },
        ] },
        { title: 'Bajo riesgo', tag: 'Historia típica', kind: 'normal', items: [
          { t: 'Vasovagal: pródromos, calor, bipedestación', d: 'Ortostático: tilt test si hay dudas',
            say: 'El síncope vasovagal típico, con pródromos, calor o bipedestación prolongada, y el ortostático se diagnostican por la historia y, si hay dudas, con la prueba de inclinación.' },
        ] },
      ],
    },

    { type: 'pathway', intro: 'Armemos el árbol: de las palpitaciones al Holter y a la conducta.' },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Extrasístoles y Holter: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['EV aisladas, corazón sano, carga 2%', 'Tranquilizar y suprimir gatillantes', 'Amiodarona, flecainida o ablación'],
          say: 'Extrasístoles aisladas, con corazón sano y carga de dos por ciento: tranquilizar. Dar amiodarona, flecainida o ablación es el error.' },
        { cells: ['Carga 22% + FEVI 40%', 'Ecocardiograma y derivar para ablación', 'Tranquilizar y repetir en 5 años'],
          say: 'Carga de veintidós por ciento con caída de la fracción de eyección: miocardiopatía por extrasístoles, se deriva a ablación. Tranquilizar es el error.' },
        { cells: ['Infarto previo, FEVI 35%, EV frecuentes', 'Betabloqueador y tratar la IC', 'Flecainida (CAST)'],
          say: 'Infarto previo y extrasístoles frecuentes: betabloqueador y tratar la insuficiencia cardíaca. La flecainida aumenta la mortalidad.' },
        { cells: ['FA + atenolol y verapamilo, episodios breves de malestar', 'Holter de 24 horas (taqui-bradi)', 'Tilt test o ecocardiograma'],
          say: 'Un paciente con fibrilación, atenolol y verapamilo, y episodios breves de malestar: sospechas enfermedad del nodo y pides monitoreo de veinticuatro horas.' },
        { cells: ['Síntoma una vez al mes', 'Monitor de eventos o registrador implantable', 'Holter de 24 horas'],
          say: 'Si el síntoma es mensual, monitor de eventos. Un Holter de veinticuatro horas rara vez lo capta.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 34 años, sana, consulta por 2 meses de «saltos» en el pecho en reposo, sobre todo tras varios cafés y con poco sueño; desaparecen al subir escaleras. Sin síncope ni antecedentes familiares de muerte súbita. Examen normal. ECG: extrasístoles ventriculares aisladas con morfología de bloqueo de rama izquierda y eje inferior. Ecocardiograma y TSH normales. Holter de 24 horas: 3% de extrasístoles monomorfas, sin parejas ni TV.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Amiodarona oral' },
        { letter: 'B', text: 'Derivar para ablación urgente' },
        { letter: 'C', text: 'Tranquilizar, reducir cafeína y mejorar el sueño, con control clínico' },
        { letter: 'D', text: 'Flecainida 100 mg cada 12 horas' },
        { letter: 'E', text: 'Implantar un desfibrilador' },
      ],
      correct: 'C',
      explanation: 'Son extrasístoles ventriculares benignas del tracto de salida del ventrículo derecho: corazón sano, aisladas, monomorfas, de baja carga (3%) y que desaparecen con el ejercicio. La conducta es tranquilizar, suprimir la cafeína y mejorar el sueño, y control clínico. Si fueran muy molestas se podría usar un betabloqueador.',
      say: {
        stem: 'Una mujer de treinta y cuatro años, sana, consulta por dos meses de saltos en el pecho en reposo, después de varios cafés y con poco sueño, que desaparecen al subir escaleras. Sin síncope ni antecedentes familiares. El examen, el ecocardiograma y la TSH son normales. El Holter muestra tres por ciento de extrasístoles monomorfas, sin parejas ni taquicardia.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: amiodarona; ablación urgente; tranquilizar y suprimir la cafeína; flecainida; o desfibrilador. Piénsalo.',
        answer: 'Es la C. Son extrasístoles benignas: corazón sano, aisladas, de baja carga y que desaparecen con el ejercicio. Se tranquiliza y se suprimen los gatillantes. La D tienta, porque la flecainida es un antiarrítmico clásico, pero no se indica en el consultorio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 7',
      stem: 'Una paciente de 67 años, con antecedente de hipertensión arterial y fibrilación auricular, en tratamiento con atenolol, verapamilo y acenocumarol, consulta porque presenta repetidos episodios de malestar, sudoración y ortostatismo, que duran algunos segundos y revierten espontáneamente. Al examen físico destaca frecuencia cardiaca de 60 lpm, irregular y presión arterial 110/70 mmHg. Su examen cardiopulmonar es normal.',
      question: '¿Cuál es el examen más adecuado para confirmar la sospecha diagnóstica?',
      options: [
        { letter: 'A', text: 'Test de esfuerzo' },
        { letter: 'B', text: 'Ecocardiograma' },
        { letter: 'C', text: 'Ecografía doppler de extremidades inferiores' },
        { letter: 'D', text: 'Tilt test' },
        { letter: 'E', text: 'Monitoreo electrocardiográfico de 24 horas' },
      ],
      correct: 'E',
      explanation: 'La sospecha es una enfermedad del nodo sinusal, en el contexto de un síndrome de taquicardia-bradicardia (FA más enfermedad del nodo), agravado por el atenolol y el verapamilo. El examen para confirmarla es el monitoreo electrocardiográfico de 24 horas.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Una paciente de sesenta y siete años, con hipertensión y fibrilación auricular, en tratamiento con atenolol, verapamilo y acenocumarol, tiene episodios repetidos de malestar, sudoración y ortostatismo de segundos de duración. La frecuencia es de sesenta, irregular, y el examen cardiopulmonar es normal.',
        question: '¿Cuál es el examen más adecuado para confirmar la sospecha?',
        options: 'Las opciones: test de esfuerzo; ecocardiograma; ecografía doppler de las piernas; tilt test; o monitoreo electrocardiográfico de veinticuatro horas. Piénsalo.',
        answer: 'Es la E. Es un síndrome de taquicardia-bradicardia por enfermedad del nodo sinusal, y el Holter correlaciona los síntomas con el ritmo. La D tienta porque hay ortostatismo, pero el tilt test es para el síncope vasovagal.',
      },
    },

    Qb('Banco EUNACOM · Caso representativo',
      'Un hombre de 35 años, sin antecedentes, consulta por sensación de «saltos» en el pecho en reposo, que desaparecen al hacer ejercicio. Examen físico normal. El ECG muestra extrasístoles ventriculares aisladas, monomorfas, sin otras alteraciones. El ecocardiograma es normal y el Holter muestra 2% de extrasístoles ventriculares aisladas, sin taquicardia ventricular.',
      '¿Cuál es la conducta más adecuada?',
      ['Tranquilizar, reducir cafeína y alcohol, y control clínico', 'Amiodarona oral', 'Derivar para ablación urgente', 'Implantar un desfibrilador', 'Iniciar flecainida'],
      'A',
      'Extrasístoles ventriculares aisladas y monomorfas que desaparecen con el ejercicio, con corazón estructuralmente normal y baja carga en el Holter, son benignas: basta educar y suprimir gatillantes. Si son muy molestas se usa un betabloqueador; amiodarona o flecainida no están indicadas y son proarrítmicas.',
      {
        stem: 'Una pregunta del banco del libro. Un hombre de treinta y cinco años, sin antecedentes, tiene saltos en el pecho en reposo que desaparecen con el ejercicio. El ecocardiograma es normal y el Holter muestra dos por ciento de extrasístoles ventriculares aisladas, sin taquicardia.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: tranquilizar y reducir cafeína y alcohol; amiodarona; ablación urgente; desfibrilador; o flecainida. Piénsalo.',
        answer: 'Es la A. Corazón sano y baja carga: se tranquiliza. La C tienta, pero la ablación se reserva para carga alta o síntomas refractarios.',
      }),

    Qb('Banco EUNACOM · Caso representativo',
      'Una mujer de 58 años se hizo un Holter de 24 horas por palpitaciones. El informe muestra 22% de latidos extrasistólicos ventriculares monomorfos, sin taquicardia ventricular. Hace un año su ecocardiograma era normal; hoy la FEVI es 40%.',
      '¿Cuál es la conducta más adecuada?',
      ['Tranquilizar y repetir el Holter en 5 años', 'Derivar a cardiología para evaluar ablación de las extrasístoles', 'Iniciar flecainida en el consultorio', 'Indicar tilt test', 'Solicitar un MAPA de 24 horas'],
      'B',
      'Una carga de extrasístoles ventriculares mayor de 10 a 15% con caída de la FEVI configura una miocardiopatía mediada por extrasístoles, potencialmente reversible. Corresponde derivar a cardiología para ablación con catéter, con betabloqueador mientras tanto. Los antiarrítmicos clase I no se inician en el consultorio.',
      {
        stem: 'Una pregunta del banco del libro. Una mujer de cincuenta y ocho años tiene un Holter con veintidós por ciento de extrasístoles ventriculares monomorfas. Hace un año su ecocardiograma era normal y hoy la fracción de eyección es de cuarenta por ciento.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: tranquilizar y repetir en cinco años; derivar a cardiología para ablación; flecainida en el consultorio; tilt test; o MAPA. Piénsalo.',
        answer: 'Es la B. Una carga alta con caída de la fracción de eyección es una miocardiopatía por extrasístoles, reversible con ablación. La A tienta porque las extrasístoles suelen ser benignas, pero acá hay daño ventricular.',
      }),

    Qb('Banco EUNACOM · Caso representativo',
      'Un hombre de 62 años con infarto previo y FEVI 35% consulta por palpitaciones. El ECG muestra extrasístoles ventriculares frecuentes y parejas.',
      '¿Qué fármaco está contraindicado para suprimirlas?',
      ['Bisoprolol', 'Metoprolol succinato', 'Flecainida', 'Carvedilol', 'Optimización del tratamiento de la insuficiencia cardíaca'],
      'C',
      'En la cardiopatía estructural (infarto previo, FEVI baja) los antiarrítmicos clase I como la flecainida aumentan la mortalidad (estudio CAST). El manejo es el betabloqueador y el tratamiento de la insuficiencia cardíaca, con derivación para evaluar un desfibrilador.',
      {
        stem: 'Una pregunta del banco del libro. Un hombre de sesenta y dos años con un infarto previo y fracción de eyección de treinta y cinco por ciento tiene palpitaciones, con extrasístoles ventriculares frecuentes y parejas.',
        question: '¿Qué fármaco está contraindicado para suprimirlas?',
        options: 'Las opciones: bisoprolol; metoprolol; flecainida; carvedilol; o optimizar el tratamiento de la insuficiencia cardíaca. Piénsalo.',
        answer: 'Es la C. En la cardiopatía estructural los antiarrítmicos de clase uno aumentan la mortalidad, como mostró el estudio CAST. Los betabloqueadores y el tratamiento de la insuficiencia cardíaca son lo correcto.',
      }),

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: extrasístoles y Holter',
      cards: [
        { title: 'Extrasístoles', tag: 'Benignas o de alarma', kind: 'key', items: [
          { t: 'QRS ancho prematuro, sin P, pausa completa', d: 'Corazón sano, aisladas, monomorfas, carga < 10%',
            say: 'Cerremos con las reglas de oro. La extrasístole ventricular es un QRS ancho prematuro, sin P, con pausa compensadora completa. Es benigna con corazón sano, aislada, monomorfa, que desaparece con el ejercicio y con carga menor de diez por ciento.' },
          { t: 'Benignas: tranquilizar y suprimir gatillantes', d: 'Betabloqueador o verapamilo si molestan',
            say: 'Se tranquiliza, se suprimen los gatillantes y, si molestan, un betabloqueador o verapamilo.' },
        ] },
        { title: 'Alarma y Holter', tag: 'Qué decide', kind: 'alert', items: [
          { t: 'Cardiopatía, síncope, polimorfas, parejas, carga > 10-15%', d: 'Derivar · no flecainida (CAST)',
            say: 'Con cardiopatía, síncope, extrasístoles polimorfas, parejas o carga alta, se deriva. Y los antiarrítmicos de clase uno están contraindicados.' },
          { t: 'Holter 24 h: pausas > 3 s o BAV alto grado → marcapaso', d: 'TVNS con cardiopatía · FA paroxística',
            say: 'En el informe del Holter, las pausas mayores de tres segundos o el bloqueo de alto grado llevan a marcapaso, y la fibrilación paroxística, al puntaje de riesgo y la anticoagulación.' },
          { t: 'Síntoma poco frecuente: monitor de eventos o registrador', d: 'No confundir con MAPA ni tilt test',
            say: 'Si te llevas una sola idea de hoy: antes de tratar una extrasístole, pregúntate si el corazón está sano; si lo está, tranquiliza, y si no, deriva. Con esta clase cerramos el bloque de arritmias y paro. Nos vemos en la próxima clase, donde empezamos el bloque coronario, con el dolor torácico en urgencias.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Extrasístoles ventriculares: del síntoma al Holter y la conducta',
    root: N('start', 'Palpitaciones: «saltos» en el pecho', 'Anamnesis y examen',
      'Un paciente consulta por palpitaciones, con sensación de saltos o vuelcos en el pecho. Preguntas por fármacos, cafeína, alcohol, síncope y antecedentes familiares, y examinas el corazón.',
      ['ECG y estudio básico', N('q', 'ECG, K, Mg, TSH y ecocardiograma', 'Holter de 24 horas',
        'Tomas un electrocardiograma, pides electrolitos, TSH y un ecocardiograma, y agregas un Holter de veinticuatro horas para cuantificar la carga y descartar taquicardia ventricular.',
        ['Corazón sano, carga baja', N('ok', 'Extrasístoles benignas', 'Tranquilizar y suprimir gatillantes',
          'Si el corazón es sano, las extrasístoles son aisladas y monomorfas y la carga es menor de diez por ciento, tranquilizas y suprimes cafeína, alcohol y tabaco; si molestan, betabloqueador o verapamilo.')],
        ['Cardiopatía, síncope o carga alta', N('alert', 'Banderas rojas', 'Derivar a cardiología',
          'Si hay cardiopatía estructural, síncope, extrasístoles polimorfas, parejas, taquicardia no sostenida o una carga mayor de diez a quince por ciento, derivas. No se usan antiarrítmicos de clase uno, y se evalúa ablación o desfibrilador.')],
        ['Pausas o bloqueo de alto grado', N('refer', 'Marcapaso', 'Pausa > 3 s o Mobitz II/completo',
          'Si el Holter muestra pausas mayores de tres segundos o bloqueo de alto grado sintomático, derivas para marcapaso.')],
      )],
      ['Síntomas infrecuentes', N('do', 'Monitor de eventos o registrador implantable', 'Síntoma mensual o menos frecuente',
        'Si los síntomas son menos frecuentes que una vez al día, el Holter de veinticuatro horas no los capta: usas un parche de siete a catorce días, un monitor de eventos o un registrador implantable.')],
    ),
  },
};
