// Clase 3.16 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-16).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-16',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Las fases del parto, el score que decide la inducción, y los tres pasos que evitan la hemorragia',
      say: 'Bienvenido al trabajo de parto normal: sus fases, el mecanismo que sigue la cabeza fetal, el score de Bishop, y el manejo activo del alumbramiento. Después de tres clases seguidas de urgencias, hoy toca ver cómo funciona el parto cuando todo va bien, y qué hacer para que siga yendo bien. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fases del parto',
      title: 'Cuatro períodos, cada uno con su reloj',
      nodes: [
        { id: 'lat', col: 0, row: 1, k: 'start', t: 'Fase latente', s: 'Borramiento lento, hasta 5 centímetros' },
        { id: 'act', col: 1, row: 0, k: 'mech', t: 'Fase activa', s: 'Desde 5 centímetros, un centímetro por hora' },
        { id: 'exp', col: 2, row: 0, k: 'mech', t: 'Período expulsivo', s: 'Desde la dilatación completa al nacimiento' },
        { id: 'alu', col: 3, row: 0, k: 'good', t: 'Alumbramiento', s: 'Sale la placenta, menos de 30 minutos' },
        { id: 'cua', col: 3, row: 2, k: 'alert', t: 'Cuarto período', s: 'Vigilancia estricta, primeras 2 horas' },
      ],
      edges: [
        { from: 'lat', to: 'act' }, { from: 'act', to: 'exp' },
        { from: 'exp', to: 'alu' }, { from: 'alu', to: 'cua' },
      ],
      steps: [
        { show: ['lat'], note: 'Puede durar horas sin ser anormal',
          say: 'El primer período empieza con la fase latente: contracciones irregulares que van borrando y dilatando el cuello, muy lento, hasta los cinco centímetros. Puede durar muchas horas sin que sea anormal.' },
        { show: ['act'], note: 'El corte se movió de 4 a 5 centímetros',
          say: 'Desde los cinco centímetros empieza la fase activa, con dinámica regular y una velocidad esperada de al menos un centímetro por hora. Fíjate en el número: el consenso actual movió el corte de cuatro a cinco centímetros, y eso se pregunta.' },
        { show: ['exp'], note: 'Con más tiempo si hay epidural',
          say: 'Con la dilatación completa empieza el período expulsivo, que termina cuando nace el niño. En primerizas con epidural se acepta hasta tres horas; en multíparas, mucho menos.' },
        { show: ['alu'], note: 'Más de esto y hablamos de retención',
          say: 'Después nace la placenta, en el alumbramiento, que normalmente demora menos de treinta minutos.' },
        { show: ['cua'], note: 'El globo de seguridad de Pinard',
          say: 'Y el cuarto período son las dos horas siguientes, la vigilancia más estricta de todas, esperando que el útero se retraiga y forme lo que se llama el globo de seguridad de Pinard.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Mecanismo del parto',
      title: 'Seis movimientos para franquear la pelvis',
      cards: [
        { title: 'Entrada y descenso', tag: 'La cabeza se acomoda', kind: 'normal', items: [
          { t: 'Flexión de la cabeza fetal', d: 'Cambia a un diámetro más chico',
            say: 'La cabeza fetal hace seis movimientos para pasar la pelvis. Primero se acomoda y se flexiona, cambiando a un diámetro más pequeño.' },
          { t: 'Descenso hasta las espinas', d: 'Ahí se dice que está encajada',
            say: 'Después desciende, hasta llegar al nivel de las espinas ciáticas, donde decimos que la cabeza ya está encajada.' },
        ] },
        { title: 'Rotación y salida', tag: 'La que más se pregunta', kind: 'key', items: [
          { t: 'Rotación interna a occípito-púbica', d: 'La variedad de salida más frecuente',
            say: 'Dentro de la pelvis, la cabeza rota para ubicar el occipucio bajo la sínfisis púbica. Esa es la variedad occípito-púbica, la más frecuente de todas.' },
          { t: 'Desprendimiento por deflexión', d: 'Frente, ojos, nariz y mentón',
            say: 'Después la cabeza se extiende y se desprende: frente, ojos, nariz y mentón, en ese orden.' },
        ] },
        { title: 'Ya afuera', tag: 'Restitución y hombros', kind: 'normal', items: [
          { t: 'Rotación externa o restitución', d: 'La cabeza mira al mismo muslo de antes',
            say: 'Ya afuera, la cabeza gira sola, la restitución, mirando de nuevo al mismo muslo que enfrentaba al inicio.' },
          { t: 'Sale el hombro anterior primero', d: 'Y después el resto del cuerpo',
            say: 'Y por último sale el hombro anterior bajo el pubis, después el posterior, y el resto del cuerpo sigue rápido.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Score de Bishop',
      title: 'El cuello decide si induces con oxitocina o antes maduras',
      nodes: [
        { id: 'ind', col: 0, row: 1, k: 'start', t: 'Indicación de inducir el parto', s: 'Primero evalúas el cuello' },
        { id: 'bis', col: 1, row: 1, k: 'mech', t: 'Score de Bishop', s: 'Dilatación, borramiento, altura, consistencia, posición' },
        { id: 'baj', col: 2, row: 0, k: 'risk', t: 'Bishop 6 o menos', s: 'Cuello inmaduro, desfavorable' },
        { id: 'mad', col: 3, row: 0, k: 'trap', t: 'Maduración con misoprostol', s: 'O balón cervical primero' },
        { id: 'alt', col: 2, row: 2, k: 'good', t: 'Bishop mayor a 6', s: 'Cuello maduro, favorable' },
        { id: 'oxi', col: 3, row: 2, k: 'good', t: 'Oxitocina directa', s: 'Alta probabilidad de éxito' },
      ],
      edges: [
        { from: 'ind', to: 'bis' },
        { from: 'bis', to: 'baj', label: 'inmaduro' }, { from: 'baj', to: 'mad' },
        { from: 'bis', to: 'alt', label: 'maduro' }, { from: 'alt', to: 'oxi' },
      ],
      steps: [
        { show: ['ind'], note: 'No se induce sin mirar el cuello primero',
          say: 'Antes de inducir cualquier parto, tienes que evaluar el cuello, porque de eso depende con qué vas a inducir.' },
        { show: ['bis'], note: 'Cinco parámetros, no solo la dilatación',
          say: 'Y esa evaluación es el score de Bishop, que suma cinco parámetros del tacto vaginal: dilatación, borramiento, altura de la presentación, consistencia y posición del cuello.' },
        { show: ['baj'], note: 'Con esto la oxitocina fracasa la mitad de las veces',
          say: 'Con un Bishop de seis o menos, el cuello está inmaduro, y si intentas inducir directo con oxitocina, fracasa en más de la mitad de los casos.' },
        { show: ['mad'], note: 'Primero madurar, después inducir',
          say: 'Por eso primero maduras el cuello, con misoprostol vaginal o con un balón cervical, y solo después pasas a la oxitocina.' },
        { show: ['alt'], note: 'Aquí la oxitocina sí funciona',
          say: 'En cambio, con un Bishop mayor a seis, el cuello ya está maduro y favorable.' },
        { show: ['oxi'], note: 'Ir directo, sin madurar antes',
          say: 'Ahí vas directo con oxitocina en infusión continua, porque la probabilidad de éxito ya es alta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Alumbramiento',
      title: 'Tres pasos que bajan la hemorragia en más de 60 por ciento',
      cards: [
        { title: 'Manejo activo', tag: 'Obligatorio, siempre', kind: 'key', items: [
          { t: 'Oxitocina tras el hombro anterior', d: 'Dentro del primer minuto de nacer',
            say: 'El manejo activo del alumbramiento tiene tres pasos, y el primero es oxitocina intramuscular justo tras la salida del hombro anterior, o como máximo en el primer minuto de vida.' },
          { t: 'Tracción controlada del cordón', d: 'Con contratracción suprapúbica',
            say: 'El segundo es la tracción controlada del cordón, sosteniendo el útero hacia arriba con la otra mano, para que no se invierta.' },
          { t: 'Masaje uterino tras la placenta', d: 'Cada 15 minutos por 2 horas',
            say: 'Y el tercero, masaje uterino, repetido cada quince minutos durante las dos horas siguientes.' },
        ] },
        { title: 'Por qué se hace', tag: 'La evidencia', kind: 'alert', items: [
          { t: 'Baja la hemorragia postparto', d: 'En más de un 60 por ciento',
            say: 'Estos tres pasos juntos bajan la hemorragia postparto por atonía en más de un sesenta por ciento, y por eso es obligatorio en todo parto, no una opción.' },
          { t: 'El manejo expectante no se recomienda', d: 'Más sangrado y más transfusiones',
            say: 'El manejo expectante, dejando que la placenta salga sola sin ninguna de estas medidas, se asocia a más sangrado, un alumbramiento más largo, y más transfusiones. No se recomienda de rutina.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos el score de Bishop y el alumbramiento en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'El score de Bishop, punto por punto',
      head: ['Parámetro', '0 puntos', '2 puntos', '3 puntos'],
      rows: [
        { cells: ['Dilatación', 'Cerrado', '3 a 4 centímetros', '5 centímetros o más'],
          say: 'Repasemos el score de Bishop, parámetro por parámetro. Dilatación: cerrado es cero, tres a cuatro centímetros son dos puntos, cinco o más son tres puntos.' },
        { cells: ['Borramiento', '0 a 30 por ciento', '60 a 70 por ciento', '80 por ciento o más'],
          say: 'Borramiento: bajo treinta por ciento es cero, sesenta a setenta son dos puntos, ochenta o más son tres.' },
        { cells: ['Altura de la presentación', 'Móvil, alta', 'Encajada', 'Muy descendida'],
          say: 'Altura de la presentación: móvil y alta es cero, encajada son dos puntos, muy descendida son tres.' },
        { cells: ['Consistencia del cuello', 'Firme', 'Blanda', '—'],
          say: 'Consistencia: firme es cero, blanda son dos puntos. Este parámetro no llega a tres.' },
        { cells: ['Posición del cuello', 'Posterior', 'Anterior', '—'],
          say: 'Y posición: posterior es cero, anterior son dos puntos. Suma los cinco, y ese total te dice si induces directo o maduras primero.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Primigesta de 41 semanas ingresa para interrupción programada del embarazo. El feto pesa un estimado de 3.400 gramos, con registro reactivo. Al tacto vaginal: cuello en posición posterior, firme, con 0 por ciento de borramiento, orificio cervical cerrado, y la cabeza fetal móvil, sin encajar. El Score de Bishop da un total de 0 puntos. El interno sugiere iniciar de inmediato una infusión de oxitocina.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar infusión de oxitocina a dosis crecientes, como propone el interno' },
        { letter: 'B', text: 'Madurar el cuello con misoprostol vaginal o un balón cervical' },
        { letter: 'C', text: 'Realizar amniotomía antes de cualquier fármaco' },
        { letter: 'D', text: 'Indicar cesárea electiva sin intentar la inducción' },
        { letter: 'E', text: 'Administrar tocolíticos y reevaluar en una semana' },
      ],
      correct: 'B',
      explanation: 'Bishop de 0 puntos es un cuello completamente inmaduro. Inducir directo con oxitocina fracasa en la mayoría de los casos y aumenta el riesgo de cesárea. La conducta correcta es madurar el cuello primero, y recién con Bishop mayor a 6 iniciar la oxitocina.',
      say: {
        stem: 'Vamos con un caso. Primigesta de cuarenta y una semanas, que ingresa para interrupción programada. El feto pesa un estimado de tres mil cuatrocientos gramos y está reactivo. Al tacto vaginal, el cuello está posterior, firme, sin ningún borramiento, cerrado, y la cabeza fetal todavía está móvil, sin encajar. El score de Bishop da cero puntos, y el interno sugiere partir de inmediato con oxitocina.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: iniciar oxitocina como propone el interno, madurar el cuello con misoprostol o un balón, hacer amniotomía antes de cualquier fármaco, indicar cesárea electiva sin intentar la inducción, o dar tocolíticos y reevaluar en una semana. Piénsalo.',
        answer: 'Es la B. Con un Bishop de cero, el cuello está completamente inmaduro, y la sugerencia del interno es exactamente el error del examen: inducir directo con oxitocina fracasaría en la gran mayoría de los casos y terminaría en una cesárea evitable. Primero maduras el cuello con misoprostol o un balón cervical, y solo cuando el Bishop suba sobre seis, recién ahí pasas a la oxitocina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 96',
      stem: 'Una mujer de 34 años, cursando su primer embarazo de 36 semanas, refiere salida de abundante líquido por los genitales. A la especuloscopía no se observa salida de líquido por el orificio cervical externo, y al tacto vaginal se palpa un cuello sin dilatación, posterior y duro, sin borramiento. Una ecografía muestra oligoamnios.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar antibióticos profilácticos y mantener conducta expectante' },
        { letter: 'B', text: 'Inducir el parto con misoprostol' },
        { letter: 'C', text: 'Realizar cesárea' },
        { letter: 'D', text: 'Inducir el parto con oxitocina' },
        { letter: 'E', text: 'Solicitar un perfil biofísico para tomar la conducta definitiva' },
      ],
      correct: 'B',
      explanation: 'RPM de 36 semanas con cuello posterior, duro y sin dilatación es un Bishop bajo. Con cuello inmaduro, la oxitocina no sirve: se induce con misoprostol para madurar y desencadenar el parto a la vez.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil trece. Mujer de treinta y cuatro años, con su primer embarazo de treinta y seis semanas, con salida de líquido por los genitales. La especuloscopía no muestra salida por el cuello, y al tacto el cuello está posterior, duro, cerrado y sin borramiento. La ecografía muestra oligoamnios.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: antibióticos con conducta expectante, inducir con misoprostol, hacer una cesárea, inducir con oxitocina, o pedir un perfil biofísico. Piénsalo.',
        answer: 'Es la B. Es una rotura de membranas de treinta y seis semanas, que ya se debe interrumpir, pero el cuello posterior, duro y sin dilatación te da un Bishop bajo. Con ese cuello malo, la oxitocina sola no sirve, así que se induce con misoprostol, que madura el cuello y desencadena el parto al mismo tiempo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 141',
      stem: 'Embarazada de 39 semanas en trabajo de parto activo. Lleva 4 horas en fase activa con la dilatación cervical detenida en 5 centímetros, con dinámica uterina regular, de 4 contracciones de 45 segundos cada 10 minutos, y la presentación fetal ya encajada.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Fórceps' },
        { letter: 'B', text: 'Conducción con oxitocina' },
        { letter: 'C', text: 'Esperar en observación 2 horas más' },
        { letter: 'D', text: 'Cesárea de urgencia' },
        { letter: 'E', text: 'Vacuum extractor' },
      ],
      correct: 'B',
      explanation: 'Detención de la fase activa por dinámica insuficiente, sin sufrimiento fetal ni desproporción, no es indicación directa de cesárea. Primero se intenta conducir el trabajo de parto con oxitocina, para mejorar la dinámica uterina.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil veinticinco. Embarazada de treinta y nueve semanas, en fase activa desde hace cuatro horas, con la dilatación detenida en cinco centímetros, con dinámica uterina regular y la presentación ya encajada.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: fórceps, conducción con oxitocina, esperar dos horas más en observación, cesárea de urgencia, o vacuum extractor. Piénsalo.',
        answer: 'Es la B, conducción con oxitocina. La fase activa se detuvo, pero la dinámica uterina todavía no es suficiente, y no hay sufrimiento fetal ni desproporción evidente. Antes de saltar a una cesárea, se intenta primero mejorar las contracciones con oxitocina en goteo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Durante un parto vaginal normal, se produce el desprendimiento del hombro anterior del feto.',
      question: '¿Cuál es el paso inicial del manejo activo del alumbramiento?',
      options: [
        { letter: 'A', text: 'Administrar metilergonovina intramuscular tras la salida completa de la placenta' },
        { letter: 'B', text: 'Administrar oxitocina 10 unidades intramuscular de inmediato' },
        { letter: 'C', text: 'Traccionar el cordón umbilical antes de que el útero se contraiga' },
        { letter: 'D', text: 'Esperar la salida espontánea de la placenta sin ninguna intervención' },
        { letter: 'E', text: 'Administrar misoprostol rectal antes del expulsivo' },
      ],
      correct: 'B',
      explanation: 'El manejo activo del alumbramiento parte con oxitocina intramuscular inmediatamente tras la salida del hombro anterior, o dentro del primer minuto de nacido. Luego sigue la tracción controlada del cordón, con contratracción, y el masaje uterino.',
      say: {
        stem: 'Una última pregunta, del banco EUNACOM. Durante un parto vaginal normal, se produce el desprendimiento del hombro anterior del feto.',
        question: '¿Cuál es el paso inicial del manejo activo del alumbramiento?',
        options: 'Las opciones: metilergonovina tras la placenta completa, oxitocina intramuscular de inmediato, traccionar el cordón antes de que el útero se contraiga, esperar la salida espontánea, o misoprostol rectal antes del expulsivo. Piénsalo.',
        answer: 'Es la B. El primer paso del manejo activo es la oxitocina intramuscular, justo tras la salida del hombro anterior. Traccionar el cordón sin que el útero esté contraído es peligroso, porque puede provocar una inversión uterina, y esperar sin hacer nada es el manejo expectante, que no se recomienda.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Fases del parto', tag: 'El corte se movió', kind: 'key', items: [
          { t: 'Fase activa desde 5 centímetros', d: 'Un centímetro por hora, como mínimo',
            say: 'Cerremos con las reglas de oro. La fase activa empieza a los cinco centímetros, con un avance de al menos un centímetro por hora.' },
        ] },
        { title: 'Score de Bishop', tag: 'El cuello manda', kind: 'pharma', items: [
          { t: 'Bishop 6 o menos: madurar primero', d: 'Misoprostol o balón cervical',
            say: 'Con Bishop de seis o menos, primero maduras el cuello. Con Bishop mayor a seis, vas directo con oxitocina.' },
        ] },
        { title: 'Alumbramiento', tag: 'Siempre activo', kind: 'alert', items: [
          { t: 'Oxitocina, tracción y masaje', d: 'Baja la hemorragia en más de 60 por ciento',
            say: 'Y el manejo activo del alumbramiento, con oxitocina, tracción controlada y masaje, es obligatorio en todo parto. Si te llevas una sola idea de hoy: el cuello decide cómo induces, y el manejo activo del alumbramiento nunca es opcional. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Inducción del parto: lo que decide el cuello',
    root: N('start', 'Indicación de inducir el parto', 'Primero evalúas con Bishop',
      'Antes de cualquier inducción, evalúas el cuello con el score de Bishop, porque de eso depende el fármaco.',
      ['Bishop 6 o menos', N('alert', 'Madurar primero', 'Misoprostol vaginal o balón cervical',
        'Con un cuello inmaduro, Bishop de seis o menos, primero maduras con misoprostol vaginal o un balón cervical. Recién después pasas a la oxitocina.')],
      ['Bishop mayor a 6', N('ok', 'Oxitocina directa', 'Infusión continua, alta probabilidad de éxito',
        'Con un cuello ya maduro, Bishop mayor a seis, vas directo con oxitocina en infusión continua.')],
      ['Nace el niño: alumbramiento', N('do', 'Manejo activo obligatorio', 'Oxitocina + tracción + masaje',
        'Y en cualquiera de los dos caminos, al nacer el niño, el manejo activo del alumbramiento es obligatorio: oxitocina tras el hombro anterior, tracción controlada del cordón, y masaje uterino cada quince minutos.')]),
  },
};
