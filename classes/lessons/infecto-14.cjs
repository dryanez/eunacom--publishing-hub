// Clase 4.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_infectologia.cjs (inf-14).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-14',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Sospechar con el antecedente rural y el hemograma, restringir fluidos y trasladar a ECMO a tiempo',
      say: 'Bienvenidos. Abrimos el bloque de zoonosis y vectores con el síndrome cardiopulmonar por hantavirus, una enfermedad muy chilena y muy grave: mata a cerca de un tercio de los pacientes. El EUNACOM la pregunta con tres ideas: reconocer la tríada del hemograma, notificarla de inmediato, y una regla terapéutica que va exactamente al revés de lo que aprendiste en sepsis. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Epidemiología y mecanismo',
      title: 'Del ratón colilargo al pulmón inundado',
      nodes: [
        { id: 'res', col: 0, row: 0, k: 'cause', t: 'Ratón colilargo', s: 'Oligoryzomys longicaudatus · Coquimbo a Aysén' },
        { id: 'aer', col: 0, row: 2, k: 'cause', t: 'Inhalación de aerosoles', s: 'Excretas secas en recintos cerrados' },
        { id: 'vir', col: 1, row: 2, k: 'mech', t: 'Virus Andes', s: 'Infecta el endotelio pulmonar' },
        { id: 'fug', col: 2, row: 1, k: 'mech', t: 'Fuga capilar masiva', s: 'Edema pulmonar no cardiogénico' },
        { id: 'mio', col: 2, row: 3, k: 'mech', t: 'Depresión miocárdica', s: 'Intrínseca y severa' },
        { id: 'let', col: 3, row: 2, k: 'alert', t: 'Letalidad 30–35 %', s: 'Insuficiencia respiratoria y shock' },
      ],
      edges: [
        { from: 'res', to: 'aer', label: 'orina y heces' }, { from: 'aer', to: 'vir' },
        { from: 'vir', to: 'fug' }, { from: 'vir', to: 'mio' },
        { from: 'fug', to: 'let' }, { from: 'mio', to: 'let' },
      ],
      steps: [
        { show: ['res'], note: 'El reservorio: un roedor silvestre',
          say: 'Partamos por el origen. En Chile el agente es el virus Andes, y su reservorio es un roedor silvestre, el Oligoryzomys longicaudatus, el ratón colilargo. Vive desde Coquimbo hasta Aysén, así que el antecedente que buscas es rural.' },
        { show: ['aer'], note: 'Cabañas, bodegas y leñeras cerradas',
          say: '¿Cómo llega al humano? No por mordedura, sino por inhalación. El ratón deja orina y heces que se secan, y cuando alguien barre o limpia un recinto cerrado, como una cabaña, una bodega o una leñera, levanta aerosoles con el virus y los respira. Por eso el enunciado típico habla de alguien que limpió una bodega abandonada.' },
        { show: ['vir'], note: 'El blanco es el endotelio',
          say: 'Una vez inhalado, el virus infecta el endotelio de los capilares pulmonares. Y de ese blanco sale toda la enfermedad.' },
        { show: ['fug'], note: 'El agua se escapa hacia el alvéolo',
          say: 'El endotelio dañado se vuelve permeable, y hay una fuga capilar masiva: el plasma sale de los vasos y llena los alvéolos. Es un edema pulmonar no cardiogénico. Guarda esta idea, porque explica tanto el hemograma como la regla de oro del tratamiento.' },
        { show: ['mio'], note: 'El segundo golpe: el corazón',
          say: 'El segundo golpe es el corazón. El virus produce una depresión miocárdica intrínseca y severa, por eso hablamos de síndrome cardiopulmonar, y no solo pulmonar.' },
        { show: ['let'], note: 'Por eso es una emergencia',
          say: 'Pulmón inundado y corazón que no bombea: la combinación explica una letalidad de treinta a treinta y cinco por ciento. Por eso cada decisión que veremos está pensada para ganar tiempo.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clínica',
      title: 'Dos fases: una que engaña y otra que mata',
      nodes: [
        { id: 'pro', col: 0, row: 1, k: 'start', t: 'Fase prodrómica', s: '3–6 días' },
        { id: 'fie', col: 1, row: 0, k: 'effect', t: 'Fiebre alta y cefalea', s: 'Parece un cuadro viral' },
        { id: 'mia', col: 1, row: 2, k: 'effect', t: 'Mialgias intensas', s: 'Muslos y región lumbar' },
        { id: 'sin', col: 2, row: 1, k: 'trap', t: 'Sin coriza ni tos inicial', s: 'No es una influenza' },
        { id: 'car', col: 3, row: 1, k: 'risk', t: 'Fase cardiopulmonar', s: 'Tos seca · disnea rápidamente progresiva' },
        { id: 'sho', col: 4, row: 1, k: 'alert', t: 'Shock cardiogénico', s: 'Fulminante' },
      ],
      edges: [
        { from: 'pro', to: 'fie' }, { from: 'pro', to: 'mia' },
        { from: 'fie', to: 'sin' }, { from: 'mia', to: 'sin' },
        { from: 'sin', to: 'car', label: 'en horas' }, { from: 'car', to: 'sho' },
      ],
      steps: [
        { show: ['pro', 'fie'], note: 'Tres a seis días de síndrome febril',
          say: 'Ahora, cómo llega el paciente. La enfermedad tiene dos fases. La primera es la prodrómica, que dura tres a seis días: fiebre alta y cefalea. Hasta aquí parece cualquier virosis.' },
        { show: ['mia'], note: 'El dato clínico más orientador',
          say: 'Pero hay un dato que la distingue: mialgias muy intensas, con predilección por los muslos y la región lumbar. Si el enunciado insiste en el dolor de muslos y espalda, piensa en hanta.' },
        { show: ['sin'], note: 'Lo que falta también orienta',
          say: 'Y fíjate en lo que falta: no hay coriza ni tos al inicio. Eso la separa de una influenza o de un resfrío, que parten con síntomas respiratorios altos.' },
        { show: ['car'], note: 'La fuga capilar se hace visible',
          say: 'Luego viene la fase cardiopulmonar. Es la fuga capilar que vimos, ahora clínica: tos seca y una disnea que progresa rápidamente, en horas.' },
        { show: ['sho'], note: 'La ventana para actuar es corta',
          say: 'Y al fallar el miocardio, el paciente cae en un shock cardiogénico fulminante. La ventana para actuar está justo al comienzo de la disnea, y por eso la sospecha tiene que ser precoz.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Laboratorio',
      title: 'La tríada cardinal del hemograma',
      cards: [
        { title: 'Tríada de sospecha', tag: 'Alta rentabilidad', kind: 'criteria', items: [
          { t: 'Trombocitopenia marcada', d: 'Plaquetas < 100.000/mm³',
            say: 'El examen que más ayuda es un hemograma, y lo que buscas es una tríada. Primero, trombocitopenia marcada, con plaquetas bajo cien mil.' },
          { t: 'Hemoconcentración', d: 'Hematocrito > 45–50 %',
            say: 'Segundo, hemoconcentración, con un hematocrito sobre cuarenta y cinco a cincuenta por ciento.' },
          { t: 'Inmunoblastos > 10 %', d: 'Linfocitos atípicos en el frotis',
            say: 'Y tercero, inmunoblastos, que son linfocitos atípicos, sobre el diez por ciento en el frotis.' },
        ] },
        { title: 'El porqué', tag: 'Mecanismo', kind: 'key', items: [
          { t: 'Hematocrito alto = fuga', d: 'El plasma sale, los glóbulos rojos quedan',
            say: 'El hematocrito alto no es un detalle: es la fuga capilar medida en un tubo. El plasma se escapa hacia los alvéolos y los glóbulos rojos quedan concentrados en el vaso.' },
          { t: 'No se parece a una bacteria', d: 'Hematocrito normal en la neumonía',
            say: 'Y esa es la diferencia con una neumonía bacteriana o una sepsis, donde el hematocrito es normal y lo que domina es la neutrofilia. Un paciente febril y disneico con hematocrito alto y plaquetas bajas debe hacerte pensar en hanta.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'Hantavirus vs neumonía grave vs shock séptico',
      head: ['Parámetro', 'Hantavirus', 'Neumonía grave', 'Shock séptico'],
      rows: [
        { cells: ['Antecedente clave', 'Ruralidad, cabaña cerrada, colilargo', 'Brote comunitario invernal', 'Foco evidente (piel, ITU)'],
          say: 'Comparemos con los dos cuadros con que se confunde. El antecedente: en el hanta, ruralidad y un recinto cerrado; en la neumonía grave, un brote comunitario de invierno; en el shock séptico clásico, un foco evidente, como la piel o la orina.' },
        { cells: ['Mialgias', 'Intensas en muslos y dorso lumbar', 'Generalizadas leves', 'Variables, no predominan'],
          say: 'Las mialgias: intensas y localizadas en muslos y zona lumbar en el hanta; leves y generalizadas en la neumonía; y variables en la sepsis.' },
        { cells: ['Hemograma', 'Plaquetas < 100.000 + Hto alto + inmunoblastos', 'Neutrofilia, Hto normal', 'Neutrofilia con desviación'],
          say: 'El hemograma, que es la fila que decide: la tríada en el hanta; neutrofilia con hematocrito normal en la neumonía; y neutrofilia con desviación a izquierda en la sepsis.' },
        { cells: ['Fluidos', 'Restricción estricta', 'Aporte estándar según balance', 'Carga agresiva (30 mL/kg)'],
          say: 'Y la fila más importante, los fluidos. En el shock séptico, como vimos al inicio del curso, se carga volumen de forma agresiva, treinta mililitros por kilo. En el hanta es exactamente al revés: restricción estricta. Esa inversión es la que el examen busca.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Confirmar y notificar',
      cards: [
        { title: 'Confirmación', tag: 'Serología', kind: 'key', items: [
          { t: 'IgM específica para hantavirus', d: 'Test rápido o ELISA del ISP',
            say: 'El diagnóstico se confirma con la IgM específica para hantavirus, que puede hacerse con un test rápido o con el ELISA del Instituto de Salud Pública.' },
          { t: 'La conducta no espera el resultado', d: 'Se actúa con la sospecha',
            say: 'Pero ojo: con una letalidad de un tercio y un shock que se instala en horas, no esperas el resultado para actuar. La sospecha clínica, con el antecedente y el hemograma, ya pone en marcha todo el manejo.' },
        ] },
        { title: 'Notificación', tag: 'ENO inmediata', kind: 'alert', items: [
          { t: 'Enfermedad de notificación obligatoria', d: 'De carácter inmediato',
            say: 'Y es una enfermedad de notificación obligatoria de carácter inmediato. No se notifica al final de la semana: se avisa a la autoridad sanitaria ante la sola sospecha.' },
          { t: 'Permite estudiar el foco', d: 'El lugar de exposición',
            say: 'Esa notificación permite a la autoridad estudiar el lugar donde ocurrió la exposición, porque otras personas pudieron respirar los mismos aerosoles.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Tres reglas de oro',
      nodes: [
        { id: 'sos', col: 0, row: 2, k: 'start', t: 'Sospecha de hanta', s: 'Antecedente + tríada' },
        { id: 'res', col: 1, row: 0, k: 'good', t: '1. Restricción hídrica estricta', s: 'Evitar la sobrecarga de cristaloides' },
        { id: 'bol', col: 2, row: 0, k: 'trap', t: 'Bolos de volumen', s: 'Inundan el alvéolo · asfixia' },
        { id: 'nor', col: 1, row: 2, k: 'good', t: '2. Noradrenalina precoz', s: 'Para sostener la presión' },
        { id: 'o2', col: 2, row: 2, k: 'good', t: 'Oxígeno suplementario', s: 'Y monitorización' },
        { id: 'ecm', col: 1, row: 4, k: 'refer', t: '3. Derivación precoz a ECMO', s: 'Veno-arterial · al inicio de la disnea' },
        { id: 'amb', col: 2, row: 4, k: 'refer', t: 'Ambulancia medicalizada', s: 'A centro de alta complejidad' },
      ],
      edges: [
        { from: 'sos', to: 'res' }, { from: 'res', to: 'bol', label: 'nunca' },
        { from: 'sos', to: 'nor' }, { from: 'nor', to: 'o2' },
        { from: 'sos', to: 'ecm' }, { from: 'ecm', to: 'amb' },
      ],
      steps: [
        { show: ['sos'], note: 'El manejo sale del mecanismo',
          say: 'Vamos al tratamiento. Con la sospecha armada, el manejo se ordena en tres reglas de oro, y las tres salen directo del mecanismo.' },
        { show: ['res'], note: 'La regla que más se pregunta',
          say: 'La primera, y la que más se pregunta: restricción hídrica estricta. Recuerda que los capilares del pulmón están rotos.' },
        { show: ['bol'], note: 'Todo lo que entra se va al pulmón',
          say: 'Si le pasas bolos de cristaloides a este paciente, todo ese volumen se escapa hacia los alvéolos, los inunda, y el paciente muere asfixiado. Es la trampa clásica: el paciente está hipotenso, y el reflejo aprendido en sepsis es cargar volumen. Aquí eso lo mata.' },
        { show: ['nor', 'o2'], note: 'Presión con fármacos, no con agua',
          say: 'Entonces, ¿cómo se sostiene la presión? Con fármacos, no con agua. La segunda regla es el vasopresor precoz, la noradrenalina. Y junto con eso, oxígeno suplementario y monitorización estricta.' },
        { show: ['ecm'], note: 'El rescate cuando el corazón y el pulmón fallan',
          say: 'La tercera regla es la derivación precoz a un centro con ECMO, la oxigenación por membrana extracorpórea, en su modalidad veno-arterial, que reemplaza a la vez al pulmón y al corazón. Y fíjate en la palabra precoz: se deriva en la fase inicial de la disnea, no cuando el paciente ya está en shock.' },
        { show: ['amb'], note: 'Trasladar antes de que sea tarde',
          say: 'El traslado se hace en ambulancia medicalizada hacia un centro de alta complejidad. Si el hospital donde estás no tiene ECMO, tu trabajo es sospechar, restringir fluidos, notificar y trasladar a tiempo.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos la sospecha y el manejo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Hipotensión en sospecha de hanta', 'Noradrenalina precoz', 'Bolo de cristaloides 30 mL/kg'],
          say: 'Repasemos las trampas. Paciente con sospecha de hanta e hipotensión: noradrenalina precoz. El error es el bolo de treinta mililitros por kilo que usarías en la sepsis.' },
        { cells: ['Fiebre + mialgias + Hto alto + plaquetas bajas', 'Sospechar hanta', 'Pensar en neumonía bacteriana'],
          say: 'Fiebre, mialgias, hematocrito alto y plaquetas bajas: sospecha de hanta. El error es quedarse en neumonía bacteriana, que tiene hematocrito normal.' },
        { cells: ['Inicio de la disnea', 'Trasladar ya a centro con ECMO', 'Esperar el shock para derivar'],
          say: 'Al inicio de la disnea se deriva a un centro con ECMO. Esperar a que aparezca el shock es llegar tarde.' },
        { cells: ['Sospecha clínica', 'Notificar de inmediato (ENO)', 'Esperar la IgM para notificar'],
          say: 'La notificación es inmediata, ante la sospecha. Esperar la IgM para notificar es un error.' },
        { cells: ['Mecanismo de contagio', 'Inhalación de excretas secas', 'Mordedura o vector'],
          say: 'Y el contagio es por inhalación de excretas secas del colilargo, no por mordedura ni por un mosquito. Los mosquitos los vemos en dos clases más.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 38 años, trabajador agrícola del Maule, con 4 días de fiebre de 39 °C, cefalea y mialgias intensas en espalda y muslos; hace 6 horas agrega tos seca y disnea progresiva. Hace 2 semanas limpió una bodega deshabitada. PA 90/60 mmHg, FC 115 lpm, FR 28, SatO2 89 %. Rx: infiltrados alveolares bilaterales sin cardiomegalia. Hto 54 %, leucocitos 18.500 con 14 % de inmunoblastos, plaquetas 42.000.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Bolo de cristaloides 30 mL/kg y ceftriaxona endovenosa' },
        { letter: 'B', text: 'Notificar, oxígeno, aporte hídrico restrictivo y traslado inmediato a centro con ECMO' },
        { letter: 'C', text: 'Oseltamivir y hospitalización en sala básica' },
        { letter: 'D', text: 'Esperar la IgM para hantavirus antes de decidir el traslado' },
        { letter: 'E', text: 'Transfusión de plaquetas y furosemida en bolo' },
      ],
      correct: 'B',
      explanation: 'Exposición en bodega cerrada + fiebre, mialgias y disnea + tríada (Hto 54 %, plaquetas 42.000, inmunoblastos 14 %): síndrome cardiopulmonar por hantavirus. Notificación ENO inmediata, oxígeno, aporte hídrico restrictivo y traslado en ambulancia medicalizada a un centro con ECMO. La carga de volumen inunda los alvéolos.',
      say: {
        stem: 'Vamos con un caso. Hombre de treinta y ocho años, trabajador agrícola del Maule, con cuatro días de fiebre, cefalea y mialgias intensas en la espalda y los muslos. Hace seis horas agregó tos seca y disnea. Hace dos semanas limpió una bodega deshabitada. Está hipotenso, taquicárdico, con saturación de ochenta y nueve por ciento e infiltrados bilaterales sin cardiomegalia. Hematocrito cincuenta y cuatro, catorce por ciento de inmunoblastos y cuarenta y dos mil plaquetas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: bolo de cristaloides y ceftriaxona; notificar, oxígeno, restringir fluidos y trasladar a ECMO; oseltamivir y sala básica; esperar la IgM; o transfundir plaquetas con furosemida. Piénsalo.',
        answer: 'Es la B. Tienes todo: la bodega cerrada, las mialgias de muslos y espalda, y la tríada completa. Es un hanta que acaba de entrar en fase cardiopulmonar, justo el momento de derivar. La A es el distractor tentador, porque el paciente está hipotenso y parece una sepsis, pero la carga de volumen lo ahoga. Y esperar la IgM, la D, es perder la ventana.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 7',
      stem: 'Paciente de 28 años llega a urgencias con fiebre alta, cefalea intensa, mialgias, compromiso respiratorio progresivo y antecedente de trabajo en zona rural del sur de Chile. Hemograma con leucopenia y trombocitopenia.',
      question: '¿Cuál es el agente causal más probable?',
      options: [
        { letter: 'A', text: 'Hantavirus (Sin Nombre)' },
        { letter: 'B', text: 'Leptospira interrogans' },
        { letter: 'C', text: 'Rickettsia conorii' },
        { letter: 'D', text: 'Yersinia pestis' },
        { letter: 'E', text: 'Francisella tularensis' },
      ],
      correct: 'A',
      explanation: 'Trabajo rural en el sur de Chile + fiebre, cefalea, mialgias y compromiso respiratorio progresivo + trombocitopenia: hantavirus. En Chile el agente es el virus Andes, transmitido por el ratón colilargo.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticinco. Paciente de veintiocho años con fiebre alta, cefalea intensa, mialgias, compromiso respiratorio progresivo, y antecedente de trabajo rural en el sur de Chile. El hemograma muestra leucopenia y trombocitopenia.',
        question: '¿Cuál es el agente causal más probable?',
        options: 'Las opciones: hantavirus; Leptospira; Rickettsia; Yersinia pestis; o Francisella tularensis. Piénsalo.',
        answer: 'Es la A, hantavirus. La alternativa lo llama virus Sin Nombre, pero en Chile el agente es el virus Andes; lo que te piden es reconocer un hanta. La leptospirosis es el distractor más tentador, porque también es rural y da mialgias; pero la suma de sur de Chile, compromiso respiratorio que progresa y plaquetas bajas es la de un hanta. La leptospirosis la vemos en unas clases más.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Trabajador forestal de 32 años consulta en un hospital de baja complejidad por 3 días de fiebre alta, dolor muscular severo en muslos y sensación de falta de aire. Hemograma: Hto 52 %, leucocitos 16.000/mm³ con 12 % de inmunoblastos, plaquetas 48.000/mm³.',
      question: '¿Cuál de las siguientes medidas terapéuticas está contraindicada o debe evitarse?',
      options: [
        { letter: 'A', text: 'Carga masiva de cristaloides con 30 mL/kg en bolo' },
        { letter: 'B', text: 'Oxigenoterapia con mascarilla de no reinhalación' },
        { letter: 'C', text: 'Monitoreo estricto de diuresis horaria' },
        { letter: 'D', text: 'Traslado en ambulancia avanzada con médico' },
        { letter: 'E', text: 'Toma de serología para IgM específica' },
      ],
      correct: 'A',
      explanation: 'Síndrome cardiopulmonar por hantavirus: la fuga capilar alveolar hace que los bolos de volumen (como los 30 mL/kg de la sepsis) precipiten un edema pulmonar masivo y asfixia. La guía MINSAL exige manejo hemodinámico restrictivo.',
      say: {
        stem: 'Cerramos con un caso representativo del banco, sobre la regla más importante. Trabajador forestal de treinta y dos años, en un hospital de baja complejidad, con tres días de fiebre, dolor muscular severo en los muslos y falta de aire. Hematocrito cincuenta y dos, doce por ciento de inmunoblastos y cuarenta y ocho mil plaquetas.',
        question: '¿Qué medida está contraindicada o debe evitarse?',
        options: 'Las opciones: carga de cristaloides de treinta mililitros por kilo; oxígeno con mascarilla de no reinhalación; diuresis horaria; traslado en ambulancia avanzada; o serología IgM. Piénsalo.',
        answer: 'Es la A. Fíjate que la pregunta está invertida: te pide lo que no se hace. Con la tríada completa, esto es un hanta, y la carga de volumen de la sepsis inunda los alvéolos. Todas las demás son correctas: oxígeno, monitorizar la diuresis, trasladar en ambulancia avanzada y tomar la IgM.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Sospecha', tag: 'Antecedente + hemograma', kind: 'key', items: [
          { t: 'Recinto cerrado rural', d: 'Inhalación de excretas del colilargo',
            say: 'Cerremos con las reglas de oro. La sospecha parte del antecedente: un recinto cerrado en zona rural, donde se inhalaron excretas secas del ratón colilargo.' },
          { t: 'Fiebre + mialgias de muslos y lumbar', d: 'Luego tos seca y disnea',
            say: 'Luego la clínica: fiebre con mialgias intensas de muslos y zona lumbar, sin coriza, seguida de tos seca y disnea progresiva.' },
        ] },
        { title: 'Hemograma', tag: 'Tríada', kind: 'criteria', items: [
          { t: 'Plaquetas < 100.000', d: 'Hto > 45–50 % · inmunoblastos > 10 %',
            say: 'La tríada: plaquetas bajo cien mil, hematocrito alto por la fuga capilar, e inmunoblastos sobre el diez por ciento.' },
        ] },
        { title: 'Manejo', tag: 'Al revés que la sepsis', kind: 'alert', items: [
          { t: 'Restricción hídrica + noradrenalina', d: 'Nunca bolos de volumen',
            say: 'El manejo va al revés que la sepsis: restricción hídrica estricta y noradrenalina precoz, nunca bolos de volumen.' },
          { t: 'ENO inmediata + ECMO precoz', d: 'Trasladar al inicio de la disnea',
            say: 'Se notifica de inmediato y se traslada a un centro con ECMO al inicio de la disnea. Si te llevas una sola idea de hoy: en el hanta, el agua que salva al séptico ahoga al paciente. En la próxima clase seguimos con otra enfermedad muy chilena, la enfermedad de Chagas. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hantavirus: sospecha y traslado precoz',
    root: N('start', 'Síndrome febril con mialgias', 'Antecedente rural o recinto cerrado',
      'Paciente con fiebre, cefalea y mialgias intensas, con un antecedente rural o de haber limpiado un recinto cerrado. Lo primero es pedir un hemograma.',
      ['', N('q', '¿Tríada en el hemograma?', 'Plaquetas bajas · Hto alto · inmunoblastos',
        '¿El hemograma muestra la tríada: plaquetas bajo cien mil, hematocrito alto e inmunoblastos sobre el diez por ciento?',
        ['NO', N('ok', 'Buscar otra causa', 'Neumonía, sepsis, otras zoonosis',
          'Si no está la tríada, y el hematocrito es normal con neutrofilia, piensa en otra causa, como una neumonía o una sepsis bacteriana, y maneja según corresponda.')],
        ['SÍ', N('alert', 'Sospecha de hanta', 'ENO inmediata + IgM específica',
          'Si está la tríada, es una sospecha de hanta. Se notifica de inmediato y se toma la IgM, pero no se espera el resultado para actuar.',
          ['', N('q', '¿Hay disnea o hipotensión?', 'Fase cardiopulmonar',
            '¿El paciente ya tiene disnea, o hipotensión? Es decir, ¿entró en la fase cardiopulmonar?',
            ['NO', N('do', 'Hospitalizar y vigilar', 'Restricción hídrica · coordinar traslado',
              'Si todavía está en la fase prodrómica, se hospitaliza con restricción hídrica y vigilancia estrecha, coordinando desde ya el traslado, porque la disnea puede aparecer en horas.')],
            ['SÍ', N('refer', 'Traslado inmediato a ECMO', 'Oxígeno + noradrenalina + restricción hídrica',
              'Si ya tiene disnea o hipotensión, oxígeno, noradrenalina precoz sin bolos de volumen, y traslado inmediato en ambulancia medicalizada a un centro con ECMO veno-arterial.')])])])]),
  },
};
