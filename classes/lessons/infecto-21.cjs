// Clase 5.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_infectologia.cjs (inf-21).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-21',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Faringitis con bazo grande, exantema tras amoxicilina y las huellas de cada TORCH',
      say: 'Bienvenidos. Hoy vemos el síndrome mononucleósico y el complejo TORCH. Son dos temas que el examen pregunta con casos muy reconocibles: el joven con faringitis, ganglios y bazo grande al que le dieron amoxicilina, y el recién nacido con microcefalia y calcificaciones. Si aprendes a leer las pistas, las preguntas salen casi solas. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Del beso al linfocito atípico',
      nodes: [
        { id: 'sal', col: 0, row: 1, k: 'cause', t: 'Saliva', s: 'La enfermedad del beso' },
        { id: 'lb', col: 1, row: 1, k: 'mech', t: 'Infecta linfocitos B', s: 'Vía receptor CD21 en la orofaringe' },
        { id: 'pro', col: 2, row: 0, k: 'mech', t: 'Proliferación desregulada', s: 'De los linfocitos B' },
        { id: 'cd8', col: 2, row: 2, k: 'mech', t: 'Respuesta T CD8+ masiva', s: 'Linfocitos citotóxicos reactivos' },
        { id: 'atp', col: 3, row: 2, k: 'effect', t: 'Linfocitos atípicos', s: 'De Downey, > 10% del frotis' },
        { id: 'cli', col: 3, row: 0, k: 'effect', t: 'Faringe, ganglios, bazo', s: 'Tejido linfoide que crece' },
      ],
      edges: [
        { from: 'sal', to: 'lb' }, { from: 'lb', to: 'pro' }, { from: 'lb', to: 'cd8', label: 'el huésped responde' },
        { from: 'cd8', to: 'atp' }, { from: 'pro', to: 'cli' },
      ],
      steps: [
        { show: ['sal'], note: 'Herpesvirus tipo 4, se transmite por saliva',
          say: 'Partamos por el mecanismo. El virus de Epstein-Barr es el herpesvirus tipo cuatro, y se transmite por la saliva. Por eso le dicen la enfermedad del beso, y por eso la ves en adolescentes y adultos jóvenes.' },
        { show: ['lb'], note: 'Su blanco es el linfocito B',
          say: 'En la orofaringe, el virus entra a los linfocitos B a través de un receptor llamado CD veintiuno.' },
        { show: ['pro'], note: 'El linfocito B infectado prolifera',
          say: 'Y el linfocito B infectado empieza a proliferar sin control. Todo el tejido linfoide crece: las amígdalas, los ganglios y el bazo. Eso ya te explica la clínica.' },
        { show: ['cd8', 'cli'], note: 'El cuerpo responde con linfocitos T citotóxicos',
          say: 'El organismo responde con un ejército de linfocitos T citotóxicos, los CD ocho. Esa respuesta es la que produce la fiebre, la faringe inflamada y los ganglios dolorosos.' },
        { show: ['atp'], note: 'Linfocitos atípicos sobre el 10%',
          say: 'Y esos linfocitos T reactivos son los que aparecen en el hemograma como linfocitos atípicos, o de Downey, sobre el diez por ciento del frotis. Fíjate: el linfocito atípico no es el infectado, es el que lo está atacando.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'La tríada y el bazo',
      cards: [
        { title: 'Tríada cardinal', tag: 'Mononucleosis por VEB', kind: 'key', items: [
          { t: 'Fiebre alta prolongada', d: '1 a 3 semanas',
            say: 'Veamos cómo llega. La tríada es fiebre, faringitis y adenopatías. La fiebre es alta y prolongada: de una a tres semanas, mucho más de lo que dura una faringitis común.' },
          { t: 'Faringoamigdalitis exudativa', d: 'Placas blancas: igual a la estreptocócica',
            say: 'La faringoamigdalitis es exudativa, con placas blanquecinas en ambas amígdalas. Y aquí está el problema: clínicamente es indistinguible de la estreptocócica. Mirando la garganta no las separas.' },
          { t: 'Adenopatías cervicales posteriores', d: 'Simétricas y dolorosas',
            say: 'Lo que sí las separa son los ganglios. En la mononucleosis son cervicales posteriores, simétricos y dolorosos. En el estreptococo, en cambio, se compromete la cadena anterior, submandibular.' },
        ] },
        { title: 'Lo que la delata', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Esplenomegalia', d: 'En 50 a 60%',
            say: 'Y la pista de oro es el bazo. Hay esplenomegalia en la mitad o más de los pacientes. Una faringitis con bazo palpable no es una amigdalitis estreptocócica: es una mononucleosis.' },
          { t: 'Hepatomegalia', d: 'Con leve alza de transaminasas',
            say: 'También puede haber hepatomegalia con una elevación leve de las transaminasas. No te confundas con una hepatitis: es parte del mismo cuadro.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La trampa clásica',
      title: 'Amoxicilina y exantema: no es alergia',
      nodes: [
        { id: 'far', col: 0, row: 1, k: 'start', t: 'Faringitis exudativa', s: 'Parece estreptocócica' },
        { id: 'amx', col: 1, row: 1, k: 'trap', t: 'Amoxicilina o ampicilina', s: 'Diagnóstico equivocado' },
        { id: 'exa', col: 2, row: 1, k: 'effect', t: 'Exantema maculopapular', s: '5 a 7 días después, en 90–100%' },
        { id: 'inm', col: 3, row: 0, k: 'mech', t: 'Inmunocomplejos transitorios', s: 'No es alergia verdadera' },
        { id: 'con', col: 3, row: 2, k: 'good', t: 'Suspender y estudiar VEB', s: 'Sin rotular alérgico a penicilina' },
      ],
      edges: [
        { from: 'far', to: 'amx', label: 'se trata como estreptococo' }, { from: 'amx', to: 'exa' },
        { from: 'exa', to: 'inm', label: 'mecanismo' }, { from: 'exa', to: 'con', label: 'conducta' },
      ],
      steps: [
        { show: ['far'], note: 'La garganta se ve igual que una estreptocócica',
          say: 'Ahora la trampa más preguntada del tema. Como la faringitis se ve igual que la estreptocócica, muchas veces el paciente sale de la consulta con un antibiótico.' },
        { show: ['amx'], note: 'La aminopenicilina es el gatillo',
          say: 'Y ese antibiótico suele ser una aminopenicilina: amoxicilina o ampicilina.' },
        { show: ['exa'], note: 'Aparece en casi todos los pacientes',
          say: 'Cinco a siete días después, entre el noventa y el cien por ciento de los pacientes con mononucleosis hace un exantema maculopapular eritematoso difuso. Casi todos. Por eso, en el examen, faringitis más amoxicilina más exantema es mononucleosis hasta que se demuestre lo contrario.' },
        { show: ['inm'], note: 'Reacción por inmunocomplejos, transitoria',
          say: '¿Y es alergia? No. Es una reacción transitoria mediada por inmunocomplejos, propia de la infección por el virus. No constituye una alergia verdadera a los betalactámicos.' },
        { show: ['con'], note: 'Suspender, estudiar, no rotular',
          say: 'La conducta es suspender la amoxicilina y estudiar el virus de Epstein-Barr. Y la trampa es rotular al paciente como alérgico a la penicilina para toda la vida.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico y conducta',
      title: 'Cómo se confirma y qué se indica',
      cards: [
        { title: 'Laboratorio', tag: 'Confirmar VEB', kind: 'criteria', items: [
          { t: 'Hemograma', d: 'Linfocitosis con atípicos > 10%',
            say: 'Pasemos al diagnóstico. El primer examen es el hemograma: leucocitosis con predominio mononuclear, y linfocitos atípicos sobre el diez por ciento.' },
          { t: 'Anticuerpos heterófilos', d: 'Paul-Bunnell o Monotest',
            say: 'Luego se buscan los anticuerpos heterófilos, con la reacción de Paul-Bunnell o el Monotest. Si son positivos, es virus de Epstein-Barr.' },
          { t: 'IgM anti-VCA', d: 'Anticuerpos contra la cápside viral',
            say: 'Y la serología específica es la IgM contra la cápside viral, la IgM VCA. Si la IgM está positiva y la IgG todavía negativa, es una infección aguda. Esa lectura se pregunta.' },
        ] },
        { title: 'Conducta', tag: 'Manejo de soporte', kind: 'alert', items: [
          { t: 'Suspender la amoxicilina', d: 'El cuadro es viral',
            say: 'El manejo es de soporte, porque es un virus. Si recibió amoxicilina, se suspende.' },
          { t: 'Reposo relativo 3 a 4 semanas', d: 'Sin deportes de contacto',
            say: 'Y la indicación que no puede faltar: reposo relativo por tres a cuatro semanas, sin deportes de contacto. El bazo está grande y frágil, y un golpe puede romperlo. Esa rotura esplénica traumática es la complicación con riesgo vital.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico diferencial',
      title: 'Si los heterófilos son negativos',
      cards: [
        { title: 'Citomegalovirus', tag: 'Causa n.º 1 con heterófilos (−)', kind: 'key', items: [
          { t: 'Fiebre prolongada aislada', d: 'Cuadro tifoídeo en adulto joven',
            say: 'No todo síndrome mononucleósico es Epstein-Barr. La causa número uno con anticuerpos heterófilos negativos es el citomegalovirus. Se presenta como un síndrome febril prolongado aislado, casi tifoídeo, en un adulto joven.' },
          { t: 'Faringitis y ganglios mínimos', d: 'O ausentes',
            say: 'La diferencia está en la garganta: en el citomegalovirus la faringitis es escasa o no existe, y las adenopatías son mínimas.' },
        ] },
        { title: 'Toxoplasmosis aguda', tag: 'Gatos y carne cruda', kind: 'normal', items: [
          { t: 'Adenopatía cervical indolora', d: 'Aislada',
            say: 'La toxoplasmosis aguda da sobre todo ganglios cervicales indoloros y aislados, en alguien expuesto a gatos o que come carne cruda.' },
        ] },
        { title: 'Síndrome retroviral agudo', tag: 'VIH primario', kind: 'alert', items: [
          { t: '2 a 4 semanas tras exposición', d: 'Fiebre, faringitis, adenopatías',
            say: 'Y el que no puedes dejar pasar: el síndrome retroviral agudo, la primoinfección por el virus de inmunodeficiencia humana. Aparece dos a cuatro semanas después de una exposición sexual de riesgo, con fiebre, faringitis y adenopatías.' },
          { t: 'Úlceras mucosas muy dolorosas', d: 'Orales o genitales, más exantema',
            say: 'La pista distintiva son las úlceras mucocutáneas muy dolorosas, orales o genitales. Y ojo, en ese momento la serología puede salir todavía negativa, porque está en período de ventana.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Complejo TORCH',
      title: 'Infecciones congénitas: lo que comparten',
      cards: [
        { title: 'El acrónimo', tag: 'TORCH', kind: 'key', items: [
          { t: 'Toxoplasma', d: 'T',
            say: 'Cambiamos al recién nacido. TORCH es un acrónimo de infecciones congénitas. La T es Toxoplasma.' },
          { t: 'Otros', d: 'Sífilis, Chagas, varicela, parvovirus B19',
            say: 'La O es otros: sífilis, Chagas, varicela y parvovirus B diecinueve.' },
          { t: 'Rubéola, CMV, herpes simple', d: 'R, C y H',
            say: 'La R es rubéola, la C es citomegalovirus, y la H es herpes simple. Fíjate que el citomegalovirus aparece de nuevo: el mismo virus del síndrome mononucleósico del adulto.' },
        ] },
        { title: 'Clínica común', tag: 'Sospecha TORCH', kind: 'alert', items: [
          { t: 'RCIU y microcefalia', d: 'Pequeño para la edad gestacional',
            say: 'Todas comparten una clínica neonatal. El niño es pequeño: restricción del crecimiento intrauterino, y muchas veces microcefalia.' },
          { t: 'Hepatoesplenomegalia e ictericia', d: 'A predominio directo',
            say: 'Tiene hepatoesplenomegalia e ictericia a predominio directo.' },
          { t: 'Púrpura trombocitopénica', d: 'Muffin de arándanos',
            say: 'Y púrpura por trombocitopenia, con ese aspecto de muffin de arándanos. Si ves un recién nacido pequeño, con hígado grande, ictericia y púrpura, piensa TORCH. Después las huellas te dicen cuál.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'La diferencia que más se pregunta',
      title: 'La huella de cada TORCH',
      cards: [
        { title: 'CMV congénito', tag: 'El más frecuente', kind: 'key', items: [
          { t: 'Calcificaciones periventriculares', d: 'Más microcefalia',
            say: 'Ahora las huellas. El citomegalovirus congénito da calcificaciones periventriculares, alrededor de los ventrículos, con microcefalia.' },
          { t: 'Hipoacusia neurosensorial', d: 'Causa n.º 1 no hereditaria',
            say: 'Y es la primera causa de hipoacusia neurosensorial congénita no hereditaria. Periventricular y sordera: citomegalovirus.' },
        ] },
        { title: 'Toxoplasmosis congénita', tag: 'Tétrada de Sabin', kind: 'normal', items: [
          { t: 'Calcificaciones difusas', d: 'Más hidrocefalia',
            say: 'La toxoplasmosis congénita da la tétrada de Sabin. Las calcificaciones son intracraneales difusas, no periventriculares, y hay hidrocefalia: la cabeza crece en vez de quedarse chica.' },
          { t: 'Coriorretinitis y convulsiones', d: 'Completan la tétrada',
            say: 'Se completa con coriorretinitis y convulsiones.' },
        ] },
        { title: 'Rubéola congénita', tag: 'Tríada de Gregg', kind: 'alert', items: [
          { t: 'Catarata congénita', d: 'Sin rojo pupilar',
            say: 'Y la rubéola congénita da la tríada de Gregg. Primero, catarata congénita: la pupila blanca, sin rojo pupilar.' },
          { t: 'Hipoacusia y cardiopatía', d: 'Ductus arterioso persistente',
            say: 'Luego hipoacusia neurosensorial y cardiopatía congénita, típicamente el ductus arterioso persistente. Ojo, pupila blanca con soplo es rubéola.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos el síndrome mononucleósico en un árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Síndrome mononucleósico: quién es quién',
      head: ['Etiología', 'Heterófilos', 'Faringitis y ganglios', 'Perla de examen'],
      rows: [
        { cells: ['Virus Epstein-Barr', 'Positivos', 'Faringitis exudativa + ganglios posteriores', 'Exantema tras amoxicilina'],
          say: 'Repasemos. Epstein-Barr: heterófilos positivos, faringitis exudativa con ganglios posteriores, y el exantema después de la amoxicilina.' },
        { cells: ['Citomegalovirus', 'Negativos', 'Faringitis mínima o ausente', 'Causa n.º 1 con heterófilos (−)'],
          say: 'Citomegalovirus: heterófilos negativos, casi sin faringitis, y es la primera causa de mononucleosis con heterófilos negativos.' },
        { cells: ['Toxoplasma gondii', 'Negativos', 'Adenopatías cervicales indoloras', 'Gatos o carne cruda'],
          say: 'Toxoplasma: heterófilos negativos, ganglios cervicales que no duelen, y el antecedente de gatos o carne cruda.' },
        { cells: ['VIH primario', 'Negativos', 'Faringitis moderada + adenopatías', 'Úlceras orales dolorosas + exantema'],
          say: 'Y la primoinfección por VIH: heterófilos negativos, faringitis moderada, y úlceras orales dolorosas con exantema. Si hay una exposición de riesgo, no la olvides.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Joven de 19 años con fiebre de 38,5 °C, dolor faríngeo intenso y astenia de 6 días. Hace 3 días le diagnosticaron amigdalitis aguda e indicaron amoxicilina 500 mg cada 8 horas. Tras la cuarta dosis presenta exantema maculopapular eritematoso difuso en tronco y extremidades. Al examen: grandes exudados amigdalinos blanquecinos, adenopatías laterocervicales posteriores sensibles de 2 cm y bazo palpable a 3 cm del reborde costal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Cambiar a azitromicina y rotular alergia a penicilina' },
        { letter: 'B', text: 'Suspender la amoxicilina, pedir hemograma y Monotest, e indicar reposo sin deportes de contacto' },
        { letter: 'C', text: 'Aumentar la dosis de amoxicilina por falla terapéutica' },
        { letter: 'D', text: 'Hospitalizar para penicilina sódica endovenosa' },
        { letter: 'E', text: 'Solicitar tomografía de cuello por sospecha de absceso periamigdalino' },
      ],
      correct: 'B',
      explanation: 'Faringitis exudativa + adenopatías cervicales posteriores + esplenomegalia + exantema tras amoxicilina: mononucleosis por VEB. Se suspende la amoxicilina (el exantema no es alergia verdadera), se confirma con hemograma (linfocitos atípicos > 10%) y anticuerpos heterófilos o IgM anti-VCA, y se indica reposo relativo 3 a 4 semanas sin deportes de contacto por riesgo de rotura esplénica.',
      say: {
        stem: 'Vamos al caso. Joven de diecinueve años con seis días de fiebre, dolor de garganta intenso y cansancio. Hace tres días le diagnosticaron una amigdalitis y le dieron amoxicilina. Tras la cuarta dosis aparece un exantema maculopapular en el tronco y las extremidades. Tiene grandes exudados en las amígdalas, ganglios cervicales posteriores sensibles y el bazo palpable a tres centímetros del reborde.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: cambiar a azitromicina y rotularlo alérgico, suspender la amoxicilina con hemograma, Monotest y reposo sin deportes de contacto, subir la dosis de amoxicilina, hospitalizar para penicilina endovenosa, o pedir una tomografía de cuello. Piénsalo.',
        answer: 'Es la B. Ganglios posteriores, bazo grande y exantema después de la amoxicilina: mononucleosis por Epstein-Barr. Se suspende la amoxicilina, se confirma con hemograma y anticuerpos heterófilos, y se indica reposo sin deportes de contacto por el riesgo de rotura del bazo. La A es la trampa: el exantema no es una alergia verdadera, y rotularlo alérgico le quita la penicilina de por vida.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 164',
      stem: 'Paciente de 17 años presenta un cuadro de fiebre, malestar general y odinofagia, de 7 días de evolución. Al examen, presenta lesiones blanquecinas en las amígdalas y congestión de la orofaringe, adenopatías cervicales y se palpa el bazo moderadamente aumentado de tamaño.',
      question: '¿Cuál es el agente causal más probable?',
      options: [
        { letter: 'A', text: 'Adenovirus' },
        { letter: 'B', text: 'Virus influenza' },
        { letter: 'C', text: 'Virus de Ebstein Barr' },
        { letter: 'D', text: 'Citomegalovirus' },
        { letter: 'E', text: 'Estreptococo A' },
      ],
      correct: 'C',
      explanation: 'Fiebre, faringitis exudativa, adenopatías cervicales y esplenomegalia en un adolescente: mononucleosis clásica por VEB. La esplenomegalia descarta la faringitis estreptocócica; el CMV cursa con faringitis mínima o ausente.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil dieciséis. Paciente de diecisiete años con siete días de fiebre, malestar y odinofagia. Tiene lesiones blanquecinas en las amígdalas, adenopatías cervicales, y se palpa el bazo aumentado de tamaño.',
        question: '¿Cuál es el agente causal más probable?',
        options: 'Las opciones: adenovirus, influenza, virus de Epstein-Barr, citomegalovirus, o estreptococo del grupo A. Piénsalo.',
        answer: 'Es la C, Epstein-Barr. La clave es el bazo: una faringitis exudativa con esplenomegalia es una mononucleosis. El estreptococo tienta por las placas blancas, pero no agranda el bazo. Y el citomegalovirus casi no da faringitis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 152',
      stem: 'Una paciente de 18 años, sin antecedentes, consulta por cuadro de 3 días de compromiso del estado general, sensación febril, coriza y odinofagia. Al examen físico destacan amígdalas aumentadas de tamaño con exudado blanquecino adherente, adenopatías cervicales, examen pulmonar normal y abdominal con hepatoesplenomegalia. Se solicitan exámenes que muestran lo siguiente: IgM VCA (+), IgG VCA (-), IgM CMV (-), IgG CMV (+), ELISA VIH (-).',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Primoinfección por VIH' },
        { letter: 'B', text: 'Mononucleosis por Citomegalovirus' },
        { letter: 'C', text: 'Mononucleosis por Virus Epstein Barr' },
        { letter: 'D', text: 'Síndrome mononucleósico por estreptococo pyogenes' },
        { letter: 'E', text: 'Síndrome mononucleósico por leucemia aguda' },
      ],
      correct: 'C',
      explanation: 'IgM VCA positiva con IgG VCA negativa indica infección aguda por VEB. Para CMV, IgG positiva con IgM negativa solo indica infección antigua.',
      say: {
        stem: 'Otra real, del EUNACOM de julio de dos mil trece. Paciente de dieciocho años con tres días de compromiso del estado general, fiebre, coriza y odinofagia, con amígdalas con exudado blanquecino, adenopatías cervicales y hepatoesplenomegalia. La serología muestra IgM VCA positiva, IgG VCA negativa, IgM para citomegalovirus negativa, IgG para citomegalovirus positiva, y ELISA para VIH negativo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: primoinfección por VIH, mononucleosis por citomegalovirus, mononucleosis por Epstein-Barr, síndrome mononucleósico por estreptococo, o por leucemia aguda. Piénsalo.',
        answer: 'Es la C. La IgM contra la cápside viral está positiva y la IgG todavía no aparece: infección aguda por Epstein-Barr. El distractor es el citomegalovirus, porque tiene un anticuerpo positivo, pero es la IgG: eso habla de una infección antigua, no de la actual. La IgM manda lo agudo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 122',
      stem: 'Un niño de 3 años, con un cuadro de fiebre alta, asociada a malestar general y odinofagia intensa. Se inició tratamiento con amoxicilina, pero a las 48 horas presenta un exantema, que se muestra más abajo. Al examen físico, se aprecia decaído, con adenopatías cervicales anteriores dolorosas y amígdalas edematosas y eritematosas, con exudado blanco en su superficie. El exantema se muestra a continuación:',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Escarlatina' },
        { letter: 'B', text: 'Mononucleosis infecciosa' },
        { letter: 'C', text: 'Alergia a la penicilina' },
        { letter: 'D', text: 'Enfermedad de Kawasaki' },
        { letter: 'E', text: 'Sarampión' },
      ],
      correct: 'B',
      explanation: 'Síndrome mononucleósico (fiebre, odinofagia, adenopatías, exudado amigdalino blanco) más exantema morbiliforme tras iniciar amoxicilina: mononucleosis infecciosa. No es una alergia verdadera a la penicilina.',
      say: {
        stem: 'Una real más, del EUNACOM de julio de dos mil diecinueve. Niño de tres años con fiebre alta, malestar y odinofagia intensa. Se inicia amoxicilina, y a las cuarenta y ocho horas aparece un exantema. Está decaído, con adenopatías cervicales dolorosas y amígdalas con exudado blanco.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: escarlatina, mononucleosis infecciosa, alergia a la penicilina, enfermedad de Kawasaki, o sarampión. Piénsalo.',
        answer: 'Es la B, mononucleosis. Faringitis exudativa con adenopatías, y un exantema que aparece después de la amoxicilina: es la trampa clásica. El distractor más tentador es la alergia a la penicilina, y justamente eso es lo que el examen quiere que descartes: es una reacción del virus, no una alergia verdadera. La escarlatina la vemos en la próxima clase.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 62',
      stem: 'Un paciente de 37 años consulta por fiebre y malestar general de dos días de evolución, asociado a odinofagia. Al examen físico, tiene FC: 96x’, PA: 110/70 mmHg, T°: 38,0°C. Se observan úlceras orales, se palpan adenopatías cervicales bilaterales y se observa un exantema maculopapular eritematoso con distribución predominante en el tronco. Su examen cardiopulmonar es normal. Al examen neurológico, presenta algún grado de confusión y se palpa rigidez de nuca esbozada. Presenta serología negativa para VIH y para virus de Epstein Barr y se realiza una punción lumbar, que da salida a líquido cefalorraquídeo con pleocitosis de predominio mononuclear y glucorraquia de 55 mg/dl.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Primoinfección por VIH' },
        { letter: 'B', text: 'Meningoencefalitis por citomegalovirus' },
        { letter: 'C', text: 'Meningitis bacteriana aguda' },
        { letter: 'D', text: 'Neurosífilis' },
        { letter: 'E', text: 'Mononucleosis infecciosa' },
      ],
      correct: 'A',
      explanation: 'Síndrome mononucleósico con úlceras orales y exantema en tronco, complicado con meningitis aséptica (pleocitosis mononuclear, glucorraquia normal): síndrome retroviral agudo. La serología para VIH puede ser negativa en el período de ventana; se confirma con carga viral (PCR) o antígeno.',
      say: {
        stem: 'Ahora una real sobre el diferencial, del EUNACOM de julio de dos mil veinticuatro. Paciente de treinta y siete años con dos días de fiebre, malestar y odinofagia. Tiene úlceras orales, adenopatías cervicales bilaterales y un exantema maculopapular en el tronco. Además está algo confuso, con rigidez de nuca esbozada. La serología para VIH y para Epstein-Barr es negativa, y el líquido cefalorraquídeo muestra pleocitosis mononuclear con glucosa normal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: primoinfección por VIH, meningoencefalitis por citomegalovirus, meningitis bacteriana, neurosífilis, o mononucleosis infecciosa. Piénsalo.',
        answer: 'Es la A, primoinfección por VIH. Síndrome mononucleósico con úlceras orales y exantema es la pista del síndrome retroviral agudo, y puede complicarse con una meningitis aséptica. ¿Y la serología negativa? Es el período de ventana: todavía no hay anticuerpos, por eso se confirma con carga viral. La mononucleosis tienta, pero el Epstein-Barr salió negativo y no explica las úlceras.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 18',
      stem: 'RN con microcefalia, calcificaciones periventriculares y coriorretinitis. Madre con serología IgG positiva para CMV y IgM positiva.',
      question: '¿Cuál es el agente causante de la infección congénita?',
      options: [
        { letter: 'A', text: 'Citomegalovirus (CMV)' },
        { letter: 'B', text: 'Toxoplasma gondii' },
        { letter: 'C', text: 'Virus herpes simplex tipo 2' },
        { letter: 'D', text: 'Treponema pallidum' },
        { letter: 'E', text: 'Virus de rubéola' },
      ],
      correct: 'A',
      explanation: 'Calcificaciones periventriculares + microcefalia: CMV congénito, la infección congénita viral más frecuente. El Toxoplasma da calcificaciones difusas con hidrocefalia.',
      say: {
        stem: 'Pasamos al TORCH, con una real del EUNACOM de julio de dos mil veinticinco. Recién nacido con microcefalia, calcificaciones periventriculares y coriorretinitis. La madre tiene IgG e IgM positivas para citomegalovirus.',
        question: '¿Cuál es el agente causante de la infección congénita?',
        options: 'Las opciones: citomegalovirus, Toxoplasma, herpes simple tipo dos, Treponema pallidum, o rubéola. Piénsalo.',
        answer: 'Es la A, citomegalovirus. Calcificaciones periventriculares con microcefalia es su huella. El Toxoplasma tienta por la coriorretinitis, pero sus calcificaciones son difusas y la cabeza crece por hidrocefalia, no se queda chica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 96',
      stem: 'Un recién nacido de 38 semanas, presenta hipotonía, dificultad a la succión y circunferencia craneana 26 cm. Al examen tiene ausencia del rojo pupilar bilateral y ambas pupilas se observan de aspecto blanquecino. Además, se ausculta un soplo sistólico eyectivo III/VI, paraesternal.',
      question: '¿Cuál es el agente más probable?',
      options: [
        { letter: 'A', text: 'Virus rubéola' },
        { letter: 'B', text: 'Parvovirus B12' },
        { letter: 'C', text: 'Citomegalovirus' },
        { letter: 'D', text: 'Toxoplasma gondii' },
        { letter: 'E', text: 'Virus herpes simplex' },
      ],
      correct: 'A',
      explanation: 'Microcefalia + catarata congénita (leucocoria, sin rojo pupilar) + cardiopatía congénita: rubéola congénita (tríada de Gregg).',
      say: {
        stem: 'Otra real, del EUNACOM de julio de dos mil diecinueve. Recién nacido de treinta y ocho semanas, hipotónico, que succiona mal, con circunferencia craneana de veintiséis centímetros. No tiene rojo pupilar y ambas pupilas se ven blanquecinas. Además tiene un soplo sistólico eyectivo paraesternal.',
        question: '¿Cuál es el agente más probable?',
        options: 'Las opciones: rubéola, parvovirus, citomegalovirus, Toxoplasma, o herpes simple. Piénsalo.',
        answer: 'Es la A, rubéola. Pupila blanca por catarata congénita más soplo por cardiopatía: tríada de Gregg. El citomegalovirus tienta por la microcefalia, pero no explica ni la catarata ni el soplo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 145',
      stem: 'Un recién nacido presenta hepatoesplenomegalia e ictericia. Tiene además calcificaciones cerebrales y microcefalia. Evoluciona con coriorretinitis y aumento progresivo del perímetro craneano.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Infección por VIH' },
        { letter: 'B', text: 'Infección por Streptococcus agalactiae' },
        { letter: 'C', text: 'Rubeóla congénita' },
        { letter: 'D', text: 'Toxoplasmosis congénita' },
        { letter: 'E', text: 'Sífilis congénita' },
      ],
      correct: 'D',
      explanation: 'TORCH con calcificaciones cerebrales, coriorretinitis y aumento progresivo del perímetro craneano (hidrocefalia): toxoplasmosis congénita, tétrada de Sabin. La rubéola da catarata, hipoacusia y cardiopatía.',
      say: {
        stem: 'Y la última real, del EUNACOM de julio de dos mil quince. Recién nacido con hepatoesplenomegalia, ictericia, calcificaciones cerebrales y microcefalia, que evoluciona con coriorretinitis y un aumento progresivo del perímetro craneano.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: infección por VIH, Streptococcus agalactiae, rubéola congénita, toxoplasmosis congénita, o sífilis congénita. Piénsalo.',
        answer: 'Es la D, toxoplasmosis congénita. La pista está al final: la cabeza que crece progresivamente es hidrocefalia, y con coriorretinitis y calcificaciones arma la tétrada de Sabin. La rubéola tienta como TORCH conocido, pero su huella es catarata, sordera y ductus.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Mononucleosis', tag: 'Epstein-Barr', kind: 'key', items: [
          { t: 'Faringitis + ganglios posteriores + bazo', d: 'Es VEB, no estreptococo',
            say: 'Cerremos con las reglas de oro. Faringitis exudativa con ganglios cervicales posteriores y bazo grande es mononucleosis, no estreptococo.' },
          { t: 'Exantema tras amoxicilina', d: 'No es alergia verdadera',
            say: 'El exantema después de la amoxicilina aparece en casi todos, y no es una alergia verdadera.' },
          { t: 'Sin deportes de contacto', d: '3 a 4 semanas: rotura esplénica',
            say: 'Y siempre, reposo relativo sin deportes de contacto por tres a cuatro semanas, por el riesgo de rotura del bazo.' },
        ] },
        { title: 'Diferencial', tag: 'Heterófilos negativos', kind: 'alert', items: [
          { t: 'Causa n.º 1: citomegalovirus', d: 'Fiebre prolongada, poca faringitis',
            say: 'Con heterófilos negativos, piensa primero en citomegalovirus. Y si hay úlceras orales dolorosas con una exposición de riesgo, en la primoinfección por VIH.' },
        ] },
        { title: 'TORCH', tag: 'Huellas', kind: 'criteria', items: [
          { t: 'CMV: periventriculares + sordera', d: 'Toxo: difusas + hidrocefalia + coriorretinitis',
            say: 'En el TORCH, citomegalovirus es periventricular con sordera; toxoplasma, calcificaciones difusas, hidrocefalia y coriorretinitis.' },
          { t: 'Rubéola: catarata + sordera + ductus', d: 'Tríada de Gregg',
            say: 'Y rubéola, catarata, sordera y ductus. Si te llevas una sola idea de hoy: faringitis con bazo grande es Epstein-Barr, y ese paciente no necesita amoxicilina sino reposo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Síndrome mononucleósico: de la faringe al agente',
    root: N('start', 'Fiebre, faringitis y adenopatías', 'Adolescente o adulto joven',
      'Adolescente o adulto joven con fiebre, dolor de garganta y ganglios cervicales. Antes de dar un antibiótico, busca las pistas de mononucleosis.',
      ['', N('q', '¿Ganglios posteriores o bazo grande?', 'O exantema tras amoxicilina',
        'Mira los ganglios y palpa el bazo. ¿Son cervicales posteriores? ¿Hay esplenomegalia? ¿Apareció un exantema después de la amoxicilina?',
        ['NO', N('refer', 'Evaluar faringitis estreptocócica', 'Ganglios anteriores, sin bazo',
          'Si los ganglios son anteriores y no hay bazo palpable, el cuadro se maneja como una faringoamigdalitis común.')],
        ['SÍ', N('do', 'Hemograma + anticuerpos heterófilos', 'Atípicos > 10% · Monotest',
          'Si hay pistas, pide hemograma buscando linfocitos atípicos sobre el diez por ciento, y anticuerpos heterófilos.',
          ['Positivos', N('ok', 'Mononucleosis por VEB', 'Suspender amoxicilina · reposo sin deportes 3–4 sem',
            'Heterófilos positivos o IgM VCA positiva: mononucleosis por Epstein-Barr. Suspender la amoxicilina, y reposo relativo sin deportes de contacto por tres a cuatro semanas.')],
          ['Negativos', N('q', '¿Qué pista acompaña?', 'Faringe · ganglios · exposición',
            'Con heterófilos negativos, busca la pista que acompaña.',
            ['Fiebre sin faringitis', N('do', 'Citomegalovirus', 'Causa n.º 1 con heterófilos (−)',
              'Fiebre prolongada aislada con poca faringitis: citomegalovirus, la primera causa.')],
            ['Ganglio indoloro', N('do', 'Toxoplasmosis aguda', 'Gatos o carne cruda',
              'Adenopatía cervical indolora en alguien expuesto a gatos o carne cruda: toxoplasmosis.')],
            ['Úlceras + exposición', N('alert', 'Síndrome retroviral agudo', 'Carga viral VIH',
              'Úlceras mucosas dolorosas tras una exposición sexual de riesgo: primoinfección por VIH. La serología puede ser negativa en la ventana, así que se pide carga viral.')])])])]),
  },
};
