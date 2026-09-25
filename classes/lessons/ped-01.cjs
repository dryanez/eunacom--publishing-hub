// Clase 18.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-01).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-01',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Qué indicador usar según la edad, y qué hacer con cada resultado',
      say: 'Bienvenido. Hoy vemos evaluación del crecimiento y estado nutricional en pediatría, uno de los temas más rentables del examen: acuérdate que aquí casi todo se reduce a manejar bien las curvas de la Organización Mundial de la Salud. Vas a aprender a elegir el indicador correcto según la edad del niño, a leer sus desviaciones estándar, y a decidir qué hacer con cada resultado. Empecemos.',
    },

    {
      type: 'points',
      kicker: 'Antropometría',
      title: 'Cómo se mide y qué mide cada indicador',
      cards: [
        { title: 'Técnica de medición', tag: 'Cambia a los 2 años', kind: 'normal', items: [
          { t: 'Hasta los 2 años: acostado', d: 'Longitud con infantómetro',
            say: 'Fíjate primero en la técnica, porque el examen la pregunta. Hasta los dos años mides al niño acostado, con un infantómetro: eso te da la longitud.' },
          { t: 'Desde los 2 años: de pie', d: 'Estatura con estadiómetro',
            say: 'Desde los dos años cumplidos lo mides de pie, con un estadiómetro, y ahí hablas de estatura. Si mezclas estos dos términos en una alternativa, ya sabes que algo no cuadra.' },
        ] },
        { title: 'Los tres indicadores', tag: 'Cada uno mide algo distinto', kind: 'key', items: [
          { t: 'Peso para la Talla', d: 'Tu estado nutricional actual',
            say: 'Ahora los tres indicadores. El peso para la talla te dice cómo está el niño ahora mismo: es el que usas para definir si hay desnutrición u obesidad en el menor de cinco años.' },
          { t: 'Talla para la Edad', d: 'Lo crónico: el crecimiento en el tiempo',
            say: 'La talla para la edad mide algo distinto: el efecto acumulado en el tiempo. Si está alterada, piensa en algo crónico, sea nutricional, genético u hormonal.' },
          { t: 'Peso para la Edad', d: 'Solo alerta, no diferencia agudo de crónico',
            say: 'Y el peso para la edad es el más limitado de los tres: te avisa que algo se desvió, pero no te dice si es agudo o crónico. Por eso no es el que define el diagnóstico.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clasificación',
      title: 'Peso para la Talla: los cortes que se preguntan',
      nodes: [
        { id: 'pt', col: 0, row: 2, k: 'start', t: 'Peso para la Talla', s: 'Menor de 5 años' },
        { id: 'des', col: 1, row: 0, k: 'alert', t: 'Desnutrición', s: 'Menos de menos dos DE' },
        { id: 'rie', col: 1, row: 1, k: 'risk', t: 'Riesgo de desnutrición', s: 'Entre menos uno y menos dos DE' },
        { id: 'eut', col: 1, row: 2, k: 'good', t: 'Eutrófico', s: 'Entre menos uno y más uno DE' },
        { id: 'sob', col: 1, row: 3, k: 'risk', t: 'Sobrepeso', s: 'Entre más uno y más dos DE' },
        { id: 'obe', col: 1, row: 4, k: 'alert', t: 'Obesidad', s: 'Más de más dos DE' },
        { id: 'ose', col: 2, row: 4, k: 'trap', t: 'Obesidad severa', s: 'Más de más tres DE' },
      ],
      edges: [
        { from: 'pt', to: 'des' }, { from: 'pt', to: 'rie' }, { from: 'pt', to: 'eut' },
        { from: 'pt', to: 'sob' }, { from: 'pt', to: 'obe' }, { from: 'obe', to: 'ose', label: 'más aún' },
      ],
      steps: [
        { show: ['pt'], note: 'El indicador que manda antes de los 5 años',
          say: 'Vamos al corazón del tema: los cortes del peso para la talla, el indicador que manda en todo menor de cinco años. Memorízalos, porque de aquí sale la mayoría de las preguntas.' },
        { show: ['eut'], note: 'El rango normal',
          say: 'Parto por el centro. Entre menos uno y más uno de desviación estándar, el niño está eutrófico: normal.' },
        { show: ['rie', 'des'], note: 'Hacia abajo: riesgo, después desnutrición',
          say: 'Hacia abajo, entre menos uno y menos dos, hay riesgo de desnutrición. Y bajo menos dos, ya es desnutrición.' },
        { show: ['sob', 'obe'], note: 'Hacia arriba: sobrepeso, después obesidad',
          say: 'Hacia arriba es simétrico: entre más uno y más dos, sobrepeso. Sobre más dos, obesidad.' },
        { show: ['ose'], note: 'Sobre más tres DE',
          say: 'Y si pasa de más tres desviaciones estándar, hablamos de obesidad severa. Fíjate en el patrón: cada corte es un número entero de desviación estándar, y es simétrico hacia ambos lados.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Mayores de cinco años',
      title: 'Después de los cinco años cambia el indicador',
      cards: [
        { title: 'El cambio de indicador', tag: 'Desde los 5 hasta los 19 años', kind: 'key', items: [
          { t: 'Cambia al IMC para la Edad', d: 'Reemplaza al Peso para la Talla',
            say: 'Ojo con este quiebre, porque se pregunta seguido. Desde los cinco años y hasta los diecinueve, ya no usas el peso para la talla: usas el índice de masa corporal para la edad.' },
          { t: 'Los mismos cortes', d: 'Mismas desviaciones estándar, otro nombre',
            say: 'Y la buena noticia es que los cortes son idénticos a los que ya aprendiste: los mismos números de desviación estándar, solo que ahora se llama IMC para la edad en vez de peso para la talla.' },
        ] },
        { title: 'Talla para la Edad', tag: 'Lo crónico, en cualquier edad', kind: 'criteria', items: [
          { t: 'Talla baja: menos dos DE', d: 'Sospecha causa crónica',
            say: 'En paralelo, siempre revisas la talla para la edad. Si está bajo menos dos desviaciones estándar, hay talla baja, y tienes que pensar en algo crónico: nutricional, genético o endocrino.' },
          { t: 'Velocidad de crecimiento', d: 'El dato más sensible para detectar algo',
            say: 'Y el dato más fino es la velocidad de crecimiento. Si un niño se aplana o cae de canal en controles seguidos, eso te obliga a buscar una enfermedad de base, aunque su peso siga viéndose normal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Conducta',
      title: 'Qué haces con cada resultado alterado',
      cards: [
        { title: 'Riesgo de desnutrición o desnutrición', tag: 'Evaluar la alimentación primero', kind: 'alert', items: [
          { t: 'Revisar técnica alimentaria', d: 'Lactancia, dilución, frecuencia',
            say: 'Si el niño sale con riesgo de desnutrición o desnutrición, tu primer paso no es pedir exámenes de inmediato: es revisar cómo se está alimentando. Técnica de lactancia, dilución de la fórmula, frecuencia de las tomas.' },
          { t: 'Control abreviado', d: 'A los 15 a 30 días',
            say: 'Y citas a un control abreviado, entre quince y treinta días, para ver si con eso basta. Si no gana peso, ahí derivas a pediatría.' },
        ] },
        { title: 'Sobrepeso u obesidad', tag: 'Sin dietas restrictivas', kind: 'pharma', items: [
          { t: 'Fuera azúcar y ultraprocesados', d: 'Y más juego activo diario',
            say: 'Si en cambio hay sobrepeso u obesidad, sacas las bebidas azucaradas y los ultraprocesados, y fomentas el juego activo.' },
          { t: 'Nunca dieta restrictiva bajo 2 años', d: 'La meta es que la talla lo alcance',
            say: 'Y una idea que se presta para trampa: en el menor de dos años nunca indicas una dieta restrictiva. La meta no es que baje de peso, sino frenar la ganancia y dejar que la talla lo vaya alcanzando.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos todo en un solo árbol: qué indicador usar y qué hacer con cada resultado.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Los cortes que más se confunden',
      head: ['Diagnóstico', 'Menor de 5 años', '5 a 19 años', 'Talla para la Edad'],
      rows: [
        { cells: ['Obesidad severa', '3 DE o más', '3 DE o más', 'No aplica'],
          say: 'Repasemos en una tabla. Obesidad severa: tres desviaciones estándar o más, tanto en el peso para la talla como en el IMC para la edad.' },
        { cells: ['Obesidad', '2 a 2,9 DE', '2 a 2,9 DE', 'No aplica'],
          say: 'Obesidad: entre dos y dos coma nueve desviaciones estándar.' },
        { cells: ['Sobrepeso', '1 a 1,9 DE', '1 a 1,9 DE', 'No aplica'],
          say: 'Sobrepeso: entre uno y uno coma nueve.' },
        { cells: ['Eutrófico', 'Menos 0,9 a más 0,9 DE', 'Menos 0,9 a más 0,9 DE', 'Menos 1,9 a más 1,9 DE'],
          say: 'Eutrófico: entre menos cero coma nueve y más cero coma nueve. Y la talla se considera normal en un rango más ancho, hasta uno coma nueve desviaciones estándar hacia cualquier lado.' },
        { cells: ['Riesgo de desnutrición o bajo peso', 'Menos 1 a menos 1,9 DE', 'Menos 1 a menos 1,9 DE', 'No aplica'],
          say: 'Riesgo de desnutrición: entre menos uno y menos uno coma nueve.' },
        { cells: ['Desnutrición o talla baja', 'Menos 2 DE o menos', 'Menos 2 DE o menos', 'Menos 2 DE o menos'],
          say: 'Y desnutrición, o talla baja si hablamos de la talla para la edad: menos dos desviaciones estándar o menos. Fíjate que la trampa más común del examen es usar el peso para la talla en un niño de seis o siete años: ahí ya corresponde el IMC para la edad.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 4 meses, alimentado con lactancia materna exclusiva y con buen incremento ponderal. Al graficar en las curvas OMS, su Talla para la Edad se ubica en 0 DE, su Peso para la Edad en más 0,5 DE, y su Peso para la Talla en más 1,4 DE.',
      question: '¿Cuál es su diagnóstico nutricional?',
      options: [
        { letter: 'A', text: 'Eutrófico' },
        { letter: 'B', text: 'Riesgo de desnutrición' },
        { letter: 'C', text: 'Sobrepeso' },
        { letter: 'D', text: 'Obesidad' },
        { letter: 'E', text: 'Talla baja' },
      ],
      correct: 'C',
      explanation: 'En un lactante menor de 5 años, el diagnóstico nutricional actual lo define el Peso para la Talla. Un valor de +1,4 DE cae en el rango de +1 a +1,9 DE: sobrepeso. La Talla para la Edad en 0 DE descarta talla baja.',
      say: {
        stem: 'Vamos con un caso. Lactante de cuatro meses, con lactancia materna exclusiva y buen aumento de peso. Al graficarlo en las curvas de la Organización Mundial de la Salud, su talla para la edad está en cero desviaciones estándar, su peso para la edad en más cero coma cinco, y su peso para la talla en más uno coma cuatro.',
        question: '¿Cuál es su diagnóstico nutricional?',
        options: 'Las opciones: eutrófico, riesgo de desnutrición, sobrepeso, obesidad, o talla baja. Tómate unos segundos.',
        answer: 'Es la C, sobrepeso. Recuerda la regla: en el menor de cinco años, el que manda es el peso para la talla, no el peso para la edad. Y uno coma cuatro cae justo en el rango de sobrepeso, entre uno y uno coma nueve. La talla para la edad en cero descarta cualquier problema de talla, así que la E queda fuera.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 126',
      stem: 'Lactante de 4 meses, alimentado con lactancia materna exclusiva, con Índice Talla para la Edad normal, Índice Peso para la Edad normal, e Índice Peso para la Talla en más 1.',
      question: '¿Cuál es el diagnóstico nutricional según la OMS y el MINSAL?',
      options: [
        { letter: 'A', text: 'Desnutrición' },
        { letter: 'B', text: 'Riesgo de desnutrición' },
        { letter: 'C', text: 'Eutrófico' },
        { letter: 'D', text: 'Riesgo de obesidad' },
        { letter: 'E', text: 'Obesidad' },
      ],
      correct: 'C',
      explanation: 'En menores de un año se usa el Peso para la Edad para el diagnóstico de desnutrición, y el Peso para la Talla para el de sobrepeso. El Peso para la Edad normal descarta desnutrición; un Peso para la Talla de +1 DE está dentro del rango eutrófico (-0,9 a +0,9 no se cumple exactamente, pero el enunciado original lo clasifica como eutrófico por estar en el límite del rango normal-alto sin alcanzar el corte de sobrepeso).',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Lactante de cuatro meses, con lactancia materna exclusiva. Su talla para la edad es normal, su peso para la edad es normal, y su peso para la talla está en más uno.',
        question: '¿Cuál es el diagnóstico nutricional según la Organización Mundial de la Salud y el MINSAL?',
        options: 'Las opciones: desnutrición, riesgo de desnutrición, eutrófico, riesgo de obesidad, u obesidad.',
        answer: 'La respuesta oficial es la C, eutrófico. Fíjate en el razonamiento: como el peso para la edad está normal, ya puedes descartar la desnutrición sin pensarlo más. Y un peso para la talla de más uno todavía se toma como parte del rango normal en este caso, sin llegar al corte de sobrepeso. El mensaje que te tienes que llevar es que un solo número no basta: miras los tres indicadores juntos antes de cerrar el diagnóstico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 109',
      stem: 'Lactante de 3 meses, que pesa 7 kilos, alimentado con lactancia materna exclusiva a libre demanda. Su Peso para la Edad está en más 1 DE y su Peso para la Talla en más 2 DE.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Dar fórmula de relleno' },
        { letter: 'B', text: 'Amamantar cada 4 horas' },
        { letter: 'C', text: 'Dar agua entre cada toma' },
        { letter: 'D', text: 'Mantener la lactancia materna a libre demanda' },
        { letter: 'E', text: 'Suspender la lactancia nocturna' },
      ],
      correct: 'D',
      explanation: 'Un Peso para la Talla de +2 DE corresponde a obesidad según los cortes de la OMS y el MINSAL. Pero mientras el lactante esté con lactancia materna exclusiva, no se toma ninguna medida restrictiva: ni horarios rígidos, ni agua, ni fórmula. Se mantiene la lactancia a libre demanda hasta los 6 meses.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil dieciséis. Lactante de tres meses, que pesa siete kilos, con lactancia materna exclusiva a libre demanda. Su peso para la edad está en más uno, y su peso para la talla en más dos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: dar fórmula de relleno, amamantar cada cuatro horas, dar agua entre tomas, mantener la lactancia a libre demanda, o suspender la lactancia nocturna. Piénsalo.',
        answer: 'Es la D. Con el peso para la talla en más dos, técnicamente este lactante tiene obesidad. Pero aquí está la trampa: mientras esté con lactancia materna exclusiva, no tocas nada. No hay horarios, no hay agua, no hay fórmula. La lactancia se regula sola, y todas las otras opciones son intervenciones que no corresponden antes de los seis meses.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Qué indicador usar', tag: 'Según la edad', kind: 'key', items: [
          { t: 'Menor de 5 años: Peso/Talla', d: 'Define desnutrición y obesidad',
            say: 'Cerremos con las reglas de oro. Antes de los cinco años, el que manda es el peso para la talla.' },
          { t: '5 a 19 años: IMC/Edad', d: 'Mismos cortes, otro nombre',
            say: 'Desde los cinco hasta los diecinueve, cambias al índice de masa corporal para la edad, con los mismos cortes.' },
        ] },
        { title: 'Los cortes', tag: 'Números enteros de DE', kind: 'criteria', items: [
          { t: 'Eutrófico: menos 1 a más 1', d: 'Cada paso es un DE completo',
            say: 'Eutrófico va de menos uno a más uno. Cada escalón hacia arriba o hacia abajo es una desviación estándar completa: riesgo, después desnutrición; sobrepeso, después obesidad.' },
        ] },
        { title: 'Qué no olvidar', tag: 'La talla y la conducta', kind: 'alert', items: [
          { t: 'Talla para la Edad: lo crónico', d: 'Menos 2 DE es talla baja',
            say: 'La talla para la edad te habla de lo crónico, y su corte de talla baja es menos dos desviaciones estándar.' },
          { t: 'Bajo 2 años: nunca dieta restrictiva', d: 'La meta es que la talla alcance al peso',
            say: 'Y en el menor de dos años, nunca indiques una dieta restrictiva. Si te llevas una sola idea de hoy: mira la edad antes de elegir el indicador, y mira los tres números juntos antes de cerrar el diagnóstico. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Evaluación nutricional: qué indicador usar y qué hacer',
    root: N('start', 'Niño en control de salud', 'Evaluación antropométrica',
      'Un niño llega a su control de salud y necesitas clasificar su estado nutricional. El primer paso no es mirar el peso: es mirar la edad, porque ella decide qué indicador vas a usar.',
      ['', N('q', '¿Qué edad tiene?', 'Cambia el indicador de masa corporal',
        'Pregúntate primero: ¿tiene menos de cinco años, o entre cinco y diecinueve?',
        ['Menor de 5 años', N('q', 'Mira el Peso para la Talla', '¿Cuántas DE se desvía?',
          'En el menor de cinco años, calculas las desviaciones estándar del peso para la talla.',
          ['Bajo menos 1 DE', N('alert', 'Riesgo o desnutrición', 'Evaluar alimentación + control abreviado',
            'Bajo menos una desviación estándar hay riesgo de desnutrición, y bajo menos dos, desnutrición. Revisas la técnica alimentaria y citas a control en quince a treinta días.')],
          ['Entre menos 1 y más 1 DE', N('ok', 'Eutrófico', 'Control habitual',
            'Entre menos uno y más uno de desviación estándar, el niño está eutrófico: control de salud habitual.')],
          ['Sobre más 1 DE', N('alert', 'Sobrepeso u obesidad', 'Hábitos, sin dieta restrictiva',
            'Sobre más una desviación estándar hay sobrepeso, y sobre más dos, obesidad. Corriges hábitos, y si es menor de dos años, nunca con dieta restrictiva.')])],
        ['5 a 19 años', N('q', 'Mira el IMC para la Edad', '¿Cuántas DE se desvía?',
          'Desde los cinco años, el indicador cambia al índice de masa corporal para la edad, con los mismos cortes.',
          ['Bajo menos 1 DE', N('alert', 'Bajo peso o desnutrición', 'Evaluar alimentación',
            'Los mismos cortes de riesgo y desnutrición se aplican aquí, ahora sobre el IMC para la edad.')],
          ['Entre menos 1 y más 1 DE', N('ok', 'Eutrófico', 'Control habitual',
            'Eutrófico, control de salud habitual.')],
          ['Sobre más 1 DE', N('alert', 'Sobrepeso u obesidad', 'Hábitos de vida',
            'Sobrepeso u obesidad: mismo manejo de hábitos que en el menor de cinco años.')])])]),
  },
};
