// Clase 2.2 de Neumología — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-07).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-07',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Un antibiótico para cada lugar: casa, sala o intensivo',
      say: 'Bienvenidos. En la clase anterior confirmamos la neumonía con la radiografía y decidimos con el CURB sesenta y cinco dónde se trata. Hoy cerramos el círculo: qué antibiótico va en cada lugar. Es uno de los temas más preguntados del examen, y la buena noticia es que son solo cuatro esquemas. Si sabes dónde está el paciente, sabes qué antibiótico darle.',
    },

    {
      type: 'flow',
      kicker: 'La lógica',
      title: 'El lugar decide el antibiótico',
      nodes: [
        { id: 'nac', col: 0, row: 2, k: 'start', t: 'NAC confirmada', s: 'CURB-65 calculado' },
        { id: 'a1', col: 1, row: 0, k: 'good', t: 'Casa · < 65 sano', s: 'Amoxicilina' },
        { id: 'a2', col: 1, row: 1, k: 'good', t: 'Casa · ≥ 65 o comórbido', s: 'Amoxicilina/clavulánico' },
        { id: 'sal', col: 1, row: 3, k: 'refer', t: 'Sala general', s: 'Ceftriaxona ± azitromicina' },
        { id: 'uci', col: 1, row: 4, k: 'alert', t: 'UCI', s: 'Ceftriaxona + levofloxacino' },
        { id: 'pse', col: 2, row: 4, k: 'trap', t: 'Riesgo de Pseudomonas', s: 'Piperacilina/tazobactam o cefepime' },
      ],
      edges: [
        { from: 'nac', to: 'a1' }, { from: 'nac', to: 'a2' }, { from: 'nac', to: 'sal' }, { from: 'nac', to: 'uci' },
        { from: 'uci', to: 'pse', label: 'si hay factores' },
      ],
      steps: [
        { show: ['nac'], note: 'Primero el lugar',
          say: 'La lógica es siempre la misma. Primero decides el lugar con el CURB sesenta y cinco, y el lugar te dice el esquema. A medida que el paciente está más grave, el antibiótico sube un peldaño.' },
        { show: ['a1', 'a2'], note: 'Dos esquemas ambulatorios',
          say: 'En la casa hay dos esquemas, y la diferencia es el paciente. El menor de sesenta y cinco sin comorbilidades recibe amoxicilina sola. El de sesenta y cinco o más, o con comorbilidades, recibe amoxicilina con ácido clavulánico.' },
        { show: ['sal'], note: 'Se pasa a la vía endovenosa',
          say: 'En la sala se pasa a la vía endovenosa, con ceftriaxona, y se agrega un macrólido si se sospecha un germen atípico.' },
        { show: ['uci'], note: 'Doble cobertura',
          say: 'En intensivo, siempre doble cobertura: ceftriaxona más una quinolona respiratoria, como levofloxacino.' },
        { show: ['pse'], note: 'La excepción',
          say: 'Y la excepción: si el paciente tiene factores de riesgo de Pseudomonas, se cambia a un betalactámico antipseudomónico. Veamos cada peldaño.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Ambulatorio',
      title: 'Menor de 65, sin comorbilidades',
      cards: [
        { title: 'Primera línea', tag: 'MINSAL', kind: 'pharma', items: [
          { t: 'Amoxicilina 1 g c/8 h oral', d: 'Por 5 a 7 días',
            say: 'El primer peldaño es el adulto menor de sesenta y cinco años, sin comorbilidades ni factores de riesgo. Recibe amoxicilina, un gramo cada ocho horas por vía oral, por cinco a siete días. Cubre al neumococo, que como vimos es el germen más frecuente.' },
          { t: 'Sin cefalosporinas ni quinolonas', d: 'De entrada, en el sano',
            say: 'Y aquí está la trampa del examen: en este paciente no se justifica partir con una cefalosporina de tercera generación ni con una quinolona respiratoria. Más espectro no es mejor tratamiento.' },
        ] },
        { title: 'Alergia a penicilina', tag: 'Macrólido', kind: 'alert', items: [
          { t: 'Azitromicina 500 mg/día', d: 'Por 3 a 5 días',
            say: 'Si es alérgico a la penicilina, la alternativa es un macrólido: azitromicina quinientos miligramos al día por tres a cinco días.' },
          { t: 'O claritromicina 500 mg c/12 h', d: 'El otro macrólido',
            say: 'O claritromicina, quinientos miligramos cada doce horas. Cuando en una pregunta no aparece la amoxicilina entre las opciones, el macrólido suele ser la mejor alternativa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Ambulatorio',
      title: '65 o más, o con comorbilidades',
      cards: [
        { title: 'Primera línea', tag: 'Guía GES', kind: 'pharma', items: [
          { t: 'Amoxicilina/clavulánico 875/125 mg', d: 'Cada 12 h oral, por 7 días',
            say: 'El segundo peldaño es el paciente de sesenta y cinco años o más, o con comorbilidades como EPOC, diabetes o cardiopatía. La primera línea, según la guía GES, es amoxicilina con ácido clavulánico, ochocientos setenta y cinco con ciento veinticinco miligramos cada doce horas, por siete días.' },
        ] },
        { title: 'Por qué el clavulánico', tag: 'Betalactamasa', kind: 'key', items: [
          { t: 'H. influenzae y Moraxella', d: 'Producen betalactamasa',
            say: '¿Por qué el clavulánico? Porque en este paciente aparecen Haemophilus influenzae y Moraxella, que pueden producir betalactamasa y destruir la amoxicilina sola.' },
          { t: 'Neumococo de susceptibilidad intermedia', d: 'Mejor cobertura',
            say: 'Y porque cubre mejor al neumococo con susceptibilidad intermedia. Es la misma lógica de la exacerbación de EPOC: mismo terreno, mismos gérmenes, mismo antibiótico.' },
        ] },
        { title: 'Alternativas', tag: 'Si no se puede', kind: 'normal', items: [
          { t: 'Cefuroximo axetilo 500 mg c/12 h', d: 'Levofloxacino 750 mg/día: reservado',
            say: 'Las alternativas son cefuroximo axetilo, quinientos miligramos cada doce horas, o levofloxacino setecientos cincuenta miligramos al día, que se reserva para la alergia grave o la sospecha alta de gramnegativos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hospitalizado',
      title: 'Sala general',
      cards: [
        { title: 'Primera línea', tag: 'CURB-65 = 2', kind: 'pharma', items: [
          { t: 'Ceftriaxona 1–2 g/día EV', d: 'O ampicilina/sulbactam 1,5 g c/6 h EV',
            say: 'El tercer peldaño es el paciente con dos puntos de CURB sesenta y cinco, que se hospitaliza en sala. El tratamiento de elección es ceftriaxona, uno a dos gramos al día por vía endovenosa, o como alternativa ampicilina con sulbactam, uno coma cinco gramos cada seis horas.' },
        ] },
        { title: 'Cuándo sumar macrólido', tag: 'Atípicos', kind: 'criteria', items: [
          { t: 'Infiltrado intersticial', d: 'Disociación pulso-temperatura, mialgias',
            say: 'Se agrega azitromicina, quinientos miligramos al día, cuando hay sospecha de un germen atípico: infiltrados intersticiales, disociación entre el pulso y la temperatura, o mialgias marcadas.' },
          { t: 'O NAC de mayor severidad', d: 'Ceftriaxona + azitromicina',
            say: 'También se agrega en la neumonía de mayor severidad. ¿Por qué el macrólido? Porque la ceftriaxona, como todo betalactámico, no cubre a los atípicos. Lo vemos a fondo en la próxima clase.' },
        ] },
        { title: 'Alergia', tag: 'Quinolona', kind: 'alert', items: [
          { t: 'Levofloxacino 750 mg/día EV', d: 'O moxifloxacino 400 mg/día',
            say: 'Y en el alérgico a la penicilina, una quinolona respiratoria: levofloxacino setecientos cincuenta miligramos al día, o moxifloxacino cuatrocientos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Hospitalizado',
      title: 'Unidad de cuidados intensivos',
      cards: [
        { title: 'Primera línea', tag: 'Doble cobertura', kind: 'pharma', items: [
          { t: 'Ceftriaxona 2 g + levofloxacino 750 mg', d: 'Ambos EV, al día',
            say: 'El último peldaño es la neumonía grave en intensivo, con CURB sesenta y cinco de tres o más o con falla orgánica. Aquí siempre va doble cobertura: ceftriaxona dos gramos más levofloxacino setecientos cincuenta miligramos, ambos endovenosos.' },
          { t: 'O ceftriaxona + azitromicina EV', d: 'Betalactámico + atípico',
            say: 'O ceftriaxona más azitromicina endovenosa. La idea es un betalactámico más algo que cubra atípicos: el paciente está demasiado grave para dejar un germen sin cubrir.' },
        ] },
        { title: 'Situaciones especiales', tag: 'Cambian el esquema', kind: 'alert', items: [
          { t: 'Riesgo de Pseudomonas', d: 'Bronquiectasias, fibrosis quística, corticoides',
            say: 'Dos situaciones cambian el esquema. Si hay factores de riesgo de Pseudomonas aeruginosa, como bronquiectasias, fibrosis quística o corticoides crónicos...' },
          { t: 'Piperacilina/tazobactam', d: 'O cefepime + ciprofloxacino',
            say: '...se usa piperacilina con tazobactam, o cefepime más ciprofloxacino.' },
          { t: 'Riesgo de SAMR', d: 'Sumar vancomicina',
            say: 'Y si hay riesgo de estafilococo resistente a meticilina, se suma vancomicina.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Evolución',
      title: 'Cuándo pasar a la vía oral',
      nodes: [
        { id: 'ev', col: 0, row: 1, k: 'start', t: 'Antibiótico EV', s: 'Paciente hospitalizado' },
        { id: 'est', col: 1, row: 1, k: 'q', t: '¿Estable?', s: 'Afebril > 48 h, FR < 24, FC < 100' },
        { id: 'mas', col: 1, row: 3, k: 'q', t: 'Y además', s: 'PAS ≥ 90, SatO2 > 90 %, tolera VO' },
        { id: 'vo', col: 2, row: 1, k: 'good', t: 'Cambio a vía oral', s: 'Completar 7 días totales' },
        { id: 'alt', col: 3, row: 1, k: 'good', t: 'Alta', s: 'Sin esperar la Rx de control' },
        { id: 'err', col: 3, row: 3, k: 'trap', t: '14 días EV', s: 'No es necesario' },
      ],
      edges: [
        { from: 'ev', to: 'est' }, { from: 'est', to: 'mas', label: 'y' }, { from: 'mas', to: 'vo', label: 'todo sí' },
        { from: 'est', to: 'vo' }, { from: 'vo', to: 'alt' }, { from: 'vo', to: 'err', label: 'no' },
      ],
      steps: [
        { show: ['ev', 'est'], note: 'Criterios de estabilidad',
          say: 'El hospitalizado no se queda con suero y ceftriaxona indefinidamente. Se pasa a la vía oral cuando está estable: afebril por más de cuarenta y ocho horas, con frecuencia respiratoria bajo veinticuatro y frecuencia cardíaca bajo cien.' },
        { show: ['mas'], note: 'Todos los criterios',
          say: 'Además, presión sistólica de noventa o más, saturación sobre noventa por ciento sin oxígeno, y que tolere la vía oral.' },
        { show: ['vo', 'alt'], note: 'Switch precoz',
          say: 'Si cumple todo, se cambia a un antibiótico oral, como amoxicilina con clavulánico o cefuroximo, para completar unos siete días en total, y se da el alta. No se espera una radiografía de control: los infiltrados tardan de cuatro a ocho semanas en limpiarse.' },
        { show: ['err'], note: 'La trampa',
          say: 'La trampa es la alternativa que mantiene el antibiótico endovenoso hasta completar catorce días. No es necesario completar tratamientos prolongados de diez a catorce días.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Pongamos los cuatro peldaños en un solo árbol, partiendo del lugar que decidiste con el CURB sesenta y cinco.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Esquema empírico según el lugar',
      head: ['Escenario', 'Primera línea', 'Alergia a penicilina'],
      rows: [
        { cells: ['Ambulatorio < 65 años, sano', 'Amoxicilina 1 g c/8 h VO, 5–7 días', 'Azitromicina o claritromicina'],
          say: 'Repasemos. Ambulatorio, menor de sesenta y cinco y sano: amoxicilina un gramo cada ocho horas. Si es alérgico, un macrólido. El error es partir con ceftriaxona o una quinolona.' },
        { cells: ['Ambulatorio ≥ 65 o comórbido (GES)', 'Amoxicilina/clavulánico 875/125 c/12 h, 7 días', 'Cefuroximo o levofloxacino'],
          say: 'Ambulatorio de sesenta y cinco o más, o con comorbilidad: amoxicilina con clavulánico por siete días. El error es dejarle amoxicilina sola.' },
        { cells: ['Sala general', 'Ceftriaxona 1–2 g/día EV ± azitromicina', 'Levofloxacino o moxifloxacino'],
          say: 'Sala general: ceftriaxona, con azitromicina si sospechas atípicos. Si es alérgico, una quinolona respiratoria.' },
        { cells: ['UCI', 'Ceftriaxona 2 g + levofloxacino 750 mg EV', 'Levofloxacino + vancomicina si riesgo SAMR'],
          say: 'Intensivo: ceftriaxona más levofloxacino, siempre doble cobertura. Y solo si hay riesgo de Pseudomonas se usa un antipseudomónico: ponerlo de rutina es la trampa.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 42 años, previamente sano, no fumador, con 3 días de fiebre hasta 38,6 °C, tos con expectoración mucosa y puntada de costado derecha. SatO2 96%, PA 120/75 mmHg, FR 18 rpm, crépitos en base derecha. Rx de tórax: condensación del lóbulo inferior derecho. CURB-65 = 0.',
      question: '¿Cuál es el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Ceftriaxona 1 g intramuscular al día' },
        { letter: 'B', text: 'Levofloxacino 750 mg al día por vía oral' },
        { letter: 'C', text: 'Amoxicilina 1 g cada 8 horas por vía oral por 5 a 7 días' },
        { letter: 'D', text: 'Amoxicilina/clavulánico 875/125 mg cada 12 horas por 7 días' },
        { letter: 'E', text: 'Hospitalizar y ceftriaxona más azitromicina endovenosas' },
      ],
      correct: 'C',
      explanation: 'NAC de bajo riesgo (CURB-65 = 0) en un joven sin comorbilidades: manejo ambulatorio con amoxicilina 1 g c/8 h VO por 5–7 días. No se justifican cefalosporinas de tercera generación ni quinolonas de entrada; el clavulánico se reserva para ≥ 65 años o comórbidos.',
      say: {
        stem: 'Vamos con un caso. Hombre de cuarenta y dos años, sano y no fumador, con tres días de fiebre, tos con expectoración y puntada de costado derecha. Satura noventa y seis, presión y frecuencia respiratoria normales, crépitos en la base derecha, y la radiografía muestra una condensación del lóbulo inferior derecho. Su CURB sesenta y cinco es cero.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: ceftriaxona intramuscular, levofloxacino oral, amoxicilina un gramo cada ocho horas, amoxicilina con clavulánico, u hospitalizar con ceftriaxona y azitromicina. Piénsalo.',
        answer: 'Es la C. Primero el lugar: con cero puntos, se va a su casa. Y como es menor de sesenta y cinco y sano, le toca el primer peldaño, amoxicilina sola. La D es el distractor tentador, pero el clavulánico es para el mayor de sesenta y cinco o el comórbido. Y la ceftriaxona o el levofloxacino son espectro de más para un paciente que no lo necesita.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 127',
      stem: 'Una paciente de 45 años, hipertensa, presenta un cuadro de 4 días de evolución de malestar general, fiebre hasta 38,8°C, mialgias, cefalea y tos con expectoración mucopuruleta. Al examen físico tiene FR: 13 lpm, FC: 80x’. PA: 120/80 mmHg, examen pulmonar con crépitos en la base izquierda, matidez y aumento de la trasmisión de las vibraciones vocales en la zona. Examen cardíaco normal. Satura 98% a FiO2 ambiental y se solicita una radiografía.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Oseltamivir' },
        { letter: 'B', text: 'Levofloxacino' },
        { letter: 'C', text: 'Ceftriaxona' },
        { letter: 'D', text: 'Amoxicilina' },
        { letter: 'E', text: 'Claritromicina' },
      ],
      correct: 'D',
      explanation: 'NAC típica (condensación del lóbulo inferior izquierdo), sin criterios de hospitalización, en una menor de 65 años sin comorbilidades relevantes (la hipertensión no agrava la neumonía): amoxicilina sola.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecinueve. Mujer de cuarenta y cinco años, hipertensa, con cuatro días de fiebre, mialgias, cefalea y tos con expectoración. Tiene signos vitales normales, satura noventa y ocho, y al examen, crépitos en la base izquierda con matidez y aumento de las vibraciones vocales, una condensación.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: oseltamivir, levofloxacino, ceftriaxona, amoxicilina o claritromicina. Piénsalo.',
        answer: 'Es la D, amoxicilina. Es una neumonía con condensación, sin ningún criterio de gravedad, en una paciente menor de sesenta y cinco años. La trampa está en la hipertensión: no es una de las comorbilidades que obligan a subir al clavulánico, así que la paciente sigue en el primer peldaño.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 15',
      stem: 'Un paciente de 21 años presenta un cuadro de malestar general, fiebre y tos con expectoración mucopurulenta, de 2 días de evolución. Al examen físico presenta FC: 70x’, PA: 120/80 mmHg, FR: 17x’ y en la auscultación pulmonar se escuchan crepitaciones en la mitad inferior del campo pulmonar derecho. Satura 93% a FiO2 ambiental y se solicita una radiografía de tórax, que muestra condensación del lóbulo inferior.',
      question: '¿Cuál es el tratamiento antibiótico más adecuado?',
      options: [
        { letter: 'A', text: 'Claritromicina' },
        { letter: 'B', text: 'Cefadroxilo' },
        { letter: 'C', text: 'Clindamicina' },
        { letter: 'D', text: 'Cloxacilina' },
        { letter: 'E', text: 'Ciprofloxacino' },
      ],
      correct: 'A',
      explanation: 'NAC de bajo riesgo en un joven sano. Lo ideal sería amoxicilina, pero no está entre las opciones: el macrólido es la mejor alternativa. Cefadroxilo, cloxacilina y clindamicina no son esquemas de NAC, y el ciprofloxacino no cubre bien al neumococo.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Hombre de veintiún años, con dos días de fiebre y tos con expectoración mucopurulenta. Signos vitales normales, satura noventa y tres, crepitaciones en la base derecha, y una radiografía con condensación del lóbulo inferior.',
        question: '¿Cuál es el tratamiento antibiótico más adecuado?',
        options: 'Las opciones: claritromicina, cefadroxilo, clindamicina, cloxacilina o ciprofloxacino. Piénsalo.',
        answer: 'Es la A. Es una neumonía de bajo riesgo en un joven sano, y lo ideal sería amoxicilina, pero no aparece. Cuando falta la amoxicilina, el macrólido es la mejor alternativa. El ciprofloxacino es el distractor, porque es una quinolona, pero no tiene buena cobertura contra el neumococo. Las quinolonas respiratorias son el levofloxacino y el moxifloxacino.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 138',
      stem: 'Hombre de 75 años con neumonía adquirida en la comunidad. Sin hospitalización reciente ni antibióticos en los últimos 3 meses. Sin alergias.',
      question: '¿Cuál es el antibiótico de primera línea más adecuado?',
      options: [
        { letter: 'A', text: 'Amoxicilina-clavulánico oral' },
        { letter: 'B', text: 'Ciprofloxacino oral' },
        { letter: 'C', text: 'Clindamicina oral' },
        { letter: 'D', text: 'Cefalexina oral' },
        { letter: 'E', text: 'Azitromicina oral' },
      ],
      correct: 'A',
      explanation: 'NAC ambulatoria en mayor de 65 años: amoxicilina/clavulánico 875/125 mg c/12 h por 7 días, por la cobertura de H. influenzae y M. catarrhalis productores de betalactamasa.',
      say: {
        stem: 'Una pregunta real reciente, del EUNACOM de julio de dos mil veinticinco. Hombre de setenta y cinco años con neumonía adquirida en la comunidad, sin hospitalizaciones ni antibióticos recientes, y sin alergias.',
        question: '¿Cuál es el antibiótico de primera línea más adecuado?',
        options: 'Las opciones, todas orales: amoxicilina con clavulánico, ciprofloxacino, clindamicina, cefalexina o azitromicina. Piénsalo.',
        answer: 'Es la A. Setenta y cinco años es el segundo peldaño: amoxicilina con clavulánico, ochocientos setenta y cinco con ciento veinticinco cada doce horas, por siete días. La E puede tentar, pero el macrólido es la alternativa para el alérgico, no la primera línea. Y fíjate que el enunciado te dice que no es alérgico justamente para que no lo elijas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 105',
      stem: 'Un paciente con antecedente de enfermedad pulmonar obstructiva crónica presenta un cuadro de 3 días de evolución, de fiebre hasta 38,9°C, asociada a malestar general, tos, expectoración mucopurulenta y aumento de la disnea. Al examen físico se observa con apremio respiratorio de reposo y se auscultan sibilancias difusas, más crepitaciones en la zona posterior del lóbulo inferior derecho. Se solicita una radiografía de tórax.',
      question: '¿Qué antibiótico es el más adecuado para el tratamiento de este paciente?',
      options: [
        { letter: 'A', text: 'Amoxicilina' },
        { letter: 'B', text: 'Claritromicina' },
        { letter: 'C', text: 'Clindamicina' },
        { letter: 'D', text: 'Cefotaximo' },
        { letter: 'E', text: 'Azitromicina' },
      ],
      correct: 'D',
      explanation: 'Neumonía en un paciente con EPOC y apremio respiratorio de reposo: se hospitaliza, y el esquema de sala es una cefalosporina de tercera generación (ceftriaxona o cefotaximo, con la misma cobertura).',
      say: {
        stem: 'La última, del EUNACOM de julio de dos mil diecinueve. Paciente con EPOC, con tres días de fiebre, tos con expectoración mucopurulenta y más disnea. Al examen tiene apremio respiratorio de reposo, sibilancias difusas y crepitaciones en la base derecha. Se pide una radiografía.',
        question: '¿Qué antibiótico es el más adecuado?',
        options: 'Las opciones: amoxicilina, claritromicina, clindamicina, cefotaximo o azitromicina. Piénsalo.',
        answer: 'Es la D. La clave es el apremio respiratorio de reposo: este paciente no se va a su casa, se hospitaliza. Y en la sala va una cefalosporina de tercera generación endovenosa. No hay ceftriaxona entre las opciones, pero el cefotaximo tiene la misma cobertura. La amoxicilina sola es la trampa, porque es de la casa y además no cubre la betalactamasa del Haemophilus de un EPOC.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'En la casa', tag: 'Oral', kind: 'key', items: [
          { t: '< 65 sano: amoxicilina', d: '1 g c/8 h · alergia: macrólido',
            say: 'Cerremos con las reglas de oro. En la casa, el menor de sesenta y cinco y sano recibe amoxicilina un gramo cada ocho horas; si es alérgico, un macrólido.' },
          { t: '≥ 65 o comórbido: + clavulánico', d: '875/125 c/12 h · GES',
            say: 'El de sesenta y cinco o más, o con comorbilidad, recibe amoxicilina con clavulánico, por GES.' },
        ] },
        { title: 'En el hospital', tag: 'Endovenoso', kind: 'pharma', items: [
          { t: 'Sala: ceftriaxona ± azitromicina', d: 'Macrólido si sospecha de atípico',
            say: 'En la sala, ceftriaxona, sumando azitromicina si sospechas atípicos.' },
          { t: 'UCI: ceftriaxona + levofloxacino', d: 'Antipseudomónico solo con riesgo',
            say: 'En intensivo, ceftriaxona más levofloxacino, y antipseudomónico solo si hay factores de riesgo.' },
        ] },
        { title: 'Evolución', tag: 'Switch', kind: 'alert', items: [
          { t: 'Afebril 48 h y estable: vía oral', d: '7 días totales, sin Rx de control',
            say: 'Y con cuarenta y ocho horas afebril y estable, a la vía oral para completar siete días, sin esperar una radiografía de control. En la próxima clase vemos los casos en que estos esquemas no sirven: los atípicos, la aspirativa y la intrahospitalaria. Si te llevas una sola idea de hoy: primero decide el lugar, y el lugar te dice el antibiótico. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'NAC: antibiótico según el lugar',
    root: N('start', 'NAC confirmada', 'CURB-65 calculado',
      'Neumonía confirmada con radiografía y con el CURB sesenta y cinco ya calculado. El lugar define el esquema.',
      ['', N('q', '¿Dónde se trata?', 'Casa · sala · UCI',
        '¿Dónde se va a tratar este paciente?',
        ['Casa', N('q', '¿65 años o más, o comórbido?', 'EPOC, diabetes, cardiopatía',
          'Si se va a su casa, la pregunta es el terreno: ¿tiene sesenta y cinco años o más, o una comorbilidad como EPOC, diabetes o cardiopatía?',
          ['NO', N('ok', 'Amoxicilina 1 g c/8 h', '5–7 días · alergia: macrólido',
            'Si no, amoxicilina un gramo cada ocho horas por cinco a siete días, o un macrólido si es alérgico.')],
          ['SÍ', N('ok', 'Amoxicilina/clavulánico', '875/125 c/12 h, 7 días · GES',
            'Si sí, amoxicilina con clavulánico cada doce horas por siete días, con la garantía GES en sesenta y cinco años y más.')])],
        ['Sala', N('do', 'Ceftriaxona 1–2 g/día EV', '± azitromicina si atípico',
          'En la sala, ceftriaxona endovenosa, sumando azitromicina si hay sospecha de atípico o más gravedad. Cuando esté estable y afebril por cuarenta y ocho horas, pasa a la vía oral.')],
        ['UCI', N('q', '¿Riesgo de Pseudomonas?', 'Bronquiectasias, FQ, corticoides',
          'En intensivo, antes de elegir, pregunta por factores de riesgo de Pseudomonas: bronquiectasias, fibrosis quística o corticoides crónicos.',
          ['NO', N('alert', 'Ceftriaxona + levofloxacino', 'O + azitromicina EV',
            'Sin riesgo, ceftriaxona dos gramos más levofloxacino setecientos cincuenta, o más azitromicina endovenosa.')],
          ['SÍ', N('refer', 'Piperacilina/tazobactam', 'O cefepime + ciprofloxacino',
            'Con riesgo, piperacilina con tazobactam, o cefepime más ciprofloxacino.')])])]),
  },
};
