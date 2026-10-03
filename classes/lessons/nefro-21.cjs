// Clase 5.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-21).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-21',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Reconocerla, cultivar antes de tratar y saber quién se hospitaliza',
      say: 'Bienvenidos. Hoy vemos la pielonefritis aguda en el adulto. Es un tema muy preguntado, y casi siempre de la misma forma: te presentan una paciente con fiebre y dolor lumbar, y tienes que decidir si se va a la casa o se hospitaliza, y con qué antibiótico. La embarazada es la estrella del tema. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'De la vejiga al riñón',
      nodes: [
        { id: 'vej', col: 0, row: 1, k: 'cause', t: 'Bacterias en la vejiga', s: 'E. coli en 75–85 %' },
        { id: 'cis', col: 1, row: 0, k: 'good', t: 'Cistitis', s: 'Solo mucosa: sin fiebre' },
        { id: 'pna', col: 1, row: 2, k: 'mech', t: 'Pielonefritis aguda', s: 'Invade el parénquima renal' },
        { id: 'bac', col: 2, row: 2, k: 'risk', t: 'Bacteriemia', s: 'En el 20–30 %' },
        { id: 'com', col: 3, row: 2, k: 'alert', t: 'Sepsis, absceso, necrosis papilar', s: 'Complicaciones graves' },
      ],
      edges: [
        { from: 'vej', to: 'cis', label: 'se queda' }, { from: 'vej', to: 'pna', label: 'asciende' },
        { from: 'pna', to: 'bac' }, { from: 'bac', to: 'com' },
      ],
      steps: [
        { show: ['vej'], note: 'La infección parte abajo',
          say: 'Partamos por el mecanismo. La infección parte en la vejiga, y el germen es casi siempre la Escherichia coli, en setenta y cinco a ochenta y cinco por ciento de los casos. Le siguen Klebsiella y Proteus.' },
        { show: ['cis'], note: 'Cistitis: nunca da fiebre',
          say: 'Si la infección se queda en la mucosa de la vejiga, es una cistitis: disuria y polaquiuria, pero nunca fiebre ni compromiso sistémico. Esa es la frontera que tienes que tener clara.' },
        { show: ['pna'], note: 'Pielonefritis: infección invasiva del riñón',
          say: 'Si la bacteria asciende y llega al parénquima renal y al sistema pielocalicial, ya no es una infección de mucosa: es una infección invasiva de un órgano muy irrigado. Eso es la pielonefritis aguda.' },
        { show: ['bac', 'com'], note: 'Por eso puede matar',
          say: 'Y como el riñón recibe tanta sangre, la bacteria pasa al torrente en veinte a treinta por ciento de los casos. De ahí vienen las complicaciones: sepsis, shock séptico, absceso renal y necrosis papilar. Por eso la pielonefritis se trata con respeto.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Cómo se reconoce y qué se pide',
      cards: [
        { title: 'Clínica', tag: 'Tríada', kind: 'criteria', items: [
          { t: 'Fiebre > 38,5 °C con calofríos', d: 'Lo que la separa de la cistitis',
            say: 'La clínica es una tríada. Primero, fiebre alta, sobre treinta y ocho y medio, con calofríos intensos.' },
          { t: 'Dolor lumbar, Giordano positivo', d: 'Puñopercusión dolorosa',
            say: 'Segundo, dolor lumbar o en el flanco, con puñopercusión dolorosa: el signo de Giordano.' },
          { t: 'Síntomas urinarios bajos', d: 'Pueden faltar en el anciano',
            say: 'Y tercero, disuria, polaquiuria o urgencia. Ojo, que en el anciano pueden faltar, y el cuadro puede llegar solo como fiebre o confusión.' },
        ] },
        { title: 'Laboratorio', tag: 'Antes del antibiótico', kind: 'key', items: [
          { t: 'Sedimento: piuria y bacterias', d: 'Cilindros leucocitarios: origen renal',
            say: 'El sedimento muestra leucocituria importante, bacterias y microhematuria. Y el hallazgo clave son los cilindros leucocitarios: como los cilindros se forman en el túbulo, certifican que la infección está en el riñón y no solo en la vejiga.' },
          { t: 'Urocultivo siempre, antes de tratar', d: 'Con antibiograma',
            say: 'Y la regla que no se negocia: siempre urocultivo con antibiograma, y siempre antes de la primera dosis de antibiótico. Es lo que te va a permitir ajustar el tratamiento si el germen es resistente, y lo vamos a necesitar en una de las preguntas reales.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'La decisión clave',
      title: 'Criterios de hospitalización',
      cards: [
        { title: 'Hospitalizar si hay', tag: 'Basta uno', kind: 'alert', items: [
          { t: 'Embarazo', d: 'En cualquier trimestre',
            say: 'Ahora la decisión que más se pregunta: ¿quién se hospitaliza para antibiótico intravenoso? Basta un solo criterio. El primero, y el más preguntado, es el embarazo, en cualquier trimestre, porque aumenta mucho el riesgo de parto prematuro, sepsis y shock.' },
          { t: 'Intolerancia oral', d: 'Vómitos incoercibles o deshidratación',
            say: 'Segundo, la intolerancia a la vía oral: si vomita todo, el antibiótico oral no se absorbe, y la lógica del tratamiento ambulatorio se cae.' },
          { t: 'Sepsis o inestabilidad', d: 'Hipotensión, taquicardia, compromiso de conciencia',
            say: 'Tercero, la inestabilidad hemodinámica o los criterios de sepsis: hipotensión, taquicardia o compromiso de conciencia.' },
        ] },
        { title: 'También hospitalizar', tag: 'Terreno de riesgo', kind: 'criteria', items: [
          { t: 'Falla renal u obstrucción', d: 'Litiasis infectada: emergencia urológica',
            say: 'Cuarto, la falla renal aguda o la sospecha de obstrucción. Una litiasis con infección detrás es una verdadera emergencia urológica: la orina infectada queda atrapada a presión, igual que la bilis en la colangitis.' },
          { t: 'Comorbilidad o inmunosupresión', d: 'DM descompensada, neutropenia, trasplante, corticoides',
            say: 'Y quinto, las comorbilidades descompensadas o la inmunosupresión: diabetes descompensada, neutropenia, trasplante renal o uso crónico de corticoides.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Oral en la casa o intravenoso en la sala',
      nodes: [
        { id: 'pna', col: 0, row: 1, k: 'start', t: 'PNA con urocultivo tomado', s: '¿Criterios de hospitalización?' },
        { id: 'amb', col: 1, row: 0, k: 'good', t: 'Ambulatoria', s: 'Cipro 500 mg c/12 h × 7 días' },
        { id: 'alt', col: 2, row: 0, k: 'good', t: 'O cefalosporina oral', s: 'Cefadroxilo o cefixima 10–14 días' },
        { id: 'con', col: 3, row: 0, k: 'q', t: 'Control a las 48–72 h', s: 'Revisar respuesta y cultivo' },
        { id: 'hos', col: 1, row: 2, k: 'alert', t: 'Hospitalizada', s: 'Ceftriaxona 1–2 g IV c/24 h' },
        { id: 'car', col: 2, row: 2, k: 'refer', t: 'BLEE o shock séptico', s: 'Ertapenem o meropenem' },
      ],
      edges: [
        { from: 'pna', to: 'amb', label: 'no' }, { from: 'amb', to: 'alt', label: 'o' }, { from: 'alt', to: 'con' },
        { from: 'pna', to: 'hos', label: 'sí' }, { from: 'hos', to: 'car', label: 'si' },
      ],
      steps: [
        { show: ['pna'], note: 'La vía la deciden los criterios',
          say: 'Con el urocultivo tomado, la pregunta es una sola: ¿tiene algún criterio de hospitalización?' },
        { show: ['amb'], note: 'Si la resistencia local es menor al 10–15 %',
          say: 'Si no tiene ninguno, es una pielonefritis no complicada y se trata en la casa. El esquema clásico es ciprofloxacino quinientos miligramos cada doce horas por siete días, siempre que la resistencia local de la E. coli sea menor al diez a quince por ciento.' },
        { show: ['alt'], note: 'Las cefalosporinas requieren más días',
          say: 'La alternativa es una cefalosporina oral, como cefadroxilo o cefixima, y fíjate que con ellas el tratamiento se alarga a diez a catorce días.' },
        { show: ['con'], note: 'No se suelta al paciente',
          say: 'Y el paciente ambulatorio no se suelta: se controla a las cuarenta y ocho a setenta y dos horas, para ver si respondió y revisar el cultivo.' },
        { show: ['hos'], note: 'Primera línea parenteral en Chile',
          say: 'Si tiene un criterio, se hospitaliza, y la primera línea en Chile es una cefalosporina de tercera generación: ceftriaxona uno a dos gramos intravenosa cada veinticuatro horas, o cefotaximo cada ocho horas.' },
        { show: ['car'], note: 'Se escala solo con BLEE o shock',
          say: 'Y se escala a carbapenémicos, ertapenem una vez al día o meropenem cada ocho horas, cuando se sospecha un germen productor de betalactamasas de espectro extendido, la famosa BLEE, o si el paciente está en shock séptico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'La estrella del tema',
      title: 'Pielonefritis en la embarazada',
      cards: [
        { title: 'Por qué es más grave', tag: 'Mecanismo', kind: 'normal', items: [
          { t: 'Uréteres dilatados', d: 'Progesterona y compresión del útero',
            say: 'Vamos a la embarazada. ¿Por qué es tan grave? La progesterona relaja y dilata los uréteres, y el útero los comprime. La orina se estanca, y eso facilita el ascenso y la bacteriemia.' },
          { t: 'Riesgo de parto prematuro', d: 'Y de sepsis materna',
            say: 'Y la infección no solo pone en riesgo a la madre: aumenta el riesgo de parto prematuro. Por eso no hay pielonefritis leve en el embarazo.' },
        ] },
        { title: 'Conducta', tag: 'Siempre igual', kind: 'pharma', items: [
          { t: 'Hospitalizar siempre', d: 'En cualquier semana de gestación',
            say: 'La conducta es siempre la misma: hospitalización, aunque se vea bien y tolere la vía oral.' },
          { t: 'Ceftriaxona 1 g IV al día', d: 'Alternativas según antibiograma',
            say: 'El antibiótico es ceftriaxona un gramo intravenoso al día. Según el antibiograma también se puede usar ampicilina con sulbactam o cefazolina.' },
          { t: 'Ciprofloxacino contraindicado', d: 'Toxicidad sobre el cartílago fetal',
            say: 'Y la trampa del tema: el ciprofloxacino, que era la primera línea ambulatoria, está contraindicado en el embarazo por su toxicidad sobre el cartílago fetal. Al terminar, urocultivo de control a los siete días.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Complicaciones',
      title: 'Si no responde en 48–72 horas',
      nodes: [
        { id: 'fie', col: 0, row: 1, k: 'start', t: 'Sigue febril a las 48–72 h', s: 'Con antibiótico adecuado' },
        { id: 'img', col: 1, row: 1, k: 'mech', t: 'Imagen renal', s: 'TAC con contraste o ecografía' },
        { id: 'abs', col: 2, row: 0, k: 'alert', t: 'Absceso renal o perirrenal', s: 'Drenaje' },
        { id: 'obs', col: 2, row: 2, k: 'alert', t: 'Litiasis obstructiva', s: 'Descompresión urológica urgente' },
        { id: 'atb', col: 3, row: 1, k: 'trap', t: 'Solo cambiar el antibiótico', s: 'Si el germen era sensible' },
      ],
      edges: [
        { from: 'fie', to: 'img' }, { from: 'img', to: 'abs' }, { from: 'img', to: 'obs' },
        { from: 'fie', to: 'atb', label: 'error' },
      ],
      steps: [
        { show: ['fie'], note: 'Lo esperable es mejorar en 48–72 h',
          say: 'Última situación. Con un antibiótico adecuado, el paciente debería mejorar en cuarenta y ocho a setenta y dos horas. ¿Y si sigue con fiebre?' },
        { show: ['img'], note: 'Buscar la complicación',
          say: 'Si el germen era sensible al antibiótico, el problema no es el fármaco: hay algo local que no deja sanar. Se pide imagen renal, idealmente un TAC con contraste, o una ecografía.' },
        { show: ['abs', 'obs'], note: 'Una colección o una vía tapada',
          say: 'Lo que buscas es un absceso renal o perirrenal, que hay que drenar, o una litiasis que obstruye la vía urinaria, que requiere descompresión urológica de urgencia. Es el mismo principio que la colangitis: la infección detrás de una obstrucción no se cura sin drenar.' },
        { show: ['atb'], note: 'Antes de cambiar, mira el antibiograma',
          say: 'El error es cambiar el antibiótico a ciegas. Otra cosa es que el cultivo muestre resistencia, como una E. coli BLEE: ahí sí se ajusta, y eso es justamente lo que pregunta una de las preguntas reales.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todas las decisiones en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Esquemas empíricos según el escenario',
      head: ['Escenario', 'Vía', 'Antibiótico', 'Duración'],
      rows: [
        { cells: ['PNA no complicada, adulto sano', 'Oral, ambulatoria', 'Ciprofloxacino 500 mg c/12 h (o cefixima)', '7 días (cipro); 10–14 (cefalosporina)'],
          say: 'Repasemos los esquemas en una tabla. Adulto sano sin criterios: oral y en la casa, con ciprofloxacino por siete días, o una cefalosporina oral por diez a catorce.' },
        { cells: ['PNA severa o con vómitos', 'Intravenosa', 'Ceftriaxona 1–2 g/día o cefotaximo', '10–14 días; a oral tras 48 h afebril'],
          say: 'Severa o con vómitos: intravenosa, con ceftriaxona o cefotaximo, y se pasa a vía oral cuando lleva cuarenta y ocho horas sin fiebre, hasta completar diez a catorce días.' },
        { cells: ['Embarazada', 'Hospitalizada siempre', 'Ceftriaxona 1 g/día IV; nunca cipro', '10–14 días + urocultivo a los 7 días'],
          say: 'Embarazada: hospitalizada siempre, ceftriaxona un gramo al día, nunca ciprofloxacino, y urocultivo de control a los siete días de terminar.' },
        { cells: ['Sospecha de BLEE o paciente crítico', 'Intravenosa', 'Ertapenem 1 g/día o meropenem', '14 días según antibiograma'],
          say: 'Y con sospecha de BLEE o un paciente crítico: carbapenémico, ertapenem o meropenem, por catorce días guiado por el antibiograma.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 50 años hospitalizado por PNA derecha, con ceftriaxona 1 g IV cada 24 h desde hace 72 h. Persiste con fiebre diaria de 39 °C y dolor lumbar en aumento. Leucocitos 17.000/mm³, PCR en ascenso. Urocultivo: E. coli sensible a cefalosporinas.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Cambiar a vancomicina IV' },
        { letter: 'B', text: 'Solicitar TAC de abdomen y pelvis con contraste' },
        { letter: 'C', text: 'Suspender antibióticos y repetir hemocultivos en 48 h' },
        { letter: 'D', text: 'Alta con ciprofloxacino oral por 21 días' },
        { letter: 'E', text: 'Mantener el mismo esquema y controlar en 7 días' },
      ],
      correct: 'B',
      explanation: 'Sin respuesta a las 48–72 h de un antibiótico al que el germen es sensible: hay que descartar una complicación local (absceso renal o perirrenal, obstrucción litiásica). El examen de elección es el TAC con contraste; la conducta depende de lo que muestre (drenaje o descompresión).',
      say: {
        stem: 'Vamos con un caso. Hombre de cincuenta años hospitalizado por una pielonefritis derecha, con ceftriaxona desde hace setenta y dos horas. Sigue con fiebre de treinta y nueve todos los días, y el dolor lumbar va en aumento. Los leucocitos y la PCR suben. El urocultivo muestra una E. coli sensible a cefalosporinas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: cambiar a vancomicina, pedir un TAC de abdomen y pelvis con contraste, suspender antibióticos y repetir hemocultivos, dar de alta con ciprofloxacino, o mantener el esquema y controlar en una semana. Piénsalo.',
        answer: 'Es la B. El germen es sensible a lo que recibe, y aun así no mejora a las setenta y dos horas. Entonces el problema no es el antibiótico: hay algo que no deja sanar, un absceso o una obstrucción, y el TAC con contraste lo busca. Cambiar a vancomicina es la trampa: no cubre la E. coli y no resuelve una colección. Y esperar una semana más es dejar crecer el absceso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 8',
      stem: 'Una paciente de 28 años, cursando un embarazo de 18 semanas, consulta por cuadro de fiebre, malestar general, náuseas, disuria dolorosa y dolor lumbar derecho. Al examen físico, tiene fiebre de 38,9°C, frecuencia cardíaca 95x’, presenta puño percusión positiva a derecha. Se solicitan exámenes de orina que muestran sedimento con 20 glóbulos rojos por campo, 50 leucocitos por campo y abundantes bacterias, estando pendiente el resultado del urocultivo. Las pruebas de bienestar fetal no muestran alteraciones.',
      question: '¿Qué tratamiento antibiótico es el más adecuado para su manejo?',
      options: [
        { letter: 'A', text: 'Ciprofloxacino' },
        { letter: 'B', text: 'Nitrofurantoína' },
        { letter: 'C', text: 'Amoxicilina más ácido clavulánico' },
        { letter: 'D', text: 'Ceftriaxona' },
        { letter: 'E', text: 'Ampicilina' },
      ],
      correct: 'D',
      explanation: 'PNA en el embarazo: hospitalización y antibiótico intravenoso, de elección ceftriaxona. El ciprofloxacino está contraindicado en el embarazo y la nitrofurantoína solo sirve para la infección urinaria baja (no alcanza el parénquima renal).',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Embarazada de dieciocho semanas con fiebre de treinta y ocho coma nueve, náuseas, disuria y dolor lumbar derecho, con puñopercusión positiva. El sedimento muestra cincuenta leucocitos por campo y abundantes bacterias, con el urocultivo pendiente. El feto está bien.',
        question: '¿Qué tratamiento antibiótico es el más adecuado?',
        options: 'Las opciones: ciprofloxacino, nitrofurantoína, amoxicilina con ácido clavulánico, ceftriaxona, o ampicilina. Piénsalo.',
        answer: 'Es la D, ceftriaxona. Fiebre, dolor lumbar y puñopercusión positiva en una embarazada: pielonefritis, y eso significa hospitalizar y tratar por vía intravenosa. El ciprofloxacino es la trampa, porque es la primera línea ambulatoria, pero está contraindicado en el embarazo. Y la nitrofurantoína sirve solo para la cistitis: no alcanza el tejido renal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 38',
      stem: 'Una paciente de 33 años, sin antecedentes, cursa con cuadro de dolor lumbar y fiebre desde hace un día, asociado a disuria y orinas de mal olor. Al examen físico se aprecia en buenas condiciones generales, con temperatura de 38ºC y en el resto del examen solo destaca puño percusión positiva a derecha. Se solicita sedimento de orina y urocultivo, con lo que se confirma pielonefritis aguda por lo que inicia tratamiento ambulatorio con ciprofloxacino. Dos días después acude a control persistiendo sintomática. Su resultado del urocultivo muestra presencia de echericha coli sensible a nitrofurantoina, carbapenémicos, ampicilina/sulbactam y amikacina, y resistente a cefalosporinas, gentamicina y ciprofloxacino.',
      question: '¿Cuál de los siguientes fármacos es el de elección para el manejo en este caso?',
      options: [
        { letter: 'A', text: 'Amikacina' },
        { letter: 'B', text: 'Nitrofurantoina' },
        { letter: 'C', text: 'Ertapenem' },
        { letter: 'D', text: 'Ampicilina' },
        { letter: 'E', text: 'Moxifloxacino' },
      ],
      correct: 'C',
      explanation: 'Una E. coli resistente a cefalosporinas es una BLEE: el tratamiento de elección es un carbapenémico (ertapenem 1 g al día). La nitrofurantoína no alcanza el parénquima renal y el moxifloxacino comparte la resistencia a quinolonas.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil trece. Mujer de treinta y tres años con pielonefritis, en buenas condiciones, tratada en forma ambulatoria con ciprofloxacino. A las cuarenta y ocho horas sigue con síntomas, y llega el urocultivo: E. coli resistente a cefalosporinas, gentamicina y ciprofloxacino, y sensible a nitrofurantoína, carbapenémicos, ampicilina con sulbactam y amikacina.',
        question: '¿Cuál es el fármaco de elección?',
        options: 'Las opciones: amikacina, nitrofurantoína, ertapenem, ampicilina, o moxifloxacino. Piénsalo.',
        answer: 'Es la C, ertapenem. Aquí se ve por qué el urocultivo se toma antes de tratar, y por qué el control es a las cuarenta y ocho horas. Una E. coli resistente a cefalosporinas es una BLEE, y la BLEE se trata con carbapenémicos. La nitrofurantoína tienta porque sale sensible, pero no llega al riñón. Y el moxifloxacino es otra quinolona, con la misma resistencia que el ciprofloxacino.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 100',
      stem: 'Un paciente de 26 años presenta un cuadro de dolor lumbar, asociado a inquietud motora de 5 día de evolución. Hace 2 días se agrega fiebre y compromiso del estado general, más vómitos alimentarios. Al examen físico se aprecia FC: 105x’, PA: 100/70 mmHg, Tº: 38ºC, puño percusión positiva a izquierda. Se solicita pieloTAC que muestra imagen cálcica en el tercio medio del uréter izquierdo, con dilatación de la vía urinaria proximal y edema perirrenal. Su sedimento de orina muestra 40 leucocitos por campo, bacterias y cristales en moderada cantidad. Se inicia tratamiento antibiótico endovenoso y se administran cristaloides.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Litotripsia extracorpórea' },
        { letter: 'B', text: 'Nefrolitotomía percutánea' },
        { letter: 'C', text: 'Extracción quirúrgica abierta' },
        { letter: 'D', text: 'Catéter doble jota' },
        { letter: 'E', text: 'Litotomía ureteroscópica' },
      ],
      correct: 'D',
      explanation: 'PNA sobre una vía urinaria obstruida por un cálculo (pionefrosis): emergencia urológica. Además de antibióticos y volumen, hay que descomprimir la vía urinaria, con un catéter doble J (o nefrostomía percutánea si no es posible). El cálculo se trata después, con la infección resuelta.',
      say: {
        stem: 'Y una última, del EUNACOM de agosto de dos mil veintiuno. Hombre de veintiséis años con cinco días de dolor lumbar e inquietud, al que hace dos días se suman fiebre, compromiso del estado general y vómitos. Está taquicárdico, con presión de cien con setenta y puñopercusión positiva a izquierda. El pieloTAC muestra un cálculo en el uréter izquierdo, con la vía urinaria dilatada por encima y edema perirrenal. Ya tiene antibiótico intravenoso y cristaloides.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: litotripsia extracorpórea, nefrolitotomía percutánea, cirugía abierta, catéter doble jota, o ureteroscopía. Piénsalo.',
        answer: 'Es la D, catéter doble jota. Es una pielonefritis detrás de un cálculo que obstruye: la emergencia urológica de los criterios de hospitalización. El antibiótico no basta, hay que descomprimir la vía urinaria. Las otras alternativas tientan porque atacan el cálculo, pero romperlo o sacarlo con la orina infectada es arriesgado. Primero se drena, y el cálculo se resuelve después.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Fiebre + riñón', kind: 'key', items: [
          { t: 'Fiebre + Giordano positivo', d: 'La cistitis nunca da fiebre',
            say: 'Cerremos con las reglas de oro. Fiebre con puñopercusión positiva es pielonefritis; la cistitis nunca da fiebre.' },
          { t: 'Urocultivo antes del antibiótico', d: 'Siempre, con antibiograma',
            say: 'Y siempre urocultivo con antibiograma antes de la primera dosis.' },
        ] },
        { title: 'Conducta', tag: 'Quién se hospitaliza', kind: 'alert', items: [
          { t: 'Embarazo: hospitalizar siempre', d: 'Ceftriaxona IV; nunca ciprofloxacino',
            say: 'La embarazada se hospitaliza siempre y recibe ceftriaxona; el ciprofloxacino está contraindicado. También se hospitaliza quien vomita, tiene sepsis, obstrucción, falla renal o está inmunosuprimido.' },
          { t: 'Sin criterios: cipro 7 días', d: 'Control a las 48–72 h',
            say: 'Sin criterios, ciprofloxacino oral por siete días en la casa, con control a las cuarenta y ocho a setenta y dos horas.' },
        ] },
        { title: 'Si no responde', tag: '48–72 h', kind: 'pharma', items: [
          { t: 'Germen sensible: buscar complicación', d: 'TAC: absceso u obstrucción',
            say: 'Si no responde y el germen era sensible, busca un absceso o una obstrucción con TAC; si el germen es BLEE, carbapenémico. Si te llevas una sola idea de hoy: fiebre con dolor lumbar es pielonefritis, y en la embarazada se hospitaliza siempre con ceftriaxona. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Pielonefritis aguda: dónde y con qué',
    root: N('start', 'Fiebre + dolor lumbar', 'Giordano positivo, síntomas urinarios',
      'Paciente con fiebre, dolor lumbar con puñopercusión positiva y síntomas urinarios: pielonefritis aguda. Antes de cualquier antibiótico, sedimento y urocultivo con antibiograma.',
      ['', N('q', '¿Criterio de hospitalización?', 'Embarazo · vómitos · sepsis · obstrucción · inmunosupresión',
        'La decisión es si tiene algún criterio de hospitalización. Basta uno.',
        ['Embarazo', N('alert', 'Hospitalizar + ceftriaxona 1 g IV', 'Nunca ciprofloxacino',
          'Si está embarazada, se hospitaliza siempre y se trata con ceftriaxona un gramo intravenoso al día. El ciprofloxacino está contraindicado.')],
        ['Otro criterio', N('do', 'Hospitalizar + ceftriaxona IV', 'Carbapenémico si BLEE o shock',
          'Con vómitos, sepsis, obstrucción, falla renal o inmunosupresión, se hospitaliza con ceftriaxona intravenosa. Si hay sospecha de BLEE o shock séptico, carbapenémico.')],
        ['Ninguno', N('ok', 'Ambulatorio: cipro 7 días', 'O cefalosporina oral 10–14 días',
          'Sin criterios, tratamiento oral en la casa: ciprofloxacino por siete días, o una cefalosporina oral por diez a catorce días.',
          ['Control 48–72 h', N('q', '¿Mejoró?', 'Revisar el urocultivo',
            'Se controla a las cuarenta y ocho a setenta y dos horas. ¿Mejoró?',
            ['Sí', N('ok', 'Completar el tratamiento', 'Según antibiograma',
              'Si mejoró, completa el tratamiento, ajustado al antibiograma.')],
            ['No', N('refer', 'Antibiograma + imagen', 'BLEE: carbapenémico; sensible: TAC',
              'Si no mejoró, mira el antibiograma: si es BLEE, carbapenémico. Si el germen era sensible, busca un absceso o una obstrucción con TAC, y drena si corresponde.')])])])]),
  },
};
