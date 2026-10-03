// Clase 2.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-10).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-10',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Una regla para diferenciarlas y una cirugía que cura solo a una de ellas',
      say: 'Bienvenidos. Hoy vemos la enfermedad inflamatoria intestinal: la colitis ulcerosa y la enfermedad de Crohn. Es un tema de alta rentabilidad, y la buena noticia es que la mayoría de las preguntas se resuelve con una sola regla: basta una característica de Crohn para llamarla Crohn. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'El escenario',
      title: 'Joven con diarrea con sangre',
      nodes: [
        { id: 'gen', col: 0, row: 0, k: 'cause', t: 'Predisposición genética', s: 'Individuo susceptible' },
        { id: 'inm', col: 1, row: 0, k: 'mech', t: 'Respuesta inmune desregulada', s: 'Frente a la microbiota' },
        { id: 'cli', col: 2, row: 0, k: 'effect', t: 'Diarrea disentérica crónica', s: 'Sangre, mucosidad o pus, en brotes' },
        { id: 'sis', col: 2, row: 2, k: 'effect', t: 'Fiebre y baja de peso', s: 'Estado hipercatabólico' },
        { id: 'col', col: 3, row: 1, k: 'good', t: 'Colonoscopía total', s: 'Con ileoscopía y biopsias escalonadas' },
        { id: 'lab', col: 4, row: 1, k: 'q', t: 'Calprotectina, p-ANCA, ASCA', s: 'Apoyan, no diagnostican' },
      ],
      edges: [
        { from: 'gen', to: 'inm' }, { from: 'inm', to: 'cli' }, { from: 'inm', to: 'sis' },
        { from: 'cli', to: 'col' }, { from: 'sis', to: 'col' }, { from: 'col', to: 'lab', label: 'apoyo' },
      ],
      steps: [
        { show: ['gen', 'inm'], note: 'Enfermedades autoinmunes',
          say: 'Partamos por el mecanismo. Las dos son enfermedades autoinmunes: en una persona genéticamente predispuesta, el sistema inmune reacciona de forma desregulada frente a la propia microbiota intestinal.' },
        { show: ['cli'], note: 'Adulto joven, brotes y remisiones',
          say: 'El resultado es un intestino inflamado. Debutan en el adulto joven, con un curso en brotes y remisiones, y el síntoma central es la diarrea crónica disentérica: con sangre, mucosidad o pus, y dolor abdominal cólico.' },
        { show: ['sis'], note: 'Compromiso sistémico',
          say: 'Y como es una inflamación que consume, el paciente está hipercatabólico: baja de peso, fiebre y compromiso del estado general. Fíjate que eso la separa del intestino irritable, que vimos antes y que nunca da baja de peso ni sangre.' },
        { show: ['col'], note: 'La conducta es siempre la misma',
          say: 'Frente a ese joven, la conducta es siempre la misma: colonoscopía total, con ileoscopía y biopsias escalonadas. Confirma la enfermedad y, además, permite diferenciar cuál de las dos es.' },
        { show: ['lab'], note: 'Calprotectina: inflamatorio vs funcional',
          say: 'Los exámenes de laboratorio solo acompañan. La calprotectina fecal elevada apoya un origen inflamatorio y sirve para el seguimiento. Y los anticuerpos p-ANCA, de la colitis ulcerosa, y ASCA, del Crohn, orientan, pero no hacen el diagnóstico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Leer la colonoscopía',
      title: 'Colitis ulcerosa vs Crohn',
      cards: [
        { title: 'Colitis ulcerosa', tag: 'Solo colon', kind: 'normal', items: [
          { t: 'Desde el recto, continua', d: 'Rectitis en el 100 %, sin mucosa sana intercalada',
            say: 'Ahora, cómo se lee la colonoscopía. La colitis ulcerosa compromete solo el colon, siempre parte desde el recto, y avanza de forma continua, sin mucosa sana entremedio.' },
          { t: 'Solo la mucosa', d: 'Eritematosa, granular, friable, pseudopólipos',
            say: 'La inflamación se limita a la mucosa, que se ve eritematosa, granular, friable y con pseudopólipos. Y como el recto siempre está tomado, la clínica trae pujo y tenesmo.' },
        ] },
        { title: 'Enfermedad de Crohn', tag: 'Boca a ano', kind: 'key', items: [
          { t: 'En parches, típico íleon distal', d: 'Puede respetar el recto',
            say: 'El Crohn, en cambio, puede tomar cualquier parte del tubo digestivo, de la boca al ano, típicamente el íleon distal y la unión ileocecal. Va en parches, las llamadas lesiones salteadas, y puede respetar el recto.' },
          { t: 'Transmural', d: 'Úlceras aftosas, empedrado',
            say: 'La inflamación es transmural, atraviesa toda la pared. En la endoscopía se ven úlceras aftosas y un aspecto en empedrado, con mucosa normal entre las lesiones.' },
        ] },
        { title: 'Regla de oro', tag: 'Se pregunta siempre', kind: 'alert', items: [
          { t: 'Basta UNA característica de Crohn', d: 'Íleon, parches, recto sano, fístula, masa, perianal',
            say: 'Y aquí está la regla que resuelve la pregunta: basta una sola característica de Crohn para llamarlo Crohn. Compromiso del íleon o del tubo alto, parches, recto respetado, fístula, masa, úlceras orales o enfermedad perianal.' },
          { t: 'Colónica, continua, desde el recto', d: 'Entonces es colitis ulcerosa',
            say: 'Solo si es puramente colónica, continua y desde el recto, es colitis ulcerosa. Ojo, que el enunciado muchas veces esconde el dato de Crohn en un detalle, como una fístula perianal o un recto sano.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fuera del intestino',
      title: 'Manifestaciones extraintestinales',
      cards: [
        { title: 'Articulares y oculares', tag: 'Autoinmunidad', kind: 'criteria', items: [
          { t: 'Artritis periférica', d: 'La más frecuente; también espondilitis',
            say: 'Como son autoinmunes, ambas dan síntomas fuera del intestino. La más frecuente es la artritis periférica, y también puede aparecer espondilitis anquilosante.' },
          { t: 'Uveítis anterior', d: 'Ojo rojo doloroso',
            say: 'En el ojo, la uveítis anterior.' },
        ] },
        { title: 'Piel e hígado', tag: 'Se preguntan', kind: 'key', items: [
          { t: 'Eritema nodoso', d: 'El más frecuente en piel; también pioderma',
            say: 'En la piel, el más frecuente es el eritema nodoso, esos nódulos dolorosos en las piernas, y el otro es el pioderma gangrenoso.' },
          { t: 'Colangitis esclerosante primaria', d: 'Fuertemente asociada a la CU',
            say: 'Y en el hígado, la colangitis esclerosante primaria, fuertemente asociada a la colitis ulcerosa. La vas a volver a ver en la clase de colestasia.' },
        ] },
        { title: 'La tríada del caso', tag: 'Casi patognomónica', kind: 'alert', items: [
          { t: 'Disentería + artralgias + nódulos', d: 'Aftas o nódulos en las piernas: pensar en EII',
            say: 'Si en un caso ves diarrea disentérica, artralgias migratorias y aftas o nódulos en las piernas, esa tríada es casi patognomónica de enfermedad inflamatoria intestinal.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Complicaciones',
      title: 'La profundidad decide la complicación',
      nodes: [
        { id: 'ec', col: 0, row: 0, k: 'start', t: 'Crohn: transmural', s: 'Atraviesa la pared' },
        { id: 'fis', col: 1, row: 0, k: 'risk', t: 'Fístulas y abscesos', s: 'Perianales' },
        { id: 'est', col: 2, row: 0, k: 'risk', t: 'Estenosis y malabsorción', s: 'Obstrucción, delgado tomado' },
        { id: 'cu', col: 0, row: 2, k: 'start', t: 'CU: mucosa', s: 'Inflamación superficial extensa' },
        { id: 'meg', col: 1, row: 2, k: 'alert', t: 'Megacolon tóxico', s: 'Dilatación > 6 cm + sepsis' },
        { id: 'cc', col: 2, row: 2, k: 'risk', t: 'Cáncer colorrectal', s: 'Tras 8–10 años, sobre todo rectal' },
        { id: 'vig', col: 3, row: 2, k: 'good', t: 'Colonoscopía de vigilancia', s: 'Sangrado nuevo: colonoscopía, no rectoscopía' },
      ],
      edges: [
        { from: 'ec', to: 'fis' }, { from: 'fis', to: 'est' },
        { from: 'cu', to: 'meg', label: 'brote grave' }, { from: 'cu', to: 'cc', label: 'años' }, { from: 'cc', to: 'vig' },
      ],
      steps: [
        { show: ['ec'], note: 'Profundidad explica la complicación',
          say: 'Las complicaciones se deducen de la profundidad de la inflamación. El Crohn es transmural, atraviesa la pared.' },
        { show: ['fis', 'est'], note: 'Fístulas, abscesos, obstrucción',
          say: 'Por eso hace fístulas y abscesos perianales, y al cicatrizar deja estenosis que obstruyen el intestino. Si toma el intestino delgado, además da malabsorción, como vimos en la clase anterior.' },
        { show: ['cu', 'meg'], note: 'Urgencia vital',
          say: 'La colitis ulcerosa se queda en la mucosa, pero puede dar la complicación más grave: el megacolon tóxico, un colon dilatado sobre seis centímetros con sepsis. Es una urgencia vital.' },
        { show: ['cc'], note: 'Riesgo desde los 8–10 años de enfermedad',
          say: 'Y a largo plazo, tras ocho a diez años de enfermedad, aumenta el riesgo de cáncer colorrectal, sobre todo rectal. Esto conecta directo con la próxima clase.' },
        { show: ['vig'], note: 'Se pregunta: colonoscopía completa',
          say: 'Por eso estos pacientes se vigilan con colonoscopías periódicas. Y ojo con la trampa: un paciente con colitis ulcerosa antigua que vuelve a sangrar se estudia con colonoscopía completa, no con rectosigmoidoscopía, que deja todo el colon proximal sin ver.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento médico',
      title: 'Escalonado: inducir y mantener',
      cards: [
        { title: 'Base', tag: 'CU leve a moderada', kind: 'pharma', items: [
          { t: '5-ASA: mesalazina, sulfasalazina', d: 'Tópico + oral según extensión',
            say: 'El tratamiento médico es parecido en ambas y se escala para inducir y mantener la remisión. La base en la colitis ulcerosa leve a moderada son los aminosalicilatos, como la mesalazina y la sulfasalazina, tópicos y orales según la extensión.' },
        ] },
        { title: 'Brote agudo', tag: 'Nunca de mantención', kind: 'alert', items: [
          { t: 'Corticoides', d: 'Budesonida, prednisona',
            say: 'Para el brote agudo se usan corticoides, budesonida o prednisona. Y fíjate: los corticoides sirven para apagar el brote, nunca para mantener la remisión.' },
        ] },
        { title: 'Escalones superiores', tag: 'Especialista', kind: 'pharma', items: [
          { t: 'Inmunomoduladores', d: 'Azatioprina, metotrexato',
            say: 'Si no basta, se suben escalones: inmunomoduladores como la azatioprina o el metotrexato.' },
          { t: 'Biológicos', d: 'Anti-TNF: infliximab, adalimumab; vedolizumab, ustekinumab',
            say: 'Y luego los biológicos: los anti TNF, infliximab y adalimumab, y otras dianas como vedolizumab y ustekinumab. Más antibióticos cuando hay complicaciones sépticas. Esto lo maneja el especialista: no tiene garantía GES y se deriva.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia clave en cirugía',
      title: 'Colectomía: cura una, no la otra',
      nodes: [
        { id: 'cir', col: 0, row: 1, k: 'start', t: 'Cirugía', s: 'Último escalón' },
        { id: 'cu', col: 1, row: 0, k: 'effect', t: 'Colitis ulcerosa', s: 'Limitada al colon' },
        { id: 'col', col: 2, row: 0, k: 'good', t: 'Colectomía CURATIVA', s: 'Subtotal o proctocolectomía con reservorio' },
        { id: 'ec', col: 1, row: 2, k: 'effect', t: 'Crohn', s: 'Todo el tubo digestivo' },
        { id: 'res', col: 2, row: 2, k: 'trap', t: 'Resección económica', s: 'Solo el segmento complicado; NUNCA cura' },
      ],
      edges: [
        { from: 'cir', to: 'cu' }, { from: 'cu', to: 'col' },
        { from: 'cir', to: 'ec' }, { from: 'ec', to: 'res' },
      ],
      steps: [
        { show: ['cir'], note: 'La lógica es opuesta',
          say: 'La cirugía es el último escalón, y aquí la lógica de las dos enfermedades es exactamente opuesta.' },
        { show: ['cu', 'col'], note: 'Sin colon, no hay enfermedad',
          say: 'En la colitis ulcerosa, la enfermedad vive solo en el colon. Entonces, si sacas el colon, la curas. La colectomía es curativa: subtotal con muñón rectal, o proctocolectomía total con reservorio ileoanal si hay displasia o cáncer de recto.' },
        { show: ['ec', 'res'], note: 'Reaparece en cualquier tramo',
          say: 'En el Crohn, la cirugía nunca cura, porque la enfermedad puede reaparecer en cualquier tramo del tubo digestivo. Solo se reseca, de forma económica, el segmento complicado, o se hace una estenoplastía. Operar un Crohn con intención curativa es una alternativa incorrecta clásica.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Colitis ulcerosa vs enfermedad de Crohn',
      head: ['Rasgo', 'Colitis ulcerosa', 'Enfermedad de Crohn'],
      rows: [
        { cells: ['Localización', 'Solo colon, desde el recto', 'Boca a ano (típico íleon distal)'],
          say: 'Repasemos en una tabla. Localización: la colitis ulcerosa, solo colon y desde el recto; el Crohn, de la boca al ano, típicamente el íleon distal.' },
        { cells: ['Distribución y profundidad', 'Continua, mucosa', 'En parches, transmural'],
          say: 'Distribución y profundidad: continua y mucosa en la colitis; en parches y transmural en el Crohn.' },
        { cells: ['Anticuerpos', 'p-ANCA', 'ASCA'],
          say: 'Anticuerpos: p-ANCA para la colitis ulcerosa, ASCA para el Crohn. Orientan, no diagnostican.' },
        { cells: ['Complicaciones', 'Megacolon tóxico, cáncer colorrectal', 'Fístulas, abscesos, obstrucción'],
          say: 'Complicaciones: megacolon tóxico y cáncer colorrectal en la colitis; fístulas, abscesos y obstrucción en el Crohn.' },
        { cells: ['Cirugía', 'Colectomía = curativa', 'Resección segmentaria; nunca curativa'],
          say: 'Y cirugía: la colectomía cura la colitis ulcerosa; en el Crohn solo se reseca el segmento complicado, y nunca cura.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 25 años con 3 meses de diarrea con sangre y mucosidad, dolor abdominal, fiebre vespertina y baja de 5 kg. Al examen: masa dolorosa mal definida en la fosa ilíaca derecha y una úlcera aftosa en la mucosa oral.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Colitis ulcerosa' },
        { letter: 'B', text: 'Síndrome de intestino irritable' },
        { letter: 'C', text: 'Enfermedad de Crohn' },
        { letter: 'D', text: 'Cáncer de colon derecho' },
        { letter: 'E', text: 'Colitis infecciosa aguda' },
      ],
      correct: 'C',
      explanation: 'Diarrea disentérica crónica con síntomas sistémicos en un joven: EII. La masa en fosa ilíaca derecha (plastrón ileal) y las aftas orales son características de Crohn; basta una. La CU es solo colónica, continua y mucosa: no da masa ni compromiso ileal. Conducta: colonoscopía con ileoscopía y biopsias.',
      say: {
        stem: 'Vamos al caso. Hombre de veinticinco años con tres meses de diarrea con sangre y mucosidad, dolor abdominal, fiebre en las tardes y baja de cinco kilos. Al examen se palpa una masa dolorosa, mal definida, en la fosa ilíaca derecha, y tiene una úlcera aftosa en la boca.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las alternativas: colitis ulcerosa, intestino irritable, enfermedad de Crohn, cáncer de colon derecho, o colitis infecciosa aguda. Piénsalo.',
        answer: 'Es la C, enfermedad de Crohn. Joven con diarrea disentérica de meses, fiebre y baja de peso: enfermedad inflamatoria intestinal. Y aquí hay dos características de Crohn, cuando bastaba una: la masa en la fosa ilíaca derecha, que es el íleon inflamado, y la úlcera oral. El distractor tentador es la colitis ulcerosa, porque la diarrea con sangre es igual, pero la colitis es solo colónica y nunca da masa ni compromiso del íleon.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 26',
      stem: 'Hombre de 25 años con 1 mes de diarrea, dolor abdominal y malestar general; ha tenido disentería en algunas ocasiones y bajó 4 kg. La colonoscopía muestra signos de inflamación en el colon, con zonas de mucosa indemne y sin afectación del recto.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Colitis ulcerosa' },
        { letter: 'B', text: 'Enfermedad de Crohn' },
        { letter: 'C', text: 'Colitis isquémica' },
        { letter: 'D', text: 'Parasitosis intestinal' },
        { letter: 'E', text: 'Colitis por Clostridioides difficile' },
      ],
      correct: 'B',
      explanation: 'La colonoscopía define el caso: inflamación en parches, con zonas de mucosa indemne, y respeto del recto. Cualquiera de esas dos características, por sí sola, descarta la colitis ulcerosa, que es continua y siempre rectal, y establece el diagnóstico de enfermedad de Crohn.',
      say: {
        stem: 'Vamos con una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Hombre de veinticinco años con un mes de diarrea, dolor abdominal y malestar general; ha tenido disentería en algunas ocasiones y bajó cuatro kilos. La colonoscopía muestra inflamación en el colon, con zonas de mucosa sana y sin afectación del recto.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: colitis ulcerosa, enfermedad de Crohn, colitis isquémica, parasitosis intestinal, o colitis por Clostridioides difficile. Piénsalo.',
        answer: 'Es la B, enfermedad de Crohn. Aquí la clínica no dice mucho, así que fíjate en la colonoscopía: hay zonas de mucosa sana entremedio, eso es la lesión en parches, y el recto está respetado. Basta cualquiera de esas dos características para descartar la colitis ulcerosa, que siempre es continua y siempre parte del recto. Es la misma regla que acabamos de ver, aplicada a la imagen del colonoscopio en vez de al examen físico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 21',
      stem: 'Paciente de 45 años con colitis ulcerosa diagnosticada a los 20 años, inactiva hace 10 años. Desde hace una semana presenta deposiciones blandas con escasa sangre. El examen físico no aporta información.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar rectosigmoidoscopía' },
        { letter: 'B', text: 'Solicitar TAC de abdomen y pelvis' },
        { letter: 'C', text: 'Solicitar parasitológico de deposiciones' },
        { letter: 'D', text: 'Solicitar colonoscopía' },
        { letter: 'E', text: 'Iniciar corticoides orales' },
      ],
      correct: 'D',
      explanation: 'La CU de larga data aumenta el riesgo de cáncer colorrectal, sobre todo rectal, y todo sangrado digestivo bajo nuevo en un adulto exige colonoscopía completa: la rectosigmoidoscopía no explora el colon proximal. No se asume un brote ni se inician corticoides antes de descartar neoplasia.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de agosto de dos mil veintiuno. Paciente de cuarenta y cinco años con colitis ulcerosa diagnosticada a los veinte, inactiva hace diez años. Desde hace una semana tiene deposiciones blandas con escasa sangre, y el examen físico no aporta.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: rectosigmoidoscopía, TAC de abdomen y pelvis, parasitológico de deposiciones, colonoscopía, o iniciar corticoides orales. Piénsalo.',
        answer: 'Es la D, colonoscopía. Veinticinco años de colitis ulcerosa: el riesgo de cáncer colorrectal está aumentado, y un sangrado nuevo exige ver todo el colon. La rectosigmoidoscopía es el distractor tentador, porque parece suficiente para una enfermedad que parte en el recto, pero deja el colon proximal sin ver. Y dar corticoides asumiendo un brote, sin descartar un cáncer, es justo el error que buscan.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 164',
      stem: 'Mujer de 35 años con diarrea crónica mucosanguinolenta de 6 meses, urgencia defecatoria, pujo y tenesmo. Colonoscopía: mucosa eritematosa, granular, con pseudopólipos, desde el recto en forma continua hasta el ángulo esplénico, sin mucosa sana intercalada.',
      question: '¿Cuál es el diagnóstico?',
      options: [
        { letter: 'A', text: 'Colitis isquémica' },
        { letter: 'B', text: 'Colitis ulcerosa' },
        { letter: 'C', text: 'Síndrome de intestino irritable' },
        { letter: 'D', text: 'Colitis infecciosa' },
        { letter: 'E', text: 'Enfermedad de Crohn' },
      ],
      correct: 'B',
      explanation: 'Compromiso mucoso continuo desde el recto hacia proximal, sin mucosa sana intercalada, con pseudopólipos y clínica de pujo y tenesmo: es una colitis ulcerosa. La ausencia de parches, de compromiso ileal y de lesiones perianales descarta el Crohn.',
      say: {
        stem: 'Y una última, del EUNACOM de julio de dos mil veinticinco. Mujer de treinta y cinco años con diarrea crónica con sangre y mucosidad de seis meses, urgencia para ir al baño, pujo y tenesmo. La colonoscopía muestra mucosa eritematosa, granular, con pseudopólipos, desde el recto en forma continua hasta el ángulo esplénico, sin mucosa sana entremedio.',
        question: '¿Cuál es el diagnóstico?',
        options: 'Las opciones: colitis isquémica, colitis ulcerosa, intestino irritable, colitis infecciosa, o enfermedad de Crohn. Piénsalo.',
        answer: 'Es la B, colitis ulcerosa. Esta vez date vuelta la pregunta: no hay ni una sola característica de Crohn. Es continua, parte del recto, no hay parches ni mucosa sana intercalada. Por descarte, y porque cumple todos los requisitos de la colitis ulcerosa, esa es la respuesta. La misma regla te sirve para afirmar un diagnóstico y para descartarlo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Colonoscopía', kind: 'key', items: [
          { t: 'Joven + disentería + baja de peso', d: 'Colonoscopía con ileoscopía y biopsias',
            say: 'Cerremos con las reglas de oro. Joven con diarrea disentérica crónica, fiebre y baja de peso: colonoscopía con ileoscopía y biopsias.' },
          { t: 'Basta una característica de Crohn', d: 'Íleon, parches, recto sano, fístula, masa',
            say: 'Basta una característica de Crohn para llamarlo Crohn. Solo colon, continuo y desde el recto: colitis ulcerosa.' },
        ] },
        { title: 'Complicaciones', tag: 'Vigilar', kind: 'alert', items: [
          { t: 'CU: megacolon y cáncer', d: 'Sangrado nuevo: colonoscopía completa',
            say: 'La colitis ulcerosa da megacolon tóxico y, tras ocho a diez años, cáncer colorrectal: por eso un sangrado nuevo se estudia con colonoscopía completa.' },
        ] },
        { title: 'Tratamiento', tag: 'Cirugía', kind: 'pharma', items: [
          { t: 'Corticoides solo para el brote', d: 'Nunca de mantención',
            say: 'Los corticoides apagan el brote, pero nunca se usan de mantención.' },
          { t: 'Colectomía cura la CU, no el Crohn', d: 'En Crohn, resección económica',
            say: 'Y la colectomía cura la colitis ulcerosa, pero nunca el Crohn. Si te llevas una sola idea de hoy: basta una característica de Crohn para que sea Crohn, y eso decide si la cirugía cura o no. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Enfermedad inflamatoria intestinal: ¿CU o Crohn?',
    root: N('start', 'Diarrea disentérica crónica', 'Joven con fiebre y baja de peso',
      'Partimos del adulto joven con diarrea con sangre y mucosidad de meses, fiebre y baja de peso. Pensamos en enfermedad inflamatoria intestinal.',
      ['', N('do', 'Colonoscopía con ileoscopía', 'Biopsias escalonadas',
        'La conducta inicial es siempre la colonoscopía total con ileoscopía y biopsias escalonadas. La calprotectina y los anticuerpos solo apoyan.',
        ['', N('q', '¿Alguna característica de Crohn?', 'Íleon · parches · recto sano · fístula · masa · perianal',
          'Ahora la pregunta que resuelve el caso: ¿hay al menos una característica de Crohn? Compromiso del íleon, parches, recto sano, fístula, masa o enfermedad perianal.',
          ['SÍ', N('refer', 'Enfermedad de Crohn', 'Tratamiento escalonado por especialista',
            'Si hay una sola, es Crohn. Se deriva al especialista para el tratamiento escalonado, desde corticoides en el brote hasta biológicos.',
            ['Complicación', N('alert', 'Resección económica', 'Estenosis, fístula o absceso; nunca cura',
              'Si se complica con estenosis, fístula o absceso, se reseca solo el segmento afectado, o se hace estenoplastía. La cirugía nunca cura el Crohn.')])],
          ['NO', N('refer', 'Colitis ulcerosa', 'Colon continuo desde el recto',
            'Si es puramente colónica, continua y desde el recto, es colitis ulcerosa. La base es la mesalazina, y los corticoides solo para el brote.',
            ['Megacolon o refractaria', N('alert', 'Colectomía curativa', 'Megacolon: dilatación > 6 cm + sepsis',
              'Ante un megacolon tóxico o una enfermedad refractaria, la colectomía es curativa, porque la enfermedad vive solo en el colon.')],
            ['Más de 8–10 años', N('ok', 'Colonoscopía de vigilancia', 'Riesgo de cáncer colorrectal',
              'Y tras ocho a diez años de enfermedad, colonoscopías de vigilancia periódicas por el riesgo de cáncer colorrectal. Un sangrado nuevo se estudia con colonoscopía completa.')])])])]),
  },
};
