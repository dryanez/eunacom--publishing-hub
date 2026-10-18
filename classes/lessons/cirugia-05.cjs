// Clase 11.5 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs / dataset_cirugia_bloque_1.cjs (cir-05, classId cirugia-05).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-05',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Primaria o secundaria, y qué hacer con el aire libre bajo el diafragma',
      say: 'Hoy vemos la peritonitis generalizada y el abdomen perforativo. Es un tema que se resuelve con una sola pregunta: esta peritonitis, ¿es médica o quirúrgica? Si aprendes a separarlas bien, vas a acertar casi cualquier pregunta que te pongan sobre esto. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Clasificación',
      title: 'Primaria, secundaria o terciaria: no son lo mismo',
      nodes: [
        { id: 'cir', col: 0, row: 0, k: 'cause', t: 'Cirrótico con ascitis', s: 'Sin foco quirúrgico evidente' },
        { id: 'pri', col: 1, row: 0, k: 'mech', t: 'Peritonitis primaria', s: 'Monomicrobiana, PBE' },
        { id: 'med', col: 2, row: 0, k: 'good', t: 'Manejo médico', s: 'Cefotaxima, sin cirugía' },
        { id: 'vis', col: 0, row: 2, k: 'cause', t: 'Rotura de víscera hueca', s: 'Úlcera, apéndice, divertículo' },
        { id: 'sec', col: 1, row: 2, k: 'mech', t: 'Peritonitis secundaria', s: 'Polimicrobiana, más del 90 %' },
        { id: 'cx', col: 2, row: 2, k: 'alert', t: 'Laparotomía urgente', s: 'Control del foco' },
        { id: 'ter', col: 3, row: 1, k: 'trap', t: 'Peritonitis terciaria', s: 'Tras 48 horas, en la UCI' },
      ],
      edges: [
        { from: 'cir', to: 'pri' }, { from: 'pri', to: 'med' },
        { from: 'vis', to: 'sec' }, { from: 'sec', to: 'cx' },
        { from: 'cx', to: 'ter', label: 'si persiste' },
      ],
      steps: [
        { show: ['cir', 'pri'], note: 'PBE: infección sin rotura de nada',
          say: 'Empecemos separando dos escenarios que se confunden mucho. El primero es el paciente cirrótico con ascitis. Ahí las bacterias del intestino cruzan la pared sin que nada se rompa, y contaminan el líquido ascítico. Eso es la peritonitis primaria, o peritonitis bacteriana espontánea, y es monomicrobiana: casi siempre un solo germen, típicamente Escherichia coli.' },
        { show: ['med'], note: 'Aquí la cirugía está contraindicada',
          say: 'Y aquí viene el dato que más se pregunta: esta peritonitis se trata solo con antibióticos, cefotaxima o ceftriaxona endovenosa. Operar a este paciente es un error grave, porque no hay ningún foco que drenar.' },
        { show: ['vis'], note: 'Aquí sí se rompió algo',
          say: 'El segundo escenario es distinto: algo se perforó. Una úlcera, un apéndice, un divertículo. Ahí el contenido intestinal contamina el peritoneo con muchos gérmenes a la vez.' },
        { show: ['sec'], note: 'Más del noventa por ciento de las peritonitis quirúrgicas',
          say: 'Eso es la peritonitis secundaria, polimicrobiana, y es la que ves casi siempre en la práctica: más del noventa por ciento de las peritonitis que operas son de este tipo.' },
        { show: ['cx'], note: 'Al revés que en la PBE: aquí sí se opera',
          say: 'Y aquí la conducta es exactamente la opuesta: laparotomía de urgencia para controlar el foco. Fíjate en el contraste, porque es justo lo que el examen te va a poner a prueba: en la primaria, cirugía contraindicada; en la secundaria, cirugía obligatoria.' },
        { show: ['ter'], note: 'Paciente crítico, gérmenes raros',
          say: 'Y hay un tercer escenario, menos preguntado: la peritonitis terciaria. Aparece después de cuarenta y ocho horas de haber operado una secundaria, en un paciente crítico e inmunodeprimido, con gérmenes oportunistas como cándida. Guárdalo para cuando veas un caso que no mejora después de la cirugía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'La úlcera de fondo',
      title: 'Úlcera péptica: causa, clínica y diagnóstico',
      cards: [
        { title: 'Causas', tag: 'Dos grandes culpables', kind: 'key', items: [
          { t: 'Helicobacter pylori', d: '90 % de las duodenales, 70 % de las gástricas',
            say: 'Antes de ver cómo se perfora, veamos de dónde viene la úlcera. La causa principal es la bacteria Helicobacter pylori: está detrás de cerca del noventa por ciento de las duodenales y del setenta por ciento de las gástricas.' },
          { t: 'AINE', d: 'Menos frecuentes: estrés, tabaco, Zollinger-Ellison',
            say: 'La segunda causa son los antiinflamatorios, los AINE. Más raras son el estrés crítico, el tabaco y el síndrome de Zollinger-Ellison.' },
        ] },
        { title: 'Clínica', tag: 'Epigastralgia urente', kind: 'criteria', items: [
          { t: 'Duodenal: calma al comer', d: 'Y despierta de noche',
            say: 'El dolor es epigástrico y urente. En la úlcera duodenal calma con la comida y es nocturno.' },
          { t: 'Gástrica: empeora al comer', d: 'Con baja de peso',
            say: 'En la gástrica es al revés: empeora con la ingesta y se acompaña de baja de peso. Esa diferencia se pregunta.' },
        ] },
        { title: 'Diagnóstico', tag: 'Endoscopía digestiva alta', kind: 'alert', items: [
          { t: 'Toda gástrica se biopsia', d: 'Descartar cáncer y controlar hasta cicatrizar',
            say: 'El diagnóstico es por endoscopía digestiva alta. Y toda úlcera gástrica se biopsia, para descartar cáncer, y se controla hasta que cicatrice.' },
          { t: 'Confirmar H. pylori', d: 'Ureasa, antígeno fecal o test de aliento',
            say: 'La infección se confirma con test de ureasa en la biopsia, antígeno fecal o test de aliento con urea. La serología no sirve para controlar la erradicación.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Erradicar H. pylori y cerrar la úlcera',
      cards: [
        { title: 'Base del tratamiento', tag: 'Para todos', kind: 'pharma', items: [
          { t: 'Suspender AINE y tabaco', d: 'IBP por 4 a 8 semanas',
            say: 'Primero, suspender los antiinflamatorios y el tabaco, y dar un inhibidor de la bomba de protones por cuatro a ocho semanas.' },
        ] },
        { title: 'Si hay H. pylori', tag: '14 días', kind: 'pharma', items: [
          { t: 'IBP + amoxicilina + claritromicina', d: '1 g y 500 mg, cada 12 horas',
            say: 'Si hay Helicobacter, se agrega la terapia de erradicación por catorce días: inhibidor de la bomba, amoxicilina un gramo y claritromicina quinientos miligramos, cada doce horas.' },
          { t: 'Cuádruple con bismuto', d: 'Alergia a penicilina o fracaso',
            say: 'La terapia cuádruple con bismuto es la alternativa si hay alergia a la penicilina o si falló el primer esquema.' },
        ] },
        { title: 'Control', tag: 'Confirmar la erradicación', kind: 'criteria', items: [
          { t: 'Aliento o antígeno fecal', d: '4 semanas sin antibióticos y 2 sin IBP',
            say: 'La erradicación se controla con test de aliento o antígeno fecal, al menos cuatro semanas después de terminar los antibióticos y dos semanas sin inhibidor de la bomba.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cuando la úlcera se complica',
      title: 'Hemorragia y cirugía en la úlcera',
      cards: [
        { title: 'Úlcera hemorrágica', tag: 'Manejo inicial', kind: 'key', items: [
          { t: 'Reanimar, IBP en dosis alta', d: 'Y endoscopía terapéutica',
            say: 'La úlcera que sangra se maneja con reanimación, inhibidor de la bomba en dosis alta y endoscopía terapéutica.' },
        ] },
        { title: 'Indicaciones de cirugía', tag: 'Se reserva para', kind: 'alert', items: [
          { t: 'Perforación', d: 'La que vimos hoy',
            say: 'La cirugía se reserva para la perforación, que es la que estamos viendo hoy.' },
          { t: 'Hemorragia que no cede', d: 'A la endoscopía',
            say: 'También para la hemorragia que no cede a la endoscopía.' },
          { t: 'Obstrucción pilórica', d: 'Y úlcera refractaria o sospechosa de cáncer',
            say: 'Y para la obstrucción pilórica, y la úlcera refractaria o sospechosa de malignidad.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Abdomen perforativo',
      title: 'La clínica de la úlcera que se rompió',
      cards: [
        { title: 'Dolor característico', tag: 'Inicio hiperagudo', kind: 'key', items: [
          { t: 'Dolor en puñalada', d: 'Empieza en el epigastrio, en segundos',
            say: 'Fíjate en cómo llega este paciente. El dolor empieza en segundos, en el epigastrio, y el paciente lo describe como una puñalada. No es un dolor que va creciendo: aparece así, de golpe.' },
          { t: 'Se generaliza rápido', d: 'Y el paciente no se mueve',
            say: 'En minutos se generaliza a todo el abdomen, y el paciente queda inmóvil, porque cualquier movimiento, hasta respirar hondo, le duele muchísimo más.' },
        ] },
        { title: 'Examen físico', tag: 'Peritonitis química', kind: 'criteria', items: [
          { t: 'Abdomen en tabla', d: 'Contractura involuntaria, rígida, en los cuatro cuadrantes',
            say: 'Al examen físico encuentras el abdomen en tabla: una contractura involuntaria, dura como una madera, que compromete los cuatro cuadrantes.' },
          { t: 'Signo de Jobert', d: 'Desaparece la matidez hepática',
            say: 'Y el signo que más se pregunta es el de Jobert: al percutir donde debería estar la matidez del hígado, encuentras timpanismo, porque hay aire libre interpuesto. Ese aire viene de la úlcera perforada.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico y conducta',
      title: 'De la sospecha al pabellón',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Sospecha de perforación', s: 'Dolor en puñalada, abdomen en tabla' },
        { id: 'rx', col: 1, row: 0, k: 'mech', t: 'Radiografía de tórax de pie', s: 'Busca neumoperitoneo' },
        { id: 'tac', col: 1, row: 2, k: 'mech', t: 'TAC de abdomen', s: 'Si la radiografía no es clara' },
        { id: 'rea', col: 2, row: 1, k: 'good', t: 'Reanimación inmediata', s: 'Volumen, sonda nasogástrica, antibióticos' },
        { id: 'lap', col: 3, row: 1, k: 'alert', t: 'Laparotomía urgente', s: 'Lavado y parche de Graham' },
      ],
      edges: [
        { from: 'sos', to: 'rx' }, { from: 'sos', to: 'tac', label: 'si duda' },
        { from: 'rx', to: 'rea' }, { from: 'tac', to: 'rea' },
        { from: 'rea', to: 'lap' },
      ],
      steps: [
        { show: ['sos', 'rx'], note: 'El examen más rápido primero',
          say: 'Con esta clínica, el primer examen no es el más sofisticado, sino el más rápido: la radiografía de tórax de pie. Busca la semiluna de aire libre bajo el diafragma, y la encuentra en más de tres de cada cuatro casos. Mira esta radiografía: bajo la cúpula del diafragma hay una franja oscura de aire.',
          photo: { src: 'biblioteca/10_cirugia/cirugia-05/01_neumoperitoneo__cto-digestivo_p65.jpg', label: 'Neumoperitoneo', at: 'Mira esta radiografía', credit: 'Manual CTO Digestivo 14.ª ed., p. 65' } },
        { show: ['tac'], note: 'Confirma cuando la radiografía no basta',
          say: 'Si la radiografía sale dudosa pero tú sigues sospechando, el paso siguiente es el TAC de abdomen, que confirma hasta las burbujas de aire más pequeñas y te dice dónde está la perforación.' },
        { show: ['rea'], note: 'No se pierde tiempo mientras se confirma',
          say: 'En paralelo, mientras confirmas, ya empiezas a actuar: volumen por dos vías gruesas, sonda nasogástrica para vaciar el estómago y frenar la fuga, y antibióticos de amplio espectro, ceftriaxona más metronidazol.' },
        { show: ['lap'], note: 'El parche de Graham cierra la úlcera',
          say: 'Y el destino final es la laparotomía o laparoscopía de urgencia: lavas toda la cavidad con suero tibio, y cierras la perforación con un parche de epiplón vascularizado, la técnica de Graham. Acuérdate de una cosa muy importante: jamás pidas una endoscopía aquí. Meter aire a presión en un abdomen ya perforado empeora todo.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Cómo sube el aire bajo el diafragma',
      images: [
        { src: 'animaciones/cirugia-05/A1_ulcera_perforada.mp4', label: 'Úlcera perforada', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'La úlcera se rompe y el aire sube',
          say: 'Mira cómo se produce el neumoperitoneo. La úlcera se perfora y el aire del tubo digestivo escapa a la cavidad peritoneal. Con el paciente de pie, ese aire sube y se junta bajo el diafragma derecho, sobre el hígado. Por eso desaparece la matidez hepática, el signo de Jobert, y por eso la radiografía de tórax de pie muestra la semiluna de aire. El examen inicial es esa radiografía, nunca una endoscopía.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos las dos peritonitis en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Primaria versus secundaria: la trampa clásica',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Cirrótico, ascitis, PMN sobre 250', 'Cefotaxima endovenosa, sin cirugía', 'Operar de urgencia'],
          say: 'Repasemos las trampas. Cirrótico con ascitis y más de doscientos cincuenta polimorfonucleares: cefotaxima, sin cirugía. Operarlo es el error grave que más se repite.' },
        { cells: ['Dolor en puñalada, abdomen en tabla', 'Radiografía de tórax de pie', 'Pedir endoscopía de entrada'],
          say: 'Dolor en puñalada con abdomen en tabla: tu primer examen es la radiografía de tórax de pie. Pedir una endoscopía aquí solo empeora la perforación.' },
        { cells: ['Neumoperitoneo confirmado', 'Laparotomía urgente con parche de Graham', 'Tratar solo con antibióticos'],
          say: 'Con neumoperitoneo confirmado, vas a laparotomía urgente con parche de Graham. Tratar solo con antibióticos, sin operar, deja el foco sin controlar.' },
        { cells: ['Fiebre persistente 48 horas tras operar', 'Sospechar peritonitis terciaria', 'Asumir que la cirugía ya resolvió todo'],
          say: 'Y si el paciente sigue con fiebre cuarenta y ocho horas después de una peritonitis secundaria ya operada, sospecha una peritonitis terciaria, con gérmenes distintos.' },
        { cells: ['Úlcera gástrica en la endoscopía', 'Biopsia y control hasta cicatrizar', 'Tratarla sin biopsia'],
          say: 'Si la endoscopía muestra una úlcera gástrica, siempre se biopsia, para descartar cáncer, y se controla hasta que cicatrice.' },
        { cells: ['Control de erradicación de H. pylori', 'Aliento o antígeno fecal, 4 semanas tras antibióticos', 'Pedir serología'],
          say: 'Y para confirmar la erradicación de Helicobacter, test de aliento o antígeno fecal, cuatro semanas después de los antibióticos. La serología no sirve para el control.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 44 años, usuario crónico de diclofenaco por lumbago, consulta por dolor epigástrico de inicio súbito hace 3 horas, tipo puñalada, que se generalizó a todo el abdomen. Está pálido, sudoroso, con presión arterial de 100/60 y frecuencia cardíaca de 110. El abdomen no tiene movimiento respiratorio, está rígido en los cuatro cuadrantes, y a la percusión desaparece la matidez hepática.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar endoscopía digestiva alta de urgencia' },
        { letter: 'B', text: 'Solicitar radiografía de tórax de pie' },
        { letter: 'C', text: 'Indicar amilasa y lipasa seriadas' },
        { letter: 'D', text: 'Iniciar cefotaxima endovenosa y observar' },
        { letter: 'E', text: 'Solicitar colonoscopía de urgencia' },
      ],
      correct: 'B',
      explanation: 'Dolor en puñalada, abdomen en tabla y signo de Jobert son el cuadro típico de una úlcera perforada. El examen inicial, por rapidez, es la radiografía de tórax de pie, buscando neumoperitoneo. La endoscopía está contraindicada, y la cefotaxima sola es el manejo de la peritonitis primaria, no de esta.',
      say: {
        stem: 'Vamos con un caso. Hombre de cuarenta y cuatro años, usuario crónico de diclofenaco por lumbago, con dolor epigástrico que empezó de golpe hace tres horas, como una puñalada, y que se generalizó a todo el abdomen. Está pálido, sudoroso, con la presión baja y el pulso acelerado. El abdomen no se mueve al respirar, está rígido en los cuatro cuadrantes, y al percutir desaparece la matidez del hígado.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Tienes cinco opciones: pedir una endoscopía de urgencia, pedir una radiografía de tórax de pie, pedir amilasa y lipasa, dar cefotaxima y observar, o pedir una colonoscopía. Piénsalo.',
        answer: 'Es la B. Este cuadro es el arquetipo de la úlcera perforada: dolor en puñalada, abdomen en tabla, y el signo de Jobert que te acaba de confirmar el neumoperitoneo. El examen más rápido para verlo es la radiografía de tórax de pie. La endoscopía la descartas de plano, porque empeora la perforación. Y la cefotaxima sola sería la respuesta si esto fuera una peritonitis primaria, pero aquí hay un foco que se rompió: eso necesita cirugía, no solo antibióticos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 169',
      stem: 'Paciente de 43 años, multípara, con dolor abdominal difuso, intenso y vómitos, con marcado meteorismo. Frecuencia cardíaca de 110 y presión arterial de 100/60. Al examen abdominal se observa cicatriz de cesárea, con abdomen muy doloroso a la palpación, distensión de la pared, pérdida de la matidez hepática a la percusión y abolición de los ruidos hidroaéreos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Obstrucción intestinal' },
        { letter: 'B', text: 'Pancreatitis aguda' },
        { letter: 'C', text: 'Perforación intestinal' },
        { letter: 'D', text: 'Megacolon' },
        { letter: 'E', text: 'Embolia mesentérica' },
      ],
      correct: 'C',
      explanation: 'La pérdida de la matidez hepática indica neumoperitoneo, propio de una perforación. Sumado a la abolición de los ruidos hidroaéreos y el dolor intenso y difuso, el cuadro es de una peritonitis secundaria a perforación intestinal.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de agosto de dos mil veintiuno. Paciente de cuarenta y tres años, multípara, con dolor abdominal difuso e intenso, vómitos y mucha distensión. Frecuencia cardíaca de ciento diez y presión de cien sobre sesenta. Tiene cicatriz de cesárea, el abdomen está muy doloroso, distendido, con pérdida de la matidez hepática y sin ruidos hidroaéreos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: obstrucción intestinal, pancreatitis aguda, perforación intestinal, megacolon, o embolia mesentérica. Piénsalo.',
        answer: 'Es la C, perforación intestinal. La pieza clave es la misma que en el caso anterior: la pérdida de la matidez hepática. Eso es neumoperitoneo, y con ruidos hidroaéreos abolidos por el íleo que genera la peritonitis, el cuadro completo apunta a una víscera que se rompió, no a una obstrucción simple.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 162',
      stem: 'Paciente de 43 años con dolor epigástrico urente de un mes de evolución. Hace 24 horas deja de eliminar gases y el dolor se vuelve difuso y persistente, con distensión abdominal. Frecuencia cardíaca de 110 y presión arterial de 110/70. El abdomen está doloroso y distendido, con pérdida de la matidez hepática y ruidos hidroaéreos abolidos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Obstrucción intestinal' },
        { letter: 'B', text: 'Pancreatitis aguda' },
        { letter: 'C', text: 'Perforación de úlcera péptica' },
        { letter: 'D', text: 'Plastrón vesicular' },
        { letter: 'E', text: 'Cáncer de vesícula' },
      ],
      correct: 'C',
      explanation: 'El mes de epigastralgia urente que mejoraba con la comida marca una úlcera activa de fondo. El cambio brusco a dolor difuso, íleo y pérdida de la matidez hepática es la perforación de esa misma úlcera hacia el peritoneo.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil diecinueve. Paciente de cuarenta y tres años con un mes de dolor epigástrico urente. Hace veinticuatro horas deja de eliminar gases, y el dolor se vuelve difuso y persistente, con distensión. Frecuencia cardíaca de ciento diez, presión de ciento diez sobre setenta, abdomen distendido, con pérdida de la matidez hepática y sin ruidos hidroaéreos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: obstrucción intestinal, pancreatitis aguda, perforación de úlcera péptica, plastrón vesicular, o cáncer de vesícula. Piénsalo.',
        answer: 'Es la C. Fíjate en la historia completa: un mes de epigastralgia urente es la úlcera activa que ya conoces de la clase de gastroenterología. Y el cambio brusco a dolor difuso con signos de neumoperitoneo es esa misma úlcera perforándose. No es una obstrucción simple, porque ahí no esperarías perder la matidez hepática.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 159',
      stem: 'Paciente de 67 años, cirrótico por alcohol, traído por deterioro del estado general y compromiso de conciencia. Está en sopor superficial, con fetor hepático, temperatura de 38,3 y frecuencia cardíaca de 85. El abdomen muestra ascitis a tensión, con asterixis y sin focalidad neurológica.',
      question: '¿Cuál es el examen de elección para iniciar el estudio?',
      options: [
        { letter: 'A', text: 'Hemocultivos' },
        { letter: 'B', text: 'Hemograma' },
        { letter: 'C', text: 'Estudio de líquido ascítico' },
        { letter: 'D', text: 'TAC de abdomen' },
        { letter: 'E', text: 'Ecografía abdominal' },
      ],
      correct: 'C',
      explanation: 'Todo cirrótico con ascitis que se descompensa debe estudiarse primero para descartar una peritonitis bacteriana espontánea, con paracentesis y recuento de polimorfonucleares en el líquido ascítico.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de diciembre de dos mil veintidós, para el otro lado de la clase. Paciente de sesenta y siete años, cirrótico por alcohol, con deterioro y compromiso de conciencia. Está en sopor, con fetor hepático, algo de fiebre, y el abdomen muestra ascitis a tensión, con asterixis.',
        question: '¿Cuál es el examen de elección para iniciar el estudio?',
        options: 'Las opciones son: hemocultivos, hemograma, estudio de líquido ascítico, TAC de abdomen, o ecografía abdominal. Piénsalo.',
        answer: 'Es la C. Todo cirrótico con ascitis que se descompensa tiene que estudiarse primero por peritonitis bacteriana espontánea, y eso se hace con una paracentesis diagnóstica, contando los polimorfonucleares del líquido ascítico. Si pasa de doscientos cincuenta, tratas con cefotaxima, sin necesidad de ningún TAC ni de cirugía.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2013 · Pregunta 12",
      "stem": "Paciente de 27 años, sin antecedentes mórbidos, consulta por cuadro de 3 meses de dolor epigástrico tipo urente que aumenta durante los periodos de ayuno y estrés, asociado ocasionalmente a pirosis. Se realiza endoscopía digestiva alta que objetiva úlcera duodenal activa y se realiza test de ureasa que resulta negativo.",
      "question": "¿Cuál es la conducta más adecuada en este caso?",
      "options": [
        {
          "letter": "A",
          "text": "Iniciar omeprazol, amoxicilina y claritromicina"
        },
        {
          "letter": "B",
          "text": "Indicar omeprazol y controlar con nueva endoscopía en 6 semanas"
        },
        {
          "letter": "C",
          "text": "Solicitar nueva endoscopía digestiva alta con test de ureasa"
        },
        {
          "letter": "D",
          "text": "Iniciar omeprazol, bismuto y metronidazol"
        },
        {
          "letter": "E",
          "text": "Iniciar medidas antirreflujo y omeprazol a permanencia"
        }
      ],
      "correct": "A",
      "explanation": "Úlcera duodenal activa en un paciente que no usa AINEs: se asume Helicobacter pylori, que explica cerca del 90% de estos casos, aunque el test de ureasa sea negativo, porque este tiene falsos negativos. Se erradica con terapia triple: omeprazol, amoxicilina y claritromicina.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil trece. Paciente de veintisiete años, sano, con tres meses de dolor epigástrico urente que empeora con el ayuno y el estrés. La endoscopía muestra una úlcera duodenal activa, y el test de ureasa resulta negativo.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: omeprazol con amoxicilina y claritromicina, omeprazol con endoscopía de control, repetir la endoscopía con ureasa, omeprazol con bismuto y metronidazol, o medidas antirreflujo con omeprazol permanente. Piénsalo.",
        "answer": "Es la A. Una úlcera duodenal en alguien que no usa antiinflamatorios es por Helicobacter casi siempre, así que se erradica igual, aunque la ureasa salga negativa. Repetir la endoscopía tienta, pero es innecesario: a diferencia de la úlcera gástrica, la duodenal no requiere biopsia para descartar cáncer."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.2.002 · Abdomen agudo",
      "stem": "Mujer de 24 años consulta por 8 horas de dolor en el hipogastrio y la fosa ilíaca derecha. Afebril, presión arterial 110/70, frecuencia cardíaca 92. Tiene dolor a la palpación profunda de la fosa ilíaca derecha, sin signos peritoneales. Su última menstruación fue hace 7 semanas y no usa anticoncepción.",
      "question": "¿Cuál es el primer examen que se debe solicitar?",
      "options": [
        {
          "letter": "A",
          "text": "TAC de abdomen y pelvis con contraste"
        },
        {
          "letter": "B",
          "text": "Amilasa y lipasa"
        },
        {
          "letter": "C",
          "text": "Radiografía simple de abdomen"
        },
        {
          "letter": "D",
          "text": "Subunidad beta de gonadotrofina coriónica"
        },
        {
          "letter": "E",
          "text": "Colonoscopía"
        }
      ],
      "correct": "D",
      "explanation": "En toda mujer en edad fértil con abdomen agudo, lo primero es descartar embarazo con subunidad beta. Con atraso menstrual, un embarazo ectópico debe descartarse antes que cualquier otra causa, y el resultado además condiciona el uso de radiación como la TAC.",
      "say": {
        "stem": "Mujer de veinticuatro años con ocho horas de dolor en el hipogastrio y la fosa ilíaca derecha. Está afebril y estable, con dolor a la palpación profunda, sin signos peritoneales. Su última regla fue hace siete semanas y no usa anticoncepción.",
        "question": "¿Cuál es el primer examen que se debe pedir?",
        "options": "Las opciones: TAC de abdomen y pelvis, amilasa y lipasa, radiografía simple, subunidad beta o colonoscopía. Piénsalo.",
        "answer": "Es la D. En una mujer en edad fértil con dolor abdominal, y más aún con atraso menstrual, lo primero es descartar embarazo, porque un ectópico puede matarla y además el resultado define si puedes irradiar. La TAC tienta por pensar en apendicitis, pero nunca va antes de la subunidad beta."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'La pregunta central', tag: 'Primaria o secundaria', kind: 'key', items: [
          { t: 'Cirrótico, ascitis, PMN alto', d: 'Cefotaxima, nunca cirugía',
            say: 'Cerremos con las reglas de oro. Si es un cirrótico con ascitis y PMN elevados, es peritonitis primaria: cefotaxima, y nunca cirugía.' },
          { t: 'Víscera perforada', d: 'Laparotomía urgente, siempre',
            say: 'Si hay una víscera perforada, es peritonitis secundaria: laparotomía urgente, siempre.' },
        ] },
        { title: 'El abdomen perforativo', tag: 'Clínica y examen', kind: 'criteria', items: [
          { t: 'Puñalada más abdomen en tabla', d: 'Piensa en úlcera perforada',
            say: 'El dolor en puñalada con abdomen en tabla te tiene que hacer pensar en úlcera perforada.' },
          { t: 'Radiografía de tórax de pie', d: 'Primero, nunca endoscopía',
            say: 'Y el examen inicial es la radiografía de tórax de pie, nunca la endoscopía.' },
        ] },
        { title: 'Tratamiento quirúrgico', tag: 'Parche de Graham', kind: 'alert', items: [
          { t: 'Lavado más parche de epiplón', d: 'Cierra la perforación',
            say: 'Y el tratamiento quirúrgico es lavado de toda la cavidad y parche de epiplón para cerrar la perforación.' },
          { t: 'Úlcera: erradicar H. pylori', d: 'IBP más dos antibióticos por 14 días',
            say: 'Y la úlcera de fondo se trata erradicando el Helicobacter pylori, catorce días de inhibidor de la bomba más dos antibióticos. Si te llevas una sola idea de hoy: primero decide si es primaria o secundaria, porque de eso depende si operas o no. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Peritonitis generalizada: primaria o secundaria',
    root: N('start', 'Paciente con signos de peritonitis', 'Dolor y defensa abdominal',
      'Un paciente llega con dolor abdominal y signos de irritación peritoneal. Antes de pensar en pabellón, pregúntate una cosa: ¿hay algo que se haya roto, o es un cirrótico con ascitis infectada?',
      ['', N('q', '¿Cirrótico con ascitis, sin foco quirúrgico?', 'O víscera perforada',
        'La pregunta que separa todo el tema.',
        ['Sí, cirrótico con ascitis', N('q', 'Paracentesis: ¿PMN igual o más de 250?', 'Confirma o descarta la PBE',
          'Con sospecha de peritonitis primaria, la paracentesis diagnóstica te da la respuesta.',
          ['Sí', N('ok', 'Peritonitis bacteriana espontánea', 'Cefotaxima endovenosa, sin cirugía',
            'Con PMN elevados, es PBE: manejo médico exclusivo con cefotaxima o ceftriaxona. Operar aquí es un error grave.')],
          ['No', N('ok', 'Buscar otra causa', 'La ascitis no está infectada',
            'Sin PMN elevados, no es PBE: sigue buscando la causa de la descompensación.')])],
        ['Sí, víscera perforada', N('q', '¿Confirmaste el neumoperitoneo?', 'Radiografía de tórax de pie primero',
          'Con sospecha de perforación, el estudio empieza por el examen más rápido.',
          ['Radiografía positiva', N('alert', 'Laparotomía urgente', 'Lavado y parche de Graham',
            'Con neumoperitoneo confirmado, vas directo a laparotomía o laparoscopía urgente: lavado profuso y cierre de la perforación con parche de epiplón.')],
          ['Radiografía dudosa', N('do', 'TAC de abdomen', 'Confirma y localiza la perforación',
            'Si la radiografía no es concluyente pero la sospecha sigue firme, el TAC confirma el aire libre y ubica el sitio de la perforación.')])])]),
  },
};
