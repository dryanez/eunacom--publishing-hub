// Clase 21.3 — guion docente escrito a mano (ver gastro-01.cjs y gastro-02.cjs para el formato).
// Fuente: books/scripts/dataset_saludpublica.cjs / dataset_saludpublica_bloque_1.cjs (sp-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'sp-03',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Un seguro universal para lo carísimo, y alimentos universales para los más vulnerables',
      say: 'Bienvenidos. Hoy vemos dos beneficios que se preguntan por su misma característica: la universalidad. La Ley Ricarte Soto para tratamientos de alto costo, y los programas alimentarios PNAC y PACAM. Ninguno de los dos pregunta por tu previsión de salud, y esa es justamente la trampa que más se repite en el examen.',
    },

    {
      type: 'points',
      kicker: 'Ley Ricarte Soto',
      title: 'Ley 20.850: tratamientos de alto costo',
      cards: [
        { title: 'Cobertura universal', tag: 'Sin importar el seguro', kind: 'key', items: [
          { t: 'FONASA, ISAPRE, FFAA o sin previsión', d: 'Todos, si cumplen el criterio clínico',
            say: 'La Ley Ricarte Soto crea un sistema de protección financiera para diagnósticos y tratamientos de alto costo. Y su característica central es la cobertura universal: cubre a toda persona que cumpla el criterio clínico del decreto, sea de FONASA, de una ISAPRE, de las Fuerzas Armadas, o incluso sin previsión de salud.' },
          { t: 'Copago cero, siempre', d: 'Financiamiento cien por ciento estatal',
            say: 'Y a diferencia del GES, aquí no hay coaseguro ni deducible: el financiamiento es cien por ciento estatal, así que el beneficiario no paga nada por el fármaco, el dispositivo o el alimento especial incluido en el decreto.' },
        ] },
        { title: 'Qué cubre', tag: 'Ejemplos representativos', kind: 'criteria', items: [
          { t: 'Fármacos de alto costo', d: 'Esclerosis múltiple, artritis reumatoide refractaria, cáncer de mama con receptor',
            say: 'Cubre patologías de alto costo y baja frecuencia relativa: esclerosis múltiple con recaídas, artritis reumatoide refractaria a otros fármacos, cáncer de mama con receptor específico, enfermedad de Crohn, hipertensión pulmonar, y bombas de insulina en diabetes tipo uno inestable, entre otras.' },
          { t: 'Se activa con el especialista', d: 'En centros públicos o privados acreditados',
            say: 'El acceso se formaliza con el médico especialista tratante, en un centro hospitalario acreditado como prestador aprobado por el Ministerio de Salud. No es algo que pida un médico general por su cuenta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'PNAC',
      title: 'Programa Nacional de Alimentación Complementaria',
      cards: [
        { title: 'PNAC Básico', tag: 'Niños y gestantes sin riesgo', kind: 'normal', items: [
          { t: 'Purita Fortificada y Purita Cereal', d: 'Menores de seis años, según la edad',
            say: 'El PNAC entrega alimentos fortificados a través de la Atención Primaria. El Básico es para niños menores de seis años con estado nutricional normal o sobrepeso, y para gestantes y nodrizas con buen estado nutricional. Se entrega Leche Purita Fortificada de los seis a los diecisiete meses, y Purita Cereal desde los dieciocho meses hasta antes de los seis años.' },
          { t: 'Purita Mamá', d: 'Para el embarazo y la lactancia',
            say: 'Y para las gestantes y nodrizas, Purita Mamá.' },
        ] },
        { title: 'Refuerzo y programas especiales', tag: 'Riesgo nutricional', kind: 'alert', items: [
          { t: 'PNAC Refuerzo', d: 'Niños con riesgo de desnutrición, gestantes con bajo peso',
            say: 'El PNAC Refuerzo entrega mayor volumen a los niños en riesgo de desnutrición o ya desnutridos, y a las gestantes con bajo peso.' },
          { t: 'Prematuros y alergia a la proteína de la leche de vaca', d: 'Fórmulas especiales garantizadas',
            say: 'Y hay subprogramas especiales: para prematuros extremos, nacidos antes de las treinta y dos semanas o con menos de mil quinientos gramos, fórmula especial para prematuros. Y para los lactantes con alergia a la proteína de la leche de vaca, fórmulas extensamente hidrolizadas o de aminoácidos libres, según la gravedad.' },
          { t: 'Errores innatos del metabolismo', d: 'Por ejemplo, fórmulas sin fenilalanina',
            say: 'También cubre errores innatos del metabolismo, como la fenilcetonuria, con fórmulas libres del metabolito que el paciente no puede procesar.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'PACAM',
      title: 'Programa de Alimentación Complementaria del Adulto Mayor',
      cards: [
        { title: 'A quién llega', tag: 'Setenta años, FONASA', kind: 'key', items: [
          { t: 'Setenta años o más, afiliados a FONASA', d: 'O desde los sesenta en programas especiales',
            say: 'El PACAM está dirigido a las personas de setenta años o más afiliadas a FONASA, o desde los sesenta años si están en programas de cuidados especiales o con sospecha o confirmación de tuberculosis.' },
          { t: 'Crema y Bebida Láctea Años Dorados', d: 'Fortificadas, bajas en sodio y en lactosa',
            say: 'Se entrega Crema Años Dorados, una sopa crema fortificada en micronutrientes, calcio, zinc y ácido fólico, y baja en sodio, además de la Bebida Láctea Años Dorados, baja en lactosa y en grasa.' },
        ] },
        { title: 'Requisito de retiro', tag: 'Controles al día', kind: 'criteria', items: [
          { t: 'Examen de Medicina Preventiva del Adulto Mayor', d: 'Y vacunas al día',
            say: 'Y el requisito para retirar estos productos cada mes es tener vigente el Examen de Medicina Preventiva del Adulto Mayor, el EMPAM, y las vacunas al día, especialmente la de la influenza y la antineumocócica. No exige evaluación socioeconómica ni certificado de desnutrición: el PACAM básico se entrega a todo mayor de setenta años que cumpla ese control, independiente de su estado nutricional.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ordenemos los tres beneficios en un árbol según a quién le corresponde cada uno.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Ley Ricarte Soto frente al GES, y los alimentos universales',
      head: ['Escenario', 'Respuesta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Fármaco de alto costo en paciente ISAPRE', 'Cobertura cien por ciento por Ley Ricarte Soto', 'Decir que solo aplica a FONASA'],
          say: 'Repasemos las trampas. Un fármaco de alto costo del decreto, en un paciente de ISAPRE, se cubre cien por ciento por la Ley Ricarte Soto. El error clásico es decir que esta ley solo protege a los afiliados de FONASA.' },
        { cells: ['Copago en tratamiento Ricarte Soto', 'Cero por ciento, siempre', 'Aplicar el tope de veinte por ciento del GES'],
          say: 'El copago en un tratamiento cubierto por Ricarte Soto es siempre cero. Aplicarle el veinte por ciento del GES es mezclar dos leyes distintas.' },
        { cells: ['Niño de ISAPRE, control al día', 'Puede retirar la leche Purita en el CESFAM', 'Negar el retiro por no ser de FONASA'],
          say: 'Un niño afiliado a una ISAPRE, con sus controles al día, sí puede retirar la leche Purita en el CESFAM de su domicilio. El PNAC y el Programa Nacional de Inmunizaciones son universales, y negar el retiro por su previsión es un error del funcionario, no de la norma.' },
        { cells: ['Adulto mayor sin síntomas, setenta y dos años', 'Retira PACAM con EMPAM y vacunas al día', 'Exigir certificado de desnutrición'],
          say: 'Y un adulto mayor de setenta y dos años, sin ningún síntoma, retira igual el PACAM básico si tiene su EMPAM y sus vacunas al día. Exigirle un certificado de desnutrición es la trampa, porque el programa básico no depende del estado nutricional.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hombre de 38 años, afiliado a una ISAPRE, es diagnosticado con hipertensión arterial pulmonar grave, patología incluida en el decreto de la Ley Ricarte Soto. Su médico especialista indica un tratamiento vasodilatador específico de alto costo, disponible en un centro acreditado por el MINSAL.',
      question: '¿Cuál es la cobertura financiera que le corresponde a este paciente?',
      options: [
        { letter: 'A', text: 'Cien por ciento de cobertura, sin copago, financiada por el Estado' },
        { letter: 'B', text: 'Ochenta por ciento de cobertura, con veinte por ciento de copago según su plan de ISAPRE' },
        { letter: 'C', text: 'Cobertura solo si renuncia a su ISAPRE y se afilia a FONASA' },
        { letter: 'D', text: 'Cincuenta por ciento de cobertura si supera el deducible anual de su plan' },
        { letter: 'E', text: 'Debe pagar el tratamiento y solicitar reembolso posterior a su ISAPRE' },
      ],
      correct: 'A',
      explanation: 'La Ley Ricarte Soto cubre de forma universal, sin importar la previsión, y con financiamiento 100% estatal, sin copago, para todo paciente que cumpla el criterio clínico del decreto, siempre que se trate por un especialista en un centro acreditado.',
      say: {
        stem: 'Vamos con un caso. Hombre de treinta y ocho años, afiliado a una ISAPRE, con hipertensión arterial pulmonar grave, una patología incluida en el decreto de la Ley Ricarte Soto. Su especialista le indica un tratamiento vasodilatador de alto costo, en un centro acreditado por el Ministerio de Salud.',
        question: '¿Cuál es la cobertura financiera que le corresponde a este paciente?',
        options: 'Las alternativas: cien por ciento sin copago financiado por el Estado, ochenta por ciento con copago del veinte según su plan, cobertura solo si se cambia a FONASA, cincuenta por ciento tras superar un deducible, o pagar y pedir reembolso. Piénsalo.',
        answer: 'Es la A. La Ley Ricarte Soto no le pregunta a este paciente por su ISAPRE: si el diagnóstico y el tratamiento están en el decreto, y lo indica un especialista en un centro acreditado, la cobertura es total y sin copago. Los distractores con veinte, cincuenta por ciento o deducible son la lógica del GES, que aquí no aplica.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Una paciente de 42 años diagnosticada de artritis reumatoide refractaria a metotrexato y leflunomida requiere inicio de un fármaco biológico de alto costo (adalimumab) contemplado en el decreto de la Ley Ricarte Soto. La paciente se encuentra afiliada a una ISAPRE.',
      question: '¿Cuál es la cobertura financiera que le corresponde según la ley?',
      options: [
        { letter: 'A', text: 'Cien por ciento de cobertura gratuita financiada por el Estado, sin importar su previsión de salud' },
        { letter: 'B', text: 'Ochenta por ciento de cobertura con un copago del veinte por ciento con cargo al deducible GES de su plan' },
        { letter: 'C', text: 'Cincuenta por ciento de financiamiento si sus ingresos familiares superan un cierto tope' },
        { letter: 'D', text: 'La Ley Ricarte Soto solo rige para afiliados a FONASA, por lo que la ISAPRE debe financiarlo con un seguro catastrófico' },
        { letter: 'E', text: 'Debe pagar la totalidad del fármaco y solicitar un reembolso anual con tope ante el Ministerio de Hacienda' },
      ],
      correct: 'A',
      explanation: 'La Ley 20.850 tiene cobertura universal para todos los habitantes del país que cumplan los criterios clínicos del decreto, sin distinción de previsión de salud, y la cobertura es totalmente gratuita para el beneficiario.',
      say: {
        stem: 'Una del banco de preguntas del libro, sobre el mismo punto. Paciente de cuarenta y dos años con artritis reumatoide refractaria a dos fármacos previos, que necesita un biológico de alto costo del decreto Ricarte Soto, y está afiliada a una ISAPRE.',
        question: '¿Cuál es la cobertura financiera que le corresponde según la ley?',
        options: 'Las opciones: cien por ciento gratuita sin importar la previsión, ochenta por ciento con copago del veinte, cincuenta por ciento según ingresos, que la ley solo rija para FONASA, o pagar todo y pedir reembolso.',
        answer: 'Es la A, la misma idea que el caso anterior: la Ley Ricarte Soto es universal y gratuita para todo el que cumpla el criterio clínico, sea de FONASA o de ISAPRE. No funciona por reembolso, sino por dispensación directa ya autorizada.' },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: '¿Cuál es el requisito indispensable que debe cumplir un adulto de 74 años afiliado a FONASA para poder retirar mensualmente los productos alimentarios del PACAM en el CESFAM?',
      question: '¿Cuál es el requisito correcto?',
      options: [
        { letter: 'A', text: 'Tener vigente el Examen de Medicina Preventiva del Adulto Mayor y sus vacunas al día' },
        { letter: 'B', text: 'Acreditar una pensión inferior al sueldo mínimo legal ante la dirección de desarrollo comunitario' },
        { letter: 'C', text: 'Presentar un certificado médico de desnutrición calórico proteica emitido por un geriatra' },
        { letter: 'D', text: 'Haber estado hospitalizado por patología médica en los últimos doce meses' },
        { letter: 'E', text: 'Contar con un índice de Barthel menor a cuarenta puntos, de dependencia severa' },
      ],
      correct: 'A',
      explanation: 'Para retirar los beneficios del PACAM en Atención Primaria, la normativa exige que el adulto de 70 años o más afiliado a FONASA tenga al día el EMPAM y su calendario de vacunación, sin exigir evaluación socioeconómica ni certificado de desnutrición.',
      say: {
        stem: 'Otra del banco. Un adulto de setenta y cuatro años, afiliado a FONASA, quiere retirar cada mes la Crema Años Dorados del PACAM en su CESFAM.',
        question: '¿Cuál es el requisito correcto?',
        options: 'Las opciones: tener el examen preventivo del adulto mayor y las vacunas al día, acreditar una pensión baja en la municipalidad, presentar un certificado de desnutrición, haber estado hospitalizado en el último año, o tener un índice de Barthel de dependencia severa.',
        answer: 'Es la A. El PACAM básico no exige evaluación socioeconómica ni certificado de desnutrición: el único requisito es tener el Examen de Medicina Preventiva del Adulto Mayor y las vacunas al día. La dependencia severa califica para otro programa, el de postrados, no para este.' },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Ley Ricarte Soto', tag: 'Universal, sin copago', kind: 'key', items: [
          { t: 'Cubre a todos, sin importar el seguro', d: 'FONASA, ISAPRE, FFAA o sin previsión',
            say: 'Cerremos con las reglas de oro. La Ley Ricarte Soto cubre a todos, sin importar el seguro de salud, y sin ningún copago.' },
        ] },
        { title: 'PNAC', tag: 'Universal por edad, no por previsión', kind: 'normal', items: [
          { t: 'Menores de seis años y gestantes', d: 'Se retira en el CESFAM, sea FONASA o ISAPRE',
            say: 'El PNAC es universal para todo menor de seis años y toda gestante, sin importar si son de FONASA o de una ISAPRE.' },
        ] },
        { title: 'PACAM', tag: 'FONASA y controles al día', kind: 'alert', items: [
          { t: 'Setenta años o más, EMPAM al día', d: 'No exige estado nutricional alterado',
            say: 'Y el PACAM es para los setenta años o más, afiliados a FONASA, con el examen preventivo y las vacunas al día. Si te llevas una sola idea de hoy: cuando un beneficio es universal, la previsión de salud deja de ser la pregunta. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'A qué beneficio corresponde cada paciente',
    root: N(
      'start', 'Paciente necesita un beneficio del Estado', 'Cuál de los tres corresponde',
      'Frente a un paciente con una necesidad de salud o nutricional, la pregunta es cuál de estos tres beneficios universales le corresponde.',
      ['', N(
        'q', '¿Qué necesita el paciente?', 'Alto costo, alimento infantil, o alimento del adulto mayor',
        'Pregúntate qué tipo de necesidad tiene: un tratamiento carísimo, un alimento para un niño o una gestante, o un alimento para un adulto mayor.',
        ['Tratamiento de alto costo', N(
          'ok', 'Ley Ricarte Soto', 'Cobertura total, sin copago, cualquier previsión',
          'Si el problema está en el decreto de tratamientos de alto costo, es la Ley Ricarte Soto: cobertura total y sin copago, sea FONASA, ISAPRE, Fuerzas Armadas o sin previsión.',
        )],
        ['Niño menor de seis o gestante', N(
          'ok', 'PNAC', 'Leche Purita en el CESFAM, sin importar la previsión',
          'Si es un niño menor de seis años o una gestante o nodriza, es el PNAC: retira la leche Purita en el CESFAM de su domicilio, sea FONASA o ISAPRE.',
        )],
        ['Adulto de setenta años o más', N(
          'ok', 'PACAM', 'Con FONASA y controles al día',
          'Y si es un adulto de setenta años o más, afiliado a FONASA, con el examen preventivo y las vacunas al día, es el PACAM: Crema y Bebida Láctea Años Dorados.',
        )],
      )],
    ),
  },
};
