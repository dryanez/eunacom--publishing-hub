// Clase 2.6 (Cardiología) — Complicaciones del infarto: ventrículo derecho, roturas mecánicas, aneurisma y angina de Prinzmetal. Guion
// docente escrito a mano. Fuente clínica: books/scripts/dataset_cardiologia_bloque_2.cjs (cardio-15, tier 2). Códigos: 1.01.2.004 Infarto
// agudo al miocardio (Dx específico · Tx inicial · Seguimiento completo) y 1.01.4.006 Ecocardiografía (emplea informe), según
// books/data/v3_codemap.json. La angina de Prinzmetal no tiene código propio en el Perfil.
// Preguntas reales (class_questions.cjs cardio-15 y búsqueda en el banco): Julio 2018 P42 (arritmias, complicación temprana), Diciembre 2019
// P125 y Julio 2015 P38 (rotura del papilar), Agosto 2021 P145 (sildenafil: nitroglicerina contraindicada en el infarto inferior) y Julio
// 2013 P172 (angina vasoespástica con propranolol). Enunciados y alternativas copiados del banco (solo se unieron palabras cortadas con guion).
// Preguntas del libro (sin equivalente en el banco real; etiqueta «Banco EUNACOM · Caso representativo»): infarto del VD con V4R, rotura del
// tabique y fármaco de la angina vasoespástica.
// No usadas: Julio 2015 P60 y Julio 2024 P87 (dependen de un ECG que el banco no trae), Diciembre 2024 P157 (alternativas rotas), Julio 2025 P96
// (clave dudosa, va con cardio-14), Diciembre 2017 P11, Julio 2016 P55, Julio 2017 P46 y P60, Julio 2025 P52 y Agosto 2021 P44 (cardio-14).
// Fotos en contexto: ECG con derivaciones derechas (Stroobandt p. 172), piezas de Pathoma p. 75 (Fig. 8.5B pared libre, 8.5C papilar, 8.7
// aneurisma) y ecocardiograma con trombo apical (Harrison Fig. 241-35), en classes/media/biblioteca/20_cardiologia/cardio-15/.
// En movimiento: scenes/cardio_b2.html ?v=mecanicas (gráfico de código) y ?v=prinzmetal (Blausen «Coronary Circulation (Anterior)», CC BY 3.0).

module.exports = {
  id: 'cardio-15',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Arritmias, ventrículo derecho, roturas mecánicas, aneurisma y la angina que simula un infarto',
      say: 'Bienvenido. En la clase anterior aprendiste a reperfundir el infarto con supradesnivel. Hoy vemos lo que puede salir mal después: las complicaciones. Unas aparecen en las primeras horas, otras entre el tercer y el séptimo día, y casi todas se reconocen en el examen físico. Al final vemos la angina de Prinzmetal, que simula un infarto pero se trata al revés. Y un anticipo: después de esta clase empezamos el bloque de insuficiencia cardíaca.'
    },
    {
      type: 'points',
      kicker: 'Primeras horas',
      title: 'Arritmias, shock y reinfarto',
      cards: [
        {
          title: 'Arritmias',
          tag: 'La más frecuente',
          kind: 'alert',
          items: [
            {
              t: 'FV y TV: principal muerte prehospitalaria',
              d: 'Desfibrilar; K > 4, Mg > 2',
              say: 'La complicación temprana más frecuente son las arritmias, y la fibrilación ventricular de las primeras horas es la principal causa de muerte antes de llegar al hospital. Por eso el desfibrilador va al lado del paciente. Se corrigen el potasio sobre cuatro y el magnesio sobre dos, y no se usan antiarrítmicos profilácticos.'
            },
            {
              t: 'Inferior: bradicardia y BAV transitorios',
              d: 'Atropina; anterior: marcapaso',
              say: 'El infarto inferior da bradicardia y bloqueo auriculoventricular, porque la coronaria derecha irriga el nodo. Suelen ser transitorios y responden a atropina. En el infarto anterior, el bloqueo refleja una necrosis extensa y requiere marcapaso.'
            },
            {
              t: 'RIVA: benigno, no se trata',
              d: 'Arritmia de reperfusión',
              say: 'El ritmo idioventricular acelerado, que aparece al reperfundir, es benigno y no se trata.'
            }
          ]
        },
        {
          title: 'Shock y reinfarto',
          tag: 'Ecocardiograma urgente',
          kind: 'key',
          items: [
            {
              t: 'Shock cardiogénico: Killip IV',
              d: 'Angioplastía urgente',
              say: 'El shock cardiogénico es la principal causa de muerte en el hospital, y se trata con angioplastía urgente. Si un paciente se deteriora, piensa en tres mecanismos: pérdida extensa de músculo, infarto del ventrículo derecho o una complicación mecánica.'
            },
            {
              t: 'Dolor que reaparece: reoclusión',
              d: 'Coronariografía urgente',
              say: 'Y si el dolor reaparece o el ST vuelve a subir, es una reoclusión o un reinfarto, y va a coronariografía urgente.'
            }
          ]
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Infarto inferior',
      title: 'El ventrículo derecho',
      cards: [
        {
          title: 'Diagnóstico',
          tag: 'V3R y V4R siempre',
          kind: 'key',
          items: [
            {
              t: 'ST ≥ 1 mm en V4R',
              d: 'Oclusión proximal de la coronaria derecha',
              say: 'Todo infarto inferior exige derivaciones derechas. Mira este electrocardiograma: arriba, la pared inferior con supradesnivel en DII, DIII y aVF, y más en DIII; abajo, las precordiales derechas, con supradesnivel de más de un milímetro en V tres R y V cuatro R. Eso confirma el infarto del ventrículo derecho, por oclusión proximal de la coronaria derecha.',
              photo: {
                src: 'biblioteca/20_cardiologia/cardio-15/01_ecg-infarto-ventriculo-derecho-v3r-v4r__stroobandt-ecg_p172.jpg',
                label: 'ST elevado en V3R-V4R',
                at: 'Mira este electrocardiograma',
                credit: 'Stroobandt, Barold y Sinnaeve. ECG from Basics to Essentials (Wiley, 2016), p. 172'
              }
            },
            {
              t: 'Hipotensión, yugulares, pulmón limpio',
              d: 'Kussmaul positivo; eco: VD dilatado',
              say: 'La tríada es hipotensión, yugulares marcadamente ingurgitadas, con signo de Kussmaul positivo, y campos pulmonares limpios. El ecocardiograma muestra un ventrículo derecho dilatado con el izquierdo conservado.'
            }
          ]
        },
        {
          title: 'Tratamiento',
          tag: 'Precarga',
          kind: 'alert',
          items: [
            {
              t: 'Volumen con suero fisiológico',
              d: 'Bolos de 250-500 mL; dobutamina si no responde',
              say: 'El ventrículo derecho infartado se vuelve rígido y depende de su llenado. Se trata con volumen, con suero fisiológico en bolos, y con reperfusión urgente. Si persiste el shock, se agrega dobutamina.'
            },
            {
              t: 'Prohibidos: nitratos, diuréticos, morfina',
              d: 'Bajan la precarga: colapso',
              say: 'Están estrictamente prohibidos los nitratos, los diuréticos y la morfina, porque bajan la precarga y provocan un colapso. Por eso, un infarto inferior en quien tomó sildenafil o con hipotensión no recibe nitroglicerina.'
            }
          ]
        }
      ]
    },
    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Cuándo se rompe y qué se oye',
      images: [
        {
          src: 'animaciones/cardio-15/A1_roturas_mecanicas.mp4',
          label: 'Línea de tiempo y soplos de las roturas mecánicas',
          credit: 'Gráfico propio con los criterios del libro'
        }
      ],
      steps: [
        {
          note: 'Papilar, tabique y pared libre',
          say: 'Esta línea de tiempo resume el infarto. En las primeras horas, las arritmias. Entre el primer y el tercer día, la pericarditis. Entre el tercero y el séptimo, las roturas mecánicas. Y en las semanas siguientes, el aneurisma y el síndrome de Dressler.'
        },
        {
          note: 'Tres roturas, tres hallazgos',
          say: 'Mira el fonocardiograma. En la rotura del papilar hay un soplo holosistólico en el ápex, que se irradia a la axila. En la rotura del tabique, el soplo es rudo, en barra, con frémito. Y en la rotura de la pared libre no hay soplo: hay un colapso súbito. La regla: un soplo nuevo después de un infarto es una rotura hasta demostrar lo contrario.'
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Complicaciones mecánicas',
      title: 'Días tres a siete',
      cards: [
        {
          title: 'Rotura del papilar',
          tag: 'Inferior',
          kind: 'alert',
          items: [
            {
              t: 'Edema pulmonar + shock + soplo apical',
              d: 'Holosistólico a la axila',
              say: 'La rotura del músculo papilar es más frecuente en el infarto inferior, por necrosis del papilar posteromedial, que tiene una sola irrigación. Da edema agudo de pulmón fulminante, shock y un soplo holosistólico apical nuevo, que se irradia a la axila. Mira esta pieza: el músculo papilar roto.',
              photo: {
                src: 'biblioteca/20_cardiologia/cardio-15/03_rotura-musculo-papilar-pieza__pathoma_p75.jpg',
                label: 'Rotura del papilar',
                at: 'Mira esta pieza',
                credit: 'Pathoma (Sattar), Cardiac Pathology, p. 75, Fig. 8.5C'
              }
            },
            {
              t: 'Eco urgente; BCPIAo; cirugía mitral',
              d: 'Vasodilatadores si la PA lo permite',
              say: 'Se confirma con ecocardiograma transtorácico urgente, se estabiliza con balón de contrapulsación intraaórtico y vasodilatadores si la presión lo permite, y se opera de inmediato: reparación o reemplazo mitral.'
            }
          ]
        },
        {
          title: 'Rotura del tabique',
          tag: 'CIV',
          kind: 'key',
          items: [
            {
              t: 'Soplo pansistólico rudo + frémito',
              d: 'Borde esternal izquierdo bajo',
              say: 'La rotura del tabique interventricular es más frecuente en el infarto anterior o en el inferior extenso. Da un deterioro brusco con shock y un soplo pansistólico rudo, en barra, en el borde esternal izquierdo bajo, con frémito palpable.'
            },
            {
              t: 'Doppler color; BCPIAo; cirugía de cierre',
              d: 'Salto oximétrico en el VD',
              say: 'El Doppler color muestra el defecto y el cortocircuito de izquierda a derecha, con un salto oximétrico en el ventrículo derecho. Se estabiliza y se opera de emergencia.'
            }
          ]
        },
        {
          title: 'Pared libre',
          tag: 'La más letal',
          kind: 'alert',
          items: [
            {
              t: 'Colapso, AESP y taponamiento',
              d: 'Mortalidad > 90%',
              say: 'La rotura de la pared libre del ventrículo izquierdo es la más letal, con más de noventa por ciento de mortalidad. Es más común en mujeres ancianas con su primer infarto anterior transmural. Mira esta pieza: la pared del ventrículo izquierdo con la rotura. Produce un hemopericardio a tensión y una disociación electromecánica.',
              photo: {
                src: 'biblioteca/20_cardiologia/cardio-15/02_rotura-pared-libre-pieza__pathoma_p75.jpg',
                label: 'Rotura de pared libre',
                at: 'Mira esta pieza',
                credit: 'Pathoma (Sattar), Cardiac Pathology, p. 75, Fig. 8.5B'
              }
            },
            {
              t: 'Pericardiocentesis y toracotomía',
              d: 'Algunas son subagudas',
              say: 'Se intenta pericardiocentesis y toracotomía de rescate. Algunas roturas son subagudas y se presentan con dolor, hipotensión y síncope.'
            }
          ]
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Tardías',
      title: 'Pericarditis, aneurisma y trombo',
      cards: [
        {
          title: 'Pericarditis post-IAM',
          tag: 'Dressler',
          kind: 'normal',
          items: [
            {
              t: 'Precoz 1-3 días; Dressler 2-8 semanas',
              d: 'Aspirina en dosis altas o colchicina',
              say: 'La pericarditis puede ser precoz, entre el primer y el tercer día, o tardía, el síndrome de Dressler, entre dos y ocho semanas después, con fiebre y derrame. Se trata con aspirina en dosis altas o colchicina, y se evitan los AINE y los corticoides al inicio, porque dificultan la cicatrización.'
            }
          ]
        },
        {
          title: 'Aneurisma verdadero',
          tag: 'Cuello ancho',
          kind: 'key',
          items: [
            {
              t: 'ST elevado persistente > 4-6 semanas',
              d: 'Bajo riesgo de rotura',
              say: 'El aneurisma ventricular verdadero es una complicación tardía: una zona infartada adelgazada, fibrótica, con cuello ancho y bajo riesgo de rotura. Mira esta pieza. Su signo en el electrocardiograma es el supradesnivel del ST persistente más allá de las cuatro a seis semanas, sin síntomas agudos.',
              photo: {
                src: 'biblioteca/20_cardiologia/cardio-15/04_aneurisma-ventricular-pieza__pathoma_p75.jpg',
                label: 'Aneurisma ventricular',
                at: 'Mira esta pieza',
                credit: 'Pathoma (Sattar), Cardiac Pathology, p. 75, Fig. 8.7'
              }
            },
            {
              t: 'Trombo mural: anticoagulación oral',
              d: 'Arritmias e IC',
              say: 'Se complica con insuficiencia cardíaca, arritmias ventriculares y trombos murales. Aquí, un ecocardiograma con un trombo en la zona aneurismática del ápex. Los trombos embolígenos obligan a anticoagulación oral.',
              photo: {
                src: 'biblioteca/20_cardiologia/cardio-15/05_eco-trombo-aneurisma-apical__harrison_p1897.jpg',
                label: 'Eco: trombo apical',
                at: 'Aquí, un ecocardiograma',
                credit: 'Harrison. Principios de Medicina Interna, 21.ª ed., Fig. 241-35'
              }
            }
          ]
        },
        {
          title: 'Pseudoaneurisma',
          tag: 'Cuello estrecho',
          kind: 'alert',
          items: [
            {
              t: 'Rotura contenida por el pericardio',
              d: 'Cirugía urgente',
              say: 'El pseudoaneurisma es una rotura incompleta de la pared libre, contenida solo por el pericardio y un trombo. Tiene el cuello estrecho y un alto riesgo de rotura libre, y se opera de urgencia.'
            }
          ]
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Angina de Prinzmetal',
      title: 'Espasmo, no placa',
      cards: [
        {
          title: 'Clínica',
          tag: 'Dolor de reposo de madrugada',
          kind: 'key',
          items: [
            {
              t: 'Espasmo focal de una coronaria',
              d: 'Joven, mujer; tabaco, cocaína, triptanes',
              say: 'La angina de Prinzmetal, o vasoespástica, es un espasmo focal de una arteria coronaria, sin una obstrucción fija grave. Es más frecuente en adultos jóvenes y en mujeres, y los gatillos son el tabaco, la cocaína, las anfetaminas y los triptanes.'
            },
            {
              t: 'Dolor de reposo, de madrugada',
              d: 'ST elevado transitorio',
              say: 'Da un dolor típico en reposo, de predominio nocturno o de madrugada. En el electrocardiograma durante la crisis hay supradesnivel transitorio del ST que se normaliza por completo en minutos o con nitroglicerina, sin necrosis.'
            }
          ]
        },
        {
          title: 'Tratamiento',
          tag: 'Pregunta clave',
          kind: 'alert',
          items: [
            {
              t: 'Calcioantagonista + nitrato',
              d: 'Diltiazem, verapamilo o amlodipino',
              say: 'La primera línea son los calcioantagonistas, diltiazem, verapamilo o amlodipino en dosis altas, con nitratos para las crisis, y suspender el tabaco y las drogas.'
            },
            {
              t: 'Betabloqueador no selectivo: prohibido',
              d: 'Propranolol: espasmo masivo',
              say: 'Y lo que más se pregunta: los betabloqueadores no selectivos, como el propranolol, están contraindicados. Al bloquear los receptores beta dos vasodilatadores, dejan sin oposición a los receptores alfa uno vasoconstrictores, y pueden desencadenar un espasmo masivo.'
            }
          ]
        }
      ]
    },
    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'El espasmo que simula un infarto',
      images: [
        {
          src: 'animaciones/cardio-15/A2_prinzmetal_espasmo.mp4',
          label: 'Espasmo de la descendente anterior y ST transitorio',
          credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios'
        }
      ],
      steps: [
        {
          note: 'Se cierra y se abre; el ST sube y baja',
          say: 'Veamos el espasmo. A las tres de la madrugada, un segmento de la descendente anterior se contrae, el flujo cae y el ST sube en las derivaciones del territorio. Pero el ST vuelve a la línea basal por completo, de forma espontánea o con nitroglicerina, y no hay necrosis. Eso lo distingue de un infarto con supradesnivel.'
        },
        {
          note: 'Calcioantagonista sí; betabloqueador no selectivo, no',
          say: 'El tratamiento es un calcioantagonista con nitrato, y evitar el tabaco y las drogas. El propranolol, o cualquier betabloqueador no selectivo, está contraindicado.'
        }
      ]
    },
    {
      type: 'flow',
      kicker: 'Resumen',
      title: 'Qué sospechar según el hallazgo',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'start', t: 'Infarto que se deteriora', s: 'Mirar yugulares, pulmón, soplo' },
        { id: 'v', col: 2, row: 0, k: 'alert', t: 'Hipotensión + yugulares + pulmón limpio', s: 'Infarto del VD: volumen' },
        { id: 'p', col: 2, row: 2, k: 'effect', t: 'Edema pulmonar + soplo apical', s: 'Rotura del papilar' },
        { id: 'c', col: 2, row: 3, k: 'effect', t: 'Soplo en barra + frémito', s: 'Rotura del tabique' },
        { id: 'l', col: 2, row: 4, k: 'trap', t: 'Colapso sin soplo', s: 'Pared libre: AESP' },
        { id: 'r', col: 4, row: 2, k: 'refer', t: 'Eco urgente y cirugía', s: 'BCPIAo como puente' }
      ],
      edges: [
        { from: 'a', to: 'v' },
        { from: 'a', to: 'p' },
        { from: 'a', to: 'c' },
        { from: 'a', to: 'l' },
        { from: 'p', to: 'r' },
        { from: 'c', to: 'r' }
      ],
      steps: [
        {
          show: [ 'a', 'v' ],
          note: 'Ventrículo derecho',
          say: 'Ante un infarto que se deteriora, el examen físico decide. Hipotensión con yugulares altas y pulmones limpios: ventrículo derecho, se trata con volumen.'
        },
        {
          show: [ 'p', 'c', 'r' ],
          note: 'Soplo nuevo: rotura',
          say: 'Edema pulmonar con un soplo apical a la axila: papilar. Un soplo rudo en barra con frémito bajo el esternón: tabique. Las dos se confirman con ecocardiograma y se operan, con balón de contrapulsación como puente.'
        },
        {
          show: [ 'l' ],
          note: 'Colapso sin soplo',
          say: 'Y un colapso súbito, sin soplo, con disociación electromecánica: la pared libre, casi siempre fatal.'
        }
      ]
    },
    { type: 'pathway', intro: 'Armemos el árbol: del infarto que se deteriora al diagnóstico.' },
    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Complicaciones del infarto: dato, decisión, error',
      head: [ 'Dato', 'Decisión', 'Error típico' ],
      rows: [
        {
          cells: [ 'Inferior hipotenso, pulmón limpio, V4R+', 'Volumen EV', 'Nitroglicerina, furosemida o morfina' ],
          say: 'Inferior hipotenso con pulmón limpio y V cuatro R positivo: volumen. Nitroglicerina, furosemida o morfina son el error.'
        },
        {
          cells: [ 'Complicación temprana más frecuente', 'Arritmias ventriculares', 'Rotura de pared libre' ],
          say: 'La complicación temprana más frecuente son las arritmias ventriculares. Las roturas son más tardías y menos frecuentes.'
        },
        {
          cells: [ 'Edema pulmonar + soplo holosistólico apical, día 3-7', 'Rotura del papilar: eco y cirugía', 'Diurético y esperar' ],
          say: 'Edema pulmonar con soplo holosistólico apical al día cuatro: rotura del papilar. Eco urgente y cirugía.'
        },
        {
          cells: [ 'Soplo rudo en barra + frémito', 'CIV: Doppler y cirugía de cierre', 'Insuficiencia aórtica' ],
          say: 'Soplo rudo en barra con frémito esternal bajo: comunicación interventricular.'
        },
        {
          cells: [ 'Colapso súbito + disociación electromecánica', 'Pared libre: pericardiocentesis', 'Tratarlo como shock cardiogénico' ],
          say: 'Colapso con disociación electromecánica: rotura de pared libre y taponamiento.'
        },
        {
          cells: [ 'ST elevado > 4-6 semanas', 'Aneurisma: anticoagular si hay trombo', 'Nuevo infarto' ],
          say: 'Supradesnivel persistente más allá de cuatro a seis semanas: aneurisma ventricular. Si hay trombo, anticoagulación oral.'
        },
        {
          cells: [ 'Dolor nocturno + ST transitorio', 'Calcioantagonista + nitrato', 'Propranolol' ],
          say: 'Dolor nocturno con supradesnivel transitorio: Prinzmetal, calcioantagonista. El propranolol está contraindicado.'
        },
        {
          cells: [ 'Infarto inferior + sildenafil', 'No dar nitroglicerina', 'Nitroglicerina para el dolor' ],
          say: 'Infarto inferior en quien tomó sildenafil: no se da nitroglicerina.'
        }
      ]
    },
    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 64 años, en el 4.º día de un infarto de pared inferior no reperfundido, presenta disnea súbita extrema, cianosis y sudoración profusa. PA 75/40 mmHg, FC 120 lpm, ritmo de galope y un soplo holosistólico III/VI en el ápex irradiado a la axila que no existía al ingreso; crepitaciones difusas en ambos campos pulmonares.',
      question: '¿Cuál es el diagnóstico y la conducta más adecuados?',
      options: [
        { letter: 'A', text: 'Infarto del ventrículo derecho: carga de volumen' },
        { letter: 'B', text: 'Rotura del músculo papilar: ecocardiograma urgente, balón de contrapulsación y cirugía mitral' },
        { letter: 'C', text: 'Rotura del tabique interventricular: cierre percutáneo diferido' },
        { letter: 'D', text: 'Reinfarto: fibrinólisis' },
        { letter: 'E', text: 'Pericarditis: AINE' }
      ],
      correct: 'B',
      explanation: 'Shock con edema agudo de pulmón y un soplo holosistólico apical nuevo irradiado a la axila al 4.º día de un infarto inferior: rotura del músculo papilar posteromedial con insuficiencia mitral aguda masiva. Se confirma con ecocardiograma transtorácico urgente, se estabiliza con vasodilatadores si la presión lo permite y balón de contrapulsación, y se opera de inmediato. No es un infarto del VD (el pulmón estaría limpio) ni una CIV (soplo esternal bajo con frémito).',
      say: {
        stem: 'Un hombre de sesenta y cuatro años, en el cuarto día de un infarto inferior no reperfundido, presenta disnea súbita extrema. Tiene presión de setenta y cinco sobre cuarenta, taquicardia, un soplo holosistólico en el ápex que se irradia a la axila y que no existía al ingreso, y crepitaciones en ambos pulmones.',
        question: '¿Cuál es el diagnóstico y la conducta más adecuados?',
        options: 'Las opciones: infarto del ventrículo derecho con volumen; rotura del papilar con eco, balón de contrapulsación y cirugía; rotura del tabique con cierre percutáneo diferido; reinfarto con fibrinólisis; o pericarditis con AINE. Piénsalo.',
        answer: 'Es la B. El edema pulmonar fulminante con un soplo holosistólico apical nuevo, al cuarto día de un infarto inferior, es una rotura del papilar. Se confirma con ecocardiograma y va a cirugía mitral urgente. La A tienta por el infarto inferior con hipotensión, pero el infarto del ventrículo derecho tiene los pulmones limpios.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2018 · Pregunta 42',
      stem: 'Un paciente de 60 años consulta por dolor precordial opresivo irradiado a mandíbula de 40 minutos de evolución, asociado a sudoración. El electrocardiograma muestra supradesnivel del segmento ST en derivaciones DII, DIII y aVF.',
      question: '¿Cuál es la principal complicación temprana de este cuadro?',
      options: [
        { letter: 'A', text: 'Insuficiencia mitral aguda.' },
        { letter: 'B', text: 'Rotura de pared libre.' },
        { letter: 'C', text: 'Arritmias ventriculares.' },
        { letter: 'D', text: 'Taponamiento cardíaco.' },
        { letter: 'E', text: 'Fibrilación auricular.' }
      ],
      correct: 'C',
      explanation: 'El infarto inferior (DII, DIII, aVF) tiene como complicación temprana más frecuente las arritmias ventriculares, que son la principal causa de muerte en las primeras horas. La rotura de la pared libre y la insuficiencia mitral aguda por rotura del papilar son mecánicas, más tardías y menos frecuentes, y el taponamiento es consecuencia de la rotura.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciocho. Un paciente de sesenta años tiene dolor precordial opresivo irradiado a la mandíbula, de cuarenta minutos, con sudoración. El electrocardiograma muestra supradesnivel del ST en DII, DIII y aVF.',
        question: '¿Cuál es la principal complicación temprana de este cuadro?',
        options: 'Las opciones: insuficiencia mitral aguda; rotura de pared libre; arritmias ventriculares; taponamiento cardíaco; o fibrilación auricular. Piénsalo.',
        answer: 'Es la C. Las arritmias ventriculares son la complicación temprana más frecuente y la principal causa de muerte en las primeras horas. La A y la B tientan porque son complicaciones clásicas del infarto, pero son mecánicas, más tardías, entre el tercer y el séptimo día.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 125',
      stem: 'Un paciente está hospitalizado por un infarto agudo al miocardio, con supradesnivel del segmento ST, de dos días de evolución. Presenta deterioro del estado general y disnea de reposo, con tendencia a la hipotensión arterial. En su examen físico tiene FC: 115x’, PA: 80/50 mmHg, examen pulmonar con crepitaciones bilaterales intensos y examen cardíaco con ritmo regular en 2 tonos, con soplo sistólico intenso, de localización precordial.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Taponamiento cardíaco por rotura de la pared libre' },
        { letter: 'B', text: 'Disfunción valvular aórtica isquémica' },
        { letter: 'C', text: 'Rotura del músculo papilar' },
        { letter: 'D', text: 'Shock cardiogénico por infarto masivo' },
        { letter: 'E', text: 'Disección de la raíz aórtica' }
      ],
      correct: 'C',
      explanation: 'Un paciente con un infarto de dos días que se deteriora, con hipotensión, crepitaciones bilaterales intensas (edema pulmonar) y un soplo sistólico intenso precordial nuevo, tiene una insuficiencia mitral aguda por rotura del músculo papilar. En el taponamiento no hay edema pulmonar, y en el shock cardiogénico por infarto masivo no aparece un soplo nuevo tan intenso.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un paciente hospitalizado por un infarto con supradesnivel de dos días presenta deterioro del estado general y disnea de reposo, con tendencia a la hipotensión. Tiene frecuencia de ciento quince, presión de ochenta sobre cincuenta, crepitaciones bilaterales intensas y un soplo sistólico intenso de localización precordial.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: taponamiento por rotura de pared libre; disfunción valvular aórtica isquémica; rotura del músculo papilar; shock cardiogénico por infarto masivo; o disección de la raíz aórtica. Piénsalo.',
        answer: 'Es la C. El deterioro con edema pulmonar y un soplo sistólico intenso nuevo, a los dos días de un infarto, es la insuficiencia mitral por rotura del papilar. La D tienta porque hay shock, pero un infarto masivo no da un soplo nuevo tan intenso. Y el taponamiento no produce edema pulmonar.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 38',
      stem: 'Un paciente de 70 años, hipertenso, presenta dolor torácico de dos días de evolución, intenso, asociado a malestar general. En las últimas horas se agrega disnea y síncopes ortostáticos. Al examen físico aparece un soplo holosistólico en el ápex.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Taponamiento cardiaco por rotura de la pared libre' },
        { letter: 'B', text: 'Disección aórtica' },
        { letter: 'C', text: 'Insuficiencia mitral por rotura del músculo papilar' },
        { letter: 'D', text: 'Endocarditis bacteriana' },
        { letter: 'E', text: 'Cardiopatía hipertensiva, descompensada' }
      ],
      correct: 'C',
      explanation: 'Dolor torácico intenso de 2 días que se acompaña de disnea y síncope, y un soplo holosistólico apical nuevo: es el cuadro de una rotura del músculo papilar con insuficiencia mitral aguda tras un infarto no advertido. No hay signos de taponamiento ni de disección, y la endocarditis no explica el dolor torácico isquémico previo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Un paciente de setenta años, hipertenso, tiene dolor torácico intenso de dos días con malestar general. En las últimas horas se agregan disnea y síncopes ortostáticos. Al examen, un soplo holosistólico en el ápex.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: taponamiento por rotura de pared libre; disección aórtica; insuficiencia mitral por rotura del músculo papilar; endocarditis bacteriana; o cardiopatía hipertensiva descompensada. Piénsalo.',
        answer: 'Es la C. Dos días de dolor intenso, seguidos de disnea, síncope y un soplo holosistólico apical, es el cuadro clásico de la rotura del papilar tras un infarto. La B tienta por el dolor intenso en un hipertenso, pero la disección no da un soplo holosistólico apical.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 145',
      stem: 'Un paciente de 67 años, usuario de sildenafil, que se automedica como tratamiento de impotencia sexual, presenta dolor torácico intenso, que inició una hora después de haber consumido dicho medicamento. Se solicita un electrocardiograma, que muestra suprdesnivel del segmento ST en las derivaciones inferiores.',
      question: '¿Qué fármaco está contraindicado en el manejo de este paciente?',
      options: [
        { letter: 'A', text: 'Clopidogrel' },
        { letter: 'B', text: 'Aspirina' },
        { letter: 'C', text: 'Atenolol' },
        { letter: 'D', text: 'Nitroglicerina' },
        { letter: 'E', text: 'Estreptoquinasa' }
      ],
      correct: 'D',
      explanation: 'Un infarto inferior puede comprometer el ventrículo derecho, que depende de la precarga, y el sildenafil potencia el efecto vasodilatador de los nitratos con una hipotensión grave refractaria: por eso la nitroglicerina está contraindicada con sildenafil (24 horas) o tadalafil (48 horas) y en el infarto del VD. La aspirina, el clopidogrel y la reperfusión con estreptoquinasa sí se usan.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un paciente de sesenta y siete años, usuario de sildenafil que se automedica por impotencia, presenta dolor torácico intenso que comenzó una hora después de tomarlo. El electrocardiograma muestra supradesnivel del ST en las derivaciones inferiores.',
        question: '¿Qué fármaco está contraindicado en el manejo de este paciente?',
        options: 'Las opciones: clopidogrel; aspirina; atenolol; nitroglicerina; o estreptoquinasa. Piénsalo.',
        answer: 'Es la D. El sildenafil potencia a los nitratos y puede provocar una hipotensión grave. Además, un infarto inferior puede comprometer el ventrículo derecho, que depende de la precarga: la nitroglicerina está prohibida. La C tienta porque es un betabloqueador, pero este infarto no tiene la contraindicación de la cocaína.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 172',
      stem: 'Paciente de 43 años de edad, con antecedente de migraña en tratamiento con propanolol, consulta por historia de dolor toráxico opresivo de 20 minutos, irradiado a miembro superior izquierdo, el cual cede esponáneamente, refiere que ha presentado dicho cuadro en dos ocasiones en su hogar luego de regresar del trabajo. Actualmente está asintomático y su exámen físico es normal. Se solicita electrocardiograma que no muestra alteraciones.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Infarto agudo al miocárdio' },
        { letter: 'B', text: 'Pericarditis aguda' },
        { letter: 'C', text: 'Angina vasomotora' },
        { letter: 'D', text: 'Espasmo esofágico' },
        { letter: 'E', text: 'Tromboembolismo pulmonar' }
      ],
      correct: 'C',
      explanation: 'Dolor torácico opresivo de reposo que cede espontáneamente, con ECG normal fuera de las crisis, en un paciente medicado con propranolol por migraña (un betabloqueador no selectivo que favorece el espasmo), es la presentación de una angina vasoespástica (de Prinzmetal o vasomotora). No hay infarto ni pericarditis, que dan alteraciones persistentes del ECG.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Un paciente de cuarenta y tres años, con migraña tratada con propranolol, consulta por dolor torácico opresivo de veinte minutos irradiado al brazo izquierdo, que cede espontáneamente. Lo ha presentado dos veces en su hogar, al regresar del trabajo. Está asintomático, su examen es normal y el electrocardiograma no muestra alteraciones.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: infarto agudo; pericarditis aguda; angina vasomotora; espasmo esofágico; o tromboembolismo pulmonar. Piénsalo.',
        answer: 'Es la C. Un dolor opresivo que cede solo, con electrocardiograma normal entre las crisis, es una angina vasoespástica, y el propranolol, que es no selectivo, favorece el espasmo. La A tienta por el dolor irradiado al brazo, pero el infarto no cede solo en veinte minutos y deja alteraciones en el electrocardiograma.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Paciente con infarto agudo al miocardio de pared inferior evoluciona con PA 80/40 mmHg, ingurgitación yugular y examen pulmonar sin ruidos agregados. El ECG muestra supradesnivel del ST de 2 mm en V4R.',
      question: '¿Cuál es el tratamiento inicial más apropiado para su hipotensión?',
      options: [
        { letter: 'A', text: 'Administración rápida de carga de suero fisiológico endovenoso' },
        { letter: 'B', text: 'Infusión continua de nitroglicerina' },
        { letter: 'C', text: 'Administración de Furosemida 40 mg endovenosa' },
        { letter: 'D', text: 'Administración de Morfina 5 mg endovenosa' },
        { letter: 'E', text: 'Inicio inmediato de Propanolol oral' }
      ],
      correct: 'A',
      explanation: 'Infarto del ventrículo derecho confirmado por V4R positivo: el ventrículo derecho infartado depende de una presión de llenado elevada (precarga) para mantener el gasto cardíaco, por eso el tratamiento de la hipotensión es la expansión con suero fisiológico. Los nitratos, los diuréticos y la morfina reducen la precarga y causan colapso circulatorio; el betabloqueador no corresponde en el shock.',
      say: {
        stem: 'Un caso representativo del banco. Un paciente con un infarto de pared inferior evoluciona con presión de ochenta sobre cuarenta, yugulares ingurgitadas y pulmones limpios. El electrocardiograma muestra supradesnivel de dos milímetros en V cuatro R.',
        question: '¿Cuál es el tratamiento inicial más apropiado para su hipotensión?',
        options: 'Las opciones: carga rápida de suero fisiológico; nitroglicerina en infusión; furosemida; morfina; o propranolol. Piénsalo.',
        answer: 'Es la A. Es un infarto del ventrículo derecho, que depende de la precarga: se trata con volumen. La B y la C son las trampas clásicas: la nitroglicerina y la furosemida bajan la precarga y precipitan un colapso. La morfina también está prohibida.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 62 años en su 5.º día post-infarto agudo al miocardio evoluciona con hipotensión severa y disnea. Al examen destaca un soplo pansistólico rudo con frémito en el borde esternal izquierdo bajo.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Rotura del tabique interventricular (CIV post-IAM)' },
        { letter: 'B', text: 'Rotura de la pared libre del ventrículo izquierdo' },
        { letter: 'C', text: 'Insuficiencia aórtica aguda' },
        { letter: 'D', text: 'Reinfarto miocárdico con pericarditis' },
        { letter: 'E', text: 'Tromboembolismo pulmonar masivo' }
      ],
      correct: 'A',
      explanation: 'Un soplo pansistólico rudo con frémito palpable en el borde esternal izquierdo bajo, varios días después de un infarto, es característico de la rotura del tabique interventricular. En la rotura de la pared libre hay colapso con disociación electromecánica y sin soplo; en la insuficiencia aórtica el soplo es diastólico.',
      say: {
        stem: 'Un caso representativo del banco. Un hombre de sesenta y dos años, en el quinto día de un infarto, se deteriora con hipotensión severa y disnea. Tiene un soplo pansistólico rudo con frémito en el borde esternal izquierdo bajo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: rotura del tabique interventricular; rotura de la pared libre; insuficiencia aórtica aguda; reinfarto con pericarditis; o embolia pulmonar masiva. Piénsalo.',
        answer: 'Es la A. El soplo rudo en barra con frémito en el borde esternal izquierdo bajo, en la primera semana, es la comunicación interventricular. La B tienta por el momento, pero la rotura de pared libre da un colapso con disociación electromecánica, sin soplo.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Mujer de 35 años fumadora consulta por dolor torácico opresivo nocturno en reposo. El ECG durante el dolor muestra supradesnivel del ST de 2 mm en derivaciones anteriores que se normaliza completamente al ceder el dolor con nitroglicerina sublingual. La coronariografía no muestra lesiones obstructivas fijas.',
      question: '¿Cuál es el fármaco profiláctico de primera línea?',
      options: [
        { letter: 'A', text: 'Amlodipino o Diltiazem' },
        { letter: 'B', text: 'Propranolol oral' },
        { letter: 'C', text: 'Atenolol oral' },
        { letter: 'D', text: 'Carvedilol oral' },
        { letter: 'E', text: 'Metoprolol succinato' }
      ],
      correct: 'A',
      explanation: 'El cuadro es una angina vasoespástica (de Prinzmetal). Los fármacos de primera línea para prevenir nuevos episodios son los calcioantagonistas (amlodipino, diltiazem o verapamilo), junto con la suspensión del tabaco. Los betabloqueadores, sobre todo los no selectivos, están contraindicados porque favorecen el espasmo.',
      say: {
        stem: 'Un caso representativo del banco. Una mujer fumadora de treinta y cinco años tiene dolor opresivo nocturno en reposo. Durante el dolor, el electrocardiograma muestra supradesnivel del ST de dos milímetros en las derivaciones anteriores, que se normaliza con nitroglicerina. La coronariografía no muestra lesiones fijas.',
        question: '¿Cuál es el fármaco profiláctico de primera línea?',
        options: 'Las opciones: amlodipino o diltiazem; propranolol; atenolol; carvedilol; o metoprolol. Piénsalo.',
        answer: 'Es la A. Es una angina vasoespástica, y la primera línea son los calcioantagonistas. Todas las demás opciones son betabloqueadores, que están contraindicados porque dejan sin freno a los receptores alfa y favorecen el espasmo. La B es la más peligrosa, por ser no selectiva.'
      }
    },
    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: complicaciones del infarto',
      cards: [
        {
          title: 'Reconocer',
          tag: 'El examen físico decide',
          kind: 'key',
          items: [
            {
              t: 'Inferior: V3R-V4R; VD = volumen',
              d: 'Sin nitratos, diuréticos ni morfina',
              say: 'Cerremos con las reglas de oro. Todo infarto inferior pide derivaciones derechas. Si el ventrículo derecho está comprometido, se trata con volumen, y nada de nitratos, diuréticos ni morfina.'
            },
            {
              t: 'Arritmias: lo más precoz y frecuente',
              d: 'FV: desfibrilar',
              say: 'La complicación más precoz y frecuente son las arritmias ventriculares: el desfibrilador va al lado del paciente.'
            }
          ]
        },
        {
          title: 'Roturas y Prinzmetal',
          tag: 'Días 3-7',
          kind: 'alert',
          items: [
            {
              t: 'Soplo nuevo = rotura',
              d: 'Papilar: apical a la axila; CIV: barra con frémito',
              say: 'Un soplo nuevo después de un infarto es una rotura. En el ápex, a la axila: papilar. En barra, con frémito, bajo el esternón: tabique. Sin soplo y con colapso: pared libre.'
            },
            {
              t: 'Prinzmetal: calcioantagonista; sin betabloqueador no selectivo',
              d: 'ST elevado persistente > 4-6 semanas: aneurisma',
              say: 'La angina de Prinzmetal se trata con calcioantagonistas, y el propranolol está prohibido. Y un supradesnivel que persiste semanas es un aneurisma. Si te llevas una sola idea de hoy: después de un infarto, un soplo nuevo o una hipotensión con yugulares altas es el diagnóstico, y se confirma con ecocardiograma. Nos vemos en la próxima clase.'
            }
          ]
        }
      ]
    }
  ],
  pathway: {
    title: 'Infarto que se deteriora: del hallazgo al diagnóstico',
    root: {
      k: 'start',
      t: 'Infarto que se deteriora',
      s: 'Monitor, ecocardiograma y examen físico',
      say: 'Un paciente con un infarto reciente que se deteriora. Lo monitorizas y miras las yugulares, los pulmones, los ruidos y el soplo, y pides un ecocardiograma urgente.',
      kids: [
        [
          'Hipotensión + yugulares + pulmón limpio',
          {
            k: 'alert',
            t: 'Infarto del VD',
            s: 'V4R; volumen EV',
            say: 'Si es un infarto inferior con hipotensión, yugulares altas y pulmones limpios, es un infarto del ventrículo derecho: se confirma con V cuatro R y se da volumen. No se dan nitratos, diuréticos ni morfina.',
            kids: []
          }
        ],
        [
          'Edema pulmonar + soplo nuevo (días 3-7)',
          {
            k: 'refer',
            t: 'Rotura mecánica',
            s: 'Eco urgente y cirugía',
            say: 'Si hay edema pulmonar o shock con un soplo nuevo entre el tercero y el séptimo día, es una rotura mecánica. Pides ecocardiograma urgente, balón de contrapulsación y cirugía.',
            kids: [
              [
                'Soplo apical a la axila',
                {
                  k: 'do',
                  t: 'Papilar',
                  s: 'Cirugía mitral',
                  say: 'Un soplo holosistólico apical a la axila es la rotura del papilar: reparación o reemplazo mitral.',
                  kids: []
                }
              ],
              [
                'Soplo en barra con frémito',
                {
                  k: 'do',
                  t: 'Tabique (CIV)',
                  s: 'Cierre quirúrgico',
                  say: 'Un soplo rudo en barra, con frémito, en el borde esternal izquierdo bajo, es la comunicación interventricular: cierre de emergencia.',
                  kids: []
                }
              ]
            ]
          }
        ],
        [
          'Colapso sin soplo, AESP',
          {
            k: 'alert',
            t: 'Pared libre',
            s: 'Pericardiocentesis y toracotomía',
            say: 'Un colapso súbito sin soplo, con disociación electromecánica, es la rotura de la pared libre: pericardiocentesis y toracotomía, con una mortalidad de más de noventa por ciento.',
            kids: []
          }
        ],
        [
          'Dolor nocturno, ST transitorio',
          {
            k: 'ok',
            t: 'Prinzmetal',
            s: 'Calcioantagonista + nitrato',
            say: 'Un dolor de reposo nocturno con supradesnivel transitorio es una angina de Prinzmetal: calcioantagonista y nitrato, y nunca un betabloqueador no selectivo.',
            kids: []
          }
        ]
      ]
    }
  }
};
