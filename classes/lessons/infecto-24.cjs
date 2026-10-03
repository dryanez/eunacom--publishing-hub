// Clase 5.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_infectologia.cjs (inf-24).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-24',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'La regla de los 60 minutos, el riesgo MASCC y la fiebre que no cede',
      say: 'Bienvenidos. Cerramos el bloque de infecciones con la principal emergencia infectológica del paciente oncológico: la neutropenia febril después de la quimioterapia. Si recuerdas la clase de sepsis y el paquete de la primera hora, hoy vas a ver la misma lógica llevada al extremo. El examen pregunta dos cosas casi siempre: qué antibiótico va y en cuánto tiempo, y qué haces si la fiebre no se va al cuarto día. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué es una emergencia?',
      nodes: [
        { id: 'qt', col: 0, row: 1, k: 'cause', t: 'Quimioterapia', s: 'Destruye la médula' },
        { id: 'neu', col: 1, row: 1, k: 'mech', t: 'Sin neutrófilos', s: 'RAN bajo 500' },
        { id: 'pus', col: 2, row: 0, k: 'effect', t: 'Sin pus ni inflamación', s: 'No hay quien la haga' },
        { id: 'fie', col: 2, row: 2, k: 'alert', t: 'La fiebre es la única alarma', s: 'Puede ser bacteriemia' },
        { id: 'pse', col: 3, row: 1, k: 'risk', t: 'Pseudomonas aeruginosa', s: 'Shock fulminante en < 12 h' },
      ],
      edges: [
        { from: 'qt', to: 'neu' }, { from: 'neu', to: 'pus' }, { from: 'neu', to: 'fie' },
        { from: 'fie', to: 'pse', label: 'si se espera' },
      ],
      steps: [
        { show: ['qt'], note: 'La quimioterapia no distingue células',
          say: 'Partamos por el mecanismo. La quimioterapia ataca a las células que se dividen rápido, y eso incluye a la médula ósea. Unos días después del ciclo, los neutrófilos caen.' },
        { show: ['neu'], note: 'Sin neutrófilos no hay defensa ni inflamación',
          say: 'Y el neutrófilo no solo mata bacterias. También es el que arma la respuesta inflamatoria que tú ves en el examen físico.' },
        { show: ['pus'], note: 'Sin pus: el foco no se ve',
          say: 'Entonces pasa algo muy engañoso. El neutropénico no hace pus ni los signos inflamatorios habituales. Puede tener una neumonía sin condensación clara, o una infección urinaria sin piuria. El foco, simplemente, no se ve.' },
        { show: ['fie'], note: 'Fiebre sin foco en este paciente = bacteriemia hasta demostrar lo contrario',
          say: 'Por eso la fiebre suele ser la única alarma. Fíjate que en este paciente, una fiebre sin foco no es tranquilizadora: es justamente lo que esperas ver en una bacteriemia.' },
        { show: ['pse'], note: 'El germen más temido',
          say: 'Y el germen más temido es Pseudomonas aeruginosa, capaz de llevar a un shock séptico fulminante en menos de doce horas. Guarda este nombre, porque va a decidir qué antibiótico elegimos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Definiciones',
      title: '¿Cuándo hablamos de neutropenia febril?',
      cards: [
        { title: 'Fiebre', tag: 'Registro axilar', kind: 'criteria', items: [
          { t: 'Un registro ≥ 38,3 °C', d: 'Basta una sola toma',
            say: 'Veamos las definiciones, porque el examen las pone en el enunciado y espera que las reconozcas. Fiebre es un registro axilar único de treinta y ocho coma tres grados o más.' },
          { t: 'O ≥ 38,0 °C por más de 1 hora', d: 'Fiebre sostenida',
            say: 'O bien, treinta y ocho grados o más mantenidos por más de una hora.' },
        ] },
        { title: 'Neutropenia', tag: 'Recuento absoluto', kind: 'key', items: [
          { t: 'RAN < 500/mm³', d: 'Recuento absoluto de neutrófilos',
            say: 'Neutropenia es un recuento absoluto de neutrófilos, el RAN, bajo quinientos por milímetro cúbico.' },
          { t: 'O < 1.000 con caída prevista', d: 'Bajo 500 en las próximas 48 h',
            say: 'También cuenta un RAN bajo mil, si se espera que caiga bajo quinientos en las próximas cuarenta y ocho horas, como pasa en los días que siguen a la quimioterapia.' },
        ] },
        { title: 'Calcular el RAN', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Leucocitos × % de neutrófilos', d: 'Segmentados + baciliformes',
            say: 'Y ojo, porque el examen muchas veces no te da el RAN: te da los leucocitos y la fórmula. Tú multiplicas los leucocitos por el porcentaje de segmentados más baciliformes.' },
          { t: '800 × 35 % = 280/mm³', d: 'Neutropenia febril',
            say: 'Por ejemplo, ochocientos leucocitos con quince por ciento de baciliformes y veinte de segmentados dan un RAN de doscientos ochenta. Neutropenia, sin ninguna duda. Y por eso el primer examen que pides es el hemograma: sin él no puedes hacer el diagnóstico.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Manejo de emergencia',
      title: 'La regla de los 60 minutos',
      nodes: [
        { id: 'ing', col: 0, row: 1, k: 'start', t: 'Fiebre post-quimioterapia', s: 'Llega a urgencias' },
        { id: 'hc', col: 1, row: 1, k: 'mech', t: '2 hemocultivos', s: 'Periférico y por el catéter' },
        { id: 'atb', col: 2, row: 1, k: 'good', t: 'Antibiótico EV < 60 min', s: 'Tiempo puerta-antibiótico' },
        { id: 'esp', col: 2, row: 3, k: 'trap', t: 'Esperar los cultivos', s: 'O el foco' },
        { id: 'sho', col: 3, row: 3, k: 'risk', t: 'Shock séptico', s: 'En horas' },
      ],
      edges: [
        { from: 'ing', to: 'hc', label: 'rápido' }, { from: 'hc', to: 'atb' },
        { from: 'hc', to: 'esp', label: 'nunca' }, { from: 'esp', to: 'sho' },
      ],
      steps: [
        { show: ['ing'], note: 'Emergencia médica absoluta',
          say: 'Ahora, el concepto que más se pregunta. Un paciente que tuvo quimioterapia hace unos días llega con fiebre. Eso es una emergencia médica absoluta, y el reloj empieza a correr desde que cruza la puerta.' },
        { show: ['hc'], note: 'Cultivos rápidos, sin retrasar',
          say: 'Primero, la toma rápida de dos hemocultivos. Si tiene catéter venoso central, uno periférico y otro a través del catéter. Esto se hace en minutos, no en horas.' },
        { show: ['atb'], note: 'Antibiótico en la primera hora',
          say: 'Y enseguida, el antibiótico endovenoso, infundido dentro de los primeros sesenta minutos. Esa es la regla de los sesenta minutos: el tiempo puerta-antibiótico tiene que ser menor a una hora. Es la misma idea del paquete de la primera hora de la sepsis.' },
        { show: ['esp', 'sho'], note: 'Trampa: esperar resultados',
          say: 'Y la trampa clásica: esperar el resultado de los hemocultivos, o seguir buscando el foco, antes de partir. Suena ordenado, pero con Pseudomonas en juego, esperar puede significar un shock séptico en pocas horas. Se cultiva y se trata, en ese orden y sin pausa.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Estratificación MASCC',
      title: 'Alto o bajo riesgo: dónde y con qué',
      cards: [
        { title: 'Alto riesgo', tag: 'MASCC < 21', kind: 'alert', items: [
          { t: 'Hospitalizar en aislamiento', d: 'Aislamiento protector',
            say: 'Una vez que el antibiótico va en camino, estratificas el riesgo con el score MASCC. Con menos de veintiún puntos, el paciente es de alto riesgo: se hospitaliza en aislamiento protector.' },
          { t: 'Cefepime 2 g c/8 h EV', d: 'O piperacilina-tazobactam 4,5 g c/6 h',
            say: 'Y el antibiótico de elección es una monoterapia antipseudomónica endovenosa: cefepime, dos gramos cada ocho horas. La alternativa es piperacilina con tazobactam, cuatro coma cinco gramos cada seis horas. Fíjate que las dos cubren Pseudomonas, el germen que vimos al inicio.' },
        ] },
        { title: 'Bajo riesgo', tag: 'MASCC ≥ 21', kind: 'normal', items: [
          { t: 'Opción ambulatoria seleccionada', d: 'Estable, con control en 24 h',
            say: 'Con veintiún puntos o más, el paciente es de bajo riesgo. Aquí existe una opción ambulatoria, pero solo en pacientes estables y seleccionados, con domicilio estricto y control en veinticuatro horas.' },
          { t: 'Ciprofloxacino + amoxicilina-clavulánico', d: 'Vía oral',
            say: 'El esquema es oral: ciprofloxacino más amoxicilina con ácido clavulánico.' },
        ] },
        { title: 'La trampa', tag: 'Cobertura', kind: 'pharma', items: [
          { t: 'Ceftriaxona no cubre Pseudomonas', d: 'No es el antibiótico de elección',
            say: 'Y ahora el distractor que más aparece: la ceftriaxona. Es una cefalosporina de tercera generación muy conocida, pero no cubre Pseudomonas. Por eso, en el paciente de alto riesgo, no es la respuesta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Vancomicina',
      title: '¿Cuándo se agrega cobertura Gram positiva?',
      cards: [
        { title: 'No de entrada', tag: 'La regla', kind: 'key', items: [
          { t: 'El paciente estable no la necesita', d: 'Cefepime solo',
            say: 'Otra decisión que se pregunta es la vancomicina. La regla es que no se agrega de entrada. El paciente neutropénico febril y estable recibe la monoterapia antipseudomónica, y nada más.' },
        ] },
        { title: 'Sí se agrega si hay', tag: 'Indicaciones', kind: 'criteria', items: [
          { t: 'Shock séptico', d: 'Inestabilidad hemodinámica',
            say: 'La vancomicina entra solo en situaciones concretas. La primera es el shock séptico.' },
          { t: 'Infección franca del catéter', d: 'Sitio de inserción comprometido',
            say: 'La segunda, una infección evidente del catéter. Por eso siempre miras el sitio de inserción: si está sano, no suma.' },
          { t: 'Mucositis severa o sospecha de SAMR', d: 'Foco Gram positivo',
            say: 'Y la tercera, una mucositis severa o la sospecha de Staphylococcus aureus resistente a meticilina. En todos estos casos la sospecha es un Gram positivo.' },
        ] },
        { title: 'Dosis', tag: 'Alto riesgo con shock o catéter', kind: 'pharma', items: [
          { t: 'Vancomicina 15–20 mg/kg EV', d: 'Junto al cefepime, en UCI',
            say: 'Cuando se indica, va vancomicina de quince a veinte miligramos por kilo endovenosa, sumada al cefepime, y ese paciente se maneja en la unidad de paciente crítico.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fiebre persistente',
      title: 'Si la fiebre no cede al 4.º–7.º día',
      nodes: [
        { id: 'pf', col: 0, row: 1, k: 'start', t: 'Fiebre al 4.º–7.º día', s: 'Con amplio espectro' },
        { id: 'hcn', col: 1, row: 1, k: 'q', t: 'Hemocultivos negativos', s: 'Sin respuesta al antibiótico' },
        { id: 'hon', col: 2, row: 1, k: 'mech', t: 'Micosis invasora', s: 'Aspergilosis o candidiasis' },
        { id: 'tac', col: 3, row: 0, k: 'good', t: 'TAC de tórax alta resolución', s: 'Buscar el signo del halo' },
        { id: 'vor', col: 3, row: 2, k: 'good', t: 'Voriconazol EV', s: 'O equinocandina: caspofungina' },
        { id: 'tra', col: 1, row: 3, k: 'trap', t: 'Cambiar o suspender antibióticos', s: 'El hongo no responde' },
      ],
      edges: [
        { from: 'pf', to: 'hcn' }, { from: 'hcn', to: 'hon', label: 'pensar' },
        { from: 'hon', to: 'tac' }, { from: 'hon', to: 'vor' },
        { from: 'hcn', to: 'tra', label: 'error' },
      ],
      steps: [
        { show: ['pf'], note: 'La segunda pregunta clásica',
          say: 'Vamos a la segunda pregunta clásica del tema. El paciente lleva de cuatro a siete días con antibióticos de amplio espectro, y sigue con fiebre.' },
        { show: ['hcn'], note: 'Cultivos negativos, sin respuesta',
          say: 'Los hemocultivos salieron negativos y no responde a una cobertura bacteriana correcta. ¿Qué está pasando?' },
        { show: ['hon'], note: 'La causa más frecuente: un hongo',
          say: 'La causa más frecuente es una infección fúngica invasora: aspergilosis pulmonar o candidiasis. Tiene lógica: le quitamos las bacterias con los antibióticos, pero sigue sin neutrófilos, y el hongo aprovecha.' },
        { show: ['tac'], note: 'Signo del halo = Aspergillus',
          say: 'La conducta tiene dos partes, y las dos son obligatorias. Primero, TAC de tórax de alta resolución, buscando el signo del halo: un nódulo rodeado de un halo, que es característico del Aspergillus.' },
        { show: ['vor'], note: 'Antifúngico EV inmediato',
          say: 'Y segundo, iniciar de inmediato un antifúngico endovenoso: voriconazol, o una equinocandina como la caspofungina.' },
        { show: ['tra'], note: 'Trampa: seguir moviendo antibióticos',
          say: 'La trampa es seguir moviendo antibióticos, cambiarlos a vancomicina o suspenderlos para observar. Ninguna de esas opciones trata un hongo.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol, desde que el paciente llega con fiebre hasta el día en que la fiebre no cede.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Estratificación y manejo',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Fiebre post-QT, sin hemograma', 'Hemograma: calcular el RAN', 'Partir por imágenes'],
          say: 'Repasemos las trampas. Fiebre después de la quimioterapia: lo primero es el hemograma, porque sin RAN no hay diagnóstico. Partir por imágenes es el error.' },
        { cells: ['Alto riesgo, MASCC < 21', 'Cefepime 2 g c/8 h EV en < 60 min', 'Esperar los hemocultivos'],
          say: 'Alto riesgo, MASCC bajo veintiuno: hospitalizar en aislamiento y cefepime endovenoso en menos de sesenta minutos. El error es esperar los hemocultivos.' },
        { cells: ['Alto riesgo, estable', 'Monoterapia antipseudomónica', 'Ceftriaxona, o vancomicina de entrada'],
          say: 'En el paciente estable, la monoterapia antipseudomónica basta. Caen la ceftriaxona, que no cubre Pseudomonas, y la vancomicina de entrada.' },
        { cells: ['Alto riesgo con shock o catéter', 'Cefepime + vancomicina, en UCI', 'Cefepime solo'],
          say: 'Si hay shock o infección del catéter, ahora sí: cefepime más vancomicina, en la unidad de paciente crítico.' },
        { cells: ['Bajo riesgo, MASCC ≥ 21', 'Ciprofloxacino + amoxicilina-clavulánico oral', 'Alta sin control'],
          say: 'Bajo riesgo, veintiuno o más: ciprofloxacino con amoxicilina y clavulánico oral, en pacientes estables y seleccionados, con control en veinticuatro horas.' },
        { cells: ['Fiebre al 4.º–7.º día', 'TAC de tórax + voriconazol o caspofungina', 'Cambiar o suspender antibióticos'],
          say: 'Y fiebre persistente al cuarto a séptimo día: TAC de tórax y voriconazol o caspofungina. Cambiar o suspender los antibióticos no trata el hongo.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 54 años en quimioterapia por linfoma no Hodgkin, último ciclo hace 9 días. Consulta por calofríos. T° 38,6 °C axilar, FC 110 lpm, PA 100/65 mmHg. Sin foco respiratorio, urinario ni abdominal; sitio del catéter venoso central sano. Leucocitos 800/mm³ (15 % baciliformes, 20 % segmentados), plaquetas 65.000/mm³.',
      question: 'Tras tomar 2 hemocultivos, ¿cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Hospitalizar en aislamiento y cefepime 2 g c/8 h EV dentro de la primera hora' },
        { letter: 'B', text: 'Cefepime más vancomicina EV por el catéter venoso central' },
        { letter: 'C', text: 'Ceftriaxona 2 g EV y control en 24 horas' },
        { letter: 'D', text: 'Esperar el resultado de los hemocultivos y buscar el foco' },
        { letter: 'E', text: 'Ciprofloxacino más amoxicilina-clavulánico oral ambulatorio' },
      ],
      correct: 'A',
      explanation: 'RAN = 800 × 35 % = 280/mm³ con fiebre ≥ 38,3 °C: neutropenia febril. Es de alto riesgo y requiere hospitalización en aislamiento y monoterapia antipseudomónica EV (cefepime) en menos de 60 minutos. No hay shock ni infección del catéter, así que la vancomicina de entrada no está indicada.',
      say: {
        stem: 'Vamos con un caso. Hombre de cincuenta y cuatro años, en quimioterapia por un linfoma no Hodgkin, con el último ciclo hace nueve días. Llega con calofríos, treinta y ocho coma seis grados, frecuencia cardíaca de ciento diez y presión de cien sesenta y cinco. No hay foco, y el sitio del catéter está sano. Tiene ochocientos leucocitos, con quince por ciento de baciliformes y veinte de segmentados.',
        question: 'Ya tomaste los dos hemocultivos. ¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: hospitalizar con cefepime en la primera hora, cefepime más vancomicina, ceftriaxona con control al día siguiente, esperar los cultivos, o antibióticos orales ambulatorios. Piénsalo.',
        answer: 'Es la A. Calcula el RAN: ochocientos por treinta y cinco por ciento da doscientos ochenta. Con esa fiebre, es neutropenia febril, y va cefepime endovenoso antes de una hora, en aislamiento. El distractor tentador es la B, porque el paciente tiene catéter. Pero el sitio está sano y no hay shock, así que la vancomicina de entrada no suma. La ceftriaxona no cubre Pseudomonas, y esperar los cultivos rompe la regla de los sesenta minutos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 168',
      stem: 'Paciente con cáncer de mama en quimioterapia hace 9 días, hace 3 días comienza con fiebre.',
      question: '¿Cuál es el examen inicial para iniciar estudio?',
      options: [
        { letter: 'A', text: 'Hemograma' },
        { letter: 'B', text: 'Hemocultivos periféricos x2' },
        { letter: 'C', text: 'TAC de tórax-abdomen-pelvis' },
        { letter: 'D', text: 'PCR y procalcitonina' },
        { letter: 'E', text: 'Uroanálisis y urocultivo' },
      ],
      correct: 'A',
      explanation: 'La neutropenia febril se define por fiebre más un RAN < 500/mm³. El hemograma es el examen inicial: sin el recuento de neutrófilos no hay diagnóstico ni estratificación.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de enero de dos mil veintitrés. Paciente con cáncer de mama, con quimioterapia hace nueve días, que desde hace tres días tiene fiebre.',
        question: '¿Cuál es el examen inicial para iniciar el estudio?',
        options: 'Las opciones: hemograma, dos hemocultivos periféricos, TAC de tórax, abdomen y pelvis, PCR y procalcitonina, o uroanálisis con urocultivo. Piénsalo.',
        answer: 'Es la A, el hemograma. La neutropenia febril es fiebre más un RAN bajo quinientos, y ese número solo te lo da el hemograma. Los hemocultivos son el distractor tentador, porque también se toman de inmediato. Pero la pregunta es qué examen inicia el estudio, y es el que confirma que estás frente a una neutropenia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 109',
      stem: 'Una paciente de 55 años, en quimioterapia por leucemia mieloide aguda, inicia desde hace algunas horas fiebre alta, cefalea y dolor al movimiento ocular, refiere haber estado en contacto con su hijo que cursaba con cuadro respiratorio alto. Se realiza exámenes donde destaca hemoglobina 8.5 mg/dL, leucocitos 1.000/mm3 (10% neutrófilos 90% linfocitos) y plaquetas 80.000/mm3.',
      question: 'La conducta más adecuada frente a esta paciente es:',
      options: [
        { letter: 'A', text: 'Indicar manejo sintomático' },
        { letter: 'B', text: 'Indicar Ceftazidima con amikacina endovenosas' },
        { letter: 'C', text: 'Indicar anfotericina B endovenoso' },
        { letter: 'D', text: 'Indicar oseltamivir endovenoso' },
        { letter: 'E', text: 'Indicar aislamiento e iniciar ceftriaxona endovenosa' },
      ],
      correct: 'B',
      explanation: 'RAN = 1.000 × 10 % = 100/mm³ con fiebre: neutropenia febril. Lo que define la respuesta es la cobertura antipseudomónica EV inmediata; ceftazidima con amikacina es la única alternativa que la ofrece. Hoy el esquema de elección del libro es la monoterapia con cefepime. La ceftriaxona no cubre Pseudomonas.',
      say: {
        stem: 'Esta es del EUNACOM de julio de dos mil trece. Paciente de cincuenta y cinco años, en quimioterapia por una leucemia mieloide aguda, con fiebre alta, cefalea y dolor ocular desde hace algunas horas, y un hijo con un cuadro respiratorio. Tiene mil leucocitos, con diez por ciento de neutrófilos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: manejo sintomático, ceftazidima con amikacina, anfotericina B, oseltamivir, o aislamiento con ceftriaxona. Piénsalo.',
        answer: 'Es la B. Calcula el RAN: mil por diez por ciento, cien neutrófilos. No te distraigas con el contacto respiratorio: es una neutropenia febril, y lo que manda es la cobertura antipseudomónica endovenosa. La E es la trampa, porque el aislamiento suena correcto, pero la ceftriaxona no cubre Pseudomonas. Y ojo: hoy el esquema de elección es la monoterapia con cefepime, pero entre estas opciones, la única que cubre Pseudomonas es la B.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 61',
      stem: 'Paciente con leucemia en quimioterapia. Recuento absoluto de neutrófilos: 400/mm³. Inicia fiebre 38.5°C. Inicia ATB de amplio espectro. A las 72 horas persiste febril sin foco identificado.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Agregar antifúngico empírico (anfotericina B liposomal o voriconazol)' },
        { letter: 'B', text: 'Cambiar antibiótico a vancomicina' },
        { letter: 'C', text: 'Realizar PET-CT para buscar foco' },
        { letter: 'D', text: 'Suspender ATB y observar' },
        { letter: 'E', text: 'Agregar metronidazol' },
      ],
      correct: 'A',
      explanation: 'Neutropenia febril que persiste pese a antibióticos de amplio espectro: sospechar micosis invasora (aspergilosis o candidiasis) y agregar un antifúngico empírico endovenoso.',
      say: {
        stem: 'Vamos a la fiebre persistente, con una pregunta del EUNACOM de julio de dos mil veinticinco. Paciente con leucemia en quimioterapia, con cuatrocientos neutrófilos y fiebre de treinta y ocho coma cinco. Inicia antibióticos de amplio espectro, y a las setenta y dos horas sigue febril, sin foco.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: agregar un antifúngico empírico, cambiar a vancomicina, pedir un PET-CT, suspender los antibióticos y observar, o agregar metronidazol. Piénsalo.',
        answer: 'Es la A. Si la fiebre no cede con una buena cobertura bacteriana, el sospechoso es un hongo: aspergilosis o candidiasis, y se agrega un antifúngico. La B es el distractor tentador, porque cambiar de antibiótico parece lógico, pero el problema ya no es bacteriano. Y suspender para observar deja sin cobertura a un paciente sin neutrófilos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 132',
      stem: 'Un paciente, con antecedente de leucemia mieloide crónica, en quimioterapia hace 2 semanas, presenta un cuadro de tos, con expectoración purulenta, con estrías de sangre, asociada a fiebre y malestar general. Se solicitan exámenes, entre los que destaca VHS: 90 mm/h, PCR: 22 mg/L. Se realiza TAC de tórax, que visualiza una tumoración densa, con un halo radiolúcido.',
      question: 'El agente etiológico más probable es:',
      options: [
        { letter: 'A', text: 'Pseudomona aureginosa' },
        { letter: 'B', text: 'Aspergillus' },
        { letter: 'C', text: 'Staphilococcus aureus' },
        { letter: 'D', text: 'Candida albicans' },
        { letter: 'E', text: 'Mycobacterium tuberculosis' },
      ],
      correct: 'B',
      explanation: 'Paciente inmunosuprimido por quimioterapia con una lesión pulmonar densa rodeada de un halo en la TAC: aspergilosis pulmonar invasora. El signo del halo es el hallazgo que se busca en la TAC de alta resolución ante fiebre persistente en el neutropénico.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil diecinueve. Paciente con leucemia mieloide crónica y quimioterapia hace dos semanas, con tos, expectoración con estrías de sangre y fiebre. La TAC de tórax muestra una tumoración densa rodeada de un halo.',
        question: '¿Cuál es el agente etiológico más probable?',
        options: 'Las opciones: Pseudomonas aeruginosa, Aspergillus, Staphylococcus aureus, Candida albicans, o Mycobacterium tuberculosis. Piénsalo.',
        answer: 'Es la B, Aspergillus. Quimioterapia, fiebre y una lesión con halo en la TAC es la aspergilosis pulmonar invasora: justamente lo que buscas en la TAC cuando la fiebre no cede. Pseudomonas tienta porque es el germen más temido del neutropénico, pero es la amenaza de las primeras horas, no de una lesión con halo. Y Candida también es una micosis invasora, pero el halo es la firma del Aspergillus.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Fiebre + RAN', kind: 'key', items: [
          { t: 'Fiebre ≥ 38,3 °C + RAN < 500', d: 'O ≥ 38 °C por más de 1 hora',
            say: 'Cerremos con las reglas de oro. Neutropenia febril es fiebre de treinta y ocho coma tres, o treinta y ocho por más de una hora, con un RAN bajo quinientos. Y el RAN lo calculas tú, con el hemograma.' },
          { t: 'Sin pus: la fiebre es la alarma', d: 'Sin foco no es tranquilizador',
            say: 'Recuerda que en el neutropénico no hay pus. La fiebre sin foco no tranquiliza: es la bacteriemia hasta demostrar lo contrario.' },
        ] },
        { title: 'Primera hora', tag: 'Regla de los 60 minutos', kind: 'alert', items: [
          { t: '2 hemocultivos → cefepime EV', d: 'En menos de 60 minutos',
            say: 'Dos hemocultivos, y cefepime endovenoso en menos de sesenta minutos. Nunca se espera el resultado.' },
          { t: 'Vancomicina solo con shock o catéter', d: 'Ceftriaxona no cubre Pseudomonas',
            say: 'La vancomicina entra solo con shock, catéter infectado, mucositis severa o sospecha de estafilococo resistente. Y la ceftriaxona no es la respuesta, porque no cubre Pseudomonas.' },
        ] },
        { title: 'Después', tag: 'Riesgo y persistencia', kind: 'pharma', items: [
          { t: 'MASCC ≥ 21: oral ambulatorio', d: 'Ciprofloxacino + amoxicilina-clavulánico',
            say: 'Con MASCC de veintiuno o más, hay una opción oral ambulatoria, en pacientes estables y seleccionados.' },
          { t: 'Fiebre al 4.º–7.º día: hongo', d: 'TAC con halo + voriconazol',
            say: 'Y si la fiebre sigue al cuarto a séptimo día, piensa en un hongo: TAC de tórax y voriconazol. Si te llevas una sola idea de hoy: en el neutropénico con fiebre, primero el antibiótico antipseudomónico en la primera hora, y si la fiebre no cede, el hongo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Neutropenia febril post-quimioterapia',
    root: N('start', 'Fiebre post-quimioterapia', '≥ 38,3 °C o ≥ 38 °C por > 1 h',
      'Paciente con quimioterapia reciente que llega con fiebre. Es una emergencia desde que cruza la puerta.',
      ['', N('q', '¿RAN < 500/mm³?', 'Hemograma',
        'Lo primero es el hemograma, para calcular el recuento absoluto de neutrófilos. ¿Está bajo quinientos, o bajo mil con caída prevista?',
        ['SÍ', N('do', '2 hemocultivos + ATB EV < 60 min', 'Regla de los 60 minutos',
          'Es neutropenia febril. Dos hemocultivos, periférico y por el catéter, y antibiótico endovenoso en menos de sesenta minutos. Luego estratificas con el score MASCC.',
          ['', N('q', '¿Score MASCC?', 'Corte en 21 puntos',
            '¿Cuántos puntos tiene en el score MASCC? El corte es veintiuno.',
            ['< 21', N('alert', 'Alto riesgo: cefepime 2 g c/8 h EV', 'Hospitalizar en aislamiento',
              'Bajo veintiuno es alto riesgo: hospitalizar en aislamiento con cefepime endovenoso, o piperacilina con tazobactam. Si hay shock, catéter infectado o mucositis severa, se suma vancomicina.',
              ['', N('q', '¿Fiebre al 4.º–7.º día?', 'Hemocultivos negativos',
                'Y si al cuarto a séptimo día sigue con fiebre, con hemocultivos negativos, piensa en otra cosa.',
                ['SÍ', N('alert', 'TAC de tórax + voriconazol EV', 'Micosis invasora: signo del halo',
                  'Es una micosis invasora hasta demostrar lo contrario. TAC de tórax de alta resolución buscando el signo del halo, y voriconazol endovenoso o caspofungina.')])])],
            ['≥ 21', N('ok', 'Bajo riesgo: oral ambulatorio', 'Ciprofloxacino + amoxicilina-clavulánico',
              'Con veintiuno o más es bajo riesgo. En pacientes estables y seleccionados, ciprofloxacino más amoxicilina con clavulánico oral, con control en veinticuatro horas.')])])],
        ['NO', N('refer', 'No es neutropenia febril', 'Buscar el foco habitual',
          'Si el RAN no cumple el criterio, no es una neutropenia febril, y se estudia la fiebre como en cualquier paciente.')])]),
  },
};
