// Clase 11.7 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_cirugia.cjs / dataset_cirugia_bloque_2.cjs (cir-07, classId cirugia-07).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-07',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fisura, hemorroides y absceso: el síntoma guía te da el diagnóstico',
      say: 'Hoy vemos la patología orificial benigna: fisura anal, hemorroides y abscesos perianales. Es el motivo de consulta proctológico más frecuente, y se ordena fácil si te fijas en un solo dato: cómo es el dolor y cuándo aparece. Vamos a eso.',
    },

    {
      type: 'points',
      kicker: 'Fisura anal',
      title: 'El dolor que corta como vidrio',
      cards: [
        { title: 'Clínica clásica', tag: 'Al defecar y después', kind: 'key', items: [
          { t: 'Dolor lacerante', d: 'Empieza al defecar y dura horas',
            say: 'Empecemos por la fisura anal. El paciente te describe un dolor lacerante, como un corte de vidrios, que empieza justo al defecar y se queda doliendo varias horas después.' },
          { t: 'Poca sangre roja', d: 'En el papel, no en la taza',
            say: 'Y suele manchar poca sangre roja fresca, en el papel higiénico, no mezclada en la deposición.' },
        ] },
        { title: 'Dónde mirar', tag: 'Línea media posterior', kind: 'criteria', items: [
          { t: 'Más del 90 % ahí', d: 'Es la zona con menos irrigación',
            say: 'Si separas los glúteos, mira la línea media posterior: ahí está más del noventa por ciento de las fisuras, porque es la zona que menos sangre recibe. Mira esta fisura: una úlcera alargada justo en el borde del ano, en la línea media.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-07/02_fisura_anal_foto__commons.jpg', label: 'Fisura anal', at: 'Mira esta fisura', credit: 'Wikimedia Commons «Anal fissure 1.jpg», Public domain, Bernardo Gui' } },
          { t: 'Tríada de Brodie', d: 'Úlcera, papila y hemorroide centinela',
            say: 'Si ya lleva semanas, vas a ver la tríada de Brodie: la úlcera con las fibras del esfínter a la vista, una papila hipertrófica arriba, y una hemorroide centinela abajo. Eso te dice que ya es una fisura crónica.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisura anal',
      title: 'Casi siempre se cura sin cirugía',
      nodes: [
        { id: 'con', col: 0, row: 1, k: 'start', t: 'Constipación', s: 'Deposición dura que desgarra' },
        { id: 'esp', col: 1, row: 1, k: 'mech', t: 'Hipertonía del esfínter', s: 'Isquemia local' },
        { id: 'med', col: 2, row: 0, k: 'good', t: 'Fibra, agua, baños tibios', s: 'Más diltiazem tópico' },
        { id: 'cro', col: 2, row: 2, k: 'risk', t: 'No cicatriza en semanas', s: 'Se vuelve crónica' },
        { id: 'eli', col: 3, row: 2, k: 'alert', t: 'Esfinterotomía lateral interna', s: 'Solo si falla lo médico' },
      ],
      edges: [
        { from: 'con', to: 'esp' }, { from: 'esp', to: 'med' },
        { from: 'esp', to: 'cro', label: 'si no se trata' }, { from: 'cro', to: 'eli' },
      ],
      steps: [
        { show: ['con', 'esp'], note: 'El círculo vicioso del dolor',
          say: 'El mecanismo empieza con una deposición dura que desgarra el anodermo. Ese dolor genera hipertonía del esfínter anal interno, y esa hipertonía isquemiza la zona: entras en un círculo que se retroalimenta.' },
        { show: ['med'], note: 'Funciona en más del 80 % de los casos',
          say: 'Por eso el tratamiento de primera línea rompe justo ese círculo: fibra y agua para ablandar la deposición, baños de asiento tibios que relajan el esfínter, y diltiazem tópico, que también lo relaja. Con esto se cura la gran mayoría.' },
        { show: ['cro'], note: 'Más de 6 a 8 semanas sin cerrar',
          say: 'Si después de seis a ocho semanas la fisura sigue sin cerrar, ya es crónica.' },
        { show: ['eli'], note: 'El estándar quirúrgico',
          say: 'Y ahí sí pasas a cirugía: la esfinterotomía lateral interna, que es el estándar para la fisura crónica que no responde al tratamiento médico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Enfermedad hemorroidal',
      title: 'Internas y externas no son la misma pregunta',
      cards: [
        { title: 'Internas', tag: 'Sangrado indoloro', kind: 'key', items: [
          { t: 'Sangre roja rutilante', d: 'Al final de la deposición, sin dolor',
            say: 'Las hemorroides internas están sobre la línea dentada, cubiertas por mucosa sin sensibilidad al dolor. Por eso dan sangrado rojo, rutilante, al final de la deposición, sin que duela nada.' },
          { t: 'Grado según el prolapso', d: 'I y II médico, III y IV cirugía',
            say: 'Se clasifican en cuatro grados según cuánto prolapsan. Grado uno y dos se manejan con dieta y bandas elásticas; grado tres y cuatro necesitan hemorroidectomía. Mira este prolapso grado cuatro: las hemorroides quedan afuera y ya no se pueden reducir.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-07/01_prolapso-hemorroidal__cto-digestivo_p149.jpg', label: 'Prolapso grado cuatro', at: 'Mira este prolapso', credit: 'Manual CTO Digestivo 14.ª ed., p. 149' } },
        ] },
        { title: 'Externas trombosadas', tag: 'Dolor brusco, no defecatorio', kind: 'alert', items: [
          { t: 'Nódulo violáceo y tenso', d: 'Bajo la línea dentada, muy doloroso',
            say: 'Las externas están bajo la línea dentada, cubiertas de piel con harta sensibilidad. Cuando se trombosan, aparece de golpe un nódulo violáceo, tenso y muy doloroso, sin relación directa con la defecación. Mira este nódulo violáceo y tenso en el margen anal: eso es una hemorroide externa trombosada.',
            photo: { src: '_verificadas/56_hemorroide_externa_trombosada__27thBaileyLo_p1382_1.jpg', label: 'Hemorroide trombosada', at: 'Mira este nódulo', credit: 'Bailey & Love\'s Short Practice of Surgery, 27.ª ed., p. 1382' } },
          { t: 'Antes de 72 horas: trombectomía', d: 'Después: solo manejo conservador',
            say: 'Si el paciente consulta antes de setenta y dos horas, la trombectomía bajo anestesia local le quita el dolor de inmediato. Si ya pasó ese plazo, el coágulo se está reabsorbiendo solo, y ahí basta con calor local y analgesia.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Interna, externa y prolapso',
      images: [
        { src: 'animaciones/cirugia-07/A1_hemorroides.mp4', label: 'Línea dentada, grados y trombosis', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0; animación propia' },
      ],
      steps: [
        { note: 'La línea dentada separa dos mundos',
          say: 'Mira cómo la línea dentada separa dos mundos. Sobre ella, la hemorroide interna no duele y sangra rojo; si prolapsa, grados uno y dos se manejan con fibra y bandas, y grados tres y cuatro van a cirugía. Bajo la línea, la externa tiene piel sensible: trombosada, es un nódulo violáceo y doloroso, y antes de setenta y dos horas se hace trombectomía.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Abscesos y fístulas',
      title: 'Dos fases de la misma enfermedad',
      nodes: [
        { id: 'cri', col: 0, row: 1, k: 'cause', t: 'Cripta de Morgagni tapada', s: 'Se infecta una glándula anal' },
        { id: 'abs', col: 1, row: 0, k: 'alert', t: 'Absceso perianal', s: 'Dolor pulsátil continuo' },
        { id: 'dre', col: 2, row: 0, k: 'good', t: 'Drenaje quirúrgico ya', s: 'Sin esperar fluctuación' },
        { id: 'fis', col: 1, row: 2, k: 'risk', t: 'Fístula anorrectal', s: 'En 30 a 50 %, tras el drenaje' },
        { id: 'goo', col: 2, row: 2, k: 'q', t: 'Regla de Goodsall', s: 'Predice el trayecto' },
      ],
      edges: [
        { from: 'cri', to: 'abs' }, { from: 'abs', to: 'dre' },
        { from: 'abs', to: 'fis', label: 'después' }, { from: 'fis', to: 'goo' },
      ],
      steps: [
        { show: ['cri'], note: 'El origen es siempre el mismo',
          say: 'El absceso y la fístula parten del mismo lugar: se tapa e infecta una glándula que desemboca en las criptas de Morgagni.' },
        { show: ['abs'], note: 'No es el dolor de la fisura',
          say: 'En fase aguda, eso es el absceso perianal: dolor pulsátil, continuo, que no se relaciona solo con defecar, y que va empeorando hora a hora. No confundas ese dolor continuo con el dolor de la fisura, que es solo al defecar. En esta foto, mira el aumento de volumen eritematoso junto al ano: así se ve un absceso.',
          photo: { src: '_verificadas/237_cirugia_Patología_anorrectal__ecmpdf_p363_1.jpg', label: 'Absceso perianal', at: 'En esta foto', credit: 'Atlas of Clinical Emergency Medicine (Sherman), p. 363' } },
        { show: ['dre'], note: 'La regla de oro de esta clase',
          say: 'Y aquí está la regla que más se pregunta de todo el tema: todo absceso perianal se drena quirúrgicamente de inmediato. No esperas a que fluctúe, y no lo tratas solo con antibióticos, porque puede extenderse y terminar en una gangrena de Fournier.' },
        { show: ['fis'], note: 'La secuela más frecuente del drenaje',
          say: 'En treinta a cincuenta por ciento de los casos, después del drenaje queda una fístula: un trayecto que sigue comunicando la cripta con la piel.' },
        { show: ['goo'], note: 'Anterior recto, posterior curvo',
          say: 'Para saber por dónde va ese trayecto sin operar a ciegas, usas la regla de Goodsall: si el orificio externo está adelante, el trayecto es recto hacia la cripta más cercana; si está atrás, el trayecto es curvo hacia la línea media posterior.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Cáncer anal',
      title: 'La lesión anal que no cura',
      cards: [
        { title: 'Quién y cómo', tag: 'Casi siempre escamoso', kind: 'key', items: [
          { t: 'Carcinoma escamoso', d: 'VPH 16 y 18, VIH, tabaco, sexo anal',
            say: 'Un cáncer que se confunde con patología benigna: el cáncer anal. Casi siempre es un carcinoma escamoso, asociado al virus papiloma humano, tipos dieciséis y dieciocho, al VIH, a la inmunosupresión, al sexo anal receptivo y al tabaco.' },
          { t: 'Sangrado, dolor, masa, prurito', d: 'Parece hemorroide o fisura',
            say: 'Da sangrado, dolor, picazón o una masa, y por eso se confunde con una hemorroide o una fisura. Sospéchalo ante una lesión anal que no cura, una fisura lateral o indurada, o cualquier rectorragia.' },
        ] },
        { title: 'Qué haces', tag: 'Sospechar y derivar', kind: 'criteria', items: [
          { t: 'Tacto rectal y biopsia', d: 'Toda lesión anal sospechosa',
            say: 'El examen proctológico con tacto rectal y la biopsia no se saltan, porque la sospecha se confirma con tejido.' },
          { t: 'Quimiorradioterapia', d: 'Esquema de Nigro; no es cirugía primero',
            say: 'Y aquí está la trampa: el tratamiento primario del carcinoma escamoso del canal anal no es la cirugía. Es la quimiorradioterapia, el esquema de Nigro, con mitomicina y fluorouracilo más radioterapia. La amputación abdominoperineal queda como rescate. Tú sospechas y derivas para estadificar.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Prolapso rectal',
      title: 'Cuando el recto sale por el ano',
      cards: [
        { title: 'Cómo se presenta', tag: 'Mujer mayor, multípara', kind: 'key', items: [
          { t: 'Masa que sale al defecar', d: 'Mucosidad, sangrado, incontinencia',
            say: 'El prolapso rectal es la salida del recto por el ano con todas sus capas. Es típico de la mujer mayor, multípara, con piso pélvico débil y constipación crónica: una masa que sale al defecar, con mucosidad, sangrado e incontinencia fecal.' },
          { t: 'Pliegues concéntricos', d: 'En la hemorroide son radiados',
            say: 'La clave para distinguirlo de una hemorroide prolapsada es hacer pujar al paciente: en el prolapso rectal ves pliegues mucosos concéntricos, y en la hemorroide los pliegues son radiados. Mira esta masa que sale por el ano: los pliegues son circulares, concéntricos, así es un prolapso rectal completo.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-07/02_prolapso-rectal-completo__knoop_p259.jpg', label: 'Pliegues concéntricos', at: 'Mira esta masa', credit: 'The Atlas of Emergency Medicine (Knoop), p. 259' } },
        ] },
        { title: 'Conducta', tag: 'Cirugía definitiva', kind: 'pharma', items: [
          { t: 'Reducir, fibra, derivar', d: 'Rectopexia o rectosigmoidectomía',
            say: 'Se reduce a mano, se da fibra, se trata la constipación y se deriva. La cirugía definitiva es la rectopexia abdominal en el paciente de bajo riesgo, o la rectosigmoidectomía perineal en el anciano frágil. Si está irreductible o isquémico, es una urgencia. En el niño pequeño suele ser autolimitado: se corrige la constipación.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Anoscopía',
      title: 'El examen que ve lo que el dedo no palpa',
      cards: [
        { title: 'Cuándo y cómo', tag: 'Después del tacto rectal', kind: 'key', items: [
          { t: 'Rectorragia, prurito o dolor', d: 'Siempre tras el tacto rectal',
            say: 'La anoscopía se indica ante rectorragia, prurito, dolor o sospecha de hemorroides, y siempre después del tacto rectal. Se hace con el paciente en decúbito lateral izquierdo, o genupectoral, con el anoscopio lubricado, y se observa mientras lo retiras lentamente.' },
          { t: 'Ve hemorroides internas', d: 'Fisuras, fístulas, pólipos, tumores',
            say: 'Te muestra las hemorroides internas, que están en las posiciones de las tres, siete y once horarias, además de fisuras, el orificio interno de una fístula, pólipos y tumores.' },
        ] },
        { title: 'Límites', tag: 'No reemplaza la colonoscopía', kind: 'alert', items: [
          { t: 'Dolor intenso: se difiere', d: 'Fisura aguda o absceso',
            say: 'Si el dolor es intenso, por una fisura aguda o un absceso, no la haces ahora, la difieres.' },
          { t: 'Alarma o más de 45 años', d: 'Rectosigmoidoscopía o colonoscopía',
            say: 'Y no reemplaza a la colonoscopía: con signos de alarma, o en un paciente mayor de cuarenta y cinco a cincuenta años, necesitas ver más arriba.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora ordenemos los cuatro cuadros en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'El síntoma guía y la conducta',
      head: ['Cuadro', 'Síntoma guía', 'Conducta correcta'],
      rows: [
        { cells: ['Fisura anal', 'Dolor lacerante al defecar', 'Fibra, baños de asiento, diltiazem'],
          say: 'Repasemos en la tabla. Fisura anal, dolor lacerante al defecar: fibra, baños de asiento y diltiazem tópico.' },
        { cells: ['Hemorroide interna', 'Sangrado indoloro', 'Grado I-II médico, III-IV cirugía'],
          say: 'Hemorroide interna, sangrado indoloro: grado uno y dos manejo médico, grado tres y cuatro hemorroidectomía.' },
        { cells: ['Trombosis hemorroidal', 'Dolor brusco, nódulo violáceo', 'Trombectomía si es antes de 72 h'],
          say: 'Trombosis hemorroidal, dolor brusco con nódulo violáceo: trombectomía si consulta antes de setenta y dos horas.' },
        { cells: ['Absceso perianal', 'Dolor pulsátil continuo', 'Drenaje quirúrgico inmediato'],
          say: 'Absceso perianal, dolor pulsátil continuo: drenaje quirúrgico inmediato, nunca solo antibióticos.' },
        { cells: ['Fístula anorrectal', 'Supuración crónica intermitente', 'Fistulotomía o sedal según Goodsall'],
          say: 'Y fístula anorrectal, con supuración crónica: fistulotomía o sedal, según lo que prediga la regla de Goodsall.' },
        { cells: ['Lesión anal que no cura', 'Biopsia; quimiorradioterapia', 'Operar primero o llamarla hemorroide'],
          say: 'Lesión anal que no cura, o fisura lateral e indurada: biopsia, y si es un carcinoma escamoso, quimiorradioterapia. El error es rotularla de hemorroide, o ir directo a cirugía.' },
        { cells: ['Prolapso rectal', 'Pliegues concéntricos; cirugía', 'Confundirlo con hemorroide prolapsada'],
          say: 'Y prolapso rectal: pliegues concéntricos al pujar, y cirugía definitiva. Si los pliegues son radiados, es hemorroide.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 38 años consulta por 2 días de dolor perianal continuo, pulsátil, que le impide sentarse, con sensación febril. Al examen, en el cuadrante posterolateral izquierdo se aprecia una masa de 3 cm, eritematosa, indurada, caliente y muy dolorosa a la palpación, sin fluctuación evidente. Temperatura 37,9 grados.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar ciprofloxacino más metronidazol oral y control en 5 días' },
        { letter: 'B', text: 'Realizar drenaje quirúrgico bajo anestesia, sin esperar más' },
        { letter: 'C', text: 'Indicar antiinflamatorios y baños de asiento' },
        { letter: 'D', text: 'Solicitar ecografía transrectal antes de decidir' },
        { letter: 'E', text: 'Puncionar con aguja fina en el policlínico' },
      ],
      correct: 'B',
      explanation: 'Dolor perianal pulsátil, continuo y progresivo con masa indurada y eritematosa es un absceso perianal, incluso sin fluctuación clara todavía. La conducta es el drenaje quirúrgico inmediato; esperar antibióticos o una imagen retrasa el control del foco y favorece la extensión de la infección.',
      say: {
        stem: 'Vamos con un caso. Mujer de treinta y ocho años, con dos días de dolor perianal continuo y pulsátil, que le impide sentarse, con algo de fiebre. Al examen, en el cuadrante posterolateral izquierdo hay una masa de tres centímetros, eritematosa, indurada, caliente y muy dolorosa, sin fluctuación clara todavía.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: antibióticos orales y control en cinco días, drenaje quirúrgico sin esperar más, antiinflamatorios y baños de asiento, ecografía transrectal antes de decidir, o punción con aguja fina. Piénsalo.',
        answer: 'Es la B. El dolor pulsátil y continuo, que no se relaciona solo con la defecación, junto con la masa indurada y eritematosa, es un absceso perianal, aunque todavía no fluctúe. Esperar a que fluctúe o tratarlo solo con antibióticos es justo el error que el examen quiere que cometas: eso deja el foco sin controlar y puede extenderse hacia planos más profundos.',
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
      explanation: 'Hemorroides externas trombosadas dentro de las primeras 72 horas: la trombectomía bajo anestesia local alivia el dolor de inmediato. Pasado ese plazo, el trombo se reabsorbe solo y el manejo pasa a ser conservador.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticinco. Paciente de cincuenta y dos años, con hemorroides externas trombosadas desde hace seis horas, violáceas, protruidas, irreducibles y muy dolorosas.',
        question: '¿Cuál es el manejo más adecuado?',
        options: 'Las opciones son: hemorroidectomía de urgencia, trombectomía bajo anestesia local, ligadura con banda elástica, manejo conservador con analgesia y baños de asiento, o escleroterapia. Piénsalo.',
        answer: 'Es la B. Seis horas de evolución están bien dentro de la ventana de setenta y dos horas, así que todavía te conviene drenar el coágulo: la trombectomía bajo anestesia local alivia el dolor de inmediato. La hemorroidectomía es una cirugía mayor que no se justifica aquí, y el manejo conservador es para cuando ya pasaron las setenta y dos horas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 54',
      stem: 'Paciente de 54 años consulta por dolor anal que se presenta al defecar, persistiendo por algunos minutos luego de la defecación. En algunas ocasiones ha presentado sangre en las deposiciones.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hemorroide externo trombosado' },
        { letter: 'B', text: 'Cáncer de recto' },
        { letter: 'C', text: 'Fisura anal' },
        { letter: 'D', text: 'Fístula anal' },
        { letter: 'E', text: 'Absceso perianal' },
      ],
      correct: 'C',
      explanation: 'Dolor que aparece al defecar y persiste después, con algo de sangrado: cuadro clásico de fisura anal. Ni la trombosis ni el absceso duelen así de específicamente ligados a la defecación, y no hay signos de cáncer.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil diecisiete. Paciente de cincuenta y cuatro años, con dolor anal que aparece al defecar y sigue doliendo algunos minutos después, con sangre en las deposiciones en algunas ocasiones.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: hemorroide externo trombosado, cáncer de recto, fisura anal, fístula anal, o absceso perianal. Piénsalo.',
        answer: 'Es la C, fisura anal. La clave es la relación exacta con la defecación: duele al defecar y sigue doliendo un rato después, que es justo el patrón de la fisura. El absceso duele continuo, sin ese vínculo tan marcado con ir al baño, y aquí no hay ningún dato que apunte a cáncer.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2016 · Pregunta 89",
      "stem": "Paciente de 45 años, con diagnóstico de VIH, presenta sangrado rectal ocasional. Al examen físico se observa una lesión solevantada en el margen anal, de 4 cm, que se introduce en el recto sobrepasando la línea pectínea, con ulceración central y escaso sangrado.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Hemorroide externo trombosado"
        },
        {
          "letter": "B",
          "text": "Condiloma acuminado"
        },
        {
          "letter": "C",
          "text": "Sífilis"
        },
        {
          "letter": "D",
          "text": "Cáncer epidermoide"
        },
        {
          "letter": "E",
          "text": "Enfermedad de Crohn"
        }
      ],
      "correct": "D",
      "explanation": "Una lesión indurada, solevantada y ulcerada que cruza la línea pectínea en un paciente con VIH (mayor persistencia del VPH) sugiere carcinoma epidermoide del ano, que debe confirmarse con biopsia. El condiloma es verrucoso y no ulcerado; el chancro sifilítico es más pequeño y de evolución breve.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil dieciséis. Paciente de cuarenta y cinco años, con VIH, con sangrado rectal ocasional. En el margen anal hay una lesión solevantada de cuatro centímetros, con úlcera central, que entra al recto y sobrepasa la línea pectínea.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: hemorroide externo trombosado, condiloma acuminado, sífilis, cáncer epidermoide, o enfermedad de Crohn. Piénsalo.",
        "answer": "Es la D. Una lesión grande, solevantada y ulcerada que cruza la línea pectínea en un paciente con VIH es un carcinoma epidermoide hasta que la biopsia diga lo contrario, porque el virus papiloma persiste más en estos pacientes. El condiloma tienta por la misma asociación, pero es verrucoso y no se ulcera así."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.2.009 · Prolapso rectal",
      "stem": "Mujer de 78 años, multípara, consulta por una masa que protruye por el ano al pujar, de varios meses de evolución, con secreción mucosa e incontinencia fecal leve. Al pedirle que puje, se observa una protrusión de 6 cm, de mucosa rojiza con pliegues circulares concéntricos.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Hemorroides internas grado IV"
        },
        {
          "letter": "B",
          "text": "Cáncer de recto"
        },
        {
          "letter": "C",
          "text": "Pólipo rectal pediculado prolapsado"
        },
        {
          "letter": "D",
          "text": "Prolapso mucoso parcial"
        },
        {
          "letter": "E",
          "text": "Prolapso rectal completo"
        }
      ],
      "correct": "E",
      "explanation": "Una protrusión de todo el espesor de la pared rectal muestra pliegues circulares concéntricos, mientras que el prolapso hemorroidal o mucoso presenta pliegues radiales. Es típico de mujeres mayores multíparas, con piso pélvico débil, y se asocia a incontinencia. El tratamiento es quirúrgico (rectopexia abdominal o técnicas perineales en pacientes de alto riesgo).",
      "say": {
        "stem": "Mujer de setenta y ocho años, multípara, con meses de una masa que sale por el ano al pujar, secreción mucosa e incontinencia leve. Al pujar se ve una protrusión de seis centímetros de mucosa rojiza con pliegues circulares concéntricos.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: hemorroides internas grado cuatro, cáncer de recto, pólipo prolapsado, prolapso mucoso parcial o prolapso rectal completo. Piénsalo.",
        "answer": "Es la E. Los pliegues circulares concéntricos indican que sale toda la pared del recto, es decir, un prolapso rectal completo. Las hemorroides grado cuatro tientan porque también protruyen, pero sus pliegues son radiales, como los rayos de una rueda."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.003 · Anoscopía",
      "stem": "Hombre de 32 años consulta por rectorragia de sangre roja fresca, que gotea al final de la defecación, indolora, de 2 semanas de evolución. Sin baja de peso ni antecedentes familiares de cáncer de colon. El tacto rectal es normal.",
      "question": "¿Cuál es el examen inicial más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Anoscopía"
        },
        {
          "letter": "B",
          "text": "Colonoscopía total urgente"
        },
        {
          "letter": "C",
          "text": "TAC de abdomen y pelvis"
        },
        {
          "letter": "D",
          "text": "Enema baritado"
        },
        {
          "letter": "E",
          "text": "Cintigrafía con glóbulos rojos marcados"
        }
      ],
      "correct": "A",
      "explanation": "En un adulto joven con rectorragia indolora de sangre roja que gotea al final de la deposición, la causa más probable son las hemorroides internas, que no se palpan en el tacto rectal. La anoscopía es el examen inicial que permite visualizarlas. Si no se encuentra la causa o hay signos de alarma, se complementa con colonoscopía.",
      "say": {
        "stem": "Hombre de treinta y dos años con dos semanas de sangre roja fresca que gotea al final de la defecación, sin dolor, sin baja de peso ni antecedentes familiares de cáncer de colon. El tacto rectal es normal.",
        "question": "¿Cuál es el examen inicial más adecuado?",
        "options": "Las opciones: anoscopía, colonoscopía urgente, TAC de abdomen, enema baritado o cintigrafía con glóbulos rojos marcados. Piénsalo.",
        "answer": "Es la A. Sangre roja que gotea al final de la deposición, sin dolor, en un joven, suele ser por hemorroides internas, y como no se palpan, se ven con anoscopía. La colonoscopía tienta porque es el examen completo, pero sin signos de alarma no es el primer paso."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'El síntoma guía', tag: 'Dolor o sangrado', kind: 'key', items: [
          { t: 'Dolor al defecar', d: 'Fisura anal',
            say: 'Cerremos con las reglas de oro. Dolor que empieza al defecar y sigue doliendo después: fisura anal.' },
          { t: 'Sangrado indoloro', d: 'Hemorroide interna',
            say: 'Sangrado rojo sin dolor: hemorroide interna.' },
        ] },
        { title: 'Lo que no espera', tag: 'Drenar o biopsiar', kind: 'alert', items: [
          { t: 'Pulsátil y continuo', d: 'Absceso: drenaje ya',
            say: 'Y dolor pulsátil y continuo, que no cede: absceso perianal, y ahí no esperas, drenas ya.' },
          { t: 'Lesión anal que no cura', d: 'Biopsia: puede ser cáncer anal',
            say: 'Y una lesión anal que no cura, o una fisura lateral e indurada, se biopsia: puede ser un cáncer, y ese se trata con quimiorradioterapia.' },
        ] },
        { title: 'Tratamiento', tag: 'Primera línea médica', kind: 'pharma', items: [
          { t: 'Fisura: diltiazem tópico', d: 'Trombosis antes de 72 h: trombectomía',
            say: 'Y en tratamiento, la fisura parte con diltiazem tópico, y la trombosis se drena si consulta antes de setenta y dos horas. Si te llevas una sola idea de hoy: fíjate en cómo es el dolor y cuándo aparece, y con eso resuelves casi todo este tema. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Patología orificial benigna: el síntoma guía',
    root: N('start', 'Paciente con síntoma anal', 'Dolor, sangrado o supuración',
      'Un paciente llega con una molestia anal. Antes de examinar, pregúntale cómo es el dolor y cuándo aparece: esa sola respuesta ya te ordena el diagnóstico.',
      ['', N('q', '¿Cuál es el síntoma principal?', 'Dolor, sangrado o masa',
        'Separa el cuadro según lo que más molesta al paciente.',
        ['Dolor lacerante al defecar', N('ok', 'Fisura anal', 'Fibra, baños de asiento, diltiazem tópico',
          'Dolor que corta al defecar y sigue doliendo después, con poca sangre: fisura anal. Tratamiento médico en más del ochenta por ciento de los casos.')],
        ['Sangrado indoloro', N('do', 'Hemorroide interna', 'Grado según el prolapso',
          'Sangre roja al final de la deposición, sin dolor: hemorroide interna. El grado, según cuánto prolapsa, decide entre manejo médico o hemorroidectomía.')],
        ['Dolor brusco, nódulo violáceo', N('q', '¿Consulta antes de 72 horas?', 'Trombosis hemorroidal externa',
          'Dolor súbito con un nódulo azulado bajo la piel: trombosis hemorroidal externa.',
          ['Sí', N('do', 'Trombectomía bajo anestesia local', 'Alivia el dolor de inmediato',
            'Antes de setenta y dos horas, drenar el coágulo quita el dolor en el momento.')],
          ['No', N('ok', 'Manejo conservador', 'Calor local y analgesia',
            'Pasadas las setenta y dos horas, el trombo se reabsorbe solo: basta con calor local y analgesia.')])],
        ['Dolor pulsátil continuo', N('alert', 'Absceso perianal', 'Drenaje quirúrgico inmediato',
          'Dolor continuo que no cede, con masa indurada y eritematosa: absceso perianal. Se drena de inmediato, sin esperar fluctuación ni tratar solo con antibióticos.')],
        ['Lesión que no cura, indurada o masa', N('refer', 'Sospecha de cáncer anal o prolapso', 'Anoscopía, biopsia y derivar',
          'Una lesión anal que no cura o una fisura lateral indurada se biopsia: el cáncer anal escamoso se trata con quimiorradioterapia. Si sale una masa con pliegues concéntricos al pujar, es prolapso rectal y se deriva a cirugía.')])]),
  },
};
