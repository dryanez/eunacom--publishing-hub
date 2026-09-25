// Clase 3.5 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-05).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-05',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Clasificación cronológica, diagnóstico diferencial de los cuatro síndromes, fármacos de primera línea y contraindicación de IECA y ARA II',
      say: 'Bienvenidos a la clase sobre trastornos hipertensivos del embarazo. La patología hipertensiva representa una de las principales causas de morbimortalidad materna y perinatal en Chile y el mundo. En esta sesión dominaremos la clasificación basada en el punto de corte de las veinte semanas, el diagnóstico diferencial entre hipertensión crónica, gestacional y preeclampsia, los antihipertensivos orales seguros, el riesgo teratogénico letal de los inhibidores del sistema renina-angiotensina y el protocolo de seguimiento expectante hasta las treinta y siete semanas. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Clasificación cronológica',
      title: 'Estratificación de los síndromes hipertensivos según edad gestacional',
      nodes: [
        { id: 'hta', col: 0, row: 1, k: 'start', t: 'Presión arterial elevada', s: 'Sistólica mayor o igual a 140 o diastólica mayor o igual a 90 mmHg' },
        { id: 'cro', col: 2, row: 0, k: 'risk', t: 'Hipertensión crónica', s: 'Diagnosticada antes de las 20 semanas o previa a la concepción' },
        { id: 'sem', col: 2, row: 2, k: 'mech', t: 'Aparición tras semana 20', s: 'Pesquisa en segunda mitad del embarazo con o sin proteinuria' },
        { id: 'ges', col: 4, row: 1, k: 'good', t: 'Hipertensión gestacional', s: 'Sin proteinuria ni daño de órgano blanco; resolución posparto' },
        { id: 'pre', col: 4, row: 3, k: 'alert', t: 'Preeclampsia', s: 'Asociada a proteinuria patológica o compromiso multiorgánico' },
      ],
      edges: [
        { from: 'hta', to: 'cro', label: 'antes de sem 20' },
        { from: 'hta', to: 'sem', label: 'después de sem 20' },
        { from: 'sem', to: 'ges', label: 'proteinuria negativa' },
        { from: 'sem', to: 'pre', label: 'proteinuria positiva' },
      ],
      steps: [
        {
          show: ['hta'],
          note: 'Definición de hipertensión gestacional',
          say: 'Definimos hipertensión en el embarazo ante una presión arterial sistólica mayor o igual a ciento cuarenta milímetros de mercurio, o diastólica mayor o igual a noventa milímetros de mercurio, confirmada en dos tomas separadas por al menos cuatro horas de reposo.',
        },
        {
          show: ['cro'],
          note: 'Hipertensión arterial crónica',
          say: 'Si la hipertensión se diagnostica antes de las veinte semanas de gestación, o si la paciente ya era hipertensa conocida antes de embarazarse, clasificamos el cuadro como hipertensión arterial crónica. Esta condición suele persistir más allá de las doce semanas posparto.',
        },
        {
          show: ['sem', 'ges', 'pre'],
          note: 'Cuadros de novo de la segunda mitad',
          say: 'Cuando la hipertensión aparece por primera vez después de las veinte semanas, el estudio de laboratorio es mandatorio. Si la proteinuria es negativa y no hay daño de órgano blanco, es una hipertensión gestacional pura. Si existe proteinuria significativa o disfunción orgánica, estamos frente a una preeclampsia.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios diagnósticos formales',
      title: 'Pilares diagnósticos de la preeclampsia en el laboratorio',
      cards: [
        {
          title: 'Criterio de proteinuria',
          tag: 'Compromiso glomerular',
          kind: 'criteria',
          items: [
            {
              t: 'Proteinuria de 24 horas',
              d: 'Mayor o igual a 300 miligramos en recolección completa',
              say: 'El estándar diagnóstico formal es la presencia de trescientos miligramos o más de proteínas en orina de veinticuatro horas, lo que refleja daño endotelial y aumento de permeabilidad en el glomérulo renal.',
            },
            {
              t: 'Índice proteinuria creatininuria',
              d: 'Mayor o igual a 0.3 en muestra aislada de orina',
              say: 'En la urgencia, el índice proteinuria sobre creatininuria en muestra aislada de orina es el método rápido de elección: un valor mayor o igual a cero coma tres confirma proteinuria patológica equivalente.',
            },
          ],
        },
        {
          title: 'Definición moderna sin proteinuria',
          tag: 'Compromiso multiorgánico',
          kind: 'alert',
          items: [
            {
              t: 'Disfunción de órgano blanco',
              d: 'Plaquetopenia, alza de transaminasas o creatinina elevada',
              say: 'La preeclampsia puede diagnosticarse sin proteinuria si la hipertensión se acompaña de plaquetas bajo cien mil, transaminasas duplicadas o creatinina mayor a uno coma un miligramos por decilitro.',
            },
            {
              t: 'Compromiso fetoplacentario',
              d: 'Restricción de crecimiento fetal severa de causa vascular',
              say: 'La aparición de una restricción de crecimiento fetal severa asociada a hipertensión de novo también califica como preeclampsia, revelando la afectación del lecho vascular placentario.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'Contraste clínico entre los cuatro síndromes hipertensivos',
      head: ['Entidad clínica', 'Momento de inicio', 'Proteinuria significativa', 'Evolución posparto'],
      rows: [
        {
          cells: ['Hipertensión crónica', 'Antes de la semana 20 o previa', 'Negativa basalmente', 'Persiste tras 12 semanas'],
          say: 'La hipertensión crónica inicia antes de la semana veinte, no presenta proteinuria al inicio y se mantiene de forma indefinida en el período posparto.',
        },
        {
          cells: ['Hipertensión gestacional', 'Después de la semana 20', 'Negativa (menor a 300 mg)', 'Normaliza antes de 12 semanas'],
          say: 'La hipertensión gestacional debuta en la segunda mitad del embarazo, cursa con orina sin proteinuria y resuelve completamente dentro de las doce semanas posteriores al parto.',
        },
        {
          cells: ['Preeclampsia', 'Después de la semana 20', 'Positiva (mayor o igual a 300 mg)', 'Resuelve gradualmente posparto'],
          say: 'La preeclampsia es una enfermedad sistémica de novo del embarazo con daño glomerular que desaparece de forma paulatina tras la expulsión de la placenta.',
        },
        {
          cells: ['Preeclampsia sobreagregada', 'Paciente con HTA crónica previa', 'Aparición brusca de proteinuria', 'Empeoramiento agudo y secuelas'],
          say: 'Ocurre cuando una hipertensa crónica presenta un salto tensional incontrolable, proteinuria de novo o daño multiorgánico agudo tras la semana veinte de gestación.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Mecanismo endotelial',
      title: 'Fisiopatología: de la invasión defectuosa al daño endotelial sistémico',
      nodes: [
        { id: 'tro', col: 0, row: 1, k: 'start', t: 'Invasión trofoblástica fallida', s: 'Falta de remodelación de las arterias espirales uterinas' },
        { id: 'isq', col: 1, row: 1, k: 'mech', t: 'Isquemia placentaria', s: 'Hipoperfusión trofoblástica y estrés oxidativo local' },
        { id: 'tox', col: 2, row: 1, k: 'risk', t: 'Factores antiangiogénicos', s: 'Liberación masiva de tirosina quinasa soluble tipo uno y endoglina' },
        { id: 'end', col: 3, row: 0, k: 'alert', t: 'Disfunción endotelial', s: 'Vasoespasmo generalizado y aumento de permeabilidad capilar' },
        { id: 'org', col: 4, row: 2, k: 'trap', t: 'Daño de órgano blanco', s: 'Endoteliosis capilar glomerular, isquemia hepática y cerebral' },
      ],
      edges: [
        { from: 'tro', to: 'isq', label: 'resistencia vascular' },
        { from: 'isq', to: 'tox', label: 'factores circulantes' },
        { from: 'tox', to: 'end', label: 'bloqueo de óxido nítrico' },
        { from: 'end', to: 'org', label: 'microangiopatía difusa' },
      ],
      steps: [
        {
          show: ['tro', 'isq'],
          note: 'Defecto en la placentación primaria',
          say: 'En el primer trimestre, el citotrofoblasto no logra invadir ni desmuscularizar adecuadamente las arterias espirales miometriales. Los vasos permanecen rígidos y de alta resistencia, provocando hipoperfusión e isquemia placentaria crónica.',
        },
        {
          show: ['tox', 'end'],
          note: 'Liberación de factores antiangiogénicos',
          say: 'La placenta isquémica libera al torrente circulatorio materno altos niveles de tirosina quinasa soluble tipo uno y endoglina soluble. Estas sustancias atrapan al factor de crecimiento endotelial vascular, destruyendo la síntesis de óxido nítrico y prostaciclina.',
        },
        {
          show: ['org'],
          note: 'Disfunción endotelial y daño multiorgánico',
          say: 'La pérdida de la barrera endotelial desata vasoespasmo sostenido, microtrombosis y fuga capilar. A nivel renal genera endoteliosis capilar glomerular con proteinuria, y a nivel sistémico causa edema, hipertensión e isquemia tisular.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento farmacológico',
      title: 'Antihipertensivos orales seguros y fármacos prohibidos',
      cards: [
        {
          title: 'Fármacos seguros de primera línea',
          tag: 'Manejo ambulatorio y hospitalario',
          kind: 'pharma',
          items: [
            {
              t: 'Labetalol oral',
              d: 'Cien a cuatrocientos miligramos cada ocho a doce horas',
              say: 'El labetalol es el fármaco de elección por su acción combinada alfa y betabloqueadora. Reduce la resistencia periférica sin alterar el gasto cardíaco ni la perfusión placentaria.',
            },
            {
              t: 'Metildopa oral',
              d: 'Doscientos cincuenta a quinientos miligramos cada ocho horas',
              say: 'La alfa-metildopa es un agonista alfa dos central con décadas de respaldo en seguridad fetal. Su desventaja es un inicio de acción lento y frecuente somnolencia materna.',
            },
            {
              t: 'Nifedipino de acción retardada',
              d: 'Diez a veinte miligramos cada doce horas por vía oral',
              say: 'El nifedipino de liberación prolongada es un excelente bloqueador de canales de calcio para el control sostenido ambulatorio. No debe utilizarse por vía sublingual.',
            },
          ],
        },
        {
          title: 'Fármacos estrictamente contraindicados',
          tag: 'Peligro teratogénico letal',
          kind: 'alert',
          items: [
            {
              t: 'IECA y ARA II prohibidos',
              d: 'Enalapril, Captopril, Losartán y Valsartán proscritos',
              say: 'Los inhibidores de la enzima convertidora y antagonistas de angiotensina dos están absolutamente prohibidos. Causan disgenesia renal fetal, anuria, oligohidramnios severo, hipoplasia pulmonar y muerte.',
            },
            {
              t: 'Diuréticos contraindicados',
              d: 'Furosemida e hidroclorotiazida reducen el volumen plasmático',
              say: 'Los diuréticos están contraindicados porque deprimen aún más el volumen intravascular materno y empeoran la perfusión placentaria, salvo en caso de edema agudo de pulmón.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Protocolo clínico',
      title: 'Manejo expectante de la preeclampsia sin criterios de severidad',
      head: ['Aspecto de control', 'Parámetro evaluado', 'Conducta médica estándar'],
      rows: [
        {
          cells: ['Nivel de atención', 'Hospitalización en ARO', 'Ingreso hospitalario para evaluación materno fetal inicial'],
          say: 'Toda preeclampsia confirmada requiere ingreso a una unidad de alto riesgo obstétrico para evaluar la magnitud del compromiso y descartar criterios de severidad ocultos.',
        },
        {
          cells: ['Vigilancia de laboratorio', 'Hemograma, transaminasas, creatinina, proteinuria', 'Control dos veces por semana para detectar progresión a severidad'],
          say: 'Se solicita perfil toxémico seriado bisemanal para pesquisar precozmente trombocitopenia, daño hepático o disfunción renal aguda.',
        },
        {
          cells: ['Bienestar fetal', 'Registro basal no estresante y Doppler fetal', 'Monitoreo bisemanal y ecografía de crecimiento cada dos semanas'],
          say: 'Evaluamos el bienestar fetal con registros basales y ecografía Doppler seriada para descartar restricción de crecimiento asociada u oligoamnios.',
        },
        {
          cells: ['Momento de interrupción', 'Edad gestacional cumplida', 'Interrupción electiva al cumplir las treinta y siete semanas'],
          say: 'En ausencia de criterios de severidad, el embarazo se mantiene bajo vigilancia hasta cumplir las treinta y siete semanas, momento en que se procede a la interrupción del embarazo.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Manejo de la hipertensión arterial detectada en el embarazo',
      say: 'Revisemos el algoritmo estructurado para clasificar y manejar a la paciente con cifras tensionales elevadas durante la gestación.',
    },

    {
      type: 'table',
      kicker: 'Trampas frecuentes EUNACOM',
      title: 'Distracciones y errores comunes en preguntas de hipertensión y embarazo',
      head: ['Escenario planteado', 'Error habitual del postulante', 'Conducta médica correcta'],
      rows: [
        {
          cells: ['Gestante con HTA crónica que toma Enalapril al inicio del control', 'Mantener Enalapril si la presión está bien controlada', 'Suspender de inmediato y sustituir por Labetalol o Metildopa'],
          say: 'Nunca se mantiene un IECA o ARA dos en el embarazo. Aunque la presión esté perfecta, deben retirarse de inmediato por su gravísima toxicidad renal y pulmonar sobre el feto.',
        },
        {
          cells: ['Embarazada de 28 semanas con PA 142/92 y tira reactiva negativa', 'Dar de alta asumiendo que no tiene preeclampsia', 'Solicitar proteinuria de 24 horas o índice proteinuria creatininuria'],
          say: 'Una tira reactiva negativa no descarta preeclampsia. Se debe confirmar con proteinuria de veinticuatro horas o índice en orina antes de catalogarla como hipertensión gestacional.',
        },
        {
          cells: ['Preeclampsia sin criterios de severidad a las 34 semanas', 'Realizar cesárea de urgencia inmediata', 'Manejo expectante hospitalizado hasta las 37 semanas con vigilancia estricta'],
          say: 'La preeclampsia leve no es indicación de interrupción antes de término. Se vigila cuidadosamente en el hospital hasta alcanzar las treinta y siete semanas.',
        },
        {
          cells: ['Embarazada con PA 145/95 y creatinina en 1.3 sin proteinuria', 'Tratarla como hipertensión gestacional benigna', 'Clasificarla como preeclampsia con criterios de severidad'],
          say: 'La creatinina mayor a uno coma un miligramos por decilitro define preeclampsia severa aun en ausencia total de proteinuria.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso de razonamiento clínico',
      title: 'Evaluación y clasificación de hipertensión de novo en el tercer trimestre',
      stem: 'Una primigesta de 32 semanas de gestación acude a control prenatal habitual. Se constata presión arterial de 145/95 mmHg, repetida a las 4 horas con 148/94 mmHg. Se encuentra asintomática, sin cefalea, tinitus ni dolor abdominal. La proteinuria de 24 horas informa 450 miligramos. El recuento de plaquetas es de 210.000 por milímetro cúbico, creatinina 0.7 mg/dL y transaminasas normales.',
      question: '¿Cuál es el diagnóstico más adecuado y la conducta inicial?',
      options: [
        { letter: 'A', text: 'Hipertensión crónica; iniciar enalapril oral ambulatorio' },
        { letter: 'B', text: 'Hipertensión gestacional; dar de alta con control en policlínico' },
        { letter: 'C', text: 'Preeclampsia sin criterios de severidad; hospitalizar en ARO y seguimiento expectante hasta las 37 semanas' },
        { letter: 'D', text: 'Preeclampsia severa; indicar sulfato de magnesio y cesárea de urgencia' },
        { letter: 'E', text: 'Síndrome HELLP incipiente; solicitar transfusión de plaquetas' },
      ],
      correct: 'C',
      explanation: 'La paciente presenta hipertensión de novo diagnosticada después de la semana 20 (semana 32), con proteinuria patológica (450 mg/24h, superando el umbral de 300 mg), sin síntomas de alarma ni disfunción de órgano blanco (PA < 160/110, plaquetas normales, enzimas hepáticas normales y creatinina normal). Corresponde a Preeclampsia sin Criterios de Severidad. La conducta es hospitalizar en Alto Riesgo Obstétrico (ARO) para vigilancia materno-fetal expectante hasta las 37 semanas.',
      say: {
        stem: 'Una primigesta de treinta y dos semanas presenta presión arterial de ciento cuarenta y ocho con noventa y cuatro milímetros de mercurio en dos tomas. Se encuentra asintomática, con proteinuria de veinticuatro horas de cuatrocientos cincuenta miligramos, plaquetas de doscientas diez mil y función hepatorrenal normal.',
        question: '¿Cuál es el diagnóstico más adecuado y la conducta inicial?',
        options: 'La opción A plantea hipertensión crónica con enalapril. La B hipertensión gestacional y alta. La C preeclampsia sin criterios de severidad con hospitalización en ARO hasta las treinta y siete semanas. La D preeclampsia severa y cesárea urgente. Piénsalo.',
        answer: 'La respuesta correcta es la C. Es una preeclampsia que debuta después de la semana veinte con proteinuria patológica pero sin daño de órgano blanco ni cifras de crisis. Se hospitaliza en ARO y se mantiene conducta expectante vigilada hasta las treinta y siete semanas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Diciembre 2025',
      title: 'EUNACOM Diciembre 2025 · Pregunta 173',
      stem: 'Una paciente de 25 años cursando su primer embarazo de 37 semanas acude a control. En el examen físico se observa ligero edema de extremidades inferiores y sus signos vitales muestran frecuencia cardíaca de 70 latidos por minuto y presión arterial de 140/90 mmHg. No ha presentado molestias y se auscultan latidos cardiofetales a 125 latidos por minuto.',
      question: '¿Qué examen es el más adecuado para precisar el diagnóstico?',
      options: [
        { letter: 'A', text: 'Monitoreo ambulatorio de presión arterial de 24 horas' },
        { letter: 'B', text: 'Ecografía Doppler renal materna' },
        { letter: 'C', text: 'Ecografía obstétrica con Doppler fetal' },
        { letter: 'D', text: 'Proteinuria de 24 horas o índice proteinuria creatininuria' },
        { letter: 'E', text: 'Test de tolerancia a las contracciones uterinas' },
      ],
      correct: 'D',
      explanation: 'Frente a una paciente a término que presenta cifras tensionales en rango de síndrome hipertensivo del embarazo (140/90 mmHg) en buenas condiciones clínicas, el examen prioritario es la cuantificación de proteinuria (mediante orina de 24 horas o índice proteinuria/creatininuria en muestra aislada). Esto permite diferenciar con certeza una hipertensión gestacional (proteinuria negativa) de una preeclampsia (proteinuria positiva).',
      say: {
        stem: 'Una paciente de veinticinco años en su primer embarazo de treinta y siete semanas presenta en el control prenatal presión arterial de ciento cuarenta con noventa milímetros de mercurio y leve edema de extremidades inferiores, asintomática.',
        question: '¿Qué examen es el más adecuado para precisar el diagnóstico?',
        options: 'La opción A propone monitoreo ambulatorio de presión. La B ecografía Doppler renal. La C Doppler fetal. La D proteinuria de veinticuatro horas o índice proteinuria creatininuria. La E test de tolerancia a las contracciones. Piénsalo.',
        answer: 'La respuesta correcta es la D. El examen esencial para clasificar el síndrome hipertensivo y definir si se trata de una hipertensión gestacional o una preeclampsia es la proteinuria.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro',
      title: 'Conceptos clave en trastornos hipertensivos del embarazo',
      cards: [
        {
          title: 'Cortes cronológicos y fármacos',
          tag: 'Diagnóstico y terapia',
          kind: 'key',
          items: [
            {
              t: 'Semana 20 divide los diagnósticos',
              d: 'Antes de 20 semanas es crónica; después es gestacional o preeclampsia',
              say: 'La semana veinte es la frontera temporal cardinal para clasificar el síndrome hipertensivo en obstetricia.',
            },
            {
              t: 'Labetalol, Metildopa y Nifedipino',
              d: 'Tríada antihipertensiva oral segura durante todo el embarazo',
              say: 'Los antihipertensivos orales seguros son el labetalol, la alfa-metildopa y el nifedipino de acción prolongada.',
            },
          ],
        },
        {
          title: 'Prohibición absoluta y término',
          tag: 'Seguridad perinatal',
          kind: 'alert',
          items: [
            {
              t: 'IECA y ARA II proscritos',
              d: 'Causan anuria fetal letal, oligohidramnios y displasia renal',
              say: 'Nunca prescribir ni mantener Enalapril o Losartán en una embarazada por su grave toxicidad renal fetal.',
            },
            {
              t: 'Interrupción a las 37 semanas',
              d: 'Preeclampsia sin criterios de severidad se interrumpe al término',
              say: 'Si te llevas una sola idea de hoy: la preeclampsia sin criterios de severidad se vigila hospitalizada en alto riesgo obstétrico y se interrumpe de forma programada al cumplir las treinta y siete semanas. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo de la Hipertensión en el Embarazo',
    root: N(
      'start',
      'Gestante con Presión Arterial mayor o igual a 140/90 mmHg',
      'Confirmar en reposo con dos tomas separadas por 4 horas · evaluar edad gestacional',
      'Iniciamos el abordaje evaluando la edad gestacional ante una presión arterial mayor o igual a ciento cuarenta con noventa.',
      [
        'Diagnosticada antes de las 20 semanas',
        N(
          'alert',
          'Hipertensión Arterial Crónica',
          'Revisar fármacos previos · descartar uso de IECA o ARA II',
          'Si se pesquisa antes de las veinte semanas, diagnosticamos hipertensión crónica y revisamos la terapia farmacológica.',
          [
            'Uso de Enalapril o Losartán',
            N(
              'do',
              'Cambio inmediato a Labetalol o Metildopa',
              'Suspender IECA y ARA II de urgencia · solicitar ecografía morfológica y Doppler',
              'Cambiamos de inmediato a labetalol o alfa-metildopa para evitar fetotoxicidad renal grave.',
            ),
          ],
          [
            'Control y prevención',
            N(
              'ok',
              'Aspirina 150 mg/día desde semana 12 a 16',
              'Prevención secundaria de preeclampsia sobreagregada · seguimiento ambulatorio',
              'Indicamos aspirina profiláctica para disminuir el riesgo de preeclampsia sobreagregada.',
            ),
          ],
        ),
      ],
      [
        'Diagnosticada después de las 20 semanas',
        N(
          'q',
          'Estudio de Proteinuria y Daño Orgánico',
          'Proteinuria de 24 horas o IPC · perfil toxémico completo (plaquetas, transaminasas, creatinina)',
          'Si aparece después de las veinte semanas, solicitamos proteinuria y perfil toxémico para definir el diagnóstico.',
          [
            'Proteinuria negativa y laboratorio normal',
            N(
              'ok',
              'Hipertensión Gestacional',
              'Vigilancia tensional y de laboratorio semanal · parto a término a las 38 a 40 semanas',
              'Si no hay proteinuria ni disfunción orgánica, es hipertensión gestacional con seguimiento estricto hasta el término.',
            ),
          ],
          [
            'Proteinuria mayor o igual a 300 mg sin criterios de severidad',
            N(
              'do',
              'Preeclampsia sin Criterios de Severidad',
              'Ingreso a sala de Alto Riesgo Obstétrico (ARO) · vigilancia seriada bisemanal',
              'Si confirma proteinuria patológica sin severidad, hospitalizamos en ARO y mantenemos vigilancia hasta la semana treinta y siete.',
              [
                'Alcanza las 37 semanas de gestación',
                N(
                  'ok',
                  'Interrupción programada del embarazo',
                  'Inducción de parto vaginal si Bishop favorable · cesárea por indicación obstétrica',
                  'Al cumplir las treinta y siete semanas realizamos la interrupción programada del embarazo.',
                ),
              ],
            ),
          ],
        ),
      ],
    ),
  },
};
