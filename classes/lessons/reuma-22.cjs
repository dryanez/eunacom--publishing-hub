// Clase 1.22 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia_bloque_5.cjs (reuma-22).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: "reuma-22",
  tier: 3,
  slides: [
    {
      type: "cover",
      subtitle: "Vasculitis ANCA (GPA, PAM, EGPA), síndrome riñón-pulmón, profilaxis con cotrimoxazol y púrpura de Henoch-Schönlein",
      say: "Bienvenidos a la clase veintidós. Hoy abordamos las vasculitis de vaso pequeño: las asociadas a anticuerpos ANCA y la vasculitis por inmunoglobulina A o púrpura de Henoch-Schönlein. Aprenderemos a distinguir la granulomatosis con poliangeítis por sus nódulos cavitados y c-ANCA, la poliangeítis microscópica y su afección riñón-pulmón con p-ANCA, el asma con eosinofilia extrema de la EGPA, la urgencia de la hemorragia alveolar difusa con profilaxis obligatoria de cotrimoxazol, y el púrpura palpable con plaquetas normales en niños. Comencemos.",
    },

    {
      type: "flow",
      kicker: "Clasificación de Chapel Hill",
      title: "Vasculitis de vaso pequeño: Mecanismos patogénicos mayores",
      nodes: [
        { id: "peq", col: 0, row: 1, k: "start", t: "Vasculitis de Pequeño Vaso", s: "Capilares, vénulas y arteriolas" },
        { id: "anca", col: 1, row: 0, k: "alert", t: "Asociadas a ANCA (Pauciinmunes)", s: "Activación de neutrófilos sin depósitos inmunes" },
        { id: "iga", col: 1, row: 2, k: "good", t: "Mediadas por Inmunocomplejos", s: "Depósito mesangial y vascular de IgA1" },
        { id: "gnrp", col: 2, row: 1, k: "risk", t: "Glomerulonefritis Rápidamente Progresiva", s: "Necrosis focal con formación de semilunas" },
      ],
      edges: [
        { from: "peq", to: "anca" },
        { from: "peq", to: "iga" },
        { from: "anca", to: "gnrp" },
        { from: "iga", to: "gnrp" },
      ],
      steps: [
        { show: ["peq", "anca"], note: "Vasculitis ANCA pauciinmunes",
          say: "Las vasculitis asociadas a ANCA se caracterizan por una inflamación destructiva mediada por anticuerpos anticitoplasma de neutrófilos. Al microscopio de inmunofluorescencia destaca la ausencia casi total de inmunoglobulinas o complemento en las paredes vasculares, definiendo el patrón pauciinmune clásico en biopsia." },
        { show: ["iga", "gnrp"], note: "Vasculitis por inmunocomplejos IgA",
          say: "Por el contrario, el púrpura de Henoch-Schönlein es una vasculitis leucocitoclástica mediada por inmunocomplejos circulantes de inmunoglobulina A que se depositan en vénulas poscapilares de la piel y en el mesangio glomerular, provocando daño endotelial y glomerulonefritis proliferativa." },
      ],
    },

    {
      type: "points",
      kicker: "Vasculitis ANCA con granulomas",
      title: "Granulomatosis con Poliangeítis (GPA / Wegener)",
      cards: [
        { title: "Vía aérea superior y silla de montar", tag: "C-ANCA positivo contra Proteinasa 3", kind: "criteria", items: [
          { t: "Sinusitis crónica y epistaxis recurrente", d: "Rinosinusitis purulenta rebelde a antibióticos comunes",
            say: "La granulomatosis con poliangeítis compromete la vía respiratoria alta en más del noventa por ciento de los pacientes. Debutan con rinosinusitis purulenta o sanguinolenta crónica rebelde a antibióticos, costras nasales fétidas, otitis media recurrente y dolorosas úlceras orales." },
          { t: "Nariz en silla de montar", d: "Destrucción osteocartilaginosa del tabique nasal",
            say: "La inflamación granulomatosa necrotizante erosiona y perfora progresivamente el cartílago del tabique nasal, produciendo el colapso del puente óseo de la nariz con la clásica deformidad cosmética y funcional en nariz en silla de montar." },
        ] },
        { title: "Pulmón y nódulos cavitados bilaterales", tag: "Marcador serológico c-ANCA / anti-PR3", kind: "alert", items: [
          { t: "Nódulos pulmonares múltiples cavitados", d: "Infiltrados radiológicos con cavitaciones de pared gruesa",
            say: "En el parénquima pulmonar produce nódulos bilaterales que se cavitan típicamente en su interior, semejando cavernas tuberculosas, acompañados de hemoptisis, tos persistente y disnea de esfuerzo progresiva por necrosis tisular." },
          { t: "Asociación extrema con c-ANCA anti-PR3", d: "Sensibilidad y especificidad superiores al noventa por ciento",
            say: "El marcador de laboratorio cardinal es el patrón c-ANCA citoplasmático por inmunofluorescencia indirecta, dirigido específicamente contra la enzima proteinasa tres en los gránulos de neutrófilos, con positividad en el noventa por ciento de los casos activos." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Vasculitis ANCA no granulomatosa",
      title: "Poliangeítis Microscópica (PAM): Síndrome Riñón-Pulmón puro",
      cards: [
        { title: "Compromiso renal agresivo sin granulomas", tag: "P-ANCA positivo contra Mieloperoxidasa", kind: "criteria", items: [
          { t: "Glomerulonefritis pauciinmune con semilunas", d: "Rápido deterioro de la función renal con hematuria",
            say: "La poliangeítis microscópica ataca con predilección el glomérulo renal en más del ochenta y cinco por ciento de los pacientes, provocando una glomerulonefritis rápidamente progresiva con semilunas extracapilares que lleva a insuficiencia renal anúrica en pocas semanas." },
          { t: "Capilaritis pulmonar y hemorragia alveolar", d: "Hemoptisis aguda sin nódulos cavitados",
            say: "A nivel pulmonar no produce granulomas ni nódulos cavitados, sino una capilaritis necrotizante difusa con sangrado intraalveolar masivo, disnea aguda e insuficiencia respiratoria hipoxémica con infiltrados alveolares algodonosos bilaterales." },
        ] },
        { title: "Regla cardinal: Ausencia de vía aérea superior", tag: "Diferencia crítica con respecto a GPA", kind: "key", items: [
          { t: "Vía respiratoria alta estrictamente respetada", d: "Sin sinusitis, sin rinitis y sin nariz en silla de montar",
            say: "Esta es la regla de oro para el examen: la poliangeítis microscópica jamás afecta la vía aérea superior; no produce sinusitis ni perforación nasal, y se asocia al patrón p-ANCA perinuclear dirigido contra la enzima mieloperoxidasa." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Vasculitis alérgica granulomatosa",
      title: "Granulomatosis Eosinofílica (EGPA / Churg-Strauss)",
      cards: [
        { title: "Tríada clásica: Asma, pólipos y eosinofilia", tag: "Eosinofilia extrema en sangre periférica", kind: "alert", items: [
          { t: "Asma grave del adulto de difícil control", d: "Antecedente de asma que empeora progresivamente",
            say: "La granulomatosis eosinofílica se manifiesta típicamente en pacientes con antecedente de asma severa de inicio en la edad adulta, rinitis alérgica crónica y poliposis nasal recidivante refractaria a corticoides inhalados." },
          { t: "Eosinofilia masiva en sangre periférica", d: "Superior al diez por ciento o más de mil quinientos eosinófilos",
            say: "El sello hematológico patognomónico es una hipereosinofilia masiva superior al diez por ciento o más de mil quinientos eosinófilos por microlitro en el hemograma, con infiltrados pulmonares migratorios fugaces no cavitados en las imágenes." },
        ] },
        { title: "Miocarditis y neuropatía periférica", tag: "Principal causa de mortalidad en EGPA", kind: "criteria", items: [
          { t: "Miocardiopatía restrictiva eosinofílica", d: "Infiltración cardíaca causa de falla cardíaca y muerte",
            say: "La infiltración de eosinófilos en el miocardio es la principal causa de muerte en la enfermedad, provocando miocarditis aguda, arritmias ventriculares letales o insuficiencia cardíaca restrictiva que exige evaluación ecocardiográfica precoz." },
          { t: "Mononeuritis múltiple asimétrica", d: "Isquemia del vasa nervorum con pie caído o mano péndula",
            say: "El compromiso neurológico periférico es muy frecuente, manifestándose como mononeuritis múltiple con compromiso súbito y doloroso de nervios periféricos como el nervio ciático poplíteo externo, generando marcha en estepaje." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Emergencia vital en Medicina Interna",
      title: "Síndrome Riñón-Pulmón: Hemorragia Alveolar Difusa",
      nodes: [
        { id: "ins", col: 0, row: 1, k: "start", t: "Capilaritis pulmonar y glomerular", s: "Invasión neutrofílica mediada por ANCA" },
        { id: "pul", col: 1, row: 0, k: "alert", t: "Hemorragia Alveolar Difusa", s: "Hemoptisis súbita, anemia aguda e hipoxemia" },
        { id: "ren", col: 1, row: 2, k: "risk", t: "GNRP con Insuficiencia Renal Aguda", s: "Hematuria dismórfica y cilindros hemáticos" },
        { id: "res", col: 2, row: 1, k: "good", t: "Soporte de UCI y Terapia de Inducción", s: "Ventilación mecánica invasiva y hemodiálisis urgente" },
      ],
      edges: [
        { from: "ins", to: "pul" },
        { from: "ins", to: "ren" },
        { from: "pul", to: "res" },
        { from: "ren", to: "res" },
      ],
      steps: [
        { show: ["ins", "pul", "ren"], note: "La catástrofe del síndrome riñón-pulmón",
          say: "El síndrome riñón-pulmón se manifiesta con disnea aguda, hemoptisis súbita, caída brusca del hematocrito e infiltrados alveolares algodonosos bilaterales en la tomografía, combinado con falla renal aguda oligoanúrica con sedimento de orina activo lleno de hematíes dismórficos y cilindros hemáticos." },
        { show: ["res"], note: "Manejo urgente en unidad de pacientes críticos",
          say: "Constituye una emergencia extrema de riesgo vital inmediato por asfixia y uremia aguda. Requiere ingreso prioritario a cuidados intensivos para soporte ventilatorio protector, corrección dialítica urgente y comienzo inmediato del esquema de inducción inmunosupresora agresiva." },
      ],
    },

    {
      type: "points",
      kicker: "Diagnóstico anatomopatológico",
      title: "Biopsia tisular confirmatoria y patrón pauciinmune",
      cards: [
        { title: "Biopsia renal: Glomerulonefritis necrotizante", tag: "Semilunas y ausencia de depósitos", kind: "key", items: [
          { t: "Proliferación extracapilar en semiluna", d: "Ruptura de la membrana basal glomerular con necrosis",
            say: "La biopsia renal es el estándar de oro en afectación renal: demuestra glomerulonefritis proliferativa extracapilar con formación de semilunas celulares que comprimen el ovillo glomerular y focos de necrosis fibrinoide segmentaria." },
          { t: "Inmunofluorescencia pauciinmune negativa", d: "Sin depósitos de anticuerpos ni complemento",
            say: "La inmunofluorescencia es patognomónicamente negativa o pauciinmune, diferenciándola radicalmente de la nefritis lúpica que es rica en depósitos en cielo estrellado o de la enfermedad de Goodpasture con depósitos lineales." },
        ] },
        { title: "Biopsia de vía aérea superior y cutánea", tag: "Granulomas y vasculitis leucocitoclástica", kind: "criteria", items: [
          { t: "Biopsia de mucosa nasal en GPA", d: "Granulomas necrotizantes intra y extravasculares",
            say: "En la granulomatosis con poliangeítis, la biopsia de mucosa nasal o paranasal demuestra granulomas con necrosis geográfica y células gigantes, aunque su rendimiento diagnóstico es menor al cincuenta por ciento por fibrosis." },
          { t: "Vasculitis leucocitoclástica en piel", d: "Necrosis de vénulas poscapilares con polvillo nuclear",
            say: "La biopsia por sacabocado de una lesión de púrpura palpable revela vasculitis leucocitoclástica con infiltrado neutrofílico perivascular, necrosis fibrinoide de la pared y fragmentación de núcleos celulares." },
        ] },
      ],
    },

    {
      type: "flow",
      kicker: "Terapia de inducción y rescate",
      title: "Protocolo de inmunosupresión y profilaxis infecciosa",
      nodes: [
        { id: "dx", col: 0, row: 1, k: "start", t: "Vasculitis ANCA activa grave", s: "Compromiso de órgano noble o hemorragia alveolar" },
        { id: "cor", col: 1, row: 0, k: "good", t: "Pulsos de Metilprednisolona EV", s: "Quinientos a mil miligramos al día por tres días" },
        { id: "rtx", col: 1, row: 2, k: "good", t: "Rituximab o Ciclofosfamida", s: "Terapia de inducción biológica de primera línea" },
        { id: "plas", col: 2, row: 0, k: "alert", t: "Plasmaféresis de rescate", s: "En hemorragia alveolar con hipoxemia severa" },
        { id: "cotri", col: 2, row: 2, k: "trap", t: "REGLA DE ORO: Cotrimoxazol profiláctico", s: "Prevención obligatoria de Pneumocystis jirovecii" },
      ],
      edges: [
        { from: "dx", to: "cor" },
        { from: "dx", to: "rtx" },
        { from: "cor", to: "plas", label: "si sangrado grave" },
        { from: "rtx", to: "cotri" },
      ],
      steps: [
        { show: ["dx", "cor", "rtx"], note: "Inducción con corticoides y Rituximab",
          say: "El pilar de inducción son los pulsos endovenosos de metilprednisolona seguidos de dosis altas de prednisona oral, asociados a rituximab, anticuerpo monoclonal anti-CD veinte, o alternativamente ciclofosfamida endovenosa." },
        { show: ["plas"], note: "Plasmaféresis de recambio en hemorragia pulmonar",
          say: "En pacientes con hemorragia alveolar difusa con requerimiento ventilatorio o insuficiencia renal fulminante dependiente de diálisis, la plasmaféresis de rescate remueve rápidamente los anticuerpos ANCA circulantes de la sangre." },
        { show: ["cotri"], note: "Profilaxis obligatoria contra Pneumocystis",
          say: "Esta es una regla de oro ineludible en el examen: todo paciente con vasculitis ANCA que recibe inducción con corticoides y rituximab o ciclofosfamida tiene indicación obligatoria de profilaxis con cotrimoxazol para prevenir la neumonía por Pneumocystis jirovecii." },
      ],
    },

    {
      type: "points",
      kicker: "Terapia de mantenimiento",
      title: "Consolidación de remisión y prevención de recaídas",
      cards: [
        { title: "Fase de mantención inmunosupresora", tag: "Azatioprina o Rituximab semestral", kind: "pharma", items: [
          { t: "Cambio a fármacos de menor toxicidad", d: "Tras lograr remisión clínica completa a los tres o seis meses",
            say: "Una vez alcanzada la remisión completa, se suspende la ciclofosfamida y se pasa a una terapia de mantención con azatioprina oral o infusiones semestrales de rituximab durante al menos dieciocho a veinticuatro meses para consolidar el control inmune." },
          { t: "Descenso gradual protocolizado de esteroides", d: "Evitar insuficiencia suprarrenal y reactivación",
            say: "La prednisona oral se reduce de forma lenta y progresiva hasta alcanzar la dosis mínima eficaz o su suspensión completa, monitorizando estrechamente los títulos de ANCA y los parámetros de sedimento de orina." },
        ] },
        { title: "Riesgo de recaídas a largo plazo", tag: "Mayor frecuencia en c-ANCA y GPA", kind: "alert", items: [
          { t: "Tasa de recaída del cincuenta por ciento a cinco años", d: "Especialmente en pacientes con afección de vía aérea alta",
            say: "Hasta la mitad de los pacientes con granulomatosis con poliangeítis sufren recaídas de su enfermedad a lo largo de cinco años, requiriendo un seguimiento clínico y serológico continuo de por vida por el especialista." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Vasculitis por inmunocomplejos IgA",
      title: "Púrpura de Henoch-Schönlein: Tétrada pediátrica clásica",
      cards: [
        { title: "Púrpura palpable no trombocitopénico", tag: "Plaquetas estrictamente normales", kind: "alert", items: [
          { t: "Erupción purpúrica sobreelevada palpable", d: "Localizada en extremidades inferiores y nalgas",
            say: "El púrpura de Henoch-Schönlein debuta con lesiones purpúricas eritematovioláceas sobreelevadas palpables que no desaparecen a la vitropresión, distribuidas simétricamente en piernas y nalgas tras un cuadro respiratorio infeccioso previo." },
          { t: "Recuento plaquetario rigurosamente normal", d: "Diferenciación crucial con PTI y meningococcemia",
            say: "La regla de oro de laboratorio es que el recuento de plaquetas es rigurosamente normal o incluso elevado. Si las plaquetas están bajas no es Henoch-Schönlein, orientando hacia púrpura trombocitopénico inmune o coagulopatía." },
        ] },
        { title: "Artralgias, dolor abdominal y nefritis", tag: "Los otros tres pilares de la tétrada", kind: "criteria", items: [
          { t: "Artritis no deformante de rodillas y tobillos", d: "Tumefacción periarticular dolorosa transitoria",
            say: "Hasta el ochenta por ciento de los niños sufren artralgias o artritis transitoria no destructiva en rodillas y tobillos que limita la marcha pero no deja secuelas articulares crónicas." },
          { t: "Dolor cólico difuso y nefritis por IgA", d: "Riesgo de invaginación ileocecal y hematuria glomerular",
            say: "El dolor abdominal cólico ocurre por vasculitis submucosa intestinal y puede complicarse con intususcepción intestinal. La afectación renal produce hematuria microscópica y proteinuria por depósito mesangial de IgA." },
        ] },
      ],
    },

    {
      type: "points",
      kicker: "Manejo pediátrico en APS",
      title: "Curso autolimitado y monitorización ambulatoria",
      cards: [
        { title: "Manejo conservador y analgesia", tag: "Evolución benigna en la gran mayoría", kind: "normal", items: [
          { t: "Reposo relativo y paracetamol", d: "Alivio de las artralgias y fiebre inicial",
            say: "En la mayoría de los casos pediátricos el curso es benigno y autolimitado en cuatro a seis semanas. El manejo fundamental consiste en reposo relativo en cama, hidratación oral y analgesia con paracetamol." },
          { t: "Corticoides en dolor abdominal severo", d: "Prednisona oral un miligramo por kilo al día por una semana",
            say: "El uso de corticoides orales se reserva exclusivamente para casos de dolor abdominal cólico intenso incapacitante o sangrado digestivo macroscópico, ya que acelera el alivio del dolor intestinal." },
        ] },
        { title: "Seguimiento renal y de presión arterial", tag: "Monitorización obligatoria por seis meses", kind: "criteria", items: [
          { t: "Controles seriados de orina y presión", d: "Pesquisar glomerulonefritis tardía en controles mensuales",
            say: "El pronóstico a largo plazo depende enteramente de la afección renal. Es mandatorio controlar la presión arterial y el examen de orina completa de forma mensual durante seis meses para pesquisar nefritis tardía." },
        ] },
      ],
    },

    {
      type: "table",
      kicker: "Trampas EUNACOM",
      title: "Diagnóstico diferencial: GPA vs PAM vs EGPA vs Henoch-Schönlein",
      head: ["Vasculitis", "Marcador Serológico", "Vía Aérea Superior", "Compromiso Pulmonar"],
      rows: [
        { cells: ["Granulomatosis con Poliangeítis (GPA)", "c-ANCA (anti-PR3) en 90%", "Sinusitis purulenta · Nariz en silla de montar", "Nódulos pulmonares bilaterales CAVITADOS"],
          say: "Granulomatosis con poliangeítis: c-ANCA positivo contra proteinasa tres en noventa por ciento, sinusitis necrotizante severa con nariz en silla de montar y nódulos pulmonares bilaterales cavitados." },
        { cells: ["Poliangeítis Microscópica (PAM)", "p-ANCA (anti-MPO) en 80%", "ESTRICTAMENTE RESPETADA (sin sinusitis)", "Capilaritis con hemorragia alveolar (sin cavitar)"],
          say: "Poliangeítis microscópica: p-ANCA positivo contra mieloperoxidasa en ochenta por ciento, vía aérea superior estrictamente respetada y capilaritis pulmonar con hemorragia alveolar difusa sin granulomas." },
        { cells: ["Granulomatosis Eosinofílica (EGPA)", "p-ANCA en 50% · Hipereosinofilia", "Poliposis nasal recidivante y rinitis", "Asma severa del adulto e infiltrados fugaces"],
          say: "Granulomatosis eosinofílica: p-ANCA en la mitad de los casos, asma grave refractaria del adulto, poliposis nasal recidivante, eosinofilia periférica masiva y miocardiopatía restrictiva." },
        { cells: ["Henoch-Schönlein (Vasculitis IgA)", "ANCA negativos · IgA mesangial", "Completamente respetada", "Excepcional sangrado · Púrpura en nalgas y plaquetas normales"],
          say: "Púrpura de Henoch-Schönlein: ANCA negativos, depósitos mesangiales de inmunoglobulina A, púrpura palpable en nalgas y extremidades inferiores con plaquetas rigurosamente normales." },
      ],
    },

    {
      type: "quiz",
      kicker: "Caso clínico",
      title: "Caso clínico tipo EUNACOM",
      stem: "Hombre de 45 años consulta por epistaxis recurrente, sinusitis purulenta de 4 meses rebelde a antibióticos y disnea progresiva con hemoptisis escasa. Al examen físico destaca perforación del tabique nasal cartilaginoso con hundimiento del dorso de la nariz (nariz en silla de montar). La tomografía de tórax revela múltiples nódulos bilaterales de paredes gruesas con cavitación central. Los exámenes muestran creatinina de 2.8 mg/dL, sedimento de orina con hematuria dismórfica y cilindros hemáticos, y anticuerpos c-ANCA (anti-PR3) fuertemente positivos a títulos altos.",
      question: "¿Cuál es el diagnóstico clínico más probable y cuál es el esquema de inducción inmunosupresora de primera línea?",
      options: [
        { letter: "A", text: "Granulomatosis con Poliangeítis (GPA); indicar pulsos de Metilprednisolona EV seguidos de Rituximab (o Ciclofosfamida) más profilaxis con Cotrimoxazol" },
        { letter: "B", text: "Poliangeítis microscópica; prescribir prednisona oral 20 mg al día en monoterapia ambulatoria" },
        { letter: "C", text: "Tuberculosis pulmonar cavitada multirresistente; iniciar esquema cuádruple con rifampicina e isoniacida" },
        { letter: "D", text: "Lupus eritematoso sistémico con nefritis clase cuatro; indicar hidroxicloroquina exclusiva" },
        { letter: "E", text: "Aspergiloma pulmonar invasor; iniciar voriconazol endovenoso continuo" },
      ],
      correct: "A",
      explanation: "El cuadro clínico reúne la tríada patognomónica de la Granulomatosis con Poliangeítis (GPA): compromiso de vía aérea superior destructivo con sinusitis y nariz en silla de montar, compromiso pulmonar con nódulos cavitados bilaterales, glomerulonefritis necrotizante pauciinmune con falla renal y positividad para c-ANCA (anti-PR3). El tratamiento de inducción para la enfermedad con compromiso de órgano noble consiste en pulsos de metilprednisolona asociados a Rituximab (o ciclofosfamida), requiriendo además profilaxis obligatoria contra Pneumocystis jirovecii con cotrimoxazol.",
      say: {
        stem: "Caso clínico. Paciente de cuarenta y cinco años con sinusitis purulenta crónica, nariz en silla de montar por perforación septal, nódulos pulmonares cavitados bilaterales, falla renal con hematuria dismórfica y c-ANCA fuertemente positivo.",
        question: "¿Cuál es el diagnóstico clínico más probable y cuál es el esquema de inducción de primera línea?",
        options: "Las alternativas: granulomatosis con poliangeítis con metilprednisolona, rituximab y cotrimoxazol profiláctico, poliangeítis microscópica con prednisona baja, tuberculosis pulmonar multirresistente, lupus con hidroxicloroquina, o aspergiloma invasor. Piénsalo.",
        answer: "La respuesta correcta es la A. Es una granulomatosis con poliangeítis clásica por nódulos cavitados, afectación nasal y c-ANCA. Se induce con metilprednisolona endovenosa más rituximab o ciclofosfamida, y cotrimoxazol profiláctico obligatorio.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM · Patrones serológicos ANCA",
      stem: "¿Cuál de las siguientes asociaciones entre vasculitis de vaso pequeño y su patrón serológico de anticuerpos anticitoplasma de neutrófilos (ANCA) más característico y prevalente es CORRECTA?",
      options: [
        { letter: "A", text: "Granulomatosis con Poliangeítis (GPA) · c-ANCA (Anti-Proteinasa 3 / PR3)" },
        { letter: "B", text: "Poliangeítis Microscópica (PAM) · c-ANCA (Anti-Proteinasa 3 / PR3)" },
        { letter: "C", text: "Púrpura de Henoch-Schönlein · c-ANCA a títulos altos" },
        { letter: "D", text: "Arteritis de la Temporal · p-ANCA (Anti-Mieloperoxidasa / MPO)" },
        { letter: "E", text: "Enfermedad de Behçet · p-ANCA positivo universal" },
      ],
      correct: "A",
      explanation: "La Granulomatosis con Poliangeítis (GPA) se asocia fuertemente (85-90%) al patrón c-ANCA (citoplasmático) con especificidad antigénica contra la Proteinasa 3 (PR3). Por su parte, la Poliangeítis Microscópica (PAM) y la Granulomatosis Eosinofílica (EGPA) se asocian al patrón p-ANCA (perinuclear) contra la Mieloperoxidasa (MPO). La vasculitis por IgA (Henoch-Schönlein) y las vasculitis de vaso grande no presentan ANCA.",
      say: {
        stem: "Pregunta del EUNACOM sobre serología autoinmune en vasculitis de pequeño calibre.",
        question: "¿Cuál de las siguientes asociaciones entre vasculitis de vaso pequeño y su marcador ANCA es correcta?",
        options: "Las alternativas: granulomatosis con poliangeítis asociada a c-ANCA y anti-proteinasa tres, poliangeítis microscópica con c-ANCA, Henoch-Schönlein con c-ANCA, arteritis de la temporal con p-ANCA, o enfermedad de Behçet con p-ANCA. Piénsalo.",
        answer: "La respuesta correcta es la A. La granulomatosis con poliangeítis se asocia en el noventa por ciento de los casos al patrón c-ANCA dirigido contra la enzima proteinasa tres. Recuerda que la poliangeítis microscópica y la granulomatosis eosinofílica se asocian al patrón p-ANCA contra mieloperoxidasa.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM · Rescate y profilaxis en vasculitis ANCA severa",
      stem: "Paciente de 40 años diagnosticado de Granulomatosis con Poliangeítis con compromiso renal severo y hemorragia alveolar difusa con requerimiento de ventilación mecánica invasiva. Se inicia tratamiento con bolos de metilprednisolona EV y Rituximab. Con respecto a las medidas complementarias de rescate y profilaxis infecciosa, ¿cuál de las siguientes combinaciones de conductas terapéuticas es la más adecuada?",
      options: [
        { letter: "A", text: "Indicar plasmaféresis de rescate y profilaxis obligatoria con Cotrimoxazol oral" },
        { letter: "B", text: "Indicar hemodiálisis peritoneal profiláctica e iniciar aciclovir endovenoso continuo" },
        { letter: "C", text: "Administrar heparina en infusión continua a dosis plenas por riesgo de trombosis pulmonar" },
        { letter: "D", text: "Realizar traqueostomía inmediata e indicar ceftriaxona en monoterapia" },
        { letter: "E", text: "Suspender los corticoides por riesgo de sobreinfección fúngica e iniciar ciclosporina" },
      ],
      correct: "A",
      explanation: "En pacientes con vasculitis ANCA y falla orgánica crítica caracterizada por hemorragia alveolar difusa con hipoxemia grave, la plasmaféresis (recambio plasmático) remueve rápidamente los anticuerpos patógenos de la circulación. Asimismo, todo paciente que recibe terapia de inducción inmunosupresora intensa con corticoides en dosis altas y Rituximab o Ciclofosfamida tiene indicación mandataria de profilaxis contra la neumonía por Pneumocystis jirovecii con Cotrimoxazol.",
      say: {
        stem: "Pregunta de medicina intensiva reumatológica. Paciente de cuarenta años con granulomatosis y hemorragia alveolar difusa en ventilación mecánica recibiendo pulsos de metilprednisolona y rituximab.",
        question: "¿Cuál de las siguientes combinaciones de medidas de rescate y profilaxis infecciosa es la más adecuada?",
        options: "Las alternativas: plasmaféresis de rescate y profilaxis obligatoria con cotrimoxazol oral, hemodiálisis peritoneal con aciclovir, heparina en infusión continua, traqueostomía inmediata con ceftriaxona, o suspensión de corticoides. Piénsalo.",
        answer: "La respuesta correcta es la A. En hemorragia alveolar difusa grave se recurre a plasmaféresis para barrer anticuerpos patógenos de la circulación, y es estrictamente obligatoria la profilaxis con cotrimoxazol contra la neumonía por Pneumocystis jirovecii.",
      },
    },

    {
      type: "quiz",
      kicker: "Pregunta real EUNACOM",
      title: "EUNACOM · Diagnóstico de Púrpura de Henoch-Schönlein",
      stem: "Niño de 7 años consulta por dolor abdominal cólico difuso, dolor en ambos tobillos y una erupción cutánea purulenta violácea sobreelevada en ambas extremidades inferiores y nalgas, de 4 días de evolución tras un cuadro de resfrío común. Al examen físico destaca abdomen blando pero doloroso a la palpación difusa sin peritonismo, rodillas y tobillos con aumento de volumen periarticular doloroso y púrpura palpable bilateral confluente en piernas. El hemograma muestra: hematocrito 38%, leucocitos 9.800/mm³, plaquetas 310.000/mm³. El examen de orina revela microhematuria (15 hematíes por campo) sin proteinuria. ¿Cuál es el diagnóstico más probable y el pilar del manejo inicial?",
      options: [
        { letter: "A", text: "Púrpura Trombocitopénico Inmune (PTI) · Inmunoglobulina endovenosa urgente" },
        { letter: "B", text: "Meningococcemia fulminante · Ceftriaxona EV inmediata y aislamiento respiratorio" },
        { letter: "C", text: "Púrpura de Henoch-Schönlein (Vasculitis por IgA) · Reposo, analgesia con paracetamol y monitorización ambulatoria estrecha de PA y orina" },
        { letter: "D", text: "Síndrome Urémico Hemolítico · Transfusión urgente de plaquetas y plasmaféresis" },
        { letter: "E", text: "Lupus eritematoso sistémico pediátrico · Ciclofosfamida endovenosa inmediata" },
      ],
      correct: "C",
      explanation: "El cuadro clínico de púrpura palpable en extremidades inferiores y glúteos, artralgias/artritis y dolor abdominal cólico postinfeccioso con un recuento plaquetario rigurosamente normal (310.000/mm³) configura la tétrada diagnóstica del Púrpura de Henoch-Schönlein (Vasculitis por IgA). En ausencia de dolor abdominal intratable, sangrado digestivo o nefritis severa, el curso es típicamente benigno y autolimitado, requiriendo reposo, analgesia con paracetamol y vigilancia seriada de presión arterial y sedimento urinario.",
      say: {
        stem: "EUNACOM sobre pediatría y reumatología. Niño de siete años con púrpura palpable en piernas y glúteos, dolor abdominal cólico, artritis de tobillos y plaquetas en trescientas diez mil por milímetro cúbico.",
        question: "¿Cuál es el diagnóstico más probable y el pilar del manejo inicial?",
        options: "Las opciones: púrpura trombocitopénico inmune, meningococcemia fulminante, púrpura de Henoch-Schönlein con reposo, paracetamol y seguimiento ambulatorio, síndrome urémico hemolítico, o lupus pediátrico. Piénsalo.",
        answer: "Es la C. Púrpura palpable en nalgas y extremidades inferiores con dolor cólico y recuento plaquetario rigurosamente normal confirma Henoch-Schönlein o vasculitis por IgA. Se maneja con reposo, paracetamol y seguimiento periódico de presión arterial y orina.",
      },
    },

    {
      type: "points",
      kicker: "Cierre",
      title: "Reglas de oro para el examen",
      cards: [
        { title: "Diferenciación de vasculitis ANCA", tag: "GPA, PAM y EGPA serológicas", kind: "criteria", items: [
          { t: "GPA: c-ANCA y nariz en silla de montar", d: "Sinusitis destructiva y nódulos pulmonares cavitados",
            say: "Revisemos las tres reglas de oro. Primero: la granulomatosis con poliangeítis cursa con c-ANCA, sinusitis destructiva con nariz en silla de montar y nódulos cavitados; la poliangeítis microscópica cursa con p-ANCA sin vía aérea superior; y la EGPA presenta asma del adulto con eosinofilia extrema." },
          { t: "Cotrimoxazol obligatorio en inducción", d: "Profilaxis contra Pneumocystis jirovecii",
            say: "Segundo: en toda inducción de vasculitis ANCA con rituximab o ciclofosfamida es estrictamente obligatoria la profilaxis con cotrimoxazol para prevenir la neumonía por Pneumocystis jirovecii." },
        ] },
        { title: "Púrpura de Henoch-Schönlein", tag: "Plaquetas normales y seguimiento renal", kind: "alert", items: [
          { t: "Púrpura palpable con plaquetas normales", d: "Tétrada en piernas y nalgas, artralgias y dolor cólico",
            say: "Tercero: el púrpura de Henoch-Schönlein es una vasculitis por IgA en niños con púrpura palpable en nalgas, dolor abdominal y plaquetas normales." },
          { t: "Curso benigno y vigilancia de presión arterial", d: "Seguimiento periódico de sedimento urinario por seis meses",
            say: "El manejo es conservador con paracetamol y reposo, vigilando la orina y la presión arterial durante seis meses. Si te llevas una sola idea de hoy: nódulos cavitados y sinusitis es GPA con c-ANCA; y púrpura en nalgas con plaquetas normales es Henoch-Schönlein con reposo. Nos vemos en la próxima clase." },
        ] },
      ],
    },
  ],

  pathway: {
    title: "Algoritmo de enfrentamiento: Vasculitis de Pequeño Calibre",
    root: N("start", "Sospecha de Vasculitis de Pequeño Calibre", "Púrpura palpable, síndrome riñón-pulmón o nódulos cavitados",
      "Paciente que consulta por lesiones purpúricas palpables o compromiso sistémico respiratorio y renal.",
      ["", N("q", "¿Paciente pediátrico con púrpura palpable en nalgas, dolor cólico y plaquetas normales?", "Diferenciación etaria y tipo de vasculitis",
        "Se evalúa si la clínica corresponde a vasculitis por IgA en niños o a vasculitis ANCA en adultos.",
        ["SÍ: Niño con púrpura en nalgas y plaquetas normales", N("ok", "Púrpura de Henoch-Schönlein (Vasculitis por IgA)", "Manejo conservador con reposo, Paracetamol y monitorización mensual de PA y orina por 6 meses",
          "Diagnóstico de Henoch-Schönlein. Tratamiento sintomático ambulatorio y vigilancia de nefritis por IgA.")],
        ["NO: Adulto con síndrome riñón-pulmón, nódulos o sinusitis", N("do", "Solicitar ANCA (c-ANCA / anti-PR3 y p-ANCA / anti-MPO) y Sedimento", "Estratificar compromiso de vía aérea, pulmón y glomérulo renal",
          "Sospecha de vasculitis ANCA. Solicitar perfil serológico y tomografía de tórax.",
          ["", N("q", "¿Presencia de hemorragia alveolar difusa activa o falla renal aguda severa?", "Evaluación de riesgo vital inmediato",
            "Se evalúa la gravedad de la insuficiencia respiratoria y el sedimento urinario.",
            ["SÍ: Hemorragia alveolar o falla renal rápida", N("alert", "Urgencia Crítica: Hospitalización en UCI y Terapia de Inducción", "Pulsos de Metilprednisolona EV + Rituximab/Ciclofosfamida + Plasmaféresis + Cotrimoxazol profiláctico",
              "Emergencia médica extrema. Terapia de inducción agresiva, plasmaféresis de rescate y profilaxis con cotrimoxazol.")],
            ["NO: Compromiso localizado o no amenazante de vida", N("ok", "Inducción estándar y derivación a Reumatología / Nefrología", "Corticoides orales en dosis altas asociados a Rituximab o Metotrexato según gravedad",
              "Iniciar corticoterapia e inmunosupresores en centro especializado con seguimiento estrecho.")])])])]),
  },
};
