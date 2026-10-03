// Clase 7.19 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-19).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-19',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Medir el examen correcto, reconocer la osteomalacia y reponer con la dosis justa',
      say: 'Bienvenidos. En la clase anterior vimos un hueso con poca masa, la osteoporosis. Hoy vemos un hueso que no se mineraliza: el déficit de vitamina D, que en el adulto da osteomalacia y en el niño, raquitismo. El examen pregunta tres cosas: cuál es el examen correcto para medir la vitamina D, cómo se ve el laboratorio de la osteomalacia, y con qué dosis se repone. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiología',
      title: 'De la piel al calcitriol',
      nodes: [
        { id: 'sol', col: 0, row: 1, k: 'cause', t: 'Piel + radiación UV-B', s: '80–90 % del aporte' },
        { id: 'die', col: 0, row: 3, k: 'cause', t: 'Dieta y suplementos', s: 'El resto' },
        { id: 'd3', col: 1, row: 2, k: 'mech', t: 'Colecalciferol (D3)', s: 'Desde el 7-dehidrocolesterol' },
        { id: 'hig', col: 2, row: 2, k: 'mech', t: 'Hígado: 25-hidroxilasa', s: '25(OH)D o calcidiol' },
        { id: 'ri', col: 3, row: 2, k: 'mech', t: 'Riñón: 1-alfa-hidroxilasa', s: 'Estimulada por PTH e hipofosfemia' },
        { id: 'cal', col: 4, row: 2, k: 'good', t: 'Calcitriol', s: 'Absorbe calcio y fósforo intestinal' },
      ],
      edges: [
        { from: 'sol', to: 'd3' }, { from: 'die', to: 'd3' }, { from: 'd3', to: 'hig' },
        { from: 'hig', to: 'ri' }, { from: 'ri', to: 'cal' },
      ],
      steps: [
        { show: ['sol'], note: 'La vitamina D se fabrica con el sol',
          say: 'Partamos por el origen, porque explica quién se queda sin vitamina D. Entre el ochenta y el noventa por ciento se fabrica en la piel: la radiación ultravioleta B del sol transforma el siete dehidrocolesterol en colecalciferol, la vitamina D tres.' },
        { show: ['die', 'd3'], note: 'Sin sol, la dieta no alcanza',
          say: 'El resto viene de la dieta o de los suplementos. Por eso el paciente típico del déficit es el adulto mayor institucionalizado, que casi no ve el sol, y más aún en el sur de Chile, donde la radiación es baja.' },
        { show: ['hig'], note: 'Calcidiol: la forma de depósito',
          say: 'El colecalciferol pasa al hígado, donde la veinticinco hidroxilasa lo convierte en veinticinco hidroxivitamina D, o calcidiol. Esta es la forma de depósito. Guárdala, porque es la que vamos a medir.' },
        { show: ['ri'], note: 'La misma enzima de la clase de hipocalcemia',
          say: 'Luego, en el túbulo proximal del riñón, la uno alfa hidroxilasa la activa. Y esa enzima se enciende con la paratohormona y con el fósforo bajo. Es la misma enzima que vimos en la hipocalcemia: sin paratohormona, no hay activación.' },
        { show: ['cal'], note: 'Sin calcitriol, el hueso no se mineraliza',
          say: 'El producto final es el calcitriol, la forma hormonal activa, que absorbe calcio y fósforo en el intestino. Sin ese calcio y ese fósforo, el hueso nuevo queda sin mineralizar.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Regla de laboratorio',
      title: '¿Por qué se mide la 25(OH)D y no el calcitriol?',
      nodes: [
        { id: 'def', col: 0, row: 1, k: 'start', t: 'Déficit de vitamina D', s: 'Depósitos vacíos' },
        { id: 'pth', col: 1, row: 1, k: 'mech', t: 'Sube la PTH', s: 'Hiperparatiroidismo secundario' },
        { id: 'enz', col: 2, row: 1, k: 'mech', t: 'Estimula la 1-alfa-hidroxilasa', s: 'Activa lo poco que queda' },
        { id: 'c125', col: 3, row: 0, k: 'trap', t: 'Calcitriol normal o alto', s: 'Vida media de 4–6 horas' },
        { id: 'c25', col: 3, row: 2, k: 'good', t: '25(OH)D baja', s: 'Vida media de 2–3 semanas' },
      ],
      edges: [
        { from: 'def', to: 'pth' }, { from: 'pth', to: 'enz' },
        { from: 'enz', to: 'c125', label: 'engaña' }, { from: 'enz', to: 'c25', label: 'refleja' },
      ],
      steps: [
        { show: ['def', 'pth'], note: 'El cuerpo compensa con PTH',
          say: 'Ahora, la regla de laboratorio que más se pregunta. Cuando falta vitamina D, baja el calcio que se absorbe, y la paratiroides responde: sube la paratohormona. Es un hiperparatiroidismo secundario.' },
        { show: ['enz'], note: 'La PTH exprime los depósitos',
          say: 'Esa paratohormona estimula la uno alfa hidroxilasa del riñón, que activa todo lo que encuentra, a costa de vaciar los depósitos.' },
        { show: ['c125'], note: 'Trampa: pedir calcitriol',
          say: 'Resultado: el calcitriol puede salir normal, o incluso alto, justo cuando los depósitos están vacíos. Además dura solo cuatro a seis horas en la sangre. Medir calcitriol para buscar un déficit es la trampa.' },
        { show: ['c25'], note: 'El examen de elección es la 25(OH)D',
          say: 'En cambio, la veinticinco hidroxivitamina D dura dos a tres semanas y refleja fielmente el sol y la dieta. Por eso es el examen de elección, sin discusión, para evaluar las reservas de vitamina D.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Cómo se interpreta la 25(OH)D',
      cards: [
        { title: 'Déficit', tag: 'Bajo 30 ng/mL', kind: 'alert', items: [
          { t: 'Deficiencia severa: < 10–12 ng/mL', d: 'Riesgo de osteomalacia y miopatía',
            say: 'Veamos cómo se lee el resultado. Bajo diez a doce nanogramos por mililitro es una deficiencia severa: ahí está el riesgo inminente de osteomalacia, raquitismo y miopatía proximal.' },
          { t: 'Deficiencia: < 20 ng/mL', d: 'Equivale a 50 nmol/L',
            say: 'Bajo veinte es deficiencia. Ese es el corte que decide la dosis de carga, así que grábatelo.' },
          { t: 'Insuficiencia: 20 a 29 ng/mL', d: 'Zona intermedia',
            say: 'Entre veinte y veintinueve es insuficiencia, una zona intermedia.' },
        ] },
        { title: 'Suficiencia y exceso', tag: 'Meta y techo', kind: 'normal', items: [
          { t: 'Suficiencia: 30 a 50 ng/mL', d: 'Meta en el adulto mayor',
            say: 'Entre treinta y cincuenta es lo óptimo. En el adulto mayor, estar sobre treinta mejora la fuerza muscular proximal y reduce las caídas y las fracturas.' },
          { t: 'Toxicidad: > 100–150 ng/mL', d: 'Hipercalcemia, hipercalciuria, nefrocalcinosis',
            say: 'Y sobre cien a ciento cincuenta hay toxicidad, con hipercalcemia, hipercalciuria y nefrocalcinosis. Aparece con megadosis indiscriminadas: más no siempre es mejor.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Del déficit a la osteomalacia',
      nodes: [
        { id: 'def', col: 0, row: 1, k: 'cause', t: 'Déficit severo y prolongado', s: '25(OH)D < 10–15 ng/mL' },
        { id: 'ca', col: 1, row: 1, k: 'mech', t: 'Menos absorción de calcio', s: 'Calcio normal-bajo' },
        { id: 'pth', col: 2, row: 0, k: 'mech', t: 'PTH alta', s: 'Fosfaturia: fósforo bajo' },
        { id: 'ost', col: 2, row: 2, k: 'mech', t: 'Osteoide sin mineralizar', s: 'Fosfatasas alcalinas altas' },
        { id: 'adu', col: 3, row: 1, k: 'risk', t: 'Osteomalacia', s: 'Adulto: cartílagos cerrados' },
        { id: 'nin', col: 3, row: 3, k: 'risk', t: 'Raquitismo', s: 'Niño en crecimiento' },
      ],
      edges: [
        { from: 'def', to: 'ca' }, { from: 'ca', to: 'pth' }, { from: 'ca', to: 'ost' },
        { from: 'pth', to: 'adu' }, { from: 'ost', to: 'adu' }, { from: 'ost', to: 'nin' },
      ],
      steps: [
        { show: ['def', 'ca'], note: 'Falta la materia prima',
          say: 'Veamos qué pasa cuando el déficit es severo y se prolonga. Sin calcitriol, el intestino absorbe menos calcio, y el calcio en sangre queda normal bajo, o francamente bajo.' },
        { show: ['pth'], note: 'La PTH bota fósforo por la orina',
          say: 'La paratohormona sube para defender el calcio. Pero tiene un costo: aumenta la pérdida de fósforo por la orina. Por eso el fósforo sale bajo. Fíjate que el fósforo bajo es la huella de esa paratohormona alta.' },
        { show: ['ost'], note: 'FA alta: el sello de la osteomalacia',
          say: 'Mientras tanto, los osteoblastos siguen fabricando matriz, el osteoide, pero sin calcio ni fósforo esa matriz no se mineraliza. Ese hueso trabajando en vano eleva las fosfatasas alcalinas, el sello distintivo de la enfermedad.' },
        { show: ['adu', 'nin'], note: 'Misma enfermedad, distinta edad',
          say: 'Si esto ocurre en un adulto, con los cartílagos de crecimiento ya cerrados, es osteomalacia. Si ocurre en un niño que está creciendo, es raquitismo. Es la misma falla de mineralización a distinta edad.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Cómo se ve la osteomalacia',
      cards: [
        { title: 'Síntomas', tag: 'Hueso y músculo', kind: 'criteria', items: [
          { t: 'Dolor óseo sordo y continuo', d: 'Pelvis, columna y costillas',
            say: 'Veamos cómo llega el paciente. Tiene un dolor óseo sordo, continuo y difuso, sobre todo en la pelvis, la columna y las costillas, además de fragilidad del esqueleto.' },
          { t: 'Miopatía proximal dolorosa', d: 'Marcha de pato; no se para de la silla',
            say: 'Y una miopatía proximal: le cuesta pararse de una silla o subir peldaños, y camina balanceándose, con marcha de pato o anadeante. Esa debilidad proximal con dolor óseo es la combinación que te tiene que hacer pensar en vitamina D.' },
        ] },
        { title: 'Radiografía', tag: 'Patognomónico', kind: 'key', items: [
          { t: 'Líneas de Looser-Milkman', d: 'Seudofracturas perpendiculares a la cortical',
            say: 'En la radiografía, el signo patognomónico son las seudofracturas o líneas de Looser-Milkman: bandas radiolúcidas estrechas, perpendiculares a la cortical.' },
          { t: 'Cuello femoral, pubis, escápula, costillas', d: 'Microfracturas reparadas con osteoide',
            say: 'Aparecen en el cuello del fémur, las ramas pubianas, la escápula o las costillas. Son microfracturas que se repararon con osteoide sin mineralizar.' },
        ] },
        { title: '¿A quién sospechar?', tag: 'Perfil de riesgo', kind: 'alert', items: [
          { t: 'Adulto mayor institucionalizado', d: 'Sin sol, en latitudes australes',
            say: '¿En quién lo sospechas? En el adulto mayor institucionalizado, sin exposición solar.' },
          { t: 'Malabsorción', d: 'No absorbe lo que come',
            say: 'Y en el paciente con malabsorción intestinal, que aunque coma bien, no absorbe la vitamina D. Esto aparece en una de las preguntas reales.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'La diferencia que más se pregunta',
      title: 'El laboratorio de las enfermedades óseas',
      head: ['Enfermedad', 'Calcio y fósforo', 'Fosfatasa alcalina', 'PTH y 25(OH)D'],
      rows: [
        { cells: ['Osteomalacia o raquitismo', 'Ca normal-bajo · P bajo', 'Elevada', 'PTH alta · 25(OH)D muy baja'],
          say: 'Este cuadro se pregunta mucho, porque el examen te da un laboratorio y tú pones el nombre. Osteomalacia: calcio normal bajo, fósforo bajo, fosfatasas alcalinas altas, paratohormona alta y vitamina D muy baja.' },
        { cells: ['Osteoporosis primaria', 'Normales', 'Normal', 'PTH normal · 25(OH)D normal o insuficiente'],
          say: 'La osteoporosis primaria, en cambio, tiene un laboratorio normal. Ese contraste es clave: si la fosfatasa alcalina está alta, no es solo osteoporosis.' },
        { cells: ['Enfermedad de Paget ósea', 'Normales', 'Masivamente elevada, más de 5 veces', 'Normales'],
          say: 'La enfermedad de Paget del hueso tiene todo normal salvo la fosfatasa alcalina, que sube de forma masiva, más de cinco veces.' },
        { cells: ['Hiperparatiroidismo primario', 'Ca alto · P bajo', 'Normal o levemente alta', 'PTH alta o inapropiada'],
          say: 'Y el hiperparatiroidismo primario, de la clase de hipercalcemia: fósforo bajo y paratohormona alta, igual que la osteomalacia. ¿Qué los separa? El calcio. En el primario está alto; en la osteomalacia, normal o bajo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Reposición: carga y mantención',
      cards: [
        { title: 'Deficiencia bajo 20 ng/mL', tag: 'Carga', kind: 'pharma', items: [
          { t: 'Colecalciferol 50.000 UI semanal', d: 'Por 8 semanas, vía oral',
            say: 'Vamos al tratamiento. En la deficiencia, bajo veinte, se hace una carga para repletar rápido los depósitos: colecalciferol, cincuenta mil unidades por boca una vez a la semana, durante ocho semanas.' },
          { t: 'O 6.000 UI al día por 8 semanas', d: 'Esquema diario equivalente',
            say: 'La alternativa es seis mil unidades al día, también por ocho semanas.' },
          { t: 'Luego 1.000–2.000 UI/día', d: 'Mantención indefinida + calcio 1.000 mg/día',
            say: 'Después viene la mantención, de mil a dos mil unidades al día, de forma indefinida, junto con mil miligramos diarios de calcio elemental.' },
        ] },
        { title: 'Insuficiencia 20 a 29 ng/mL', tag: 'Sin carga', kind: 'normal', items: [
          { t: 'Colecalciferol 1.000–2.000 UI/día', d: 'Suplementación diaria',
            say: 'En la insuficiencia, entre veinte y veintinueve, no hace falta la carga: basta la suplementación diaria, de mil a dos mil unidades.' },
        ] },
        { title: 'Seguimiento y alertas', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Control de 25(OH)D a los 3–4 meses', d: 'Más calcemia y fosfemia',
            say: 'Se controla la veinticinco hidroxivitamina D a los tres o cuatro meses de iniciada la carga, junto con la calcemia y la fosfemia.' },
          { t: 'Nada de bifosfonatos antes de reponer', d: 'Empeoran la osteomalacia activa',
            say: 'Y una conexión con la clase anterior: en la osteomalacia activa no corregida, los bifosfonatos están contraindicados, porque empeoran la desmineralización. Primero se repone la vitamina D.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Evaluar reservas de vitamina D', '25(OH)D sérica', 'Pedir calcitriol'],
          say: 'Repasemos las trampas. Para evaluar las reservas de vitamina D se pide la veinticinco hidroxivitamina D. Pedir calcitriol es el error clásico, porque sale normal por la paratohormona.' },
        { cells: ['PTH alta con calcio normal o bajo', 'Medir 25(OH)D', 'Llamarlo hiperparatiroidismo primario'],
          say: 'Paratohormona alta con calcio normal o bajo: antes de pensar en la paratiroides, mide la vitamina D. El primario tiene el calcio alto.' },
        { cells: ['Dolor óseo, miopatía, FA alta, P bajo', 'Osteomalacia', 'Osteoporosis'],
          say: 'Dolor óseo, debilidad proximal, fosfatasas altas y fósforo bajo: es osteomalacia. La osteoporosis primaria tiene el laboratorio normal.' },
        { cells: ['25(OH)D bajo 20 ng/mL', '50.000 UI semanal por 8 semanas', 'Dosis de mantención de entrada'],
          say: 'Bajo veinte, carga de cincuenta mil unidades a la semana por ocho semanas. Partir solo con la mantención deja los depósitos vacíos por mucho tiempo.' },
        { cells: ['Osteomalacia no corregida', 'Reponer vitamina D + calcio', 'Iniciar bifosfonatos'],
          say: 'Y en la osteomalacia sin corregir, primero vitamina D y calcio. El bifosfonato la empeora.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 78 años, residente de un ELEAM en Valdivia, sin exposición solar. Astenia, dolor difuso en pelvis y piernas, debilidad proximal y marcha anadeante. Ca 8,4 mg/dL (albúmina 3,9), P 2,0 mg/dL, FA 340 U/L (VN < 120), PTH 115 pg/mL, 25(OH)D 8 ng/mL. Rx de pelvis: bandas radiolúcidas perpendiculares a la cortical en ambos cuellos femorales.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Alendronato 70 mg semanal más calcio' },
        { letter: 'B', text: 'Colecalciferol 50.000 UI semanal por 8 semanas más calcio 1.000 mg/día' },
        { letter: 'C', text: 'Colecalciferol 800 UI/día sin calcio' },
        { letter: 'D', text: 'Paratiroidectomía' },
        { letter: 'E', text: 'Solicitar 1,25(OH)2D antes de tratar' },
      ],
      correct: 'B',
      explanation: 'Dolor óseo, miopatía proximal, P bajo, FA y PTH altas, 25(OH)D de 8 y líneas de Looser-Milkman: osteomalacia por déficit severo de vitamina D. Carga de colecalciferol 50.000 UI semanal por 8 semanas con calcio, y luego mantención 1.000–2.000 UI/día. Los bifosfonatos están contraindicados en la osteomalacia no corregida.',
      say: {
        stem: 'Vamos con un caso. Mujer de setenta y ocho años que vive en un establecimiento de larga estadía en Valdivia, sin sol. Tiene astenia, dolor difuso en pelvis y piernas, le cuesta pararse de la silla y camina como pato. Calcio ocho coma cuatro, fósforo dos, fosfatasas alcalinas de trescientos cuarenta, paratohormona de ciento quince y vitamina D de ocho. En la radiografía, bandas radiolúcidas en ambos cuellos femorales.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: alendronato con calcio, carga de colecalciferol semanal por ocho semanas con calcio, colecalciferol en dosis baja sin calcio, paratiroidectomía, o pedir calcitriol antes de tratar. Piénsalo.',
        answer: 'La respuesta es la B. Todo calza con osteomalacia: dolor óseo, miopatía, fósforo bajo, fosfatasas altas y líneas de Looser-Milkman, con una vitamina D de ocho. Bajo veinte, carga de cincuenta mil unidades semanales por ocho semanas, con calcio. La trampa es la A: el hueso frágil tienta a dar alendronato, pero en la osteomalacia no corregida lo empeora. Y la paratohormona alta es secundaria: no se opera.',
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
      explanation: 'PTH alta con calcio normal-bajo: hiperparatiroidismo secundario. El examen para evaluar los depósitos de vitamina D es la 25(OH)D; su déficit empeora el cuadro y debe descartarse como causa.',
      say: {
        stem: 'Ahora las preguntas reales. Esta es del EUNACOM de diciembre de dos mil diecinueve. Paciente de sesenta y cuatro años con insuficiencia renal crónica, clearance de cuarenta. Tiene fósforo de cuatro, calcio de ocho coma cinco, paratohormona de ciento veinte, y TSH normal.',
        question: '¿Cuál es el examen de elección para seguir el estudio?',
        options: 'Las opciones: veinticinco hidroxivitamina D, T cuatro libre, calciuria de veinticuatro horas, magnesemia, o bicarbonato. Piénsalo.',
        answer: 'Es la A, la veinticinco hidroxivitamina D. Paratohormona alta con el calcio en el límite bajo es un hiperparatiroidismo secundario, y lo primero es saber si falta vitamina D, que lo agrava. Fíjate que la alternativa dice veinticinco hidroxi, no calcitriol: justamente la regla de hoy. La calciuria tienta, pero no te dice cuánta vitamina D tiene.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 60',
      stem: 'Ca normal PTH elevada vitamina D baja P bajo, calcio urinario bajo + anemia Ferritina 5.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hiperparatiroidismo primario' },
        { letter: 'B', text: 'Hiperparatiroidismo Terciario' },
        { letter: 'C', text: 'Enfermedad celiaca' },
        { letter: 'D', text: 'Osteoporosis' },
        { letter: 'E', text: 'Ninguna de las anteriores es correcta' },
      ],
      correct: 'C',
      explanation: 'Calcio normal, PTH alta, P bajo y vitamina D baja: hiperparatiroidismo secundario por déficit de vitamina D. La ferropenia severa asociada orienta a malabsorción: enfermedad celíaca.',
      say: {
        stem: 'La siguiente es del EUNACOM de diciembre de dos mil veinticuatro, y es muy corta. Calcio normal, paratohormona elevada, vitamina D baja, fósforo bajo, calcio urinario bajo, y además anemia con una ferritina de cinco.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hiperparatiroidismo primario, hiperparatiroidismo terciario, enfermedad celíaca, osteoporosis, o ninguna de las anteriores. Piénsalo.',
        answer: 'Es la C, enfermedad celíaca. Primero lee el laboratorio: calcio normal, paratohormona alta, fósforo bajo y vitamina D baja es el perfil del déficit de vitamina D con hiperparatiroidismo secundario. ¿Y por qué le falta vitamina D y también hierro? Porque no los absorbe: malabsorción. La trampa es el primario, que tendría el calcio alto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 146',
      stem: 'Una lactante de 7 meses se alimenta con 4 mamaderas al día, de leche purita fortificada al 7,5% más cereal al 5%, más 1 sopa puré.',
      question: '¿Qué suplemento alimenticio debería estar recibiendo?',
      options: [
        { letter: 'A', text: 'Tiamina' },
        { letter: 'B', text: 'Zink' },
        { letter: 'C', text: 'Vitamina A' },
        { letter: 'D', text: 'Vitamina D' },
        { letter: 'E', text: 'Ácido fólico' },
      ],
      correct: 'D',
      explanation: 'En el lactante, el suplemento clave es la vitamina D, que previene el raquitismo, la forma infantil del déficit.',
      say: {
        stem: 'Y la última, del EUNACOM de diciembre de dos mil diecisiete, para ver el otro extremo de la vida. Una lactante de siete meses que toma cuatro mamaderas de leche Purita fortificada con cereal, más una sopa puré.',
        question: '¿Qué suplemento debería estar recibiendo?',
        options: 'Las opciones: tiamina, zinc, vitamina A, vitamina D, o ácido fólico. Piénsalo.',
        answer: 'Es la D, vitamina D. En el lactante, el suplemento importante es la vitamina D, porque su déficit, en un hueso que está creciendo, es el raquitismo. La vitamina A tienta, porque suele venir en el mismo preparado, pero la que importa aquí es la D.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Laboratorio', tag: 'El examen correcto', kind: 'key', items: [
          { t: 'Se mide la 25(OH)D', d: 'Nunca el calcitriol para buscar déficit',
            say: 'Cerremos con las reglas de oro. Para evaluar la vitamina D se mide la veinticinco hidroxivitamina D, nunca el calcitriol, que la paratohormona mantiene normal.' },
          { t: 'Bajo 20: deficiencia; 20–29: insuficiencia', d: 'Óptimo: 30 a 50 ng/mL',
            say: 'Bajo veinte es deficiencia, entre veinte y veintinueve insuficiencia, y sobre treinta es lo óptimo.' },
        ] },
        { title: 'Osteomalacia', tag: 'Hueso sin mineral', kind: 'alert', items: [
          { t: 'P bajo, FA alta, PTH alta', d: 'Calcio normal o bajo',
            say: 'La osteomalacia se reconoce por el laboratorio: fósforo bajo, fosfatasas altas y paratohormona alta, con el calcio normal o bajo.' },
          { t: 'Looser-Milkman', d: 'Seudofracturas patognomónicas',
            say: 'Y por las líneas de Looser-Milkman en la radiografía.' },
        ] },
        { title: 'Tratamiento', tag: 'Carga y mantención', kind: 'pharma', items: [
          { t: '50.000 UI semanal por 8 semanas', d: 'Luego 1.000–2.000 UI/día + calcio',
            say: 'La deficiencia se trata con cincuenta mil unidades a la semana por ocho semanas, y luego mantención con calcio. Si te llevas una sola idea de hoy: se mide la veinticinco hidroxi, y el fósforo bajo con fosfatasas altas es osteomalacia hasta que se demuestre lo contrario. En la próxima clase dejamos el hueso y subimos a la hipófisis. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Déficit de vitamina D: medir, clasificar y reponer',
    root: N('start', 'Sospecha de déficit de vitamina D', 'Institucionalizado, dolor óseo, miopatía, malabsorción',
      'Adulto mayor institucionalizado, con dolor óseo sordo, debilidad proximal, o un paciente con malabsorción. Sospechas déficit de vitamina D.',
      ['', N('q', 'Medir 25(OH)D', 'No calcitriol',
        'El primer paso es medir la veinticinco hidroxivitamina D, no el calcitriol. ¿En qué rango cae?',
        ['< 20 ng/mL', N('q', '¿Hay osteomalacia?', 'P bajo, FA alta, Looser-Milkman',
          'Bajo veinte es deficiencia. Ahora mira el hueso: ¿hay fósforo bajo, fosfatasas altas o líneas de Looser-Milkman?',
          ['SÍ', N('alert', 'Osteomalacia', 'Carga + calcio; sin bifosfonatos',
            'Si las hay, es osteomalacia. Carga de colecalciferol con calcio, y nada de bifosfonatos hasta corregirla.')],
          ['NO', N('do', 'Carga de colecalciferol', '50.000 UI semanal por 8 semanas',
            'Si no las hay, igual va la carga: cincuenta mil unidades semanales por ocho semanas, con calcio.')])],
        ['20–29 ng/mL', N('do', 'Insuficiencia', '1.000–2.000 UI/día',
          'Entre veinte y veintinueve es insuficiencia: suplementación diaria de mil a dos mil unidades, sin carga.')],
        ['≥ 30 ng/mL', N('ok', 'Suficiente', 'Sin reposición',
          'Sobre treinta, las reservas son suficientes y no hay nada que reponer.')])]),
  },
};
