// Clase 3.13 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-13).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-13',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Una regla de oro y cuatro cuadros que se separan por el dolor y el tono uterino',
      say: 'Bienvenido a metrorragias de la segunda mitad del embarazo: placenta previa, desprendimiento de placenta, rotura uterina y rotura de vasa previa. Son cuatro cuadros distintos, pero comparten una sola regla de oro que abre toda la clase, y después se separan con muy pocos datos. Si te llevas esa regla y esa lógica, vas a responder casi cualquier pregunta del tema. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Regla de oro',
      title: 'Nunca toques antes de saber dónde está la placenta',
      nodes: [
        { id: 'ini', col: 0, row: 1, k: 'start', t: 'Metrorragia después de 20 semanas', s: 'Urgencia con riesgo vital materno y fetal' },
        { id: 'trap', col: 1, row: 0, k: 'trap', t: 'Tacto vaginal a ciegas', s: 'Puede desgarrar la placenta previa' },
        { id: 'eco', col: 1, row: 2, k: 'good', t: 'Ecografía transvaginal primero', s: 'Segura, no toca el orificio cervical' },
        { id: 'q', col: 2, row: 2, k: 'q', t: '¿Dolor y tono uterino?', s: 'Esa combinación separa los dos cuadros' },
        { id: 'previa', col: 3, row: 1, k: 'risk', t: 'Indolora, útero blando', s: 'Sangre roja fresca, sin contracciones' },
        { id: 'dppni', col: 3, row: 3, k: 'risk', t: 'Dolor intenso, útero leñoso', s: 'Sangre oscura, sufrimiento fetal precoz' },
      ],
      edges: [
        { from: 'ini', to: 'trap', label: 'nunca' },
        { from: 'ini', to: 'eco' },
        { from: 'eco', to: 'q' },
        { from: 'q', to: 'previa', label: 'indolora' },
        { from: 'q', to: 'dppni', label: 'dolorosa' },
      ],
      steps: [
        { show: ['ini'], note: 'Cuatro cuadros, una sola regla de partida',
          say: 'Vas a ver cuatro cuadros distintos en esta clase, pero todos parten de la misma regla, que es lo primero que te tienes que grabar.' },
        { show: ['trap'], note: 'El tacto puede desgarrar la placenta',
          say: 'Nunca hagas un tacto vaginal a ciegas en una embarazada que sangra después de las veinte semanas. Si es una placenta previa, tu dedo puede desgarrar el tejido placentario y desatar una hemorragia que no vas a poder controlar.' },
        { show: ['eco'], note: 'El transductor no entra al cuello',
          say: 'Antes de tocar nada, pide una ecografía transvaginal. Es completamente segura, porque el transductor se queda en el fondo de saco vaginal, lejos del orificio cervical.' },
        { show: ['q'], note: 'Dos preguntas separan casi todo',
          say: 'Con la placenta ya localizada, fíjate en dos datos: si hay dolor, y cómo está el tono del útero. Esa combinación te separa los dos cuadros más frecuentes de esta clase.' },
        { show: ['previa'], note: 'Sin dolor, el feto está bien',
          say: 'Si el sangrado es indoloro, con sangre roja y fresca, y el útero está blando y relajado, piensa primero en placenta previa. El feto está bien, porque nada está interrumpiendo el intercambio.' },
        { show: ['dppni'], note: 'Con dolor, el feto sí sufre',
          say: 'Pero si aparece un dolor intenso y continuo, con el útero duro como madera, y la sangre es oscura, estás frente a un desprendimiento de placenta. Ahí el feto sí sufre, y sufre pronto.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Placenta previa',
      title: 'Por qué no duele, y qué haces con ella',
      cards: [
        { title: 'Factores de riesgo', tag: 'El más importante', kind: 'criteria', items: [
          { t: 'Cicatriz de cesárea anterior', d: 'El factor de riesgo más fuerte',
            say: 'Empecemos por quién tiene más riesgo. El factor más potente, y el que más se pregunta, es una cesárea anterior.' },
          { t: 'Multiparidad y legrados previos', d: 'También edad materna sobre 35 años',
            say: 'También suman la multiparidad, los legrados uterinos previos, y la edad materna sobre los treinta y cinco años.' },
        ] },
        { title: 'Diagnóstico y manejo', tag: 'La eco TV decide', kind: 'key', items: [
          { t: 'Oclusiva o de inserción baja', d: 'Cubre el orificio, o queda a menos de dos centímetros',
            say: 'La ecografía transvaginal te dice si es oclusiva, cuando la placenta cubre por completo el orificio cervical interno, o de inserción baja, cuando el borde queda a menos de dos centímetros sin cubrirlo.' },
          { t: 'Cesárea electiva a las 37 semanas', d: 'Si sangra activo, hospitalizar ya',
            say: 'Si la paciente está tranquila, programas una cesárea electiva a las treinta y siete semanas. Si sangra de forma activa, la hospitalizas de inmediato, sin importar la edad gestacional.' },
        ] },
        { title: 'Acretismo placentario', tag: 'La complicación grave', kind: 'alert', items: [
          { t: 'Placenta previa sobre cesárea previa', d: 'Sube mucho el riesgo de acretismo',
            say: 'Y hay una combinación que tienes que reconocer: placenta previa justo sobre la cicatriz de una cesárea anterior. Ahí el riesgo de que la placenta se adhiera de forma anormal sube muchísimo, y sube más con cada cesárea.' },
          { t: 'Histerectomía con placenta in situ', d: 'Se opera sin desprenderla primero',
            say: 'Si se confirma el acretismo, la cirugía programada es una histerectomía dejando la placenta puesta, porque intentar desprenderla primero es justo lo que provoca la hemorragia exanguinante.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'DPPNI',
      title: 'El desprendimiento que duele y no siempre se ve',
      cards: [
        { title: 'Factores de riesgo', tag: 'La hipertensión manda', kind: 'criteria', items: [
          { t: 'Síndrome hipertensivo del embarazo', d: 'La causa más frecuente, la mitad de los casos',
            say: 'En el desprendimiento, el factor más frecuente, presente en la mitad de los casos, es un síndrome hipertensivo del embarazo, sea preeclampsia o hipertensión crónica.' },
          { t: 'Trauma, cocaína y tabaco', d: 'Y la sobredistensión uterina',
            say: 'También suman el traumatismo abdominal directo, el consumo de cocaína, el tabaco, y la sobredistensión uterina, por ejemplo con gemelos o mucho líquido amniótico.' },
        ] },
        { title: 'Clínica', tag: 'La tríada', kind: 'key', items: [
          { t: 'Sangre oscura, dolor, útero leñoso', d: 'Con hipertonía y contracciones seguidas',
            say: 'La tríada que buscas: sangre oscura con coágulos, un dolor abdominal súbito e intenso, y el útero duro, hipertónico, en tabla.' },
          { t: 'La eco normal no descarta nada', d: 'Solo ve el hematoma en la mitad de los casos',
            say: 'Ojo con esto: el diagnóstico es clínico, no ecográfico. La ecografía solo ve el hematoma retroplacentario en la mitad de los casos, así que una eco normal no te salva de pensar en desprendimiento.' },
        ] },
        { title: 'Complicaciones', tag: 'Se preguntan seguido', kind: 'alert', items: [
          { t: 'Coagulación intravascular diseminada', d: 'Por tromboplastina liberada al torrente',
            say: 'Las complicaciones que se preguntan: la coagulación intravascular diseminada, porque la placenta desprendida libera tromboplastina al torrente materno.' },
          { t: 'Útero de Couvelaire', d: 'Sangre infiltra el miometrio, da atonía',
            say: 'Y el útero de Couvelaire, cuando la sangre se infiltra en el miometrio y después del parto te deja una atonía muy difícil de controlar.' },
          { t: 'Cesárea de urgencia inmediata', d: 'Salvo feto muerto y madre estable',
            say: 'Y el tratamiento, casi siempre, es cesárea de urgencia inmediata. La única excepción es un feto ya muerto, con la madre estable y un parto vaginal inminente.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Las dos urgencias de minutos',
      title: 'Rotura uterina y rotura de vasa previa',
      nodes: [
        { id: 'cic', col: 0, row: 0, k: 'cause', t: 'Cicatriz de cesárea previa', s: 'El factor de riesgo clave' },
        { id: 'rot', col: 1, row: 0, k: 'risk', t: 'Rotura uterina', s: 'Dolor que cesa junto con las contracciones' },
        { id: 'lap', col: 2, row: 0, k: 'good', t: 'Laparotomía de urgencia', s: 'Extraer al feto y reparar o histerectomía' },
        { id: 'amn', col: 0, row: 2, k: 'cause', t: 'Rotura de membranas', s: 'Con vasos velamentosos sobre el cuello' },
        { id: 'vasa', col: 1, row: 2, k: 'risk', t: 'Rotura de vasa previa', s: 'Sangre cien por ciento fetal' },
        { id: 'ces', col: 2, row: 2, k: 'good', t: 'Cesárea en minutos', s: 'El feto se desangra muy rápido' },
      ],
      edges: [
        { from: 'cic', to: 'rot' }, { from: 'rot', to: 'lap' },
        { from: 'amn', to: 'vasa' }, { from: 'vasa', to: 'ces' },
      ],
      steps: [
        { show: ['cic'], note: 'Se resuelven en minutos, no en horas',
          say: 'Ahora dos urgencias que se resuelven en minutos, no en horas. La primera parte de una cicatriz de cesárea anterior.' },
        { show: ['rot'], note: 'El dolor cede y la presentación asciende',
          say: 'Durante el trabajo de parto, aparece un dolor desgarrador y brusco, seguido de un alivio raro: las contracciones cesan de golpe. La cabeza que estaba encajada asciende, y de pronto puedes palpar al feto casi bajo la piel del abdomen.' },
        { show: ['lap'], note: 'Extraer y reparar, o histerectomía',
          say: 'Eso es una rotura uterina, y el manejo es laparotomía de urgencia, para sacar al feto y reparar el útero, o hacer una histerectomía si no se puede salvar.' },
        { show: ['amn'], note: 'Parte justo al romperse las membranas',
          say: 'La segunda urgencia empieza distinto: justo al romperse las membranas, ya sea de forma espontánea o artificial.' },
        { show: ['vasa'], note: 'Madre estable, feto en shock',
          say: 'Si hay vasos umbilicales que cruzan las membranas por delante de la presentación, se desgarran con la rotura, y ahí aparece sangrado inmediato con una bradicardia fetal catastrófica. La madre, en cambio, está perfectamente estable, porque esa sangre es cien por ciento del feto.' },
        { show: ['ces'], note: 'El feto no tiene tiempo que perder',
          say: 'Por eso el tratamiento es cesárea en minutos: el feto se desangra mucho más rápido de lo que crees, y ahí no hay tiempo que perder.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos los cuatro cuadros en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cuatro cuadros, una sola bandera cada uno',
      head: ['Cuadro', 'Dolor y tono', 'Bandera clave', 'Conducta'],
      rows: [
        { cells: ['Placenta previa', 'Indolora, útero blando', 'Sangre roja fresca', 'Eco TV, cesárea a las 37 semanas'],
          say: 'Repasemos en una tabla. Placenta previa: indolora, útero blando, sangre roja fresca. Eco transvaginal, y cesárea a las treinta y siete semanas.' },
        { cells: ['DPPNI', 'Dolor intenso, útero leñoso', 'La eco normal no descarta', 'Cesárea de urgencia'],
          say: 'Desprendimiento: dolor intenso, útero leñoso. Y ojo, una ecografía normal no lo descarta. Cesárea de urgencia.' },
        { cells: ['Rotura uterina', 'Cesa el dolor y las contracciones', 'La presentación asciende', 'Laparotomía inmediata'],
          say: 'Rotura uterina: el dolor y las contracciones cesan de golpe, y la presentación fetal asciende. Laparotomía inmediata.' },
        { cells: ['Rotura de vasa previa', 'Indolora, madre estable', 'Bradicardia fetal catastrófica', 'Cesárea en minutos'],
          say: 'Vasa previa: indolora, madre estable, pero con una bradicardia fetal catastrófica. Cesárea en minutos.' },
        { cells: ['Acretismo placentario', 'Previa sobre cesárea previa', 'Sube con cada cesárea', 'Histerectomía programada'],
          say: 'Y el acretismo: placenta previa sobre una cicatriz de cesárea, con un riesgo que sube con cada cesárea nueva. Se opera con histerectomía programada, dejando la placenta puesta.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Embarazada de 34 semanas, con una cesárea anterior, consulta por sangrado vaginal rojo fresco y abundante, de inicio súbito hace 1 hora, sin dolor ni contracciones. Al examen: presión arterial 110/70 mmHg, afebril, abdomen blando e indoloro, sin dinámica uterina. El monitor fetal muestra latidos de 142 por minuto, reactivos. El interno se pone guantes para hacer un tacto vaginal.',
      question: '¿Cuál es la conducta más adecuada en este momento?',
      options: [
        { letter: 'A', text: 'Realizar el tacto vaginal para evaluar la dilatación cervical' },
        { letter: 'B', text: 'Detener el tacto vaginal y solicitar una ecografía transvaginal' },
        { letter: 'C', text: 'Iniciar tocolíticos endovenosos de inmediato' },
        { letter: 'D', text: 'Solicitar una tomografía computarizada de abdomen y pelvis' },
        { letter: 'E', text: 'Indicar deambulación y dar el alta a control ambulatorio' },
      ],
      correct: 'B',
      explanation: 'Sangrado indoloro, rojo fresco, con útero blando y feto reactivo: cuadro típico de placenta previa. Antes de cualquier tacto vaginal hay que conocer la posición de la placenta con ecografía transvaginal, que es segura y no la toca. El tacto puede desgarrarla y provocar una hemorragia exanguinante.',
      say: {
        stem: 'Vamos con un caso. Embarazada de treinta y cuatro semanas, con una cesárea anterior, con sangrado vaginal rojo fresco y abundante, que empezó de golpe hace una hora, sin dolor ni contracciones. Está con presión normal, afebril, y su abdomen es blando e indoloro. El monitor fetal está reactivo, y el interno se pone los guantes para hacer un tacto vaginal.',
        question: '¿Cuál es la conducta más adecuada en este momento?',
        options: 'Tienes cinco opciones: dejar que haga el tacto vaginal, detenerlo y pedir una ecografía transvaginal, iniciar tocolíticos, pedir un TAC de abdomen, o dar el alta con control ambulatorio. Piénsalo.',
        answer: 'Es la B. Todo en este caso apunta a placenta previa: sangre roja fresca, indolora, útero blando y feto bien. Antes de que ese tacto vaginal termine mal, tienes que detenerlo y confirmar la posición de la placenta con ecografía transvaginal. El tacto es justamente la trampa de esta pregunta, y los tocolíticos no tienen ningún rol si no hay contracciones.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 40',
      stem: 'Una paciente multípara, con un parto anterior por cesárea, cursando un nuevo embarazo de 35 semanas, consulta por metrorragia moderada. Al examen físico presenta una contracción uterina cada diez minutos y se realiza ecografía que visualiza una placenta posterior que sobrepasa en dos centímetros el orificio cervical. El ecodoppler materno-fetal es normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar tocolíticos' },
        { letter: 'B', text: 'Inducir el parto con misoprostol' },
        { letter: 'C', text: 'Administrar corticoides para maduración pulmonar' },
        { letter: 'D', text: 'Repetir la ecografía a las 37 semanas' },
        { letter: 'E', text: 'Realizar cesárea' },
      ],
      correct: 'E',
      explanation: 'Placenta que cubre el orificio cervical interno a esta edad gestacional es placenta previa oclusiva. Con 35 semanas cumplidas, el riesgo de prematurez ya es bajo, así que se interrumpe con cesárea sin esperar.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil dieciséis. Paciente multípara, con una cesárea anterior, cursando un nuevo embarazo de treinta y cinco semanas, con metrorragia moderada. La ecografía muestra una placenta posterior que cubre el orificio cervical interno, y el doppler materno fetal es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: dar tocolíticos, inducir con misoprostol, dar corticoides, repetir la ecografía a las treinta y siete semanas, o hacer una cesárea. Piénsalo.',
        answer: 'Es la E, cesárea. Es una placenta previa oclusiva, y con treinta y cinco semanas ya cumplidas el riesgo de la prematurez es bajo, así que no hay ninguna razón para esperar. Ni los tocolíticos ni los corticoides tienen sentido aquí, y esperar hasta las treinta y siete semanas solo prolonga el riesgo de un sangrado mayor.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 49',
      stem: 'Una paciente de 33 años, cursando un embarazo de 36 semanas, consulta por contracciones uterinas dolorosas y metrorragia. Al examen se palpa un útero con tono aumentado y tres contracciones uterinas en 10 minutos. La especuloscopía muestra sangre roja oscura en cantidad moderada, sin dilatación cervical. Los latidos cardiofetales se auscultan a 130 por minuto.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar cesárea de urgencia' },
        { letter: 'B', text: 'Realizar maduración pulmonar y conducta expectante' },
        { letter: 'C', text: 'Inducir el trabajo de parto con misoprostol' },
        { letter: 'D', text: 'Solicitar Doppler fetal' },
        { letter: 'E', text: 'Administrar tocolíticos endovenosos' },
      ],
      correct: 'A',
      explanation: 'Dolor, hipertonía y sangre oscura son un DPPNI. Sin dilatación cervical, la vía más expedita para interrumpir de inmediato es la cesárea de urgencia.',
      say: {
        stem: 'Esta es del EUNACOM de diciembre de dos mil veinticinco. Paciente de treinta y tres años, con un embarazo de treinta y seis semanas, contracciones dolorosas y metrorragia. Al examen, el útero tiene el tono aumentado, con tres contracciones cada diez minutos, y la especuloscopía muestra sangre oscura, moderada, sin dilatación cervical. Los latidos fetales están en ciento treinta.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: cesárea de urgencia, maduración pulmonar con conducta expectante, inducir con misoprostol, pedir un doppler fetal, o dar tocolíticos. Piénsalo.',
        answer: 'Es la A. Dolor, útero con tono aumentado y sangre oscura son un desprendimiento de placenta. Como no hay dilatación cervical, la vía más rápida para interrumpir de inmediato es la cesárea de urgencia. Los tocolíticos y la conducta expectante están contraindicados con un desprendimiento en curso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 51',
      stem: 'Una paciente de 38 años, cursando embarazo de 38 semanas, inicia trabajo de parto y es ingresada al hospital. Al examen físico presenta cuatro contracciones uterinas cada 10 minutos y se palpa la cabeza fetal encajada, en el tercer plano de Hodge. Durante el parto, evoluciona con metrorragia escasa y dolor abdominal, constatándose elevación de la presentación fetal y cese de las contracciones uterinas. Tiene antecedente de una cesárea previa. El monitoreo fetal muestra descenso de los latidos cardiofetales a 90 por minuto.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Esperar evolución espontánea' },
        { letter: 'B', text: 'Realizar cesárea de urgencia' },
        { letter: 'C', text: 'Realizar reanimación fetal' },
        { letter: 'D', text: 'Administrar tocolíticos endovenosos' },
        { letter: 'E', text: 'Solicitar pH de cuero cabelludo' },
      ],
      correct: 'B',
      explanation: 'Cese súbito de las contracciones, ascenso de la presentación fetal y bradicardia, con cesárea previa: rotura uterina. La conducta es cesárea de urgencia inmediata, sin perder tiempo en otros exámenes.',
      say: {
        stem: 'Otra pregunta real, del mismo examen de diciembre de dos mil veinticinco. Paciente de treinta y ocho años, con un embarazo de treinta y ocho semanas, en trabajo de parto, con la cabeza fetal encajada. De pronto aparece metrorragia escasa, dolor abdominal, la presentación fetal asciende y las contracciones cesan. Tiene el antecedente de una cesárea previa, y el monitor fetal muestra los latidos bajando a noventa por minuto.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: esperar evolución espontánea, cesárea de urgencia, reanimación fetal, tocolíticos endovenosos, o pedir un pH de cuero cabelludo. Piénsalo.',
        answer: 'Es la B. El cese súbito de las contracciones, la presentación que asciende y la bradicardia, en una paciente con cesárea previa, son la rotura uterina de libro. Aquí no hay tiempo para exámenes intermedios: la conducta es cesárea de urgencia inmediata.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 124',
      stem: 'Una paciente, cursando embarazo de término, inicia contracciones uterinas intensas. Al examen obstétrico se palpan tres contracciones cada 10 minutos y dilatación cervical de 5 centímetros. Al romper las membranas, se produce metrorragia moderada, seguida de bradicardia fetal.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Rotura uterina' },
        { letter: 'B', text: 'Desprendimiento de placenta normoinserta' },
        { letter: 'C', text: 'Placenta previa' },
        { letter: 'D', text: 'Rotura de vasa previa' },
        { letter: 'E', text: 'Procidencia de cordón umbilical' },
      ],
      correct: 'D',
      explanation: 'Metrorragia inmediatamente después de romper membranas, seguida de bradicardia fetal, sin dolor ni compromiso materno: rotura de vasa previa. La rotura uterina tiene dolor y cesación de contracciones; el DPPNI tiene hipertonía; la placenta previa no sangra recién al romper membranas.',
      say: {
        stem: 'La última pregunta real, del EUNACOM de julio de dos mil dieciséis. Paciente de término, con contracciones intensas y cinco centímetros de dilatación. Justo al romperse las membranas, aparece una metrorragia moderada, seguida de bradicardia fetal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: rotura uterina, desprendimiento de placenta, placenta previa, rotura de vasa previa, o procidencia de cordón. Piénsalo.',
        answer: 'Es la D, rotura de vasa previa. Fíjate en la secuencia: la metrorragia aparece justo al romper las membranas, seguida de bradicardia fetal, sin dolor ni compromiso de la madre. Eso es exactamente lo que distingue a la vasa previa: la rotura uterina duele y frena las contracciones, y el desprendimiento viene con útero hipertónico. Aquí no hay ninguno de los dos.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La regla que abre todo', tag: 'Siempre primero', kind: 'key', items: [
          { t: 'Nunca tacto vaginal a ciegas', d: 'Primero localiza la placenta con ecografía',
            say: 'Cerremos con las reglas de oro. Nunca hagas un tacto vaginal a ciegas: primero localiza la placenta con una ecografía transvaginal.' },
          { t: 'Indolora es previa, dolorosa es desprendimiento', d: 'El dolor y el tono separan casi todo',
            say: 'El dolor y el tono uterino separan casi todo: indolora y blanda es placenta previa, dolorosa y leñosa es desprendimiento.' },
        ] },
        { title: 'Las urgencias de minutos', tag: 'Con cesárea previa', kind: 'alert', items: [
          { t: 'Cesa el dolor: rotura uterina', d: 'Laparotomía inmediata',
            say: 'Si el dolor y las contracciones cesan de golpe con antecedente de cesárea, piensa en rotura uterina: laparotomía inmediata.' },
          { t: 'Sangra al romper membranas: vasa previa', d: 'Madre estable, feto en shock',
            say: 'Y si el sangrado aparece justo al romper membranas, con la madre estable pero el feto en shock, es rotura de vasa previa: cesárea en minutos.' },
        ] },
        { title: 'Lo que se pregunta seguido', tag: 'No lo olvides', kind: 'pharma', items: [
          { t: 'Acretismo: previa sobre cesárea previa', d: 'Histerectomía programada',
            say: 'Y no olvides el acretismo, cuando la placenta previa está sobre una cicatriz de cesárea. Si te llevas una sola idea de hoy: nunca toques antes de saber dónde está la placenta, y el dolor te dice todo lo demás. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Metrorragia de la segunda mitad: qué acompaña al sangrado',
    root: N('start', 'Metrorragia después de 20 semanas', 'Nunca tacto vaginal a ciegas',
      'Juntemos los cuatro cuadros en un árbol. Siempre parte igual: nunca metas el dedo antes de saber dónde está la placenta.',
      ['Indolora, útero blando', N('ok', 'Placenta previa', 'Eco TV + cesárea electiva a las 37 semanas',
        'Sangre roja fresca, sin dolor, útero blando: placenta previa. Confirmas con ecografía transvaginal, y programas cesárea electiva a las treinta y siete semanas.')],
      ['Dolor + útero leñoso', N('alert', 'DPPNI', 'Cesárea de urgencia inmediata',
        'Dolor intenso, útero duro como madera, sangre oscura: desprendimiento de placenta. Cesárea de urgencia inmediata, y ojo, la eco normal no lo descarta.')],
      ['Cesárea previa + cese de contracciones', N('alert', 'Rotura uterina', 'Laparotomía de urgencia',
        'Dolor desgarrador que cede junto con las contracciones, y la presentación fetal asciende, en una paciente con cesárea previa: rotura uterina. Laparotomía de urgencia.')],
      ['Sangra justo al romper membranas', N('alert', 'Rotura de vasa previa', 'Cesárea en minutos',
        'Sangrado inmediato al romper membranas, con bradicardia fetal catastrófica y la madre estable: rotura de vasa previa. La sangre es del feto, y no hay minutos que perder: cesárea en minutos.')]),
  },
};
