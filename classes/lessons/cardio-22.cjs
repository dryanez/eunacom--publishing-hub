// Clase 4.1 (Cardiología) — Paciente con soplo: semiología y maniobras dinámicas. Guion escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_4.cjs (cardio-22). Código 1.01.1.021 Paciente con soplo
// (Dx específico · Tx inicial · Seguimiento derivar), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-22 / --search "soplo|valsalva|maniobra|ductus|interventricular"): solo hay una del
// código con enunciado completo: Julio 2024 P88 (soplo continuo infraclavicular, ductus). Copiada tal cual del banco.
// Descartadas: Diciembre 2017 P138 (recién nacido con soplo pansistólico: es de pediatría, 2.01.1.050); Diciembre 2024 P68 (alternativas
// rotas, «DAP porque era continuo» con comentario del alumno); Diciembre 2019 P113 y Diciembre 2017 P1 (soplo funcional vs CIA:
// la clave marca CIA aunque la clínica es de soplo funcional; se anotan como dudosas en la revisión).
// Fotos: ninguna (la semiología no tiene foto clínica). En movimiento: scenes/cardio_b4.html ?v=soplos (fonocardiograma de los
// cuatro tipos de soplo y respuesta a las maniobras), gráfico propio de código.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cardio-22',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Describir un soplo, reconocer su patrón y usar las maniobras para afinar el diagnóstico',
      say: 'Bienvenido. Con esta clase partimos el bloque de valvulopatías, y partimos por lo más frecuente de la consulta cardiológica: el paciente con un soplo. En el EUNACOM casi nunca preguntan el soplo solo. Te dan un caso, describen un soplo, un pulso o un ruido, y tú tienes que ponerle nombre. Hoy aprendes el método: cómo describir un soplo, los cuatro patrones que más se repiten y qué le hace cada maniobra.',
    },

    {
      type: 'points',
      kicker: 'Método',
      title: 'Cómo se describe un soplo',
      cards: [
        { title: 'Seis datos', tag: 'Siempre los mismos', kind: 'key', items: [
          { t: 'Momento del ciclo', d: 'Sistólico, diastólico o continuo',
            say: 'Un soplo es un ruido producido por flujo turbulento. Aparece cuando la sangre pasa por un orificio estrecho, cuando retrocede por una válvula que no cierra, cuando cruza un defecto entre cavidades o cuando simplemente circula con más velocidad, como en el embarazo, la fiebre o la anemia. Lo primero que dices siempre es el momento: sistólico, diastólico o continuo.' },
          { t: 'Forma, foco e irradiación', d: 'Rombo, barra o decreciente; ápex, borde esternal',
            say: 'Después, la forma: en rombo, en barra o decreciente. El foco donde suena más fuerte, y hacia dónde se irradia: al cuello, a la axila o al dorso. Cada valvulopatía tiene su combinación.' },
          { t: 'Grado de Levine', d: 'Con frémito desde IV/VI',
            say: 'Y el grado, con la escala de Levine, del uno al seis. A partir del grado cuatro hay frémito, una vibración que se palpa, y ese soplo siempre es patológico. Pero ojo: el grado no mide la gravedad. Una estenosis aórtica crítica puede sonar suave.' },
        ] },
        { title: 'Los otros ruidos', tag: 'Más específicos', kind: 'criteria', items: [
          { t: 'R1 intenso + chasquido', d: 'Estenosis mitral',
            say: 'Los demás ruidos son más específicos que el soplo. Un primer ruido intenso con un chasquido de apertura orienta a estenosis mitral.' },
          { t: 'R2 único o apagado', d: 'Estenosis aórtica grave',
            say: 'Un segundo ruido único o apagado, a estenosis aórtica grave.' },
          { t: 'R2 desdoblado y fijo · clic mesosistólico', d: 'CIA · prolapso mitral',
            say: 'Un desdoblamiento amplio y fijo del segundo ruido, a comunicación interauricular. Y un clic en mitad de la sístole, a prolapso mitral.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Soplos sistólicos',
      title: 'Eyectivo, holosistólico o telesistólico',
      cards: [
        { title: 'Eyectivo (en rombo)', tag: 'Hay un obstáculo', kind: 'key', items: [
          { t: 'Estenosis aórtica y pulmonar', d: 'Crece y decrece; pico más tardío = más grave',
            say: 'Entre el primer y el segundo ruido caben dos tipos de soplo. El eyectivo nace cuando el ventrículo expulsa la sangre contra un obstáculo. Empieza un poco después del primer ruido, crece hasta la mitad de la sístole y decrece: forma de rombo. Es el de la estenosis aórtica, que se irradia a las carótidas, y de la estenosis pulmonar. Mientras más grave la estenosis, más tardío es el pico.' },
          { t: 'MCH y CIA', d: 'Hiperflujo pulmonar en la CIA',
            say: 'También es eyectivo el de la miocardiopatía hipertrófica obstructiva, que no se irradia a las carótidas, y el de la comunicación interauricular, que suena en el foco pulmonar por hiperflujo, no por el cortocircuito.' },
        ] },
        { title: 'Holosistólico y telesistólico', tag: 'Fuga o prolapso', kind: 'alert', items: [
          { t: 'Holosistólico: IM, IT y CIV', d: 'Todo el ciclo, en barra',
            say: 'El soplo regurgitante empieza junto con el primer ruido y dura hasta el segundo, con la misma intensidad, en barra. Es la insuficiencia mitral, con irradiación a la axila, la insuficiencia tricuspídea y la comunicación interventricular, ambas en el borde esternal izquierdo bajo.' },
          { t: 'Telesistólico con clic', d: 'Prolapso mitral',
            say: 'El soplo telesistólico precedido de un clic es el del prolapso mitral.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Soplos diastólicos y continuos',
      title: 'Todo soplo diastólico es patológico',
      cards: [
        { title: 'Diastólicos', tag: 'Siempre eco', kind: 'alert', items: [
          { t: 'Decreciente aspirativo: IAo', d: 'Sentado, inclinado, en espiración',
            say: 'Un soplo diastólico es patológico hasta demostrar lo contrario y exige ecocardiograma. El decreciente, de tono alto, que parte justo después del segundo ruido, es la insuficiencia aórtica. Se oye mejor con el paciente sentado, inclinado hacia delante y en espiración.' },
          { t: 'Retumbo con chasquido: EM', d: 'Ápex, decúbito lateral izquierdo',
            say: 'El retumbo grave con chasquido de apertura, en el ápex y con el paciente de lado, sobre el lado izquierdo, es la estenosis mitral. Y el retumbo apical sin chasquido, en una insuficiencia aórtica grave, es el soplo de Austin Flint.' },
        ] },
        { title: 'Continuos', tag: 'Sístole y diástole', kind: 'key', items: [
          { t: 'Ductus: «en maquinaria»', d: 'Infraclavicular izquierdo; pulso saltón',
            say: 'El soplo continuo abarca sístole y diástole sin cortes. El clásico es el ductus arterioso persistente, el soplo en maquinaria, bajo la clavícula izquierda, con pulso saltón.' },
          { t: 'Zumbido venoso: inocente', d: 'Desaparece al comprimir la yugular',
            say: 'El zumbido venoso, en la base del cuello de un niño, también es continuo, pero es inocente: desaparece al comprimir la yugular o al girar la cabeza. Ahora, mira cómo se ven estos cuatro patrones en un fonocardiograma.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Cuatro soplos, cuatro formas',
      images: [
        { src: 'animaciones/cardio-22/A1_soplos_y_maniobras.mp4', label: 'Fonocardiograma de los soplos y las maniobras', credit: 'Animación propia con los criterios del libro' },
      ],
      steps: [
        { note: 'Rombo, barra, decreciente, continuo; luego las maniobras',
          say: 'Sigue el trazado verde del electrocardiograma y debajo el fonocardiograma, con el primer y el segundo ruido. Primero el eyectivo: crece y decrece como un rombo. Después el holosistólico, que ocupa toda la sístole como una barra. Luego el diastólico, que parte después del segundo ruido y se va apagando. Y por último el continuo, que no se interrumpe. Al final aparecen las cuatro maniobras que vamos a ver ahora.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Maniobras',
      title: 'Qué le hace cada maniobra al soplo',
      nodes: [
        { id: 'i', col: 0, row: 0, k: 'start', t: 'Inspiración profunda', s: 'Rivero-Carvallo' },
        { id: 'd', col: 1, row: 0, k: 'good', t: 'Soplos derechos aumentan', s: 'IT, EP, ET, IP' },
        { id: 'v', col: 0, row: 2, k: 'start', t: 'Valsalva o de pie', s: 'Menos precarga' },
        { id: 'a', col: 1, row: 2, k: 'trap', t: 'Casi todos disminuyen', s: 'Solo MCH y prolapso aumentan' },
        { id: 'h', col: 0, row: 4, k: 'start', t: 'Handgrip', s: 'Más poscarga' },
        { id: 'r', col: 1, row: 4, k: 'alert', t: 'IM, IAo y CIV aumentan', s: 'EAo y MCH disminuyen' },
        { id: 'c', col: 3, row: 2, k: 'mech', t: 'Cuclillas', s: 'Más precarga y poscarga' },
        { id: 'e', col: 4, row: 2, k: 'effect', t: 'MCH disminuye', s: 'EAo aumenta · clic del prolapso tardío' },
      ],
      edges: [{ from: 'i', to: 'd' }, { from: 'v', to: 'a' }, { from: 'h', to: 'r' }, { from: 'c', to: 'e' }],
      steps: [
        { show: ['i', 'd'], note: 'La inspiración aumenta los soplos derechos',
          say: 'Las maniobras cambian el retorno venoso, el volumen del ventrículo o la poscarga, y con eso el soplo. Empecemos por la inspiración profunda, la maniobra de Rivero-Carvallo. La presión negativa del tórax aumenta el retorno al corazón derecho, y todos los soplos del corazón derecho aumentan: insuficiencia y estenosis tricuspídea, estenosis e insuficiencia pulmonar. Es la clave para separar una insuficiencia tricuspídea de una mitral.' },
        { show: ['v', 'a'], note: 'Valsalva: solo dos aumentan',
          say: 'La maniobra de Valsalva y ponerse de pie disminuyen el retorno venoso y el volumen del ventrículo izquierdo. La mayoría de los soplos disminuye. Solo dos aumentan: la miocardiopatía hipertrófica obstructiva, porque la cavidad más pequeña acerca la valva mitral al septo, y el prolapso mitral, cuyo clic se adelanta y cuyo soplo se alarga. Esta es la pregunta que más se repite.' },
        { show: ['h', 'r'], note: 'Handgrip: aumentan los regurgitantes izquierdos',
          say: 'El handgrip, apretar con fuerza la mano, aumenta la poscarga. Aumentan los soplos regurgitantes del corazón izquierdo: insuficiencia mitral, insuficiencia aórtica y comunicación interventricular. Y disminuyen los eyectivos, la estenosis aórtica y la miocardiopatía hipertrófica.' },
        { show: ['c', 'e'], note: 'Cuclillas: lo contrario de Valsalva',
          say: 'Las cuclillas y la elevación pasiva de las piernas aumentan el retorno y la poscarga. Es lo contrario de Valsalva: el soplo de la miocardiopatía hipertrófica disminuye, el de la estenosis aórtica aumenta, y el clic del prolapso se retrasa. Y un truco más: tras una pausa postextrasistólica, el soplo de la estenosis aórtica aumenta y el de la insuficiencia mitral no cambia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuándo estudiar',
      title: 'Inocente o patológico',
      cards: [
        { title: 'Soplo inocente', tag: 'Se tranquiliza', kind: 'normal', items: [
          { t: 'Sistólico I-II, corto, sin frémito', d: 'Ruidos y ECG normales; sin síntomas',
            say: 'El soplo inocente o funcional es sistólico, eyectivo, de grado uno o dos, corto, suave, sin frémito, que no se irradia y cambia con la posición. Los ruidos son normales, el paciente no tiene síntomas y el electrocardiograma es normal. Es muy frecuente en niños, y aparece con la fiebre, la anemia, el hipertiroidismo y el embarazo: se trata la causa.' },
          { t: 'Esclerosis aórtica del anciano', d: 'R2 conservado, pulso normal',
            say: 'En el anciano, la esclerosis aórtica da un soplo eyectivo, pero con el segundo ruido conservado y el pulso normal. En la estenosis aórtica verdadera el segundo ruido está apagado y el pulso es parvus et tardus.' },
        ] },
        { title: 'Pedir ecocardiograma', tag: 'Doppler y derivar', kind: 'alert', items: [
          { t: 'Diastólico, continuo o holosistólico', d: 'Grado III o más, frémito',
            say: 'Se pide ecocardiograma Doppler ante todo soplo diastólico, continuo u holosistólico, y ante el sistólico de grado tres o más, con frémito o irradiado.' },
          { t: 'Síntomas, ruidos anormales, ECG o Rx alterados', d: 'Fiebre con soplo nuevo: endocarditis',
            say: 'También si hay síntomas, como disnea, síncope o angina, ruidos anormales, un electrocardiograma o una radiografía alterados. Y la fiebre con un soplo nuevo o cambiante es una endocarditis hasta demostrar lo contrario. En atención primaria identificas el soplo, pides el ecocardiograma y derivas.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del soplo al diagnóstico y a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Soplos: dato, patrón, error',
      head: ['Dato', 'Patrón', 'Error típico'],
      rows: [
        { cells: ['Soplo holosistólico que aumenta al inspirar', 'Insuficiencia tricuspídea', 'Insuficiencia mitral'],
          say: 'Un soplo holosistólico que aumenta con la inspiración es insuficiencia tricuspídea. Pensar en la mitral es el error, porque la mitral no cambia con la respiración.' },
        { cells: ['Soplo eyectivo que aumenta con Valsalva', 'Miocardiopatía hipertrófica', 'Estenosis aórtica'],
          say: 'Un soplo eyectivo que aumenta con Valsalva es miocardiopatía hipertrófica obstructiva. La estenosis aórtica disminuye con esa maniobra.' },
        { cells: ['Clic mesosistólico que se adelanta al pararse', 'Prolapso mitral', 'Insuficiencia mitral clásica'],
          say: 'Un clic mesosistólico que se adelanta al ponerse de pie es un prolapso mitral. La insuficiencia mitral clásica no tiene clic.' },
        { cells: ['Soplo continuo infraclavicular izquierdo', 'Ductus arterioso persistente', 'Comunicación interventricular'],
          say: 'Un soplo continuo bajo la clavícula izquierda es un ductus. La comunicación interventricular es holosistólica, con frémito, y no continua.' },
        { cells: ['Retumbo diastólico sin chasquido en una IAo', 'Soplo de Austin Flint', 'Estenosis mitral'],
          say: 'Un retumbo apical sin chasquido, en alguien con insuficiencia aórtica, es el Austin Flint. La estenosis mitral verdadera tiene primer ruido intenso y chasquido de apertura.' },
        { cells: ['Soplo sistólico I-II suave, joven asintomático', 'Soplo funcional', 'Pedir coronariografía o cirugía'],
          say: 'Un soplo suave, grado uno o dos, en un joven asintomático, es funcional: se tranquiliza. Estudiarlo en exceso es el error de ese caso.' },
        { cells: ['Soplo diastólico en cualquier paciente', 'Patológico: ecocardiograma', 'Tranquilizar y controlar'],
          say: 'Todo soplo diastólico se estudia con ecocardiograma. Tranquilizar y controlar es el error.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 22 años, futbolista aficionado, consulta por un síncope durante un partido, con recuperación espontánea. Un tío falleció súbitamente a los 40 años. Examen: PA 115/70 mmHg, FC 70 lpm, pulso carotídeo rápido y de doble impulso. En el borde esternal izquierdo se ausculta un soplo sistólico eyectivo III/VI, sin irradiación al cuello, que aumenta al ponerse de pie y con Valsalva y disminuye en cuclillas. R2 normal.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Estenosis aórtica valvular' },
        { letter: 'B', text: 'Miocardiopatía hipertrófica obstructiva' },
        { letter: 'C', text: 'Insuficiencia mitral' },
        { letter: 'D', text: 'Comunicación interventricular' },
        { letter: 'E', text: 'Soplo funcional' },
      ],
      correct: 'B',
      explanation: 'Un soplo eyectivo que aumenta con Valsalva y de pie, y disminuye en cuclillas, es el sello de la miocardiopatía hipertrófica obstructiva: al bajar la precarga la cavidad se achica y la obstrucción empeora. El síncope de esfuerzo, la muerte súbita familiar, el pulso de doble impulso y la ausencia de irradiación a las carótidas lo separan de la estenosis aórtica, cuyo soplo disminuye con Valsalva. Se pide ecocardiograma Doppler, se prohíbe el ejercicio intenso y se deriva.',
      say: {
        stem: 'Un hombre de veintidós años, futbolista aficionado, tiene un síncope durante un partido. Un tío murió de forma súbita a los cuarenta años. El pulso carotídeo es rápido y de doble impulso, y en el borde esternal izquierdo hay un soplo sistólico eyectivo de grado tres, que no se irradia al cuello. Aumenta al ponerse de pie y con la maniobra de Valsalva, y disminuye en cuclillas. El segundo ruido es normal.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: estenosis aórtica valvular; miocardiopatía hipertrófica obstructiva; insuficiencia mitral; comunicación interventricular; o soplo funcional. Piénsalo.',
        answer: 'Es la B. Un soplo eyectivo que aumenta con Valsalva y disminuye en cuclillas es el de la miocardiopatía hipertrófica obstructiva, y el síncope de esfuerzo con muerte súbita en la familia lo confirma. La A tienta porque también es eyectivo, pero el de la estenosis aórtica disminuye con Valsalva, se irradia a las carótidas y viene con un pulso parvus et tardus. Se pide ecocardiograma y se prohíbe el ejercicio intenso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 88',
      stem: 'Un niño de 8 años acude a consulta por dificultad para seguir el ritmo en actividades físicas en la escuela, con infecciones respiratorias recurrentes. Signos vitales normales, auscultación pulmonar normal. A la auscultación cardiaca se detecta un soplo continuo de intensidad III/VI en la región paraesternal e infraclavicular izquierda. Talla -1 DE para su edad.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Miocardiopatía hipertrófica' },
        { letter: 'B', text: 'Comunicación interventricular' },
        { letter: 'C', text: 'Comunicación interauricular' },
        { letter: 'D', text: 'Ductus arterioso persistente' },
        { letter: 'E', text: 'Soplo funcional' },
      ],
      correct: 'D',
      explanation: 'Un soplo continuo, que abarca sístole y diástole, en la región infraclavicular izquierda es el soplo en maquinaria del ductus arterioso persistente. La CIV da un soplo holosistólico con frémito y la CIA un soplo eyectivo con desdoblamiento fijo del segundo ruido. Se confirma con ecocardiograma y se deriva para el cierre.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un niño de ocho años no puede seguir el ritmo de sus compañeros en la escuela y tiene infecciones respiratorias recurrentes. Los signos vitales y los pulmones son normales. En el corazón se ausculta un soplo continuo de grado tres, paraesternal e infraclavicular izquierdo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: miocardiopatía hipertrófica; comunicación interventricular; comunicación interauricular; ductus arterioso persistente; o soplo funcional. Piénsalo.',
        answer: 'Es la D. Un soplo continuo, en maquinaria, bajo la clavícula izquierda es el ductus arterioso persistente. La B tienta porque también es un defecto con soplo, pero el de la comunicación interventricular es holosistólico, con frémito, y no continuo. La E no cabe: un soplo funcional no es continuo ni de grado tres.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un hombre de 34 años, usuario de drogas endovenosas, consulta por fiebre y se ausculta en el borde esternal izquierdo inferior un soplo holosistólico de grado III/VI. Al pedirle una inspiración profunda, el soplo aumenta de intensidad.',
      question: '¿Qué lesión valvular es la más probable?',
      options: [
        { letter: 'A', text: 'Insuficiencia mitral' },
        { letter: 'B', text: 'Insuficiencia tricuspídea' },
        { letter: 'C', text: 'Estenosis aórtica' },
        { letter: 'D', text: 'Comunicación interventricular restrictiva' },
        { letter: 'E', text: 'Prolapso de la válvula mitral' },
      ],
      correct: 'B',
      explanation: 'Los soplos del corazón derecho aumentan con la inspiración profunda (Rivero-Carvallo): un soplo holosistólico en el borde esternal izquierdo bajo que aumenta al inspirar es una insuficiencia tricuspídea, aquí probablemente por endocarditis derecha del usuario de drogas. La insuficiencia mitral y la CIV no cambian con la inspiración y el prolapso es telesistólico con clic.',
      say: {
        stem: 'Un hombre de treinta y cuatro años, usuario de drogas endovenosas, consulta por fiebre. Tiene un soplo holosistólico de grado tres en el borde esternal izquierdo inferior, que aumenta al pedirle una inspiración profunda.',
        question: '¿Qué lesión valvular es la más probable?',
        options: 'Las opciones: insuficiencia mitral; insuficiencia tricuspídea; estenosis aórtica; comunicación interventricular restrictiva; o prolapso mitral. Piénsalo.',
        answer: 'Es la B. Los soplos del corazón derecho aumentan con la inspiración, y este es holosistólico y está en el borde esternal izquierdo bajo: insuficiencia tricuspídea, probablemente una endocarditis derecha por el uso de drogas. La A tienta porque también es holosistólico, pero el de la insuficiencia mitral se oye en el ápex, se irradia a la axila y no cambia con la respiración.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: el paciente con soplo',
      cards: [
        { title: 'Describir y estudiar', tag: 'Método', kind: 'key', items: [
          { t: 'Momento, forma, foco, irradiación, grado', d: 'Diastólico o continuo: siempre eco',
            say: 'Cerremos con las reglas de oro. Un soplo se describe por momento, forma, foco, irradiación y grado. Todo soplo diastólico o continuo patológico se estudia con ecocardiograma, y el sistólico suave, sin síntomas ni otros hallazgos, se tranquiliza.' },
          { t: 'Eyectivo, holosistólico, decreciente, continuo', d: 'Estenosis · regurgitación · IAo · ductus',
            say: 'El eyectivo en rombo es una estenosis, o un hiperflujo. El holosistólico en barra, una regurgitación o un defecto del septo. El diastólico decreciente, una insuficiencia aórtica. Y el continuo en maquinaria, un ductus.' },
        ] },
        { title: 'Maniobras', tag: 'Las que más se preguntan', kind: 'alert', items: [
          { t: 'Inspiración: soplos derechos aumentan', d: 'Valsalva: solo MCH y prolapso aumentan',
            say: 'La inspiración aumenta los soplos derechos. Valsalva y ponerse de pie disminuyen casi todos, menos la miocardiopatía hipertrófica y el prolapso mitral, que aumentan.' },
          { t: 'Handgrip: IM, IAo y CIV aumentan', d: 'Estenosis aórtica y MCH disminuyen',
            say: 'El handgrip aumenta los regurgitantes izquierdos y disminuye los eyectivos. Si te llevas una sola idea de hoy: ante un soplo, primero el momento del ciclo, y después qué le hace la maniobra. Nos vemos en la próxima clase, con la estenosis aórtica.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Paciente con soplo: del hallazgo a la conducta',
    root: N('start', 'Soplo al examen', 'Momento, forma, foco, grado',
      'Encuentras un soplo. Lo primero es definir en qué momento del ciclo cae, y después qué forma tiene.',
      ['Sistólico suave, sano', N('ok', 'Soplo inocente o funcional', 'Tranquilizar; tratar fiebre o anemia',
        'Si es sistólico de grado uno o dos, corto, sin frémito, con ruidos y electrocardiograma normales y sin síntomas, es inocente. Se tranquiliza y se trata la causa, si la hay.')],
      ['Diastólico o continuo', N('alert', 'Siempre patológico', 'Ecocardiograma Doppler',
        'Todo soplo diastólico o continuo se considera patológico. Se pide ecocardiograma Doppler y se deriva.',
        ['Decreciente en el borde esternal', N('do', 'Insuficiencia aórtica', 'Presión de pulso amplia',
          'El diastólico decreciente aspirativo, con presión de pulso amplia y pulsos saltones, es una insuficiencia aórtica.')],
        ['Continuo en maquinaria', N('refer', 'Ductus arterioso', 'Cierre percutáneo',
          'El soplo continuo bajo la clavícula izquierda, con pulso saltón, es un ductus, y se deriva para cerrarlo.')],
      )],
      ['Sistólico fuerte o con síntomas', N('q', 'Aplicar maniobras', 'Inspiración, Valsalva, handgrip',
        'Si el sistólico es de grado tres o más, con frémito o con síntomas, pides el ecocardiograma y usas las maniobras para afinar el diagnóstico.',
        ['Aumenta con inspiración', N('do', 'Soplo del corazón derecho', 'Insuficiencia tricuspídea o estenosis pulmonar',
          'Si aumenta con la inspiración, es del corazón derecho: insuficiencia tricuspídea o estenosis pulmonar.')],
        ['Aumenta con Valsalva', N('do', 'MCH o prolapso mitral', 'Eco; evitar esfuerzo intenso',
          'Si aumenta con Valsalva y de pie, piensa en miocardiopatía hipertrófica o en prolapso mitral con su clic.')],
        ['Aumenta con handgrip', N('do', 'IM, IAo o CIV', 'Regurgitante izquierdo',
          'Si aumenta con el handgrip, es un soplo regurgitante izquierdo: insuficiencia mitral, aórtica o comunicación interventricular.')],
      )],
    ),
  },
};
