// Clase 8.15 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-15).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-15',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Coagula en todas partes y por eso sangra en todas partes: laboratorio, score ISTH y conducta',
      say: 'Bienvenidos. Hoy vemos la coagulación intravascular diseminada, la CID. En la clase anterior vimos coagulopatías adquiridas donde falla una sola pieza. En la CID falla todo al mismo tiempo. Y tiene una paradoja que el examen adora: el paciente sangra porque está coagulando demasiado. Si entiendes esa paradoja, el laboratorio y el tratamiento salen solos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'La doble paradoja: trombosis y hemorragia',
      nodes: [
        { id: 'gat', col: 0, row: 1, k: 'cause', t: 'Gatillo sistémico', s: 'Sepsis · obstetricia · trauma' },
        { id: 'ft', col: 1, row: 1, k: 'mech', t: 'Factor tisular + VIIa', s: 'Trombina en todo el lecho vascular' },
        { id: 'mic', col: 2, row: 0, k: 'risk', t: 'Microtrombos', s: 'Riñón, pulmón, hígado, cerebro' },
        { id: 'fom', col: 3, row: 0, k: 'alert', t: 'Falla multiorgánica', s: 'Isquemia y necrosis' },
        { id: 'con', col: 2, row: 2, k: 'mech', t: 'Consumo', s: 'Plaquetas y factores I, II, V, VIII' },
        { id: 'fib', col: 2, row: 3, k: 'mech', t: 'Fibrinólisis secundaria', s: 'PDF y dímero D gigantes' },
        { id: 'san', col: 3, row: 2, k: 'alert', t: 'Sangrado incoercible', s: 'Punciones, mucosas, heridas' },
      ],
      edges: [
        { from: 'gat', to: 'ft' }, { from: 'ft', to: 'mic' }, { from: 'mic', to: 'fom' },
        { from: 'ft', to: 'con' }, { from: 'con', to: 'san' }, { from: 'con', to: 'fib', label: 't-PA' }, { from: 'fib', to: 'san' },
      ],
      steps: [
        { show: ['gat'], note: 'La CID no es una enfermedad: es un síndrome secundario',
          say: 'Lo primero: la CID no es una enfermedad hematológica en sí misma. Es un síndrome que aparece sobre otra enfermedad grave. Siempre hay un gatillo: las endotoxinas de una sepsis por gramnegativos, las citoquinas inflamatorias, un trauma extenso, una quemadura o una complicación obstétrica.' },
        { show: ['ft'], note: 'Trombina descontrolada en toda la circulación',
          say: 'Ese gatillo libera factor tisular a la sangre. Y como vimos en la fisiología de la hemostasia, el factor tisular se une al factor siete activado y enciende la generación de trombina. Solo que ahora no ocurre en una herida, sino en todo el árbol vascular a la vez.' },
        { show: ['mic', 'fom'], note: 'Primera cara: trombosis en la microcirculación',
          say: 'La trombina convierte el fibrinógeno en fibrina, y se forman microtrombos en los capilares del riñón, el pulmón, el hígado y el cerebro. El resultado es isquemia y falla multiorgánica. Además, los frenos naturales fallan: la antitrombina se consume y el sistema de la proteína C se bloquea por el daño del endotelio.' },
        { show: ['con'], note: 'Segunda cara: se gastan plaquetas y factores',
          say: 'Y aquí está la paradoja. Tanta coagulación gasta toda la reserva: se consumen las plaquetas y los factores uno, dos, cinco y ocho. Por eso se llama coagulopatía de consumo.' },
        { show: ['fib', 'san'], note: 'La fibrinólisis empeora el sangrado',
          say: 'Encima, el endotelio responde liberando activador tisular del plasminógeno, y se desata una fibrinólisis que genera productos de degradación de la fibrina y dímero D en cantidades enormes. Esos productos además estorban la agregación de las plaquetas. El paciente termina sangrando por todos lados: punciones, mucosas y heridas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Contextos clínicos',
      title: '¿En quién aparece la CID?',
      cards: [
        { title: 'Sepsis', tag: 'La más frecuente', kind: 'alert', items: [
          { t: 'Gramnegativos', d: 'El lipopolisacárido activa la coagulación',
            say: '¿En quién tienes que sospecharla? El contexto clásico es el shock séptico, sobre todo por bacilos gramnegativos, cuyo lipopolisacárido es un potente activador de la coagulación.' },
        ] },
        { title: 'Obstetricia', tag: 'Se pregunta mucho', kind: 'key', items: [
          { t: 'Desprendimiento de placenta', d: 'Abruptio placentae',
            say: 'El segundo gran contexto es obstétrico. El desprendimiento prematuro de placenta es el ejemplo típico, y es un clásico de las preguntas.' },
          { t: 'Embolia de líquido amniótico', d: 'Y sepsis puerperal',
            say: 'También la embolia de líquido amniótico y la sepsis puerperal. Cuando una puérpera sangra y no coagula, piensa en CID.' },
        ] },
        { title: 'Otros', tag: 'No olvidar', kind: 'criteria', items: [
          { t: 'Trauma grave y quemaduras', d: 'Daño tisular masivo',
            say: 'Luego el daño tisular masivo: el politraumatizado grave y el gran quemado.' },
          { t: 'Leucemia promielocítica aguda', d: 'La M3 debuta con CID',
            say: 'Y la leucemia promielocítica aguda, la eme tres, que es la leucemia que debuta sangrando por CID. La vamos a ver en detalle en la próxima clase.' },
          { t: 'Neoplasias sólidas avanzadas', d: 'CID crónica, más trombótica',
            say: 'Las neoplasias sólidas metastásicas pueden dar una forma crónica, donde predomina la trombosis más que el sangrado.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Laboratorio',
      title: 'Todo el laboratorio alterado a la vez',
      cards: [
        { title: 'El colapso simultáneo', tag: 'La clave', kind: 'key', items: [
          { t: 'Plaquetas bajas', d: 'Caída progresiva, < 50.000–100.000',
            say: 'El laboratorio es lo que más se pregunta, y tiene una regla simple. En las demás coagulopatías suele haber un solo examen alterado. En la CID están todos alterados a la vez. Primero, las plaquetas caen de forma progresiva.' },
          { t: 'TP y TTPK prolongados', d: 'Se consumieron los factores',
            say: 'Segundo, el TP y el TTPK se prolongan, porque los factores se gastaron.' },
          { t: 'Fibrinógeno colapsado', d: '< 100 mg/dL',
            say: 'Tercero, el fibrinógeno cae, típicamente bajo cien miligramos por decilitro.' },
          { t: 'Dímero D y PDF muy altos', d: 'Fibrinólisis intensa',
            say: 'Y cuarto, el dímero D y los productos de degradación de la fibrina se disparan.' },
        ] },
        { title: 'Fibrinógeno', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Es reactante de fase aguda', d: 'En sepsis debería estar alto',
            say: 'Un detalle fino sobre el fibrinógeno. Es un reactante de fase aguda, así que en una sepsis grave debería estar alto.' },
          { t: '200 mg/dL en un séptico ya es consumo', d: 'Un valor normal puede ser patológico',
            say: 'Por eso, un fibrinógeno de doscientos, que parece normal, en un paciente séptico ya indica que se está consumiendo. Mira la tendencia, no solo el número.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico',
      title: 'Score ISTH de CID manifiesta',
      head: ['Parámetro', 'Puntaje', 'Qué refleja'],
      rows: [
        { cells: ['Plaquetas', '> 100.000: 0 · 50.000–100.000: 1 · < 50.000: 2', 'Consumo de plaquetas'],
          say: 'Para ordenar el diagnóstico existe el score de la Sociedad Internacional de Trombosis y Hemostasia, el ISTH. Las plaquetas: sobre cien mil, cero puntos; entre cincuenta y cien mil, un punto; bajo cincuenta mil, dos puntos.' },
        { cells: ['Dímero D / PDF', 'Normal: 0 · moderado: 2 · severo: 3', 'Intensidad de la fibrinólisis'],
          say: 'El dímero D es el que más pesa: normal, cero; elevación moderada, dos puntos; elevación severa, tres.' },
        { cells: ['Prolongación del TP', '< 3 s: 0 · 3–6 s: 1 · > 6 s: 2', 'Consumo de factores'],
          say: 'La prolongación del TP: menos de tres segundos, cero; de tres a seis, un punto; más de seis segundos, dos puntos.' },
        { cells: ['Fibrinógeno', '> 100 mg/dL: 0 · < 100 mg/dL: 1', 'Agotamiento del sustrato'],
          say: 'Y el fibrinógeno: sobre cien, cero; bajo cien, un punto.' },
        { cells: ['Total', '≥ 5 puntos', 'CID manifiesta'],
          say: 'Con cinco puntos o más tienes una CID manifiesta. No necesitas memorizar cada corte: basta con recordar que las cuatro variables son justamente las cuatro alteraciones del laboratorio que acabamos de ver.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Primero la causa, después los hemocomponentes',
      nodes: [
        { id: 'cid', col: 0, row: 1, k: 'start', t: 'CID confirmada', s: 'Score ISTH ≥ 5' },
        { id: 'cau', col: 1, row: 1, k: 'good', t: 'Tratar la causa', s: 'El pilar de todo' },
        { id: 'sep', col: 2, row: 0, k: 'effect', t: 'Sepsis', s: 'Antibióticos + control del foco' },
        { id: 'obs', col: 2, row: 1, k: 'effect', t: 'Obstétrica', s: 'Vaciamiento o cesárea urgente' },
        { id: 'lpa', col: 2, row: 2, k: 'effect', t: 'Leucemia promielocítica', s: 'ATRA inmediato' },
        { id: 'q', col: 3, row: 1, k: 'q', t: '¿Sangra o requiere procedimiento?', s: 'Recién ahí se transfunde' },
      ],
      edges: [
        { from: 'cid', to: 'cau' }, { from: 'cau', to: 'sep' }, { from: 'cau', to: 'obs' }, { from: 'cau', to: 'lpa' },
        { from: 'cau', to: 'q', label: 'además' },
      ],
      steps: [
        { show: ['cid', 'cau'], note: 'La regla de oro: sin tratar la causa no se sale',
          say: 'Ahora el tratamiento, y la regla de oro es una sola: la CID se trata tratando la causa. Si el gatillo sigue encendido, puedes transfundir todo lo que quieras, que se va a seguir consumiendo.' },
        { show: ['sep'], note: 'Sepsis: antibiótico y foco',
          say: 'Si es una sepsis: antibióticos inmediatos y control quirúrgico del foco.' },
        { show: ['obs'], note: 'Obstetricia: sacar el gatillo del útero',
          say: 'Si es un desprendimiento de placenta o una atonía uterina: vaciamiento uterino o cesárea de urgencia.' },
        { show: ['lpa'], note: 'M3: ácido holo-trans-retinoico',
          say: 'Y si es una leucemia promielocítica, ácido holo-trans-retinoico de inmediato.' },
        { show: ['q'], note: 'Los hemocomponentes son soporte, no tratamiento',
          say: 'Los hemocomponentes son un soporte, y se reservan para el paciente que sangra o que necesita un procedimiento invasivo. En el paciente estable que no sangra no se corrigen números.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Soporte transfusional',
      title: 'Qué se transfunde y cuándo',
      cards: [
        { title: 'Hemocomponentes', tag: 'Si sangra', kind: 'pharma', items: [
          { t: 'Crioprecipitado', d: 'Fibrinógeno < 100–150 mg/dL',
            say: 'Si sangra, cada hemocomponente tiene su blanco. El crioprecipitado es el de elección para reponer fibrinógeno cuando está bajo cien a ciento cincuenta. Cada bolsa trae doscientos a doscientos cincuenta miligramos de fibrinógeno en muy poco volumen.' },
          { t: 'Plasma fresco congelado', d: '15–20 mL/kg si TP o TTPK > 1,5 veces',
            say: 'El plasma fresco congelado aporta todos los factores, y se indica cuando el TP o el TTPK están prolongados más de una vez y media lo normal, a quince a veinte mililitros por kilo.' },
          { t: 'Plaquetas', d: 'Meta > 50.000 si sangra · > 20.000 si no',
            say: 'Y las plaquetas: la meta es sobre cincuenta mil si hay sangrado activo, y sobre veinte mil si no sangra.' },
        ] },
        { title: 'Heparina', tag: 'Casi nunca', kind: 'alert', items: [
          { t: 'Contraindicada si predomina el sangrado', d: 'Es la trampa clásica',
            say: 'Ahora la trampa. Como la CID empieza con trombosis, suena lógico anticoagular. Pero si predomina el sangrado, la heparina está formalmente contraindicada.' },
          { t: 'Solo en CID crónica trombótica', d: 'Neoplasias sólidas avanzadas',
            say: 'Solo se considera en la CID crónica con predominio trombótico franco, como en una neoplasia sólida metastásica avanzada.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión para el paciente grave que sangra por todos lados.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lo que diferencia a la CID',
      head: ['Cuadro', 'Laboratorio', 'Clave'],
      rows: [
        { cells: ['CID', 'Plaquetas bajas + TP y TTPK largos + fibrinógeno bajo + dímero D alto', 'Todo alterado a la vez'],
          say: 'Repasemos los contrastes que se preguntan. La CID tiene todo alterado a la vez: plaquetas, TP, TTPK, fibrinógeno y dímero D.' },
        { cells: ['PTI', 'Solo plaquetas bajas', 'Coagulación normal'],
          say: 'En el púrpura trombocitopénico inmune solo caen las plaquetas; la coagulación está normal.' },
        { cells: ['PTT y SHU', 'Plaquetas bajas + esquistocitos', 'TP y TTPK normales'],
          say: 'En las microangiopatías, el PTT y el síndrome hemolítico urémico, también hay plaquetas bajas y esquistocitos, pero el TP y el TTPK son normales. Esa es la diferencia con la CID, que también puede tener algunos esquistocitos.' },
        { cells: ['Déficit de vitamina K', 'TP largo, plaquetas normales', 'Corrige con vitamina K'],
          say: 'Y en el déficit de vitamina K, que vimos en la clase anterior, se alarga el TP, pero las plaquetas y el fibrinógeno están normales.' },
        { cells: ['CID con sangrado activo', 'Tratar causa + hemocomponentes', 'Error: heparina'],
          say: 'En la conducta, el error clásico es la heparina en la CID que sangra.' },
        { cells: ['CID estable sin sangrado', 'Tratar causa + control seriado', 'Error: transfundir números'],
          say: 'Y el error opuesto es transfundir para corregir números en un paciente estable que no sangra.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 48 años en UCI por shock séptico urinario por E. coli BLEE. Al segundo día presenta sangrado continuo por sitios de punción, equimosis espontáneas y hematuria. Plaquetas 28.000/µL (previas 180.000), TP 26 s (INR 2,4), TTPK 68 s, fibrinógeno 70 mg/dL, dímero D > 20.000 ng/mL, esquistocitos 2%.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar heparina no fraccionada en infusión continua' },
        { letter: 'B', text: 'Plasmaféresis urgente' },
        { letter: 'C', text: 'Mantener antibióticos y soporte, más crioprecipitado, plasma fresco congelado y plaquetas' },
        { letter: 'D', text: 'Vitamina K 10 mg EV como única medida' },
        { letter: 'E', text: 'Suspender hemocomponentes y controlar el perfil en 24 horas' },
      ],
      correct: 'C',
      explanation: 'CID manifiesta por sepsis (score ISTH 8: plaquetas 2 + dímero D 3 + TP 2 + fibrinógeno 1) con sangrado activo. Se trata la causa y se da soporte dirigido: crioprecipitado por fibrinógeno < 100, plasma por TP y TTPK prolongados, y plaquetas con meta > 50.000. La heparina está contraindicada si predomina el sangrado; la plasmaféresis es del PTT.',
      say: {
        stem: 'Vamos con un caso. Mujer de cuarenta y ocho años en la UCI por un shock séptico urinario por una Escherichia coli productora de betalactamasas de espectro extendido. Al segundo día sangra por las punciones, tiene equimosis espontáneas y hematuria. Plaquetas de veintiocho mil, que antes eran ciento ochenta mil, INR de dos coma cuatro, TTPK de sesenta y ocho segundos, fibrinógeno de setenta, dímero D sobre veinte mil, y algunos esquistocitos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: heparina en infusión, plasmaféresis, mantener antibióticos y soporte con crioprecipitado, plasma y plaquetas, vitamina K sola, o suspender hemocomponentes y controlar. Piénsalo.',
        answer: 'La respuesta es la C. Tiene todo alterado a la vez, con un score ISTH de ocho puntos, y está sangrando. Entonces se sigue tratando la sepsis, y se da soporte dirigido: crioprecipitado por el fibrinógeno bajo cien, plasma por el TP y el TTPK, y plaquetas. La heparina es el distractor tentador, pero con sangrado está contraindicada. Y los esquistocitos no te deben llevar a la plasmaféresis: en el PTT la coagulación es normal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 54',
      stem: 'Una mujer puérpera, preseenta hemorragia postparto importante. En sus exámenes destacan hemograma con hematocrito: 28%, hemoglobina: 9,3 g/dl, glóbulos blancos: 8.000 por mm3, plaquetas: 80.000 y además tiene TTPA y TP alargados y fibrinógeno 90 mg/dl (VN: 200 a 400)',
      question: '¿Cuál es la mejor indicación transfusional?',
      options: [
        { letter: 'A', text: 'Crioprecipitado' },
        { letter: 'B', text: 'Glóbulos rojos' },
        { letter: 'C', text: 'Plaquetas' },
        { letter: 'D', text: 'Sangre fresca' },
        { letter: 'E', text: 'Plasma fresco congelado' },
      ],
      correct: 'E',
      explanation: 'Hemorragia posparto con plaquetas bajas, TP y TTPA prolongados y fibrinógeno bajo: CID obstétrica. El plasma fresco congelado aporta todos los factores de la coagulación, incluido el fibrinógeno, y corrige a la vez el TP y el TTPA. El crioprecipitado solo repone fibrinógeno; las plaquetas en 80.000 no son la prioridad.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Una puérpera con hemorragia posparto importante. Hemoglobina de nueve coma tres, plaquetas de ochenta mil, TP y TTPA alargados, y fibrinógeno de noventa.',
        question: '¿Cuál es la mejor indicación transfusional?',
        options: 'Las opciones son: crioprecipitado, glóbulos rojos, plaquetas, sangre fresca, o plasma fresco congelado. Piénsalo.',
        answer: 'Es la E, plasma fresco congelado. Es una CID obstétrica, y lo que falta no es una sola cosa: faltan todos los factores, por eso están alargados el TP y el TTPA. El plasma los trae todos, incluido el fibrinógeno. El crioprecipitado es el distractor tentador por el fibrinógeno de noventa, pero solo repone fibrinógeno y no corrige el resto de los factores.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 54',
      stem: 'Una paciente de 34 años, cursando su primer embarazo, gemelar, bicorial biamniótico, de 26 semanas de edad gestacional. Se controla con ecografía obstétrica, que visualiza un gemelo muerto, sin compromiso hemodinámico del gemelo sobreviviente.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar extracción del feto muerto' },
        { letter: 'B', text: 'Realizar controles periódicos con dímero D' },
        { letter: 'C', text: 'Interrumpir el embarazo' },
        { letter: 'D', text: 'Realizar cesárea a las 37 semanas' },
        { letter: 'E', text: 'Realizar controles periódicos con pruebas de coagulación' },
      ],
      correct: 'E',
      explanation: 'En un embarazo bicorial de 26 semanas se puede mantener la conducta expectante, pero el feto muerto retenido es un gatillo obstétrico de CID. Se vigila con pruebas de coagulación, porque el dímero D se eleva normalmente durante el embarazo y no sirve para seguir a esta paciente.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil diecinueve. Embarazada de treinta y cuatro años, con un embarazo gemelar bicorial biamniótico de veintiséis semanas. La ecografía muestra que un gemelo murió, y el otro está bien.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: extraer el feto muerto, controles con dímero D, interrumpir el embarazo, cesárea a las treinta y siete semanas, o controles con pruebas de coagulación. Piénsalo.',
        answer: 'Es la E. Como es bicorial y el gemelo vivo está bien, se puede esperar, pero el feto muerto retenido es otro gatillo obstétrico de CID, así que hay que vigilarla. El distractor es el dímero D: en el embarazo sube de forma normal, así que no te sirve. Lo que se controla son las pruebas de coagulación, que se alargan si aparece la CID.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Todo alterado', kind: 'key', items: [
          { t: 'Síndrome secundario', d: 'Sepsis, obstetricia, trauma, M3',
            say: 'Cerremos con las reglas de oro. La CID siempre es secundaria: busca la sepsis, la complicación obstétrica, el trauma grave o la leucemia promielocítica.' },
          { t: 'Todo el laboratorio alterado', d: 'Score ISTH ≥ 5: CID manifiesta',
            say: 'El laboratorio está todo alterado a la vez: plaquetas bajas, TP y TTPK largos, fibrinógeno bajo y dímero D muy alto. Con cinco puntos ISTH, es una CID manifiesta.' },
        ] },
        { title: 'Tratamiento', tag: 'La causa manda', kind: 'pharma', items: [
          { t: 'Primero tratar la causa', d: 'Antibiótico, foco, útero, ATRA',
            say: 'El tratamiento es tratar la causa.' },
          { t: 'Hemocomponentes solo si sangra', d: 'Crio, plasma y plaquetas según blanco',
            say: 'Los hemocomponentes, solo si sangra o va a un procedimiento: crioprecipitado para el fibrinógeno, plasma para los factores y plaquetas según la meta.' },
        ] },
        { title: 'Trampa', tag: 'No anticoagular', kind: 'alert', items: [
          { t: 'Heparina contraindicada si sangra', d: 'Solo en CID crónica trombótica',
            say: 'Si te llevas una sola idea de hoy: en la CID el paciente sangra porque coagula en todas partes, y la salida es apagar la causa, no la heparina. En la próxima clase veremos las leucemias agudas, incluida la promielocítica que debuta con CID. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Sospecha de CID: del score a la conducta',
    root: N('start', 'Paciente grave con sangrado multisitio', 'Séptico, obstétrico o politraumatizado',
      'Paciente crítico, séptico, obstétrico o politraumatizado, que sangra por las punciones, las mucosas o las heridas. Piensa en CID y pide el perfil completo.',
      ['', N('q', '¿Score ISTH ≥ 5?', 'Plaquetas · dímero D · TP · fibrinógeno',
        'Con plaquetas, dímero D, TP y fibrinógeno calculas el score ISTH. ¿Suma cinco o más?',
        ['NO', N('ok', 'CID no manifiesta', 'Perfil seriado cada 12–24 h + tratar la causa',
          'Bajo cinco puntos es una CID no manifiesta o una fase inicial: se repite el perfil cada doce a veinticuatro horas y se trata la causa.')],
        ['SÍ', N('q', 'CID manifiesta: tratar la causa', '¿Sangra o requiere procedimiento?',
          'Cinco o más puntos: CID manifiesta. El pilar es tratar la causa de inmediato. Y para el soporte, pregunta: ¿sangra activamente o necesita un procedimiento invasivo?',
          ['NO', N('ok', 'No transfundir por números', 'Plaquetas solo si < 20.000',
            'Si no sangra, no se corrigen números: solo se transfunden plaquetas si bajan de veinte mil.')],
          ['SÍ', N('alert', 'Crio + plasma + plaquetas', 'Fibrinógeno < 100–150 · TP/TTPK > 1,5 · plaquetas > 50.000',
            'Si sangra: crioprecipitado si el fibrinógeno está bajo cien a ciento cincuenta, plasma si el TP o el TTPK superan una vez y media lo normal, y plaquetas con meta sobre cincuenta mil. Sin heparina.')])])]),
  },
};
