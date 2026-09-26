// Clase 11.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs / dataset_cirugia_bloque_1.cjs (cir-04, classId cirugia-04).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-04',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Bridas, vólvulo o cáncer: y el signo que nunca te puedes saltar',
      say: 'Bienvenido de nuevo. Cerramos el bloque de abdomen agudo con obstrucción intestinal mecánica, uno de los temas con más preguntas reconstruidas en toda la historia del examen. Hoy vas a aprender a diferenciar tres causas, delgado versus colon, y sobre todo, a reconocer cuándo un cuadro que parecía manejable se convirtió en una urgencia que no espera. Partamos por la clínica.',
    },

    {
      type: 'flow',
      kicker: 'El tetraedro cardinal',
      title: 'Cuatro síntomas, y lo que cada uno te dice',
      nodes: [
        { id: 'obs', col: 0, row: 1, k: 'cause', t: 'Se tapa la luz intestinal', s: 'Bridas, hernia, tumor o vólvulo' },
        { id: 'dol', col: 1, row: 0, k: 'effect', t: 'Dolor cólico', s: 'Periumbilical, intermitente' },
        { id: 'dis', col: 1, row: 1, k: 'effect', t: 'Distensión abdominal', s: 'Más marcada mientras más bajo' },
        { id: 'vom', col: 1, row: 2, k: 'effect', t: 'Vómitos', s: 'Precoces y biliosos si es alta' },
        { id: 'det', col: 2, row: 1, k: 'effect', t: 'No pasan gases ni heces', s: 'Signo tardío, pero constante' },
      ],
      edges: [
        { from: 'obs', to: 'dol' }, { from: 'obs', to: 'dis' }, { from: 'obs', to: 'vom' }, { from: 'obs', to: 'det' },
      ],
      steps: [
        { show: ['obs'], note: 'Delgado o colon: cambia toda la lógica',
          say: 'Todo parte de una obstrucción mecánica de la luz intestinal. Puede ser en el intestino delgado o en el colon, y esa diferencia va a cambiar toda tu lógica más adelante.' },
        { show: ['dol'], note: 'Cólico mientras el asa lucha por vencer el obstáculo',
          say: 'El primer síntoma es el dolor cólico, periumbilical, que va y viene mientras el intestino lucha por vencer el obstáculo. Acuérdate de esto, porque si ese dolor deja de ser intermitente y se vuelve continuo, es la primera alarma que vas a ver más adelante.' },
        { show: ['dis'], note: 'Poca en obstrucción alta, mucha en obstrucción baja',
          say: 'El segundo es la distensión abdominal: casi ausente si la obstrucción está muy alta, y masiva si está en el colon.' },
        { show: ['vom'], note: 'El momento del vómito te dice el nivel',
          say: 'El tercero son los vómitos: precoces y biliosos si la obstrucción es alta, y tardíos, incluso fecaloideos, si es baja. Fíjate que puedes usar el vómito solo para adivinar dónde está el problema.' },
        { show: ['det'], note: 'Llega tarde, pero siempre llega',
          say: 'Y el cuarto, la detención de gases y heces, es tardío pero constante en la obstrucción completa. Con estos cuatro síntomas juntos, ya tienes el diagnóstico clínico armado.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Al examen físico',
      title: 'Lo que nunca puedes dejar de revisar',
      cards: [
        { title: 'Auscultación', tag: 'Cambia con el tiempo', kind: 'key', items: [
          { t: 'Ruidos metálicos y bazuqueo', d: 'En la fase inicial, de lucha',
            say: 'Al principio auscultas ruidos hidroaéreos metálicos, aumentados, y bazuqueo gástrico: es el intestino luchando contra el obstáculo.' },
          { t: 'Silencio auscultatorio', d: 'Cuando el músculo ya se agotó',
            say: 'Con el tiempo, si el músculo se agota, esos ruidos desaparecen y quedas con un silencio casi total. No confundas ese silencio con mejoría: es justamente lo contrario.' },
        ] },
        { title: 'Nunca te lo saltes', tag: 'Los orificios herniarios', kind: 'alert', items: [
          { t: 'Palpar inguinal, crural, umbilical', d: 'Una hernia atascada se te puede escapar',
            say: 'Y hay un paso del examen que nunca puedes saltarte: palpar todos los orificios herniarios, inguinal, crural y umbilical. Una hernia atascada, no diagnosticada por no examinar bien, es un error grave y evitable.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Delgado vs colon',
      title: 'La misma clínica, causas distintas',
      nodes: [
        { id: 'niv', col: 0, row: 1, k: 'start', t: '¿Dónde está la obstrucción?', s: 'La radiografía simple orienta' },
        { id: 'del', col: 1, row: 0, k: 'cause', t: 'Intestino delgado', s: 'Asas centrales, en escalera' },
        { id: 'col', col: 1, row: 2, k: 'cause', t: 'Colon', s: 'Marco periférico dilatado' },
        { id: 'bri', col: 2, row: 0, k: 'effect', t: 'Bridas', s: 'La causa más frecuente, 60 a 70%' },
        { id: 'her', col: 3, row: 0, k: 'risk', t: 'Hernias', s: 'Segunda causa más frecuente' },
        { id: 'can', col: 2, row: 2, k: 'risk', t: 'Cáncer colorrectal', s: 'La causa más frecuente en colon' },
        { id: 'vol', col: 3, row: 2, k: 'trap', t: 'Vólvulo de sigmoides', s: 'Signo del grano de café' },
      ],
      edges: [
        { from: 'niv', to: 'del' }, { from: 'niv', to: 'col' },
        { from: 'del', to: 'bri' }, { from: 'del', to: 'her' },
        { from: 'col', to: 'can' }, { from: 'col', to: 'vol' },
      ],
      steps: [
        { show: ['niv'], note: 'Antes de pensar en causa, ubica el nivel',
          say: 'La radiografía simple de abdomen de pie te ayuda a ubicar el nivel antes de pensar en la causa.' },
        { show: ['del'], note: 'Asas al centro, con válvulas conniventes',
          say: 'Si es intestino delgado, ves asas dilatadas al centro del abdomen, con niveles hidroaéreos en escalera, y pliegues que cruzan todo el diámetro del asa.' },
        { show: ['bri'], note: 'Casi siempre hay una cirugía previa',
          say: 'Y la causa más frecuente, de lejos, son las bridas: adherencias de una cirugía abdominal previa. Busca siempre ese antecedente en la historia.' },
        { show: ['her'], note: 'La segunda causa, y la que más se olvida examinar',
          say: 'La segunda causa son las hernias externas atascadas, que es justo lo que buscas al palpar los orificios herniarios.' },
        { show: ['col'], note: 'Marco periférico, con haustras que no cruzan',
          say: 'Si en cambio es de colon, ves el marco dilatado en la periferia, con haustras que no cruzan todo el diámetro.' },
        { show: ['can'], note: 'La causa más frecuente en colon',
          say: 'Y aquí la causa más frecuente es el cáncer colorrectal, que obstruye progresivamente la luz.' },
        { show: ['vol'], note: 'Asa en omega, naciendo en la fosa ilíaca izquierda',
          say: 'La segunda causa en colon es el vólvulo de sigmoides, con el signo radiológico clásico del grano de café: un asa gigante en forma de omega que nace en la fosa ilíaca izquierda y sube hasta el hipocondrio derecho.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuando la radiografía no basta',
      title: 'El TAC: dónde está el obstáculo y si el asa sigue viva',
      cards: [
        { title: 'Zona de transición', tag: 'El TAC la encuentra con precisión', kind: 'key', items: [
          { t: 'Ubica el punto exacto', d: 'Y sugiere la causa: brida, tumor, cálculo',
            say: 'Cuando la radiografía simple no aclara el panorama, el TAC de abdomen y pelvis con contraste es el estándar de oro. Te muestra la zona de transición, el punto exacto donde el intestino sano pasa a estar dilatado, y muchas veces sugiere la causa: una brida, un tumor, o incluso un cálculo biliar migrado en un íleo biliar.' },
        ] },
        { title: 'Evalúa si el asa sigue viable', tag: 'Antes de que aparezca la clínica', kind: 'alert', items: [
          { t: 'Gas en la pared o porta', d: 'Ya hay necrosis, aunque se vea bien',
            say: 'Y algo muy importante: el TAC puede mostrarte que un asa ya perdió viabilidad, con gas dentro de la pared o en las ramas de la vena porta, incluso antes de que el examen físico te lo diga con claridad. Ese hallazgo, por sí solo, ya es indicación de cirugía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'La pregunta que más rinde',
      title: 'Estrangulación: cuándo ya no hay tiempo que perder',
      cards: [
        { title: 'Se rompió el mecanismo cólico', tag: 'El dolor cambia de carácter', kind: 'alert', items: [
          { t: 'Dolor continuo, no cólico', d: 'Refractario a la analgesia',
            say: 'Toda esta clínica cambia de golpe si aparece un dato: el dolor deja de ser cólico y se vuelve continuo, intenso, y no cede con analgesia. Eso te dice que el asa ya no solo está obstruida: perdió su irrigación.' },
        ] },
        { title: 'Se confirma con estos hallazgos', tag: 'Sepsis + isquemia', kind: 'criteria', items: [
          { t: 'Peritonismo, fiebre, taquicardia', d: 'Leucocitosis sobre 15.000',
            say: 'Se confirma con resistencia muscular involuntaria, fiebre sostenida, taquicardia desproporcionada, y leucocitosis marcada.' },
          { t: 'Acidosis con lactato elevado', d: 'El asa ya está haciendo metabolismo anaeróbico',
            say: 'Y el dato de laboratorio más específico: acidosis metabólica con lactato elevado. Eso significa que el intestino ya está sufriendo isquemia real, no solo obstrucción. Con cualquiera de estos signos, la conducta cambia de inmediato: laparotomía de urgencia, sin esperar nada más.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Bridas conservador, vólvulo endoscópico, estrangulación quirúrgico',
      nodes: [
        { id: 'sin', col: 0, row: 1, k: 'start', t: 'Sin signos de estrangulación', s: '¿Bridas o vólvulo?' },
        { id: 'bri2', col: 1, row: 0, k: 'good', t: 'Bridas', s: 'Manejo médico inicial' },
        { id: 'vol2', col: 1, row: 2, k: 'risk', t: 'Vólvulo de sigmoides', s: 'Sin necrosis ni peritonitis' },
        { id: 'sng', col: 2, row: 0, k: 'good', t: 'SNG + hidratación EV', s: '24 a 48 horas de observación' },
        { id: 'des', col: 2, row: 2, k: 'refer', t: 'Desvolvulación endoscópica', s: 'Con sonda rectal tutora' },
        { id: 'fal', col: 3, row: 1, k: 'alert', t: 'Falla o estrangulación', s: 'A cualquier hora' },
        { id: 'cir2', col: 4, row: 1, k: 'trap', t: 'Cirugía', s: 'Adhesiolisis o resección' },
      ],
      edges: [
        { from: 'sin', to: 'bri2' }, { from: 'sin', to: 'vol2' },
        { from: 'bri2', to: 'sng' }, { from: 'vol2', to: 'des' },
        { from: 'sng', to: 'fal', label: 'sin mejoría 48 a 72 h' },
        { from: 'des', to: 'fal', label: 'necrosis o falla' },
        { from: 'fal', to: 'cir2' },
      ],
      steps: [
        { show: ['sin'], note: 'Sin estrangulación, el manejo es distinto según la causa',
          say: 'Sin ningún signo de estrangulación, el manejo depende de la causa.' },
        { show: ['bri2'], note: 'La mayoría resuelve sola',
          say: 'Con bridas, el tratamiento inicial es médico conservador.' },
        { show: ['sng'], note: 'Sonda nasogástrica a caída libre',
          say: 'Sonda nasogástrica a caída libre, para descomprimir el estómago, más hidratación endovenosa agresiva, con vigilancia clínica estricta. Entre setenta y ochenta de cada cien resuelven así, sin necesidad de cirugía, en veinticuatro a cuarenta y ocho horas.' },
        { show: ['vol2'], note: 'Sin necrosis, se puede resolver sin cortar',
          say: 'Con vólvulo de sigmoides, siempre que no haya necrosis ni peritonitis, la conducta es distinta.' },
        { show: ['des'], note: 'Éxito en más del 80%, pero recidiva mucho',
          say: 'Desvolvulación endoscópica urgente, con una sonda rectal que se deja como tutor. Funciona en más del ochenta por ciento de los casos, pero la recidiva supera el cincuenta por ciento, así que programas una sigmoidectomía electiva en la misma hospitalización.' },
        { show: ['fal'], note: 'Aquí ya no hay plazo que valga',
          say: 'Y si en cualquiera de los dos caminos aparece necrosis, peritonitis, o simplemente no hay mejoría pasado el plazo, la conducta cambia de inmediato a cirugía.' },
        { show: ['cir2'], note: 'Adhesiolisis en bridas, Hartmann en vólvulo necrosado',
          say: 'En bridas, laparotomía o laparoscopía con adhesiolisis. En un vólvulo con mucosa necrótica, operación de Hartmann. La regla que une todo esto: el tiempo de espera es para el que no tiene signos de alarma, nunca para el que sí los tiene.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cáncer colorrectal obstructivo',
      title: 'Cuando la causa es un tumor, no una brida',
      cards: [
        { title: 'Asa cerrada y peligrosa', tag: 'Riesgo de perforación cecal', kind: 'alert', items: [
          { t: 'Válvula ileocecal continente', d: 'El ciego no se descomprime hacia el delgado',
            say: 'Cuando el cáncer de colon obstruye y la válvula ileocecal sigue cerrada, el colon queda como un asa cerrada: la presión no se descomprime hacia el intestino delgado, y todo el aumento de presión se concentra en el ciego.' },
          { t: 'Ciego sobre 10 a 12 cm', d: 'Riesgo inminente de perforación diastásica',
            say: 'Si el ciego se dilata por encima de diez a doce centímetros, el riesgo de que se perfore por el simple estiramiento de la pared, sin necesidad de estrangularse, es inminente. Ese número es justo el que se pregunta.' },
        ] },
        { title: 'Tratamiento', tag: 'Cirugía o puente con stent', kind: 'pharma', items: [
          { t: 'Resección con colostomía', d: 'O stent colónico como puente a cirugía',
            say: 'El tratamiento es quirúrgico: resección oncológica con colostomía tipo Hartmann, o en centros con experiencia, un stent colónico autoexpandible que descomprime primero, y permite operar después de forma electiva, con mejor preparación del paciente.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Delgado, colon y vólvulo: lo que más se confunde',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Bridas, sin estrangulación', 'SNG + hidratación EV, 24 a 48 h', 'Laparotomía inmediata'],
          say: 'Repasemos las trampas. Bridas sin estrangulación: sonda nasogástrica e hidratación, veinticuatro a cuarenta y ocho horas. Operar de inmediato, sin darle esa ventana, es intervencionismo de más.' },
        { cells: ['Vólvulo no complicado', 'Desvolvulación endoscópica', 'Cirugía de entrada'],
          say: 'Vólvulo no complicado: desvolvulación endoscópica primero. Ir directo a cirugía, sin intentarlo, te suma una colostomía que se pudo evitar.' },
        { cells: ['Dolor continuo, fiebre, lactato alto', 'Laparotomía urgente, sin demora', 'Seguir con manejo conservador'],
          say: 'Dolor continuo con fiebre y lactato alto: laparotomía urgente, sin demora. Seguir con sonda y suero cuando ya hay estrangulación es el error más grave de todo el tema.' },
        { cells: ['Mujer añosa, sin cirugías previas', 'Buscar hernia crural', 'Asumir que son bridas'],
          say: 'Y en una mujer mayor, sin cirugías previas, no asumas bridas: busca una hernia crural, que es más frecuente en mujeres y tiene alto riesgo de estrangularse.' },
        { cells: ['Ciego mayor a 10 a 12 cm en cáncer obstructivo', 'Cirugía urgente o stent puente', 'Esperar a que aparezca peritonitis'],
          say: 'Y con el ciego sobre diez a doce centímetros por un cáncer obstructivo: cirugía urgente o stent como puente. Esperar a que aparezca peritonitis para actuar es esperar a que ya haya perforado.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 68 años, con antecedente de cirugía abdominal hace 15 años, consulta por dolor cólico, distensión y vómitos biliosos de 20 horas de evolución, sin eliminar gases ni deposiciones. Afebril, hemodinámicamente estable, abdomen distendido con ruidos hidroaéreos metálicos aumentados, sin signos de irritación peritoneal.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Laparotomía exploradora de urgencia' },
        { letter: 'B', text: 'Sonda nasogástrica a caída libre, hidratación endovenosa y observación' },
        { letter: 'C', text: 'Colonoscopía descompresiva de urgencia' },
        { letter: 'D', text: 'Enemas evacuantes repetidos y laxantes orales' },
        { letter: 'E', text: 'Antibióticos de amplio espectro y alta con control ambulatorio' },
      ],
      correct: 'B',
      explanation: 'Obstrucción intestinal por bridas, sin signos de estrangulación (afebril, estable, sin peritonismo). El tratamiento inicial es médico conservador: sonda nasogástrica, hidratación endovenosa y vigilancia clínica durante 24 a 48 horas, ya que 70 a 80% resuelve sin cirugía.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y ocho años, operado del abdomen hace quince años, con dolor cólico, distensión y vómitos biliosos de veinte horas de evolución, sin eliminar gases ni deposiciones. Está afebril y estable, con ruidos hidroaéreos metálicos aumentados, sin signos de irritación peritoneal.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Tienes cinco opciones: laparotomía de urgencia, sonda nasogástrica con hidratación y observación, colonoscopía descompresiva, enemas y laxantes, o antibióticos con alta ambulatoria. Piénsalo.',
        answer: 'Es la B. El antecedente de cirugía abdominal apunta a bridas, y no hay ningún signo de estrangulación: está afebril, estable y sin peritonismo. El manejo inicial es conservador, con sonda nasogástrica e hidratación, dándole veinticuatro a cuarenta y ocho horas antes de pensar en cirugía. La colonoscopía no tiene ningún rol aquí, porque el problema está en el intestino delgado, no en el colon.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 59',
      stem: 'Un paciente de 60 años, que hace tres años se habría realizado una colecistectomía con coledocostomía, consulta por cuadro de dolor abdominal tipo cólico intenso, asociado a vómitos alimentarios. No ha podido eliminar gases. Al examen físico presenta dolor difuso a la palpación abdominal, ruidos hidroaéreos aumentados en intensidad y tonalidad, con Blumberg presente.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Obstrucción intestinal' },
        { letter: 'B', text: 'Trombosis venosa mesentérica' },
        { letter: 'C', text: 'Embolia mesentérica' },
        { letter: 'D', text: 'Pancreatitis' },
        { letter: 'E', text: 'Diverticulitis' },
      ],
      correct: 'A',
      explanation: 'El antecedente de cirugía abdominal previa (colecistectomía con coledocostomía) sumado a dolor cólico, vómitos, detención de gases y ruidos hidroaéreos metálicos aumentados es la presentación clásica de obstrucción intestinal por bridas.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecisiete. Un paciente de sesenta años, operado hace tres años de una colecistectomía con exploración de la vía biliar, consulta por dolor cólico intenso y vómitos alimentarios, sin eliminar gases. Al examen, dolor difuso, ruidos hidroaéreos aumentados en intensidad y tono, con Blumberg presente.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: obstrucción intestinal, trombosis venosa mesentérica, embolia mesentérica, pancreatitis, o diverticulitis. Piénsalo.',
        answer: 'Es la A. El antecedente de cirugía abdominal previa es la pista central: eso te lleva directo a pensar en bridas. Sumado al dolor cólico, los vómitos y la detención de gases, el cuadro es una obstrucción intestinal clásica, mucho más frecuente que cualquiera de los diagnósticos vasculares de las otras opciones. La trombosis y la embolia mesentérica suelen dar un dolor desproporcionado al examen, no este patrón de ruidos de lucha aumentados.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 144',
      stem: 'Una paciente de 60 años consulta por aumento de volumen en la cara anterior del muslo, en ocasiones doloroso, asociado a náuseas y dolor abdominal. Al examen físico se aprecia dicho aumento de volumen por debajo del ligamento inguinal.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Linfoma' },
        { letter: 'B', text: 'Hernia inguinal' },
        { letter: 'C', text: 'Adenopatía metastásica' },
        { letter: 'D', text: 'Hernia femoral' },
        { letter: 'E', text: 'Sarcoma de partes blandas' },
      ],
      correct: 'D',
      explanation: 'El aumento de volumen ubicado por debajo del ligamento inguinal, asociado a síntomas de obstrucción intestinal (náuseas y dolor abdominal), corresponde a una hernia femoral o crural, mucho más frecuente en mujeres y con el mayor riesgo de estrangulación de todas las hernias de la pared abdominal.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Mujer de sesenta años, con un aumento de volumen en la cara anterior del muslo, a veces doloroso, junto con náuseas y dolor abdominal. Al examen, ese aumento de volumen está por debajo del ligamento inguinal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: linfoma, hernia inguinal, adenopatía metastásica, hernia femoral, o sarcoma de partes blandas. Piénsalo.',
        answer: 'Es la D, hernia femoral. La ubicación es la clave: por debajo del ligamento inguinal, no sobre él como la inguinal. Súmale que es mujer y que tiene síntomas de obstrucción, y el diagnóstico queda prácticamente cerrado. Acuérdate de esta hernia: es la que tiene más riesgo de estrangularse de todas.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Causas', tag: 'Delgado vs colon', kind: 'key', items: [
          { t: 'Delgado: bridas y hernias', d: 'Colon: cáncer y vólvulo',
            say: 'Cerremos con las reglas de oro. En el intestino delgado, piensa primero en bridas, y luego en hernias. En el colon, piensa primero en cáncer, y luego en vólvulo.' },
        ] },
        { title: 'Tratamiento', tag: 'Según la causa', kind: 'pharma', items: [
          { t: 'Bridas: sonda y sueros', d: 'Vólvulo: desvolvulación endoscópica',
            say: 'Bridas sin estrangulación: sonda nasogástrica y sueros. Vólvulo sin necrosis: desvolvulación endoscópica primero.' },
        ] },
        { title: 'Lo que no puede esperar', tag: 'Estrangulación', kind: 'alert', items: [
          { t: 'Dolor continuo, fiebre, lactato alto', d: 'Laparotomía de urgencia, ya',
            say: 'Y ante dolor continuo, fiebre, peritonismo o lactato alto, no hay plazo que valga: laparotomía de urgencia. Si te llevas una sola idea de hoy: el tiempo es tu aliado sin estrangulación, y tu enemigo apenas aparece. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Obstrucción intestinal: de la clínica a la cirugía',
    root: N('start', 'Sospecha de obstrucción intestinal', 'Dolor cólico, distensión, vómitos y sin gases',
      'Llega un paciente con el tetraedro clásico. Antes de pensar en la causa, revisa si hay algún signo de estrangulación.',
      ['', N('q', '¿Hay dolor continuo, fiebre, peritonismo o lactato alto?', 'La estrangulación manda sobre todo lo demás',
        'Cualquiera de estos signos cambia la conducta de inmediato, sin importar la causa.',
        ['Sí, hay estrangulación', N('alert', 'Laparotomía de urgencia', 'Sin esperar ninguna otra evaluación',
          'Con signos de estrangulación, operas de inmediato: el asa ya está perdiendo su irrigación.')],
        ['No, sin signos de alarma', N('q', '¿Dónde está el nivel de la obstrucción?', 'La radiografía simple orienta',
          'Sin estrangulación, ahora sí decides según dónde está el problema.',
          ['Intestino delgado', N('do', 'SNG + hidratación EV', '24 a 48 horas de observación',
            'Sin estrangulación, el manejo de las bridas es conservador: sonda nasogástrica e hidratación, con vigilancia estricta.')],
          ['Colon, signo del grano de café', N('refer', 'Desvolvulación endoscópica', 'Con sonda rectal tutora',
            'Un vólvulo de sigmoides sin necrosis se resuelve endoscópicamente primero, dejando la sigmoidectomía para después.')])])],
      ['', N('q', '¿Palpaste los orificios herniarios?', 'Nunca te lo saltes',
        'Antes de cerrar el diagnóstico en bridas, confirma que no se te escapó una hernia externa.',
        ['Hernia atascada', N('alert', 'Hernioplastia urgente', 'O resección si hay necrosis',
          'Una hernia inguinal, crural o umbilical atascada necesita cirugía urgente, con especial cuidado en la crural por su alto riesgo de necrosis.')])]),
  },
};
