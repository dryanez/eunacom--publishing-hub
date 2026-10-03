// Clase 2.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-10).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-10',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Sintomático respiratorio, GeneXpert, esquema RHZE, toxicidad y contactos',
      say: 'Bienvenidos. Hoy vemos tuberculosis pulmonar, uno de los temas que más se repite en el EUNACOM, y con una particularidad: casi todo lo que se pregunta sale de una norma, la del programa ministerial. En la clase anterior vimos que una cavidad en el pulmón puede ser absceso, cáncer o tuberculosis; hoy nos quedamos con la tuberculosis, desde que el paciente tose hasta que protegemos a su familia.',
    },

    {
      type: 'flow',
      kicker: 'Pesquisa',
      title: 'Todo parte con una definición',
      nodes: [
        { id: 'sr', col: 0, row: 1, k: 'start', t: 'Sintomático respiratorio', s: 'Tos con expectoración ≥ 2 semanas' },
        { id: 'est', col: 1, row: 1, k: 'mech', t: 'Estudio inmediato', s: 'GeneXpert + baciloscopía + cultivo' },
        { id: 'pos', col: 2, row: 0, k: 'risk', t: 'Positivo para M. tuberculosis', s: 'Caso confirmado' },
        { id: 'neg', col: 2, row: 2, k: 'q', t: 'Negativo con alta sospecha', s: 'Esperar cultivo, TAC, broncoscopía' },
        { id: 'not', col: 3, row: 0, k: 'alert', t: 'Notificación obligatoria', s: 'Y estudio de contactos' },
        { id: 'tto', col: 4, row: 0, k: 'good', t: 'Tratamiento en el programa', s: 'Gratuito, GES' },
      ],
      edges: [
        { from: 'sr', to: 'est' }, { from: 'est', to: 'pos', label: 'positivo' }, { from: 'est', to: 'neg', label: 'negativo' },
        { from: 'pos', to: 'not' }, { from: 'not', to: 'tto' },
      ],
      steps: [
        { show: ['sr'], note: '15 días o más de tos con expectoración',
          say: 'Todo parte de una definición operativa, y se pregunta tal cual. Sintomático respiratorio es toda persona que consulta con tos y expectoración por dos semanas o más, es decir, quince días o más. No importa por qué consultó: si cumple eso, se estudia.' },
        { show: ['est'], note: 'Es una obligación, no una opción',
          say: 'Y el estudio es inmediato. Es una obligación clínica y de salud pública: muestras de expectoración para la prueba molecular, la baciloscopía y el cultivo. Enseguida vemos qué aporta cada una.' },
        { show: ['pos'], note: 'Caso confirmado',
          say: 'Si la muestra es positiva para Mycobacterium tuberculosis, tienes un caso confirmado.' },
        { show: ['not', 'tto'], note: 'Notificar, estudiar contactos, tratar',
          say: 'Y se activan tres cosas a la vez: notificación obligatoria, estudio de contactos, e inicio del tratamiento normado por el Programa de Control y Eliminación de la Tuberculosis, el PROCET.' },
        { show: ['neg'], note: 'Negativo no siempre descarta',
          say: 'Si sale negativo pero la sospecha es alta, no se da de alta: se espera el cultivo, que es el estándar de oro, y se puede complementar con TAC de tórax o una evaluación broncoscópica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Programa y GES',
      title: 'Una enfermedad de salud pública',
      cards: [
        { title: 'GES', tag: 'Todas sus formas', kind: 'criteria', items: [
          { t: 'Diagnóstico, tratamiento y seguimiento', d: 'Gratuito e irrenunciable',
            say: 'La tuberculosis tiene Garantía Explícita en Salud. Asegura el diagnóstico, la confirmación bacteriológica o molecular, el tratamiento de primera y de segunda línea y el seguimiento, en forma gratuita e irrenunciable.' },
          { t: 'Para todos los habitantes', d: 'Independiente de la previsión',
            say: 'Y lo asegura para todos los habitantes del país, independiente de su previsión. Si una alternativa condiciona el tratamiento a la previsión o al pago, es incorrecta.' },
        ] },
        { title: 'Tratamiento observado', tag: 'DOTS / TAES', kind: 'key', items: [
          { t: 'Se toma frente al personal de salud', d: 'En el centro de salud',
            say: 'El tratamiento se da bajo la modalidad de tratamiento directamente observado, lo que se conoce como DOTS o TAES: el paciente toma sus fármacos frente al personal del centro de salud.' },
          { t: 'Asegura adherencia', d: 'Y previene resistencias',
            say: '¿Por qué tanto control? Porque un tratamiento largo e irregular es la fábrica de las cepas resistentes. Observar cada dosis asegura la adherencia y previene la resistencia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Tres exámenes, tres roles distintos',
      cards: [
        { title: 'GeneXpert MTB/RIF', tag: 'Examen inicial de elección', kind: 'key', items: [
          { t: 'PCR en tiempo real', d: 'Detecta M. tuberculosis en menos de 2 horas',
            say: 'El examen inicial de elección normado por el ministerio es el GeneXpert: una PCR en tiempo real, automatizada, que detecta el ADN del complejo Mycobacterium tuberculosis en menos de dos horas.' },
          { t: 'Detecta resistencia a rifampicina', d: 'Mutaciones del gen rpoB',
            say: 'Y tiene una ventaja que se pregunta: al mismo tiempo detecta las mutaciones del gen rpoB, que son las que dan resistencia a la rifampicina.' },
        ] },
        { title: 'Baciloscopía', tag: 'Ziehl-Neelsen o auramina', kind: 'criteria', items: [
          { t: '2 muestras de esputo', d: 'Una inmediata y otra matinal al día siguiente',
            say: 'La baciloscopía busca bacilos ácido alcohol resistentes. Se piden dos muestras: una inmediata, en la misma consulta, y otra matinal, en ayunas, al día siguiente.' },
          { t: 'Cuantifica la baciliferia', d: 'Estima cuánto contagia',
            say: 'Su valor es que cuantifica la baciliferia: mientras más cruces, más bacilos y más contagioso es el paciente.' },
        ] },
        { title: 'Cultivo de Koch', tag: 'Estándar de oro', kind: 'normal', items: [
          { t: 'Löwenstein-Jensen o MGIT', d: 'Obligatorio en todas las muestras',
            say: 'Y el cultivo, en Löwenstein-Jensen o en medio líquido MGIT, sigue siendo el estándar de oro. Es obligatorio en todas las muestras, porque certifica que el bacilo está vivo y permite hacer las pruebas de susceptibilidad a drogas.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Esquema primario: 2 RHZE + 4 RH',
      nodes: [
        { id: 'cas', col: 0, row: 1, k: 'start', t: 'Caso nuevo sensible', s: 'Tratamiento observado' },
        { id: 'ini', col: 1, row: 1, k: 'mech', t: 'Fase inicial: 2 meses', s: 'RHZE diario, 50 dosis' },
        { id: 'con', col: 2, row: 1, k: 'mech', t: 'Fase de continuación: 4 meses', s: 'RH, 100 dosis' },
        { id: 'fin', col: 3, row: 1, k: 'good', t: 'Total: 6 meses', s: 'TBC pulmonar clásica' },
        { id: 'exc', col: 3, row: 3, k: 'alert', t: 'Meníngea u osteoarticular', s: '12 meses + corticoides' },
      ],
      edges: [
        { from: 'cas', to: 'ini' }, { from: 'ini', to: 'con' }, { from: 'con', to: 'fin' },
        { from: 'con', to: 'exc', label: 'excepción' },
      ],
      steps: [
        { show: ['cas'], note: 'Caso nuevo, sin resistencia',
          say: 'Vamos al tratamiento del caso nuevo, sensible a los fármacos. Ojo con las letras, porque el examen las usa: R es rifampicina, H isoniazida, Z pirazinamida y E etambutol.' },
        { show: ['ini'], note: 'Cuatro fármacos para matar rápido',
          say: 'La fase inicial, o de ataque, dura dos meses, con cincuenta dosis diarias de lunes a viernes, y usa los cuatro fármacos juntos: rifampicina, isoniazida, pirazinamida y etambutol. Cuatro, porque al comienzo hay muchísimos bacilos y hay que matarlos rápido sin dejar que surja resistencia.' },
        { show: ['con'], note: 'Dos fármacos para esterilizar',
          say: 'Después viene la fase de continuación: cuatro meses, cien dosis, solo con rifampicina e isoniazida, para eliminar los bacilos que quedan.' },
        { show: ['fin'], note: '2 + 4 = 6 meses',
          say: 'En total, seis meses. Dos RHZE más cuatro RH: esa fórmula tienes que saberla de memoria.' },
        { show: ['exc'], note: 'SNC y hueso: 12 meses',
          say: 'La excepción que se pregunta: la tuberculosis meníngea, del sistema nervioso central y la osteoarticular. Ahí la fase de continuación se alarga hasta completar doce meses en total, y además se agregan corticoides.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Dosis y formas especiales',
      cards: [
        { title: 'Dosis diarias', tag: 'Por kilo de peso', kind: 'pharma', items: [
          { t: 'Rifampicina 10 mg/kg · isoniazida 5 mg/kg', d: 'Máximos: 600 mg y 300 mg',
            say: 'Las dosis van por kilo de peso. Rifampicina, diez miligramos por kilo, con un máximo de seiscientos al día. Isoniazida, cinco por kilo, con un máximo de trescientos.' },
          { t: 'Pirazinamida 25 mg/kg · etambutol 15–20 mg/kg', d: 'Solo en los 2 primeros meses',
            say: 'Pirazinamida, veinticinco por kilo, y etambutol, quince a veinte por kilo. Y recuerda que estos dos solo van en la fase inicial, los dos primeros meses.' },
        ] },
        { title: 'Formas que cambian el esquema', tag: 'Se preguntan', kind: 'alert', items: [
          { t: 'Meníngea: 2 RHZE + 10 RH', d: 'Corticoides las primeras 6 a 8 semanas',
            say: 'En la meníngea, dos RHZE más diez RH, doce meses, con corticoides sistémicos, dexametasona o prednisona, en las primeras seis a ocho semanas. El corticoide disminuye las secuelas neurológicas y la mortalidad.' },
          { t: 'Pleural: 6 meses, sin cambios', d: 'Exudado linfocítico con ADA > 40',
            say: 'La pleural, en cambio, se trata igual que la pulmonar, seis meses. Se sospecha con un exudado linfocítico con ADA mayor a cuarenta, y eso lo retomamos en la próxima clase de derrame pleural.' },
          { t: 'Miliar: 6 a 12 meses', d: 'Patrón en grano de mijo',
            say: 'Y la miliar, con su patrón micronodular difuso en grano de mijo, se trata de seis a doce meses según el compromiso.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Reacciones adversas',
      title: 'Isoniazida y rifampicina',
      cards: [
        { title: 'Isoniazida (H)', tag: 'Nervio e hígado', kind: 'alert', items: [
          { t: 'Neuropatía periférica', d: 'Por déficit de piridoxina (B6)',
            say: 'Las reacciones adversas son de las preguntas más frecuentes del tema, así que vamos fármaco por fármaco. La isoniazida da neuropatía periférica, porque interfiere con la piridoxina, la vitamina B seis. El paciente cuenta hormigueo o dolor en los pies.' },
          { t: 'Prevenir con piridoxina 25–50 mg/día', d: 'Diabéticos, alcohólicos, desnutridos, embarazadas, IRC',
            say: 'Se previene dando piridoxina, veinticinco a cincuenta miligramos al día, a los grupos de riesgo: diabéticos, alcohólicos, desnutridos, embarazadas y pacientes con insuficiencia renal. También da hepatitis tóxica.' },
        ] },
        { title: 'Rifampicina (R)', tag: 'Hígado e interacciones', kind: 'pharma', items: [
          { t: 'Orina y lágrimas rojo-anaranjadas', d: 'Efecto benigno y esperado',
            say: 'La rifampicina tiñe de rojo anaranjado la orina, la saliva y las lágrimas. Es benigno y esperado: no es daño renal ni hepático, y no se suspende. Es una trampa clásica.' },
          { t: 'Inductor potente del citocromo P450', d: 'Anticonceptivos, antirretrovirales, anticoagulantes',
            say: 'Además es un potente inductor del citocromo P cuatrocientos cincuenta, con interacciones críticas: anticonceptivos orales, antirretrovirales, anticoagulantes y corticoides. Y su hepatotoxicidad es de tipo colestásico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Reacciones adversas',
      title: 'Pirazinamida y etambutol',
      cards: [
        { title: 'Pirazinamida (Z)', tag: 'La más hepatotóxica', kind: 'alert', items: [
          { t: 'El más hepatotóxico del esquema', d: 'Vigilar pruebas hepáticas',
            say: 'La pirazinamida es el fármaco más hepatotóxico de los cuatro. Si te preguntan cuál es el más hepatotóxico, no es la isoniazida: es la pirazinamida.' },
          { t: 'Hiperuricemia', d: 'Artralgias o crisis de gota',
            say: 'Y como inhibe la secreción tubular de ácido úrico, produce hiperuricemia, que puede gatillar artralgias o una crisis de gota aguda.' },
        ] },
        { title: 'Etambutol (E)', tag: 'El ojo', kind: 'alert', items: [
          { t: 'Neuritis óptica retrobulbar', d: 'Dosis dependiente',
            say: 'El etambutol es el del ojo: produce una neuritis óptica retrobulbar, que depende de la dosis.' },
          { t: 'Primero se pierde el rojo-verde', d: 'Discromatopsia: suspender de inmediato',
            say: 'Lo primero que aparece es la discromatopsia, la dificultad para distinguir el rojo del verde; después, escotoma central y baja de agudeza visual. Exige suspender el etambutol de inmediato. Si el enunciado dice que el paciente confunde los colores del semáforo, ya tienes la respuesta.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'Del síntoma al fármaco y a la conducta',
      nodes: [
        { id: 'ori', col: 0, row: 0, k: 'effect', t: 'Orina anaranjada', s: 'Rifampicina' },
        { id: 'ori2', col: 1, row: 0, k: 'good', t: 'No suspender', s: 'Efecto benigno' },
        { id: 'par', col: 0, row: 1, k: 'effect', t: 'Parestesias en los pies', s: 'Isoniazida' },
        { id: 'par2', col: 1, row: 1, k: 'good', t: 'Piridoxina 25–50 mg/día', s: 'Mantener el esquema' },
        { id: 'vis', col: 0, row: 2, k: 'effect', t: 'Confunde rojo y verde', s: 'Etambutol' },
        { id: 'vis2', col: 1, row: 2, k: 'alert', t: 'Suspender etambutol ya', s: 'Evaluar por oftalmología' },
        { id: 'hep', col: 0, row: 3, k: 'effect', t: 'Transaminasas altas', s: 'Z, la más hepatotóxica' },
        { id: 'hep2', col: 1, row: 3, k: 'q', t: '¿> 5× LSN, o > 3× con síntomas?', s: 'Solo entonces se suspende' },
      ],
      edges: [
        { from: 'ori', to: 'ori2' }, { from: 'par', to: 'par2' }, { from: 'vis', to: 'vis2' }, { from: 'hep', to: 'hep2' },
      ],
      steps: [
        { show: ['ori', 'ori2'], note: 'La trampa: suspender por la orina',
          say: 'Juntemos las toxicidades en lo que el examen realmente pregunta: qué hacer. Orina anaranjada: es la rifampicina, y no se suspende nada. La alternativa que dice suspender el tratamiento o estudiar el riñón es la trampa.' },
        { show: ['par', 'par2'], note: 'Se trata con B6, no se cambia el esquema',
          say: 'Parestesias dolorosas en los pies: isoniazida. La conducta es agregar piridoxina, veinticinco a cincuenta miligramos al día, y mantener el esquema sin interrumpirlo.' },
        { show: ['vis', 'vis2'], note: 'La única que se suspende de inmediato',
          say: 'Visión borrosa o colores deslavados: etambutol. Aquí sí, suspensión inmediata y evaluación oftalmológica.' },
        { show: ['hep'], note: 'Subir un poco es frecuente',
          say: 'Y las transaminasas. La pirazinamida es la más hepatotóxica, pero una elevación leve y sin síntomas es frecuente al comenzar el tratamiento.' },
        { show: ['hep2'], note: 'Si no llega al corte: mantener y controlar',
          say: 'Según el libro, solo se suspende si las transaminasas superan cinco veces el límite normal en un paciente asintomático, o tres veces si hay síntomas de hepatitis. Por debajo de eso, se mantiene el esquema y se repite el perfil hepático en una a dos semanas.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Contactos',
      title: 'Estudio de contactos y terapia preventiva',
      nodes: [
        { id: 'cto', col: 0, row: 1, k: 'start', t: 'Contacto estrecho', s: 'Convive o comparte ≥ 6 h diarias' },
        { id: 'ev', col: 1, row: 1, k: 'mech', t: 'Anamnesis, examen y Rx tórax', s: 'Descartar enfermedad activa' },
        { id: 'act', col: 2, row: 0, k: 'risk', t: 'Enfermedad activa', s: 'Estudio y tratamiento completo' },
        { id: 'q', col: 2, row: 2, k: 'q', t: '¿Menor de 5 años o VIH?', s: 'Asintomático, Rx normal' },
        { id: 'tpt', col: 3, row: 2, k: 'good', t: 'Terapia preventiva obligatoria', s: 'Isoniazida 10 mg/kg/día × 6 meses' },
        { id: 'ppd', col: 4, row: 2, k: 'trap', t: 'Sin esperar PPD ni IGRA', s: 'Independiente del resultado' },
      ],
      edges: [
        { from: 'cto', to: 'ev' }, { from: 'ev', to: 'act', label: 'alterado' }, { from: 'ev', to: 'q', label: 'normal' },
        { from: 'q', to: 'tpt', label: 'sí' }, { from: 'tpt', to: 'ppd' },
      ],
      steps: [
        { show: ['cto'], note: 'Quién es contacto estrecho',
          say: 'Último bloque: la familia del paciente. Contacto estrecho es quien convive con el caso índice bacilífero, o comparte con él seis horas diarias o más.' },
        { show: ['ev'], note: 'Primero descartar enfermedad activa',
          say: 'A todo contacto estrecho se le hace anamnesis, examen físico y radiografía de tórax frontal. El objetivo es uno solo: descartar que ya tenga la enfermedad activa.' },
        { show: ['act'], note: 'Si está enfermo, se trata como caso',
          say: 'Si tiene síntomas o la radiografía está alterada, deja de ser un contacto: se estudia y se trata como un caso.' },
        { show: ['q', 'tpt'], note: 'Menores de 5 y VIH: siempre',
          say: 'Si está asintomático y con radiografía normal, viene la terapia preventiva, que es obligatoria en todos los niños menores de cinco años y en las personas que viven con VIH. El esquema más usado es isoniazida, diez miligramos por kilo al día, con máximo de trescientos, por seis meses; o rifampicina por cuatro meses.' },
        { show: ['ppd'], note: 'Trampa: esperar la tuberculina',
          say: 'Y el detalle que se pregunta: en esos dos grupos la terapia preventiva va independiente del resultado de la tuberculina o del IGRA. Esperar el PPD para decidir es la trampa. ¿Por qué tanta prisa? Porque el niño pequeño puede progresar rápido a meningitis tuberculosa o tuberculosis miliar.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol, desde la tos hasta los contactos.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cuatro fármacos, cuatro toxicidades',
      head: ['Fármaco', 'Efecto adverso típico', 'Conducta / perla'],
      rows: [
        { cells: ['Isoniazida (H)', 'Neuropatía periférica y hepatitis', 'Piridoxina 25–50 mg/día; no suspender'],
          say: 'Repasemos las trampas en una tabla. Isoniazida: neuropatía periférica y hepatitis. Se previene y se trata con piridoxina, sin suspender el esquema.' },
        { cells: ['Rifampicina (R)', 'Orina rojo-anaranjada; inductor CYP450', 'Benigno; ojo con anticonceptivos'],
          say: 'Rifampicina: orina y secreciones anaranjadas, que son benignas. Lo peligroso son sus interacciones, como la falla de los anticonceptivos orales.' },
        { cells: ['Pirazinamida (Z)', 'La más hepatotóxica; hiperuricemia', 'Puede gatillar gota'],
          say: 'Pirazinamida: la más hepatotóxica, y la que sube el ácido úrico hasta gatillar una crisis de gota.' },
        { cells: ['Etambutol (E)', 'Neuritis óptica: pierde el rojo-verde', 'Suspender de inmediato'],
          say: 'Etambutol: neuritis óptica, con pérdida precoz de la discriminación entre rojo y verde. Es la única de la tabla que obliga a suspender de inmediato.' },
        { cells: ['Contacto < 5 años o VIH, Rx normal', 'Riesgo de TBC grave', 'Terapia preventiva sin esperar PPD'],
          say: 'Y una fila que no es de fármacos, pero se pregunta igual: el contacto menor de cinco años o con VIH, asintomático y con radiografía normal, recibe terapia preventiva sin esperar la tuberculina.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 38 años con TBC pulmonar (baciloscopía +++, GeneXpert sin resistencia a rifampicina) en tratamiento observado con RHZE diario. A las 3 semanas consulta por orina de color anaranjado brillante y parestesias dolorosas en los dedos de ambos pies. Pruebas hepáticas normales.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Suspender la rifampicina por nefrotoxicidad' },
        { letter: 'B', text: 'Suspender todo el esquema hasta evaluar por neurología' },
        { letter: 'C', text: 'Agregar piridoxina 25–50 mg/día y mantener el esquema' },
        { letter: 'D', text: 'Suspender el etambutol de inmediato' },
        { letter: 'E', text: 'Cambiar la isoniazida por ciprofloxacino' },
      ],
      correct: 'C',
      explanation: 'La orina anaranjada es un efecto benigno y esperado de la rifampicina. Las parestesias distales son neuropatía por isoniazida (déficit de piridoxina): se agrega vitamina B6 25–50 mg/día y se mantiene el tratamiento, ya que las pruebas hepáticas son normales.',
      say: {
        stem: 'Vamos con un caso. Mujer de treinta y ocho años con tuberculosis pulmonar bacilífera, sin resistencia a rifampicina en el GeneXpert, en tratamiento observado con RHZE. A las tres semanas consulta por dos cosas: orina de color anaranjado brillante, y parestesias dolorosas en los dedos de ambos pies. Sus pruebas hepáticas son normales.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: suspender la rifampicina, suspender todo el esquema, agregar piridoxina y mantener el esquema, suspender el etambutol, o cambiar la isoniazida por ciprofloxacino. Piénsalo.',
        answer: 'Es la C. El enunciado mezcla dos efectos a propósito. La orina anaranjada es la rifampicina, y es benigna: no se suspende. Las parestesias son neuropatía por isoniazida, y se tratan con piridoxina, manteniendo el esquema. La A es la trampa más tentadora, porque asusta ver la orina de ese color. Y la D confunde fármacos: el etambutol da problemas en la vista, no en los pies.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 149',
      stem: 'Un paciente de 35 años, en situación de calle, presenta un cuadro de 6 meses de evolución de tos con expectoración mucosa y mucopurulenta, en ocasiones hemoptoica, asociada a malestar general, disnea de esfuerzos, baja de peso y sensación febril. Al examen físico, está enflaquecido, pálido, con T°: 37,5°C, FC: 87x’, PA: 110/70 mmHg, FR: 18x’. Su examen pulmonar muestra crépitos bilaterales y algunas sibilancias. Su hemograma muestra hematocrito: 32%, hemoglobina: 10,6 g/dl, leucocitos: 15.600 por mm3, VHS: 60 mm/h, PCR: 120 mg/L y elisa VIH negativo, PCR covid-19 negativa, baciloscopías de expectoración negativas, con muestra hemorrágica y PPD: 20mm. Se realiza una radiografía de tórax, que se muestra a continuación (fuente radiopaedia):',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar TAC de tórax' },
        { letter: 'B', text: 'Solicitar cultivo para bacillus tuberculosis en medio sólido' },
        { letter: 'C', text: 'Solicitar reacción en cadena de polimerasa para tuberculosis en expectoración' },
        { letter: 'D', text: 'Repetir la PCR de covid-19 en muestra nasofaríngea' },
        { letter: 'E', text: 'Realizar fibrobroncoscopía con lavado bronquioalveolar' },
      ],
      correct: 'C',
      explanation: 'Clínica de tuberculosis con baciloscopías negativas: la PCR para tuberculosis (GeneXpert) es más sensible, da resultado rápido y hoy es el examen inicial de elección. El cultivo también sirve, pero tarda semanas.',
      say: {
        stem: 'Ahora las preguntas reales. La primera, del EUNACOM de agosto de dos mil veintiuno. Hombre de treinta y cinco años, en situación de calle, con seis meses de tos con expectoración, a veces hemoptoica, baja de peso y sensación febril. Está enflaquecido y pálido, con anemia y parámetros inflamatorios altos. VIH negativo, covid negativo, PPD de veinte milímetros, y baciloscopías negativas, en una muestra hemorrágica.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: TAC de tórax, cultivo en medio sólido, PCR para tuberculosis en expectoración, repetir la PCR de covid, o broncoscopía con lavado. Piénsalo.',
        answer: 'Es la C. Es un sintomático respiratorio de libro, con todo el cuadro de tuberculosis, y una baciloscopía negativa no la descarta. La PCR, que es el GeneXpert, es el examen de elección: da resultado en menos de dos horas y además informa la resistencia a rifampicina. El cultivo es el distractor: es el estándar de oro y se pide igual, pero no es el paso para confirmar rápido.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 8',
      stem: 'Un paciente de 42 años consulta por tos y disnea de 2 semanas de evolución, asociada a expectoración mucopurulenta y, en ocasiones, hemoptoica. Además, ha presentado fiebre ocasional, hasta 38,2°C. Al examen físico presenta estertores bilaterales en ambos campos pulmonares. Se solicitaron baciloscopías de expectoración, que resultan negativas. Además, se solicita otros exámenes, que muestran quantiferón para tuberculosis (+) y PCR para Mycobacterium tuberculosis (+). Su radiografía de tórax se muestra más abajo.',
      question: 'La conducta más adecuada es:',
      options: [
        { letter: 'A', text: 'Iniciar profilaxis con isoniazida' },
        { letter: 'B', text: 'Iniciar rifampicina más isoniazida' },
        { letter: 'C', text: 'Iniciar tratamiento habitual para la tuberculosis' },
        { letter: 'D', text: 'Solicitar TAC de tórax' },
        { letter: 'E', text: 'Esperar el resultado del cultivo de Koch y decidir conducta según resultado' },
      ],
      correct: 'C',
      explanation: 'La PCR positiva para M. tuberculosis confirma la enfermedad aunque las baciloscopías sean negativas. Se inicia el tratamiento habitual (esquema primario RHZE). La profilaxis es para contactos sin enfermedad activa.',
      say: {
        stem: 'Una del EUNACOM de diciembre de dos mil dieciocho. Hombre de cuarenta y dos años, con dos semanas de tos con expectoración a veces hemoptoica y fiebre ocasional. Las baciloscopías son negativas, pero el quantiferón es positivo y la PCR para Mycobacterium tuberculosis también es positiva.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: profilaxis con isoniazida, rifampicina más isoniazida, tratamiento habitual para la tuberculosis, TAC de tórax, o esperar el cultivo. Piénsalo.',
        answer: 'Es la C. La prueba molecular positiva confirma la enfermedad, aunque la baciloscopía sea negativa, y se inicia el esquema primario completo. La A es la trampa: la profilaxis es para el contacto sin enfermedad activa, no para un enfermo. La B se queda corta, porque dos fármacos es la fase de continuación. Y esperar el cultivo solo retrasa un tratamiento que ya está indicado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 21',
      stem: 'Paciente de 35 años VIH (+) con tos productiva de 3 semanas, baja de peso y sudoración nocturna. Baciloscopia de esputo positiva.',
      question: '¿Cuál es el tratamiento de primera línea?',
      options: [
        { letter: 'A', text: 'Isoniazida + Rifampicina + Pirazinamida + Etambutol por 2 meses, luego Isoniazida + Rifampicina por 4 meses' },
        { letter: 'B', text: 'Claritromicina + Etambutol por 6 meses' },
        { letter: 'C', text: 'Moxifloxacino + Rifampicina por 9 meses' },
        { letter: 'D', text: 'Isoniazida en monoterapia por 9 meses' },
        { letter: 'E', text: 'Cotrimoxazol forte por 6 meses' },
      ],
      correct: 'A',
      explanation: 'TBC pulmonar activa: esquema 2 HRZE + 4 HR, 6 meses en total, independiente del estado VIH.',
      say: {
        stem: 'Una reciente, del EUNACOM de julio de dos mil veinticinco. Paciente de treinta y cinco años con VIH, tos productiva de tres semanas, baja de peso y sudoración nocturna. Baciloscopía positiva.',
        question: '¿Cuál es el tratamiento de primera línea?',
        options: 'Las opciones: dos meses de cuatro fármacos y luego cuatro meses de isoniazida con rifampicina, claritromicina con etambutol, moxifloxacino con rifampicina, isoniazida sola, o cotrimoxazol. Piénsalo.',
        answer: 'Es la A: dos RHZE más cuatro RH, seis meses. Fíjate en la trampa del enunciado: el VIH te invita a pensar en otra cosa, pero la tuberculosis pulmonar activa se trata con el mismo esquema primario. La D, isoniazida sola, es terapia preventiva, nunca tratamiento de enfermedad activa. Y la B es un esquema para micobacterias atípicas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 142',
      stem: '¿Cuál es la conducta más adecuada para un paciente, que es contacto intradomiciliario de otro individuo diagnosticado de tuberculosis pulmonar bacilífera?',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar PPD y cultivo de expectoración' },
        { letter: 'B', text: 'Solicitar radiografía de tórax y baciloscopías' },
        { letter: 'C', text: 'Controlar clínicamente por 3 meses' },
        { letter: 'D', text: 'Indicar profilaxis con isoniazida por 6 meses' },
        { letter: 'E', text: 'Solicitar cultivo de Koch y broncoscopía' },
      ],
      correct: 'B',
      explanation: 'Al contacto intradomiciliario se le pregunta por síntomas y se le pide radiografía de tórax y baciloscopías, para descartar enfermedad activa. Solo después se decide la terapia preventiva.',
      say: {
        stem: 'Del EUNACOM de julio de dos mil diecinueve, una pregunta directa: ¿qué se hace con el contacto intradomiciliario de un paciente con tuberculosis pulmonar bacilífera?',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: PPD y cultivo, radiografía de tórax y baciloscopías, control clínico por tres meses, profilaxis con isoniazida, o cultivo de Koch y broncoscopía. Piénsalo.',
        answer: 'Es la B. Con el contacto, lo primero es descartar enfermedad activa, y eso se hace con la radiografía de tórax y las baciloscopías. La D es la trampa: la profilaxis viene después, cuando ya descartaste la enfermedad; dar isoniazida sola a alguien con tuberculosis activa es tratarlo mal. Y controlar por tres meses deja pasar casos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 21',
      stem: 'Un paciente de 32 años, lleva un año conviviendo con pacientes bacilíferos, se encuentra asintomático y su radiografía de tórax no muestra alteraciones, se solicita un PPD que resulta en 23 mm.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar tratamiento atibiótico con isoniazida, pirazinamida, rifampicina y etambutol por 6 meses' },
        { letter: 'B', text: 'Repetir PPD en un mes' },
        { letter: 'C', text: 'Dar de alta y control en caso de síntomas' },
        { letter: 'D', text: 'Solicitar reacción en cadena de polimerasa para mycobacterium tuberculosis en lavado bronquioloalveolar' },
        { letter: 'E', text: 'Indicar isoniazida por 6 meses' },
      ],
      correct: 'E',
      explanation: 'Contacto asintomático, con radiografía normal (sin enfermedad activa) y PPD muy positivo: infección latente. Se indica terapia preventiva con isoniazida por 6 meses.',
      say: {
        stem: 'La última, del EUNACOM de julio de dos mil diecisiete. Paciente de treinta y dos años que lleva un año conviviendo con pacientes bacilíferos. Está asintomático, su radiografía de tórax es normal, y el PPD mide veintitrés milímetros.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: esquema de cuatro fármacos, repetir el PPD, dar de alta, PCR en lavado broncoalveolar, o isoniazida por seis meses. Piénsalo.',
        answer: 'Es la E. Asintomático y con radiografía normal: no tiene enfermedad activa. Pero el PPD muy positivo dice que está infectado, y por eso recibe terapia preventiva con isoniazida por seis meses. La A es la trampa: cuatro fármacos es para la enfermedad activa. Y dar de alta a alguien infectado, después de un año expuesto, es perder la oportunidad de prevenir.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Programa', kind: 'key', items: [
          { t: 'Tos con expectoración ≥ 15 días', d: 'Sintomático respiratorio: se estudia',
            say: 'Cerremos con las reglas de oro. Tos con expectoración por quince días o más es un sintomático respiratorio, y se estudia de inmediato.' },
          { t: 'GeneXpert primero; cultivo siempre', d: 'Baciloscopía negativa no descarta',
            say: 'El GeneXpert es el examen inicial, porque en menos de dos horas detecta el bacilo y la resistencia a rifampicina; el cultivo se pide siempre. Y una baciloscopía negativa no descarta la enfermedad.' },
        ] },
        { title: 'Tratamiento', tag: 'Observado', kind: 'pharma', items: [
          { t: '2 RHZE + 4 RH = 6 meses', d: 'Meníngea y osteoarticular: 12 meses',
            say: 'El esquema es dos RHZE más cuatro RH, seis meses, observado. La meníngea y la osteoarticular van a doce meses, y la meníngea con corticoides.' },
          { t: 'Orina naranja: seguir · rojo-verde: suspender E', d: 'Parestesias: piridoxina',
            say: 'Orina anaranjada, se sigue; parestesias, piridoxina; y si confunde el rojo con el verde, se suspende el etambutol.' },
        ] },
        { title: 'Contactos', tag: 'Prevención', kind: 'alert', items: [
          { t: 'Primero descartar enfermedad activa', d: 'Clínica y radiografía de tórax',
            say: 'Con los contactos, primero se descarta la enfermedad activa con clínica y radiografía.' },
          { t: 'Menor de 5 o VIH: terapia preventiva', d: 'Sin esperar el PPD',
            say: 'Y en el menor de cinco años o con VIH, terapia preventiva sin esperar el PPD. Si te llevas una sola idea de hoy: la tuberculosis se maneja con la norma, y el examen premia saber quién se estudia, con qué esquema se trata y a quién se protege. En la próxima clase pasamos a la pleura. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Tuberculosis: de la tos a los contactos',
    root: N('start', 'Tos con expectoración ≥ 15 días', 'Sintomático respiratorio',
      'Todo parte con el sintomático respiratorio: tos con expectoración por quince días o más. Se estudia de inmediato.',
      ['', N('q', '¿GeneXpert o baciloscopía positivos?', 'Cultivo en todas las muestras',
        'Se pide GeneXpert, baciloscopía y cultivo. La pregunta es si alguna prueba confirmó el bacilo.',
        ['NO, con alta sospecha', N('do', 'Esperar cultivo · TAC · broncoscopía', 'Negativo no descarta',
          'Si todo es negativo pero la sospecha sigue alta, no se descarta: se espera el cultivo, y se complementa con TAC o broncoscopía.')],
        ['SÍ', N('alert', 'Notificar + estudiar contactos', 'Tratamiento en el PROCET',
          'Si es positivo: notificación obligatoria, estudio de contactos e ingreso al programa.',
          ['Forma pulmonar', N('ok', '2 RHZE + 4 RH', '6 meses, observado',
            'En la tuberculosis pulmonar, dos meses de RHZE y cuatro de RH, seis meses en total, con tratamiento directamente observado.')],
          ['Meníngea u osteoarticular', N('refer', '2 RHZE + 10 RH + corticoides', '12 meses',
            'En la meníngea o la osteoarticular, se alarga a doce meses, y se agregan corticoides.')],
          ['Contacto menor de 5 o VIH, Rx normal', N('do', 'Terapia preventiva', 'Isoniazida 6 meses, sin esperar PPD',
            'Y en los contactos menores de cinco años o con VIH, asintomáticos y con radiografía normal, terapia preventiva con isoniazida por seis meses, sin esperar la tuberculina.')])])]),
  },
};
