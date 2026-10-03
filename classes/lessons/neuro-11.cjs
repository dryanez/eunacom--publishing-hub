// Clase 10.11 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-11).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-11 y --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-11',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Diagnóstico clínico, levodopa según la edad y qué hacer cuando el efecto empieza a fluctuar',
      say: 'Bienvenidos. Hoy empezamos el bloque de trastornos del movimiento con la enfermedad de Parkinson, la segunda enfermedad neurodegenerativa más frecuente del adulto mayor después del Alzheimer, y con garantía GES. En el examen se juegan tres cosas: reconocerla con la clínica, porque ningún examen la confirma; elegir el primer fármaco según la edad; y manejar las complicaciones de la levodopa con los años. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Falta dopamina y el movimiento se frena',
      nodes: [
        { id: 'sn', col: 0, row: 1, k: 'cause', t: 'Sustancia negra', s: 'Pars compacta: neuronas dopaminérgicas' },
        { id: 'lew', col: 0, row: 3, k: 'cause', t: 'Cuerpos de Lewy', s: 'Alfa-sinucleína mal plegada' },
        { id: 'per', col: 1, row: 1, k: 'mech', t: 'Pérdida de 50–70 %', s: 'Recién ahí aparecen síntomas' },
        { id: 'dir', col: 2, row: 0, k: 'mech', t: 'Vía directa apagada', s: 'D1: promueve el movimiento' },
        { id: 'ind', col: 2, row: 2, k: 'mech', t: 'Vía indirecta encendida', s: 'D2: núcleo subtalámico' },
        { id: 'tal', col: 3, row: 1, k: 'effect', t: 'Tálamo motor inhibido', s: 'Freno sobre la corteza' },
        { id: 'cli', col: 4, row: 1, k: 'effect', t: 'Bradicinesia y rigidez', s: 'El núcleo del cuadro' },
      ],
      edges: [
        { from: 'lew', to: 'sn' }, { from: 'sn', to: 'per' }, { from: 'per', to: 'dir' }, { from: 'per', to: 'ind' },
        { from: 'dir', to: 'tal' }, { from: 'ind', to: 'tal' }, { from: 'tal', to: 'cli' },
      ],
      steps: [
        { show: ['sn'], note: 'La lesión está en el mesencéfalo',
          say: 'Partamos por el mecanismo. En el Parkinson se pierden, de forma progresiva, las neuronas dopaminérgicas de la pars compacta de la sustancia negra, que proyectan al estriado: el putamen y el caudado.' },
        { show: ['lew'], note: 'El sello histológico',
          say: 'El sello en la anatomía patológica son los cuerpos de Lewy: inclusiones dentro de la neurona, formadas por alfa-sinucleína mal plegada. Por eso al Parkinson se le llama una sinucleinopatía, y esa palabra va a volver.' },
        { show: ['per'], note: 'Cuando hay síntomas, la mitad ya se perdió',
          say: 'Un dato importante: los síntomas motores recién aparecen cuando se ha perdido entre el cincuenta y el setenta por ciento de esas neuronas. Es decir, la enfermedad lleva años avanzando en silencio.' },
        { show: ['dir', 'ind'], note: 'Se rompe el equilibrio entre las dos vías',
          say: 'Sin dopamina se rompe el equilibrio de los ganglios basales. Se apaga la vía directa, la de los receptores D uno, que facilita el movimiento. Y se enciende la vía indirecta, la de los receptores D dos, que pasa por el núcleo subtalámico.' },
        { show: ['tal', 'cli'], note: 'El resultado: todo se enlentece',
          say: 'El resultado neto es un freno excesivo sobre el tálamo motor y la corteza. Y ese freno es exactamente lo que ves en el paciente: bradicinesia y rigidez. El mecanismo te explica la clínica.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Hipótesis de Braak',
      title: 'La enfermedad empieza lejos del cerebro',
      nodes: [
        { id: 'b12', col: 0, row: 1, k: 'cause', t: 'Estadios 1–2', s: 'Plexo entérico, vago, bulbo olfatorio' },
        { id: 'pro', col: 0, row: 3, k: 'effect', t: 'Pródromos', s: 'Constipación, hiposmia, sueño REM' },
        { id: 'b34', col: 2, row: 1, k: 'mech', t: 'Estadios 3–4', s: 'Tronco y mesencéfalo' },
        { id: 'mot', col: 2, row: 3, k: 'effect', t: 'Síntomas motores', s: 'Aquí se diagnostica' },
        { id: 'b56', col: 4, row: 1, k: 'risk', t: 'Estadios 5–6', s: 'Límbico y neocorteza' },
        { id: 'dem', col: 4, row: 3, k: 'risk', t: 'Demencia y alucinaciones', s: 'Etapa tardía' },
      ],
      edges: [
        { from: 'b12', to: 'b34', label: 'asciende' }, { from: 'b34', to: 'b56', label: 'asciende' },
        { from: 'b12', to: 'pro' }, { from: 'b34', to: 'mot' }, { from: 'b56', to: 'dem' },
      ],
      steps: [
        { show: ['b12', 'pro'], note: 'Años o décadas antes del temblor',
          say: 'Braak propuso que el proceso empieza años o décadas antes de los síntomas motores, lejos del cerebro: en el plexo entérico del intestino, en el núcleo motor dorsal del vago, y en el bulbo olfatorio. Por eso los primeros síntomas son la constipación, la pérdida del olfato y los trastornos del sueño REM.' },
        { show: ['b34', 'mot'], note: 'Cuando llega al mesencéfalo, aparece lo motor',
          say: 'Luego asciende por el tronco hasta el mesencéfalo, donde está la sustancia negra. En los estadios tres y cuatro aparecen los síntomas motores, y es recién ahí cuando hacemos el diagnóstico.' },
        { show: ['b56', 'dem'], note: 'Al final, la corteza',
          say: 'Y en los estadios cinco y seis alcanza las áreas límbicas y la neocorteza, y aparecen el deterioro cognitivo y las alucinaciones. Por eso, en el Parkinson, la demencia es tardía. Guarda eso, porque sirve para separarlo de otras enfermedades.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico MDS · Paso 1',
      title: 'Parkinsonismo: bradicinesia más uno',
      cards: [
        { title: 'Obligatoria', tag: 'Sin ella no es Parkinson', kind: 'alert', items: [
          { t: 'Bradicinesia', d: 'Lentitud con decremento en movimientos repetidos',
            say: 'Veamos el diagnóstico, que es clínico. Los criterios de la Movement Disorder Society parten por definir un parkinsonismo, y el requisito obligatorio es la bradicinesia: lentitud, con una disminución progresiva de la velocidad o la amplitud en movimientos repetidos.' },
          { t: 'Golpeteo de dedos que se apaga', d: 'También pronosupinación, abrir y cerrar la mano',
            say: 'Se examina pidiendo golpetear el índice con el pulgar, pronosupinar o abrir y cerrar la mano: el movimiento se va haciendo más lento y más pequeño. Si no hay bradicinesia, no es Parkinson.' },
        ] },
        { title: 'Más al menos uno', tag: 'Rigidez o temblor', kind: 'criteria', items: [
          { t: 'Temblor de reposo 4–6 Hz', d: 'Asimétrico, cuenta monedas, cede al moverse',
            say: 'Y a la bradicinesia se suma al menos uno de dos signos. El primero, el temblor de reposo, de cuatro a seis por segundo, asimétrico al inicio, como si contara monedas. Aparece con la mano apoyada y cede cuando la mueve. Está en el setenta a ochenta por ciento, y típicamente respeta la cabeza, a diferencia del temblor esencial.' },
          { t: 'Rigidez en rueda dentada', d: 'Aumenta al mover la otra mano: Froment',
            say: 'El segundo, la rigidez: una resistencia plástica en todo el rango del movimiento pasivo. Si se combina con temblor, se sienten resaltes, la rueda dentada. Y aumenta si le pides que mueva la otra extremidad: la maniobra de Froment.' },
        ] },
        { title: 'Lo que ve la familia', tag: 'Muy frecuente', kind: 'key', items: [
          { t: 'Menos braceo, de un lado', d: 'Hipomimia, hipofonía, pasos cortos',
            say: 'Y lo que la familia nota primero: camina más lento, pierde el braceo de un lado, la cara se vuelve inexpresiva, la voz baja, y los pasos se acortan. Fíjate en la palabra asimetría: el Parkinson empieza de un lado.' },
          { t: 'Inestabilidad postural: tardía', d: 'Si aparece el primer año, bandera roja',
            say: 'La inestabilidad postural, en cambio, es tardía. Si aparece en el primer año, es una bandera roja, que es justo lo que viene.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico MDS · Pasos 2 y 3',
      title: 'Lo que obliga a pensar en otra cosa',
      cards: [
        { title: 'Exclusión absoluta', tag: 'No es Parkinson', kind: 'alert', items: [
          { t: 'Signos cerebelosos', d: 'O parálisis de la mirada vertical hacia abajo',
            say: 'El segundo paso son los criterios de exclusión absoluta. Si hay signos cerebelosos manifiestos, o una parálisis supranuclear de la mirada vertical hacia abajo, no es Parkinson.' },
          { t: 'Neurolépticos o metoclopramida', d: 'Uso reciente de antidopaminérgicos',
            say: 'Tampoco si el paciente usa recientemente un bloqueador de dopamina, como un neuroléptico o la metoclopramida. Ahí es un parkinsonismo por fármacos, que vemos en la próxima clase.' },
          { t: 'Sin respuesta a levodopa alta', d: 'Más de 600 a 1.000 mg al día',
            say: 'Y tampoco si no hay ninguna respuesta a dosis altas de levodopa, sobre seiscientos a mil miligramos al día. El Parkinson verdadero responde, y bien. También excluye una demencia frontotemporal en los primeros cinco años.' },
        ] },
        { title: 'Banderas rojas', tag: 'Pensar en Parkinson-plus', kind: 'criteria', items: [
          { t: 'Caídas en los primeros 3 años', d: 'Silla de ruedas antes de 5 años',
            say: 'El tercer paso son las banderas rojas: caídas recurrentes en los primeros tres años, o una progresión tan rápida que el paciente necesita silla de ruedas antes de cinco años.' },
          { t: 'Disautonomía grave el primer año', d: 'Ortostatismo o incontinencia',
            say: 'También una disautonomía grave precoz: hipotensión ortostática sintomática o incontinencia urinaria en el primer año. Y lo contrario: que no progrese en más de cinco años.' },
          { t: 'Descartar PSP o AMS', d: 'O causa secundaria',
            say: 'Estas banderas obligan a descartar un Parkinson-plus, como la parálisis supranuclear progresiva o la atrofia multisistémica, o una causa secundaria. Por eso, aunque el diagnóstico es clínico, la resonancia es obligatoria: descarta un parkinsonismo vascular, una hidrocefalia o una lesión estructural.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Síntomas no motores',
      title: 'El iceberg bajo el temblor',
      cards: [
        { title: 'Prodrómicos', tag: 'Años antes', kind: 'key', items: [
          { t: 'Hiposmia o anosmia', d: 'En más del 80–90 %',
            say: 'El temblor es solo la punta del iceberg. Debajo están los síntomas no motores, y los primeros son los prodrómicos, que conectan con Braak. La hiposmia, en más del ochenta a noventa por ciento, años antes del temblor.' },
          { t: 'Trastorno conductual del sueño REM', d: 'Actúa sus sueños: grita, golpea, patea',
            say: 'El trastorno conductual del sueño REM: se pierde la atonía normal de esa fase, y el paciente actúa sus sueños, con gritos, puñetazos y patadas. Tiene altísimo valor predictivo para una sinucleinopatía. Se trata con clonazepam o melatonina, y protegiendo la cama.' },
          { t: 'Constipación pertinaz', d: 'Disfunción del plexo mioentérico',
            say: 'Y la constipación pertinaz, por la disfunción del plexo del colon.' },
        ] },
        { title: 'Disautonomía', tag: 'Alfa-sinucleína periférica', kind: 'criteria', items: [
          { t: 'Hipotensión ortostática', d: 'Caída de PAS 20 o PAD 10 al pararse',
            say: 'Luego la disautonomía. La hipotensión ortostática, una caída de veinte de sistólica o diez de diastólica al ponerse de pie. Se trata con fludrocortisona o midodrina.' },
          { t: 'Sialorrea, vejiga, disfunción eréctil', d: 'Evitar anticolinérgicos',
            say: 'También sialorrea, porque se enlentece la deglución automática, urgencia urinaria, disfunción eréctil y sudoración. Y en estos pacientes se evitan los anticolinérgicos.' },
        ] },
        { title: 'Neuropsiquiátricos', tag: 'Calidad de vida', kind: 'alert', items: [
          { t: 'Depresión hasta 40–50 %', d: 'Ansiedad y apatía',
            say: 'Y lo neuropsiquiátrico: depresión, hasta en el cuarenta a cincuenta por ciento, ansiedad y apatía.' },
          { t: 'Control de impulsos', d: 'Ludopatía, compras, hipersexualidad: agonistas',
            say: 'Los trastornos del control de impulsos, como la ludopatía, las compras compulsivas o la hipersexualidad, ligados a los agonistas dopaminérgicos. Esto se pregunta.' },
          { t: 'Demencia tardía', d: 'Perfil fronto-subcortical',
            say: 'Y la demencia, de perfil fronto-subcortical, con disfunción ejecutiva y lentitud del pensamiento, que aparece tarde.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Levodopa: el estándar de oro',
      cards: [
        { title: 'Cómo funciona', tag: 'Solo sintomático', kind: 'pharma', items: [
          { t: 'Ningún fármaco es neuroprotector', d: 'El tratamiento es sintomático',
            say: 'Pasemos al tratamiento, con una idea de partida: es sintomático. Ningún fármaco ha demostrado frenar la enfermedad.' },
          { t: 'Precursor que se convierte en dopamina', d: 'Cruza la barrera por el transportador LAT1',
            say: 'La levodopa es el estándar de oro, la de mayor eficacia motora. Es un precursor: cruza la barrera hematoencefálica por un transportador de aminoácidos grandes, y en el estriado se convierte en dopamina.' },
          { t: 'Siempre con carbidopa o benserazida', d: 'Evita náuseas, vómitos e hipotensión',
            say: 'Siempre va junto a carbidopa o benserazida, que inhiben la descarboxilasa fuera del cerebro. Así la levodopa no se convierte en dopamina en la periferia, y se evitan las náuseas, los vómitos y la hipotensión.' },
        ] },
        { title: 'Regla de administración', tag: 'Se pregunta', kind: 'alert', items: [
          { t: 'Lejos de las proteínas', d: '30–60 min antes o 2 h después de comer',
            say: 'Y un detalle práctico que se pregunta: se toma lejos de las comidas ricas en proteínas, treinta a sesenta minutos antes o dos horas después. ¿Por qué? Porque los aminoácidos de la dieta compiten por el mismo transportador, en el intestino y en la barrera.' },
          { t: 'Inicio: 100/25 mg cada 8 h', d: 'Titular de a poco',
            say: 'Se parte con dosis bajas, por ejemplo cien con veinticinco miligramos tres veces al día, y se sube gradualmente según la respuesta.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Primer fármaco',
      title: 'La edad decide con qué partir',
      nodes: [
        { id: 'dx', col: 0, row: 1, k: 'start', t: 'Parkinson confirmado', s: 'Necesita tratamiento' },
        { id: 'q', col: 1, row: 1, k: 'q', t: '¿65 años o más?', s: 'O comorbilidad, deterioro cognitivo' },
        { id: 'ldo', col: 2, row: 0, k: 'good', t: 'Levodopa/carbidopa', s: 'Mejor tolerancia psiquiátrica' },
        { id: 'ago', col: 2, row: 2, k: 'good', t: 'Agonista o IMAO-B', s: 'Pramipexol · rasagilina' },
        { id: 'pos', col: 3, row: 2, k: 'mech', t: 'Posterga la levodopa', s: 'Retrasa fluctuaciones' },
        { id: 'tox', col: 4, row: 2, k: 'trap', t: 'Impulsos y somnolencia', s: 'Precio de los agonistas' },
      ],
      edges: [
        { from: 'dx', to: 'q' }, { from: 'q', to: 'ldo', label: 'sí' }, { from: 'q', to: 'ago', label: 'no, joven' },
        { from: 'ago', to: 'pos' }, { from: 'pos', to: 'tox', label: 'ojo' },
      ],
      steps: [
        { show: ['dx', 'q'], note: 'La pregunta es la edad',
          say: '¿Con qué fármaco se parte? La pregunta clave es la edad: ¿tiene sesenta y cinco años o más, o tiene comorbilidades o deterioro cognitivo?' },
        { show: ['ldo'], note: 'Adulto mayor: levodopa de entrada',
          say: 'Si es así, se parte directamente con levodopa con carbidopa. En el adulto mayor es el fármaco más seguro desde lo neuropsiquiátrico: da menos alucinaciones, menos somnolencia y menos psicosis que los agonistas.' },
        { show: ['ago'], note: 'Joven: se puede partir sin levodopa',
          say: 'En el paciente joven, menor de sesenta y cinco, con alta exigencia laboral y bajo riesgo psiquiátrico, se puede partir con un agonista dopaminérgico no ergolínico, como pramipexol o ropinirol, o con un inhibidor de la MAO-B, como rasagilina o selegilina.' },
        { show: ['pos'], note: '¿Para qué? Para ganar años',
          say: '¿Para qué? Para postergar la levodopa y así retrasar la aparición de las fluctuaciones y las disquinesias, que son su complicación a largo plazo.' },
        { show: ['tox'], note: 'El precio de los agonistas',
          say: 'Pero los agonistas tienen un precio: trastornos del control de impulsos, como la ludopatía o las compras compulsivas, y somnolencia. Por eso no se usan en el adulto mayor. Y la rasagilina, por su parte, no exige una dieta estricta sin tiramina.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones motoras',
      title: 'Cuando se acaba la luna de miel',
      cards: [
        { title: 'Por qué aparecen', tag: 'A los 3–5 años', kind: 'key', items: [
          { t: 'Luna de miel de 3 a 5 años', d: 'Luego fluctúa más de la mitad',
            say: 'Los primeros tres a cinco años la respuesta a la levodopa es excelente y estable: la luna de miel. Después, más de la mitad de los pacientes desarrolla complicaciones motoras a los cinco años.' },
          { t: 'Menos terminales, vida media corta', d: 'Levodopa plasmática: 90 minutos',
            say: '¿Por qué? Porque quedan cada vez menos terminales que almacenen dopamina, y la levodopa en la sangre dura solo unos noventa minutos. El cerebro queda a merced de cada dosis.' },
        ] },
        { title: 'Wearing-off', tag: 'Fin de dosis', kind: 'pharma', items: [
          { t: 'El efecto dura 2–3 h en vez de 4–5', d: 'Vuelve el temblor antes de la toma',
            say: 'La primera es el deterioro de fin de dosis, el wearing-off. Cada dosis dura menos, dos a tres horas en vez de cuatro a cinco, y la rigidez y el temblor vuelven antes de la siguiente toma.' },
          { t: 'Fraccionar las tomas', d: 'Entacapona 200 mg con cada toma',
            say: 'Se maneja fraccionando la levodopa, en tomas más frecuentes, y agregando entacapona, doscientos miligramos con cada toma. Es un inhibidor de la COMT que prolonga la vida de la levodopa, y tiñe la orina de naranja. También sirven la rasagilina o un agonista.' },
        ] },
        { title: 'Disquinesias y on-off', tag: 'Pico de dosis', kind: 'alert', items: [
          { t: 'Disquinesias en el pico', d: 'Movimientos coreicos: sobra dopamina',
            say: 'La segunda, las disquinesias de pico de dosis: movimientos coreicos o distónicos justo cuando la levodopa está en su nivel más alto. Aquí sobra dopamina.' },
          { t: 'Bajar la dosis unitaria + amantadina', d: 'Antagonista NMDA; da livedo reticularis',
            say: 'Se baja un poco la dosis de cada toma y se aumenta la frecuencia, y se agrega amantadina, un antagonista NMDA, que es el fármaco específico para las disquinesias. Da livedo reticularis.' },
          { t: 'On-off y congelamiento', d: 'Rescate: apomorfina subcutánea',
            say: 'Y la tercera, el fenómeno on-off: cambios bruscos e impredecibles entre moverse bien y quedar inmóvil, y el congelamiento de la marcha. Se rescata con apomorfina subcutánea.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapias avanzadas',
      title: 'Cuando los fármacos ya no alcanzan',
      cards: [
        { title: 'Estimulación cerebral profunda', tag: 'Garantía GES', kind: 'key', items: [
          { t: 'Núcleo subtalámico o pálido interno', d: 'Electrodos bilaterales',
            say: 'Cuando las fluctuaciones son graves y las disquinesias no responden, existe la estimulación cerebral profunda: electrodos bilaterales en el núcleo subtalámico o el globo pálido interno. Fíjate que el núcleo subtalámico es la estación de la vía indirecta que vimos al comienzo.' },
          { t: 'Solo sin demencia ni depresión grave', d: 'Indemnidad cognitiva y psiquiátrica',
            say: 'El requisito es que el paciente conserve la cognición y no tenga una depresión grave. Si hay demencia, no es candidato.' },
        ] },
        { title: 'Alternativa', tag: 'Infusión continua', kind: 'normal', items: [
          { t: 'Gel de levodopa por gastrostomía', d: 'Infusión enteral continua',
            say: 'La alternativa es la infusión enteral continua de gel de levodopa con carbidopa, por una gastrostomía. La idea es la misma: reemplazar las dosis en pulsos por un aporte continuo.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos el diagnóstico y el tratamiento en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Temblor de reposo + bradicinesia, asimétrico', 'Parkinson: diagnóstico clínico', 'Esperar un examen que lo confirme'],
          say: 'Repasemos las trampas. Temblor de reposo con bradicinesia, asimétrico: es Parkinson, y el diagnóstico es clínico. Esperar un examen que lo confirme es el error.' },
        { cells: ['Temblor sin bradicinesia', 'No es Parkinson', 'Iniciar levodopa'],
          say: 'Sin bradicinesia no hay Parkinson, aunque haya temblor.' },
        { cells: ['Parkinson en mayor de 65', 'Levodopa/carbidopa', 'Agonista dopaminérgico'],
          say: 'Parkinson en un mayor de sesenta y cinco: levodopa con carbidopa. El agonista es el error, por la psicosis y la somnolencia.' },
        { cells: ['Ludopatía o compras tras iniciar tratamiento', 'Sospechar el agonista', 'Derivar solo a psiquiatría'],
          say: 'Ludopatía o compras compulsivas después de iniciar tratamiento: sospecha del agonista dopaminérgico.' },
        { cells: ['Temblor que vuelve antes de la toma', 'Fraccionar o agregar entacapona', 'Subir cada dosis'],
          say: 'El temblor vuelve antes de la próxima toma: wearing-off. Se fracciona o se agrega entacapona.' },
        { cells: ['Movimientos coreicos en el pico', 'Bajar dosis unitaria + amantadina', 'Agregar más levodopa'],
          say: 'Movimientos coreicos en el pico de la dosis: sobra dopamina. Se baja la dosis unitaria y se agrega amantadina. Subir la levodopa es el error.' },
        { cells: ['Caídas tempranas o mirada vertical', 'Pensar en Parkinson-plus', 'Asumir Parkinson idiopático'],
          say: 'Y caídas precoces o parálisis de la mirada vertical: piensa en un Parkinson-plus, no en un Parkinson idiopático.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 68 años con 14 meses de temblor de la mano derecha que aparece con el brazo apoyado y cede al tomar una taza. Camina más lento y perdió expresividad facial. Examen: hipomimia, hipofonía, braceo derecho disminuido, pasos cortos, rigidez en rueda dentada en muñeca y codo derechos, temblor de reposo de 5 Hz y golpeteo de dedos lento y decreciente a derecha. Sin caídas, sin alteración oculomotora ni disautonomía.',
      question: '¿Cuál es la conducta farmacológica más adecuada?',
      options: [
        { letter: 'A', text: 'Propranolol 40 mg cada 12 horas' },
        { letter: 'B', text: 'Pramipexol como monoterapia para postergar la levodopa' },
        { letter: 'C', text: 'Levodopa/carbidopa 100/25 mg cada 8 horas, lejos de las comidas proteicas' },
        { letter: 'D', text: 'Diferir el tratamiento hasta que aparezca inestabilidad postural' },
        { letter: 'E', text: 'Amantadina 100 mg cada 12 horas' },
      ],
      correct: 'C',
      explanation: 'Parkinson idiopático con criterios MDS: bradicinesia (finger tapping decreciente) + temblor de reposo + rigidez, asimétrico y sin banderas rojas. En mayores de 65 años se inicia levodopa/carbidopa, alejada de las comidas proteicas. Los agonistas se reservan para menores de 65; la amantadina es para disquinesias; el propranolol es para el temblor esencial.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y ocho años, con catorce meses de temblor en la mano derecha que aparece en reposo y cede al tomar una taza. Camina más lento. Al examen tiene hipomimia, voz baja, menos braceo a derecha, rigidez en rueda dentada y temblor de reposo a derecha, y el golpeteo de dedos se hace lento y pequeño. Sin caídas, alteraciones de la mirada ni disautonomía.',
        question: '¿Cuál es la conducta farmacológica más adecuada?',
        options: 'Las opciones: propranolol, pramipexol para postergar la levodopa, levodopa con carbidopa lejos de las proteínas, esperar a que aparezca inestabilidad, o amantadina. Piénsalo.',
        answer: 'Es la C. Tiene la bradicinesia obligatoria, más temblor de reposo y rigidez, asimétrico y sin banderas rojas: Parkinson. Y como tiene sesenta y ocho años, se parte con levodopa. El pramipexol es el distractor más tentador, pero es para el paciente joven, y en él da más psicosis y somnolencia. La amantadina es para las disquinesias, el propranolol es para el temblor esencial, y diferir el tratamiento no tiene sentido.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 22',
      stem: 'Un hombre de 55 años, diabético de larga data, presenta temblor de reposo y lentitud al realizar actividades, como vestirse, lo que se ha asociado a dificultades para iniciar la marcha. Relata que se había caído hacia adelante, en dos oportunidades, al empezar a caminar. Al inicio de la marcha es lento e inseguro, pero luego alcanza una velocidad normal, la que se mantiene por el resto del tiempo. No presenta disminución de las fuerzas de las extremidades y sus reflejos osteotendíneos son normales, al igual que la sensibilidad.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Enfermedad de Parkinson' },
        { letter: 'B', text: 'Enfermedad de Alzheimer' },
        { letter: 'C', text: 'Polineuropatía diabética' },
        { letter: 'D', text: 'Polimialgia reumática' },
        { letter: 'E', text: 'Miopatía por cuerpos de inclusión' },
      ],
      correct: 'A',
      explanation: 'Temblor de reposo + bradicinesia (lentitud para vestirse) + dificultad para iniciar la marcha: enfermedad de Parkinson. Fuerza, reflejos y sensibilidad normales descartan la polineuropatía diabética y las miopatías.',
      say: {
        stem: 'Ahora las preguntas reales. La primera, del EUNACOM de diciembre de dos mil dieciocho. Hombre de cincuenta y cinco años, diabético de larga data, con temblor de reposo y lentitud para vestirse, y dificultad para iniciar la marcha: le cuesta partir, pero después camina a velocidad normal. Fuerza, reflejos y sensibilidad normales.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: Parkinson, Alzheimer, polineuropatía diabética, polimialgia reumática o miopatía por cuerpos de inclusión. Piénsalo.',
        answer: 'Es la A. Temblor de reposo, bradicinesia y dificultad para iniciar la marcha: Parkinson clásico. La polineuropatía diabética es el distractor, puesto por la diabetes, pero con sensibilidad y reflejos normales no hay neuropatía. Y el Alzheimer es una demencia, que no explica el temblor ni la lentitud motora.',
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
      explanation: 'Temblor de reposo asimétrico + bradicinesia: enfermedad de Parkinson, de diagnóstico clínico; la respuesta a levodopa apoya el diagnóstico. El litio puede dar temblor, pero los niveles están en rango. El propranolol es para el temblor esencial.',
      say: {
        stem: 'La segunda, del EUNACOM de diciembre de dos mil veinticinco. Hombre de sesenta y dos años que usa doxazosina, tamsulosina y litio. Hace cuatro meses tiene temblor de manos, mayor a derecha, que aparece en reposo, con lentitud de movimientos. Los niveles de sus fármacos están en rango.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: suspender la doxazosina, bajar el litio, suspender la tamsulosina, hacer una prueba con levodopa, o iniciar propranolol. Piénsalo.',
        answer: 'Es la D. Temblor de reposo asimétrico con bradicinesia es Parkinson, el diagnóstico es clínico, y una buena respuesta a la levodopa lo apoya. El litio es el distractor, porque da temblor, pero te dicen que los niveles están en rango. Y el propranolol es para el temblor esencial, que no es de reposo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 98',
      stem: 'Hombre de 65 años con antecedente de enfermedad de Parkinson. Su pareja refiere que durante el sueño emite gritos, golpea y patea. El paciente no recuerda nada al despertar.',
      question: '¿Cuál es el diagnóstico?',
      options: [
        { letter: 'A', text: 'Trastorno de conducta del sueño REM (RBD)' },
        { letter: 'B', text: 'Sonambulismo' },
        { letter: 'C', text: 'Terrores nocturnos' },
        { letter: 'D', text: 'Apnea obstructiva del sueño' },
        { letter: 'E', text: 'Epilepsia nocturna del lóbulo frontal' },
      ],
      correct: 'A',
      explanation: 'Conducta violenta durante el sueño en un paciente con Parkinson: trastorno conductual del sueño REM. Se pierde la atonía del REM y el paciente actúa sus sueños. Es la parasomnia típica de las sinucleinopatías.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil veinticinco. Hombre de sesenta y cinco años con Parkinson. Su pareja cuenta que durmiendo grita, golpea y patea. Él no recuerda nada.',
        question: '¿Cuál es el diagnóstico?',
        options: 'Las opciones: trastorno conductual del sueño REM, sonambulismo, terrores nocturnos, apnea del sueño, o epilepsia nocturna del lóbulo frontal. Piénsalo.',
        answer: 'Es la A, trastorno conductual del sueño REM. Se pierde la atonía del sueño REM y el paciente actúa sus sueños, y es típico de las sinucleinopatías, como el Parkinson. El sonambulismo tienta, pero aquí el paciente actúa un sueño violento, y en alguien con Parkinson eso apunta al sueño REM. Y recuerda que este trastorno puede aparecer años antes del temblor.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Clínico', kind: 'key', items: [
          { t: 'Bradicinesia + temblor o rigidez', d: 'Asimétrico al inicio',
            say: 'Cerremos con las reglas de oro. El Parkinson es clínico: bradicinesia obligatoria, más temblor de reposo o rigidez, asimétrico al inicio.' },
          { t: 'Caídas precoces, mirada vertical: plus', d: 'Constipación, hiposmia, REM: pródromos',
            say: 'Caídas precoces o mirada vertical alterada te sacan del Parkinson idiopático. Y la constipación, la hiposmia y el trastorno del sueño REM lo anteceden por años.' },
        ] },
        { title: 'Primer fármaco', tag: 'Según edad', kind: 'pharma', items: [
          { t: 'Mayor de 65: levodopa/carbidopa', d: 'Lejos de las proteínas',
            say: 'Mayor de sesenta y cinco: levodopa con carbidopa, lejos de las proteínas.' },
          { t: 'Joven: agonista o IMAO-B', d: 'Ojo con el control de impulsos',
            say: 'Joven: un agonista o un inhibidor de la MAO-B, vigilando el control de impulsos.' },
        ] },
        { title: 'Complicaciones', tag: 'Tras la luna de miel', kind: 'alert', items: [
          { t: 'Wearing-off: fraccionar + entacapona', d: 'Disquinesias: amantadina',
            say: 'Wearing-off: fraccionar y entacapona. Disquinesias de pico: bajar la dosis unitaria y amantadina.' },
          { t: 'Refractario sin demencia: DBS', d: 'Subtalámico o pálido interno',
            say: 'Y el refractario sin demencia: estimulación cerebral profunda. Si te llevas una sola idea de hoy: el Parkinson se diagnostica con la bradicinesia, y el primer fármaco lo decide la edad. En la próxima clase vemos lo que imita al Parkinson: los parkinsonismos secundarios, por fármacos, y los Parkinson-plus. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Enfermedad de Parkinson',
    root: N('start', 'Temblor o lentitud', 'Examen neurológico',
      'Paciente que consulta por temblor o lentitud. Todo parte del examen.',
      ['', N('q', '¿Hay bradicinesia?', 'Golpeteo de dedos que decrece',
        '¿Hay bradicinesia, con decremento en los movimientos repetidos?',
        ['NO', N('refer', 'No es parkinsonismo', 'Buscar otra causa del temblor',
          'Sin bradicinesia no es Parkinson. Se busca otra causa del temblor, como el temblor esencial.')],
        ['SÍ', N('q', '¿Temblor de reposo o rigidez?', 'Al menos uno',
          'Si hay bradicinesia, ¿se acompaña de temblor de reposo o de rigidez?',
          ['SÍ', N('q', '¿Exclusiones o banderas rojas?', 'Fármacos, caídas precoces, mirada vertical',
            'Es un parkinsonismo. ¿Usa bloqueadores de dopamina, o tiene caídas precoces, parálisis de la mirada vertical, signos cerebelosos o disautonomía grave temprana? Además, resonancia para descartar causas estructurales.',
            ['SÍ', N('alert', 'Parkinson secundario o plus', 'Suspender fármaco · derivar',
              'Si hay alguna, piensa en un parkinsonismo por fármacos o en un Parkinson-plus, y se deriva.')],
            ['NO', N('q', 'Parkinson idiopático: ¿65 años o más?', 'GES: confirma el neurólogo',
              'Si no hay ninguna, es un Parkinson idiopático, con garantía GES y confirmación por neurólogo. ¿Tiene sesenta y cinco años o más?',
              ['SÍ', N('do', 'Levodopa/carbidopa', 'Lejos de las proteínas',
                'Si es mayor, levodopa con carbidopa, lejos de las comidas proteicas.',
                ['Con los años', N('ok', 'Wearing-off o disquinesias', 'Entacapona · amantadina · DBS',
                  'Con los años aparecen las fluctuaciones: wearing-off, con fraccionamiento o entacapona; disquinesias, con amantadina; y si son refractarias y no hay demencia, estimulación cerebral profunda.')])],
              ['NO', N('do', 'Agonista o IMAO-B', 'Pramipexol, rasagilina',
                'Si es joven, se puede partir con un agonista o un inhibidor de la MAO-B, vigilando el control de impulsos, para postergar la levodopa.')])])])])]),
  },
};
