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
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Del resfrío a la órbita',
      images: [
        { src: 'animaciones/orl-10/A1_sinusitis_criterios_y_chandler.mp4', label: 'Rinosinusitis: criterios de bacteriana y complicaciones orbitarias de Chandler', credit: 'Ilustración: Servier Medical Art (smart.servier.com), CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Tres criterios de bacteriana y cinco grupos de Chandler',
          say: 'Mira cómo el resfrío tapa los ostium y los senos no drenan. Casi siempre mejora hacia los diez días. Es bacteriana si persiste diez días o más, si hay doble caída, o si el inicio es severo. Y desde el etmoides la infección puede entrar a la órbita: cinco grupos de Chandler, de la celulitis preseptal a la trombosis del seno cavernoso.' },
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
            say: 'El grupo uno es la celulitis preseptal: edema y eritema del párpado, pero con agudeza visual, movimientos oculares y pupila normales, y sin proptosis. Se trata con antibióticos orales, o endovenosos en un lactante. Mira este párpado izquierdo, edematoso y rojo, en una etmoiditis aguda: la foto sola no decide el grado, tienes que examinar los movimientos oculares y la visión.',
            photo: { src: 'biblioteca/17_otorrino/orl-10/01_celulitis-periorbitaria-etmoiditis__bailey-love_p743.jpg', label: 'Edema palpebral, etmoiditis', at: 'Mira este párpado izquierdo', credit: 'Bailey & Love 27.ª ed., Fig. 46.47' } },
          { t: 'II: celulitis orbitaria', d: 'Proptosis, oftalmoplejía dolorosa y quemosis',
            say: 'El grupo dos es la celulitis orbitaria, postseptal. Aquí aparecen los tres signos que la separan de la preseptal: proptosis, oftalmoplejía dolorosa y quemosis conjuntival.' },
        ] },
        { title: 'Grupos III a V', tag: 'Colecciones y trombosis', kind: 'alert', items: [
          { t: 'III: absceso subperióstico', d: 'Globo desplazado abajo y afuera',
            say: 'El grupo tres es el absceso subperióstico, una colección entre la lámina papirácea y el periostio, que empuja el globo ocular hacia abajo y afuera. Mira este TAC: la colección junto a la pared medial de la órbita empuja el contenido orbitario. Ante cualquier signo orbitario, TAC con contraste.',
            photo: { src: 'biblioteca/17_otorrino/orl-10/02_tac-absceso-subperiostico-orbita__bailey-love_p743.jpg', label: 'TAC: absceso subperióstico', at: 'Mira este TAC', credit: 'Bailey & Love 27.ª ed., Fig. 46.48' } },
          { t: 'IV: absceso orbitario', d: 'Pérdida visual y defecto pupilar aferente',
            say: 'El grupo cuatro es el absceso dentro de la órbita, con grave caída de la visión y defecto pupilar aferente.' },
          { t: 'V: trombosis del seno cavernoso', d: 'Compromiso bilateral y sepsis',
            say: 'Y el grupo cinco, la trombosis del seno cavernoso: compromiso orbitario bilateral que avanza rápido, parálisis de los pares craneales tres, cuatro, cinco y seis, y sepsis.' },
        ] },
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
      type: 'points',
      kicker: 'Rinosinusitis crónica',
      title: 'Doce semanas o más: la rinosinusitis crónica',
      cards: [
        { title: 'Cómo se define', tag: '12 semanas o más', kind: 'criteria', items: [
          { t: 'Dos o más síntomas durante 12 semanas', d: 'Obstrucción, rinorrea o goteo, dolor facial, hiposmia',
            say: 'La rinosinusitis crónica, con o sin pólipos, son síntomas que duran doce semanas o más. Se necesitan al menos dos de estos: obstrucción nasal, rinorrea mucopurulenta o goteo posterior, dolor o presión facial, e hiposmia. Y además, inflamación demostrada por endoscopía o TAC.' },
          { t: 'Se asocia a otras condiciones', d: 'Rinitis alérgica, desviación septal, infección dentaria, fibrosis quística, tríada de Samter',
            say: 'Se asocia a rinitis alérgica, desviación septal, infección dentaria, fibrosis quística, inmunodeficiencias y a la tríada de Samter: poliposis, asma e intolerancia a la aspirina.' },
        ] },
        { title: 'Manejo', tag: 'Médico y derivación', kind: 'pharma', items: [
          { t: 'Lavados salinos y corticoide nasal diario', d: 'Control del alérgeno; antibiótico solo en exacerbación bacteriana',
            say: 'El manejo inicial son lavados nasales salinos de alto volumen y corticoide nasal todos los días, con control del alérgeno. El antibiótico se reserva para las exacerbaciones bacterianas.' },
          { t: 'Derivar a otorrino', d: 'Falla a 8 a 12 semanas, enfermedad unilateral, sospecha de tumor o complicación',
            say: 'Derivas si no mejora tras ocho a doce semanas de tratamiento, si la enfermedad es unilateral, o si sospechas un tumor o una complicación, para endoscopía, TAC y eventual cirugía endoscópica funcional.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Imágenes e infecciones altas',
      title: 'Radiografía, TAC e infecciones de la vía aérea superior',
      cards: [
        { title: 'Radiografía de senos', tag: 'Poco rendimiento', kind: 'alert', items: [
          { t: 'No se pide en la rinosinusitis aguda', d: 'Velamiento puede ser un resfrío viral',
            say: 'La radiografía de senos paranasales, en proyecciones de Waters, Caldwell y lateral, muestra velamiento, nivel hidroaéreo o engrosamiento mucoso, pero su rendimiento es bajo. No se pide en la rinosinusitis aguda, porque el diagnóstico es clínico y un velamiento puede aparecer en un simple resfrío.' },
          { t: 'En menores de 6 años es difícil de leer', d: 'Nivel hidroaéreo tras un golpe: hemosinus',
            say: 'En menores de seis años el seno frontal no está desarrollado y los maxilares son pequeños. Un nivel hidroaéreo después de un traumatismo sugiere hemosinus.' },
        ] },
        { title: 'TAC de cavidades perinasales', tag: 'Examen de elección', kind: 'key', items: [
          { t: 'Cuándo se pide', d: 'Crónica refractaria, cirugía, enfermedad unilateral, complicación',
            say: 'La TAC de cavidades perinasales es el examen de elección en la rinosinusitis crónica refractaria, para planificar la cirugía, en la enfermedad unilateral y ante la sospecha de complicación, con contraste si hay compromiso orbitario o intracraneal.' },
          { t: 'Qué informa', d: 'Complejo osteomeatal ocupado, pólipos, Lund-Mackay de 0 a 24',
            say: 'El informe describe engrosamiento mucoso, niveles hidroaéreos, ocupación del complejo osteomeatal, pólipos y desviación septal, y se cuantifica con la escala de Lund-Mackay. Pero ojo: hay hallazgos en la TAC de personas sin síntomas, así que siempre se correlaciona con la clínica.' },
        ] },
        { title: 'Infecciones de la vía aérea superior', tag: 'Casi todas virales', kind: 'pharma', items: [
          { t: 'Resfrío, faringitis, laringitis, rinosinusitis', d: 'Autolimitadas de 7 a 10 días: sin antibióticos',
            say: 'La gran mayoría de las infecciones altas, resfrío, faringitis, laringitis, rinosinusitis y otitis, son virales y duran siete a diez días. Se manejan con hidratación, lavados nasales, antipiréticos y reposo, sin antibióticos.' },
          { t: 'Pus no implica bacteria', d: 'Sospecha bacteriana: más de 10 días, doble caída o fiebre alta con pus 3 a 4 días',
            say: 'Una secreción mucopurulenta no implica por sí sola una bacteria. Sospéchala si persiste más de diez días, si hay doble empeoramiento, o fiebre alta con secreción purulenta por tres a cuatro días.' },
        ] },
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
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2022 · Pregunta 139",
      "stem": "Un paciente de 17 años consulta por un cuadro que inició hace 12 días, consistente en congestión nasal, rinorrea mucosa abundante y odinofagia. En los últimos días la rinorrea se vuelve purulenta y empeoran los síntomas, agregándose sensación febril y tos seca mayor en las noches. Al examen físico se constata fiebre de 38,2 °C, FC 78 por minuto, FR 12 por minuto, faringe eritematosa con descarga posterior y rinorrea purulenta en ambas fosas nasales. Su examen cardiopulmonar es normal.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Amoxicilina oral por 7 días"
        },
        {
          "letter": "B",
          "text": "Claritromicina oral por 10 días"
        },
        {
          "letter": "C",
          "text": "Aseo con suero fisiológico"
        },
        {
          "letter": "D",
          "text": "Corticoides orales por 7 días"
        },
        {
          "letter": "E",
          "text": "Antihistamínicos orales por 7 días"
        }
      ],
      "correct": "A",
      "explanation": "Síntomas que superan los 10 días y además empeoran, con fiebre y rinorrea purulenta, definen una rinosinusitis aguda bacteriana. La primera línea es amoxicilina; los macrólidos quedan para alérgicos a penicilina. Los lavados nasales son coadyuvantes, no reemplazan al antibiótico.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veintidós. Adolescente de diecisiete años con doce días de congestión, rinorrea y dolor de garganta. En los últimos días la rinorrea se vuelve purulenta, empeora, y aparecen fiebre de treinta y ocho coma dos y tos nocturna. El examen pulmonar es normal.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: amoxicilina por siete días, claritromicina por diez días, aseo con suero fisiológico, corticoides orales, o antihistamínicos orales. Piénsalo.",
        "answer": "Es la A. Más de diez días de síntomas que empeoran, con fiebre y rinorrea purulenta, es una rinosinusitis bacteriana, y la primera línea es amoxicilina. El aseo con suero tienta porque es lo que se hace en el resfrío, pero aquí es solo un complemento."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.4.008 · Radiografía de senos paranasales",
      "stem": "Un niño de 6 años presenta rinorrea purulenta y tos diurna persistente de 12 días de evolución, sin mejoría. Está afebril y en buenas condiciones generales, sin edema periorbitario. La madre pide una radiografía de senos paranasales.",
      "question": "¿Cuál es la conducta más adecuada respecto de la radiografía?",
      "options": [
        {
          "letter": "A",
          "text": "Solicitarla para confirmar el diagnóstico de sinusitis"
        },
        {
          "letter": "B",
          "text": "Solicitar radiografía y esperar el resultado para indicar antibiótico"
        },
        {
          "letter": "C",
          "text": "Solicitar TAC de senos paranasales"
        },
        {
          "letter": "D",
          "text": "No solicitarla: el diagnóstico de rinosinusitis aguda es clínico"
        },
        {
          "letter": "E",
          "text": "Solicitar resonancia magnética"
        }
      ],
      "correct": "D",
      "explanation": "La rinosinusitis bacteriana aguda en niños se diagnostica clínicamente: síntomas persistentes más de 10 días sin mejoría, empeoramiento tras mejoría inicial o inicio grave. La radiografía de senos paranasales no se recomienda porque tiene baja especificidad (se altera en resfríos comunes) y los senos están en desarrollo. La TAC se reserva para sospecha de complicaciones orbitarias o intracraneanas.",
      "say": {
        "stem": "Un niño de seis años tiene doce días de rinorrea purulenta y tos sin mejoría, afebril, y su madre pide una radiografía de senos.",
        "question": "¿Qué hace con la radiografía?",
        "options": "Las opciones: pedirla para confirmar, pedirla y esperar el resultado, TAC de senos, no pedirla porque el diagnóstico es clínico o resonancia. Piénsalo.",
        "answer": "Es la D. La rinosinusitis aguda se diagnostica clínicamente y la radiografía no aporta. Pedirla para confirmar tienta, pero se altera también en los resfríos comunes y no cambia la conducta."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2018 · Pregunta 10",
      "stem": "Un paciente de 38 años consulta por malestar general y fiebre de 3 días de evolución, asociada a mialgias, tos seca y rinorrea mucosa abundante. Al examen físico tiene secreción nasal y faringe congestiva y eritematosa.",
      "question": "¿Cuál es el fármaco más adecuado para el manejo de este paciente?",
      "options": [
        {
          "letter": "A",
          "text": "Amoxicilina"
        },
        {
          "letter": "B",
          "text": "Aciclovir"
        },
        {
          "letter": "C",
          "text": "Acetaminofeno"
        },
        {
          "letter": "D",
          "text": "Claritromicina"
        },
        {
          "letter": "E",
          "text": "Prednisona"
        }
      ],
      "correct": "C",
      "explanation": "Fiebre, mialgias, tos seca, rinorrea y faringe eritematosa sin exudado ni signos de gravedad corresponden a una infección viral de la vía aérea superior (resfrío o síndrome gripal). En un adulto sano el manejo es sintomático con paracetamol, hidratación y reposo. Los antibióticos no están indicados y el aciclovir no actúa sobre virus respiratorios.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Un hombre de treinta y ocho años tiene tres días de fiebre, mialgias, tos seca y rinorrea abundante, con faringe congestiva.",
        "question": "¿Cuál es el fármaco más adecuado?",
        "options": "Las opciones: amoxicilina, aciclovir, acetaminofeno, claritromicina o prednisona. Piénsalo.",
        "answer": "Es la C. Es una infección viral de la vía aérea superior y se maneja con tratamiento sintomático. La amoxicilina tienta por la fiebre, pero no sirve contra virus y solo genera resistencia."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Agosto 2021 · Pregunta 69",
      "stem": "Paciente de 43 años presenta obstrucción nasal marcada, asociada a rinorrea de 5 años de evolución, con sensación de presión facial, cefalea e hiposmia. La radiografía de cavidades paranasales muestra velamiento de ambos senos maxilares. La TAC de cavidades paranasales muestra secreciones e inflamación de la mucosa de ambos senos maxilares y de las celdillas etmoidales bilaterales.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Fluticasona nasal"
        },
        {
          "letter": "B",
          "text": "Azitromicina"
        },
        {
          "letter": "C",
          "text": "Cirugía endoscópica nasal"
        },
        {
          "letter": "D",
          "text": "Rinomanometría"
        },
        {
          "letter": "E",
          "text": "Resonancia magnética nuclear de cavidades paranasales"
        }
      ],
      "correct": "A",
      "explanation": "Síntomas nasosinusales de más de 12 semanas (obstrucción, rinorrea, presión facial, hiposmia) con compromiso mucoso en la TAC definen rinosinusitis crónica. El tratamiento de primera línea son los corticoides intranasales y los lavados nasales con solución salina. La cirugía endoscópica se reserva para la falla del tratamiento médico máximo.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Mujer de cuarenta y tres años con cinco años de obstrucción nasal, rinorrea, presión facial e hiposmia, y TAC con inflamación de senos maxilares y etmoidales.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: fluticasona nasal, azitromicina, cirugía endoscópica, rinomanometría o resonancia. Piénsalo.",
        "answer": "Es la A. La rinosinusitis crónica se trata primero con corticoide intranasal y lavados. La cirugía endoscópica tienta por la cronicidad, pero se reserva para cuando falla el tratamiento médico."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.4.001 · Radiografía de cavidades perinasales",
      "stem": "Mujer de 30 años con rinorrea purulenta, congestión nasal y dolor facial maxilar de 4 días, tras un resfrío. Afebril, en buen estado general, sin signos orbitarios ni neurológicos. Solicita una radiografía de cavidades perinasales.",
      "question": "¿Cuál es la conducta más adecuada respecto a las imágenes?",
      "options": [
        {
          "letter": "A",
          "text": "No solicitar imágenes; el diagnóstico de rinosinusitis aguda es clínico, y las imágenes se reservan para complicaciones, falla de tratamiento o enfermedad crónica"
        },
        {
          "letter": "B",
          "text": "Radiografía de cavidades perinasales para confirmar sinusitis"
        },
        {
          "letter": "C",
          "text": "TAC de cavidades perinasales urgente"
        },
        {
          "letter": "D",
          "text": "Resonancia magnética"
        },
        {
          "letter": "E",
          "text": "Radiografía de cavum"
        }
      ],
      "correct": "A",
      "explanation": "La rinosinusitis aguda es un diagnóstico clínico. La radiografía de cavidades perinasales tiene baja sensibilidad y especificidad (el velamiento también ocurre en resfríos virales) y no cambia el manejo. Si se requiere imagen (complicación orbitaria o intracraneana, cronicidad, planificación quirúrgica), el examen de elección es la TAC.",
      "say": {
        "stem": "Mujer de treinta años con cuatro días de rinorrea purulenta y dolor maxilar tras un resfrío, en buen estado y sin signos de complicación. Pide una radiografía de senos.",
        "question": "¿Cuál es la conducta respecto a las imágenes?",
        "options": "Las opciones: no pedir imágenes porque el diagnóstico es clínico, radiografía para confirmar, TAC urgente, resonancia o radiografía de cavum. Piénsalo.",
        "answer": "Es la A. La rinosinusitis aguda se diagnostica clínicamente y no requiere imágenes. La radiografía tienta por ser sencilla, pero el velamiento también aparece en resfríos virales y no cambia el manejo."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.4.003 · TAC de cavidades perinasales",
      "stem": "Niño de 7 años con rinosinusitis aguda de 5 días que presenta edema palpebral izquierdo, proptosis, dolor a la movilización ocular y disminución de la agudeza visual. Temperatura 39 °C.",
      "question": "¿Cuál es el examen de imagen de elección?",
      "options": [
        {
          "letter": "A",
          "text": "Radiografía de cavidades perinasales"
        },
        {
          "letter": "B",
          "text": "Ecografía ocular"
        },
        {
          "letter": "C",
          "text": "TAC de cavidades perinasales y órbitas con contraste"
        },
        {
          "letter": "D",
          "text": "Radiografía de cavum"
        },
        {
          "letter": "E",
          "text": "No requiere imágenes"
        }
      ],
      "correct": "C",
      "explanation": "Proptosis, oftalmoplejía dolorosa y disminución visual en un niño con sinusitis indican celulitis orbitaria o absceso subperióstico, complicaciones de la etmoiditis. Requiere TAC de cavidades perinasales y órbitas con contraste urgente para identificar abscesos que necesitan drenaje, antibióticos endovenosos y evaluación por ORL y oftalmología. La TAC es también el examen para sinusitis crónica y planificación quirúrgica.",
      "say": {
        "stem": "Niño de siete años con sinusitis que presenta edema palpebral, proptosis, dolor al mover el ojo, menor visión y fiebre alta.",
        "question": "¿Cuál es el examen de imagen de elección?",
        "options": "Las opciones: radiografía de senos, ecografía ocular, TAC de senos y órbitas con contraste, radiografía de cavum o ninguno. Piénsalo.",
        "answer": "Es la C. La proptosis con dolor al mover el ojo y menor visión indica una complicación orbitaria y se pide TAC con contraste de senos y órbitas. La radiografía tienta por ser rápida, pero no muestra abscesos orbitarios."
      }
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
