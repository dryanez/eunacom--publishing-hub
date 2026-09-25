// Clase 8.13 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-13).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-13',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Hemartrosis o sangrado de mucosas: quién es quién y qué se infunde',
      say: 'Bienvenidos. Hoy vemos las coagulopatías congénitas: la hemofilia A, la hemofilia B y la enfermedad de von Willebrand. En la clase de exámenes de la hemostasia dejamos un patrón abierto: TTPK largo que corrige con la mezcla. Hoy le ponemos nombre. Y el examen pregunta tres cosas: distinguir la hemofilia del von Willebrand por cómo sangra el paciente, pedir el examen correcto, y no cometer los errores que pueden matar a un hemofílico.',
    },

    {
      type: 'flow',
      kicker: 'Genética',
      title: 'Hemofilia: ligada al X',
      nodes: [
        { id: 'mad', col: 0, row: 1, k: 'cause', t: 'Madre portadora', s: 'Asintomática' },
        { id: 'hij', col: 1, row: 0, k: 'risk', t: 'Hijo varón', s: '50 % hemofílico' },
        { id: 'hja', col: 1, row: 2, k: 'effect', t: 'Hija mujer', s: '50 % portadora' },
        { id: 'tio', col: 2, row: 0, k: 'alert', t: 'Pista clínica', s: 'Tío o hermano varón que sangró' },
        { id: 'nov', col: 2, row: 2, k: 'trap', t: 'Hasta 30 % de novo', s: 'Sin antecedente familiar' },
      ],
      edges: [
        { from: 'mad', to: 'hij' }, { from: 'mad', to: 'hja' },
        { from: 'hij', to: 'tio', label: 'en la historia' },
      ],
      steps: [
        { show: ['mad'], note: 'Hemofilia A: gen F8 · Hemofilia B: gen F9',
          say: 'Partamos por la genética, porque es la primera pista del examen. La hemofilia A, o clásica, y la hemofilia B, o enfermedad de Christmas, se heredan en forma recesiva ligada al cromosoma X. La mujer que lleva el gen es portadora y no sangra.' },
        { show: ['hij', 'hja'], note: 'Afecta casi solo a varones',
          say: 'Cada hijo varón de una portadora tiene cincuenta por ciento de probabilidad de ser hemofílico, y cada hija, cincuenta por ciento de ser portadora. Por eso la hemofilia es, casi siempre, una enfermedad de varones.' },
        { show: ['tio'], note: 'Tío materno, hermano, primo por línea materna',
          say: 'En el enunciado esto aparece como un antecedente familiar muy típico: un tío materno o un hermano varón que murió joven por una hemorragia. Cuando lo leas, piensa en hemofilia.' },
        { show: ['nov'], note: 'Sin antecedente no descarta',
          say: 'Pero ojo: hasta en un treinta por ciento no hay ningún antecedente familiar, porque la mutación es nueva. La ausencia de historia familiar no descarta la hemofilia.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Sin tenasa, el coágulo no se consolida',
      nodes: [
        { id: 'viii', col: 0, row: 0, k: 'cause', t: 'Factor VIIIa', s: 'Falta en hemofilia A (85 %)' },
        { id: 'ix', col: 0, row: 2, k: 'cause', t: 'Factor IXa', s: 'Falta en hemofilia B (15 %)' },
        { id: 'ten', col: 1, row: 1, k: 'mech', t: 'Complejo tenasa', s: 'Sobre la plaqueta activada' },
        { id: 'x', col: 2, row: 1, k: 'mech', t: 'Activa el factor X', s: 'Explosión de trombina' },
        { id: 'fal', col: 3, row: 1, k: 'risk', t: 'Tapón sin malla', s: 'Sangrado profundo y tardío' },
        { id: 'ttp', col: 3, row: 3, k: 'effect', t: 'TTPK prolongado', s: 'TP y plaquetas normales' },
      ],
      edges: [
        { from: 'viii', to: 'ten' }, { from: 'ix', to: 'ten' }, { from: 'ten', to: 'x' },
        { from: 'x', to: 'fal', label: 'si falta' }, { from: 'fal', to: 'ttp', label: 'laboratorio' },
      ],
      steps: [
        { show: ['viii', 'ix'], note: 'A: 85 % de los casos · B: 15 %',
          say: 'Ahora el mecanismo. En la hemofilia A falta el factor ocho, y es el ochenta y cinco por ciento de los casos. En la hemofilia B falta el factor nueve, el quince por ciento restante.' },
        { show: ['ten'], note: 'VIII y IX trabajan juntos',
          say: 'Y lo interesante es que los dos factores trabajan juntos. El ocho y el nueve activados forman el complejo tenasa, sobre la superficie de la plaqueta activada.' },
        { show: ['x'], note: 'La amplificación de la vía intrínseca',
          say: 'La tenasa activa el factor diez, y eso desata la producción masiva de trombina. Es la amplificación que vimos en la clase de hemostasia.' },
        { show: ['fal'], note: 'Por eso A y B son clínicamente iguales',
          say: 'Si falta cualquiera de los dos, la amplificación se cae y el coágulo de fibrina no se consolida. El tapón de plaquetas se forma, pero no tiene malla. Por eso la hemofilia A y la B son clínicamente idénticas: rompen el mismo engranaje.' },
        { show: ['ttp'], note: 'Solo se alarga el TTPK, y corrige con la mezcla',
          say: 'Y en el laboratorio, lo único alterado es el TTPK. Las plaquetas y el TP son normales, y la mezcla con plasma normal corrige el TTPK. Para saber si es A o B, no basta la clínica: hay que dosificar los factores ocho y nueve.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Gravedad',
      title: 'El nivel de factor define cuánto sangra',
      cards: [
        { title: 'Severa', tag: 'Factor < 1 %', kind: 'alert', items: [
          { t: 'Sangrado espontáneo frecuente', d: 'Hemartrosis desde la lactancia',
            say: 'La gravedad se clasifica por la actividad de factor que queda en el plasma. En la forma severa, con menos del uno por ciento, el niño tiene hemartrosis y hematomas musculares espontáneos y frecuentes, desde la lactancia.' },
        ] },
        { title: 'Moderada', tag: 'Factor 1 a 5 %', kind: 'criteria', items: [
          { t: 'Espontáneo ocasional', d: 'Sangrado grave ante traumas leves',
            say: 'En la moderada, entre uno y cinco por ciento, los sangrados espontáneos son ocasionales, pero un golpe leve puede dar una hemorragia grave.' },
        ] },
        { title: 'Leve', tag: 'Factor 5 a 40 %', kind: 'normal', items: [
          { t: 'No sangra espontáneamente', d: 'Solo en cirugías, exodoncias o traumas',
            say: 'Y en la leve, entre cinco y cuarenta por ciento, el paciente no sangra espontáneamente. Se manifiesta en una cirugía, una extracción dental o un trauma importante.' },
          { t: 'Se descubre en un preoperatorio', d: 'TTPK largo en un paciente sano',
            say: 'Por eso la hemofilia leve puede descubrirse en un adulto sano con un TTPK largo en el preoperatorio, como el caso que vimos en la clase de hemostasia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'La hemartrosis: el sello de la hemofilia',
      cards: [
        { title: 'Hemartrosis aguda', tag: 'Más del 75 % de los sangrados', kind: 'key', items: [
          { t: 'Grandes articulaciones de carga', d: 'Rodilla, codo, tobillo, hombro, cadera',
            say: 'La manifestación cardinal de la hemofilia severa es la hemartrosis, el sangrado dentro de la articulación. Es más del setenta y cinco por ciento de todos los sangrados, y afecta a las grandes articulaciones: rodillas, codos, tobillos, hombros y caderas.' },
          { t: 'Aura, dolor intenso, flexión fija', d: 'Articulación caliente y a tensión',
            say: 'Empieza con una sensación de ardor, el aura hemofílica, y luego viene un dolor intenso, con la articulación hinchada, caliente, a tensión, y fija en flexión. El paciente no la puede mover.' },
        ] },
        { title: 'Artropatía hemofílica', tag: 'La secuela', kind: 'alert', items: [
          { t: 'Hemosiderina: sinovitis crónica', d: 'Destruye el cartílago',
            say: '¿Y por qué importa tanto tratar cada episodio? Porque la sangre repetida deja hemosiderina en la sinovial, y eso gatilla una sinovitis crónica que destruye el cartílago.' },
          { t: 'Anquilosis y atrofia muscular', d: 'Invalidante',
            say: 'El final es la artropatía hemofílica: pinzamiento, anquilosis, atrofia muscular y una articulación invalidada. Todo el tratamiento apunta a evitar llegar ahí.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Hematomas en sitios peligrosos',
      cards: [
        { title: 'Hematoma del psoas', tag: 'Engaña', kind: 'alert', items: [
          { t: 'Dolor lumbar o en fosa ilíaca', d: 'Con cadera en flexión',
            say: 'Además de las hemartrosis, hay hematomas musculares profundos que pueden ser graves. El clásico es el hematoma del psoas ilíaco: dolor lumbar o en la fosa ilíaca, con la cadera flectada por reflejo.' },
          { t: 'Parestesias del nervio femoral', d: 'Por compresión',
            say: 'Y puede comprimir el nervio femoral, dando parestesias en el muslo. En un hemofílico con dolor en la fosa ilíaca, piensa en esto antes que en una apendicitis.' },
        ] },
        { title: 'Síndrome compartimental', tag: 'Urgencia', kind: 'criteria', items: [
          { t: 'Antebrazo o pantorrilla', d: 'Isquemia aguda del compartimento',
            say: 'El otro es el hematoma en un compartimento cerrado, como el antebrazo o la pantorrilla, que puede terminar en un síndrome compartimental isquémico agudo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Enfermedad de von Willebrand',
      title: 'Un factor con dos trabajos',
      nodes: [
        { id: 'vwf', col: 0, row: 1, k: 'cause', t: 'Déficit de factor von Willebrand', s: 'Cuantitativo o cualitativo' },
        { id: 'adh', col: 1, row: 0, k: 'mech', t: 'Falla la adhesión', s: 'Plaqueta–colágeno vía GP Ib' },
        { id: 'muc', col: 2, row: 0, k: 'effect', t: 'Sangrado mucocutáneo', s: 'Epistaxis, menorragia, equimosis' },
        { id: 'fviii', col: 1, row: 2, k: 'mech', t: 'Cae el factor VIII', s: 'Sin transporte, vida media de 12 a 2 h' },
        { id: 'ttp', col: 2, row: 2, k: 'effect', t: 'TTPK normal o prolongado', s: 'Según cuánto baje el VIII' },
      ],
      edges: [
        { from: 'vwf', to: 'adh', label: 'hemostasia primaria' }, { from: 'adh', to: 'muc' },
        { from: 'vwf', to: 'fviii', label: 'hemostasia secundaria' }, { from: 'fviii', to: 'ttp' },
      ],
      steps: [
        { show: ['vwf'], note: 'La coagulopatía hereditaria más frecuente: 1 %',
          say: 'Pasemos al von Willebrand. Es el trastorno hemorrágico hereditario más frecuente: lo tiene cerca del uno por ciento de la población. Y a diferencia de la hemofilia, se hereda en forma autosómica dominante en la mayoría de los tipos, así que afecta por igual a hombres y mujeres.' },
        { show: ['adh'], note: 'Primer trabajo: pegar la plaqueta',
          say: 'El factor de von Willebrand tiene dos trabajos. El primero, en la hemostasia primaria: es el puente que pega la plaqueta al colágeno, a través del receptor glicoproteína uno b.' },
        { show: ['muc'], note: 'Por eso sangra como un problema de plaquetas',
          say: 'Si falta, la plaqueta no se adhiere, y el paciente sangra como si tuviera un problema de plaquetas, pero con el recuento normal: epistaxis a repetición, menorragia desde la menarquia, equimosis fáciles y sangrado prolongado tras una extracción dental.' },
        { show: ['fviii'], note: 'Segundo trabajo: proteger al factor VIII',
          say: 'El segundo trabajo es de la hemostasia secundaria: transporta al factor ocho y lo protege. Con el von Willebrand, el factor ocho dura unas doce horas; sin él, apenas dos.' },
        { show: ['ttp'], note: 'Esa es la razón del TTPK variable',
          say: 'Y eso explica un dato que confunde en el examen. Si el factor ocho baja lo suficiente, el TTPK se alarga, generalmente poco; si no, es normal. Un TTPK normal no descarta von Willebrand.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Enfermedad de von Willebrand',
      title: 'Tres tipos',
      cards: [
        { title: 'Tipo 1', tag: '75 a 80 %', kind: 'key', items: [
          { t: 'Déficit parcial, estructura normal', d: 'Sangrado mucocutáneo leve a moderado',
            say: 'Se clasifica en tres tipos. El tipo uno es el setenta y cinco a ochenta por ciento: hay menos factor, pero el que hay funciona bien. Da el sangrado mucocutáneo leve a moderado que acabamos de ver.' },
        ] },
        { title: 'Tipo 2', tag: '15 %', kind: 'normal', items: [
          { t: 'Déficit cualitativo', d: 'El factor no funciona bien',
            say: 'El tipo dos, cerca del quince por ciento, es un defecto de función: el factor está, pero no funciona bien.' },
        ] },
        { title: 'Tipo 3', tag: 'Menos del 5 %', kind: 'alert', items: [
          { t: 'Ausencia total, autosómica recesiva', d: 'Factor VIII < 1–2 %',
            say: 'Y el tipo tres, menos del cinco por ciento, es la ausencia completa, con herencia autosómica recesiva. Sin von Willebrand, el factor ocho cae bajo el uno a dos por ciento.' },
          { t: 'Se parece a una hemofilia severa', d: 'Con hemartrosis',
            say: 'Por eso el tipo tres se parece a una hemofilia severa, con hemartrosis. Es la excepción que confirma la regla: hemartrosis es hemofilia, salvo este tipo raro de von Willebrand.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Qué examen pedir',
      cards: [
        { title: 'Hemofilia A y B', tag: 'Solo el TTPK', kind: 'criteria', items: [
          { t: 'Plaquetas y TP normales', d: 'TTPK francamente prolongado',
            say: 'Veamos el laboratorio. En la hemofilia, el hemograma y el TP son estrictamente normales. Lo único alterado es el TTPK, y está francamente prolongado. La mezcla lo corrige.' },
          { t: 'Confirma: dosificar VIII y IX', d: 'Distingue A de B',
            say: 'La confirmación, y la única forma de distinguir la A de la B, es dosificar la actividad de los factores ocho y nueve. Esa es la respuesta cuando te preguntan el examen de elección.' },
        ] },
        { title: 'Von Willebrand', tag: 'Perfil de von Willebrand', kind: 'key', items: [
          { t: 'Plaquetas y TP normales', d: 'TTPK normal o levemente largo',
            say: 'En el von Willebrand, plaquetas y TP también son normales, salvo el subtipo dos b, que puede bajar un poco las plaquetas. El TTPK puede ser normal o estar levemente prolongado.' },
          { t: 'Antígeno, cofactor de ristocetina, VIII', d: 'Cantidad, función y factor VIII',
            say: 'El diagnóstico exige el perfil de von Willebrand: el antígeno, que mide la cantidad; el cofactor de ristocetina, que mide la función de adhesión; y el factor ocho. Si el cuadro es de mucosas, pides esto, no los factores ocho y nueve solos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Hemofilia: el factor va primero',
      cards: [
        { title: 'Principio rector', tag: 'Sin esperar imágenes', kind: 'alert', items: [
          { t: 'Infundir el factor de inmediato', d: 'Antes de la radiografía o el TAC',
            say: 'Ahora el tratamiento, y hay un principio que manda sobre todo lo demás. Ante una hemartrosis o la sospecha de un sangrado en un hemofílico, se infunde el factor específico de inmediato, sin esperar radiografías ni otros exámenes.' },
        ] },
        { title: 'Hemofilia A', tag: 'Factor VIII', kind: 'pharma', items: [
          { t: '1 UI/kg sube el VIII un 2 %', d: 'Hemartrosis: 25–30 UI/kg, meta 40–50 %',
            say: 'En la hemofilia A se usa concentrado de factor ocho. Cada unidad por kilo sube el nivel en un dos por ciento. En una hemartrosis la meta es cuarenta a cincuenta por ciento, con veinticinco a treinta unidades por kilo.' },
          { t: 'SNC o politrauma: meta 100 %', d: '50 UI/kg, antes del TAC',
            say: 'En un sangrado del sistema nervioso central o un politrauma, la meta es cien por ciento, con cincuenta unidades por kilo, y se infunde antes de hacer el TAC de cerebro.' },
        ] },
        { title: 'Hemofilia B', tag: 'Factor IX', kind: 'pharma', items: [
          { t: '1 UI/kg sube el IX un 1 %', d: 'Hemartrosis 40–50 · vital 100 UI/kg',
            say: 'En la hemofilia B se usa factor nueve, que rinde la mitad: cada unidad por kilo sube un uno por ciento. Se necesitan cuarenta a cincuenta unidades por kilo en una hemartrosis, y cien en un sangrado vital. Y el factor ocho no sirve de nada en la hemofilia B.' },
          { t: 'Cubierto por el GES', d: 'Profilaxis y tratamiento a demanda',
            say: 'En Chile, la hemofilia está cubierta por el GES, que garantiza los concentrados de factor, tanto en profilaxis continua en la casa como a demanda cuando hay un sangrado.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Von Willebrand: desmopresina',
      cards: [
        { title: 'Desmopresina', tag: 'Elección en el tipo 1', kind: 'pharma', items: [
          { t: 'Libera las reservas del endotelio', d: 'Sube el von Willebrand y el VIII',
            say: 'En el von Willebrand tipo uno, el fármaco de elección para procedimientos menores y sangrados de mucosas es la desmopresina, un análogo de la vasopresina. Hace que el endotelio libere rápido sus reservas de factor de von Willebrand y de factor ocho.' },
          { t: 'Ojo: hiponatremia', d: 'Efecto antidiurético; limitar líquidos',
            say: 'Por su efecto antidiurético, puede dar hiponatremia, así que se limitan los líquidos. También sirve en la hemofilia A leve.' },
        ] },
        { title: 'Casos graves', tag: 'Tipos 2 y 3', kind: 'alert', items: [
          { t: 'Concentrado de VIII con von Willebrand', d: 'Hemorragia grave o tipos 2 y 3',
            say: 'En una hemorragia grave, o en los tipos dos y tres, donde la desmopresina no alcanza, se infunden concentrados de factor ocho que contienen factor de von Willebrand.' },
        ] },
        { title: 'Coadyuvante', tag: 'Antifibrinolítico', kind: 'normal', items: [
          { t: 'Ácido tranexámico', d: 'Sangrado oral o exodoncia; no en hematuria',
            say: 'Y como apoyo en el sangrado de la boca o una extracción dental, el ácido tranexámico. Pero está contraindicado si hay hematuria macroscópica.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Seguridad',
      title: 'Tres cosas que nunca se hacen',
      nodes: [
        { id: 'hem', col: 0, row: 1, k: 'start', t: 'Paciente hemofílico', s: 'O con von Willebrand' },
        { id: 'aine', col: 2, row: 0, k: 'trap', t: 'Aspirina y AINE', s: 'Analgesia: paracetamol u opioides' },
        { id: 'im', col: 2, row: 1, k: 'trap', t: 'Inyecciones intramusculares', s: 'Hematoma sofocante' },
        { id: 'pun', col: 2, row: 2, k: 'trap', t: 'Puncionar la hemartrosis', s: 'Salvo sospecha de séptica, con factor al 100 %' },
      ],
      edges: [
        { from: 'hem', to: 'aine', label: 'nunca' }, { from: 'hem', to: 'im', label: 'nunca' }, { from: 'hem', to: 'pun', label: 'nunca' },
      ],
      steps: [
        { show: ['hem'], note: 'Errores que pueden ser mortales',
          say: 'Y cerramos el tratamiento con tres reglas de seguridad absoluta. Son las alternativas trampa del examen, y en la vida real pueden matar a un paciente.' },
        { show: ['aine'], note: 'Se suma una falla de plaquetas',
          say: 'Primera: nunca aspirina ni antiinflamatorios no esteroidales. Inhiben las plaquetas, es decir, le quitan al hemofílico la única hemostasia que le funciona, y pueden precipitar un sangrado masivo. Para el dolor se usa paracetamol u opioides.' },
        { show: ['im'], note: 'Toda vía intramuscular está prohibida',
          say: 'Segunda: nunca inyecciones intramusculares, por el riesgo de un hematoma que comprima la vía aérea o un compartimento.' },
        { show: ['pun'], note: 'Primero el factor, nunca la aguja',
          say: 'Y tercera: nunca puncionar una articulación con hemartrosis. La punción aumenta el sangrado y puede infectar la articulación. La única excepción es la sospecha fundada de artritis séptica, y siempre después de llevar el factor al cien por ciento. Una rodilla caliente e hinchada en un hemofílico se trata con factor, no con aguja.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol: desde cómo sangra el paciente hasta qué le infundes.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Hemofilia A vs B vs von Willebrand',
      head: ['Característica', 'Hemofilia A y B', 'Von Willebrand tipo 1'],
      rows: [
        { cells: ['Herencia', 'Recesiva ligada al X: varones', 'Autosómica dominante: ambos sexos'],
          say: 'Repasemos lo que más se pregunta. Herencia: la hemofilia es recesiva ligada al X y afecta a varones; el von Willebrand es autosómico dominante y afecta a ambos sexos. Una mujer joven con sangrado de mucosas es von Willebrand hasta demostrar lo contrario.' },
        { cells: ['Cómo sangra', 'Hemartrosis y hematomas musculares', 'Epistaxis, menorragia, equimosis'],
          say: 'Cómo sangra: la hemofilia da hemartrosis y hematomas profundos; el von Willebrand, sangrado de mucosas.' },
        { cells: ['TP y plaquetas', 'Normales', 'Normales'],
          say: 'El TP y las plaquetas son normales en los dos. Por ahí no los vas a distinguir.' },
        { cells: ['TTPK', 'Francamente prolongado', 'Normal o levemente prolongado'],
          say: 'El TTPK: francamente largo en la hemofilia; normal o apenas largo en el von Willebrand. La palabra levemente en el enunciado te orienta al von Willebrand.' },
        { cells: ['Examen que confirma', 'Dosificar factores VIII y IX', 'Antígeno, ristocetina y VIII'],
          say: 'El examen que confirma: factores ocho y nueve en la hemofilia; el perfil de von Willebrand en el von Willebrand.' },
        { cells: ['Tratamiento', 'Concentrado de VIII o IX (GES)', 'Desmopresina'],
          say: 'Y el tratamiento: concentrado del factor que falta en la hemofilia, cubierto por el GES; desmopresina en el von Willebrand tipo uno.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Niño de 5 años con dolor intenso y aumento de volumen de la rodilla derecha de 6 horas, tras una caída menor. Rodilla caliente, a tensión, en flexión fija. Un tío materno murió joven por una "enfermedad de la sangre". Hb 12 g/dL, plaquetas 280.000/µL, TP 12,1 s, TTPK 62 s (control 29 s). El médico de turno pide aguja y jeringa para puncionar la rodilla.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Artrocentesis diagnóstica y evacuadora' },
        { letter: 'B', text: 'Ibuprofeno oral e inmovilización' },
        { letter: 'C', text: 'Infundir concentrado de factor VIII de inmediato' },
        { letter: 'D', text: 'Radiografía de rodilla antes de decidir' },
        { letter: 'E', text: 'Desmopresina endovenosa' },
      ],
      correct: 'C',
      explanation: 'Hemartrosis en un niño con TTPK prolongado aislado y tío materno fallecido por hemorragia: hemofilia. Se infunde factor VIII de inmediato (≈30 UI/kg, meta 50 %), se inmoviliza y se aplica frío. La artrocentesis está contraindicada, los AINE están prohibidos, no se espera la radiografía y la desmopresina es para el von Willebrand tipo 1.',
      say: {
        stem: 'Vamos con un caso. Niño de cinco años con dolor intenso y aumento de volumen de la rodilla derecha, seis horas después de una caída menor. La rodilla está caliente, a tensión y fija en flexión. Un tío materno murió joven por una enfermedad de la sangre. Plaquetas y TP normales, TTPK de sesenta y dos segundos, con un control de veintinueve. Y el médico de turno pide una jeringa para puncionar la rodilla.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: puncionar la rodilla, ibuprofeno e inmovilizar, infundir factor ocho de inmediato, pedir una radiografía antes de decidir, o desmopresina. Piénsalo.',
        answer: 'La respuesta es la C. Varón, tío materno, hemartrosis y TTPK largo aislado: es una hemofilia, y lo estadísticamente más probable es la A. Se infunde factor ocho de inmediato, cerca de treinta unidades por kilo para llevarlo al cincuenta por ciento, se inmoviliza y se aplica frío. El distractor es justamente lo que pidió el médico de turno: puncionar la rodilla aumenta el sangrado y la infecta. El ibuprofeno está prohibido, y no se espera la radiografía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 35',
      stem: 'Niño con equimosis frecuentes, TTPA prolongado al triple, hermano fallecido por hemorragia intracraneal.',
      question: '¿Cuál es el examen para el diagnóstico?',
      options: [
        { letter: 'A', text: 'Tiempo de hemorragia (Duke)' },
        { letter: 'B', text: 'Recuento de plaquetas y función plaquetaria' },
        { letter: 'C', text: 'Factor de Von Willebrand y cofactor de ristocetina' },
        { letter: 'D', text: 'Proteínas C y S' },
        { letter: 'E', text: 'Factores de coagulación VIII y IX' },
      ],
      correct: 'E',
      explanation: 'Varón, hermano fallecido por hemorragia y TTPA francamente prolongado: hemofilia. El diagnóstico y la distinción entre A y B se hacen dosificando los factores VIII y IX. El perfil de von Willebrand se pide ante sangrado de mucosas con TTPA normal o levemente largo.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de enero de dos mil veintitrés. Niño con equimosis frecuentes, TTPA prolongado al triple, y un hermano que murió por una hemorragia intracraneana.',
        question: '¿Cuál es el examen para el diagnóstico?',
        options: 'Las opciones son: tiempo de sangría, recuento y función plaquetaria, factor de von Willebrand y cofactor de ristocetina, proteínas C y S, o factores ocho y nueve. Piénsalo.',
        answer: 'Es la E, factores ocho y nueve. Un varón, con un hermano muerto por hemorragia, y un TTPA al triple: eso es hemofilia hasta demostrar lo contrario. Y la hemofilia se confirma, y se distingue la A de la B, dosificando los factores. El distractor es el perfil de von Willebrand, que también está en el tema; pero el von Willebrand alarga el TTPA levemente, no al triple. Las proteínas C y S son de trombofilia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 164',
      stem: 'Paciente con epistaxis, equimosis, gingivorragias frecuentes, antecedente familiar de epistaxis y menorragias, TTPA levemente prolongado.',
      question: '¿Diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Trombocitopenia inmune primaria (PTI)' },
        { letter: 'B', text: 'Hemofilia A' },
        { letter: 'C', text: 'Déficit de factor XI' },
        { letter: 'D', text: 'Enfermedad de Von Willebrand' },
        { letter: 'E', text: 'Coagulación intravascular diseminada (CID)' },
      ],
      correct: 'D',
      explanation: 'Sangrado mucocutáneo, familiares de ambos sexos afectados (herencia autosómica dominante) y TTPA levemente prolongado: enfermedad de von Willebrand. La hemofilia da hemartrosis y TTPA francamente largo, y se hereda por línea materna a varones.',
      say: {
        stem: 'Otra del mismo examen, enero de dos mil veintitrés. Paciente con epistaxis, equimosis y gingivorragias frecuentes. En la familia hay epistaxis y menorragias. Y el TTPA está levemente prolongado.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: trombocitopenia inmune, hemofilia A, déficit de factor once, enfermedad de von Willebrand, o coagulación intravascular diseminada. Piénsalo.',
        answer: 'Es la D, von Willebrand. Todo es sangrado de mucosas, y en la familia hay menorragias, es decir, mujeres afectadas: eso es herencia autosómica dominante. Y el TTPA levemente prolongado es el que baja un poco el factor ocho. El distractor es la hemofilia A, por el TTPA largo; pero la hemofilia no da menorragias en la familia, porque las mujeres son portadoras sanas, y sangra en articulaciones y músculos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 130',
      stem: 'Un paciente de 18 años presenta equimosis frecuente y tendencia a presentar petequias en las extremidades inferiores. Como antecedente, presentó hemorragia tardía, en relación a la extracción de un molar y hace algunos años sufrió un hematoma en el muslo izquierdo, en relación a un traumatismo, que requirió manejo hospitalizado. Se solicitan exámenes que muestran hemograma con 160.000 plaquetas por mm3, sin alteraciones de la serie roja ni blanca, TTPA de 45 segundos y TP de 100%.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Enfermedad de Glanzmann' },
        { letter: 'B', text: 'Enfermedad de von Willebrand' },
        { letter: 'C', text: 'Déficit de factor VII' },
        { letter: 'D', text: 'Hemofilia' },
        { letter: 'E', text: 'Púrpura trombopénica inmune' },
      ],
      correct: 'B',
      explanation: 'Petequias y equimosis (hemostasia primaria) con plaquetas normales, sangrado tras exodoncia y TTPA levemente prolongado: von Willebrand, que falla en la hemostasia primaria y además baja el factor VIII. La hemofilia no da petequias y tendría hemartrosis; el déficit de VII alarga el TP; Glanzmann no alarga el TTPA; la PTI tiene plaquetas bajas.',
      say: {
        stem: 'Una del EUNACOM de diciembre de dos mil diecinueve. Joven de dieciocho años con equimosis frecuentes y petequias en las piernas. Tuvo un sangrado tardío después de sacarse una muela, y hace años un hematoma del muslo tras un golpe. Plaquetas en ciento sesenta mil, TP de cien por ciento, y TTPA de cuarenta y cinco segundos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: enfermedad de Glanzmann, enfermedad de von Willebrand, déficit de factor siete, hemofilia, o trombocitopenia inmune. Piénsalo.',
        answer: 'Es la B. Las petequias te dicen hemostasia primaria, pero las plaquetas son normales, así que es un problema de función, no de número. Y el TTPA está algo largo: eso junta las dos funciones del von Willebrand. El distractor es la hemofilia, por el hematoma del muslo; pero la hemofilia no da petequias, y tendría hemartrosis. El déficit de factor siete alarga el TP, y la trombocitopenia inmune tiene plaquetas bajas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 22',
      stem: 'Una paciente de 17 años, que desde los cinco años presenta epistaxis con frecuencia y equimosis ante pequeños traumatismos, desde los 14 años tiene su menarquia con sangrado menstrual abundantes. Se solicita hemograma que muestra hematocrito 45%, VCM: 90fl, leucocitos 6.000/mm3, plaquetas 250.000/mm3, TTPA normal, protrombinemia 85% y tiempo de sangría mayor a 8 minutos.',
      question: '¿Cuál es el examen de elección para proseguir con el estudio en este caso?',
      options: [
        { letter: 'A', text: 'Mielograma' },
        { letter: 'B', text: 'Citometría de flujo para receptor de la glicoproteína IIb IIIa' },
        { letter: 'C', text: 'Estudio de enfermedad de Von Willebrand' },
        { letter: 'D', text: 'Niveles plasmáticos de factor VIII y factor IX de la coagulación' },
        { letter: 'E', text: 'Electroforesis de proteínas en sangre' },
      ],
      correct: 'C',
      explanation: 'Mujer con sangrado mucocutáneo desde la infancia y menorragia desde la menarquia, plaquetas normales, TTPA normal y tiempo de sangría prolongado (falla de la hemostasia primaria): la causa hereditaria más frecuente es el von Willebrand, y se pide su perfil. Un TTPA normal no lo descarta.',
      say: {
        stem: 'Y la última, del EUNACOM de agosto de dos mil veintiuno. Mujer de diecisiete años con epistaxis frecuentes y equimosis fáciles desde los cinco años, y reglas abundantes desde la menarquia. Plaquetas normales, protrombinemia normal, TTPA normal, y un tiempo de sangría prolongado, de más de ocho minutos.',
        question: '¿Cuál es el examen de elección para seguir el estudio?',
        options: 'Las opciones son: mielograma, citometría de flujo para la glicoproteína dos b tres a, estudio de von Willebrand, factores ocho y nueve, o electroforesis de proteínas. Piénsalo.',
        answer: 'Es la C, el estudio de von Willebrand. Mujer, sangrado de mucosas desde niña y menorragia desde la menarquia: es el perfil exacto del tipo uno. El tiempo de sangría largo confirma que falla la hemostasia primaria, con plaquetas normales. El distractor son los factores ocho y nueve, pero eso es para la hemofilia, y aquí el TTPA es normal. Recuerda: un TTPA normal no descarta von Willebrand.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Hemofilia', tag: 'Varón y articulaciones', kind: 'key', items: [
          { t: 'Ligada al X, hemartrosis', d: 'TTPK francamente largo',
            say: 'Cerremos con las reglas de oro. Hemofilia: varón, tío materno, hemartrosis y un TTPK francamente largo, con TP y plaquetas normales.' },
          { t: 'Confirma: factores VIII y IX', d: 'Distingue A de B',
            say: 'Se confirma dosificando los factores ocho y nueve, que distinguen la A de la B.' },
        ] },
        { title: 'Von Willebrand', tag: 'Ambos sexos y mucosas', kind: 'criteria', items: [
          { t: 'Autosómica dominante, mucosas', d: 'TTPK normal o levemente largo',
            say: 'Von Willebrand: ambos sexos, epistaxis y menorragia, con un TTPK normal o apenas largo. Se confirma con el perfil de von Willebrand, y se trata con desmopresina.' },
        ] },
        { title: 'Seguridad', tag: 'Lo que nunca se hace', kind: 'alert', items: [
          { t: 'Factor de inmediato', d: 'Sin esperar imágenes',
            say: 'Ante un hemofílico que sangra, el factor va primero, sin esperar imágenes.' },
          { t: 'Nunca AINE, intramuscular ni punción', d: 'Analgesia con paracetamol',
            say: 'Y nunca aspirina ni antiinflamatorios, nunca intramuscular, nunca puncionar la hemartrosis. Si te llevas una sola idea de hoy: la hemartrosis es hemofilia y se trata con factor, y el sangrado de mucosas con plaquetas normales es von Willebrand. En la próxima clase vemos las coagulopatías adquiridas: hígado, vitamina K y anticoagulantes. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Coagulopatía congénita: de cómo sangra a qué se infunde',
    root: N('start', 'Sangrado hereditario', 'Plaquetas y TP normales',
      'Paciente con una tendencia hereditaria al sangrado, con plaquetas y TP normales.',
      ['', N('q', '¿Cómo sangra?', 'Articulaciones o mucosas',
        'La primera pregunta es clínica: ¿sangra en articulaciones y músculos, o en piel y mucosas?',
        ['Hemartrosis, hematomas', N('q', 'TTPK francamente largo', 'Varón, línea materna',
          'Hemartrosis y hematomas profundos en un varón, con TTPK francamente largo que corrige con la mezcla: sospecha de hemofilia. Dosificas factores ocho y nueve.',
          ['VIII bajo', N('do', 'Hemofilia A', 'Concentrado de factor VIII',
            'Factor ocho bajo: hemofilia A. Ante un sangrado, concentrado de factor ocho de inmediato: treinta unidades por kilo en una hemartrosis, cincuenta si es del sistema nervioso central.')],
          ['IX bajo', N('do', 'Hemofilia B', 'Concentrado de factor IX',
            'Factor nueve bajo: hemofilia B. Concentrado de factor nueve, cuarenta a cincuenta unidades por kilo en una hemartrosis. El factor ocho no sirve.')])],
        ['Mucosas, ambos sexos', N('q', 'Perfil de von Willebrand', 'Antígeno, ristocetina, VIII',
          'Epistaxis, menorragia y equimosis, en hombres o mujeres, con TTPK normal o levemente largo: pides el perfil de von Willebrand.',
          ['Tipo 1', N('ok', 'Desmopresina', 'Ácido tranexámico como apoyo',
            'Tipo uno, el más frecuente: desmopresina para procedimientos menores y sangrado de mucosas, con ácido tranexámico de apoyo.')],
          ['Grave o tipos 2 y 3', N('alert', 'Concentrado de VIII con vWF', 'Tipo 3 imita a la hemofilia',
            'Sangrado grave, o tipos dos y tres: concentrado de factor ocho con von Willebrand. El tipo tres puede dar hemartrosis, como una hemofilia severa.')])])]),
  },
};
