// Clase 21.12 — guion docente escrito a mano (ver gastro-01.cjs, gastro-02.cjs y sp-11.cjs para el formato).
// Fuente: books/scripts/dataset_saludpublica.cjs (sp-12).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'sp-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Quién es dueño de la ficha clínica, quién solo la custodia, y quién tiene permitido pedirla',
      say: 'Bienvenidos. Hoy vemos la Ley veinte mil quinientos ochenta y cuatro, la ley de derechos y deberes de los pacientes, con foco en la ficha clínica y el secreto médico. Es un tema de altísima frecuencia, porque casi todos los años aparece una pregunta sobre quién puede pedir una copia de la ficha, y quién no. Y se resuelve con una sola distinción: propiedad no es lo mismo que custodia. Partamos por ahí.',
    },

    {
      type: 'points',
      kicker: 'Naturaleza jurídica',
      title: 'La ficha clínica: de quién es, y quién la guarda',
      cards: [
        { title: 'Propiedad del paciente', tag: 'Dato exclusivo e inalienable', kind: 'key', items: [
          { t: 'Instrumento obligatorio', d: 'Registra todos los eventos de salud de la persona',
            say: 'La ficha clínica es el instrumento donde se registra todo el historial asistencial de una persona, en papel o en formato electrónico. Y el primer dato que se pregunta es este: la información que contiene es de propiedad exclusiva e inalienable del paciente. No del médico, ni del hospital, ni de la clínica.' },
          { t: 'El establecimiento es solo custodio', d: 'Hospital, clínica, CESFAM o consulta privada',
            say: 'El establecimiento de salud, sea público o privado, no es el dueño de esa información. Es el custodio y depositario legal: está obligado a resguardar su integridad y su confidencialidad, pero la información sigue siendo del paciente. Esa diferencia entre propiedad y custodia es la base de todo lo que viene.' },
        ] },
        { title: 'Plazo de conservación', tag: 'Obligación del custodio', kind: 'criteria', items: [
          { t: 'Mínimo quince años', d: 'Desde el último registro de atención',
            say: 'Y como custodio, el prestador tiene una obligación legal de plazo: debe conservar la ficha clínica por un mínimo de quince años, contados desde la última vez que el paciente recibió atención en ese establecimiento. Si te preguntan un número distinto, es la trampa.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: '¿Quién puede pedirla?',
      title: 'Acceso legítimo versus acceso prohibido',
      nodes: [
        { id: 'pac', col: 0, row: 0, k: 'good', t: 'El paciente', s: 'Acredita su identidad' },
        { id: 'rep', col: 0, row: 1, k: 'good', t: 'Representante legal', s: 'Padres, tutor o apoderado notarial' },
        { id: 'her', col: 0, row: 2, k: 'good', t: 'Herederos', s: 'Si el paciente falleció' },
        { id: 'jud', col: 0, row: 3, k: 'good', t: 'Tribunales y Fiscalía', s: 'En una causa formal' },
        { id: 'sup', col: 0, row: 4, k: 'good', t: 'Superintendencia de Salud', s: 'En su rol de fiscalizador' },
        { id: 'acc', col: 2, row: 2, k: 'effect', t: 'Acceso legítimo a la ficha', s: 'Se entrega la copia solicitada' },
        { id: 'emp', col: 4, row: 0, k: 'trap', t: 'Empleador', s: 'Nunca, sea cual sea el motivo' },
        { id: 'ase', col: 4, row: 1, k: 'trap', t: 'Aseguradora', s: 'Salvo poder notarial expreso' },
        { id: 'pol', col: 4, row: 2, k: 'trap', t: 'Policía sin orden', s: 'Necesita orden del fiscal o tribunal' },
        { id: 'fam', col: 4, row: 3, k: 'trap', t: 'Familiar sin poder', s: 'Cónyuge o hijos, sin mandato' },
        { id: 'san', col: 2, row: 4, k: 'alert', t: 'Vulneración del secreto médico', s: 'Sanción administrativa, civil y penal' },
      ],
      edges: [
        { from: 'pac', to: 'acc' }, { from: 'rep', to: 'acc' }, { from: 'her', to: 'acc' },
        { from: 'jud', to: 'acc' }, { from: 'sup', to: 'acc' },
        { from: 'emp', to: 'san', label: 'prohibido' }, { from: 'ase', to: 'san', label: 'prohibido' },
        { from: 'pol', to: 'san', label: 'prohibido' }, { from: 'fam', to: 'san', label: 'prohibido' },
      ],
      steps: [
        { show: ['pac', 'acc'], note: 'El dueño siempre puede pedir su propia ficha',
          say: 'Empecemos por quién sí puede acceder. El primero, obvio, es el propio paciente: acredita su identidad y accede sin más trámite, porque es el dueño de la información.' },
        { show: ['rep', 'her'], note: 'Representación legal, o continuidad tras la muerte',
          say: 'Después están quienes actúan en su nombre: el representante legal, que son los padres de un menor o el tutor de un incapaz declarado, o un tercero con un poder notarial expreso. Y si el paciente falleció, sus herederos, acreditando el parentesco o la posesión efectiva.' },
        { show: ['jud', 'sup'], note: 'El Estado, cuando fiscaliza o investiga',
          say: 'Y por último, dos instituciones del Estado: los tribunales y la Fiscalía, cuando la piden formalmente dentro de una causa, y la Superintendencia de Salud, cuando fiscaliza al prestador. Estos cinco son los únicos con acceso legítimo.' },
        { show: ['emp', 'ase'], note: 'Los dos que más se preguntan como distractor',
          say: 'Ahora los que no pueden. El primero, y el que más se pregunta, es el empleador: nunca tiene derecho a la ficha de su trabajador, ni siquiera con una carta timbrada de la empresa. El segundo es la aseguradora privada: tampoco, salvo que el propio paciente le haya dado un poder notarial expreso para eso. Un contrato de seguro no levanta el secreto médico por sí solo.' },
        { show: ['pol', 'fam'], note: 'Ojo con el uniforme y con el apellido',
          say: 'Tampoco la policía, ni Carabineros ni la PDI, si no traen una orden del fiscal o del tribunal: el uniforme no reemplaza a la orden judicial. Y tampoco un familiar de un adulto competente, como el cónyuge, si no tiene un poder notarial específico para eso.' },
        { show: ['san'], note: 'La consecuencia de entregarla igual',
          say: 'Y si el establecimiento entrega la ficha a cualquiera de estos, está vulnerando el secreto médico, y eso trae sanciones administrativas de la Superintendencia, además de responsabilidad civil e incluso penal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Otros derechos cardinales',
      title: 'Lo que más se pregunta después de la ficha',
      cards: [
        { title: 'Trato digno e imagen', tag: 'Prohibido sin consentimiento', kind: 'alert', items: [
          { t: 'Respeto a la intimidad', d: 'Y facilitadores lingüísticos si el paciente no habla español',
            say: 'La misma ley protege otros derechos que también se preguntan. El primero es el trato digno: respeto a la intimidad y al pudor, y el derecho a un facilitador lingüístico si el paciente pertenece a un pueblo indígena o es migrante y no habla español.' },
          { t: 'No fotografiar ni grabar', d: 'Ni con fines docentes ni para redes sociales',
            say: 'Y hay una prohibición absoluta de fotografiar, grabar en video o grabar audio a un paciente sin su consentimiento informado y por escrito, aunque sea con fines docentes. Esto se pregunta seguido, sobre todo en el contexto de estudiantes que sacan fotos clínicas para presentaciones.' },
        ] },
        { title: 'Información y alta', tag: 'Derecho a saber', kind: 'normal', items: [
          { t: 'Cuenta y epicrisis', d: 'Costos claros y resumen obligatorio al alta',
            say: 'También tiene derecho a información financiera clara sobre los costos de su atención, y a recibir el informe de epicrisis al momento del alta hospitalaria: eso es obligatorio, no opcional.' },
        ] },
        { title: 'Deberes del paciente', tag: 'Ley de Consultorio Seguro', kind: 'criteria', items: [
          { t: 'Información veraz y respeto', d: 'Y cuidar las instalaciones del centro de salud',
            say: 'La ley también impone deberes al paciente: entregar información veraz sobre su salud y su identidad, y tratar con respeto al personal de salud.' },
          { t: 'Agrava las agresiones al personal', d: 'La Ley de Consultorio Seguro sube las penas',
            say: 'Y una norma que se conecta con esto es la Ley de Consultorio Seguro, que agrava las sanciones penales para quien agreda física o verbalmente a un funcionario de salud en su lugar de trabajo.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Pongamos todo esto en un árbol de decisión, tal como razonas frente a una solicitud real.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Legitimación de acceso a la ficha clínica',
      head: ['Solicitante', '¿Tiene acceso legal?', 'Fundamento'],
      rows: [
        { cells: ['El propio paciente', 'Sí', 'Es el dueño de su información'],
          say: 'Repasemos con la tabla final. El propio paciente: sí, siempre, porque es el dueño de su información.' },
        { cells: ['Representante legal o herederos', 'Sí', 'Actúan en su nombre, o lo continúan'],
          say: 'El representante legal o los herederos: sí, porque actúan en nombre del paciente o continúan sus derechos.' },
        { cells: ['Fiscalía o tribunales', 'Sí', 'Con requerimiento formal en una causa'],
          say: 'La Fiscalía o los tribunales: sí, pero solo con un requerimiento formal dentro de una causa.' },
        { cells: ['Empleador', 'No', 'Ninguna justificación laboral lo habilita'],
          say: 'El empleador: no, nunca, aunque invoque una razón laboral. Esta es la respuesta incorrecta más repetida del tema.' },
        { cells: ['Aseguradora sin poder notarial', 'No', 'El contrato privado no levanta el secreto médico'],
          say: 'Y la aseguradora sin poder notarial: no, porque el contrato privado no basta para levantar el secreto médico.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un trabajador de 35 años sufre una crisis de pánico en su horario laboral y acude al servicio de urgencias de una clínica privada. Al día siguiente, el jefe de recursos humanos de la empresa se presenta en la dirección médica con una carta formal timbrada, solicitando una copia íntegra de la ficha clínica de urgencia del trabajador para verificar si su cuadro ameritaba reposo o si existía consumo de sustancias.',
      question: '¿Cuál es la conducta que debe asumir la dirección del establecimiento de salud?',
      options: [
        { letter: 'A', text: 'Entregar la ficha completa, porque la carta timbrada de la empresa la respalda formalmente' },
        { letter: 'B', text: 'Rechazar la solicitud: el empleador no tiene acceso legal a la ficha clínica de su trabajador' },
        { letter: 'C', text: 'Entregar solo el diagnóstico de ingreso, omitiendo el resto de la ficha' },
        { letter: 'D', text: 'Pedir la autorización verbal del jefe de servicio para entregar los antecedentes' },
        { letter: 'E', text: 'Entregar la ficha si el trabajador no reclama en un plazo de cinco días' },
      ],
      correct: 'B',
      explanation: 'Los datos de salud son datos sensibles bajo la Ley 20.584 y la Ley 19.628. El empleador carece de todo derecho legal para acceder a la ficha médica de sus trabajadores, sin importar el motivo laboral invocado ni el formalismo de la carta. Entregarla, completa o parcial, constituye una vulneración del secreto profesional, sancionable por la Superintendencia de Salud e indemnizable en sede civil.',
      say: {
        stem: 'Vamos con un caso. Un trabajador de treinta y cinco años sufre una crisis de pánico en su horario laboral, y acude a urgencias de una clínica privada. Al día siguiente, el jefe de recursos humanos de la empresa llega a la dirección médica con una carta formal timbrada, pidiendo una copia íntegra de la ficha de urgencia del trabajador, para saber si su cuadro ameritaba reposo o si había consumo de sustancias.',
        question: '¿Cuál es la conducta que debe asumir la dirección del establecimiento de salud?',
        options: 'Las opciones: entregar la ficha completa porque la carta la respalda, rechazar la solicitud porque el empleador no tiene acceso legal, entregar solo el diagnóstico de ingreso, pedir autorización verbal del jefe de servicio, o entregarla si el trabajador no reclama a tiempo. Piénsalo.',
        answer: 'Es la B. Ni la carta timbrada, ni entregar una versión parcial, ni una autorización verbal cambian nada: el empleador simplemente no está en la lista de quienes pueden acceder. La única conducta correcta es rechazar la solicitud completa, sin importar cuán formal se vea el papel que trae.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 46',
      stem: 'Se pretende realizar un estudio en adolescentes de dieciséis años, que estudian en colegios del sector público.',
      question: '¿Quién debe firmar el documento de consentimiento informado para autorizar la participación de estos pacientes?',
      options: [
        { letter: 'A', text: 'El alumno' },
        { letter: 'B', text: 'El director del establecimiento' },
        { letter: 'C', text: 'Cualquier pariente mayor de edad' },
        { letter: 'D', text: 'El apoderado' },
        { letter: 'E', text: 'El encargado de salud y bienestar estudiantil del establecimiento' },
      ],
      correct: 'D',
      explanation: 'La Ley de Derechos y Deberes de los Pacientes exige que el consentimiento sea informado y voluntario. En menores de edad, es el representante legal, el apoderado o los padres, quien debe firmarlo, aunque el adolescente tenga derecho a ser escuchado según su edad y madurez. Ni el propio alumno, ni el director, ni un pariente cualquiera sin ese vínculo, ni un funcionario del colegio reemplazan esa representación legal.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Se quiere hacer un estudio en adolescentes de dieciséis años, que estudian en colegios del sector público.',
        question: '¿Quién debe firmar el documento de consentimiento informado para autorizar la participación de estos pacientes?',
        options: 'Las opciones: el propio alumno, el director del establecimiento, cualquier pariente mayor de edad, el apoderado, o el encargado de salud y bienestar estudiantil.',
        answer: 'Es la D, el apoderado. Conecta esto con lo que vimos de la ficha clínica: así como el representante legal es quien accede a la información de un menor, también es quien firma en su nombre cuando se necesita un consentimiento. El adolescente tiene derecho a que se le explique y se le escuche, pero la firma que hace válido el consentimiento es la de su representante legal.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Propiedad y custodia', tag: 'No son lo mismo', kind: 'key', items: [
          { t: 'La ficha es del paciente', d: 'El establecimiento solo la custodia',
            say: 'Cerremos con las reglas de oro. La ficha clínica es del paciente; el establecimiento solo la custodia.' },
          { t: 'Custodia mínima de quince años', d: 'Desde la última atención',
            say: 'Y esa custodia dura un mínimo de quince años desde la última atención.' },
        ] },
        { title: 'Quién accede', tag: 'Cinco sí, todos los demás no', kind: 'alert', items: [
          { t: 'Paciente, representante, herederos, justicia, Superintendencia', d: 'Los únicos con acceso legítimo',
            say: 'Solo cinco tienen acceso legítimo: el paciente, su representante, sus herederos, la justicia y la Superintendencia de Salud.' },
          { t: 'Empleador y aseguradora: nunca por defecto', d: 'Sin poder notarial expreso, no hay acceso',
            say: 'El empleador y la aseguradora nunca acceden por defecto, salvo con un poder notarial expreso del paciente. Si te llevas una sola idea de hoy: antes de entregar cualquier ficha, pregúntate si quien la pide está en esa lista de cinco. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Decidir si entregar la ficha clínica a quien la solicita',
    root: N(
      'start', 'Alguien solicita acceso o copia de la ficha clínica', '¿Quién es, y qué acredita?',
      'Antes de nada, hay que identificar quién pide la información y qué puede acreditar.',
      ['Es el paciente o su representante legal', N(
        'q', '¿Acredita identidad o representación?', 'Cédula, o poder notarial si es un tercero',
        'El paciente y quien tenga su representación legal siempre pueden acceder, si acreditan quiénes son.',
        ['Sí, la acredita', N(
          'ok', 'Entregar la ficha o la copia solicitada', 'Es el dueño legal de la información',
          'Se entrega sin más trámite: la información sigue siendo del paciente.',
        )],
        ['No logra acreditarla', N(
          'alert', 'No entregar hasta que la acredite', 'Pedir cédula o poder notarial',
          'Sin acreditación no hay certeza de que corresponda entregarla; primero se verifica.',
        )],
      )],
      ['Es un tercero externo, como un empleador o una aseguradora', N(
        'q', '¿Tiene una orden judicial o un poder notarial del paciente?', 'Sin eso, no hay legitimación',
        'Ningún tercero externo tiene un derecho propio sobre la ficha de otra persona.',
        ['Sí, presenta orden judicial o poder notarial', N(
          'refer', 'Entregar solo lo que ese documento autoriza', 'Fiscalía, tribunales o poder notarial expreso',
          'La legitimación viene del documento formal, no de la relación laboral o contractual.',
        )],
        ['No presenta nada de eso', N(
          'alert', 'Rechazar la solicitud', 'Y dejar constancia de la negativa',
          'Entregar sin ese respaldo es una vulneración del secreto médico, sancionable.',
        )],
      )],
    ),
  },
};
