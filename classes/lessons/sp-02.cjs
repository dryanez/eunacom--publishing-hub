// Clase 21.2 — guion docente escrito a mano (ver gastro-01.cjs y gastro-02.cjs para el formato).
// Fuente: books/scripts/dataset_saludpublica.cjs / dataset_saludpublica_bloque_1.cjs (sp-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'sp-02',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Las cuatro garantías legales, el formulario obligatorio y qué pasa si se vence el plazo',
      say: 'Bienvenidos. Seguimos con el Régimen de Garantías Explícitas en Salud, el GES o AUGE, la Ley diecinueve mil novecientos sesenta y seis. Es de las más preguntadas del módulo, porque es un tema legal, con plazos que se preguntan en horas y en días. El GES cubre ochenta y siete problemas de salud, y a todos les aplican las mismas cuatro garantías. Hoy las vamos a aprender, junto con la obligación del médico de informarlas, y qué pasa cuando el sistema no cumple su propio plazo.',
    },

    {
      type: 'points',
      kicker: 'Las cuatro garantías',
      title: 'Acceso y Oportunidad',
      cards: [
        { title: 'Garantía de Acceso', tag: 'Si cumples el criterio, entras', kind: 'key', items: [
          { t: 'Derecho a recibir la prestación', d: 'Si cumples edad, etapa o condición del decreto',
            say: 'Partamos por las cuatro garantías, y cada una responde una pregunta distinta. La Garantía de Acceso obliga a FONASA y a las ISAPRES a asegurar la prestación a todo beneficiario que cumpla los criterios de edad, etapa clínica o condición de salud que fija el decreto para cada uno de los problemas de salud del régimen.' },
          { t: 'No cumplir el criterio no es una vulneración', d: 'Es quedar fuera del decreto',
            say: 'Y ojo con un matiz que se pregunta: si un paciente no cumple el criterio, por ejemplo por edad, eso no es que el sistema le esté fallando. Simplemente ese problema de salud, para ese paciente, no está garantizado por decreto, y se resuelve por la cobertura general de su seguro.' },
          { t: 'Ejemplo: colecistectomía preventiva', d: 'Garantizada solo entre treinta y cinco y cuarenta y nueve años',
            say: 'Un ejemplo clásico es la colecistectomía preventiva por colelitiasis, garantizada solo entre los treinta y cinco y los cuarenta y nueve años. Fuera de ese rango, la cirugía se sigue haciendo, pero por la vía general, sin los plazos ni el copago regulado del GES.' },
        ] },
        { title: 'Garantía de Oportunidad', tag: 'Plazos máximos legales', kind: 'alert', items: [
          { t: 'Plazo para cada etapa', d: 'Sospecha, confirmación, tratamiento y seguimiento',
            say: 'La Garantía de Oportunidad fija plazos máximos y perentorios para cada etapa de la atención: la sospecha diagnóstica, la confirmación, el tratamiento y el seguimiento a largo plazo.' },
          { t: 'Es la garantía que más se reclama', d: 'Porque tiene un procedimiento legal detrás',
            say: 'De las cuatro, es la que tiene el procedimiento de reclamo más preguntado, y lo vamos a ver en detalle en un momento, porque tiene horas y días exactos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Las cuatro garantías',
      title: 'Protección Financiera y Calidad',
      cards: [
        { title: 'Garantía de Protección Financiera', tag: 'Copago máximo', kind: 'pharma', items: [
          { t: 'Copago tope de veinte por ciento', d: 'Cero por ciento en FONASA por el Copago Cero',
            say: 'La Garantía de Protección Financiera fija cuánto puede copagar el afiliado. En FONASA es cero por ciento, por el Copago Cero que ya vimos. En ISAPRE o en prestadores privados, el coaseguro máximo es de veinte por ciento del valor de la canasta arancelada.' },
          { t: 'Deducible anual en ISAPRE', d: 'Veintinueve cotizaciones o ciento veintidós UF por evento',
            say: 'Y en ISAPRE existe además un deducible máximo anual por problema de salud: veintinueve cotizaciones mensuales legales, o ciento veintidós unidades de fomento si eso resulta menor, por cada evento.' },
          { t: 'Tope familiar acumulado', d: 'Cuarenta y tres cotizaciones o ciento ochenta y un UF',
            say: 'Y hay un tope acumulado para toda la familia, de cuarenta y tres cotizaciones o ciento ochenta y un unidades de fomento. Superado ese deducible, la ISAPRE cubre el cien por ciento restante del evento. Es un dato numérico que se pregunta, así que no lo memorices como un detalle menor.' },
        ] },
        { title: 'Garantía de Calidad', tag: 'Prestadores acreditados', kind: 'criteria', items: [
          { t: 'Prestador institucional acreditado', d: 'Registrado ante la Superintendencia de Salud',
            say: 'Y la Garantía de Calidad exige que la prestación GES se otorgue solo por profesionales inscritos en el Registro Nacional de Prestadores Individuales, y por establecimientos institucionales debidamente acreditados en calidad y seguridad del paciente.' },
          { t: 'Si el prestador no está acreditado', d: 'Se vulnera esta garantía, aunque el trato sea bueno',
            say: 'Fíjate en la trampa clásica: si un hospital o una clínica sin acreditación otorga una prestación GES, se vulnera la Garantía de Calidad, aunque la atención clínica en sí misma haya sido correcta. La calidad, aquí, es un requisito del prestador, no solo del resultado.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Obligación del médico',
      title: 'El Formulario de Constancia GES',
      cards: [
        { title: 'Deber legal del médico', tag: 'No es opcional', kind: 'alert', items: [
          { t: 'Ante sospecha o confirmación', d: 'Se informa por escrito y se firma con el paciente',
            say: 'Y aquí hay una obligación que recae directamente sobre ti como médico. Ante la sospecha o la confirmación de cualquiera de los problemas de salud del régimen, tienes el deber legal de informar al paciente y dejar constancia escrita, firmada por ambos, en el Formulario de Constancia de Información al Paciente GES.' },
          { t: 'No notificar es una falta grave', d: 'Sancionable por la Superintendencia de Salud',
            say: 'Si no lo haces, es una falta grave, sancionable administrativamente por la Superintendencia de Salud. No es un trámite administrativo cualquiera: es un deber médico legal.' },
        ] },
        { title: 'El paciente decide', tag: 'Puede renunciar', kind: 'normal', items: [
          { t: 'Aceptar el GES o renunciar por escrito', d: 'Si renuncia, pierde plazo y copago regulado',
            say: 'Con el formulario en mano, el paciente es libre de acogerse al GES o de renunciar expresamente por escrito para atenderse fuera de esa red. Pero si renuncia, pierde las garantías de plazo y de copago regulado que acabamos de ver.' },
          { t: 'Qué debe contener el formulario', d: 'El problema exacto entre los ochenta y siete, y ambas firmas',
            say: 'Y fíjate en lo que exige el formulario para ser válido: la identificación exacta del problema de salud, dentro de los ochenta y siete problemas vigentes, porque de eso depende la canasta y el plazo que corresponde. Va firmado por el médico tratante y por el paciente o su representante, y queda una copia en la ficha clínica y otra para el usuario. Ante una fiscalización, ese papel es la prueba de que cumpliste tu deber.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Garantía de Oportunidad vencida',
      title: '¿Qué pasa si se vence el plazo?',
      nodes: [
        { id: 'ven', col: 0, row: 1, k: 'start', t: 'Plazo legal vencido', s: 'Garantía de Oportunidad incumplida' },
        { id: 'rec', col: 1, row: 1, k: 'mech', t: 'Reclamo del paciente', s: 'Por escrito ante FONASA o ISAPRE' },
        { id: 'seg', col: 2, row: 0, k: 'good', t: 'Segundo prestador', s: 'El asegurador lo designa' },
        { id: 'ate', col: 3, row: 0, k: 'effect', t: 'Atención otorgada', s: 'Por el segundo prestador' },
        { id: 'sup', col: 2, row: 2, k: 'alert', t: 'Superintendencia de Salud', s: 'Si el asegurador o el segundo prestador incumplen' },
        { id: 'ter', col: 3, row: 2, k: 'good', t: 'Tercer prestador', s: 'A costo del asegurador incumplidor' },
      ],
      edges: [
        { from: 'ven', to: 'rec' }, { from: 'rec', to: 'seg' }, { from: 'seg', to: 'ate' },
        { from: 'seg', to: 'sup', label: 'si no designa o incumple' }, { from: 'sup', to: 'ter' },
      ],
      steps: [
        { show: ['ven'], note: 'El punto de partida es el vencimiento',
          say: 'Ahora el procedimiento que más se pregunta de esta clase: qué pasa cuando se vence el plazo de la Garantía de Oportunidad. Todo empieza el día en que ese plazo se cumple sin que la prestación se haya otorgado.' },
        { show: ['rec'], note: 'Dentro de treinta días',
          say: 'El paciente, o su representante, presenta un reclamo formal por escrito ante su asegurador, que es FONASA o su ISAPRE, dentro de los treinta días siguientes al vencimiento.' },
        { show: ['seg'], note: 'Cuarenta y ocho horas hábiles, sin excepción',
          say: 'Y aquí está el plazo más preguntado de todo el tema: el asegurador tiene cuarenta y ocho horas hábiles, un plazo estricto e improrrogable, para designar un segundo prestador, público o privado en convenio.' },
        { show: ['ate'], note: 'Diez días corridos, hasta treinta en casos complejos',
          say: 'Ese segundo prestador tiene hasta diez días corridos para otorgar la prestación, plazo que puede ampliarse a treinta días en prestaciones electivas complejas.' },
        { show: ['sup'], note: 'La instancia final',
          say: 'Si el asegurador no designa a nadie en esas cuarenta y ocho horas, o si el segundo prestador tampoco cumple, el paciente acude a la Superintendencia de Salud.' },
        { show: ['ter'], note: 'Sin costo adicional para el paciente',
          say: 'La Superintendencia designa un tercer prestador en otras cuarenta y ocho horas hábiles, y el costo queda a cargo del asegurador que incumplió, nunca del paciente. Ese es el orden completo: reclamo, segundo prestador, y si falla, Superintendencia con tercer prestador.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos las cuatro garantías en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Qué garantía se vulnera en cada escenario',
      head: ['Escenario', 'Garantía vulnerada', 'Error frecuente'],
      rows: [
        { cells: ['Prestador sin acreditación otorga cirugía GES', 'Garantía de Calidad', 'Decir que no hay vulneración porque la cirugía salió bien'],
          say: 'Repasemos con una tabla de escenarios. Un prestador sin acreditación que otorga una cirugía GES vulnera la Garantía de Calidad. El error es pensar que, como la cirugía salió bien, no pasó nada.' },
        { cells: ['Paciente de 58 años sin criterio etario GES', 'Ninguna: no cumple Garantía de Acceso', 'Decir que se vulneró la Garantía de Oportunidad'],
          say: 'Un paciente que no cumple el criterio de edad del decreto no tiene una garantía vulnerada: simplemente queda fuera de la Garantía de Acceso para ese problema. Confundirlo con un vencimiento de plazo es el error típico.' },
        { cells: ['Plazo de cirugía GES vencido en el hospital', 'Garantía de Oportunidad', 'Ir directo a un recurso judicial'],
          say: 'Si el plazo de una cirugía garantizada se vence, es la Garantía de Oportunidad, y la vía es el reclamo administrativo ante el asegurador, no un recurso judicial directo.' },
        { cells: ['ISAPRE cobra copago de diez por ciento en prestación GES', 'Ninguna: está dentro del tope de veinte por ciento', 'Decir que se vulneró la Garantía Financiera'],
          say: 'Y si la ISAPRE cobra un copago de diez por ciento en una prestación GES, no hay vulneración, porque el tope legal es veinte por ciento. La trampa es asumir que cualquier copago ya es un incumplimiento.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un paciente de 46 años, afiliado a FONASA, tiene diagnóstico confirmado de hernia del núcleo pulposo lumbar con indicación quirúrgica garantizada por GES. El plazo legal para la cirugía venció hace 20 días y el hospital aún no agenda la intervención.',
      question: '¿Cuál es la conducta correcta que debe seguir el paciente?',
      options: [
        { letter: 'A', text: 'Presentar un reclamo formal por escrito ante FONASA por incumplimiento de la Garantía de Oportunidad' },
        { letter: 'B', text: 'Solicitar directamente a la Superintendencia de Salud que le designe un tercer prestador' },
        { letter: 'C', text: 'Renunciar al GES para operarse por su cuenta y pedir reembolso posterior' },
        { letter: 'D', text: 'Esperar sin plazo definido, ya que la garantía de oportunidad no aplica a cirugías electivas' },
        { letter: 'E', text: 'Exigir al director del hospital una compensación económica por cada día de atraso' },
      ],
      correct: 'A',
      explanation: 'Ante el vencimiento de la Garantía de Oportunidad, el primer paso es el reclamo formal ante el asegurador, FONASA en este caso, dentro de 30 días. Recién si FONASA no designa un segundo prestador en 48 horas, o este también incumple, corresponde acudir a la Superintendencia de Salud.',
      say: {
        stem: 'Vamos con un caso. Paciente de cuarenta y seis años, afiliado a FONASA, con una hernia del núcleo pulposo lumbar y cirugía indicada, garantizada por GES. El plazo legal para operarlo se venció hace veinte días y el hospital todavía no agenda la intervención.',
        question: '¿Cuál es la conducta correcta que debe seguir el paciente?',
        options: 'Las alternativas: reclamar por escrito ante FONASA, pedir directamente a la Superintendencia un tercer prestador, renunciar al GES y operarse por su cuenta, esperar sin plazo porque la garantía no aplicaría a cirugías electivas, o exigir una compensación económica diaria. Piénsalo.',
        answer: 'Es la A. El procedimiento tiene un orden, y este caso está en el primer paso: el plazo se venció, así que corresponde el reclamo formal ante el asegurador, en este caso FONASA. Ir directo a la Superintendencia es la trampa de saltarse un paso: eso solo procede si FONASA no responde en cuarenta y ocho horas o si el segundo prestador también falla. Y renunciar al GES le haría perder justamente la protección financiera que está reclamando.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 18',
      stem: '¿A qué tipo de garantía corresponde el registro de los profesionales de la salud en el Registro de Prestadores Individuales, llevado por la Superintendencia de Salud, en contexto del programa de Garantías Explícitas de Salud (GES)?',
      question: '¿Cuál es la garantía correcta?',
      options: [
        { letter: 'A', text: 'Garantía de acceso universal' },
        { letter: 'B', text: 'Garantía de protección financiera' },
        { letter: 'C', text: 'Garantía de calidad en la atención' },
        { letter: 'D', text: 'Garantía de oportunidad en la atención' },
        { letter: 'E', text: 'Garantía de acceso a la información' },
      ],
      correct: 'C',
      explanation: 'El registro de prestadores individuales y la acreditación de prestadores institucionales ante la Superintendencia de Salud son el mecanismo de exigibilidad de la Garantía de Calidad. El acceso a la información no forma parte de las cuatro garantías GES.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Preguntan a qué garantía corresponde el registro de los profesionales de la salud en el Registro de Prestadores Individuales, que lleva la Superintendencia de Salud, dentro del programa GES.',
        question: '¿Cuál es la garantía correcta?',
        options: 'Las opciones: garantía de acceso universal, de protección financiera, de calidad en la atención, de oportunidad en la atención, o de acceso a la información.',
        answer: 'Es la C, la Garantía de Calidad. El registro y la acreditación son exactamente el mecanismo que vimos: solo prestadores registrados y acreditados pueden otorgar prestaciones GES. Y fíjate en la opción E, acceso a la información: es una trampa que suena parecida, pero esa no es una de las cuatro garantías GES, sino un derecho distinto, de la ley de Derechos y Deberes del Paciente.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Un paciente de 64 años con diagnóstico confirmado de artrosis de cadera con indicación de endoprótesis total (Problema GES N.° 37) tiene su plazo legal de tratamiento quirúrgico vencido por más de 15 días en el hospital público correspondiente.',
      question: '¿Cuál es la conducta correcta que debe seguir el paciente?',
      options: [
        { letter: 'A', text: 'Presentar un reclamo formal por incumplimiento de Garantía de Oportunidad ante FONASA, que dispondrá de 48 horas para designar un segundo prestador' },
        { letter: 'B', text: 'Acudir directamente a un tribunal civil para interponer un recurso de protección contra el hospital' },
        { letter: 'C', text: 'Operarse en una clínica privada de forma autónoma y exigir el reembolso del 100% de la cuenta' },
        { letter: 'D', text: 'Ingresar una solicitud de mediación prejudicial ante el Consejo de Defensa del Estado' },
        { letter: 'E', text: 'Exigir al director del hospital una compensación económica diaria por cada día de retraso' },
      ],
      correct: 'A',
      explanation: 'Ante el vencimiento del plazo de la Garantía de Oportunidad, la Ley 19.966 establece la vía administrativa: reclamo ante el asegurador, que tiene 48 horas hábiles para designar un segundo prestador que otorgue la prestación dentro de 10 días corridos.',
      say: {
        stem: 'Una más del banco, sobre la misma garantía. Paciente de sesenta y cuatro años con artrosis de cadera y una endoprótesis total indicada, con el plazo legal de la cirugía vencido por más de quince días en el hospital público.',
        question: '¿Cuál es la conducta correcta que debe seguir el paciente?',
        options: 'Las opciones: reclamar por incumplimiento de Garantía de Oportunidad ante FONASA, ir directo a un tribunal civil, operarse por su cuenta en una clínica privada y pedir reembolso, pedir una mediación ante el Consejo de Defensa del Estado, o exigir una compensación diaria. Piénsalo.',
        answer: 'Es la A, el mismo procedimiento que ya conoces: reclamo ante el asegurador, y cuarenta y ocho horas para el segundo prestador. El tribunal civil y la mediación ante el Consejo de Defensa del Estado son para otro tipo de conflicto, como una demanda por mala praxis, no para activar una garantía GES vencida. Y la ley no contempla compensaciones económicas diarias por el atraso.' },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Las cuatro garantías', tag: 'Cada una responde algo distinto', kind: 'key', items: [
          { t: 'Acceso: si cumples el criterio, entras', d: 'Oportunidad: los plazos',
            say: 'Cerremos con las reglas de oro. Acceso es si cumples el criterio del decreto; Oportunidad son los plazos de cada etapa.' },
          { t: 'Financiera: el copago tope', d: 'Calidad: el prestador acreditado',
            say: 'Protección Financiera es el tope de copago; Calidad es que el prestador esté acreditado y registrado. Cuando el examen te dé un escenario, pregúntate cuál de las cuatro preguntas responde.' },
        ] },
        { title: 'El médico', tag: 'Deber legal', kind: 'alert', items: [
          { t: 'Formulario GES obligatorio', d: 'Ante sospecha o confirmación, sin excepción',
            say: 'Todo médico debe informar y dejar constancia en el Formulario GES ante la sospecha o confirmación de un problema del régimen, sin excepción.' },
        ] },
        { title: 'Si se vence el plazo', tag: 'El orden exacto', kind: 'pharma', items: [
          { t: 'Reclamo, luego segundo prestador', d: 'Cuarenta y ocho horas, luego Superintendencia',
            say: 'Y si se vence el plazo: reclamo ante el asegurador, cuarenta y ocho horas para un segundo prestador, y si eso también falla, la Superintendencia designa un tercero. Si te llevas una sola idea de hoy: cada garantía responde una pregunta distinta, y el reclamo por oportunidad sigue siempre ese mismo orden. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Las cuatro garantías: cuál se aplica',
    root: N(
      'start', 'Problema de salud GES en un paciente', 'Cuál garantía responde la pregunta',
      'Ante un escenario GES, la pregunta clave es cuál de las cuatro garantías está en juego. Vamos por partes.',
      ['', N(
        'q', '¿Qué pregunta el escenario?', 'Elige la garantía según lo que falla',
        'Pregúntate qué es lo que está en duda: si el paciente entra al régimen, si se cumplió el plazo, cuánto debe pagar, o si el prestador es idóneo.',
        ['¿Cumple los criterios del decreto?', N(
          'ok', 'Garantía de Acceso', 'Si cumple edad y condición, entra al régimen',
          'Si la duda es si el paciente cumple la edad o la condición clínica del decreto, es la Garantía de Acceso. Si no cumple, no hay vulneración: simplemente ese problema no está garantizado para él.',
        )],
        ['¿Se venció un plazo?', N(
          'ok', 'Garantía de Oportunidad', 'Reclamo, segundo prestador, luego Superintendencia',
          'Si lo que falló es un plazo de diagnóstico, tratamiento o seguimiento, es la Garantía de Oportunidad, y se activa el reclamo: cuarenta y ocho horas para el segundo prestador, y si falla, la Superintendencia designa un tercero.',
        )],
        ['¿Cuánto debe pagar?', N(
          'ok', 'Garantía de Protección Financiera', 'Tope de copago y deducible anual',
          'Si la pregunta es sobre plata, es la Garantía de Protección Financiera: copago cero en FONASA, tope de veinte por ciento en ISAPRE, con un deducible anual máximo por evento y por familia.',
        )],
        ['¿El prestador está acreditado?', N(
          'ok', 'Garantía de Calidad', 'Prestador registrado y establecimiento acreditado',
          'Y si la duda es sobre el prestador mismo, es la Garantía de Calidad: solo entrega la prestación quien está registrado o acreditado ante la Superintendencia de Salud.',
        )],
      )],
    ),
  },
};
