// Clase 13.14 (Urología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_urologia.cjs (uro-14). Preguntas: banco real EUNACOM (class_questions.cjs y --search).
// Sin pregunta real sobre quistes renales, Bosniak ni poliquistosis (la del código 1.09.1.001, Julio 2024 P6, es de acidosis en ERC; las búsquedas solo traen quistes de otros órganos o distractores).
// Se usan las 2 preguntas del libro como "Banco EUNACOM · Caso representativo" (quiste simple y aneurisma en poliquistosis).
// Ninguna clase nefro-XX trata la poliquistosis (grep). Hemorragia subaracnoidea: se enlaza con neurología sin repetir.
// Imágenes: Bailey & Love 27.ª ed. Fig. 75.24 (panel de quiste simple) y Fig. 82.23; Harrison 21.ª ed. Fig. 315-2.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'uro-14',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Quistes renales simples, clasificación de Bosniak y poliquistosis renal autosómica dominante',
      say: 'Bienvenido. Hoy vemos dos mundos que se parecen en la imagen pero no en el pronóstico: el quiste renal simple, que es un hallazgo inocuo, y la poliquistosis renal, que es una enfermedad hereditaria grave. El examen pregunta cuándo basta con tranquilizar, cuándo hay que pedir un TAC, y cuál es la complicación vital de la poliquistosis.',
    },

    {
      type: 'points',
      kicker: 'Quiste simple',
      title: 'Hallazgo benigno y frecuente',
      cards: [
        { title: 'Qué es', tag: 'Benigno', kind: 'normal', items: [
          { t: 'Más del 50% sobre 50 años', d: 'Dilatación adquirida de túbulos',
            say: 'Los quistes corticales simples aparecen con la edad: más de la mitad de las personas sobre cincuenta años los tiene. Son dilataciones adquiridas de los túbulos colectores.' },
          { t: 'Asintomáticos, sin malignidad', d: 'Se descubren por imagen',
            say: 'Casi siempre no dan síntomas y no tienen potencial maligno. Se descubren de casualidad en una ecografía.' },
        ] },
        { title: 'Criterios ecográficos', tag: 'Los cuatro', kind: 'criteria', items: [
          { t: 'Contenido anecogénico', d: 'Sin ecos ni detritus',
            say: 'Para llamarlo quiste simple, debe cumplir cuatro criterios. Primero, contenido totalmente anecogénico, sin ecos internos.' },
          { t: 'Pared fina e imperceptible', d: 'Sin nódulos',
            say: 'Segundo, pared delgada, que casi no se ve, sin engrosamientos.' },
          { t: 'Redondo, borde nítido', d: 'Interfaz clara con el parénquima',
            say: 'Tercero, forma redondeada u oval, con un borde nítido.' },
          { t: 'Refuerzo acústico posterior', d: 'Se ve más brillante tras el quiste',
            say: 'Y cuarto, refuerzo acústico posterior. Si cumple los cuatro, no se pide nada más: se tranquiliza al paciente y se da el alta, sin seguimiento.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Quiste complejo',
      title: 'De la ecografía al TAC',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'start', t: 'Lesión quística en ecografía', s: 'Hallazgo en el riñón' },
        { id: 'b', col: 1, row: 1, k: 'q', t: '¿Cumple los 4 criterios?', s: 'Quiste simple típico' },
        { id: 'c', col: 2, row: 0, k: 'good', t: 'Tranquilizar y dar el alta', s: 'Sin seguimiento' },
        { id: 'd', col: 2, row: 2, k: 'alert', t: 'Tabiques, calcio, ecos', s: 'Quiste complejo' },
        { id: 'e', col: 3, row: 2, k: 'mech', t: 'TAC con contraste', s: 'Clasificación de Bosniak' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c', label: 'Sí' }, { from: 'b', to: 'd', label: 'No' }, { from: 'd', to: 'e' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'Primero: los criterios',
          say: 'Ante una lesión quística en la ecografía, la primera pregunta es si cumple los criterios del quiste simple.' },
        { show: ['c'], note: 'Si cumple: alta',
          say: 'Si los cumple, no se hace nada más. El error típico es pedir un TAC, una punción o controles que no aportan nada.' },
        { show: ['d', 'e'], note: 'Si no cumple: TAC',
          say: 'Si tiene tabiques, calcificaciones, contenido denso o un componente sólido, es un quiste complejo. Ahí se pide un TAC con contraste endovenoso y se clasifica con la escala de Bosniak.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Escala de Bosniak',
      title: 'Clasificación por TAC',
      head: ['Categoría', 'Hallazgo en TAC', 'Malignidad', 'Conducta'],
      rows: [
        { cells: ['I', 'Pared fina, agua, sin realce', '0%', 'Alta, sin control'],
          say: 'Bosniak uno es el quiste simple: pared fina, densidad de agua, sin tabiques ni realce. Es benigno y no requiere seguimiento.' },
        { cells: ['II', 'Tabiques < 1 mm, calcio fino', '0%', 'Sin seguimiento'],
          say: 'Bosniak dos tiene tabiques muy delgados o calcio fino, o un quiste hiperdenso pequeño que no realza. También es benigno y no se sigue.' },
        { cells: ['IIF', 'Varios tabiques, hiperdenso > 3 cm', '~5%', 'TAC a 6 y 12 meses'],
          say: 'Bosniak dos F, la F es de follow-up, seguimiento. Tiene varios tabiques finos o un quiste hiperdenso mayor de tres centímetros, sin realce. Tiene alrededor de cinco por ciento de riesgo y se controla con TAC a los seis y doce meses.' },
        { cells: ['III', 'Tabiques gruesos con realce', '50-60%', 'Cirugía'],
          say: 'Bosniak tres tiene tabiques gruesos e irregulares que realzan con el contraste. La mitad es maligna, y se opera.' },
        { cells: ['IV', 'Nódulos sólidos con realce', '85-100%', 'Cirugía oncológica'],
          say: 'Y Bosniak cuatro tiene nódulos sólidos que realzan. Es un carcinoma renal quístico casi seguro. Los dos últimos, tres y cuatro, van a cirugía, con nefrectomía parcial o radical. La clave es el realce: lo que realza con contraste, preocupa.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Poliquistosis',
      title: 'PQRAD: genes y cuadro',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'cause', t: 'Mutación PKD1 o PKD2', s: 'Autosómica dominante' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'Policistinas defectuosas', s: 'Cilio primario del túbulo' },
        { id: 'c', col: 2, row: 0, k: 'effect', t: 'Quistes y nefromegalia', s: 'Masas bilaterales palpables' },
        { id: 'd', col: 3, row: 0, k: 'effect', t: 'HTA precoz, hematuria', s: 'Dolor lumbar sordo' },
        { id: 'e', col: 4, row: 0, k: 'alert', t: 'Falla renal terminal', s: 'Progresiva' },
        { id: 'f', col: 2, row: 2, k: 'trap', t: 'PKD1: 85%, más severa', s: 'Cromosoma 16' },
        { id: 'g', col: 3, row: 2, k: 'good', t: 'PKD2: 15%, más tardía', s: 'Cromosoma 4' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' }, { from: 'a', to: 'f' }, { from: 'f', to: 'g' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'Enfermedad hereditaria',
          say: 'La poliquistosis renal autosómica dominante es la enfermedad renal hereditaria más frecuente. La causan mutaciones en PKD uno o PKD dos, que codifican policistinas del cilio primario de los túbulos.' },
        { show: ['f', 'g'], note: 'Dos genes, dos ritmos',
          say: 'PKD uno, en el cromosoma dieciséis, causa el ochenta y cinco por ciento de los casos y es más severo. PKD dos, en el cromosoma cuatro, es menos frecuente y de inicio más tardío.' },
        { show: ['c', 'd'], note: 'Aparece a los 30 a 40 años',
          say: 'Se manifiesta entre la tercera y cuarta década, con hipertensión precoz, dolor lumbar sordo bilateral, hematuria por rotura de quistes y grandes masas renales bilaterales que se palpan en el examen.' },
        { show: ['e'], note: 'Progresa a insuficiencia renal',
          say: 'Con los años los quistes reemplazan el parénquima y el paciente progresa a insuficiencia renal terminal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Poliquistosis',
      title: 'Complicaciones fuera del riñón',
      cards: [
        { title: 'Extrarrenales', tag: 'Se preguntan', kind: 'key', items: [
          { t: 'Quistes hepáticos', d: 'Más del 70% de los casos',
            say: 'Los quistes hepáticos son lo más frecuente, en más de siete de cada diez pacientes. Un quiste en el hígado en un paciente con riñones grandes orienta a poliquistosis.' },
          { t: 'Diverticulosis y válvula mitral', d: 'Colon y corazón',
            say: 'También hay diverticulosis del colon y prolapso de la válvula mitral.' },
        ] },
        { title: 'La más temida', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Aneurisma de Berry', d: '8-10%; 20% con historia familiar',
            say: 'La complicación más temida son los aneurismas saculares del polígono de Willis, en ocho a diez por ciento, y hasta veinte por ciento si hay antecedente familiar de aneurisma.' },
          { t: 'Rotura: hemorragia subaracnoidea', d: 'Cefalea súbita, la peor de su vida',
            say: 'Su rotura da una hemorragia subaracnoidea: cefalea súbita de máxima intensidad, vómitos y rigidez de nuca, en un adulto joven. Se pide un TAC de cerebro sin contraste de urgencia. La hemorragia subaracnoidea la ves en detalle en neurología.' },
        ] },
        { title: 'Manejo', tag: 'Base', kind: 'pharma', items: [
          { t: 'Control estricto de la presión', d: 'Meta bajo 130/80 mmHg',
            say: 'En el manejo, el pilar es el control estricto de la presión arterial, con una meta bajo ciento treinta sobre ochenta, usando un inhibidor de la enzima convertidora o un antagonista del receptor de angiotensina.' },
          { t: 'Angio-RM si hay riesgo', d: 'Cefalea atípica o familiar',
            say: 'Si hay cefalea atípica o antecedente familiar de aneurisma, se hace una angiorresonancia cerebral para buscar aneurismas.' },
        ] },
      ],
    },

    {
      type: 'image',
      light: true,
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Quiste simple y poliquistosis',
      images: [
        { src: 'biblioteca/19_urologia/uro-14/01_quiste-renal-simple-tac__bailey-love_p1412.jpg', label: 'TAC: quiste renal simple grande, pared fina y contenido homogéneo', credit: 'Bailey & Love 27.ª ed., Fig. 75.24 (panel de quiste simple)' },
        { src: 'biblioteca/19_urologia/uro-14/02_rinon-poliquistico-pieza-quirurgica__harrison_p2394.jpg', label: 'Riñón poliquístico abierto: el parénquima está lleno de quistes', credit: 'Harrison 21.ª ed., Fig. 315-2' },
        { src: 'biblioteca/19_urologia/uro-14/03_poliquistosis-renal-tac__bailey-love_p1571.jpg', label: 'TAC: ambos riñones poliquísticos, enormes, hasta las fosas ilíacas', credit: 'Bailey & Love 27.ª ed., Fig. 82.23' },
      ],
      steps: [
        { note: 'Un solo quiste, de pared fina',
          say: 'Mira la imagen: un solo quiste redondo, con contenido homogéneo, del color del agua, y una pared que casi no se ve. Es un quiste simple, sin tabiques ni nódulos. Aquí no se hace nada más.' },
        { note: 'El riñón lleno de quistes',
          say: 'Esta es la pieza de un riñón con poliquistosis, abierto. No queda parénquima normal: son quistes de distinto tamaño por todas partes.' },
        { note: 'Nefromegalia bilateral',
          say: 'Y en el TAC, los dos riñones son enormes y ocupan buena parte del abdomen. Por eso en el examen físico se palpan masas bilaterales.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la imagen quística renal a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Quiste anecogénico, pared fina', 'Alta sin control', 'Pedir TAC o punción'],
          say: 'Un quiste simple típico en ecografía no se estudia más: se tranquiliza.' },
        { cells: ['Tabiques o calcio en eco', 'TAC con contraste', 'Observar solamente'],
          say: 'Si es complejo, el siguiente paso es el TAC con contraste.' },
        { cells: ['Bosniak IIF', 'Seguimiento 6 y 12 meses', 'Operar de entrada'],
          say: 'El dos F se controla, no se opera.' },
        { cells: ['Bosniak III o IV', 'Cirugía', 'Controlar'],
          say: 'Tres y cuatro, con realce, se resecan.' },
        { cells: ['Poliquistosis + cefalea súbita', 'TAC cerebro urgente', 'Pensar en crisis hipertensiva'],
          say: 'Una cefalea en trueno en un poliquístico es hemorragia subaracnoidea hasta demostrar lo contrario.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 38 años, su padre murió a los 52 años en hemodiálisis. Dolor sordo bilateral en los flancos. PA 160/100 mmHg. Se palpan masas renales lobuladas bilaterales. Ecografía: múltiples quistes en ambos riñones de 17 cm y quistes hepáticos. Creatinina 1,6 mg/dL.',
      question: '¿Cuál es el diagnóstico y el pilar del manejo?',
      options: [
        { letter: 'A', text: 'Quistes simples; alta sin control' },
        { letter: 'B', text: 'Poliquistosis renal; control estricto de la presión con IECA o ARA-II' },
        { letter: 'C', text: 'Carcinoma renal bilateral; nefrectomía' },
        { letter: 'D', text: 'Hidronefrosis bilateral; derivación urinaria' },
        { letter: 'E', text: 'Pielonefritis crónica; antibióticos' },
      ],
      correct: 'B',
      explanation: 'Historia familiar, nefromegalia bilateral palpable, hipertensión, quistes hepáticos y creatinina elevada son una poliquistosis renal autosómica dominante. El pilar es controlar la presión con bloqueadores del sistema renina-angiotensina (meta bajo 130/80).',
      say: {
        stem: 'Un hombre de treinta y ocho años, con un padre fallecido en hemodiálisis a los cincuenta y dos. Tiene dolor lumbar bilateral y presión de ciento sesenta sobre cien. Se palpan masas renales bilaterales, y la ecografía muestra múltiples quistes en ambos riñones, de diecisiete centímetros, además de quistes hepáticos. La creatinina está en uno coma seis.',
        question: '¿Cuál es el diagnóstico y el pilar del manejo?',
        options: 'Las opciones: quistes simples con alta; poliquistosis con control estricto de la presión con inhibidor de la enzima convertidora o antagonista del receptor de angiotensina; carcinoma renal bilateral; hidronefrosis; o pielonefritis crónica. Piénsalo.',
        answer: 'Es la B. El antecedente familiar, los riñones grandes palpables, la hipertensión y los quistes en el hígado son una poliquistosis renal. El pilar es controlar la presión para proteger el riñón. Los quistes simples no son masivos ni familiares.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Mujer de 54 años asintomática, ecografía de chequeo: en el polo superior del riñón izquierdo hay una lesión anecogénica de 3,8 cm, redondeada, de paredes delgadas e imperceptibles, con refuerzo acústico posterior nítido y sin tabiques ni calcificaciones. Examen físico y función renal normales.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Tranquilizar a la paciente y darle el alta sin seguimiento' },
        { letter: 'B', text: 'TAC de abdomen y pelvis con contraste para descartar malignidad' },
        { letter: 'C', text: 'Punción percutánea aspirativa para citología' },
        { letter: 'D', text: 'Repetir la ecografía cada 6 meses por 3 años' },
        { letter: 'E', text: 'Derivar para quistectomía laparoscópica electiva' },
      ],
      correct: 'A',
      explanation: 'Cumple todos los criterios de quiste simple benigno (Bosniak I): anecogénico, pared imperceptible, refuerzo posterior, sin tabiques. No requiere TAC, punción ni controles seriados.',
      say: {
        stem: 'Una mujer de cincuenta y cuatro años, sin síntomas. En una ecografía de chequeo se ve en el polo superior del riñón izquierdo una lesión anecogénica de tres coma ocho centímetros, redonda, de pared imperceptible, con refuerzo acústico posterior y sin tabiques ni calcio. La función renal es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: tranquilizar y dar el alta; TAC con contraste; punción aspirativa; ecografía cada seis meses; o quistectomía laparoscópica. Piénsalo.',
        answer: 'Es la A. Cumple los cuatro criterios de quiste simple, así que es benigno. El tamaño no cambia la conducta. No necesita TAC, punción ni controles.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 35 años con poliquistosis renal autosómica dominante e hipertensión en tratamiento consulta por cefalea súbita e hiperaguda, "la peor de su vida", con vómitos explosivos y rigidez de nuca.',
      question: '¿Cuál es la complicación vascular subyacente más probable?',
      options: [
        { letter: 'A', text: 'Trombosis de la vena renal bilateral' },
        { letter: 'B', text: 'Rotura de aneurisma sacular del polígono de Willis con hemorragia subaracnoidea' },
        { letter: 'C', text: 'Encefalopatía hipertensiva con microhemorragias pontinas' },
        { letter: 'D', text: 'Rotura de quiste renal infectado con shock séptico' },
        { letter: 'E', text: 'Disección de aorta torácica tipo A' },
      ],
      correct: 'B',
      explanation: 'Entre 8 y 10% de los pacientes con PQRAD tiene aneurismas saculares del polígono de Willis (20% si hay historia familiar). Su rotura produce hemorragia subaracnoidea: cefalea en trueno, signos meníngeos y TAC de cerebro sin contraste urgente.',
      say: {
        stem: 'Un hombre de treinta y cinco años con poliquistosis renal e hipertensión consulta por una cefalea súbita, la peor de su vida, con vómitos explosivos y rigidez de nuca.',
        question: '¿Cuál es la complicación vascular subyacente más probable?',
        options: 'Las opciones: trombosis de la vena renal; rotura de aneurisma del polígono de Willis con hemorragia subaracnoidea; encefalopatía hipertensiva; rotura de un quiste infectado; o disección de aorta. Piénsalo.',
        answer: 'Es la B. La poliquistosis se asocia a aneurismas de Berry. La cefalea súbita con rigidez de nuca es una hemorragia subaracnoidea, y se confirma con un TAC de cerebro sin contraste urgente. La encefalopatía hipertensiva no da rigidez de nuca ni esa cefalea.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: quistes renales',
      cards: [
        { title: 'Quistes', tag: 'Eco y TAC', kind: 'key', items: [
          { t: 'Quiste simple típico: alta', d: 'Sin TAC ni control',
            say: 'Cerremos con las reglas de oro. Un quiste que cumple los criterios ecográficos de simple se tranquiliza y se da de alta.' },
          { t: 'Complejo: TAC y Bosniak', d: 'IIF controla; III y IV operan',
            say: 'Un quiste complejo va a TAC con contraste y se clasifica con Bosniak. El dos F se controla, y el tres y el cuatro se operan.' },
        ] },
        { title: 'Poliquistosis', tag: 'Hereditaria', kind: 'alert', items: [
          { t: 'Riñones grandes, HTA, familia', d: 'PKD1 es la más severa',
            say: 'Antecedente familiar, riñones grandes palpables, hipertensión y quistes en el hígado: poliquistosis autosómica dominante, sobre todo por PKD uno.' },
          { t: 'Aneurisma de Berry', d: 'Cefalea súbita: TAC de cerebro',
            say: 'La complicación a recordar es el aneurisma del polígono de Willis. Si te llevas una sola idea de hoy: un quiste simple se deja tranquilo, pero un quiste con realce se opera, y en el poliquístico una cefalea súbita es hemorragia subaracnoidea. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Quistes renales: de la ecografía a la conducta',
    root: N('start', 'Lesión quística renal en ecografía', 'Anecogénica o con detalles',
      'Una ecografía muestra una lesión quística en el riñón. Lo primero es ver si cumple los criterios de quiste simple.',
      ['Cumple los 4 criterios', N('ok', 'Tranquilizar y dar el alta', 'Bosniak I; sin seguimiento',
        'Es un quiste simple típico. No requiere TAC ni controles.')],
      ['Tabiques, calcio o sólido', N('do', 'TAC con contraste', 'Clasificar con Bosniak',
        'Un quiste complejo se estudia con TAC con contraste.',
        ['Bosniak I o II', N('ok', 'Sin seguimiento', 'Benignos',
          'Los dos primeros son benignos y no se siguen.')],
        ['Bosniak IIF', N('refer', 'TAC a los 6 y 12 meses', 'Riesgo cercano a 5%',
          'El dos F se controla con TAC a los seis y doce meses.')],
        ['Bosniak III o IV', N('alert', 'Cirugía', 'Nefrectomía parcial o radical',
          'Los de tabiques gruesos con realce o nódulos sólidos se operan.')],
      )],
      ['Riñones grandes y familia', N('refer', 'Poliquistosis: control de PA', 'IECA o ARA-II',
        'Con antecedente familiar y riñones grandes bilaterales, es una poliquistosis. Se controla la presión y se busca aneurisma si hay cefalea atípica o antecedente familiar.')],
    ),
  },
};
