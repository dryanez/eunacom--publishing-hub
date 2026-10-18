// Clase 11.8 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs / dataset_cirugia_bloque_2.cjs (cir-08, classId cirugia-08).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-08',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo solo drenas y cuándo tienes que pedir una resonancia antes de tocar nada',
      say: 'Hoy vemos lo que más se ve en la práctica de piel y partes blandas: la enfermedad pilonidal, la hidrosadenitis, los abscesos y el panadizo, los tumores de partes blandas y el granuloma piogénico. Y aquí la idea central es una sola: aprender a distinguir lo que se resuelve con una simple incisión de lo que nunca debes tocar sin antes pedir una imagen. Vamos por partes.',
    },

    {
      type: 'flow',
      kicker: 'Enfermedad pilonidal',
      title: 'Pelos que se meten donde no deben',
      nodes: [
        { id: 'pel', col: 0, row: 1, k: 'cause', t: 'Pelo se invagina', s: 'En el surco interglúteo' },
        { id: 'fri', col: 1, row: 1, k: 'mech', t: 'Fricción al sentarse', s: 'Favorece la entrada del pelo' },
        { id: 'que', col: 2, row: 0, k: 'risk', t: 'Absceso pilonidal', s: 'Fase aguda, dolorosa' },
        { id: 'dre', col: 3, row: 0, k: 'good', t: 'Drenaje simple lateral', s: 'Con curetaje de pelos' },
        { id: 'fis', col: 2, row: 2, k: 'effect', t: 'Seno crónico', s: 'Orificios con pelos visibles' },
        { id: 'res', col: 3, row: 2, k: 'refer', t: 'Resección electiva', s: 'Después, en frío' },
      ],
      edges: [
        { from: 'pel', to: 'fri' }, { from: 'fri', to: 'que' }, { from: 'que', to: 'dre' },
        { from: 'fri', to: 'fis', label: 'si no se infecta' }, { from: 'fis', to: 'res' },
      ],
      steps: [
        { show: ['pel'], note: 'Típico en joven hirsuto con sobrepeso',
          say: 'Todo empieza cuando un pelo se invagina en un folículo dilatado del surco interglúteo, cerca del cóccix. Es típico del adulto joven, hirsuto, con algo de sobrepeso.' },
        { show: ['fri'], note: 'Sentarse horas favorece la invaginación',
          say: 'La fricción de estar sentado mucho tiempo, el sudor y el vello abundante favorecen que ese pelo se siga metiendo.' },
        { show: ['que', 'dre'], note: 'Incisión fuera de la línea media',
          say: 'Cuando esto se infecta, tienes un absceso pilonidal: masa dolorosa, fluctuante y caliente. Mira esta foto: una masa roja y tensa en el surco interglúteo, eso es el absceso pilonidal. Y aquí va la conducta de urgencia: drenaje simple, con una incisión lateralizada, no en la línea media, más curetaje para sacar los mechones de pelo. Nada de resección amplia mientras está infectado.',
          photo: { src: 'biblioteca/10_cirugia/cirugia-08/05_absceso_pilonidal__commons.jpg', label: 'Absceso pilonidal', at: 'Mira esta foto', credit: 'Wikimedia Commons «Pilonidal abscess.jpg», CC BY-SA 4.0, Jonathanlund' } },
        { show: ['fis'], note: 'Orificios puntiformes con pelos asomando',
          say: 'Si no se infecta, o después de drenado, puede quedar un seno crónico: uno o varios orificios puntiformes con secreción intermitente y pelos visibles. Mira estos orificios en la línea media del surco: son el seno pilonidal.',
          photo: { src: 'biblioteca/10_cirugia/cirugia-08/04_sinus_pilonidal_foto__commons.jpg', label: 'Sinus pilonidal', at: 'Mira estos orificios', credit: 'Wikimedia Commons «Two pilonidal cysts in the natal cleft.jpg», Public domain, JerryTahl' } },
        { show: ['res'], note: 'Nunca en fase aguda',
          say: 'Y el tratamiento definitivo de ese seno crónico es la resección quirúrgica completa, pero programada, en frío, nunca durante la infección activa, porque la herida se abre y se infecta de nuevo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hidrosadenitis supurativa',
      title: 'La enfermedad de las glándulas apocrinas',
      cards: [
        { title: 'Dónde y por qué', tag: 'Enfermedad de Verneuil', kind: 'criteria', items: [
          { t: 'Axilas, ingles, periné', d: 'Donde hay glándulas apocrinas',
            say: 'La hidrosadenitis compromete las glándulas sudoríparas apocrinas, así que aparece en axilas, ingles, periné y bajo las mamas, con nódulos dolorosos que se hacen abscesos y fístulas. Mira esta axila: nódulos inflamados y cicatrices con trayectos, la imagen típica.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-08/01_hidradenitis-supurativa__cto-derma_p61.jpg', label: 'Hidradenitis supurativa', at: 'Mira esta axila', credit: 'Manual CTO Dermatología 14.ª ed., p. 61' } },
          { t: 'Tabaco: el gran gatillante', d: 'Dejarlo es parte del tratamiento',
            say: 'El tabaco es el principal desencadenante, y dejarlo es tan parte del tratamiento como cualquier fármaco.' },
        ] },
        { title: 'Tratamiento escalonado', tag: 'Médico primero', kind: 'pharma', items: [
          { t: 'Doxiciclina o clinda-rifampicina', d: 'En los brotes',
            say: 'El manejo médico usa doxiciclina, o la combinación de clindamicina con rifampicina en los brotes, y en casos más severos se llega a terapia biológica anti factor de necrosis tumoral.' },
          { t: 'Cirugía: solo lo crónico', d: 'Destechar o extirpar el tejido',
            say: 'La cirugía queda para los trayectos ya crónicos y organizados: destechar el trayecto o extirpar el tejido glandular comprometido.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Infecciones de partes blandas',
      title: 'Forúnculo, ántrax, flegmón y absceso',
      cards: [
        { title: 'Quién es quién', tag: 'Casi siempre Staphylococcus aureus', kind: 'criteria', items: [
          { t: 'Forúnculo y ántrax', d: 'Ántrax: pide glicemia',
            say: 'El forúnculo es una infección profunda del folículo piloso por Staphylococcus aureus. Cuando se juntan varios forúnculos tienes un ántrax, típico de la nuca y la espalda del diabético, así que ante un ántrax pide una glicemia.' },
          { t: 'Flegmón o absceso', d: 'Difuso: antibiótico. Colección: drenaje',
            say: 'El flegmón es una infección difusa del tejido subcutáneo, sin colección, y se trata con antibióticos. El absceso es una colección con fluctuación, y su tratamiento es el drenaje.' },
        ] },
        { title: 'Conducta', tag: 'Drenar lo fluctuante', kind: 'key', items: [
          { t: 'Incisión y drenaje', d: 'Anestesia local, romper tabiques, lavar',
            say: 'Un forúnculo inicial se maneja con calor local y vigilancia. Si ya fluctúa, haces incisión y drenaje con anestesia local: incisión amplia en el punto de máxima fluctuación, rompes los tabiques, lavas y lo dejas abierto, con mecha si la cavidad es grande.' },
          { t: 'Antibiótico: solo si hay razón', d: 'Celulitis, fiebre, inmunosupresión, cara',
            say: 'El antibiótico se agrega solo si hay celulitis extensa, fiebre, inmunosupresión o localización en la cara: cloxacilina o cefadroxilo, y si hay riesgo de SAMR comunitario, cotrimoxazol o clindamicina. El cultivo se reserva para los recurrentes o los que no responden.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Panadizo',
      title: 'Infección del dedo: reconoce a Kanavel',
      cards: [
        { title: 'Tipos', tag: 'Cada uno se drena distinto', kind: 'criteria', items: [
          { t: 'Paroniquia', d: 'Pliegue ungueal: incisión pequeña',
            say: 'El panadizo es una infección de los tejidos del dedo. La paroniquia, en el pliegue de la uña, se drena con una pequeña incisión.' },
          { t: 'Panadizo del pulpejo', d: 'Tenso y muy doloroso: drenaje lateral',
            say: 'El panadizo del pulpejo es tenso y muy doloroso, y se drena por vía lateral.' },
        ] },
        { title: 'Urgencia quirúrgica', tag: 'Signos de Kanavel', kind: 'alert', items: [
          { t: 'Tenosinovitis de los flexores', d: 'Se deriva de inmediato',
            say: 'La tenosinovitis supurada de los flexores es una urgencia quirúrgica. Se reconoce por los signos de Kanavel: dedo en semiflexión, edema fusiforme, dolor a la extensión pasiva y dolor a lo largo de la vaina.' },
          { t: 'Elevar, inmovilizar, vacuna', d: 'En toda infección de la mano',
            say: 'En toda infección de la mano elevas la extremidad, la inmovilizas y verificas la vacuna antitetánica.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Cómo se drena un absceso',
      images: [
        { src: 'animaciones/cirugia-08/A1_absceso.mp4', label: 'Fluctuación, incisión y drenaje', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0; animación propia' },
      ],
      steps: [
        { note: 'Fluctúa: se drena',
          say: 'Fíjate en la secuencia. El absceso es una colección de pus que fluctúa bajo los dedos. Haces la incisión en el punto de máxima fluctuación, sale el pus, rompes los tabiques, lavas la cavidad y la dejas abierta. El antibiótico solo se suma si hay celulitis extensa, fiebre o inmunosupresión; y el flegmón, que no tiene colección, sí se trata con antibióticos.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tumores de partes blandas',
      title: 'Lipoma, quiste o algo que no debes tocar',
      nodes: [
        { id: 'mas', col: 0, row: 1, k: 'start', t: 'Masa subcutánea', s: 'Blanda, móvil e indolora' },
        { id: 'lip', col: 1, row: 0, k: 'good', t: 'Lipoma', s: 'Se resbala bajo los dedos' },
        { id: 'qui', col: 1, row: 2, k: 'good', t: 'Quiste epidérmico', s: 'Poro central visible' },
        { id: 'ban', col: 2, row: 1, k: 'q', t: 'Banderas rojas', s: '¿Más de 5 cm y creciendo rápido?' },
        { id: 'rmn', col: 3, row: 1, k: 'alert', t: 'Resonancia magnética', s: 'Antes de tocar nada' },
        { id: 'tru', col: 4, row: 1, k: 'refer', t: 'Biopsia tru-cut', s: 'En centro oncológico' },
      ],
      edges: [
        { from: 'mas', to: 'lip' }, { from: 'mas', to: 'qui' },
        { from: 'mas', to: 'ban' }, { from: 'ban', to: 'rmn' }, { from: 'rmn', to: 'tru' },
      ],
      steps: [
        { show: ['mas'], note: 'La mayoría son benignas',
          say: 'La mayoría de las masas de partes blandas que ves en la práctica son benignas, y se distinguen con el examen físico.' },
        { show: ['lip'], note: 'El signo del resbalamiento',
          say: 'El lipoma es el tumor benigno más común: blando, lobulado, móvil, y se resbala bajo tus dedos al palparlo. Mira estos lipomas: abultamientos blandos bajo una piel normal.',
          photo: { src: 'biblioteca/10_cirugia/cirugia-08/02_lipomas_multiples__fitzpatrick_p1228.jpg', label: 'Lipomas', at: 'Mira estos lipomas', credit: 'Fitzpatrick 7.ª ed., Fig. 129-1' } },
        { show: ['qui'], note: 'La cápsula debe salir entera',
          say: 'El quiste epidérmico tiene un poro central visible, pegado a la piel. Mira este quiste epidermoide, con su punto central. Ojo con esto: si al operarlo se rompe la cápsula, casi siempre recidiva. Y si está infectado, primero drenas, y recién después, ya frío, sacas la cápsula completa.',
          photo: { src: 'biblioteca/10_cirugia/cirugia-08/01_quiste_epidermoide__fitzpatrick_p1102.jpg', label: 'Quiste epidermoide', at: 'Mira este quiste', credit: 'Fitzpatrick 7.ª ed., Fig. 118-18' } },
        { show: ['ban'], note: 'Cuatro preguntas antes de tocar la masa',
          say: 'Pero antes de decidir cualquier cirugía, hazte estas preguntas: ¿mide más de cinco centímetros, está profunda, bajo la fascia o el músculo, creció rápido en semanas, o está fija a un plano profundo? Cualquiera de estas es una bandera roja de sarcoma.' },
        { show: ['rmn'], note: 'Prohibida la resección a ciegas',
          say: 'Con una sola bandera roja, está formalmente prohibida la resección marginal a ciegas. Lo primero es una resonancia magnética con contraste, para ver cuánto se extiende.' },
        { show: ['tru'], note: 'La biopsia se planifica con oncología',
          say: 'Y después derivas a un centro oncológico para una biopsia con aguja gruesa, planificada en el mismo eje que va a usar la cirugía definitiva. Operar a ciegas antes de esto contamina los planos musculares y empeora el pronóstico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Granuloma piogénico',
      title: 'El nódulo rojo que sangra con un roce',
      cards: [
        { title: 'Cómo es', tag: 'Hemangioma capilar lobulado', kind: 'key', items: [
          { t: 'Nódulo rojo, friable, pediculado', d: 'Crece en semanas y sangra fácil',
            say: 'El granuloma piogénico es un hemangioma capilar lobulado, benigno y adquirido. Mira esta lesión: un nódulo rojo brillante, pediculado, que creció en semanas y sangra con un roce mínimo. Aparece en dedos, labios, cara y mucosa oral, a menudo tras un trauma menor.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-08/04_granuloma-piogenico__nelson_p5179.jpg', label: 'Granuloma piogénico', at: 'Mira esta lesión', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., p. 5179' } },
          { t: 'Embarazo: épulis gravídico', d: 'En las encías; puede regresar tras el parto',
            say: 'En el embarazo es frecuente en las encías, el llamado épulis gravídico, y puede regresar después del parto.' },
        ] },
        { title: 'Conducta', tag: 'Siempre a biopsia', kind: 'pharma', items: [
          { t: 'Curetaje con electrocoagulación', d: 'O escisión; todo a anatomía patológica',
            say: 'Se confunde con melanoma amelanótico, carcinoma o sarcoma de Kaposi, por eso toda lesión extirpada va a anatomía patológica. El tratamiento es el curetaje con electrocoagulación de la base, o la escisión.' },
          { t: 'Sangrado: presión y nitrato de plata', d: 'La recidiva es frecuente',
            say: 'El sangrado se controla con presión y nitrato de plata, y la recidiva por resección incompleta es frecuente.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo esto en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cuándo drenar y cuándo pedir imagen primero',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Absceso pilonidal agudo', 'Drenaje simple lateralizado', 'Resección amplia en fase aguda'],
          say: 'Repasemos las trampas. Absceso pilonidal agudo: drenaje simple, lateralizado. Resecar todo el trayecto en plena infección es el error clásico.' },
        { cells: ['Seno pilonidal crónico', 'Resección electiva, en frío', 'Operar mientras está infectado'],
          say: 'Seno pilonidal crónico: resección electiva, cuando ya no hay infección activa.' },
        { cells: ['Quiste epidérmico infectado', 'Drenar primero, resecar después', 'Extirpar la cápsula en plena infección'],
          say: 'Quiste epidérmico infectado: drenas primero, y la cápsula la sacas completa cuando ya bajó la inflamación.' },
        { cells: ['Masa mayor a 5 cm, profunda, creciendo', 'Resonancia y biopsia tru-cut', 'Resección marginal ambulatoria'],
          say: 'Y una masa grande, profunda y de crecimiento rápido: resonancia y biopsia planificada. Resecarla en el policlínico, a ciegas, es el error más grave de todo el tema.' },
        { cells: ['Absceso o forúnculo fluctuante', 'Incisión y drenaje', 'Solo antibiótico oral'],
          say: 'Absceso o forúnculo fluctuante: incisión y drenaje. El antibiótico solo no penetra la colección, y se agrega únicamente si hay celulitis, fiebre o inmunosupresión.' },
        { cells: ['Dedo semiflexionado, dolor a la extensión', 'Kanavel: derivar de inmediato', 'Tratarlo como un panadizo simple'],
          say: 'Dedo en semiflexión con dolor a la extensión pasiva: signos de Kanavel, tenosinovitis, urgencia quirúrgica.' },
        { cells: ['Nódulo rojo friable que sangra', 'Curetaje más biopsia', 'No enviarlo a anatomía patológica'],
          say: 'Y nódulo rojo friable que sangra, granuloma piogénico: curetaje con electrocoagulación, y siempre a anatomía patológica para descartar melanoma amelanótico.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 24 años, con vello abundante y sobrepeso, consulta por 2 días de dolor y aumento de volumen en la región sacrococcígea, que empeora al sentarse. Al examen, en la línea interglútea se aprecia una masa de 3 cm, eritematosa, caliente y fluctuante, con un mechón de pelos saliendo por un orificio central.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Resección amplia en bloque del trayecto pilonidal' },
        { letter: 'B', text: 'Antibióticos orales por 10 días y control' },
        { letter: 'C', text: 'Drenaje quirúrgico simple con incisión lateralizada' },
        { letter: 'D', text: 'Solicitar resonancia magnética de pelvis antes de decidir' },
        { letter: 'E', text: 'Observación, ya que suele resolver solo' },
      ],
      correct: 'C',
      explanation: 'Masa fluctuante, eritematosa y dolorosa en la región interglútea, con pelos visibles: absceso pilonidal agudo. La conducta es el drenaje quirúrgico simple, con incisión lateralizada y curetaje de pelos; la resección amplia se difiere para cuando ceda la infección.',
      say: {
        stem: 'Vamos con un caso. Hombre de veinticuatro años, con harto vello y algo de sobrepeso, con dos días de dolor y aumento de volumen en la zona sacrococcígea, que empeora al sentarse. En la línea interglútea hay una masa de tres centímetros, eritematosa, caliente y fluctuante, con un mechón de pelos saliendo por un orificio central.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: resección amplia en bloque, antibióticos orales por diez días, drenaje quirúrgico simple con incisión lateralizada, resonancia magnética antes de decidir, u observación. Piénsalo.',
        answer: 'Es la C. El cuadro es un absceso pilonidal agudo, y la conducta de urgencia es drenarlo con una incisión lateralizada, más curetaje de los pelos retenidos. La resección amplia, la opción A, es la trampa: hacerla en plena infección aumenta el riesgo de que la herida no cicatrice bien. Esa resección definitiva se deja para más adelante, con el paciente ya sin inflamación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 43',
      stem: 'Paciente de 20 años presenta aumento de volumen eritematoso y doloroso en la zona interglútea, a dos centímetros de la línea media, sobre el cóccix. Al examen se observa aumento de volumen de 5 centímetros, doloroso, con dos orificios negros en la piel cerca de la lesión.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Linfoma' },
        { letter: 'B', text: 'Sarcoma' },
        { letter: 'C', text: 'Quiste pilonidal' },
        { letter: 'D', text: 'Absceso anorrectal' },
        { letter: 'E', text: 'Lipoma' },
      ],
      correct: 'C',
      explanation: 'La ubicación sacrococcígea, sobre la línea media, con orificios puntiformes con pelos, es el cuadro característico del quiste o seno pilonidal, aquí ya en fase inflamatoria.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de agosto de dos mil veintiuno. Paciente de veinte años, con aumento de volumen eritematoso y doloroso en la zona interglútea, cerca del cóccix. Al examen mide cinco centímetros, y tiene dos orificios negros en la piel cerca de la lesión.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: linfoma, sarcoma, quiste pilonidal, absceso anorrectal, o lipoma. Piénsalo.',
        answer: 'Es la C, quiste pilonidal. La ubicación sacrococcígea, sobre la línea media, junto con esos orificios puntiformes, es la huella típica de la enfermedad pilonidal. El absceso anorrectal se ubica más cerca del ano, no tan arriba en la línea interglútea, y ni el linfoma ni el sarcoma dan esos orificios con pelos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 77',
      stem: 'Paciente con absceso interglúteo de 2 centímetros, en buenas condiciones generales.',
      question: '¿Cuál es la conducta?',
      options: [
        { letter: 'A', text: 'Antibióticos exclusivos' },
        { letter: 'B', text: 'Drenar' },
        { letter: 'C', text: 'Marsupialización' },
        { letter: 'D', text: 'Solicitar cultivo antes de cualquier procedimiento' },
        { letter: 'E', text: 'Observación' },
      ],
      correct: 'B',
      explanation: 'Todo absceso pilonidal se drena. Los antibióticos se pueden sumar, pero no reemplazan el drenaje; si el cuadro recurre, ahí sí se plantea la extirpación completa del quiste.',
      say: {
        stem: 'Y otra pregunta real, del EUNACOM de diciembre de dos mil veinticuatro. Paciente con un absceso interglúteo de dos centímetros, en buenas condiciones generales.',
        question: '¿Cuál es la conducta?',
        options: 'Las opciones son: antibióticos exclusivos, drenar, marsupialización, solicitar cultivo antes de cualquier procedimiento, u observación. Piénsalo.',
        answer: 'Es la B, drenar. Por pequeño que sea, un absceso pilonidal se drena siempre. Puedes sumar antibióticos, pero no los usas solos en lugar del drenaje. Y si este cuadro se repite, ahí recién planteas la extirpación completa del quiste, ya en frío.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 101',
      stem: 'Paciente de 18 años consulta porque desde hace un año presenta aumento de volumen progresivo en la cara anterior del muslo derecho, que recientemente se ha vuelto doloroso. Al examen se palpa una masa de 10 centímetros de diámetro, de consistencia dura, no pétrea, sin afectación de la piel.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar resección y biopsia' },
        { letter: 'B', text: 'Observar evolución' },
        { letter: 'C', text: 'Solicitar ecografía de partes blandas' },
        { letter: 'D', text: 'Solicitar radiografía de fémur' },
        { letter: 'E', text: 'Realizar punción y drenaje' },
      ],
      correct: 'C',
      explanation: 'Masa de más de 5 centímetros, de un año de evolución y crecimiento reciente: bandera roja de sarcoma de partes blandas. Antes de resecar, se estudia con imagen; si no hay resonancia disponible de entrada, la ecografía distingue lo benigno de lo sospechoso y guía el paso siguiente.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de julio de dos mil dieciséis. Paciente de dieciocho años, con un año de aumento de volumen progresivo en la cara anterior del muslo derecho, que hace poco se volvió doloroso. Al examen mide diez centímetros, es dura, no pétrea, y no compromete la piel.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: resección y biopsia, observar evolución, solicitar ecografía de partes blandas, solicitar radiografía de fémur, o punción y drenaje. Piénsalo.',
        answer: 'Es la C. Con más de cinco centímetros y creciendo, esto ya es una bandera roja de sarcoma de partes blandas, y la regla es no tocarlo sin estudio. Lo ideal es la resonancia, pero si no está disponible, la ecografía al menos te separa lo benigno de lo sospechoso, antes de definir la biopsia y la cirugía. Operar directo, la opción A, es el error que el examen castiga.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.1.053 · Tumores benignos de partes blandas",
      "stem": "Hombre de 45 años consulta por un aumento de volumen en la espalda que ha crecido muy lentamente en 3 años. Al examen se palpa una masa de 4 cm, blanda, móvil, indolora, no adherida a la piel ni a planos profundos, sin punto central ni signos inflamatorios.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Quiste epidérmico"
        },
        {
          "letter": "B",
          "text": "Liposarcoma"
        },
        {
          "letter": "C",
          "text": "Lipoma"
        },
        {
          "letter": "D",
          "text": "Absceso subcutáneo"
        },
        {
          "letter": "E",
          "text": "Linfadenopatía"
        }
      ],
      "correct": "C",
      "explanation": "Masa subcutánea blanda, móvil, indolora, de crecimiento lento y no adherida a la piel es un lipoma, el tumor benigno de partes blandas más frecuente. El quiste epidérmico está adherido a la piel y suele tener un poro central. Masas mayores de 5 cm, profundas, duras o de crecimiento rápido obligan a descartar sarcoma.",
      "say": {
        "stem": "Hombre de cuarenta y cinco años con un aumento de volumen en la espalda que creció muy lento en tres años. Se palpa una masa de cuatro centímetros, blanda, móvil, indolora, no adherida a la piel ni a planos profundos, sin poro central.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: quiste epidérmico, liposarcoma, lipoma, absceso subcutáneo o adenopatía. Piénsalo.",
        "answer": "Es la C. Blando, móvil, indoloro, lento y libre de la piel es un lipoma. El quiste epidérmico tienta, pero ese sí está pegado a la piel y suele tener un poro central. El sarcoma se sospecha si mide más de cinco centímetros, es profundo, duro o crece rápido."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.1.055 · Abscesos, forúnculos, panadizos, flegmones",
      "stem": "Mujer de 32 años, sin enfermedades crónicas, consulta por 4 días de dolor y aumento de volumen en el glúteo derecho. Al examen hay una masa de 4 cm, eritematosa, caliente y fluctuante, con mínimo eritema perilesional. Está afebril y en buen estado general.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Antibiótico oral por 10 días y control"
        },
        {
          "letter": "B",
          "text": "Hospitalizar para antibióticos endovenosos"
        },
        {
          "letter": "C",
          "text": "Calor local y observar si drena espontáneamente"
        },
        {
          "letter": "D",
          "text": "Solicitar ecografía de partes blandas antes de cualquier tratamiento"
        },
        {
          "letter": "E",
          "text": "Drenaje quirúrgico con anestesia local, aseo de la cavidad y curaciones"
        }
      ],
      "correct": "E",
      "explanation": "Un absceso fluctuante se trata drenándolo: incisión con anestesia local, vaciamiento y aseo de la cavidad, y curaciones. Los antibióticos por sí solos no penetran la colección y se reservan para celulitis extensa, compromiso sistémico o inmunosupresión.",
      "say": {
        "stem": "Mujer de treinta y dos años, sana, con cuatro días de dolor y aumento de volumen en el glúteo derecho. Hay una masa de cuatro centímetros, roja, caliente y fluctuante, con poco eritema alrededor. Está afebril y en buen estado general.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: antibiótico oral, hospitalizar para antibióticos endovenosos, calor local y observar, ecografía primero o drenaje quirúrgico con anestesia local. Piénsalo.",
        "answer": "Es la E. Si fluctúa, hay pus, y el pus se drena. El antibiótico oral tienta, pero no llega bien a una colección encapsulada; solo se agrega si hay celulitis extensa, fiebre o un paciente inmunosuprimido."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.011 · Drenaje de lesiones superficiales",
      "stem": "Hombre de 30 años, sano, consulta por una lesión dolorosa en el glúteo de 5 días. Al examen presenta un nódulo de 3 cm, eritematoso, caliente y fluctuante, sin celulitis extensa. Está afebril y sin compromiso del estado general.",
      "question": "¿Cuál es el tratamiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Antibióticos orales exclusivos por 10 días"
        },
        {
          "letter": "B",
          "text": "Incisión y drenaje, con aseo de la cavidad"
        },
        {
          "letter": "C",
          "text": "Compresas tibias y control en 1 semana"
        },
        {
          "letter": "D",
          "text": "Punción con aguja fina y alta"
        },
        {
          "letter": "E",
          "text": "Resección en bloque del nódulo"
        }
      ],
      "correct": "B",
      "explanation": "Un absceso cutáneo fluctuante se trata con incisión y drenaje amplio, rompiendo tabiques y aseando la cavidad. En abscesos simples, sin celulitis extensa, fiebre ni inmunosupresión, el drenaje suele ser suficiente; los antibióticos solos no penetran adecuadamente la colección. La punción simple tiene alta recurrencia.",
      "say": {
        "stem": "Hombre de treinta años, sano, con cinco días de una lesión dolorosa en el glúteo: un nódulo de tres centímetros, rojo, caliente y fluctuante, sin celulitis extensa ni fiebre.",
        "question": "¿Cuál es el tratamiento más adecuado?",
        "options": "Las opciones: solo antibióticos orales, incisión y drenaje, compresas tibias y control, punción con aguja fina, o resección en bloque. Piénsalo.",
        "answer": "Es la B. Un absceso fluctuante se drena, porque el pus no se cura con antibióticos. Los antibióticos solos tientan por ser una infección, pero no penetran bien la colección y se reservan para celulitis extensa, fiebre o inmunosupresión."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2018 · Pregunta 62",
      "stem": "Paciente de 28 años, embarazada de 28 semanas, consulta por una lesión cutánea en el dedo medio de algunas semanas de evolución, friable, que ha sangrado en varias oportunidades. Al examen se observa una pápula exofítica rojo brillante, de superficie lisa y húmeda, pediculada, con collarete descamativo en la base.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Verruga vulgar"
        },
        {
          "letter": "B",
          "text": "Granuloma piógeno"
        },
        {
          "letter": "C",
          "text": "Molusco contagioso"
        },
        {
          "letter": "D",
          "text": "Melanoma amelanótico"
        },
        {
          "letter": "E",
          "text": "Carcinoma basocelular"
        }
      ],
      "correct": "B",
      "explanation": "Una lesión vascular roja, friable, de crecimiento rápido y sangrado fácil, con collarete, en dedos, en una embarazada, es un granuloma piógeno (hemangioma capilar lobulillar). Se trata con exéresis o curetaje con electrocoagulación y estudio histológico, para descartar un melanoma amelanótico. En el embarazo puede regresar después del parto.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Embarazada de veintiocho semanas con una lesión roja, brillante y pediculada en un dedo, que creció en semanas y sangra con facilidad.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: verruga vulgar, granuloma piógeno, molusco contagioso, melanoma amelanótico o carcinoma basocelular. Piénsalo.",
        "answer": "Es la B. La lesión vascular friable de crecimiento rápido en una embarazada es un granuloma piógeno. El melanoma amelanótico tienta y es el diagnóstico que hay que descartar, por eso se envía la lesión a biopsia."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Enfermedad pilonidal', tag: 'Fase decide todo', kind: 'key', items: [
          { t: 'Agudo: drenaje lateralizado', d: 'Crónico: resección electiva',
            say: 'Cerremos con las reglas de oro. En fase aguda, drenaje simple y lateralizado; el trayecto crónico se reseca después, en frío.' },
        ] },
        { title: 'Tumores de partes blandas', tag: 'Cuatro banderas rojas', kind: 'alert', items: [
          { t: 'Grande, profunda, rápida, fija', d: 'Resonancia antes de tocar nada',
            say: 'Y si una masa mide más de cinco centímetros, es profunda, crece rápido o está fija a un plano, primero resonancia, nunca resección a ciegas.' },
        ] },
        { title: 'Pus y lesiones rojas', tag: 'Drenar y biopsiar', kind: 'pharma', items: [
          { t: 'Fluctúa: se drena', d: 'Kanavel: urgencia; granuloma: biopsia',
            say: 'Si algo fluctúa, se drena; el antibiótico solo no basta. Un dedo con signos de Kanavel es urgencia quirúrgica, y un nódulo rojo que sangra, un granuloma piogénico, se cureta y se biopsia.' },
        ] },
        { title: 'Lo simple', tag: 'Examen físico', kind: 'normal', items: [
          { t: 'Lipoma se resbala', d: 'Quiste tiene poro central',
            say: 'Y para lo simple, te basta el examen físico: el lipoma se resbala bajo los dedos, y el quiste epidérmico tiene su poro central. Si te llevas una sola idea de hoy: pregúntate siempre si esa masa tiene alguna bandera roja antes de decidir si la tocas o la estudias primero. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Partes blandas: cuándo drenar y cuándo estudiar antes',
    root: N('start', 'Masa o absceso en piel y partes blandas', 'Ubica la zona primero',
      'Un paciente llega con un bulto o un absceso. Antes de decidir la conducta, ubica dónde está y cómo se ve.',
      ['', N('q', '¿Dónde está la lesión?', 'Interglútea, axilar o subcutánea',
        'La ubicación cambia por completo lo que sigue.',
        ['Interglútea, dolorosa y fluctuante', N('alert', 'Absceso pilonidal agudo', 'Drenaje simple lateralizado',
          'Incisión lateralizada, fuera de la línea media, con curetaje de pelos. La resección amplia se difiere para cuando ceda la infección.')],
        ['Axilas o ingles, nódulos y fístulas', N('do', 'Hidrosadenitis supurativa', 'Dejar el tabaco, más tratamiento médico',
          'Enfermedad crónica de las glándulas apocrinas. El manejo inicial es médico, y la cirugía se reserva para trayectos ya organizados.')],
        ['Subcutánea, blanda, móvil, indolora', N('q', '¿Se resbala o tiene poro central?', 'Lipoma o quiste epidérmico',
          'Con el examen físico ya distingues las dos lesiones benignas más frecuentes.',
          ['Se resbala bajo los dedos', N('ok', 'Lipoma', 'Extirpación electiva si molesta',
            'Tumor benigno más común de partes blandas, sin urgencia de resecarlo.')],
          ['Poro central visible', N('ok', 'Quiste epidérmico', 'Extirpar la cápsula completa',
            'Si está infectado, drenar primero y resecar la cápsula íntegra ya sin inflamación, para evitar la recidiva.')])],
        ['Profunda, más de 5 cm, crece rápido', N('alert', 'Sospecha de sarcoma', 'Resonancia y biopsia tru-cut',
          'Con cualquier bandera roja, está prohibida la resección a ciegas: primero resonancia magnética, y biopsia planificada en un centro oncológico.')],
        ['Colección con pus, forúnculo o dedo', N('q', '¿Signos de Kanavel en el dedo?', 'Semiflexión y dolor a la extensión',
          'Una colección fluctuante se drena, pero en el dedo primero busca los signos de Kanavel.',
          ['Sí', N('alert', 'Tenosinovitis: urgencia', 'Derivar de inmediato',
            'Dedo semiflexionado, edema fusiforme y dolor a la extensión pasiva: urgencia quirúrgica.')],
          ['No', N('do', 'Incisión y drenaje', 'Antibiótico solo si hay razón',
            'Drenaje con anestesia local; antibiótico solo si hay celulitis extensa, fiebre o inmunosupresión.')])],
        ['Nódulo rojo friable que sangra', N('ok', 'Granuloma piogénico', 'Curetaje y biopsia',
          'Curetaje con electrocoagulación o escisión, y siempre anatomía patológica.')])]),
  },
};
