const { flow } = require('./dataset_hematologia_bloque_1.cjs');

const bloque4 = [
  {
    id: 'hem-16',
    classId: 'hem-16',
    tier: 3,
    blockNum: 4,
    blockName: 'Oncohematología: Neoplasias Mieloides y Linfoides',
    topicLabel: '8.16',
    title: 'Leucemias Agudas: Mieloide Aguda (LMA) y Linfoblástica Aguda (LLA): Blastos >20%, Bastones de Auer y Trasplante',
    perfilCode: '1.08.1.009',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES N° 37 y N° 8): Leucemias en personas de 15 años y más / Menores de 15 años',
    reconstrucciones: 'EUNACOM Julio 2017 (Q#20) · EUNACOM Diciembre 2019 (Q#12) · EUNACOM Julio 2021 (Q#33) · EUNACOM Enero 2024 (Q#05)',
    frecuencia: 'Máxima · Presencia de blastos en sangre periférica, punción medular urgente, subtipo M3 con promielocitos y CID',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Terapéutico de las Leucemias Agudas (LMA y LLA)',
    diagram: flow('Algoritmo de Leucemias Agudas: LMA vs LLA (GES)', [
      { t: 'Paciente con Insuficiencia Medular Aguda: Anemia + Neutropenia Febril + Sangrado Trombocitopénico', s: 'Hemograma: Leucocitosis o leucopenia con presencia de Blastos indiferenciados en frotis' },
      { k: 'split', q: 'Inmunofenotipo por Citometría de Flujo y Mieloperoxidasa (MPO)', s: 'Define la estirpe clonal neoplásica mieloide vs linfoide', ll: 'Mieloperoxidasa (+) / Bastones de Auer / CD13-CD33', rl: 'Mieloperoxidasa (-) / TdT (+) / CD10-CD19 / CD3',
        left: { t: 'Leucemia Mieloide Aguda (LMA)', s: 'Adultos mayores (>65 a) · Si t(15;17) es Leucemia Promielocítica M3 -> ¡Tratar con ATRA urgente por riesgo de CID!', type: 'acc' },
        right: { t: 'Leucemia Linfoblástica Aguda (LLA)', s: 'Cáncer infantil más común (pico 2-5 a) · Compromiso SNC y testicular · Quimioterapia protocolo PINDA / GES', type: 'warn' },
        ll: 'estirpe mieloide', rl: 'estirpe linfoide' },
      { t: 'Criterio Diagnóstico Rector de Certeza (OMS)', s: 'Mielograma / Biopsia de Médula Ósea demostrando ≥ 20% de blastos sobre el total celular nucleado', type: 'crit', al: 'criterio 20% blastos', from: 'left' },
      { t: 'Derivación Inmediata con Cobertura GES', s: 'Hospitalización inmediata en aislamiento protector + Soporte transfusional desleucocitado + Quimioterapia de inducción', type: 'dec', al: 'urgencia oncohematológica', from: 'right' }
    ]),
    contexto: 'Las leucemias agudas representan una proliferación clonal descontrolada y maligna de células progenitoras hematopoyéticas inmaduras (blastos) que invaden la médula ósea, desplazando a la hematopoyesis normal y diseminándose a sangre y tejidos. El EUNACOM interroga: 1) La clínica de insuficiencia medular aguda (anemia severa, neutropenia con infecciones graves y trombocitopenia purpúrica); 2) El punto de corte rector de la OMS: ≥ 20% de blastos en médula ósea o sangre periférica; 3) La presencia de Bastones de Auer como patognomónica de LMA; 4) La Leucemia Promielocítica Aguda (LMA-M3) con translocación t(15;17) y su emergencia hemorrágica por CID que requiere Ácido Todo-Trans-Retinoico (ATRA) de inmediato; y 5) La LLA como la neoplasia más común de la infancia, cubierta por GES.',
    contentSections: [
      {
        subhead: '1. Fisiopatología: Bloqueo Madurativo e Insuficiencia Medular Aguda',
        paragraphs: [
          'Las leucemias agudas se caracterizan por una detención o "bloqueo madurativo" en estadios tempranos de la diferenciación hematopoyética, asociado a una sobreexpresión de señales de proliferación y resistencia a la apoptosis celular. Como consecuencia, los blastos inmaduros se acumulan aceleradamente en el espacio medular trabecular, colapsando y suprimiendo mecánicamente y mediante citocinas inhibitorias la producción normal de eritrocitos, neutrófilos maduros y megacariocitos.',
          'Esta claudicación hematopoyética global desencadena el Síndrome de Insuficiencia Medular Aguda de presentación subaguda (semanas): 1) Síndrome anémico severo (astenia, taquicardia, palidez); 2) Síndrome infeccioso (fiebre persistente, neutropenia profunda con infecciones bacterianas invasivas o micóticas); y 3) Síndrome hemorrágico (petequias, equimosis, gingivorragia y epistaxis secundaria a trombocitopenia < 20.000/uL).',
          'Además, los blastos invaden órganos extramedulares, generando dolores óseos intensos nocturnos por expansión del periostio (muy frecuente en niños con LLA), hepatoesplenomegalia, linfoadenopatías cervicales e infiltración gingival hiperplásica (típica del subtipo mielomonocítico M4/M5 de la LMA).'
        ]
      },
      {
        subhead: '2. Clasificación OMS, Citoquímica y Marcadores Inmunofenotípicos',
        paragraphs: [
          'La Organización Mundial de la Salud (OMS) establece que el diagnóstico definitivo de leucemia aguda requiere documentar al menos un 20% de blastos en el aspirado de médula ósea o en sangre periférica (existen excepciones genéticas donde la presencia de t(8;21), inv(16) o t(15;17) sella el diagnóstico de LMA independiente del porcentaje de blastos).',
          'Para diferenciar la estirpe mieloide de la linfoide se utilizan la morfología, citoquímica y citometría de flujo: 1) Leucemia Mieloide Aguda (LMA): los mieloblastos son células grandes con abundante citoplasma, cromatina laxa y gránulos azurófilos. El hallazgo de Bastones de Auer (estructuras cristalinas lineales compuestas de lisosomas fusionados y peroxidasa) es PATOGNOMÓNICO de la LMA y descarta por completo una LLA. Son positivos para Mieloperoxidasa (MPO) y Sudán Negro, expresando antígenos mieloides en citometría: CD13, CD33, CD117 y MPO; y 2) Leucemia Linfoblástica Aguda (LLA): los linfoblastos tienen citoplasma escaso sin gránulos azurófilos y son MPO-negativos. Expresan la enzima nuclear Deoxinucleotidil Transferasa Terminal (TdT) en el 95% de los casos. La LLA de estirpe B expresa CD19, CD20, CD22 y el antígeno CALLA (CD10), mientras que la LLA de estirpe T expresa CD3 y CD7.'
        ]
      },
      {
        subhead: '3. La Emergencia Vital de la Leucemia Promielocítica Aguda (LMA-M3) y el ATRA',
        paragraphs: [
          'El subtipo M3 de la clasificación FAB corresponde a la Leucemia Promielocítica Aguda (LPA), caracterizada a nivel citogenético por la translocación balanceada t(15;17)(q22;q12), la cual genera el gen de fusión oncogénico PML-RARA. Esta proteína anómala bloquea la transcripción de genes necesarios para que los promielocitos maduren.',
          'Los promielocitos neoplásicos acumulan granates masivos de gránulos con procoagulantes tisulares y anexina II. Al lisarse espontáneamente, liberan estas sustancias a la circulación, desencadenando una Coagulación Intravascular Diseminada (CID) hiperfibrinolítica fulminante con hemorragias catastróficas del sistema nervioso central o pulmonares que causan la muerte en pocas horas si no se actúa.',
          'Conducta de emergencia vital de alta frecuencia en el EUNACOM: ante la simple sospecha clínica y morfológica de leucemia promielocítica aguda (blastos con abundantes paquetes de bastones de Auer o "células de Faggot" en sangre periférica asociada a sangrado y coagulopatía de consumo con fibrinógeno bajo), debe iniciarse INMEDIATAMENTE tratamiento con Ácido Todo-Trans-Retinoico (ATRA o tretinoína oral) asociado a Trióxido de Arsénico (ATO) o quimioterapia con antraciclinas, SIN ESPERAR la confirmación citogenética por PCR o FISH. El ATRA supera el bloqueo de PML-RARA forzando a los promielocitos a diferenciarse a neutrófilos maduros, frenando la liberación de procoagulantes y resolviendo la CID en 48 a 72 horas.'
        ]
      },
      {
        subhead: '4. Cuadro Comparativo: Epidemiología, Pronóstico y Tratamiento',
        paragraphs: [
          'La LLA es la neoplasia maligna más común en pediatría, representando el 80% de las leucemias infantiles con un pico máximo entre los 2 y 5 años de edad. En Chile, bajo el protocolo nacional PINDA / GES N° 8, la sobrevida libre de enfermedad a 5 años supera el 85-90% de los niños. Requiere quimioterapia intensiva con profilaxis intratecal obligatoria de SNC (metotrexato, citarabina y dexametasona intratecal) debido a que los linfoblastos infiltran precozmente las meninges y los testículos, santuarios anatómicos inaccesibles para la quimioterapia sistémica clásica.',
          'Por su parte, la LMA es la leucemia aguda predominante en adultos mayores (edad mediana al diagnóstico: 68 años). Su tratamiento se inicia con el esquema clásico "7+3" (citarabina en infusión continua por 7 días más daunorrubicina por 3 días). En pacientes menores de 60 años con citogenética de alto riesgo o refractariedad, el tratamiento curativo definitivo de consolidación es el Trasplante Alogénico de Células Progenitoras Hematopoyéticas.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial Clínico y Biológico: LMA vs LLA',
      headers: ['Característica', 'Leucemia Mieloide Aguda (LMA)', 'Leucemia Linfoblástica Aguda (LLA)'],
      rows: [
        ['Población Predominante', 'Adultos mayores (mediana 68 años); 20% en niños', 'Pediátrica (pico 2 a 5 años); 20% en adultos'],
        ['Morfología de Blastos', 'Células grandes, citoplasma amplio, gránulos azurófilos', 'Células medianas, citoplasma escaso, sin gránulos'],
        ['Bastones de Auer', 'PRESENTES (Patognomónicos de LMA)', 'AUSENTES en el 100% de los casos'],
        ['Citoquímica Enzimática', 'Mieloperoxidasa (MPO) POSITIVA, Sudán Negro (+)', 'MPO NEGATIVA; TdT POSITIVA en >95%'],
        ['Inmunofenotipo Citometría', 'CD13 (+), CD33 (+), CD117 (+), MPO (+)', 'Estirpe B: CD19, CD10, CD22 | Estirpe T: CD3, CD7'],
        ['Infiltración Tisular Clásica', 'Hiperplasia gingival, cloromas cutáneos (M4/M5)', 'Sistema nervioso central (meninges) y testículos'],
        ['Emergencia Específica', 'LMA-M3: CID catastrófica -> Tratar con ATRA urgente', 'Síndrome de lisis tumoral agudo al iniciar quimio'],
        ['Pronóstico Curativo Global', '30% a 40% de sobrevida en adultos; peor en ancianos', '> 85% a 90% de curación en niños (GES N° 8)']
      ]
    },
    severityTable: {
      title: 'Clasificación Pronóstica Citogenética y Molecular en LMA (ELN 2022)',
      headers: ['Grupo de Riesgo ELN', 'Alteraciones Genéticas Cardinales', 'Tasa de Remisión Completa', 'Estrategia Terapéutica Postinducción'],
      rows: [
        ['Favorable', 't(8;21), inv(16), mutación NPM1 sin FLT3-ITD', '> 80% - 90%', 'Consolidación con quimioterapia (Citarabina altas dosis); no requiere trasplante en 1ª RC'],
        ['Intermedio', 'Citogenética normal con NPM1 silvestre, mutaciones FLT3', '60% - 70%', 'Evaluar según respuesta a inducción y donante para Trasplante Alogénico'],
        ['Adverso (Alto Riesgo)', 'Cariotipo complejo (≥3 anomalías), monosomías, TP53 mutado', '< 40% - 50%', 'Trasplante Alogénico de Médula Ósea mandatorio en primera remisión completa'],
        ['Subtipo M3 (Promielocítica)', 't(15;17)(q22;q12) -> Gen de fusión PML-RARA', '> 90% - 95% de curación', 'ATRA + Trióxido de Arsénico (ATO); régimen libre de quimioterapia estándar']
      ]
    },
    treatmentTable: {
      title: 'Fases Terapéuticas de las Leucemias Agudas en Protocolos GES Nacionales',
      headers: ['Fase del Tratamiento', 'Esquema y Medicamentos', 'Objetivo Primario', 'Consideración de Manejo'],
      rows: [
        ['Fase de Inducción LMA', 'Esquema "7+3": Citarabina EV x 7 d + Daunorrubicina EV x 3 d', 'Destruir > 99% de blastos y lograr Remisión Completa', 'Aplasia profunda de 3 a 4 semanas; requiere soporte intensivo'],
        ['Inducción LMA-M3', 'ATRA (Ácido todo-trans-retinoico) oral + Trióxido de arsénico', 'Diferenciación de promielocitos y cese de la CID', 'Vigilar Síndrome de Diferenciación (tratar con Dexametasona)'],
        ['Inducción LLA Infantil', 'Vincristina + Dexametasona + L-asparaginasa + Daunorrubicina', 'Erradicación de blastos linfoides medulares', 'Manejo protocolizado PINDA GES N° 8'],
        ['Profilaxis de SNC en LLA', 'Punciones lumbares con triple quimioterapia intratecal', 'Esterilizar el santuario meníngeo para evitar recidivas', 'Metotrexato + Citarabina + Dexametasona intratecal'],
        ['Terapia de Consolidación', 'Trasplante Alogénico de Médula Ósea (Alo-TPH)', 'Efecto injerto contra leucemia curativo definitivo', 'En pacientes con riesgo intermedio/alto y donante HLA']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Paciente Joven con Sangrado Gingival y Blastos en Sangre',
      text: 'Mujer de 24 años, sin antecedentes mórbidos, es derivada de urgencia por astenia severa de 2 semanas, fiebre de 38.3 °C y sangrado gingival espontáneo profuso asociado a equimosis en extremidades. Al examen: palidez cérea, petequias en paladar y extremidades, sin adenopatías ni visceromegalias. Laboratorio: Hb 6.9 g/dL, Leucocitos 32.000/uL con 65% de blastos grandes con gránulos citoplasmáticos y múltiples Bastones de Auer visibles, Plaquetas 16.000/uL. Pruebas de coagulación: TP 18 seg (INR 1.8), TTPK 45 seg, Fibrinógeno 85 mg/dL, Dímero D > 15.000 ng/mL.',
      conducta: 'Leucemia Promielocítica Aguda (LMA-M3) complicada con Coagulación Intravascular Diseminada (CID) grave por consumo. La presencia de múltiples bastones de Auer (células de Faggot) y CID es una emergencia hematológica vital. Se debe iniciar INMEDIATAMENTE tratamiento con Ácido Todo-Trans-Retinoico (ATRA) por vía oral sin esperar citogenética ni biología molecular, asociar soporte de fibrinógeno con crioprecipitado para mantener > 150 mg/dL y transfundir plaquetas para situar > 50.000/uL, hospitalizando en UCI hemato-oncológica.'
    },
    keyPoints: [
      'Criterio rector de leucemia aguda según la OMS: presencia de ≥ 20% de blastos en médula ósea o sangre.',
      'Los Bastones de Auer son patognomónicos de Leucemia Mieloide Aguda (LMA) y jamás se observan en LLA.',
      'La LMA es la leucemia aguda del adulto; la LLA es la neoplasia maligna más común en pediatría (>85% curación).',
      'La Leucemia Promielocítica Aguda (LMA-M3) cursa con t(15;17) y CID catastrófica que requiere ATRA urgente.',
      'La LLA invade precozmente santuarios anatómicos (meninges y testículos), requiriendo quimioterapia intratecal profiláctica.',
      'La presencia de blastos en sangre periférica exige mielograma y biopsia osteomedular urgente en centro terciario.',
      'El tratamiento definitivo curativo en LMA de riesgo intermedio o adverso es el Trasplante Alogénico de Médula Ósea.',
      'En Chile las leucemias agudas en todas las edades están cubiertas integralmente por las garantías GES N° 8 y N° 37.'
    ],
    questions: [
      {
        stem: 'Hombre de 62 años consulta por astenia progresiva, fiebre de 38.5 °C y epistaxis. El hemograma muestra Hb 7.8 g/dL, plaquetas 22.000/uL y leucocitos 45.000/uL. En el frotis sanguíneo se observa un 40% de células blásticas indiferenciadas con inclusiones citoplasmáticas lineales en forma de agujas azurófilas (bastones de Auer). ¿Cuál es el diagnóstico de certeza?',
        opciones: [
          'A) Leucemia Linfoblástica Aguda de precursores B',
          'B) Leucemia Mieloide Aguda',
          'C) Leucemia Mieloide Crónica en fase acelerada',
          'D) Mononucleosis infecciosa con linfocitosis atípica',
          'E) Linfoma no Hodgkin leucemizado'
        ],
        correcta: 'B',
        explicacion: 'La presencia de más del 20% de blastos en sangre periférica confirma una leucemia aguda. El hallazgo citológico de bastones de Auer (acúmulos lineales cristalizados de gránulos peroxidasa-positivos) es patognomónico e inequívoco de estirpe mieloide, sellando el diagnóstico de Leucemia Mieloide Aguda (LMA). En la LLA los blastos carecen de gránulos azurófilos y jamás presentan bastones de Auer. Perla. Bastones de Auer = Leucemia Mieloide Aguda.',
        recTag: 'EUNACOM 2017 · Q#20'
      },
      {
        stem: 'Una mujer de 28 años ingresa por hematomas espontáneos, sangrado en mucosas y fiebre. En sus exámenes destaca leucocitosis con blastos con abundantes gránulos y paquetes de bastones de Auer. El perfil de coagulación muestra TP prolongado, TTPK prolongado, fibrinógeno de 70 mg/dL y dímero D marcadamente elevado. ¿Cuál es la terapia farmacológica específica de emergencia que debe iniciarse de inmediato para frenar esta coagulopatía?',
        opciones: [
          'A) Imatinib por vía oral',
          'B) Ácido todo-trans-retinoico (ATRA) por vía oral',
          'C) Rituximab endovenoso',
          'D) Heparina no fraccionada en infusión continua',
          'E) Factor VII activado recombinante'
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a una Leucemia Promielocítica Aguda (LMA-M3), que cursa clásicamente con CID descompensada hiperfibrinolítica debida a la liberación de sustancias procoagulantes por los promielocitos leucémicos. El tratamiento de urgencia indiscutible que revierte la coagulopatía y salva la vida de la paciente es el Ácido Todo-Trans-Retinoico (ATRA o tretinoína), que fuerza la diferenciación celular de los promielocitos atípicos deteniendo la liberación de tromboplastina. Perla. Leucemia promielocítica aguda con CID se trata de inmediato con ATRA.',
        recTag: 'EUNACOM 2019 · Q#12'
      },
      {
        stem: '¿Cuál es el porcentaje mínimo de blastos en médula ósea o sangre periférica exigido por la Organización Mundial de la Salud (OMS) para establecer formalmente el diagnóstico de Leucemia Aguda?',
        opciones: [
          'A) Mayor o igual al 5%',
          'B) Mayor o igual al 10%',
          'C) Mayor o igual al 20%',
          'D) Mayor o igual al 30%',
          'E) Mayor o igual al 50%'
        ],
        correcta: 'C',
        explicacion: 'El consenso internacional de la clasificación de la OMS establece que la presencia de un 20% o más de blastos en el aspirado de médula ósea o en sangre periférica define formalmente el diagnóstico de Leucemia Aguda (tanto LMA como LLA). Por debajo del 20% de blastos medulares se clasifica como Síndrome Mielodisplásico (salvo que existan anomalías citogenéticas específicas de LMA como t(8;21), inv(16) o t(15;17)). Perla. Punto de corte OMS para leucemia aguda: ≥ 20% de blastos.',
        recTag: 'EUNACOM 2021 · Q#33'
      },
      {
        stem: 'Niño de 4 años consulta por fiebre persistente de 3 semanas, palidez cutánea y dolor osteoarticular difuso que le impide caminar. Al examen se palpan múltiples adenopatías cervicales e inguinales indoloras y esplenomegalia a 3 cm bajo el reborde costal. El hemograma muestra pancitopenia con 35% de blastos de aspecto linfoide, negativos para mieloperoxidasa y positivos para TdT y CD19. ¿Cuál es el diagnóstico más probable?',
        opciones: [
          'A) Artritis idiopática juvenil sistémica',
          'B) Leucemia Linfoblástica Aguda de células B',
          'C) Mononucleosis infecciosa complicada',
          'D) Aplasia medular idiopática severa',
          'E) Neuroblastoma metastásico estadio IV'
        ],
        correcta: 'B',
        explicacion: 'La presentación con fiebre, insuficiencia medular, dolores óseos por invasión medular, adenopatías y esplenomegalia en un niño de edad preescolar (pico 2 a 5 años) con blastos MPO-negativos pero con marcadores nucleares (TdT+) y de estirpe B (CD19+) es la clínica clásica de la Leucemia Linfoblástica Aguda (LLA) de células B, el cáncer más común de la infancia. Perla. Niño pequeño con fiebre, dolor óseo, visceromegalia y blastos MPO(-)/TdT(+) = Leucemia Linfoblástica Aguda.',
        recTag: 'EUNACOM 2024 · Q#05'
      }
    ]
  },
  {
    id: 'hem-17',
    classId: 'hem-17',
    tier: 2,
    blockNum: 4,
    blockName: 'Oncohematología: Neoplasias Mieloides y Linfoides',
    topicLabel: '8.17',
    title: 'Leucemias Crónicas: Leucemia Mieloide Crónica (LMC, BCR-ABL) vs Leucemia Linfática Crónica (LLC)',
    perfilCode: '1.08.1.010',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES N° 37): Leucemia en personas de 15 años y más (LMC)',
    reconstrucciones: 'EUNACOM Diciembre 2018 (Q#31) · EUNACOM Julio 2021 (Q#25)',
    frecuencia: 'Alta · Cromosoma Filadelfia t(9;22), Imatinib (TKI), sombras de Gümprecht en LLC asintomática',
    svg: null, algoTitle: 'Diagnóstico Diferencial y Manejo de las Leucemias Crónicas',
    diagram: flow('Algoritmo de Leucemias Crónicas: LMC vs LLC', [
      { t: 'Leucocitosis Extrema Asintomática en Chequeo Rutinario (> 30.000 a 100.000/uL)', s: 'Adulto asintomático o con astenia leve · Frotis de sangre periférica define la línea celular predominante' },
      { k: 'split', q: 'Frotis Periférico: ¿Precursores Granulocíticos o Linfocitosis Monótona?', s: 'Diferencia estirpe mieloide con todas las etapas madurativas de estirpe linfoide madura', ll: 'Toda la Serie Granulocítica (Mielocitos, Metas) + Basofilia', rl: 'Linfocitosis Pequeña Monótona + Sombras de Gümprecht',
        left: { t: 'Leucemia Mieloide Crónica (LMC)', s: 'Esplenomegalia gigante · Cromosoma Filadelfia t(9;22) oncogén BCR-ABL1 · Terapia dirigida: Imatinib (TKI)', type: 'acc' },
        right: { t: 'Leucemia Linfática Crónica (LLC)', s: 'Adulto mayor (>70 a) · Adenopatías generalizadas indoloras · Si estadio temprano (Binet A): ¡CONDUCTA ES OBSERVACIÓN!', type: 'warn' },
        ll: 'estirpe mieloide / lmc', rl: 'estirpe linfoide / llc' },
      { t: 'Tratamiento Específico Dirigido de la LMC (GES 37)', s: 'Inhibidores de Tirosina Quinasa (ITK: Imatinib, Dasatinib, Nilotinib) orales logran sobrevida normal indefinida', type: 'dec', al: 'revolución de los itk', from: 'left' }
    ]),
    contexto: 'Las leucemias crónicas son proliferaciones clonales malignas de células sanguíneas maduras y diferenciadas que tienen una evolución indolente y prolongada. El EUNACOM compara sistemáticamente dos prototipos fundamentales: 1) La Leucemia Mieloide Crónica (LMC): marcada leucocitosis con todas las formas intermedias de granulocitos, esplenomegalia palpable masiva, presencia patognomónica del Cromosoma Filadelfia t(9;22) que codifica la proteína BCR-ABL1, y su tratamiento revolucionario con inhibidores de tirosina quinasa (Imatinib); y 2) La Leucemia Linfática Crónica (LLC): leucemia más común del anciano en occidente, caracterizada por linfocitosis B madura periférica con sombras de Gümprecht (manchas de rotura celular), donde la conducta en estadios precoces asintomáticos es estrictamente la observación expectante ("watch and wait").',
    contentSections: [
      {
        subhead: '1. Leucemia Mieloide Crónica (LMC): Biología Molecular y Cromosoma Filadelfia',
        paragraphs: [
          'La LMC es una neoplasia mieloproliferativa originada en la célula madre pluripotencial, caracterizada en el 95% de los casos por la presencia del Cromosoma Filadelfia (Ph), el cual resulta de la translocación cromosómica recíproca balanceada t(9;22)(q34;q11). En este rearreglo genético, el protooncogén ABL1 del cromosoma 9 se yuxtapone al gen BCR del cromosoma 22, codificando la proteína quimérica oncogénica BCR-ABL1 (típicamente p210).',
          'La oncoproteína BCR-ABL1 es una tirosina quinasa constitutivamente hiperactiva e independiente de ligandos externos, que fosforila continuamente múltiples vías intracelulares (JAK-STAT, PI3K-Akt, Ras-MAPK), promoviendo una proliferación clonal desenfrenada de granulocitos, inhibiendo la apoptosis y disminuyendo la adherencia celular al estroma medular, inundando la sangre periférica con toda la línea granulocítica madura e inmadura.'
        ]
      },
      {
        subhead: '2. Cuadro Clínico de la LMC y Fases Evolutivas',
        paragraphs: [
          'La LMC evoluciona clásicamente a través de tres fases: 1) Fase Crónica (85% de los diagnósticos): cursa con leucocitosis marcada (frecuentemente entre 50.000 y 300.000/uL), con presencia de todas las etapas madurativas mieloides en frotis (mielocitos, metamielocitos, baciliformes y segmentados) con < 10% de blastos. Se acompaña de basofilia y eosinofilia absoluta, anemia normocítica y trombocitosis o recuento plaquetario normal. Al examen físico destaca Esplenomegalia palpable en más del 80% de los pacientes (pudiendo ser gigante y traspasar la línea media, produciendo pesadez gástrica y saciedad precoz); 2) Fase Acelerada (blastos 10-19%, basófilos ≥ 20%, trombocitopenia o trombocitosis refractaria); y 3) Crisis Blástica (transformación a leucemia aguda con ≥ 20% de blastos medulares o periféricos, dos tercios mieloides y un tercio linfoides, de curso fulminante refractario).',
          'Terapia de elección GES N° 37: el tratamiento de primera línea universal son los Inhibidores de la Tirosina Quinasa (ITK) orales, siendo el Imatinib el fármaco pionero (o agentes de 2ª generación como Dasatinib y Nilotinib). Los ITK bloquean específicamente el bolsillo de unión de ATP de la proteína BCR-ABL1, induciendo remisión molecular profunda y otorgando una expectativa de vida idéntica a la población sana.'
        ]
      },
      {
        subhead: '3. Leucemia Linfática Crónica (LLC): Clínica, Sombras de Gümprecht y "Watch and Wait"',
        paragraphs: [
          'La LLC es una neoplasia linfoide indolente caracterizada por la acumulación monoclonal de linfocitos B maduros e inmunoincompetentes (coexpresan CD19, CD20 débil, CD23 y el marcador anómalo CD5, clásico de células T) en sangre periférica, médula ósea y ganglios linfáticos. Es la leucemia más prevalente en el adulto mayor de 70 años (muy infrecuente en menores de 40 años).',
          'El criterio diagnóstico exige una Linfocitosis clonal persistente en sangre periférica ≥ 5.000/uL durante al menos 3 meses, confirmada por citometría de flujo. En el frotis sanguíneo se observan linfocitos pequeños de apariencia madura con cromatina densa y las patognomónicas Sombras de Gümprecht (manchas nucleares frágiles desprovistas de citoplasma provocadas por la ruptura mecánica de las células leucémicas al confeccionar el frotis). Cursa con hipogammaglobulinemia progresiva (infecciones bacterianas respiratorias de repetición) y fenómenos autoinmunes paradójicos (anemia hemolítica autoinmune por anticuerpos calientes y PTI).',
          'Conducta terapéutica de examen EUNACOM: en pacientes con LLC asintomática en estadios tempranos (clasificación de Binet estadio A: solo linfocitosis con < 3 áreas ganglionares; o Rai estadio 0: linfocitosis aislada sin adenopatías ni anemia/plaquetopenia), el tratamiento precoz con quimioterapia NO prolonga la sobrevida y solo añade toxicidad. Por tanto, la conducta de elección es la OBSERVACIÓN CLÍNICA PERIÓDICA SIN TRATAMIENTO ("Watch and Wait"). El tratamiento farmacológico (con inhibidores de BTK como Ibrutinib o Acalabrutinib, o inhibidores de BCL-2 como Venetoclax) se reserva estrictamente para estadios avanzados con insuficiencia medular (Binet C / Rai III-IV con Hb < 10 o plaquetas < 100.000) o síntomas constitucionales B severos progresivos.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial: Leucemia Mieloide Crónica (LMC) vs Leucemia Linfática Crónica (LLC)',
      headers: ['Parámetro', 'Leucemia Mieloide Crónica (LMC)', 'Leucemia Linfática Crónica (LLC)'],
      rows: [
        ['Población Típica', 'Adultos de 40 a 60 años', 'Adultos mayores y ancianos (> 70 años)'],
        ['Serie Proliferante', 'Mieloide granulocítica completa (con basofilia)', 'Linfoide B madura monótona (CD19+, CD5+)'],
        ['Frotis Sanguíneo', 'Mielocitos, metamielocitos, bandas, segmentados', 'Linfocitos maduros + Sombras de Gümprecht'],
        ['Genética Marcadora', 'Cromosoma Filadelfia t(9;22) / Oncogén BCR-ABL1', 'Deleción 13q (buen pronóstico), del 17p / TP53 (mal pronóstico)'],
        ['Signo Semiológico Clave', 'Esplenomegalia gigante indolora frecuente', 'Adenopatías generalizadas bilaterales e indoloras'],
        ['Riesgo de Transformación', 'Crisis Blástica (transformación a leucemia aguda)', 'Síndrome de Richter (transformación a linfoma difuso agresivo)'],
        ['Conducta Inicial Estándar', 'Tratamiento inmediato con Imatinib (ITK) oral', 'Observación expectante ("Watch and Wait") en Binet A']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Hallazgo Incidental de Linfocitosis en Adulto Mayor',
      text: 'Hombre de 76 años, autovalente, consulta para control de su hipertensión arterial. Se encuentra asintomático, sin astenia, fiebre ni baja de peso. En el examen físico se palpan pequeños ganglios cervicales e inguinales bilaterales de 1 cm, móviles, elásticos e indoloros; no se palpa esplenomegalia. Hemograma de rutina: Hb 13.8 g/dL, Plaquetas 195.000/uL, Leucocitos 42.000/uL con 88% de linfocitos maduros (recuento absoluto de linfocitos 36.960/uL). El frotis revela abundantes manchas nucleares de rotura celular (sombras de Gümprecht). La citometría de flujo confirma población B clonal CD19+, CD5+ y CD23+.',
      conducta: 'Leucemia Linfática Crónica (LLC) en estadio temprano (Rai estadio I / Binet estadio A: linfocitosis con adenopatías sin anemia ni trombocitopenia). Dado que el paciente está completamente asintomático y con hemoglobina y plaquetas normales, la conducta médica correcta avalada por guías clínicas es la observación clínica periódica ambulatoria cada 3 a 6 meses sin indicar quimioterapia ni fármacos citostáticos ("Watch and Wait").'
    },
    keyPoints: [
      'La LMC se asocia en el 95% al Cromosoma Filadelfia t(9;22), que genera el oncogén de fusión BCR-ABL1.',
      'Frotis de LMC: toda la serie granulocítica (mielocitos, metamielocitos) con basofilia y eosinofilia característica.',
      'El tratamiento de elección en LMC son los Inhibidores de Tirosina Quinasa orales (Imatinib), garantizados en GES N° 37.',
      'La LLC es la leucemia más común del adulto mayor; se caracteriza por linfocitosis B madura clonal (CD19+/CD5+).',
      'Las Sombras de Gümprecht (manchas de lisis nuclear por fragilidad en frotis) son patognomónicas de la LLC.',
      'En LLC estadio A de Binet (asintomática sin anemia ni plaquetopenia), la conducta es estrictamente la observación ("Watch and Wait").',
      'El tratamiento en LLC se reserva para estadios avanzados con insuficiencia medular (anemia <10 g/dL o plaquetas <100.000/uL).'
    ],
    questions: [
      {
        stem: 'Hombre de 50 años consulta por pesadez en el hipocondrio izquierdo y astenia. En el examen se palpa esplenomegalia marcada que llega a 6 cm bajo el reborde costal. El hemograma muestra Hb 11.2 g/dL, plaquetas 480.000/uL y leucocitos 120.000/uL, observándose en el frotis neutrófilos segmentados, baciliformes, metamielocitos, mielocitos y basofilia franca. ¿Cuál es la alteración citogenética que define esta patología?',
        opciones: [
          'A) Translocación t(15;17)',
          'B) Translocación t(9;22)',
          'C) Translocación t(8;14)',
          'D) Deleción del brazo largo del cromosoma 5 (5q-)',
          'E) Trisomía del cromosoma 21'
        ],
        correcta: 'B',
        explicacion: 'El cuadro de leucocitosis extrema con presencia de todos los estadios madurativos granulocíticos, basofilia y esplenomegalia masiva es la presentación clásica de la Leucemia Mieloide Crónica (LMC). La alteración citogenética definitoria es el Cromosoma Filadelfia, producto de la translocación recíproca t(9;22)(q34;q11), que fusiona los genes BCR y ABL1 generando una tirosina quinasa constitutivamente activa. Perla. LMC se asocia al cromosoma Filadelfia t(9;22) y se trata con imatinib.',
        recTag: 'EUNACOM 2018 · Q#31'
      },
      {
        stem: 'Hombre de 73 años totalmente asintomático presenta en exámenes de medicina preventiva: Hb 14.1 g/dL, plaquetas 210.000/uL y leucocitos 38.000/uL con 85% de linfocitos pequeños bien diferenciados y abundantes sombras de Gümprecht en el frotis. La citometría confirma linfocitosis B monoclonal CD19+ y CD5+. Al examen físico no se palpan adenopatías ni visceromegalias. ¿Cuál es la conducta médica más apropiada?',
        opciones: [
          'A) Iniciar quimioterapia inmediata con esquema Fludarabina + Ciclofosfamida + Rituximab',
          'B) Observación clínica y hematológica periódica sin tratamiento farmacológico activo',
          'C) Indicar radioterapia esplénica fraccionada profiláctica',
          'D) Iniciar tratamiento diario con Imatinib por vía oral',
          'E) Realizar trasplante autólogo de progenitores hematopoyéticos de urgencia'
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta una Leucemia Linfática Crónica (LLC) en estadio muy temprano (Rai 0 / Binet A: linfocitosis aislada sin adenopatías, hepatoesplenomegalia, anemia ni trombocitopenia) y totalmente asintomático. Múltiples ensayos clínicos han demostrado que tratar a estos pacientes en etapas iniciales no prolonga la supervivencia y sí añade toxicidad grave. La conducta médica estándar avalada internacionalmente es la observación clínica periódica ("Watch and Wait"). Perla. LLC en estadio temprano asintomático no se trata; solo se observa.',
        recTag: 'EUNACOM 2021 · Q#25'
      }
    ]
  },
  {
    id: 'hem-18',
    classId: 'hem-18',
    tier: 3,
    blockNum: 4,
    blockName: 'Oncohematología: Neoplasias Mieloides y Linfoides',
    topicLabel: '8.18',
    title: 'Linfomas: Linfoma de Hodgkin (Reed-Sternberg, Ann Arbor, Síntomas B) vs Linfomas No Hodgkin (LDGCB y Folicular)',
    perfilCode: '1.08.1.011',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES N° 38 y N° 8): Linfomas en personas de 15 años y más / Menores de 15 años',
    reconstrucciones: 'EUNACOM Diciembre 2017 (Q#38) · EUNACOM Julio 2019 (Q#05) · EUNACOM Diciembre 2021 (Q#29) · EUNACOM Julio 2023 (Q#36)',
    frecuencia: 'Muy Alta · Biopsia escisional ganglionar obligatoria, estadios Ann Arbor, Síntomas B y esquema ABVD/R-CHOP',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Estadificación de Linfomas en Medicina Interna',
    diagram: flow('Algoritmo de Linfomas: Hodgkin vs No Hodgkin (GES N° 38)', [
      { t: 'Adenopatía Persistente (> 2-3 cm, indolora, dura, fija o gomosa, > 4-6 semanas)', s: 'Signo cardinal: Sospecha de linfoma · ¡Prohibida la PAAF para diagnóstico primario!' },
      { k: 'split', q: 'Estudio Histopatológico de Certeza Mandatorio', s: 'Exige Biopsia Escisional de Ganglio Linfático COMPLETO (Ganglio entero para arquitectura)', ll: 'Células Gigantes de Reed-Sternberg (CD30+, CD15+)', rl: 'Infiltración Monomorfa Linfoide B o T sin Reed-Sternberg',
        left: { t: 'Linfoma de Hodgkin (LH)', s: 'Adulto joven (20-30 a) o mayor (>60 a) · Diseminación contigua linfática · Esclerosis nodular más común · ABVD', type: 'acc' },
        right: { t: 'Linfomas No Hodgkin (LNH)', s: 'Linfoma Difuso de Células B Grandes (Agresivo: R-CHOP) vs Folicular t(14;18) BCL-2 (Indolente incurable)', type: 'warn' },
        ll: 'hodgkin', rl: 'no hodgkin' },
      { t: 'Etapificación de Ann Arbor y Evaluación de Síntomas B', s: 'PET-TC o TC cuello-tórax-abdomen-pelvis + Biopsia medular · Síntomas B: Fiebre >38°C, Sudoración nocturna y Baja de peso >10%', type: 'crit', al: 'etapificación ann arbor', from: 'left' }
    ]),
    contexto: 'Los linfomas son neoplasias malignas que se originan en el sistema linfoide (ganglios linfáticos, bazo, timo y tejido linfoide asociado a mucosas). El EUNACOM evalúa con extrema rigurosidad: 1) La regla de oro diagnóstica: LA BIOPSIA ESCISIONAL DEL GANGLIO ENTERO ES OBLIGATORIA (la punción aspirativa con aguja fina [PAAF] es insuficiente e inválida para clasificar linfomas porque destruye la arquitectura tisular); 2) La definición estricta de los Síntomas B constitucionales (fiebre > 38 °C, sudoración nocturna profusa y baja de peso > 10% en 6 meses); 3) El Linfoma de Hodgkin (células gigantes binucleadas de Reed-Sternberg con aspecto en "ojos de búho", diseminación por contigüidad y alta curabilidad con quimioterapia ABVD); y 4) Los Linfomas No Hodgkin (LNH difuso de células B grandes agresivo curable con R-CHOP vs linfoma folicular indolente). Cubiertos al 100% por GES N° 38.',
    contentSections: [
      {
        subhead: '1. Diagnóstico de Certeza: La Primacía de la Biopsia Escisional Ganglionar',
        paragraphs: [
          'La manifestación inicial en más del 80% de los linfomas es la aparición de una o varias linfoadenopatías periféricas indoloras, de consistencia gomosa o pétrea, no adheridas a planos profundos y de crecimiento progresivo (diámetro > 2 cm) durante más de 4 a 6 semanas sin foco infeccioso regional que las justifique. Las localizaciones más comunes son las cadenas cervicales, supraclaviculares (el ganglio de Virchow supraclavicular izquierdo siempre es neoplásico hasta demostrar lo contrario) y axilares.',
          'Regla de oro procedimental EUNACOM: el diagnóstico histopatológico de linfoma exige formalmente la realización de una Biopsia Escisional Quirúrgica del ganglio linfático completo más representativo (o biopsia con aguja gruesa tipo trucut guiada por imágenes si es inaccesible). La Punción Aspirativa con Aguja Fina (PAAF) está FORMALMENTE CONTRAINDICADA para el diagnóstico inicial de linfoma, ya que solo extrae células aisladas sin arquitectura tisular, impidiendo evaluar si el crecimiento es folicular o difuso y arriesgando falsos negativos.'
        ]
      },
      {
        subhead: '2. Definición Estricta de los Síntomas B y su Relevancia Pronóstica',
        paragraphs: [
          'La presencia de Síntomas B traduce una carga tumoral elevada con liberación sistémica masiva de citocinas inflamatorias (IL-1, IL-6, TNF-alfa). En la clasificación de Ann Arbor, la presencia de síntomas B se designa con el sufijo "B" y su ausencia con "A", confiriendo un pronóstico más adverso que exige mayor intensidad terapéutica.',
          'La tríada de Síntomas B se compone estrictamente de: 1) Fiebre inexplicada mayor a 38.0 °C, que puede ser continua, remitente o cíclica (fiebre de Pel-Ebstein: períodos de varios días con fiebre alta seguidos de períodos afebriles de igual duración, característica del Linfoma de Hodgkin); 2) Sudoración nocturna profusa (drenching sweats), que empapa la ropa de cama y obliga al paciente a cambiarse durante la noche; y 3) Pérdida de peso involuntaria mayor al 10% del peso corporal basal en los últimos 6 meses.',
          'Otros síntomas sistémicos frecuentes en el Linfoma de Hodgkin que no constituyen formalmente síntomas B pero son altamente orientadores son: el prurito generalizado rebelde sin lesiones cutáneas primarias y el Dolor en las adenopatías desencadenado por la ingesta de alcohol (signo de Hoster, patognomónico de Hodgkin).'
        ]
      },
      {
        subhead: '3. Linfoma de Hodgkin (LH): Reed-Sternberg, Subtipos y Diseminación Contigua',
        paragraphs: [
          'El Linfoma de Hodgkin representa el 10-15% de todos los linfomas y presenta una distribución epidemiológica bimodal característica: un primer pico de incidencia en adultos jóvenes (15 a 35 años) y un segundo pico en adultos mayores de 60 años. Se caracteriza anatomopatológicamente por ser una neoplasia poco habitual donde las células malignas representan menos del 1-2% del tumor, encontrándose inmersas en un rico infiltrado inflamatorio reactivo de linfocitos T, eosinófilos, células plasmáticas e histiocitos.',
          'La célula neoplásica diagnóstica es la Célula de Reed-Sternberg: célula gigante binucleada o multinucleada con núcleos en imagen especular ("ojos de búho") y nucléolos prominentes similares a cuerpos de inclusión, con inmunofenotipo clásico CD30 positivo, CD15 positivo y CD45 negativo.',
          'Se clasifica en cuatro subtipos histológicos clásicos: 1) Esclerosis Nodular (el más frecuente, 70% de los casos, predomina en mujeres jóvenes, suele comprometer el mediastino anterior y presenta células lacunares y bandas de colágeno); 2) Celularidad Mixta (20%, predomina en varones mayores y pacientes con VIH, rica en eosinófilos y fuertemente asociada al virus de Epstein-Barr); 3) Predominio Linfocítico Clásico (5%, excelente pronóstico); y 4) Depleción Linfocítica (< 5%, ancianos, muy agresivo y de mal pronóstico). El LH se disemina típicamente de forma ordenada y predecible por contigüidad linfática anatómica de un grupo ganglionar al vecino.'
        ]
      },
      {
        subhead: '4. Linfomas No Hodgkin (LNH): Agresivos vs Indolentes',
        paragraphs: [
          'Los LNH constituyen un grupo heterogéneo de más de 60 neoplasias linfoides (85-90% de origen en linfocitos B y 10-15% en linfocitos T o NK). Su incidencia aumenta exponencialmente con la edad (> 60-65 años). A diferencia del Hodgkin, su diseminación es hematógena precoz, impredecible y no contigua, con compromiso extraganglionar frecuente (tracto gastrointestinal [estómago/MALT], anillo de Waldeyer, médula ósea, piel y SNC).',
          'Clínicamente se dividen en dos grandes comportamientos biológicos: 1) LNH Agresivos (prototipo: Linfoma Difuso de Células B Grandes - LDCBG, 35% de los LNH): debutan como masas ganglionares de crecimiento explosivo y síntomas B; sin tratamiento son rápidamente mortales en meses, pero son potencialmente curables en más del 60% de los casos con el esquema R-CHOP (Rituximab + Ciclofosfamida + Doxorrubicina + Vincristina + Prednisona); y 2) LNH Indolentes o de bajo grado (prototipo: Linfoma Folicular, 20%): se originan por la translocación t(14;18)(q32;q21) que yuxtapone el oncogén antiapoptótico BCL-2 al promotor de la cadena pesada de inmunoglobulinas. Cursan con adenopatías generalizadas de años de evolución que aumentan y disminuyen de tamaño; tienen sobrevidas muy prolongadas pero son biológicamente incurables con quimioterapia estándar, pudiendo transformarse a un linfoma agresivo difuso (fenómeno de transformación histológica de Richter).'
        ]
      },
      {
        subhead: '5. Estadificación de Ann Arbor y Protocolos GES N° 38',
        paragraphs: [
          'La etapificación clínica rige el tratamiento y se basa en la Clasificación de Ann Arbor (modificada por Cotswolds): 1) Estadio I: compromiso de una sola región ganglionar (ej. solo ganglios cervicales derechos) o una sola localización extraganglionar única (IE); 2) Estadio II: dos o más regiones ganglionares al mismo lado del diafragma (ambas por encima o ambas por debajo del músculo diafragma); 3) Estadio III: compromiso de regiones ganglionares a ambos lados del diafragma (por encima y por debajo, o ganglios abdominales más supradiafragmáticos); y 4) Estadio IV: diseminación difusa a uno o más órganos o tejidos extralinfáticos no contiguos (médula ósea, hígado, parénquima pulmonar).',
          'En Chile, bajo la garantía GES N° 38: el tratamiento estándar para Linfoma de Hodgkin en estadios tempranos y avanzados es el esquema poliquimioterápico ABVD (Adriamicina/Doxorrubicina + Bleomicina + Vinblastina + Dacarbazina), asociado o no a radioterapia de campo comprometido, alcanzando tasas globales de curación superiores al 85%. Para el Linfoma No Hodgkin agresivo B, el régimen garantizado es la inmunoquimioterapia R-CHOP.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial: Linfoma de Hodgkin vs Linfomas No Hodgkin',
      headers: ['Característica', 'Linfoma de Hodgkin (LH)', 'Linfomas No Hodgkin (LNH)'],
      rows: [
        ['Distribución por Edades', 'Bimodal (picos a los 20-30 años y > 60 años)', 'Incidencia continuamente creciente con la edad (> 60 a)'],
        ['Patrón de Diseminación', 'Ordenado, por contigüidad linfática anatómica', 'No contiguo, desordenado, diseminación hematógena precoz'],
        ['Compromiso Extraganglionar', 'Muy raro en fases iniciales (< 5-10%)', 'Muy frecuente (> 30-40%: digestivo, SNC, piel, bazo)'],
        ['Compromiso Mediastínico', 'Muy frecuente en subtipo Esclerosis Nodular (60%)', 'Menos común (salvo linfoma mediastínico primario B)'],
        ['Célula Neoplásica Típica', 'Célula gigante de Reed-Sternberg (CD30+, CD15+)', 'Proliferación clonal homogénea de linfocitos B o T'],
        ['Infiltrado Inflamatorio', 'Predominante (98% de la masa tumoral es reactiva)', 'Escaso (la masa está formada por células neoplásicas)'],
        ['Curabilidad Global', 'Altamente curable (> 85% de curación con ABVD)', 'Curable en agresivos (LDCBG 60%); incurable en foliculares']
      ]
    },
    severityTable: {
      title: 'Estadificación de Ann Arbor (Cotswolds) y Clasificación Funcional',
      headers: ['Estadio Ann Arbor', 'Definición Anatómica Topográfica', 'Sufijo Clínico Obligatorio', 'Pronóstico y Abordaje'],
      rows: [
        ['Estadio I', 'Una sola región ganglionar o una sola estructura linfoide', 'A: Sin síntomas B / B: Con síntomas B', 'Enfermedad localizada; ABVD abreviado + Radioterapia'],
        ['Estadio II', 'Dos o más regiones ganglionares al mismo lado del diafragma', 'A: Sin síntomas B / B: Con síntomas B', 'Enfermedad localizada; alta tasa de curación (>90%)'],
        ['Estadio III', 'Regiones ganglionares a ambos lados del diafragma (+/- bazo)', 'A: Sin síntomas B / B: Con síntomas B', 'Enfermedad avanzada; ABVD completo (6 ciclos)'],
        ['Estadio IV', 'Compromiso difuso extralinfático (Médula ósea, Hígado, Pulmón)', 'A: Sin síntomas B / B: Con síntomas B', 'Enfermedad diseminada; quimioterapia sistémica intensiva'],
        ['Sufijo E / X', 'E: Extensión extraganglionar contigua / X: Masa Bulky (> 10 cm)', 'Determina necesidad de consolidación con radioterapia', 'Masa Bulky mediastínica (>1/3 tórax) exige radioterapia']
      ]
    },
    treatmentTable: {
      title: 'Esquemas de Quimioterapia Garantizados en GES N° 38',
      headers: ['Patología Linfoide', 'Régimen Farmacológico de Elección', 'Fármacos Integrantes', 'Toxicidad Clave a Monitorizar'],
      rows: [
        ['Linfoma de Hodgkin Clásico', 'Esquema ABVD', 'Doxorrubicina + Bleomicina + Vinblastina + Dacarbazina', 'Bleomicina: Toxicidad pulmonar fibrótica | Doxorrubicina: Cardiotoxicidad'],
        ['LNH Difuso Células B Grandes', 'Inmunoquimioterapia R-CHOP', 'Rituximab + Ciclofosfamida + Doxorrubicina + Vincristina + Prednisona', 'Vincristina: Neuropatía periférica axonal | Rituximab: Infusión/Reactivación VHB'],
        ['Linfoma Folicular Asintomático', 'Conducta expectante ("Watch and Wait")', 'Sin fármacos hasta progresión sintomática', 'Monitoreo clínico semestral para detectar transformación a LDCBG'],
        ['Linfoma Gástrico MALT temprano', 'Terapia erradicadora de Helicobacter pylori', 'Inhibidor bomba protones + Claritromicina + Amoxicilina', 'Erradicación de H. pylori cura el linfoma MALT en >75% de casos']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Adulto Joven con Masa Cervical Indolora y Sudoración Nocturna',
      text: 'Hombre de 25 años consulta por aumento de volumen cervical izquierdo de 2 meses de evolución, indoloro y de crecimiento paulatino. Refiere además que en el último mes ha presentado sudoración nocturna profusa que empapa su camiseta y baja involuntaria de 7 kg de peso (peso basal 68 kg). Al examen físico se palpa conglomerado adenopático supraclavicular y cervical lateral izquierdo de 4 cm, de consistencia gomosa, móvil y no sensible. No se palpan otras adenopatías ni visceromegalias. El médico general sospecha tuberculosis y solicita una punción aspirativa con aguja fina (PAAF).',
      conducta: 'Manejo procedimental inadecuado. La presencia de adenopatía supraclavicular gomosa persistente con síntomas B francos (sudoración nocturna y baja de peso > 10%) en un adulto joven orienta a Linfoma de Hodgkin. La PAAF está formalmente contraindicada porque no evalúa la arquitectura del ganglio ni permite tipificar el linfoma. La conducta correcta es suspender la PAAF y derivar a cirugía para realizar una Biopsia Escisional del ganglio completo para confirmación histopatológica (células de Reed-Sternberg) e iniciar etapificación con PET-TC bajo cobertura GES N° 38.'
    },
    keyPoints: [
      'Regla de oro: el diagnóstico de linfoma exige Biopsia Escisional de Ganglio Linfático COMPLETO (la PAAF no sirve).',
      'Síntomas B: fiebre inexplicada > 38 °C, sudoración nocturna profusa y baja de peso involuntaria > 10% en 6 meses.',
      'El Linfoma de Hodgkin presenta distribución bimodal (20-30 a y >60 a) y células binucleadas de Reed-Sternberg (CD30+/CD15+).',
      'El subtipo más común de Hodgkin es la Esclerosis Nodular (70%, mujeres jóvenes, masa mediastínica).',
      'Diseminación de Hodgkin: contigua y ordenada por estaciones linfáticas; diseminación de No Hodgkin: hematógena precoz.',
      'El Linfoma No Hodgkin más común es el Difuso de Células B Grandes (LDCBG), agresivo pero potencialmente curable con R-CHOP.',
      'El Linfoma Folicular t(14;18) BCL-2 es indolente e incurable con quimioterapia estándar; se observa si está asintomático.',
      'El Linfoma gástrico MALT asociado a Helicobacter pylori se trata en estadios tempranos erradicando la bacteria.'
    ],
    questions: [
      {
        stem: 'Un hombre de 24 años consulta por aumento de volumen supraclavicular izquierdo de 2 meses de evolución, indoloro, de 3 cm de diámetro, firme y adherido a planos intermedios. Refiere además sudoración nocturna profusa y baja de 8 kg de peso en los últimos 3 meses. ¿Cuál es el procedimiento diagnóstico de elección para confirmar la etiología de este cuadro?',
        opciones: [
          'A) Punción aspirativa con aguja fina (PAAF) de la adenopatía',
          'B) Biopsia escisional quirúrgica del ganglio linfático completo',
          'C) Tomografía por emisión de positrones (PET-TC) corporal total exclusiva',
          'D) Tratamiento empírico antibiótico con amoxicilina/ácido clavulánico por 14 días',
          'E) Medición de anticuerpos séricos contra el virus de Epstein-Barr'
        ],
        correcta: 'B',
        explicacion: 'Ante una adenopatía supraclavicular sospechosa con síntomas B en un adulto joven, la sospecha rectora es un linfoma. El único procedimiento diagnóstico que permite confirmar la histología, la arquitectura tisular ganglionar y el inmunofenotipo necesario para clasificar un linfoma es la Biopsia Escisional Quirúrgica del ganglio completo. La PAAF está contraindicada para el diagnóstico inicial de linfoma debido a su incapacidad para evaluar la arquitectura tisular. Perla. El diagnóstico de linfoma exige siempre biopsia escisional del ganglio entero.',
        recTag: 'EUNACOM 2017 · Q#38'
      },
      {
        stem: '¿Cuál de los siguientes grupos de manifestaciones clínicas define estrictamente la presencia de "Síntomas B" en la clasificación pronóstica de los Linfomas?',
        opciones: [
          'A) Prurito generalizado, astenia intensa y dolor ganglionar tras la ingesta de alcohol',
          'B) Fiebre > 38 °C inexplicada, sudoración nocturna profusa y pérdida de peso > 10% en los últimos 6 meses',
          'C) Ictericia, dolor en hipocondrio izquierdo y coluria franca',
          'D) Disnea de esfuerzo, tos irritativa y cefalea matutina',
          'E) Petequias en tronco, epistaxis recurrente y gingivorragia'
        ],
        correcta: 'B',
        explicacion: 'La tríada clásica y formal de Síntomas B en los sistemas de estadificación de linfomas (Ann Arbor) comprende de forma estricta: 1) Fiebre inexplicada superior a 38 °C; 2) Sudoración nocturna profusa drenching que obliga a cambiarse de ropa; y 3) Pérdida de peso corporal involuntaria mayor al 10% en los últimos 6 meses. El prurito y el dolor ganglionar con alcohol (signo de Hoster) son síntomas asociados en el Linfoma de Hodgkin pero no forman parte de los síntomas B formales. Perla. Síntomas B: Fiebre > 38 °C + Sudoración nocturna + Baja de peso > 10% en 6 meses.',
        recTag: 'EUNACOM 2019 · Q#05'
      },
      {
        stem: 'Una mujer de 22 años es diagnosticada mediante biopsia ganglionar de Linfoma de Hodgkin de tipo esclerosis nodular. El estudio de extensión con PET-TC corporal revela adenopatías en cadena cervical lateral derecha y en el mediastino anterior, sin compromiso ganglionar subdiafragmático ni infiltración de órganos extralinfáticos. No presenta fiebre, baja de peso ni sudoración. ¿Cuál es su estadio de Ann Arbor?',
        opciones: [
          'A) Estadio I A',
          'B) Estadio II A',
          'C) Estadio II B',
          'D) Estadio III A',
          'E) Estadio IV B'
        ],
        correcta: 'B',
        explicacion: 'La paciente presenta compromiso de dos regiones ganglionares distintas (cervical derecha y mediastino anterior), pero ambas se localizan en el mismo lado del diafragma (ambas supradiafragmáticas), lo que define un Estadio II de Ann Arbor. Al no presentar síntomas B constitucionales (fiebre, baja de peso ni sudoración nocturna), se agrega el sufijo "A". Por ende, su clasificación completa es Estadio II A. Perla. Dos o más cadenas ganglionares al mismo lado del diafragma sin síntomas B = Estadio II A.',
        recTag: 'EUNACOM 2021 · Q#29'
      },
      {
        stem: 'Hombre de 60 años consulta por dispepsia y epigastralgia leve. La endoscopía digestiva alta muestra un engrosamiento de pliegues gástricos en el antro, cuya biopsia informa gastritis crónica activa por Helicobacter pylori y proliferación de linfocitos B monoclonales compatible con Linfoma MALT gástrico de bajo grado, limitado a la mucosa. ¿Cuál es el tratamiento de primera línea de elección?',
        opciones: [
          'A) Gastrectomía total con vaciamiento ganglionar D2 de urgencia',
          'B) Tratamiento antibiótico de erradicación de Helicobacter pylori',
          'C) Inmunoquimioterapia endovenosa con esquema R-CHOP por 6 ciclos',
          'D) Radioterapia gástrica externa exclusiva a altas dosis',
          'E) Inhibidores de la tirosina quinasa orales por tiempo indefinido'
        ],
        correcta: 'B',
        explicacion: 'El Linfoma gástrico de tejido linfoide asociado a mucosas (MALT) de bajo grado en estadios localizados (limitado a mucosa y submucosa) es una neoplasia antigénicamente dependiente de la estimulación inflamatoria crónica inducida por Helicobacter pylori. El tratamiento de primera línea consiste en la terapia antibacteriana de erradicación de H. pylori, la cual logra la remisión histológica completa del linfoma en más del 75% al 80% de los pacientes sin necesidad de quimioterapia ni cirugía. Perla. El linfoma MALT gástrico localizado se trata y cura erradicando Helicobacter pylori.',
        recTag: 'EUNACOM 2023 · Q#36'
      }
    ]
  },
  {
    id: 'hem-19',
    classId: 'hem-19',
    tier: 2,
    blockNum: 4,
    blockName: 'Oncohematología: Neoplasias Mieloides y Linfoides',
    topicLabel: '8.19',
    title: 'Mieloma Múltiple: Criterios CRAB, Pico Monoclonal, Gammapatía Monoclonal Incierta (GMSI)',
    perfilCode: '1.08.1.007',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'Garantía Explícita en Salud (GES N° 72): Mieloma Múltiple en personas de 15 años y más',
    reconstrucciones: 'EUNACOM Julio 2018 (Q#09) · EUNACOM Diciembre 2020 (Q#38) · EUNACOM Julio 2022 (Q#19)',
    frecuencia: 'Muy Alta · Nemotecnia CRAB, electroforesis con pico M en gamma, VHS > 100, lesiones en sacabocado',
    svg: null, algoTitle: 'Algoritmo Diagnóstico del Mieloma Múltiple (Criterios CRAB)',
    diagram: flow('Algoritmo de Mieloma Múltiple y Criterios CRAB (GES 72)', [
      { t: 'Adulto Mayor con Dolor Óseo Lumbar Persistente + Anemia + VHS > 100 mm/h', s: 'Sospecha clínica de Discrasia de Células Plasmáticas · Solicitar Electroforesis de Proteínas' },
      { k: 'split', q: 'Electroforesis de Proteínas en Suero / Orina (Inmunofijación)', s: 'Demuestra banda estrecha hiperdensa: Pico Monoclonal (Componente M)', ll: 'Pico Monoclonal IgG o IgA Presente', rl: 'Ausencia de Pico M Sérico',
        left: { t: 'Investigar Criterios de Daño Orgánico CRAB', s: 'C: Calcio alto (>11) · R: Renal (Crea >2) · A: Anemia (Hb <10) · B: Bone (Lesiones líticas sacabocado)', type: 'acc' },
        right: { t: 'Mieloma de Cadenas Ligeras / Bence Jones', s: '20% solo secreta cadenas livianas (kappa/lambda) que filtran a orina · Solicitar Cadenas Ligeras Libres en Suero', type: 'warn' },
        ll: 'evaluar daño crab', rl: 'cadenas ligeras' },
      { t: 'Diagnóstico Definitivo de Mieloma Múltiple Activo (Requiere Tratamiento)', s: 'Plasmocitos en médula ósea ≥ 10% O Plasmocitoma demostrado + Al menos 1 criterio CRAB o biomarcador SLiM', type: 'crit', al: 'criterio definitivo', from: 'left' }
    ]),
    contexto: 'El Mieloma Múltiple (MM) es una neoplasia clonal de células plasmáticas terminalmente diferenciadas en la médula ósea que sintetizan una inmunoglobulina monoclonal homogénea (componente M). El EUNACOM interroga sistemáticamente la nemotecnia CRAB de daño a órgano diana (Hipercalcemia, Insuficiencia Renal, Anemia y Lesiones Óseas líticas en sacabocado), la presencia de una VHS extremadamente elevada (> 100 mm/h) con fenómeno de Rouleaux en frotis, y la diferenciación crucial con la Gammapatía Monoclonal de Significado Incierto (GMSI), la cual NO tiene criterios CRAB y requiere solo observación. Garantizado por GES N° 72.',
    contentSections: [
      {
        subhead: '1. Fisiopatología: Expansión Plasmocitaria y Criterios Diagnósticos CRAB',
        paragraphs: [
          'El Mieloma Múltiple se origina por la transformación maligna de un clon de células plasmáticas en la médula ósea que secrete una paraproteína monoclonal intacta (IgG en 55%, IgA en 20%) o cadenas ligeras libres solas (kappa o lambda en 20%, conocidas históricamente como proteína de Bence-Jones). La edad mediana al diagnóstico es de 65 a 70 años.',
          'La nemotecnia diagnóstica CRAB define el daño de órgano blanco que exige inicio de tratamiento antineoplásico inmediato: 1) C (Hypercalcemia): calcio sérico > 11.0 mg/dL (o > 1 mg/dL sobre el límite superior normal), producido por la sobreactivación de osteoclastos estimulados por RANK-ligando e IL-6 secretados por los plasmocitos; 2) R (Renal insufficiency): creatinina sérica > 2.0 mg/dL o aclaramiento de creatinina < 40 mL/min, debida principalmente al "Riñón de Mieloma" (nefropatía por cilindros de cadenas ligeras que precipitan con la proteína de Tamm-Horsfall y obstruyen los túbulos distales y colectores); 3) A (Anemia): anemia normocítica normocrómica con Hb < 10.0 g/dL (o > 2 g/dL bajo el límite normal), por desplazamiento medular y supresión de la eritropoyesis; y 4) B (Bone lesions): una o más lesiones osteolíticas en sacabocado ("punched-out") en radiografías simples de cráneo, pelvis, columna o fémur, o fracturas patológicas por fragilidad extrema.'
        ]
      },
      {
        subhead: '2. Laboratorio Clínico y Electroforesis de Proteínas',
        paragraphs: [
          'Los hallazgos analíticos de sospecha son llamativos: Velocidad de Hemosedimentación (VHS) marcadamente acelerada (típicamente > 100 mm/h en la primera hora), explicada por el exceso de inmunoglobulinas catiónicas circulantes que neutralizan las cargas negativas sializadas de la membrana eritrocitaria, permitiendo que los hematíes se agreguen formando pilas de monedas (fenómeno de Rouleaux en el frotis sanguíneo).',
          'La confirmación de la paraproteína se realiza mediante Electroforesis de Proteínas en Suero (EFP): se observa una espícula angosta y homogénea de base estrecha en la región gamma ("Pico Monoclonal" o componente M). La Inmunofijación sérica y urinaria determina el isotipo de cadena pesada y ligera. Si la electroforesis sérica es normal pero la sospecha persiste, debe sospecharse un mieloma micromolecular (de cadenas ligeras puras), solicitándose la cuantificación de Cadenas Ligeras Libres en Suero (índice kappa/lambda) y electroforesis de orina de 24 horas.'
        ]
      },
      {
        subhead: '3. Diagnóstico Diferencial con la GMSI y Manejo GES N° 72',
        paragraphs: [
          'La Gammapatía Monoclonal de Significado Incierto (GMSI / MGUS) es una condición premaligna muy frecuente en adultos mayores (> 3-5% en mayores de 70 años) caracterizada por: 1) Pico monoclonal sérico < 3.0 g/dL; 2) Infiltración por células plasmáticas en médula ósea < 10%; y 3) AUSENCIA TOTAL de criterios CRAB (calcio normal, función renal normal, hemoglobina normal y huesos indemnes). La GMSI no se trata con quimioterapia; se vigila anualmente porque tiene un riesgo de progresión a mieloma múltiple del 1% por año.',
          'En el Mieloma Múltiple sintomático (GES N° 72), el pilar de inducción contemporáneo consiste en regímenes triples que combinan un inhibidor del proteasoma (Bortezomib), un inmunomodulador (Lenalidomida o Talidomida) y Dexametasona a dosis altas (esquema VRd o CyBorD). En pacientes menores de 65-70 años sin comorbilidades severas, la terapia de consolidación estándar es el Trasplante Autólogo de Progenitores Hematopoyéticos (Auto-TPH) tras mieloablación con melfalán en altas dosis. Para las lesiones óseas se indican bifosfonatos endovenosos (Ácido Zoledrónico) o Denosumab.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial: Mieloma Múltiple vs GMSI vs Mieloma Quiescente (Smoldering)',
      headers: ['Criterio Diagnóstico', 'Gammapatía Monoclonal Incierta (GMSI)', 'Mieloma Quiescente (Asintomático)', 'Mieloma Múltiple Activo (Sintomático)'],
      rows: [
        ['Componente M Sérico', '< 3.0 g/dL', '≥ 3.0 g/dL (o en orina ≥ 500 mg/24h)', 'Presente (cualquier nivel; habitualmente > 3 g/dL)'],
        ['Plasmocitos en Médula Ósea', '< 10% del total celular nucleado', '10% a 59% de celularidad plasmática', '≥ 10% (o plasmocitoma extramedular probado)'],
        ['Criterios de Daño CRAB', 'RIGUROSAMENTE AUSENTES', 'RIGUROSAMENTE AUSENTES', 'AL MENOS 1 CRITERIO CRAB PRESENTE'],
        ['Conducta Terapéutica', 'Observación ambulatoria anual; no tratar', 'Monitoreo estrecho cada 3-6 meses; no quimio', 'Tratamiento inmediato: Bortezomib + Lenalidomida + Dexa']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Adulto Mayor con Lumbalgia, Falla Renal y Lesiones Líticas',
      text: 'Hombre de 68 años consulta por dolor lumbar mecánico progresivo de 3 meses que no cede con paracetamol ni AINEs y astenia. En el examen destaca palidez y dolor a la palpación vertebral L2-L3, sin fiebre. Laboratorio: Hb 8.9 g/dL, VCM 87 fL, VHS 125 mm/h, Creatinina 2.6 mg/dL, Calcio sérico 11.8 mg/dL (VN 8.5-10.5). El frotis sanguíneo evidencia marcado fenómeno de Rouleaux eritrocitario. La radiografía de cráneo muestra múltiples lesiones osteolíticas redondeadas radiolúcidas de bordes nítidos sin esclerosis reactiva periférica ("cráneo en sacabocado").',
      conducta: 'Mieloma Múltiple activo de novo con presencia de los cuatro criterios CRAB completos (Hipercalcemia 11.8, Falla Renal 2.6, Anemia 8.9 y Daño Óseo lítico). Se debe hospitalizar de inmediato, hidratar vigorosamente con suero fisiológico endovenoso para tratar la hipercalcemia y proteger el riñón, suspender estrictamente cualquier AINE, solicitar electroforesis e inmunofijación de proteínas y derivar urgente a hematología bajo protocolo GES N° 72 para aspirado medular e inicio de inducción con Bortezomib y dexametasona.'
    },
    keyPoints: [
      'Nemotecnia CRAB: Calcio alto (>11), Renal (creatinina >2), Anemia (Hb <10), Bone (lesiones líticas en sacabocado).',
      'VHS > 100 mm/h con fenómeno de Rouleaux (pilas de monedas en frotis) es altamente sugestiva de mieloma múltiple.',
      'La Electroforesis de Proteínas demuestra un pico monoclonal estrecho en región gamma (IgG 55%, IgA 20%).',
      'El "Riñón de Mieloma" se debe a la precipitación y obstrucción intratubular por cilindros de cadenas ligeras libres.',
      'GMSI: pico M < 3 g/dL, plasmocitos medulares < 10% y AUSENCIA de criterios CRAB (se observa anualmente).',
      'Mieloma sintomático activo: plasmocitos medulares ≥ 10% más al menos 1 criterio CRAB (exige tratamiento inmediato).',
      'El esquema de inducción estándar es Bortezomib + Lenalidomida + Dexametasona, seguido de Trasplante Autólogo en candidatos.'
    ],
    questions: [
      {
        stem: 'Hombre de 69 años consulta por dolor lumbar persistente de varios meses de evolución. En sus exámenes se constata Hb 9.1 g/dL, creatinina 2.3 mg/dL, calcio sérico 11.5 mg/dL y una VHS de 118 mm/h. Las radiografías de cráneo muestran múltiples lesiones líticas osteolíticas circulares en sacabocado. ¿Cuál es el diagnóstico más probable?',
        opciones: [
          'A) Hiperparatiroidismo primario severo',
          'B) Metástasis óseas de adenocarcinoma prostático',
          'C) Mieloma múltiple sintomático',
          'D) Gammapatía monoclonal de significado incierto',
          'E) Osteoporosis senil con aplastamiento vertebral'
        ],
        correcta: 'C',
        explicacion: 'El paciente presenta el cuadro clínico completo de los criterios CRAB de daño a órgano diana: Hipercalcemia (11.5 mg/dL), Falla Renal (creatinina 2.3 mg/dL), Anemia normocítica (Hb 9.1 g/dL) y Lesiones óseas líticas en sacabocado ("Bone lesions"), sumado a una VHS superior a 100 mm/h. Esta constelación es diagnóstica de Mieloma Múltiple sintomático. Las metástasis de cáncer de próstata producen lesiones blásticas u osteoesclerosas (no líticas) y la GMSI no presenta criterios CRAB. Perla. CRAB (Calcio alto, Renal, Anemia, Bone) + VHS > 100 = Mieloma Múltiple.',
        recTag: 'EUNACOM 2018 · Q#09'
      },
      {
        stem: '¿Cuál de las siguientes condiciones permite diagnosticar con certeza una Gammapatía Monoclonal de Significado Incierto (GMSI) y diferenciarla del Mieloma Múltiple?',
        opciones: [
          'A) Infiltración por células plasmáticas en médula ósea mayor al 30%',
          'B) Presencia de fracturas vertebrales patológicas múltiples',
          'C) Concentración de proteína monoclonal sérica menor a 3.0 g/dL y ausencia completa de criterios CRAB',
          'D) Elevación de la calcemia por sobre 12.0 mg/dL',
          'E) Presencia de proteinuria de cadenas ligeras mayor a 2 gramos en 24 horas'
        ],
        correcta: 'C',
        explicacion: 'Los criterios diagnósticos internacionales de la Gammapatía Monoclonal de Significado Incierto (GMSI) exigen: 1) Componente monoclonal sérico menor a 3.0 g/dL; 2) Menos del 10% de células plasmáticas en el aspirado de médula ósea; y 3) Ausencia total de daño orgánico atribuible a la discrasia (ausencia de hipercalcemia, insuficiencia renal, anemia y lesiones líticas óseas, es decir, sin criterios CRAB). La presencia de cualquiera de los criterios CRAB convierte el cuadro en Mieloma Múltiple. Perla. GMSI = Pico M < 3 g/dL + Plasmocitos < 10% + Cero criterios CRAB.',
        recTag: 'EUNACOM 2020 · Q#38'
      }
    ]
  },
  {
    id: 'hem-20',
    classId: 'hem-20',
    tier: 2,
    blockNum: 4,
    blockName: 'Oncohematología: Neoplasias Mieloides y Linfoides',
    topicLabel: '8.20',
    title: 'Neoplasias Mieloproliferativas (Policitemia Vera JAK2, TE, Mielofibrosis) y Mielodisplasia',
    perfilCode: '1.08.1.018',
    dx: 'Sospecha', tx: 'Inicial', seg: 'Derivar',
    ges: 'No GES directo · Derivación a Hematología Ambulatoria',
    reconstrucciones: 'EUNACOM Julio 2018 (Q#33) · EUNACOM Diciembre 2022 (Q#15)',
    frecuencia: 'Media · Mutación JAK2 V617F, sangría terapéutica en PV, frotis con dacriocitos y punción seca',
    svg: null, algoTitle: 'Algoritmo Diagnóstico de Neoplasias Mieloproliferativas Crónicas (NMC)',
    diagram: flow('Algoritmo de Neoplasias Mieloproliferativas Crónicas (JAK2)', [
      { t: 'Paciente con Hematocrito Elevado (> 49% en hombres, > 48% en mujeres) O Trombocitosis > 450.000', s: 'Descartar policitemia relativa (deshidratación) y poliglobulia secundaria por hipoxemia (EPOC/tabaco)' },
      { k: 'split', q: 'Dosificación de Eritropoyetina Sérica (EPO) y Mutación JAK2 V617F', s: 'Diferencia causa primaria clonal autónoma de causa secundaria reactiva', ll: 'EPO Suprimida (< 2-4 mIU/mL) + Mutación JAK2 V617F (+)', rl: 'EPO Sérica Elevada (> 20 mIU/mL) / JAK2 Negativo',
        left: { t: 'Policitemia Vera (PV Primaria)', s: 'Prurito acuagénico tras ducha caliente + Esplenomegalia · Tratamiento: Flebotomías (meta Hto < 45%) + Aspirina', type: 'acc' },
        right: { t: 'Poliglobulia Secundaria Reactiva', s: 'Respuesta fisiológica a hipoxia crónica (EPOC, apnea del sueño, grandes alturas, fumador) o tumores secretores de EPO', type: 'warn' },
        ll: 'policitemia vera', rl: 'poliglobulia secundaria' },
      { t: 'Mielofibrosis Primaria: Tríada Patognomónica', s: 'Esplenomegalia masiva gigante + Frotis con Dacriocitos (hematíes en lágrima) + Punción aspirativa medular "seca" (dry tap)', type: 'crit', al: 'mielofibrosis', from: 'left' }
    ]),
    contexto: 'Las Neoplasias Mieloproliferativas Crónicas (NMC) son trastornos clonales de la célula madre hematopoyética caracterizados por la proliferación autónoma excesiva de una o más series mieloides diferenciadas. El EUNACOM evalúa: 1) La Policitemia Vera (eritrocitosis absoluta con mutación del gen JAK2 V617F en >95%, prurito acuagénico desencadenado por agua caliente, eritromelalgia y sangría/flebotomía terapéutica para mantener Hto < 45%); 2) La diferenciación con poliglobulias secundarias (donde la EPO está elevada y JAK2 es negativo); 3) La Mielofibrosis Primaria (dacriocitos o hematíes en lágrima, esplenomegalia gigante y punción seca medular); y 4) Los Síndromes Mielodisplásicos (dishemopoyesis con médula hipercelular y pancitopenia periférica en ancianos).',
    contentSections: [
      {
        subhead: '1. Policitemia Vera (PV): Fisiopatología Molecular de la Mutación JAK2 V617F',
        paragraphs: [
          'La Policitemia Vera se caracteriza por la proliferación trilineal clonal autónoma de precursores eritroides, mieloides y megacariocíticos en la médula ósea, con predominio absoluto de la masa eritrocitaria. En más del 95% al 98% de los pacientes se detecta la mutación puntual somática JAK2 V617F (sustitución de valina por fenilalanina en el codón 617 del gen Janus Kinase 2 en el cromosoma 9p).',
          'Esta mutación anula el dominio autoinhibitorio de la quinasa JAK2, provocando que el receptor de eritropoyetina envíe señales intracelulares mitogénicas y antiapoptóticas continuas e independientes de la presencia de eritropoyetina. En consecuencia, la masa eritrocitaria aumenta de forma desmedida, mientras que por retroalimentación negativa la concentración plasmática de Eritropoyetina (EPO) se encuentra suprimida o indetectable (< 2-4 mIU/mL).'
        ]
      },
      {
        subhead: '2. Cuadro Clínico de la Policitemia Vera y Síndrome de Hiperviscosidad',
        paragraphs: [
          'El aumento del hematocrito eleva exponencialmente la viscosidad sanguínea, reduciendo el flujo microvascular y predisponiendo a complicaciones trombóticas arteriales y venosas (principal causa de morbimortalidad: infarto agudo de miocardio, ACV isquémico y trombosis venosa de territorios inusuales como la vena porta o suprahepáticas [Budd-Chiari]).',
          'Las manifestaciones clínicas características incluyen: 1) Facies pletórica (rubicundez facial y conjuntival); 2) Cefalea, mareos, acúfenos y alteraciones visuales por hiperviscosidad; 3) Prurito acuagénico (prurito urente intolerable desencadenado minutos después de un baño con agua caliente, mediado por desgranulación mastocitaria y basófilos); 4) Eritromelalgia (dolor urente y eritema congestivo doloroso en manos y pies); y 5) Esplenomegalia palpable en el 70% de los pacientes.',
          'Criterios diagnósticos mayores OMS: Hb > 16.5 g/dL en hombres (> 16.0 en mujeres) o Hto > 49% en hombres (> 48% en mujeres), biopsia de médula ósea con panmielosis y presencia de la mutación JAK2 V617F. La EPO sérica subnormal es el criterio menor.',
          'Manejo clínico: el objetivo terapéutico estricto es mantener el Hematocrito por debajo del 45% (Hto < 45% en hombres y mujeres), lo que reduce drásticamente los eventos trombóticos cardiovasculares. Se logra mediante Sangrías o Flebotomías terapéuticas periódicas (extracción de 400-500 mL de sangre 1 a 2 veces por semana al inicio), asociado a Ácido Acetilsalicílico en dosis bajas (100 mg/día). En pacientes de alto riesgo (edad > 60 años o antecedente de trombosis previa) se agrega tratamiento citorreductor con Hidroxiurea.'
        ]
      },
      {
        subhead: '3. Trombocitemia Esencial, Mielofibrosis Primaria y Mielodisplasia',
        paragraphs: [
          'La Trombocitemia Esencial (TE) cursa con trombocitosis clonal sostenida (> 450.000/uL, con frecuencia > 1.000.000/uL), con mutaciones en JAK2 (60%), Calreticulina (CALR, 25%) o MPL (5%), manifestándose por sangrados paradójicos por consumo de multímeros de vWF o trombosis microvasculares.',
          'La Mielofibrosis Primaria (MFP) es la NMC más agresiva. La proliferación clonal de megacariocitos atípicos libera PDGF y TGF-beta, estimulando a los fibroblastos medulares a depositar colágeno y fibrosis reticulínica difusa masiva. La médula ósea queda cicatrizada y afuncional, obligando a la hematopoyesis a migrar a bazo e hígado (metaplasia mieloide extramedular). Cursa con la tríada semiológica: 1) Esplenomegalia masiva gigante (bazo palpable hasta fosa ilíaca derecha); 2) Frotis con Leucoeritroblastosis y Dacriocitos (glóbulos rojos deformados con forma de gota o lágrima al exprimir su paso a través de la fibrosis medular); y 3) Aspirado de médula ósea "seco" (dry tap: no se obtiene material hemático), requiriendo obligatoriamente biopsia ósea.',
          'Los Síndromes Mielodisplásicos (SMD) son neoplasias clonales del adulto mayor caracterizadas por dishemopoyesis: la médula es hipercelular pero defectuosa, produciendo células displásicas que mueren dentro de la médula por apoptosis (hematopoyesis ineficaz), expresándose en sangre periférica como pancitopenia con macrocitosis, hipogranulación de neutrófilos (anomalía de Pelger-Huët) y riesgo elevado de transformación a Leucemia Mieloide Aguda.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial: Policitemia Vera vs Poliglobulias Secundarias',
      headers: ['Característica', 'Policitemia Vera (Neoplasia Primaria)', 'Poliglobulia Secundaria (Hipóxica o Tumoral)'],
      rows: [
        ['Mecanismo Patogénico', 'Proliferación clonal autónoma medular (JAK2)', 'Estimulación fisiológica o patológica por Eritropoyetina'],
        ['Mutación JAK2 V617F', 'PRESENTE en > 95% a 98% de los casos', 'RIGUROSAMENTE NEGATIVA (0%)'],
        ['Niveles de Eritropoyetina (EPO)', 'SUPRIMIDOS o Indetectables (< 2-4 mIU/mL)', 'ELEVADOS (> 20-100 mIU/mL)'],
        ['Otras Series en Hemograma', 'Panmielosis: Leucocitosis y Trombocitosis asociadas', 'Glóbulos blancos y plaquetas normales'],
        ['Esplenomegalia', 'Presente en > 70% de los pacientes', 'Ausente'],
        ['Prurito Acuagénico', 'Muy característico (desencadenado por agua tibia)', 'Ausente'],
        ['Etiologías Típicas', 'Neoplasia clonal hematopoyética primaria', 'EPOC severo, apnea del sueño, tabaquismo, carcinoma renal'],
        ['Meta Terapéutica', 'Flebotomías hasta meta Hto < 45% + Aspirina', 'Tratar la hipoxemia de base (oxígeno, cese tabaco)']
      ]
    },
    vignette: {
      title: 'Caso Clínico: Paciente con Rubicundez, Prurito al Bañarse y Trombosis',
      text: 'Hombre de 56 años, no fumador, sin patología pulmonar previa, consulta por prurito urente intenso en brazos y tórax que aparece invariablemente 10 minutos después de ducharse con agua caliente. Refiere además cefalea tensional y sensación de mareo. Al examen se observa rubicundez facial y conjuntival marcada y polo de bazo palpable a 3 cm bajo el reborde costal. Hemograma: Hb 18.9 g/dL, Hto 56%, Leucocitos 13.400/uL, Plaquetas 490.000/uL. Pruebas de función renal y hepática normales. La gasometría arterial en reposo muestra SatO2 98% y PaO2 92 mmHg.',
      conducta: 'Policitemia Vera (policitemia absoluta primaria) asociada a prurito acuagénico, panmielosis y esplenomegalia palpable, con función respiratoria normal. Se debe solicitar dosificación de eritropoyetina sérica (se espera suprimida) y estudio molecular de la mutación JAK2 V617F en sangre periférica. El tratamiento inmediato prioritario para prevenir un infarto o ACV trombótico es iniciar flebotomías terapéuticas de 450 mL hasta lograr una meta de hematocrito < 45%, asociando ácido acetilsalicílico 100 mg/día.'
    },
    keyPoints: [
      'La Policitemia Vera presenta eritrocitosis con mutación del gen JAK2 V617F en >95% y EPO sérica suprimida.',
      'Tríada clínica de PV: rubicundez facial, esplenomegalia palpable y prurito acuagénico tras ducha caliente.',
      'Meta terapéutica fundamental en Policitemia Vera: Hematocrito estrictamente < 45% mediante flebotomías.',
      'Las poliglobulias secundarias cursan con EPO sérica elevada y JAK2 negativo (EPOC, apnea del sueño, fumador).',
      'Mielofibrosis Primaria: esplenomegalia gigante + dacriocitos (células en lágrima) en frotis + punción medular seca.',
      'Trombocitemia Esencial: recuento plaquetario > 450.000/uL persistente, con mutaciones en JAK2 o CALR.',
      'Los Síndromes Mielodisplásicos causan citopenias refractarias con displasia celular en adultos mayores y riesgo de LMA.'
    ],
    questions: [
      {
        stem: 'Hombre de 58 años consulta por cefalea, mareos y prurito intenso generalizado tras salir de la ducha con agua caliente. Al examen se constata rubicundez facial y esplenomegalia moderada. El hemograma revela hematocrito de 55%, hemoglobina de 18.2 g/dL, leucocitos de 12.800/uL y plaquetas de 460.000/uL. ¿Cuál de los siguientes hallazgos de laboratorio confirma con mayor certeza el diagnóstico de Policitemia Vera?',
        opciones: [
          'A) Nivel sérico de eritropoyetina marcadamente elevado',
          'B) Detección de la mutación somática JAK2 V617F en sangre periférica',
          'C) Saturación de oxígeno arterial menor a 88% en reposo',
          'D) Aumento de la fosfatasa alcalina granulocítica con cariotipo normal',
          'E) Presencia de células plasmáticas clonales en médula ósea'
        ],
        correcta: 'B',
        explicacion: 'El cuadro de poliglobulia absoluta con panmielosis (leucocitosis y trombocitosis asociadas), esplenomegalia y prurito acuagénico patognomónico orienta a Policitemia Vera. El criterio mayor de la OMS que confirma el diagnóstico de certeza es la detección de la mutación somática JAK2 V617F (presente en más del 95% de los casos). En la policitemia vera la eritropoyetina se encuentra suprimida o baja, a diferencia de las poliglobulias secundarias donde la EPO está elevada. Perla. Poliglobulia + prurito tras ducha tibia + JAK2 V617F (+) = Policitemia Vera.',
        recTag: 'EUNACOM 2018 · Q#33'
      },
      {
        stem: '¿Cuál es el objetivo terapéutico fundamental del control del hematocrito mediante sangrías terapéuticas (flebotomías) en un paciente diagnosticado de Policitemia Vera para reducir eficazmente la mortalidad por trombosis?',
        opciones: [
          'A) Mantener el hematocrito estrictamente por debajo del 45%',
          'B) Mantener el hematocrito entre 50% y 55%',
          'C) Normalizar el recuento de leucocitos a menos de 5.000/uL',
          'D) Inducir ferropenia severa con ferritina menor a 5 ng/mL',
          'E) Aumentar la eritropoyetina por sobre 100 mIU/mL'
        ],
        correcta: 'A',
        explicacion: 'El ensayo clínico pivotal CYTO-PV demostró de forma concluyente que mantener el hematocrito por debajo del 45% (Hto < 45%) mediante flebotomías regladas reduce significativamente la incidencia de eventos trombóticos cardiovasculares mayores (infarto de miocardio, accidente cerebrovascular y tromboembolismo venoso) y muerte cardiovascular en comparación con metas más permisivas (45-50%). Perla. En Policitemia Vera la meta estricta e innegociable es Hematocrito < 45%.',
        recTag: 'EUNACOM 2022 · Q#15'
      }
    ]
  }
];

module.exports = {
  bloque4
};
