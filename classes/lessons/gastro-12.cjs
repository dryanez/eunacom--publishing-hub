// Clase 2.6 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-12).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-12',
  tier: 1,
  slides: [
    {
      type: 'cover',
      subtitle: '¿Duele o no duele? ¿Baños de asiento o pabellón?',
      say: 'Bienvenidos. Hoy vemos la patología perianal: fisura, hemorroides, absceso y fístula. Es un tema corto, y casi todo se ordena con dos preguntas. Primero: ¿duele o no duele? Y segundo: ¿se maneja con medidas médicas o va a pabellón? Partamos.',
    },

    {
      type: 'points',
      kicker: 'Manejo médico',
      title: 'Fisura anal',
      cards: [
        { title: 'Clínica y diagnóstico', tag: 'Duele al defecar', kind: 'key', items: [
          { t: 'Desgarro por deposición dura', d: 'Dolor que persiste minutos + sangre al papel',
            say: 'Partamos por la fisura. Es un desgarro del anodermo por una deposición dura. Duele intensamente al defecar, y el dolor persiste varios minutos porque el esfínter interno queda en espasmo. Sangra poco, manchando el papel. Se diagnostica con la inspección.' },
        ] },
        { title: 'Tratamiento', tag: 'Médico primero', kind: 'pharma', items: [
          { t: 'Baños de asiento + tratar constipación', d: 'Crónica > 6 semanas: esfinterotomía lateral interna',
            say: 'El tratamiento es médico: baños de asiento, que relajan el esfínter interno, y tratar la constipación con fibra, agua y laxantes osmóticos. Solo si es crónica, de más de seis semanas, y no responde, se hace una esfinterotomía lateral interna.' },
          { t: 'Se corta el interno, nunca el externo', d: 'El externo es voluntario: incontinencia',
            say: 'Y ojo con este detalle: se secciona siempre el esfínter interno. El externo, el voluntario, no se toca, porque cortarlo produce incontinencia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo médico',
      title: 'Hemorroides',
      cards: [
        { title: 'Hemorroide interno', tag: 'Sangra sin dolor', kind: 'normal', items: [
          { t: 'Hematoquecia indolora', d: 'Grados I a IV; descartar otras causas',
            say: 'Ahora los hemorroides. El interno es lo contrario de la fisura: sangra sin dolor. Se clasifica de grado uno, que no protruye, a grado cuatro, irreductible. Es causa frecuente de hemorragia digestiva baja, pero siempre hay que descartar otras causas, como el cáncer que vimos en la clase anterior, con rectoscopía o colonoscopía.' },
          { t: 'Ligadura elástica electiva', d: 'Grados avanzados: hemorroidectomía',
            say: 'Se trata con ligadura con banda elástica, en forma electiva, más tratar la constipación. En grados avanzados, hemorroidectomía.' },
        ] },
        { title: 'Hemorroide externo trombosado', tag: 'Dolor agudo', kind: 'alert', items: [
          { t: 'Nódulo violáceo doloroso', d: 'Trombectomía solo dentro de 48–72 h',
            say: 'El hemorroide externo trombosado da dolor anal agudo con un nódulo violáceo visible. Baños de asiento siempre, y trombectomía solo si consulta dentro de las primeras cuarenta y ocho a setenta y dos horas. Después ya no aporta.' },
          { t: 'Fluxión hemorroidal', d: 'Internos prolapsados y trombosados: cirugía',
            say: 'Distinto es la fluxión hemorroidal: hemorroides internos prolapsados y trombosados afuera, extremadamente dolorosos. Esa va a cirugía, urgente o electiva precoz.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Manejo quirúrgico',
      title: 'Absceso perianal y fístula',
      nodes: [
        { id: 'abs', col: 0, row: 1, k: 'risk', t: 'Absceso perianal', s: 'Dolor creciente + masa fluctuante' },
        { id: 'dre', col: 1, row: 1, k: 'good', t: 'Drenaje en pabellón', s: 'Antibióticos solos no sirven' },
        { id: 'pel', col: 1, row: 3, k: 'alert', t: 'Absceso pelvirrectal', s: 'Sepsis + síntomas urinarios' },
        { id: 'rm', col: 2, row: 3, k: 'good', t: 'RM pelvis + drenaje + ATB ev', s: 'Aquí sí antibióticos' },
        { id: 'fis', col: 2, row: 1, k: 'effect', t: 'Fístula anal', s: 'Orificio cutáneo que supura' },
        { id: 'fto', col: 3, row: 1, k: 'good', t: 'Fistulotomía o sedal', s: 'Tratamiento quirúrgico' },
      ],
      edges: [
        { from: 'abs', to: 'dre' }, { from: 'abs', to: 'pel', label: 'profundo' }, { from: 'pel', to: 'rm' },
        { from: 'dre', to: 'fis', label: 'secuela' }, { from: 'fis', to: 'fto' },
      ],
      steps: [
        { show: ['abs'], note: 'Dolor progresivo, no súbito',
          say: 'Ahora lo quirúrgico. El absceso perianal da un dolor anal que aumenta progresivamente, día a día, no de forma súbita, y una masa eritematosa y fluctuante.' },
        { show: ['dre'], note: 'Regla fija',
          say: 'Su tratamiento es el drenaje quirúrgico en pabellón. Los antibióticos solos no reemplazan el drenaje: una colección de pus no se cura con pastillas.' },
        { show: ['pel', 'rm'], note: 'El absceso profundo se ve distinto',
          say: 'Si el absceso es profundo, pelvirrectal o isquioanal, el paciente llega con sepsis y síntomas urinarios. Ahí se pide resonancia de pelvis, se drena en pabellón y se agregan antibióticos endovenosos. Aquí sí van los antibióticos.' },
        { show: ['fis', 'fto'], note: 'Secuela del absceso',
          say: 'La fístula anal es la secuela de un absceso: un trayecto que comunica el canal anal con la piel, con un orificio que supura de forma crónica. El diagnóstico es clínico y el tratamiento es quirúrgico, con fistulotomía o sedal. Y en un paciente con fístulas perianales, recuerda pensar también en Crohn.' },
      ],
    },

    {
      type: 'points',
      kicker: 'No confundir',
      title: 'Fisura no es fístula',
      cards: [
        { title: 'Se escriben parecido, se manejan al revés', tag: 'Trampa del tema', kind: 'alert', items: [
          { t: 'Fisura: herida, manejo médico', d: 'Dolorosa, por constipación, baños de asiento',
            say: 'Y aquí va la trampa del tema, porque el enunciado juega con el parecido de las palabras. La fisura es una herida lineal dolorosa del margen anal, causada por la constipación, y su manejo es médico: baños de asiento.' },
          { t: 'Fístula: trayecto, manejo quirúrgico', d: 'Secuela de un absceso, se opera',
            say: 'La fístula es un trayecto que comunica el canal anal con la piel, secuela de un absceso, y su manejo es quirúrgico. Se escriben parecido, pero se manejan exactamente al revés: si confundes una con otra, eliges el tratamiento equivocado.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Patología perianal: clínica y conducta',
      head: ['Cuadro', 'Clave clínica', 'Conducta'],
      rows: [
        { cells: ['Fisura anal', 'Dolor al defecar + sangre al papel', 'Baños de asiento + tratar constipación'],
          say: 'Repasemos en una tabla. Fisura: dolor al defecar y sangre en el papel; baños de asiento y tratar la constipación.' },
        { cells: ['Hemorroide interno', 'Hematoquecia sin dolor', 'Ligadura elástica; descartar otras causas'],
          say: 'Hemorroide interno: sangra sin dolor; ligadura elástica, y descartar otras causas.' },
        { cells: ['Hemorroide externo trombosado', 'Dolor agudo + nódulo violáceo', 'Baños de asiento; trombectomía si < 72 h'],
          say: 'Hemorroide externo trombosado: dolor agudo y nódulo violáceo; baños de asiento, y trombectomía solo si llega precoz.' },
        { cells: ['Absceso perianal', 'Dolor creciente + masa fluctuante', 'Drenaje en pabellón (no ATB solos)'],
          say: 'Absceso: dolor que crece y masa fluctuante; drenaje en pabellón, no antibióticos solos.' },
        { cells: ['Fístula anal', 'Orificio que supura crónicamente', 'Cirugía (fistulotomía)'],
          say: 'Fístula: orificio que supura crónicamente; cirugía.' },
        { cells: ['Absceso pelvirrectal', 'Absceso + sepsis + síntomas urinarios', 'RM de pelvis + drenaje + ATB ev'],
          say: 'Y absceso pelvirrectal: sepsis y síntomas urinarios; resonancia, drenaje y antibióticos endovenosos.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 38 años con dolor anal que ha ido aumentando durante 4 días, ahora intenso e invalidante, con fiebre de 38 °C. Al examen: tumoración perianal eritematosa, caliente y fluctuante a las 5 del reloj, sin nódulo violáceo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Baños de asiento y laxantes osmóticos' },
        { letter: 'B', text: 'Antibióticos orales y control en 48 horas' },
        { letter: 'C', text: 'Trombectomía ambulatoria' },
        { letter: 'D', text: 'Drenaje quirúrgico en pabellón' },
        { letter: 'E', text: 'Esfinterotomía lateral interna' },
      ],
      correct: 'D',
      explanation: 'Dolor anal progresivo, masa eritematosa fluctuante y fiebre: absceso perianal. Se trata con drenaje quirúrgico en pabellón; los antibióticos solos no resuelven la colección. La fluctuación y la ausencia de nódulo violáceo lo separan del hemorroide externo trombosado.',
      say: {
        stem: 'Vamos al caso. Hombre de treinta y ocho años con dolor anal que ha ido aumentando durante cuatro días, ahora intenso e invalidante, con fiebre de treinta y ocho grados. Al examen hay una tumoración perianal eritematosa, caliente y fluctuante, sin nódulo violáceo.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las alternativas: baños de asiento y laxantes, antibióticos orales con control en dos días, trombectomía, drenaje en pabellón, o esfinterotomía lateral interna. Piénsalo.',
        answer: 'Es la D, drenaje quirúrgico en pabellón. Dolor que crece día a día, masa fluctuante y fiebre: es un absceso perianal. El distractor tentador son los antibióticos orales, pero una colección de pus no se resuelve sin drenaje. Y la trombectomía es para el hemorroide externo trombosado, que da un dolor brusco con nódulo violáceo y sin fiebre.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 27',
      stem: 'Paciente de 52 años con hemorroides externas trombosadas desde hace 6 horas, violáceas, protruidas, irreducibles y muy dolorosas.',
      question: '¿Cuál es el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'Hemorroidectomía de urgencia' },
        { letter: 'B', text: 'Trombectomía hemorroidal bajo anestesia local' },
        { letter: 'C', text: 'Ligadura con banda elástica' },
        { letter: 'D', text: 'Manejo médico conservador con analgesia y baños de asiento' },
        { letter: 'E', text: 'Escleroterapia' },
      ],
      correct: 'B',
      explanation: 'Hemorroide externo trombosado que consulta dentro de las primeras 48–72 horas: la trombectomía bajo anestesia local alivia el dolor de inmediato. Pasado ese plazo, el manejo es conservador, porque el trombo se reabsorbe solo.',
      say: {
        stem: 'Vamos con una pregunta real, del EUNACOM de julio de dos mil veinticinco. Paciente de cincuenta y dos años con hemorroides externos trombosados desde hace seis horas: violáceos, protruidos, irreductibles y muy dolorosos.',
        question: '¿Cuál es el manejo más adecuado?',
        options: 'Las opciones: hemorroidectomía de urgencia, trombectomía bajo anestesia local, ligadura con banda elástica, manejo médico conservador, o escleroterapia. Piénsalo.',
        answer: 'Es la B, trombectomía bajo anestesia local. Consulta a las seis horas, muy dentro de la ventana de cuarenta y ocho a setenta y dos horas, así que todavía aporta. La ligadura elástica es para el hemorroide interno, no el externo. Y el manejo conservador solo se justifica cuando ya pasó esa ventana.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 54',
      stem: 'Hombre de 54 años consulta por dolor anal que se presenta al defecar, persistiendo por algunos minutos luego de la defecación. En algunas ocasiones ha presentado sangre en las deposiciones.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hemorroide externo trombosado' },
        { letter: 'B', text: 'Cáncer de recto' },
        { letter: 'C', text: 'Fisura anal' },
        { letter: 'D', text: 'Fístula anal' },
        { letter: 'E', text: 'Absceso perianal' },
      ],
      correct: 'C',
      explanation: 'Dolor que aparece con la defecación y persiste minutos después, con sangrado escaso: es una fisura anal, por el espasmo del esfínter interno que sigue a cada episodio.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil diecisiete. Hombre de cincuenta y cuatro años con dolor anal que aparece al defecar y persiste algunos minutos después, con sangre en las deposiciones en algunas ocasiones.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hemorroide externo trombosado, cáncer de recto, fisura anal, fístula anal, o absceso perianal. Piénsalo.',
        answer: 'Es la C, fisura anal. El patrón es clásico: dolor que empieza justo con la defecación y se queda por minutos, por el espasmo del esfínter interno, con sangrado escaso. Eso descarta el hemorroide trombosado, que es de inicio brusco con un nódulo, y el absceso, que crece día a día. Nada de disfagia ni de masa que hagan pensar en cáncer.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Hombre de 45 años consulta porque desde hace 3 meses tiene un pequeño orificio en la piel de la región glútea, cercano al ano, que supura material purulento de forma intermitente. Tuvo un absceso perianal drenado hace 4 meses.',
      question: '¿Cuál es el diagnóstico y el tratamiento?',
      options: [
        { letter: 'A', text: 'Fisura anal crónica; baños de asiento' },
        { letter: 'B', text: 'Fístula anal; tratamiento quirúrgico' },
        { letter: 'C', text: 'Hidradenitis supurativa; antibióticos prolongados' },
        { letter: 'D', text: 'Hemorroide interno grado IV; ligadura elástica' },
        { letter: 'E', text: 'Quiste pilonidal; observación' },
      ],
      correct: 'B',
      explanation: 'Orificio cutáneo perianal que supura de forma crónica tras un absceso drenado: fístula anal, trayecto entre el canal anal y la piel. Tratamiento quirúrgico (fistulotomía o sedal). Error clásico: confundirla con la fisura, herida dolorosa de manejo médico.',
      say: {
        stem: 'Y ahora una pregunta del banco EUNACOM. Hombre de cuarenta y cinco años con un pequeño orificio en la piel, cerca del ano, que supura pus de forma intermitente hace tres meses. Tuvo un absceso perianal drenado hace cuatro meses.',
        question: '¿Cuál es el diagnóstico y el tratamiento?',
        options: 'Las opciones: fisura crónica con baños de asiento, fístula anal con cirugía, hidradenitis con antibióticos, hemorroide interno grado cuatro con ligadura, o quiste pilonidal con observación. Piénsalo.',
        answer: 'La respuesta es la B, fístula anal con tratamiento quirúrgico. Un orificio que supura después de un absceso drenado es exactamente la secuela que vimos. El distractor tentador es la fisura crónica, porque suena parecido, pero la fisura es una herida dolorosa de manejo médico, y la fístula es un trayecto que se opera.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Manejo médico', tag: 'Baños de asiento', kind: 'key', items: [
          { t: 'Fisura: baños de asiento', d: 'Esfinterotomía: interno, nunca externo',
            say: 'Cerremos con las reglas de oro. La fisura se trata con baños de asiento y tratando la constipación; si se opera, se corta el esfínter interno, nunca el externo.' },
          { t: 'Hemorroide interno: sangra sin dolor', d: 'Descartar otras causas',
            say: 'El hemorroide interno sangra sin dolor, y siempre obliga a descartar otras causas de sangrado.' },
        ] },
        { title: 'Pabellón', tag: 'Cirugía', kind: 'alert', items: [
          { t: 'Absceso: drenaje en pabellón', d: 'Antibióticos solos no bastan',
            say: 'El absceso se drena en pabellón; los antibióticos solos no bastan.' },
          { t: 'Fisura ≠ fístula', d: 'Herida médica vs trayecto quirúrgico',
            say: 'Y fisura no es fístula. Si te llevas una sola idea de hoy: pregúntate si duele y cómo empezó el dolor, porque eso separa lo que se trata con baños de asiento de lo que va a pabellón. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Dolor y sangrado anal: ¿médico o pabellón?',
    root: N('start', 'Síntoma anal', 'Dolor, sangrado o supuración',
      'Partimos del paciente que consulta por un problema anal: dolor, sangrado o una zona que supura.',
      ['', N('q', '¿Duele?', 'El primer eje',
        'La primera pregunta es simple: ¿duele o no duele?',
        ['NO, sangra', N('ok', 'Hemorroide interno', 'Ligadura elástica; descartar otras causas',
          'Sangrado rojo sin dolor: hemorroide interno. Ligadura elástica electiva y tratar la constipación, pero siempre descartando otras causas, como un cáncer, con rectoscopía o colonoscopía.')],
        ['SÍ', N('q', '¿Cómo es el dolor?', 'Al defecar, brusco o creciente',
          'Si duele, miramos el patrón del dolor. ¿Aparece con cada defecación, empezó de golpe con un nódulo, o crece día a día?',
          ['Al defecar', N('ok', 'Fisura anal', 'Baños de asiento + tratar constipación',
            'Dolor con la defecación y sangre al papel: fisura. Baños de asiento y tratar la constipación; esfinterotomía lateral interna solo si es crónica y no responde.')],
          ['Brusco, nódulo violáceo', N('do', 'Hemorroide externo trombosado', 'Trombectomía si < 72 h',
            'Dolor brusco con nódulo violáceo: hemorroide externo trombosado. Baños de asiento, y trombectomía solo dentro de las primeras setenta y dos horas.')],
          ['Creciente, masa fluctuante', N('alert', 'Absceso perianal', 'Drenaje en pabellón',
            'Dolor que crece con masa fluctuante: absceso. Drenaje en pabellón. Si hay sepsis y síntomas urinarios, pensar en absceso pelvirrectal: resonancia, drenaje y antibióticos endovenosos.',
            ['Supura después', N('refer', 'Fístula anal', 'Fistulotomía o sedal',
              'Si meses después queda un orificio que supura, es una fístula: tratamiento quirúrgico.')])])])]),
  },
};
