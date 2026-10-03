// Clase 15.7 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_oftalmologia.cjs (oftal-07).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'oftal-07',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'El opuesto exacto del glaucoma agudo: silencioso, indoloro, y por eso el más peligroso',
      say: 'Bienvenidos. En la clase anterior vimos el glaucoma agudo, una emergencia que grita: dolor, vómitos, ojo pétreo. Hoy vemos su opuesto casi perfecto, el glaucoma crónico de ángulo abierto, que no duele, no da ojo rojo, y no toca la visión central hasta que el daño ya es enorme. Es la primera causa de ceguera irreversible en el mundo. Vamos a aprender a encontrarlo antes de que el paciente lo note.',
    },

    {
      type: 'points',
      kicker: 'Definición y factores de riesgo',
      title: 'Una malla trabecular que envejece mal',
      cards: [
        { title: 'Qué es', tag: 'Ángulo abierto, drenaje enfermo', kind: 'criteria', items: [
          { t: 'Neuropatía óptica crónica', d: 'Pérdida progresiva de células ganglionares',
            say: 'Partamos por la definición. El glaucoma crónico es una neuropatía óptica progresiva, con pérdida de células ganglionares de la retina y sus axones. A diferencia del agudo, aquí el ángulo iridocorneal está anatómicamente abierto: el problema no es que algo lo tape, es que la malla trabecular se vuelve microscópicamente disfuncional y esclerosada, y drena cada vez peor.' },
        ] },
        { title: 'Quién está en riesgo', tag: 'Factores de riesgo', kind: 'key', items: [
          { t: 'Presión ocular sobre veintiuno', d: 'El factor modificable principal',
            say: 'El factor de riesgo modificable principal es la presión intraocular por sobre veintiuno, aunque hasta un cuarenta por ciento de los pacientes tienen lo que se llama glaucoma de presión normal.' },
          { t: 'Edad y familiar de primer grado', d: 'Padre o hermano con glaucoma multiplica el riesgo varias veces',
            say: 'La edad avanzada suma riesgo, y el dato que más se pregunta: tener un padre o un hermano con glaucoma multiplica el riesgo varias veces. Es el predictor más fuerte para decidir a quién pesquisar de forma activa.' },
          { t: 'Raza negra, miopía alta, diabetes', d: 'Evolución más rápida y agresiva',
            say: 'Y también suman la raza negra, con una evolución más rápida y agresiva, la miopía alta, la córnea central delgada, y la diabetes mellitus.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clínica',
      title: 'Por qué el paciente no se da cuenta',
      nodes: [
        { id: 'esc', col: 0, row: 1, k: 'cause', t: 'Malla trabecular esclerosada', s: 'Drenaje lento, sin dolor' },
        { id: 'pio', col: 1, row: 1, k: 'mech', t: 'Presión sube en silencio', s: 'Sin ojo rojo ni molestia' },
        { id: 'per', col: 2, row: 0, k: 'effect', t: 'Fibras periféricas mueren primero', s: 'Escotoma de Bjerrum, escalón nasal' },
        { id: 'cen', col: 2, row: 2, k: 'good', t: 'Haz papilomacular indemne', s: 'La visión central se conserva' },
        { id: 'tun', col: 3, row: 0, k: 'risk', t: 'Visión en túnel', s: 'Campo periférico perdido' },
        { id: 'tar', col: 3, row: 2, k: 'trap', t: 'Consulta tardía', s: 'Cuando ya perdió más de la mitad de las fibras' },
      ],
      edges: [
        { from: 'esc', to: 'pio' }, { from: 'pio', to: 'per' }, { from: 'pio', to: 'cen' },
        { from: 'per', to: 'tun' }, { from: 'cen', to: 'tar' },
      ],
      steps: [
        { show: ['esc', 'pio'], note: 'Sin dolor, sin ojo rojo',
          say: 'Este es el punto central de la clase. Como el mecanismo es lento y silencioso, la presión sube sin dolor, sin ojo rojo, sin ningún síntoma de alarma.' },
        { show: ['per'], note: 'Escotomas periféricos que el paciente no percibe',
          say: 'Y el daño empieza por las fibras que vienen de la periferia de la retina, dando escotomas aislados, como el escotoma de Bjerrum, o un escalón nasal, que el paciente casi nunca nota.' },
        { show: ['cen'], note: 'El haz papilomacular es el último en caer',
          say: 'Mientras tanto, el haz papilomacular, que da la visión central de alta resolución, queda intacto hasta fases terminales. Por eso el paciente sigue leyendo perfecto la última línea de la tabla.' },
        { show: ['tun'], note: 'El campo se cierra como un túnel',
          say: 'Esos escotomas periféricos van coalesciendo, y el campo visual se va cerrando como un túnel, cada vez más angosto.' },
        { show: ['tar'], note: 'La trampa clínica más importante del tema',
          say: 'Y aquí está la trampa más importante de toda la clase: pensar que una agudeza visual de veinte veinte descarta glaucoma. No lo hace. El paciente solo consulta cuando el campo visual ya se redujo a un tubo, y para entonces ya perdió más de la mitad de las fibras del nervio óptico, de forma irreversible.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico y tratamiento',
      title: 'La papila que avisa y el fármaco que se usa toda la vida',
      cards: [
        { title: 'El fondo de ojo en atención primaria', tag: 'Lo que hay que mirar', kind: 'key', items: [
          { t: 'Excavación mayor a cero coma cinco', d: 'O asimetría entre los dos ojos mayor a cero coma dos',
            say: 'En atención primaria, la pista está en el fondo de ojo. Sospecha cuando la relación entre la excavación y la papila supera cero coma cinco, o cuando hay una asimetría entre los dos ojos mayor a cero coma dos.' },
          { t: 'Muescas en el anillo, vasos nasalizados', d: 'Rompe la regla inferior, superior, nasal, temporal',
            say: 'También cuando hay muescas o adelgazamiento del anillo neurorretiniano, sobre todo arriba y abajo, y cuando los vasos se ven rechazados hacia el sector nasal.' },
        ] },
        { title: 'Confirmación por el especialista', tag: 'Campimetría y OCT', kind: 'criteria', items: [
          { t: 'Campimetría computarizada de Humphrey', d: 'Certifica el defecto funcional',
            say: 'La confirmación es del oftalmólogo: campimetría computarizada, que certifica el defecto funcional del campo visual, y una tomografía de coherencia óptica de las fibras nerviosas, que cuantifica el daño estructural de forma precoz.' },
        ] },
        { title: 'Tratamiento de por vida', tag: 'Análogos de prostaglandinas', kind: 'pharma', items: [
          { t: 'Una gota en la noche', d: 'Latanoprost, bimatoprost o travoprost',
            say: 'El tratamiento de primera línea son los análogos de prostaglandinas tópicos, con el latanoprost como referencia. Se dan en una sola gota en la noche, y aumentan el drenaje uveoescleral, la vía alternativa por la que sale el humor acuoso.' },
          { t: 'Oscurece el iris y alarga las pestañas', d: 'Efectos que hay que anticipar al paciente',
            say: 'Un dato que se pregunta: oscurecen el color del iris de forma permanente y alargan las pestañas. Si falla, se suma un betabloqueador tópico como el timolol, contraindicado en asma o bloqueo cardíaco, y si el daño progresa pese al tratamiento médico máximo, se opera con una trabeculectomía.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Glaucoma crónico versus el agudo que ya conoces',
      head: ['Criterio', 'Glaucoma crónico de ángulo abierto', 'Glaucoma agudo de ángulo cerrado'],
      rows: [
        { cells: ['Comienzo', 'Silencioso, durante décadas', 'Brusco, en horas'],
          say: 'Comparemos con la clase anterior, porque ahí está la trampa más frecuente. En comienzo: el crónico es silencioso durante décadas; el agudo, brusco, en horas.' },
        { cells: ['Aspecto del ojo', 'Completamente blanco y normal', 'Ojo rojo periquerático intenso'],
          say: 'En aspecto: el ojo del crónico se ve blanco y normal; el del agudo, rojo e inflamado.' },
        { cells: ['Agudeza visual', 'Normal hasta etapas terminales', 'Cae de forma severa e inmediata'],
          say: 'En agudeza visual: normal hasta el final en el crónico; caída severa e inmediata en el agudo. Esta es la trampa que más se pregunta.' },
        { cells: ['Presión intraocular', 'Levemente elevada o normal', 'Disparada, mayor a cincuenta'],
          say: 'En presión: apenas elevada o normal en el crónico; disparada, sobre cincuenta, en el agudo.' },
        { cells: ['Tratamiento', 'Colirio de análogo de prostaglandina, de por vida', 'Manitol, acetazolamida e iridotomía'],
          say: 'Y en tratamiento: un colirio diario de por vida en el crónico, contra manitol, acetazolamida e iridotomía de urgencia en el agudo. Confundir un glaucoma crónico con uno agudo, o al revés, es el error más grave de toda esta unidad.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 56 años, sin síntomas visuales, acude a control de salud. Su hermano mayor fue diagnosticado de glaucoma avanzado el año pasado. Agudeza visual 20/20 bilateral. Al fondo de ojo: papila rosada, con excavación papilar de 0,7 en el ojo derecho y 0,4 en el izquierdo, con rechazo nasal de los vasos en el ojo derecho.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Tranquilizar: la agudeza visual normal descarta glaucoma' },
        { letter: 'B', text: 'Derivar a oftalmología para campimetría, OCT y tonometría' },
        { letter: 'C', text: 'Iniciar timolol tópico de inmediato sin derivar' },
        { letter: 'D', text: 'Indicar solo control en 5 años, por ser asintomático' },
        { letter: 'E', text: 'Solicitar una resonancia magnética de órbitas' },
      ],
      correct: 'B',
      explanation: 'Antecedente familiar de primer grado, excavación papilar aumentada y asimétrica, con rechazo nasal de vasos: alta sospecha de glaucoma crónico. Se deriva a oftalmología para confirmar con campimetría, OCT y tonometría, aunque la agudeza visual esté conservada.',
      say: {
        stem: 'Vamos al caso. Hombre de cincuenta y seis años, sin ningún síntoma visual, que viene a un control de salud. Su hermano mayor fue diagnosticado de glaucoma avanzado el año pasado. Su agudeza visual es normal en ambos ojos. Al fondo de ojo: papila rosada, con una excavación de cero coma siete en el ojo derecho y cero coma cuatro en el izquierdo, con los vasos rechazados hacia el sector nasal en el derecho.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: tranquilizar porque la visión es normal, derivar para campimetría, tomografía y tonometría, iniciar timolol sin derivar, control en cinco años por ser asintomático, o pedir una resonancia de órbitas. Piénsalo.',
        answer: 'Es la B. Este caso junta los tres datos clásicos de sospecha: antecedente familiar directo, excavación aumentada y asimétrica entre los dos ojos, y rechazo nasal de los vasos. La opción A es la trampa central de la clase: la visión normal no descarta nada, porque el glaucoma crónico respeta la visión central hasta el final. Y empezar timolol sin confirmar el diagnóstico, en la C, se adelanta al estudio que corresponde al especialista.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 147',
      stem: 'Un paciente de 42 años se realiza una tonometría ocular que informa una presión intraocular de 27 mmHg. Presenta una excavación papilar de 0,7 en el ojo derecho, y en la gonioscopía se observa ángulo abierto en todo el contorno del iris.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Retinopatía diabética' },
        { letter: 'B', text: 'Neuritis óptica' },
        { letter: 'C', text: 'Glaucoma crónico' },
        { letter: 'D', text: 'Coriorretinitis' },
        { letter: 'E', text: 'Degeneración macular relacionada con la edad' },
      ],
      correct: 'C',
      explanation: 'Presión intraocular elevada, excavación papilar aumentada, con gonioscopía que confirma el ángulo abierto: glaucoma crónico de ángulo abierto, el diagnóstico que arma exactamente esta tríada.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Paciente de cuarenta y dos años, con una tonometría que informa una presión intraocular de veintisiete. Tiene una excavación papilar de cero coma siete en el ojo derecho, y la gonioscopía muestra un ángulo abierto en todo el contorno del iris.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: retinopatía diabética, neuritis óptica, glaucoma crónico, coriorretinitis, o degeneración macular relacionada con la edad. Piénsalo.',
        answer: 'Es la C, glaucoma crónico. Fíjate que la pregunta te da la tríada completa: presión elevada, excavación aumentada, y la gonioscopía confirmando que el ángulo está abierto, no cerrado. Ese último dato es justo el que separa este cuadro del glaucoma agudo que vimos en la clase anterior.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 166',
      stem: 'Un paciente de 60 años, diabético, hipertenso y dislipidémico, consulta por disminución progresiva de la calidad de la visión. A su examen físico, la exploración ocular es normal, con rojo pupilar normal bilateral. La agudeza visual es 20/25 en ambos ojos. La campimetría muestra defectos en los dos cuadrantes superiores del campo visual izquierdo y en los dos cuadrantes mediales del campo visual derecho.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Degeneración macular relacionada con la edad' },
        { letter: 'B', text: 'Tumor del lóbulo occipital' },
        { letter: 'C', text: 'Catarata' },
        { letter: 'D', text: 'Glaucoma crónico' },
        { letter: 'E', text: 'Neuropatía óptica isquémica' },
      ],
      correct: 'D',
      explanation: 'Agudeza visual conservada, con defectos de campo visual periféricos y asimétricos entre ambos ojos, y examen ocular externo normal: patrón clásico de glaucoma crónico. La degeneración macular y la catarata afectan la agudeza visual; un tumor occipital daría una hemianopsia homónima, no este patrón bimedial.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Paciente de sesenta años, diabético, hipertenso y dislipidémico, con disminución progresiva de la calidad de su visión. Al examen, el ojo se ve completamente normal, con reflejo rojo pupilar normal. Su agudeza visual está casi conservada. Pero la campimetría muestra defectos en los cuadrantes superiores del campo izquierdo y en los cuadrantes mediales del campo derecho.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: degeneración macular relacionada con la edad, tumor del lóbulo occipital, catarata, glaucoma crónico, o neuropatía óptica isquémica. Piénsalo.',
        answer: 'Es la D, glaucoma crónico. La clave es que el examen del ojo es completamente normal y la visión está casi intacta, pero el campo visual ya está comprometido, de forma asimétrica entre los dos ojos. Eso descarta la catarata y la degeneración macular, que sí afectan la agudeza visual. Y un tumor occipital daría el mismo defecto en ambos ojos, no este patrón mezclado. Solo el glaucoma crónico explica un campo dañado con todo lo demás normal.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La trampa central', tag: 'Visión normal no descarta nada', kind: 'alert', items: [
          { t: 'Veinte veinte hasta el final', d: 'El glaucoma crónico no baja la visión central hasta fases terminales',
            say: 'Cerremos con las reglas de oro. La trampa central de esta clase: una agudeza visual de veinte veinte no descarta glaucoma crónico. Respeta la visión central hasta el final.' },
        ] },
        { title: 'A quién pesquisar', tag: 'El fondo de ojo avisa', kind: 'key', items: [
          { t: 'Excavación aumentada o asimétrica', d: 'Sobre todo con antecedente familiar de primer grado',
            say: 'Pesquisa activamente al paciente con excavación papilar aumentada o asimétrica, sobre todo si tiene un familiar de primer grado con glaucoma.' },
        ] },
        { title: 'El tratamiento de por vida', tag: 'Análogo de prostaglandina', kind: 'pharma', items: [
          { t: 'Latanoprost, una gota en la noche', d: 'Primera línea indiscutida',
            say: 'Y si te llevas una sola idea de hoy: el tratamiento de por vida es el análogo de prostaglandina en una gota nocturna, y la pesquisa se hace en el fondo de ojo, antes de que el paciente note nada. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Sospecha en el fondo de ojo: qué hacer paso a paso',
    root: (() => {
      const derivar = N('do', 'Derivar a oftalmología', 'Campimetría, OCT y tonometría aplanática',
        'Deriva al especialista para confirmar con campimetría computarizada, OCT de fibras nerviosas y tonometría aplanática.');
      const confirmado = N('alert', 'Glaucoma crónico confirmado', 'Análogo de prostaglandina tópico en la noche',
        'Con el diagnóstico confirmado, inicia un análogo de prostaglandina tópico, como latanoprost, en una gota nocturna, de por vida.');
      const noConfirmado = N('ok', 'Nervio óptico indemne', 'Control periódico cada dos a tres años',
        'Si el estudio del especialista descarta el daño glaucomatoso, el control preventivo se repite cada dos a tres años según los factores de riesgo.');
      const preguntaConfirma = N('q', '¿El estudio confirma el daño glaucomatoso?', 'Campimetría y OCT deciden',
        'La campimetría y la OCT deciden si hay o no un daño glaucomatoso real.',
        ['Sí, confirma el daño', confirmado],
        ['No, nervio óptico sano', noConfirmado]);
      const preguntaExcavacion = N('q', '¿Excavación mayor a cero coma cinco o asimetría mayor a cero coma dos?', 'La pista está en la papila',
        'Revisa la relación entre la excavación y la papila, y compara la asimetría entre ambos ojos.',
        ['Sí, sospecha de daño', derivar],
        ['No, papila normal', N('ok', 'Control preventivo de rutina', 'Reevaluar según edad y factores de riesgo',
          'Sin hallazgos sospechosos, continúa el control preventivo de rutina, según la edad y los factores de riesgo del paciente.')]);
      derivar.kids.push(['', preguntaConfirma]);
      return N('start', 'Adulto mayor de cuarenta con factores de riesgo', 'Antecedente familiar, PIO elevada, raza, diabetes',
        'Paciente mayor de cuarenta años con algún factor de riesgo: antecedente familiar de primer grado, presión ocular elevada, raza negra, miopía alta o diabetes.',
        ['', preguntaExcavacion]);
    })(),
  },
};
