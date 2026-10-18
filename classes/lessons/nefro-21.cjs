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
      kicker: 'Cistitis',
      title: 'Cistitis aguda no complicada: reconocerla',
      cards: [
        { title: 'Clínica', tag: 'Vía urinaria baja', kind: 'criteria', items: [
          { t: 'Disuria, polaquiuria, urgencia, tenesmo', d: 'Dolor suprapúbico; a veces hematuria macroscópica',
            say: 'Antes de seguir con la pielonefritis, volvamos a su hermana menor: la cistitis aguda no complicada, en la mujer adulta, no embarazada, sin anomalías urológicas. Produce disuria, polaquiuria, urgencia miccional, tenesmo y dolor suprapúbico, a veces con hematuria macroscópica.' },
          { t: 'Sin fiebre ni dolor lumbar', d: 'Si aparecen: pielonefritis',
            say: 'Y la clave: sin fiebre y sin dolor lumbar. Si aparecen, ya es una pielonefritis.' },
        ] },
        { title: 'Diagnóstico', tag: 'Clínico', kind: 'key', items: [
          { t: 'Tira: leucocito esterasa y nitritos +', d: 'Sedimento con piuria y bacteriuria',
            say: 'El diagnóstico es clínico y se apoya en la tira reactiva, con leucocito esterasa y nitritos positivos, y en el sedimento con piuria y bacteriuria.' },
          { t: 'Urocultivo no es necesario en el cuadro típico', d: 'Sí en embarazo, hombres, diabéticos, sonda, falla o recurrencia',
            say: 'El urocultivo no es necesario en el cuadro típico, pero se pide en el embarazo, en los hombres, en diabéticos o inmunosuprimidos, con sonda, si falla el tratamiento o si hay recurrencia.' },
        ] },
        { title: 'Quién la causa', tag: 'Agentes', kind: 'normal', items: [
          { t: 'E. coli: 75–90 %', d: 'S. saprophyticus en la mujer joven · Klebsiella, Proteus',
            say: 'La causa es la Escherichia coli en setenta y cinco a noventa por ciento. El Staphylococcus saprophyticus aparece en la mujer joven, y también Klebsiella y Proteus.' },
          { t: 'Diferenciales', d: 'Uretritis (clamidia, gonococo), vaginitis, cistitis intersticial',
            say: 'Y como diagnósticos diferenciales, la uretritis por clamidia o gonococo, la vaginitis y la cistitis intersticial.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cistitis',
      title: 'Tratamiento de la cistitis y situaciones especiales',
      cards: [
        { title: 'Esquemas orales', tag: 'Según resistencia local', kind: 'pharma', items: [
          { t: 'Nitrofurantoína 100 mg c/6 h × 5 días', d: 'Evitar con TFG < 30 mL/min',
            say: 'El tratamiento es ambulatorio y por vía oral, según la resistencia local. Nitrofurantoína, cien miligramos cada seis horas por cinco días, que se evita si la filtración es menor de treinta.' },
          { t: 'Fosfomicina 3 g, dosis única', d: 'Cotrimoxazol 160/800 c/12 h × 3 días solo si resistencia < 20 %',
            say: 'O fosfomicina trometamol, tres gramos en dosis única. El cotrimoxazol, cada doce horas por tres días, solo si la resistencia local es menor de veinte por ciento.' },
          { t: 'Ciprofloxacino y cefalosporinas: alternativa', d: 'Por resistencia y efectos adversos',
            say: 'El ciprofloxacino y las cefalosporinas quedan como alternativa, por la alta resistencia de la E. coli y los efectos adversos de las fluoroquinolonas.' },
        ] },
        { title: 'Cuándo cambia', tag: 'Cistitis complicada', kind: 'alert', items: [
          { t: 'Persisten síntomas > 48–72 horas', d: 'Urocultivo y antibiograma',
            say: 'Si los síntomas persisten más de cuarenta y ocho a setenta y dos horas, se pide urocultivo y antibiograma.' },
          { t: 'Hombre o cistitis complicada', d: 'Urocultivo previo y 7 días o más',
            say: 'En el hombre y en la cistitis complicada, con diabetes, anomalías, sonda o adulto mayor, se pide urocultivo antes y se trata siete días o más.' },
          { t: 'Embarazo: cefadroxilo o amoxicilina 7 días', d: 'Según antibiograma, con urocultivo de control',
            say: 'En el embarazo se usa cefadroxilo o amoxicilina según antibiograma, por siete días, con urocultivo de control. Si la evolución es favorable, en los demás casos no se requiere control.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Bacteriuria asintomática',
      title: 'Bacteriuria asintomática y prevención de la ITU',
      cards: [
        { title: 'Qué es y a quién se trata', tag: '≥ 10⁵ UFC/mL sin síntomas', kind: 'key', items: [
          { t: 'Urocultivo positivo sin síntomas', d: 'Mismo germen en 2 muestras en la mujer, 1 en el hombre',
            say: 'La bacteriuria asintomática es un urocultivo con cien mil o más colonias por mililitro del mismo germen, en dos muestras en la mujer y una en el hombre, sin síntomas urinarios. Es común en mujeres mayores, diabéticos y pacientes con sonda.' },
          { t: 'Solo se trata en tres situaciones', d: 'Embarazo · procedimiento urológico con sangrado · trasplante renal reciente',
            say: 'Solo se trata en tres situaciones: el embarazo, antes de procedimientos urológicos que producen sangrado de la mucosa, y en el receptor de trasplante renal en los primeros meses.' },
          { t: 'Embarazo: urocultivo en el primer control', d: 'Tratar 4–7 días según antibiograma',
            say: 'En la embarazada se pesquisa con urocultivo en el primer control prenatal, y se trata cuatro a siete días según el antibiograma, con control posterior, por el riesgo de pielonefritis y parto prematuro.' },
        ] },
        { title: 'Cuándo no se trata', tag: 'Error frecuente', kind: 'alert', items: [
          { t: 'Adulto mayor, diabético, sonda vesical', d: 'No previene complicaciones y selecciona resistencia',
            say: 'No se trata en adultos mayores, diabéticos ni portadores de sonda vesical: no previene complicaciones y selecciona bacterias resistentes. Y fuera de las situaciones anteriores, no se debe pedir urocultivo sin síntomas.' },
        ] },
        { title: 'ITU recurrente y prevención', tag: '≥ 3 al año o ≥ 2 en 6 meses', kind: 'pharma', items: [
          { t: 'Líquidos, no retener, orinar tras el coito', d: 'Aseo de adelante hacia atrás; sin espermicidas ni duchas vaginales',
            say: 'Se habla de ITU recurrente con tres o más episodios al año, o dos en seis meses. La prevención es ingesta abundante de líquidos, no retener la orina, orinar después de la relación sexual, aseo genital de adelante hacia atrás, y evitar duchas vaginales, jabones irritantes y espermicidas.' },
          { t: 'Estrógenos vaginales en la posmenopáusica', d: 'Arándano rojo: evidencia modesta',
            say: 'En la mujer posmenopáusica ayudan los estrógenos vaginales. El arándano rojo tiene evidencia modesta.' },
          { t: 'Profilaxis continua o poscoital', d: 'Nitrofurantoína o cotrimoxazol en dosis bajas 6–12 meses · derivar si hay causa anatómica',
            say: 'Si las recurrencias persisten, se descartan anomalías con ecografía, residuo posmiccional y litiasis, y se considera profilaxis antibiótica continua en dosis bajas nocturnas, con nitrofurantoína o cotrimoxazol por seis a doce meses, o poscoital. Se deriva si se sospecha una causa anatómica.' },
        ] },
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
            say: 'El sedimento muestra leucocituria importante, bacterias y microhematuria. Y el hallazgo clave son los cilindros leucocitarios: como los cilindros se forman en el túbulo, certifican que la infección está en el riñón y no solo en la vejiga. Mira este sedimento lleno de leucocitos. Y entre los cilindros, el leucocitario, arriba a la izquierda, certifica que la infección está en el riñón.',
            photos: [
              { src: 'biblioteca/03_nefrologia/nefro-21/01_sedimento-con-leucocituria__cto-nefro_p33.jpg', label: 'Leucocituria', at: 'Mira este sedimento', credit: 'Manual CTO Nefrología 14.ª ed., p. 33' },
              { src: 'biblioteca/03_nefrologia/nefro-21/02_tipos-de-cilindros__cto-nefro_p34.jpg', label: 'Tipos de cilindros', at: 'Y entre los cilindros', credit: 'Manual CTO Nefrología 14.ª ed., p. 34' }
            ] },
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
          say: 'Si el germen era sensible al antibiótico, el problema no es el fármaco: hay algo local que no deja sanar. Se pide imagen renal, idealmente un TAC con contraste, o una ecografía. Mira esta ecografía: la vía urinaria está dilatada detrás de una obstrucción.',
            photo: { src: 'biblioteca/03_nefrologia/nefro-21/03_ecografia-hidronefrosis__bailey-love_p1433.jpg', label: 'Vía urinaria dilatada', at: 'Mira esta ecografía', credit: 'Bailey & Love 27.ª ed., Fig. 76.15' } },
        { show: ['abs', 'obs'], note: 'Una colección o una vía tapada',
          say: 'Lo que buscas es un absceso renal o perirrenal, que hay que drenar, o una litiasis que obstruye la vía urinaria, que requiere descompresión urológica de urgencia. Es el mismo principio que la colangitis: la infección detrás de una obstrucción no se cura sin drenar. En esta tomografía con contraste, un absceso renal. Y en esta otra, cálculos en los riñones.',
            photos: [
              { src: 'biblioteca/07_nefrologia/nefro-21/05_absceso_renal_tac__nelson_p4209.jpg', label: 'Absceso renal', at: 'En esta tomografía con contraste', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., p. 4209' },
              { src: 'biblioteca/03_nefrologia/nefro-21/04_tac-calculos-renales__bailey-love_p1410.jpg', label: 'Cálculos renales', at: 'Y en esta otra', credit: 'Bailey & Love 27.ª ed., Fig. 75.21a' }
            ] },
        { show: ['atb'], note: 'Antes de cambiar, mira el antibiograma',
          say: 'El error es cambiar el antibiótico a ciegas. Otra cosa es que el cultivo muestre resistencia, como una E. coli BLEE: ahí sí se ajusta, y eso es justamente lo que pregunta una de las preguntas reales.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'La infección sube',
      images: [
        { src: 'animaciones/nefro-21/A1_pielonefritis_ascendente.mp4', label: 'Pielonefritis', credit: 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Con fiebre es pielonefritis',
          say: 'La Escherichia coli parte en la vejiga. Si se queda ahí, es una cistitis, sin fiebre. Si asciende por el uréter y llega al riñón, es una pielonefritis: fiebre alta con calofríos y dolor lumbar. Siempre urocultivo antes del antibiótico.' },
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
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.1.016 · Pielonefritis aguda no complicada",
      "stem": "Mujer de 27 años, sana, no embarazada, con 2 días de disuria, fiebre de 38,7 °C y dolor lumbar derecho. Puño percusión derecha positiva. Tolera la vía oral, PA 115/70 mmHg, FC 98 lpm. Orina con leucocituria y nitritos positivos. Resistencia local de E. coli a quinolonas menor de 10 %.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Nitrofurantoína 100 mg cada 6 horas por 5 días"
        },
        {
          "letter": "B",
          "text": "Urocultivo y ciprofloxacino 500 mg cada 12 horas por 7 días, ambulatorio"
        },
        {
          "letter": "C",
          "text": "Hospitalizar y ceftriaxona más ampicilina endovenosa"
        },
        {
          "letter": "D",
          "text": "Fosfomicina 3 g en dosis única"
        },
        {
          "letter": "E",
          "text": "TAC de abdomen y pelvis antes de iniciar antibiótico"
        }
      ],
      "correct": "B",
      "explanation": "Pielonefritis no complicada en mujer sana que tolera la vía oral: manejo ambulatorio, urocultivo previo y ciprofloxacino 7 días si la resistencia local es baja (alternativa: cefalosporina oral). Nitrofurantoína y fosfomicina no alcanzan niveles en el parénquima renal y sirven solo para cistitis.",
      "say": {
        "stem": "Una mujer de veintisiete años, sana y no embarazada, tiene disuria, fiebre y dolor lumbar derecho con puño percusión positiva. Está estable y tolera la vía oral, y la resistencia local a quinolonas es baja.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: nitrofurantoína, urocultivo y ciprofloxacino ambulatorio por siete días, hospitalizar, fosfomicina en dosis única, o tomografía antes del antibiótico. Piénsalo.",
        "answer": "Es la B. Pielonefritis no complicada en una paciente estable se trata en casa: urocultivo y ciprofloxacino por siete días. La nitrofurantoína tienta porque es la reina de la cistitis, pero no llega al riñón y falla en la pielonefritis."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.4.017 · Urocultivo y antibiograma",
      "stem": "Mujer de 45 años, no embarazada, sin diabetes ni patología urológica, asintomática. En un chequeo de rutina se solicitó urocultivo, que informa más de 100.000 UFC/mL de E. coli sensible a nitrofurantoína.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Nitrofurantoína por 5 días"
        },
        {
          "letter": "B",
          "text": "Ciprofloxacino por 7 días"
        },
        {
          "letter": "C",
          "text": "No tratar: es una bacteriuria asintomática"
        },
        {
          "letter": "D",
          "text": "Repetir el urocultivo cada mes"
        },
        {
          "letter": "E",
          "text": "Ecografía renal y cistoscopía"
        }
      ],
      "correct": "C",
      "explanation": "Bacteriuria asintomática en mujer no embarazada: no se trata, porque no reduce infecciones sintomáticas y genera resistencia. Se trata solo en embarazadas y antes de procedimientos urológicos con sangrado de mucosa. El urocultivo se pide ante síntomas, no como tamizaje general.",
      "say": {
        "stem": "Una mujer de cuarenta y cinco años, no embarazada, sana y sin síntomas urinarios, se hizo un urocultivo de rutina que muestra más de cien mil colonias de Escherichia coli.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: nitrofurantoína, ciprofloxacino, no tratar, urocultivo mensual o estudio urológico. Piénsalo.",
        "answer": "Es la C, no tratar. Sin síntomas y sin embarazo, la bacteriuria asintomática no se trata: no previene infecciones y solo selecciona resistencia. La nitrofurantoína tienta porque el antibiograma la muestra sensible, pero un cultivo positivo no es una enfermedad."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.4.014 · Examen de orina semicuantitativa",
      "stem": "Una mujer de 30 años consulta por disuria, polaquiuria y urgencia miccional de 1 día. Refiere que orina cada 30 minutos. La tira reactiva de orina muestra leucocitos (+++) y nitritos negativos.",
      "question": "¿Cuál es la interpretación más adecuada del resultado de nitritos?",
      "options": [
        {
          "letter": "A",
          "text": "Descarta una infección urinaria"
        },
        {
          "letter": "B",
          "text": "Indica que la infección es viral"
        },
        {
          "letter": "C",
          "text": "Indica infección por E. coli"
        },
        {
          "letter": "D",
          "text": "Indica contaminación de la muestra"
        },
        {
          "letter": "E",
          "text": "Un nitrito negativo no descarta infección, porque requiere tiempo de permanencia de la orina en la vejiga y bacterias reductoras de nitratos"
        }
      ],
      "correct": "E",
      "explanation": "Los nitritos se forman cuando enterobacterias como E. coli reducen nitratos, lo que requiere unas 4 horas de orina en la vejiga. Con polaquiuria intensa o gérmenes no reductores (Enterococcus, S. saprophyticus) pueden ser negativos. Es específico pero poco sensible: un nitrito negativo no descarta ITU.",
      "say": {
        "stem": "Una mujer de treinta años tiene disuria, urgencia y orina cada media hora desde ayer. La tira reactiva muestra leucocitos muy positivos y nitritos negativos.",
        "question": "¿Cómo se interpreta el nitrito negativo?",
        "options": "Las opciones: descarta infección, indica infección viral, indica E coli, indica contaminación o no la descarta por poco tiempo de orina en vejiga o gérmenes no reductores. Piénsalo.",
        "answer": "Es la E. El nitrito necesita horas de orina en la vejiga y gérmenes que reduzcan nitratos, así que con polaquiuria puede salir negativo. Pensar que descarta la infección tienta, pero el nitrito es específico, no sensible."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.4.025 · Urocultivo y antibiograma",
      "stem": "Una mujer de 62 años, diabética, presenta fiebre de 39 °C, calofríos, dolor lumbar derecho y puño percusión positiva. Está hemodinámicamente estable. Hace 3 meses recibió ciprofloxacino por una cistitis.",
      "question": "¿Cuál es la conducta más adecuada respecto del urocultivo?",
      "options": [
        {
          "letter": "A",
          "text": "Iniciar antibiótico sin solicitar urocultivo"
        },
        {
          "letter": "B",
          "text": "Solicitar urocultivo solo si no responde en 1 semana"
        },
        {
          "letter": "C",
          "text": "Esperar el resultado del urocultivo (48 a 72 horas) para iniciar antibiótico"
        },
        {
          "letter": "D",
          "text": "Tomar urocultivo con antibiograma antes de iniciar el antibiótico empírico, y ajustar según el resultado"
        },
        {
          "letter": "E",
          "text": "Usar la orina recolectada el día anterior"
        }
      ],
      "correct": "D",
      "explanation": "En una pielonefritis, especialmente en diabéticos o con uso reciente de antibióticos, se toma urocultivo con antibiograma (segundo chorro, previo aseo) antes del primer antibiótico, sin retrasar el tratamiento empírico. El antibiograma permite ajustar ante resistencia, frecuente a quinolonas en Chile. Esperar el resultado para tratar es peligroso.",
      "say": {
        "stem": "Una mujer diabética de sesenta y dos años tiene fiebre alta, calofríos, dolor lumbar derecho y puño percusión positiva, y recibió ciprofloxacino hace tres meses.",
        "question": "¿Cuál es la conducta más adecuada con el urocultivo?",
        "options": "Las opciones: tratar sin urocultivo, cultivar solo si no responde, esperar el resultado para tratar, tomar urocultivo con antibiograma antes del antibiótico empírico o usar la orina de ayer. Piénsalo.",
        "answer": "Es la D. En una pielonefritis se toma urocultivo con antibiograma antes del antibiótico, sin retrasar el tratamiento, para ajustar según resistencias. Esperar el resultado tienta por precisión, pero retrasar el antibiótico en una pielonefritis es peligroso."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.1.005 · Bacteriuria asintomática",
      "stem": "Mujer de 72 años, diabética, sin síntomas urinarios ni fiebre, se realiza un urocultivo de rutina que muestra Escherichia coli con más de 100.000 UFC/mL en 2 muestras. No está embarazada ni tiene procedimientos urológicos programados.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Nitrofurantoína por 7 días"
        },
        {
          "letter": "B",
          "text": "No tratar la bacteriuria"
        },
        {
          "letter": "C",
          "text": "Ciprofloxacino por 14 días"
        },
        {
          "letter": "D",
          "text": "Profilaxis antibiótica permanente"
        },
        {
          "letter": "E",
          "text": "Ecografía renal y cistoscopía"
        }
      ],
      "correct": "B",
      "explanation": "La bacteriuria asintomática en adultas mayores y diabéticas no se trata: no reduce las infecciones sintomáticas ni las complicaciones y favorece resistencia y efectos adversos. Solo se trata en embarazadas y antes de procedimientos urológicos con sangrado de mucosa, como la resección transuretral. Tampoco requiere estudio de imágenes.",
      "say": {
        "stem": "Mujer de setenta y dos años, diabética y asintomática, con urocultivo positivo en dos muestras.",
        "question": "¿Qué haces?",
        "options": "Las opciones: nitrofurantoína, no tratar, ciprofloxacino, profilaxis permanente o ecografía y cistoscopía. Piénsalo.",
        "answer": "Es la B. No tratar, porque es una bacteriuria asintomática. Tratar por ser diabética es tentador, pero no previene infecciones y genera resistencia; solo se trata en embarazadas o antes de cirugía urológica."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.1.011 · Infección urinaria baja (cistitis)",
      "stem": "Mujer de 26 años, sana y no embarazada, consulta por disuria, polaquiuria y urgencia miccional de 1 día. Está afebril, sin dolor lumbar ni flujo vaginal. Tira reactiva de orina: leucocitos y nitritos positivos.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Nitrofurantoína 100 mg cada 12 horas por 5 días, sin urocultivo"
        },
        {
          "letter": "B",
          "text": "Urocultivo y esperar el resultado para tratar"
        },
        {
          "letter": "C",
          "text": "Ceftriaxona intramuscular por 3 días"
        },
        {
          "letter": "D",
          "text": "Ecografía renal y vesical"
        },
        {
          "letter": "E",
          "text": "Ciprofloxacino por 14 días"
        }
      ],
      "correct": "A",
      "explanation": "Es una cistitis aguda no complicada: en una mujer joven con síntomas típicos no se requiere urocultivo y se trata empíricamente con nitrofurantoína por 5 días (alternativas: fosfomicina en dosis única o cefalosporina oral), considerando la resistencia local de E. coli. Las quinolonas se reservan, y 14 días o la vía parenteral corresponden a pielonefritis.",
      "say": {
        "stem": "Mujer de veintiséis años, sana, con disuria y polaquiuria de un día, sin fiebre ni dolor lumbar.",
        "question": "¿Qué indicas?",
        "options": "Las opciones: nitrofurantoína cinco días sin urocultivo, urocultivo y esperar, ceftriaxona, ecografía o ciprofloxacino catorce días. Piénsalo.",
        "answer": "Es la A. Nitrofurantoína por cinco días, sin urocultivo, porque es una cistitis no complicada. Ciprofloxacino catorce días es esquema de pielonefritis y además se reserva por resistencia."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.3.006 · Higiene para prevención de infección urinaria",
      "stem": "Mujer de 24 años ha tenido 4 episodios de cistitis no complicada en el último año, la mayoría 1 a 2 días después de tener relaciones sexuales. Examen físico y ecografía renal normales.",
      "question": "¿Cuál es la medida higiénica de prevención más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Duchas vaginales diarias"
        },
        {
          "letter": "B",
          "text": "Orinar después de las relaciones sexuales y mantener buena hidratación"
        },
        {
          "letter": "C",
          "text": "Usar espermicidas"
        },
        {
          "letter": "D",
          "text": "Restringir líquidos para orinar menos veces"
        },
        {
          "letter": "E",
          "text": "Aseo genital de atrás hacia adelante"
        }
      ],
      "correct": "B",
      "explanation": "En la cistitis recurrente asociada al coito se recomienda orinar después de las relaciones, beber abundantes líquidos, no retener la orina y asearse de adelante hacia atrás. Los espermicidas y las duchas vaginales alteran la flora y aumentan el riesgo. Si las medidas fallan, se considera profilaxis antibiótica poscoital.",
      "say": {
        "stem": "Mujer de veinticuatro años con cistitis recurrentes después de las relaciones sexuales.",
        "question": "¿Qué medida higiénica le recomiendas?",
        "options": "Las opciones: duchas vaginales, orinar después del coito e hidratarse, espermicidas, restringir líquidos, o aseo de atrás hacia adelante. Piénsalo.",
        "answer": "Es la B. Orinar después de las relaciones y tomar suficiente líquido. Las duchas vaginales suenan higiénicas, pero alteran la flora y aumentan las infecciones."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2025 · Pregunta 6",
      "stem": "Se atiende a una paciente de 26 años con antecedente de infecciones del tracto urinario a repetición desde hace 4 años, coincidiendo con el inicio de sus relaciones sexuales. Ha presentado urocultivos positivos para Escherichia coli con una frecuencia de 5 a 6 episodios por año. Su examen físico actual es normal, el urocultivo es negativo y el panel de PCR para infecciones de transmisión sexual también resulta negativo. Una ecografía renal y vesical previa resultó normal.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Realizar cistoscopía"
        },
        {
          "letter": "B",
          "text": "Solicitar PCR para Mycobacterium tuberculosis en orina"
        },
        {
          "letter": "C",
          "text": "Iniciar flavoxato vía oral"
        },
        {
          "letter": "D",
          "text": "Profilaxis antibiótica poscoital"
        },
        {
          "letter": "E",
          "text": "Indicar uso de preservativo durante las relaciones sexuales"
        }
      ],
      "correct": "D",
      "explanation": "Cistitis recurrente (3 o más al año) claramente asociada al coito, con ecografía normal, se maneja con profilaxis antibiótica poscoital en dosis única (nitrofurantoína o cotrimoxazol). En mujeres jóvenes sin factores de complicación no se requieren cistoscopía ni más estudio. El flavoxato es solo un antiespasmódico.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Mujer de veintiséis años con cinco a seis cistitis por Escherichia coli al año desde que inició su actividad sexual, con ecografía y examen normales.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: cistoscopía, PCR para tuberculosis en orina, flavoxato, profilaxis antibiótica poscoital o preservativo. Piénsalo.",
        "answer": "Es la D. Las cistitis recurrentes ligadas al coito se previenen con una dosis de antibiótico después de cada relación. La cistoscopía tienta, pero en una mujer joven con ecografía normal no aporta."
      }
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
