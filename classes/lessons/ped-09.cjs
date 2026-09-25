// Clase ped-09 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria_bloque_3.cjs (ped-09).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-09',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo hospitalizas y cuándo esperas: la edad decide todo en la fiebre sin foco',
      say: 'Bienvenido. Hoy vemos al lactante con fiebre sin foco, uno de los temas que más se pregunta en pediatría. Vas a aprender algo que te va a servir para siempre: en este tema, la edad manda. La misma fiebre significa cosas muy distintas según si el paciente tiene días o meses, y esa sola pregunta ordena todo lo que viene: qué exámenes pedir, si hospitalizas o si mandas a la casa, y qué antibiótico usar. Empecemos.',
    },

    {
      type: 'flow',
      kicker: 'Por qué asusta la fiebre en el lactante pequeño',
      title: '¿Por qué la edad cambia todo el riesgo?',
      nodes: [
        { id: 'inm', col: 0, row: 0, k: 'cause', t: 'Sistema inmune inmaduro', s: 'Se defiende peor que un niño mayor' },
        { id: 'sig', col: 0, row: 1, k: 'cause', t: 'Sin signos claros', s: 'No hace meningismo ni foco visible' },
        { id: 'ibg', col: 1, row: 1, k: 'mech', t: 'Riesgo de infección bacteriana grave', s: 'Bacteriemia, meningitis, ITU, neumonía' },
        { id: 'neo', col: 2, row: 0, k: 'risk', t: 'Menor de 28 días', s: 'El grupo de mayor riesgo' },
        { id: 'lac', col: 2, row: 1, k: 'risk', t: '29 a 90 días', s: 'Riesgo intermedio, se mide' },
        { id: 'may', col: 2, row: 2, k: 'good', t: 'Más de 3 meses', s: 'Casi siempre es un virus' },
      ],
      edges: [
        { from: 'inm', to: 'ibg' }, { from: 'sig', to: 'ibg' },
        { from: 'ibg', to: 'neo', label: 'máximo riesgo' }, { from: 'ibg', to: 'lac' }, { from: 'ibg', to: 'may', label: 'menor riesgo' },
      ],
      steps: [
        { show: ['inm'], note: 'La defensa todavía no está lista',
          say: 'Fíjate primero en el mecanismo. El sistema inmune de un recién nacido todavía no está entrenado, así que se defiende peor que el de un niño mayor frente a la misma bacteria.' },
        { show: ['sig'], note: 'El cuerpo no avisa con claridad',
          say: 'Y encima, el cuerpo de un lactante pequeño no te avisa con claridad: puede tener una meningitis y no hacer rigidez de nuca, o una infección urinaria y no tener ningún síntoma que la delate.' },
        { show: ['ibg'], note: 'Lo que temes es la infección bacteriana grave',
          say: 'Por eso, cuando ves a un lactante con fiebre y sin foco, lo que estás descartando es una infección bacteriana grave: bacteriemia, meningitis, infección urinaria o neumonía.' },
        { show: ['neo'], note: 'Aquí no se negocia nada',
          say: 'Y aquí viene la idea central de la clase: ese riesgo no es igual a cualquier edad. Antes de los veintiocho días, el riesgo es tan alto que la conducta no se discute.' },
        { show: ['lac'], note: 'Entre veintinueve y noventa días, se puede medir',
          say: 'Entre los veintinueve y los noventa días, el riesgo baja, y además se puede medir con criterios clínicos y de laboratorio. Ese es el tramo que más se pregunta, y lo vemos enseguida.' },
        { show: ['may'], note: 'Después de los tres meses, casi siempre es viral',
          say: 'Y después de los tres meses, si el niño se ve bien, casi siempre es un virus. Ahí lo que tienes que cazar es una sola cosa escondida, que también vemos más adelante.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Los culpables según la edad',
      title: '¿Qué bacteria buscas en cada grupo?',
      cards: [
        { title: 'En el recién nacido', tag: 'Los tres clásicos', kind: 'criteria', items: [
          { t: 'Estreptococo del grupo B', d: 'Lo adquiere en el canal del parto',
            say: 'Antes de ver la conducta, fíjate en quién causa esto, porque también cambia con la edad. En el recién nacido, el culpable más frecuente es el estreptococo del grupo B, que adquiere durante el parto.' },
          { t: 'E. coli y Listeria', d: 'Los otros dos clásicos del neonato',
            say: 'Y junto a él, la E. coli y la Listeria. Estos tres son los que cubre el esquema de ampicilina más cefotaxima que ya vamos a ver.' },
        ] },
        { title: 'Entre 1 y 3 meses', tag: 'Se suman dos más', kind: 'criteria', items: [
          { t: 'Neumococo y meningococo', d: 'Se agregan a los tres anteriores',
            say: 'Entre uno y tres meses, se agregan dos actores nuevos: el neumococo y el meningococo. Guarda este dato, porque explica por qué el esquema antibiótico cambia un poco en este grupo si el paciente se hospitaliza.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Grupo 1: el neonato',
      title: 'Menor de 28 días: no hay margen',
      cards: [
        { title: 'Conducta', tag: 'Siempre la misma', kind: 'alert', items: [
          { t: 'Hospitalizar siempre', d: 'Aunque lo veas tranquilo y mamando bien',
            say: 'Empecemos por el grupo de mayor riesgo. Si tienes un recién nacido de menos de veintiocho días con fiebre, se hospitaliza siempre, aunque lo veas tranquilo, reactivo y mamando bien.' },
          { t: 'Ningún examen normal cambia esto', d: 'El buen aspecto no descarta nada',
            say: 'Y ojo con la trampa: ningún examen normal ni el buen aspecto clínico te autorizan a mandarlo a la casa. En este grupo no existe el manejo ambulatorio.' },
        ] },
        { title: 'Estudio completo', tag: 'Sepsis workup', kind: 'key', items: [
          { t: 'Hemograma y hemocultivos', d: 'Más orina por sondeo y punción lumbar',
            say: 'Le pides el estudio completo: hemograma, hemocultivos, orina obtenida por sondeo vesical, y punción lumbar para ver el líquido cefalorraquídeo.' },
          { t: 'Radiografía si hay síntomas', d: 'Solo si tiene signos respiratorios',
            say: 'La radiografía de tórax la agregas solo si tiene síntomas respiratorios.' },
        ] },
        { title: 'Tratamiento empírico', tag: 'Endovenoso de inmediato', kind: 'pharma', items: [
          { t: 'Ampicilina más cefotaxima', d: 'Cubre listeria, estreptococo y E. coli',
            say: 'Y partes los antibióticos de inmediato, por vía endovenosa: ampicilina más cefotaxima. Esa combinación cubre a la listeria, al estreptococo del grupo B y a la E. coli, que son los culpables típicos de esta edad.' },
          { t: 'Nunca ceftriaxona', d: 'Desplaza la bilirrubina y da kernicterus',
            say: 'Y guarda este dato para el examen: nunca ceftriaxona en el recién nacido, porque desplaza la bilirrubina de su transportador y puede producir kernicterus.' },
          { t: 'Reevaluar a las 48 horas', d: 'Con los resultados del urocultivo y el LCR',
            say: 'Y no basta con partir el tratamiento: a las cuarenta y ocho horas reevalúas con los resultados del urocultivo y del líquido cefalorraquídeo, y ajustas según lo que encuentres.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Grupo 2: 29 a 90 días',
      title: 'Los criterios de Rochester deciden',
      nodes: [
        { id: 'lac2', col: 0, row: 1, k: 'start', t: 'Lactante de 29 a 90 días', s: 'Aquí ya se puede medir el riesgo' },
        { id: 'cri', col: 1, row: 1, k: 'q', t: '¿Cumple todos los criterios?', s: 'Clínicos y de laboratorio' },
        { id: 'baj', col: 2, row: 0, k: 'good', t: 'Cumple todos', s: 'Bajo riesgo, menos del uno por ciento' },
        { id: 'alt', col: 2, row: 2, k: 'alert', t: 'Falla uno solo', s: 'Alto riesgo, se hospitaliza' },
      ],
      edges: [
        { from: 'lac2', to: 'cri' },
        { from: 'cri', to: 'baj', label: 'cumple todo' }, { from: 'cri', to: 'alt', label: 'falla uno' },
      ],
      steps: [
        { show: ['lac2'], note: 'Ya no se hospitaliza a todos por igual',
          say: 'Pasemos al tramo que más se pregunta: de veintinueve a noventa días. Aquí ya no hospitalizas a todos por igual, porque el riesgo se puede medir con los criterios de Rochester.' },
        { show: ['cri'], note: 'Todo o nada: un solo criterio alterado basta',
          say: 'Y aquí está la clave de toda esta parte: tiene que cumplir absolutamente todos los criterios, o no sirve. Si falla uno solo, ya no es de bajo riesgo. Veamos los dos grupos de criterios con calma.' },
        { show: ['baj'], note: 'Ambulatorio, pero con control obligatorio',
          say: 'Si cumple absolutamente todo, el manejo es ambulatorio: antipiréticos y un control presencial obligatorio a las veinticuatro horas. No es un alta sin más: es un alta vigilada.' },
        { show: ['alt'], note: 'Se trata igual que al neonato',
          say: 'Pero si falla un solo criterio, se hospitaliza y se estudia igual que al grupo de mayor riesgo: punción lumbar, hemocultivos, orina por sondeo, y antibióticos empíricos. Esa diferencia, todo o nada, es justo lo que más te van a preguntar.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios de Rochester',
      title: 'Lo clínico y lo de laboratorio, en detalle',
      cards: [
        { title: 'Criterios clínicos', tag: 'Se evalúan al examinarlo', kind: 'criteria', items: [
          { t: 'Buen estado, alerta y consolable', d: 'Nacido de término, sin hospitalizaciones previas',
            say: 'Del lado clínico, tienes que verlo alerta, reactivo y que se consuele al tomarlo en brazos. Además, tiene que haber nacido de término y no haber estado hospitalizado ni haber recibido antibióticos antes.' },
          { t: 'Sin foco al examinarlo', d: 'Nada en piel, oídos ni articulaciones',
            say: 'Y al examinarlo, no puede tener ningún foco visible: ni en la piel, ni en el oído, ni en una articulación. Si hay algo de esto, ya sabes de dónde viene la fiebre y dejas de aplicar Rochester.' },
        ] },
        { title: 'Criterios de laboratorio', tag: 'Se piden con exámenes', kind: 'criteria', items: [
          { t: 'Glóbulos blancos entre 5.000 y 15.000', d: 'Y formas inmaduras bajas en la sangre',
            say: 'Del lado del laboratorio, le pides un hemograma: los glóbulos blancos tienen que estar entre cinco mil y quince mil, y las formas inmaduras, los baciliformes, tienen que ser pocas.' },
          { t: 'Orina con pocos glóbulos blancos', d: 'Menos de diez por campo, sin bacterias',
            say: 'Y la orina tiene que mostrar pocos glóbulos blancos por campo. Ahora sí, con estos dos grupos completos, vuelve al árbol: si falla cualquiera de ellos, se trata como alto riesgo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Grupo 3: mayor de 3 meses',
      title: 'Buen estado general: casi siempre es un virus',
      cards: [
        { title: 'La causa que buscas', tag: 'Infección urinaria', kind: 'key', items: [
          { t: 'La causa oculta más frecuente', d: 'La infección urinaria, por lejos',
            say: 'Pasado los tres meses, si el niño se ve bien, la inmensa mayoría de estas fiebres son virosis autolimitadas. Pero hay una causa bacteriana que se esconde y que tienes que buscar siempre: la infección urinaria.' },
          { t: 'Orina y urocultivo por sondeo', d: 'Es el examen de mayor rendimiento',
            say: 'El examen que más rinde es la orina completa y el urocultivo, tomados por sondeo vesical, sobre todo en niñas menores de dos años y en niños no circuncidados con fiebre alta y persistente.' },
        ] },
        { title: 'Antipirético', tag: 'Fármaco de elección', kind: 'pharma', items: [
          { t: 'Paracetamol es la primera opción', d: 'Quince miligramos por kilo, por dosis',
            say: 'Y para el manejo sintomático, el paracetamol es tu primera opción, a quince miligramos por kilo por dosis.' },
          { t: 'No ibuprofeno bajo los 6 meses', d: 'Aumenta el riesgo en el lactante pequeño',
            say: 'Y evita el ibuprofeno antes de los seis meses de vida: en ese grupo aumenta el riesgo de complicaciones.' },
        ] },
        { title: 'Cuándo reconsultar', tag: 'Pautas para la familia', kind: 'alert', items: [
          { t: 'Fiebre que persiste días', d: 'O que no cede con el antipirético',
            say: 'Y antes de mandarlo a la casa, dale pautas claras a la familia. Si la fiebre persiste varios días o no cede con el paracetamol, tiene que volver a control.' },
          { t: 'Decaimiento o mal aspecto', d: 'Ese cambio te obliga a reevaluar todo',
            say: 'Y si en cualquier momento lo ves decaído o con mal aspecto, eso cambia el panorama por completo y tienes que reevaluarlo de nuevo, aunque antes se haya visto bien.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos las tres edades en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en fiebre sin foco',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Neonato con buen aspecto', 'Hospitalizar y estudio completo igual', 'Confiarse del buen aspecto clínico'],
          say: 'Repasemos las trampas. Un recién nacido con fiebre y buen aspecto: igual se hospitaliza y se estudia completo. El error es confiarse de que se ve tranquilo.' },
        { cells: ['29 a 90 días con un criterio alterado', 'Hospitalizar como alto riesgo', 'Mandarlo a la casa porque se ve bien'],
          say: 'Un lactante de veintinueve a noventa días con un solo criterio alterado: se hospitaliza igual que el de alto riesgo. El error clásico es mandarlo a la casa porque el aspecto engaña.' },
        { cells: ['Fiebre después de los 3 meses', 'Orina completa y urocultivo por sondeo', 'Pedir solo hemograma y esperar'],
          say: 'Pasados los tres meses, sin foco: orina completa y urocultivo por sondeo. El error es pedir solo un hemograma y quedarse esperando.' },
        { cells: ['Fiebre en el recién nacido', 'Ampicilina más cefotaxima endovenosa', 'Indicar ceftriaxona'],
          say: 'Y en el recién nacido, el esquema es ampicilina más cefotaxima. La ceftriaxona es la trampa, porque en esta edad puede desplazar la bilirrubina.' },
        { cells: ['Lactante menor de 6 meses con fiebre', 'Paracetamol como antipirético', 'Indicar ibuprofeno'],
          say: 'Y una última trampa, más simple pero muy preguntada: en un lactante menor de seis meses, el antipirético es paracetamol. Indicar ibuprofeno en ese rango de edad es un error clásico.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 50 días de vida, con fiebre de 38,6 °C constatada en el hogar. Al examen se ve alerta, reactivo y sin foco infeccioso. El hemograma muestra 17.200 leucocitos/mm³ con 12% de baciliformes. El sedimento de orina es normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Manejo ambulatorio con paracetamol y control en 24 horas' },
        { letter: 'B', text: 'Hospitalizar, completar el estudio e iniciar antibióticos empíricos' },
        { letter: 'C', text: 'Dar de alta porque el examen físico y la orina son normales' },
        { letter: 'D', text: 'Iniciar amoxicilina oral ambulatoria y repetir el hemograma en 48 horas' },
        { letter: 'E', text: 'Solicitar solo una radiografía de tórax antes de decidir' },
      ],
      correct: 'B',
      explanation: 'El paciente tiene 50 días, el rango de Rochester, pero falla el criterio de laboratorio (leucocitos y baciliformes elevados), aunque el examen físico y la orina sean normales. Un solo criterio alterado saca al paciente del grupo de bajo riesgo: se hospitaliza, se completa el estudio (incluida la punción lumbar) y se inician antibióticos empíricos.',
      say: {
        stem: 'Vamos con un caso. Lactante de cincuenta días, con fiebre de treinta y ocho coma seis. Al examen está alerta, reactivo y sin foco. El hemograma muestra diecisiete mil doscientos leucocitos, con doce por ciento de baciliformes. El sedimento de orina es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: manejo ambulatorio con control en veinticuatro horas, hospitalizar y completar el estudio, dar de alta porque el examen y la orina son normales, amoxicilina oral ambulatoria, o solo una radiografía de tórax. Piénsalo.',
        answer: 'La respuesta es la B. Este caso está armado para que confíes en el buen aspecto clínico y en la orina normal, pero fíjate en el hemograma: los leucocitos y los baciliformes están fuera del rango de bajo riesgo. Y recuerda la regla: basta que falle un solo criterio de Rochester para que este paciente se trate como de alto riesgo, con hospitalización, estudio completo y antibióticos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 99',
      stem: 'Recién nacido de 10 días de vida, sin antecedentes perinatales, inicia desde hace 5 horas cuadro de fiebre hasta 39 ºC asociada a rechazo alimentario e hiporreactividad, sin otros síntomas. Su examen físico resulta normal. La bioquímica de orina muestra leucocitos ++.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar sedimento de orina y decidir conducta según resultados' },
        { letter: 'B', text: 'Hospitalizar para estudio y manejo' },
        { letter: 'C', text: 'Indicar antipiréticos orales y control en dos días' },
        { letter: 'D', text: 'Indicar antibióticos vía oral y control en dos días' },
        { letter: 'E', text: 'Solicitar ecografía renal y vesical' },
      ],
      correct: 'B',
      explanation: 'Recién nacido menor de 28 días con fiebre y rechazo alimentario: se hospitaliza siempre para estudio séptico completo y manejo, independiente de que existan hallazgos aislados como los leucocitos en orina.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil trece. Recién nacido de diez días, sin antecedentes, con fiebre hasta treinta y nueve grados desde hace cinco horas, rechazo alimentario e hiporreactividad. El examen físico es normal, y la orina muestra leucocitos aumentados.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: pedir sedimento de orina y decidir según el resultado, hospitalizar para estudio y manejo, antipiréticos con control en dos días, antibióticos orales con control en dos días, o pedir una ecografía renal. Piénsalo.',
        answer: 'Es la B. Este recién nacido tiene diez días: está en el grupo de máximo riesgo, y ahí no se negocia. Se hospitaliza para estudio séptico completo, incluida la punción lumbar, y se inician antibióticos endovenosos. Esperar el sedimento de orina, dar antibióticos orales o solo controlar en dos días retrasaría el tratamiento de una posible sepsis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 137',
      stem: 'Lactante de 3 meses con fiebre de 39 °C, rigidez de nuca, fontanela abombada y letargia.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Hospitalizar, realizar punción lumbar e iniciar antibióticos empíricos endovenosos (ampicilina más cefotaxima)' },
        { letter: 'B', text: 'Indicar antibióticos orales y control en 24 horas' },
        { letter: 'C', text: 'Solo antipiréticos y observación domiciliaria' },
        { letter: 'D', text: 'Solicitar una tomografía computada antes de la punción lumbar' },
        { letter: 'E', text: 'Dar de alta con indicaciones a los padres' },
      ],
      correct: 'A',
      explanation: 'Fontanela abombada, rigidez de nuca y letargia son signos de alarma que sacan a este lactante de cualquier criterio de bajo riesgo: se trata como meningitis bacteriana hasta demostrar lo contrario, con hospitalización, punción lumbar y antibióticos empíricos inmediatos.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil veinticinco. Lactante de tres meses, con fiebre de treinta y nueve grados, rigidez de nuca, fontanela abombada y letárgico.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: hospitalizar con punción lumbar y antibióticos empíricos, antibióticos orales con control en veinticuatro horas, solo antipiréticos y observación, pedir una tomografía antes de la punción lumbar, o dar de alta. Piénsalo.',
        answer: 'Es la A. Aquí ni siquiera necesitas calcular Rochester: la fontanela abombada, la rigidez de nuca y la letargia son signos de alarma que por sí solos te obligan a hospitalizar, hacer la punción lumbar e iniciar ampicilina más cefotaxima de inmediato. Pedir una tomografía antes solo retrasa el tratamiento de una meningitis bacteriana.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La edad manda', tag: 'Tres grupos', kind: 'key', items: [
          { t: 'Menor de 28 días', d: 'Siempre hospitalizar y estudio completo',
            say: 'Cerremos con las reglas de oro. Menor de veintiocho días: siempre se hospitaliza y se estudia completo, sin excepción.' },
          { t: '29 a 90 días', d: 'Rochester decide, y es todo o nada',
            say: 'De veintinueve a noventa días, deciden los criterios de Rochester, y son todo o nada: un solo criterio alterado saca al paciente del bajo riesgo.' },
        ] },
        { title: 'Tratamiento', tag: 'En el neonato', kind: 'pharma', items: [
          { t: 'Ampicilina más cefotaxima', d: 'Nunca ceftriaxona por el kernicterus',
            say: 'El esquema del neonato es ampicilina más cefotaxima, y nunca ceftriaxona, por el riesgo de kernicterus.' },
        ] },
        { title: 'Mayor de 3 meses', tag: 'Buscar la ITU', kind: 'alert', items: [
          { t: 'La orina es la clave', d: 'Sondeo vesical, no bolsa recolectora',
            say: 'Y pasados los tres meses, con buen estado general, la clave es la orina, tomada por sondeo y no por bolsa recolectora. Si te llevas una sola idea de hoy: en fiebre sin foco, la edad decide la conducta antes que cualquier examen. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Fiebre sin foco: la edad decide la conducta',
    root: N('start', 'Lactante con fiebre sin foco', 'Sin causa clara al examinarlo',
      'Tienes un lactante con fiebre y no encuentras un foco al examinarlo. Antes de pedir cualquier examen, pregúntate una sola cosa: cuántos días o meses tiene.',
      ['', N('q', '¿Qué edad tiene?', 'La edad decide todo',
        'Esa pregunta ordena toda la conducta: menor de veintiocho días, entre veintinueve y noventa, o mayor de tres meses.',
        ['Menor de 28 días', N('alert', 'Hospitalizar y estudio completo', 'Ampicilina más cefotaxima endovenosa',
          'Aquí no hay margen: hospitalización, punción lumbar, hemocultivos, orina por sondeo, y ampicilina más cefotaxima de inmediato.')],
        ['29 a 90 días', N('q', '¿Cumple todos los criterios de Rochester?', 'Clínicos y de laboratorio',
          'Revisa el buen estado, la orina y el hemograma. Tiene que cumplir absolutamente todo.',
          ['Sí, cumple todo', N('ok', 'Manejo ambulatorio', 'Control presencial obligatorio a las 24 horas',
            'Antipiréticos y control presencial a las veinticuatro horas: es un alta vigilada, no un alta sin más.')],
          ['No, falla uno', N('alert', 'Hospitalizar como alto riesgo', 'Igual manejo que el neonato',
            'Un solo criterio alterado basta para tratarlo igual que al recién nacido: estudio completo y antibióticos empíricos.')])],
        ['Más de 3 meses, buen estado', N('do', 'Buscar la infección urinaria', 'Orina y urocultivo por sondeo vesical',
          'Casi siempre es un virus, pero la causa bacteriana que se esconde es la infección urinaria: pide orina y urocultivo por sondeo, sobre todo en niñas menores de dos años y en niños no circuncidados con fiebre alta y persistente.')])]),
  },
};
