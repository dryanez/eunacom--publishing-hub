// Clase 4.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-18).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-18',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La cetoacidosis se cura con el pH, no con la glicemia, y la bomba se apaga después del pinchazo',
      say: 'Bienvenidos. Ya sabemos reanimar con suero, iniciar la insulina mirando el potasio y cuándo dar bicarbonato. Hoy cerramos el manejo de la crisis: cuándo se considera resuelta la cetoacidosis diabética, cuándo el estado hiperglicémico hiperosmolar, y cómo se pasa de la bomba a la insulina subcutánea sin que el paciente recaiga. Son dos preguntas típicas del examen, y ambas tienen una trampa muy concreta.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'La glicemia se corrige antes que la acidosis',
      nodes: [
        { id: 'ins', col: 0, row: 1, k: 'start', t: 'Insulina EV + suero', s: 'Tratamiento en curso' },
        { id: 'glu', col: 1, row: 0, k: 'effect', t: 'La glicemia baja rápido', s: 'En pocas horas' },
        { id: 'cet', col: 1, row: 2, k: 'mech', t: 'Los cetoácidos se van lento', s: 'El anion gap sigue abierto' },
        { id: 'tra', col: 2, row: 0, k: 'trap', t: 'Apagar la bomba por la glicemia', s: 'La cetoacidosis sigue activa' },
        { id: 'sg', col: 2, row: 2, k: 'good', t: 'Insulina + SG 5%', s: 'Glicemia en 150–200 mg/dL' },
        { id: 'res', col: 3, row: 2, k: 'good', t: 'Resolución', s: 'Lo define el ácido-base' },
      ],
      edges: [
        { from: 'ins', to: 'glu' }, { from: 'ins', to: 'cet' },
        { from: 'glu', to: 'tra', label: 'error' }, { from: 'cet', to: 'sg', label: 'correcto' },
        { from: 'sg', to: 'res' },
      ],
      steps: [
        { show: ['ins'], note: 'Dos problemas que se corrigen a distinta velocidad',
          say: 'Partamos por una idea que ordena todo el tema. Cuando el paciente recibe insulina y suero, se están corrigiendo dos problemas al mismo tiempo: la hiperglicemia y la cetoacidosis. Pero no se corrigen a la misma velocidad.' },
        { show: ['glu'], note: 'Lo primero que mejora es la glucosa',
          say: 'La glicemia baja rápido, en pocas horas. Es lo primero que se ve mejor en los exámenes.' },
        { show: ['cet'], note: 'La acidosis tarda más',
          say: 'Los cetoácidos, en cambio, se van mucho más lento. La glicemia ya puede estar bajo doscientos, y el anion gap seguir abierto y el pH seguir ácido.' },
        { show: ['tra'], note: 'Trampa: glicemia normal no es cetoacidosis resuelta',
          say: 'Y aquí está la trampa. Si apagas la bomba porque la glicemia se normalizó, dejas una cetoacidosis activa sin insulina. La resolución no se define por la glicemia.' },
        { show: ['sg'], note: 'Lo que vimos en la reanimación con fluidos',
          say: 'Lo correcto es lo que vimos en la clase de fluidos: se mantiene la insulina, se agrega suero glucosado al cinco por ciento, y se sostiene la glicemia entre ciento cincuenta y doscientos mientras se limpian los cetoácidos.' },
        { show: ['res'], note: 'La resolución es ácido-base',
          say: 'Solo cuando el ácido-base se normaliza, hablamos de resolución. Veamos exactamente con qué números.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Resolución de la CAD',
      title: '¿Cuándo está resuelta la cetoacidosis?',
      cards: [
        { title: 'Glicemia', tag: 'Requisito', kind: 'key', items: [
          { t: 'Glicemia menor de 200 mg/dL', d: 'Necesaria, pero no basta',
            say: 'La cetoacidosis se considera resuelta cuando se cumplen varias cosas a la vez. La primera es la glicemia bajo doscientos. Necesaria, pero, como acabamos de ver, no suficiente.' },
        ] },
        { title: 'Y 2 de estos 3', tag: 'Lo que se pregunta', kind: 'criteria', items: [
          { t: 'Bicarbonato 18 mEq/L o más', d: 'El mejor marcador de recuperación',
            say: 'Además, al menos dos de estos tres parámetros. El bicarbonato sérico de dieciocho o más, que es el mejor marcador de recuperación.' },
          { t: 'pH venoso mayor de 7,30', d: 'O arterial mayor de 7,35',
            say: 'El pH venoso sobre siete coma treinta, o el arterial sobre siete coma treinta y cinco.' },
          { t: 'Anion gap de 12 o menos', d: 'Ya no quedan cetoácidos',
            say: 'Y el anion gap normalizado, de doce o menos, que confirma que los cetoácidos circulantes se eliminaron.' },
        ] },
        { title: 'Y el paciente', tag: 'Listo para comer', kind: 'normal', items: [
          { t: 'Cetonemia menor de 0,6 mmol/L', d: 'O en franco descenso',
            say: 'A eso se suma la cetonemia bajo cero coma seis milimoles por litro, o con tendencia francamente descendente.' },
          { t: 'Alerta y tolerando la vía oral', d: 'Condición para el traslape',
            say: 'Y el paciente alerta, que tolera bien la alimentación por boca. Este último punto es clave, porque sin vía oral no hay traslape.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Resolución del EHH',
      title: '¿Y cuándo está resuelto el hiperosmolar?',
      cards: [
        { title: 'Lo que se corrige', tag: 'La osmolaridad', kind: 'criteria', items: [
          { t: 'Osmolaridad efectiva menor de 315', d: 'mOsm/kg',
            say: 'En el estado hiperglicémico hiperosmolar el problema no era la acidosis, era la osmolaridad. Por eso el criterio central es que la osmolaridad plasmática efectiva baje de trescientos quince.' },
          { t: 'Glicemia estable bajo 250–300', d: 'mg/dL',
            say: 'La glicemia se exige estable bajo doscientos cincuenta a trescientos. Es un corte más alto que en la cetoacidosis, igual que el corte para agregar suero glucosado que vimos en la clase de fluidos.' },
        ] },
        { title: 'Lo que se ve', tag: 'El cerebro', kind: 'key', items: [
          { t: 'Vuelve a su lucidez basal', d: 'Y tolera alimentación',
            say: 'Y como el hiperosmolar es un cuadro neurológico, el tercer criterio es clínico: el paciente recupera su vigilia y su lucidez previas, y tolera la alimentación. El despertar neurológico va de la mano con la osmolaridad.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Traslape',
      title: 'El traslape: el pinchazo va antes de apagar la bomba',
      nodes: [
        { id: 'ev', col: 0, row: 1, k: 'mech', t: 'Insulina EV', s: 'Vida media de 5 a 9 minutos' },
        { id: 'sc', col: 0, row: 3, k: 'mech', t: 'Insulina basal SC', s: 'Tarda 1 a 2 horas en absorberse' },
        { id: 'sim', col: 1, row: 0, k: 'trap', t: 'Apagar la bomba al pinchar', s: 'O antes de pinchar' },
        { id: 'hue', col: 2, row: 0, k: 'risk', t: 'Ventana sin insulina', s: 'Se reactiva la lipólisis' },
        { id: 'reb', col: 3, row: 0, k: 'alert', t: 'CAD de rebote', s: 'En pocas horas' },
        { id: 'sol', col: 2, row: 2, k: 'good', t: 'Basal SC 1–2 h antes de apagar', s: 'NPH o glargina' },
        { id: 'ult', col: 3, row: 3, k: 'good', t: 'Ultrarrápida: 15–30 min antes', s: 'Lispro o aspart' },
      ],
      edges: [
        { from: 'ev', to: 'sim' }, { from: 'sim', to: 'hue' }, { from: 'hue', to: 'reb' },
        { from: 'sc', to: 'sol' }, { from: 'ev', to: 'sol', label: 'superposición' },
        { from: 'sol', to: 'ult', label: 'si es análogo rápido' },
      ],
      steps: [
        { show: ['ev'], note: 'La insulina EV desaparece en menos de 10 minutos',
          say: 'Ahora el traslape, que es el momento más vulnerable de toda la hospitalización. Primero un dato de farmacología: la insulina cristalina endovenosa tiene una vida media de solo cinco a nueve minutos. Apagas la bomba, y en menos de diez minutos no queda insulina en la sangre.' },
        { show: ['sc'], note: 'La subcutánea necesita tiempo',
          say: 'La insulina subcutánea, en cambio, necesita tiempo: tarda una a dos horas en absorberse y empezar a actuar.' },
        { show: ['sim', 'hue'], note: 'Pinchazo y bomba al mismo tiempo: hueco de insulina',
          say: 'Con esos dos datos, piensa qué pasa si apagas la bomba en el mismo momento del pinchazo, o peor, antes. Queda una ventana de una a dos horas sin insulina circulante. Y sin insulina, se reactiva la lipólisis.' },
        { show: ['reb'], note: 'Recae en cetoacidosis',
          say: 'El resultado es una cetoacidosis de rebote en pocas horas. Todo el trabajo de la noche se pierde.' },
        { show: ['sol'], note: 'Regla: primero el pinchazo, 1 a 2 horas después se apaga',
          say: 'La regla, entonces: se inyecta la primera dosis de insulina basal subcutánea, NPH o glargina, y la bomba se mantiene una a dos horas más. Recién ahí se apaga. Esa superposición es lo que se pregunta.' },
        { show: ['ult'], note: 'Con análogo ultrarrápido basta menos tiempo',
          say: 'Si se usa un análogo ultrarrápido, como lispro o aspart, basta con ponerlo quince a treinta minutos antes de apagar. Y el traslape idealmente coincide con una comida principal, el desayuno o el almuerzo, para confirmar que el paciente tolera.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ordenemos la decisión de apagar la bomba en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Resolución y traslape: parámetro por parámetro',
      head: ['Parámetro', 'Resolución CAD', 'Resolución EHH', 'Regla en el traslape'],
      rows: [
        { cells: ['Glicemia', 'Menor de 200 mg/dL', 'Menor de 250–300 mg/dL', 'Mantener 150–200 con SG 5% hasta resolver'],
          say: 'Repasemos parámetro por parámetro. Glicemia: bajo doscientos en la cetoacidosis, bajo doscientos cincuenta a trescientos en el hiperosmolar. Y mientras no se resuelve, se sostiene entre ciento cincuenta y doscientos con suero glucosado.' },
        { cells: ['pH', 'Venoso mayor de 7,30', 'Mayor de 7,30', 'No apagar con pH menor de 7,30'],
          say: 'El pH: sobre siete coma treinta. No se apaga la bomba con pH bajo siete coma treinta, aunque la glicemia sea normal.' },
        { cells: ['Bicarbonato', '18 mEq/L o más', 'Mayor de 18 mEq/L', 'El mejor marcador de recuperación'],
          say: 'El bicarbonato: dieciocho o más. Es el mejor marcador de recuperación.' },
        { cells: ['Anion gap', '12 o menos', 'Normal', 'Confirma que se fueron los cetoácidos'],
          say: 'El anion gap: doce o menos, lo que confirma que ya no quedan cetoácidos circulando.' },
        { cells: ['Osmolaridad efectiva', 'Normal', 'Menor de 315 mOsm/kg', 'Va con el despertar neurológico'],
          say: 'La osmolaridad efectiva es el criterio propio del hiperosmolar: bajo trescientos quince, y se correlaciona con el despertar.' },
        { cells: ['Apagar la bomba', '1–2 h tras la basal SC', '1–2 h tras la basal SC', 'Nunca junto con el pinchazo'],
          say: 'Y en ambos cuadros, la bomba se apaga una a dos horas después de la basal subcutánea. Nunca al mismo tiempo que el pinchazo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 24 años con DM1, hospitalizado hace 10 horas por cetoacidosis diabética, con insulina cristalina EV en bomba. Control: glicemia 165 mg/dL, pH venoso 7,21, bicarbonato 12 mEq/L, anion gap 19 mEq/L, K 4,3 mEq/L. Está somnoliento y con náuseas.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Suspender la bomba, ya que la glicemia es menor de 200 mg/dL' },
        { letter: 'B', text: 'Inyectar glargina subcutánea y apagar la bomba en ese mismo momento' },
        { letter: 'C', text: 'Mantener la insulina EV y agregar suero glucosado al 5%' },
        { letter: 'D', text: 'Administrar bicarbonato de sodio para cerrar el anion gap' },
        { letter: 'E', text: 'Cambiar a insulina cristalina subcutánea según hemoglucotest' },
      ],
      correct: 'C',
      explanation: 'La glicemia está bajo 200, pero no cumple ninguno de los tres criterios ácido-base (pH 7,21, HCO3 12, anion gap 19) y no tolera vía oral: la cetoacidosis no está resuelta. Se mantiene la insulina EV y se agrega SG 5% para sostener la glicemia en 150–200 mg/dL. No hay traslape sin resolución, y el pH de 7,21 no indica bicarbonato.',
      say: {
        stem: 'Vamos al caso. Hombre de veinticuatro años con diabetes tipo uno, lleva diez horas con insulina en bomba por una cetoacidosis. En el control, la glicemia es ciento sesenta y cinco, pero el pH venoso es siete coma veintiuno, el bicarbonato doce y el anion gap diecinueve. Está somnoliento y con náuseas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: suspender la bomba porque la glicemia bajó de doscientos, inyectar glargina y apagar la bomba al mismo tiempo, mantener la insulina endovenosa y agregar suero glucosado, dar bicarbonato, o pasar a cristalina subcutánea. Piénsalo.',
        answer: 'Es la C. La glicemia ya bajó de doscientos, pero no cumple ninguno de los tres criterios ácido-base, y además no tolera la vía oral. La cetoacidosis no está resuelta. Se mantiene la insulina y se agrega suero glucosado para no hacer una hipoglicemia. La A es la trampa de la clase: apagar por la glicemia. La B sería un traslape mal hecho, y además prematuro. Y el pH no llega al corte del bicarbonato.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 19 años con DM1 evoluciona favorablemente de un episodio de cetoacidosis diabética. Sus exámenes de control muestran: glicemia 168 mg/dL, pH venoso 7.33, bicarbonato 19 mEq/L y Anion Gap 11 mEq/L. Se encuentra lúcido y solicita alimentarse.',
      question: '¿Cuál es el procedimiento correcto para suspender la bomba de insulina endovenosa y realizar la transición a insulina subcutánea?',
      options: [
        { letter: 'A', text: 'Suspender la bomba de infusión endovenosa inmediatamente y esperar 4 horas antes de aplicar la primera dosis subcutánea' },
        { letter: 'B', text: 'Inyectar la primera dosis de insulina basal subcutánea y apagar la bomba endovenosa simultáneamente en ese mismo instante' },
        { letter: 'C', text: 'Administrar la dosis de insulina basal subcutánea y mantener la infusión endovenosa durante 1 a 2 horas más antes de suspenderla' },
        { letter: 'D', text: 'Administrar solo insulina ultrarrápida subcutánea cuando la glicemia supere los 250 mg/dL en controles posteriores' },
        { letter: 'E', text: 'Mantener la bomba de insulina endovenosa por 48 horas adicionales sin aportar alimentos por boca' },
      ],
      correct: 'C',
      explanation: 'Cumple los criterios de resolución y tolera la vía oral. Como la insulina EV tiene vida media de 5 a 9 minutos y la basal SC tarda 1 a 2 horas en absorberse, se inyecta la basal y la bomba se mantiene 1 a 2 horas más. Apagarla junto con el pinchazo deja un hueco sin insulina y una cetoacidosis de rebote.',
      say: {
        stem: 'Ahora un caso representativo del banco EUNACOM. Paciente de diecinueve años que sale de una cetoacidosis: glicemia ciento sesenta y ocho, pH siete coma treinta y tres, bicarbonato diecinueve y anion gap once. Está lúcido y pide comer.',
        question: '¿Cuál es el procedimiento correcto para suspender la bomba y pasar a insulina subcutánea?',
        options: 'Las opciones son: apagar la bomba y esperar cuatro horas, pinchar y apagar al mismo tiempo, pinchar y mantener la bomba una a dos horas más, usar solo ultrarrápida si sube la glicemia, o mantener la bomba cuarenta y ocho horas en ayuno. Piénsalo.',
        answer: 'Es la C. Primero confirma que está resuelto: glicemia bajo doscientos y los tres criterios ácido-base cumplidos, y además tolera. Entonces se pincha la basal y la bomba sigue una a dos horas. La B es el distractor más tentador, porque parece ordenado, pero la insulina endovenosa desaparece en minutos y la subcutánea todavía no se absorbe: ese hueco es la cetoacidosis de rebote. Y la A es el mismo error, pero peor.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: '¿Cuál de los siguientes conjuntos de parámetros gasométricos y de laboratorio certifica de manera indiscutida la resolución de una Cetoacidosis Diabética en un adulto?',
      question: 'Elige una alternativa.',
      options: [
        { letter: 'A', text: 'Glicemia de 220 mg/dL, pH 7.26, bicarbonato 14 mEq/L y cetonuria negativa' },
        { letter: 'B', text: 'Glicemia de 180 mg/dL, pH venoso 7.32, bicarbonato 19 mEq/L y Anion Gap de 10 mEq/L' },
        { letter: 'C', text: 'Glicemia de 140 mg/dL, pH venoso 7.18, bicarbonato 12 mEq/L y glucosuria negativa' },
        { letter: 'D', text: 'Glicemia de 95 mg/dL con cetonuria persistente +++ y pH 7.20' },
        { letter: 'E', text: 'Glicemia de 250 mg/dL con osmolaridad de 290 mOsm/kg y bicarbonato de 15 mEq/L' },
      ],
      correct: 'B',
      explanation: 'Resolución de CAD: glicemia menor de 200 mg/dL y al menos 2 de 3: pH venoso mayor de 7,30, bicarbonato de 18 mEq/L o más y anion gap de 12 o menos. Solo la B los cumple. C y D tienen glicemias más bajas, pero siguen acidóticas.',
      say: {
        stem: 'Otro caso representativo del banco, más directo. Te piden elegir el conjunto de exámenes que certifica que una cetoacidosis está resuelta en un adulto.',
        question: '¿Cuál de estos conjuntos certifica la resolución?',
        options: 'La A tiene glicemia doscientos veinte y pH siete coma veintiséis. La B, glicemia ciento ochenta, pH siete coma treinta y dos, bicarbonato diecinueve y anion gap diez. La C, glicemia ciento cuarenta con pH siete coma dieciocho. La D, glicemia noventa y cinco con cetonuria y pH siete coma veinte. Y la E, glicemia doscientos cincuenta con bicarbonato quince. Piénsalo.',
        answer: 'Es la B: glicemia bajo doscientos, pH sobre siete coma treinta, bicarbonato sobre dieciocho y anion gap bajo doce. Cumple todo. Fíjate en la C y la D: tienen las glicemias más bajas de todas, y justamente por eso son los distractores. Siguen acidóticas. Es la misma trampa del caso anterior: la glicemia no define la resolución.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Resolución', tag: 'Manda el ácido-base', kind: 'criteria', items: [
          { t: 'CAD: glicemia menor de 200 + 2 de 3', d: 'pH mayor de 7,30 · HCO3 18 o más · AG 12 o menos',
            say: 'Cerremos con las reglas de oro. La cetoacidosis está resuelta con glicemia bajo doscientos y dos de tres: pH sobre siete coma treinta, bicarbonato de dieciocho o más y anion gap de doce o menos, con el paciente tolerando la vía oral.' },
          { t: 'EHH: osmolaridad menor de 315', d: 'Y el paciente lúcido',
            say: 'El hiperosmolar se resuelve con osmolaridad efectiva bajo trescientos quince y el paciente lúcido.' },
        ] },
        { title: 'La trampa', tag: 'Glicemia normal', kind: 'alert', items: [
          { t: 'La glicemia se corrige primero', d: 'Insulina + SG 5% hasta resolver',
            say: 'La glicemia se corrige antes que la acidosis: si el anion gap sigue abierto, no se apaga la bomba, se agrega suero glucosado.' },
        ] },
        { title: 'Traslape', tag: 'Superposición', kind: 'pharma', items: [
          { t: 'Basal SC 1–2 h antes de apagar', d: 'La insulina EV dura 5–9 minutos',
            say: 'Y el traslape: la basal subcutánea se inyecta una a dos horas antes de apagar la bomba, porque la insulina endovenosa dura minutos. Con esto cerramos las crisis hiperglicémicas; en la próxima clase vemos qué puede salir mal durante su tratamiento. Si te llevas una sola idea de hoy: la cetoacidosis se cura con el pH, no con la glicemia, y la bomba se apaga después del pinchazo, nunca junto con él. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'CAD en tratamiento: ¿se puede apagar la bomba?',
    root: N('start', 'CAD con insulina EV en bomba', 'Control de exámenes',
      'Paciente con cetoacidosis que lleva horas con insulina en bomba. Llegan los exámenes de control, y la pregunta es si ya se puede pasar a subcutánea.',
      ['', N('q', '¿Glicemia menor de 200 y 2 de 3?', 'pH mayor de 7,30 · HCO3 18 o más · AG 12 o menos',
        'La pregunta tiene dos partes: ¿la glicemia bajó de doscientos, y además cumple al menos dos de los tres criterios ácido-base: pH, bicarbonato y anion gap?',
        ['Solo la glicemia', N('alert', 'Insulina EV + SG 5%', 'Glicemia en 150–200 mg/dL',
          'Si la glicemia bajó pero el ácido-base no, la cetoacidosis sigue activa. No se apaga la bomba: se mantiene la insulina y se agrega suero glucosado al cinco por ciento para sostener la glicemia entre ciento cincuenta y doscientos.')],
        ['Ninguno', N('do', 'Seguir con insulina EV', 'Controles seriados',
          'Si todavía no se cumple nada, se sigue con la insulina endovenosa y los controles seriados.')],
        ['Ambos', N('q', '¿Alerta y tolera la vía oral?', 'Idealmente antes de una comida',
          'Si cumple los criterios, falta una condición: que esté alerta y tolere comer.',
          ['NO', N('do', 'Mantener la bomba', 'Hasta que tolere',
            'Si no tolera, se mantiene la bomba hasta que pueda alimentarse.')],
          ['SÍ', N('ok', 'Basal SC y apagar 1–2 h después', 'Ultrarrápida: 15–30 min antes',
            'Si tolera, se inyecta la basal subcutánea, NPH o glargina, y la bomba se apaga una a dos horas después. Con un análogo ultrarrápido, quince a treinta minutos antes. Nunca en el mismo momento del pinchazo.')])])]),
  },
};
