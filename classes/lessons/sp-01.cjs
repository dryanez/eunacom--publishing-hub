// Clase 21.1 — guion docente escrito a mano (ver gastro-01.cjs y gastro-02.cjs para el formato).
// Fuente: books/scripts/dataset_saludpublica.cjs / dataset_saludpublica_bloque_1.cjs (sp-01).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'sp-01',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Quién manda, quién fiscaliza, quién paga y a qué tiene derecho cada paciente',
      say: 'Bienvenidos. Partimos el módulo de Salud Pública, y lo hacemos con el tema que abre todo lo demás: cómo está organizado el sistema de salud chileno. Es un tema de altísima frecuencia, con pregunta prácticamente garantizada sobre los tramos de FONASA, el copago cero y los niveles de atención. Y no es un tema para memorizar sin orden: si entiendes la lógica, cada pregunta se responde sola. Empecemos por quién manda.',
    },

    {
      type: 'flow',
      kicker: 'Rectoría y fiscalización',
      title: '¿Quién manda y quién fiscaliza?',
      nodes: [
        { id: 'min', col: 0, row: 1, k: 'start', t: 'MINSAL', s: 'Rector, normativo y regulador' },
        { id: 'ssp', col: 1, row: 0, k: 'mech', t: 'Subsecretaría de Salud Pública', s: 'Vigilancia epidemiológica y SEREMI' },
        { id: 'sra', col: 1, row: 2, k: 'mech', t: 'Subsecretaría de Redes Asistenciales', s: 'Gestión de los Servicios de Salud' },
        { id: 'isp', col: 2, row: 0, k: 'effect', t: 'Instituto de Salud Pública', s: 'Laboratorio nacional de referencia' },
        { id: 'sds', col: 2, row: 3, k: 'good', t: 'Superintendencia de Salud', s: 'Fiscaliza FONASA, ISAPRES y prestadores' },
      ],
      edges: [
        { from: 'min', to: 'ssp' }, { from: 'min', to: 'sra' },
        { from: 'ssp', to: 'isp', label: 'coordina vigilancia' },
        { from: 'sds', to: 'min', label: 'autónoma, no depende del MINSAL' },
      ],
      steps: [
        { show: ['min'], note: 'El MINSAL norma, no administra directamente',
          say: 'Partamos por el mando. El Ministerio de Salud es el rector del sistema: define las normas y las políticas, pero no administra los hospitales día a día. Eso lo hace a través de dos subsecretarías, y esa división es justamente lo que más se confunde en el examen.' },
        { show: ['ssp'], note: 'Vigilancia epidemiológica y SEREMI',
          say: 'La Subsecretaría de Salud Pública se encarga de la vigilancia epidemiológica, la regulación ambiental, y de coordinar a las Secretarías Regionales Ministeriales de Salud, las SEREMI. Guarda esta idea, porque la vamos a retomar cuando veamos las enfermedades de notificación obligatoria.' },
        { show: ['sra'], note: 'Administra la red pública',
          say: 'La Subsecretaría de Redes Asistenciales, en cambio, gestiona y articula los Servicios de Salud del país, que son los que administran los hospitales y la red pública en cada territorio. Una norma, la otra administra: esa es la diferencia que se pregunta.' },
        { show: ['isp'], note: 'Un dato que ya salió en el banco real',
          say: 'Fuera de las subsecretarías está el Instituto de Salud Pública, que es el laboratorio nacional y de referencia para todos los laboratorios del país, públicos y privados. También autoriza medicamentos y hace vigilancia de laboratorio. No confundas su función técnica de laboratorio con la fiscalización financiera, que es otra institución.' },
        { show: ['sds'], note: 'Superintendencia: fiscaliza, no norma',
          say: 'Y esa otra institución es la Superintendencia de Salud, un organismo autónomo que no depende jerárquicamente del MINSAL. Su función es fiscalizar: supervigila a FONASA, a las ISAPRES y a los prestadores acreditados, y vela por el cumplimiento de las garantías GES. Si la pregunta es quién controla el dinero y la calidad, la respuesta casi siempre es la Superintendencia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Financiamiento',
      title: 'Cómo se financia el sistema, y sus dos subsistemas',
      cards: [
        { title: 'Financiamiento', tag: 'Cotización más aporte fiscal', kind: 'key', items: [
          { t: 'Cotización obligatoria', d: 'Siete por ciento de la remuneración imponible',
            say: 'Vamos al financiamiento. La base es la cotización legal obligatoria para salud: siete por ciento de la remuneración imponible de los trabajadores dependientes, independientes y pensionados.' },
          { t: 'Aporte fiscal general', d: 'Sobre todo para los tramos A y B',
            say: 'Eso se complementa con aportes fiscales generales del Estado, que financian especialmente a los tramos de menores ingresos y la infraestructura pública. El siete por ciento no le alcanza a todos, y ahí es donde entra el Estado.' },
        ] },
        { title: 'Dos subsistemas', tag: 'Público y privado', kind: 'criteria', items: [
          { t: 'FONASA: la mayoría', d: 'Seguro público, cubre a la mayor parte de la población',
            say: 'Con ese financiamiento conviven dos subsistemas. FONASA es el seguro público, y cubre a la gran mayoría de los chilenos.' },
          { t: 'ISAPRES: seguros privados', d: 'Contrato individual, planes distintos según ingreso',
            say: 'Las ISAPRES son seguros privados, con un contrato individual y un plan de salud que varía según el ingreso y el riesgo del afiliado. Fíjate en la lógica: FONASA es solidario, y la ISAPRE es un seguro individual. Esa diferencia explica todo lo que viene con los tramos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tramos de FONASA',
      title: 'Los cuatro tramos, y el copago cero',
      cards: [
        { title: 'Tramo A', tag: 'Sin recursos', kind: 'alert', items: [
          { t: 'Indigentes y carentes de recursos', d: 'Atención cien por ciento gratuita en la red pública',
            say: 'Los tramos se definen por el ingreso del grupo familiar. El tramo A son las personas carentes de recursos, indigentes y quienes reciben subsidio familiar. Su atención en la red pública es completamente gratuita.' },
          { t: 'Sin derecho a Libre Elección', d: 'Solo se atiende en la red pública',
            say: 'Y aquí está el dato que más se pregunta del tramo A: no tiene derecho a la Modalidad Libre Elección. No puede comprar bonos para atenderse en el sector privado, aunque tenga la orden de un médico. Solo la red pública.' },
        ] },
        { title: 'Tramos B, C y D', tag: 'Copago cero desde 2022', kind: 'key', items: [
          { t: 'Ingreso creciente por tramo', d: 'B hasta un ingreso mínimo, C y D por sobre eso',
            say: 'Los tramos B, C y D se definen por ingresos crecientes, y a diferencia del tramo A, sí tienen derecho a la Modalidad Libre Elección, comprando bonos en prestadores privados en convenio.' },
          { t: 'Copago cero en la red pública', d: 'Los cuatro tramos, cero por ciento de copago',
            say: 'Y el dato que cambió hace pocos años, y que se pregunta muchísimo: desde el año dos mil veintidós, el programa Copago Cero eliminó los copagos que antes pagaban los tramos C y D en la red pública. Hoy los cuatro tramos, A, B, C y D, tienen gratuidad total en la Modalidad de Atención Institucional. El único lugar donde un afiliado FONASA paga es si elige voluntariamente atenderse en el sector privado por la Libre Elección.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Red asistencial',
      title: 'Los niveles de atención, de la posta al hospital',
      nodes: [
        { id: 'aps', col: 0, row: 1, k: 'start', t: 'Atención Primaria', s: 'CESFAM, CECOSF, postas rurales' },
        { id: 'res', col: 1, row: 1, k: 'good', t: 'Resuelve la mayoría', s: 'Entre ochenta y noventa de cada cien consultas' },
        { id: 'sec', col: 2, row: 0, k: 'mech', t: 'Nivel secundario', s: 'Especialidad ambulatoria, CDT y CAE' },
        { id: 'ter', col: 3, row: 0, k: 'effect', t: 'Nivel terciario', s: 'Hospitales de alta complejidad' },
        { id: 'sapu', col: 1, row: 3, k: 'mech', t: 'SAPU', s: 'Urgencia básica, tardes y noches' },
        { id: 'sar', col: 2, row: 3, k: 'good', t: 'SAR', s: 'Más resolutivo, con radiografía y laboratorio' },
      ],
      edges: [
        { from: 'aps', to: 'res' }, { from: 'res', to: 'sec', label: 'interconsulta' }, { from: 'sec', to: 'ter', label: 'derivación' },
        { from: 'aps', to: 'sapu' }, { from: 'sapu', to: 'sar', label: 'mayor resolutividad' },
      ],
      steps: [
        { show: ['aps'], note: 'La puerta de entrada obligatoria',
          say: 'La red asistencial pública se organiza en tres niveles, y todo parte por la Atención Primaria: los centros de salud familiar, los centros comunitarios y las postas rurales. Es la puerta de entrada regular y obligatoria al sistema público.' },
        { show: ['res'], note: 'La mayoría de la demanda se resuelve aquí',
          say: 'Y no es un dato menor: la Atención Primaria resuelve entre ochenta y noventa de cada cien consultas de la población. La mayoría de los pacientes nunca necesita llegar más allá.' },
        { show: ['sec'], note: 'Especialidad ambulatoria, con interconsulta',
          say: 'Cuando sí necesita más, el paso siguiente es el nivel secundario: atención especializada ambulatoria y apoyo diagnóstico complejo, a través de centros de referencia y consultorios adosados de especialidad. Y ojo, se llega por interconsulta oficial, no porque el paciente decida ir directo.' },
        { show: ['ter'], note: 'Alta complejidad, camas críticas',
          say: 'Y el nivel terciario son los hospitales de alta complejidad e institutos especializados, con hospitalización, camas críticas y cirugía mayor.' },
        { show: ['sapu'], note: 'Urgencia básica, adosada al CESFAM',
          say: 'Fuera de ese eje está la urgencia de la Atención Primaria. El SAPU está adosado al CESFAM, funciona en las tardes, noches y festivos, y resuelve con clínica básica, electrocardiograma y laboratorio rápido.' },
        { show: ['sar'], note: 'La diferencia que se pregunta: qué examen tiene cada uno',
          say: 'Y el SAR es la versión más resolutiva: funciona extendido o las veinticuatro horas, y a diferencia del SAPU, cuenta con radiografía digital y laboratorio con troponina y dímero D. Esa diferencia en los exámenes disponibles es justo lo que separa a uno del otro en el examen.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo: dado el tramo y la modalidad de un paciente, ¿a qué tiene derecho?',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Quién es quién, y quién paga qué',
      head: ['Escenario', 'Respuesta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Laboratorio nacional de referencia', 'Instituto de Salud Pública', 'Confundirlo con la Superintendencia de Salud'],
          say: 'Repasemos las trampas. Si preguntan por el laboratorio nacional de referencia, la respuesta es el Instituto de Salud Pública. El error clásico es confundirlo con la Superintendencia, que fiscaliza el dinero y la calidad, no hace exámenes de laboratorio.' },
        { cells: ['Fiscaliza a FONASA, ISAPRES y prestadores', 'Superintendencia de Salud', 'Responder Ministerio de Salud'],
          say: 'Si preguntan quién fiscaliza a FONASA, a las ISAPRES y a los prestadores, y quién vela por el cumplimiento de las garantías GES, es la Superintendencia de Salud, un organismo autónomo, no el Ministerio.' },
        { cells: ['Afiliado FONASA tramo A pide bono privado', 'No tiene derecho a Libre Elección', 'Autorizar el bono porque tiene orden médica'],
          say: 'Un afiliado del tramo A que pide un bono para atenderse en clínica privada no tiene derecho a la Modalidad Libre Elección. La orden de un médico de atención primaria no cambia eso: se deriva por la red pública.' },
        { cells: ['Afiliado FONASA tramo D, hospitalización pública', 'Copago de cero por ciento', 'Cobrar el veinte por ciento antiguo'],
          say: 'Un afiliado del tramo D que se hospitaliza en la red pública paga cero por ciento de copago. El veinte por ciento que existía antes del Copago Cero ya no se cobra: es la trampa que más aparece cuando la pregunta usa cifras antiguas.' },
        { cells: ['Paciente sin patología de urgencia, en la noche', 'SAPU o SAR según disponibilidad', 'Ir directo al hospital de alta complejidad'],
          say: 'Y un paciente con una urgencia de baja complejidad en la noche se resuelve en el SAPU o el SAR, no yendo directo al hospital de alta complejidad, que es para lo que el nivel terciario no está pensado.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 58 años, afiliado a FONASA con ingresos de 2 ingresos mínimos mensuales (Tramo D), consulta en el CESFAM por dolor lumbar mecánico. El médico general le indica reposo, analgesia y le solicita una radiografía de columna en el hospital del área. El paciente pregunta cuánto deberá pagar por la consulta y por la radiografía.',
      question: '¿Cuál es la respuesta correcta sobre el costo de esta atención?',
      options: [
        { letter: 'A', text: 'Deberá pagar el 20% del arancel de FONASA correspondiente al Tramo D' },
        { letter: 'B', text: 'El costo será de $0, ya que la atención se realiza en la Modalidad de Atención Institucional' },
        { letter: 'C', text: 'Deberá pagar el 10% del valor de la radiografía, según el arancel del Tramo D' },
        { letter: 'D', text: 'No tiene derecho a la radiografía en el hospital público por ser Tramo D' },
        { letter: 'E', text: 'Debe elegir entre pagar en la red pública o comprar un bono de Libre Elección con descuento' },
      ],
      correct: 'B',
      explanation: 'Desde el Copago Cero vigente desde 2022, todos los tramos de FONASA (A, B, C y D) tienen atención 100% gratuita en la Modalidad de Atención Institucional, incluyendo consultas, exámenes y hospitalizaciones en la red pública. El copago solo existe si el paciente elige voluntariamente la Modalidad Libre Elección en el sector privado.',
      say: {
        stem: 'Vamos con un caso. Hombre de cincuenta y ocho años, afiliado a FONASA en el tramo D, consulta en el CESFAM por un dolor lumbar mecánico. El médico le indica reposo y analgesia, y le pide una radiografía de columna en el hospital de su área. El paciente pregunta cuánto le va a costar todo esto.',
        question: '¿Cuál es la respuesta correcta sobre el costo de esta atención?',
        options: 'Las alternativas: pagar veinte por ciento del arancel, que el costo sea cero, pagar diez por ciento de la radiografía, que no tenga derecho al examen por ser tramo D, o que deba elegir entre la red pública o un bono con descuento. Piénsalo.',
        answer: 'Es la B. Esto es exactamente el Copago Cero que acabamos de ver: los cuatro tramos de FONASA, incluido el D, tienen gratuidad total en la Modalidad de Atención Institucional, y eso incluye la consulta y la radiografía. Los distractores con veinte o diez por ciento son las cifras antiguas, antes del Copago Cero, y la trampa es que el examen te las presente como si siguieran vigentes.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 126',
      stem: 'Una empresa extranjera dedicada a otorgar prestaciones en salud decide iniciar sus operaciones en Chile, para lo cual solicita saber cuál es la institución que actúa como laboratorio de referencia para todos los laboratorios, tanto públicos como privados, en el país.',
      question: '¿Cuál es la respuesta correcta?',
      options: [
        { letter: 'A', text: 'Central Nacional de Abastecimiento' },
        { letter: 'B', text: 'Instituto de Salud Pública' },
        { letter: 'C', text: 'Superintendencia de Salud' },
        { letter: 'D', text: 'Servicio Médico Legal' },
        { letter: 'E', text: 'Secretaría Regional Ministerial de Salud' },
      ],
      correct: 'B',
      explanation: 'El Instituto de Salud Pública actúa como laboratorio nacional y de referencia, supervisa laboratorios de exámenes médicos y de producción de medicamentos, autoriza y fiscaliza medicamentos y dispositivos médicos, y realiza vigilancia sanitaria y epidemiológica de laboratorio.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Una empresa extranjera que otorga prestaciones de salud quiere operar en Chile, y pregunta cuál es la institución que actúa como laboratorio de referencia para todos los laboratorios del país, públicos y privados.',
        question: '¿Cuál es la respuesta correcta?',
        options: 'Las opciones: Central Nacional de Abastecimiento, Instituto de Salud Pública, Superintendencia de Salud, Servicio Médico Legal, o Secretaría Regional Ministerial de Salud.',
        answer: 'Es la B, el Instituto de Salud Pública. Es justo lo que vimos al principio: el ISP es el laboratorio nacional y de referencia, y además autoriza y fiscaliza medicamentos y dispositivos médicos. El distractor tentador es la Superintendencia de Salud, pero ella fiscaliza el dinero y la calidad de los prestadores, no hace de laboratorio.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 129',
      stem: '¿Cuál de las siguientes instituciones es la encargada de supervisar el funcionamiento del sistema de salud público y privado en Chile, fiscalizar a FONASA y a las instituciones previsionales de salud, y velar por el cumplimiento de las garantías GES?',
      question: '¿Cuál es la institución correcta?',
      options: [
        { letter: 'A', text: 'Instituto de Salud Pública' },
        { letter: 'B', text: 'Secretaría Regional Ministerial (SEREMI) de Salud' },
        { letter: 'C', text: 'Ministerio de Salud, por medio de la Subsecretaría de Salud Pública' },
        { letter: 'D', text: 'Superintendencia de Salud' },
        { letter: 'E', text: 'Fondo Nacional de Salud (FONASA)' },
      ],
      correct: 'D',
      explanation: 'La Superintendencia de Salud es el organismo autónomo encargado de supervisar y fiscalizar tanto al sistema público como privado, incluyendo a FONASA, a las ISAPRES y el cumplimiento de las garantías GES.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil veinticuatro. Preguntan cuál institución supervisa el funcionamiento del sistema de salud público y privado, fiscaliza a FONASA y a las instituciones previsionales, y vela por el cumplimiento de las garantías GES.',
        question: '¿Cuál es la institución correcta?',
        options: 'Las opciones: Instituto de Salud Pública, SEREMI de Salud, Ministerio de Salud por su Subsecretaría de Salud Pública, Superintendencia de Salud, o FONASA.',
        answer: 'Es la D, la Superintendencia de Salud. Fíjate que la misma idea aparece dos veces en el banco real con distintas palabras, y eso te dice que es de las más preguntadas: la Superintendencia fiscaliza, y las subsecretarías del Ministerio norman y administran, pero no fiscalizan. Esa distinción es la que decide la respuesta.' },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Quién es quién', tag: 'No se mezclan', kind: 'key', items: [
          { t: 'MINSAL norma, Servicios de Salud administran', d: 'Superintendencia fiscaliza',
            say: 'Cerremos con las reglas de oro. El Ministerio norma, los Servicios de Salud administran la red pública, y la Superintendencia fiscaliza. No son la misma institución, y el examen vive de esa confusión.' },
          { t: 'ISP es laboratorio de referencia', d: 'No fiscaliza dinero ni calidad de prestadores',
            say: 'El Instituto de Salud Pública es el laboratorio de referencia y autoriza medicamentos; no fiscaliza el dinero ni la calidad de los prestadores, eso es tarea de la Superintendencia.' },
        ] },
        { title: 'FONASA', tag: 'Tramos y copago cero', kind: 'alert', items: [
          { t: 'Tramo A: sin Libre Elección', d: 'Solo red pública, cien por ciento gratuita',
            say: 'En FONASA, el tramo A no tiene derecho a Libre Elección: solo se atiende en la red pública, y en forma completamente gratuita.' },
          { t: 'Copago cero: los cuatro tramos', d: 'Desde dos mil veintidós, en toda la red pública',
            say: 'Y desde el Copago Cero, los cuatro tramos, A, B, C y D, tienen gratuidad total en la Modalidad de Atención Institucional. El copago solo aparece si el paciente elige atenderse por Libre Elección en el sector privado.' },
        ] },
        { title: 'Red asistencial', tag: 'Primaria resuelve casi todo', kind: 'pharma', items: [
          { t: 'Atención Primaria: puerta de entrada', d: 'Resuelve entre ochenta y noventa de cada cien consultas',
            say: 'Y la Atención Primaria es la puerta de entrada obligatoria, y resuelve entre ochenta y noventa de cada cien consultas. Si te llevas una sola idea de hoy: cada institución tiene una función, y el examen premia saber cuál es cuál. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Tramo y modalidad: a qué tiene derecho el paciente',
    root: N(
      'start', 'Paciente se atiende en el sistema de salud', 'Necesitas saber su seguro y su tramo',
      'Para saber a qué tiene derecho un paciente, la primera pregunta siempre es la misma: cuál es su seguro de salud. Eso decide todo lo que sigue.',
      ['', N(
        'q', '¿FONASA o ISAPRE?', 'El seguro define la vía',
        'FONASA es un seguro público y solidario; la ISAPRE es un seguro privado con un plan individual. Si es FONASA, el paso siguiente es el tramo.',
        ['ISAPRE', N(
          'ok', 'Plan contratado y libre elección', 'Prestadores en convenio del plan',
          'Con ISAPRE, la cobertura la define el plan contratado, y el paciente elige entre los prestadores en convenio de esa ISAPRE. No hay tramos ni Copago Cero: eso es exclusivo de FONASA.',
        )],
        ['FONASA', N(
          'q', '¿Qué tramo tiene?', 'A, B, C o D',
          'En FONASA, el tramo lo define el ingreso del grupo familiar. Y el tramo cambia el acceso a la Libre Elección, no el copago en la red pública, que hoy es cero para todos.',
          ['Tramo A', N(
            'ok', 'Solo Modalidad Institucional', 'Cien por ciento gratuito, sin bonos privados',
            'El tramo A se atiende solo en la Modalidad de Atención Institucional, de forma completamente gratuita, y no tiene derecho a comprar bonos de Libre Elección.',
          )],
          ['Tramos B, C o D', N(
            'ok', 'Institucional gratuita o bonos privados', 'El paciente elige',
            'Los tramos B, C y D tienen la red pública completamente gratuita gracias al Copago Cero, y además pueden elegir atenderse en el sector privado comprando un bono de Libre Elección, pagando el valor de ese bono.',
          )],
        )],
      )],
    ),
  },
};
