// Clase 7.18 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-18).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-18',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Leer el T-score, reconocer la fractura por fragilidad y dar bien el alendronato',
      say: 'Bienvenidos. En la clase anterior terminamos con el calcio bajo; hoy pasamos del calcio al hueso, con la osteoporosis. Es un tema de frecuencia alta, y el examen pregunta casi siempre lo mismo: que sepas leer una densitometría, que sepas cuándo una fractura ya es el diagnóstico, y que sepas indicar el alendronato sin romperle el esófago al paciente. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'La densitometría y los cortes de la OMS',
      nodes: [
        { id: 'dxa', col: 0, row: 2, k: 'start', t: 'Densitometría DEXA', s: 'Columna L1–L4 y cadera' },
        { id: 'ts', col: 1, row: 2, k: 'q', t: 'T-score', s: 'DE vs adulto joven' },
        { id: 'nor', col: 2, row: 0, k: 'good', t: 'Normal', s: 'T-score ≥ -1,0' },
        { id: 'pen', col: 2, row: 1, k: 'effect', t: 'Osteopenia', s: 'Entre -1,0 y -2,5' },
        { id: 'op', col: 2, row: 3, k: 'risk', t: 'Osteoporosis', s: 'T-score ≤ -2,5 en cualquier sitio' },
        { id: 'sev', col: 3, row: 3, k: 'alert', t: 'Osteoporosis severa', s: '≤ -2,5 + fractura por fragilidad' },
      ],
      edges: [
        { from: 'dxa', to: 'ts' }, { from: 'ts', to: 'nor' }, { from: 'ts', to: 'pen' },
        { from: 'ts', to: 'op' }, { from: 'op', to: 'sev', label: '+ fractura' },
      ],
      steps: [
        { show: ['dxa'], note: 'El estándar de oro es la DEXA axial',
          say: 'La osteoporosis es un hueso con menos masa y con una arquitectura dañada, que se rompe ante un golpe de baja energía. Para medirla, el estándar de oro es la absorciometría de rayos X de doble energía, la DEXA, en la columna lumbar y en la cadera.' },
        { show: ['ts'], note: 'Se compara con el pico de masa ósea del adulto joven',
          say: 'El resultado que importa es el T-score: cuántas desviaciones estándar está el hueso del paciente por debajo del pico de masa ósea de un adulto joven. Y siempre manda el sitio más bajo.' },
        { show: ['nor', 'pen'], note: 'Osteopenia = baja masa ósea',
          say: 'Si el T-score es menos uno o más, es normal. Entre menos uno y menos dos coma cinco, es osteopenia, o baja masa ósea.' },
        { show: ['op'], note: 'Basta un solo sitio bajo -2,5',
          say: 'Y con menos dos coma cinco o menos, en cualquiera de los sitios, es osteoporosis. Ese es el número que tienes que tener grabado: menos dos coma cinco.' },
        { show: ['sev'], note: 'La fractura suma gravedad',
          say: 'Si además hay una o más fracturas por fragilidad, hablamos de osteoporosis severa o establecida. Y esa fractura, como vamos a ver ahora, pesa más que cualquier número.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Regla EUNACOM',
      title: 'La fractura por fragilidad es el diagnóstico',
      cards: [
        { title: 'Fractura por fragilidad', tag: 'Diagnóstico clínico', kind: 'alert', items: [
          { t: 'Caída desde su propia altura', d: 'Traumatismo de baja energía',
            say: '¿Qué es una fractura por fragilidad? Es la que ocurre ante un traumatismo de baja energía, típicamente una caída desde la propia altura. Un hueso sano no se rompe con eso.' },
          { t: 'Cadera, vértebra, húmero proximal', d: 'También muñeca, la fractura de Colles',
            say: 'Los sitios típicos son la cadera, la vértebra por aplastamiento y el húmero proximal, además de la muñeca, la fractura de Colles.' },
          { t: 'Tratar aunque el T-score no llegue', d: 'Aunque la DEXA muestre osteopenia',
            say: 'Y aquí está la regla que más se pregunta. Un adulto mayor con una fractura por fragilidad mayor tiene osteoporosis, sin importar el T-score. Aunque la densitometría diga osteopenia, se trata. Esperar el número es la trampa.' },
        ] },
        { title: '¿A quién se le pide DEXA?', tag: 'Tamizaje', kind: 'key', items: [
          { t: 'Mujeres de 65 años o más', d: 'Posmenopáusicas',
            say: '¿Y a quién le pedimos la densitometría? A las mujeres de sesenta y cinco años o más, que son la población de mayor prevalencia en Chile.' },
          { t: 'O con factores de riesgo', d: 'Corticoides crónicos, fractura previa',
            say: 'Y antes, si hay factores de riesgo: sobre todo el uso crónico de corticoides o una fractura previa. El paciente con corticoides por años es un clásico del examen.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Indicación de tratamiento',
      title: '¿Cuándo se inician fármacos?',
      nodes: [
        { id: 'fx', col: 0, row: 0, k: 'risk', t: 'Fractura por fragilidad', s: 'Cadera o vértebra' },
        { id: 'op', col: 0, row: 1, k: 'risk', t: 'T-score ≤ -2,5', s: 'Columna o cadera' },
        { id: 'cor', col: 0, row: 2, k: 'risk', t: 'Corticoides crónicos', s: 'Prednisona ≥ 5–7,5 mg/día > 3 meses' },
        { id: 'pen', col: 0, row: 4, k: 'q', t: 'Osteopenia', s: 'T-score entre -1,0 y -2,5' },
        { id: 'frax', col: 1, row: 4, k: 'mech', t: 'Calcular FRAX', s: 'Riesgo de fractura a 10 años' },
        { id: 'um', col: 2, row: 4, k: 'q', t: '¿Sobre el umbral?', s: 'Mayor ≥ 20 % o cadera ≥ 3 %' },
        { id: 'tx', col: 3, row: 2, k: 'good', t: 'Tratamiento farmacológico', s: 'Bifosfonato + calcio + vitamina D' },
      ],
      edges: [
        { from: 'fx', to: 'tx' }, { from: 'op', to: 'tx' }, { from: 'cor', to: 'tx' },
        { from: 'pen', to: 'frax' }, { from: 'frax', to: 'um' }, { from: 'um', to: 'tx', label: 'sí' },
      ],
      steps: [
        { show: ['fx', 'op'], note: 'Fractura o T-score: se trata directo',
          say: 'Ahora, ¿cuándo se inician fármacos? Hay cuatro indicaciones. Las dos primeras ya las conoces: una fractura previa de cadera o vertebral por fragilidad, o un T-score de menos dos coma cinco o menos en columna o cadera.' },
        { show: ['cor'], note: 'El corticoide se trata antes de que rompa el hueso',
          say: 'La tercera es el uso crónico planificado de corticoides orales: prednisona de cinco a siete coma cinco miligramos al día o más, por más de tres meses. El corticoide destruye hueso, y a ese paciente no se le espera la fractura.' },
        { show: ['pen'], note: 'La osteopenia sola no basta',
          say: 'La cuarta es la más fina. La osteopenia, por sí sola, no es indicación de fármacos. Lo que decide es cuánto riesgo tiene esa persona de fracturarse.' },
        { show: ['frax'], note: 'FRAX: herramienta de riesgo a diez años',
          say: 'Para eso está la herramienta FRAX, que calcula el riesgo de fractura en los próximos diez años sumando edad, sexo y factores clínicos.' },
        { show: ['um'], note: 'Umbrales: 20 % mayor, 3 % cadera',
          say: 'Si el riesgo de fractura osteoporótica mayor es de veinte por ciento o más, o el de fractura de cadera es de tres por ciento o más, esa osteopenia se trata.' },
        { show: ['tx'], note: 'Cuatro puertas, un mismo tratamiento',
          say: 'Cualquiera de las cuatro puertas lleva al mismo lugar: un bifosfonato, siempre acompañado de calcio y vitamina D. Veamos ahora qué factores alimentan el FRAX.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Factores de riesgo',
      title: 'Lo que suma en el FRAX',
      cards: [
        { title: 'Del paciente', tag: 'No modificables', kind: 'criteria', items: [
          { t: 'Edad avanzada y sexo femenino', d: 'Mujer posmenopáusica',
            say: 'Los factores que integra el FRAX tienen lógica. Primero, los del propio paciente: la edad avanzada y el sexo femenino, porque la menopausia acelera la pérdida ósea.' },
          { t: 'Padre o madre con fractura de cadera', d: 'Antecedente familiar',
            say: 'Y el antecedente de un padre o una madre con fractura de cadera.' },
        ] },
        { title: 'Del estilo de vida', tag: 'Modificables', kind: 'key', items: [
          { t: 'IMC bajo 20 kg/m²', d: 'El bajo peso es factor de riesgo',
            say: 'Luego, el estilo de vida. Un índice de masa corporal bajo veinte: fíjate que la mujer delgada tiene más riesgo, no menos. Eso aparece mucho en los casos del examen.' },
          { t: 'Tabaco y alcohol', d: '3 o más unidades al día',
            say: 'Y el tabaquismo activo y el alcohol, desde tres unidades al día.' },
        ] },
        { title: 'Secundarias', tag: 'Buscarlas', kind: 'alert', items: [
          { t: 'Corticoides y artritis reumatoide', d: 'Y otras causas de osteoporosis secundaria',
            say: 'Por último, las causas secundarias: los corticoides, la artritis reumatoide y las demás causas de osteoporosis secundaria. Una paciente con artritis reumatoide que toma prednisona suma dos factores a la vez.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Bifosfonatos: cómo actúan y cómo se toman',
      cards: [
        { title: 'Primera línea', tag: 'Antirresortivos', kind: 'pharma', items: [
          { t: 'Alendronato 70 mg semanal', d: 'O risedronato 35 mg semanal o 150 mg al mes',
            say: 'Vamos al tratamiento. La primera línea son los bifosfonatos orales: alendronato setenta miligramos una vez a la semana, o risedronato, treinta y cinco a la semana o ciento cincuenta al mes.' },
          { t: 'Apoptosis del osteoclasto', d: 'Inhiben la farnesil pirofosfato sintasa',
            say: '¿Cómo funcionan? Inhiben una enzima del osteoclasto, la farnesil pirofosfato sintasa, y el osteoclasto muere. Menos osteoclastos, menos resorción: el hueso deja de perderse.' },
        ] },
        { title: 'Reglas de administración', tag: 'Muy preguntadas', kind: 'alert', items: [
          { t: 'En ayunas, solo con agua de la llave', d: 'Vaso lleno, 200–250 mL, sin gas',
            say: 'Y ahora lo que más se pregunta. El alendronato casi no se absorbe: menos del uno por ciento. Por eso se toma a primera hora, en ayunas, con un vaso lleno de agua de la llave. Ni leche, ni jugo, ni té, ni agua mineral con gas, porque anulan la absorción.' },
          { t: 'Erguido 30 a 60 minutos', d: 'De pie o sentado, sin acostarse',
            say: 'Después, el paciente se queda erguido, de pie o sentado, sin acostarse, por treinta a sesenta minutos. ¿Por qué? Porque si la pastilla se queda pegada en el esófago, produce una esofagitis erosiva o una úlcera.' },
          { t: 'Sin comida ni otros fármacos', d: 'Durante 30 a 60 minutos',
            say: 'Y en esos mismos treinta a sesenta minutos, nada de comida ni otros medicamentos. Ojo con el calcio: se da, pero no junto con el alendronato.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Vía endovenosa, suplementos y seguridad',
      cards: [
        { title: 'Ácido zoledrónico', tag: 'Alternativa EV', kind: 'pharma', items: [
          { t: '5 mg EV una vez al año', d: 'Infusión de 15 minutos',
            say: '¿Y si el paciente no puede cumplir esas reglas? Existe la alternativa endovenosa: ácido zoledrónico, cinco miligramos en una infusión de quince minutos, una vez al año.' },
          { t: 'Reflujo, esofagitis o no puede estar de pie', d: 'También si no adhiere a la vía oral',
            say: 'Es de elección cuando hay reflujo severo, esofagitis previa, intolerancia digestiva, un paciente que no puede mantenerse erguido, o que no adhiere a la vía oral. Conecta esto con las reglas: si no puede cumplirlas, cambias la vía.' },
        ] },
        { title: 'Suplementación', tag: 'Siempre', kind: 'key', items: [
          { t: 'Calcio 1000–1200 mg/día', d: 'Dieta más carbonato o citrato',
            say: 'Todo paciente tratado recibe además calcio elemental, mil a mil doscientos miligramos al día, sumando la dieta y el suplemento.' },
          { t: 'Vitamina D3 800–2000 UI/día', d: 'Colecalciferol',
            say: 'Y vitamina D tres, colecalciferol, de ochocientas a dos mil unidades al día. Pero ojo: calcio y vitamina D solos no tratan una osteoporosis. Son la base, no el tratamiento.' },
        ] },
        { title: 'Largo plazo', tag: 'Raro pero se pregunta', kind: 'alert', items: [
          { t: 'Osteonecrosis mandibular', d: 'Asociada a extracciones dentales',
            say: 'Con el uso prolongado aparecen dos complicaciones raras. La osteonecrosis de la mandíbula, asociada a extracciones dentales.' },
          { t: 'Fractura atípica de fémur', d: 'Subtrocantérica, dolor en el muslo',
            say: 'Y la fractura atípica subtrocantérica del fémur, que se anuncia con dolor en el muslo después de más de cinco años de uso.' },
          { t: 'Vacaciones terapéuticas a los 3–5 años', d: 'DEXA de control cada 1–2 años',
            say: 'Por eso, a los tres a cinco años de bifosfonatos se evalúan las vacaciones terapéuticas. Y el seguimiento se hace con una densitometría cada uno a dos años.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Otras terapias',
      title: 'Más allá de los bifosfonatos',
      cards: [
        { title: 'Denosumab', tag: 'Anti RANKL', kind: 'pharma', items: [
          { t: '60 mg subcutáneo cada 6 meses', d: 'Inhibe el ligando RANK',
            say: 'Hay dos fármacos más que debes reconocer. El denosumab es un anticuerpo monoclonal que bloquea el ligando RANK, la señal que activa al osteoclasto. Se da sesenta miligramos subcutáneos cada seis meses.' },
          { t: 'Útil en falla renal moderada', d: 'Si se suspende: rebote rápido',
            say: 'Es útil en la falla renal moderada, donde el zoledrónico requiere precaución si la filtración está bajo treinta y cinco. Pero tiene un problema: si se suspende, la pérdida ósea rebota rápido.' },
        ] },
        { title: 'Teriparatida', tag: 'Osteoformador', kind: 'key', items: [
          { t: 'Análogo de PTH, 20 mcg SC diario', d: 'Máximo 24 meses',
            say: 'Y la teriparatida, un análogo de la paratohormona. Todos los anteriores frenan la resorción; la teriparatida, en cambio, forma hueso. Se da veinte microgramos subcutáneos al día, por un máximo de veinticuatro meses.' },
          { t: 'Osteoporosis severa', d: 'Múltiples fracturas vertebrales',
            say: 'Se reserva para la osteoporosis severa, con múltiples fracturas vertebrales.' },
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
        { cells: ['Fractura de cadera tras caída a nivel, T-score -2,2', 'Bifosfonato + calcio + vitamina D', 'No tratar porque no llega a -2,5'],
          say: 'Repasemos las trampas. Fractura de cadera tras una caída a nivel, con un T-score de osteopenia: se trata con bifosfonato. El error es esperar a que el número llegue a menos dos coma cinco.' },
        { cells: ['T-score ≤ -2,5 con calcio y vitamina D', 'Agregar bifosfonato', 'Subir calcio y vitamina D'],
          say: 'Osteoporosis densitométrica en alguien que ya toma calcio y vitamina D: se agrega el bifosfonato. Subir la dosis de los suplementos no trata la enfermedad.' },
        { cells: ['Osteopenia sin fractura', 'Calcular FRAX', 'Bifosfonato a todos'],
          say: 'Osteopenia sin fractura: primero el FRAX. Se trata solo si supera el umbral.' },
        { cells: ['Corticoides crónicos', 'DEXA y tratar según indicación', 'Esperar la fractura'],
          say: 'El paciente con corticoides crónicos necesita densitometría, y con prednisona sobre el umbral por más de tres meses, tratamiento. No se espera la fractura.' },
        { cells: ['Alendronato', 'Ayunas, agua de la llave, erguido 30–60 min', 'Con leche o antes de acostarse'],
          say: 'El alendronato se toma en ayunas, con agua de la llave, y erguido. Tomarlo con leche o justo antes de acostarse es la alternativa incorrecta clásica.' },
        { cells: ['Reflujo severo o esofagitis', 'Ácido zoledrónico EV anual', 'Alendronato oral igual'],
          say: 'Y si hay reflujo severo o esofagitis, el zoledrónico endovenoso anual, en vez de insistir con la vía oral.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 67 años, menopáusica desde los 50 sin terapia hormonal, sin fracturas previas. DEXA: T-score -2,8 en columna lumbar y -2,6 en cuello femoral. Calcemia, fosfemia, fosfatasas alcalinas, función renal y hemograma normales. Sin reflujo ni pirosis. Se inicia alendronato 70 mg semanal.',
      question: '¿Qué indicación de administración es correcta?',
      options: [
        { letter: 'A', text: 'Tomarlo en la noche, antes de acostarse, con un vaso de leche' },
        { letter: 'B', text: 'Tomarlo con el desayuno para evitar la irritación gástrica' },
        { letter: 'C', text: 'Tomarlo en ayunas con un vaso lleno de agua de la llave y mantenerse erguida 30 a 60 minutos' },
        { letter: 'D', text: 'Tomarlo junto con el comprimido de calcio para que se absorban juntos' },
        { letter: 'E', text: 'Disolverlo en jugo de naranja para mejorar su absorción' },
      ],
      correct: 'C',
      explanation: 'Osteoporosis densitométrica (T-score ≤ -2,5): bifosfonato con calcio y vitamina D. El alendronato se absorbe menos del 1 %: en ayunas, solo con agua de la llave, erguida 30–60 minutos y sin comida ni otros fármacos, para asegurar la absorción y evitar la esofagitis.',
      say: {
        stem: 'Vamos con un caso. Mujer de sesenta y siete años, menopáusica desde los cincuenta, sin terapia hormonal y sin fracturas. La densitometría muestra un T-score de menos dos coma ocho en columna y menos dos coma seis en el cuello femoral. Sus exámenes son normales y no tiene reflujo. Se decide iniciar alendronato semanal.',
        question: '¿Qué indicación de administración es correcta?',
        options: 'Las opciones: en la noche con leche, con el desayuno, en ayunas con agua de la llave y erguida, junto con el calcio, o disuelto en jugo de naranja. Piénsalo.',
        answer: 'La respuesta es la C. Primero, el diagnóstico: T-score bajo menos dos coma cinco, es osteoporosis, y se trata. Y como el alendronato casi no se absorbe e irrita el esófago, se toma en ayunas, solo con agua, y erguida. La trampa más tentadora es la D: el calcio sí se indica, pero junto al alendronato lo bloquea.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 116',
      stem: 'Una paciente de 66 años se realiza una densitometría ósea que muestra un T score de -3,5 DS en cadera izquierda y -2,8 en la columna lumbar a la altura de la vértebra L4. Trae además una glicemia, un perfil bioquímico y perfil lipídico, todos dentro de rangos normales. Mide 1,68 metros y pesa 49 kilos.',
      question: '¿Cuál es la conducta más adecuada para esta paciente?',
      options: [
        { letter: 'A', text: 'Indicar calcio y vitamina D vía oral' },
        { letter: 'B', text: 'Indicar una carga de vitamina D vía oral' },
        { letter: 'C', text: 'Administrar calcitonina intranasal' },
        { letter: 'D', text: 'Indicar bifosfonatos vía oral o endovenosa' },
        { letter: 'E', text: 'Iniciar terapia de reemplazo hormonal con estrógenos más progestágenos por vía oral' },
      ],
      correct: 'D',
      explanation: 'T-score ≤ -2,5 en cadera y columna: osteoporosis. Tratamiento de primera línea: bifosfonato oral o EV, junto con calcio y vitamina D. Además tiene un IMC bajo (~17), otro factor de riesgo.',
      say: {
        stem: 'Ahora las preguntas reales. Esta es del EUNACOM de diciembre de dos mil diecinueve. Paciente de sesenta y seis años con un T-score de menos tres coma cinco en la cadera y menos dos coma ocho en la columna. Sus exámenes son normales. Mide un metro sesenta y ocho y pesa cuarenta y nueve kilos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: calcio y vitamina D, una carga de vitamina D, calcitonina intranasal, bifosfonatos orales o endovenosos, o terapia de reemplazo hormonal. Piénsalo.',
        answer: 'Es la D, bifosfonatos. Los dos sitios están bajo menos dos coma cinco: es osteoporosis. Fíjate además en el peso: su índice de masa corporal es de unos diecisiete, bajo veinte, y eso suma un factor de riesgo. La trampa es la A: el calcio y la vitamina D se dan, pero como base, no como tratamiento de la osteoporosis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 114',
      stem: 'Una paciente de 65 años, en tratamiento con calcio 2 gramos al día y vitamina D, 600 UI al día, se realiza una densitometría ósea que muestra un T score de -2,7 en la cadera derecha y de -2,8 en la columna lumbar.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar ejercicio aeróbico' },
        { letter: 'B', text: 'Indicar reposo relativo' },
        { letter: 'C', text: 'Aumentar dosis de vitamina D y calcio' },
        { letter: 'D', text: 'Agregar bifosfonatos al tratamiento' },
        { letter: 'E', text: 'Mantener el tratamiento' },
      ],
      correct: 'D',
      explanation: 'T-score ≤ -2,5: osteoporosis. Calcio y vitamina D son la base, pero no bastan: se agrega el bifosfonato y se mantienen los suplementos.',
      say: {
        stem: 'La siguiente es del EUNACOM de julio de dos mil quince. Paciente de sesenta y cinco años que ya toma calcio, dos gramos al día, y vitamina D. Su densitometría muestra menos dos coma siete en la cadera y menos dos coma ocho en la columna.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: ejercicio aeróbico, reposo relativo, aumentar la vitamina D y el calcio, agregar bifosfonatos, o mantener el tratamiento. Piénsalo.',
        answer: 'Es la D, agregar bifosfonatos. Esta pregunta es la misma idea con otro disfraz: la paciente ya tiene la base, y aun así tiene osteoporosis. La trampa es la C, subir los suplementos. Más calcio no reemplaza al antirresortivo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 173',
      stem: 'Paciente femenina con artritis reumatoide, en tratamiento con metrotexate y prednisona desde hace 4 años, es diagnosticada de diabetes mellitus, por lo que se inicia metformina como tratamiento.',
      question: '¿Que examen es perentorio realizarle, como seguimiento a esta paciente?',
      options: [
        { letter: 'A', text: 'Hemograma, con recuento de plaquetas' },
        { letter: 'B', text: 'Radiografía atlantoaxoidea' },
        { letter: 'C', text: 'Insulinemia' },
        { letter: 'D', text: 'LDH' },
        { letter: 'E', text: 'Densitometría ósea' },
      ],
      correct: 'E',
      explanation: 'Cuatro años de prednisona más artritis reumatoide: dos factores de osteoporosis secundaria. Todo usuario crónico de corticoides requiere densitometría ósea.',
      say: {
        stem: 'Esta es del EUNACOM de julio de dos mil dieciséis. Paciente con artritis reumatoide, que toma metotrexato y prednisona hace cuatro años, y a quien ahora le diagnostican diabetes e inicia metformina.',
        question: '¿Qué examen es perentorio realizarle como seguimiento?',
        options: 'Las opciones: hemograma con plaquetas, radiografía atlantoaxoidea, insulinemia, LDH, o densitometría ósea. Piénsalo.',
        answer: 'Es la E, densitometría ósea. La diabetes es la distracción del enunciado. Lo importante son cuatro años de prednisona y una artritis reumatoide: dos factores de osteoporosis secundaria a la vez. La radiografía atlantoaxoidea tienta por la artritis, pero no se pide de rutina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 122',
      stem: 'Una paciente de 63 años presenta dolor dorsal intenso, que inició hace 5 días, en relación a un esfuerzo en flexión y que ha aumentado, limitando significativamente sus actividades de la vida diaria. Tiene antecedente de una fractura de muñeca hace un año, que requirió tratamiento quirúrgico. Al examen físico se aprecia adolorida, con signos vitales normales, dolor a la movilización activa y pasiva de su columna dorsal, que limita los movimientos de flexo-extensión. A la inspección la curvatura dorsal se observa redonda, sin cifosis.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hernia del núcleo pulposo' },
        { letter: 'B', text: 'Tuberculosis vertebral' },
        { letter: 'C', text: 'Espondilolistesis dorsal' },
        { letter: 'D', text: 'Espondilosis dorsal' },
        { letter: 'E', text: 'Fractura vertebral' },
      ],
      correct: 'E',
      explanation: 'Dolor dorsal agudo tras un esfuerzo mínimo en una mujer con fractura de muñeca previa: fractura vertebral por aplastamiento osteoporótica. Dos fracturas por fragilidad: osteoporosis clínica, que se trata aunque no haya DEXA.',
      say: {
        stem: 'Y la última, del EUNACOM de agosto de dos mil veintiuno. Mujer de sesenta y tres años con dolor dorsal intenso de cinco días, que empezó con un esfuerzo en flexión y le limita la vida diaria. Hace un año se fracturó la muñeca. Al examen, dolor al mover la columna dorsal, sin cifosis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hernia del núcleo pulposo, tuberculosis vertebral, espondilolistesis, espondilosis, o fractura vertebral. Piénsalo.',
        answer: 'Es la E, fractura vertebral por aplastamiento. Un esfuerzo mínimo que rompe una vértebra, en una mujer que ya se fracturó la muñeca: son dos fracturas por fragilidad. Y recuerda la regla: eso ya es osteoporosis y se trata. La hernia del núcleo pulposo tienta por el esfuerzo, pero la fractura previa es la pista que decide.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Menos dos coma cinco', kind: 'key', items: [
          { t: 'T-score ≤ -2,5', d: 'En columna o cadera: osteoporosis',
            say: 'Cerremos con las reglas de oro. Un T-score de menos dos coma cinco o menos, en columna o cadera, es osteoporosis.' },
          { t: 'Fractura por fragilidad = osteoporosis', d: 'Se trata aunque la DEXA diga osteopenia',
            say: 'Y una fractura por fragilidad es osteoporosis, diga lo que diga la densitometría.' },
          { t: 'Osteopenia: decide el FRAX', d: 'Mayor ≥ 20 % o cadera ≥ 3 %',
            say: 'En la osteopenia sin fractura, decide el FRAX: veinte por ciento para fractura mayor o tres por ciento para cadera.' },
        ] },
        { title: 'Tratamiento', tag: 'Bifosfonato', kind: 'pharma', items: [
          { t: 'Alendronato 70 mg semanal', d: 'Más calcio y vitamina D siempre',
            say: 'El tratamiento es un bifosfonato, siempre con calcio y vitamina D, que son la base pero no bastan solos.' },
          { t: 'Ayunas, agua, erguido', d: 'Si no puede: zoledrónico EV anual',
            say: 'El alendronato va en ayunas, con agua de la llave y erguido. Si el paciente no puede cumplirlo, zoledrónico endovenoso una vez al año.' },
        ] },
        { title: 'Seguimiento', tag: 'Largo plazo', kind: 'alert', items: [
          { t: 'Vacaciones a los 3–5 años', d: 'Osteonecrosis mandibular y fractura atípica',
            say: 'Y a los tres a cinco años, se evalúan las vacaciones terapéuticas. Si te llevas una sola idea de hoy: la fractura por fragilidad ya es el diagnóstico, y el alendronato se toma en ayunas, con agua y erguido. En la próxima clase vemos la otra cara del hueso: el déficit de vitamina D y la osteomalacia. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Osteoporosis: diagnosticar y elegir el tratamiento',
    root: N('start', 'Mujer ≥ 65 o factores de riesgo', 'Corticoides o fractura previa',
      'Mujer de sesenta y cinco años o más, o alguien con factores de riesgo como corticoides crónicos o una fractura previa. Lo primero que te preguntas no es el número, sino si ya se fracturó.',
      ['', N('q', '¿Fractura por fragilidad?', 'Cadera, vértebra, húmero proximal',
        '¿Tiene una fractura por fragilidad, de cadera, vértebra o húmero proximal, con una caída desde su propia altura?',
        ['SÍ', N('alert', 'Osteoporosis clínica', 'Tratar sin esperar la DEXA',
          'Si la tiene, es osteoporosis, sea cual sea el T-score. Se trata de inmediato, con la misma elección de vía que vemos más abajo.')],
        ['NO', N('q', 'DEXA: ¿T-score?', 'Columna y cadera',
          'Si no hay fractura, pides la densitometría y miras el T-score más bajo.',
          ['≤ -2,5', N('q', 'Osteoporosis: ¿tolera la vía oral?', 'Sin reflujo severo ni esofagitis',
            'Menos dos coma cinco o menos: osteoporosis, y se trata. Ahora eliges la vía: ¿puede tomar el bifosfonato por boca y quedarse erguido?',
            ['SÍ', N('do', 'Alendronato 70 mg semanal', 'Ayunas, agua, erguido 30–60 min',
              'Si tolera la vía oral, alendronato setenta miligramos a la semana, en ayunas, con agua de la llave y erguido, más calcio y vitamina D.')],
            ['NO', N('do', 'Ácido zoledrónico 5 mg EV anual', 'Reflujo severo, esofagitis, no puede estar erguido',
              'Si tiene reflujo severo, esofagitis, o no puede mantenerse erguido, ácido zoledrónico cinco miligramos endovenoso una vez al año.')])],
          ['-1,0 a -2,5', N('q', 'Osteopenia: FRAX', '¿Mayor ≥ 20 % o cadera ≥ 3 %?',
            'Entre menos uno y menos dos coma cinco: osteopenia. Calculas el FRAX, y si supera veinte por ciento para fractura mayor o tres por ciento para cadera, se trata.',
            ['SÍ', N('alert', 'Tratar', 'Igual que la osteoporosis',
              'Sobre el umbral, se trata igual que una osteoporosis.')],
            ['NO', N('ok', 'Sin fármaco antirresortivo', 'Control y factores de riesgo',
              'Bajo el umbral, no hay indicación de fármaco antirresortivo: se controla y se trabajan los factores de riesgo.')])])])]),
  },
};
