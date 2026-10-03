// Clase 5.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_infectologia.cjs (inf-22).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-22',
  tier: 1,
  slides: [
    {
      type: 'cover',
      subtitle: 'La boca y la cara te dicen el diagnóstico; en Kawasaki, el corazón decide el apuro',
      say: 'Bienvenidos. Seguimos con los exantemas febriles de la infancia: sarampión, rubéola, escarlatina, eritema infeccioso y enfermedad de Kawasaki. En la clase anterior ya vimos el exantema de la mononucleosis. Hoy el truco es mirar la boca, la cara y los ganglios, porque cada exantema deja una firma. Y uno de ellos, el Kawasaki, no se puede dejar pasar, porque daña las coronarias. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Sarampión',
      title: 'Sarampión: muy contagioso y con Koplik',
      cards: [
        { title: 'Pródromo', tag: 'Paramixovirus', kind: 'key', items: [
          { t: 'Transmisión aérea', d: 'Altísima contagiosidad: R0 12 a 18',
            say: 'Partamos por el sarampión. Es un paramixovirus de transmisión aérea, y es de los virus más contagiosos que existen: un enfermo contagia a doce a dieciocho personas.' },
          { t: 'Fiebre, tos, coriza, conjuntivitis', d: 'Fotofobia: facies gripal llorosa',
            say: 'Antes del exantema hay un pródromo muy florido: fiebre alta, tos perruna, coriza acuosa intensa y conjuntivitis con mucha fotofobia. El niño se ve resfriado y lloroso: la facies gripal llorosa.' },
        ] },
        { title: 'Enantema', tag: 'Patognomónico', kind: 'alert', items: [
          { t: 'Manchas de Koplik', d: 'Mucosa yugal, frente al 2.º molar superior',
            say: 'Y aquí está su firma: las manchas de Koplik. Son pápulas blanquecinas milimétricas en la mucosa de la mejilla, frente al segundo molar superior.' },
          { t: 'Preceden al exantema', d: 'En 24 a 48 horas',
            say: 'Aparecen uno a dos días antes del exantema. Por eso, si miras la boca a tiempo, haces el diagnóstico antes de que salga el rash.' },
        ] },
        { title: 'Exantema', tag: 'Céfalo-caudal lento', kind: 'normal', items: [
          { t: 'Maculopapular confluente', d: 'Parte detrás de las orejas',
            say: 'El exantema es maculopapular y confluente. Parte detrás de las orejas y baja lentamente, de la cabeza a los pies.' },
          { t: 'Descama en salvado', d: 'Deja pigmentación parduzca',
            say: 'Y al irse descama en láminas finas, en salvado, dejando una pigmentación parduzca.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Rubéola',
      title: 'Rubéola: leve, con ganglios detrás de la oreja',
      cards: [
        { title: 'Clínica', tag: 'Togavirus', kind: 'key', items: [
          { t: 'Pródromo escaso', d: 'Cuadro mucho más leve',
            say: 'La rubéola es un togavirus, y es un cuadro mucho más leve que el sarampión, con un pródromo escaso.' },
          { t: 'Adenopatías retroauriculares', d: 'Suboccipitales y cervicales posteriores, dolorosas',
            say: 'Su firma no está en la boca, está en el cuello: adenopatías retroauriculares, suboccipitales y cervicales posteriores, muy dolorosas. Si en el examen te describen ganglios detrás de la oreja, piensa rubéola.' },
        ] },
        { title: 'Exantema', tag: 'Sarampión de 3 días', kind: 'normal', items: [
          { t: 'Máculas rosadas no confluentes', d: 'Progresión céfalo-caudal rápida',
            say: 'El exantema son máculas rosadas que no confluyen, y bajan de la cabeza a los pies, pero rápido.' },
          { t: 'Desaparece en 3 días', d: 'Enantema: manchas de Forchheimer',
            say: 'Desaparece en unos tres días, por eso le dicen el sarampión de tres días. En la boca puede haber manchas de Forchheimer, que son petequias en el paladar blando.' },
        ] },
        { title: 'Salud pública', tag: 'Notificación inmediata', kind: 'alert', items: [
          { t: 'Sarampión y rubéola', d: 'Enfermedades de notificación obligatoria inmediata',
            say: 'Y un punto que se pregunta: tanto el sarampión como la rubéola son enfermedades de notificación obligatoria inmediata. Basta la sospecha para notificar. Recuerda además que la rubéola en el embarazo da la tríada de Gregg que vimos en el TORCH.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Escarlatina',
      title: 'Escarlatina: la faringitis con toxina',
      cards: [
        { title: 'Origen', tag: 'Streptococcus pyogenes', kind: 'key', items: [
          { t: 'Faringoamigdalitis estreptocócica', d: 'Cepa con exotoxina pirogénica',
            say: 'La escarlatina es distinta: es bacteriana. Nace de una faringoamigdalitis por Streptococcus pyogenes, una cepa productora de exotoxina pirogénica. La toxina es la que pinta la piel.' },
          { t: 'Exantema en papel de lija', d: 'Micropapular áspero, piel de gallina',
            say: 'El exantema es micropapular, difuso, y lo característico es el tacto: áspero, como papel de lija, o piel de gallina.' },
        ] },
        { title: 'Signos patognomónicos', tag: 'Se preguntan', kind: 'alert', items: [
          { t: 'Líneas de Pastia', d: 'En pliegues antecubitales e inguinales',
            say: 'Tiene tres signos que se preguntan. Las líneas de Pastia: hiperpigmentación petequial lineal en los pliegues del codo y de la ingle.' },
          { t: 'Facies de Filatov', d: 'Mejillas rojas con palidez peribucal',
            say: 'La facies de Filatov: mejillas y frente muy rojas, con palidez alrededor de la boca.' },
          { t: 'Lengua en fresa, luego frambuesa', d: 'Blanca los 2 primeros días, roja al día 4–5',
            say: 'Y la lengua: primero en fresa blanca, los dos primeros días, y luego en frambuesa roja descamada, hacia el cuarto o quinto día.' },
        ] },
        { title: 'Tratamiento', tag: 'Prevenir fiebre reumática', kind: 'pharma', items: [
          { t: 'Amoxicilina 50 mg/kg/día', d: '10 días completos',
            say: 'Y como es bacteriana, se trata: amoxicilina oral, cincuenta miligramos por kilo al día, por diez días completos. O penicilina benzatina intramuscular en dosis única.' },
          { t: 'Objetivo: fiebre reumática', d: 'Pautas cortas no la previenen',
            say: 'El objetivo no es solo mejorar al niño, es prevenir la fiebre reumática. Por eso los diez días completos no se negocian.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Eritema infeccioso',
      title: 'Parvovirus B19: bofetada y encaje',
      cards: [
        { title: 'Clínica', tag: 'Quinta enfermedad', kind: 'key', items: [
          { t: 'Signo de la bofetada', d: 'Ambas mejillas rojo encendido',
            say: 'El eritema infeccioso, o quinta enfermedad, lo produce el parvovirus B diecinueve. Parte con el signo de la bofetada: las dos mejillas de un rojo encendido y brillante, con palidez alrededor de la boca.' },
          { t: 'Exantema reticulado en encaje', d: 'A los 2–3 días, tronco y extremidades',
            say: 'A los dos o tres días aparece un exantema en el tronco y las extremidades con un patrón reticulado, en encaje.' },
          { t: 'Recidiva con calor o sol', d: 'Dato de examen',
            say: 'Y un detalle que se pregunta: el exantema reaparece con el calor o la exposición al sol.' },
        ] },
        { title: 'Por qué importa', tag: 'Tropismo eritroide', kind: 'alert', items: [
          { t: 'Crisis aplásica', d: 'Con anemia hemolítica previa',
            say: 'El virus tiene afinidad por los precursores de los glóbulos rojos. En un niño sano no pasa nada, pero en uno con anemia hemolítica, como drepanocitosis o esferocitosis, puede provocar una crisis aplásica severa.' },
          { t: 'Hidrops fetal', d: 'En la embarazada',
            say: 'Y en la embarazada, el mismo mecanismo puede producir hidrops fetal.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Enfermedad de Kawasaki',
      title: 'Kawasaki: una vasculitis que busca las coronarias',
      nodes: [
        { id: 'vas', col: 0, row: 1, k: 'cause', t: 'Vasculitis de mediano calibre', s: 'Necrotizante, menores de 5 años' },
        { id: 'fie', col: 1, row: 0, k: 'effect', t: 'Fiebre ≥ 5 días', s: 'Refractaria a antipiréticos' },
        { id: 'cor', col: 1, row: 2, k: 'risk', t: 'Arterias coronarias', s: 'Aneurismas en 25% sin tratamiento' },
        { id: 'tto', col: 2, row: 1, k: 'good', t: 'IGEV 2 g/kg + aspirina', s: 'Antes del día 10 de fiebre' },
        { id: 'res', col: 3, row: 1, k: 'good', t: 'Aneurismas < 3–5%', s: 'Cardioprotección' },
      ],
      edges: [
        { from: 'vas', to: 'fie' }, { from: 'vas', to: 'cor', label: 'fase subaguda' },
        { from: 'cor', to: 'tto', label: 'se previene con' }, { from: 'tto', to: 'res' },
      ],
      steps: [
        { show: ['vas'], note: 'Primera causa de cardiopatía adquirida en la infancia',
          say: 'Ahora el más importante. La enfermedad de Kawasaki no es una infección: es una vasculitis necrotizante de vasos de mediano calibre, en lactantes y preescolares menores de cinco años. Y es la primera causa de cardiopatía adquirida en la infancia.' },
        { show: ['fie'], note: 'La fiebre larga es la puerta de entrada',
          say: 'Se presenta con fiebre alta, de cinco días o más, que no cede con los antipiréticos habituales. Esa fiebre larga es la que te obliga a pensar en Kawasaki.' },
        { show: ['cor'], note: 'La complicación temida',
          say: '¿Por qué importa tanto? Porque la vasculitis ataca las arterias coronarias. Sin tratamiento, uno de cada cuatro niños desarrolla aneurismas coronarios en la fase subaguda, con riesgo de infarto y muerte súbita.' },
        { show: ['tto'], note: 'Tratamiento de urgencia',
          say: 'El tratamiento es de urgencia: inmunoglobulina endovenosa, dos gramos por kilo en una infusión única, más aspirina en dosis antiinflamatoria, treinta a cincuenta miligramos por kilo al día. Idealmente antes del décimo día de fiebre.' },
        { show: ['res'], note: 'Del 25% a menos del 3 a 5%',
          say: 'Con eso, el riesgo de aneurismas baja del veinticinco por ciento a menos del tres a cinco por ciento. Ese es el objetivo del tratamiento, y es lo que te van a preguntar.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios de Kawasaki',
      title: 'Fiebre de 5 días + 4 de 5 signos',
      cards: [
        { title: 'Ojos y boca', tag: 'Criterios 1 y 2', kind: 'criteria', items: [
          { t: 'Conjuntivitis bulbar bilateral', d: 'No exudativa: sin pus',
            say: 'Los criterios son fiebre de cinco días o más, más al menos cuatro de cinco signos. El primero, inyección conjuntival bilateral, bulbar, y sin pus. Ojo rojo seco.' },
          { t: 'Labios fisurados y lengua en frambuesa', d: 'Más eritema faríngeo',
            say: 'El segundo, cambios en la boca: labios rojos y fisurados, faringe eritematosa y lengua en frambuesa. Fíjate que la lengua en frambuesa también aparece en la escarlatina: no te sirve sola para separarlas.' },
        ] },
        { title: 'Piel y extremidades', tag: 'Criterios 3 y 4', kind: 'criteria', items: [
          { t: 'Edema indurado de manos y pies', d: 'Luego descamación en dedo de guante',
            say: 'El tercero, las extremidades: edema duro y eritema en palmas y plantas en la fase aguda, y después descamación alrededor de las uñas, en dedo de guante.' },
          { t: 'Exantema polimorfo', d: 'Nunca vesicular',
            say: 'El cuarto, un exantema polimorfo difuso, que puede ser de cualquier tipo menos vesicular.' },
        ] },
        { title: 'Cuello', tag: 'Criterio 5', kind: 'criteria', items: [
          { t: 'Adenopatía cervical unilateral', d: '≥ 1,5 cm, no purulenta',
            say: 'Y el quinto, una adenopatía cervical única, unilateral, de uno coma cinco centímetros o más, que no supura.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos los exantemas en un árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'La firma de cada exantema',
      head: ['Enfermedad', 'Signo patognomónico', 'Exantema', 'Conducta'],
      rows: [
        { cells: ['Sarampión (paramixovirus)', 'Manchas de Koplik', 'Maculopapular confluente, céfalo-caudal', 'Vitamina A + soporte; notificar'],
          say: 'Repasemos las firmas. Sarampión: manchas de Koplik y exantema confluente que baja lento. Se da vitamina A y soporte, y se notifica de inmediato.' },
        { cells: ['Rubéola (togavirus)', 'Adenopatías retroauriculares + Forchheimer', 'Macular rosado no confluente, 3 días', 'Soporte; notificar'],
          say: 'Rubéola: ganglios retroauriculares y un exantema rosado que dura tres días. Soporte, y también se notifica.' },
        { cells: ['Escarlatina (S. pyogenes)', 'Pastia, Filatov, lengua en frambuesa', 'Micropapular áspero en papel de lija', 'Amoxicilina 10 días'],
          say: 'Escarlatina: Pastia, Filatov y piel de lija. Es la única bacteriana de la tabla, así que es la única que lleva antibiótico: amoxicilina por diez días.' },
        { cells: ['Eritema infeccioso (parvovirus B19)', 'Signo de la bofetada', 'Reticulado en encaje', 'Sintomático; ojo crisis aplásica'],
          say: 'Eritema infeccioso: bofetada y encaje, con manejo sintomático, pero atento a la crisis aplásica.' },
        { cells: ['Kawasaki (vasculitis)', 'Labios fisurados + conjuntivitis seca', 'Polimorfo + fiebre ≥ 5 días', 'IGEV 2 g/kg + aspirina'],
          say: 'Y Kawasaki: labios fisurados, ojo rojo seco y fiebre de cinco días. Inmunoglobulina endovenosa y aspirina. La trampa es tratarlo como escarlatina porque tiene lengua en frambuesa.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Niño de 3 años con fiebre de 39,5 °C de 6 días que no cede con paracetamol ni ibuprofeno. Tiene inyección conjuntival bilateral intensa sin secreción, labios eritematosos secos con fisuras sangrantes, lengua aframbuesada, exantema maculopapular en tronco y edema duro con eritema en palmas y plantas. Ganglio cervical derecho único de 2 cm, no fluctuante. El ecocardiograma inicial no muestra alteraciones coronarias.',
      question: '¿Cuál es la conducta terapéutica inmediata?',
      options: [
        { letter: 'A', text: 'Amoxicilina oral 50 mg/kg/día por 10 días' },
        { letter: 'B', text: 'Inmunoglobulina endovenosa 2 g/kg en infusión única + aspirina' },
        { letter: 'C', text: 'Corticoides orales y control ambulatorio' },
        { letter: 'D', text: 'Observación, ya que el ecocardiograma es normal' },
        { letter: 'E', text: 'Vitamina A oral y notificación inmediata' },
      ],
      correct: 'B',
      explanation: 'Fiebre ≥ 5 días + 5 de 5 criterios (conjuntivitis no exudativa, cambios orales, edema palmoplantar, exantema polimorfo, adenopatía cervical unilateral ≥ 1,5 cm): enfermedad de Kawasaki. IGEV 2 g/kg en infusión única + aspirina 30–50 mg/kg/día, antes del día 10 de fiebre, para prevenir los aneurismas coronarios. Un ecocardiograma inicial normal no permite observar.',
      say: {
        stem: 'Vamos al caso. Niño de tres años con seis días de fiebre de treinta y nueve y medio que no cede con paracetamol ni ibuprofeno. Tiene los ojos muy rojos sin secreción, labios secos con fisuras que sangran, lengua aframbuesada, exantema en el tronco y edema duro en palmas y plantas. Hay un ganglio cervical derecho de dos centímetros. El ecocardiograma inicial es normal.',
        question: '¿Cuál es la conducta terapéutica inmediata?',
        options: 'Las opciones: amoxicilina por diez días, inmunoglobulina endovenosa más aspirina, corticoides orales, observar porque el ecocardiograma es normal, o vitamina A y notificar. Piénsalo.',
        answer: 'Es la B. Fiebre de seis días con los cinco criterios: Kawasaki. Inmunoglobulina endovenosa, dos gramos por kilo, más aspirina, para prevenir los aneurismas. La D es la trampa: el ecocardiograma normal no te da permiso para esperar, porque los aneurismas aparecen en la fase subaguda y el tratamiento sirve justamente para evitarlos. La amoxicilina tienta por la lengua en frambuesa, pero no es escarlatina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 23',
      stem: 'Un lactante de 10 meses de edad presenta eritema en la cara, que al día siguiente se generaliza. Al examen físico tiene un exantema rosado macular tenue, asociado a adenopatías retroauriculares y cervicales posteriores.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Eritema infeccioso' },
        { letter: 'B', text: 'Rubéola' },
        { letter: 'C', text: 'Exantema por citomegalovirus' },
        { letter: 'D', text: 'Sarampión' },
        { letter: 'E', text: 'Exantema súbito' },
      ],
      correct: 'B',
      explanation: 'Exantema macular rosado tenue de progresión rápida con adenopatías retroauriculares y cervicales posteriores: rubéola. Con menos de un año, aún no recibe la vacuna tresvírica.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de julio de dos mil diecinueve. Lactante de diez meses con eritema en la cara que al día siguiente se generaliza. Tiene un exantema rosado macular tenue, con adenopatías retroauriculares y cervicales posteriores.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: eritema infeccioso, rubéola, exantema por citomegalovirus, sarampión, o exantema súbito. Piénsalo.',
        answer: 'Es la B, rubéola. Exantema rosado tenue que baja rápido, con ganglios retroauriculares: esa es su firma. El sarampión tienta porque también es céfalo-caudal, pero es confluente, con un pródromo intenso y manchas de Koplik. Y con diez meses, este niño todavía no ha recibido la vacuna.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 127',
      stem: 'Un prescolar de 4 años presenta un cuadro de fiebre hasta 38 grados, asociado a eritema en las mejillas, que aumenta en los periodo de fiebre y con el calor y se vuelve más pálido cuando no hay fiebre. Luego se agrega un exantema reticular en el tronco.',
      question: '¿Cuál es el agente etiológico más probable?',
      options: [
        { letter: 'A', text: 'Virus rubéola' },
        { letter: 'B', text: 'Virus Coxsackie' },
        { letter: 'C', text: 'Parvovirus B19' },
        { letter: 'D', text: 'Streptococcus pyogenes' },
        { letter: 'E', text: 'Virus herpes 6' },
      ],
      correct: 'C',
      explanation: 'Eritema de mejillas (signo de la bofetada) que se acentúa con el calor, seguido de exantema reticular en el tronco: eritema infeccioso por parvovirus B19.',
      say: {
        stem: 'Otra real, del EUNACOM de diciembre de dos mil diecisiete. Preescolar de cuatro años con fiebre hasta treinta y ocho y eritema en las mejillas, que aumenta con la fiebre y el calor. Luego aparece un exantema reticular en el tronco.',
        question: '¿Cuál es el agente etiológico más probable?',
        options: 'Las opciones: rubéola, Coxsackie, parvovirus B diecinueve, Streptococcus pyogenes, o herpes seis. Piénsalo.',
        answer: 'Es la C, parvovirus B diecinueve. Mejillas rojas como una bofetada, que se acentúan con el calor, y después un exantema reticulado: eritema infeccioso. El estreptococo tienta por las mejillas rojas de la facies de Filatov, pero la escarlatina viene con faringitis y piel de lija, no con un patrón en encaje.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 71',
      stem: 'Un niño de 7 años, consulta por fiebre, malestar general y dolor de garganta, a lo que se le agregó un exantema. Al examen físico presenta adenopatías cervicales anteriores sensibles y un rash generalizado, mayor en los pliegues de los codos y axilas. La piel se palpa áspera.',
      question: '¿Cuál es el agente más probable?',
      options: [
        { letter: 'A', text: 'Virus de Ebstein Baar' },
        { letter: 'B', text: 'Virus sarampión' },
        { letter: 'C', text: 'Estreptococo betahemolítico grupo A' },
        { letter: 'D', text: 'Virus rubéola' },
        { letter: 'E', text: 'Estafilococo aúreo' },
      ],
      correct: 'C',
      explanation: 'Faringitis con adenopatías cervicales anteriores y exantema áspero acentuado en pliegues (líneas de Pastia): escarlatina por Streptococcus pyogenes. Se trata con amoxicilina por 10 días.',
      say: {
        stem: 'Una real sobre escarlatina, del EUNACOM de diciembre de dos mil dieciocho. Niño de siete años con fiebre, malestar y dolor de garganta, al que se le agrega un exantema. Tiene adenopatías cervicales anteriores sensibles y un rash generalizado, más marcado en los pliegues de los codos y las axilas. La piel se palpa áspera.',
        question: '¿Cuál es el agente más probable?',
        options: 'Las opciones: Epstein-Barr, sarampión, estreptococo betahemolítico del grupo A, rubéola, o Staphylococcus aureus. Piénsalo.',
        answer: 'Es la C, estreptococo del grupo A. Faringitis, piel áspera como lija y exantema más marcado en los pliegues, que son las líneas de Pastia: escarlatina. El Epstein-Barr tienta por la faringitis, pero recuerda la clase anterior: sus ganglios son posteriores y su exantema aparece tras la amoxicilina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 11',
      stem: 'Niño de 8 años con fiebre de 39°C por 7 días de evolución, exantema polimorfo, adenopatías cervicales, conjuntivitis bilateral no exudativa y lengua en fresa.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Enfermedad de Kawasaki' },
        { letter: 'B', text: 'Mononucleosis infecciosa' },
        { letter: 'C', text: 'Escarlatina' },
        { letter: 'D', text: 'Artritis idiopática juvenil' },
        { letter: 'E', text: 'Sarampión' },
      ],
      correct: 'A',
      explanation: 'Fiebre ≥ 5 días + 4 criterios (exantema polimorfo, adenopatía cervical, conjuntivitis no exudativa, lengua en fresa): enfermedad de Kawasaki. Requiere ecocardiograma e IGEV + aspirina.',
      say: {
        stem: 'Ahora Kawasaki, con una real del EUNACOM de julio de dos mil veinticinco. Niño de ocho años con siete días de fiebre de treinta y nueve, exantema polimorfo, adenopatías cervicales, conjuntivitis bilateral sin secreción y lengua en fresa.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: enfermedad de Kawasaki, mononucleosis, escarlatina, artritis idiopática juvenil, o sarampión. Piénsalo.',
        answer: 'Es la A, Kawasaki. Fiebre de más de cinco días con cuatro criterios: exantema, ganglio cervical, conjuntivitis seca y lengua en fresa. La escarlatina tienta por la lengua, pero no explica la fiebre tan larga ni la conjuntivitis. Fíjate además que tiene ocho años: la edad típica es bajo los cinco, pero los criterios mandan.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 12',
      stem: 'Un niño de 3 años presenta un cuadro de 6 días de evolución de fiebre hasta 39,2°C, asociado a malestar general y aparición de un rash eritematoso en tronco y extremidades. Al examen físico está decaído y febril a 38,7°C, se objetiva la presencia del rash descrito y se palpan adenopatías en la cadena cervical anterior e induración de la cicatriz de la vacuna BCG.',
      question: 'Además de solicitar hemograma, VHS y PCR, el examen de elección para continuar el estudio es:',
      options: [
        { letter: 'A', text: 'Títulos de anticuerpos antiestreptolisina O' },
        { letter: 'B', text: 'Procalcitonina' },
        { letter: 'C', text: 'PCR para Mycobacterium tuberculosis' },
        { letter: 'D', text: 'Ecocardiograma' },
        { letter: 'E', text: 'Serología para virus de Epstein Barr' },
      ],
      correct: 'D',
      explanation: 'Fiebre ≥ 5 días con exantema y adenopatía cervical en un preescolar: sospecha de enfermedad de Kawasaki. El examen clave es el ecocardiograma, para buscar aneurismas coronarios, que determinan el pronóstico.',
      say: {
        stem: 'Otra real, del EUNACOM de julio de dos mil veinticuatro. Niño de tres años con seis días de fiebre hasta treinta y nueve, rash en el tronco y las extremidades, adenopatías cervicales anteriores, e induración de la cicatriz de la vacuna BCG.',
        question: 'Además del hemograma, la VHS y la proteína C reactiva, ¿cuál es el examen de elección para continuar el estudio?',
        options: 'Las opciones: antiestreptolisina O, procalcitonina, PCR para tuberculosis, ecocardiograma, o serología para Epstein-Barr. Piénsalo.',
        answer: 'Es la D, ecocardiograma. Fiebre larga, exantema y ganglio cervical en un preescolar te hacen sospechar Kawasaki, y lo que define el pronóstico son las coronarias. La PCR para tuberculosis tienta por la cicatriz BCG, pero el cuadro completo, fiebre larga con exantema y ganglio, es de Kawasaki, y lo urgente es mirar las coronarias.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 75',
      stem: 'Un niño de 2 años presenta un cuadro de 7 días de fiebre hasta 39 grados, asociado a inyección conjuntival y boca roja con labios partidos, a lo que se agrega un exantema eritematoso generalizado. Al examen, se aprecia decaído, con fiebre de 38,8 grados, presenta adenopatías cervicales y se observa descamación gruesa de los dedos de las 4 extremidades. Se encuentra hospitalizado, recibiendo un tratamiento adecuado.',
      question: '¿Cuál es la evolución más probable en este paciente?',
      options: [
        { letter: 'A', text: 'Daño permanente de las arterias coronarias' },
        { letter: 'B', text: 'Recurrencia esporádica de los síntomas' },
        { letter: 'C', text: 'Resolución completa, sin secuelas' },
        { letter: 'D', text: 'Daño vascular periférico generalizado' },
        { letter: 'E', text: 'Daño a las válvulas cardíacas' },
      ],
      correct: 'C',
      explanation: 'Enfermedad de Kawasaki tratada adecuadamente (IGEV + aspirina): el riesgo de aneurismas baja de 25% a menos de 3–5%, por lo que lo más probable es la resolución completa sin secuelas.',
      say: {
        stem: 'Y la última real, del EUNACOM de julio de dos mil diecisiete. Niño de dos años con siete días de fiebre, ojos rojos, boca roja con labios partidos, exantema generalizado, adenopatías cervicales y descamación gruesa de los dedos de las cuatro extremidades. Está hospitalizado y recibiendo el tratamiento adecuado.',
        question: '¿Cuál es la evolución más probable?',
        options: 'Las opciones: daño coronario permanente, recurrencia esporádica, resolución completa sin secuelas, daño vascular periférico, o daño valvular. Piénsalo.',
        answer: 'Es la C, resolución completa. Es un Kawasaki, y con inmunoglobulina y aspirina el riesgo de aneurismas cae a menos del tres a cinco por ciento. La A es la trampa: el daño coronario es la complicación temida, pero es lo que ocurre sin tratamiento, no lo más probable con él.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Virales', tag: 'Mira boca y cuello', kind: 'key', items: [
          { t: 'Koplik = sarampión', d: 'Ganglio retroauricular = rubéola',
            say: 'Cerremos con las reglas de oro. Manchas de Koplik: sarampión. Ganglios retroauriculares con exantema de tres días: rubéola. Y los dos se notifican de inmediato.' },
          { t: 'Bofetada + encaje = parvovirus B19', d: 'Ojo con la crisis aplásica',
            say: 'Bofetada y encaje: parvovirus B diecinueve, con riesgo de crisis aplásica en la anemia hemolítica.' },
        ] },
        { title: 'Escarlatina', tag: 'La bacteriana', kind: 'pharma', items: [
          { t: 'Lija, Pastia, Filatov', d: 'Amoxicilina 10 días completos',
            say: 'Piel de lija, Pastia y Filatov: escarlatina, y amoxicilina por diez días completos para prevenir la fiebre reumática.' },
        ] },
        { title: 'Kawasaki', tag: 'Urgencia coronaria', kind: 'alert', items: [
          { t: 'Fiebre ≥ 5 días + 4 de 5', d: 'Ojo seco, labios, manos, exantema, ganglio',
            say: 'Fiebre de cinco días o más con cuatro de cinco criterios: Kawasaki.' },
          { t: 'IGEV 2 g/kg + aspirina', d: 'Antes del día 10: previene aneurismas',
            say: 'Inmunoglobulina endovenosa y aspirina antes del décimo día. Si te llevas una sola idea de hoy: un niño con fiebre de cinco días y labios fisurados es un Kawasaki hasta que se demuestre lo contrario, y sus coronarias no esperan. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Niño con fiebre y exantema: busca la firma',
    root: N('start', 'Niño con fiebre y exantema', 'Mirar boca, cara, cuello y días de fiebre',
      'Niño con fiebre y exantema. Antes de mirar la piel, cuenta los días de fiebre, y después busca la firma en la boca, la cara y el cuello.',
      ['', N('q', '¿Fiebre de 5 días o más con 4 de 5 criterios?', 'Ojo, boca, manos, exantema, ganglio',
        'La primera pregunta es la que no puedes perder: ¿lleva cinco días o más de fiebre, con cuatro de cinco criterios de Kawasaki?',
        ['SÍ', N('alert', 'Kawasaki: IGEV + aspirina', 'Ecocardiograma · antes del día 10',
          'Si los cumple, es Kawasaki: ecocardiograma, inmunoglobulina endovenosa dos gramos por kilo y aspirina, antes del décimo día de fiebre.')],
        ['NO', N('q', '¿Cuál es la firma?', 'Boca · cuello · cara · textura',
          'Si no, busca la firma de cada exantema.',
          ['Koplik o ganglio retroauricular', N('refer', 'Sarampión o rubéola', 'Notificación inmediata',
            'Manchas de Koplik con pródromo intenso es sarampión; ganglios retroauriculares con exantema de tres días, rubéola. Ambos se notifican de inmediato.')],
          ['Faringitis + piel de lija', N('do', 'Escarlatina', 'Amoxicilina 10 días',
            'Faringitis con piel de lija, Pastia y Filatov: escarlatina. Amoxicilina por diez días completos.')],
          ['Bofetada + encaje', N('ok', 'Eritema infeccioso', 'Sintomático · ojo anemia hemolítica',
            'Bofetada y exantema en encaje: parvovirus B diecinueve. Manejo sintomático, atento a la crisis aplásica en la anemia hemolítica y al hidrops en la embarazada.')])])]),
  },
};
