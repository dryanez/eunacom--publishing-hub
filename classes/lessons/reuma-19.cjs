// Clase 1.19 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_4.cjs (reuma-19).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-19",
  tier: 2,
  slides: [
    {
      type: "cover",
      subtitle: "Tríada clásica de Reiter, infección por Chlamydia, lesiones mucocutáneas y líquido sinovial estéril",
      say: "Bienvenidos a la clase diecinueve. Hoy abordamos la Artritis Reactiva, históricamente denominada Síndrome de Reiter. Analizaremos su origen inmunológico desencadenado semanas después de una infección urogenital o gastrointestinal, la tríada clínica de uretritis, conjuntivitis y oligoartritis asimétrica de extremidades inferiores, las lesiones cutáneas patognomónicas como la balanitis circinada y la queratodermia blenorrágica, y el tratamiento con antiinflamatorios y antibióticos dirigidos a la pareja. Comencemos.",
    },

    {
      type: "flow",
      kicker: "Inmunopatogenia postinfecciosa",
      title: "De la infección mucosa al mimetismo molecular sinovial",
      nodes: [
        { id: "inf", col: 0, row: 1, k: "start", t: "Infección urogenital o digestiva", s: "Chlamydia trachomatis o enteropatógenos entéricos" },
        { id: "lat", col: 1, row: 0, k: "mech", t: "Período de latencia inmune", s: "Una a cuatro semanas tras el cuadro primario" },
        { id: "art", col: 2, row: 0, k: "alert", t: "Artritis aséptica estéril", s: "Sinovitis inmunológica sin bacterias viables" },
        { id: "hla", col: 1, row: 2, k: "good", t: "Asociación con HLA-B27", s: "Presente en hasta el ochenta por ciento de casos" },
      ],
      edges: [
        { from: "inf", to: "lat" },
        { from: "lat", to: "art" },
        { from: "inf", to: "hla" },
      ],
      steps: [
        { show: ["inf", "lat"], note: "Infección desencadenante previa",
          say: "La artritis reactiva se gatilla tras una infección primaria mucosa, ya sea urogenital por Chlamydia trachomatis tras un contacto sexual no protegido, o entérica por bacterias como Salmonella, Shigella, Yersinia o Campylobacter tras una gastroenteritis aguda." },
        { show: ["art", "hla"], note: "Artritis aséptica mediada por inmunidad",
          say: "Tras un período de latencia de una a cuatro semanas, los pacientes con predisposición genética por antígeno HLA-B veintisiete desarrollan una sinovitis estéril por mimetismo molecular. El líquido articular está inflamado pero no contiene bacterias vivas en los cultivos." },
      ],
    },

    {
      type: "points",
      kicker: "Semiología cardinal",
      title: "La Tríada Clásica de Reiter y el compromiso articular",
      cards: [
        { title: "La tríada clínica clásica de Reiter", tag: "Uretritis, conjuntivitis y artritis", kind: "criteria", items: [
          { t: "Uretritis no gonocócica o cervicitis", d: "Disuria y secreción seromucosa escasa matinal",
            say: "El primer componente es la inflamación genitourinaria, manifestada como uretritis con disuria leve y secreción serosa o mucinosa matinal en el varón, o cervicitis habitualmente asintomática en mujeres." },
          { t: "Conjuntivitis estéril y artritis periférica", d: "Ojo rojo bilateral y afección de grandes articulaciones",
            say: "A la uretritis se suma una conjuntivitis bilateral estéril de resolución espontánea y una oligoartritis periférica asimétrica con gran derrame en rodillas o tobillos, configurando la clásica tríada semiológica del síndrome de Reiter." },
        ] },
        { title: "Patrón articular característico", tag: "Oligoartritis asimétrica de piernas", kind: "alert", items: [
          { t: "Predilección por extremidades inferiores", d: "Rodillas, tobillos y dactilitis en dedos del pie",
            say: "La artritis compromete típicamente articulaciones de carga de los miembros inferiores de forma asimétrica. Es muy frecuente encontrar además dactilitis o dedo en salchicha en los dedos de los pies y dolor en el tendón de Aquiles." },
          { t: "Líquido sinovial inflamatorio pero aséptico", d: "Gram y cultivos bacterianos negativos",
            say: "Al puncionar la articulación, el líquido sinovial es turbio con recuentos de veinte a cincuenta mil leucocitos por milímetro cúbico, pero la tinción de Gram y los cultivos microbiológicos son estrictamente negativos." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Lesiones mucocutáneas patognomónicas",
      title: "Balanitis circinada y Queratodermia blenorrágica",
      cards: [
        { title: "Balanitis circinada en genitales", tag: "Erosiones no dolorosas en el glande", kind: "key", items: [
          { t: "Erosiones superficiales serpiginosas", d: "Placas eritematosas con borde sobreelevado en prepucio",
            say: "La balanitis circinada consiste en pequeñas vesículas o erosiones eritematosas superficiales no dolorosas que confluyen formando placas serpiginosas en el glande y surco balanoprepucial, siendo un signo altamente orientador. Mira esta lesión en el glande: erosiones rojas, superficiales y sin dolor.",
          photo: { src: 'biblioteca/08_reumatologia/reuma-19/01_balanitis-circinada-queratodermia_1__amir-reuma_p83.jpg', label: 'Balanitis circinada', at: 'Mira esta lesión', credit: 'Manual AMIR Reumatología, p. 83' } },
          { t: "Indolora y autolimitada", d: "Diferente de las úlceras dolorosas de herpes",
            say: "A diferencia de las lesiones dolorosas causadas por el virus herpes simple, la balanitis circinada es indolora para el enfermo y suele pasar inadvertida a menos que el médico examine prolijamente la zona genital." },
        ] },
        { title: "Queratodermia blenorrágica palmoplantar", tag: "Placas hiperqueratósicas costrosas", kind: "alert", items: [
          { t: "Lesiones pustulo-costrosas en palmas y plantas", d: "Pápulas amarillentas que semejan psoriasis pustulosa",
            say: "La queratodermia blenorrágica se caracteriza por pápulas o placas hiperqueratósicas amarillentas con centro costroso localizadas en las palmas de las manos y plantas de los pies, histológicamente idénticas a la psoriasis. Mira estas plantas: las pápulas con costra, y aquí otro paciente con las mismas lesiones.",
          photos: [
            { src: 'biblioteca/08_reumatologia/reuma-19/01_balanitis-circinada-queratodermia_2__amir-reuma_p83.jpg', label: 'Queratodermia plantar', at: 'Mira estas plantas', credit: 'Manual AMIR Reumatología, p. 83' },
            { src: 'biblioteca/08_reumatologia/reuma-19/01_balanitis-circinada-queratodermia_alt1__cto-reuma_p40.jpg', label: 'Queratodermia: otro caso', at: 'aquí otro paciente', credit: 'Manual CTO Reumatología 14.ª ed., p. 40' },
          ] },
          { t: "Aftas orales asintomáticas", d: "Úlceras superficiales en mucosa oral y lengua",
            say: "Muchos pacientes presentan además pequeñas erosiones o aftas superficiales no dolorosas en la mucosa del paladar duro y lengua, que curan espontáneamente sin dejar cicatrización residual." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Diagnóstico diferencial de monoartritis",
      title: "Artritis Reactiva versus Artritis Séptica Gonocócica",
      nodes: [
        { id: "mon", col: 0, row: 1, k: "start", t: "Joven sexualmente activo con derrame", s: "Monoartritis o oligoartritis aguda de rodilla" },
        { id: "artro", col: 1, row: 1, k: "mech", t: "Artrocentesis obligatoria inmediata", s: "Citoquímico, Gram y cultivo de líquido sinovial" },
        { id: "sep", col: 2, row: 0, k: "alert", t: "Artritis Séptica (Gonococo o Staph)", s: "Cultivo positivo o PCR positiva; requiere antibiótico EV" },
        { id: "rea", col: 2, row: 2, k: "good", t: "Artritis Reactiva (Aséptica)", s: "Líquido estéril; cuadro postinfeccioso autoinmune" },
      ],
      edges: [
        { from: "mon", to: "artro" },
        { from: "artro", to: "sep", label: "si cultivo (+)" },
        { from: "artro", to: "rea", label: "si cultivo (-)" },
      ],
      steps: [
        { show: ["mon", "artro"], note: "La artrocentesis es obligatoria",
          say: "Ante todo adulto joven con derrame articular agudo de rodilla y antecedente de contacto sexual de riesgo, es mandatorio realizar una artrocentesis evacuadora inmediata para descartar en primer lugar una artritis séptica bacteriana." },
        { show: ["sep", "rea"], note: "Diferenciación microbiológica",
          say: "Si el Gram o los cultivos sinoviales aíslan gonococo u otro germen, se confirma artritis infecciosa. Si el líquido es turbio e inflamatorio pero rigurosamente estéril con lesiones mucocutáneas típicas, el diagnóstico es artritis reactiva." },
      ],
    },

    {
      type: "points",
      kicker: "Estrategia terapéutica integral",
      title: "Manejo articular con AINEs y tratamiento antibiótico",
      cards: [
        { title: "Tratamiento de la artritis: AINEs de primera línea", tag: "Antiinflamatorios a dosis plenas", kind: "pharma", items: [
          { t: "Indometacina o Naproxeno continuo", d: "Respuesta rápida del dolor y del derrame articular",
            say: "El tratamiento sintomático de primera línea para la inflamación articular son los AINEs a dosis plenas continuas, como indometacina o naproxeno. La mayoría de los pacientes experimenta alivio progresivo en las primeras semanas." },
          { t: "Corticoides intraarticulares o Sulfasalazina", d: "En monoartritis refractaria o curso crónico",
            say: "En casos de monoartritis persistente que no responde a AINEs, la infiltración articular con corticoides de depósito es muy efectiva. Si el cuadro se cronifica más allá de tres meses, se inicia sulfasalazina oral." },
        ] },
        { title: "Tratamiento antibiótico de la infección activa", tag: "Manejo estricto de la pareja sexual", kind: "alert", items: [
          { t: "Doxiciclina o Azitromicina para Chlamydia", d: "Erradicación del reservorio genitourinario primario",
            say: "Si se confirma infección activa por Chlamydia trachomatis en uretra o cérvix, se prescribe doxiciclina por siete a catorce días o azitromicina oral en dosis única para erradicar el microorganismo primario." },
          { t: "Tratamiento obligatorio a la pareja sexual", d: "Evitar reinfección y romper la cadena epidemiológica",
            say: "Es estrictamente obligatorio tratar a la pareja sexual del paciente de forma simultánea, incluso si se encuentra totalmente asintomática, para cortar la cadena de transmisión venérea." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Diagnóstico diferencial infeccioso",
      title: "Infección Gonocócica Diseminada (IGD) vs Artritis Reactiva",
      cards: [
        { title: "Síndrome artritis-dermatitis por gonococo", tag: "Tenosinovitis y pústulas necróticas", kind: "alert", items: [
          { t: "Tenosinovitis asimétrica y pústulas acrales", d: "Lesiones cutáneas pustulosas con centro necrótico",
            say: "La infección gonocócica diseminada cursa clásicamente con la tríada de tenosinovitis migratoria de muñecas y tobillos, poliartralgias y escasas pústulas hemorrágicas con centro necrótico en el dorso de manos y pies." },
          { t: "Microbiología y cultivos en Thayer-Martin", d: "Aislamiento de Neisseria gonorrhoeae en mucosas",
            say: "A diferencia de la artritis reactiva donde el proceso es postinfeccioso y estéril, en la infección gonocócica diseminada hay diseminación hematógena activa de bacterias viables, aislables en hemocultivos o frotis de exudado genital." },
        ] },
        { title: "Respuesta al tratamiento antimicrobiano", tag: "Ceftriaxona versus AINEs", kind: "pharma", items: [
          { t: "Ceftriaxona endovenosa inmediata", d: "Respuesta espectacular del gonococo en cuarenta y ocho horas",
            say: "La infección gonocócica diseminada mejora de forma espectacular en veinticuatro a cuarenta y ocho horas tras iniciar ceftriaxona endovenosa, mientras que la artritis reactiva no remite con antibióticos y exige antiinflamatorios continuos." },
          { t: "Cronicidad y pronóstico a largo plazo", d: "La artritis reactiva puede prolongarse por meses",
            say: "La artritis reactiva puede durar de tres a seis meses de forma autolimitada, requiriendo sulfasalazina o infiltraciones locales si persiste actividad inflamatoria crónica a pesar de los AINEs." },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Primero la infección, después la artritis',
      images: [
        { src: 'animaciones/reuma-19/A1_latencia_reactiva.mp4', label: 'Línea de tiempo de la artritis reactiva', credit: 'Animación propia' },
      ],
      steps: [
        { note: 'Línea de tiempo',
          say: 'Mira la línea del tiempo. Primero la infección, urogenital o digestiva, que se resuelve. Después, entre una y cuatro semanas de latencia inmune, aparece una artritis estéril en una persona con HLA B veintisiete: el líquido está inflamado, pero el cultivo es negativo. Dura de tres a seis meses y se trata con antiinflamatorios, y con sulfasalazina si pasa de tres meses. Ante un joven con derrame, igual se punciona siempre, para descartar una artritis séptica gonocócica.' },
      ],
    },

    {
      type: "table",
      kicker: "Oligoartritis",
      title: "Oligoartritis: el patrón orienta la causa",
      head: ["Patrón", "Orienta a", "Qué pedir o hacer"],
      rows: [
        { cells: ["Asimétrica de piernas, entesitis, dactilitis, uretritis o diarrea previa", "Espondiloartritis o reactiva", "HLA-B27 y radiografías"],
          say: "Ante una oligoartritis, de dos a cuatro articulaciones, lo primero es la artrocentesis, para descartar infección y cristales. Después se agrupa por patrón. Asimétrica de las piernas, con entesitis, dactilitis, lumbago inflamatorio, y una uretritis o diarrea previa: espondiloartritis, artritis reactiva, psoriásica o asociada a enfermedad intestinal, con HLA B veintisiete." },
        { cells: ["Migratoria con tenosinovitis y pústulas, adulto joven activo sexualmente", "Infección gonocócica diseminada", "Cultivos de uretra, cérvix, faringe y recto"],
          say: "Migratoria, con tenosinovitis y lesiones pustulosas, en un adulto joven sexualmente activo: infección gonocócica diseminada, con cultivos de uretra, cérvix, faringe y recto. Mira estas lesiones: pústulas hemorrágicas en la punta de los dedos y en la piel.",
          photo: { src: "_verificadas/349_reuma_Artritis_reactiva__HarrisonsP_p1279_1.jpg", label: "Gonococcemia diseminada: pústulas acrales sobre base eritematosa", at: "Mira estas lesiones", credit: "Harrison's Principles of Internal Medicine, 21.ª ed., p. 1279" } },
        { cells: ["Migratoria de grandes articulaciones tras faringitis", "Fiebre reumática", "Criterios de Jones"],
          say: "Migratoria de grandes articulaciones después de una faringitis estreptocócica: fiebre reumática, con los criterios de Jones." },
        { cells: ["Pocas articulaciones con uveítis en un niño", "AIJ oligoarticular", "ANA y lámpara de hendidura"],
          say: "Pocas articulaciones con uveítis en una niña o un niño: artritis idiopática juvenil oligoarticular." },
        { cells: ["Eritema nodoso con adenopatías hiliares y tobillos", "Síndrome de Löfgren: sarcoidosis", "Radiografía de tórax"],
          say: "Eritema nodoso con adenopatías hiliares y artritis de los tobillos: síndrome de Löfgren, de la sarcoidosis. Mira esas piernas: los nódulos rojos y dolorosos son el eritema nodoso.",
          photo: { src: "biblioteca/08_reumatologia/reuma-19/10_eritema-nodoso__fitzpatrick_p611.jpg", label: "Eritema nodoso", at: "Mira esas piernas", credit: "Fitzpatrick, Dermatology in General Medicine, Fig. 68-4" } },
        { cells: ["Gota, pseudogota o artrosis con derrame", "Cristales o mecánica", "Líquido sinovial"],
          say: "Y no olvides la gota, la pseudogota y la artrosis con derrame. El estudio incluye hemograma, velocidad de sedimentación, proteína C reactiva, ácido úrico, HLA B veintisiete, VIH, VDRL y radiografías. El tratamiento inicial son antiinflamatorios y reposo relativo, con infiltración de corticoide solo si se descartó infección." },
      ],
    },

    {
      type: "points",
      kicker: "ITS en atención primaria",
      title: "Manejo sindrómico de las infecciones de transmisión sexual",
      cards: [
        { title: "Flujo uretral y cervicitis", tag: "Cubrir gonorrea y clamidia", kind: "pharma", items: [
          { t: "Ceftriaxona IM más azitromicina 1 g", d: "O doxiciclina 100 mg cada 12 h por 7 días",
            say: "La norma del Minsal trata en la primera consulta con los agentes más probables, sin esperar el laboratorio. En el flujo uretral y la cervicitis se cubren gonorrea y clamidia: ceftriaxona intramuscular en dosis única más azitromicina un gramo oral en dosis única, o doxiciclina cien miligramos cada doce horas por siete días." },
        ] },
        { title: "Úlcera genital y flujo vaginal", tag: "Según el síndrome", kind: "criteria", items: [
          { t: "Úlcera: sífilis y herpes", d: "Penicilina benzatina 2,4 millones UI; aciclovir 400 mg cada 8 h",
            say: "En la úlcera genital se cubren la sífilis, con penicilina benzatina dos coma cuatro millones de unidades en dosis única en la sífilis primaria, y el herpes genital, con aciclovir cuatrocientos miligramos cada ocho horas por siete a diez días en el primer episodio. Si hay chancroide, azitromicina un gramo." },
          { t: "Flujo vaginal y dolor abdominal bajo", d: "Metronidazol, clotrimazol o fluconazol; EPI: esquema amplio",
            say: "En el flujo vaginal: metronidazol en la tricomoniasis y la vaginosis bacteriana, y clotrimazol o fluconazol en la candidiasis. En el dolor abdominal bajo con sospecha de enfermedad inflamatoria pélvica, un esquema que cubra gonococo, clamidia y anaerobios." },
        ] },
        { title: "Pilares de toda ITS", tag: "Seguimiento", kind: "key", items: [
          { t: "Consejería, preservativo y parejas", d: "Parejas de los últimos 2 a 3 meses",
            say: "Todo manejo incluye consejería y preservativo, y estudio y tratamiento de las parejas sexuales de los últimos dos a tres meses. También tamizaje del resto de las infecciones: VIH, VDRL y hepatitis B." },
          { t: "Abstinencia 7 días y notificación", d: "Gonorrea, sífilis y VIH; vacunas hepatitis B y VPH",
            say: "Abstinencia hasta siete días después de completar el tratamiento, notificación obligatoria de gonorrea, sífilis y VIH, entre otras, y vacunación contra hepatitis B y virus del papiloma humano." },
          { t: "Control de sífilis y clamidia", d: "VDRL a 3, 6 y 12 meses; clamidia a los 3 meses",
            say: "En la sífilis se controla el VDRL cuantitativo a los tres, seis y doce meses, y se espera una caída de cuatro veces o más en seis a doce meses; en la gestante el tratamiento es urgente para prevenir la sífilis congénita. La clamidia se vuelve a buscar a los tres meses por la alta tasa de reinfección. Sin tratamiento, hay riesgo de enfermedad inflamatoria pélvica, infertilidad, embarazo ectópico, artritis reactiva e infección gonocócica diseminada." },
        ] },
      ],
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Espectro Clínico del Síndrome de Reiter / Artritis Reactiva",
      head: ["Sistema Orgánico", "Manifestación Típica", "Signo Semiológico Clave"],
      rows: [
        { cells: ["Articular", "Oligoartritis asimétrica de piernas", "Derrame en rodillas, tobillos y dactilitis en pie"],
          say: "Articular: oligoartritis asimétrica en miembros inferiores con dactilitis en pies y entesitis aquiliana." },
        { cells: ["Genitourinario", "Uretritis no gonocócica / cervicitis", "Disuria leve y secreción seromucosa matinal escasa"],
          say: "Genitourinario: uretritis no gonocócica con disuria y secreción serosa matinal tras contacto sexual." },
        { cells: ["Ocular", "Conjuntivitis no infecciosa transitoria", "Ojo rojo bilateral estéril de corta duración"],
          say: "Ocular: conjuntivitis estéril leve o uveítis anterior aguda unilateral dolorosa con fotofobia." },
        { cells: ["Cutáneo y Mucoso", "Balanitis circinada y queratodermia", "Erosiones en glande y placas queratósicas en plantas"],
          say: "Cutáneo y mucoso: balanitis circinada indolora en glande y queratodermia descamativa en plantas de pies." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Hombre de 23 años consulta por dolor e inflamación en rodilla izquierda y tobillo derecho de 10 días de evolución, con gran dificultad para apoyar el pie. Refiere que hace 3 semanas presentó ardor al orinar con escasa secreción uretral blanquecina matinal tras un contacto sexual de riesgo sin protección, a lo que siguió ojo rojo bilateral leve que resolvió espontáneamente. Al examen físico destaca rodilla izquierda con derrame articular a tensión y dactilitis en el segundo dedo del pie derecho. En el glande se aprecian erosiones circulares confluentes no dolorosas (balanitis circinada). La artrocentesis de rodilla da salida a líquido turbio con 32.000 leucocitos/mm³ con Gram negativo y cultivos bacterianos negativos.",
      question: "¿Cuál es el diagnóstico clínico más probable y cuál es la conducta terapéutica indicada?",
      options: [
        { letter: "A", text: "Artritis Reactiva (Síndrome de Reiter); iniciar AINEs a dosis plenas, tratar Chlamydia con Doxiciclina y tratar obligatoriamente a su pareja sexual" },
        { letter: "B", text: "Artritis séptica gonocócica; hospitalizar para Ceftriaxona 1 g endovenoso diario por 14 días" },
        { letter: "C", text: "Gota poliarticular aguda; iniciar Alopurinol 300 mg al día de inmediato" },
        { letter: "D", text: "Lupus eritematoso sistémico; iniciar Prednisona e Hidroxicloroquina oral" },
        { letter: "E", text: "Espondilitis anquilosante avanzada; indicar terapia biológica Anti-TNF inmediata" },
      ],
      correct: "A",
      explanation: "El cuadro clínico reúne la tríada clásica del Síndrome de Reiter (uretritis previa, conjuntivitis y oligoartritis asimétrica de extremidades inferiores con dactilitis) junto a la lesión mucocutánea patognomónica de balanitis circinada y líquido articular inflamatorio estrictamente estéril. El manejo requiere AINEs a dosis plenas para la inflamación articular, tratamiento antimicrobiano para Chlamydia trachomatis con doxiciclina o azitromicina, y tratamiento epidemiológico mandatorio a la pareja sexual.",
      say: {
        stem: "Caso clínico. Varón de veintitrés años con dolor en rodilla izquierda y tobillo derecho tras uretritis y ojo rojo hace tres semanas, dactilitis en dedo del pie, balanitis circinada indolora y líquido articular con treinta y dos mil leucocitos con cultivos negativos.",
        question: "¿Cuál es el diagnóstico clínico más probable y cuál es la conducta terapéutica indicada?",
        options: "Las alternativas: artritis reactiva con AINEs y doxiciclina para él y su pareja, artritis gonocócica con ceftriaxona, gota con alopurinol, lupus con corticoides, o espondilitis con biológicos. Piénsalo.",
        answer: "La respuesta correcta es la A. Cumple la tríada clásica de Reiter con balanitis circinada y líquido sinovial estéril. Se indican AINEs continuos para la artritis y tratamiento de Chlamydia con doxiciclina tanto al paciente como a su pareja.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2018 · Pregunta 44",
      stem: "Hombre de 26 años consulta por dolor e inflamación en rodilla derecha y tobillo izquierdo de 2 semanas de evolución. Como antecedente refiere un cuadro de uretritis con disuria hace 1 mes tras una relación sexual no protegida. Al examen físico destaca artritis de rodilla derecha y placas hiperqueratósicas indoloras de aspecto descamativo en plantas de pies (queratodermia blenorrágica). La artrocentesis muestra 25.000 leucocitos/mm³ con cultivos negativos. ¿Cuál es el patógeno causante de la infección primaria desencadenante más probable?",
      options: [
        { letter: "A", text: "Neisseria gonorrhoeae" },
        { letter: "B", text: "Chlamydia trachomatis" },
        { letter: "C", text: "Treponema pallidum" },
        { letter: "D", text: "Trichomonas vaginalis" },
        { letter: "E", text: "Herpes simplex virus tipo 2" },
      ],
      correct: "B",
      explanation: "En el síndrome de artritis reactiva tras exposición sexual (artritis periférica asimétrica + antecedente de uretritis + queratodermia blenorrágica con líquido articular estéril), el agente etiológico primario responsable de la infección urogenital desencadenante es Chlamydia trachomatis. No se trata de una artritis séptica gonocócica, ya que el líquido sinovial es aséptico.",
      say: {
        stem: "EUNACOM dos mil dieciocho, pregunta cuarenta y cuatro. Joven de veintiséis años con oligoartritis asimétrica, antecedente de uretritis previa, placas de queratodermia blenorrágica en plantas de pies y líquido articular estéril.",
        question: "¿Cuál es el patógeno causante de la infección primaria desencadenante más probable?",
        options: "Las opciones: gonococo, Chlamydia trachomatis, Treponema pallidum, tricomonas, o virus herpes simple tipo dos. Piénsalo.",
        answer: "Es la B. Chlamydia trachomatis es la causa número uno de infección urogenital desencadenante de artritis reactiva tras contacto sexual.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2020 · Pregunta 15",
      stem: "¿Cuál de las siguientes combinaciones de hallazgos clínicos conforma la denominación clásica del Síndrome de Reiter?",
      options: [
        { letter: "A", text: "Artritis reumatoide, esplenomegalia y neutropenia" },
        { letter: "B", text: "Uretritis, conjuntivitis y artritis periférica asimétrica" },
        { letter: "C", text: "Xerostomía, xeroftalmia y artralgias" },
        { letter: "D", text: "Calcinosis, fenómeno de Raynaud y esclerodactilia" },
        { letter: "E", text: "Aftas orales, aftas genitales y uveítis con hipopión" },
      ],
      correct: "B",
      explanation: "El Síndrome de Reiter se define clásicamente por la tríada clínica de: 1) Uretritis no gonocócica (o cervicitis), 2) Conjuntivitis bilateral y 3) Artritis periférica asimétrica de extremidades inferiores. La tríada de AR + esplenomegalia + neutropenia corresponde al síndrome de Felty, y las aftas orogenitales más uveítis a la enfermedad de Behçet.",
      say: {
        stem: "EUNACOM dos mil veinte, pregunta quince. Se indagan las definiciones sindromáticas clásicas en reumatología.",
        question: "¿Cuál de las siguientes combinaciones de hallazgos clínicos conforma la denominación clásica del Síndrome de Reiter?",
        options: "Las alternativas: artritis con esplenomegalia y neutropenia, uretritis con conjuntivitis y artritis asimétrica, ojo seco con boca seca, calcinosis con Raynaud, o aftas orogenitales con uveítis. Piénsalo.",
        answer: "La respuesta correcta es la B. La tríada de Reiter reúne uretritis no gonocócica, conjuntivitis estéril y artritis periférica asimétrica de predominio en extremidades inferiores.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2023 · Pregunta 30",
      stem: "¿Cuál de las siguientes afirmaciones respecto al líquido sinovial obtenido mediante artrocentesis en un paciente con Artritis Reactiva aguda es CORRECTA?",
      options: [
        { letter: "A", text: "Presenta invariablemente tinción de Gram con diplococos gramnegativos intracelulares abundantes" },
        { letter: "B", text: "Es francamente inflamatorio (recuentos de 20.000 a 50.000 leucocitos/mm³) pero rigurosamente ESTÉRIL al cultivo" },
        { letter: "C", text: "Es no inflamatorio con viscosidad normal y menos de 200 leucocitos/mm³" },
        { letter: "D", text: "Contiene cristales de urato monosódico birrefringentes fuertemente negativos" },
        { letter: "E", text: "Presenta microhemorragias masivas por fragilidad capilar pura" },
      ],
      correct: "B",
      explanation: "El líquido articular en la artritis reactiva es de tipo inflamatorio (frecuentemente turbio con 20.000 a 50.000 leucocitos/mm³ de predominio polimorfonuclear), pero es típicamente estéril; tanto el Gram como los cultivos bacterianos estándar resultan negativos, confirmando su naturaleza inmunológica postinfecciosa aséptica.",
      say: {
        stem: "EUNACOM dos mil veintitrés, pregunta treinta. Se evalúan las características del líquido sinovial en artropatías postinfecciosas.",
        question: "¿Cuál afirmación respecto al líquido sinovial en una artritis reactiva aguda es correcta?",
        options: "Las opciones: Gram con diplococos gramnegativos, líquido inflamatorio pero rigurosamente estéril al cultivo, líquido no inflamatorio mecánico, cristales de urato, o microhemorragias masivas. Piénsalo.",
        answer: "Es la B. El líquido sinovial es francamente inflamatorio pero estéril en los cultivos bacterianos, reflejando una sinovitis reactiva inmunológica mediada a distancia.",
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.11.1.016 · Oligoartritis",
      "stem": "Mujer de 22 años, sexualmente activa sin preservativo, con 4 días de fiebre de 38,4 °C y poliartralgias migratorias, que evoluciona con artritis de la rodilla derecha y la muñeca izquierda, tenosinovitis dorsal de la mano izquierda y 4 pústulas hemorrágicas en las extremidades. La artrocentesis de rodilla muestra 35.000 leucocitos por mm3 con predominio polimorfonuclear y Gram sin bacterias.",
      "question": "¿Cuál es el diagnóstico más probable y su tratamiento?",
      "options": [
        {
          "letter": "A",
          "text": "Artritis reactiva; AINEs"
        },
        {
          "letter": "B",
          "text": "Infección gonocócica diseminada; ceftriaxona endovenosa, estudio de otras ITS y tratamiento de la pareja"
        },
        {
          "letter": "C",
          "text": "Artritis reumatoide; metotrexato"
        },
        {
          "letter": "D",
          "text": "Gota; colchicina"
        },
        {
          "letter": "E",
          "text": "Fiebre reumática; penicilina benzatina"
        }
      ],
      "correct": "B",
      "explanation": "Oligoartritis asimétrica febril en una joven sexualmente activa, con tenosinovitis y pústulas hemorrágicas, es una infección gonocócica diseminada. El Gram y el cultivo del líquido suelen ser negativos; se cultivan sangre, cuello uterino, recto y faringe. Se trata con ceftriaxona endovenosa. La artritis reactiva aparece semanas después y no da pústulas.",
      "say": {
        "stem": "Mujer de veintidós años, sexualmente activa sin preservativo, con cuatro días de fiebre y dolores articulares migratorios, que luego hace artritis de rodilla y muñeca, tenosinovitis en el dorso de la mano y pústulas hemorrágicas en la piel. El líquido articular es inflamatorio y el Gram no muestra bacterias.",
        "question": "¿Cuál es el diagnóstico más probable y su tratamiento?",
        "options": "Las opciones: artritis reactiva con antiinflamatorios, gonococia diseminada con ceftriaxona endovenosa, artritis reumatoide con metotrexato, gota con colchicina, o fiebre reumática con penicilina benzatina. Piénsalo.",
        "answer": "Es la B. Fiebre, tenosinovitis, pústulas en la piel y oligoartritis en una joven sexualmente activa es una gonococia diseminada, y se trata con ceftriaxona endovenosa. La artritis reactiva tienta por el contexto sexual, pero aparece semanas después de la uretritis, es estéril y no da esas pústulas."
      }
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Tríada de Reiter y desencadenantes", tag: "Chlamydia y líquido estéril", kind: "criteria", items: [
          { t: "Uretritis, conjuntivitis y oligoartritis", d: "Aparición una a cuatro semanas postcontacto",
            say: "Cerramos con las tres reglas de oro. Primero: el síndrome de Reiter es la tríada de uretritis no gonocócica, conjuntivitis estéril y oligoartritis asimétrica en miembros inferiores con dactilitis en dedos del pie." },
          { t: "Chlamydia trachomatis número uno", d: "Microorganismo desencadenante más frecuente",
            say: "Segundo: Chlamydia trachomatis es la causa más común tras contacto sexual venéreo, y el líquido articular es francamente inflamatorio pero rigurosamente estéril al cultivo." },
        ] },
        { title: "Lesiones patognomónicas y tratamiento", tag: "Balanitis, queratodermia y pareja", kind: "pharma", items: [
          { t: "Balanitis circinada y queratodermia", d: "Erosiones indoloras en glande y placas en plantas",
            say: "Tercero: la balanitis circinada y la queratodermia blenorrágica son lesiones patognomónicas que confirman el diagnóstico." },
          { t: "AINEs continuos y manejo de pareja", d: "Doxiciclina o azitromicina al paciente y a la pareja",
            say: "El tratamiento articular se basa en AINEs a dosis plenas, y la infección por Chlamydia exige tratar obligatoriamente tanto al paciente como a su pareja sexual. Si te llevas una sola idea de hoy: uretritis previa con ojo rojo y rodilla inflamada estéril es artritis reactiva; indica AINEs, trata a la pareja y descarta Chlamydia. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo de enfrentamiento: Oligoartritis Asimétrica y Sospecha de Artritis Reactiva",
    root: N("start", "Oligoartritis Asimétrica de Extremidades Inferiores", "Hombre o mujer joven con derrame agudo de rodilla o tobillo",
      "Paciente joven que consulta por monoartritis o oligoartritis aguda en miembros inferiores.",
      ["", N("q", "¿Antecedente de uretritis, disuria, diarrea aguda o contacto sexual 1 a 4 semanas previas?", "Interrogatorio de foco infeccioso gatillante",
        "Se pesquisa antecedente de infección mucosa previa reciente.",
        ["SÍ: Infección previa urogenital o entérica", N("do", "Artrocentesis Inmediata obligatoria", "Descartar artritis séptica bacteriana activa con Gram y cultivo",
          "La punción articular es mandataria para diferenciar artritis séptica de reactiva.",
          ["", N("q", "¿Líquido articular francamente inflamatorio pero Gram y cultivos negativos?", "Verificación de esterilidad sinovial",
            "Se examina el resultado microbiológico del líquido sinovial.",
            ["SÍ: Líquido sinovial estéril con lesiones de Reiter", N("ok", "Artritis Reactiva confirmada: AINEs y Tratamiento de Pareja", "AINEs a dosis plenas continuas más Doxiciclina si hay Chlamydia activa, tratando a la pareja",
              "Diagnóstico de artritis reactiva confirmado. Prescribir AINEs continuos y erradicar Chlamydia en el paciente y su pareja sexual.")],
            ["NO: Gram positivo o desarrollo bacteriano", N("refer", "Artritis Séptica Infecciosa (Gonococo / S. aureus)", "Hospitalización urgente, drenaje articular y antibióticos endovenosos dirigidos",
              "Infección articular verdadera activa. Iniciar terapia antibiótica parenteral urgente y lavado articular por traumatología.")])])],
        ["NO: Sin antecedente infeccioso ni lesiones mucosas", N("do", "Estudio de otras causas de artritis", "Descartar gota por microcristales, artritis psoriásica u osteoartritis",
          "Sin datos de proceso reactivo. Solicitar estudio de microcristales y factor reumatoide.")])]),
  },
};
