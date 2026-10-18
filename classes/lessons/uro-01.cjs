// Clase 13.1 (Urología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_urologia.cjs (uro-01). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// El código de la clase no tiene preguntas reales propias; se usan las que salen de la búsqueda por tema (cólico renal, litiasis, pielotac, doble J, estruvita).
// Preguntas reales que ya usa otra clase y que no se repiten: Julio 2025 P158 (monorreno, nefro-01) y Agosto 2021 P100 (pionefrosis, nefro-21).
// El monorreno se enseña igual como bandera roja, con el texto del libro.
// Se descartó Diciembre 2022 P11 (cálculos coraliformes): su clave marca Campylobacter jejuni y el libro y el resto del banco dicen Proteus.
// Las preguntas del libro (questions) no se usan: el banco real cubre los puntos centrales.
// Imágenes: Bailey & Love 27.ª ed., Fig. 75.20a, 75.21a y 76.15.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'uro-01',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cólico renal y litiasis: analgesia, pielotac, conducta según tamaño y banderas rojas',
      say: 'Bienvenido. Hoy vemos el cólico renal y la litiasis urinaria, un tema que cae en casi todos los exámenes. Se resume en cuatro decisiones: qué analgésico usar, qué examen pedir, qué hacer según el tamaño del cálculo y cuándo el cuadro es una urgencia que no puede esperar. Vamos con el mecanismo, porque con él todo lo demás se entiende.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Por qué duele el cólico renal',
      nodes: [
        { id: 'c', col: 0, row: 1, k: 'cause', t: 'Cálculo enclavado en el uréter', s: 'Pieloureteral, cruce ilíaco, vesical' },
        { id: 'o', col: 1, row: 1, k: 'mech', t: 'Obstrucción aguda', s: 'La orina no baja' },
        { id: 'p', col: 2, row: 0, k: 'mech', t: 'Prostaglandinas', s: 'Más flujo, más presión' },
        { id: 'd', col: 3, row: 1, k: 'effect', t: 'Dolor cólico', s: 'Lumbar, irradia a genitales' },
        { id: 'n', col: 3, row: 2, k: 'effect', t: 'Náuseas e inquietud', s: 'Sin postura de alivio' },
        { id: 'a', col: 4, row: 0, k: 'good', t: 'AINE', s: 'Frenan las prostaglandinas' },
      ],
      edges: [
        { from: 'c', to: 'o' },
        { from: 'o', to: 'p', label: 'sube la presión' },
        { from: 'p', to: 'd' },
        { from: 'o', to: 'n' },
        { from: 'a', to: 'p', label: 'las bloquean' },
      ],
      steps: [
        { show: ['c', 'o'], note: 'Un cálculo tapa el uréter',
          say: 'La litiasis es una enfermedad crónica y recidivante: la orina se sobresatura y los cristales precipitan. Cuando un cálculo baja y se enclava en uno de los estrechamientos del uréter, que son la unión pieloureteral, el cruce con los vasos ilíacos y la unión con la vejiga, la orina deja de pasar.' },
        { show: ['p', 'd'], note: 'La presión y las prostaglandinas duelen',
          say: 'Y aquí está lo que se pregunta. El dolor no viene de que el cálculo raspe el uréter. Viene de la distensión brusca de la pelvis renal y de la cápsula. Esa presión estimula prostaglandinas que aumentan el flujo del riñón y provocan espasmo. De ahí el dolor paroxístico que sigue el trayecto hacia los genitales.' },
        { show: ['n'], note: 'Náuseas, vómitos e inquietud',
          say: 'Acompañan náuseas y vómitos, y una gran inquietud. El paciente se revuelve en la camilla sin encontrar posición de alivio. Es lo contrario de la peritonitis, donde se queda quieto.' },
        { show: ['a'], note: 'Por eso los AINE funcionan',
          say: 'Y de este mecanismo sale el tratamiento. Si el problema son las prostaglandinas, el fármaco ideal es el que las frena: el antiinflamatorio no esteroidal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Cómo se presenta el cólico renal',
      cards: [
        { title: 'Lo típico', tag: 'Diagnóstico clínico', kind: 'key', items: [
          { t: 'Dolor lumbar súbito e intenso', d: 'Paroxístico, irradiado a flanco y genitales',
            say: 'Dolor lumbar brusco, muy intenso, que se irradia por el flanco hacia la ingle y el testículo o el labio mayor. El diagnóstico del síndrome es esencialmente clínico.' },
          { t: 'Inquietud y vómitos', d: 'Sin posición antiálgica',
            say: 'Náuseas, vómitos y una inquietud motora llamativa. El paciente no encuentra postura que lo alivie.' },
          { t: 'Microhematuria', d: 'Puñopercusión positiva',
            say: 'El sedimento de orina muestra microhematuria, y la puñopercusión lumbar del lado afectado es muy dolorosa. El abdomen es blando, sin signos de irritación peritoneal.' },
        ] },
        { title: 'Qué hay que descartar', tag: 'Diferencial', kind: 'alert', items: [
          { t: 'Aneurisma de aorta roto', d: 'Sobre todo en adultos mayores',
            say: 'En un adulto mayor con factores de riesgo cardiovascular, un supuesto cólico puede ser un aneurisma de aorta abdominal roto. Por eso la imagen importa.' },
          { t: 'Apendicitis y diverticulitis', d: 'También las ve el TAC',
            say: 'Y la apendicitis o la diverticulitis, que el TAC también permite diferenciar.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Pielotac: el examen de elección',
      cards: [
        { title: 'Pielotac', tag: 'Gold standard', kind: 'key', items: [
          { t: 'TAC sin contraste', d: 'Sensibilidad y especificidad sobre 98%',
            say: 'El examen de elección es el pielotac, que es un TAC de abdomen y pelvis sin contraste. Su sensibilidad y su especificidad superan el noventa y ocho por ciento. Mira este TAC sin contraste: en cada riñón hay un punto blanco muy brillante, un cálculo, nítido y medible.',
            photo: { src: 'biblioteca/19_urologia/uro-01/02_tac-sin-contraste-calculos-renales__bailey-love_p1410.jpg', label: 'TAC: cálculos bilaterales', at: 'Mira este TAC', credit: 'Bailey & Love 27.ª ed., Fig. 75.21a' } },
          { t: 'Ve cualquier cálculo', d: 'Incluso los de ácido úrico',
            say: 'Detecta cálculos de cualquier composición, incluidos los de ácido úrico, que no se ven en una radiografía simple. Y mide el tamaño y muestra la hidronefrosis, que es lo que decide la conducta.' },
        ] },
        { title: 'Otros exámenes', tag: 'Trampas', kind: 'alert', items: [
          { t: 'Ecografía: embarazo y niños', d: 'O si no hay tomógrafo',
            say: 'La ecografía renal queda reservada para embarazadas, niños o lugares sin tomógrafo, porque ve peor los cálculos del uréter. Pero muestra muy bien la hidronefrosis: en esta ecografía la pelvis, la zona negra del centro, está dilatada, y los cálices también.',
            photo: { src: 'biblioteca/19_urologia/uro-01/03_ecografia-hidronefrosis__bailey-love_p1433.jpg', label: 'Ecografía: hidronefrosis', at: 'en esta ecografía', credit: 'Bailey & Love 27.ª ed., Fig. 76.15' } },
          { t: 'Urotac y urografía: no', d: 'El urotac es para estudiar hematuria',
            say: 'No confundas pielotac con urotac. El urotac, con contraste, se usa para estudiar la hematuria cuando se sospecha un tumor. Y la urografía de eliminación ya no es el examen de elección.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Radiografía, urografía y calciuria',
      cards: [
        { title: 'Radiografía simple', tag: 'Seguimiento', kind: 'key', items: [
          { t: 'Solo ve los radiopacos', d: 'Calcio y estruvita sí; ácido úrico no',
            say: 'La radiografía simple de abdomen muestra los cálculos radiopacos, los de oxalato y fosfato de calcio y los de estruvita. Pero no los de ácido úrico puro, que son radiolúcidos, ni los menores de dos o tres milímetros. Mira esta radiografía: la pequeña mancha blanca sobre el área renal izquierda es el cálculo, y cuesta encontrarla.',
            photo: { src: 'biblioteca/19_urologia/uro-01/01_rx-simple-calculo-renal__bailey-love_p1409.jpg', label: 'Cálculo en Rx simple', at: 'Mira esta radiografía', credit: 'Bailey & Love 27.ª ed., Fig. 75.20a' } },
          { t: 'Sensibilidad de 50 a 60 %', d: 'No reemplaza al TAC',
            say: 'Su sensibilidad ronda el cincuenta o sesenta por ciento, así que no reemplaza al TAC. La usas para seguir un cálculo radiopaco que ya conoces y para decidir si la litotripsia extracorpórea lo podrá localizar. Ojo con los flebolitos pelvianos, redondos y de centro claro: no son cálculos.' },
        ] },
        { title: 'Urografía y calciuria', tag: 'Estudio', kind: 'alert', items: [
          { t: 'Urografía: casi en desuso', d: 'La reemplaza el uro-TAC',
            say: 'La urografía de eliminación, con contraste yodado, muestra el retraso de la excreción del lado obstruido y la columna de contraste que se detiene sobre el cálculo. Hoy la reemplaza el uro-TAC; tú la lees en el informe. Se evita con alergia al yodo, insuficiencia renal o embarazo.' },
          { t: 'Calciuria de 24 h, semanas después', d: 'Hipercalciuria: más de 300 mg en el varón',
            say: 'La calciuria de veinticuatro horas se pide de cuatro a seis semanas después del episodio, con dieta habitual y orina estéril. Hay hipercalciuria sobre doscientos cincuenta miligramos en la mujer o trescientos en el varón. Y en la hipercalciuria idiopática no se restringe el calcio: se indica dieta normocálcica, baja en sal y en proteína animal, más tiazidas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Analgesia',
      title: 'AINE primero, opioide de rescate',
      cards: [
        { title: 'Primera línea', tag: 'AINE endovenoso', kind: 'pharma', items: [
          { t: 'Ketorolaco 30 mg EV', d: 'O ketoprofeno 100 mg EV',
            say: 'La primera línea son los antiinflamatorios no esteroidales por vía endovenosa: ketorolaco, treinta miligramos, o ketoprofeno, cien miligramos. Son superiores a los opioides porque actúan sobre el mecanismo: bajan las prostaglandinas, la presión y el espasmo.' },
          { t: 'No esperes al TAC', d: 'Se alivia el dolor primero',
            say: 'Y no se difiere la analgesia a la espera de las imágenes. Primero se trata el dolor, y después se pide el examen.' },
        ] },
        { title: 'Segunda línea', tag: 'Rescate', kind: 'alert', items: [
          { t: 'Tramadol o morfina', d: 'Dolor refractario o AINE contraindicado',
            say: 'Los opioides, tramadol o morfina, son de rescate: dolor que no cede, insuficiencia renal aguda previa o contraindicación de los antiinflamatorios. Empeoran las náuseas y pueden producir íleo.' },
          { t: 'Sin diuréticos ni sueros rápidos', d: 'Suben la presión en la vía obstruida',
            say: 'Y no se fuerzan diuréticos ni una sobrehidratación rápida en la fase aguda. Más orina contra una vía tapada solo sube la presión y aumenta el dolor.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Conducta',
      title: 'Qué hacer según el tamaño',
      nodes: [
        { id: 's', col: 0, row: 1, k: 'start', t: 'Dolor controlado, sin urgencia', s: 'Pielotac con tamaño y sitio' },
        { id: 'a', col: 1, row: 0, k: 'good', t: 'Menor de 5 mm', s: 'Sale solo en 80 a 90%' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: '5 a 10 mm', s: 'Terapia médica expulsiva' },
        { id: 'c', col: 1, row: 2, k: 'refer', t: 'Mayor de 10 mm', s: 'Rara vez sale solo' },
        { id: 'e', col: 2, row: 0, k: 'good', t: 'Observar y filtrar la orina', s: 'AINE oral y control en 2 a 4 semanas' },
        { id: 'f', col: 2, row: 1, k: 'mech', t: 'Tamsulosina 0,4 mg al día', s: '28 días y control' },
        { id: 'l', col: 3, row: 2, k: 'refer', t: 'LEOC', s: 'Renal o uréter alto' },
        { id: 'u', col: 3, row: 3, k: 'refer', t: 'Ureteroscopía', s: 'Uréter medio y distal' },
        { id: 'n', col: 4, row: 2, k: 'trap', t: 'Nefrolitotomía percutánea', s: 'Coraliforme o más de 20 mm' },
      ],
      edges: [
        { from: 's', to: 'a' },
        { from: 's', to: 'b' },
        { from: 's', to: 'c' },
        { from: 'a', to: 'e' },
        { from: 'b', to: 'f' },
        { from: 'c', to: 'l', label: 'alto' },
        { from: 'c', to: 'u', label: 'distal' },
        { from: 'l', to: 'n', label: 'muy grande' },
      ],
      steps: [
        { show: ['s'], note: 'Primero estabilizar y medir',
          say: 'Una vez controlado el dolor, y si no hay señales de urgencia, la conducta depende del diámetro mayor del cálculo, que mide el pielotac.' },
        { show: ['a', 'e'], note: 'Menor de 5 mm: observar',
          say: 'Si mide menos de cinco milímetros, la probabilidad de que salga sola es de ochenta a noventa por ciento en dos a cuatro semanas. Se maneja en forma ambulatoria con analgésicos orales, hidratación normal y un colador de tela para recuperar el cálculo y estudiarlo.' },
        { show: ['b', 'f'], note: '5 a 10 mm: tamsulosina',
          say: 'Entre cinco y diez milímetros se indica terapia médica expulsiva con tamsulosina, cero coma cuatro miligramos al día por veintiocho días. Relaja el uréter distal, aumenta la expulsión y acorta el dolor. Si a las cuatro semanas sigue ahí, se deriva.' },
        { show: ['c', 'l', 'u'], note: 'Más de 10 mm: urología',
          say: 'Sobre diez milímetros es poco probable que salga. Si está en el riñón o en el uréter alto, se usa litotripsia extracorpórea por ondas de choque, que es la LEOC. Si está en el uréter distal, ureteroscopía con láser. Y fíjate en la ureteroscopía para los cálculos muy duros.' },
        { show: ['n'], note: 'Coraliformes: vía percutánea',
          say: 'Para los cálculos coraliformes o de más de veinte milímetros se usa la nefrolitotomía percutánea, que retira toda la masa a través de un trayecto hecho en el riñón.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Urgencia',
      title: 'Banderas rojas del cólico renal',
      cards: [
        { title: 'Descomprimir de urgencia', tag: 'No esperar', kind: 'alert', items: [
          { t: 'Cólico con fiebre o sepsis', d: 'Pionefrosis: infección en vía obstruida',
            say: 'La primera bandera roja es el cólico con fiebre. Es una pionefrosis, una infección sobre una vía obstruida, y puede terminar en shock séptico. Se hospitaliza, se toman hemocultivos, se da ceftriaxona endovenosa y se descomprime la vía.' },
          { t: 'Riñón único', d: 'Riesgo de perder la función renal',
            say: 'La segunda es la obstrucción en un monorreno, anatómico o funcional. Ahí no hay otro riñón que compense, y se descomprime de inmediato.' },
          { t: 'Anuria o dolor refractario', d: 'Falla renal postrenal',
            say: 'La tercera es la anuria o la oliguria extrema, que es una falla renal postrenal. Se deriva la orina antes de pensar en diálisis. Y también el dolor o los vómitos que no ceden.' },
        ] },
        { title: 'Cómo se descomprime', tag: 'Procedimiento', kind: 'key', items: [
          { t: 'Catéter doble J', d: 'Se pasa por vía retrógrada',
            say: 'La forma de descomprimir es el catéter doble J, que se instala desde la vejiga hacia el riñón.' },
          { t: 'Nefrostomía percutánea', d: 'Si no se puede pasar el doble J',
            say: 'Si no es posible instalarlo, se hace una nefrostomía percutánea, un tubo puesto directo en el riñón. Y el cálculo se trata después, ya sin infección.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Tipos de cálculos',
      title: 'Qué cálculo es y qué hacer',
      head: ['Cálculo', 'Frecuencia y Rx', 'Dato clave'],
      rows: [
        { cells: ['Oxalato de calcio', '75 a 80% · radiopaco', 'Agua, poca sal, tiazida'],
          say: 'El más frecuente es el de oxalato de calcio, de setenta y cinco a ochenta por ciento, radiopaco. Se previene con mucha agua, poca sal y poca proteína animal. Y con hidroclorotiazida si hay hipercalciuria.' },
        { cells: ['Fosfato de calcio', '5 a 10% · radiopaco', 'Orina alcalina: PTH y acidosis'],
          say: 'El de fosfato de calcio aparece con orina alcalina. Obliga a descartar hiperparatiroidismo primario y acidosis tubular distal.' },
        { cells: ['Ácido úrico', '5 a 10% · radiolúcido', 'Orina ácida: citrato y alopurinol'],
          say: 'El de ácido úrico es radiolúcido en la radiografía, pero se ve en el TAC. Crece en orina ácida, y se alcaliniza con citrato de potasio, con alopurinol de apoyo.' },
        { cells: ['Estruvita', '5 a 8% · coraliforme', 'Proteus y ureasa; orina pH alto'],
          say: 'El de estruvita, o fosfato amónico magnésico, es el coraliforme. Lo producen bacterias con ureasa, sobre todo Proteus, y alcaliniza mucho la orina. Se trata con cirugía percutánea y antibióticos.' },
        { cells: ['Cistina', '1 a 2% · poco radiopaco', 'Cistinuria congénita'],
          say: 'El de cistina es raro, de causa congénita, con aspecto de vidrio esmerilado. Se previene con hidratación masiva y alcalinización.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Prevención',
      title: 'Evitar que vuelva',
      cards: [
        { title: 'Para todos', tag: 'Lo más importante', kind: 'key', items: [
          { t: 'Agua: más de 2,5 litros', d: 'Orina sobre 2 litros diarios',
            say: 'La medida más efectiva y más costo efectiva para todos es tomar más de dos litros y medio a tres litros de agua al día, para lograr más de dos litros de orina diaria.' },
          { t: 'Sirve aunque no haya causa', d: 'Aun con estudio metabólico normal',
            say: 'Y sirve siempre, incluso cuando el estudio metabólico sale normal. Si te preguntan qué indicar tras un primer cólico, la respuesta es subir el agua.' },
        ] },
        { title: 'Según la causa', tag: 'Estudio metabólico', kind: 'pharma', items: [
          { t: 'Hipercalciuria: hidroclorotiazida', d: 'Estimula la reabsorción de calcio',
            say: 'Si hay hipercalciuria idiopática, la hidroclorotiazida. Reduce el calcio en la orina. Ojo, que la furosemida hace lo contrario.' },
          { t: 'Hipocitraturia o úrico: citrato de potasio', d: 'Quelantes de oxalato si es entérica',
            say: 'En hipocitraturia o en cálculos de ácido úrico, citrato de potasio. En hiperoxaluria entérica, quelantes de oxalato.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'El cálculo y sus tres estrechamientos',
      images: [
        { src: 'animaciones/uro-01/A1_calculo_tres_estrechamientos.mp4', label: 'Un cálculo baja por el uréter', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Un cálculo baja por el uréter',
          say: 'Un cálculo del riñón baja por el uréter y se detiene en uno de tres estrechamientos: la unión pieloureteral, el cruce con los vasos ilíacos y la unión con la vejiga. Mira el riñón: se distiende, y esa presión, con las prostaglandinas, es el dolor. Después el tamaño decide: bajo cinco milímetros sale solo, de cinco a diez tamsulosina, y sobre diez, urología.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del dolor lumbar a la urgencia, la analgesia y el tamaño del cálculo.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Cólico renal: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Cólico renal agudo', 'AINE endovenoso', 'Empezar con opioide'],
          say: 'Cólico renal: ketorolaco o ketoprofeno endovenoso. El error es partir con un opioide.' },
        { cells: ['Cólico, examen de elección', 'Pielotac sin contraste', 'Urotac o urografía'],
          say: 'Cólico renal, examen de elección: pielotac. El urotac es para hematuria y sospecha de tumor.' },
        { cells: ['Cálculo de 5 a 10 mm', 'Tamsulosina', 'Litotripsia de entrada'],
          say: 'Cálculo de cinco a diez milímetros: tamsulosina. No se parte con litotripsia.' },
        { cells: ['Cólico con fiebre', 'Doble J o nefrostomía', 'Solo antibiótico oral'],
          say: 'Cólico con fiebre es pionefrosis: se descomprime. El error es dejarlo con antibiótico y alta.' },
        { cells: ['Primer cólico, sin causa', 'Subir la ingesta de agua', 'Pedir tiazida de entrada'],
          say: 'Primer cólico, sin causa metabólica: más agua. La tiazida se reserva para la hipercalciuria.' },
        { cells: ['Coraliforme con orina alcalina', 'Proteus', 'Pensar en E. coli'],
          say: 'Cálculo coraliforme con orina alcalina: Proteus, por la ureasa.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 34 años consulta por dolor lumbar derecho súbito de 3 horas, irradiado a testículo, con vómitos e intensa inquietud. PA 155/95 mmHg, FC 102 lpm, T° 36,7 °C. Puñopercusión derecha muy dolorosa. Sedimento de orina: 50 a 60 eritrocitos por campo.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Ketorolaco endovenoso y luego pielotac' },
        { letter: 'B', text: 'Morfina endovenosa y esperar la ecografía' },
        { letter: 'C', text: 'Hidratación rápida con 2 litros de suero y furosemida' },
        { letter: 'D', text: 'Urografía de eliminación antes de analgesiar' },
        { letter: 'E', text: 'Hospitalizar para descompresión con doble J' },
      ],
      correct: 'A',
      explanation: 'Es un cólico renal típico, afebril. La primera línea es un AINE endovenoso, que actúa sobre el mecanismo. Luego se pide pielotac para medir el cálculo. No se difiere la analgesia, no se fuerzan fluidos ni diuréticos en la fase aguda y la descompresión se reserva para fiebre, monorreno, anuria o dolor refractario.',
      say: {
        stem: 'Un hombre de treinta y cuatro años con dolor lumbar derecho súbito de tres horas, irradiado al testículo, con vómitos e intensa inquietud. Está afebril, con la presión en ciento cincuenta y cinco sobre noventa y cinco, y la puñopercusión derecha muy dolorosa. En la orina hay entre cincuenta y sesenta glóbulos rojos por campo.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: ketorolaco y luego pielotac; morfina y esperar una ecografía; dos litros de suero rápido con furosemida; urografía antes de analgesiar; o hospitalizar para un doble J. Piénsalo.',
        answer: 'Es la A. Cólico renal sin banderas rojas: antiinflamatorio endovenoso y después pielotac. La B es la tentación, pero el opioide es de rescate. Y la C empeora el cólico, porque sube la presión de la vía obstruida.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 56',
      stem: 'Un paciente de 27 años, sin antecedentes, consulta por dolor en flanco izquierdo de 2 horas de evolución tipo cólico, irradiado a genitales, náuseas y vómitos, sudoración y hematuria. Al examen físico se encuentra inquieto, con puño percusión positiva a izquierda.',
      question: 'El fármaco de elección para el manejo de este paciente es:',
      options: [
        { letter: 'A', text: 'Ketorolaco' },
        { letter: 'B', text: 'Acetaminofeno' },
        { letter: 'C', text: 'Pargeverina' },
        { letter: 'D', text: 'Tramadol' },
        { letter: 'E', text: 'Clonixinato de lisina' },
      ],
      correct: 'A',
      explanation: 'Cólico renal: el fármaco de primera línea es un AINE endovenoso, como el ketorolaco.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Un paciente de veintisiete años con dolor en el flanco izquierdo de dos horas, tipo cólico, irradiado a los genitales, con náuseas, vómitos, sudoración y hematuria. Está inquieto y la puñopercusión izquierda es positiva.',
        question: '¿Cuál es el fármaco de elección?',
        options: 'Las opciones: ketorolaco; acetaminofeno; pargeverina; tramadol; o clonixinato de lisina. Piénsalo.',
        answer: 'Es la A. El ketorolaco es un antiinflamatorio, y frena las prostaglandinas que causan el dolor. La D es la tentación: el tramadol es un opioide, y queda de segunda línea.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 33',
      stem: 'Un paciente de 32 años presenta un cuadro de cólico renal, asociado a microhematuria en el sedimento de orina.',
      question: '¿Cuál es el examen de elección para el estudio de este paciente?',
      options: [
        { letter: 'A', text: 'UroTAC' },
        { letter: 'B', text: 'PieloTAC' },
        { letter: 'C', text: 'Pielografía de eliminación intravenosa' },
        { letter: 'D', text: 'Ecografía' },
        { letter: 'E', text: 'Radiografía simple' },
      ],
      correct: 'B',
      explanation: 'El cólico renal se estudia con PieloTAC (TAC sin contraste). El UroTAC se utiliza como estudio de la hematuria, después de descartar TU, cuando se sospecha cáncer, ya que dibuja bien la vía urinaria.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un paciente de treinta y dos años con un cólico renal y microhematuria en el sedimento de orina.',
        question: '¿Cuál es el examen de elección para estudiarlo?',
        options: 'Las opciones: urotac; pielotac; pielografía de eliminación; ecografía; o radiografía simple. Piénsalo.',
        answer: 'Es la B, el pielotac, que es un TAC sin contraste. La A es la trampa por el parecido del nombre: el urotac se usa para estudiar la hematuria cuando se sospecha cáncer.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 150',
      stem: 'Un paciente de 45 años presenta un cuadro de cólico renal derecho que es manejado con analgesia. Se realiza una pieloTAC, que muestra la presencia de un cálculo de 4 mm en el uréter derecho, el cual se maneja inicialmente con observación. Sin embargo, luego de 4 semanas no ha presentado expulsión del cálculo a pesar de haberse indicado terapia expulsiva con alfabloqueantes hace dos semanas. La pieloTAC de control muestra mayor dilatación de la vía urinaria en dicha zona, con presencia del cálculo descrito, de 4 mm en el uréter distal, que se informa con una dureza de 800 unidades de Hounsfield. La creatinina de control está en 1,38 mg/dL.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Mantener terapia farmacológica expulsiva y controlar en 2 semanas' },
        { letter: 'B', text: 'Realizar la instalación de un catéter “doble J”' },
        { letter: 'C', text: 'Administrar antibióticos endovenosos' },
        { letter: 'D', text: 'Realizar una ureteroscopía' },
        { letter: 'E', text: 'Realizar litotricia (litotripsia) extracorpórea' },
      ],
      correct: 'D',
      explanation: 'Si el cálculo no sale tras cuatro semanas y la vía se dilata más, hay que resolverlo. La ureteroscopía se prefiere para cálculos del uréter distal y muy duros, y cuando la litotripsia extracorpórea no corresponde. La litotripsia se prefiere en uréter alto o medio, de dureza baja o moderada.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un paciente de cuarenta y cinco años con un cólico renal derecho. El pielotac muestra un cálculo de cuatro milímetros en el uréter. Lo observan, y pese a cuatro semanas, con dos de terapia expulsiva, no sale. El control muestra más dilatación de la vía, el cálculo sigue en el uréter distal y tiene ochocientas unidades Hounsfield de dureza. La creatinina es uno coma treinta y ocho.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: mantener la terapia expulsiva y controlar en dos semanas; instalar un doble J; antibióticos endovenosos; ureteroscopía; o litotripsia extracorpórea. Piénsalo.',
        answer: 'Es la D. Pasaron cuatro semanas y la vía se dilata más: hay que intervenir. En el uréter distal y con un cálculo duro, se prefiere la ureteroscopía. La A es la trampa: seguir esperando pone en riesgo el riñón.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 27',
      stem: 'Un paciente de 22 años presenta un cuadro de dolor a la fosa lumbar derecha, irradiado al flanco derecho intenso ipsilateral y asociado a vómitos, que ha manejado con analgésicos. Evoluciona dos días después con malestar general y fiebre de 38,8°C. Su sedimento de orina muestra Se solicita pieloTAC, que muestra presencia de un cálculo de 9 mm, en el tercio distal del uréter derecho, con presencia de hidroureteronefrosis ipsilateral.',
      question: 'Además de iniciar analgésicos y antibióticos, ¿Cuál es la conducta más adecuada en este momento?',
      options: [
        { letter: 'A', text: 'Realizar nefrolitotomía abierta' },
        { letter: 'B', text: 'Realizar nefrolitotomía percutánea' },
        { letter: 'C', text: 'Realizar litotripsia extracorpórea' },
        { letter: 'D', text: 'Instalar un catéter doble J' },
        { letter: 'E', text: 'Indicar tratamiento médico expulsor' },
      ],
      correct: 'D',
      explanation: 'Cólico con fiebre e hidroureteronefrosis es una pionefrosis, una urgencia: se descomprime la vía con un catéter doble J. El cálculo se trata después, cuando la infección está controlada.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veintidós. Un paciente de veintidós años con un cólico renal derecho manejado con analgésicos. Dos días después aparece malestar general y fiebre de treinta y ocho coma ocho grados. El pielotac muestra un cálculo de nueve milímetros en el uréter distal derecho, con hidroureteronefrosis.',
        question: 'Además de analgésicos y antibióticos, ¿cuál es la conducta más adecuada?',
        options: 'Las opciones: nefrolitotomía abierta; nefrolitotomía percutánea; litotripsia extracorpórea; instalar un doble J; o tratamiento médico expulsor. Piénsalo.',
        answer: 'Es la D. Cólico más fiebre, con la vía dilatada, es una pionefrosis, y lo primero es descomprimir con un doble J. La E es la tentación por el tamaño de nueve milímetros, pero con infección no se espera a que el cálculo salga.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 126',
      stem: 'Un paciente de 54 años ha presentado varios episodios de cólico renal, con eliminación reiterada de cálculos urinarios. Su examen físico no tiene alteraciones. En sus exámenes destaca creatinina: 1,4 mg/dl y examen de orina con pH: 7,9, glóbulos rojos: 15 x campo, glóbulos blancos: 15 por campo, bacterias en moderada cantidad y cristales de fosfato amónico magnésico (estruvita). El pieloTAC muestra presencia de cálculos coraliformes bilaterales.',
      question: '¿Qué germen es el agente etiológico, con mayor probabilidad?',
      options: [
        { letter: 'A', text: 'Proteus mirabilis' },
        { letter: 'B', text: 'Klebsiella oxytoca' },
        { letter: 'C', text: 'Pseudomona aureginosa' },
        { letter: 'D', text: 'Campilobacter jejuni' },
        { letter: 'E', text: 'Escherichia coli' },
      ],
      correct: 'A',
      explanation: 'El Proteus es la causa de los cálculos coraliformes de estruvita. Además, suele alcalinizar la orina.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un paciente de cincuenta y cuatro años con varios cólicos renales y eliminación repetida de cálculos. La orina tiene pH siete coma nueve, con bacterias y cristales de estruvita. El pielotac muestra cálculos coraliformes en ambos riñones.',
        question: '¿Qué germen es el agente etiológico más probable?',
        options: 'Las opciones: Proteus mirabilis; Klebsiella oxytoca; Pseudomonas aeruginosa; Campylobacter jejuni; o Escherichia coli. Piénsalo.',
        answer: 'Es la A. El Proteus tiene ureasa, alcaliniza la orina y forma estruvita. La E es la tentación, porque la Escherichia coli es la más común en las infecciones urinarias, pero no tiene ureasa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 64',
      stem: 'Un paciente de 34 años presenta su primer episodio de cólico renal. Presenta eliminación espontánea de un pequeño cálculo, el que no es preservado para estudio citoquímico. Actualmente está asintomático y el pieloTAC no observa otras litiasis.',
      question: '¿Cuál es la conducta más adecuada en este paciente?',
      options: [
        { letter: 'A', text: 'Indicar dieta baja en lácteos' },
        { letter: 'B', text: 'Iniciar hidroclorotiazida' },
        { letter: 'C', text: 'Aumentar la ingesta de agua' },
        { letter: 'D', text: 'Realizar litotripsia extracorpórea' },
        { letter: 'E', text: 'Realizar estudio metabólico de urolitiasis' },
      ],
      correct: 'C',
      explanation: 'Para evitar la recidiva de las litiasis siempre es útil aumentar la ingesta de agua, con independencia de la causa. Además, en los casos de hipercalciuria sirven las tiazidas y, en los casos de hiperoxaluria o hiperuricosuria, sirve la dieta. En el caso de ser por estruvita, también se debe tratar con antibióticos.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un paciente de treinta y cuatro años en su primer cólico renal. Expulsó el cálculo, pero no se guardó para analizarlo. Está asintomático, y el pielotac no muestra otras litiasis.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: dieta baja en lácteos; hidroclorotiazida; aumentar la ingesta de agua; litotripsia extracorpórea; o estudio metabólico. Piénsalo.',
        answer: 'Es la C. Con un primer episodio y sin causa conocida, la medida que siempre sirve es tomar más agua. La B es la trampa: la tiazida se indica si hay hipercalciuria demostrada, no de entrada.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2015 · Pregunta 50",
      "stem": "Un paciente presenta dolor lumbar intenso irradiado al testículo, asociado a vómitos e inquietud psicomotora. Su sedimento de orina muestra microhematuria.",
      "question": "¿Qué examen es el más adecuado para confirmar el diagnóstico en este paciente?",
      "options": [
        {
          "letter": "A",
          "text": "TAC de abdomen con contraste"
        },
        {
          "letter": "B",
          "text": "Ecografía abdominal"
        },
        {
          "letter": "C",
          "text": "PieloTAC"
        },
        {
          "letter": "D",
          "text": "Pielografía de eliminación"
        },
        {
          "letter": "E",
          "text": "Radiografía simple de abdomen y pelvis"
        }
      ],
      "correct": "C",
      "explanation": "Ante un cólico renal típico, el examen de elección es el pieloTAC, una tomografía sin contraste que detecta cálculos de cualquier composición y localización, con sensibilidad y especificidad cercanas a 97%. La ecografía es alternativa en embarazadas y niños, pero ve mal el uréter.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil quince. Un paciente tiene dolor lumbar intenso irradiado al testículo, con vómitos e inquietud, y el sedimento de orina muestra microhematuria.",
        "question": "¿Qué examen confirma el diagnóstico?",
        "options": "Las opciones: tomografía con contraste, ecografía abdominal, pieloTAC, pielografía de eliminación o radiografía simple. Piénsalo.",
        "answer": "Es la C. En el cólico renal el examen de elección es el pieloTAC, una tomografía sin contraste que ve casi todos los cálculos. La ecografía tienta por ser accesible, pero ve mal el uréter y queda para embarazadas y niños."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.03.4.011 · Calciuria",
      "stem": "Un hombre de 38 años ha tenido 3 episodios de cólico renal en 2 años por cálculos de oxalato de calcio. Su calcemia, PTH y función renal son normales.",
      "question": "¿Qué examen es el más importante para orientar la prevención de nuevos cálculos y cuál es el hallazgo más frecuente?",
      "options": [
        {
          "letter": "A",
          "text": "Uricemia: hiperuricemia"
        },
        {
          "letter": "B",
          "text": "Calciuria de 24 horas: hipercalciuria idiopática"
        },
        {
          "letter": "C",
          "text": "Cistinuria: cistinuria"
        },
        {
          "letter": "D",
          "text": "Urocultivo: infección por Proteus"
        },
        {
          "letter": "E",
          "text": "Cintigrama renal: hidronefrosis"
        }
      ],
      "correct": "B",
      "explanation": "La litiasis recurrente amerita estudio metabólico en orina de 24 horas (calcio, oxalato, citrato, ácido úrico, sodio, volumen). La alteración más frecuente en la litiasis cálcica es la hipercalciuria idiopática, con calcemia y PTH normales. Se maneja con abundante agua, dieta baja en sodio con calcio normal y, si persiste, tiazidas.",
      "say": {
        "stem": "Un hombre de treinta y ocho años ha tenido tres cólicos renales en dos años por cálculos de oxalato de calcio, con calcemia, PTH y función renal normales.",
        "question": "¿Qué examen orienta mejor la prevención y cuál es el hallazgo más frecuente?",
        "options": "Las opciones: uricemia, calciuria de veinticuatro horas con hipercalciuria idiopática, cistinuria, urocultivo por Proteus o cintigrama renal. Piénsalo.",
        "answer": "Es la B. En la litiasis cálcica recurrente el hallazgo más frecuente es la hipercalciuria idiopática, que se detecta en orina de veinticuatro horas. La uricemia tienta, pero el ácido úrico en sangre no explica cálculos de oxalato de calcio."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2015 · Pregunta 49",
      "stem": "Un paciente ha presentado 5 episodios de litiasis ureteral en los últimos años.",
      "question": "¿Cuál es la alteración metabólica más probable en este paciente?",
      "options": [
        {
          "letter": "A",
          "text": "Hipercalciuria"
        },
        {
          "letter": "B",
          "text": "Hiperoxaluria"
        },
        {
          "letter": "C",
          "text": "Hiperuricosuria"
        },
        {
          "letter": "D",
          "text": "Hipocitraturia"
        },
        {
          "letter": "E",
          "text": "Cistinuria"
        }
      ],
      "correct": "A",
      "explanation": "La mayoría de los cálculos urinarios son de oxalato de calcio, y la alteración metabólica más frecuente en litiásicos recurrentes es la hipercalciuria, idiopática en la mayoría de los casos, seguida de hipocitraturia e hiperoxaluria. La cistinuria es rara y genética. En la litiasis recurrente está indicado el estudio metabólico con orina de 24 horas.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil quince. Paciente con cinco episodios de litiasis ureteral en los últimos años.",
        "question": "¿Qué alteración metabólica es la más probable?",
        "options": "Las opciones: hipercalciuria, hiperoxaluria, hiperuricosuria, hipocitraturia, o cistinuria. Piénsalo.",
        "answer": "Es la A. Hipercalciuria, la alteración más frecuente en litiásicos recurrentes. La hipocitraturia también es común, pero va detrás de la hipercalciuria."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.2.001 · Cólico nefrítico, urolitiasis y complicaciones:",
      "stem": "Mujer de 40 años consulta por dolor lumbar derecho cólico irradiado a la ingle, con náuseas. La TAC sin contraste muestra un cálculo de 6 mm en el uréter distal derecho con hidronefrosis leve.",
      "question": "¿Cuál de los siguientes hallazgos obliga a hospitalizar y resolver la obstrucción en forma urgente?",
      "options": [
        {
          "letter": "A",
          "text": "Hematuria microscópica"
        },
        {
          "letter": "B",
          "text": "Dolor que cede con ketorolaco"
        },
        {
          "letter": "C",
          "text": "Fiebre de 38,8 °C con escalofríos"
        },
        {
          "letter": "D",
          "text": "Cálculo menor de 10 mm"
        },
        {
          "letter": "E",
          "text": "Antecedente de un cólico renal previo"
        }
      ],
      "correct": "C",
      "explanation": "Un cólico renal con fiebre sugiere uropatía obstructiva infectada, que puede evolucionar rápido a sepsis: requiere hospitalización, antibióticos y drenaje urgente de la vía urinaria con catéter doble J o nefrostomía. Otras indicaciones de hospitalizar son monorreno, falla renal, dolor refractario o vómitos incoercibles. La hematuria es esperable en el cólico.",
      "say": {
        "stem": "Mujer de cuarenta años con cólico renal derecho y un cálculo de seis milímetros en el uréter distal.",
        "question": "¿Qué hallazgo obliga a hospitalizar y desobstruir de urgencia?",
        "options": "Las opciones: hematuria microscópica, dolor que cede con analgesia, fiebre con escalofríos, cálculo pequeño o cólico previo. Piénsalo.",
        "answer": "Es la C. La fiebre, porque una vía urinaria obstruida e infectada puede llevar a sepsis. La hematuria asusta, pero es esperable en todo cólico renal."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.4.003 · Pielo TAC",
      "stem": "Hombre de 38 años con dolor lumbar izquierdo cólico intenso de inicio súbito, irradiado a la fosa ilíaca y al testículo, con hematuria microscópica. Afebril, con función renal normal.",
      "question": "¿Cuál es el examen de elección para confirmar el diagnóstico?",
      "options": [
        {
          "letter": "A",
          "text": "Radiografía simple de abdomen"
        },
        {
          "letter": "B",
          "text": "Pielo TAC (TAC de abdomen y pelvis sin contraste)"
        },
        {
          "letter": "C",
          "text": "Pielografía de eliminación"
        },
        {
          "letter": "D",
          "text": "Cintigrama renal"
        },
        {
          "letter": "E",
          "text": "Resonancia magnética de abdomen"
        }
      ],
      "correct": "B",
      "explanation": "La pielo TAC, tomografía sin contraste, es el examen de elección en el cólico renal: tiene sensibilidad y especificidad cercanas al 95% y muestra cálculos de cualquier composición, su tamaño y ubicación, la hidronefrosis y diagnósticos diferenciales. La radiografía no ve cálculos radiolúcidos y la pielografía requiere contraste y está en desuso. En embarazadas se prefiere la ecografía.",
      "say": {
        "stem": "Hombre de treinta y ocho años con cólico renal izquierdo irradiado al testículo y hematuria microscópica.",
        "question": "¿Qué examen confirma el diagnóstico?",
        "options": "Las opciones: radiografía de abdomen, pielo TAC sin contraste, pielografía de eliminación, cintigrama, o resonancia. Piénsalo.",
        "answer": "Es la B. La pielo TAC sin contraste, que ve casi todos los cálculos. La radiografía es más simple, pero no detecta los cálculos radiolúcidos."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.4.004 · Radiografía renal y vesical simple",
      "stem": "Hombre de 55 años con gota tofácea presenta un cólico renal. La pielo TAC muestra un cálculo de 7 mm en el uréter proximal derecho, pero en la radiografía simple renal y vesical no se observan imágenes radioopacas.",
      "question": "¿Cuál es la composición más probable del cálculo?",
      "options": [
        {
          "letter": "A",
          "text": "Oxalato de calcio"
        },
        {
          "letter": "B",
          "text": "Fosfato de calcio"
        },
        {
          "letter": "C",
          "text": "Estruvita"
        },
        {
          "letter": "D",
          "text": "Ácido úrico"
        },
        {
          "letter": "E",
          "text": "Cistina"
        }
      ],
      "correct": "D",
      "explanation": "Los cálculos de ácido úrico son radiolúcidos: no se ven en la radiografía simple de riñón y vejiga, pero sí en la TAC. Se asocian a gota, hiperuricemia y orina ácida, y pueden disolverse alcalinizando la orina con citrato de potasio. Los cálculos de calcio y la estruvita son radioopacos, y la cistina es débilmente opaca.",
      "say": {
        "stem": "Hombre con gota y un cálculo ureteral que se ve en la TAC, pero no en la radiografía simple.",
        "question": "¿De qué está hecho el cálculo?",
        "options": "Las opciones: oxalato de calcio, fosfato de calcio, estruvita, ácido úrico o cistina. Piénsalo.",
        "answer": "Es la D. Ácido úrico, radiolúcido y típico de la gota. El oxalato de calcio es el más frecuente en general, pero se vería en la radiografía."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.4.011 · Estudio metabólico de urolitiasis",
      "stem": "Distintos pacientes consultan tras expulsar su primer cálculo urinario.",
      "question": "¿En cuál de ellos está indicado un estudio metabólico completo de urolitiasis (orina de 24 horas, calcemia, PTH)?",
      "options": [
        {
          "letter": "A",
          "text": "Hombre de 40 años con un primer cálculo de 4 mm expulsado, sin otros antecedentes"
        },
        {
          "letter": "B",
          "text": "Hombre de 50 años con un único cólico hace 10 años"
        },
        {
          "letter": "C",
          "text": "Mujer de 35 años monorrena con un primer cálculo"
        },
        {
          "letter": "D",
          "text": "Mujer de 45 años con un cálculo único sin hidronefrosis"
        },
        {
          "letter": "E",
          "text": "Ningún paciente con litiasis requiere estudio metabólico"
        }
      ],
      "correct": "C",
      "explanation": "El estudio metabólico completo se indica en pacientes de alto riesgo: litiasis recurrente, monorrenos, niños, cálculos bilaterales o múltiples, cálculos de ácido úrico, cistina o estruvita, enfermedades asociadas como hiperparatiroidismo, gota o malabsorción, y nefrocalcinosis. En un primer episodio no complicado basta un estudio básico y medidas generales como la hidratación.",
      "say": {
        "stem": "Varios pacientes acaban de expulsar su primer cálculo.",
        "question": "¿A quién le haces estudio metabólico completo?",
        "options": "Las opciones: hombre joven con cálculo pequeño, hombre con un cólico hace diez años, mujer monorrena, mujer con cálculo único sin hidronefrosis o a ninguno. Piénsalo.",
        "answer": "Es la C. A la mujer monorrena, porque una nueva obstrucción podría dejarla sin función renal. Un primer cálculo sin factores de riesgo solo necesita estudio básico."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.5.003 · Instalación pigtail",
      "stem": "Mujer de 45 años con un cálculo de 8 mm en el uréter proximal izquierdo e hidronefrosis moderada presenta fiebre de 39 °C, escalofríos, PA 95/60 mmHg y leucocitosis.",
      "question": "Además de antibióticos y fluidos, ¿cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Litotripsia extracorpórea urgente"
        },
        {
          "letter": "B",
          "text": "Nefrectomía de urgencia"
        },
        {
          "letter": "C",
          "text": "Tamsulosina y esperar la expulsión"
        },
        {
          "letter": "D",
          "text": "Drenaje urgente de la vía urinaria con catéter ureteral doble J (pigtail) o nefrostomía"
        },
        {
          "letter": "E",
          "text": "Ureteroscopía con litotricia láser inmediata"
        }
      ],
      "correct": "D",
      "explanation": "La pielonefritis obstructiva es una emergencia urológica: además de antibióticos, requiere descompresión urgente con catéter doble J (pigtail) por vía cistoscópica o con nefrostomía percutánea. El tratamiento definitivo del cálculo se difiere hasta resolver la infección, porque la litotripsia o la ureteroscopía en este contexto aumentan el riesgo de sepsis.",
      "say": {
        "stem": "Mujer de cuarenta y cinco años con un cálculo ureteral obstructivo, fiebre alta, escalofríos e hipotensión.",
        "question": "Además de antibióticos y fluidos, ¿qué haces?",
        "options": "Las opciones: litotripsia urgente, nefrectomía, tamsulosina, drenaje con catéter doble jota o nefrostomía o ureteroscopía inmediata. Piénsalo.",
        "answer": "Es la D. Drenar la vía urinaria con catéter doble jota o nefrostomía. Romper el cálculo de inmediato parece resolutivo, pero con infección aumenta el riesgo de sepsis."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.1.026 · Uropatía alta",
      "stem": "Mujer de 48 años con dolor lumbar derecho tipo cólico de 2 días, ahora con fiebre de 39 °C, calofríos y PA 95/60 mmHg. La TAC sin contraste muestra un cálculo de 8 mm en el uréter proximal derecho con hidronefrosis moderada. Creatinina 1,6 mg/dL. Se inician hemocultivos, volumen y antibióticos endovenosos.",
      "question": "¿Cuál es la conducta más importante a continuación?",
      "options": [
        {
          "letter": "A",
          "text": "Tamsulosina y esperar expulsión espontánea"
        },
        {
          "letter": "B",
          "text": "Litotricia extracorpórea de urgencia"
        },
        {
          "letter": "C",
          "text": "Derivación urgente de la vía urinaria (catéter doble J o nefrostomía percutánea)"
        },
        {
          "letter": "D",
          "text": "Ureteroscopía con extracción del cálculo en el mismo acto"
        },
        {
          "letter": "E",
          "text": "Completar 14 días de antibióticos y luego reevaluar"
        }
      ],
      "correct": "C",
      "explanation": "Una pielonefritis obstructiva (uropatía obstructiva alta infectada) es una urgencia urológica: además de antibióticos y soporte, requiere descomprimir la vía urinaria de inmediato con catéter doble J o nefrostomía. El tratamiento definitivo del cálculo (litotricia o ureteroscopía) se difiere hasta resolver la infección, porque manipularlo infectado agrava la sepsis.",
      "say": {
        "stem": "Mujer de cuarenta y ocho años con un cálculo de ocho milímetros en el uréter derecho, hidronefrosis, fiebre alta, calofríos y presión baja. Ya se iniciaron antibióticos y volumen.",
        "question": "¿Cuál es la conducta más importante ahora?",
        "options": "Las opciones: tamsulosina y esperar, litotricia de urgencia, derivar urgente la vía urinaria con doble jota o nefrostomía, ureteroscopía con extracción o solo antibióticos. Piénsalo.",
        "answer": "Es la C. Una obstrucción urinaria infectada se drena de urgencia con un catéter doble jota o una nefrostomía. Sacar el cálculo de inmediato tienta, pero manipularlo con orina infectada empeora la sepsis; eso se hace después."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.4.001 · Radiografía renal y vesical simple",
      "stem": "Hombre de 40 años con cólico renal derecho. La TAC sin contraste muestra un cálculo de 6 mm en el uréter distal derecho, de densidad alta. Se decide manejo médico expulsivo y seguimiento.",
      "question": "¿Cuál es el examen más adecuado para el seguimiento de la expulsión de este cálculo?",
      "options": [
        {
          "letter": "A",
          "text": "Radiografía simple renal, ureteral y vesical (de abdomen), ya que la mayoría de los cálculos son radiopacos"
        },
        {
          "letter": "B",
          "text": "Pielografía de eliminación semanal"
        },
        {
          "letter": "C",
          "text": "Resonancia magnética de abdomen"
        },
        {
          "letter": "D",
          "text": "Cintigrama renal"
        },
        {
          "letter": "E",
          "text": "Cistoscopía"
        }
      ],
      "correct": "A",
      "explanation": "Cerca del 90% de los cálculos urinarios (oxalato y fosfato de calcio) son radiopacos, por lo que la radiografía simple de abdomen (riñón, uréter y vejiga) sirve para el seguimiento de un cálculo visible, con menor radiación que repetir TAC. Los de ácido úrico son radiolúcidos y no se ven en la radiografía.",
      "say": {
        "stem": "Hombre de cuarenta años con un cálculo de seis milímetros, denso, en el uréter distal, en manejo médico para su expulsión.",
        "question": "¿Cuál es el examen más adecuado para el seguimiento?",
        "options": "Las opciones: radiografía simple de riñón, uréter y vejiga, pielografía semanal, resonancia, cintigrama o cistoscopía. Piénsalo.",
        "answer": "Es la A. La radiografía simple basta porque la mayoría de los cálculos son radiopacos, y irradia menos que repetir la tomografía. La pielografía tienta por ser un estudio clásico, pero usa contraste y más radiación sin ganancia aquí."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.4.002 · Pielografía de eliminación",
      "stem": "Se evalúa a un paciente para un estudio de la vía urinaria con medio de contraste yodado endovenoso (pielografía de eliminación o uroTAC).",
      "question": "¿Cuál de las siguientes condiciones es la principal limitación o contraindicación relativa para este estudio?",
      "options": [
        {
          "letter": "A",
          "text": "Hipertensión arterial controlada"
        },
        {
          "letter": "B",
          "text": "Infección urinaria baja tratada"
        },
        {
          "letter": "C",
          "text": "Litiasis renal"
        },
        {
          "letter": "D",
          "text": "Hematuria macroscópica"
        },
        {
          "letter": "E",
          "text": "Insuficiencia renal con VFG menor de 30 mL/min o antecedente de reacción alérgica grave al medio de contraste"
        }
      ],
      "correct": "E",
      "explanation": "La pielografía de eliminación (urografía excretora) depende de la excreción renal de contraste yodado, por lo que en insuficiencia renal la imagen es pobre y hay riesgo de nefropatía por contraste; la alergia grave al contraste también la contraindica. Hoy ha sido reemplazada en gran medida por el uroTAC, que comparte estas limitaciones.",
      "say": {
        "stem": "Un paciente será estudiado con pielografía de eliminación, que usa contraste yodado endovenoso.",
        "question": "¿Cuál es la principal contraindicación relativa?",
        "options": "Las opciones: hipertensión controlada, infección urinaria tratada, litiasis renal, hematuria macroscópica o insuficiencia renal avanzada o alergia grave al contraste. Piénsalo.",
        "answer": "Es la E. Son la insuficiencia renal avanzada y la alergia grave al contraste, porque el estudio depende de que el riñón excrete el yodo. La litiasis tienta, pero es justamente una indicación del estudio, no una contraindicación."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: cólico renal y litiasis',
      cards: [
        { title: 'Diagnóstico y analgesia', tag: 'Primeras decisiones', kind: 'key', items: [
          { t: 'AINE endovenoso primero', d: 'Opioide solo de rescate',
            say: 'Cerremos con las reglas de oro. El cólico renal se trata primero con un antiinflamatorio endovenoso, ketorolaco o ketoprofeno, y el opioide queda de rescate.' },
          { t: 'Pielotac, sin contraste', d: 'Mide el cálculo y muestra la hidronefrosis',
            say: 'El examen de elección es el pielotac, que es un TAC sin contraste. No es el urotac.' },
        ] },
        { title: 'Conducta y urgencia', tag: 'Según el caso', kind: 'alert', items: [
          { t: 'Tamaño decide la conducta', d: 'Más de 10 mm: LEOC o ureteroscopía',
            say: 'Menos de cinco milímetros se observa. De cinco a diez, tamsulosina. Sobre diez, litotripsia o ureteroscopía, según dónde esté el cálculo.' },
          { t: 'Fiebre, monorreno o anuria: descomprimir', d: 'Agua abundante para prevenir',
            say: 'Cólico con fiebre, monorreno o anuria se descomprime de urgencia con doble J o nefrostomía. Y para prevenir recidivas, mucha agua. Si te llevas una sola idea de hoy: el dolor se trata con antiinflamatorio, y la fiebre con un riñón obstruido es una urgencia. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Cólico renal: urgencia, analgesia y tamaño',
    root: N('start', 'Dolor lumbar tipo cólico', 'Sospecha de cólico renal',
      'Un paciente con dolor lumbar tipo cólico, inquieto, con vómitos y hematuria. Lo primero es preguntarte si hay alguna bandera roja.',
      ['Fiebre, monorreno, anuria o dolor refractario', N('alert', 'Descomprimir de urgencia', 'Doble J o nefrostomía',
        'Si hay fiebre, riñón único, anuria o un dolor que no cede, es una urgencia. Se hospitaliza, se dan antibióticos si hay infección y se descomprime la vía con un doble J o, si no se puede, una nefrostomía.')],
      ['Estable, sin banderas rojas', N('do', 'AINE endovenoso y pielotac', 'Ketorolaco o ketoprofeno',
        'Si está estable, se alivia el dolor con un antiinflamatorio endovenoso y se pide un pielotac para medir el cálculo.',
        ['Menor de 5 mm', N('ok', 'Observar', 'Colador, agua, control en 2 a 4 semanas',
          'Menor de cinco milímetros: observación ambulatoria, analgésicos orales y un colador para recuperar el cálculo.')],
        ['5 a 10 mm', N('ok', 'Tamsulosina 28 días', 'Control a las 4 semanas',
          'De cinco a diez milímetros: terapia médica expulsiva con tamsulosina, y control a las cuatro semanas.')],
        ['Mayor de 10 mm', N('refer', 'Resolución urológica', 'LEOC o ureteroscopía',
          'Más de diez milímetros: derivación para litotripsia extracorpórea si está en el riñón o el uréter alto, y ureteroscopía si está en el uréter distal.')],
      )],
    ),
  },
};
