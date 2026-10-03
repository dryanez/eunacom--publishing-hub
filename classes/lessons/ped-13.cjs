// Clase 18.13 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-13).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-13',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cómo tomas la muestra, cuándo tratas y cuándo pides imágenes',
      say: 'Bienvenido a la clase de infección del tracto urinario en pediatría. Hoy vas a aprender a distinguirla de otras causas de fiebre en el lactante, a elegir bien cómo tomar la muestra de orina, y a saber cuándo pedir imágenes después del episodio. Es un tema de alta frecuencia en el examen, con varias preguntas reales que vamos a revisar. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología y clínica',
      title: '¿Por qué se infecta la vía urinaria?',
      nodes: [
        { id: 'eco', col: 0, row: 0, k: 'cause', t: 'Escherichia coli', s: 'Responsable de más del 80%' },
        { id: 'fac', col: 0, row: 2, k: 'cause', t: 'Fimosis y mal vaciamiento', s: 'Facilitan que la bacteria suba' },
        { id: 'sub', col: 1, row: 1, k: 'mech', t: 'Asciende por la uretra', s: 'Coloniza la vejiga y el riñón' },
        { id: 'lac', col: 2, row: 0, k: 'effect', t: 'Lactante: fiebre sin foco', s: 'Vómitos, decaimiento e irritabilidad' },
        { id: 'pre', col: 2, row: 2, k: 'effect', t: 'Preescolar: disuria', s: 'Polaquiuria y enuresis reciente' },
        { id: 'pie', col: 3, row: 1, k: 'risk', t: 'Si sube al riñón: pielonefritis', s: 'Fiebre alta y compromiso del estado general' },
      ],
      edges: [
        { from: 'eco', to: 'sub' },
        { from: 'fac', to: 'sub', label: 'favorecen' },
        { from: 'sub', to: 'lac' },
        { from: 'sub', to: 'pre' },
        { from: 'sub', to: 'pie', label: 'si progresa' },
      ],
      steps: [
        { show: ['eco'], note: 'El patógeno indiscutido',
          say: 'Empecemos por la causa. La bacteria que casi siempre está detrás de una infección urinaria en el niño es la Escherichia coli, responsable de más del ochenta por ciento de los casos.' },
        { show: ['fac'], note: 'Guarda la idea del reflujo',
          say: 'Hay factores que facilitan que esa bacteria suba: la fimosis en el niño, el reflujo vesicoureteral y el mal vaciamiento de la vejiga. Acuérdate del reflujo, porque vuelve más adelante en la clase.' },
        { show: ['sub'], note: 'El ascenso explica la clínica',
          say: 'Y por ahí sube: la bacteria entra por la uretra y coloniza la vía urinaria. Ese ascenso es lo que explica todo lo que viene.' },
        { show: ['lac'], note: 'Se disfraza de fiebre sin foco',
          say: 'Fíjate en cómo se presenta según la edad. En el lactante que todavía no tiene palabras para contarte que le duele, la infección se disfraza de fiebre sin foco, con vómitos, decaimiento e irritabilidad.' },
        { show: ['pre'], note: 'El preescolar sí te cuenta los síntomas',
          say: 'En el preescolar que ya controla esfínteres, en cambio, te va a contar los síntomas clásicos: disuria, polaquiuria, y a veces una enuresis que antes no tenía.' },
        { show: ['pie'], note: 'La diferencia que decide el tratamiento',
          say: 'Y si esa bacteria sigue subiendo y llega al riñón, ya no es una simple cistitis: es una pielonefritis, con fiebre alta y compromiso del estado general. Esa diferencia decide todo el tratamiento, y la vemos ahora.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: '¿Cómo tomas la muestra de orina?',
      cards: [
        { title: 'Sin control de esfínteres', tag: 'Lactante', kind: 'criteria', items: [
          { t: 'Sondeo vesical', d: 'Método de elección: 10.000 UFC o más',
            say: 'Si tu paciente no controla esfínteres, el método de elección es el sondeo vesical estéril: seguro, y positivo desde diez mil unidades formadoras de colonias por mililitro.' },
          { t: 'Punción suprapúbica', d: 'Estándar de oro: cualquier bacteria cuenta',
            say: 'La punción suprapúbica es el estándar de oro, y la prefieres en el recién nacido o si hay una fimosis muy cerrada. Ahí basta una sola colonia para considerarlo positivo.' },
        ] },
        { title: 'Bolsa recolectora', tag: 'La trampa clásica', kind: 'alert', items: [
          { t: 'Hasta 85% de falsos positivos', d: 'Nunca confirma ni trata una ITU',
            say: 'Y aquí viene la trampa que más se repite en el examen: la bolsa recolectora tiene hasta un ochenta y cinco por ciento de falsos positivos, por contaminación de la piel. Nunca inicies un tratamiento con un urocultivo tomado de bolsa.' },
          { t: 'Solo sirve si sale normal', d: 'Ahí sí descarta la infección',
            say: 'Su único valor es al revés: si el sedimento de la bolsa sale completamente normal, ahí sí puedes usarla para descartar la infección. Esa regla es justo lo que preguntan.' },
        ] },
        { title: 'Con control de esfínteres', tag: 'Preescolar', kind: 'normal', items: [
          { t: 'Segundo chorro limpio', d: '100.000 UFC o más confirma',
            say: 'Si el niño ya controla esfínteres, tomas la muestra por segundo chorro miccional limpio, con aseo genital previo con agua, y aquí subes la exigencia a cien mil colonias o más.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Cistitis o pielonefritis: cambia el antibiótico',
      cards: [
        { title: 'Cistitis o ITU baja', tag: 'Sin fiebre', kind: 'pharma', items: [
          { t: 'Cefadroxilo oral', d: '3 a 5 días',
            say: 'Si es una cistitis, sin fiebre, el antibiótico de elección es el cefadroxilo oral, por tres a cinco días.' },
          { t: 'Nitrofurantoína: solo aquí', d: 'Nunca en la ITU febril',
            say: 'La nitrofurantoína también sirve, pero solo en esta forma baja. Acuérdate de esto para el examen: la nitrofurantoína nunca se usa en la ITU febril, porque no alcanza el parénquima renal.' },
        ] },
        { title: 'Pielonefritis o ITU febril', tag: 'Con fiebre', kind: 'alert', items: [
          { t: 'Ambulatorio: cefadroxilo oral', d: '7 a 10 días',
            say: 'Si hay fiebre, es una pielonefritis, y el tratamiento cambia. Si el niño tiene más de tres meses, tolera la vía oral y se ve con buen estado general, tratas ambulatorio con el mismo cefadroxilo, pero esta vez por siete a diez días.' },
          { t: 'Hospitalizar si es grave', d: 'Menor de 3 meses, vómitos, tóxico',
            say: 'Pero si es menor de tres meses, vomita todo, o se ve tóxico, ahí lo hospitalizas y usas cefotaxima o ceftriaxona endovenosa.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Estudio por imágenes',
      title: '¿Qué pides después del primer episodio febril?',
      nodes: [
        { id: 'eco', col: 0, row: 1, k: 'mech', t: 'Ecografía renal y vesical', s: 'A todos, tras el primer episodio' },
        { id: 'ucg', col: 1, row: 0, k: 'q', t: '¿Eco alterada o ITU atípica?', s: 'O si se repite' },
        { id: 'ucr', col: 2, row: 0, k: 'refer', t: 'Uretrocistografía miccional', s: 'Busca el reflujo vesicoureteral' },
        { id: 'dms', col: 2, row: 2, k: 'risk', t: 'Cintigrama DMSA', s: 'A los seis meses' },
      ],
      edges: [
        { from: 'eco', to: 'ucg' },
        { from: 'ucg', to: 'ucr', label: 'sí' },
        { from: 'eco', to: 'dms', label: 'siempre que hubo fiebre' },
      ],
      steps: [
        { show: ['eco'], note: 'Se pide a todos, sin excepción',
          say: 'Ahora, ¿qué haces después del primer episodio? A todo niño con una infección urinaria febril comprobada le pides una ecografía renal y vesical.' },
        { show: ['ucg'], note: 'Solo si hay una señal de alarma',
          say: 'Y esa ecografía te hace una pregunta: ¿salió alterada, o el cuadro fue atípico o recurrente?' },
        { show: ['ucr'], note: 'El examen del reflujo',
          say: 'Si la respuesta es sí, el siguiente paso es la uretrocistografía miccional, el examen que busca y clasifica el reflujo vesicoureteral, la malformación que más se asocia a este cuadro.' },
        { show: ['dms'], note: 'Busca la cicatriz permanente',
          say: 'Y en paralelo, a los seis meses del episodio agudo, pides un cintigrama renal con DMSA, que muestra si quedó una cicatriz permanente en el riñón.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos toda la decisión clínica en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Bolsa recolectora alterada', 'Confirmar con sondeo o punción', 'Tratar directo con ese resultado'],
          say: 'Repasemos las trampas. Bolsa recolectora alterada: confirmas con sondeo o punción. El error es tratar directo con ese resultado.' },
        { cells: ['Cistitis sin fiebre', 'Cefadroxilo o nitrofurantoína oral', 'Usar nitrofurantoína en la febril'],
          say: 'Cistitis sin fiebre: cefadroxilo o nitrofurantoína oral. El error es usar la nitrofurantoína también en la forma febril.' },
        { cells: ['Pielonefritis, buen estado, mayor de 3 meses', 'Cefadroxilo oral ambulatorio', 'Hospitalizar a todos por igual'],
          say: 'Pielonefritis con buen estado y más de tres meses: cefadroxilo oral ambulatorio. El error es hospitalizar a todos por igual.' },
        { cells: ['Primer episodio de ITU febril', 'Ecografía renal y vesical a todos', 'Pedirla solo si hay síntomas nuevos'],
          say: 'Primer episodio de ITU febril: ecografía a todos. El error es pedirla solo si aparecen síntomas nuevos.' },
        { cells: ['Ecografía alterada o ITU atípica', 'Uretrocistografía miccional', 'Saltarse el estudio del reflujo'],
          say: 'Y si la ecografía sale alterada o el cuadro fue atípico: uretrocistografía. El error es saltarse el estudio del reflujo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 7 meses, sin antecedentes, con fiebre de hasta 39 °C de 2 días de evolución, decaimiento e inapetencia, sin síntomas respiratorios ni digestivos. Examen físico reactivo, salvo por la fiebre. Se instala bolsa recolectora perineal: el sedimento muestra leucocitos y bacterias abundantes.',
      question: '¿Cuál es la conducta más adecuada antes de iniciar el tratamiento antibiótico?',
      options: [
        { letter: 'A', text: 'Iniciar cefadroxilo oral con el resultado de la bolsa recolectora' },
        { letter: 'B', text: 'Realizar sondeo vesical para tomar un urocultivo confirmatorio' },
        { letter: 'C', text: 'Esperar 48 horas sin tratamiento a que la bolsa confirme el diagnóstico' },
        { letter: 'D', text: 'Solicitar cintigrama DMSA de urgencia' },
        { letter: 'E', text: 'Dar el alta, porque la bolsa recolectora siempre contamina' },
      ],
      correct: 'B',
      explanation: 'La bolsa recolectora tiene una tasa de falsos positivos demasiado alta para confirmar o tratar. Con un sedimento alterado, la norma exige confirmar con sondeo vesical o punción suprapúbica antes de iniciar antibióticos.',
      say: {
        stem: 'Vamos con un caso. Lactante de siete meses, sin antecedentes, con fiebre de hasta treinta y nueve grados desde hace dos días, decaimiento e inapetencia, sin síntomas respiratorios ni digestivos. Está reactiva, salvo por la fiebre. Le instalan una bolsa recolectora perineal, y el sedimento muestra leucocitos y bacterias abundantes.',
        question: '¿Cuál es la conducta más adecuada antes de iniciar el tratamiento antibiótico?',
        options: 'Tienes cinco opciones: tratar directo con el resultado de la bolsa, hacer un sondeo vesical para confirmar, esperar cuarenta y ocho horas sin tratar, pedir un cintigrama DMSA de urgencia, o dar de alta asumiendo que la bolsa siempre contamina. Piénsalo.',
        answer: 'Es la B. La bolsa recolectora nunca confirma ni descarta cuando sale alterada: tienes que confirmar con una muestra fidedigna, por sondeo vesical o punción suprapúbica, antes de tratar. Tratar directo con la bolsa es la trampa más clásica del tema, y esperar sin hacer nada solo retrasa el diagnóstico en una lactante febril.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 156',
      stem: 'Niña de 8 meses con cuadro febril hasta 39,2 °C, sin otros síntomas ni alteraciones al examen físico. Se realiza un urocultivo por recolector, que resulta positivo para Escherichia coli sensible, con 45.000 unidades formadoras de colonias por mililitro.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Tratar con cefadroxilo oral' },
        { letter: 'B', text: 'Tratar con nitrofurantoína oral' },
        { letter: 'C', text: 'Tratar con amoxicilina oral' },
        { letter: 'D', text: 'Solicitar hemograma, VHS y PCR' },
        { letter: 'E', text: 'Repetir el urocultivo por sondeo vesical' },
      ],
      correct: 'E',
      explanation: 'El urocultivo por bolsa recolectora solo es positivo si supera las 100.000 UFC por mililitro. Con 45.000, el único paso aceptable es repetirlo con una técnica fidedigna: sondeo vesical.',
      say: {
        stem: 'Y ahora una pregunta real, del EUNACOM de julio de dos mil diecisiete. Niña de ocho meses con fiebre hasta treinta y nueve coma dos, sin otros síntomas ni hallazgos al examen. El urocultivo, tomado por bolsa recolectora, sale positivo para Escherichia coli, con cuarenta y cinco mil colonias por mililitro.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: tratar con cefadroxilo, tratar con nitrofurantoína, tratar con amoxicilina, pedir hemograma y reactantes, o repetir el urocultivo por sondeo vesical.',
        answer: 'Es la E. El corte para que un urocultivo de bolsa recolectora cuente como positivo es cien mil colonias o más. Con cuarenta y cinco mil, ese resultado no alcanza el umbral, y la única opción aceptable es repetirlo con una técnica que no se contamine: el sondeo vesical.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 50',
      stem: 'Niño de 3 años, con antecedente de fimosis, con fiebre hasta 39,5 °C desde hace 48 horas, asociada a vómitos y malestar general. Examen cardiopulmonar y abdominal sin alteraciones relevantes. Sedimento de orina con 20 glóbulos rojos y 50 glóbulos blancos por campo, bacterias en moderada cantidad; hemograma con 14.000 leucocitos por milímetro cúbico y VHS de 42 milímetros por hora.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Balanopostitis' },
        { letter: 'B', text: 'Neumonía adquirida en la comunidad' },
        { letter: 'C', text: 'Influenza' },
        { letter: 'D', text: 'Síndrome hemolítico urémico' },
        { letter: 'E', text: 'Pielonefritis aguda' },
      ],
      correct: 'E',
      explanation: 'La fimosis puede orientar a balanopostitis o a pielonefritis; la balanopostitis da alteraciones cutáneas del prepucio sin fiebre alta. Aquí la leucocituria elevada junto con la fiebre define la pielonefritis aguda.',
      say: {
        stem: 'Una segunda pregunta real, del EUNACOM de julio de dos mil veinticuatro. Niño de tres años, con fimosis, con fiebre hasta treinta y nueve coma cinco desde hace cuarenta y ocho horas, con vómitos y malestar general, y examen cardiopulmonar y abdominal normales. El sedimento de orina muestra cincuenta glóbulos blancos por campo, y el hemograma sale con catorce mil leucocitos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: balanopostitis, neumonía, influenza, síndrome hemolítico urémico, o pielonefritis aguda.',
        answer: 'Es la E, pielonefritis aguda. La fimosis te puede hacer dudar entre una balanopostitis y una pielonefritis, pero la balanopostitis da alteraciones visibles en el prepucio y no fiebre alta como esta. Aquí la leucocituria tan elevada, junto con la fiebre y el compromiso del estado general, apunta directo al riñón.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Según la edad', kind: 'key', items: [
          { t: 'Bolsa recolectora: solo descarta', d: 'Nunca confirma ni trata',
            say: 'Cerremos con las reglas de oro. La bolsa recolectora solo sirve para descartar si sale normal; nunca para confirmar ni tratar.' },
          { t: 'Confirmar con sondeo o punción', d: 'Según control de esfínteres',
            say: 'Para confirmar, usas sondeo vesical o punción suprapúbica en el que no controla esfínteres, y segundo chorro limpio en el que sí controla.' },
        ] },
        { title: 'Tratamiento', tag: 'Cambia con la fiebre', kind: 'pharma', items: [
          { t: 'Sin fiebre: cefadroxilo o nitrofurantoína', d: '3 a 5 días',
            say: 'Sin fiebre, cefadroxilo o nitrofurantoína por tres a cinco días.' },
          { t: 'Con fiebre: cefadroxilo, 7 a 10 días', d: 'Hospitaliza si es menor de 3 meses',
            say: 'Con fiebre, el mismo cefadroxilo pero por siete a diez días, salvo que sea menor de tres meses o se vea grave: ahí hospitalizas.' },
        ] },
        { title: 'Imágenes', tag: 'Después del episodio', kind: 'alert', items: [
          { t: 'Ecografía renal a todos', d: 'Uretrocistografía si sale alterada',
            say: 'Y después de todo episodio febril, ecografía renal a todos, y uretrocistografía si sale alterada o el cuadro fue atípico. Si te llevas una sola idea de hoy: la bolsa recolectora nunca confirma una infección urinaria. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Infección urinaria: fiebre o no fiebre decide todo',
    root: N('start', 'Sospecha de ITU', 'Depende de si hay fiebre',
      'Tienes un niño con sospecha de infección urinaria confirmada. La pregunta que decide todo el manejo es una sola: ¿hay fiebre?',
      ['Sin fiebre', N('ok', 'Cistitis o ITU baja', 'Cefadroxilo o nitrofurantoína oral, 3 a 5 días',
        'Sin fiebre, es una cistitis: tratas con cefadroxilo o nitrofurantoína oral, por tres a cinco días. No necesitas más estudio que ese.')],
      ['Con fiebre', N('q', '¿Tolera la vía oral y tiene más de 3 meses?', 'Decide si va a la casa o se hospitaliza',
        'Con fiebre, es una pielonefritis. Ahora preguntas si el niño tolera la vía oral, se ve con buen estado general, y tiene más de tres meses.',
        ['Sí', N('do', 'Cefadroxilo oral ambulatorio', '7 a 10 días',
          'Si tolera y tiene más de tres meses, tratas ambulatorio con cefadroxilo oral, por siete a diez días.')],
        ['No: menor de 3 meses, vómitos o tóxico', N('alert', 'Hospitalizar', 'Cefotaxima o ceftriaxona endovenosa',
          'Si es menor de tres meses, vomita todo o se ve tóxico, lo hospitalizas y usas cefotaxima o ceftriaxona endovenosa.')])]),
  },
};
