// Clase 20.7 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-07).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-07',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuatro pilares para estudiar a la pareja, y una regla para elegir la técnica',
      say: 'Bienvenida. Hoy vemos infertilidad conyugal: cómo estudias a la pareja con cuatro pilares ordenados, y cómo eliges entre inseminación intrauterina y fertilización in vitro. Acuérdate siempre de algo antes de empezar: la infertilidad se estudia como pareja, nunca como si el problema fuera solo de ella.',
    },

    {
      type: 'points',
      kicker: 'Definiciones',
      title: '¿Cuándo empiezas a estudiar?',
      cards: [
        { title: 'Plazo para estudiar', tag: 'Depende de la edad', kind: 'key', items: [
          { t: 'Menor de treinta y cinco', d: 'Doce meses buscando sin lograrlo',
            say: 'Empecemos por el plazo. En la mujer menor de treinta y cinco años, estudias tras doce meses de búsqueda sin resultado.' },
          { t: 'Treinta y cinco años o más', d: 'Solo seis meses de espera',
            say: 'Pero si tiene treinta y cinco años o más, no esperas doce meses: adelantas el estudio a los seis, porque la reserva ovárica cae rápido a esa edad.' },
        ] },
        { title: 'Quién falla más', tag: 'Se reparte entre los dos', kind: 'normal', items: [
          { t: 'Masculino: el más frecuente', d: 'Alrededor de un tercio de los casos',
            say: 'Y la causa se reparte casi por igual entre los dos. El factor masculino es el más frecuente, cerca de un tercio de los casos.' },
          { t: 'Tuboperitoneal y ovulatorio', d: 'El resto, salvo lo idiopático',
            say: 'Después viene el factor tuboperitoneal, el ovulatorio, y una parte sin causa identificable, aunque el estudio esté completo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio básico',
      title: 'Pilar uno y dos: él, y la ovulación de ella',
      cards: [
        { title: 'Espermiograma', tag: 'El primer examen, siempre', kind: 'key', items: [
          { t: 'Tres a cinco días de abstinencia', d: 'Ni menos, ni mucho más',
            say: 'El primer examen en toda pareja infértil es el espermiograma, y se pide con tres a cinco días de abstinencia sexual previa: ni menos, porque baja el volumen, ni mucho más, porque baja la movilidad.' },
          { t: 'Si sale alterado, se repite', d: 'A las cuatro a doce semanas',
            say: 'Si sale alterado, nunca etiquetes al paciente con una sola muestra: se repite entre cuatro y doce semanas después, para confirmarlo.' },
        ] },
        { title: 'Factor ovulatorio', tag: 'Reserva y confirmación', kind: 'normal', items: [
          { t: 'Progesterona en el día veintiuno', d: 'Confirma que sí ovuló',
            say: 'Para confirmar que ella ovula, pides progesterona en el día veintiuno del ciclo: si sale alta, hubo ovulación.' },
          { t: 'Hormona antimülleriana', d: 'El marcador de reserva ovárica',
            say: 'Y para medir cuántos óvulos le quedan, pides la hormona antimülleriana, que puedes medir cualquier día del ciclo, porque no cambia con la regla.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio básico',
      title: 'Pilar tres y cuatro: las trompas, y el útero',
      cards: [
        { title: 'Histerosalpingografía', tag: 'Estudia las trompas', kind: 'key', items: [
          { t: 'Contraste por el cuello uterino', d: 'Se ve si pasa a la cavidad peritoneal',
            say: 'Para las trompas, la histerosalpingografía: inyectas contraste por el cuello uterino y ves si pasa libremente a la cavidad peritoneal.' },
          { t: 'Prueba de Cotte positiva', d: 'Confirma que la trompa es permeable',
            say: 'Si el contraste se dispersa por ambos lados, la prueba de Cotte sale positiva, y eso confirma que las trompas están permeables.' },
        ] },
        { title: 'Factor uterino', tag: 'La cavidad donde se implanta', kind: 'normal', items: [
          { t: 'Ecografía transvaginal', d: 'Busca miomas, pólipos o adenomiosis',
            say: 'Y para el útero, la ecografía transvaginal, buscando miomas submucosos, pólipos o adenomiosis que compliquen la implantación.' },
          { t: 'Histeroscopía si hay dudas', d: 'Cuando la histerosalpingografía muestra defectos',
            say: 'Si la histerosalpingografía muestra algún defecto de llene dentro de la cavidad, confirmas con histeroscopía directa.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Reproducción asistida',
      title: '¿Inseminación, o fertilización in vitro?',
      nodes: [
        { id: 'est', col: 0, row: 1, k: 'start', t: 'Estudio básico completo', s: 'Cuatro pilares evaluados' },
        { id: 'trp', col: 1, row: 0, k: 'q', t: '¿Al menos una trompa permeable?', s: 'Y espermatozoides suficientes' },
        { id: 'iiu', col: 2, row: 0, k: 'good', t: 'Inseminación intrauterina', s: 'De baja complejidad' },
        { id: 'obs', col: 1, row: 2, k: 'risk', t: 'Obstrucción bilateral o factor severo', s: 'Sin trompa útil o REM bajo' },
        { id: 'fiv', col: 2, row: 2, k: 'alert', t: 'Fertilización in vitro o ICSI', s: 'De alta complejidad' },
      ],
      edges: [
        { from: 'est', to: 'trp' }, { from: 'trp', to: 'iiu', label: 'sí' },
        { from: 'est', to: 'obs' }, { from: 'obs', to: 'fiv' },
      ],
      steps: [
        { show: ['est'], note: 'La técnica depende de lo que encontraste',
          say: 'Con el estudio básico completo, toca elegir la técnica de reproducción asistida. Y esa elección depende de dos preguntas muy concretas.' },
        { show: ['trp'], note: 'Necesitas ambas condiciones',
          say: 'La primera: ¿hay al menos una trompa permeable? Y la segunda: ¿el semen capacitado tiene tres millones o más de espermatozoides móviles?' },
        { show: ['iiu'], note: 'De bajo costo, ambulatoria',
          say: 'Si ambas se cumplen, vas a la inseminación intrauterina: es de baja complejidad, ambulatoria, y bastante más económica.' },
        { show: ['obs'], note: 'Aquí la inseminación no tiene ningún sentido',
          say: 'Pero si las trompas están obstruidas de los dos lados, o el factor masculino es severo, la inseminación no tiene ninguna posibilidad de funcionar.' },
        { show: ['fiv'], note: 'Salta el problema por completo',
          say: 'Ahí vas directo a fertilización in vitro, o a inyección intracitoplasmática de un solo espermatozoide si el factor masculino es muy severo. La ventaja de estas técnicas es que saltan por completo el problema de la trompa: el óvulo se une al espermatozoide en el laboratorio.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Indicaciones',
      title: '¿A quién más le indicas cada técnica?',
      cards: [
        { title: 'Inseminación intrauterina', tag: 'Casos leves', kind: 'normal', items: [
          { t: 'Factor masculino leve', d: 'O anovulación que no responde a fármacos orales',
            say: 'Fuera de lo tuboperitoneal, también indicas inseminación en el factor masculino leve, o en la anovulación que ya no responde a los inductores orales.' },
        ] },
        { title: 'Fertilización in vitro', tag: 'Casos más complejos', kind: 'alert', items: [
          { t: 'Edad materna sobre treinta y ocho', d: 'O reserva ovárica muy baja',
            say: 'Y también vas directo a fertilización in vitro con edad materna sobre los treinta y ocho años, con endometriosis severa, o después de repetidos intentos fallidos de inseminación.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde en el examen',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Primera consulta de la pareja', 'Espermiograma para él', 'Empezar solo con exámenes de ella'],
          say: 'Repasemos las trampas. En la primera consulta, el primer examen es el espermiograma. El error es partir solo con exámenes de ella.' },
        { cells: ['Espermiograma alterado', 'Repetirlo en uno a tres meses', 'Diagnosticar infertilidad masculina de inmediato'],
          say: 'Si el espermiograma sale alterado, se repite antes de etiquetar. El error es diagnosticar infertilidad masculina con una sola muestra.' },
        { cells: ['Obstrucción tubárica bilateral', 'Fertilización in vitro', 'Intentar inseminación intrauterina'],
          say: 'Con obstrucción tubárica bilateral, la respuesta es fertilización in vitro. El error clásico es intentar la inseminación, que tiene cero probabilidad de éxito.' },
        { cells: ['Mujer de treinta y cinco años o más', 'Estudiar a los seis meses', 'Esperar los doce meses habituales'],
          say: 'Y con treinta y cinco años o más, adelantas el estudio a los seis meses. El error es hacerla esperar los doce meses habituales.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Pareja de 31 y 33 años consulta por no lograr embarazo tras 18 meses. Ella tiene ciclos regulares y progesterona en día 21 ovulatoria. La histerosalpingografía muestra cavidad uterina normal, pero ausencia completa de paso de contraste por ambas trompas, con hidrosálpinx bilateral y prueba de Cotte negativa. El espermiograma de él es normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Inseminación intrauterina con semen del cónyuge' },
        { letter: 'B', text: 'Inducción de ovulación con citrato de clomifeno' },
        { letter: 'C', text: 'Fertilización in vitro' },
        { letter: 'D', text: 'Repetir la histerosalpingografía en 3 meses' },
        { letter: 'E', text: 'Antibioticoterapia prolongada con doxiciclina' },
      ],
      correct: 'C',
      explanation: 'La obstrucción tubárica bilateral confirmada con Cotte negativa hace imposible el encuentro entre óvulo y espermatozoide, aunque el semen y la ovulación sean normales. La inseminación está contraindicada; la conducta es derivar a fertilización in vitro.',
      say: {
        stem: 'Vamos al caso. Pareja de treinta y un y treinta y tres años consulta porque no logra embarazo tras dieciocho meses. Ella tiene ciclos regulares y su progesterona del día veintiuno confirma que ovula. La histerosalpingografía muestra la cavidad uterina normal, pero el contraste no pasa por ninguna de las dos trompas, con hidrosálpinx bilateral y prueba de Cotte negativa. El espermiograma de él es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: inseminación intrauterina, inducción de ovulación con clomifeno, fertilización in vitro, repetir la histerosalpingografía, o antibióticos prolongados. Piénsalo.',
        answer: 'Es la C. Fíjate que todo lo demás está normal: ovula bien, y el semen de él es normal. El problema es puramente mecánico: las dos trompas están cerradas, así que el óvulo y el espermatozoide nunca se van a encontrar. Ahí la inseminación no sirve de nada, porque necesita al menos una trompa abierta. La fertilización in vitro salta ese obstáculo por completo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 75',
      stem: 'Hombre de 33 años, lleva 18 meses intentando concebir un hijo con su pareja. Ella tiene reglas regulares. Él tiene examen físico y genital normal.',
      question: '¿Con qué examen debemos iniciar el estudio en este paciente?',
      options: [
        { letter: 'A', text: 'Hormona luteinizante' },
        { letter: 'B', text: 'Hormona folículo estimulante' },
        { letter: 'C', text: 'Espermiograma' },
        { letter: 'D', text: 'Cultivo de líquido seminal' },
        { letter: 'E', text: 'Ecografía testicular' },
      ],
      correct: 'C',
      explanation: 'El primer examen del estudio de infertilidad masculina es siempre el espermiograma, sin importar que el examen físico sea normal. Las hormonas o la imagen se piden solo si el espermiograma resulta alterado.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Hombre de treinta y tres años, lleva dieciocho meses intentando tener un hijo con su pareja. Ella tiene reglas regulares, y él tiene el examen físico y genital normal.',
        question: '¿Con qué examen debemos iniciar el estudio en este paciente?',
        options: 'Las opciones: hormona luteinizante, hormona folículo estimulante, espermiograma, cultivo de líquido seminal, o ecografía testicular. Piénsalo.',
        answer: 'La respuesta es la C, espermiograma. Aunque el examen físico sea normal, el primer paso en el hombre siempre es el espermiograma. Las hormonas y la ecografía testicular quedan para después, solo si el espermiograma sale alterado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 146',
      stem: 'Mujer de 38 años consulta porque lleva 2 años intentando embarazarse. Sus reglas son regulares, su examen físico es normal y múltiples exámenes hormonales confirman ciclos ovulatorios. Su pareja tiene un espermiograma normal.',
      question: '¿Cuál es la conducta más adecuada para proseguir el estudio?',
      options: [
        { letter: 'A', text: 'Histeroscopía' },
        { letter: 'B', text: 'Laparoscopía' },
        { letter: 'C', text: 'Histerosalpingografía' },
        { letter: 'D', text: 'Niveles plasmáticos de hormona antimülleriana' },
        { letter: 'E', text: 'Seguimiento folicular ecográfico' },
      ],
      correct: 'C',
      explanation: 'Con la ovulación confirmada y el espermiograma normal, quedan descartados el factor ovulatorio y el masculino. El siguiente pilar a estudiar es el tuboperitoneal, y el examen de elección es la histerosalpingografía.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de agosto de dos mil veintiuno. Mujer de treinta y ocho años, lleva dos años buscando embarazo. Sus reglas son regulares, y varios exámenes hormonales ya confirmaron que ovula. Su pareja tiene un espermiograma normal.',
        question: '¿Cuál es la conducta más adecuada para proseguir el estudio?',
        options: 'Las opciones: histeroscopía, laparoscopía, histerosalpingografía, hormona antimülleriana, o seguimiento folicular. Piénsalo.',
        answer: 'Es la C. Ya tienes dos de los cuatro pilares resueltos: ovula, y el semen de él es normal. Lo que sigue en el orden del estudio es el factor tuboperitoneal, y ahí el examen es la histerosalpingografía. La laparoscopía queda para el final, solo si todo lo anterior sale normal y sigues sin causa.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Estudio', tag: 'Siempre en pareja', kind: 'key', items: [
          { t: 'Primero, el espermiograma', d: 'Antes que cualquier examen de ella',
            say: 'Cerremos. El primer examen de toda pareja infértil es el espermiograma.' },
          { t: '35 años: adelanta a 6 meses', d: 'No esperes los doce meses',
            say: 'Y con treinta y cinco años o más, no esperes los doce meses: estudia a los seis.' },
        ] },
        { title: 'Técnica', tag: 'Depende de dos condiciones', kind: 'pharma', items: [
          { t: 'Trompa permeable y REM adecuado', d: 'Inseminación intrauterina',
            say: 'Con al menos una trompa permeable y espermatozoides suficientes, inseminación intrauterina.' },
          { t: 'Obstrucción bilateral o factor severo', d: 'Fertilización in vitro',
            say: 'Con obstrucción bilateral o un factor masculino severo, fertilización in vitro.' },
        ] },
        { title: 'Última idea', tag: 'Para el examen', kind: 'alert', items: [
          { t: 'Sin trompa, la inseminación falla siempre', d: 'Aunque todo lo demás esté normal',
            say: 'Si te llevas una sola idea de hoy: sin al menos una trompa permeable, la inseminación intrauterina no funciona, por muy normal que esté todo lo demás. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Infertilidad conyugal: los cuatro pilares y la técnica',
    root: N('start', 'Pareja sin embarazo', 'Doce meses, o seis si ella tiene treinta y cinco o más',
      'Partamos de la pareja que consulta por infertilidad. Primero confirma el plazo: doce meses, o seis si ella tiene treinta y cinco años o más.',
      ['', N('q', '¿Qué pilar estudias primero?', 'Siempre en este orden',
        'El orden del estudio no es al azar: primero él, luego la ovulación, luego las trompas y el útero.',
        ['Factor masculino', N('do', 'Espermiograma con tres a cinco días de abstinencia', 'Si sale alterado, se repite',
          'Primero, el espermiograma, con tres a cinco días de abstinencia. Si sale alterado, se repite antes de concluir nada.')],
        ['Factor ovulatorio', N('do', 'Progesterona en el día veintiuno más hormona antimülleriana', 'Confirma ovulación y reserva',
          'Después, la progesterona del día veintiuno para confirmar ovulación, y la hormona antimülleriana para ver la reserva.')],
        ['Factor tuboperitoneal y uterino', N('q', '¿La prueba de Cotte es positiva?', 'Define si la trompa sirve',
          'Y con la histerosalpingografía evalúas las trompas: ¿la prueba de Cotte sale positiva?',
          ['Sí, al menos una trompa', N('q', '¿El REM post capacitación es de tres millones o más?', 'Segunda condición para inseminar',
            'Con al menos una trompa permeable, falta la segunda condición: ¿el semen capacitado tiene tres millones o más de espermatozoides móviles?',
            ['Sí', N('ok', 'Inseminación intrauterina', 'Técnica de baja complejidad',
              'Si ambas condiciones se cumplen, inseminación intrauterina: baja complejidad y menor costo.')],
            ['No, factor masculino severo', N('alert', 'Fertilización in vitro o ICSI', 'La inseminación no alcanza',
              'Si el factor masculino es severo, la inseminación no alcanza: vas directo a fertilización in vitro o ICSI.')])],
          ['No, obstrucción bilateral', N('alert', 'Fertilización in vitro', 'La inseminación aquí no tiene ningún sentido',
            'Si las dos trompas están obstruidas, la inseminación no tiene ningún sentido: la conducta es fertilización in vitro, que salta el problema tubárico.')])])]),
  },
};
