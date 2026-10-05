// Clase 14.10 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-10). Preguntas: banco real EUNACOM (class_questions.cjs --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-10',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo una rinosinusitis es bacteriana y merece antibiótico, y cómo reconocer a tiempo una complicación orbitaria',
      say: 'Bienvenido. Casi todo resfrío con secreción verde es viral, y el examen quiere comprobar que no lo trates con antibióticos. Pero también quiere que no se te pase la complicación que sí amenaza la visión: la celulitis orbitaria. Hoy aprendemos las tres reglas que separan lo bacteriano de lo viral, y la clasificación de Chandler.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Del resfrío a la sinusitis',
      nodes: [
        { id: 'vi', col: 0, row: 1, k: 'cause', t: 'Resfrío viral', s: 'Más de 98% de los casos' },
        { id: 'os', col: 1, row: 1, k: 'mech', t: 'Edema del complejo ostiomeatal', s: 'Se obstruyen los ostium' },
        { id: 'mu', col: 2, row: 1, k: 'effect', t: 'Se detiene el transporte mucociliar', s: 'La secreción se retiene' },
        { id: 'sv', col: 3, row: 0, k: 'good', t: 'Casi siempre se resuelve solo', s: 'Rinosinusitis viral' },
        { id: 'sb', col: 3, row: 2, k: 'alert', t: 'Sobreinfección bacteriana', s: 'Solo 0,5 a 2% de los casos' },
      ],
      edges: [
        { from: 'vi', to: 'os' },
        { from: 'os', to: 'mu' },
        { from: 'mu', to: 'sv' },
        { from: 'mu', to: 'sb' },
      ],
      steps: [
        { show: ['vi', 'os'], note: 'El virus inflama y tapa el drenaje',
          say: 'La rinosinusitis aguda es la inflamación de la nariz y los senos paranasales por menos de cuatro semanas. En más del noventa y ocho por ciento de los casos parte con un resfrío viral, por rinovirus, influenza o parainfluenza, que inflama el complejo ostiomeatal y tapa los ostium por donde drenan los senos.' },
        { show: ['mu'], note: 'La secreción queda atrapada',
          say: 'Sin drenaje y sin transporte mucociliar, la secreción se retiene y la presión dentro del seno cambia. Eso da la presión facial y el dolor.' },
        { show: ['sv', 'sb'], note: 'La bacteria es la excepción',
          say: 'Pero la inmensa mayoría se resuelve sola. Solo entre medio y dos por ciento se sobreinfecta con bacterias. El desafío es identificar a ese pequeño grupo sin tratar a todos los demás.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Qué es una rinosinusitis aguda',
      cards: [
        { title: 'Síntomas', tag: 'Al menos dos', kind: 'criteria', items: [
          { t: 'Obstrucción y rinorrea purulenta', d: 'Anterior o descarga posterior',
            say: 'Se diagnostica con al menos dos de estos síntomas: obstrucción o congestión nasal, y rinorrea purulenta, anterior o posterior.' },
          { t: 'Dolor facial e hiposmia', d: 'Frontal, maxilar o retroocular',
            say: 'Más el dolor o la presión facial, frontal, maxilar o detrás del ojo, y la hiposmia o anosmia.' },
        ] },
        { title: 'Dos mitos', tag: 'Se preguntan', kind: 'alert', items: [
          { t: 'Secreción verde no es bacteriana', d: 'La lisis de neutrófilos tiñe la mucosidad',
            say: 'Primer mito: el color verde o amarillo no demuestra infección bacteriana. Lo producen los neutrófilos que se rompen en cualquier cuadro viral.' },
          { t: 'No se pide radiografía de senos', d: 'Poca especificidad y muchos falsos positivos',
            say: 'Segundo mito: la radiografía de senos paranasales no está indicada, porque su especificidad es baja y da muchos falsos positivos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Rinosinusitis bacteriana',
      title: 'Los tres criterios',
      cards: [
        { title: 'Basta uno', tag: 'IDSA y EPOS', kind: 'criteria', items: [
          { t: 'Persistencia: 10 días o más', d: 'Sin ninguna mejoría',
            say: 'Para decir que es bacteriana necesitas cumplir al menos uno de tres criterios. El primero es la persistencia: obstrucción, rinorrea purulenta o dolor facial durante diez días o más, sin ninguna señal de mejoría.' },
          { t: 'Doble caída', d: 'Mejora a los 4 días y recae con fiebre',
            say: 'El segundo es la doble caída, el double sickening. Tiene un resfrío típico, empieza a mejorar a los cuatro o cinco días, y de pronto recae con fiebre, más cefalea y rinorrea francamente purulenta.' },
          { t: 'Inicio severo', d: 'Fiebre desde 39 °C y pus por 3 a 4 días',
            say: 'El tercero es el inicio severo: fiebre alta, desde treinta y nueve grados, junto con rinorrea purulenta o dolor facial intenso, durante tres a cuatro días seguidos desde el comienzo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Amoxicilina primero',
      cards: [
        { title: 'Antibiótico', tag: 'Solo si es bacteriana', kind: 'pharma', items: [
          { t: 'Amoxicilina por 7 a 10 días', d: 'Niños 80 a 90 mg/kg/día; adultos 1 g c/12 h',
            say: 'Los gérmenes son los mismos de la otitis media aguda: neumococo, Haemophilus influenzae y Moraxella. La primera línea es amoxicilina por siete a diez días: ochenta a noventa miligramos por kilo al día en niños, y en adultos un gramo cada doce horas, o ochocientos setenta y cinco más ciento veinticinco miligramos con clavulánico. En adultos que responden bien bastan cinco a siete días.' },
          { t: 'Con clavulánico si hay riesgo', d: 'Antibiótico reciente, enfermedad crónica o falla',
            say: 'Se agrega ácido clavulánico si hay riesgo de betalactamasas: antibióticos en los últimos treinta días, enfermedad crónica, o falta de respuesta a las cuarenta y ocho a setenta y dos horas.' },
        ] },
        { title: 'Apoyo', tag: 'Para todos', kind: 'key', items: [
          { t: 'Lavados con suero fisiológico', d: 'Y corticoides intranasales',
            say: 'Como apoyo, sirven los lavados nasales con suero fisiológico y los corticoides intranasales. Si el cuadro es viral, eso es todo el tratamiento.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Complicaciones',
      title: 'Por qué la órbita se infecta',
      nodes: [
        { id: 'et', col: 0, row: 1, k: 'cause', t: 'Seno etmoidal infectado', s: '80 a 90% de las complicaciones en niños' },
        { id: 'la', col: 1, row: 1, k: 'mech', t: 'Lámina papirácea muy delgada', s: 'Separa el etmoides de la órbita' },
        { id: 'pr', col: 2, row: 0, k: 'good', t: 'Delante del septum orbitario', s: 'Celulitis preseptal' },
        { id: 'po', col: 2, row: 2, k: 'alert', t: 'Detrás del septum orbitario', s: 'Celulitis y absceso orbitario' },
      ],
      edges: [
        { from: 'et', to: 'la' },
        { from: 'la', to: 'pr' },
        { from: 'la', to: 'po' },
      ],
      steps: [
        { show: ['et', 'la'], note: 'Una pared de papel',
          say: 'Los senos etmoidales están separados de la órbita por la lámina papirácea, que como dice su nombre es fina como un papel. Por eso el etmoides es el origen del ochenta a noventa por ciento de las complicaciones orbitarias en niños.' },
        { show: ['pr', 'po'], note: 'El septum separa lo benigno de lo grave',
          say: 'La clave es una línea: el septum orbitario. Si la infección está por delante, es una celulitis preseptal, relativamente benigna. Si lo atraviesa, hay compromiso orbitario, y puede amenazar la visión.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación de Chandler',
      title: 'Cinco grupos, de preseptal a trombosis',
      cards: [
        { title: 'Grupos I y II', tag: 'Antes y después del septum', kind: 'key', items: [
          { t: 'I: celulitis preseptal', d: 'Edema palpebral; visión y movilidad normales',
            say: 'El grupo uno es la celulitis preseptal: edema y eritema del párpado, pero con agudeza visual, movimientos oculares y pupila normales, y sin proptosis. Se trata con antibióticos orales, o endovenosos en un lactante.' },
          { t: 'II: celulitis orbitaria', d: 'Proptosis, oftalmoplejía dolorosa y quemosis',
            say: 'El grupo dos es la celulitis orbitaria, postseptal. Aquí aparecen los tres signos que la separan de la preseptal: proptosis, oftalmoplejía dolorosa y quemosis conjuntival.' },
        ] },
        { title: 'Grupos III a V', tag: 'Colecciones y trombosis', kind: 'alert', items: [
          { t: 'III: absceso subperióstico', d: 'Globo desplazado abajo y afuera',
            say: 'El grupo tres es el absceso subperióstico, una colección entre la lámina papirácea y el periostio, que empuja el globo ocular hacia abajo y afuera.' },
          { t: 'IV: absceso orbitario', d: 'Pérdida visual y defecto pupilar aferente',
            say: 'El grupo cuatro es el absceso dentro de la órbita, con grave caída de la visión y defecto pupilar aferente.' },
          { t: 'V: trombosis del seno cavernoso', d: 'Compromiso bilateral y sepsis',
            say: 'Y el grupo cinco, la trombosis del seno cavernoso: compromiso orbitario bilateral que avanza rápido, parálisis de los pares craneales tres, cuatro, cinco y seis, y sepsis.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Celulitis periorbitaria y absceso subperióstico',
      images: [
        { src: 'biblioteca/17_otorrino/orl-10/01_celulitis-periorbitaria-etmoiditis__bailey-love_p743.jpg', label: 'Edema y eritema del párpado izquierdo en una etmoiditis aguda', credit: 'Bailey & Love 27.ª ed., Fig. 46.47' },
        { src: 'biblioteca/17_otorrino/orl-10/02_tac-absceso-subperiostico-orbita__bailey-love_p743.jpg', label: 'TAC axial con absceso subperióstico en la órbita izquierda', credit: 'Bailey & Love 27.ª ed., Fig. 46.48' },
      ],
      steps: [
        { note: 'Párpado hinchado: ¿preseptal u orbitaria?',
          say: 'Esta es una celulitis periorbitaria por una etmoiditis. El párpado está edematoso y eritematoso. Pero la foto no basta: lo que decide el grado es lo que pasa detrás del párpado. Tienes que examinar los movimientos oculares, la agudeza visual y buscar proptosis.' },
        { note: 'El TAC muestra la colección',
          say: 'Y esta es la complicación que no quieres dejar pasar: un absceso subperióstico en el TAC. Fíjate en la colección junto a la pared medial de la órbita, que empuja el contenido orbitario. Por eso, ante cualquier signo orbitario, se pide un TAC con contraste.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Chandler: signo y conducta',
      head: ['Grupo', 'Dónde está', 'Signo clave', 'Conducta'],
      rows: [
        { cells: ['I: preseptal', 'Delante del septum', 'Edema palpebral; visión y motilidad normales', 'Antibiótico oral'],
          say: 'La tabla lo resume. En el grupo uno, el párpado inflamado con visión y movilidad normales se maneja con antibiótico oral.' },
        { cells: ['II: celulitis orbitaria', 'Grasa orbitaria', 'Proptosis, oftalmoplejía dolorosa, quemosis', 'Hospitalizar, TAC y ceftriaxona'],
          say: 'En el grupo dos, con proptosis, oftalmoplejía dolorosa y quemosis, se hospitaliza, se pide TAC y se parte con ceftriaxona endovenosa.' },
        { cells: ['III: subperióstico', 'Bajo el periostio', 'Globo abajo y afuera, diplopía', 'TAC y drenaje quirúrgico'],
          say: 'En el grupo tres, el globo desplazado abajo y afuera con diplopía, se agrega drenaje quirúrgico urgente por otorrinolaringología.' },
        { cells: ['IV: absceso orbitario', 'Espacio intraconal', 'Pérdida visual severa', 'Drenaje de emergencia'],
          say: 'En el grupo cuatro hay pérdida visual severa, y el drenaje es una emergencia.' },
        { cells: ['V: seno cavernoso', 'Venas oftálmicas', 'Proptosis bilateral, pares craneales, estupor', 'UCI y antibióticos'],
          say: 'Y en el grupo cinco, UCI con antibióticos endovenosos y anticoagulación.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol para el paciente con síntomas nasales prolongados: primero la órbita, después los tres criterios.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un niño de 7 años tiene 6 días de rinorrea mucopurulenta y congestión nasal, tratados como resfrío. En las últimas 24 horas presenta fiebre de 39,4 °C y tumefacción progresiva del ojo izquierdo. Tiene edema y eritema palpebral marcado, proptosis evidente y limitación muy dolorosa de la abducción y la elevación de ese ojo. La agudeza visual está conservada.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Amoxicilina oral ambulatoria y control en 48 horas' },
        { letter: 'B', text: 'Descongestionante tópico y paracetamol' },
        { letter: 'C', text: 'Radiografía de senos paranasales y alta' },
        { letter: 'D', text: 'Hospitalizar, solicitar TAC de senos y órbitas con contraste e iniciar antibióticos endovenosos' },
        { letter: 'E', text: 'Solo lavados nasales con suero fisiológico' },
      ],
      correct: 'D',
      explanation: 'La proptosis y la oftalmoplejía dolorosa indican celulitis orbitaria (Chandler II), una emergencia por el riesgo de absceso, amaurosis y trombosis del seno cavernoso. Se hospitaliza, se toman hemocultivos, se pide TAC con contraste y se inicia ceftriaxona endovenosa con vancomicina o clindamicina.',
      say: {
        stem: 'Veamos un caso. Niño de siete años con seis días de rinorrea mucopurulenta. En las últimas veinticuatro horas, fiebre de treinta y nueve coma cuatro y un ojo izquierdo cada vez más hinchado. Hay edema del párpado, proptosis, y dolor al mover el ojo hacia afuera y hacia arriba. La visión está conservada.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: amoxicilina ambulatoria, descongestionante y paracetamol, radiografía de senos, hospitalizar con TAC y antibióticos endovenosos, o solo lavados nasales. Piénsalo.',
        answer: 'Es la D. La proptosis con oftalmoplejía dolorosa significa que la infección pasó el septum: es una celulitis orbitaria, Chandler dos. Es una urgencia, por el riesgo de absceso, de ceguera y de trombosis del seno cavernoso. Se hospitaliza, se pide TAC con contraste y se parte con antibióticos endovenosos. Que la visión esté conservada no te permite mandarlo a la casa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 14',
      stem: 'Niño con 10 días de congestión nasal y rinorrea, hace 2 días con fiebre y rinorrea mucopurulenta.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Amoxicilina por 10 días vía oral' },
        { letter: 'B', text: 'Azitromicina por 5 días' },
        { letter: 'C', text: 'Cotrimoxazol por 7 días' },
        { letter: 'D', text: 'Tratamiento sintomático (suero fisiológico nasal)' },
        { letter: 'E', text: 'Amoxicilina-clavulánico por 14 días' },
      ],
      correct: 'A',
      explanation: 'Diez días de evolución con empeoramiento (fiebre y rinorrea mucopurulenta) cumple criterio de rinosinusitis bacteriana. La primera línea es amoxicilina oral por 7 a 10 días.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de enero de dos mil veintitrés. Niño con diez días de congestión nasal y rinorrea, que desde hace dos días tiene fiebre y la secreción se hizo mucopurulenta.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: amoxicilina por diez días, azitromicina, cotrimoxazol, tratamiento sintomático con suero, o amoxicilina con clavulánico por catorce días. Piénsalo.',
        answer: 'Es la A, amoxicilina oral por diez días. Cumple dos criterios a la vez: lleva diez días y además empeora con fiebre y secreción purulenta, la doble caída. La primera línea es amoxicilina; el clavulánico se reserva para quien tiene riesgo de betalactamasas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 59',
      stem: 'Un niño de 8 años presenta un cuadro de 14 días de congestión nasal con rinorrea purulenta, cefalea, sensación febril, asociada a odinofagia y tos con expectoración mucopurulenta. En los últimos días se agrega mayor malestar general y fiebre. Al examen físico presenta rinorrea purulenta abundante, descarga posterior y faringe congestiva y eritematosa, con examen pulmonar normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar tratamiento sintomático con paracetamol' },
        { letter: 'B', text: 'Iniciar claritromicina oral' },
        { letter: 'C', text: 'Iniciar ceftriaxona endovenosa' },
        { letter: 'D', text: 'Iniciar amoxicilina oral' },
        { letter: 'E', text: 'Solicitar radiografía de tórax y baciloscopías' },
      ],
      correct: 'D',
      explanation: 'Es una rinosinusitis aguda bacteriana, con 14 días de evolución y empeoramiento reciente. Se trata con amoxicilina oral. La tos con expectoración se explica por la descarga posterior y el examen pulmonar es normal.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Niño de ocho años con catorce días de congestión, rinorrea purulenta, cefalea y fiebre, con tos con expectoración y odinofagia. Los últimos días empeora, con más malestar y fiebre. Tiene rinorrea purulenta abundante, descarga posterior, la faringe congestiva, y el examen pulmonar es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: paracetamol solo, claritromicina, ceftriaxona endovenosa, amoxicilina oral, o radiografía de tórax y baciloscopías. Piénsalo.',
        answer: 'Es la D, amoxicilina oral. Catorce días con empeoramiento es una rinosinusitis bacteriana. La tos y la faringe roja vienen de la descarga posterior, y el pulmón está normal, así que no hay motivo para pedir radiografía de tórax. La ceftriaxona endovenosa es exagerada para un niño ambulatorio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 122',
      stem: 'Una niña de 4 años presenta un cuadro catarral, con abundante rinorrea. Evoluciona con eritema y, dolor periocular derecho, asociado a proptosis.',
      question: '¿Cuál es el diagnóstico más probablem?',
      options: [
        { letter: 'A', text: 'Celulitis preorbitaria' },
        { letter: 'B', text: 'Celulitis orbitaria' },
        { letter: 'C', text: 'Orbitopatía distiroidea' },
        { letter: 'D', text: 'Pseudotumor orbitario' },
        { letter: 'E', text: 'Etmoiditis aguda' },
      ],
      correct: 'B',
      explanation: 'Un cuadro catarral que evoluciona con eritema, dolor periocular y proptosis es una celulitis orbitaria secundaria a una sinusitis. La proptosis la hace orbitaria, y no preseptal.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Niña de cuatro años con un cuadro catarral y abundante rinorrea. Evoluciona con eritema, dolor alrededor del ojo derecho y proptosis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: celulitis preorbitaria, celulitis orbitaria, orbitopatía distiroidea, pseudotumor orbitario o etmoiditis aguda. Piénsalo.',
        answer: 'Es la B, celulitis orbitaria. La palabra clave es proptosis: si el ojo se protruye, la infección está detrás del septum. La preorbitaria o preseptal tiene el párpado inflamado, pero sin proptosis. Y la orbitopatía distiroidea y el pseudotumor no empiezan después de un catarro.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: rinosinusitis',
      cards: [
        { title: 'Viral o bacteriana', tag: 'Tres criterios', kind: 'key', items: [
          { t: '10 días, doble caída, inicio severo', d: 'Solo así se indica amoxicilina',
            say: 'Cerremos con las reglas de oro. Una rinosinusitis es bacteriana solo si dura diez días o más, si hay doble caída, o si el inicio es severo. Entonces, amoxicilina.' },
          { t: 'Sin antibiótico por el color', d: 'Sin radiografía de senos',
            say: 'El color verde de la secreción no justifica antibióticos, y no se pide radiografía de senos paranasales.' },
        ] },
        { title: 'Órbita', tag: 'Chandler', kind: 'alert', items: [
          { t: 'Proptosis u oftalmoplejía: orbitaria', d: 'Hospitalizar, TAC con contraste y antibiótico EV',
            say: 'Si hay proptosis, dolor al mover el ojo o caída de la visión, es una complicación orbitaria: hospitalización, TAC con contraste y antibióticos endovenosos.' },
          { t: 'Absceso: drenaje quirúrgico', d: 'Por otorrinolaringología',
            say: 'Y si hay una colección, se drena. Si te llevas una sola idea de hoy: el párpado inflamado con el ojo móvil y la visión normal es preseptal; con proptosis, es orbitaria y es una urgencia. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de la rinosinusitis aguda y sus complicaciones orbitarias',
    root: N('start', 'Paciente con rinosinusitis aguda', '¿Hay signos orbitarios?',
      'Un paciente con síntomas nasales y dolor facial. Lo primero es descartar compromiso de la órbita.',
      ['Sí: proptosis, oftalmoplejía o baja visual', N('alert', 'Celulitis orbitaria o peor', 'Chandler II o mayor',
        'Con proptosis, dolor al mover el ojo o caída de la visión, es una complicación orbitaria. Se hospitaliza, se pide TAC con contraste y se inician antibióticos endovenosos, con drenaje si hay colección.')],
      ['No', N('q', '¿10 días, doble caída o inicio severo?', 'Los tres criterios de bacteriana',
        'Si no hay signos orbitarios, la pregunta es si cumple alguno de los tres criterios de bacteriana.',
        ['Sí: bacteriana', N('do', 'Amoxicilina por 7 a 10 días', 'Con clavulánico si hay riesgo',
          'Es una rinosinusitis bacteriana. Amoxicilina por siete a diez días, con ácido clavulánico si hay riesgo de betalactamasas.')],
        ['No: probablemente viral', N('ok', 'Tratamiento sintomático', 'Lavados nasales y paracetamol; sin antibiótico',
          'Es viral y autolimitada. Lavados con suero, analgesia y reposo. Sin antibiótico y sin radiografía de senos.')],
      )],
    ),
  },
};
