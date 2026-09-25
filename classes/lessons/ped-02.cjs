// Clase 18.02 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-02',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Hitos madurativos cardinales, baterías EEDP y TEPSI, estratificación de riesgo según Chile Crece Contigo y banderas rojas de derivación neurológica',
      say: 'Bienvenidos a la clase sobre desarrollo psicomotor infantil, un eje fundamental de la atención primaria y una temática altamente evaluada en el examen EUNACOM. En esta sesión revisaremos los hitos madurativos cardinales por edad, dominaremos las baterías de tamizaje nacionales aplicadas en el control sano, aprenderemos a clasificar los puntajes de corte y fijaremos las banderas rojas que obligan a una derivación neurológica inmediata. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Leyes del neurodesarrollo',
      title: 'Principios Biológicos y Secuencia del Neurodesarrollo Infantil',
      nodes: [
        { id: 'cef', col: 0, row: 1, k: 'start', t: 'Dirección céfalo-caudal', s: 'Control del cuello precede al tronco y este al dominio de las extremidades inferiores' },
        { id: 'pro', col: 1, row: 1, k: 'mech', t: 'Dirección próximo-distal', s: 'Dominio de hombros y brazos precede a la prensión fina de dedos y pinza' },
        { id: 'ref', col: 2, row: 1, k: 'effect', t: 'Integración refleja', s: 'Desaparición paulatina de reflejos arcaicos para permitir movimientos voluntarios' },
        { id: 'aut', col: 3, row: 1, k: 'good', t: 'Autonomía y lenguaje', s: 'Marcha independiente, comunicación verbal con sentido y juego social adaptativo' },
      ],
      edges: [
        { from: 'cef', to: 'pro', label: 'maduración axial' },
        { from: 'pro', to: 'ref', label: 'inhibición cortical' },
        { from: 'ref', to: 'aut', label: 'integración motriz' },
      ],
      steps: [
        {
          show: ['cef', 'pro'],
          note: 'Gradiente de maduración del sistema nervioso central',
          say: 'El desarrollo psicomotor sigue leyes biológicas estrictas. La maduración mielínica avanza en dirección céfalo caudal, donde el control de la cabeza antecede a la postura sentada y la bipedestación, y en sentido próximo distal, donde la musculatura proximal se coordina antes que la pinza fina distal.',
        },
        {
          show: ['ref', 'aut'],
          note: 'Extinción de automatismos primitivos y adquisición de autonomía',
          say: 'Para que emerja la motricidad voluntaria y la marcha independiente es imprescindible que los reflejos arcaicos se integren y desaparezcan antes de los seis meses. Su persistencia anormal traduce daño de la motoneurona superior o retraso en la maduración cortical.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Hitos madurativos cardinales',
      title: 'Hitos Madurativos por Trimestres: Del Sostén Cefálico a la Marcha',
      cards: [
        {
          title: 'Hitos del Primer Año de Vida',
          tag: 'De tres a doce meses',
          kind: 'key',
          items: [
            {
              t: 'Tres y seis meses de vida',
              d: '3 meses: sostén cefálico firme y sonrisa social; 6 meses: sedestación con apoyo y giro de prono a supino',
              say: 'A los tres meses el lactante debe lograr sostén cefálico firme al sentarlo, sonrisa social responsiva, vocalizaciones guturales y mantener las manos abiertas. A los seis meses se sienta con apoyo en trípode, transfiere objetos de una mano a otra, gira de prono a supino y emite balbuceo con consonantes.',
            },
            {
              t: 'Ocho a nueve y doce meses de vida',
              d: '8 meses: sedestación independiente; 12 meses: pinza madura, primeras palabras y señalamiento',
              say: 'A los ocho meses logra la sedestación independiente sin ningún apoyo, presenta angustia de separación ante extraños y balbucea mamá o papá inespecífico. A los doce meses domina la pinza fina madura índice pulgar, emite sus primeras palabras con sentido y señala con el dedo para pedir cosas.',
            },
          ],
        },
        {
          title: 'Hitos del Segundo Año de Vida',
          tag: 'De dieciocho a veinticuatro meses',
          kind: 'criteria',
          items: [
            {
              t: 'Dieciocho meses: Marcha y juego simbólico',
              d: 'Marcha autónoma fluida, torre de tres cubos, uso de cuchara y vocabulario de diez a veinte palabras',
              say: 'A los dieciocho meses camina de forma totalmente independiente, sube escalones tomado de una mano, construye torres de tres cubos, utiliza la cuchara para alimentarse y maneja un vocabulario expresivo de diez a veinte palabras comprensibles para su entorno.',
            },
            {
              t: 'Veinticuatro meses: Frases y control motor avanzado',
              d: 'Corre con seguridad, patea pelota, torre de seis cubos y formula frases de dos palabras conectadas',
              say: 'A los dos años cumplidos corre con total agilidad, sube y baja escaleras solo, patea una pelota, apila seis cubos e hilvana frases de dos palabras conectadas con intención comunicativa clara, iniciando el control diurno de esfínteres.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Baterías de tamizaje en Chile',
      title: 'Instrumentos Estandarizados de Tamizaje: EEDP y TEPSI',
      cards: [
        {
          title: 'Escala de Evaluación del Desarrollo Psicomotor (EEDP)',
          tag: 'De cero a veinticuatro meses',
          kind: 'key',
          items: [
            {
              t: 'Áreas evaluadas en la EEDP',
              d: 'Evalúa cuatro áreas: Motora, Coordinación, Lenguaje y Social en lactantes de 0 a 24 meses',
              say: 'La escala de evaluación del desarrollo psicomotor estandarizada en Chile evalúa sistemáticamente cuatro áreas esenciales: motora gruesa, coordinación viso motriz, lenguaje y comportamiento social en lactantes desde el nacimiento hasta los dos años cumplidos.',
            },
            {
              t: 'Edades de aplicación obligatoria por norma técnica',
              d: 'Aplicación estatutaria a los 8 meses y a los 18 meses de vida en el control de salud infantil',
              say: 'Por directriz oficial del Ministerio de Salud y del programa Chile Crece Contigo, esta batería debe aplicarse obligatoriamente a todos los lactantes a los ocho meses y a los dieciocho meses de vida dentro del control de salud infantil.',
            },
          ],
        },
        {
          title: 'Test de Desarrollo Psicomotor (TEPSI)',
          tag: 'De dos a cinco años (veinticuatro a cincuenta y nueve meses)',
          kind: 'criteria',
          items: [
            {
              t: 'Áreas evaluadas en el TEPSI',
              d: 'Evalúa tres áreas: Coordinación, Lenguaje y Motricidad en preescolares de 2 a 5 años',
              say: 'El test de desarrollo psicomotor evalúa el rendimiento de los preescolares de dos a cinco años mediante cincuenta y dos ítems distribuidos en tres subtests específicos: coordinación visomotriz fina, lenguaje verbal y motricidad gruesa.',
            },
            {
              t: 'Edad de aplicación universal programada',
              d: 'Aplicación estandarizada en atención primaria a los 3 años cumplidos (treinta y seis meses)',
              say: 'En todos los centros de salud familiar del país, el test preescolar tiene su aplicación universal y programada fijada por protocolo a los tres años cumplidos, equivalente a los treinta y seis meses de edad.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estratificación y conducta',
      title: 'Puntajes de Corte y Flujo de Intervención en Atención Primaria',
      cards: [
        {
          title: 'Clasificación del Coeficiente de Desarrollo',
          tag: 'Puntajes de corte oficiales MINSAL',
          kind: 'alert',
          items: [
            {
              t: 'Normal y Normal con Rezago',
              d: 'Puntaje mayor o igual a 85 puntos; rezago si el puntaje global es normal pero reprueba un ítem específico',
              say: 'Un coeficiente de desarrollo igual o superior a ochenta y cinco puntos define normalidad. Si el puntaje global es normal pero el niño reprueba un ítem específico del test, se cataloga formalmente como desarrollo normal con rezago.',
            },
            {
              t: 'Riesgo y Retraso del Desarrollo',
              d: 'Riesgo: 70 a 84 puntos. Retraso psicomotor formal: menor a 70 puntos',
              say: 'Un resultado entre setenta y ochenta y cuatro puntos se clasifica como riesgo de déficit psicomotor, mientras que cualquier puntuación estrictamente inferior a setenta puntos constituye retraso del desarrollo psicomotor comprobado.',
            },
          ],
        },
        {
          title: 'Conductas Estatutarias según Clasificación',
          tag: 'Salas de estimulación y derivación médica',
          kind: 'key',
          items: [
            {
              t: 'Conducta en categoría de Riesgo (70 a 84 puntos)',
              d: 'Ingreso inmediato a Sala de Estimulación de APS y reevaluación con la batería en 60 a 90 días',
              say: 'Todo lactante o preescolar diagnosticado en categoría de riesgo debe ingresar inmediatamente a la sala de estimulación comunal para intervención terapéutica multidisciplinaria, planificando su reevaluación estandarizada con la misma batería en sesenta días.',
            },
            {
              t: 'Conducta en categoría de Retraso (menor a 70 puntos)',
              d: 'Evaluación médica inmediata en APS y derivación prioritaria a pediatría o neurología infantil',
              say: 'La clasificación de retraso psicomotor exige una evaluación médica diagnóstica presencial inmediata para pesquisar etiologías metabólicas, genéticas o neurológicas subyacentes, y la derivación prioritaria e interconsulta a neurología infantil o pediatría.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Banderas rojas del neurodesarrollo',
      title: 'Banderas Rojas y Signos de Alarma que Exigen Derivación Inmediata',
      cards: [
        {
          title: 'Banderas Rojas Motoras y Sensoriales',
          tag: 'Edades límite absolutas de logro',
          kind: 'alert',
          items: [
            {
              t: 'Límites de sostén cefálico y sedestación',
              d: 'Ausencia de sostén cefálico a los 4 meses o falta de sedestación sin apoyo a los 9 meses',
              say: 'La ausencia de sostén cefálico a los cuatro meses o la incapacidad para mantenerse sentado sin apoyo a los nueve meses representan alteraciones mayores del tono muscular axial que obligan a estudio etiológico inmediato sin dilaciones.',
            },
            {
              t: 'Límite máximo para la marcha: 18 meses',
              d: 'No caminar de forma independiente a los 18 meses es bandera roja absoluta; nunca esperar a los 2 años',
              say: 'Graben este punto cardinal: el límite biológico absoluto para lograr la marcha independiente son los dieciocho meses. No caminar de forma autónoma a los dieciocho meses nunca es una variante normal y exige derivación médica prioritaria.',
            },
          ],
        },
        {
          title: 'Banderas Rojas Sociales y Regresión',
          tag: 'Sospecha de TEA y neurodegeneración',
          kind: 'alert',
          items: [
            {
              t: 'Ausencia de sonrisa y de señalar con el dedo',
              d: 'Falta de sonrisa social a los 3 meses o no señalar para pedir objetos a los 12 meses',
              say: 'La falta de sonrisa social responsiva a los tres meses o no señalar con el dedo para pedir cosas a los doce meses constituyen banderas rojas tempranas para sospechar trastornos del neurodesarrollo o del espectro autista.',
            },
            {
              t: 'Pérdida de habilidades adquiridas (Regresión)',
              d: 'La pérdida de cualquier pauta ya lograda es signo de alarma máxima de patología metabólica o regresión autista',
              say: 'La pérdida o regresión de cualquier destreza psicomotora previamente consolidada, ya sea motriz, de lenguaje o social, es la alarma neurológica de mayor gravedad y orienta hacia enfermedades neurodegenerativas, metabólicas o del espectro autista.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Comparativa de instrumentos',
      title: 'Comparativa de Instrumentos de Tamizaje del DSM en Atención Primaria',
      head: ['Parámetro', 'EEDP (Lactantes 0 a 24 meses)', 'TEPSI (Preescolares 2 a 5 años)'],
      rows: [
        {
          cells: ['Población Objetivo', 'Lactantes de 0 a 24 meses cumplidos', 'Preescolares de 2 a 5 años (24 a 59 meses)'],
          say: 'La escala de evaluación del desarrollo psicomotor cubre a lactantes hasta los dos años cumplidos, mientras que el test preescolar abarca desde los dos hasta los cinco años de vida.',
        },
        {
          cells: ['Aplicación Obligatoria', 'A los 8 meses y a los 18 meses de vida', 'A los 3 años cumplidos (36 meses)'],
          say: 'Las edades de aplicación obligatoria normadas por el Ministerio son a los ocho y a los dieciocho meses para la primera batería, y a los tres años cumplidos para el test preescolar.',
        },
        {
          cells: ['Áreas Evaluadas', 'Motora, Coordinación, Lenguaje y Social', 'Coordinación, Lenguaje y Motricidad'],
          say: 'La herramienta de lactantes examina cuatro dimensiones incluyendo el área social, en tanto que el test de preescolares focaliza sus reactivos en coordinación motriz fina, lenguaje y motricidad gruesa.',
        },
        {
          cells: ['Puntaje Normal', 'Coeficiente de Desarrollo mayor o igual a 85', 'Puntaje T mayor o igual a 85'],
          say: 'El corte de normalidad es exactamente el mismo en ambos instrumentos, requiriendo un puntaje estandarizado igual o superior a ochenta y cinco puntos.',
        },
        {
          cells: ['Rango de Riesgo', 'Coeficiente entre 70 y 84 puntos', 'Puntaje T entre 70 y 84 puntos'],
          say: 'El intervalo de riesgo se extiende de setenta a ochenta y cuatro puntos en ambas baterías, derivando oportunamente a la sala de estimulación temprana.',
        },
        {
          cells: ['Retraso Formal', 'Coeficiente menor a 70 puntos', 'Puntaje T menor a 70 puntos'],
          say: 'Un resultado inferior a setenta puntos clasifica retraso formal del neurodesarrollo en ambos instrumentos y requiere evaluación diagnóstica por médico especialista.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Flujo Chile Crece Contigo',
      title: 'Algoritmo de Pesquisa y Manejo del Déficit del DSM en Atención Primaria',
      say: 'Analicemos el algoritmo oficial para tamizar el desarrollo psicomotor en el control sano, estratificar el resultado e implementar la intervención.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2019 · Pregunta 159',
      title: 'Prematuro con Marcha en Punta de Pies e Hiperreflexia',
      stem: 'Un niño de 18 meses de edad, con antecedente de haber nacido prematuro a las 32 semanas de edad gestacional, camina en punta de pies. Logró la marcha independiente hace un mes. Al examen físico, tiene aumento del tono muscular de las extremidades inferiores, con hiperreflexia rotuliana bilateral y presencia de signo de Babinski.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Estereotipia de la marcha' },
        { letter: 'B', text: 'Retraso del desarrollo psicomotor simple' },
        { letter: 'C', text: 'Diplejía espástica' },
        { letter: 'D', text: 'Polineuropatía desmielinizante' },
        { letter: 'E', text: 'Distrofia muscular congénita' },
      ],
      correct: 'C',
      explanation: 'La marcha en punta de pies en un niño con antecedente de prematuridad moderada (32 semanas) que asocia hipertonía espástica de extremidades inferiores, hiperreflexia y signo de Babinski es el cuadro clásico de DIPLEJÍA ESPÁSTICA, la forma más común de parálisis cerebral en prematuros secundaria a leucomalacia periventricular. Aunque la marcha en puntillas transitoria puede ser fisiológica en menores de 3 años, los signos piramidales (hiperreflexia, espasticidad, Babinski) confirman compromiso de motoneurona superior.',
      say: {
        stem: 'Niño de dieciocho meses con antecedente de prematuridad a las treinta y dos semanas que camina en puntillas con hipertonía de extremidades inferiores, hiperreflexia y Babinski.',
        question: '¿Cuál es el diagnóstico más probable para este paciente?',
        options: 'La opción A propone estereotipia de la marcha. La B retraso psicomotor simple. La C diplejía espástica. La D polineuropatía. La E distrofia muscular. Razona tu respuesta.',
        answer: 'La respuesta correcta es la C. Los signos piramidales focales en extremidades inferiores tras prematurez configuran una diplejía espástica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'EEDP en Rango de Riesgo en Lactante de 8 Meses',
      stem: 'Un lactante de 8 meses acude a control de salud infantil en el CESFAM. La enfermera aplica la Escala de Evaluación del Desarrollo Psicomotor (EEDP), obteniendo un Coeficiente de Desarrollo de 76 puntos.',
      question: '¿Cuál es la clasificación del desarrollo y la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Desarrollo normal; citar a control habitual a los 12 meses' },
        { letter: 'B', text: 'Riesgo de déficit del DSM; derivar a Sala de Estimulación y reevaluar con EEDP en 60 días' },
        { letter: 'C', text: 'Retraso del DSM; derivar de urgencia a Neurología Infantil' },
        { letter: 'D', text: 'Retraso del DSM; hospitalizar para estudio metabólico' },
        { letter: 'E', text: 'Desarrollo con rezago; indicar control telefónico en 6 meses' },
      ],
      correct: 'B',
      explanation: 'En la EEDP y en el TEPSI, un Coeficiente de Desarrollo entre 70 y 84 puntos se clasifica oficialmente como RIESGO de déficit psicomotor. Según las normas de Chile Crece Contigo y del MINSAL, la conducta inmediata ante un lactante con riesgo es el ingreso a la Sala de Estimulación de APS a cargo de educadora/kinesiólogo y la reevaluación estandarizada con una nueva EEDP en 60 días. El retraso formal (< 70 puntos) es el que amerita evaluación médica diagnóstica y derivación a especialista.',
      say: {
        stem: 'Lactante de ocho meses evaluado con escala de desarrollo psicomotor que obtiene un coeficiente de setenta y seis puntos.',
        question: '¿Cuál es la clasificación del desarrollo y la conducta inicial más adecuada?',
        options: 'La opción A plantea desarrollo normal. La B riesgo de déficit con ingreso a sala de estimulación y reevaluación en sesenta días. La C retraso con derivación neurológica. La D hospitalización. La E rezago telefónico. Piensa la conducta estatutaria.',
        answer: 'La respuesta correcta es la B. Un puntaje entre setenta y ochenta y cuatro califica como riesgo, ingresando a sala de estimulación para reevaluar en sesenta días.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Ausencia de Marcha Independiente a los 18 Meses',
      stem: 'Durante el control de salud infantil de un niño de 18 meses, el médico constata que aún no camina de forma independiente, requiriendo ser tomado de ambas manos para dar pasos inestables. Además dice solo una palabra inespecífica y no señala con el dedo para pedir objetos.',
      question: '¿Cuál es la conducta médica más adecuada?',
      options: [
        { letter: 'A', text: 'Tranquilizar a la madre y esperar hasta los 24 meses, dado que la marcha puede demorarse' },
        { letter: 'B', text: 'Indicar uso de andador infantil para fortalecer la musculatura de extremidades inferiores' },
        { letter: 'C', text: 'Considerar bandera roja por falta de marcha a los 18 meses, realizar examen neurológico completo y derivar a especialista' },
        { letter: 'D', text: 'Solicitar únicamente radiografía de pelvis para descartar displasia de cadera' },
        { letter: 'E', text: 'Suspender lácteos e indicar suplementos multivitamínicos orales' },
      ],
      correct: 'C',
      explanation: 'Los 18 meses constituyen la edad límite superior absoluta para la marcha autónoma independiente. La incapacidad para caminar a los 18 meses, sumada a la ausencia de lenguaje y falta de señalamiento, constituye una bandera roja formal que exige un examen físico neurológico acucioso y la derivación inmediata a Pediatría o Neurología Infantil. Jamás se debe tranquilizar a la familia diciendo que es normal esperar a los 2 años, y el uso de andador está proscrito por alto riesgo de accidentes graves.',
      say: {
        stem: 'Niño de dieciocho meses que no camina de forma independiente, dice una sola palabra y no señala con el dedo.',
        question: '¿Cuál es la conducta médica más adecuada para este paciente?',
        options: 'La opción A propone esperar a los dos años. La B indicar andador infantil. La C considerar bandera roja formal, realizar examen neurológico y derivar a especialista. La D radiografía aislada. La E multivitamínicos. Identifica la conducta correcta.',
        answer: 'La respuesta correcta es la C. Los dieciocho meses son el límite absoluto para la marcha; su ausencia exige examen neurológico y derivación inmediata.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Desarrollo Psicomotor Infantil',
      cards: [
        {
          title: 'Tamizaje y Rangos de Corte MINSAL',
          tag: 'Normalidad, riesgo y retraso',
          kind: 'key',
          items: [
            {
              t: 'Edades clave: 8 y 18 meses (EEDP), 3 años (TEPSI)',
              d: 'Puntajes: mayor o igual a 85 normal, 70 a 84 riesgo, menor a 70 retraso formal',
              say: 'Recuerden con exactitud las fechas estatutarias: escala de lactantes a los ocho y dieciocho meses, y test preescolar a los tres años. El corte de riesgo va de setenta a ochenta y cuatro puntos, y el retraso formal se diagnostica bajo setenta.',
            },
            {
              t: 'Manejo en Sala de Estimulación en 60 días',
              d: 'Todo puntaje en riesgo ingresa a sala de estimulación de APS y se reevalúa en 60 días',
              say: 'El hallazgo de riesgo exige ingresar de inmediato al paciente a la sala de estimulación del centro de salud con reevaluación protocolizada en sesenta días.',
            },
          ],
        },
        {
          title: 'Límites Absolutos y Alertas Neurológicas',
          tag: 'Banderas rojas indeclinables',
          kind: 'alert',
          items: [
            {
              t: 'Dieciocho meses como límite máximo de marcha',
              d: 'La ausencia de marcha independiente a los 18 meses es bandera roja y obliga a derivación',
              say: 'Fijen en su mente que los dieciocho meses son el techo absoluto para la marcha independiente; cualquier retraso posterior exige descartar patología neuromotriz o parálisis cerebral de inmediato.',
            },
            {
              t: 'Regresión de pautas adquiridas es urgencia',
              d: 'La pérdida de habilidades previamente logradas exige estudio metabólico y neurológico urgente',
              say: 'La pérdida de cualquier destreza que el niño ya dominaba constituye una bandera roja urgente que orienta hacia enfermedades degenerativas del sistema nervioso central.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Pesquisa y Manejo del Déficit del DSM en Atención Primaria',
    root: N(
      'start',
      'Lactante o Preescolar en Control de Salud Infantil en APS',
      'Observación de hitos clínicos y aplicación de batería según edad: EEDP a los 8 y 18 meses, TEPSI a los 3 años',
      'Iniciamos el tamizaje del desarrollo psicomotor evaluando los hitos clínicos y aplicando la batería que corresponde por edad.',
      [
        'Puntaje global mayor o igual a 85 puntos',
        N(
          'q',
          '¿Presenta fracaso en algún ítem específico de la batería?',
          'Revisión minuciosa de cada una de las subescalas del instrumento aplicado',
          'Determinamos si el niño aprobó todos los ítems o si presenta una falla focal aislada.',
          [
            'Todos los ítems aprobados sin fallas aisladas',
            N(
              'ok',
              'Desarrollo Psicomotor Normal',
              'Refuerzo de pautas de crianza respetuosa y estimulación · Próximo control según calendario',
              'Con puntaje normal y sin fallas específicas reforzamos la estimulación y citamos al control regular.',
            ),
          ],
          [
            'Falla en un ítem específico pero puntaje global normal',
            N(
              'do',
              'Desarrollo Psicomotor con Rezago',
              'Pautas de estimulación focalizada en el área deficitaria · Reevaluación en el próximo control de salud',
              'Si presenta rezago en una sola área entregamos pautas dirigidas de estimulación y reevaluamos en el siguiente control.',
            ),
          ],
        ),
      ],
      [
        'Puntaje global menor a 85 puntos en la batería estandarizada',
        N(
          'q',
          '¿Cuál es el Coeficiente de Desarrollo o Puntaje T obtenido?',
          'Estratificación oficial entre rango de riesgo o retraso psicomotor clínico',
          'Estratificamos el puntaje numérico para definir la severidad del compromiso y la conducta asistencial.',
          [
            'Puntaje entre 70 y 84 puntos',
            N(
              'do',
              'Riesgo de Déficit del Desarrollo Psicomotor',
              'Ingreso a Sala de Estimulación de APS · Reevaluación con la misma batería en sesenta días',
              'Frente a un puntaje en rango de riesgo indicamos ingreso a sala de estimulación y reevaluación en sesenta días.',
            ),
          ],
          [
            'Puntaje menor a 70 puntos o presencia de bandera roja',
            N(
              'refer',
              'Retraso del Desarrollo Psicomotor o Alerta Neurológica',
              'Evaluación médica inmediata en APS · Derivación prioritaria a Pediatría o Neurología Infantil',
              'Con puntaje bajo setenta o banderas rojas realizamos examen médico y derivamos prioritariamente a especialista.',
            ),
          ],
        ),
      ],
    ),
  },
};
