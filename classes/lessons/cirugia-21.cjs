// Clase 11.21 (Cirugía) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/cirugia_extra/c.cjs (cirugia-21, tier 3). Códigos: 1.01.5.008 (punción venosa), 4.01.5.027 y 4.01.5.021
// (manejo de drenajes y sondas), 4.01.1.059 (onicocriptosis), 4.01.5.024 (onicectomía). Niveles en books/data/v3_codemap.json.
// Preguntas reales: solo hay una en el banco para los códigos de la clase, Diciembre 2019 P6 (gastrostomía que se sale; código 4.01.5.021,
// confianza 0,3 pero con enunciado completo y clave coherente con el libro: reponer la sonda por el ostoma si el trayecto está maduro).
// Se buscó además con class_questions.cjs --search "punción venosa|torniquete|drenaje|gastrostomía|onicocriptosis|onicectomía|bloqueo digital":
// sin otras preguntas de estos temas (las que salen son de bartolinitis, abscesos, cuerpos extraños de vía aérea y mama). El libro cita
// "Diciembre 2019 Q#6" como reconstrucción, y coincide con esta pregunta. Como el banco real trae una sola, el segundo caso de la clase
// es uno escrito para ella (punción venosa) y el primero es la viñeta del libro (onicocriptosis recidivante).
// Sin imágenes: no hay foto verificada de onicocriptosis ni de drenajes en books/data/atlas_fotos_verificadas.json, ni en classes/media/biblioteca;
// en _candidatas_b solo hay un dibujo de Bates (p. 737) cuyo pie corresponde a otra figura, que no se usó.
// En movimiento: scenes/cirugia_nuevas.html (?v=onicocriptosis) sobre Blausen "Finger Nail Anatomy", CC BY 3.0 (anatomía de la uña y la matriz).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-21',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cirugía menor: punción venosa, drenajes y sondas, y la uña encarnada',
      say: 'Bienvenido. Hoy vemos tres procedimientos que el médico general hace con sus propias manos: la punción venosa, el manejo de drenajes y sondas, y la uña encarnada. Son temas prácticos, y el examen los pregunta por los errores: el torniquete que se deja de más, la sonda que se sale, la uña que se saca entera cuando no hacía falta. Partamos por la punción venosa.',
    },

    {
      type: 'points',
      kicker: 'Punción venosa',
      title: 'Preparar, elegir la vena y puncionar',
      cards: [
        { title: 'Preparación', tag: 'Antes de pinchar', kind: 'criteria', items: [
          { t: 'Lavado de manos y guantes', d: 'Material listo',
            say: 'La punción venosa se hace para tomar exámenes o instalar una vía periférica. Preparas el material, te lavas las manos y te pones guantes.' },
          { t: 'Torniquete 7 a 10 cm sobre el sitio', d: 'Menos de 1 minuto',
            say: 'El torniquete va de siete a diez centímetros sobre el sitio, y por menos de un minuto. Si lo dejas más tiempo, la sangre se hemoconcentra y se hemoliza, y el examen sale alterado.' },
          { t: 'Mediana cubital, cefálica o basílica', d: 'Palpar: vena, no arteria ni tendón',
            say: 'Las venas de elección son la mediana cubital, la cefálica y la basílica del pliegue del codo. Palpa la vena para no confundirla con una arteria ni con un tendón.' },
        ] },
        { title: 'Brazos que se evitan', tag: 'Se pregunta', kind: 'alert', items: [
          { t: 'Mastectomía con disección axilar', d: 'Usar el brazo contralateral',
            say: 'Hay brazos que no se punzan. El principal es el de una mastectomía con disección axilar, porque el drenaje linfático alterado favorece el linfedema y la infección. Usas el brazo contrario.' },
          { t: 'Fístula arteriovenosa, hemiparesia, infusión, flebitis', d: 'Tampoco',
            say: 'Tampoco el brazo con una fístula arteriovenosa, una hemiparesia, una infusión en curso o una flebitis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnica',
      title: 'Bisel arriba, soltar antes de retirar',
      cards: [
        { title: 'Paso a paso', tag: 'Técnica', kind: 'key', items: [
          { t: 'Antisepsia y piel tensa', d: 'Alcohol 70% o clorhexidina; dejar secar',
            say: 'Haces la antisepsia con alcohol al setenta por ciento o clorhexidina, y la dejas secar. Después estiras la piel.' },
          { t: 'Bisel arriba, 15 a 30°', d: 'Hasta ver el retorno de sangre',
            say: 'La aguja entra con el bisel hacia arriba, en un ángulo de quince a treinta grados, hasta ver el retorno de sangre.' },
          { t: 'Soltar el torniquete antes de retirar', d: 'Comprimir 2 a 3 min, brazo extendido',
            say: 'Sueltas el torniquete antes de retirar la aguja, y comprimes con una gasa durante dos a tres minutos, más si está anticoagulado. Sin flexionar el brazo.' },
        ] },
        { title: 'Tubos y seguridad', tag: 'Orden y cortopunzantes', kind: 'pharma', items: [
          { t: 'Orden: hemocultivos, celeste, rojo, verde, lila, gris', d: 'Citrato, suero, heparina, EDTA, fluoruro',
            say: 'Los tubos se llenan en un orden: primero los hemocultivos, luego el celeste de citrato, el rojo o amarillo del suero, el verde de heparina, el lila de EDTA y el gris de fluoruro.' },
          { t: 'Nunca reencapuchar la aguja', d: 'Contenedor de cortopunzantes',
            say: 'La aguja nunca se reencapucha: va directo al contenedor de cortopunzantes. Ante un pinchazo accidental, lavas, notificas e inicias la profilaxis según el protocolo.' },
          { t: 'Catéteres: gris 16 G y verde 18 G reanimación', d: 'Rosado 20 G y azul 22 G, uso habitual',
            say: 'Para una vía periférica, los catéteres gris de dieciséis y verde de dieciocho permiten reanimar con volumen, y el rosado de veinte y el azul de veintidós son los de uso habitual en el adulto.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Punción venosa: error frecuente y conducta correcta',
      head: ['Situación', 'Error', 'Conducta correcta'],
      rows: [
        { cells: ['Torniquete', 'Dejarlo más de 1 minuto', 'Máximo 1 minuto; soltarlo antes de retirar la aguja'],
          say: 'Torniquete: el error es dejarlo más de un minuto. Máximo un minuto, y se suelta antes de retirar la aguja.' },
        { cells: ['Mastectomía con disección axilar', 'Puncionar ese brazo', 'Usar el brazo contralateral'],
          say: 'Mastectomía con disección axilar: el error es puncionar ese brazo. Se usa el contralateral.' },
        { cells: ['Aguja usada', 'Reencapucharla', 'Descartar directo en el contenedor'],
          say: 'Aguja usada: nunca reencapucharla con las dos manos. Directo al contenedor de cortopunzantes.' },
        { cells: ['Hemostasia', 'Flexionar el brazo sobre la gasa', 'Comprimir con el brazo extendido 2-3 minutos'],
          say: 'Hemostasia: flexionar el brazo sobre la gasa es el error. Se comprime con el brazo extendido durante dos a tres minutos.' },
        { cells: ['Punción arterial accidental', 'Presionar poco', 'Compresión firme de 5 minutos o más'],
          say: 'Y si puncionas una arteria sin querer, compresión firme de cinco minutos o más. Las otras complicaciones son el hematoma, la lesión de un nervio con parestesias, la flebitis y el síncope vasovagal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Drenajes',
      title: 'Qué es cada drenaje y qué se vigila',
      cards: [
        { title: 'Tipos', tag: 'Para qué sirven', kind: 'key', items: [
          { t: 'Evacuan, previenen y detectan fugas', d: 'Colecciones, hematomas, anastomosis',
            say: 'Los drenajes evacuan colecciones, previenen que se acumulen y permiten detectar una fuga.' },
          { t: 'Pasivos: Penrose, tubos', d: 'Salen por gravedad y capilaridad',
            say: 'Pueden ser pasivos, como el Penrose y los tubos, que drenan por gravedad.' },
          { t: 'Aspirativos: Jackson-Pratt, Redon, Hemovac', d: 'Presión negativa; la pleurostomía, sello de agua',
            say: 'O aspirativos, con presión negativa: el Jackson-Pratt, el Redon y el Hemovac. La pleurostomía funciona distinto, con un sello de agua.' },
        ] },
        { title: 'Cuidados', tag: 'Cada día', kind: 'criteria', items: [
          { t: 'Registrar débito y aspecto', d: 'Cada 24 horas',
            say: 'En todo drenaje se registra el débito diario y sus características, porque el aspecto del líquido te dice qué está pasando.' },
          { t: 'Sistema cerrado, bajo la herida y fijo', d: 'Curar el orificio con suero y apósito seco',
            say: 'El sistema se mantiene cerrado, por debajo del nivel de la herida y fijo a la piel. El orificio de salida se cura a diario con suero fisiológico y apósito seco, y se vacía con técnica aséptica.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Interpretación',
      title: 'El aspecto del líquido y qué significa',
      head: ['Característica', 'Interpretación', 'Conducta'],
      rows: [
        { cells: ['Seroso o serohemático, débito decreciente', 'Evolución normal', 'Retirar cuando < 30-50 mL/día'],
          say: 'Si el líquido es seroso o serohemático y el débito baja día a día, la evolución es normal. Se retira cuando es menor de treinta a cincuenta mililitros al día.' },
        { cells: ['Francamente hemático', 'Hemorragia postoperatoria', 'Evaluar hemodinamia; avisar al cirujano'],
          say: 'Si es francamente hemático, piensa en hemorragia postoperatoria: evalúas la hemodinamia y avisas al cirujano.' },
        { cells: ['Bilioso o entérico', 'Fuga biliar o de anastomosis', 'Imagen y reintervención según el caso'],
          say: 'Si es bilioso o entérico, es una fuga biliar o de una anastomosis. Imagen y reintervención según el caso.' },
        { cells: ['Turbio o purulento', 'Infección de la colección', 'Cultivo, antibióticos, imagen'],
          say: 'Si es turbio o purulento, hay una infección de la colección: cultivo, antibióticos e imagen.' },
        { cells: ['Sin débito', 'Obstrucción o resolución', 'Irrigar suavemente; si no, imagen'],
          say: 'Y si no sale nada, puede estar obstruido o haberse resuelto la colección. Se irriga con suavidad, y si no cambia, se estudia con imagen.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Retiro y sondas',
      title: 'Cuándo se retira y qué hacer si se sale',
      cards: [
        { title: 'Retiro del drenaje', tag: 'Criterios', kind: 'criteria', items: [
          { t: 'Débito < 30-50 mL en 24 h', d: 'Seroso y sin infección',
            say: 'El drenaje se retira cuando el débito baja de treinta a cincuenta mililitros en veinticuatro horas, es seroso y no hay signos de infección.' },
          { t: 'Penrose: movilizar 2 a 3 cm por día', d: 'Antes de retirarlo',
            say: 'El Penrose se moviliza dos a tres centímetros por día antes de retirarlo.' },
          { t: 'Complicaciones', d: 'Obstrucción, infección, sangrado, salida accidental, erosión',
            say: 'Las complicaciones son la obstrucción, que se irriga con suavidad, la infección, el sangrado, la salida accidental y la erosión.' },
        ] },
        { title: 'Gastrostomía que se sale', tag: 'Muy preguntado', kind: 'alert', items: [
          { t: 'Trayecto maduro (> 4 semanas)', d: 'Reponer una sonda de inmediato por el ostoma',
            say: 'Ahora la sonda de gastrostomía que se sale por accidente. El trayecto se cierra en pocas horas, así que hay que actuar rápido. Si el trayecto está maduro, es decir, de más de cuatro semanas, y no hay signos de perforación ni de filtración, repones una sonda de inmediato por el mismo ostoma.' },
          { t: 'Verificar la posición antes de usarla', d: 'Aspirando contenido gástrico',
            say: 'Antes de usarla, verificas que está en el estómago, aspirando contenido gástrico.' },
          { t: 'Trayecto reciente (< 2 a 4 semanas)', d: 'No reinsertar a ciegas; derivar',
            say: 'Si el trayecto es reciente, de menos de dos a cuatro semanas, no se reinserta a ciegas, por el riesgo de falso trayecto y peritonitis. Se deriva para endoscopía o un estudio con contraste.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Uña encarnada',
      title: 'Cuando el borde de la uña penetra el pliegue',
      nodes: [
        { id: 'f', col: 0, row: 1, k: 'cause', t: 'Factores favorecedores', s: 'Corte curvo, calzado estrecho, sudor, trauma' },
        { id: 'b', col: 2, row: 1, k: 'mech', t: 'Borde lateral penetra el pliegue', s: 'Casi siempre el ortejo mayor' },
        { id: 'i', col: 4, row: 0, k: 'effect', t: 'Estadio I', s: 'Eritema, edema y dolor' },
        { id: 'ii', col: 4, row: 2, k: 'risk', t: 'Estadio II', s: 'Supuración e infección' },
        { id: 'iii', col: 4, row: 4, k: 'alert', t: 'Estadio III', s: 'Tejido de granulación hipertrófico' },
      ],
      edges: [
        { from: 'f', to: 'b' }, { from: 'b', to: 'i' }, { from: 'i', to: 'ii' }, { from: 'ii', to: 'iii' },
      ],
      steps: [
        { show: ['f', 'b'], note: 'La uña que se clava',
          say: 'La onicocriptosis, o uña encarnada, ocurre cuando el borde lateral de la uña penetra el pliegue ungueal, casi siempre del ortejo mayor. Lo favorecen el corte curvo de las uñas, el calzado estrecho, la sudoración excesiva y el trauma.' },
        { show: ['i'], note: 'Estadio I',
          say: 'La clasificación de Heifetz la ordena en tres estadios. En el estadio uno hay eritema, edema y dolor al presionar.' },
        { show: ['ii', 'iii'], note: 'Estadios II y III',
          say: 'En el estadio dos aparece la supuración y la infección, y en el estadio tres un tejido de granulación hipertrófico. El diagnóstico es clínico, y el estadio decide el tratamiento.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Conservador al inicio, onicectomía parcial después',
      cards: [
        { title: 'Estadio I', tag: 'Nivel completo', kind: 'key', items: [
          { t: 'Baños tibios con jabón', d: 'Elevar el borde con algodón o gasa',
            say: 'En el estadio uno el tratamiento es conservador: baños de agua tibia con jabón y elevar el borde de la uña con un trozo de algodón o de gasa.' },
          { t: 'Corte recto y calzado amplio', d: 'Prevención',
            say: 'Se corta la uña recta, no curva, y se indica calzado amplio.' },
        ] },
        { title: 'Estadios II y III o recidiva', tag: 'Nivel realizar', kind: 'pharma', items: [
          { t: 'Bloqueo digital: lidocaína 1-2% sin adrenalina', d: 'Torniquete en la base del dedo',
            say: 'En los estadios dos y tres, o cuando recidiva, se hace una onicectomía parcial. Primero el bloqueo digital con lidocaína al uno o dos por ciento, sin adrenalina, con un torniquete en la base del dedo. Mira este paso a paso en un ortejo: el bloqueo digital, luego se libera la uña de la matriz y se corta el borde encarnado.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-21/01_onicocriptosis-paso-a-paso__knoop_p361.jpg', label: 'Onicectomía parcial', at: 'Mira este paso a paso', credit: 'The Atlas of Emergency Medicine (Knoop), p. 361' } },
          { t: 'Resecar la cuña lateral y el granuloma', d: 'Sin sacar la uña completa',
            say: 'Se reseca la cuña lateral de la uña con su borde encarnado y se elimina el tejido de granulación. No se saca la uña entera.' },
          { t: 'Matricectomía con fenol al 88%', d: '3 aplicaciones de 30 segundos; recidiva < 5%',
            say: 'Y se hace la matricectomía química con fenol al ochenta y ocho por ciento, tres aplicaciones de treinta segundos, para evitar la recidiva, que baja a menos de cinco por ciento.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'De la uña que se clava a la onicectomía parcial',
      images: [
        { src: 'animaciones/cirugia-21/A1_una_encarnada.mp4', label: 'Uña encarnada: estadios y onicectomía parcial', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 (uña del dedo; la anatomía es la misma en el ortejo) · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Estadios y resección de la cuña',
          say: 'Mira cómo el borde lateral de la uña penetra el pliegue: primero eritema y dolor, después pus, y al final tejido de granulación. Para operar se coloca un torniquete en la base del dedo y se hace el bloqueo digital sin adrenalina. Se reseca solo la cuña lateral, con su borde encarnado, y se aplica fenol sobre la matriz lateral, tres veces por treinta segundos, para que no vuelva a crecer.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Después del procedimiento',
      title: 'Antibiótico, tétano y cuándo derivar',
      cards: [
        { title: 'Seguimiento', tag: 'Cuidados', kind: 'criteria', items: [
          { t: 'Curación diaria con baños y apósito', d: '2 a 4 semanas',
            say: 'Después se cura a diario con baños y apósito durante dos a cuatro semanas.' },
          { t: 'Antibiótico: cloxacilina o cefadroxilo', d: 'Si hay celulitis, diabetes o inmunosupresión',
            say: 'Se agrega un antibiótico, cloxacilina o cefadroxilo, si hay celulitis o si el paciente es diabético o inmunodeprimido. Sin eso, el antibiótico solo no resuelve un borde que sigue penetrando.' },
          { t: 'Verificar vacuna antitetánica', d: 'En toda herida',
            say: 'Y verificas la vacunación antitetánica.' },
        ] },
        { title: 'Casos especiales', tag: 'Derivar', kind: 'alert', items: [
          { t: 'Isquemia o neuropatía diabética avanzada', d: 'Derivar',
            say: 'Se deriva al paciente con isquemia o con neuropatía diabética avanzada, porque ahí una herida en el pie puede complicarse mucho.' },
          { t: 'Avulsión total: uña destruida', d: 'Por micosis o trauma',
            say: 'La avulsión total de la uña se reserva para la uña destruida por una micosis o un trauma.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Onicocriptosis: estadios de Heifetz y conducta',
      head: ['Estadio', 'Hallazgo', 'Conducta'],
      rows: [
        { cells: ['I', 'Eritema, edema leve y dolor al presionar', 'Baños tibios, elevar el borde, corte recto, calzado amplio'],
          say: 'Estadio uno: eritema, edema y dolor. Baños tibios, elevar el borde, corte recto y calzado amplio.' },
        { cells: ['II', 'Supuración, celulitis del pliegue', 'Onicectomía parcial + antibiótico si hay celulitis'],
          say: 'Estadio dos: supuración y celulitis del pliegue. Onicectomía parcial, y antibiótico si hay celulitis.' },
        { cells: ['III', 'Tejido de granulación hipertrófico', 'Onicectomía parcial + matricectomía con fenol'],
          say: 'Estadio tres: tejido de granulación hipertrófico. Onicectomía parcial con matricectomía con fenol.' },
        { cells: ['Recidivante', 'Episodios repetidos pese al manejo conservador', 'Matricectomía química definitiva'],
          say: 'Y la recidivante, con episodios repetidos pese al manejo conservador: matricectomía química definitiva. Repetir antibióticos y baños es el error.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la uña encarnada a la conducta.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 30 años consulta por el cuarto episodio en un año de dolor en el borde lateral del ortejo mayor izquierdo, con secreción purulenta y tejido de granulación sobre el pliegue ungueal. En los episodios anteriores se manejó con baños de agua tibia y antibiótico oral, sin éxito duradero. No es diabético y tiene pulsos pedios normales.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Nuevo ciclo de antibióticos orales y baños de agua tibia' },
        { letter: 'B', text: 'Avulsión total de la uña con curación diaria' },
        { letter: 'C', text: 'Onicectomía parcial con matricectomía química con fenol bajo bloqueo digital sin adrenalina' },
        { letter: 'D', text: 'Elevar el borde de la uña con algodón y cortarla recta' },
        { letter: 'E', text: 'Derivar a cirugía vascular' },
      ],
      correct: 'C',
      explanation: 'Es una onicocriptosis recidivante en estadio III de Heifetz, con tejido de granulación y fracaso del manejo conservador. El tratamiento es la onicectomía parcial de la cuña lateral con matricectomía química con fenol bajo bloqueo digital sin adrenalina, lo que reduce la recidiva a menos de 5%. Los antibióticos y los baños solos no resuelven el borde que penetra, y la extirpación total de la uña no es necesaria porque la mayor parte de la uña es normal.',
      say: {
        stem: 'Un hombre de treinta años consulta por el cuarto episodio en un año de dolor en el borde lateral del ortejo mayor izquierdo, con secreción purulenta y tejido de granulación sobre el pliegue. Antes lo trataron con baños de agua tibia y antibióticos, sin éxito duradero. No es diabético y los pulsos son normales.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: otro ciclo de antibióticos y baños; avulsión total de la uña; onicectomía parcial con matricectomía con fenol; elevar el borde con algodón; o derivar a cirugía vascular. Piénsalo.',
        answer: 'Es la C. Es una uña encarnada recidivante, en estadio tres, con granulación y fracaso del manejo conservador. Toca la onicectomía parcial con matricectomía con fenol, bajo bloqueo digital sin adrenalina, y con eso la recidiva baja de cinco por ciento. La A tienta, pero los antibióticos no resuelven un borde que sigue penetrando. La B es excesiva, porque la mayor parte de la uña es normal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 6',
      stem: 'Un paciente de 76 años, con antecedente de accidente vascular secuelado, hace 2 meses, se alimenta mediante gastrostomía, la cual fue realizada endoscópicamente. Accidentalmente se retiró la sonda.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar radiografía de abdomen simple' },
        { letter: 'B', text: 'Solicitar ecografía abdominal' },
        { letter: 'C', text: 'Solicitar TAC de abdomen' },
        { letter: 'D', text: 'Instalar una nueva sonda por el ostoma' },
        { letter: 'E', text: 'Realizar una nueva gastrostomía' },
      ],
      correct: 'D',
      explanation: 'La gastrostomía tiene dos meses: el trayecto está maduro. Si la sonda se salió sin daño y sin signos clínicos de perforación o de filtración, se instala una nueva por el ostoma sin demora, porque el trayecto se cierra en pocas horas.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un hombre de setenta y seis años, con secuela de accidente vascular, se alimenta por una gastrostomía endoscópica de hace dos meses. Accidentalmente se retiró la sonda.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: radiografía de abdomen; ecografía abdominal; tomografía de abdomen; instalar una nueva sonda por el ostoma; o hacer una nueva gastrostomía. Piénsalo.',
        answer: 'Es la D. La gastrostomía tiene dos meses, así que el trayecto está maduro y se cierra en pocas horas. Si no hay signos de perforación ni de filtración, repones una sonda por el mismo ostoma, enseguida. Las imágenes, de la A a la C, retrasan algo que no tiene por qué esperar, y la E es una nueva cirugía innecesaria. Distinto sería un trayecto reciente, de menos de cuatro semanas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Punción venosa',
      stem: 'Una mujer de 58 años, operada hace un año de una mastectomía derecha con disección axilar, necesita exámenes de sangre. Está en la camilla, tranquila, sin anticoagulantes. La enfermera ya le colocó el torniquete en el brazo derecho.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Puncionar el brazo derecho sin torniquete prolongado, para ser más rápido' },
        { letter: 'B', text: 'Usar el brazo izquierdo, con el torniquete menos de un minuto y soltándolo antes de retirar la aguja' },
        { letter: 'C', text: 'Puncionar el brazo derecho, ya que pasó un año de la cirugía' },
        { letter: 'D', text: 'Puncionar la arteria radial para evitar el linfedema' },
        { letter: 'E', text: 'Reencapuchar la aguja con una mano antes de descartarla' },
      ],
      correct: 'B',
      explanation: 'El brazo ipsilateral a una mastectomía con disección axilar no se punciona, por el riesgo de linfedema e infección, aunque haya pasado tiempo: se usa el contralateral. El torniquete se deja por menos de 1 minuto y se suelta antes de retirar la aguja. La aguja nunca se reencapucha.',
      say: {
        stem: 'Una mujer de cincuenta y ocho años, operada hace un año de una mastectomía derecha con disección axilar, necesita exámenes de sangre. No toma anticoagulantes. La enfermera ya le colocó el torniquete en el brazo derecho.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: puncionar el brazo derecho con torniquete breve; usar el brazo izquierdo, con torniquete menos de un minuto y soltándolo antes de retirar la aguja; puncionar el derecho porque ya pasó un año; puncionar la arteria radial; o reencapuchar la aguja con una mano. Piénsalo.',
        answer: 'Es la B. El brazo de la mastectomía con disección axilar no se punciona, por el riesgo de linfedema y de infección, aunque haya pasado un año. Usas el brazo contrario, con el torniquete menos de un minuto, y lo sueltas antes de retirar la aguja. La C tienta, porque el tiempo parece tranquilizar, pero la restricción es permanente. Y la aguja nunca se reencapucha.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: cirugía menor',
      cards: [
        { title: 'Punción y drenajes', tag: 'Lo que se pregunta', kind: 'key', items: [
          { t: 'Torniquete < 1 minuto', d: 'Nunca en el brazo con mastectomía y disección axilar',
            say: 'Cerremos con las reglas de oro. En la punción venosa, el torniquete va menos de un minuto, nunca en el brazo de una mastectomía con disección axilar, y nunca se reencapucha la aguja.' },
          { t: 'Drenaje: registrar débito y aspecto', d: 'Retirar si es seroso y < 30-50 mL/día',
            say: 'En un drenaje se registra el débito y el aspecto, y se retira cuando es seroso y menor de treinta a cincuenta mililitros al día.' },
          { t: 'Gastrostomía madura: reponer por el ostoma', d: '> 4 semanas, sin signos de perforación',
            say: 'Una gastrostomía madura, de más de cuatro semanas, cuya sonda se sale, se repone de inmediato por el ostoma, tras verificar su posición.' },
        ] },
        { title: 'Uña encarnada', tag: 'Conducta', kind: 'alert', items: [
          { t: 'Estadio I: baños y elevar el borde', d: 'Corte recto y calzado amplio',
            say: 'Uña encarnada en estadio uno: baños, elevar el borde, corte recto y calzado amplio.' },
          { t: 'Estadios II-III o recidiva: onicectomía parcial', d: 'Con fenol al 88% bajo bloqueo digital sin adrenalina',
            say: 'En los estadios dos y tres o ante recidiva: onicectomía parcial con matricectomía con fenol, bajo bloqueo digital con lidocaína sin adrenalina. Si te llevas una sola idea de hoy: en cirugía menor el error más castigado es hacer de más, como sacar la uña entera, o dejar de más, como el torniquete. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Uña encarnada (onicocriptosis)',
    root: N('start', 'Dolor en el borde de la uña', 'Ortejo mayor; examinar el pliegue',
      'Un paciente consulta por dolor en el borde de la uña, casi siempre del ortejo mayor. Examinas el pliegue ungueal y defines el estadio de Heifetz.',
      ['Estadio I', N('do', 'Manejo conservador', 'Eritema, edema y dolor',
        'Si solo hay eritema, edema y dolor, es el estadio uno. Indicas baños de agua tibia con jabón, elevar el borde de la uña con algodón o gasa, corte recto y calzado amplio.')],
      ['Estadio II o III', N('q', '¿Diabético, isquémico o inmunodeprimido?', 'Antes de operar',
        'Si hay supuración o tejido de granulación, es el estadio dos o tres. Antes de operar te preguntas si el paciente es diabético, isquémico o inmunodeprimido.',
        ['No', N('do', 'Onicectomía parcial', 'Bloqueo digital sin adrenalina; fenol 88%',
          'Si no, haces una onicectomía parcial con matricectomía con fenol, bajo bloqueo digital con lidocaína sin adrenalina, y agregas antibiótico si hay celulitis.')],
        ['Sí', N('refer', 'Derivar', 'Isquemia o neuropatía avanzada',
          'Si hay isquemia o neuropatía diabética avanzada, derivas. Y a todos les verificas la vacuna antitetánica.')],
      )],
      ['Recidiva pese a lo conservador', N('do', 'Matricectomía química definitiva', 'No repetir antibióticos',
        'Si recidiva pese al manejo conservador, el tratamiento es la matricectomía química definitiva. Repetir antibióticos y baños no lo resuelve.')],
    ),
  },
};
