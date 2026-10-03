// Clase 1.1 de Endocrinología — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-01).
// Preguntas reales: books/data/real_questions_by_code.json vía classes/scripts/class_questions.cjs.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-01',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Leer la TSH y la T4 libre juntas, y saber cuándo no tratar',
      say: 'Bienvenidos. Abrimos el bloque de tiroides con la clase que ordena todas las demás: cómo leer un perfil tiroideo. Casi todas las preguntas de tiroides del EUNACOM te entregan una TSH y una T cuatro libre, y te piden decidir. Hoy vas a aprender a leerlas juntas, a separar lo primario de lo central, y a reconocer al paciente grave de la UCI al que no hay que tratar. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiología',
      title: 'El eje hipotálamo, hipófisis y tiroides',
      nodes: [
        { id: 'trh', col: 0, row: 1, k: 'cause', t: 'Hipotálamo: TRH', s: 'Hormona liberadora de tirotropina' },
        { id: 'tsh', col: 1, row: 1, k: 'mech', t: 'Adenohipófisis: TSH', s: 'Tirotropina' },
        { id: 'tir', col: 2, row: 1, k: 'mech', t: 'Tiroides', s: 'T4 80% · T3 20%' },
        { id: 't3', col: 3, row: 1, k: 'effect', t: 'T4 → T3 en los tejidos', s: 'Desyodasas en hígado, riñón y músculo' },
        { id: 'fb', col: 2, row: 3, k: 'alert', t: 'Retroalimentación negativa', s: 'La T4 libre frena la TSH' },
      ],
      edges: [
        { from: 'trh', to: 'tsh', label: 'estimula' }, { from: 'tsh', to: 'tir', label: 'estimula' },
        { from: 'tir', to: 't3' }, { from: 'tir', to: 'fb' }, { from: 'fb', to: 'tsh', label: 'frena' },
      ],
      steps: [
        { show: ['trh', 'tsh'], note: 'Arriba manda el hipotálamo',
          say: 'Empecemos por el eje, porque todo lo que vamos a interpretar sale de aquí. El hipotálamo secreta TRH, la hormona liberadora de tirotropina, y esta estimula a la adenohipófisis para que produzca TSH, la tirotropina.' },
        { show: ['tir'], note: 'La tiroides fabrica sobre todo T4',
          say: 'La TSH estimula a la tiroides, que fabrica sobre todo T cuatro, cerca del ochenta por ciento, y solo un veinte por ciento de T tres.' },
        { show: ['t3'], note: 'La T3 activa se fabrica afuera',
          say: 'Pero la hormona activa es la T tres. Y la mayor parte de la T tres circulante no sale de la tiroides: se fabrica en el hígado, el riñón y el músculo, cuando unas enzimas, las desyodasas, le quitan un yodo a la T cuatro. Guarda esta idea, porque es la base del síndrome del eutiroideo enfermo.' },
        { show: ['fb'], note: 'Un termostato: la TSH se mueve primero',
          say: 'Y el eje se regula por retroalimentación negativa: la T cuatro libre frena a la hipófisis. Funciona como un termostato. Si la T cuatro baja un poco, la TSH sube mucho; si la T cuatro sube un poco, la TSH se desploma.' },
      ],
    },

    {
      type: 'points',
      kicker: 'El examen inicial',
      title: 'Siempre se parte por la TSH',
      cards: [
        { title: 'TSH ultrasensible', tag: 'Tamizaje de elección', kind: 'key', items: [
          { t: 'Cambios mínimos de T4L', d: 'Producen cambios grandes de TSH',
            say: 'De ese termostato sale la regla más útil de la clase. Como variaciones mínimas de la T cuatro libre producen cambios enormes de la TSH, la TSH es el sensor más fino que tienes.' },
          { t: 'Primera prueba ante cualquier sospecha', d: 'En cualquier nivel de atención',
            say: 'Por eso la TSH ultrasensible es la prueba inicial de elección ante cualquier sospecha de enfermedad tiroidea, en cualquier nivel de atención. Es la más sensible y la más costo efectiva. Cuando la pregunta dice examen de elección para iniciar el estudio, la respuesta es la TSH.' },
        ] },
        { title: 'Valor normal', tag: 'Adulto', kind: 'criteria', items: [
          { t: 'TSH 0,4 a 4,0–4,5 mUI/L', d: 'Fuera del embarazo',
            say: 'El valor normal en el adulto va de cero coma cuatro a cuatro, o cuatro y medio. Fíjate que dije adulto: en el embarazo los rangos cambian, y eso lo vemos en la clase de situaciones especiales.' },
        ] },
        { title: 'T4 libre', tag: 'Complementa', kind: 'normal', items: [
          { t: 'Define el tipo de falla', d: 'La TSH sola no distingue lo central',
            say: 'La T cuatro libre se suma para clasificar. La TSH te dice que algo anda mal; la T cuatro libre te dice qué tan mal y dónde está la falla. Y hay un caso en que la TSH sola te engaña, que es el que viene.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Interpretación cruzada',
      title: 'Cuatro patrones con dos exámenes',
      nodes: [
        { id: 'tsh', col: 0, row: 2, k: 'start', t: 'TSH + T4 libre', s: 'Leerlas siempre juntas' },
        { id: 'pri', col: 2, row: 0, k: 'risk', t: 'Hipotiroidismo primario', s: 'TSH alta · T4L baja' },
        { id: 'sub', col: 2, row: 1, k: 'effect', t: 'Hipotiroidismo subclínico', s: 'TSH alta · T4L normal' },
        { id: 'hip', col: 2, row: 3, k: 'risk', t: 'Hipertiroidismo primario', s: 'TSH < 0,1 · T4L y/o T3 altas' },
        { id: 'cen', col: 2, row: 4, k: 'trap', t: 'Hipotiroidismo central', s: 'T4L baja · TSH baja o "normal"' },
        { id: 'glan', col: 4, row: 1, k: 'good', t: 'Falla en la glándula', s: 'Más del 95% de los hipotiroidismos' },
        { id: 'hipo', col: 4, row: 4, k: 'alert', t: 'Falla en la hipófisis', s: 'O en el hipotálamo' },
      ],
      edges: [
        { from: 'tsh', to: 'pri' }, { from: 'tsh', to: 'sub' }, { from: 'tsh', to: 'hip' }, { from: 'tsh', to: 'cen' },
        { from: 'pri', to: 'glan' }, { from: 'sub', to: 'glan' }, { from: 'cen', to: 'hipo' },
      ],
      steps: [
        { show: ['tsh'], note: 'Dos exámenes, cuatro patrones',
          say: 'Ahora juntemos los dos exámenes. Con la TSH y la T cuatro libre se arman cuatro patrones, y cada uno se deduce del termostato.' },
        { show: ['pri'], note: 'La hipófisis grita porque falta hormona',
          say: 'Si la tiroides falla, la T cuatro libre baja, y la hipófisis responde subiendo mucho la TSH. TSH alta con T cuatro libre baja es el hipotiroidismo primario.' },
        { show: ['sub'], note: 'La hipófisis logra compensar',
          say: 'Si la tiroides está empezando a fallar, la TSH sube y alcanza a mantener la T cuatro libre en rango normal. TSH alta con T cuatro libre normal es el hipotiroidismo subclínico: una falla compensada, con pocos o ningún síntoma.' },
        { show: ['glan'], note: 'Casi todo hipotiroidismo es primario',
          say: 'Estos dos patrones comparten el problema: la glándula. Y el primario explica más del noventa y cinco por ciento de los hipotiroidismos.' },
        { show: ['hip'], note: 'El termostato se apaga',
          say: 'Al revés, si la tiroides produce de más, la T cuatro libre o la T tres suben, y la TSH queda suprimida, bajo cero coma uno. Es el hipertiroidismo primario, que tiene su propio bloque más adelante.' },
        { show: ['cen'], note: 'El patrón que engaña',
          say: 'Y el cuarto patrón es el que se pregunta, porque engaña. T cuatro libre baja, pero la TSH está baja o normal. ¿Normal? Si la T cuatro está baja, una hipófisis sana debería estar gritando con una TSH alta. Una TSH normal en ese contexto es inapropiada.' },
        { show: ['hipo'], note: 'El problema está arriba',
          say: 'Eso significa que el problema no está en la tiroides, sino arriba, en la hipófisis o el hipotálamo: el hipotiroidismo central. Y es justamente el caso en que la TSH sola, sin la T cuatro libre, te habría dejado tranquilo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hipotiroidismo central',
      title: 'Antes de la hormona, la suprarrenal',
      cards: [
        { title: 'Reconocerlo', tag: 'TSH inapropiada', kind: 'criteria', items: [
          { t: 'T4L baja con TSH baja o normal', d: 'TSH "normal" entre 1,0 y 3,5',
            say: 'Repasemos cómo se reconoce: T cuatro libre baja con una TSH baja, o con una TSH que parece normal, entre uno y tres coma cinco, pero que es inapropiada para esa T cuatro.' },
          { t: 'Adenoma, Sheehan, cirugía o radioterapia', d: 'Causas hipofisarias o hipotalámicas',
            say: 'Las causas son las que dañan la hipófisis: un adenoma hipofisario, el síndrome de Sheehan después de un parto con hemorragia, o una cirugía o radioterapia de la región. Y como la hipófisis maneja varios ejes, estos pacientes suelen tener además hipogonadismo o falta de cortisol.' },
        ] },
        { title: 'Estudiarlo', tag: 'Imagen', kind: 'key', items: [
          { t: 'Resonancia de hipófisis', d: 'Estudio de la silla turca',
            say: 'Por eso el hipotiroidismo central no se trata a ciegas: exige una resonancia magnética de hipófisis.' },
        ] },
        { title: 'Tratarlo', tag: 'La regla que salva', kind: 'alert', items: [
          { t: 'Descartar insuficiencia suprarrenal', d: 'Antes de dar levotiroxina',
            say: 'Y la regla más importante: nunca inicies levotiroxina sin haber descartado, y tratado si existe, una insuficiencia suprarrenal. La hormona tiroidea acelera el consumo de cortisol, y en un paciente sin reserva puede desencadenar una crisis suprarrenal. Esta misma idea la vamos a ver con toda su fuerza en el coma mixedematoso.' },
          { t: 'Se controla con T4 libre', d: 'No con TSH',
            say: 'Un detalle práctico: en el central, el control del tratamiento se hace con la T cuatro libre, no con la TSH, porque la TSH ya no es un sensor confiable.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Síndrome del eutiroideo enfermo',
      title: 'El paciente de UCI con la T3 baja',
      nodes: [
        { id: 'enf', col: 0, row: 1, k: 'cause', t: 'Enfermedad crítica', s: 'Sepsis, shock, trauma, cetoacidosis' },
        { id: 'cit', col: 1, row: 1, k: 'mech', t: 'Citoquinas inflamatorias', s: 'Interleuquina 6, TNF alfa' },
        { id: 'des', col: 2, row: 1, k: 'mech', t: 'Frenan la 5\'-desyodasa', s: 'Menos conversión de T4 a T3' },
        { id: 'rt3', col: 3, row: 0, k: 'effect', t: 'T3 baja + T3 reversa alta', s: 'TSH y T4L normales' },
        { id: 'gra', col: 3, row: 2, k: 'risk', t: 'Si es más grave', s: 'Bajan también T4L y TSH' },
        { id: 'aho', col: 4, row: 1, k: 'good', t: 'Respuesta adaptativa', s: 'Ahorro de energía' },
      ],
      edges: [
        { from: 'enf', to: 'cit' }, { from: 'cit', to: 'des' },
        { from: 'des', to: 'rt3' }, { from: 'des', to: 'gra', label: 'mayor gravedad' },
        { from: 'rt3', to: 'aho' }, { from: 'gra', to: 'aho' },
      ],
      steps: [
        { show: ['enf'], note: 'No es una enfermedad de la tiroides',
          say: 'Ahora el tercer gran tema: el síndrome del eutiroideo enfermo. El nombre lo dice todo: la tiroides está sana, pero el paciente está muy enfermo de otra cosa. Sepsis, shock, un politraumatizado, una cetoacidosis o un postoperatorio mayor en la UCI.' },
        { show: ['cit', 'des'], note: 'Se bloquea la fábrica periférica de T3',
          say: '¿Recuerdas que la T tres activa se fabrica afuera, en los tejidos? Las citoquinas inflamatorias frenan justamente esa enzima, la desyodasa periférica. Entonces baja la conversión de T cuatro a T tres.' },
        { show: ['rt3'], note: 'Síndrome de T3 baja',
          say: 'Y la T cuatro se desvía hacia la T tres reversa, que es inactiva. Por eso la alteración más precoz y más común es una T tres muy baja, con la TSH y la T cuatro libre normales. Por eso también se llama síndrome de T tres baja.' },
        { show: ['gra'], note: 'Puede imitar un hipotiroidismo central',
          say: 'Si el paciente está más grave, también bajan la T cuatro libre y la TSH. Ojo aquí: T cuatro baja con TSH baja se parece mucho al hipotiroidismo central que acabamos de ver. Lo que los separa es el contexto: un paciente crítico con la T tres reversa alta.' },
        { show: ['aho'], note: 'El cuerpo se defiende ahorrando',
          say: 'Y la clave para entender la conducta: esto no es una falla, es una respuesta adaptativa. El organismo gravemente enfermo baja su metabolismo para ahorrar energía. Si lo piensas así, la conducta sale sola.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Síndrome del eutiroideo enfermo',
      title: 'Se trata la enfermedad, no el examen',
      cards: [
        { title: 'Prohibido', tag: 'Regla de oro', kind: 'alert', items: [
          { t: 'No dar levotiroxina ni T3', d: 'No mejora el pronóstico',
            say: 'La regla de oro: en el eutiroideo enfermo está contraindicado dar levotiroxina o T tres. No mejora el pronóstico y puede aumentar la mortalidad, porque obliga a gastar energía a un organismo que está intentando ahorrarla.' },
        ] },
        { title: 'Conducta', tag: 'Observar', kind: 'key', items: [
          { t: 'Tratar la enfermedad de base', d: 'La sepsis, el shock, la pancreatitis',
            say: 'La conducta es observar el eje tiroideo y tratar exclusivamente la enfermedad de base. Cuando el paciente mejora, el perfil se normaliza solo.' },
          { t: 'Repetir el perfil tras el alta', d: 'Semanas después',
            say: 'Y el perfil tiroideo se reevalúa semanas después del alta. Si en ese momento sigue alterado, recién ahí piensas en una enfermedad tiroidea real.' },
        ] },
        { title: 'La trampa', tag: 'Alternativa tentadora', kind: 'criteria', items: [
          { t: 'T3 baja en un paciente crítico', d: 'No es hipotiroidismo',
            say: 'En el examen, la alternativa trampa siempre es iniciar levotiroxina endovenosa o T tres por sonda, porque el examen sale bajo. Si ves un paciente de UCI con la T tres baja y la TSH normal, la respuesta es no tocar el eje.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Pongamos todo en un solo árbol, tal como vas a leer un perfil tiroideo en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Patrones del perfil tiroideo',
      head: ['Diagnóstico', 'TSH', 'T4 libre', 'Conducta'],
      rows: [
        { cells: ['Hipotiroidismo primario', 'Alta (> 4,5)', 'Baja', 'Levotiroxina 1,6 mcg/kg/día (GES)'],
          say: 'Repasemos en una tabla. Hipotiroidismo primario: TSH alta y T cuatro libre baja. Se trata con levotiroxina, uno coma seis microgramos por kilo al día, con garantía GES. La dosis y sus excepciones las vemos en detalle en la próxima clase.' },
        { cells: ['Hipotiroidismo subclínico', 'Alta', 'Normal', 'Tratar si TSH ≥ 10, síntomas, anti-TPO (+) o embarazo'],
          say: 'Subclínico: TSH alta con T cuatro libre normal. No siempre se trata: se trata si la TSH llega a diez o más, si hay síntomas, anticuerpos anti TPO positivos o embarazo.' },
        { cells: ['Hipotiroidismo central', 'Baja o "normal"', 'Baja', 'Resonancia de hipófisis; descartar Addison antes'],
          say: 'Central: T cuatro libre baja con TSH baja o inapropiadamente normal. Resonancia de hipófisis, y descartar insuficiencia suprarrenal antes de dar la hormona.' },
        { cells: ['Hipertiroidismo primario', 'Suprimida (< 0,1)', 'Alta', 'Tiamazol, propranolol y anticuerpos TRAb'],
          say: 'Hipertiroidismo primario: TSH suprimida bajo cero coma uno, con T cuatro libre alta. Se inicia tiamazol y propranolol, y se piden anticuerpos contra el receptor de TSH.' },
        { cells: ['Hipertiroidismo subclínico', 'Baja (< 0,4)', 'Normal', 'Observar; tratar si FA, osteoporosis o TSH < 0,1'],
          say: 'Hipertiroidismo subclínico: TSH baja con T cuatro libre normal. Se observa, y se trata si hay fibrilación auricular, osteoporosis, o una TSH bajo cero coma uno.' },
        { cells: ['Eutiroideo enfermo', 'Normal o algo baja', 'Normal o baja', 'Observar; tratar la enfermedad de base'],
          say: 'Y el eutiroideo enfermo: T tres baja, con T tres reversa alta, TSH normal o algo baja. Se observa y se trata la enfermedad de base. Dar levotiroxina aquí es el error clásico.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 66 años en UCI por shock séptico de foco pulmonar, intubado y con noradrenalina. Perfil tiroideo de ingreso: TSH 0,6 mUI/L (VN 0,4–4,0), T4 libre 0,82 ng/dL (VN 0,8–1,8), T3 total 35 ng/dL (VN 80–200) y T3 reversa muy elevada. Sin antecedentes de patología tiroidea ni bocio.',
      question: '¿Cuál es la conducta más adecuada respecto del eje tiroideo?',
      options: [
        { letter: 'A', text: 'Iniciar levotiroxina endovenosa en dosis sustitutiva completa' },
        { letter: 'B', text: 'Iniciar T3 (liotironina) por sonda nasogástrica' },
        { letter: 'C', text: 'Observar el eje tiroideo, tratar la sepsis y repetir el perfil semanas después del alta' },
        { letter: 'D', text: 'Solicitar resonancia de hipófisis por hipotiroidismo central' },
        { letter: 'E', text: 'Iniciar hidrocortisona y luego levotiroxina' },
      ],
      correct: 'C',
      explanation: 'Paciente crítico con T3 muy baja, T3 reversa alta y TSH y T4 libre normales: síndrome del eutiroideo enfermo. Es una respuesta adaptativa; la levotiroxina y la T3 están contraindicadas. Se trata la sepsis y se reevalúa el perfil semanas después del alta.',
      say: {
        stem: 'Vamos al caso. Hombre de sesenta y seis años en la UCI por un shock séptico de foco pulmonar, intubado y con noradrenalina. El perfil tiroideo de ingreso muestra una TSH de cero coma seis, una T cuatro libre de cero coma ochenta y dos, en el límite bajo, una T tres total muy baja, y una T tres reversa muy elevada. Nunca tuvo problemas de tiroides.',
        question: '¿Cuál es la conducta más adecuada respecto del eje tiroideo?',
        options: 'Las opciones: levotiroxina endovenosa en dosis completa, T tres por sonda, observar el eje y tratar la sepsis, resonancia de hipófisis, o hidrocortisona seguida de levotiroxina. Piénsalo.',
        answer: 'Es la C. Paciente crítico, T tres muy baja con T tres reversa alta, y TSH y T cuatro libre normales: es el síndrome del eutiroideo enfermo, una respuesta de ahorro. Se trata la sepsis y el perfil se repite semanas después del alta. La A y la B son la trampa, porque tratan el examen y pueden aumentar la mortalidad. Y la D cae porque la TSH y la T cuatro libre están normales: no hay patrón central.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 161',
      stem: 'Un paciente de 30 años, sin antecedentes, consulta por fatigabilidad asociada a disminución de peso desde hace tres meses. Al entrevistarlo de forma dirigida refiere que hace tres meses tuvo una ruptura sentimental, por lo que desde entonces además de los síntomas mencionados ha estado con pena, insomnio y desconcentración. Su examen físico resulta normal y su índice de masa corporal es 22.',
      question: 'El examen de elección para descartar causa orgánica en este caso es:',
      options: [
        { letter: 'A', text: 'Tirotropina' },
        { letter: 'B', text: 'VDRL' },
        { letter: 'C', text: 'Hemograma' },
        { letter: 'D', text: 'Creatinina y enzimas hepáticas' },
        { letter: 'E', text: 'Glicemia de ayuno' },
      ],
      correct: 'A',
      explanation: 'Tiene una depresión, y la causa orgánica que más la imita es la disfunción tiroidea. La TSH (tirotropina) es la prueba inicial de elección ante cualquier sospecha tiroidea; el hemograma y la glicemia también se piden, pero la más importante es la TSH.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil trece. Hombre de treinta años, sin antecedentes, con tres meses de fatiga y baja de peso. Dirigidamente cuenta una ruptura sentimental, y desde entonces pena, insomnio y desconcentración. Examen físico normal.',
        question: '¿Cuál es el examen de elección para descartar una causa orgánica?',
        options: 'Las opciones: tirotropina, VDRL, hemograma, creatinina y enzimas hepáticas, o glicemia de ayuno. Piénsalo.',
        answer: 'Es la A, la tirotropina, que es simplemente la TSH con otro nombre. Es un cuadro depresivo, y la causa orgánica que más lo imita es la tiroides. Y ya sabes que ante cualquier sospecha tiroidea se parte por la TSH. El hemograma es el distractor tentador, y también se pide, pero el examen de elección es la TSH. Fíjate que el enunciado la esconde bajo el nombre tirotropina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 33',
      stem: 'Una paciente de 25 años acude a chequeo médico. Como antecedente, usa suplementos de vitamina D y anticonceptivos orales. Los exámenes de laboratorio muestran T4 total de 16 ng/mL (valor normal 5 a 12) y TSH de 0,9 mU/L (valor normal 0,5 a 5). El examen físico es normal.',
      question: '¿Qué examen es el más adecuado para proseguir el estudio?',
      options: [
        { letter: 'A', text: 'Anticuerpos anti-receptor de TSH' },
        { letter: 'B', text: 'Cintigrafía tiroidea' },
        { letter: 'C', text: 'Triyodotironina (T3)' },
        { letter: 'D', text: 'T4 libre' },
        { letter: 'E', text: 'Tiroglobulina' },
      ],
      correct: 'D',
      explanation: 'Los estrógenos (anticonceptivos, embarazo) elevan la globulina fijadora de tiroxina (TBG), por lo que la T4 total sube sin que cambie la hormona activa. La TSH normal ya descarta hipertiroidismo; si se quiere completar, se mide la T4 libre, que no depende de la TBG.',
      say: {
        stem: 'Una más reciente, del EUNACOM de diciembre de dos mil veinticinco. Mujer de veinticinco años, en chequeo, usuaria de anticonceptivos orales. Tiene una T cuatro total alta, de dieciséis, con una TSH normal, de cero coma nueve. Examen físico normal.',
        question: '¿Qué examen es el más adecuado para proseguir el estudio?',
        options: 'Las opciones: anticuerpos contra el receptor de TSH, cintigrafía tiroidea, T tres, T cuatro libre, o tiroglobulina. Piénsalo.',
        answer: 'Es la D, la T cuatro libre. Los estrógenos de los anticonceptivos aumentan la proteína que transporta la tiroxina en la sangre, y la T cuatro total sube sin que cambie la hormona activa. Por eso se mide la libre. Y fíjate en lo más importante: la TSH normal ya te decía que no hay hipertiroidismo. Los anticuerpos y la cintigrafía son la trampa: estudian un hipertiroidismo que esta paciente no tiene.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 109',
      stem: 'Una paciente de 28 años, se realiza una histerectomía postparto, por una inercia uterina. Usted la atiende 6 meses después, sin lactancia y permaneciendo en amenorrea. Presenta un cuadro de astenia, adinamia y malestar general, asociada a debilidad. Tiene piel seca, con cabello quebradizo, palidez y su presión arterial es de 90/60 mmHg.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Tiroiditis postparto' },
        { letter: 'B', text: 'Panhipopituitarismo' },
        { letter: 'C', text: 'Depresión postparto' },
        { letter: 'D', text: 'Insuficiencia ovárica' },
        { letter: 'E', text: 'Hipotiroidismo' },
      ],
      correct: 'B',
      explanation: 'Hemorragia obstétrica seguida de agalactia, astenia, piel seca e hipotensión: síndrome de Sheehan, con falla de varios ejes hipofisarios (tiroideo, suprarrenal, lactotropo). El hipotiroidismo que tiene es central; por eso se descarta la insuficiencia suprarrenal antes de dar levotiroxina.',
      say: {
        stem: 'Y una tercera, del EUNACOM de julio de dos mil quince. Mujer de veintiocho años a la que le hicieron una histerectomía postparto por una inercia uterina. Seis meses después no ha tenido lactancia, tiene astenia, debilidad, piel seca, cabello quebradizo, palidez, y una presión de noventa sesenta.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: tiroiditis postparto, panhipopituitarismo, depresión postparto, insuficiencia ovárica, o hipotiroidismo. Piénsalo.',
        answer: 'Es la B, un panhipopituitarismo por síndrome de Sheehan. La hemorragia del parto dañó la hipófisis, y por eso no hubo lactancia. La piel seca habla del eje tiroideo, y la hipotensión, del eje suprarrenal. La E es la trampa: sí tiene hipotiroidismo, pero es central y es solo una parte del cuadro. Y justamente por esa hipotensión, antes de darle levotiroxina hay que cubrir el cortisol.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Leer el perfil', tag: 'TSH primero', kind: 'key', items: [
          { t: 'La TSH es la primera prueba', d: 'Ante cualquier sospecha tiroidea',
            say: 'Cerremos con las reglas de oro. La TSH es la primera prueba ante cualquier sospecha tiroidea, porque es el sensor más fino del eje.' },
          { t: 'TSH alta: T4L baja o normal', d: 'Primario o subclínico',
            say: 'TSH alta con T cuatro libre baja es primario; con T cuatro libre normal, subclínico. Y la T cuatro total engaña cuando hay estrógenos: se mide la libre.' },
        ] },
        { title: 'Central', tag: 'TSH inapropiada', kind: 'alert', items: [
          { t: 'T4L baja con TSH baja o normal', d: 'Resonancia + cortisol antes',
            say: 'Si la T cuatro libre está baja y la TSH no sube, piensa en la hipófisis: resonancia, y descartar insuficiencia suprarrenal antes de la levotiroxina.' },
        ] },
        { title: 'Eutiroideo enfermo', tag: 'No tratar', kind: 'pharma', items: [
          { t: 'Paciente crítico con T3 baja', d: 'Tratar la enfermedad de base',
            say: 'Y en el paciente crítico con la T tres baja, no se da hormona: se trata la enfermedad de base y se repite el perfil después del alta. Si te llevas una sola idea de hoy: la TSH y la T cuatro libre se leen juntas, y el contexto decide si se trata. En la próxima clase usamos esto para tratar el hipotiroidismo primario. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Interpretación inicial del perfil tiroideo',
    root: N('start', 'Sospecha de disfunción tiroidea', 'Primera prueba: TSH',
      'Ante cualquier sospecha de enfermedad tiroidea se parte por la TSH, el sensor más fino del eje. Pero antes de leerla, mira el contexto del paciente.',
      ['', N('q', '¿Paciente crítico en UCI?', 'Sepsis, shock, trauma',
        '¿Está gravemente enfermo de otra cosa? Porque en ese paciente el perfil cambia sin que la tiroides esté enferma.',
        ['SÍ', N('ok', 'Eutiroideo enfermo', 'T3 baja: observar, no tratar',
          'Si es un paciente crítico con la T tres baja y la T tres reversa alta, es el síndrome del eutiroideo enfermo. Se trata la enfermedad de base, no se da hormona, y el perfil se repite después del alta.')],
        ['NO', N('q', '¿Cómo está la TSH?', 'Con T4 libre',
          'Si no es un paciente crítico, lee la TSH junto con la T cuatro libre.',
          ['Alta', N('q', '¿T4 libre?', 'Baja o normal',
            'Con la TSH alta, la falla está en la glándula. La T cuatro libre dice si ya es clínica o todavía está compensada.',
            ['Baja', N('do', 'Hipotiroidismo primario', 'Levotiroxina (GES)',
              'TSH alta con T cuatro libre baja: hipotiroidismo primario. Se trata con levotiroxina, con garantía GES.')],
            ['Normal', N('do', 'Hipotiroidismo subclínico', 'Tratar solo con criterios',
              'TSH alta con T cuatro libre normal: subclínico. Se trata si la TSH es de diez o más, o si hay síntomas, anticuerpos positivos o embarazo.')])],
          ['Suprimida', N('refer', 'Hipertiroidismo', 'T4L alta: primario',
            'TSH suprimida con T cuatro libre alta: hipertiroidismo primario, que estudiamos en su propio bloque.')],
          ['Baja o normal con T4L baja', N('alert', 'Hipotiroidismo central', 'Resonancia · cortisol antes',
            'Si la T cuatro libre está baja y la TSH no sube, es central. Resonancia de hipófisis, y descartar insuficiencia suprarrenal antes de dar levotiroxina.')])])]),
  },
};
