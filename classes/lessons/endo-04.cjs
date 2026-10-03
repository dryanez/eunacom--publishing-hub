// Clase 1.4 de Endocrinología — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-04).
// Preguntas reales: books/data/real_questions_by_code.json vía classes/scripts/class_questions.cjs.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-04',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Metas de TSH por trimestre y el tamizaje de talón que previene el cretinismo',
      say: 'Bienvenidos. Cerramos el bloque de hipotiroidismo con dos pacientes especiales: la embarazada y el recién nacido. En los dos, lo que está en juego es el mismo órgano, el cerebro del niño. Y en los dos, el examen pregunta números concretos: la meta de TSH en cada trimestre, cuánto subir la levotiroxina al confirmar el embarazo, y a qué hora de vida se toma la muestra de talón. Vamos a dejarlos claros.',
    },

    {
      type: 'flow',
      kicker: 'Fisiología del embarazo',
      title: '¿Por qué cambian las reglas?',
      nodes: [
        { id: 'hcg', col: 0, row: 0, k: 'cause', t: 'hCG', s: 'Estimula débilmente el receptor de TSH' },
        { id: 'est', col: 0, row: 1, k: 'cause', t: 'Estrógenos', s: 'Duplican la TBG' },
        { id: 'pla', col: 0, row: 2, k: 'cause', t: 'Desyodasa placentaria tipo 3', s: 'Degrada T4 a T3 reversa' },
        { id: 'fet', col: 0, row: 3, k: 'cause', t: 'Feto', s: 'Usa la T4 materna' },
        { id: 'dem', col: 2, row: 1, k: 'mech', t: 'Sobrecarga tiroidea materna', s: 'Más demanda de T4' },
        { id: 'ran', col: 3, row: 1, k: 'alert', t: 'Los rangos habituales no sirven', s: 'Metas propias del embarazo' },
        { id: 'cer', col: 3, row: 3, k: 'risk', t: 'Primer trimestre', s: 'El cerebro fetal depende de la madre' },
      ],
      edges: [
        { from: 'hcg', to: 'dem' }, { from: 'est', to: 'dem' }, { from: 'pla', to: 'dem' }, { from: 'fet', to: 'dem' },
        { from: 'dem', to: 'ran' }, { from: 'fet', to: 'cer' },
      ],
      steps: [
        { show: ['hcg'], note: 'La hCG se parece a la TSH',
          say: 'Partamos por la fisiología, porque explica por qué las reglas cambian. La gonadotropina coriónica humana, la hCG, se parece a la TSH, y estimula débilmente su receptor en la tiroides materna.' },
        { show: ['est', 'pla'], note: 'Más proteína que atrapa T4 y más degradación',
          say: 'Los estrógenos duplican la proteína que transporta la tiroxina, la TBG; es lo mismo que vimos con los anticonceptivos en la primera clase del bloque. Y la placenta tiene su propia desyodasa, que degrada T cuatro a T tres reversa.' },
        { show: ['fet'], note: 'Un consumidor más',
          say: 'Y hay un consumidor nuevo: el feto. Durante el primer trimestre, su cerebro depende exclusivamente de la T cuatro materna que atraviesa la placenta.' },
        { show: ['dem', 'ran'], note: 'La tiroides materna trabaja más',
          say: 'Todo eso es una sobrecarga para la tiroides de la madre, que necesita producir más. Por eso los rangos normales de TSH de la mujer no embarazada no sirven en la gestación: hay metas propias.' },
        { show: ['cer'], note: 'Lo que está en juego',
          say: 'Y lo que está en juego es enorme. Si a la madre le falta hormona, aumenta el riesgo de aborto, de preeclampsia, de bajo peso al nacer, y de menor coeficiente intelectual en el hijo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Embarazo',
      title: 'Las metas de TSH y la regla de la dosis',
      cards: [
        { title: 'Metas de TSH', tag: 'MINSAL y ATA', kind: 'criteria', items: [
          { t: '1° trimestre: TSH < 2,5 mUI/L', d: 'La meta más estricta',
            say: 'Las metas de TSH en el embarazo, según la guía perinatal del MINSAL y la Asociación Americana de Tiroides: en el primer trimestre, bajo dos coma cinco. Es la más estricta, porque es el período en que el cerebro fetal depende por completo de la madre.' },
          { t: '2° y 3° trimestre: TSH < 3,0', d: 'Algo más laxa',
            say: 'En el segundo y tercer trimestre, bajo tres. Esos dos números se preguntan.' },
        ] },
        { title: 'Hipotiroidea conocida', tag: 'Regla de oro', kind: 'alert', items: [
          { t: 'Subir la dosis 20 a 30%', d: 'Equivale a 2 comprimidos extra por semana',
            say: 'Y la regla de oro para la mujer que ya toma levotiroxina: apenas confirma el atraso menstrual o el test de embarazo positivo, sube su dosis en un veinte a treinta por ciento. En la práctica, dos comprimidos adicionales a la semana.' },
          { t: 'De inmediato, sin esperar el control', d: 'La demanda fetal parte temprano',
            say: 'Y lo hace de inmediato, sin esperar el control médico ni un nuevo examen, porque la demanda del feto parte en las primeras semanas. Mantener la dosis porque la última TSH estaba normal es la alternativa trampa.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Hipotiroidismo gestacional',
      title: 'En la embarazada, se trata',
      nodes: [
        { id: 'tsh', col: 0, row: 1, k: 'start', t: 'TSH en el primer control', s: 'Embarazada' },
        { id: 'cli', col: 2, row: 0, k: 'risk', t: 'Hipotiroidismo clínico', s: 'TSH > 2,5 con T4L baja, o TSH ≥ 10' },
        { id: 'sub', col: 2, row: 2, k: 'effect', t: 'Hipotiroidismo subclínico', s: 'TSH 2,5–10 con T4L normal' },
        { id: 'tto', col: 3, row: 1, k: 'good', t: 'Levotiroxina', s: 'Todo TSH > 2,5, más aún con anti-TPO (+)' },
        { id: 'ctl', col: 4, row: 1, k: 'refer', t: 'TSH cada 4 semanas', s: 'Hasta la mitad; otra entre 26 y 32' },
      ],
      edges: [
        { from: 'tsh', to: 'cli' }, { from: 'tsh', to: 'sub' },
        { from: 'cli', to: 'tto' }, { from: 'sub', to: 'tto' }, { from: 'tto', to: 'ctl' },
      ],
      steps: [
        { show: ['tsh'], note: 'Se pide en el ingreso prenatal',
          say: 'Veamos a la embarazada sin diagnóstico previo. La TSH se pide en el primer control prenatal, junto con la T cuatro libre.' },
        { show: ['cli'], note: 'Clínico: T4L baja o TSH de 10',
          say: 'Se habla de hipotiroidismo clínico gestacional si la TSH supera dos coma cinco en el primer trimestre con la T cuatro libre baja, o si la TSH llega a diez o más, sea cual sea la T cuatro.' },
        { show: ['sub'], note: 'Subclínico: entre 2,5 y 10',
          say: 'Y de hipotiroidismo subclínico gestacional si la TSH está entre dos coma cinco y diez, con la T cuatro libre normal.' },
        { show: ['tto'], note: 'Aquí la regla cambia',
          say: 'Y aquí está la gran diferencia con la clase del subclínico. Fuera del embarazo, un subclínico sin factores se observa. En la embarazada, todo hipotiroidismo con TSH sobre dos coma cinco se trata con levotiroxina, y con más razón si los anticuerpos anti TPO son positivos. El embarazo es, justamente, uno de los factores agravantes.' },
        { show: ['ctl'], note: 'Controles más seguidos',
          say: 'El control es más seguido que en la consulta habitual: TSH cada cuatro semanas durante la primera mitad del embarazo, y al menos una vez entre las semanas veintiséis y treinta y dos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hipotiroidismo congénito',
      title: 'El recién nacido que parece sano',
      cards: [
        { title: 'Epidemiología y causa', tag: 'Disgenesia', kind: 'key', items: [
          { t: '1 cada 2.500–3.000 recién nacidos', d: 'Primera causa prevenible de retraso mental',
            say: 'Pasemos al recién nacido. El hipotiroidismo congénito afecta a uno de cada dos mil quinientos a tres mil recién nacidos vivos en Chile, y es la principal causa prevenible de retraso mental, lo que antes se llamaba cretinismo.' },
          { t: 'Disgenesia tiroidea: más del 85%', d: 'Ectopia 50–60%, agenesia 20–30%, hipoplasia',
            say: 'La causa, en más del ochenta y cinco por ciento, es una disgenesia tiroidea: la glándula no se formó bien. Lo más frecuente es la ectopia, una tiroides fuera de lugar, en la mitad o más de los casos; luego la agenesia, y la hipoplasia. El diez a quince por ciento restante son defectos en la fabricación de la hormona, la dishormonogénesis.' },
        ] },
        { title: 'Por qué no se ve', tag: 'Más del 95% asintomático', kind: 'alert', items: [
          { t: 'Lo protege la T4 materna', d: 'Que pasó por la placenta',
            say: 'Y aquí está la trampa clínica: más del noventa y cinco por ciento de estos niños nacen sin síntomas, porque todavía tienen la T cuatro de la madre que atravesó la placenta.' },
          { t: 'Síntomas tardíos', d: 'Ictericia prolongada, macroglosia, hernia umbilical',
            say: 'Los signos clásicos, como la ictericia que dura más de dos semanas, el llanto ronco, la lengua grande, la hernia umbilical, la fontanela posterior amplia, la piel moteada y la hipotonía, aparecen tarde, cuando el daño cerebral ya ocurrió. Por eso no se puede esperar la clínica: hay que buscarlo en todos.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tamizaje neonatal GES',
      title: 'Talón a las 40–48 horas',
      nodes: [
        { id: 'rn', col: 0, row: 1, k: 'start', t: 'Todo recién nacido vivo', s: 'Tamizaje universal GES' },
        { id: 'pic', col: 1, row: 0, k: 'trap', t: 'Pico fisiológico de TSH', s: 'Primeras 24 horas' },
        { id: 'tal', col: 1, row: 2, k: 'mech', t: 'Punción de talón, papel filtro', s: 'Entre las 40 y 48 horas' },
        { id: 'alt', col: 2, row: 2, k: 'q', t: 'TSH de talón > 15–20', s: 'Resultado alterado' },
        { id: 'ven', col: 3, row: 2, k: 'refer', t: 'Confirmar en sangre venosa', s: 'TSH y T4 libre, de inmediato' },
        { id: 'lt4', col: 4, row: 1, k: 'good', t: 'Levotiroxina 10–15 mcg/kg/día', s: 'Antes de los 15 días de vida' },
      ],
      edges: [
        { from: 'rn', to: 'tal' }, { from: 'pic', to: 'tal', label: 'se evita' },
        { from: 'tal', to: 'alt' }, { from: 'alt', to: 'ven' }, { from: 'ven', to: 'lt4' },
      ],
      steps: [
        { show: ['rn'], note: 'A todos, sin excepción',
          say: 'Por eso en Chile existe un tamizaje neonatal universal, con garantía GES: se busca en todos los recién nacidos vivos, tengan o no síntomas. Como detecta la enfermedad ya presente antes de que dé síntomas, es prevención secundaria, y eso también se pregunta.' },
        { show: ['pic'], note: 'La TSH se dispara al nacer',
          say: 'Pero hay un detalle de tiempo. Justo después de nacer, la TSH del recién nacido sube de forma fisiológica, un pico que se da en las primeras veinticuatro horas. Si tomas la muestra ahí, tendrás muchos falsos positivos.' },
        { show: ['tal'], note: 'El número que se pregunta',
          say: 'Por eso la muestra se toma entre las cuarenta y las cuarenta y ocho horas de vida: punción del talón y sangre capilar en papel filtro. Ni en el cordón, ni en las primeras horas, ni en el control del mes.' },
        { show: ['alt', 'ven'], note: 'El papel filtro no diagnostica',
          say: 'Si la TSH de talón sale sobre quince a veinte, no se diagnostica todavía: se confirma de inmediato con TSH y T cuatro libre en sangre venosa.' },
        { show: ['lt4'], note: 'La carrera contra el reloj',
          say: 'Y confirmado, se inicia levotiroxina oral a diez a quince microgramos por kilo al día, antes de los quince días de vida. Fíjate en la dosis: es mucho más alta por kilo que la del adulto. Iniciada a tiempo, el niño tiene un neurodesarrollo y un coeficiente intelectual completamente normales.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos a la madre y al recién nacido en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Embarazo versus recién nacido',
      head: ['Aspecto', 'Embarazo', 'Recién nacido'],
      rows: [
        { cells: ['Examen', 'TSH y T4 libre venosas', 'TSH de talón en papel filtro, 40–48 h'],
          say: 'Repasemos comparando a los dos pacientes. El examen: en la embarazada, TSH y T cuatro libre venosas; en el recién nacido, TSH de talón en papel filtro, a las cuarenta a cuarenta y ocho horas.' },
        { cells: ['Umbral', 'TSH > 2,5 (1° trim.) o > 3,0 (2°–3°)', 'TSH de talón > 15–20: confirmar'],
          say: 'El umbral: en la embarazada, sobre dos coma cinco en el primer trimestre o sobre tres después; en el recién nacido, una TSH de talón sobre quince a veinte, que se confirma en sangre venosa.' },
        { cells: ['Causa más frecuente', 'Hashimoto', 'Disgenesia tiroidea (ectopia)'],
          say: 'La causa: en la madre, el Hashimoto; en el niño, la disgenesia, sobre todo la ectopia.' },
        { cells: ['Si no se trata', 'Aborto, preeclampsia, déficit cognitivo', 'Retraso mental irreversible'],
          say: 'Si no se trata: en el embarazo, aborto, preeclampsia, bajo peso y déficit cognitivo del hijo; en el recién nacido, retraso mental irreversible.' },
        { cells: ['Tratamiento', 'Levotiroxina; hipotiroidea: +20–30% al confirmar', 'Levotiroxina 10–15 mcg/kg/día antes de 15 días'],
          say: 'Y el tratamiento: en la embarazada, levotiroxina, y si ya la tomaba, subir veinte a treinta por ciento apenas confirma el embarazo; en el recién nacido, diez a quince microgramos por kilo antes de los quince días.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Primigesta de 28 años, embarazo de 8 semanas confirmado por ecografía, en su primer control prenatal en el CESFAM. TSH 5,2 mUI/L con T4 libre 1,1 ng/dL (normal). Asintomática, PA 115/70 mmHg, examen segmentario normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Observar, porque la T4 libre es normal, y repetir la TSH en el tercer trimestre' },
        { letter: 'B', text: 'Iniciar levotiroxina 50 mcg/día y controlar TSH en 4 semanas' },
        { letter: 'C', text: 'Iniciar propiltiouracilo' },
        { letter: 'D', text: 'Solicitar ecografía tiroidea antes de decidir' },
        { letter: 'E', text: 'Iniciar levotiroxina después del primer trimestre para evitar teratogenia' },
      ],
      correct: 'B',
      explanation: 'En el primer trimestre la meta es TSH < 2,5. Una TSH de 5,2 con T4L normal es un hipotiroidismo subclínico gestacional, que se trata: el cerebro fetal depende de la T4 materna en las primeras 12 semanas. Levotiroxina 50 mcg/día y TSH en 4 semanas.',
      say: {
        stem: 'Vamos al caso. Primigesta de veintiocho años, con ocho semanas de embarazo, en su primer control prenatal en el CESFAM. La TSH es de cinco coma dos, con la T cuatro libre normal. Está asintomática y su examen es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: observar y repetir en el tercer trimestre, levotiroxina cincuenta microgramos con TSH en cuatro semanas, propiltiouracilo, ecografía tiroidea, o esperar a pasar el primer trimestre para tratar. Piénsalo.',
        answer: 'Es la B. En el primer trimestre la meta es bajo dos coma cinco, así que cinco coma dos es un hipotiroidismo subclínico gestacional, y en la embarazada se trata. La A es la trampa, porque aplica la regla de la mujer no embarazada. Y la E es el error más grave: el primer trimestre es justamente cuando el cerebro fetal depende de la hormona de la madre, y la levotiroxina no es teratogénica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 119',
      stem: '¿Cuál es la conducta más adecuada ante una paciente embarazada en el primer trimestre, que presenta una TSH de 4,5 UI/L?',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar propiltiouracilo' },
        { letter: 'B', text: 'Solicitar T4 libre' },
        { letter: 'C', text: 'Iniciar levotiroxina' },
        { letter: 'D', text: 'Solicitar una nueva TSH en un mes' },
        { letter: 'E', text: 'Solicitar cintigrafía tiroidea' },
      ],
      correct: 'C',
      explanation: 'La meta de TSH en el primer trimestre es < 2,5. Con 4,5, sea hipotiroidismo clínico o subclínico gestacional, la conducta es tratar con levotiroxina.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de julio de dos mil diecinueve, y es directa. Embarazada en el primer trimestre con una TSH de cuatro coma cinco.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: propiltiouracilo, pedir T cuatro libre, iniciar levotiroxina, repetir la TSH en un mes, o cintigrafía. Piénsalo.',
        answer: 'Es la C, iniciar levotiroxina. La meta en el primer trimestre es bajo dos coma cinco, y en la embarazada todo hipotiroidismo sobre ese valor se trata. La B es el distractor tentador, porque fuera del embarazo pedirías la T cuatro libre para clasificar. Pero aquí da lo mismo si es clínico o subclínico: los dos se tratan. Y repetir en un mes es perder semanas del período más crítico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 176',
      stem: '¿A qué tipo de medida corresponde el tamizaje de TSH y fenilcetonuria que se hace a todos los recién nacidos en Chile?',
      question: '¿Qué tipo de medida es?',
      options: [
        { letter: 'A', text: 'Promoción de la salud' },
        { letter: 'B', text: 'Prevención específica' },
        { letter: 'C', text: 'Prevención primaria' },
        { letter: 'D', text: 'Prevención secundaria' },
        { letter: 'E', text: 'Prevención terciaria' },
      ],
      correct: 'D',
      explanation: 'El tamizaje detecta una enfermedad que ya existe, antes de que dé síntomas: es prevención secundaria.',
      say: {
        stem: 'Una del EUNACOM de diciembre de dos mil diecinueve, que mezcla este tema con salud pública.',
        question: '¿A qué tipo de medida corresponde el tamizaje de TSH y fenilcetonuria que se hace a todos los recién nacidos en Chile?',
        options: 'Las opciones: promoción de la salud, prevención específica, prevención primaria, prevención secundaria, o prevención terciaria. Piénsalo.',
        answer: 'Es la D, prevención secundaria. El tamizaje no evita que la enfermedad aparezca, porque el niño ya nace con la tiroides mal formada. Lo que hace es detectarla antes de los síntomas, para tratarla a tiempo. La C es la trampa, porque suena a prevenir el retraso mental; pero prevención primaria sería evitar que la enfermedad ocurra.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 53',
      stem: 'Un lactante de 3 meses, diagnosticado de hipotiroidismo congénito, en tratamiento con levotiroxina 25 mg/día. Se solicita TSH que resulta 0,09 UI/L (VN: 0,7 a 5,7) y T4 libre: 2,18 ng/dl (VN: 0,9 a 2,1).',
      question: 'La conducta más adecuada es:',
      options: [
        { letter: 'A', text: 'Suspender la levotiroxina' },
        { letter: 'B', text: 'Subir la dosis de levotiroxina' },
        { letter: 'C', text: 'Repetir la TSH en 6 semanas' },
        { letter: 'D', text: 'Disminuir la dosis de levotiroxina' },
        { letter: 'E', text: 'Solicitar cintigrafía tiroidea' },
      ],
      correct: 'D',
      explanation: 'TSH suprimida con T4 libre sobre lo normal: el lactante está sobretratado y se disminuye la dosis. El hipotiroidismo congénito no se suspende, porque la glándula no se va a recuperar.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil diecinueve. Lactante de tres meses con hipotiroidismo congénito, en tratamiento con levotiroxina, veinticinco al día. En el control, la TSH está suprimida, en cero coma cero nueve, y la T cuatro libre levemente sobre lo normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: suspender la levotiroxina, subirla, repetir la TSH en seis semanas, disminuir la dosis, o cintigrafía. Piénsalo.',
        answer: 'Es la D, disminuir la dosis. Es el termostato de la primera clase: TSH suprimida con T cuatro libre alta significa que sobra hormona, y el lactante está sobretratado. La A es la trampa: en un hipotiroidismo congénito la glándula no se va a recuperar, así que no se suspende, se ajusta. Y repetir sin cambiar nada deja al niño con exceso de hormona.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Embarazo', tag: 'Metas estrictas', kind: 'key', items: [
          { t: 'TSH < 2,5 en el 1° trimestre', d: '< 3,0 en el 2° y 3°',
            say: 'Cerremos con las reglas de oro. En el embarazo, la meta de TSH es bajo dos coma cinco en el primer trimestre y bajo tres en el segundo y tercero.' },
          { t: 'TSH > 2,5 en la embarazada: tratar', d: 'Clínico o subclínico',
            say: 'Toda embarazada con TSH sobre dos coma cinco se trata con levotiroxina, sea clínico o subclínico.' },
        ] },
        { title: 'Hipotiroidea conocida', tag: 'Al confirmar', kind: 'pharma', items: [
          { t: 'Subir 20–30% de inmediato', d: '2 comprimidos extra por semana',
            say: 'Si ya toma levotiroxina, sube de inmediato un veinte a treinta por ciento al confirmar el embarazo, sin esperar el control.' },
        ] },
        { title: 'Recién nacido', tag: 'Tamizaje GES', kind: 'alert', items: [
          { t: 'Talón a las 40–48 horas', d: 'Papel filtro, a todos',
            say: 'En el recién nacido, TSH de talón en papel filtro a las cuarenta a cuarenta y ocho horas, a todos, porque casi todos nacen sin síntomas.' },
          { t: 'Levotiroxina antes de los 15 días', d: '10–15 mcg/kg/día',
            say: 'Y si se confirma, levotiroxina a diez a quince microgramos por kilo, antes de los quince días. Si te llevas una sola idea de hoy: en la madre y en el recién nacido, la hormona tiroidea es cerebro, y el reloj corre. En la próxima clase entramos a las tiroiditis. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hipotiroidismo gestacional y tamizaje neonatal',
    root: N('start', 'Embarazo y recién nacido', 'Dos pacientes, el mismo cerebro',
      'Dos pacientes, un mismo objetivo: proteger el cerebro del niño. Primero decide a quién tienes al frente.',
      ['', N('q', '¿Quién es el paciente?', 'Madre o recién nacido',
        '¿Es la embarazada o el recién nacido?',
        ['Embarazada', N('q', '¿Ya era hipotiroidea?', 'Con levotiroxina',
          'En la embarazada, lo primero es saber si ya tomaba levotiroxina.',
          ['SÍ', N('do', 'Subir 20–30% de inmediato', 'TSH cada 4 semanas',
            'Si ya la tomaba, sube la dosis un veinte a treinta por ciento apenas confirma el embarazo, y controla la TSH cada cuatro semanas.')],
          ['NO', N('q', '¿TSH sobre la meta?', '> 2,5 en el 1° trimestre',
            'Si no, se mide la TSH en el primer control prenatal y se compara con la meta del trimestre.',
            ['SÍ', N('do', 'Levotiroxina', 'Clínico o subclínico: se trata',
              'Si supera la meta, se trata con levotiroxina, sea clínico o subclínico, con TSH cada cuatro semanas.')],
            ['NO', N('ok', 'Control prenatal habitual', 'Sin tratamiento',
              'Si está en meta, sigue su control prenatal habitual.')])])],
        ['Recién nacido', N('do', 'TSH de talón a las 40–48 h', 'Papel filtro, a todos',
          'En el recién nacido, TSH de talón en papel filtro a las cuarenta a cuarenta y ocho horas de vida, a todos.',
          ['TSH > 15–20', N('refer', 'Confirmar en sangre venosa', 'TSH y T4 libre de inmediato',
            'Si sale sobre quince a veinte, se confirma de inmediato con TSH y T cuatro libre venosas.',
            ['Confirmado', N('alert', 'Levotiroxina 10–15 mcg/kg/día', 'Antes de los 15 días',
              'Confirmado, levotiroxina a diez a quince microgramos por kilo al día, antes de los quince días de vida, para un neurodesarrollo normal.')])])])]),
  },
};
