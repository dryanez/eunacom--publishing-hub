// Clase 20.16 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-16, bloque 4).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-16',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Dolor pélvico agudo: cuándo es pabellón ya y cuándo puedes esperar',
      say: 'Bienvenido a la clase de hoy. Vamos a ver las dos urgencias ginecológicas quirúrgicas más preguntadas: la torsión anexial y el quiste ovárico hemorrágico roto. Vas a aprender a distinguirlas con la clínica y la ecografía, y sobre todo, vas a entender por qué una siempre va a pabellón y la otra casi nunca. Empecemos por la que no puede esperar.',
    },

    {
      type: 'flow',
      kicker: 'Torsión anexial',
      title: '¿Por qué es una emergencia?',
      nodes: [
        { id: 'quiste', col: 0, row: 1, k: 'cause', t: 'Quiste de 5 a 10 cm', s: 'Sobre todo un teratoma' },
        { id: 'rot', col: 1, row: 1, k: 'mech', t: 'Rotación del pedículo', s: 'Sobre el ligamento infundíbulo-pélvico' },
        { id: 'ven', col: 2, row: 0, k: 'effect', t: 'Se ocluye la vena', s: 'Congestión y edema del ovario' },
        { id: 'art', col: 3, row: 1, k: 'risk', t: 'Se ocluye la arteria', s: 'Isquemia y necrosis' },
        { id: 'horas', col: 4, row: 1, k: 'alert', t: 'Horas para actuar', s: 'La demora pierde el ovario' },
      ],
      edges: [
        { from: 'quiste', to: 'rot' }, { from: 'rot', to: 'ven' }, { from: 'ven', to: 'art', label: 'si sigue' }, { from: 'art', to: 'horas' },
      ],
      steps: [
        { show: ['quiste'], note: 'El factor de riesgo que más se pregunta',
          say: 'La torsión anexial casi siempre tiene el mismo gatillante: un quiste de ovario de cinco a diez centímetros, y el que más se tuerce es el teratoma quístico maduro, por su contenido graso que flota.' },
        { show: ['rot'], note: 'El ovario gira sobre su propio eje vascular',
          say: 'Ese quiste hace que el ovario gire sobre su pedículo, el ligamento infundíbulo-pélvico, que es justo por donde pasan la arteria y la vena ováricas.' },
        { show: ['ven'], note: 'Primero se tapa lo de baja presión',
          say: 'Como la vena tiene menos presión, se ocluye primero. Eso genera una congestión pasiva enorme: el ovario se llena de líquido y se edematiza.' },
        { show: ['art'], note: 'Ahí ya no hay vuelta atrás',
          say: 'Si la torsión sigue, se ocluye también la arteria, y ahí empieza la isquemia real, que termina en necrosis si nadie interviene.' },
        { show: ['horas'], note: 'Por eso es una emergencia de verdad',
          say: 'Y todo esto ocurre en horas, no en días. Pasadas veinticuatro a treinta y seis horas, el ovario ya está perdido. Por eso es una emergencia quirúrgica de verdad.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Torsión anexial',
      title: 'Cómo se presenta y cómo se confirma',
      cards: [
        { title: 'Clínica clásica', tag: 'La tríada que se pregunta', kind: 'alert', items: [
          { t: 'Dolor unilateral hiperagudo', d: 'Súbito, lancinante, con paroxismos',
            say: 'La paciente llega con un dolor unilateral hiperagudo, súbito, que a veces cede y vuelve, porque el ovario se tuerce y se destuerce parcialmente.' },
          { t: 'Vómitos profusos', d: 'En más de 80 de cada 100 casos',
            say: 'Y casi siempre con vómitos profusos, en más de ochenta de cada cien casos. Es un reflejo vagal por la isquemia, y es un dato que se pregunta mucho.' },
        ] },
        { title: 'Ecografía Doppler', tag: 'Lo que confirma la sospecha', kind: 'criteria', items: [
          { t: 'Ovario aumentado y edematoso', d: 'Con folículos desplazados a la periferia',
            say: 'La ecografía muestra un ovario mucho más grande de lo normal, edematoso, con los folículos empujados hacia el borde.' },
          { t: 'Signo del remolino', d: 'Y flujo Doppler ausente o disminuido',
            say: 'En el pedículo se ve el signo del remolino, y el Doppler muestra el flujo ausente o disminuido. Pero ojo con esto: si hay flujo arterial presente, eso no descarta la torsión, porque el útero también irriga al ovario por otra vía. Si la clínica es sospechosa, se opera igual.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Detorsión conservadora: el cambio de paradigma',
      nodes: [
        { id: 'sospecha', col: 0, row: 1, k: 'start', t: 'Torsión sospechada', s: 'Clínica y ecografía' },
        { id: 'lap', col: 1, row: 1, k: 'mech', t: 'Laparoscopía de urgencia', s: 'Sin demora' },
        { id: 'detor', col: 2, row: 1, k: 'good', t: 'Detorsión conservadora', s: 'Desenrollar el pedículo' },
        { id: 'negro', col: 3, row: 0, k: 'trap', t: 'Ovario violáceo', s: 'Igual se conserva' },
        { id: 'ooforec', col: 3, row: 2, k: 'refer', t: 'Ooforectomía', s: 'Solo si hay necrosis gangrenosa' },
      ],
      edges: [
        { from: 'sospecha', to: 'lap' }, { from: 'lap', to: 'detor' }, { from: 'detor', to: 'negro' }, { from: 'detor', to: 'ooforec', label: 'excepción' },
      ],
      steps: [
        { show: ['sospecha', 'lap'], note: 'No se espera a confirmar todo',
          say: 'Con la sospecha clínica y ecográfica, el tratamiento es laparoscopía de urgencia, sin demora.' },
        { show: ['detor'], note: 'Ya no se saca el ovario de entrada',
          say: 'Y la conducta de elección hoy es la detorsión conservadora: se desenrolla el pedículo, y se evalúa si el ovario recupera su color y su perfusión.' },
        { show: ['negro'], note: 'La regla que más se pregunta',
          say: 'Aquí está la idea que más se pregunta: aunque el ovario se vea negruzco o violáceo, igual se conserva. En más de noventa de cada cien casos, recupera su función con el tiempo. Sacarlo de entrada, sin intentar destorcerlo, es una práctica obsoleta.' },
        { show: ['ooforec'], note: 'Solo la excepción real',
          say: 'La ooforectomía queda solo para la necrosis gangrenosa ya establecida, o para la mujer postmenopáusica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Quiste hemorrágico',
      title: 'El otro diagnóstico: roto, no torcido',
      cards: [
        { title: 'Clínica y gatillante', tag: 'Fase lútea tardía', kind: 'criteria', items: [
          { t: 'Dolor postcoital', d: 'Días 20 a 26 del ciclo',
            say: 'El otro gran diagnóstico diferencial es el quiste ovárico hemorrágico roto. El gatillante clásico es la relación sexual, en la fase lútea tardía, entre los días veinte y veintiséis del ciclo.' },
          { t: 'Sin vómitos, cede lento', d: 'A diferencia de la torsión',
            say: 'Y a diferencia de la torsión, casi nunca da vómitos, y el dolor cede lento, no en paroxismos.' },
        ] },
        { title: 'Ecografía', tag: 'Imagen muy característica', kind: 'key', items: [
          { t: 'Patrón en red de pesca', d: 'Ecos reticulares por la fibrina',
            say: 'La ecografía muestra un patrón reticular, en tela de araña o red de pesca, que son hebras de fibrina dentro del quiste.' },
          { t: 'Líquido libre en Douglas', d: 'Sin flujo Doppler dentro del coágulo',
            say: 'Y hay líquido libre hemático en el fondo de saco de Douglas, con el coágulo retráctil, sin flujo Doppler adentro.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Quiste hemorrágico',
      title: 'Casi siempre se resuelve sin cirugía',
      nodes: [
        { id: 'roto', col: 0, row: 1, k: 'start', t: 'Quiste hemorrágico roto', s: 'Confirmado por ecografía' },
        { id: 'estable', col: 1, row: 0, k: 'good', t: 'Estable', s: 'La inmensa mayoría' },
        { id: 'medico', col: 2, row: 0, k: 'good', t: 'Manejo médico', s: 'Reposo, analgesia, observación' },
        { id: 'inestable', col: 1, row: 2, k: 'risk', t: 'Inestable', s: 'Hematocrito cae, o hay shock' },
        { id: 'lapqx', col: 2, row: 2, k: 'alert', t: 'Laparoscopía hemostática', s: 'Solo en este escenario' },
      ],
      edges: [
        { from: 'roto', to: 'estable' }, { from: 'estable', to: 'medico' }, { from: 'roto', to: 'inestable' }, { from: 'inestable', to: 'lapqx' },
      ],
      steps: [
        { show: ['roto', 'estable'], note: 'El escenario más frecuente, por lejos',
          say: 'Con el quiste hemorrágico confirmado, lo primero es ver cómo está la paciente. La inmensa mayoría está estable.' },
        { show: ['medico'], note: 'Se reabsorbe solo',
          say: 'Ahí el manejo es médico: observación por veinticuatro horas, reposo, analgesia, y control seriado del hematocrito. El sangrado casi siempre se autolimita.' },
        { show: ['inestable'], note: 'La minoría que sí opera',
          say: 'Solo si el hematocrito sigue cayendo, o la paciente entra en shock, cambia la conducta.' },
        { show: ['lapqx'], note: 'Para coagular o para hacer cistectomía',
          say: 'Ahí sí, laparoscopía de urgencia, para aspirar el hemoperitoneo y coagular el lecho ovárico. Fíjate en el contraste con la torsión: ahí la cirugía es casi siempre, y aquí es la excepción.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos las dos urgencias, una al lado de la otra, en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Torsión anexial vs quiste hemorrágico roto',
      head: ['Parámetro', 'Torsión anexial', 'Quiste hemorrágico roto'],
      rows: [
        { cells: ['Vómitos', 'Profusos, en más de 80 de cada 100', 'Casi nunca'],
          say: 'Repasemos las trampas comparando las dos. Los vómitos profusos son de la torsión, no del quiste hemorrágico.' },
        { cells: ['Gatillante', 'Idiopático o quiste preexistente', 'Relación sexual, fase lútea tardía'],
          say: 'El gatillante también difiere: la torsión suele ser idiopática, sobre un quiste ya presente; el quiste hemorrágico se dispara con la relación sexual.' },
        { cells: ['Doppler', 'Ausente o disminuido en el ovario', 'Ausente solo dentro del coágulo'],
          say: 'En el Doppler, la torsión compromete todo el ovario; el quiste hemorrágico solo no tiene flujo dentro del coágulo mismo.' },
        { cells: ['Ovario violáceo en cirugía', 'Se conserva igual', 'No aplica'],
          say: 'Y si en la cirugía el ovario se ve violáceo por la torsión, se conserva igual: sacarlo de entrada es la trampa más clásica de todo el tema.' },
        { cells: ['Conducta habitual', 'Laparoscopía de urgencia siempre', 'Manejo médico si está estable'],
          say: 'La conducta habitual es opuesta: la torsión es cirugía siempre; el quiste hemorrágico es manejo médico, salvo que la paciente se desestabilice.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 26 años, nulípara, consulta por dolor súbito en fosa ilíaca izquierda de 3 horas, intensidad 9/10, con 3 episodios de vómitos. Test de embarazo negativo. La ecografía Doppler muestra un ovario izquierdo de 8 cm, edematoso, con un quiste de 6 cm compatible con teratoma, y ausencia de flujo venoso.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Analgesia endovenosa y alta con control ambulatorio' },
        { letter: 'B', text: 'Laparoscopía de urgencia para detorsión ovárica conservadora' },
        { letter: 'C', text: 'Ooforectomía izquierda abierta, sin intentar destorcer' },
        { letter: 'D', text: 'Antibióticos endovenosos por sospecha de proceso inflamatorio pélvico' },
        { letter: 'E', text: 'Punción ecoguiada del quiste para aliviar el dolor' },
      ],
      correct: 'B',
      explanation: 'Dolor unilateral hiperagudo con vómitos profusos, un quiste de riesgo y ausencia de flujo venoso en la ecografía Doppler: es una torsión anexial. La conducta es laparoscopía de urgencia con detorsión ovárica conservadora, preservando el órgano aunque se vea comprometido.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintiséis años, nulípara, con dolor súbito en la fosa ilíaca izquierda de tres horas, de intensidad nueve sobre diez, con tres episodios de vómitos. El test de embarazo es negativo. La ecografía Doppler muestra un ovario izquierdo de ocho centímetros, edematoso, con un quiste de seis centímetros compatible con teratoma, y ausencia de flujo venoso.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: analgesia y alta ambulatoria, laparoscopía de urgencia con detorsión conservadora, ooforectomía abierta sin destorcer, antibióticos por proceso inflamatorio pélvico, o punción ecoguiada del quiste. Piénsalo.',
        answer: 'Es la B. Todo calza con la torsión: dolor hiperagudo, vómitos profusos, un teratoma como factor de riesgo, y ausencia de flujo venoso. Se opera de urgencia, y se intenta destorcer y conservar el ovario, aunque se vea comprometido. Dar de alta, no operar, u operar sacando el ovario sin destorcer, son todos errores graves.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 58',
      stem: 'Una paciente de 30 años consulta por dolor en la fosa ilíaca derecha, asociado a vómitos alimentarios, que inició hace 48 horas. Al examen físico: FC 110 por minuto, resistencia muscular involuntaria en la fosa ilíaca derecha. La ecografía transvaginal visualiza un tumor anexial derecho quístico multiloculado, de 10 cm de diámetro, con ausencia de flujo al Doppler color.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Apendicitis aguda' },
        { letter: 'B', text: 'Embarazo ectópico' },
        { letter: 'C', text: 'Proceso inflamatorio pélvico' },
        { letter: 'D', text: 'Tumor anexial torcido' },
        { letter: 'E', text: 'Cáncer de ovario' },
      ],
      correct: 'D',
      explanation: 'Aunque la clínica imita una apendicitis, el tumor anexial de 10 cm sin flujo Doppler es una torsión ovárica. El tamaño mayor a 10 cm es el factor de riesgo de mayor peso, y aun con Doppler normal, la sospecha clínica obliga a operar.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Paciente de treinta años, con dolor en la fosa ilíaca derecha y vómitos, de cuarenta y ocho horas de evolución. Al examen tiene la frecuencia cardíaca en ciento diez, con resistencia muscular involuntaria en la fosa ilíaca derecha. La ecografía muestra un tumor anexial derecho, quístico, multiloculado, de diez centímetros, sin flujo Doppler.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: apendicitis aguda, embarazo ectópico, proceso inflamatorio pélvico, tumor anexial torcido, o cáncer de ovario. Piénsalo.',
        answer: 'Es la D. El cuadro se parece a una apendicitis, y esa es justo la trampa. Pero hay un tumor anexial de diez centímetros, que es un tamaño de alto riesgo, sin flujo Doppler: eso es una torsión. Y recuerda: aunque el Doppler hubiera sido normal, con esta clínica y este tamaño, igual se opera.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 169',
      stem: 'Una paciente de 19 años, con ciclos menstruales regulares, consulta por dolor abdominal intenso, mayor en la fosa ilíaca izquierda. Su fecha de última regla fue hace 20 días. Al examen físico presenta dolor a la palpación con signos peritoneales esbozados. El test de embarazo es negativo, y la ecografía transvaginal muestra una lesión anexial mixta de 8 cm, con líquido libre en moderada cantidad.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Cuerpo lúteo hemorrágico' },
        { letter: 'B', text: 'Cuerpo lúteo roto' },
        { letter: 'C', text: 'Apendicitis aguda' },
        { letter: 'D', text: 'Torsión ovárica' },
        { letter: 'E', text: 'Absceso tubo-ovárico' },
      ],
      correct: 'A',
      explanation: 'El día 20 del ciclo corresponde a la fase lútea, y la imagen mixta con líquido libre, sin cortejo vegetativo intenso ni signos de compromiso vascular, es el cuadro clásico del cuerpo lúteo hemorrágico, distinto de la torsión y del cuerpo lúteo ya roto con inestabilidad.',
      say: {
        stem: 'Una pregunta real más, del EUNACOM de julio de dos mil diecisiete. Paciente de diecinueve años, con ciclos regulares, con dolor abdominal intenso en la fosa ilíaca izquierda. Su última regla fue hace veinte días. Al examen tiene dolor con signos peritoneales esbozados, el test de embarazo es negativo, y la ecografía muestra una lesión anexial mixta de ocho centímetros, con líquido libre en cantidad moderada.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: cuerpo lúteo hemorrágico, cuerpo lúteo roto, apendicitis aguda, torsión ovárica, o absceso tubo-ovárico. Piénsalo.',
        answer: 'Es la A. Fíjate en el día del ciclo: el veinte cae justo en la fase lútea, cuando el cuerpo lúteo puede sangrar y crecer. La imagen mixta con líquido libre encaja con eso. No hay el cortejo vegetativo intenso de la torsión, y no hay compromiso hemodinámico como para hablar de un cuerpo lúteo ya roto e inestable.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Torsión anexial', tag: 'Cirugía siempre', kind: 'alert', items: [
          { t: 'Vómitos profusos + dolor hiperagudo', d: 'Con un quiste de riesgo detrás',
            say: 'Cerremos con las reglas de oro. Dolor hiperagudo con vómitos profusos, sobre un quiste de riesgo: piensa en torsión.' },
          { t: 'Detorsión conservadora', d: 'Aunque el ovario se vea violáceo',
            say: 'Y la conducta es laparoscopía de urgencia, con detorsión conservadora, aunque el ovario se vea violáceo.' },
        ] },
        { title: 'Quiste hemorrágico', tag: 'Manejo médico', kind: 'key', items: [
          { t: 'Postcoital, fase lútea tardía', d: 'Patrón en red de pesca',
            say: 'El quiste hemorrágico aparece tras la relación sexual, en fase lútea tardía, con el patrón en red de pesca.' },
          { t: 'Cirugía solo si hay inestabilidad', d: 'La mayoría se maneja médico',
            say: 'Y se opera solo si la paciente se desestabiliza. Si te llevas una sola idea de hoy: la torsión siempre se opera, y el quiste hemorrágico casi nunca. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Dolor pélvico agudo: torsión o quiste roto',
    root: N('start', 'Dolor pélvico agudo unilateral', '¿Qué muestra la ecografía Doppler?',
      'Mujer en edad fértil, con test de embarazo negativo, y un dolor pélvico agudo unilateral. La ecografía Doppler separa los dos diagnósticos.',
      ['Ovario aumentado, sin flujo Doppler', N('alert', 'Torsión anexial', 'Vómitos profusos, quiste de riesgo detrás',
        'Ovario edematoso, sin flujo, con vómitos profusos: torsión. Aunque el Doppler arterial esté presente, si la clínica es sospechosa, se opera igual.',
        ['', N('do', 'Laparoscopía de urgencia', 'Detorsión ovárica conservadora',
          'Se opera de urgencia, y se desenrolla el pedículo. Aunque el ovario se vea violáceo, se conserva: la ooforectomía queda solo para la necrosis gangrenosa.')])],
      ['Patrón en red de pesca, líquido en Douglas', N('q', '¿Está estable?', 'Decide manejo médico o quirúrgico',
        'Quiste hemorrágico roto, típico de la fase lútea tardía tras la relación sexual.',
        ['Sí, la mayoría', N('ok', 'Manejo médico conservador', 'Reposo, analgesia, control de hematocrito',
          'Estable: observación, analgesia y control seriado. El sangrado casi siempre se autolimita.')],
        ['No, hematocrito cae o hay shock', N('alert', 'Laparoscopía hemostática', 'Aspirar y coagular el lecho ovárico',
          'Inestable: laparoscopía de urgencia para aspirar el hemoperitoneo y controlar el sangrado.')])]),
  },
};
