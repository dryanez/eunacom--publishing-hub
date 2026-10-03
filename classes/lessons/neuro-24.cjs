// Clase 10.24 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-24).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-24 y --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-24',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Antes de agregar un fármaco, pregunta si el síntoma lo causó otro fármaco',
      say: 'Bienvenidos. Cerramos el bloque de geriatría con dos temas que se cruzan todo el tiempo: la polifarmacia y la incontinencia urinaria. En las clases anteriores vimos que los fármacos gatillan delirium y caídas. Hoy vemos por qué el adulto mayor es tan sensible a ellos, cuáles se evitan, y cómo se ordena la incontinencia. La idea que une todo es una sola: antes de agregar un fármaco, revisa los que ya toma. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Farmacología del envejecimiento',
      title: '¿Por qué el mismo fármaco daña más en un anciano?',
      nodes: [
        { id: 'agu', col: 0, row: 0, k: 'mech', t: 'Menos agua corporal', s: 'Digoxina, litio: más concentración' },
        { id: 'gra', col: 0, row: 1, k: 'mech', t: 'Más grasa corporal', s: 'Diazepam: vida media > 72 h' },
        { id: 'hig', col: 0, row: 2, k: 'mech', t: 'Hígado más lento', s: 'Menos citocromo P450' },
        { id: 'rin', col: 0, row: 3, k: 'mech', t: 'Filtrado glomerular menor', s: '~1 mL/min por año desde los 40' },
        { id: 'cg', col: 2, row: 3, k: 'alert', t: 'Creatinina normal engaña', s: 'Calcular Cockcroft-Gault' },
        { id: 'fd', col: 2, row: 1, k: 'risk', t: 'Receptores más sensibles', s: 'Sedantes, opioides, ortostatismo' },
        { id: 'ram', col: 4, row: 2, k: 'effect', t: 'Más reacciones adversas', s: 'Polifarmacia: ≥ 5 fármacos' },
      ],
      edges: [
        { from: 'agu', to: 'fd' }, { from: 'gra', to: 'fd' }, { from: 'hig', to: 'fd' },
        { from: 'rin', to: 'cg' }, { from: 'fd', to: 'ram' }, { from: 'cg', to: 'ram' },
      ],
      steps: [
        { show: ['agu', 'gra'], note: 'Cambia la composición del cuerpo',
          say: 'Hablamos de polifarmacia cuando el paciente toma cinco fármacos o más. Y el anciano es más vulnerable por su farmacocinética. Primero, tiene menos agua, así que los fármacos hidrosolubles, como la digoxina o el litio, alcanzan concentraciones más altas. Y tiene más grasa, así que los liposolubles, como el diazepam, se acumulan: su vida media pasa de un día a más de tres. Por eso sedan por días.' },
        { show: ['hig'], note: 'Metabolismo de fase I más lento',
          say: 'Segundo, el hígado es más pequeño, recibe menos sangre, y el citocromo P cuatrocientos cincuenta funciona más lento. Los fármacos de metabolismo hepático duran más.' },
        { show: ['rin', 'cg'], note: 'Regla de oro: no confiar en la creatinina',
          say: 'Tercero, el riñón. El filtrado cae cerca de un mililitro por minuto cada año desde los cuarenta. Y aquí va una regla de oro: en un anciano sarcopénico, una creatinina normal no descarta insuficiencia renal, porque tiene poco músculo que la produzca. Siempre calcula el clearance con Cockcroft-Gault para ajustar dosis.' },
        { show: ['fd'], note: 'Farmacodinamia: más efecto a igual dosis',
          say: 'Y además cambia la farmacodinamia. El cerebro es más sensible a sedantes y opioides, y el barorreflejo responde peor, así que los antihipertensivos producen hipotensión ortostática con más facilidad.' },
        { show: ['ram'], note: 'Suma de todo: más RAM, caídas y delirium',
          say: 'El resultado de todo esto es más reacciones adversas, más caídas y más delirium, justo lo que vimos en las clases anteriores.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cascada de prescripción',
      title: 'Cuando un efecto adverso parece una enfermedad nueva',
      nodes: [
        { id: 'f1', col: 0, row: 2, k: 'cause', t: 'Fármaco A', s: 'Produce un efecto adverso' },
        { id: 'ea', col: 1, row: 2, k: 'effect', t: 'Síntoma nuevo', s: 'Se interpreta como enfermedad' },
        { id: 'f2', col: 2, row: 2, k: 'trap', t: 'Fármaco B', s: 'Para tratar el efecto de A' },
        { id: 'aml', col: 3, row: 0, k: 'risk', t: 'Amlodipino → edema', s: '→ furosemida' },
        { id: 'aine', col: 3, row: 2, k: 'risk', t: 'AINE → sube la PA', s: '→ otro antihipertensivo' },
        { id: 'don', col: 3, row: 4, k: 'risk', t: 'Donepecilo → incontinencia', s: '→ oxibutinina' },
        { id: 'ok', col: 4, row: 2, k: 'good', t: 'Retirar o bajar A', s: 'No agregar B' },
      ],
      edges: [
        { from: 'f1', to: 'ea' }, { from: 'ea', to: 'f2', label: 'error' },
        { from: 'f2', to: 'aml' }, { from: 'f2', to: 'aine' }, { from: 'f2', to: 'don' },
        { from: 'aine', to: 'ok', label: 'correcto' },
      ],
      steps: [
        { show: ['f1', 'ea', 'f2'], note: 'El error: tratar el efecto adverso con otro fármaco',
          say: 'Ahora un concepto que se pregunta mucho: la cascada de prescripción. Un fármaco produce un efecto adverso, el médico lo interpreta como una enfermedad nueva, y agrega un segundo fármaco para tratar un síntoma que causó el primero.' },
        { show: ['aml', 'aine'], note: 'Ejemplos cardiovasculares',
          say: 'Los ejemplos clásicos. El amlodipino da edema de tobillos, y se indica furosemida. Un antiinflamatorio no esteroidal, un AINE, sube la presión, y se agrega otro antihipertensivo.' },
        { show: ['don'], note: 'El ejemplo favorito del examen',
          say: 'Y el favorito del examen: el donepecilo, que se usa en el Alzheimer, es colinérgico, así que produce diarrea e incontinencia de urgencia. Si se agrega oxibutinina, que es anticolinérgica, se contrarresta el propio tratamiento de la demencia y se arriesga un delirium.' },
        { show: ['ok'], note: 'La respuesta: reconocer el efecto adverso',
          say: 'La respuesta correcta siempre es la misma: reconocer el efecto adverso, y bajar la dosis o retirar el primer fármaco, en vez de agregar otro.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios de Beers y STOPP',
      title: 'Los fármacos que se evitan',
      cards: [
        { title: 'Sedantes y anticolinérgicos', tag: 'Evitar', kind: 'alert', items: [
          { t: 'Benzodiacepinas e hipnóticos Z', d: 'Caídas, fractura de cadera, delirium',
            say: 'Los criterios de Beers, de la sociedad americana de geriatría, y los criterios europeos STOPP y START, listan fármacos cuyo riesgo supera el beneficio en el adulto mayor. Los primeros son las benzodiacepinas y los hipnóticos Z, como el zolpidem y la zopiclona. Multiplican el riesgo de caídas, fractura de cadera, deterioro cognitivo y delirium. En el insomnio, la primera línea es la higiene del sueño, y el retiro de la benzodiacepina es gradual.' },
          { t: 'Anticolinérgicos', d: 'Clorfenamina, amitriptilina, pargeverina',
            say: 'Después, los anticolinérgicos: clorfenamina, hidroxicina, amitriptilina, pargeverina y ciclobenzaprina. Producen boca seca, constipación, retención urinaria, visión borrosa y confusión. Si hay alergia, se usan antihistamínicos de segunda generación, como la loratadina.' },
        ] },
        { title: 'AINE', tag: 'Evitar uso crónico', kind: 'pharma', items: [
          { t: 'Riñón, estómago, presión, corazón', d: 'HDA, falla renal, HTA, insuficiencia cardíaca',
            say: 'Los AINE, como el ibuprofeno, el diclofenaco o el ketorolaco, están contraindicados de forma crónica. Producen hemorragia digestiva, falla renal aguda por vasoconstricción de la arteriola aferente, suben la presión y descompensan la insuficiencia cardíaca.' },
          { t: 'Paracetamol, luego tramadol', d: 'En HTA o IC, antes que un AINE',
            say: 'El analgésico de primera línea es el paracetamol. Y si el dolor no cede en un paciente hipertenso o con insuficiencia cardíaca, se prefiere un opioide débil, como el tramadol, antes que un AINE.' },
        ] },
        { title: 'Glibenclamida', tag: 'Regla de oro', kind: 'key', items: [
          { t: 'Hipoglicemia grave y prolongada', d: 'Se acumula',
            say: 'Y la glibenclamida, una sulfonilurea de acción prolongada. Sus metabolitos activos se acumulan, y produce hipoglicemias graves y prolongadas.' },
          { t: 'HbA1c normal o < 7–7,5 %: suspender', d: 'Meta en > 75 años: < 8–8,5 %',
            say: 'En los mayores de setenta y cinco años la meta de hemoglobina glicosilada es más laxa, bajo ocho a ocho y medio por ciento. Entonces, si un anciano con glibenclamida llega con una hemoglobina glicosilada bajo siete a siete y medio, o normal, está sobretratado, y la conducta es suspender la glibenclamida.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Incontinencia urinaria',
      title: 'Primero, las causas transitorias: DIAPPERS',
      cards: [
        { title: 'Reversibles', tag: 'Buscar siempre', kind: 'criteria', items: [
          { t: 'Delirium e infección urinaria', d: 'D · I',
            say: 'Pasemos a la incontinencia urinaria, que afecta a un tercio o más de las mujeres mayores. Antes de clasificarla, hay que descartar las causas transitorias, con la mnemotecnia DIAPPERS. La D es el delirium, y la I, la infección urinaria.' },
          { t: 'Atrofia, psicológica, fármacos', d: 'A · P · P',
            say: 'La A es la atrofia urogenital por falta de estrógenos. La primera P es psicológica, como la depresión grave. Y la segunda P son los fármacos: diuréticos potentes, anticolinérgicos, sedantes y calcioantagonistas.' },
          { t: 'Exceso de diuresis, restricción, heces', d: 'E · R · S',
            say: 'La E es el exceso de diuresis, por hiperglicemia, hipercalcemia o sobrecarga de líquidos. La R es la restricción de la movilidad. Y la S es la retención fecal: un fecaloma que comprime la vejiga. Otra vez aparece el fecaloma, como en el delirium.' },
        ] },
        { title: 'Estudio inicial', tag: 'Simple', kind: 'normal', items: [
          { t: 'Diario miccional de 3 días', d: 'Examen ginecológico y rectal',
            say: 'El estudio inicial es simple: un diario miccional de tres días, y un examen ginecológico y rectal buscando prolapso, atrofia, el tono del esfínter y el tamaño de la próstata.' },
          { t: 'Orina, urocultivo y residuo postmiccional', d: 'RPM por ecografía',
            say: 'Además, sedimento de orina y urocultivo, para descartar infección, y el residuo postmiccional por ecografía. Ese residuo es clave, como vamos a ver.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Incontinencia crónica',
      title: 'Los cuatro tipos',
      head: ['Tipo', 'Clínica', 'Residuo postmiccional', 'Tratamiento'],
      rows: [
        { cells: ['Urgencia', 'Deseo súbito: "no alcanzo a llegar"', 'Normal', 'Entrenamiento vesical + Kegel → oxibutinina o mirabegrón'],
          say: 'Ahora los cuatro tipos de incontinencia crónica. La de urgencia es la más frecuente en los mayores de ambos sexos: un deseo súbito e incontrolable, y no alcanza a llegar al baño. Es la vejiga hiperactiva: el detrusor se contrae sin permiso durante el llenado. El residuo es normal.' },
        { cells: ['Esfuerzo', 'Gotas al toser, reír o estornudar', 'Normal', 'Kegel + estrógeno tópico → cirugía TVT o TOT'],
          say: 'La de esfuerzo son pequeñas pérdidas al toser, reír, estornudar o levantar peso. Se debe a debilidad del piso pélvico e hipermovilidad de la uretra, por partos y falta de estrógenos. El residuo también es normal.' },
        { cells: ['Rebose', 'Goteo continuo, chorro débil', 'Elevado: > 150–200 mL', 'Tamsulosina o RTU; cateterismo intermitente'],
          say: 'La de rebose es un goteo continuo de una vejiga que nunca se vacía, por obstrucción, como la hiperplasia prostática, o por una vejiga que no se contrae, como en la neuropatía diabética. La clave es el residuo postmiccional elevado, sobre ciento cincuenta a doscientos mililitros.' },
        { cells: ['Funcional', 'No llega al baño por movilidad o cognición', 'Normal', 'Adaptar el hogar, micciones programadas'],
          say: 'Y la funcional: la vía urinaria está sana, pero el paciente no llega al baño a tiempo, por inmovilidad o demencia. Se trata adaptando el entorno, con un orinal cerca y micciones programadas cada dos a tres horas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Tratamiento escalonado de la incontinencia',
      cards: [
        { title: 'Primera línea', tag: 'Para todos', kind: 'normal', items: [
          { t: 'Estilo de vida', d: 'Bajar de peso; evitar café, té, mate, alcohol',
            say: 'El tratamiento es escalonado, y la primera línea no es farmacológica para nadie. Bajar de peso, evitar irritantes vesicales como el café, el té, el mate y el alcohol, y restringir líquidos en la noche.' },
          { t: 'Entrenamiento vesical y Kegel', d: 'Micción cada 2–3 h; piso pélvico',
            say: 'Además, entrenamiento vesical con micciones programadas cada dos a tres horas, y ejercicios de Kegel para fortalecer el piso pélvico, idealmente con kinesiólogo.' },
        ] },
        { title: 'Urgencia: segunda línea', tag: 'Relajar el detrusor', kind: 'pharma', items: [
          { t: 'Antimuscarínicos', d: 'Oxibutinina 2,5–5 mg c/8–12 h, tolterodina',
            say: 'En la incontinencia de urgencia, si fallan las medidas, se relaja el detrusor. Los antimuscarínicos, como la oxibutinina, bloquean los receptores muscarínicos de la vejiga. Pero ojo: en el anciano frágil pueden causar constipación, retención y delirium.' },
          { t: 'Mirabegrón 25–50 mg/día', d: 'Elección si hay riesgo cognitivo',
            say: 'La alternativa es el mirabegrón, un agonista beta tres, que no tiene efectos anticolinérgicos centrales. Por eso es el de elección si el paciente tiene deterioro cognitivo o riesgo de delirium. Hay que vigilar la presión arterial.' },
        ] },
        { title: 'Esfuerzo y rebose', tag: 'Otra lógica', kind: 'alert', items: [
          { t: 'Esfuerzo: Kegel, luego cirugía', d: 'Estrógeno tópico si hay atrofia',
            say: 'En la de esfuerzo, Kegel, más estrógeno tópico vaginal si hay atrofia. Si fracasa, la cirugía con cintas mediouretrales, TVT o TOT.' },
          { t: 'Rebose: anticolinérgicos prohibidos', d: 'Desobstruir o cateterismo limpio intermitente',
            say: 'Y en la de rebose, regla de oro: los anticolinérgicos están contraindicados, porque apagan lo poco que se contrae la vejiga y provocan un globo vesical. Si es obstructiva, tamsulosina o resección transuretral; si la vejiga no se contrae, cateterismo limpio intermitente.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ordenemos la incontinencia en un árbol, que es como la vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Anciano con glibenclamida y HbA1c normal', 'Suspender glibenclamida', 'Mantener o subir dosis'],
          say: 'Repasemos las trampas. Anciano con glibenclamida y hemoglobina glicosilada normal: está sobretratado, y se suspende la glibenclamida.' },
        { cells: ['Donepecilo + incontinencia y diarrea', 'Bajar el donepecilo', 'Agregar oxibutinina'],
          say: 'Donepecilo con incontinencia y diarrea: es un efecto colinérgico, se baja el donepecilo. Agregar oxibutinina es la cascada de prescripción.' },
        { cells: ['Dolor artrósico con HTA o IC', 'Paracetamol, luego tramadol', 'AINE'],
          say: 'Dolor artrósico en un hipertenso o con insuficiencia cardíaca: paracetamol y luego tramadol. El AINE es el error.' },
        { cells: ['Insomnio en el adulto mayor', 'Higiene del sueño', 'Benzodiacepina o hipnótico Z'],
          say: 'Insomnio en el adulto mayor: higiene del sueño. Las benzodiacepinas y los hipnóticos Z se evitan.' },
        { cells: ['Incontinencia con residuo elevado', 'Desobstruir o cateterismo', 'Anticolinérgico'],
          say: 'Incontinencia con residuo postmiccional elevado: es rebose. Se desobstruye o se cateteriza, nunca un anticolinérgico.' },
        { cells: ['Urgencia con deterioro cognitivo', 'Mirabegrón', 'Oxibutinina'],
          say: 'Y la incontinencia de urgencia en un paciente con deterioro cognitivo: mirabegrón, porque la oxibutinina puede gatillar un delirium.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 82 años, hipertensa, con artrosis de rodillas e insomnio. Toma losartán, clonazepam 1 mg en la noche, paracetamol 1 g c/8 h, ibuprofeno 400 mg c/8 h (desde hace 3 semanas) y clorfenamina 4 mg en la noche "para dormir". Creatinina 1,6 mg/dL (basal 0,9), K 5,2 mEq/L, PA 165/95. Ha tenido dos caídas nocturnas y pierde gotas de orina al toser o reír.',
      question: '¿Cuál es la conducta prioritaria?',
      options: [
        { letter: 'A', text: 'Agregar amlodipino y oxibutinina' },
        { letter: 'B', text: 'Suspender ibuprofeno y clorfenamina, retiro gradual del clonazepam y ejercicios de Kegel' },
        { letter: 'C', text: 'Suspender bruscamente el clonazepam e iniciar zolpidem' },
        { letter: 'D', text: 'Cambiar ibuprofeno por ketorolaco y derivar a urología' },
        { letter: 'E', text: 'Mantener los fármacos y solicitar ecografía renal' },
      ],
      correct: 'B',
      explanation: 'Polifarmacia con fármacos de Beers: el ibuprofeno produjo falla renal aguda, hiperkalemia y alza de PA; clonazepam y clorfenamina suman carga sedante y anticolinérgica y explican las caídas. La pérdida al toser o reír es incontinencia de esfuerzo. Conducta: suspender ibuprofeno y clorfenamina, retiro gradual del clonazepam, paracetamol como base y Kegel.',
      say: {
        stem: 'Vamos al caso. Mujer de ochenta y dos años, hipertensa, con artrosis e insomnio. Toma losartán, clonazepam en la noche, paracetamol, ibuprofeno desde hace tres semanas, y clorfenamina para dormir. Su creatinina subió de cero coma nueve a uno coma seis, el potasio está alto y la presión está en ciento sesenta y cinco. Además, se ha caído dos veces en la noche, y pierde gotas de orina al toser o reírse.',
        question: '¿Cuál es la conducta prioritaria?',
        options: 'Las opciones son: agregar amlodipino y oxibutinina; suspender ibuprofeno y clorfenamina, retirar gradualmente el clonazepam y Kegel; cortar el clonazepam y dar zolpidem; cambiar a ketorolaco; o mantener todo y pedir una ecografía. Piénsalo.',
        answer: 'La respuesta es la B. El ibuprofeno le dañó el riñón, le subió el potasio y la presión. El clonazepam y la clorfenamina explican las caídas. Y la pérdida al toser es incontinencia de esfuerzo, que se trata con Kegel. La A es la cascada de prescripción perfecta: tratar con fármacos lo que causaron otros fármacos. Y la C cae porque la benzodiacepina se retira de forma gradual, y el zolpidem también se evita.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 127',
      stem: 'Un paciente de 82 años, con múltiples patologías con tratamiento farmacológico, presenta TSH: 3,8 UI/L y hemoglobina glicosilada de 5,2%.',
      question: '¿Qué fármaco debe suspender?',
      options: [
        { letter: 'A', text: 'Vitamina D' },
        { letter: 'B', text: 'Glibenclamida' },
        { letter: 'C', text: 'Enalapril' },
        { letter: 'D', text: 'Levotiroxina' },
        { letter: 'E', text: 'Calcio' },
      ],
      correct: 'B',
      explanation: 'En el mayor de 75 años la meta de HbA1c es más laxa (< 8 %). Con 5,2 % está sobretratado y la glibenclamida conlleva riesgo de hipoglicemia grave: se suspende. La TSH de 3,8 es adecuada para la edad.',
      say: {
        stem: 'Ahora preguntas reales. La primera es del EUNACOM de julio de dos mil diecinueve. Paciente de ochenta y dos años, con muchas patologías y fármacos, con una TSH de tres coma ocho y una hemoglobina glicosilada de cinco coma dos por ciento.',
        question: '¿Qué fármaco debe suspender?',
        options: 'Las opciones son: vitamina D, glibenclamida, enalapril, levotiroxina o calcio. Piénsalo.',
        answer: 'Es la B, glibenclamida. Una hemoglobina glicosilada de cinco coma dos en un paciente de ochenta y dos años es un sobretratamiento, y la glibenclamida lo expone a hipoglicemias graves. La levotiroxina es el distractor, pero una TSH de tres coma ocho está bien para su edad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 121',
      stem: 'Un paciente de 80 años, con antecedente de enfermedad de Alzheimer, hipotiroidismo y artrosis, en tratamiento con donepecilo, levotiroxina y paracetamol, presenta escapes frecuentes de orina y diarrea.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Agregar memantina' },
        { letter: 'B', text: 'Disminuir la dosis de levotiroxina' },
        { letter: 'C', text: 'Agregar oxibutinina' },
        { letter: 'D', text: 'Disminuir la dosis de donepecilo' },
        { letter: 'E', text: 'Aumentar la dosis de levotiroxina' },
      ],
      correct: 'D',
      explanation: 'Incontinencia de urgencia y diarrea por exceso de estímulo colinérgico del donepecilo. Se reduce la dosis; agregar oxibutinina sería una cascada de prescripción.',
      say: {
        stem: 'Segunda pregunta, del EUNACOM de diciembre de dos mil dieciocho. Paciente de ochenta años con Alzheimer, hipotiroidismo y artrosis, que toma donepecilo, levotiroxina y paracetamol. Presenta escapes frecuentes de orina y diarrea.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: agregar memantina, bajar la levotiroxina, agregar oxibutinina, bajar el donepecilo, o subir la levotiroxina. Piénsalo.',
        answer: 'Es la D, disminuir el donepecilo. La diarrea y la incontinencia son su efecto colinérgico. La trampa es la C, agregar oxibutinina: es exactamente la cascada de prescripción que vimos, y además un anticolinérgico en un paciente con demencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 9',
      stem: 'Paciente 80 años con antecedente de artrosis en tratamiento con paracetamol 1 gr c/8 horas, con control parcial del dolor. Realiza adecuadamente sus actividades de la vida diaria, usa bastón y sale acompañada. Tiene antecedente de HTA e Insuficiencia cardíaca congestiva en capacidad funcional III.',
      question: '¿Cuál es el mejor fármaco a agregar para continuar el manejo del dolor?',
      options: [
        { letter: 'A', text: 'Ibuprofeno v.o.' },
        { letter: 'B', text: 'Pregabalina v.o.' },
        { letter: 'C', text: 'Ketorolaco v.o.' },
        { letter: 'D', text: 'Lidocaína en parches' },
        { letter: 'E', text: 'Tramadol v.o.' },
      ],
      correct: 'E',
      explanation: 'Paracetamol con control parcial en una paciente con HTA e insuficiencia cardíaca: los AINE están contraindicados (retención hidrosalina, falla renal, alza de PA). Se prefiere titular un opioide débil como tramadol.',
      say: {
        stem: 'Tercera pregunta, del EUNACOM de julio de dos mil dieciséis. Mujer de ochenta años con artrosis, que toma paracetamol un gramo cada ocho horas con alivio parcial. Es hipertensa y tiene insuficiencia cardíaca en capacidad funcional tres.',
        question: '¿Cuál es el mejor fármaco a agregar para el dolor?',
        options: 'Las opciones son: ibuprofeno, pregabalina, ketorolaco, lidocaína en parches, o tramadol. Piénsalo.',
        answer: 'Es la E, tramadol. Con hipertensión e insuficiencia cardíaca, los AINE están contraindicados: retienen sodio y agua, dañan el riñón y descompensan el corazón. Por eso caen el ibuprofeno y el ketorolaco, que son los distractores tentadores. El siguiente escalón es un opioide débil.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 121',
      stem: 'Una paciente de 60 años presenta incontinencia urinaria de 2 años de evolución, caracterizada por escapes de orina precedidos por urgencia miccional incontrolable, por lo que utiliza 3 a 5 protectores al día. Su examen físico es normal, al igual que su exploración ginecológica. Se solicita una ecografía abdominal que muestra vía urinaria de calibre normal y vejiga urinaria sin lesiones, con residuo postmiccional de 30 cc.',
      question: '¿Qué fármaco es más adecuado como tratamiento de primera línea?',
      options: [
        { letter: 'A', text: 'Bloqueadores alfa adrenérgicos' },
        { letter: 'B', text: 'Bloqueadores beta adrenérgicos' },
        { letter: 'C', text: 'Agonistas adrenérgicos' },
        { letter: 'D', text: 'Anticolinérgicos muscarínicos' },
        { letter: 'E', text: 'Estrógenos' },
      ],
      correct: 'D',
      explanation: 'Urgencia miccional con residuo normal: incontinencia de urgencia. Tras las medidas conductuales y el entrenamiento vesical, el fármaco clásico son los antimuscarínicos (oxibutinina, tolterodina). El mirabegrón (agonista beta-3) se prefiere si hay deterioro cognitivo o riesgo de delirium.',
      say: {
        stem: 'Cuarta pregunta, del EUNACOM de diciembre de dos mil veinticinco. Mujer de sesenta años con dos años de escapes de orina precedidos por una urgencia incontrolable. El examen es normal, y la ecografía muestra un residuo postmiccional de treinta centímetros cúbicos.',
        question: '¿Qué fármaco es más adecuado como primera línea?',
        options: 'Las opciones son: alfabloqueadores, betabloqueadores, agonistas adrenérgicos, anticolinérgicos muscarínicos, o estrógenos. Piénsalo.',
        answer: 'Es la D, anticolinérgicos muscarínicos. Es una incontinencia de urgencia, con residuo normal, y fíjate que la pregunta pide un fármaco: las medidas conductuales siguen siendo la base. El mirabegrón, un agonista beta tres, sería la opción en un paciente con deterioro cognitivo, pero esta paciente tiene sesenta años y está sana.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 76',
      stem: 'Una mujer de 65 años de edad, multípara de 4, con todos los partos por vía vaginal, con menopausia a 50 años, sin terapia de reemplazo hormonal, presenta escape de pequeñas cantidades de orinal, al realizar esfuerzos, así como al toser o reírse, lo que la obliga a usar protectores. No tiene urgencia miccional. Su examen físico no aporta mayor información, pero es posible visualizar leve escape de orina, al toser.',
      question: '¿Cuál es el tratamiento de primera línea para esta paciente?',
      options: [
        { letter: 'A', text: 'Cirugía (TVT)' },
        { letter: 'B', text: 'Anticolinérgicos' },
        { letter: 'C', text: 'Alfa adrenérgicos' },
        { letter: 'D', text: 'Kinesioterapia del piso pélvico' },
        { letter: 'E', text: 'Antibióticos, como profilaxis de ITU' },
      ],
      correct: 'D',
      explanation: 'Pérdidas pequeñas con tos, risa y esfuerzos, sin urgencia, en multípara posmenopáusica: incontinencia de esfuerzo. Primera línea: kinesioterapia del piso pélvico (Kegel); la cirugía TVT o TOT queda si fracasa.',
      say: {
        stem: 'Quinta pregunta, del EUNACOM de julio de dos mil dieciséis. Mujer de sesenta y cinco años, multípara de cuatro partos vaginales, posmenopáusica, que pierde pequeñas cantidades de orina al hacer esfuerzos, toser o reírse, sin urgencia.',
        question: '¿Cuál es el tratamiento de primera línea?',
        options: 'Las opciones son: cirugía TVT, anticolinérgicos, alfa adrenérgicos, kinesioterapia del piso pélvico, o antibióticos. Piénsalo.',
        answer: 'Es la D, kinesioterapia del piso pélvico. Es una incontinencia de esfuerzo típica: partos, menopausia y pérdida con la tos. La cirugía es tentadora porque es el tratamiento definitivo, pero va después, si fallan los ejercicios.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 48',
      stem: 'Una paciente de 69 años diabética, mal controlada, presenta escapes de orina. Ademá ha presentado algunas infecciones urinarias. Su urocultivo actual está negativo, pero consulta por la incontinencia urinaria. Se realiza una ecografía que muestra una vejiga de paredes lisas, con volumen urinario de 930cc y residuo postmiccional de 750cc.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Resolver quirúrgicamente' },
        { letter: 'B', text: 'Instalar una sonda Foley' },
        { letter: 'C', text: 'Realizar cateterismo intermitente' },
        { letter: 'D', text: 'Indicar anticolinérgicos' },
        { letter: 'E', text: 'Indicar colinérgicos' },
      ],
      correct: 'C',
      explanation: 'Residuo postmiccional muy elevado en una diabética mal controlada: incontinencia por rebose por vejiga acontráctil (neuropatía diabética). Se trata con cateterismo limpio intermitente; los anticolinérgicos están contraindicados.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil quince. Mujer de sesenta y nueve años, diabética mal controlada, con escapes de orina e infecciones urinarias a repetición. La ecografía muestra una vejiga con novecientos treinta centímetros cúbicos y un residuo postmiccional de setecientos cincuenta.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: cirugía, sonda Foley, cateterismo intermitente, anticolinérgicos, o colinérgicos. Piénsalo.',
        answer: 'Es la C, cateterismo intermitente. Un residuo de setecientos cincuenta es rebose, y en una diabética mal controlada la causa es una vejiga que no se contrae por neuropatía. Se vacía con cateterismo limpio intermitente. La trampa es la D: los anticolinérgicos están prohibidos en el rebose, porque empeoran la retención.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Polifarmacia', tag: 'Revisar antes de agregar', kind: 'alert', items: [
          { t: 'Creatinina normal engaña', d: 'Calcular Cockcroft-Gault',
            say: 'Cerremos el bloque. En el anciano, una creatinina normal no descarta insuficiencia renal: calcula el clearance.' },
          { t: 'Cascada de prescripción', d: 'Donepecilo → no agregar oxibutinina',
            say: 'Si aparece un síntoma nuevo, primero pregunta si lo causó un fármaco, como el donepecilo con la incontinencia.' },
          { t: 'Evitar BZD, anticolinérgicos, AINE, glibenclamida', d: 'Criterios de Beers y STOPP',
            say: 'Y evita benzodiacepinas, anticolinérgicos, AINE crónicos y glibenclamida.' },
        ] },
        { title: 'Incontinencia', tag: 'El residuo decide', kind: 'key', items: [
          { t: 'Primero DIAPPERS', d: 'Causas transitorias',
            say: 'En la incontinencia, primero descarta las causas transitorias con DIAPPERS.' },
          { t: 'Urgencia · esfuerzo · rebose', d: 'Residuo alto: nunca anticolinérgicos',
            say: 'Si te llevas una sola idea de hoy: antes de agregar un fármaco, revisa los que ya toma; y en la incontinencia, mide el residuo, porque si está alto, el anticolinérgico está prohibido. Con esto cerramos geriatría. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Adulto mayor con incontinencia urinaria',
    root: N('start', 'Incontinencia urinaria', 'Adulto mayor',
      'Adulto mayor con pérdida involuntaria de orina. Antes de clasificarla, hay que buscar lo reversible.',
      ['', N('q', '¿Causa transitoria?', 'DIAPPERS',
        '¿Hay una causa transitoria, como infección urinaria, delirium, fármacos, hiperglicemia o fecaloma?',
        ['SÍ', N('ok', 'Corregir la causa', 'ITU, fármaco, fecaloma',
          'Si la hay, se corrige y la incontinencia suele resolverse.')],
        ['NO', N('q', '¿Residuo postmiccional elevado?', '> 150–200 mL',
          'Si no, mide el residuo postmiccional. Esta es la bifurcación clave.',
          ['SÍ', N('alert', 'Rebose', 'Tamsulosina o RTU; cateterismo',
            'Residuo alto: rebose. Desobstruir con tamsulosina o resección si es la próstata, o cateterismo limpio intermitente si la vejiga no se contrae. Nunca anticolinérgicos.')],
          ['NO', N('q', '¿Cuándo pierde orina?', 'Urgencia, esfuerzo o no llega',
            'Residuo normal: ¿cuándo pierde la orina?',
            ['Urgencia', N('do', 'Urgencia', 'Medidas → oxibutinina o mirabegrón',
              'Con un deseo súbito: urgencia. Entrenamiento vesical y Kegel, y luego oxibutinina, o mirabegrón si hay riesgo cognitivo.')],
            ['Esfuerzo', N('do', 'Esfuerzo', 'Kegel → cirugía TVT o TOT',
              'Al toser o reír: esfuerzo. Kegel y estrógeno tópico, y cirugía si fracasa.')],
            ['No llega al baño', N('refer', 'Funcional', 'Adaptar entorno',
              'Si no llega por movilidad o cognición: funcional. Orinal cerca y micciones programadas.')])])])]),
  },
};
