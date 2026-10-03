// Clase 21.8 — guion docente escrito a mano (ver gastro-01.cjs, gastro-02.cjs y sp-04.cjs para el formato).
// Fuente: books/scripts/dataset_saludpublica.cjs / dataset_saludpublica_bloque_2.cjs (sp-08).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'sp-08',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Sensibilidad y especificidad no cambian con la prevalencia; el VPP y el VPN sí, y esa diferencia se pregunta siempre',
      say: 'Bienvenidos. Hoy vemos el rendimiento de las pruebas diagnósticas: sensibilidad, especificidad, valores predictivos y curvas ROC. Es uno de los temas de máxima rentabilidad del EUNACOM, porque casi siempre trae una pregunta sobre el efecto de la prevalencia en los valores predictivos. Vamos a partir de la misma tabla de siempre, y a ver por qué esa distinción es la que decide toda la clase.',
    },

    {
      type: 'table',
      kicker: 'La base de todo cálculo',
      title: 'La tabla dos por dos frente al patrón de oro',
      head: ['Resultado del test', 'Enfermo (patrón de oro +)', 'Sano (patrón de oro -)'],
      rows: [
        { cells: ['Test positivo', 'Verdadero positivo (VP)', 'Falso positivo (FP)'],
          say: 'Toda esta clase sale de comparar un test contra el patrón de oro. Si el test da positivo en alguien que de verdad está enfermo, es un verdadero positivo. Si da positivo en alguien sano, es un falso positivo, un error.' },
        { cells: ['Test negativo', 'Falso negativo (FN)', 'Verdadero negativo (VN)'],
          say: 'Si el test da negativo en alguien enfermo, es un falso negativo, el error más grave en un tamizaje, porque deja a un enfermo sin diagnóstico. Y si da negativo en alguien sano, es un verdadero negativo.' },
        { cells: ['Totales', 'Enfermos = VP más FN', 'Sanos = FP más VN'],
          say: 'Suma la columna de los enfermos y tienes verdaderos positivos más falsos negativos. Suma la columna de los sanos y tienes falsos positivos más verdaderos negativos. Con estas cuatro letras armamos todo lo que sigue.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Propiedades intrínsecas',
      title: 'Sensibilidad y especificidad: no dependen de la prevalencia',
      cards: [
        { title: 'Sensibilidad', tag: 'Detecta enfermos, sirve para descartar', kind: 'key', items: [
          { t: 'Verdaderos positivos entre todos los enfermos', d: 'Verdadero positivo dividido en verdadero positivo más falso negativo',
            say: 'La sensibilidad es la probabilidad de que el test dé positivo en alguien realmente enfermo: verdaderos positivos, dividido en el total de enfermos. Una prueba muy sensible tiene muy pocos falsos negativos.' },
          { t: 'Si es muy sensible y da negativo, descarta', d: 'Regla nemotécnica: sensible, negativo, descarta',
            say: 'Y eso te da una regla poderosa: si una prueba muy sensible te da negativa, puedes descartar la enfermedad con bastante tranquilidad, porque casi no se le escapan enfermos. Por eso las pruebas muy sensibles, como el ELISA para VIH o el dímero D, se usan para tamizaje inicial.' },
        ] },
        { title: 'Especificidad', tag: 'Detecta sanos, sirve para confirmar', kind: 'normal', items: [
          { t: 'Verdaderos negativos entre todos los sanos', d: 'Verdadero negativo dividido en verdadero negativo más falso positivo',
            say: 'La especificidad es la probabilidad de que el test dé negativo en alguien realmente sano: verdaderos negativos, dividido en el total de sanos. Una prueba muy específica tiene muy pocos falsos positivos.' },
          { t: 'Si es muy específica y da positivo, confirma', d: 'Regla nemotécnica: específica, positivo, confirma',
            say: 'Si una prueba muy específica te da positiva, confirma la enfermedad con bastante certeza, porque casi no da positivos falsos. Por eso las pruebas muy específicas, como el Western Blot o una biopsia, se usan para confirmar antes de un tratamiento invasivo o tóxico. Y algo clave: ni la sensibilidad ni la especificidad cambian aunque cambie la prevalencia de la enfermedad en la población.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Propiedades extrínsecas',
      title: 'Valores predictivos: aquí sí manda la prevalencia',
      nodes: [
        { id: 'test', col: 0, row: 1, k: 'start', t: 'Aplicas el test a una población', s: 'Con una prevalencia dada de la enfermedad' },
        { id: 'alta', col: 1, row: 0, k: 'q', t: 'Prevalencia alta', s: 'Consulta de especialidad, brote activo' },
        { id: 'baja', col: 1, row: 2, k: 'q', t: 'Prevalencia baja', s: 'Tamizaje en población sana' },
        { id: 'vppA', col: 2, row: 0, k: 'good', t: 'VPP sube', s: 'Casi todo positivo es un enfermo real' },
        { id: 'vpnA', col: 3, row: 0, k: 'risk', t: 'VPN baja', s: 'Un negativo no descarta tan bien' },
        { id: 'vppB', col: 2, row: 2, k: 'trap', t: 'VPP baja', s: 'La mayoría de los positivos son falsos' },
        { id: 'vpnB', col: 3, row: 2, k: 'good', t: 'VPN sube', s: 'Un negativo prácticamente garantiza estar sano' },
      ],
      edges: [
        { from: 'test', to: 'alta' }, { from: 'test', to: 'baja' },
        { from: 'alta', to: 'vppA' }, { from: 'alta', to: 'vpnA' },
        { from: 'baja', to: 'vppB' }, { from: 'baja', to: 'vpnB' },
      ],
      steps: [
        { show: ['test'], note: 'VPP y VPN responden a la pregunta del paciente',
          say: 'Ahora la parte que más se pregunta. El valor predictivo positivo responde la pregunta que realmente le importa al paciente: si mi test salió positivo, ¿qué probabilidad tengo de estar enfermo? Y el valor predictivo negativo: si salió negativo, ¿qué probabilidad tengo de estar sano? Y a diferencia de sensibilidad y especificidad, estos dos sí cambian con la prevalencia.' },
        { show: ['alta', 'vppA', 'vpnA'], note: 'Más enfermos en la muestra, menos falsos positivos relativos',
          say: 'Si aplicas el test en una población con prevalencia alta, como una consulta de especialidad o un brote activo, el valor predictivo positivo sube: como hay muchos enfermos reales, la mayoría de los positivos son verdaderos. Pero el valor predictivo negativo baja: un resultado negativo ya no descarta tan bien, porque hay más enfermos que se te pueden escapar.' },
        { show: ['baja', 'vppB', 'vpnB'], note: 'Menos enfermos en la muestra, más falsos positivos relativos',
          say: 'Y si aplicas el mismo test en una población con prevalencia baja, como un tamizaje masivo en gente sana, ocurre lo contrario: el valor predictivo positivo baja mucho, porque la mayoría de los positivos terminan siendo falsos positivos. Pero el valor predictivo negativo sube, y un resultado negativo es casi garantía de estar sano. Fíjate: el mismo test, con la misma sensibilidad y especificidad, cambia completamente su utilidad clínica según dónde lo apliques.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Razones de verosimilitud',
      title: 'Los cocientes de probabilidad: otra forma de medir lo mismo',
      cards: [
        { title: 'Razón de verosimilitud positiva', tag: 'LR positivo', kind: 'criteria', items: [
          { t: 'Sensibilidad entre uno menos especificidad', d: 'Mayor a diez: certeza diagnóstica alta',
            say: 'La razón de verosimilitud positiva es la sensibilidad dividida en uno menos la especificidad. Cuanto más alta, más aumenta la probabilidad de enfermedad tras un resultado positivo, y un valor mayor a diez ya confiere una certeza diagnóstica alta.' },
        ] },
        { title: 'Razón de verosimilitud negativa', tag: 'LR negativo', kind: 'alert', items: [
          { t: 'Uno menos sensibilidad entre especificidad', d: 'Menor a cero coma uno: descarta prácticamente',
            say: 'La razón de verosimilitud negativa es uno menos la sensibilidad, dividido en la especificidad. Cuanto más baja, más reduce la probabilidad de enfermedad tras un resultado negativo, y un valor menor a cero coma uno prácticamente descarta la enfermedad.' },
          { t: 'A diferencia del VPP y del VPN', d: 'Las razones de verosimilitud no dependen de la prevalencia',
            say: 'Y una ventaja de las razones de verosimilitud frente a los valores predictivos: no dependen de la prevalencia de la población, así que se pueden aplicar al paciente individual que tienes al frente, ajustando su propia probabilidad de estar enfermo antes del examen.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Rendimiento global',
      title: 'Curva ROC: comparar pruebas y elegir el mejor punto de corte',
      cards: [
        { title: 'Sensibilidad contra uno menos especificidad', tag: 'Para pruebas cuantitativas', kind: 'key', items: [
          { t: 'Cada punto de la curva es un punto de corte distinto', d: 'El mejor está más cerca de la esquina superior izquierda',
            say: 'La curva ROC sirve para pruebas que entregan un número continuo, como una glicemia o un antígeno. Grafica la sensibilidad contra uno menos la especificidad, probando distintos puntos de corte, y el punto de corte óptimo es el que queda más cerca de la esquina superior izquierda del gráfico.' },
        ] },
        { title: 'Área bajo la curva', tag: 'AUC', kind: 'normal', items: [
          { t: 'Cero coma cinco es el azar', d: 'Sobre cero coma noventa es excelente, uno es la prueba perfecta',
            say: 'El área bajo la curva mide la exactitud global del test. Un área de cero coma cinco es una prueba inútil, equivalente a tirar una moneda. Entre cero coma ochenta y cero coma noventa es una prueba buena, sobre cero coma noventa es excelente, y uno coma cero sería la prueba perfecta, sin errores.' },
          { t: 'Sirve para comparar dos pruebas entre sí', d: 'La curva con mayor área es la más exacta',
            say: 'Y la curva ROC también sirve para comparar dos pruebas distintas para el mismo diagnóstico: la que tenga mayor área bajo la curva es, en promedio, la más exacta, independiente del punto de corte que finalmente elijas para usarla en la práctica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Razonamiento clínico',
      title: 'De la sospecha inicial al diagnóstico: el hilo bayesiano',
      cards: [
        { title: 'Probabilidad pretest y postest', tag: 'El test no diagnostica solo', kind: 'normal', items: [
          { t: 'La historia y el examen físico ya dan una probabilidad', d: 'Antes de pedir cualquier examen',
            say: 'Un último hilo que conecta toda la clase: ningún test se interpreta en el vacío. Antes de pedirlo, la historia clínica y el examen físico ya te dan una probabilidad pretest de que el paciente tenga la enfermedad.' },
          { t: 'El resultado del test la mueve, no la reemplaza', d: 'Con las razones de verosimilitud',
            say: 'El resultado del test, multiplicado por su razón de verosimilitud, mueve esa probabilidad hacia arriba o hacia abajo, y así obtienes la probabilidad postest. Por eso el mismo resultado positivo significa algo distinto en un paciente con alta sospecha clínica que en uno sin ningún síntoma: la prevalencia y la sospecha clínica previa son, en el fondo, la misma idea aplicada a una población o a un solo paciente.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos todo en un solo árbol, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'El mismo test, distinta utilidad según la prevalencia',
      head: ['Escenario', 'Prevalencia', 'Comportamiento del VPP y el VPN'],
      rows: [
        { cells: ['Tamizaje poblacional masivo', 'Baja', 'VPP baja mucho, muchos falsos positivos; VPN sube, cerca del cien por ciento'],
          say: 'Repasemos con la tabla final. En un tamizaje poblacional masivo, la prevalencia es baja: el valor predictivo positivo baja mucho, con muchos falsos positivos, y el valor predictivo negativo sube, cerca del cien por ciento.' },
        { cells: ['Consulta de especialidad hospitalaria', 'Alta', 'VPP sube fuerte, pocos falsos positivos; VPN baja'],
          say: 'En una consulta de especialidad, donde ya llegan pacientes derivados con sospecha alta, la prevalencia es alta: el valor predictivo positivo sube fuerte, con pocos falsos positivos, y el valor predictivo negativo baja.' },
        { cells: ['Sensibilidad y especificidad del mismo test', 'No cambian', 'Se mantienen iguales en ambos escenarios'],
          say: 'Y la trampa que se repite siempre: en ambos escenarios, la sensibilidad y la especificidad del test son exactamente las mismas, porque son propiedades intrínsecas de la prueba. Lo único que cambia es cuánto puedes confiar en un resultado positivo o negativo, y eso depende de dónde lo aplicaste.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Se evalúa un nuevo test rápido para antígeno de dengue comparándolo con la reacción de polimerasa en cadena (gold standard) en 500 pacientes con fiebre en zona endémica. De 100 pacientes con PCR positiva, el test rápido fue positivo en 92 y negativo en 8. De 400 pacientes con PCR negativa, el test fue negativo en 360 y positivo en 40.',
      question: '¿Cuál es la Sensibilidad del nuevo test?',
      options: [
        { letter: 'A', text: '92%' },
        { letter: 'B', text: '90%' },
        { letter: 'C', text: '88%' },
        { letter: 'D', text: '69,7%' },
        { letter: 'E', text: '8%' },
      ],
      correct: 'A',
      explanation: 'La Sensibilidad se calcula sobre la columna de los verdaderamente enfermos: verdaderos positivos dividido en el total de enfermos, es decir 92 dividido en 100, igual a 92%. El 90% corresponde a la especificidad (360 de 400); el 69,7% sería un cálculo incorrecto que mezcla ambas columnas.',
      say: {
        stem: 'Vamos con un caso. Se evalúa un nuevo test rápido para antígeno de dengue, comparado con la reacción de polimerasa en cadena, en quinientos pacientes con fiebre en zona endémica. De cien pacientes con reacción de polimerasa positiva, el test rápido fue positivo en noventa y dos y negativo en ocho. De cuatrocientos pacientes con reacción negativa, el test fue negativo en trescientos sesenta y positivo en cuarenta.',
        question: '¿Cuál es la Sensibilidad del nuevo test?',
        options: 'Las opciones: noventa y dos por ciento, noventa por ciento, ochenta y ocho por ciento, sesenta y nueve coma siete por ciento, u ocho por ciento. Piénsalo.',
        answer: 'Es la A, noventa y dos por ciento. La sensibilidad se calcula solo en la columna de los verdaderamente enfermos: noventa y dos verdaderos positivos, dividido en los cien enfermos totales. El noventa por ciento es la especificidad, que se calcula en la otra columna, la de los sanos: trescientos sesenta dividido en cuatrocientos. No mezcles las columnas.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 28',
      stem: 'Se busca determinar la utilidad de una prueba diagnóstica.',
      question: '¿Qué técnica es la más adecuada?',
      options: [
        { letter: 'A', text: 'Elaboración de curvas de ROC' },
        { letter: 'B', text: 'Determinar la sensibilidad y especificidad de la prueba' },
        { letter: 'C', text: 'Determinar la sensibilidad de la prueba y la prevalencia de la enfermedad' },
        { letter: 'D', text: 'Determinar la especificidad y el valor predictivo negativo de la prueba' },
        { letter: 'E', text: 'Determinar el número necesario para tratar (NNT)' },
      ],
      correct: 'B',
      explanation: 'El cálculo de la sensibilidad y la especificidad es la forma clásica de determinar la utilidad de una prueba diagnóstica. Las curvas ROC también sirven, pero solo para pruebas cuantitativas, y de hecho requieren primero calcular la sensibilidad y la especificidad en distintos puntos de corte.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil dieciséis, va directo a lo esencial. Se busca determinar la utilidad de una prueba diagnóstica.',
        question: '¿Qué técnica es la más adecuada?',
        options: 'Las opciones: elaborar curvas de ROC, determinar sensibilidad y especificidad, determinar sensibilidad y prevalencia, determinar especificidad y valor predictivo negativo, o determinar el número necesario a tratar.',
        answer: 'Es la B. Calcular sensibilidad y especificidad es la forma clásica y directa de conocer el rendimiento de una prueba. Las curvas de ROC también sirven, pero son para pruebas cuantitativas y, de hecho, necesitan calcular sensibilidad y especificidad en cada punto de corte antes de poder dibujarse.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 43',
      stem: 'Se pregunta por la característica obligatoria de una prueba de tamizaje.',
      question: 'Una prueba de tamizaje obligatoriamente debe tener:',
      options: [
        { letter: 'A', text: 'Alta especificidad, sin importar la sensibilidad' },
        { letter: 'B', text: 'Alta sensibilidad, independiente de la especificidad' },
        { letter: 'C', text: 'Alto valor predictivo positivo y facilidad en su aplicación' },
        { letter: 'D', text: 'Bajo valor predictivo negativo y reproductibilidad' },
        { letter: 'E', text: 'Bajo costo y baja sensibilidad' },
      ],
      correct: 'B',
      explanation: 'Una prueba de tamizaje debe tener alta sensibilidad, para detectar al máximo posible de enfermos y no dejar pasar casos, aunque su especificidad no sea tan alta; los falsos positivos que genere se resuelven después con una prueba confirmatoria más específica.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil dieciocho, sobre la característica obligatoria de una prueba de tamizaje.',
        question: 'Una prueba de tamizaje obligatoriamente debe tener:',
        options: 'Las opciones: alta especificidad sin importar la sensibilidad, alta sensibilidad independiente de la especificidad, alto valor predictivo positivo y facilidad de aplicación, bajo valor predictivo negativo y reproductibilidad, o bajo costo y baja sensibilidad.',
        answer: 'Es la B. Un tamizaje tiene que detectar al máximo posible de enfermos, así que exige alta sensibilidad, aunque la especificidad no sea tan alta. Los falsos positivos que eso genera no son un problema grave, porque después se confirman con una prueba más específica. Lo que no te puedes permitir en un tamizaje es un falso negativo, un enfermo que se va a casa creyendo que está sano.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 60',
      stem: 'Se pregunta por la característica del ELISA que permite detectar a los pacientes con infección por VIH en la población asintomática.',
      question: '¿Cuál de las siguientes características del ELISA permite detectar a los pacientes con infección por el VIH en la población asintomática?',
      options: [
        { letter: 'A', text: 'Alta sensibilidad' },
        { letter: 'B', text: 'Baja especificidad' },
        { letter: 'C', text: 'Alta especificidad' },
        { letter: 'D', text: 'Alto valor predictivo positivo' },
        { letter: 'E', text: 'Alto valor predictivo negativo' },
      ],
      correct: 'A',
      explanation: 'Las pruebas de tamizaje, como el ELISA para VIH en población asintomática, requieren una alta sensibilidad para no dejar pasar casos, tolerando una especificidad intermedia; los positivos se confirman después con Western Blot, que sí exige alta especificidad.',
      say: {
        stem: 'Y esta pregunta real, del EUNACOM de julio de dos mil diecinueve, aplica la misma idea a un examen muy conocido. Preguntan qué característica del ELISA permite detectar a los pacientes con infección por VIH en la población asintomática.',
        question: '¿Cuál de las siguientes características del ELISA permite detectar a los pacientes con infección por el VIH en la población asintomática?',
        options: 'Las opciones: alta sensibilidad, baja especificidad, alta especificidad, alto valor predictivo positivo, o alto valor predictivo negativo.',
        answer: 'Es la A, alta sensibilidad. El ELISA es el test de tamizaje para VIH, y como tal necesita una sensibilidad muy alta para no dejar pasar a nadie infectado, aunque tolere una especificidad intermedia. Los positivos del ELISA nunca se dan por confirmados solos: se confirman con el Western Blot, que ahí sí exige una especificidad muy alta.' },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Intrínseco versus extrínseco', tag: 'La distinción que más se pregunta', kind: 'key', items: [
          { t: 'Sensibilidad y especificidad no cambian', d: 'Son propiedades del test, no de la población',
            say: 'Cerremos con las reglas de oro. La sensibilidad y la especificidad son propiedades del test, y no cambian aunque cambie la población donde lo apliques.' },
          { t: 'VPP y VPN dependen de la prevalencia', d: 'A mayor prevalencia, mayor VPP y menor VPN',
            say: 'El valor predictivo positivo y el negativo sí dependen de la prevalencia: a mayor prevalencia, mayor valor predictivo positivo y menor valor predictivo negativo; a menor prevalencia, ocurre lo contrario.' },
        ] },
        { title: 'Cuándo usar cada test', tag: 'Sensible para descartar, específico para confirmar', kind: 'alert', items: [
          { t: 'Tamizaje: alta sensibilidad', d: 'Un negativo descarta con confianza',
            say: 'Para tamizaje, escoge un test de alta sensibilidad: un resultado negativo te permite descartar con confianza.' },
          { t: 'Confirmación: alta especificidad', d: 'Un positivo confirma con confianza',
            say: 'Para confirmar un diagnóstico, escoge un test de alta especificidad: un resultado positivo te permite confirmar con confianza. Si te llevas una sola idea de hoy: sensibilidad y especificidad son del test, valores predictivos son de la población donde lo aplicas. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Qué parámetro calcular y cómo interpretarlo',
    root: N(
      'start', 'Tienes la tabla 2x2 frente al patrón de oro', '¿Qué te preguntan: el test o la población?',
      'La primera decisión es si te preguntan por una propiedad del test en sí, o por lo que significa un resultado en un paciente concreto.',
      ['Propiedad del test, no cambia con la población', N(
        'q', '¿Detectar enfermos o detectar sanos?', 'Sensibilidad o especificidad',
        'Ambas son intrínsecas al test y no varían aunque cambie la prevalencia de la enfermedad.',
        ['Detectar enfermos (para tamizaje)', N(
          'ok', 'Sensibilidad', 'Verdadero positivo entre verdadero positivo más falso negativo',
          'Alta sensibilidad y resultado negativo permiten descartar la enfermedad con confianza.',
        )],
        ['Detectar sanos (para confirmar)', N(
          'ok', 'Especificidad', 'Verdadero negativo entre verdadero negativo más falso positivo',
          'Alta especificidad y resultado positivo permiten confirmar la enfermedad con confianza.',
        )],
      )],
      ['Lo que significa el resultado en este paciente', N(
        'q', '¿Cuál es la prevalencia en esta población?', 'Eso decide el VPP y el VPN',
        'A diferencia de sensibilidad y especificidad, los valores predictivos cambian según dónde se aplique el test.',
        ['Prevalencia alta (especialidad, brote)', N(
          'alert', 'VPP alto, VPN más bajo', 'Un positivo casi siempre es real',
          'Con muchos enfermos en la muestra, la mayoría de los positivos son verdaderos positivos.',
        )],
        ['Prevalencia baja (tamizaje masivo)', N(
          'refer', 'VPP bajo, VPN alto', 'Un positivo suele ser falso positivo',
          'Con pocos enfermos en la muestra, la mayoría de los positivos terminan siendo falsos positivos, y un negativo casi garantiza estar sano.',
        )],
      )],
    ),
  },
};
