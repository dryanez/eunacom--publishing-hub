// Clase 2.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-09).
// Revisión: se agregan tres preguntas reales y fechadas del banco EUNACOM (diagnóstico
// de celíaca con hepatitis como distractor, dermatitis herpetiforme, y la asociación con
// hipotiroidismo autoinmune), que enseñan algo distinto del caso clínico y de los dos
// casos representativos del libro (linfoma tras dieta sin gluten, y galactosemia del
// recién nacido), que se mantienen porque el banco real no tiene una pregunta con esa
// combinación exacta.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-09',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Sudán confirma, D-xilosa localiza, y la anemia que no responde',
      say: 'Bienvenidos. Hoy vemos malabsorción, enfermedad celíaca e intolerancia a la lactosa. En la clase anterior dejamos abierta una rama de la diarrea crónica: la malabsorción. Hoy la cerramos, y verás que todo el tema se ordena con solo dos pruebas. Además tiene una perla que se repite examen tras examen: la anemia ferropénica que no responde al hierro. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Síndrome de malabsorción',
      title: 'Dos pruebas ordenan todo el tema',
      nodes: [
        { id: 'cli', col: 0, row: 1, k: 'start', t: 'Diarrea crónica + baja de peso', s: 'Con ingesta conservada' },
        { id: 'car', col: 0, row: 3, k: 'effect', t: 'Signos carenciales', s: 'Anemia ferropénica, hipocalcemia, glositis' },
        { id: 'sud', col: 1, row: 1, k: 'q', t: 'Test de Sudán', s: 'Confirma esteatorrea' },
        { id: 'dx', col: 2, row: 1, k: 'q', t: 'Test de D-xilosa', s: '¿Dónde está el problema?' },
        { id: 'par', col: 3, row: 0, k: 'risk', t: 'Alterado: pared', s: 'Celíaca, Crohn, intestino corto' },
        { id: 'enz', col: 3, row: 2, k: 'mech', t: 'Normal: enzimas', s: 'Pancreatitis crónica, fibrosis quística' },
      ],
      edges: [
        { from: 'cli', to: 'sud' }, { from: 'car', to: 'sud' },
        { from: 'sud', to: 'dx', label: 'positivo' },
        { from: 'dx', to: 'par', label: 'alterado' },
        { from: 'dx', to: 'enz', label: 'normal' },
      ],
      steps: [
        { show: ['cli'], note: 'Come bien y aun así baja de peso',
          say: 'Partamos por la clínica. El paciente con malabsorción tiene diarrea crónica y baja de peso, a pesar de comer bien. Y sus deposiciones son características: esteatorrea, es decir, deposiciones brillantes, que flotan y huelen mal, y a veces lientería, con restos de alimento sin digerir.' },
        { show: ['car'], note: 'Lo que no se absorbe, falta',
          say: 'Y como no absorbe, aparecen las carencias: anemia ferropénica que no responde, hipocalcemia, glositis, queilitis y piel seca.' },
        { show: ['sud'], note: 'Sudán: solo dice que hay grasa',
          say: 'La primera prueba es el test de Sudán en deposiciones. Solo dice una cosa: hay grasa en las deposiciones. Confirma la esteatorrea, pero no dice de dónde viene.' },
        { show: ['dx'], note: 'La D-xilosa no necesita enzimas para absorberse',
          say: 'Para eso está la segunda prueba, la D-xilosa. Es un azúcar que no necesita enzimas para absorberse, solo una pared intestinal sana. Por eso nos dice dónde está el problema.' },
        { show: ['par'], note: 'La pared no absorbe',
          say: 'Si sale alterada, la pared no está absorbiendo: el problema es parietal. Piensa en celíaca, en Crohn, que vemos en la próxima clase, o en un intestino corto después de una resección.' },
        { show: ['enz'], note: 'La pared está bien: faltan enzimas',
          say: 'Si sale normal, la pared está bien, y lo que faltan son enzimas: el problema es pancreático, como la pancreatitis crónica o la fibrosis quística. Y un detalle: si sospechas Giardia, pide parasitológico y trata con tinidazol o metronidazol.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Enfermedad celíaca',
      title: 'Clínica y diagnóstico',
      cards: [
        { title: 'Qué es', tag: 'Gatillo: gluten', kind: 'key', items: [
          { t: 'Enteropatía inmune al gluten', d: 'Trigo, cebada, centeno; también avena',
            say: 'La causa parietal que más se pregunta es la enfermedad celíaca: una enteropatía inmune gatillada por el gluten, que está en el trigo, la cebada y el centeno, y también en la avena, por contaminación o por la avenina.' },
          { t: 'A veces oligosintomática', d: 'Distensión, dispepsia, flatulencia',
            say: 'Y ojo, no siempre da una malabsorción florida. Muchas veces es oligosintomática: distensión, flatulencia o una dispepsia que parece funcional. O incluso nada digestivo, solo una anemia o una hipocalcemia aislada en un examen de rutina.' },
        ] },
        { title: 'La perla', tag: 'Se repite', kind: 'alert', items: [
          { t: 'Anemia ferropénica refractaria', d: 'Descartar celíaca, con o sin diarrea',
            say: 'Y aquí está la perla que se repite en el examen. Una anemia ferropénica que no responde al hierro oral, con o sin diarrea, obliga a descartar celíaca. ¿Por qué? Porque el hierro y el calcio se absorben en el duodeno, que es justamente la zona más dañada.' },
        ] },
        { title: 'Diagnóstico', tag: 'Comiendo gluten', kind: 'criteria', items: [
          { t: 'Anti-transglutaminasa IgA', d: 'Más antiendomisio, con IgA total',
            say: 'El diagnóstico parte con anticuerpos anti transglutaminasa tisular IgA, más antiendomisio, y siempre junto con la IgA total. El déficit de IgA es más frecuente en celíacos, y da falsos negativos. Esa es la trampa.' },
          { t: 'Biopsia duodenal', d: 'Atrofia vellositaria, criptas, linfocitos',
            say: 'Se confirma con biopsia duodenal: atrofia de las vellosidades, hiperplasia de criptas y linfocitosis intraepitelial.' },
          { t: 'Sin suspender el gluten', d: 'Si no, falsos negativos',
            say: 'Y todo esto con el paciente comiendo gluten. Si lo sacas antes de estudiar, los anticuerpos y la biopsia se normalizan, y pierdes el diagnóstico.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Celíaca: tratamiento y complicaciones',
      title: 'El celíaco que no responde',
      nodes: [
        { id: 'tx', col: 0, row: 1, k: 'good', t: 'Dieta sin gluten', s: 'Estricta y de por vida' },
        { id: 'seg', col: 1, row: 1, k: 'q', t: '¿Mejora?', s: 'Clínica + anticuerpos negativos al año' },
        { id: 'tra', col: 2, row: 0, k: 'effect', t: 'Transgresión de la dieta', s: 'La causa más frecuente' },
        { id: 'cum', col: 2, row: 2, k: 'q', t: 'Cumple, anticuerpos negativos', s: 'Y sigue con malabsorción' },
        { id: 'lin', col: 3, row: 2, k: 'alert', t: 'Linfoma T de enteropatía', s: 'También llamado linfoma MALT intestinal' },
      ],
      edges: [
        { from: 'tx', to: 'seg' },
        { from: 'seg', to: 'tra', label: 'no' },
        { from: 'seg', to: 'cum', label: 'no' },
        { from: 'cum', to: 'lin' },
      ],
      steps: [
        { show: ['tx'], note: 'El único tratamiento',
          say: 'El tratamiento es uno solo: dieta sin gluten, estricta y de por vida.' },
        { show: ['seg'], note: 'Anticuerpos negativos, habitualmente al año',
          say: 'El seguimiento se hace con la mejoría clínica y con la negativización de los anticuerpos, que habitualmente ocurre al año.' },
        { show: ['tra'], note: 'A menudo por contaminación cruzada',
          say: '¿Y si no responde? La causa más frecuente, lejos, es la transgresión de la dieta, muchas veces sin que el paciente lo sepa, por contaminación cruzada.' },
        { show: ['cum'], note: 'Anticuerpos negativos: sí está cumpliendo',
          say: 'Pero fíjate en este escenario: el paciente cumple la dieta, y los anticuerpos negativos lo confirman. Aun así sigue con malabsorción y bajando de peso.' },
        { show: ['lin'], note: 'Complicación grave: se busca activamente',
          say: 'Ahí tienes que sospechar un linfoma T asociado a enteropatía, también llamado linfoma MALT intestinal. Es la complicación grave de la celíaca, y la clave para sospecharlo está en los anticuerpos negativos. Se estudia con imágenes y biopsias repetidas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Lactosa vs galactosa',
      title: 'Dos cuadros que suenan parecido',
      cards: [
        { title: 'Intolerancia a la lactosa', tag: 'Adulto', kind: 'normal', items: [
          { t: 'Déficit de lactasa', d: 'Diarrea osmótica tras los lácteos, sin esteatorrea',
            say: 'Cerremos el contenido con dos cuadros que el examen pone juntos para confundirte. La intolerancia a la lactosa es un déficit de lactasa, frecuente en el adulto. Da diarrea osmótica, meteorismo y dolor después de los lácteos, pero sin esteatorrea.' },
          { t: 'Test de hidrógeno espirado', d: 'Reducir lactosa o lactasa exógena',
            say: 'Se diagnostica con el test de hidrógeno espirado, y se trata reduciendo la lactosa o usando lactasa. La leche sin lactosa, en realidad, es leche con lactasa añadida.' },
        ] },
        { title: 'Galactosemia', tag: 'Recién nacido', kind: 'alert', items: [
          { t: 'Genética, autosómica recesiva', d: 'Ictericia, daño hepático, cataratas',
            say: 'La galactosemia es otra cosa: una enfermedad genética, autosómica recesiva y grave, del recién nacido. Da ictericia, daño hepático, cataratas, retraso del desarrollo y sepsis por E. coli.' },
          { t: 'Fórmula de soya', d: 'Lactancia y leche sin lactosa: prohibidas',
            say: 'El tratamiento es eliminar toda la galactosa: se contraindica la lactancia materna y las fórmulas animales, y se usa fórmula de soya. Y la trampa: la leche sin lactosa está prohibida, porque la lactasa parte la lactosa en glucosa y galactosa.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Interpretar la D-xilosa; lactosa vs galactosa',
      head: ['Prueba o cuadro', 'Hallazgo', 'Significado'],
      rows: [
        { cells: ['D-xilosa alterada', 'Baja excreción urinaria', 'Pared: celíaca, Crohn, intestino corto'],
          say: 'Repasemos en una tabla. D-xilosa alterada, con baja excreción en la orina: el problema es la pared, como en la celíaca, el Crohn o el intestino corto.' },
        { cells: ['D-xilosa normal', 'Excreción urinaria normal', 'Enzimas: pancreatitis crónica, fibrosis quística'],
          say: 'D-xilosa normal: la pared absorbe, faltan enzimas. Pancreatitis crónica o fibrosis quística.' },
        { cells: ['Anticuerpos negativos con clínica sugerente', 'Verificar IgA total', 'Déficit de IgA: falso negativo'],
          say: 'Anticuerpos celíacos negativos, pero la clínica es muy sugerente: mira la IgA total, porque su déficit da falsos negativos.' },
        { cells: ['Intolerancia a la lactosa', 'Diarrea osmótica sin esteatorrea', 'Reducir lactosa; leche sin lactosa útil'],
          say: 'Intolerancia a la lactosa: diarrea osmótica sin esteatorrea, y aquí la leche sin lactosa sí sirve.' },
        { cells: ['Galactosemia', 'RN con cataratas, ictericia, retraso', 'Soya; lactancia y leche sin lactosa prohibidas'],
          say: 'Y galactosemia: recién nacido con cataratas e ictericia. Fórmula de soya, y la leche sin lactosa, prohibida. Es la misma leche, pero en un cuadro sirve y en el otro está contraindicada.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 30 años con diarrea crónica, distensión y baja de 6 kg en un año. Tiene una anemia ferropénica que no ha respondido a 4 meses de hierro oral bien tolerado. El test de D-xilosa resulta alterado.',
      question: '¿Cuál es el siguiente paso más adecuado?',
      options: [
        { letter: 'A', text: 'Anticuerpos anti-transglutaminasa IgA con IgA total, manteniendo el gluten' },
        { letter: 'B', text: 'Iniciar dieta sin gluten y controlar en 3 meses' },
        { letter: 'C', text: 'Medir elastasa fecal por sospecha de insuficiencia pancreática' },
        { letter: 'D', text: 'Test de hidrógeno espirado' },
        { letter: 'E', text: 'Cambiar a hierro endovenoso' },
      ],
      correct: 'A',
      explanation: 'D-xilosa alterada = problema de la pared. Con anemia ferropénica refractaria, la primera sospecha es celíaca (el duodeno, donde se absorbe el hierro, es la zona más afectada). Se piden anti-transglutaminasa IgA con IgA total, y luego biopsia duodenal, con el paciente consumiendo gluten.',
      say: {
        stem: 'Vamos al caso. Mujer de treinta años con diarrea crónica, distensión y una baja de seis kilos en un año. Tiene una anemia ferropénica que no ha respondido a cuatro meses de hierro oral bien tolerado. El test de D-xilosa sale alterado.',
        question: '¿Cuál es el siguiente paso más adecuado?',
        options: 'Las alternativas: anticuerpos anti transglutaminasa con IgA total manteniendo el gluten, iniciar dieta sin gluten, buscar insuficiencia pancreática, test de hidrógeno espirado, o cambiar a hierro endovenoso. Piénsalo.',
        answer: 'Es la A. D-xilosa alterada significa pared, y una anemia ferropénica que no responde al hierro oral te grita celíaca. Se piden los anticuerpos con la IgA total, y después la biopsia. La trampa es la B: si le quitas el gluten antes de estudiar, pierdes el diagnóstico. Y buscar el páncreas no tiene sentido con una D-xilosa alterada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 25',
      stem: 'Una paciente de 24 años presenta un cuadro de amenorrea y baja de peso, asociado a náuseas y dolor abdominal de varios meses de evolución. Tiene antecedente de una hermana gemela con hipotiroidismo. Sus exámenes muestran hematocrito de 28 %, blancos 9.600 por mm3, plaquetas 340.000 por mm3, bilirrubina 1,1 mg/dL, GOT 155 UI/L y GPT 120 UI/L.',
      question: '¿Cuál es la conducta diagnóstica más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar IgM para virus hepatitis A' },
        { letter: 'B', text: 'Realizar biopsia hepática' },
        { letter: 'C', text: 'Solicitar colonoscopía' },
        { letter: 'D', text: 'Solicitar ecografía abdominal' },
        { letter: 'E', text: 'Solicitar anticuerpos antitransglutaminasa' },
      ],
      correct: 'E',
      explanation: 'Amenorrea, baja de peso, dolor abdominal y anemia en una mujer joven con antecedente familiar de enfermedad autoinmune (hipotiroidismo) orientan a enfermedad celíaca, que puede oligosintomática y elevar discretamente las transaminasas. El estudio inicial son los anticuerpos antitransglutaminasa; la hepatitis es un distractor que no explica el resto del cuadro.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Mujer de veinticuatro años con amenorrea y baja de peso, con náuseas y dolor abdominal de varios meses. Tiene una hermana gemela con hipotiroidismo. Sus exámenes muestran anemia, con las transaminasas GOT y GPT levemente elevadas.',
        question: '¿Cuál es la conducta diagnóstica más adecuada?',
        options: 'Las alternativas: IgM para hepatitis A, biopsia hepática, colonoscopía, ecografía abdominal, o anticuerpos antitransglutaminasa. Piénsalo.',
        answer: 'Es la E. Las transaminasas elevadas tientan hacia la hepatitis, pero no explican la amenorrea ni la baja de peso. Una mujer joven con antecedente familiar de una enfermedad autoinmune, como el hipotiroidismo de su hermana, y esta combinación de síntomas digestivos y carenciales, apunta a la enfermedad celíaca: se piden los anticuerpos antitransglutaminasa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 98',
      stem: 'Una paciente de 30 años, con antecedente de hipotiroidismo en tratamiento, consulta por diarrea de 3 meses de evolución, no disentérica, asociada a baja de peso y artralgias. Al examen físico destacan lesiones pruriginosas y vesiculares en el tronco y las extremidades.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Colitis ulcerosa' },
        { letter: 'B', text: 'Enfermedad celíaca' },
        { letter: 'C', text: 'Enfermedad de Crohn' },
        { letter: 'D', text: 'Lupus eritematoso sistémico' },
        { letter: 'E', text: 'Trastorno digestivo funcional' },
      ],
      correct: 'B',
      explanation: 'La diarrea crónica con baja de peso es compatible con celíaca, Crohn o colitis ulcerosa, pero las lesiones cutáneas pruriginosas y vesiculares son una dermatitis herpetiforme, que se asocia específicamente a la enfermedad celíaca; las enfermedades inflamatorias intestinales dan eritema nodoso o pioderma gangrenoso, no este tipo de lesión.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil diecinueve. Mujer de treinta años, con hipotiroidismo en tratamiento, con tres meses de diarrea sin sangre, baja de peso y dolor en las articulaciones. Al examen tiene lesiones que dan picazón y forman ampollas pequeñas, en el tronco y las extremidades.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las alternativas: colitis ulcerosa, enfermedad celíaca, enfermedad de Crohn, lupus, o trastorno digestivo funcional. Piénsalo.',
        answer: 'Es la B, enfermedad celíaca. La diarrea con baja de peso podría ser cualquiera de las enfermedades inflamatorias intestinales, pero la lesión de piel es la clave: es una dermatitis herpetiforme, una erupción que da picazón y ampollas pequeñas, y que se asocia de forma específica a la celíaca. El Crohn y la colitis ulcerosa dan otras lesiones de piel, como el eritema nodoso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Paciente con enfermedad celíaca que lleva 1 año con dieta sin gluten. Refiere seguirla de forma estricta, pero persiste con diarrea y baja de peso. Los anticuerpos anti-transglutaminasa están negativos.',
      question: '¿Cuál es la sospecha diagnóstica?',
      options: [
        { letter: 'A', text: 'Transgresión oculta de la dieta' },
        { letter: 'B', text: 'Linfoma T asociado a enteropatía (linfoma MALT)' },
        { letter: 'C', text: 'Intolerancia a la lactosa secundaria' },
        { letter: 'D', text: 'Síndrome de intestino irritable sobreagregado' },
        { letter: 'E', text: 'Giardiasis crónica' },
      ],
      correct: 'B',
      explanation: 'La causa más frecuente de falta de respuesta es la transgresión, pero en ese caso los anticuerpos suelen seguir elevados. Con anticuerpos negativos (buena adherencia) y malabsorción persistente, hay que descartar un linfoma T asociado a enteropatía, con imágenes y biopsias repetidas.',
      say: {
        stem: 'Ahora una pregunta del banco EUNACOM. Paciente celíaco que lleva un año con dieta sin gluten, que dice seguir de forma estricta, pero persiste con diarrea y baja de peso. Los anticuerpos anti transglutaminasa están negativos.',
        question: '¿Cuál es la sospecha diagnóstica?',
        options: 'Las opciones: transgresión oculta de la dieta, linfoma T asociado a enteropatía, intolerancia a la lactosa secundaria, intestino irritable sobreagregado, o giardiasis crónica. Piénsalo.',
        answer: 'La respuesta es la B. La A es la más tentadora, porque la transgresión es la causa más frecuente de falta de respuesta. Pero si transgrede, los anticuerpos siguen positivos. Aquí están negativos, o sea, cumple. Y un celíaco que cumple y sigue malabsorbiendo tiene un linfoma hasta demostrar lo contrario.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Recién nacido de 12 días con ictericia prolongada, hepatomegalia, mal incremento ponderal y cataratas bilaterales detectadas en el examen ocular.',
      question: '¿Cuál es el tratamiento nutricional indicado?',
      options: [
        { letter: 'A', text: 'Mantener lactancia materna exclusiva' },
        { letter: 'B', text: 'Fórmula sin lactosa' },
        { letter: 'C', text: 'Fórmula de soya (sin galactosa)' },
        { letter: 'D', text: 'Fórmula extensamente hidrolizada' },
        { letter: 'E', text: 'Suplemento oral de lactasa con leche materna' },
      ],
      correct: 'C',
      explanation: 'Ictericia, daño hepático, cataratas y retraso en el RN: galactosemia. Hay que eliminar toda la galactosa: se contraindican la lactancia y las fórmulas animales. La fórmula sin lactosa no sirve porque aporta galactosa. Se usa fórmula de soya.',
      say: {
        stem: 'Y otra del mismo banco. Recién nacido de doce días con ictericia prolongada, hepatomegalia, mal incremento de peso y cataratas bilaterales.',
        question: '¿Cuál es el tratamiento nutricional indicado?',
        options: 'Las opciones: mantener la lactancia exclusiva, fórmula sin lactosa, fórmula de soya, fórmula extensamente hidrolizada, o lactasa oral con leche materna. Piénsalo.',
        answer: 'Es la C, fórmula de soya. Cataratas e ictericia en un recién nacido es galactosemia, y hay que sacar toda la galactosa. La B es la trampa exacta que vimos: la fórmula sin lactosa trae la lactosa ya partida en glucosa y galactosa, así que igual le das galactosa. Lo mismo pasa con la lactasa de la E.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Malabsorción', tag: 'Dos pruebas', kind: 'key', items: [
          { t: 'Sudán confirma, D-xilosa localiza', d: 'Alterada: pared · normal: páncreas',
            say: 'Cerremos con las reglas de oro. El Sudán confirma la esteatorrea, y la D-xilosa la localiza: alterada es pared, normal es páncreas.' },
          { t: 'Anemia ferropénica refractaria', d: 'Descartar celíaca',
            say: 'Anemia ferropénica que no responde al hierro oral: descarta celíaca.' },
        ] },
        { title: 'Celíaca', tag: 'Gluten', kind: 'pharma', items: [
          { t: 'Anticuerpos + IgA total + biopsia', d: 'Comiendo gluten',
            say: 'El estudio es anti transglutaminasa con IgA total y biopsia duodenal, con el paciente comiendo gluten. El tratamiento, dieta sin gluten de por vida.' },
          { t: 'No responde con anticuerpos negativos', d: 'Sospechar linfoma',
            say: 'Si no responde y los anticuerpos son negativos, piensa en linfoma.' },
        ] },
        { title: 'Lactosa vs galactosa', tag: 'Trampa', kind: 'alert', items: [
          { t: 'Galactosemia: soya', d: 'Nunca leche sin lactosa',
            say: 'Y en la galactosemia, fórmula de soya, nunca leche sin lactosa. Si te llevas una sola idea de hoy: la D-xilosa te dice si el problema es la pared o el páncreas. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Malabsorción: dónde está el problema',
    root: N('start', 'Diarrea crónica + baja de peso', 'Con ingesta conservada',
      'Diarrea crónica con baja de peso a pesar de comer bien. Hay que confirmar la malabsorción y luego localizarla.',
      ['', N('q', '¿Esteatorrea?', 'Deposiciones brillantes que flotan',
        '¿Las deposiciones son brillantes, flotan y huelen mal?',
        ['NO', N('ok', 'Intolerancia a la lactosa', 'Test de hidrógeno espirado',
          'Diarrea osmótica tras los lácteos, sin esteatorrea: intolerancia a la lactosa. Se confirma con test de hidrógeno espirado y se reduce la lactosa.')],
        ['SÍ', N('do', 'Test de Sudán + D-xilosa', 'Sudán confirma · D-xilosa localiza',
          'El test de Sudán confirma la esteatorrea. El test de D-xilosa nos dice dónde está el problema.',
          ['', N('q', '¿D-xilosa alterada?', 'Pared vs páncreas',
            '¿La D-xilosa está alterada?',
            ['SÍ', N('do', 'Anti-transglutaminasa IgA', 'Con IgA total, consumiendo gluten',
              'Alterada significa problema de la pared: pensamos en celíaca. Pedimos anti transglutaminasa IgA junto con IgA total, con el paciente comiendo gluten.',
              ['', N('ok', 'Biopsia duodenal → sin gluten', 'Dieta estricta de por vida',
                'Se confirma con biopsia duodenal, y el único tratamiento es la dieta sin gluten estricta y de por vida.')])],
            ['NO', N('refer', 'Origen pancreático', 'Pancreatitis crónica · fibrosis quística',
              'Normal significa que la pared absorbe bien: el problema es enzimático, pancreático, como la pancreatitis crónica o la fibrosis quística.')])])])]),
  },
};
