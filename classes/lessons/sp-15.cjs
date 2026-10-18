// Clase 21.15 (Salud Pública) — guion docente escrito a mano (estándar Módulo 1). Tema del libro sin guion previo (sp-15, tier 3).
// Fuente clínica: books/scripts/dataset_saludpublica_bloque_1.cjs (sp-15). Códigos: 7.01.3.007 (demografía y salud pública), 7.01.3.041 (conceptos de
// administración y gestión), 7.01.3.042 (planificación y programación), 7.01.3.043 (formulación de programas), 7.01.3.044 (organización),
// 7.01.3.045 (dirección) y 7.01.3.055 (administración de establecimientos), según books/data/v3_codemap.json y v3_topic_codes.json.
// Preguntas reales (class_questions.cjs por código y --search): 7.01.3.007 tiene 9, 7.01.3.042 tiene 2 y 7.01.3.045 tiene 1; las demás no tienen.
// Usadas, con enunciado y alternativas copiados tal cual: Enero 2023 P7 (pirámide de base ancha), Diciembre 2025 P13 (migrantes jóvenes y natalidad),
// Julio 2025 P117 (transición epidemiológica) y Diciembre 2019 P4 (planificación frente a programación).
// No usadas: Diciembre 2022 P124 y Agosto 2021 P4 (el enunciado dice "la siguiente pirámide poblacional" y la figura no está en el banco: incompleto);
// Diciembre 2022 P153 y Enero 2023 P1 ("demografía dinámica": la primera da como clave la tasa de fecundidad y deja la mortalidad infantil
// como distractor, y la segunda da la mortalidad infantil como clave; se contradicen entre sí, ver REVISION_CONTENIDO); Diciembre 2025 P12
// (parecida a P13, sin aportar algo nuevo); Diciembre 2024 P138 (alternativas poco precisas); Diciembre 2025 P120 (vocero de prensa del hospital:
// la propia explicación del banco la califica de muy discutible); Diciembre 2018 P135 (confianza 0,45).
// Preguntas de práctica del libro (etiqueta "Banco EUNACOM · Caso representativo"): objetivo frente a meta (código 7.01.3.043), porque no hay real.
// El caso clínico es la viñeta del libro (CESFAM y hospital con 5.000 egresos): cálculo de los tres indicadores hospitalarios.
// Sin imágenes: la clase es de conceptos y cifras, no hay fotos clínicas.
// En movimiento: scenes/sp_nuevas.html (?v=piramides), gráfico solo código (pirámides expansiva, estacionaria y constrictiva, con Chile).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'sp-15',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Demografía, planificación, programación, organización y dirección: el ciclo de la gestión en salud',
      say: 'Bienvenido. Hoy vemos la gestión y la administración en salud. Suena abstracto, pero el examen pregunta cosas muy concretas: qué medidas corresponden a una pirámide de población, cuál es la diferencia entre objetivo y meta, y cómo se calcula el índice ocupacional de un hospital. Vamos a recorrer el ciclo completo: demografía para conocer a la población, y después planificar, programar, organizar, dirigir y evaluar.',
    },

    {
      type: 'points',
      kicker: 'Demografía',
      title: 'Cómo es y cómo cambia una población',
      cards: [
        { title: 'Qué estudia', tag: 'Los denominadores', kind: 'key', items: [
          { t: 'Tamaño, estructura y dinámica', d: 'Entrega los denominadores de las tasas',
            say: 'La demografía estudia el tamaño, la estructura y la dinámica de las poblaciones. Para la salud pública es clave porque entrega los denominadores de las tasas y la información para planificar.' },
          { t: 'Censo, proyecciones del INE, estadísticas vitales', d: 'Las fuentes',
            say: 'Sus fuentes son el censo, las proyecciones del Instituto Nacional de Estadísticas y las estadísticas vitales.' },
        ] },
        { title: 'Componentes', tag: 'Lo que hace cambiar a una población', kind: 'criteria', items: [
          { t: 'Natalidad y fecundidad', d: 'Reemplazo: 2,1 hijos por mujer',
            say: 'Los componentes son la natalidad y la fecundidad. La tasa global de fecundidad cuenta los hijos por mujer, y el nivel de reemplazo es dos coma uno.' },
          { t: 'Mortalidad y migración', d: 'Crecimiento natural = natalidad − mortalidad',
            say: 'Luego la mortalidad y la migración. El crecimiento natural es la natalidad menos la mortalidad.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Pirámide de población',
      title: 'Expansiva, estacionaria y constrictiva',
      head: ['Pirámide', 'Forma', 'Natalidad y mortalidad', 'Característica'],
      rows: [
        { cells: ['Expansiva', 'Base ancha, cúspide estrecha (triángulo)', 'Altas ambas', 'Población joven; países de ingreso bajo'],
          say: 'La estructura por edad y sexo se dibuja en una pirámide. La expansiva tiene la base ancha y la cima angosta, como un triángulo. Natalidad y mortalidad altas, población joven, propia de países de ingreso bajo.' },
        { cells: ['Estacionaria', 'Forma de campana, lados casi verticales', 'Natalidad en descenso, mortalidad baja', 'Crecimiento lento'],
          say: 'La estacionaria tiene forma de campana, con los lados casi verticales. La natalidad va en descenso y la mortalidad es baja, así que la población crece lento.' },
        { cells: ['Constrictiva', 'Base angosta, cuerpo ancho', 'Natalidad muy baja', 'Envejecimiento; Chile'],
          say: 'La constrictiva tiene la base angosta y el cuerpo ancho. La natalidad es muy baja y la población envejece. Es la dirección en que va Chile.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Cómo cambia la pirámide',
      images: [
        { src: 'animaciones/sp-15/A1_piramides.mp4', label: 'Pirámide expansiva, estacionaria y constrictiva', credit: 'Gráfico con código propio · forma esquemática, no datos reales' },
      ],
      steps: [
        { note: 'De la base ancha a la base angosta',
          say: 'Mira cómo cambia la forma. Con natalidad y mortalidad altas, la pirámide es un triángulo de base ancha, y la salud pública se centra en planificación familiar, saneamiento y vacunación. Cuando la natalidad baja, la base se angosta y aparece la campana. Y con natalidad muy baja, el cuerpo se ensancha: la población envejece, y toca atender enfermedades crónicas, dependencia y cuidados del adulto mayor.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Transiciones',
      title: 'De población joven a población que envejece',
      cards: [
        { title: 'Índices', tag: 'Fórmulas', kind: 'criteria', items: [
          { t: 'Índice de envejecimiento', d: '≥ 65 años / menores de 15 × 100',
            say: 'El índice de envejecimiento es la población de sesenta y cinco años o más, dividida por los menores de quince, por cien.' },
          { t: 'Razón de dependencia', d: '(< 15 + ≥ 65) / población de 15 a 64 × 100',
            say: 'La razón de dependencia es la suma de los menores de quince y los de sesenta y cinco o más, dividida por la población de quince a sesenta y cuatro, por cien.' },
        ] },
        { title: 'Transición', tag: 'Demográfica y epidemiológica', kind: 'key', items: [
          { t: 'Transición demográfica', d: 'De natalidad y mortalidad altas a bajas',
            say: 'La transición demográfica es el paso de natalidad y mortalidad altas a natalidad y mortalidad bajas, con envejecimiento.' },
          { t: 'Transición epidemiológica (Omran)', d: 'Infecciosas ceden ante crónicas, cáncer y lesiones',
            say: 'Se acompaña de la transición epidemiológica de Omran: las enfermedades infecciosas y la desnutrición ceden ante las crónicas no transmisibles, el cáncer y las lesiones.' },
          { t: 'Chile: fase avanzada', d: 'Fecundidad bajo el reemplazo, esperanza de vida cerca de 80 años',
            say: 'Chile está en una fase avanzada: la fecundidad está bajo el nivel de reemplazo y la esperanza de vida es cercana a ochenta años. Por eso se priorizan las enfermedades crónicas, la dependencia y los cuidados del adulto mayor.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Conceptos de gestión',
      title: 'Eficacia, eficiencia y efectividad',
      cards: [
        { title: 'Administración y gestión', tag: 'Definiciones', kind: 'key', items: [
          { t: 'Planificar, organizar, dirigir y controlar', d: 'Proceso administrativo (Fayol)',
            say: 'La administración es el proceso de planificar, organizar, dirigir y controlar los recursos de una organización para lograr sus objetivos. Eso lo describió Fayol. La gestión es su aplicación práctica, para obtener resultados.' },
          { t: 'Niveles: estratégico, táctico y operativo', d: 'Alta dirección, jefaturas intermedias, ejecución',
            say: 'Hay tres niveles: el estratégico, que es la alta dirección y fija metas y políticas; el táctico, de las jefaturas intermedias; y el operativo, que es la ejecución diaria.' },
        ] },
        { title: 'Tres criterios de evaluación', tag: 'Se confunden', kind: 'alert', items: [
          { t: 'Eficacia: se cumple el objetivo', d: 'Resultado frente a lo propuesto',
            say: 'La gestión se evalúa con tres criterios que se confunden. La eficacia es si se cumplió el objetivo.' },
          { t: 'Eficiencia: con el menor uso de recursos', d: 'Resultado por recurso',
            say: 'La eficiencia es si se logró con el menor uso de recursos.' },
          { t: 'Efectividad: en condiciones reales', d: 'No ideales',
            say: 'Y la efectividad es si se logró el objetivo en condiciones reales.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Establecimientos de salud',
      title: 'Recursos, costos y formas de pago',
      cards: [
        { title: 'Recursos y costos', tag: 'Lo básico', kind: 'criteria', items: [
          { t: 'Recursos humanos, físicos y financieros', d: 'Los tres que se administran',
            say: 'La administración de un establecimiento gestiona recursos humanos, físicos y financieros.' },
          { t: 'Costos fijos y variables', d: 'Sueldos y arriendo; insumos',
            say: 'Los costos fijos no cambian con la producción, como los sueldos y el arriendo. Los variables sí cambian, como los insumos. Y el presupuesto es el plan financiero anual.' },
        ] },
        { title: 'Formas de pago', tag: 'Dónde se usa cada una', kind: 'pharma', items: [
          { t: 'Per cápita en atención primaria', d: 'Por inscrito',
            say: 'En atención primaria se paga per cápita, es decir, por inscrito.' },
          { t: 'Por prestación y por GRD en hospitales', d: 'Grupos relacionados por el diagnóstico',
            say: 'En hospitales se usa el pago por prestación y los grupos relacionados por el diagnóstico, los GRD.' },
          { t: 'Autogestión en red (Ley 19.937)', d: 'Hospitales de mayor complejidad',
            say: 'Los hospitales de mayor complejidad son establecimientos de autogestión en red, con autonomía de gestión, según la ley diecinueve mil novecientos treinta y siete.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Indicadores hospitalarios',
      title: 'Cinco fórmulas que hay que saber calcular',
      head: ['Indicador', 'Fórmula', 'Qué mide'],
      rows: [
        { cells: ['Índice ocupacional', 'Días cama ocupados / días cama disponibles × 100', 'Uso de la capacidad instalada'],
          say: 'El índice ocupacional es los días cama ocupados, divididos por los días cama disponibles, por cien. Mide cuánto de la capacidad instalada se usa.' },
        { cells: ['Promedio de días de estada', 'Días de estada de los egresos / egresos', 'Duración media de la hospitalización'],
          say: 'El promedio de días de estada es los días de estada de los egresos, divididos por el número de egresos. Mide cuánto dura en promedio una hospitalización.' },
        { cells: ['Rotación o giro de camas', 'Egresos / camas disponibles', 'Pacientes por cama en el período'],
          say: 'La rotación o giro de camas es los egresos, divididos por el número promedio de camas disponibles. Dice cuántos pacientes usaron cada cama.' },
        { cells: ['Letalidad hospitalaria', 'Fallecidos / egresos × 100', 'Resultado y gravedad de los casos'],
          say: 'La letalidad hospitalaria es los fallecidos divididos por los egresos, por cien.' },
        { cells: ['Porcentaje de cesáreas', 'Cesáreas / partos totales × 100', 'Perfil obstétrico'],
          say: 'Y el porcentaje de cesáreas es las cesáreas divididas por los partos totales, por cien. Fíjate en los denominadores: casi todos los errores del examen vienen de cambiarlos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Planificación',
      title: 'Qué se quiere lograr y desde dónde',
      cards: [
        { title: 'Tipos y base', tag: 'Plan estratégico', kind: 'key', items: [
          { t: 'Normativa o estratégica y situacional', d: 'Matus: considera actores y contexto cambiante',
            say: 'La planificación define a dónde se quiere llegar y cómo, a partir de un diagnóstico. La normativa supone que un técnico define lo que debe hacerse en un entorno estable. La estratégica y situacional, de Matus, considera a los actores y un contexto que cambia.' },
          { t: 'Misión, visión y FODA', d: 'Para qué existe, qué quiere ser, fortalezas y debilidades',
            say: 'El plan estratégico parte de la misión, que es para qué existe la organización, y la visión, que es qué quiere ser. Y del análisis FODA: fortalezas, oportunidades, debilidades y amenazas.' },
          { t: 'Política → plan → programa → proyecto → actividad', d: 'La jerarquía',
            say: 'Todo se ordena en una jerarquía: política, plan, programa, proyecto y actividad.' },
        ] },
        { title: 'Planificación y programación', tag: 'Se preguntan juntas', kind: 'alert', items: [
          { t: 'Planificación: estrategia, largo plazo', d: 'Qué y cómo',
            say: 'La planificación es la estrategia global y de largo plazo.' },
          { t: 'Programación: actividades concretas', d: 'Con recursos, en el corto plazo',
            say: 'La programación traduce ese plan en actividades concretas, con sus recursos, en el corto plazo, anual o mensual. La diferencia entre las dos se pregunta.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Etapas',
      title: 'De un diagnóstico a una evaluación',
      nodes: [
        { id: 'd', col: 0, row: 0, k: 'start', t: 'Diagnóstico', s: 'Y prioridades' },
        { id: 'o', col: 1, row: 1, k: 'mech', t: 'Objetivos y metas', s: 'Qué, cuánto y para cuándo' },
        { id: 'e', col: 2, row: 2, k: 'mech', t: 'Estrategias y actividades', s: 'Recursos asignados' },
        { id: 'p', col: 3, row: 3, k: 'effect', t: 'Programación', s: 'Concentración y rendimiento' },
        { id: 'j', col: 4, row: 4, k: 'good', t: 'Ejecución y evaluación', s: 'Retroalimenta el plan' },
      ],
      edges: [
        { from: 'd', to: 'o' }, { from: 'o', to: 'e' }, { from: 'e', to: 'p' }, { from: 'p', to: 'j' },
      ],
      steps: [
        { show: ['d'], note: 'Partir del problema',
          say: 'Las etapas de la planificación son siete. Se parte con el diagnóstico y se determinan las prioridades.' },
        { show: ['o'], note: 'Objetivo y meta',
          say: 'Luego se fijan los objetivos y las metas. El objetivo es qué se quiere lograr. La meta es cuánto y para cuándo, y debe ser específica, medible, alcanzable, relevante y con plazo.' },
        { show: ['e', 'p'], note: 'Estrategias y programación',
          say: 'Después vienen las estrategias, las actividades y la asignación de recursos. La programación calcula la concentración, que es el número de actividades por persona, y el rendimiento, que son las actividades por hora del recurso. Todo se ordena en una carta Gantt.' },
        { show: ['j'], note: 'Ejecutar y evaluar',
          say: 'Y al final se ejecuta y se evalúa. La evaluación retroalimenta la planificación, y el ciclo vuelve a empezar.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Programas',
      title: 'Cómo se formula un programa de salud',
      cards: [
        { title: 'Estructura', tag: 'Ocho componentes', kind: 'criteria', items: [
          { t: 'Diagnóstico, población objetivo, objetivos y metas', d: 'Con plazo y cuantificadas',
            say: 'Un programa de salud se formula con una estructura fija. Primero el diagnóstico y la justificación, que dicen cuál es el problema y qué tan grande es. Luego la población objetivo, que son a quiénes va dirigido, los objetivos general y específicos, y las metas cuantificadas con plazo.' },
          { t: 'Actividades, recursos, organización y evaluación', d: 'Con indicadores y medios de verificación',
            say: 'Después las actividades y su programación, los recursos humanos, físicos y financieros, la organización con sus responsables, y la evaluación con indicadores y medios de verificación.' },
        ] },
        { title: 'Tipos de indicador', tag: 'Qué se mide', kind: 'key', items: [
          { t: 'Estructura: los recursos', d: 'Personal, equipos, presupuesto',
            say: 'Los indicadores se clasifican en tres tipos. Los de estructura miden los recursos.' },
          { t: 'Proceso: actividades y cobertura', d: 'Lo que se hizo',
            say: 'Los de proceso miden las actividades realizadas y la cobertura.' },
          { t: 'Resultado: el efecto en salud', d: 'Lo que cambió en la población',
            say: 'Y los de resultado miden el efecto en salud, es decir, qué cambió en la población.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Marco lógico',
      title: 'Fin, propósito, componentes y actividades',
      nodes: [
        { id: 'a', col: 0, row: 4, k: 'start', t: 'Actividades', s: 'Lo que se hace' },
        { id: 'c', col: 1, row: 3, k: 'mech', t: 'Componentes', s: 'Productos o servicios entregados' },
        { id: 'p', col: 2, row: 2, k: 'effect', t: 'Propósito', s: 'Cambio en la población objetivo' },
        { id: 'f', col: 3, row: 1, k: 'good', t: 'Fin', s: 'Impacto de largo plazo' },
        { id: 's', col: 4, row: 0, k: 'q', t: 'Supuestos', s: 'Condiciones externas necesarias' },
      ],
      edges: [
        { from: 'a', to: 'c' }, { from: 'c', to: 'p' }, { from: 'p', to: 'f' }, { from: 'f', to: 's' },
      ],
      steps: [
        { show: ['a', 'c'], note: 'De la acción al producto',
          say: 'El marco lógico ordena el programa en cuatro niveles. Abajo están las actividades, lo que se hace. Esas actividades producen los componentes, que son los productos o servicios que se entregan.' },
        { show: ['p', 'f'], note: 'Del producto al cambio',
          say: 'El propósito es el cambio que se logra en la población objetivo. Y el fin es el impacto de largo plazo al que el programa contribuye.' },
        { show: ['s'], note: 'Indicadores, verificación y supuestos',
          say: 'Para cada nivel se definen indicadores, medios de verificación y supuestos, que son las condiciones externas que tienen que cumplirse para que el programa funcione.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Organización',
      title: 'Quién hace qué y ante quién responde',
      cards: [
        { title: 'Principios', tag: 'Se preguntan', kind: 'key', items: [
          { t: 'División del trabajo y jerarquía', d: 'Especialización; cadena de mando',
            say: 'La organización agrupa las actividades, define quién hace qué y establece las relaciones de autoridad. Sus principios son la división del trabajo, que permite la especialización, y la jerarquía, que es la cadena de mando.' },
          { t: 'Unidad de mando', d: 'Cada persona responde ante un solo jefe',
            say: 'La unidad de mando dice que cada persona responde ante un solo jefe.' },
          { t: 'Tramo de control', d: 'Cuántos subordinados supervisa un jefe',
            say: 'El tramo de control es cuántos subordinados puede supervisar un jefe.' },
          { t: 'Autoridad y responsabilidad proporcionales', d: 'Delegación y coordinación',
            say: 'La autoridad y la responsabilidad deben ser proporcionales, y se complementan con la delegación y la coordinación.' },
        ] },
        { title: 'Estructura', tag: 'Características', kind: 'criteria', items: [
          { t: 'Complejidad, formalización, centralización', d: 'Y departamentalización',
            say: 'Las características estructurales son la complejidad, que es el número de niveles y unidades, la formalización, que son las normas escritas, y la centralización o descentralización de las decisiones. A eso se suma la departamentalización, por función, producto, territorio o proceso.' },
          { t: 'Organigrama: la estructura formal', d: 'La informal surge de las relaciones personales',
            say: 'La estructura formal se representa en el organigrama. La informal surge de las relaciones personales. Los tipos son lineal, funcional, matricial y por procesos.' },
          { t: 'MINSAL conduce; Servicios articulan la red', d: 'APS municipal o del Servicio',
            say: 'En la red chilena, el Ministerio de Salud conduce, los Servicios de Salud articulan la red de su territorio, y la atención primaria es municipal o depende del Servicio.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Dirección',
      title: 'Liderazgo, comunicación y coordinación',
      cards: [
        { title: 'Liderazgo', tag: 'Estilos', kind: 'key', items: [
          { t: 'Autocrático, democrático, laissez-faire', d: 'El jefe decide, consulta o deja hacer',
            say: 'La dirección pone en acción a las personas: toma decisiones, motiva, lidera, comunica y coordina. Los estilos de liderazgo son tres. El autocrático, en que el jefe decide solo. El democrático o participativo, que consulta al equipo. Y el laissez-faire, que deja hacer.' },
          { t: 'Transaccional, transformacional, situacional', d: 'Metas y recompensas; inspira; adapta el estilo',
            say: 'El liderazgo puede ser transaccional, un intercambio de metas y recompensas, o transformacional, que inspira y desarrolla al equipo. El situacional adapta el estilo a la madurez del equipo.' },
        ] },
        { title: 'Comunicación y coordinación', tag: 'Cómo fluye', kind: 'criteria', items: [
          { t: 'Formal o informal', d: 'Descendente, ascendente, horizontal',
            say: 'La comunicación puede ser formal, por canales oficiales, o informal. Y fluye hacia abajo, con instrucciones, hacia arriba, con retroalimentación, o entre pares.' },
          { t: 'Coordinación: referencia y contrarreferencia', d: 'Entre niveles de atención',
            say: 'La coordinación sincroniza las tareas de las unidades. En la red asistencial se concreta en la referencia y la contrarreferencia entre niveles de atención.' },
          { t: 'Maslow y Herzberg', d: 'Jerarquía de necesidades; factores higiénicos y motivadores',
            say: 'Y la motivación se explica, entre otras, por Maslow y su jerarquía de necesidades, y por Herzberg y sus factores higiénicos y motivadores. El trabajo en equipo y el manejo constructivo de los conflictos son competencias del médico general.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Resumen',
      title: 'Las funciones del proceso administrativo',
      head: ['Función', 'Pregunta que responde', 'Herramientas', 'Ejemplo en un CESFAM'],
      rows: [
        { cells: ['Planificación', '¿Qué haremos y cómo?', 'Diagnóstico, FODA, objetivos, metas', 'Plan anual para subir el control de hipertensos'],
          say: 'La planificación responde qué haremos y cómo. Sus herramientas son el diagnóstico, el FODA y las metas. En un CESFAM, el plan anual para subir la cobertura de control de hipertensos.' },
        { cells: ['Programación', '¿Cuántas actividades y con qué recursos?', 'Concentración, rendimiento, Gantt', 'Horas médicas y de enfermería para 600 hipertensos'],
          say: 'La programación responde cuántas actividades y con qué recursos: concentración, rendimiento y carta Gantt. Por ejemplo, las horas médicas y de enfermería para seiscientos hipertensos.' },
        { cells: ['Organización', '¿Quién hace qué?', 'Organigrama, tramo de control', 'Equipos de cabecera por sector'],
          say: 'La organización responde quién hace qué, con el organigrama y el tramo de control. Equipos de cabecera por sector, con un jefe.' },
        { cells: ['Dirección', '¿Cómo se pone en marcha al equipo?', 'Liderazgo, motivación, comunicación', 'Reuniones y retroalimentación'],
          say: 'La dirección responde cómo se pone en marcha al equipo, con liderazgo, motivación y comunicación. Reuniones de equipo y retroalimentación.' },
        { cells: ['Evaluación y control', '¿Se logró lo planificado?', 'Indicadores de estructura, proceso y resultado', '% de hipertensos compensados'],
          say: 'Y la evaluación y control responde si se logró lo planificado, con indicadores de estructura, proceso y resultado. Por ejemplo, el porcentaje de hipertensos compensados.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la pirámide de población a las medidas de salud pública.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Usted es el director de un CESFAM con 20.000 inscritos y debe elaborar el programa anual para mejorar el control de los hipertensos. Un hospital de la red informa que durante el año tuvo 5.000 egresos, 30.000 días cama ocupados y 100 camas disponibles todo el año (36.500 días cama disponibles).',
      question: '¿Cuáles son el índice ocupacional, el promedio de días de estada y el giro de camas del hospital, respectivamente?',
      options: [
        { letter: 'A', text: '82%, 6 días y 50 egresos por cama' },
        { letter: 'B', text: '82%, 6 días y 500 egresos por cama' },
        { letter: 'C', text: '18%, 6 días y 50 egresos por cama' },
        { letter: 'D', text: '82%, 0,17 días y 50 egresos por cama' },
        { letter: 'E', text: '60%, 6 días y 5 egresos por cama' },
      ],
      correct: 'A',
      explanation: 'Índice ocupacional = días cama ocupados / días cama disponibles × 100 = 30.000 / 36.500 × 100 = 82%. Promedio de días de estada = días de estada de los egresos / egresos = 30.000 / 5.000 = 6 días. Giro de camas = egresos / camas disponibles = 5.000 / 100 = 50 egresos por cama. Un uso alto pero razonable de las camas, con una estada media de 6 días. Para el programa de hipertensos se parte del diagnóstico, se fijan objetivos y metas medibles con plazo, se programa con concentración y rendimiento, se organizan equipos de cabecera, se dirige al equipo y se evalúa con indicadores de proceso y resultado.',
      say: {
        stem: 'Eres el director de un CESFAM con veinte mil inscritos y preparas el programa anual de hipertensión. Un hospital de la red informa, para el año, cinco mil egresos, treinta mil días cama ocupados, y cien camas disponibles todo el año, es decir, treinta y seis mil quinientos días cama disponibles.',
        question: '¿Cuáles son el índice ocupacional, el promedio de días de estada y el giro de camas del hospital?',
        options: 'Las opciones: ochenta y dos por ciento, seis días y cincuenta egresos por cama; ochenta y dos, seis días y quinientos egresos; dieciocho, seis y cincuenta; ochenta y dos, cero coma diecisiete días y cincuenta; o sesenta, seis y cinco. Piénsalo.',
        answer: 'Es la A. El índice ocupacional es treinta mil dividido por treinta y seis mil quinientos, por cien: ochenta y dos por ciento. La estada media es treinta mil dividido por cinco mil: seis días. Y el giro de camas es cinco mil egresos dividido por cien camas: cincuenta. La D y la B tientan porque cambian el denominador. Y para el programa de hipertensos, el orden es diagnóstico, objetivos y metas, programación, organización, dirección y evaluación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 7',
      stem: 'Se tiene una población con pirámide poblacional de base ancha y vértice angosto.',
      question: '¿En qué tipo de medidas debe enfocarse la salud pública?',
      options: [
        { letter: 'A', text: 'Manejo de enfermedades crónicas y oncológicas' },
        { letter: 'B', text: 'Planificación familiar, saneamiento básico y vacunación' },
        { letter: 'C', text: 'Rehabilitación y cuidados paliativos' },
        { letter: 'D', text: 'Prevención cardiovascular en adultos mayores' },
        { letter: 'E', text: 'Tamizaje de cáncer en adultos' },
      ],
      correct: 'B',
      explanation: 'Base ancha y vértice angosto es una pirámide expansiva: población joven, con natalidad y mortalidad altas, en la que pesan las enfermedades infecciosas y la desnutrición. Las medidas son planificación familiar, saneamiento básico y vacunación. Las enfermedades crónicas, el cáncer y el envejecimiento son propios de las pirámides constrictivas.',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Una población tiene una pirámide de base ancha y vértice angosto.',
        question: '¿En qué tipo de medidas debe enfocarse la salud pública?',
        options: 'Las opciones: enfermedades crónicas y oncológicas; planificación familiar, saneamiento básico y vacunación; rehabilitación y cuidados paliativos; prevención cardiovascular en adultos mayores; o tamizaje de cáncer en adultos. Piénsalo.',
        answer: 'Es la B. Base ancha y vértice angosto es una pirámide expansiva: población joven, con natalidad alta y todavía muchas infecciones y desnutrición. Toca planificación familiar, saneamiento básico y vacunación. Las otras cuatro opciones son medidas de una población que envejece, como la de Chile, y esa es la trampa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 13',
      stem: 'Una localidad de la zona norte del país experimenta un aumento significativo de migrantes debido a un programa de incentivos laborales y subsidios económicos, el cual exige una permanencia mínima de 5 años y atrae principalmente a parejas jóvenes y niños.',
      question: '¿Cuál de los siguientes cambios demográficos es esperable?',
      options: [
        { letter: 'A', text: 'Aumento de la expectativa de vida de la población' },
        { letter: 'B', text: 'Aumento de la tasa bruta de mortalidad' },
        { letter: 'C', text: 'Aumento de la tasa bruta de natalidad' },
        { letter: 'D', text: 'Aumento de la tasa de mortalidad infantil' },
        { letter: 'E', text: 'Aumento de la prevalencia de cánceres ginecológicos' },
      ],
      correct: 'C',
      explanation: 'Llegan parejas jóvenes, en edad fértil: aumenta la natalidad. La esperanza de vida y la mortalidad infantil dependen de las condiciones generales del lugar, no de la edad de quienes migran.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Una localidad del norte recibe muchos migrantes por un programa de incentivos laborales y subsidios, con permanencia mínima de cinco años. Llegan sobre todo parejas jóvenes y niños.',
        question: '¿Cuál de los siguientes cambios demográficos es esperable?',
        options: 'Las opciones: aumento de la esperanza de vida; de la tasa bruta de mortalidad; de la tasa bruta de natalidad; de la mortalidad infantil; o de los cánceres ginecológicos. Piénsalo.',
        answer: 'Es la C. Llegan personas jóvenes y en edad fértil, así que sube la natalidad, y con ella la necesidad de atención materno infantil. La esperanza de vida y la mortalidad infantil no dependen de la edad de los migrantes, sino de las condiciones generales del lugar. Ese es el criterio para descartar la A y la D.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 117',
      stem: 'Un gráfico muestra la distribución de causas de muerte en Chile: las enfermedades cardiovasculares y el cáncer representan el 60% de las muertes, mientras las enfermedades infecciosas son <5%.',
      question: '¿A qué concepto corresponde este patrón?',
      options: [
        { letter: 'A', text: 'Transición epidemiológica' },
        { letter: 'B', text: 'Transición demográfica' },
        { letter: 'C', text: 'Transición nutricional' },
        { letter: 'D', text: 'Envejecimiento poblacional' },
        { letter: 'E', text: 'Brecha epidemiológica' },
      ],
      correct: 'A',
      explanation: 'Transición epidemiológica: cambio en el patrón de mortalidad desde las enfermedades infecciosas hacia las crónicas no transmisibles, como las cardiovasculares y el cáncer. Se asocia al desarrollo económico y al envejecimiento. La transición demográfica se refiere a la natalidad y la mortalidad.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un gráfico muestra las causas de muerte en Chile: las enfermedades cardiovasculares y el cáncer son sesenta por ciento de las muertes, y las infecciosas son menos de cinco por ciento.',
        question: '¿A qué concepto corresponde este patrón?',
        options: 'Las opciones: transición epidemiológica; transición demográfica; transición nutricional; envejecimiento poblacional; o brecha epidemiológica. Piénsalo.',
        answer: 'Es la A. El patrón de muertes pasó de infecciosas a crónicas y cáncer: es la transición epidemiológica de Omran. La B tienta, porque van juntas, pero la transición demográfica habla de natalidad y mortalidad, y la pregunta habla de causas de muerte.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 4',
      stem: 'En la gestión de salud se distinguen distintos niveles de planificación de las acciones.',
      question: 'En gestión de salud, ¿cuál es la diferencia entre planificación y programación?',
      options: [
        { letter: 'A', text: 'La planificación se refiere a objetivos y recursos específicos, mientras que la programación es global' },
        { letter: 'B', text: 'La planificación es a largo plazo, mientras que la programación es anual' },
        { letter: 'C', text: 'La programación, a diferencia de la planificación, debe ser concordante con la misión y la visión de la institución' },
        { letter: 'D', text: 'La planificación se basa en lo determinado con la programación' },
        { letter: 'E', text: 'La planificación se relaciona a los costes y recursos de actividades concretas y la programación se relaciona con el presupuesto general del proyecto' },
      ],
      correct: 'B',
      explanation: 'La planificación es la estrategia global de largo plazo de la institución; la programación se basa en ella y fija las actividades y los recursos necesarios en el corto plazo, generalmente anual. Las demás alternativas invierten los conceptos.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. En la gestión de salud se distinguen distintos niveles de planificación de las acciones.',
        question: 'En gestión de salud, ¿cuál es la diferencia entre planificación y programación?',
        options: 'Las opciones: la planificación es de objetivos específicos y la programación global; la planificación es de largo plazo y la programación anual; la programación debe ser concordante con la misión y la visión; la planificación se basa en la programación; o la planificación se relaciona con los costos de actividades concretas. Piénsalo.',
        answer: 'Es la B. La planificación es la estrategia global, de largo plazo. La programación toma ese plan y lo baja a actividades concretas y recursos, en el corto plazo, que suele ser anual. La A, la D y la E son los conceptos al revés. Y la C tienta, pero la misión y la visión son la base de la planificación estratégica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'En la formulación de un programa de salud se redactan los objetivos y las metas.',
      question: '¿Cuál es la diferencia correcta entre objetivo y meta?',
      options: [
        { letter: 'A', text: 'El objetivo es cuantificado y con plazo; la meta es cualitativa' },
        { letter: 'B', text: 'El objetivo expresa lo que se quiere lograr; la meta lo cuantifica en cantidad y tiempo' },
        { letter: 'C', text: 'Ambos términos son sinónimos' },
        { letter: 'D', text: 'La meta describe las actividades y el objetivo, los recursos' },
        { letter: 'E', text: 'La meta corresponde al fin del marco lógico' },
      ],
      correct: 'B',
      explanation: 'El objetivo describe el cambio que se quiere lograr; la meta establece cuánto y para cuándo, de modo que sea medible. Las otras alternativas invierten los conceptos, los confunden con las actividades y los recursos, o con el fin del marco lógico, que es el nivel más alto.',
      say: {
        stem: 'Una pregunta representativa del banco EUNACOM. En la formulación de un programa de salud se redactan objetivos y metas.',
        question: '¿Cuál es la diferencia correcta entre objetivo y meta?',
        options: 'Las opciones: el objetivo es cuantificado y la meta cualitativa; el objetivo expresa lo que se quiere lograr y la meta lo cuantifica en cantidad y tiempo; son sinónimos; la meta describe las actividades; o la meta es el fin del marco lógico. Piénsalo.',
        answer: 'Es la B. El objetivo es qué se quiere lograr. La meta es cuánto y para cuándo, y por eso es medible. La A está al revés, y la E mezcla la meta con el fin del marco lógico, que es el impacto de largo plazo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: gestión y administración en salud',
      cards: [
        { title: 'Población', tag: 'Demografía', kind: 'key', items: [
          { t: 'Base ancha: infecciosas y materno-infantil', d: 'Base angosta: crónicas y envejecimiento',
            say: 'Cerremos con las reglas de oro. La pirámide de base ancha pide planificación familiar, saneamiento y vacunación. La de base angosta, como la de Chile, pide atender enfermedades crónicas, dependencia y cuidados del adulto mayor.' },
          { t: 'Transición demográfica y epidemiológica', d: 'Natalidad y mortalidad; causas de muerte',
            say: 'La transición demográfica es de natalidad y mortalidad. La epidemiológica es de causas de muerte.' },
        ] },
        { title: 'El ciclo de la gestión', tag: 'Planificar, organizar, dirigir, evaluar', kind: 'alert', items: [
          { t: 'Objetivo: qué; meta: cuánto y para cuándo', d: 'Planificación: largo plazo; programación: actividades',
            say: 'El objetivo es qué se quiere lograr y la meta es cuánto y para cuándo. La planificación es estrategia de largo plazo, y la programación son las actividades concretas.' },
          { t: 'Marco lógico: fin, propósito, componentes, actividades', d: 'Con indicadores, verificación y supuestos',
            say: 'El marco lógico tiene fin, propósito, componentes y actividades, con indicadores, medios de verificación y supuestos.' },
          { t: 'Índice ocupacional y estada: cuidar el denominador', d: 'Camas, egresos y días cama',
            say: 'Y en los indicadores hospitalarios, el error está en el denominador: días cama disponibles para el índice ocupacional, egresos para la estada, camas para el giro. Si te llevas una sola idea de hoy: antes de calcular un indicador, nombra su denominador. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'De la pirámide de población a las medidas de salud pública',
    root: N('start', 'Pirámide de población', 'Mirar la base y la cima',
      'Te muestran la pirámide de una población y te preguntan en qué debe enfocarse la salud pública. Miras la forma de la base y de la cima.',
      ['Base ancha, cima estrecha', N('q', 'Expansiva: población joven', 'Natalidad y mortalidad altas',
        'Si la base es ancha y la cima estrecha, es una pirámide expansiva: una población joven, con natalidad y mortalidad altas.',
        ['Qué priorizar', N('do', 'Materno-infantil, saneamiento y vacunación', 'Planificación familiar y nutrición',
          'Priorizas planificación familiar, saneamiento básico, vacunación y la atención materno infantil, porque pesan las infecciones y la desnutrición.')],
      )],
      ['Forma de campana', N('ok', 'Estacionaria', 'Natalidad en descenso',
        'Si tiene forma de campana, es una pirámide estacionaria: la natalidad va en descenso, la mortalidad es baja y el crecimiento es lento. Es una fase de transición entre las otras dos.')],
      ['Base angosta, cuerpo ancho', N('q', 'Constrictiva: población que envejece', 'Natalidad muy baja; Chile',
        'Si la base es angosta y el cuerpo ancho, es una pirámide constrictiva: la natalidad es muy baja y la población envejece. Es la que se parece a Chile.',
        ['Qué priorizar', N('do', 'Crónicas, dependencia y adulto mayor', 'Transición epidemiológica',
          'Priorizas las enfermedades crónicas no transmisibles, el cáncer, la dependencia y los cuidados del adulto mayor, porque con la transición epidemiológica las infecciosas ceden terreno.')],
      )],
      ['Llegan migrantes jóvenes', N('alert', 'Sube la natalidad', 'Atención materno-infantil',
        'Y si llegan migrantes jóvenes y en edad fértil, la natalidad sube, y hay que reforzar la atención materno infantil.')],
    ),
  },
};
