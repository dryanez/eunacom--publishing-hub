// Clase 16.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_dermatologia_bloque_2.cjs (derma-05).
// Preguntas reales EUNACOM: node classes/scripts/class_questions.cjs --search "psoriasis|Koebner|Auspitz|artritis psoriásica"
// -> EUNACOM Julio 2025 · Pregunta 120 (código 6.01.1.024, confianza 0.95)
// -> EUNACOM Diciembre 2018 · Pregunta 29 (código 1.11.1.001, confianza 0.95)

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'derma-05',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'El raspado de Brocq, la trampa de los corticoides sistémicos y el escalonamiento GES',
      say: 'Bienvenidos al bloque de dermatosis inflamatorias. Empezamos con la psoriasis, uno de los temas de mayor rendimiento del EUNACOM. Vamos a dominar tres cosas: la semiología del raspado metódico de Brocq, que termina en el signo de Auspitz; el fenómeno de Koebner; y una regla de oro que se pregunta una y otra vez: nunca, nunca dar corticoides sistémicos en psoriasis. Partamos por el mecanismo.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'De la interleuquina veintitrés a la escama nacarada',
      nodes: [
        { id: 'gen', col: 0, row: 1, k: 'cause', t: 'Predisposición poligénica', s: 'Fuerte asociación con HLA-Cw6' },
        { id: 'th', col: 1, row: 1, k: 'mech', t: 'Activación Th1 y Th17', s: 'Estimulados por interleuquina veintitrés' },
        { id: 'cit', col: 2, row: 0, k: 'mech', t: 'Cascada de citoquinas', s: 'Interleuquina diecisiete, veintidós y TNF alfa' },
        { id: 'rec', col: 2, row: 2, k: 'effect', t: 'Recambio celular acelerado', s: 'De veintiocho días a solo tres o cuatro' },
        { id: 'par', col: 3, row: 1, k: 'effect', t: 'Paraqueratosis', s: 'Núcleos conservados en el estrato córneo' },
        { id: 'pla', col: 4, row: 1, k: 'alert', t: 'Placa eritematodescamativa', s: 'Escamas gruesas blanco-nacaradas' },
      ],
      edges: [
        { from: 'gen', to: 'th' }, { from: 'th', to: 'cit' }, { from: 'th', to: 'rec' },
        { from: 'cit', to: 'par' }, { from: 'rec', to: 'par' }, { from: 'par', to: 'pla' },
      ],
      steps: [
        { show: ['gen'], note: 'No es solo genética, es un gatillo inmune',
          say: 'La psoriasis es una enfermedad poligénica con una fuerte asociación al antígeno HLA-Cuwe seis. Pero la genética sola no explica la enfermedad: hace falta que se active el sistema inmune.' },
        { show: ['th', 'cit'], note: 'El eje que hoy bloquean los biológicos',
          say: 'Se activan linfocitos T colaboradores, tipo uno y tipo diecisiete, estimulados por la interleuquina veintitrés. Esa activación desencadena una cascada de citoquinas: interleuquina diecisiete, interleuquina veintidós y factor de necrosis tumoral alfa. Este es exactamente el eje que bloquean los fármacos biológicos modernos, y es la base de por qué hoy la psoriasis se entiende como una enfermedad inmunomediada sistémica, no solo un problema de la piel.' },
        { show: ['rec'], note: 'El recambio celular se dispara',
          say: 'Toda esa inflamación acelera el recambio de los queratinocitos de manera brutal: de un ciclo normal de veintiocho días, pasa a solo tres o cuatro días.' },
        { show: ['par'], note: 'Suben tan rápido que no alcanzan a madurar',
          say: 'Como las células ascienden demasiado rápido, no les da tiempo de madurar: conservan sus núcleos en el estrato córneo, lo que se llama paraqueratosis, y no logran sintetizar queratohialina.' },
        { show: ['pla'], note: 'El resultado visible',
          say: 'El resultado es la placa típica: eritematosa, bien delimitada, cubierta por esas escamas gruesas, blanco-nacaradas, que vamos a examinar con el raspado de Brocq.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología clásica',
      title: 'El raspado metódico de Brocq',
      cards: [
        { title: 'Tres signos en secuencia', tag: 'Curetaje con cucharilla', kind: 'key', items: [
          { t: 'Signo de la bujía', d: 'Virutas blanquecinas, como raspar una vela de cera',
            say: 'El raspado metódico de Brocq se hace con una cucharilla sobre la placa. Primero aparece el signo de la bujía o mancha de cera: se desprenden virutas blanquecinas, igual que al raspar una vela.' },
          { t: 'Membrana despegable', d: 'Película epidérmica transparente y continua',
            say: 'Si seguimos raspando, se levanta una fina película epidérmica transparente y continua, la membrana de Duncan-Dulck.' },
          { t: 'Signo de Auspitz', d: 'Rocío sangrante, patognomónico',
            say: 'Y al retirar esa membrana, quedan expuestas las papilas dérmicas elongadas con sus capilares dilatados, produciendo un punteado hemorrágico fino en gotitas: el signo de Auspitz o del rocío sangrante. Es patognomónico, y es lo que más se pregunta de esta clase.' },
        ] },
        { title: 'Localización y Koebner', tag: 'Superficies de extensión', kind: 'criteria', items: [
          { t: 'Codos, rodillas, lumbosacra, cuero cabelludo', d: 'Bilateral y simétrica',
            say: 'La placa típica se ubica en superficies de extensión: codos, rodillas, región lumbosacra y cuero cabelludo, de forma bilateral y simétrica.' },
          { t: 'Fenómeno de Koebner', d: 'Lesiones nuevas sobre piel sana traumatizada',
            say: 'El fenómeno isomórfico de Koebner es la aparición de lesiones psoriásicas típicas sobre piel sana que sufrió un traumatismo, una herida quirúrgica o rascado repetido. También aparece en vitíligo y liquen plano, así que no es exclusivo de la psoriasis, pero sí se pregunta mucho en este contexto.' },
        ] },
        { title: 'Compromiso ungueal', tag: 'Hasta en la mitad de los pacientes', kind: 'normal', items: [
          { t: 'Pitting o piqueteado en dedal', d: 'Pequeñas depresiones cupuliformes',
            say: 'Hasta la mitad de los pacientes tiene compromiso ungueal: el pitting o piqueteado en dedal, la mancha en gota de aceite, hiperqueratosis subungueal y onicólisis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Formas clínicas especiales',
      title: 'De la psoriasis en gotas a la artritis psoriásica',
      cards: [
        { title: 'Psoriasis en gotas', tag: 'Niños y adultos jóvenes', kind: 'criteria', items: [
          { t: 'Pápulas en gotas de lluvia', d: 'Una a dos semanas tras faringoamigdalitis estreptocócica',
            say: 'La psoriasis en gotas o guttata es una erupción brusca de pápulas milimétricas, en gotas de lluvia, generalizadas, que aparece una a dos semanas después de una faringoamigdalitis estreptocócica. Tiene excelente pronóstico y responde a antibióticos y fototerapia.' },
        ] },
        { title: 'Invertida y formas graves', tag: 'Sin escamas, o potencialmente letales', kind: 'alert', items: [
          { t: 'Invertida: placas rojas y húmedas en pliegues', d: 'Sin escamas, por la maceración',
            say: 'La psoriasis invertida afecta los grandes pliegues: axilas, ingles, submamario. Por la humedad y el roce constante, las placas no desarrollan escamas y se ven rojas, lisas y brillantes, lo que confunde el diagnóstico con un intertrigo candidiásico. Ojo con esa diferencia en el examen.' },
          { t: 'Eritrodermia y pustulosa generalizada', d: 'Compromiso hemodinámico, hipotermia, sepsis',
            say: 'La eritrodermia psoriásica compromete casi toda la superficie corporal, y junto con la psoriasis pustulosa generalizada de von Zumbusch, son formas graves y potencialmente letales, con compromiso hemodinámico, hipotermia y riesgo de sepsis. Ambas suelen requerir hospitalización.' },
        ] },
        { title: 'Artritis psoriásica', tag: 'Diez a treinta por ciento de los pacientes', kind: 'key', items: [
          { t: 'Interfalángicas distales, factor reumatoide negativo', d: 'Asociada a HLA-B veintisiete',
            say: 'Entre el diez y el treinta por ciento de los pacientes desarrolla artritis psoriásica: seronegativa, con factor reumatoide negativo, que afecta las articulaciones interfalángicas distales.' },
          { t: 'Dactilitis, dedo en salchicha', d: 'Más entesitis',
            say: 'Y su signo más característico es la dactilitis, el dedo en salchicha, además de entesitis. Esta asociación entre psoriasis y artritis es justamente lo que evalúa una de las preguntas reales que vamos a ver hoy.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento escalonado',
      title: 'De lo tópico a lo biológico, según la superficie afectada',
      cards: [
        { title: 'Psoriasis leve', tag: 'Menos de un diez por ciento de superficie', kind: 'pharma', items: [
          { t: 'Corticoide potente más calcipotriol', d: 'Clobetasol o betametasona, más un análogo de vitamina D',
            say: 'En la psoriasis leve, con menos de un diez por ciento de superficie corporal comprometida, la primera línea es tópica: un corticoide de alta potencia, como el clobetasol, combinado con un análogo de vitamina D, el calcipotriol. Uno frena la inflamación y el otro frena la proliferación, con sinergia y menos atrofia cutánea.' },
        ] },
        { title: 'Psoriasis moderada a grave', tag: 'Más de un diez por ciento, GES número ochenta y cuatro', kind: 'criteria', items: [
          { t: 'Fototerapia y metotrexato', d: 'Ultravioleta B de banda angosta; metotrexato semanal más ácido fólico',
            say: 'Cuando supera el diez por ciento de superficie, o hay compromiso articular importante, entramos a la garantía GES número ochenta y cuatro. Primero, fototerapia con ultravioleta B de banda angosta. Y metotrexato oral semanal, siempre con ácido fólico, como fármaco sistémico de primera línea.' },
          { t: 'Terapia biológica', d: 'Anti-TNF, anti-interleuquina diecisiete, anti-interleuquina veintitrés',
            say: 'Si eso falla, la garantía GES da acceso a terapia biológica: anticuerpos monoclonales contra el factor de necrosis tumoral, contra la interleuquina diecisiete o contra la interleuquina veintitrés. Antes de indicarlos, siempre hay que descartar tuberculosis latente.' },
        ] },
        { title: 'La trampa mortal del examen', tag: 'Contraindicación absoluta', kind: 'alert', items: [
          { t: 'Nunca corticoides orales ni parenterales', d: 'Su suspensión desencadena rebote letal',
            say: 'Y aquí viene la regla de oro que más se pregunta: los corticoides sistémicos, orales o endovenosos, están estrictamente contraindicados en psoriasis. Aclaran la placa rápido, pero al suspenderlos provocan casi siempre un rebote violento hacia psoriasis pustulosa generalizada o eritrodermia, con alta mortalidad. Si ves una alternativa que ofrece prednisona oral para un brote de psoriasis, es la trampa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad de cada escalón',
      title: 'Lo que cuida cada fármaco antes de indicarlo',
      cards: [
        { title: 'Tópico y fototerapia', tag: 'Cuidados prácticos', kind: 'pharma', items: [
          { t: 'Calcipotriol, no más de cien gramos por semana', d: 'Riesgo de hipercalcemia si se excede',
            say: 'Aunque la combinación tópica es segura, el calcipotriol no debe superar los cien gramos por semana, porque en dosis mayores puede producir hipercalcemia.' },
          { t: 'Fototerapia, contraindicada en melanoma o lupus', d: 'Radiación ultravioleta B de banda angosta',
            say: 'Y la fototerapia con ultravioleta B de banda angosta está contraindicada en pacientes con antecedente de melanoma o de lupus eritematoso, porque la radiación puede agravar ambas condiciones.' },
        ] },
        { title: 'Sistémicos clásicos', tag: 'Vigilancia de laboratorio', kind: 'alert', items: [
          { t: 'Metotrexato, hepatotoxicidad y mielosupresión', d: 'Control con hemograma y perfil hepático',
            say: 'El metotrexato oral exige vigilancia con hemograma y perfil hepático periódico, porque su principal riesgo es la hepatotoxicidad y la mielosupresión.' },
          { t: 'Acitretina, teratogénica por tres años', d: 'Prohibido el embarazo durante ese período tras suspenderla',
            say: 'La acitretina, el retinoide sistémico que se usa en formas pustulosas, es teratogénica, y su indicación exige prohibir el embarazo durante los tres años siguientes a la suspensión del fármaco, mucho más tiempo que la mayoría de los teratógenos.' },
        ] },
        { title: 'Biológicos', tag: 'Antes de iniciar', kind: 'criteria', items: [
          { t: 'Descartar tuberculosis latente', d: 'PPD o QuantiFERON previo a cualquier biológico',
            say: 'Y antes de iniciar cualquier terapia biológica, ya sea anti factor de necrosis tumoral, anti interleuquina diecisiete o anti interleuquina veintitrés, siempre se descarta tuberculosis latente con PPD o QuantiFERON, porque estos fármacos pueden reactivar una infección dormida.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Pongamos todo esto en un árbol de decisión, desde la placa hasta el escalón terapéutico.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Formas clínicas de psoriasis y su conducta',
      head: ['Forma clínica', 'Lesión y localización', 'Gatillante típico', 'Conducta'],
      rows: [
        { cells: ['En placas, la más frecuente', 'Escamas nacaradas en codos y rodillas', 'Trauma local, Koebner, estrés, tabaco', 'Tópicos, corticoide más calcipotriol'],
          say: 'Repasemos con una tabla. La forma en placas, la más frecuente, da escamas nacaradas en codos y rodillas, y se gatilla con trauma local o Koebner. Su conducta es tópica: corticoide más calcipotriol.' },
        { cells: ['En gotas', 'Pápulas en gotas en tronco de niños', 'Faringoamigdalitis estreptocócica previa', 'Antibiótico más fototerapia'],
          say: 'La psoriasis en gotas da pápulas pequeñas en el tronco de niños o jóvenes, gatillada por una faringoamigdalitis estreptocócica, y se trata con antibiótico más fototerapia.' },
        { cells: ['Pustulosa generalizada', 'Pústulas estériles confluentes y fiebre alta', 'Suspensión de corticoides orales', 'Hospitalización urgente'],
          say: 'La forma pustulosa generalizada da pústulas estériles con fiebre alta, y su gatillante clásico de examen es la suspensión de corticoides orales. Requiere hospitalización urgente.' },
        { cells: ['Artropatía psoriásica', 'Dactilitis, dedo en salchicha', 'HLA-B veintisiete, factor reumatoide negativo', 'Metotrexato o biológicos'],
          say: 'Y la artropatía psoriásica da dactilitis, con factor reumatoide negativo, y se trata con metotrexato o biológicos. El error clásico del examen es olvidar que nunca se usan corticoides sistémicos en ninguna de estas formas.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 42 años consulta por placas eritematosas pruriginosas en ambos codos, región sacra y cuero cabelludo desde hace 2 años. Al examen físico se aprecian placas solevantadas de 4 a 6 cm de diámetro, bien delimitadas, cubiertas por escamas gruesas blanco-nacaradas. Al raspar con un abatelenguas, se desprenden virutas blanquecinas, luego una membrana transparente continua, y finalmente aparece un punteado hemorrágico fino en gotitas sobre la superficie desnudada. El compromiso estimado de superficie corporal es del ocho por ciento.',
      question: '¿Cuál es la conducta terapéutica inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Prednisona oral en dosis decreciente por 2 semanas' },
        { letter: 'B', text: 'Corticoide tópico de alta potencia combinado con calcipotriol' },
        { letter: 'C', text: 'Metotrexato oral semanal más ácido fólico' },
        { letter: 'D', text: 'Anticuerpo monoclonal anti-interleucina 17' },
        { letter: 'E', text: 'Antibiótico oral de amplio espectro por 10 días' },
      ],
      correct: 'B',
      explanation: 'El raspado metódico de Brocq con signo de Auspitz confirma psoriasis vulgar en placas. Con un compromiso del ocho por ciento de superficie corporal, es psoriasis leve, cuya primera línea es la terapia tópica combinada de corticoide potente más calcipotriol. El metotrexato y los biológicos son para formas moderadas a graves; el antibiótico es para la forma guttata; y la prednisona oral está formalmente contraindicada.',
      say: {
        stem: 'Vamos al caso. Hombre de cuarenta y dos años que consulta por placas eritematosas pruriginosas en ambos codos, la región sacra y el cuero cabelludo, desde hace dos años. Al examen se ven placas solevantadas, bien delimitadas, cubiertas por escamas gruesas blanco-nacaradas. Al raspar con un abatelenguas, se desprenden virutas blanquecinas, luego una membrana transparente continua, y finalmente aparece un punteado hemorrágico en gotitas. El compromiso de superficie corporal estimado es del ocho por ciento.',
        question: '¿Cuál es la conducta terapéutica inicial más adecuada?',
        options: 'Las opciones: prednisona oral en dosis decreciente, corticoide tópico de alta potencia combinado con calcipotriol, metotrexato oral semanal, un anticuerpo monoclonal contra la interleuquina diecisiete, o un antibiótico oral de amplio espectro. Piénsalo.',
        answer: 'Es la B. El raspado de Brocq con signo de Auspitz confirma la psoriasis en placas. Con un ocho por ciento de superficie corporal, es una forma leve, y la primera línea es tópica: corticoide potente combinado con calcipotriol. El metotrexato y los biológicos se reservan para formas moderadas a graves, y el antibiótico es para la psoriasis en gotas. La prednisona oral, aunque parezca tentadora, está formalmente contraindicada por el riesgo de rebote.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 120',
      stem: 'Mujer de 35 años con placas eritematosas bien delimitadas, cubiertas de escamas plateadas en rodillas y codos, con fenómeno de Auspitz positivo. Compromete el 10% de la superficie corporal.',
      question: '¿Cuál es el diagnóstico?',
      options: [
        { letter: 'A', text: 'Psoriasis en placas' },
        { letter: 'B', text: 'Dermatitis atópica' },
        { letter: 'C', text: 'Dermatitis de contacto' },
        { letter: 'D', text: 'Liquen plano' },
        { letter: 'E', text: 'Micosis fungoide' },
      ],
      correct: 'A',
      explanation: 'Placas eritematosas con escamas plateadas en superficies extensoras más fenómeno de Auspitz positivo (sangrado puntiforme al retirar la escama) es psoriasis en placas. Un compromiso del diez por ciento corresponde a psoriasis moderada.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticinco. Mujer de treinta y cinco años con placas eritematosas bien delimitadas, cubiertas de escamas plateadas en rodillas y codos, con fenómeno de Auspitz positivo. El compromiso es del diez por ciento de la superficie corporal.',
        question: '¿Cuál es el diagnóstico?',
        options: 'Las opciones: psoriasis en placas, dermatitis atópica, dermatitis de contacto, liquen plano, o micosis fungoide.',
        answer: 'Es la A, psoriasis en placas. Escamas plateadas en superficies extensoras, con el signo de Auspitz positivo, es el cuadro que acabamos de estudiar en el raspado de Brocq. Con un diez por ciento de superficie corporal, esta paciente ya está en el límite entre leve y moderada, así que conviene reevaluar si necesita escalar a fototerapia o metotrexato.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 29',
      stem: 'Una paciente de 42 años presenta artritis de las articulaciones interfalángicas distales y proximales de ambas manos, con afectación reciente de una articulación metatarsofalángica. Al examen físico, además de las artritis descritas, presenta múltiples depresiones en las uñas de las manos y engrosamiento de las uñas de los pies.',
      question: '¿A qué tipo de artritis corresponde este cuadro?',
      options: [
        { letter: 'A', text: 'Reumatoide' },
        { letter: 'B', text: 'Reactiva' },
        { letter: 'C', text: 'Psoriática' },
        { letter: 'D', text: 'Gotosa' },
        { letter: 'E', text: 'Lúpica' },
      ],
      correct: 'C',
      explanation: 'Artritis de interfalángicas distales, con pitting ungueal y engrosamiento ungueal, es una artritis psoriásica clásica, incluso sin mencionar placas cutáneas, porque las uñas pueden dar la pista antes que la piel.',
      say: {
        stem: 'Y una segunda pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Paciente de cuarenta y dos años con artritis de las articulaciones interfalángicas distales y proximales de ambas manos, con compromiso reciente de una articulación metatarsofalángica. Además, tiene múltiples depresiones en las uñas de las manos y engrosamiento de las uñas de los pies.',
        question: '¿A qué tipo de artritis corresponde este cuadro?',
        options: 'Las opciones: reumatoide, reactiva, psoriática, gotosa, o lúpica.',
        answer: 'Es la C, psoriática. El compromiso de las interfalángicas distales junto con el pitting ungueal y el engrosamiento de las uñas son la firma de la artritis psoriásica, incluso cuando el enunciado no menciona placas en la piel. La reumatoide típicamente respeta las interfalángicas distales, y ahí está la diferencia que se pregunta.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La semiología que confirma', tag: 'Brocq y Koebner', kind: 'key', items: [
          { t: 'Auspitz es patognomónico', d: 'Rocío sangrante tras la membrana despegable',
            say: 'Cerremos con las reglas de oro. El raspado de Brocq termina en el signo de Auspitz, patognomónico de la psoriasis. Y el fenómeno de Koebner explica por qué aparecen placas nuevas sobre piel traumatizada.' },
        ] },
        { title: 'El escalonamiento', tag: 'Superficie corporal manda', kind: 'criteria', items: [
          { t: 'Menos de diez por ciento: tópico', d: 'Corticoide más calcipotriol',
            say: 'Con menos de un diez por ciento de superficie, el tratamiento es tópico. Con más, o si hay compromiso articular, entramos a fototerapia, metotrexato o biológicos, bajo la garantía GES número ochenta y cuatro, siempre descartando tuberculosis latente antes de un biológico.' },
        ] },
        { title: 'La trampa que nunca falla', tag: 'Contraindicación absoluta', kind: 'alert', items: [
          { t: 'Nunca corticoides sistémicos', d: 'El rebote puede ser letal',
            say: 'Y la trampa que nunca falla en el examen: jamás corticoides sistémicos en psoriasis, por el riesgo de rebote hacia una forma pustulosa o eritrodérmica potencialmente mortal. Si te llevas una sola idea de hoy: busca el Auspitz para confirmar, y nunca ofrezcas prednisona oral. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Psoriasis: de la placa al escalón terapéutico',
    root: N(
      'start', 'Placas eritematodescamativas nacaradas', 'Codos, rodillas o cuero cabelludo',
      'Frente a placas eritematosas con escamas gruesas nacaradas en superficies de extensión, hacemos el raspado metódico de Brocq buscando el signo de Auspitz.',
      ['', N(
        'q', '¿Qué porcentaje de superficie corporal está comprometido?', 'Menos del diez por ciento, o más',
        'Confirmada la psoriasis, el porcentaje de superficie corporal define el escalón terapéutico.',
        ['Menos del diez por ciento', N(
          'do', 'Psoriasis leve', 'Corticoide de alta potencia más calcipotriol tópico',
          'Con menos de un diez por ciento de superficie, la primera línea es tópica: un corticoide potente combinado con un análogo de vitamina D.',
        )],
        ['Más del diez por ciento, o articular', N(
          'q', '¿Hay compromiso articular con dactilitis?', 'Interfalángicas distales, factor reumatoide negativo',
          'Con más de un diez por ciento de superficie, o compromiso articular extenso, entramos a la garantía GES número ochenta y cuatro.',
          ['Sí, dactilitis y uñas en dedal', N(
            'alert', 'Artritis psoriásica', 'Metotrexato o terapia biológica',
            'La dactilitis en dedo en salchicha, con pitting ungueal y factor reumatoide negativo, confirma la artritis psoriásica: metotrexato o biológicos, descartando tuberculosis latente antes.',
          )],
          ['No, solo piel extensa', N(
            'do', 'Fototerapia y metotrexato', 'Ultravioleta B de banda angosta, o metotrexato semanal',
            'Sin compromiso articular pero con piel extensa, se escala a fototerapia ultravioleta B de banda angosta o metotrexato oral semanal con ácido fólico.',
          )],
        )],
      )],
      ['', N(
        'alert', 'Nunca corticoides sistémicos', 'Riesgo de rebote a pustulosa generalizada',
        'En ningún escalón se usan corticoides orales o endovenosos: su suspensión desencadena un rebote hacia psoriasis pustulosa generalizada o eritrodermia, potencialmente letal.',
      )],
    ),
  },
};
