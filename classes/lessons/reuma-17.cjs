// Clase 1.17 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_4.cjs (reuma-17).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-17",
  tier: 3,
  slides: [
    {
      type: "cover",
      subtitle: "Sacroilitis bilateral, test de Schöber, columna en caña de bambú y la regla de oro: metotrexato no sirve en compromiso axial",
      say: "Bienvenidos. Hoy analizamos la Espondilitis Anquilosante, prototipo de las espondiloartritis seronegativas. Aprenderemos a evaluar la rigidez axial con el test de Schöber y la expansión torácica, los criterios radiológicos de Nueva York con sacroilitis bilateral, la uveítis anterior aguda como complicación mayor, y la regla de oro del EUNACOM: AINEs de primera línea y terapia anti-TNF de segunda línea, recordando que el metotrexato no tiene ninguna utilidad en columna. Comencemos.",
    },

    {
      type: "flow",
      kicker: "Inmunopatogenia y progresión",
      title: "De la sacroilitis inicial a la anquilosis axial ascendente",
      nodes: [
        { id: "hla", col: 0, row: 1, k: "start", t: "Predisposición genética HLA-B27", s: "Presente en más del noventa por ciento de los pacientes" },
        { id: "sac", col: 1, row: 0, k: "alert", t: "Sacroilitis bilateral simétrica", s: "Sitio inicial obligatorio de afección inflamatoria" },
        { id: "asc", col: 2, row: 0, k: "mech", t: "Progresión axial ascendente", s: "Columna lumbar, dorsal y finalmente cervical" },
        { id: "anq", col: 2, row: 2, k: "risk", t: "Anquilosis y osificación ligamentosa", s: "Fusión vertebral irreversible y rigidez total" },
      ],
      edges: [
        { from: "hla", to: "sac" },
        { from: "sac", to: "asc" },
        { from: "asc", to: "anq" },
      ],
      steps: [
        { show: ["hla", "sac"], note: "Inicio constante en articulaciones sacroilíacas",
          say: "La espondilitis anquilosante se presenta típicamente en hombres jóvenes de quince a treinta años de edad con presencia del alelo HLA-B veintisiete. La inflamación comienza casi invariablemente en ambas articulaciones sacroilíacas de forma bilateral y simétrica, provocando dolor glúteo alternante en báscula." },
        { show: ["asc", "anq"], note: "Progresión ascendente y anquilosis ósea",
          say: "Desde las sacroilíacas, el proceso inflamatorio asciende lentamente por el esqueleto axial. Compromete la columna lumbar, la columna dorsal y finalmente la columna cervical. Las entesis de los discos vertebrales se inflaman y se osifican progresivamente, llevando a la fusión completa e irreversible de la columna vertebral." },
      ],
    },

    {
      type: "points",
      kicker: "Semiología física de columna",
      title: "Exploración de la movilidad axial: Test de Schöber",
      cards: [
        { title: "Test de Schöber modificado", tag: "Estándar de oro de rigidez lumbar", kind: "criteria", items: [
          { t: "Técnica de medición con cinta métrica", d: "Punto entre espinas ilíacas y diez centímetros hacia cefálico",
            say: "El test de Schöber modificado evalúa la flexión anterior de la columna lumbar. Con el paciente de pie, se marca la unión lumbosacra a nivel de las fositas de Venus y un segundo punto diez centímetros más arriba en la línea media vertebral." },
          { t: "Interpretación patológica menor a cinco centímetros", d: "Aumento menor a quince centímetros en total",
            say: "Al solicitar al paciente que flexione al máximo el tronco hacia adelante sin doblar las rodillas, la distancia entre ambas marcas debe aumentar en al menos cinco centímetros, superando los quince centímetros en total. Un incremento menor a cinco centímetros demuestra rigidez patológica de columna." },
        ] },
        { title: "Mediciones axiales complementarias", tag: "Distancias pared y suelo", kind: "normal", items: [
          { t: "Distancia occipucio-pared o trago-pared", d: "Evalúa cifosis dorsal y rigidez cervical",
            say: "Con los talones y la espalda pegados a la pared, se mide la distancia entre el occipucio o el trago de la oreja y el muro. En condiciones normales debe ser cero; cualquier separación positiva traduce una cifosis dorsal rígida con proyección anterior del cuello." },
          { t: "Distancia dedos-suelo a la flexión", d: "Mide el rango de movilidad corporal global",
            say: "Mide los centímetros que separan las puntas de los dedos de la mano del suelo al flexionar el tronco. Aunque es muy fácil de realizar en la consulta, está influenciada por la flexibilidad de las caderas y es menos específica que el test de Schöber." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Caja torácica y sacroilíacas",
      title: "Expansión torácica y maniobras de estrés sacroilíaco",
      cards: [
        { title: "Expansión torácica disminuida", tag: "Anquilosis costovertebral restrictiva", kind: "alert", items: [
          { t: "Medición a nivel del cuarto espacio intercostal", d: "Diferencia entre inspiración y espiración máxima",
            say: "La inflamación y fusión de las articulaciones costovertebrales y costotransversas reduce la movilidad de la caja torácica. Se mide con cinta métrica a la altura de las mamilas, calculando la diferencia de perímetro entre inspiración profunda y espiración máxima." },
          { t: "Valor patológico menor a dos coma cinco centímetros", d: "Condiciona patrón restrictivo extrapulmonar",
            say: "Una expansión torácica menor a dos coma cinco centímetros es francamente patológica en un adulto joven. Esta rigidez costal produce una alteración ventilatoria de patrón restrictivo puro en las pruebas de espirometría funcional." },
        ] },
        { title: "Maniobras semiológicas sacroilíacas", tag: "Provocación de dolor articular", kind: "key", items: [
          { t: "Maniobra de Patrick o FABER", d: "Flexión, abducción y rotación externa de cadera",
            say: "La maniobra de Patrick o FABER coloca la pierna en posición de cuatro, apoyando el maléolo externo sobre la rodilla contralateral mientras el examinador presiona hacia abajo la rodilla flexionada y la espina ilíaca opuesta, despertando dolor sacroilíaco posterior." },
          { t: "Compresión de crestas ilíacas y maniobra de Gaenslen", d: "Tensión directa en articulaciones sacroilíacas",
            say: "La compresión manual forzada de ambas crestas ilíacas hacia la línea media con el paciente en decúbito lateral desencadena dolor exquisito localizado en la articulación sacroilíaca inflamada del lado apoyado." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Criterios diagnósticos internacionales",
      title: "Criterios de Nueva York Modificados: Imagen y Clínica",
      nodes: [
        { id: "cli", col: 0, row: 1, k: "start", t: "Criterios clínicos cardinales", s: "Lumbago inflamatorio, Schöber o expansión torácica baja" },
        { id: "rx", col: 1, row: 0, k: "alert", t: "Criterio Radiológico Obligatorio", s: "Sacroilitis bilateral grado 2 a 4 o unilateral 3 a 4" },
        { id: "rm", col: 1, row: 2, k: "mech", t: "Resonancia Magnética precoz (STIR)", s: "Edema óseo subcondral en espondiloartritis no radiográfica" },
        { id: "dx", col: 2, row: 1, k: "good", t: "Diagnóstico definitivo de Espondilitis", s: "Al menos un criterio clínico más criterio radiológico" },
      ],
      edges: [
        { from: "cli", to: "dx" },
        { from: "rx", to: "dx" },
        { from: "cli", to: "rm" },
      ],
      steps: [
        { show: ["cli", "rx", "dx"], note: "Criterios de Nueva York modificados",
          say: "Para clasificar con certeza a un paciente con espondilitis anquilosante se exige al menos un criterio clínico junto con el criterio radiológico obligatorio: demostrar en radiografía simple una sacroilitis bilateral al menos grado dos o una sacroilitis unilateral avanzada grado tres o cuatro." },
        { show: ["rm"], note: "Resonancia magnética en etapas tempranas",
          say: "Dado que las alteraciones radiológicas óseas pueden tardar hasta diez años en ser visibles, la resonancia magnética en secuencia STIR permite identificar precozmente el edema óseo inflamatorio activo antes de que aparezcan las erosiones o la esclerosis en las radiografías convencionales." },
      ],
    },

    {
      type: "points",
      kicker: "Hallazgos en imágenes vertebrales",
      title: "Sindesmofitos, cuadratura y Columna en Caña de Bambú",
      cards: [
        { title: "Signos radiológicos incipientes", tag: "Erosiones y cuadratura", kind: "criteria", items: [
          { t: "Erosiones de Romanus y esquinas brillantes", d: "Entesitis en los ángulos anterior y posterior del cuerpo vertebral",
            say: "La entesitis en las esquinas de los cuerpos vertebrales produce pequeñas erosiones óseas conocidas como lesiones de Romanus. Al cicatrizar mediante esclerosis reactiva forman las llamadas esquinas brillantes en la radiografía lateral de columna." },
          { t: "Cuadratura vertebral o squaring", d: "Pérdida de la concavidad anterior normal del cuerpo",
            say: "La inflamación y neoformación ósea provocan la pérdida de la concavidad anterior fisiológica de los cuerpos vertebrales, adquiriendo un aspecto cuadrangular característico en la proyección lateral." },
        ] },
        { title: "Fase avanzada: Columna en caña de bambú", tag: "Anquilosis intersomática completa", kind: "alert", items: [
          { t: "Sindesmofitos marginales verticales delgados", d: "Osificación del anillo fibroso discal",
            say: "A diferencia de los osteofitos de la artrosis, que son gruesos y horizontales, los sindesmofitos de la espondilitis anquilosante son puentes óseos delgados de orientación estrictamente vertical que unen los cuerpos vertebrales contiguos." },
          { t: "Columna en caña de bambú y rigidez total", d: "Fusión continua de toda la columna vertebral",
            say: "La confluencia de sindesmofitos bilaterales y la osificación de los ligamentos interespinosos genera la clásica columna en caña de bambú o columna de tren. La columna se transforma en un hueso largo continuo y rígido con altísimo riesgo de fracturas ante traumatismos mínimos." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Manifestaciones extraarticulares",
      title: "Uveítis anterior aguda, compromiso aórtico y pulmonar",
      cards: [
        { title: "Uveítis anterior aguda (UAA)", tag: "Complicación extraarticular número uno", kind: "alert", items: [
          { t: "Dolor ocular, ojo rojo y fotofobia brusca", d: "Típicamente unilateral, no granulomatosa y recurrente",
            say: "Esta es la complicación extraarticular más frecuente en el examen: la uveítis anterior aguda se presenta en hasta un treinta por ciento de los pacientes. Es de comienzo agudo, unilateral, con dolor ocular severo, inyección ciliar periquerática, fotofobia y miosis pupilar." },
          { t: "Manejo urgente con corticoides tópicos", d: "Prevención de sinequias posteriores y pérdida visual",
            say: "Requiere derivación oftalmológica inmediata para instalar colirios con corticoides tópicos y midriáticos ciclopéjicos. No suele dejar secuelas si se trata precozmente, pero tiende a recurrir alternando de ojo a lo largo de los años." },
        ] },
        { title: "Compromiso cardiovascular y pulmonar", tag: "Aortitis y fibrosis apical", kind: "criteria", items: [
          { t: "Insuficiencia aórtica y bloqueos de conducción", d: "Aortitis ascendente y fibrosis del haz de His",
            say: "La inflamación crónica de la raíz aórtica dilata el anillo valvular provocando insuficiencia aórtica diastólica. Además, la extensión del tejido fibroso al tabique interventricular puede causar bloqueos aurículoventriculares de diverso grado que requieran marcapasos." },
          { t: "Fibrosis pulmonar de lóbulos superiores", d: "Lesiones quísticas apicales con riesgo de aspergillus",
            say: "Una manifestación pulmonar tardía y poco común es la fibrosis apical bilateral con cavitaciones en los lóbulos superiores, las cuales pueden ser colonizadas por hongos formando micetomas o aspergilomas asintomáticos." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Estrategia terapéutica médica",
      title: "Tratamiento escalonado: AINEs continuos y Terapia Biológica",
      nodes: [
        { id: "dx", col: 0, row: 1, k: "start", t: "Espondilitis Anquilosante confirmada", s: "Compromiso axial activo y dolor nocturno" },
        { id: "aine", col: 1, row: 1, k: "good", t: "Paso 1: AINEs a dosis plenas continuas", s: "Naproxeno, Indometacina o Celecoxib continuos" },
        { id: "mtx", col: 2, row: 0, k: "trap", t: "REGLA DE ORO: Metotrexato NO sirve", s: "Ineficaz en el compromiso axial de la columna" },
        { id: "bio", col: 2, row: 2, k: "alert", t: "Paso 2: Terapia Biológica Anti-TNF", s: "Infliximab, Adalimumab o Etanercept en falla a AINEs" },
      ],
      edges: [
        { from: "dx", to: "aine" },
        { from: "aine", to: "mtx", label: "error habitual" },
        { from: "aine", to: "bio", label: "si falla tras dos AINEs" },
      ],
      steps: [
        { show: ["dx", "aine"], note: "AINEs como primera línea indiscutida",
          say: "El tratamiento farmacológico de primera línea son los antiinflamatorios no esteroidales a dosis plenas de forma continua, no a demanda. Fármacos como el naproxeno o la indometacina logran aliviar el dolor, reducir la rigidez matinal y enlentecer la progresión radiológica de la anquilosis." },
        { show: ["mtx"], note: "La gran trampa: El metotrexato no funciona en columna",
          say: "Esta es la regla de oro más evaluada en el EUNACOM: los fármacos modificadores de enfermedad sintéticos convencionales como el metotrexato o la leflunomida no tienen ninguna eficacia demostrada para el compromiso axial de la columna vertebral. Su uso se reserva exclusivamente si coexiste artritis periférica de extremidades." },
        { show: ["bio"], note: "Terapia biológica anti-TNF de segunda línea",
          say: "Si el paciente persiste con dolor y rigidez activa tras usar al menos dos AINEs diferentes a dosis máximas durante cuatro semanas cada uno, la indicación formal es el escalamiento a terapia biológica con inhibidores del factor de necrosis tumoral alfa, como adalimumab, infliximab o etanercept." },
      ],
    },

    {
      type: "points",
      kicker: "Kinesioterapia y seguridad biológica",
      title: "Rehabilitación postural y cribado infeccioso prebiológico",
      cards: [
        { title: "Kinesioterapia y ejercicios de extensión", tag: "Pilar no farmacológico obligatorio", kind: "key", items: [
          { t: "Programa de ejercicios de extensión axial", d: "Preservar la movilidad espinal y la capacidad torácica",
            say: "La kinesioterapia motora diaria orientada a ejercicios de extensión de tronco, fortalecimiento dorsal y ejercicios respiratorios es obligatoria de por vida. Ayuda a evitar la postura en flexión y preserva al máximo la expansión de la caja torácica." },
          { t: "Colchón firme y evitar almohadas altas", d: "Prevenir la deformidad cifótica cervical",
            say: "Se recomienda dormir boca arriba sobre un colchón firme y sin almohadas voluminosas para contrarrestar la tendencia natural de la columna vertebral hacia la anquilosis en flexión cervical anterior." },
        ] },
        { title: "Tamizaje obligatorio prebiológico", tag: "Prevención de reactivaciones graves", kind: "alert", items: [
          { t: "Descarte riguroso de Tuberculosis latente", d: "Radiografía de tórax más PPD o ensayo IGRA",
            say: "Antes de prescribir cualquier agente biológico anti-TNF es mandatorio descartar tuberculosis latente mediante radiografía de tórax y prueba cutánea de tuberculina o IGRA, debido al riesgo letal de diseminación miliar tuberculosa." },
          { t: "Descarte de Hepatitis viral B, C y VIH", d: "Serología infecciosa completa obligatoria",
            say: "Se debe solicitar perfil serológico para virus de hepatitis B, hepatitis C y VIH, asegurando además la actualización del calendario de vacunación contra neumococo, influenza y herpes zóster previo a la inmunosupresión biológica." },
        ] },
      ],
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Diagnóstico diferencial: Espondilitis Anquilosante vs Artrosis vs Hiperostosis (DISH)",
      head: ["Patología", "Edad Habitual", "Tipo de Proliferación Ósea", "Articulaciones Sacroilíacas"],
      rows: [
        { cells: ["Espondilitis Anquilosante", "Varones jóvenes de 15 a 30 años", "Sindesmofitos finos y verticales en caña de bambú", "SACROILITIS OBLIGATORIA (bilateral simétrica)"],
          say: "Espondilitis anquilosante: hombres jóvenes, sindesmofitos finos verticales continuos y presencia obligatoria de sacroilitis bilateral en las imágenes." },
        { cells: ["Artrosis de Columna (Espondilosis)", "Mayores de 50 años", "Osteofitos gruesos marginales horizontales", "Sacroilíacas estrictamente normales"],
          say: "Artrosis de columna: adultos mayores con dolor mecánico, osteofitos horizontales y articulaciones sacroilíacas preservadas." },
        { cells: ["Hiperostosis Esquelética Difusa (DISH)", "Varones mayores de 60 años con diabetes", "Calcificación ligamentosa anterior en cera derretida", "Sacroilíacas estrictamente normales sin sacroilitis"],
          say: "Hiperostosis difusa o enfermedad de Forestier: mayores con diabetes, puentes ligamentosos gruesos en cera derretida y sacroilíacas normales sin inflamación." },
        { cells: ["Artritis Reumatoide", "Mujeres de 30 a 50 años", "Compromiso exclusivo de columna cervical C1-C2", "Sacroilíacas y columna lumbar respetadas"],
          say: "Artritis reumatoide: afecta solo la columna cervical con subluxación atloaxoidea, respetando completamente la columna lumbar y las sacroilíacas." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Hombre de 25 años consulta por dolor lumbar bajo y rigidez matinal de 90 minutos de 8 meses de evolución, que empeora tras descansar en cama y lo despierta de madrugada. Al examen físico el test de Schöber modificado muestra un aumento de solo 2 cm (de 10 a 12 cm a la flexión anterior forzada) y la expansión torácica es de 2.0 cm. La radiografía de pelvis muestra esclerosis subcondral bilateral simétrica con borramiento parcial del espacio articular en ambas sacroilíacas (sacroilitis bilateral grado 2). El factor reumatoide y los ANA son negativos.",
      question: "¿Cuál es el diagnóstico clínico definitivo y cuál es el tratamiento farmacológico de primera línea que debe indicarse de inmediato?",
      options: [
        { letter: "A", text: "Espondilitis Anquilosante; iniciar AINEs a dosis plenas continuas (ej. Naproxeno 500 mg cada 12 horas) y kinesioterapia de columna" },
        { letter: "B", text: "Artritis reumatoide seronegativa; iniciar Metotrexato 15 mg semanales más ácido fólico" },
        { letter: "C", text: "Lumbago mecánico postural; prescribir paracetamol a demanda y reposo en cama por dos semanas" },
        { letter: "D", text: "Espondilitis Anquilosante refractaria; iniciar Adalimumab subcutáneo sin ensayar AINEs" },
        { letter: "E", text: "Hernia discal lumbar bilateral; derivar a neurocirugía para laminectomía descompresiva urgente" },
      ],
      correct: "A",
      explanation: "El paciente cumple plenamente los Criterios de Nueva York modificados para Espondilitis Anquilosante: criterios clínicos (dolor lumbar inflamatorio crónico, test de Schöber patológico con aumento menor a 5 cm y expansión torácica reducida menor a 2.5 cm) sumado al criterio radiológico mandatorio de sacroilitis bilateral grado ≥ 2 en radiografía simple. El tratamiento farmacológico de primera línea son los AINEs a dosis plenas continuas junto a un programa de kinesioterapia de columna.",
      say: {
        stem: "Caso clínico. Paciente de veinticinco años con dolor lumbar inflamatorio crónico, rigidez matinal de noventa minutos, test de Schöber de dos centímetros, expansión torácica en dos centímetros y sacroilitis bilateral grado dos en radiografía de pelvis.",
        question: "¿Cuál es el diagnóstico clínico definitivo y cuál es el tratamiento farmacológico de primera línea que debe indicarse de inmediato?",
        options: "Las alternativas: espondilitis anquilosante con AINEs a dosis plenas y kinesioterapia, artritis reumatoide con metotrexato, lumbago mecánico con reposo, espondilitis con adalimumab sin ensayar AINEs, o hernia discal con neurocirugía. Piénsalo.",
        answer: "La respuesta correcta es la A. Cumple criterios de Nueva York modificados de espondilitis anquilosante por clínica y sacroilitis bilateral. El tratamiento de primera línea de elección son los AINEs a dosis plenas continuas asociados a ejercicios de rehabilitación.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2018 · Pregunta 22",
      stem: "Hombre de 24 años consulta por dolor lumbar de 6 meses de evolución que empeora con el reposo en cama y despierta al paciente en la madrugada, asociado a rigidez matinal de 2 horas. Al examen físico se realiza el Test de Schöber modificado: la distancia inicial de 10 cm entre las marcas de la columna lumbar aumenta únicamente a 12.5 cm a la flexión anterior forzada del tronco. ¿Cómo se interpreta este resultado semiológico?",
      options: [
        { letter: "A", text: "Test normal que descarta patología de columna lumbar" },
        { letter: "B", text: "Test patológico que indica limitación objetiva de la flexión de la columna lumbar" },
        { letter: "C", text: "Test patológico que indica hiperlaxitud ligamentosa de columna" },
        { letter: "D", text: "Test que indica hernia discal lumbar con radiculopatía L5 activa" },
        { letter: "E", text: "Test no válido que debe repetirse en posición sedente" },
      ],
      correct: "B",
      explanation: "En el Test de Schöber modificado, la distancia entre las dos marcas cutáneas lumbares debe incrementarse en al menos 5 cm (alcanzando ≥ 15 cm en total) durante la flexión anterior forzada. Un aumento de solo 2.5 cm (total 12.5 cm) es francamente patológico y demuestra rigidez y limitación objetiva de la movilidad lumbar, hallazgo cardinal en la espondilitis anquilosante.",
      say: {
        stem: "EUNACOM dos mil dieciocho, pregunta veintidós. Joven de veinticuatro años con dolor lumbar inflamatorio y rigidez matinal de dos horas. Al realizar el test de Schöber modificado, los diez centímetros lumbares aumentan solo a doce coma cinco centímetros.",
        question: "¿Cómo se interpreta este resultado semiológico en la exploración física?",
        options: "Las opciones: test normal, test patológico que indica limitación objetiva de la flexión lumbar, hiperlaxitud ligamentosa, hernia discal con radiculopatía activa, o test no válido que debe repetirse sentado. Piénsalo.",
        answer: "Es la B. El test de Schöber normal exige un incremento de al menos cinco centímetros. Un aumento de solo dos coma cinco centímetros traduce rigidez patológica con limitación severa de la flexión lumbar.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2020 · Pregunta 08",
      stem: "¿Cuál es la manifestación extraarticular más frecuente en los pacientes con Espondilitis Anquilosante?",
      options: [
        { letter: "A", text: "Insuficiencia aórtica severa" },
        { letter: "B", text: "Uveítis anterior aguda unilateral recurrente" },
        { letter: "C", text: "Fibrosis pulmonar bibasal reticular" },
        { letter: "D", text: "Amiloidosis renal con síndrome nefrótico" },
        { letter: "E", text: "Glomerulonefritis membranosa" },
      ],
      correct: "B",
      explanation: "La manifestación extraarticular más común de la Espondilitis Anquilosante es la Uveítis Anterior Aguda (iritis/iridociclitis), presente en el 25-30% de los pacientes. Es típicamente unilateral, de comienzo brusco, con dolor ocular, inyección ciliar, fotofobia y miosis, y recurre en el mismo ojo o en el contralateral sin secuelas si se trata precozmente con corticoides y midriáticos tópicos.",
      say: {
        stem: "EUNACOM dos mil veinte, pregunta ocho. Se evalúan complicaciones sistémicas extraarticulares en espondiloartritis.",
        question: "¿Cuál es la manifestación extraarticular más frecuente en los pacientes con espondilitis anquilosante?",
        options: "Las alternativas: insuficiencia aórtica severa, uveítis anterior aguda unilateral recurrente, fibrosis pulmonar bibasal, amiloidosis renal, o glomerulonefritis membranosa. Piénsalo.",
        answer: "La respuesta correcta es la B. La uveítis anterior aguda unilateral de comienzo brusco es la complicación extraarticular más frecuente, afectando a cerca del treinta por ciento de los pacientes a lo largo de su evolución.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2022 · Pregunta 33",
      stem: "Hombre de 30 años con diagnóstico confirmado de Espondilitis Anquilosante axial severa no presenta mejoría de sus síntomas ni de su rigidez tras 3 meses de tratamiento continuado con Naproxeno 500 mg cada 12 horas y posterior ensayo con Indometacina 75 mg cada 12 horas. Mantiene un índice de actividad BASDAI de 5.8. No tiene compromiso articular periférico. ¿Cuál es el tratamiento de segunda línea indicado para su compromiso axial?",
      options: [
        { letter: "A", text: "Iniciar Metotrexato 20 mg por semana oral con ácido fólico" },
        { letter: "B", text: "Iniciar Terapia Biológica con un inhibidor del TNF-alfa (ej. Adalimumab o Infliximab)" },
        { letter: "C", text: "Prescribir Prednisona 40 mg al día de forma permanente" },
        { letter: "D", text: "Indicar Sulfasalazina 3 gramos al día oral en monoterapia" },
        { letter: "E", text: "Hidroxicloroquina 400 mg al día más reposo absoluto" },
      ],
      correct: "B",
      explanation: "En la Espondilitis Anquilosante con compromiso axial puro refractario a AINEs a dosis plenas, los FARME convencionales sintéticos como Metotrexato o Sulfasalazina han demostrado ser totalmente ineficaces. La indicación formal de segunda línea según las guías internacionales y canasta GES es el inicio de Terapia Biológica con inhibidores del TNF-alfa (o inhibidores de IL-17), previo tamizaje de tuberculosis latente.",
      say: {
        stem: "EUNACOM dos mil veintidós, pregunta treinta y tres. Paciente de treinta años con espondilitis anquilosante axial activa que no responde a naproxeno ni a indometacina en dosis máximas.",
        question: "¿Cuál es el tratamiento de segunda línea indicado para su compromiso axial refractario a antiinflamatorios?",
        options: "Las opciones: iniciar metotrexato oral, iniciar terapia biológica con inhibidores del factor de necrosis tumoral alfa, prescribir prednisona oral permanente, indicar sulfasalazina en monoterapia, o hidroxicloroquina. Piénsalo.",
        answer: "Es la B. Recuerda la regla de oro: el metotrexato no sirve para el compromiso axial. Al fracasar dos AINEs a dosis plenas, la indicación de segunda línea es la terapia biológica anti-TNF como adalimumab o infliximab.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM 2024 · Pregunta 29",
      stem: "¿Cuál es el hallazgo radiológico cardinal en la columna vertebral que define la fase avanzada de anquilosis intersomática completa en la Espondilitis Anquilosante?",
      options: [
        { letter: "A", text: "Osteofitos marginales horizontales asimétricos" },
        { letter: "B", text: "Sindesmofitos óseos verticales delgados que fusionan cuerpos vertebrales en caña de bambú" },
        { letter: "C", text: "Aplastamientos vertebrales bicóncavos en pez" },
        { letter: "D", text: "Erosiones líticas expansivas en sacabocado" },
        { letter: "E", text: "Espondilolistesis ístmica bilateral L5-S1" },
      ],
      correct: "B",
      explanation: "En la espondilitis anquilosante avanzada, la osificación progresiva del anillo fibroso del disco intervertebral genera sindesmofitos óseos marginales delgados de orientación estrictamente vertical que unen los cuerpos vertebrales contiguos, produciendo la clásica imagen radiológica de \"columna en caña de bambú\" (bamboo spine). Los osteofitos de la artrosis son gruesos y horizontales.",
      say: {
        stem: "EUNACOM dos mil veinticuatro, pregunta veintinueve. Se indagan las características de la imagenología de columna avanzada.",
        question: "¿Cuál es el hallazgo radiológico cardinal en la columna vertebral que define la anquilosis intersomática completa en espondilitis anquilosante?",
        options: "Las alternativas: osteofitos horizontales, sindesmofitos óseos verticales delgados continuos en caña de bambú, aplastamientos vertebrales, erosiones en sacabocado, o espondilolistesis. Piénsalo.",
        answer: "La respuesta correcta es la B. Los sindesmofitos son calcificaciones verticales delgadas del anillo fibroso que unen los cuerpos vertebrales, creando la imagen patognomónica de columna en caña de bambú.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Diagnóstico clínico e imagenológico", tag: "Schöber y Sacroilitis bilateral", kind: "criteria", items: [
          { t: "Varón joven con rigidez de Schöber", d: "Menor a cinco centímetros y sacroilitis obligatoria",
            say: "Concluimos con las tres reglas de oro. Primero: la espondilitis anquilosante afecta a varones jóvenes y se diagnostica objetivando rigidez con test de Schöber menor a cinco centímetros y sacroilitis bilateral en radiografía de pelvis." },
          { t: "Uveítis anterior aguda unilateral", d: "Complicación extraarticular más frecuente en el examen",
            say: "Segundo: la manifestación extraarticular más frecuente es la uveítis anterior aguda unilateral recurrente, que debuta con dolor ocular, ojo rojo y fotofobia, requiriendo corticoides y midriáticos tópicos urgentes." },
        ] },
        { title: "Regla de oro farmacológica", tag: "AINEs primero y Anti-TNF en falla", kind: "pharma", items: [
          { t: "AINEs continuos y la regla del Metotrexato", d: "El metotrexato es ineficaz para la columna axial",
            say: "Tercero: los AINEs a dosis plenas son la primera línea indiscutida. Grábate a fuego que el metotrexato no tiene ninguna utilidad en la columna vertebral axial." },
          { t: "Terapia biológica anti-TNF con tamizaje de TBC", d: "Adalimumab o Infliximab tras fracaso de AINEs",
            say: "Si fracasan los AINEs, la segunda línea son los biológicos anti-TNF como adalimumab o infliximab, previo descarte riguroso de tuberculosis latente. Si te llevas una sola idea de hoy: dolor lumbar inflamatorio en joven con Schöber patológico exige radiografía de sacroilíacas; se trata con AINEs y jamás con metotrexato, escalando a anti-TNF si persiste activo. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo terapéutico: Espondilitis Anquilosante",
    root: N("start", "Sospecha de Espondilitis Anquilosante", "Varón joven con dolor lumbar inflamatorio y rigidez matinal",
      "Paciente joven que consulta por dolor lumbar crónico que lo despierta en la madrugada y mejora al caminar.",
      ["", N("q", "¿Examen físico con Test de Schöber patológico (<5 cm) o expansión torácica <2.5 cm?", "Evaluación de limitación motora axial",
        "Se cuantifica la movilidad de columna lumbar y caja torácica.",
        ["SÍ: Rigidez objetiva confirmada", N("do", "Solicitar Radiografía de Pelvis (Sacroilíacas) y VHS/PCR", "Confirmar sacroilitis según criterios de Nueva York modificados",
          "Se solicita radiografía de pelvis centrada en sacroilíacas.",
          ["", N("q", "¿Sacroilitis radiológica bilateral grado ≥ 2 o unilateral 3-4?", "Confirmación de criterio radiológico obligatorio",
            "Se verifica el criterio radiológico formal en la placa simple.",
            ["SÍ: Criterio radiológico cumplido", N("do", "Paso 1: Indicar AINEs a dosis plenas continuas y Kinesioterapia", "Naproxeno 500 mg cada 12h o Indometacina continua más ejercicios diarios de extensión",
              "Diagnóstico confirmado. Indicar AINEs a dosis plenas de mantención continua y programa kinésico postural activo.",
              ["", N("q", "¿Respuesta clínica insuficiente o intolerancia tras 2 AINEs diferentes a dosis plenas?", "Evaluación de refractariedad axial",
                "Se evalúa la persistencia de dolor y rigidez tras ocho a doce semanas de tratamiento.",
                ["SÍ: Refractariedad demostrada", N("alert", "Paso 2: Escalamiento a Terapia Biológica Anti-TNF", "REGLA DE ORO: Metotrexato NO sirve para columna. Solicitar PPD/Rx tórax e iniciar Anti-TNF",
                  "Falla a AINEs. El metotrexato está contraindicado por ineficacia axial. Descartar tuberculosis latente y prescribir inhibidores de TNF alfa.")],
                ["NO: Buena respuesta con control del dolor", N("ok", "Mantenimiento con AINEs en dosis mínima eficaz y seguimiento anual", "Mantener estilo de vida activo y vigilancia de manifestaciones extraarticulares (uveítis)",
                  "Enfermedad controlada. Mantener AINEs en la menor dosis requerida y control periódico por especialista.")])])],
            ["NO: Radiografía simple normal", N("refer", "Solicitar Resonancia Magnética de Sacroilíacas (STIR)", "Pesquisar edema óseo subcondral activo en fase pre-radiográfica",
              "Radiografía no concluyente. La resonancia magnética es indispensable para confirmar sacroilitis inflamatoria precoz.")])])],
        ["NO: Examen de columna completamente móvil", N("ok", "Reevaluar diagnóstico diferencial hacia causas mecánicas o extrarraquídeas", "Descartar sobrecarga postural, patología discal u osteoartritis",
          "Sin evidencia de espondiloartritis. Explorar etiologías mecánicas o musculares comunes.")])]),
  },
};
