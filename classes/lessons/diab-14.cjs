// Clase 3.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-14).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-14',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Reconocerla, rescatarla según la conciencia y no dar de alta al paciente con glibenclamida',
      say: 'Bienvenidos. Hoy vemos la hipoglicemia, la urgencia endocrinológica más frecuente en la atención primaria y en el servicio de urgencia. En la clase anterior dijimos que la glibenclamida se suspende al hospitalizar por este riesgo; hoy vemos qué pasa cuando no se hizo a tiempo. El examen pregunta tres cosas: reconocerla, rescatarla según el estado de conciencia, y saber a quién no se puede dar de alta. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Definición',
      title: 'Tres niveles de hipoglicemia',
      cards: [
        { title: 'Nivel 1', tag: 'Alerta', kind: 'normal', items: [
          { t: 'Glicemia < 70 mg/dL', d: 'Valor de alerta',
            say: 'Partamos por la definición. La Asociación Americana de Diabetes la ordena en tres niveles. El nivel uno es el valor de alerta: glicemia bajo setenta. Todavía no es grave, pero ya obliga a actuar.' },
        ] },
        { title: 'Nivel 2', tag: 'Significativa', kind: 'criteria', items: [
          { t: 'Glicemia < 54 mg/dL', d: 'Empiezan los síntomas neuroglucopénicos',
            say: 'El nivel dos es la hipoglicemia clínicamente significativa: bajo cincuenta y cuatro. Es el umbral donde el cerebro empieza a quedarse sin glucosa y aparecen los síntomas neuroglucopénicos, como la confusión o la cefalea.' },
        ] },
        { title: 'Nivel 3', tag: 'Severa', kind: 'alert', items: [
          { t: 'Sin cifra fija', d: 'Compromiso de conciencia o necesita a un tercero',
            say: 'Y el nivel tres, la hipoglicemia severa, no se define por un número. Se define por la clínica: compromiso de conciencia, convulsiones, o un paciente que no puede tratarse solo y necesita que otro lo ayude. Esa diferencia se pregunta: el nivel tres es clínico, no bioquímico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Confirmación',
      title: 'Tríada de Whipple',
      cards: [
        { title: 'Los tres elementos', tag: 'Estándar de confirmación', kind: 'key', items: [
          { t: 'Síntomas compatibles', d: 'Autonómicos o neuroglucopénicos',
            say: 'En el paciente no diabético, o cuando estás estudiando la causa, la hipoglicemia se confirma con la tríada de Whipple. Primero, síntomas y signos compatibles.' },
          { t: 'Glicemia baja documentada', d: '< 55 en no diabéticos · < 70 en diabéticos tratados',
            say: 'Segundo, una glicemia plasmática baja documentada: bajo cincuenta y cinco en el no diabético, o bajo setenta en el diabético en tratamiento.' },
          { t: 'Alivio al subir la glicemia', d: 'Resolución completa e inmediata',
            say: 'Y tercero, que los síntomas se resuelvan por completo e inmediatamente al administrar glucosa. Si falta alguno de los tres, no puedes afirmar que esos síntomas eran por hipoglicemia.' },
        ] },
        { title: 'Por qué importa', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Síntomas sin glicemia no bastan', d: 'Tampoco la glicemia sin síntomas',
            say: 'Fíjate en la lógica: muchos cuadros dan sudoración y temblor, y un examen aislado puede salir bajo por error. Lo que da certeza es la combinación de los tres, y por eso el examen te la pide completa.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Primero la alarma, después el cerebro',
      nodes: [
        { id: 'cae', col: 0, row: 1, k: 'cause', t: 'Glicemia que cae', s: 'Insulina o fármacos' },
        { id: 'aut', col: 1, row: 0, k: 'effect', t: 'Síntomas autonómicos', s: '< 70–65 mg/dL' },
        { id: 'aut2', col: 2, row: 0, k: 'effect', t: 'Sudor frío, temblor, taquicardia', s: 'Palidez, ansiedad, hambre' },
        { id: 'neu', col: 1, row: 2, k: 'risk', t: 'Síntomas neuroglucopénicos', s: '< 54–50 mg/dL' },
        { id: 'neu2', col: 2, row: 2, k: 'alert', t: 'Confusión, conducta bizarra', s: 'Convulsiones, sopor, coma' },
        { id: 'bb', col: 3, row: 1, k: 'trap', t: 'Propranolol', s: 'Enmascara la alarma, salvo la sudoración' },
      ],
      edges: [
        { from: 'cae', to: 'aut', label: 'primero' }, { from: 'aut', to: 'aut2' },
        { from: 'cae', to: 'neu', label: 'si sigue' }, { from: 'neu', to: 'neu2' },
        { from: 'bb', to: 'aut2', label: 'bloquea' },
      ],
      steps: [
        { show: ['cae'], note: 'Dos grupos de síntomas, en orden',
          say: 'Veamos por qué el paciente se siente como se siente. Cuando la glicemia cae, aparecen dos grupos de síntomas, y aparecen en orden.' },
        { show: ['aut', 'aut2'], note: 'La descarga simpática es la señal de alarma',
          say: 'Primero, alrededor de setenta a sesenta y cinco, se activa el sistema autonómico como señal de alarma: sudoración fría y profusa, temblor, taquicardia, palpitaciones, palidez, ansiedad y un hambre intensa. Es el cuerpo avisando que hay que comer.' },
        { show: ['neu', 'neu2'], note: 'El cerebro se queda sin su combustible',
          say: 'Si nadie responde a esa alarma y la glicemia sigue bajando, bajo cincuenta y cuatro a cincuenta, el cerebro se queda sin su combustible. Aparecen cefalea, visión borrosa, confusión, disartria, conducta bizarra o agresiva, y al final convulsiones, sopor y coma.' },
        { show: ['bb'], note: 'Hipoglicemia inadvertida',
          say: 'Y aquí está el detalle que se pregunta. Los betabloqueadores no cardioselectivos, como el propranolol, bloquean la taquicardia, las palpitaciones y el temblor. El paciente pierde su alarma y pasa directo a la neuroglucopenia. La excepción es la sudoración, que se mantiene: esa es la pista del examen.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Rescate',
      title: 'Lo decide la conciencia',
      nodes: [
        { id: 'hip', col: 0, row: 2, k: 'start', t: 'Hipoglicemia confirmada', s: 'Hemoglucotest bajo' },
        { id: 'q', col: 1, row: 2, k: 'q', t: '¿Consciente y traga bien?', s: 'Vía oral segura' },
        { id: 'r15', col: 2, row: 0, k: 'good', t: 'Regla de los 15', s: '15 g de azúcar simple, control en 15 min' },
        { id: 'vo', col: 2, row: 2, k: 'trap', t: 'Nada por boca', s: 'Riesgo de broncoaspiración' },
        { id: 'ev', col: 3, row: 1, k: 'alert', t: 'Glucosa 30% EV', s: '20–50 ml en bolo + SG 10%' },
        { id: 'glg', col: 3, row: 3, k: 'refer', t: 'Glucagón 1 mg IM o SC', s: 'Sin vía venosa o en domicilio' },
      ],
      edges: [
        { from: 'hip', to: 'q' },
        { from: 'q', to: 'r15', label: 'sí' }, { from: 'q', to: 'vo', label: 'no' },
        { from: 'vo', to: 'ev', label: 'con vía' }, { from: 'vo', to: 'glg', label: 'sin vía' },
      ],
      steps: [
        { show: ['hip', 'q'], note: 'Una sola pregunta',
          say: 'Pasemos al rescate, que es lo que más se pregunta. El manejo depende de una sola pregunta: ¿el paciente está consciente y puede tragar sin riesgo?' },
        { show: ['r15'], note: '15 gramos, 15 minutos',
          say: 'Si está consciente, se aplica la regla de los quince: quince gramos de azúcar de absorción rápida por boca, esperar quince minutos en reposo y repetir la glicemia. Si sigue bajo setenta, se repiten los quince gramos.' },
        { show: ['vo'], note: 'Prohibido dar algo por boca',
          say: 'Si está inconsciente, o la vía oral no es segura, está prohibido darle líquidos o comida por boca. El riesgo de broncoaspiración puede ser fatal. Parece de sentido común, pero en el examen aparece como distractor: darle jugo al paciente soporoso.' },
        { show: ['ev'], note: 'En el hospital o el SAPU',
          say: 'Si tienes vía venosa, en el hospital o la urgencia, se administra glucosa al treinta por ciento en bolo endovenoso, veinte a cincuenta mililitros, que son dos a cuatro ampollas. Otra opción es glucosa al diez por ciento, ciento cincuenta a doscientos mililitros en bolo rápido.' },
        { show: ['ev'], note: 'El bolo se sigue de una infusión',
          say: 'Y el bolo no termina el tratamiento. Se sigue de una infusión continua de suero glucosado al diez por ciento, a ochenta a cien mililitros por hora, y se repite el hemoglucotest a los diez o quince minutos.' },
        { show: ['glg'], note: 'Fuera del hospital',
          say: 'Si no hay vía venosa, por ejemplo en el domicilio, se usa glucagón un miligramo intramuscular o subcutáneo, o glucagón intranasal de tres miligramos si está disponible. Luego se canaliza una vía y se traslada al paciente.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Rescate',
      title: 'Detalles que deciden la alternativa',
      cards: [
        { title: 'Regla de los 15', tag: 'Paciente consciente', kind: 'pharma', items: [
          { t: '15 g de azúcar simple', d: '150 ml de jugo o bebida no light, o 3–4 cucharaditas de azúcar',
            say: '¿Qué son quince gramos? Ciento cincuenta mililitros de jugo azucarado o de bebida no light, tres a cuatro cucharaditas de azúcar disueltas en agua, o tres caramelos masticables. Azúcar simple, que se absorba rápido.' },
          { t: 'Luego, colación compleja', d: 'Pan, galletas o leche',
            say: 'Y cuando la glicemia ya supera setenta, una colación con carbohidratos complejos, como pan, galletas o leche, para que no vuelva a caer. Un sándwich con grasa como primera medida es un error: retarda la absorción justo cuando necesitas rapidez.' },
        ] },
        { title: 'Glucagón', tag: 'Tiene un límite', kind: 'alert', items: [
          { t: 'Actúa liberando glucógeno', d: 'Glucogenólisis hepática',
            say: 'El glucagón funciona estimulando la glucogenólisis: saca la glucosa guardada en el hígado como glucógeno.' },
          { t: 'Ineficaz sin reservas', d: 'Desnutrición, ayuno prolongado, alcoholismo agudo',
            say: 'Entonces, si el hígado no tiene glucógeno, el glucagón no sirve. Eso pasa en la desnutrición severa, el ayuno prolongado y el alcoholismo agudo. En esos pacientes, la respuesta es glucosa endovenosa.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La trampa de la glibenclamida',
      title: 'Despertó, pero no se va a la casa',
      nodes: [
        { id: 'gbc', col: 0, row: 1, k: 'cause', t: 'Glibenclamida', s: 'Vida media hasta 10–16 h' },
        { id: 'acu', col: 1, row: 0, k: 'mech', t: 'Metabolitos activos', s: 'Se acumulan en falla renal' },
        { id: 'bol', col: 1, row: 2, k: 'effect', t: 'Bolo de glucosa EV', s: 'El paciente despierta' },
        { id: 'alt', col: 2, row: 2, k: 'trap', t: 'Alta a domicilio', s: 'La hipoglicemia vuelve' },
        { id: 'hos', col: 3, row: 1, k: 'good', t: 'Hospitalizar 24–48 h', s: 'SG 10% continuo + HGT cada 1–2 h' },
      ],
      edges: [
        { from: 'gbc', to: 'acu' }, { from: 'gbc', to: 'bol', label: 'hipoglicemia' },
        { from: 'bol', to: 'alt', label: 'error' }, { from: 'acu', to: 'alt', label: 'sigue actuando' },
        { from: 'bol', to: 'hos', label: 'correcto' },
      ],
      steps: [
        { show: ['gbc'], note: 'La causa más común de hipoglicemia severa prolongada',
          say: 'Ahora, la regla de oro de esta clase. La glibenclamida es la causa más común de hipoglicemias severas y prolongadas en adultos mayores en Chile. Su vida media llega a diez a dieciséis horas.' },
        { show: ['acu'], note: 'Falla renal, deshidratación, hipoalbuminemia',
          say: 'Y además tiene metabolitos activos, que se acumulan en la falla renal, la deshidratación o la hipoalbuminemia. Es decir, justo en el adulto mayor frágil que suele usarla.' },
        { show: ['bol'], note: 'El bolo corrige la glicemia, no el fármaco',
          say: 'El escenario típico: llega soporoso, recibe un bolo de glucosa endovenosa, y a los pocos minutos despierta lúcido y pide irse. El bolo arregló la glicemia de ese momento, pero la glibenclamida sigue circulando.' },
        { show: ['alt'], note: 'Negligencia grave',
          say: 'Si lo das de alta, la hipoglicemia vuelve horas después, en su casa, sin nadie que la trate, con riesgo de daño neurológico o muerte. Darlo de alta porque despertó es el distractor clásico del examen.' },
        { show: ['hos'], note: 'Regla absoluta',
          say: 'La conducta correcta: todo paciente con hipoglicemia por sulfonilureas, glibenclamida o glimepirida, se hospitaliza por veinticuatro a cuarenta y ocho horas, con infusión continua de suero glucosado al diez por ciento y glicemias capilares cada una a dos horas. Compáralo con la hipoglicemia por insulina en quien vuelve a comer bien: ese sí puede irse.' },
      ],
    },

    {
      type: 'points',
      kicker: 'El paciente no diabético',
      title: 'La muestra crítica',
      cards: [
        { title: 'Cuándo', tag: 'Whipple confirmada', kind: 'criteria', items: [
          { t: 'Hipoglicemia espontánea', d: 'En quien no tiene diabetes',
            say: 'Cambiemos de paciente. Una persona sin diabetes, con hipoglicemias espontáneas y tríada de Whipple confirmada. Aquí la pregunta no es cómo rescatarla, sino por qué le pasa.' },
        ] },
        { title: 'Qué se mide', tag: 'Durante el episodio', kind: 'key', items: [
          { t: 'Glicemia < 55 mg/dL', d: 'La muestra se toma en plena hipoglicemia',
            say: 'La clave es tomar una muestra crítica, en plena hipoglicemia, con glicemia bajo cincuenta y cinco. Medida en otro momento, no sirve.' },
          { t: 'Insulina, péptido C, proinsulina', d: 'Y sulfonilureas en orina',
            say: 'En esa misma muestra se mide la insulina plasmática, el péptido C, la proinsulina, y se buscan sulfonilureas en la orina. Con esos resultados se separan las causas.' },
        ] },
        { title: 'La lógica', tag: 'Péptido C', kind: 'alert', items: [
          { t: 'Insulina propia = con péptido C', d: 'La insulina farmacéutica no lo trae',
            say: 'Y la lógica es una sola. El páncreas libera la insulina junto con el péptido C, en partes iguales. La insulina que viene de una jeringa no trae péptido C. Con esa idea resuelves casi todas las preguntas.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'Insulinoma o hipoglicemia facticia',
      nodes: [
        { id: 'ins', col: 0, row: 2, k: 'start', t: 'Hipoglicemia + insulina alta', s: 'Muestra crítica' },
        { id: 'pc', col: 1, row: 2, k: 'q', t: '¿Péptido C?', s: 'Endógena o exógena' },
        { id: 'exo', col: 2, row: 0, k: 'trap', t: 'Insulina exógena', s: 'Péptido C indetectable' },
        { id: 'su', col: 2, row: 3, k: 'q', t: '¿Sulfonilurea en orina?', s: 'Péptido C elevado' },
        { id: 'fsu', col: 3, row: 2, k: 'trap', t: 'Facticia por sulfonilurea', s: 'Screening positivo' },
        { id: 'tum', col: 3, row: 4, k: 'risk', t: 'Insulinoma', s: 'Screening negativo' },
      ],
      edges: [
        { from: 'ins', to: 'pc' },
        { from: 'pc', to: 'exo', label: 'bajo' }, { from: 'pc', to: 'su', label: 'alto' },
        { from: 'su', to: 'fsu', label: 'positivo' }, { from: 'su', to: 'tum', label: 'negativo' },
      ],
      steps: [
        { show: ['ins', 'pc'], note: 'La insulina está alta: ¿de dónde viene?',
          say: 'Apliquemos la lógica. La muestra crítica muestra hipoglicemia con insulina alta. La pregunta es de dónde viene esa insulina, y la respuesta la da el péptido C.' },
        { show: ['exo'], note: 'Insulina muy alta, péptido C suprimido',
          say: 'Si la insulina está muy alta pero el péptido C está indetectable, esa insulina no la hizo el páncreas: se la inyectaron. Es la hipoglicemia facticia por insulina exógena. Piensa en la persona con acceso a insulina, por ejemplo personal de salud.' },
        { show: ['su'], note: 'Insulina y péptido C altos: el páncreas la está fabricando',
          say: 'Si insulina y péptido C están ambos altos, el páncreas la está fabricando. Pero hay dos razones posibles, y las separa el screening de sulfonilureas.' },
        { show: ['fsu'], note: 'Simula un insulinoma',
          say: 'Si el screening es positivo, es una hipoglicemia facticia por sulfonilureas: el fármaco estimula al páncreas y simula un insulinoma.' },
        { show: ['tum'], note: 'Tumor de células beta',
          say: 'Si el screening es negativo, es un insulinoma, el tumor de células beta que secreta insulina de forma autónoma. Y una causa más, con otro patrón: la insuficiencia suprarrenal o el hipopituitarismo dan hipoglicemia con insulina baja y cortisol muy bajo.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en el árbol que vas a usar frente a un paciente con hipoglicemia.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Consciente, traga bien', 'Regla de los 15', 'Glucagón o vía venosa de entrada'],
          say: 'Repasemos las trampas. Paciente consciente que traga bien: regla de los quince. El error es saltar de inmediato al glucagón o a la vía venosa.' },
        { cells: ['Inconsciente, con vía venosa', 'Glucosa 30% EV 20–50 ml + SG 10%', 'Dar jugo o azúcar por boca'],
          say: 'Inconsciente con vía venosa: glucosa al treinta por ciento en bolo y luego suero glucosado al diez. El error es darle algo por boca.' },
        { cells: ['Inconsciente, sin vía, en domicilio', 'Glucagón 1 mg IM o SC', 'Esperar la ambulancia sin tratar'],
          say: 'Inconsciente sin vía, en su casa: glucagón un miligramo intramuscular o subcutáneo, y traslado.' },
        { cells: ['Por glibenclamida, ya despierto', 'Hospitalizar 24–48 h con SG 10%', 'Alta porque despertó'],
          say: 'Hipoglicemia por glibenclamida, ya despierto: hospitalizar veinticuatro a cuarenta y ocho horas con suero glucosado. El alta es la trampa.' },
        { cells: ['Insulina alta + péptido C indetectable', 'Insulina exógena (facticia)', 'Pensar en insulinoma'],
          say: 'Insulina alta con péptido C indetectable: insulina exógena, no insulinoma.' },
        { cells: ['Insulina + péptido C altos, screening negativo', 'Insulinoma', 'Olvidar buscar sulfonilureas'],
          say: 'Insulina y péptido C altos: antes de decir insulinoma, busca sulfonilureas en la orina. Solo si es negativo, es insulinoma.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 81 años, DM2 en tratamiento con glibenclamida 5 mg cada 12 horas, con enfermedad renal crónica. Su hija la encuentra somnolienta y sudorosa. En el SAPU: sopor, piel fría, hemoglucotest 38 mg/dL. Tras 40 ml de glucosa al 30% EV despierta lúcida a los 10 minutos, con hemoglucotest de 140 mg/dL, y pide volver a su casa.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Alta con colación y suspender la dosis de glibenclamida de la noche' },
        { letter: 'B', text: 'Observar 2 horas y dar de alta si el hemoglucotest es mayor de 100 mg/dL' },
        { letter: 'C', text: 'Hospitalizar 24 a 48 horas con suero glucosado al 10% y hemoglucotest seriados' },
        { letter: 'D', text: 'Administrar glucagón 1 mg IM y enviar a domicilio acompañada' },
        { letter: 'E', text: 'Alta con la regla de los 15 indicada a la familia' },
      ],
      correct: 'C',
      explanation: 'Hipoglicemia severa por glibenclamida en adulta mayor con falla renal: la vida media prolongada y los metabolitos activos hacen que la hipoglicemia recurra horas después. Aunque despierte, se hospitaliza 24–48 horas con suero glucosado al 10% y controles cada 1–2 horas.',
      say: {
        stem: 'Vamos con un caso. Mujer de ochenta y un años, diabética tipo dos con glibenclamida cinco miligramos cada doce horas y enfermedad renal crónica. Su hija la encuentra somnolienta y sudorosa. En el SAPU está soporosa, con piel fría y un hemoglucotest de treinta y ocho. Recibe cuarenta mililitros de glucosa al treinta por ciento, despierta lúcida a los diez minutos y pide irse a su casa.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: alta con colación y sin la dosis de la noche, observar dos horas y dar de alta, hospitalizar veinticuatro a cuarenta y ocho horas con suero glucosado, glucagón y a la casa, o alta enseñando la regla de los quince. Piénsalo.',
        answer: 'Es la C. Es una hipoglicemia por glibenclamida, en una adulta mayor con falla renal, donde los metabolitos activos se acumulan todavía más. El bolo la despertó, pero el fármaco sigue actuando. La B es la más tentadora porque parece prudente, pero dos horas no alcanzan: la hipoglicemia vuelve horas después. Todas las demás terminan en un alta, y esa es justamente la trampa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 72',
      stem: 'Un paciente de 78 años, diabético, en tratamiento con glibenclamida 15 mg/día, presenta convulsiones tónico-clónicas subintrantes desde hace algunos minutos. Hace 3 días se realizó control de exámenes, con glicemia de ayuno de 185 mg/dl y electrolitos plasmáticos dentro de rangos normales.',
      question: '¿Cuál es la causa más probable de sus convulsiones?',
      options: [
        { letter: 'A', text: 'Hipomagnesemia' },
        { letter: 'B', text: 'Hipernatremia' },
        { letter: 'C', text: 'Hipoglicemia' },
        { letter: 'D', text: 'Hipocalcemia' },
        { letter: 'E', text: 'Cetoacidosis' },
      ],
      correct: 'C',
      explanation: 'Adulto mayor con glibenclamida: la causa más común de hipoglicemia severa. Las convulsiones son un síntoma neuroglucopénico. Una glicemia alta hace 3 días no descarta que hoy esté baja; los electrolitos normales alejan las otras causas.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de agosto de dos mil veintiuno, que ya había salido casi igual en diciembre de dos mil diecinueve. Paciente de setenta y ocho años, diabético, con glibenclamida quince miligramos al día, que presenta convulsiones tónico clónicas subintrantes. Hace tres días tuvo una glicemia de ayuno de ciento ochenta y cinco, con electrolitos normales.',
        question: '¿Cuál es la causa más probable de sus convulsiones?',
        options: 'Las opciones: hipomagnesemia, hipernatremia, hipoglicemia, hipocalcemia o cetoacidosis. Piénsalo.',
        answer: 'Es la C, hipoglicemia. Adulto mayor con glibenclamida es el perfil clásico, y las convulsiones son neuroglucopenia. La trampa es la glicemia de ciento ochenta y cinco: te empuja a pensar en cetoacidosis, pero es de hace tres días, y no impide que hoy esté baja. Frente a cualquier compromiso neurológico en un diabético, lo primero es un hemoglucotest.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 40',
      stem: 'Un paciente de 67 años, diabético, tipo 2, en tratamiento con metformina 1700 mg/día y glibenclamida 20 mg/día, ambos separados en dos dosis diarias consulta por episodios repetidos de mareos, malestar y sudoración, asociado a temblor, que ocurren al final de la mañana o antes de almuerzo. Han coincidido con glicemias capilares de 65 mg/dl. Su IMC es 32 Kg/m2. Su hemoglobina A1c resulta 8,1.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Suspender la glibenclamida' },
        { letter: 'B', text: 'Agregar una colación con 25 gramos de hidrato de carbono antes del almuerzo' },
        { letter: 'C', text: 'Suspender la glibenclamida' },
        { letter: 'D', text: 'Reemplazar la glibenclamida por sitagliptina' },
        { letter: 'E', text: 'Reemplazar la metformina por pioglitazona' },
      ],
      correct: 'D',
      explanation: 'Síntomas autonómicos con glicemias de 65 mg/dL: hipoglicemias nivel 1 causadas por la glibenclamida. Con HbA1c 8,1% no basta suspenderla ni agregar una colación: se reemplaza por un fármaco que no produce hipoglicemias, como un inhibidor DPP-4.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Paciente de sesenta y siete años, diabético tipo dos, con metformina y glibenclamida veinte miligramos al día, que consulta por mareos, sudoración y temblor al final de la mañana, con glicemias capilares de sesenta y cinco. Es obeso y su hemoglobina glicosilada es ocho coma uno.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: suspender la glibenclamida, que aparece dos veces, agregar una colación antes del almuerzo, reemplazar la glibenclamida por sitagliptina, o reemplazar la metformina por pioglitazona. Piénsalo.',
        answer: 'Es la D. Sudoración y temblor con sesenta y cinco son síntomas autonómicos de hipoglicemia, y la culpable es la glibenclamida. Pero ojo con suspenderla sin más: la glicosilada de ocho coma uno dice que el paciente está mal controlado. La colación también cae, porque subiría más la glicemia. Lo correcto es cambiarla por un fármaco sin hipoglicemias, como la sitagliptina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Una mujer de 32 años, enfermera de profesión, sin antecedentes médicos conocidos, es traída a urgencias por haber presentado 4 episodios de confusión mental, visión borrosa y sudoración profusa en el último mes. Durante uno de los episodios en el hospital, se constata una glicemia venosa de 38 mg/dL. Los exámenes de laboratorio tomados durante la hipoglicemia revelan: insulina plasmática marcadamente elevada, péptido C indetectable y screening negativo para sulfonilureas en orina.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Insulinoma maligno diseminado' },
        { letter: 'B', text: 'Síndrome de dumping tardío posprandial' },
        { letter: 'C', text: 'Administración subrepticia de insulina exógena (hipoglicemia facticia)' },
        { letter: 'D', text: 'Ingesta accidental o encubierta de glibenclamida' },
        { letter: 'E', text: 'Insuficiencia suprarrenal primaria autoinmune (Enfermedad de Addison)' },
      ],
      correct: 'C',
      explanation: 'La insulina endógena se libera junto con el péptido C. Insulina muy alta con péptido C indetectable demuestra insulina exógena: hipoglicemia facticia. En el insulinoma y con sulfonilureas, el péptido C está elevado.',
      say: {
        stem: 'Ahora una pregunta del banco EUNACOM. Mujer de treinta y dos años, enfermera, sin antecedentes, con cuatro episodios en un mes de confusión, visión borrosa y sudoración. En uno de ellos, en el hospital, tiene una glicemia de treinta y ocho. En esa muestra: insulina muy elevada, péptido C indetectable, y screening de sulfonilureas negativo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: insulinoma, dumping tardío, administración subrepticia de insulina, ingesta encubierta de glibenclamida, o enfermedad de Addison. Piénsalo.',
        answer: 'Es la C. Aplica la lógica del péptido C: la insulina que fabrica el páncreas viene con péptido C; la de una jeringa, no. Insulina alta con péptido C indetectable es insulina inyectada. El insulinoma es el distractor, pero tendría el péptido C alto, igual que la glibenclamida, que además daría el screening positivo. Y fíjate en la profesión: el enunciado te deja la pista del acceso a insulina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente de 22 años con DM1 presenta temblor, palpitaciones, diaforesis y una glicemia capilar de 58 mg/dL. Se encuentra lúcido, colaborativo y con capacidad para deglutir normalmente.',
      question: '¿Cuál es el manejo inicial recomendado según la evidencia y guías clínicas?',
      options: [
        { letter: 'A', text: 'Administrar 1 mg de glucagón intramuscular de inmediato' },
        { letter: 'B', text: 'Indicar la ingesta de 15 gramos de hidratos de carbono simples por vía oral y reevaluar la glicemia en 15 minutos' },
        { letter: 'C', text: 'Canalizar una vía venosa periférica e infundir 2 ampollas de glucosa al 30% en bolo' },
        { letter: 'D', text: 'Indicar el consumo de un sándwich con mantequilla y carne para retardar la absorción' },
        { letter: 'E', text: 'Indicar reposo absoluto y esperar 1 hora para una nueva medición sin ingerir alimentos' },
      ],
      correct: 'B',
      explanation: 'Paciente consciente con vía oral segura: regla de los 15. Quince gramos de carbohidratos simples por boca, esperar 15 minutos y repetir la glicemia hasta superar 70 mg/dL. El glucagón y la glucosa EV se reservan para el paciente inconsciente.',
      say: {
        stem: 'Una más del banco. Paciente de veintidós años, diabético tipo uno, con temblor, palpitaciones, sudoración y una glicemia capilar de cincuenta y ocho. Está lúcido, colabora y traga sin problemas.',
        question: '¿Cuál es el manejo inicial recomendado?',
        options: 'Las opciones: glucagón intramuscular, quince gramos de azúcar simple por boca y control a los quince minutos, glucosa endovenosa, un sándwich con mantequilla y carne, o reposo y control en una hora. Piénsalo.',
        answer: 'Es la B, la regla de los quince. La pregunta clave es la conciencia, y aquí el enunciado te dice que está lúcido y traga bien. El glucagón y la glucosa endovenosa son para el paciente inconsciente: aquí serían exagerados. Y el sándwich es la trampa: la grasa retarda la absorción justo cuando necesitas que el azúcar llegue rápido.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Reconocer', tag: 'Whipple', kind: 'key', items: [
          { t: 'Síntomas + glicemia baja + alivio', d: 'Nivel 3 se define por la clínica',
            say: 'Cerremos con las reglas de oro. La hipoglicemia se confirma con la tríada de Whipple: síntomas, glicemia baja documentada y alivio al dar glucosa. Y el nivel tres se define por la clínica, no por un número.' },
          { t: 'Propranolol oculta la alarma', d: 'Menos la sudoración',
            say: 'El propranolol oculta la taquicardia y el temblor, pero no la sudoración.' },
        ] },
        { title: 'Rescatar', tag: 'Según conciencia', kind: 'pharma', items: [
          { t: 'Consciente: regla de los 15', d: '15 g, 15 minutos, repetir',
            say: 'Consciente: regla de los quince.' },
          { t: 'Inconsciente: glucosa 30% EV', d: 'Sin vía: glucagón 1 mg IM',
            say: 'Inconsciente: nada por boca; glucosa al treinta por ciento endovenosa, o glucagón intramuscular si no hay vía.' },
        ] },
        { title: 'No dar de alta', tag: 'Regla absoluta', kind: 'alert', items: [
          { t: 'Glibenclamida: hospitalizar 24–48 h', d: 'Con suero glucosado al 10%',
            say: 'La hipoglicemia por glibenclamida se hospitaliza veinticuatro a cuarenta y ocho horas, aunque el paciente haya despertado.' },
          { t: 'Péptido C indetectable', d: 'Insulina exógena, no insulinoma',
            say: 'Y en el no diabético, insulina alta con péptido C indetectable es insulina inyectada. Si te llevas una sola idea de hoy: el bolo de glucosa despierta al paciente, pero no elimina la glibenclamida. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hipoglicemia: rescate y destino',
    root: N('start', 'Síntomas + glicemia < 70 mg/dL', 'Paciente con sospecha de hipoglicemia',
      'Paciente con síntomas y un hemoglucotest bajo setenta. Primero se rescata según la conciencia, y después se decide el destino según el fármaco que la causó.',
      ['', N('q', '¿Consciente y traga bien?', 'Vía oral segura',
        '¿Está consciente y puede tragar sin riesgo? Eso define el rescate.',
        ['SÍ', N('ok', 'Regla de los 15', '15 g VO · control a los 15 min',
          'Si está consciente, quince gramos de azúcar simple por boca, control a los quince minutos, repetir si sigue bajo setenta, y luego una colación con carbohidratos complejos.')],
        ['NO, con vía', N('do', 'Glucosa 30% EV + SG 10%', '20–50 ml en bolo · nada por boca',
          'Si está inconsciente, nada por boca. Con vía venosa, glucosa al treinta por ciento en bolo, veinte a cincuenta mililitros, y luego suero glucosado al diez por ciento en infusión.',
          ['Si fue por sulfonilurea', N('alert', 'Hospitalizar 24–48 h', 'SG 10% + HGT cada 1–2 h',
            'Una vez que despierta, la pregunta es qué la causó. Si fue por glibenclamida, se hospitaliza veinticuatro a cuarenta y ocho horas con suero glucosado al diez por ciento, aunque esté lúcido. Si fue por insulina y vuelve a comer bien, puede irse de alta.')])],
        ['NO, sin vía', N('refer', 'Glucagón 1 mg IM o SC', 'Canalizar y trasladar',
          'Si está inconsciente y no hay vía venosa, por ejemplo en su casa, glucagón un miligramo intramuscular o subcutáneo, y traslado a urgencia. Recuerda que no sirve si no hay glucógeno.')])]),
  },
};
