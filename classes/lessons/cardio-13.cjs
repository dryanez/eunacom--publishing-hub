// Clase 2.4 (Cardiología) — SCA sin supradesnivel del ST: angina inestable e infarto sin supradesnivel. Guion docente escrito a mano.
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_2.cjs (cardio-13, tier 2). Códigos: 1.01.2.001 Angina inestable (Dx específico ·
// Tx inicial · Seguimiento derivar) y 1.01.4.009 Enzimas cardíacas (interpreta y emplea), según books/data/v3_codemap.json.
// Preguntas: el banco real (class_questions.cjs cardio-13 y búsqueda por «troponina|ticagrelor|angina inestable|infradesnivel|TIMI|GRACE|
// fondaparinux|enoxaparina») no tiene ninguna pregunta de SCASEST con clave coherente: Julio 2013 P16 tiene SCASEST como distractor de una
// disección y Diciembre 2024 P43 (cocaína) no es del tema. Se usan las 4 preguntas del libro, con la etiqueta «Banco EUNACOM · Caso
// representativo», y la voz no inventa fecha.
// Fotos en contexto: ECG con T negativas por angina inestable (Stroobandt p. 164) y trombosis coronaria incompleta y completa (Pathoma,
// p. 75, Fig. 8.1), en classes/media/biblioteca/20_cardiologia/cardio-13/. En movimiento: scenes/cardio_b2.html ?v=scasest (Blausen
// «Coronary Circulation (Anterior)», CC BY 3.0; trombo blanco suboclusivo, microembolia, ECG y troponina).

module.exports = {
  id: 'cardio-13',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Angina inestable e infarto sin supradesnivel: cómo se diferencian, cómo se tratan y cuándo va a coronariografía',
      say: 'Bienvenido. Ya vimos el dolor torácico agudo, la angina estable y su tratamiento. Hoy vemos el síndrome coronario agudo sin supradesnivel del ST, que es mucho más frecuente que el infarto con supradesnivel y mucho más fácil de pasar por alto. El examen pregunta tres cosas: cómo se diferencian la angina inestable y el infarto, cómo se estratifica el riesgo, y qué tratamiento se da. Y una trampa: la fibrinólisis no se usa.'
    },
    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Un trombo blanco que no cierra del todo',
      nodes: [
        { id: 'p', col: 0, row: 1, k: 'cause', t: 'Placa vulnerable', s: 'Rotura o erosión' },
        { id: 't', col: 1, row: 1, k: 'mech', t: 'Trombo blanco', s: 'Plaquetas; suboclusivo' },
        { id: 'e', col: 2, row: 0, k: 'effect', t: 'Microembolia distal', s: 'Troponina sube: IAMSEST' },
        { id: 'i', col: 2, row: 2, k: 'effect', t: 'Isquemia sin necrosis', s: 'Troponina normal: angina inestable' },
        { id: 'x', col: 4, row: 1, k: 'trap', t: 'No fibrinolizar', s: 'Antiagregar y anticoagular' }
      ],
      edges: [ { from: 'p', to: 't' }, { from: 't', to: 'e' }, { from: 't', to: 'i' }, { from: 'e', to: 'x' }, { from: 'i', to: 'x' } ],
      steps: [
        {
          show: [ 'p', 't' ],
          note: 'La placa se rompe; el trombo es parcial',
          say: 'Todo parte igual que en el infarto con supradesnivel: una placa vulnerable que se rompe o se erosiona. La diferencia es el trombo. Aquí es un trombo blanco, rico en plaquetas, que deja la arteria parcialmente abierta. Mira esta pieza: arriba, un trombo que ocupa solo parte de la luz, que es el síndrome sin supradesnivel; abajo, la oclusión completa del infarto con supradesnivel.',
          photo: {
            src: 'biblioteca/20_cardiologia/cardio-13/02_trombo-coronario-incompleto-vs-completo__pathoma_p75.jpg',
            label: 'Trombo incompleto y completo',
            at: 'Mira esta pieza',
            credit: 'Pathoma (Sattar), Cardiac Pathology, p. 75, Fig. 8.1'
          }
        },
        {
          show: [ 'e', 'i' ],
          note: 'Troponina: la diferencia entre angina e infarto',
          say: 'El trombo suelta microémbolos hacia distal. Si hay necrosis, la troponina sube: es un infarto sin supradesnivel. Si solo hay isquemia, la troponina es normal: es una angina inestable. El tratamiento es el mismo.'
        },
        {
          show: [ 'x' ],
          note: 'Sin fibrinólisis',
          say: 'Y como la arteria no está ocluida por completo, la fibrinólisis no sirve y solo aumenta el sangrado. Se antiagrega y se anticoagula.'
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Clínica y ECG',
      title: 'Cómo se presenta',
      cards: [
        {
          title: 'Angina inestable',
          tag: 'Criterios de Braunwald',
          kind: 'criteria',
          items: [
            {
              t: 'De reposo, > 20 minutos',
              d: 'Dolor típico sin esfuerzo',
              say: 'La angina inestable tiene cuatro formas de presentación. La de reposo: un dolor típico de más de veinte minutos sin esfuerzo.'
            },
            {
              t: 'De reciente comienzo (clase III-IV, < 2 meses)',
              d: 'Nueva y grave',
              say: 'La de reciente comienzo: una angina nueva, grave, de clase tres o cuatro, en los últimos dos meses.'
            },
            {
              t: 'En crescendo y post-IAM',
              d: 'Más frecuente, o < 2 semanas del infarto',
              say: 'La angina en crescendo: una angina estable que de pronto aumenta en frecuencia, duración o intensidad. Y la angina post infarto, que reaparece dentro de las dos primeras semanas.'
            }
          ]
        },
        {
          title: 'El electrocardiograma',
          tag: 'Sin supradesnivel',
          kind: 'key',
          items: [
            {
              t: 'Infradesnivel ≥ 0,5 mm o T negativa',
              d: 'Puede ser normal en la mitad',
              say: 'El electrocardiograma muestra infradesnivel del ST de medio milímetro o más, o inversión de la onda T, o puede ser normal en la mitad de los casos. Mira este trazado de una angina inestable: ondas T negativas en DI, aVL y de V dos a V seis, con inversión terminal en V dos y V tres.',
              photo: {
                src: 'biblioteca/20_cardiologia/cardio-13/01_ecg-t-negativas-angina-inestable__stroobandt-ecg_p164.jpg',
                label: 'T negativas en angina',
                at: 'Mira este trazado',
                credit: 'Stroobandt, Barold y Sinnaeve. ECG from Basics to Essentials (Wiley, 2016), p. 164'
              }
            },
            {
              t: 'Wellens: T profundas V2-V3',
              d: 'Estenosis crítica de la DA proximal',
              say: 'Si las T negativas profundas están en V dos y V tres, es el patrón de Wellens, que indica una estenosis crítica de la descendente anterior proximal. Y un supradesnivel de aVR con infradesnivel difuso sugiere tronco o tres vasos.'
            }
          ]
        }
      ]
    },
    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Trombo blanco, microembolia y troponina',
      images: [
        {
          src: 'animaciones/cardio-13/A1_trombo_blanco_scasest.mp4',
          label: 'SCASEST: de la placa rota al tratamiento',
          credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios'
        }
      ],
      steps: [
        {
          note: 'Placa rota, trombo parcial, ECG y troponina',
          say: 'Veamos la secuencia. La placa se rompe y se forma el trombo, pero la sangre sigue pasando, más lenta. Los microémbolos viajan hacia distal y aparece una isquemia subendocárdica, con infradesnivel del ST y T negativa. Si la troponina se mantiene normal, es una angina inestable; si sube, es un infarto sin supradesnivel.'
        },
        {
          note: 'Tratamiento y coronariografía',
          say: 'Se da doble antiagregación y anticoagulante, nunca fibrinólisis. Y la coronariografía es en menos de dos horas si hay muy alto riesgo, o en menos de veinticuatro si es de alto riesgo.'
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Troponina 0/1 h y clasificación de Killip',
      cards: [
        {
          title: 'Troponina ultrasensible',
          tag: 'Como en la clase 2.1',
          kind: 'key',
          items: [
            {
              t: 'Rule-out: basal muy bajo o sin delta',
              d: 'GRACE bajo y asintomático',
              say: 'La troponina ultrasensible se mide a las cero y a la una hora. Si el valor basal es muy bajo, o casi no cambió, y el paciente está asintomático con bajo riesgo, se descarta el infarto. Pero una troponina normal en un cuadro típico no descarta una angina inestable.'
            },
            {
              t: 'Rule-in: basal alto o delta marcado',
              d: 'IAMSEST: hospitalizar',
              say: 'Si el valor basal es muy alto, o el cambio es marcado, se confirma el infarto sin supradesnivel, y se hospitaliza en unidad coronaria.'
            }
          ]
        },
        {
          title: 'Killip-Kimball',
          tag: 'Pronóstico',
          kind: 'criteria',
          items: [
            {
              t: 'I sin IC · II crépitos o R3',
              d: 'III edema pulmonar · IV shock',
              say: 'La clasificación de Killip estima la mortalidad. Killip uno, sin insuficiencia cardíaca. Killip dos, crépitos basales o tercer ruido. Killip tres, edema agudo de pulmón. Killip cuatro, shock cardiogénico, con presión sistólica menor de noventa, frialdad y oliguria.'
            },
            {
              t: 'IC, shock o arritmia maligna: muy alto riesgo',
              d: 'Coronariografía inmediata',
              say: 'Un síndrome sin supradesnivel con insuficiencia cardíaca, shock o una arritmia maligna es de muy alto riesgo.'
            }
          ]
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Estratificación',
      title: 'TIMI, GRACE y CRUSADE',
      cards: [
        {
          title: 'Puntaje TIMI',
          tag: '0 a 7',
          kind: 'criteria',
          items: [
            {
              t: 'Edad ≥ 65 · ≥ 3 factores de riesgo',
              d: 'Estenosis ≥ 50% previa · aspirina en 7 días',
              say: 'El puntaje TIMI suma un punto por cada variable. Edad de sesenta y cinco o más. Tres o más factores de riesgo. Una estenosis coronaria conocida de cincuenta por ciento o más. Uso de aspirina en los últimos siete días.'
            },
            {
              t: '≥ 2 episodios en 24 h · ST ≥ 0,5 mm · troponina',
              d: '0-2 bajo · 3-4 intermedio · 5-7 alto',
              say: 'Dos o más episodios de angina en veinticuatro horas. Desviación del ST de medio milímetro o más. Y troponina elevada. De cero a dos puntos es riesgo bajo, de tres a cuatro intermedio y de cinco a siete alto.'
            }
          ]
        },
        {
          title: 'GRACE y CRUSADE',
          tag: 'Isquemia y sangrado',
          kind: 'key',
          items: [
            {
              t: 'GRACE > 140: alto riesgo isquémico',
              d: '< 109 bajo riesgo',
              say: 'El puntaje GRACE estima la mortalidad. Más de ciento cuarenta define alto riesgo isquémico, y menos de ciento nueve es riesgo bajo.'
            },
            {
              t: 'CRUSADE: riesgo de sangrado',
              d: 'Elegir fondaparinux y acceso radial',
              say: 'Y el puntaje CRUSADE estima el riesgo de sangrado, y orienta a elegir el anticoagulante de menor riesgo, el fondaparinux, y el acceso radial.'
            }
          ]
        }
      ]
    },
    {
      type: 'points',
      kicker: 'Tratamiento inmediato',
      title: 'Antiagregar, anticoagular y aliviar',
      cards: [
        {
          title: 'Doble antiagregación',
          tag: '12 meses',
          kind: 'pharma',
          items: [
            {
              t: 'Aspirina 250-500 mg masticada',
              d: 'Luego 100 mg al día de por vida',
              say: 'Primero aspirina, doscientos cincuenta a quinientos miligramos masticada, y después cien miligramos al día de por vida.'
            },
            {
              t: 'Ticagrelor 180 mg; luego 90 c/12 h',
              d: 'Clopidogrel 300-600 mg si no se puede',
              say: 'Segundo antiagregante: ticagrelor, ciento ochenta miligramos de carga y noventa cada doce horas, que es de primera línea porque reduce la mortalidad y el infarto recurrente. Si no se puede o el paciente está anticoagulado, clopidogrel trescientos a seiscientos miligramos de carga.'
            }
          ]
        },
        {
          title: 'Anticoagulación',
          tag: 'Parenteral',
          kind: 'pharma',
          items: [
            {
              t: 'Fondaparinux 2,5 mg al día SC',
              d: 'De elección: menor sangrado',
              say: 'Como anticoagulante, el fondaparinux, dos coma cinco miligramos al día por vía subcutánea, es de elección por su menor riesgo de sangrado.'
            },
            {
              t: 'Enoxaparina 1 mg/kg c/12 h',
              d: 'c/24 h si VFG < 30; HNF si ACTP inmediata',
              say: 'La alternativa es enoxaparina un miligramo por kilo cada doce horas, una vez al día si la función renal es menor de treinta. Si se hará una angioplastía inmediata, heparina no fraccionada en el procedimiento.'
            }
          ]
        },
        {
          title: 'Antiisquémicos',
          tag: 'Y estatina',
          kind: 'normal',
          items: [
            {
              t: 'NTG, betabloqueador oral, atorvastatina 80 mg',
              d: 'BB si no hay IC, shock ni bradicardia',
              say: 'Nitroglicerina si hay dolor persistente, betabloqueador oral precoz si no hay insuficiencia cardíaca, shock ni bradicardia, y atorvastatina ochenta miligramos desde las primeras veinticuatro horas. Oxígeno solo si la saturación es menor de noventa.'
            },
            {
              t: 'Fibrinólisis: contraindicada',
              d: 'Trombo suboclusivo',
              say: 'Y recuerda: la fibrinólisis está contraindicada en este síndrome.'
            }
          ]
        }
      ]
    },
    {
      type: 'flow',
      kicker: 'Coronariografía',
      title: 'Cuándo va el paciente a hemodinamia',
      nodes: [
        { id: 'r', col: 0, row: 2, k: 'start', t: 'SCASEST estratificado', s: 'Killip, TIMI, GRACE' },
        { id: 'a', col: 2, row: 0, k: 'alert', t: 'Muy alto riesgo: < 2 h', s: 'Shock, dolor refractario, arritmia, IC' },
        { id: 'b', col: 2, row: 2, k: 'effect', t: 'Alto riesgo: < 24 h', s: 'GRACE > 140, troponina o ST dinámico' },
        { id: 'c', col: 2, row: 4, k: 'good', t: 'Bajo riesgo: selectiva', s: 'TIMI 0-1, GRACE < 109, troponina negativa' },
        { id: 'd', col: 4, row: 2, k: 'refer', t: 'Stent o by-pass', s: 'Según anatomía (clase 2.3)' }
      ],
      edges: [ { from: 'r', to: 'a' }, { from: 'r', to: 'b' }, { from: 'r', to: 'c' }, { from: 'a', to: 'd' }, { from: 'b', to: 'd' } ],
      steps: [
        {
          show: [ 'r', 'a' ],
          note: 'Muy alto riesgo: menos de 2 horas',
          say: 'La estrategia depende del riesgo. En el muy alto riesgo, con shock o inestabilidad, dolor refractario a nitratos, arritmias ventriculares malignas o insuficiencia cardíaca aguda, la coronariografía es inmediata, en menos de dos horas.'
        },
        {
          show: [ 'b', 'd' ],
          note: 'Alto riesgo: menos de 24 horas',
          say: 'En el alto riesgo, con GRACE sobre ciento cuarenta, troponina elevada con curva o cambios dinámicos del ST, es precoz, en menos de veinticuatro horas. Después se decide stent o by-pass según la anatomía, como vimos en la clase anterior.'
        },
        {
          show: [ 'c' ],
          note: 'Bajo riesgo: selectiva',
          say: 'En el bajo riesgo, con TIMI de cero a uno, GRACE menor de ciento nueve y troponina negativa, la estrategia es selectiva, tras una prueba no invasiva. Tú inicias el tratamiento y derivas al centro con hemodinamia según este riesgo.'
        }
      ]
    },
    { type: 'pathway', intro: 'Armemos el árbol: del dolor sin supradesnivel a la coronariografía.' },
    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'SCASEST: dato, decisión, error',
      head: [ 'Dato', 'Decisión', 'Error típico' ],
      rows: [
        {
          cells: [ 'Dolor de reposo, troponina normal', 'Angina inestable: tratar como SCASEST', 'Dar de alta' ],
          say: 'Dolor de reposo con troponina normal es angina inestable y se maneja como un síndrome coronario agudo. Dar de alta es el error.'
        },
        {
          cells: [ 'Infradesnivel + troponina que sube y cae', 'IAMSEST: DAPT + anticoagulante', 'Fibrinólisis' ],
          say: 'Infradesnivel con troponina que sube y cae: infarto sin supradesnivel. Doble antiagregación y anticoagulante. La fibrinólisis es el error.'
        },
        {
          cells: [ 'Antiagregante de elección', 'Ticagrelor 180 mg', 'Clopidogrel sin motivo' ],
          say: 'El segundo antiagregante de elección es el ticagrelor. Clopidogrel solo si el ticagrelor no se puede usar.'
        },
        {
          cells: [ 'Anticoagulante de menor sangrado', 'Fondaparinux 2,5 mg', 'Enoxaparina sin ajustar a la VFG' ],
          say: 'El anticoagulante con menor sangrado es el fondaparinux. La enoxaparina se ajusta si la filtración es menor de treinta.'
        },
        {
          cells: [ 'Shock, dolor refractario, arritmia maligna', 'Coronariografía < 2 h', 'Esperar 24 horas' ],
          say: 'Shock, dolor refractario o arritmia maligna: coronariografía en menos de dos horas. Esperar veinticuatro es el error.'
        },
        {
          cells: [ 'GRACE > 140 o troponina con curva', 'Coronariografía < 24 h', 'Estrategia selectiva' ],
          say: 'GRACE sobre ciento cuarenta o troponina con curva: coronariografía en menos de veinticuatro horas.'
        },
        {
          cells: [ 'Infra V1-V3 con R altas', 'Infarto posterior: tratar como SCACEST', 'Tratarlo como SCASEST' ],
          say: 'Infradesnivel de V uno a V tres con R altas: es un infarto posterior, que se trata como con supradesnivel.'
        }
      ]
    },
    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 68 años, hipertensa y dislipidémica, consulta por tres episodios de dolor retroesternal opresivo de 25 minutos, en reposo, en las últimas 12 horas. El ECG muestra infradesnivel del ST de 1,5 mm en V4-V6. La primera troponina ultrasensible es de 48 pg/mL (referencia < 14) y a la hora aumenta a 85 pg/mL. PA 150/85 mmHg, FC 82 lpm, pulmones limpios.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        {
          letter: 'A',
          text: 'Hospitalizar en unidad coronaria, aspirina, ticagrelor, fondaparinux o enoxaparina, atorvastatina, y coronariografía en < 24 horas'
        },
        { letter: 'B', text: 'Tenecteplase y traslado' },
        { letter: 'C', text: 'Alta con ergometría ambulatoria' },
        { letter: 'D', text: 'Solo aspirina y control en 48 horas' },
        { letter: 'E', text: 'Repetir la troponina a las 24 horas antes de decidir' }
      ],
      correct: 'A',
      explanation: 'Infradesnivel del ST con troponina que sube: IAMSEST. Su TIMI es 5 (edad ≥ 65, ≥ 3 factores de riesgo, infradesnivel, troponina positiva y ≥ 2 episodios en 24 horas): alto riesgo. Se hospitaliza en unidad coronaria con aspirina, ticagrelor, anticoagulación parenteral y atorvastatina 80 mg, y se programa coronariografía en las primeras 24 horas. La fibrinólisis está contraindicada.',
      say: {
        stem: 'Una mujer de sesenta y ocho años, hipertensa y dislipidémica, tuvo tres episodios de dolor opresivo de reposo en doce horas. El electrocardiograma muestra infradesnivel del ST de uno coma cinco milímetros en las precordiales laterales, y la troponina ultrasensible sube de cuarenta y ocho a ochenta y cinco.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: hospitalizar con doble antiagregación, anticoagulante, estatina y coronariografía precoz; tenecteplase; alta con ergometría; solo aspirina; o repetir la troponina a las veinticuatro horas. Piénsalo.',
        answer: 'Es la A. Es un infarto sin supradesnivel. Su puntaje TIMI es cinco: edad, factores de riesgo, infradesnivel, troponina y dos episodios de angina. Alto riesgo, entonces hospitalización, tratamiento antitrombótico y coronariografía en menos de veinticuatro horas. La B es la trampa: la fibrinólisis está contraindicada.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 64 años con dolor torácico opresivo de reposo prolongado ingresa a urgencias. El ECG muestra infradesnivel del ST de 2 mm en derivaciones DII, DIII y aVF. Troponinas ultrasensibles positivas.',
      question: '¿Cuál es el esquema antitrombótico inicial más adecuado mientras se programa la coronariografía?',
      options: [
        { letter: 'A', text: 'Aspirina 250 mg + Ticagrelor 180 mg + Enoxaparina 1 mg/kg subcutánea' },
        { letter: 'B', text: 'Aspirina 100 mg en monoterapia oral' },
        { letter: 'C', text: 'Trombólisis con Tenecteplase endovenoso inmediato' },
        { letter: 'D', text: 'Heparina no fraccionada en infusión sin antiagregantes plaquetarios' },
        { letter: 'E', text: 'Acenocumarol oral para alcanzar INR de 2.5' }
      ],
      correct: 'A',
      explanation: 'El pilar del SCASEST confirmado es la triple terapia antitrombótica inicial: doble antiagregación (aspirina más ticagrelor) y anticoagulación parenteral (enoxaparina o fondaparinux). La trombólisis está contraindicada en el SCASEST y solo se usa en el SCACEST; la monoterapia, la heparina sin antiagregantes y los antagonistas de la vitamina K no corresponden a la fase aguda.',
      say: {
        stem: 'Un caso representativo del banco. Un hombre de sesenta y cuatro años ingresa con dolor opresivo de reposo prolongado. El electrocardiograma muestra infradesnivel del ST de dos milímetros en la cara inferior y las troponinas ultrasensibles son positivas.',
        question: '¿Cuál es el esquema antitrombótico inicial más adecuado mientras se programa la coronariografía?',
        options: 'Las opciones: aspirina, ticagrelor y enoxaparina; aspirina sola; tenecteplase; heparina sin antiagregantes; o acenocumarol. Piénsalo.',
        answer: 'Es la A. Es un infarto sin supradesnivel, y se trata con doble antiagregación más un anticoagulante parenteral, mientras se programa la coronariografía. La C tienta porque hay infradesnivel y troponina positiva, pero la fibrinólisis está contraindicada en este síndrome: el trombo es blanco y suboclusivo.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Se compara el riesgo de cinco pacientes con síndrome coronario agudo sin supradesnivel del ST.',
      question: '¿Cuál de los siguientes pacientes con SCASEST tiene indicación de coronariografía invasiva urgente en MENOS de 2 horas?',
      options: [
        {
          letter: 'A',
          text: 'Paciente con dolor torácico persistente refractario al tratamiento médico e inestabilidad hemodinámica'
        },
        { letter: 'B', text: 'Paciente de 60 años asintomático tras recibir nitroglicerina con TIMI de 2 puntos' },
        { letter: 'C', text: 'Paciente con dolor torácico autolimitado y troponinas negativas' },
        { letter: 'D', text: 'Paciente hipertenso con ECG normal y dolor atípico' },
        { letter: 'E', text: 'Paciente con Score GRACE de 110 puntos sin nuevos episodios de dolor' }
      ],
      correct: 'A',
      explanation: 'La coronariografía inmediata (< 2 horas) se reserva para los criterios de muy alto riesgo: shock cardiogénico o inestabilidad hemodinámica, dolor torácico refractario a nitratos y analgesia, arritmias ventriculares malignas o insuficiencia cardíaca aguda secundaria a isquemia. Los demás pacientes son de riesgo intermedio o bajo y se estudian en < 24 horas o de forma selectiva.',
      say: {
        stem: 'Un caso representativo del banco. Se pregunta cuál de cinco pacientes con síndrome coronario sin supradesnivel necesita coronariografía en menos de dos horas.',
        question: '¿Cuál de estos pacientes con síndrome coronario sin supradesnivel tiene indicación de coronariografía urgente en menos de dos horas?',
        options: 'Las opciones: dolor persistente refractario con inestabilidad; asintomático con TIMI de dos; dolor autolimitado con troponinas negativas; ECG normal con dolor atípico; o GRACE de ciento diez sin dolor. Piénsalo.',
        answer: 'Es la A. El dolor refractario al tratamiento y la inestabilidad hemodinámica son criterios de muy alto riesgo, y exigen coronariografía inmediata. Los demás son de riesgo bajo o intermedio. La B tienta porque tuvo dolor, pero está asintomático y con un puntaje TIMI bajo.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 58 años, diabético, consulta por dos episodios de dolor opresivo en reposo de 30 minutos en las últimas 24 horas. El ECG muestra ondas T negativas de V2 a V5. La troponina ultrasensible es normal en las mediciones de las 0 y 3 horas.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Infarto agudo con supradesnivel del ST' },
        { letter: 'B', text: 'Angina inestable' },
        { letter: 'C', text: 'Angina crónica estable' },
        { letter: 'D', text: 'Pericarditis aguda' },
        { letter: 'E', text: 'Infarto sin supradesnivel del ST (IAMSEST)' }
      ],
      correct: 'B',
      explanation: 'Un dolor anginoso de reposo prolongado con ondas T negativas dinámicas, sin elevación de troponina en la curva, es una angina inestable: isquemia sin necrosis. Con troponina elevada y con curva sería un IAMSEST. La angina crónica estable es de esfuerzo y breve, y no cursa con cambios dinámicos del ECG ni dolor de reposo.',
      say: {
        stem: 'Un caso representativo del banco. Un hombre diabético de cincuenta y ocho años tiene dos episodios de dolor opresivo de reposo, de treinta minutos, en las últimas veinticuatro horas. El electrocardiograma muestra ondas T negativas de V dos a V cinco, y la troponina ultrasensible es normal a las cero y a las tres horas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: infarto con supradesnivel; angina inestable; angina estable; pericarditis; o infarto sin supradesnivel. Piénsalo.',
        answer: 'Es la B. Dolor de reposo prolongado con T negativas y troponina normal en la curva es una angina inestable: isquemia sin necrosis. La E tienta, pero para que fuera un infarto sin supradesnivel la troponina tendría que subir y bajar.'
      }
    },
    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Mujer de 70 años con infradesnivel del ST y troponina elevada recibe aspirina, ticagrelor y enoxaparina. Un residente propone agregar tenecteplase porque el dolor persiste hace 6 horas.',
      question: '¿Cuál es la respuesta más adecuada?',
      options: [
        { letter: 'A', text: 'Está indicada la fibrinólisis porque el dolor persiste' },
        {
          letter: 'B',
          text: 'La fibrinólisis está contraindicada en el SCASEST; corresponde coronariografía urgente si el dolor persiste'
        },
        { letter: 'C', text: 'Se debe reemplazar el ticagrelor por estreptoquinasa' },
        { letter: 'D', text: 'Se debe suspender la anticoagulación y esperar la evolución' },
        { letter: 'E', text: 'Se debe esperar 72 horas y repetir la troponina' }
      ],
      correct: 'B',
      explanation: 'En el SCASEST el trombo es suboclusivo y la fibrinólisis solo aumenta el sangrado sin beneficio. El dolor refractario con tratamiento médico es un criterio de muy alto riesgo y exige coronariografía inmediata (< 2 horas).',
      say: {
        stem: 'Un caso representativo del banco. Una mujer de setenta años con infradesnivel del ST y troponina elevada recibe aspirina, ticagrelor y enoxaparina. El dolor persiste hace seis horas, y un residente propone tenecteplase.',
        question: '¿Cuál es la respuesta más adecuada?',
        options: 'Las opciones: fibrinólisis porque el dolor persiste; fibrinólisis contraindicada y coronariografía urgente; estreptoquinasa en vez de ticagrelor; suspender la anticoagulación; o esperar setenta y dos horas. Piénsalo.',
        answer: 'Es la B. En el síndrome sin supradesnivel el trombo es blanco y suboclusivo, y la fibrinólisis solo suma sangrado. El dolor que persiste pese al tratamiento es un criterio de muy alto riesgo: coronariografía inmediata. La A es la trampa del residente.'
      }
    },
    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: SCA sin supradesnivel',
      cards: [
        {
          title: 'Reconocer',
          tag: 'Troponina por curva',
          kind: 'key',
          items: [
            {
              t: 'Angina inestable: troponina normal',
              d: 'IAMSEST: sube y cae',
              say: 'Cerremos con las reglas de oro. La angina inestable no eleva la troponina; el infarto sin supradesnivel sí, con una curva. Y un primer electrocardiograma o una primera troponina normales no descartan nada: se repiten.'
            },
            {
              t: 'TIMI 5-7 o GRACE > 140: alto riesgo',
              d: 'Killip por clínica',
              say: 'El riesgo se estima con TIMI, GRACE y Killip.'
            }
          ]
        },
        {
          title: 'Tratar',
          tag: 'Sin fibrinólisis',
          kind: 'alert',
          items: [
            {
              t: 'Aspirina + ticagrelor + fondaparinux o enoxaparina',
              d: 'Atorvastatina 80 mg; BB oral si no hay IC',
              say: 'Se trata con aspirina, ticagrelor y un anticoagulante parenteral, más estatina y, si no hay contraindicación, betabloqueador.'
            },
            {
              t: 'Coronariografía: < 2 h o < 24 h',
              d: 'Fibrinólisis contraindicada',
              say: 'La coronariografía es en menos de dos horas si el riesgo es muy alto y en menos de veinticuatro si es alto. Si te llevas una sola idea de hoy: sin supradesnivel no se fibrinoliza, se antiagrega, se anticoagula y se estratifica el riesgo. Nos vemos en la próxima clase.'
            }
          ]
        }
      ]
    }
  ],
  pathway: {
    title: 'Síndrome coronario sin supradesnivel: del ECG a la coronariografía',
    root: {
      k: 'start',
      t: 'Dolor anginoso sin supradesnivel',
      s: 'ECG + troponina 0/1 h',
      say: 'Un paciente con dolor anginoso agudo y un electrocardiograma sin supradesnivel. Mides la troponina a las cero y a la una hora, y repites el electrocardiograma.',
      kids: [
        [
          'Troponina normal, bajo riesgo',
          {
            k: 'ok',
            t: 'Descartado: estudio ambulatorio',
            s: 'Si sigue asintomático',
            say: 'Si el valor basal es muy bajo, no cambia, y el paciente está asintomático con bajo riesgo, se descarta el infarto y se hace un estudio ambulatorio. Una troponina normal con dolor de reposo es una angina inestable.',
            kids: []
          }
        ],
        [
          'Troponina normal, dolor de reposo o crescendo',
          {
            k: 'do',
            t: 'Angina inestable',
            s: 'Se maneja como SCASEST',
            say: 'Si la troponina es normal pero el dolor es de reposo, de reciente comienzo o en crescendo, es una angina inestable: se hospitaliza y se trata igual.',
            kids: []
          }
        ],
        [
          'Troponina sube y cae',
          {
            k: 'alert',
            t: 'IAMSEST',
            s: 'Aspirina + ticagrelor + anticoagulante',
            say: 'Si la troponina sube y cae, es un infarto sin supradesnivel. Das aspirina, ticagrelor y fondaparinux o enoxaparina, con atorvastatina, y nunca fibrinólisis.',
            kids: [
              [
                'Shock, dolor refractario, arritmia, IC aguda',
                {
                  k: 'refer',
                  t: 'Coronariografía < 2 horas',
                  s: 'Muy alto riesgo',
                  say: 'Si hay shock, dolor refractario, arritmia maligna o insuficiencia cardíaca aguda, coronariografía inmediata, en menos de dos horas.',
                  kids: []
                }
              ],
              [
                'GRACE > 140, troponina o ST dinámico',
                {
                  k: 'refer',
                  t: 'Coronariografía < 24 horas',
                  s: 'Alto riesgo',
                  say: 'Si el riesgo es alto, con GRACE sobre ciento cuarenta, coronariografía en menos de veinticuatro horas.',
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
