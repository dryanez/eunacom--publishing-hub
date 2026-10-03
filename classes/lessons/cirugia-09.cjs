// Clase 11.9 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs / dataset_cirugia_bloque_3.cjs (cir-09, classId cirugia-09).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-09',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'El orden que salva: qué se trata primero y qué nunca se hace a ciegas',
      say: 'Bienvenido. Empezamos el bloque de trauma con el protocolo ATLS: la forma ordenada de evaluar a un politraumatizado grave. Es un tema muy rentable, porque casi todas las preguntas se resuelven con una sola idea: tratas primero la lesión que mata primero, en un orden fijo que nunca te saltas. Vamos a ese orden.',
    },

    {
      type: 'points',
      kicker: 'Por qué existe el ATLS',
      title: 'Los tres momentos en que muere un politraumatizado',
      cards: [
        { title: 'Distribución trimodal', tag: 'Tres picos de mortalidad', kind: 'key', items: [
          { t: 'Primer pico: segundos', d: 'Lesiones incompatibles con la vida',
            say: 'Antes de entrar al protocolo, entiende para qué sirve. La mortalidad del trauma tiene tres picos. El primero es en segundos: lesiones tan graves, como una rotura de la aorta, que nada en un hospital las puede evitar. Ahí solo sirve la prevención, no la medicina de urgencia.' },
          { t: 'Segundo pico: la hora dorada', d: 'Aquí actúa el ATLS',
            say: 'El segundo pico es en minutos u horas, la llamada hora dorada: hematomas intracraneales, neumotórax a tensión, rotura de bazo o hígado, shock hemorrágico. Este es exactamente el grupo que el ATLS busca salvar, porque son lesiones tratables si actúas rápido y en el orden correcto.' },
          { t: 'Tercer pico: días después', d: 'Sepsis y falla de varios órganos',
            say: 'Y el tercer pico es días o semanas después, por sepsis y falla de varios órganos en la unidad de paciente crítico. Con esa idea clara, vamos al protocolo que ataca el segundo pico.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Evaluación primaria',
      title: 'A, B, C, D, E: el orden que no se salta',
      nodes: [
        { id: 'ing', col: 0, row: 1, k: 'start', t: 'Politraumatizado grave', s: 'Evaluación y reanimación juntas' },
        { id: 'a', col: 1, row: 0, k: 'alert', t: 'A: vía aérea', s: 'Con control cervical' },
        { id: 'b', col: 1, row: 1, k: 'alert', t: 'B: ventilación', s: 'Buscar lesiones que matan ya' },
        { id: 'c', col: 1, row: 2, k: 'alert', t: 'C: circulación', s: 'Detener la hemorragia' },
        { id: 'd', col: 2, row: 1, k: 'effect', t: 'D: neurológico', s: 'Glasgow y pupilas' },
        { id: 'e', col: 3, row: 1, k: 'good', t: 'E: exposición', s: 'Evitar la hipotermia' },
      ],
      edges: [
        { from: 'ing', to: 'a' }, { from: 'a', to: 'b' }, { from: 'b', to: 'c' },
        { from: 'c', to: 'd' }, { from: 'd', to: 'e' },
      ],
      steps: [
        { show: ['ing'], note: 'Se evalúa y se reanima al mismo tiempo',
          say: 'Un politraumatizado grave no se evalúa por partes mientras nadie hace nada. La evaluación y la reanimación van juntas, y siguen siempre el mismo orden: tratas primero lo que mata primero.' },
        { show: ['a'], note: 'GCS de 8 o menos: vía aérea definitiva',
          say: 'El paso A es la vía aérea, con control cervical estricto. Mantienes el cuello alineado con las dos manos, y solo retiras el collar para intubar. ¿Cuándo intubas? Si el paciente está en apnea, si tiene una quemadura de la vía aérea, un tórax volante grave, o si su Glasgow es de ocho puntos o menos: ahí ya no puede proteger su propia vía aérea.' },
        { show: ['a'], note: 'Si falla la intubación, rescate quirúrgico',
          say: 'Y si no logras intubarlo después de dos o tres intentos, el rescate ya no es insistir: es quirúrgico, una cricotiroidotomía.' },
        { show: ['b'], note: 'Aquí buscas lo que mata en segundos',
          say: 'El paso B es la ventilación. Aquí buscas el neumotórax a tensión, el neumotórax abierto y el hemotórax masivo, porque matan en minutos. De estos te voy a hablar en detalle en la próxima clase; hoy quédate con la idea central: se buscan y se tratan de inmediato, dentro de este mismo paso B, antes de seguir.' },
        { show: ['c'], note: 'Dos vías gruesas y ácido tranexámico antes de las tres horas',
          say: 'El paso C es la circulación. Primero detienes cualquier hemorragia externa con presión directa firme, o un torniquete si es en una extremidad. Después instalas dos vías venosas gruesas, en el antebrazo, y empiezas a reponer con sangre, plasma y plaquetas en partes iguales, más ácido tranexámico en las primeras tres horas del trauma, porque después de ese plazo deja de servir.' },
        { show: ['c'], note: 'El suero fisiológico se limita a un litro',
          say: 'Y ojo con un dato que se pregunta seguido: el suero fisiológico se limita a un litro. Pasar más solo diluye la sangre y empeora la coagulación.' },
        { show: ['d'], note: 'Nivel de conciencia y pupilas',
          say: 'El paso D es el estado neurológico: calculas el Glasgow y revisas las pupilas, buscando asimetría.' },
        { show: ['e'], note: 'Desvestir completo y calentar de inmediato',
          say: 'Y el paso E es exponer al paciente por completo, cortando la ropa, girándolo en bloque para revisar la espalda, y cubriéndolo enseguida con mantas térmicas y sueros tibios. Parece un detalle menor, pero la hipotermia es una de las tres cosas que puede matar a este paciente en pabellón, y ya vamos a ver por qué.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Anexos',
      title: 'Dos sondas que a veces no se pueden instalar',
      cards: [
        { title: 'Sonda Foley', tag: 'Ojo con la uretra', kind: 'alert', items: [
          { t: 'Uretrorragia o próstata flotante', d: 'Sangre en el meato, hematoma en el perineo',
            say: 'Después del ABC vienen dos sondas, y ambas tienen una contraindicación que se pregunta mucho. La Foley te sirve para medir la orina cada hora, pero antes de instalarla revisa la uretra: si hay sangre en el meato, un hematoma en el perineo o la próstata se siente flotando al tacto rectal, algo se rompió ahí.' },
          { t: 'Nunca a ciegas', d: 'Va cistostomía o uretrografía primero',
            say: 'Con cualquiera de esos signos, jamás metas la sonda a ciegas: pides una uretrografía retrógrada, o instalas directamente una cistostomía suprapúbica. Meter la Foley igual puede completar la rotura de la uretra.' },
        ] },
        { title: 'Sonda nasogástrica', tag: 'Ojo con la base del cráneo', kind: 'alert', items: [
          { t: 'Ojos de mapache, signo de Battle', d: 'O salida de líquido claro por nariz u oído',
            say: 'La otra sonda es la nasogástrica, para vaciar el estómago. Pero si el paciente tiene los ojos de mapache, un moretón detrás de la oreja, o le sale líquido claro por la nariz o el oído, sospechas una fractura de la base del cráneo.' },
          { t: 'Se pasa por la boca', d: 'Nunca por la nariz en ese escenario',
            say: 'Ahí la sonda nunca va por la nariz, porque puede meterse por la fractura hasta el lóbulo frontal. Se instala por la boca, orogástrica, y asunto resuelto.' },
        ] },
        { title: 'Evaluación secundaria', tag: 'La mnemotecnia AMPLIA', kind: 'key', items: [
          { t: 'Solo si ya está estable', d: 'Alergias, medicamentos, patologías, ayuno, incidente',
            say: 'Y solo cuando el ABC ya terminó y el paciente está reanimado, viene la evaluación secundaria: la historia con la mnemotecnia AMPLIA, alergias, medicamentos, patologías previas, la última comida y el incidente, más un examen físico completo, de la cabeza a los pies.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cuando el paciente se agota',
      title: 'La tríada letal decide si sigues operando',
      nodes: [
        { id: 'hip', col: 0, row: 0, k: 'cause', t: 'Hipotermia', s: 'Menos de 35 grados' },
        { id: 'aci', col: 0, row: 1, k: 'cause', t: 'Acidosis', s: 'pH bajo siete coma dos' },
        { id: 'coa', col: 0, row: 2, k: 'cause', t: 'Coagulopatía', s: 'La sangre no coagula en la mesa' },
        { id: 'tri', col: 1, row: 1, k: 'risk', t: 'Tríada letal', s: 'Las tres juntas matan al paciente' },
        { id: 'cd', col: 2, row: 1, k: 'alert', t: 'Cirugía de control de daños', s: 'Abreviada, en tres tiempos' },
      ],
      edges: [
        { from: 'hip', to: 'tri' }, { from: 'aci', to: 'tri' }, { from: 'coa', to: 'tri' },
        { from: 'tri', to: 'cd', label: 'obliga a parar' },
      ],
      steps: [
        { show: ['hip'], note: 'El frío por sí solo ya frena la coagulación',
          say: 'Ahora, un escenario que se pregunta seguido: el paciente ya está en pabellón, y las cosas se ponen difíciles. El primer componente es la hipotermia, con la temperatura bajo treinta y cinco grados.' },
        { show: ['aci'], note: 'La perfusión de los tejidos ya falló',
          say: 'El segundo es la acidosis metabólica, con un pH bajo siete coma dos, porque los tejidos llevan rato sin recibir suficiente sangre.' },
        { show: ['coa'], note: 'La sangre ya no coagula en la mesa',
          say: 'Y el tercero es la coagulopatía: la sangre deja de coagular, y ves sangrado difuso en toda la herida.' },
        { show: ['tri'], note: 'Cuando aparecen las tres juntas',
          say: 'Cuando estos tres aparecen juntos, se llama la tríada letal, y es un límite que no puedes cruzar: seguir operando en ese estado termina en la muerte del paciente sobre la mesa.' },
        { show: ['cd'], note: 'Se detiene la cirugía definitiva y se traslada',
          say: 'La conducta es la cirugía de control de daños, en tres tiempos. Primero, controlas el sangrado y la contaminación lo más rápido posible, tapando con compresas. Segundo, cierras el abdomen de forma temporal, sin terminar nada, y trasladas al paciente a la unidad de paciente crítico para que se recaliente y se corrija.' },
        { show: ['cd'], note: 'Recién a las 48 o 72 horas se reconstruye',
          say: 'Y tercero, recién a las cuarenta y ocho o setenta y dos horas, vuelves a pabellón para la reconstrucción definitiva. Acuérdate de esto: cuando hay tríada letal, la prioridad deja de ser terminar la cirugía, y pasa a ser mantener al paciente con vida.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo el protocolo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Los errores que más se repiten en trauma',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Glasgow de 8 o menos', 'Intubación con control cervical', 'Hiperextender el cuello o esperar'],
          say: 'Repasemos las trampas. Con Glasgow de ocho o menos, intubas con control cervical. El error es hiperextender el cuello, o esperar a ver si mejora.' },
        { cells: ['Sospecha de neumotórax a tensión', 'Descompresión inmediata', 'Pedir radiografía antes de actuar'],
          say: 'Con sospecha de neumotórax a tensión, descompresión inmediata. Pedir la radiografía antes de actuar solo demora una emergencia de segundos.' },
        { cells: ['Hemorragia externa mayor', 'Presión, torniquete y ácido tranexámico antes de tres horas', 'Pasar más de un litro de suero fisiológico'],
          say: 'Con una hemorragia externa mayor, presión, torniquete y ácido tranexámico antes de las tres horas. Pasar más de un litro de suero fisiológico diluye la coagulación.' },
        { cells: ['Uretrorragia o próstata flotante', 'Cistostomía o uretrografía', 'Instalar sonda Foley a ciegas'],
          say: 'Con uretrorragia o próstata flotante, cistostomía o uretrografía. Instalar la sonda Foley a ciegas puede completar la rotura de la uretra.' },
        { cells: ['Fractura de base de cráneo', 'Sonda orogástrica', 'Sonda nasogástrica por la nariz'],
          say: 'Con fractura de base de cráneo, la sonda va por la boca. Ponerla por la nariz es el error que más se repite en esta pregunta.' },
        { cells: ['Tríada letal en pabellón', 'Cirugía de control de daños', 'Continuar la cirugía definitiva'],
          say: 'Y con la tríada letal ya instalada en pabellón, cirugía de control de daños. Seguir con la cirugía definitiva termina en la muerte del paciente en la mesa.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 34 años, motociclista, sufre una colisión de alta energía. Tras una hora de cirugía por una laceración hepática, el anestesista informa temperatura de 34,2 grados, pH arterial de 7,15 y sangrado difuso en napa desde toda la herida operatoria, sin que ningún vaso puntual esté sangrando.',
      question: '¿Cuál es la conducta quirúrgica más adecuada en este momento?',
      options: [
        { letter: 'A', text: 'Continuar la reconstrucción hepática definitiva hasta terminarla' },
        { letter: 'B', text: 'Empaquetar la cavidad con compresas, cerrar en forma temporal y trasladar a la unidad de paciente crítico' },
        { letter: 'C', text: 'Administrar bicarbonato de sodio y seguir operando sin cambios' },
        { letter: 'D', text: 'Realizar un bypass vascular y cerrar la pared por planos' },
        { letter: 'E', text: 'Esperar en pabellón a que la temperatura se normalice sola' },
      ],
      correct: 'B',
      explanation: 'Hipotermia, acidosis y sangrado difuso en napa son la tríada letal instalada. Continuar la cirugía definitiva es lo que más se pregunta como error: la conducta correcta es la cirugía de control de daños, con packing, cierre temporal y traslado a la unidad de paciente crítico.',
      say: {
        stem: 'Vamos con un caso. Hombre de treinta y cuatro años, motociclista, tras una colisión de alta energía. Lleva una hora de cirugía por una laceración hepática, y el anestesista informa una temperatura de treinta y cuatro coma dos grados, un pH de siete coma quince, y sangrado difuso en napa desde toda la herida, sin que haya ningún vaso puntual sangrando.',
        question: '¿Cuál es la conducta quirúrgica más adecuada en este momento?',
        options: 'Tienes cinco opciones: continuar la reconstrucción hepática hasta terminarla, empaquetar y trasladar a la unidad de paciente crítico, dar bicarbonato y seguir operando, hacer un bypass vascular y cerrar, o esperar en pabellón a que la temperatura mejore sola. Piénsalo.',
        answer: 'Es la B. Fíjate que aquí están las tres piezas juntas: hipotermia, acidosis, y coagulopatía con sangrado difuso. Esa es la tríada letal, y una vez que aparece, seguir operando de forma definitiva mata al paciente en la mesa. La conducta es la cirugía de control de daños: empaquetas con compresas, cierras de forma temporal, y trasladas a la unidad de paciente crítico para recalentar y corregir.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 26',
      stem: 'Paciente de 30 años sufre una caída desde 15 metros de altura, golpeándose contra el suelo. Al examen físico está orientado, con frecuencia cardíaca de 80 y presión arterial de 120/80, con mucho dolor a la compresión de la pelvis, mayor a izquierda. Se solicita una radiografía de pelvis que muestra una fractura pélvica.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Pasar una sonda Foley' },
        { letter: 'B', text: 'Indicar reposo con una hamaca o sábana pélvica' },
        { letter: 'C', text: 'Administrar antibióticos' },
        { letter: 'D', text: 'Realizar cirugía de inmediato' },
        { letter: 'E', text: 'Solicitar ecografía de abdomen y pelvis' },
      ],
      correct: 'B',
      explanation: 'Frente a una fractura de pelvis, lo primero es estabilizar el anillo pélvico externamente, con un tutor externo o, si no está disponible, una sábana o hamaca pélvica, para limitar la hemorragia venosa. La sonda Foley se pospone hasta descartar una lesión uretral asociada.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil dieciséis. Paciente de treinta años, tras una caída desde quince metros de altura. Está orientado, con signos vitales estables, pero con mucho dolor al comprimir la pelvis, mayor hacia el lado izquierdo. La radiografía confirma una fractura de pelvis.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones son: pasar una sonda Foley, indicar reposo con hamaca o sábana pélvica, dar antibióticos, operar de inmediato, o pedir una ecografía de abdomen. Piénsalo.',
        answer: 'La respuesta es la B. Con una fractura de pelvis, lo primero es reducir el volumen pélvico por fuera, con una sábana o hamaca pélvica, porque ahí se puede esconder una hemorragia venosa enorme. Y fíjate en el distractor: la sonda Foley suena razonable, pero en toda fractura de pelvis primero descartas una lesión uretral, así que se pospone hasta tenerlo claro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 43',
      stem: 'Paciente de 46 años sufre un accidente y presenta una fractura de pelvis. Tiene dolor y salida de sangre fresca por la uretra. Además, se palpa la próstata ascendida en el tacto rectal, y no ha podido orinar.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Pedir un TAC de abdomen y pelvis' },
        { letter: 'B', text: 'Solicitar resonancia magnética' },
        { letter: 'C', text: 'Realizar cistoscopía' },
        { letter: 'D', text: 'Instalar sonda Foley' },
        { letter: 'E', text: 'Instalar una cistostomía' },
      ],
      correct: 'E',
      explanation: 'Uretrorragia y próstata ascendida en un paciente con fractura de pelvis son los signos clásicos de una sección uretral. La sonda Foley está formalmente contraindicada; la conducta es la cistostomía suprapúbica, y luego se estudia con uretrografía retrógrada.',
      say: {
        stem: 'Y otra pregunta real, del EUNACOM de julio de dos mil quince. Paciente de cuarenta y seis años, con una fractura de pelvis. Tiene dolor y sale sangre fresca por la uretra, la próstata se palpa ascendida al tacto rectal, y no ha podido orinar.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: pedir un TAC de abdomen y pelvis, pedir una resonancia magnética, hacer una cistoscopía, instalar sonda Foley, o instalar una cistostomía. Piénsalo.',
        answer: 'Es la E. Este caso junta los tres signos que ya vimos: sangre en el meato, próstata que se siente flotando, y ahora además retención urinaria. Es una sección uretral, y ahí la sonda Foley está prohibida. La conducta es la cistostomía suprapúbica, para vaciar la vejiga sin tocar la uretra rota, y recién después se estudia con una uretrografía.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El orden que no cambia', tag: 'A antes que B, B antes que C', kind: 'key', items: [
          { t: 'Primero lo que mata primero', d: 'A, B, C, D, E, siempre en ese orden',
            say: 'Cerremos con las reglas de oro. En todo politraumatizado, el orden es siempre el mismo: se trata primero la lesión que mata primero.' },
          { t: 'Glasgow de 8 o menos', d: 'Intubación con control cervical',
            say: 'Con Glasgow de ocho o menos, intubas con control cervical, sin discutirlo.' },
        ] },
        { title: 'Lo que nunca se hace a ciegas', tag: 'Foley y sonda nasogástrica', kind: 'alert', items: [
          { t: 'Uretrorragia', d: 'Cistostomía, nunca sonda Foley',
            say: 'Con uretrorragia o próstata flotante, nunca instales la sonda Foley: va cistostomía.' },
          { t: 'Fractura de base de cráneo', d: 'Sonda por la boca, no por la nariz',
            say: 'Y con fractura de base de cráneo, la sonda gástrica se pasa por la boca, nunca por la nariz.' },
        ] },
        { title: 'Cuando el cuerpo se agota', tag: 'Tríada letal', kind: 'alert', items: [
          { t: 'Hipotermia, acidosis, coagulopatía', d: 'Detienes la cirugía definitiva',
            say: 'Y si aparece la tríada letal en pabellón, hipotermia, acidosis y coagulopatía, detienes la cirugía definitiva. Si te llevas una sola idea de hoy: en trauma, el orden decide la vida, y ese orden nunca se salta. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'ATLS: el orden que decide qué se trata primero',
    root: N('start', 'Politraumatizado en el box de reanimación', 'Evaluación y reanimación simultáneas',
      'Llega un politraumatizado grave. Antes de examinar nada más, sigue el orden fijo del ATLS: se trata primero la lesión que mata primero.',
      ['¿Vía aérea en riesgo o Glasgow de 8 o menos?', N('alert', 'A: intubación orotraqueal', 'Control cervical en línea bimanual',
        'Si la vía aérea está comprometida o el Glasgow es de ocho o menos, intubas de inmediato, manteniendo el cuello alineado con las dos manos.')],
      ['¿Hay signos de neumotórax a tensión?', N('alert', 'B: descompresión inmediata', 'Aguja en el 5° espacio intercostal',
        'Si hay timpanismo, ausencia de murmullo pulmonar y desviación traqueal, descomprimes ya, sin esperar ninguna radiografía.')],
      ['¿Hay uretrorragia o próstata flotante?', N('alert', 'C: sonda Foley contraindicada', 'Cistostomía o uretrografía retrógrada',
        'Si hay signos de lesión uretral, no instalas la sonda Foley: pides una uretrografía o instalas directamente una cistostomía.')],
      ['¿Shock sin lesión uretral?', N('do', 'C: reanimación 1:1:1 y ácido tranexámico', 'Dos vías venosas gruesas',
        'Sin contraindicación, controlas la hemorragia externa e inicias la reposición con hemoderivados y ácido tranexámico antes de las tres horas.',
        ['¿Aparece la tríada letal en pabellón?', N('q', 'Hipotermia, acidosis y coagulopatía', 'La decisión que separa la vida de la muerte',
          'Si el paciente cae en hipotermia, acidosis y coagulopatía mientras operas, la prioridad deja de ser terminar la cirugía.',
          ['Sí, tríada letal', N('alert', 'Cirugía de control de daños', 'Packing, cierre temporal y traslado a UPC',
            'Empaquetas, cierras de forma temporal y trasladas a la unidad de paciente crítico para recalentar y corregir antes de reoperar.')],
          ['No, paciente estable', N('ok', 'Cirugía definitiva', 'Reparación completa en el mismo tiempo',
            'Sin tríada letal, completas la reconstrucción definitiva en la misma cirugía.')])])]),
  },
};
