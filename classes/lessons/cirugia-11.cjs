// Clase 11.11 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs / dataset_cirugia_bloque_3.cjs (cir-11, classId cirugia-11).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-11',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cerrado o penetrante, estable o inestable: dos preguntas que deciden todo',
      say: 'Seguimos en trauma, ahora con el abdomen. Es una cavidad que se puede llenar de litros de sangre sin que se note por fuera, y por eso el examen te obliga a razonar en dos pasos: primero, si el paciente está estable o no; y segundo, qué tan probable es que algo se haya roto ahí adentro. Vamos a ese razonamiento.',
    },

    {
      type: 'points',
      kicker: 'Mecanismo',
      title: 'Qué órgano se rompe según cómo llegó el golpe',
      cards: [
        { title: 'Trauma cerrado', tag: 'Compresión o desaceleración', kind: 'key', items: [
          { t: 'Bazo, primero', d: 'Después el hígado, y el intestino delgado',
            say: 'Empecemos por el mecanismo. En el trauma cerrado, por un golpe directo o una desaceleración brusca, el órgano que más se rompe es el bazo, seguido de cerca por el hígado.' },
          { t: 'Signo de Kehr', d: 'Dolor en el hombro izquierdo por sangre bajo el diafragma',
            say: 'Y un signo clásico de la rotura esplénica es el signo de Kehr: dolor referido al hombro izquierdo, porque la sangre bajo el diafragma irrita el nervio frénico.' },
        ] },
        { title: 'Trauma penetrante', tag: 'Arma blanca o de fuego', kind: 'alert', items: [
          { t: 'Arma blanca: hígado primero', d: 'El trayecto es una línea recta',
            say: 'En el trauma penetrante, la cosa cambia. Con arma blanca, el trayecto es una línea recta, y el órgano más lesionado es el hígado, seguido del intestino delgado.' },
          { t: 'Arma de fuego: intestino primero', d: 'La cavitación daña estructuras lejos del trayecto',
            say: 'Con arma de fuego, en cambio, el proyectil genera una cavitación que daña tejido incluso lejos de su trayecto visible, y ahí el órgano más lesionado pasa a ser el intestino delgado, seguido muy de cerca por el colon.' },
        ] },
        { title: 'Otra pista clínica', tag: 'El cinturón de seguridad', kind: 'criteria', items: [
          { t: 'Equimosis transversa en la pared', d: 'Sospecha rotura de intestino delgado',
            say: 'Y una última pista: si ves una equimosis transversa en la pared del abdomen, marcada por el cinturón de seguridad, sospecha una rotura del intestino delgado o su mesenterio.' },
          { t: 'Desaceleración brusca', d: 'Avulsión de pedículos vasculares, o desgarro en puntos fijos',
            say: 'Y en una desaceleración muy violenta, como una caída de altura, hay otro mecanismo que se pregunta: los órganos siguen moviéndose por inercia mientras sus puntos de fijación se quedan quietos. Eso puede avulsionar un pedículo vascular completo, o desgarrar el intestino justo donde está fijo, como en la unión entre el duodeno y el yeyuno.' },
          { t: 'Cullen y Grey Turner', d: 'Moretón periumbilical o en los flancos',
            say: 'Y dos signos más que apuntan a un sangrado escondido detrás del peritoneo: un moretón alrededor del ombligo, el signo de Cullen, o en los flancos, el signo de Grey Turner. Ninguno aparece de inmediato: se demoran horas o incluso días en formarse, así que su ausencia al ingreso no descarta nada, y no te tiene que hacer bajar la guardia.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Eco-FAST',
      title: 'Una ecografía que solo busca una cosa',
      nodes: [
        { id: 'lle', col: 0, row: 1, k: 'start', t: 'Trauma abdominal', s: 'En el box de reanimación' },
        { id: 'eco', col: 1, row: 1, k: 'mech', t: 'Eco-FAST en 2 minutos', s: 'Simultáneo al ABC' },
        { id: 'mor', col: 2, row: 0, k: 'effect', t: 'Ventana de Morrison', s: 'Entre el hígado y el riñón derecho' },
        { id: 'esp', col: 2, row: 1, k: 'effect', t: 'Ventana esplenorrenal', s: 'Entre el bazo y el riñón izquierdo' },
        { id: 'pel', col: 2, row: 2, k: 'effect', t: 'Ventana pélvica', s: 'Fondo de saco de Douglas' },
        { id: 'obj', col: 3, row: 1, k: 'risk', t: 'Busca líquido libre', s: 'No identifica qué órgano se rompió' },
      ],
      edges: [
        { from: 'lle', to: 'eco' }, { from: 'eco', to: 'mor' }, { from: 'eco', to: 'esp' },
        { from: 'eco', to: 'pel' }, { from: 'mor', to: 'obj' }, { from: 'esp', to: 'obj' }, { from: 'pel', to: 'obj' },
      ],
      steps: [
        { show: ['lle', 'eco'], note: 'Se hace junto con el ABC, no después',
          say: 'Con la sospecha de trauma abdominal, el primer examen no es de sangre ni de imagen sofisticada: es el Eco-FAST, hecho en el mismo box de reanimación, en menos de dos o tres minutos, al mismo tiempo que sigues con el ABC, sin mover al paciente de la camilla ni interrumpir la reanimación.' },
        { show: ['mor'], note: 'La más sensible de las cuatro ventanas',
          say: 'Revisa cuatro ventanas. La primera y más sensible es el espacio de Morrison, entre el hígado y el riñón derecho.' },
        { show: ['esp'], note: 'El equivalente del lado izquierdo',
          say: 'La segunda es la ventana esplenorrenal, entre el bazo y el riñón izquierdo.' },
        { show: ['pel'], note: 'Y una cuarta ventana en el pericardio',
          say: 'Y la tercera es la ventana pélvica, en el fondo de saco de Douglas. Hay una cuarta ventana, la pericárdica, que ya viste la clase pasada para el taponamiento.' },
        { show: ['obj'], note: 'No dice qué se rompió, solo si hay sangre',
          say: 'Y fíjate en algo importante: el Eco-FAST no te dice qué órgano se rompió, ni cuánta sangre hay exactamente. Solo busca una cosa, líquido libre, casi siempre sangre, en esos espacios. Con esa sola pregunta ya puedes tomar la decisión más importante de la clase.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'La decisión central',
      title: 'Inestable con líquido libre: pabellón, nunca el escáner',
      nodes: [
        { id: 'est', col: 0, row: 1, k: 'q', t: '¿Está estable?', s: 'Presión sistólica sobre 90' },
        { id: 'ines', col: 1, row: 0, k: 'risk', t: 'Inestable + Eco-FAST positivo', s: 'No responde a la reanimación' },
        { id: 'lap', col: 2, row: 0, k: 'alert', t: 'Laparotomía urgente', s: 'Directo a pabellón, sin TAC' },
        { id: 'esta', col: 1, row: 2, k: 'good', t: 'Estable, o se estabilizó', s: 'Responde a los fluidos' },
        { id: 'tac', col: 2, row: 2, k: 'good', t: 'TAC con contraste', s: 'Gradúa la lesión y guía el manejo' },
      ],
      edges: [
        { from: 'est', to: 'ines' }, { from: 'ines', to: 'lap' },
        { from: 'est', to: 'esta' }, { from: 'esta', to: 'tac' },
      ],
      steps: [
        { show: ['est'], note: 'La única pregunta que importa primero',
          say: 'Con el Eco-FAST ya hecho, viene la pregunta que decide todo lo demás: ¿el paciente está hemodinámicamente estable, o no?' },
        { show: ['ines'], note: 'No responde a la reanimación inicial',
          say: 'Si está inestable, con la presión baja a pesar de los fluidos, y el Eco-FAST muestra líquido libre, ya tienes tu respuesta.' },
        { show: ['lap'], note: 'El viaje al escáner puede ser el último',
          say: 'La conducta es laparotomía exploradora de urgencia, directo a pabellón, sin pasar por ningún otro servicio. Está formalmente prohibido llevar a este paciente al tomógrafo: el riesgo de que se descompense y muera durante el examen es demasiado alto, y ese trayecto se conoce entre los cirujanos como el viaje de la muerte al escáner.' },
        { show: ['esta'], note: 'Ya sea desde el principio, o tras los fluidos',
          say: 'Si en cambio el paciente está estable, o se estabilizó con la reanimación inicial, tienes tiempo para estudiarlo mejor.' },
        { show: ['tac'], note: 'El estándar de oro cuando hay tiempo',
          say: 'Ahí el examen de elección es el TAC de abdomen y pelvis con contraste. Te muestra el grado exacto de la lesión, dónde está el sangrado si sigue activo, y te permite decidir si el paciente puede tratarse sin cirugía o necesita ir a pabellón igual.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo no operatorio',
      title: 'Cuándo el bazo o el hígado se dejan sin operar',
      cards: [
        { title: 'Requisitos', tag: 'No cualquiera califica', kind: 'criteria', items: [
          { t: 'Estable, sin peritonitis', d: 'Y sin sospecha de víscera hueca asociada',
            say: 'Hoy, más del ochenta por ciento de las lesiones de bazo e hígado se tratan sin cirugía. Pero eso exige requisitos: el paciente estable, sin signos de peritonitis, y sin sospecha de que además se haya roto una víscera hueca.' },
          { t: 'Vigilancia estrecha', d: 'Hematocrito seriado y pabellón disponible',
            say: 'Y necesitas vigilancia estrecha, con hematocrito seriado cada seis a ocho horas, y un pabellón quirúrgico disponible las veinticuatro horas por si las cosas cambian.' },
          { t: 'La gradación la da el TAC', d: 'De grado uno, chica, a grado cinco, el estallido',
            say: 'Y el TAC es el que gradúa la lesión, de uno a cinco. En los grados bajos, casi siempre basta con el reposo y la vigilancia. En el grado cinco, con el órgano prácticamente estallado, la conducta ya no es esperar: es la cirugía, con empaquetamiento hepático o esplenectomía según el caso.' },
        ] },
        { title: 'Cuándo se convierte a cirugía', tag: 'Señales de alarma', kind: 'alert', items: [
          { t: 'Cae el hematocrito', d: 'O aparece dolor peritoneal progresivo',
            say: 'Si el hematocrito sigue cayendo sin freno, o aparece dolor peritoneal progresivo, ese manejo conservador se convierte en cirugía de inmediato.' },
          { t: 'Angioembolización', d: 'Si el TAC muestra sangrado activo (blush)',
            say: 'Y si el TAC muestra un sangrado activo, lo que se llama blush, la radiología intervencional puede embolizar ese vaso y evitar la cirugía en la mayoría de los casos.' },
          { t: 'Profilaxis de trombosis', d: 'Enoxaparina a las 24 a 48 horas',
            say: 'Y un dato que se pregunta: aunque el paciente esté con una lesión esplénica en observación, la profilaxis de trombosis con enoxaparina se inicia igual, apenas el hematocrito se mantiene estable por veinticuatro a cuarenta y ocho horas. Tenerle miedo a esa inyección y no darla expone al paciente a una trombosis o una embolia pulmonar, sin que el riesgo real de resangrado suba.' },
        ] },
        { title: 'Indicaciones que saltan directo a pabellón', tag: 'Sin necesidad de imágenes', kind: 'key', items: [
          { t: 'Peritonitis o evisceración', d: 'O neumoperitoneo evidente',
            say: 'Y hay señales que van directo a laparotomía sin ninguna imagen previa: un abdomen en tabla generalizado, una evisceración de asas por la herida, o aire libre evidente bajo el diafragma.' },
        ] },
        { title: 'Si te queda un bazo sin bazo', tag: 'Vacunas obligatorias', kind: 'pharma', items: [
          { t: 'Neumococo, meningococo y Hib', d: 'Antes del alta, si se extirpó el bazo',
            say: 'Y un dato que se pregunta después de una esplenectomía completa: hay que vacunar contra neumococo, meningococo y Haemophilus influenzae tipo b, idealmente antes de que el paciente se vaya de alta. Sin esa protección, el riesgo de una sepsis fulminante por asplenia es real y puede ser mortal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Retroperitoneo',
      title: 'Los hematomas que se abren, y los que no',
      cards: [
        { title: 'Zona central', tag: 'Explorar siempre', kind: 'alert', items: [
          { t: 'Aorta, vena cava, duodeno', d: 'Un hematoma acá se explora siempre',
            say: 'Un último punto, sobre los hematomas que encuentras al abrir el abdomen. En la zona central, donde están la aorta, la vena cava y el duodeno, un hematoma retroperitoneal se explora siempre, porque ahí puede haber una lesión vascular mayor.' },
        ] },
        { title: 'Flancos', tag: 'Depende del mecanismo', kind: 'criteria', items: [
          { t: 'Riñones y colon', d: 'No se explora si es cerrado y no crece',
            say: 'En los flancos, donde están los riñones y el colon, un hematoma cerrado que no crece no se explora, porque abrirlo puede hacer perder un riñón que se estaba controlando solo. Pero si es penetrante, o está pulsátil, ahí sí se abre.' },
        ] },
        { title: 'Pelvis', tag: 'Nunca se abre', kind: 'alert', items: [
          { t: 'Fracturas pélvicas inestables', d: 'Abrirlo desata una hemorragia que no se controla',
            say: 'Y en la pelvis, con una fractura pélvica inestable, el hematoma nunca se explora. Abrirlo libera el taponamiento natural del propio retroperitoneo y desata una hemorragia venosa masiva que ya no se puede controlar con nada. Ahí la conducta es empaquetar y estabilizar la pelvis por fuera, con una faja o un fijador externo, no abrir.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en el árbol de decisión del trauma abdominal.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en trauma abdominal',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Inestable con Eco-FAST positivo', 'Laparotomía urgente, directo a pabellón', 'Enviar al paciente al TAC'],
          say: 'Repasemos las trampas. Inestable con Eco-FAST positivo: laparotomía urgente, directo a pabellón. Enviarlo al escáner es el error que más cuesta caro.' },
        { cells: ['Estable, lesión esplénica grado bajo', 'Manejo no operatorio con vigilancia', 'Esplenectomía de entrada'],
          say: 'Estable, con una lesión esplénica de grado bajo: manejo no operatorio con vigilancia. Operar de entrada le quita al paciente un bazo que se podía salvar.' },
        { cells: ['Herida penetrante en hipocondrio izquierdo, estable', 'Laparoscopía diagnóstica del diafragma', 'Dar de alta sin más estudio'],
          say: 'Herida penetrante en el hipocondrio izquierdo, estable, con TAC normal: laparoscopía diagnóstica, porque la rotura diafragmática puede ser silenciosa incluso en las imágenes. Dar de alta sin buscarla deja pasar una hernia que se estrangula meses después.' },
        { cells: ['Signo del cinturón de seguridad', 'Sospechar rotura de intestino delgado', 'Asumir que es solo una contusión de pared'],
          say: 'Y la equimosis del cinturón de seguridad obliga a sospechar una rotura de intestino delgado, no a asumir que es solo un moretón de la pared.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 26 años sufre un vuelco en automóvil, con uso de cinturón de seguridad. Ingresa pálida, con presión arterial de 84/50 y frecuencia cardíaca de 124. Se le administra 1 litro de suero Ringer Lactato, y la presión sube apenas a 88/52. El Eco-FAST muestra líquido libre en el espacio de Morrison y en la pelvis.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar TAC de abdomen y pelvis con contraste' },
        { letter: 'B', text: 'Trasladar de inmediato a pabellón para laparotomía exploradora' },
        { letter: 'C', text: 'Repetir el Eco-FAST en 30 minutos y reevaluar' },
        { letter: 'D', text: 'Indicar 2 litros adicionales de suero fisiológico frío' },
        { letter: 'E', text: 'Solicitar angiografía para embolización' },
      ],
      correct: 'B',
      explanation: 'La paciente sigue inestable pese a la reanimación inicial, con Eco-FAST positivo para hemoperitoneo. La conducta obligatoria es la laparotomía exploradora de urgencia; enviarla al TAC en ese estado es la trampa clásica y de alto riesgo vital.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintiséis años, tras un vuelco en automóvil, con cinturón de seguridad puesto. Llega pálida, con presión arterial de ochenta y cuatro sobre cincuenta y frecuencia cardíaca de ciento veinticuatro. Se le pasa un litro de suero, y la presión apenas sube. El Eco-FAST muestra líquido libre en el espacio de Morrison y en la pelvis.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Tienes cinco opciones: pedir un TAC de abdomen, trasladar a pabellón para laparotomía, repetir el Eco-FAST en media hora, dar dos litros más de suero frío, o pedir una angiografía. Piénsalo.',
        answer: 'Es la B. Esta paciente no respondió a la reanimación inicial, sigue inestable, y el Eco-FAST ya te confirmó el hemoperitoneo, seguramente por una rotura de bazo o hígado. Con esos dos datos juntos, la conducta obligatoria es la laparotomía de urgencia. Pedir un TAC aquí es la trampa: llevarla al escáner en ese estado puede costarle la vida antes de que termine el examen.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 31',
      stem: 'Paciente sufre una herida por arma blanca en el abdomen, hace 8 horas. Al examen físico está en buenas condiciones generales, con signos vitales normales y examen abdominal sin signos de irritación peritoneal, con ruidos hidroaéreos presentes. Se realiza exploración digital de la herida, con anestesia local, objetivándose laceración del peritoneo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar lavado peritoneal diagnóstico' },
        { letter: 'B', text: 'Realizar ecografía FAST' },
        { letter: 'C', text: 'Suturar la herida' },
        { letter: 'D', text: 'Solicitar TAC abdominal' },
        { letter: 'E', text: 'Realizar laparoscopía exploradora' },
      ],
      correct: 'E',
      explanation: 'La exploración local confirma que la herida penetró el peritoneo. En un paciente estable, la conducta recomendada es la laparoscopía exploradora, que confirma o descarta lesión visceral con una agresión mínima; suturar la herida sin explorar la cavidad deja pasar lesiones internas.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil quince. Paciente con una herida por arma blanca en el abdomen, hace ocho horas. Está en buenas condiciones, con signos vitales normales y sin irritación peritoneal. Al explorar la herida bajo anestesia local, se confirma que la hoja penetró el peritoneo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: lavado peritoneal diagnóstico, ecografía FAST, suturar la herida, pedir un TAC abdominal, o laparoscopía exploradora. Piénsalo.',
        answer: 'Es la E. Una vez que confirmas que la herida atravesó el peritoneo, en un paciente estable la conducta es explorar la cavidad, y hoy eso se hace por laparoscopía: te deja ver si hay una lesión visceral, con una agresión mucho menor que abrir el abdomen entero de par en par. Suturar la piel sin mirar adentro es la trampa clásica: dejarías pasar una perforación intestinal silenciosa que se manifiesta horas después como una peritonitis.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La pregunta que manda', tag: 'Estable o inestable', kind: 'key', items: [
          { t: 'Inestable + Eco-FAST positivo', d: 'Pabellón directo, nunca el TAC',
            say: 'Cerremos con las reglas de oro. Inestable con Eco-FAST positivo es pabellón directo, nunca el TAC.' },
          { t: 'Estable', d: 'TAC con contraste, y a veces manejo sin cirugía',
            say: 'Estable es TAC con contraste, y muchas veces manejo no operatorio con vigilancia estrecha.' },
        ] },
        { title: 'Según cómo llegó el golpe', tag: 'Cerrado o penetrante', kind: 'alert', items: [
          { t: 'Cerrado: bazo primero', d: 'Penetrante por arma blanca: hígado primero',
            say: 'En el trauma cerrado, el bazo es el primer sospechoso. En el penetrante por arma blanca, es el hígado.' },
          { t: 'Signos que van directo a cirugía', d: 'Peritonitis, evisceración o neumoperitoneo',
            say: 'Y peritonitis, evisceración o neumoperitoneo van directo a cirugía, sin ninguna imagen de por medio. Si te llevas una sola idea de hoy: antes de pensar en qué órgano se rompió, pregúntate primero si el paciente está estable, porque de esa sola respuesta depende si va a pabellón o al TAC. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Trauma abdominal: la estabilidad decide el camino',
    root: N('start', 'Trauma abdominal cerrado o penetrante', 'Eco-FAST junto con el ABC',
      'Llega un paciente con trauma abdominal, cerrado o penetrante. Haces el Eco-FAST al mismo tiempo que el ABC, buscando solo una cosa: líquido libre en los espacios que revisas.',
      ['¿Peritonitis, evisceración o neumoperitoneo?', N('alert', 'Laparotomía directa', 'Sin necesidad de ninguna imagen previa',
        'Con estos signos, no esperas ningún examen: vas directo a pabellón para la laparotomía exploradora.')],
      ['¿Está inestable y el Eco-FAST es positivo?', N('q', '¿Responde a la reanimación inicial?', 'Fluidos y hemoderivados',
        'Si el paciente no responde a los fluidos y el Eco-FAST muestra líquido libre, la decisión ya está tomada.',
        ['No responde', N('alert', 'Laparotomía exploradora urgente', 'Directo a pabellón, nunca al TAC',
          'Prohibido llevarlo al tomógrafo: el riesgo de morir durante el examen es demasiado alto. Va directo a pabellón, con reanimación continua en el trayecto.')],
        ['Se estabiliza', N('do', 'TAC de abdomen y pelvis', 'Ya hay tiempo para estudiar mejor',
          'Si responde a la reanimación, tienes tiempo para el TAC, que gradúa la lesión y guía la siguiente decisión.')])],
      ['¿Estable desde el principio?', N('do', 'TAC de abdomen y pelvis', 'Estándar de oro sin urgencia vital',
        'Sin inestabilidad, el TAC con contraste es el examen de elección para decidir el manejo.',
        ['¿Lesión de bazo o hígado, sin víscera hueca?', N('ok', 'Manejo no operatorio', 'Vigilancia y hematocrito seriado',
          'Sin peritonitis ni sospecha de víscera hueca, la mayoría de estas lesiones se tratan sin cirugía, con vigilancia estrecha y hematocrito seriado hasta confirmar que todo se mantiene estable.')])]),
  },
};
