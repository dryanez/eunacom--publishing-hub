// Clase 2.2 (Cardiología) — Angina crónica estable: diagnóstico, estratificación funcional y coronariografía. Guion docente escrito a mano.
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_2.cjs (cardio-11, tier 2). Códigos: 1.01.1.001 Angina crónica estable
// (Dx específico · Tx inicial · Seguimiento completo), 1.01.4.008 Test de esfuerzo (emplea informe), 1.01.4.005 Cintigrafía de perfusión
// miocárdica (emplea informe) y 1.01.4.001 Coronariografía (interpreta y emplea), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-11): Diciembre 2025 P2 (test de esfuerzo; se corrigieron las alternativas A y B, que el banco trae
// con caracteres rotos «Coronariogra:a» y «Cin2gra:a»), Diciembre 2017 P4 (ergometría alterada: coronariografía; se respeta «perfesión»),
// Julio 2013 P102 (BCRI: eco de estrés), Diciembre 2019 P118 (angina de reciente comienzo) y Agosto 2021 P180 (test de esfuerzo; se quitó
// la nota «pregunta añadida a la reconstrucción» de la alternativa E).
// No usadas: Julio 2017 P151 (mismo caso que Diciembre 2019 P118 con el enunciado cortado), Julio 2013 P85 (repite el test de esfuerzo),
// Diciembre 2024 P155 (alternativas rotas), Julio 2015 P61 (cintigrafía vs ecocardiograma: clave dudosa) y Diciembre 2019 P82 (clave dudosa;
// pertenece a cardio-12).
// Fotos en contexto: ECG tras ergometría (Stroobandt p. 166) y Harrison 21.ª ed. (SPECT Fig. 241-5, coronariografía Fig. 241-10 y FFR Fig. 242-8)
// en classes/media/biblioteca/20_cardiologia/cardio-11/. En movimiento: scenes/cardio_b2.html ?v=ergometria.

module.exports = {
  id: 'cardio-11',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Reconocer la angina típica, elegir la prueba que corresponde y saber cuándo derivar a coronariografía',
      say: 'Bienvenido. En la clase anterior vimos el dolor torácico agudo en urgencias. Hoy vemos su versión estable, la que consulta en el CESFAM: la angina crónica estable. Es una de las preguntas más repetidas del examen, y casi siempre te piden lo mismo: cómo se reconoce, qué examen pides primero y qué haces cuando ese examen sale alterado.'
    },
    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Placa fija y desbalance de oxígeno',
      nodes: [
        { id: 'p', col: 0, row: 1, k: 'cause', t: 'Placa fija estable', s: 'Cápsula gruesa, núcleo pequeño' },
        { id: 's', col: 1, row: 1, k: 'mech', t: 'Estenosis ≥ 70%', s: '≥ 50% en el tronco izquierdo' },
        { id: 'd', col: 2, row: 0, k: 'risk', t: 'Sube la demanda', s: 'Esfuerzo, estrés, taquicardia' },
        { id: 'i', col: 3, row: 1, k: 'effect', t: 'Cascada isquémica', s: 'Diástole, sístole, ECG, dolor' },
        { id: 'r', col: 4, row: 1, k: 'good', t: 'Cede con el reposo', s: 'Menos de 5 minutos' }
      ],
      edges: [ { from: 'p', to: 's' }, { from: 's', to: 'i' }, { from: 'd', to: 'i' }, { from: 'i', to: 'r' } ],
      steps: [
        {
          show: [ 'p', 's' ],
          note: 'La placa no se rompe',
          say: 'La angina estable nace de una placa de ateroma fija, con cápsula gruesa y núcleo lipídico pequeño. A diferencia del infarto, la placa no se rompe y la arteria no se tapa con un trombo. La estenosis es significativa desde el setenta por ciento de la luz, o el cincuenta por ciento en el tronco coronario izquierdo.'
        },
        {
          show: [ 'd', 'i' ],
          note: 'Aporte fijo, demanda variable',
          say: 'En reposo, la arteria alcanza. Pero cuando el consumo de oxígeno sube, por el ejercicio, el estrés o la taquicardia, el aporte ya no puede aumentar. Se desencadena la cascada isquémica: primero falla la diástole, luego la sístole, después cambia el electrocardiograma y recién al final aparece el dolor.'
        },
        {
          show: [ 'r' ],
          note: 'Reposo: cede',
          say: 'Por eso el dolor es predecible y cede con el reposo o con nitroglicerina. Y por eso las pruebas de esfuerzo buscan reproducir esta cascada.'
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Angina típica, atípica y no anginosa',
      cards: [
        {
          title: 'Diamond-Forrester',
          tag: 'Los tres criterios',
          kind: 'criteria',
          items: [
            {
              t: 'Opresivo, retroesternal, irradiado',
              d: 'Peso, tirantez; mandíbula o brazo',
              say: 'La clasificación de Diamond y Forrester usa tres criterios. Uno, un dolor opresivo, retroesternal, que puede irradiarse al cuello, la mandíbula o el brazo izquierdo.'
            },
            {
              t: 'Gatillado por esfuerzo o estrés',
              d: 'Predecible',
              say: 'Dos, que lo provoque el esfuerzo o el estrés emocional, de manera predecible.'
            },
            {
              t: 'Cede con reposo o NTG en < 5 min',
              d: 'Los 3 = típica; 2 = atípica; 0-1 = no anginoso',
              say: 'Y tres, que ceda con el reposo o con nitroglicerina sublingual en menos de cinco minutos. Con los tres, es angina típica. Con dos, atípica. Con uno o ninguno, es un dolor torácico no anginoso.'
            }
          ]
        },
        {
          title: 'Ojo',
          tag: 'Equivalentes',
          kind: 'alert',
          items: [
            {
              t: 'Mujer, anciano, diabético',
              d: 'Disnea de esfuerzo o epigastralgia',
              say: 'En la mujer, el adulto mayor y el diabético la angina puede ser atípica: disnea de esfuerzo o dolor epigástrico. Un diabético con dolor epigástrico opresivo que lo obliga a detenerse a los cien metros y cede en reposo tiene una angina de pared inferior, no una dispepsia.'
            },
            {
              t: 'Reciente comienzo: estudiar pronto',
              d: 'Clase III-IV en 2 meses = inestable',
              say: 'Si la angina es de reciente comienzo y se vuelve grave, de clase tres o cuatro en los últimos dos meses, se maneja como inestable. Si es estable, se estudia de forma ambulatoria.'
            }
          ]
        },
        {
          title: 'Gravedad CCS',
          tag: 'Clase I a IV',
          kind: 'normal',
          items: [
            {
              t: 'I extenuante · II > 2 cuadras',
              d: 'III 1-2 cuadras · IV todo o reposo',
              say: 'La gravedad se mide con la clasificación de la Sociedad Canadiense. Clase uno, solo con esfuerzos extenuantes. Clase dos, más de dos cuadras o un piso. Clase tres, una a dos cuadras o un tramo de escalera. Y clase cuatro, cualquier actividad o incluso en reposo.'
            }
          ]
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Antes de la prueba',
      title: 'Evaluación inicial',
      cards: [
        {
          title: 'Qué se pide',
          tag: 'Siempre',
          kind: 'key',
          items: [
            {
              t: 'ECG de reposo y ecocardiograma',
              d: 'Q antigua, bloqueo, HVI; función y válvulas',
              say: 'Antes de cualquier prueba pides un electrocardiograma de reposo, que suele ser normal pero puede mostrar una onda Q antigua, un bloqueo o hipertrofia, y un ecocardiograma que muestra la función ventricular y descarta estenosis aórtica o miocardiopatía hipertrófica.'
            },
            {
              t: 'Lípidos, glicemia, hemoglobina',
              d: 'Anemia y tirotoxicosis empeoran la angina',
              say: 'Y exámenes de laboratorio: perfil lipídico, glicemia, hemograma. Una anemia o un hipertiroidismo pueden empeorar o desencadenar la angina.'
            }
          ]
        },
        {
          title: 'Diferencial',
          tag: 'Dolor de esfuerzo',
          kind: 'normal',
          items: [
            {
              t: 'Estenosis aórtica, miocardiopatía hipertrófica',
              d: 'También duelen con el esfuerzo',
              say: 'Dos enfermedades que también duelen con el esfuerzo son la estenosis aórtica y la miocardiopatía hipertrófica. Si hay un soplo, piensa en ellas antes que en la coronaria.'
            },
            {
              t: 'La NTG no es prueba diagnóstica',
              d: 'También alivia el espasmo esofágico',
              say: 'Y recuerda que la respuesta a la nitroglicerina no es una prueba diagnóstica, porque también alivia el espasmo del esófago.'
            }
          ]
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Ergometría',
      title: 'La primera prueba',
      cards: [
        {
          title: 'Test de esfuerzo',
          tag: 'Protocolo de Bruce',
          kind: 'key',
          items: [
            {
              t: 'Primera prueba si puede ejercitarse',
              d: 'ECG basal interpretable',
              say: 'La primera prueba, si el paciente puede ejercitarse y el electrocardiograma basal se puede interpretar, es el test de esfuerzo en cinta rodante con el protocolo de Bruce.'
            },
            {
              t: 'Positiva: infra ST ≥ 1 mm a 80 ms de J',
              d: 'Horizontal o descendente',
              say: 'Es positiva si aparece un infradesnivel del segmento ST de un milímetro o más, horizontal o descendente, medido ochenta milisegundos después del punto J. Mira este trazado tomado después del ejercicio: taquicardia sinusal con infradesnivel marcado del ST en las precordiales y en DI y aVL, y supradesnivel en aVR. Es la firma de la isquemia.',
              photo: {
                src: 'biblioteca/20_cardiologia/cardio-11/01_ecg-postejercicio-infradesnivel-st__stroobandt-ecg_p166.jpg',
                label: 'ECG tras esfuerzo: isquemia',
                at: 'Mira este trazado',
                credit: 'Stroobandt, Barold y Sinnaeve. ECG from Basics to Essentials (Wiley, 2016), p. 166'
              }
            }
          ]
        },
        {
          title: 'Alto riesgo',
          tag: 'Va a coronariografía',
          kind: 'alert',
          items: [
            {
              t: 'ST ≥ 2 mm o en ≥ 5 derivaciones',
              d: 'Precoz: estadio 1 (< 5 METs) o FC < 120',
              say: 'Son de alto riesgo el infradesnivel de dos milímetros o más, o en cinco o más derivaciones, y el que aparece precozmente, en el estadio uno de Bruce, con menos de cinco METs.'
            },
            {
              t: 'Caída de la PAS > 10 mmHg o TV',
              d: 'Falla contráctil isquémica',
              say: 'También la caída de la presión sistólica de más de diez milímetros de mercurio durante el esfuerzo, o una taquicardia ventricular. Cualquiera de estos lleva a coronariografía.'
            }
          ]
        }
      ]
    },
    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Ergometría de Bruce paso a paso',
      images: [
        {
          src: 'animaciones/cardio-11/A1_ergometria_bruce.mp4',
          label: 'Infradesnivel del ST y criterios de alto riesgo',
          credit: 'Gráfico propio con los criterios del libro'
        }
      ],
      steps: [
        {
          note: 'El ST baja con la frecuencia; la PAS cae',
          say: 'Mira cómo cambia el trazado. En reposo el segmento ST está en la línea de base. En el estadio uno aparece el infradesnivel, y al llegar a un milímetro la prueba es positiva. En el estadio dos baja a dos milímetros y la presión sistólica cae: son criterios de alto riesgo. Y en la recuperación el infradesnivel persiste unos minutos. Ese paciente va directo a coronariografía.'
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Cuando la ergometría no sirve',
      title: 'Imagen de estrés y angioTAC',
      cards: [
        {
          title: 'ECG no interpretable',
          tag: 'Contraindicaciones',
          kind: 'alert',
          items: [
            {
              t: 'BCRI, marcapaso, WPW, HVI, digoxina',
              d: 'El ST ya está alterado',
              say: 'La ergometría no sirve si el electrocardiograma basal no se puede interpretar: un bloqueo completo de rama izquierda, un marcapaso, una preexcitación, una hipertrofia ventricular con sobrecarga o el uso de digoxina. Tampoco si el paciente no puede ejercitarse.'
            },
            {
              t: 'Eco con dobutamina o cintigrafía',
              d: 'Estrés farmacológico si no puede ejercitarse',
              say: 'En esos casos se pide una imagen de estrés: ecocardiograma con dobutamina o cintigrafía de perfusión miocárdica. Con un bloqueo de rama izquierda, la clásica es el ecocardiograma de estrés.'
            }
          ]
        },
        {
          title: 'Cintigrafía de perfusión',
          tag: 'SPECT',
          kind: 'key',
          items: [
            {
              t: 'Defecto reversible = isquemia',
              d: 'Fijo = cicatriz',
              say: 'La cintigrafía compara la captación del trazador en esfuerzo y en reposo. Mira este estudio: el defecto de perfusión de la pared anterior y anteroseptal que aparece con el estrés. Si se corrige en reposo, es isquemia reversible; si se mantiene, es una cicatriz.',
              photo: {
                src: 'biblioteca/20_cardiologia/cardio-11/02_spect-estres-reposo-defecto-anterior__harrison_p1876.jpg',
                label: 'Cintigrafía SPECT',
                at: 'Mira este estudio',
                credit: 'Harrison. Principios de Medicina Interna, 21.ª ed., Fig. 241-5'
              }
            },
            {
              t: 'Útil también en la IC de origen isquémico',
              d: 'Viabilidad miocárdica',
              say: 'Sirve además para saber si una insuficiencia cardíaca es de origen isquémico y para ver si el músculo sigue vivo.'
            }
          ]
        },
        {
          title: 'AngioTAC coronario',
          tag: 'VPN > 98%',
          kind: 'normal',
          items: [
            {
              t: 'Descarta enfermedad en riesgo bajo o intermedio',
              d: 'Limita el calcio extenso',
              say: 'El angioTAC coronario tiene un valor predictivo negativo de más del noventa y ocho por ciento. Sirve para descartar enfermedad en el paciente de riesgo bajo a intermedio, aunque lo limitan el calcio extenso y la taquicardia.'
            }
          ]
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Coronariografía',
      title: 'Cuándo y cómo se lee el informe',
      cards: [
        {
          title: 'Indicaciones',
          tag: 'Derivar al cardiólogo',
          kind: 'key',
          items: [
            {
              t: 'Alto riesgo en pruebas no invasivas',
              d: 'Ergometría, SPECT o eco de estrés',
              say: 'Se deriva a coronariografía cuando hay criterios de alto riesgo en las pruebas no invasivas.'
            },
            {
              t: 'Angina refractaria o FEVI < 50% sin causa',
              d: 'Pese a terapia médica óptima',
              say: 'También si la angina persiste pese a la terapia médica óptima, o hay disfunción ventricular inexplicada con sospecha isquémica.'
            }
          ]
        },
        {
          title: 'El informe',
          tag: 'Interpreta y emplea',
          kind: 'criteria',
          items: [
            {
              t: 'Significativa: ≥ 70% (tronco ≥ 50%)',
              d: 'Intermedias 50-69%: FFR ≤ 0,80',
              say: 'El informe describe la arteria comprometida y el porcentaje de estenosis. Es significativa desde el setenta por ciento, o el cincuenta en el tronco. Mira esta coronariografía: las flechas marcan estenosis del tronco izquierdo y de la circunfleja. Las lesiones intermedias, entre cincuenta y sesenta y nueve, se evalúan con la reserva fraccional de flujo.',
              photo: {
                src: 'biblioteca/20_cardiologia/cardio-11/03_coronariografia-estenosis-tronco-circunfleja__harrison_p1883.jpg',
                label: 'Tronco y circunfleja',
                at: 'Mira esta coronariografía',
                credit: 'Harrison. Principios de Medicina Interna, 21.ª ed., Fig. 241-10'
              }
            },
            {
              t: 'FFR ≤ 0,80 = significativa',
              d: '1, 2 o 3 vasos; tronco y DA proximal',
              say: 'Aquí, una reserva de cero coma setenta y ocho: significativa, porque el límite es cero coma ochenta. La enfermedad se clasifica en uno, dos o tres vasos, y se informa si compromete el tronco o la descendente anterior proximal, que son hallazgos de alto riesgo.',
              photo: {
                src: 'biblioteca/20_cardiologia/cardio-11/04_ffr-0-78-estenosis-significativa__harrison_p1907.jpg',
                label: 'FFR 0,78',
                at: 'Aquí, una reserva',
                credit: 'Harrison. Principios de Medicina Interna, 21.ª ed., Fig. 242-8'
              }
            }
          ]
        },
        {
          title: 'Qué se decide',
          tag: 'Según la anatomía',
          kind: 'alert',
          items: [
            {
              t: '1-2 vasos sin tronco → stent',
              d: 'Farmacoactivo; SYNTAX bajo',
              say: 'Con enfermedad de uno o dos vasos sin tronco, se hace angioplastía con stent farmacoactivo.'
            },
            {
              t: 'Tronco o 3 vasos → by-pass',
              d: 'Diabético, FEVI baja, SYNTAX alto',
              say: 'Con tronco izquierdo o tres vasos, sobre todo en un diabético o con la fracción de eyección baja, se prefiere la cirugía de by-pass. Lo vemos en detalle en la próxima clase. Y el acceso es radial, con riesgo bajo de complicaciones.'
            }
          ]
        }
      ]
    },
    { type: 'pathway', intro: 'Armemos el árbol: de la angina típica a la revascularización.' },
    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Angina estable: dato, decisión, error',
      head: [ 'Dato', 'Decisión', 'Error típico' ],
      rows: [
        {
          cells: [ 'Angina típica, ECG normal', 'Ergometría', 'Troponinas o coronariografía directa' ],
          say: 'Angina típica con electrocardiograma normal: ergometría. Pedir troponinas o ir directo a coronariografía es el error.'
        },
        {
          cells: [ 'Ergometría con ST ≥ 2 mm', 'Coronariografía', 'Repetir otra prueba funcional' ],
          say: 'Ergometría con infradesnivel de dos milímetros o más: coronariografía. Repetir otra prueba funcional no cambia nada.'
        },
        {
          cells: [ 'Angina + BCRI', 'Eco con dobutamina o SPECT', 'Ergometría convencional' ],
          say: 'Angina con bloqueo de rama izquierda: eco de estrés o cintigrafía. La ergometría convencional no se puede interpretar.'
        },
        {
          cells: [ 'Dolor epigástrico de esfuerzo en diabético', 'Angina de pared inferior', 'Tratarlo como dispepsia' ],
          say: 'Dolor epigástrico de esfuerzo en un diabético: angina de pared inferior. Tratarlo como dispepsia es el error.'
        },
        {
          cells: [ 'Angina de reciente comienzo estable', 'Estudio ambulatorio', 'Hospitalizarlo siempre' ],
          say: 'Angina de reciente comienzo pero estable y de esfuerzos mayores: estudio ambulatorio. Si es grave y reciente, se maneja como inestable.'
        },
        {
          cells: [ 'Estenosis 50-69%', 'FFR ≤ 0,80', 'Considerarla no significativa' ],
          say: 'Estenosis intermedia, entre cincuenta y sesenta y nueve: se mide la reserva fraccional de flujo.'
        },
        {
          cells: [ 'Tronco ≥ 50% o 3 vasos en diabético', 'By-pass', 'Stent de rutina' ],
          say: 'Tronco izquierdo con cincuenta por ciento o más, o tres vasos en un diabético: by-pass, no stent de rutina.'
        }
      ]
    },
    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 61 años, hipertenso, diabético y fumador, consulta en su CESFAM por dolor retroesternal opresivo irradiado a la mandíbula desde hace 2 meses, que aparece al caminar tres cuadras a paso rápido y cede al sentarse en 4 minutos. PA 138/84 mmHg, FC 74 lpm, examen normal y ECG de reposo normal. La ergometría muestra, en el estadio 1 de Bruce, infradesnivel horizontal del ST de 2 mm en V4-V6 y una caída de la presión sistólica de 15 mmHg.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Repetir la ergometría en 3 meses' },
        { letter: 'B', text: 'Terapia médica óptima y derivar a coronariografía' },
        { letter: 'C', text: 'Solo terapia médica y control anual' },
        { letter: 'D', text: 'AngioTAC coronario para descartar enfermedad' },
        { letter: 'E', text: 'Holter de 24 horas' }
      ],
      correct: 'B',
      explanation: 'Angina típica (los tres criterios de Diamond-Forrester) con una ergometría de alto riesgo: infradesnivel de 2 mm en el estadio 1 de Bruce y caída de la presión sistólica. Se inicia terapia médica óptima (aspirina, estatina de alta potencia, betabloqueador, nitroglicerina) y se deriva a coronariografía, que decide stent o by-pass.',
      say: {
        stem: 'Un hombre de sesenta y un años, hipertenso, diabético y fumador, tiene desde hace dos meses un dolor opresivo que se irradia a la mandíbula, al caminar tres cuadras, y cede en cuatro minutos al sentarse. Su electrocardiograma de reposo es normal. En la ergometría aparece, ya en el estadio uno, un infradesnivel horizontal de dos milímetros en las precordiales laterales, y la presión sistólica cae quince milímetros de mercurio.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: repetir la ergometría; terapia médica óptima y coronariografía; solo terapia médica; angioTAC coronario; u Holter. Piénsalo.',
        answer: 'Es la B. Es una angina típica con una ergometría de alto riesgo: el infradesnivel de dos milímetros, la aparición precoz y la caída de la presión. Se inicia la terapia médica y se deriva a coronariografía. La D tienta porque el angioTAC sirve para descartar enfermedad, pero este paciente ya tiene una prueba de alto riesgo.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 2',
      stem: 'Un paciente de 55 años, con antecedentes de diabetes mellitus tipo 2, hipertensión arterial y tabaquismo de 20 paquetes-año, consulta por dolor torácico de localización precordial y carácter opresivo. El cuadro inició hace tres semanas, presentándose el dolor en relación con la actividad física y desapareciendo rápidamente con el reposo. Sus signos vitales muestran presión arterial 148/92 mmHg, frecuencia cardíaca 81 latidos por minuto y saturación arterial de oxígeno de 96%. Su examen cardiopulmonar no muestra alteraciones.',
      question: '¿Cuál es el examen de elección para precisar el diagnóstico?',
      options: [
        { letter: 'A', text: 'Coronariografía' },
        { letter: 'B', text: 'Cintigrafía miocárdica' },
        { letter: 'C', text: 'Angiorresonancia de arterias coronarias' },
        { letter: 'D', text: 'Test de esfuerzo' },
        { letter: 'E', text: 'Electrocardiograma de 24 horas (Holter)' }
      ],
      correct: 'D',
      explanation: 'Dolor opresivo con relación al esfuerzo que cede con el reposo es una angina crónica estable típica, y su estudio comienza con una prueba de esfuerzo. La coronariografía y la cintigrafía se piden si la prueba es de alto riesgo o no puede hacerse; el Holter busca arritmias.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un paciente de cincuenta y cinco años, con diabetes tipo dos, hipertensión y tabaquismo, consulta por tres semanas de dolor precordial opresivo que aparece con la actividad física y desaparece rápido con el reposo. Su examen cardiopulmonar es normal.',
        question: '¿Cuál es el examen de elección para precisar el diagnóstico?',
        options: 'Las opciones: coronariografía; cintigrafía miocárdica; angiorresonancia coronaria; test de esfuerzo; o Holter. Piénsalo.',
        answer: 'Es la D. Es una angina estable típica, y el estudio comienza con una prueba de esfuerzo. La A tienta porque es la prueba definitiva, pero la coronariografía se reserva para cuando la prueba funcional sale alterada o no se puede hacer.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 4',
      stem: 'Un paciente con antecedente de hipertensión arterial, dislipidemia y diabetes, usuario de aspirina, metformina, hidroclorotiazida y atorvastatina, presenta dolor torácico opresivo, que aparece al caminar 2 cuadras y alcanza un EVA de 5/10. Se solicita un test de esfuerzo que demuestra aparición de un infradesnivel del segmento ST, de 2 mm en las derivadas anteriores.',
      question: 'El examen más adecuado para proseguir el estudio es:',
      options: [
        { letter: 'A', text: 'Ecocardiograma' },
        { letter: 'B', text: 'TAC de tórax' },
        { letter: 'C', text: 'Ecocardiografía de esfuerzo' },
        { letter: 'D', text: 'Coronariografía' },
        { letter: 'E', text: 'Cintigrafía de perfesión miocárdica' }
      ],
      correct: 'D',
      explanation: 'Una ergometría con infradesnivel del ST de 2 mm, que es un criterio de alto riesgo, en un paciente con angina de esfuerzo obliga a definir la anatomía con coronariografía, que decide el tratamiento de revascularización. Repetir pruebas funcionales no cambia la conducta.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un paciente hipertenso, dislipidémico y diabético, que usa aspirina, metformina, hidroclorotiazida y atorvastatina, tiene un dolor opresivo al caminar dos cuadras. El test de esfuerzo muestra un infradesnivel del ST de dos milímetros en las derivaciones anteriores.',
        question: '¿Cuál es el examen más adecuado para proseguir el estudio?',
        options: 'Las opciones: ecocardiograma; TAC de tórax; ecocardiografía de esfuerzo; coronariografía; o cintigrafía de perfusión miocárdica. Piénsalo.',
        answer: 'Es la D. Una ergometría con dos milímetros de infradesnivel es de alto riesgo, y lo que sigue es la coronariografía para definir la anatomía. La C y la E tientan porque son pruebas de isquemia, pero ya tienes una prueba funcional alterada: repetirla no cambia la conducta.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 102',
      stem: 'Paciente de 70 años, con antecedentes de diabetes e hipertensión en tratamiento, con historia de dolor torácico que aparece al esfuerzo y cede espontáneamente, la cual se desencadena cada vez con menor esfuerzo, no asociado a otros síntomas. Actualmente se encuentra asintomático y su examen físico muestra ritmo regular en dos tiempos sin soplos, murmullo pulmonar presente sin ruidos asociados. Se realiza ECG que muestra ritmo regular y QRS ancho compatible con bloqueo completo de rama izquierda.',
      question: 'El examen más adecuado para continuar el estudio de este paciente es:',
      options: [
        { letter: 'A', text: 'Test de esfuerzo' },
        { letter: 'B', text: 'Ecocardiografía de estrés' },
        { letter: 'C', text: 'Enzimas cardiacas' },
        { letter: 'D', text: 'AngioTAC' },
        { letter: 'E', text: 'Coronariografía' }
      ],
      correct: 'B',
      explanation: 'El bloqueo completo de rama izquierda hace que el ECG de esfuerzo no sea interpretable, porque el ST ya está alterado en reposo: el estudio se hace con una imagen de estrés, por ejemplo el ecocardiograma con dobutamina. La ergometría convencional no sirve, y la coronariografía es un paso posterior si la prueba es de alto riesgo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Un paciente de setenta años, diabético e hipertenso, con dolor torácico de esfuerzo que cada vez aparece con menos actividad y está asintomático en el momento de la consulta. Su examen es normal y el electrocardiograma muestra un ritmo regular con QRS ancho, compatible con bloqueo completo de rama izquierda.',
        question: '¿Cuál es el examen más adecuado para continuar el estudio?',
        options: 'Las opciones: test de esfuerzo; ecocardiografía de estrés; enzimas cardíacas; angioTAC; o coronariografía. Piénsalo.',
        answer: 'Es la B. Con un bloqueo de rama izquierda el electrocardiograma de esfuerzo no se puede interpretar, así que se usa una imagen de estrés: el ecocardiograma con dobutamina. La A es la trampa: es la primera prueba de la angina estable, pero no cuando el ECG basal está alterado.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 118',
      stem: 'Paciente de 58 años, con antecedente de diabetes mellitus, hipertensión y fumador de 40 paquetes año, consulta por un cuadro de tres semanas de evolución de dolor epigástrico opresivo, asociado a disnea y palpitaciones regulares, que lo obligan a detenerse cada 100 metros de caminata y ceden con el reposo. En el examen físico, su presión arterial es 140/90 mmHg, frecuencia cardiaca de 80 latidos por minuto regular.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Angina crónica de reciente comienzo' },
        { letter: 'B', text: 'Fibrilación auricular paroxística' },
        { letter: 'C', text: 'Isquemia cardiaca con arritmia supraventricular' },
        { letter: 'D', text: 'Tromboembolismo pulmonar' },
        { letter: 'E', text: 'Insuficiencia cardíaca postinfarto' }
      ],
      correct: 'A',
      explanation: 'Un dolor opresivo, aquí epigástrico como equivalente anginoso de pared inferior, que aparece con el esfuerzo y cede con el reposo, de pocas semanas de evolución, en un diabético, hipertenso y fumador, es una angina crónica de reciente comienzo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un paciente de cincuenta y ocho años, diabético, hipertenso y fumador de cuarenta paquetes año, consulta por tres semanas de dolor epigástrico opresivo con disnea y palpitaciones regulares, que lo obligan a detenerse cada cien metros y ceden con el reposo. Su presión es de ciento cuarenta sobre noventa y su pulso es regular, de ochenta.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: angina crónica de reciente comienzo; fibrilación auricular paroxística; isquemia cardíaca con arritmia supraventricular; tromboembolismo pulmonar; o insuficiencia cardíaca postinfarto. Piénsalo.',
        answer: 'Es la A. El dolor se relaciona con el ejercicio y cede en reposo, y su ubicación epigástrica corresponde a una angina de pared inferior. Es de pocas semanas, por eso se llama de reciente comienzo. La B y la C tientan por las palpitaciones, pero el pulso es regular y lo que ordena el cuadro es la relación con el esfuerzo.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 180',
      stem: 'Un paciente de 65 años, hipertenso y diabético, consulta por disnea y dolor de precordial, que aparece en relación al ejercicio. Es usuario de aspirina, enalapril, metformina, glibenclamida y atorvastatina. Refiere que le es imposible subir más de dos pisos en su edificio o caminar más de dos cuadras sin detenerse, debido al dolor. Su examen físico es normal, al igual que su electrocardiograma.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Derivar a unidad de salud mental' },
        { letter: 'B', text: 'Solicitar test de esfuerzo' },
        { letter: 'C', text: 'Solicitar troponinas' },
        { letter: 'D', text: 'Indicar programa de ejercicios supervisados, con aumento progresivo' },
        { letter: 'E', text: 'Iniciar anticoagulación oral' }
      ],
      correct: 'B',
      explanation: 'Un paciente con dolor precordial de esfuerzo, ECG normal y capacidad funcional limitada a 2 cuadras tiene una angina estable; el siguiente paso es la ergometría. Pedir troponinas es para el dolor agudo, y la anticoagulación o los ejercicios supervisados no son el estudio.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un paciente de sesenta y cinco años, hipertenso y diabético, que usa aspirina, enalapril, metformina, glibenclamida y atorvastatina, tiene disnea y dolor precordial en relación con el ejercicio: no puede subir más de dos pisos ni caminar más de dos cuadras sin detenerse. Su examen físico y su electrocardiograma son normales.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: derivar a salud mental; solicitar un test de esfuerzo; solicitar troponinas; indicar ejercicios supervisados; o anticoagulación oral. Piénsalo.',
        answer: 'Es la B. Dolor de esfuerzo con electrocardiograma normal es una angina estable, y se estudia con un test de esfuerzo. La C tienta porque hay dolor torácico, pero las troponinas son para el dolor agudo, no para el estable.'
      }
    },
    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: angina estable',
      cards: [
        {
          title: 'Diagnóstico',
          tag: 'Clínica primero',
          kind: 'key',
          items: [
            {
              t: 'Típica: 3 criterios de Diamond-Forrester',
              d: 'Opresivo + esfuerzo + cede en reposo',
              say: 'Cerremos con las reglas de oro. La angina típica cumple los tres criterios: dolor opresivo, desencadenado por el esfuerzo y que cede con el reposo en menos de cinco minutos.'
            },
            {
              t: 'Ergometría primero; BCRI: eco de estrés',
              d: 'Positiva: ST ≥ 1 mm a 80 ms de J',
              say: 'La primera prueba es la ergometría. Si el electrocardiograma basal no sirve, eco de estrés o cintigrafía.'
            }
          ]
        },
        {
          title: 'Decisión',
          tag: 'Alto riesgo',
          kind: 'alert',
          items: [
            {
              t: 'ST ≥ 2 mm, precoz o caída de PAS',
              d: 'Coronariografía',
              say: 'Si la prueba es de alto riesgo, con infradesnivel de dos milímetros, precoz o con caída de la presión, el paso siguiente es la coronariografía.'
            },
            {
              t: 'Significativa ≥ 70%; tronco ≥ 50%; FFR ≤ 0,80',
              d: '1-2 vasos → stent; tronco o 3 vasos → by-pass',
              say: 'Una estenosis es significativa desde el setenta por ciento, o el cincuenta en el tronco. Con uno o dos vasos, stent; con tronco o tres vasos en un diabético, by-pass. Si te llevas una sola idea de hoy: la angina estable se estudia primero con una prueba de esfuerzo, y la coronariografía llega solo cuando esa prueba lo justifica. Nos vemos en la próxima clase.'
            }
          ]
        }
      ]
    }
  ],
  pathway: {
    title: 'Angina crónica estable: del síntoma a la coronariografía',
    root: {
      k: 'start',
      t: 'Dolor de esfuerzo que cede',
      s: 'Clasificar con Diamond-Forrester',
      say: 'Llega un paciente con dolor de esfuerzo que cede con el reposo. Lo primero es clasificarlo con los tres criterios de Diamond y Forrester, y pedir electrocardiograma de reposo y ecocardiograma.',
      kids: [
        [
          'ECG basal interpretable, puede ejercitarse',
          {
            k: 'do',
            t: 'Ergometría de Bruce',
            s: 'Primera prueba',
            say: 'Si puede ejercitarse y el electrocardiograma basal es interpretable, pides una ergometría de Bruce.',
            kids: [
              [
                'Alto riesgo',
                {
                  k: 'alert',
                  t: 'Coronariografía',
                  s: 'Según anatomía: stent o by-pass',
                  say: 'Si hay infradesnivel de dos milímetros, aparición precoz o caída de la presión, vas a coronariografía.',
                  kids: []
                }
              ],
              [
                'Positiva de riesgo intermedio o bajo',
                {
                  k: 'ok',
                  t: 'Terapia médica óptima',
                  s: 'Control de factores de riesgo',
                  say: 'Si es positiva pero no de alto riesgo, o negativa con dolor típico, inicias terapia médica óptima y controlas.',
                  kids: []
                }
              ]
            ]
          }
        ],
        [
          'ECG no interpretable o no puede ejercitarse',
          {
            k: 'do',
            t: 'Imagen de estrés',
            s: 'Eco con dobutamina o SPECT',
            say: 'Si hay bloqueo de rama izquierda, marcapaso, preexcitación o no puede ejercitarse, pides ecocardiograma con dobutamina o cintigrafía de perfusión.',
            kids: [
              [
                'Isquemia extensa',
                {
                  k: 'refer',
                  t: 'Derivar a coronariografía',
                  s: 'Alto riesgo isquémico',
                  say: 'Si la imagen muestra isquemia extensa, derivas a coronariografía.',
                  kids: []
                }
              ],
              [
                'Sin isquemia',
                {
                  k: 'ok',
                  t: 'Terapia médica óptima',
                  s: 'Buscar otras causas',
                  say: 'Si no hay isquemia, terapia médica y se buscan otras causas del dolor.',
                  kids: []
                }
              ]
            ]
          }
        ],
        [
          'Riesgo bajo, quiere descartar enfermedad',
          {
            k: 'ok',
            t: 'AngioTAC coronario',
            s: 'VPN > 98%',
            say: 'En un paciente de riesgo bajo a intermedio, el angioTAC coronario permite descartar enfermedad por su valor predictivo negativo.',
            kids: []
          }
        ]
      ]
    }
  }
};
