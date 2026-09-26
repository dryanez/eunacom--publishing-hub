// Clase 19.9 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia_bloque_2.cjs (ob-09).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-09',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Por qué a la embarazada se le trata todo, y qué la manda al hospital',
      say: 'Bienvenida. Hoy vemos la infección urinaria en el embarazo: bacteriuria asintomática, cistitis y pielonefritis aguda. Es un tema muy preguntado, y tiene una idea que lo ordena todo: en la embarazada, tú tratas incluso lo que en cualquier otra persona dejarías tranquilo. Vamos a ver por qué, y cómo separar lo que se trata en tu consulta de lo que mandas al hospital.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué la embarazada se infecta más?',
      nodes: [
        { id: 'pro', col: 0, row: 0, k: 'cause', t: 'Progesterona relaja el uréter', s: 'El uréter se dilata' },
        { id: 'ute', col: 0, row: 1, k: 'cause', t: 'Útero grávido comprime', s: 'Dextrorrotado, aprieta el uréter derecho' },
        { id: 'sta', col: 1, row: 0, k: 'mech', t: 'La orina se estanca', s: 'Sube más lento de lo normal' },
        { id: 'asc', col: 2, row: 0, k: 'effect', t: 'La bacteria asciende', s: 'Escherichia coli, la más frecuente' },
        { id: 'ba', col: 3, row: 0, k: 'risk', t: 'Bacteriuria asintomática', s: 'Bacteria en la orina, sin síntomas' },
      ],
      edges: [
        { from: 'pro', to: 'sta' }, { from: 'ute', to: 'sta', label: 'comprime' },
        { from: 'sta', to: 'asc' }, { from: 'asc', to: 'ba' },
      ],
      steps: [
        { show: ['pro'], note: 'La progesterona relaja el músculo liso del uréter',
          say: 'Empecemos por entender por qué a ti, como médico, te va a tocar tratar tanta infección urinaria en el embarazo. La progesterona relaja el músculo liso, y eso incluye al uréter: se dilata.' },
        { show: ['ute'], note: 'El útero aprieta más el lado derecho',
          say: 'Y el útero que va creciendo comprime el uréter desde afuera. Como el útero rota hacia la derecha, fíjate que esto explica algo que vas a ver más adelante: la pielonefritis del embarazo es más frecuente del lado derecho.' },
        { show: ['sta'], note: 'Un uréter dilatado y comprimido drena lento',
          say: 'Entre la dilatación y la compresión, la orina se estanca, y baja mucho más lento de lo normal.' },
        { show: ['asc'], note: 'Escherichia coli, la protagonista de siempre',
          say: 'Y con la orina estancada, la bacteria que sube desde la vagina, casi siempre Escherichia coli, tiene todo el tiempo del mundo para instalarse.' },
        { show: ['ba'], note: 'Bacteria en la orina, sin ningún síntoma',
          say: 'Y así llegas a la bacteriuria asintomática: hay bacteria en la orina, pero la paciente no tiene ninguna molestia. Guarda esta idea, porque es la clave de toda la clase.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Bacteriuria asintomática',
      title: 'La regla que cambia todo en el embarazo',
      cards: [
        { title: 'Definición', tag: 'Un solo germen', kind: 'criteria', items: [
          { t: 'Urocultivo con más de cien mil', d: 'Segundo chorro, sin ningún síntoma',
            say: 'Fíjate en la definición, porque se pregunta tal cual: urocultivo por segundo chorro con más de cien mil unidades formadoras de colonias de un solo germen, en una paciente que no tiene ningún síntoma urinario ni general.' },
        ] },
        { title: 'La regla de oro', tag: 'Se trata siempre', kind: 'alert', items: [
          { t: 'Se trata siempre en la embarazada', d: 'Aunque no tenga ninguna molestia',
            say: 'Y aquí está la idea central. En cualquier otra persona, la bacteriuria asintomática no se trata: no vale la pena. Pero en la embarazada, tú la tratas siempre, aunque no tenga ninguna molestia.' },
          { t: 'Sin tratar: treinta a cuarenta por ciento', d: 'Progresa a pielonefritis',
            say: 'Y la razón es que si no la tratas, de treinta a cuarenta de cada cien va a progresar a una pielonefritis, con riesgo de parto prematuro. Esa diferencia con la mujer no embarazada es justo lo que te van a preguntar.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Bacteriuria y cistitis',
      title: 'Tratamiento ambulatorio',
      cards: [
        { title: 'Antibiótico de elección', tag: 'Siete días', kind: 'pharma', items: [
          { t: 'Cefadroxilo cada doce horas', d: 'Por siete días completos',
            say: 'Tanto la bacteriuria asintomática como la cistitis se tratan igual, ambulatorio, con cefadroxilo oral cada doce horas, por siete días.' },
          { t: 'Nitrofurantoína, alternativa', d: 'Evítala entre las semanas treinta y seis y cuarenta',
            say: 'La alternativa es la nitrofurantoína. Pero acuérdate de un detalle que se pregunta: evítala entre las semanas treinta y seis y cuarenta, porque hay un riesgo teórico de anemia hemolítica en el recién nacido.' },
        ] },
        { title: 'Cistitis aguda', tag: 'Síntomas bajos, sin fiebre', kind: 'criteria', items: [
          { t: 'Disuria y polaquiuria', d: 'Sin fiebre ni compromiso general',
            say: 'La cistitis se ve como en cualquier mujer: disuria, polaquiuria, dolor suprapúbico, pero sin fiebre. La tratas igual, ambulatorio.' },
        ] },
        { title: 'Control', tag: 'Siempre se confirma', kind: 'key', items: [
          { t: 'Urocultivo de control', d: 'A los siete a catorce días de terminado el tratamiento',
            say: 'Y en los dos casos, tienes que pedir un urocultivo de control, a los siete a catorce días de terminado el tratamiento, para confirmar que la erradicaste.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Pielonefritis aguda',
      title: 'Cuando la infección sube al riñón',
      nodes: [
        { id: 'fie', col: 0, row: 0, k: 'risk', t: 'Fiebre alta y calofríos', s: 'Sobre treinta y ocho y medio' },
        { id: 'ppl', col: 0, row: 1, k: 'risk', t: 'Puñopercusión positiva', s: 'Más frecuente a la derecha' },
        { id: 'hos', col: 1, row: 1, k: 'alert', t: 'Hospitalización obligatoria', s: 'A toda embarazada, sin excepción' },
        { id: 'ev', col: 2, row: 1, k: 'good', t: 'Ceftriaxona o cefazolina endovenosa', s: 'Hasta cuarenta y ocho horas afebril' },
        { id: 'or', col: 3, row: 1, k: 'good', t: 'Luego cefadroxilo oral', s: 'Hasta completar catorce días' },
        { id: 'ries', col: 1, row: 3, k: 'trap', t: 'Sepsis y SDRA', s: 'Y parto prematuro' },
      ],
      edges: [
        { from: 'fie', to: 'hos' }, { from: 'ppl', to: 'hos' },
        { from: 'hos', to: 'ev' }, { from: 'ev', to: 'or' },
        { from: 'hos', to: 'ries', label: 'si no se trata a tiempo' },
      ],
      steps: [
        { show: ['fie'], note: 'Fiebre alta, no un febrículo',
          say: 'Ahora subamos un piso: la pielonefritis aguda. La clínica cambia por completo. Aquí sí hay fiebre alta, con calofríos intensos.' },
        { show: ['ppl'], note: 'Puñopercusión: el signo que confirma el riñón',
          say: 'Y se suma el dolor lumbar, con puñopercusión positiva, más frecuente a la derecha, justo por lo que vimos al principio: el útero rotado comprime más ese lado.' },
        { show: ['hos'], note: 'No hay pielonefritis ambulatoria en el embarazo',
          say: 'Y aquí no hay ninguna duda: toda embarazada con pielonefritis se hospitaliza. No existe la pielonefritis ambulatoria en el embarazo.' },
        { show: ['ev'], note: 'Endovenoso hasta que esté bien, no un número fijo de días',
          say: 'El tratamiento parte endovenoso, con ceftriaxona o cefazolina, y lo mantienes hasta que la paciente lleve cuarenta y ocho horas sin fiebre.' },
        { show: ['or'], note: 'Después pasa a la casa con antibiótico oral',
          say: 'Recién ahí pasas a cefadroxilo oral, hasta completar catorce días en total.' },
        { show: ['ries'], note: 'Por eso no se puede tratar en la casa',
          say: 'Y esto no es solo protocolo: si no la hospitalizas, el riesgo es sepsis, una falla respiratoria grave, y desencadenar un parto prematuro. Por eso la hospitalización no se discute.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Después del episodio',
      title: 'Quién queda con profilaxis',
      cards: [
        { title: 'Profilaxis nocturna', tag: 'Hasta el parto', kind: 'pharma', items: [
          { t: 'Post pielonefritis', d: 'O dos o más episodios de infección urinaria',
            say: 'Y hay un paso final que se te puede olvidar. Toda paciente que tuvo una pielonefritis, o que acumula dos o más episodios de infección urinaria en el embarazo, queda con profilaxis.' },
          { t: 'Cefadroxilo o nitrofurantoína', d: 'Una dosis nocturna hasta el parto',
            say: 'Se deja una dosis nocturna de cefadroxilo o nitrofurantoína, todas las noches, hasta que nazca. Así evitas que se repita.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Bacteriuria, cistitis y pielonefritis, lado a lado',
      head: ['Cuadro', 'Clínica', 'Conducta'],
      rows: [
        { cells: ['Bacteriuria asintomática', 'Sin síntomas, más de cien mil UFC', 'Cefadroxilo siete días, siempre'],
          say: 'Repasemos en la tabla. Bacteriuria asintomática: sin síntomas, urocultivo con más de cien mil colonias. Se trata siempre con cefadroxilo por siete días.' },
        { cells: ['Cistitis aguda', 'Disuria, sin fiebre', 'Igual, ambulatorio'],
          say: 'Cistitis aguda: disuria, sin fiebre. El manejo es igual, ambulatorio.' },
        { cells: ['Pielonefritis aguda', 'Fiebre y puñopercusión positiva', 'Hospitalizar, antibiótico endovenoso'],
          say: 'Pielonefritis aguda: fiebre alta y puñopercusión positiva. Aquí se hospitaliza siempre, y el antibiótico parte endovenoso.' },
        { cells: ['Menos de cien mil UFC, sin síntomas', 'No es bacteriuria asintomática', 'No tratar, repetir el urocultivo'],
          say: 'Y la trampa más común: si el urocultivo tiene menos de cien mil colonias y la paciente no tiene síntomas, no es bacteriuria asintomática. No tratas; repites el urocultivo más adelante.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Embarazada de 18 semanas, sin ninguna molestia urinaria, trae el urocultivo de rutina de su control prenatal: 120.000 UFC por mililitro de Escherichia coli, sensible a cefadroxilo y nitrofurantoína.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'No tratar, porque está asintomática' },
        { letter: 'B', text: 'Indicar cefadroxilo oral por 7 días y urocultivo de control a las 1–2 semanas' },
        { letter: 'C', text: 'Hospitalizar para tratamiento endovenoso' },
        { letter: 'D', text: 'Indicar solo aumentar la ingesta de agua y controlar en un mes' },
        { letter: 'E', text: 'Repetir el urocultivo en 4 semanas, sin tratar por ahora' },
      ],
      correct: 'B',
      explanation: 'Más de cien mil colonias de un solo germen, sin síntomas: bacteriuria asintomática. En el embarazo se trata siempre, con cefadroxilo oral por 7 días, y se confirma la erradicación con un urocultivo de control a los 7–14 días.',
      say: {
        stem: 'Vamos con un caso. Embarazada de dieciocho semanas, sin ninguna molestia urinaria, trae su urocultivo de control prenatal: ciento veinte mil colonias de Escherichia coli, sensible a cefadroxilo y nitrofurantoína.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tus opciones: no tratar porque está asintomática, indicar cefadroxilo por siete días con control posterior, hospitalizar para tratamiento endovenoso, solo indicar tomar más agua, o repetir el urocultivo en un mes sin tratar. Piénsalo.',
        answer: 'Es la B. Tiene más de cien mil colonias, sin ningún síntoma: es bacteriuria asintomática. Y aquí no vale el reflejo de "está asintomática, no se trata", que sí aplicaría en cualquier otra paciente. En el embarazo la tratas siempre, con cefadroxilo por siete días, y confirmas con un urocultivo de control. La hospitalización es para la pielonefritis, no para esto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 147',
      stem: 'Mujer de 23 años, cursando un embarazo de 20 semanas, sin complicaciones, se realiza un urocultivo, que resulta positivo para Escherichia coli multisensible, 60.000 UFC por mililitro.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Repetir el urocultivo en 2 semanas' },
        { letter: 'B', text: 'Iniciar cefradina vía oral' },
        { letter: 'C', text: 'Iniciar ciprofloxacino vía oral' },
        { letter: 'D', text: 'Solicitar ecografía' },
        { letter: 'E', text: 'Iniciar ceftriaxona endovenosa' },
      ],
      correct: 'A',
      explanation: 'El corte para bacteriuria asintomática es cien mil colonias por mililitro; con sesenta mil, el urocultivo no la confirma. La conducta es repetirlo, no tratar todavía.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Mujer de veintitrés años, con un embarazo de veinte semanas sin complicaciones, se hace un urocultivo que resulta positivo para Escherichia coli multisensible, con sesenta mil colonias por mililitro.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: repetir el urocultivo en dos semanas, iniciar cefradina oral, iniciar ciprofloxacino oral, pedir una ecografía, o iniciar ceftriaxona endovenosa. Piénsalo.',
        answer: 'Es la A. Este caso está armado para que confundas el número. El corte para diagnosticar bacteriuria asintomática es cien mil colonias, y aquí solo hay sesenta mil: no cumple el criterio. Por eso no inicias ningún antibiótico todavía; repites el urocultivo. Y la ceftriaxona endovenosa sería para una pielonefritis, que ni siquiera está en el enunciado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 137',
      stem: 'Paciente de 23 años, cursando un embarazo de 7 semanas, presenta un cuadro de disuria y polaquiuria, por lo que se realiza un urocultivo, que resulta positivo para Escherichia coli sensible, con más de 100.000 UFC.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Cotrimoxazol' },
        { letter: 'B', text: 'Flucloxacilina' },
        { letter: 'C', text: 'Nitrofurantoína' },
        { letter: 'D', text: 'Levofloxacino' },
        { letter: 'E', text: 'Ciprofloxacino' },
      ],
      correct: 'C',
      explanation: 'Cistitis en el primer trimestre: la nitrofurantoína es segura y de elección aquí; se evita solo entre las semanas 36 y 40. El cotrimoxazol se evita cerca del término, y las fluoroquinolonas están contraindicadas en todo el embarazo.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil dieciséis. Paciente de veintitrés años, con un embarazo de siete semanas, con disuria y polaquiuria. El urocultivo resulta positivo para Escherichia coli sensible, con más de cien mil colonias.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: cotrimoxazol, flucloxacilina, nitrofurantoína, levofloxacino, o ciprofloxacino. Piénsalo.',
        answer: 'Es la C, nitrofurantoína. Fíjate en la semana: son siete, muy lejos de la ventana que hay que evitar, que es entre las treinta y seis y las cuarenta. Las fluoroquinolonas, ciprofloxacino y levofloxacino, están contraindicadas en todo el embarazo, y el cotrimoxazol se evita cerca del parto por el riesgo de kernicterus en el recién nacido.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 8',
      stem: 'Paciente de 28 años, cursando un embarazo de 18 semanas, consulta por fiebre, malestar general, náuseas, disuria dolorosa y dolor lumbar derecho. Tiene fiebre de 38,9 grados, frecuencia cardíaca de noventa y cinco por minuto, y puñopercusión positiva a derecha. El sedimento de orina muestra abundantes bacterias y leucocitos, con el urocultivo pendiente. Las pruebas de bienestar fetal son normales.',
      question: '¿Qué tratamiento antibiótico es el más adecuado?',
      options: [
        { letter: 'A', text: 'Ciprofloxacino' },
        { letter: 'B', text: 'Nitrofurantoína' },
        { letter: 'C', text: 'Amoxicilina más ácido clavulánico' },
        { letter: 'D', text: 'Ceftriaxona' },
        { letter: 'E', text: 'Ampicilina' },
      ],
      correct: 'D',
      explanation: 'Fiebre alta con puñopercusión positiva en el embarazo es pielonefritis aguda: se hospitaliza y se trata con cefalosporina endovenosa, ceftriaxona o cefazolina. La nitrofurantoína solo sirve para infección urinaria baja, y el ciprofloxacino está contraindicado.',
      say: {
        stem: 'Y una más, del EUNACOM de julio de dos mil veinticuatro. Paciente de veintiocho años, con un embarazo de dieciocho semanas, con fiebre de treinta y ocho coma nueve, malestar general, náuseas, disuria y dolor lumbar derecho. La frecuencia cardíaca es de noventa y cinco, la puñopercusión derecha es positiva, y el sedimento de orina muestra abundantes bacterias y leucocitos. El bienestar fetal está normal.',
        question: '¿Qué tratamiento antibiótico es el más adecuado?',
        options: 'Las opciones: ciprofloxacino, nitrofurantoína, amoxicilina con ácido clavulánico, ceftriaxona, o ampicilina. Piénsalo.',
        answer: 'Es la D, ceftriaxona. Fiebre alta más puñopercusión positiva es pielonefritis, y eso significa hospitalizar con antibiótico endovenoso, no oral. La nitrofurantoína está descartada porque no cubre bien la vía urinaria alta. Y el ciprofloxacino, otra vez, está contraindicado en el embarazo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'El número que manda', kind: 'key', items: [
          { t: 'Más de cien mil UFC, sin síntomas', d: 'Bacteriuria asintomática: se trata siempre',
            say: 'Cerremos con las reglas de oro. Más de cien mil colonias, sin síntomas, en la embarazada, se trata siempre. Ese "siempre" es lo que la diferencia de cualquier otra paciente.' },
        ] },
        { title: 'Tratamiento', tag: 'Ambulatorio vs hospital', kind: 'pharma', items: [
          { t: 'Bacteriuria y cistitis: cefadroxilo', d: 'Ambulatorio, por siete días',
            say: 'La bacteriuria y la cistitis se tratan igual, ambulatorio, con cefadroxilo por siete días.' },
          { t: 'Pielonefritis: hospitalizar', d: 'Antibiótico endovenoso hasta las cuarenta y ocho horas afebril',
            say: 'La pielonefritis se hospitaliza siempre, con antibiótico endovenoso hasta que lleve cuarenta y ocho horas sin fiebre, y luego completa catorce días con antibiótico oral.' },
        ] },
        { title: 'Después', tag: 'Profilaxis', kind: 'alert', items: [
          { t: 'Post pielonefritis o dos episodios', d: 'Profilaxis nocturna hasta el parto',
            say: 'Y toda paciente que tuvo pielonefritis, o dos o más infecciones urinarias, queda con profilaxis nocturna hasta el parto. Si te llevas una sola idea de hoy: en el embarazo, tratas incluso lo que no da síntomas. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Infección urinaria en el embarazo: qué se trata y dónde',
    root: N('start', 'Urocultivo positivo o síntomas urinarios', 'Embarazada en control prenatal',
      'Toda embarazada con urocultivo alterado o síntomas urinarios entra aquí. La pregunta clave no es si tratar: en el embarazo casi siempre tratas. La pregunta es dónde.',
      ['', N('q', '¿Fiebre y puñopercusión positiva?', 'Eso separa lo alto de lo bajo',
        'Pregúntate una sola cosa: ¿hay fiebre alta y puñopercusión positiva?',
        ['NO, sin síntomas', N('q', '¿Más de cien mil UFC?', 'Define la bacteriuria asintomática',
          '¿El urocultivo tiene más de cien mil colonias de un solo germen?',
          ['SÍ', N('ok', 'Bacteriuria asintomática', 'Cefadroxilo 7 días + control',
            'Se trata siempre, con cefadroxilo por siete días, y urocultivo de control a los siete a catorce días.')],
          ['NO', N('do', 'No tratar todavía', 'Repetir el urocultivo',
            'No cumple el corte diagnóstico: repites el urocultivo, sin iniciar antibiótico.')])],
        ['NO, con disuria', N('ok', 'Cistitis aguda', 'Cefadroxilo 7 días, ambulatorio',
          'Síntomas bajos, sin fiebre: se trata igual, ambulatorio, con cefadroxilo por siete días.')],
        ['SÍ', N('alert', 'Pielonefritis aguda', 'Hospitalizar + antibiótico endovenoso',
          'Fiebre alta y puñopercusión positiva: hospitalización obligatoria, con ceftriaxona o cefazolina endovenosa hasta cuarenta y ocho horas afebril, y luego cefadroxilo oral hasta completar catorce días. Si tuvo pielonefritis o dos o más episodios, queda con profilaxis nocturna hasta el parto.')])]),
  },
};
