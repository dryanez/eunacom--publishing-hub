// ============================================================================
// BLOQUE 04 REUMATOLOGÍA: ESPONDILOARTRITIS Y ENFERMEDAD DE BEHÇET
// Manual EUNACOM 2026 · Tomo 09 Reumatología & Inmunología Clínica
// 5 Temas Curriculares (9.16 a 9.20) · 12 Preguntas Oficiales EUNACOM
// ============================================================================

const { flow } = require('./dataset_reumatologia_bloque_1.cjs');

const bloque4Classes = [
  {
    id: 'reuma-16', classId: 'reuma-16', tier: 2,
    blockNum: 4, blockName: 'Espondiloartritis Seronegativas y Enfermedad de Behçet',
    topicLabel: '9.16',
    title: 'Espondiloartritis: Concepto Unificador, HLA-B27 y Lumbago Inflamatorio vs Mecánico',
    perfilCode: '1.05.1.001', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica en generalidad · Manejo en APS y derivación a reumatología',
    reconstrucciones: 'EUNACOM 2017 Q#14 · EUNACOM 2020 Q#29 · EUNACOM 2023 Q#07',
    frecuencia: 'Alta · La distinción entre lumbago mecánico e inflamatorio es una de las preguntas fijas del examen',
    svg: null, algoTitle: 'Diferenciación Clínica: Lumbago Inflamatorio (Espondiloartropatía) vs Mecánico',
    diagram: flow('Algoritmo de Lumbago Inflamatorio', [
      { k: 'box', t: 'Dolor Lumbar Crónico (> 3 meses) en Paciente Menor de 45 Años', s: 'Identificación semiológica de banderas rojas inflamatorias según criterios ASAS', type: 'acc' },
      { k: 'split', q: 'Características del Dolor y Comportamiento con el Ejercicio', s: 'Diferenciación clínica cardinal inmediata',
        ll: 'Lumbago Inflamatorio (Criterios ASAS)',
        left: { t: 'Mejora con Ejercicio · Empeora con Reposo', s: 'Dolor nocturno (2da mitad noche) · Rigidez matinal > 30-60 min · Respuesta rápida a AINEs', type: 'crit' },
        rl: 'Lumbago Mecánico Común',
        right: { t: 'Empeora con Ejercicio · Alivia con Reposo', s: 'Inicio agudo tras esfuerzo · Sin dolor nocturno · Rigidez matinal breve < 15 min · Kinesioterapia', type: 'dec' }
      },
      { k: 'box', t: 'Rasgos Comunes de las Espondiloartritis Seronegativas', s: 'HLA-B27 positivo · FR y ANA negativos · Entesitis (Aquiles/fascia) · Uveítis anterior aguda unilateral', type: 'warn' }
    ]),
    contexto: 'Las espondiloartritis representan una familia de artropatías autoinmunes axiales y periféricas interconectadas por la genética (HLA-B27) y la entesitis. La perla más evaluada en EUNACOM es la diferenciación semiológica indiscutible entre el lumbago mecánico común (que alivia en reposo) y el lumbago inflamatorio (que mejora con el movimiento y despierta al paciente en la madrugada).',
    contentSections: [
      {
        subhead: '1. Concepto Unificador de las Espondiloartritis Seronegativas',
        paragraphs: [
          'Las espondiloartritis (SpA) constituyen un grupo heterogéneo pero estrechamente vinculado de enfermedades inflamatorias que comparten características etiopatogénicas, clínicas y radiológicas:',
          '1. <strong>Seronegatividad inmunológica:</strong> Ausencia constante de Factor Reumatoide (FR) y de Anticuerpos Antinucleares (ANA).',
          '2. <strong>Asociación Genética con HLA-B27:</strong> Presente en más del 90% de las espondilitis anquilosantes y en 50-70% de las formas reactivas, psoriásicas y enteropáticas.',
          '3. <strong>Afección Axial y Periférica:</strong> Inflamación crónica del esqueleto axial (sacroilitis y espondilitis) y oligoartritis asimétrica de predominio en miembros inferiores.',
          '4. <strong>Entesitis como Lesión Elemental:</strong> Inflamación del punto de anclaje óseo de tendones, ligamentos y cápsulas articulares (entesis aquiliana, fascia plantar, inserción de costillas).',
          '5. <strong>Manifestaciones Extraarticulares Compartidas:</strong> Uveítis anterior aguda unilateral con hipopión, psoriasis cutánea y ungueal, inflamación de mucosa intestinal subclínica o EII e insuficiencia aórtica.'
        ]
      },
      {
        subhead: '2. Semiología Comparada: Lumbago Inflamatorio vs Lumbago Mecánico',
        paragraphs: [
          'La identificación del <strong>lumbago inflamatorio</strong> es la clave para la detección precoz antes de que se desarrolle anquilosis ósea irreversible:',
          '<strong>Criterios ASAS para Dolor Lumbar Inflamatorio (Sensibilidad 80%, Especificidad 72%):</strong>',
          'Se sospecha firmemente ante la presencia de <strong>al menos 4 de los siguientes 5 parámetros</strong> en un dolor lumbar crónico (≥ 3 meses de duración):',
          '1. <strong>Edad de inicio menor de 45 años.</strong>',
          '2. <strong>Comienzo insidioso</strong> y solapado (no agudo tras cargar peso).',
          '3. <strong>MEJORÍA franca con el ejercicio físico y el movimiento.</strong>',
          '4. <strong>EMPEORAMIENTO o nula mejoría con el reposo en cama.</strong>',
          '5. <strong>Dolor nocturno</strong> que despierta típicamente al paciente en la segunda mitad de la noche, obligándolo a levantarse y caminar para encontrar alivio.',
          '<em>Adicionalmente:</em> Se acompaña de <strong>rigidez matinal prolongada (> 30 a 60 minutos)</strong> y una <strong>respuesta dramática y casi completa a los AINEs</strong> dentro de las primeras 24 a 48 horas de iniciado el fármaco.',
          '<strong>Lumbago Mecánico:</strong> Es la causa del 90-95% de los dolores lumbares en la población general. Se debe a sobrecarga discal, contractura muscular o artrosis interapofisaria. <em>Comportamiento:</em> El dolor se desencadena o empeora con la flexión, bipedestación o carga, y <strong>CEDE COMPLETAMENTE CON EL REPOSO EN CAMA</strong>; no interrumpe el sueño y la rigidez matinal dura menos de 15 minutos.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial Clínico: Lumbago Inflamatorio vs Mecánico',
      headers: ['Parámetro Clínico', 'Lumbago Inflamatorio (Espondiloartropatía)', 'Lumbago Mecánico Común'],
      rows: [
        ['Edad habitual de inicio', 'Menor de 45 años (típicamente 20 – 35 años)', 'Cualquier edad (pico entre 30 y 60 años)'],
        ['Forma de inicio', 'Insidiosa, progresiva, sin desencadenante claro', 'Aguda o subaguda, frecuentemente tras esfuerzo físico'],
        ['Efecto del ejercicio', 'MEJORA marcadamente con la actividad física', 'EMPEORA con el ejercicio y la deambulación'],
        ['Efecto del reposo', 'EMPEORA con el reposo prolongado en cama', 'MEJORA o desaparece con el reposo en cama'],
        ['Dolor nocturno', 'Frecuente en la 2da mitad de la noche; obliga a levantarse', 'Raro o ausente (salvo cambios posturales bruscos)'],
        ['Rigidez matinal', 'Prolongada (superior a 30 – 60 minutos)', 'Breve (menor a 15 – 30 minutos)'],
        ['Respuesta a AINEs', 'Espectacular y rápida (alivio > 75% en 24-48h)', 'Parcial o modesta'],
        ['Dolor en nalgas', 'Alternante (en báscula: sacroilitis bilateral)', 'Unilateral o irradiado por dermatoma (ciática)']
      ]
    },
    vignette: 'Hombre de 26 años, administrativo, consulta por dolor lumbar bajo y en ambas nalgas de 5 meses de evolución. Refiere que el dolor es mucho más intenso en las mañanas al despertar, acompañado de rigidez de columna que dura más de 1 hora y que le dificulta calzarse los zapatos. El dolor lo despierta a las 4:00 AM, obligándolo a pasear por la habitación. Conforme camina y avanza el día, el dolor disminuye significativamente. Ha tomado Ibuprofeno 400 mg de forma ocasional con alivio casi inmediato de los síntomas.',
    explicacion: 'El cuadro clínico cumple la totalidad de los criterios ASAS para Dolor Lumbar Inflamatorio: paciente menor de 45 años, duración mayor a 3 meses de inicio insidioso, dolor nocturno que interrumpe el sueño, rigidez matinal mayor a 60 minutos, mejoría nítida con el ejercicio, dolor glúteo alternante (sugerente de sacroilitis) y excelente respuesta a AINEs. El diagnóstico más probable es una Espondiloartritis axial precoz (Espondilitis Anquilosante). Requiere estudio con radiografía/resonancia magnética de articulaciones sacroilíacas y HLA-B27.',
    keyPoints: [
      'El dolor lumbar inflamatorio MEJORA con el ejercicio y EMPEORA con el reposo en cama.',
      'El dolor nocturno en la segunda mitad de la noche que obliga a levantarse es característico de inflamación axial.',
      'Los criterios ASAS exigen dolor crónico (> 3 meses) en menores de 45 años con al menos 4 de 5 parámetros cardinales.',
      'El dolor en nalgas alternante (en báscula) es la manifestación semiológica de la sacroilitis bilateral.',
      'Las espondiloartritis son seronegativas: Factor Reumatoide y ANA son constantemente negativos.',
      'La entesitis (inflamación del tendón de Aquiles o fascia plantar) es la lesión patológica distintiva.',
      'La excelente y rápida respuesta analgésica a los AINEs es un rasgo diagnóstico de valor en el lumbago inflamatorio.'
    ],
    questions: [
      {
        stem: 'Hombre de 28 años consulta por lumbago bajo de 4 meses de evolución. ¿Cuál de las siguientes características semiológicas apoya fuertemente el origen INFLAMATORIO del dolor por sobre una etiología mecánica?',
        options: [
          { id: 'A', text: 'El dolor aumenta con la deambulación y calma completamente al acostarse en la cama' },
          { id: 'B', text: 'El dolor despierta al paciente en la madrugada y mejora al iniciar la actividad física matinal' },
          { id: 'C', text: 'El dolor inició bruscamente tras levantar una caja pesada en el trabajo' },
          { id: 'D', text: 'La rigidez matinal de la columna dura menos de 10 minutos' },
          { id: 'E', text: 'El dolor empeora con la tos y la maniobra de Valsalva' }
        ],
        correcta: 'B',
        explicacion: 'El dolor lumbar inflamatorio característico de las espondiloartropatías se define por presentarse en pacientes jóvenes (< 45 años), tener un inicio insidioso crónico, empeorar con el reposo en cama, despertar al paciente en la segunda mitad de la noche y MEJORAR claramente con el ejercicio y el movimiento físico. El dolor que calma con el reposo y aumenta con la carga es típicamente mecánico.',
        recTag: 'EUNACOM 2017 · Q#14'
      },
      {
        stem: '¿Cuál es el antígeno leucocitario humano (HLA) que presenta una asociación genética superior al 90% con la Espondilitis Anquilosante y que se encuentra frecuentemente ligado a las espondiloartritis seronegativas?',
        options: [
          { id: 'A', text: 'HLA-DR4' },
          { id: 'B', text: 'HLA-B27' },
          { id: 'C', text: 'HLA-DR3' },
          { id: 'D', text: 'HLA-DQ2' },
          { id: 'E', text: 'HLA-B51' }
        ],
        correcta: 'B',
        explicacion: 'El alelo HLA-B27 (complejo mayor de histocompatibilidad clase I) presenta una asociación fuertísima con las espondiloartritis seronegativas, encontrándose positivo en más del 90% de los pacientes con Espondilitis Anquilosante y en el 50-80% de las artritis reactivas y espondiloartritis axiales. El HLA-DR4 se asocia a Artritis Reumatoide y el HLA-B51 a Enfermedad de Behçet.',
        recTag: 'EUNACOM 2020 · Q#29'
      }
    ]
  },

  {
    id: 'reuma-17', classId: 'reuma-17', tier: 3,
    blockNum: 4, blockName: 'Espondiloartritis Seronegativas y Enfermedad de Behçet',
    topicLabel: '9.17',
    title: 'Espondilitis Anquilosante (EA): Sacroilitis Bilateral, Columna en Caña de Bambú y Terapia Anti-TNF',
    perfilCode: '1.08.1.002', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud: Tratamiento de Espondiloartritis con Biológicos Anti-TNF en centros especializados',
    reconstrucciones: 'EUNACOM 2018 Q#22 · EUNACOM 2020 Q#08 · EUNACOM 2022 Q#33 · EUNACOM 2024 Q#29',
    frecuencia: 'Muy Alta · Prototipo de espondiloartropatía axial y evaluación de imágenes en EUNACOM',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Terapéutico en Espondilitis Anquilosante',
    diagram: flow('Algoritmo de Espondilitis Anquilosante', [
      { k: 'box', t: 'Lumbago Inflamatorio Crónico en Varón Joven (15-30 años)', s: 'Rigidez matinal > 1 hora · Dolor glúteo alternante · Test de Schöber < 5 cm · Expansión torácica < 2.5 cm', type: 'acc' },
      { k: 'split', q: 'Estudio de Imágenes de Articulaciones Sacroilíacas', s: 'Criterio mandatorio de los Criterios de Nueva York Modificados',
        ll: 'Radiografía Simple de Pelvis / Sacroilíacas',
        left: { t: 'Sacroilitis Bilateral Simétrica (Grado ≥ 2)', s: 'Erosiones óseas, esclerosis e interlínea borrada · Sindesmofitos (Caña de bambú)', type: 'crit' },
        rl: 'Radiografía Normal (Etapa Pre-Radiológica)',
        right: { t: 'Resonancia Magnética Sacroilíaca (STIR)', s: 'Edema óseo subcondral (osteítis activa precoz) + HLA-B27 (+) confirma SpA axial', type: 'warn' }
      },
      { k: 'box', t: 'Tratamiento Médico de Primera Línea: AINEs a Dosis Plenas Continuas', s: 'Naproxeno 500mg c/12h o Celecoxib continuo + Programa formal de Kinesioterapia y ejercicios posturales', type: 'dec' },
      { k: 'box', t: 'Enfermedad Axial Activa Refractaria a AINEs: Terapia Biológica Anti-TNF', s: 'Infliximab, Adalimumab o Etanercept · Los FARME orales (Metotrexato) NO sirven para el compromiso axial', type: 'acc' }
    ]),
    contexto: 'La Espondilitis Anquilosante es el paradigma de las espondiloartropatías. Afecta principalmente a hombres jóvenes produciendo anquilosis fibrosa y ósea de la columna vertebral. El EUNACOM indaga constantemente en las maniobras clínicas de limitación articular (Schöber y expansión torácica), el hallazgo radiológico de sacroilitis bilateral simétrica y sindesmofitos (columna en caña de bambú), las manifestaciones extraarticulares como la uveítis anterior aguda unilateral, y la ineficacia del metotrexato para la columna frente al éxito de los fármacos anti-TNF.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Epidemiología y Compromiso Axial Progresivo',
        paragraphs: [
          'La espondilitis anquilosante se desencadena por una respuesta inmune anómala ante péptidos antigénicos en individuos genéticamente susceptibles portadores del alelo <strong>HLA-B27 (presente en el 90-95% de los pacientes)</strong>.',
          'Predomina en el <strong>sexo masculino (proporción 3:1)</strong>, con inicio clínico característico entre los <strong>15 y los 30 años</strong>. El inicio después de los 45 años es muy infrecuente.',
          'El proceso inflamatorio primario asienta en las <strong>entesis fibrocartilaginosas</strong> de las articulaciones sacroilíacas y de los discos intervertebrales. La entesitis erosiva inicial es seguida por una respuesta reparadora ósea exagerada con proliferación de tejido osteoide que se osifica progresivamente, formando puentes óseos intersomáticos verticales delgados llamados <strong>sindesmofitos</strong>.',
          'La anquilosis ósea progresiva fusiona las articulaciones sacroilíacas, los cuerpos vertebrales, las articulaciones apofisarias posteriores y las costovertebrales, transformando la columna en una estructura rígida continua e inmóvil: la clásica <strong>\"columna en caña de bambú\" (bamboo spine)</strong>.'
        ]
      },
      {
        subhead: '2. Exploración Física Reumatológica de la Columna y Caja Torácica',
        paragraphs: [
          'La limitación del rango articular de la columna en los tres planos del espacio es el signo objetivo fundamental:',
          '• <strong>Test de Schöber Modificado (Flexión Lumbar):</strong> Con el paciente de pie erecto se marca la línea entre las espinas ilíacas posterosuperiores (interlínea L5-S1) y un segundo punto 10 cm más arriba en la columna lumbar. Se solicita al paciente que flexione el tronco hacia adelante al máximo con las rodillas extendidas. En personas sanas la distancia entre las marcas se incrementa en ≥ 5 cm (alcanzando ≥ 15 cm). <strong>Un aumento menor a 5 cm es PATOLÓGICO</strong> e indica rigidez lumbar anquilosante.',
          '• <strong>Expansión Torácica:</strong> Se mide con cinta métrica en el 4to espacio intercostal durante una inspiración forzada máxima tras una espiración forzada completa. Un valor <strong>menor a 2.5 cm es patológico</strong> y traduce anquilosis de las articulaciones costovertebrales y costotransversas, condicionando un patrón ventilatorio restrictivo puro.',
          '• <strong>Distancia Occipucio-Pared (Fleche de Stibor):</strong> Evalúa la pérdida de lordosis cervical y cifosis dorsal. Apoyando talones y espalda contra la pared, en el paciente anquilosado el occipucio no logra contactar la pared (distancia > 0 cm).'
        ]
      },
      {
        subhead: '3. Diagnóstico por Imágenes: Criterios de Nueva York Modificados y Resonancia',
        paragraphs: [
          'Los <strong>Criterios de Nueva York Modificados (1984)</strong> exigen la presencia de al menos un criterio clínico + el criterio radiológico:',
          '<strong>Criterio Radiológico Obligatorio:</strong>',
          '• <strong>Sacroilitis bilateral Grado ≥ 2</strong> (esclerosis ósea subcondral incipiente con pequeñas erosiones), O',
          '• <strong>Sacroilitis unilateral Grado 3 o 4</strong> (pseudoensanchamiento por erosiones graves, esclerosis masiva o anquilosis completa con fusión articular).',
          '<em>Hallazgos Vertebrales en Radiografía:</em> Cuadratura de los cuerpos vertebrales (pérdida de la concavidad anterior normal), erosiones en las esquinas vertebrales anteriores (<strong>lesiones de Romanus</strong>), esclerosis reactiva de las esquinas (esquinas brillantes) y <strong>sindesmofitos marginales verticales</strong> que unen los cuerpos contiguos hasta conformar la caña de bambú.',
          '<strong>Resonancia Magnética (RM) de Sacroilíacas:</strong> Es el examen estándar de oro en la fase inicial o pre-radiológica. En secuencias <strong>STIR o T2 con saturación grasa</strong> detecta <strong>edema óseo subcondral activo (osteítis)</strong> años antes de que aparezcan las alteraciones estructurales en la radiografía simple.'
        ]
      },
      {
        subhead: '4. Manifestaciones Extraarticulares de la Espondilitis Anquilosante',
        paragraphs: [
          '• <strong>Uveítis Anterior Aguda Unilateral (25-30%):</strong> Es la manifestación extraarticular más frecuente. Debut súbito con ojo rojo profundo (inyección ciliar periquerática), dolor ocular intenso, fotofobia, lagrimeo y visión borrosa, con presencia de células y proteínas en cámara anterior (fenómeno de Tyndall) y tendencia a formar sinequias pupilares. Es típicamente <strong>unilateral y recurrente</strong>, alternando de ojo en distintos brotes. <em>Tratamiento urgente:</em> Corticoides tópicos en colirio + midriáticos/ciclopléjicos (ciclopentolato) para evitar sinequias.',
          '• <strong>Afección Cardiovascular:</strong> Aortitis de la raíz aórtica con ectasia anular que provoca <strong>Insuficiencia Aórtica</strong> diastólica (3-10%) y fibrosis por contigüidad del sistema de conducción cardíaco que causa <strong>Bloqueo Auriculoventricular de diverso grado</strong>.',
          '• <strong>Afección Pleuropulmonar:</strong> Fibrosis pulmonar apical bilateral lentamente progresiva con formación de cavernas quísticas que pueden colonizarse por <em>Aspergillus</em> (aspergiloma).',
          '• <strong>Compromiso Neurológico:</strong> Alto riesgo de fracturas vertebrales ante traumatismos menores debido a la rigidez óseaosteoporótica de la columna, con fracturas transdiscales inestables (fractura de la tiza / *chalk stick fracture*) que provocan compresión medular aguda.',
          '• <strong>Amiloidosis Secundaria (AA):</strong> Rara complicación tardía debida a inflamación crónica persistente, con proteinuria nefrótica y falla renal.'
        ]
      },
      {
        subhead: '5. Tratamiento Médico: La Ineficacia del Metotrexato y el Rol de los Anti-TNF',
        paragraphs: [
          '• <strong>Primera Línea Innegociable: Antiinflamatorios No Esteroidales (AINEs):</strong>',
          'Los AINEs a dosis plenas continuas (Naproxeno 500 mg c/12h, Indometacina 50-75 mg c/12h, Celecoxib 200 mg c/12-24h) constituyen el pilar farmacológico inicial. Alivian el dolor y la rigidez matinal en más del 80% de los pacientes y han demostrado enlentecer la formación de sindesmofitos si se toman de forma constante.',
          '• <strong>Kinesioterapia y Ejercicio Físico Diario:</strong> Fundamental e indispensable de por vida: natación y gimnasia postural de extensión de columna para prevenir la anquilosis en flexión cifótica.',
          '• <strong>REGLA DE ORO DE INEFICACIA FARMACOLÓGICA EUNACOM:</strong> Los FARME sintéticos tradicionales como <strong>el Metotrexato y la Sulfasalazina NO TIENEN EFICACIA alguna en el compromiso axial puro</strong> de la columna o articulaciones sacroilíacas (la sulfasalazina solo es útil si coexiste artritis periférica en rodillas o tobillos). Nunca se debe insistir con metotrexato para la columna.',
          '• <strong>Terapia Biológica (Falla de AINEs):</strong> En pacientes con enfermedad axial activa persistente (índice BASDAI ≥ 4) a pesar de haber utilizado al menos dos AINEs diferentes a dosis plenas durante al menos 4 semanas, la indicación formal es iniciar <strong>Terapia Biológica con Inhibidores de TNF-alfa (Infliximab, Adalimumab, Etanercept, Golimumab)</strong> o Inhibidores de Interleuquina-17 (Secukinumab). Producen una remisión clínica dramática y rápida.'
        ]
      }
    ],
    table: {
      title: 'Hallazgos Radiológicos Progresivos en Espondilitis Anquilosante',
      headers: ['Región Anatómica', 'Fase Precoz / Incipiente', 'Fase Avanzada / Anquilosis'],
      rows: [
        ['Articulaciones Sacroilíacas', 'Pseudoensanchamiento articular por erosiones subcondrales', 'Esclerosis masiva y fusión ósea total (sacroilitis grado 4)'],
        ['Cuerpos Vertebrales', 'Cuadratura vertebral (squaring) y erosiones en esquinas (Romanus)', 'Esquinas brillantes (osteosclerosis reactiva)'],
        ['Espacios Intervertebrales', 'Sindesmofitos verticales delgados marginales incipientes', 'Sindesmofitos continuos en \"Columna en caña de bambú\"'],
        ['Ligamentos de la Columna', 'Inflamación y calcificación del ligamento interespinoso', 'Signo de la vía del tren o del puñal (osificación ligamentosa continua)']
      ]
    },
    severityTable: {
      title: 'Maniobras Semiológicas de Rigidez Axial en Espondilitis Anquilosante',
      headers: ['Maniobra Clínica', 'Técnica de Medición', 'Valor Normal', 'Criterio Patológico'],
      rows: [
        ['Test de Schöber Modificado', 'Incremento entre L5 y 10 cm cefálico al flexionar tronco', 'Aumento ≥ 5 cm (total ≥ 15 cm)', 'Aumento < 5 cm (rigidez de columna lumbar)'],
        ['Expansión Torácica', 'Cinta métrica en 4to espacio intercostal inspiración máxima', '> 4 – 5 cm', '< 2.5 cm (anquilosis costovertebral)'],
        ['Distancia Occipucio-Pared', 'Talones y espalda contra la pared; medir occipucio a pared', '0 cm (contacto espontáneo)', '> 0 cm (cifosis dorsal progresiva rígida)'],
        ['Distancia Mentón-Esternón', 'Flexión cervical máxima hacia la horquilla esternal', '0 cm (contacto)', '> 0 cm (limitación de columna cervical)']
      ]
    },
    treatmentTable: {
      title: 'Algoritmo Farmacológico Escalonado en Espondilitis Anquilosante',
      headers: ['Nivel Terapéutico', 'Fármaco / Intervención', 'Indicación Clínica', 'Observación / Seguridad'],
      rows: [
        ['Primera Línea', 'AINEs a dosis plenas continuas (Naproxeno 500mg c/12h) + Kinesiología', 'Todos los pacientes al diagnóstico', 'Alivio rápido en 48 horas; protección gástrica con IBP'],
        ['Segunda Línea (Periférico)', 'Sulfasalazina 2 – 3 g / día oral', 'Solo si coexiste artritis periférica o entesitis refractaria', 'INOPERANTE para el compromiso de columna axial'],
        ['Tercera Línea (Biológico)', 'Inhibidores TNF-alfa (Adalimumab 40mg c/2sem SC o Etanercept 50mg/sem)', 'Falla a ≥ 2 AINEs plenos y BASDAI ≥ 4', 'Mandatorio descartar TBC latente previo con PPD/IGRA'],
        ['Cuarta Línea (Biológico 2)', 'Inhibidores de IL-17A (Secukinumab 150-300 mg SC mensual)', 'Falla o contraindicación a Anti-TNF', 'No usar si coexiste Enfermedad de Crohn activa']
      ]
    },
    vignette: 'Hombre de 25 años consulta por lumbago bajo y dolor en ambas nalgas de 8 meses de evolución, que empeora en la segunda mitad de la noche despertándolo a las 4:00 AM y mejora tras levantarse y caminar. Presenta rigidez matinal de 90 minutos. Al examen físico se realiza el test de Schöber modificado, observándose un incremento de solo 2 cm entre las marcas a la flexión forzada anterior. La expansión torácica es de 1.8 cm. Presenta antecedentes de un episodio de uveítis anterior unilateral en ojo derecho hace 1 año resuelto con colirios. La radiografía simple de pelvis muestra sacroilitis bilateral simétrica con erosiones y esclerosis subcondral (Grado 3 bilateral).',
    explicacion: 'El paciente cumple los criterios de Nueva York modificados para Espondilitis Anquilosante: dolor lumbar inflamatorio crónico en varón joven, limitación objetiva de la movilidad lumbar (Schöber patológico < 5 cm), limitación de la caja torácica (< 2.5 cm), antecedente de uveítis anterior aguda unilateral (la complicación extraarticular más clásica) y confirmación radiológica inequívoca de sacroilitis bilateral Grado 3. El tratamiento de primera línea que debe instaurarse de inmediato son los AINEs a dosis plenas continuas (ej. Naproxeno 500 mg cada 12 horas) asociados a kinesioterapia diaria.',
    keyPoints: [
      'La Espondilitis Anquilosante predomina en varones jóvenes (15 a 30 años) y se asocia en > 90% al HLA-B27.',
      'El Test de Schöber patológico (< 5 cm de aumento) demuestra rigidez de la columna lumbar.',
      'La expansión torácica menor a 2.5 cm traduce anquilosis costovertebral con patrón restrictivo.',
      'El criterio radiológico diagnóstico mandatorio es la Sacroilitis bilateral Grado ≥ 2 o unilateral Grado 3-4.',
      'La complicación extraarticular más frecuente es la Uveítis Anterior Aguda Unilateral no granulomatosa recurrente.',
      'A nivel cardiovascular puede provocar Insuficiencia Aórtica y Bloqueo Auriculoventricular.',
      'Los AINEs a dosis plenas son el tratamiento farmacológico de primera línea indiscutido.',
      'REGLA DE ORO: El Metotrexato NO sirve para el compromiso axial; si fallan los AINEs, se indica Terapia Biológica Anti-TNF.'
    ],
    questions: [
      {
        stem: 'Hombre de 24 años consulta por dolor lumbar de 6 meses de evolución que empeora con el reposo en cama y despierta al paciente en la madrugada, asociado a rigidez matinal de 2 horas. Al examen físico se realiza el Test de Schöber modificado: la distancia inicial de 10 cm entre las marcas de la columna lumbar aumenta únicamente a 12.5 cm a la flexión anterior forzada del tronco. ¿Cómo se interpreta este resultado semiológico?',
        options: [
          { id: 'A', text: 'Test normal que descarta patología de columna lumbar' },
          { id: 'B', text: 'Test patológico que indica limitación objetiva de la flexión de la columna lumbar' },
          { id: 'C', text: 'Test patológico que indica hiperlaxitud ligamentosa de columna' },
          { id: 'D', text: 'Test que indica hernia discal lumbar con radiculopatía L5 activa' },
          { id: 'E', text: 'Test no válido que debe repetirse en posición sedente' }
        ],
        correcta: 'B',
        explicacion: 'En el Test de Schöber modificado, la distancia entre las dos marcas cutáneas lumbares debe incrementarse en al menos 5 cm (alcanzando ≥ 15 cm en total) durante la flexión anterior forzada. Un aumento de solo 2.5 cm (total 12.5 cm) es francamente patológico y demuestra rigidez y limitación objetiva de la movilidad lumbar, hallazgo cardinal en la espondilitis anquilosante.',
        recTag: 'EUNACOM 2018 · Q#22'
      },
      {
        stem: '¿Cuál es la manifestación extraarticular más frecuente en los pacientes con Espondilitis Anquilosante?',
        options: [
          { id: 'A', text: 'Insuficiencia aórtica severa' },
          { id: 'B', text: 'Uveítis anterior aguda unilateral recurrente' },
          { id: 'C', text: 'Fibrosis pulmonar bibasal reticular' },
          { id: 'D', text: 'Amiloidosis renal con síndrome nefrótico' },
          { id: 'E', text: 'Glomerulonefritis membranosa' }
        ],
        correcta: 'B',
        explicacion: 'La manifestación extraarticular más común de la Espondilitis Anquilosante es la Uveítis Anterior Aguda (iritis/iridociclitis), presente en el 25-30% de los pacientes. Es típicamente unilateral, de comienzo brusco, con dolor ocular, inyección ciliar, fotofobia y miosis, y recurre en el mismo ojo o en el contralateral sin secuelas si se trata precozmente con corticoides y midriáticos tópicos.',
        recTag: 'EUNACOM 2020 · Q#08'
      },
      {
        stem: 'Hombre de 30 años con diagnóstico confirmado de Espondilitis Anquilosante axial severa no presenta mejoría de sus síntomas ni de su rigidez tras 3 meses de tratamiento continuado con Naproxeno 500 mg cada 12 horas y posterior ensayo con Indometacina 75 mg cada 12 horas. Mantiene un índice de actividad BASDAI de 5.8. No tiene compromiso articular periférico. ¿Cuál es el tratamiento de segunda línea indicado para su compromiso axial?',
        options: [
          { id: 'A', text: 'Iniciar Metotrexato 20 mg por semana oral con ácido fólico' },
          { id: 'B', text: 'Iniciar Terapia Biológica con un inhibidor del TNF-alfa (ej. Adalimumab o Infliximab)' },
          { id: 'C', text: 'Prescribir Prednisona 40 mg al día de forma permanente' },
          { id: 'D', text: 'Indicar Sulfasalazina 3 gramos al día oral en monoterapia' },
          { id: 'E', text: 'Hidroxicloroquina 400 mg al día más reposo absoluto' }
        ],
        correcta: 'B',
        explicacion: 'En la Espondilitis Anquilosante con compromiso axial puro refractario a AINEs a dosis plenas, los FARME convencionales sintéticos como Metotrexato o Sulfasalazina han demostrado ser totalmente ineficaces. La indicación formal de segunda línea según las guías internacionales y canasta GES es el inicio de Terapia Biológica con inhibidores del TNF-alfa (o inhibidores de IL-17), previo tamizaje de tuberculosis latente.',
        recTag: 'EUNACOM 2022 · Q#33'
      },
      {
        stem: '¿Cuál es el hallazgo radiológico cardinal en la columna vertebral que define la fase avanzada de anquilosis intersomática completa en la Espondilitis Anquilosante?',
        options: [
          { id: 'A', text: 'Osteofitos marginales horizontales asimétricos' },
          { id: 'B', text: 'Sindesmofitos óseos verticales delgados que fusionan cuerpos vertebrales en caña de bambú' },
          { id: 'C', text: 'Aplastamientos vertebrales bicóncavos en pez' },
          { id: 'D', text: 'Erosiones líticas expansivas en sacabocado' },
          { id: 'E', text: 'Espondilolistesis ístmica bilateral L5-S1' }
        ],
        correcta: 'B',
        explicacion: 'En la espondilitis anquilosante avanzada, la osificación progresiva del anillo fibroso del disco intervertebral genera sindesmofitos óseos marginales delgados de orientación estrictamente vertical que unen los cuerpos vertebrales contiguos, produciendo la clásica imagen radiológica de \"columna en caña de bambú\" (bamboo spine). Los osteofitos de la artrosis son gruesos y horizontales.',
        recTag: 'EUNACOM 2024 · Q#29'
      }
    ]
  },

  {
    id: 'reuma-18', classId: 'reuma-18', tier: 2,
    blockNum: 4, blockName: 'Espondiloartritis Seronegativas y Enfermedad de Behçet',
    topicLabel: '9.18',
    title: 'Artritis Psoriásica (Dactilitis, Pitting Ungueal) y Artritis Asociada a EII',
    perfilCode: '1.11.1.001', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica en APS · Canasta de biológicos en niveles secundarios/terciarios',
    reconstrucciones: 'EUNACOM 2017 Q#38 · EUNACOM 2021 Q#20 · EUNACOM 2023 Q#41',
    frecuencia: 'Alta · Evaluación frecuente de dactilitis (\"dedo en salchicha\") y alteraciones ungueales',
    svg: null, algoTitle: 'Algoritmo de Artritis Psoriásica y Artritis Enteropática (EII)',
    diagram: flow('Algoritmo de Artritis Psoriásica y EII', [
      { k: 'box', t: 'Artritis Inflamatoria en Paciente con Psoriasis o EII (Crohn / Colitis Ulcerosa)', s: 'Buscar signos patognomónicos: Dactilitis (\"Dedo en salchicha\") y Distrofia Ungueal (Pitting)', type: 'acc' },
      { k: 'split', q: 'Patrón de Artritis y Relación con la Enfermedad de Base', s: 'Diferenciación fenotípica y correlación clínica',
        ll: 'Artritis Psoriásica (Criterios CASPAR)',
        left: { t: 'Afección de IFD + Pitting ungueal + FR (-)', s: 'Imagen en lápiz-copa · Dactilitis · Terapia: Metotrexato / Anti-TNF / Anti-IL17', type: 'warn' },
        rl: 'Artritis Asociada a EII (Enteropática)',
        right: { t: 'Tipo 1 (Periférica) vs Tipo 2 vs Axial', s: 'Tipo 1: Paralela a brote intestinal de CU/Crohn · Tipo Axial: Independiente de EII', type: 'dec' }
      },
      { k: 'box', t: 'Regla de Oro en Dactilitis Psoriásica', s: 'Inflamación simultánea de tendón flexor y articulaciones que confiere aspecto de salchicha uniforme', type: 'acc' }
    ]),
    contexto: 'La Artritis Psoriásica y las artropatías enteropáticas son miembros prominentes de las espondiloartritis. En EUNACOM es crucial identificar la dactilitis o \"dedo en salchicha\", el piqueteado ungueal (pitting) asociado a sinovitis de interfalángicas distales, y entender que en la colitis ulcerosa la artritis periférica sigue el curso del brote intestinal mientras que la espondilitis es independiente.',
    contentSections: [
      {
        subhead: '1. Artritis Psoriásica: Clínica, Patrones y Criterios CASPAR',
        paragraphs: [
          'La Artritis Psoriásica (APs) afecta a un 15-30% de los pacientes con psoriasis cutánea. En el 75% de los casos la afección cutánea precede a la articular en años.',
          '<strong>Los 5 Patrones Clínicos Clásicos de Moll y Wright:</strong>',
          '1. <em>Oligoartritis Asimétrica (30%):</em> Afecta ≤ 4 articulaciones de forma desordenada (ej. rodilla y dos dedos contralaterales).',
          '2. <em>Poliartritis Simétrica (30-40%):</em> Similar a la AR pero con <strong>Factor Reumatoide y Anti-CCP negativos</strong> y presencia obligada de afección en IFD.',
          '3. <em>Compromiso Predominante de Interfalángicas Distales (IFD) (10-15%):</em> Patrón exclusivo de la psoriasis, casi invariablemente asociado a <strong>distrofia ungueal severa</strong>.',
          '4. <em>Espondilitis / Sacroilitis Asimétrica (20%):</em> Sacroilitis unilateral con sindesmofitos gruesos asimétricos.',
          '5. <em>Artritis Mutilante (< 5%):</em> Reabsorción osteolítica masiva con telescopaje de los dedos (dedos en gemelo de teatro / *opera-glass hands*).',
          '<strong>Signos Cardinales Patognomónicos EUNACOM:</strong>',
          '• <strong>Dactilitis (\"Dedo en salchicha\"):</strong> Tumefacción difusa de todo el dedo provocada por la combinación simultánea de tenosinovitis del flexor y sinovitis de las interfalángicas.',
          '• <strong>Afectación Ungueal (Pitting Ungueal):</strong> Piqueteado o depresiones puntiformes en dedal, onicolisis, hiperqueratosis subungueal y manchas de color salmón (\"en gota de aceite\"). Es el principal factor de riesgo para artritis en IFD.'
        ]
      },
      {
        subhead: '2. Radiología Típica y Manejo Terapéutico en Artritis Psoriásica',
        paragraphs: [
          'En la radiografía destaca la combinación paradójica de <strong>erosión ósea unida a proliferación perióstica nueva</strong>. En fases avanzadas produce la clásica deformidad en <strong>\"lápiz en copa\" (pencil-in-cup)</strong>, donde el extremo de la falange proximal se afila como lápiz y se introduce en la base ensanchada en copa de la falange distal.',
          '<strong>Tratamiento:</strong> En formas periféricas leves se usan AINEs. El FARME de primera línea es el <strong>Metotrexato (15-25 mg/semana)</strong> porque trata eficazmente la piel y la sinovitis periférica. En formas refractarias, axiales o dactilitis severa se emplean <strong>Biológicos Anti-TNF (Adalimumab, Etanercept) o inhibidores de IL-17 (Secukinumab)</strong>.'
        ]
      },
      {
        subhead: '3. Artritis Asociada a Enfermedad Inflamatoria Intestinal (EII)',
        paragraphs: [
          'Se presenta en el 10-20% de los pacientes con Colitis Ulcerosa o Enfermedad de Crohn:',
          '• <strong>Artritis Periférica Tipo 1 (Pauciarticular):</strong> Compromete < 5 articulaciones, habitualmente grandes articulaciones de carga (rodillas, tobillos). <strong>Su curso es PARALELO a la actividad inflamatoria del intestino</strong>: los brotes de artritis coinciden con las crisis de diarrea y sangrado rectal, y remite al controlar la colitis o tras colectomía.',
          '• <strong>Artritis Periférica Tipo 2 (Poliarticular):</strong> Compromete ≥ 5 articulaciones pequeñas de manos. Su curso es <strong>INDEPENDIENTE de la actividad intestinal</strong>.',
          '• <strong>Forma Axial (Sacroilitis / Espondilitis):</strong> Clínicamente idéntica a la espondilitis anquilosante (HLA-B27 positivo en 50-70%). <strong>Su evolución es completamente INDEPENDIENTE de la enfermedad intestinal</strong> (la colectomía no cura la espondilitis).'
        ]
      }
    ],
    table: {
      title: 'Diferencias entre Artritis Periférica Tipo 1 y Afección Axial en EII',
      headers: ['Característica', 'Artritis Periférica Tipo 1', 'Compromiso Axial (Espondilitis EII)'],
      rows: [
        ['Articulaciones afectadas', 'Grandes articulaciones (< 5 art: rodillas, tobillos)', 'Articulaciones sacroilíacas y columna vertebral'],
        ['Relación con brotes intestinales', 'PARALELA: Coincide con crisis de diarrea/rectorragia', 'INDEPENDIENTE: No guarda relación con actividad intestinal'],
        ['Efecto de la colectomía en CU', 'Cura o induce remisión de la artritis', 'NULO: La espondilitis continúa progresando'],
        ['Asociación con HLA-B27', 'Baja (~10%)', 'Muy ALTA (50 – 70%)'],
        ['Pronóstico articular', 'No destructiva, no deja secuelas', 'Progresiva con sindesmofitos y anquilosis']
      ]
    },
    vignette: 'Hombre de 36 años con antecedente de psoriasis en placas en codos de 5 años de evolución consulta por dolor e hinchazón en el tercer dedo de la mano derecha de 3 semanas. Al examen físico el dedo completo luce uniformemente engrosado, eritematoso y tumefacto, con aspecto de salchicha, con dolor exquisito a la palpación del tendón flexor y sinovitis de la articulación interfalángica distal. Las uñas muestran múltiples depresiones puntiformes en dedal (pitting) y desprendimiento ungueal distal. El factor reumatoide y los anticuerpos anti-CCP son negativos.',
    explicacion: 'El paciente presenta una dactilitis aguda (\"dedo en salchicha\") con compromiso de interfalángica distal y distrofia ungueal (pitting), en contexto de psoriasis cutánea con serología negativa. Este cuadro cumple de forma definitiva los criterios CASPAR para Artritis Psoriásica. El compromiso de IFD y la dactilitis son signos cardinales patognomónicos. El tratamiento médico modificador de primera línea indicado es el Metotrexato oral o subcutáneo.',
    keyPoints: [
      'La Artritis Psoriásica afecta al 15-30% de los pacientes con psoriasis cutánea.',
      'La Dactilitis (\"dedo en salchicha\") es la tumefacción difusa de todo el dedo por artritis más tenosinovitis flexora.',
      'El compromiso de interfalángicas distales (IFD) con distrofia ungueal (pitting) es característico de psoriasis.',
      'La radiografía muestra la imagen típica en \"lápiz en copa\" (pencil-in-cup) con erosión y proliferación ósea.',
      'El Metotrexato es el FARME sintético de primera elección en artritis psoriásica periférica.',
      'En la Colitis Ulcerosa, la artritis periférica Tipo 1 sigue un curso PARALELO a los brotes digestivos.',
      'El compromiso axial en EII (espondilitis) es INDEPENDIENTE de la actividad intestinal.'
    ],
    questions: [
      {
        stem: 'Hombre de 38 años con antecedente de psoriasis en placas consulta por tumefacción dolorosa difusa y uniforme del segundo dedo de la mano izquierda, que adquiere un aspecto engrosado cilíndrico en \"salchicha\". Al examen se constata dolor en interfalángicas proximales y distales con dolor a la palpación del trayecto del tendón flexor. Las uñas muestran piqueteado puntiforme (pitting). ¿Cómo se denomina este hallazgo semiológico característico?',
        options: [
          { id: 'A', text: 'Nódulos de Heberden' },
          { id: 'B', text: 'Dactilitis' },
          { id: 'C', text: 'Pannus sinovial' },
          { id: 'D', text: 'Tofo gotoso interarticular' },
          { id: 'E', text: 'Eritema nudoso digital' }
        ],
        correcta: 'B',
        explicacion: 'La dactilitis o \"dedo en salchicha\" es la inflamación uniforme y difusa de la totalidad de un dedo ocasionada por la combinación simultánea de sinovitis articular y tenosinovitis de los tendones flexores. Es una manifestación característica y altamente específica de las espondiloartropatías, particularmente de la Artritis Psoriásica y de la Artritis Reactiva.',
        recTag: 'EUNACOM 2017 · Q#38'
      },
      {
        stem: 'Mujer de 32 años con antecedente de Colitis Ulcerosa de 4 años de evolución presenta un brote intestinal agudo con diarrea sanguinolenta (6 deposiciones al día con pujo y tenesmo). De forma simultánea inicia dolor y derrame articular en rodilla derecha y tobillo izquierdo. ¿Cuál es el comportamiento clínico esperado de esta artritis periférica con relación a la evolución de su enfermedad intestinal?',
        options: [
          { id: 'A', text: 'La artritis progresará de forma independiente requiriendo cirugía protésica precoz' },
          { id: 'B', text: 'La artritis remitirá completamente al resolverse el brote inflamatorio de la colitis' },
          { id: 'C', text: 'La artritis transformará la enfermedad en espondilitis anquilosante irreversible' },
          { id: 'D', text: 'La artritis indica degeneración neoplásica colónica maligna inmediata' },
          { id: 'E', text: 'La artritis persistirá de forma crónica sin responder a corticoides' }
        ],
        correcta: 'B',
        explicacion: 'La artropatía periférica asociada a Enfermedad Inflamatoria Intestinal de tipo pauciarticular (Tipo 1, que afecta rodillas y tobillos en menos de 5 articulaciones) sigue un curso estrictamente paralelo a la actividad de la mucosa colónica. Al tratar el brote de colitis ulcerosa con corticoides o aminosalicilatos y remitir la inflamación intestinal, la artritis periférica cede de forma completa sin dejar daño articular residual.',
        recTag: 'EUNACOM 2021 · Q#20'
      }
    ]
  },

  {
    id: 'reuma-19', classId: 'reuma-19', tier: 2,
    blockNum: 4, blockName: 'Espondiloartritis Seronegativas y Enfermedad de Behçet',
    topicLabel: '9.19',
    title: 'Artritis Reactiva (Síndrome de Reiter): Tríada Clásica, Chlamydia y Tratamiento',
    perfilCode: '1.04.1.010', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica · Diagnóstico y manejo inicial en atención primaria/urgencia',
    reconstrucciones: 'EUNACOM 2018 Q#44 · EUNACOM 2020 Q#15 · EUNACOM 2023 Q#30',
    frecuencia: 'Alta · Caso clínico típico de hombre joven con oligoartritis postinfecciosa en EUNACOM',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Terapéutico en Artritis Reactiva (Síndrome de Reiter)',
    diagram: flow('Algoritmo de Artritis Reactiva', [
      { k: 'box', t: 'Oligoartritis Asimétrica Aguda en Miembros Inferiores (Rodilla, Tobillo)', s: 'Inicio 1 a 4 semanas después de infección urogenital o gastrointestinal · Paciente HLA-B27 (+)', type: 'acc' },
      { k: 'split', q: 'Búsqueda de la Tríada Clásica y Manifestaciones Mucocutáneas', s: 'Reconocimiento semiológico de los componentes del Síndrome de Reiter',
        ll: 'Tríada Clásica de Reiter',
        left: { t: '1) Uretritis + 2) Conjuntivitis + 3) Artritis', s: 'Secreción uretral serosa estéril · Ojo rojo bilateral no supurativo · Oligoartritis aditiva', type: 'crit' },
        rl: 'Lesiones Cutáneas Específicas',
        right: { t: 'Balanitis Circinada y Queratodermia', s: 'Erosiones en glande · Placas hiperqueratósicas en palmas/plantas (blenorrágica) · Aftas orales', type: 'warn' },
      },
      { k: 'box', t: 'Pilar Diagnóstico Microbiológico: Líquido Sinovial Estéril', s: 'Artrocentesis: Líquido inflamatorio aséptico · Buscar patógeno gatillante: PCR Chlamydia en orina', type: 'dec' },
      { k: 'box', t: 'Tratamiento Médico Escalonado', s: '1) AINEs plenos para la artritis · 2) Doxiciclina 100mg c/12h x 7d si infección activa genital (+ pareja)', type: 'acc' }
    ]),
    contexto: 'La Artritis Reactiva es una sinovitis estéril inmunomediada gatillada por infecciones a distancia. En EUNACOM es un clásico reconocer la tríada de Reiter (uretritis, conjuntivitis y artritis asimétrica en extremidades inferiores tras contacto sexual de riesgo), la esterilidad del líquido articular y el tratamiento antiinflamatorio con AINEs asociado al tratamiento antibiótico del foco urogenital si está activo.',
    contentSections: [
      {
        subhead: '1. Fisiopatología y Microorganismos Gatillantes',
        paragraphs: [
          'La Artritis Reactiva es una artropatía inflamatoria aséptica que se manifiesta entre <strong>1 y 4 semanas posteriores a una infección primaria extraarticular</strong> mucosal (urogenital o gastrointestinal).',
          'Existe una fuerte predisposición genética ligada al <strong>HLA-B27 (positivo en el 60-80% de los pacientes)</strong>, lo que condiciona un procesamiento anómalo de los antígenos bacterianos con migración de complejos inmunes y linfocitos T a las sinoviales.',
          '<strong>Patógenos Desencadenantes Principales:</strong>',
          '• <strong>Vía Urogenital / Transmisión Sexual:</strong> <strong>Chlamydia trachomatis</strong> (es el agente gatillante más frecuente en hombres jóvenes), <em>Ureaplasma urealyticum</em>.',
          '• <strong>Vía Digestiva / Enterérica:</strong> <em>Campylobacter jejuni, Salmonella enteritidis, Shigella flexneri, Yersinia enterocolitica</em> y <em>Clostridioides difficile</em>.'
        ]
      },
      {
        subhead: '2. Manifestaciones Clínicas: La Tríada Clásica de Reiter',
        paragraphs: [
          'La presentación clínica típica comprende la <strong>Tríada Clásica de Reiter</strong> (presente completa en 30-50% de los casos):',
          '1. <strong>Artritis Periférica:</strong> Oligoartritis aguda o subaguda, marcadamente <strong>asimétrica y aditiva, que afecta de forma predominante a las extremidades inferiores</strong> (rodillas, tobillos y articulaciones metatarsofalángicas/interfalángicas de los pies). Se asocia a entesitis aquiliana y dactilitis.',
          '2. <strong>Afección Urogenital:</strong> Uretritis no gonocócica en el hombre (disuria, secreción uretral acuosa o mucopurulenta escasa) o cervicitis/salpingitis en la mujer, que suele preceder en 2 semanas a la artritis.',
          '3. <strong>Afección Ocular:</strong> Conjuntivitis bilateral no purulenta, transitoria y leve (presente en 40-50%), o uveítis anterior aguda unilateral.',
          '<strong>Lesiones Mucocutáneas Patognomónicas:</strong>',
          '• <strong>Balanitis Circinada:</strong> Erosiones eritematosas superficiales serpiginosas no dolorosas de bordes blanquecinos en el glande y meato urinario (presente en 20-40% de los hombres).',
          '• <strong>Queratodermia Blenorrágica:</strong> Lesiones pápulo-pustulosas que evolucionan a placas hiperqueratósicas de aspecto córneo en <strong>palmas de manos y plantas de los pies</strong>, indistinguibles clínicamente de la psoriasis pustulosa.',
          '• Úlceras orales superficiales e indoloras en mucosa yugal y lengua.'
        ]
      },
      {
        subhead: '3. Diagnóstico y Manejo Terapéutico',
        paragraphs: [
          '• <strong>Estudio de Líquido Sinovial:</strong> La artrocentesis muestra un líquido inflamatorio (2.000 a 50.000 leucocitos/mm³ con predominio PMN), pero <strong>la tinción de Gram y los cultivos microbiológicos son ESTRICTAMENTE NEGATIVOS</strong> (la articulación está libre de bacterias viables).',
          '• <strong>Identificación del Patógeno Primario:</strong> PCR para <em>Chlamydia trachomatis</em> en muestra de orina de primer chorro o frotis uretral/cervical, o coprocultivo/serología si hubo diarrea.',
          '• <strong>Tratamiento Médico:</strong>',
          '1. <em>Manejo Articular:</em> <strong>AINEs a dosis plenas</strong> (Naproxeno 500 mg c/12h o Indometacina 50-75 mg c/8-12h) de primera línea. En mono/oligoartritis resistente se indican infiltraciones locales con corticoides.',
          '2. <em>Manejo Antimicrobiano:</em> Si se detecta infección urogenital activa por <em>Chlamydia trachomatis</em>, se debe tratar con <strong>Doxiciclina 100 mg cada 12 horas vía oral por 7 a 10 días</strong> (o Azitromicina 1 g oral en dosis única), siendo <strong>mandatorio tratar conjuntamente a la pareja sexual</strong>. <em>Nota EUNACOM:</em> Los antibióticos no curan la artritis ya instaurada, pero erradican el foco genital y previenen recidivas.'
        ]
      }
    ],
    table: {
      title: 'Espectro Clínico del Síndrome de Reiter / Artritis Reactiva',
      headers: ['Sistema Orgánico', 'Manifestación Clínica Típica', 'Signo Semiológico Clave'],
      rows: [
        ['Articular', 'Oligoartritis asimétrica de extremidades inferiores', 'Derrame en rodilla, tobillo y dactilitis en pie'],
        ['Genitourinario', 'Uretritis no gonocócica / cervicitis', 'Secreción uretral mucoide y disuria'],
        ['Ocular', 'Conjuntivitis no infecciosa / Uveítis anterior', 'Ojo rojo estéril transitorio'],
        ['Cutáneo genital', 'Balanitis circinada', 'Erosiones serpiginosas indoloras en glande'],
        ['Cutáneo acral', 'Queratodermia blenorrágica', 'Placas hiperqueratósicas en palmas y plantas'],
        ['Mucoso oral', 'Aftas orales superficiales', 'Úlceras mucosas no dolorosas en paladar/lengua']
      ]
    },
    vignette: 'Hombre de 23 años consulta por dolor e inflamación en rodilla izquierda y tobillo derecho de 10 días de evolución, con gran dificultad para apoyar el pie. Refiere que hace 3 semanas presentó ardor al orinar con escasa secreción uretral blanquecina matinal tras un contacto sexual de riesgo sin protección, a lo que siguió ojo rojo bilateral leve que resolvió espontáneamente. Al examen físico destaca rodilla izquierda con derrame articular a tensión y dactilitis en el segundo dedo del pie derecho. En el glande se aprecian erosiones circulares confluentes no dolorosas (balanitis circinada). La artrocentesis de rodilla da salida a líquido turbio con 32.000 leucocitos/mm³ con Gram negativo y cultivos bacterianos negativos.',
    explicacion: 'El paciente presenta la clásica tríada de Reiter (uretritis + conjuntivitis + oligoartritis asimétrica de extremidades inferiores), asociada a dactilitis y balanitis circinada, gatillada por una infección urogenital previa por Chlamydia trachomatis. La esterilidad del líquido sinovial confirma una Artritis Reactiva aséptica. El tratamiento de primera línea para la artritis son los AINEs a dosis plenas continuas, debiendo prescribirse Doxiciclina oral tanto al paciente como a su pareja sexual para tratar la clamidia genital activa.',
    keyPoints: [
      'La Artritis Reactiva se desarrolla 1 a 4 semanas tras una infección urogenital (Chlamydia) o digestiva.',
      'La Tríada de Reiter comprende: 1) Uretritis no gonocócica, 2) Conjuntivitis estéril y 3) Oligoartritis asimétrica.',
      'Afecta predominantemente las articulaciones de extremidades inferiores (rodillas, tobillos, dedos del pie).',
      'Las lesiones mucocutáneas clásicas son la Balanitis Circinada y la Queratodermia Blenorrágica palmoplantar.',
      'El líquido sinovial es inflamatorio pero ESTÉRIL (Gram y cultivos bacterianos negativos).',
      'Tratamiento articular de primera línea: AINEs a dosis plenas continuas.',
      'Si se demuestra infección activa por Chlamydia, se debe tratar con Doxiciclina o Azitromicina al paciente y a su pareja.'
    ],
    questions: [
      {
        stem: 'Hombre de 26 años consulta por dolor e inflamación en rodilla derecha y tobillo izquierdo de 2 semanas de evolución. Como antecedente refiere un cuadro de uretritis con disuria hace 1 mes tras una relación sexual no protegida. Al examen físico destaca artritis de rodilla derecha y placas hiperqueratósicas indoloras de aspecto descamativo en plantas de pies (queratodermia blenorrágica). La artrocentesis muestra 25.000 leucocitos/mm³ con cultivos negativos. ¿Cuál es el patógeno causante de la infección primaria desencadenante más probable?',
        options: [
          { id: 'A', text: 'Neisseria gonorrhoeae' },
          { id: 'B', text: 'Chlamydia trachomatis' },
          { id: 'C', text: 'Treponema pallidum' },
          { id: 'D', text: 'Trichomonas vaginalis' },
          { id: 'E', text: 'Herpes simplex virus tipo 2' }
        ],
        correcta: 'B',
        explicacion: 'En el síndrome de artritis reactiva tras exposición sexual (artritis periférica asimétrica + antecedente de uretritis + queratodermia blenorrágica con líquido articular estéril), el agente etiológico primario responsable de la infección urogenital desencadenante es Chlamydia trachomatis. No se trata de una artritis séptica gonocócica, ya que el líquido sinovial es aséptico.',
        recTag: 'EUNACOM 2018 · Q#44'
      },
      {
        stem: '¿Cuál de las siguientes combinaciones de hallazgos clínicos conforma la denominación clásica del Síndrome de Reiter?',
        options: [
          { id: 'A', text: 'Artritis reumatoide, esplenomegalia y neutropenia' },
          { id: 'B', text: 'Uretritis, conjuntivitis y artritis periférica asimétrica' },
          { id: 'C', text: 'Xerostomía, xeroftalmia y artralgias' },
          { id: 'D', text: 'Calcinosis, fenómeno de Raynaud y esclerodactilia' },
          { id: 'E', text: 'Aftas orales, aftas genitales y uveítis con hipopión' }
        ],
        correcta: 'B',
        explicacion: 'El Síndrome de Reiter se define clásicamente por la tríada clínica de: 1) Uretritis no gonocócica (o cervicitis), 2) Conjuntivitis bilateral y 3) Artritis periférica asimétrica de extremidades inferiores. La tríada de AR + esplenomegalia + neutropenia corresponde al síndrome de Felty, y las aftas orogenitales más uveítis a la enfermedad de Behçet.',
        recTag: 'EUNACOM 2020 · Q#15'
      }
    ]
  },

  {
    id: 'reuma-20', classId: 'reuma-20', tier: 2,
    blockNum: 4, blockName: 'Espondiloartritis Seronegativas y Enfermedad de Behçet',
    topicLabel: '9.20',
    title: 'Enfermedad de Behçet: Aftosis Orogenital Recurrente, Fenómeno de Patergia y Panuveítis',
    perfilCode: '1.05.1.015', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica · Manejo multidisciplinario con reumatología y oftalmología',
    reconstrucciones: 'EUNACOM 2019 Q#11 · EUNACOM 2022 Q#44 · EUNACOM 2024 Q#12',
    frecuencia: 'Media · Vasculitis de vaso variable con compromiso mucoso y ocular grave en EUNACOM',
    svg: null, algoTitle: 'Algoritmo Diagnóstico en Enfermedad de Behçet: Criterios Internacionales ICBD',
    diagram: flow('Algoritmo de Enfermedad de Behçet', [
      { k: 'box', t: 'Aftas Orales Recurrentes Dolorosas (Al menos 3 episodios en 12 meses)', s: 'Presentes en 100% · Úlceras aftosas en labios, lengua y carrillos · Curan sin cicatriz', type: 'acc' },
      { k: 'split', q: 'Búsqueda de Criterios Diagnósticos Mayores y Patergia', s: 'Sistema de puntaje internacional ICBD (Punto de corte: ≥ 4 puntos)',
        ll: 'Aftas Genitales Recurrentes (2 pts)',
        left: { t: 'Úlceras en Escroto / Vulva', s: 'Muy dolorosas · A diferencia de las orales, DEJAN CICATRIZ retráctil permanente', type: 'crit' },
        rl: 'Compromiso Ocular Grave (2 pts)',
        right: { t: 'Panuveítis / Uveítis con Hipopión', s: 'Vasculitis retiniana necrotizante · Causa ceguera bilateral si no se trata precozmente', type: 'warn' }
      },
      { k: 'box', t: 'Prueba de Patergia Positiva (1 pt) y Trombosis Venosa (1 pt)', s: 'Pústula estéril a las 24-48h tras punción cutánea con aguja 20G · Fuerte asociación a HLA-B51', type: 'dec' },
      { k: 'box', t: 'Tratamiento Médico según Severidad', s: 'Aftas: Colchicina 1-2 mg/d · Ocular / Vascular: Corticoides altas dosis + Azatioprina o Anti-TNF', type: 'acc' }
    ]),
    contexto: 'La Enfermedad de Behçet es una vasculitis sistémica que afecta vasos de cualquier calibre y tipo. Es clásica su prevalencia en la antigua Ruta de la Seda y su asociación a HLA-B51. El EUNACOM examina la presencia obligada de aftas orales recurrentes, la cicatrización de las aftas genitales, el fenómeno de patergia y el riesgo de ceguera por panuveítis con hipopión.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Epidemiología y Criterios Diagnósticos',
        paragraphs: [
          'La enfermedad de Behçet es una <strong>vasculitis sistémica de vasos de calibre variable</strong> (afecta arterias y venas de pequeño, mediano y gran calibre).',
          'Existe una fuerte predisposición genética ligada al <strong>alelo HLA-B51</strong> (presente en 60-80% de los casos en zonas endémicas de la Ruta de la Seda desde el Mediterráneo hasta el Lejano Oriente). Afecta predominantemente a adultos jóvenes entre 20 y 40 años.',
          '<strong>Manifestaciones Cardinales:</strong>',
          '1. <strong>Aftas Bucales Recurrentes (100% de los pacientes):</strong> Criterio obligatorio. Úlceras dolorosas, redondeadas, de fondo necrótico amarillento y halo eritematoso, que <strong>recurren al menos 3 veces en un período de 12 meses</strong>. Curan espontáneamente en 1 a 2 semanas <strong>SIN dejar cicatriz</strong>.',
          '2. <strong>Aftas Genitales Recurrentes (80-90%):</strong> Localizadas en el escroto y cuerpo del pene en hombres, y en vulva/vagina en mujeres. Son más profundas y dolorosas que las bucales y, a diferencia de ellas, <strong>DEJAN CICATRIZ atrófica definitiva</strong>.',
          '3. <strong>Afección Ocular (50-70%):</strong> Es la manifestación más invalidante y temida. Cursa con <strong>uveítis anterior con hipopión</strong> (acumulación de exudado purulento estéril en cámara anterior) y, sobre todo, <strong>panuveítis y vasculitis retiniana oclusiva</strong> recurrente que conduce a la ceguera bilateral irreversible en pocos años si no se trata enérgicamente.',
          '4. <strong>Fenómeno de Patergia Positivo:</strong> Respuesta hiperreactiva inflamatoria cutánea inespecífica. Se introduce una aguja estéril de calibre 20G en la piel del antebrazo; se considera positivo si a las <strong>24 a 48 horas se desarrolla una pápula eritematosa o pústula estéril ≥ 2 mm</strong> en el sitio de punción.',
          '5. <strong>Compromiso Vascular:</strong> Tromboflebitis superficial y <strong>trombosis venosa profunda (TVP) recurrente</strong> (presente en 25-30%), incluyendo sitios inusuales como trombosis de la vena cava superior/inferior, síndrome de Budd-Chiari y trombosis de senos venosos durales cerebrales. A nivel arterial causa aneurismas de arteria pulmonar con hemoptisis masiva mortal.'
        ]
      },
      {
        subhead: '2. Tratamiento Médico según Órgano Comprometido',
        paragraphs: [
          '• <strong>Aftosis Orogenital Aislada y Artralgias:</strong> Tratamiento de primera línea con <strong>Colchicina (1 a 2 mg/día vía oral)</strong> para reducir la frecuencia de las úlceras, asociado a corticoides tópicos (triamcinolona en orabase).',
          '• <strong>Compromiso Ocular y Sistémico Grave (Panuveítis, Trombosis, Aneurismas):</strong> Se requiere inmunosupresión agresiva inmediata con <strong>corticoides a dosis altas (Prednisona 1 mg/kg/día o pulsos de Metilprednisolona) asociados a Azatioprina (2.5 mg/kg/día)</strong>.',
          '• En panuveítis activa refractaria o vasculitis retiniana severa con riesgo visual inminente, el tratamiento de elección es la <strong>Terapia Biológica con Inhibidores de TNF-alfa (Infliximab o Adalimumab)</strong>.'
        ]
      }
    ],
    table: {
      title: 'Criterios Internacionales para la Enfermedad de Behçet (ICBD)',
      headers: ['Manifestación Clínica', 'Puntaje Asignado (Corte ≥ 4 puntos)', 'Detalle Clínico'],
      rows: [
        ['Aftas Bucales Recurrentes', '2 puntos', '≥ 3 episodios en 12 meses; curan sin cicatriz'],
        ['Aftas Genitales Recurrentes', '2 puntos', 'En escroto o vulva; DEJAN cicatriz atrófica'],
        ['Lesiones Oculares (Uveítis)', '2 puntos', 'Uveítis anterior con hipopión, panuveítis, vasculitis retiniana'],
        ['Lesiones Cutáneas', '1 punto', 'Pseudofoliculitis, eritema nodoso, pápulas acneiformes'],
        ['Manifestaciones Vasculares', '1 punto', 'Trombosis venosa profunda, tromboflebitis, aneurismas arteriales'],
        ['Prueba de Patergia Positiva', '1 punto', 'Pústula estéril a las 24-48 horas tras punción cutánea'],
        ['Manifestaciones del SNC', '1 punto', 'Neuro-Behçet: meningitis aséptica, trombosis de senos durales']
      ]
    },
    vignette: 'Hombre de 31 años consulta por dolor ocular derecho, visión borrosa y fotofobia intensa de 24 horas. Como antecedentes refiere haber presentado múltiples episodios de úlceras dolorosas en la boca (4 episodios en el último año) y úlceras en el escroto que le dejaron cicatrices deprimidas. Al examen oftalmológico con lámpara de hendidura se aprecia inyección ciliar profunda y un nivel blanquecino de 1 mm de exudado leucocitario purulento en la porción inferior de la cámara anterior del ojo derecho (hipopión estéril). En las piernas presenta nódulos eritematosos dolorosos compatibles con eritema nodoso.',
    explicacion: 'El paciente presenta una Enfermedad de Behçet confirmada: aftosis oral recurrente, aftas genitales cicatriciales, eritema nodoso y una complicación ocular mayor patognomónica consistente en una uveítis anterior con hipopión estéril. La uveítis en el Behçet es una emergencia oftalmológica que requiere tratamiento inmunosupresor inmediato con corticoides a dosis altas y azatioprina o anti-TNF para evitar la progresión a ceguera irreversible.',
    keyPoints: [
      'La Enfermedad de Behçet es una vasculitis de vasos de cualquier calibre asociada a HLA-B51.',
      'Las aftas orales son dolorosas, recurrentes (≥ 3 veces/año) y curan SIN dejar cicatriz.',
      'Las aftas genitales (escrotales o vulvares) son muy dolorosas y DEJAN CICATRIZ atrófica permanente.',
      'La complicación ocular grave es la panuveítis y la uveítis anterior con hipopión estéril.',
      'El fenómeno de Patergia consiste en la aparición de una pústula estéril 24-48h tras pinchar la piel con una aguja.',
      'La afección vascular incluye trombosis venosas profundas recurrentes y aneurismas de arteria pulmonar.',
      'La Colchicina es el fármaco de primera línea para las aftas mucocutáneas; la uveítis requiere corticoides y azatioprina/anti-TNF.'
    ],
    questions: [
      {
        stem: 'Hombre de 29 años consulta por aftas bucales dolorosas muy recurrentes en labios y encías desde hace 2 años y antecedentes de úlceras dolorosas en escroto que dejaron cicatriz. En la exploración oftalmológica se detecta uveítis anterior con nivel de hipopión en cámara anterior. Al realizar una prueba de punción cutánea con aguja estéril en el antebrazo se aprecia a las 36 horas una pápula eritematosa con una pústula estéril central de 3 mm. ¿Cómo se denomina esta prueba cutánea diagnóstica?',
        options: [
          { id: 'A', text: 'Prueba de Mitsuda' },
          { id: 'B', text: 'Fenómeno de Patergia' },
          { id: 'C', text: 'Signo de Darier' },
          { id: 'D', text: 'Prueba de Kveim-Siltzbach' },
          { id: 'E', text: 'Signo de Nikolsky' }
        ],
        correcta: 'B',
        explicacion: 'El desarrollo de una pápula eritematosa o pústula estéril entre las 24 y 48 horas posteriores a una microagresión traumática con aguja estéril en la piel del antebrazo se denomina Fenómeno de Patergia. Es un hallazgo semiológico característico de la Enfermedad de Behçet y traduce hiperreactividad del sistema inmune innato y neutrofílico.',
        recTag: 'EUNACOM 2019 · Q#11'
      },
      {
        stem: '¿Cuál de las siguientes afirmaciones respecto a las úlceras orales y genitales en la Enfermedad de Behçet es CORRECTA?',
        options: [
          { id: 'A', text: 'Las úlceras orales son indoloras y las genitales no duelen' },
          { id: 'B', text: 'Las úlceras genitales curan típicamente dejando cicatriz atrófica permanente, mientras que las orales curan sin cicatriz' },
          { id: 'C', text: 'Las úlceras genitales se acompañan de adenopatías inguinales supurativas' },
          { id: 'D', text: 'Las úlceras orales están presentes en menos del 20% de los pacientes diagnosticados' },
          { id: 'E', text: 'El tratamiento de elección de las úlceras orales es aciclovir oral' }
        ],
        correcta: 'B',
        explicacion: 'En la Enfermedad de Behçet las aftas bucales están presentes en el 100% de los casos y curan espontáneamente en 7-14 días sin dejar secuelas cicatriciales. En contraste, las aftas genitales (localizadas típicamente en escroto o vulva) son más profundas, sumamente dolorosas y curan dejando una cicatriz blanquecina o atrófica permanente que permite documentar retrospectivamente su presencia.',
        recTag: 'EUNACOM 2022 · Q#44'
      }
    ]
  }
];

module.exports = { bloque4Classes };
