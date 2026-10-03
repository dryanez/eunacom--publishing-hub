// Clase 21.13 — guion docente escrito a mano (ver gastro-01.cjs, gastro-02.cjs y sp-11.cjs para el formato).
// Fuente: books/scripts/dataset_saludpublica.cjs (sp-13).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'sp-13',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Qué se escribe, cuándo se prohíbe firmar, y el plazo fatal del deber de denuncia',
      say: 'Bienvenidos. Hoy vemos la certificación médica de defunción, las autopsias y el deber de denuncia. Es de máxima rentabilidad, porque casi todos los exámenes traen una pregunta sobre el llenado correcto del certificado, y trae siempre la misma trampa: escribir paro cardiorrespiratorio, algo que está terminantemente prohibido. Vamos a entender por qué, y a aprender exactamente qué sí se puede escribir.',
    },

    {
      type: 'flow',
      kicker: 'El certificado de defunción',
      title: 'Tres causas, una sola cadena lógica',
      nodes: [
        { id: 'bas', col: 0, row: 1, k: 'cause', t: 'Causa básica', s: 'La enfermedad que inició todo' },
        { id: 'int', col: 1, row: 1, k: 'mech', t: 'Causa intermedia', s: 'La complicación que le siguió' },
        { id: 'inm', col: 2, row: 1, k: 'effect', t: 'Causa inmediata', s: 'La condición final antes de morir' },
        { id: 'mue', col: 3, row: 1, k: 'risk', t: 'Muerte', s: 'El desenlace' },
        { id: 'pro', col: 2, row: 3, k: 'trap', t: 'Paro cardiorrespiratorio', s: 'Prohibido escribirlo solo' },
        { id: 'ine', col: 3, row: 3, k: 'alert', t: 'Certificado inválido', s: 'No sirve para las estadísticas' },
      ],
      edges: [
        { from: 'bas', to: 'int' }, { from: 'int', to: 'inm' }, { from: 'inm', to: 'mue' },
        { from: 'pro', to: 'ine', label: 'si se usa' },
      ],
      steps: [
        { show: ['bas'], note: 'Es la que tabula el INE',
          say: 'Empecemos por la estructura. El certificado de defunción se llena hacia atrás, empezando por el final, pero se razona hacia adelante, desde la causa básica. La causa básica es la enfermedad o lesión inicial que echó a andar toda la cadena, por ejemplo un adenocarcinoma o una cirrosis. Es la que el Instituto Nacional de Estadísticas tabula para las estadísticas de salud del país.' },
        { show: ['int'], note: 'La complicación que la causa básica generó',
          say: 'De esa causa básica nace la causa intermedia: la complicación que la enfermedad de base originó o facilitó. Por ejemplo, una cirrosis que genera hipertensión portal y várices esofágicas.' },
        { show: ['inm'], note: 'Lo último antes de morir',
          say: 'Y de la causa intermedia nace la causa inmediata: la condición final que llevó directamente a la muerte, como una hemorragia masiva o un shock séptico. Fíjate en la lógica: tiene que existir una relación de causalidad real entre las tres, una lleva a la otra en orden descendente.' },
        { show: ['mue'], note: 'El desenlace de la cadena',
          say: 'Y esa cadena completa termina en la muerte del paciente.' },
        { show: ['pro', 'ine'], note: 'La trampa más repetida del tema',
          say: 'Ahora, la trampa que garantiza pregunta. Nunca se escribe paro cardiorrespiratorio, ni falla multiorgánica, ni paro respiratorio, como causa única o como causa básica. ¿Por qué? Porque todas las personas, sin excepción, mueren en paro cardiorrespiratorio: ese término no aporta ninguna información diagnóstica ni epidemiológica. Un certificado así no sirve para nada, y el examen lo sabe.' },
      ],
    },

    {
      type: 'points',
      kicker: 'El certificado, Parte II',
      title: 'Lo que contribuye, pero no inicia la cadena',
      cards: [
        { title: 'Estados mórbidos contribuyentes', tag: 'Se anotan aparte', kind: 'normal', items: [
          { t: 'Diabetes, hipertensión, obesidad', d: 'Van en la Parte II del certificado',
            say: 'Antes de seguir, un detalle que el libro marca y que se pregunta poco pero se confunde mucho. El certificado tiene una segunda parte, la Parte dos, donde se anotan otros estados mórbidos que contribuyeron a la muerte, pero que no forman parte de esa cadena causal directa. Ahí van, por ejemplo, la diabetes mellitus tipo dos o la hipertensión arterial de un paciente que fallece por otra causa.' },
          { t: 'No son la causa, agravan el cuadro', d: 'La diferencia con la Parte I decide la pregunta',
            say: 'Y la diferencia con la cadena de la Parte uno es exactamente esta: si esa diabetes o esa hipertensión generaron directamente la enfermedad que terminó matando al paciente, van en la cadena, como causa básica o intermedia. Si solo empeoraron el pronóstico sin ser la causa directa de nada, van en la Parte dos, como contribuyentes. No es lo mismo causar que acompañar.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cuándo no se firma',
      title: 'Muerte natural versus muerte médico-legal',
      nodes: [
        { id: 'vio', col: 0, row: 0, k: 'risk', t: 'Muerte violenta', s: 'Homicidio, suicidio, trauma o accidente' },
        { id: 'tox', col: 0, row: 1, k: 'risk', t: 'Intoxicación', s: 'Química, medicamentosa o por drogas' },
        { id: 'cus', col: 0, row: 2, k: 'risk', t: 'Muerte en custodia', s: 'Policial o penitenciaria' },
        { id: 'qui', col: 0, row: 3, k: 'risk', t: 'Muerte quirúrgica inexplicable', s: 'Sospecha de mala praxis' },
        { id: 'hal', col: 0, row: 4, k: 'risk', t: 'Cadáver hallado', s: 'Sin atención previa, causa incierta' },
        { id: 'sml', col: 2, row: 2, k: 'refer', t: 'Servicio Médico Legal', s: 'Notificar a Fiscalía o Carabineros' },
        { id: 'nat', col: 4, row: 0, k: 'good', t: 'Muerte natural conocida', s: 'Enfermedad médica de base, sin sospecha' },
        { id: 'fir', col: 4, row: 1, k: 'good', t: 'Médico tratante firma el CMD', s: 'Con la cadena de causas correcta' },
      ],
      edges: [
        { from: 'vio', to: 'sml' }, { from: 'tox', to: 'sml' }, { from: 'cus', to: 'sml' },
        { from: 'qui', to: 'sml' }, { from: 'hal', to: 'sml' },
        { from: 'nat', to: 'fir' },
      ],
      steps: [
        { show: ['vio'], note: 'El médico clínico no firma nunca en estos casos',
          say: 'Ahora la pregunta que decide si tú puedes firmar el certificado o no. Lo primero: toda muerte violenta, ya sea homicidio, suicidio, un trauma o un accidente de tránsito, va al Servicio Médico Legal. Y ojo con un detalle que se pregunta: da lo mismo si la muerte ocurre semanas después en la Unidad de Cuidados Intensivos por una complicación médica, como una neumonía; si el origen fue un trauma violento, sigue siendo una muerte médico-legal.' },
        { show: ['tox'], note: 'Cualquier tóxico, lícito o ilícito',
          say: 'Lo mismo con cualquier intoxicación, sea por un medicamento, un químico o una droga ilícita.' },
        { show: ['cus'], note: 'Cualquier fallecido bajo custodia del Estado',
          say: 'También toda muerte que ocurra mientras la persona está bajo custodia policial o penitenciaria.' },
        { show: ['qui'], note: 'Cuando hay sospecha de mala praxis',
          say: 'Y la muerte intraoperatoria o en el postoperatorio inmediato que resulta inexplicable, porque ahí puede haber sospecha de mala praxis.' },
        { show: ['hal'], note: 'Sin testigo médico y sin causa clara',
          say: 'Y un cadáver hallado en la vía pública o en su domicilio, sin atención médica previa y sin una causa de muerte clara.' },
        { show: ['sml'], note: 'Se preserva el cuerpo, se avisa, no se toca nada',
          say: 'En todos estos casos, el médico tiene prohibición legal formal de firmar el certificado. Tiene que preservar el cuerpo, no alterar el sitio, y notificar de inmediato a Carabineros, a la PDI o al Ministerio Público, para que el caso se derive al Servicio Médico Legal.' },
        { show: ['nat', 'fir'], note: 'Solo aquí firma el médico clínico',
          say: 'Solo cuando la muerte es por una enfermedad médica conocida, sin sospecha de nada de lo anterior, el médico tratante firma el certificado, con su cadena de causa básica, intermedia e inmediata.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Autopsias',
      title: 'Autopsia clínica versus autopsia médico-legal',
      cards: [
        { title: 'Autopsia clínica', tag: 'Hospitalaria', kind: 'normal', items: [
          { t: 'En muertes naturales conocidas', d: 'Fines docentes y de confirmación diagnóstica',
            say: 'Hay dos tipos de autopsia, y no se pueden confundir. La autopsia clínica se hace en el servicio de anatomía patológica de un hospital, en pacientes fallecidos por causas naturales, y sirve para confirmar el diagnóstico, entender por qué no respondió al tratamiento, y con fines docentes para la formación de nuevos médicos.' },
          { t: 'Exige autorización familiar', d: 'Firmada por los familiares directos',
            say: 'Y necesita la autorización firmada de los familiares directos. Sin esa firma, no se hace.' },
        ] },
        { title: 'Autopsia médico-legal', tag: 'Judicial', kind: 'alert', items: [
          { t: 'La ordena el fiscal', d: 'Obligatoria en toda muerte violenta o sospechosa',
            say: 'La autopsia médico-legal es completamente distinta: la ordena un fiscal del Ministerio Público, y es obligatoria en toda muerte violenta o con sospecha de delito, aunque los familiares prefieran evitarla.' },
          { t: 'La familia no puede oponerse', d: 'Y la firma el médico legista del Servicio Médico Legal',
            say: 'Aquí la familia no tiene derecho a oponerse, porque no depende de su voluntad, depende de un mandato judicial que busca esclarecer un posible delito. Y el que firma el certificado, en estos casos, es el médico legista del Servicio Médico Legal, nunca el médico tratante que atendió al paciente en vida.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Deber de denuncia',
      title: 'Artículos ciento setenta y cinco y ciento setenta y seis del Código Procesal Penal',
      cards: [
        { title: 'Quién está obligado', tag: 'Todo el equipo de salud', kind: 'key', items: [
          { t: 'Médicos, enfermeras y matronas', d: 'De establecimientos públicos y privados',
            say: 'Cambiemos de tema, al deber de denuncia. Todo médico cirujano, enfermera o matrona que atienda a una persona con lesiones que parezcan un delito de acción pública, está obligado por ley a denunciarlo, sea en un establecimiento público o privado, y da lo mismo si el paciente sobrevive o fallece por esas lesiones.' },
          { t: 'Heridas, agresión sexual, maltrato', d: 'Por arma blanca o de fuego, y violencia intrafamiliar grave',
            say: 'Se denuncian las lesiones por arma blanca o de fuego, la sospecha de agresión sexual, las señales de maltrato infantil o de violencia intrafamiliar grave, y las intoxicaciones dolosas.' },
        ] },
        { title: 'El plazo que se pregunta', tag: 'Veinticuatro horas', kind: 'alert', items: [
          { t: 'Plazo fatal, no prorrogable', d: 'Desde que se toma conocimiento del hecho',
            say: 'Y aquí está el dato que garantiza pregunta: el plazo legal para denunciar es de veinticuatro horas, contadas desde que el profesional toma conocimiento del hecho. No es facultativo, no depende de que la víctima autorice, y no se cumple citando primero al agresor para verificar su versión.' },
          { t: 'Se denuncia a Fiscalía, PDI o Carabineros', d: 'No al Colegio Médico ni a la familia',
            say: 'Se denuncia ante el Ministerio Público, Carabineros o la Policía de Investigaciones. No basta con avisar al jefe de servicio o con dejarlo solo escrito en la ficha: la denuncia formal es a la autoridad, y omitirla dentro del plazo es en sí mismo un delito.' },
          { t: 'Omitir la denuncia es delito', d: 'Se sanciona penalmente al profesional que calla',
            say: 'Y el incumplimiento no es una falta administrativa menor: omitir la denuncia constituye en sí mismo un delito de omisión, sancionado en el Código Penal, independiente de cualquier responsabilidad civil que además pueda seguir el profesional.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora armemos el árbol completo de decisión frente a un fallecido.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Muerte natural versus muerte médico-legal',
      head: ['Criterio', 'Muerte natural', 'Muerte médico-legal'],
      rows: [
        { cells: ['Quién firma el certificado', 'El médico tratante', 'Solo el médico legista del Servicio Médico Legal'],
          say: 'Repasemos con la tabla. Quién firma el certificado: en la muerte natural, el médico tratante; en la médico-legal, exclusivamente el médico legista.' },
        { cells: ['Consentimiento familiar', 'Se exige para la autopsia clínica', 'No aplica: la autopsia es obligatoria'],
          say: 'El consentimiento familiar: se exige para la autopsia clínica, pero no aplica en la médico-legal, porque esa autopsia es obligatoria por orden del fiscal.' },
        { cells: ['Origen violento con muerte hospitalaria tardía', 'No aplica', 'Sigue siendo médico-legal, aunque pasen semanas'],
          say: 'Y el caso que más confunde, el que suele decidir la pregunta del examen: si el origen fue violento, la muerte sigue siendo médico-legal aunque el paciente fallezca semanas después en el hospital por una complicación médica, como una neumonía o una sepsis.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Llenado correcto del certificado: un ejemplo',
      head: ['Línea del certificado', 'Error frecuente', 'Llenado correcto'],
      rows: [
        { cells: ['Causa inmediata', 'Paro cardiorrespiratorio', 'Shock séptico de foco abdominal'],
          say: 'Y una segunda tabla, con un ejemplo de llenado. En la causa inmediata, el error frecuente es escribir paro cardiorrespiratorio; lo correcto es la condición real, como un shock séptico de foco abdominal.' },
        { cells: ['Causa intermedia', 'Falla multiorgánica', 'Peritonitis aguda difusa'],
          say: 'En la causa intermedia, el error es falla multiorgánica; lo correcto es la complicación real que la generó, como una peritonitis aguda difusa.' },
        { cells: ['Causa básica', 'Insuficiencia respiratoria', 'Diverticulitis aguda perforada'],
          say: 'Y en la causa básica, el error es un término inespecífico como insuficiencia respiratoria; lo correcto es la enfermedad que inició todo, en este ejemplo, una diverticulitis aguda perforada. Fíjate en el hilo: cada línea tiene que ser una enfermedad real y diagnosticable, nunca un modo de morir.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un anciano de 82 años, diabético e hipertenso, sufre un asalto en la vía pública y recibe un golpe contuso severo en el cráneo, que le produce un hematoma subdural traumático. Es operado y derivado a la Unidad de Cuidados Intensivos, donde fallece a los 25 días de ingreso, por una neumonía aspirativa y un shock séptico. El médico residente de turno evalúa si debe firmar el certificado de defunción, por tratarse de una muerte hospitalaria tardía.',
      question: '¿Cuál es la conducta correcta?',
      options: [
        { letter: 'A', text: 'Firmar el certificado, con shock séptico como causa básica de defunción' },
        { letter: 'B', text: 'No firmar el certificado: la muerte es médico-legal, por el origen traumático inicial' },
        { letter: 'C', text: 'Firmar el certificado, escribiendo paro cardiorrespiratorio como causa básica' },
        { letter: 'D', text: 'Firmar el certificado solo si la familia lo autoriza por escrito' },
        { letter: 'E', text: 'Solicitar una autopsia clínica antes de decidir quién firma' },
      ],
      correct: 'B',
      explanation: 'Si el evento causal inicial fue violento o accidental, la muerte se clasifica como médico-legal, sin importar cuánto tiempo pase internado ni que la causa inmediata final sea médica. El residente no debe firmar el certificado: debe preservar el cuerpo y notificar para que el caso se derive al Servicio Médico Legal.',
      say: {
        stem: 'Vamos con un caso. Un anciano de ochenta y dos años, diabético e hipertenso, sufre un asalto en la vía pública y recibe un golpe fuerte en el cráneo, que le produce un hematoma bajo la duramadre. Lo operan y lo llevan a la unidad de cuidados intensivos, donde fallece veinticinco días después, por una neumonía aspirativa y un shock séptico. El médico residente de turno evalúa si debe firmar el certificado, porque piensa que es una muerte hospitalaria tardía.',
        question: '¿Cuál es la conducta correcta?',
        options: 'Las opciones: firmar con shock séptico como causa básica, no firmar porque es médico-legal por el origen traumático, firmar escribiendo paro cardiorrespiratorio, firmar solo con autorización familiar, o pedir primero una autopsia clínica. Piénsalo.',
        answer: 'Es la B. Este caso está armado justo para la trampa del tiempo: veinticinco días internado suenan a una muerte médica tardía, pero el origen de toda la cadena fue un trauma por asalto. Eso convierte la muerte en médico-legal, sin importar que la causa inmediata haya sido una complicación médica como la neumonía. El residente no firma nada: preserva el cuerpo y notifica para que vaya al Servicio Médico Legal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 4',
      stem: 'Un paciente con antecedente de cáncer de próstata sufre un tromboembolismo pulmonar, luego falla respiratoria, luego un paro cardíaco, y finalmente la muerte.',
      question: '¿Cuál es la causa inmediata de muerte en el certificado de defunción?',
      options: [
        { letter: 'A', text: 'Cáncer de próstata' },
        { letter: 'B', text: 'Tromboembolismo pulmonar' },
        { letter: 'C', text: 'Paro cardíaco' },
        { letter: 'D', text: 'Falla respiratoria' },
        { letter: 'E', text: 'Trombosis venosa profunda' },
      ],
      correct: 'D',
      explanation: 'La cadena completa es: cáncer de próstata como causa básica, tromboembolismo pulmonar como causa intermedia, y falla respiratoria como causa inmediata, la condición final antes de morir. El paro cardíaco es el mecanismo terminal universal y nunca se escribe en el certificado, por más que sea literalmente lo último que ocurrió.',
      say: {
        stem: 'Y ahora una pregunta real, del EUNACOM de enero de dos mil veintitrés. Un paciente con antecedente de cáncer de próstata sufre un tromboembolismo pulmonar, después una falla respiratoria, después un paro cardíaco, y finalmente muere.',
        question: '¿Cuál es la causa inmediata de muerte en el certificado de defunción?',
        options: 'Las opciones: cáncer de próstata, tromboembolismo pulmonar, paro cardíaco, falla respiratoria, o trombosis venosa profunda.',
        answer: 'Es la D, falla respiratoria. Arma la cadena completa como la vimos: el cáncer de próstata es la causa básica, el tromboembolismo pulmonar es la causa intermedia, y la falla respiratoria es la causa inmediata, la última condición real antes de morir. El paro cardíaco es exactamente el distractor que estudiamos: es lo último que ocurre, pero por ser un mecanismo universal, nunca se escribe en el certificado.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El certificado', tag: 'Tres causas reales', kind: 'key', items: [
          { t: 'Básica, intermedia, inmediata', d: 'Cada una, una enfermedad diagnosticable',
            say: 'Cerremos con las reglas de oro. El certificado siempre tiene tres causas encadenadas: básica, intermedia e inmediata, y cada una tiene que ser una enfermedad real, nunca un modo de morir.' },
          { t: 'Nunca paro cardiorrespiratorio', d: 'Ni falla multiorgánica, ni solas',
            say: 'Nunca se escribe paro cardiorrespiratorio ni falla multiorgánica como causa básica o única.' },
        ] },
        { title: 'Quién firma', tag: 'Origen violento manda', kind: 'alert', items: [
          { t: 'Origen violento, aunque muera después', d: 'Siempre médico-legal, nunca lo firma el clínico',
            say: 'Si el origen fue violento, la muerte es médico-legal aunque el paciente fallezca semanas después en el hospital, y el médico clínico nunca firma ese certificado, por más que la causa inmediata que vio con sus propios ojos haya sido una complicación médica.' },
          { t: 'Autopsia: consentimiento solo en la clínica', d: 'La médico-legal es obligatoria por orden judicial',
            say: 'La autopsia clínica exige el consentimiento firmado de la familia; la autopsia médico-legal no, porque la ordena un fiscal y la familia no puede oponerse.' },
          { t: 'Deber de denuncia: veinticuatro horas', d: 'Plazo fatal, a la Fiscalía o a la policía',
            say: 'Y el deber de denuncia tiene un plazo fatal de veinticuatro horas, hacia la Fiscalía o la policía, nunca solo hacia la ficha clínica. Si te llevas una sola idea de hoy: antes de firmar cualquier certificado, pregúntate cómo empezó todo, no solo cómo terminó. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Certificar una defunción: qué firmar y a quién avisar',
    root: N(
      'start', 'Un paciente fallece y hay que certificar la defunción', '¿Cómo empezó la cadena de eventos?',
      'La primera pregunta nunca es la última condición clínica: es el origen de todo.',
      ['El origen es una enfermedad médica conocida', N(
        'q', '¿Hay sospecha de violencia, tóxicos o mala praxis?', 'Revisar el contexto completo del ingreso',
        'Incluso con una causa médica final, hay que descartar un origen violento oculto, revisando cómo empezó realmente el cuadro.',
        ['No, es puramente una enfermedad natural', N(
          'ok', 'El médico tratante firma el certificado', 'Con causa básica, intermedia e inmediata reales',
          'Se arma la cadena completa con enfermedades diagnosticables reales, evitando siempre términos como paro cardiorrespiratorio o falla multiorgánica.',
        )],
        ['Sí, hay un origen violento o dudoso', N(
          'refer', 'No firmar: derivar al Servicio Médico Legal', 'Preservar el cuerpo y notificar de inmediato',
          'Es una muerte médico-legal, aunque la causa final parezca puramente médica y hayan pasado semanas desde el hecho inicial.',
        )],
      )],
      ['El paciente presenta lesiones por un posible delito', N(
        'q', '¿Cuánto tiempo hay para denunciar el hecho?', 'El plazo corre desde que se toma conocimiento',
        'El deber de denuncia es independiente de si el paciente sobrevive o fallece por esas lesiones.',
        ['Dentro de las primeras horas', N(
          'do', 'Denunciar a Fiscalía, Carabineros o la PDI', 'Plazo fatal de veinticuatro horas',
          'Omitir la denuncia dentro del plazo es en sí mismo un delito de omisión, sancionado penalmente.',
        )],
        ['Se dejó pasar el plazo', N(
          'alert', 'Igual se denuncia, sin demora adicional', 'El incumplimiento ya generó responsabilidad',
          'Pasado el plazo fatal, la denuncia tardía no borra la infracción ya cometida, pero sigue siendo obligatoria.',
        )],
      )],
    ),
  },
};
