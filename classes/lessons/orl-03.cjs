// Clase 14.3 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-03). Preguntas: banco real EUNACOM (class_questions.cjs).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-03',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'El oído de nadador que se cura con gotas y el diabético con dolor nocturno que puede morir si no lo sospechas',
      say: 'Bienvenido. Hasta ahora vimos el oído medio. Hoy bajamos al conducto auditivo externo, donde hay dos enfermedades que parecen la misma y no tienen nada que ver: la otitis externa difusa, que es benigna y se trata en la consulta con gotas, y la otitis externa maligna, una osteomielitis de la base del cráneo en el diabético mayor. Esa diferencia se pregunta casi siempre. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Cómo se inflama el conducto auditivo externo?',
      nodes: [
        { id: 'hum', col: 0, row: 0, k: 'cause', t: 'Humedad: piscina, playa', s: 'Agua que queda en el conducto' },
        { id: 'hi', col: 0, row: 2, k: 'cause', t: 'Cotonitos y rascado', s: 'Traumatismo local' },
        { id: 'cer', col: 1, row: 1, k: 'mech', t: 'Se pierde la capa de cerumen', s: 'Sube el pH de la piel' },
        { id: 'pse', col: 2, row: 1, k: 'risk', t: 'Pseudomonas aeruginosa', s: 'Más del 70 a 80% de los casos' },
        { id: 'oe', col: 3, row: 1, k: 'alert', t: 'Dermoepidermitis del conducto', s: 'Otitis externa difusa' },
        { id: 'cl', col: 4, row: 1, k: 'effect', t: 'Dolor intenso al tirar el pabellón', s: 'Signo del trago positivo' },
      ],
      edges: [
        { from: 'hum', to: 'cer' },
        { from: 'hi', to: 'cer' },
        { from: 'cer', to: 'pse' },
        { from: 'pse', to: 'oe' },
        { from: 'oe', to: 'cl' },
      ],
      steps: [
        { show: ['hum', 'hi'], note: 'Humedad y cotonitos: dos causas clásicas',
          say: 'La otitis externa difusa es una infección de la piel del conducto. Y los factores son siempre los mismos: la humedad de las piscinas y la playa, y los cotonitos o el rascado.' },
        { show: ['cer'], note: 'Se barre la defensa del conducto',
          say: 'Los dos hacen lo mismo: arrastran la capa protectora de cerumen y alteran el pH ácido de la piel. Sin esa defensa, las bacterias crecen. Por eso esta enfermedad es tan veraniega.' },
        { show: ['pse', 'oe'], note: 'Pseudomonas, y secundariamente Staphylococcus',
          say: 'El germen de más del setenta u ochenta por ciento de los casos es Pseudomonas aeruginosa. El segundo es Staphylococcus aureus, entre quince y veinte por ciento. Y esto es el hilo de toda la clase: Pseudomonas también causa la forma maligna.' },
        { show: ['cl'], note: 'El dolor al tirar o presionar el trago',
          say: 'La clínica es una otalgia severa, desproporcionada, con prurito al inicio, y un dolor exquisito al traccionar el pabellón o al presionar el trago. Ese es el signo del trago positivo, y orienta a una patología del conducto, no del oído medio.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Cómo se ve una otitis externa difusa',
      cards: [
        { title: 'Otoscopía', tag: 'Conducto edematoso', kind: 'criteria', items: [
          { t: 'Eritema y edema difuso del conducto', d: 'Ocluye la luz del canal',
            say: 'En la otoscopía el conducto está rojo y edematoso, tan cerrado que a veces no se puede pasar el espéculo.' },
          { t: 'Detritos blancos o verdosos', d: 'Tímpano íntegro o difícil de ver',
            say: 'Se ven detritos blanquecinos o verdosos, y el tímpano está íntegro, aunque el edema puede no dejarte verlo.' },
          { t: 'Signo del trago positivo', d: 'Dolor al traccionar el pabellón',
            say: 'Es lo que separa una otitis externa de una media. Si duele al tirar la oreja, el problema está en el conducto. Si en el enunciado dicen que el niño tiene el conducto estrecho, sin mal olor, es otitis externa.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'gallery',
      kicker: 'Así se ve',
      title: 'Otitis externa: bacteriana y micótica',
      images: [
        { src: 'biblioteca/17_otorrino/orl-03/01_otitis-externa-aguda-conducto-edematoso__bates_p276.jpg', label: 'Otitis externa aguda: conducto edematoso, estrecho y rojizo', credit: 'Bates, Guía de exploración física, Fig. 7-43' },
        { src: 'biblioteca/17_otorrino/orl-03/02_otomicosis-otitis-externa-fungica__bailey-love_p728.jpg', label: 'Otitis externa fúngica: masa blanquecina en el conducto', credit: 'Bailey & Love 27.ª ed., Fig. 46.11' },
      ],
      steps: [
        { note: 'Conducto edematoso y estrecho',
          say: 'Mira cómo el conducto se ve inflamado y estrechado, con la luz casi cerrada. Con ese edema el tímpano muchas veces no se alcanza a ver, y aun así el diagnóstico es clínico.' },
        { note: 'Otomicosis: masa blanquecina',
          say: 'Y esta es una otitis externa por hongos, la otomicosis. Fíjate en la secreción blanquecina y grumosa. Se acompaña de prurito, con poco dolor, y por eso se distingue de la bacteriana.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Otitis externa difusa: todo por vía tópica',
      cards: [
        { title: 'Los tres pilares', tag: 'Ambulatorio', kind: 'pharma', items: [
          { t: 'Aseo del conducto', d: 'Aspiración o hisopado suave, con visión directa',
            say: 'El tratamiento tiene tres pilares. El primero es el aseo meticuloso del conducto, retirando los detritos con aspiración o con un hisopado suave, siempre bajo visión directa.' },
          { t: 'Gotas de ciprofloxacino 0,3%', d: 'Con o sin corticoide, 7 a 10 días',
            say: 'El segundo son gotas de ciprofloxacino al cero coma tres por ciento, con o sin dexametasona o hidrocortisona, tres a cuatro gotas cada ocho a doce horas, por siete a diez días. El corticoide ayuda a bajar el edema.' },
          { t: 'Analgesia reglada', d: 'AINE o paracetamol',
            say: 'Y el tercero es la analgesia reglada, con un antiinflamatorio como ibuprofeno o ketoprofeno, o con paracetamol. Y durante todo el tratamiento, no debe entrar agua al oído.' },
        ] },
        { title: 'Lo que se pregunta', tag: 'Trampa', kind: 'alert', items: [
          { t: 'Sin antibióticos orales', d: 'Las gotas alcanzan concentraciones altísimas',
            say: 'Aquí está la trampa más repetida: no se dan antibióticos orales. Las gotas alcanzan concentraciones locales mil veces superiores a la mínima inhibitoria, y eso basta.' },
          { t: 'Oral solo con celulitis o inmunosupresión', d: 'Ciprofloxacino 500 mg cada 12 horas, 10 días',
            say: 'Los antibióticos orales se agregan solo si la infección salió del conducto hacia el pabellón, con celulitis periauricular, o si el paciente está inmunocomprometido. En ese caso es ciprofloxacino oral, quinientos miligramos cada doce horas, más las gotas, por diez días.' },
          { t: 'Leve: ácido acético 2%', d: 'Restablece el pH ácido del conducto',
            say: 'Y en una otitis externa leve, el libro propone una solución ácida de ácido acético al dos por ciento, que restablece el pH del conducto.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Otitis externa maligna',
      title: 'Cuando la infección del conducto se come el hueso',
      nodes: [
        { id: 'dm', col: 0, row: 1, k: 'cause', t: 'Diabético mayor mal controlado', s: 'Mayor de 65 años o inmunosuprimido' },
        { id: 'ps', col: 1, row: 1, k: 'risk', t: 'Pseudomonas aeruginosa', s: 'Más del 95% de los casos' },
        { id: 'inv', col: 2, row: 1, k: 'mech', t: 'Invade por fisuras de Santorini', s: 'Unión osteocartilaginosa' },
        { id: 'os', col: 3, row: 0, k: 'alert', t: 'Osteomielitis del temporal', s: 'Y de la base del cráneo' },
        { id: 'nv', col: 4, row: 0, k: 'effect', t: 'Pares craneales', s: 'VII primero; luego IX, X, XI y XII' },
        { id: 'dol', col: 3, row: 2, k: 'effect', t: 'Otalgia terebrante nocturna', s: 'No cede con analgésicos' },
      ],
      edges: [
        { from: 'dm', to: 'ps' },
        { from: 'ps', to: 'inv' },
        { from: 'inv', to: 'os' },
        { from: 'os', to: 'nv' },
        { from: 'inv', to: 'dol' },
      ],
      steps: [
        { show: ['dm', 'ps'], note: 'Anciano diabético y Pseudomonas',
          say: 'La otitis externa maligna, o necrotizante, no es un cáncer. Es una infección invasiva con osteomielitis del hueso temporal y de la base del cráneo. Ocurre en ancianos con diabetes mal controlada, o con inmunosupresión celular severa, y casi siempre la causa Pseudomonas aeruginosa.' },
        { show: ['inv'], note: 'Parte en el conducto y avanza por el hueso',
          say: 'Parte en el conducto, igual que la otitis difusa, pero progresa a través de las fisuras de Santorini y la unión osteocartilaginosa hacia la fosa infratemporal, el agujero estilomastoideo y el foramen yugular.' },
        { show: ['dol'], note: 'Dolor profundo que no cede',
          say: 'Por eso el dolor es terebrante, profundo, de predominio nocturno, y no cede con los analgésicos habituales. Hay otorrea fétida persistente. Ese dolor que no calma, en un diabético, es la señal de alerta.' },
        { show: ['os', 'nv'], note: 'El facial se afecta primero',
          say: 'El nervio que primero y más se compromete es el facial, el séptimo par, por la vecindad del agujero estilomastoideo. Después vienen los pares bajos: noveno, décimo, undécimo en el foramen yugular, y el duodécimo en el canal hipogloso. Una parálisis facial en el diabético con otitis externa es una otitis maligna mientras no se demuestre lo contrario.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Otitis externa maligna',
      title: 'Cómo se confirma y cómo se trata',
      cards: [
        { title: 'Diagnóstico', tag: 'Granulación en el piso', kind: 'key', items: [
          { t: 'Granulación en el piso del conducto', d: 'En la unión osteocartilaginosa',
            say: 'El hallazgo patognomónico de la otoscopía es el tejido de granulación en el piso del conducto, en la unión entre el cartílago y el hueso. Si lo ves en un diabético con dolor nocturno, no lo confundas con una otitis simple.' },
          { t: 'TAC de peñasco con contraste', d: 'Incluye base de cráneo; muestra la osteólisis',
            say: 'El estudio confirmatorio es el TAC de peñasco y base de cráneo con contraste, que muestra la erosión ósea. La cintigrafía ósea con tecnecio o galio sirve para seguir la actividad y la resolución.' },
        ] },
        { title: 'Tratamiento', tag: 'Hospitalizar', kind: 'pharma', items: [
          { t: 'Hospitalización inmediata', d: 'Y control estricto de la glicemia',
            say: 'La conducta es hospitalizar de inmediato, controlar estrictamente la glicemia, generalmente con insulina, y tomar un cultivo del tejido de granulación.' },
          { t: 'Ciprofloxacino o ceftazidima endovenosos', d: 'Dosis altas, por vía endovenosa',
            say: 'El antibiótico es endovenoso en dosis altas: ciprofloxacino cuatrocientos miligramos cada ocho a doce horas, o ceftazidima dos gramos cada ocho horas, o meropenem.' },
          { t: 'Mínimo 6 a 8 semanas', d: 'Seguimiento con cintigrafía o TAC',
            say: 'Y se mantiene por un mínimo de seis a ocho semanas. Eso lo diferencia de una otitis simple, que son siete a diez días de gotas.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Gravedad',
      title: 'Estadios de la otitis externa maligna',
      head: ['Estadio', 'Compromiso', 'Mortalidad', 'Conducta'],
      rows: [
        { cells: ['I · Local', 'Partes blandas y cartílago del conducto', 'Menor a 5%', 'Ciprofloxacino EV, o dosis altas orales con control estricto'],
          say: 'El libro propone tres estadios según el avance. En el estadio uno, la infección está limitada a las partes blandas y al cartílago del conducto. La mortalidad es baja, menor del cinco por ciento con terapia oportuna, y se usa ciprofloxacino endovenoso, o en dosis altas por vía oral bajo control estricto.' },
        { cells: ['II · Óseo', 'Osteomielitis del temporal con parálisis facial', '15 a 20%', 'Ceftazidima o ciprofloxacino EV + glicemia'],
          say: 'En el estadio dos hay osteomielitis del hueso temporal con parálisis facial. La mortalidad sube a quince a veinte por ciento, y se usa ceftazidima o ciprofloxacino endovenoso en dosis máximas, junto con el control de la glicemia.' },
        { cells: ['III · Base de cráneo', 'Pares IX, X, XI, XII, clivus y fosa posterior', '30 a 50%', 'Meropenem + ciprofloxacino EV; debridamiento'],
          say: 'En el estadio tres la infección llega a los pares bajos, al clivus y a la fosa posterior, con riesgo de trombosis del seno sigmoide. La mortalidad es de treinta a cincuenta por ciento, y se usa biterapia endovenosa con meropenem más ciprofloxacino, y un debridamiento quirúrgico selectivo. Lo que debes retener es la idea: mientras más tarde se sospecha, peor el pronóstico.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Integremos todo en un árbol de decisión, partiendo del paciente con dolor de oído y signo del trago positivo.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Otitis externa difusa versus maligna',
      head: ['', 'Difusa (nadador)', 'Maligna (necrotizante)'],
      rows: [
        { cells: ['Quién', 'Cualquier edad; nadadores, cotonitos', 'Mayor de 65, diabético o inmunodeprimido'],
          say: 'Repasemos las diferencias. La difusa aparece a cualquier edad, en nadadores y en usuarios de cotonitos. La maligna, en mayores de sesenta y cinco años, diabéticos o inmunodeprimidos.' },
        { cells: ['Dolor', 'Moderado a severo, signo del trago', 'Terebrante, nocturno, despierta al paciente'],
          say: 'El dolor de la difusa es intenso, con signo del trago. El de la maligna es terebrante, nocturno, y no cede con los analgésicos.' },
        { cells: ['Otoscopía', 'Edema y eritema, detritos', 'Granulación en el piso del conducto'],
          say: 'En la otoscopía, la difusa muestra edema, eritema y detritos. La maligna, tejido de granulación en el piso del conducto.' },
        { cells: ['Pares craneales', 'Indemnes', 'VII frecuente; luego IX, X, XI y XII'],
          say: 'En la difusa los pares craneales están intactos. En la maligna se compromete el facial, y después los pares bajos.' },
        { cells: ['Manejo', 'Ambulatorio: gotas de ciprofloxacino + analgesia', 'Hospital: ciprofloxacino o ceftazidima EV, 6 a 8 semanas'],
          say: 'Y el manejo. La difusa es ambulatoria, con gotas y analgesia, y sin antibióticos orales. La maligna requiere hospitalización y antibiótico endovenoso por seis a ocho semanas. El error clásico es tratar una maligna como una difusa, con más gotas.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hombre de 74 años, con diabetes mellitus tipo 2 de 20 años y mal control (HbA1c 10,2%), consulta por otalgia izquierda progresiva de 3 semanas, intolerable en las últimas noches. Recibió dos ciclos de gotas óticas de polimixina y neomicina sin mejoría. Presenta asimetría facial izquierda, con imposibilidad para ocluir el ojo izquierdo. En la otoscopía hay secreción purulenta fétida y tejido de granulación rojizo y friable en el piso del conducto, en la unión osteocartilaginosa.',
      question: '¿Cuál es la conducta de elección?',
      options: [
        { letter: 'A', text: 'Gotas óticas de ciprofloxacino con dexametasona por 10 días y control ambulatorio' },
        { letter: 'B', text: 'Hospitalización, TAC de peñasco con contraste, control de glicemia y ciprofloxacino o ceftazidima endovenosos por al menos 6 a 8 semanas' },
        { letter: 'C', text: 'Amoxicilina con ácido clavulánico oral por 10 días' },
        { letter: 'D', text: 'Corticoides orales para la parálisis facial y control en una semana' },
        { letter: 'E', text: 'Aseo del conducto y observación' },
      ],
      correct: 'B',
      explanation: 'Es una otitis externa maligna: anciano diabético descompensado, dolor nocturno refractario, granulación en el piso del conducto y parálisis facial. Requiere hospitalización, TAC con contraste, control de glicemia, cultivo y antibiótico endovenoso antipseudomonas por 6 a 8 semanas.',
      say: {
        stem: 'Veamos un caso. Un hombre de setenta y cuatro años, diabético de veinte años y mal controlado, con una hemoglobina glicosilada de diez coma dos. Lleva tres semanas con otalgia izquierda que ya no lo deja dormir, y no mejoró con dos ciclos de gotas con neomicina. Tiene asimetría facial izquierda y no puede cerrar el ojo. La otoscopía muestra secreción fétida y tejido de granulación en el piso del conducto.',
        question: '¿Cuál es la conducta de elección?',
        options: 'Las opciones: gotas de ciprofloxacino con dexametasona, hospitalización con TAC, control de glicemia y antibiótico endovenoso, amoxicilina con clavulánico oral, corticoides orales, o solo aseo y observación. Piénsalo.',
        answer: 'Es la B. Diabético mayor, dolor nocturno que no cede, granulación en el piso del conducto y parálisis facial: es una otitis externa maligna. Hospitalizas, pides el TAC con contraste, controlas la glicemia y das ciprofloxacino o ceftazidima endovenosos por seis a ocho semanas. La A es la trampa: más gotas es lo que ya falló, y un paciente con parálisis facial no se maneja ambulatorio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 160',
      stem: 'Un niño de 6 años presenta prurito en el oído derecho desde hace 3 días, al que ayer se agregó otalgia intensa. Al examen físico, presenta dolor intenso a la compresión del trago y, en la otoscopía, se observa edema del conducto auditivo y presencia de secreción amarillenta. El tímpano se observa sin perforación, de aspecto grisáceo.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Forunculosis del conducto auditivo externo' },
        { letter: 'B', text: 'Otitis externa' },
        { letter: 'C', text: 'Otitis media aguda' },
        { letter: 'D', text: 'Colesteatoma' },
        { letter: 'E', text: 'Candidiasis del oído' },
      ],
      correct: 'B',
      explanation: 'Otitis externa clásica, de tipo difuso, probablemente por Pseudomonas aeruginosa. Se trata con ciprofloxacino tópico. La otomicosis por Candida produce prurito, con poco dolor y secreción grumosa blanquecina.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Niño de seis años con tres días de prurito en el oído derecho, y desde ayer otalgia intensa. Tiene dolor intenso al comprimir el trago, el conducto edematoso con secreción amarillenta, y un tímpano grisáceo sin perforación.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: forunculosis del conducto, otitis externa, otitis media aguda, colesteatoma o candidiasis del oído. Piénsalo.',
        answer: 'Es la B, una otitis externa difusa. El dolor al comprimir el trago y el tímpano sin perforación ubican el problema en el conducto. La candidiasis es la alternativa tentadora, pero da prurito con poco dolor y una secreción grumosa blanquecina, no amarillenta con dolor intenso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 170',
      stem: 'Un niño de 9 años presenta otalgia de dos días de evolución, con secreción por el conducto auditivo, sin mal olor. Al examen físico se aprecia dolor a la tracción del pabellón auricular, con conducto auditivo estrecho, que dificulta la otoscopía, siendo imposible visualizar el tímpano.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Otitis externa' },
        { letter: 'B', text: 'Tapón de cerumen' },
        { letter: 'C', text: 'Otitis media crónica' },
        { letter: 'D', text: 'Cuerpo extraño ótico' },
        { letter: 'E', text: 'Otitis media aguda perforada' },
      ],
      correct: 'A',
      explanation: 'El dolor a la tracción del pabellón sugiere otitis externa. No suele haber mal olor, porque Pseudomonas no lo produce, y un conducto estrecho es factor de riesgo.',
      say: {
        stem: 'Otra real, del EUNACOM de agosto de dos mil veintiuno. Niño de nueve años con dos días de otalgia y secreción sin mal olor. Duele al traccionar el pabellón, y el conducto está tan estrecho que no se ve el tímpano.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: otitis externa, tapón de cerumen, otitis media crónica, cuerpo extraño u otitis media aguda perforada. Piénsalo.',
        answer: 'Es la A. El dolor al traccionar el pabellón es el signo de la otitis externa. Fíjate además en que no hay mal olor: Pseudomonas no suele producirlo, y el mal olor orienta más a una otitis crónica con colesteatoma. El tapón de cerumen y el cuerpo extraño no cursan con ese dolor al movilizar la oreja.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 46',
      stem: 'Un paciente de 35 años consulta por otalgia izquierda de 3 días de evolución, asociada a otorrea ipsilateral. El dolor aumenta al traccionar el pabellón auricular. A la otoscopía se observa el conducto auditivo externo edematoso, con escasa secreción y tímpano normal.',
      question: '¿Cuál es el tratamiento de primera línea?',
      options: [
        { letter: 'A', text: 'Amoxicilina oral' },
        { letter: 'B', text: 'Ciprofloxacino tópico' },
        { letter: 'C', text: 'Amoxicilina más ácido clavulánico oral' },
        { letter: 'D', text: 'Neomicina tópica' },
        { letter: 'E', text: 'Antiinflamatorios orales' },
      ],
      correct: 'B',
      explanation: 'Otitis externa difusa: primera línea ciprofloxacino tópico. La neomicina también tiene evidencia con el tímpano intacto, y solo está contraindicada si hay perforación, por ototoxicidad; la pregunta se resolvió a favor del ciprofloxacino.',
      say: {
        stem: 'Una real, del EUNACOM de julio de dos mil diecinueve. Paciente de treinta y cinco años con tres días de otalgia izquierda y otorrea. El dolor aumenta al traccionar el pabellón. El conducto está edematoso, con poca secreción, y el tímpano es normal.',
        question: '¿Cuál es el tratamiento de primera línea?',
        options: 'Las opciones: amoxicilina oral, ciprofloxacino tópico, amoxicilina con clavulánico oral, neomicina tópica o antiinflamatorios orales. Piénsalo.',
        answer: 'Es la B, ciprofloxacino tópico. Es una otitis externa difusa y se trata con gotas, no con antibióticos orales. La neomicina es una opción que también tiene evidencia con el tímpano sano, y su gran problema es la ototoxicidad si hubiera una perforación. Aun así, el examen dio como correcta el ciprofloxacino.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 157',
      stem: 'Un paciente de 35 años consulta por prurito en el oído izquierdo, asociado a secreción blanquecina y sensación de oído tapado. A la otoscopía se observa abundante secreción grumosa que cubre parcialmente el tímpano.',
      question: '¿Cuál es el tratamiento de elección para iniciar el manejo de este paciente?',
      options: [
        { letter: 'A', text: 'Ciprofloxacino tópico' },
        { letter: 'B', text: 'Fluconazol oral' },
        { letter: 'C', text: 'Clotrimazol tópico' },
        { letter: 'D', text: 'Amoxicilina oral' },
        { letter: 'E', text: 'Ciprofloxacino oral' },
      ],
      correct: 'C',
      explanation: 'Otomicosis por Candida albicans: se trata con un antimicótico tópico, como clotrimazol.',
      say: {
        stem: 'Y una real, del EUNACOM de julio de dos mil veinticuatro. Paciente de treinta y cinco años con prurito en el oído izquierdo, secreción blanquecina y sensación de oído tapado. La otoscopía muestra abundante secreción grumosa que cubre parcialmente el tímpano.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones: ciprofloxacino tópico, fluconazol oral, clotrimazol tópico, amoxicilina oral o ciprofloxacino oral. Piénsalo.',
        answer: 'Es la C, clotrimazol tópico. Prurito, oído tapado y secreción grumosa blanquecina son una otomicosis, por Candida. Es la imagen del hongo que viste hace un rato. El ciprofloxacino, que servía para la bacteriana, aquí no sirve, y tampoco los antibióticos orales.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Una mujer de 78 años, diabética de larga data con mal apego al tratamiento, consulta por otalgia derecha intensa de predominio nocturno, refractaria a paracetamol y tramadol, con otorrea purulenta fétida. En la otoscopía hay edema del conducto con tejido de granulación eritematoso en el piso, en la unión osteocartilaginosa. Presenta desviación de la comisura bucal hacia la izquierda y lagoftalmos derecho.',
      question: '¿Cuál es el examen inicial de elección para evaluar la extensión ósea?',
      options: [
        { letter: 'A', text: 'Radiografía simple de cráneo en proyección de Schüller' },
        { letter: 'B', text: 'TAC de peñasco y base de cráneo con contraste' },
        { letter: 'C', text: 'Resonancia magnética de encéfalo sin contraste' },
        { letter: 'D', text: 'Ecografía de partes blandas de la región parotídea' },
        { letter: 'E', text: 'Audiometría y potenciales evocados auditivos de tronco' },
      ],
      correct: 'B',
      explanation: 'Otitis externa maligna con parálisis del VII par. El TAC de peñasco y base de cráneo con contraste define la osteólisis. La radiografía simple tiene poca resolución, y la resonancia complementa después las partes blandas endocraneales.',
      say: {
        stem: 'Cerremos con una pregunta del banco, de caso representativo. Una mujer de setenta y ocho años, diabética con mal apego, con otalgia derecha nocturna que no cede ni con tramadol, otorrea fétida, y tejido de granulación en el piso del conducto. Tiene la comisura desviada y no cierra el ojo derecho.',
        question: '¿Cuál es el examen inicial de elección para evaluar la extensión ósea?',
        options: 'Las opciones: radiografía de cráneo, TAC de peñasco y base de cráneo con contraste, resonancia sin contraste, ecografía parotídea, o audiometría con potenciales evocados. Piénsalo.',
        answer: 'Es la B. Es una otitis externa maligna con parálisis facial, y lo que necesitas es ver la osteólisis, cosa que hace el TAC de peñasco y base de cráneo con contraste. La radiografía simple no tiene resolución suficiente, y la resonancia es un complemento posterior para las partes blandas.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: otitis externa',
      cards: [
        { title: 'Otitis externa difusa', tag: 'Gotas', kind: 'pharma', items: [
          { t: 'Aseo, gotas de ciprofloxacino, analgesia', d: 'Sin antibióticos orales',
            say: 'Cerremos con las reglas de oro. La otitis externa difusa se reconoce por el dolor al traccionar el pabellón o presionar el trago, y se trata con aseo, gotas de ciprofloxacino y analgesia. Sin antibióticos orales.' },
          { t: 'Prurito y secreción grumosa: hongo', d: 'Clotrimazol tópico',
            say: 'Si hay prurito y secreción grumosa blanquecina, piensa en otomicosis, y trata con clotrimazol.' },
        ] },
        { title: 'Otitis externa maligna', tag: 'Alarma', kind: 'alert', items: [
          { t: 'Diabético mayor con dolor nocturno', d: 'Granulación en el piso del conducto',
            say: 'La otitis externa maligna es el diabético mayor con dolor nocturno terebrante que no cede, y tejido de granulación en el piso del conducto. La causa Pseudomonas.' },
          { t: 'El facial se afecta primero', d: 'Después IX, X, XI y XII',
            say: 'El nervio más frecuentemente comprometido es el facial.' },
          { t: 'Hospitalizar y antibiótico EV', d: 'TAC con contraste; 6 a 8 semanas',
            say: 'Y se maneja hospitalizado, con TAC con contraste, control estricto de la glicemia y ciprofloxacino o ceftazidima endovenosos por seis a ocho semanas. Si te llevas una sola idea de hoy: oído de nadador, gotas; diabético con dolor que no cede, hospital. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de enfrentamiento: otitis externa',
    root: N('start', 'Otalgia con dolor al traccionar el pabellón', 'Conducto edematoso, signo del trago positivo',
      'Un paciente con otalgia, dolor al tirar la oreja o presionar el trago. Es patología del conducto. La primera pregunta es quién es el paciente.',
      ['', N('q', '¿Diabético mayor o inmunodeprimido, con dolor nocturno?', 'Granulación en el piso o parálisis facial',
        'Aquí se decide todo. Dolor terebrante nocturno, granulación en el piso del conducto o parálisis facial hacen sospechar una otitis externa maligna.',
        ['Sí: sospecha de otitis externa maligna', N('alert', 'Hospitalizar y pedir TAC con contraste', 'Cultivo y control estricto de glicemia',
          'Hospitalización inmediata, TAC de peñasco y base de cráneo con contraste, cultivo y control de la glicemia.',
          ['Tratamiento', N('do', 'Ciprofloxacino o ceftazidima EV', 'Mínimo 6 a 8 semanas',
            'Antibiótico endovenoso antipseudomonas, por seis a ocho semanas, con seguimiento con cintigrafía o TAC.')],
        )],
        ['No: otitis externa difusa', N('q', '¿Secreción grumosa blanquecina con prurito?', 'Poco dolor',
          'Si hay prurito con secreción grumosa y poco dolor, piensa en hongo. Si no, es la forma bacteriana habitual.',
          ['Sí: otomicosis', N('do', 'Aseo + clotrimazol tópico', 'Antimicótico, no antibiótico',
            'Es una otomicosis, por Candida. Se trata con aseo y un antimicótico tópico.')],
          ['No: difusa bacteriana', N('do', 'Aseo + gotas de ciprofloxacino + analgesia', 'Sin antibióticos orales; evitar agua',
            'Aseo del conducto, gotas de ciprofloxacino con o sin corticoide por siete a diez días, y analgesia. Solo si hay celulitis periauricular o inmunosupresión se agrega ciprofloxacino oral.')],
        )],
      )],
    ),
  },
};
