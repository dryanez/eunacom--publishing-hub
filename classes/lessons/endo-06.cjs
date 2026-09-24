// Clase 7.6 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-06).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-06',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Qué causa la tirotoxicosis, cómo se confirma Graves y qué fiebre obliga a suspender el tiamazol',
      say: 'Bienvenidos. Hoy vemos la enfermedad de Graves-Basedow y los síndromes tirotóxicos, un tema de frecuencia muy alta. En la clase anterior vimos tiroides que se rompen y liberan hormona; hoy vemos la tiroides que fabrica de más. Al final vas a saber distinguirlas, confirmar Graves, elegir el fármaco correcto y, sobre todo, reconocer la complicación que puede matar a tu paciente: la agranulocitosis.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Tirotoxicosis: ¿la tiroides fabrica o se vacía?',
      nodes: [
        { id: 'tox', col: 0, row: 2, k: 'start', t: 'Tirotoxicosis', s: 'Exceso de hormona circulante' },
        { id: 'q', col: 1, row: 2, k: 'q', t: '¿Cómo capta yodo?', s: 'Cintigrama a las 24 horas' },
        { id: 'alt', col: 2, row: 1, k: 'mech', t: 'Captación normal o alta', s: 'Hipertiroidismo verdadero' },
        { id: 'hip', col: 3, row: 0, k: 'effect', t: 'Graves, BMNT, adenoma tóxico', s: 'La glándula fabrica de más' },
        { id: 'baj', col: 2, row: 3, k: 'mech', t: 'Captación baja o nula', s: 'Sin hiperfunción' },
        { id: 'des', col: 3, row: 4, k: 'effect', t: 'Tiroiditis o hormona exógena', s: 'Destrucción o aporte externo' },
        { id: 'tra', col: 4, row: 4, k: 'trap', t: 'Tionamidas', s: 'No sirven sin hiperfunción' },
      ],
      edges: [
        { from: 'tox', to: 'q' },
        { from: 'q', to: 'alt', label: 'sobre 25 a 30 %' },
        { from: 'alt', to: 'hip' },
        { from: 'q', to: 'baj', label: 'bajo 2 a 5 %' },
        { from: 'baj', to: 'des' },
        { from: 'des', to: 'tra', label: 'no' },
      ],
      steps: [
        { show: ['tox'], note: 'Tirotoxicosis no es lo mismo que hipertiroidismo',
          say: 'Partamos con un concepto que ordena todo. Tirotoxicosis es el estado de exceso de hormona tiroidea en la sangre, venga de donde venga. Hipertiroidismo, en cambio, es cuando la tiroides la está fabricando de más.' },
        { show: ['q'], note: 'La captación separa las dos categorías',
          say: '¿Cómo sabes cuál es? Mirando cuánto yodo capta la glándula.' },
        { show: ['alt', 'hip'], note: 'Una glándula que trabaja, capta',
          say: 'Si la captación es normal o alta, sobre veinticinco a treinta por ciento a las veinticuatro horas, la tiroides está trabajando: es un hipertiroidismo verdadero. Aquí están la enfermedad de Graves, el bocio multinodular tóxico y el adenoma tóxico.' },
        { show: ['baj', 'des'], note: 'Una glándula rota o frenada, no capta',
          say: 'Si la captación está baja o abolida, bajo dos a cinco por ciento, no hay hiperfunción. O la glándula se está rompiendo, como en las tiroiditis de la clase pasada, o el paciente está tomando hormona desde afuera.' },
        { show: ['tra'], note: 'La conexión con la clase anterior',
          say: 'Y la consecuencia práctica ya la conoces: en ese segundo grupo las tionamidas, como el tiamazol, no sirven. Solo tienen sentido cuando la glándula está fabricando.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Graves: un anticuerpo que imita a la TSH',
      nodes: [
        { id: 'trab', col: 0, row: 1, k: 'cause', t: 'TRAb estimulantes', s: 'Anticuerpos contra el receptor de TSH' },
        { id: 'rec', col: 1, row: 1, k: 'mech', t: 'Receptor de TSH encendido', s: 'Estimulación constante' },
        { id: 'hip', col: 2, row: 0, k: 'effect', t: 'Hiperplasia y angiogénesis', s: 'Bocio difuso con soplo' },
        { id: 'hor', col: 2, row: 2, k: 'effect', t: 'Síntesis acelerada', s: 'TSH suprimida, T4L alta' },
        { id: 'ext', col: 3, row: 1, k: 'risk', t: 'Manifestaciones extratiroideas', s: 'Órbita y piel' },
      ],
      edges: [
        { from: 'trab', to: 'rec' },
        { from: 'rec', to: 'hip' },
        { from: 'rec', to: 'hor' },
        { from: 'trab', to: 'ext', label: 'autoinmunidad' },
      ],
      steps: [
        { show: ['trab'], note: 'La causa más común bajo los 50 años',
          say: 'La enfermedad de Graves explica el setenta a ochenta por ciento de los hipertiroidismos en menores de cincuenta años. Es autoinmune: el paciente fabrica anticuerpos contra el receptor de TSH, los TRAb.' },
        { show: ['rec'], note: 'El anticuerpo hace el trabajo de la TSH',
          say: 'Pero estos anticuerpos no bloquean el receptor: lo estimulan. Hacen el trabajo de la TSH, pero sin freno, de forma constante.' },
        { show: ['hip'], note: 'Por eso el bocio es difuso y soplante',
          say: 'La glándula entera responde. Crece de forma difusa y se llena de vasos, y por eso el bocio de Graves es difuso, elástico y a veces tiene soplo o frémito.' },
        { show: ['hor'], note: 'La hipófisis se apaga',
          say: 'Y fabrica hormona sin control. La hipófisis ve tanta hormona que apaga la TSH: por eso la TSH está suprimida con la T cuatro libre alta.' },
        { show: ['ext'], note: 'Lo que ninguna otra causa tiene',
          say: 'Y como es una enfermedad autoinmune, no se queda en el cuello: compromete la órbita y la piel. Esas manifestaciones son las que la delatan, y las vemos en un momento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'El paciente hipermetabólico, y el que no lo parece',
      cards: [
        { title: 'Síndrome hipermetabólico', tag: 'Típico', kind: 'key', items: [
          { t: 'Baja de peso con buen apetito', d: 'Intolerancia al calor, sudoración',
            say: 'Veamos cómo llega. El paciente típico baja de peso a pesar de comer bien o más que antes, no tolera el calor y suda mucho.' },
          { t: 'Temblor fino y taquicardia', d: 'Palpitaciones, presión de pulso amplia',
            say: 'Tiene un temblor fino distal, taquicardia sinusal de reposo con palpitaciones, e hipertensión sistólica con presión de pulso amplia.' },
          { t: 'Polidefecación, insomnio, labilidad', d: 'Todo acelerado',
            say: 'Y todo está acelerado: deposiciones más frecuentes, insomnio y labilidad emocional. Es un organismo con el acelerador pisado.' },
        ] },
        { title: 'Hipertiroidismo apático', tag: 'Adulto mayor', kind: 'alert', items: [
          { t: 'Letargia y depresión', d: 'Pérdida de masa muscular proximal',
            say: 'Pero ojo con el adulto mayor. Puede llegar con lo contrario: letargia, depresión que no responde y pérdida de masa muscular. Es el hipertiroidismo apático.' },
          { t: 'Fibrilación auricular de novo', d: 'O insuficiencia cardíaca refractaria',
            say: 'La pista suele ser cardíaca: una fibrilación auricular nueva, o una insuficiencia cardíaca que no responde al tratamiento habitual. En un adulto mayor con fibrilación auricular nueva, siempre pide TSH.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Examen físico',
      title: 'Los signos que solo tiene Graves',
      cards: [
        { title: 'Orbitopatía', tag: '50 % de los casos', kind: 'alert', items: [
          { t: 'Proptosis y retracción palpebral', d: 'Quemosis, diplopía',
            say: 'Ahora, los signos patognomónicos de Graves. El primero es la orbitopatía, presente en cerca de la mitad de los casos: proptosis, retracción palpebral, quemosis y diplopía por fibrosis de los músculos rectos.' },
          { t: 'El tabaco la empeora', d: 'Dejar de fumar es parte del tratamiento',
            say: 'Y un dato que se usa en los casos: el tabaquismo la exacerba. Dejar de fumar es parte del tratamiento de una paciente con Graves.' },
        ] },
        { title: 'Cuello y piel', tag: 'Patognomónicos', kind: 'key', items: [
          { t: 'Bocio difuso con soplo o frémito', d: 'Elástico, indoloro',
            say: 'El segundo es el bocio difuso, elástico e indoloro, con soplo o frémito por toda esa vascularización.' },
          { t: 'Mixedema pretibial', d: 'Placas violáceas no depresibles',
            say: 'El tercero es el mixedema pretibial: placas infiltradas, eritemato-violáceas, que no dejan fóvea, por depósito de glucosaminoglicanos.' },
          { t: 'Acropaquia tiroidea', d: 'La menos frecuente',
            say: 'Y el cuarto, la acropaquia tiroidea. Si ves orbitopatía o mixedema pretibial, el diagnóstico es Graves: el bocio multinodular y el adenoma tóxico casi nunca los tienen.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'Cómo se confirma',
      nodes: [
        { id: 'tsh', col: 0, row: 1, k: 'start', t: 'TSH suprimida', s: 'Menor a 0,01 mUI/L' },
        { id: 't4', col: 1, row: 0, k: 'effect', t: 'T4 libre alta', s: 'Hipertiroidismo clínico' },
        { id: 't3', col: 1, row: 2, k: 'alert', t: 'T4 libre normal', s: 'Medir T3 libre: T3-toxicosis' },
        { id: 'trab', col: 2, row: 1, k: 'q', t: 'TRAb', s: 'Especificidad mayor a 98 %' },
        { id: 'gra', col: 3, row: 0, k: 'good', t: 'Positivos: Graves', s: 'No hace falta cintigrama' },
        { id: 'cin', col: 3, row: 2, k: 'mech', t: 'Negativos o sin orbitopatía', s: 'Cintigrama tiroideo' },
      ],
      edges: [
        { from: 'tsh', to: 't4' },
        { from: 'tsh', to: 't3', label: 'si T4L normal' },
        { from: 't4', to: 'trab' },
        { from: 't3', to: 'trab' },
        { from: 'trab', to: 'gra' },
        { from: 'trab', to: 'cin' },
      ],
      steps: [
        { show: ['tsh', 't4'], note: 'El perfil de entrada',
          say: 'Vamos al laboratorio. El perfil de entrada es una TSH suprimida, menor a cero coma cero uno, con T cuatro libre elevada.' },
        { show: ['t3'], note: 'TSH suprimida con T4L normal: pide T3',
          say: 'Pero ojo con este detalle: si la TSH está suprimida y la T cuatro libre sale normal, no te quedes ahí. Mide la T tres libre, porque existe la T tres toxicosis, presente en cerca del cinco por ciento de los adenomas tóxicos y de los Graves incipientes.' },
        { show: ['trab'], note: 'El examen de mayor rendimiento',
          say: 'Para la causa, el examen de mayor rendimiento son los TRAb, con una especificidad mayor al noventa y ocho por ciento. Además predicen el riesgo de recaída al suspender el tiamazol, y el riesgo de tirotoxicosis neonatal en una embarazada.' },
        { show: ['gra'], note: 'Con TRAb positivos y clínica típica, basta',
          say: 'Si los TRAb son positivos, o la paciente tiene orbitopatía evidente, el diagnóstico es Graves y el cintigrama sobra.' },
        { show: ['cin'], note: 'El cintigrama resuelve cuando la clínica no alcanza',
          say: 'El cintigrama queda para cuando los TRAb son negativos o no están disponibles, y no hay orbitopatía. Ahí te dice el patrón de captación, y el patrón te da la causa. Y la ecografía Doppler, si la pides, muestra en Graves una vascularización exuberante: el infierno tiroideo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'La diferencia que más se pregunta',
      title: 'El cintigrama: un patrón para cada causa',
      cards: [
        { title: 'Captación alta', tag: 'Hiperfunción', kind: 'key', items: [
          { t: 'Difusa y homogénea', d: 'Graves',
            say: 'Veamos los patrones del cintigrama, que se preguntan como imagen o como descripción. Captación difusa y homogénea: Graves.' },
          { t: 'Nódulo caliente único que suprime el resto', d: 'Adenoma tóxico',
            say: 'Un solo nódulo caliente, con el resto de la glándula apagada: adenoma tóxico. El nódulo fabrica hormona solo, la TSH cae, y el tejido normal deja de captar.' },
          { t: 'Varias áreas calientes y frías', d: 'Bocio multinodular tóxico',
            say: 'Múltiples áreas calientes y frías: bocio multinodular tóxico. Estos dos últimos, el adenoma y el bocio multinodular, son de adultos mayores de sesenta años, se deben a mutaciones del receptor de TSH, tienen TRAb negativos y rara vez orbitopatía.' },
        ] },
        { title: 'Captación nula', tag: 'Sin hiperfunción', kind: 'alert', items: [
          { t: 'Tiroides dolorosa', d: 'Tiroiditis subaguda',
            say: 'Captación nula con tiroides dolorosa y tiroglobulina muy alta por la lisis: tiroiditis subaguda.' },
          { t: 'Tiroides no palpable, tiroglobulina indetectable', d: 'Tirotoxicosis facticia',
            say: 'Y captación nula con tiroides pequeña y tiroglobulina indetectable: tirotoxicosis facticia, es decir, alguien tomando levotiroxina a escondidas. La tiroglobulina te lo dice: si la hormona viene de afuera, la glándula no libera nada. El tratamiento es suspender el aporte.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento médico',
      title: 'Tiamazol, propiltiouracilo y betabloqueo',
      cards: [
        { title: 'Tiamazol', tag: 'Primera línea', kind: 'pharma', items: [
          { t: '10 a 30 mg/día en una toma', d: 'Inhibe la peroxidasa tiroidea',
            say: 'Pasemos al tratamiento. El fármaco de primera línea es el tiamazol, también llamado metimazol. Inhibe la peroxidasa tiroidea y bloquea la síntesis. Se da en una sola toma matinal, diez a treinta miligramos al día.' },
          { t: 'Por 12 a 18 meses', d: 'Control de T4L a las 4 a 6 semanas',
            say: 'El tratamiento dura doce a dieciocho meses. Se controla con T cuatro libre y T tres a las cuatro a seis semanas, porque la TSH puede quedar suprimida por meses aunque el paciente ya esté mejor.' },
        ] },
        { title: 'Propiltiouracilo', tag: 'Indicaciones exclusivas', kind: 'alert', items: [
          { t: 'Primer trimestre del embarazo', d: 'El tiamazol produce embriopatía',
            say: 'El propiltiouracilo, o PTU, tiene indicaciones exclusivas, y se preguntan siempre. La primera: el primer trimestre del embarazo, porque el tiamazol produce embriopatía, con aplasia cutis y atresia de coanas o de esófago. Desde la semana trece a dieciséis se vuelve al tiamazol.' },
          { t: 'Tormenta tiroidea', d: 'Bloquea además la conversión de T4 a T3',
            say: 'La segunda: la tormenta tiroidea, porque además de bloquear la síntesis frena la conversión periférica de T cuatro a T tres. Lo vemos en detalle en dos clases más.' },
          { t: 'Riesgo de hepatitis fulminante', d: 'Por eso no se usa fuera de esas indicaciones',
            say: 'Y la tercera, alergias menores al tiamazol. ¿Por qué no usarlo siempre? Porque el PTU puede producir hepatitis fulminante. El tiamazol, en cambio, da más bien colestasia.' },
        ] },
        { title: 'Betabloqueo', tag: 'Mientras tanto', kind: 'normal', items: [
          { t: 'Propranolol o atenolol', d: 'Hasta el eutiroidismo',
            say: 'Mientras el antitiroideo hace efecto, que tarda semanas, se usa propranolol, veinte a cuarenta miligramos cada seis a ocho horas, o atenolol una vez al día. Controla el temblor y las palpitaciones y reduce el riesgo de arritmias.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia',
      title: 'Agranulocitosis: fiebre u odinofagia con tionamidas',
      nodes: [
        { id: 'tio', col: 0, row: 1, k: 'cause', t: 'Tiamazol o PTU', s: 'Primeros 90 días' },
        { id: 'fie', col: 1, row: 1, k: 'alert', t: 'Fiebre u odinofagia', s: 'Cualquier signo' },
        { id: 'sus', col: 2, row: 1, k: 'good', t: 'Suspender de inmediato', s: 'Hemograma urgente' },
        { id: 'ran', col: 3, row: 1, k: 'q', t: '¿Neutrófilos bajo 500?', s: 'Recuento absoluto' },
        { id: 'hos', col: 4, row: 0, k: 'refer', t: 'Hospitalizar en aislamiento', s: 'Cultivos, antibióticos, G-CSF' },
        { id: 'nun', col: 4, row: 2, k: 'trap', t: 'Nunca reexponer', s: 'Ni cambiar a PTU' },
      ],
      edges: [
        { from: 'tio', to: 'fie' },
        { from: 'fie', to: 'sus' },
        { from: 'sus', to: 'ran' },
        { from: 'ran', to: 'hos', label: 'sí' },
        { from: 'hos', to: 'nun' },
      ],
      steps: [
        { show: ['tio'], note: 'Rara, pero puede ser letal',
          say: 'Ahora la complicación más temida, y la más preguntada de esta clase. Las tionamidas pueden producir agranulocitosis. Es rara, cero coma dos a cero coma cinco por ciento, y aparece típicamente en los primeros noventa días.' },
        { show: ['fie'], note: 'La señal es una faringitis o una fiebre',
          say: 'Se manifiesta como una infección cualquiera: dolor de garganta, faringitis o fiebre sobre treinta y ocho grados. Y por eso el enunciado te va a mostrar una amigdalitis que parece banal.' },
        { show: ['sus'], note: 'Suspender primero, preguntar después',
          say: 'La regla es una sola, y se le enseña al paciente desde el primer día: ante fiebre u odinofagia, suspende el fármaco de inmediato y consulta en urgencia para un hemograma urgente.' },
        { show: ['ran', 'hos'], note: 'RAN bajo 500: aislamiento y G-CSF',
          say: 'Si el recuento absoluto de neutrófilos está bajo quinientos, se hospitaliza en aislamiento, se toman cultivos, se inician antibióticos de amplio espectro y factor estimulante de colonias de granulocitos.' },
        { show: ['nun'], note: 'Las dos respuestas incorrectas típicas',
          say: 'Y la suspensión es definitiva: nunca se reexpone a una tionamida. Tampoco se cambia a PTU, porque la reactividad cruzada es alta. Las alternativas trampa son dar un antibiótico y seguir con el tiamazol, o cambiarlo por propiltiouracilo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapias definitivas',
      title: 'Radioyodo y cirugía: la vista previa',
      cards: [
        { title: 'Radioyodo', tag: 'Ablación no invasiva', kind: 'pharma', items: [
          { t: 'Recidiva, BMNT, contraindicación quirúrgica', d: 'Efecto en 6 a 12 semanas',
            say: 'Cuando el tiamazol no basta, hay dos terapias definitivas. El radioyodo es de elección en la recidiva después del tiamazol, en el bocio multinodular tóxico y en quien no puede operarse. Destruye los tirocitos en seis a doce semanas.' },
          { t: 'Embarazo y lactancia: contraindicación absoluta', d: 'Esperar 6 meses para concebir',
            say: 'Contraindicación absoluta: embarazo y lactancia, y hay que esperar seis meses después de la dosis para concebir.' },
          { t: 'Orbitopatía activa: la empeora', d: 'Prednisona profiláctica si se usa',
            say: 'Y ojo con la orbitopatía activa: el radioyodo libera antígenos y la puede empeorar. Si se usa, va con prednisona profiláctica, cero coma cuatro a cero coma cinco miligramos por kilo al día, desde el día del radioyodo y reduciendo en seis semanas.' },
        ] },
        { title: 'Tiroidectomía total', tag: 'Resolución inmediata', kind: 'key', items: [
          { t: 'Bocio > 80 g, sospecha de cáncer', d: 'Orbitopatía severa, embarazo en menos de 6 meses',
            say: 'La tiroidectomía total se indica en el bocio grande y compresivo, sobre ochenta gramos, en la sospecha de cáncer, en la orbitopatía activa severa y en la mujer que quiere embarazarse antes de seis meses.' },
          { t: 'Preparar con tiamazol + Lugol', d: '7 a 10 días antes',
            say: 'Y se prepara con tiamazol hasta el eutiroidismo, más solución de Lugol siete a diez días antes, para reducir la vascularización. Todo esto lo profundizamos en la próxima clase.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Severidad',
      title: 'No todo hipertiroidismo se trata igual',
      cards: [
        { title: 'Subclínico', tag: 'TSH baja, T4L normal', kind: 'normal', items: [
          { t: 'TSH < 0,1 con T4L y T3L normales', d: 'Tratar si hay riesgo',
            say: 'Un último concepto de severidad. En el hipertiroidismo subclínico, la TSH está bajo cero coma uno con hormonas normales. Se trata si el paciente tiene más de sesenta y cinco años, cardiopatía o riesgo de fractura.' },
        ] },
        { title: 'Clínico', tag: 'Leve a severo', kind: 'pharma', items: [
          { t: 'Leve: tiamazol 10 a 15 mg + propranolol', d: 'Control en 4 semanas',
            say: 'En el hipertiroidismo clínico leve: tiamazol diez a quince miligramos al día más propranolol, con control en cuatro semanas.' },
          { t: 'Severo: tiamazol 30 a 40 mg', d: 'Betabloqueo enérgico; anticoagular si hay FA',
            say: 'En el severo, con bocio soplante, orbitopatía activa o fibrilación auricular rápida: tiamazol treinta a cuarenta miligramos, betabloqueo enérgico y anticoagulación si hay fibrilación auricular.' },
        ] },
        { title: 'Tormenta tiroidea', tag: 'Urgencia vital', kind: 'alert', items: [
          { t: 'Fiebre, delirio, falla cardíaca', d: 'UCI inmediata',
            say: 'Y el extremo es la tormenta tiroidea: fiebre, agitación o delirio, falla cardíaca e ictericia. Es una urgencia de UCI, y le dedicamos una clase completa.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, desde la TSH suprimida hasta el tratamiento.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Tirotoxicosis con captación nula', 'Buscar tiroiditis o hormona exógena', 'Iniciar tiamazol'],
          say: 'Repasemos las trampas. Tirotoxicosis con captación nula: es una tiroiditis o hormona exógena. El error es iniciar tiamazol.' },
        { cells: ['Graves con TRAb + u orbitopatía', 'Diagnóstico hecho', 'Pedir cintigrama igual'],
          say: 'Graves con TRAb positivos u orbitopatía: el diagnóstico está hecho, el cintigrama sobra.' },
        { cells: ['TSH suprimida con T4L normal', 'Medir T3 libre', 'Llamarlo subclínico sin más'],
          say: 'TSH suprimida con T cuatro libre normal: mide la T tres libre antes de llamarlo subclínico.' },
        { cells: ['Fiebre u odinofagia con tiamazol', 'Suspender + hemograma urgente', 'Antibiótico y seguir; cambiar a PTU'],
          say: 'Fiebre u odinofagia con tiamazol: suspender y hemograma urgente. Nunca antibiótico y seguir, y nunca cambiar a PTU.' },
        { cells: ['Graves en el primer trimestre', 'PTU; tiamazol desde semana 13 a 16', 'Mantener tiamazol'],
          say: 'Graves en el primer trimestre: propiltiouracilo, y de vuelta a tiamazol en el segundo trimestre.' },
        { cells: ['Adulto mayor con FA de novo', 'Pedir TSH', 'Pensar solo en el corazón'],
          say: 'Y el adulto mayor con fibrilación auricular nueva o insuficiencia cardíaca refractaria: pide TSH, porque puede ser un hipertiroidismo apático.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 30 años con enfermedad de Graves, en tratamiento con tiamazol 20 mg/día y propranolol hace 5 semanas. Consulta en urgencia por 1 día de fiebre de 39 °C y dolor faríngeo intenso. Faringe eritematosa con exudado amigdalino. FC 104 lpm.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Amoxicilina oral y control en 48 horas, manteniendo el tiamazol' },
        { letter: 'B', text: 'Cambiar el tiamazol por propiltiouracilo' },
        { letter: 'C', text: 'Suspender el tiamazol y solicitar hemograma urgente con recuento absoluto de neutrófilos' },
        { letter: 'D', text: 'Aumentar el tiamazol a 40 mg/día por probable descompensación' },
        { letter: 'E', text: 'Paracetamol y continuar el tratamiento sin cambios' },
      ],
      correct: 'C',
      explanation: 'Fiebre y odinofagia en un paciente con tionamidas en los primeros 90 días: sospecha de agranulocitosis. Se suspende el fármaco de inmediato y se pide hemograma urgente; si el RAN es menor a 500/µL, hospitalización en aislamiento, antibióticos y G-CSF. No se cambia a PTU por reactividad cruzada.',
      say: {
        stem: 'Vamos al caso. Mujer de treinta años con Graves, en tratamiento con tiamazol y propranolol hace cinco semanas. Llega a urgencia con un día de fiebre de treinta y nueve grados y dolor de garganta intenso. Tiene exudado amigdalino y está taquicárdica.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Las alternativas: amoxicilina y seguir con el tiamazol, cambiar a propiltiouracilo, suspender el tiamazol y pedir hemograma urgente, subir el tiamazol, o paracetamol sin cambios. Piénsalo.',
        answer: 'Es la C. El enunciado está armado para que veas una amigdalitis común y des amoxicilina. Pero es una paciente con tiamazol, dentro de los primeros noventa días, con fiebre y odinofagia: es agranulocitosis hasta demostrar lo contrario. Se suspende y se pide el hemograma de urgencia. El otro distractor peligroso es cambiar a PTU: la reactividad cruzada es alta, así que tampoco.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 149',
      stem: 'Mujer de 35 años con exoftalmo bilateral, palpitaciones, pérdida de peso y temblor fino en manos. TSH suprimida, T4 libre elevada. Bocio difuso.',
      question: '¿Cuál es el diagnóstico?',
      options: [
        { letter: 'A', text: 'Enfermedad de Graves-Basedow' },
        { letter: 'B', text: 'Tiroiditis de Hashimoto' },
        { letter: 'C', text: 'Bocio multinodular tóxico' },
        { letter: 'D', text: 'Adenoma tóxico de tiroides' },
        { letter: 'E', text: 'Tiroiditis subaguda de De Quervain' },
      ],
      correct: 'A',
      explanation: 'Hipertiroidismo con bocio difuso y exoftalmo en una mujer joven: enfermedad de Graves-Basedow. La orbitopatía es patognomónica; el bocio multinodular y el adenoma tóxico son de adultos mayores y rara vez la tienen.',
      say: {
        stem: 'Ahora preguntas reales. La primera es del EUNACOM de julio de dos mil veinticinco. Mujer de treinta y cinco años con exoftalmo bilateral, palpitaciones, baja de peso y temblor fino. TSH suprimida, T cuatro libre alta, y bocio difuso.',
        question: '¿Cuál es el diagnóstico?',
        options: 'Las opciones: Graves-Basedow, Hashimoto, bocio multinodular tóxico, adenoma tóxico, o De Quervain. Piénsalo.',
        answer: 'Es la A, Graves. Hay hipertiroidismo, y hay una pista que ninguna otra alternativa tiene: el exoftalmo, que es patognomónico. Súmale el bocio difuso en una mujer joven. El multinodular y el adenoma tóxico son de mayores de sesenta y casi nunca dan orbitopatía, y De Quervain duele.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 35',
      stem: 'Una paciente presenta un cuadro de 2 meses de evolución de sensación de calor mayor al habitual y sudoración. Se palpa su tiroides de tamaño normal y no presenta exoftalmo. Se solicitan pruebas tiroideas que demuestran TSH: 0,01 UI/L y T4 libre: 3,9 ng/ml.',
      question: '¿Cuál es el examen de elección para determinar el diagnóstico etiológico?',
      options: [
        { letter: 'A', text: 'Captación de yodo 131' },
        { letter: 'B', text: 'Ecografía de tiroides' },
        { letter: 'C', text: 'Punción aspirativa con aguja fina de tiroides' },
        { letter: 'D', text: 'Cintigrafía tiroidea' },
        { letter: 'E', text: 'Anticuerpos antitiroglobulina' },
      ],
      correct: 'D',
      explanation: 'Hipertiroidismo sin bocio ni exoftalmo: la clínica no da la causa. El cintigrama tiroideo muestra el patrón de captación (difusa en Graves, nódulo caliente en el adenoma tóxico, áreas calientes y frías en el BMNT, nula en tiroiditis o facticia).',
      say: {
        stem: 'La segunda es del EUNACOM de diciembre de dos mil diecisiete. Paciente con dos meses de sensación de calor y sudoración. La tiroides es de tamaño normal y no tiene exoftalmo. TSH suprimida y T cuatro libre alta.',
        question: '¿Cuál es el examen de elección para el diagnóstico etiológico?',
        options: 'Las opciones: captación de yodo, ecografía tiroidea, punción con aguja fina, cintigrafía tiroidea, o anticuerpos antitiroglobulina. Piénsalo.',
        answer: 'Es la D, la cintigrafía. Compárala con la pregunta anterior: allá el exoftalmo daba el diagnóstico solo; aquí no hay bocio ni orbitopatía, así que la clínica no te dice la causa. El cintigrama sí, por su patrón. El distractor tentador es la captación de yodo, que te dice cuánto capta pero no dónde, y no distingue un Graves de un nódulo caliente.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Captación y TRAb', kind: 'key', items: [
          { t: 'Captación alta: hiperfunción', d: 'Captación nula: no hay que bloquear',
            say: 'Cerremos con las reglas de oro. La captación separa lo que fabrica de lo que se vacía, y solo lo que fabrica se bloquea.' },
          { t: 'Orbitopatía o mixedema pretibial = Graves', d: 'TRAb confirma; el cintigrama, si no hay pistas',
            say: 'Orbitopatía o mixedema pretibial significan Graves. Los TRAb lo confirman, y el cintigrama queda para cuando la clínica no alcanza.' },
        ] },
        { title: 'Tratamiento', tag: 'Tionamidas', kind: 'pharma', items: [
          { t: 'Tiamazol de elección', d: 'PTU: primer trimestre y tormenta',
            say: 'El tiamazol es el de elección, y el PTU queda para el primer trimestre del embarazo y la tormenta tiroidea.' },
        ] },
        { title: 'Seguridad', tag: 'Se pregunta siempre', kind: 'alert', items: [
          { t: 'Fiebre u odinofagia: suspender', d: 'Hemograma urgente; nunca reexponer',
            say: 'Y ante fiebre u odinofagia con tionamidas, suspender y hemograma urgente. Si te llevas una sola idea de hoy: en un paciente con tiamazol, una amigdalitis no es una amigdalitis hasta ver los neutrófilos. En la próxima clase comparamos a fondo fármacos, radioyodo y cirugía. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Tirotoxicosis: de la TSH suprimida al tratamiento',
    root: N('start', 'TSH suprimida, T4L alta', 'Tirotoxicosis confirmada',
      'Paciente con TSH suprimida y T cuatro libre alta. Mientras defines la causa, si tiene síntomas adrenérgicos, ya puedes iniciar betabloqueo.',
      ['', N('q', '¿Orbitopatía o TRAb positivos?', 'Pistas de Graves',
        'La primera pregunta: ¿tiene orbitopatía, mixedema pretibial o TRAb positivos?',
        ['Sí', N('q', '¿Embarazo en primer trimestre?', 'Enfermedad de Graves',
          'Si los tiene, es Graves. Antes de elegir el fármaco, pregunta por embarazo.',
          ['No', N('ok', 'Tiamazol 12 a 18 meses', 'Suspender si fiebre u odinofagia',
            'Si no está embarazada: tiamazol en una toma diaria por doce a dieciocho meses, con la instrucción de suspenderlo ante fiebre u odinofagia.')],
          ['Sí', N('alert', 'Propiltiouracilo', 'Tiamazol desde semana 13 a 16',
            'Si cursa el primer trimestre: propiltiouracilo, y vuelta al tiamazol desde el segundo trimestre.')])],
        ['No', N('q', 'Cintigrama tiroideo', '¿Qué patrón muestra?',
          'Si no hay pistas, pide un cintigrama y lee el patrón.',
          ['Difuso', N('ok', 'Graves', 'Tiamazol',
            'Captación difusa y homogénea: Graves, y se trata con tiamazol.')],
          ['Nódulo o nódulos calientes', N('refer', 'Adenoma tóxico o BMNT', 'Radioyodo o cirugía',
            'Un nódulo caliente o varias áreas calientes y frías: adenoma tóxico o bocio multinodular tóxico. No remiten con fármacos: radioyodo o cirugía.')],
          ['Captación nula', N('do', 'Tiroiditis o facticia', 'No usar tiamazol',
            'Captación nula: tiroiditis o hormona exógena, y la tiroglobulina las separa. Aquí no se usa tiamazol.')])])]),
  },
};
