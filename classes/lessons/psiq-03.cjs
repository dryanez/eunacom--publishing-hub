// Clase 17.3 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-03). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// El código de la clase (1.09.2.001) no tiene preguntas reales propias, y el banco real casi no tiene preguntas de manejo del riesgo suicida (las que mencionan "suicida" suelen decir "sin ideación suicida" y evalúan otro diagnóstico).
// Real usada: Agosto 2021 P87 (sobredosis de amitriptilina en un intento: electrocardiograma). Es la de mayor confianza entre las dos de tricíclicos; Julio 2017 P174 enseña lo mismo y no se usó.
// No usadas: Julio 2015 P71 (depresión psicótica de adulta mayor con intentos previos; se usa en psiq-01), Diciembre 2025 P76 y Diciembre 2018 P39 (voces que ordenan suicidarse, pero evalúan el diagnóstico de esquizofrenia),
//   preguntas de trastorno límite de la personalidad (Diciembre 2018 P132, Julio 2015 P79, Julio 2024 P98; evalúan solo el diagnóstico).
// Sin pregunta real sobre preguntar por suicidio, clozapina ni alta tras un intento: tres preguntas del libro como "Caso representativo" (con retoques de lenguaje no estigmatizante).
// La pregunta del libro sobre hospitalización inmediata (hombre con soga y carta) se cubre con el caso clínico de la clase.
// Imágenes: ninguna (psiquiatría; no hay figura clínica útil en los libros extraídos).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-03',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Evaluación y manejo del riesgo suicida: factores de riesgo e indicación de hospitalización',
      say: 'Bienvenido. Hoy vemos la evaluación del riesgo suicida, una competencia que todo médico general tiene que tener. El suicidio es una causa importante de muerte prematura, y casi siempre ocurre en el contexto de una enfermedad mental tratable. Vamos a ver quién tiene más riesgo, cómo se pregunta, cuándo hospitalizar, y qué errores no se pueden cometer en urgencias.',
    },

    {
      type: 'points',
      kicker: 'Epidemiología',
      title: 'Quién intenta y quién fallece',
      cards: [
        { title: 'Magnitud', tag: 'Chile', kind: 'key', items: [
          { t: 'Cerca de 10 por 100.000', d: 'Mortalidad por suicidio',
            say: 'En Chile, la mortalidad por suicidio ronda diez por cada cien mil habitantes, y es una de las principales causas de muerte prematura en jóvenes y adultos.' },
          { t: 'Casi siempre hay una enfermedad', d: 'Depresión, bipolar, psicosis, sustancias',
            say: 'Se da en el contexto de depresión mayor, trastorno bipolar, esquizofrenia, abuso de sustancias o trastorno de personalidad límite. Es decir, de cuadros que se pueden tratar.' },
        ] },
        { title: 'Diferencia por sexo', tag: 'Paradoja', kind: 'alert', items: [
          { t: 'Mujeres: más intentos', d: '3 a 4 veces más',
            say: 'Las mujeres hacen tres a cuatro veces más intentos de suicidio.' },
          { t: 'Hombres: más suicidios consumados', d: '4 a 5 veces más',
            say: 'Pero los hombres consuman el suicidio cuatro a cinco veces más, porque eligen métodos más letales, como el ahorcamiento, las armas de fuego o la precipitación desde altura.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Factores de riesgo',
      title: 'Quién tiene más riesgo',
      cards: [
        { title: 'El más potente', tag: 'Número uno', kind: 'alert', items: [
          { t: 'Intento suicida previo', d: 'Riesgo 30 a 40 veces mayor',
            say: 'El predictor aislado más potente de suicidio consumado es el antecedente de un intento previo. Multiplica el riesgo entre treinta y cuarenta veces. Si lo ves en la ficha, es la primera alarma.' },
        ] },
        { title: 'Otros factores mayores', tag: 'Perfil', kind: 'key', items: [
          { t: 'Sexo masculino; edad extrema', d: 'Mayores de 65 o de 15 a 24 años',
            say: 'Sexo masculino, edad avanzada, sobre sesenta y cinco años, o adolescencia y adulto joven, de quince a veinticuatro.' },
          { t: 'Vivir solo, viudez, cesantía', d: 'Aislamiento, quiebra económica',
            say: 'Vivir solo, la viudez o un divorcio reciente, el aislamiento, la cesantía o la quiebra económica.' },
          { t: 'Depresión, bipolar, psicosis, alcohol', d: 'Más desesperanza e insomnio',
            say: 'Depresión mayor, sobre todo con insomnio severo, anhedonia y desesperanza, trastorno bipolar, esquizofrenia, trastorno límite de personalidad, y abuso de alcohol o drogas, que desinhibe y aumenta la impulsividad.' },
          { t: 'Enfermedad crónica dolorosa', d: 'Cáncer, dolor refractario, insuficiencia renal',
            say: 'Y una enfermedad médica crónica, dolorosa o invalidante, como cáncer, dolor neuropático refractario o insuficiencia renal terminal.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Riesgo, alarma y protección',
      title: 'Qué sube y qué baja el riesgo',
      head: ['Categoría', 'Alto riesgo', 'Señales de alarma', 'Protectores'],
      rows: [
        { cells: ['Social', 'Hombre, viudo, cesante, aislado', 'Regala pertenencias, carta de despedida', 'Hijos a cargo, red amplia, empleo'],
          say: 'En lo social, el hombre solo, viudo o cesante tiene más riesgo. Son señales de alarma regalar sus cosas queridas, cerrar cuentas o dejar cartas de despedida. Protegen los hijos pequeños a cargo, una red de apoyo extensa y un empleo estable.' },
        { cells: ['Clínica', 'Intento previo, melancolía, adicciones', 'Desesperanza extrema, calma repentina', 'Adherencia, alianza terapéutica'],
          say: 'En lo clínico, el intento previo, la depresión melancólica, el trastorno bipolar y las adicciones. Ojo con la calma repentina después de una crisis: puede significar que ya decidió. Protege la buena adherencia al tratamiento.' },
        { cells: ['Psicopatológica', 'Impulsividad, delirios de culpa, voces de comando', 'Dice el método y lo tiene a mano', 'Creencias contrarias, proyectos'],
          say: 'En lo psicopatológico, la impulsividad, la agitación, los delirios de culpa o ruina y las alucinaciones que ordenan hacerse daño. La señal inminente es que el paciente declare un método y tenga acceso a él. Protegen las creencias firmes contrarias al suicidio y los proyectos a futuro.' },
        { cells: ['Médica', 'Dolor intratable, cáncer, VIH, ELA', 'Intoxicación aguda con alcohol', 'Resolución de problemas'],
          say: 'En lo médico, el dolor intratable, el cáncer terminal o un diagnóstico reciente grave. Y la intoxicación aguda con alcohol baja las barreras. Protege la capacidad de resolver problemas.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Entrevista',
      title: 'Cómo se pregunta, paso a paso',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'start', t: 'Ideación pasiva', s: '¿Ha deseado no despertar?' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'Ideación activa', s: '¿Ha pensado en quitarse la vida?' },
        { id: 'c', col: 2, row: 1, k: 'effect', t: 'Planificación', s: '¿Ha pensado cómo lo haría?' },
        { id: 'd', col: 3, row: 1, k: 'risk', t: 'Acceso al método', s: 'Pastillas, armas, soga' },
        { id: 'e', col: 4, row: 1, k: 'alert', t: 'Actos preparatorios', s: 'Cartas, regalos, testamento' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'De lo pasivo a lo activo',
          say: 'La entrevista se hace escalonada, con preguntas directas y empáticas. Se parte por la ideación pasiva, como desear no despertar. Después se pregunta por ideación activa: si ha pensado en quitarse la vida.' },
        { show: ['c', 'd'], note: 'Plan y método',
          say: 'Luego se pregunta por planificación, cómo lo haría, y por disponibilidad del método: si tiene acceso a pastillas, armas o sogas. Cuanto más concreto el plan y más cercano el método, más riesgo.' },
        { show: ['e'], note: 'Lo que ya hizo',
          say: 'Y por último, los actos preparatorios: dejar cartas de despedida, regalar pertenencias, ordenar un testamento. Si ya ocurrieron, el riesgo es inminente.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Mitos',
      title: 'Tres mitos que el examen desarma',
      cards: [
        { title: 'Falso', tag: 'Mitos', kind: 'alert', items: [
          { t: 'Preguntar induce el suicidio', d: 'Falso: alivia y permite intervenir',
            say: 'Mito uno: preguntar por suicidio puede dar la idea. Falso. Preguntar de forma empática y directa alivia la soledad del paciente, rompe el tabú y es la única forma de evaluar el riesgo.' },
          { t: 'Quien se quiere suicidar no lo dice', d: 'Falso: casi siempre da señales',
            say: 'Mito dos: el que se quiere suicidar no avisa. Falso. La mayoría de quienes consuman el suicidio dio señales verbales o conductuales en las semanas previas.' },
          { t: 'Si mejora rápido, el riesgo pasó', d: 'Falso: puede ser el momento de más riesgo',
            say: 'Mito tres: si el paciente mejora rápido, el riesgo pasó. Falso. Cuando la depresión empieza a ceder, el paciente puede recuperar la energía para ejecutar un plan que ya tenía. Una mejoría súbita o una calma repentina exige más cuidado, no menos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Escala SAD PERSONS',
      title: 'Diez puntos que orientan',
      cards: [
        { title: 'Primeros cinco', tag: 'Un punto cada uno', kind: 'criteria', items: [
          { t: 'Sexo masculino', d: 'Sex',
            say: 'La escala SAD PERSONS es una regla mnemotécnica, con un punto por cada parámetro. S de sexo masculino.' },
          { t: 'Menor de 19 o mayor de 45', d: 'Age',
            say: 'A de edad: menor de diecinueve o mayor de cuarenta y cinco.' },
          { t: 'Depresión mayor', d: 'Depression',
            say: 'D de depresión.' },
          { t: 'Intento previo', d: 'Previous attempt',
            say: 'P de intento previo.' },
          { t: 'Abuso de alcohol o drogas', d: 'Ethanol',
            say: 'E de abuso de alcohol o drogas.' },
        ] },
        { title: 'Últimos cinco', tag: 'Un punto cada uno', kind: 'criteria', items: [
          { t: 'Pérdida del juicio racional', d: 'Psicosis',
            say: 'R de pérdida del juicio de realidad, es decir, psicosis.' },
          { t: 'Sin red de apoyo', d: 'Social supports lacking',
            say: 'S de ausencia de red de apoyo.' },
          { t: 'Plan organizado', d: 'Organized plan',
            say: 'O de plan suicida organizado o método letal.' },
          { t: 'Soltero, viudo o divorciado', d: 'No spouse',
            say: 'N de no tener pareja: soltero, viudo o divorciado.' },
          { t: 'Enfermedad somática crónica', d: 'Sickness',
            say: 'Y la última S, de enfermedad somática crónica.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Escala SAD PERSONS',
      title: 'Puntaje y conducta',
      head: ['Puntaje', 'Riesgo', 'Conducta'],
      rows: [
        { cells: ['0 a 2', 'Leve', 'Ambulatorio con red; control en menos de 7 días'],
          say: 'De cero a dos puntos, riesgo leve: manejo ambulatorio si hay una red familiar que contiene, retiro de fármacos del alcance y control en menos de siete días.' },
        { cells: ['3 a 4', 'Moderado bajo', 'Ambulatorio intensivo; control en 48 a 72 horas'],
          say: 'De tres a cuatro, moderado: manejo ambulatorio intensivo, con medicamentos administrados por un familiar y control en cuarenta y ocho a setenta y dos horas.' },
        { cells: ['5 a 6', 'Moderado alto', 'Psiquiatría urgente; definir hospitalización'],
          say: 'De cinco a seis, moderado alto: evaluación urgente por psiquiatría y se define hospitalizar según la capacidad de contención de la familia.' },
        { cells: ['7 a 8', 'Alto', 'Hospitalización obligatoria; vigilancia 1 a 1'],
          say: 'De siete a ocho, riesgo alto: hospitalización psiquiátrica, con vigilancia continua uno a uno.' },
        { cells: ['9 a 10', 'Inminente', 'Ingreso inmediato, involuntario si hace falta'],
          say: 'Y de nueve a diez, riesgo inminente: ingreso inmediato, incluso involuntario si es necesario. Importante: la escala orienta, pero no reemplaza el juicio clínico. Si hay un criterio de hospitalización, se hospitaliza aunque el puntaje sea bajo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hospitalización',
      title: 'Cuándo hospitalizar de inmediato',
      cards: [
        { title: 'Por lo que hizo o planea', tag: 'Gravedad', kind: 'alert', items: [
          { t: 'Intento reciente de mediana o alta letalidad', d: 'Ahorcamiento, arma, intoxicación grave',
            say: 'La hospitalización psiquiátrica inmediata es obligatoria ante cualquiera de estos hallazgos. Uno: intento reciente de mediana o alta letalidad, como intoxicación grave, ahorcamiento frustrado, arma de fuego o precipitación.' },
          { t: 'Plan activo, estructurado y letal', d: 'Con intención inminente',
            say: 'Dos: plan suicida activo, estructurado y letal, con intención inminente.' },
          { t: 'Persiste la ideación tras la urgencia', d: '"Apenas salga, lo vuelvo a intentar"',
            say: 'Y seis: la ideación persiste después de la atención de urgencia, por ejemplo el paciente que dice que lo va a intentar apenas salga.' },
        ] },
        { title: 'Por su estado o su entorno', tag: 'Contexto', kind: 'key', items: [
          { t: 'Psicosis con voces de comando', d: 'Delirios de ruina o culpa',
            say: 'Tres: síntomas psicóticos, como delirios de ruina o de culpa, o alucinaciones que ordenan suicidarse.' },
          { t: 'Agitación con impulsividad y sustancias', d: 'Riesgo de actuar sin pensar',
            say: 'Cuatro: agitación psicomotora severa con impulsividad y consumo de sustancias.' },
          { t: 'Sin red que supervise las 24 horas', d: 'Nadie que lo cuide en casa',
            say: 'Y cinco: ausencia de una red familiar o social capaz de supervisar al paciente todo el día. Esa red es lo que cambia un manejo ambulatorio por una hospitalización.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia',
      title: 'Paciente tras un intento reciente',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'start', t: 'Llega tras un intento', s: 'Atención en urgencias' },
        { id: 'b', col: 1, row: 0, k: 'good', t: 'Tratar lo médico primero', s: 'Intoxicación, lesiones' },
        { id: 'c', col: 1, row: 2, k: 'alert', t: 'Vigilancia 1 a 1', s: 'Nunca solo, ni en el baño' },
        { id: 'd', col: 2, row: 1, k: 'mech', t: 'Retirar elementos', s: 'Cinturón, cordones, fármacos' },
        { id: 'e', col: 3, row: 1, k: 'q', t: 'Evaluación psiquiátrica', s: 'Antes de cualquier alta' },
        { id: 'f', col: 4, row: 1, k: 'trap', t: 'No dar el alta', s: 'Porque promete no repetirlo' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'a', to: 'c' }, { from: 'b', to: 'd' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' }, { from: 'e', to: 'f' },
      ],
      steps: [
        { show: ['a', 'b', 'c'], note: 'Estabilizar y vigilar',
          say: 'Un paciente que llega tras un intento reciente primero se estabiliza médicamente, por ejemplo la intoxicación, y desde el primer minuto tiene vigilancia visual continua, uno a uno. No se le deja solo en el box, y tampoco en el baño.' },
        { show: ['d', 'e'], note: 'Seguridad y especialista',
          say: 'Se retiran cinturones, cordones, vidrios y medicamentos. Y se asegura una evaluación por psiquiatría antes de cualquier alta: es una obligación ética y legal, no una opción.' },
        { show: ['f'], note: 'La promesa no basta',
          say: 'El error clásico es dar el alta porque el paciente dice que no lo volverá a hacer, o porque un acompañante pide llevárselo. Con un intento reciente o riesgo alto, no se da el alta sin evaluación especializada y sin red que contenga.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Qué reduce el riesgo',
      cards: [
        { title: 'Fármacos con evidencia', tag: 'Antisuicida', kind: 'pharma', items: [
          { t: 'Litio en bipolar y depresión recurrente', d: 'Reduce intentos y suicidios',
            say: 'El litio reduce los intentos y los suicidios consumados en el trastorno bipolar y en la depresión mayor recurrente, además de su efecto estabilizador.' },
          { t: 'Clozapina en esquizofrenia', d: 'Alto riesgo; también esquizoafectivo',
            say: 'La clozapina es el único antipsicótico con indicación aprobada para reducir la conducta suicida en esquizofrenia y trastorno esquizoafectivo de alto riesgo.' },
          { t: 'TEC en riesgo inminente', d: 'Depresión psicótica o rechazo alimentario',
            say: 'La terapia electroconvulsiva es la opción de rescate, de máxima rapidez, ante ideación suicida inminente con rechazo alimentario o depresión psicótica refractaria. La ketamina o esketamina se usan como terapia puente, solo en hospital.' },
        ] },
        { title: 'Seguridad y manejo', tag: 'Medidas', kind: 'key', items: [
          { t: 'Retirar medios letales', d: 'Fármacos, armas, objetos cortantes',
            say: 'Se retiran del domicilio los fármacos, con entrega administrada por terceros, las armas, los objetos cortantes y los venenos. Reducir el acceso al método salva vidas.' },
          { t: 'Tratar la enfermedad de base', d: 'Depresión, manía, insomnio, angustia',
            say: 'Se trata con energía la depresión o la manía de base, y también el insomnio y la angustia aguda.' },
          { t: 'No recetar cajas completas', d: 'Tricíclicos y benzodiacepinas',
            say: 'Y no se prescriben cajas completas de tricíclicos ni de benzodiacepinas a un paciente en riesgo, porque la sobredosis puede ser letal.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la ideación suicida a la decisión de hospitalizar.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Sospecha de ideas suicidas', 'Preguntar directo', 'Evitar el tema'],
          say: 'Si sospechas ideas suicidas, preguntas directo. Preguntar no induce el suicidio.' },
        { cells: ['Intento previo', 'Riesgo alto de entrada', 'Minimizarlo por antiguo'],
          say: 'El intento previo es el predictor más potente, aunque haya sido hace años.' },
        { cells: ['Plan, método y carta de despedida', 'Hospitalizar, vigilar 1 a 1', 'Alta con familiar'],
          say: 'Con plan letal, método a mano y carta de despedida, se hospitaliza y se vigila uno a uno, aunque un familiar ofrezca cuidarlo.' },
        { cells: ['Dice que lo volverá a intentar', 'No dar el alta', 'Alta voluntaria'],
          say: 'Si el paciente dice que lo volverá a intentar apenas salga, no hay alta voluntaria posible.' },
        { cells: ['Mejoría súbita o calma', 'Mantener la vigilancia', 'Creer que pasó el riesgo'],
          say: 'Una mejoría súbita en un paciente de alto riesgo no significa que pasó.' },
        { cells: ['Sobredosis de amitriptilina', 'Electrocardiograma', 'Solo observar'],
          say: 'Y ante una sobredosis de tricíclicos, lo primero es el electrocardiograma.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 54 años, viudo hace 4 meses y recién despedido, llevado a urgencias por su cuñado. Lo encontraron en su casa con una botella vacía de pisco, una soga atada a una viga y una carta a sus hijos pidiendo perdón. Está somnoliento, con aliento alcohólico y llanto fácil. Al preguntarle a solas dice: "Apenas salga de aquí voy a terminar lo que empecé". Tuvo un intento por sobredosis hace 12 años. El cuñado pide llevárselo a su casa.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Alta con el cuñado, indicándole reposo y clonazepam' },
        { letter: 'B', text: 'Rechazar el alta, vigilar 1 a 1 y hospitalizar en psiquiatría' },
        { letter: 'C', text: 'Sertralina y control en el CESFAM en 7 días' },
        { letter: 'D', text: 'Alta voluntaria firmada por el paciente' },
        { letter: 'E', text: 'Lavado gástrico y observación por 2 horas' },
      ],
      correct: 'B',
      explanation: 'Riesgo extremo e inminente: intento previo, viudez, cesantía, alcohol, soga y carta de despedida, y la ideación persiste. Se prohíbe el alta, se vigila 1 a 1, se retiran elementos peligrosos, se maneja la intoxicación alcohólica y se hospitaliza en psiquiatría.',
      say: {
        stem: 'Un hombre de cincuenta y cuatro años, viudo hace cuatro meses y recién despedido, llevado por su cuñado. Lo encontraron con una botella de pisco vacía, una soga atada a una viga y una carta a sus hijos pidiendo perdón. Está somnoliento, con llanto fácil. A solas dice: apenas salga de aquí voy a terminar lo que empecé. Tuvo un intento por sobredosis hace doce años. El cuñado pide llevárselo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: alta con el cuñado y clonazepam; rechazar el alta, vigilancia uno a uno y hospitalización psiquiátrica; sertralina con control en siete días; alta voluntaria; o lavado gástrico y observación por dos horas. Piénsalo.',
        answer: 'Es la B. Tiene intento previo, viudez, cesantía, alcohol, un método preparado, una carta de despedida y sigue con la intención. Es riesgo extremo, y se hospitaliza con vigilancia uno a uno, sin importar lo que pida el cuñado. La sertralina tarda semanas, el alta voluntaria no es válida con riesgo vital, y el clonazepam no trata el riesgo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 87',
      stem: 'Una adolescente de 15 años se intenta suicidar, ingiriendo 600 miligramos de amitriptilina. ¿Cuál es el examen más adecuado para determinar su riesgo?',
      question: '¿Cuál es el examen más adecuado para determinar su riesgo?',
      options: [
        { letter: 'A', text: 'Gases arteriales' },
        { letter: 'B', text: 'Bilirrubinemia' },
        { letter: 'C', text: 'Electrocardiograma' },
        { letter: 'D', text: 'Creatinfosfoquinasa' },
        { letter: 'E', text: 'Pruebas hepáticas' },
      ],
      correct: 'C',
      explanation: 'La intoxicación por tricíclicos produce alteraciones de la conducción y arritmias ventriculares, que son lo más grave. El electrocardiograma (QRS ancho) permite estimar el riesgo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Una adolescente de quince años intenta suicidarse ingiriendo seiscientos miligramos de amitriptilina.',
        question: '¿Cuál es el examen más adecuado para determinar su riesgo?',
        options: 'Las opciones: gases arteriales; bilirrubinemia; electrocardiograma; creatinfosfoquinasa; o pruebas hepáticas. Piénsalo.',
        answer: 'Es la C. La amitriptilina es un tricíclico, y su toxicidad grave es cardíaca: ensancha el QRS y produce arritmias ventriculares. El electrocardiograma es el examen que orienta el riesgo. Además, como fue un intento de suicidio, además de la toxicidad se hospitaliza y se evalúa por psiquiatría. Y sirve de recordatorio de por qué no se dan cajas completas de tricíclicos a pacientes en riesgo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'En un control de atención primaria, un médico sospecha que una paciente de 42 años con depresión mayor moderada podría estar pensando en suicidarse, pero duda si preguntárselo por temor a que la pregunta actúe como estímulo o aumente su angustia.',
      question: '¿Cuál es la afirmación correcta?',
      options: [
        { letter: 'A', text: 'No se debe preguntar; es mejor esperar a que ella mencione el tema' },
        { letter: 'B', text: 'Preguntar directamente es necesario, no induce la conducta suicida y suele aliviar a la paciente' },
        { letter: 'C', text: 'Solo un psiquiatra puede interrogar sobre ideas de muerte' },
        { letter: 'D', text: 'Indagar sobre el método está contraindicado porque enseña alternativas letales' },
        { letter: 'E', text: 'La pregunta solo debe hacerse en presencia de Carabineros' },
      ],
      correct: 'B',
      explanation: 'Preguntar de forma respetuosa y directa no induce el suicidio: disminuye la angustia, rompe el aislamiento y es la única forma de medir el riesgo y proteger. Preguntar por el método y el plan es parte de la evaluación.',
      say: {
        stem: 'Un médico de atención primaria sospecha que una paciente de cuarenta y dos años, con depresión moderada, podría estar pensando en suicidarse, pero duda de preguntárselo por miedo a que la pregunta le dé la idea o aumente su angustia.',
        question: '¿Cuál es la afirmación correcta?',
        options: 'Las opciones: no preguntar y esperar; preguntar directamente es necesario y no induce la conducta; solo un psiquiatra puede preguntar; indagar el método está contraindicado; o preguntar solo con Carabineros presentes. Piénsalo.',
        answer: 'Es la B. Preguntar de forma directa y respetuosa no induce el suicidio; alivia a la paciente y es la única forma de saber el riesgo. Esperar a que ella lo diga es un error, cualquier médico puede y tiene que preguntar, y averiguar el plan y el método es parte de la evaluación, no un riesgo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 28 años con esquizofrenia paranoide, con dos intentos suicidas impulsivos de alta letalidad en el último año a pesar de risperidona 6 mg al día. Está clínicamente estable, con suspicacia residual.',
      question: '¿Qué psicofármaco ha demostrado reducir la conducta suicida en la esquizofrenia?',
      options: [
        { letter: 'A', text: 'Haloperidol' },
        { letter: 'B', text: 'Clozapina' },
        { letter: 'C', text: 'Clorpromazina' },
        { letter: 'D', text: 'Alprazolam' },
        { letter: 'E', text: 'Sertralina' },
      ],
      correct: 'B',
      explanation: 'La clozapina es el único antipsicótico con indicación formal para reducir la conducta suicida recurrente en esquizofrenia y trastorno esquizoafectivo. En los trastornos del ánimo, el equivalente es el litio.',
      say: {
        stem: 'Un hombre de veintiocho años con esquizofrenia paranoide, con dos intentos suicidas impulsivos de alta letalidad en el último año, a pesar de risperidona seis miligramos al día. Está clínicamente estable, con algo de suspicacia residual.',
        question: '¿Qué psicofármaco ha demostrado reducir la conducta suicida en la esquizofrenia?',
        options: 'Las opciones: haloperidol; clozapina; clorpromazina; alprazolam; o sertralina. Piénsalo.',
        answer: 'Es la B. La clozapina es el antipsicótico con indicación formal para reducir la conducta suicida recurrente en esquizofrenia. En los trastornos del ánimo, el fármaco equivalente es el litio. Haloperidol y clorpromazina no tienen ese efecto, y el alprazolam no es una opción antisuicida.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Mujer de 22 años con trastorno de personalidad límite, ingresada a urgencias tras ingerir 20 comprimidos de paracetamol en un acto impulsivo, después de discutir con su pareja. Se hizo lavado gástrico y se administró N-acetilcisteína. A las 4 horas está tranquila, dice que "fue una tontería" y exige el alta porque tiene que ir a trabajar. Sus padres, agotados, se niegan a recibirla.',
      question: '¿Cuál es la conducta médica correcta?',
      options: [
        { letter: 'A', text: 'Alta inmediata con citación abierta a su policlínico' },
        { letter: 'B', text: 'Hacerla firmar el alta voluntaria y dejar constancia en la ficha' },
        { letter: 'C', text: 'Mantener en observación protegida, completar el tratamiento con N-acetilcisteína y asegurar la evaluación psiquiátrica antes del alta' },
        { letter: 'D', text: 'Administrar haloperidol intramuscular para controlar la conducta' },
        { letter: 'E', text: 'Indicar reposo en la sala de espera sin vigilancia' },
      ],
      correct: 'C',
      explanation: 'Todo intento de suicidio, sea cual sea el diagnóstico de base, exige observación protegida hasta completar el manejo toxicológico y una evaluación psiquiátrica. Que no tenga red familiar que la reciba refuerza que no se puede dar el alta inmediata.',
      say: {
        stem: 'Una mujer de veintidós años con trastorno de personalidad límite, ingresada tras ingerir veinte comprimidos de paracetamol de forma impulsiva, después de una discusión con su pareja. Recibió lavado gástrico y N-acetilcisteína. A las cuatro horas está tranquila, dice que fue una tontería y exige el alta para ir a trabajar. Sus padres, agotados, no quieren recibirla.',
        question: '¿Cuál es la conducta médica correcta?',
        options: 'Las opciones: alta inmediata con cita abierta; alta voluntaria firmada; observación protegida, completar la N-acetilcisteína y evaluación psiquiátrica antes del alta; haloperidol intramuscular; o reposo en la sala de espera sin vigilancia. Piénsalo.',
        answer: 'Es la C. Todo intento de suicidio se toma en serio, sea cual sea el diagnóstico de base. Permanece en observación protegida hasta completar el manejo médico del paracetamol, que incluye la N-acetilcisteína, y hasta que la evalúe un psiquiatra. Además no tiene red que la acoja, lo que impide un alta inmediata. El alta voluntaria no es válida con riesgo vital potencial.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: riesgo suicida',
      cards: [
        { title: 'Evaluación', tag: 'Preguntar', kind: 'key', items: [
          { t: 'Preguntar directo no induce', d: 'Ideación, plan, método, actos',
            say: 'Cerremos con las reglas de oro. Preguntar directo por suicidio no lo induce, y se explora la ideación, el plan, el método y los actos preparatorios.' },
          { t: 'El intento previo pesa más', d: 'Más hombre, viudez, alcohol',
            say: 'El intento previo es el factor más potente. Se suman ser hombre, vivir solo, la cesantía, el alcohol y una enfermedad mental.' },
        ] },
        { title: 'Conducta', tag: 'Seguridad', kind: 'alert', items: [
          { t: 'Riesgo alto: hospitalizar, vigilar 1 a 1', d: 'Retirar elementos y fármacos',
            say: 'Con plan estructurado, intento reciente, psicosis o sin red de apoyo, se hospitaliza con vigilancia uno a uno y se retiran los elementos peligrosos.' },
          { t: 'No dar el alta sin evaluación', d: 'Litio o clozapina según la enfermedad',
            say: 'Nunca se da el alta tras un intento sin evaluación de psiquiatría. Y se trata la enfermedad de base, con litio en bipolar y clozapina en esquizofrenia. Si te llevas una sola idea de hoy: pregunta siempre, y con riesgo alto nadie se va solo a casa. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Riesgo suicida: de la ideación a la decisión',
    root: N('start', 'Ideación suicida o alerta', 'Intento previo o conducta de alarma',
      'Un paciente con ideas de muerte, un intento previo o conductas de alarma. Lo primero es preguntar directamente, sin miedo.',
      ['Siempre', N('do', 'Preguntar y estratificar', 'Plan, método, actos, red de apoyo',
        'Se pregunta por ideación, plan, método y actos preparatorios, se revisan los factores de riesgo y la red de apoyo, y se usa una escala como orientación.',
        ['Plan letal, intento reciente, psicosis o sin red', N('refer', 'Hospitalizar y vigilar 1 a 1', 'Retirar elementos y fármacos',
          'Se prohíbe el alta, se hospitaliza en psiquiatría con vigilancia continua uno a uno, se retiran los elementos peligrosos y se trata la enfermedad de base.',
          ['Enfermedad de base', N('ok', 'Tratar con evidencia antisuicida', 'Litio, clozapina o TEC',
            'Litio en trastorno bipolar y depresión recurrente, clozapina en esquizofrenia, y terapia electroconvulsiva si hay riesgo inminente con depresión psicótica o rechazo alimentario.')])],
        ['Ideación sin plan y con red sólida', N('ok', 'Manejo ambulatorio supervisado', 'Fármacos custodiados; control en 48 a 72 horas',
          'Manejo ambulatorio intensivo con la familia a cargo de los fármacos, retiro de medios letales y control en cuarenta y ocho a setenta y dos horas.',
          ['Si empeora o persiste', N('alert', 'Reevaluar y hospitalizar', 'Sin red, la hospitalización manda',
            'Si la ideación persiste, aparece un plan o falla la red, se reevalúa y se hospitaliza. La mejoría súbita no significa que pasó el riesgo.')])],
      )],
    ),
  },
};
