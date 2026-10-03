// Clase 19.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia_bloque_1.cjs (ob-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

const pwPbf = N('do', 'Perfil biofísico', 'Ecografía en tiempo real, hasta 30 minutos',
  'Con el RBNE que sigue sin reactividad, das el siguiente paso: el perfil biofísico, que combina ese mismo registro con la ecografía en tiempo real, hasta por treinta minutos.');

const pwSigue = N('q', '¿Sigue sin reactividad?', 'Después de estimular al feto',
  'Estimulaste al feto y esperaste los cuarenta minutos completos. ¿Sigue sin aceleraciones?',
  ['Sí', pwPbf],
  ['No, ya aceleró', N('ok', 'RBNE reactivo', 'Era el sueño fetal', 'Si con el estímulo empieza a acelerar, era justamente el ciclo de sueño. Con eso ya tienes tu RBNE reactivo, y no necesitas nada más.')]);

const pwProlongar = N('do', 'Prolongas y estimulas', 'Hasta completar 40 minutos',
  'Extiendes el registro hasta completar los cuarenta minutos, y le das un estímulo vibroacústico o táctil para despertarlo, por si está en su ciclo de sueño.',
  ['', pwSigue]);

const pwReactivo = N('ok', 'RBNE reactivo', 'Feto bien oxigenado, sin más estudio',
  'Con dos o más aceleraciones así, el feto está bien oxigenado, y no necesitas ningún estudio adicional por ahora.');

const pwCriterios = N('q', '¿Cumple los criterios de reactivo?', '2 aceleraciones de 15 por 15, en 20 minutos',
  'Miras el trazado de los primeros veinte minutos: ¿tiene dos o más aceleraciones de al menos quince latidos, que duren al menos quince segundos?',
  ['Sí', pwReactivo],
  ['No', pwProlongar]);

const pwRoot = N('start', 'RBNE de 20 minutos', 'Frecuencia basal, variabilidad y aceleraciones',
  'Le acabas de poner el monitor a tu paciente, y tienes un registro basal no estresante de veinte minutos delante. Ahora tienes que interpretarlo.',
  ['', pwCriterios]);

module.exports = {
  id: 'ob-03',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo saber si el feto está bien oxigenado, sin tocarlo',
      say: 'Bienvenido otra vez. Hoy vemos cómo evalúas el bienestar fetal antes del parto, con dos herramientas que se complementan: el registro basal no estresante y el perfil biofísico de Manning. Las dos buscan lo mismo, que el feto no esté en hipoxia, y las dos se preguntan mucho, porque hay que saber leer un número exacto para no equivocarse. Vamos a eso.',
    },

    {
      type: 'flow',
      kicker: 'Registro basal no estresante',
      title: 'Qué mide y qué significa cada parámetro',
      nodes: [
        { id: 'bas', col: 0, row: 0, k: 'start', t: 'FCF basal', s: 'Entre 110 y 160 latidos por minuto' },
        { id: 'var', col: 0, row: 1, k: 'mech', t: 'Variabilidad', s: 'Entre 6 y 25: oxigenación intacta' },
        { id: 'ace', col: 0, row: 2, k: 'mech', t: 'Aceleraciones', s: 'Al menos 15 por 15, dos o más veces' },
        { id: 'des', col: 0, row: 3, k: 'risk', t: 'Desaceleraciones', s: 'No deberían aparecer' },
        { id: 'rea', col: 2, row: 1, k: 'good', t: 'RBNE reactivo', s: 'Feto vigoroso y oxigenado' },
        { id: 'nor', col: 2, row: 3, k: 'alert', t: 'RBNE no reactivo', s: 'Casi siempre es sueño fetal' },
      ],
      edges: [
        { from: 'bas', to: 'rea' }, { from: 'var', to: 'rea' }, { from: 'ace', to: 'rea' },
        { from: 'des', to: 'nor' },
      ],
      steps: [
        { show: ['bas'], note: 'Primero, la frecuencia basal',
          say: 'Empecemos por lo básico. La frecuencia cardíaca fetal basal tiene que estar entre ciento diez y ciento sesenta latidos por minuto.' },
        { show: ['var'], note: 'La variabilidad refleja la oxigenación cerebral',
          say: 'Después viene la variabilidad, esas fluctuaciones latido a latido. Entre seis y veinticinco latidos es lo normal, y te dice que el cerebro fetal está bien oxigenado. Si baja de cinco, piensa en hipoxia o en sueño.' },
        { show: ['ace'], note: 'La regla es 15 por 15, dos veces',
          say: 'Y lo más importante: las aceleraciones. Necesitas al menos dos, cada una con un aumento de quince latidos por quince segundos, dentro de veinte minutos. Esa es la regla que te van a preguntar tal cual.' },
        { show: ['des'], note: 'Su sola presencia ya es una alarma',
          say: 'Las desaceleraciones, en cambio, no deberían aparecer nunca en un registro basal. Si las ves, ya es una alarma.' },
        { show: ['rea'], note: 'Con esto, no necesitas nada más',
          say: 'Cuando se cumplen los tres primeros criterios, tienes un registro reactivo, y eso te predice bienestar fetal con más de noventa y nueve por ciento de seguridad para la semana siguiente.' },
        { show: ['nor'], note: 'La causa más frecuente es benigna',
          say: 'Y si no aparecen aceleraciones, tienes un registro no reactivo. Antes de asustarte, piensa en la causa más común: el ciclo de sueño profundo del feto, que dura entre veinte y cuarenta minutos. Y si después de estimularlo y prolongar el registro sigue sin reactividad, ahí es cuando subes de nivel, con un perfil biofísico o con un Doppler fetal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Perfil biofísico de Manning',
      title: 'Cinco variables, dos puntos cada una',
      cards: [
        { title: 'Lo que mide', tag: 'Ecografía más monitor', kind: 'criteria', items: [
          { t: 'Reactividad, respiración, movimiento', d: 'Tono fetal y líquido amniótico',
            say: 'Cuando el registro no reactivo persiste, subes de nivel: el perfil biofísico de Manning. Combina el mismo registro cardíaco con cuatro variables ecográficas: movimientos respiratorios, movimientos corporales, tono fetal, y el volumen de líquido amniótico.' },
          { t: 'Movimientos respiratorios', d: 'Al menos un episodio de 30 segundos',
            say: 'Los movimientos respiratorios puntúan si ves al menos un episodio continuo de treinta segundos.' },
          { t: 'Movimientos corporales', d: 'Al menos tres, de cuerpo o extremidades',
            say: 'Los movimientos corporales necesitan al menos tres, ya sea de todo el cuerpo o de las extremidades.' },
          { t: 'Tono fetal', d: 'Extensión con retorno a la flexión',
            say: 'Y el tono fetal puntúa con al menos un episodio de extensión que vuelve a la flexión, como abrir y cerrar la mano. Es el parámetro más resistente: es el último que se pierde cuando avanza la hipoxia.' },
          { t: 'Cada variable: 0 o 2 puntos', d: 'Diez puntos en total',
            say: 'Cada una de las cinco variables te da dos puntos si es normal, y cero si no lo es. El máximo es diez.' },
        ] },
        { title: 'Cómo interpretas el número', tag: 'El líquido amniótico importa aparte', kind: 'key', items: [
          { t: '10 o 8 con líquido normal', d: 'Feto sano, manejo conservador',
            say: 'Con diez, o con ocho y el líquido amniótico normal, el feto está sano y sigues con manejo conservador.' },
          { t: '8 con oligohidramnios', d: 'Marca hipoxia crónica: considera interrumpir',
            say: 'Pero si el ocho viene con oligohidramnios, cambia todo: eso ya es un marcador de hipoxia crónica, y si el embarazo está de término, consideras interrumpir.' },
          { t: '6, o 4 o menos', d: 'Sospecha de asfixia, hasta asfixia grave',
            say: 'Con seis, sospechas asfixia: si es de término, interrumpes; si es prematuro, repites el examen en veinticuatro horas o complementas con Doppler. Y con cuatro o menos, la probabilidad de asfixia grave es tan alta que la interrupción es inmediata, sin esperar nada más.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Vamos a recorrer, paso a paso, cómo se lee un RBNE hasta llegar al perfil biofísico.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Los números que decides de memoria',
      head: ['Situación', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['RBNE sin aceleraciones a los 20 minutos', 'Prolongar y estimular hasta los 40 minutos', 'Concluir sufrimiento fetal de inmediato'],
          say: 'Repasemos las trampas. Un RBNE sin aceleraciones a los veinte minutos no es sufrimiento fetal: primero prolongas y estimulas hasta los cuarenta minutos. Concluir sufrimiento de entrada es el error más repetido.' },
        { cells: ['RBNE no reactivo tras 40 minutos', 'Perfil biofísico o Doppler', 'Interrumpir el embarazo sin más estudio'],
          say: 'Si sigue no reactivo después de los cuarenta minutos, ahí sí subes a un perfil biofísico o a un Doppler, no directo a interrumpir.' },
        { cells: ['Perfil biofísico 8/10 con oligohidramnios', 'Marcador de hipoxia crónica', 'Tranquilizarse porque el puntaje es alto'],
          say: 'Un ocho sobre diez con oligohidramnios sigue siendo preocupante. El error es fijarse solo en el número final e ignorar que el líquido está bajo.' },
        { cells: ['Perfil biofísico 4/10 o menos', 'Interrupción inmediata del embarazo', 'Repetir el examen en unos días'],
          say: 'Y con cuatro o menos, la conducta es interrumpir ahora. Esperar a repetir el examen en unos días puede costarle la vida al feto.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Embarazada de 34 semanas, sin patología conocida, consulta por disminución de movimientos fetales de 6 horas de evolución. Se instala monitor cardiofetal: en los primeros 20 minutos hay frecuencia basal de 140 latidos por minuto, variabilidad de 10, sin desaceleraciones, y ninguna aceleración.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar cesárea por sufrimiento fetal agudo' },
        { letter: 'B', text: 'Prolongar el registro y aplicar estímulo vibroacústico' },
        { letter: 'C', text: 'Dar el alta, indicando que el examen es normal' },
        { letter: 'D', text: 'Solicitar amniocentesis para estudio de madurez pulmonar' },
        { letter: 'E', text: 'Administrar corticoides de inmediato' },
      ],
      correct: 'B',
      explanation: 'A los 20 minutos, sin aceleraciones pero con basal y variabilidad normales, corresponde prolongar el registro hasta los 40 minutos y estimular al feto para descartar el ciclo de sueño fisiológico, antes de considerar el examen alterado.',
      say: {
        stem: 'Un caso. Embarazada de treinta y cuatro semanas, sin ninguna patología, que consulta por disminución de los movimientos fetales de seis horas de evolución. Le instalas el monitor: en los primeros veinte minutos, la frecuencia basal es de ciento cuarenta, la variabilidad es de diez, no hay desaceleraciones, pero tampoco hay ninguna aceleración.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: indicar cesárea por sufrimiento fetal agudo, prolongar el registro con estímulo vibroacústico, dar el alta como examen normal, pedir amniocentesis para madurez pulmonar, o dar corticoides de inmediato. Piénsalo.',
        answer: 'Es la B. Fíjate que la basal y la variabilidad están perfectas: lo único que falta son las aceleraciones, y a los veinte minutos. Antes de asumir que algo anda mal, prolongas a cuarenta minutos y estimulas al feto, porque lo más probable es que esté dormido. Ni la cesárea ni los corticoides tienen lugar todavía, y el alta sería precipitada: el examen aún no cumple los criterios de reactivo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 25',
      stem: 'Mujer de 28 años, con embarazo de 30 semanas, consulta angustiada por no percibir movimientos fetales, sin otros síntomas. Su examen físico es normal. Se le solicita un registro basal no estresante de veinte minutos.',
      question: '¿Cuál es la conducta más adecuada en este caso?',
      options: [
        { letter: 'A', text: 'Tranquilizar a la paciente e indicar que mantenga sus controles habituales' },
        { letter: 'B', text: 'Solicitar perfil biofísico' },
        { letter: 'C', text: 'Solicitar ecografía obstétrica' },
        { letter: 'D', text: 'Repetir el registro basal no estresante por veinte minutos más' },
        { letter: 'E', text: 'Realizar un test de tolerancia a las contracciones uterinas' },
      ],
      correct: 'D',
      explanation: 'El trazado es no reactivo, con mínimas aceleraciones. Antes de subir a un estudio mayor, se prolonga el registro veinte minutos más, cumpliendo así los cuarenta minutos que dan tiempo para superar un eventual ciclo de sueño fetal.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil trece. Mujer de veintiocho años, con embarazo de treinta semanas, que consulta angustiada porque no siente movimientos fetales, sin otro síntoma. Su examen físico es normal, y se le hace un registro basal no estresante de veinte minutos.',
        question: '¿Cuál es la conducta más adecuada en este caso?',
        options: 'Las opciones: tranquilizarla y mantener el control habitual, pedir perfil biofísico, pedir ecografía obstétrica, repetir el registro veinte minutos más, o hacer un test de tolerancia a las contracciones. Piénsalo.',
        answer: 'Es la D. El trazado sale no reactivo, y lo primero que corresponde no es subir al perfil biofísico ni pedir otra ecografía: es alargar el mismo registro veinte minutos más, hasta completar los cuarenta, para dar tiempo a que termine un posible ciclo de sueño fetal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 83',
      stem: 'Mujer de 30 años, cursando un embarazo de 40 semanas, consulta por ausencia de movimientos fetales. Se le realiza un perfil biofísico, que resulta 8/10, con oligoamnios.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Dejar a evolución espontánea' },
        { letter: 'B', text: 'Interrumpir el embarazo ahora, por cesárea' },
        { letter: 'C', text: 'Inducir el parto en este momento' },
        { letter: 'D', text: 'Realizar cesárea al inicio del trabajo de parto' },
        { letter: 'E', text: 'Inducir el parto a las 41 semanas' },
      ],
      correct: 'C',
      explanation: 'Un perfil biofísico de 8/10 con oligoamnios, en un embarazo ya de término, es indicación de interrumpir por el riesgo de hipoxia progresiva. La cesárea no es obligatoria: al ser un puntaje 8 y no uno crítico, se puede intentar la inducción del parto.',
      say: {
        stem: 'Y una pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Mujer de treinta años, con un embarazo de cuarenta semanas, que consulta por ausencia de movimientos fetales. Se le hace un perfil biofísico, que resulta ocho sobre diez, con oligoamnios.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: dejar a evolución espontánea, interrumpir ahora por cesárea, inducir el parto ahora, hacer cesárea al inicio del trabajo de parto, o inducir a las cuarenta y una semanas. Piénsalo.',
        answer: 'Es la C. El ocho sobre diez con oligoamnios, en un embarazo ya de cuarenta semanas, te dice que hay que interrumpir, porque esperar más solo suma riesgo. Pero no es un puntaje crítico como para exigir cesárea: puedes inducir el parto en este momento. Esperar hasta la semana cuarenta y uno, con el líquido ya bajo, es la trampa de este caso.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Registro basal no estresante', tag: 'La regla 15 por 15', kind: 'key', items: [
          { t: '2 aceleraciones de 15 por 15', d: 'En 20 minutos: reactivo',
            say: 'Cerremos con las reglas de oro. Dos aceleraciones de quince latidos por quince segundos, en veinte minutos, es tu registro reactivo.' },
          { t: 'No reactivo a los 20 minutos', d: 'Prolongas y estimulas hasta los 40',
            say: 'Si no las ves a los veinte minutos, prolongas y estimulas hasta los cuarenta, antes de asumir que algo anda mal.' },
        ] },
        { title: 'Perfil biofísico', tag: 'El líquido cambia todo', kind: 'pharma', items: [
          { t: '8/10 con oligohidramnios', d: 'No es tranquilizador: hipoxia crónica',
            say: 'Y en el perfil biofísico, un ocho sobre diez con oligohidramnios no es tranquilizador: es un marcador de hipoxia crónica.' },
        ] },
        { title: 'La urgencia máxima', tag: '4 o menos', kind: 'alert', items: [
          { t: 'Puntaje 4 o menos', d: 'Interrupción inmediata del embarazo',
            say: 'Un puntaje de cuatro o menos es asfixia fetal grave, e interrumpes de inmediato. Si te llevas una sola idea de hoy: el registro no reactivo casi siempre es sueño, pero el líquido amniótico bajo nunca es un hallazgo menor. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Cómo se lee un registro basal no estresante',
    root: pwRoot,
  },
};
