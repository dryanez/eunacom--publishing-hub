// Clase 6.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-26).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-26',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cerrado, arma blanca o arma de fuego: el mecanismo decide la conducta',
      say: 'Bienvenidos. Hoy cerramos el bloque con trauma abdominal y torácico. No ha salido en los exámenes de los últimos años, pero es foco prioritario del nuevo perfil EUNACOM, y se resuelve con una sola regla: el mecanismo manda. Trauma cerrado, arma blanca o arma de fuego: cada uno tiene su herramienta de evaluación y su indicación de cirugía.',
    },

    {
      type: 'flow',
      kicker: 'Trauma abdominal cerrado',
      title: 'Clínica + eco-FAST: ¿observar u operar?',
      nodes: [
        { id: 'tra', col: 0, row: 1, k: 'start', t: 'Trauma abdominal cerrado', s: 'Choque, caída, golpe' },
        { id: 'fas', col: 1, row: 1, k: 'q', t: 'Clínica + eco-FAST', s: 'Busca líquido libre' },
        { id: 'est', col: 2, row: 0, k: 'good', t: 'Estable, FAST (−), sin peritonismo', s: 'Observación' },
        { id: 'tac', col: 3, row: 0, k: 'mech', t: 'TAC de abdomen', s: 'Si el mecanismo es de alta energía' },
        { id: 'ine', col: 2, row: 2, k: 'alert', t: 'Inestable, peritonismo o líquido libre', s: 'Cualquiera de los tres' },
        { id: 'lap', col: 3, row: 2, k: 'alert', t: 'Laparotomía', s: 'Exploración quirúrgica' },
      ],
      edges: [
        { from: 'tra', to: 'fas' },
        { from: 'fas', to: 'est', label: 'todo negativo' }, { from: 'est', to: 'tac', label: 'alta energía' },
        { from: 'fas', to: 'ine', label: 'algo positivo' }, { from: 'ine', to: 'lap' },
      ],
      steps: [
        { show: ['tra'], note: 'Primer mecanismo: el trauma cerrado',
          say: 'Partamos por el trauma abdominal cerrado, el del choque automovilístico, la caída o el golpe. Aquí no hay herida que explorar, así que la pregunta es cómo sabemos si hay algo roto por dentro. Un detalle antes: no hay garantía GES específica, el manejo sigue el protocolo ATLS.' },
        { show: ['fas'], note: 'Dos herramientas: la clínica y la eco-FAST',
          say: 'Usamos dos herramientas. La clínica, es decir, si el paciente está estable y si tiene signos peritoneales. Y la eco FAST, la ecografía focalizada en trauma, que se hace al lado de la camilla y busca una sola cosa: líquido libre en el abdomen.' },
        { show: ['est'], note: 'Todo negativo: se observa',
          say: 'Si el paciente está estable, sin signos peritoneales y con la FAST negativa, la conducta es la observación, con monitorización y reevaluaciones clínicas seriadas. No se opera a ciegas.' },
        { show: ['tac'], note: 'Alta energía: se agrega TAC',
          say: 'Y si el mecanismo fue de alta energía, a esa observación se le puede sumar un TAC de abdomen, para no pasar por alto una lesión que la ecografía no ve. La FAST busca líquido; no te dice qué órgano está roto.' },
        { show: ['ine', 'lap'], note: 'Cualquier positivo: laparotomía',
          say: 'En cambio, si el paciente está inestable, si tiene signos peritoneales, o si la FAST muestra líquido libre, cualquiera de los tres, la conducta es la laparotomía. Basta uno solo para ir a pabellón. Y si el paciente que estaba en observación se pone inestable o desarrolla peritonismo, cambia de rama y se opera.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Trauma abdominal cerrado',
      title: '¿Qué se rompió y qué quedó obsoleto?',
      cards: [
        { title: 'Víscera hueca', tag: 'Intestino', kind: 'alert', items: [
          { t: 'Peritonitis y neumoperitoneo', d: 'El contenido intestinal sale al peritoneo',
            say: 'Veamos qué se puede romper. Si se rompe una víscera hueca, como el intestino, lo que sale es contenido intestinal y aire: el paciente hace peritonitis y neumoperitoneo. Es la misma lógica de la úlcera perforada que vimos en la clase de urgencias del tubo digestivo alto: aire libre significa víscera hueca rota, y eso se opera.' },
        ] },
        { title: 'Víscera sólida', tag: 'Bazo e hígado', kind: 'key', items: [
          { t: 'Hemoperitoneo', d: 'Sangre libre en el abdomen',
            say: 'Si se rompe una víscera sólida, el bazo o el hígado, lo que sale es sangre: hemoperitoneo. Y eso es justamente lo que detecta la FAST como líquido libre.' },
          { t: 'Manejo conservador si está estable', d: 'No toda lesión de bazo se opera',
            say: 'Pero ojo, que esto se pregunta: el bazo y el hígado lesionados se manejan de forma conservadora si el paciente está estable. Lo que decide la cirugía no es el órgano roto, es la estabilidad del paciente.' },
        ] },
        { title: 'Lavado peritoneal diagnóstico', tag: 'Obsoleto', kind: 'normal', items: [
          { t: 'Reemplazado por la eco-FAST', d: 'Si aparece como alternativa, descártalo',
            say: 'Y un dato de examen muy concreto: el lavado peritoneal diagnóstico está obsoleto. La eco FAST lo reemplazó. Si aparece como alternativa, casi siempre es el distractor. Hoy la pregunta de si hay sangre en el abdomen la responde la ecografía, en minutos y sin puncionar al paciente.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Trauma abdominal por arma blanca',
      title: 'Decide la exploración de la herida',
      nodes: [
        { id: 'her', col: 0, row: 1, k: 'start', t: 'Herida por arma blanca', s: 'Abdomen' },
        { id: 'cli', col: 1, row: 1, k: 'q', t: 'Clínica + exploración de la herida', s: '¿Penetra el peritoneo?' },
        { id: 'nop', col: 2, row: 0, k: 'good', t: 'No penetra', s: 'Paciente estable' },
        { id: 'obs', col: 3, row: 0, k: 'good', t: 'Observación', s: 'Reevaluar' },
        { id: 'pen', col: 2, row: 2, k: 'alert', t: 'Penetra el peritoneo', s: 'O inestable, peritonitis, evisceración' },
        { id: 'exp', col: 3, row: 2, k: 'alert', t: 'Exploración quirúrgica', s: 'Laparotomía o laparoscopía' },
      ],
      edges: [
        { from: 'her', to: 'cli' },
        { from: 'cli', to: 'nop', label: 'no' }, { from: 'nop', to: 'obs' },
        { from: 'cli', to: 'pen', label: 'sí' }, { from: 'pen', to: 'exp' },
      ],
      steps: [
        { show: ['her'], note: 'Segundo mecanismo: el arma blanca',
          say: 'Segundo mecanismo: la herida por arma blanca en el abdomen. Aquí cambia la herramienta. Ya no manda la ecografía, manda la herida misma.' },
        { show: ['cli'], note: 'La pregunta: ¿penetra el peritoneo?',
          say: 'Se evalúa con la clínica y con la exploración de la herida, y la pregunta es una sola: ¿la herida atraviesa el peritoneo?' },
        { show: ['nop', 'obs'], note: 'No penetra: observación',
          say: 'Si no lo atraviesa, el cuchillo no entró a la cavidad, y el paciente estable se puede observar. Ojo: observar no es dar de alta; es reevaluar, y si aparecen signos peritoneales o inestabilidad, se cambia de conducta.' },
        { show: ['pen'], note: 'Penetra, o hay inestabilidad, peritonitis o evisceración',
          say: 'Si la herida penetra el peritoneo, la situación cambia. Y también cambia, aunque no hayas explorado la herida, si el paciente está inestable, tiene signos peritoneales, o hay evisceración, es decir, asas o epiplón asomando por la herida.' },
        { show: ['exp'], note: 'Aunque esté estable y sin peritonismo',
          say: 'En todos esos casos la conducta es la exploración quirúrgica, por laparotomía o laparoscopía. Fíjate en el detalle: si penetra el peritoneo se explora aunque el paciente esté estable y sin peritonismo, porque el riesgo de haber lesionado intestino o mesenterio es alto.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Trauma abdominal por arma de fuego',
      title: 'Se explora siempre',
      cards: [
        { title: 'La regla', tag: 'Siempre a pabellón', kind: 'alert', items: [
          { t: 'Exploración quirúrgica siempre', d: 'Aunque el paciente esté estable',
            say: 'Tercer mecanismo, y el más simple: el trauma abdominal por proyectil de arma de fuego se explora quirúrgicamente siempre. No importa si el paciente está estable, no importa lo que diga la ecografía.' },
          { t: 'Energía y trayectoria', d: 'Lesiones múltiples de vísceras',
            say: '¿Por qué siempre? Porque la energía del proyectil y su trayectoria, que es impredecible, producen lesiones múltiples de vísceras. A diferencia del cuchillo, que lesiona solo lo que toca en su trayecto, el proyectil puede dañar varias vísceras a la vez, y no hay exploración de la herida que te asegure que no entró.' },
        ] },
        { title: 'La excepción', tag: 'Muy acotada', kind: 'criteria', items: [
          { t: 'Herida claramente tangencial', d: 'No entra a la cavidad',
            say: 'Hay una sola excepción, y es muy acotada: una herida claramente tangencial, que no entra a la cavidad.' },
          { t: 'Estable + observación estricta con TAC', d: 'Manejo no operatorio excepcional',
            say: 'Solo en ese caso, con el paciente estable, se puede manejar sin operar, bajo observación estricta y con TAC. Para el examen, quédate con la regla: bala en el abdomen, pabellón.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'Tres mecanismos, tres herramientas',
      nodes: [
        { id: 'pac', col: 0, row: 2, k: 'start', t: 'Paciente estable, sin peritonismo', s: 'Trauma abdominal' },
        { id: 'cer', col: 1, row: 0, k: 'cause', t: 'Cerrado', s: 'Decide la eco-FAST' },
        { id: 'bla', col: 1, row: 2, k: 'cause', t: 'Arma blanca', s: 'Decide la herida' },
        { id: 'fue', col: 1, row: 4, k: 'cause', t: 'Arma de fuego', s: 'Decide el mecanismo' },
        { id: 'r1', col: 2, row: 0, k: 'good', t: 'FAST (−): observar', s: 'FAST (+): laparotomía' },
        { id: 'r2', col: 2, row: 2, k: 'trap', t: 'No penetra: observar', s: 'Penetra: explorar' },
        { id: 'r3', col: 2, row: 4, k: 'alert', t: 'Explorar siempre', s: 'Salvo tangencial demostrada' },
      ],
      edges: [
        { from: 'pac', to: 'cer' }, { from: 'pac', to: 'bla' }, { from: 'pac', to: 'fue' },
        { from: 'cer', to: 'r1' }, { from: 'bla', to: 'r2' }, { from: 'fue', to: 'r3' },
      ],
      steps: [
        { show: ['pac'], note: 'El mismo paciente, tres conductas',
          say: 'Ahora juntemos los tres, porque el examen hace esto: te da un paciente estable y sin signos peritoneales, y lo único que cambia es el mecanismo. Si el paciente estuviera inestable, o con peritonitis, la respuesta sería cirugía en los tres casos, y la pregunta no tendría gracia. La gracia está en el paciente estable, porque ahí cada mecanismo usa una herramienta distinta.' },
        { show: ['cer', 'r1'], note: 'Cerrado: manda la FAST',
          say: 'En el trauma cerrado manda la eco FAST: negativa, observar; con líquido libre, laparotomía.' },
        { show: ['bla', 'r2'], note: 'Arma blanca: manda la herida',
          say: 'En el arma blanca manda la herida: si no penetra el peritoneo, observar; si penetra, explorar. Y aquí está la trampa típica: pedir una FAST en una herida por arma blanca que ya sabes que penetra. Si penetra, la FAST no cambia nada, porque una FAST negativa no descarta una lesión de intestino.' },
        { show: ['fue', 'r3'], note: 'Arma de fuego: manda el mecanismo',
          say: 'Y en el arma de fuego manda el mecanismo: se explora siempre, salvo la herida tangencial demostrada. Tres mecanismos, tres herramientas distintas.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Trauma torácico',
      title: 'Clínica + radiografía, y tratar la complicación',
      nodes: [
        { id: 'tor', col: 0, row: 2, k: 'start', t: 'Trauma torácico', s: 'Cerrado o arma blanca' },
        { id: 'rx', col: 1, row: 2, k: 'q', t: 'Clínica + Rx de tórax', s: '¿Qué complicación hay?' },
        { id: 'neu', col: 2, row: 0, k: 'effect', t: 'Neumotórax o hemotórax', s: 'Aire o sangre en la pleura' },
        { id: 'tub', col: 3, row: 0, k: 'good', t: 'Tubo pleural', s: 'Drena y mide el débito' },
        { id: 'con', col: 2, row: 2, k: 'effect', t: 'Contusión pulmonar', s: 'Pulmón golpeado' },
        { id: 'sop', col: 3, row: 2, k: 'good', t: 'Soporte respiratorio', s: 'Oxígeno y ventilación según necesidad' },
        { id: 'tap', col: 2, row: 4, k: 'alert', t: 'Taponamiento cardíaco', s: 'Sangre en el pericardio' },
        { id: 'per', col: 3, row: 4, k: 'alert', t: 'Pericardiocentesis o ventana', s: 'Descomprimir el pericardio' },
      ],
      edges: [
        { from: 'tor', to: 'rx' },
        { from: 'rx', to: 'neu' }, { from: 'neu', to: 'tub' },
        { from: 'rx', to: 'con' }, { from: 'con', to: 'sop' },
        { from: 'rx', to: 'tap' }, { from: 'tap', to: 'per' },
      ],
      steps: [
        { show: ['tor', 'rx'], note: 'Ahora el tórax: clínica y radiografía',
          say: 'Pasemos al tórax. En el trauma torácico cerrado y en el por arma blanca, la evaluación es la clínica más la radiografía de tórax. Y el manejo no es operar de entrada, sino tratar la complicación que encuentres.' },
        { show: ['neu', 'tub'], note: 'Aire o sangre en la pleura: tubo pleural',
          say: 'Si hay neumotórax o hemotórax, aire o sangre en la pleura, se instala un tubo pleural. Y ese tubo no solo trata: además mide cuánta sangre sale, y ese número va a ser clave en un momento. En el tórax hay dos cifras que tienes que llevarte sí o sí, y salen justamente de ese tubo.' },
        { show: ['con', 'sop'], note: 'Contusión: soporte',
          say: 'Si hay contusión pulmonar, es decir, el pulmón golpeado sin que haya aire ni sangre en la pleura, no hay nada que drenar. El tratamiento es soporte respiratorio.' },
        { show: ['tap', 'per'], note: 'Taponamiento: descomprimir',
          say: 'Y si hay taponamiento cardíaco, con sangre que comprime el corazón dentro del pericardio, hay que descomprimir: pericardiocentesis o ventana pericárdica. Fíjate en la lógica común: en el tórax, primero se resuelve la complicación con un procedimiento, y la toracotomía queda para indicaciones precisas, que vemos ahora.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Trauma torácico',
      title: '¿Cuándo se abre el tórax?',
      cards: [
        { title: 'Hemotórax masivo', tag: 'El número del tubo', kind: 'criteria', items: [
          { t: '> 1.500 mL de salida inicial', d: 'Por el tubo pleural',
            say: '¿Cuándo se abre el tórax? La primera indicación de toracotomía es el hemotórax masivo, y se define por lo que sale por el tubo. Si al instalarlo salen más de mil quinientos mililitros de entrada, es hemotórax masivo.' },
          { t: '> 200 mL/h por 2–4 horas', d: 'Débito sostenido',
            say: 'O si el débito se mantiene en más de doscientos mililitros por hora durante dos a cuatro horas. Cualquiera de los dos significa que hay una hemorragia activa que el tubo no va a detener. Aprende esos dos números: mil quinientos de entrada, doscientos por hora.' },
        ] },
        { title: 'Otras indicaciones', tag: 'Toracotomía', kind: 'alert', items: [
          { t: 'Taponamiento', d: 'Además de descomprimir',
            say: 'Las otras indicaciones de toracotomía son tres. La primera es el taponamiento cardíaco: la pericardiocentesis descomprime, pero la fuente del sangrado hay que resolverla.' },
          { t: 'Lesión de grandes vasos o vía aérea', d: 'Sangrado o fuga que no se controla con tubo',
            say: 'La segunda, la lesión de los grandes vasos o de la vía aérea, que ningún tubo pleural va a reparar.' },
          { t: 'Todo trauma torácico por arma de fuego', d: 'Igual que en el abdomen',
            say: 'Y la tercera, todo trauma torácico por arma de fuego. Fíjate que es la misma regla que en el abdomen: el arma de fuego va a pabellón, en el tórax y en el abdomen. Si recuerdas eso, ya tienes resuelta una parte de las preguntas.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Conducta según el mecanismo',
      head: ['Mecanismo', 'Evaluación', 'Cirugía si...'],
      rows: [
        { cells: ['Abdomen cerrado', 'Clínica + eco-FAST (± TAC)', 'Inestable, signos peritoneales o líquido libre'],
          say: 'Repasemos en una tabla. Trauma abdominal cerrado: clínica y eco FAST, más TAC si fue de alta energía. Se opera si está inestable, con signos peritoneales o con líquido libre.' },
        { cells: ['Abdomen arma blanca', 'Clínica + exploración de la herida', 'Penetra el peritoneo, inestable, peritonitis o evisceración'],
          say: 'Arma blanca en el abdomen: clínica y exploración de la herida. Se opera si penetra el peritoneo, si está inestable, con peritonitis o con evisceración.' },
        { cells: ['Abdomen arma de fuego', 'Clínica', 'Siempre (salvo herida tangencial demostrada)'],
          say: 'Arma de fuego en el abdomen: siempre, salvo la herida tangencial demostrada.' },
        { cells: ['Tórax cerrado o arma blanca', 'Clínica + Rx de tórax', 'Hemotórax masivo, taponamiento, grandes vasos o vía aérea'],
          say: 'Tórax cerrado o por arma blanca: clínica y radiografía. Toracotomía si hay hemotórax masivo, taponamiento, o lesión de grandes vasos o de la vía aérea.' },
        { cells: ['Tórax arma de fuego', 'Clínica', 'Siempre'],
          say: 'Y el tórax por arma de fuego: siempre.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 30 años sufre un choque automovilístico de alta energía. Llega hemodinámicamente estable, con dolor leve en el hipocondrio izquierdo y sin signos peritoneales. La eco-FAST no muestra líquido libre. Las radiografías de tórax y pelvis son normales.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Laparotomía exploradora de urgencia' },
        { letter: 'B', text: 'Lavado peritoneal diagnóstico' },
        { letter: 'C', text: 'Observación con reevaluaciones seriadas y TAC de abdomen' },
        { letter: 'D', text: 'Exploración digital de la pared abdominal' },
        { letter: 'E', text: 'Alta con analgesia y control ambulatorio' },
      ],
      correct: 'C',
      explanation: 'Trauma abdominal cerrado, estable, sin signos peritoneales y con eco-FAST negativa: observación con monitorización y reevaluaciones seriadas; por el mecanismo de alta energía se complementa con TAC. El lavado peritoneal está obsoleto y la exploración de la herida corresponde al arma blanca. Se operaría si apareciera inestabilidad, peritonismo o líquido libre.',
      say: {
        stem: 'Vamos al caso. Hombre de treinta años que sufre un choque automovilístico de alta energía. Llega estable, con dolor leve en el hipocondrio izquierdo y sin signos peritoneales. La eco FAST no muestra líquido libre, y las radiografías de tórax y pelvis son normales.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: laparotomía de urgencia, lavado peritoneal diagnóstico, observación con reevaluaciones seriadas y TAC de abdomen, exploración digital de la pared, o alta con analgesia. Piénsalo.',
        answer: 'Es la C. Trauma cerrado, estable, sin peritonismo y con FAST negativa: se observa, y como el mecanismo fue de alta energía, se agrega un TAC. El distractor tentador es la laparotomía, por el dolor en el hipocondrio izquierdo que te hace pensar en el bazo; pero aunque el bazo estuviera lesionado, en un paciente estable se maneja de forma conservadora. El lavado está obsoleto, y la exploración de la herida es del arma blanca.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 31',
      stem: 'Un paciente sufre una herida por arma blanca en el abdomen, hace 8 horas. Al examen físico está en buenas condiciones generales, con signos vitales normales y examen abdominal sin signos de irritación peritoneal, con ruidos hidroaéreos presentes. Se realiza exploración digital de la herida, con anestesia local, objetivándose laceración del peritoneo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar lavado peritoneal diagnóstico' },
        { letter: 'B', text: 'Realizar ecografía FAST' },
        { letter: 'C', text: 'Suturar la herida' },
        { letter: 'D', text: 'Solicitar TAC abdominal' },
        { letter: 'E', text: 'Realizar laparoscopía exploradora' },
      ],
      correct: 'E',
      explanation: 'La herida por arma blanca laceró el peritoneo: penetró la cavidad. Aunque el paciente esté estable y sin signos peritoneales, eso es indicación de exploración quirúrgica, hoy preferentemente por laparoscopía. Suturar la piel sin explorar la cavidad deja pasar una eventual lesión de intestino o mesenterio.',
      say: {
        stem: 'Ahora una pregunta real del examen, de julio de dos mil quince. Un paciente sufre una herida por arma blanca en el abdomen, hace ocho horas. Está en buenas condiciones, con signos vitales normales y sin signos de irritación peritoneal. Se explora la herida con anestesia local, y se objetiva que laceró el peritoneo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: lavado peritoneal diagnóstico, ecografía FAST, suturar la herida, TAC abdominal, o laparoscopía exploradora. Piénsalo.',
        answer: 'Es la E. La herida penetró el peritoneo, y eso ya es indicación de exploración quirúrgica, aunque el paciente esté estable y sin peritonismo, hoy preferentemente por laparoscopía. Suturar la herida sin más sería dejar pasar una lesión de intestino que todavía no dio la cara. Y el lavado peritoneal, otra vez, está obsoleto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 32',
      stem: 'Un paciente de 28 años sufre una puñalada en el tórax, en el lado derecho. Al examen físico está en buenas condiciones, con dolor torácico, y presenta disminución del murmullo pulmonar, asociado a hipersonoridad a la percusión en el hemitórax derecho.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Pedir radiografía de tórax' },
        { letter: 'B', text: 'Pedir resonancia magnética de tórax' },
        { letter: 'C', text: 'Instalar un tubo pleural' },
        { letter: 'D', text: 'Solicitar TAC de tórax' },
        { letter: 'E', text: 'Realizar videotoracoscopía' },
      ],
      correct: 'A',
      explanation: 'Trauma torácico penetrante con clínica de neumotórax (murmullo pulmonar disminuido e hipersonoridad), en un paciente estable, sin signos de neumotórax a tensión: el primer paso es la radiografía de tórax, para confirmar el diagnóstico y ver la magnitud antes de decidir el tubo pleural.',
      say: {
        stem: 'Y otra pregunta real, también de julio de dos mil quince. Un paciente de veintiocho años sufre una puñalada en el tórax, lado derecho. Está en buenas condiciones, con dolor torácico, y al examen tiene el murmullo pulmonar disminuido, con hipersonoridad al percutir ese lado.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: radiografía de tórax, resonancia magnética de tórax, instalar un tubo pleural, TAC de tórax, o videotoracoscopía. Piénsalo.',
        answer: 'Es la A. La clínica es de un neumotórax traumático, pero el paciente está estable, sin signos de que esté a tensión. Lo primero es la radiografía de tórax: confirma el diagnóstico y muestra su magnitud, y con eso recién decides si va tubo pleural. Saltarte la radiografía para instalar un tubo directamente es adelantarte sin necesidad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Paciente de 40 años con trauma torácico cerrado. La radiografía muestra una opacidad de la base derecha con borramiento del ángulo costofrénico. Se instala un tubo pleural que drena 1.800 mL de sangre en la primera hora.',
      question: '¿Cuál es la conducta?',
      options: [
        { letter: 'A', text: 'Mantener el tubo pleural y observar' },
        { letter: 'B', text: 'Toracotomía (exploración quirúrgica)' },
        { letter: 'C', text: 'Transfundir glóbulos rojos y reevaluar en 6 horas' },
        { letter: 'D', text: 'Retirar el tubo e instalar uno de mayor calibre' },
        { letter: 'E', text: 'TAC de tórax con contraste antes de decidir' },
      ],
      correct: 'B',
      explanation: 'Hemotórax con salida inicial mayor de 1.500 mL por el tubo pleural (o débito sostenido de más de 200 mL/h por 2–4 horas): hemorragia activa importante, indicación de toracotomía. Mantener solo el drenaje o transfundir sin controlar la fuente lleva al shock; el TAC no debe retrasar la cirugía.',
      say: {
        stem: 'Y una segunda pregunta del banco. Paciente de cuarenta años con trauma torácico cerrado. La radiografía muestra una opacidad en la base derecha con borramiento del ángulo costofrénico. Se instala un tubo pleural que drena mil ochocientos mililitros de sangre en la primera hora.',
        question: '¿Cuál es la conducta?',
        options: 'Las opciones: mantener el tubo y observar, toracotomía, transfundir y reevaluar en seis horas, cambiar el tubo por uno de mayor calibre, o TAC de tórax antes de decidir. Piénsalo.',
        answer: 'Es la B, toracotomía. Mil ochocientos mililitros de entrada supera el corte de mil quinientos: es un hemotórax masivo, con una hemorragia activa que el tubo no va a detener. El distractor tentador es transfundir y reevaluar, pero reponer sangre sin controlar la fuente lleva al shock. Y el TAC solo retrasa una cirugía que ya está indicada. Cambiar el tubo por uno más grueso tampoco resuelve nada: el problema no es el drenaje, es la fuente del sangrado.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Abdomen', tag: 'Manda el mecanismo', kind: 'key', items: [
          { t: 'Cerrado: clínica + eco-FAST', d: 'Estable y FAST (−): observar',
            say: 'Cerremos con las reglas de oro. Trauma abdominal cerrado: clínica y eco FAST; estable y con FAST negativa, se observa.' },
          { t: 'Arma blanca: penetra = explorar', d: 'Decide la exploración de la herida',
            say: 'Arma blanca: si penetra el peritoneo, se explora.' },
          { t: 'Arma de fuego: explorar siempre', d: 'Salvo tangencial demostrada',
            say: 'Arma de fuego en el abdomen: se explora siempre.' },
          { t: 'Lavado peritoneal: obsoleto', d: 'Bazo e hígado estables: conservador',
            say: 'El lavado peritoneal está obsoleto, y el bazo y el hígado se manejan de forma conservadora si el paciente está estable.' },
        ] },
        { title: 'Tórax', tag: 'Toracotomía', kind: 'alert', items: [
          { t: '> 1.500 mL inicial o > 200 mL/h', d: 'Hemotórax masivo',
            say: 'En el tórax, hemotórax con más de mil quinientos mililitros de entrada, o más de doscientos por hora, es toracotomía. Y el arma de fuego torácica también va a pabellón. Si te llevas una sola idea de hoy: en trauma, el mecanismo manda; la FAST para el cerrado, la herida para el arma blanca, y el pabellón para el arma de fuego. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Trauma de abdomen y tórax: manda el mecanismo',
    root: N('start', 'Trauma abdominal', 'Evaluación inicial',
      'Partimos del paciente con trauma abdominal. Antes de pedir cualquier examen, la pregunta es cuál fue el mecanismo, porque el mecanismo decide la herramienta.',
      ['', N('q', '¿Cuál es el mecanismo?', 'Cerrado · arma blanca · arma de fuego',
        '¿Fue un trauma cerrado, una herida por arma blanca o una por arma de fuego?',
        ['Cerrado', N('do', 'Clínica + eco-FAST', 'Busca líquido libre',
          'En el trauma cerrado evaluamos la clínica y hacemos eco FAST, buscando líquido libre. El lavado peritoneal está obsoleto.',
          ['', N('q', '¿Inestable, peritonismo o líquido libre?', 'Basta uno',
            '¿Está inestable, tiene signos peritoneales o la FAST muestra líquido libre? Basta uno de los tres.',
            ['SÍ', N('alert', 'Laparotomía', 'Exploración quirúrgica',
              'Si hay cualquiera de los tres, la conducta es la laparotomía.')],
            ['NO', N('ok', 'Observación', 'TAC si fue de alta energía',
              'Estable, sin peritonismo y con FAST negativa: observación con reevaluaciones seriadas, y TAC si el mecanismo fue de alta energía. Bazo e hígado estables se manejan de forma conservadora.')])])],
        ['Arma blanca', N('q', '¿Penetra el peritoneo?', 'Exploración de la herida',
          'En el arma blanca, exploramos la herida: ¿atraviesa el peritoneo? También cuentan la inestabilidad, los signos peritoneales y la evisceración.',
          ['SÍ', N('alert', 'Exploración quirúrgica', 'Laparotomía o laparoscopía',
            'Si penetra el peritoneo, o hay inestabilidad, peritonitis o evisceración, se indica exploración quirúrgica, aunque el paciente esté estable.')],
          ['NO', N('ok', 'Observación', 'Paciente estable',
            'Si la herida no atraviesa el peritoneo y el paciente está estable, se puede observar.')])],
        ['Arma de fuego', N('alert', 'Exploración quirúrgica siempre', 'Salvo tangencial demostrada',
          'Arma de fuego en el abdomen: exploración quirúrgica siempre, por las lesiones múltiples que produce. La única excepción es la herida claramente tangencial, en un paciente estable, con observación estricta y TAC.')])]),
  },
};
