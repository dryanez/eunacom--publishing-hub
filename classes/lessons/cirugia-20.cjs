// Clase 11.20 (Cirugía) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/cirugia_extra/c.cjs (cirugia-20, tier 3). Código: 4.01.1.060 (obesidad mórbida y cirugía bariátrica).
// Preguntas reales (class_questions.cjs --search "obesidad mórbida|bariátrica|bypass gástrico|dumping"): Julio 2019 P75 (dumping, código de la clase),
// Julio 2025 P73 (dumping tardío con hipoglicemia, código 1.02.2.006) y Diciembre 2018 P116 (déficit de B12 tras cirugía bariátrica, código 1.08.1.004).
// Enunciados y alternativas copiados tal cual del banco. La viñeta del libro (bypass con dumping precoz) es casi la misma pregunta que Julio 2019 P75,
// por eso el caso clínico de la clase es otro: la fuga anastomótica, que el libro señala como la complicación más temida.
// No usadas: Diciembre 2018 P53 y Julio 2024 P117 (obstrucción intestinal en operado bariátrico: ambas con clave "bridas"; el libro
// destaca la hernia interna de Petersen, sin contradicción pero sin aportar algo nuevo), Julio 2024 P27, Agosto 2021 P23 y Julio 2016 P104 y Julio 2019 P25
// (anemia y déficits en operados: repiten la idea del déficit de B12 ya cubierta), Diciembre 2024 P22 (enunciado incompleto).
// Fotos en contexto: Harrison 21.ª ed., Fig. 402-3 (manga gástrica y bypass en Y de Roux), recortadas del panel original. No hay foto
// verificada de cirugía bariátrica en books/data/atlas_fotos_verificadas.json.
// En movimiento: scenes/cirugia_nuevas.html (?v=bariatrica) sobre Servier "estomago", CC BY 4.0.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-20',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Obesidad mórbida y cirugía bariátrica: a quién se opera, qué técnica y qué se complica',
      say: 'Bienvenido. Hoy vemos la obesidad mórbida y la cirugía bariátrica, un tema que el EUNACOM pregunta casi siempre por el lado de las complicaciones. Primero, quién tiene indicación. Después, las dos técnicas que más se hacen. Y por último, lo que importa en el consultorio: reconocer la fuga, el síndrome de dumping y los déficits nutricionales del paciente operado.',
    },

    {
      type: 'table',
      kicker: 'Definición',
      title: 'Clasificación del peso según el IMC',
      head: ['IMC (kg/m²)', 'Categoría', 'Conducta'],
      rows: [
        { cells: ['25 a 29,9', 'Sobrepeso', 'Estilo de vida'],
          say: 'Partamos por las cifras, porque se preguntan. Entre veinticinco y veintinueve coma nueve es sobrepeso, y se maneja con cambios de estilo de vida.' },
        { cells: ['30 a 34,9', 'Obesidad grado I', 'Estilo de vida; buscar comorbilidades'],
          say: 'De treinta a treinta y cuatro coma nueve es obesidad grado uno: estilo de vida, y buscar las comorbilidades.' },
        { cells: ['35 a 39,9', 'Obesidad grado II', 'Cirugía si hay comorbilidad y falló lo médico'],
          say: 'De treinta y cinco a treinta y nueve coma nueve es grado dos. Aquí aparece la cirugía, pero solo si hay comorbilidad y fracasó el manejo médico.' },
        { cells: ['≥ 40', 'Obesidad grado III (mórbida)', 'Derivar a cirugía si falla el manejo médico'],
          say: 'Con cuarenta o más es la obesidad mórbida, de grado tres. Y también se considera mórbida una obesidad de treinta y cinco o más con comorbilidades. La circunferencia de cintura, mayor de ciento dos centímetros en el hombre y de ochenta y ocho en la mujer, mide la obesidad abdominal, que es la de mayor riesgo cardiometabólico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación',
      title: 'Comorbilidades y manejo inicial',
      cards: [
        { title: 'Comorbilidades', tag: 'Qué trae consigo', kind: 'alert', items: [
          { t: 'Diabetes tipo 2, hipertensión, dislipidemia', d: 'El núcleo cardiometabólico',
            say: 'La obesidad mórbida rara vez viene sola. Trae diabetes tipo dos, hipertensión y dislipidemia.' },
          { t: 'Apnea del sueño e hipoventilación', d: 'STOP-BANG y poligrafía',
            say: 'Trae apnea obstructiva del sueño y síndrome de hipoventilación-obesidad, que se sospechan con el cuestionario STOP-BANG y se confirman con poligrafía.' },
          { t: 'Reflujo, esteatohepatitis, artrosis, trombosis', d: 'Infertilidad por ovario poliquístico; cánceres',
            say: 'Y se suman el reflujo, la esteatohepatitis, la artrosis, la infertilidad por ovario poliquístico, la trombosis venosa y varios cánceres.' },
        ] },
        { title: 'Estudio y manejo', tag: 'Nivel inicial', kind: 'key', items: [
          { t: 'Glicemia, perfil lipídico, hepático, TSH, ECG', d: 'Evaluación psicológica',
            say: 'El estudio incluye glicemia o hemoglobina glicosilada, perfil lipídico, pruebas hepáticas, TSH, electrocardiograma y una evaluación psicológica. Se buscan causas secundarias, como el hipotiroidismo, el síndrome de Cushing y fármacos como los corticoides, los antipsicóticos, la insulina y el valproato.' },
          { t: 'Dieta, ejercicio y terapia conductual', d: 'Fármacos: por especialista',
            say: 'El manejo inicial es una dieta hipocalórica, actividad física y terapia conductual. Los fármacos, como liraglutida, semaglutida u orlistat, los indica el especialista.' },
          { t: 'Equipo multidisciplinario', d: 'Médico, nutricionista, psicólogo y cirujano',
            say: 'Y estos pacientes se derivan a un equipo multidisciplinario, con médico, nutricionista, psicólogo y cirujano.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Indicación',
      title: 'Quién se opera y quién no',
      cards: [
        { title: 'Indicaciones', tag: 'Deben cumplirse todas', kind: 'criteria', items: [
          { t: 'IMC ≥ 40, o ≥ 35 con comorbilidad', d: 'DM2, hipertensión, apnea',
            say: 'La cirugía se considera con un índice de masa corporal de cuarenta o más, o de treinta y cinco o más con una comorbilidad, como diabetes, hipertensión o apnea del sueño.' },
          { t: 'Fracaso de 6 meses de manejo médico supervisado', d: 'No se parte por la cirugía',
            say: 'Pero antes tiene que haber fracasado un manejo médico supervisado de al menos seis meses. Nadie se opera como primera medida.' },
          { t: 'De 18 a 65 años; informado y motivado', d: 'Control de por vida',
            say: 'Se opera entre los dieciocho y los sesenta y cinco años, con criterios más amplios en casos seleccionados, y el paciente tiene que estar informado, motivado y capaz de seguir el control de por vida.' },
        ] },
        { title: 'Contraindicaciones', tag: 'Lo que descarta', kind: 'alert', items: [
          { t: 'Adicción activa al alcohol o a drogas', d: 'Trastorno psiquiátrico no controlado',
            say: 'Se contraindica con adicción activa a alcohol o drogas y con un trastorno psiquiátrico no controlado.' },
          { t: 'Embarazo o imposibilidad de controles', d: 'Enfermedad que limita la vida',
            say: 'También con el embarazo, con la imposibilidad de adherir a los controles y con las enfermedades que limitan la expectativa de vida.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnicas',
      title: 'Manga o bypass: la decisión',
      cards: [
        { title: 'Manga gástrica', tag: 'Restrictiva', kind: 'key', items: [
          { t: 'Gastrectomía vertical', d: 'Se reseca cerca del 80% del estómago',
            say: 'Hay dos técnicas que debes distinguir. La manga gástrica, o gastrectomía vertical, es restrictiva: se reseca cerca del ochenta por ciento del estómago y queda un tubo angosto. Es la que más se hace, porque es técnicamente más simple.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-20/01_manga-gastrica__harrison_p3134.jpg', label: 'Manga gástrica', at: 'queda un tubo angosto', credit: 'Harrison 21.ª ed., Fig. 402-3' } },
          { t: 'Su problema: el reflujo', d: 'Fuga de la línea de grapas, estenosis',
            say: 'Su complicación característica es el reflujo, además de la fuga de la línea de grapas y la estenosis.' },
        ] },
        { title: 'Bypass en Y de Roux', tag: 'Mixta', kind: 'pharma', items: [
          { t: 'Reservorio pequeño y exclusión del duodeno', d: 'Restrictiva y de exclusión',
            say: 'El bypass gástrico en Y de Roux es mixto. Se arma un reservorio gástrico pequeño y se conecta directo al yeyuno, así que además se excluye el duodeno. Mira el dibujo: el reservorio se une al intestino por una anastomosis, y las secreciones biliopancreáticas se reúnen más abajo.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-20/02_bypass-gastrico-en-y-de-roux__harrison_p3134.jpg', label: 'Bypass en Y de Roux', at: 'Mira el dibujo', credit: 'Harrison 21.ª ed., Fig. 402-3' } },
          { t: 'Elección en reflujo importante y diabetes', d: 'Más pérdida de peso, sostenida',
            say: 'Logra más pérdida de peso y más sostenida, y es de elección cuando hay reflujo importante o diabetes. Se espera perder entre el sesenta y el setenta por ciento del exceso de peso, con remisión de la diabetes tipo dos en la mayoría, y una mortalidad perioperatoria menor de cero coma cinco por ciento.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Técnicas de cirugía bariátrica',
      head: ['Técnica', 'Mecanismo', 'Complicaciones propias'],
      rows: [
        { cells: ['Manga gástrica', 'Restrictiva; se reseca ~80% del estómago', 'Reflujo, fuga de grapas, estenosis'],
          say: 'Manga gástrica: restrictiva, la más realizada. Reflujo, fuga de la línea de grapas y estenosis.' },
        { cells: ['Bypass en Y de Roux', 'Mixta: reservorio pequeño y exclusión del duodeno', 'Dumping, hernia interna, úlcera marginal, déficits'],
          say: 'Bypass en Y de Roux: mixta, con la mayor pérdida de peso y remisión de la diabetes y del reflujo. Su precio es el dumping, la hernia interna, la úlcera marginal y los déficits de hierro, vitamina B doce y calcio.' },
        { cells: ['Derivación biliopancreática', 'Malabsortiva predominante', 'Desnutrición proteica, diarrea, déficits graves'],
          say: 'La derivación biliopancreática es malabsortiva y se usa poco por sus déficits nutricionales graves.' },
        { cells: ['Banda gástrica ajustable', 'Restrictiva; reversible', 'Deslizamiento y erosión; en desuso'],
          say: 'Y la banda gástrica ajustable, restrictiva y reversible, hoy está en desuso por el deslizamiento y la erosión.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Manga y bypass, paso a paso',
      images: [
        { src: 'animaciones/cirugia-20/A1_manga_y_bypass.mp4', label: 'Manga gástrica y bypass en Y de Roux', credit: 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Se reseca, o se excluye',
          say: 'Primero la manga: se reseca cerca del ochenta por ciento del estómago, y queda un tubo angosto con una línea de grapas. Su problema es el reflujo. Ahora el bypass: un reservorio gástrico pequeño se conecta directo al yeyuno por el asa de Roux, y el estómago y el duodeno quedan excluidos. El alimento llega rápido y hiperosmolar al intestino, y de ahí viene el dumping.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Complicación precoz',
      title: 'La fuga: la que se piensa primero',
      nodes: [
        { id: 'c', col: 0, row: 1, k: 'cause', t: 'Anastomosis o línea de grapas', s: 'Primeros días' },
        { id: 'f', col: 2, row: 1, k: 'mech', t: 'Fuga de contenido', s: 'Peritonitis o colección' },
        { id: 't', col: 4, row: 0, k: 'alert', t: 'Taquicardia persistente', s: '> 120 lpm; primer signo' },
        { id: 'd', col: 4, row: 2, k: 'effect', t: 'Dolor, fiebre, disnea', s: 'Puede ser sutil' },
        { id: 'x', col: 2, row: 3, k: 'refer', t: 'TAC con contraste', s: 'Y reintervención' },
      ],
      edges: [
        { from: 'c', to: 'f' }, { from: 'f', to: 't' }, { from: 'f', to: 'd' }, { from: 't', to: 'x' }, { from: 'd', to: 'x' },
      ],
      steps: [
        { show: ['c', 'f'], note: 'La más temida',
          say: 'La complicación precoz más temida es la fuga de la anastomosis o de la línea de grapas. El contenido del estómago o del intestino se escapa a la cavidad abdominal.' },
        { show: ['t', 'd'], note: 'Primero la taquicardia',
          say: 'Y la clave es que el primer signo suele ser una taquicardia persistente, de más de ciento veinte latidos por minuto. Puede acompañarse de dolor, fiebre o dificultad respiratoria, pero la taquicardia aparece antes y nunca se ignora.' },
        { show: ['x'], note: 'Imagen y quirófano',
          say: 'Se estudia con una tomografía con contraste y requiere reintervención. Otras complicaciones precoces son la hemorragia, la estenosis de la anastomosis, la trombosis venosa profunda con tromboembolismo pulmonar y la obstrucción intestinal.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Complicación tardía',
      title: 'Dumping: lo que llega muy rápido al intestino',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'cause', t: 'Bypass: se salta el estómago', s: 'Alimento llega directo al yeyuno' },
        { id: 'o', col: 2, row: 0, k: 'mech', t: 'Alimento hiperosmolar', s: 'Azúcares simples' },
        { id: 'p', col: 4, row: 0, k: 'effect', t: 'Dumping precoz', s: '10-30 min: palpitaciones, sudor, cólicos, diarrea' },
        { id: 'i', col: 2, row: 3, k: 'mech', t: 'Liberación exagerada de insulina', s: 'Tras la hiperglicemia inicial' },
        { id: 'l', col: 4, row: 3, k: 'effect', t: 'Dumping tardío', s: '1-3 h: hipoglicemia reactiva' },
        { id: 'm', col: 4, row: 2, k: 'good', t: 'Comidas pequeñas, sin azúcares simples', s: 'Más proteínas y fibra' },
      ],
      edges: [
        { from: 'a', to: 'o' }, { from: 'o', to: 'p' }, { from: 'a', to: 'i' }, { from: 'i', to: 'l' }, { from: 'p', to: 'm' }, { from: 'l', to: 'm' },
      ],
      steps: [
        { show: ['a', 'o'], note: 'El alimento sale muy rápido',
          say: 'Después del bypass, el alimento salta el estómago y llega demasiado rápido al intestino, y además es hiperosmolar, sobre todo si es rico en azúcares simples. Eso es el síndrome de dumping, y es frecuente.' },
        { show: ['p'], note: 'Precoz: síntomas vasomotores y digestivos',
          say: 'El dumping precoz aparece entre diez y treinta minutos después de comer. El agua pasa hacia el intestino y produce palpitaciones, sudor, mareos, cólicos y diarrea. Fíjate en la diarrea, porque es lo que lo distingue de una simple hipoglicemia.' },
        { show: ['i', 'l'], note: 'Tardío: hipoglicemia reactiva',
          say: 'El dumping tardío llega una a tres horas después. La hiperglicemia inicial dispara una liberación exagerada de insulina, y viene una hipoglicemia reactiva, con sudor, temblor y mareo.' },
        { show: ['m'], note: 'Tratamiento: la dieta',
          say: 'El diagnóstico es clínico, y se confirma con una glicemia capilar durante el episodio. El tratamiento es la dieta: comidas pequeñas y frecuentes, sin azúcares simples, con más proteínas y fibra, y separando los líquidos de los sólidos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Otras complicaciones tardías',
      title: 'Hernia interna, úlcera y colelitiasis',
      cards: [
        { title: 'Quirúrgicas', tag: 'Meses a años', kind: 'alert', items: [
          { t: 'Hernia interna (espacio de Petersen)', d: 'Dolor y obstrucción intestinal',
            say: 'La hernia interna del espacio de Petersen es una obstrucción intestinal en un paciente con bypass: dolor abdominal y vómitos. Se estudia con TAC y se opera de urgencia.' },
          { t: 'Úlcera del margen anastomótico', d: 'Dolor epigástrico tras el bypass',
            say: 'La úlcera del margen anastomótico da dolor epigástrico después del bypass.' },
          { t: 'Reflujo tras la manga y recuperación del peso', d: 'Complicación de seguimiento',
            say: 'Tras la manga predomina el reflujo, y con el tiempo cualquiera de las dos técnicas puede acabar con recuperación del peso.' },
        ] },
        { title: 'Por la baja de peso', tag: 'Colelitiasis', kind: 'criteria', items: [
          { t: 'Cálculos entre 6 y 18 meses', d: 'Baja rápida de peso',
            say: 'La colelitiasis aparece entre los seis y los dieciocho meses, por la baja rápida de peso.' },
          { t: 'Ácido ursodesoxicólico o colecistectomía', d: 'Prevención',
            say: 'Se previene con ácido ursodesoxicólico, o se hace colecistectomía según el caso.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguimiento',
      title: 'Suplementos de por vida',
      cards: [
        { title: 'Qué falta', tag: 'Déficits nutricionales', kind: 'criteria', items: [
          { t: 'Hierro, vitamina B12, folato', d: 'Anemia: microcítica o macrocítica',
            say: 'El paciente operado tiene riesgo de déficit de hierro, vitamina B doce y folato. Una anemia con volumen corpuscular grande en un paciente con bypass es un déficit de B doce hasta que se demuestre lo contrario.' },
          { t: 'Calcio, vitamina D, zinc', d: 'Osteoporosis',
            say: 'También faltan calcio, vitamina D y zinc, con riesgo de osteoporosis.' },
          { t: 'Tiamina', d: 'Si hay vómitos persistentes: Wernicke',
            say: 'Y la tiamina se repone ante vómitos persistentes, por el riesgo de encefalopatía de Wernicke.' },
        ] },
        { title: 'Conducta', tag: 'Control de por vida', kind: 'pharma', items: [
          { t: 'Multivitamínico, calcio con D, B12 y hierro', d: 'De por vida',
            say: 'Los suplementos son de por vida: multivitamínico, calcio con vitamina D, vitamina B doce y hierro, con exámenes periódicos.' },
          { t: 'Evitar el embarazo 12 a 18 meses', d: 'Durante la baja de peso',
            say: 'Y se evita el embarazo durante los primeros doce a dieciocho meses.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Complicaciones del postoperatorio bariátrico',
      head: ['Complicación', 'Cuándo', 'Dato clave', 'Conducta'],
      rows: [
        { cells: ['Fuga anastomótica', 'Primeros días', 'Taquicardia > 120, dolor, fiebre', 'TAC con contraste; reintervención'],
          say: 'Fuga anastomótica: primeros días, taquicardia persistente. Tomografía con contraste y reintervención.' },
        { cells: ['Dumping', 'Semanas a meses', 'Palpitaciones, sudor y diarrea tras comer', 'Comidas fraccionadas, sin azúcares simples'],
          say: 'Dumping: síntomas vasomotores y diarrea tras comer. Se maneja con dieta fraccionada sin azúcares simples.' },
        { cells: ['Hernia interna (Petersen)', 'Meses a años', 'Dolor abdominal con obstrucción', 'TAC; cirugía urgente'],
          say: 'Hernia interna: dolor y obstrucción en un bypass. Tomografía y cirugía urgente.' },
        { cells: ['Déficit de B12, hierro, calcio', 'Meses a años', 'Anemia, neuropatía, osteoporosis', 'Suplementos de por vida'],
          say: 'Déficits de vitamina B doce, hierro y calcio: anemia, neuropatía y osteoporosis. Suplementos de por vida.' },
        { cells: ['Colelitiasis', '6 a 18 meses', 'Baja rápida de peso', 'Ácido ursodesoxicólico o colecistectomía'],
          say: 'Y la colelitiasis, entre los seis y los dieciocho meses, por la baja rápida de peso.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del paciente operado que consulta a la conducta.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 41 años, operada hace 3 días de un bypass gástrico en Y de Roux por obesidad mórbida, con un IMC previo de 44. Está con dolor abdominal leve, sensación de falta de aire y fiebre de 37,8 °C. Presión arterial 110/70 mmHg, frecuencia cardíaca 128 por minuto persistente, saturación 95% ambiental. El abdomen está blando, con dolor difuso leve, y las heridas se ven limpias.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Tranquilizar y dar el alta con analgesia, por dolor postoperatorio esperable' },
        { letter: 'B', text: 'Tomografía de abdomen con contraste y avisar al equipo quirúrgico por sospecha de fuga anastomótica' },
        { letter: 'C', text: 'Indicar dieta fraccionada sin azúcares simples por síndrome de dumping' },
        { letter: 'D', text: 'Administrar un betabloqueador para controlar la frecuencia cardíaca' },
        { letter: 'E', text: 'Iniciar suplementos de vitamina B12 y hierro' },
      ],
      correct: 'B',
      explanation: 'La taquicardia persistente de más de 120 latidos por minuto en los primeros días tras una cirugía bariátrica es el primer signo de fuga anastomótica, incluso con abdomen blando y poco dolor. Se estudia con TAC con contraste y requiere reintervención si se confirma. Bajar la frecuencia con un betabloqueador enmascara el signo de alarma, el dumping aparece semanas después y los déficits de vitaminas son tardíos.',
      say: {
        stem: 'Una mujer de cuarenta y un años fue operada hace tres días de un bypass gástrico en Y de Roux por obesidad mórbida. Tiene un dolor abdominal leve, siente falta de aire y tiene fiebre de treinta y siete coma ocho grados. La presión es normal, pero la frecuencia cardíaca está en ciento veintiocho por minuto y no baja. El abdomen está blando y las heridas se ven limpias.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: tranquilizar y dar el alta; tomografía con contraste y aviso al equipo quirúrgico por posible fuga; dieta fraccionada por dumping; un betabloqueador; o suplementos de vitamina B doce y hierro. Piénsalo.',
        answer: 'Es la B. La taquicardia persistente, de más de ciento veinte, es el primer signo de fuga anastomótica, aunque el abdomen esté blando y duela poco. Se pide una tomografía con contraste y se avisa al cirujano. La D es la trampa: bajar la frecuencia con un betabloqueador es apagar la alarma. Y el dumping y los déficits aparecen semanas o meses después, no a los tres días.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 75',
      stem: 'Una paciente de 35 años, con antecedente de bypass gástrico hace un año, presenta crisis de mareos, palpitaciones, malestar general y diarrea, que aparecen después de comer.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Hipoglicemias reactivas' },
        { letter: 'B', text: 'Síndrome de dumping' },
        { letter: 'C', text: 'Hernia del espacio de Petersen' },
        { letter: 'D', text: 'Estenosis de la anastomosis' },
        { letter: 'E', text: 'Déficit de vitamina B12' },
      ],
      correct: 'B',
      explanation: 'Síndrome de dumping clásico, complicación frecuente del bypass gástrico: síntomas disautonómicos tras comer. Se parece a una hipoglicemia, por lo que se confirma con glicemia capilar durante el episodio, pero la diarrea no calza con hipoglicemia y sí con dumping.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Una mujer de treinta y cinco años, operada de un bypass gástrico hace un año, tiene crisis de mareos, palpitaciones, malestar general y diarrea después de comer.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: hipoglicemias reactivas; síndrome de dumping; hernia del espacio de Petersen; estenosis de la anastomosis; o déficit de vitamina B doce. Piénsalo.',
        answer: 'Es la B. Mareos, palpitaciones y diarrea después de comer, en alguien con un bypass, son un dumping precoz. La A tienta, porque el dumping tardío sí es una hipoglicemia reactiva, pero la diarrea no calza con una hipoglicemia. Por eso se confirma con una glicemia capilar durante el episodio. La hernia de Petersen daría dolor y obstrucción, y la estenosis daría vómitos y disfagia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 73',
      stem: 'Hombre de 50 años operado de bypass gástrico hace 1 año. Consulta por episodios de sudoración, temblor y mareo 2 horas después de las comidas. Glicemia capilar durante el episodio: 52 mg/dL.',
      question: '¿Cuál es el diagnóstico?',
      options: [
        { letter: 'A', text: 'Úlcera marginal' },
        { letter: 'B', text: 'Obstrucción de la anastomosis' },
        { letter: 'C', text: 'Dumping tardío (hipoglicemia reactiva postprandial)' },
        { letter: 'D', text: 'Hipoglicemia por insulinoma' },
        { letter: 'E', text: 'Síndrome de asa aferente' },
      ],
      correct: 'C',
      explanation: 'Dumping tardío: hipoglicemia una a tres horas después de comer, por liberación exagerada de insulina tras la hiperglicemia inicial. Se maneja con comidas pequeñas y frecuentes y reducción de los carbohidratos simples.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un hombre de cincuenta años, operado de un bypass gástrico hace un año, tiene episodios de sudoración, temblor y mareo dos horas después de las comidas. La glicemia capilar durante el episodio es cincuenta y dos.',
        question: '¿Cuál es el diagnóstico?',
        options: 'Las opciones: úlcera marginal; obstrucción de la anastomosis; dumping tardío o hipoglicemia reactiva; hipoglicemia por insulinoma; o síndrome de asa aferente. Piénsalo.',
        answer: 'Es la C. Dos horas después de comer, con una glicemia baja documentada en el episodio, es el dumping tardío: hipoglicemia reactiva por una liberación exagerada de insulina. La D tienta, porque un insulinoma también baja la glicemia, pero no en relación con las comidas ni en un paciente con bypass. El manejo es dietético, con comidas pequeñas y sin azúcares simples.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 116',
      stem: 'Una paciente de 27 años, vegana estricta, con antecedente de cirugía bariátrica, presenta astenia y disnea de esfuerzos, asociado a palidez, por lo que se solicita un hemograma, con hematocrito: 23%, hemoglobina: 7,1 g/dl, VCM: 122 fl, blancos: 4.100 por mm3 y plaquetas: 150.000 por mm3.',
      question: '¿El déficit de qué elemento puede explicar los síntomas y hallazgos de laboratorio?',
      options: [
        { letter: 'A', text: 'Hierro' },
        { letter: 'B', text: 'Folatos' },
        { letter: 'C', text: 'Zink' },
        { letter: 'D', text: 'Vitamina B12' },
        { letter: 'E', text: 'Vitamina D' },
      ],
      correct: 'D',
      explanation: 'Déficit de vitamina B12: por ser vegana estricta, por la cirugía bariátrica y por el VCM mayor de 108 fl (anemia macrocítica).',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Una mujer de veintisiete años, vegana estricta y operada de cirugía bariátrica, tiene astenia, disnea de esfuerzo y palidez. El hemograma muestra hemoglobina de siete coma uno y volumen corpuscular medio de ciento veintidós.',
        question: '¿El déficit de qué elemento puede explicar los síntomas y los hallazgos?',
        options: 'Las opciones: hierro; folatos; zinc; vitamina B doce; o vitamina D. Piénsalo.',
        answer: 'Es la D. Un volumen corpuscular de ciento veintidós es una anemia macrocítica, y la vitamina B doce suma dos causas: la dieta vegana estricta y la cirugía bariátrica. El hierro, la A, daría una anemia microcítica. Por eso el paciente operado toma vitamina B doce de por vida.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: obesidad mórbida y cirugía bariátrica',
      cards: [
        { title: 'Indicación y técnica', tag: 'Quién y cómo', kind: 'key', items: [
          { t: 'IMC ≥ 40, o ≥ 35 con comorbilidad', d: 'Y fracaso de 6 meses de manejo médico',
            say: 'Cerremos con las reglas de oro. Se opera con un índice de masa corporal de cuarenta o más, o de treinta y cinco con comorbilidad, y solo después de fracasar un manejo médico supervisado de seis meses.' },
          { t: 'Manga: la más usada; bypass: más pérdida', d: 'Bypass en reflujo y diabetes',
            say: 'La manga es la técnica más usada. El bypass en Y de Roux logra más pérdida de peso y remisión de la diabetes y del reflujo.' },
        ] },
        { title: 'Complicaciones', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Taquicardia persistente: fuga', d: 'TAC con contraste y reintervención',
            say: 'Taquicardia persistente en el postoperatorio inmediato es una fuga anastomótica hasta que se demuestre lo contrario.' },
          { t: 'Síntomas tras comer: dumping', d: 'Comidas pequeñas, sin azúcares simples',
            say: 'Síntomas vasomotores y diarrea después de comer, en alguien con bypass, son un dumping, que se maneja con dieta fraccionada.' },
          { t: 'Suplementos de por vida', d: 'B12, hierro, calcio y vitamina D',
            say: 'Y los suplementos son de por vida: vitamina B doce, hierro, calcio y vitamina D. Si te llevas una sola idea de hoy: la taquicardia después de una cirugía bariátrica nunca se tranquiliza, se estudia. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Paciente con cirugía bariátrica que consulta',
    root: N('start', 'Operado bariátrico con síntomas', 'Ver cuánto tiempo pasó',
      'Un paciente operado de cirugía bariátrica consulta. Lo primero es preguntarte cuánto tiempo pasó desde la cirugía.',
      ['Primeros días, taquicardia', N('alert', 'Sospechar fuga anastomótica', 'FC > 120 persistente, dolor, fiebre',
        'En los primeros días, una taquicardia persistente de más de ciento veinte, con o sin dolor y fiebre, es una fuga hasta que se demuestre lo contrario.',
        ['Imagen', N('do', 'TAC con contraste', 'Y avisar al cirujano',
          'Pides una tomografía con contraste y avisas al equipo quirúrgico.',
          ['Fuga confirmada', N('refer', 'Reintervención', 'Urgente',
            'Si se confirma, se reopera.')],
        )],
      )],
      ['Síntomas tras comer', N('q', '¿Cuánto después de comer?', 'Precoz o tardío',
        'Si los síntomas aparecen después de comer, preguntas cuánto tiempo después.',
        ['10 a 30 minutos', N('do', 'Dumping precoz', 'Palpitaciones, sudor, cólicos, diarrea',
          'A los diez a treinta minutos, con palpitaciones, sudor, cólicos y diarrea, es un dumping precoz. Se maneja con comidas pequeñas y frecuentes, sin azúcares simples, con más proteínas y fibra.')],
        ['1 a 3 horas', N('do', 'Dumping tardío', 'Hipoglicemia reactiva',
          'A la una a tres horas, con sudor, temblor y una glicemia baja, es un dumping tardío. Mismo manejo dietético, y confirmas con glicemia capilar durante el episodio.')],
      )],
      ['Dolor con vómitos y distensión', N('alert', 'Hernia interna (Petersen)', 'Obstrucción intestinal',
        'Si hay dolor cólico, vómitos y distensión abdominal, piensas en una obstrucción por hernia interna, que se estudia con tomografía y se opera de urgencia.')],
      ['Anemia, neuropatía o fracturas', N('do', 'Déficit nutricional', 'B12, hierro, calcio, vitamina D',
        'Si hay anemia, neuropatía o riesgo de osteoporosis, buscas déficits de vitamina B doce, hierro, calcio o vitamina D. Se reponen y se refuerzan los suplementos de por vida.')],
    ),
  },
};
