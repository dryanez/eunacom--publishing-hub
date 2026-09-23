// ============================================================================
// BLOQUE 03 REUMATOLOGÍA: ESCLEROSIS, MIOPATÍAS Y SÍNDROMES AUTOINMUNES
// Manual EUNACOM 2026 · Tomo 09 Reumatología & Inmunología Clínica
// 5 Temas Curriculares (9.11 a 9.15) · 16 Preguntas Oficiales EUNACOM
// ============================================================================

const { flow } = require('./dataset_reumatologia_bloque_1.cjs');

const bloque3Classes = [
  {
    id: 'reuma-11', classId: 'reuma-11', tier: 3,
    blockNum: 3, blockName: 'Esclerosis Sistémica, Miopatías Inflamatorias y Síndromes Autoinmunes',
    topicLabel: '9.11',
    title: 'Síndrome Antifosfolípido (SAF): Criterios de Sydney, Trombosis Vascular y Manejo Obstétrico',
    perfilCode: '1.01.1.006', dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Garantía GES en Anticoagulación y Patología Reumatológica Asociada · Manejo integral especialista',
    reconstrucciones: 'EUNACOM 2017 Q#41 · EUNACOM 2019 Q#27 · EUNACOM 2022 Q#11 · EUNACOM 2024 Q#36',
    frecuencia: 'Muy Alta · Trombofilia autoinmune de mayor relevancia clínica y obstétrica en EUNACOM',
    svg: null, algoTitle: 'Algoritmo Diagnóstico y Terapéutico en Síndrome Antifosfolípido (Criterios de Sydney)',
    diagram: flow('Algoritmo de Síndrome Antifosfolípido', [
      { k: 'box', t: 'Sospecha de SAF (Trombosis Vascular Arterial/Venosa o Morbilidad Obstétrica)', s: 'Trombosis inexplicable en jóvenes · Muerte fetal ≥ 10 sem · Parto prematuro < 34 sem · ≥ 3 abortos < 10 sem', type: 'acc' },
      { k: 'box', t: 'Estudio de Laboratorio Mandatorio (Confirmar con ≥ 12 Semanas de Intervalo)', s: '1) Anticoagulante Lúpico (AL) · 2) Anticardiolipina (aCL) IgG/IgM · 3) Anti-Beta-2-Glicoproteína I', type: 'warn' },
      { k: 'split', q: 'Escenario Clínico y Decisión Terapéutica Anticoagulante', s: 'Estratificación del manejo según trombosis vs gestación',
        ll: 'Trombosis Vascular (Venosa o Arterial)',
        left: { t: 'Anticoagulación Oral con Cumarínicos (INR 2.0-3.0)', s: 'Acenocumarol / Warfarina indefinida · DOACs CONTRAINDICADOS en triple positividad', type: 'crit' },
        rl: 'Manejo Obstétrico en Gestación',
        right: { t: 'AAS 100 mg/d + HBPM Profiláctica (o Terapéutica)', s: 'AAS preconcepcional + Enoxaparina 40 mg/d SC desde confirmación hasta 6 sem postparto', type: 'dec' }
      },
      { k: 'box', t: 'Emergencia Vital: SAF Catastrófico (Síndrome de Asherson)', s: 'Trombosis multiorgánica en < 1 semana · Tratamiento triple: Heparina EV + Pulsos Metilprednisolona + Plasmaféresis/IGEV', type: 'crit' }
    ]),
    contexto: 'El Síndrome Antifosfolípido (SAF) es una trombofilia autoinmune adquirida de alta morbilidad. El EUNACOM examina con regularidad la paradoja del Anticoagulante Lúpico (prolonga el TTPK in vitro pero causa trombosis in vivo), la necesidad estricta de confirmar los anticuerpos con 12 semanas de diferencia, el esquema obstétrico protector con AAS y heparina de bajo peso molecular, y la contraindicación formal de los nuevos anticoagulantes orales directos (DOACs) en pacientes con triple positividad.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Autoanticuerpos y Paradoja del Anticoagulante Lúpico',
        paragraphs: [
          'El SAF se caracteriza por la presencia de autoanticuerpos dirigidos contra fosfolípidos aniónicos de la membrana celular y, principalmente, contra sus proteínas plasmáticas cofactoras, destacando la <strong>Beta-2-glicoproteína I (beta-2-GPI)</strong> y la protrombina.',
          'La unión del complejo inmune a las células endoteliales, monocitos y plaquetas induce la expresión de factor tisular, inhibe la proteína C activada y la fibrinolisis, e induce un estado protrombótico vascular generalizado con activación del complemento (C5a). En la placenta provoca trombosis de los vasos uteroplacentarios y disfunción directa del trofoblasto, llevando a pérdida fetal y preeclampsia.',
          'Puede ser <strong>SAF Primario</strong> (aislado en 50%) o <strong>SAF Secundario</strong> (asociado a otra enfermedad autoinmune, fundamentalmente Lupus Eritematoso Sistémico en 30-40% de los pacientes con LES).',
          '<strong>La Paradoja del Anticoagulante Lúpico (AL):</strong> El AL interfiere con el ensamblaje del complejo protrombinasa in vitro en el tubo de ensayo, provocando un <strong>falso alargamiento del tiempo de tromboplastina parcial activada (TTPK)</strong> que NO corrige al mezclar con plasma normal (prueba de mezclas con índice de Rosner alterado) pero que SÍ corrige al añadir exceso de fosfolípidos exógenos. Sin embargo, <strong>in vivo es un potente agente protrombótico</strong>.'
        ]
      },
      {
        subhead: '2. Criterios Diagnósticos Clasificatorios de Sydney (Revisión Sapporo)',
        paragraphs: [
          'Para el diagnóstico de SAF se requiere la presencia obligatoria de <strong>al menos un criterio clínico Y al menos un criterio de laboratorio</strong>:',
          '<strong>A. Criterios Clínicos:</strong>',
          '1. <strong>Trombosis Vascular:</strong> Uno o más episodios objetivos de trombosis arterial, venosa (la más común es la trombosis venosa profunda de extremidades inferiores y tromboembolismo pulmonar) o de pequeños vasos en cualquier tejido, confirmada por ecografía Doppler, angiografía o histopatología sin inflamación de la pared del vaso.',
          '2. <strong>Morbilidad Obstétrica (Cualquiera de las siguientes 3 situaciones):</strong>',
          '• <em>Muerte Fetal Tardía:</em> ≥ 1 muerte inexplicable de un feto morfológicamente normal a partir de las <strong>10 semanas de gestación</strong>.',
          '• <em>Parto Prematuro Severo:</em> ≥ 1 parto prematuro de neonato morfológicamente normal <strong>antes de la semana 34 de gestación</strong> debido a preeclampsia severa, eclampsia o insuficiencia placentaria grave.',
          '• <em>Pérdidas Embrionarias Precoces:</em> <strong>≥ 3 abortos espontáneos consecutivos e inexplicados antes de las 10 semanas</strong> de gestación, habiendo excluido anomalías anatómicas, hormonales o cromosómicas paternas.',
          '<strong>B. Criterios de Laboratorio (Confirmación en 2 Tomas):</strong>',
          'Deben ser positivos en al menos <strong>dos ocasiones separadas por un intervalo mínimo de 12 semanas</strong> (para descartar anticuerpos transitorios post-infecciosos):',
          '• <strong>Anticoagulante Lúpico (AL)</strong> detectado en plasma según guías de la ISTH (es el marcador con mayor riesgo trombótico relativo).',
          '• <strong>Anticuerpos Anticardiolipina (aCL)</strong> de isotipo IgG o IgM a títulos moderados o altos (> 40 GPL o MPL, o > percentil 99).',
          '• <strong>Anticuerpos Anti-Beta-2-Glicoproteína I</strong> de isotipo IgG o IgM a títulos elevados (> percentil 99).'
        ]
      },
      {
        subhead: '3. Manejo Farmacológico de la Trombosis: La Regla de los Cumarínicos',
        paragraphs: [
          '• <strong>Trombosis Venosa Profunda / TEP:</strong> Se inicia tratamiento agudo con Heparina (HBPM o HNF) y se traslapa a <strong>Anticoagulantes Cumarínicos orales (Acenocumarol o Warfarina) con meta de INR entre 2.0 y 3.0</strong>.',
          '<em>Duración:</em> La anticoagulación en SAF trombótico debe mantenerse de <strong>forma INDEFINIDA</strong> (de por vida), ya que el riesgo de retrombosis tras suspender el fármaco supera el 50% en los primeros dos años.',
          '• <strong>Trombosis Arterial (ACV isquémico / infarto):</strong> Anticoagulación con meta de INR 2.0 a 3.0 (o INR 3.0 a 4.0 según guías), o asociación de antagonista de vitamina K (INR 2-3) más Aspirina 100 mg/día.',
          '<strong>ALERTA DE SEGURIDAD CRÍTICA EUNACOM (Ensayo TRAPS):</strong> Los <strong>Anticoagulantes Orales Directos (DOACs: Rivaroxabán, Apixabán, Dabigatrán) están CONTRAINDICADOS en pacientes con SAF de alta carga trombogénica o triple positividad</strong> (AL + aCL + anti-beta2GPI). Han demostrado una tasa inaceptablemente alta de eventos trombóticos arteriales recurrentes (ACV, infarto) en comparación con los cumarínicos tradicionales controlados con INR.'
        ]
      },
      {
        subhead: '4. Manejo del SAF Obstétrico durante el Embarazo',
        paragraphs: [
          'La meta es prevenir la pérdida gestacional y la preeclampsia, garantizando un feto a término:',
          '• <strong>Paciente con SAF Obstétrico Exclusivo (sin antecedentes de trombosis vascular previa):</strong>',
          '1. <strong>Ácido Acetilsalicílico (AAS) a dosis bajas (100 mg/día oral)</strong>: Iniciado de forma ideal en período preconcepcional o tan pronto se confirme la prueba de embarazo.',
          '2. <strong>Heparina de Bajo Peso Molecular a dosis profiláctica (Enoxaparina 40 mg/día SC)</strong>: Iniciada inmediatamente al confirmar saco gestacional intrauterino y suspendida 12-24 horas antes del parto programado. Se reanuda en el puerperio durante <strong>6 semanas postparto</strong>.',
          '<em>Nota vital:</em> Los anticoagulantes cumarínicos orales (warfarina/acenocumarol) son <strong>teratogénicos (embriopatía por warfarina)</strong> entre las semanas 6 y 12 y están <strong>absolutamente contraindicados en el embarazo</strong>.',
          '• <strong>Paciente con SAF y Antecedente de Trombosis Vascular Previa:</strong>',
          'AAS 100 mg/día + <strong>HBPM a dosis TERAPÉUTICA plena (Enoxaparina 1 mg/kg cada 12 horas SC)</strong> durante todo el embarazo, reanudando cumarínicos en el puerperio (la warfarina y el acenocumarol son compatibles con la lactancia).'
        ]
      },
      {
        subhead: '5. Síndrome Antifosfolípido Catastrófico (Síndrome de Asherson)',
        paragraphs: [
          'Es una variante hiperaguda y potencialmente mortal (< 1% de los casos de SAF) caracterizada por una tormenta de oclusiones trombóticas microvasculares que causan falla multiorgánica rápida.',
          '<strong>Criterios Diagnósticos:</strong> Compromiso trombótico simultáneo de <strong>≥ 3 órganos o tejidos en menos de 1 semana</strong>, confirmación histopatológica de oclusión microvascular trombótica en al menos un órgano, y confirmación serológica de anticuerpos antifosfolípidos.',
          'Órganos afectados: Falla renal aguda (70%), distrés respiratorio por microtrombosis pulmonar / hemorragia alveolar, encefalopatía, necrosis miocárdica e isquemia cutánea masiva. Suele gatillarse por infecciones o cirugías.',
          '<strong>Manejo de Urgencia en UCI:</strong> Terapia combinada agresiva multimodal inmediata: <strong>1) Heparina no fraccionada endovenosa a dosis anticoagulante plena; 2) Pulsos de Metilprednisolona (1 g/día EV x 3 días); y 3) Plasmaféresis y/o Inmunoglobulina Endovenosa (IGEV)</strong>. Si es refractario se asocia Rituximab o Eculizumab (anti-C5).'
        ]
      }
    ],
    table: {
      title: 'Criterios Clasificatorios de Sydney para Síndrome Antifosfolípido (SAF)',
      headers: ['Categoría', 'Criterios Específicos', 'Condición Mandatoria'],
      rows: [
        ['Criterio Clínico: Trombosis', '≥ 1 episodio de trombosis arterial, venosa o microvascular en cualquier tejido', 'Confirmada objetivamente por imagen o biopsia sin vasculitis'],
        ['Criterio Clínico: Obstétrico 1', '≥ 1 muerte fetal tardía inexplicable de feto normal a partir de las 10 semanas', 'Morfología fetal normal por ecografía o autopsia'],
        ['Criterio Clínico: Obstétrico 2', '≥ 1 parto prematuro de recién nacido normal antes de la semana 34', 'Debido a preeclampsia severa, eclampsia o insuficiencia placentaria'],
        ['Criterio Clínico: Obstétrico 3', '≥ 3 abortos espontáneos consecutivos inexplicados antes de la semana 10', 'Descartadas causas anatómicas, endocrinas o cromosómicas'],
        ['Criterio de Laboratorio 1', 'Anticoagulante Lúpico (AL) positivo en plasma según guías ISTH', 'Confirmar en ≥ 2 tomas con ≥ 12 semanas de diferencia'],
        ['Criterio de Laboratorio 2', 'Anticuerpos Anticardiolipina (aCL) IgG o IgM a títulos moderados/altos (>40 U)', 'Confirmar en ≥ 2 tomas con ≥ 12 semanas de diferencia'],
        ['Criterio de Laboratorio 3', 'Anticuerpos Anti-Beta-2-Glicoproteína I IgG o IgM en títulos > percentil 99', 'Confirmar en ≥ 2 tomas con ≥ 12 semanas de diferencia']
      ]
    },
    severityTable: {
      title: 'Estratificación Terapéutica en SAF según Escenario Clínico',
      headers: ['Escenario Clínico', 'Objetivo Terapéutico', 'Fármaco de Elección', 'Duración / Observación'],
      rows: [
        ['Primer evento trombótico venoso', 'Prevención secundaria de TVP/TEP', 'Acenocumarol o Warfarina (meta INR 2.0 – 3.0)', 'Indefinida (de por vida); DOACs no recomendados'],
        ['Trombosis arterial (ej. ACV)', 'Prevención secundaria de infarto cerebral', 'Cumarínicos (INR 2-3) + AAS 100 mg/d o INR 3-4', 'Indefinida; control estricto de FRCV'],
        ['SAF obstétrico sin trombosis previa', 'Prevención de pérdida fetal y preeclampsia', 'AAS 100 mg/d + HBPM profiláctica (Enoxaparina 40mg/d SC)', 'Desde saco gestacional hasta 6 semanas postparto'],
        ['SAF obstétrico con trombosis previa', 'Prevención fetal y trombosis materna', 'AAS 100 mg/d + HBPM dosis terapéutica (1 mg/kg c/12h SC)', 'Todo el embarazo; volver a cumarínicos postparto'],
        ['SAF Catastrófico (Asherson)', 'Rescate vital de falla multiorgánica', 'Heparina EV + Pulsos Metilprednisolona + Plasmaféresis / IGEV', 'UCI de urgencia; mortalidad > 30-50%']
      ]
    },
    treatmentTable: {
      title: 'Monitoreo y Consideraciones Farmacológicas Críticas en SAF',
      headers: ['Fármaco', 'Vía y Dosis Habitual', 'Monitoreo de Laboratorio', 'Reglas de Seguridad EUNACOM'],
      rows: [
        ['Acenocumarol / Warfarina', 'Oral, ajustada a INR', 'INR mensual (Meta 2.0 a 3.0)', 'Teratogénicos: suspender antes de semana 6 de embarazo'],
        ['Enoxaparina (HBPM)', 'Subcutánea (40mg/d o 1mg/kg c/12h)', 'Recuento de plaquetas (riesgo TIH) y antifactor Xa si ERC', 'No requiere monitoreo de rutina de coagulación; segura en gestación'],
        ['Ácido Acetilsalicílico', '100 mg / día oral', 'Clínico (tolerancia digestiva)', 'Iniciar preconcepcional en mujeres con pérdidas previas'],
        ['DOACs (Rivaroxabán/Apixabán)', 'Oral dosis fija', 'No disponible en rutina', 'CONTRAINDICADOS en SAF con triple positividad por falla arterial']
      ]
    },
    vignette: 'Mujer de 29 años, cursando embarazo de 8 semanas confirmado por ecografía con embrión vivo y latidos cardiofetales presentes. Consulta en policlínico de alto riesgo obstétrico. Sus antecedentes revelan 3 abortos espontáneos consecutivos del primer trimestre (a las 7, 8 y 9 semanas) en los últimos 3 años, sin antecedentes de trombosis venosa ni arterial. El estudio inmunológico solicitado hace 3 meses mostró Anticoagulante Lúpico positivo y anticuerpos anticardiolipina IgG en 58 GPL (positivo alto). Se repitieron los exámenes a las 14 semanas de intervalo, confirmándose la positividad persistente de ambos marcadores.',
    explicacion: 'La paciente cumple estrictamente los criterios clasificatorios de Sydney para Síndrome Antifosfolípido Obstétrico: criterio clínico (≥ 3 abortos consecutivos < 10 semanas) más criterio de laboratorio confirmado en dos oportunidades separadas por más de 12 semanas (anticoagulante lúpico y anticardiolipina IgG > 40). El manejo de elección para lograr un embarazo a término exitoso y prevenir la preeclampsia es la combinación de Ácido Acetilsalicílico a dosis bajas (100 mg/día) asociado a Heparina de Bajo Peso Molecular a dosis profiláctica (Enoxaparina 40 mg/día subcutánea), manteniéndose la HBPM hasta 6 semanas postparto.',
    keyPoints: [
      'El SAF requiere al menos 1 criterio clínico (trombosis o morbilidad obstétrica) y 1 de laboratorio.',
      'Los anticuerpos deben confirmarse en al menos 2 ocasiones separadas por un mínimo de 12 semanas.',
      'El Anticoagulante Lúpico alarga el TTPK in vitro, pero es el marcador de mayor riesgo trombótico in vivo.',
      'En trombosis venosa por SAF, el tratamiento de elección es Acenocumarol o Warfarina (INR 2.0 a 3.0) de por vida.',
      'Los DOACs (Rivaroxabán/Apixabán) están CONTRAINDICADOS en pacientes con SAF de triple positividad.',
      'En SAF obstétrico sin trombosis previa, el tratamiento es AAS 100 mg/día + HBPM profiláctica (Enoxaparina 40 mg/d).',
      'Los cumarínicos son teratogénicos y están absolutamente contraindicados durante el embarazo.',
      'El SAF Catastrófico cursa con trombosis de ≥ 3 órganos en < 1 semana y requiere Heparina + Corticoides + Plasmaféresis/IGEV.'
    ],
    questions: [
      {
        stem: 'Mujer de 31 años con antecedente de trombosis venosa profunda iliofemoral derecha hace 2 años y dos pérdidas reproductivas previas es diagnosticada de Síndrome Antifosfolípido con triple positividad serológica (anticoagulante lúpico, anticardiolipinas y anti-beta-2-glicoproteína I positivos confirmados). Actualmente consulta a control hematológico. ¿Cuál es el tratamiento antitrombótico a largo plazo recomendado?',
        options: [
          { id: 'A', text: 'Rivaroxabán 20 mg al día oral en monoterapia' },
          { id: 'B', text: 'Antagonistas de vitamina K (Acenocumarol o Warfarina) con meta de INR entre 2.0 y 3.0 indefinido' },
          { id: 'C', text: 'Ácido acetilsalicílico 100 mg al día en monoterapia' },
          { id: 'D', text: 'Apixabán 5 mg cada 12 horas por 6 meses y suspender' },
          { id: 'E', text: 'Dabigatrán 150 mg cada 12 horas asociado a clopidogrel' }
        ],
        correcta: 'B',
        explicacion: 'En pacientes con Síndrome Antifosfolípido trombótico (y en especial con triple positividad serológica), el tratamiento estándar de oro a largo plazo es la anticoagulación oral indefinida con antagonistas de vitamina K (Acenocumarol o Warfarina) con meta de INR entre 2.0 y 3.0. Los anticoagulantes orales directos (DOACs como rivaroxabán o apixabán) están formalmente contraindicados debido al ensayo TRAPS, que demostró un incremento inaceptable de trombosis arteriales recurrentes.',
        recTag: 'EUNACOM 2017 · Q#41'
      },
      {
        stem: 'Mujer de 30 años con antecedente de dos abortos espontáneos tempranos y una muerte fetal intrauterina a las 24 semanas presenta confirmación de Síndrome Antifosfolípido mediante anticardiolipinas IgG positivas a títulos altos en dos determinaciones separadas por 14 semanas. Actualmente consulta con 6 semanas de gestación confirmada. No tiene antecedentes de trombosis venosa ni arterial. ¿Cuál es el esquema farmacológico indicado para el manejo de su embarazo?',
        options: [
          { id: 'A', text: 'Warfarina ajustada a INR 2.0 – 3.0 durante todo el embarazo' },
          { id: 'B', text: 'Ácido acetilsalicílico 100 mg al día más Enoxaparina 40 mg al día subcutánea' },
          { id: 'C', text: 'Prednisona 40 mg al día vía oral sin anticoagulantes' },
          { id: 'D', text: 'Reposo absoluto en cama sin fármacos antitrombóticos' },
          { id: 'E', text: 'Inmunoglobulina endovenosa mensual exclusiva' }
        ],
        correcta: 'B',
        explicacion: 'En el Síndrome Antifosfolípido obstétrico (sin antecedente de trombosis vascular previa), el esquema terapéutico estándar para asegurar la viabilidad gestacional y prevenir la pérdida fetal es la combinación sinérgica de Ácido Acetilsalicílico a dosis bajas (100 mg/día) asociado a Heparina de Bajo Peso Molecular a dosis profiláctica (Enoxaparina 40 mg/día SC), manteniéndose la heparina hasta 6 semanas postparto. La warfarina está contraindicada en la gestación por teratogenia.',
        recTag: 'EUNACOM 2019 · Q#27'
      },
      {
        stem: 'Hombre de 35 años sin antecedentes mórbidos ingresa por tromboembolismo pulmonar segmentario agudo no masivo. En sus exámenes preoperatorios de hemostasia destaca un tiempo de protrombina (TP) normal y un tiempo de tromboplastina parcial activada (TTPK) prolongado (68 segundos, control 30 s). La prueba de mezclas con plasma normal no corrige el TTPK, pero este se normaliza completamente al agregar exceso de fosfolípidos a la muestra. ¿Cuál es la explicación biológica de este hallazgo de laboratorio?',
        options: [
          { id: 'A', text: 'Déficit congénito severo de Factor VIII (Hemofilia A)' },
          { id: 'B', text: 'Presencia de Anticoagulante Lúpico circulante' },
          { id: 'C', text: 'Contaminación inadvertida de la muestra con heparina no fraccionada' },
          { id: 'D', text: 'Presencia de anticuerpos inhibidores específicos del Factor IX' },
          { id: 'E', text: 'Déficit severo de Factor de von Willebrand tipo 3' }
        ],
        correcta: 'B',
        explicacion: 'La prolongación del TTPK que no corrige con plasma normal (descartando déficit de factores de la vía intrínseca) pero que corrige al añadir un exceso de fosfolípidos exógenos demuestra la presencia de un inhibidor dependiente de fosfolípidos, fenómeno patognomónico del Anticoagulante Lúpico. Representa la paradoja del SAF: alarga los tiempos de coagulación in vitro en el laboratorio pero produce trombosis in vivo.',
        recTag: 'EUNACOM 2022 · Q#11'
      },
      {
        stem: '¿Cuál de los siguientes criterios obstétricos clasifica formalmente como criterio clínico para Síndrome Antifosfolípido según los criterios internacionales de Sydney?',
        options: [
          { id: 'A', text: 'Un único aborto espontáneo a las 6 semanas de gestación' },
          { id: 'B', text: 'Una muerte fetal inexplicable de feto morfológicamente normal a las 22 semanas' },
          { id: 'C', text: 'Parto prematuro a las 36 semanas secundario a rotura prematura de membranas' },
          { id: 'D', text: 'Dos pérdidas gestacionales del primer trimestre no consecutivas' },
          { id: 'E', text: 'Embarazo ectópico tubario intervenido quirúrgicamente' }
        ],
        correcta: 'B',
        explicacion: 'Los criterios de Sydney definen tres escenarios de morbilidad obstétrica en SAF: 1) Una o más muertes inexplicables de fetos morfológicamente normales a partir de las 10 semanas de gestación; 2) Uno o más partos prematuros de neonatos normales antes de las 34 semanas debido a preeclampsia severa, eclampsia o insuficiencia placentaria; y 3) Tres o más abortos espontáneos consecutivos inexplicados antes de las 10 semanas.',
        recTag: 'EUNACOM 2024 · Q#36'
      }
    ]
  },

  {
    id: 'reuma-12', classId: 'reuma-12', tier: 3,
    blockNum: 3, blockName: 'Esclerosis Sistémica, Miopatías Inflamatorias y Síndromes Autoinmunes',
    topicLabel: '9.12',
    title: 'Esclerosis Sistémica: Cutánea Difusa (Anti-Scl-70) vs Limitada / CREST (Anti-Centrómero) y Crisis Renal',
    perfilCode: '1.05.1.004', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica · Derivación prioritaria a reumatología y neumología',
    reconstrucciones: 'EUNACOM 2018 Q#11 · EUNACOM 2020 Q#23 · EUNACOM 2022 Q#39 · EUNACOM 2023 Q#45',
    frecuencia: 'Alta · Patología del tejido conectivo con complicaciones viscerales y renales críticas',
    svg: null, algoTitle: 'Diagnóstico Diferencial y Algoritmo de Manejo en Esclerosis Sistémica',
    diagram: flow('Algoritmo de Esclerosis Sistémica', [
      { k: 'box', t: 'Sospecha de Esclerosis Sistémica (Fenómeno de Raynaud + Esclerodactilia)', s: 'Edema digital en salchicha (puffy fingers) · Engrosamiento cutáneo · Capilaroscopía patológica', type: 'acc' },
      { k: 'split', q: 'Extensión del Engrosamiento Cutáneo y Autoanticuerpos ENA', s: 'Clasificación de LeRoy en los dos subtipos fundamentales',
        ll: 'Cutánea Difusa (Proximal a codos/tronco)',
        left: { t: 'Esclerosis Sistémica Difusa (EScd)', s: 'Anti-Scl-70 (Topoisomerasa I) · Riesgo de Fibrosis Pulmonar (EPID) y Crisis Renal Esclerodérmica', type: 'crit' },
        rl: 'Cutánea Limitada (Distal a codos/cara)',
        right: { t: 'Síndrome de CREST (EScl)', s: 'Anticuerpos Anticentrómero (ACA) · Calcinosis, Raynaud, Esófago, Sclerodactilia, Telangiectasias · HTP', type: 'dec' }
      },
      { k: 'box', t: 'Emergencia Vital: Crisis Renal Esclerodérmica (Hiperreninémica)', s: 'Hipertensión severa + Falla renal aguda + Microangiopatía · TRATAMIENTO DE ELECCIÓN: IECA (Captopril / Enalapril)', type: 'crit' },
      { k: 'box', t: 'Regla de Oro en Corticoides: Evitar dosis > 15 mg/día', s: 'Las dosis altas de corticoides son el principal gatillante de crisis renal esclerodérmica', type: 'warn' }
    ]),
    contexto: 'La Esclerosis Sistémica (Esclerodermia) es una conectivopatía caracterizada por vasculopatía obliterante y fibrosis cutánea y visceral. En EUNACOM es imprescindible dominar el diagnóstico diferencial entre la forma difusa (Anti-Scl-70, fibrosis pulmonar, crisis renal) y la limitada o síndrome de CREST (anticentrómero, HTP tardía), así como el manejo de urgencia de la crisis renal esclerodérmica con IECA.',
    contentSections: [
      {
        subhead: '1. Fisiopatología: Tríada de Vasculopatía, Autoinmunidad y Fibrosis',
        paragraphs: [
          'La esclerosis sistémica resulta de la convergencia patogénica de tres mecanismos:',
          '1. <strong>Daño endotelial y vasculopatía obliterante:</strong> Apoptosis endotelial precoz con proliferación intimal concéntrica en arterias pequeñas y arteriolas, pérdida de capilares (demostrable en capilaroscopía) y vasoespasmo grave recurrente (Fenómeno de Raynaud).',
          '2. <strong>Autoinmunidad celular y humoral:</strong> Linfocitos T y macrófagos activados secretan citoquinas profibróticas (<strong>TGF-beta, IL-4, IL-13, PDGF</strong>) y linfocitos B generan autoanticuerpos altamente específicos (Anti-Scl-70, Anticentrómero, Anti-ARN polimerasa III).',
          '3. <strong>Fibrosis tisular generalizada:</strong> Los fibroblastos se transforman constitutivamente en miofibroblastos hiperactivos resistentes a la apoptosis, depositando colágeno tipo I y III masivo en la dermis, pulmón, riñón, miocardio y tubo digestivo.'
        ]
      },
      {
        subhead: '2. Clasificación Clínica Comparativa: Difusa vs Limitada (CREST)',
        paragraphs: [
          'La clasificación de LeRoy divide la enfermedad según la extensión del engrosamiento cutáneo:',
          '<strong>A. Esclerosis Sistémica Cutánea Difusa (EScd):</strong>',
          '• <strong>Extensión Cutánea:</strong> Afecta piel <strong>proximal a codos y rodillas, comprometiendo tronco y abdomen</strong> además de las extremidades distales y cara. Fase edematosa inicial (dedos hinchados / <em>puffy fingers</em>) que progresa rápidamente a induración y atrofia cutánea en meses.',
          '• <strong>Fenómeno de Raynaud:</strong> Aparece de forma simultánea o poco tiempo antes del compromiso cutáneo (< 1 año).',
          '• <strong>Compromiso Visceral Temprano y Grave:</strong>',
          '1. <strong>Enfermedad Pulmonar Intersticial Difusa (EPID):</strong> Fibrosis pulmonar con patrón de neumonía intersticial no específica (NINE) o usual (NIU). Es la <strong>primera causa de muerte</strong> en esclerodermia.',
          '2. <strong>Crisis Renal Esclerodérmica:</strong> Hipertensión arterial acelerada y falla renal.',
          '3. Miocardiopatía fibrótica con arritmias y pericarditis.',
          '• <strong>Autoanticuerpo:</strong> <strong>Anti-Scl-70 (Anti-Topoisomerasa I)</strong> (positivo en 30-40%; patrón nucleolar en ANA). Se asocia fuertemente a fibrosis pulmonar grave. Los anticuerpos <strong>Anti-ARN Polimerasa III</strong> se asocian al mayor riesgo de Crisis Renal Esclerodérmica.',
          '<strong>B. Esclerosis Sistémica Cutánea Limitada (EScl / Síndrome de CREST):</strong>',
          '• <strong>Extensión Cutánea:</strong> Engrosamiento cutáneo <strong>restringido a manos, pies, antebrazos distales y cara</strong>, con <strong>RESPETO ESTRICTO de tronco, abdomen y muslos</strong>.',
          '• <strong>Fenómeno de Raynaud:</strong> Precede por muchos años o décadas al inicio de los cambios cutáneos.',
          '• <strong>Acrónimo del Síndrome de CREST:</strong>',
          '• <strong>C:</strong> <em>Calcinosis cutis</em> (depósitos subcutáneos de sales de calcio indoloros o dolorosos que pueden ulcerar en pulpejos).',
          '• <strong>R:</strong> <em>Raynaud</em> severo trifásico.',
          '• <strong>E:</strong> <em>Esofagopatía</em> (dismotilidad por atrofia del músculo liso en dos tercios distales del esófago con reflujo severo, esofagitis, estenosis péptica y disfagia a sólidos).',
          '• <strong>S:</strong> <em>Sclerodactilia</em> (piel brillante, engrosada y tirante en dedos con contractura en flexión y resorción de pulpejos óseos acroosteólisis).',
          '• <strong>T:</strong> <em>Telangiectasias</em> múltiples (en cara, labios, lengua y palmas).',
          '• <strong>Compromiso Visceral Tardío:</strong> <strong>Hipertensión Arterial Pulmonar (HTP Grupo 1)</strong> sin fibrosis pulmonar significativa. Aparece tras 10 a 15 años de evolución y es la causa de muerte más frecuente en este subtipo.',
          '• <strong>Autoanticuerpo:</strong> <strong>Anticuerpos Anticentrómero (ACA)</strong> (positivo en 70-80%; patrón anticentrómero en ANA).'
        ]
      },
      {
        subhead: '3. Crisis Renal Esclerodérmica: Urgencia Vital y Regla de los IECA',
        paragraphs: [
          'Es una complicación catastrófica que afecta al 10-15% de los pacientes con forma cutánea difusa (especialmente con Anti-ARN polimerasa III positivo):',
          '<strong>Fisiopatología:</strong> Vasoconstricción arterial renal intensa unida a hiperplasia miointimal concéntrica en <em>\"capas de cebolla\"</em> de las arterias interlobulillares, lo que induce isquemia glomerular masiva e hiperactivación extrema del sistema renina-angiotensina-aldosterona (SRAA).',
          '<strong>Clínica de Presentación:</strong>',
          '• <strong>Hipertensión arterial maligna / acelerada de inicio brusco</strong> (PA > 180/110 mmHg). <em>Nota:</em> Hasta un 10% puede ser normotensa.',
          '• Falla renal aguda oligúrica con elevación acelerada de creatinina.',
          '• Anemia hemolítica microangiopática con esquistocitos y plaquetopenia de consumo.',
          '• Encefalopatía hipertensiva, edema pulmonar agudo o cefalea intensa.',
          '<strong>TRATAMIENTO DE ELECCIÓN INMEDIATO EUNACOM:</strong>',
          'El tratamiento indiscutido es la administración inmediata de <strong>Inhibidores de la Enzima Convertidora de Angiotensina (IECA)</strong>, preferentemente <strong>Captopril por vía oral</strong> (acción corta, iniciando a 6.25-12.5 mg c/8h y titulando rápidamente hasta 50 mg c/8h) o Enalapril.',
          'Los IECA bloquean la vasoconstricción renal mediada por angiotensina II y salvan la función renal, reduciendo la mortalidad de 90% a menos de 20%. No suspender el IECA aunque la creatinina aumente levemente al inicio.',
          '<strong>REGLA DE ORO DE PROHIBICIÓN EN ESCLERODERMIA:</strong> El uso de <strong>Corticoides a dosis moderadas o altas (Prednisona > 15 mg/día) está CONTRAINDICADO</strong> en la esclerosis sistémica difusa, ya que es el principal factor desencadenante yatrogénico demostrado de Crisis Renal Esclerodérmica.'
        ]
      },
      {
        subhead: '4. Manejo Terapéutico Específico por Órgano Comprometido',
        paragraphs: [
          '• <strong>Compromiso Cutáneo:</strong> Metotrexato oral o subcutáneo (15-20 mg/semana).',
          '• <strong>Enfermedad Pulmonar Intersticial (EPID):</strong> Tratamiento de elección con <strong>Micofenolato Mofetilo (2 a 3 g/día)</strong> o Ciclofosfamida EV; en fibrosis progresiva se asocia el antifibrótico <strong>Nintedanib (150 mg c/12h oral)</strong> o Tocilizumab.',
          '• <strong>Hipertensión Pulmonar:</strong> Monitoreo anual obligatorio con ecocardiograma transtorácico. Confirmación por cateterismo cardíaco derecho. Tratamiento con antagonistas del receptor de endotelina (Bosentán, Macitentán) e inhibidores de PDE-5 (Sildenafil).',
          '• <strong>Compromiso Digestivo:</strong> IBP a dosis altas continuas (Omeprazol 40 mg c/12h), proquinéticos (Domperidona) y antibióticos cíclicos para sobrecrecimiento bacteriano intestinal (SIBO).'
        ]
      }
    ],
    table: {
      title: 'Diferencias Cardinales: Esclerosis Sistémica Cutánea Difusa vs Limitada (CREST)',
      headers: ['Característica', 'Forma Cutánea Difusa (EScd)', 'Forma Cutánea Limitada (CREST / EScl)'],
      rows: [
        ['Extensión cutánea', 'Piel proximal a codos/rodillas, tronco y abdomen', 'Restringida a manos, pies, antebrazos distales y cara'],
        ['Fenómeno de Raynaud', 'Inicio simultáneo o poco antes (< 1 año)', 'Precede por muchos años o décadas al daño cutáneo'],
        ['Autoanticuerpo específico', 'Anti-Scl-70 (Topoisomerasa I) y Anti-ARN Pol III', 'Anticuerpos Anticentrómero (ACA) (> 70-80%)'],
        ['Patrón ANA en IFI', 'Patrón Nucleolar', 'Patrón Anticentrómero'],
        ['Afección pulmonar típica', 'Fibrosis Pulmonar Intersticial precoz (EPID)', 'Hipertensión Arterial Pulmonar tardía (HTP Grupo 1)'],
        ['Complicación renal', 'Crisis Renal Esclerodérmica (10-15%)', 'Excepcional / Muy rara'],
        ['Calcinosis y Telangiectasias', 'Poco frecuentes o leves', 'Muy prominentes y extensas (componente CREST)'],
        ['Pronóstico global', 'Más sombrío; mayor mortalidad temprana', 'Mejor sobrevida a mediano plazo; riesgo de HTP tardía']
      ]
    },
    severityTable: {
      title: 'Factores de Riesgo y Protocolo de Alerta de Crisis Renal Esclerodérmica',
      headers: ['Factor de Riesgo / Signo de Alarma', 'Hallazgo Clínico o Serológico', 'Conducta Médica Inmediata'],
      rows: [
        ['Uso de Corticoides en Dosis Altas', 'Prednisona > 15 mg/día oral en forma difusa', 'Evitar dosis altas; monitoreo estricto de PA ambulatoria'],
        ['Serología de Alto Riesgo', 'Anticuerpos Anti-ARN Polimerasa III positivos', 'Auto-monitoreo diario de presión arterial en domicilio'],
        ['Alza Tensional Aguda', 'PA ≥ 140/90 mmHg o incremento > 30 mmHg de basal', 'Iniciar inmediatamente IECA oral (Captopril); no esperar falla renal'],
        ['Falla Renal y Microangiopatía', 'Creatinina en alza + esquistocitos + trombocitopenia', 'Hospitalización urgente en UCI, titulación agresiva de IECA']
      ]
    },
    treatmentTable: {
      title: 'Tratamiento Específico por Órgano Blanco en Esclerosis Sistémica',
      headers: ['Órgano Comprometido', 'Manifestación Específica', 'Fármaco de Primera Elección', 'Alternativa / Coadyuvante'],
      rows: [
        ['Crisis Renal Esclerodérmica', 'Hipertensión maligna + falla renal', 'IECA oral (Captopril 12.5-50mg c/8h o Enalapril)', 'Bloqueadores canales de calcio o nitroprusiato'],
        ['Pulmón (EPID / Fibrosis)', 'Tos seca, disnea, patrón NINE en TAC', 'Micofenolato Mofetilo (2 – 3 g/día oral)', 'Nintedanib 150mg c/12h o Ciclofosfamida EV'],
        ['Pulmón (Hipertensión Arterial)', 'Disnea, PSAP > 35 mmHg en eco, cateterismo', 'Inhibidor PDE-5 (Sildenafil) + Antagonista Endotelina', 'Prostaciclinas parenterales si clase funcional IV'],
        ['Tubo Digestivo', 'Reflujo gastroesofágico severo y pirosis', 'IBP a dosis dobles (Omeprazol 40mg c/12h)', 'Proquinéticos (Domperidona) y cabecera elevada'],
        ['Piel (Esclerosis progresiva)', 'Induración cutánea difusa progresiva', 'Metotrexato 15 – 20 mg / semana oral o SC', 'Micofenolato o fototerapia']
      ]
    },
    vignette: 'Mujer de 54 años con diagnóstico de esclerosis sistémica cutánea difusa diagnosticada hace 14 meses (Anti-Scl-70 positivo), en tratamiento con metotrexato y prednisona 20 mg/día por artralgias severas. Es traída a urgencias por cefalea holocraneana intensa, visión borrosa y ortopnea de 24 horas de evolución. Al examen físico se constata PA 210/125 mmHg, FC 98 lpm, fondo de ojo con hemorragias en llama y exudados algodonosos. Piel indurada en tronco y extremidades. Exámenes: creatinina plasmática 3.2 mg/dL (basal de 0.8 hace 1 mes), nitrógeno ureico 55 mg/dL. El frotis sanguíneo evidencia abundantes esquistocitos (3%), plaquetas 82.000/mm³ y LDH marcadamente elevada.',
    explicacion: 'La paciente presenta una Crisis Renal Esclerodérmica clásica (emergencia hipertensiva hiperreninémica con falla renal aguda oligoanúrica y anemia hemolítica microangiopática). El uso de prednisona > 15 mg/día fue el factor desencadenante directo. El tratamiento de urgencia indiscutido que salva la vida y la función renal de la paciente es la administración inmediata de un inhibidor de la ECA, de elección Captopril oral a dosis tituladas rápidamente crecientes. Los corticoides deben suspenderse de inmediato.',
    keyPoints: [
      'La Esclerosis Difusa presenta afección cutánea proximal al codo y tronco, Anti-Scl-70 y alto riesgo de EPID y crisis renal.',
      'La Esclerosis Limitada (CREST) se asocia a Anticentrómero (ACA) y riesgo tardío de Hipertensión Pulmonar (HTP Grupo 1).',
      'El Síndrome de CREST comprende: Calcinosis, Raynaud, Esofagopatía, Sclerodactilia y Telangiectasias.',
      'La principal causa de muerte en esclerodermia difusa es la Enfermedad Pulmonar Intersticial Difusa (EPID).',
      'La Crisis Renal Esclerodérmica se manifiesta como hipertensión maligna de inicio brusco y falla renal microangiopática.',
      'El tratamiento de ELECCIÓN en la Crisis Renal Esclerodérmica son los IECA (Captopril oral a dosis plenas).',
      'REGLA DE ORO: Las dosis de Prednisona > 15 mg/día están contraindicadas en esclerosis difusa por inducir crisis renal.',
      'El tratamiento de elección de la EPID en esclerodermia es el Micofenolato Mofetilo.'
    ],
    questions: [
      {
        stem: 'Mujer de 50 años con esclerosis sistémica cutánea difusa en tratamiento con prednisona 20 mg al día por sinovitis consulta en urgencias por cefalea pulsátil intensa y mareos. Al examen físico se constata presión arterial de 205/115 mmHg. Los exámenes muestran una creatinina de 2.8 mg/dL (basal de 0.7 mg/dL) y el frotis sanguíneo revela abundantes esquistocitos con plaquetas de 85.000/mm³. ¿Cuál es el tratamiento antihipertensivo de elección indispensable para esta emergencia médica?',
        options: [
          { id: 'A', text: 'Nitroprusiato de sodio en infusión continua exclusiva' },
          { id: 'B', text: 'Inhibidor de la Enzima Convertidora de Angiotensina (Captopril oral en dosis crecientes)' },
          { id: 'C', text: 'Metilprednisolona 1 g endovenoso por 3 días' },
          { id: 'D', text: 'Amlodipino asociado a hidroclorotiazida oral' },
          { id: 'E', text: 'Furosemida 80 mg endovenosa en bolo cada 6 horas' }
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde a una Crisis Renal Esclerodérmica (urgencia hipertensiva hiperreninémica con anemia hemolítica microangiopática), gatillada con frecuencia por el uso de corticoides a dosis > 15 mg/día. El tratamiento farmacológico de elección absoluta que detiene la cascada renina-angiotensina y salva la función renal es el inicio inmediato de un IECA de acción corta como Captopril oral a dosis tituladas.',
        recTag: 'EUNACOM 2018 · Q#11'
      },
      {
        stem: 'Mujer de 45 años con antecedente de fenómeno de Raynaud severo de 10 años de evolución consulta por disfagia a sólidos, pirosis retroesternal y tirantez en la piel de los dedos. Al examen se observa engrosamiento cutáneo circunscrito a dedos de manos y antebrazos distales, calcificaciones subcutáneas periarticulares en pulpejos y telangiectasias faciales. El tronco y muslos presentan piel normal. ¿Cuál es el autoanticuerpo sérico más probablemente positivo en esta paciente?',
        options: [
          { id: 'A', text: 'Anticuerpos Anti-Scl-70 (Anti-Topoisomerasa I)' },
          { id: 'B', text: 'Anticuerpos Anticentrómero (ACA)' },
          { id: 'C', text: 'Anticuerpos Anti-dsDNA' },
          { id: 'D', text: 'Anticuerpos Anti-Sm' },
          { id: 'E', text: 'Anticuerpos Anti-Jo-1' }
        ],
        correcta: 'B',
        explicacion: 'La paciente presenta la clínica clásica del síndrome de CREST (Calcinosis, Raynaud, Esofagopatía, Sclerodactilia, Telangiectasias), que corresponde a la forma cutánea limitada de la esclerosis sistémica (engrosamiento cutáneo restringido a manos/antebrazos distales y cara). El marcador serológico característico, presente en el 70-80% de estos pacientes, son los Anticuerpos Anticentrómero (ACA).',
        recTag: 'EUNACOM 2020 · Q#23'
      },
      {
        stem: '¿Cuál es la principal causa de muerte global en los pacientes con Esclerosis Sistémica Cutánea Difusa en la actualidad?',
        options: [
          { id: 'A', text: 'Crisis renal esclerodérmica hiperreninémica' },
          { id: 'B', text: 'Enfermedad pulmonar intersticial difusa (Fibrosis Pulmonar)' },
          { id: 'C', text: 'Rotura de aneurisma aórtico torácico' },
          { id: 'D', text: 'Hemorragia digestiva alta por esofagitis péptica' },
          { id: 'E', text: 'Amiloidosis renal secundaria' }
        ],
        correcta: 'B',
        explicacion: 'Históricamente la crisis renal era la primera causa de muerte, pero tras la introducción de los IECA, la principal causa de muerte en la Esclerosis Sistémica Cutánea Difusa es la afectación pulmonar, específicamente la Enfermedad Pulmonar Intersticial Difusa (EPID / fibrosis pulmonar), seguida de la Hipertensión Arterial Pulmonar.',
        recTag: 'EUNACOM 2022 · Q#39'
      },
      {
        stem: 'Una mujer de 58 años con antecedente de esclerosis sistémica cutánea limitada (CREST) de 15 años de evolución consulta por disnea de esfuerzo rápidamente progresiva en los últimos 3 meses, sin tos ni ortopnea. El examen pulmonar es limpio sin estertores crepitantes. El ecocardiograma Doppler transtorácico revela dilatación severa de cavidades derechas y una presión sistólica de arteria pulmonar (PSAP) estimada en 65 mmHg. La tomografía computarizada de tórax de alta resolución no muestra infiltrados intersticiales ni fibrosis. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Neumonía intersticial no específica (NINE)' },
          { id: 'B', text: 'Hipertensión Arterial Pulmonar (HTP Grupo 1)' },
          { id: 'C', text: 'Insuficiencia cardíaca con fracción de eyección preservada izquierda' },
          { id: 'D', text: 'Tromboembolismo pulmonar crónico recurrente' },
          { id: 'E', text: 'Estenosis mitral reumática severa' }
        ],
        correcta: 'B',
        explicacion: 'En la esclerosis sistémica cutánea limitada (CREST), la complicación visceral tardía más temida es la Hipertensión Arterial Pulmonar (HTP Grupo 1) por vasculopatía proliferativa obliterante de las arterias pulmonares pequeñas, que ocurre en ausencia de enfermedad pulmonar intersticial significativa. Se manifiesta típicamente tras más de 10-15 años de evolución con disnea de esfuerzo progresiva y sobrecarga de cavidades derechas.',
        recTag: 'EUNACOM 2023 · Q#45'
      }
    ]
  },

  {
    id: 'reuma-13', classId: 'reuma-13', tier: 3,
    blockNum: 3, blockName: 'Esclerosis Sistémica, Miopatías Inflamatorias y Síndromes Autoinmunes',
    topicLabel: '9.13',
    title: 'Miopatías Inflamatorias Autoinmunes: Polimiositis, Dermatomiositis y Tamizaje de Cáncer Oculto',
    perfilCode: '1.11.1.020', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica · Derivación prioritaria a reumatología y oncología',
    reconstrucciones: 'EUNACOM 2017 Q#24 · EUNACOM 2019 Q#15 · EUNACOM 2022 Q#27 · EUNACOM 2024 Q#20',
    frecuencia: 'Alta · Cuadros con signos cutáneos patognomónicos y alerta oncológica crucial en el examen',
    svg: null, algoTitle: 'Algoritmo Diagnóstico en Miopatías Inflamatorias: Signos Cutáneos, Biopsia y Neoplasia',
    diagram: flow('Algoritmo de Polimiositis y Dermatomiositis', [
      { k: 'box', t: 'Debilidad Muscular Proximal Simétrica Progresiva (Cinturas Escapular y Pelviana)', s: 'Dificultad para peinarse, subir escaleras o levantarse de una silla · Respeta músculos oculares', type: 'acc' },
      { k: 'split', q: 'Presencia de Lesiones Cutáneas Patognomónicas', s: 'Diferenciación inmediata entre Dermatomiositis y Polimiositis',
        ll: 'Pápulas de Gottron y Eritema en Heliotropo',
        left: { t: 'Dermatomiositis (DM)', s: 'Lesiones violáceas en nudillos (Gottron) y párpados (Heliotropo) · Signo del chal · ALERTA: Cáncer oculto', type: 'warn' },
        rl: 'Ausencia de Lesiones Cutáneas',
        right: { t: 'Polimiositis (PM)', s: 'Debilidad muscular pura · Infiltrado endomisial CD8+ · Descartar miopatías por fármacos o tiroideas', type: 'dec' }
      },
      { k: 'box', t: 'Confirmación: CPK Elevada (10-50x VN) + Biopsia Muscular (Patrón Oro)', s: 'Resonancia muscular (edema) · Electromiografía miopática · Autoanticuerpos Anti-Jo-1, Anti-Mi-2', type: 'crit' },
      { k: 'box', t: 'REGLA DE ORO ONCOLÓGICA MANDATORIA EN ADULTOS', s: 'Tamizaje exhaustivo de Neoplasia Oculta (TAC tórax-abdomen-pelvis, mamografía, PAP/eco transvaginal, endoscopías)', type: 'crit' }
    ]),
    contexto: 'Las miopatías inflamatorias autoinmunes se manifiestan por debilidad de cinturas proximales y elevación masiva de CPK. La Dermatomiositis destaca por sus signos cutáneos patognomónicos (eritema en heliotropo y pápulas de Gottron). En el EUNACOM es un concepto capital recordar que hasta un 25-30% de las dermatomiositis en el adulto constituyen un síndrome paraneoplásico, obligando a un tamizaje tumoral exhaustivo inmediato.',
    contentSections: [
      {
        subhead: '1. Fisiopatología Comparada: Inmunidad Humoral vs Citotóxica Celular',
        paragraphs: [
          'Aunque comparten la debilidad muscular proximal, su patogenia es profundamente distinta:',
          '• <strong>Dermatomiositis (DM):</strong> Es una <strong>microangiopatía mediada por inmunocomplejos y complemento</strong>. Se produce activación de la cascada del complemento con depósito del complejo lítico de ataque a la membrana (C5b-9) en las paredes de los capilares endomisiales. Esto provoca necrosis endotelial, isquemia capilar y un patrón histopatológico característico de <strong>atrofia perifascicular</strong> con infiltrado inflamatorio perimisial y perivascular compuesto predominantemente por <strong>linfocitos B y linfocitos T CD4+</strong>.',
          '• <strong>Polimiositis (PM):</strong> Es una enfermedad por <strong>citotoxicidad celular directa mediada por linfocitos T CD8+ antígeno-específicos</strong>. Las fibras musculares expresan de forma anómala moléculas del complejo mayor de histocompatibilidad clase I (MHC-I). Los linfocitos T CD8+ y macrófagos invaden y perforan directamente las miofibras musculares no necróticas dentro del fascículo muscular (<strong>infiltrado endomisial</strong>).'
        ]
      },
      {
        subhead: '2. Cuadro Clínico Muscular y Lesiones Cutáneas Patognomónicas de la DM',
        paragraphs: [
          '<strong>Manifestaciones Musculares:</strong>',
          '• <strong>Debilidad muscular proximal, bilateral y simétrica</strong>, de curso insidioso y progresivo en semanas a meses. Compromete la cintura pelviana (dificultad para levantarse del asiento sin apoyar los brazos, subir escalones o levantarse del suelo) y escapular (dificultad para elevar los brazos, peinarse o alcanzar objetos altos).',
          '• <em>Músculos Respetados:</em> La musculatura facial y los músculos extraoculares están <strong>COMPLETAMENTE RESPETADOS</strong> (su compromiso orienta a Miastenia Gravis).',
          '• Compromiso de musculatura estriada faríngea y esofágica superior: produce <strong>disfagia orofaríngea alta, disfonía y alto riesgo de neumonía aspirativa</strong> (signo de severidad extrema).',
          '<strong>Lesiones Cutáneas Patognomónicas de la Dermatomiositis:</strong>',
          '1. <strong>Eritema en Heliotropo:</strong> Erupción eritematosa o violácea sobre los párpados superiores y región periorbitaria, con frecuencia acompañada de edema blando periorbitario (facies aborregada). Es prácticamente patognomónica.',
          '2. <strong>Pápulas de Gottron:</strong> Pápulas y placas eritematovioláceas, sobreelevadas o atróficas, localizadas simétricamente sobre el dorso de las <strong>articulaciones metacarpofalángicas (MCF) e interfalángicas (IFP e IFD)</strong>, y en superficies extensoras de codos y rodillas (signo de Gottron).',
          '3. <em>Signo del Chal y Signo en V:</em> Eritema macular violáceo confluente fotosensible en la parte posterior del cuello y hombros (chal) o en el escote anterior (V).',
          '4. <em>Manos de Mecánico:</em> Hiperqueratosis, descamación y fisuración lineal dolorosa en las caras laterales de los dedos, muy ligada al Síndrome Antisintetasa.'
        ]
      },
      {
        subhead: '3. Autoanticuerpos Específicos: Síndrome Antisintetasa',
        paragraphs: [
          '• <strong>Anti-Jo-1 (Anti-Histidil-tRNA sintetasa):</strong> Es el anticuerpo más frecuente (20-30%). Define el <strong>Síndrome Antisintetasa</strong>: miopatía inflamatoria + <strong>Enfermedad Pulmonar Intersticial Difusa (EPID) severa y rápidamente progresiva</strong> + fenómeno de Raynaud + manos de mecánico + artritis no erosiva.',
          '• <strong>Anti-Mi-2:</strong> Muy específico de dermatomiositis clásica con lesiones cutáneas extensas; se asocia a excelente respuesta a corticoides y bajo riesgo de neoplasia.',
          '• <strong>Anti-TIF-1-gamma y Anti-NXP-2:</strong> Asociados a dermatomiositis del adulto mayor con altísimo riesgo de <strong>cáncer paraneoplásico subyacente</strong>.'
        ]
      },
      {
        subhead: '4. REGLA DE ORO ONCOLÓGICA EUNACOM: Tamizaje de Neoplasia Oculta',
        paragraphs: [
          'Hasta un <strong>20% a 30% de los pacientes adultos con Dermatomiositis presentan una neoplasia maligna subyacente</strong> (la DM actúa como síndrome paraneoplásico). El riesgo es mayor en mayores de 50 años y persiste elevado durante los primeros 3 a 5 años del diagnóstico.',
          '<em>Tumores más frecuentes:</em> Cáncer de ovario, mama, pulmón, colon, próstata, páncreas y linfoma no Hodgkin.',
          '<strong>Conducta Obligatoria EUNACOM:</strong> Ante todo adulto diagnosticado de dermatomiositis es <strong>mandatorio realizar un tamizaje exhaustivo de neoplasia oculta</strong> que incluye: TAC de tórax, abdomen y pelvis con contraste, mamografía y ecografía ginecológica transvaginal con PAP en mujeres, antígeno prostático específico en hombres, sangre oculta en deposiciones / colonoscopía y endoscopía digestiva alta.'
        ]
      },
      {
        subhead: '5. Diagnóstico de Certeza y Tratamiento Inmunosupresor',
        paragraphs: [
          'Laboratorio: Elevación extrema de <strong>Creatina Fosfoquinasa (CPK)</strong> (habitualmente 10 a 50 veces sobre el límite superior normal), aldolasa, transaminasas (GOT/GPT de origen muscular) y LDH.',
          'La <strong>Resonancia Magnética muscular (secuencias STIR / T2 con supresión grasa)</strong> demuestra edema muscular inflamatorio activo y guía el sitio óptimo para la <strong>Biopsia Muscular (patrón oro)</strong>.',
          '<strong>Tratamiento:</strong>',
          '• <strong>Corticoides a Dosis Altas:</strong> <strong>Prednisona oral 1 mg/kg/día</strong> (máximo 60-80 mg/día) o <strong>Pulsos de Metilprednisolona endovenosa (1 g/día por 3 días)</strong> si hay disfagia orofaríngea o debilidad rápidamente progresiva.',
          '• <strong>FARME Ahorrador de Corticoides Precoz:</strong> Se inicia <strong>Metotrexato (15 a 25 mg/semana) o Azatioprina (2 a 3 mg/kg/día)</strong> desde el inicio para permitir el descenso posterior de corticoides.',
          '• En casos refractarios, con compromiso respiratorio ventilatorio o disfagia severa se administra <strong>Inmunoglobulina Endovenosa (IGEV 2 g/kg en 2-5 días)</strong> o Rituximab.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial: Polimiositis vs Dermatomiositis',
      headers: ['Parámetro', 'Polimiositis (PM)', 'Dermatomiositis (DM)'],
      rows: [
        ['Mecanismo inmunológico primario', 'Citotoxicidad celular directa por linfocitos T CD8+', 'Microangiopatía mediada por complemento e inmunocomplejos'],
        ['Localización del infiltrado histológico', 'Endomisial (infiltración intrafascicular de fibras)', 'Perimisial y perivascular (en tabiques conjuntivos)'],
        ['Lesión histopatológica característica', 'Invasión de miofibras no necróticas que expresan MHC-I', 'Atrofia perifascicular de las fibras musculares'],
        ['Lesiones cutáneas patognomónicas', 'AUSENTES (enfermedad muscular pura)', 'PRESENTES: Heliotropo, Gottron, signo del chal'],
        ['Asociación a neoplasia oculta', 'Leve a moderada (~10%)', 'Muy ALTA (25 – 30% en adultos mayores)'],
        ['Población más afectada', 'Adultos > 20 años; rara en niños', 'Bimodal: Forma juvenil (5-14 años) y adultos (> 50 años)']
      ]
    },
    severityTable: {
      title: 'Protocolo Obligatorio de Tamizaje Oncológico en Dermatomiositis del Adulto',
      headers: ['Estudio de Tamizaje Tumoral', 'Órganos Evaluados', 'Neoplasias Buscadas Activadas'],
      rows: [
        ['TAC Tórax, Abdomen y Pelvis con contraste', 'Parénquima pulmonar, mediastino, vísceras abdominales', 'Cáncer pulmonar, renal, pancreático, linfomas'],
        ['Mamografía bilateral y Ecografía mamaria', 'Glándula mamaria y axilas', 'Cáncer de mama'],
        ['Ecografía Ginecológica Transvaginal + PAP', 'Útero, cuello uterino y anexos ováricos', 'Cáncer de ovario (altamente asociado a DM) y endometrio'],
        ['Colonoscopía y Endoscopía Digestiva Alta', 'Mucosa colónica, gástrica y esofágica', 'Cáncer colorrectal y gástrico'],
        ['Antígeno Prostático Específico (APE)', 'Próstata en hombres mayores de 45 años', 'Cáncer prostático']
      ]
    },
    treatmentTable: {
      title: 'Esquema Farmacológico Escalonado en Miopatías Inflamatorias',
      headers: ['Fase Terapéutica', 'Fármacos y Dosificación', 'Duración Estimada', 'Criterio de Ajuste / Respuesta'],
      rows: [
        ['Fase de Inducción Aguda', 'Prednisona 1 mg/kg/día oral (o Pulsos Metilprednisolona 1g EV x 3d)', '4 a 8 semanas', 'Normalización de CPK y mejoría de fuerza muscular'],
        ['Fase de Descenso y Ahorro', 'Iniciar Metotrexato 15-25 mg/semana o Azatioprina 2-3 mg/kg/d', 'Meses 2 a 12', 'Descenso gradual de prednisona hasta ≤ 5-10 mg/d'],
        ['Manejo de Casos Refractarios', 'Inmunoglobulina Endovenosa (IGEV 2 g/kg total) o Rituximab', 'Ciclos mensuales', 'Falla de FARME o disfagia grave con riesgo aspirativo'],
        ['Rehabilitación Física', 'Kinesioterapia pasiva precoz y activa supervisada', 'Continua', 'Prevenir contracturas articulares y atrofia por desuso']
      ]
    },
    vignette: 'Mujer de 58 años sin antecedentes médicos previos consulta por cuadro de 2 meses de debilidad progresiva en hombros y muslos, refiriendo gran dificultad para subir escaleras y levantarse de la taza del baño sin ayudarse con las manos. Al examen físico presenta marcada debilidad muscular proximal (fuerza 3/5 en cuádriceps y deltoides) con fuerza distal conservada (5/5). En los párpados superiores se aprecia una coloración eritematoviolácea con edema periorbitario leve, y en el dorso de las articulaciones metacarpofalángicas de ambas manos se observan pápulas violáceas descamativas. Los exámenes muestran CPK de 4.200 U/L (normal < 170) y transaminasas marcadamente elevadas con GOT de 180 U/L y GPT de 145 U/L.',
    explicacion: 'El cuadro clínico es patognomónico de una Dermatomiositis: debilidad muscular proximal simétrica, elevación masiva de CPK (con transaminasas elevadas de origen muscular) y los dos signos cutáneos cardinales: eritema en heliotropo y pápulas de Gottron. Además de iniciar de inmediato corticoides a dosis plenas (Prednisona 1 mg/kg/día) para frenar la miositis, en una paciente de 58 años es estrictamente obligatorio realizar un tamizaje oncológico exhaustivo (TAC de tórax, abdomen y pelvis, mamografía y evaluación ginecológica) debido a la altísima asociación de dermatomiositis con neoplasia oculta subyacente (síndrome paraneoplásico).',
    keyPoints: [
      'Las miopatías inflamatorias cursan con debilidad muscular proximal simétrica y elevación masiva de CPK.',
      'Tanto la polimiositis como la dermatomiositis RESPETAN los músculos faciales y extraoculares.',
      'El eritema en heliotropo y las pápulas de Gottron son lesiones cutáneas patognomónicas de la Dermatomiositis.',
      'La histología de la dermatomiositis muestra atrofia perifascicular e infiltrado perimisial/perivascular por CD4+ y B.',
      'La polimiositis presenta infiltrado endomisial de linfocitos T CD8+ que invaden miofibras que expresan MHC-I.',
      'El anticuerpo Anti-Jo-1 define el Síndrome Antisintetasa: miositis, fibrosis pulmonar intersticial severa, Raynaud y manos de mecánico.',
      'REGLA DE ORO: Todo adulto con Dermatomiositis requiere un tamizaje exhaustivo de Neoplasia Oculta.',
      'El tratamiento de primera línea son los corticoides a dosis altas (Prednisona 1 mg/kg/día) + FARME ahorrador (MTX/Azatioprina).'
    ],
    questions: [
      {
        stem: 'Mujer de 56 años consulta por debilidad proximal en cuatro extremidades y erupción cutánea de 6 semanas. Al examen físico se aprecian pápulas eritematovioláceas sobre las articulaciones metacarpofalángicas de ambas manos (pápulas de Gottron) y coloración violácea en párpados superiores. La CPK plasmática es de 3.800 U/L. Tras iniciar tratamiento con prednisona a dosis plenas, ¿qué estudio médico complementario es INDISPENSABLE y prioritario realizar?',
        options: [
          { id: 'A', text: 'Cintigrama óseo para descartar metástasis osteoblásticas difusas' },
          { id: 'B', text: 'Tamizaje exhaustivo de neoplasia oculta mediante TAC toracoabdominal, mamografía y evaluación ginecológica' },
          { id: 'C', text: 'Punción lumbar para estudio citoquímico de líquido cefalorraquídeo' },
          { id: 'D', text: 'Cateterismo cardíaco izquierdo con coronariografía urgente' },
          { id: 'E', text: 'Biopsia de médula ósea para descartar mielofibrosis primaria' }
        ],
        correcta: 'B',
        explicacion: 'En adultos con dermatomiositis (especialmente mayores de 50 años), hasta un 25-30% de los casos corresponden a un síndrome paraneoplásico secundario a un cáncer oculto (cáncer de ovario, mama, pulmón, colon, etc.). Por tanto, además de confirmar la miopatía e iniciar inmunosupresión, es prioritario y mandatorio realizar un cribado oncológico completo e intensivo.',
        recTag: 'EUNACOM 2017 · Q#24'
      },
      {
        stem: '¿Cuál de las siguientes características anatomopatológicas e inmunohistoquímicas es típica de la biopsia muscular en una POLIMIOSITIS, permitiendo diferenciarla de la dermatomiositis?',
        options: [
          { id: 'A', text: 'Atrofia perifascicular prominente con depósito vascular de complemento C5b-9' },
          { id: 'B', text: 'Infiltrado inflamatorio endomisial compuesto por linfocitos T citotóxicos CD8+ que invaden miofibras' },
          { id: 'C', text: 'Infiltración exclusiva de eosinófilos con vasculitis necrotizante transmural' },
          { id: 'D', text: 'Depósito masivo de sustancia amiloide rojo Congo positiva en el endomisio' },
          { id: 'E', text: 'Ausencia total de células inflamatorias con degeneración grasa aislada' }
        ],
        correcta: 'B',
        explicacion: 'En la polimiositis el mecanismo inmune es una citotoxicidad celular directa mediada por linfocitos T CD8+ que infiltran el endomisio e invaden activamente miofibras no necróticas que sobreexpresan antígenos HLA clase I. En cambio, la dermatomiositis es una microangiopatía mediada por complemento/anticuerpos que produce atrofia perifascicular e infiltrado perimisial por linfocitos CD4+ y B.',
        recTag: 'EUNACOM 2019 · Q#15'
      },
      {
        stem: 'Hombre de 48 años con diagnóstico de miopatía inflamatoria presenta debilidad muscular proximal moderada y disnea de esfuerzo progresiva. La radiografía y el TAC de tórax confirman una neumopatía intersticial difusa de patrón reticular bilateral. Al examen destaca fenómeno de Raynaud, artralgias y manos con hiperqueratosis y fisuras descamativas dolorosas en los bordes laterales de los dedos (manos de mecánico). ¿Cuál es el autoanticuerpo sérico más probablemente positivo en este paciente?',
        options: [
          { id: 'A', text: 'Anticuerpos Anti-Jo-1 (Anti-histidil-tRNA sintetasa)' },
          { id: 'B', text: 'Anticuerpos Anticentrómero' },
          { id: 'C', text: 'Anticuerpos Anti-Smith' },
          { id: 'D', text: 'Anticuerpos Anti-dsDNA' },
          { id: 'E', text: 'Anticuerpos Anti-Histona' }
        ],
        correcta: 'A',
        explicacion: 'La constelación clínica de miopatía inflamatoria + enfermedad pulmonar intersticial difusa (EPID) + fenómeno de Raynaud + manos de mecánico + artritis no erosiva define el Síndrome Antisintetasa, cuyo marcador serológico patognomónico es el anticuerpo Anti-Jo-1 (anti-tRNA sintetasa).',
        recTag: 'EUNACOM 2022 · Q#27'
      },
      {
        stem: '¿Cuál de los siguientes grupos musculares se encuentra característicamente RESPETADO en la polimiositis y dermatomiositis, orientando el diagnóstico hacia Miastenia Gravis si se encuentra afectado?',
        options: [
          { id: 'A', text: 'Músculos deltoides y supraespinoso' },
          { id: 'B', text: 'Músculos psoas ilíaco y cuádriceps femoral' },
          { id: 'C', text: 'Músculos flexores profundos del cuello' },
          { id: 'D', text: 'Músculos extraoculares y palpebrales intrínsecos' },
          { id: 'E', text: 'Músculos constrictores de la faringe' }
        ],
        correcta: 'D',
        explicacion: 'Las miopatías inflamatorias autoinmunes afectan típicamente la musculatura estriada proximal de las cinturas escapular y pelviana, flexores del cuello y faringe, pero RESPETAN de forma estricta los músculos extraoculares y la musculatura facial. La presencia de ptosis palpebral fluctuante o diplopía es característica de la Miastenia Gravis, no de la polimiositis ni dermatomiositis.',
        recTag: 'EUNACOM 2024 · Q#20'
      }
    ]
  },

  {
    id: 'reuma-14', classId: 'reuma-14', tier: 2,
    blockNum: 3, blockName: 'Esclerosis Sistémica, Miopatías Inflamatorias y Síndromes Autoinmunes',
    topicLabel: '9.14',
    title: 'Fenómeno de Raynaud Primario vs Secundario y Capilaroscopía Periungueal',
    perfilCode: '1.05.1.012', dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Sin garantía GES específica · Manejo en APS con derivación a especialista si sospecha secundaria',
    reconstrucciones: 'EUNACOM 2018 Q#33 · EUNACOM 2020 Q#47 · EUNACOM 2023 Q#18',
    frecuencia: 'Alta · Motivo de consulta muy frecuente en atención primaria y clave de despistaje',
    svg: null, algoTitle: 'Diferenciación de Fenómeno de Raynaud Primario vs Secundario y Capilaroscopía',
    diagram: flow('Algoritmo de Fenómeno de Raynaud', [
      { k: 'box', t: 'Cambios de Coloración en Dedos Gatillados por Frío o Estrés', s: 'Secuencia trifásica clásica: 1) Palidez (Blanco) · 2) Cianosis (Azul) · 3) Rubor (Rojo)', type: 'acc' },
      { k: 'split', q: 'Evaluación de Signos de Alarma y Estudio Complementario', s: 'Capilaroscopía periungueal + Anticuerpos Antinucleares (ANA)',
        ll: 'Raynaud Primario (Enfermedad de Raynaud)',
        left: { t: 'Mujer joven (15-30 años) · Benigno', s: 'Simétrico · Sin necrosis/úlceras · ANA (-) · Capilaroscopía normal · Medidas térmicas + Calcioantagonistas', type: 'dec' },
        rl: 'Raynaud Secundario (Síndrome de Raynaud)',
        right: { t: 'Asociado a Conectivopatía (> 30 años)', s: 'Asimétrico · Úlceras/necrosis pulpejos · ANA (+) · Capilaroscopía patológica (megacapilares) · Derivar', type: 'crit' }
      },
      { k: 'box', t: 'Tratamiento Farmacológico de Primera Línea en Raynaud Sintomático', s: 'Calcioantagonistas dihidropiridínicos: Nifedipino oral (10 a 60 mg/día) o Amlodipino', type: 'acc' }
    ]),
    contexto: 'El fenómeno de Raynaud es un vasoespasmo paroxístico de la microvasculatura digital. En el EUNACOM el foco esencial es distinguir un Raynaud primario (benigno, funcional, sin daño estructural y con capilaroscopía normal) de un Raynaud secundario (marcador heraldo de conectivopatía autoinmune, especialmente esclerodermia, con úlceras pulpejas, ANA positivos y megacapilares en capilaroscopía).',
    contentSections: [
      {
        subhead: '1. Fisiopatología y Fases Clínicas Trifásicas Cardinales',
        paragraphs: [
          'El fenómeno de Raynaud consiste en episodios reversibles de vasoespasmo exagerado de las arterias digitales y arteriolas de manos y pies en respuesta a la exposición al frío ambiental o al estrés emocional.',
          '<strong>Las 3 Fases Clínicas Secuenciales:</strong>',
          '1. <strong>Fase Isquémica o de Palidez (Blanco):</strong> Vasoespasmo arteriolar completo con detención del flujo capilar digital. Los dedos se tornan fríos y de color blanco céreo como cera de vela, acompañándose de parestesias o adormecimiento.',
          '2. <strong>Fase Asfíctica o de Cianosis (Azul):</strong> Dilatación capilar reactiva con sangre estancada desoxigenada. Los dedos adquieren un tono azulado o violáceo.',
          '3. <strong>Fase Hiperémica o de Rubor (Rojo):</strong> Vasodilatación refleja de reperfusión tras el cese del estímulo frío. Los dedos se tornan intensamente rojos y calientes, con dolor pulsátil, tumefacción y disestesias.',
          '<em>Nota:</em> No siempre se observan las 3 fases; la presencia de la fase de palidez es mandatoria para el diagnóstico.'
        ]
      },
      {
        subhead: '2. Criterios Diferenciales: Fenómeno de Raynaud Primario vs Secundario',
        paragraphs: [
          '• <strong>Fenómeno de Raynaud Primario (Enfermedad de Raynaud):</strong> Representa el 80-90% de los casos. Comienza en mujeres jóvenes (15 a 30 años), es estrictamente <strong>bilateral y simétrico</strong>, <strong>NO produce úlceras digitales ni necrosis</strong>, no hay atrofia de pulpejos, los pulsos periféricos son normales, <strong>los ANA son negativos, la VHS es normal y la capilaroscopía es NORMAL</strong>. Evolución benigna.',
          '• <strong>Fenómeno de Raynaud Secundario:</strong> Asociado a una enfermedad autoinmune de base (Esclerosis Sistémica en > 95%, LES en 30%, Sjögren, dermatomiositis, vasculitis). Suele comenzar en mayores de 30-40 años, es <strong>asimétrico, muy doloroso</strong>, se asocia a <strong>úlceras isquémicas o cicatrices puntiformes en pulpejos (pitting scars)</strong> o gangrena digital, presenta <strong>ANA positivos y Capilaroscopía francamente PATOLÓGICA</strong>.'
        ]
      },
      {
        subhead: '3. Rol de la Capilaroscopía Periungueal y Manejo Farmacológico',
        paragraphs: [
          'La <strong>capilaroscopía periungueal</strong> es el examen no invasivo de elección para diferenciar primario de secundario. Permite observar las asas capilares del lecho de la uña con microscopio o dermatoscopio:',
          '• <em>Patrón Normal:</em> Asas capilares paralelas en forma de horquilla regulares y uniformes.',
          '• <em>Patrón Esclerodérmico (Patológico):</em> <strong>Megacapilares</strong> (asas dilatadas gigantes > 50 micras), microhemorragias periungueales en empalizada y, en fases avanzadas, <strong>zonas de pérdida capilar / avasculares</strong> y neoangiogénesis ramificada anómala.',
          '<strong>Tratamiento del Fenómeno de Raynaud:</strong>',
          '• <strong>Medidas No Farmacológicas (Obligatorias en Todos):</strong> Protección térmica rigurosa (guantes térmicos, calcetines de lana, evitar tocar agua fría), <strong>CESE ABSOLUTO DEL TABAQUISMO</strong> (la nicotina es un potente vasoconstrictor) y evitar fármacos vasoconstrictores (betabloqueadores, descongestionantes nasales adrenérgicos, ergotamina y triptanes).',
          '• <strong>Tratamiento Farmacológico de Primera Línea:</strong> <strong>Bloqueadores de los canales de calcio dihidropiridínicos</strong>, de elección <strong>Nifedipino oral</strong> (iniciar a 10-20 mg/día de liberación prolongada, titulando hasta 30-60 mg/día) o Amlodipino (5 a 10 mg/día).',
          '• Formas severas con úlceras isquémicas activas: Inhibidores de fosfodiesterasa-5 (Sildenafil oral 20-50 mg c/8h), análogos de prostaciclina endovenosa (Iloprost) o antagonistas del receptor de endotelina (Bosentán).'
        ]
      }
    ],
    table: {
      title: 'Diferencias Críticas entre Fenómeno de Raynaud Primario y Secundario',
      headers: ['Parámetro Clínico / Biológico', 'Raynaud Primario (Enfermedad)', 'Raynaud Secundario (Síndrome)'],
      rows: [
        ['Edad de inicio', 'Típicamente 15 – 30 años (mujeres jóvenes)', 'Típicamente > 30 – 40 años'],
        ['Simetría', 'Estrictamente simétrico y bilateral', 'Frecuentemente asimétrico'],
        ['Daño tisular trófico', 'AUSENTE (sin necrosis ni úlceras)', 'PRESENTE: Úlceras digitales dolorosas, cicatrices puntiformes'],
        ['Autoanticuerpos (ANA)', 'Negativos (o títulos insignificantes)', 'POSITIVOS en títulos significativos (anti-Scl70, ACA, etc.)'],
        ['Capilaroscopía periungueal', 'Normal (asas regulares en horquilla)', 'PATOLÓGICA (megacapilares, hemorragias, áreas avasculares)'],
        ['Reactantes (VHS / PCR)', 'Estrictamente normales', 'Frecuentemente elevados'],
        ['Etiología subyacente', 'Idiopático funcional', 'Esclerosis sistémica, LES, Sjögren, fármacos']
      ]
    },
    vignette: 'Mujer de 21 años, estudiante universitaria, consulta por cambios de coloración en los dedos de ambas manos cuando se expone al frío en invierno. Refiere que los dedos se tornan completamente blancos y fríos, luego azulados y finalmente enrojecidos y calientes al volver a una habitación temperada. Los episodios son simétricos en ambas manos. Al examen físico no se observan úlceras, cicatrices ni esclerodactilia, los pulsos radiales son simétricos y amplios. Los exámenes de laboratorio revelan hemograma, VHS y función renal normales, con anticuerpos antinucleares (ANA) negativos. La capilaroscopía periungueal muestra asas capilares finas y regulares sin dilataciones.',
    explicacion: 'Se trata de un Fenómeno de Raynaud Primario (Enfermedad de Raynaud): mujer joven con episodios simétricos trifásicos desencadenados por frío, ausencia total de necrosis tisular, ANA negativos y capilaroscopía periungueal normal. El manejo inicial de elección consiste en medidas generales de fotoprotección térmica (uso de guantes y ropa abrigada) y evitar vasoconstrictores. Si los síntomas son molestos o interfieren con sus actividades, se puede iniciar Nifedipino a dosis bajas.',
    keyPoints: [
      'Las 3 fases del Raynaud son: Palidez (vasoespasmo), Cianosis (estasis desoxigenada) y Rubor (reperfusión reactiva).',
      'El Raynaud Primario es simétrico, sin úlceras digitales, con ANA (-) y capilaroscopía normal.',
      'El Raynaud Secundario es asimétrico, con úlceras en pulpejos, ANA (+) y capilaroscopía con megacapilares.',
      'La capilaroscopía periungueal es el examen de elección para descartar conectivopatía subyacente.',
      'Fármaco de primera línea para el Raynaud sintomático: Calcioantagonistas dihidropiridínicos (Nifedipino oral).',
      'Están contraindicados los betabloqueadores y vasoconstrictores en pacientes con Raynaud.',
      'El cese del tabaquismo es mandatorio en todo paciente con fenómeno de Raynaud.'
    ],
    questions: [
      {
        stem: 'Mujer de 38 años consulta por dolor y cambios de coloración trifásicos en los dedos de las manos desencadenados por el frío. Al examen físico se aprecia una pequeña úlcera necrótica dolorosa en el pulpejo del tercer dedo de la mano derecha y pérdida de los pliegues cutáneos dorsales en dedos (esclerodactilia). Los ANA son positivos en dilución 1:320. ¿Qué examen de consultorio o imagen permite evaluar de forma no invasiva la microcirculación periungueal para confirmar conectivopatía?',
        options: [
          { id: 'A', text: 'Capilaroscopía periungueal' },
          { id: 'B', text: 'Angiografía por sustracción digital de manos' },
          { id: 'C', text: 'Pletismografía de pulso arterial' },
          { id: 'D', text: 'Resonancia nuclear magnética de muñecas' },
          { id: 'E', text: 'Ecografía Doppler carotídea' }
        ],
        correcta: 'A',
        explicacion: 'La capilaroscopía periungueal es la técnica no invasiva estándar de oro para estudiar el fenómeno de Raynaud y descartar esclerosis sistémica precoz. Permite visualizar directamente la morfología de las asas capilares del lecho ungueal, detectando precozmente megacapilares, microhemorragias y áreas avasculares características del patrón esclerodérmico.',
        recTag: 'EUNACOM 2018 · Q#33'
      },
      {
        stem: '¿Cuál es el fármaco de primera línea de elección para el tratamiento del fenómeno de Raynaud sintomático recurrente que no responde adecuadamente a las medidas generales de abrigo?',
        options: [
          { id: 'A', text: 'Propranolol' },
          { id: 'B', text: 'Nifedipino' },
          { id: 'C', text: 'Ergotamina' },
          { id: 'D', text: 'Clorpromazina' },
          { id: 'E', text: 'Atenolol' }
        ],
        correcta: 'B',
        explicacion: 'Los bloqueadores de los canales de calcio dihidropiridínicos (especialmente Nifedipino oral de liberación prolongada a dosis de 10 a 60 mg/día) constituyen el tratamiento farmacológico de primera elección en el fenómeno de Raynaud. Producen vasodilatación arteriolar periférica disminuyendo la frecuencia e intensidad de los espasmos vasomotores.',
        recTag: 'EUNACOM 2020 · Q#47'
      }
    ]
  },

  {
    id: 'reuma-15', classId: 'reuma-15', tier: 2,
    blockNum: 3, blockName: 'Esclerosis Sistémica, Miopatías Inflamatorias y Síndromes Autoinmunes',
    topicLabel: '9.15',
    title: 'Síndrome de Sjögren y Enfermedad Mixta del Tejido Conectivo (EMTC)',
    perfilCode: '1.05.1.003', dx: 'Específico', tx: 'Inicial', seg: 'Derivar',
    ges: 'Sin garantía GES específica · Derivación a reumatología, oftalmología y odontología',
    reconstrucciones: 'EUNACOM 2018 Q#08 · EUNACOM 2021 Q#35 · EUNACOM 2023 Q#19',
    frecuencia: 'Media-Alta · Patología exocrina autoinmune y síndrome de superposición clásico',
    svg: null, algoTitle: 'Algoritmo Diagnóstico: Síndrome de Sjögren (Sicca) y Criterios de EMTC',
    diagram: flow('Algoritmo de Sjögren y EMTC', [
      { k: 'box', t: 'Sospecha de Síndrome de Sjögren (Síndrome Seco / Sicca)', s: 'Xeroftalmia (sensación arenilla) + Xerostomía (boca seca, caries de cuello) + Tumefacción parotídea', type: 'acc' },
      { k: 'split', q: 'Estudio Diagnóstico en Síndrome de Sjögren', s: 'Evaluación funcional y confirmación inmunológica/histológica',
        ll: 'Pruebas Funcionales Oculares y Salivales',
        left: { t: 'Test de Schirmer (< 5 mm en 5 min)', s: 'Tinción con Rosa de Bengala / Lisamina · Gammagrafía salival o flujo salival no estimulado < 0.1 mL/min', type: 'warn' },
        rl: 'Serología Inmunológica y Biopsia Labial',
        right: { t: 'Anti-Ro (SSA) / Anti-La (SSB) (+) Biopsia', s: 'Anti-Ro (+) en 70-80% · Biopsia glándula salival menor: focos de infiltrado linfocítico ≥ 1 foco/4mm²', type: 'dec' }
      },
      { k: 'box', t: 'ALERTA ONCOLÓGICA CRÍTICA EN SJÖGREN: Riesgo de Linfoma B (MALT)', s: 'Riesgo 40 veces mayor de Linfoma No Hodgkin B · Sospechar ante parotidomegalia fija o gammapatía', type: 'crit' },
      { k: 'box', t: 'Enfermedad Mixta del Tejido Conectivo (EMTC / Síndrome de Sharp)', s: 'Solapamiento de Lupus + Esclerodermia + Miositis · MARCADOR PATOGNOMÓNICO: Anti-U1-RNP a títulos muy altos', type: 'acc' }
    ]),
    contexto: 'El Síndrome de Sjögren es una exocrinopatía autoinmune que destruye glándulas salivales y lagrimales. En EUNACOM se evalúa el test de Schirmer, los anticuerpos Anti-Ro/Anti-La y el elevado riesgo de Linfoma MALT. La Enfermedad Mixta del Tejido Conectivo (EMTC) destaca por su tríada clínica de superposición (Raynaud, dedos en salchicha, miositis) y su marcador exclusivo: Anti-RNP en títulos altos.',
    contentSections: [
      {
        subhead: '1. Síndrome de Sjögren: Fisiopatología y Cuadro Clínico',
        paragraphs: [
          'Es una enfermedad autoinmune inflamatoria crónica caracterizada por la <strong>infiltración linfocítica progresiva (linfocitos T CD4+ y linfocitos B) de las glándulas exocrinas</strong>, provocando destrucción del parénquima acinar y pérdida irreversible de secreciones mucosas.',
          'Afecta predominantemente a mujeres (relación 9:1) en la perimenopausia (40-60 años). Puede ser <strong>Primario</strong> (aislado) o <strong>Secundario</strong> (asociado a Artritis Reumatoide [el más común], LES o Esclerodermia).',
          '<strong>Manifestaciones Cardinales del Síndrome Seco (Sicca):</strong>',
          '• <strong>Xeroftalmia (Queratoconjuntivitis seca):</strong> Sensación constante de cuerpo extraño o arenilla ocular, ardor, prurito, hiperemia conjuntival y fotofobia.',
          '• <strong>Xerostomía:</strong> Sequedad bucal severa que obliga a beber agua para tragar alimentos secos, dificultad para hablar continuamente, pérdida del gusto, y aparición precoz de <strong>caries dentales rampantes cervicales (en el cuello de los dientes)</strong> y candidiasis orofaríngea recurrente por pérdida de la acción protectora de la saliva.',
          '• <strong>Agrandamiento de Glándulas Salivales:</strong> Tumefacción indolora recurrente o persistente de las glándulas parótidas (frecuentemente bilateral).',
          '• Manifestaciones extraglandulares sistémicas: Artralgias/artritis no erosiva, fenómeno de Raynaud (30%), acidosis tubular renal distal (tipo I con hipocalemia y nefrocalcinosis) y neuropatía sensitiva periférica.'
        ]
      },
      {
        subhead: '2. Criterios Diagnósticos ACR/EULAR en Sjögren y Riesgo de Linfoma',
        paragraphs: [
          '<strong>Diagnóstico de Certeza:</strong>',
          '• <strong>Test de Schirmer:</strong> Mide la producción lagrimal acuosa colocando una tira de papel filtro estéril en el fondo de saco conjuntival inferior durante 5 minutos. Es <strong>patológico si la impregnación es < 5 mm en 5 minutos</strong>.',
          '• <strong>Tinción de la superficie ocular (Verde de lisamina o Rosa de Bengala):</strong> Detecta queratopatía puntiforme y daño del epitelio corneal/conjuntival desvitalizado.',
          '• <strong>Biopsia de Glándula Salival Menor del Labio Inferior:</strong> Procedimiento estándar de oro confirmatorio. Se toma una pequeña incisión en mucosa labial interna. Muestra <strong>sialoadenitis linfocítica focal con Focus Score ≥ 1</strong> (definido como al menos un foco de ≥ 50 células mononucleares por cada 4 mm² de tejido glandular).',
          '• <strong>Autoanticuerpos:</strong> <strong>Anti-Ro (SSA) positivos en 70-80%</strong> y <strong>Anti-La (SSB) positivos en 40-50%</strong>. El Factor Reumatoide es positivo en más del 75% de los casos primarios.',
          '<strong>ALERTA DE RIESGO ONCOLÓGICO EUNACOM:</strong>',
          'Los pacientes con Síndrome de Sjögren presentan un <strong>riesgo 40 veces superior al de la población general de desarrollar Linfoma No Hodgkin de células B</strong>, particularmente <strong>Linfoma MALT (tejido linfoide asociado a mucosas) de glándula parótida</strong> o gástrico. Signos de sospecha clínica: agrandamiento parotídeo unilateral persistente y duro, adenopatías palpables, esplenomegalia, aparición de púrpura palpable (crioglobulinemia mixta) y caída inexplicada de los títulos de factor reumatoide o complemento.'
        ]
      },
      {
        subhead: '3. Enfermedad Mixta del Tejido Conectivo (EMTC / Síndrome de Sharp)',
        paragraphs: [
          'La EMTC es una entidad clínica distintiva caracterizada por la coexistencia de manifestaciones superpuestas de tres conectivopatías: <strong>Lupus Eritematoso Sistémico, Esclerosis Sistémica y Polimiositis</strong>.',
          '<strong>Cuadro Clínico Característico:</strong> Fenómeno de Raynaud severo (presente en 95%), <strong>manos edematosas con dedos tumefactos en salchicha (puffy hands)</strong>, sinovitis/artritis no erosiva, debilidad muscular proximal con elevación de CPK, y dismotilidad esofágica distal.',
          '<strong>MARCADOR PATOGNOMÓNICO OBLIGATORIO:</strong> Anticuerpos dirigidos contra la <strong>ribonucleoproteína nuclear U1 (Anti-U1-RNP) positivos en títulos muy altos</strong> (típicamente > 1:1.000 a 1:10.000), con <strong>ausencia o negatividad estricta de anticuerpos Anti-dsDNA y Anti-Scl-70</strong>.',
          '<em>Causa Principal de Muerte:</em> La <strong>Hipertensión Arterial Pulmonar (HTP)</strong> es la complicación más grave y la principal causa de mortalidad en EMTC. Requiere tamizaje ecocardiográfico periódico.'
        ]
      }
    ],
    table: {
      title: 'Resumen de Criterios Diagnósticos y Marcadores: Sjögren vs EMTC',
      headers: ['Enfermedad', 'Manifestación Guía Cardinal', 'Prueba Diagnóstica Objetiva', 'Autoanticuerpo Clave', 'Complicación Mayor'],
      rows: [
        ['Síndrome de Sjögren', 'Xeroftalmia (ojo seco) + Xerostomía (boca seca)', 'Test de Schirmer (<5mm/5min) y Biopsia labial (Focus Score ≥1)', 'Anti-Ro (SSA) y Anti-La (SSB)', 'Linfoma No Hodgkin B (MALT en parótida)'],
        ['Enfermedad Mixta del Tejido Conectivo (EMTC)', 'Raynaud + Manos tumefactas (puffy fingers) + Miositis + Artritis', 'Biopsia muscular miopática y manometría esofágica', 'Anti-U1-RNP a títulos muy altos (>1:1.000)', 'Hipertensión Arterial Pulmonar (HTP)']
      ]
    },
    vignette: 'Mujer de 48 años consulta por sensación constante de arenilla en ambos ojos y ardor ocular que le dificulta leer y usar pantallas, de 1 año de evolución. Además refiere boca seca que la obliga a levantarse por las noches a beber agua y necesidad de líquidos abundantes para deglutir alimentos secos como pan o galletas. Su odontólogo le ha tratado 5 caries en el cuello de las piezas dentarias en los últimos 6 meses. Al examen físico se palpa aumento de volumen indoloro y blando de ambas glándulas parótidas. El test de Schirmer muestra un lagrimeo de 2 mm en 5 minutos en ambos ojos. Los exámenes revelan ANA positivos 1:320 y anticuerpos Anti-Ro (SSA) fuertemente positivos.',
    explicacion: 'El cuadro corresponde a un Síndrome de Sjögren Primario clásico: xeroftalmia confirmada por test de Schirmer patológico (< 5 mm/5 min), xerostomía severa con caries cervicales aceleradas por hiposialia, parotidomegalia bilateral y anticuerpos Anti-Ro positivos. El manejo inicial consiste en lágrimas artificiales sin preservantes, saliva artificial, medidas estrictas de higiene dental para prevenir la pérdida de piezas dentarias y vigilancia periódica clínica para detección precoz de linfoma de células B.',
    keyPoints: [
      'El Síndrome de Sjögren es una exocrinopatía autoinmune caracterizada por xeroftalmia y xerostomía.',
      'El Test de Schirmer es patológico si la impregnación del papel filtro es < 5 mm en 5 minutos.',
      'La biopsia de glándula salival menor es el estándar de oro: muestra infiltrado focal ≥ 1 foco/4 mm².',
      'Los anticuerpos Anti-Ro (SSA) son positivos en 70-80% y Anti-La (SSB) en 40-50% de los pacientes.',
      'Los pacientes con Síndrome de Sjögren tienen un riesgo 40 veces mayor de desarrollar Linfoma MALT.',
      'La EMTC combina características de Lupus, Esclerodermia y Polimiositis.',
      'El marcador patognomónico de la EMTC es el anticuerpo Anti-U1-RNP a títulos muy elevados.',
      'La principal causa de mortalidad en la EMTC es la Hipertensión Arterial Pulmonar.'
    ],
    questions: [
      {
        stem: 'Mujer de 52 años consulta por sensación de cuerpo extraño ocular persistente y boca seca de 8 meses. Al examen se observa hiperemia conjuntival bilateral y caries cervicales múltiples. El test de Schirmer arroja 3 mm en 5 minutos en ojo derecho y 2 mm en ojo izquierdo. Los anticuerpos Anti-Ro (SSA) son positivos. ¿Cuál es la complicación neoplásica hematológica que presenta un riesgo incrementado de hasta 40 veces en esta patología?',
        options: [
          { id: 'A', text: 'Leucemia mieloide crónica' },
          { id: 'B', text: 'Linfoma no Hodgkin de células B (tipo MALT)' },
          { id: 'C', text: 'Mieloma múltiple de cadenas ligeras' },
          { id: 'D', text: 'Enfermedad de Hodgkin esclerosis nodular' },
          { id: 'E', text: 'Carcinoma epidermoide de glándula parótida' }
        ],
        correcta: 'B',
        explicacion: 'Los pacientes con Síndrome de Sjögren primario tienen un riesgo relativo hasta 40 veces superior al de la población general de desarrollar Linfoma No Hodgkin de células B, especialmente del subtipo de tejido linfoide asociado a mucosas (Linfoma MALT) con asiento en glándulas salivales mayores (parótidas) o tracto digestivo.',
        recTag: 'EUNACOM 2018 · Q#08'
      },
      {
        stem: 'Mujer de 34 años consulta por fenómeno de Raynaud bilateral intenso, dedos de las manos tumefactos en salchicha (puffy fingers), debilidad muscular proximal en muslos y hombros con CPK elevada en 1.200 U/L y artralgias en muñecas. No presenta compromiso renal ni neurológico. Se solicitan anticuerpos antinucleares que resultan positivos en título 1:1.280 con patrón moteado. ¿Qué anticuerpo específico confirma el diagnóstico de Enfermedad Mixta del Tejido Conectivo?',
        options: [
          { id: 'A', text: 'Anticuerpos Anti-U1-RNP a títulos elevados' },
          { id: 'B', text: 'Anticuerpos Anti-dsDNA' },
          { id: 'C', text: 'Anticuerpos Anti-Smith' },
          { id: 'D', text: 'Anticuerpos Anti-Scl-70' },
          { id: 'E', text: 'Anticuerpos Anticentrómero' }
        ],
        correcta: 'A',
        explicacion: 'La presencia de características clínicas superpuestas de lupus, esclerodermia y polimiositis (Raynaud, dedos en salchicha, miositis proximal con CPK alta) asociada a la presencia de anticuerpos dirigidos contra la ribonucleoproteína U1 (Anti-U1-RNP) en títulos muy elevados (> 1:1.000) en ausencia de anti-dsDNA y anti-Sm define patognomónicamente la Enfermedad Mixta del Tejido Conectivo (Síndrome de Sharp).',
        recTag: 'EUNACOM 2021 · Q#35'
      }
    ]
  }
];

module.exports = { bloque3Classes };
