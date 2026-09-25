// Clase 10.12 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-12).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-12 y --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo el parkinsonismo es por un fármaco, cuándo es un Parkinson-plus y qué banderas rojas obligan a derivar',
      say: 'Bienvenidos. En la clase anterior vimos la enfermedad de Parkinson. Hoy vemos lo que la imita: el parkinsonismo por fármacos, que es la causa reversible más frecuente, y los síndromes Parkinson-plus, que son enfermedades degenerativas más agresivas. En el examen la pregunta casi siempre es la misma: frente a un paciente rígido y lento, ¿es Parkinson, es un fármaco, o es otra cosa? Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Parkinsonismo por fármacos',
      title: 'Un fármaco bloquea la dopamina en el estriado',
      nodes: [
        { id: 'far', col: 0, row: 1, k: 'cause', t: 'Fármaco antagonista D2', s: 'Antiemético, antipsicótico, flunarizina' },
        { id: 'blq', col: 1, row: 1, k: 'mech', t: 'Bloqueo D2 estriatal', s: 'La sustancia negra está sana' },
        { id: 'cli', col: 2, row: 1, k: 'effect', t: 'Parkinsonismo subagudo', s: 'Bilateral y simétrico' },
        { id: 'sin', col: 2, row: 3, k: 'effect', t: 'Sin pródromos', s: 'Olfato y sueño REM normales' },
        { id: 'sus', col: 3, row: 1, k: 'good', t: 'Suspender el fármaco', s: 'De forma gradual' },
        { id: 'rem', col: 4, row: 1, k: 'good', t: 'Remisión', s: '4 semanas a varios meses' },
      ],
      edges: [
        { from: 'far', to: 'blq' }, { from: 'blq', to: 'cli' }, { from: 'blq', to: 'sin' },
        { from: 'cli', to: 'sus' }, { from: 'sus', to: 'rem' },
      ],
      steps: [
        { show: ['far'], note: 'La causa reversible más frecuente',
          say: 'Partamos por el más importante para el médico general. El parkinsonismo inducido por fármacos es la segunda causa de parkinsonismo después del Parkinson idiopático, y la primera causa reversible en el adulto mayor.' },
        { show: ['blq'], note: 'Las neuronas están, pero el receptor está bloqueado',
          say: 'El mecanismo es simple. En el Parkinson se mueren las neuronas de la sustancia negra. Aquí, en cambio, las neuronas están sanas: lo que pasa es que un fármaco bloquea los receptores D dos del estriado, y la dopamina no puede actuar.' },
        { show: ['cli'], note: 'El fármaco llega a los dos lados por igual',
          say: 'Y eso explica la clínica. Como el fármaco llega a ambos hemisferios por igual, el cuadro es subagudo, bilateral y simétrico desde el comienzo, con bradicinesia y rigidez. El temblor, cuando existe, es más postural que de reposo.' },
        { show: ['sin'], note: 'No hay enfermedad degenerativa de fondo',
          say: 'Y como no hay una enfermedad degenerativa detrás, faltan los síntomas prodrómicos que vimos en la clase anterior: el olfato y el sueño REM son normales.' },
        { show: ['sus', 'rem'], note: 'La conducta es retirar la causa',
          say: 'La conducta, entonces, no es dar levodopa. Es suspender de forma gradual el fármaco causal. Y hay que advertirle a la familia que la remisión completa puede tardar entre cuatro semanas y varios meses.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Parkinsonismo por fármacos',
      title: '¿Qué fármacos buscar en la receta?',
      cards: [
        { title: 'Antieméticos', tag: 'Los más olvidados', kind: 'alert', items: [
          { t: 'Metoclopramida', d: 'Uso crónico por dispepsia o gastroparesia',
            say: 'Primer grupo: los antieméticos y procinéticos. La metoclopramida es un antagonista D dos potente que cruza la barrera hematoencefálica, y su uso crónico por dispepsia o gastroparesia es una causa común de parkinsonismo grave.' },
          { t: 'Sulpirida y levosulpirida', d: 'Domperidona: casi no cruza la BHE',
            say: 'También la sulpirida y la levosulpirida. Y un contraste que sirve: la domperidona casi no cruza la barrera hematoencefálica, por eso tiene menor riesgo extrapiramidal.' },
        ] },
        { title: 'Antipsicóticos', tag: 'Típicos y atípicos', kind: 'pharma', items: [
          { t: 'Haloperidol, clorpromazina, flufenazina', d: 'Risperidona en dosis > 2–4 mg/día',
            say: 'Segundo grupo: los antipsicóticos. Los típicos, como el haloperidol, la clorpromazina y la flufenazina. Y entre los atípicos, la risperidona en dosis sobre dos a cuatro miligramos al día.' },
          { t: 'Menor riesgo: quetiapina y clozapina', d: 'Los de menor perfil extrapiramidal',
            say: 'Los antipsicóticos con menor perfil extrapiramidal son la quetiapina y la clozapina. Guarda ese dato, porque vuelve cuando veamos las demencias.' },
        ] },
        { title: 'Bloqueadores de calcio', tag: 'Para el mareo', kind: 'key', items: [
          { t: 'Flunarizina y cinarizina', d: 'Recetadas por meses para "mareos"',
            say: 'Y el tercer grupo, el más típico en el examen: la flunarizina y la cinarizina. Se recetan por meses o años a adultos mayores por mareos o vértigo, y bloquean los receptores dopaminérgicos del estriado. Siempre revisa la receta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Parálisis supranuclear progresiva',
      title: 'PSP: la mirada que no baja y las caídas hacia atrás',
      cards: [
        { title: 'Tríada clínica', tag: 'Tauopatía', kind: 'criteria', items: [
          { t: 'Parálisis de la mirada vertical', d: 'Primero hacia abajo; oculocefálico conservado',
            say: 'Pasemos a los Parkinson-plus. El primero es la parálisis supranuclear progresiva, una tauopatía. Su signo clave es la parálisis de la mirada vertical, que afecta primero la mirada hacia abajo. Como la lesión es supranuclear, al mover la cabeza del paciente, los ojos sí se mueven: el reflejo oculocefálico está conservado.' },
          { t: 'Caídas precoces hacia atrás', d: 'En el primer año de evolución',
            say: 'El segundo elemento son las caídas precoces, en el primer año, típicamente hacia atrás. Compara con el Parkinson idiopático, donde las caídas aparecen recién en etapas tardías. Esa diferencia se pregunta.' },
          { t: 'Rigidez axial y facies de sorpresa', d: 'Retrocollis, ojos muy abiertos',
            say: 'Y el tercero es la rigidez axial, mayor en el cuello y el tronco que en las extremidades, con el cuello en extensión y una cara de sorpresa, con los ojos muy abiertos.' },
        ] },
        { title: 'Apoyo diagnóstico', tag: 'RM', kind: 'key', items: [
          { t: 'Signo del colibrí o del pingüino', d: 'Atrofia del mesencéfalo en corte sagital',
            say: 'En la resonancia, el mesencéfalo se atrofia y la protuberancia se respeta. En el corte sagital eso dibuja el signo del colibrí, o del pingüino.' },
          { t: 'Levodopa: respuesta nula', d: 'O insignificante',
            say: 'Y la respuesta a la levodopa es nula o insignificante. Esa es la regla de todos los Parkinson-plus.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Atrofia multisistémica',
      title: 'AMS: parkinsonismo o ataxia, más disautonomía precoz',
      cards: [
        { title: 'Dos fenotipos', tag: 'Sinucleinopatía glial', kind: 'criteria', items: [
          { t: 'AMS parkinsoniana', d: 'Rígido-acinética, simétrica, rápida',
            say: 'El segundo Parkinson-plus es la atrofia multisistémica. Es una sinucleinopatía, como el Parkinson, pero la alfa-sinucleína se deposita en los oligodendrocitos. Tiene dos formas. La parkinsoniana es rígida, simétrica, avanza rápido y responde mal y en forma transitoria a la levodopa.' },
          { t: 'AMS cerebelosa', d: 'Ataxia, nistagmo, disartria escandida',
            say: 'La forma cerebelosa se presenta con ataxia de la marcha y de las extremidades, nistagmo y una disartria escandida.' },
        ] },
        { title: 'Lo que las une', tag: 'Falla autonómica', kind: 'alert', items: [
          { t: 'Hipotensión ortostática grave', d: 'Sin taquicardia refleja',
            say: 'Lo que une a las dos formas es la falla autonómica temprana y grave. Hipotensión ortostática refractaria, con una caída de la presión sistólica de más de treinta, o de la diastólica de más de quince, en los primeros tres minutos, y sin la taquicardia refleja que la compensaría.' },
          { t: 'Vejiga neurogénica precoz', d: 'O disfunción eréctil precoz',
            say: 'Y además, incontinencia urinaria precoz con residuo posmiccional elevado, o disfunción eréctil precoz.' },
          { t: 'Estridor laríngeo nocturno', d: 'Riesgo de muerte súbita',
            say: 'Ojo con el signo de alarma vital: el estridor laríngeo nocturno, por distonía de las cuerdas vocales. Tiene riesgo de asfixia y muerte súbita, y requiere CPAP o traqueostomía.' },
        ] },
        { title: 'Imagen', tag: 'RM axial', kind: 'key', items: [
          { t: 'Signo de la cruz caliente', d: 'Atrofia pontina en T2',
            say: 'En la resonancia, la atrofia de la protuberancia dibuja una cruz en los cortes axiales: el signo de la cruz caliente, o hot cross bun.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Otros parkinsonismos',
      title: 'Corticobasal y vascular: la asimetría extrema y las piernas',
      cards: [
        { title: 'Degeneración corticobasal', tag: 'Tauopatía asimétrica', kind: 'criteria', items: [
          { t: 'Asimetría extrema', d: 'Distonía fija de una mano',
            say: 'El tercer Parkinson-plus es la degeneración corticobasal, otra tauopatía. Su sello es una asimetría extrema y progresiva: un parkinsonismo rígido de un lado, con distonía fija de la mano, que no responde en absoluto a la levodopa.' },
          { t: 'Apraxia ideomotora', d: 'No usa una llave pese a fuerza normal',
            say: 'A eso se suman signos de corteza. Apraxia ideomotora: el paciente tiene fuerza normal, pero no puede usar una llave ni peinarse.' },
          { t: 'Mano ajena', d: 'Más mioclonías reflejas al tacto',
            say: 'Y el fenómeno de la mano ajena: la extremidad parece actuar sola, agarra objetos o interfiere con la otra mano. Además hay mioclonías corticales al estímulo táctil.' },
        ] },
        { title: 'Parkinsonismo vascular', tag: 'Tren inferior', kind: 'alert', items: [
          { t: 'Infartos lacunares múltiples', d: 'Hipertenso y diabético',
            say: 'Y por último, el parkinsonismo vascular. Se debe a múltiples infartos lacunares subcorticales, o a leucoaraiosis, en un paciente con hipertensión y diabetes de años.' },
          { t: 'Marcha magnética a pequeños pasos', d: 'Braceo conservado, sin temblor',
            say: 'Es un parkinsonismo del tren inferior: marcha a pequeños pasos, con los pies pegados al suelo y base ancha. Pero las manos se ven bien: el braceo está conservado y no hay temblor.' },
          { t: 'Signos piramidales', d: 'Hiperreflexia, Babinski, incontinencia',
            say: 'Y al examen aparecen signos piramidales, que nunca son del Parkinson: reflejos exaltados, Babinski bilateral, e incontinencia urinaria.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol: frente a un parkinsonismo, cómo decides si es Parkinson, un fármaco u otra cosa.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las diferencias que más se preguntan',
      head: ['Pista clínica', 'Pensar en', 'Error frecuente'],
      rows: [
        { cells: ['Bilateral y simétrico + flunarizina o metoclopramida', 'Parkinsonismo por fármacos', 'Iniciar levodopa'],
          say: 'Repasemos. Parkinsonismo bilateral y simétrico en alguien que usa flunarizina o metoclopramida: es por fármacos. El error es iniciar levodopa en vez de suspender el fármaco.' },
        { cells: ['Asimétrico, de reposo, niveles de fármacos en rango', 'Parkinson idiopático', 'Culpar al fármaco'],
          say: 'En cambio, un temblor de reposo asimétrico, con fármacos en rango, apunta al Parkinson idiopático.' },
        { cells: ['Mirada vertical hacia abajo + caídas hacia atrás', 'Parálisis supranuclear progresiva', 'Atribuir las caídas a la edad'],
          say: 'Mirada que no baja y caídas precoces hacia atrás: parálisis supranuclear progresiva.' },
        { cells: ['Hipotensión ortostática grave, vejiga neurogénica, estridor', 'Atrofia multisistémica', 'Tratarlo como Parkinson típico'],
          say: 'Hipotensión ortostática grave precoz, vejiga neurogénica o estridor nocturno: atrofia multisistémica.' },
        { cells: ['Mano que actúa sola, apraxia, asimetría extrema', 'Degeneración corticobasal', 'Pensar en un cuadro psiquiátrico'],
          say: 'Una mano que actúa sola, con apraxia y asimetría extrema: degeneración corticobasal.' },
        { cells: ['Marcha a pasos cortos, braceo normal, Babinski', 'Parkinsonismo vascular', 'Buscar temblor en las manos'],
          say: 'Y marcha a pasos cortos con braceo normal y Babinski: parkinsonismo vascular. En todos los plus, la levodopa responde mal, y ante cualquiera de estas banderas rojas, se deriva al nivel secundario.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 74 años, hipertensa, con síndrome vertiginoso recurrente. Hace 4 meses se mueve con extrema lentitud y le tiemblan las manos al tomar la taza. Usa losartán, hidroclorotiazida, flunarizina 10 mg/noche (hace 9 meses) y metoclopramida 10 mg c/8 h (hace 6 meses). Examen: hipomimia, bradicinesia y rigidez en rueda dentada bilaterales y simétricas, temblor postural fino de ambas manos, sin temblor de reposo. Sin parálisis de la mirada vertical ni caídas.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar levodopa/carbidopa' },
        { letter: 'B', text: 'Suspender gradualmente flunarizina y metoclopramida y controlar' },
        { letter: 'C', text: 'Iniciar pramipexol' },
        { letter: 'D', text: 'Solicitar RM cerebral y derivar por sospecha de parálisis supranuclear progresiva' },
        { letter: 'E', text: 'Iniciar propranolol por temblor esencial' },
      ],
      correct: 'B',
      explanation: 'Parkinsonismo subagudo, bilateral y simétrico, con temblor postural, en una paciente que usa dos bloqueadores dopaminérgicos: parkinsonismo inducido por fármacos. Se suspenden gradualmente ambos fármacos; la recuperación puede tardar semanas a meses. No hay banderas rojas de PSP.',
      say: {
        stem: 'Vamos con un caso. Mujer de setenta y cuatro años, hipertensa y con vértigo recurrente. Hace cuatro meses se mueve con extrema lentitud y le tiemblan las manos al tomar la taza. Usa flunarizina hace nueve meses por sus mareos, y metoclopramida hace seis meses por plenitud gástrica. Tiene hipomimia, bradicinesia y rigidez bilaterales y simétricas, y un temblor postural fino, sin temblor de reposo. No hay alteración de la mirada ni caídas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: iniciar levodopa, suspender gradualmente la flunarizina y la metoclopramida, iniciar pramipexol, pedir resonancia por sospecha de parálisis supranuclear, o iniciar propranolol. Piénsalo.',
        answer: 'Es la B. Cuadro subagudo, bilateral y simétrico, con temblor postural, y dos bloqueadores dopaminérgicos en la receta: parkinsonismo por fármacos. Se suspenden ambos de forma gradual, y la recuperación puede tardar semanas o meses. La levodopa es el distractor más tentador, pero aquí no falta dopamina: el receptor está bloqueado. Y no hay caídas ni alteración de la mirada que hagan pensar en una parálisis supranuclear.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 26',
      stem: 'Un paciente de 70 años presenta un cuadro de dificultad para girarse y para meterse a la tina, asociado a múltiples caídas. Además presenta cambios en la escritura y temblor de reposo. No presenta deterioro cognitivo evidente.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Atrofia generalizada' },
        { letter: 'B', text: 'Hidrocefalia normotensiva' },
        { letter: 'C', text: 'Temblor senil' },
        { letter: 'D', text: 'Demencia por cuerpos de Lewy' },
        { letter: 'E', text: 'Enfermedad de Parkinson' },
      ],
      correct: 'E',
      explanation: 'Bradicinesia (dificultad para girarse), micrografía y temblor de reposo: enfermedad de Parkinson. Sin deterioro cognitivo no calza la demencia por cuerpos de Lewy ni la hidrocefalia normotensiva, y el temblor de reposo no es un temblor "senil".',
      say: {
        stem: 'Ahora las preguntas reales. La primera, del EUNACOM de julio de dos mil quince. Paciente de setenta años con dificultad para girarse y para meterse a la tina, con múltiples caídas. Además, cambios en la escritura y temblor de reposo. No tiene deterioro cognitivo evidente.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: atrofia generalizada, hidrocefalia normotensiva, temblor senil, demencia por cuerpos de Lewy, o enfermedad de Parkinson. Piénsalo.',
        answer: 'Es la E, enfermedad de Parkinson. Dificultad para girarse es bradicinesia, los cambios en la escritura son la micrografía, y hay temblor de reposo. La hidrocefalia normotensiva tienta por las caídas, pero no hay deterioro cognitivo ni incontinencia, y lo mismo descarta la demencia por cuerpos de Lewy. Fíjate que aquí las caídas no te llevan a un Parkinson-plus, porque no hay parálisis de la mirada y sí hay un temblor de reposo clásico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 99',
      stem: 'Un paciente de 62 años, con antecedente de hipertensión arterial en tratamiento con doxazosina, hiperplasia prostática benigna en tratamiento con tamsulosina y trastorno afectivo bipolar en tratamiento con carbonato de litio, consulta por temblor de manos mayor a derecha que aparece con el reposo y se asocia a lentitud en los movimientos. El cuadro inició hace 4 meses. Se miden los niveles plasmáticos de los fármacos que utiliza, los que son informados dentro de rango terapéutico.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Suspender la doxazosina' },
        { letter: 'B', text: 'Disminuir la dosis de carbonato de litio' },
        { letter: 'C', text: 'Suspender la tamsulosina' },
        { letter: 'D', text: 'Realizar prueba con levodopa' },
        { letter: 'E', text: 'Iniciar propranolol vía oral' },
      ],
      correct: 'D',
      explanation: 'Temblor de reposo asimétrico + bradicinesia: enfermedad de Parkinson; la respuesta a levodopa apoya el diagnóstico. Ninguno de sus fármacos es un bloqueador D2 y el litio está en rango, así que no hay parkinsonismo farmacológico que corregir.',
      say: {
        stem: 'La segunda, del EUNACOM de diciembre de dos mil veinticinco. Hombre de sesenta y dos años que usa doxazosina, tamsulosina y litio. Hace cuatro meses tiene temblor de manos que aparece en reposo, mayor a derecha, con lentitud de movimientos. Los niveles de sus fármacos están en rango.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: suspender la doxazosina, bajar el litio, suspender la tamsulosina, hacer una prueba con levodopa, o iniciar propranolol. Piénsalo.',
        answer: 'Es la D. Esta pregunta es el espejo de nuestro caso clínico. Aquí el temblor es de reposo y asimétrico, con bradicinesia: eso es Parkinson idiopático, y una buena respuesta a la levodopa lo apoya. Ninguno de sus fármacos bloquea el receptor D dos, y el litio, que es el distractor, está en rango. Asimetría y reposo apuntan al Parkinson; simetría y un bloqueador dopaminérgico, al fármaco.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Por fármacos', tag: 'Reversible', kind: 'key', items: [
          { t: 'Simétrico, subagudo, sin pródromos', d: 'Revisar siempre la receta',
            say: 'Cerremos con las reglas de oro. Un parkinsonismo simétrico, subagudo y sin pródromos te obliga a revisar la receta: metoclopramida, sulpirida, antipsicóticos, flunarizina y cinarizina.' },
          { t: 'Suspender, no dar levodopa', d: 'Remisión en semanas a meses',
            say: 'Y la conducta es suspender el fármaco de forma gradual, no agregar levodopa.' },
        ] },
        { title: 'Parkinson-plus', tag: 'Derivar', kind: 'alert', items: [
          { t: 'PSP: mirada abajo + caídas atrás', d: 'AMS: disautonomía + estridor',
            say: 'En los plus, la pista está en la bandera roja. Mirada que no baja y caídas hacia atrás: parálisis supranuclear. Disautonomía precoz y estridor: atrofia multisistémica.' },
          { t: 'DCB: mano ajena y apraxia', d: 'Vascular: piernas, braceo normal',
            say: 'Mano ajena y apraxia: corticobasal. Y piernas torpes con braceo normal y Babinski: parkinsonismo vascular.' },
          { t: 'Mala respuesta a levodopa', d: 'Derivación preferente a nivel secundario',
            say: 'Todos responden mal a la levodopa, y todos se derivan. Si te llevas una sola idea de hoy: frente a un parkinsonismo, primero la receta y después las banderas rojas. En la próxima clase vemos el temblor esencial y las distonías agudas por neurolépticos. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Parkinsonismo: idiopático, farmacológico o atípico',
    root: N('start', 'Bradicinesia + rigidez o temblor', 'Parkinsonismo',
      'Paciente con bradicinesia y rigidez o temblor: tiene un parkinsonismo. Ahora hay que saber de qué tipo.',
      ['', N('q', '¿Usa un bloqueador D2?', 'Metoclopramida, antipsicótico, flunarizina',
        'Lo primero es la receta. ¿Usa metoclopramida, sulpirida, un antipsicótico, flunarizina o cinarizina?',
        ['SÍ', N('do', 'Suspender gradualmente el fármaco', 'Cuadro simétrico y subagudo',
          'Si lo usa, y el cuadro es simétrico y subagudo, se suspende el fármaco de forma gradual.',
          ['Controlar', N('ok', 'Remisión en semanas a meses', 'Sin levodopa',
            'Y se controla: la remisión tarda de cuatro semanas a varios meses, sin necesidad de levodopa.')])],
        ['NO', N('q', '¿Banderas rojas precoces?', 'Mirada vertical, caídas, disautonomía, mano ajena',
          'Si no hay fármaco, busca banderas rojas: parálisis de la mirada vertical, caídas precoces, disautonomía grave temprana, apraxia o mano ajena, signos piramidales.',
          ['SÍ', N('alert', 'Parkinson-plus o vascular', 'PSP · AMS · DCB · vascular',
            'Si hay alguna, piensa en un Parkinson-plus o en un parkinsonismo vascular. Responden mal a la levodopa.',
            ['Conducta', N('refer', 'Derivación preferente', 'Nivel secundario · RM cerebral',
              'Y la conducta es la derivación preferente al nivel secundario, con resonancia de cerebro.')])],
          ['NO', N('ok', 'Parkinson idiopático', 'Asimétrico, de reposo, buena respuesta a levodopa',
            'Si no hay ninguna y el cuadro es asimétrico, con temblor de reposo, es un Parkinson idiopático, que responde bien a la levodopa.')])])]),
  },
};
