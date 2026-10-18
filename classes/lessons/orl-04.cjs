// Clase 14.4 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-04). Preguntas: banco real EUNACOM (class_questions.cjs).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-04',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'La oreja que se despega, el pus que busca salida y por qué toda mastoiditis se hospitaliza',
      say: 'Bienvenido. En la primera clase del libro viste que una otitis media aguda mal tratada puede complicarse. Hoy vemos la complicación más frecuente: la mastoiditis aguda, y su pariente más temida, la tromboflebitis del seno sigmoide. Son preguntas de reconocimiento: si ves la oreja desplazada hacia adelante, sabes qué hacer. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'De la otitis media a la mastoiditis coalescente',
      nodes: [
        { id: 'oma', col: 0, row: 1, k: 'cause', t: 'Otitis media aguda', s: 'Pus en el oído medio' },
        { id: 'adi', col: 1, row: 1, k: 'mech', t: 'Pasa a las celdas mastoideas', s: 'Por el aditus ad antrum' },
        { id: 'pre', col: 2, row: 1, k: 'mech', t: 'Hiperpresión y necrosis isquémica', s: 'Lisis de las trabéculas óseas' },
        { id: 'sub', col: 3, row: 0, k: 'alert', t: 'Absceso subperióstico', s: 'Rompe la cortical externa' },
        { id: 'int', col: 3, row: 2, k: 'risk', t: 'Complicaciones intracraneales', s: 'Meningitis, absceso, tromboflebitis' },
      ],
      edges: [
        { from: 'oma', to: 'adi' },
        { from: 'adi', to: 'pre' },
        { from: 'pre', to: 'sub' },
        { from: 'pre', to: 'int' },
      ],
      steps: [
        { show: ['oma', 'adi'], note: 'Toda otitis media inflama la mastoides',
          say: 'Toda otitis media aguda inflama un poco la mucosa de las celdas mastoideas, porque el oído medio se comunica con ellas por el aditus ad antrum. Eso es normal y no es mastoiditis.' },
        { show: ['pre'], note: 'Mastoiditis: el pus destruye el hueso',
          say: 'Hablamos de mastoiditis aguda cuando el pus acumulado a presión produce necrosis isquémica y lisis de las trabéculas óseas. Por eso se llama coalescente: las celdas se funden en una sola cavidad de pus.' },
        { show: ['sub', 'int'], note: 'El pus busca salida: hacia afuera o hacia adentro',
          say: 'El pus puede romper la cortical externa del hueso temporal y formar un absceso subperióstico, que es lo que se ve detrás de la oreja. O puede ir hacia adentro, a la fosa craneal posterior o media, y producir meningitis, absceso cerebral o tromboflebitis séptica del seno lateral o sigmoide. Los gérmenes son los mismos de la otitis media aguda: neumococo, el más común y agresivo, Streptococcus pyogenes, Haemophilus y Staphylococcus aureus.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'El pus busca salida',
      images: [
        { src: 'animaciones/orl-04/A1_mastoiditis_pus_a_complicaciones.mp4', label: 'Mastoiditis: del oído medio al absceso y a las complicaciones', credit: 'Ilustración: Servier Medical Art (smart.servier.com), CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Pus a presión: hacia afuera o hacia adentro',
          say: 'Mira cómo el pus del oído medio pasa por el aditus ad antrum hacia las celdas mastoideas. A presión, las trabéculas se disuelven y las celdas se funden en una sola cavidad: mastoiditis coalescente. El pus puede romper hacia afuera y formar el absceso subperióstico, que despega la oreja. O ir hacia adentro: seno sigmoide, meninges y cerebro. Por eso toda mastoiditis se hospitaliza.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'La tríada retroauricular',
      cards: [
        { title: 'Cuándo sospecharla', tag: 'Menor de 2 años', kind: 'key', items: [
          { t: 'Fiebre alta que reaparece', d: 'Tras una otitis media reciente',
            say: 'La mastoiditis es más frecuente en menores de dos años. El cuadro típico es un niño que tuvo una otitis media aguda, y de pronto la fiebre alta reaparece o empeora, con mal estado general.' },
          { t: 'Dolor retroauricular pulsátil', d: 'Intenso',
            say: 'Se agrega dolor intenso y pulsátil detrás de la oreja.' },
        ] },
        { title: 'Los tres signos', tag: 'Patognomónicos', kind: 'alert', items: [
          { t: 'Eritema y edema sobre la mastoides', d: 'Aumento de volumen doloroso',
            say: 'Los tres signos son estos. Primero, eritema, edema y aumento de volumen doloroso sobre la mastoides.' },
          { t: 'Borramiento del surco retroauricular', d: 'Por el edema y la colección',
            say: 'Segundo, el surco que normalmente existe entre la oreja y el cráneo se borra.' },
          { t: 'Pabellón desplazado hacia adelante y abajo', d: 'Oreja despegada o en asa',
            say: 'Y tercero, el pabellón auricular se desplaza hacia adelante y hacia abajo, la oreja en asa. Mira esta oreja: está despegada, empujada hacia adelante, con el surco retroauricular borrado. Con eso solo ya puedes hacer el diagnóstico.',
            photo: { src: 'biblioteca/17_otorrino/orl-04/01_mastoiditis-pabellon-desplazado__sherman_p229.jpg', label: 'Pabellón despegado', at: 'Mira esta oreja', credit: 'Atlas of Clinical Emergency Medicine (Sherman), p. 229' } },
        ] },
        { title: 'Otoscopía', tag: 'Acompañante', kind: 'criteria', items: [
          { t: 'Tímpano abombado o perforado', d: 'Otorrea purulenta profusa',
            say: 'La otoscopía confirma la otitis media: tímpano abombado o perforado con otorrea purulenta abundante, y muchas veces con caída de la pared posterosuperior del conducto.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Imágenes y tromboflebitis del seno sigmoide',
      cards: [
        { title: 'Examen de elección', tag: 'TAC con contraste', kind: 'key', items: [
          { t: 'TAC de peñasco con contraste', d: 'Incluye cerebro; confirma la coalescencia',
            say: 'Ante la sospecha de mastoiditis, el examen de elección es el TAC de peñasco y cerebro con contraste endovenoso. Muestra las celdas ocupadas, la pérdida de trabéculas, el absceso subperióstico, y permite descartar complicaciones dentro del cráneo. Mira este corte del peñasco: las celdas mastoideas están ocupadas y las trabéculas se están disolviendo, la mastoiditis coalescente.',
            photo: { src: 'biblioteca/17_otorrino/orl-04/atlas_265_tac_de_penasco_con_mastoiditis.jpg', label: 'TAC: mastoiditis coalescente', at: 'Mira este corte del peñasco', credit: 'Atlas EUNACOM 2026' } },
        ] },
        { title: 'Tromboflebitis del seno', tag: 'Complicación temible', kind: 'alert', items: [
          { t: 'Fiebre en picos de sierra', d: 'Calofríos, cefalea, hipertensión endocraneana',
            say: 'Una complicación temible es la tromboflebitis séptica del seno lateral o sigmoide. Se sospecha con fiebre en agujas, con picos y calofríos intensos, cefalea y signos de hipertensión endocraneana.' },
          { t: 'Signo del delta vacío', d: 'Defecto de llene central en el seno',
            say: 'En el TAC o angio TAC con contraste aparece el signo del delta vacío: el trombo no capta contraste y queda como un defecto central, rodeado por el realce de la pared del seno. Esa frase, delta vacío, es la que preguntan.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Toda mastoiditis se hospitaliza',
      cards: [
        { title: 'Manejo médico', tag: 'Hospitalización inmediata', kind: 'pharma', items: [
          { t: 'Ceftriaxona EV 100 mg/kg/día', d: 'Primera línea',
            say: 'El manejo exige hospitalización inmediata. La primera línea es ceftriaxona endovenosa, cien miligramos por kilo al día.' },
          { t: 'Asociar clindamicina o vancomicina', d: 'Vancomicina si hay neumococo o SAMR resistente',
            say: 'Se asocia clindamicina, o vancomicina si se sospecha neumococo resistente o Staphylococcus aureus resistente a meticilina.' },
          { t: 'Miringotomía descompresiva', d: 'Pus para cultivo',
            say: 'Y se hace una miringotomía descompresiva, que permite aspirar el pus del oído medio, descomprimir y enviar un cultivo.' },
        ] },
        { title: 'Cuándo se opera', tag: 'Mastoidectomía', kind: 'alert', items: [
          { t: 'Absceso subperióstico fluctuante', d: 'Documentado',
            say: 'Se opera con una mastoidectomía simple, cortical, con drenaje de colecciones, en tres situaciones. La primera, un absceso subperióstico fluctuante documentado.' },
          { t: 'Sin respuesta en 24-48 h', d: 'Al antibiótico endovenoso',
            say: 'La segunda, si no responde tras veinticuatro a cuarenta y ocho horas de antibióticos endovenosos.' },
          { t: 'Complicaciones neurológicas', d: 'Cirugía inmediata por ORL',
            say: 'Y la tercera, si aparece cualquier complicación neurológica. Fíjate en la lógica: primero antibióticos y miringotomía, y cirugía cuando hay colección o falla.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Absceso mastoídeo',
      title: 'Absceso mastoídeo: qué haces tú y qué hace el especialista',
      cards: [
        { title: 'Cuándo lo sospechas', tag: 'Absceso subperióstico', kind: 'alert', items: [
          { t: 'Tumefacción fluctuante retroauricular', d: 'Dolorosa, eritematosa, con fiebre',
            say: 'El drenaje del absceso mastoídeo no lo haces tú: se deriva. Lo que sí haces es sospecharlo. Es una mastoiditis con absceso subperióstico: tumefacción fluctuante, dolorosa y roja detrás de la oreja, el pabellón desplazado, fiebre y el antecedente de una otitis media.' },
        ] },
        { title: 'Tu conducta', tag: 'Nivel primario', kind: 'key', items: [
          { t: 'Hospitalizar o trasladar de urgencia', d: 'Ceftriaxona endovenosa desde el inicio',
            say: 'Tu conducta es hospitalizar o trasladar de urgencia, y partir con antibiótico endovenoso, ceftriaxona.' },
          { t: 'TAC con contraste si hay complicación', d: 'Cefalea intensa, signos meníngeos, parálisis facial, vértigo',
            say: 'Pides TAC con contraste si hay signos de complicación: cefalea intensa, signos meníngeos, parálisis facial o vértigo.' },
          { t: 'No puncionar ni incidir', d: 'La colección se drena en el hospital',
            say: 'Y no punciones ni incidas la colección en el nivel primario. Esa es la trampa.' },
        ] },
        { title: 'El especialista', tag: 'Cirugía', kind: 'pharma', items: [
          { t: 'Miringotomía con tubo', d: 'Y mastoidectomía con drenaje si hay absceso',
            say: 'El especialista hace una miringotomía con tubo de ventilación, y en el absceso subperióstico o la mastoiditis coalescente, una mastoidectomía con drenaje de la colección.' },
          { t: 'Lo que apura la cirugía', d: 'Trombosis del seno sigmoides, absceso cerebral, meningitis, parálisis facial',
            say: 'Lo que justifica la urgencia son las complicaciones: la trombosis del seno sigmoides, el absceso cerebeloso o temporal, la meningitis y la parálisis facial.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Integremos lo que vimos en un árbol de decisión, partiendo del niño con una masa detrás de la oreja.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Mastoiditis versus adenitis retroauricular',
      head: ['', 'Mastoiditis aguda', 'Adenitis retroauricular'],
      rows: [
        { cells: ['Otoscopía', 'Otitis media: abombado o perforado, con otorrea', 'Normal, tímpano sano'],
          say: 'Hay un diagnóstico diferencial que te pueden poner: el ganglio retroauricular inflamado. La diferencia parte en la otoscopía. En la mastoiditis hay una otitis media evidente. En la adenitis el tímpano es normal.' },
        { cells: ['Surco retroauricular', 'Borrado', 'Respetado; ganglio móvil'],
          say: 'El surco retroauricular está borrado en la mastoiditis, y respetado en la adenitis, donde se palpa un ganglio móvil o delimitado.' },
        { cells: ['Pabellón', 'Desplazado hacia adelante y abajo', 'Posición normal'],
          say: 'El pabellón está desplazado hacia adelante y abajo en la mastoiditis, y en su posición normal en la adenitis.' },
        { cells: ['TAC de peñasco', 'Pérdida de trabéculas, coalescencia', 'Celdas aireadas, sin osteólisis'],
          say: 'En el TAC, la mastoiditis muestra pérdida de trabéculas. La adenitis, celdas bien aireadas.' },
        { cells: ['Conducta', 'Hospitalizar + ceftriaxona EV + TAC', 'Ambulatorio: cloxacilina o cefadroxilo oral'],
          say: 'Y la conducta es la trampa. La mastoiditis se hospitaliza, con ceftriaxona endovenosa y TAC. La adenitis se maneja ambulatoria con antibiótico oral, cloxacilina o cefadroxilo. Tratar una mastoiditis con antibiótico oral y alta es el error.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un lactante de 16 meses consulta por fiebre de hasta 39,5 °C, irritabilidad y llanto continuo de 48 horas. Hace 8 días completó 7 días de amoxicilina por una otitis media aguda, con mejoría transitoria. Está febril y decaído. En la región retroauricular derecha hay una masa eritematosa, caliente y fluctuante, con borramiento del surco retroauricular y desplazamiento anteroinferior del pabellón. La otoscopía derecha muestra el conducto estrechado por edema posterosuperior y el tímpano eritematoso y abombado.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Amoxicilina con ácido clavulánico oral por 14 días y control en 48 horas' },
        { letter: 'B', text: 'Gotas óticas de ciprofloxacino y control ambulatorio' },
        { letter: 'C', text: 'Hospitalizar, TAC de peñasco y cerebro con contraste, ceftriaxona endovenosa, y evaluación urgente por otorrinolaringología' },
        { letter: 'D', text: 'Cloxacilina oral y observación del ganglio retroauricular' },
        { letter: 'E', text: 'Solo analgesia y reevaluación al día siguiente' },
      ],
      correct: 'C',
      explanation: 'Mastoiditis aguda con probable absceso subperióstico: oreja desplazada, surco borrado y fluctuación. Se hospitaliza, se pide TAC con contraste y se inicia ceftriaxona endovenosa. La fluctuación obliga a evaluación urgente por otorrinolaringología para drenaje quirúrgico.',
      say: {
        stem: 'Veamos un caso. Un lactante de dieciséis meses con fiebre de treinta y nueve coma cinco, irritable, que terminó amoxicilina por una otitis hace ocho días. Detrás de la oreja derecha tiene una masa roja, caliente y fluctuante. El surco retroauricular está borrado y el pabellón desplazado hacia adelante y abajo. La otoscopía muestra el tímpano rojo y abombado.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: amoxicilina con clavulánico oral, gotas de ciprofloxacino, hospitalizar con TAC y ceftriaxona endovenosa, cloxacilina oral, o solo analgesia. Piénsalo.',
        answer: 'Es la C. Oreja desplazada, surco borrado y masa fluctuante son una mastoiditis con probable absceso subperióstico. Hospitalizas, pides TAC de peñasco y cerebro con contraste y partes con ceftriaxona endovenosa. Como hay fluctuación, además interconsultas a otorrino para drenaje quirúrgico. La A es la trampa: un niño que ya falló con amoxicilina oral no se maneja con otro antibiótico oral y a la casa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 104',
      stem: 'Un paciente de 59 años presenta hipoacusia bilateral, asociado a otorrea, de larga data. Consulta por un cuadro de reciente inicio, de mayor hipoacusia derecha, asociada a vértigo persistente, que ha ido en aumento. Al examen se aprecia nistagmo horizontal, con fase rápida a derecha.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Otomastoiditis aguda' },
        { letter: 'B', text: 'Laberintitis aguda' },
        { letter: 'C', text: 'Vértigo postural paroxístico' },
        { letter: 'D', text: 'Absceso cerebral' },
        { letter: 'E', text: 'Neuronitis vestibular' },
      ],
      correct: 'B',
      explanation: 'Otorrea crónica con hipoacusia, más vértigo persistente y nistagmo de reciente inicio: laberintitis aguda, complicación de la otitis media crónica.',
      say: {
        stem: 'Ahora preguntas reales, que muestran otras complicaciones de una otitis crónica. La primera, del EUNACOM de julio de dos mil quince. Paciente de cincuenta y nueve años con hipoacusia y otorrea de larga data en los dos oídos, que ahora tiene más hipoacusia derecha y un vértigo persistente que va en aumento. Tiene nistagmo horizontal con fase rápida a la derecha.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: otomastoiditis aguda, laberintitis aguda, vértigo posicional paroxístico, absceso cerebral o neuronitis vestibular. Piénsalo.',
        answer: 'Es la B, laberintitis aguda. Hay una otitis crónica de años, y ahora el oído interno se compromete: más hipoacusia, vértigo persistente y nistagmo. Esto conecta con la clase anterior, donde el colesteatoma erosionaba el canal semicircular y daba fístula y vértigo. El vértigo posicional paroxístico dura segundos y no da hipoacusia, y la neuronitis vestibular no tiene otorrea ni hipoacusia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 84',
      stem: 'Un paciente de 45 años, con historia de años de evolución de hipoacusia y supuración por oído derecho, consulta por compromiso del estado general, fiebre hasta 39 °C, vértigo y secreción ótica purulenta. Al examen se aprecia nistagmus horizontal con fase rápida a izquierda, a la otoscopía solo se aprecia secreción purulenta en conducto auditivo externo, no se observa tímpano.',
      question: 'El tratamiento más adecuado en este caso es:',
      options: [
        { letter: 'A', text: 'Antibióticos endovenosos' },
        { letter: 'B', text: 'Lavado ótico' },
        { letter: 'C', text: 'Cirugía de urgencia' },
        { letter: 'D', text: 'Corticoides endovenosos' },
        { letter: 'E', text: 'Antiinflamatorios endovenosos' },
      ],
      correct: 'A',
      explanation: 'Laberintitis aguda con fiebre y mal estado general: lo primero es antibiótico endovenoso, igual que en la mastoiditis. La cirugía se evalúa caso a caso, por ejemplo si es secundaria a un colesteatoma. Es una pregunta discutible.',
      say: {
        stem: 'Y otra, del EUNACOM de julio de dos mil trece. Paciente de cuarenta y cinco años con años de hipoacusia y supuración del oído derecho. Consulta con mal estado general, fiebre de treinta y nueve grados, vértigo y secreción purulenta. Tiene nistagmo horizontal, y en la otoscopía solo se ve pus en el conducto, sin poder ver el tímpano.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: antibióticos endovenosos, lavado ótico, cirugía de urgencia, corticoides endovenosos, o antiinflamatorios endovenosos. Piénsalo.',
        answer: 'Es la A. Es una laberintitis aguda con compromiso sistémico, y lo primero es antibiótico endovenoso, igual que en la mastoiditis. La cirugía de urgencia es la alternativa tentadora, pero se evalúa caso a caso, por ejemplo si hay un colesteatoma de base. Los corticoides o antiinflamatorios no tratan la infección. Esta pregunta es discutible, pero esa es la respuesta del examen.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un niño de 2 años presenta fiebre de 39,3 °C, irritabilidad y tumefacción retroauricular izquierda dolorosa y eritematosa que desplaza el pabellón hacia adelante y borra el surco retroauricular. La otoscopía muestra el tímpano izquierdo abombado e hiperémico.',
      question: '¿Cuál es la conducta diagnóstica y terapéutica inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Amoxicilina con ácido clavulánico oral por 14 días y control ambulatorio en 48 horas' },
        { letter: 'B', text: 'Ecografía de partes blandas y alta con antiinflamatorios' },
        { letter: 'C', text: 'Hospitalizar de inmediato, TAC de peñasco con contraste e iniciar ceftriaxona endovenosa' },
        { letter: 'D', text: 'Drenaje por punción ambulatoria y cefadroxilo oral' },
        { letter: 'E', text: 'Gotas óticas de ciprofloxacino y radiografía simple de cráneo' },
      ],
      correct: 'C',
      explanation: 'Mastoiditis aguda: urgencia que exige hospitalización, TAC de peñasco con contraste y ceftriaxona endovenosa, con evaluación por otorrinolaringología. El manejo ambulatorio con antibióticos orales no corresponde.',
      say: {
        stem: 'Una pregunta del banco, de caso representativo. Un niño de dos años con fiebre de treinta y nueve coma tres, irritable, con una tumefacción dolorosa y roja detrás de la oreja izquierda, que la desplaza hacia adelante y borra el surco. El tímpano está abombado.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: amoxicilina con clavulánico oral y control, ecografía y alta, hospitalizar con TAC y ceftriaxona, punción ambulatoria con cefadroxilo, o gotas de ciprofloxacino con radiografía. Piénsalo.',
        answer: 'Es la C. Es una mastoiditis, y se hospitaliza de inmediato, con TAC de peñasco con contraste y ceftriaxona endovenosa. Las opciones ambulatorias con antibiótico oral son la trampa, porque se trata de una infección que está destruyendo el hueso temporal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: '¿Cuál de los siguientes signos imagenológicos en el angio-TAC de cráneo o TAC con contraste es característico de la trombosis séptica del seno sigmoide como complicación de una otitis media o mastoiditis?',
      question: '¿Cuál es el hallazgo característico?',
      options: [
        { letter: 'A', text: 'Signo de la cuerda en la arteria cerebral media' },
        { letter: 'B', text: 'Signo del delta vacío (defecto de llene central en el seno venoso dural)' },
        { letter: 'C', text: 'Realce leptomeníngeo difuso en la base del cráneo sin colecciones' },
        { letter: 'D', text: 'Hiperdensidad espontánea del clivus y del agujero magno' },
        { letter: 'E', text: 'Neumoencéfalo espontáneo en la cisterna perimesencefálica' },
      ],
      correct: 'B',
      explanation: 'El signo del delta vacío es el defecto de repleción del trombo, que no capta contraste, rodeado por el realce de la pared dural del seno. Es característico de la tromboflebitis séptica de los senos durales por infecciones óticas.',
      say: {
        stem: 'Y cerremos con otra del banco, de caso representativo, sobre imagenología. Pregunta cuál es el signo en el angio TAC o TAC con contraste característico de la trombosis séptica del seno sigmoide, como complicación de una otitis media o una mastoiditis.',
        question: '¿Cuál es el hallazgo característico?',
        options: 'Las opciones: signo de la cuerda en la arteria cerebral media, signo del delta vacío, realce leptomeníngeo difuso, hiperdensidad del clivus, o neumoencéfalo. Piénsalo.',
        answer: 'Es la B, el signo del delta vacío. El trombo no capta contraste, queda como un defecto central, y la pared del seno realza alrededor. El signo de la cuerda es de la arteria cerebral media, en el ictus, y no tiene nada que ver con una otitis.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 6.03.5.001 · Drenaje de absceso mastoídeo",
      "stem": "Un niño de 3 años, con otitis media aguda izquierda hace 10 días, presenta fiebre de 39 °C, tumefacción retroauricular fluctuante y pabellón auricular desplazado hacia adelante. Lleva 24 horas con ceftriaxona endovenosa. El TAC de peñasco con contraste muestra ocupación de las celdillas mastoídeas y un absceso subperióstico de 2 cm, sin complicaciones intracraneales.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Cambiar a amoxicilina con ácido clavulánico oral y dar de alta"
        },
        {
          "letter": "B",
          "text": "Mastoidectomía radical con vaciamiento del oído medio"
        },
        {
          "letter": "C",
          "text": "Mastoidectomía simple con drenaje del absceso, miringotomía y mantener el antibiótico endovenoso"
        },
        {
          "letter": "D",
          "text": "Solo gotas óticas de ciprofloxacino"
        },
        {
          "letter": "E",
          "text": "Observar 7 días más con el mismo antibiótico, sin procedimientos"
        }
      ],
      "correct": "C",
      "explanation": "Un absceso subperióstico documentado es indicación de cirugía: mastoidectomía simple, cortical, con drenaje de la colección, junto con miringotomía para descomprimir el oído medio y cultivar, manteniendo el antibiótico endovenoso. La mastoidectomía radical es para el colesteatoma, no para la mastoiditis aguda.",
      "say": {
        "stem": "Niño de tres años con una otitis media hace diez días, que ahora tiene fiebre de treinta y nueve, una tumefacción fluctuante detrás de la oreja izquierda y el pabellón desplazado hacia adelante. Lleva un día con ceftriaxona, y el TAC muestra un absceso subperióstico de dos centímetros, sin complicaciones dentro del cráneo.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: pasar a antibiótico oral y alta, mastoidectomía radical, mastoidectomía simple con drenaje y miringotomía, solo gotas óticas o observar siete días más. Piénsalo.",
        "answer": "Es la C. Un absceso subperióstico documentado se drena: mastoidectomía simple con drenaje, más miringotomía, sin suspender el antibiótico endovenoso. Seguir solo con el antibiótico tienta porque lleva apenas un día, pero una colección de pus no se resuelve sin drenarla."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: complicaciones de la otitis',
      cards: [
        { title: 'Mastoiditis aguda', tag: 'Reconocer', kind: 'alert', items: [
          { t: 'Oreja despegada y surco borrado', d: 'Edema y dolor sobre la mastoides',
            say: 'Cerremos con las reglas de oro. La mastoiditis aguda se reconoce por la tríada: edema doloroso sobre la mastoides, surco retroauricular borrado y pabellón desplazado hacia adelante y abajo.' },
          { t: 'Toda sospecha se hospitaliza', d: 'TAC de peñasco con contraste',
            say: 'Toda sospecha se hospitaliza y se estudia con TAC de peñasco con contraste.' },
        ] },
        { title: 'Tratamiento', tag: 'Hospital', kind: 'pharma', items: [
          { t: 'Ceftriaxona EV + miringotomía', d: 'Más clindamicina o vancomicina',
            say: 'Se trata con ceftriaxona endovenosa a cien miligramos por kilo al día y miringotomía descompresiva.' },
          { t: 'Cirugía si hay colección o falla', d: 'Mastoidectomía',
            say: 'Se opera con una mastoidectomía si hay absceso subperióstico fluctuante, falta de respuesta en veinticuatro a cuarenta y ocho horas, o complicaciones neurológicas.' },
        ] },
        { title: 'Complicaciones', tag: 'Alarma', kind: 'key', items: [
          { t: 'Fiebre en picos de sierra', d: 'Signo del delta vacío en el TAC',
            say: 'La fiebre en picos de sierra con cefalea hace pensar en tromboflebitis del seno sigmoide, y el TAC muestra el signo del delta vacío.' },
          { t: 'Vértigo e hipoacusia en otitis crónica', d: 'Laberintitis: antibiótico EV primero',
            say: 'Y en una otitis crónica, el vértigo con hipoacusia hace pensar en laberintitis, que parte con antibiótico endovenoso. Si te llevas una sola idea de hoy: oreja despegada en un niño con otitis, hospital, ceftriaxona y TAC. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de enfrentamiento: mastoiditis aguda',
    root: N('start', 'Niño con otitis reciente y masa detrás de la oreja', 'Fiebre alta, dolor retroauricular',
      'Un niño que tuvo una otitis media aguda y ahora tiene fiebre alta y dolor detrás de la oreja. Lo primero es examinar la oreja y el tímpano.',
      ['', N('q', '¿Hay otitis media y la oreja está desplazada?', 'Surco borrado, tímpano abombado o perforado',
        'La tríada retroauricular decide: edema sobre la mastoides, surco borrado y pabellón hacia adelante y abajo, con otitis media en la otoscopía.',
        ['No: tímpano normal, ganglio móvil', N('ok', 'Adenitis retroauricular', 'Antibiótico oral ambulatorio',
          'Con otoscopía normal y un ganglio móvil, es una adenitis o celulitis. Se maneja ambulatorio con cloxacilina o cefadroxilo orales.')],
        ['Sí: mastoiditis aguda', N('alert', 'Hospitalizar y TAC de peñasco con contraste', 'Ceftriaxona EV 100 mg/kg/día + miringotomía',
          'Es una urgencia. Hospitalización, TAC con contraste, ceftriaxona endovenosa asociada a clindamicina o vancomicina, y miringotomía descompresiva.',
          ['Fluctuación, sin respuesta a 24 a 48 h o signos neurológicos', N('refer', 'Mastoidectomía por otorrinolaringología', 'Drenaje de colecciones',
            'Si hay absceso subperióstico fluctuante, falta de respuesta a las veinticuatro a cuarenta y ocho horas, o complicaciones neurológicas, se hace mastoidectomía.')],
          ['Fiebre en picos de sierra y cefalea', N('refer', 'Sospechar tromboflebitis del seno sigmoide', 'Angio-TAC: signo del delta vacío',
            'Fiebre en agujas, calofríos, cefalea e hipertensión endocraneana hacen sospechar trombosis séptica del seno. El angio TAC muestra el delta vacío.')],
        )],
      )],
    ),
  },
};
