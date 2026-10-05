// Clase 14.7 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-07). Preguntas: banco real EUNACOM (class_questions.cjs).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-07',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo distinguir los tres vértigos periféricos por cuánto duran, y cómo descartar un infarto de fosa posterior con el protocolo HINTS',
      say: 'Bienvenido. El vértigo es uno de los temas con más preguntas del examen, y casi todas se resuelven con una sola variable: cuánto dura la crisis. Segundos, es un vértigo posicional. Horas, es Ménière. Días, es una neuronitis. Pero además hay un objetivo que está por sobre todos: no dejar pasar un infarto del cerebelo o del tronco que se hace pasar por un vértigo periférico. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Vértigo posicional paroxístico benigno',
      title: 'Por qué una piedrita da vértigo',
      nodes: [
        { id: 'ut', col: 0, row: 1, k: 'cause', t: 'Otoconias del utrículo', s: 'Cristales de carbonato de calcio' },
        { id: 'de', col: 1, row: 1, k: 'mech', t: 'Se desprenden hacia un canal', s: 'Canalitiasis, canal posterior en 85 a 90%' },
        { id: 'gi', col: 2, row: 0, k: 'start', t: 'Cambio de posición de la cabeza', s: 'Girar en la cama, agacharse' },
        { id: 'vv', col: 2, row: 2, k: 'effect', t: 'Corriente de endolinfa', s: 'El canal envía una señal falsa' },
        { id: 've', col: 3, row: 1, k: 'alert', t: 'Vértigo de 10 a 60 segundos', s: 'Sin hipoacusia ni acúfeno' },
      ],
      edges: [
        { from: 'ut', to: 'de' },
        { from: 'de', to: 'vv' },
        { from: 'gi', to: 'vv', label: 'mueve las partículas' },
        { from: 'vv', to: 've' },
      ],
      steps: [
        { show: ['ut', 'de'], note: 'Cristales sueltos en un canal semicircular',
          say: 'El vértigo posicional paroxístico benigno es la causa más frecuente de vértigo periférico, hasta la mitad de los casos. El mecanismo se llama canalitiasis: unos cristales de carbonato de calcio, las otoconias, se desprenden desde el utrículo y caen dentro de un canal semicircular, casi siempre el posterior.' },
        { show: ['gi', 'vv'], note: 'Cada giro mueve las partículas',
          say: 'Mientras la cabeza está quieta, no pasa nada. Pero cuando cambia de posición respecto a la gravedad, las partículas se mueven, arrastran la endolinfa y el canal envía una señal falsa de giro.' },
        { show: ['ve'], note: 'Crisis breves, solo con el movimiento',
          say: 'Por eso el paciente tiene crisis de diez a sesenta segundos, solo al girar en la cama, acostarse, agacharse o mirar hacia arriba. No hay hipoacusia ni acúfenos, porque la cóclea está sana.' },
      ],
    },

    {
      type: 'points',
      kicker: 'VPPB',
      title: 'Dix-Hallpike y maniobra de Epley',
      cards: [
        { title: 'Diagnóstico', tag: 'Maniobra de Dix-Hallpike', kind: 'criteria', items: [
          { t: 'Acostar con la cabeza rotada 45°', d: 'Y extendida 20°',
            say: 'La maniobra de Dix-Hallpike consiste en acostar al paciente con la cabeza girada cuarenta y cinco grados y extendida veinte grados, hacia el lado que se sospecha.' },
          { t: 'Latencia de 2 a 5 segundos', d: 'Vértigo intenso y nistagmo torsional',
            say: 'Después de una latencia de dos a cinco segundos aparece un vértigo intenso, con un nistagmo torsional y vertical, geotrópico, hacia arriba.' },
          { t: 'Se agota en 45 segundos', d: 'Latencia y fatigabilidad: sello del VPPB',
            say: 'Y el nistagmo se agota solo, en menos de treinta a cuarenta y cinco segundos. La latencia y la fatigabilidad son lo que identifica al vértigo posicional.' },
        ] },
        { title: 'Tratamiento', tag: 'Mecánico, sin fármacos', kind: 'pharma', items: [
          { t: 'Maniobra de Epley o Semont', d: 'En la misma consulta',
            say: 'El tratamiento de elección no son los fármacos, son las maniobras de reposición de partículas, la de Epley o la de Semont. Se hacen en el box y devuelven los cristales al utrículo.' },
          { t: 'Cura a más del 90%', d: 'Sin cinarizina ni sedantes',
            say: 'Curan a más del noventa por ciento de los pacientes. La cinarizina, la flunarizina y los sedantes vestibulares no corrigen la causa mecánica y dan somnolencia, y parkinsonismo en adultos mayores. Esa es la trampa clásica.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Maniobra de Epley paso a paso',
      images: [
        { src: 'biblioteca/17_otorrino/orl-07/01_maniobra-de-epley-modificada__harrison_p202.jpg', label: 'Secuencia de la maniobra de Epley modificada: fila superior para el oído derecho, fila inferior para el izquierdo', credit: 'Harrison 21.ª ed., Fig. 22-1' },
      ],
      steps: [
        { note: 'Giros de cabeza en cuatro tiempos',
          say: 'Mira la secuencia, de izquierda a derecha. El paciente parte sentado, se acuesta con la cabeza girada hacia el oído afectado, luego se gira la cabeza hacia el otro lado, después el cuerpo y la cabeza, y finalmente se vuelve a sentar. En cada posición se espera a que ceda el nistagmo. Con esos giros, la partícula recorre el canal y sale de vuelta al utrículo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Neuronitis vestibular',
      title: 'Vértigo de días, sin hipoacusia',
      cards: [
        { title: 'Clínica', tag: 'Síndrome vestibular agudo', kind: 'key', items: [
          { t: 'Vértigo continuo, 2 a 5 días', d: 'Náuseas, vómitos, no puede caminar',
            say: 'La neuronitis vestibular es una inflamación aguda del nervio vestibular, habitualmente viral, después de un resfrío o por reactivación del herpes simplex. Produce un vértigo rotatorio continuo, invalidante, de dos a cinco días, con náuseas, vómitos y lateropulsión hacia el lado lesionado.' },
          { t: 'Sin hipoacusia ni acúfenos', d: 'Con hipoacusia: laberintitis',
            say: 'Aquí viene la clave: no hay síntomas auditivos. Si además hay hipoacusia súbita, el cuadro se llama laberintitis aguda.' },
          { t: 'Nistagmo horizontal hacia el oído sano', d: 'Aumenta al mirar hacia donde bate',
            say: 'En el examen hay un nistagmo espontáneo, unidireccional, horizontal, que bate hacia el oído sano. Aumenta al mirar hacia el lado de batido, que es la ley de Alexander, y disminuye al fijar la vista.' },
        ] },
        { title: 'Tratamiento', tag: 'Sedantes máximo 48 horas', kind: 'pharma', items: [
          { t: 'Dimenhidrinato o lorazepam', d: 'Solo 48 horas',
            say: 'En las primeras cuarenta y ocho horas se usan antieméticos y sedantes vestibulares: dimenhidrinato cincuenta miligramos cada ocho horas, o lorazepam un miligramo sublingual. Solo por cuarenta y ocho horas, porque más tiempo frena la compensación central.' },
          { t: 'Prednisona 1 mg/kg/día por 7 días', d: 'Desde las primeras 72 horas',
            say: 'Y se agregan corticoides orales, prednisona uno miligramo por kilo al día por siete días, con descenso, iniciados en las primeras setenta y dos horas, para acelerar la recuperación vestibular.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Enfermedad de Ménière',
      title: 'Hidrops endolinfático',
      nodes: [
        { id: 'sa', col: 0, row: 1, k: 'cause', t: 'Reabsorción deficiente en el saco endolinfático', s: 'La endolinfa se acumula' },
        { id: 'hi', col: 1, row: 1, k: 'mech', t: 'Hidrops endolinfático', s: 'Aumenta la presión del laberinto' },
        { id: 'pr', col: 2, row: 0, k: 'effect', t: 'Acúfeno grave y plenitud ótica', s: 'Suelen preceder a la crisis' },
        { id: 'vr', col: 2, row: 1, k: 'alert', t: 'Vértigo: 20 min a 12 h', s: 'Típico: 2 a 4 horas' },
        { id: 'hs', col: 2, row: 2, k: 'risk', t: 'Hipoacusia que fluctúa', s: 'Tonos graves y medios, 250 a 1000 Hz' },
      ],
      edges: [
        { from: 'sa', to: 'hi' },
        { from: 'hi', to: 'pr' },
        { from: 'hi', to: 'vr' },
        { from: 'hi', to: 'hs' },
      ],
      steps: [
        { show: ['sa', 'hi'], note: 'Exceso de endolinfa en el laberinto',
          say: 'En la enfermedad de Ménière, la endolinfa no se reabsorbe bien en el saco endolinfático y se acumula. El laberinto membranoso se distiende y sube su presión. Eso se llama hidrops endolinfático.' },
        { show: ['pr'], note: 'Primero, acúfeno y plenitud',
          say: 'Primero aparece el acúfeno de tono grave y la sensación de plenitud u oído tapado, que muchas veces avisan que viene la crisis.' },
        { show: ['vr', 'hs'], note: 'La tríada: vértigo, hipoacusia y acúfeno',
          say: 'Después viene la tríada completa. Crisis espontáneas de vértigo rotatorio de veinte minutos a doce horas, típicamente dos a cuatro. Y una hipoacusia sensorioneural fluctuante, que en las etapas iniciales afecta los tonos graves y medios, entre doscientos cincuenta y mil hertz.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Ménière',
      title: 'Crisis y prevención',
      cards: [
        { title: 'Crisis aguda', tag: 'Observación en urgencia', kind: 'pharma', items: [
          { t: 'Reposo y sedantes vestibulares', d: 'Clorpromazina o lorazepam EV',
            say: 'En la crisis aguda se deja reposo en cama y se usan sedantes vestibulares, como clorpromazina o lorazepam endovenoso, en sala de observación.' },
        ] },
        { title: 'Prevención', tag: 'Entre crisis', kind: 'key', items: [
          { t: 'Sodio menor de 2 g/día', d: 'Sin cafeína ni tabaco',
            say: 'El pilar de la prevención es la dieta con restricción estricta de sodio, menos de dos gramos al día, y abandonar la cafeína y el tabaco.' },
          { t: 'Hidroclorotiazida o betahistina', d: '25 a 50 mg; 16 a 24 mg c/12 h',
            say: 'A eso se agregan diuréticos tiazídicos, hidroclorotiazida veinticinco a cincuenta miligramos al día, o betahistina, dieciséis a veinticuatro miligramos cada doce horas, para reducir el volumen de endolinfa.' },
          { t: 'Refractarios: intratimpánico', d: 'Corticoide o gentamicina',
            say: 'En los casos refractarios, el especialista usa inyecciones intratimpánicas de corticoide o de gentamicina, que es una laberintectomía química.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Vértigo agudo',
      title: 'Primero, descartar un infarto',
      cards: [
        { title: 'Por qué HINTS', tag: 'Fosa posterior', kind: 'alert', items: [
          { t: 'Vértigo continuo con nistagmo', d: 'Puede ser un ACV de PICA o AICA',
            say: 'Cuando llega a urgencia alguien con vértigo continuo y nistagmo, antes de decir neuronitis tienes que descartar un accidente cerebrovascular isquémico de fosa posterior, en territorio de la arteria cerebelosa posteroinferior o anteroinferior.' },
          { t: 'HINTS supera a la RMN precoz', d: 'La RMN tiene 12 a 20% de falsos negativos',
            say: 'En las primeras veinticuatro a cuarenta y ocho horas, la resonancia puede tener entre doce y veinte por ciento de falsos negativos. En cambio, el protocolo HINTS, hecho por un médico entrenado, tiene sensibilidad de cien por ciento y especificidad de noventa y seis por ciento.' },
        ] },
        { title: 'Regla para recordar', tag: 'INFARCT', kind: 'key', items: [
          { t: 'Impulse normal', d: 'Fast-phase alternating, Refixation on cover test',
            say: 'La regla para recordarlo es INFARCT, en inglés: impulso normal, nistagmo que alterna de dirección, y refijación en el test de oclusión. Cualquiera de los tres hace pensar en un infarto.' },
          { t: 'Cualquier signo central: hospitalizar', d: 'Por sospecha de ACV',
            say: 'Si hay cualquiera de estos signos, se hospitaliza de urgencia por sospecha de accidente cerebrovascular.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Protocolo HINTS',
      title: 'Periférico contra central',
      head: ['Prueba', 'Periférico', 'Central (ACV)'],
      rows: [
        { cells: ['Impulso cefálico', 'Anormal: sacada correctiva', 'Normal: sin sacada'],
          say: 'El primer componente es el impulso cefálico. En el vértigo periférico es anormal: el ojo se desvía y necesita una sacada correctiva para volver al objetivo. Y aquí está lo contraintuitivo: un impulso cefálico normal en un vértigo continuo sugiere un infarto central.' },
        { cells: ['Nistagmo', 'Unidireccional horizontal', 'Bidireccional o vertical'],
          say: 'El segundo es el nistagmo. El periférico es unidireccional y horizontal, y aumenta al mirar hacia donde bate. Si cambia de sentido al cambiar la mirada, o es vertical, es estrictamente central.' },
        { cells: ['Test de skew', 'Ojos alineados', 'Desalineación vertical'],
          say: 'El tercero es el test de skew, con oclusión alterna de los ojos. En el periférico, los ojos están alineados. Si un ojo sube o baja al ocluir y desocluir, hay desviación vertical, que es signo inequívoco de lesión del tronco encefálico.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'VPPB, neuronitis y Ménière',
      head: ['', 'VPPB', 'Neuronitis', 'Ménière'],
      rows: [
        { cells: ['Duración', '10 a 60 segundos', '2 a 5 días', '20 min a 12 horas'],
          say: 'Esta tabla es la que más rinde. La duración: segundos en el vértigo posicional, días en la neuronitis, horas en Ménière.' },
        { cells: ['Gatillante', 'Cambios de posición', 'Espontáneo tras virosis', 'Espontáneo, tras acúfeno y presión'],
          say: 'El gatillante: el posicional aparece solo con los cambios de posición de la cabeza. La neuronitis es espontánea, después de un cuadro viral. Y el Ménière es espontáneo, precedido por acúfeno y presión en el oído.' },
        { cells: ['Audición', 'Normal', 'Normal', 'Hipoacusia fluctuante y acúfeno'],
          say: 'La audición es normal en las dos primeras. Solo en el Ménière hay hipoacusia fluctuante y acúfeno.' },
        { cells: ['Examen', 'Dix-Hallpike positivo', 'Nistagmo horizontal al oído sano', 'Caída en frecuencias graves'],
          say: 'En el examen: Dix-Hallpike positivo en el posicional, nistagmo horizontal hacia el oído sano en la neuronitis, y audiometría con caída en graves en el Ménière.' },
        { cells: ['Tratamiento', 'Epley, sin fármacos', 'Corticoides; sedantes 48 horas', 'Sal menor de 2 g, diurético o betahistina'],
          say: 'Y el tratamiento: Epley sin fármacos, corticoides con sedantes por cuarenta y ocho horas, y dieta sin sal con diuréticos o betahistina.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol para el paciente que llega mareado, partiendo por lo más importante: ¿es central o es periférico?',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hombre de 38 años consulta en urgencia por vértigo rotatorio continuo de 24 horas, con náuseas y múltiples vómitos, que le impide caminar. Una semana antes tuvo un resfrío. No tiene hipoacusia ni acúfenos. Presenta nistagmo horizontal unidireccional hacia la derecha, que aumenta al mirar a la derecha, impulso cefálico anormal con sacada correctiva hacia la izquierda y test de skew negativo.',
      question: '¿Cuál es el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'Maniobra de Epley en la consulta' },
        { letter: 'B', text: 'Dimenhidrinato por 48 horas y prednisona 1 mg/kg/día por 7 días' },
        { letter: 'C', text: 'Dieta con sodio menor de 2 g/día e hidroclorotiazida' },
        { letter: 'D', text: 'Sedantes vestibulares por 4 semanas para evitar recurrencias' },
        { letter: 'E', text: 'Hospitalizar por sospecha de ACV de fosa posterior' },
      ],
      correct: 'B',
      explanation: 'Es una neuronitis vestibular, con HINTS periférico: impulso cefálico anormal, nistagmo unidireccional horizontal y skew negativo. Se trata con antieméticos o sedantes vestibulares solo por 48 horas, para no frenar la compensación central, más prednisona 1 mg/kg/día por 7 días. Epley es para el VPPB y la dieta sin sal para Ménière.',
      say: {
        stem: 'Veamos un caso. Hombre de treinta y ocho años con vértigo rotatorio continuo desde hace veinticuatro horas, náuseas y vómitos, que no puede caminar. Tuvo un resfrío la semana pasada, y no tiene hipoacusia ni acúfenos. El nistagmo es horizontal, unidireccional, hacia la derecha. El impulso cefálico es anormal, con sacada correctiva, y el test de skew es negativo.',
        question: '¿Cuál es el manejo más adecuado?',
        options: 'Las opciones: maniobra de Epley, dimenhidrinato y prednisona, dieta sin sal con diurético, sedantes por cuatro semanas, u hospitalizar por sospecha de infarto. Piénsalo.',
        answer: 'Es la B. Vértigo de un día, tras una virosis, sin síntomas auditivos y con HINTS periférico: neuronitis vestibular. Das sedantes vestibulares solo por cuarenta y ocho horas, para no frenar la compensación central, y prednisona por siete días. Los sedantes por cuatro semanas son el error, y Epley y la dieta sin sal corresponden a otros vértigos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 137',
      stem: 'Paciente con vértigo posicional y maniobra de Dix-Hallpike positiva para canal posterior izquierdo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Betahistina oral por 4 semanas' },
        { letter: 'B', text: 'Dimenhidrinato oral por 7 días' },
        { letter: 'C', text: 'Maniobras de reposición canalicular (Epley)' },
        { letter: 'D', text: 'Derivar a neurología urgente' },
        { letter: 'E', text: 'Prednisona oral 1 mg/kg/día' },
      ],
      correct: 'C',
      explanation: 'Vértigo posicional con Dix-Hallpike positivo: VPPB del canal posterior. La conducta de primera línea es la maniobra de reposición canalicular de Epley.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de enero de dos mil veintitrés. Paciente con vértigo posicional y maniobra de Dix-Hallpike positiva para el canal posterior izquierdo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: betahistina, dimenhidrinato, maniobras de Epley, derivar a neurología urgente o prednisona. Piénsalo.',
        answer: 'Es la C, la maniobra de Epley. Dix-Hallpike positivo es un vértigo posicional, y se trata con maniobra de reposición, no con fármacos. Betahistina, dimenhidrinato y prednisona son las trampas que suenan activas, pero no corrigen una canalitiasis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 7',
      stem: 'Un paciente presenta vértigo, de segundos de duración, que se le produce al girar la cabeza a derecha, mientras está acostado. No tiene síntomas auditivos y como antecedente refiere haber sufrido un traumatismo encefálico hace 10 días, en un accidente de trabajo. No presenta adiadococinesia ni dismetría. El resto de su examen físico es normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar flunarizina' },
        { letter: 'B', text: 'Iniciar tietilperazina' },
        { letter: 'C', text: 'Solicitar un TAC de oídos' },
        { letter: 'D', text: 'Derivar para maniobras de reposición vestibular' },
        { letter: 'E', text: 'Iniciar difenidol' },
      ],
      correct: 'D',
      explanation: 'Es un vértigo postural paroxístico benigno clásico, aquí postraumático: segundos de duración, gatillado por el giro de la cabeza y sin síntomas auditivos. Se trata con maniobras de reposición vestibular, no con fármacos.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil diecisiete. Paciente con vértigo de segundos que aparece al girar la cabeza a la derecha estando acostado. Sin síntomas auditivos, con un traumatismo encefálico hace diez días. Sin signos cerebelosos y con el resto del examen normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: flunarizina, tietilperazina, TAC de oídos, derivar para maniobras de reposición vestibular, o difenidol. Piénsalo.',
        answer: 'Es la D. Vértigo de segundos al girar la cabeza, sin síntomas auditivos: VPPB. El traumatismo es un distractor, porque el trauma también puede desprender otoconias. La conducta son las maniobras de reposición. Los otros fármacos son sedantes vestibulares y no resuelven la causa mecánica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 88',
      stem: 'Una paciente de 43 años presenta vértigo de 5 días de evolución, intenso, asociado a vómitos, lo que limita sus actividades. No tiene síntomas auditivos.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Parálisis cocleovestibular' },
        { letter: 'B', text: 'Vértigo postural' },
        { letter: 'C', text: 'Hídrops endolinfático' },
        { letter: 'D', text: 'Neuronitis vestibular' },
        { letter: 'E', text: 'Neurinoma del acústico' },
      ],
      correct: 'D',
      explanation: 'Es una neuronitis vestibular clásica. La ausencia de síntomas auditivos descarta la parálisis cocleovestibular, que es una sordera súbita con compromiso vestibular, y el hídrops endolinfático o enfermedad de Ménière. El vértigo postural se desencadena con movimientos de la cabeza.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de agosto de dos mil veintiuno. Paciente de cuarenta y tres años con vértigo intenso de cinco días, con vómitos, que limita sus actividades. No tiene síntomas auditivos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: parálisis cocleovestibular, vértigo postural, hídrops endolinfático, neuronitis vestibular o neurinoma del acústico. Piénsalo.',
        answer: 'Es la D, neuronitis vestibular. Vértigo continuo de días, sin síntomas auditivos. Si hubiera hipoacusia, sería una parálisis cocleovestibular o una laberintitis. El hídrops endolinfático es Ménière y duraría horas. Y el vértigo postural dura segundos y se gatilla con el movimiento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 154',
      stem: 'Paciente de 50 años con episodios de vértigo rotatorio, tinnitus unilateral fluctuante e hipoacusia neurosensorial ipsilateral. Los síntomas duran horas. Audiometría disponible en una semana.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Enfermedad de Ménière' },
        { letter: 'B', text: 'Vértigo posicional paroxístico benigno (VPPB)' },
        { letter: 'C', text: 'Neuritis vestibular' },
        { letter: 'D', text: 'ACV de fosa posterior' },
        { letter: 'E', text: 'Schwannoma vestibular' },
      ],
      correct: 'A',
      explanation: 'Tríada de Ménière: vértigo episódico, hipoacusia neurosensorial fluctuante y tinnitus, todo ipsilateral, con episodios de horas. El VPPB dura segundos y no tiene hipoacusia.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil veinticinco. Paciente de cincuenta años con episodios de vértigo rotatorio, tinnitus unilateral fluctuante e hipoacusia neurosensorial del mismo lado. Los síntomas duran horas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: Ménière, vértigo posicional, neuritis vestibular, infarto de fosa posterior o schwannoma vestibular. Piénsalo.',
        answer: 'Es la A, enfermedad de Ménière. Vértigo episódico, hipoacusia fluctuante y acúfeno, todos del mismo oído, con crisis de horas: es la tríada. El vértigo posicional dura segundos y no tiene hipoacusia, y la neuritis dura días y no tiene síntomas auditivos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 104',
      stem: 'Un paciente de 59 años presenta hipoacusia bilateral, asociado a otorrea, de larga data. Consulta por un cuadro de reciente inicio, de mayor hipoacusia derecha, asociada a vértigo persistente, que ha ido en aumento. Al examen se aprecia nistagmo horizontal, con fase rápida a derecha.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Otomastoiditis aguda' },
        { letter: 'B', text: 'Laberintitis aguda' },
        { letter: 'C', text: 'Vértigo postural paroxístico' },
        { letter: 'D', text: 'Absceso cerebral' },
        { letter: 'E', text: 'Neuronitis vestibular' },
      ],
      correct: 'B',
      explanation: 'Es una laberintitis aguda: vértigo persistente con aumento de la hipoacusia, en un oído con otorrea crónica. La neuronitis vestibular no tiene hipoacusia.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil quince. Paciente de cincuenta y nueve años con hipoacusia bilateral y otorrea de larga data. Consulta por más hipoacusia en el oído derecho, con un vértigo persistente que aumenta. Tiene nistagmo horizontal con fase rápida hacia la derecha.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: otomastoiditis aguda, laberintitis aguda, vértigo postural, absceso cerebral o neuronitis vestibular. Piénsalo.',
        answer: 'Es la B, laberintitis aguda. Hay vértigo con empeoramiento de la audición, en un oído con otorrea crónica, que puede venir de una otitis crónica o un colesteatoma. La neuronitis es parecida, pero sin hipoacusia. Esa es la diferencia que separa las dos opciones.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 29',
      stem: 'Un paciente de 67 años, con antecedente de hipertensión arterial sin tratamiento, consulta por vértigo intenso de inicio súbito hace 2 horas, asociado a dificultades en la marcha que le impiden mantenerse de pie. Al examen físico se observa hipotónico, con dismetría de extremidades y nistagmus multidireccional.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar difenidol' },
        { letter: 'B', text: 'Realizar examen de VIII par' },
        { letter: 'C', text: 'Solicitar prueba calórica' },
        { letter: 'D', text: 'Solicitar resonancia magnética nuclear de troncoencéfalo' },
        { letter: 'E', text: 'Solicitar TAC de cerebro' },
      ],
      correct: 'E',
      explanation: 'Es un vértigo central, por el nistagmo multidireccional y la dismetría, propios de un síndrome cerebeloso. Hay que pedir neuroimagen. La RMN ve mejor la fosa posterior, pero lo más urgente es el TAC, rápido, porque la sospecha es un ACV cerebeloso o vertebrobasilar dentro de la ventana de trombólisis.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Hombre de sesenta y siete años con hipertensión sin tratamiento, con vértigo intenso de inicio súbito hace dos horas y dificultad para mantenerse de pie. Está hipotónico, con dismetría de extremidades y nistagmo multidireccional.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: difenidol, examen del octavo par, prueba calórica, resonancia de troncoencéfalo o TAC de cerebro. Piénsalo.',
        answer: 'Es la E, TAC de cerebro. El nistagmo multidireccional y la dismetría son signos centrales, justo lo que busca el HINTS, y la sospecha es un infarto cerebeloso o vertebrobasilar. La resonancia ve mejor la fosa posterior, pero el TAC es rápido y es lo más urgente, porque el paciente puede estar dentro de la ventana de trombólisis. El difenidol y la prueba calórica son para un vértigo periférico.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: síndrome vertiginoso',
      cards: [
        { title: 'Por la duración', tag: 'Periférico', kind: 'key', items: [
          { t: 'Segundos, días u horas', d: 'VPPB, neuronitis y Ménière',
            say: 'Cerremos con las reglas de oro. Segundos con cambio de posición es un VPPB, y se trata con Epley. Días y sin hipoacusia es neuronitis, con corticoides y sedantes solo cuarenta y ocho horas.' },
          { t: 'Horas con hipoacusia y acúfeno', d: 'Ménière: sal baja y diurético',
            say: 'Horas con hipoacusia fluctuante y acúfeno es Ménière, y se previene con dieta sin sal, diurético o betahistina.' },
        ] },
        { title: 'Descartar lo central', tag: 'HINTS', kind: 'alert', items: [
          { t: 'Impulso normal, nistagmo cambiante, skew', d: 'Hospitalizar por ACV',
            say: 'Si el vértigo es continuo, descarta lo central con el HINTS: impulso cefálico normal, nistagmo que cambia de dirección o vertical, o skew positivo. Cualquiera de esos signos es un infarto hasta demostrar lo contrario.' },
        ] },
        { title: 'Lo que no se hace', tag: 'Trampas', kind: 'pharma', items: [
          { t: 'Fármacos en el VPPB', d: 'Sedantes más de 48 horas',
            say: 'Y no se tratan con fármacos los vértigos posicionales, ni se dan sedantes por más de cuarenta y ocho horas en la neuronitis. Si te llevas una sola idea de hoy: la duración de la crisis te dice el diagnóstico, y el HINTS te dice si es peligroso. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo diagnóstico del síndrome vertiginoso: periférico contra central',
    root: N('start', 'Paciente con vértigo', '¿Cuánto dura y con qué se desencadena?',
      'Un paciente consulta por vértigo. Lo primero es la historia: cuánto dura y qué lo desencadena.',
      ['', N('q', '¿Vértigo continuo con nistagmo?', 'Síndrome vestibular agudo',
        'Si el vértigo es continuo, con nistagmo, lo primero es el protocolo HINTS, para descartar un infarto de fosa posterior.',
        ['Sí: HINTS con signo central', N('alert', 'Sospecha de ACV de fosa posterior', 'Impulso normal, nistagmo cambiante o skew',
          'Un impulso cefálico normal, un nistagmo que cambia de dirección o vertical, o un test de skew positivo indican origen central. Se hospitaliza de urgencia y se pide neuroimagen.')],
        ['Sí: HINTS periférico', N('do', 'Neuronitis vestibular', 'Vértigo de días, sin hipoacusia',
          'Impulso cefálico anormal, nistagmo unidireccional horizontal y skew negativo: es periférico. Sedantes vestibulares solo por cuarenta y ocho horas y prednisona por siete días.')],
        ['No: crisis breves y repetidas', N('q', '¿Cuánto dura la crisis?', 'Segundos u horas',
          'Si las crisis son episodios que van y vienen, la duración separa los otros dos diagnósticos.',
          ['Segundos, con cambios de posición', N('ok', 'VPPB: Dix-Hallpike y Epley', 'Sin fármacos sedantes',
            'Con Dix-Hallpike positivo, el tratamiento es la maniobra de Epley en la misma consulta.')],
          ['Horas, con hipoacusia y acúfeno', N('refer', 'Ménière: sodio bajo y diurético', 'Betahistina; audiometría con caída en graves',
            'Es Ménière. En la crisis, reposo y sedantes. Entre crisis, dieta con menos de dos gramos de sodio, hidroclorotiazida o betahistina.')],
        )],
      )],
    ),
  },
};
