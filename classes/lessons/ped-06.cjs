// Clase ped-06 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria_bloque_2.cjs (id "ped-06").

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-06',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'La tríada que reconoces con los ojos cerrados, y lo que no puedes olvidar hacer',
      say: 'Bienvenido de nuevo. Seguimos en el bloque respiratorio con la laringitis aguda obstructiva, el croup, uno de esos temas donde el diagnóstico casi se hace por teléfono: apenas escuchas la descripción, ya sabes qué es. Lo que sí te va a costar es la parte del manejo, porque tiene un par de detalles finos que se preguntan una y otra vez, y también aprender a distinguirlo bien de otras causas de estridor que se disfrazan de croup. Vamos a eso.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué un poco de edema causa tanto ruido?',
      nodes: [
        { id: 'vir', col: 0, row: 0, k: 'cause', t: 'Virus parainfluenza', s: 'El principal responsable' },
        { id: 'sub', col: 1, row: 0, k: 'mech', t: 'Edema subglótico', s: 'Justo bajo las cuerdas vocales' },
        { id: 'ani', col: 2, row: 0, k: 'mech', t: 'Ahí el anillo es rígido', s: 'El cricoides no se estira' },
        { id: 'res', col: 2, row: 1, k: 'mech', t: 'Poco edema, mucha resistencia', s: 'El aire encuentra un cuello de botella' },
        { id: 'tri', col: 3, row: 0, k: 'effect', t: 'Disfonía, tos perruna, estridor', s: 'La tríada del croup' },
      ],
      edges: [
        { from: 'vir', to: 'sub' }, { from: 'sub', to: 'ani' }, { from: 'ani', to: 'res' }, { from: 'res', to: 'tri' },
      ],
      steps: [
        { show: ['vir'], note: 'El agente más frecuente, de lejos',
          say: 'Partamos por el agente. El virus parainfluenza tipo uno es el responsable de la gran mayoría de los casos de croup, y eso es tan preguntado que conviene que te lo aprendas de memoria primero.' },
        { show: ['sub'], note: 'Justo bajo las cuerdas vocales',
          say: 'Ese virus produce edema en la región subglótica, es decir, justo debajo de las cuerdas vocales.' },
        { show: ['ani'], note: 'Un anillo que no se estira',
          say: 'Y ahí pasa algo clave para entender por qué un niño hace tanto ruido con tan poco edema: ese sector está rodeado por el cartílago cricoides, el único anillo completo de toda la laringe. Como es rígido, no se puede estirar para compensar la hinchazón.' },
        { show: ['res'], note: 'Un milímetro de edema, mucho ruido',
          say: 'Por eso, apenas un milímetro de hinchazón achica el área por donde pasa el aire en tres cuartas partes, y la resistencia al flujo se multiplica muchas veces. Un lactante, que ya de por sí tiene la vía aérea angosta, se descompensa rápido con un edema que en un adulto pasaría casi inadvertido.' },
        { show: ['tri'], note: 'La tríada que se reconoce de inmediato',
          say: 'Y ese estrechamiento produce la tríada que vas a reconocer sin dudar: disfonía o llanto ronco, tos que suena como ladrido de perro, y estridor inspiratorio. Casi siempre aparece de noche, de forma brusca, y suele mejorar algo durante el día.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Gravedad',
      title: 'Los grados de obstrucción laríngea',
      cards: [
        { title: 'Grado I y II', tag: 'Leve y moderada', kind: 'criteria', items: [
          { t: 'Estridor solo al llorar', d: 'Grado uno, sin tiraje en reposo',
            say: 'Vamos con los grados clínicos, que son la base de todo lo que viene después. En el grado uno, el más leve, el estridor solo aparece si el niño llora o se agita, y no hay tiraje en reposo.' },
          { t: 'Estridor en reposo', d: 'Grado dos, con tiraje leve a moderado',
            say: 'En el grado dos, el estridor ya está presente aunque el niño esté tranquilo, y aparece tiraje subcostal e intercostal. Este es el grado donde más dudas surgen sobre si tratar solo con dexametasona o sumar adrenalina, así que préstale atención.' },
        ] },
        { title: 'Grado III y IV', tag: 'Grave y agotamiento', kind: 'alert', items: [
          { t: 'Estridor en ambos tiempos', d: 'Grado tres, con tiraje intenso y palidez',
            say: 'En el grado tres el estridor ya se escucha tanto al inspirar como al espirar, con tiraje intenso, y el niño empieza a verse pálido, inquieto o somnoliento.' },
          { t: 'Estridor que casi no suena', d: 'Grado cuatro, es agotamiento, no mejoría',
            say: 'Y en el grado cuatro el estridor se atenúa o desaparece, pero no porque mejoró: es que el niño ya está tan agotado que casi no mueve aire. Es la misma trampa del tórax silente que vimos en la clase pasada.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Dexametasona para todos, adrenalina para algunos',
      nodes: [
        { id: 'gra', col: 0, row: 1, k: 'q', t: '¿Qué grado tiene?', s: 'Eso decide el fármaco' },
        { id: 'dex', col: 1, row: 0, k: 'good', t: 'Dexametasona oral', s: 'En todos los grados, incluso el uno' },
        { id: 'g12', col: 2, row: 0, k: 'good', t: 'Grado uno y dos leve', s: 'Solo con dexametasona, a la casa' },
        { id: 'adr', col: 1, row: 2, k: 'alert', t: 'Adrenalina nebulizada', s: 'Grado dos sintomático, tres y cuatro' },
        { id: 'obs', col: 2, row: 2, k: 'alert', t: 'Observar dos horas', s: 'Por el efecto rebote' },
      ],
      edges: [
        { from: 'gra', to: 'dex' }, { from: 'dex', to: 'g12' },
        { from: 'gra', to: 'adr' }, { from: 'adr', to: 'obs' },
      ],
      steps: [
        { show: ['gra'], note: 'El grado clínico ordena todo el manejo',
          say: 'El grado que acabas de clasificar es lo que decide el tratamiento, y de eso trata toda esta parte de la clase.' },
        { show: ['dex', 'g12'], note: 'Nunca te la saltes, ni en el grado uno',
          say: 'Y aquí viene el primer dato que se pregunta harto: la dexametasona oral, en dosis única, está indicada en todos los grados, incluso en el uno. No es solo para los graves. Con un grado uno o dos leve, das la dexametasona y el niño se va a la casa.' },
        { show: ['adr'], note: 'Reservada para cuando ya hay disnea',
          say: 'La adrenalina nebulizada la reservas para el grado dos con síntomas más marcados, el grado tres y el grado cuatro. Estimula los receptores de los vasos de la mucosa, los contrae, y así baja el edema en diez a quince minutos, mucho más rápido que cualquier corticoide.' },
        { show: ['obs'], note: 'El dato que más se pregunta de toda la clase',
          say: 'Pero ojo, porque aquí está el dato que más se pregunta de todo el tema: el efecto de la adrenalina dura poco, y después de un par de horas puede reaparecer el edema. Por eso, todo niño que recibe adrenalina nebulizada se queda en observación en urgencia por al menos dos horas antes de definir el alta.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'Estridor: no siempre es croup viral',
      nodes: [
        { id: 'est', col: 0, row: 1, k: 'start', t: 'Niño con estridor', s: '¿Cómo empezó, y con qué se acompaña?' },
        { id: 'crp', col: 1, row: 0, k: 'good', t: 'Pródromo catarral, tos perruna', s: 'Croup viral: lo que ya vimos' },
        { id: 'epi', col: 1, row: 1, k: 'alert', t: 'Tóxico, sialorrea, sin tos', s: 'Epiglotitis: emergencia de pabellón' },
        { id: 'trb', col: 1, row: 2, k: 'risk', t: 'No responde a la adrenalina', s: 'Traqueítis bacteriana' },
        { id: 'cue', col: 1, row: 3, k: 'trap', t: 'Inicio súbito, comiendo o jugando', s: 'Cuerpo extraño: próxima clase' },
        { id: 'con', col: 2, row: 0, k: 'good', t: 'Estridor desde que nació', s: 'Laringomalacia: mejora al crecer' },
      ],
      edges: [
        { from: 'est', to: 'crp', label: 'lo típico' }, { from: 'est', to: 'epi', label: 'toxicidad' },
        { from: 'est', to: 'trb', label: 'no mejora' }, { from: 'est', to: 'cue', label: 'súbito' },
        { from: 'crp', to: 'con', label: 'si es un recién nacido' },
      ],
      steps: [
        { show: ['est'], note: 'Ordena el diagnóstico antes de tratar',
          say: 'Antes de seguir, ordenemos las causas de estridor, porque el examen le encanta mezclarlas. Pregúntate cómo empezó el cuadro y con qué otros signos viene.' },
        { show: ['crp'], note: 'Lo que acabamos de ver',
          say: 'Si hubo un pródromo catarral y hay tos que suena a perro, es el croup viral que acabamos de estudiar.' },
        { show: ['epi'], note: 'La emergencia verdadera',
          say: 'Si en cambio el niño se ve tóxico, con fiebre muy alta, babea porque no traga y no tiene esa tos característica del croup, sospecha epiglotitis: ahí no hay tiempo que perder y se asegura la vía aérea en pabellón.' },
        { show: ['trb'], note: 'El croup que se estanca',
          say: 'Si parece un croup pero no mejora con la adrenalina y tiene fiebre muy alta con secreciones purulentas, es traqueítis bacteriana.' },
        { show: ['cue'], note: 'Un tema que viene después',
          say: 'Si el inicio fue súbito, mientras comía o jugaba, sospecha cuerpo extraño en la vía aérea, que lo vemos en detalle un poco más adelante en este bloque.' },
        { show: ['con'], note: 'No confundir con el croup',
          say: 'Y si el estridor está presente desde el nacimiento, sin fiebre ni cuadro catarral, es laringomalacia congénita: una causa benigna y frecuente que suele mejorar sola con el crecimiento, y no tiene nada que ver con una infección.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Banderas rojas',
      title: 'Cuando no es un croup viral común',
      cards: [
        { title: 'Epiglotitis', tag: 'Emergencia', kind: 'alert', items: [
          { t: 'Fiebre alta, aspecto tóxico', d: 'Sialorrea y sin tos perruna',
            say: 'Ahora, las banderas rojas. Si un niño tiene fiebre muy alta, se ve tóxico, babea porque no puede tragar, adopta una postura sentado hacia adelante con el cuello estirado, y llama la atención que no tose como perro, sospecha epiglotitis. Antes esta era causada casi siempre por Haemophilus influenzae tipo b, pero desde que existe la vacuna, se volvió mucho menos frecuente.' },
          { t: 'Nunca uses el bajalenguas', d: 'Puede gatillar un espasmo fatal',
            say: 'Y este es un dato que salva vidas: en ese niño, jamás le metas un bajalenguas para mirar la garganta, ni lo acuestes a la fuerza. El estímulo puede gatillar un espasmo de la laringe y un paro respiratorio inmediato. Lo mejor es dejarlo tranquilo en brazos de su madre o su padre, y trasladarlo a pabellón para asegurar la vía aérea bajo anestesia, con el equipo preparado para una vía aérea difícil.' },
        ] },
        { title: 'Traqueítis bacteriana', tag: 'No responde a nada', kind: 'alert', items: [
          { t: 'Croup que no mejora', d: 'Con fiebre alta y secreción purulenta',
            say: 'Y sospecha traqueítis bacteriana cuando el cuadro parece un croup, pero no responde para nada a la adrenalina, y hay fiebre alta con secreciones purulentas abundantes. El germen más frecuente es el estafilococo dorado, y muchas veces necesita intubación, porque el pus tapona la vía aérea igual que lo haría el edema del croup.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos el grado y el tratamiento en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en laringitis',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Estridor solo con el llanto', 'Dexametasona oral y a la casa', 'No tratar por ser leve'],
          say: 'Repasemos con la tabla. Estridor solo con el llanto: dexametasona oral y a la casa. El error es no tratarlo por parecer demasiado leve.' },
        { cells: ['Estridor en reposo, con disnea', 'Adrenalina nebulizada y dexametasona', 'Dar solo dexametasona y esperar'],
          say: 'Estridor en reposo con disnea: adrenalina nebulizada más dexametasona. El error es dar solo la dexametasona y esperar a que actúe sola.' },
        { cells: ['Recibió adrenalina, mejoró rápido', 'Observar al menos dos horas', 'Dar el alta de inmediato'],
          say: 'Si recibió adrenalina y mejoró rápido, igual se observa al menos dos horas. El error clásico es dar el alta apenas mejora, sin esperar el rebote.' },
        { cells: ['Sialorrea, sin tos perruna, tóxico', 'Sospechar epiglotitis, ir a pabellón', 'Examinar la garganta con bajalenguas'],
          say: 'Sialorrea, sin tos perruna, aspecto tóxico: sospechas epiglotitis y vas a pabellón. El error que puede matar es examinar la garganta con el bajalenguas.' },
        { cells: ['Estridor que se apaga y está grave', 'Es agotamiento, actuar ya', 'Interpretarlo como mejoría'],
          say: 'Y si el estridor se apaga en un niño que se ve grave, pálido y decaído, es agotamiento, y hay que actuar de inmediato. El error clásico es leerlo como una mejoría y bajar la guardia.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Niño de 2 años, con 2 días de coriza, presenta esta noche disfonía, tos perruna y estridor inspiratorio audible en reposo. Tiraje subcostal leve. Afebril, sin sialorrea. Buen estado general entre los episodios de tos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Dexametasona oral en dosis única, con observación breve' },
        { letter: 'B', text: 'Solo observación, sin fármacos, porque está afebril' },
        { letter: 'C', text: 'Adrenalina racémica nebulizada y hospitalización directa' },
        { letter: 'D', text: 'Amoxicilina oral por sospecha de sobreinfección' },
        { letter: 'E', text: 'Intubación orotraqueal preventiva' },
      ],
      correct: 'A',
      explanation: 'Estridor en reposo con tiraje leve corresponde a grado II moderado. La dexametasona oral está indicada en todos los grados; la adrenalina se reserva para disnea más marcada, que este caso no presenta.',
      say: {
        stem: 'Vamos con un caso. Niño de dos años, con dos días de coriza, que esta noche presenta disfonía, tos perruna y estridor inspiratorio audible en reposo. Tiraje subcostal leve. Está sin fiebre, sin sialorrea, y se ve en buenas condiciones entre los episodios de tos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: dexametasona oral en dosis única con observación breve, solo observación sin fármacos, adrenalina racémica y hospitalización directa, amoxicilina oral, o intubación preventiva. Piénsalo.',
        answer: 'Es la A. El estridor en reposo con tiraje leve es un grado dos moderado, y en todos los grados va la dexametasona oral. La adrenalina la reservas para más disnea de la que tiene este niño, así que sería exagerada, y sin adrenalina tampoco necesita las dos horas de observación por rebote. Y fíjate que está afebril y sin sialorrea, justo lo contrario de la epiglotitis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 133',
      stem: 'Un lactante de 12 meses presenta un cuadro de tos, rinorrea y fiebre hasta 38,8°C de 24 horas de evolución, a lo que hoy se agregó dificultad respiratoria. Al examen físico presenta estridor inspiratorio, que aumenta con el llanto, asociado a retracción intercostal moderada. Su saturación de oxígeno es 94% y, al examen pulmonar se ausculta murmullo pulmonar conservado bilateral con transmisión de ruidos desde la vía aérea superior.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Laringitis aguda obstructiva' },
        { letter: 'B', text: 'Neumonía atípica' },
        { letter: 'C', text: 'Neumonía bilateral' },
        { letter: 'D', text: 'Asma del lactante' },
        { letter: 'E', text: 'Neumonitis viral' },
      ],
      correct: 'A',
      explanation: 'Cuadro catarral seguido de estridor inspiratorio que aumenta con el llanto, con murmullo pulmonar conservado: laringitis aguda obstructiva, no un cuadro del parénquima pulmonar.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Lactante de doce meses, con tos, rinorrea y fiebre hasta treinta y ocho con ocho, de un día de evolución, al que hoy se le agregó dificultad respiratoria. Al examen: estridor inspiratorio que aumenta con el llanto, y tiraje intercostal moderado. Satura noventa y cuatro, y el murmullo pulmonar está conservado en ambos lados, con transmisión de ruidos desde arriba.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: laringitis aguda obstructiva, neumonía atípica, neumonía bilateral, asma del lactante, o neumonitis viral.',
        answer: 'Es la A, laringitis aguda obstructiva. El dato clave que descarta las neumonías es que el murmullo pulmonar está conservado: el ruido que escuchas viene de arriba, de la vía aérea superior, y se transmite hacia abajo. Si el problema estuviera en el pulmón, esperarías crépitos o murmullo disminuido, no un pulmón limpio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 158',
      stem: 'Una niña de 3 años, previamente sana, presenta un cuadro de 2 días de evolución de rinorrea, asociada a fiebre de 39°C, con tos disfónica, a la que se agrega dificultad respiratoria hace una hora. Al examen físico, su frecuencia respiratoria es 48 por minuto, se escucha estridor inspiratorio y espiratorio y se objetiva retracción subcostal y supraesternal.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar adrenalina subcutánea' },
        { letter: 'B', text: 'Realizar nebulizaciones con salbutamol al 0,5%' },
        { letter: 'C', text: 'Realizar intubación orotraqueal' },
        { letter: 'D', text: 'Realizar nebulizaciones con bromuro de ipratropio al 0,5%' },
        { letter: 'E', text: 'Realizar nebulizaciones con adrenalina racémica al 0,1%' },
      ],
      correct: 'E',
      explanation: 'Estridor bifásico con tiraje intenso: grado III grave. Se trata con oxígeno, adrenalina racémica nebulizada y corticoides sistémicos, en ese orden.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Niña de tres años, previamente sana, con dos días de rinorrea y fiebre de treinta y nueve, con tos disfónica, a la que se agrega dificultad respiratoria hace una hora. Al examen: frecuencia respiratoria de cuarenta y ocho, estridor tanto al inspirar como al espirar, y tiraje subcostal y supraesternal.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: adrenalina subcutánea, nebulizar con salbutamol, intubación orotraqueal, nebulizar con bromuro de ipratropio, o nebulizar con adrenalina racémica.',
        answer: 'Es la E. El estridor en ambos tiempos respiratorios con tiraje intenso te ubica en un grado tres grave, y ahí la adrenalina racémica nebulizada es lo que corresponde, junto con oxígeno y dexametasona. El salbutamol y el ipratropio actúan en el bronquio, no en la subglotis, así que aquí no tienen ningún rol.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La tríada y el fármaco base', tag: 'Nunca falta', kind: 'key', items: [
          { t: 'Disfonía, tos perruna, estridor', d: 'Ese es el croup',
            say: 'Cerremos con las reglas de oro. Disfonía, tos perruna y estridor: eso es croup, y la dexametasona oral va en todos los grados, sin excepción, incluso en el más leve de todos.' },
        ] },
        { title: 'Cuándo sumar adrenalina', tag: 'Y qué implica', kind: 'pharma', items: [
          { t: 'Estridor en reposo con disnea', d: 'Adrenalina nebulizada',
            say: 'Sumas adrenalina nebulizada cuando el estridor ya está en reposo con dificultad respiratoria clara, no solo por tener estridor en reposo sin más.' },
          { t: 'Después de la adrenalina', d: 'Dos horas de observación por el rebote',
            say: 'Y si la usaste, dos horas de observación, sin excepción, por el efecto rebote que puede devolver la obstrucción.' },
        ] },
        { title: 'La emergencia que no es croup', tag: 'Epiglotitis', kind: 'alert', items: [
          { t: 'Tóxico, sialorrea, sin tos perruna', d: 'Nunca uses el bajalenguas',
            say: 'Y si el niño se ve tóxico, con sialorrea y sin tos perruna, sospecha epiglotitis y jamás uses el bajalenguas. Si te llevas una sola idea de hoy: la dexametasona oral es para todos, la adrenalina es para el que tiene disnea, y después de la adrenalina, siempre se observa. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Croup: del grado clínico al tratamiento',
    root: N('start', 'Niño con tríada del croup', 'Disfonía, tos perruna, estridor',
      'Tienes un niño con disfonía, tos perruna y estridor. Antes de tratarlo, define el grado.',
      ['', N('q', '¿Cómo está el estridor?', 'Solo al llorar, en reposo, o en ambos tiempos',
        'Pregúntate si el estridor aparece solo con el llanto, si ya está en reposo, o si además aparece al espirar.',
        ['Solo al llorar', N('ok', 'Grado uno', 'Dexametasona oral y a la casa',
          'Solo con el llanto es grado uno. Dexametasona oral en dosis única, y se va a la casa.')],
        ['En reposo, sin mucha disnea', N('do', 'Grado dos leve', 'Dexametasona oral, observar un rato',
          'En reposo pero sin mucha disnea es grado dos leve. Dexametasona oral, y observas antes de decidir el alta.')],
        ['En reposo, con disnea marcada', N('alert', 'Grado dos sintomático o más', 'Adrenalina nebulizada + dexametasona',
          'Con disnea marcada, sea grado dos sintomático o grado tres, sumas adrenalina racémica nebulizada a la dexametasona.',
          ['Mejora', N('do', 'Observar dos horas', 'Por el efecto rebote de la adrenalina',
            'Si mejora, igual se queda en observación al menos dos horas, porque el efecto de la adrenalina se acaba y el edema puede volver.')],
          ['No mejora, agotamiento', N('refer', 'Grado cuatro: hospitalizar', 'Considerar vía aérea avanzada',
            'Si no mejora y el niño se agota, con estridor que se apaga, es grado cuatro: hospitaliza y considera asegurar la vía aérea.')])])]),
  },
};
