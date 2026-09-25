// Clase 15.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-01).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-01',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'La pregunta que abre el examen: este ojo rojo, ¿es superficial o profundo?',
      say: 'Bienvenidos. Empezamos el bloque de oftalmología, y partimos por el motivo de consulta más frecuente de todos: el ojo rojo. Tu trabajo como médico general no es afinar el diagnóstico con lámpara de hendidura. Es algo más simple y más urgente: separar un cuadro superficial y benigno de un cuadro profundo que amenaza la visión y que tienes que derivar de inmediato. Toda la clase se ordena alrededor de esa sola pregunta.',
    },

    {
      type: 'flow',
      kicker: 'Semiología',
      title: 'Dos vasos, dos patrones de rojo',
      nodes: [
        { id: 'con', col: 0, row: 0, k: 'cause', t: 'Vasos conjuntivales', s: 'Circulación superficial' },
        { id: 'inc', col: 1, row: 0, k: 'effect', t: 'Inyección conjuntival', s: 'Rojo brillante, periférico' },
        { id: 'lim', col: 2, row: 0, k: 'good', t: 'Disminuye hacia el limbo', s: 'Se mueve, blanquea con fenilefrina' },
        { id: 'cil', col: 0, row: 2, k: 'cause', t: 'Arterias ciliares', s: 'Circulación profunda' },
        { id: 'inp', col: 1, row: 2, k: 'risk', t: 'Inyección ciliar', s: 'Halo violáceo periquerático' },
        { id: 'fij', col: 2, row: 2, k: 'alert', t: 'No se mueve ni blanquea', s: 'Patología intraocular grave' },
      ],
      edges: [
        { from: 'con', to: 'inc' }, { from: 'inc', to: 'lim' },
        { from: 'cil', to: 'inp' }, { from: 'inp', to: 'fij' },
      ],
      steps: [
        { show: ['con', 'inc'], note: 'Rojo brillante que se apaga hacia la córnea',
          say: 'Todo parte de mirar dónde está el rojo, y eso depende de qué vasos se dilatan. Si se dilatan los vasos conjuntivales, tienes una inyección conjuntival: un rojo brillante, más intenso en la periferia y en los fondos de saco, que va disminuyendo a medida que se acerca a la córnea.' },
        { show: ['lim'], note: 'Vasos móviles, se blanquean con fenilefrina',
          say: 'Esos vasos son móviles, se desplazan si mueves la conjuntiva con un aplicador, y se blanquean con un vasoconstrictor tópico como la fenilefrina. Es el patrón de la conjuntivitis y de la blefaritis. Este dato se pregunta: fenilefrina positiva, superficial.' },
        { show: ['cil'], note: 'Circulación más profunda',
          say: 'El otro patrón nace en las arterias ciliares anteriores, que están más profundas.' },
        { show: ['inp'], note: 'Halo violáceo inmediato a la córnea',
          say: 'Ahí aparece la inyección ciliar o periquerática: un halo violáceo, rojo oscuro, pegado al limbo, alrededor de la córnea.' },
        { show: ['fij'], note: 'No se mueve, no blanquea: sello de gravedad',
          say: 'Esos vasos no se mueven al desplazar la conjuntiva, y no blanquean con fenilefrina. Ese es el sello de la patología intraocular grave: queratitis, uveítis y glaucoma agudo. Guarda este contraste, porque de aquí sale todo el resto de la clase.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Banderas rojas',
      title: 'Los cinco signos que obligan a derivar',
      cards: [
        { title: 'Visión y dolor', tag: 'Los dos primeros', kind: 'alert', items: [
          { t: 'Baja de la agudeza visual', d: 'Más allá de un velo transitorio',
            say: 'Cualquiera de cinco signos excluye la conjuntivitis y obliga a derivar de urgencia al oftalmólogo. El primero: baja de la agudeza visual. Una conjuntivitis simple no baja la visión, salvo un velo transitorio que aclara al parpadear.' },
          { t: 'Dolor ocular real', d: 'Sordo o lancinante, no ardor ni arenilla',
            say: 'El segundo es el dolor ocular real. El ojo superficial arde o pica; el dolor sordo, terebrante o lancinante avisa que hay córnea, úvea o presión ocular comprometida.' },
        ] },
        { title: 'Pupila y córnea', tag: 'Los signos de examen', kind: 'alert', items: [
          { t: 'Alteración pupilar', d: 'Miosis hiporreactiva o midriasis fija',
            say: 'El tercero es la pupila. Una miosis unilateral que responde poco a la luz habla de uveítis; una midriasis media y fija habla de glaucoma agudo. Vas a ver esta diferencia otra vez en un minuto.' },
          { t: 'Córnea sin transparencia', d: 'Edema o fluoresceína positiva',
            say: 'El cuarto es la córnea: que pierda su transparencia habitual, en vidrio esmerilado, o que se tiña con fluoresceína.' },
        ] },
        { title: 'Cámara anterior', tag: 'El quinto signo', kind: 'alert', items: [
          { t: 'Hipopión o hipema', d: 'Nivel de pus o de sangre',
            say: 'Y el quinto es la cámara anterior anormal: un nivel de pus, que es el hipopión, un nivel de sangre, que es el hipema, o una cámara muy estrecha. Basta un solo signo de estos cinco, no los cinco juntos, para que la conducta sea derivar de urgencia.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico diferencial',
      title: 'Ojo rojo profundo: cuatro caminos, cuatro claves',
      nodes: [
        { id: 'prof', col: 0, row: 2, k: 'start', t: 'Ojo rojo profundo', s: 'Inyección ciliar' },
        { id: 'glau', col: 2, row: 0, k: 'alert', t: 'Glaucoma agudo', s: 'Midriasis media fija, ojo pétreo' },
        { id: 'uve', col: 2, row: 1, k: 'risk', t: 'Uveítis anterior', s: 'Miosis hiporreactiva, Tyndall' },
        { id: 'que', col: 2, row: 3, k: 'risk', t: 'Queratitis', s: 'Blefarospasmo, fluoresceína positiva' },
        { id: 'end', col: 2, row: 4, k: 'alert', t: 'Endoftalmitis', s: 'Postquirúrgica, hipopión' },
      ],
      edges: [
        { from: 'prof', to: 'glau', label: 'pupila fija y ojo duro' },
        { from: 'prof', to: 'uve', label: 'pupila chica y Tyndall' },
        { from: 'prof', to: 'que', label: 'dolor punzante y fluo positiva' },
        { from: 'prof', to: 'end', label: 'cirugía o trauma reciente' },
      ],
      steps: [
        { show: ['prof'], note: 'La inyección ciliar tiene cuatro sospechosos habituales',
          say: 'Con la inyección ciliar confirmada, hay cuatro diagnósticos que se reparten casi todos los casos, y cada uno tiene una clave que lo distingue del resto.' },
        { show: ['glau'], note: 'Cefalea, náuseas, halos, ojo pétreo',
          say: 'El glaucoma agudo de ángulo cerrado da una cefalea hemicraneana brutal, náuseas, vómitos, halos de colores, pupila en midriasis media fija, y el ojo se siente pétreo a la palpación. La presión suele pasar de cincuenta.' },
        { show: ['uve'], note: 'Miosis, fotofobia consensual, Tyndall',
          say: 'La uveítis anterior aguda, en cambio, da dolor moderado, fotofobia consensual muy intensa y una pupila en miosis que responde poco. En la lámpara de hendidura se ven células flotando en la cámara anterior, el fenómeno de Tyndall. Fíjate en el contraste con el glaucoma: una pupila achica, la otra dilata.' },
        { show: ['que'], note: 'Dolor punzante y tinción positiva',
          say: 'La queratitis y la úlcera corneal dan dolor punzante, blefarospasmo y fotofobia severa, con la córnea que se tiñe con fluoresceína.' },
        { show: ['end'], note: 'Máxima urgencia quirúrgica',
          say: 'Y la endoftalmitis aguda aparece después de una cirugía de catarata o un trauma, con hipopión y pérdida masiva de visión. Es la emergencia quirúrgica más extrema de las cuatro.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Conducta inmediata',
      title: 'Lo que se indica mientras llega el traslado',
      cards: [
        { title: 'Glaucoma agudo', tag: 'Bajar la presión ya', kind: 'pharma', items: [
          { t: 'Manitol endovenoso', d: 'Más acetazolamida oral y timolol tópico',
            say: 'Ante la sospecha de glaucoma agudo, se inician hipotensores oculares de inmediato: manitol endovenoso, acetazolamida oral y timolol tópico, mientras se organiza el traslado urgente para la iridotomía láser.' },
        ] },
        { title: 'Uveítis y queratitis', tag: 'Ciclopléjico, nunca mióticos', kind: 'pharma', items: [
          { t: 'Ciclopléjico para el dolor', d: 'Evita que el iris se pegue al cristalino',
            say: 'En la uveítis y en la queratitis se indica un ciclopléjico, que calma el dolor del espasmo ciliar y evita que el iris quede pegado al cristalino formando sinequias. Ojo con la trampa: la pilocarpina, un miótico, está contraindicada aquí, aunque sea el fármaco que sí se usa en el glaucoma crónico.' },
        ] },
        { title: 'La regla que nunca se rompe', tag: 'Corticoides', kind: 'alert', items: [
          { t: 'Jamás corticoides sin diagnóstico', d: 'Pueden perforar una úlcera que no viste',
            say: 'Y la regla de oro de toda la clase: jamás se indican corticoides tópicos en un ojo rojo sin diagnóstico oftalmológico confirmado. Si hay una úlcera que no detectaste, el corticoide la agranda y puede perforar la córnea.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'El extremo benigno',
      title: 'Hiposfagma: la mancha que asusta pero no duele',
      cards: [
        { title: 'Cómo se ve', tag: 'Sangre bajo la conjuntiva', kind: 'normal', items: [
          { t: 'Mancha roja intensa y homogénea', d: 'Bien delimitada, sin secreción',
            say: 'Y en el extremo opuesto del espectro está el hiposfagma, la hemorragia subconjuntival. Es sangre que se acumula bajo la conjuntiva por la rotura de un capilar, y se ve como una mancha roja intensa, pareja y bien delimitada, sin secreción.' },
          { t: 'Visión y pupilas normales', d: 'Indolora, sin baja de agudeza visual',
            say: 'La agudeza visual y los reflejos pupilares están intactos, y no hay dolor. Suele aparecer sola o después de toser, vomitar o hacer un esfuerzo, y a veces con un golpe mínimo.' },
        ] },
        { title: 'Conducta', tag: 'Nada de colirios', kind: 'key', items: [
          { t: 'Tranquilizar y controlar la presión', d: 'Se reabsorbe sola en dos semanas',
            say: 'La conducta es tranquilizar al paciente, controlar la presión arterial si corresponde, y esperar. No necesita colirio antibiótico ni corticoide: se reabsorbe sola en diez a catorce días. Fíjate en la lógica: es rojo, pero no tiene ninguno de los cinco signos de alarma. Por eso no se deriva de urgencia.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en el árbol de decisión con el que vas a razonar cualquier ojo rojo en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en ojo rojo',
      head: ['Hallazgo', 'Diagnóstico que sugiere', 'Trampa frecuente'],
      rows: [
        { cells: ['Pupila en midriasis media fija', 'Glaucoma agudo de ángulo cerrado', 'Dar atropina o algún midriático'],
          say: 'Repasemos las trampas. Pupila en midriasis media y fija: piensa en glaucoma agudo. El error clásico es indicar atropina o cualquier midriático, que empeora el bloqueo del ángulo.' },
        { cells: ['Pupila en miosis hiporreactiva', 'Uveítis anterior aguda', 'Confundirla con la midriasis del glaucoma'],
          say: 'Pupila en miosis que responde poco: uveítis anterior. La trampa es invertir los dos cuadros, porque el tratamiento de uno agrava al otro.' },
        { cells: ['Ojo rojo con fluoresceína positiva', 'Queratitis o úlcera corneal', 'Indicar corticoides para desinflamar'],
          say: 'Fluoresceína positiva: queratitis o úlcera corneal. Y la trampa más peligrosa de toda la oftalmología: dar corticoides para desinflamar sin haber teñido antes la córnea.' },
        { cells: ['Mancha roja homogénea, indolora, visión normal', 'Hiposfagma', 'Indicar colirio antibiótico o hemostático'],
          say: 'Mancha roja homogénea, indolora y con visión normal: hiposfagma. La trampa es medicalizarlo con colirios que no aportan nada.' },
        { cells: ['Cualquiera de los cinco signos de alarma', 'Derivación urgente a oftalmología', 'Tratar en APS y controlar en días'],
          say: 'Y la regla que resume todo: si hay uno solo de los cinco signos de alarma, la conducta es derivar de urgencia. Tratarlo en atención primaria y controlar en unos días es siempre la respuesta incorrecta.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 45 años consulta por ojo izquierdo rojo y con dolor moderado de un día de evolución, con fotofobia. Al examen: inyección periquerática, agudeza visual disminuida en el ojo izquierdo, y pupila izquierda en miosis de 2 milímetros con respuesta lenta a la luz, comparada con una pupila derecha de 4 milímetros normorreactiva. La tinción con fluoresceína es negativa.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar colirio de cloranfenicol y controlar en 48 horas' },
        { letter: 'B', text: 'Iniciar manitol endovenoso y acetazolamida oral' },
        { letter: 'C', text: 'Derivar de urgencia a oftalmología para confirmar uveítis anterior' },
        { letter: 'D', text: 'Indicar colirio de dexametasona y control ambulatorio' },
        { letter: 'E', text: 'Tranquilizar a la paciente y controlar en dos semanas' },
      ],
      correct: 'C',
      explanation: 'Inyección ciliar, dolor, fotofobia y miosis hiporreactiva unilateral son el cuadro cardinal de la uveítis anterior aguda. Con fluoresceína negativa, se descarta la queratitis. Ya hay un signo de alarma, por lo que corresponde derivar de urgencia; el corticoide solo se indica tras confirmar el diagnóstico y bajo control oftalmológico.',
      say: {
        stem: 'Vamos con el caso. Mujer de cuarenta y cinco años, con ojo izquierdo rojo y dolor moderado de un día de evolución, con fotofobia. Al examen: inyección periquerática, agudeza visual disminuida a izquierda, y pupila izquierda en miosis de dos milímetros que responde lento, comparada con una derecha de cuatro milímetros normal. La fluoresceína es negativa.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: colirio de cloranfenicol y control en cuarenta y ocho horas, manitol y acetazolamida, derivar de urgencia por sospecha de uveítis anterior, colirio de dexametasona con control ambulatorio, o tranquilizar y controlar en dos semanas. Piénsalo.',
        answer: 'Es la C. La inyección es ciliar, hay dolor real, baja de visión y miosis hiporreactiva unilateral: eso es uveítis anterior, y ya tienes al menos tres de los cinco signos de alarma. El manitol es la trampa si confundes la miosis con la midriasis del glaucoma. Y la dexametasona es la trampa más grave: nunca se indica un corticoide en un ojo rojo sin que el oftalmólogo haya confirmado el diagnóstico primero.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 149',
      stem: 'Un paciente de 48 años, con antecedente de hipermetropía, consulta por dolor en el ojo izquierdo, muy intenso, irradiado a la frente. Al examen físico, se aprecia eritema periquerático del ojo izquierdo, con pupila midriática arreactiva y se aprecia opacidad corneal. El ojo derecho tiene visión 20/20, mientras que el ojo izquierdo tiene visión borrosa, que solo es capaz de contar dedos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Conjuntivitis' },
        { letter: 'B', text: 'Uveítis aguda' },
        { letter: 'C', text: 'Queratitis viral aguda' },
        { letter: 'D', text: 'Trombosis de la vena central de la retina' },
        { letter: 'E', text: 'Glaucoma agudo' },
      ],
      correct: 'E',
      explanation: 'Hipermetropía como factor de riesgo, dolor intenso irradiado a la frente, eritema periquerático, pupila midriática arreactiva, opacidad corneal y caída severa de la agudeza visual son el cuadro clásico del glaucoma agudo de ángulo cerrado. La hipermetropía predispone porque el ojo es más pequeño y el ángulo, más estrecho.',
      say: {
        stem: 'Vamos con una pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Paciente de cuarenta y ocho años, hipermétrope, con dolor muy intenso en el ojo izquierdo, irradiado a la frente. Al examen: eritema periquerático, pupila midriática y arreactiva, opacidad corneal. El ojo derecho ve normal, y el izquierdo solo alcanza a contar dedos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: conjuntivitis, uveítis aguda, queratitis viral aguda, trombosis de la vena central de la retina, o glaucoma agudo.',
        answer: 'Es glaucoma agudo. La pupila midriática y fija es la clave que lo separa de la uveítis, donde la pupila se achica. Y la hipermetropía no es un dato de relleno: un ojo hipermétrope es más corto, con una cámara anterior más estrecha, y eso predispone justamente al cierre angular.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 98',
      stem: 'Paciente con psoriasis, disminución de agudeza visual, ojo rojo profundo y fotofobia importante.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Uveítis anterior aguda' },
        { letter: 'B', text: 'Epiescleritis' },
        { letter: 'C', text: 'Glaucoma agudo de ángulo cerrado' },
        { letter: 'D', text: 'Conjuntivitis bacteriana aguda' },
        { letter: 'E', text: 'Queratitis herpética' },
      ],
      correct: 'A',
      explanation: 'La psoriasis es una espondiloartropatía asociada a HLA-B27, el mismo grupo de enfermedades reumatológicas que se relaciona con uveítis anterior aguda recurrente. Con ojo rojo profundo, fotofobia intensa y baja de visión, y ese antecedente reumatológico, el diagnóstico más probable es uveítis, no glaucoma ni conjuntivitis.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de enero de dos mil veintitrés. Paciente con psoriasis, que consulta por disminución de la agudeza visual, ojo rojo profundo y fotofobia importante.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: uveítis anterior aguda, epiescleritis, glaucoma agudo de ángulo cerrado, conjuntivitis bacteriana aguda, o queratitis herpética.',
        answer: 'Es uveítis anterior aguda. El dato que decide la pregunta es la psoriasis, que pertenece al mismo grupo de enfermedades asociadas al antígeno HLA-B veintisiete que la espondiloartritis, y que se relaciona clásicamente con uveítis recurrente. Fíjate que el enunciado no te da el dato de la pupila: aquí lo que tienes que reconocer es la asociación de la enfermedad de base con el ojo rojo profundo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Un hombre de 58 años despierta con una mancha roja viva en el sector nasal del ojo derecho. No refiere traumatismo, dolor, pérdida de visión ni secreción ocular. Al examen: hemorragia plana homogénea que oculta los vasos esclerales en la conjuntiva bulbar nasal, agudeza visual normal en ambos ojos, pupilas normales y córnea transparente.',
      question: '¿Cuál es la conducta indicada?',
      options: [
        { letter: 'A', text: 'Indicar ácido tranexámico oral y reposo absoluto' },
        { letter: 'B', text: 'Tranquilizar al paciente, explicar que se resolverá en 10 a 14 días y no indicar fármacos tópicos' },
        { letter: 'C', text: 'Instilar colirio de fenilefrina para lograr vasoconstricción inmediata' },
        { letter: 'D', text: 'Realizar paracentesis conjuntival para evacuar el hematoma' },
        { letter: 'E', text: 'Derivar de inmediato para fotocoagulación láser' },
      ],
      correct: 'B',
      explanation: 'Hiposfagma o hemorragia subconjuntival espontánea, sin dolor, con visión y pupilas normales: no tiene ningún signo de alarma. La conducta es expectante, con educación y control de la presión arterial si corresponde. Se reabsorbe sola en una a dos semanas, sin fármacos tópicos.',
      say: {
        stem: 'Cerremos con un caso representativo del banco. Un hombre de cincuenta y ocho años despierta con una mancha roja intensa en el sector nasal del ojo derecho, sin trauma, sin dolor, sin baja de visión y sin secreción. Al examen, es una hemorragia plana y homogénea, la visión es normal en ambos ojos, las pupilas son normales y la córnea es transparente.',
        question: '¿Cuál es la conducta indicada?',
        options: 'Las opciones: ácido tranexámico y reposo, tranquilizar y no indicar fármacos, colirio de fenilefrina, paracentesis conjuntival, o derivar para fotocoagulación láser. Piénsalo.',
        answer: 'Es la B. Repasa los cinco signos de alarma: no hay ninguno. Es un hiposfagma, y la conducta es solo tranquilizar y esperar, se reabsorbe solo en diez a catorce días. Ninguna de las otras opciones tiene sentido: no hay nada que coagular, nada que vasoconstreñir y nada que drenar. Es el ejemplo perfecto de un ojo rojo que asusta pero que no necesita nada.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La primera pregunta', tag: 'Superficial o profundo', kind: 'key', items: [
          { t: 'Inyección conjuntival, sin dolor real', d: 'Superficial: se maneja en APS',
            say: 'Cerremos con las reglas de oro. La primera pregunta siempre es la misma: inyección conjuntival, periférica, que blanquea con fenilefrina y sin dolor real, es superficial y se maneja en atención primaria.' },
          { t: 'Inyección ciliar o un signo de alarma', d: 'Profundo: derivación urgente',
            say: 'Inyección ciliar, o un solo signo de alarma entre los cinco que vimos, es profundo, y se deriva de urgencia.' },
        ] },
        { title: 'La pupila decide', tag: 'Glaucoma versus uveítis', kind: 'alert', items: [
          { t: 'Midriasis fija: glaucoma agudo', d: 'Miosis hiporreactiva: uveítis anterior',
            say: 'Dentro de lo profundo, la pupila casi siempre decide: midriasis media y fija es glaucoma agudo; miosis hiporreactiva es uveítis anterior. Invertirlos invierte el tratamiento.' },
        ] },
        { title: 'La regla que nunca falla', tag: 'Corticoides', kind: 'pharma', items: [
          { t: 'Jamás corticoides sin diagnóstico', d: 'El hiposfagma no necesita ningún colirio',
            say: 'Y si te llevas una sola idea de hoy: nunca indiques corticoides en un ojo rojo sin diagnóstico confirmado, y no todo ojo rojo necesita un colirio, como te lo demuestra el hiposfagma. Nos vemos en la próxima clase, donde vamos a profundizar en las conjuntivitis.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Ojo rojo: superficial versus profundo',
    root: N('start', 'Paciente con ojo rojo', 'Primero, mira dónde está la inyección',
      'Paciente que consulta por ojo rojo. Antes de pensar en un diagnóstico, define el tipo de inyección: conjuntival o ciliar.',
      ['', N('q', '¿Inyección conjuntival o ciliar?', 'Y busca los cinco signos de alarma',
        'Inyección conjuntival, periférica, que blanquea con fenilefrina, o inyección ciliar, violácea, pegada al limbo, que no blanquea. Con eso ya tienes la mitad de la respuesta.',
        ['Conjuntival, sin alarma', N('ok', 'Ojo rojo superficial', 'Conjuntivitis o hiposfagma: manejo en APS',
          'Inyección conjuntival, sin dolor real, sin baja de visión y sin alteración pupilar: ojo rojo superficial. Es conjuntivitis o hiposfagma, y se maneja en atención primaria sin derivación urgente.')],
        ['Ciliar, con alarma', N('q', '¿Qué hace la pupila?', 'La pupila separa glaucoma de uveítis',
          'Inyección ciliar y al menos un signo de alarma: ojo rojo profundo. Ahora mira la pupila.',
          ['Midriasis media fija, ojo pétreo', N('alert', 'Glaucoma agudo de ángulo cerrado', 'Manitol, acetazolamida, timolol, derivar ya',
            'Pupila en midriasis media y fija, con el ojo duro a la palpación: glaucoma agudo. Hipotensores oculares de inmediato y derivación urgente para iridotomía láser.')],
          ['Miosis hiporreactiva, Tyndall', N('alert', 'Uveítis anterior aguda', 'Ciclopléjico, nunca mióticos, derivar',
            'Pupila en miosis que responde poco, con células en la cámara anterior: uveítis anterior. Ciclopléjico para el dolor, jamás un miótico, y derivación para confirmar y empezar corticoide tópico bajo control.')],
          ['Dolor punzante, fluoresceína positiva', N('alert', 'Queratitis o úlcera corneal', 'Ciclopléjico, nunca corticoides, derivar',
            'Dolor punzante, blefarospasmo y tinción positiva con fluoresceína: queratitis. Ciclopléjico para el dolor, nunca corticoides, y derivación prioritaria.')])])]),
  },
};
