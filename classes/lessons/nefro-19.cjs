// Clase 5.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-19). La diapositiva de acidosis
// usa lo que el mismo libro dice en nefro-11 (acidosis metabólica en ERC), porque nefro-19 no trae esa sección.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-19',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Lo que el riñón deja de fabricar: eritropoyetina, calcitriol y bicarbonato',
      say: 'Bienvenidos. En la clase anterior vimos que el GES cubre la eritropoyetina, el hierro, la vitamina D y los quelantes de fósforo. Hoy vemos para qué sirve cada uno: las complicaciones de la enfermedad renal crónica. Y la idea que ordena todo es simple: el riñón no solo filtra, también fabrica. Cuando se pierde, falta lo que fabricaba.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Lo que falta cuando se pierde riñón',
      nodes: [
        { id: 'erc', col: 0, row: 2, k: 'cause', t: 'Pérdida de masa renal', s: 'TFG < 60, sobre todo < 30' },
        { id: 'epo', col: 1, row: 0, k: 'mech', t: 'Menos eritropoyetina', s: 'Células peritubulares' },
        { id: 'ane', col: 2, row: 0, k: 'effect', t: 'Anemia', s: 'Normocítica, normocrómica' },
        { id: 'vd', col: 1, row: 2, k: 'mech', t: 'Retiene fósforo, no activa vitamina D', s: 'Falta 1-alfa-hidroxilasa' },
        { id: 'pth', col: 2, row: 2, k: 'effect', t: 'Hiperparatiroidismo secundario', s: 'CKD-MBD' },
        { id: 'nh4', col: 1, row: 4, k: 'mech', t: 'Menos amoniogénesis', s: 'No excreta ácido' },
        { id: 'aci', col: 2, row: 4, k: 'effect', t: 'Acidosis metabólica', s: 'Bicarbonato bajo' },
      ],
      edges: [
        { from: 'erc', to: 'epo' }, { from: 'epo', to: 'ane' },
        { from: 'erc', to: 'vd' }, { from: 'vd', to: 'pth' },
        { from: 'erc', to: 'nh4' }, { from: 'nh4', to: 'aci' },
      ],
      steps: [
        { show: ['erc'], note: 'Se alteran las funciones endocrinas',
          say: 'Cuando la filtración baja de sesenta, y sobre todo de treinta, no solo se acumulan toxinas. También se pierden las funciones endocrinas y metabólicas del riñón.' },
        { show: ['epo', 'ane'], note: 'Primera complicación',
          say: 'La primera es la eritropoyetina. La fabrican las células peritubulares del riñón, y si hay menos riñón hay menos eritropoyetina. El resultado es una anemia crónica.' },
        { show: ['vd', 'pth'], note: 'Segunda complicación',
          say: 'La segunda es el metabolismo mineral. El riñón que filtra poco retiene fósforo, y además deja de activar la vitamina D. Las paratiroides responden, y aparece un hiperparatiroidismo secundario. Es lo que se llama CKD-MBD, el trastorno mineral y óseo de la enfermedad renal crónica.' },
        { show: ['nh4', 'aci'], note: 'Tercera complicación',
          say: 'Y la tercera es el equilibrio ácido base. El riñón con menos nefronas fabrica menos amonio, excreta menos ácido, y el bicarbonato baja: una acidosis metabólica. Vamos una por una.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Anemia renal',
      title: 'Cómo es la anemia de la ERC',
      cards: [
        { title: 'Características', tag: 'Déficit de EPO', kind: 'criteria', items: [
          { t: 'Normocítica, normocrómica', d: 'VCM normal',
            say: 'La anemia de la enfermedad renal crónica es normocítica y normocrómica. No falta ningún ladrillo para fabricar glóbulos rojos; falta la orden de fabricarlos.' },
          { t: 'Arregenerativa', d: 'Índice reticulocitario < 2',
            say: 'Por eso es arregenerativa, con un índice reticulocitario bajo dos: la médula no está recibiendo el estímulo de la eritropoyetina.' },
        ] },
        { title: 'Pesquisa', tag: 'Etapas G3 a G5', kind: 'key', items: [
          { t: 'Hemograma y perfil de hierro', d: 'Periódico desde la etapa 3',
            say: 'Desde la etapa tres se pesquisa con hemograma y perfil de hierro en forma periódica. Y el perfil de hierro no es un detalle: es el que decide el primer paso del tratamiento.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Anemia renal',
      title: 'Primero hierro, después eritropoyetina',
      nodes: [
        { id: 'ane', col: 0, row: 1, k: 'start', t: 'Anemia en ERC', s: 'Normocítica, arregenerativa' },
        { id: 'fe', col: 1, row: 1, k: 'q', t: '¿Hierro repleto?', s: 'IST > 20 % y ferritina > 100' },
        { id: 'rep', col: 1, row: 3, k: 'mech', t: 'Reponer hierro', s: 'EV u oral; > 200 en hemodiálisis' },
        { id: 'epo', col: 2, row: 1, k: 'good', t: 'EPO o darbepoetina', s: 'Agente estimulante de la eritropoyesis' },
        { id: 'met', col: 3, row: 1, k: 'good', t: 'Meta Hb 10–11,5 g/dL', s: 'Máximo 12' },
        { id: 'no', col: 3, row: 3, k: 'trap', t: 'Nunca > 13 g/dL', s: 'ACV, infarto, trombosis de la FAV' },
      ],
      edges: [
        { from: 'ane', to: 'fe' }, { from: 'fe', to: 'rep', label: 'no' }, { from: 'rep', to: 'epo' },
        { from: 'fe', to: 'epo', label: 'sí' }, { from: 'epo', to: 'met' }, { from: 'met', to: 'no', label: 'no normalizar' },
      ],
      steps: [
        { show: ['ane'], note: 'La tentación es dar EPO de inmediato',
          say: 'Ahora el tratamiento. Si la causa es la falta de eritropoyetina, la tentación es darla de inmediato. Pero hay una regla de oro antes.' },
        { show: ['fe'], note: 'La regla de oro',
          say: 'Antes de indicar eritropoyetina es obligatorio evaluar los depósitos de hierro. La meta es una saturación de transferrina sobre veinte por ciento y una ferritina sobre cien.' },
        { show: ['rep'], note: 'EPO sin hierro no sirve',
          say: 'Si no se cumplen, primero se repone hierro, endovenoso u oral. En el paciente en hemodiálisis la meta de ferritina sube a doscientos. ¿Por qué? Porque dar eritropoyetina a un paciente ferropénico es ineficaz: le das la orden a la médula, pero no tiene con qué fabricar.' },
        { show: ['epo'], note: 'Con el hierro repleto',
          say: 'Con el hierro repleto, recién ahí se inicia un agente estimulante de la eritropoyesis: eritropoyetina recombinante o darbepoetina.' },
        { show: ['met'], note: 'No se busca una hemoglobina normal',
          say: 'Y la meta no es normalizar. Se busca una hemoglobina entre diez y once coma cinco, con un máximo de doce.' },
        { show: ['no'], note: 'La trampa del tema',
          say: 'Nunca se intenta llevarla sobre trece. Los grandes ensayos, TREAT y CHOIR, mostraron que eso aumenta los eventos cardiovasculares graves: accidente cerebrovascular, infarto, y trombosis de la fístula arteriovenosa. Esa cifra se pregunta.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'CKD-MBD',
      title: '¿Por qué sube la PTH?',
      nodes: [
        { id: 'p', col: 0, row: 0, k: 'cause', t: 'Retención de fósforo', s: 'Cae la filtración' },
        { id: 'fgf', col: 1, row: 0, k: 'mech', t: 'Sube FGF-23', s: 'Baja el calcio iónico' },
        { id: 'hid', col: 0, row: 2, k: 'cause', t: 'Déficit de 1-alfa-hidroxilasa', s: 'Menos parénquima' },
        { id: 'cal', col: 1, row: 2, k: 'mech', t: 'Sin calcitriol', s: '1,25-dihidroxivitamina D' },
        { id: 'pth', col: 2, row: 1, k: 'risk', t: 'PTH intacta alta', s: 'Hiperparatiroidismo secundario' },
        { id: 'hue', col: 3, row: 0, k: 'effect', t: 'Hueso', s: 'Osteítis fibrosa quística, dolor' },
        { id: 'vas', col: 3, row: 2, k: 'alert', t: 'Vasos y piel', s: 'Calcificaciones, calcifilaxis, prurito' },
      ],
      edges: [
        { from: 'p', to: 'fgf' }, { from: 'fgf', to: 'pth' }, { from: 'hid', to: 'cal' }, { from: 'cal', to: 'pth' },
        { from: 'pth', to: 'hue' }, { from: 'pth', to: 'vas' },
      ],
      steps: [
        { show: ['p', 'fgf'], note: 'Todo empieza por el fósforo',
          say: 'Veamos el trastorno mineral. Todo empieza con la retención de fósforo al bajar la filtración. Ese fósforo estimula el factor de crecimiento fibroblástico veintitrés, el FGF veintitrés, y baja el calcio iónico.' },
        { show: ['hid', 'cal'], note: 'El segundo golpe',
          say: 'Al mismo tiempo, se pierde la enzima uno alfa hidroxilasa del riñón. Sin ella, la vitamina D no pasa a su forma activa, el calcitriol, y el intestino absorbe menos calcio.' },
        { show: ['pth'], note: 'Tres estímulos, una respuesta',
          say: 'Hipocalcemia, hiperfosfatemia y falta de calcitriol: tres estímulos para las paratiroides, que responden aumentando masivamente la paratohormona. Eso es el hiperparatiroidismo secundario.' },
        { show: ['hue'], note: 'Resorción ósea',
          say: 'Esa PTH alta saca calcio del hueso: resorción ósea acelerada, osteítis fibrosa quística, fragilidad y dolor óseo.' },
        { show: ['vas'], note: 'Lo más grave',
          say: 'Y ese calcio y fósforo terminan donde no deben: calcificaciones de la capa media de las arterias, y su forma más grave, la calcifilaxis. También explica el prurito urémico intratable.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'CKD-MBD',
      title: 'PTH alta en G3–G4: el primer paso',
      nodes: [
        { id: 'pth', col: 0, row: 1, k: 'start', t: 'PTH elevada en ERC 3–4', s: 'Calcio y fósforo normales' },
        { id: 'vd', col: 1, row: 1, k: 'q', t: 'Medir 25-OH-vitamina D', s: 'Examen de elección' },
        { id: 'col', col: 2, row: 0, k: 'good', t: 'Colecalciferol', s: 'Si < 30 ng/mL' },
        { id: 'act', col: 3, row: 1, k: 'refer', t: 'Calcitriol, paricalcitol o cinacalcet', s: 'Si la PTH sigue alta' },
        { id: 'trap', col: 2, row: 2, k: 'trap', t: 'Calcitriol de entrada', s: 'Sin medir la 25-OH' },
      ],
      edges: [
        { from: 'pth', to: 'vd' }, { from: 'vd', to: 'col', label: 'baja' }, { from: 'col', to: 'act', label: 'persiste' },
        { from: 'vd', to: 'trap', label: 'error' },
      ],
      steps: [
        { show: ['pth'], note: 'El escenario típico del examen',
          say: 'Ahora el escenario típico del examen: un paciente en etapa tres o cuatro, con calcio y fósforo normales, y una PTH elevada. ¿Qué pides?' },
        { show: ['vd'], note: 'La vitamina D nutricional',
          say: 'La respuesta es medir la vitamina D nutricional, la veinticinco hidroxi vitamina D. Su déficit es muy frecuente, y por sí solo empuja la PTH hacia arriba.' },
        { show: ['col'], note: 'A veces basta con esto',
          say: 'Si está bajo treinta, se suplementa con colecalciferol, la vitamina D tres. En etapas moderadas, corregir ese déficit suele bastar para frenar la PTH.' },
        { show: ['act'], note: 'El segundo escalón',
          say: 'Si la PTH se mantiene elevada, viene el segundo escalón: calcitriol o análogos como el paricalcitol, o un calcimimético como el cinacalcet.' },
        { show: ['trap'], note: 'Saltarse el primer paso',
          say: 'La trampa es partir con calcitriol sin haber medido la veinticinco hidroxi vitamina D. Primero se descarta y se corrige el déficit nutricional.' },
      ],
    },

    {
      type: 'points',
      kicker: 'CKD-MBD',
      title: 'Controlar el fósforo',
      cards: [
        { title: 'Dieta', tag: 'Primer paso', kind: 'normal', items: [
          { t: 'Fósforo 800–1000 mg/día', d: 'Menos lácteos, cola, procesados',
            say: 'El otro frente es el fósforo. Se parte con dieta, restringiendo el fósforo a menos de ochocientos a mil miligramos al día.' },
        ] },
        { title: 'Quelantes', tag: 'Con las comidas', kind: 'pharma', items: [
          { t: 'Siempre con las comidas', d: 'Atrapan el fósforo de la dieta',
            say: 'Y se agregan quelantes de fósforo. Un detalle que se pregunta: se toman estrictamente con las comidas, porque su trabajo es atrapar el fósforo de la comida dentro del intestino. En ayunas no tienen nada que atrapar.' },
          { t: 'Carbonato o acetato de calcio', d: 'Si hay hipocalcemia',
            say: '¿Cuál elegir? Depende del calcio. Si el paciente tiene hipocalcemia, carbonato o acetato de calcio, que además aportan calcio.' },
          { t: 'Sevelamer', d: 'Si hay hipercalcemia o calcificaciones',
            say: 'Si tiene hipercalcemia o calcificaciones vasculares, se usa un quelante libre de calcio, como el sevelamer. Darle más calcio a ese paciente solo agravaría las calcificaciones.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Acidosis metabólica',
      title: 'El bicarbonato también baja',
      cards: [
        { title: 'Etapas G3 a G4', tag: 'Anion gap normal', kind: 'key', items: [
          { t: 'Menos amoniogénesis', d: 'El riñón no excreta ácido',
            say: 'La tercera complicación es la acidosis metabólica. En las etapas intermedias, con menos nefronas, cae la síntesis de amonio en el túbulo proximal, y el riñón no alcanza a excretar el ácido del día.' },
          { t: 'Hiperclorémica, AG 8–12', d: 'El riñón retiene cloro',
            say: 'Para mantener la electroneutralidad, retiene cloro. Por eso, en estas etapas, la acidosis es hiperclorémica, con anion gap normal. Esto conecta con la clase de acidosis metabólica, y es exactamente lo que pregunta la segunda pregunta real de hoy.' },
        ] },
        { title: 'Etapa G5', tag: 'Anion gap elevado', kind: 'alert', items: [
          { t: 'Se acumulan aniones', d: 'Fosfatos, sulfatos y uratos',
            say: 'Solo en la etapa terminal, con filtración bajo quince, se acumulan fosfatos, sulfatos y uratos, y ahí el anion gap sube. Es la uremia de la regla nemotécnica de las acidosis con anion gap elevado.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos las tres complicaciones en un solo árbol.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Metas y conductas',
      head: ['Parámetro', 'Qué pasa en la ERC', 'Meta', 'Intervención'],
      rows: [
        { cells: ['Hierro', 'Ferropenia asociada', 'IST > 20 %, ferritina > 100 (> 200 en HD)', 'Hierro EV u oral, antes de la EPO'],
          say: 'Repasemos las metas. Hierro: saturación sobre veinte y ferritina sobre cien, o sobre doscientos en hemodiálisis. Y va antes de la eritropoyetina, nunca después.' },
        { cells: ['Hemoglobina', 'Déficit de EPO', '10–11,5 g/dL (nunca > 13)', 'EPO o darbepoetina'],
          say: 'Hemoglobina: entre diez y once coma cinco. La trampa es buscar una hemoglobina normal, porque sobre trece aumentan el infarto, el accidente cerebrovascular y la trombosis de la fístula.' },
        { cells: ['Fósforo', 'Retención renal', 'Normal: 2,5–4,5 mg/dL en G3–G4', 'Dieta + quelantes con las comidas'],
          say: 'Fósforo: hacia la normalidad, con dieta y quelantes tomados con las comidas.' },
        { cells: ['Calcio', 'Hipocalcemia por falta de calcitriol', '8,5–10,2 mg/dL', 'Evitar hipercalcemia'],
          say: 'Calcio: en rango normal, evitando la hipercalcemia. Si sube, el quelante pasa a ser uno sin calcio, como el sevelamer.' },
        { cells: ['25-OH-vitamina D', 'Déficit nutricional frecuente', '> 30 ng/mL', 'Colecalciferol'],
          say: 'La veinticinco hidroxi vitamina D: sobre treinta, y si falta, colecalciferol. Es el primer examen ante una PTH alta.' },
        { cells: ['PTH intacta', 'Hiperparatiroidismo secundario', '2–9 veces el límite normal en G5D', 'Calcitriol, paricalcitol o cinacalcet'],
          say: 'Y la PTH: en diálisis se acepta entre dos y nueve veces el límite normal. Si persiste alta pese a corregir lo anterior, calcitriol, paricalcitol o cinacalcet.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 58 años con ERC en hemodiálisis crónica. Hemoglobina 8,8 g/dL, VCM normal. Cinética de hierro: saturación de transferrina 14 % y ferritina 65 ng/mL.',
      question: '¿Cuál es la conducta inicial más adecuada para su anemia?',
      options: [
        { letter: 'A', text: 'Hierro endovenoso hasta IST > 20 % y ferritina > 200 ng/mL' },
        { letter: 'B', text: 'Eritropoyetina en dosis plenas como monoterapia' },
        { letter: 'C', text: 'Transfusión inmediata de 2 unidades de glóbulos rojos' },
        { letter: 'D', text: 'Mielograma para descartar aplasia pura de serie roja' },
        { letter: 'E', text: 'Ácido fólico en dosis altas como único tratamiento' },
      ],
      correct: 'A',
      explanation: 'Anemia de la ERC con ferropenia concomitante (IST < 20 %, ferritina < 200 en hemodiálisis). Dar EPO sin hierro es ineficaz (resistencia a EPO): primero se repone hierro endovenoso hasta las metas, y luego se inicia o titula la EPO con meta de Hb 10–11,5 g/dL.',
      say: {
        stem: 'Vamos al caso. Mujer de cincuenta y ocho años en hemodiálisis crónica, con una hemoglobina de ocho coma ocho y un volumen corpuscular normal. Su saturación de transferrina es de catorce por ciento y su ferritina, de sesenta y cinco.',
        question: '¿Cuál es la conducta inicial más adecuada para su anemia?',
        options: 'Las alternativas: hierro endovenoso hasta las metas, eritropoyetina en dosis plenas sola, transfusión inmediata, mielograma, o ácido fólico. Piénsalo.',
        answer: 'Es la A. La anemia es renal, pero tiene además una ferropenia: saturación bajo veinte y ferritina bajo doscientos, que es la meta en hemodiálisis. Primero se repone el hierro. La B es la trampa: la eritropoyetina es el tratamiento de la anemia renal, pero sin hierro la médula no tiene con qué responder. Y la transfusión no corresponde en una anemia crónica sin inestabilidad.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 140',
      stem: 'Un paciente de 64 años, con antecedente de insuficiencia renal crónica, con clearence de 40 ml/min se realiza exámenes de control que muestran fósforo: 4,0 mg/dl, calcio: 8,5, PTH: 120 pg/ml (VN: menor a 55) y TSH: 4,0 UI/L.',
      question: '¿Cuál es el examen de elección para proseguir el estudio?',
      options: [
        { letter: 'A', text: 'Niveles plasmáticos de 25-OH-vitamina D' },
        { letter: 'B', text: 'Niveles de T4 libre' },
        { letter: 'C', text: 'Calciuria de 24 horas' },
        { letter: 'D', text: 'Magnesemia' },
        { letter: 'E', text: 'Bicarbonato plasmático' },
      ],
      correct: 'A',
      explanation: 'ERC G3b con PTH elevada y calcio y fósforo normales: hiperparatiroidismo secundario inicial. El examen de elección es la 25-OH-vitamina D; si está < 30 ng/mL se suplementa con colecalciferol antes de plantear calcitriol o análogos.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Paciente de sesenta y cuatro años con insuficiencia renal crónica y un clearence de cuarenta. Tiene fósforo y calcio normales, una PTH de ciento veinte, más del doble de lo normal, y una TSH normal.',
        question: '¿Cuál es el examen de elección para proseguir el estudio?',
        options: 'Las opciones: veinticinco hidroxi vitamina D, T cuatro libre, calciuria de veinticuatro horas, magnesemia, o bicarbonato plasmático. Piénsalo.',
        answer: 'Es la A. Un clearence de cuarenta es una etapa tres b, y la PTH alta con calcio y fósforo normales es un hiperparatiroidismo secundario inicial. El primer paso es medir la veinticinco hidroxi vitamina D, porque si está baja, suplementarla puede bastar. La calciuria es el distractor: mide cuánto calcio se pierde, pero no cambia la conducta. Y la TSH normal te la dan para que no pienses en el tiroides.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 6',
      stem: 'Un paciente de 66 años con antecedente de insuficiencia renal crónica, en etapa IIIB, con creatinina estable en 1,8 mg/dl y clearence de creatinina estimado de 35 ml/min. Se realiza exámenes de laboratorio que muestran sodio: 138 mEq/L, cloro: 102 mEq/L potasio: 4,8 mEq/L, bicarbonato plasmático: 16 mEq/L y anion gap: 10.',
      question: '¿Cuál es la causa más probable de sus alteraciones?',
      options: [
        { letter: 'A', text: 'Acumulación de ácidos orgánicos' },
        { letter: 'B', text: 'Disminución de la producción de bicarbonato' },
        { letter: 'C', text: 'Cetosis' },
        { letter: 'D', text: 'Acumulación de ácido úrico' },
        { letter: 'E', text: 'Intoxicación por medicamentos' },
      ],
      correct: 'B',
      explanation: 'Bicarbonato bajo con anion gap normal (10): acidosis metabólica hiperclorémica. En la ERC G3–G4, la menor masa de nefronas reduce la amoniogénesis y la regeneración de bicarbonato, con retención de cloro. La acumulación de ácidos orgánicos (con AG elevado) aparece recién en la etapa G5.',
      say: {
        stem: 'Y otra real, del EUNACOM de julio de dos mil veinticuatro. Paciente de sesenta y seis años con insuficiencia renal crónica etapa tres b, clearence de treinta y cinco. Tiene un bicarbonato de dieciséis y un anion gap de diez.',
        question: '¿Cuál es la causa más probable de sus alteraciones?',
        options: 'Las opciones: acumulación de ácidos orgánicos, disminución de la producción de bicarbonato, cetosis, acumulación de ácido úrico, o intoxicación por medicamentos. Piénsalo.',
        answer: 'Es la B. Bicarbonato bajo con anion gap de diez, que es normal: una acidosis hiperclorémica. En la etapa tres, el riñón con menos nefronas fabrica menos amonio y regenera menos bicarbonato. La A es la trampa: la acumulación de ácidos orgánicos subiría el anion gap, y eso en la enfermedad renal aparece recién en la etapa cinco.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Anemia', tag: 'Hierro antes que EPO', kind: 'pharma', items: [
          { t: 'Primero hierro: IST > 20 %, ferritina > 100', d: 'Ferritina > 200 en hemodiálisis',
            say: 'Cerremos con las reglas de oro. En la anemia renal, primero se repone el hierro, hasta una saturación sobre veinte y una ferritina sobre cien, o doscientos en hemodiálisis.' },
          { t: 'EPO con meta Hb 10–11,5', d: 'Nunca sobre 13',
            say: 'Después, eritropoyetina, con meta de hemoglobina entre diez y once coma cinco, y nunca sobre trece.' },
        ] },
        { title: 'CKD-MBD', tag: 'Fósforo y vitamina D', kind: 'key', items: [
          { t: 'PTH alta: medir 25-OH-vitamina D', d: 'Colecalciferol si < 30 ng/mL',
            say: 'Ante una PTH alta en etapa tres o cuatro, el primer examen es la veinticinco hidroxi vitamina D.' },
          { t: 'Quelantes con las comidas', d: 'Calcio si hipocalcemia; sevelamer si hipercalcemia',
            say: 'Los quelantes de fósforo van con las comidas: calcio si hay hipocalcemia, sevelamer si hay hipercalcemia o calcificaciones.' },
        ] },
        { title: 'Acidosis', tag: 'Anion gap', kind: 'alert', items: [
          { t: 'G3–G4: anion gap normal', d: 'G5: anion gap elevado',
            say: 'Y la acidosis de la etapa tres y cuatro tiene anion gap normal. Si te llevas una sola idea de hoy: el riñón que se pierde deja de fabricar, y cada complicación se trata reponiendo lo que falta, en el orden correcto. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Complicaciones de la ERC: qué reponer y en qué orden',
    root: N('start', 'ERC etapa G3 a G5', 'Hemograma, hierro, Ca, P, PTH, 25-OH-vit D',
      'Paciente con enfermedad renal crónica de etapa tres a cinco. En sus controles pides hemograma, perfil de hierro, calcio, fósforo, PTH y veinticinco hidroxi vitamina D.',
      ['', N('q', '¿Qué alteración encuentras?', 'Anemia · PTH alta · fósforo alto',
        'Según lo que encuentres, el camino es distinto.',
        ['Anemia', N('q', '¿Hierro repleto?', 'IST > 20 % y ferritina > 100',
          'Si hay anemia, lo primero es mirar el hierro: ¿saturación sobre veinte y ferritina sobre cien?',
          ['NO', N('do', 'Reponer hierro', 'EV u oral',
            'Si no, se repone hierro, endovenoso u oral, antes de pensar en eritropoyetina.')],
          ['SÍ', N('ok', 'EPO o darbepoetina', 'Meta Hb 10–11,5 g/dL',
            'Con el hierro repleto, eritropoyetina o darbepoetina, con meta de hemoglobina entre diez y once coma cinco, nunca sobre trece.')])],
        ['PTH alta', N('q', '¿25-OH-vitamina D < 30?', 'Primer examen',
          'Si la PTH está alta, el primer examen es la veinticinco hidroxi vitamina D. ¿Está bajo treinta?',
          ['SÍ', N('do', 'Colecalciferol', 'Vitamina D3',
            'Si está baja, se suplementa con colecalciferol, y muchas veces eso basta.')],
          ['NO o persiste', N('refer', 'Calcitriol o cinacalcet', 'O paricalcitol',
            'Si está normal o la PTH sigue alta, se pasa a calcitriol, paricalcitol o cinacalcet.')])],
        ['Fósforo alto', N('q', '¿Cómo está el calcio?', 'Elige el quelante',
          'Si el fósforo está alto, dieta baja en fósforo y un quelante con las comidas. El calcio decide cuál.',
          ['Bajo', N('do', 'Carbonato de calcio', 'O acetato de calcio',
            'Con hipocalcemia, carbonato o acetato de calcio.')],
          ['Alto o calcificaciones', N('do', 'Sevelamer', 'Quelante sin calcio',
            'Con hipercalcemia o calcificaciones vasculares, sevelamer, un quelante sin calcio.')])])]),
  },
};
