// Clase 4.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-17).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-17',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Sumar síntomas para separar cuatro cuadros y saber cuál es urgencia',
      say: 'Bienvenidos. Hoy entramos al bloque de vía biliar con las cuatro patologías del cálculo: colelitiasis, colecistitis, coledocolitiasis y colangitis. Es un tema de alta rentabilidad, y se ordena con una regla muy simple: sumar síntomas. Si en la clase de ictericia aprendiste que el dolor manda en la colestasia, hoy vamos a ver por qué. Al final vas a saber responder lo que el examen siempre pregunta: qué cuadro es, y si se opera, se drena o espera.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Un cálculo, cuatro cuadros',
      nodes: [
        { id: 'cal', col: 0, row: 2, k: 'cause', t: 'Cálculos en la vesícula', s: 'Colelitiasis' },
        { id: 'col', col: 1, row: 0, k: 'effect', t: 'Cólico biliar', s: 'Solo dolor' },
        { id: 'cis', col: 2, row: 0, k: 'risk', t: 'Colecistitis aguda', s: 'Dolor + fiebre' },
        { id: 'cdl', col: 1, row: 3, k: 'risk', t: 'Coledocolitiasis', s: 'Dolor + ictericia' },
        { id: 'cht', col: 2, row: 3, k: 'alert', t: 'Colangitis', s: 'Dolor + ictericia + fiebre' },
        { id: 'can', col: 3, row: 1, k: 'trap', t: 'Cáncer de vesícula', s: 'Chile: la tasa más alta del mundo' },
      ],
      edges: [
        { from: 'cal', to: 'col', label: 'contracción' }, { from: 'col', to: 'cis', label: 'se enclava' },
        { from: 'cal', to: 'cdl', label: 'migra' }, { from: 'cdl', to: 'cht', label: 'se infecta' },
        { from: 'cal', to: 'can', label: 'años' },
      ],
      steps: [
        { show: ['cal'], note: 'Todo parte del mismo cálculo',
          say: 'Todo parte del mismo lugar: cálculos en la vesícula, la colelitiasis. Lo que cambia es dónde se queda el cálculo y si se infecta. Entender ese recorrido es lo que te permite no memorizar cuatro cuadros por separado, sino deducirlos.' },
        { show: ['col'], note: 'Solo dolor, y cede solo',
          say: 'Si la vesícula se contrae contra un cálculo y luego este se libera, aparece solo dolor: el cólico biliar.' },
        { show: ['cis'], note: 'Se suma la fiebre',
          say: 'Si el cálculo se queda enclavado, la vesícula se inflama y se infecta. Al dolor se suma la fiebre: es una colecistitis aguda. Fíjate que la bilis sigue saliendo por el colédoco, así que no hay ictericia.' },
        { show: ['cdl'], note: 'Se suma la ictericia',
          say: 'Si el cálculo sale de la vesícula y migra al colédoco, tapa la salida de la bilis. Al dolor se suma la ictericia: es una coledocolitiasis. Es la colestasia con dolor que vimos en la clase de ictericia.' },
        { show: ['cht'], note: 'Tríada de Charcot',
          say: 'Y si esa bilis estancada se infecta, tienes dolor, ictericia y fiebre, la tríada de Charcot: una colangitis.' },
        { show: ['can'], note: 'Por eso toda colelitiasis se opera',
          say: 'Hay un quinto destino, más lento: el cáncer de vesícula. Chile tiene la tasa más alta del mundo, y eso explica una regla que vamos a ver enseguida.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Colelitiasis',
      title: 'Cólico biliar',
      cards: [
        { title: 'Clínica', tag: 'Solo dolor', kind: 'criteria', items: [
          { t: 'Dolor sordo, 30–60 min', d: 'Epigastrio o hipocondrio derecho, cede solo',
            say: 'Empecemos por el cólico biliar. Es un dolor sordo en el epigastrio o el hipocondrio derecho, que dura de treinta a sesenta minutos y cede solo.' },
          { t: 'Tras comidas grasas', d: 'Con náuseas',
            say: 'Lo típico es que aparezca después de una comida grasa, con náuseas. Sin fiebre, sin ictericia, y sin signos de irritación. Ese dolor que cede solo es lo que lo separa de la colecistitis, que viene a continuación.' },
        ] },
        { title: 'Diagnóstico', tag: 'Ecografía', kind: 'key', items: [
          { t: 'Imagen con sombra acústica', d: 'El cálculo en la vesícula',
            photo: { src: 'biblioteca/01_gastroenterologia/gastro-17/01_colelitiasis-con-sombra-eco__cto-radiologia_p44.jpg', label: 'Colelitiasis', at: 'Mira esta ecografía', credit: 'Manual CTO Radiología 14.ª ed., p. 44' },
            say: 'El examen es la ecografía, que muestra el cálculo como una imagen con sombra acústica. Mira esta ecografía: el cálculo es blanco y deja una sombra negra detrás. Es el mismo examen que abre el estudio de todas las patologías de esta clase.' },
        ] },
        { title: 'Manejo agudo', tag: 'En urgencia', kind: 'pharma', items: [
          { t: 'Dipirona + antiespasmódico', d: 'Analgesia',
            say: 'En la urgencia, el manejo es analgesia con dipirona más un antiespasmódico. Pero el cólico cede, y la pregunta del examen no es qué analgésico usar, sino qué hacer después.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Colelitiasis',
      title: 'Toda colelitiasis se opera',
      cards: [
        { title: 'La regla chilena', tag: 'Incluso asintomática', kind: 'alert', items: [
          { t: 'Colecistectomía laparoscópica electiva', d: 'Con o sin síntomas',
            say: 'Y lo que se hace después es operar. Toda colelitiasis se opera, con colecistectomía laparoscópica electiva, incluso si nunca dio síntomas.' },
          { t: 'Por complicaciones y por cáncer', d: 'El cáncer de vesícula en Chile',
            say: '¿Por qué, si en otros países se observa? Por el riesgo de complicaciones, que es todo lo que vimos en el flujo anterior, y sobre todo por el cáncer de vesícula en Chile.' },
        ] },
        { title: 'GES', tag: 'Cirugía preventiva', kind: 'criteria', items: [
          { t: 'Entre 35 y 49 años', d: 'Colecistectomía garantizada',
            say: 'Y está respaldado por el GES, que garantiza la colecistectomía preventiva entre los treinta y cinco y los cuarenta y nueve años. Esas edades se preguntan. Fuera de ese rango la regla de operar se mantiene; lo que cambia es la garantía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Colecistitis aguda',
      title: 'Dolor que no cede, con fiebre',
      cards: [
        { title: 'Clínica', tag: 'Dolor + fiebre', kind: 'criteria', items: [
          { t: 'Dolor persistente, más de 6 h', d: 'En el hipocondrio derecho',
            say: 'Ahora la colecistitis aguda. La primera diferencia con el cólico es el tiempo: el cólico dura menos de una hora y cede solo, mientras que aquí el dolor no cede y dura más de seis horas.' },
          { t: 'Fiebre, Murphy, leucocitosis', d: 'El Murphy es la clave del examen físico',
            say: 'Y se suman fiebre, leucocitosis y el signo de Murphy: el paciente corta la inspiración cuando palpas bajo el reborde costal derecho.' },
        ] },
        { title: 'Ecografía', tag: 'Confirma', kind: 'key', items: [
          { t: 'Cálculo enclavado', d: 'Y Murphy ecográfico',
            photo: { src: 'biblioteca/01_gastroenterologia/gastro-17/02_colecistitis-eco_alt1__cto-digestivo_p244.jpg', label: 'Vesícula con cálculos', at: 'En este esquema', credit: 'Manual CTO Digestivo 14.ª ed., p. 244' },
            say: 'La ecografía muestra el cálculo enclavado, y el Murphy se puede reproducir con el transductor. En este esquema ves los cálculos dentro de la vesícula.' },
          { t: 'Pared > 4 mm', d: 'Y líquido perivesicular',
            photo: { src: 'biblioteca/01_gastroenterologia/gastro-17/02_colecistitis-eco__cto-radiologia_p44.jpg', label: 'Colecistitis', at: 'mira esta pared', credit: 'Manual CTO Radiología 14.ª ed., p. 44' },
            say: 'Además, mira esta pared: la de la vesícula mide más de cuatro milímetros, y hay líquido alrededor. Una vesícula engrosada con líquido perivesicular es colecistitis. Y fíjate en lo que no aparece: la bilirrubina es normal, porque el colédoco sigue libre.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Colecistitis aguda',
      title: 'La única que se opera de urgencia',
      nodes: [
        { id: 'cis', col: 0, row: 1, k: 'start', t: 'Colecistitis aguda', s: 'Confirmada por clínica y eco' },
        { id: 'hos', col: 1, row: 1, k: 'mech', t: 'Hospitalizar + antibióticos', s: 'Siempre' },
        { id: 'q', col: 2, row: 1, k: 'q', t: '¿Riesgo quirúrgico?', s: 'Paciente muy frágil' },
        { id: 'cir', col: 3, row: 0, k: 'good', t: 'Colecistectomía precoz', s: 'Laparoscópica, en < 72 h' },
        { id: 'pct', col: 3, row: 2, k: 'refer', t: 'Colecistostomía percutánea', s: 'Transitoria' },
      ],
      edges: [
        { from: 'cis', to: 'hos' }, { from: 'hos', to: 'q' },
        { from: 'q', to: 'cir', label: 'habitual' }, { from: 'q', to: 'pct', label: 'muy alto' },
      ],
      steps: [
        { show: ['cis'], note: 'Cambia todo respecto del cólico',
          say: 'Con el diagnóstico hecho, el manejo cambia completamente respecto del cólico. Aquí ya no hay solo un cálculo molestando: hay una vesícula inflamada e infectada.' },
        { show: ['hos'], note: 'No se va a la casa',
          say: 'El paciente se hospitaliza y se inician antibióticos. Este no se va a la casa con analgesia, como el del cólico.' },
        { show: ['q'], note: 'La pregunta es cuándo operar',
          say: 'Y la pregunta siguiente no es si se opera, sino cuándo. Y aquí la respuesta es clara: no se deja para después, como en el cólico.' },
        { show: ['cir'], note: 'Primeras 72 horas',
          say: 'La respuesta es colecistectomía laparoscópica precoz, en las primeras setenta y dos horas. Fíjate bien: de las cuatro patologías biliares, la colecistitis es la única que se opera de urgencia.' },
        { show: ['pct'], note: 'Solo para el paciente que no resiste la cirugía',
          say: 'La excepción es el paciente de muy alto riesgo quirúrgico. En él se hace una colecistostomía percutánea transitoria, que drena la vesícula hasta que pueda operarse.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Coledocolitiasis',
      title: 'Eco, colangiorresonancia, CPRE',
      nodes: [
        { id: 'cdl', col: 0, row: 1, k: 'start', t: 'Dolor + ictericia', s: 'FA y GGT altas, sin fiebre' },
        { id: 'eco', col: 1, row: 1, k: 'mech', t: 'Ecografía', s: 'Colédoco > 6–7 mm = sospecha' },
        { id: 'crm', col: 2, row: 0, k: 'mech', t: 'Colangiorresonancia', s: 'Confirma el cálculo' },
        { id: 'cpre', col: 3, row: 1, k: 'good', t: 'CPRE', s: 'Extrae el cálculo' },
        { id: 'dir', col: 2, row: 2, k: 'trap', t: 'Directo a CPRE', s: 'Si hay colangitis o la eco ve el cálculo' },
        { id: 'cx', col: 4, row: 1, k: 'good', t: 'Colecistectomía', s: 'Electiva, después' },
      ],
      edges: [
        { from: 'cdl', to: 'eco' }, { from: 'eco', to: 'crm', label: 'no ve el cálculo' },
        { from: 'crm', to: 'cpre' }, { from: 'eco', to: 'dir', label: 'lo ve' }, { from: 'dir', to: 'cpre' },
        { from: 'cpre', to: 'cx' },
      ],
      steps: [
        { show: ['cdl'], note: 'Patrón colestásico',
          say: 'Tercer cuadro: la coledocolitiasis. Dolor con ictericia, un patrón colestásico con fosfatasas alcalinas y GGT altas, y sin fiebre mientras no haya infección. Es exactamente el segundo paso del algoritmo de ictericia que ya conoces.' },
        { show: ['eco'], note: 'Rara vez ve el cálculo en el colédoco',
          say: 'El primer examen es la ecografía. Un colédoco de más de seis a siete milímetros hace sospechar, pero la ecografía rara vez alcanza a ver el cálculo dentro del colédoco.' },
        { show: ['crm'], note: 'No invasiva',
          say: 'Por eso el paso siguiente es la colangiorresonancia, que confirma el cálculo sin invadir.' },
        { show: ['cpre'], note: 'Diagnostica y trata',
          photo: { src: 'biblioteca/01_gastroenterologia/gastro-17/03_coledocolitiasis-cpre__cto-digestivo_p246.jpg', label: 'Coledocolitiasis', at: 'En esta imagen', credit: 'Manual CTO Digestivo 14.ª ed., p. 246' },
          say: 'Y con el cálculo confirmado, se hace la colangiopancreatografía retrógrada endoscópica, la CPRE, que lo extrae. En esta imagen ves el cálculo dentro del colédoco. Es invasiva y puede causar pancreatitis, por eso no se usa para confirmar.' },
        { show: ['dir'], note: 'Las dos excepciones se preguntan',
          say: 'Hay dos situaciones en que se salta la colangiorresonancia y se va directo a CPRE: si hay colangitis, o si la ecografía ya vio el cálculo en el colédoco. En los dos casos no hay nada que confirmar, y esperar solo retrasa el tratamiento.' },
        { show: ['cx'], note: 'La vesícula sigue teniendo cálculos',
          say: 'Y no olvides el final: después de la CPRE, colecistectomía laparoscópica electiva, porque la vesícula sigue llena de cálculos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Colangitis aguda',
      title: 'Charcot y Reynolds',
      cards: [
        { title: 'Tríada de Charcot', tag: 'Colangitis', kind: 'criteria', items: [
          { t: 'Dolor + ictericia + fiebre', d: 'Bilis infectada y a presión',
            say: 'El cuarto cuadro es el más grave. La colangitis se reconoce por la tríada de Charcot: dolor, ictericia y fiebre. Es bilis infectada y a presión dentro de una vía biliar tapada: es la coledocolitiasis que se infectó.' },
        ] },
        { title: 'Péntada de Reynolds', tag: 'Forma grave', kind: 'alert', items: [
          { t: 'Charcot + hipotensión', d: 'Shock séptico de origen biliar',
            say: 'Si a la tríada se suma hipotensión y compromiso de conciencia, tienes la péntada de Reynolds: la forma grave, con el paciente en shock. Es una sepsis de origen biliar, y el reloj corre.' },
          { t: '+ compromiso de conciencia', d: 'Somnolencia, confusión',
            say: 'Ojo con el enunciado: somnolencia o confusión en un paciente con fiebre e ictericia es Reynolds, no una encefalopatía. Ese paciente necesita drenaje ya.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Colangitis aguda',
      title: 'Lo esencial es drenar',
      nodes: [
        { id: 'cht', col: 0, row: 1, k: 'start', t: 'Colangitis', s: 'Charcot o Reynolds' },
        { id: 'vol', col: 1, row: 0, k: 'mech', t: 'Reposición de volumen', s: 'Sostener la presión' },
        { id: 'atb', col: 1, row: 2, k: 'mech', t: 'Antibióticos amplio espectro', s: 'Ceftriaxona + metronidazol' },
        { id: 'cpre', col: 2, row: 1, k: 'alert', t: 'CPRE urgente', s: 'Drenaje biliar: lo esencial' },
        { id: 'cx', col: 3, row: 1, k: 'good', t: 'Colecistectomía', s: 'Después, electiva' },
      ],
      edges: [
        { from: 'cht', to: 'vol' }, { from: 'cht', to: 'atb' },
        { from: 'vol', to: 'cpre' }, { from: 'atb', to: 'cpre' }, { from: 'cpre', to: 'cx' },
      ],
      steps: [
        { show: ['cht', 'vol'], note: 'Primero, estabilizar',
          say: '¿Cómo se trata? Primero se estabiliza: reposición de volumen, porque muchos llegan hipotensos.' },
        { show: ['atb'], note: 'Amplio espectro',
          say: 'Junto con eso, antibióticos de amplio espectro, por ejemplo ceftriaxona más metronidazol.' },
        { show: ['cpre'], note: 'Drenar la vía biliar tapada',
          say: 'Pero lo esencial es el drenaje biliar urgente por CPRE. Es un absceso dentro de la vía biliar, y como todo absceso, hay que drenarlo. Esta es la conducta prioritaria que te van a preguntar.' },
        { show: ['cx'], note: 'La vesícula se saca cuando el paciente está estable',
          say: 'Y la colecistectomía se hace después, en forma electiva, con el paciente estable. Operar la vesícula de urgencia en una colangitis es una respuesta incorrecta clásica: el problema no está en la vesícula, sino en el colédoco.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'La diferencia que más se pregunta',
      title: '¿Qué es urgente y qué es electivo?',
      nodes: [
        { id: 'cis', col: 0, row: 0, k: 'risk', t: 'Colecistitis', s: 'Dolor + fiebre' },
        { id: 'cisx', col: 1, row: 0, k: 'alert', t: 'Cirugía urgente', s: 'Colecistectomía en < 72 h' },
        { id: 'cht', col: 0, row: 2, k: 'risk', t: 'Colangitis', s: 'Dolor + ictericia + fiebre' },
        { id: 'chtx', col: 1, row: 2, k: 'alert', t: 'CPRE urgente', s: 'Se drena, no se opera' },
        { id: 'resto', col: 2, row: 1, k: 'good', t: 'Todo lo demás: electivo', s: 'Cólico · post CPRE · crónicas' },
        { id: 'cro', col: 3, row: 1, k: 'trap', t: 'Colecistitis crónica', s: 'Porcelana o escleroatrófica: riesgo de cáncer' },
      ],
      edges: [
        { from: 'cis', to: 'cisx' }, { from: 'cht', to: 'chtx' },
        { from: 'cisx', to: 'resto', label: 'luego' }, { from: 'chtx', to: 'resto', label: 'luego' },
        { from: 'resto', to: 'cro' },
      ],
      steps: [
        { show: ['cis', 'cisx'], note: 'La única que se opera de urgencia',
          say: 'Juntemos todo en la diferencia que más se pregunta: qué es urgente y qué no. La colecistitis aguda se opera de urgencia, en menos de setenta y dos horas.' },
        { show: ['cht', 'chtx'], note: 'Urgente, pero con endoscopio',
          say: 'La colangitis también es urgente, pero no se opera: se drena por CPRE. Urgente no siempre significa pabellón.' },
        { show: ['resto'], note: 'Cólico, colelitiasis y post CPRE',
          say: 'Todo lo demás es electivo: la colelitiasis, el cólico biliar, y la colecistectomía que sigue a una CPRE. Incluso en la colangitis, la vesícula se saca después, cuando el paciente ya está estable.' },
        { show: ['cro'], note: 'Se operan por el riesgo de cáncer',
          say: 'Y las colecistitis crónicas, como la vesícula en porcelana o la escleroatrófica, también se operan en forma electiva, por su riesgo de cáncer. Suelen ser un hallazgo de imagen, y la trampa es dejarlas en observación porque el paciente no tiene síntomas.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Un cálculo, cuatro cuadros',
      images: [
        { src: 'animaciones/gastro-17/A1_calculo_real.mp4', label: 'Cuatro cuadros', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'La ubicación decide',
          say: 'Sigamos el cálculo. Si obstruye un rato el bacinete y vuelve, es un cólico biliar. Si se enclava en el cístico, la vesícula se inflama: colecistitis. Si baja al colédoco, la bilis se devuelve y aparece la ictericia; si además se infecta, colangitis. Y si se atasca en la ampolla, tapa el conducto pancreático: pancreatitis biliar.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos la regla de sumar síntomas en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Clínica, examen y cirugía',
      head: ['Cuadro', 'Dolor + …', 'Conducta'],
      rows: [
        { cells: ['Cólico biliar', 'Solo dolor', 'Analgesia; colecistectomía electiva'],
          say: 'Repasemos en una tabla, que es la misma regla de sumar síntomas con su conducta al lado. Cólico biliar, solo dolor: analgesia y colecistectomía electiva.' },
        { cells: ['Colecistitis aguda', 'Fiebre + Murphy', 'Antibióticos + colecistectomía < 72 h'],
          say: 'Colecistitis aguda, dolor con fiebre y Murphy: antibióticos y colecistectomía antes de setenta y dos horas.' },
        { cells: ['Coledocolitiasis', 'Ictericia', 'Eco → colangio-RM → CPRE → colecistectomía'],
          say: 'Coledocolitiasis, dolor con ictericia: ecografía, colangiorresonancia, CPRE, y luego colecistectomía electiva. Recuerda que la colangiorresonancia se salta si hay colangitis o si la ecografía ya vio el cálculo.' },
        { cells: ['Colangitis aguda', 'Ictericia + fiebre (Charcot)', 'Volumen + antibióticos + CPRE urgente'],
          say: 'Colangitis, dolor con ictericia y fiebre: volumen, antibióticos y CPRE urgente. Aquí lo urgente es drenar, no operar.' },
        { cells: ['Vesícula en porcelana o escleroatrófica', 'Hallazgo', 'Colecistectomía electiva'],
          say: 'Y la vesícula en porcelana o escleroatrófica, que suele ser un hallazgo: colecistectomía electiva por el riesgo de cáncer.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 48 años con 8 horas de dolor intenso y continuo en hipocondrio derecho, fiebre de 38,5 °C y vómitos. Murphy positivo. Leucocitos 15.000/mm³, PCR elevada, bilirrubina normal. Ecografía: colelitiasis, pared vesicular de 6 mm y líquido perivesicular.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Analgesia y colecistectomía electiva en 6 semanas' },
        { letter: 'B', text: 'Colangiorresonancia y luego CPRE' },
        { letter: 'C', text: 'Hospitalizar, antibióticos y colecistectomía laparoscópica precoz' },
        { letter: 'D', text: 'CPRE urgente para drenaje biliar' },
        { letter: 'E', text: 'Ácido ursodesoxicólico y control ecográfico' },
      ],
      correct: 'C',
      explanation: 'Dolor persistente + fiebre + Murphy + pared engrosada y líquido perivesicular: colecistitis aguda. La bilirrubina normal la separa de la coledocolitiasis y la colangitis. Es la única patología biliar que se opera de urgencia: colecistectomía laparoscópica en las primeras 72 horas.',
      say: {
        stem: 'Vamos al caso. Mujer de cuarenta y ocho años con ocho horas de dolor intenso y continuo en el hipocondrio derecho, fiebre de treinta y ocho y medio y vómitos. Murphy positivo, quince mil leucocitos, PCR elevada, y la bilirrubina normal. La ecografía muestra cálculos, una pared de seis milímetros y líquido perivesicular.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: analgesia y cirugía electiva en seis semanas, colangiorresonancia y CPRE, hospitalizar con antibióticos y colecistectomía precoz, CPRE urgente, o ácido ursodesoxicólico. Piénsalo.',
        answer: 'Es la C. Suma los síntomas: dolor de más de seis horas con fiebre y Murphy es colecistitis, y la ecografía lo confirma. La bilirrubina normal descarta el cálculo en el colédoco, así que la CPRE no tiene nada que hacer aquí. El distractor tentador es la cirugía electiva, pero la colecistitis es justamente la única que se opera de urgencia, en las primeras setenta y dos horas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 97',
      stem: 'Paciente de 52 años, con 12 horas de dolor epigástrico intenso irradiado a los flancos, vómitos y orinas oscuras, con fiebre hasta 39 °C. Al examen: ictericia de escleras, piel y mucosas, PA 90/60 mmHg, FC 110/min. Ecografía: colédoco de 11 mm de dilatación y litiasis múltiple en la vesícula.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar colecistectomía laparoscópica' },
        { letter: 'B', text: 'Realizar colecistectomía abierta más coledocostomía' },
        { letter: 'C', text: 'Solicitar colangiorresonancia' },
        { letter: 'D', text: 'Solicitar TAC de abdomen y pelvis' },
        { letter: 'E', text: 'Realizar drenaje endoscópico de la vía biliar' },
      ],
      correct: 'E',
      explanation: 'Dolor, ictericia y fiebre con compromiso hemodinámico: colangitis aguda grave, con un colédoco ya dilatado en la ecografía. La conducta prioritaria es el drenaje endoscópico de la vía biliar por CPRE, junto con volumen y antibióticos. La colecistectomía se hace después, cuando el paciente esté estable.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de diciembre de dos mil diecinueve. Paciente de cincuenta y dos años, con doce horas de dolor epigástrico irradiado a los flancos, vómitos y orinas oscuras, con fiebre hasta treinta y nueve. Está ictérico, con una presión de noventa sobre sesenta y una frecuencia de ciento diez. La ecografía muestra el colédoco dilatado a once milímetros, con cálculos múltiples en la vesícula.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: colecistectomía laparoscópica, colecistectomía abierta más coledocostomía, colangiorresonancia, TAC de abdomen y pelvis, o drenaje endoscópico de la vía biliar. Piénsalo.',
        answer: 'Es la E, drenaje endoscópico. Dolor, ictericia y fiebre con hipotensión es una colangitis grave, y con el colédoco ya dilatado en la ecografía, no hay que esperar ningún estudio adicional. Lo prioritario es drenar por CPRE, junto con volumen y antibióticos. La colecistectomía, sea laparoscópica o abierta, se difiere hasta que el paciente esté estable.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 146',
      stem: 'Paciente de 55 años con 3 días de dolor abdominal, mayor en epigastrio, con vómitos alimentarios. Ecografía: vía biliar de 8 mm, con múltiples cálculos pequeños en la vesícula. Fosfatasas alcalinas 520 U/L, GGT 612 U/L, GOT 102 U/L, GPT 87 U/L, bilirrubina total 6,0 mg/dL (directa 4,6).',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar colangiopancreatografía retrógrada endoscópica' },
        { letter: 'B', text: 'Indicar colangiorresonancia' },
        { letter: 'C', text: 'Solicitar TAC de abdomen y pelvis' },
        { letter: 'D', text: 'Resolver quirúrgicamente' },
        { letter: 'E', text: 'Indicar tratamiento analgésico y antibiótico endovenoso' },
      ],
      correct: 'B',
      explanation: 'Dolor con patrón colestásico y colédoco dilatado, sin fiebre ni compromiso hemodinámico: coledocolitiasis, sin criterios de colangitis. Como la ecografía no vio el cálculo directamente, el paso siguiente es confirmar con colangiorresonancia, y recién si esta lo ve, se hace la CPRE.',
      say: {
        stem: 'Esta es del EUNACOM de diciembre de dos mil dieciocho. Paciente de cincuenta y cinco años con tres días de dolor abdominal, más marcado en el epigastrio, con vómitos. La ecografía muestra la vía biliar de ocho milímetros y cálculos pequeños en la vesícula, con fosfatasas alcalinas y GGT muy elevadas, y bilirrubina de seis.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: CPRE, colangiorresonancia, TAC de abdomen y pelvis, resolver quirúrgicamente, o analgesia y antibióticos. Piénsalo.',
        answer: 'Es la B, colangiorresonancia. Es un patrón colestásico sin fiebre: coledocolitiasis, no colangitis. La ecografía vio el colédoco dilatado, pero no el cálculo, así que el paso siguiente es confirmar con colangiorresonancia. Ir directo a la CPRE sería saltarse un paso que aquí no está indicado, porque no hay colangitis ni el cálculo visto en la ecografía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Mujer de 40 años, sin síntomas, a quien en una ecografía de rutina se le detecta colelitiasis (múltiples cálculos, vesícula de pared normal).',
      question: '¿Cuál es la conducta?',
      options: [
        { letter: 'A', text: 'Observación; operar solo si aparecen síntomas' },
        { letter: 'B', text: 'Ácido ursodesoxicólico para disolver los cálculos' },
        { letter: 'C', text: 'Colecistectomía laparoscópica electiva' },
        { letter: 'D', text: 'Dieta baja en grasas y control ecográfico anual' },
        { letter: 'E', text: 'Colecistectomía solo si los cálculos superan los 2 cm' },
      ],
      correct: 'C',
      explanation: 'En Chile, con la incidencia de cáncer de vesícula más alta del mundo, toda colelitiasis, aun asintomática, se trata con colecistectomía laparoscópica electiva. El GES la garantiza entre los 35 y 49 años. La disolución y la observación no protegen del cáncer.',
      say: {
        stem: 'Una más del banco. Mujer de cuarenta años, sin síntomas, a la que en una ecografía de rutina le encuentran múltiples cálculos en una vesícula de pared normal.',
        question: '¿Cuál es la conducta?',
        options: 'Las opciones: observar y operar si aparecen síntomas, ácido ursodesoxicólico, colecistectomía laparoscópica electiva, dieta y control anual, u operar solo si los cálculos superan los dos centímetros. Piénsalo.',
        answer: 'Es la C. En Chile toda colelitiasis se opera, aunque no dé síntomas, por el cáncer de vesícula. Fíjate que el enunciado te quita todos los síntomas a propósito, para ver si aplicas la regla igual. Y esta paciente de cuarenta años está justo en el rango GES, de treinta y cinco a cuarenta y nueve. La A es la trampa, porque es lo que dicen muchos textos extranjeros; pero observar, disolver o hacer dieta no la protege del cáncer.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.06.4.004 · Colangiografía endoscópica",
      "stem": "Mujer de 50 años con dolor en hipocondrio derecho e ictericia de 3 días, sin fiebre. Bilirrubina total 5 mg/dL, de predominio directo. La ecografía muestra colelitiasis y un colédoco de 12 mm con un cálculo de 8 mm en su porción distal.",
      "question": "¿Cuál es la conducta más adecuada respecto de la vía biliar?",
      "options": [
        {
          "letter": "A",
          "text": "Colangiorresonancia para confirmar el cálculo"
        },
        {
          "letter": "B",
          "text": "Ácido ursodesoxicólico"
        },
        {
          "letter": "C",
          "text": "Colecistectomía sola, sin tratar la vía biliar"
        },
        {
          "letter": "D",
          "text": "CPRE con papilotomía y extracción del cálculo, seguida de colecistectomía"
        },
        {
          "letter": "E",
          "text": "TAC de abdomen con contraste"
        }
      ],
      "correct": "D",
      "explanation": "Si la ecografía ya demuestra el cálculo en el colédoco, la sospecha es alta y no se necesita colangiorresonancia: la CPRE es diagnóstica y terapéutica, con papilotomía y extracción. Luego se realiza la colecistectomía, idealmente en el mismo ingreso. La colangiorresonancia se reserva para la sospecha intermedia, sin cálculo visible.",
      "say": {
        "stem": "Vamos con una pregunta de práctica. Mujer de cincuenta años con tres días de dolor en el hipocondrio derecho e ictericia, sin fiebre. La ecografía muestra cálculos en la vesícula y un colédoco dilatado a doce milímetros, con un cálculo visible en su parte distal.",
        "question": "¿Cuál es la conducta más adecuada respecto de la vía biliar?",
        "options": "Las opciones: colangiorresonancia, ácido ursodesoxicólico, colecistectomía sola, CPRE con papilotomía y luego colecistectomía o tomografía. Piénsalo.",
        "answer": "Es la D. Cuando la ecografía ya muestra el cálculo en el colédoco, se va directo a la CPRE, que lo extrae en el mismo procedimiento, y después se saca la vesícula. La colangiorresonancia es la trampa: sirve cuando la sospecha es intermedia y el cálculo no se ve, no cuando ya está demostrado."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.2.012 · Colangitis",
      "stem": "Mujer de 70 años con colelitiasis conocida consulta por dolor en el hipocondrio derecho, fiebre de 39 °C con calofríos e ictericia. Se inician antibióticos endovenosos y fluidos. A las 6 horas está confusa, con PA 80/50 mmHg pese a la reposición de volumen. La ecografía muestra colédoco de 12 mm.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Drenaje urgente de la vía biliar, idealmente por CPRE"
        },
        {
          "letter": "B",
          "text": "Colecistectomía laparoscópica de urgencia"
        },
        {
          "letter": "C",
          "text": "Mantener antibióticos y observar 48 horas"
        },
        {
          "letter": "D",
          "text": "Colangiorresonancia electiva"
        },
        {
          "letter": "E",
          "text": "Cambiar el antibiótico y repetir la ecografía al día siguiente"
        }
      ],
      "correct": "A",
      "explanation": "La pentada de Reynolds (tríada de Charcot más compromiso de conciencia e hipotensión) define una colangitis grave. Además del soporte y los antibióticos, requiere drenaje biliar urgente, de preferencia endoscópico por CPRE (o percutáneo si no está disponible). La colecistectomía no descomprime el colédoco y se difiere hasta resolver el cuadro.",
      "say": {
        "stem": "Mujer de setenta años con colelitiasis, que consulta por dolor en el hipocondrio derecho, fiebre alta con calofríos e ictericia. Se inician antibióticos y fluidos, pero seis horas después está confusa e hipotensa pese al volumen. La ecografía muestra un colédoco de doce milímetros.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: drenaje urgente de la vía biliar por CPRE, colecistectomía de urgencia, mantener antibióticos y observar, colangiorresonancia electiva o cambiar el antibiótico y repetir la ecografía. Piénsalo.",
        "answer": "Es la A. Charcot más confusión e hipotensión es la pentada de Reynolds, una colangitis grave que necesita descomprimir la vía biliar ya, idealmente por CPRE. La colecistectomía tienta porque la vesícula tiene los cálculos, pero no drena el colédoco obstruido."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.06.4.015 · Colangiografía por resonancia magnética",
      "stem": "Mujer de 48 años, colecistectomizada hace 2 años, consulta por dolor intermitente en hipocondrio derecho. Afebril, sin ictericia. Exámenes: bilirrubina total 1,8 mg/dL, FA 280 UI/L, GGT 310 UI/L. La ecografía abdominal muestra un colédoco de 8 mm sin cálculos visibles.",
      "question": "¿Cuál es el examen más adecuado para continuar el estudio?",
      "options": [
        {
          "letter": "A",
          "text": "Colangiopancreatografía retrógrada endoscópica (CPRE)"
        },
        {
          "letter": "B",
          "text": "Repetir ecografía en 6 meses"
        },
        {
          "letter": "C",
          "text": "Colangiorresonancia"
        },
        {
          "letter": "D",
          "text": "TAC de abdomen sin contraste"
        },
        {
          "letter": "E",
          "text": "Exploración quirúrgica de la vía biliar"
        }
      ],
      "correct": "C",
      "explanation": "Colédoco dilatado y colestasia, sin cálculo visible ni colangitis, configuran un riesgo intermedio de coledocolitiasis: corresponde colangiorresonancia, no invasiva y muy sensible. La CPRE se reserva para riesgo alto o cálculo confirmado, por su riesgo de pancreatitis. La TAC sin contraste es poco sensible para cálculos coledocianos.",
      "say": {
        "stem": "Mujer colecistectomizada con dolor biliar, colestasia leve y colédoco de ocho milímetros sin cálculos en la ecografía.",
        "question": "¿Qué examen sigue?",
        "options": "Las opciones: CPRE, ecografía en seis meses, colangiorresonancia, TAC sin contraste o exploración quirúrgica. Piénsalo.",
        "answer": "Es la C. Colangiorresonancia, porque el riesgo de coledocolitiasis es intermedio. La CPRE tienta porque además trata, pero tiene riesgo de pancreatitis y se reserva para riesgo alto."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Sumar síntomas', tag: 'Dolor + …', kind: 'key', items: [
          { t: 'Solo dolor = cólico', d: '+ fiebre = colecistitis',
            say: 'Cerremos con las reglas de oro. La primera es la regla que ordena toda la clase: sumar síntomas. Solo dolor es cólico biliar; dolor con fiebre, colecistitis.' },
          { t: '+ ictericia = coledocolitiasis', d: '+ fiebre + ictericia = colangitis',
            say: 'Dolor con ictericia, coledocolitiasis; y dolor, ictericia y fiebre, colangitis.' },
        ] },
        { title: 'Urgencias', tag: 'Qué y cómo', kind: 'alert', items: [
          { t: 'Colecistitis: cirugía < 72 h', d: 'La única que se opera de urgencia',
            say: 'La colecistitis es la única que se opera de urgencia, en menos de setenta y dos horas.' },
          { t: 'Colangitis: CPRE urgente', d: 'Volumen + antibióticos + drenaje',
            say: 'La colangitis se drena de urgencia por CPRE, con volumen y antibióticos, y la vesícula se opera después. Y en la coledocolitiasis, el orden es ecografía, colangiorresonancia y CPRE, salvo que haya colangitis o que la ecografía ya vea el cálculo.' },
        ] },
        { title: 'Electivo', tag: 'En Chile', kind: 'pharma', items: [
          { t: 'Toda colelitiasis se opera', d: 'GES entre 35 y 49 años',
            say: 'Y toda colelitiasis se opera, aunque sea asintomática, con GES entre los treinta y cinco y los cuarenta y nueve años. Si te llevas una sola idea de hoy: suma los síntomas, y sabrás cuál se opera, cuál se drena y cuál espera. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Patología biliar: qué acompaña al dolor',
    root: N('start', 'Dolor en hipocondrio derecho', 'Paciente con colelitiasis',
      'Paciente con cálculos en la vesícula y dolor en el hipocondrio derecho. No memorices cuatro cuadros: lo que acompaña al dolor define cuál es, y el cuadro define la conducta.',
      ['', N('q', '¿Qué acompaña al dolor?', 'Fiebre · ictericia · ambas',
        'La pregunta es una sola: ¿el dolor viene solo, con fiebre, con ictericia, o con ambas? La fiebre habla de infección; la ictericia, de un colédoco tapado.',
        ['Solo dolor', N('ok', 'Cólico biliar', 'Analgesia + colecistectomía electiva',
          'Solo dolor, que cede en treinta a sesenta minutos: cólico biliar. Analgesia, y colecistectomía laparoscópica electiva, porque toda colelitiasis se opera.')],
        ['Fiebre', N('alert', 'Colecistitis aguda', 'Antibióticos + colecistectomía < 72 h',
          'Dolor persistente con fiebre y Murphy positivo: colecistitis aguda. Hospitalizar, antibióticos y colecistectomía precoz, antes de setenta y dos horas.')],
        ['Ictericia', N('q', '¿La eco ve el cálculo?', 'Coledocolitiasis',
          'Dolor con ictericia, sin fiebre: coledocolitiasis. ¿La ecografía alcanzó a ver el cálculo en el colédoco?',
          ['NO', N('do', 'Colangiorresonancia → CPRE', 'Luego colecistectomía electiva',
            'Si no lo ve, se confirma con colangiorresonancia, y luego la CPRE lo extrae. Después, colecistectomía electiva.')],
          ['SÍ', N('do', 'CPRE directa', 'Luego colecistectomía electiva',
            'Si la ecografía ya lo vio, se va directo a CPRE, y después colecistectomía electiva.')])],
        ['Ictericia + fiebre', N('alert', 'Colangitis: CPRE urgente', 'Volumen + antibióticos',
          'Dolor, ictericia y fiebre, la tríada de Charcot: colangitis. Volumen, antibióticos y drenaje biliar urgente por CPRE. Si además hay hipotensión y compromiso de conciencia, es la péntada de Reynolds, y el drenaje no puede esperar.')])]),
  },
};
