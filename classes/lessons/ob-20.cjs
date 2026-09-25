// Clase 3.20 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-20).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-20',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Aloinmunización Rh, profilaxis con inmunoglobulina anti-D a las 28 semanas y postparto, y seguimiento de la gestante sensibilizada con Doppler de arteria cerebral media',
      say: 'Bienvenidos a la clase sobre aloinmunización Rh y manejo de la incompatibilidad sanguínea feto-materna. En esta sesión aprenderemos a distinguir con precisión el test de Coombs indirecto del directo, dominaremos el protocolo preventivo con inmunoglobulina anti-D a las veintiocho semanas y en las primeras setenta y dos horas postparto, entenderemos por qué el fármaco está formalmente contraindicado en pacientes ya sensibilizadas y revisaremos el uso del Doppler de la arteria cerebral media para pesquisar la anemia fetal in útero. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo inmunológico',
      title: 'Fisiopatología de la Aloinmunización Rh e Hidrops Fetal',
      nodes: [
        { id: 'mad', col: 0, row: 1, k: 'start', t: 'Madre Rh negativa (D negativo)', s: 'La gestante carece del antígeno D en la membrana de sus glóbulos rojos' },
        { id: 'hem', col: 1, row: 1, k: 'mech', t: 'Microhemorragia feto-materna', s: 'Paso de hematíes fetales Rh positivos a la circulación materna durante parto o aborto' },
        { id: 'igm', col: 2, row: 0, k: 'good', t: 'Respuesta primaria materna (IgM)', s: 'Síntesis de anticuerpos IgM que no atraviesan la barrera placentaria' },
        { id: 'igg', col: 2, row: 2, k: 'trap', t: 'Memoria y cambio a IgG materna', s: 'Anticuerpos IgG anti-D cruzan activamente la placenta en embarazos posteriores' },
        { id: 'hid', col: 3, row: 2, k: 'trap', t: 'Hemólisis, anemia fetal e hidrops', s: 'Destrucción de hematíes en el bazo fetal con falla cardíaca anasarca y muerte' },
      ],
      edges: [
        { from: 'mad', to: 'hem', label: 'exposición' },
        { from: 'hem', to: 'igm', label: 'sensibilización primaria' },
        { from: 'hem', to: 'igg', label: 'linfocitos B memoria' },
        { from: 'igg', to: 'hid', label: 'transporte transplacentario' },
      ],
      steps: [
        {
          show: ['mad', 'hem', 'igm'],
          note: 'Sensibilización primaria y anticuerpos IgM',
          say: 'Cuando una mujer Rh negativa gesta un feto Rh positivo heredado del padre, el paso de una mínima cantidad de sangre fetal a la circulación materna despierta una respuesta inmunológica primaria con producción de anticuerpos de tipo inmunoglobulina M que no cruzan la placenta, por lo que el primer hijo suele nacer sano.',
        },
        {
          show: ['igg', 'hid'],
          note: 'Anticuerpos IgG en el siguiente embarazo y hemólisis',
          say: 'En embarazos posteriores con un nuevo feto Rh positivo, el sistema inmune materno produce anticuerpos de tipo inmunoglobulina G que atraviesan activamente la placenta, opsonizan los glóbulos rojos fetales y provocan su destrucción en el bazo, desencadenando anemia hemolítica severa, insuficiencia cardíaca de alto gasto e hidrops fetal.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Pruebas de laboratorio',
      title: 'Diferencia Fundamental entre Test de Coombs Indirecto y Directo',
      cards: [
        {
          title: 'Test de Coombs Indirecto',
          tag: 'Se realiza en la MADRE',
          kind: 'key',
          items: [
            {
              t: 'Detecta anticuerpos anti-D libres circulantes',
              d: 'Se solicita en el suero materno en el primer control y rutinariamente a las 28 semanas',
              say: 'El test de Coombs indirecto se procesa en el suero materno para pesquisar la presencia de anticuerpos libres circulantes de tipo inmunoglobulina G dirigidos contra el antígeno D del sistema Rhesus.',
            },
            {
              t: 'Define si la paciente está sensibilizada',
              d: 'Coombs indirecto negativo indica paciente no sensibilizada; positivo indica aloinmunizada',
              say: 'Un resultado negativo confirma que la gestante aún no ha montado respuesta inmune contra hematíes fetales y es candidata a la profilaxis con inmunoglobulina anti-D; un resultado positivo certifica que ya se encuentra aloinmunizada.',
            },
          ],
        },
        {
          title: 'Test de Coombs Directo',
          tag: 'Se realiza en el RECIÉN NACIDO',
          kind: 'criteria',
          items: [
            {
              t: 'Detecta anticuerpos adheridos al eritrocito',
              d: 'Se toma de la sangre del cordón umbilical inmediatamente tras el nacimiento del neonato',
              say: 'El test de Coombs directo se realiza exclusivamente en los glóbulos rojos del recién nacido a partir de una muestra de sangre del cordón umbilical, detectando anticuerpos maternos que ya se encuentran fijados a la superficie eritrocitaria fetal.',
            },
            {
              t: 'Diagnóstico de enfermedad hemolítica perinatal',
              d: 'Coombs directo positivo en el recién nacido confirma hemólisis activa mediada por anticuerpos',
              say: 'Un resultado positivo del Coombs directo en el recién nacido confirma la existencia de enfermedad hemolítica perinatal activa, alertando al equipo de neonatología sobre el riesgo inminente de ictericia severa, anemia y kernícterus.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Prevención universal',
      title: 'Protocolo de Profilaxis con Inmunoglobulina Anti-D (Rhogam)',
      nodes: [
        { id: 'cne', col: 0, row: 1, k: 'start', t: 'Madre Rh negativa no sensibilizada', s: 'Test de Coombs indirecto negativo confirmado en control prenatal' },
        { id: 'd28', col: 1, row: 0, k: 'good', t: 'Dosis antenatal de 28 semanas', s: 'Trescientos microgramos de inmunoglobulina anti-D por vía intramuscular profunda' },
        { id: 'par', col: 2, row: 1, k: 'mech', t: 'Parto de recién nacido Rh positivo', s: 'Toma de grupo, Rh y Coombs directo en sangre de cordón umbilical' },
        { id: 'd72', col: 3, row: 2, k: 'good', t: 'Segunda dosis postparto (72 horas)', s: 'Trescientos microgramos intramusculares en las primeras setenta y dos horas' },
      ],
      edges: [
        { from: 'cne', to: 'd28', label: 'semana 28' },
        { from: 'd28', to: 'par', label: 'protección antenatal' },
        { from: 'par', to: 'd72', label: 'hijo Rh positivo confirmado' },
      ],
      steps: [
        {
          show: ['cne', 'd28'],
          note: 'Dosis profiláctica rutinaria a las 28 semanas',
          say: 'A toda mujer embarazada con grupo sanguíneo Rh negativo que presente un Coombs indirecto negativo a las veintiocho semanas de gestación, se le debe administrar una dosis profiláctica universal de trescientos microgramos de inmunoglobulina anti-D por vía intramuscular.',
        },
        {
          show: ['par', 'd72'],
          note: 'Segunda dosis en las primeras 72 horas postparto',
          say: 'Tras el nacimiento se analiza la sangre de cordón del recién nacido. Si se confirma que el neonato es Rh positivo con Coombs directo negativo, se administra una segunda dosis de trescientos microgramos de inmunoglobulina anti-D a la madre dentro de las primeras setenta y dos horas postparto.',
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Eventos de riesgo sensibilizante',
      title: 'Indicaciones Adicionales de Profilaxis con Inmunoglobulina Anti-D',
      head: ['Evento clínico sensibilizante', 'Momento de administración', 'Dosis recomendada'],
      rows: [
        {
          cells: ['Aborto espontáneo o provocado y AMEU', 'Dentro de las primeras setenta y dos horas del evento', 'Ciento veinte a trescientos microgramos intramusculares'],
          say: 'Ante todo aborto espontáneo, legrado o evacuación uterina en mujer Rh negativa no sensibilizada, se administra inmunoglobulina anti-D en las primeras setenta y dos horas.',
        },
        {
          cells: ['Embarazo ectópico o mola hidatiforme', 'Inmediatamente tras el diagnóstico o resolución quirúrgica', 'Trescientos microgramos intramusculares'],
          say: 'El embarazo ectópico y la enfermedad trofoblástica gestacional pueden liberar hematíes a la circulación materna, exigiendo profilaxis con trescientos microgramos.',
        },
        {
          cells: ['Procedimientos invasivos (amniocentesis)', 'Previo o inmediatamente tras la punción intrauterina', 'Trescientos microgramos intramusculares'],
          say: 'Cualquier procedimiento invasivo como biopsia de vellosidades coriales o amniocentesis requiere administración preventiva de anti-D por el trauma vascular placentario.',
        },
        {
          cells: ['Metrorragia de la segunda mitad o trauma', 'Tras el sangrado agudo o traumatismo abdominal cerrado', 'Trescientos microgramos intramusculares'],
          say: 'Frente a traumatismos abdominales o metrorragias del tercer trimestre por desprendimiento o placenta previa, es mandatorio administrar la inmunoglobulina profiláctica.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Regla de oro de seguridad',
      title: '¡Contraindicación de Inmunoglobulina Anti-D en Pacientes Sensibilizadas!',
      cards: [
        {
          title: 'Coombs Indirecto Positivo = Sensibilizada',
          tag: '¡Prohibido administrar Rhogam!',
          kind: 'alert',
          items: [
            {
              t: 'La inmunoglobulina es inútil si ya hay anticuerpos',
              d: 'La paciente ya desarrolló clones de linfocitos de memoria y títulos de anticuerpos IgG activos',
              say: 'Si el test de Coombs indirecto resulta positivo, significa que la paciente ya ha desarrollado anticuerpos e inmunidad de memoria contra el factor Rh. En este escenario clínico la administración de inmunoglobulina anti-D resulta completamente estéril y está formalmente contraindicada.',
            },
            {
              t: 'Mecanismo pasivo vs memoria activa',
              d: 'La inmunoglobulina solo neutraliza hematíes circulantes antes de que activen la respuesta primaria',
              say: 'La inmunoglobulina anti-D es una profilaxis pasiva diseñada exclusivamente para opsonizar y destruir hematíes fetales en el torrente materno antes de que activen los linfocitos maternos; una vez clonada la memoria inmune, no ejerce ningún beneficio terapéutico.',
            },
          ],
        },
        {
          title: 'Conducta Correcta en la Paciente Sensibilizada',
          tag: 'Seguimiento especializado',
          kind: 'key',
          items: [
            {
              t: 'Titulación mensual de anticuerpos maternos',
              d: 'El título crítico de uno a dieciséis o uno a treinta y dos marca el riesgo de anemia severa',
              say: 'La conducta médica adecuada ante una madre aloinmunizada es el seguimiento serológico periódico con titulación mensual de anticuerpos anti-D, vigilando si los títulos alcanzan el nivel crítico de uno en dieciséis o uno en treinta y dos.',
            },
            {
              t: 'Derivación a Unidad de Alto Riesgo Obstétrico',
              d: 'Requiere evaluación hemodinámica fetal periódica con ecografía Doppler de arteria cerebral media',
              say: 'Toda gestante sensibilizada debe ser derivada oportunamente al nivel terciario en la unidad de alto riesgo obstétrico para una estricta monitorización ecográfica fetal mediante Doppler de la arteria cerebral media.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Seguimiento hemodinámico fetal',
      title: 'Manejo de la Gestante Rh Sensibilizada y Pesquisa de Anemia Fetal',
      nodes: [
        { id: 'pos', col: 0, row: 1, k: 'start', t: 'Coombs indirecto positivo (sensibilizada)', s: 'Gestante con anticuerpos anti-D circulantes confirmados' },
        { id: 'tit', col: 1, row: 1, k: 'mech', t: 'Titulación de anticuerpos maternos', s: 'Vigilancia mensual; título crítico igual o mayor a 1:16 o 1:32' },
        { id: 'acm', col: 2, row: 1, k: 'good', t: 'Doppler de arteria cerebral media', s: 'Velocidad sistólica máxima seriada cada una a dos semanas desde la semana 18' },
        { id: 'ane', col: 3, row: 0, k: 'trap', t: 'Velocidad mayor a 1.5 MoM', s: 'Predice anemia fetal moderada a severa con más del noventa y cinco por ciento de exactitud' },
        { id: 'tra', col: 4, row: 0, k: 'good', t: 'Cordocentesis y transfusión in utero', s: 'Punción de vena umbilical y transfusión intravascular de glóbulos rojos O Rh negativo' },
      ],
      edges: [
        { from: 'pos', to: 'tit', label: 'seguimiento serológico' },
        { from: 'tit', to: 'acm', label: 'título crítico superado' },
        { from: 'acm', to: 'ane', label: 'hiperflujo vascular' },
        { from: 'ane', to: 'tra', label: 'confirmación y rescate' },
      ],
      steps: [
        {
          show: ['pos', 'tit', 'acm'],
          note: 'Seguimiento serológico y Doppler de flujo',
          say: 'Cuando el título de anticuerpos maternos supera el umbral crítico de uno a dieciséis, el feto tiene un riesgo significativo de desarrollar anemia hemolítica. A partir de ese momento iniciamos la vigilancia no invasiva con ecografía Doppler de la arteria cerebral media cada una a dos semanas.',
        },
        {
          show: ['ane', 'tra'],
          note: 'Diagnóstico de anemia severa y transfusión fetal',
          say: 'Si la velocidad sistólica máxima en la arteria cerebral media supera uno punto cinco múltiplos de la mediana para la edad gestacional, se diagnostica anemia fetal moderada a severa. Se realiza una cordocentesis de urgencia para medir el hematocrito fetal y transfundir glóbulos rojos concentrados dentro del útero.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estándar de oro no invasivo',
      title: 'Doppler de la Velocidad Sistólica Máxima en Arteria Cerebral Media',
      cards: [
        {
          title: 'Fundamento Fisiopatológico del Hiperflujo',
          tag: 'Menor viscosidad y mayor velocidad',
          kind: 'key',
          items: [
            {
              t: 'Disminución de la viscosidad sanguínea fetal',
              d: 'Al caer la hemoglobina la sangre se vuelve más fluida reduciendo la resistencia vascular',
              say: 'En presencia de anemia fetal disminuye la concentración de glóbulos rojos circulantes, lo que reduce la viscosidad sanguínea y genera un estado hiperdinámico compensatorio que eleva significativamente la velocidad de flujo en las arterias cerebrales.',
            },
            {
              t: 'Medición de la velocidad sistólica máxima',
              d: 'Se mide en el tercio proximal de la arteria cerebral media cerca de su origen en el polígono',
              say: 'Mediante ecografía Doppler color se identifica la arteria cerebral media en el polígono de Willis y se mide el pico sistólico de velocidad en su tercio proximal, manteniendo un ángulo de insonación de cero grados para máxima exactitud de cálculo.',
            },
          ],
        },
        {
          title: 'Interpretación Clínica del Resultado',
          tag: 'El corte de 1.5 MoM',
          kind: 'alert',
          items: [
            {
              t: 'Velocidad menor a 1.5 múltiplos de la mediana',
              d: 'Ausencia de anemia fetal significativa; se mantiene seguimiento ecográfico cada dos semanas',
              say: 'Si la velocidad sistólica máxima se sitúa por debajo de uno punto cinco múltiplos de la mediana para la edad gestacional, se descarta anemia fetal moderada o severa y se mantiene el seguimiento Doppler cada dos semanas.',
            },
            {
              t: 'Velocidad mayor o igual a 1.5 MoM',
              d: 'Sensibilidad mayor al noventa y cinco por ciento para anemia moderada a severa',
              say: 'Un registro igual o superior a uno punto cinco múltiplos de la mediana predice con más de un noventa y cinco por ciento de sensibilidad una anemia fetal moderada a severa, constituyendo la indicación formal de cordocentesis y eventual transfusión in útero.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapéutica in utero',
      title: 'Cordocentesis y Transfusión Intravascular Intrauterina',
      cards: [
        {
          title: 'Confirmación Diagnóstica Invasiva',
          tag: 'Punción de vena umbilical',
          kind: 'criteria',
          items: [
            {
              t: 'Punción percutánea guiada por ecografía',
              d: 'Se accede directamente a la vena umbilical cerca de su inserción placentaria',
              say: 'La cordocentesis es un procedimiento invasivo en el que se introduce una aguja espinal fina bajo visión ecográfica continua hasta puncionar la vena umbilical en su inserción placentaria, extrayendo una muestra de sangre fetal pura.',
            },
            {
              t: 'Medición de hematocrito fetal directo',
              d: 'Permite medir de forma exacta y fidedigna la hemoglobina, hematocrito y grupo fetal',
              say: 'La muestra obtenida permite medir de forma instantánea el hematocrito fetal directo en el pabellón de procedimientos, confirmando la severidad de la anemia para calcular el volumen exacto de eritrocitos a transfundir.',
            },
          ],
        },
        {
          title: 'Procedimiento de Transfusión Intravascular',
          tag: 'Sangre O Rh negativo leuco-depletada',
          kind: 'pharma',
          items: [
            {
              t: 'Transfusión de concentrado de hematíes O negativo',
              d: 'Glóbulos rojos concentrados, lavados, irradiados y con hematocrito del ochenta por ciento',
              say: 'Si el hematocrito fetal se encuentra por debajo del treinta por ciento, se infunde a través de la misma aguja concentrado de glóbulos rojos de grupo O Rh negativo, previamente lavados, irradiados y desleucocitados con hematocrito del ochenta por ciento.',
            },
            {
              t: 'Corrección hemodinámica inmediata',
              d: 'Se eleva el hematocrito hasta un cuarenta o cuarenta y cinco por ciento salvando la vida fetal',
              say: 'Esta transfusión intrauterina corrige inmediatamente la hipoxia tisular fetal, restituye la oxigenación celular, revierte los signos de edema o ascitis incipiente y previene el desarrollo catastrófico de hidrops fetalis.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo de Abordaje Clínico de la Paciente Rh Negativa',
      say: 'Revisemos el algoritmo integral de profilaxis y manejo de la embarazada con grupo sanguíneo Rh negativo.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Profilaxis Antenatal de Rutina · 28 Semanas',
      stem: 'Una primigesta de 28 semanas de gestación, sana, con grupo sanguíneo O Rh negativo acude a su control de rutina. Su Test de Coombs Indirecto solicitado a las 28 semanas resulta NEGATIVO. Su esposo es Rh positivo conocido.',
      question: '¿Cuál es la conducta médica indicada según las guías clínicas del MINSAL?',
      options: [
        { letter: 'A', text: 'Indicar interrupción inmediata del embarazo mediante cesárea electiva' },
        { letter: 'B', text: 'Administrar Inmunoglobulina Anti-D (Rhogam) 300 mcg intramuscular profiláctica' },
        { letter: 'C', text: 'No administrar ninguna vacuna ni fármaco hasta después del parto' },
        { letter: 'D', text: 'Realizar amniocentesis diagnóstica para espectrofotometría de líquido amniótico' },
        { letter: 'E', text: 'Indicar transfusión de plasma fresco congelado a la madre' },
      ],
      correct: 'B',
      explanation: 'Toda paciente embarazada con grupo sanguíneo Rh negativo que no se encuentre sensibilizada (demostrado por un Test de Coombs Indirecto NEGATIVO a las 28 semanas de gestación) debe recibir una dosis de PROFILAXIS ANTENATAL de rutina con Inmunoglobulina Anti-D (300 mcg IM). Esta dosis reduce la tasa de aloinmunización durante el tercer trimestre de un 2% a menos del 0.1%. Posteriormente, si el recién nacido resulta Rh positivo, recibirá una segunda dosis postparto dentro de las primeras 72 horas.',
      say: {
        stem: 'Una primigesta de veintiocho semanas de gestación con grupo sanguíneo O Rh negativo presenta un test de Coombs indirecto negativo.',
        question: '¿Cuál es la conducta médica indicada según las guías clínicas del MINSAL?',
        options: 'La opción A propone cesárea electiva. La B administrar inmunoglobulina anti-D trescientos microgramos intramuscular profiláctica. La C esperar al postparto. La D amniocentesis diagnóstica. La E plasma fresco materno. Piénsalo bien.',
        answer: 'La respuesta correcta es la B. Toda gestante Rh negativa no sensibilizada debe recibir trescientos microgramos de inmunoglobulina anti-D intramuscular a las veintiocho semanas de gestación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Gestante Sensibilizada · Conducta y Doppler de ACM',
      stem: 'Una multigesta de 16 semanas acude a control prenatal. Se constata grupo sanguíneo B Rh negativo con Test de Coombs Indirecto POSITIVO con títulos de 1:64.',
      question: '¿Cuál de las siguientes afirmaciones es correcta respecto al manejo de esta paciente?',
      options: [
        { letter: 'A', text: 'Debe administrarse Inmunoglobulina Anti-D 300 mcg de inmediato para revertir los títulos' },
        { letter: 'B', text: 'Está contraindicada la Inmunoglobulina Anti-D; debe evaluarse anemia con Doppler de ACM' },
        { letter: 'C', text: 'Debe realizarse de inmediato una exanguinotransfusión total materna' },
        { letter: 'D', text: 'Se debe indicar legrado uterino terapéutico por inviabilidad fetal inminente' },
        { letter: 'E', text: 'Los anticuerpos IgM maternos no cruzan la placenta, por lo que no hay riesgo' },
      ],
      correct: 'B',
      explanation: 'Una paciente con Test de Coombs Indirecto POSITIVO ya se encuentra aloinmunizada (sensibilizada). La administración de Inmunoglobulina Anti-D (Rhogam) en una paciente ya sensibilizada es COMPLETAMENTE INÚTIL Y ESTÁ CONTRAINDICADA, ya que su mecanismo es la prevención primaria y no neutraliza anticuerpos ni células de memoria preexistentes. El manejo correcto consiste en el control estricto en ARO para pesquisar anemia fetal mediante ecografía Doppler de la velocidad sistólica máxima en la Arteria Cerebral Media (ACM).',
      say: {
        stem: 'Una gestante de dieciséis semanas con grupo B Rh negativo presenta test de Coombs indirecto positivo con títulos elevados de uno en sesenta y cuatro.',
        question: '¿Cuál de las afirmaciones es correcta respecto al manejo de esta paciente?',
        options: 'La opción A propone administrar inmunoglobulina anti-D urgente. La B que la anti-D está contraindicada y se evalúa anemia fetal con Doppler de arteria cerebral media. La C exanguinotransfusión. La D legrado. La E que no hay peligro. Piénsalo bien.',
        answer: 'La respuesta correcta es la B. En una paciente ya sensibilizada la inmunoglobulina anti-D está contraindicada; el manejo consiste en monitorizar anemia fetal con Doppler de la arteria cerebral media.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Conceptos Clave de Aloinmunización Rh para el EUNACOM',
      cards: [
        {
          title: 'Profilaxis con Inmunoglobulina Anti-D',
          tag: 'Dosis y momentos normados',
          kind: 'pharma',
          items: [
            {
              t: 'Dosis antenatal de 28 semanas y postparto',
              d: 'Trescientos microgramos IM a las 28 semanas y segunda dosis en primeras 72 horas si feto es Rh positivo',
              say: 'La profilaxis con trescientos microgramos de inmunoglobulina anti-D se administra de rutina a las veintiocho semanas de gestación y dentro de las primeras setenta y dos horas postparto si se confirma que el neonato es Rh positivo con Coombs directo negativo.',
            },
            {
              t: 'Contraindicada en paciente sensibilizada',
              d: 'Coombs indirecto positivo certifica sensibilización previa y contraindica formalmente el Rhogam',
              say: 'La inmunoglobulina anti-D es una medida estrictamente profiláctica que solo actúa en pacientes no sensibilizadas con Coombs indirecto negativo; si la madre ya está aloinmunizada el fármaco es inútil y está contraindicado.',
            },
          ],
        },
        {
          title: 'Monitoreo de la Paciente Sensibilizada',
          tag: 'Doppler no invasivo',
          kind: 'key',
          items: [
            {
              t: 'Doppler de arteria cerebral media',
              d: 'Velocidad sistólica máxima mayor o igual a 1.5 múltiplos de la mediana predice anemia severa',
              say: 'El Doppler de la velocidad sistólica máxima en la arteria cerebral media superior a uno punto cinco múltiplos de la mediana es el estándar de oro no invasivo para pesquisar anemia fetal moderada a severa in útero.',
            },
            {
              t: 'Tratamiento con transfusión intrauterina',
              d: 'Cordocentesis percutánea de vena umbilical e infusión de glóbulos rojos O Rh negativo concentrados',
              say: 'La anemia fetal grave se confirma mediante cordocentesis y se resuelve mediante transfusión intrauterina de glóbulos rojos concentrados O Rh negativo, salvando la vida del feto. Con esto cerramos con éxito el libro completo de Obstetricia.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Abordaje Clínico de la Gestante Rh Negativa',
    root: N(
      'start',
      'Gestante con Grupo Sanguíneo Rh Negativo',
      'Solicitar Test de Coombs Indirecto en sangre materna en primer control prenatal',
      'Iniciamos el control prenatal de la gestante Rh negativa solicitando test de Coombs indirecto.',
      [
        'Test de Coombs Indirecto Negativo (No Sensibilizada)',
        N(
          'do',
          'Protocolo de Profilaxis con Inmunoglobulina Anti-D',
          'Repetir Coombs a las 28 semanas · Administrar Rhogam 300 mcg IM a las 28 semanas',
          'Si el Coombs es negativo repetimos a las veintiocho semanas y administramos anti-D profiláctica.',
          [
            'Nacimiento de feto Rh positivo con Coombs directo negativo',
            N(
              'ok',
              'Segunda dosis de Inmunoglobulina Anti-D',
              'Administrar 300 mcg IM dentro de las primeras 72 horas posteriores al parto',
              'Confirmado el recién nacido Rh positivo administramos la segunda dosis en las primeras setenta y dos horas.',
            ),
          ],
        ),
      ],
      [
        'Test de Coombs Indirecto Positivo (Sensibilizada)',
        N(
          'alert',
          'Gestante Aloinmunizada (¡Inmunoglobulina Anti-D Contraindicada!)',
          'Derivación a ARO · titulación mensual · umbral crítico de títulos 1:16',
          'Si el Coombs es positivo la paciente está sensibilizada y derivamos a alto riesgo obstétrico.',
          [
            'Título crítico mayor o igual a 1:16 o 1:32 alcanzado',
            N(
              'do',
              'Doppler de Velocidad Sistólica Máxima en Arteria Cerebral Media',
              'Evaluación seriada cada una a dos semanas a partir de las 18 a 20 semanas de gestación',
              'Superado el título crítico iniciamos Doppler seriado de la arteria cerebral media.',
              [
                'Velocidad sistólica máxima mayor o igual a 1.5 Múltiplos de la Mediana',
                N(
                  'alert',
                  'Sospecha de Anemia Fetal Severa',
                  'Cordocentesis percutánea de urgencia y transfusión intravascular intrauterina',
                  'Si supera uno punto cinco múltiplos indicamos cordocentesis y transfusión intrauterina inmediata.',
                ),
              ],
            ),
          ],
        ),
      ],
    ),
  },
};
