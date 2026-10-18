// Clase 11.17 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-17).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-17',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'De la profilaxis correcta a la evisceración que no se puede esperar',
      say: 'Bienvenido. En la clase anterior vimos por qué aparece la fiebre según el día postoperatorio, y una de esas letras era Wound, la herida. Hoy nos metemos de lleno en esa herida: cómo se previene su infección, cómo se clasifica cuando ya aparece, y qué haces si la pared abdominal se abre por completo. Esta última es una urgencia real, así que préstale mucha atención a esa parte. Antes, partimos con la asepsia y el campo estéril.',
    },

    {
      type: 'points',
      kicker: 'Antes de operar',
      title: 'Asepsia, antisepsia y campo estéril',
      cards: [
        { title: 'Asepsia y antisepsia', tag: 'No son lo mismo', kind: 'key', items: [
          { t: 'Asepsia: evitar contaminar', d: 'Autoclave, campo y ropa estériles',
            say: 'Partamos por las palabras, que el examen las separa. La asepsia es el conjunto de medidas que evita la contaminación: instrumental esterilizado con vapor en autoclave, campo y ropa estériles, y buena técnica. La desinfección, en cambio, se aplica a objetos inanimados.' },
          { t: 'Antisepsia: sobre tejido vivo', d: 'Piel: clorhexidina alcohólica',
            say: 'La antisepsia reduce los microorganismos en el tejido vivo con antisépticos. En la piel se prefiere la clorhexidina alcohólica, o povidona yodada, que hay que dejar secar antes de incidir. La clorhexidina no se usa en ojos ni en oído medio. Y el lavado quirúrgico de manos dura de dos a cinco minutos, o se hace con fricción alcohólica.' },
        ] },
        { title: 'Lo que baja la infección', tag: 'Medidas simples', kind: 'pharma', items: [
          { t: 'El vello no se rasura', d: 'Se corta con clipper justo antes',
            say: 'El vello no se rasura con navaja. Si molesta, se corta con una máquina, el clipper, inmediatamente antes de operar, porque la navaja deja microcortes que se colonizan.' },
          { t: 'Normotermia y glicemia', d: 'Glicemia menor de 180 mg/dL',
            say: 'Además se mantienen la normotermia, la oxigenación y una glicemia menor de ciento ochenta a doscientos miligramos por decilitro. Son medidas que reducen la infección de la herida.' },
        ] },
        { title: 'Ayudantía quirúrgica', tag: 'Campo estéril', kind: 'normal', items: [
          { t: 'Manos sobre la cintura', d: 'Bajo los hombros; la espalda no es estéril',
            say: 'Si te toca ayudar, mantén el campo estéril: las manos quedan sobre la cintura y bajo los hombros, no tocas nada que no sea estéril, la espalda del equipo no es estéril, y avisas de inmediato si algo se contamina.' },
          { t: 'Contar y prevenir cortes', d: 'Compresas, instrumental, bandeja neutra',
            say: 'Se cuentan las compresas y el instrumental, se previene el accidente cortopunzante con una bandeja neutra para pasar los elementos, sin reencapuchar agujas, y participas en la pausa de seguridad de la lista de verificación.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Prevención',
      title: 'Clasificación de la herida y profilaxis',
      cards: [
        { title: 'Según contaminación', tag: 'Cuatro clases', kind: 'key', items: [
          { t: 'Limpia', d: 'Sin abrir tubo digestivo ni vía urinaria',
            say: 'Toda herida se clasifica antes de operar, porque de ahí sale la decisión de dar o no antibióticos. La limpia es la que no abre el tubo digestivo, la vía biliar ni la urinaria, como una tiroidectomía.' },
          { t: 'Limpia contaminada', d: 'Abre el tubo digestivo en forma controlada',
            say: 'La limpia contaminada abre el tubo digestivo, la vía biliar o la urinaria, pero de forma programada y controlada, como una colecistectomía o una apendicectomía no complicada.' },
          { t: 'Contaminada y sucia', d: 'Derrame grosero o pus ya presente',
            say: 'La contaminada tiene un derrame grosero de contenido intestinal, y la sucia ya tiene pus libre, como una peritonitis por perforación. Ahí ya no hablamos de profilaxis, sino de tratamiento antibiótico.' },
        ] },
        { title: 'La profilaxis correcta', tag: 'Cefazolina', kind: 'pharma', items: [
          { t: 'Solo en limpia contaminada', d: 'La limpia casi nunca la necesita',
            say: 'La profilaxis antibiótica se da en la limpia contaminada y en la contaminada. La limpia no la necesita, salvo que se instale una malla o una prótesis.' },
          { t: 'Antes de la incisión', d: 'Entre treinta y sesenta minutos antes',
            say: 'Y el detalle que más se pregunta: se administra entre treinta y sesenta minutos antes de la incisión, no después, para que el antibiótico ya esté actuando cuando el cirujano corta.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clasificación',
      title: '¿Dónde está la infección en la herida?',
      nodes: [
        { id: 'ini', col: 0, row: 2, k: 'start', t: 'Fiebre y herida sospechosa', s: '¿Hasta dónde llega?' },
        { id: 'sup', col: 1, row: 0, k: 'risk', t: 'Piel y tejido subcutáneo', s: 'Infección incisional superficial' },
        { id: 'pro', col: 1, row: 2, k: 'risk', t: 'Fascia y músculo', s: 'Infección incisional profunda' },
        { id: 'org', col: 1, row: 4, k: 'alert', t: 'Cavidad manipulada', s: 'Infección de órgano o espacio' },
        { id: 'ts', col: 2, row: 0, k: 'good', t: 'Retirar puntos y drenar', s: 'Curación abierta' },
        { id: 'tp', col: 2, row: 2, k: 'good', t: 'Desbridar tejido no viable', s: 'Drenaje amplio' },
        { id: 'to', col: 2, row: 4, k: 'refer', t: 'Drenaje guiado por escáner', s: 'O nueva cirugía de aseo' },
      ],
      edges: [
        { from: 'ini', to: 'sup' }, { from: 'ini', to: 'pro' }, { from: 'ini', to: 'org' },
        { from: 'sup', to: 'ts' }, { from: 'pro', to: 'tp' }, { from: 'org', to: 'to' },
      ],
      steps: [
        { show: ['ini'], note: 'La profundidad decide el manejo',
          say: 'Ya con la infección instalada, lo que decide el manejo es qué tan profundo llega el compromiso.' },
        { show: ['sup', 'ts'], note: 'La más frecuente y la más simple',
          say: 'Si solo compromete la piel y el tejido subcutáneo, es una infección incisional superficial. Se retiran los puntos de esa zona, se abre y se drena, con curaciones abiertas después. Mira esta herida: ya se abrió, el fondo tiene fibrina y los bordes están enrojecidos, y se cura así, abierta.',
          photo: { src: 'biblioteca/10_cirugia/cirugia-17/09_herida-infectada-abierta__knoop_p674.jpg', label: 'Herida abierta, bordes rojos', at: 'Mira esta herida', credit: 'The Atlas of Emergency Medicine (Knoop), p. 674' } },
        { show: ['pro', 'tp'], note: 'Ya compromete la fascia',
          say: 'Si llega hasta la fascia o el músculo, es una infección incisional profunda, y ahí necesitas desbridar el tejido que ya no está viable, además del drenaje.' },
        { show: ['org', 'to'], note: 'La más grave, dentro del abdomen',
          say: 'Y si el compromiso está dentro de la cavidad que se manipuló, es una infección de órgano o espacio, como un absceso intraabdominal. Ahí el drenaje se hace guiado por escáner o ecografía, o con una nueva cirugía de aseo si no alcanza.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Infección de sitio quirúrgico',
      title: 'Plazos, fascitis y cultivo',
      cards: [
        { title: 'Qué esperar', tag: 'Día cinco a siete', kind: 'key', items: [
          { t: 'Dentro de 30 días', d: '90 días si hay implante',
            say: 'La infección de sitio quirúrgico ocurre dentro de los treinta días de la cirugía, o noventa si hay un implante, y se manifiesta hacia el día cinco a siete con dolor, eritema, calor, edema, secreción purulenta y fiebre. El eje del tratamiento es abrir, drenar y curar; los antibióticos se agregan si hay celulitis extensa, fiebre o inmunosupresión, cubriendo Staphylococcus aureus.' },
          { t: 'Hematoma: sangre, no pus', d: 'Puede avisar de una hemorragia',
            say: 'No toda herida abultada es infección. Mira este hematoma de la herida: es sangre acumulada, no pus, y puede ser la señal de una hemorragia postoperatoria.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-17/02_hematoma-de-herida_1__cto-cirugia_p25.jpg', label: 'Hematoma de herida', at: 'Mira este hematoma', credit: 'Manual CTO Cirugía 14.ª ed., p. 25' } },
          { t: 'Fascitis necrotizante', d: 'Dolor desproporcionado: urgencia',
            say: 'La que no puedes pasar por alto es la fascitis necrotizante: dolor desproporcionado, crepitación, ampollas hemorrágicas y shock. En esta imagen la infección ya llegó a la fascia. Es una urgencia: desbridamiento amplio y antibióticos de amplio espectro.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-17/01_fascitis-necrotizante-postoperatoria__cto-cirugia_p26.jpg', label: 'Fascitis postoperatoria', at: 'En esta imagen', credit: 'Manual CTO Cirugía 14.ª ed., p. 26' } },
        ] },
        { title: 'Cultivo de la herida', tag: 'Interpretar y emplear', kind: 'criteria', items: [
          { t: 'Solo si hay infección clínica', d: 'Pus, celulitis o fiebre',
            say: 'El cultivo se toma solo si hay signos clínicos de infección, no de una herida simplemente colonizada. Se pide sobre todo en absceso recurrente, inmunodeprimido, sospecha de SAMR o falta de respuesta.' },
          { t: 'Pus aspirado o tejido profundo', d: 'No un torulado superficial',
            say: 'La muestra útil es el pus aspirado con jeringa o el tejido profundo, después de limpiar con suero fisiológico. Para anaerobios se transporta sin aire.' },
          { t: 'Se lee con la clínica', d: 'Flora mixta superficial: colonización',
            say: 'Y se interpreta con la clínica: la flora mixta superficial es colonización, mientras que un germen como Staphylococcus aureus o una enterobacteria en una muestra profunda, con un cuadro compatible, es el agente causal. El antibiograma permite ajustar el esquema.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Dehiscencia',
      title: 'Cuando la pared abdominal se abre',
      cards: [
        { title: 'El signo que la anuncia', tag: 'Día cinco a ocho', kind: 'alert', items: [
          { t: 'Líquido rosado abundante', d: 'Se le llama agua de carne',
            say: 'Antes de la evisceración hay un aviso: la salida de un líquido rosado y abundante, que se conoce como agua de carne. Aparece típicamente entre el día cinco y el ocho.' },
          { t: 'Anuncia la fascia rota', d: 'No es un simple seroma',
            say: 'Ese signo casi siempre significa que la fascia por debajo ya cedió, y no es un seroma cualquiera. Fíjate bien en él, porque es la pista que se pregunta.' },
          { t: 'Dehiscencia: bordes separados', d: 'Puede avanzar a evisceración',
            say: 'La dehiscencia es la separación de los bordes de la herida; mira esta imagen. Y en esta lámina se ve cómo pasa de la dehiscencia a la evisceración, cuando las asas salen por la pared abierta.',
            photos: [
              { src: 'biblioteca/10_cirugia/cirugia-17/01_dehiscencia_herida__bailey_p68.jpg', label: 'Dehiscencia', at: 'mira esta imagen', credit: 'Bailey & Love 27.ª ed., Fig. 5.7' },
              { src: 'biblioteca/10_cirugia/cirugia-17/02_evisceracion_etapas__usuario.jpg', label: 'Dehiscencia a evisceración', at: 'en esta lámina', credit: 'Aportada por el usuario (enfermerabuenosaires.com, licencia por verificar)' },
            ] },
        ] },
        { title: 'Evisceración: qué haces', tag: 'Urgencia quirúrgica', kind: 'key', items: [
          { t: 'Cubrir con compresas tibias', d: 'Empapadas en suero fisiológico',
            say: 'Si las asas ya salieron por la herida, como en esta fotografía, lo primero es cubrirlas con compresas estériles empapadas en suero fisiológico tibio, para que no se sequen ni se dañen.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-17/03_evisceracion_expuesta__usuario.jpg', label: 'Evisceración', at: 'como en esta fotografía', credit: 'Aportada por el usuario (enfermerabuenosaires.com, licencia por verificar)' } },
          { t: 'Nunca reintroducirlas', d: 'Puedes perforar el intestino',
            say: 'Nunca intentes meter las asas de vuelta ahí mismo: puedes perforar el intestino o contaminar todavía más la cavidad.' },
          { t: 'Traslado urgente a pabellón', d: 'Con vía venosa y suero',
            say: 'Instala una vía venosa, pasa suero, y trasládalo de inmediato a pabellón para el cierre definitivo. No es algo que se pueda dejar para más tarde.' },
        ] },
        { title: 'Secuela tardía', tag: 'Meses o años', kind: 'normal', items: [
          { t: 'Eventración', d: 'Masa en la cicatriz; malla electiva',
            say: 'Y una secuela tardía: la infección, la dehiscencia de fascia y la cirugía de urgencia son los principales factores de una hernia incisional, la eventración. Aparece meses o años después como una masa en la cicatriz y se repara en forma electiva con malla. A diferencia de la evisceración, rara vez es urgente, salvo que se incarcere.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fístula',
      title: 'Fístula del intestino delgado: SNAP',
      nodes: [
        { id: 'ini', col: 0, row: 1, k: 'start', t: 'Contenido entérico por la herida', s: 'Día 5 a 10, con fiebre e íleo' },
        { id: 's', col: 2, row: 0, k: 'alert', t: 'Sepsis', s: 'Control y drenaje' },
        { id: 'n', col: 2, row: 1, k: 'good', t: 'Nutrición', s: 'Ayuno y parenteral' },
        { id: 'a', col: 2, row: 2, k: 'q', t: 'Anatomía', s: 'Fistulografía y TAC' },
        { id: 'p', col: 2, row: 3, k: 'refer', t: 'Procedimiento', s: 'Cirugía diferida' },
      ],
      edges: [
        { from: 'ini', to: 's' }, { from: 'ini', to: 'n' }, { from: 'ini', to: 'a' }, { from: 'ini', to: 'p' },
      ],
      steps: [
        { show: ['ini'], note: 'Casi siempre postoperatoria',
          say: 'Cerca de las heridas hay otra complicación: la fístula del intestino delgado. Entre el setenta y cinco y el ochenta y cinco por ciento son postoperatorias, por dehiscencia de una anastomosis o una lesión inadvertida. Entre los días cinco y diez, mira esta herida: sale contenido entérico o bilioso, con fiebre, dolor e íleo. Se clasifica por el débito: bajo, menos de doscientos mililitros al día, y alto, más de quinientos.',
          photo: { src: 'biblioteca/10_cirugia/cirugia-17/08_fistula-fecal-herida__bailey-love_p067.jpg', label: 'Fístula fecal por la herida', at: 'mira esta herida', credit: 'Bailey & Love 27.ª ed., p. 67' } },
        { show: ['s'], note: 'S: sepsis primero',
          say: 'El manejo inicial sigue el orden SNAP. La S es de sepsis: se controla la infección y se drena cualquier colección.' },
        { show: ['n'], note: 'N: nutrición',
          say: 'La N es de nutrición: ayuno y nutrición parenteral. Además se reponen líquidos y electrolitos, se protege la piel y se usan inhibidores de la bomba de protones u octreótido para bajar el débito.' },
        { show: ['a'], note: 'A: definir la anatomía',
          say: 'La A es de anatomía: se define con fistulografía o escáner de dónde sale y si hay obstrucción distal.' },
        { show: ['p'], note: 'P: cirugía diferida',
          say: 'Y la P es de procedimiento quirúrgico, pero diferido, nunca de entrada. Muchas fístulas cierran solas si no hay obstrucción distal, cuerpo extraño, epitelización ni enfermedad de base.' },
      ],
    },


    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'La herida, día por día',
      images: [
        { src: 'animaciones/cirugia-17/A1_herida_linea_tiempo.mp4', label: 'Línea de tiempo de la herida', credit: 'Gráfico propio · Animación propia' },
      ],
      steps: [
        { note: 'Profilaxis antes; infección y dehiscencia después',
          say: 'Mira la línea de tiempo de la herida. La cefazolina se da entre treinta y sesenta minutos antes de la incisión. Después de operar, entre el día cinco y el siete aparece la infección de sitio quirúrgico, y el agua de carne anuncia la dehiscencia entre los días cinco y ocho. La ventana de vigilancia dura treinta días, o noventa si hay implante.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, desde la herida infectada hasta la evisceración.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Herida, profilaxis y dehiscencia',
      head: ['Situación', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Colecistectomía electiva', 'Cefazolina 30 a 60 minutos antes', 'Darla después de cerrar la piel'],
          say: 'Repasemos las trampas. En una colecistectomía electiva, la cefazolina se da entre treinta y sesenta minutos antes de la incisión. El error es administrarla después de terminar la cirugía.' },
        { cells: ['Hernioplastía con malla', 'Sí lleva profilaxis, aunque sea limpia', 'Omitirla por ser cirugía limpia'],
          say: 'En una hernioplastía con malla sí se da profilaxis, aunque la herida sea limpia, porque hay un cuerpo extraño de por medio. El error es omitirla solo por la clasificación.' },
        { cells: ['Infección superficial de la herida', 'Abrir y drenar', 'Partir con antibióticos sin drenar'],
          say: 'Frente a una infección superficial de la herida, la conducta es abrir y drenar. Partir con antibióticos sin drenar retrasa la curación.' },
        { cells: ['Líquido en agua de carne', 'Sospechar dehiscencia de fascia', 'Confundirlo con un seroma banal'],
          say: 'El líquido en agua de carne te obliga a sospechar una dehiscencia de fascia. El error es confundirlo con un seroma banal y no revisar la herida.' },
        { cells: ['Vello en la zona operatoria', 'Clipper justo antes de operar', 'Rasurar con navaja la noche anterior'],
          say: 'Si hay vello, se corta con máquina justo antes de operar, con clorhexidina alcohólica. El error es rasurar con navaja, sobre todo la noche anterior, porque los microcortes se colonizan.' },
        { cells: ['Contenido entérico por la herida', 'SNAP: sepsis, nutrición, anatomía, cirugía diferida', 'Reoperar de entrada'],
          say: 'Si sale contenido entérico por la herida, el orden es SNAP: sepsis, nutrición, anatomía y procedimiento diferido. El error es reoperar de entrada un abdomen inflamado.' },
        { cells: ['Evisceración', 'Compresas húmedas + pabellón urgente', 'Reintroducir las asas en la cama'],
          say: 'Y ante una evisceración: compresas húmedas tibias y pabellón urgente. El error, el más grave de esta clase, es reintroducir las asas en la cama del paciente.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 68 años, obeso y con tos crónica por EPOC, operado hace 6 días de una laparotomía de urgencia por peritonitis apendicular. Mientras tose con fuerza, siente un dolor agudo en el abdomen. Al revisar la herida, el apósito está empapado de líquido serosanguinolento abundante, y se observan asas de intestino delgado protruyendo a través de la herida, con serosa enrojecida pero viable.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Reintroducir las asas manualmente y cerrar la piel con puntos gruesos' },
        { letter: 'B', text: 'Cubrir las asas con compresas estériles empapadas en suero tibio y trasladar a pabellón' },
        { letter: 'C', text: 'Aplicar un vendaje compresivo seco y mantener observación ambulatoria' },
        { letter: 'D', text: 'Instalar un sistema de aspiración negativa directo sobre las asas expuestas' },
        { letter: 'E', text: 'Indicar heparina de bajo peso molecular y solicitar un escáner de abdomen' },
      ],
      correct: 'B',
      explanation: 'Es una evisceración aguda, favorecida por la tos crónica y la peritonitis previa. Se cubren las asas con compresas estériles húmedas tibias para evitar su desecación y necrosis, sin intentar reintroducirlas, y se traslada de inmediato a pabellón para el cierre definitivo.',
      say: {
        stem: 'Vamos al caso. Hombre de sesenta y ocho años, obeso, con tos crónica por su EPOC, operado hace seis días de una laparotomía de urgencia por una peritonitis apendicular. Mientras tose con fuerza, siente un dolor agudo en el abdomen. Al revisar la herida, el apósito está empapado de un líquido rosado abundante, y se ven asas de intestino delgado saliendo por la herida, con la serosa enrojecida pero viable.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Las opciones: reintroducir las asas y cerrar la piel, cubrirlas con compresas tibias y trasladar a pabellón, aplicar un vendaje seco y observar, instalar aspiración directa sobre las asas, o dar anticoagulante y pedir un escáner. Piénsalo.',
        answer: 'La respuesta es la B. Es una evisceración: la tos crónica subió tanto la presión dentro del abdomen que rompió la fascia ya debilitada por la peritonitis previa. Cubres las asas con compresas húmedas tibias, para que no se sequen ni se necrosen, y trasladas de inmediato a pabellón. Reintroducirlas tú mismo es la trampa más peligrosa de esta pregunta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 11',
      stem: 'Mujer de 35 años consulta por dolor abdominal epigástrico recurrente. La ecografía abdominal muestra múltiples cálculos en la vesícula biliar, y se decide realizar una colecistectomía laparoscópica electiva.',
      question: '¿Cuál esquema antibiótico es de elección como profilaxis de infección de la herida operatoria?',
      options: [
        { letter: 'A', text: 'Amoxicilina con ácido clavulánico' },
        { letter: 'B', text: 'Ceftriaxona' },
        { letter: 'C', text: 'Clindamicina' },
        { letter: 'D', text: 'Cloxacilina' },
        { letter: 'E', text: 'Cefazolina' },
      ],
      correct: 'E',
      explanation: 'Toda cirugía limpia contaminada, como la colecistectomía electiva, requiere profilaxis antibiótica dirigida a cubrir cocáceas grampositivas y flora entérica. La cefazolina es el fármaco de elección en la mayoría de las cirugías abdominales, incluida esta.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Mujer de treinta y cinco años consulta por dolor epigástrico recurrente. La ecografía muestra múltiples cálculos en la vesícula, y se decide una colecistectomía laparoscópica electiva.',
        question: 'La pregunta es cuál esquema antibiótico es de elección como profilaxis de la infección de la herida operatoria.',
        options: 'Las opciones son: amoxicilina con ácido clavulánico, ceftriaxona, clindamicina, cloxacilina, o cefazolina. Piénsalo.',
        answer: 'La respuesta es la E, cefazolina. Esta cirugía es limpia contaminada, porque abre la vía biliar de forma programada, y ese es exactamente el grupo donde la profilaxis se indica. La cefazolina cubre bien la flora que importa aquí, y es la primera elección en la gran mayoría de las cirugías abdominales.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.3.016 · Infección quirúrgica e intrahospitalaria",
      "stem": "Mujer de 55 años, operada hace 5 días de una colectomía por laparotomía. Presenta fiebre de 38 grados y la herida operatoria muestra eritema, calor, induración y salida de pus entre los puntos, sin dehiscencia aponeurótica. Abdomen sin signos peritoneales.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Abrir la herida retirando puntos, drenar, tomar cultivo y realizar curaciones"
        },
        {
          "letter": "B",
          "text": "Antibiótico oral y mantener los puntos"
        },
        {
          "letter": "C",
          "text": "Reoperar de urgencia por sospecha de filtración"
        },
        {
          "letter": "D",
          "text": "Aplicar compresas frías y observar"
        },
        {
          "letter": "E",
          "text": "Cerrar nuevamente la herida con puntos de refuerzo"
        }
      ],
      "correct": "A",
      "explanation": "Es una infección superficial del sitio quirúrgico, típica entre el quinto y séptimo día. El tratamiento principal es abrir la herida, drenar, cultivar y curar, dejándola cerrar por segunda intención. Los antibióticos se agregan solo si hay celulitis extensa o compromiso sistémico significativo.",
      "say": {
        "stem": "Mujer de cincuenta y cinco años, operada hace cinco días de una colectomía abierta. Tiene fiebre de treinta y ocho grados, y la herida está roja, caliente, indurada, con pus entre los puntos, sin abrirse la aponeurosis. El abdomen no tiene signos peritoneales.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: abrir la herida y drenar, antibiótico oral manteniendo los puntos, reoperar de urgencia, compresas frías o reforzar el cierre. Piénsalo.",
        "answer": "Es la A. Una infección de herida se trata abriendo y drenando: el pus no se esteriliza con antibiótico si queda encerrado. Reoperar tienta por la fiebre, pero sin signos peritoneales la infección es superficial y no hay evidencia de filtración."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Agosto 2021 · Pregunta 123",
      "stem": "Un paciente de 17 años, apendicectomizado hace 6 horas, evoluciona con malestar general y dolor abdominal intenso. Su pulso es regular a 120 latidos por minuto, su presión arterial es 90/50 mmHg y su temperatura es 37,7 grados. En el examen abdominal presenta dolor a la palpación profunda y superficial, con signos peritoneales difusos, mayores en el hemiabdomen inferior.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Hemoperitoneo"
        },
        {
          "letter": "B",
          "text": "Evisceración"
        },
        {
          "letter": "C",
          "text": "Trombosis de la vena porta"
        },
        {
          "letter": "D",
          "text": "Dehiscencia de la base apendicular"
        },
        {
          "letter": "E",
          "text": "Tromboembolismo pulmonar masivo"
        }
      ],
      "correct": "D",
      "explanation": "Peritonitis difusa con taquicardia e hipotensión pocas horas después de una apendicectomía apunta a dehiscencia del muñón apendicular, complicación más frecuente que el hemoperitoneo. El hemoperitoneo da primero palidez y shock, con signos peritoneales tardíos. Requiere reanimación y reoperación.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Paciente de diecisiete años, operado de apendicitis hace seis horas, con malestar y dolor abdominal intenso. Tiene pulso de ciento veinte, presión de noventa sobre cincuenta, temperatura de treinta y siete coma siete y signos peritoneales difusos, mayores abajo.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: hemoperitoneo, evisceración, trombosis portal, dehiscencia de la base apendicular, o tromboembolismo pulmonar masivo. Piénsalo.",
        "answer": "Es la D. Una peritonitis difusa recién operado de apéndice es la filtración del muñón hasta que se demuestre lo contrario. El hemoperitoneo tienta por la hipotensión, pero es raro y parte con palidez y shock, dejando los signos peritoneales para después."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.1.011 · Fístulas del intestino delgado",
      "stem": "Hombre de 55 años, al quinto día de una resección intestinal por obstrucción, presenta salida de contenido bilioso por la herida operatoria, de aproximadamente 600 mL al día. Está afebril, hemodinámicamente estable y sin signos de peritonitis difusa.",
      "question": "¿Cuál es la conducta inicial más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Reoperación inmediata para cierre de la fístula"
        },
        {
          "letter": "B",
          "text": "Régimen liviano y alta con curaciones"
        },
        {
          "letter": "C",
          "text": "Reposo digestivo, reposición hidroelectrolítica, nutrición parenteral y protección de la piel"
        },
        {
          "letter": "D",
          "text": "Solo antibióticos de amplio espectro"
        },
        {
          "letter": "E",
          "text": "Sonda nasogástrica y alta precoz"
        }
      ],
      "correct": "C",
      "explanation": "Una fístula enterocutánea de alto débito (más de 500 mL al día) sin sepsis se maneja inicialmente en forma conservadora: reposo digestivo, corrección de volumen y electrolitos, nutrición parenteral, control del débito y cuidado de la piel. Muchas cierran espontáneamente; reoperar precozmente un abdomen inflamado tiene alta morbilidad.",
      "say": {
        "stem": "Hombre de cincuenta y cinco años, al quinto día de una resección intestinal, comienza con salida de contenido bilioso por la herida, unos seiscientos mililitros al día. Está afebril, estable y sin peritonitis difusa.",
        "question": "¿Cuál es la conducta inicial más adecuada?",
        "options": "Las opciones: reoperar de inmediato, régimen liviano y alta, reposo digestivo con hidratación, nutrición parenteral y protección de la piel, solo antibióticos, o sonda nasogástrica y alta. Piénsalo.",
        "answer": "Es la C. Es una fístula enterocutánea de alto débito sin sepsis, y el manejo inicial es conservador: reposo digestivo, reponer líquidos y electrolitos, nutrición parenteral y cuidar la piel. Reoperar tienta para cerrarla rápido, pero un abdomen recién operado e inflamado tiene altísimo riesgo de nuevas fístulas."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.3.003 · Asepsia y antisepsia",
      "stem": "Hombre de 45 años será sometido a una hernioplastía inguinal electiva. Presenta abundante vello en la zona operatoria.",
      "question": "¿Cuál es la medida de preparación de la piel más adecuada para prevenir la infección de sitio quirúrgico?",
      "options": [
        {
          "letter": "A",
          "text": "Rasurado con navaja la noche anterior"
        },
        {
          "letter": "B",
          "text": "Rasurado con navaja en el pabellón"
        },
        {
          "letter": "C",
          "text": "No retirar el vello y pintar con povidona acuosa"
        },
        {
          "letter": "D",
          "text": "Si es necesario, cortar el vello con máquina eléctrica (clipper) inmediatamente antes de la cirugía y aplicar clorhexidina alcohólica"
        },
        {
          "letter": "E",
          "text": "Aplicar alcohol al 70% como único antiséptico, 24 horas antes"
        }
      ],
      "correct": "D",
      "explanation": "El vello solo se retira si interfiere con la cirugía, y con máquina cortadora inmediatamente antes, porque el rasurado con navaja produce microlesiones que se colonizan y aumentan la infección de sitio quirúrgico, más aún si se hace la noche anterior. La antisepsia de elección es la clorhexidina en solución alcohólica.",
      "say": {
        "stem": "Hombre de cuarenta y cinco años que será operado de una hernia inguinal y tiene abundante vello en la zona operatoria.",
        "question": "¿Cuál es la mejor preparación de la piel para prevenir infección?",
        "options": "Las opciones: rasurar con navaja la noche anterior, rasurar con navaja en pabellón, no retirar el vello y usar povidona acuosa, cortar con máquina justo antes y aplicar clorhexidina alcohólica, o solo alcohol el día anterior. Piénsalo.",
        "answer": "Es la D. Si el vello molesta, se corta con máquina justo antes de operar, y la piel se pinta con clorhexidina alcohólica. Rasurar la noche anterior tienta porque parece más limpio, pero la navaja deja microcortes que se colonizan durante la noche y aumentan la infección."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.004 · Ayudantía quirúrgica (nociones básicas)",
      "stem": "Un interno se prepara para participar como ayudante en una laparotomía. Ya realizó el lavado quirúrgico de manos y se colocó delantal y guantes estériles.",
      "question": "¿Cuál de las siguientes zonas de su delantal se considera estéril durante la cirugía?",
      "options": [
        {
          "letter": "A",
          "text": "La parte anterior desde el tórax hasta la cintura y las mangas hasta 5 cm sobre el codo"
        },
        {
          "letter": "B",
          "text": "La espalda completa"
        },
        {
          "letter": "C",
          "text": "Todo el delantal, incluyendo bajo la cintura"
        },
        {
          "letter": "D",
          "text": "Solo los hombros y el cuello"
        },
        {
          "letter": "E",
          "text": "Ninguna zona, solo los guantes"
        }
      ],
      "correct": "A",
      "explanation": "Por convención, en el delantal quirúrgico solo se considera estéril la cara anterior desde el tórax hasta el nivel de la mesa (cintura) y las mangas desde los puños hasta unos 5 cm sobre el codo. La espalda, los hombros, el cuello y lo bajo la cintura no son estériles; por eso las manos se mantienen frente al tórax.",
      "say": {
        "stem": "Un interno se prepara para ayudar en una laparotomía; ya se lavó las manos y tiene puestos delantal y guantes estériles.",
        "question": "¿Qué zona de su delantal se considera estéril?",
        "options": "Las opciones: la parte anterior del tórax a la cintura y las mangas, la espalda completa, todo el delantal, solo hombros y cuello o ninguna zona. Piénsalo.",
        "answer": "Es la A. Solo es estéril el frente del delantal, del tórax a la cintura, y las mangas hasta sobre el codo, por eso las manos van siempre por delante y sobre la cintura. Todo el delantal tienta porque se puso estéril, pero la espalda y lo bajo la cintura no se pueden vigilar y se consideran contaminados."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.04.4.002 · Cultivo de heridas o abscesos",
      "stem": "Una mujer de 62 años, diabética, presenta al 6° día postoperatorio una herida abdominal con eritema, induración y salida de pus. Se abre la herida y se drena.",
      "question": "¿Cuál es la forma más adecuada de obtener una muestra para cultivo?",
      "options": [
        {
          "letter": "A",
          "text": "Tórula superficial de la piel alrededor de la herida"
        },
        {
          "letter": "B",
          "text": "No tomar cultivos en infecciones de herida"
        },
        {
          "letter": "C",
          "text": "Cultivo de la gasa del apósito"
        },
        {
          "letter": "D",
          "text": "Hemocultivos solamente"
        },
        {
          "letter": "E",
          "text": "Aspirado de pus o biopsia de tejido profundo, tras limpiar la superficie"
        }
      ],
      "correct": "E",
      "explanation": "El cultivo de heridas y abscesos se toma por aspiración del pus o biopsia de tejido profundo, previa limpieza de la superficie con suero, para evitar la flora colonizante de la piel. Las tórulas superficiales y los apósitos dan resultados poco confiables. La muestra se envía rápido al laboratorio, idealmente antes de iniciar antibióticos.",
      "say": {
        "stem": "Una mujer diabética de sesenta y dos años tiene al sexto día postoperatorio una herida abdominal con eritema, induración y pus, que se abre y drena.",
        "question": "¿Cuál es la forma más adecuada de tomar la muestra para cultivo?",
        "options": "Las opciones: tórula superficial de la piel, no cultivar, cultivo de la gasa, solo hemocultivos o aspirado de pus o biopsia profunda tras limpiar. Piénsalo.",
        "answer": "Es la E. Se aspira el pus o se toma tejido profundo después de limpiar, para no cultivar la flora de la piel. La tórula superficial tienta por fácil, pero arrastra contaminantes y confunde el resultado."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Profilaxis', tag: 'El momento importa', kind: 'pharma', items: [
          { t: 'Cefazolina en limpia contaminada', d: 'Treinta a sesenta minutos antes',
            say: 'Cerremos con las reglas de oro. La cefazolina se da en la cirugía limpia contaminada, entre treinta y sesenta minutos antes de la incisión.' },
          { t: 'Malla o prótesis', d: 'También lleva profilaxis',
            say: 'Y aunque la herida sea limpia, si hay malla o prótesis, también lleva profilaxis.' },
          { t: 'Sin rasurar con navaja', d: 'Clipper y clorhexidina alcohólica',
            say: 'El vello no se rasura con navaja: se corta con clipper justo antes, y la piel se prepara con clorhexidina alcohólica.' },
        ] },
        { title: 'Infección de la herida', tag: 'Drenar primero', kind: 'key', items: [
          { t: 'Abrir y drenar', d: 'Los antibióticos son un apoyo',
            say: 'Frente a la herida infectada, el pilar es abrir y drenar; los antibióticos son un apoyo, no el tratamiento principal.' },
          { t: 'Fístula: SNAP', d: 'Cirugía diferida, no de entrada',
            say: 'Y si aparece una fístula del intestino delgado, SNAP: sepsis, nutrición, anatomía y procedimiento diferido.' },
        ] },
        { title: 'Evisceración', tag: 'No se improvisa', kind: 'alert', items: [
          { t: 'Compresas húmedas tibias', d: 'Y traslado urgente a pabellón',
            say: 'Y ante la evisceración: compresas húmedas tibias y traslado urgente a pabellón.' },
          { t: 'Nunca reintroducir las asas', d: 'En la sala o en la cama',
            say: 'Si te llevas una sola idea de hoy: nunca reintroduzcas las asas tú mismo, y nunca olvides que el agua de carne anuncia lo que viene. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Herida operatoria: de la prevención a la evisceración',
    root: N('start', 'Cirugía abdominal', '¿Qué tan sucia es la herida?',
      'Toda cirugía se clasifica antes de operar, porque de eso depende si se da profilaxis antibiótica, y esa misma herida es la que después puede complicarse.',
      ['', N('q', '¿Cómo se clasifica la herida?', 'Limpia · limpia contaminada · contaminada · sucia',
        'Cuatro categorías según cuánto se contamina la herida durante la cirugía.',
        ['Limpia contaminada', N('do', 'Cefazolina preincisional', 'Treinta a sesenta minutos antes',
          'Abre el tubo digestivo o la vía biliar de forma programada, como una colecistectomía: se da cefazolina entre treinta y sesenta minutos antes de la incisión.')],
        ['Limpia con malla', N('do', 'Cefazolina igual', 'Por el cuerpo extraño protésico',
          'Aunque sea limpia, si se instala una malla o una prótesis, también se da profilaxis, porque infectar ese material es una catástrofe.')],
        ['Ya hay fiebre y herida sospechosa', N('q', '¿Hasta dónde llega el compromiso?', 'Superficial · profunda · de órgano',
          'Con la infección ya instalada, el manejo depende de la profundidad que alcanza.',
          ['Superficial', N('ok', 'Retirar puntos y drenar', 'Curación abierta',
            'Compromete piel y tejido subcutáneo: se abre esa zona, se drena y se cura abierta.')],
          ['Profunda u órgano', N('alert', 'Desbridar o drenar guiado', 'Antibióticos si hay compromiso extenso',
            'Compromete fascia o la cavidad manipulada: se desbrida el tejido no viable, o se drena guiado por imágenes, sumando antibióticos si hay celulitis extensa o sepsis.')])],
        ['Líquido en agua de carne', N('alert', 'Sospecha de dehiscencia de fascia', 'Revisar la herida de inmediato',
          'Salida de líquido rosado abundante entre el día cinco y ocho: la fascia probablemente ya cedió por debajo, aunque la piel se vea intacta.')],
        ['Asas visibles en la herida', N('refer', 'Evisceración: pabellón urgente', 'Compresas húmedas tibias, nunca reintroducir',
          'Se cubren las asas con compresas estériles empapadas en suero tibio, nunca se reintroducen a la fuerza, y se traslada de inmediato a pabellón para el cierre definitivo.')])]),
  },
};
