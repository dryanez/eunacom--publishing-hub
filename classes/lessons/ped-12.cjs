// Clase ped-12 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_pediatria_bloque_3.cjs (ped-12).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'De la regurgitación sin importancia a la urgencia que no puedes dejar pasar',
      say: 'Bienvenido. Hoy vemos los vómitos del lactante, desde el reflujo fisiológico, que no necesita nada, hasta la estenosis hipertrófica del píloro y la invaginación intestinal, que sí son urgencias. Vas a aprender a separarlos con dos preguntas simples: la edad del niño, y si el vómito tiene bilis o no. Empecemos.',
    },

    {
      type: 'flow',
      kicker: 'Dos preguntas que ordenan todo',
      title: '¿Bilioso, y a qué edad?',
      nodes: [
        { id: 'vom', col: 0, row: 1, k: 'start', t: 'Lactante con vómitos', s: 'Antes de nada, mira el color' },
        { id: 'bil', col: 1, row: 0, k: 'alert', t: 'Vómito bilioso, verde', s: 'Urgencia quirúrgica hasta descartarla' },
        { id: 'nob', col: 1, row: 2, k: 'q', t: 'Vómito no bilioso', s: 'Ahora la edad decide' },
        { id: 'rge', col: 2, row: 0, k: 'good', t: 'Menor de 6 meses, sin dolor', s: 'Reflujo fisiológico' },
        { id: 'ehp', col: 2, row: 1, k: 'risk', t: '2 a 8 semanas, en proyectil', s: 'Estenosis hipertrófica del píloro' },
        { id: 'inv', col: 2, row: 2, k: 'alert', t: '3 a 12 meses, dolor cólico', s: 'Invaginación intestinal' },
      ],
      edges: [
        { from: 'vom', to: 'bil' }, { from: 'vom', to: 'nob' },
        { from: 'nob', to: 'rge' }, { from: 'nob', to: 'ehp' }, { from: 'nob', to: 'inv' },
      ],
      steps: [
        { show: ['vom'], note: 'Lo primero es mirar el color',
          say: 'Tienes un lactante que vomita. Antes de pensar en cualquier diagnóstico, mira el color del vómito, porque esa sola observación te separa un susto de una urgencia real.' },
        { show: ['bil'], note: 'Verde es sinónimo de urgencia',
          say: 'Si el vómito es bilioso, de color verde, trátalo como una urgencia quirúrgica hasta que la descartes. En el recién nacido, eso te obliga a pensar en un vólvulo por malrotación intestinal.' },
        { show: ['nob'], note: 'Ahora sí, la edad te da el diagnóstico',
          say: 'Si el vómito no es bilioso, la siguiente pregunta es la edad, y con eso ya casi tienes el diagnóstico.' },
        { show: ['rge'], note: 'El regurgitador feliz',
          say: 'Menor de seis meses, sin dolor, y con buena ganancia de peso: es reflujo fisiológico, el llamado regurgitador feliz.' },
        { show: ['ehp'], note: 'El vomitador hambriento',
          say: 'Entre dos y ocho semanas, con vómito en proyectil y un niño que después pide comer con desesperación: piensa en la estenosis hipertrófica del píloro.' },
        { show: ['inv'], note: 'El del dolor que va y viene',
          say: 'Y entre tres y doce meses, con crisis de dolor cólico intenso: piensa en la invaginación intestinal. Vamos a ver cada uno con calma.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Reflujo fisiológico',
      title: 'El regurgitador feliz: no necesita nada',
      cards: [
        { title: 'Cómo lo reconoces', tag: 'Menor de 6 meses', kind: 'criteria', items: [
          { t: 'Regurgita leche sin digerir', d: 'Sin dolor, sin esfuerzo',
            say: 'Empecemos por el más tranquilo. Más de la mitad de los menores de seis meses regurgita leche después de comer, sin dolor y sin esfuerzo.' },
          { t: 'Sube de peso con normalidad', d: 'Y su desarrollo es completamente normal',
            say: 'Y lo que confirma que es benigno es esto: sube de peso con normalidad y su desarrollo es el esperado para su edad. Eso es lo que hace la diferencia con todo lo que viene después.' },
        ] },
        { title: 'Manejo', tag: 'Tranquilizar, no medicar', kind: 'key', items: [
          { t: 'Posición erguida tras comer', d: 'Veinte a treinta minutos, y fraccionar tomas',
            say: 'El manejo es simple: tranquilizas a la familia, y le pides mantenerlo erguido veinte a treinta minutos después de cada toma, fraccionando las comidas.' },
          { t: 'Nada de fármacos', d: 'Ni inhibidores de bomba, ni procinéticos',
            say: 'Y aquí está el dato que se pregunta: nada de fármacos. Ni inhibidores de la bomba de protones ni procinéticos, porque este niño no los necesita, y se le va a pasar solo antes del año.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estenosis hipertrófica del píloro',
      title: 'El lactante hambriento que vomita a chorro',
      cards: [
        { title: 'Clínica', tag: 'Varón, 3 a 5 semanas', kind: 'criteria', items: [
          { t: 'Vómito postprandial en proyectil', d: 'Nunca con bilis, sale con fuerza',
            say: 'Ahora sí, una urgencia. La estenosis hipertrófica del píloro afecta más a varones, entre las tres y cinco semanas de vida. El vómito sale con fuerza, a chorro, después de comer, y nunca tiene bilis.' },
          { t: 'Pide comer de nuevo', d: 'Con desesperación, apenas termina de vomitar',
            say: 'Y el dato que lo distingue de cualquier otra causa: apenas termina de vomitar, quiere volver a mamar, con desesperación. No perdió el apetito, al contrario.' },
        ] },
        { title: 'Laboratorio y examen', tag: 'El dato patognomónico', kind: 'key', items: [
          { t: 'Alcalosis metabólica hipoclorémica', d: 'Con potasio bajo, por vomitar tanto ácido',
            say: 'Pierde tanto ácido clorhídrico al vomitar que desarrolla una alteración muy característica: alcalosis metabólica, con el cloro y el potasio bajos.' },
          { t: 'Ecografía abdominal confirma', d: 'Músculo engrosado y canal alargado',
            say: 'Y el examen que confirma el diagnóstico es la ecografía abdominal. Mira esta imagen: el músculo pilórico engrosado y el canal alargado. No necesitas nada más invasivo.',
            photo: { src: 'biblioteca/15_pediatria/ped-12/01_eco-piloro__cto-pediatria_p65.jpg', label: 'Píloro engrosado', at: 'Mira esta imagen', credit: 'Manual CTO Pediatría 14.ª ed., p. 65' } },
        ] },
        { title: 'Tratamiento', tag: 'Orden que se pregunta siempre', kind: 'pharma', items: [
          { t: 'Primero corriges el electrolito', d: 'Nunca operes con la alcalosis sin corregir',
            say: 'Y aquí está la secuencia que más se pregunta: antes de operar, corriges por completo la deshidratación y la alcalosis. Operar con el electrolito alterado puede darle apnea con la anestesia.' },
          { t: 'Luego, piloromiotomía de Ramstedt', d: 'Es electiva, no de urgencia inmediata',
            say: 'Recién después vas a la cirugía, la piloromiotomía de Ramstedt. Es electiva: puede esperar esas horas que te toma corregir al paciente.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Invaginación intestinal',
      title: 'El dolor que va y viene, y la jalea de grosella',
      nodes: [
        { id: 'edad', col: 0, row: 1, k: 'start', t: 'Lactante 3 a 12 meses', s: 'El pico es entre 6 y 9 meses' },
        { id: 'dol', col: 1, row: 0, k: 'effect', t: 'Dolor cólico en crisis', s: 'Llora, encoge las piernas, palidece' },
        { id: 'cal', col: 1, row: 1, k: 'good', t: 'Entre crisis, se calma', s: 'Incluso queda letárgico o dormido' },
        { id: 'vom', col: 1, row: 2, k: 'risk', t: 'Vómitos biliosos', s: 'Signo más tardío que el dolor' },
        { id: 'jal', col: 2, row: 1, k: 'alert', t: 'Jalea de grosella', s: 'Sangre y moco, signo tardío' },
        { id: 'eco', col: 3, row: 1, k: 'good', t: 'Ecografía: imagen en diana', s: 'El estándar de oro' },
      ],
      edges: [
        { from: 'edad', to: 'dol' }, { from: 'dol', to: 'cal' }, { from: 'dol', to: 'vom' },
        { from: 'vom', to: 'jal' }, { from: 'jal', to: 'eco' },
      ],
      steps: [
        { show: ['edad'], note: 'La causa más frecuente de obstrucción a esta edad',
          say: 'La invaginación intestinal es la causa más frecuente de obstrucción intestinal entre los tres meses y los dos años, con su pico entre los seis y los nueve meses.' },
        { show: ['dol'], note: 'La crisis es inconfundible',
          say: 'La crisis es inconfundible: el niño llora fuerte, de la nada, encoge las piernas sobre el abdomen, y se pone pálido.' },
        { show: ['cal'], note: 'Y eso engaña a muchos padres',
          say: 'Y después de diez o quince minutos, se calma solo, y hasta queda letárgico o dormido. Eso engaña a muchos padres, que piensan que ya pasó, pero la crisis vuelve.' },
        { show: ['vom'], note: 'Empiezan alimentarios, después con bilis',
          say: 'Los vómitos empiezan siendo de contenido alimentario, y después se vuelven biliosos, porque la obstrucción ya es mecánica y más distal.' },
        { show: ['jal'], note: 'Un signo tardío, no esperes verlo siempre',
          say: 'La deposición en jalea de grosella, con sangre oscura y moco, es un signo tardío. No necesitas esperarla para sospechar: la tríada del dolor cólico y los vómitos ya te tiene que alertar antes. Mira este pañal: la deposición viene manchada con sangre.',
          photo: { src: 'biblioteca/15_pediatria/ped-12/04_invaginacion-sangre-panal__knoop_p500.jpg', label: 'Sangre en el pañal', at: 'Mira este pañal', credit: 'The Atlas of Emergency Medicine (Knoop), p. 500' } },
        { show: ['eco'], note: 'Imagen en diana, en dona, o en pseudoriñón',
          say: 'El examen de elección es la ecografía abdominal, que muestra la clásica imagen en diana: en esta ecografía se ven los anillos concéntricos del intestino que se metió dentro de otro. Con eso confirmas el diagnóstico y decides el tratamiento, que viene ahora.',
          photo: { src: 'biblioteca/15_pediatria/ped-12/02_invaginacion-eco__cto-pediatria_p70.jpg', label: 'Imagen en diana', at: 'en esta ecografía', credit: 'Manual CTO Pediatría 14.ª ed., p. 70' } },
      ],
    },

    {
      type: 'points',
      kicker: 'Invaginación intestinal',
      title: 'Tratamiento: reducir antes de operar',
      cards: [
        { title: 'Primera línea', tag: 'Sin peritonitis', kind: 'key', items: [
          { t: 'Reducción neumática o hidrostática', d: 'Guiada por ecografía, es lo primero',
            say: 'Si no hay peritonitis ni perforación, la primera línea es la reducción neumática o hidrostática, guiada por ecografía. Resuelve la mayoría de los casos sin pasar por pabellón.' },
        ] },
        { title: 'Cuándo operar', tag: 'Si el enema falla', kind: 'alert', items: [
          { t: 'Peritonitis o perforación', d: 'O si el enema no logra reducirla',
            say: 'Vas a cirugía si hay signos de peritonitis, perforación, o si el enema simplemente no logra reducir la invaginación.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Abdomen agudo pediátrico',
      title: 'La edad orienta la causa',
      cards: [
        { title: 'Recién nacido', tag: 'Obstrucción y necrosis', kind: 'alert', items: [
          { t: 'Vólvulo, atresias, Hirschsprung', d: 'Enterocolitis necrotizante, íleo meconial',
            say: 'Cuando el vómito bilioso o el dolor abdominal se vuelve un abdomen agudo, la edad orienta la causa. En el recién nacido piensa en enterocolitis necrotizante, atresias, malrotación con vólvulo, enfermedad de Hirschsprung e íleo meconial.' },
        ] },
        { title: 'Lactante', tag: 'Tres a doce meses', kind: 'criteria', items: [
          { t: 'Invaginación y hernia atascada', d: 'También vólvulo',
            say: 'En el lactante, la invaginación intestinal que ya vimos, la hernia inguinal estrangulada y el vólvulo.' },
        ] },
        { title: 'Preescolar a adolescente', tag: 'Aparece la apendicitis', kind: 'key', items: [
          { t: 'Apendicitis aguda', d: 'La causa quirúrgica más frecuente',
            say: 'En el preescolar y el escolar, lo más frecuente es la apendicitis aguda, que es la causa quirúrgica número uno. Se suman la adenitis mesentérica, el divertículo de Meckel, la peritonitis primaria del síndrome nefrótico y el trauma.' },
          { t: 'Adolescente: torsión, EIP, ectópico', d: 'Además de apendicitis',
            say: 'En el adolescente, además de la apendicitis, piensa en torsión testicular u ovárica, enfermedad inflamatoria pélvica y embarazo ectópico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Abdomen agudo pediátrico',
      title: 'Claves, exámenes y primer manejo',
      cards: [
        { title: 'Claves de la evaluación', tag: 'Qué buscas', kind: 'key', items: [
          { t: 'Vómito bilioso: obstrucción', d: 'Derivación urgente',
            say: 'Primero, las claves. El vómito bilioso es obstrucción intestinal, malrotación con vólvulo, hasta que se demuestre lo contrario, y exige derivar de urgencia.' },
          { t: 'En apendicitis, el dolor va primero', d: 'Migra a la fosa ilíaca derecha; en gastroenteritis, al revés',
            say: 'En la apendicitis, el dolor precede a los vómitos: parte en el epigastrio o alrededor del ombligo y migra a la fosa ilíaca derecha. En la gastroenteritis ocurre lo contrario, primero vomita. Buscas defensa, rebote y los signos de Rovsing, del psoas y del obturador; y en el niño pequeño, miras cómo camina y si le duele al saltar o toser.' },
          { t: 'Siempre genitales e ingles', d: 'Para no perder una torsión o una hernia',
            say: 'Y siempre examinas los genitales y las regiones inguinales, para no perder una torsión o una hernia.' },
        ] },
        { title: 'Exámenes', tag: 'Eco primero', kind: 'criteria', items: [
          { t: 'Ecografía abdominal', d: 'Apéndice > 6 mm, no compresible; diana en invaginación',
            say: 'Los exámenes: hemograma, proteína C reactiva y orina completa. La ecografía abdominal muestra, en la apendicitis, un apéndice no compresible de más de seis milímetros con grasa alrededor brillante, y en la invaginación, el signo de la diana.' },
          { t: 'Radiografía y TAC', d: 'TAC solo si hay duda o trauma',
            say: 'La radiografía de abdomen muestra niveles hidroaéreos, neumoperitoneo o la doble burbuja de la atresia duodenal. Mira esta radiografía de un recién nacido: dos burbujas de aire, el estómago y el duodeno dilatado. El TAC lo reservas para cuando hay duda o trauma.',
            photo: { src: 'biblioteca/15_pediatria/ped-12/03_doble-burbuja-atresia-duodenal__bailey_p155.jpg', label: 'Doble burbuja', at: 'Mira esta radiografía', credit: "Bailey & Love's Short Practice of Surgery, 27.ª ed., Fig. 9.24" } },
        ] },
        { title: 'Manejo inicial', tag: 'Inicial y derivar', kind: 'pharma', items: [
          { t: 'Ayuno, vía venosa, analgesia', d: 'La analgesia no enmascara el cuadro',
            say: 'El manejo inicial es ayuno, vía venosa e hidratación, y analgesia, que no enmascara el cuadro. Si sospechas apendicitis complicada o peritonitis, agregas ceftriaxona más metronidazol, y derivas a cirugía infantil.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Una nota del Perfil',
      title: 'Displasia broncopulmonar: sospecha y derivación',
      cards: [
        { title: 'El código repetido', tag: '2.01.1.046', kind: 'criteria', items: [
          { t: 'Dependencia de oxígeno en el prematuro', d: 'A los 28 días y a las 36 semanas postmenstruales',
            say: 'Una nota rápida: en el Perfil de la prueba, este mismo código aparece también para la displasia broncopulmonar. Es la dependencia de oxígeno a los veintiocho días de vida y a las treinta y seis semanas de edad postmenstrual, en el prematuro menor de treinta y dos semanas.' },
          { t: 'Sospecha y deriva', d: 'Taquipnea y retracciones con oxígeno persistente',
            say: 'Se sospecha en todo prematuro que sigue con oxígeno, taquipnea y retracciones, y tu conducta es derivar a neonatología o a broncopulmonar. El desarrollo completo está en la clase de dificultad respiratoria neonatal.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: "Píloro engrosado",
      images: [
        { src: 'animaciones/ped-12/A1_estenosis_piloro.mp4', label: "Por qué vomita a chorro", credit: "Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios" },
      ],
      steps: [
        { note: "La leche no pasa",
          say: "Mira el píloro de este estómago: el músculo engrosado cierra el canal. La leche llena el estómago, y las ondas peristálticas empujan contra una puerta cerrada. Entonces sale hacia arriba, en proyectil y sin bilis, y el lactante pide comer de nuevo con desesperación. Por perder tanto ácido queda con alcalosis metabólica hipoclorémica. Primero corriges el electrolito; después, la piloromiotomía de Ramstedt." },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos las tres causas en un solo árbol, con la edad y el color del vómito como guía.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que más se confunde entre estas tres causas',
      head: ['Cuadro', 'Clave clínica', 'Conducta'],
      rows: [
        { cells: ['Reflujo fisiológico', 'Sin dolor, buen peso, menor de 6 meses', 'Medidas posturales, sin fármacos'],
          say: 'Repasemos las trampas. Reflujo fisiológico: sin dolor, buen peso, menor de seis meses. La conducta son medidas posturales, sin fármacos.' },
        { cells: ['Estenosis hipertrófica del píloro', 'Proyectil, hambriento, alcalosis hipoclorémica', 'Corregir electrolitos, luego piloromiotomía'],
          say: 'Estenosis del píloro: vómito en proyectil, niño hambriento, y alcalosis hipoclorémica. Primero corriges los electrolitos, y recién después la piloromiotomía.' },
        { cells: ['Invaginación intestinal', 'Dolor cólico en crisis, jalea de grosella', 'Ecografía y reducción neumática'],
          say: 'Invaginación intestinal: dolor cólico en crisis, y jalea de grosella como signo tardío. Ecografía para confirmar, y reducción neumática para tratarla.' },
        { cells: ['Vómito bilioso en el recién nacido', 'Vólvulo por malrotación hasta descartarlo', 'Cirugía de urgencia inmediata'],
          say: 'Y el vómito bilioso en el recién nacido: es un vólvulo por malrotación hasta que lo descartes, y va a cirugía de urgencia inmediata.' },
        { cells: ['Apendicitis (escolar)', 'Dolor que migra a fosa ilíaca derecha y luego vómitos', 'Ecografía, ayuno, antibiótico si es complicada, cirugía'],
          say: 'En el escolar con abdomen agudo, la apendicitis: el dolor migra a la fosa ilíaca derecha y los vómitos vienen después. Ecografía, ayuno, y cirugía; con ceftriaxona más metronidazol si está complicada.' },
        { cells: ['Dolor abdominal agudo en cualquier niño', 'Examinar genitales e ingles', 'Descartar torsión y hernia'],
          say: 'Y en cualquier niño con dolor abdominal agudo, siempre examinas los genitales y las ingles, para no perder una torsión o una hernia.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante varón de 4 semanas, primogénito, con vómitos postprandiales que han ido aumentando en intensidad hasta salir con fuerza, en proyectil. El vómito es de leche cortada, sin color verde. Tras vomitar, llora buscando mamar de nuevo. Su peso está estancado desde el nacimiento.',
      question: '¿Cuál es el examen de elección para confirmar el diagnóstico?',
      options: [
        { letter: 'A', text: 'pH-metría esofágica de 24 horas' },
        { letter: 'B', text: 'Ecografía abdominal dirigida al píloro' },
        { letter: 'C', text: 'Enema baritado con fluoroscopía' },
        { letter: 'D', text: 'Endoscopía digestiva alta' },
        { letter: 'E', text: 'Colonoscopía con biopsia' },
      ],
      correct: 'B',
      explanation: 'Varón de 4 semanas con vómitos en proyectil no biliosos, avidez por alimentarse y peso estancado: estenosis hipertrófica del píloro. El examen de elección es la ecografía abdominal, que muestra el músculo pilórico engrosado.',
      say: {
        stem: 'Vamos con un caso. Lactante varón de cuatro semanas, primogénito, con vómitos después de comer que han ido aumentando hasta salir con fuerza, en proyectil. El vómito es de leche cortada, sin color verde. Después de vomitar, llora buscando mamar de nuevo. Su peso está estancado desde que nació.',
        question: '¿Cuál es el examen de elección para confirmar el diagnóstico?',
        options: 'Las opciones: pH-metría esofágica, ecografía abdominal dirigida al píloro, enema baritado, endoscopía digestiva alta, o colonoscopía con biopsia. Piénsalo.',
        answer: 'Es la B. Todo el cuadro apunta a la estenosis hipertrófica del píloro: vómito en proyectil sin bilis, hambre voraz, y peso estancado. El examen que confirma el diagnóstico, sin necesidad de nada invasivo, es la ecografía abdominal dirigida al píloro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 155',
      stem: 'Niño de 28 días con vómitos después de comer, que iniciaron hace una semana y han aumentado en frecuencia e intensidad. La madre refiere que llora después de comer y vomitar, y se observa que no ha incrementado bien de peso, algo enflaquecido.',
      question: '¿Cuál es el examen de elección para iniciar el estudio en este paciente?',
      options: [
        { letter: 'A', text: 'Radiografía baritada de esófago, estómago y duodeno' },
        { letter: 'B', text: 'Ecografía abdominal' },
        { letter: 'C', text: 'Endoscopía digestiva alta con biopsia duodenal' },
        { letter: 'D', text: 'Colonoscopía con biopsia de la pared intestinal' },
        { letter: 'E', text: 'Radiografía simple toracoabdominal' },
      ],
      correct: 'B',
      explanation: 'Lactante de 28 días con vómitos postprandiales, llanto tras alimentarse y mal incremento ponderal: cuadro compatible con estenosis hipertrófica del píloro. El examen de elección para iniciar el estudio es la ecografía abdominal.',
      say: {
        stem: 'Una pregunta real, del EUNACOM de diciembre de dos mil dieciocho. Niño de veintiocho días con vómitos después de comer, que empezaron hace una semana y han ido aumentando. La madre cuenta que llora después de comer y de vomitar, y se ve que no ha subido bien de peso, algo enflaquecido.',
        question: '¿Cuál es el examen de elección para iniciar el estudio en este paciente?',
        options: 'Las opciones: radiografía baritada de esófago, estómago y duodeno, ecografía abdominal, endoscopía digestiva alta con biopsia, colonoscopía con biopsia, o radiografía simple toracoabdominal. Piénsalo.',
        answer: 'Es la B. El cuadro, con la edad, el vómito postprandial y el mal incremento de peso, apunta a una estenosis hipertrófica del píloro, y el examen de elección para estudiarla es la ecografía abdominal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 130',
      stem: 'Recién nacido de 4 semanas con vómitos postprandiales abundantes desde hace una semana, asociados a detención del incremento ponderal. La madre refiere que lo nota hambriento y que toma leche con avidez.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar radiografía de abdomen simple' },
        { letter: 'B', text: 'Realizar tratamiento endoscópico' },
        { letter: 'C', text: 'Observar la evolución' },
        { letter: 'D', text: 'Realizar piloromiotomía de Ramstedt' },
        { letter: 'E', text: 'Realizar funduplicatura gástrica' },
      ],
      correct: 'D',
      explanation: 'Cuadro clásico de estenosis hipertrófica del píloro. Lo ideal sería confirmar primero con ecografía, pero de las opciones disponibles, la piloromiotomía de Ramstedt es el tratamiento de elección (siempre corrigiendo antes la deshidratación y la alcalosis).',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Recién nacido de cuatro semanas, con vómitos abundantes después de comer desde hace una semana, y detención del aumento de peso. La madre lo nota hambriento, y toma la leche con muchas ganas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: radiografía de abdomen simple, tratamiento endoscópico, observar la evolución, piloromiotomía de Ramstedt, o funduplicatura gástrica. Piénsalo.',
        answer: 'Es la D. El cuadro es una estenosis hipertrófica del píloro clásica. Lo ideal sería pedir primero una ecografía para confirmar, pero de las alternativas que te dan, el tratamiento de elección es la piloromiotomía de Ramstedt, siempre corrigiendo antes la deshidratación y la alcalosis del paciente.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.2.019 · Obstrucción intestinal",
      "stem": "Recién nacido de 5 días, de término, que venía alimentándose bien, presenta bruscamente vómitos de color verde, irritabilidad y distensión abdominal leve. Eliminó meconio el primer día. Está taquicárdico y con llene capilar de 3 segundos.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Cambiar a fórmula sin lactosa y control en 48 horas"
        },
        {
          "letter": "B",
          "text": "Indicar domperidona y posición semisentada"
        },
        {
          "letter": "C",
          "text": "Régimen cero, sonda nasogástrica, hidratación endovenosa y estudio urgente con tránsito intestinal y evaluación por cirugía"
        },
        {
          "letter": "D",
          "text": "Ecografía de píloro electiva"
        },
        {
          "letter": "E",
          "text": "Enema con suero fisiológico y alta"
        }
      ],
      "correct": "C",
      "explanation": "Todo vómito bilioso en un recién nacido es una urgencia quirúrgica: hay que descartar un vólvulo por malrotación intestinal, que puede necrosar el intestino en horas. Se descomprime, se hidrata, se estudia de inmediato y va a cirugía. La estenosis del píloro no da vómito bilioso.",
      "say": {
        "stem": "Recién nacido de cinco días, de término, que se alimentaba bien, empieza bruscamente con vómitos verdes, irritabilidad y algo de distensión. Eliminó meconio el primer día. Está taquicárdico y con llene capilar de tres segundos.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: fórmula sin lactosa, domperidona con posición semisentada, régimen cero con sonda, suero y estudio urgente con cirugía, ecografía de píloro electiva, o enema y alta. Piénsalo.",
        "answer": "Es la C. Un vómito verde en el recién nacido es un vólvulo por malrotación hasta que lo descartes, y se maneja como urgencia quirúrgica. La ecografía de píloro tienta porque son vómitos en un lactante pequeño, pero el píloro nunca da vómito bilioso."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.2.001 · Abdomen agudo",
      "stem": "Lactante de 8 meses, previamente sano, con crisis de llanto intenso y encogimiento de piernas cada 15 a 20 minutos desde hace 8 horas; entre las crisis está pálido y decaído. Ha vomitado 3 veces y hace 1 hora tuvo una deposición con sangre y mucosidad. Se palpa una masa alargada en el hemiabdomen derecho.",
      "question": "¿Cuál es el diagnóstico más probable y su manejo inicial?",
      "options": [
        {
          "letter": "A",
          "text": "Invaginación intestinal; ecografía abdominal y reducción con enema hidrostático o neumático"
        },
        {
          "letter": "B",
          "text": "Cólico del lactante; tranquilizar y control"
        },
        {
          "letter": "C",
          "text": "Diarrea disentérica; cotrimoxazol oral"
        },
        {
          "letter": "D",
          "text": "Estenosis hipertrófica del píloro; piloromiotomía"
        },
        {
          "letter": "E",
          "text": "Apendicitis aguda; apendicectomía sin estudio"
        }
      ],
      "correct": "A",
      "explanation": "Crisis de dolor cólico intermitente con palidez entre episodios, vómitos, deposición en jalea de grosella y masa palpable entre los 3 y 24 meses es invaginación intestinal. La ecografía muestra la imagen en diana y, sin peritonitis ni perforación, se reduce con enema; si falla, cirugía.",
      "say": {
        "stem": "Lactante de ocho meses, sano, que desde hace ocho horas tiene crisis de llanto intenso encogiendo las piernas cada quince a veinte minutos, y entre las crisis se ve pálido y decaído. Vomitó tres veces, hace una hora hizo una deposición con sangre y mucosidad, y se palpa una masa alargada a la derecha.",
        "question": "¿Cuál es el diagnóstico más probable y su manejo inicial?",
        "options": "Las opciones: invaginación intestinal con ecografía y reducción con enema, cólico del lactante, diarrea disentérica con antibiótico, estenosis del píloro o apendicitis con cirugía directa. Piénsalo.",
        "answer": "Es la A. Dolor cólico que va y viene, palidez entre crisis, deposición con sangre y una masa a esta edad es invaginación, y se confirma con ecografía y se reduce con enema. La diarrea disentérica tienta por la sangre, pero no da crisis de dolor con un niño pálido y una masa palpable."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Las tres claves', tag: 'Edad y color', kind: 'key', items: [
          { t: 'Bilioso es urgencia', d: 'Vólvulo hasta que lo descartes',
            say: 'Cerremos con las reglas de oro. Todo vómito bilioso es una urgencia hasta que la descartes.' },
          { t: 'Proyectil y hambriento', d: 'Piensa en estenosis del píloro',
            say: 'Vómito en proyectil, con un lactante hambriento: piensa en la estenosis del píloro.' },
          { t: 'Abdomen agudo: la edad orienta', d: 'En el escolar, apendicitis',
            say: 'Y en un abdomen agudo, la edad orienta la causa: en el escolar, lo más frecuente es la apendicitis.' },
        ] },
        { title: 'La otra urgencia', tag: 'Dolor en crisis', kind: 'alert', items: [
          { t: 'Dolor cólico que va y viene', d: 'Piensa en invaginación intestinal',
            say: 'Y el dolor cólico que va y viene te lleva a la invaginación intestinal.' },
        ] },
        { title: 'El orden importa', tag: 'En la estenosis', kind: 'pharma', items: [
          { t: 'Primero corregir, luego operar', d: 'Nunca al revés, por el riesgo de apnea',
            say: 'Y en la estenosis del píloro, primero corriges la alcalosis, y después operas, nunca al revés. Si te llevas una sola idea de hoy: mira el color del vómito y la edad del niño, y ya tienes casi todo el diagnóstico. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Vómitos del lactante: edad y color deciden',
    root: N('start', 'Lactante con vómitos', 'Antes de nada, mira el color',
      'Tienes un lactante que vomita. Lo primero, siempre, es fijarte en el color del vómito.',
      ['', N('q', '¿El vómito tiene bilis?', 'Verde cambia todo el enfoque',
        'Si es bilioso, es una urgencia quirúrgica hasta que la descartes. Si no lo es, la edad te da el diagnóstico.',
        ['Bilioso, verde', N('alert', 'Sospecha vólvulo por malrotación', 'Cirugía de urgencia inmediata',
          'En el recién nacido, todo vómito bilioso es un vólvulo hasta que se demuestre lo contrario.')],
        ['No bilioso, menor de 6 meses, sin dolor', N('ok', 'Reflujo fisiológico', 'Medidas posturales, sin fármacos',
          'El regurgitador feliz: buen peso, buen desarrollo. Se resuelve solo antes del año, sin inhibidores de bomba ni procinéticos.')],
        ['No bilioso, 2 a 8 semanas, en proyectil', N('do', 'Estenosis hipertrófica del píloro', 'Corregir electrolitos, luego piloromiotomía',
          'Vómito en proyectil, niño hambriento, alcalosis metabólica hipoclorémica. Confirmas con ecografía, corriges antes de operar.')],
        ['No bilioso, 3 a 12 meses, dolor cólico', N('alert', 'Invaginación intestinal', 'Ecografía y reducción neumática',
          'Crisis de dolor con encogimiento de piernas, y jalea de grosella como signo tardío. Reduces con enema guiado por ecografía antes de pensar en cirugía.')])]),
  },
};
