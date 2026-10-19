// Clase 2.1 (Cardiología) — Dolor torácico agudo en urgencias. Guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_2.cjs (cardio-10, tier 2). Códigos: 1.01.4.007 Electrocardiograma
// (realiza, interpreta y emplea) y 1.01.4.009 Enzimas cardíacas (interpreta y emplea), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs + búsqueda en el banco): Julio 2013 P16 (disección con soplo diastólico), Julio 2019 P76
// (Marfán puérpera, angioTAC), Enero 2023 P139 (supradesnivel en silla de montar: pericarditis) y Julio 2013 P3 (síndrome nefrótico,
// embolia pulmonar). Enunciados y alternativas copiados del banco (solo se unieron palabras cortadas con guion; se respeta la grafía
// «Tromboemolismo» y el enunciado incompleto «Al examen físico tiene.» de Julio 2019 P76).
// No usadas: Diciembre 2018 P94 y Julio 2019 P81 (pericarditis: dependen de un ECG que el banco no trae); Julio 2024 P180 y Diciembre 2024 P62
// (síncope: el ECG como examen inicial se menciona en la clase pero las preguntas son de síncope); Enero 2023 P157 y Julio 2025 P22
// (disección: van en cardio-35); Julio 2013 P85 (angina estable: cardio-11).
// Fotos en contexto: ECG con T hiperagudas (Stroobandt p. 165), radiografía con neumotórax y con aire mediastinal (The Chest X-Ray: A Survival
// Guide, Fig. 28.7 y 27.4), en classes/media/biblioteca/20_cardiologia/cardio-10/. En movimiento: scenes/cardio_b2.html ?v=troponina.

module.exports = {
  id: 'cardio-10',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'ECG en diez minutos, la troponina por su curva y los diagnósticos que no se pueden pasar',
      say: 'Bienvenido. En el bloque anterior cerramos las arritmias con las extrasístoles y el Holter. Hoy empezamos la cardiopatía coronaria por su puerta de entrada: el dolor torácico agudo en urgencias. Casi todo el examen de cardiología parte aquí. Vamos a ver qué se hace en los primeros diez minutos, cómo se lee la troponina y cuáles son los diagnósticos que matan en horas y que tú tienes que descartar.'
    },
    {
      type: 'points',
      kicker: 'Primer contacto',
      title: 'Lo primero que se hace',
      cards: [
        {
          title: 'En los primeros minutos',
          tag: 'No se espera',
          kind: 'key',
          items: [
            {
              t: 'ECG de 12 derivaciones en ≤ 10 min',
              d: 'Meta GES del infarto',
              say: 'Ante cualquier dolor torácico agudo, lo primero es un electrocardiograma de doce derivaciones, tomado e interpretado en diez minutos o menos desde que el paciente llega. Es una meta de la garantía GES del infarto, y define de inmediato si hay un supradesnivel que obliga a reperfundir.'
            },
            {
              t: 'Monitor, vía venosa, SatO₂',
              d: 'Desfibrilador al alcance',
              say: 'En paralelo lo monitorizas, con el desfibrilador cerca, le instalas una vía venosa y mides la saturación. Y pides troponina y una radiografía de tórax.'
            },
            {
              t: 'PA en ambos brazos y pulsos',
              d: 'Diferencia > 20 mmHg = disección',
              say: 'Toma siempre la presión en los dos brazos y palpa los pulsos. Una diferencia de más de veinte milímetros de mercurio, o un pulso asimétrico, te manda a pensar en una disección aórtica.'
            }
          ]
        },
        {
          title: 'La anamnesis',
          tag: 'Hace la mitad del diagnóstico',
          kind: 'criteria',
          items: [
            {
              t: 'Opresivo, > 20 min, irradiado',
              d: 'Isquémico: SCA',
              say: 'Un dolor opresivo, retroesternal, de más de veinte minutos, que se irradia al brazo o a la mandíbula y trae sudoración, es isquémico.'
            },
            {
              t: 'Desgarrante, a la espalda',
              d: 'Disección hasta demostrar lo contrario',
              say: 'Un dolor desgarrante, de inicio máximo y súbito, que se va a la espalda, es una disección hasta que se demuestre lo contrario.'
            },
            {
              t: 'Pleurítico, postural, tras vómitos',
              d: 'TEP · pericarditis · Boerhaave',
              say: 'El dolor que empeora al respirar con disnea apunta a embolia pulmonar o neumotórax. El que mejora al inclinarse hacia adelante es la pericarditis. Y el que aparece después de vomitar con fuerza es una rotura del esófago.'
            }
          ]
        }
      ]
    },
    {
      type: 'points',
      kicker: 'El electrocardiograma',
      title: 'Qué buscar y qué no descarta',
      cards: [
        {
          title: 'En este orden',
          tag: 'Lectura dirigida',
          kind: 'key',
          items: [
            {
              t: 'Supradesnivel o BCRI nuevo',
              d: 'SCACEST: reperfundir sin esperar',
              say: 'Primero buscas supradesnivel del ST en dos derivaciones contiguas, o un bloqueo de rama izquierda nuevo. Si está, es un infarto con supradesnivel y se reperfunde sin esperar la troponina. Eso lo vemos en la clase cinco de este bloque.'
            },
            {
              t: 'Infradesnivel o T negativa',
              d: 'Isquemia sin oclusión total',
              say: 'Después, infradesnivel del ST o inversión de la onda T. Sugieren isquemia sin oclusión completa, y es el camino del síndrome coronario sin supradesnivel.'
            },
            {
              t: 'T hiperagudas',
              d: 'Repetir el ECG',
              say: 'Y las ondas T hiperagudas. Mira este electrocardiograma: de V dos a V cuatro las T son altas, anchas y simétricas. Pueden ser el primer signo de un infarto en los primeros minutos, y obligan a repetir el trazado.',
              photo: {
                src: 'biblioteca/20_cardiologia/cardio-10/01_ecg-t-hiperagudas-v2-v4__stroobandt-ecg_p165.jpg',
                label: 'T hiperagudas V2-V4',
                at: 'Mira este electrocardiograma',
                credit: 'Stroobandt, Barold y Sinnaeve. ECG from Basics to Essentials (Wiley, 2016), p. 165'
              }
            }
          ]
        },
        {
          title: 'Un ECG normal',
          tag: 'No descarta',
          kind: 'alert',
          items: [
            {
              t: 'Normal no descarta un SCA',
              d: 'Repetir cada 15-30 min',
              say: 'Un electrocardiograma normal no descarta un síndrome coronario agudo. Muchas anginas inestables y varios infartos tienen un primer trazado normal. Si el dolor persiste o la sospecha es alta, lo repites cada quince a treinta minutos.'
            },
            {
              t: 'V7-V9 y V3R-V4R',
              d: 'Posterior e inferior con VD',
              say: 'Agregas las derivaciones posteriores cuando hay infradesnivel de V uno a V tres con R altas, y las derechas en el infarto inferior.'
            },
            {
              t: 'Síncope con FC de 40: ECG primero',
              d: 'No TAC ni Holter',
              say: 'Y el electrocardiograma también es el primer examen en el síncope de un adulto mayor con bradicardia: ahí buscas un bloqueo auriculoventricular o una enfermedad del nodo.'
            }
          ]
        }
      ]
    },
    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'La troponina se lee por su curva',
      images: [
        {
          src: 'animaciones/cardio-10/A1_curva_troponina.mp4',
          label: 'Troponina ultrasensible y CK-MB en el tiempo',
          credit: 'Gráfico propio con los criterios del libro'
        }
      ],
      steps: [
        {
          note: 'Sube a las 1-3 h, pico a las 12-24 h, dura 14 días',
          say: 'Mira la curva. La troponina ultrasensible empieza a subir una a tres horas después del inicio de la necrosis, llega a su máximo entre las doce y las veinticuatro horas y se mantiene elevada hasta catorce días. Eso sirve para diagnosticar un infarto de varios días. La CK-MB sube más tarde y se normaliza en dos o tres días: quedó obsoleta. Y recuerda: el infarto con supradesnivel nunca espera este resultado.'
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Troponina ultrasensible',
      title: 'Cómo se interpreta',
      cards: [
        {
          title: 'El algoritmo de 0 y 1 hora',
          tag: 'Por la curva',
          kind: 'key',
          items: [
            {
              t: 'Basal muy bajo o sin delta',
              d: 'Descarta con VPN > 99%',
              say: 'Se mide al llegar y a la hora. Si el valor basal es muy bajo, o a la hora casi no cambió, y el paciente tiene bajo riesgo, se descarta el infarto con un valor predictivo negativo cercano al noventa y nueve por ciento.'
            },
            {
              t: 'Basal muy alto o delta marcado',
              d: 'Confirma el infarto',
              say: 'Si el valor basal es muy alto, o el cambio a la hora es marcado, se confirma. Y los casos intermedios se observan y se repiten a las tres horas.'
            },
            {
              t: 'Normal no descarta angina inestable',
              d: 'Por definición no eleva biomarcadores',
              say: 'Ojo con una trampa: una troponina normal al inicio no descarta una angina inestable, que por definición no eleva los biomarcadores.'
            }
          ]
        },
        {
          title: 'Sube sin infarto coronario',
          tag: 'Se pregunta',
          kind: 'alert',
          items: [
            {
              t: 'Elevación estable: daño crónico',
              d: 'Insuficiencia renal o cardíaca',
              say: 'Una troponina elevada no siempre es un infarto. Si se mantiene alta sin cambiar, piensa en daño crónico: insuficiencia renal, insuficiencia cardíaca o cardiopatía estructural.'
            },
            {
              t: 'Con curva: miocarditis, TEP, sepsis',
              d: 'Taquiarritmia, disección, Takotsubo',
              say: 'Si tiene curva pero no hay oclusión coronaria, puede ser miocarditis, embolia pulmonar, sepsis, una taquiarritmia, una disección o el síndrome de Takotsubo. El infarto tipo dos nace de un desbalance entre aporte y demanda de oxígeno.'
            }
          ]
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Los letales (1)',
      title: 'Disección aórtica y embolia pulmonar',
      cards: [
        {
          title: 'Disección aórtica',
          tag: 'Nunca fibrinolizar',
          kind: 'alert',
          items: [
            {
              t: 'Desgarrante, pulsos asimétricos',
              d: 'Hipertenso, Marfán, puérpera',
              say: 'La disección aórtica aparece en el hipertenso mal controlado, en el portador de Marfán y en la embarazada o puérpera. El dolor es súbito y desgarrante, con asimetría de pulsos o de presión entre los brazos, y a veces un soplo diastólico de insuficiencia aórtica nuevo.'
            },
            {
              t: 'AngioTAC de aorta',
              d: 'ETE si está inestable',
              say: 'El examen de elección es el angioTAC de aorta, o el ecocardiograma transesofágico si el paciente está inestable. El electrocardiograma puede ser normal, y la troponina no debe retrasar la imagen.'
            },
            {
              t: 'Betabloqueo EV; tipo A, cirugía',
              d: 'Jamás anticoagular ni fibrinolizar',
              say: 'Se controlan de inmediato la frecuencia y la presión con betabloqueo endovenoso, y la disección ascendente va a cirugía urgente. Lo que nunca se hace es anticoagular o fibrinolizar, como si fuera un infarto.'
            }
          ]
        },
        {
          title: 'Embolia pulmonar',
          tag: 'Wells y dímero D',
          kind: 'criteria',
          items: [
            {
              t: 'Disnea y dolor pleurítico súbitos',
              d: 'Taquicardia, hipoxemia, factores de trombosis',
              say: 'La embolia pulmonar da disnea y dolor pleurítico de inicio súbito, con taquicardia e hipoxemia, en alguien con factores de trombosis: inmovilización, cirugía, cáncer, embarazo o un síndrome nefrótico.'
            },
            {
              t: 'Wells + dímero D; angioTAC',
              d: 'ECG: solo taquicardia sinusal',
              say: 'Estimas la probabilidad con el puntaje de Wells. Si es baja o intermedia, un dímero D normal la descarta. Si es alta, o el dímero está elevado, haces un angioTAC de arterias pulmonares. El electrocardiograma suele mostrar solo taquicardia.'
            }
          ]
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Los letales (2)',
      title: 'Neumotórax a tensión, Boerhaave y taponamiento',
      cards: [
        {
          title: 'Neumotórax a tensión',
          tag: 'Se trata sin radiografía',
          kind: 'alert',
          items: [
            {
              t: 'Hipotensión, yugulares, sin murmullo',
              d: 'Hiperresonancia, tráquea desviada',
              say: 'El neumotórax a tensión da disnea progresiva, hipotensión, yugulares ingurgitadas, ausencia de murmullo pulmonar e hiperresonancia en un lado, con la tráquea desviada hacia el lado sano. Mira esta radiografía: una línea pleural y ausencia de trama vascular en la periferia del pulmón izquierdo. Es un neumotórax simple; el de tensión se reconoce en la clínica.',
              photo: {
                src: 'biblioteca/20_cardiologia/cardio-10/02_rx-neumotorax-izquierdo__cxr-survival-guide_fig28-7.jpg',
                label: 'Neumotórax izquierdo',
                at: 'Mira esta radiografía',
                credit: 'The Chest X-Ray: A Survival Guide, Fig. 28.7'
              }
            },
            {
              t: 'Descomprimir con aguja de inmediato',
              d: 'Luego tubo pleural',
              say: 'Y es un diagnóstico clínico: se descomprime de inmediato con una aguja, en el segundo espacio intercostal o en el quinto de la línea axilar anterior, y después se pone el tubo pleural. No se espera la radiografía.'
            }
          ]
        },
        {
          title: 'Rotura esofágica',
          tag: 'Boerhaave',
          kind: 'criteria',
          items: [
            {
              t: 'Dolor tras vómitos violentos',
              d: 'Enfisema subcutáneo, fiebre',
              say: 'La rotura esofágica, o síndrome de Boerhaave, aparece después de vómitos o arcadas violentas, con dolor torácico o epigástrico intenso, enfisema subcutáneo en el cuello y fiebre. Fíjate en esta radiografía: las flechas marcan aire en el mediastino.',
              photo: {
                src: 'biblioteca/20_cardiologia/cardio-10/03_rx-aire-mediastinal-boerhaave__cxr-survival-guide_fig27-4.jpg',
                label: 'Aire mediastínico',
                at: 'Fíjate en esta radiografía',
                credit: 'The Chest X-Ray: A Survival Guide, Fig. 27.4'
              }
            },
            {
              t: 'TAC con contraste, ayuno, cirugía',
              d: 'Mortalidad sube con las horas',
              say: 'Se confirma con TAC con contraste oral o esofagograma, y se trata con ayuno, antibióticos y cirugía precoz. Cada hora de retraso aumenta la mortalidad.'
            }
          ]
        },
        {
          title: 'Taponamiento',
          tag: 'Tríada de Beck',
          kind: 'normal',
          items: [
            {
              t: 'Hipotensión, yugulares, ruidos apagados',
              d: 'Pulso paradójico; eco; pericardiocentesis',
              say: 'El sexto diagnóstico de la lista es el taponamiento: hipotensión, yugulares ingurgitadas y ruidos cardíacos apagados, con pulso paradójico. Se confirma con ecocardiograma y se resuelve con pericardiocentesis. Lo veremos en el bloque cinco.'
            }
          ]
        }
      ]
    },
    {
      type: 'points',
      kicker: 'No letales, pero se preguntan',
      title: 'Lo que imita al infarto',
      cards: [
        {
          title: 'Pericarditis aguda',
          tag: 'La más preguntada',
          kind: 'key',
          items: [
            {
              t: 'Mejora al inclinarse; empeora al acostarse',
              d: 'Roce pericárdico, antecedente viral',
              say: 'La pericarditis da un dolor punzante que mejora al sentarse e inclinarse hacia adelante, y empeora al acostarse o al inspirar.'
            },
            {
              t: 'ST cóncavo y difuso, PR descendido',
              d: 'Sin imagen especular ni territorio',
              say: 'El electrocardiograma muestra supradesnivel cóncavo, en silla de montar, en casi todas las derivaciones, con el segmento PR descendido. No respeta territorios y no tiene imagen especular, y esa es la diferencia con el infarto.'
            }
          ]
        },
        {
          title: 'Otras causas',
          tag: 'Diagnóstico de exclusión',
          kind: 'normal',
          items: [
            {
              t: 'Esofágico y osteomuscular',
              d: 'Comida y decúbito; dolor a la palpación',
              say: 'El dolor esofágico se relaciona con la comida y el decúbito, y a veces calma con nitroglicerina, así que esa respuesta no es una prueba diagnóstica. El osteomuscular se reproduce al presionar la pared del tórax.'
            },
            {
              t: 'Cocaína y Prinzmetal',
              d: 'Vasoespasmo; ergometría si es angina estable',
              say: 'Y no olvides al joven que consumió cocaína, o a la angina de Prinzmetal, que veremos más adelante. El dolor de esfuerzo que cede en reposo es una angina estable y se estudia con ergometría.'
            }
          ]
        }
      ]
    },
    {
      type: 'flow',
      kicker: 'Destino del paciente',
      title: 'Cuatro caminos después del ECG y la troponina',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'start', t: 'ECG + troponina seriada', s: 'Más clínica' },
        { id: 'b', col: 2, row: 0, k: 'alert', t: 'Supradesnivel o BCRI', s: 'SCACEST: reperfundir' },
        { id: 'c', col: 2, row: 1, k: 'effect', t: 'Troponina sube y cae', s: 'IAMSEST' },
        { id: 'd', col: 2, row: 3, k: 'mech', t: 'Troponina normal, dolor de reposo', s: 'Angina inestable' },
        { id: 'e', col: 2, row: 4, k: 'good', t: 'Todo normal y bajo riesgo', s: 'Estudio ambulatorio' },
        { id: 'f', col: 4, row: 1, k: 'refer', t: 'Hospitalizar', s: 'Estrategia invasiva precoz' }
      ],
      edges: [
        { from: 'a', to: 'b' },
        { from: 'a', to: 'c' },
        { from: 'a', to: 'd' },
        { from: 'a', to: 'e' },
        { from: 'c', to: 'f' },
        { from: 'd', to: 'f' }
      ],
      steps: [
        {
          show: [ 'a', 'b' ],
          note: 'Supradesnivel: no se espera',
          say: 'Con el electrocardiograma y la troponina el paciente cae en uno de cuatro caminos. Si hay supradesnivel o un bloqueo de rama nuevo, es un infarto con supradesnivel y se reperfunde de inmediato.'
        },
        {
          show: [ 'c', 'f' ],
          note: 'Troponina con curva: IAMSEST',
          say: 'Si la troponina sube y cae sin supradesnivel, es un infarto sin supradesnivel. Se hospitaliza y se planifica la coronariografía precoz, que vemos en la clase cuatro.'
        },
        {
          show: [ 'd' ],
          note: 'Normal con dolor de reposo: angina inestable',
          say: 'Si la troponina es normal pero el dolor es de reposo o va en aumento, con cambios en el electrocardiograma, es una angina inestable, y se maneja igual que el síndrome coronario sin supradesnivel.'
        },
        {
          show: [ 'e' ],
          note: 'Todo normal: ambulatorio',
          say: 'Solo si el electrocardiograma y la troponina seriados son normales, y el dolor es atípico y de bajo riesgo, se puede dar el alta con un estudio ambulatorio. Las escalas como HEART ayudan: de cero a tres puntos permite el alta precoz.'
        }
      ]
    },
    { type: 'pathway', intro: 'Armemos el árbol: del dolor torácico al diagnóstico.' },
    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dolor torácico: dato, decisión, error',
      head: [ 'Dato', 'Decisión', 'Error típico' ],
      rows: [
        {
          cells: [ 'Dolor torácico agudo', 'ECG en ≤ 10 min', 'Pedir primero la troponina' ],
          say: 'Dolor torácico agudo: electrocardiograma en diez minutos. El error es pedir primero la troponina y esperar.'
        },
        {
          cells: [ 'Supradesnivel con troponina pendiente', 'Reperfundir ya', 'Esperar el resultado' ],
          say: 'Supradesnivel con la troponina pendiente: se reperfunde ya. Esperar el resultado es el error clásico.'
        },
        {
          cells: [ 'ECG y 1.ª troponina normales', 'Repetir; no descarta angina inestable', 'Dar de alta' ],
          say: 'Electrocardiograma y primera troponina normales: se repiten. Una troponina normal no descarta angina inestable, y el alta es el error.'
        },
        {
          cells: [ 'Dolor desgarrante, soplo diastólico, pulsos asimétricos', 'AngioTAC de aorta', 'Anticoagular o fibrinolizar' ],
          say: 'Dolor desgarrante con soplo diastólico y pulsos asimétricos: es una disección, con angioTAC. Anticoagular o fibrinolizar puede matar.'
        },
        {
          cells: [ 'Marfán o puérpera con dolor al dorso', 'AngioTAC de tórax', 'Dímero D o test de esfuerzo' ],
          say: 'Marfán o puérpera con dolor que va a la espalda: angioTAC de tórax. El dímero D busca otra enfermedad, y el test de esfuerzo está contraindicado.'
        },
        {
          cells: [ 'Hipotensión + yugulares + sin murmullo', 'Descomprimir con aguja', 'Esperar la radiografía' ],
          say: 'Hipotensión con yugulares y sin murmullo en un hemitórax: neumotórax a tensión. Se descomprime con aguja sin esperar la radiografía.'
        },
        {
          cells: [ 'ST difuso en silla de montar', 'Pericarditis', 'Tratarlo como SCACEST' ],
          say: 'Supradesnivel difuso en silla de montar, sin imagen especular: pericarditis. Tratarlo como un infarto con supradesnivel es el error.'
        },
        {
          cells: [ 'Síncope + FC 40', 'ECG de reposo', 'TAC de cerebro o Holter' ],
          say: 'Síncope con frecuencia de cuarenta: el primer examen es el electrocardiograma, no el TAC ni el Holter.'
        }
      ]
    },
    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 52 años, hipertenso con mal control, consulta en urgencia por dolor torácico súbito hace 40 minutos, «como un puñal», irradiado a la región interescapular, con sudoración. PA 190/100 mmHg en el brazo derecho y 145/80 mmHg en el izquierdo, FC 105 lpm. Se ausculta un soplo diastólico aórtico II/VI nuevo. El ECG muestra taquicardia sinusal con signos de hipertrofia ventricular izquierda, sin supradesnivel del ST; la troponina está pendiente.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Aspirina, clopidogrel y heparina, y esperar la troponina' },
        { letter: 'B', text: 'AngioTAC de aorta y control de frecuencia y presión con betabloqueo endovenoso' },
        { letter: 'C', text: 'Tenecteplase por sospecha de infarto de pared inferior' },
        { letter: 'D', text: 'Dímero D y alta si es negativo' },
        { letter: 'E', text: 'Ergometría para descartar angina' }
      ],
      correct: 'B',
      explanation: 'Dolor desgarrante, asimetría de presión entre los brazos y un soplo diastólico de insuficiencia aórtica nuevo en un hipertenso: es una disección aórtica. Se confirma con angioTAC de aorta mientras se controlan la frecuencia y la presión con betabloqueo endovenoso (PAS 100-120 mmHg); si es tipo A, cirugía urgente. No se antiagrega, anticoagula ni fibrinoliza, y no se espera la troponina.',
      say: {
        stem: 'Un hombre de cincuenta y dos años, hipertenso mal controlado, llega a urgencia con un dolor súbito, como un puñal, que se va a la espalda. La presión es de ciento noventa sobre cien en el brazo derecho y de ciento cuarenta y cinco sobre ochenta en el izquierdo. Tiene un soplo diastólico aórtico nuevo y el electrocardiograma no tiene supradesnivel. La troponina está pendiente.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: antiagregar, anticoagular y esperar la troponina; angioTAC de aorta con betabloqueo endovenoso; tenecteplase; dímero D; o ergometría. Piénsalo.',
        answer: 'Es la B. El dolor desgarrante, la diferencia de presión entre los brazos y el soplo diastólico de insuficiencia aórtica nuevo hacen el diagnóstico de disección. Pides angioTAC y bajas la frecuencia y la presión. La A y la C son el error mortal: antiagregar, anticoagular o fibrinolizar una disección. Y la E es peligrosa, porque la ergometría estaría contraindicada.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 16',
      stem: 'Paciente de 50 años, con antecedente de hipertensión en tratamiento irregular con hidroclorotiazida, consulta por dolor torácico de 30 minutos de duración, transfixiante, irradiado a epigastrio, asociado a mareos y diaforesis. Al examen se aprecia pálido, sudoroso, PA 150/90, FC: 110x’, saturación de oxígeno de 93% con FiO2 ambiental, ritmo regular, asociado a soplo diastólico II/ VI y disminución del segundo ruido, abdomen blando, depresible e indoloro, ruidos hidroaéreos presentes. Al ingreso se solicita ECG que muestra alteraciones inespecíficas en pared anterolateral, además troponinas que están con resultado pendiente.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Disección aórtica' },
        { letter: 'B', text: 'Infarto agudo al miocardio sin supradesnivel de ST' },
        { letter: 'C', text: 'Tromboembolismo pulmonar' },
        { letter: 'D', text: 'Infarto mesentérico' },
        { letter: 'E', text: 'Pancreatitis aguda' }
      ],
      correct: 'A',
      explanation: 'Dolor transfixiante en un hipertenso mal controlado, con soplo diastólico y disminución del segundo ruido (insuficiencia aórtica aguda), ECG sin supradesnivel y troponina pendiente: es una disección aórtica, no un infarto sin supradesnivel. Se confirma con angioTAC y no se anticoagula ni se fibrinoliza.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Un paciente de cincuenta años, hipertenso con tratamiento irregular, consulta por un dolor torácico transfixiante de treinta minutos, irradiado al epigastrio, con mareos y sudoración. Está pálido, con frecuencia de ciento diez y un soplo diastólico con disminución del segundo ruido. El electrocardiograma muestra alteraciones inespecíficas y las troponinas están pendientes.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: disección aórtica; infarto sin supradesnivel; embolia pulmonar; infarto mesentérico; o pancreatitis aguda. Piénsalo.',
        answer: 'Es la A. El dolor transfixiante en un hipertenso, con un soplo diastólico y un segundo ruido disminuido, es la insuficiencia aórtica de una disección que compromete la raíz. La B tienta porque hay dolor y diaforesis, pero el soplo diastólico nuevo no se explica por un infarto sin supradesnivel.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 76',
      stem: 'Una paciente de 30 años, con antecedente de enfermedad de Marfán, puérpera hace un mes, consulta por dolor torácico precordial, opresivo, irradiado al dorso, EVA 8/10. Al examen físico tiene. Su electrocardiograma muestra taquicardia sinusal, sin otras alteraciones.',
      question: 'El examen de elección para iniciar el enfrentamiento de esta paciente es:',
      options: [
        { letter: 'A', text: 'Coronariografía' },
        { letter: 'B', text: 'Ecocardiograma transtorácico' },
        { letter: 'C', text: 'Dímero D' },
        { letter: 'D', text: 'AngioTAC de tórax' },
        { letter: 'E', text: 'Test de esfuerzo' }
      ],
      correct: 'D',
      explanation: 'Portadora de síndrome de Marfán y puérpera, con dolor torácico irradiado al dorso: la sospecha es disección aórtica. El examen de elección es el angioTAC de tórax. La taquicardia sinusal es inespecífica; el dímero D busca embolia pulmonar y la coronariografía o la ergometría no corresponden.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecinueve. Una mujer de treinta años, con síndrome de Marfán y puérpera de un mes, consulta por dolor torácico precordial opresivo, de intensidad ocho sobre diez, irradiado al dorso. El electrocardiograma muestra taquicardia sinusal sin otras alteraciones.',
        question: '¿Cuál es el examen de elección para iniciar el enfrentamiento?',
        options: 'Las opciones: coronariografía; ecocardiograma transtorácico; dímero D; angioTAC de tórax; o test de esfuerzo. Piénsalo.',
        answer: 'Es la D. Marfán y puerperio son dos factores que predisponen a la disección aórtica, y el dolor que va a la espalda lo refuerza. El examen de elección es el angioTAC de tórax. La C tienta por la taquicardia y el puerperio, pero el dímero D busca embolia pulmonar y aquí la sospecha principal es otra. La E está contraindicada.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 139',
      stem: 'Paciente con dolor torácico retroesternal, antecedente de RGE, en buenas condiciones. ECG con elevación difusa del ST en silla de montar.',
      question: '¿Diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'SCA con elevación del ST (SCACEST)' },
        { letter: 'B', text: 'Angina inestable' },
        { letter: 'C', text: 'Miocarditis aguda viral' },
        { letter: 'D', text: 'Pericarditis aguda' },
        { letter: 'E', text: 'Espasmo coronario (angina de Prinzmetal)' }
      ],
      correct: 'D',
      explanation: 'Dolor torácico con elevación difusa del ST en «silla de montar» en una persona en buenas condiciones: pericarditis aguda. El supradesnivel cóncavo y difuso, sin territorio ni imagen especular, la distingue del SCACEST y de la angina de Prinzmetal (supradesnivel regional y transitorio).',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un paciente con dolor torácico retroesternal, con antecedente de reflujo, en buenas condiciones generales. El electrocardiograma muestra una elevación difusa del ST, en silla de montar.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: infarto con supradesnivel; angina inestable; miocarditis viral; pericarditis aguda; o angina de Prinzmetal. Piénsalo.',
        answer: 'Es la D. Un supradesnivel difuso, en silla de montar, que no respeta territorios, es una pericarditis aguda. La A tienta porque el ST está elevado, pero en el infarto el supradesnivel sigue un territorio y tiene imagen especular. Y la E, la angina de Prinzmetal, tiene supradesnivel regional y transitorio, en un dolor de reposo.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 3',
      stem: 'Paciente de 65 años, diabético en tratamiento con esquema intensificado de insulina, actualmente hospitalizado por cuadro de edema generalizado en estudio, presenta dolor torácico de inicio súbito, asociado a diaforesis. Al examen físico destaca saturación de 89% con FiO2 ambiental, murmullo pulmonar con crepitaciones difusas bilaterales. En sus exámenes de laboratorio destaca proteinuria de 24 horas de 5gramos, albúmina de 2g/dL y perfil lipídico con triglicéridos de 450 mg/dL.',
      question: 'La causa más probable de su dolor torácico es:',
      options: [
        { letter: 'A', text: 'Neumonía aguda' },
        { letter: 'B', text: 'Tromboemolismo pulmonar' },
        { letter: 'C', text: 'Infarto agudo al miocardio' },
        { letter: 'D', text: 'Pericarditis aguda' },
        { letter: 'E', text: 'Disección aórtica' }
      ],
      correct: 'B',
      explanation: 'Dolor torácico súbito con diaforesis e hipoxemia en un síndrome nefrótico (proteinuria de 5 g y albúmina baja: estado de hipercoagulabilidad) es una embolia pulmonar. Los demás diagnósticos no explican la hipoxemia con el contexto trombofílico.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Un paciente de sesenta y cinco años, diabético, hospitalizado por edema generalizado en estudio, presenta un dolor torácico de inicio súbito con sudoración. Su saturación es de ochenta y nueve por ciento y tiene crepitaciones difusas en ambos pulmones. Los exámenes muestran proteinuria de cinco gramos en veinticuatro horas, albúmina de dos y triglicéridos de cuatrocientos cincuenta.',
        question: '¿Cuál es la causa más probable de su dolor torácico?',
        options: 'Las opciones: neumonía aguda; tromboembolismo pulmonar; infarto agudo al miocardio; pericarditis aguda; o disección aórtica. Piénsalo.',
        answer: 'Es la B. El paciente tiene un síndrome nefrótico, que es un estado de hipercoagulabilidad, y desarrolla dolor súbito con hipoxemia: una embolia pulmonar. La C tienta por el dolor torácico y la diaforesis en un diabético, pero la hipoxemia y el contexto trombofílico apuntan a los pulmones.'
      }
    },
    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: dolor torácico agudo',
      cards: [
        {
          title: 'Primeros diez minutos',
          tag: 'El ECG manda',
          kind: 'key',
          items: [
            {
              t: 'ECG ≤ 10 min; monitor; PA en ambos brazos',
              d: 'No se espera la troponina para reperfundir',
              say: 'Cerremos con las reglas de oro. Electrocardiograma en diez minutos, monitor, y presión en los dos brazos. Y el infarto con supradesnivel nunca espera la troponina.'
            },
            {
              t: 'ECG o troponina normales: repetir',
              d: 'No descartan angina inestable',
              say: 'Un electrocardiograma o una troponina normales no descartan angina inestable: se repiten, y la troponina se lee por su curva.'
            }
          ]
        },
        {
          title: 'Los letales',
          tag: 'Ninguno se pasa',
          kind: 'alert',
          items: [
            {
              t: 'SCA · disección · TEP',
              d: 'Neumotórax a tensión · Boerhaave · taponamiento',
              say: 'Los diagnósticos que no se pasan: síndrome coronario agudo, disección aórtica, embolia pulmonar, neumotórax a tensión y rotura esofágica, más el taponamiento.'
            },
            {
              t: 'Disección: angioTAC, jamás fibrinolizar',
              d: 'Neumotórax: aguja sin esperar Rx',
              say: 'La disección se confirma con angioTAC y jamás se fibrinoliza. El neumotórax a tensión se descomprime con aguja, sin esperar la radiografía.'
            },
            {
              t: 'Pericarditis: ST difuso sin especular',
              d: 'Mejora al inclinarse',
              say: 'La pericarditis tiene supradesnivel difuso sin imagen especular y mejora al inclinarse. Si te llevas una sola idea de hoy: en un dolor torácico, antes de pensar en el infarto, el electrocardiograma en diez minutos, y descarta el diagnóstico letal que explique la clínica. Nos vemos en la próxima clase.'
            }
          ]
        }
      ]
    }
  ],
  pathway: {
    title: 'Dolor torácico agudo: del primer contacto al diagnóstico',
    root: {
      k: 'start',
      t: 'Dolor torácico agudo',
      s: 'ECG en ≤ 10 minutos + troponina',
      say: 'Llega un paciente con dolor torácico. Monitor, vía venosa, presión en ambos brazos, y un electrocardiograma en diez minutos.',
      kids: [
        [
          'Supradesnivel o BCRI nuevo',
          {
            k: 'alert',
            t: 'SCACEST',
            s: 'Reperfusión sin esperar la troponina',
            say: 'Si hay supradesnivel en dos derivaciones contiguas o un bloqueo de rama izquierda nuevo, es un infarto con supradesnivel. Se reperfunde de inmediato, sin esperar la troponina.',
            kids: []
          }
        ],
        [
          'Sin supradesnivel, clínica de letal',
          {
            k: 'q',
            t: 'Buscar el diagnóstico letal',
            s: 'Según el hallazgo guía',
            say: 'Si no hay supradesnivel pero la clínica orienta a un diagnóstico letal, pides el examen dirigido.',
            kids: [
              [
                'Pulsos asimétricos, soplo diastólico',
                {
                  k: 'refer',
                  t: 'Disección aórtica',
                  s: 'AngioTAC; betabloqueo; sin anticoagular',
                  say: 'Dolor desgarrante con pulsos asimétricos: angioTAC de aorta, betabloqueo endovenoso, y nunca anticoagular ni fibrinolizar.',
                  kids: []
                }
              ],
              [
                'Disnea súbita, factores de trombosis',
                {
                  k: 'do',
                  t: 'Embolia pulmonar',
                  s: 'Wells, dímero D, angioTAC',
                  say: 'Disnea súbita con factores de trombosis: Wells, dímero D y angioTAC de arterias pulmonares.',
                  kids: []
                }
              ],
              [
                'Hipotensión, yugulares, sin murmullo',
                {
                  k: 'alert',
                  t: 'Neumotórax a tensión',
                  s: 'Descomprimir con aguja',
                  say: 'Hipotensión con yugulares y sin murmullo: se descomprime con aguja sin esperar la radiografía.',
                  kids: []
                }
              ]
            ]
          }
        ],
        [
          'Sin supradesnivel, dolor coronario',
          {
            k: 'q',
            t: 'Troponina seriada 0/1 h',
            s: 'Y repetir el ECG',
            say: 'Si el cuadro es coronario sin supradesnivel, mides la troponina a las cero y una hora y repites el electrocardiograma.',
            kids: [
              [
                'Sube y cae',
                {
                  k: 'refer',
                  t: 'IAMSEST',
                  s: 'Hospitalizar y coronariografía precoz',
                  say: 'Si la troponina sube y cae, es un infarto sin supradesnivel: hospitalización y coronariografía precoz.',
                  kids: []
                }
              ],
              [
                'Normal, dolor de reposo o crescendo',
                {
                  k: 'refer',
                  t: 'Angina inestable',
                  s: 'Se maneja como SCASEST',
                  say: 'Si es normal pero el dolor es de reposo o va en aumento, es angina inestable y se maneja igual.',
                  kids: []
                }
              ],
              [
                'Seriados normales, bajo riesgo',
                {
                  k: 'ok',
                  t: 'Alta con estudio ambulatorio',
                  s: 'Ergometría',
                  say: 'Si todo es normal y el riesgo es bajo, alta con un estudio ambulatorio de isquemia.',
                  kids: []
                }
              ]
            ]
          }
        ]
      ]
    }
  }
};
