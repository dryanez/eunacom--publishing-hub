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
      kicker: 'Conceptos base',
      title: 'Salud, determinantes y promoción',
      cards: [
        { title: 'Salud y salud pública', tag: 'Definiciones', kind: 'key', items: [
          { t: 'Salud: bienestar físico, mental y social', d: 'OMS, 1948; no solo ausencia de enfermedad',
            say: 'Antes de los instrumentos, los conceptos que sostienen el modelo. La salud, según la OMS en mil novecientos cuarenta y ocho, es el completo bienestar físico, mental y social, y no solo la ausencia de enfermedad.' },
          { t: 'Salud pública: la población es el objeto', d: 'Winslow, 1920; ciencia básica: epidemiología',
            say: 'La salud pública, en la definición de Winslow, es la ciencia y el arte de prevenir la enfermedad, prolongar la vida y promover la salud mediante el esfuerzo organizado de la comunidad. Su objeto es la población, mientras la clínica trabaja con el individuo, y su ciencia básica es la epidemiología.' },
          { t: 'Alma-Ata, 1978', d: 'Atención primaria para la salud para todos',
            say: 'Y la Declaración de Alma-Ata, de mil novecientos setenta y ocho, estableció la atención primaria como la estrategia para alcanzar la salud para todos.' },
        ] },
        { title: 'Determinantes', tag: 'Qué explica la salud', kind: 'criteria', items: [
          { t: 'Lalonde, 1974: cuatro campos', d: 'Biología, ambiente, estilo de vida, atención',
            say: 'Los determinantes son los factores que explican el nivel de salud de una población. Lalonde, en Canadá, los agrupó en cuatro: biología humana, medio ambiente, estilo de vida y organización de la atención de salud.' },
          { t: 'Dahlgren y Whitehead: capas', d: 'Del individuo a las condiciones socioeconómicas',
            say: 'El modelo de Dahlgren y Whitehead los ordena en capas. En el centro, edad, sexo y genética. Luego los estilos de vida, las redes sociales, las condiciones de vida y trabajo, y en la capa externa las condiciones socioeconómicas, culturales y ambientales.' },
          { t: 'Estructurales e intermediarios', d: 'Ingreso, educación, género, etnia',
            say: 'La Comisión de la OMS de dos mil ocho distingue los determinantes estructurales, como ingreso, educación, ocupación, género y etnia, de los intermediarios, como las condiciones de vida, las conductas y el sistema de salud. Las inequidades son las diferencias en salud evitables e injustas que todo esto genera.' },
        ] },
        { title: 'Promoción de la salud', tag: 'Carta de Ottawa, 1986', kind: 'normal', items: [
          { t: 'Aumentar el control sobre la salud', d: 'Cinco líneas de acción',
            say: 'La promoción de la salud capacita a las personas para tener más control sobre su salud. Sus cinco líneas son: políticas públicas saludables, entornos favorables, refuerzo de la acción comunitaria, habilidades personales y reorientación de los servicios.' },
          { t: 'Leyes 20.606 y 20.660', d: 'Sellos «alto en» y tabaco',
            say: 'En Chile se concretan, por ejemplo, en la ley de etiquetado de alimentos, con los sellos alto en, y en la ley del tabaco. Y el modelo integral articula promoción y prevención con curación, rehabilitación y cuidados paliativos.' },
        ] },
      ],
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
            say: 'Empecemos por el genograma, también llamado familiograma. Mira este genograma: es un árbol gráfico que representa como mínimo tres generaciones de la familia, con símbolos estandarizados, cuadrados para los hombres, círculos para las mujeres y líneas que indican el tipo de vínculo.',
            photo: { src: 'biblioteca/16_salud_publica/sp-05/01_genograma__meneghello_p38.jpg', label: 'Genograma y símbolos', at: 'Mira este genograma', credit: 'Meneghello Pediatría, 6.ª ed., Fig. 3-1, p. 38' } },
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
      type: 'flow',
      kicker: 'Ciclo vital familiar',
      title: 'Las etapas de Duvall y las crisis',
      nodes: [
        { id: 'a', col: 0, row: 0, k: 'start', t: 'Pareja y recién nacido', s: 'Etapas 1 y 2' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'Hijos preescolares y escolares', s: 'Etapas 3 y 4' },
        { id: 'c', col: 2, row: 0, k: 'mech', t: 'Hijos adolescentes', s: 'Etapa 5' },
        { id: 'd', col: 3, row: 1, k: 'effect', t: 'Salida de los hijos y nido vacío', s: 'Etapas 6 y 7' },
        { id: 'e', col: 4, row: 0, k: 'good', t: 'Envejecimiento', s: 'Etapa 8: jubilación, viudez' },
        { id: 'n', col: 1, row: 3, k: 'alert', t: 'Crisis normativas', s: 'Esperables, de cambio de etapa' },
        { id: 'x', col: 3, row: 3, k: 'risk', t: 'Crisis no normativas', s: 'Inesperadas' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' },
        { from: 'n', to: 'x' },
      ],
      steps: [
        { show: ['a', 'b', 'c', 'd', 'e'], note: 'Ocho etapas',
          say: 'El ciclo vital familiar describe las etapas que recorre una familia y las tareas de cada una. El modelo de Duvall distingue ocho: pareja sin hijos, familia con recién nacido, con hijos preescolares, escolares, adolescentes, la plataforma de lanzamiento cuando los hijos salen, el nido vacío y, al final, el envejecimiento, con la jubilación y la viudez. Saber en qué etapa está la familia te permite anticipar los problemas esperables y orientar la consejería.' },
        { show: ['n'], note: 'Cambio de etapa: crisis esperable',
          say: 'Cada cambio de etapa es una crisis normativa, es decir, esperable: el nacimiento del primer hijo, la adolescencia, el nido vacío, la jubilación.' },
        { show: ['x'], note: 'Enfermedad, muerte, separación, cesantía',
          say: 'Las crisis no normativas, en cambio, son inesperadas: una enfermedad grave, una muerte prematura, una separación, la cesantía, la migración o la violencia. Una crisis es un momento de mayor vulnerabilidad, pero también una oportunidad para intervenir. En la práctica el equipo combina el ciclo vital con el genograma, el ecomapa y el APGAR para evaluar el riesgo familiar y planificar visitas domiciliarias.' },
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
      type: 'points',
      kicker: 'Priorización',
      title: 'Epidemiología en el ASIS y método de Hanlon',
      cards: [
        { title: 'Para qué sirve en el ASIS', tag: 'Epidemiología aplicada', kind: 'key', items: [
          { t: 'Describir, identificar, estimar', d: 'Persona, lugar y tiempo; riesgo e inequidades',
            say: 'En el diagnóstico de situación de salud la epidemiología sirve para describir el perfil de la población por persona, lugar y tiempo, identificar los grupos y territorios de mayor riesgo, estimar la magnitud y la tendencia de los problemas, y priorizar y evaluar el impacto de lo que se hace.' },
          { t: 'Fuentes habituales', d: 'Estadísticas vitales, censo, encuestas, REM, EPIVIGILA',
            say: 'Las fuentes son las estadísticas vitales del DEIS y el INE, el censo, las encuestas como la Encuesta Nacional de Salud y la CASEN, los registros del CESFAM y la vigilancia EPIVIGILA.' },
        ] },
        { title: 'Criterios de priorización', tag: 'Qué se pondera', kind: 'criteria', items: [
          { t: 'Magnitud, gravedad, vulnerabilidad, costo', d: 'Los cuatro criterios clásicos',
            say: 'Para priorizar se usan criterios como la magnitud, cuántos afecta; la gravedad, por mortalidad o discapacidad; la vulnerabilidad, o sea la capacidad de intervenir; y el costo.' },
          { t: 'Hanlon: (A + B) × C × D', d: 'A magnitud, B gravedad, C eficacia, D factibilidad',
            say: 'El método de Hanlon los combina en una fórmula: A más B, multiplicado por C, multiplicado por D. A es la magnitud, B la gravedad, C la eficacia de la intervención y D la factibilidad.' },
          { t: 'Si D es 0, no es prioritario', d: 'Factibilidad: criterios PEARL',
            say: 'La factibilidad vale cero o uno, según los criterios PEARL: pertinencia, economía, aceptabilidad, recursos y legalidad. Si D es cero, todo el puntaje es cero, y el problema no es prioritario, por grave que sea.' },
        ] },
        { title: 'Otros métodos', tag: 'Y consenso', kind: 'normal', items: [
          { t: 'CENDES-OPS', d: 'Magnitud, trascendencia, vulnerabilidad, costo',
            say: 'Otros métodos son el CENDES de la OPS, con magnitud, trascendencia, vulnerabilidad y costo.' },
          { t: 'Grupo nominal, Delphi, votación ponderada', d: 'Aportan el diagnóstico participativo',
            say: 'Y las técnicas de consenso: grupo nominal, Delphi y votación ponderada con la comunidad, que aporta el diagnóstico participativo.' },
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
        { cells: ['Ciclo vital de Duvall', 'Etapa de la familia', 'Anticipar problemas y crisis esperables', 'Ocho etapas; el cambio de etapa es crisis normativa'],
          say: 'El ciclo vital de Duvall tiene ocho etapas. Cada cambio de etapa es una crisis normativa, esperable, y la muerte prematura o la cesantía son crisis no normativas.' },
        { cells: ['Método de Hanlon', 'Problemas de la comunidad', 'Priorizar con A más B, por C, por D', 'Si la factibilidad D es cero, no es prioritario'],
          say: 'En Hanlon, si la factibilidad es cero, el problema no es prioritario, aunque sea muy grave. Es una trampa que se repite.' },
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
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 7.01.3.008 · Diagnóstico de situación de salud",
      "stem": "El equipo de un CESFAM urbano, con 32.000 inscritos, necesita planificar sus actividades del próximo año. Para ello quiere caracterizar el perfil epidemiológico, sociodemográfico y de determinantes sociales de toda la población de su territorio, usando censos, estadísticas vitales y registros del establecimiento, e incorporando la opinión de la comunidad.",
      "question": "¿Cómo se denomina este proceso?",
      "options": [
        {
          "letter": "A",
          "text": "Diagnóstico o análisis de situación de salud"
        },
        {
          "letter": "B",
          "text": "Estudio de brote"
        },
        {
          "letter": "C",
          "text": "Ecomapa comunitario"
        },
        {
          "letter": "D",
          "text": "Vigilancia epidemiológica centinela"
        },
        {
          "letter": "E",
          "text": "Auditoría clínica"
        }
      ],
      "correct": "A",
      "explanation": "El diagnóstico o análisis de situación de salud (ASIS) caracteriza la salud de una población de un territorio y sus determinantes, con datos objetivos y participación comunitaria, para priorizar problemas y planificar. El ecomapa evalúa a una familia, no a una comunidad, y el estudio de brote investiga un evento puntual.",
      "say": {
        "stem": "El equipo de un CESFAM con treinta y dos mil inscritos quiere planificar el próximo año. Para eso busca caracterizar el perfil epidemiológico, sociodemográfico y de determinantes sociales de toda la población de su territorio, con censos, estadísticas vitales y registros propios, y escuchando a la comunidad.",
        "question": "¿Cómo se denomina este proceso?",
        "options": "Las opciones: diagnóstico de situación de salud, estudio de brote, ecomapa comunitario, vigilancia centinela o auditoría clínica. Piénsalo.",
        "answer": "Es la A. Caracterizar la salud de toda una población y sus determinantes para planificar es el diagnóstico de situación de salud. El ecomapa tienta porque mira redes y entorno, pero evalúa a una sola familia, no a la comunidad completa."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2018 · Pregunta 136",
      "stem": "Un CESFAM realiza un diagnóstico de salud participativo de su comunidad, en conjunto con la junta de vecinos y el consejo de desarrollo local.",
      "question": "¿Cuál es la última fase del diagnóstico de salud participativo?",
      "options": [
        {
          "letter": "A",
          "text": "La comprobación de los problemas de salud referidos por la comunidad"
        },
        {
          "letter": "B",
          "text": "La determinación de estadísticas y datos objetivos y completos"
        },
        {
          "letter": "C",
          "text": "La determinación de la prevalencia de las patologías más importantes de la comunidad"
        },
        {
          "letter": "D",
          "text": "La definición de estrategias de intervención priorizadas"
        },
        {
          "letter": "E",
          "text": "La realización de estudios experimentales"
        }
      ],
      "correct": "D",
      "explanation": "El diagnóstico participativo parte reuniendo datos objetivos y la percepción de la comunidad, luego prioriza los problemas, y termina definiendo estrategias de intervención priorizadas en conjunto con la comunidad. Los datos y la prevalencia son etapas iniciales, no el cierre.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Un CESFAM hace un diagnóstico de salud participativo de su comunidad, junto con la junta de vecinos y el consejo de desarrollo local.",
        "question": "¿Cuál es la última fase de ese diagnóstico participativo?",
        "options": "Las opciones: comprobar los problemas referidos por la comunidad, reunir estadísticas objetivas, determinar la prevalencia de las principales patologías, definir estrategias de intervención priorizadas, o hacer estudios experimentales. Piénsalo.",
        "answer": "Es la D. El diagnóstico participativo termina cuando, ya priorizados los problemas, se definen las estrategias de intervención junto a la comunidad. Reunir estadísticas tienta porque es indispensable, pero es el primer paso, no el último."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 7.01.3.001 · Conceptos y definiciones de Salud Pública",
      "stem": "Un médico recién llegado a una Dirección de Salud comunal pregunta en qué se diferencia su nuevo trabajo de la atención clínica que realizaba en el hospital.",
      "question": "¿Qué característica define mejor a la salud pública?",
      "options": [
        {
          "letter": "A",
          "text": "Su objeto es el diagnóstico y tratamiento de cada paciente individual"
        },
        {
          "letter": "B",
          "text": "Su objeto es la salud de la población, mediante esfuerzos organizados de la sociedad"
        },
        {
          "letter": "C",
          "text": "Es la medicina ejercida exclusivamente en establecimientos estatales"
        },
        {
          "letter": "D",
          "text": "Se limita al control de enfermedades infecciosas"
        },
        {
          "letter": "E",
          "text": "Se ocupa principalmente de la gestión hospitalaria"
        }
      ],
      "correct": "B",
      "explanation": "La salud pública es la ciencia y el arte de prevenir la enfermedad, prolongar la vida y promover la salud mediante esfuerzos organizados de la sociedad (Winslow). Su sujeto es la población, no el individuo, e incluye determinantes sociales, promoción, prevención y organización de servicios. No se restringe al sector estatal ni a las infecciones.",
      "say": {
        "stem": "Un médico que pasa del hospital a una dirección de salud comunal pregunta qué cambia en su trabajo.",
        "question": "¿Qué define mejor a la salud pública?",
        "options": "Las opciones: atención de cada paciente, salud de la población con esfuerzos organizados, medicina estatal, control de infecciones o gestión hospitalaria. Piénsalo.",
        "answer": "Es la B. La salud pública se ocupa de la población mediante esfuerzos organizados de la sociedad. La medicina estatal tienta por el nombre, pero lo público se refiere a lo colectivo, no a quién paga o administra."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 7.01.3.005 · Promoción de salud y prevención de enfermedades",
      "stem": "Un municipio, junto a vecinos y organizaciones sociales, construye ciclovías y plazas activas, y establece ferias libres con alimentos saludables a bajo costo, para mejorar la calidad de vida de toda la población comunal.",
      "question": "¿A qué tipo de estrategia corresponde esta iniciativa?",
      "options": [
        {
          "letter": "A",
          "text": "Prevención cuaternaria"
        },
        {
          "letter": "B",
          "text": "Prevención primaria específica"
        },
        {
          "letter": "C",
          "text": "Prevención secundaria"
        },
        {
          "letter": "D",
          "text": "Prevención terciaria"
        },
        {
          "letter": "E",
          "text": "Promoción de la salud"
        }
      ],
      "correct": "E",
      "explanation": "La promoción de la salud (Carta de Ottawa) busca dar a la población los medios para mejorar su salud y controlar sus determinantes, con participación social y entornos saludables, sin dirigirse a una enfermedad específica. La prevención primaria apunta a evitar una enfermedad determinada (por ejemplo, vacunar), la secundaria a detectarla precozmente y la terciaria a limitar secuelas.",
      "say": {
        "stem": "Un municipio, con los vecinos, construye ciclovías, plazas activas y ferias saludables para toda la comuna.",
        "question": "¿Qué tipo de estrategia es?",
        "options": "Las opciones: cuaternaria, prevención primaria, secundaria, terciaria o promoción de la salud. Piénsalo.",
        "answer": "Es la E. Crear entornos saludables con participación social, sin apuntar a una enfermedad concreta, es promoción. La prevención primaria tienta, pero esa se dirige a evitar una enfermedad específica, como vacunar contra la influenza."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2025 · Pregunta 51",
      "stem": "Según la Comisión sobre Determinantes Sociales de la Salud de la OMS, se analizan distintos factores que influyen en la salud de la población.",
      "question": "¿Cuál de los siguientes factores tiene mayor impacto en la salud de la población?",
      "options": [
        {
          "letter": "A",
          "text": "Nivel educacional"
        },
        {
          "letter": "B",
          "text": "Vivienda"
        },
        {
          "letter": "C",
          "text": "Alimentación"
        },
        {
          "letter": "D",
          "text": "Ingreso económico"
        },
        {
          "letter": "E",
          "text": "Acceso a servicios de salud"
        }
      ],
      "correct": "A",
      "explanation": "Los determinantes estructurales (posición socioeconómica: educación, ingreso, ocupación) pesan más que el acceso a servicios de salud. El nivel educacional se considera el de mayor impacto, porque condiciona el ingreso, el empleo, las conductas y el uso de servicios, y se asocia de forma consistente con mortalidad y esperanza de vida.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticinco. Según la comisión de la OMS sobre determinantes sociales de la salud.",
        "question": "¿Qué factor tiene mayor impacto en la salud de la población?",
        "options": "Las opciones: nivel educacional, vivienda, alimentación, ingreso económico o acceso a servicios de salud. Piénsalo.",
        "answer": "Es la A. La educación es el determinante estructural de mayor peso, porque condiciona ingreso, empleo y conductas. El acceso a servicios tienta, pero los servicios de salud explican una parte menor de la salud poblacional."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 7.01.3.012 · Ejecución de un diagnóstico",
      "stem": "El equipo de un CESFAM debe realizar el diagnóstico de situación de salud de su población a cargo, conforme al Modelo de Atención Integral de Salud Familiar y Comunitaria.",
      "question": "¿Qué característica es esencial en la ejecución de este diagnóstico?",
      "options": [
        {
          "letter": "A",
          "text": "Limitarse a las enfermedades de notificación obligatoria"
        },
        {
          "letter": "B",
          "text": "Basarse exclusivamente en los egresos hospitalarios"
        },
        {
          "letter": "C",
          "text": "Ser elaborado únicamente por la dirección del establecimiento"
        },
        {
          "letter": "D",
          "text": "Incorporar la participación de la comunidad e integrar información cuantitativa y cualitativa"
        },
        {
          "letter": "E",
          "text": "Realizarse una sola vez, al inaugurar el centro"
        }
      ],
      "correct": "D",
      "explanation": "El diagnóstico de situación de salud debe ser participativo: combina datos cuantitativos (demográficos, morbimortalidad, factores de riesgo, recursos) con la percepción de la comunidad sobre sus problemas. Culmina en la priorización de problemas y la programación de acciones, y se actualiza periódicamente.",
      "say": {
        "stem": "Un CESFAM debe hacer el diagnóstico de salud de su población según el modelo de salud familiar.",
        "question": "¿Qué característica es esencial?",
        "options": "Las opciones: solo enfermedades notificables, solo egresos hospitalarios, solo la dirección, participación comunitaria con datos cuantitativos y cualitativos o una única vez. Piénsalo.",
        "answer": "Es la D. El diagnóstico debe ser participativo e integrar datos duros con la mirada de la comunidad. Usar solo los egresos hospitalarios tienta porque son datos fáciles de obtener, pero dejan fuera lo que la gente percibe y lo que no llega al hospital."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 7.01.3.017 · Usos de la epidemiología en el diagnóstico de situación de salud",
      "stem": "Un equipo comunal, en su diagnóstico de situación de salud, quiere identificar qué grupos de edad, sectores de la comuna y períodos del año concentran la mayor obesidad infantil, para orientar sus recursos.",
      "question": "¿Qué herramienta epidemiológica es la más adecuada para este fin?",
      "options": [
        {
          "letter": "A",
          "text": "Análisis de costo-efectividad"
        },
        {
          "letter": "B",
          "text": "Ensayo clínico aleatorizado"
        },
        {
          "letter": "C",
          "text": "Epidemiología descriptiva, según persona, lugar y tiempo"
        },
        {
          "letter": "D",
          "text": "Auditoría clínica"
        },
        {
          "letter": "E",
          "text": "Estudio de cohortes a 20 años"
        }
      ],
      "correct": "C",
      "explanation": "En el diagnóstico de situación, la epidemiología describe la magnitud y distribución de los problemas de salud según persona, lugar y tiempo, identificando grupos de riesgo para priorizar y focalizar intervenciones. Los diseños analíticos o experimentales buscan causas o evalúan intervenciones, lo que no es el objetivo aquí.",
      "say": {
        "stem": "Un equipo comunal quiere saber qué edades, sectores y épocas concentran la obesidad infantil para orientar recursos.",
        "question": "¿Qué herramienta es la más adecuada?",
        "options": "Las opciones: costo efectividad, ensayo clínico, epidemiología descriptiva, auditoría o cohorte a veinte años. Piénsalo.",
        "answer": "Es la C. Describir según persona, lugar y tiempo es la epidemiología descriptiva, base del diagnóstico de situación. La cohorte tienta por ser un buen diseño, pero busca causas y tomaría veinte años, no sirve para orientar recursos ahora."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 7.01.3.030 · Criterios de priorización de problemas",
      "stem": "Tras su diagnóstico de situación, un CESFAM debe priorizar sus problemas de salud usando criterios clásicos: magnitud, trascendencia, vulnerabilidad y factibilidad.",
      "question": "¿Qué evalúa el criterio de vulnerabilidad?",
      "options": [
        {
          "letter": "A",
          "text": "La gravedad del problema y su impacto social y económico"
        },
        {
          "letter": "B",
          "text": "El número de personas afectadas"
        },
        {
          "letter": "C",
          "text": "Si existen intervenciones eficaces capaces de modificar el problema"
        },
        {
          "letter": "D",
          "text": "La disponibilidad de recursos y la aceptación de la comunidad"
        },
        {
          "letter": "E",
          "text": "La tendencia del problema en los últimos años"
        }
      ],
      "correct": "C",
      "explanation": "En la priorización: magnitud es cuántos afecta (prevalencia, incidencia); trascendencia, su gravedad e impacto (mortalidad, discapacidad, años de vida perdidos, costo social); vulnerabilidad, la existencia de intervenciones eficaces para modificarlo; y factibilidad, si hay recursos, aceptabilidad y viabilidad para aplicarlas.",
      "say": {
        "stem": "Un CESFAM prioriza sus problemas con magnitud, trascendencia, vulnerabilidad y factibilidad.",
        "question": "¿Qué evalúa la vulnerabilidad?",
        "options": "Las opciones: gravedad e impacto, número de afectados, si hay intervenciones eficaces, recursos y aceptación o tendencia en el tiempo. Piénsalo.",
        "answer": "Es la C. Vulnerabilidad es qué tan modificable es el problema con las intervenciones existentes. La de recursos tienta, pero esa es la factibilidad, si podemos aplicar la intervención aquí."
      }
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
