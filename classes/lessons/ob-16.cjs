// Clase 3.16 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-16).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-16',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fases del trabajo de parto, mecanismos del parto en cefálica, score de Bishop para maduración cervical y manejo activo del alumbramiento',
      say: 'Bienvenidos a la clase sobre trabajo de parto fisiológico y manejo activo del alumbramiento. En esta sesión revisaremos las fases del parto según los estándares modernos, analizaremos la secuencia de los seis movimientos cardinales de la presentación cefálica, aprenderemos a calcular y utilizar el score de Bishop para decidir entre oxitocina o misoprostol, y dominaremos el manejo activo del tercer período para prevenir la hemorragia postparto. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Cronología del parto',
      title: 'Los cuatro períodos clínicos del trabajo de parto',
      nodes: [
        { id: 'p1', col: 0, row: 1, k: 'start', t: 'Primer período: dilatación', s: 'Desde el inicio de las contracciones regulares hasta los diez centímetros' },
        { id: 'p2', col: 1, row: 1, k: 'mech', t: 'Segundo período: expulsivo', s: 'Desde la dilatación completa hasta el nacimiento del recién nacido' },
        { id: 'p3', col: 2, row: 1, k: 'effect', t: 'Tercer período: alumbramiento', s: 'Desde el nacimiento del feto hasta la expulsión completa de la placenta' },
        { id: 'p4', col: 3, row: 1, k: 'good', t: 'Cuarto período: postparto inmediato', s: 'Primeras dos horas de máxima vigilancia del tono uterino y volemia' },
      ],
      edges: [
        { from: 'p1', to: 'p2', label: 'dilatación completa' },
        { from: 'p2', to: 'p3', label: 'nacimiento' },
        { from: 'p3', to: 'p4', label: 'expulsión placentaria' },
      ],
      steps: [
        {
          show: ['p1', 'p2'],
          note: 'Dilatación cervical y período expulsivo',
          say: 'El primer período comprende el borramiento y la dilatación del cuello uterino desde el inicio de las contracciones regulares hasta alcanzar la dilatación completa de diez centímetros. El segundo período o expulsivo transcurre desde la dilatación completa hasta la salida íntegra del feto al exterior.',
        },
        {
          show: ['p3', 'p4'],
          note: 'Alumbramiento y hemostasia del postparto inmediato',
          say: 'El tercer período corresponde al desprendimiento y expulsión completa de la placenta y sus membranas ovulares. El cuarto período abarca las dos primeras horas del puerperio inmediato, ventana crítica donde ocurre el mayor riesgo de hemorragia por inercia uterina.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Fisiología cervical',
      title: 'Primer Período: Fase Latente vs Fase Activa Moderna',
      cards: [
        {
          title: 'Fase Latente Prolongada',
          tag: 'Concepto clínico de calma',
          kind: 'normal',
          items: [
            {
              t: 'Contracciones y dilatación hasta 5 cm',
              d: 'Período caracterizado por contracciones irregulares que llevan el cuello hasta los 5 cm',
              say: 'La fase latente se extiende desde el inicio de las contracciones uterinas regulares hasta alcanzar los cinco centímetros de dilatación. Se trata de un período fisiológico de remodelado y reblandecimiento cervical que progresa lentamente y que jamás debe precipitarse con intervenciones invasivas innecesarias.',
            },
            {
              t: 'Límites de duración fisiológica',
              d: 'Hasta veinte horas en primigestas y catorce horas en multíparas sin calificar distocia',
              say: 'Según los consensos modernos, la fase latente puede prolongarse hasta veinte horas en primíparas y hasta catorce horas en multíparas sin que esto signifique una distocia ni una indicación quirúrgica de cesárea.',
            },
          ],
        },
        {
          title: 'Fase Activa del Parto',
          tag: 'Aceleración y progresión',
          kind: 'key',
          items: [
            {
              t: 'Inicio formal a los 5 cm de dilatación',
              d: 'Dinámica uterina regular con tres a cinco contracciones cada diez minutos',
              say: 'La fase activa del parto se inicia formalmente cuando la paciente alcanza los cinco centímetros de dilatación cervical con borramiento significativo, acompañada de una dinámica uterina eficiente de tres a cinco contracciones de buena intensidad cada diez minutos.',
            },
            {
              t: 'Velocidad de dilatación esperada',
              d: 'Progresión mínima de uno a dos centímetros por hora en presentación encajada',
              say: 'Durante la fase activa esperamos una progresión regular de dilatación cervical de al menos uno a uno punto cinco centímetros por hora en primigestas y hasta dos centímetros por hora en multíparas.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Biomecánica del canal del parto',
      title: 'Los Seis Movimientos Cardinales en Presentación Cefálica',
      nodes: [
        { id: 'aco', col: 0, row: 1, k: 'start', t: '1. Acomodación al estrecho superior', s: 'Flexión cefálica y orientación en el diámetro oblicuo mayor' },
        { id: 'des', col: 1, row: 1, k: 'mech', t: '2. Descenso y encajamiento', s: 'Progresión del diámetro biparietal bajo las espinas ciáticas (plano cero)' },
        { id: 'rot', col: 2, row: 1, k: 'mech', t: '3. Rotación interna pelviana', s: 'Giro de 45 a 90 grados para orientar el occipucio bajo la sínfisis del pubis' },
        { id: 'ext', col: 3, row: 0, k: 'good', t: '4. Desprendimiento por extensión', s: 'Deflexión de la cabeza usando el suboccipucio como punto de apoyo hipomoclio' },
        { id: 'rex', col: 3, row: 2, k: 'good', t: '5. Rotación externa (restitución)', s: 'La cabeza rota 45 grados mirando hacia el muslo para alinear hombros' },
        { id: 'exp', col: 4, row: 1, k: 'good', t: '6. Expulsión de hombros y cuerpo', s: 'Desprendimiento del hombro anterior bajo el pubis luego el posterior' },
      ],
      edges: [
        { from: 'aco', to: 'des', label: 'progreso' },
        { from: 'des', to: 'rot', label: 'excavación' },
        { from: 'rot', to: 'ext', label: 'salida cefálica' },
        { from: 'ext', to: 'rex', label: 'alineación' },
        { from: 'rex', to: 'exp', label: 'expulsión final' },
      ],
      steps: [
        {
          show: ['aco', 'des', 'rot'],
          note: 'Franqueamiento de la pelvis superior y media',
          say: 'La cabeza fetal se flexiona para reducir su diámetro de doce a nueve punto cinco centímetros, desciende a través de la excavación pelviana y realiza una rotación interna para orientar el occipucio hacia la sínfisis púbica materna.',
        },
        {
          show: ['ext', 'rex', 'exp'],
          note: 'Nacimiento cefálico y de los hombros',
          say: 'Haciendo punto de apoyo en el borde inferior del pubis, la cabeza se desprende mediante un movimiento de extensión o deflexión. Luego rota externamente para restituir la orientación anatómica con los hombros, facilitando la salida sucesiva del hombro anterior y del cuerpo fetal.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Detalle anatómico',
      title: 'Conceptos Esenciales de la Estática Fetal y Planos de Lee',
      cards: [
        {
          title: 'Estática Fetal de Vértice',
          tag: 'Actitud y posición',
          kind: 'normal',
          items: [
            {
              t: 'Actitud de flexión máxima',
              d: 'Presenta el diámetro suboccípito-bregmático de nueve punto cinco centímetros',
              say: 'La presentación de vértice o cúpula es la más eutócica de todas porque la cabeza se encuentra en flexión completa, ofreciendo el diámetro suboccípito-bregmático que es el menor de los diámetros cefálicos.',
            },
            {
              t: 'Variedad de posición más frecuente',
              d: 'Occípito ilíaca izquierda anterior (OIIA) es la variedad eutócica clásica',
              say: 'La variedad de posición más frecuente y fisiológica en el canal del parto es la occípito ilíaca izquierda anterior, donde el dorso fetal se orienta hacia el flanco anterolateral izquierdo materno, facilitando una rotación interna corta de cuarenta y cinco grados.',
            },
          ],
        },
        {
          title: 'Planos de Altura: Hodge vs Lee',
          tag: 'Nivel de encajamiento',
          kind: 'criteria',
          items: [
            {
              t: 'Estación cero de Lee en espinas ciáticas',
              d: 'Punto de referencia fijo que corresponde al tercer plano de Hodge',
              say: 'La estación cero de Lee se define por el plano horizontal que une ambas espinas ciáticas. Cuando el punto más avanzado del cráneo alcanza este nivel, se considera que la cabeza está formalmente encajada.',
            },
            {
              t: 'Estaciones negativas y positivas',
              d: 'Por encima de espinas ciáticas son valores negativos; por debajo son positivos',
              say: 'Las alturas por encima de las espinas ciáticas se gradúan de menos uno a menos tres centímetros, mientras que el progreso hacia el periné se describe como más uno a más tres centímetros de Lee.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Evaluación de madurez cervical',
      title: 'Puntuación de Bishop: Parámetros del Tacto Vaginal',
      head: ['Parámetro semiológico', '0 puntos', '1 a 2 puntos', '3 puntos'],
      rows: [
        {
          cells: ['Dilatación cervical (en cm)', 'Cerrado (cero cm)', 'Uno a cuatro centímetros', 'Cinco o más centímetros'],
          say: 'La dilatación cervical otorga cero puntos si el orificio está cerrado, un punto con uno a dos centímetros, dos puntos de tres a cuatro centímetros, y tres puntos máximos cuando alcanza cinco o más centímetros al examen digital.',
        },
        {
          cells: ['Borramiento cervical (%)', 'Cero a treinta por ciento', 'Cuarenta a setenta por ciento', 'Ochenta por ciento o más'],
          say: 'El borramiento o acortamiento del cuello puntúa cero puntos de cero a treinta por ciento, un punto de cuarenta a cincuenta por ciento, dos puntos de sesenta a setenta por ciento, y tres puntos si supera el ochenta por ciento.',
        },
        {
          cells: ['Consistencia del cuello', 'Firme o duro (como la nariz)', 'Consistencia media', 'Blanda (como el labio)'],
          say: 'Un cuello firme puntúa cero, una consistencia intermedia da un punto, y un cuello blando y complaciente otorga dos puntos al examen.',
        },
        {
          cells: ['Posición y altura de Lee', 'Posterior y plano menos tres', 'Media y planos menos dos a menos uno', 'Anterior y plano cero o positivo'],
          say: 'La posición posterior y altura flotante puntúan cero, mientras que un cuello anterior y una presentación encajada en plano cero otorgan la máxima puntuación.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Decisión terapéutica',
      title: 'Interpretación del Score de Bishop e Inducción del Parto',
      cards: [
        {
          title: 'Bishop Mayor a Seis Puntos (Cuello Favorable)',
          tag: 'Inducción directa con Oxitocina',
          kind: 'key',
          items: [
            {
              t: 'Alta probabilidad de parto vaginal exitoso',
              d: 'El cérvix ya está maduro complaciente y receptivo a la dinámica uterina',
              say: 'Un puntaje de Bishop mayor a seis indica un cuello maduro y altamente favorable. La conducta terapéutica de elección es la inducción directa del parto con infusión endovenosa de oxitocina.',
            },
            {
              t: 'Amniotomía como complemento',
              d: 'La rotura artificial de membranas acelera la fase activa en cuellos maduros',
              say: 'En cuellos favorables, la amniotomía precoz asociada a oxitocina optimiza la dinámica uterina y disminuye los tiempos totales de trabajo de parto.',
            },
          ],
        },
        {
          title: 'Bishop Menor o Igual a Seis (Cuello Desfavorable)',
          tag: 'Maduración cervical con Misoprostol',
          kind: 'alert',
          items: [
            {
              t: '¡Fracaso de la oxitocina sola!',
              d: 'Inducir directamente con oxitocina en cuello inmaduro fracasa en más del 50%',
              say: 'Inducir directamente con oxitocina en un cuello desfavorable con Bishop menor o igual a seis puntos conduce al fracaso de inducción en más de la mitad de los casos, duplicando las cesáreas por detención del trabajo de parto y la tasa de sufrimiento fetal.',
            },
            {
              t: 'Maduración previa con prostaglandinas',
              d: 'Misoprostol vaginal o métodos mecánicos con balón de Foley transcervical',
              say: 'La conducta médica correcta ante un Bishop desfavorable es realizar primero una maduración cervical mediante misoprostol vaginal en microdosis o métodos mecánicos transcervicales antes de iniciar oxitocina.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Prevención universal de HPP',
      title: 'Manejo Activo del Tercer Período (Alumbramiento Activo)',
      cards: [
        {
          title: 'Los Tres Pasos Normados por OMS y MINSAL',
          tag: 'Intervención estándar',
          kind: 'pharma',
          items: [
            {
              t: 'Paso 1: Oxitocina diez unidades intramusculares',
              d: 'Administración inmediata tras la salida del hombro anterior del feto',
              say: 'El primer paso indiscutible del alumbramiento activo consiste en administrar diez unidades internacionales de oxitocina por vía intramuscular inmediatamente tras la salida del hombro anterior del feto, garantizando una potente contracción miometrial.',
            },
            {
              t: 'Paso 2: Tracción controlada del cordón umbilical',
              d: 'Maniobra de Brandt-Andrews con contratracción suprapúbica para evitar inversión',
              say: 'El segundo paso consiste en la tracción controlada y firme del cordón umbilical con una mano, mientras la otra mano aplica contratracción suprapúbica hacia arriba en la pared abdominal baja mediante la maniobra de Brandt-Andrews, evitando la inversión uterina.',
            },
            {
              t: 'Paso 3: Masaje uterino abdominal inmediato',
              d: 'Estimulación del miometrio para garantizar la formación del globo de seguridad de Pinard',
              say: 'El tercer paso consiste en masajear el fondo uterino a través de la pared abdominal inmediatamente tras la salida de la placenta, verificando el globo de seguridad de Pinard.',
            },
          ],
        },
        {
          title: 'Impacto Perinatal Demostrado',
          tag: 'Reducción de mortalidad',
          kind: 'key',
          items: [
            {
              t: 'Disminución del sesenta por ciento de la hemorragia',
              d: 'Reduce drásticamente la atonía uterina necesidad de transfusión y shock',
              say: 'El manejo activo del alumbramiento reduce en más de un sesenta por ciento la incidencia de hemorragia postparto por inercia uterina y la necesidad de transfusión sanguínea.',
            },
            {
              t: 'Acortamiento del tiempo de alumbramiento',
              d: 'La placenta se expulsa en menos de diez a quince minutos',
              say: 'Asimismo, disminuye el tiempo del tercer período a menos de diez a quince minutos, evitando la retención placentaria patológica.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de inducción',
      title: 'Algoritmo Clínico de Decisión ante Inducción de Parto según Bishop',
      say: 'Revisemos el algoritmo estructurado para seleccionar el método correcto de inducción del parto según la puntuación de Bishop obtenida en el tacto vaginal.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Inducción de Parto en Cuello Desfavorable · 41 Semanas',
      stem: 'Una mujer de 41 semanas de gestación ingresa para inducción de parto por embarazo en vías de prolongación. Al tacto vaginal se encuentra un cuello uterino en posición posterior, consistencia firme, borramiento del 20%, orificio cervical cerrado (0 cm) y cabeza fetal flotante en plano -3 de Lee.',
      question: '¿Cuál es la conducta de elección para iniciar la inducción del parto?',
      options: [
        { letter: 'A', text: 'Inducción directa con infusión endovenosa continua de Oxitocina a dosis crecientes' },
        { letter: 'B', text: 'Maduración cervical previa con Misoprostol vaginal (25-50 mcg) o métodos mecánicos' },
        { letter: 'C', text: 'Realizar amniotomía precoz inmediata antes de cualquier medicación' },
        { letter: 'D', text: 'Cesárea electiva inmediata sin permitir prueba de maduración cervical' },
        { letter: 'E', text: 'Administración de tocolíticos orales y control en 1 semana' },
      ],
      correct: 'B',
      explanation: 'El examen físico muestra un índice de Bishop extremadamente desfavorable (1 punto: cuello cerrado 0 cm = 0, borramiento 20% = 0, consistencia firme = 0, posición posterior = 0, estación -3 = 1). Ante un Bishop menor o igual a 6 puntos, la inducción directa con oxitocina presenta una elevada tasa de fracaso. La conducta estándar recomendada es la MADURACIÓN CERVICAL previa utilizando prostaglandinas (Misoprostol vaginal 25 a 50 microgramos cada 4 a 6 horas) o dilatadores mecánicos tipo sonda Foley transcervical.',
      say: {
        stem: 'Una paciente de cuarenta y una semanas ingresa para inducción de parto con cuello posterior, firme, cerrado y presentación flotante con Bishop de un punto.',
        question: '¿Cuál es la conducta de elección para iniciar la inducción del parto?',
        options: 'La opción A propone infusión de oxitocina directa. La B maduración cervical previa con misoprostol vaginal o métodos mecánicos. La C amniotomía precoz. La D cesárea electiva. La E tocolíticos. Piénsalo.',
        answer: 'La respuesta correcta es la B. Ante un score de Bishop desfavorable menor o igual a seis puntos, la conducta obligatoria es la maduración cervical previa con misoprostol o balón mecánico antes de oxitocina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2013',
      title: 'EUNACOM Julio 2013 · Pregunta 96',
      stem: 'Una mujer de 34 años, cursando su primer embarazo de 36 semanas, refiere salida de abundante líquido por los genitales, no asociado a otros síntomas. A la especuloscopía vaginal no se observa salida activa pero el tacto vaginal palpa cuello sin dilatación, de localización posterior y duro, sin borramiento. Se realiza ecografía que confirma oligoamnios por rotura de membranas.',
      question: 'La conducta más adecuada en este caso es:',
      options: [
        { letter: 'A', text: 'Indicar antibióticos profilácticos y mantener conducta expectante' },
        { letter: 'B', text: 'Inducir parto con misoprostol' },
        { letter: 'C', text: 'Realizar cesárea' },
        { letter: 'D', text: 'Inducir parto con oxitocina' },
        { letter: 'E', text: 'Solicitar perfil biofísico para tomar conducta definitiva' },
      ],
      correct: 'B',
      explanation: 'La paciente tiene una Rotura Prematura de Membranas confirmada a las 36 semanas de gestación. Al tener más de 34 semanas, la indicación categórica es la interrupción del embarazo. Al evaluar las condiciones cervicales, el cuello es francamente desfavorable e inmaduro (Bishop muy bajo: posterior, duro, sin dilatación ni borramiento). Por ello, no es adecuada la oxitocina directa y la inducción debe iniciarse con maduración cervical mediante misoprostol.',
      say: {
        stem: 'Una primigesta de treinta y seis semanas presenta rotura de membranas confirmada con cuello posterior, duro y cerrado sin dilatación al examen obstétrico.',
        question: '¿Cuál es la conducta más adecuada en este caso?',
        options: 'La opción A propone antibióticos y conducta expectante. La B inducir parto con misoprostol. La C realizar cesárea. La D inducir parto con oxitocina. La E perfil biofísico. Piénsalo.',
        answer: 'La respuesta correcta es la B. A las treinta y seis semanas la rotura de membranas exige interrupción, y al tener un cuello completamente inmaduro se induce con misoprostol para maduración cervical.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Manejo Activo del Tercer Período · Prevención de Atonía',
      stem: 'En el contexto de la prevención universal de la hemorragia postparto primaria por atonía uterina, ¿cuál es el esquema y el momento de administración farmacológica del Manejo Activo del Tercer Período del Parto (Alumbramiento Activo)?',
      question: 'Seleccione la pauta farmacológica normada:',
      options: [
        { letter: 'A', text: 'Administrar Metilergonovina 0.2 mg IM después de expulsada completamente la placenta' },
        { letter: 'B', text: 'Administrar Oxitocina 10 UI intramuscular inmediatamente tras la salida del hombro anterior' },
        { letter: 'C', text: 'Administrar Misoprostol 800 mcg rectal antes del inicio del período expulsivo' },
        { letter: 'D', text: 'Infusión de Ácido Tranexámico 1g EV previo a la rotura de membranas' },
        { letter: 'E', text: 'Tracción forzada del cordón umbilical en útero completamente relajado' },
      ],
      correct: 'B',
      explanation: 'El Manejo Activo del Tercer Período del Parto recomendado de forma universal por la OMS, FIGO y las guías ministeriales de Chile consiste en la administración de OXITOCINA 10 UI por vía intramuscular inmediatamente tras la salida del hombro anterior del feto (o alternativamente 20 UI en infusión endovenosa rápida). Esta medida estimula la contracción miometrial fisiológica garantizando la hemostasia primaria.',
      say: {
        stem: 'Se consulta cuál es la indicación farmacológica normada para el manejo activo del tercer período del parto en la prevención universal de hemorragia postparto.',
        question: '¿Cuál es la pauta farmacológica normada?',
        options: 'La opción A propone metilergonovina tras la placenta. La B oxitocina diez unidades intramusculares inmediatamente tras la salida del hombro anterior. La C misoprostol rectal. La D ácido tranexámico. La E tracción forzada. Piénsalo.',
        answer: 'La respuesta correcta es la B. La norma ministerial e internacional establece la administración de diez unidades de oxitocina intramuscular inmediatamente tras la salida del hombro anterior.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Conceptos Clave del Trabajo de Parto y Alumbramiento Activo',
      cards: [
        {
          title: 'Bishop y Decisión de Inducción',
          tag: 'El umbral de seis puntos',
          kind: 'key',
          items: [
            {
              t: 'Bishop mayor a seis es favorable',
              d: 'Inducción de parto directa con infusión de oxitocina y amniotomía',
              say: 'Un score de Bishop mayor a seis puntos certifica madurez cervical, pronosticando un parto vaginal expedito mediante inducción directa con infusión endovenosa de oxitocina.',
            },
            {
              t: 'Bishop menor o igual a seis es desfavorable',
              d: 'Requiere maduración previa con misoprostol vaginal o sonda Foley transcervical',
              say: 'Un score de Bishop menor o igual a seis puntos exige obligatoriamente maduración cervical previa con misoprostol en bajas dosis o métodos mecánicos antes de recurrir a la oxitocina.',
            },
          ],
        },
        {
          title: 'Alumbramiento Activo Universal',
          tag: 'Prevención de atonía uterina',
          kind: 'pharma',
          items: [
            {
              t: 'Oxitocina diez unidades IM tras el hombro anterior',
              d: 'Intervención con mayor impacto para reducir la hemorragia postparto en el mundo',
              say: 'La administración universal de diez unidades de oxitocina intramuscular inmediatamente al salir el hombro anterior del feto es la intervención que más vidas salva al prevenir la inercia uterina postparto.',
            },
            {
              t: 'Tracción controlada con contratracción suprapúbica',
              d: 'Maniobra de Brandt-Andrews para desprender la placenta evitando la inversión uterina',
              say: 'La maniobra de Brandt-Andrews previene la inversión uterina en el alumbramiento. Si te llevas una sola idea de hoy: la oxitocina profiláctica administrada inmediatamente tras la salida del hombro anterior es la intervención más eficaz para prevenir la hemorragia postparto. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo Clínico de Decisión ante Inducción de Parto',
    root: N(
      'start',
      'Indicación Médica de Inducción de Parto',
      'Embarazo mayor a 41 semanas, RPM mayor a 34 semanas o patología materna compensada',
      'Iniciamos la evaluación de la paciente candidata a inducción examinando el cuello con tacto vaginal.',
      [
        'Tacto vaginal: cálculo del Score de Bishop',
        N(
          'q',
          'Evaluación de Madurez Cervical',
          'Cinco parámetros: dilatación, borramiento, consistencia, posición y estación de Lee',
          'Calculamos la puntuación de Bishop según los cinco parámetros del tacto vaginal.',
          [
            'Bishop mayor a seis puntos (Cuello Favorable)',
            N(
              'do',
              'Inducción Directa con Oxitocina',
              'Infusión endovenosa continua de oxitocina en bomba a dosis crecientes más amniotomía',
              'Con Bishop mayor a seis puntos iniciamos directamente la inducción del parto con infusión de oxitocina.',
            ),
          ],
          [
            'Bishop menor o igual a seis puntos (Cuello Desfavorable)',
            N(
              'alert',
              'Maduración Cervical Previa Obligatoria',
              'Misoprostol vaginal veinticinco a cincuenta microgramos o balón de Foley transcervical',
              'Con Bishop desfavorable realizamos primero maduración cervical con misoprostol antes de la oxitocina.',
              [
                'Cuello maduro tras prostaglandinas (Bishop mayor a seis)',
                N(
                  'ok',
                  'Paso a Inducción con Oxitocina',
                  'Iniciar infusión de oxitocina seis horas después de la última dosis de misoprostol',
                  'Una vez madurado el cérvix pasamos a la inducción con oxitocina para completar el parto.',
                ),
              ],
            ),
          ],
        ),
      ],
    ),
  },
};
