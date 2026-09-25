// Clase 21.11 — guion docente escrito a mano (ver gastro-01.cjs, gastro-02.cjs y sp-08.cjs para el formato).
// Fuente: books/scripts/dataset_saludpublica.cjs (sp-11).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'sp-11',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuatro principios, un consentimiento que se construye conversando, y el límite exacto de la autonomía cuando hay un menor de por medio',
      say: 'Bienvenidos. Hoy vemos bioética clínica: los cuatro principios de Beauchamp y Childress, el consentimiento informado, y el dilema que más se repite en el EUNACOM, el paciente que rechaza una transfusión. Es un tema de máxima rentabilidad, porque casi cada examen trae una pregunta ético clínica, y casi siempre se resuelve con la misma idea: ¿es un adulto competente, o hay un menor de por medio? Partamos por los principios.',
    },

    {
      type: 'points',
      kicker: 'Los cuatro principios',
      title: 'El marco de Beauchamp y Childress',
      cards: [
        { title: 'Autonomía', tag: 'Decidir sobre el propio cuerpo', kind: 'key', items: [
          { t: 'Respetar la autodeterminación', d: 'De la persona competente y bien informada',
            say: 'El primer principio es la autonomía: la obligación de respetar la capacidad de una persona competente para decidir sobre su propio cuerpo, su salud y su vida, según sus propios valores. Se hace concreta a través del consentimiento informado, y también del derecho a rechazar un tratamiento.' },
        ] },
        { title: 'No maleficencia y beneficencia', tag: 'No dañar, y hacer el bien', kind: 'normal', items: [
          { t: 'No maleficencia: primero, no dañar', d: 'Tiene prioridad jerárquica sobre la beneficencia',
            say: 'La no maleficencia es la obligación de no causar un daño intencional, negligente o innecesario. Y aquí hay un detalle que se pregunta: la no maleficencia tiene prioridad jerárquica por sobre la beneficencia.' },
          { t: 'Beneficencia: procurar el mayor bien', d: 'Ponderando siempre el beneficio contra el riesgo',
            say: 'La beneficencia es el deber de procurar el mayor bien posible para el paciente, ponderando siempre el beneficio esperado contra el riesgo o la carga de la intervención.' },
        ] },
        { title: 'Justicia', tag: 'Distribuir recursos sin discriminar', kind: 'criteria', items: [
          { t: 'Distribución equitativa de recursos escasos', d: 'Sin discriminación económica, social o de género',
            say: 'Y la justicia distributiva es la obligación de repartir de forma equitativa los beneficios, los riesgos y los recursos de salud, sin discriminar por motivos económicos, sociales o de género.' },
          { t: 'Se pone a prueba en la escasez', d: 'Triage de desastres, camas críticas, acceso GES',
            say: 'Piensa en el triage de un desastre masivo, o en la priorización de camas críticas cuando faltan: ahí es exactamente donde este principio se pone a prueba, porque obliga a decidir con criterios transparentes y no arbitrarios, y no según quién llegó primero o quién tiene más recursos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Consentimiento informado',
      title: 'Un proceso dialógico, no una firma',
      cards: [
        { title: 'Cuatro requisitos de validez', tag: 'Los cuatro elementos', kind: 'key', items: [
          { t: 'Información y comprensión', d: 'Diagnóstico, riesgos, beneficios y alternativas, entendidos',
            say: 'El consentimiento informado no es un trámite ni una firma en un papel, es un proceso de conversación continua entre el médico y el paciente. Exige cuatro elementos: información adecuada sobre el diagnóstico, el pronóstico, los riesgos y las alternativas; y comprensión, que el paciente realmente haya entendido eso.' },
          { t: 'Voluntariedad y capacidad', d: 'Decisión libre, y aptitud para ponderar las consecuencias',
            say: 'Voluntariedad, que la decisión sea libre, sin coacción, manipulación ni presión indebida de nadie; y capacidad, que la persona tenga la aptitud mental para ponderar la información y prever las consecuencias de su propia decisión. Si falta cualquiera de los cuatro, el consentimiento no es válido, aunque exista una firma en el papel.' },
        ] },
        { title: 'Excepciones legales', tag: 'Ley 20.584', kind: 'alert', items: [
          { t: 'Urgencia médica vital', d: 'Paciente inconsciente, sin tiempo para pedir el consentimiento',
            say: 'Y hay dos excepciones legales al consentimiento informado. La primera es la urgencia médica vital: cuando no intervenir de inmediato implica un riesgo cierto de muerte o de secuela grave, en un paciente inconsciente o incapaz, y no hay tiempo para obtener el consentimiento de su representante.' },
          { t: 'Razones de salud pública', d: 'Cuarentena o aislamiento obligatorio',
            say: 'La segunda es la salud pública: cuando no intervenir pone en riesgo a la colectividad, como el aislamiento obligatorio de un paciente con una enfermedad de alto riesgo de contagio.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'El dilema que más se pregunta',
      title: 'Rechazo de transfusión: adulto versus menor de edad',
      nodes: [
        { id: 'rec', col: 0, row: 1, k: 'start', t: 'Rechazo de transfusión', s: 'Por convicción religiosa' },
        { id: 'adu', col: 1, row: 0, k: 'q', t: 'Adulto competente', s: 'Lúcido, informado, capaz' },
        { id: 'men', col: 1, row: 2, k: 'q', t: 'Menor de edad', s: 'Riesgo vital inminente' },
        { id: 'res', col: 2, row: 0, k: 'good', t: 'Se respeta el rechazo', s: 'Constancia escrita y firmada' },
        { id: 'alt', col: 3, row: 0, k: 'good', t: 'Alternativas médicas', s: 'Expansores, hierro, ácido tranexámico' },
        { id: 'tra', col: 2, row: 2, k: 'risk', t: 'Se transfunde igual', s: 'No maleficencia sobre autonomía de los padres' },
        { id: 'jud', col: 3, row: 2, k: 'refer', t: 'Medida de protección', s: 'Tribunal de familia, después de estabilizar' },
      ],
      edges: [
        { from: 'rec', to: 'adu' }, { from: 'rec', to: 'men' },
        { from: 'adu', to: 'res' }, { from: 'res', to: 'alt' },
        { from: 'men', to: 'tra' }, { from: 'tra', to: 'jud' },
      ],
      steps: [
        { show: ['rec'], note: 'El caso clásico: testigo de Jehová que rechaza hemoderivados',
          say: 'El dilema que garantiza pregunta es el rechazo de una transfusión por convicción religiosa, típicamente un testigo de Jehová. Y todo se resuelve con una sola pregunta: ¿quién está rechazando, un adulto competente, o hay un menor de edad de por medio?' },
        { show: ['adu', 'res', 'alt'], note: 'La autonomía del adulto es prácticamente absoluta',
          say: 'Si es un adulto lúcido, informado y capaz, tienes que respetar su decisión, aunque implique el riesgo de morir. Dejas constancia escrita y firmada en la ficha clínica, y ofreces todas las alternativas médicas disponibles: expansores de volumen, hierro endovenoso, ácido tranexámico, hemostasia endoscópica, lo que corresponda. Pero no transfundes en contra de su voluntad.' },
        { show: ['men'], note: 'Los padres no pueden disponer de la vida del hijo',
          say: 'Pero si es un menor de edad con riesgo vital inminente, cambia todo. Los padres no tienen un derecho absoluto sobre la vida de su hijo: el principio de no maleficencia y el interés superior del niño se imponen por sobre la autonomía de los padres.' },
        { show: ['tra', 'jud'], note: 'Primero se salva la vida, después se pide el respaldo legal',
          say: 'El médico transfunde y opera de inmediato para salvar la vida, y recién después, o en paralelo, interpone una medida de protección ante el tribunal de familia, o un recurso de protección ante la Corte de Apelaciones, para respaldar jurídicamente lo ya hecho. Primero se salva la vida, después se pide el respaldo legal, nunca al revés.' },
      ],
    },

    {
      type: 'points',
      kicker: 'El doble efecto',
      title: 'Doble efecto: aliviar el dolor, no provocar la muerte',
      cards: [
        { title: 'Cuándo se aplica', tag: 'Cuidados paliativos en fase terminal', kind: 'key', items: [
          { t: 'Opioides a dosis crecientes', d: 'Para el dolor refractario en la agonía',
            say: 'El principio del doble efecto justifica dar opioides o sedantes en dosis crecientes a un paciente terminal en agonía, con dolor refractario, aunque eso conlleve el riesgo de deprimir la respiración o acortar la vida.' },
          { t: 'La intención es aliviar, nunca matar', d: 'Ese es el punto que decide todo',
            say: 'Y lo que decide todo es la intención: el acto tiene que ser bueno en sí mismo, aliviar un sufrimiento intolerable, la intención exclusiva tiene que ser ese alivio, y el efecto bueno no se puede conseguir a través del efecto malo. Tiene que existir además una proporción razonable entre la gravedad del síntoma y el riesgo del fármaco.' },
        ] },
        { title: 'La diferencia con la eutanasia', tag: 'La pregunta clave del examen', kind: 'alert', items: [
          { t: 'Eutanasia: la intención es provocar la muerte', d: 'Doble efecto: la intención es calmar el dolor',
            say: 'Y esa es exactamente la diferencia con la eutanasia: en la eutanasia, la intención deliberada es provocar la muerte. En el doble efecto de los cuidados paliativos, la intención es únicamente mitigar el dolor, aunque la muerte se pueda adelantar como consecuencia no buscada. Por eso, cuando una pregunta describa opioides titulados por dolor refractario en agonía, la respuesta casi nunca es eutanasia, es doble efecto.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Comité de Ética Asistencial',
      title: 'El CEA: consultivo, nunca vinculante',
      cards: [
        { title: 'Qué es y para qué sirve', tag: 'Órgano multidisciplinario', kind: 'normal', items: [
          { t: 'Se convoca en casos de desacuerdo grave', d: 'Futilidad terapéutica, discrepancia familiar',
            say: 'Cuando hay una duda o un desacuerdo moral que no se resuelve, se puede consultar al Comité de Ética Asistencial: un grupo multidisciplinario, con médicos, enfermería, un abogado y miembros legos, que delibera y da una recomendación fundada.' },
          { t: 'Voluntad anticipada previa', d: 'Un documento notarial válido se respeta igual que la decisión actual',
            say: 'Y un escenario que se conecta con la autonomía: si el paciente dejó un documento notarial válido, expresando por anticipado qué tratamientos rechaza en caso de perder la capacidad de decidir, ese documento se respeta igual que si el paciente lo estuviera diciendo en este momento.' },
        ] },
        { title: 'Su límite legal', tag: 'La decisión sigue siendo del médico', kind: 'alert', items: [
          { t: 'Dictamen consultivo, no vinculante', d: 'El médico tratante mantiene la responsabilidad final',
            say: 'Pero ojo con este detalle, porque se pregunta directo: el dictamen del comité es estrictamente consultivo, no vinculante. La responsabilidad legal final sigue siendo del médico tratante, no del comité.' },
          { t: 'Nunca demora una urgencia vital', d: 'La reanimación urgente prima sobre cualquier trámite',
            say: 'Y una urgencia vital nunca se demora esperando al comité: la reanimación siempre prima sobre cualquier trámite de deliberación ética. El comité es para pensar con calma un caso difícil, no para autorizar lo que ya es una emergencia.' },
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
      title: 'Conducta según quién rechaza el tratamiento',
      head: ['Escenario', 'Conducta obligatoria', 'Fundamento'],
      rows: [
        { cells: ['Adulto lúcido y capaz que rechaza', 'Respetar; dejar constancia firmada', 'Prevalece la autonomía, Ley 20.584'],
          say: 'Repasemos con la tabla final. Adulto lúcido y capaz que rechaza un tratamiento: respetas su decisión y dejas constancia firmada. Prevalece la autonomía.' },
        { cells: ['Menor de edad en riesgo vital', 'Transfundir u operar de inmediato', 'Interés superior del niño y derecho a la vida'],
          say: 'Menor de edad en riesgo vital, aunque los padres se nieguen: transfundes u operas de inmediato. Prevalece el interés superior del niño.' },
        { cells: ['Adulto inconsciente, urgencia vital', 'Actuar de inmediato', 'Consentimiento presunto, excepción de urgencia'],
          say: 'Adulto inconsciente en una urgencia vital, sin voluntad conocida: actúas de inmediato bajo consentimiento presunto.' },
        { cells: ['Dolor refractario en agonía', 'Titular opioides a dosis plena', 'Doble efecto, la intención es aliviar'],
          say: 'Y dolor refractario en fase de agonía: titulas opioides a dosis plena bajo el principio del doble efecto, porque la intención es aliviar, no provocar la muerte.' },
        { cells: ['Adulto con voluntad anticipada', 'Respetar la directriz ya formalizada', 'Expresión autónoma previa, válida'],
          say: 'Y si el adulto dejó una voluntad anticipada en un documento notarial válido, respetas esa directriz aunque el paciente ya no pueda repetirla, porque es una expresión autónoma que se formalizó antes.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Niño de 7 años politraumatizado ingresa con shock hipovolémico grado IV por rotura esplénica y hemoperitoneo crítico, hemoglobina de 4,2. El cirujano indica laparotomía urgente y transfusión inmediata. Ambos padres, testigos de Jehová, prohíben la transfusión de sangre a su hijo por motivos religiosos.',
      question: '¿Cuál es la conducta médica y médico-legal correcta?',
      options: [
        { letter: 'A', text: 'Respetar la decisión de los padres y no transfundir' },
        { letter: 'B', text: 'Transfundir y operar de inmediato, e interponer una medida de protección' },
        { letter: 'C', text: 'Esperar la autorización de un juez antes de intervenir' },
        { letter: 'D', text: 'Solicitar una segunda opinión de otro cirujano antes de decidir' },
        { letter: 'E', text: 'Convocar al Comité de Ética Asistencial antes de intervenir' },
      ],
      correct: 'B',
      explanation: 'Ante un menor con riesgo vital inminente, la autonomía de los padres se subordina al derecho a la vida y al interés superior del niño. El médico debe transfundir y operar de inmediato, y recién después interponer una medida de protección ante el tribunal de familia para respaldar jurídicamente el procedimiento; ni esperar a un juez ni convocar al comité de ética son opciones válidas cuando la vida corre riesgo inmediato.',
      say: {
        stem: 'Vamos con un caso. Un niño de siete años politraumatizado ingresa con shock hipovolémico grave por rotura del bazo, con hemoglobina de cuatro coma dos. El cirujano indica cirugía urgente y transfusión inmediata. Ambos padres, testigos de Jehová, prohíben la transfusión de sangre a su hijo por motivos religiosos.',
        question: '¿Cuál es la conducta médica y médico-legal correcta?',
        options: 'Las opciones: respetar la decisión de los padres y no transfundir, transfundir y operar de inmediato e interponer una medida de protección, esperar la autorización de un juez, pedir una segunda opinión, o convocar al comité de ética antes de intervenir. Piénsalo.',
        answer: 'Es la B. Este es un menor con riesgo vital inminente, y los padres no tienen un derecho absoluto sobre su vida. El médico transfunde y opera de inmediato para salvarlo, y recién después interpone la medida de protección para respaldar legalmente lo actuado. Esperar a un juez o al comité de ética sería dejar morir al niño mientras se completa un trámite, y eso es justamente lo que la ley busca evitar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'Pregunta del banco EUNACOM',
      stem: 'Paciente de 45 años, lúcido y orientado, ingresa a urgencias con hemorragia digestiva alta grave por úlcera péptica sangrante, con presión de 85 sobre 50 y hemoglobina de 5,8. El paciente manifiesta de forma clara y reiterada que es testigo de Jehová y rechaza categóricamente cualquier transfusión de sangre, aceptando el riesgo vital de su decisión.',
      question: '¿Cuál es la conducta correcta del médico tratante?',
      options: [
        { letter: 'A', text: 'Respetar la voluntad del paciente, dejar constancia escrita y firmada, e iniciar alternativas como cristaloides y expansores' },
        { letter: 'B', text: 'Sedarlo para transfundirlo de emergencia bajo el principio de beneficencia' },
        { letter: 'C', text: 'Solicitar la intervención de la fuerza pública para obligarlo a aceptar la transfusión' },
        { letter: 'D', text: 'Declararlo en incompetencia mental transitoria por la hipotensión, para transfundirlo' },
        { letter: 'E', text: 'Rechazar la atención médica y darle el alta disciplinaria' },
      ],
      correct: 'A',
      explanation: 'Un adulto lúcido, informado y capaz tiene el derecho legal y ético a rechazar cualquier tratamiento, incluso con riesgo de muerte. El médico respeta la decisión, deja constancia firmada en la ficha con testigos, y ofrece el máximo esfuerzo con alternativas no objetadas; sedar al paciente para forzar la transfusión, o declararlo incompetente sin fundamento clínico, vulneran gravemente su autonomía.',
      say: {
        stem: 'Esta es una pregunta representativa del banco EUNACOM. Un paciente de cuarenta y cinco años, lúcido y orientado, ingresa a urgencias con una hemorragia digestiva alta grave por una úlcera sangrante, con presión ochenta y cinco sobre cincuenta y hemoglobina de cinco coma ocho. El paciente dice de forma clara y reiterada que es testigo de Jehová, y rechaza categóricamente cualquier transfusión, aceptando el riesgo de morir.',
        question: '¿Cuál es la conducta correcta del médico tratante?',
        options: 'Las opciones: respetar su voluntad, dejar constancia firmada, e iniciar alternativas médicas; sedarlo para transfundirlo de emergencia; pedir a la fuerza pública que lo obligue; declararlo incompetente por la hipotensión; o rechazar la atención y darle el alta. Piénsalo.',
        answer: 'Es la A. Es un adulto lúcido, informado y capaz, así que tiene el derecho legal y ético a rechazar cualquier tratamiento, incluso con riesgo de muerte. Lo que corresponde es respetar su decisión, dejar constancia firmada con testigos, y ofrecer el máximo esfuerzo con las alternativas que sí acepta. Sedarlo para forzarlo, o declararlo incompetente solo porque está hipotenso pero razona con claridad, son formas de agresión a su autonomía, no de buena práctica médica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'Pregunta del banco EUNACOM',
      stem: 'Médico paliativista atiende a una paciente de 78 años con cáncer de páncreas metastásico en fase de agonía, con dolor irruptivo refractario de intensidad máxima y agitación terminal severa. Decide titular una infusión continua de morfina y midazolam a dosis analgésicas plenas para controlar el sufrimiento, sabiendo que la medicación podría secundariamente acelerar una depresión respiratoria.',
      question: '¿Bajo qué principio bioético se justifica esta conducta médica?',
      options: [
        { letter: 'A', text: 'Principio del doble efecto' },
        { letter: 'B', text: 'Principio de autonomía paternalista' },
        { letter: 'C', text: 'Principio de eutanasia pasiva voluntaria' },
        { letter: 'D', text: 'Principio de justicia conmutativa' },
        { letter: 'E', text: 'Principio de no maleficencia inversa' },
      ],
      correct: 'A',
      explanation: 'El principio del doble efecto justifica una acción con un efecto bueno buscado, aliviar el dolor refractario en agonía, y un efecto malo no buscado, el riesgo de depresión respiratoria, siempre que el acto sea bueno en sí mismo, la intención exclusiva sea el alivio, y el efecto positivo no se consiga a través del negativo. No es eutanasia, porque la intención del médico nunca es provocar la muerte.',
      say: {
        stem: 'Otra pregunta representativa del banco EUNACOM. Un médico paliativista atiende a una paciente de setenta y ocho años con cáncer de páncreas metastásico en fase de agonía, con dolor irruptivo refractario de intensidad máxima y agitación terminal severa. Decide titular una infusión continua de morfina y midazolam a dosis analgésicas plenas para controlar el sufrimiento, sabiendo que la medicación podría acelerar secundariamente una depresión respiratoria.',
        question: '¿Bajo qué principio bioético se justifica esta conducta médica?',
        options: 'Las opciones: principio del doble efecto, autonomía paternalista, eutanasia pasiva voluntaria, justicia conmutativa, o no maleficencia inversa.',
        answer: 'Es la A, el principio del doble efecto. Hay un efecto bueno que se busca, aliviar el dolor refractario, y un efecto malo que no se busca, el riesgo de depresión respiratoria, y eso es lícito porque el acto es bueno en sí mismo y la intención exclusiva es el alivio. No es eutanasia: en la eutanasia la intención es provocar la muerte, y acá la intención es exactamente lo contrario, calmar el sufrimiento.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La pregunta que ordena todo', tag: 'Adulto o menor', kind: 'key', items: [
          { t: 'Adulto competente: manda la autonomía', d: 'Aunque implique riesgo de muerte',
            say: 'Cerremos con las reglas de oro. Si el que rechaza es un adulto competente, manda la autonomía, aunque implique un riesgo de muerte.' },
          { t: 'Menor con riesgo vital: manda la vida', d: 'Los padres no pueden disponer de ella',
            say: 'Si hay un menor de edad con riesgo vital, manda la no maleficencia y el derecho a la vida: los padres no pueden disponer de la vida de su hijo.' },
        ] },
        { title: 'Doble efecto y comité', tag: 'Dos ideas que se confunden fácil', kind: 'alert', items: [
          { t: 'Doble efecto: la intención es aliviar', d: 'Nunca provocar la muerte',
            say: 'El doble efecto se distingue de la eutanasia por la intención: aliviar el dolor, nunca provocar la muerte.' },
          { t: 'El CEA es consultivo, no vinculante', d: 'La decisión final es siempre del médico',
            say: 'Y el Comité de Ética Asistencial siempre es consultivo, nunca vinculante: la decisión final y la responsabilidad son del médico tratante. Si te llevas una sola idea de hoy: primero pregúntate quién decide, si es un adulto competente o hay un menor de por medio, y esa respuesta casi siempre te da la conducta correcta. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Decidir ante el rechazo de un tratamiento vital',
    root: N(
      'start', 'Un paciente o su representante rechaza un tratamiento vital', '¿Quién está decidiendo?',
      'La primera pregunta siempre es el estatus jurídico y cognitivo de quien rechaza.',
      ['Es un adulto lúcido y capaz', N(
        'q', '¿Está bien informado y decide libremente?', 'Verificar los cuatro requisitos',
        'Información, comprensión, voluntariedad y capacidad deben estar todos presentes.',
        ['Sí, cumple los cuatro requisitos', N(
          'ok', 'Se respeta la decisión', 'Constancia escrita y alternativas disponibles',
          'La autonomía del adulto competente prevalece, aunque implique un riesgo vital.',
        )],
        ['No está lúcido o hay coacción', N(
          'alert', 'El rechazo no es válido', 'Buscar representante legal o actuar por urgencia',
          'Sin capacidad o sin voluntariedad, la decisión no cumple los requisitos del consentimiento.',
        )],
      )],
      ['Es un menor de edad con riesgo vital', N(
        'q', '¿Los padres rechazan un tratamiento indispensable?', 'El límite de la patria potestad',
        'Los padres no tienen un derecho absoluto de disposición sobre la vida de sus hijos.',
        ['Sí, y hay riesgo vital inminente', N(
          'refer', 'Tratar de inmediato', 'Y luego interponer medida de protección',
          'Prevalece el interés superior del niño; después se solicita respaldo del tribunal de familia.',
        )],
        ['Es fase terminal con dolor refractario', N(
          'do', 'Aplicar el principio del doble efecto', 'Opioides a dosis plena, con intención de aliviar',
          'Es lícito si el acto es bueno, la intención es aliviar, y el efecto bueno no depende del malo.',
        )],
      )],
    ),
  },
};
