// Clase 1.4 (Cardiología) — Fibrilación auricular y flutter auricular. Guion escrito a mano (modelo cardio-14).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_1.cjs (cardio-04). Códigos 1.01.1.012 Fibrilación auricular crónica
// (Dx específico, Tx inicial, seguimiento completo), 1.01.1.013 Fibrilación auricular paroxística y 1.01.1.014 Flutter auricular
// (Dx específico, Tx inicial, seguimiento derivar), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-04 y --search "fibrilación auricular|flutter"): Diciembre 2025 P154 (FA tras alcohol),
// Julio 2025 P128 (metoprolol en FA estable), Diciembre 2017 P2 (FA inestable: cardioversión) y Julio 2016 P1 (EPOC: atenolol
// contraindicado). Enunciados y alternativas copiados del banco.
// No usadas: Agosto 2021 P137, Diciembre 2018 P95 y Diciembre 2019 P180 (flutter: dependen del ECG que el banco no trae); Diciembre 2018
// P92 (FA paroxística, clave acenocumarol: el libro indica ACOD, anotada en las dudas); Julio 2013 P45 (clave muy discutible, el propio
// banco la critica); Julio 2013 P150 (carvedilol en EPOC: repite Julio 2016 P1); Julio 2013 P1, P127 (diagnóstico simple o con ECG);
// Julio 2019 P173 (valvulopatía mitral: la heparina más verapamilo es discutible hoy); Julio 2017 P25 (necesita foto).
// Fotos en contexto: Stroobandt, Barold y Sinnaeve, «ECG from Basics to Essentials» (Wiley, 2016), p. 253 (FA), p. 247 (flutter 2:1 y
// masaje del seno carotídeo), en classes/media/biblioteca/20_cardiologia/cardio-04/.
// En movimiento: scenes/cardio_b1.html ?v=fa_flutter (gráfico propio).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });
const STRO = p => `Stroobandt, Barold y Sinnaeve. ECG from Basics to Essentials (Wiley, 2016), p. ${p}`;

module.exports = {
  id: 'cardio-04',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Reconocerla, decidir si se cardiovierte, frenar la frecuencia y no usar flecainida en el corazón enfermo',
      say: 'Bienvenido. Después de ver el paro, pasamos a la arritmia sostenida más frecuente del adulto: la fibrilación auricular. Es la que más te vas a cruzar en el consultorio y en la urgencia, y el examen la pregunta de muchas maneras: cómo se reconoce, cuándo se cardiovierte de inmediato, qué fármaco frena la frecuencia, cuándo es peligroso cardiovertir y por qué la flecainida está prohibida en el corazón enfermo. Cerramos con el flutter, su primo cercano.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Por qué la fibrilación auricular da ACV',
      nodes: [
        { id: 'c', col: 0, row: 1, k: 'cause', t: 'Aurícula enferma', s: 'HTA, válvula mitral, edad' },
        { id: 'f', col: 1, row: 1, k: 'mech', t: 'Fibrila a 350-600/min', s: 'Sin contracción efectiva' },
        { id: 'v', col: 2, row: 0, k: 'effect', t: 'Pulso irregular', s: 'El nodo AV filtra' },
        { id: 's', col: 2, row: 2, k: 'risk', t: 'Estasis en la orejuela', s: 'Se forma el trombo' },
        { id: 'a', col: 3, row: 2, k: 'alert', t: 'ACV embólico', s: '1 de cada 3 ACV isquémicos' },
        { id: 'r', col: 4, row: 1, k: 'good', t: 'Anticoagular', s: 'Más frenar la frecuencia' },
      ],
      edges: [{ from: 'c', to: 'f' }, { from: 'f', to: 'v' }, { from: 'f', to: 's' }, { from: 's', to: 'a' }, { from: 'a', to: 'r' }, { from: 'v', to: 'r' }],
      steps: [
        { show: ['c', 'f'], note: 'Una aurícula que no se contrae',
          say: 'La fibrilación auricular es una actividad eléctrica caótica de la aurícula, a trescientos cincuenta a seiscientos impulsos por minuto, sobre una aurícula enferma. Las causas más preguntadas son la hipertensión, la estenosis mitral, el hipertiroidismo y el consumo excesivo de alcohol.' },
        { show: ['v'], note: 'El nodo AV filtra',
          say: 'El nodo aurículo-ventricular deja pasar solo algunos de esos impulsos, y al azar. Por eso el pulso es irregularmente irregular, la clásica arritmia completa.' },
        { show: ['s', 'a', 'r'], note: 'El riesgo es el trombo',
          say: 'Pero lo que mata no es la arritmia sino el trombo: la sangre se estanca en la orejuela, se forma un coágulo y puede viajar al cerebro. La fibrilación es responsable de uno de cada tres accidentes cerebrovasculares isquémicos, y son más graves que los aterotrombóticos. Por eso siempre se piensa en anticoagular.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Pulso irregular y ECG',
      cards: [
        { title: 'Clínica', tag: 'Qué sospechar', kind: 'key', items: [
          { t: 'Pulso irregularmente irregular', d: 'Palpitaciones, disnea, R1 variable',
            say: 'La sospecha clínica es un pulso irregularmente irregular, con palpitaciones, disnea y un primer ruido de intensidad variable. Un joven con palpitaciones después de varios días de alcohol tiene una fibrilación hasta que se demuestre lo contrario.' },
          { t: 'Paroxística, persistente, permanente', d: '< 7 días · > 7 días · definitiva',
            say: 'Se clasifica en paroxística, si cede sola en menos de siete días; persistente, si dura más; y permanente, cuando se acepta como definitiva.' },
        ] },
        { title: 'El electrocardiograma', tag: 'Tres hallazgos', kind: 'criteria', items: [
          { t: 'Sin ondas P · ondas f · R-R irregular', d: 'QRS angosto, 100-180 lpm',
            say: 'Mira este trazado. No hay ondas P, la línea de base ondula con pequeñas ondas f, y los intervalos R-R son completamente irregulares, con QRS angosto. Eso es una fibrilación auricular. La taquicardia sinusal y la TPSV son regulares; la taquicardia auricular multifocal es irregular, pero tiene P de varias morfologías.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-04/01_fibrilacion-auricular-ecg-12-derivaciones__stroobandt-ecg_p253.jpg', label: 'Fibrilación auricular', at: 'Mira este trazado', credit: STRO(253) } },
          { t: 'Estudio: ECG, TSH, electrolitos, ecocardiograma', d: 'Válvulas, aurícula izquierda y FEVI',
            say: 'El estudio mínimo incluye ECG, TSH, electrolitos, función renal y ecocardiograma, para ver las válvulas, la aurícula izquierda y la fracción de eyección.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Sinusal, fibrilación y flutter lado a lado',
      images: [
        { src: 'animaciones/cardio-04/A1_fa_flutter_ritmos.mp4', label: 'Las tres firmas del ECG', credit: 'Animación propia con los criterios del libro' },
      ],
      steps: [
        { note: 'Tres ritmos, tres firmas',
          say: 'Compara los tres ritmos. En el ritmo sinusal hay una P antes de cada QRS y el R-R es constante. En la fibrilación auricular no hay P, la línea de base ondula y el R-R es irregular. Y en el flutter aparecen ondas en dientes de sierra a trescientos por minuto, con conducción dos a uno, que produce una frecuencia ventricular regular de ciento cincuenta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Primera decisión',
      title: '¿Está estable?',
      cards: [
        { title: 'Inestable', tag: 'Cardioversión', kind: 'alert', items: [
          { t: 'Hipotensión, shock, edema pulmonar o isquemia', d: 'Cardioversión eléctrica sincronizada inmediata',
            say: 'La primera decisión es si el paciente está estable. Si hay hipotensión, shock, edema agudo de pulmón o dolor isquémico, la conducta es la cardioversión eléctrica sincronizada inmediata, como en toda taquiarritmia inestable. No se espera a un fármaco, y no hay que confundirla con la desfibrilación del paro.' },
          { t: 'Anticoagular en paralelo', d: 'No verapamilo ni amiodarona primero',
            say: 'Una mujer de sesenta y ocho años con fibrilación a ciento sesenta, presión de ochenta y cinco y extremidades frías se cardiovierte. Dar verapamilo la empeoraría.' },
        ] },
        { title: 'Estable', tag: 'Anticoagular y frenar', kind: 'key', items: [
          { t: 'Anticoagular según el riesgo', d: 'CHA₂DS₂-VASc: Tema 1.5',
            say: 'Si está estable, lo primero es anticoagular según el puntaje de riesgo, que veremos en la próxima clase, y después controlar la frecuencia cardíaca.' },
          { t: 'Meta: FC < 110 lpm en reposo', d: 'Control laxo',
            say: 'La meta inicial es una frecuencia en reposo menor de ciento diez latidos por minuto.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Control de frecuencia',
      title: 'Qué fármaco, y cuál no',
      cards: [
        { title: 'Fármacos', tag: 'Para frenar el nodo AV', kind: 'pharma', items: [
          { t: 'Metoprolol, bisoprolol, carvedilol', d: 'Primera línea con FEVI conservada',
            say: 'Para frenar la frecuencia se usan betabloqueadores, como metoprolol, bisoprolol o carvedilol, o calcioantagonistas no dihidropiridínicos, verapamilo y diltiazem. Con fibrilación rápida, función ventricular conservada y paciente estable, el metoprolol es de primera línea.' },
          { t: 'Digoxina', d: 'Insuficiencia cardíaca o sedentario',
            say: 'La digoxina sirve en la insuficiencia cardíaca o en el paciente sedentario, pero es lenta y exige cuidado con la insuficiencia renal y la hipokalemia.' },
        ] },
        { title: 'Contraindicaciones', tag: 'Lo que cae', kind: 'alert', items: [
          { t: 'FEVI reducida: NO verapamilo ni diltiazem', d: 'Betabloqueador o digoxina',
            say: 'Con insuficiencia cardíaca y fracción de eyección reducida, el verapamilo y el diltiazem están contraindicados, porque empeoran la falla de bomba.' },
          { t: 'Asma o EPOC: NO betabloqueadores', d: 'Atenolol, carvedilol',
            say: 'En el asma o el EPOC con broncoespasmo no se usan betabloqueadores. El atenolol y el carvedilol son la respuesta clásica de fármaco contraindicado en un hipertenso con EPOC que hace una fibrilación.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Control de ritmo',
      title: 'Cardiovertir: la regla de las 48 horas',
      cards: [
        { title: 'Menos de 48 horas', tag: 'Se puede cardiovertir', kind: 'key', items: [
          { t: 'Corazón sano: flecainida 200-300 mg o propafenona', d: 'O cardioversión eléctrica',
            say: 'Si la fibrilación lleva menos de cuarenta y ocho horas, se puede cardiovertir de inmediato. En un corazón estructuralmente sano, el fármaco de elección es la flecainida, doscientos a trescientos miligramos por vía oral, o la propafenona; la cardioversión eléctrica es más eficaz aún.' },
          { t: 'Infarto previo, IC o FEVI baja: amiodarona EV', d: 'Flecainida CONTRAINDICADA',
            say: 'Pero si el paciente tiene cardiopatía estructural, infarto previo o insuficiencia cardíaca, la flecainida y la propafenona están contraindicadas, porque producen arritmias ventriculares letales, como mostró el estudio CAST. El fármaco seguro es la amiodarona endovenosa.' },
        ] },
        { title: 'Más de 48 horas o dudosa', tag: 'Prohibido cardiovertir directo', kind: 'alert', items: [
          { t: '3 semanas de anticoagulación o ETE antes', d: 'Descartar trombo en la orejuela',
            say: 'Si la fibrilación dura más de cuarenta y ocho horas o el tiempo es incierto, está prohibido cardiovertir sin antes anticoagular tres semanas, o descartar un trombo en la orejuela con un ecocardiograma transesofágico.' },
          { t: '≥ 4 semanas de anticoagulación después', d: 'La aurícula recupera su contracción',
            say: 'Y después de cardiovertir se mantiene la anticoagulación por al menos cuatro semanas, porque al volver el ritmo sinusal la aurícula recupera su contracción y puede expulsar un trombo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Flutter auricular',
      title: 'Dientes de sierra a 300 por minuto',
      cards: [
        { title: 'Reconocerlo', tag: 'Macrorreentrada', kind: 'criteria', items: [
          { t: 'Ondas F en DII, DIII y aVF', d: 'Conducción 2:1 = 150 lpm regular',
            say: 'El flutter es una macrorreentrada alrededor del anillo tricuspídeo. Mira este electrocardiograma: ondas F en dientes de sierra a trescientos por minuto y una respuesta ventricular de ciento cincuenta, casi perfectamente regular. Una frecuencia de ciento cincuenta regular y de QRS angosto debe hacerte pensar siempre en flutter, y no en taquicardia sinusal.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-04/02_flutter-auricular-2a1-150-lpm__stroobandt-ecg_p247.jpg', label: 'Flutter con conducción 2:1', at: 'Mira este electrocardiograma', credit: STRO(247) } },
          { t: 'Maniobra vagal o adenosina dejan ver las ondas', d: 'No terminan la arritmia',
            say: 'Si haces una maniobra vagal o das adenosina, el bloqueo aurículo-ventricular aumenta y las ondas de sierra se hacen evidentes, pero el flutter no termina. Eso lo distingue de la TPSV.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-04/03_flutter-masaje-seno-carotideo__stroobandt-ecg_p247.jpg', label: 'Masaje carotídeo en flutter', at: 'Si haces una maniobra vagal', credit: STRO(247) } },
        ] },
        { title: 'Tratamiento', tag: 'Mismas reglas', kind: 'key', items: [
          { t: 'Anticoagulación y regla de las 48 h como en la FA', d: 'CHA₂DS₂-VASc igual',
            say: 'El riesgo embólico y la anticoagulación siguen las mismas reglas que la fibrilación, y también la regla de las cuarenta y ocho horas.' },
          { t: 'Ablación del istmo cavotricuspídeo', d: 'Éxito > 95%',
            say: 'El tratamiento curativo de elección es la ablación por radiofrecuencia del istmo cavotricuspídeo, con éxito mayor del noventa y cinco por ciento.' },
        ] },
      ],
    },

    { type: 'pathway', intro: 'Armemos el árbol: del pulso irregular a la decisión.' },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'FA y flutter: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['FA con PA 85/40 y extremidades frías', 'Cardioversión eléctrica', 'Verapamilo o amiodarona'],
          say: 'Fibrilación con presión de ochenta y cinco sobre cuarenta: cardioversión eléctrica. El error es el verapamilo.' },
        { cells: ['FA < 48 h, infarto previo, FEVI 35%', 'Amiodarona EV', 'Flecainida'],
          say: 'Fibrilación de menos de cuarenta y ocho horas con infarto previo: amiodarona. La flecainida está contraindicada.' },
        { cells: ['FA > 48 h, estable', 'Anticoagular 3 semanas o ETE; frenar', 'Cardiovertir de inmediato'],
          say: 'Fibrilación de más de cuarenta y ocho horas: anticoagulas tres semanas o haces un ecocardiograma transesofágico, y mientras frenas la frecuencia. Cardiovertir de inmediato es el error.' },
        { cells: ['FA + EPOC o asma', 'Calcioantagonista no DHP', 'Atenolol o carvedilol'],
          say: 'Fibrilación en un paciente con EPOC o asma: se prefiere un calcioantagonista. El atenolol y el carvedilol están contraindicados.' },
        { cells: ['FC 150 regular, QRS angosto', 'Pensar en flutter 2:1', 'Llamarla taquicardia sinusal'],
          say: 'Una frecuencia de ciento cincuenta, regular y angosta, es un flutter hasta demostrar lo contrario, no una taquicardia sinusal.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 71 años, hipertenso, con infarto hace 2 años (FEVI 35%), consulta por palpitaciones de 4 horas. ECG: fibrilación auricular con respuesta ventricular de 140 lpm. PA 130/80 mmHg, sin dolor torácico ni shock. El médico decide cardiovertir químicamente.',
      question: '¿Cuál es el fármaco más adecuado para cardiovertir?',
      options: [
        { letter: 'A', text: 'Flecainida 300 mg por vía oral' },
        { letter: 'B', text: 'Propafenona por vía oral' },
        { letter: 'C', text: 'Verapamilo endovenoso' },
        { letter: 'D', text: 'Amiodarona endovenosa' },
        { letter: 'E', text: 'Adenosina en bolo rápido' },
      ],
      correct: 'D',
      explanation: 'La fibrilación lleva menos de 48 horas, pero hay una cardiopatía estructural severa (infarto previo y FEVI 35%): los antiarrítmicos clase Ic (flecainida y propafenona) están contraindicados. El fármaco seguro es la amiodarona endovenosa (o la cardioversión eléctrica). El CHA₂DS₂-VASc es de 4: anticoagulación permanente.',
      say: {
        stem: 'Un hombre de setenta y un años, hipertenso, con un infarto hace dos años y fracción de eyección de treinta y cinco por ciento, consulta por palpitaciones de cuatro horas. El electrocardiograma muestra fibrilación auricular a ciento cuarenta, y está estable. El médico decide cardiovertir con un fármaco.',
        question: '¿Qué fármaco es el más adecuado?',
        options: 'Las opciones: flecainida; propafenona; verapamilo; amiodarona; o adenosina. Piénsalo.',
        answer: 'Es la D. Lleva menos de cuarenta y ocho horas, pero tiene un infarto previo y la fracción de eyección baja: la flecainida y la propafenona están contraindicadas. La amiodarona endovenosa es el fármaco seguro. La A tienta porque es el de elección en el corazón sano.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 154',
      stem: 'Un hombre de 35 años consulta por palpitaciones intensas, que iniciaron tras 4 días de consumo abundante de alcohol. Al examen físico se palpa pulso irregular a 160 latidos por minuto y se constata presión arterial de 105/67 mmHg.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Taquicardia sinusal' },
        { letter: 'B', text: 'Taquicardia paroxística supraventricular' },
        { letter: 'C', text: 'Taquicardia ventricular' },
        { letter: 'D', text: 'Fibrilación auricular' },
        { letter: 'E', text: 'Taquicardia auricular multifocal' },
      ],
      correct: 'D',
      explanation: 'Un pulso irregular rápido tras un consumo abundante de alcohol es una fibrilación auricular («corazón del fin de semana»). La taquicardia sinusal y la TPSV son regulares; la taquicardia auricular multifocal es irregular pero rara; la TV es poco probable en un joven estable.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un hombre de treinta y cinco años consulta por palpitaciones intensas que empezaron tras cuatro días de mucho alcohol. El pulso es irregular, a ciento sesenta, y la presión es de ciento cinco sobre sesenta y siete.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: taquicardia sinusal; TPSV; taquicardia ventricular; fibrilación auricular; o taquicardia auricular multifocal. Piénsalo.',
        answer: 'Es la D. Si el pulso es irregular, piensas en fibrilación auricular, y el alcohol es un gatillante clásico. La B y la A son regulares. La E es irregular, pero es mucho menos frecuente y propia de la enfermedad pulmonar grave.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 128',
      stem: 'Paciente con ECG que muestra fibrilación auricular con respuesta ventricular rápida (130 lpm) y función ventricular conservada. Hemodinámicamente estable.',
      question: '¿Cuál es el fármaco de elección para control de frecuencia?',
      options: [
        { letter: 'A', text: 'Metoprolol oral' },
        { letter: 'B', text: 'Amiodarona EV' },
        { letter: 'C', text: 'Digoxina EV' },
        { letter: 'D', text: 'Flecainida oral' },
        { letter: 'E', text: 'Sotalol oral' },
      ],
      correct: 'A',
      explanation: 'FA con respuesta ventricular rápida estable y FEVI conservada: control de frecuencia con betabloqueador (metoprolol, primera línea) o calcioantagonista no dihidropiridínico. La amiodarona y la flecainida son de control de ritmo; la digoxina se reserva para la insuficiencia cardíaca.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un paciente tiene fibrilación auricular a ciento treinta, con función ventricular conservada y estable.',
        question: '¿Cuál es el fármaco de elección para controlar la frecuencia?',
        options: 'Las opciones: metoprolol oral; amiodarona endovenosa; digoxina endovenosa; flecainida oral; o sotalol oral. Piénsalo.',
        answer: 'Es la A. Para frenar la frecuencia, con función conservada, betabloqueador. La B y la D tientan porque son antiarrítmicos conocidos, pero son de control de ritmo, y la digoxina se reserva para la insuficiencia cardíaca.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 2',
      stem: 'Una paciente de 68 años, con antecedente de diabetes, hipertensión arterial, en tratamiento con enalapril, metformina y aspirina, consulta por un cuadro de palpitaciones, asociado a malestar general y disnea de reposo. Tiene frecuencia cardíaca irregular de 160 lpm, PA: 85/40 mmHg, extremidades pálidas y frías en la zona distal. Su electrocardiograma muestra una fibrilación auricular rápida.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar amiodarona' },
        { letter: 'B', text: 'Administrar verapamilo' },
        { letter: 'C', text: 'Administrar heparina y clopidogrel' },
        { letter: 'D', text: 'Realizar cardioversión eléctrica' },
        { letter: 'E', text: 'Administrar nitritos y morfina' },
      ],
      correct: 'D',
      explanation: 'Es una FA con inestabilidad hemodinámica: como toda taquiarritmia inestable, se cardioverte eléctricamente de inmediato. El verapamilo agravaría la hipotensión; la amiodarona tarda.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Una paciente de sesenta y ocho años, diabética e hipertensa, tiene palpitaciones y disnea de reposo, con pulso irregular a ciento sesenta, presión de ochenta y cinco sobre cuarenta y extremidades frías. El electrocardiograma muestra fibrilación auricular rápida.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: amiodarona; verapamilo; heparina y clopidogrel; cardioversión eléctrica; o nitritos y morfina. Piénsalo.',
        answer: 'Es la D. Hay inestabilidad hemodinámica, y toda taquiarritmia inestable se cardiovierte de inmediato. La A tienta porque la amiodarona es un antiarrítmico clásico, pero es lenta y no corresponde con shock.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 1',
      stem: 'Un paciente hipertenso bien controlado, con antecedente de EPOC, presenta un cuadro de palpitaciones y disnea, siendo diagnosticado de fibrilación auricular.',
      question: '¿Qué fármaco está contraindicado?',
      options: [
        { letter: 'A', text: 'Atenolol' },
        { letter: 'B', text: 'Digoxina' },
        { letter: 'C', text: 'Enalapril' },
        { letter: 'D', text: 'Acenocumarol' },
        { letter: 'E', text: 'Amlodipino' },
      ],
      correct: 'A',
      explanation: 'En el EPOC (y en el asma) se evitan los betabloqueadores por el riesgo de broncoespasmo; el control de la frecuencia se hace con un calcioantagonista no dihidropiridínico o con digoxina.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un paciente hipertenso con antecedente de EPOC presenta palpitaciones y disnea, y le diagnostican fibrilación auricular.',
        question: '¿Qué fármaco está contraindicado?',
        options: 'Las opciones: atenolol; digoxina; enalapril; acenocumarol; o amlodipino. Piénsalo.',
        answer: 'Es la A. En el EPOC y el asma, los betabloqueadores se evitan por el broncoespasmo. La B tienta, porque la digoxina es un antiarrítmico, pero es una alternativa válida para controlar la frecuencia.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: fibrilación y flutter',
      cards: [
        { title: 'Decidir', tag: 'En este orden', kind: 'key', items: [
          { t: 'Pulso irregular + ECG sin P', d: 'Causa de 1 de cada 3 ACV',
            say: 'Cerremos con las reglas de oro. Pulso irregular y electrocardiograma sin ondas P: fibrilación auricular, causa de uno de cada tres ACV isquémicos.' },
          { t: 'Inestable: cardioversión; estable: anticoagular y frenar', d: 'Meta FC < 110',
            say: 'Si está inestable, cardioversión eléctrica. Si está estable, anticoagular y frenar la frecuencia, con una meta menor de ciento diez.' },
        ] },
        { title: 'Prohibiciones', tag: 'Lo que cae', kind: 'alert', items: [
          { t: 'FA > 48 h: anticoagular 3 semanas o ETE', d: 'Y 4 semanas después',
            say: 'Con más de cuarenta y ocho horas, tres semanas de anticoagulación o ecocardiograma transesofágico antes de cardiovertir, y cuatro semanas después.' },
          { t: 'Flecainida solo en corazón sano', d: 'Cardiopatía: amiodarona',
            say: 'La flecainida solo en corazón sano; con cardiopatía, amiodarona.' },
          { t: 'Flutter: dientes de sierra, 150 lpm regular', d: 'Ablación del istmo',
            say: 'Si te llevas una sola idea de hoy: antes de cardiovertir una fibrilación pregúntate cuánto lleva y si el corazón está sano; de esa respuesta sale la conducta. Nos vemos en la próxima clase, donde veremos cómo se previene el ACV: la anticoagulación.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Fibrilación auricular: de la sospecha a la conducta',
    root: N('start', 'Pulso irregular y palpitaciones', 'ECG: sin P, ondas f, R-R irregular',
      'Un paciente consulta por palpitaciones y tiene el pulso irregularmente irregular. El electrocardiograma no muestra ondas P y los R-R son irregulares: es una fibrilación auricular.',
      ['Inestable', N('alert', 'Cardioversión eléctrica sincronizada', 'Inmediata; anticoagular',
        'Si hay hipotensión, shock, edema pulmonar o isquemia, cardioversión eléctrica sincronizada inmediata, y anticoagulación en paralelo.')],
      ['Estable', N('q', 'Anticoagular y controlar la frecuencia', 'CHA₂DS₂-VASc · FC < 110',
        'Si está estable, anticoagulas según el puntaje y frenas la frecuencia con betabloqueador o calcioantagonista no dihidropiridínico; con fracción de eyección reducida, betabloqueador o digoxina, sin verapamilo.',
        ['Menos de 48 horas y control de ritmo', N('do', 'Cardioversión', 'Corazón sano: flecainida · cardiopatía: amiodarona',
          'Si lleva menos de cuarenta y ocho horas y se busca el ritmo sinusal, cardiovertes: flecainida en corazón sano, amiodarona o cardioversión eléctrica si hay cardiopatía, infarto o insuficiencia cardíaca.')],
        ['Más de 48 horas o dudosa', N('refer', '3 semanas de anticoagulación o ETE', 'Y 4 semanas después',
          'Si lleva más de cuarenta y ocho horas o el tiempo es incierto, anticoagulas tres semanas o descartas el trombo con ecocardiograma transesofágico, antes de cardiovertir, y mantienes la anticoagulación al menos cuatro semanas.')],
      )],
    ),
  },
};
