// Clase 17.20 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1). Tema NUEVO del libro (no estaba en psiquiatria_decks_data.json). Tier 2 del libro.
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-20). Códigos del Perfil: 5.01.1.017 Disfunción sexual, 5.01.1.019 Sexualidad humana y sus alteraciones, 5.01.3.012 Respuesta sexual humana,
// 5.01.3.006 Disforia de género y 3.01.3.014 Sexualidad, género y diversidad (books/data/v3_topic_codes.json). Nivel oficial en books/data/v3_codemap.json: sospecha, tratamiento inicial y derivar.
// Preguntas reales (class_questions.cjs --search "disfunción sexual|disfunción eréctil|eyaculación|vaginismo|dispareunia|parafilia|pedofilia|disforia|orientación sexual|respuesta sexual|libido"):
//   Julio 2024 P162 (dolor a la penetración por 6 meses: trastorno de dolor genitopélvico; es la misma de la viñeta del libro), Julio 2025 P112 (disfunción eréctil: inhibidores de la fosfodiesterasa 5),
//   Julio 2025 P113 (eyaculación precoz: dapoxetina más técnicas conductuales), Julio 2019 P73 (idea de ser pedófilo con rezos y evitación: TOC y no parafilia).
// No usadas por repetir: Julio 2024 P161 (idéntica a P162). DESCARTADA: Diciembre 2024 P107 (disfunción eréctil en el anciano: las alternativas B a E son un comentario del autor del banco y otras entidades).
// Fuera de la clase: Julio 2025 P83, Julio 2017 P145, Diciembre 2018 P111, Julio 2016 P171, Julio 2019 P50 y Diciembre 2022 P48 (hipogonadismo y endocrino), Julio 2025 P43 y Enero 2023 P47 (atrofia vaginal de la menopausia),
//   Diciembre 2025 P139 (lumbago con disfunción eréctil), Agosto 2021 P62 y Diciembre 2025 P94 (priapismo).
// Sin pregunta real sobre exhibicionismo, disforia de género ni orientación sexual: se usan tres preguntas del libro («Pregunta de práctica», Perfil V3 5.01.1.019, 5.01.3.006 y 3.01.3.014) como «Caso representativo».
// No se muestra imagen de ningún tipo. No hay foto verificada en atlas_fotos_verificadas.json ni en classes/media/biblioteca, y este tema no lleva imágenes clínicas.
// Animación: gráfico solo de código (psiq_nuevas.html?v=sexual): curvas de la respuesta sexual de Masters y Johnson con el período refractario masculino y el patrón multiorgásmico femenino.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-20',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Respuesta sexual, disfunciones, parafilias y diversidad: el vocabulario y la conducta inicial del médico general',
      say: 'Bienvenido. La sexualidad atraviesa toda la medicina general, y el examen la pregunta de forma muy ordenada. Veremos las fases de la respuesta sexual, las disfunciones sexuales y su manejo inicial, las parafilias y el límite entre una conducta atípica y un trastorno, y el vocabulario de sexo, género y orientación, con la disforia de género y la atención sin discriminación. Partamos por la fisiología.',
    },

    {
      type: 'flow',
      kicker: 'Fisiología',
      title: 'Las fases de la respuesta sexual',
      nodes: [
        { id: 'd', col: 0, row: 2, k: 'start', t: 'Deseo', s: 'Fase agregada por Kaplan' },
        { id: 'e', col: 1, row: 2, k: 'mech', t: 'Excitación', s: 'Vasocongestión, erección, lubricación' },
        { id: 'm', col: 2, row: 2, k: 'effect', t: 'Meseta', s: 'Máxima tensión sexual' },
        { id: 'o', col: 3, row: 2, k: 'risk', t: 'Orgasmo', s: 'Contracciones rítmicas y descarga' },
        { id: 'r', col: 4, row: 2, k: 'good', t: 'Resolución', s: 'Vuelve al estado basal' },
      ],
      edges: [
        { from: 'd', to: 'e' }, { from: 'e', to: 'm' }, { from: 'm', to: 'o' }, { from: 'o', to: 'r' },
      ],
      steps: [
        { show: ['e', 'm'], note: 'Masters y Johnson: cuatro fases',
          say: 'Masters y Johnson describieron cuatro fases sucesivas. La primera es la excitación, con vasocongestión genital, erección y lubricación. Sigue la meseta, el punto de máxima tensión sexual.' },
        { show: ['o', 'r'], note: 'Orgasmo y resolución',
          say: 'Luego el orgasmo, con contracciones rítmicas y descarga, y la resolución, en que el cuerpo vuelve al estado basal. En el hombre, la resolución incluye un período refractario, durante el cual no puede tener otro orgasmo. La mujer puede ser multiorgásmica.' },
        { show: ['d'], note: 'Kaplan agrega el deseo',
          say: 'El modelo de Kaplan agrega el deseo como fase inicial, y el DSM cinco une deseo y excitación en la mujer. Esa fase de deseo no es parte del modelo original, y eso se pregunta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Fisiología',
      title: 'Qué nervios y qué factores',
      cards: [
        { title: 'Control nervioso', tag: 'Hombre', kind: 'criteria', items: [
          { t: 'Erección: parasimpático S2-S4', d: 'Óxido nítrico y relajación del músculo liso',
            say: 'La erección es un fenómeno vascular bajo control parasimpático, de los segmentos sacros dos a cuatro, mediado por óxido nítrico y relajación del músculo liso cavernoso.' },
          { t: 'Emisión: simpático T11-L2', d: 'Eyaculación y orgasmo: nervios pudendos',
            say: 'La emisión depende del simpático, de T once a L dos, y la eyaculación y el orgasmo, de los nervios pudendos.' },
        ] },
        { title: 'Modifican la respuesta', tag: 'Qué la altera', kind: 'alert', items: [
          { t: 'Edad: más lenta, refractario más largo', d: 'La testosterona sostiene el deseo',
            say: 'Con la edad la respuesta se hace más lenta y el período refractario más largo. La testosterona sostiene el deseo en ambos sexos.' },
          { t: 'Enfermedades, fármacos, alcohol', d: 'ISRS, antihipertensivos, antipsicóticos',
            say: 'Y la respuesta se altera por enfermedades crónicas, fármacos como los ISRS, los antihipertensivos y los antipsicóticos, el alcohol, y factores psicológicos y de pareja.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Disfunciones sexuales',
      title: 'Cuándo es un trastorno',
      cards: [
        { title: 'Criterios del DSM-5', tag: 'Los tres', kind: 'criteria', items: [
          { t: '6 meses o más', d: 'Duración mínima',
            say: 'Para hablar de una disfunción sexual, el DSM cinco exige tres cosas. Que el síntoma dure seis meses o más.' },
          { t: 'En el 75 a 100 % de las ocasiones', d: 'Casi siempre',
            say: 'Que ocurra en el setenta y cinco a cien por ciento de las ocasiones.' },
          { t: 'Con malestar significativo', d: 'Deterioro o angustia',
            say: 'Y que cause malestar clínicamente significativo.' },
        ] },
        { title: 'Clasificación', tag: 'Cómo se rotulan', kind: 'key', items: [
          { t: 'De por vida o adquirida', d: 'Generalizada o situacional',
            say: 'Se clasifican además como de por vida o adquiridas, generalizadas o situacionales, y existe la forma inducida por sustancias o fármacos.' },
          { t: 'Masculinas', d: 'Deseo, eréctil, eyaculación precoz y retardada',
            say: 'Las masculinas son el trastorno del deseo hipoactivo, el trastorno eréctil, la eyaculación precoz y la eyaculación retardada.' },
          { t: 'Femeninas', d: 'Interés y excitación, orgásmico, dolor genitopélvico',
            say: 'Las femeninas son el trastorno del interés y la excitación sexual, el trastorno orgásmico y el trastorno de dolor genitopélvico y de la penetración, que incluye la dispareunia y el vaginismo.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Entidad y manejo',
      title: 'Cada disfunción y su manejo inicial',
      head: ['Entidad', 'Definición clave', 'Manejo inicial'],
      rows: [
        { cells: ['Trastorno eréctil', 'No obtiene o no mantiene la erección', 'Riesgo vascular; iPDE5 (no con nitratos)'],
          say: 'El trastorno eréctil: dificultad para obtener o mantener la erección. Se estudian los factores de riesgo vascular y se usan los inhibidores de la fosfodiesterasa cinco, que están contraindicados con nitratos.' },
        { cells: ['Eyaculación precoz', 'Cerca de 1 minuto, antes de lo deseado', 'Parada-inicio o compresión; ISRS o dapoxetina'],
          say: 'La eyaculación precoz ocurre cerca de un minuto después de la penetración, antes de lo deseado. Se usan las técnicas de parada-inicio o de compresión, y un ISRS o dapoxetina.' },
        { cells: ['Eyaculación retardada', 'Retardo o ausencia', 'Revisar fármacos; terapia sexual'],
          say: 'La eyaculación retardada: retardo o ausencia. Se revisan los fármacos, sobre todo los ISRS, y se hace terapia sexual.' },
        { cells: ['Deseo o excitación', 'Falta de deseo o de excitación', 'Depresión, fármacos, hipogonadismo, pareja'],
          say: 'La falta de deseo o de excitación. Se busca depresión, fármacos, hipogonadismo y problemas de pareja.' },
        { cells: ['Orgásmico femenino', 'Retardo o ausencia de orgasmo', 'Educación; focalización sensorial'],
          say: 'El trastorno orgásmico femenino: retardo o ausencia del orgasmo. Se educa y se usan ejercicios de focalización sensorial y terapia sexual.' },
        { cells: ['Dolor genitopélvico', 'Dolor o contracción en la penetración', 'Descartar causa orgánica; dilatadores'],
          say: 'Y el dolor genitopélvico y de la penetración: dolor, miedo o contracción de la musculatura en la penetración. Se descarta una causa orgánica y se usan dilatadores, terapia y fisioterapia del piso pélvico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Enfrentamiento',
      title: 'Psicógena frente a orgánica, y los fármacos',
      cards: [
        { title: 'Evaluación', tag: 'Qué preguntar y pedir', kind: 'criteria', items: [
          { t: 'Historia sexual y de pareja', d: 'Fármacos, alcohol, abuso',
            say: 'La evaluación parte con la historia sexual y de pareja, los fármacos, el alcohol, las drogas y los antecedentes de abuso, seguida de un examen genital. Se pide un estudio dirigido: glicemia, perfil lipídico y testosterona.' },
          { t: 'Erecciones matinales conservadas', d: 'Inicio brusco y situacional: psicógena',
            say: 'Si las erecciones nocturnas o matinales están conservadas, o el inicio es brusco y situacional, la causa es más bien psicógena. Si el inicio es gradual y generalizado, es orgánica: diabetes, vasculopatía, hipogonadismo o neuropatía.' },
        ] },
        { title: 'Fármacos que lo causan', tag: 'Los frecuentes', kind: 'pharma', items: [
          { t: 'ISRS: retardo del orgasmo', d: 'Cambiar a bupropión o mirtazapina',
            say: 'Los ISRS retrasan el orgasmo, y una opción es cambiarlos por bupropión o mirtazapina.' },
          { t: 'Antipsicóticos, betabloqueadores, tiazidas', d: 'Y espironolactona',
            say: 'Los antipsicóticos reducen el deseo por la hiperprolactinemia, y también lo hacen los betabloqueadores, las tiazidas y la espironolactona.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo inicial',
      title: 'Qué hace el médico general y cuándo derivar',
      cards: [
        { title: 'Lo que haces tú', tag: 'Tratamiento inicial', kind: 'key', items: [
          { t: 'Educar y bajar la ansiedad de desempeño', d: 'Tratar la causa; ajustar fármacos',
            say: 'El manejo inicial es educar y reducir la ansiedad de desempeño, tratar la causa y ajustar o cambiar el fármaco que la produce.' },
          { t: 'iPDE5 en la disfunción eréctil', d: 'Contraindicados con nitratos',
            say: 'En la disfunción eréctil, los inhibidores de la fosfodiesterasa cinco, que están contraindicados con nitratos. La testosterona solo si hay hipogonadismo confirmado.' },
          { t: 'Focalización sensorial; parada-inicio', d: 'Dilatadores y terapia en el vaginismo',
            say: 'Se usan los ejercicios de focalización sensorial de Masters y Johnson, las técnicas de parada-inicio o compresión en la eyaculación precoz, y dilatadores vaginales con terapia en el vaginismo.' },
        ] },
        { title: 'Derivar', tag: 'Cuándo', kind: 'alert', items: [
          { t: 'Terapia sexual, psiquiatría, urología o ginecología', d: 'Si fracasa el manejo inicial',
            say: 'Se deriva a terapia sexual, psiquiatría, urología o ginecología, según el caso, y ante el fracaso del manejo inicial.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Parafilias',
      title: 'Cuándo una conducta atípica es un trastorno',
      cards: [
        { title: 'Definiciones', tag: 'Parafilia y trastorno', kind: 'criteria', items: [
          { t: 'Parafilia: interés sexual atípico', d: 'Intenso; no es siempre un trastorno',
            say: 'Las parafilias son intereses sexuales atípicos e intensos. No todas son un trastorno.' },
          { t: 'Trastorno: 6 meses con malestar o sin consentimiento', d: 'Deterioro, o ejecutado con quien no consiente',
            say: 'Se diagnostica un trastorno parafílico cuando, durante seis meses o más, el patrón causa malestar o deterioro, o se ha ejecutado con una persona que no consiente o no puede consentir.' },
        ] },
        { title: 'Conducta', tag: 'Ley y derivación', kind: 'alert', items: [
          { t: 'Con un menor o sin consentimiento: delito', d: 'Denuncia obligatoria',
            say: 'La conducta con un menor o con una persona que no consiente es un delito y obliga a la denuncia. La entrevista a un niño víctima se hace según la Ley veintiuno cero cincuenta y siete, videograbada y por personal capacitado.' },
          { t: 'Psiquiatría: psicoterapia, ISRS o antiandrógenos', d: 'Bajo supervisión del especialista',
            say: 'El trastorno parafílico se deriva a psiquiatría para psicoterapia y, si procede, tratamiento farmacológico con ISRS o antiandrógenos bajo supervisión del especialista.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Parafilias',
      title: 'Cuál es cuál',
      head: ['Parafilia', 'Definición', 'Clave de examen'],
      rows: [
        { cells: ['Exhibicionismo', 'Exponer los genitales a desconocidos', 'Impulsos 6 meses; derivar'],
          say: 'El exhibicionismo es exponer los genitales a desconocidos, con impulsos recurrentes por seis meses.' },
        { cells: ['Voyeurismo', 'Observar a alguien sin su conocimiento', 'Aquí la persona mira'],
          say: 'El voyeurismo es observar a una persona desnuda sin su conocimiento. Es lo opuesto al exhibicionismo: aquí la persona mira.' },
        { cells: ['Frotteurismo', 'Tocar o rozar sin consentimiento', 'Delito; en lugares concurridos'],
          say: 'El frotteurismo es tocar o rozar a alguien sin su consentimiento, típicamente en lugares concurridos. Es un delito.' },
        { cells: ['Pedofilia', 'Atracción por niños prepúberes', 'Agente ≥ 16 años y 5 años mayor; denuncia'],
          say: 'La pedofilia es la atracción por niños prepúberes, en una persona de dieciséis años o más y al menos cinco años mayor. Si hay un delito, la denuncia es obligatoria.' },
        { cells: ['Fetichismo y travestismo', 'Objetos inanimados; vestirse del otro sexo', 'Trastorno solo con malestar o deterioro'],
          say: 'El fetichismo y el travestismo son trastornos solo si hay malestar o deterioro.' },
        { cells: ['Sadismo y masoquismo', 'Excitación por infligir o recibir sufrimiento', 'Trastorno si hay daño o sin consentimiento'],
          say: 'Y el sadismo y el masoquismo sexuales son trastornos solo si hay daño o falta de consentimiento.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Vocabulario',
      title: 'Sexo, género y orientación',
      head: ['Concepto', 'Qué describe', 'Ejemplo'],
      rows: [
        { cells: ['Sexo asignado al nacer', 'Clasificación biológica', 'Hombre, mujer, intersexual'],
          say: 'El sexo asignado al nacer es la clasificación biológica: hombre, mujer o intersexual.' },
        { cells: ['Identidad de género', 'Cómo se vive y se identifica la persona', 'Cisgénero, trans, no binario'],
          say: 'La identidad de género es cómo se vive y se identifica la persona. Una persona cisgénero se identifica con el sexo asignado, y una trans, no.' },
        { cells: ['Expresión de género', 'Cómo se manifiesta socialmente', 'Vestimenta, nombre, conducta'],
          say: 'La expresión de género es cómo se manifiesta socialmente: vestimenta, nombre, conducta.' },
        { cells: ['Orientación sexual', 'Hacia quién siente atracción', 'Hetero, homo, bisexual'],
          say: 'La orientación sexual es hacia quién siente atracción afectiva y sexual.' },
        { cells: ['Disforia de género', 'Malestar por incongruencia, 6 meses o más', 'Lo único que puede requerir atención'],
          say: 'Y la disforia de género es el malestar clínicamente significativo por la incongruencia, de al menos seis meses, entre el género vivido y el asignado. Es lo único de esta tabla que puede requerir atención clínica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Disforia de género',
      title: 'Cómo acompañar',
      cards: [
        { title: 'Principios', tag: 'Ambiente afirmativo', kind: 'key', items: [
          { t: 'Identidad desde los 2-3 años', d: 'Orientación se consolida en la adolescencia',
            say: 'La identidad de género se establece a los dos o tres años, y la orientación sexual se consolida en la adolescencia. La no conformidad de género por sí sola no es un trastorno, y la CIE-once la saca de los trastornos mentales.' },
          { t: 'Nombre social y trato respetuoso', d: 'Evaluar depresión y riesgo suicida',
            say: 'El manejo es un ambiente afirmativo, llamar a la persona por su nombre social, evaluar el riesgo suicida y la depresión, que son más frecuentes sobre todo si hay rechazo familiar, y apoyar a la familia.' },
          { t: 'Derivar a equipo especializado', d: 'Bloqueo puberal y hormonización',
            say: 'Se deriva a un equipo especializado, que decide el bloqueo puberal y la hormonización. El médico general no los inicia.' },
        ] },
        { title: 'Lo que no se hace', tag: 'Errores', kind: 'alert', items: [
          { t: 'Terapias de conversión', d: 'Sin eficacia y dañinas',
            say: 'Las terapias de conversión, para cambiar la orientación o la identidad, no tienen eficacia, causan daño y no son aceptables. La orientación homosexual o bisexual no es un trastorno, y la OMS la retiró de la clasificación en mil novecientos noventa.' },
          { t: 'Ley 21.120: cambio registral', d: 'Nombre y sexo',
            say: 'La Ley veintiuno ciento veinte, de dos mil dieciocho, permite el cambio registral de nombre y sexo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diversidad en la consulta',
      title: 'Anamnesis sin supuestos y tamizaje según órganos',
      cards: [
        { title: 'Cómo preguntar', tag: 'Abierto y sin supuestos', kind: 'key', items: [
          { t: 'Preguntar por prácticas y parejas', d: 'No suponer heterosexualidad',
            say: 'La anamnesis sexual se hace de forma abierta y sin supuestos: se pregunta por prácticas y parejas, en lugar de suponer heterosexualidad. La discriminación misma es un determinante de la salud mental.' },
        ] },
        { title: 'Tamizaje', tag: 'Según el riesgo y los órganos', kind: 'criteria', items: [
          { t: 'Mujeres con mujeres: PAP e ITS', d: 'También requieren tamizaje',
            say: 'Las mujeres que tienen sexo con mujeres también requieren Papanicolaou y tamizaje de infecciones de transmisión sexual.' },
          { t: 'Hombres con hombres: VIH, vacunas, profilaxis', d: 'Hepatitis B y VPH',
            say: 'Los hombres que tienen sexo con hombres tienen más riesgo de VIH y otras ITS, y se les ofrece tamizaje periódico, vacunas contra hepatitis B y VPH, y profilaxis cuando corresponde.' },
          { t: 'Personas trans: según los órganos que conservan', d: 'Tamizaje anatómico',
            say: 'En las personas trans se mantiene el tamizaje según los órganos que conservan.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'La curva de la respuesta sexual',
      images: [
        { src: 'animaciones/psiq-20/A1_respuesta_sexual.mp4', label: 'Masters y Johnson: fases y refractario', credit: 'Gráfico y animación propios' },
      ],
      steps: [
        { note: 'Excitación, meseta, orgasmo y resolución',
          say: 'Mira la curva del hombre. La tensión sexual sube en la excitación, se sostiene en la meseta, llega al pico en el orgasmo y cae en la resolución. Fíjate en el tramo sombreado: es el período refractario, en que no es posible un nuevo orgasmo. Se alarga con la edad. En la mujer, en cambio, la curva puede volver a subir sin ese tramo, y por eso puede ser multiorgásmica.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la queja sexual a la causa y a la conducta inicial.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Sexualidad: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Dolor a la penetración, 6 meses, examen normal', 'Dolor genitopélvico: dilatadores y terapia', 'Orgásmico o deseo hipoactivo'],
          say: 'Dolor y contracción en la penetración por seis meses, con examen normal y deseo y orgasmo conservados: trastorno de dolor genitopélvico. No es un trastorno orgásmico ni del deseo.' },
        { cells: ['Disfunción eréctil, HTA con enalapril', 'iPDE5 primera línea', 'Testosterona o consejería sola'],
          say: 'Disfunción eréctil sin hipogonadismo: inhibidores de la fosfodiesterasa cinco. El enalapril no los contraindica, a diferencia de los nitratos.' },
        { cells: ['Eyaculación en menos de 1 minuto', 'ISRS o dapoxetina y stop-start', 'Alprazolam o sildenafil'],
          say: 'Eyaculación al minuto de la penetración, con angustia: dapoxetina o un ISRS más técnicas conductuales. El alprazolam y el sildenafil no son el tratamiento.' },
        { cells: ['Idea intrusiva de ser pedófilo, la rechaza', 'TOC', 'Parafilia'],
          say: 'Una idea de ser pedófilo que lo angustia, con rezos y evitación de los niños: es una obsesión, un TOC. La parafilia se vive con excitación, no con horror.' },
        { cells: ['Muestra genitales a desconocidos', 'Exhibicionismo; derivar y denunciar si hay delito', 'Voyeurismo'],
          say: 'Mostrar los genitales a desconocidos es exhibicionismo. Voyeurismo es mirar. Frotteurismo es tocar.' },
        { cells: ['Adolescente que se identifica como mujer', 'Acompañar y derivar a equipo', 'Terapia de conversión u hormonas en APS'],
          say: 'Un adolescente con disforia de género: acompañamiento respetuoso y derivación a un equipo especializado. La terapia de conversión es dañina y las hormonas no las inicia el médico general.' },
        { cells: ['Atracción solo por mujeres, cómoda con su cuerpo', 'Orientación sexual; no es trastorno', 'Disforia de género'],
          say: 'La atracción hacia personas de su mismo sexo es orientación sexual. No es un trastorno ni disforia.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 33 años que consulta por dolor intenso durante la penetración, de 6 meses de evolución, por lo que ha dejado de tener relaciones sexuales en el último mes. Relata una contracción involuntaria de los músculos vaginales al intentar la penetración, con mucho miedo. El examen físico y ginecológico es normal; no hay infección ni lesión visible, y tiene deseo y orgasmo conservados.',
      question: '¿Cuál es el diagnóstico y el manejo inicial más adecuado?',
      options: [
        { letter: 'A', text: 'Trastorno orgásmico femenino; testosterona' },
        { letter: 'B', text: 'Trastorno de dolor genitopélvico y de la penetración; educación, descartar causa orgánica, dilatadores vaginales y terapia sexual' },
        { letter: 'C', text: 'Trastorno del deseo sexual hipoactivo; antidepresivo' },
        { letter: 'D', text: 'Vaginitis; metronidazol' },
        { letter: 'E', text: 'Trastorno por somatización; solo seguimiento' },
      ],
      correct: 'B',
      explanation: 'Trastorno de dolor genitopélvico y de la penetración (vaginismo y dispareunia): dolor y contracción involuntaria en la penetración por más de 6 meses, con malestar y evitación, sin causa orgánica. No es un trastorno orgásmico (no hay ausencia de orgasmo) ni del deseo. El manejo inicial es educación, descartar causa orgánica, dilatadores vaginales y terapia sexual, con derivación a ginecología o psiquiatría si no mejora.',
      say: {
        stem: 'Una mujer de treinta y tres años consulta por dolor intenso durante la penetración, desde hace seis meses, y desde hace un mes evita las relaciones. Cuenta que sus músculos vaginales se contraen de forma involuntaria y que siente mucho miedo. El examen ginecológico es normal, y el deseo y el orgasmo están conservados.',
        question: '¿Cuál es el diagnóstico y el manejo inicial más adecuado?',
        options: 'Las opciones: trastorno orgásmico con testosterona; trastorno de dolor genitopélvico con educación, dilatadores y terapia sexual; deseo hipoactivo con antidepresivo; vaginitis con metronidazol; o somatización. Piénsalo.',
        answer: 'Es la B. Dolor y contracción involuntaria en la penetración por más de seis meses, sin causa orgánica: trastorno de dolor genitopélvico y de la penetración. El manejo es educar, descartar causas orgánicas, usar dilatadores y terapia sexual, y derivar si no mejora. La A y la C tientan, pero aquí el orgasmo y el deseo están conservados.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 162',
      stem: 'Una paciente de 33 años consulta por un cuadro de 6 meses de evolución de dolor durante la penetración en las relaciones sexuales, por lo cual se ha negado a mantenerlas en el último mes. Su examen físico no muestra alteraciones.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno orgásmico femenino' },
        { letter: 'B', text: 'Trastorno por dolor genito-pélvico/penetración' },
        { letter: 'C', text: 'Trastorno depresivo mayor' },
        { letter: 'D', text: 'Trastorno por somatización' },
        { letter: 'E', text: 'Trastorno del deseo sexual hipoactivo' },
      ],
      correct: 'B',
      explanation: 'Dispareunia superficial o vaginismo, el trastorno por dolor genitopélvico y de la penetración: contracción involuntaria de los músculos vaginales que causa dolor durante la penetración. Se diferencia del trastorno orgásmico (ausencia de orgasmo) y del deseo sexual hipoactivo (disminución del deseo), que no presentan dolor.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Una paciente de treinta y tres años consulta por seis meses de dolor durante la penetración, y en el último mes se ha negado a tener relaciones. El examen físico es normal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: trastorno orgásmico; dolor genitopélvico y de la penetración; depresión mayor; somatización; o deseo sexual hipoactivo. Piénsalo.',
        answer: 'Es la B. El síntoma central es el dolor en la penetración, con evitación: dolor genitopélvico y de la penetración. Las alternativas A y E tientan porque son disfunciones sexuales, pero ninguna produce dolor: el trastorno orgásmico es la ausencia de orgasmo y el hipoactivo es la falta de deseo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 112',
      stem: 'Hombre de 55 años con disfunción eréctil de 6 meses de evolución, sin causa aparente. HTA controlada con enalapril. Sin síntomas de hipogonadismo.',
      question: '¿Cuál es el tratamiento de primera línea?',
      options: [
        { letter: 'A', text: 'Inhibidores de la fosfodiesterasa tipo 5 (sildenafil o tadalafil)' },
        { letter: 'B', text: 'Testosterona intramuscular' },
        { letter: 'C', text: 'Alprostadil intracavernoso' },
        { letter: 'D', text: 'Prótesis de pene' },
        { letter: 'E', text: 'Solo consejería psicológica' },
      ],
      correct: 'A',
      explanation: 'Disfunción eréctil: la primera línea son los inhibidores de la fosfodiesterasa tipo 5 (sildenafil, tadalafil), contraindicados con nitratos. El enalapril no los contraindica. La testosterona solo se usa si hay hipogonadismo confirmado.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un hombre de cincuenta y cinco años tiene disfunción eréctil de seis meses, sin causa aparente. Es hipertenso, controlado con enalapril, y no tiene síntomas de hipogonadismo.',
        question: '¿Cuál es el tratamiento de primera línea?',
        options: 'Las opciones: inhibidores de la fosfodiesterasa cinco; testosterona intramuscular; alprostadil intracavernoso; prótesis de pene; o solo consejería psicológica. Piénsalo.',
        answer: 'Es la A. Los inhibidores de la fosfodiesterasa cinco son la primera línea y el enalapril no los contraindica; lo que sí los contraindica son los nitratos. La B tienta porque se asocia la disfunción a testosterona baja, pero solo corresponde si el hipogonadismo está confirmado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 113',
      stem: 'Hombre de 30 años con eyaculación que ocurre antes o dentro del minuto de la penetración en el 90% de los encuentros, con angustia y evitación de relaciones.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Dapoxetina (ISRS de acción corta) + técnicas conductuales (stop-start)' },
        { letter: 'B', text: 'Alprazolam previo al coito' },
        { letter: 'C', text: 'Testosterona intramuscular' },
        { letter: 'D', text: 'Sildenafil' },
        { letter: 'E', text: 'Antidepresivos tricíclicos' },
      ],
      correct: 'A',
      explanation: 'Eyaculación precoz: el tratamiento combinado con un ISRS (dapoxetina o paroxetina a demanda) más terapia conductual (técnicas de parada-inicio o de compresión) tiene la mejor tasa de éxito.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un hombre de treinta años eyacula antes del minuto de la penetración en el noventa por ciento de los encuentros, con angustia y evitación de las relaciones.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: dapoxetina más técnicas conductuales; alprazolam antes del coito; testosterona; sildenafil; o antidepresivos tricíclicos. Piénsalo.',
        answer: 'Es la A. Es una eyaculación precoz, y el tratamiento combinado es un ISRS de acción corta, como la dapoxetina, más técnicas conductuales de parada-inicio. La D tienta porque el sildenafil es de la disfunción sexual masculina más conocida, pero trata la erección, no el control de la eyaculación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 73',
      stem: 'Un paciente de 36 años presenta la idea de que puede ser pedófilo. Aquello lo angustia mucho y le aterra la idea de acercarse a los niños. Por ello reza y evita situaciones en las que estará en contacto con niños.',
      question: 'Su diagnóstico es:',
      options: [
        { letter: 'A', text: 'Trastorno delirante' },
        { letter: 'B', text: 'Parafilia' },
        { letter: 'C', text: 'Trastorno obsesivo compulsivo' },
        { letter: 'D', text: 'Trastorno de la inclinación sexual' },
        { letter: 'E', text: 'Trastorno de ansiedad generalizada' },
      ],
      correct: 'C',
      explanation: 'TOC clásico: obsesión de contenido inmoral, que genera mucha angustia y es rechazada, con compulsiones de evitación y de rezar. En la parafilia el interés sexual es experimentado con excitación y no como una idea intrusiva y aterradora.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Un hombre de treinta y seis años tiene la idea de que puede ser pedófilo. Eso lo angustia mucho y le aterra acercarse a los niños, por lo que reza y evita las situaciones con niños.',
        question: '¿Cuál es su diagnóstico?',
        options: 'Las opciones: trastorno delirante; parafilia; trastorno obsesivo compulsivo; trastorno de la inclinación sexual; o ansiedad generalizada. Piénsalo.',
        answer: 'Es la C. La idea lo aterra y la rechaza, y responde con rezos y evitación: es una obsesión con sus compulsiones, es decir, un TOC. La B es la trampa: se parece a la pedofilia por el tema, pero en la parafilia el interés es vivido con excitación, no como una idea intrusiva que horroriza.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 30 años, derivado por orden judicial. Desde hace 2 años presenta fantasías e impulsos sexuales intensos y recurrentes de mostrar sus genitales a mujeres desconocidas en la vía pública, y lo ha hecho en varias ocasiones. Refiere culpa posterior.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trastorno frotteurista' },
        { letter: 'B', text: 'Trastorno voyeurista' },
        { letter: 'C', text: 'Trastorno exhibicionista' },
        { letter: 'D', text: 'Trastorno fetichista' },
        { letter: 'E', text: 'Trastorno de travestismo' },
      ],
      correct: 'C',
      explanation: 'Las parafilias son intereses sexuales atípicos; se diagnostican como trastorno parafílico cuando por al menos 6 meses causan malestar, deterioro o se han ejecutado con personas que no consienten. Exponer los genitales a desconocidos es exhibicionismo; observar a otros desnudarse es voyeurismo y tocar o rozar a alguien sin consentimiento es frotteurismo.',
      say: {
        stem: 'Un caso representativo del banco. Un hombre de treinta años, derivado por orden judicial, tiene hace dos años fantasías e impulsos sexuales intensos y recurrentes de mostrar sus genitales a mujeres desconocidas en la vía pública, y lo ha hecho varias veces. Después siente culpa.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: frotteurismo; voyeurismo; exhibicionismo; fetichismo; o travestismo. Piénsalo.',
        answer: 'Es la C. Exponer los genitales a desconocidos es exhibicionismo, y como lo ha ejecutado con personas que no consienten y por más de seis meses, es un trastorno parafílico. La B tienta porque se parece, pero el voyeurista observa, no se exhibe. Y el frotteurista toca o roza.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Adolescente de 15 años, asignado hombre al nacer, consulta con su madre. Desde hace más de 2 años se identifica de manera persistente como mujer, siente intenso malestar con sus caracteres sexuales secundarios y ha bajado su rendimiento escolar. Su madre la apoya. Niega ideación suicida.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar una terapia orientada a cambiar su identidad de género' },
        { letter: 'B', text: 'Derivar a evaluación especializada multidisciplinaria, con acompañamiento psicosocial y evaluación de salud mental' },
        { letter: 'C', text: 'Iniciar estrógenos en atención primaria' },
        { letter: 'D', text: 'Esperar que la situación se resuelva con la madurez' },
        { letter: 'E', text: 'Iniciar antipsicóticos por sospecha de delirio' },
      ],
      correct: 'B',
      explanation: 'La incongruencia de género no es una enfermedad mental; la disforia de género alude al malestar asociado. Corresponde acompañamiento respetuoso y derivación a un equipo especializado multidisciplinario (en Chile, programa de acompañamiento de identidad de género), evaluando comorbilidad como depresión o riesgo suicida. Las terapias de conversión son dañinas y la terapia hormonal requiere evaluación especializada.',
      say: {
        stem: 'Un caso representativo del banco. Una adolescente de quince años, asignada hombre al nacer, consulta con su madre. Hace más de dos años se identifica de manera persistente como mujer, siente intenso malestar con sus caracteres sexuales secundarios y bajó su rendimiento escolar. Su madre la apoya y ella niega ideación suicida.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: terapia para cambiar su identidad; derivar a evaluación especializada multidisciplinaria con acompañamiento y evaluación de salud mental; estrógenos en atención primaria; esperar la madurez; o antipsicóticos. Piénsalo.',
        answer: 'Es la B. Es una disforia de género, que no es un delirio ni una enfermedad: se acompaña con respeto y se deriva a un equipo especializado, evaluando la salud mental. La A es la conducta que no se hace: las terapias de conversión son dañinas. Y la C también tienta, pero la terapia hormonal la decide el equipo especializado, no el médico general.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Adolescente de 16 años, asignada mujer al nacer, consulta en control de salud. Refiere que se identifica como mujer, se siente cómoda con su cuerpo y desde los 13 años siente atracción afectiva y sexual solo hacia otras mujeres.',
      question: '¿Qué concepto describe la atracción que relata la paciente?',
      options: [
        { letter: 'A', text: 'Identidad de género' },
        { letter: 'B', text: 'Sexo asignado al nacer' },
        { letter: 'C', text: 'Expresión de género' },
        { letter: 'D', text: 'Orientación sexual' },
        { letter: 'E', text: 'Disforia de género' },
      ],
      correct: 'D',
      explanation: 'La orientación sexual es hacia quién se dirige la atracción afectiva y sexual. La identidad de género es la vivencia interna de ser mujer, hombre u otra; la expresión de género, cómo se manifiesta externamente. Ser lesbiana no es un trastorno; la disforia implica malestar por incongruencia con el sexo asignado, ausente aquí.',
      say: {
        stem: 'Un caso representativo del banco. Una adolescente de dieciséis años, asignada mujer al nacer, se identifica como mujer, se siente cómoda con su cuerpo y desde los trece años siente atracción afectiva y sexual solo hacia otras mujeres.',
        question: '¿Qué concepto describe la atracción que relata?',
        options: 'Las opciones: identidad de género; sexo asignado al nacer; expresión de género; orientación sexual; o disforia de género. Piénsalo.',
        answer: 'Es la D. La atracción afectiva y sexual hacia otras personas es la orientación sexual. La A tienta porque el relato menciona que se identifica como mujer, pero eso es su identidad, y es otra cosa. Y la E no corresponde, porque se siente cómoda con su cuerpo: no hay malestar por incongruencia.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: sexualidad',
      cards: [
        { title: 'Reconocer', tag: 'Fases y disfunciones', kind: 'key', items: [
          { t: 'Excitación, meseta, orgasmo, resolución', d: 'Refractario masculino en la resolución',
            say: 'Cerremos con las reglas de oro. Las fases son excitación, meseta, orgasmo y resolución, y el período refractario masculino ocurre en la resolución.' },
          { t: 'Disfunción: 6 meses, 75 a 100 %, malestar', d: 'Erecciones matinales conservadas: psicógena',
            say: 'Una disfunción sexual exige seis meses, setenta y cinco a cien por ciento de las ocasiones y malestar. Con erecciones matinales conservadas, la causa es más bien psicógena.' },
        ] },
        { title: 'Conducta', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'iPDE5 sí, con nitratos no', d: 'ISRS retrasan el orgasmo',
            say: 'En la disfunción eréctil, inhibidores de la fosfodiesterasa cinco, nunca con nitratos. Y los ISRS retrasan el orgasmo.' },
          { t: 'Con un menor: denuncia; sin conversión', d: 'Disforia: acompañar y derivar',
            say: 'La conducta sexual con un menor es un delito y se denuncia. La orientación homosexual no es un trastorno, las terapias de conversión no se hacen, y la disforia de género se acompaña y se deriva. Si te llevas una sola idea de hoy: identifica la entidad por su definición, y actúa con respeto y sin juicios. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Queja sexual: de la definición a la conducta',
    root: N('start', 'Consulta por un problema sexual', 'Historia sexual, fármacos, alcohol y examen genital',
      'Un paciente consulta por un problema sexual. Tomas la historia sexual y de pareja, revisas fármacos y alcohol y examinas. Después decides si el síntoma cumple criterios de disfunción: seis meses, casi siempre, con malestar.',
      ['Dolor o contracción en la penetración', N('do', 'Dolor genitopélvico', 'Descartar causa orgánica; dilatadores y terapia',
        'Si hay dolor o contracción en la penetración, es un trastorno de dolor genitopélvico y de la penetración. Se descarta una causa orgánica y se usan educación, dilatadores y terapia sexual.')],
      ['No obtiene o mantiene la erección', N('q', 'Trastorno eréctil', 'Erecciones matinales, riesgo vascular',
        'Si no obtiene o no mantiene la erección, se pregunta por las erecciones matinales y se estudian el riesgo vascular y la testosterona.',
        ['Matinales conservadas, inicio brusco', N('ok', 'Psicógena', 'Educar y terapia sexual',
          'Con erecciones matinales conservadas e inicio brusco y situacional, es más bien psicógena. Se educa, se baja la ansiedad de desempeño y se usa terapia sexual.')],
        ['Gradual y generalizada', N('do', 'Orgánica o por fármacos', 'iPDE5, no con nitratos',
          'Si es gradual y generalizada, es orgánica o por fármacos. Se trata la causa y los inhibidores de la fosfodiesterasa cinco son la primera línea, nunca con nitratos.')],
      )],
      ['Eyaculación antes del minuto', N('do', 'Eyaculación precoz', 'ISRS o dapoxetina y parada-inicio',
        'Si eyacula cerca del minuto de la penetración, antes de lo deseado, es una eyaculación precoz. Se combinan técnicas de parada-inicio o compresión con un ISRS o dapoxetina.')],
      ['Interés sexual atípico', N('q', 'Parafilia', '¿Hay malestar o falta de consentimiento?',
        'Si hay un interés sexual atípico, se pregunta si hay malestar o deterioro por seis meses, o si se ejecuta con alguien que no consiente.',
        ['Con un menor o sin consentimiento', N('alert', 'Delito: denunciar', 'Derivar a psiquiatría',
          'Si es con un menor o con alguien que no consiente, es un delito y se denuncia. Se deriva a psiquiatría para psicoterapia y, si procede, ISRS o antiandrógenos.')],
        ['Idea intrusiva que aterra', N('ok', 'TOC, no parafilia', 'ISRS y exposición',
          'Si la idea es intrusiva, aterra y se acompaña de rezos o evitación, es una obsesión: un TOC, no una parafilia.')],
      )],
      ['Malestar con el género asignado', N('refer', 'Disforia de género', 'Acompañar y derivar a equipo',
        'Si hay malestar por incongruencia entre el género vivido y el asignado, es una disforia. Se usa el nombre social, se evalúa el riesgo suicida y se deriva a un equipo especializado, sin terapias de conversión.')],
    ),
  },
};
