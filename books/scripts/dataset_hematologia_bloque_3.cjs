const { flow } = require('./dataset_hematologia_bloque_1.cjs');

const bloque3 = [
  {
    id: 'hem-11',
    classId: 'hem-11',
    tier: 2,
    blockNum: 3,
    blockName: 'Hemostasia Primaria, Plaquetas y Coagulopatías',
    topicLabel: '8.11',
    title: 'Fisiología de la Hemostasia y Evaluación de Laboratorio: Recuento Plaquetario, TP/INR, TTPK y Fibrinógeno',
    perfilCode: '1.08.1.005',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Completo',
    ges: 'No GES directo · Pruebas Básicas de Laboratorio (1.08.4.005)',
    reconstrucciones: 'EUNACOM Julio 2018 (Q#11) · EUNACOM Diciembre 2020 (Q#30) · EUNACOM Julio 2022 (Q#15)',
    frecuencia: 'Muy Alta · Interpretación de TP vs TTPK aislados o combinados, corrección con plasma normal (mezcla)',
    svg: null, algoTitle: 'Algoritmo de Interpretación de Pruebas de Coagulación Básicas',
    diagram: flow('Interpretación de Pruebas de Coagulación en Sangre', [
      { t: 'Paciente con Diátesis Hemorrágica o Estudio Preoperatorio', s: 'Solicitar Hemograma (plaquetas), Tiempo de Protrombina (TP/INR), TTPK y Fibrinógeno' },
      { k: 'split', q: 'Patrón de Alteración de las Pruebas de Coagulación', s: 'Identifica la vía afectada: Extrínseca vs Intrínseca vs Común', ll: 'TP Prolongado con TTPK Normal', rl: 'TTPK Prolongado con TP Normal',
        left: { t: 'Vía Extrínseca Afectada (Factor VII)', s: 'Causas: Déficit de Vitamina K temprano, inicio de anticoagulación con Cumarínicos (Warfarina/Acenocumarol)', type: 'acc' },
        right: { t: 'Vía Intrínseca Afectada (VIII, IX, XI, XII)', s: 'Causas: Hemofilia A (FVIII), Hemofilia B (FIX), Enf. von Willebrand, Heparina no fraccionada o Anticoagulante Lúpico', type: 'warn' },
        ll: 'vía extrínseca', rl: 'vía intrínseca' },
      { t: 'Ambos Prolongados (TP y TTPK Aumentados)', s: 'Vía Común o Múltiple: Daño hepático severo, CID descompensada, déficit severo vit K o anticoagulantes orales directos (DOACs)', type: 'crit', al: 'ambos prolongados', from: 'right' }
    ]),
    contexto: 'El enfrentamiento ordenado de los trastornos de la coagulación mediante las pruebas analíticas básicas (TP/INR, TTPK, fibrinógeno y recuento plaquetario) es una de las habilidades semiológicas más evaluadas en el EUNACOM. La hemostasia primaria (tapón plaquetario) se evalúa con el recuento y frotis plaquetario, manifestándose clínicamente por sangrado mucocutáneo inmediato (petequias, epistaxis, gingivorragia). La hemostasia secundaria (cascada de coagulación) se evalúa con TP y TTPK, manifestándose por hematomas profundos musculares y hemartrosis tardías tras traumatismos.',
    contentSections: [
      {
        subhead: '1. Fisiopatología de la Hemostasia: Fase Primaria vs Secundaria',
        paragraphs: [
          'La hemostasia fisiológica es un proceso sincrónico y altamente regulado dividido en dos fases conceptuales: 1) Hemostasia Primaria: tras la lesión vascular endotelial, el colágeno subendotelial expuesto se une al factor von Willebrand (vWF), el cual ancla a las plaquetas a través del receptor glicoproteico Ib/IX/V (adhesión plaquetaria). Las plaquetas se activan, liberan gránulos densos (ADP, serotonina, calcio) y gránulos alfa (fibrinógeno, factor V, vWF), y sintetizan tromboxano A2 (TXA2). Esto induce un cambio conformacional en el receptor de glicoproteína IIb/IIIa, permitiendo que el fibrinógeno sirva de puente cruzado entre plaquetas adyacentes para formar el "tapón plaquetario primario". Su alteración genera sangrado mucocutáneo inmediato (petequias, equimosis superficiales, metrorragia, epistaxis).',
          '2) Hemostasia Secundaria (Casada de Coagulación): su objetivo es consolidar el trombo plaquetario mediante una malla insoluble de polímeros de fibrina cruzada. Aunque in vitro se divide en vía intrínseca y extrínseca, in vivo el iniciador fisiológico universal es el Complejo Factor Tisular / Factor VIIa (vía extrínseca). La trombina generada amplifica la activación de los factores XI, VIII y V (vía intrínseca/tenasa), culminando en la activación explosiva de la protrombina a trombina y la conversión de fibrinógeno en fibrina estable (factor XIIIa). Su alteración produce hemorragias profundas retardadas (hematomas intramusculares, hemartrosis articulares, sangrado posquirúrgico tardío).'
        ]
      },
      {
        subhead: '2. Interpretación Sistemática del Tiempo de Protrombina (TP / INR)',
        paragraphs: [
          'El Tiempo de Protrombina (TP, rango de referencia normal: 11 a 13.5 segundos, o 70% a 100% de actividad) evalúa la Vía Extrínseca y la Vía Común (Factores VII, X, V, II [protrombina] y Fibrinógeno). Dado que el reactivo de tromboplastina tisular varía entre laboratorios, se estandariza a través de la Razón Internacional Normatizada: INR = (TP del paciente / TP control normal)^ISI (donde ISI es el Índice de Sensibilidad Internacional del reactivo). En un paciente sano el INR es de 0.8 a 1.2.',
          'Una prolongación aislada del TP (con TTPK rigurosamente normal) localiza la deficiencia de manera exclusiva en el Factor VII (vida media plasmática ultracorta de solo 4 a 6 horas). Por ello, el TP es la primera prueba que se prolonga en las fases iniciales del déficit de vitamina K y tras la administración de anticoagulantes cumarínicos (acenocumarol o warfarina). También es el marcador más sensible y precoz de falla hepática fulminante o hepatitis aguda grave.'
        ]
      },
      {
        subhead: '3. Tiempo de Tromboplastina Parcial Activada (TTPK / TTPA) y Prueba de Mezcla',
        paragraphs: [
          'El Tiempo de Tromboplastina Parcial Activada (TTPK o TTPA, valor normal: 25 a 35 segundos; se considera alterado si supera en más de 6 a 8 segundos al testigo o razón TTPK paciente/control > 1.25) evalúa la Vía Intrínseca y la Vía Común (Factores XII, XI, IX, VIII, X, V, II y Fibrinógeno). Es el examen de elección para monitorizar la anticoagulación con Heparina No Fraccionada (rango meta: TTPK 1.5 a 2.5 veces el valor control) y para tamizar las coagulopatías congénitas clásicas (Hemofilia A por déficit de FVIII, Hemofilia B por déficit de FIX y enfermedad de von Willebrand grave).',
          'Ante un TTPK prolongado aislado, la conducta obligada de laboratorio es la "Prueba de Mezcla" o Test de Corrección con Plasma Normal (mezcla 1:1 de plasma del paciente con plasma normal agrupado): 1) Si el TTPK se CORRIGE y se normaliza inmediatamente, el paciente presenta un DÉFICIT DE FACTOR (FVIII, FIX, FXI), el cual se compensa al aportar plasma sano; 2) Si el TTPK NO CORRIGE (persiste prolongado), el paciente posee un INHIBIDOR CIRCULANTE (como el Anticoagulante Lúpico o anticuerpos neutralizantes adquiridos contra el factor VIII).'
        ]
      }
    ],
    table: {
      title: 'Algoritmo Diagnóstico de Alteraciones en las Pruebas de Coagulación',
      headers: ['Patrón Analítico', 'Vía de Coagulación Afectada', 'Etiologías Principales Frecuentes', 'Conducta Diagnóstica Inmediata'],
      rows: [
        ['TP prolongado / TTPK normal', 'Vía Extrínseca (Factor VII)', 'Uso de Cumarínicos (Acenocumarol), Déficit inicial Vitamina K, Hepatopatía leve', 'Evaluar ingesta de fármacos; administrar Vitamina K si sangrado'],
        ['TTPK prolongado / TP normal', 'Vía Intrínseca (VIII, IX, XI, XII)', 'Hemofilia A/B, Enf. von Willebrand, Heparina no fraccionada, Anticoagulante lúpico', 'Realizar Prueba de Mezcla 1:1; si corrige, dosificar factores VIII y IX'],
        ['TP y TTPK ambos prolongados', 'Vía Común (X, V, II, I) o Múltiple', 'Hepatopatía crónica severa, CID, déficit masivo Vit K, sobredosis de ACODs (Rivaroxabán)', 'Dosificar Fibrinógeno, Plaquetas y Dímero D para descartar CID'],
        ['Plaquetas bajas / TP y TTPK normales', 'Hemostasia Primaria exclusiva', 'Púrpura Trombocitopénica Inmune (PTI), hiperesplenismo, toxicidad medular', 'Revisar frotis de sangre para descartar pseudotrombocitopenia por EDTA']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Interpretación de Coagulación Preoperatoria en Adulto',
      text: 'Hombre de 22 años, sin antecedentes de sangrados espontáneos ni cirugías previas, es programado para una apendicectomía electiva diferida. En los exámenes preoperatorios se constata: Hemograma con Hb 14.2 g/dL y Plaquetas 245.000/uL; Tiempo de Protrombina 12.2 segundos (INR 1.05, normal); Tiempo de Tromboplastina Parcial Activada (TTPK) 58 segundos (control normal 30 segundos). La prueba de mezcla 1:1 con plasma normal corrige completamente el TTPK a 31 segundos.',
      conducta: 'TTPK prolongado aislado con corrección completa en la prueba de mezcla 1:1. Esto confirma un déficit de factor de la vía intrínseca (no un inhibidor). La conducta médica obligada antes de cualquier intervención quirúrgica es diferir el procedimiento no urgente y solicitar dosificación plasmática específica de los factores VIII, IX y XI para diagnosticar una hemofilia A o B leve asintomática hasta el momento.'
    },
    keyPoints: [
      'Hemostasia primaria (plaquetas/vWF): sangrado mucocutáneo inmediato (petequias, epistaxis, gingivorragia).',
      'Hemostasia secundaria (factores): sangrado profundo tardío (hematomas musculares y hemartrosis articulares).',
      'El TP/INR evalúa la vía extrínseca y común; la prolongación aislada del TP se debe a déficit del Factor VII.',
      'El Factor VII tiene la vida media plasmática más corta (4-6 h), por lo que el TP es el primero en alterarse en daño hepático y acenocumarol.',
      'El TTPK evalúa la vía intrínseca y común; se altera en Hemofilia A (FVIII), Hemofilia B (FIX) y heparina.',
      'La Prueba de Mezcla 1:1 con plasma normal diferencia déficit de factores (corrige TTPK) de inhibidores circulantes (no corrige).'
    ],
    questions: [
      {
        stem: 'Un paciente de 19 años es evaluado por un hematoma importante en el muslo tras un traumatismo de baja energía. En su perfil hemostático destaca: recuento plaquetario 280.000/uL, Tiempo de Protrombina (TP) normal y TTPK prolongado (64 segundos, control 31 segundos). Se realiza prueba de mezcla 1:1 con plasma normal, observándose corrección del TTPK a 32 segundos. ¿Cuál es el diagnóstico más probable?',
        opciones: [
          'A) Presencia de anticoagulante lúpico',
          'B) Déficit de factor de la vía intrínseca (Hemofilia)',
          'C) Insuficiencia hepatocelular moderada',
          'D) Coagulación intravascular diseminada',
          'E) Púrpura trombocitopénica trombótica'
        ],
        correcta: 'B',
        explicacion: 'Un TTPK prolongado aislado que corrige completamente al mezclar el plasma del paciente con plasma normal (prueba de mezcla 1:1 positiva) indica que el plasma aportó el factor deficiente del cual carecía el paciente, siendo patognomónico de un déficit de factor de la vía intrínseca (factores VIII, IX o XI, es decir, Hemofilia A, B o déficit de FXI). Si no corrigiera, indicaría la presencia de un inhibidor como el anticoagulante lúpico. Perla. TTPK prolongado que corrige con plasma normal = Déficit de factor (Hemofilia).',
        recTag: 'EUNACOM 2018 · Q#11'
      },
      {
        stem: '¿Cuál de los siguientes factores de la coagulación posee la vida media plasmática más corta y explica la prolongación precoz y aislada del Tiempo de Protrombina (TP) en fases iniciales del tratamiento con cumarínicos?',
        opciones: [
          'A) Factor II (Protrombina)',
          'B) Factor V (Proacelerina)',
          'C) Factor VII (Proconvertina)',
          'D) Factor IX (Factor Christmas)',
          'E) Factor X (Factor Stuart-Prower)'
        ],
        correcta: 'C',
        explicacion: 'El Factor VII posee la vida media biológica más corta de todos los factores de la cascada de coagulación (aproximadamente 4 a 6 horas). Debido a ello, cuando se inicia el tratamiento con antagonistas de la vitamina K (acenocumarol o warfarina) o en la falla hepatocelular aguda incipiente, la síntesis se bloquea y el Factor VII es el primero en agotarse en circulación, prolongando selectivamente el Tiempo de Protrombina (TP/INR) mientras los demás factores aún persisten en niveles normales. Perla. El Factor VII tiene la vida media más corta de la coagulación.',
        recTag: 'EUNACOM 2020 · Q#30'
      }
    ]
  },
  {
    id: 'hem-12',
    classId: 'hem-12',
    tier: 3,
    blockNum: 3,
    blockName: 'Hemostasia Primaria, Plaquetas y Coagulopatías',
    topicLabel: '8.12',
    title: 'Trombocitopenias y Púrpura Trombocitopénica Inmune (PTI) del Adulto y Niño: Criterios, Sangrado y Terapia GES',
    perfilCode: '1.08.1.012',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Completo',
    ges: 'No GES directo · Programa de Inmunosupresión y Urgencia Hematológica',
    reconstrucciones: 'EUNACOM Diciembre 2018 (Q#16) · EUNACOM Julio 2020 (Q#28) · EUNACOM Enero 2022 (Q#39) · EUNACOM Julio 2023 (Q#18)',
    frecuencia: 'Máxima · Diagnóstico de exclusión en paciente con sangrado mucocutáneo sin esplenomegalia, corticoterapia e IgEV',
    svg: null, algoTitle: 'Algoritmo de Evaluación y Manejo de la Trombocitopenia Inmune (PTI)',
    diagram: flow('Algoritmo de Manejo de la Trombocitopenia Inmune (PTI)', [
      { t: 'Trombocitopenia Aislada en Hemograma (< 100.000/uL, con frecuencia < 20.000/uL)', s: 'Paso 1 Obligatorio: Revisar Frotis Sanguíneo para descartar agregados por EDTA (pseudotrombocitopenia)' },
      { k: 'split', q: 'Estratificación Clínica según Riesgo de Sangrado y Recuento', s: 'El tratamiento no se define solo por el número sino por la clínica de sangrado activo', ll: 'Plaquetas > 30.000/uL SIN Sangrado Activo', rl: 'Plaquetas < 20.000-30.000/uL O Sangrado Mucocutáneo',
        left: { t: 'Conducta Expectante y Monitoreo', s: 'Observación estrecha ambulatoria · Evitar AINEs, aspirina e inyecciones intramusculares · Recontrol en 1-2 semanas', type: 'acc' },
        right: { t: 'Tratamiento Médico Inmediato de 1ª Línea', s: 'Corticoides: Prednisona 1 mg/kg/día VO x 2-4 semanas O Dexametasona 40 mg/día VO/EV x 4 días', type: 'warn' },
        ll: 'asintomático / seguro', rl: 'indicación terapéutica' },
      { t: 'Emergencia Vital: Sangrado Grave del SNC o Digestivo Masivo', s: 'Inmunoglobulina Endovenosa (IgEV 1 g/kg/día x 2 días) + Metilprednisolona EV 1 g + Transfusión de Plaquetas si paro inminente', type: 'crit', al: 'urgencia vital', from: 'right' }
    ]),
    contexto: 'La Púrpura Trombocitopénica Inmune (PTI, antes llamada idiopática) es el prototipo de trombocitopenia periférica por destrucción acelerada mediada por autoanticuerpos dirigidos contra las glicoproteínas plaquetarias IIb/IIIa e Ib/IX. El EUNACOM interroga de forma incisiva sus diferencias según edad: en niños suele ser aguda, autolimitada y precedida por una infección viral respiratoria o exantema; en adultos es de inicio insidioso, crónica y con predominio femenino. El diagnóstico es estrictamente de exclusión (médula ósea normal o con megacariocitos aumentados y sin esplenomegalia palpable). Saber cuándo tratar con corticoides e IgEV y cuándo observar es un objetivo docente crítico.',
    contentSections: [
      {
        subhead: '1. Fisiopatología Inmunomediada y Falsa Trombocitopenia (EDTA)',
        paragraphs: [
          'La PTI primaria es un trastorno autoinmune adquirido en el cual linfocitos B autorreactivos sintetizan autoanticuerpos de isotipo IgG dirigidos contra complejos glicoproteicos de la membrana plaquetaria, principalmente GPIIb/IIIa y GPIb/IX. Las plaquetas opsonizadas con IgG circulan y son reconocidas a través de los receptores Fc-gamma de los macrófagos del sistema mononuclear fagocítico esplénico y hepático, los cuales las fagocitan y destruyen en minutos (acortando su vida media de 7-10 días a escasas horas).',
          'Además de la destrucción periférica esplénica, los mismos autoanticuerpos se unen a los megacariocitos en la médula ósea, inhibiendo su maduración y bloqueando la trombopoyesis eficaz. En la sangre periférica no hay esquistocitos y las demás series (hematíes y leucocitos) son normales (salvo anemia por sangrado activo).',
          'Paso técnico inicial ineludible en el laboratorio: siempre que se detecte trombocitopenia aislada en un hemograma automatizado debe solicitarse un frotis de sangre periférica o repetir la toma en tubo con citrato de sodio o heparina. Esto permite descartar de plano la Pseudotrombocitopenia por EDTA, artefacto in vitro donde anticuerpos dependientes de EDTA inducen la aglutinación in vitro de plaquetas en grumos gigantes que el contador computarizado ignora y no cuenta.'
        ]
      },
      {
        subhead: '2. Diagnóstico Diferencial: PTI Pediátrica vs PTI del Adulto',
        paragraphs: [
          'La PTI en la infancia (pico entre 2 y 6 años) se caracteriza por un inicio súbito y explosivo de petequias y hematomas espontáneos, típicamente 1 a 3 semanas después de un cuadro febril viral inespecífico o de la administración de vacunas (sarampión, varicela). Cursa con recuentos plaquetarios muy bajos (< 20.000/uL), pero en más del 80% de los niños es un cuadro benigno, autolimitado y que remite espontáneamente en 3 a 6 meses sin secuelas crónicas ni necesidad de fármacos tóxicos.',
          'Por el contrario, la PTI en el adulto (con predilección por mujeres de 18 a 40 años) es un cuadro de comienzo insidioso, que no tiene pródromo infeccioso reconocible y que tiende a la cronicidad en más del 70% de los casos. Requiere descartar activamente PTI secundaria a lupus eritematoso sistémico, infección por VIH, hepatitis C (VHC) e infección por Helicobacter pylori, patógenos que inducen mimetismo molecular cruzado.',
          'Dato semiológico patognomónico: en la PTI el examen físico es completamente NORMAL a excepción de las manifestaciones hemorrágicas mucocutáneas. La presencia de esplenomegalia palpable, linfoadenopatías patológicas o fiebre descarta PTI primaria y obliga a buscar leucemias, linfomas, hiperesplenismo o cirrosis.'
        ]
      },
      {
        subhead: '3. Criterios para Decidir el Inicio del Tratamiento Farmacológico',
        paragraphs: [
          'El objetivo del tratamiento en la PTI no es normalizar el recuento plaquetario a 150.000/uL, sino alcanzar un recuento seguro que prevenga hemorragias graves con la menor toxicidad farmacológica posible (típicamente > 30.000 a 50.000/uL).',
          'Las guías internacionales (ASH 2019 / Consenso Internacional) establecen que los pacientes adultos asintomáticos o con sangrado mucocutáneo mínimo (petequias secas aisladas) y recuento plaquetario > 30.000/uL NO REQUIEREN TRATAMIENTO INMUNOSUPRESOR, recomendándose únicamente observación ambulatoria estrecha, educación de autocuidado y evitar antiinflamatorios no esteroidales (AINEs) y traumatismos.',
          'El tratamiento farmacológico de primera línea se encuentra formalmente indicado ante: 1) Recuento de plaquetas < 20.000 a 30.000/uL (incluso si está asintomático, por riesgo basal de sangrado espontáneo); y 2) Presencia de manifestaciones hemorrágicas mucocutáneas activas (epistaxis abundante, gingivorragia, hematuria, metrorragia incoercible o hematomas extensos), independiente del recuento absoluto.'
        ]
      },
      {
        subhead: '4. Esquemas de Primera Línea: Corticoides Sistémicos e Inmunoglobulina Endovenosa (IgEV)',
        paragraphs: [
          'El pilar farmacológico de primera línea son los glucocorticoides sistémicos, existiendo dos regímenes equivalentes: 1) Dexametasona oral en pulsos de 40 mg/día durante 4 días consecutivos cada 14 a 28 días (por 1 a 3 ciclos); induce respuestas más rápidas y sostenidas con menor toxicidad a largo plazo; o 2) Prednisona oral a dosis de 1.0 mg/kg/día durante 2 a 4 semanas, seguida de un descenso paulatino en 4 a 6 semanas. La respuesta plaquetaria favorable se observa en el 70-80% de los pacientes a los 4 a 14 días.',
          'La Inmunoglobulina Endovenosa (IgEV, dosis de 1 g/kg/día durante 1 a 2 días) se indica como terapia de rescate de acción ultrarrápida en situaciones de urgencia: plaquetopenia severa con sangrado mucoso activo, requerimiento de cirugía de urgencia o sospecha de sangrado intracraneal. La IgEV actúa bloqueando de manera competitiva y masiva los receptores Fc-gamma de los macrófagos esplénicos ("saturación del bazo"), logrando ascender las plaquetas a niveles seguros en apenas 24 a 48 horas (efecto temporal que dura 2 a 4 semanas).',
          'En hemorragia con riesgo vital inminente (ej. hemorragia subaracnoidea o intraparenquimatosa) se administran simultáneamente: IgEV 1 g/kg + Metilprednisolona EV 1 g en bolo + Transfusión continua de concentrados de plaquetas (aunque se destruyan rápidamente, aportan hemostasia transitoria vital de minutos u horas para permitir la neurocirugía).'
        ]
      },
      {
        subhead: '5. Terapias de Segunda Línea: Agonistas del Receptor de Trombopoyetina y Esplenectomía',
        paragraphs: [
          'En pacientes corticodependientes o refractarios que persisten con plaquetas < 30.000/uL y clínica de sangrado tras la primera línea, las opciones contemporáneas de segunda línea comprenden: 1) Agonistas del receptor de trombopoyetina (AR-TPO): Eltrombopag (oral diario) y Romiplostim (subcutáneo semanal), que estimulan directamente la megacariopoyesis medular logrando respuestas sostenidas en > 80% sin inmunosupresión; 2) Rituximab (anti-CD20), que elimina los clones de linfocitos B productores de autoanticuerpos; y 3) Esplenectomía laparoscópica: cura quirúrgicamente la PTI en más del 65% de los adultos al resecar el sitio principal de fagocitosis y producción de anticuerpos.',
          'La esplenectomía se pospone al menos 12 meses desde el diagnóstico para permitir remisiones espontáneas tardías y exige inmunización previa reglada contra bacterias encapsuladas.'
        ]
      }
    ],
    table: {
      title: 'Comparación Clínica y Terapéutica: PTI Pediátrica vs PTI del Adulto',
      headers: ['Característica', 'PTI en Pediatría (Niños)', 'PTI en Adultos'],
      rows: [
        ['Edad Habitual de Presentación', 'Pico de incidencia entre 2 y 6 años de edad', 'Adultos jóvenes y medianos (18 a 40 años)'],
        ['Predisposición por Sexo', 'Distribución igual entre niños y niñas (1:1)', 'Marcado predominio femenino (3:1 a 4:1)'],
        ['Forma de Comienzo', 'Abrupta y explosiva (en horas o pocos días)', 'Insidiosa y progresiva (semanas a meses)'],
        ['Antecedente Previo Gatillante', 'Presente en > 75% (infección viral respiratoria o exantema)', 'Habitualmente ausente (sin desencadenante reconocible)'],
        ['Evolución Natural', 'Benigna y autolimitada: remisión espontánea en > 80%', 'Tendencia a la cronicidad en > 70-80% de los casos'],
        ['Examen Físico Rector', 'Petequias y equimosis; Bazo NO palpable', 'Púrpura mucocutáneo; Bazo NO palpable'],
        ['Conducta Terapéutica', 'Observación en la mayoría; tratar solo si sangrado mucoso', 'Tratar si plaquetas < 30.000 o sangrado: Corticoides/IgEV']
      ]
    },
    severityTable: {
      title: 'Estratificación del Sangrado en PTI según Escala de la OMS y Conducta',
      headers: ['Grado de Sangrado OMS', 'Manifestaciones Clínicas', 'Recuento Plaquetario', 'Conducta Médica Inmediata'],
      rows: [
        ['Grado 0 (Sin sangrado)', 'Asintomático; hallazgo de laboratorio', '> 30.000 /uL', 'No farmacológico; observación y educación'],
        ['Grado 1 (Leve / Petequial)', 'Petequias escasas, equimosis pequeñas < 3 cm', '20.000 a 30.000 /uL', 'Si > 30.000: observar; si < 20.000: Prednisona oral'],
        ['Grado 2 (Moderado / Mucoso)', 'Epistaxis autolimitada, gingivorragia, menorragia', '10.000 a 20.000 /uL', 'Prednisona oral 1 mg/kg/día o Dexametasona 40 mg'],
        ['Grado 3 (Grave)', 'Hemorragia digestiva, hematuria franca, epistaxis incoercible', '< 10.000 /uL', 'Hospitalización; IgEV 1 g/kg + Metilprednisolona EV'],
        ['Grado 4 (Riesgo Vital)', 'Hemorragia del SNC (cefalea brusca, déficit focal, coma)', '< 10.000 /uL', 'UCI: Metilprednisolona + IgEV + Transfusión plaquetas continua']
      ]
    },
    treatmentTable: {
      title: 'Escalamiento Farmacológico en la Púrpura Trombocitopénica Inmune',
      headers: ['Línea Terapéutica', 'Fármaco / Modalidad', 'Posología Estándar', 'Mecanismo de Acción Principal'],
      rows: [
        ['Primera Línea (Oral)', 'Prednisona vía oral', '1 mg/kg/día por 2 a 4 semanas con desescalamiento lento', 'Disminuye destrucción esplénica y síntesis de anticuerpos'],
        ['Primera Línea (Pulsos)', 'Dexametasona oral / EV', '40 mg/día por 4 días consecutivos (ciclos cada 14-28 días)', 'Respuesta rápida con menor duración de exposición a esteroides'],
        ['Rescate de Urgencia', 'Inmunoglobulina EV (IgEV)', '1 g/kg/día por 1 a 2 días (infusión hospitalaria monitorizada)', 'Bloqueo competitivo agudo de receptores Fc en macrófagos'],
        ['Segunda Línea (AR-TPO)', 'Eltrombopag (VO) / Romiplostim (SC)', 'Eltrombopag 25-75 mg/día oral en ayunas', 'Estimulación directa del receptor c-Mpl en megacariocitos'],
        ['Segunda Línea (Monoclonal)', 'Rituximab endovenoso', '375 mg/m² semanal durante 4 semanas consecutivas', 'Lisis y depleción de linfocitos B productores de anti-GPIIb/IIIa'],
        ['Segunda Línea (Cirugía)', 'Esplenectomía laparoscópica', 'Cirugía electiva diferida > 12 meses tras vacunación', 'Resección del órgano rector de fagocitosis plaquetaria']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Mujer Joven con Trombocitopenia Severa y Metrorragia',
      text: 'Mujer de 26 años, sin antecedentes mórbidos, consulta en policlínico por aparición espontánea de hematomas en extremidades, petequias en extremidades inferiores y metrorragia abundante en su ciclo menstrual actual. En el examen físico se observan múltiples petequias en piernas y pequeñas ampollas hemorrágicas en la mucosa yugal bucal. No se palpan linfoadenopatías ni visceromegalias (bazo no palpable). Hemograma: Hb 11.2 g/dL, Leucocitos 7.400/uL con fórmula normal, Plaquetas 9.000/uL. Pruebas de coagulación: TP 12.5 seg (INR 1.0), TTPK 29 seg, Fibrinógeno 310 mg/dL. El frotis periférico confirma trombocitopenia severa con plaquetas gigantes aisladas y sin esquistocitos.',
      conducta: 'Púrpura Trombocitopénica Inmune (PTI) del adulto con trombocitopenia grave (< 10.000/uL) y sangrado mucoso activo ("ampollas hemorrágicas orales" indican alto riesgo de sangrado mayor). Se debe hospitalizar de inmediato, descartar infección por VIH y VHC, e iniciar tratamiento de primera línea con corticoides sistémicos (Dexametasona 40 mg/día por 4 días o Prednisona 1 mg/kg/día). Se reserva IgEV si la metrorragia no cede o si aparecen signos de focalidad neurológica.'
    },
    keyPoints: [
      'La PTI primaria es un diagnóstico de exclusión: trombocitopenia aislada sin esplenomegalia ni adenopatías.',
      'Frotis obligatorio siempre para descartar Pseudotrombocitopenia por agregados plaquetarios inducidos por EDTA.',
      'En niños es aguda, autolimitada tras virosis y remite espontáneamente en > 80%; en adultos es crónica y progresiva.',
      'Pacientes asintomáticos con plaquetas > 30.000/uL NO requieren corticoides ni hospitalización; solo observación.',
      'Indicación de tratamiento: plaquetas < 20.000-30.000/uL o presencia de hemorragias mucocutáneas activas.',
      'Primera línea: Dexametasona 40 mg/día x 4 días o Prednisona 1 mg/kg/día x 2-4 semanas.',
      'La Inmunoglobulina EV (IgEV 1 g/kg) es la terapia de rescate urgente por su ascenso plaquetario rápido en 24-48 horas.',
      'Segunda línea: Agonistas del receptor de trombopoyetina (eltrombopag/romiplostim), rituximab o esplenectomía diferida.'
    ],
    questions: [
      {
        stem: 'Mujer de 29 años consulta por petequias en extremidades inferiores y gingivorragia de 4 días de evolución. Al examen se constata púrpura petequial sin visceromegalia ni adenopatías. El hemograma muestra Hb 12.8 g/dL, leucocitos 6.800/uL y plaquetas 14.000/uL. El frotis sanguíneo confirma trombocitopenia severa aislada y el estudio de coagulación es normal. ¿Cuál es el tratamiento inicial de primera línea más apropiado?',
        opciones: [
          'A) Transfusión inmediata de 2 aféresis de plaquetas',
          'B) Glucocorticoides sistémicos (Prednisona oral o Dexametasona en pulsos)',
          'C) Esplenectomía laparoscópica de urgencia',
          'D) Eltrombopag oral 50 mg al día',
          'E) Observación ambulatoria estricta sin tratamiento farmacológico'
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a una Púrpura Trombocitopénica Inmune (PTI) del adulto con recuento plaquetario < 20.000/uL y sangrado mucoso activo (gingivorragia). En esta situación clínica está formalmente indicado iniciar tratamiento farmacológico de primera línea con glucocorticoides sistémicos (prednisona 1 mg/kg/día o dexametasona 40 mg/día por 4 días). La transfusión de plaquetas solo se indica en sangrado vital inminente del SNC. Perla. El tratamiento de primera línea de la PTI con plaquetas < 20.000 o sangrado activo son los corticoides.',
        recTag: 'EUNACOM 2018 · Q#16'
      },
      {
        stem: 'Niño de 4 años previamente sano presenta petequias y equimosis en tronco y extremidades de aparición súbita, 2 semanas después de haber cursado una faringitis viral autolimitada. En el examen se encuentra en buenas condiciones generales, afebril, sin sangrado mucoso activo y sin esplenomegalia. El hemograma confirma plaquetas de 38.000/uL con glóbulos rojos y blancos normales. ¿Cuál es la conducta médica más recomendada?',
        opciones: [
          'A) Iniciar prednisona oral 2 mg/kg/día durante 6 semanas',
          'B) Hospitalizar para infusión de Inmunoglobulina Endovenosa (IgEV)',
          'C) Observación clínica ambulatoria periódica sin tratamiento farmacológico',
          'D) Indicar reposo absoluto y transfusión profiláctica de plaquetas',
          'E) Solicitar biopsia de médula ósea urgente para descartar leucemia'
        ],
        correcta: 'C',
        explicacion: 'En la PTI de la infancia con recuento de plaquetas superior a 30.000/uL y ausencia de hemorragia mucosa activa o grave, la recomendación actual de consenso pediátrico es la observación clínica ambulatoria sin iniciar corticoides ni IgEV, ya que más del 80% de los niños experimentan remisión espontánea completa en pocas semanas. Se educa a la familia para evitar traumatismos y consultar ante sangrado mucoso. Perla. PTI infantil con plaquetas > 30.000 y sin sangrado mucoso se maneja con observación clínica.',
        recTag: 'EUNACOM 2020 · Q#28'
      },
      {
        stem: '¿Cuál de los siguientes hallazgos al examen físico es el MENOS compatible con el diagnóstico de Púrpura Trombocitopénica Inmune (PTI) primaria y debe obligar al médico a buscar otra etiología?',
        opciones: [
          'A) Presencia de petequias en el paladar blando',
          'B) Equimosis espontáneas en sitios de presión mecánica',
          'C) Esplenomegalia franca palpable a 4 cm bajo el reborde costal',
          'D) Gingivorragia provocada por el cepillado dental',
          'E) Epistaxis anterior autolimitada'
        ],
        correcta: 'C',
        explicacion: 'En la PTI primaria la destrucción de plaquetas es un fenómeno microcelular que ocurre en el espesor de los cordones de Billroth sin generar esplenomegalia clínicamente palpable. El hallazgo de esplenomegalia en un paciente con trombocitopenia descarta virtualmente la PTI primaria y debe orientar de inmediato a cirrosis hepática con hipertensión portal e hiperesplenismo, linfoma, leucemia o enfermedad de depósito. Perla. En la PTI el bazo NO se palpa; si hay esplenomegalia busque otra patología.',
        recTag: 'EUNACOM 2022 · Q#39'
      },
      {
        stem: 'Paciente de 32 años con PTI refractaria a corticoides consulta por cefalea súbita de gran intensidad y vómitos explosivos. En la TC de encéfalo se confirma una hemorragia intraparenquimatosa frontal izquierda con efecto de masa. El recuento plaquetario es de 6.000/uL. ¿Cuál es el tratamiento hemostático de emergencia más adecuado que debe asociarse de inmediato a los corticoides endovenosos mientras se prepara la neurocirugía?',
        opciones: [
          'A) Transfusión masiva de crioprecipitado en bolo',
          'B) Inmunoglobulina Endovenosa (IgEV) a altas dosis asociada a transfusión continua de concentrados de plaquetas',
          'C) Infusión de factor VII activado recombinante en monoterapia',
          'D) Administración de ácido tranexámico oral exclusivamente',
          'E) Esplenectomía de urgencia en el pabellón de neurocirugía'
        ],
        correcta: 'B',
        explicacion: 'Ante una hemorragia intracraneal aguda potencialmente mortal en un paciente con PTI severa, la conducta de emergencia vital consiste en administrar simultáneamente Inmunoglobulina Endovenosa (1 g/kg) para bloquear de forma ultrarrápida la fagocitosis esplénica, corticoides en pulsos y transfusiones repetidas o continuas de concentrados plaquetarios. Aunque las plaquetas transfundidas tengan una vida media acortada, permiten lograr hemostasia temporal indispensable para salvar la vida del paciente y permitir la craneotomía descompresiva. Perla. En sangrado vital del SNC en PTI se combina IgEV con transfusión de plaquetas inmediata.',
        recTag: 'EUNACOM 2023 · Q#18'
      }
    ]
  },
  {
    id: 'hem-13',
    classId: 'hem-13',
    tier: 3,
    blockNum: 3,
    blockName: 'Hemostasia Primaria, Plaquetas y Coagulopatías',
    topicLabel: '8.13',
    title: 'Coagulopatías Congénitas: Hemofilia A (Factor VIII), Hemofilia B (Factor IX) y Enfermedad de von Willebrand',
    perfilCode: '1.08.1.006',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES N° 32): Hemofilia y otras coagulopatías congénitas',
    reconstrucciones: 'EUNACOM Julio 2017 (Q#15) · EUNACOM Diciembre 2019 (Q#21) · EUNACOM Julio 2021 (Q#45) · EUNACOM Enero 2024 (Q#19)',
    frecuencia: 'Muy Alta · Herencia recesiva ligada al X, hemartrosis, TTPK prolongado aislado, tratamiento sustitutivo con factor liofilizado',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Terapéutico de Coagulopatías Congénitas',
    diagram: flow('Algoritmo de Coagulopatías Hereditarias (GES N° 32)', [
      { t: 'Paciente con Hematomas Extensos o Hemartrosis Espontáneas tras Traumatismo Menor', s: 'Sospecha clínica de defecto de coagulación · Evaluación de laboratorio: TP, TTPK y Plaquetas' },
      { k: 'split', q: 'Patrón de Herencia y Características Clínicas Dominantes', s: 'Diferencia defectos ligados al cromosoma X de autosómicos', ll: 'Varón con Hemartrosis + Antecedente de Tíos Maternos', rl: 'Ambos Sexos con Sangrado Mucocutáneo (Epistaxis/Menorragia)',
        left: { t: 'Hemofilia A (Déficit FVIII) o B (Déficit FIX)', s: 'Herencia recesiva ligada al X · TTPK prolongado que corrige con mezcla · Hemartrosis en rodillas/codos', type: 'acc' },
        right: { t: 'Enfermedad de von Willebrand (EvW)', s: 'Autosómica dominante más común · Defecto adhesión plaquetaria + déficit secundario de FVIII · TTPK +/- alterado', type: 'warn' },
        ll: 'hemofilia (varones)', rl: 'von willebrand (ambos)' },
      { t: 'Tratamiento de Emergencia en Hemartrosis / Sangrado Hemofílico', s: 'Concentrado de Factor Específico liofilizado (FVIII en hemofilia A, FIX en hemofilia B) · ¡Prohibido AINEs y punción articular!', type: 'crit', al: 'terapia sustitutiva', from: 'left' },
      { t: 'Tratamiento Específico en Enfermedad de von Willebrand', s: 'Desmopresina (DDAVP) en tipo 1 (estimula liberación endotelial de vWF) O Concentrados de FVIII ricos en vWF', type: 'dec', al: 'ddavp en evw', from: 'right' }
    ]),
    contexto: 'Las coagulopatías congénitas están cubiertas al 100% en Chile bajo el régimen GES N° 32 (Hemofilia). El EUNACOM evalúa: 1) La Hemofilia A (déficit de Factor VIII, 85% de los casos) y la Hemofilia B (déficit de Factor IX, 15%), transmitidas de forma recesiva ligada al cromosoma X, afectando clínicamente a varones con madres portadoras; 2) Las hemartrosis a repetición como manifestación distintiva que conduce a artropatía hemofílica invalidante; 3) La Enfermedad de von Willebrand como la diátesis hemorrágica hereditaria más común a nivel mundial (autosómica dominante con alteración de la hemostasia primaria y secundaria); y 4) La contraindicación formal de administrar aspirina, AINEs o realizar punciones articulares no cubiertas.',
    contentSections: [
      {
        subhead: '1. Genética y Fisiopatología: Hemofilia A (FVIII) vs Hemofilia B (FIX)',
        paragraphs: [
          'La Hemofilia A (hemofilia clásica) y la Hemofilia B (enfermedad de Christmas) son coagulopatías hereditarias transmitidas con patrón recesivo ligado al cromosoma X, debidas a mutaciones en los genes F8 y F9 respectivamente. Afectan casi con exclusividad a varones, mientras que las mujeres son portadoras asintomáticas (con un 50% de probabilidad de transmitir la enfermedad a sus hijos varones y un 50% de transmitir el estado de portadora a sus hijas). Hasta en un 30% de los casos no existe antecedente familiar reconocible, correspondiendo a mutaciones de novo.',
          'Tanto el Factor VIII activado (FVIIIa) como el Factor IX activado (FIXa) conforman el Complejo Tenasa de la vía intrínseca sobre la superficie fosfolipídica de las plaquetas activadas, cuya función es activar catalíticamente al Factor X para la formación masiva de trombina. La deficiencia de cualquiera de ellos colapsa la vía intrínseca de amplificación, impidiendo la consolidación del coágulo de fibrina.',
          'La gravedad clínica se clasifica según el nivel de actividad coagulante residual en plasma: 1) Severa: actividad de factor < 1% (< 0.01 UI/mL), caracterizada por hemartrosis y hematomas musculares espontáneos frecuentes desde la lactancia; 2) Moderada: actividad entre 1% y 5%, con sangrados espontáneos ocasionales y hemorragias graves ante traumas leves; y 3) Leve: actividad entre 5% y 40%, donde el paciente no sangra espontáneamente y solo se manifiesta ante cirugías mayores, exodoncias o traumatismos severos.'
        ]
      },
      {
        subhead: '2. Cuadro Clínico de la Hemofilia: La Hemartrosis y la Artropatía Hemofílica',
        paragraphs: [
          'La manifestación cardinal y patognomónica de la hemofilia severa es la Hemartrosis (sangrado intraarticular), la cual representa más del 75-80% de todos los eventos hemorrágicos. Afecta típicamente a las grandes articulaciones en bisagra sometidas a carga: rodillas, codos, tobillos, hombros y caderas.',
          'El episodio agudo debuta con una sensación urente prodrómica ("aura hemofílica"), seguida rápidamente de dolor articular exquisito e intolerable, tumefacción a tensión, calor local e impotencia funcional motora completa con fijación articular en flexión antiálgica. La acumulación repetida de sangre en la cavidad sinovial induce depósitos de hemosiderina que gatillan una sinovitis proliferativa destructiva crónica, con pérdida del cartílago articular, pinzamiento articular, anquilosis ósea y atrofia muscular secundaria, configurando la temida Artropatía Hemofílica crónica invalidante.',
          'Otras manifestaciones graves son los hematomas musculares profundos en sitios de riesgo anatómico: el hematoma del músculo psoas ilíaco (dolor lumbar o en fosa ilíaca con flexión refleja de cadera y parestesias del nervio crural femoral) y los hematomas compartimentales en antebrazo o pantorrilla con síndrome compartimental isquémico agudo.'
        ]
      },
      {
        subhead: '3. Enfermedad de von Willebrand (EvW): Fisiopatología y Clasificación',
        paragraphs: [
          'La Enfermedad de von Willebrand (EvW) es el trastorno hemorrágico hereditario más frecuente en la especie humana (prevalencia estimada del 1% poblacional), transmitido con patrón de herencia autosómico dominante en la gran mayoría de los subtipos (afectando por igual a hombres y mujeres). Se debe a una deficiencia cuantitativa o cualitativa del Factor von Willebrand (vWF), glicoproteína plasmática multimérica sintetizada por las células endoteliales (cuerpos de Weibel-Palade) y megacariocitos.',
          'El vWF cumple una doble función fisiológica hemostática indispensable: 1) En la hemostasia primaria: sirve como puente molecular adhesivo que fija las plaquetas al colágeno subendotelial a través del receptor plaquetario GPIb; y 2) En la hemostasia secundaria: actúa como proteína transportadora plasmática del Factor VIII, estabilizándolo y protegiéndolo de la inactivación prematura por la proteína C activada (prolongando la vida media del FVIII de 2 horas a 12 horas).',
          'Se clasifica en tres subtipos: Tipo 1 (representa el 75-80% de los casos): déficit cuantitativo parcial de vWF con estructura normal; cursa con clínica leve a moderada de sangrado mucocutáneo (epistaxis de repetición, menorragia severa desde la menarquia, equimosis fáciles y hemorragia prolongada poscirugía o exodoncia); Tipo 2 (15%): déficit cualitativo funcional del vWF; y Tipo 3 (< 5%): déficit cuantitativo total y autosómico recesivo, con ausencia completa de vWF y niveles de FVIII < 1-2%, asemejando una hemofilia severa con hemartrosis.'
        ]
      },
      {
        subhead: '4. Diagnóstico Analítico y Diferencial de Laboratorio',
        paragraphs: [
          'En la Hemofilia A y B el hemograma (recuento plaquetario) y el Tiempo de Protrombina (TP/INR) son ESTRICTAMENTE NORMALES. El único examen alterado es el Tiempo de Tromboplastina Parcial Activada (TTPK), que se encuentra francamente prolongado. La Prueba de Mezcla 1:1 con plasma normal corrige completamente el TTPK. La confirmación y diferenciación definitiva entre hemofilia A y B se realiza mediante la dosificación específica cuantitativa de la actividad plasmática de Factor VIII y Factor IX.',
          'En la Enfermedad de von Willebrand: el recuento de plaquetas y el TP son normales (salvo en el subtipo 2B donde puede haber trombocitopenia leve). El TTPK puede estar prolongado o ser completamente normal (según el grado de disminución secundaria de Factor VIII que acompañe al déficit de vWF). El diagnóstico exige el estudio del perfil de von Willebrand: antígeno de vWF (vWF:Ag, mide cantidad), actividad de cofactor de ristocetina (vWF:RCo, mide la función de adhesión plaquetaria) y dosificación de Factor VIII coagulante.'
        ]
      },
      {
        subhead: '5. Protocolos Terapéuticos y Garantías GES N° 32',
        paragraphs: [
          'En Chile, el régimen GES N° 32 garantiza la entrega gratuita de factores de coagulación liofilizados recombinantes o plasmáticos inactivados viralmente, tanto en profilaxis primaria continua domiciliaria como en tratamiento de rescate a demanda ante sangrado.',
          'Ante una hemartrosis aguda o sospecha de sangrado hemofílico, el principio rector es: INFUNDIR EL FACTOR ESPECÍFICO DE INMEDIATO sin esperar exámenes radiológicos: 1) En Hemofilia A: concentrado de Factor VIII recombinante (cada 1 UI/kg de FVIII infundido eleva el nivel plasmático en un 2%; en hemartrosis se busca meta del 40-50%, requiriendo 25-30 UI/kg; en sangrado del SNC o politrauma se busca meta del 100%, requiriendo 50 UI/kg); 2) En Hemofilia B: concentrado de Factor IX (cada 1 UI/kg de FIX eleva el nivel en 1%, requiriendo 40-50 UI/kg para hemartrosis y 100 UI/kg para sangrado vital).',
          'En la Enfermedad de von Willebrand tipo 1, el fármaco de elección para procedimientos menores o hemorragias mucosas es la Desmopresina (DDAVP, análogo sintético de vasopresina que induce la degranulación y liberación endotelial rápida de reservas endógenas de vWF y FVIII). En hemorragias graves o subtipos 2 y 3 se infunden concentrados plasmáticos de FVIII de alta pureza que contienen vWF.',
          'Reglas de seguridad absoluta en hemofilia: 1) NUNCA administrar ácido acetilsalicílico (aspirina) ni AINEs clásicos (inhiben las plaquetas y pueden precipitar hemorragias masivas mortales); los analgésicos permitidos son el paracetamol y opioides; 2) NUNCA realizar inyecciones intramusculares (riesgo de hematoma sofocante); y 3) NUNCA puncionar una articulación con hemartrosis (artrocentesis prohibida salvo sospecha fundada de artritis séptica y siempre tras haber infundido factor al 100%).'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial: Hemofilia A vs Hemofilia B vs Enfermedad de von Willebrand',
      headers: ['Característica', 'Hemofilia A', 'Hemofilia B', 'Enfermedad de von Willebrand (Tipo 1)'],
      rows: [
        ['Herencia Genética', 'Recesiva ligada al cromosoma X', 'Recesiva ligada al cromosoma X', 'Autosómica dominante (cromosoma 12)'],
        ['Población Afectada', 'Varones exclusivamente (mujeres portadoras)', 'Varones exclusivamente (mujeres portadoras)', 'Ambos sexos por igual (hombres y mujeres)'],
        ['Factor Deficiente', 'Factor VIII coagulante (F8)', 'Factor IX coagulante (F9)', 'Factor von Willebrand (vWF) cuantitativo'],
        ['Manifestación Dominante', 'Hemartrosis articular y hematomas musculares', 'Hemartrosis articular y hematomas musculares', 'Sangrado mucocutáneo (epistaxis, menorragia)'],
        ['Tiempo de Protrombina (TP)', 'Estrictamente NORMAL', 'Estrictamente NORMAL', 'Estrictamente NORMAL'],
        ['TTPK / TTPA', 'Marcadamente PROLONGADO (corrige mezcla)', 'Marcadamente PROLONGADO (corrige mezcla)', 'Variable: prolongado o normal (según FVIII)'],
        ['Tratamiento Farmacológico', 'Concentrado de Factor VIII liofilizado (GES 32)', 'Concentrado de Factor IX liofilizado (GES 32)', 'Desmopresina (DDAVP) / Concentrado FVIII-vWF']
      ]
    },
    severityTable: {
      title: 'Clasificación de Severidad y Metas de Reposición en Hemofilia A',
      headers: ['Severidad', 'Actividad FVIII Plasmática', 'Clínica Hemorrágica Típica', 'Meta Terapéutica en Urgencias'],
      rows: [
        ['Hemofilia Grave', '< 1% de actividad (< 0.01 UI/mL)', 'Hemartrosis y sangrados profundos espontáneos frecuentes', 'Profilaxis domiciliaria trisemanal (meta valle > 1%)'],
        ['Hemofilia Moderada', '1% a 5% de actividad (0.01 - 0.05 UI/mL)', 'Sangrado ante traumatismos menores o cirugías menores', 'Infundir FVIII 25-30 UI/kg ante cualquier trauma articular'],
        ['Hemofilia Leve', '5% a 40% de actividad (0.05 - 0.40 UI/mL)', 'Solo sangrado tras cirugías mayores, extracciones o trauma grave', 'Infundir FVIII previo a intervenciones quirúrgicas invasivas'],
        ['Hemartrosis Aguda', 'Cualquier nivel previo', 'Dolor articular agudo, aumento de volumen y flexión fija', 'Llevar FVIII al 40-50% (25-30 UI/kg) de forma inmediata'],
        ['Sangrado del SNC', 'Cualquier nivel previo', 'Cefalea, vómitos, alteración de conciencia o traumatismo encéfalo', 'Llevar FVIII al 100% (50 UI/kg) antes de realizar TAC cerebral']
      ]
    },
    treatmentTable: {
      title: 'Protocolo de Manejo Farmacológico y Contraindicaciones en Hemofilia',
      headers: ['Tipo de Fármaco / Medida', 'Nombre Genérico y Posología', 'Indicación Clínica Precisa', 'Peligro / Advertencia EUNACOM'],
      rows: [
        ['Terapia Sustitutiva FVIII', 'Concentrado FVIII recombinante 25-50 UI/kg EV', 'Hemartrosis, hematoma de psoas o sangrado en hemofilia A', 'Infusión precoz inmediata; no demorar esperando radiografías'],
        ['Terapia Sustitutiva FIX', 'Concentrado FIX recombinante 40-100 UI/kg EV', 'Hemartrosis y sangrados en hemofilia B (Christmas)', 'Factor VIII es completamente inútil en hemofilia B'],
        ['Secretagogo Endotelial', 'Desmopresina (DDAVP) 0.3 ug/kg EV en infusión salina', 'Enfermedad de von Willebrand tipo 1 y hemofilia A leve', 'Riesgo de hiponatremia por efecto antidiurético; limitar líquidos'],
        ['Antifibrinolítico', 'Ácido Tranexámico 15-25 mg/kg VO o EV c/8h', 'Coadyuvante en sangrado mucoso oral o exodoncia dental', 'Contraindicado formalmente en hematuria macroscópica renal'],
        ['Contraindicación Farmacológica', 'Aspirina y AINEs (Ibuprofeno, Diclofenaco, Ketorolaco)', '¡PROHIBIDOS TOTALMENTE EN HEMOFILIA Y EvW!', 'Inhiben la hemostasia primaria y gatillan sangrado mortal'],
        ['Contraindicación Procedimental', 'Inyecciones intramusculares y Artrocentesis articular', '¡PROHIBIDAS SALVO PROTOCOLO ESTRICTO EN PABELLÓN!', 'Riesgo de hematoma sofocante y artritis séptica grave']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Niño con Dolor Articular Agudo e Impotencia Funcional',
      text: 'Niño de 5 años es traído a urgencias pediátricas por dolor articular intenso y tumefacción en la rodilla derecha de 6 horas de evolución tras una caída menor jugando en el colegio. Al examen físico la rodilla está caliente, globulosa, intensamente dolorosa a la palpación y con flexión fija a 45 grados. Su madre refiere que un tío materno falleció joven por complicaciones de una "enfermedad de la sangre". Hemograma: Hb 12.0 g/dL, Plaquetas 280.000/uL; Pruebas de coagulación: TP 12.1 seg (normal), TTPK 62 seg (control 29 seg). El médico de turno sospecha artritis traumática y solicita aguja y jeringa para realizar una punción articular diagnóstica.',
      conducta: 'Error médico grave. El cuadro clínico de hemartrosis aguda con TTPK marcadamente prolongado y antecedente familiar ligado al cromosoma X es diagnóstico de Hemofilia A (o B). Está estrictamente contraindicado realizar artrocentesis (aumenta el sangrado intraarticular e introduce gérmenes). La conducta médica de urgencia es canalizar vía venosa e infundir inmediatamente concentrado de Factor VIII recombinante a dosis de 30 UI/kg para llevar el factor al 50%, inmovilizar la articulación en semiflexión y aplicar frío local.'
    },
    keyPoints: [
      'Hemofilia A (FVIII) y B (FIX): recesivas ligadas al cromosoma X (afectan a varones, transmitidas por mujeres).',
      'La hemartrosis recurrente en grandes articulaciones es la manifestación cardinal de la hemofilia severa.',
      'Perfil hemostático de hemofilia: plaquetas y TP normales, TTPK prolongado que corrige con plasma normal.',
      'Ante una hemartrosis se debe infundir el factor específico de inmediato; NUNCA realizar punción articular evacuadora.',
      'La Enfermedad de von Willebrand es autosómica dominante (afecta por igual a hombres y mujeres); sangrado mucocutáneo.',
      'Enfermedad de von Willebrand tipo 1 responde favorablemente a Desmopresina (DDAVP).',
      '¡Contraindicaciones formales!: NUNCA prescribir aspirina ni AINEs, ni realizar inyecciones intramusculares.',
      'El tratamiento de la hemofilia y coagulopatías congénitas está cubierto por el régimen GES N° 32 en Chile.'
    ],
    questions: [
      {
        stem: 'Niño de 6 años presenta tumefacción dolorosa e incapacidad funcional en la rodilla derecha tras una caída menor en bicicleta. En sus antecedentes destaca hematoma importante en el muslo tras vacuna a los 2 meses de vida y un hermano mayor con episodios articulares similares. Las pruebas de laboratorio revelan plaquetas normales, TP de 12 segundos y TTPK de 68 segundos (control 30 segundos). ¿Cuál es la conducta terapéutica inmediata más adecuada?',
        opciones: [
          'A) Realizar artrocentesis evacuadora inmediata de la rodilla',
          'B) Infundir concentrado de Factor VIII endovenoso de inmediato',
          'C) Indicar ácido acetilsalicílico en dosis de 500 mg cada 8 horas',
          'D) Inyectar un corticoide de depósito por vía intramuscular',
          'E) Solicitar resonancia magnética de rodilla antes de cualquier terapia'
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a una hemartrosis aguda en un niño con Hemofilia A (herencia ligada al X, TTPK prolongado aislado). La conducta prioritaria de urgencia es la administración inmediata de concentrado de Factor VIII endovenoso para elevar el nivel al 40-50% y detener la hemorragia sin esperar estudios de imagen. La artrocentesis está contraindicada por riesgo de sangrado continuo e infección, y la aspirina y las inyecciones intramusculares están prohibidas. Perla. El tratamiento de urgencia de la hemartrosis hemofílica es la infusión inmediata del factor deficiente.',
        recTag: 'EUNACOM 2017 · Q#15'
      },
      {
        stem: '¿Cuál de las siguientes características clínicas o de laboratorio permite distinguir de manera más concluyente a la Enfermedad de von Willebrand de la Hemofilia A?',
        opciones: [
          'A) Presencia de un Tiempo de Tromboplastina Parcial Activada (TTPK) prolongado',
          'B) Patrón de herencia autosómico dominante con afectación tanto de varones como de mujeres',
          'C) Ausencia completa de hematomas tras procedimientos quirúrgicos',
          'D) Normalización del sangrado tras la administración de vitamina K',
          'E) Disminución marcada de los niveles plasmáticos de Factor IX'
        ],
        correcta: 'B',
        explicacion: 'La Hemofilia A es un trastorno de herencia recesiva ligada al cromosoma X, por lo que afecta clínicamente casi de forma exclusiva a varones. En contraste, la Enfermedad de von Willebrand se transmite con patrón autosómico dominante en la inmensa mayoría de los casos, afectando con igual frecuencia y gravedad tanto a hombres como a mujeres (siendo muy típica la menorragia grave en mujeres). Perla. La enfermedad de von Willebrand afecta a ambos sexos (autosómica dominante); la hemofilia solo a varones (ligada al X).',
        recTag: 'EUNACOM 2019 · Q#21'
      },
      {
        stem: '¿Cuál es el mecanismo de acción de la Desmopresina (DDAVP) en el tratamiento de los episodios hemorrágicos leves en pacientes con Enfermedad de von Willebrand tipo 1?',
        opciones: [
          'A) Inhibe directamente la degradación de la fibrina al bloquear el plasminógeno',
          'B) Estimula la liberación endotelial de factor von Willebrand y factor VIII preformados hacia el plasma',
          'C) Induce la síntesis hepática dependiente de vitamina K de nuevos factores de coagulación',
          'D) Promueve la proliferación clonal de megacariocitos en la médula ósea',
          'E) Bloquea competitivamente los receptores plaquetarios de ADP'
        ],
        correcta: 'B',
        explicacion: 'La desmopresina (DDAVP) es un análogo sintético de la vasopresina que actúa sobre los receptores V2 de las células endoteliales vasculares, induciendo la exocitosis rápida de los cuerpos de Weibel-Palade y liberando a la circulación sanguínea factor von Willebrand y factor VIII preformados, multiplicando sus niveles plasmáticos de 2 a 4 veces durante varias horas. Perla. La desmopresina libera factor von Willebrand y factor VIII almacenados en el endotelio.',
        recTag: 'EUNACOM 2021 · Q#45'
      },
      {
        stem: 'Un paciente de 15 años con diagnóstico de Hemofilia A severa consulta por dolor e inflamación en el tobillo izquierdo tras un esguince. Para el control del dolor, ¿cuál de los siguientes fármacos analgésicos se encuentra FORMALMENTE CONTRAINDICADO?',
        opciones: [
          'A) Paracetamol',
          'B) Tramadol',
          'C) Ketorolaco',
          'D) Sulfato de morfina',
          'E) Codeína'
        ],
        correcta: 'C',
        explicacion: 'Los antiinflamatorios no esteroidales (AINEs) clásicos como el ketorolaco, ibuprofeno o ketoprofeno, así como el ácido acetilsalicílico, inhiben la enzima ciclooxigenasa-1 (COX-1) en las plaquetas y suprimen la síntesis de tromboxano A2, deteriorando la hemostasia primaria. En un paciente con hemofilia que ya posee un defecto grave de la hemostasia secundaria, anular la hemostasia primaria plaquetaria gatilla sangrados masivos descontrolados e incoercibles. Los fármacos de elección para el dolor son paracetamol y opioides. Perla. AINEs y aspirina están estrictamente prohibidos en pacientes hemofílicos.',
        recTag: 'EUNACOM 2024 · Q#19'
      }
    ]
  },
  {
    id: 'hem-14',
    classId: 'hem-14',
    tier: 2,
    blockNum: 3,
    blockName: 'Hemostasia Primaria, Plaquetas y Coagulopatías',
    topicLabel: '8.14',
    title: 'Coagulopatías Adquiridas: Hepatopatía Crónica, Déficit de Vitamina K y Manejo de Anticoagulantes',
    perfilCode: '1.08.1.005',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Completo',
    ges: 'No GES directo · Programa de Anticoagulación Oral en Atención Primaria',
    reconstrucciones: 'EUNACOM Julio 2018 (Q#22) · EUNACOM Diciembre 2021 (Q#14)',
    frecuencia: 'Alta · Reversión urgente de sobreanticoagulación con cumarínicos (Vitamina K vs CCP) y DOACs',
    svg: null, algoTitle: 'Algoritmo de Reversión de la Anticoagulación Oral según Sangrado e INR',
    diagram: flow('Algoritmo de Reversión de Anticoagulación Oral en Urgencias', [
      { t: 'Paciente en Tratamiento con Anticoagulantes Orales (Acenocumarol / Warfarina) con INR Elevado', s: 'Evaluar presencia de sangrado activo y estabilidad hemodinámica' },
      { k: 'split', q: 'Estratificación Clínica: ¿Hemorragia Activa Grave o Riesgo Vital?', s: 'Determina la urgencia de reversión enzimática vs restitución directa de factores', ll: 'Sin Sangrado O Sangrado Menor (INR 4.5 a 10)', rl: 'Hemorragia Grave / Riesgo Vital (Cualquier INR)',
        left: { t: 'Manejo Ambulatorio Conservador', s: 'Suspender 1 a 2 dosis de acenocumarol · Vitamina K oral 1 a 2.5 mg si INR > 10 · Controlar INR en 24-48 horas', type: 'acc' },
        right: { t: 'Reversión Inmediata de Emergencia', s: 'Concentrado de Complejo Protrombínico (CCP 4 factores) 25-50 UI/kg EV O Plasma Fresco + Vitamina K 10 mg EV lenta', type: 'crit', al: 'urgencia extrema' },
        ll: 'asintomático / leve', rl: 'sangrado grave' },
      { t: 'Peligro con Vitamina K Endovenosa Rápida', s: 'La infusión EV en bolo rápido puede provocar anafilaxia grave; debe infundirse diluida en al menos 20 a 30 minutos', type: 'warn', al: 'alerta de infusión', from: 'right' }
    ]),
    contexto: 'Las coagulopatías adquiridas superan ampliamente en frecuencia a las congénitas en la práctica médica del adulto. El hígado sintetiza prácticamente la totalidad de los factores de la coagulación e inhibidores naturales (proteína C, S, antitrombina). En la cirrosis coexiste hipocoagulabilidad por déficit de síntesis e hipercoagulabilidad paradójica por déficit de anticoagulantes endógenos. Por otra parte, la sobreanticoagulación con antagonistas de la vitamina K (acenocumarol) es una de las emergencias iatrogénicas más frecuentes en APS y urgencias; el EUNACOM evalúa rigurosamente el protocolo de ajuste según INR y la reversión con vitamina K oral vs Concentrado de Complejo Protrombínico (CCP).',
    contentSections: [
      {
        subhead: '1. Déficit de Vitamina K y Coagulopatía en el Daño Hepático Crónico',
        paragraphs: [
          'La vitamina K es una vitamina liposoluble esencial que actúa como cofactor de la enzima gamma-glutamil carboxilasa en los hepatocitos. Esta enzima carboxila los residuos de ácido glutámico de los factores de la coagulación II (protrombina), VII, IX y X, así como de las proteínas anticoagulantes C y S. Sin esta carboxilación, estos factores no pueden fijar iones de calcio a través de sus dominios Gla ni unirse a las membranas fosfolipídicas plaquetarias, resultando biológicamente inertes.',
          'Las causas de déficit de vitamina K incluyen desnutrición extrema, antibioticoterapia prolongada de amplio espectro (que barre la microbiota colónica sintetizadora de menaquinonas), síndromes malabsortivos intestinales crónicos (enfermedad celíaca, resección ileal) y colestasis crónica obstructiva (la ausencia de sales biliares en la luz intestinal impide la emulsificación y absorción de grasas y vitaminas liposolubles A, D, E y K). En el déficit puro de vitamina K, el factor VII desciende primero (TP prolongado) y luego el factor IX (TTPK prolongado); la administración de fitomenadiona (vitamina K1) normaliza el TP en 12 a 24 horas.',
          'En el Daño Hepático Crónico (DHC/cirrosis), la pérdida de masa hepatocelular reduce la síntesis de todos los factores procoagulantes dependientes e independientes de vitamina K (incluyendo el Factor V, el cual es sintetizado exclusivamente por el hígado pero no requiere vitamina K). Un TP prolongado con Factor V bajo confirma daño hepatocelular intrínseco que NO corregirá con vitamina K parenteral.'
        ]
      },
      {
        subhead: '2. Protocolo de Manejo de la Sobredosis de Anticoagulantes Cumarínicos (Acenocumarol / Warfarina)',
        paragraphs: [
          'El acenocumarol y la warfarina inhiben competitivamente a la enzima vitamina K epóxido reductasa (VKORC1), impidiendo el reciclaje de vitamina K activa. Su rango terapéutico habitual es un INR de 2.0 a 3.0 (en válvulas mecánicas mitrales: 2.5 a 3.5). Las fluctuaciones del INR son frecuentes por interacciones farmacológicas (amiodarona, metronidazol, ciprofloxacino o cotrimoxazol potencian su efecto inhibiendo el citocromo CYP2C9).',
          'El protocolo de manejo se estratifica según la presencia de hemorragia y el nivel de INR: 1) INR entre 4.5 y 10.0 SIN sangrado: suspender 1 o 2 tomas de acenocumarol, monitorizar INR y reiniciar con dosis menor cuando retorne a rango meta; no requiere vitamina K de rutina; 2) INR > 10.0 SIN sangrado: suspender el fármaco y administrar Vitamina K1 oral a dosis bajas (2.5 a 5.0 mg); la vía oral es más segura y previene la resistencia prolongada a cumarínicos; y 3) Hemorragia grave con riesgo vital (independiente del valor de INR): suspender anticoagulante e indicar inmediatamente Concentrado de Complejo Protrombínico (CCP de 4 factores: II, VII, IX y X) a dosis de 25 a 50 UI/kg EV, asociado a Vitamina K1 10 mg EV en infusión lenta (diluida en 100 mL de suero fisiológico a pasar en 30 minutos). Si no se dispone de CCP, se utiliza Plasma Fresco Congelado (PFC, 15 mL/kg).'
        ]
      },
      {
        subhead: '3. Reversión de los Anticoagulantes Orales Directos (DOACs: Rivaroxabán, Apixabán, Dabigatrán)',
        paragraphs: [
          'Los Anticoagulantes Orales Directos (inhibidores directos del factor Xa: Rivaroxabán, Apixabán, Edoxabán; e inhibidor directo de la trombina: Dabigatrán) no requieren monitorización rutinaria mediante TP ni TTPK. Su vida media plasmática es corta (8 a 14 horas con función renal conservada).',
          'Ante una hemorragia mayor o necesidad de cirugía de emergencia: 1) Para Dabigatrán existe el antídoto específico Idarucizumab (anticuerpo monoclonal humanizado que neutraliza dabigatrán en minutos, dosis 5 g EV); 2) Para los inhibidores del Factor Xa (Rivaroxabán/Apixabán) existe el Andexanet alfa (señuelo inactivo recombinante de FXa) o, en su defecto en la mayoría de los hospitales públicos, el Concentrado de Complejo Protrombínico (CCP no activado de 4 factores a 50 UI/kg o CCP activado FEIBA); y 3) Para Heparina No Fraccionada, el antídoto es el Sulfato de Protamina (1 mg de protamina neutraliza 100 UI de heparina administrada en las últimas 2 horas).'
        ]
      }
    ],
    table: {
      title: 'Manejo Escalonado de la Sobreanticoagulación por Cumarínicos según Guías Clínicas',
      headers: ['Nivel de INR', 'Manifestación Clínica', 'Intervención Farmacológica Recomendada', 'Tiempo de Respuesta'],
      rows: [
        ['INR 4.5 a 10.0', 'Sin hemorragia activa', 'Suspender 1 a 2 dosis; NO administrar vitamina K de rutina', 'Descenso paulatino en 24 a 48 horas'],
        ['INR > 10.0', 'Sin hemorragia activa', 'Suspender fármaco + Vitamina K1 oral 2.5 a 5 mg', 'Corrección de INR en 24 horas sin refractariedad'],
        ['Cualquier INR', 'Hemorragia leve / mucocutánea', 'Suspender fármaco + Vitamina K1 oral 2.5 a 5 mg', 'Monitoreo y hemostasia local'],
        ['Cualquier INR', 'Hemorragia grave o riesgo vital', 'Suspender + CCP 4 factores (25-50 UI/kg) EV + Vit K 10 mg EV', 'Reversión hemostática inmediata en 10-15 minutos (CCP)'],
        ['Alternativa si no hay CCP', 'Hemorragia grave', 'Plasma Fresco Congelado (PFC 15 mL/kg) + Vitamina K 10 mg EV', 'Lenta (horas); riesgo de sobrecarga de volumen']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Paciente Anticoagulado con Sangrado Digestivo Alto e INR Tóxico',
      text: 'Hombre de 71 años con fibrilación auricular no valvular en tratamiento con acenocumarol, consulta en urgencias por hematemesis copiosa y melena de 6 horas, acompañada de mareos ortostáticos. En el examen físico: PA 90/55 mmHg, FC 112 lpm, palidez intensa y sudoración fría. El laboratorio de urgencia revela: Hb 7.8 g/dL, Plaquetas 210.000/uL, INR 8.5, TTPK 52 seg. Se inicia reanimación con fluidos cristaloides y transfusión de 2 unidades de glóbulos rojos.',
      conducta: 'Hemorragia digestiva alta masiva con inestabilidad hemodinámica secundaria a sobreanticoagulación grave por cumarínicos (INR 8.5). La conducta médica prioritaria inmediata es la reversión urgente de la anticoagulación con Concentrado de Complejo Protrombínico (CCP de 4 factores) a 50 UI/kg endovenoso en bolo rápido más Vitamina K1 10 mg endovenosa diluida en infusión lenta en 30 minutos, coordinando endoscopía digestiva alta de urgencia una vez revertido el INR.'
    },
    keyPoints: [
      'La vitamina K es necesaria para la carboxilación de los factores II, VII, IX y X, y de las proteínas C y S.',
      'El Factor V mide función sintética hepática directa y es independiente de vitamina K (diferencia daño hepático de déficit de vit K).',
      'INR entre 4.5 y 10 sin sangrado: suspender 1-2 dosis de acenocumarol; no requiere vitamina K de rutina.',
      'INR > 10 sin sangrado: suspender acenocumarol y administrar vitamina K1 oral a dosis bajas (2.5 a 5 mg).',
      'Hemorragia grave con riesgo vital por cumarínicos: Concentrado de Complejo Protrombínico (CCP) EV + Vitamina K 10 mg EV.',
      'El CCP de 4 factores es muy superior al Plasma Fresco Congelado: revierte el INR en 15 minutos sin sobrecarga de volumen.',
      'El antídoto específico de Dabigatrán es Idarucizumab; para Heparina No Fraccionada es el Sulfato de Protamina.'
    ],
    questions: [
      {
        stem: 'Hombre de 66 años anticoagulado con acenocumarol por una prótesis valvular mecánica mitral consulta a control rutinario. Se encuentra totalmente asintomático, sin signos de sangrado. El examen de laboratorio informa un INR de 6.2 (rango terapéutico 2.5 a 3.5). ¿Cuál es la conducta médica más apropiada?',
        opciones: [
          'A) Suspender una o dos dosis de acenocumarol y reiniciar con dosis menor ajustada',
          'B) Administrar inmediatamente 10 mg de vitamina K endovenosa en bolo rápido',
          'C) Indicar transfusión de 2 unidades de plasma fresco congelado',
          'D) Hospitalizar en unidad de cuidados intensivos para monitorización',
          'E) Administrar sulfato de protamina por vía subcutánea'
        ],
        correcta: 'A',
        explicacion: 'En un paciente anticoagulado con cumarínicos que presenta elevación asintomática del INR entre 4.5 y 10.0 sin evidencia de hemorragia activa, la conducta indicada es suspender una o dos dosis de acenocumarol, vigilar la clínica y reanudar con una dosis semanal ajustada a la baja cuando el INR descienda al rango meta. No se indica vitamina K de rutina en este rango para no inducir resistencia prolongada al anticoagulante. Perla. INR entre 4.5 y 10 asintomático se maneja simplemente suspendiendo dosis de acenocumarol.',
        recTag: 'EUNACOM 2018 · Q#22'
      },
      {
        stem: '¿Cuál de los siguientes agentes terapéuticos es el de elección para lograr la reversión más rápida y eficaz de la anticoagulación en un paciente tratado con warfarina que presenta una hemorragia intracraneal activa?',
        opciones: [
          'A) Vitamina K1 por vía oral a dosis de 10 mg',
          'B) Concentrado de Complejo Protrombínico (CCP de 4 factores) endovenoso',
          'C) Plasma fresco congelado a dosis de 10 mL/kg',
          'D) Concentrado de fibrinógeno humano purificado',
          'E) Desmopresina en infusión endovenosa continua'
        ],
        correcta: 'B',
        explicacion: 'En hemorragias graves o con riesgo vital (como la hemorragia intracraneal) causadas por antagonistas de la vitamina K, el tratamiento de elección es el Concentrado de Complejo Protrombínico (CCP de 4 factores: II, VII, IX y X). El CCP revierte el INR a valores normales en menos de 10 a 15 minutos y con un volumen mínimo de infusión (evitando sobrecarga hídrica), superando con creces al plasma fresco congelado (que tarda horas en descongelarse e infundirse). Siempre se asocia a Vitamina K EV para sostener el efecto. Perla. La reversión inmediata de urgencia de los cumarínicos es con Concentrado de Complejo Protrombínico (CCP).',
        recTag: 'EUNACOM 2021 · Q#14'
      }
    ]
  },
  {
    id: 'hem-15',
    classId: 'hem-15',
    tier: 2,
    blockNum: 3,
    blockName: 'Hemostasia Primaria, Plaquetas y Coagulopatías',
    topicLabel: '8.15',
    title: 'Coagulación Intravascular Diseminada (CID): Criterios ISTH, Sepsis/Obstetricia y Manejo',
    perfilCode: '1.08.2.001',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'No GES directo · Emergencia Vital en Paciente Crítico en UPC',
    reconstrucciones: 'EUNACOM Julio 2019 (Q#26) · EUNACOM Julio 2022 (Q#40)',
    frecuencia: 'Muy Alta · Paradoja trombosis microvascular con coagulopatía de consumo, criterios ISTH y fibrinógeno',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Terapéutico de la CID Aguda en UPC',
    diagram: flow('Algoritmo de Coagulación Intravascular Diseminada (CID)', [
      { t: 'Paciente Crítico Séptico, Politraumatizado u Obstétrico con Sangrado Multisitio', s: 'Sospecha de CID: Sangrado en sitios de punción venosa, mucosas y heridas quirúrgicas' },
      { k: 'split', q: 'Score Diagnóstico de la Sociedad Internacional de Trombosis y Hemostasia (ISTH)', s: 'Plaquetas (<100k: 1p, <50k: 2p), TP prolongado (>3s: 1p, >6s: 2p), Fibrinógeno (<100: 1p), Dímero D muy alto (2-3p)', ll: 'Puntaje ISTH ≥ 5 Puntos (CID Manifiesta)', rl: 'Puntaje ISTH < 5 Puntos (No Manifiesta)',
        left: { t: 'Confirmación Diagnóstica: CID Descompensada', s: 'Consumo masivo de factores de coagulación y plaquetas con hiperfibrinólisis secundaria', type: 'acc' },
        right: { t: 'CID No Manifiesta / Fases Iniciales', s: 'Repetir perfil de coagulación seriado cada 12 a 24 horas y tratar el cuadro desencadenante de base', type: 'warn' },
        ll: 'cid manifiesta', rl: 'monitoreo seriado' },
      { t: 'Pilar Terapéutico Rector Absoluto e Inapelable', s: 'Tratamiento agresivo de la CAUSA SUBYACENTE (control del foco séptico, vaciamiento uterino, antibióticos)', type: 'crit', al: 'tratar causa', from: 'left' },
      { t: 'Soporte Transfusional Dirigido por Laboratorio', s: 'Crioprecipitado si Fibrinógeno < 100-150 mg/dL + Plasma Fresco si TP/TTPK > 1.5 veces + Plaquetas si < 20.000-50.000', type: 'dec', al: 'soporte hemocomponentes', from: 'left' }
    ]),
    contexto: 'La Coagulación Intravascular Diseminada (CID) no es una enfermedad hematológica primaria, sino un síndrome patológico sistémico adquirido caracterizado por la activación desenfrenada de la coagulación que genera trombosis microvascular difusa multiorgánica (falla renal, hepática, respiratoria) y, simultáneamente, un agotamiento catastrófico de plaquetas y factores de coagulación con sangrado incoercible (coagulopatía de consumo). El EUNACOM evalúa: 1) Los contextos etiológicos clásicos (sepsis por bacilos gramnegativos, desprendimiento prematuro de placenta, leucemia promielocítica aguda M3); 2) El perfil de laboratorio unánimemente alterado (TP y TTPK prolongados, plaquetas bajas, fibrinógeno colapsado y dímero D elevadísimo); y 3) Que la base del tratamiento es resolver la causa de fondo.',
    contentSections: [
      {
        subhead: '1. Fisiopatología: La Doble Paradoja de Trombosis y Hemorragia Masiva',
        paragraphs: [
          'La CID se inicia por la liberación masiva a la circulación sistémica de Factor Tisular (FT) o sustancias tromboplásticas inducidas por endotoxinas bacterianas (lipopolisacárido de gramnegativos), citocinas inflamatorias (TNF, IL-1, IL-6), daño tisular masivo (traumatismos severos, quemaduras extensas) o complicaciones obstétricas (abruptio placentae, embolia de líquido amniótico, sepsis puerperal).',
          'El factor tisular circulante se une al factor VIIa activando de forma incontrolada la generación de trombina en todo el lecho vascular. Esta trombina sistémica convierte masivamente el fibrinógeno en fibrina, depositando microtrombos de fibrina en capilares y arteriolas de riñón, cerebro, hígado y pulmones, induciendo hipoperfusión tisular, necrosis isquémica y falla multiorgánica (FOM). Paralelamente, los mecanismos anticoagulantes naturales claudican: la antitrombina se agota por consumo y el sistema de proteína C se bloquea por lesión endotelial.',
          'La segunda fase paradójica es la Coagulopatía de Consumo e Hiperfibrinólisis: la formación indiscriminada de microtrombos consume la totalidad de las reservas plaquetarias y de los factores de coagulación procoagulantes (factores I, II, V y VIII). De forma reactiva, el endotelio libera activador tisular del plasminógeno (t-PA), desencadenando una fibrinólisis secundaria intensa que degrada la fibrina y genera Productos de Degradación de la Fibrina (PDF) y Dímero D a concentraciones gigantescas. Los PDF interfieren a su vez con la agregación plaquetaria, culminando en un cuadro hemorrágico incoercible por todos los orificios corporales.'
        ]
      },
      {
        subhead: '2. Laboratorio Diagnóstico y Criterios de la ISTH',
        paragraphs: [
          'A diferencia de las demás coagulopatías donde solo una prueba suele estar alterada, la CID descompensada presenta un "colapso simultáneo" de todo el laboratorio hemostático: 1) Trombocitopenia progresiva y severa (< 50.000 a 100.000/uL); 2) Tiempo de Protrombina (TP) marcadamente prolongado (INR > 1.5-2.0); 3) Tiempo de Tromboplastina Parcial Activada (TTPK) marcadamente prolongado; 4) Fibrinógeno plasmático colapsado (< 100 mg/dL; recordar que como el fibrinógeno es un reactante de fase aguda, un valor "normal" de 200 mg/dL en un paciente con sepsis grave ya es patológico y traduce consumo activo); y 5) Marcadores de degradación de fibrina (Dímero D y PDF) marcadamente elevados.',
          'El score de la ISTH (International Society on Thrombosis and Haemostasis) suma puntos según el grado de alteración: un puntaje ≥ 5 define con alta sensibilidad y especificidad una CID Manifiesta descompensada.'
        ]
      },
      {
        subhead: '3. Manejo Terapéutico en UPC: Causa de Base y Hemocomponentes',
        paragraphs: [
          'Regla de oro de supervivencia: el tratamiento de la CID es el TRATAMIENTO URGENTE DE LA CAUSA DESENCADENANTE. Si la causa es una sepsis, se requiere control quirúrgico del foco y antibioticoterapia inmediata; si es un abruptio placentae o atonía uterina, vaciamiento o cesárea de emergencia; si es una leucemia promielocítica aguda, ácido holo-trans-retinoico (ATRA) inmediato.',
          'La terapia con hemocomponentes se reserva estrictamente para pacientes con sangrado activo o que requieran procedimientos invasivos inmediatos (no se corrigen números en pacientes estables): 1) Concentrados de Plaquetas: meta > 50.000/uL si hay sangrado activo (o > 20.000/uL si no sangra); 2) Plasma Fresco Congelado (PFC, 15-20 mL/kg): aporta todos los factores de coagulación si el TP/TTPK están prolongados más de 1.5 veces; 3) Crioprecipitado: es el hemoderivado de elección para reponer Fibrinógeno cuando este se encuentra por debajo de 100 a 150 mg/dL (cada bolsa de crio aporta 200-250 mg de fibrinógeno en escaso volumen); y 4) La heparina está formalmente contraindicada si predomina el sangrado; solo se contempla en CID crónica con predominio trombótico franco (ej. neoplasias sólidas metastásicas avanzadas).'
        ]
      }
    ],
    table: {
      title: 'Score Diagnóstico de CID Manifiesta de la ISTH (Puntaje ≥ 5 confirma CID)',
      headers: ['Parámetro Analítico Evaluado', 'Puntaje Asignado (Score ISTH)', 'Significado en la Fisiopatología'],
      rows: [
        ['Recuento de Plaquetas', '> 100.000: 0 pts | 50.000-100.000: 1 pt | < 50.000: 2 pts', 'Grado de consumo plaquetario periférico en microtrombos'],
        ['Dímero D / PDF', 'Normal: 0 pts | Elevación moderada: 2 pts | Elevación severa: 3 pts', 'Intensidad de la fibrinólisis reactiva por plasmina'],
        ['Tiempo de Protrombina (TP)', 'Prolongación < 3 seg: 0 pts | 3 a 6 seg: 1 pt | > 6 seg: 2 pts', 'Consumo de factores de coagulación de vía extrínseca/común'],
        ['Concentración de Fibrinógeno', '> 100 mg/dL: 0 pts | < 100 mg/dL: 1 pt', 'Agotamiento del sustrato final para la formación de fibrina'],
        ['Puntaje Total ISTH', '≥ 5 Puntos = CID Manifiesta compatible', 'Indica necesidad de soporte transfusional y monitorización']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Paciente con Sepsis Grave y Sangrado Multisitio',
      text: 'Mujer de 48 años, ingresada en UCI por shock séptico de origen urinario por Escherichia coli productora de BLEE, presenta al segundo día sangrado rezumante continuo en sitios de punción venosa periférica, equimosis extensas espontáneas en tronco y hematuria franca por sonda Foley. Laboratorio de urgencia: Plaquetas 28.000/uL (previas 180.000), TP 26 segundos (INR 2.4), TTPK 68 segundos, Fibrinógeno 70 mg/dL, Dímero D > 20.000 ng/mL. En el frotis se aprecian esquistocitos 2%.',
      conducta: 'Coagulación Intravascular Diseminada (CID) aguda descompensada secundaria a shock séptico bacteriano (score ISTH = 2+3+2+1 = 8 puntos). Se debe optimizar el soporte hemodinámico y la cobertura antibiótica con carbapenémicos, e indicar de inmediato soporte transfusional dirigido: crioprecipitados (1 pool de 10 unidades) para elevar el fibrinógeno > 150 mg/dL, plasma fresco congelado (15 mL/kg) para corregir el TP y transfusión de aféresis plaquetaria para situar plaquetas > 50.000/uL.'
    },
    keyPoints: [
      'La CID es un síndrome adquirido de activación masiva de trombina que asocia microtrombosis con hemorragia por consumo.',
      'Causas clásicas: shock séptico (gramnegativos), emergencias obstétricas (abruptio) y politraumatismos graves.',
      'Laboratorio clásico de CID: plaquetas bajas + TP y TTPK prolongados + fibrinógeno colapsado (<100) + Dímero D altísimo.',
      'Score ISTH ≥ 5 puntos confirma el diagnóstico de CID manifiesta descompensada.',
      'El tratamiento fundamental de la CID es tratar y erradicar la causa desencadenante de base.',
      'El hemoderivado de elección para corregir el fibrinógeno bajo (< 100-150 mg/dL) es el Crioprecipitado.',
      'El Plasma Fresco Congelado (PFC) se indica para reponer factores de coagulación cuando el TP o TTPK superan 1.5 veces lo normal.'
    ],
    questions: [
      {
        stem: 'Paciente de 52 años hospitalizado en UCI por neumonía grave por Pseudomonas aeruginosa presenta sangrado profuso en sitios de punción venosa y hematuria. El laboratorio muestra: plaquetas 32.000/uL, TP de 24 segundos (INR 2.1), TTPK de 65 segundos, fibrinógeno de 60 mg/dL y dímero D intensamente positivo (> 10.000 ng/mL). ¿Cuál es el diagnóstico más probable?',
        opciones: [
          'A) Púrpura trombocitopénica inmune aguda',
          'B) Coagulación intravascular diseminada',
          'C) Insuficiencia hepática aguda fulminante pura',
          'D) Púrpura trombocitopénica trombótica',
          'E) Hemofilia A adquirida por autoanticuerpos'
        ],
        correcta: 'B',
        explicacion: 'La presencia de una coagulopatía de consumo con trombocitopenia severa, prolongación simultánea del TP y TTPK, colapso del fibrinógeno (<100 mg/dL) y elevación masiva del dímero D en un paciente con sepsis grave confirma el diagnóstico de Coagulación Intravascular Diseminada (CID aguda descompensada). En la PTT o PTI las pruebas de coagulación plasmática (TP y TTPK) son normales. Perla. Sepsis + sangrado multisitio + TP alto + TTPK alto + plaquetas bajas + fibrinógeno bajo = CID.',
        recTag: 'EUNACOM 2019 · Q#26'
      },
      {
        stem: 'En un paciente cursando con una coagulación intravascular diseminada (CID) activa con manifestaciones hemorrágicas graves y nivel de fibrinógeno plasmático de 50 mg/dL, ¿cuál es el hemocomponente de primera elección para restituir con mayor rapidez y eficiencia los niveles de fibrinógeno?',
        opciones: [
          'A) Concentrados de glóbulos rojos desleucocitados',
          'B) Plasma fresco congelado a dosis bajas',
          'C) Crioprecipitado',
          'D) Concentrados de plaquetas obtenidos por aféresis',
          'E) Albúmina humana al 20%'
        ],
        correcta: 'C',
        explicacion: 'El Crioprecipitado es una fracción proteica concentrada que se obtiene al descongelar plasma fresco congelado a 4 °C; contiene altas concentraciones de fibrinógeno (aproximadamente 200 a 250 mg por unidad), factor VIII, factor von Willebrand y factor XIII en un volumen muy reducido (15 a 20 mL por bolsa). Es el hemoderivado de elección universal para reponer de forma rápida y segura el fibrinógeno cuando este se encuentra por debajo de 100 a 150 mg/dL en pacientes con CID o hemorragia masiva, evitando la sobrecarga hídrica del plasma fresco. Perla. El crioprecipitado es el tratamiento de elección para reponer fibrinógeno en la CID.',
        recTag: 'EUNACOM 2022 · Q#40'
      }
    ]
  }
];

module.exports = {
  bloque3
};
