// Clase 2.3 (Cardiología) — Angina crónica estable: terapia médica óptima, revascularización y prevención secundaria. Guion docente
// escrito a mano. Fuente clínica: books/scripts/dataset_cardiologia_bloque_2.cjs (cardio-12, tier 2). Código: 1.01.1.001 Angina crónica
// estable (Dx específico · Tx inicial · Seguimiento completo), según books/data/v3_codemap.json.
// Preguntas: el banco real no tiene una pregunta de tratamiento de la angina estable con clave coherente. Diciembre 2019 P82 («angina estable
// con lovastatina y aspirina, qué fármaco agregar»: la clave del banco es dinitrato de isosorbide, pero la primera línea antianginosa es el
// betabloqueador) quedó descartada y anotada como clave dudosa. Se usan las 4 preguntas del libro, con la etiqueta «Banco EUNACOM · Caso
// representativo» y sin inventar fecha (las dos últimas y la del asma son nuevas del libro reescrito).
// Fotos en contexto: Harrison 21.ª ed., Fig. 273-5 (angioplastía frente a by-pass) en classes/media/biblioteca/20_cardiologia/cardio-12/.
// En movimiento: scenes/cardio_b2.html ?v=placa (placa estable, demanda y aporte de O₂, betabloqueador; Blausen «Coronary Circulation
// (Anterior)», CC BY 3.0). No repite la oclusión de cardio-14 A2.

module.exports = {
  id: 'cardio-12',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fármacos que reducen la mortalidad, fármacos que alivian el dolor y cuándo corresponde un stent o un by-pass',
      say: 'Bienvenido. En la clase anterior diagnosticamos la angina estable. Hoy la tratamos, y aquí se juega la mortalidad de tu paciente. El examen pregunta tres cosas: qué fármacos reducen la mortalidad y cuáles solo alivian el dolor, qué das cuando el betabloqueador no se puede usar, y cuándo corresponde un stent o un by-pass.'
    },
    {
      type: 'flow',
      kicker: 'Dos objetivos',
      title: 'Vivir más y vivir sin dolor',
      nodes: [
        { id: 'a', col: 0, row: 2, k: 'start', t: 'Angina estable', s: 'Confirmada' },
        { id: 'p', col: 2, row: 0, k: 'good', t: 'Pronóstico', s: 'Reducen infarto y muerte' },
        { id: 's', col: 2, row: 4, k: 'mech', t: 'Síntomas', s: 'Alivian, no cambian la sobrevida' },
        { id: 'p2', col: 4, row: 0, k: 'good', t: 'Aspirina + estatina', s: 'IECA o ARA II según el caso' },
        { id: 's2', col: 4, row: 4, k: 'trap', t: 'Nitratos, BCC, ivabradina', s: 'Ranolazina, trimetazidina' }
      ],
      edges: [ { from: 'a', to: 'p' }, { from: 'a', to: 's' }, { from: 'p', to: 'p2' }, { from: 's', to: 's2' } ],
      steps: [
        {
          show: [ 'a', 'p', 'p2' ],
          note: 'Pronóstico: aspirina y estatina',
          say: 'El tratamiento persigue dos objetivos a la vez. El primero es el pronóstico: reducir el infarto y la mortalidad, y eso lo logran la aspirina y las estatinas, más el inhibidor del sistema renina-angiotensina cuando hay indicación.'
        },
        {
          show: [ 's', 's2' ],
          note: 'Síntomas: no cambian la sobrevida',
          say: 'El segundo son los síntomas. Los nitratos, los calcioantagonistas, la ivabradina, la ranolazina y la trimetazidina mejoran la tolerancia al esfuerzo, pero no han demostrado reducir la mortalidad. Esa es la diferencia que más se pregunta.'
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Para todos',
      title: 'Fármacos que reducen el infarto y la muerte',
      cards: [
        {
          title: 'Antiagregar y bajar el LDL',
          tag: 'Obligatorios',
          kind: 'pharma',
          items: [
            {
              t: 'Aspirina 100 mg al día, de por vida',
              d: 'Clopidogrel 75 mg si no la tolera',
              say: 'Aspirina, cien miligramos al día, de por vida. Si hay intolerancia o alergia gástrica grave demostrada, clopidogrel setenta y cinco miligramos. Una molestia gástrica leve se maneja con un inhibidor de la bomba de protones, no se suspende la aspirina.'
            },
            {
              t: 'Atorvastatina 40-80 o rosuvastatina 20-40',
              d: 'Meta LDL < 55 y reducción ≥ 50%',
              say: 'Una estatina de alta potencia: atorvastatina cuarenta a ochenta miligramos, o rosuvastatina veinte a cuarenta. La meta es un colesterol LDL menor de cincuenta y cinco miligramos por decilitro y una reducción de al menos cincuenta por ciento. Si no se logra, se agrega ezetimibe.'
            }
          ]
        },
        {
          title: 'Inhibidores del SRAA',
          tag: 'Según el paciente',
          kind: 'criteria',
          items: [
            {
              t: 'Enalapril 10-20 mg o losartán 50-100 mg',
              d: 'Obligatorios si HTA, DM, ERC o FEVI ≤ 40%',
              say: 'Enalapril o losartán son obligatorios si el paciente tiene hipertensión, diabetes, enfermedad renal crónica o una fracción de eyección de cuarenta por ciento o menos.'
            },
            {
              t: 'Cesar el tabaco, PA < 130/80, rehabilitación',
              d: 'SGLT2 o GLP-1 en el diabético',
              say: 'Y no olvides el resto: dejar de fumar, que es lo de mayor impacto, presión menor de ciento treinta sobre ochenta, rehabilitación cardíaca y, en el diabético, los inhibidores de SGLT dos o los agonistas del receptor de GLP uno.'
            }
          ]
        }
      ]
    },
    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Placa estable: por qué duele con el esfuerzo',
      images: [
        {
          src: 'animaciones/cardio-12/A1_placa_estable_esfuerzo.mp4',
          label: 'Demanda, aporte de oxígeno y betabloqueador',
          credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios'
        }
      ],
      steps: [
        {
          note: 'Aporte fijo, demanda variable; el betabloqueador baja la demanda',
          say: 'Mira la descendente anterior con una placa fija que reduce la luz. En reposo, el aporte alcanza. Al hacer ejercicio sube la frecuencia, la demanda de oxígeno se dispara, pero el aporte no puede subir más allá de la estenosis. Aparece la isquemia, el infradesnivel del ST y el dolor. Al reposar o con nitroglicerina, cede. Y cuando damos un betabloqueador, la frecuencia sube menos con el mismo esfuerzo: baja la demanda y desaparece la isquemia.'
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Antianginosos',
      title: 'Para los síntomas',
      cards: [
        {
          title: 'Primera línea',
          tag: 'Betabloqueador',
          kind: 'pharma',
          items: [
            {
              t: 'Bisoprolol 5-10 mg · atenolol · metoprolol',
              d: 'Cardioselectivos; FC de reposo 55-60',
              say: 'La primera línea antianginosa es un betabloqueador cardioselectivo: bisoprolol, atenolol o metoprolol succinato. Baja la frecuencia y la contractilidad, y alarga la diástole, que es cuando se perfunde la coronaria. La meta es una frecuencia de reposo de cincuenta y cinco a sesenta.'
            },
            {
              t: 'Prohibido en asma grave, BAV, bradicardia',
              d: 'Entonces: amlodipino',
              say: 'Está contraindicado en el asma grave, el bloqueo auriculoventricular y la bradicardia. En esos casos, la alternativa de primera línea es un calcioantagonista, el amlodipino.'
            }
          ]
        },
        {
          title: 'Segunda línea',
          tag: 'Si persisten los síntomas',
          kind: 'criteria',
          items: [
            {
              t: 'Amlodipino + nitrato de acción larga',
              d: 'Sin verapamilo ni diltiazem con BB',
              say: 'Si persisten los síntomas, se asocia amlodipino o un nitrato de acción larga, como el isosorbide cada doce horas, con un intervalo nocturno sin nitrato para evitar la tolerancia. Verapamilo y diltiazem no se combinan con un betabloqueador, por el riesgo de bradicardia y bloqueo.'
            },
            {
              t: 'Ivabradina, ranolazina, trimetazidina',
              d: 'Mejoran tolerancia, no mortalidad',
              say: 'Después vienen la ivabradina, la ranolazina y la trimetazidina. Mejoran la tolerancia al esfuerzo, no la mortalidad. Una angina refractaria a dos o tres antianginosos es una indicación de coronariografía.'
            }
          ]
        },
        {
          title: 'La crisis',
          tag: 'Nitroglicerina',
          kind: 'alert',
          items: [
            {
              t: 'NTG sublingual 0,6 mg SOS',
              d: 'Cada 5 min, hasta 3 dosis',
              say: 'La crisis se trata con nitroglicerina sublingual, seiscientos microgramos, repetida cada cinco minutos hasta tres dosis. Se puede usar también antes de un esfuerzo conocido.'
            },
            {
              t: 'Prohibida con sildenafil o tadalafil',
              d: '24 h y 48 h; tampoco con hipotensión',
              say: 'Está contraindicada si tomó sildenafil en las últimas veinticuatro horas o tadalafil en las últimas cuarenta y ocho, y en hipotensión, estenosis aórtica grave o infarto del ventrículo derecho. Y una crisis que no cede con tres dosis en quince minutos es un posible infarto: ambulancia y urgencia.'
            }
          ]
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Revascularización',
      title: 'Stent o by-pass',
      cards: [
        {
          title: 'Cuándo se indica',
          tag: 'No reemplaza la terapia médica',
          kind: 'key',
          items: [
            {
              t: 'Mejora síntomas; pronóstico en casos selectos',
              d: 'Tronco, 3 vasos con FEVI baja, isquemia extensa',
              say: 'La revascularización no reemplaza a la terapia médica. En la angina estable mejora los síntomas, y solo en algunos pacientes mejora el pronóstico: tronco izquierdo, tres vasos con disfunción ventricular o isquemia extensa.'
            },
            {
              t: 'La terapia médica sigue después',
              d: 'También con stent o by-pass',
              say: 'Y la terapia médica óptima continúa siempre, también después de un stent o un by-pass, porque el stent trata una lesión, no la enfermedad.'
            }
          ]
        },
        {
          title: 'Angioplastía con stent',
          tag: '1-2 vasos sin tronco',
          kind: 'criteria',
          items: [
            {
              t: 'Stent farmacoactivo; SYNTAX ≤ 22',
              d: 'Trata la lesión culpable',
              say: 'La angioplastía con stent farmacoactivo es de elección en la enfermedad de uno o dos vasos sin compromiso del tronco, con un puntaje SYNTAX bajo.'
            },
            {
              t: 'Doble antiagregación 6 meses (12 si SCA)',
              d: 'Aspirina de por vida',
              say: 'Después del stent se usa doble antiagregación por seis meses en la angina estable, doce si fue por un síndrome coronario agudo, y aspirina de por vida. Suspenderla antes de tiempo puede causar una trombosis del stent.'
            }
          ]
        },
        {
          title: 'By-pass',
          tag: 'Anatomía compleja',
          kind: 'alert',
          items: [
            {
              t: 'Tronco ≥ 50% o 3 vasos',
              d: 'Diabético o FEVI baja; SYNTAX ≥ 33',
              say: 'La cirugía de by-pass es de elección en el tronco izquierdo con estenosis de cincuenta por ciento o más, y en enfermedad de tres vasos en diabéticos o con la fracción de eyección deprimida, con puntaje SYNTAX alto. Mira este esquema: arriba el stent trata la lesión culpable; abajo el injerto se coloca por delante de las lesiones, de modo que protege la arteria completa, incluso las lesiones futuras.',
              photo: {
                src: 'biblioteca/20_cardiologia/cardio-12/01_angioplastia-vs-bypass__harrison_p2086.jpg',
                label: 'Stent frente a by-pass',
                at: 'Mira este esquema',
                credit: 'Harrison. Principios de Medicina Interna, 21.ª ed., Fig. 273-5'
              }
            },
            {
              t: 'Arteria mamaria a la descendente anterior',
              d: 'Más venas safenas o radial',
              say: 'El injerto de elección es la arteria mamaria interna a la descendente anterior, con venas safenas o arteria radial para las otras ramas. Y la aspirina no se suspende antes de la cirugía.'
            }
          ]
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Errores que el examen castiga',
      title: 'Lo que no se hace',
      cards: [
        {
          title: 'Fármacos',
          tag: 'Trampas',
          kind: 'alert',
          items: [
            {
              t: 'Verapamilo o diltiazem + betabloqueador',
              d: 'Bradicardia y bloqueo AV',
              say: 'No se asocia verapamilo o diltiazem a un betabloqueador. Tampoco un betabloqueador no selectivo al asmático o al paciente con vasoespasmo.'
            },
            {
              t: 'Nitrato tras sildenafil',
              d: 'Hipotensión refractaria',
              say: 'No se da nitroglicerina a quien tomó sildenafil o tadalafil. Y no se confunde un antianginoso con un fármaco que reduce la mortalidad.'
            }
          ]
        },
        {
          title: 'Conducta',
          tag: 'Seguimiento',
          kind: 'normal',
          items: [
            {
              t: 'Suspender el clopidogrel tras el stent',
              d: 'Trombosis del stent = infarto',
              say: 'No se suspende la doble antiagregación después de un stent antes de la fecha indicada: la trombosis del stent se presenta como un infarto con supradesnivel.'
            },
            {
              t: 'Angina que se acelera o aparece en reposo',
              d: 'Es angina inestable: urgencia',
              say: 'Y si los síntomas se aceleran o aparecen en reposo, es una angina inestable, y se deriva de urgencia. Es el tema de la próxima clase.'
            }
          ]
        }
      ]
    },
    { type: 'pathway', intro: 'Armemos el árbol: de la angina confirmada al tratamiento.' },
    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Angina estable: tratamiento, dato, decisión, error',
      head: [ 'Dato', 'Decisión', 'Error típico' ],
      rows: [
        {
          cells: [ 'Qué reduce la mortalidad', 'Aspirina y estatina de alta potencia', 'Nitratos, diltiazem o trimetazidina' ],
          say: 'Qué reduce la mortalidad: aspirina y estatina de alta potencia. El error es creer que los nitratos o el diltiazem lo hacen.'
        },
        {
          cells: [ 'Angina + asma grave', 'Amlodipino', 'Bisoprolol, atenolol o propranolol' ],
          say: 'Angina con asma grave: amlodipino. Darle un betabloqueador es el error, incluso uno cardioselectivo.'
        },
        {
          cells: [ 'Diabetes, HTA, ERC o FEVI ≤ 40%', 'Agregar IECA o ARA II', 'Omitirlo' ],
          say: 'Con diabetes, hipertensión, enfermedad renal o fracción de eyección baja, se agrega un inhibidor del SRAA.'
        },
        {
          cells: [ 'Crisis tras sildenafil', 'No dar nitroglicerina', 'Dar nitroglicerina sublingual' ],
          say: 'Crisis después de sildenafil: no se da nitroglicerina. Es una pregunta clásica.'
        },
        {
          cells: [ '1-2 vasos sin tronco', 'Stent farmacoactivo', 'By-pass de rutina' ],
          say: 'Uno o dos vasos sin tronco: stent farmacoactivo. El by-pass de rutina es el error.'
        },
        {
          cells: [ 'Tronco ≥ 50% o 3 vasos en diabético', 'By-pass con arteria mamaria', 'Stent solo' ],
          say: 'Tronco izquierdo de cincuenta por ciento o más, o tres vasos en un diabético: by-pass con arteria mamaria.'
        },
        {
          cells: [ 'LDL sobre 55 con estatina máxima', 'Agregar ezetimibe', 'Suspender la estatina' ],
          say: 'Si el colesterol LDL sigue sobre cincuenta y cinco con la estatina al máximo, se agrega ezetimibe.'
        }
      ]
    },
    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 61 años, hipertenso, diabético y fumador, con angina estable de clase II-III confirmada por ergometría. Recibe losartán 50 mg y metformina. Su c-LDL es de 148 mg/dL, su FC de reposo de 82 lpm y su PA de 142/86 mmHg. No tiene asma ni bloqueo AV. La coronariografía mostró lesiones significativas en la descendente anterior proximal y en la circunfleja, con tronco izquierdo sano y FEVI de 55%.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Aspirina, atorvastatina 80 mg, bisoprolol, nitroglicerina SOS y angioplastía con stent' },
        { letter: 'B', text: 'Solo nitroglicerina SOS y control en 6 meses' },
        { letter: 'C', text: 'Cirugía de by-pass de inmediato, sin terapia médica previa' },
        { letter: 'D', text: 'Verapamilo asociado a bisoprolol' },
        { letter: 'E', text: 'Aspirina, clopidogrel y enoxaparina' }
      ],
      correct: 'A',
      explanation: 'Se inicia terapia médica óptima: aspirina 100 mg, atorvastatina 80 mg (meta LDL < 55), bisoprolol con meta de FC 55-60 y nitroglicerina sublingual SOS, manteniendo el bloqueador del SRAA; se suspende el tabaco y se deriva a rehabilitación. Con enfermedad de dos vasos sin tronco, FEVI conservada y SYNTAX bajo, corresponde angioplastía con stent farmacoactivo, con doble antiagregación por 6 meses y aspirina de por vida.',
      say: {
        stem: 'Un hombre de sesenta y un años, hipertenso, diabético y fumador, con una angina estable ya confirmada. Su colesterol LDL es de ciento cuarenta y ocho, su frecuencia de reposo de ochenta y dos y su presión de ciento cuarenta y dos sobre ochenta y seis. No tiene asma. La coronariografía muestra lesiones significativas en la descendente anterior proximal y en la circunfleja, con tronco sano y fracción de eyección de cincuenta y cinco.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: terapia médica óptima y stent; solo nitroglicerina; by-pass inmediato; verapamilo con bisoprolol; o aspirina, clopidogrel y enoxaparina. Piénsalo.',
        answer: 'Es la A. Inicias de inmediato la terapia médica óptima: aspirina, atorvastatina de ochenta, bisoprolol y nitroglicerina. Y como tiene dos vasos sin tronco, con la función conservada, corresponde un stent farmacoactivo. La C tienta, pero el by-pass se reserva para el tronco o los tres vasos. Y la D es el error clásico: verapamilo con betabloqueador.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Paciente portador de angina crónica estable en tratamiento.',
      question: '¿Cuál de los siguientes fármacos ha demostrado reducir de forma categórica la mortalidad a largo plazo y la tasa de infarto agudo al miocardio en pacientes portadores de angina crónica estable?',
      options: [
        { letter: 'A', text: 'Atorvastatina en dosis de alta potencia (80 mg al día)' },
        { letter: 'B', text: 'Nitroglicerina sublingual en esquema fijo tres veces al día' },
        { letter: 'C', text: 'Diltiazem oral en monoterapia' },
        { letter: 'D', text: 'Mononitrato de isosorbide 20 mg cada 12 horas' },
        { letter: 'E', text: 'Trimetazidina 35 mg cada 12 horas' }
      ],
      correct: 'A',
      explanation: 'Las estatinas de alta potencia y la aspirina son los pilares que han demostrado modificar la historia natural de la cardiopatía coronaria: estabilizan la placa y reducen el infarto y la mortalidad cardiovascular. Los nitratos, los calcioantagonistas y la trimetazidina son antianginosos sintomáticos: mejoran la tolerancia al esfuerzo pero no la sobrevida.',
      say: {
        stem: 'Un caso representativo del banco. Se pregunta cuál fármaco ha demostrado reducir la mortalidad a largo plazo y el infarto en la angina crónica estable.',
        question: '¿Cuál de los siguientes fármacos ha demostrado reducir de forma categórica la mortalidad a largo plazo y la tasa de infarto agudo al miocardio en pacientes portadores de angina crónica estable?',
        options: 'Las opciones: atorvastatina en dosis alta; nitroglicerina sublingual fija; diltiazem; mononitrato de isosorbide; o trimetazidina. Piénsalo.',
        answer: 'Es la A. La estatina de alta potencia, junto con la aspirina, es lo que cambia la historia natural de la enfermedad. La B tienta porque la nitroglicerina es el fármaco de la angina, pero los nitratos, el diltiazem y la trimetazidina solo mejoran la tolerancia al esfuerzo, no la sobrevida.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Una mujer de 58 años con angina estable de clase II, asma bronquial persistente grave con sibilancias frecuentes y diabetes, ya recibe aspirina y atorvastatina.',
      question: '¿Qué fármaco antianginoso corresponde agregar como primera línea?',
      options: [
        { letter: 'A', text: 'Propranolol' },
        { letter: 'B', text: 'Bisoprolol' },
        { letter: 'C', text: 'Amlodipino' },
        { letter: 'D', text: 'Atenolol' },
        { letter: 'E', text: 'Sotalol' }
      ],
      correct: 'C',
      explanation: 'El betabloqueador es la primera línea antianginosa, pero está contraindicado en el asma grave broncoespástica, incluso los cardioselectivos en dosis altas. En ese caso la alternativa de primera línea es un calcioantagonista, en la práctica el amlodipino. Propranolol y sotalol son betabloqueadores no selectivos.',
      say: {
        stem: 'Una mujer de cincuenta y ocho años tiene angina estable de clase dos, y además un asma persistente grave con sibilancias frecuentes y diabetes. Ya usa aspirina y atorvastatina.',
        question: '¿Qué fármaco antianginoso corresponde agregar como primera línea?',
        options: 'Las opciones: propranolol; bisoprolol; amlodipino; atenolol; o sotalol. Piénsalo.',
        answer: 'Es la C. El betabloqueador es la primera línea, pero el asma grave lo contraindica, y entonces corresponde un calcioantagonista como el amlodipino. La B tienta porque el bisoprolol es cardioselectivo, pero en un asma grave sigue siendo peligroso. Propranolol y sotalol, además, no son selectivos.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un hombre de 62 años con angina estable consulta por una crisis de dolor torácico opresivo de 10 minutos que no cede con reposo. Refiere que hace 3 horas tomó sildenafil.',
      question: '¿Qué fármaco está contraindicado en este momento?',
      options: [
        { letter: 'A', text: 'Aspirina masticada' },
        { letter: 'B', text: 'Nitroglicerina sublingual' },
        { letter: 'C', text: 'Atorvastatina' },
        { letter: 'D', text: 'Clopidogrel' },
        { letter: 'E', text: 'Enoxaparina' }
      ],
      correct: 'B',
      explanation: 'Los nitratos están contraindicados hasta 24 horas después de sildenafil (48 horas con tadalafil) por el riesgo de hipotensión grave refractaria. Además, una crisis de más de 10-20 minutos que no cede con el reposo exige descartar un síndrome coronario agudo con ECG y troponina.',
      say: {
        stem: 'Un hombre de sesenta y dos años con angina estable consulta por una crisis de dolor opresivo de diez minutos que no cede con el reposo. Tomó sildenafil hace tres horas.',
        question: '¿Qué fármaco está contraindicado en este momento?',
        options: 'Las opciones: aspirina masticada; nitroglicerina sublingual; atorvastatina; clopidogrel; o enoxaparina. Piénsalo.',
        answer: 'Es la B. El sildenafil potencia el efecto vasodilatador de los nitratos y puede producir una hipotensión grave. Está prohibida la nitroglicerina hasta veinticuatro horas después, o cuarenta y ocho con tadalafil. Y esta crisis, que no cede con el reposo, hay que estudiarla como un posible síndrome coronario agudo.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un diabético de 64 años con angina estable limitante tiene una coronariografía que muestra estenosis de 60% del tronco coronario izquierdo, estenosis de 80% de la descendente anterior proximal y de 75% de la coronaria derecha, con FEVI de 38%.',
      question: '¿Cuál es el método de revascularización de elección?',
      options: [
        { letter: 'A', text: 'Angioplastía con stent farmacoactivo del tronco únicamente' },
        { letter: 'B', text: 'Cirugía de by-pass aortocoronario' },
        { letter: 'C', text: 'Solo terapia médica óptima, sin revascularización' },
        { letter: 'D', text: 'Fibrinólisis con tenecteplase' },
        { letter: 'E', text: 'Balón de contrapulsación intraaórtico permanente' }
      ],
      correct: 'B',
      explanation: 'Enfermedad del tronco izquierdo (estenosis ≥ 50%) con tres vasos en un diabético con disfunción ventricular y anatomía compleja (SYNTAX alto): cirugía de by-pass con arteria mamaria interna, que mejora la sobrevida frente al stent. La fibrinólisis solo se usa en el infarto con supradesnivel del ST.',
      say: {
        stem: 'Un diabético de sesenta y cuatro años, con angina limitante. La coronariografía muestra estenosis de sesenta por ciento del tronco izquierdo, ochenta de la descendente anterior proximal y setenta y cinco de la coronaria derecha, con fracción de eyección de treinta y ocho por ciento.',
        question: '¿Cuál es el método de revascularización de elección?',
        options: 'Las opciones: stent del tronco únicamente; cirugía de by-pass; solo terapia médica; fibrinólisis; o balón de contrapulsación permanente. Piénsalo.',
        answer: 'Es la B. Tronco izquierdo con cincuenta por ciento o más, más tres vasos, en un diabético con la fracción de eyección baja: es la anatomía de la cirugía de by-pass, con arteria mamaria. La A tienta porque el stent es menos invasivo, pero con esta complejidad el by-pass mejora la sobrevida.'
      }
    },
    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: tratamiento de la angina estable',
      cards: [
        {
          title: 'Pronóstico',
          tag: 'Para todos',
          kind: 'key',
          items: [
            {
              t: 'Aspirina 100 mg + atorvastatina 40-80 mg',
              d: 'LDL < 55; IECA o ARA II según el caso',
              say: 'Cerremos con las reglas de oro. Aspirina y estatina de alta potencia para todos, porque son lo que reduce el infarto y la muerte. El inhibidor del sistema renina-angiotensina, si hay hipertensión, diabetes, enfermedad renal o fracción baja.'
            },
            {
              t: 'Los antianginosos no reducen mortalidad',
              d: 'Solo alivian síntomas',
              say: 'Los antianginosos mejoran la tolerancia, pero no la sobrevida.'
            }
          ]
        },
        {
          title: 'Síntomas y anatomía',
          tag: 'Decisiones',
          kind: 'alert',
          items: [
            {
              t: 'Betabloqueador primero; si no, amlodipino',
              d: 'NTG SOS: nunca con sildenafil',
              say: 'El betabloqueador es la primera línea, con meta de frecuencia de cincuenta y cinco a sesenta. Si no se puede, amlodipino. Y la nitroglicerina nunca con sildenafil o tadalafil.'
            },
            {
              t: '1-2 vasos → stent; tronco o 3 vasos → by-pass',
              d: 'La terapia médica sigue siempre',
              say: 'Uno o dos vasos sin tronco, stent; tronco o tres vasos en un diabético, by-pass. Si te llevas una sola idea de hoy: lo que alivia el dolor no es lo que alarga la vida, y por eso la aspirina y la estatina no se negocian. Nos vemos en la próxima clase.'
            }
          ]
        }
      ]
    }
  ],
  pathway: {
    title: 'Angina crónica estable: tratamiento y revascularización',
    root: {
      k: 'start',
      t: 'Angina estable confirmada',
      s: 'Terapia médica óptima para todos',
      say: 'Un paciente con angina estable confirmada. Todos reciben terapia médica óptima: aspirina, estatina de alta potencia, y el inhibidor del sistema renina-angiotensina si hay hipertensión, diabetes, enfermedad renal o fracción baja.',
      kids: [
        [
          'Sin asma, bradicardia ni bloqueo AV',
          {
            k: 'do',
            t: 'Bisoprolol',
            s: 'Meta FC de reposo 55-60',
            say: 'Si no tiene contraindicaciones, el betabloqueador cardioselectivo es la primera línea antianginosa. Si persisten los síntomas, agregas amlodipino o un nitrato de acción larga, pero nunca verapamilo ni diltiazem junto al betabloqueador.',
            kids: []
          }
        ],
        [
          'Asma grave, BAV o bradicardia',
          {
            k: 'ok',
            t: 'Amlodipino',
            s: 'Primera línea alternativa',
            say: 'Si el betabloqueador está contraindicado, el amlodipino es la alternativa de primera línea.',
            kids: []
          }
        ],
        [
          'Crisis anginosa',
          {
            k: 'alert',
            t: 'NTG sublingual 0,6 mg',
            s: 'Hasta 3 dosis; no con sildenafil',
            say: 'Para la crisis, nitroglicerina sublingual, hasta tres dosis cada cinco minutos, y nunca con sildenafil o tadalafil. Si no cede, urgencia.',
            kids: []
          }
        ],
        [
          'Sigue limitante o alto riesgo',
          {
            k: 'alert',
            t: 'Coronariografía',
            s: 'Elegir según anatomía',
            say: 'Si sigue limitante pese a la terapia, o hay alto riesgo, derivas a coronariografía, que decide el método.',
            kids: [
              [
                '1-2 vasos sin tronco',
                {
                  k: 'ok',
                  t: 'Stent farmacoactivo',
                  s: 'Doble antiagregación 6 meses',
                  say: 'Con uno o dos vasos sin tronco, angioplastía con stent y doble antiagregación por seis meses.',
                  kids: []
                }
              ],
              [
                'Tronco ≥ 50% o 3 vasos',
                {
                  k: 'refer',
                  t: 'By-pass con arteria mamaria',
                  s: 'Diabético o FEVI baja',
                  say: 'Con tronco izquierdo de cincuenta por ciento o más, o tres vasos en un diabético, cirugía de by-pass.',
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
