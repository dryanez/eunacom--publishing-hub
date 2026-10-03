// Clase 4.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-14).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-14',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Qué ve la biopsia, a quién le pasa y cómo responde a los corticoides',
      say: 'Bienvenidos. En la clase anterior dijimos que en el adulto con síndrome nefrótico la causa la dice la biopsia. Hoy vemos qué encuentra esa biopsia: las tres glomerulopatías primarias del adulto, membranosa, cambios mínimos y focal y segmentaria. Se diferencian por tres cosas: quién es el paciente, qué se ve al microscopio y cómo responden a los corticoides.',
    },

    {
      type: 'flow',
      kicker: 'Histología',
      title: 'Tres imágenes distintas en la biopsia',
      nodes: [
        { id: 'bio', col: 0, row: 2, k: 'start', t: 'Biopsia renal', s: 'Adulto con nefrótico primario' },
        { id: 'mo', col: 1, row: 2, k: 'q', t: '¿Qué muestra la óptica?', s: 'Microscopía de luz' },
        { id: 'mem', col: 2, row: 0, k: 'effect', t: 'MBG engrosada con spikes', s: 'IgG y C3 granular subepitelial' },
        { id: 'mnm', col: 2, row: 2, k: 'effect', t: 'Óptica normal', s: 'Borramiento de pedicelos en la electrónica' },
        { id: 'gef', col: 2, row: 4, k: 'effect', t: 'Esclerosis en parte de algunos glomérulos', s: 'Con sinequias capsulares' },
        { id: 'dmem', col: 3, row: 0, k: 'risk', t: 'Nefropatía membranosa', s: 'Spikes = membranosa' },
        { id: 'dmin', col: 3, row: 2, k: 'good', t: 'Cambios mínimos', s: 'Solo lo ve la electrónica' },
        { id: 'dgef', col: 3, row: 4, k: 'alert', t: 'Focal y segmentaria', s: 'GEFS' },
      ],
      edges: [
        { from: 'bio', to: 'mo' },
        { from: 'mo', to: 'mem' }, { from: 'mo', to: 'mnm' }, { from: 'mo', to: 'gef' },
        { from: 'mem', to: 'dmem' }, { from: 'mnm', to: 'dmin' }, { from: 'gef', to: 'dgef' },
      ],
      steps: [
        { show: ['bio', 'mo'], note: 'Tres enfermedades del podocito, tres imágenes',
          say: 'Partamos por la biopsia, porque es donde estas tres enfermedades se separan. Las tres dañan la barrera de filtración y dan un nefrótico, pero al microscopio se ven completamente distintas.' },
        { show: ['mem', 'dmem'], note: 'Espículas con la tinción de plata',
          say: 'En la membranosa, la membrana basal está engrosada de forma difusa, y con la tinción de plata se ven unas proyecciones como púas, las espículas o spikes. En la inmunofluorescencia hay depósitos granulares de inmunoglobulina G y C tres por debajo del podocito. Spikes es igual a membranosa.' },
        { show: ['mnm', 'dmin'], note: 'Se llama así porque la óptica no ve nada',
          say: 'En cambios mínimos, el nombre lo dice todo: al microscopio de luz la biopsia es normal. Solo la microscopía electrónica muestra el daño, un borramiento difuso de los pedicelos de los podocitos.' },
        { show: ['gef', 'dgef'], note: 'Focal: algunos glomérulos. Segmentaria: una parte de cada uno',
          say: 'Y en la focal y segmentaria, el nombre también es la definición. Focal, porque afecta solo algunos glomérulos; segmentaria, porque en cada uno daña solo una porción del ovillo, que se esclerosa y se pega a la cápsula.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Nefropatía membranosa',
      title: 'La causa número uno del adulto mayor',
      cards: [
        { title: 'Quién', tag: 'Epidemiología', kind: 'key', items: [
          { t: 'Adulto mayor de 50 años', d: '30–40 % de los nefróticos primarios',
            say: 'Vamos una por una, partiendo por la más preguntada. La nefropatía membranosa es la causa más frecuente de síndrome nefrótico primario en el adulto mayor de cincuenta años: treinta a cuarenta por ciento de los casos.' },
          { t: 'Nefrótico puro', d: 'Sin hematuria significativa ni HTA precoz',
            say: 'Clínicamente es un nefrótico típicamente puro: sin hematuria importante y sin hipertensión al comienzo. Si en una pregunta ves un paciente de sesenta años con proteinuria masiva y sedimento tranquilo, la respuesta es membranosa.' },
        ] },
        { title: 'Por qué', tag: 'Autoinmune', kind: 'criteria', items: [
          { t: 'Anticuerpos anti-PLA2R', d: 'Positivos en 70–80 % de las primarias',
            say: 'Es una enfermedad autoinmune: en el setenta a ochenta por ciento de los casos primarios hay anticuerpos contra el receptor de fosfolipasa A dos, los anti PLA dos R. Su presencia en sangre certifica que la membranosa es primaria.' },
        ] },
        { title: 'Qué complica', tag: 'Conexión con la clase anterior', kind: 'alert', items: [
          { t: 'La que más trombosa', d: 'Trombosis de vena renal',
            say: 'Y conecta con la clase anterior: la membranosa es la glomerulopatía con más trombosis, en especial de la vena renal. Por eso el corte de albúmina para anticoagular se aplica sobre todo a ella.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: 'Membranosa: siempre buscar una causa secundaria',
      nodes: [
        { id: 'dx', col: 0, row: 2, k: 'start', t: 'Biopsia: membranosa', s: 'Adulto mayor' },
        { id: 'pla', col: 1, row: 2, k: 'q', t: '¿Anti-PLA2R?', s: 'En sangre' },
        { id: 'pri', col: 2, row: 1, k: 'good', t: 'Positivo: primaria', s: 'Origen autoinmune' },
        { id: 'sec', col: 2, row: 3, k: 'risk', t: 'Negativo: sospechar secundaria', s: 'Sube mucho la probabilidad' },
        { id: 'cau', col: 3, row: 3, k: 'cause', t: 'Cáncer sólido oculto', s: 'Colon, pulmón, mama · VHB · AINE · lupus V' },
        { id: 'bus', col: 4, row: 2, k: 'refer', t: 'Tamizaje activo', s: 'Colonoscopía, imagen de tórax, VHB' },
        { id: 'tx', col: 3, row: 1, k: 'mech', t: 'Tratamiento', s: 'Rituximab o ciclosporina' },
      ],
      edges: [
        { from: 'dx', to: 'pla' }, { from: 'pla', to: 'pri', label: '+' }, { from: 'pla', to: 'sec', label: '−' },
        { from: 'sec', to: 'cau' }, { from: 'cau', to: 'bus' }, { from: 'pri', to: 'bus', label: 'igual se busca' },
        { from: 'pri', to: 'tx' },
      ],
      steps: [
        { show: ['dx', 'pla'], note: 'Diagnosticada la membranosa, la pregunta es: ¿primaria o secundaria?',
          say: 'Ahora, lo que más se pregunta de la membranosa no es la histología, es lo que viene después. Una vez que la biopsia dice membranosa, tienes que preguntarte si es primaria o secundaria. Y el primer dato es el anti PLA dos R.' },
        { show: ['pri'], note: 'Anti-PLA2R positivo: autoinmune primaria',
          say: 'Si es positivo, apoya el origen primario, autoinmune.' },
        { show: ['sec'], note: 'Negativo en mayor de 50: alerta',
          say: 'Si es negativo, sobre todo en un adulto mayor de cincuenta años, la sospecha de una membranosa secundaria sube mucho.' },
        { show: ['cau'], note: 'Paraneoplásica, la causa secundaria clave',
          say: '¿Secundaria a qué? La causa que tienes que tener en la cabeza es un cáncer sólido oculto: colon, pulmón o mama. Además, la hepatitis B, los antiinflamatorios y el lupus, en su clase cinco.' },
        { show: ['bus'], note: 'En todo adulto con membranosa',
          say: 'Por eso, en todo adulto con membranosa se hace un tamizaje activo: colonoscopía, radiografía o TAC de tórax, y serología de hepatitis B. Si en la pregunta te dicen membranosa y te preguntan qué sigue, la respuesta es buscar el cáncer.' },
        { show: ['tx'], note: 'Inmunosupresión compleja',
          say: 'Y la membranosa primaria no responde a los corticoides solos: requiere una inmunosupresión más compleja, con rituximab o ciclosporina.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cambios mínimos',
      title: 'Cambios mínimos: la del niño, la que responde',
      cards: [
        { title: 'Quién', tag: 'Epidemiología', kind: 'key', items: [
          { t: '90 % de los nefróticos del niño', d: 'Solo 10 % en adultos',
            say: 'La segunda es la enfermedad por cambios mínimos. Es la causa del noventa por ciento de los nefróticos en niños, y por eso en ellos no se biopsia. En el adulto, en cambio, es solo alrededor del diez por ciento.' },
          { t: 'Proteinuria selectiva', d: 'Óptica normal, pedicelos borrados',
            say: 'Da una proteinuria selectiva, casi pura de albúmina, con la óptica normal y el borramiento de pedicelos que ya vimos.' },
        ] },
        { title: 'Asociaciones del adulto', tag: 'Se pregunta', kind: 'alert', items: [
          { t: 'Linfoma de Hodgkin', d: 'La asociación clásica',
            say: 'En el adulto tiene dos asociaciones que tienes que recordar. La clásica es el linfoma de Hodgkin.' },
          { t: 'AINE', d: 'También en la membranosa',
            say: 'La otra son los antiinflamatorios no esteroidales, que también aparecen en la membranosa. Así que ante un nefrótico, siempre pregunta por AINE.' },
        ] },
        { title: 'Tratamiento', tag: 'Respuesta excelente', kind: 'pharma', items: [
          { t: 'Prednisona 1 mg/kg/día', d: 'Más de 80 % de remisión, rápida',
            say: 'Y su gran característica es la respuesta a los corticoides: prednisona oral a dosis plenas, un miligramo por kilo al día, con más del ochenta por ciento de remisión, y rápida. Es la glomerulopatía que mejor responde.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Glomeruloesclerosis focal y segmentaria',
      title: 'GEFS: la agresiva, la que no responde',
      cards: [
        { title: 'Quién', tag: 'Epidemiología', kind: 'key', items: [
          { t: 'Adulto joven, afrodescendiente', d: 'Mutaciones podocitarias, APOL1',
            say: 'La tercera es la glomeruloesclerosis focal y segmentaria, que abreviamos GEFS. Es frecuente en el adulto joven y en personas afrodescendientes, en quienes se asocia a mutaciones de los podocitos y del gen APOL uno.' },
        ] },
        { title: 'Asociaciones', tag: 'Se pregunta', kind: 'alert', items: [
          { t: 'VIH: nefropatía colapsante', d: 'La asociación más clásica',
            say: 'Su asociación más preguntada es el VIH, que da una variante especial, la nefropatía colapsante.' },
          { t: 'Obesidad severa, heroína', d: 'Hiperfiltración en riñón único',
            say: 'También la obesidad severa, el consumo de heroína, y la hiperfiltración, por ejemplo en un paciente con riñón único. La idea común es un glomérulo que trabaja de más hasta cicatrizar.' },
        ] },
        { title: 'Pronóstico', tag: 'El peor de los tres', kind: 'criteria', items: [
          { t: 'Mala respuesta a corticoides', d: 'Progresa a hemodiálisis',
            say: 'Y es lo opuesto a cambios mínimos: responde mal a los corticoides y tiene una alta tasa de progresión a enfermedad renal crónica y hemodiálisis.' },
          { t: 'Recurre en el injerto', d: 'Tras el trasplante renal',
            say: 'Incluso después del trasplante puede volver a aparecer en el riñón nuevo.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos las tres en un árbol, tal como vas a razonar una pregunta que te muestra un adulto nefrótico.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las tres glomerulopatías, lado a lado',
      head: ['Rasgo', 'Membranosa', 'Cambios mínimos', 'GEFS'],
      rows: [
        { cells: ['Población', 'Mayor de 50 años', 'Niños (90 %) · 10 % adultos', 'Adulto joven · afrodescendiente'],
          say: 'Repasemos en paralelo. Población: la membranosa es del mayor de cincuenta; cambios mínimos, del niño; la focal y segmentaria, del adulto joven.' },
        { cells: ['Marcador', 'Anti-PLA2R (+) 75 %', 'Ninguno', 'Mutaciones podocitarias / APOL1'],
          say: 'Marcador: la membranosa tiene el anti PLA dos R; cambios mínimos no tiene ninguno; la focal y segmentaria, mutaciones del podocito.' },
        { cells: ['Histología', 'Spikes, MBG engrosada', 'Óptica normal · pedicelos borrados', 'Esclerosis segmentaria'],
          say: 'Histología: spikes en la membranosa, óptica normal en cambios mínimos, y esclerosis de una parte de algunos glomérulos en la focal y segmentaria.' },
        { cells: ['Asociación', 'Cáncer sólido, VHB, AINE', 'Linfoma de Hodgkin, AINE', 'VIH, obesidad, hiperfiltración'],
          say: 'Asociaciones, que es lo más preguntado: cáncer sólido para la membranosa, linfoma de Hodgkin para cambios mínimos, y VIH para la focal y segmentaria. Cáncer sólido y linfoma se confunden fácil: no los cruces.' },
        { cells: ['Corticoides', 'Rituximab o ciclosporina', 'Respuesta > 80 %', 'Resistente · progresa a ERC'],
          say: 'Y la respuesta al tratamiento: la membranosa necesita rituximab o ciclosporina, cambios mínimos responde espectacular a la prednisona, y la focal y segmentaria es resistente y progresa.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 62 años con semanas de orina espumosa y edema de extremidades inferiores. PA 125/80 mmHg, creatinina 1,1 mg/dL, albúmina 2,2 g/dL, proteinuria 7,5 g/24 h. Sedimento con 2 eritrocitos por campo, sin acantocitos. La biopsia renal muestra engrosamiento difuso de las paredes capilares con espículas subepiteliales en la tinción de plata e IgG granular en la inmunofluorescencia.',
      question: 'Además de solicitar anti-PLA2R, ¿cuál es la conducta prioritaria?',
      options: [
        { letter: 'A', text: 'Iniciar prednisona 1 mg/kg/día como único tratamiento' },
        { letter: 'B', text: 'Buscar neoplasia sólida oculta: colonoscopía e imagen de tórax' },
        { letter: 'C', text: 'Solicitar serología de VIH como único estudio' },
        { letter: 'D', text: 'Repetir la biopsia con microscopía electrónica' },
        { letter: 'E', text: 'Iniciar hemodiálisis' },
      ],
      correct: 'B',
      explanation: 'Spikes e IgG granular subepitelial: nefropatía membranosa. En un adulto mayor es obligatorio descartar una causa secundaria, sobre todo una neoplasia sólida oculta (colon, pulmón, mama). La prednisona sola sirve en cambios mínimos; el VIH se asocia a la GEFS.',
      say: {
        stem: 'Vamos al caso. Hombre de sesenta y dos años con semanas de orina espumosa y edema. Presión normal, creatinina normal, albúmina dos coma dos y siete y medio gramos de proteinuria al día, con un sedimento tranquilo. La biopsia muestra paredes capilares engrosadas, con espículas en la tinción de plata e inmunoglobulina G granular.',
        question: 'Además de pedir el anti PLA dos R, ¿cuál es la conducta prioritaria?',
        options: 'Las opciones son: prednisona sola, buscar un cáncer sólido oculto, pedir solo VIH, repetir la biopsia con microscopía electrónica, o hemodiálisis. Piénsalo.',
        answer: 'La respuesta es la B. Las espículas son la firma de la membranosa, y en un adulto mayor lo prioritario es descartar que sea secundaria a un cáncer sólido oculto: colonoscopía e imagen de tórax. El VIH es la trampa, porque se asocia a la focal y segmentaria, no a la membranosa. Y la prednisona sola es el tratamiento de cambios mínimos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 66',
      stem: 'Un paciente de 62 años presenta un cuadro de varios días de evolución, de orinas espumosas, asociado a edema marcado de extremidades inferiores. Su sedimento de orina muestra 2-4 hematíes por campo, 5-10 leucocitos por campo, creatininemia de 1,2 mg/dl y proteinuria de 24 horas de 7 gramos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Nefropatía por IgA' },
        { letter: 'B', text: 'Enfermedad renal lúpica' },
        { letter: 'C', text: 'Glomerulonefritis postestreptocócica' },
        { letter: 'D', text: 'Glomerulonefritis mesangiocapilar' },
        { letter: 'E', text: 'Nefropatía membranosa' },
      ],
      correct: 'E',
      explanation: 'Síndrome nefrótico puro (7 g/24 h, sedimento sin hematuria dismórfica) en un adulto de 62 años: nefropatía membranosa. Las demás son glomerulonefritis con hematuria dismórfica.',
      say: {
        stem: 'Vamos con las preguntas reales. Esta es del EUNACOM de julio de dos mil quince. Paciente de sesenta y dos años con días de orina espumosa y edema marcado de piernas. El sedimento tiene muy pocos glóbulos rojos, la creatinina es casi normal, y la proteinuria es de siete gramos al día.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: nefropatía por IgA, enfermedad renal lúpica, glomerulonefritis postestreptocócica, glomerulonefritis mesangiocapilar, o nefropatía membranosa. Piénsalo.',
        answer: 'Es la E, nefropatía membranosa. Nefrótico puro, con sedimento tranquilo, en un adulto de sesenta y dos años: es la causa número uno. Todas las demás alternativas son glomerulonefritis, y habrían mostrado hematuria dismórfica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 26',
      stem: 'Un paciente de 62 años presenta edema de extremidades inferiores, asociada a malestar general y aumento de volumen facial. Al examen físico tiene FC: 60x’, PA: 120/80 mmHg, edema de párpados y de extremidades inferiores, con signo de la fóvea. Se solicitan exámenes, que muestran glicemia: 147 mg/dl, hemoglobina glicosilada: 6,8%, sedimento de orina con 5 eritrocitos por campo y 2 a 3 leucocitos por campo, proteinuria de 500 mg/dl, colesterol total: 411 mg/dl, albúmina plasmática: 2,1 g/dl y creatinina: 0,9 mg/dl.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Nefropatía diabética' },
        { letter: 'B', text: 'Nefropatía membranosa' },
        { letter: 'C', text: 'Nefropatía lúpica' },
        { letter: 'D', text: 'Nefropatía a cambios mínimos' },
        { letter: 'E', text: 'Nefropatía por IgA' },
      ],
      correct: 'B',
      explanation: 'Síndrome nefrótico clásico (edema, proteinuria masiva, albúmina 2,1 g/dL, colesterol 411 mg/dL) en un adulto de 62 años: membranosa. La diabetes es reciente (HbA1c 6,8 %), sin la larga data que exige una nefropatía diabética.',
      say: {
        stem: 'Una del EUNACOM de diciembre de dos mil dieciocho. Paciente de sesenta y dos años con edema de párpados y piernas. Glicemia ciento cuarenta y siete, hemoglobina glicosilada seis coma ocho. Proteinuria muy alta, colesterol cuatrocientos once, albúmina dos coma uno, y creatinina normal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: nefropatía diabética, membranosa, lúpica, cambios mínimos, o nefropatía por IgA. Piénsalo.',
        answer: 'Es la B, membranosa. Es un nefrótico completo en un adulto de sesenta y dos años. La trampa es la nefropatía diabética: esta diabetes recién se está diagnosticando, con una glicosilada de seis coma ocho, y la nefropatía diabética necesita diez a quince años de evolución. Cambios mínimos tienta por el nefrótico puro, pero a esta edad manda la membranosa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 60',
      stem: 'Un lactante de 2 años es traído por presentar aumento de volumen facial y edema de las extremidades inferiores. La madre refiere, además, que presenta orinas espumosas desde hace una semana. Al examen físico se observa edema blando de las extremidades inferiores y de la cara. Su frecuencia cardíaca es 80 latidos por minuto y su presión arterial es 87/54 mmHg. Se solicitan exámenes, destacando examen de orina con 2 glóbulos rojos por campo y proteinuria: 4+, creatinina: 0,7 mg/dL, BUN: 12 mg/dL, albuminemia: 2,7 g/dL, colesterol total: 310 mg/dL y triglicéridos plasmáticos: 560 mg/dL.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar prednisona vía oral en alta dosis' },
        { letter: 'B', text: 'Derivar para biopsia renal' },
        { letter: 'C', text: 'Iniciar diuréticos' },
        { letter: 'D', text: 'Indicar dieta baja en sodio y en potasio' },
        { letter: 'E', text: 'Realizar hemodiálisis' },
      ],
      correct: 'A',
      explanation: 'Síndrome nefrótico puro en un niño: lo más probable es la enfermedad por cambios mínimos (90 % en niños), que se trata con prednisona oral en dosis altas sin biopsia previa. La biopsia se reserva para la falta de respuesta o el nefrótico impuro.',
      say: {
        stem: 'Y cerramos con la contracara, del EUNACOM de diciembre de dos mil veinticinco. Un niño de dos años con edema de cara y piernas y orina espumosa desde hace una semana. Presión normal, casi sin glóbulos rojos en la orina, proteinuria de cuatro cruces, albúmina dos coma siete y lípidos altos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: prednisona oral en alta dosis, derivar para biopsia renal, diuréticos, dieta baja en sodio y potasio, o hemodiálisis. Piénsalo.',
        answer: 'Es la A, prednisona oral en alta dosis. Es un nefrótico puro en un niño, y en el niño el noventa por ciento es cambios mínimos, así que se trata sin biopsiar. La biopsia es la trampa: es la respuesta correcta en el adulto, o en el niño que no responde o que tiene un nefrótico impuro.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Membranosa', tag: 'Mayor de 50', kind: 'key', items: [
          { t: 'Nefrótico puro sobre 50 años', d: 'Anti-PLA2R · spikes',
            say: 'Cerremos con las reglas de oro. Nefrótico puro en un adulto mayor de cincuenta: membranosa, con anti PLA dos R y spikes.' },
          { t: 'Siempre buscar cáncer sólido', d: 'Y hepatitis B',
            say: 'Y en toda membranosa del adulto se busca un cáncer sólido oculto y la hepatitis B.' },
        ] },
        { title: 'Cambios mínimos', tag: 'El niño', kind: 'pharma', items: [
          { t: 'Óptica normal, responde a prednisona', d: 'Adulto: Hodgkin y AINE',
            say: 'Cambios mínimos: óptica normal, respuesta excelente a la prednisona, y en el adulto, linfoma de Hodgkin o antiinflamatorios.' },
        ] },
        { title: 'Focal y segmentaria', tag: 'La agresiva', kind: 'alert', items: [
          { t: 'VIH, obesidad, adulto joven', d: 'Resistente a corticoides, progresa a ERC',
            say: 'Focal y segmentaria: adulto joven, VIH u obesidad, resistente a corticoides y con progresión a diálisis. Si te llevas una sola idea de hoy: la edad y la asociación te dicen cuál es, y la respuesta a corticoides te dice cómo le va a ir. En la próxima clase cambiamos de síndrome: pasamos al nefrítico. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Adulto con nefrótico puro: qué glomerulopatía es',
    root: N('start', 'Nefrótico primario en adulto', 'Biopsia renal',
      'Adulto con un síndrome nefrótico primario, ya biopsiado. La biopsia y el contexto te dicen cuál de las tres es.',
      ['', N('q', '¿Qué muestra la biopsia?', 'Óptica e inmunofluorescencia',
        'La primera pregunta es qué se ve al microscopio.',
        ['Spikes, IgG granular', N('q', 'Membranosa: ¿anti-PLA2R?', 'Mayor de 50 años',
          'Si hay spikes e inmunoglobulina G granular, es una membranosa. Pide el anti PLA dos R.',
          ['Positivo', N('do', 'Primaria: rituximab o ciclosporina', 'Igual se tamiza cáncer',
            'Si es positivo, es primaria y se trata con rituximab o ciclosporina, aunque igual se hace el tamizaje de cáncer en el adulto mayor.')],
          ['Negativo', N('alert', 'Buscar causa secundaria', 'Cáncer sólido, VHB, AINE, lupus',
            'Si es negativo, sube la sospecha de secundaria: busca activamente un cáncer sólido de colon, pulmón o mama, la hepatitis B, los antiinflamatorios y el lupus.')])],
        ['Óptica normal', N('ok', 'Cambios mínimos: prednisona', 'Buscar Hodgkin y AINE',
          'Si la óptica es normal y la electrónica muestra pedicelos borrados, es cambios mínimos. Prednisona a un miligramo por kilo, con excelente respuesta, y busca linfoma de Hodgkin y antiinflamatorios.')],
        ['Esclerosis segmentaria', N('refer', 'GEFS: resistente a corticoides', 'Buscar VIH y obesidad',
          'Si hay esclerosis de una parte de algunos glomérulos, es una focal y segmentaria. Busca VIH y obesidad, y deriva a nefrología, porque responde mal a corticoides y progresa a enfermedad renal crónica.')])]),
  },
};
