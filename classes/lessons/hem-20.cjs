// Clase 8.20 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-20).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-20',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'JAK2, sangría y dacriocitos: la médula que produce de más o produce mal',
      say: 'Bienvenidos. Hoy vemos las neoplasias mieloproliferativas crónicas y la mielodisplasia. En la clase de leucemias crónicas ya conociste una de ellas, la leucemia mieloide crónica con su BCR-ABL. Hoy vemos a sus hermanas: la policitemia vera, la trombocitemia esencial y la mielofibrosis. Y al final, la mielodisplasia, que es casi lo contrario: una médula llena que produce mal. El examen pregunta tres cosas: el prurito tras la ducha caliente, la meta de hematocrito, y los dacriocitos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'JAK2: un receptor que no se apaga',
      nodes: [
        { id: 'mad', col: 0, row: 1, k: 'cause', t: 'Célula madre clonal', s: 'Neoplasia mieloproliferativa' },
        { id: 'jak', col: 1, row: 1, k: 'mech', t: 'Mutación JAK2 V617F', s: 'En más del 95% de las PV' },
        { id: 'rec', col: 2, row: 0, k: 'mech', t: 'Receptor de EPO siempre activo', s: 'Sin necesitar eritropoyetina' },
        { id: 'tri', col: 2, row: 2, k: 'effect', t: 'Proliferación trilineal', s: 'Rojos, blancos y plaquetas' },
        { id: 'hto', col: 3, row: 0, k: 'effect', t: 'Masa eritrocitaria alta', s: 'Hematocrito elevado' },
        { id: 'epo', col: 4, row: 0, k: 'good', t: 'EPO suprimida', s: 'Menor de 2–4 mIU/mL' },
        { id: 'vis', col: 3, row: 2, k: 'risk', t: 'Hiperviscosidad', s: 'Trombosis arterial y venosa' },
      ],
      edges: [
        { from: 'mad', to: 'jak' }, { from: 'jak', to: 'rec' }, { from: 'jak', to: 'tri' },
        { from: 'rec', to: 'hto' }, { from: 'hto', to: 'epo', label: 'retroalimentación' },
        { from: 'tri', to: 'vis' }, { from: 'hto', to: 'vis' },
      ],
      steps: [
        { show: ['mad'], note: 'Proliferación autónoma de series mieloides maduras',
          say: 'Partamos por el mecanismo. Las neoplasias mieloproliferativas son enfermedades clonales de la célula madre de la médula. A diferencia de la leucemia aguda, aquí las células maduran bien: el problema es que se producen de más, sin que nadie lo pida.' },
        { show: ['jak'], note: 'Valina por fenilalanina en el codón 617',
          say: 'En la policitemia vera, más del noventa y cinco por ciento de los pacientes tiene una mutación puntual en el gen JAK dos, la V seiscientos diecisiete F. JAK dos es la quinasa que transmite la señal del receptor de eritropoyetina.' },
        { show: ['rec', 'hto'], note: 'La señal sigue encendida sin la hormona',
          say: 'La mutación anula el freno de esa quinasa. Entonces el receptor de eritropoyetina queda enviando señal todo el tiempo, haya o no haya hormona. El resultado es una masa de glóbulos rojos que crece sin control.' },
        { show: ['epo'], note: 'La clave para separar primaria de secundaria',
          say: 'Y fíjate en esta consecuencia, porque es la que se pregunta. El riñón ve tantos glóbulos rojos que deja de fabricar eritropoyetina. En la policitemia vera, la eritropoyetina está suprimida, casi indetectable. Guarda este dato: es el que la separa de las poliglobulias secundarias.' },
        { show: ['tri', 'vis'], note: 'Principal causa de muerte: la trombosis',
          say: 'Como la mutación está en la célula madre, suben las tres series: glóbulos rojos, leucocitos y plaquetas. Eso se llama panmielosis. Y la sangre espesa enlentece el flujo y produce trombosis: infarto, accidente cerebrovascular, y trombosis en sitios raros, como la vena porta o las suprahepáticas, el síndrome de Budd-Chiari.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Policitemia vera: cómo se ve y cómo se confirma',
      cards: [
        { title: 'Cuadro clínico', tag: 'Hiperviscosidad', kind: 'key', items: [
          { t: 'Facies pletórica', d: 'Rubicundez facial y conjuntival',
            say: 'Veamos cómo llega el paciente. Lo primero que ves es la cara: rubicunda, con las conjuntivas rojas. Es la facies pletórica.' },
          { t: 'Cefalea, mareos, acúfenos', d: 'Y alteraciones visuales',
            say: 'La sangre espesa da síntomas neurológicos inespecíficos: cefalea, mareos, zumbidos en los oídos y alteraciones visuales.' },
          { t: 'Esplenomegalia palpable', d: 'En el 70% de los pacientes',
            say: 'Y en el examen, esplenomegalia palpable en el setenta por ciento. Eso ya te dice que no es una simple poliglobulia por hipoxia.' },
        ] },
        { title: 'Lo que se pregunta', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Prurito acuagénico', d: 'Minutos después de ducharse con agua caliente',
            say: 'Ahora el síntoma estrella. El prurito acuagénico: una picazón intensa, urente, que aparece minutos después de ducharse con agua caliente. Se produce por desgranulación de mastocitos y basófilos. Si lo lees en un caso, piensa en policitemia vera.' },
          { t: 'Eritromelalgia', d: 'Dolor urente y eritema en manos y pies',
            say: 'Y la eritromelalgia: dolor quemante con enrojecimiento de manos y pies, por la microcirculación que se tapa.' },
        ] },
        { title: 'Criterios OMS', tag: 'Diagnóstico', kind: 'criteria', items: [
          { t: 'Hb > 16,5 (H) · > 16 (M)', d: 'O Hto > 49% (H) · > 48% (M)',
            say: 'Los criterios mayores de la Organización Mundial de la Salud: hemoglobina sobre dieciséis coma cinco en hombres o dieciséis en mujeres, o hematocrito sobre cuarenta y nueve en hombres y cuarenta y ocho en mujeres.' },
          { t: 'JAK2 V617F + médula con panmielosis', d: 'EPO baja: criterio menor',
            say: 'Además, la biopsia de médula con panmielosis y la mutación JAK dos. La eritropoyetina baja es el criterio menor.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico diferencial',
      title: 'Hematocrito alto: ¿primaria o secundaria?',
      nodes: [
        { id: 'hto', col: 0, row: 1, k: 'start', t: 'Hematocrito elevado', s: '> 49% hombre · > 48% mujer' },
        { id: 'rel', col: 1, row: 0, k: 'trap', t: 'Policitemia relativa', s: 'Deshidratación: descartar' },
        { id: 'lab', col: 2, row: 1, k: 'q', t: 'EPO sérica + JAK2', s: '¿Clonal o reactiva?' },
        { id: 'pv', col: 3, row: 0, k: 'alert', t: 'Policitemia vera', s: 'EPO baja · JAK2 positivo' },
        { id: 'sec', col: 3, row: 2, k: 'refer', t: 'Poliglobulia secundaria', s: 'EPO alta · JAK2 negativo' },
        { id: 'cau', col: 4, row: 2, k: 'cause', t: 'Hipoxia o tumor', s: 'EPOC, apnea, tabaco, altura, cáncer renal' },
      ],
      edges: [
        { from: 'hto', to: 'rel', label: 'primero' }, { from: 'hto', to: 'lab' },
        { from: 'lab', to: 'pv', label: 'EPO baja' }, { from: 'lab', to: 'sec', label: 'EPO alta' },
        { from: 'sec', to: 'cau' },
      ],
      steps: [
        { show: ['hto', 'rel'], note: 'Primero, que no sea solo falta de plasma',
          say: 'Esta es la diferencia que más se pregunta. Ante un hematocrito alto, lo primero es descartar la policitemia relativa: un paciente deshidratado concentra la sangre, pero su masa de glóbulos rojos es normal.' },
        { show: ['lab'], note: 'Dos exámenes que separan todo',
          say: 'Si la poliglobulia es real, pides dos exámenes: la eritropoyetina sérica y la mutación JAK dos. Con eso separas una médula que produce sola de una médula que responde a un estímulo.' },
        { show: ['pv'], note: 'La médula no necesita la hormona',
          say: 'Eritropoyetina baja y JAK dos positivo: policitemia vera. Y suele venir acompañada de leucocitosis, trombocitosis, esplenomegalia y prurito acuagénico.' },
        { show: ['sec', 'cau'], note: 'La médula responde a la hipoxia',
          say: 'En cambio, eritropoyetina alta y JAK dos negativo: poliglobulia secundaria. Aquí el riñón pide más glóbulos rojos porque hay hipoxia crónica, como en la EPOC, la apnea del sueño, el tabaquismo o la altura, o porque un tumor, como el carcinoma renal, secreta eritropoyetina. Los leucocitos y las plaquetas son normales, y no hay esplenomegalia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Policitemia vera: meta de hematocrito menor de 45%',
      cards: [
        { title: 'Todos los pacientes', tag: 'Base del tratamiento', kind: 'pharma', items: [
          { t: 'Flebotomías: meta Hto < 45%', d: '400–500 mL, 1 a 2 veces por semana al inicio',
            say: 'Pasemos al tratamiento, y aquí hay un número que tienes que saber. La meta es un hematocrito menor de cuarenta y cinco por ciento, en hombres y en mujeres. Eso reduce drásticamente las trombosis. Se logra con sangrías, o flebotomías: se extraen cuatrocientos a quinientos mililitros, una a dos veces por semana al inicio.' },
          { t: 'Aspirina 100 mg/día', d: 'Asociada a las sangrías',
            say: 'Y se asocia aspirina en dosis bajas, cien miligramos al día. Sangría más aspirina: esa es la respuesta en la policitemia vera de bajo riesgo.' },
        ] },
        { title: 'Alto riesgo', tag: 'Citorreducción', kind: 'alert', items: [
          { t: 'Mayor de 60 o trombosis previa', d: 'Se agrega hidroxiurea',
            say: 'Si el paciente es de alto riesgo, es decir, mayor de sesenta años o con una trombosis previa, se agrega un citorreductor: la hidroxiurea.' },
        ] },
        { title: 'Poliglobulia secundaria', tag: 'Otra conducta', kind: 'normal', items: [
          { t: 'Tratar la causa', d: 'Oxígeno, dejar el tabaco',
            say: 'Y ojo con no mezclar las conductas. En la poliglobulia secundaria no se trata la médula, se trata la hipoxemia de base: oxígeno si corresponde y dejar de fumar.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Trombocitemia esencial',
      title: 'Plaquetas altas que sangran y trombosan',
      cards: [
        { title: 'Definición', tag: 'Trombocitosis clonal', kind: 'criteria', items: [
          { t: 'Plaquetas > 450.000/µL sostenidas', d: 'A menudo > 1.000.000/µL',
            say: 'Ahora la segunda neoplasia mieloproliferativa, la trombocitemia esencial. Aquí la serie que se dispara son las plaquetas: una trombocitosis clonal persistente sobre cuatrocientas cincuenta mil, y muchas veces sobre un millón.' },
          { t: 'JAK2 60% · CALR 25% · MPL 5%', d: 'No todas tienen JAK2',
            say: 'Las mutaciones son distintas a la policitemia: JAK dos en el sesenta por ciento, calreticulina en el veinticinco y MPL en el cinco. Fíjate que un JAK dos negativo no la descarta.' },
        ] },
        { title: 'La paradoja', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Sangrado paradójico', d: 'Consumo de multímeros de von Willebrand',
            say: 'Y lo curioso: con tantas plaquetas, el paciente puede sangrar. ¿Por qué? Porque las plaquetas en exceso consumen los multímeros grandes del factor de von Willebrand, que vimos en las coagulopatías congénitas.' },
          { t: 'O trombosis microvascular', d: 'Ambas complicaciones son posibles',
            say: 'Y también puede hacer trombosis de vasos pequeños. Sangrado o trombosis: las dos son posibles en la misma enfermedad.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Mielofibrosis primaria',
      title: 'Una médula cicatrizada que obliga a emigrar',
      nodes: [
        { id: 'meg', col: 0, row: 1, k: 'cause', t: 'Megacariocitos atípicos', s: 'Clonales' },
        { id: 'fac', col: 1, row: 1, k: 'mech', t: 'Liberan PDGF y TGF-beta', s: 'Activan fibroblastos' },
        { id: 'fib', col: 2, row: 1, k: 'mech', t: 'Fibrosis medular', s: 'Colágeno y reticulina' },
        { id: 'dac', col: 3, row: 0, k: 'effect', t: 'Dacriocitos', s: 'Leucoeritroblastosis' },
        { id: 'bzo', col: 3, row: 1, k: 'effect', t: 'Esplenomegalia masiva', s: 'Hematopoyesis extramedular' },
        { id: 'sec', col: 3, row: 2, k: 'effect', t: 'Aspirado "seco"', s: 'Dry tap' },
        { id: 'bio', col: 4, row: 2, k: 'good', t: 'Biopsia ósea', s: 'Obligatoria' },
      ],
      edges: [
        { from: 'meg', to: 'fac' }, { from: 'fac', to: 'fib' },
        { from: 'fib', to: 'dac' }, { from: 'fib', to: 'bzo' }, { from: 'fib', to: 'sec' },
        { from: 'sec', to: 'bio' },
      ],
      steps: [
        { show: ['meg', 'fac'], note: 'La más agresiva de las mieloproliferativas',
          say: 'La tercera es la mielofibrosis primaria, la más agresiva del grupo. Todo parte de megacariocitos atípicos que liberan factores de crecimiento, el derivado de plaquetas y el transformante beta. Esos factores encienden a los fibroblastos de la médula.' },
        { show: ['fib'], note: 'La médula queda cicatrizada',
          say: 'Los fibroblastos depositan colágeno y reticulina, y la médula queda cicatrizada, sin función. Desde ahí sale la tríada que se pregunta.' },
        { show: ['bzo'], note: 'El bazo puede llegar a la fosa ilíaca derecha',
          say: 'Primero, la hematopoyesis tiene que emigrar a otro lugar: al bazo y al hígado. Eso es la metaplasia mieloide extramedular, y da una esplenomegalia masiva, que puede llegar hasta la fosa ilíaca derecha.' },
        { show: ['dac'], note: 'Glóbulos rojos en forma de lágrima',
          say: 'Segundo, el frotis. Los glóbulos rojos se deforman al pasar exprimidos por la fibrosis y salen con forma de gota o lágrima: los dacriocitos. Y aparecen células inmaduras en la sangre, la leucoeritroblastosis. Dacriocitos es la palabra que te tiene que hacer pensar en mielofibrosis.' },
        { show: ['sec', 'bio'], note: 'Sin material, se necesita biopsia',
          say: 'Y tercero, cuando intentas aspirar la médula, no sale nada. Es la punción seca, o dry tap. Por eso la biopsia ósea es obligatoria para el diagnóstico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Síndromes mielodisplásicos',
      title: 'La médula llena que produce mal',
      cards: [
        { title: 'Mecanismo', tag: 'Hematopoyesis ineficaz', kind: 'key', items: [
          { t: 'Médula hipercelular pero defectuosa', d: 'Las células mueren dentro de la médula',
            say: 'Cerremos el cuerpo con los síndromes mielodisplásicos. Aquí la lógica se invierte. La médula está llena, hipercelular, pero produce células defectuosas, displásicas, que mueren por apoptosis antes de salir. Eso es la hematopoyesis ineficaz.' },
          { t: 'Adulto mayor', d: 'Neoplasia clonal',
            say: 'Es una neoplasia clonal del adulto mayor. Y ahí está la paradoja que tienes que recordar: médula llena, sangre vacía.' },
        ] },
        { title: 'Sangre periférica', tag: 'Lo que ves', kind: 'criteria', items: [
          { t: 'Pancitopenia con macrocitosis', d: 'Citopenias refractarias',
            say: 'En la sangre ves pancitopenia con macrocitosis, citopenias que no responden a los tratamientos habituales.' },
          { t: 'Neutrófilos hipogranulares', d: 'Anomalía de Pelger-Huët',
            say: 'Y los neutrófilos salen con pocos gránulos y con el núcleo en dos lóbulos, la anomalía de Pelger-Huët.' },
        ] },
        { title: 'Pronóstico', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Riesgo de leucemia mieloide aguda', d: 'Derivar a hematología',
            say: 'El gran riesgo es la transformación a leucemia mieloide aguda. Por eso se deriva a hematología. Pero ojo: una pancitopenia macrocítica en un anciano tiene una causa mucho más frecuente y reversible, el déficit de vitamina B doce. La pregunta real que viene va justamente de eso.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, partiendo del hemograma alterado.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Respuesta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Hto alto + prurito tras ducha + esplenomegalia', 'Policitemia vera: EPO y JAK2', 'Poliglobulia por hipoxemia'],
          say: 'Repasemos las trampas. Hematocrito alto con prurito tras la ducha y esplenomegalia: policitemia vera. Pides eritropoyetina y JAK dos. No la confundas con una poliglobulia por hipoxemia, que no da bazo ni prurito.' },
        { cells: ['Fumador o EPOC con Hto alto', 'EPO alta, JAK2 negativo: tratar la causa', 'Flebotomías de entrada'],
          say: 'Fumador o paciente con EPOC y hematocrito alto: eritropoyetina alta y JAK dos negativo. Se trata la causa. Sangrar como si fuera policitemia vera es el error.' },
        { cells: ['PV de bajo riesgo', 'Sangrías (Hto < 45%) + aspirina', 'Quimioterapia o anticoagulación oral'],
          say: 'Policitemia vera de bajo riesgo: sangrías hasta un hematocrito menor de cuarenta y cinco, más aspirina. La quimioterapia o la anticoagulación oral son distractores.' },
        { cells: ['PV mayor de 60 o con trombosis previa', 'Agregar hidroxiurea', 'Solo sangrías'],
          say: 'Si es mayor de sesenta o ya tuvo una trombosis, es de alto riesgo, y se agrega hidroxiurea.' },
        { cells: ['Bazo gigante + dacriocitos + aspirado seco', 'Mielofibrosis: biopsia ósea', 'Repetir el mielograma'],
          say: 'Bazo gigante, dacriocitos y aspirado seco: mielofibrosis primaria, y se confirma con biopsia ósea. Repetir el aspirado no sirve, porque va a volver a salir seco.' },
        { cells: ['Anciano con pancitopenia macrocítica', 'Descartar primero déficit de B12', 'Diagnosticar mielodisplasia de entrada'],
          say: 'Y anciano con pancitopenia macrocítica: antes de hablar de mielodisplasia, descarta el déficit de vitamina B doce, que es mucho más frecuente y se corrige.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 56 años, no fumador, sin patología pulmonar, consulta por prurito urente intenso en brazos y tórax que aparece 10 minutos después de ducharse con agua caliente, cefalea y mareos. Rubicundez facial y conjuntival; bazo palpable a 3 cm bajo el reborde costal. Hb 18,9 g/dL, Hto 56%, leucocitos 13.400/µL, plaquetas 490.000/µL. SatO2 98%, PaO2 92 mmHg.',
      question: '¿Cuál es el diagnóstico más probable y el estudio que corresponde?',
      options: [
        { letter: 'A', text: 'Poliglobulia secundaria; solicitar espirometría y polisomnografía' },
        { letter: 'B', text: 'Policitemia vera; solicitar eritropoyetina sérica y mutación JAK2 V617F' },
        { letter: 'C', text: 'Trombocitemia esencial; solicitar mutación de calreticulina' },
        { letter: 'D', text: 'Policitemia relativa; hidratar y repetir el hemograma' },
        { letter: 'E', text: 'Mielofibrosis primaria; solicitar biopsia de médula ósea' },
      ],
      correct: 'B',
      explanation: 'Eritrocitosis absoluta con panmielosis (leucocitosis y trombocitosis), esplenomegalia, prurito acuagénico y facies pletórica, con oxigenación normal: policitemia vera. Se confirma con EPO sérica (suprimida) y mutación JAK2 V617F. Se inician flebotomías hasta Hto < 45% más aspirina 100 mg/día.',
      say: {
        stem: 'Vamos con un caso. Hombre de cincuenta y seis años, no fumador y sin enfermedad pulmonar. Tiene un prurito intenso que aparece diez minutos después de ducharse con agua caliente, además de cefalea y mareos. Está rubicundo y tiene el bazo palpable. Hemoglobina dieciocho coma nueve, hematocrito cincuenta y seis, leucocitos trece mil cuatrocientos y plaquetas cuatrocientas noventa mil. Su saturación es de noventa y ocho por ciento.',
        question: '¿Cuál es el diagnóstico más probable y el estudio que corresponde?',
        options: 'Tienes cinco opciones. Poliglobulia secundaria, con espirometría y polisomnografía. Policitemia vera, con eritropoyetina y JAK dos. Trombocitemia esencial, con calreticulina. Policitemia relativa, hidratar y repetir. O mielofibrosis, con biopsia de médula. Piénsalo.',
        answer: 'La respuesta es la B. Suben las tres series, hay bazo, facies pletórica y prurito tras la ducha caliente: es una policitemia vera. Se confirma con eritropoyetina baja y JAK dos positivo, y se inician sangrías más aspirina. El distractor tentador es la poliglobulia secundaria, pero el paciente no fuma, oxigena normal, y la hipoxia no da bazo ni prurito ni sube las plaquetas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 9',
      stem: 'Un paciente de 54 años, presenta un cuadro de varias semanas de evolución de astenia, adinamia y disnea que aparecen a los grandes esfuerzos. Al examen físico se aprecia palidez de piel y mucosas, se palpa el hígado 6 cm bajo el reborde costal derecho y el bazo se palpa 10 cm bajo el reborde costal izquierdo. Se solicita un hemograma que muestra hematocrito de 29% con hemoglobina de 9,6 g/dL, blancos 4.200/mm3, plaquetas 111.000/mm3 y al frotis se aprecia macrocitosis y abundantes dacriocitos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Mieloptisis' },
        { letter: 'B', text: 'Mieloma multiple' },
        { letter: 'C', text: 'Leucemia mieloide crónica' },
        { letter: 'D', text: 'Mielodisplasia' },
        { letter: 'E', text: 'Mielofibrosis primaria' },
      ],
      correct: 'E',
      explanation: 'Hepatoesplenomegalia marcada (bazo a 10 cm) por hematopoyesis extramedular, citopenias y abundantes dacriocitos en el frotis: mielofibrosis primaria. La mielofibrosis es, en rigor, una forma de mieloptisis (ocupación medular), pero la respuesta más específica es la E.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil diecisiete. Paciente de cincuenta y cuatro años con semanas de astenia y disnea de grandes esfuerzos. Está pálido, el hígado se palpa a seis centímetros y el bazo a diez centímetros bajo el reborde costal. Hemoglobina nueve coma seis, blancos y plaquetas algo bajos, y en el frotis, macrocitosis y abundantes dacriocitos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: mieloptisis, mieloma múltiple, leucemia mieloide crónica, mielodisplasia, o mielofibrosis primaria. Piénsalo.',
        answer: 'Es la E, mielofibrosis primaria. Bazo gigante por hematopoyesis extramedular, citopenias y dacriocitos: la tríada de la clase. El distractor más tentador es la mieloptisis, y con razón, porque toda mielofibrosis es en rigor una ocupación de la médula. Pero cuando el examen te da dacriocitos con un bazo enorme, la respuesta más específica es mielofibrosis. Y la leucemia mieloide crónica tiene leucocitosis, no leucopenia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 138',
      stem: 'Un paciente de 80 años presenta astenia, bradipsiquia, confusión y disnea de mínimos esfuerzos. Al examen físico se aprecia pálido, con FC: 115x, PA: 120/80 mmHg. Se realiza un hemograma, que muestra anemia con hemoglobina: 5,9 g/dl, HCM: 34 pg, VCM: 117 fl, blancos: 3.100 por mm3, plaquetas: 57.000 por mm3 y, además, destaca LDH: 890 UI/L.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Anemia aplástica' },
        { letter: 'B', text: 'Anemia hemolítica' },
        { letter: 'C', text: 'Anemia megalobástica' },
        { letter: 'D', text: 'Mielodisplasia' },
        { letter: 'E', text: 'Mieloma múltiple' },
      ],
      correct: 'C',
      explanation: 'Pancitopenia con VCM muy elevado (117 fL), LDH alta por eritropoyesis ineficaz y compromiso neurológico (bradipsiquia, confusión): anemia megaloblástica por déficit de B12. La mielodisplasia también da pancitopenia macrocítica en ancianos, pero el compromiso neurológico y la LDH desproporcionada apuntan al déficit de B12, que es más frecuente y reversible.',
      say: {
        stem: 'La segunda es del EUNACOM de julio de dos mil diecinueve. Paciente de ochenta años con astenia, bradipsiquia, confusión y disnea de mínimos esfuerzos. Está pálido y taquicárdico. Hemoglobina cinco coma nueve, VCM ciento diecisiete, blancos tres mil cien, plaquetas cincuenta y siete mil, y una LDH de ochocientos noventa.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: anemia aplástica, anemia hemolítica, anemia megaloblástica, mielodisplasia, o mieloma múltiple. Piénsalo.',
        answer: 'Es la C, anemia megaloblástica. Pancitopenia con un VCM muy alto, LDH elevada por la eritropoyesis ineficaz, y compromiso neurológico: es el déficit de vitamina B doce que vimos en la clase de anemias macrocíticas. La mielodisplasia es el distractor tentador, porque también es un anciano con pancitopenia macrocítica. Pero la confusión y la LDH alta apuntan a la B doce, que es más frecuente y se corrige.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Policitemia vera', tag: 'JAK2', kind: 'key', items: [
          { t: 'Prurito tras ducha caliente + bazo', d: 'Facies pletórica y panmielosis',
            say: 'Cerremos con las reglas de oro. Hematocrito alto con prurito tras la ducha caliente, facies pletórica y bazo: policitemia vera.' },
          { t: 'EPO baja + JAK2 positivo', d: 'Secundaria: EPO alta, JAK2 negativo',
            say: 'Eritropoyetina baja y JAK dos positivo es primaria. Eritropoyetina alta y JAK dos negativo es secundaria, y se trata la causa.' },
          { t: 'Sangrías hasta Hto < 45% + aspirina', d: 'Hidroxiurea si > 60 años o trombosis',
            say: 'Sangrías hasta un hematocrito menor de cuarenta y cinco, más aspirina. Y si es mayor de sesenta o tuvo una trombosis, se agrega hidroxiurea.' },
        ] },
        { title: 'Las otras', tag: 'Palabras clave', kind: 'alert', items: [
          { t: 'TE: plaquetas > 450.000', d: 'Sangra o trombosa',
            say: 'Trombocitemia esencial: plaquetas sobre cuatrocientas cincuenta mil, que pueden sangrar o trombosar.' },
          { t: 'MF: bazo gigante + dacriocitos', d: 'Aspirado seco: biopsia ósea',
            say: 'Mielofibrosis: bazo gigante, dacriocitos y aspirado seco, y se confirma con biopsia ósea.' },
          { t: 'SMD: médula llena, sangre vacía', d: 'Riesgo de LMA · descartar B12',
            say: 'Si te llevas una sola idea de hoy: en la policitemia vera, la eritropoyetina baja y la meta es un hematocrito menor de cuarenta y cinco; y en la mielofibrosis, la palabra clave es dacriocito. En la próxima clase pasamos a las urgencias oncológicas, empezando por la neutropenia febril. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Neoplasias mieloproliferativas: qué serie está alterada',
    root: N('start', 'Hemograma alterado en el adulto', 'Serie alta o citopenias',
      'Adulto con un hemograma alterado. La primera pregunta es qué serie está alterada, y hacia dónde.',
      ['', N('q', '¿Qué serie está alterada?', 'Rojos, plaquetas o citopenias',
        'Mira el hemograma y el examen físico. ¿Qué serie manda?',
        ['Hto alto', N('q', '¿EPO y JAK2?', 'Descartada la deshidratación',
          'Si el hematocrito está alto, descarta primero la deshidratación, y luego pide eritropoyetina y JAK dos.',
          ['EPO alta', N('do', 'Poliglobulia secundaria', 'Tratar hipoxemia, dejar el tabaco',
            'Eritropoyetina alta y JAK dos negativo es una poliglobulia secundaria. Se trata la causa: la hipoxemia, el tabaco, o un tumor secretor.')],
          ['EPO baja', N('alert', 'Policitemia vera', 'Sangrías (Hto < 45%) + aspirina',
            'Eritropoyetina baja y JAK dos positivo es policitemia vera. Sangrías hasta un hematocrito menor de cuarenta y cinco y aspirina, más hidroxiurea si es de alto riesgo, y derivación a hematología.')])],
        ['Plaquetas', N('refer', 'Trombocitemia esencial', 'Plaquetas > 450.000 sostenidas',
          'Si lo que sube son las plaquetas, sobre cuatrocientas cincuenta mil en forma sostenida, piensa en trombocitemia esencial y deriva a hematología.')],
        ['Bazo gigante', N('refer', 'Mielofibrosis primaria', 'Dacriocitos · biopsia ósea',
          'Si hay esplenomegalia masiva con dacriocitos y el aspirado sale seco, es una mielofibrosis primaria. Se confirma con biopsia ósea.')],
        ['Citopenias', N('refer', 'Sospecha de mielodisplasia', 'Descartar B12 · derivar',
          'Si hay pancitopenia macrocítica en un adulto mayor, descarta primero el déficit de vitamina B doce. Si persiste, sospecha mielodisplasia y deriva a hematología.')])]),
  },
};
