// Clase 19.17 — guion docente reescrito (voz "tú", texto en pantalla corto; ver gastro-01.cjs y gastro-02.cjs para el formato).
// Fuente clínica: books/scripts/dataset_obstetricia_bloque_4.cjs (ob-17).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-17',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Qué hacer cuando el hombro se atasca y cómo leer el monitoreo fetal',
      say: 'Bienvenido. Hoy vemos dos urgencias que se juntan en la sala de partos: la distocia de hombros y la lectura del monitoreo fetal intraparto. Es un tema de máxima rentabilidad, con varias preguntas reales en el banco. Vas a aprender qué maniobra haces primero cuando el hombro se atasca, cuál está prohibida, y cómo una desaceleración te dice si el niño está bien o si tienes que actuar ya. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Trastornos de la progresión',
      title: '¿Cuándo decimos que el parto no avanza?',
      cards: [
        { title: 'Fase activa y descenso', tag: 'Se mide en horas', kind: 'criteria', items: [
          { t: 'Fase activa lenta', d: 'Dilatación que avanza menos de un centímetro por hora',
            say: 'Empecemos por lo básico: cuándo decimos que un parto no progresa. Si la dilatación avanza a menos de un centímetro cada hora, con buena dinámica uterina, tienes una fase activa prolongada.' },
          { t: 'Detención de dos horas', d: 'La dilatación se detiene con buena dinámica',
            say: 'Y si la dilatación se detiene por completo durante dos horas o más, aunque las contracciones sean adecuadas, es una detención secundaria. En el descenso, la misma idea: una hora sin avanzar en la multípara, dos en la primípara.' },
        ] },
        { title: 'Desproporción céfalo pélvica', tag: 'Diagnóstico clínico', kind: 'alert', items: [
          { t: 'La cabeza no baja', d: 'Pese a buena dinámica o prueba con oxitocina',
            say: 'Hay una causa que tienes que sospechar cuando nada de esto funciona: la desproporción entre la cabeza fetal y tu pelvis materna. Se plantea cuando la dilatación o el descenso se detienen a pesar de una dinámica adecuada, o de una prueba con oxitocina bien hecha.' },
          { t: 'Suturas cabalgadas', d: 'Asinclitismo y caput succedáneo voluminoso',
            say: 'Fíjate en los signos que te lo confirman: el asinclitismo, las suturas del cráneo que se cabalgan entre sí, y un caput succedáneo grande. Esa combinación te lleva a cesárea.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Trastornos de la progresión',
      title: 'La prueba de trabajo de parto',
      cards: [
        { title: 'Cuándo se hace', tag: 'Vía de parto dudosa', kind: 'key', items: [
          { t: 'Feto cefálico, pelvis límite', d: 'Sospecha leve de desproporción',
            say: 'Cuando dudas si tu paciente puede parir por vía vaginal, no decides a ciegas: haces una prueba de trabajo de parto. Es observar el parto de forma controlada, con el feto cefálico, para decidir según cómo progresan la dilatación y el descenso.' },
          { t: 'Cesárea previa, añosa', d: 'Cesárea segmentaria o feto de peso límite',
            say: 'La usas ante una pelvis límite o un feto grande, en el trabajo de parto tras una cesárea segmentaria previa, y en la primípara añosa con un feto de peso límite.' },
        ] },
        { title: 'Condiciones', tag: 'Se exigen todas', kind: 'criteria', items: [
          { t: 'Feto único, cefálico y vivo', d: 'Sin signos de hipoxia',
            say: 'Para hacerla necesitas un feto único, cefálico y vivo, sin signos de hipoxia, y a tu paciente en fase activa, con cinco centímetros o más. Si las membranas están íntegras, las rompes.' },
          { t: 'Dinámica de 3 a 5 en 10 minutos', d: 'Con monitoreo continuo y quirófano listo',
            say: 'La dinámica tiene que ser adecuada, de tres a cinco contracciones en diez minutos, y si no alcanza, ayudas con oxitocina. Todo con monitoreo cardiofetal continuo, analgesia y un quirófano disponible.' },
        ] },
        { title: 'Resultado', tag: 'Progresa o cesárea', kind: 'alert', items: [
          { t: 'Éxito: un centímetro por hora', d: 'Y la presentación desciende',
            say: 'La prueba es exitosa si hay progreso: la dilatación avanza al menos un centímetro por hora y la presentación desciende.' },
          { t: 'Fracaso: detención de 2 horas', d: 'Con buena dinámica, indica cesárea',
            say: 'Y fracasa si la dilatación se detiene dos horas o más con buena dinámica, o cuatro horas con dinámica inadecuada, o seis horas con oxitocina. También si se detiene el descenso o aparecen signos de sufrimiento fetal. No la haces si la desproporción es evidente, si hay placenta previa, una presentación anómala o una cicatriz uterina corporal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Presentaciones anómalas',
      title: 'Cuando no viene la cabeza',
      cards: [
        { title: 'Cuáles son', tag: 'Polo distinto a la cabeza', kind: 'key', items: [
          { t: 'Podálica: 3 a 4 por ciento', d: 'De nalgas puras, la más frecuente',
            say: 'Hablas de presentación anómala cuando el polo que se ofrece al estrecho superior no es la cabeza flexionada. La podálica ocurre en tres a cuatro por ciento de los embarazos de término, y la más frecuente es la de nalgas puras.' },
          { t: 'Situación transversa', d: 'Eje fetal perpendicular, en multíparas',
            say: 'En la situación transversa el eje del feto cruza el de la madre, y se ve sobre todo en multíparas. También son anómalas la presentación de cara y de frente.' },
        ] },
        { title: 'Qué la favorece', tag: 'Algo ocupa el espacio', kind: 'criteria', items: [
          { t: 'Prematuridad, líquido alterado', d: 'Podálica frecuente antes de 32 semanas',
            say: 'Se asocia a prematuridad, porque antes de las treinta y dos semanas la podálica es más frecuente, y a polihidramnios u oligohidramnios.' },
          { t: 'Placenta previa, mioma, gemelar', d: 'Y malformaciones fetales o uterinas',
            say: 'También a la multiparidad, la placenta previa, los miomas, las malformaciones uterinas, el embarazo múltiple, y malformaciones fetales como la hidrocefalia.' },
        ] },
        { title: 'Cómo la sospechas', tag: 'Leopold y ecografía', kind: 'normal', items: [
          { t: 'Polo duro y redondo en el fondo', d: 'Latidos sobre el ombligo',
            say: 'En la podálica, con las maniobras de Leopold palpas el polo duro, redondo y balotable en el fondo, y auscultas los latidos sobre el ombligo. En la transversa, el útero es más ancho que alto, con el fondo vacío.' },
          { t: 'La ecografía confirma', d: 'Y descarta placenta previa',
            say: 'La ecografía confirma la presentación y descarta placenta previa, malformaciones y anomalías del útero.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Presentaciones anómalas',
      title: 'Qué haces con una podálica o una transversa',
      nodes: [
        { id: 'pod', col: 0, row: 1, k: 'start', t: 'Podálica a las 36 semanas', s: 'Confirmada por ecografía' },
        { id: 'vce', col: 1, row: 0, k: 'good', t: 'Versión externa cefálica', s: '36 a 37 semanas, éxito de 50 a 60 por ciento' },
        { id: 'ces', col: 2, row: 1, k: 'refer', t: 'Cesárea electiva', s: 'A las 39 semanas' },
        { id: 'tra', col: 2, row: 2, k: 'alert', t: 'Transversa en trabajo de parto', s: 'Cesárea, no hay parto vaginal' },
      ],
      edges: [
        { from: 'pod', to: 'vce', label: 'sin contraindicaciones' },
        { from: 'vce', to: 'ces', label: 'si fracasa' },
        { from: 'pod', to: 'tra' },
      ],
      steps: [
        { show: ['pod'], note: 'Primero confirmas y buscas causa',
          say: 'La conducta parte con la ecografía confirmando la presentación y descartando causas, como una placenta previa.' },
        { show: ['vce'], note: 'Con monitoreo y tocolisis',
          say: 'A las treinta y seis a treinta y siete semanas ofreces la versión externa cefálica, que resulta en cincuenta a sesenta por ciento de los casos. Se hace con monitoreo fetal, ecografía previa y tocolisis, y a la Rh negativa se le da anti-D. No la haces con placenta previa, rotura de membranas, oligohidramnios, sangrado, cicatriz uterina ni embarazo múltiple.' },
        { show: ['ces'], note: 'El parto podálico, solo en centro entrenado',
          say: 'Si la presentación anómala persiste, programas una cesárea electiva a las treinta y nueve semanas. El parto vaginal podálico se reserva para un centro con equipo entrenado y criterios estrictos.' },
        { show: ['tra'], note: 'Riesgo de prolapso de cordón y rotura uterina',
          say: 'Y una situación transversa ya en trabajo de parto no se puede resolver por vía vaginal: cesárea, por el riesgo de prolapso de cordón y de rotura uterina. Lo mismo si hay prolapso de cordón con una presentación no encajada y membranas rotas: cesárea inmediata.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Distocia de hombros',
      title: '¿Por qué se atasca el hombro?',
      nodes: [
        { id: 'mac', col: 0, row: 0, k: 'cause', t: 'Macrosomía fetal', s: 'Feto grande para el canal' },
        { id: 'dbt', col: 0, row: 1, k: 'cause', t: 'Diabetes gestacional', s: 'Favorece el crecimiento fetal' },
        { id: 'imp', col: 1, row: 0, k: 'mech', t: 'Hombro atascado', s: 'Queda detrás del pubis' },
        { id: 'tor', col: 2, row: 0, k: 'alert', t: 'Signo de la tortuga', s: 'La cabeza se retrae al periné' },
      ],
      edges: [
        { from: 'mac', to: 'imp' }, { from: 'dbt', to: 'mac', label: 'favorece' },
        { from: 'imp', to: 'tor' },
      ],
      steps: [
        { show: ['mac', 'dbt'], note: 'Feto grande, hombro que no cabe',
          say: 'Piensa primero en quién llega a esto. El factor de riesgo principal es la macrosomía fetal, un feto de más de cuatro mil a cuatro mil quinientos gramos. Y la diabetes gestacional favorece justo ese crecimiento. Súmale la obesidad materna, un parto instrumental previo, y el antecedente de una distocia de hombros anterior.' },
        { show: ['imp'], note: 'El hombro queda detrás del pubis',
          say: 'Con un hombro grande, la cabeza sale, pero el hombro anterior queda atascado detrás de tu sínfisis púbica, y no logra desprenderse con la tracción suave habitual.' },
        { show: ['tor'], note: 'Cabeza que sale y se retrae',
          say: 'Y el signo que te avisa esta emergencia es inconfundible: la cabeza fetal se desprende, pero de inmediato se retrae con fuerza contra el periné. Mira esta foto: la cabeza apenas asoma y queda aplastada contra la vulva. Es el signo de la tortuga, y ahí tienes que actuar en minutos.',
          photo: { src: 'biblioteca/14_obstetricia/ob-17/385_signo_tortuga__knoop_p292.jpg', label: 'Signo de la tortuga', at: 'Mira esta foto', credit: 'The Atlas of Emergency Medicine (Knoop), p. 292' } },
      ],
    },

    {
      type: 'points',
      kicker: 'Distocia de hombros',
      title: 'Lo que nunca debes hacer',
      cards: [
        { title: 'Maniobras prohibidas', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Kristeller', d: 'Presión sobre el fondo uterino',
            say: 'Antes de darte la secuencia correcta, tienes que grabarte lo que está prohibido. La maniobra de Kristeller, esa presión sobre el fondo del útero, impacta todavía más el hombro contra el pubis y puede romper tu útero.' },
          { t: 'Traccionar la cabeza', d: 'Rompe el plexo braquial',
            say: 'Y tampoco tracciones ni balancees la cabeza con fuerza. Eso elonga las raíces del plexo braquial y te deja una parálisis de Erb-Duchenne, con el brazo en postura de propina de mozo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Distocia de hombros',
      title: 'La secuencia de rescate',
      nodes: [
        { id: 'mcr', col: 0, row: 1, k: 'start', t: 'Maniobra de McRoberts', s: 'Hiperflexión de los muslos' },
        { id: 'maz', col: 1, row: 1, k: 'mech', t: 'Presión suprapúbica', s: 'Maniobra de Mazzanti' },
        { id: 'int', col: 2, row: 0, k: 'refer', t: 'Maniobras internas', s: 'Rubin, Woods, Jacquemier' },
        { id: 'ult', col: 3, row: 1, k: 'alert', t: 'Último recurso', s: 'Zavanelli o fractura de clavícula' },
      ],
      edges: [
        { from: 'mcr', to: 'maz' }, { from: 'maz', to: 'int', label: 'si no cede' },
        { from: 'int', to: 'ult', label: 'si falla todo' },
      ],
      steps: [
        { show: ['mcr'], note: 'Resuelve más del setenta por ciento sola',
          say: 'La primera maniobra, y la que más rinde, es la de McRoberts: hiperflexionas y abduces los muslos de tu paciente sobre el abdomen. Eso aplana la curvatura lumbar y rota tu pubis hacia la cabeza, liberando el hombro en la mayoría de los casos. En este dibujo ves los muslos flexionados y, además, la presión suprapúbica.',
          photo: { src: 'biblioteca/14_obstetricia/ob-17/01_maniobra_mcroberts__williams_p515.jpg', label: 'McRoberts + suprapúbica', at: 'En este dibujo', credit: 'Williams Obstetricia (ed. en español), Fig. 20-14, p. 515' } },
        { show: ['maz'], note: 'Un ayudante presiona desde afuera',
          say: 'Junto con eso, la presión suprapúbica, la maniobra de Mazzanti: un ayudante presiona con fuerza justo sobre el pubis, hacia abajo, para achicar el diámetro del hombro.' },
        { show: ['int'], note: 'Se entra a la vagina con la mano',
          say: 'Si con esas dos no basta, pasas a las maniobras internas: rotar el hombro con la mano, la maniobra de Rubin o de Woods, o extraer el brazo posterior, la maniobra de Jacquemier.' },
        { show: ['ult'], note: 'Situaciones extremas, muy poco frecuentes',
          say: 'Y si todo eso falla, quedan los recursos extremos: fracturar la clavícula a propósito, o la maniobra de Zavanelli, que devuelve la cabeza al útero para hacer una cesárea de urgencia.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Monitoreo fetal',
      title: 'Lo que dice cada desaceleración',
      nodes: [
        { id: 'bas', col: 0, row: 0, k: 'start', t: 'Parámetros normales', s: 'Basal 110 a 160, buena variabilidad' },
        { id: 'di1', col: 1, row: 0, k: 'good', t: 'Desaceleración temprana', s: 'Coincide con la contracción' },
        { id: 'di2', col: 1, row: 2, k: 'risk', t: 'Desaceleración tardía', s: 'Empieza después del acmé' },
        { id: 'di3', col: 2, row: 1, k: 'mech', t: 'Desaceleración variable', s: 'Brusca, en forma de V' },
        { id: 'sin', col: 3, row: 2, k: 'alert', t: 'Patrón sinusoidal', s: 'Ondas suaves, sin aceleraciones' },
      ],
      edges: [
        { from: 'bas', to: 'di1', label: 'compresión cefálica' },
        { from: 'bas', to: 'di2', label: 'hipoxia placentaria' },
        { from: 'bas', to: 'di3', label: 'cordón comprimido' },
        { from: 'di2', to: 'sin', label: 'anemia fetal grave' },
      ],
      steps: [
        { show: ['bas'], note: 'Punto de partida para juzgar todo lo demás',
          say: 'Ahora lo que más se pregunta: leer el monitoreo. Lo normal es una frecuencia basal entre ciento diez y ciento sesenta latidos por minuto, con variabilidad moderada y aceleraciones presentes. Desde ahí juzgas cada desaceleración.' },
        { show: ['di1'], note: 'Benigna, no requiere nada',
          say: 'La desaceleración temprana empieza junto con la contracción y termina junto con ella, como en un espejo. En este registro ves cómo la caída copia la contracción. Es solo la cabeza comprimiéndose contra tu pelvis, un reflejo vagal benigno. No indica hipoxia y no cambias nada.',
          photo: { src: 'biblioteca/14_obstetricia/ob-17/01_deceleraciones-tardias-variables-precoce_alt2__cto-gyo_p173.jpg', label: 'Desaceleraciones precoces', at: 'En este registro', credit: 'Manual CTO Ginecología y Obstetricia 14.ª ed., p. 173' } },
        { show: ['di2'], note: 'Aquí está el peligro real',
          photo: { src: 'biblioteca/14_obstetricia/ob-17/01_deceleraciones-tardias-variables-precoce_1__cto-gyo_p172.jpg', label: 'Desaceleraciones tardías', at: 'Mira cómo', credit: 'Manual CTO Ginecología y Obstetricia 14.ª ed., p. 172' },
          say: 'La tardía es distinta: empieza después del punto más alto de la contracción y se recupera lento. Mira cómo la caída llega tarde respecto de la contracción. Refleja una insuficiencia de la placenta con hipoxia fetal. Si se repite, o pierde variabilidad, hablas de acidosis y necesitas actuar.' },
        { show: ['di3'], note: 'La más frecuente de todas',
          photo: { src: 'biblioteca/14_obstetricia/ob-17/01_deceleraciones-tardias-variables-precoce_alt1__cto-gyo_p173.jpg', label: 'Desaceleraciones variables', at: 'en este trazado', credit: 'Manual CTO Ginecología y Obstetricia 14.ª ed., p. 173' },
          say: 'La variable es brusca, en forma de uve, y no guarda relación fija con la contracción; en este trazado se ven las caídas puntiagudas. Nace de la compresión del cordón umbilical. Es grave si dura más de un minuto, o si la frecuencia baja de setenta latidos.' },
        { show: ['sin'], note: 'Rarísimo, pero gravísimo',
          say: 'Y el patrón sinusoidal, esa ondulación suave y regular sin ninguna aceleración, es la firma de una anemia fetal grave. Guarda esta imagen, porque casi no se repite en el examen, pero cuando aparece, es inconfundible.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Monitoreo fetal',
      title: 'Las tres categorías que deciden la conducta',
      cards: [
        { title: 'Categoría uno', tag: 'Trazado seguro', kind: 'key', items: [
          { t: 'Todo normal', d: 'Sin desaceleraciones tardías ni variables',
            say: 'El monitoreo se resume en tres categorías. La uno es el trazado seguro: basal y variabilidad normales, aceleraciones presentes, y sin desaceleraciones tardías ni variables. Mira este registro normal, sin ninguna caída. Ahí sigues el parto sin tocar nada.',
            photo: { src: 'biblioteca/14_obstetricia/ob-17/02_rctg-normal__cto-gyo_p171.jpg', label: 'Registro normal', at: 'Mira este registro normal', credit: 'Manual CTO Ginecología y Obstetricia 14.ª ed., p. 171' } },
        ] },
        { title: 'Categoría dos', tag: 'Vigilar de cerca', kind: 'criteria', items: [
          { t: 'Trazado indeterminado', d: 'Vigilancia, hidratación, cambiar de posición',
            say: 'La dos es indeterminada: bradicardia con buena variabilidad, o desaceleraciones variables frecuentes. No es tranquilizador ni ominoso. Cambias de posición, hidratas, y vigilas de cerca.' },
        ] },
        { title: 'Categoría tres', tag: 'Cesárea de urgencia', kind: 'alert', items: [
          { t: 'Sin variabilidad', d: 'Con desaceleraciones tardías o bradicardia',
            say: 'Y la tres es la emergencia: variabilidad ausente, junto con desaceleraciones tardías recurrentes, variables graves o bradicardia sostenida. Antes de la cesárea intentas la reanimación intrauterina: acuestas a tu paciente de lado, suspendes la oxitocina, le das volumen y oxígeno. Si no revierte, cesárea inmediata.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      light: true,
      kicker: 'En movimiento',
      title: 'Las tres desaceleraciones, en tiempo real',
      images: [
        { src: 'biblioteca/14_obstetricia/ob-17/A1_desaceleracion_precoz__animacion.svg', label: 'Precoz', credit: 'Animación propia (esquema didáctico)' },
        { src: 'biblioteca/14_obstetricia/ob-17/A2_desaceleracion_tardia__animacion.svg', label: 'Tardía', credit: 'Animación propia (esquema didáctico)' },
        { src: 'biblioteca/14_obstetricia/ob-17/A3_desaceleracion_variable__animacion.svg', label: 'Variable', credit: 'Animación propia (esquema didáctico)' },
      ],
      steps: [
        { note: 'Espejo de la contracción',
          say: 'Mira cómo se dibujan las dos curvas al mismo tiempo: arriba la frecuencia cardíaca fetal, abajo la contracción. En la precoz, la frecuencia baja justo cuando sube la contracción, y su punto más bajo cae exactamente en el acmé, la línea punteada. Es un espejo. Se debe a la compresión de la cabeza y es benigna.' },
        { note: 'Empieza después del acmé',
          say: 'Ahora la tardía. Fíjate en la línea punteada: la contracción ya llegó a su punto más alto y la frecuencia recién empieza a bajar. Su punto más bajo llega después, y se recupera lento, cuando la contracción ya terminó. Ese retraso es la placenta que no alcanza a oxigenar: hipoxia.' },
        { note: 'Brusca, en V, sin relación fija',
          say: 'Y la variable: caídas bruscas, en forma de uve, que aparecen antes, durante o después de la contracción, sin un patrón fijo. Es el cordón que se comprime. Es grave si dura más de un minuto o si la frecuencia baja mucho.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos las dos urgencias de hoy en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en este tema',
      head: ['Situación', 'Se hace', 'Error frecuente'],
      rows: [
        { cells: ['Hombro atascado, signo de la tortuga', 'McRoberts más presión suprapúbica', 'Presionar el fondo uterino'],
          say: 'Repasemos las trampas. Con el signo de la tortuga, haces McRoberts más presión suprapúbica. El error clásico es presionar el fondo del útero, la maniobra de Kristeller.' },
        { cells: ['Desaceleración en espejo con la contracción', 'Observar, es benigna', 'Tratarla como sufrimiento fetal'],
          say: 'Una desaceleración que copia la contracción, en espejo, es temprana y benigna. El error es tratarla como si fuera sufrimiento fetal.' },
        { cells: ['Tardías recurrentes sin variabilidad', 'Reanimación intrauterina y cesárea', 'Aumentar la oxitocina'],
          say: 'Desaceleraciones tardías que se repiten, sin variabilidad, son categoría tres: reanimación intrauterina y cesárea. El error es subir la oxitocina, que empeora todo.' },
        { cells: ['Variables ocasionales, buena variabilidad', 'Vigilar, cambiar de posición', 'Indicar cesárea de inmediato'],
          say: 'Y unas pocas desaceleraciones variables, con buena variabilidad de fondo, solo piden vigilancia y cambio de posición. Indicar cesárea de inmediato ahí es adelantarse.' },
        { cells: ['Podálica a las 36 semanas', 'Versión externa; si falla, cesárea a las 39', 'Parto vaginal podálico sin equipo'],
          say: 'Una presentación podálica a las treinta y seis semanas: ofreces la versión externa cefálica, y si falla, cesárea electiva a las treinta y nueve. El error es dejarla ir a parto vaginal podálico sin un equipo entrenado.' },
        { cells: ['Transversa en trabajo de parto', 'Cesárea', 'Intentar el parto vaginal'],
          say: 'Una situación transversa en trabajo de parto no tiene vía vaginal: es cesárea, por el riesgo de prolapso de cordón y de rotura uterina.' },
        { cells: ['Dilatación detenida dos horas, buena dinámica', 'Prueba fracasada: cesárea', 'Seguir esperando sin límite'],
          say: 'Y en una prueba de trabajo de parto, una dilatación detenida dos horas con buena dinámica es una prueba fracasada: cesárea. El error es seguir esperando sin ponerle un límite.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Primigesta de 39 semanas, con diabetes gestacional, en expulsivo. Tras la salida de la cabeza fetal, esta se retrae con fuerza contra el periné. La tracción axial suave no libera el hombro anterior.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Presionar el fondo uterino con ambas manos (maniobra de Kristeller)' },
        { letter: 'B', text: 'Maniobra de McRoberts más presión suprapúbica (Mazzanti)' },
        { letter: 'C', text: 'Traccionar con firmeza la cabeza fetal hacia abajo' },
        { letter: 'D', text: 'Realizar cesárea con el feto ya desprendido (maniobra de Zavanelli)' },
        { letter: 'E', text: 'Fracturar de inmediato la clavícula fetal' },
      ],
      correct: 'B',
      explanation: 'Signo de la tortuga con hombro atascado: distocia de hombros. La primera línea, con más del setenta por ciento de éxito, es McRoberts más presión suprapúbica. Kristeller y la tracción cefálica están prohibidas; Zavanelli y la fractura de clavícula son de último recurso.',
      say: {
        stem: 'Vamos con un caso. Una primigesta de treinta y nueve semanas, con diabetes gestacional, está en el expulsivo. Tras salir la cabeza fetal, esta se retrae con fuerza contra el periné. La tracción suave no logra liberar el hombro.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: presionar el fondo uterino, hacer McRoberts más presión suprapúbica, traccionar la cabeza con firmeza, hacer la maniobra de Zavanelli, o fracturar la clavícula de inmediato. Piénsalo.',
        answer: 'Es la B. Diabetes gestacional, signo de la tortuga y hombro que no sale con la tracción suave: es una distocia de hombros. La primera línea es siempre McRoberts junto con presión suprapúbica. La A y la C son las dos maniobras que están terminantemente prohibidas, y la D y la E son recursos extremos que solo se usan si todo lo anterior fracasa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 168',
      stem: 'Paciente en trabajo de parto de término. Durante el expulsivo se produce el desprendimiento de la cabeza fetal, pero no ocurre la rotación ni el descenso de los hombros.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Traccionar la cabeza fetal' },
        { letter: 'B', text: 'Realizar compresiones suprapúbicas' },
        { letter: 'C', text: 'Realizar hiperflexión de las caderas (maniobra de McRoberts)' },
        { letter: 'D', text: 'Realizar rotación manual de los hombros hacia anterior (maniobra de Rubin)' },
        { letter: 'E', text: 'Realizar extracción del brazo posterior (maniobra de Jacquemier)' },
      ],
      correct: 'C',
      explanation: 'La maniobra de McRoberts es siempre el manejo inicial en la distocia de hombros: resuelve la mayoría de los casos y tiene muy baja morbilidad. Las maniobras internas y la tracción cefálica quedan para después, o están prohibidas.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de julio de dos mil diecisiete. Una paciente está en trabajo de parto de término. En el expulsivo se desprende la cabeza fetal, pero los hombros no rotan ni descienden.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: traccionar la cabeza, hacer compresiones suprapúbicas, hacer la maniobra de McRoberts, rotar los hombros con la maniobra de Rubin, o extraer el brazo posterior con Jacquemier. Piénsalo.',
        answer: 'Es la C, McRoberts. Se hace siempre primero, porque resuelve la mayoría de los casos con una morbilidad muy baja. La presión suprapúbica se suma casi al mismo tiempo, pero las maniobras internas, como Rubin o Jacquemier, quedan para cuando las externas no bastan. Y traccionar la cabeza nunca es una opción.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 170',
      stem: 'Embarazo de término en trabajo de parto, con seis centímetros de dilatación y variabilidad disminuida de la frecuencia cardíaca fetal. Dos horas después, con ocho centímetros de dilatación, persiste la variabilidad disminuida y aparecen desaceleraciones tardías en relación a cada contracción.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar fórceps' },
        { letter: 'B', text: 'Realizar operación cesárea' },
        { letter: 'C', text: 'Administrar misoprostol' },
        { letter: 'D', text: 'Iniciar oxitocina en goteo' },
        { letter: 'E', text: 'Mantener conducta expectante y reevaluar en 30 minutos' },
      ],
      correct: 'B',
      explanation: 'Variabilidad disminuida más desaceleraciones tardías recurrentes es categoría tres: sufrimiento fetal que exige la vía más expedita. No se puede hacer fórceps con solo ocho centímetros de dilatación, así que la conducta es cesárea de urgencia.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil quince. Un embarazo de término, en trabajo de parto, con seis centímetros de dilatación y variabilidad disminuida en el registro fetal. Dos horas después, con ocho centímetros, la variabilidad sigue disminuida y aparecen desaceleraciones tardías con cada contracción.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: hacer fórceps, hacer cesárea, dar misoprostol, iniciar oxitocina, o mantener conducta expectante y reevaluar en media hora. Piénsalo.',
        answer: 'Es la B. Variabilidad disminuida junto con desaceleraciones tardías que se repiten es categoría tres, sufrimiento fetal, y necesitas la vía más rápida. El fórceps no se puede hacer con solo ocho centímetros de dilatación, y esperar o subir la oxitocina solo empeora la hipoxia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 58',
      stem: 'Paciente en fase activa de trabajo de parto de término, con progresión de dos a siete centímetros en dos horas, con buena dinámica uterina y membranas rotas. El registro cardíaco fetal muestra buena frecuencia, buena variabilidad y aceleraciones, sin desaceleraciones.',
      question: '¿Cuál es el diagnóstico más probable del estado fetal?',
      options: [
        { letter: 'A', text: 'Registro tipo I' },
        { letter: 'B', text: 'Registro tipo II' },
        { letter: 'C', text: 'Registro tipo III' },
        { letter: 'D', text: 'Registro reactivo' },
        { letter: 'E', text: 'Variabilidad disminuida' },
      ],
      correct: 'A',
      explanation: 'Buena frecuencia basal, buena variabilidad, aceleraciones y sin desaceleraciones: es un trazado seguro, categoría uno. "Registro reactivo" es el término del registro basal no estresante sin contracciones, no el de un monitoreo intraparto como este.',
      say: {
        stem: 'Y esta es del EUNACOM de julio de dos mil diecinueve. Una paciente está en fase activa de trabajo de parto de término, avanzando de dos a siete centímetros en dos horas, con buena dinámica y membranas rotas. El registro fetal muestra buena frecuencia, buena variabilidad y aceleraciones, sin desaceleraciones.',
        question: '¿Cuál es el diagnóstico más probable del estado fetal?',
        options: 'Las opciones: registro tipo uno, tipo dos, tipo tres, registro reactivo, o variabilidad disminuida. Piénsalo.',
        answer: 'Es la A. Todo normal, sin desaceleraciones: eso es un trazado categoría uno, el trazado seguro. La D es la trampa: reactivo es el nombre que usas en un registro basal no estresante, sin contracciones, no en un monitoreo intraparto como este, aunque el concepto de fondo se parezca.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2013 · Pregunta 25",
      "stem": "Una mujer de 28 años, con embarazo de 30 semanas, consulta angustiada por no percibir movimientos fetales, sin otros síntomas. Su examen físico es normal. Se solicita un registro basal no estresante de 20 minutos, que muestra frecuencia basal normal, solo dos pequeñas desaceleraciones y aceleraciones mínimas, sin ninguna de 15 latidos por 15 segundos.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Tranquilizar a la paciente e indicar que mantenga controles habituales"
        },
        {
          "letter": "B",
          "text": "Solicitar perfil biofísico"
        },
        {
          "letter": "C",
          "text": "Solicitar ecografía obstétrica"
        },
        {
          "letter": "D",
          "text": "Repetir registro basal no estresante por 20 minutos más"
        },
        {
          "letter": "E",
          "text": "Realizar test de tolerancia a las contracciones uterinas"
        }
      ],
      "correct": "D",
      "explanation": "El registro no es reactivo: para serlo requiere 2 aceleraciones de 15 latidos por minuto y 15 segundos en 20 minutos. Lo primero es prolongarlo 20 minutos más, porque el feto puede estar en sueño fisiológico. Si persiste no reactivo, recién ahí se pide perfil biofísico.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil trece. Mujer de veintiocho años, con treinta semanas de embarazo, consulta angustiada porque no siente moverse a su bebé. El registro basal no estresante de veinte minutos muestra frecuencia normal, dos desaceleraciones pequeñas y aceleraciones mínimas, sin ninguna que alcance quince latidos durante quince segundos.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: tranquilizar y control habitual, perfil biofísico, ecografía obstétrica, prolongar el registro veinte minutos más, o test de tolerancia a las contracciones. Piénsalo.",
        "answer": "Es la D. Es un registro no reactivo, y antes de escalar lo prolongas veinte minutos más, porque el feto puede estar simplemente dormido. El perfil biofísico tienta, pero es el paso siguiente solo si el registro sigue sin ser reactivo."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2017 · Pregunta 135",
      "stem": "Paciente de 35 años, cursando un embarazo de 38 semanas, consulta por contracciones uterinas de 3 a 4 cada 10 minutos. Al tacto vaginal presenta 10 cm de dilatación, membranas rotas y cabeza fetal en espinas 0, en variedad mento-ilíaca derecha posterior. El monitoreo fetal es tranquilizador.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Dejar a evolución espontánea y controlar en una hora"
        },
        {
          "letter": "B",
          "text": "Hacer fórceps"
        },
        {
          "letter": "C",
          "text": "Realizar vacuum de la cabeza fetal"
        },
        {
          "letter": "D",
          "text": "Realizar amnioinfusión con rotación manual"
        },
        {
          "letter": "E",
          "text": "Hacer cesárea de urgencia"
        }
      ],
      "correct": "E",
      "explanation": "Presentación de cara con mentón posterior: el cuello fetal ya está en extensión máxima y no puede seguir la curva del canal, por lo que el parto vaginal es imposible. La conducta es cesárea. Solo la cara con mentón anterior (mento-púbica) puede nacer por vía vaginal; el fórceps y el vacuum están contraindicados.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecisiete. Embarazo de término en dilatación completa, membranas rotas, en presentación de cara con el mentón hacia posterior y monitoreo tranquilizador.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: esperar una hora, fórceps, vacuum, amnioinfusión con rotación manual o cesárea de urgencia. Piénsalo.",
        "answer": "Es la E. La cara con mentón posterior no puede nacer por vía vaginal, así que va a cesárea. Esperar la evolución tienta porque el monitoreo es normal, pero solo la variedad con mentón anterior progresa."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2019 · Pregunta 109",
      "stem": "Paciente de 31 años entra en trabajo de parto a las 38 semanas. Al examinarla se constatan 3 contracciones uterinas en 10 minutos y el tacto vaginal muestra 5 cm de dilatación, membranas íntegras y presentación cefálica en espinas -1. El registro de frecuencia cardiaca fetal es normal. Se reevalúa a las 3 horas, sin cambios obstétricos.",
      "question": "¿Cuál es la conducta de elección?",
      "options": [
        {
          "letter": "A",
          "text": "Mantener una conducta expectante por 1 hora y reevaluar"
        },
        {
          "letter": "B",
          "text": "Administrar misoprostol"
        },
        {
          "letter": "C",
          "text": "Realizar cesárea"
        },
        {
          "letter": "D",
          "text": "Realizar rotura artificial de membranas y administrar anestesia epidural"
        },
        {
          "letter": "E",
          "text": "Administrar oxitocina endovenosa en goteo"
        }
      ],
      "correct": "D",
      "explanation": "Fase activa sin progreso con membranas íntegras: antes de diagnosticar distocia se realiza una prueba de trabajo de parto, optimizando las condiciones con rotura artificial de membranas y analgesia epidural, y luego oxitocina si la dinámica es insuficiente. Si no progresa tras la prueba, se indica cesárea.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Trabajo de parto de término en cinco centímetros, membranas íntegras y monitoreo normal, sin ningún cambio en tres horas.",
        "question": "¿Cuál es la conducta de elección?",
        "options": "Las opciones: esperar una hora, misoprostol, cesárea, romper membranas con anestesia epidural, u oxitocina. Piénsalo.",
        "answer": "Es la D. Antes de hablar de distocia se optimiza el trabajo de parto rompiendo membranas y con anestesia, que es la prueba de trabajo de parto. La cesárea tienta, pero solo se indica si no hay progreso después de esa prueba."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Distocia de hombros', tag: 'Secuencia de rescate', kind: 'key', items: [
          { t: 'Primero McRoberts', d: 'Más presión suprapúbica de Mazzanti',
            say: 'Cerremos con las reglas de oro. Ante el signo de la tortuga, primero McRoberts, junto con la presión suprapúbica.' },
          { t: 'Nunca Kristeller', d: 'Ni traccionar la cabeza con fuerza',
            say: 'Y nunca presiones el fondo uterino ni tracciones la cabeza con fuerza.' },
        ] },
        { title: 'Presentación y progreso', tag: 'Vía de parto', kind: 'criteria', items: [
          { t: 'Podálica: versión a las 36 a 37', d: 'Si no, cesárea electiva a las 39',
            say: 'En una podálica ofreces la versión externa a las treinta y seis a treinta y siete semanas, y si persiste, cesárea a las treinta y nueve. La transversa en trabajo de parto siempre es cesárea.' },
          { t: 'Prueba de trabajo de parto', d: 'Detención de 2 horas: cesárea',
            say: 'Y en la prueba de trabajo de parto, la detención de dos horas con buena dinámica manda a cesárea.' },
        ] },
        { title: 'Monitoreo fetal', tag: 'Lo que decide todo', kind: 'alert', items: [
          { t: 'Temprana: benigna', d: 'Tardía: hipoxia, actúa',
            say: 'La desaceleración temprana es benigna; la tardía habla de hipoxia y te obliga a actuar.' },
          { t: 'Sin variabilidad + tardía', d: 'Cesárea de urgencia',
            say: 'Y si pierdes la variabilidad junto con desaceleraciones tardías, es cesárea de urgencia. Si te llevas una sola idea de hoy: en el hombro, McRoberts primero; en el monitoreo, la variabilidad y las tardías deciden la urgencia. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: buildPathway(),
};

function buildPathway() {
  const internasNode = N('do', 'Maniobras internas', 'Rubin, Woods o Jacquemier',
    'Si no cede, rotas el hombro con la mano o extraes el brazo posterior.');
  const liberadoNode = N('ok', 'Hombro liberado', 'Continúa el parto',
    'Con la mayoría de los casos, el hombro se libera aquí mismo.');
  const mcrNode = N('do', 'McRoberts + Mazzanti', 'Hiperflexión de muslos + presión suprapúbica',
    'Primero McRoberts, hiperflexionando los muslos, junto con presión suprapúbica.',
    ['No cede', internasNode],
    ['Cede', liberadoNode]);
  const hombroNode = N('alert', 'Signo de la tortuga', 'La cabeza se retrae al periné',
    'La cabeza sale y se retrae con fuerza contra el periné: es una distocia de hombros.',
    ['', mcrNode]);

  const tempranaNode = N('ok', 'Temprana: benigna', 'Compresión cefálica, sin hipoxia',
    'Si copia la contracción en espejo, es temprana: compresión de la cabeza, sin hipoxia, no cambias nada.');
  const tardiaNode = N('alert', 'Tardía: hipoxia', 'Reanimación intrauterina, si no revierte cesárea',
    'Si empieza después del punto más alto de la contracción, es tardía: hipoxia por insuficiencia placentaria. Reanimación intrauterina, y si no revierte, cesárea de urgencia.');
  const variableNode = N('do', 'Variable: cordón', 'Vigilar; grave si dura más de un minuto',
    'Si es brusca y no guarda relación fija, es variable, por compresión del cordón. Vigilas, y es grave si dura más de un minuto o la frecuencia baja mucho.');
  const registroNode = N('q', '¿Cómo es la desaceleración?', 'Temprana, tardía o variable',
    '¿La desaceleración copia la contracción, la sigue con retraso, o es brusca y sin patrón fijo?',
    ['En espejo con la contracción', tempranaNode],
    ['Empieza tras el acmé', tardiaNode],
    ['Brusca, en V, variable', variableNode]);

  const preguntaNode = N('q', '¿Qué está pasando?', 'Hombro atascado o registro alterado',
    'La primera pregunta es simple: ¿el problema es que el hombro no sale, o que el monitoreo fetal cambió?',
    ['Hombro atascado', hombroNode],
    ['Registro alterado', registroNode]);

  return {
    title: 'Urgencias del expulsivo: hombro y monitoreo',
    root: N('start', 'Algo se complica en el expulsivo', 'Dos urgencias distintas',
      'Estás en el expulsivo y algo no va bien. Puede ser que el hombro no salga, o que el registro fetal cambie. Son dos urgencias distintas, con su propio árbol de decisión.',
      ['', preguntaNode]),
  };
}
