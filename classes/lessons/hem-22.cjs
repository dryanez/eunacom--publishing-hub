// Clase 8.22 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-22).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-22',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Lisis tumoral, hipercalcemia maligna y compresión medular: tres urgencias, tres primeros pasos',
      say: 'Bienvenidos. En la clase anterior vimos la neutropenia febril. Hoy cerramos las urgencias oncológicas con tres cuadros: el síndrome de lisis tumoral, la hipercalcemia de las neoplasias y la compresión medular. Tienen algo en común: en los tres, el examen pregunta qué haces primero. Suero y rasburicasa en la lisis, suero y bifosfonato en la hipercalcemia, y dexametasona antes de la resonancia en la compresión medular.',
    },

    {
      type: 'flow',
      kicker: 'Síndrome de lisis tumoral',
      title: 'Cuando el tumor se rompe de golpe',
      nodes: [
        { id: 'tum', col: 0, row: 1, k: 'cause', t: 'Tumor de recambio rápido', s: 'Burkitt, LLA, leucocitos > 100.000' },
        { id: 'qt', col: 1, row: 1, k: 'mech', t: 'Lisis masiva', s: '12 a 72 h tras la quimioterapia' },
        { id: 'k', col: 2, row: 0, k: 'effect', t: 'Hiperkalemia', s: 'Arritmias ventriculares' },
        { id: 'au', col: 2, row: 1, k: 'effect', t: 'Hiperuricemia', s: 'Cristales en los túbulos' },
        { id: 'p', col: 2, row: 2, k: 'effect', t: 'Hiperfosfemia', s: 'Precipita con el calcio' },
        { id: 'ca', col: 3, row: 2, k: 'effect', t: 'Hipocalcemia', s: 'Tetania y convulsiones' },
        { id: 'ira', col: 4, row: 1, k: 'risk', t: 'Insuficiencia renal aguda', s: 'Urato y fosfato cálcico' },
      ],
      edges: [
        { from: 'tum', to: 'qt' }, { from: 'qt', to: 'k' }, { from: 'qt', to: 'au' }, { from: 'qt', to: 'p' },
        { from: 'p', to: 'ca', label: 'arrastra' }, { from: 'au', to: 'ira' }, { from: 'p', to: 'ira' },
      ],
      steps: [
        { show: ['tum'], note: 'Mucha masa y mucho recambio',
          say: 'Partamos por la lisis tumoral. Ocurre en tumores con gran masa y recambio celular muy rápido. Los clásicos son el linfoma de Burkitt, la leucemia linfoblástica aguda que vimos en leucemias agudas, y las leucemias con más de cien mil leucocitos.' },
        { show: ['qt'], note: 'Espontánea o tras la quimioterapia',
          say: 'Puede ser espontánea, pero lo típico es que aparezca entre doce y setenta y dos horas después de iniciar la quimioterapia. Miles de millones de células se rompen al mismo tiempo y vacían su contenido en la sangre.' },
        { show: ['k'], note: 'El catión intracelular más abundante',
          say: 'Lo primero que sale es el potasio, el catión más abundante dentro de la célula. La hiperkalemia es lo que mata primero, porque produce arritmias ventriculares y paro cardíaco.' },
        { show: ['au'], note: 'Del ADN al ácido úrico',
          say: 'Luego, los ácidos nucleicos se degradan hasta ácido úrico. El ácido úrico precipita en los túbulos renales como cristales.' },
        { show: ['p', 'ca'], note: 'El fósforo se lleva al calcio',
          say: 'Y el fósforo, que en las células leucémicas es cuatro veces mayor que en las normales. Aquí está la clave para entender el calcio: el exceso de fósforo se une al calcio y precipita como fosfato cálcico. Por eso el calcio baja. No es que se pierda: se lo lleva el fósforo.' },
        { show: ['ira'], note: 'Dos cristales tapan el riñón',
          say: 'Y el riñón queda tapado por dos tipos de cristales: urato y fosfato cálcico. Eso cierra el círculo, porque un riñón que falla ya no puede eliminar ni el potasio ni el fósforo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios de Cairo-Bishop',
      title: 'Tres suben y uno baja',
      cards: [
        { title: 'Laboratorio', tag: 'Al menos 2 de 4', kind: 'criteria', items: [
          { t: 'Ácido úrico ≥ 8 mg/dL', d: 'Potasio ≥ 6 mEq/L',
            say: 'Los criterios de laboratorio de Cairo-Bishop se preguntan con número. Ácido úrico de ocho o más, y potasio de seis o más.' },
          { t: 'Fósforo ≥ 4,5 mg/dL (adulto)', d: '≥ 6,5 en niños',
            say: 'Fósforo de cuatro coma cinco o más en adultos, o seis coma cinco en niños.' },
          { t: 'Calcio corregido ≤ 7 mg/dL', d: 'O cambio de 25% sobre el basal',
            say: 'Y calcio corregido de siete o menos. También cuenta un cambio de veinticinco por ciento respecto al basal. Se necesitan al menos dos de los cuatro, alrededor del inicio de la quimioterapia.' },
        ] },
        { title: 'Lisis tumoral clínica', tag: 'Laboratorio + 1', kind: 'alert', items: [
          { t: 'Insuficiencia renal aguda', d: 'Creatinina 1,5 veces el basal',
            say: 'Y cuando al laboratorio se suma al menos una manifestación clínica grave, hablamos de lisis tumoral clínica. La primera es la insuficiencia renal aguda, con una creatinina de una vez y media el basal.' },
          { t: 'Arritmias o convulsiones', d: 'Tetania por hipocalcemia',
            say: 'Las otras son las arritmias, por el potasio, y las convulsiones o la tetania, por la hipocalcemia. Fíjate que cada manifestación clínica sale de una letra del laboratorio.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Prevención',
      title: 'Lo mejor es que no ocurra',
      cards: [
        { title: 'Hiperhidratación', tag: 'Siempre', kind: 'key', items: [
          { t: 'Suero fisiológico 2,5–3 L/m²/día', d: '24 a 48 h antes de la quimioterapia',
            say: 'La prevención es el pilar. Primero, hiperhidratación endovenosa con suero fisiológico, dos coma cinco a tres litros por metro cuadrado al día, partiendo veinticuatro a cuarenta y ocho horas antes de la quimioterapia.' },
          { t: 'Diuresis > 80–100 mL/m²/hora', d: 'Para arrastrar urato y fosfato',
            say: 'El objetivo es una diuresis abundante, sobre ochenta a cien mililitros por metro cuadrado por hora, que arrastre el ácido úrico y el fosfato antes de que precipiten.' },
        ] },
        { title: 'Hipouricemiante', tag: 'Según el riesgo', kind: 'pharma', items: [
          { t: 'Alopurinol 300 mg/día VO', d: 'Riesgo bajo a intermedio',
            say: 'Segundo, un hipouricemiante, y aquí está la diferencia que se pregunta. El alopurinol, trescientos miligramos al día, inhibe la xantina oxidasa: impide que se forme ácido úrico nuevo, pero no toca el que ya está. Y acumula xantina, que también precipita. Por eso es para el riesgo bajo o intermedio.' },
          { t: 'Rasburicasa 0,2 mg/kg EV', d: 'Alto riesgo: Burkitt, LLA > 100.000, ácido úrico alto',
            say: 'En el alto riesgo, es decir, Burkitt, leucemia linfoblástica con más de cien mil leucocitos, o ácido úrico ya elevado, la elección es la rasburicasa, cero coma dos miligramos por kilo endovenoso. Es una enzima que convierte el ácido úrico que ya existe en alantoína, mucho más soluble, y lo normaliza en menos de cuatro horas.' },
        ] },
        { title: 'Ojo en el examen', tag: 'Contraindicaciones', kind: 'alert', items: [
          { t: 'Rasburicasa: no en déficit de G6PD', d: 'Hemólisis y metahemoglobinemia',
            say: 'Dos trampas. La rasburicasa está contraindicada en el déficit de glucosa seis fosfato deshidrogenasa, porque produce hemólisis grave y metahemoglobinemia. Lo vimos en la clase de anemias hemolíticas.' },
          { t: 'No alcalinizar la orina', d: 'El bicarbonato precipita fosfato cálcico',
            say: 'Y ya no se alcaliniza la orina con bicarbonato: disuelve el urato, pero hace precipitar el fosfato cálcico en los túbulos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Lisis tumoral establecida',
      title: 'Primero el corazón, después el riñón',
      cards: [
        { title: 'Hiperkalemia', tag: 'Lo que mata primero', kind: 'alert', items: [
          { t: 'Gluconato de calcio 10% EV lento', d: 'Estabiliza la membrana cardíaca',
            say: 'Si la lisis ya ocurrió, el orden importa. Lo primero es proteger el corazón de la hiperkalemia: gluconato de calcio al diez por ciento, endovenoso lento, que estabiliza la membrana del miocardio.' },
          { t: 'Insulina + glucosa · salbutamol', d: 'Meten el potasio a la célula',
            say: 'Luego, bajar el potasio rápido: insulina cristalina con glucosa hipertónica, y salbutamol nebulizado.' },
        ] },
        { title: 'Ácido úrico y riñón', tag: 'En paralelo', kind: 'pharma', items: [
          { t: 'Rasburicasa + hiperhidratación', d: 'Suero fisiológico isotónico',
            say: 'En paralelo, rasburicasa para degradar el ácido úrico e hiperhidratación con suero fisiológico.' },
          { t: 'Hemodiálisis de urgencia', d: 'Anuria o hiperkalemia refractaria',
            say: 'Y si el paciente queda en anuria o el potasio no baja, hemodiálisis de urgencia. Todo esto, en la unidad de paciente crítico.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Hipercalcemia de las neoplasias',
      title: 'El calcio que sale del hueso o de una hormona falsa',
      nodes: [
        { id: 'ca', col: 0, row: 1, k: 'cause', t: 'Cáncer avanzado', s: 'Mama, pulmón, riñón, mieloma' },
        { id: 'pth', col: 1, row: 0, k: 'mech', t: 'PTHrP', s: 'Péptido relacionado con PTH' },
        { id: 'met', col: 1, row: 2, k: 'mech', t: 'Metástasis osteolíticas', s: 'Destruyen hueso' },
        { id: 'hip', col: 2, row: 1, k: 'effect', t: 'Hipercalcemia', s: 'Poliuria, constipación, confusión, QT corto' },
        { id: 'sf', col: 3, row: 1, k: 'good', t: 'Suero fisiológico', s: '3 a 4 L en 24 h' },
        { id: 'zol', col: 4, row: 1, k: 'good', t: 'Ácido zoledrónico 4 mg EV', s: 'Efecto a las 48–72 h' },
      ],
      edges: [
        { from: 'ca', to: 'pth' }, { from: 'ca', to: 'met' }, { from: 'pth', to: 'hip' }, { from: 'met', to: 'hip' },
        { from: 'hip', to: 'sf', label: 'primero' }, { from: 'sf', to: 'zol', label: 'luego' },
      ],
      steps: [
        { show: ['ca'], note: 'La urgencia metabólica más común del cáncer',
          say: 'Segunda urgencia: la hipercalcemia maligna. Es la urgencia metabólica más común del cáncer avanzado, sobre todo de mama, pulmón, riñón y del mieloma múltiple que vimos hace dos clases.' },
        { show: ['pth', 'met'], note: 'Dos mecanismos',
          say: 'Tiene dos mecanismos. El tumor puede secretar un péptido relacionado con la paratohormona, que imita a la hormona. O las metástasis líticas destruyen el hueso y liberan su calcio.' },
        { show: ['hip'], note: 'Seca, constipa y confunde',
          say: 'La clínica es la de cualquier hipercalcemia: el calcio impide concentrar la orina, así que el paciente orina mucho y se deshidrata. Además tiene constipación, confusión, y el QT se acorta en el electrocardiograma.' },
        { show: ['sf'], note: 'Reponer volumen para eliminar calcio',
          say: 'El tratamiento de urgencia parte siempre igual: suero fisiológico en forma vigorosa, tres a cuatro litros en veinticuatro horas. Corrige la deshidratación y fuerza la eliminación de calcio por la orina.' },
        { show: ['zol'], note: 'Lento pero sostenido',
          say: 'Y luego, un bifosfonato endovenoso: ácido zoledrónico, cuatro miligramos en quince minutos. Frena la destrucción del hueso, pero su efecto se consolida a las cuarenta y ocho a setenta y dos horas. Por eso nunca va primero.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Compresión medular neoplásica',
      title: 'Dexametasona antes de la resonancia',
      nodes: [
        { id: 'met', col: 0, row: 1, k: 'cause', t: 'Metástasis vertebral', s: 'Colapso o masa epidural' },
        { id: 'dol', col: 1, row: 0, k: 'effect', t: 'Dolor raquídeo', s: 'Progresivo y nocturno' },
        { id: 'mot', col: 1, row: 1, k: 'effect', t: 'Paraparesia', s: 'Nivel sensitivo en el tronco' },
        { id: 'esf', col: 1, row: 2, k: 'risk', t: 'Retención urinaria', s: 'Signo tardío' },
        { id: 'dex', col: 2, row: 1, k: 'alert', t: 'Dexametasona 16–24 mg EV', s: 'Ante la sola sospecha' },
        { id: 'rm', col: 3, row: 0, k: 'good', t: 'RM de columna completa', s: 'En paralelo' },
        { id: 'rt', col: 3, row: 2, k: 'good', t: 'Radioterapia descompresiva', s: 'Urgente' },
      ],
      edges: [
        { from: 'met', to: 'dol' }, { from: 'dol', to: 'mot' }, { from: 'mot', to: 'esf' },
        { from: 'mot', to: 'dex', label: 'sospecha' }, { from: 'dex', to: 'rm' }, { from: 'dex', to: 'rt' },
      ],
      steps: [
        { show: ['met'], note: 'Emergencia neurológica',
          say: 'La tercera urgencia es la compresión medular neoplásica. Una metástasis colapsa una vértebra, o crece hacia el espacio epidural, y comprime la médula espinal. Es una emergencia neurológica.' },
        { show: ['dol'], note: 'El primer síntoma',
          say: 'El primer síntoma es el dolor de espalda localizado, progresivo, que empeora en la noche. En un paciente con cáncer, ese dolor ya es una alarma.' },
        { show: ['mot'], note: 'Cuando aparece la debilidad',
          say: 'Después aparece la debilidad de las piernas, una paraparesia espástica, y un nivel sensitivo en el tronco.' },
        { show: ['esf'], note: 'Si llegas aquí, llegaste tarde',
          say: 'Y lo último es el compromiso de esfínteres, como la retención urinaria. Es un signo tardío: si esperas a verlo, la función puede no volver.' },
        { show: ['dex'], note: 'La conducta que se pregunta',
          say: 'Por eso, esta es la conducta que el examen pregunta: ante la simple sospecha, se administra de inmediato dexametasona endovenosa en dosis altas, dieciséis a veinticuatro miligramos en bolo. Reduce el edema alrededor de la médula y salva la función neurológica.' },
        { show: ['rm', 'rt'], note: 'Confirmar y descomprimir',
          say: 'En paralelo, se coordina la resonancia magnética de columna completa y la radioterapia descompresiva urgente. Fíjate en el orden: la dexametasona no espera a la resonancia.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos las tres urgencias en un árbol de decisión, partiendo del paciente oncológico que se descompensa.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Burkitt o LLA > 100.000 antes de quimioterapia', 'Hiperhidratación + rasburicasa', 'Solo alopurinol'],
          say: 'Repasemos las trampas. Burkitt o leucemia linfoblástica con más de cien mil leucocitos, antes de la quimioterapia: hiperhidratación y rasburicasa. Solo alopurinol se queda corto, porque no degrada el ácido úrico ya formado.' },
        { cells: ['Lisis tumoral con déficit de G6PD', 'Alopurinol + hidratación', 'Rasburicasa'],
          say: 'Pero si el paciente tiene déficit de glucosa seis fosfato deshidrogenasa, la rasburicasa está contraindicada.' },
        { cells: ['Lisis con K 6,8 y QRS ancho', 'Gluconato de calcio EV primero', 'Esperar la diálisis'],
          say: 'Lisis con potasio alto y cambios en el electrocardiograma: primero gluconato de calcio para proteger el corazón. No se espera la diálisis.' },
        { cells: ['Prevención de lisis tumoral', 'Suero fisiológico', 'Alcalinizar con bicarbonato'],
          say: 'En la prevención, ya no se alcaliniza con bicarbonato, porque precipita el fosfato cálcico.' },
        { cells: ['Hipercalcemia sintomática', 'Suero fisiológico, luego zoledrónico', 'Bifosfonato como primer paso'],
          say: 'Hipercalcemia sintomática: primero suero fisiológico, después ácido zoledrónico. El bifosfonato como primera medida es el error, porque tarda dos a tres días.' },
        { cells: ['Cáncer + dolor dorsal + paraparesia', 'Dexametasona EV de inmediato', 'Esperar la resonancia'],
          say: 'Y cáncer con dolor de espalda y debilidad de piernas: dexametasona endovenosa de inmediato. Esperar la resonancia para empezar es la trampa.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 21 años con linfoma de Burkitt abdominal (masa retroperitoneal de 12 cm) inicia su primer ciclo de quimioterapia intensiva. A las 24 horas presenta oliguria, náuseas y parestesias peribucales. ECG: ondas T picudas y QRS ancho. Creatinina 3,1 mg/dL (basal 0,9), K 6,8 mEq/L, ácido úrico 14,5 mg/dL, fósforo 7,8 mg/dL, calcio 6,2 mg/dL.',
      question: '¿Cuál es la primera medida?',
      options: [
        { letter: 'A', text: 'Bicarbonato de sodio EV para alcalinizar la orina' },
        { letter: 'B', text: 'Alopurinol 300 mg VO' },
        { letter: 'C', text: 'Gluconato de calcio al 10% EV lento' },
        { letter: 'D', text: 'Suspender la hidratación por la oliguria' },
        { letter: 'E', text: 'Ácido zoledrónico 4 mg EV' },
      ],
      correct: 'C',
      explanation: 'Lisis tumoral clínica (4 criterios de Cairo-Bishop más falla renal) con hiperkalemia y cambios en el ECG. Lo primero es estabilizar la membrana cardíaca con gluconato de calcio al 10% EV; luego insulina con glucosa y salbutamol, rasburicasa 0,2 mg/kg EV, hiperhidratación y hemodiálisis si hay anuria o hiperkalemia refractaria.',
      say: {
        stem: 'Vamos con un caso. Hombre de veintiún años con un linfoma de Burkitt abdominal de doce centímetros. A las veinticuatro horas de su primera quimioterapia tiene oliguria, náuseas y hormigueo alrededor de la boca. El electrocardiograma muestra ondas T picudas y QRS ancho. Creatinina tres coma uno, potasio seis coma ocho, ácido úrico catorce coma cinco, fósforo siete coma ocho y calcio seis coma dos.',
        question: '¿Cuál es la primera medida?',
        options: 'Tienes cinco opciones. Bicarbonato para alcalinizar la orina. Alopurinol oral. Gluconato de calcio endovenoso lento. Suspender la hidratación por la oliguria. O ácido zoledrónico. Piénsalo.',
        answer: 'La respuesta es la C. Tiene los cuatro criterios de laboratorio y además falla renal: es una lisis tumoral clínica. Pero lo que lo puede matar en minutos es el potasio, con el electrocardiograma ya alterado. Primero gluconato de calcio. El distractor tentador es el alopurinol, porque el ácido úrico está altísimo. Pero no degrada el que ya existe, y aquí la prioridad es el corazón. Después vienen la rasburicasa y la hidratación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 20',
      stem: 'Un paciente de 55 años, diagnosticado con un linfoma no Hodgkin con múltiples masas mediastínicas y abdominales de gran tamaño, de hasta 25 cm, inicia quimioterapia endovenosa. Al tercer día evoluciona con malestar general marcado, obnubilación y disnea. Al examen físico, se aprecia desorientado en el tiempo y el espacio, en malas condiciones generales y se solicitan exámenes de laboratorio, entre los que destacan ácido úrico: 13 mg/dL, sodio: 140 mEq/L, potasio: 5,9 mEq/L, fósforo: 6,5 mg/dl, creatinina plasmática: 2,1 mg/dl y hematocrito 22%.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hipercalcemia maligna' },
        { letter: 'B', text: 'Metástasis cerebrales' },
        { letter: 'C', text: 'Síndrome de vena cava superior' },
        { letter: 'D', text: 'Síndrome de compresión medular' },
        { letter: 'E', text: 'Síndrome de lisis tumoral' },
      ],
      correct: 'E',
      explanation: 'Linfoma de gran masa, al tercer día de la quimioterapia, con hiperuricemia (13), hiperfosfemia (6,5), potasio en el límite y falla renal: síndrome de lisis tumoral clásico. Se trata con hidratación, hipouricemiante y manejo de los electrolitos.',
      say: {
        stem: 'Ahora preguntas reales. La primera es del EUNACOM de diciembre de dos mil veinticinco. Paciente de cincuenta y cinco años con un linfoma no Hodgkin con masas de hasta veinticinco centímetros en el mediastino y el abdomen. Al tercer día de la quimioterapia está obnubilado, desorientado y con disnea. Ácido úrico trece, potasio cinco coma nueve, fósforo seis coma cinco y creatinina dos coma uno.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: hipercalcemia maligna, metástasis cerebrales, síndrome de vena cava superior, compresión medular, o síndrome de lisis tumoral. Piénsalo.',
        answer: 'Es la E, síndrome de lisis tumoral. Gran masa tumoral, tercer día de quimioterapia, ácido úrico y fósforo altos, y falla renal. El distractor tentador es la hipercalcemia maligna, porque también da confusión. Pero en la lisis el calcio baja, arrastrado por el fósforo. Y la vena cava superior tienta por las masas en el mediastino, pero no explica el laboratorio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 121',
      stem: 'Un paciente de 67 años consulta por dolores óseos en múltiples zonas. Se realiza exámenes, entre los que destaca calcemia corregida de 14,4 mg/dl, con pruebas de función renal normales. Además, se solicitan radiografías que muestran imágenes sugerentes de metástasis óseas.',
      question: '¿Cuál es la conducta más adecuada para proseguir el estudio?',
      options: [
        { letter: 'A', text: 'Calciuria de 24 horas' },
        { letter: 'B', text: 'Niveles plasmáticos de 25-OH vitamina D' },
        { letter: 'C', text: 'Niveles plasmáticos de paratohormona' },
        { letter: 'D', text: 'Cintigrafía ósea' },
        { letter: 'E', text: 'Niveles plasmáticos de calcio iónico' },
      ],
      correct: 'C',
      explanation: 'La hipercalcemia se estudia siempre con PTH, aunque haya imágenes sugerentes de metástasis: si está elevada es un hiperparatiroidismo primario; si está baja (suprimida), orienta a hipercalcemia de origen neoplásico. La cintigrafía es inespecífica y las lesiones ya se vieron en la radiografía.',
      say: {
        stem: 'La segunda es del EUNACOM de agosto de dos mil veintiuno. Paciente de sesenta y siete años con dolores óseos en múltiples zonas, calcemia corregida de catorce coma cuatro, función renal normal, y radiografías con imágenes sugerentes de metástasis.',
        question: '¿Cuál es la conducta más adecuada para proseguir el estudio?',
        options: 'Las opciones son: calciuria de veinticuatro horas, vitamina D, paratohormona, cintigrafía ósea, o calcio iónico. Piénsalo.',
        answer: 'Es la C, la paratohormona. Toda hipercalcemia se estudia con PTH. Si está alta, es un hiperparatiroidismo primario, que también puede dar lesiones óseas. Si está suprimida, apoya el origen neoplásico, porque el tumor produce calcio por otra vía. El distractor tentador es la cintigrafía ósea, pero es inespecífica, y las lesiones ya se vieron en la radiografía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 79',
      stem: 'Hombre de 55 años con hipercalcemia severa (Ca 13.5 mg/dL), náuseas, poliuria, confusión y deshidratación. PTH elevada.',
      question: '¿Cuál es el tratamiento inicial de urgencia?',
      options: [
        { letter: 'A', text: 'Resonancia magnética' },
        { letter: 'B', text: 'Cintigrafía con sestamibi (localización de adenoma paratiroideo)' },
        { letter: 'C', text: 'Hidratación EV con solución salina 0.9%' },
        { letter: 'D', text: 'Paratiroidectomía de urgencia' },
        { letter: 'E', text: 'Carbonato de calcio oral' },
      ],
      correct: 'C',
      explanation: 'Hipercalcemia severa y sintomática: el tratamiento de urgencia es la hidratación EV vigorosa con suero fisiológico al 0,9% para corregir la deshidratación y promover la calciuria; luego se agregan bifosfonatos. La cintigrafía y la cirugía son electivas.',
      say: {
        stem: 'La tercera es del EUNACOM de julio de dos mil veinticinco. Hombre de cincuenta y cinco años con calcio de trece coma cinco, náuseas, poliuria, confusión y deshidratación. La PTH está elevada.',
        question: '¿Cuál es el tratamiento inicial de urgencia?',
        options: 'Las opciones son: resonancia magnética, cintigrafía con sestamibi, hidratación endovenosa con suero fisiológico, paratiroidectomía de urgencia, o carbonato de calcio oral. Piénsalo.',
        answer: 'Es la C, suero fisiológico. Aquí la causa es un hiperparatiroidismo, no un cáncer, y eso es justamente lo que enseña: sea cual sea la causa, la hipercalcemia grave y sintomática parte con volumen. El distractor tentador es la cintigrafía, porque la PTH está alta y quieres buscar el adenoma. Pero eso es para planificar una cirugía electiva, no para la urgencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 18',
      stem: 'Sd compresión medular en paciente con Ca de próstata y Mtt ósea.',
      question: 'Estudio:',
      options: [
        { letter: 'A', text: 'Rnm columna con gadolinio' },
        { letter: 'B', text: 'Mielografía' },
        { letter: 'C', text: 'Cintigrama óseo' },
        { letter: 'D', text: 'Radiografía columna' },
        { letter: 'E', text: 'TAC' },
      ],
      correct: 'A',
      explanation: 'Ante la sospecha de compresión medular neoplásica, el estudio de elección es la resonancia magnética de columna completa con gadolinio, coordinada en paralelo con dexametasona EV en dosis altas, que se inicia de inmediato sin esperar la imagen.',
      say: {
        stem: 'Y la última, del EUNACOM de diciembre de dos mil veinticuatro. Síndrome de compresión medular en un paciente con cáncer de próstata y metástasis óseas.',
        question: '¿Cuál es el estudio de elección?',
        options: 'Las opciones son: resonancia de columna con gadolinio, mielografía, cintigrama óseo, radiografía de columna, o scanner. Piénsalo.',
        answer: 'Es la A, la resonancia magnética de columna con gadolinio, idealmente de columna completa, porque puede haber más de un nivel comprimido. El distractor tentador es la cintigrafía, porque el paciente tiene metástasis óseas. Pero la cintigrafía muestra hueso, no la médula. Y recuerda que si la pregunta fuera por la primera medida, la respuesta sería la dexametasona.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Lisis tumoral', tag: 'Cairo-Bishop', kind: 'key', items: [
          { t: 'Suben úrico, potasio y fósforo', d: 'Baja el calcio: lo arrastra el fósforo',
            say: 'Cerremos con las reglas de oro. En la lisis tumoral suben el ácido úrico, el potasio y el fósforo, y baja el calcio, porque se lo lleva el fósforo.' },
          { t: 'Alto riesgo: hidratación + rasburicasa', d: 'No en G6PD · sin bicarbonato',
            say: 'En el alto riesgo, hiperhidratación y rasburicasa, salvo déficit de glucosa seis fosfato deshidrogenasa. Y sin bicarbonato. Si hay hiperkalemia con electrocardiograma alterado, primero gluconato de calcio.' },
        ] },
        { title: 'Hipercalcemia', tag: 'Volumen primero', kind: 'pharma', items: [
          { t: 'Suero fisiológico 3–4 L/24 h', d: 'Luego zoledrónico 4 mg EV',
            say: 'En la hipercalcemia maligna, primero suero fisiológico, tres a cuatro litros en el día, y después ácido zoledrónico.' },
        ] },
        { title: 'Compresión medular', tag: 'No esperar', kind: 'alert', items: [
          { t: 'Dexametasona EV ante la sospecha', d: 'Luego RM completa + radioterapia',
            say: 'Si te llevas una sola idea de hoy: en las urgencias oncológicas, el primer paso no espera la confirmación. Suero en la lisis y en la hipercalcemia, y dexametasona antes de la resonancia en la compresión medular. En la próxima clase veremos las trombofilias. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Urgencias oncológicas: el primer paso',
    root: N('start', 'Paciente oncológico que se descompensa', 'Tres urgencias a reconocer',
      'Paciente con cáncer que se descompensa. Reconoce cuál de las tres urgencias es, porque cada una tiene su primer paso.',
      ['', N('q', '¿Qué predomina?', 'Laboratorio, calcio o déficit neurológico',
        '¿Qué predomina: un laboratorio de lisis después de la quimioterapia, un calcio alto, o dolor de espalda con déficit neurológico?',
        ['Post quimioterapia', N('q', '¿Hiperkalemia con ECG alterado?', 'Úrico, K y P altos · Ca bajo',
          'Si hay ácido úrico, potasio y fósforo altos con calcio bajo, es una lisis tumoral. ¿El potasio ya altera el electrocardiograma?',
          ['SÍ', N('alert', 'Gluconato de calcio EV', 'Luego insulina + glucosa, rasburicasa',
            'Si el electrocardiograma está alterado, gluconato de calcio primero. Luego insulina con glucosa, rasburicasa, hidratación, y diálisis si no responde.')],
          ['NO', N('do', 'Hiperhidratación + rasburicasa', 'Alopurinol si G6PD o bajo riesgo',
            'Si no, hiperhidratación y rasburicasa, o alopurinol si hay déficit de glucosa seis fosfato deshidrogenasa o el riesgo es bajo.')])],
        ['Calcio alto', N('do', 'Suero fisiológico, luego zoledrónico', '3–4 L/24 h · 4 mg EV',
          'Si es una hipercalcemia, suero fisiológico vigoroso y después ácido zoledrónico.')],
        ['Dolor dorsal + déficit', N('alert', 'Dexametasona EV de inmediato', 'RM completa + radioterapia',
          'Si hay dolor de espalda con debilidad de piernas, dexametasona endovenosa de inmediato, y en paralelo resonancia de columna completa y radioterapia descompresiva.')])]),
  },
};
