// Clase 1.3 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-03',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Registro basal no estresante, variabilidad, desaceleraciones DIP I-II-III, Score de Manning y Test de Pose',
      say: 'Bienvenidos a la tercera clase de obstetricia. Hoy abordamos la evaluación del bienestar fetal antenatal, uno de los temas con mayor número de preguntas clínicas en el EUNACOM. En esta sesión aprenderás a interpretar el registro basal no estresante, a diferenciar las desaceleraciones precoces de las tardías y variables, a dominar las cinco variables del perfil biofísico de Manning y a definir cuándo una alteración exige la interrupción inmediata del embarazo. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología de la hipoxia fetal',
      title: 'Cascada de deterioro biofísico y redistribución hemodinámica',
      nodes: [
        { id: 'hip', col: 0, row: 2, k: 'start', t: 'Hipoxia fetal progresiva', s: 'Insuficiencia placentaria o compresión funicular' },
        { id: 'rbn', col: 1, row: 1, k: 'alert', t: 'Pérdida de reactividad', s: 'Primer centro en deprimirse: sistema simpático y aceleraciones' },
        { id: 'res', col: 2, row: 0, k: 'alert', t: 'Cese de respiración fetal', s: 'Inhibición de movimientos respiratorios continuos' },
        { id: 'cor', col: 2, row: 2, k: 'risk', t: 'Abolición de movimientos', s: 'Cese de movimientos corporales y pérdida del tono flexor' },
        { id: 'oli', col: 3, row: 3, k: 'trap', t: 'Oligohidramnios crónico', s: 'Vasoconstricción renal fetal por redistribución de flujo' },
        { id: 'asf', col: 4, row: 2, k: 'trap', t: 'Asfixia y acidosis metabólica', s: 'pH fetal bajo 7.20 y riesgo de muerte intrauterina' },
      ],
      edges: [
        { from: 'hip', to: 'rbn', label: 'hipoxia precoz' },
        { from: 'rbn', to: 'res', label: 'depresión cortical' },
        { from: 'res', to: 'cor', label: 'compromiso motor' },
        { from: 'hip', to: 'oli', label: 'redistribución' },
        { from: 'cor', to: 'asf', label: 'falla central' },
        { from: 'oli', to: 'asf', label: 'colapso crónico' },
      ],
      steps: [
        {
          show: ['hip', 'rbn'],
          note: 'Inicio de la hipoxia y respuesta simpática',
          say: 'Los centros neurológicos que controlan las distintas variables biofísicas tienen distinta sensibilidad a la falta de oxígeno. El primero en afectarse ante una hipoxia incipiente es el sistema nervioso autónomo central, manifestándose precozmente por la pérdida de las aceleraciones y disminución de la variabilidad en el registro basal no estresante.',
        },
        {
          show: ['res', 'cor'],
          note: 'Deterioro motor progresivo',
          say: 'Si la hipoxia se profundiza, se inhiben consecutivamente los centros subcorticales del tronco encefálico: primero desaparecen los movimientos respiratorios fetales, luego los movimientos corporales gruesos y finalmente se pierde el tono flexor fetal, lo que traduce una acidemia severa.',
        },
        {
          show: ['oli', 'asf'],
          note: 'Redistribución de flujo y asfixia',
          say: 'De manera paralela y crónica, el feto hipóxico redistribuye su gasto cardíaco priorizando cerebro, corazón y glándulas suprarrenales a expensas de la vasoconstricción renal y esplácnica. La menor perfusión renal reduce la diuresis fetal, originando oligohidramnios. Por ello, el líquido amniótico disminuido es un marcador de sufrimiento crónico prolongado.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Monitoreo electrónico basal',
      title: 'Parámetros del Registro Basal No Estresante en veinte a cuarenta minutos',
      cards: [
        {
          title: 'Frecuencia cardíaca basal y variabilidad',
          kind: 'criteria',
          items: [
            {
              text: 'Frecuencia basal normal: ciento diez a ciento sesenta latidos por minuto.',
              say: 'La frecuencia cardíaca fetal basal normal se sitúa entre ciento diez y ciento sesenta latidos por minuto. Una frecuencia sobre ciento sesenta define taquicardia fetal, comúnmente causada por fiebre materna o corioamnionitis; bajo ciento diez define bradicardia sostenida.',
            },
            {
              text: 'Variabilidad moderada normal: fluctuaciones de seis a veinticinco latidos por minuto.',
              say: 'La variabilidad latido a latido es el parámetro individual más fidedigno de oxigenación cerebral. La variabilidad moderada normal de seis a veinticinco latidos traduce un sistema nervioso autónomo perfectamente perfundido.',
            },
          ],
        },
        {
          title: 'Aceleraciones transitorias de la FCF',
          kind: 'key',
          items: [
            {
              text: 'Aumento transitorio de al menos quince latidos por al menos quince segundos.',
              say: 'En fetos de treinta y dos semanas o más, una aceleración normal es una elevación de la frecuencia de al menos quince latidos sobre la línea de base que dura al menos quince segundos. En menores de treinta y dos semanas basta un aumento de diez latidos por diez segundos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Interpretación del trazado',
      title: 'Clasificación del RBNE y tipología de desaceleraciones',
      cards: [
        {
          title: 'Trazado Reactivo versus No Reactivo',
          kind: 'key',
          items: [
            {
              text: 'Reactivo: dos o más aceleraciones en veinte minutos con variabilidad conservada.',
              say: 'Un registro es reactivo cuando presenta al menos dos aceleraciones en un lapso de veinte minutos, con frecuencia basal normal y variabilidad adecuada. Predice bienestar fetal en más del noventa y nueve por ciento para la siguiente semana.',
            },
            {
              text: 'No Reactivo: menos de dos aceleraciones en cuarenta minutos de registro.',
              say: 'Un trazado no reactivo no es sinónimo de asfixia fetal, ya que en el ochenta por ciento de los casos se debe a un ciclo de sueño profundo fisiológico. Obliga a estimular al feto acústicamente o a complementar con un perfil biofísico.',
            },
          ],
        },
        {
          title: 'Desaceleraciones: DIP I, DIP II y DIP III',
          kind: 'alert',
          items: [
            {
              text: 'DIP I o precoces: sincrónicas con la contracción por compresión cefálica refleja.',
              say: 'Las desaceleraciones precoces o DIP uno coinciden con el acmé de la contracción uterina por estimulación vagal secundaria a compresión de la cabeza fetal. Son fisiológicas y no indican hipoxia ni exigen cesárea.',
            },
            {
              text: 'DIP II o tardías: decalaje tras el acmé de la contracción por hipoxia uteroplacentaria.',
              say: 'Las desaceleraciones tardías o DIP dos comienzan después del punto máximo de la contracción y se recuperan tardíamente. Traducen hipoxia tisular severa por insuficiencia de la placenta y exigen interrupción urgente.',
            },
            {
              text: 'DIP III o variables: forma en V o W por compresión mecánica del cordón umbilical.',
              say: 'Las desaceleraciones variables o DIP tres tienen forma aguda en V y se deben a compresión transitoria del cordón. Si son profundas o duran más de sesenta segundos, alertan sobre riesgo de acidemia.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación biofísica integral',
      title: 'Perfil Biofísico Fetal de Manning: las cinco variables ecográficas',
      cards: [
        {
          title: 'Marcadores agudos del sistema nervioso central',
          kind: 'criteria',
          items: [
            {
              text: '1) Reactividad cardíaca: RBNE reactivo con dos aceleraciones otorga dos puntos.',
              say: 'El perfil de Manning evalúa cinco variables en treinta minutos de ecografía y monitorización. Cada variable normal suma dos puntos; si está ausente suma cero puntos. El primer parámetro es el registro basal reactivo.',
            },
            {
              text: '2) Movimientos respiratorios y 3) Movimientos corporales gruesos.',
              say: 'La segunda variable es la presencia de al menos un episodio de movimientos respiratorios continuos de treinta segundos. La tercera variable son al menos tres movimientos corporales o de extremidades fetales.',
            },
            {
              text: '4) Tono fetal: al menos un episodio de extensión activa con retorno rápido a flexión.',
              say: 'El cuarto parámetro es el tono flexor: se observa a la extremidad o la mano del feto extenderse y flexionarse activamente. Es el último marcador agudo en perderse en la acidosis grave.',
            },
          ],
        },
        {
          title: 'Marcador crónico placentario',
          kind: 'alert',
          items: [
            {
              text: '5) Volumen de líquido amniótico: al menos un bolsillo vertical único de dos centímetros o más.',
              say: 'La quinta variable es el líquido amniótico. Exige visualizar al menos un bolsillo vertical único libre de partes fetales de dos centímetros o más de profundidad, o un índice de Phelan mayor o igual a cinco centímetros.',
            },
            {
              text: 'El oligohidramnios refleja hipoperfusión renal crónica por vasoconstricción fetal.',
              say: 'A diferencia de los otros cuatro parámetros que reflejan el estado del sistema nervioso central en ese instante, el líquido amniótico refleja la función placentaria y la perfusión renal de las últimas semanas.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Interpretación y conducta',
      title: 'Estratificación del Score de Manning y conducta obstétrica',
      head: ['Puntaje PBF', 'Interpretación clínica de asfixia', 'Mortalidad perinatal', 'Conducta recomendada'],
      rows: [
        {
          cells: [
            '10 de 10 u 8 de 10 con líquido normal',
            'Feto normal sin asfixia fetal · excelente reserva de oxígeno',
            'Menor a uno por cada mil nacidos vivos',
            'Conducta expectante; continuar control prenatal habitual y repetir en siete días si persiste indicación.',
          ],
          say: 'Un score de ocho sobre diez con volumen de líquido amniótico normal o diez sobre diez descarta asfixia fetal con alta seguridad. Permite mantener una conducta expectante y continuar el control habitual.',
        },
        {
          cells: [
            '8 de 10 con Oligohidramnios (cero puntos en líquido)',
            'Insuficiencia placentaria crónica establecida con feto aún compensado',
            'Aumento significativo de riesgo de muerte súbita intrauterina',
            'En embarazos de término mayores o iguales a 37 semanas se indica interrupción inmediata del parto.',
          ],
          say: 'Ojo con este escenario clásico del examen: un perfil de ocho sobre diez donde la única variable fallida es el líquido amniótico. Si el embarazo es de término, el oligohidramnios obliga a interrumpir el embarazo sin dilaciones.',
        },
        {
          cells: [
            '6 de 10 (puntaje dudoso)',
            'Sospecha de asfixia fetal incipiente o feto en ciclo de reposo fisiológico',
            'Riesgo intermedio de morbimortalidad',
            'Si es de término, interrumpir; si es pretérmino, repetir en doce a veinticuatro horas o realizar prueba de Pose.',
          ],
          say: 'Un puntaje de seis sobre diez es dudoso. Si el feto es de término se interrumpe el embarazo; si es pretérmino se repite en doce a veinticuatro horas o se realiza una prueba de contracciones de Pose.',
        },
        {
          cells: [
            '0 a 4 de 10 (puntaje patológico)',
            'Alta probabilidad de asfixia fetal severa y acidosis metabólica',
            'Mortalidad perinatal muy elevada',
            'Interrupción inmediata del embarazo por la vía más expedita, habitualmente cesárea de urgencia.',
          ],
          say: 'Un puntaje de cero a cuatro sobre diez traduce asfixia intrauterina severa. La indicación indiscutible es la interrupción inmediata del embarazo por la vía más expedita, que casi siempre es una cesárea de urgencia.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Prueba de estrés contráctil',
      title: 'Test de Tolerancia a las Contracciones o Prueba de Pose',
      cards: [
        {
          title: 'Mecanismo de la Prueba de Pose',
          kind: 'key',
          items: [
            {
              text: 'Inducción de tres contracciones uterinas en diez minutos mediante infusión de oxitocina.',
              say: 'El test de tolerancia a las contracciones somete al feto al estrés transitorio del trabajo de parto mediante una microinfusión controlada de oxitocina, logrando tres contracciones de buena intensidad en diez minutos.',
            },
            {
              text: 'Test Negativo: ausencia de desaceleraciones tardías DIP II; confirma bienestar fetal.',
              say: 'Si no aparecen desaceleraciones tardías, la prueba es negativa y garantiza que la reserva placentaria tolerará un parto vaginal sin asfixia.',
            },
            {
              text: 'Test Positivo: presencia de DIP II en el cincuenta por ciento o más de las contracciones.',
              say: 'Si aparecen DIP dos en la mitad o más de las contracciones, la prueba es positiva e indica que el feto caerá en acidosis durante el trabajo de parto, indicándose cesárea.',
            },
          ],
        },
        {
          title: 'Contraindicaciones formales de la Prueba de Pose',
          kind: 'alert',
          items: [
            {
              text: 'Situaciones donde las contracciones uterinas ponen en riesgo la vida materna o fetal.',
              say: 'Está formalmente contraindicado realizar una prueba de Pose en presencia de placenta previa, cesárea anterior clásica o corporal, antecedente de rotura uterina o amenaza de parto prematuro extremo.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Enfrentamiento ante sospecha de compromiso del bienestar fetal',
      say: 'Revisemos el algoritmo escalonado ante una paciente que consulta por disminución de movimientos fetales.',
    },

    {
      type: 'table',
      kicker: 'Diagnósticos diferenciales y trampas',
      title: 'Trampas del EUNACOM en monitorización fetal',
      head: ['Hallazgo o escenario clínico', 'Error habitual en la respuesta', 'Concepto fisiopatológico real', 'Conducta correcta'],
      rows: [
        {
          cells: [
            'Registro basal no reactivo aislado en paciente asintomática',
            'Indicar cesárea de urgencia inmediata por sospecha de sufrimiento fetal',
            'En el ochenta por ciento de los casos el feto está simplemente dormido',
            'Estimulación vibroacústica o prolongar trazado a 40 minutos; si persiste no reactivo, pedir Perfil Biofísico.',
          ],
          say: 'Un registro no reactivo nunca justifica una cesárea inmediata por sí solo. La causa más frecuente es el sueño fetal. Se realiza estimulación acústica o se solicita un perfil biofísico antes de tomar decisiones quirúrgicas.',
        },
        {
          cells: [
            'Desaceleraciones precoces DIP I durante trabajo de parto activo',
            'Suspender conducción y realizar cesárea de urgencia por sufrimiento',
            'Son causadas por compresión fisiológica de la cabeza fetal con reflejo vagal transitorio',
            'Continuar el trabajo de parto normalmente; son un hallazgo benigno que no indica hipoxia.',
          ],
          say: 'Los DIP uno son sincrónicos con la contracción y totalmente fisiológicos. No traducen asfixia ni requieren ninguna intervención.',
        },
        {
          cells: [
            'Perfil biofísico de ocho sobre diez con oligoamnios a las cuarenta semanas',
            'Mantener conducta expectante hasta la semana cuarenta y uno por puntaje tranquilizador',
            'El oligoamnios es un marcador de hipoperfusión placentaria crónica no compensable a término',
            'Indicar la interrupción del embarazo en ese momento mediante inducción o cesárea.',
          ],
          say: 'Aunque el puntaje global sea ocho, la presencia de oligohidramnios en un feto de término obliga a interrumpir el embarazo debido al riesgo de compresión de cordón y muerte súbita.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 54',
      caseText: 'Una paciente de treinta años, cursando un embarazo de cuarenta semanas, consulta por ausencia de percepción de movimientos fetales durante las últimas horas, por lo que se realiza un perfil biofísico fetal que resulta ocho de diez, con presencia de oligoamnios evidente. La conducta más adecuada es:',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Dejar a evolución espontánea y controlar en una semana', isCorrect: false },
        { letter: 'B', text: 'Interrumpir inmediatamente por cesárea sin evaluar cuello', isCorrect: false },
        { letter: 'C', text: 'Inducir el parto en este momento', isCorrect: true },
        { letter: 'D', text: 'Repetir el perfil biofísico fetal en cuarenta y ocho horas', isCorrect: false },
        { letter: 'E', text: 'Inducir el parto al cumplir las cuarenta y una semanas', isCorrect: false },
      ],
      correct: 'C',
      say: {
        stem: 'Revisemos esta pregunta de agosto de dos mil veintiuno. Una paciente de cuarenta semanas consulta por disminución de movimientos fetales. Se realiza un perfil biofísico que resulta ocho sobre diez, pero con presencia de oligohidramnios.',
        question: 'Nos consultan por la conducta más adecuada.',
        options: 'Las alternativas son: opción A, evolución espontánea; opción B, cesárea inmediata; opción C, inducir el parto en este momento; opción D, repetir perfil en cuarenta y ocho horas; y opción E, inducir a las cuarenta y una semanas. Piénsalo.',
        answer: 'La respuesta correcta es la opción C. El puntaje de ocho sobre diez confirma que el feto no presenta asfixia aguda; sin embargo, el oligohidramnios refleja insuficiencia placentaria crónica. En un embarazo de término a las cuarenta semanas, el oligohidramnios es indicación formal de interrupción, pudiendo realizarse inducción del parto vaginal si no existen contraindicaciones obstétricas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 43',
      caseText: 'Embarazada de treinta y seis semanas, con antecedente de cesárea previa, consulta por disminución marcada de movimientos fetales. Se realiza un registro basal no estresante que resulta no reactivo persistente en cuarenta minutos. El perfil biofísico muestra tono y movimientos conservados, pero con un bolsillo vertical único de líquido amniótico menor a un centímetro. Al tacto vaginal se constata cuello uterino posterior, firme y cerrado con índice de Bishop de tres puntos. ¿Cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Interrumpir el embarazo por cesárea', isCorrect: true },
        { letter: 'B', text: 'Maduración cervical con misoprostol vaginal e inducción con oxitocina', isCorrect: false },
        { letter: 'C', text: 'Hospitalizar y repetir el perfil biofísico en veinticuatro horas', isCorrect: false },
        { letter: 'D', text: 'Administrar betametasona y diferir conducta por cuarenta y ocho horas', isCorrect: false },
        { letter: 'E', text: 'Dar el alta con control ambulatorio de movimientos fetales', isCorrect: false },
      ],
      correct: 'A',
      say: {
        stem: 'Analicemos esta pregunta oficial de enero de dos mil veintitrés. Una paciente de treinta y seis semanas con cesárea previa presenta disminución de movimientos, registro basal no reactivo, oligohidramnios severo con bolsillo menor a un centímetro y cuello desfavorable.',
        question: 'Se consulta por la conducta clínica más adecuada.',
        options: 'Las opciones son: opción A, interrumpir por cesárea; opción B, misoprostol e inducción; opción C, repetir perfil en veinticuatro horas; opción D, betametasona y esperar; y opción E, alta médica. Piénsalo.',
        answer: 'La respuesta oficial es la opción A, interrumpir por cesárea. El compromiso crónico con oligohidramnios severo sumado a un registro no reactivo en un feto cercano al término exige la interrupción inmediata. Dado que la paciente tiene el antecedente de una cesárea anterior y un cuello totalmente inmaduro, la inducción con misoprostol está contraindicada por riesgo de rotura uterina, siendo la cesárea la vía de elección.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos clave para el EUNACOM',
      title: 'Reglas de oro en evaluación del bienestar fetal',
      cards: [
        {
          title: 'Cuatro certezas clínicas',
          kind: 'key',
          items: [
            {
              text: 'La variabilidad moderada de seis a veinticinco latidos descarta acidemia fetal.',
              say: 'Primera regla: la presencia de variabilidad moderada en el monitoreo descarta hipoxia cerebral grave en ese momento.',
            },
            {
              text: 'Los DIP I son fisiológicos; los DIP II traducen hipoxia por insuficiencia placentaria.',
              say: 'Segunda regla: las desaceleraciones precoces o DIP uno son fisiológicas por compresión de la cabeza; las desaceleraciones tardías o DIP dos indican hipoxia fetal y obligan a resolver el parto.',
            },
            {
              text: 'Score de Manning de cero a cuatro exige cesárea inmediata de urgencia.',
              say: 'Tercera regla: un perfil biofísico fetal menor o igual a cuatro sobre diez es sinónimo de asfixia intrauterina severa y requiere interrupción inmediata por cesárea.',
            },
            {
              text: 'Oligohidramnios en embarazo de término obliga a interrumpir el embarazo.',
              say: 'Cuarta regla: el oligohidramnios a las cuarenta semanas no se observa; se interrumpe el embarazo por riesgo de compresión funicular.',
            },
          ],
        },
        {
          title: 'Idea final',
          kind: 'normal',
          items: [
            {
              text: 'El sueño fetal es la causa más frecuente de registro basal no estresante no reactivo.',
              say: 'Si te llevas una sola idea de hoy: nunca lleves a una paciente a pabellón solo por un registro no reactivo de veinte minutos sin antes descartar que el feto esté durmiendo mediante estímulo o perfil biofísico. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo ante Sospecha de Compromiso del Bienestar Fetal',
    root: N(
      'start',
      'Paciente consulta por disminución de movimientos fetales',
      'Embarazo viable mayor a 28 a 32 semanas · control en urgencia',
      'Iniciamos el enfrentamiento clínico realizando un Registro Basal No Estresante de entrada.',
      [
        'RBNE Reactivo',
        N(
          'ok',
          'Bienestar fetal confirmado',
          '≥ 2 aceleraciones en 20 min · variabilidad 6 a 25 lpm · sin desaceleraciones',
          'El trazado reactivo descarta asfixia actual con un valor predictivo negativo superior al noventa y nueve por ciento.',
          [
            'Conducta expectante',
            N(
              'ok',
              'Alta o control prenatal habitual',
              'Educar en conteo diario de movimientos fetales',
              'Tranquilizamos a la paciente y mantenemos el control habitual en atención primaria.',
            ),
          ],
        ),
      ],
      [
        'RBNE No Reactivo tras 40 minutos',
        N(
          'q',
          'Ausencia de aceleraciones transitorias',
          'Feto potencialmente dormido versus hipoxia inicial',
          'Realizamos estímulo vibroacústico y solicitamos Perfil Biofísico Fetal ecográfico.',
          [
            'PBF 8 a 10 con líquido amniótico normal',
            N(
              'ok',
              'Feto sano en reposo fisiológico',
              'Variables ecográficas normales',
              'El perfil tranquilizador confirma que el feto no presenta asfixia; control ambulatorio.',
            ),
          ],
          [
            'PBF 8 con Oligohidramnios en feto de término (≥ 37 sem)',
            N(
              'do',
              'Interrupción del embarazo a término',
              'Inducción del parto vaginal o cesárea según condiciones obstétricas',
              'A término, el oligohidramnios es indicación de interrupción para evitar muerte fetal.',
            ),
          ],
          [
            'PBF 0 a 4 de 10 o presencia de DIP II persistentes',
            N(
              'alert',
              'Asfixia fetal severa / Sufrimiento fetal agudo',
              'Acidosis metabólica intrauterina · trazado ominoso',
              'Indicamos interrupción inmediata del embarazo por la vía más expedita.',
              [
                'Resolución quirúrgica de urgencia',
                N(
                  'do',
                  'Cesárea de urgencia inmediata',
                  'Reanimación intrauterina + traslado urgente a pabellón',
                  'Traslado inmediato a pabellón con oxígeno materno y decúbito lateral izquierdo.',
                ),
              ],
            ),
          ],
        ),
      ],
    ),
  },
};
