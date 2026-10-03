// Clase 20.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_ginecologia.cjs (gin-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gin-02',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Rotterdam decide el diagnóstico, y el deseo de embarazo decide el tratamiento',
      say: 'Bienvenidos. Seguimos con el ovario poliquístico, la endocrinopatía más frecuente en mujeres en edad fértil y la continuación natural de la clase anterior: allá vimos que un test de progesterona positivo apunta a anovulación con estrógenos presentes, y esa es justamente la firma del ovario poliquístico. Hoy vemos cómo se confirma el diagnóstico y cómo se elige el tratamiento.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Dos engranajes que se retroalimentan',
      nodes: [
        { id: 'gnrh', col: 0, row: 1, k: 'cause', t: 'GnRH más frecuente', s: 'Favorece la LH sobre la FSH' },
        { id: 'lh', col: 1, row: 0, k: 'mech', t: 'LH estimula la teca', s: 'Exceso de andrógenos ováricos' },
        { id: 'ri', col: 0, row: 3, k: 'cause', t: 'Resistencia a la insulina', s: 'Presente incluso sin obesidad' },
        { id: 'shbg', col: 1, row: 3, k: 'mech', t: 'Cae la SHBG hepática', s: 'Sube la testosterona libre' },
        { id: 'andro', col: 2, row: 2, k: 'effect', t: 'Hiperandrogenismo', s: 'Hirsutismo, acné' },
        { id: 'anov', col: 3, row: 1, k: 'risk', t: 'Anovulación crónica', s: 'Folículo detenido, no madura' },
        { id: 'endo', col: 4, row: 1, k: 'risk', t: 'Endometrio sin oposición', s: 'Riesgo de hiperplasia' },
      ],
      edges: [
        { from: 'gnrh', to: 'lh' }, { from: 'lh', to: 'andro' },
        { from: 'ri', to: 'shbg' }, { from: 'shbg', to: 'andro', label: 'amplifica' },
        { from: 'lh', to: 'anov' }, { from: 'anov', to: 'endo' },
      ],
      steps: [
        { show: ['gnrh'], note: 'El primer engranaje: neuroendocrino',
          say: 'Hay dos engranajes que se retroalimentan, y conviene separarlos. El primero es neuroendocrino: los pulsos de GnRH se hacen más frecuentes, y eso favorece la síntesis de LH por sobre la FSH.' },
        { show: ['lh'], note: 'La teca produce de más',
          say: 'Esa LH en exceso estimula demasiado a la teca ovárica, que produce andrógenos de más. Y como falta FSH relativa, esos folículos no terminan de aromatizar ni de madurar.' },
        { show: ['ri'], note: 'El segundo engranaje: metabólico',
          say: 'El segundo engranaje es metabólico: la resistencia a la insulina, presente en la gran mayoría de las pacientes, incluso en las que no son obesas.' },
        { show: ['shbg'], note: 'Por qué la testosterona libre sube tanto',
          say: 'La insulina en exceso hace caer la SHBG en el hígado, la proteína que transporta las hormonas sexuales. Con menos proteína transportadora, sube la fracción libre de testosterona, que es la que actúa.' },
        { show: ['andro'], note: 'Los dos caminos llegan al mismo lugar',
          say: 'Los dos caminos convergen en el mismo resultado: hiperandrogenismo clínico, hirsutismo y acné.' },
        { show: ['anov', 'endo'], note: 'La conexión con la clase pasada',
          say: 'Y por el lado ovulatorio, la anovulación crónica deja al endometrio expuesto a estrógenos sin la oposición de la progesterona, porque no hay cuerpo lúteo. Esa exposición mantenida es lo que explica el riesgo a largo plazo, y lo retomamos en un momento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Criterios de Rotterdam: dos de tres',
      cards: [
        { title: 'Los tres criterios', tag: 'Se necesitan dos', kind: 'key', items: [
          { t: 'Oligo o anovulación', d: 'Ciclos de más de treinta y cinco días',
            say: 'El diagnóstico se hace con los criterios de Rotterdam, y se necesitan dos de tres. El primero es la disfunción ovulatoria: ciclos infrecuentes, de más de treinta y cinco días, o amenorrea.' },
          { t: 'Hiperandrogenismo clínico o bioquímico', d: 'Hirsutismo, acné, o testosterona elevada',
            say: 'El segundo es el hiperandrogenismo: hirsutismo evaluado con la escala de Ferriman-Gallwey, acné severo, alopecia, o una testosterona elevada en el laboratorio.' },
          { t: 'Morfología poliquística en la ecografía', d: 'Muchos folículos pequeños o volumen ovárico aumentado',
            say: 'Y el tercero es la ecografía: muchos folículos pequeños distribuidos en la periferia del ovario, o un volumen ovárico aumentado. Con dos de estos tres, el diagnóstico está hecho.' },
        ] },
        { title: 'Antes de confirmar', tag: 'Descarte obligatorio', kind: 'alert', items: [
          { t: 'Diecisiete hidroxiprogesterona', d: 'Descarta hiperplasia suprarrenal no clásica',
            say: 'Pero antes de cerrar el diagnóstico, hay un paso que se pregunta mucho: descartar otras causas de hiperandrogenismo. Se pide diecisiete hidroxiprogesterona matinal, para descartar una hiperplasia suprarrenal congénita no clásica, que puede dar un cuadro casi idéntico.' },
          { t: 'TSH y prolactina', d: 'También pueden dar ciclos irregulares',
            say: 'Y también se piden TSH y prolactina, porque el hipotiroidismo y la hiperprolactinemia también alteran el ciclo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'Ovario poliquístico versus hiperplasia suprarrenal',
      nodes: [
        { id: 'hiper', col: 0, row: 1, k: 'start', t: 'Hiperandrogenismo', s: 'Hirsutismo y acné' },
        { id: 'ohp', col: 1, row: 1, k: 'q', t: 'Diecisiete hidroxiprogesterona', s: '¿Está elevada?' },
        { id: 'sop', col: 2, row: 0, k: 'good', t: 'Normal: ovario poliquístico', s: 'Confirmar con Rotterdam' },
        { id: 'hsc', col: 2, row: 2, k: 'trap', t: 'Elevada: hiperplasia suprarrenal', s: 'Déficit de veintiuno hidroxilasa' },
      ],
      edges: [
        { from: 'hiper', to: 'ohp' }, { from: 'ohp', to: 'sop', label: 'normal' }, { from: 'ohp', to: 'hsc', label: 'elevada' },
      ],
      steps: [
        { show: ['hiper', 'ohp'], note: 'Se ven casi igual en la consulta',
          say: 'Esta diferencia es la que más confunde, porque las dos entidades pueden verse casi idénticas en la consulta: hirsutismo, acné, ciclos irregulares. El examen que las separa es la diecisiete hidroxiprogesterona matinal.' },
        { show: ['sop'], note: 'Con el descarte hecho, aplicas Rotterdam',
          say: 'Si sale normal, sigues adelante con el ovario poliquístico y confirmas con Rotterdam.' },
        { show: ['hsc'], note: 'Un diagnóstico distinto, con otro manejo',
          say: 'Pero si está elevada, es una hiperplasia suprarrenal congénita no clásica, por déficit de la enzima veintiuno hidroxilasa, y el manejo ya no es el mismo. No te quedes solo con el cuadro clínico: sin este examen no puedes cerrar el diagnóstico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Todo depende del deseo de embarazo',
      cards: [
        { title: 'Siempre primero', tag: 'Estilo de vida', kind: 'normal', items: [
          { t: 'Bajar entre un cinco y un diez por ciento del peso', d: 'Restablece la ovulación en más de la mitad',
            say: 'Antes de cualquier fármaco, el pilar es el mismo para todas: bajar entre un cinco y un diez por ciento del peso corporal. Solo con eso, más de la mitad de las pacientes recupera la ovulación espontánea.' },
        ] },
        { title: 'No desea embarazo', tag: 'Anticonceptivos combinados', kind: 'pharma', items: [
          { t: 'Progestágeno antiandrogénico', d: 'Ciproterona, dienogest o drospirenona',
            say: 'Si la paciente no busca embarazo, el tratamiento de elección son los anticonceptivos combinados, con un progestágeno antiandrogénico: ciproterona, dienogest o drospirenona. Bajan la LH, suben la SHBG y protegen el endometrio con la deprivación mensual regular.' },
          { t: 'Metformina si hay resistencia a la insulina', d: 'Espironolactona si el hirsutismo persiste',
            say: 'Se agrega metformina si hay resistencia a la insulina comprobada, y espironolactona si el hirsutismo persiste después de seis meses de anticonceptivos.' },
        ] },
        { title: 'Desea embarazo', tag: 'Inducción de ovulación', kind: 'key', items: [
          { t: 'Letrozol, primera línea actual', d: 'Inhibidor de la aromatasa',
            say: 'Si la paciente sí busca embarazo, los anticonceptivos quedan fuera, porque frenarían la ovulación que estás tratando de lograr. El inductor de ovulación de primera línea hoy es el letrozol, un inhibidor de la aromatasa.' },
          { t: 'Citrato de clomifeno', d: 'Alternativa clásica',
            say: 'El citrato de clomifeno queda como alternativa clásica, con menor tasa de embarazo que el letrozol.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos el diagnóstico y el tratamiento en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Hirsutismo y ciclos irregulares en adolescente', 'Diecisiete hidroxiprogesterona antes de cerrar el diagnóstico', 'Diagnosticar ovario poliquístico de entrada'],
          say: 'Repasemos las trampas. Hirsutismo con ciclos irregulares en una adolescente: primero la diecisiete hidroxiprogesterona, antes de cerrar el diagnóstico. El error es etiquetarla de ovario poliquístico sin descartar la hiperplasia suprarrenal.' },
        { cells: ['No desea embarazo', 'Anticonceptivos con progestágeno antiandrogénico', 'Dar inductores de ovulación'],
          say: 'Paciente que no desea embarazo: anticonceptivos con progestágeno antiandrogénico. El error es darle un inductor de ovulación, que no tiene ningún sentido aquí.' },
        { cells: ['Desea embarazo', 'Letrozol como primera línea', 'Empezar con anticonceptivos combinados'],
          say: 'Si desea embarazo, letrozol como primera línea. El error contrario: empezar con anticonceptivos combinados, que bloquean justo lo que quieres lograr.' },
        { cells: ['Anovulación crónica no tratada', 'Riesgo de hiperplasia y cáncer de endometrio', 'Subestimarlo por ser una paciente joven'],
          say: 'Y la anovulación crónica sin tratar aumenta el riesgo de hiperplasia y cáncer de endometrio. No lo subestimes solo porque la paciente es joven: el estímulo estrogénico sin oposición no distingue edad.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 23 años, con sobrepeso, consulta por reglas cada 50 a 60 días desde la menarquia y acné facial persistente. Al examen: vello grueso en mentón y línea alba, puntaje de Ferriman-Gallwey de 11. Ecografía transvaginal: ambos ovarios con múltiples folículos periféricos pequeños. No desea embarazo en este momento.',
      question: '¿Cuál es el tratamiento farmacológico de primera línea más adecuado?',
      options: [
        { letter: 'A', text: 'Citrato de clomifeno' },
        { letter: 'B', text: 'Anticonceptivos orales combinados con progestágeno antiandrogénico' },
        { letter: 'C', text: 'Análogos de GnRH' },
        { letter: 'D', text: 'Metformina en monoterapia, sin anticonceptivos' },
        { letter: 'E', text: 'Danazol oral continuo' },
      ],
      correct: 'B',
      explanation: 'Cumple dos criterios de Rotterdam: oligomenorrea y ecografía con morfología poliquística, más hiperandrogenismo clínico. Sin deseo de embarazo, el tratamiento de elección son los anticonceptivos combinados con progestágeno antiandrogénico.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintitrés años, con sobrepeso, con reglas cada cincuenta a sesenta días desde la menarquia y acné facial persistente. Al examen tiene vello grueso en el mentón y en la línea media del abdomen, con un puntaje de hirsutismo de once. La ecografía muestra ambos ovarios con múltiples folículos pequeños en la periferia. No desea embarazo por ahora.',
        question: '¿Cuál es el tratamiento farmacológico de primera línea más adecuado?',
        options: 'Las opciones: citrato de clomifeno, anticonceptivos combinados con progestágeno antiandrogénico, análogos de GnRH, metformina sola, o danazol. Piénsalo.',
        answer: 'Es la B. Esta paciente cumple dos criterios de Rotterdam, la oligomenorrea y la ecografía, más el hiperandrogenismo clínico: es un ovario poliquístico. Y como no busca embarazo, el clomifeno no tiene ningún rol aquí, porque es un inductor de ovulación. Lo correcto son los anticonceptivos con progestágeno antiandrogénico, que regulan el ciclo, mejoran el acné y el hirsutismo, y protegen el endometrio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 157',
      stem: 'Mujer de 28 años con amenorrea de 4 meses, hirsutismo, acné y obesidad central. Ecografía: ovarios con múltiples folículos periféricos. Testosterona libre levemente elevada.',
      question: '¿Cuál es el diagnóstico?',
      options: [
        { letter: 'A', text: 'Síndrome de ovario poliquístico' },
        { letter: 'B', text: 'Hiperprolactinemia' },
        { letter: 'C', text: 'Insuficiencia ovárica prematura' },
        { letter: 'D', text: 'Síndrome de Cushing' },
        { letter: 'E', text: 'Hiperplasia suprarrenal congénita' },
      ],
      correct: 'A',
      explanation: 'Amenorrea (disfunción ovulatoria) más hiperandrogenismo clínico y bioquímico, más ecografía con morfología poliquística: se cumplen los tres criterios de Rotterdam. Es la causa más frecuente de amenorrea secundaria en mujeres jóvenes.',
      say: {
        stem: 'Vamos con una pregunta real, del EUNACOM de julio de dos mil veinticinco. Mujer de veintiocho años con cuatro meses de amenorrea, hirsutismo, acné y obesidad central. La ecografía muestra ovarios con múltiples folículos en la periferia, y la testosterona libre está levemente elevada.',
        question: '¿Cuál es el diagnóstico?',
        options: 'Las opciones: ovario poliquístico, hiperprolactinemia, insuficiencia ovárica prematura, síndrome de Cushing, o hiperplasia suprarrenal congénita. Piénsalo.',
        answer: 'Es la A. Aquí se cumplen los tres criterios de Rotterdam a la vez: la amenorrea es la disfunción ovulatoria, el hirsutismo y la testosterona son el hiperandrogenismo, y la ecografía confirma la morfología poliquística. Con dos ya bastaba, y esta paciente tiene los tres.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 115',
      stem: 'Una paciente de 17 años, con menarquia a los 16 años, tiene reglas cada 3 a 4 meses. Presenta vello grueso en el mentón, los brazos, el pecho, los muslos y la línea media abdominal, tanto infraumbilical como supraumbilical, con un índice de Ferriman-Gallwey mayor a 15. Su examen mamario y genital son normales.',
      question: '¿Cuál es el examen de elección para hacer el diagnóstico diferencial con el síndrome de ovario poliquístico?',
      options: [
        { letter: 'A', text: 'Relación FSH sobre LH' },
        { letter: 'B', text: 'Cariograma' },
        { letter: 'C', text: 'Curva de insulina' },
        { letter: 'D', text: 'Niveles plasmáticos de prolactina' },
        { letter: 'E', text: 'Diecisiete hidroxiprogesterona' },
      ],
      correct: 'E',
      explanation: 'El cuadro es compatible con hiperandrogenismo severo, y el diagnóstico diferencial obligatorio del ovario poliquístico es la hiperplasia suprarrenal congénita no clásica, que se descarta midiendo la 17-hidroxiprogesterona.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de agosto de dos mil veintiuno. Paciente de diecisiete años, con menarquia a los dieciséis, con reglas cada tres a cuatro meses. Tiene vello grueso extenso, en el mentón, los brazos, el pecho, los muslos y la línea media del abdomen, con un puntaje de hirsutismo muy alto. Su examen mamario y genital son normales.',
        question: '¿Cuál es el examen de elección para hacer el diagnóstico diferencial con el síndrome de ovario poliquístico?',
        options: 'Las opciones: la relación FSH sobre LH, el cariograma, la curva de insulina, la prolactina, o la diecisiete hidroxiprogesterona. Piénsalo.',
        answer: 'Es la E. Con un hirsutismo tan marcado, el diagnóstico diferencial obligado del ovario poliquístico es la hiperplasia suprarrenal congénita no clásica, y el examen que la descarta es la diecisiete hidroxiprogesterona matinal. La relación FSH sobre LH no se usa como criterio, por tener muchos falsos negativos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 108',
      stem: 'Una paciente de 28 años acude a la clínica de fertilidad. Presenta reglas irregulares, que ocurren cada 2 a 3 meses. Al examen físico se observa obesa y tiene hirsutismo y acné, sin alteraciones en el examen ginecológico. Se solicita prueba de HOMA, que resulta normal, y una ecografía transvaginal que muestra útero normal, con ovarios poliquísticos.',
      question: '¿Cuál es el tratamiento más adecuado para lograr la fertilidad en esta paciente?',
      options: [
        { letter: 'A', text: 'Espironolactona' },
        { letter: 'B', text: 'Análogos de la GnRH' },
        { letter: 'C', text: 'Citrato de clomifeno' },
        { letter: 'D', text: 'Metformina' },
        { letter: 'E', text: 'Progesterona' },
      ],
      correct: 'C',
      explanation: 'Infertilidad por anovulación en el contexto de ovario poliquístico: se induce la ovulación. La metformina se reserva para pacientes con resistencia a la insulina comprobada, que aquí no está presente, ya que el HOMA es normal.',
      say: {
        stem: 'Y esta última, del EUNACOM de diciembre de dos mil diecinueve. Paciente de veintiocho años en control de fertilidad, con reglas cada dos a tres meses, obesidad, hirsutismo y acné. Su prueba de resistencia a la insulina sale normal, y la ecografía confirma ovarios poliquísticos.',
        question: '¿Cuál es el tratamiento más adecuado para lograr la fertilidad en esta paciente?',
        options: 'Las opciones: espironolactona, análogos de GnRH, citrato de clomifeno, metformina, o progesterona. Piénsalo.',
        answer: 'Es la C. Tiene infertilidad por anovulación, así que se induce la ovulación. Y fíjate en el detalle: la metformina podría parecer tentadora, pero solo se usa cuando hay resistencia a la insulina comprobada, y aquí la prueba salió normal. Sin esa indicación, el inductor de ovulación es la respuesta correcta.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Dos de tres, con descarte previo', kind: 'key', items: [
          { t: 'Rotterdam: dos de tres criterios', d: 'Ovulación, hiperandrogenismo, ecografía',
            say: 'Cerremos con las reglas de oro. El diagnóstico son dos de tres criterios de Rotterdam.' },
          { t: 'Descartar antes de cerrar', d: 'Diecisiete hidroxiprogesterona, TSH y prolactina',
            say: 'Y antes de cerrar el diagnóstico, siempre se descarta la hiperplasia suprarrenal, el hipotiroidismo y la hiperprolactinemia.' },
        ] },
        { title: 'Tratamiento', tag: 'Lo decide la fertilidad', kind: 'pharma', items: [
          { t: 'No desea embarazo: anticonceptivos', d: 'Con progestágeno antiandrogénico',
            say: 'Si no desea embarazo, anticonceptivos con progestágeno antiandrogénico.' },
          { t: 'Desea embarazo: letrozol', d: 'Primera línea para inducir ovulación',
            say: 'Si desea embarazo, letrozol como inductor de ovulación de primera línea. Si te llevas una sola idea de hoy: dos de tres criterios hacen el diagnóstico, y el deseo de embarazo decide el tratamiento. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: (() => {
    const nNoCumple = N('refer', 'Buscar otro diagnóstico', 'No cumple los criterios',
      'Sin dos criterios de Rotterdam, hay que replantear el estudio: pensar en otras causas de ciclos irregulares.');
    const nAcos = N('ok', 'Anticonceptivos combinados', 'Con progestágeno antiandrogénico',
      'Se suma estilo de vida y, si hay resistencia a la insulina, metformina.');
    const nLetrozol = N('ok', 'Letrozol', 'Inductor de ovulación de primera línea',
      'El clomifeno queda como alternativa, con menor tasa de embarazo.');
    const nFertilidad = N('q', '¿Desea embarazo?', 'Define todo el tratamiento',
      'Confirmado el diagnóstico, la pregunta que decide el manejo es el deseo de fertilidad.',
      ['No', nAcos], ['Sí', nLetrozol]);
    const nRotterdam = N('q', '¿Cumple dos de tres criterios de Rotterdam?', 'Ovulación, hiperandrogenismo, ecografía',
      'Con el descarte hecho, se aplican los criterios de Rotterdam.',
      ['Sí', nFertilidad], ['No', nNoCumple]);
    const nHSC = N('alert', 'Hiperplasia suprarrenal no clásica', 'Manejo distinto al del ovario poliquístico',
      'Con la diecisiete hidroxiprogesterona elevada, el diagnóstico cambia, y ya no aplicas los criterios de Rotterdam.');
    const nOHP = N('q', '¿Diecisiete hidroxiprogesterona elevada?', 'Descarta hiperplasia suprarrenal no clásica',
      'Se mide primero, porque puede dar un cuadro casi idéntico.',
      ['Elevada', nHSC], ['Normal', nRotterdam]);
    const root = N('start', 'Sospecha de ovario poliquístico', 'Ciclos irregulares más hiperandrogenismo',
      'Mujer en edad fértil con ciclos irregulares e hiperandrogenismo clínico. Antes de aplicar Rotterdam, hay que descartar otras causas.',
      ['', nOHP]);
    return { title: 'Ovario poliquístico: de la sospecha al tratamiento', root };
  })(),
};
