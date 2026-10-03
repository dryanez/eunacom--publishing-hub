// Clase 21.5 — guion docente escrito a mano (ver gastro-01.cjs, gastro-02.cjs y sp-04.cjs para el formato).
// Fuente: books/scripts/dataset_saludpublica.cjs / dataset_saludpublica_bloque_1.cjs (sp-05).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'sp-05',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Genograma, ecomapa y APGAR familiar: los instrumentos que el examen te pide reconocer y no confundir',
      say: 'Bienvenidos. Hoy vemos el Modelo de Atención Integral de Salud Familiar y Comunitaria, la base de la atención primaria en Chile. El examen no pregunta filosofía: pregunta que reconozcas, en una viñeta, qué instrumento se está usando y qué significa el puntaje que te dan. Vamos a ordenar el genograma, el ecomapa y el APGAR familiar, y a ver cómo se arma el diagnóstico de una comunidad completa.',
    },

    {
      type: 'points',
      kicker: 'Principios del modelo',
      title: 'Qué hace distinto al MAIS de la medicina biomédica clásica',
      cards: [
        { title: 'Tres principios rectores', tag: 'Declarados por el MINSAL', kind: 'key', items: [
          { t: 'Centrado en las personas', d: 'Dimensión biológica, psicológica y social',
            say: 'El primer principio es estar centrado en las personas. El paciente no es solo un diagnóstico: es un ser con dimensión biológica, psicológica y social, y el equipo respeta su autonomía y busca decisiones compartidas con él.' },
          { t: 'Integralidad de la atención', d: 'Promoción, prevención, curación, rehabilitación y paliativos',
            say: 'El segundo es la integralidad: el CESFAM no solo trata la enfermedad ya instalada, sino que abarca todo el continuo, desde la promoción y la prevención hasta la curación, la rehabilitación y los cuidados paliativos, trabajando con el individuo, su familia y su comunidad.' },
          { t: 'Continuidad del cuidado', d: 'Equipo de cabecera por sector geográfico',
            say: 'Y el tercero es la continuidad: un mismo equipo de cabecera acompaña a la familia a lo largo del tiempo y de los distintos niveles de la red, sin que el paciente se pierda entre especialistas que no se comunican entre sí.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Instrumentos familiares',
      title: 'Genograma y ecomapa: no miden lo mismo',
      cards: [
        { title: 'Genograma estructural', tag: 'Mirada hacia adentro', kind: 'criteria', items: [
          { t: 'Al menos tres generaciones', d: 'Árbol gráfico con símbolos estandarizados',
            say: 'Empecemos por el genograma, también llamado familiograma. Es un árbol gráfico que representa como mínimo tres generaciones de la familia, con símbolos estandarizados.' },
          { t: 'Estructura, vínculos y enfermedades heredofamiliares', d: 'Edades, consanguinidad, patologías crónicas, tipos de vínculo',
            say: 'Muestra la composición familiar, las edades, la consanguinidad, el estado civil, las enfermedades crónicas que se repiten en la familia, y el tipo de vínculo entre cada miembro: muy unido, conflictivo, distante o con un quiebre. Es la mirada hacia adentro de la familia.' },
        ] },
        { title: 'Ecomapa', tag: 'Mirada hacia afuera', kind: 'normal', items: [
          { t: 'La familia y su entorno', d: 'Trabajo, escuela, CESFAM, iglesia, redes de apoyo',
            say: 'El ecomapa hace justo lo contrario: dibuja a la familia en el centro y traza sus vínculos con el entorno social, el trabajo, la escuela, el CESFAM, la iglesia, los subsidios del Estado.' },
          { t: 'Apoyo o sobrecarga', d: 'Identifica si cada relación suma o resta',
            say: 'Y lo importante es que cada línea dice si esa relación aporta apoyo y recursos, o si es una fuente de tensión y sobrecarga. Si el examen te pregunta por redes de apoyo social o aislamiento, la respuesta casi siempre es ecomapa, no genograma.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Instrumentos familiares',
      title: 'APGAR familiar: la funcionalidad que percibe el paciente',
      cards: [
        { title: 'Cinco dimensiones de Smilkstein', tag: 'Autoadministrado', kind: 'key', items: [
          { t: 'Adaptabilidad, Participación, Gradualidad, Afecto, Resolución', d: 'Cinco preguntas que responde el propio paciente',
            say: 'El tercer instrumento es el APGAR familiar, de Smilkstein. Es un cuestionario de cinco preguntas que responde el propio paciente, sobre cómo percibe su funcionalidad familiar: adaptabilidad, participación, gradualidad del crecimiento, afecto y resolución.' },
        ] },
        { title: 'Los tres cortes que se preguntan', tag: 'Memorizar', kind: 'alert', items: [
          { t: 'Siete a diez: normofuncional', d: 'La familia funciona bien',
            say: 'Y aquí vienen los cortes que el examen exige de memoria. De siete a diez puntos, la familia es normofuncional.' },
          { t: 'Cuatro a seis: disfunción leve', d: 'Entre cuatro y seis puntos',
            say: 'De cuatro a seis puntos, hay una disfunción familiar leve a moderada.' },
          { t: 'Cero a tres: disfunción severa', d: 'Activa al equipo multidisciplinario',
            say: 'Y de cero a tres puntos, la disfunción es severa, y ese puntaje es el que activa al equipo completo: asistente social, psicólogo y enfermera, además del médico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico comunitario',
      title: 'El ASIS: cuando la unidad de análisis es todo el territorio',
      cards: [
        { title: 'Qué es el ASIS', tag: 'Análisis de Situación de Salud', kind: 'normal', items: [
          { t: 'Perfil de una población, no de un paciente', d: 'Datos epidemiológicos, sociodemográficos y de determinantes sociales',
            say: 'El mismo enfoque familiar se aplica a la comunidad completa a través del Análisis de Situación de Salud, o ASIS. Es el proceso que caracteriza el perfil epidemiológico, sociodemográfico y de determinantes sociales de todo un territorio asignado a un CESFAM.' },
        ] },
        { title: 'Las cinco etapas', tag: 'El orden se pregunta', kind: 'criteria', items: [
          { t: 'Datos, luego participación, luego priorización', d: 'Censos y REM, talleres comunitarios, y recién después priorizar',
            say: 'El proceso sigue un orden. Primero se recolectan los datos duros: censos, estadísticas vitales, el REM del CESFAM. Después viene el diagnóstico participativo, con talleres junto a la junta de vecinos y los consejos de desarrollo local. Solo entonces se priorizan los problemas de salud.' },
          { t: 'Método de Hanlon para priorizar', d: 'Magnitud, gravedad, eficacia y factibilidad',
            say: 'Y esa priorización usa un método objetivo, el método de Hanlon, que pondera la magnitud del problema, su gravedad, la eficacia de la intervención disponible y su factibilidad. Después de priorizar viene el plan de acción intersectorial, y por último el monitoreo continuo. Fíjate en la lógica: no se prioriza antes de escuchar a la comunidad, y no se prioriza a puro criterio técnico sin un método.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos la decisión completa: qué instrumento usar según lo que necesitas evaluar.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cuatro instrumentos, cuatro objetivos distintos',
      head: ['Instrumento', 'Qué mira', 'Objetivo', 'Puntaje o lectura'],
      rows: [
        { cells: ['Genograma', 'Estructura interna de la familia', 'Vínculos, patologías y consanguinidad en tres generaciones', 'Gráfico estructural, sin puntaje'],
          say: 'Repasemos con una tabla. El genograma mira la estructura interna de la familia: vínculos, patologías y consanguinidad en tres generaciones. Es un gráfico estructural, no tiene puntaje.' },
        { cells: ['Ecomapa', 'La familia y su entorno', 'Redes de apoyo social y fuentes de tensión', 'Vínculos fuertes, débiles o estresantes'],
          say: 'El ecomapa mira a la familia hacia afuera, con su entorno: identifica redes de apoyo y fuentes de tensión, con vínculos fuertes, débiles o estresantes.' },
        { cells: ['APGAR familiar', 'Percepción de funcionalidad', 'Cómo el paciente vive a su propia familia', 'Siete a diez normal, cuatro a seis leve, cero a tres severa'],
          say: 'El APGAR familiar mide la percepción de funcionalidad del propio paciente, con los cortes que ya vimos: siete a diez normal, cuatro a seis disfunción leve, cero a tres disfunción severa.' },
        { cells: ['ASIS', 'Toda la comunidad del sector', 'Priorizar problemas de salud con el método de Hanlon', 'Diagnóstico participativo, no un test individual'],
          say: 'Y el ASIS no evalúa a una familia, sino a toda la comunidad del sector, para priorizar problemas de salud con el método de Hanlon. La trampa clásica es usar el nombre de un instrumento por otro: si la pregunta habla de redes de apoyo, no es APGAR ni genograma, es ecomapa.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Médico de familia atiende a un paciente de 68 años con hipertensión mal controlada. Al indagar, refiere que vive solo desde que enviudó hace un año, que sus hijos viven en otra región y lo llaman poco, y que ha dejado de asistir a las actividades de su junta de vecinos. Al aplicar el cuestionario de APGAR familiar obtiene 8 puntos, porque convive bien con su único hijo cercano.',
      question: '¿Cuál es el instrumento más adecuado para completar la evaluación de este paciente?',
      options: [
        { letter: 'A', text: 'Aplicar un ecomapa para evaluar sus redes de apoyo social y su nivel de aislamiento' },
        { letter: 'B', text: 'Repetir el APGAR familiar en un mes, ya que el puntaje obtenido fue normal' },
        { letter: 'C', text: 'Construir un genograma de tres generaciones para buscar patologías heredofamiliares' },
        { letter: 'D', text: 'Aplicar la escala de Zarit para evaluar sobrecarga del cuidador' },
        { letter: 'E', text: 'No se requiere ningún instrumento adicional, ya que el control es solo de la hipertensión' },
      ],
      correct: 'A',
      explanation: 'El APGAR familiar normal solo refleja la relación con el hijo cercano; no captura el aislamiento social del paciente, que vive solo, con hijos lejanos y sin participación comunitaria. El ecomapa es el instrumento diseñado justamente para graficar esas redes de apoyo externas y detectar el aislamiento.',
      say: {
        stem: 'Vamos con un caso. Un médico de familia atiende a un paciente de sesenta y ocho años con hipertensión mal controlada. Vive solo desde que enviudó hace un año, sus hijos viven en otra región y lo llaman poco, y dejó de ir a las actividades de su junta de vecinos. Al aplicar el APGAR familiar obtiene ocho puntos, porque convive bien con su único hijo cercano.',
        question: '¿Cuál es el instrumento más adecuado para completar la evaluación de este paciente?',
        options: 'Las opciones: aplicar un ecomapa para evaluar redes de apoyo y aislamiento, repetir el APGAR en un mes porque salió normal, construir un genograma de tres generaciones, aplicar la escala de Zarit por sobrecarga del cuidador, o no aplicar ningún instrumento adicional. Piénsalo.',
        answer: 'Es la A. El APGAR salió normal, pero solo mide la relación con el hijo con el que convive bien: no capta que este paciente está aislado de su entorno más amplio, y ese aislamiento explica por qué su hipertensión no se controla. El instrumento diseñado para graficar redes externas y detectar aislamiento es el ecomapa; la escala de Zarit, en cambio, es para cuidadores de dependientes, y aquí nadie cuida a nadie.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: '¿Cuál de los siguientes instrumentos de salud familiar es el más adecuado para identificar y graficar las redes de apoyo social formal e informal, las fuentes de tensión comunitaria y el grado de aislamiento social de un grupo familiar?',
      question: '¿Cuál es el instrumento correcto?',
      options: [
        { letter: 'A', text: 'Ecomapa' },
        { letter: 'B', text: 'Genograma estructural' },
        { letter: 'C', text: 'Test de APGAR de Smilkstein' },
        { letter: 'D', text: 'Escala de Zarit' },
        { letter: 'E', text: 'Cuestionario de Duke-UNC' },
      ],
      correct: 'A',
      explanation: 'El ecomapa es la herramienta diseñada para visualizar a la familia en el centro de su entorno relacional, trazando vínculos con instituciones comunitarias y distinguiendo si son de apoyo, débiles o de tensión. El genograma mapea la estructura interna, el APGAR la percepción de funcionalidad interna, la escala de Zarit la sobrecarga del cuidador y el Duke-UNC el apoyo social percibido de forma individual.',
      say: {
        stem: 'Esta es una pregunta representativa del banco EUNACOM sobre este tema. Preguntan cuál instrumento de salud familiar es el más adecuado para identificar y graficar las redes de apoyo social, las fuentes de tensión comunitaria y el grado de aislamiento social de un grupo familiar.',
        question: '¿Cuál es el instrumento correcto?',
        options: 'Las opciones: ecomapa, genograma estructural, test de APGAR de Smilkstein, escala de Zarit, o el cuestionario de Duke-UNC.',
        answer: 'Es la A, el ecomapa, exactamente por lo que acabamos de ver: es la herramienta diseñada para poner a la familia en el centro y trazar sus vínculos con el entorno. El genograma mapea la estructura interna, el APGAR mide la percepción de funcionalidad interna, la escala de Zarit mide sobrecarga del cuidador, y el Duke-UNC mide apoyo social percibido, pero de forma individual, no familiar.' },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Instrumento correcto según lo que preguntan', tag: 'No se confunden', kind: 'key', items: [
          { t: 'Estructura y vínculos internos', d: 'Genograma',
            say: 'Cerremos con las reglas de oro. Si preguntan por estructura y vínculos internos de la familia, es genograma.' },
          { t: 'Redes externas y aislamiento', d: 'Ecomapa',
            say: 'Si preguntan por redes externas y aislamiento social, es ecomapa.' },
          { t: 'Percepción de funcionalidad', d: 'APGAR familiar, con sus cortes de siete, cuatro y cero',
            say: 'Y si preguntan por la percepción del propio paciente sobre su funcionalidad familiar, es APGAR, con los cortes de siete a diez, cuatro a seis, y cero a tres.' },
        ] },
        { title: 'El puente con la comunidad', tag: 'Del individuo al territorio', kind: 'normal', items: [
          { t: 'ASIS y método de Hanlon', d: 'Primero datos, luego participación, luego priorizar',
            say: 'Y cuando la unidad ya no es la familia sino todo el territorio, el instrumento es el ASIS, que prioriza sus problemas con el método de Hanlon: primero los datos, después la participación comunitaria, y recién entonces se prioriza. Si te llevas una sola idea de hoy: cada instrumento del MAIS responde una pregunta distinta, y el examen te pone la viñeta para que identifiques cuál. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Qué instrumento del MAIS corresponde',
    root: N(
      'start', 'Equipo de salud familiar necesita evaluar', 'A quién y qué se quiere entender',
      'El primer paso es decidir si lo que necesitas entender es la estructura de una familia, su funcionamiento percibido, su entorno, o el territorio completo.',
      ['', N(
        'q', '¿Qué dimensión necesitas evaluar?', 'Individuo, familia, entorno o comunidad',
        'Cada instrumento del modelo responde una pregunta distinta, y confundirlos es el error más común del examen.',
        ['Estructura y antecedentes familiares', N(
          'ok', 'Genograma', 'Árbol de al menos tres generaciones',
          'Grafica la composición familiar, las edades, la consanguinidad, las enfermedades heredofamiliares y el tipo de vínculo entre los miembros.',
        )],
        ['Redes con el entorno y aislamiento', N(
          'ok', 'Ecomapa', 'Familia en el centro, entorno alrededor',
          'Traza los vínculos de la familia con el trabajo, la escuela, el CESFAM y otras redes, identificando si son de apoyo o de tensión.',
        )],
        ['Percepción de funcionalidad familiar', N(
          'ok', 'APGAR familiar', 'Cinco preguntas autoadministradas',
          'Siete a diez puntos es normofuncional, cuatro a seis es disfunción leve, y cero a tres es disfunción severa, que activa al equipo multidisciplinario.',
        )],
        ['Todo el territorio asignado al CESFAM', N(
          'ok', 'Diagnóstico de salud comunitario (ASIS)', 'Datos, participación y priorización con Hanlon',
          'Combina datos duros con diagnóstico participativo, y prioriza los problemas de salud con el método de Hanlon antes de diseñar el plan intersectorial.',
        )],
      )],
    ),
  },
};
