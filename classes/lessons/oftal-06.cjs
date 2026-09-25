// Clase 15.6 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-06).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-06',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cefalea que en realidad es el ojo, un globo pétreo, y por qué jamás se dilata la pupila',
      say: 'Bienvenidos. Hoy vemos la emergencia oftalmológica más rentable del examen: el glaucoma agudo de ángulo cerrado. Es un cuadro que se disfraza de migraña o de accidente cerebrovascular, con cefalea, náuseas y vómitos, y que si no se reconoce a tiempo deja ciego al paciente en horas. Vamos a aprender a reconocerlo, a tratarlo de urgencia, y sobre todo, a nunca cometer el error que lo empeora.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'El bloqueo pupilar: por qué se dispara la presión',
      nodes: [
        { id: 'ana', col: 0, row: 0, k: 'cause', t: 'Ojo pequeño, hipermétrope', s: 'Cámara anterior estrecha' },
        { id: 'cri', col: 0, row: 2, k: 'cause', t: 'Cristalino engrosado', s: 'Edad avanzada, catarata' },
        { id: 'mid', col: 1, row: 1, k: 'mech', t: 'Midriasis media', s: 'Penumbra, estrés, anticolinérgicos' },
        { id: 'blo', col: 2, row: 1, k: 'mech', t: 'Bloqueo pupilar', s: 'El iris se pliega y ocluye el trabéculo' },
        { id: 'dre', col: 3, row: 0, k: 'effect', t: 'Se cierra el drenaje', s: 'El acuoso no llega al canal de Schlemm' },
        { id: 'pio', col: 4, row: 1, k: 'risk', t: 'PIO dispara a 50-80', s: 'Isquemia del nervio óptico y la retina' },
      ],
      edges: [
        { from: 'ana', to: 'mid' }, { from: 'cri', to: 'mid' },
        { from: 'mid', to: 'blo' }, { from: 'blo', to: 'dre' }, { from: 'dre', to: 'pio' },
      ],
      steps: [
        { show: ['ana', 'cri'], note: 'La anatomía predispone',
          say: 'Partamos por quién está en riesgo. El ojo pequeño e hipermétrope, con cámara anterior estrecha, y el cristalino más grueso, típico de la edad avanzada o de la catarata, dejan muy poco espacio para que el iris se mueva.' },
        { show: ['mid'], note: 'El gatillo clásico de examen',
          say: 'El gatillo es la midriasis media: en la penumbra de un cine, con estrés emocional intenso, o tras usar gotas midriáticas o fármacos anticolinérgicos. En esa posición, y solo en esa posición, el iris queda vulnerable.' },
        { show: ['blo'], note: 'La raíz del iris tapa el trabéculo',
          say: 'La raíz del iris se pliega y ocluye mecánicamente la malla trabecular. Eso es el bloqueo pupilar.' },
        { show: ['dre', 'pio'], note: 'De veintiuno a más de cincuenta en horas',
          say: 'El humor acuoso deja de drenar por el canal de Schlemm, y la presión intraocular, que normalmente está entre diez y veintiuno, se dispara a cincuenta, sesenta o más de setenta. Esa presión colapsa la perfusión del nervio óptico y de la retina en horas. Por eso es una emergencia real.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'El "ojo pétreo": por qué se confunde con otra cosa',
      cards: [
        { title: 'Dolor y cortejo vegetativo', tag: 'Se confunde con migraña o ACV', kind: 'alert', items: [
          { t: 'Cefalea unilateral brutal', d: 'Dolor ocular y periocular que irradia al hemicráneo',
            say: 'Veamos por qué este cuadro engaña tanto. El dolor es brutal, ocular y periocular, que irradia a todo el hemicráneo, y por eso se confunde con una cefalea neurológica.' },
          { t: 'Náuseas, vómitos, bradicardia refleja', d: 'Reflejo vagal por el dolor severo',
            say: 'Y se acompaña de náuseas intensas, vómitos profusos y hasta bradicardia refleja, un reflejo vagal por la intensidad del dolor. Por eso también se confunde con un cuadro digestivo.' },
        ] },
        { title: 'Síntomas visuales', tag: 'La pista que no hay que perder', kind: 'criteria', items: [
          { t: 'Baja visual brusca y profunda', d: 'Y halos de colores alrededor de las luces',
            say: 'Pero hay una pista que no es neurológica ni digestiva: la visión cae de forma brusca y profunda, y el paciente ve halos de colores, un arcoíris alrededor de las luces, por la difracción en una córnea edematosa.' },
        ] },
        { title: 'Signos al examen', tag: 'Patognomónicos', kind: 'key', items: [
          { t: 'Córnea en vidrio esmerilado', d: 'Edema difuso que le quita el brillo',
            say: 'Al examen, la córnea pierde el brillo y se ve como vidrio esmerilado, por el edema.' },
          { t: 'Midriasis media fija', d: 'Pupila arreactiva a la luz',
            say: 'La pupila queda en midriasis media, fija, arreactiva a la luz.' },
          { t: 'Ojo pétreo a la palpación', d: 'Duro como una piedra, comparado con el otro ojo',
            say: 'Y el signo que le da nombre al cuadro: al palpar ambos ojos con los dedos sobre los párpados cerrados, el ojo afectado se siente completamente duro, como una piedra, muy distinto al otro. Con esta tríada, cefalea con vómitos, halos, y ojo pétreo con midriasis fija, el diagnóstico ya está hecho.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento de urgencia',
      title: 'Bajar la presión ya: la tríada de rescate',
      cards: [
        { title: 'Agentes que bajan la presión ahora', tag: 'En SAPU o urgencias', kind: 'pharma', items: [
          { t: 'Manitol endovenoso', d: 'Deshidrata el vítreo, atrae agua hacia el vaso',
            say: 'El objetivo es bajar la presión intraocular bajo treinta cuanto antes. El primer fármaco es el manitol endovenoso, un agente osmótico que deshidrata el vítreo, atrayendo agua hacia el lecho vascular.' },
          { t: 'Acetazolamida oral o endovenosa', d: 'Frena la producción de humor acuoso',
            say: 'El segundo es la acetazolamida, oral o endovenosa si hay vómitos que no ceden, un inhibidor de la anhidrasa carbónica que reduce la producción de humor acuoso en el cuerpo ciliar.' },
          { t: 'Timolol tópico', d: 'Betabloqueador; también reduce la producción',
            say: 'Y el tercero es el timolol en colirio, un betabloqueador que también reduce la síntesis de humor acuoso. Cuidado en asmáticos y en bloqueos cardíacos.' },
          { t: 'Corticoide tópico', d: 'Prednisolona; controla la inflamación secundaria',
            say: 'Se suma también un corticoide tópico, como el acetato de prednisolona, para controlar la inflamación secundaria que genera esta presión tan alta. No confundas este corticoide de apoyo con los midriáticos, que sí están prohibidos.' },
        ] },
        { title: 'La pilocarpina, con un detalle clave', tag: 'Solo cuando la presión ya bajó', kind: 'alert', items: [
          { t: 'Inútil con presión muy alta', d: 'El esfínter pupilar está isquémico y paralizado',
            say: 'La pilocarpina en colirio ayuda a abrir el ángulo, pero solo funciona una vez que la presión ya bajó de treinta o cuarenta. Con presiones más altas, el esfínter pupilar está isquémico y no responde, así que darla de entrada es un error.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento definitivo',
      title: 'Iridotomía bilateral y lo que nunca se debe hacer',
      nodes: [
        { id: 'cor', col: 0, row: 1, k: 'good', t: 'Córnea transparente', s: 'Una vez controlada la crisis médica' },
        { id: 'yag', col: 1, row: 1, k: 'good', t: 'Iridotomía periférica con láser YAG', s: 'Orificio que comunica cámara anterior y posterior' },
        { id: 'bil', col: 2, row: 0, k: 'refer', t: 'Siempre bilateral', s: 'El ojo sano tiene la misma anatomía' },
        { id: 'rie', col: 3, row: 0, k: 'risk', t: 'Cincuenta a setenta por ciento de riesgo', s: 'De sufrir la misma crisis si no se protege' },
        { id: 'con', col: 1, row: 3, k: 'trap', t: 'Midriáticos: atropina, tropicamida', s: 'Prohibidos en ángulo estrecho no tratado' },
        { id: 'cie', col: 2, row: 3, k: 'alert', t: 'Agravan el bloqueo', s: 'Ceguera irreversible' },
      ],
      edges: [
        { from: 'cor', to: 'yag' }, { from: 'yag', to: 'bil' }, { from: 'bil', to: 'rie' },
        { from: 'con', to: 'cie' },
      ],
      steps: [
        { show: ['cor', 'yag'], note: 'La cura, no solo el rescate',
          say: 'Una vez que la córnea se aclara con el tratamiento médico, el tratamiento curativo es la iridotomía periférica con láser YAG: un orificio pequeño en la periferia del iris que comunica la cámara posterior con la anterior, eliminando el bloqueo pupilar para siempre.' },
        { show: ['bil', 'rie'], note: 'La regla de oro que más se pregunta',
          say: 'Y aquí está la regla de oro de este tema: la iridotomía se hace siempre en ambos ojos, incluyendo el ojo contralateral, que está sano pero tiene la misma anatomía estrecha. Sin protección, ese ojo tiene entre un cincuenta y un setenta por ciento de probabilidad de sufrir la misma crisis.' },
        { show: ['con', 'cie'], note: 'La contraindicación absoluta',
          say: 'Y para cerrar, la contraindicación absoluta: jamás se administran midriáticos, como atropina o tropicamida, en un ojo con ángulo estrecho no tratado. Dilatan la pupila, agravan el bloqueo pupilar, y pueden dejar ciego al paciente de forma irreversible.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Estadificación',
      title: 'Cuánto sube la presión: de lo normal a la emergencia',
      head: ['Presión intraocular', 'Compromiso clínico', 'Conducta'],
      rows: [
        { cells: ['10 a 21 mmHg', 'Normal', 'Seguimiento de rutina'],
          say: 'Un dato que ayuda a dimensionar la urgencia. Entre diez y veintiuno, la presión es normal, y el nervio óptico está bien perfundido.' },
        { cells: ['22 a 35 mmHg', 'Hipertensión ocular moderada', 'Evaluación por oftalmología en días'],
          say: 'Entre veintidós y treinta y cinco, hay una cámara estrecha que empieza a dar pródromos, como halos ocasionales, y se evalúa por oftalmología en pocos días, sin ser aún una emergencia.' },
        { cells: ['36 a 50 mmHg', 'Crisis aguda incipiente', 'Iniciar terapia hipotensora ya'],
          say: 'Entre treinta y seis y cincuenta, ya hay isquemia del esfínter pupilar y empieza el edema corneal: aquí se inicia la terapia hipotensora de inmediato.' },
        { cells: ['Más de 50 hasta 80 mmHg', 'Glaucoma agudo establecido', 'Manitol endovenoso e iridotomía'],
          say: 'Y por sobre cincuenta, hasta ochenta, es el glaucoma agudo establecido, con isquemia de la retina y del nervio óptico: emergencia médica, con manitol endovenoso y camino directo a la iridotomía.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Glaucoma agudo versus uveítis anterior aguda',
      head: ['Característica', 'Glaucoma agudo', 'Uveítis anterior aguda'],
      rows: [
        { cells: ['Presión intraocular', 'Muy elevada, ojo pétreo', 'Normal o incluso baja'],
          say: 'Repasemos las trampas comparando con la uveítis anterior, que ya conoces. En presión: muy elevada y pétrea en el glaucoma, normal o baja en la uveítis.' },
        { cells: ['Pupila', 'Midriasis media fija', 'Miosis, poco reactiva'],
          say: 'En la pupila: midriasis media fija en el glaucoma, miosis en la uveítis. Es la diferencia que más se pregunta.' },
        { cells: ['Córnea', 'Edema en vidrio esmerilado', 'Transparente, con precipitados retrocorneales'],
          say: 'La córnea está edematosa y esmerilada en el glaucoma; transparente, con precipitados, en la uveítis.' },
        { cells: ['Síntomas sistémicos', 'Náuseas y vómitos intensos', 'Fotofobia, sin vómitos'],
          say: 'Y en síntomas sistémicos: náuseas y vómitos marcados en el glaucoma; fotofobia, sin vómitos, en la uveítis.' },
        { cells: ['Manejo farmacológico inicial', 'Manitol, acetazolamida, timolol', 'Atropina y corticoides tópicos'],
          say: 'Y la trampa mayor: en el glaucoma se dan hipotensores, y la atropina está prohibida. En la uveítis, en cambio, la atropina sí se usa, como midriático para evitar sinequias. Mezclar estos dos manejos es el error más grave de todo el tema.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 58 años, hipermétrope, consulta a las 23 horas por dolor ocular derecho intolerable, iniciado hace 4 horas mientras veía una película en el cine. El dolor le irradia a la frente y se acompaña de náuseas y 2 vómitos. Al examen: córnea derecha turbia y sin brillo, pupila derecha en midriasis media fija, y el ojo derecho se palpa notablemente más duro que el izquierdo.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Colirio de atropina al 1% y corticoide tópico' },
        { letter: 'B', text: 'Manitol endovenoso, acetazolamida oral y timolol tópico' },
        { letter: 'C', text: 'Analgésicos orales y control ambulatorio en 48 horas' },
        { letter: 'D', text: 'Pilocarpina tópica en dosis repetidas cada 5 minutos' },
        { letter: 'E', text: 'Tomografía computarizada de cerebro de urgencia' },
      ],
      correct: 'B',
      explanation: 'Hipermétrope, dolor tras estar en penumbra, midriasis media fija y ojo pétreo: glaucoma agudo de ángulo cerrado. El manejo inicial es manitol endovenoso, acetazolamida y timolol tópico. La atropina agravaría el bloqueo, y la pilocarpina sola no funciona con la presión tan alta.',
      say: {
        stem: 'Vamos al caso. Hombre de cincuenta y ocho años, hipermétrope, consulta a las once de la noche por dolor ocular derecho intolerable, que empezó hace cuatro horas mientras veía una película en el cine. El dolor le irradia a la frente, con náuseas y dos vómitos. Al examen: córnea derecha turbia, sin brillo, pupila en midriasis media fija, y el ojo derecho se palpa mucho más duro que el izquierdo.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: colirio de atropina con corticoide, manitol endovenoso con acetazolamida y timolol, analgésicos orales con control en cuarenta y ocho horas, pilocarpina repetida cada cinco minutos, o tomografía cerebral de urgencia. Piénsalo.',
        answer: 'Es la B. La penumbra del cine gatilló la midriasis media en un ojo predispuesto por la hipermetropía, y el resultado es un glaucoma agudo clásico. El manejo inicial es la tríada hipotensora: manitol, acetazolamida y timolol. La atropina, en la A, es la trampa más grave, porque dilata aún más la pupila y empeora todo. Y la pilocarpina sola, en la D, no sirve todavía: con esta presión tan alta el esfínter está paralizado por isquemia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 3',
      stem: 'Un paciente de 30 años, hipermétrope, consulta por cefalea intensa, en el lado derecho, asociado a náuseas, de intensidad 10/10. Al examen físico se observa ojo rojo profundo en el lado derecho, con pupila en midriasis fija y arreactiva.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Glaucoma agudo' },
        { letter: 'B', text: 'Trombosis de la vena central de la retina' },
        { letter: 'C', text: 'Cefalea cluster' },
        { letter: 'D', text: 'Celulitis orbitaria' },
        { letter: 'E', text: 'Accidente vascular encefálico' },
      ],
      correct: 'A',
      explanation: 'Hipermétrope con cefalea unilateral intensa, náuseas, ojo rojo profundo y midriasis fija arreactiva: glaucoma agudo de ángulo cerrado, el diagnóstico que hay que descartar antes de pensar en una causa neurológica.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Paciente de treinta años, hipermétrope, con cefalea muy intensa del lado derecho, asociada a náuseas. Al examen: ojo rojo profundo del lado derecho, con pupila en midriasis fija y arreactiva.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: glaucoma agudo, trombosis de la vena central de la retina, cefalea cluster, celulitis orbitaria, o accidente vascular encefálico.',
        answer: 'Es la A, glaucoma agudo. Este caso está armado para tentarte con una cefalea cluster o un accidente vascular, porque el dolor es unilateral e intenso. Pero el ojo rojo profundo y, sobre todo, la midriasis fija arreactiva, son hallazgos oculares que ninguna de esas dos causas explica. Cuando la cefalea viene con un signo ocular así, el ojo manda.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 144',
      stem: 'Una paciente de 50 años consulta por dolor ocular izquierdo de inicio agudo, asociado a visión borrosa. Al examen físico destaca ojo rojo periquerático y pupila midriática arreactiva; la agudeza visual está disminuida en el ojo izquierdo respecto al derecho.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Uveítis aguda' },
        { letter: 'B', text: 'Endoftalmitis' },
        { letter: 'C', text: 'Queratitis aguda' },
        { letter: 'D', text: 'Escleritis' },
        { letter: 'E', text: 'Glaucoma agudo' },
      ],
      correct: 'E',
      explanation: 'Dolor agudo, visión borrosa, ojo rojo periquerático y midriasis arreactiva: glaucoma agudo. La midriasis fija lo distingue de la uveítis, que da miosis; ni la escleritis ni la queratitis producen ese cambio pupilar.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil trece. Paciente de cincuenta años, con dolor ocular izquierdo de inicio agudo y visión borrosa. Al examen: ojo rojo periquerático y pupila midriática arreactiva, con la visión más baja en el ojo izquierdo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: uveítis aguda, endoftalmitis, queratitis aguda, escleritis, o glaucoma agudo.',
        answer: 'Es la E, glaucoma agudo. Esta pregunta junta a propósito cuatro diagnósticos de ojo rojo doloroso para que sepas separarlos por la pupila: la uveítis da miosis, no midriasis; la queratitis y la escleritis no cambian la pupila; solo el glaucoma agudo produce esa midriasis media fija y arreactiva. Ese dato, solo, ya resuelve la pregunta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 80',
      stem: 'Una paciente de 54 años, con antecedente de jaqueca, tratada profilácticamente con topiramato, refiere estar con más estrés del habitual. Hace 2 horas comienza con cefalea intensa, periocular derecha, asociada a náuseas y vómitos. Al examen físico se aprecia el ojo derecho enrojecido, con la pupila fija, en semimidriasis.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Manitol endovenoso' },
        { letter: 'B', text: 'Clorpromazina endovenosa' },
        { letter: 'C', text: 'Ketorolaco endovenoso' },
        { letter: 'D', text: 'Oxígeno al 100% más eletriptán subcutáneo' },
        { letter: 'E', text: 'Carbamazepina oral' },
      ],
      correct: 'A',
      explanation: 'El topiramato puede precipitar un glaucoma agudo de ángulo cerrado bilateral por efecto anticolinérgico e inflamación ciliar; el cuadro clínico, con pupila fija en semimidriasis, lo confirma. La conducta inicial es manitol endovenoso, dentro de la tríada hipotensora.',
      say: {
        stem: 'Una última pregunta real, del EUNACOM de julio de dos mil diecinueve. Paciente de cincuenta y cuatro años, con antecedente de jaqueca, en tratamiento con topiramato, con más estrés de lo habitual. Hace dos horas empieza con cefalea intensa, periocular derecha, con náuseas y vómitos. Al examen: ojo derecho enrojecido, pupila fija, en semimidriasis.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: manitol endovenoso, clorpromazina endovenosa, ketorolaco endovenoso, oxígeno con eletriptán, o carbamazepina oral.',
        answer: 'Es la A, manitol endovenoso. Y aquí hay un dato nuevo que se suma a la lista de gatillos: el topiramato, un fármaco usado para la jaqueca, puede precipitar un glaucoma agudo. El enunciado te tienta con tratamientos de migraña, como el eletriptán, pero la pupila fija en semimidriasis es un signo ocular que ninguna migraña explica. Y frente a un glaucoma agudo, el manitol es siempre el primer paso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 149',
      stem: 'Un paciente de 48 años, con antecedente de hipermetropía, consulta por dolor en el ojo izquierdo, muy intenso, irradiado a la frente. Al examen físico se aprecia eritema periquerático del ojo izquierdo, con pupila midriática arreactiva y opacidad corneal. El ojo derecho tiene visión normal, mientras que el ojo izquierdo solo es capaz de contar dedos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Conjuntivitis' },
        { letter: 'B', text: 'Uveítis aguda' },
        { letter: 'C', text: 'Queratitis viral aguda' },
        { letter: 'D', text: 'Trombosis de la vena central de la retina' },
        { letter: 'E', text: 'Glaucoma agudo' },
      ],
      correct: 'E',
      explanation: 'Hipermétrope con dolor irradiado a la frente, eritema periquerático, midriasis arreactiva y opacidad corneal, con caída severa de la visión hasta contar dedos: glaucoma agudo de ángulo cerrado.',
      say: {
        stem: 'Una última pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Paciente de cuarenta y ocho años, hipermétrope, con dolor muy intenso en el ojo izquierdo, irradiado a la frente. Al examen: enrojecimiento periquerático izquierdo, pupila midriática arreactiva, y opacidad de la córnea. El ojo derecho ve normal; el izquierdo apenas alcanza a contar dedos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: conjuntivitis, uveítis aguda, queratitis viral aguda, trombosis de la vena central de la retina, o glaucoma agudo.',
        answer: 'Es la E, glaucoma agudo. Fíjate en la magnitud de la caída visual: contar dedos es una pérdida severa, coherente con una córnea edematosa y una presión disparada, no con una conjuntivitis ni con una queratitis, que casi nunca bajan tanto la visión. Y de nuevo, la hipermetropía y la midriasis fija son la firma de este diagnóstico.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La tríada que lo confirma', tag: 'No es migraña ni ACV', kind: 'key', items: [
          { t: 'Cefalea con vómitos y halos', d: 'Más pupila en midriasis media fija',
            say: 'Cerremos con las reglas de oro. Cefalea intensa con vómitos, halos de colores, y pupila en midriasis media fija: eso ya es glaucoma agudo, no migraña ni accidente vascular.' },
          { t: 'El signo que lo confirma al tacto', d: 'Ojo pétreo comparado con el sano',
            say: 'Y al examen, el ojo pétreo comparado con el ojo sano confirma la sospecha.' },
        ] },
        { title: 'El rescate de urgencia', tag: 'Manitol, acetazolamida, timolol', kind: 'pharma', items: [
          { t: 'La tríada hipotensora primero', d: 'Pilocarpina solo cuando la presión ya bajó',
            say: 'El rescate es manitol endovenoso, acetazolamida y timolol tópico. La pilocarpina se suma después, cuando la presión ya bajó, porque antes el esfínter está paralizado.' },
        ] },
        { title: 'Lo que nunca se rompe', tag: 'Bilateral y sin midriáticos', kind: 'alert', items: [
          { t: 'Iridotomía siempre en ambos ojos', d: 'El ojo sano tiene la misma anatomía',
            say: 'La iridotomía con láser se hace siempre en los dos ojos, porque el sano comparte la misma anatomía estrecha.' },
          { t: 'Jamás midriáticos en ángulo estrecho', d: 'Agravan el bloqueo y pueden dejar ciego',
            say: 'Y si te llevas una sola idea de hoy: jamás uses un midriático, como atropina o tropicamida, en un ojo con ángulo estrecho no tratado. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Cefalea con ojo rojo: descarta el glaucoma agudo primero',
    root: (() => {
      const midriaticoTrap = N('alert', 'Jamás midriáticos', 'Atropina o tropicamida agravan el bloqueo pupilar',
        'Y en paralelo, una regla que nunca se rompe: ningún midriático, como atropina o tropicamida, se administra en un ángulo estrecho sin iridotomía, porque dilata la pupila y puede dejar ciego al paciente.');
      const iridotomia = N('ok', 'Iridotomía periférica con láser YAG bilateral', 'Tratamiento definitivo, siempre en ambos ojos',
        'Con la córnea ya transparente, el tratamiento curativo es la iridotomía periférica con láser YAG, realizada siempre en ambos ojos, porque el ojo sano comparte la misma anatomía estrecha.');
      const pilocarpina = N('do', 'Pilocarpina tópica', 'Solo cuando la presión ya bajó de treinta a cuarenta',
        'Una vez que la presión intraocular baja, la pilocarpina en colirio ayuda a traccionar la raíz del iris y despega el ángulo.',
        ['una vez controlada la crisis', iridotomia]);
      const rescate = N('do', 'Tríada hipotensora de urgencia', 'Manitol endovenoso, acetazolamida y timolol tópico',
        'Iniciar de inmediato manitol endovenoso, acetazolamida oral o endovenosa, y timolol tópico, para bajar la presión intraocular bajo treinta.',
        ['luego, con la presión ya baja', pilocarpina],
        ['siempre, en todo momento', midriaticoTrap]);
      const otroDx = N('refer', 'Buscar otra causa', 'Sin ojo pétreo ni midriasis, piensa en migraña o causa neurológica',
        'Si no hay midriasis media fija ni ojo pétreo, la cefalea probablemente no es ocular: evalúa causas neurológicas como migraña o accidente vascular.');
      const preguntaSigno = N('q', '¿Córnea esmerilada, midriasis media fija y ojo pétreo?', 'El signo ocular decide',
        'Confirma los tres signos oculares: córnea en vidrio esmerilado, pupila en midriasis media fija, y ojo pétreo a la palpación comparativa.',
        ['Sí, los tres presentes', rescate],
        ['No, examen ocular normal', otroDx]);
      return N('start', 'Cefalea intensa con náuseas y vómitos', 'Primero descarta el ojo antes de pensar en el cerebro',
        'Paciente con cefalea intensa, náuseas y vómitos. Antes de pensar en causa neurológica o digestiva, examina el ojo.',
        ['', preguntaSigno]);
    })(),
  },
};
