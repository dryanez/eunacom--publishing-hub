const { flowCirugia } = require('./flow_builder.cjs');

const bloque1Classes = [
  // ==========================================================================
  // TEMA 11.1: APENDICITIS AGUDA (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-01',
    classId: 'cirugia-01',
    tier: 3,
    blockNum: 1,
    blockName: 'Abdomen Agudo Quirúrgico',
    topicLabel: '11.1',
    title: 'Apendicitis Aguda: Score de Alvarado, Diagnóstico Clínico & Apendicectomía',
    perfilCode: '4.01.2.006',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Sin garantía GES específica · Urgencia quirúrgica cubierta por Garantías de Urgencia Vital (Ley de Urgencias). Manejo diagnóstico y terapéutico según Guía Clínica de Abdomen Agudo.',
    reconstrucciones: 'EUNACOM Diciembre 2022 (Q#62) · EUNACOM Julio 2016 (Q#68)',
    frecuencia: 'Máxima rentabilidad en el EUNACOM · Causa más frecuente de abdomen agudo quirúrgico no traumático',
    diagram: flowCirugia('Algoritmo Diagnóstico y Terapéutico de la Apendicitis Aguda', [
      { t: 'Sospecha de Apendicitis Aguda (Dolor en FID, Anorexia, Fiebre, Leucocitosis)', s: 'Cronología clásica de Murphy: Dolor epigástrico/periumbilical visceral que migra a FID parietal', type: 'acc' },
      { t: 'Estratificación Clínica: Score de Alvarado (MANTRELS, 0-10 pts)', s: 'Evaluación rápida de síntomas (3), signos físicos (4) y laboratorio (3)', type: 'warn' },
      { k: 'split', q: '¿Puntaje del Score de Alvarado y Grupo Poblacional?', s: 'Decisión entre alta, neuroimagen/ecografía o pabellón directo',
        ll: 'Puntaje 7 a 10 (Alta probabilidad) / Hombre joven típico',
        left: { t: 'Apendicectomía Inmediata', s: 'Vía laparoscópica de elección · Profilaxis ATB parenteral previa · Sin necesidad de TAC', type: 'acc' },
        rl: 'Puntaje 4 a 6 (Intermedio) / Mujeres, ancianos o niños',
        right: { t: 'Estudio con Imágenes de Urgencia', s: 'TAC de abdomen con contraste (adultos) · Ecografía abdominal (niños y embarazadas)', type: 'dec' }
      },
      { t: 'Hallazgo de Complicación: Plastrón vs Peritonitis Generalizada', s: 'Plastrón: ATB EV diferido a cx de intervalo · Peritonitis: Cx urgente + lavado + ATB prolongado', type: 'crit' },
      { t: 'Resolución Quirúrgica y Profilaxis Antibiótica', s: 'Cefazolina + Metronidazol o Ciprofloxacino + Metronidazol · Alta precoz en 24 h si no complicada', type: 'acc' }
    ]),
    contexto: 'La apendicitis aguda es la urgencia quirúrgica más frecuente del mundo. Su patogenia es la obstrucción de la luz apendicular por un fecalito, hiperplasia linfoide o parásitos, provocando proliferación bacteriana, estasis venosa, isquemia parietal, necrosis y perforación. El diagnóstico en hombres jóvenes con clínica clásica es estrictamente clínico. La demora diagnóstica más allá de 24-36 horas eleva drásticamente la tasa de perforación (de <5% a >30%), flemón, absceso periapendicular y peritonitis generalizada.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Cronología de Murphy y Semiología Clásica',
        paragraphs: [
          'La obstrucción luminal apendicular provoca acumulación de secreción mucosa intraluminal, elevación de la presión transmural y distensión de la pared. Inicialmente se activan las fibras aferentes viscerales simpáticas (T8-T10), traduciéndose en un <strong>dolor sordo, mal delimitado, urente o espasmódico en epigastrio o región periumbilical</strong>, acompañado típicamente de anorexia precoz, náuseas y vómitos reflejos (fase catarral o congestiva).',
          'En las siguientes 6 a 12 horas, la invasión bacteriana compromete todas las capas parietales hasta el peritoneo parietal adyacente (fibras somáticas espinales), produciendo la clásica <strong>migración del dolor hacia la fosa ilíaca derecha (FID)</strong>, donde se vuelve punzante, continuo y bien localizado (<strong>Cronología de Murphy</strong>, presente en más del 60-70% de los casos).',
          'Al examen físico destacan los signos de irritación peritoneal en FID: <strong>Signo de McBurney</strong> (dolor exquisito en la unión del tercio externo con los dos tercios internos de la línea espino-umbilical derecha), <strong>Signo de Blumberg</strong> (dolor al descomprimir bruscamente la FID), <strong>Signo de Rovsing</strong> (dolor en FID al comprimir la fosa ilíaca izquierda por desplazamiento retrógrado de gas colónico), <strong>Signo del Psoas</strong> (dolor al hiperextender pasivamente la cadera derecha, característico de apéndice retrocecal) y <strong>Signo del Obturador</strong> (dolor a la rotación interna pasiva de la cadera flexionada, característico de apéndice pelviano).'
        ]
      },
      {
        subhead: '2. Diagnóstico, Score de Alvarado y Criterios de Imagen',
        paragraphs: [
          'El <strong>Score de Alvarado (MANTRELS)</strong> asigna hasta 10 puntos: Migración del dolor a FID (1 pt), Anorexia (1 pt), Náuseas/Vómitos (1 pt), Dolor a la palpación en FID (<strong>2 puntos</strong>), Signo de rebote/Blumberg (1 pt), Elevación térmica ≥ 37.3 °C (1 pt), Leucocitosis > 10.000/mm³ (<strong>2 puntos</strong>) y Desviación a la izquierda / Neutrofilia ≥ 75% (1 pt).',
          '<strong>Conducta según Alvarado:</strong> 0-3 puntos: apendicitis muy improbable (observación o alta con pautas de alarma); 4-6 puntos: probabilidad intermedia, obligando a estudio con imágenes complementarias; 7-10 puntos: alta probabilidad, justificando la intervención quirúrgica directa en hombres jóvenes sin requerir imágenes previas.',
          '<strong>Imágenes de elección:</strong> En adultos no gestantes con presentación atípica o puntaje intermedio, el <strong>TAC de abdomen y pelvis con contraste intravenoso</strong> es el estándar de oro (sensibilidad y especificidad >95%); criterios tomográficos diagnósticos: diámetro apendicular transverso > 6 mm, engrosamiento parietal > 2 mm con realce mural, estriación de la grasa periapendicular, líquido libre y visualización del fecalito calcificado (apendicolito). En <strong>niños, mujeres en edad fértil y embarazadas</strong>, el examen de primera línea es la <strong>Ecografía abdominal</strong> (apéndice no compresible > 6 mm, engrosamiento parietal en diana); si no es concluyente, se procede a TAC (en no gestantes) o Resonancia Magnética (en embarazadas).'
        ]
      },
      {
        subhead: '3. Formas Clínicas Complicadas: Plastrón Apendicular vs Absceso vs Peritonitis',
        paragraphs: [
          'La <strong>apendicitis complicada</strong> comprende la gangrena parietal, perforación libre, plastrón y absceso periapendicular. Cuando la perforación es contenida eficazmente por el epiplón mayor y asas de intestino delgado contiguas, se constituye un <strong>plastrón apendicular</strong> (masa palpable firme y dolorosa en FID con cuadro de varios días de evolución, habitualmente > 5 días).',
          'El TAC con contraste es mandatorio ante sospecha de plastrón para diferenciar entre una <em>fase flemosa sólida</em> y un <em>absceso apendicular fluctuante</em> con colección líquida loculada. En el plastrón flemoso, el tratamiento de elección es <strong>médico-conservador</strong>: reposo digestivo, hidratación parenteral y antibioticoterapia endovenosa de amplio espectro por 7 a 14 días. La apendicectomía electiva diferida (<em>de intervalo</em>) se programa 8 a 12 semanas después para evitar resecciones ileocecales desproporcionadas por inflamación friable.',
          'Si el TAC demuestra una colección abscedada accesible ≥ 3-4 cm de diámetro, la conducta de elección es el <strong>drenaje percutáneo guiado por TAC o ecografía</strong> asociado a antibioticoterapia EV. La cirugía de urgencia en presencia de masa solo se indica si hay signos de peritonitis difusa o falla del tratamiento médico.'
        ]
      },
      {
        subhead: '4. Tratamiento Quirúrgico, Profilaxis Antibiótica y Manejo Postoperatorio',
        paragraphs: [
          'El tratamiento definitivo de la apendicitis aguda no complicada es la <strong>Apendicectomía</strong>, siendo el abordaje <strong>laparoscópico</strong> el estándar actual por menor dolor postoperatorio, menor tasa de infección de herida operatoria, menor estadía hospitalaria y mejor visualización de patología pélvica ginecológica concurrente.',
          'La <strong>profilaxis antibiótica preoperatoria</strong> debe administrarse en la inducción anestésica (dentro de los 60 minutos previos a la incisión quirúrgica): esquema estándar con <strong>Cefazolina 2 g EV + Metronidazol 500 mg EV</strong> o <strong>Ceftriaxona 1 g EV + Metronidazol 500 mg EV</strong>. En apendicitis catarral o flegmonosa no perforada, basta con una <strong>dosis única preoperatoria</strong> (no se prolongan antibióticos en el postoperatorio).',
          'En apendicitis gangrenosa o perforada con peritonitis, se requiere antibioticoterapia <strong>terapéutica parenteral</strong> durante 3 a 5 días (o hasta resolución clínica, apirexia y normalización de leucocitos), asociada a lavado y aspiración peritoneal meticulosa, sin necesidad de dejar drenajes profilácticos en cavidad a menos que persista una cavidad residual de absceso organizado.'
        ]
      }
    ],
    table: {
      title: 'Score de Alvarado (MANTRELS) y Conducta Clínica Estandarizada',
      headers: ['Componente MANTRELS', 'Criterio Clínico / Laboratorio', 'Puntaje', 'Conducta según Estrato'],
      rows: [
        ['Migración del dolor', 'Dolor que inicia periumbilical y migra a FID', '1 punto', 'Puntaje 0 – 3: Muy baja probabilidad; evaluar diagnósticos alternativos y alta con pautas'],
        ['Anorexia', 'Pérdida de apetito o intolerancia alimentaria', '1 punto', 'Puntaje 4 – 6: Probabilidad intermedia; observación clínica activa + TAC con contraste (o Eco)'],
        ['Náuseas / Vómitos', 'Vómitos alimentarios o náuseas persistentes', '1 punto', 'Puntaje 7 – 8: Alta probabilidad; preparación quirúrgica y apendicectomía (TAC si duda)'],
        ['Tenderness (Dolor FID)', 'Dolor a la palpación profunda en fosa ilíaca derecha', '2 puntos', 'Puntaje 9 – 10: Certeza diagnóstica casi absoluta; pabellón directo sin demora por imágenes'],
        ['Rebote (Blumberg)', 'Dolor a la descompresión brusca parietal en FID', '1 punto', 'Nota: En mujeres fértiles, niños y ancianos, la neuroimagen es mandatoria con score ≥ 4'],
        ['Elevación térmica', 'Temperatura axilar ≥ 37.3 °C (subfebril o febril)', '1 punto', 'Analgesia: Los AINE u opioides NO enmascaran el examen físico y deben indicarse precozmente'],
        ['Leucocitosis', 'Recuento de leucocitos > 10.000 células/mm³', '2 puntos', 'Hemograma y PCR son sensibles pero inespecíficos; valor predictivo negativo alto'],
        ['Shift (Neutrofilia)', 'Bastonados / Neutrófilos segmentados ≥ 75%', '1 punto', 'Total máximo: 10 puntos (Puntaje ≥ 7 tiene sensibilidad > 85% para apendicitis aguda)']
      ]
    },
    severityTable: {
      title: 'Estadios Fisiopatológicos y Criterios de Severidad en Apendicitis Aguda',
      headers: ['Estadio Evolutivo', 'Hallazgos Anatomopatológicos', 'Tiempo Típico de Evolución', 'Complicaciones y Pronóstico'],
      rows: [
        ['Estadio I: Catarral o Congestiva', 'Obstrucción linfática y venosa; hiperemia parietal, edema de mucosa y serosa', '0 a 12 horas desde inicio', 'Fácilmente reversible; dolor visceral difuso; excelente pronóstico post-apendicectomía'],
        ['Estadio II: Flegmonosa o Supurada', 'Proliferación bacteriana intraluminal, microabscesos parietales y exudado fibrinoso', '12 a 24 horas', 'Compromiso peritoneal parietal focal; Blumberg (+); dolor localizado estricto en FID'],
        ['Estadio III: Gangrenosa o Necrótica', 'Trombosis arterial apendicular con necrosis transmural parcheada e infarto de pared', '24 a 36 horas', 'Riesgo inminente de perforación bacteriana; fiebre elevada y leucocitosis marcada'],
        ['Estadio IV: Perforada', 'Disrupción de la pared apendicular con salida de contenido fecaloideo y pus a cavidad', '> 36 a 48 horas', 'Plastrón apendicular, absceso pélvico o peritonitis generalizada; morbimortalidad elevada']
      ]
    },
    treatmentTable: {
      title: 'Protocolo Terapéutico Quirúrgico, Antibioticoterapia y Manejo de Formas Complejas',
      headers: ['Escenario Clínico', 'Abordaje Quirúrgico / Procedimiento', 'Esquema Antibiótico Recomendado', 'Consideraciones y Errores Críticos'],
      rows: [
        ['Apendicitis No Complicada (Fases I-II)', 'Apendicectomía laparoscópica (o abierta por McBurney)', 'Cefazolina 2 g EV + Metronidazol 500 mg EV en inducción (Dosis única)', 'NO continuar antibióticos postoperatorios; tolerancia oral precoz y alta a las 12-24 horas'],
        ['Apendicitis Perforada con Peritonitis', 'Apendicectomía laparoscópica + lavado profuso con suero tibio', 'Ceftriaxona 1-2 g/día EV + Metronidazol 500 mg c/8h EV x 3-5 días', 'Tratamiento antibiótico terapéutico; suspender al lograr apirexia y leucocitos normales'],
        ['Plastrón Apendicular Flemoso (Sin pus)', 'Tratamiento médico conservador; Apendicectomía de intervalo a las 8-12 semanas', 'Ceftriaxona EV + Metronidazol EV x 7-10 días (luego ciprofloxacino oral)', 'La cirugía de urgencia en plastrón tiene alto riesgo de lesión cecal y hemicolectomía derecha'],
        ['Absceso Apendicular Organizado (≥ 3 cm)', 'Drenaje percutáneo guiado por ecografía o TAC + Antibioticoterapia', 'Ceftriaxona EV + Metronidazol EV; mantener drenaje hasta débito < 10-15 mL/día', 'Si falla el drenaje percutáneo o hay peritonismo difuso: conversión a laparotomía urgente']
      ]
    },
    vignette: 'Hombre de 23 años previamente sano, consulta en el servicio de urgencia por cuadro de 16 horas de evolución que inició con molestia epigástrica sorda y náuseas, migrando hace 6 horas hacia la fosa ilíaca derecha, donde el dolor se intensificó con los movimientos y la marcha. Al examen físico: T° 37.8 °C, PA 122/74 mmHg, FC 92 lpm regular. Abdomen blando, con dolor exquisito a la palpación superficial y profunda en el punto de McBurney, con signo de Blumberg francamente positivo y signo de Rovsing positivo. El hemograma muestra 14.500 leucocitos/mm³ con 82% de neutrófilos. La orina completa es normal.',
    explicacion: 'El cuadro presenta la cronología clásica de Murphy (dolor periumbilical migrado a fosa ilíaca derecha) junto con signos peritoneales focales (McBurney, Blumberg, Rovsing positivos), fiebre y leucocitosis con desviación izquierda, totalizando un Score de Alvarado de 9 puntos (alta probabilidad diagnóstica). En un varón joven con presentación típica, el diagnóstico es eminentemente clínico y NO requiere confirmación tomográfica. La conducta obligatoria es indicar régimen cero, analgesia parenteral, profilaxis antibiótica endovenosa durante la inducción anestésica y programar apendicectomía inmediata por vía laparoscópica o abierta.',
    keyPoints: [
      'La cronología de Murphy (dolor periumbilical que migra a FID tras 6-12 horas) es el patrón clínico más específico de apendicitis aguda.',
      'Score de Alvarado ≥ 7 en varones jóvenes con clínica típica permite indicar apendicectomía directa sin necesidad de TAC previo.',
      'El TAC de abdomen y pelvis con contraste IV es el estándar de oro diagnóstico en ancianos, adultos con presentación atípica o score intermedio (4-6 puntos).',
      'En embarazadas, niños pequeños y mujeres jóvenes, la ecografía abdominal es el estudio inicial obligado para evitar radiación ionizante.',
      'El plastrón apendicular flemoso no complicado se maneja inicialmente con tratamiento médico conservador (antibióticos EV) y apendicectomía electiva diferida (de intervalo) en 8-12 semanas.',
      'Si el plastrón presenta un absceso fluctuante ≥ 3-4 cm, el tratamiento de elección es el drenaje percutáneo guiado por TAC o ecografía + antibióticos.',
      'En apendicitis no perforada, la profilaxis antibiótica es de DOSIS ÚNICA preoperatoria; prolongar antibióticos postoperatorios es un error frecuente y sancionado en el EUNACOM.'
    ],
    questions: [
      {
        stem: 'Un hombre de 24 años sin antecedentes mórbidos consulta por dolor abdominal de 14 horas de evolución, iniciado en epigastrio y que actualmente se localiza en la fosa ilíaca derecha. Al examen físico destaca temperatura axilar de 37.9 °C, dolor intenso a la palpación en fosa ilíaca derecha y signo de Blumberg positivo. Su hemograma evidencia 13.800 leucocitos/mm³ con 80% de neutrófilos. ¿Cuál es la conducta diagnóstica y terapéutica más adecuada?',
        options: [
          { id: 'A', text: 'Solicitar TAC de abdomen y pelvis con contraste y decidir conducta según hallazgos' },
          { id: 'B', text: 'Indicar hidratación parenteral, analgesia, profilaxis antibiótica y apendicectomía inmediata' },
          { id: 'C', text: 'Realizar ecografía abdominal urgente para confirmar el engrosamiento apendicular' },
          { id: 'D', text: 'Iniciar régimen cero, amoxicilina más ácido clavulánico oral y reevaluar en 12 horas' },
          { id: 'E', text: 'Solicitar radiografía simple de abdomen de pie para descartar neumoperitoneo' }
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta una presentación clásica de apendicitis aguda con cronología de migración, signos peritoneales focales (Blumberg +), fiebre y leucocitosis (Score de Alvarado de 9 puntos). En hombres jóvenes con presentación típica, el diagnóstico es clínico y no debe demorarse el pabellón solicitando TAC (A) ni ecografía (C). El manejo conservador con antibióticos (D) en apendicitis aguda franca tiene una alta tasa de recidiva y perforación. La radiografía simple (E) tiene escasa utilidad en apendicitis.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.006'
      },
      {
        stem: 'Una mujer de 29 años, cursando embarazo de 22 semanas por amenorrea confiable, consulta por dolor en flanco y fosa ilíaca derecha de 20 horas de evolución, asociado a febrículas y náuseas. Al examen presenta dolor y resistencia muscular a la palpación en cuadrante inferior derecho y flanco derecho. El hemograma muestra 15.000 leucocitos/mm³. ¿Cuál es el examen de imágenes de primera línea para confirmar la sospecha de apendicitis aguda?',
        options: [
          { id: 'A', text: 'TAC de abdomen y pelvis con contraste intravenoso' },
          { id: 'B', text: 'Ecografía abdominal y pelviana con compresión graduada' },
          { id: 'C', text: 'Resonancia nuclear magnética de abdomen con contraste paramagnético (gadolinio)' },
          { id: 'D', text: 'Radiografía de abdomen en decúbito lateral con rayo horizontal' },
          { id: 'E', text: 'Laparoscopía diagnóstica directa sin estudio previo' }
        ],
        correcta: 'B',
        explicacion: 'En mujeres embarazadas con sospecha de apendicitis aguda, la ecografía abdominal y pelviana es el método de elección inicial debido a su inocuidad y ausencia de radiación ionizante (signos: apéndice >6 mm no compresible). Si la ecografía no resulta concluyente, el siguiente examen de elección en el embarazo es la Resonancia Magnética SIN gadolinio (el gadolinio cruza la placenta y está contraindicado, lo que invalida C). El TAC (A) se reserva solo si no hay RM disponible.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.006'
      },
      {
        stem: 'Hombre de 42 años consulta por cuadro de 7 días de evolución caracterizado por dolor continuo en fosa ilíaca derecha, sensación febril y anorexia. Al examen físico se palpa una masa firme, sensible y mal delimitada de aproximadamente 6 cm en la fosa ilíaca derecha, sin irritación peritoneal difusa. El TAC abdominal con contraste confirma un engrosamiento inflamatorio periapendicular flemoso con asas adheridas, sin colecciones líquidas tabicadas ni aire libre. ¿Cuál es el manejo inicial de elección?',
        options: [
          { id: 'A', text: 'Laparotomía exploradora inmediata con hemicolectomía derecha y anastomosis ileocólica' },
          { id: 'B', text: 'Tratamiento médico conservador con antibióticos endovenosos y apendicectomía electiva diferida en 8 a 12 semanas' },
          { id: 'C', text: 'Apendicectomía laparoscópica de urgencia en las primeras 6 horas' },
          { id: 'D', text: 'Drenaje percutáneo guiado por TAC con catéter pigtail' },
          { id: 'E', text: 'Colonoscopía de urgencia para descartar diverticulitis cecal o neoplasia' }
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta un plastrón apendicular en fase flemosa (más de 5-7 días de evolución con masa inflamatoria palpable sin colección líquida drenable). La intervención quirúrgica de urgencia en esta etapa conlleva un riesgo elevado de desgarro ileal, necesidad forzada de hemicolectomía derecha y fístulas estercoráceas. La conducta estandarizada es el tratamiento médico conservador con reposo digestivo, analgésicos y antibioticoterapia EV de amplio espectro, programando una apendicectomía electiva de intervalo a las 8-12 semanas. El drenaje percutáneo (D) solo está indicado si existe un absceso líquido delimitado.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.006'
      },
      {
        stem: 'Durante una apendicectomía por apendicitis aguda congestiva no perforada en un paciente de 31 años, el cirujano completa la intervención laparoscópica sin incidentes, observando un muñón apendicular sano y escaso líquido seroso en fondo de saco que se aspira por completo. El paciente recibió 2 g de Cefazolina más 500 mg de Metronidazol EV 30 minutos antes de la incisión. ¿Cuál es la indicación antibiótica postoperatoria más adecuada?',
        options: [
          { id: 'A', text: 'Completar 7 días de Ciprofloxacino oral más Metronidazol ambulatorio' },
          { id: 'B', text: 'Mantener Ceftriaxona más Metronidazol endovenoso por 48 horas en sala' },
          { id: 'C', text: 'No administrar más dosis de antibióticos en el postoperatorio' },
          { id: 'D', text: 'Indicar Amoxicilina con ácido clavulánico por 5 días para prevenir infección de herida' },
          { id: 'E', text: 'Indicar gentamicina en dosis única a las 12 horas del procedimiento' }
        ],
        correcta: 'C',
        explicacion: 'En la apendicitis aguda no complicada (catarral o flegmonosa no perforada), la evidencia internacional y las normas de profilaxis quirúrgica MINSAL señalan taxativamente que la profilaxis antibiótica preoperatoria (dosis única en la inducción anestésica) es suficiente. Mantener antibióticos en el postoperatorio (A, B, D) no reduce la tasa de infección de sitio quirúrgico ni abscesos intraabdominales, e incrementa innecesariamente los costos hospitalarios, la estancia y el riesgo de resistencia bacteriana o infección por Clostridioides difficile.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.006'
      }
    ]
  },
  // ==========================================================================
  // TEMA 11.2: COLECISTITIS AGUDA (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-02',
    classId: 'cirugia-02',
    tier: 3,
    blockNum: 1,
    blockName: 'Abdomen Agudo Quirúrgico',
    topicLabel: '11.2',
    title: 'Colecistitis Aguda: Guías de Tokio, Signo de Murphy Ecográfico & Colelap',
    perfilCode: '4.01.2.011',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'GES N° 24: Colecistectomía preventiva del cáncer de vesícula biliar en personas de 35 a 49 años sintomáticas · En colecistitis aguda la intervención es una urgencia médica y quirúrgica preferente.',
    reconstrucciones: 'EUNACOM Julio 2021 (Q#14) · EUNACOM Diciembre 2018 (Q#42)',
    frecuencia: 'Alta frecuencia en el EUNACOM · Segunda causa de abdomen agudo quirúrgico y patología biliar quirúrgica prevalente en Chile',
    diagram: flowCirugia('Algoritmo Diagnóstico y Terapéutico en Colecistitis Aguda (Guías Tokio)', [
      { t: 'Sospecha de Colecistitis Aguda (Dolor en HCD > 6 h, Murphy (+), Fiebre)', s: 'Triada clínica: Inflamación local + Respuesta sistémica + Hallazgos ecográficos (TG18)', type: 'acc' },
      { t: 'Examen de Primera Línea: Ecografía Abdominal de Urgencia', s: 'Litiasis vesicular impactada en bacinete · Pared vesicular > 4 mm · Signo de Murphy ecográfico (+)', type: 'warn' },
      { k: 'split', q: '¿Estratificación de Severidad según Guías de Tokio (TG18)?', s: 'Evaluación de falla orgánica (Grado III) vs inflamación local severa (Grado II) vs leve (Grado I)',
        ll: 'Grado I (Leve) o Grado II (Moderada) sin comorbilidad crítica',
        left: { t: 'Colecistectomía Laparoscópica Precoz', s: 'Realizar precozmente (< 72 h desde inicio) · Antibióticos EV · Técnica segura de Strasberg', type: 'acc' },
        rl: 'Grado III (Grave con falla orgánica) o Paciente Inoperable',
        right: { t: 'Colecistostomía Percutánea de Urgencia', s: 'Drenaje biliar transhepático o transperitoneal de descompresión + UCI + ATB amplio', type: 'crit' }
      },
      { t: 'Antibioticoterapia Parenteral Orientada (Gram negativos y anaerobios)', s: 'Ceftriaxona + Metronidazol o Ciprofloxacino + Metronidazol (Ampicilina/Sulbactam)', type: 'dec' },
      { t: 'Seguimiento y Detección de Coledocolitiasis Concomitante', s: 'Evaluar perfil hepático (bilirrubina, FA, GGT); si dilatación colédoco > 6 mm -> ColangioRM o ERCP', type: 'acc' }
    ]),
    contexto: 'Chile posee una de las tasas más altas del mundo de colelitiasis y cáncer vesicular. La colecistitis aguda se desencadena en el 95% de los casos por la impactación persistente de un cálculo en el cuello vesicular (bacinete) o conducto cístico, generando estasis biliar, liberación de fosfolipasa A2, inflamación química parietal e isquemia, seguida de sobreinfección bacteriana secundaria por enterobacterias (E. coli, Klebsiella, Enterococo). El pilar del tratamiento moderno es la colecistectomía laparoscópica precoz dentro de las primeras 72 horas de evolución.',
    contentSections: [
      {
        subhead: '1. Fisiopatología y Presentación Clínica Cardinal',
        paragraphs: [
          'A diferencia del cólico biliar simple (dolor espasmódico postprandial autolimitado a menos de 4 a 6 horas por desimpactación espontánea del cálculo), la <strong>colecistitis aguda</strong> se caracteriza por un <strong>dolor continuo en hipocondrio derecho (HCD) o epigastrio que persiste por más de 6 horas</strong>, frecuentemente irradiado a la escápula derecha o dorso, acompañado de náuseas, vómitos y fiebre mantenida.',
          'Al examen físico, el hallazgo cardinal es el <strong>Signo de Murphy clínico</strong>: interrupción brusca de la inspiración profunda del paciente al palpar profundamente el punto cístico en el reborde costal derecho debido al dolor agudo generado por el contacto de la vesícula inflamada con la mano del examinador. En un tercio de los pacientes puede palparse una masa dolorosa en HCD que corresponde a la vesícula distendida empastada por el epiplón.',
          'La presencia de <strong>ictericia franca (bilirrubina total > 4 mg/dL)</strong> NO es propia de la colecistitis aguda aislada y debe hacer sospechar de inmediato una <strong>coledocolitiasis concomitante</strong>, una colangitis aguda bacteriana ascendente o un <strong>Síndrome de Mirizzi</strong> (compresión extrínseca del conducto hepático común por un cálculo gigante impactado en el bacinete o cístico).'
        ]
      },
      {
        subhead: '2. Criterios Diagnósticos y Clasificación de Severidad Tokio 2018 (TG18)',
        paragraphs: [
          'Las Guías de Tokio 2018 establecen tres pilares diagnósticos: <strong>A. Signos locales de inflamación:</strong> Murphy (+) o masa/dolor en HCD. <strong>B. Signos sistémicos de inflamación:</strong> Fiebre > 38 °C, leucocitosis > 10.000/mm³ o PCR elevada. <strong>C. Hallazgos imagenológicos:</strong> Confirmación por ecografía o TAC. Diagnóstico sospechoso: A + B; <em>Diagnóstico definitivo: A + B + C</em>.',
          '<strong>Estratificación de Gravedad TG18:</strong>',
          '• <strong>Grado I (Leve):</strong> Colecistitis aguda en paciente sano sin disfunción de órganos ni inflamación local avanzada; la inflamación está estrictamente confinada a la vesícula biliar.',
          '• <strong>Grado II (Moderada):</strong> Asociada a alguno de los siguientes factores de riesgo locales o sistémicos: 1) Leucocitosis > 18.000/mm³; 2) Masa dolorosa palpable en HCD; 3) Duración de los síntomas > 72 horas; 4) Inflamación local marcada (colecistitis gangrenosa, enfisematosa, perforación, absceso pericolecístico o peritonitis biliar).',
          '• <strong>Grado III (Grave):</strong> Acompañada de <strong>disfunción de al menos un órgano o sistema</strong>: cardiovascular (hipotensión refractaria que requiere vasopresores como noradrenalina), neurológica (compromiso de conciencia), respiratoria (PaO2/FiO2 < 300), renal (oliguria o creatinina > 2.0 mg/dL), hepática (INR > 1.5) o hematológica (plaquetas < 100.000/mm³).'
        ]
      },
      {
        subhead: '3. Exámenes Complementarios y Hallazgos Ecográficos',
        paragraphs: [
          'La <strong>Ecografía abdominal</strong> es el examen imagenológico de primera línea por su alta sensibilidad (>90%) y disponibilidad inmediata. Los cuatro signos ecográficos cardinales son: 1) <strong>Litiasis vesicular impactada</strong> en el bacinete o cuello; 2) <strong>Signo de Murphy ecográfico positivo</strong> (dolor focal provocado al presionar la vesícula directamente con el transductor ecográfico, signo más específico); 3) <strong>Engrosamiento de la pared vesicular ≥ 4 mm</strong> (con aspecto en doble contorno o halo hipoecogénico); y 4) <strong>Líquido libre perivesicular</strong> o distensión vesicular (diámetro longitudinal > 8 cm o transversal > 4 cm).',
          'El TAC de abdomen se reserva ante sospecha de complicaciones como colecistitis gangrenosa, enfisematosa (gas intraluminal o intramural producido por Clostridium perfringens), perforación libre o pancreatitis aguda biliar asociada.',
          'La <strong>Centelleografía biliar con HIDA (Tc-99m)</strong> es el estudio con mayor sensibilidad y especificidad (>97%), evidenciando ausencia de llenado de la vesícula biliar por obstrucción del conducto cístico, reservándose para casos con alta sospecha clínica y ecografía no concluyente.'
        ]
      },
      {
        subhead: '4. Manejo Terapéutico: Colecistectomía Laparoscópica vs Colecistostomía',
        paragraphs: [
          'El tratamiento definitivo de elección es la <strong>Colecistectomía Laparoscópica Precoz</strong>. Se recomienda realizarla dentro de las primeras <strong>72 horas desde el inicio de los síntomas</strong> (o dentro del ingreso hospitalario), ya que reduce la morbimortalidad, la tasa de conversión a laparotomía abierta, la estancia hospitalaria total y los costos en comparación con el manejo diferido.',
          'Durante la cirugía laparoscópica es obligatorio lograr la <strong>Visión Crítica de Seguridad de Strasberg</strong> para prevenir la lesión iatrogénica de la vía biliar: 1) Liberación del triángulo hepatocístico de grasa y tejido fibroso; 2) Despegamiento del tercio inferior de la vesícula de la placa hepática; 3) Visualización incontrovertible de solo dos estructuras entrando a la vesícula (conducto cístico y arteria cística). Si no se logra o hay inflamación congelada, se debe realizar colecistectomía subtotal o conversión a cirugía abierta.',
          'En pacientes con <strong>Grado III (shock/falla multiorgánica)</strong> o con <strong>comorbilidades severas prohibitivas para anestesia general</strong> (ancianos frágiles, cardiopatía descompensada), el tratamiento de urgencia es la <strong>Colecistostomía Percutánea Transhepática</strong> guiada por ecografía/TAC bajo anestesia local asociada a antibióticos endovenosos de amplio espectro, difiriendo la colecistectomía una vez superada la sepsis.'
        ]
      }
    ],
    table: {
      title: 'Guías de Tokio 2018 (TG18) — Criterios Diagnósticos de Colecistitis Aguda',
      headers: ['Categoría de Criterios', 'Parámetros Específicos Evaluados', 'Requisito para Sospecha', 'Requisito para Certeza'],
      rows: [
        ['A. Inflamación Local', '1) Signo de Murphy clínico (+) · 2) Dolor o masa palpable en HCD', 'Un ítem de A', 'Un ítem de A'],
        ['B. Inflamación Sistémica', '1) Fiebre > 38 °C · 2) Leucocitosis > 10.000/mm³ · 3) PCR elevada', 'Un ítem de B', 'Un ítem de B'],
        ['C. Hallazgos de Imagen', 'Litiasis impactada, pared ≥ 4 mm, líquido perivesicular, Murphy eco (+)', 'No requiere', 'Confirmación por C'],
        ['Conclusión Diagnóstica', 'Sensibilidad diagnóstica > 90%; especificidad > 85%', 'Diagnóstico Sospechoso (A + B)', 'Diagnóstico Definitivo (A + B + C)']
      ]
    },
    severityTable: {
      title: 'Estratificación de Severidad TG18 y Criterios de Falla Orgánica',
      headers: ['Grado TG18', 'Definición Clínica y Fisiopatológica', 'Criterios Específicos TG18', 'Estrategia Terapéutica Inmediata'],
      rows: [
        ['Grado I (Leve)', 'Inflamación confinada a vesícula sin disfunción orgánica', 'No cumple criterios de Grado II ni III; paciente hemodinámicamente estable', 'Colecistectomía laparoscópica precoz (< 72 h) + ATB profiláctico/inicial'],
        ['Grado II (Moderada)', 'Inflamación local avanzada de alto riesgo quirúrgico', 'Leucocitos > 18.000, masa dolorosa HCD, evolución > 72 h, gangrena o flemón', 'Colecistectomía laparoscópica por cirujano experimentado; si hay sepsis o demora: ATB EV'],
        ['Grado III (Grave)', 'Colecistitis aguda asociada a disfunción de órgano(s)', 'Hipotensión con vasopresores, PaO2/FiO2 < 300, Cr > 2.0, INR > 1.5 o Plaq < 100k', 'Colecistostomía percutánea urgente + Soporte en UPC + ATB amplio espectro']
      ]
    },
    treatmentTable: {
      title: 'Protocolo de Antibioticoterapia Parenteral y Algoritmo Quirúrgico TG18',
      headers: ['Nivel de Severidad', 'Esquema Antibiótico Parenteral', 'Momento Quirúrgico de Elección', 'Medidas Críticas y Prevención de Lesión'],
      rows: [
        ['Grado I (Leve)', 'Cefazolina 2 g c/8h EV o Ciprofloxacino 400 mg c/12h EV', 'Colecistectomía laparoscópica antes de 72 horas del ingreso', 'Manejo ambulatorio o corta estancia; suspender ATB en postoperatorio inmediato'],
        ['Grado II (Moderada)', 'Ceftriaxona 1-2 g/día EV + Metronidazol 500 mg c/8h EV (o Ampicilina/Sulbactam)', 'Colecistectomía laparoscópica urgente o precoz', 'Exigir Visión Crítica de Seguridad de Strasberg; colecistectomía subtotal si hay triángulo congelado'],
        ['Grado III (Grave)', 'Piperacilina/Tazobactam 4.5 g c/6h EV o Meropenem 1 g c/8h EV', 'Colecistostomía percutánea guiada por imágenes de rescate', 'Diferir cirugía definitiva a 8-12 semanas tras estabilización integral en UPC']
      ]
    },
    vignette: 'Mujer de 48 años, multípara de 3, con antecedente de cólicos biliares ocasionales, consulta en urgencias por dolor abdominal intenso y continuo en hipocondrio derecho de 14 horas de evolución, que inició tras cena copiosa y se irradia a dorso, asociado a vómitos biliosos reiterados y sensación febril. Al examen físico: PA 130/80 mmHg, FC 96 lpm, T° 38.3 °C axilar. Abdomen blando, muy doloroso a la palpación en hipocondrio derecho con maniobra de Murphy positiva y resistencia muscular voluntaria focal. Laboratorio: leucocitos 13.500/mm³ con 78% neutrófilos, PCR 68 mg/L, bilirrubina total 1.1 mg/dL, fosfatasa alcalina y transaminasas normales. La ecografía abdominal muestra vesícula distendida con pared de 5.2 mm, cálculo de 18 mm enclavado en bacinete, escaso líquido perivesicular y colédoco de 4 mm sin ectasia.',
    explicacion: 'El cuadro clínico reúne los criterios diagnósticos definitivos de colecistitis aguda litiásica según las Guías de Tokio 2018 (Grado I - Leve): dolor focal con Murphy positivo, fiebre y leucocitosis, y confirmación ecográfica (pared > 4 mm, cálculo impactado en bacinete y líquido perivesicular) sin disfunción orgánica. La vía biliar principal es de calibre normal y las pruebas hepáticas son normales, descartando coledocolitiasis concomitante. La conducta normada y de elección es indicar régimen cero, hidratación parenteral con cristaloides, analgesia endovenosa, antibioticoterapia parenteral con cobertura contra enterobacterias y realizar una colecistectomía laparoscópica precoz dentro de las primeras 72 horas.',
    keyPoints: [
      'Colecistitis aguda = dolor continuo en HCD > 6 horas + Murphy (+) + fiebre/leucocitosis + pared engrosada en ecografía.',
      'El signo de Murphy ecográfico positivo (dolor al presionar la vesícula con el transductor) es el hallazgo ecográfico más específico.',
      'La bilirrubina elevada > 4 mg/dL NO es propia de colecistitis aislada y obliga a descartar coledocolitiasis o Síndrome de Mirizzi.',
      'El estándar de tratamiento para colecistitis aguda Grado I y II es la colecistectomía laparoscópica precoz dentro de 72 horas.',
      'En pacientes críticos con Grado III (falla orgánica hemodinámica, respiratoria o renal) o riesgo quirúrgico prohibitivo, la conducta es colecistostomía percutánea.',
      'La Visión Crítica de Seguridad de Strasberg en colelap exige disecar el triángulo hepatocístico y ver solo 2 estructuras penetrando la vesícula.',
      'En Chile, la colecistectomía en personas sintomáticas de 35 a 49 años está garantizada por el régimen GES N° 24.'
    ],
    questions: [
      {
        stem: 'Una mujer de 54 años consulta por dolor continuo en hipocondrio derecho de 12 horas de evolución, asociado a náuseas y fiebre de 38.4 °C. Al examen físico se constata signo de Murphy positivo. El hemograma reporta 14.000 leucocitos/mm³. La ecografía abdominal muestra múltiples cálculos vesiculares, uno de ellos impactado en el bacinete, pared vesicular de 5 mm y líquido perivesicular, con colédoco de 5 mm. Sus pruebas hepáticas son estrictamente normales. ¿Cuál es la conducta terapéutica más adecuada?',
        options: [
          { id: 'A', text: 'Hospitalizar, hidratar, iniciar antibióticos EV y programar colecistectomía laparoscópica en esta misma hospitalización dentro de 72 horas' },
          { id: 'B', text: 'Indicar analgésicos orales, amoxicilina ambulatoria y programar colecistectomía electiva en 3 meses' },
          { id: 'C', text: 'Solicitar colangiopancreatografía retrógrada endoscópica (ERCP) de urgencia antes de la cirugía' },
          { id: 'D', text: 'Realizar colecistostomía percutánea de inmediato bajo anestesia local' },
          { id: 'E', text: 'Indicar ácido ursodesoxicólico oral para disolución litiásica y dieta hipograsa' }
        ],
        correcta: 'A',
        explicacion: 'La paciente presenta una colecistitis aguda litiásica leve (Grado I de Tokio). El tratamiento de elección indiscutido según las guías internacionales y la práctica quirúrgica chilena es la colecistectomía laparoscópica precoz (<72 horas), la cual disminuye las complicaciones biliares, el tiempo de hospitalización y los costos frente a la cirugía diferida. La ERCP (C) está contraindicada porque el colédoco y las pruebas hepáticas son normales. La colecistostomía (D) se reserva para pacientes en shock séptico o inoperables.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.011'
      },
      {
        stem: 'Un hombre de 78 años con antecedentes de infarto miocárdico reciente y EPOC severo oxigenodependiente ingresa a la Unidad de Pacientes Críticos por sepsis de foco abdominal debida a colecistitis aguda gangrenosa. Al ingreso presenta PA 80/50 mmHg que requiere infusión de noradrenalina a dosis moderadas, Glasgow 12 y creatinina plasmática de 2.6 mg/dL. El equipo de anestesiología califica al paciente como de riesgo quirúrgico extremo prohibitivo. ¿Cuál es el procedimiento terapéutico de urgencia más apropiado?',
        options: [
          { id: 'A', text: 'Colecistectomía laparoscópica de urgencia' },
          { id: 'B', text: 'Colecistostomía percutánea guiada por imágenes' },
          { id: 'C', text: 'Laparotomía exploradora con colecistectomía abierta' },
          { id: 'D', text: 'Terapia exclusiva con analgésicos opioides y antipiréticos' },
          { id: 'E', text: 'Papilotomía endoscópica por ERCP sin descompresión vesicular' }
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta una colecistitis aguda Grado III (severa) con disfunción orgánica múltiple (shock distributivo cardiovascular con vasopresores, falla renal y compromiso neurológico) sumado a un riesgo anestesiológico prohibitivo. En esta situación crítica, la cirugía abierta o laparoscópica tiene una mortalidad inaceptable. La indicación precisa según las Guías de Tokio 2018 es la colecistostomía percutánea guiada por ecografía o TAC para lograr la descompresión y drenaje biliar de urgencia de la vesícula infectada junto con antibióticos EV de amplio espectro, difiriendo la resolución quirúrgica definitiva hasta que el paciente se estabilice.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.011'
      },
      {
        stem: '¿Cuál de los siguientes hallazgos ecográficos tiene la mayor especificidad diagnóstica para confirmar una colecistitis aguda en un paciente con sospecha clínica?',
        options: [
          { id: 'A', text: 'Presencia de microcálculos móviles en el fondo vesicular' },
          { id: 'B', text: 'Engrosamiento difuso de la pared vesicular mayor a 3 mm en un paciente cirrótico con ascitis' },
          { id: 'C', text: 'Signo de Murphy ecográfico positivo sobre la vesícula biliar' },
          { id: 'D', text: 'Colédoco de 7 mm de diámetro en un paciente mayor de 70 años' },
          { id: 'E', text: 'Presencia de barro biliar ocupando el 20% del lumen vesicular' }
        ],
        correcta: 'C',
        explicacion: 'El Signo de Murphy ecográfico positivo (desencadenamiento de dolor intenso y apnea refleja al comprimir la vesícula directamente con el transductor) es el signo ecográfico individual más específico para colecistitis aguda (especificidad >90-95%). El engrosamiento parietal (B) es sensible pero inespecífico, ya que puede aparecer en ascitis, insuficiencia cardíaca, hipoalbuminemia y cirrosis hepática. Los cálculos móviles (A) indican colelitiasis simple, no colecistitis.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.011'
      },
      {
        stem: 'Una mujer de 45 años con colecistitis aguda litiásica es sometida a colecistectomía laparoscópica. Durante la disección, el cirujano constata un triángulo de Calot con intensa inflamación y fibrosis ("triángulo congelado"), siendo incapaz de identificar con certeza el conducto cístico ni la arteria cística para lograr la Visión Crítica de Seguridad de Strasberg. ¿Cuál es la conducta quirúrgica más prudente y segura para evitar una lesión de la vía biliar?',
        options: [
          { id: 'A', text: 'Continuar la disección a ciegas con bisturí armónico cerca del hilio hepático' },
          { id: 'B', text: 'Realizar una colecistectomía subtotal (cerrando el muñón vesicular o dejando drenaje) o convertir a cirugía abierta' },
          { id: 'C', text: 'Seccionar inmediatamente la estructura tubular más gruesa presumiendo que es el cístico' },
          { id: 'D', text: 'Cerrar los trócares de inmediato y dar por finalizada la cirugía sin drenar la vesícula' },
          { id: 'E', text: 'Ligar el conducto hepático común profilácticamente para evitar filtración biliar' }
        ],
        correcta: 'B',
        explicacion: 'La regla de oro de la cirugía biliar moderna es la prevención de la lesión iatrogénica de la vía biliar. Si no se puede lograr la Visión Crítica de Seguridad de Strasberg debido a inflamación severa o triángulo congelado, la conducta quirúrgica normada es recurrir a procedimientos de rescate seguros ("bail-out"): realizar una colecistectomía subtotal (fenestrada o reconstituyente) resecando la pared anterior de la vesícula y extrayendo todos los cálculos, o convertir a cirugía abierta para una palpación y visualización directa anatómica. La disección a ciegas (A) o seccionar estructuras sin identificación plena (C) es la causa principal de sección inadvertida del colédoco.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.011'
      }
    ]
  },
  // ==========================================================================
  // TEMA 11.3: DIVERTICULITIS AGUDA (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-03',
    classId: 'cirugia-03',
    tier: 3,
    blockNum: 1,
    blockName: 'Abdomen Agudo Quirúrgico',
    topicLabel: '11.3',
    title: 'Diverticulitis Aguda: TAC de Abdomen, Clasificación de Hinchey & Manejo Médico vs Cx',
    perfilCode: '4.01.2.008',
    dx: 'Sospecha',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Sin garantía GES específica · Cobertura hospitalaria por Ley de Urgencias en casos complicados con peritonitis.',
    reconstrucciones: 'EUNACOM Diciembre 2021 (Q#45) · EUNACOM Julio 2017 (Q#89)',
    frecuencia: 'Alta frecuencia en el EUNACOM · Patología colónica aguda más frecuente en el adulto mayor',
    diagram: flowCirugia('Algoritmo Diagnóstico y Terapéutico en Diverticulitis Aguda (Clasificación de Hinchey)', [
      { t: 'Sospecha de Diverticulitis Aguda ("Apendicitis Izquierda")', s: 'Dolor continuo en FII + Fiebre + Leucocitosis con desviación izquierda en adulto > 50 años', type: 'acc' },
      { t: 'Examen de Elección Mandatorio: TAC de Abdomen y Pelvis con Contraste IV', s: 'Visualización de divertículos, engrosamiento parietal colónico > 4 mm, estriación de grasa pericólica', type: 'warn' },
      { k: 'split', q: '¿Estratificación Tomográfica según Hinchey Modificado?', s: 'Diferenciación entre no complicada, absceso localizado o peritonitis difusa',
        ll: 'Hinchey 0 o Ia (No complicada / Flemón)',
        left: { t: 'Manejo Médico Conservador', s: 'Ambulatorio u hospitalario · Reposo digestivo + ATB oral o EV (Cipro + Metronidazol)', type: 'acc' },
        rl: 'Hinchey Ib o II (Absceso) / III o IV (Peritonitis)',
        right: { t: 'Drenaje Percutáneo o Laparotomía', s: 'Absceso ≥ 4 cm: Drenaje percutáneo guiado por TAC · Peritonitis (III-IV): Cx de Hartmann', type: 'crit' }
      },
      { t: 'Contraindicación Absoluta: Colonoscopía en Fase Aguda', s: 'Riesgo de perforación parietal por insuflación barométrica · Diferir colonoscopía a 6-8 semanas', type: 'warn' },
      { t: 'Estudio de Colon diferido a 6-8 semanas', s: 'Colonoscopía total obligatoria para descartar adenocarcinoma de colon izquierdo subyacente', type: 'acc' }
    ]),
    contexto: 'La diverticulosis colónica es una condición adquirida secundaria a debilidad de la pared en el sitio de penetración de los vasos rectos asociada a presiones intracólicas elevadas (dieta pobre en fibra). La diverticulitis aguda ocurre por la micro o macroperforación del divertículo tras la obstrucción por un fecalito. Denominada popularmente "la apendicitis del lado izquierdo", su manejo ha evolucionado: los casos no complicados se tratan médicamente sin cirugía, los abscesos se drenan por radiología intervencional, y la cirugía de urgencia (Operación de Hartmann) se reserva para la peritonitis purulenta o fecaloidea.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Localización y Presentación Clínica',
        paragraphs: [
          'Los divertículos colónicos son <strong>pseudodivertículos</strong> (herniaciones de la mucosa y submucosa a través de la capa muscular propia en los puntos débiles de penetración vascular). En Occidente y Chile, más del 90% asientan en el <strong>colon sigmoides y descendente</strong>, debido a su menor diámetro luminal y mayores presiones de segmentación (Ley de Laplace).',
          'La <strong>diverticulitis aguda</strong> se produce por la erosión de la pared diverticular provocada por un fecalito impactado, lo que genera isquemia local, necrosis transmural y <strong>microperforación</strong> con inflamación de la grasa pericólica circundante.',
          '<strong>Cuadro clínico clásico:</strong> Dolor constante y progresivo en la <strong>fosa ilíaca izquierda (FII)</strong> o hipogastrio de varios días de evolución, sensación febril, anorexia, náuseas y alteración del hábito intestinal (frecuentemente constipación, aunque puede haber diarrea). Al examen físico se constata dolor exquisito a la palpación en FII, resistencia muscular involuntaria, signo de Blumberg (+) en cuadrante inferior izquierdo y, en un 20% de los casos, una masa inflamatoria palpable sensible.'
        ]
      },
      {
        subhead: '2. Diagnóstico Tomográfico y Clasificación de Hinchey Modificada',
        paragraphs: [
          'El examen de elección indiscutido en la fase aguda es el <strong>TAC de abdomen y pelvis con contraste intravenoso</strong> (sensibilidad > 95% y especificidad > 98%). Signos tomográficos característicos: presencia de divertículos sigmoideos, <strong>engrosamiento concéntrico de la pared colónica > 4 mm</strong>, estriación de la grasa pericólica (<em>fat stranding</em>), presencia de colecciones líquidas loculadas (abscesos) y burbujas de gas extraluminal.',
          '<strong>Regla de Oro: La colonoscopía y el enema baritado están ESTRICTAMENTE CONTRAINDICADOS en la fase aguda</strong> debido al alto riesgo de convertir una microperforación sellada en una perforación libre con peritonitis fecal masiva por la insuflación de aire endoscópica.',
          '<strong>Clasificación de Hinchey modificada por Wasvary:</strong>',
          '• <strong>Hinchey 0:</strong> Diverticulitis leve; engrosamiento parietal sin flemón ni absceso.',
          '• <strong>Hinchey Ia:</strong> Flemón pericólico o inflamación pericólica localizada confinada al mesocolon.',
          '• <strong>Hinchey Ib:</strong> Absceso pericólico o mesocólico pequeño (< 4 cm).',
          '• <strong>Hinchey II:</strong> Absceso a distancia (pélvico, retroperitoneal o intraabdominal) habitualmente > 4 cm.',
          '• <strong>Hinchey III:</strong> Peritonitis purulenta generalizada sin comunicación libre con la luz colónica.',
          '• <strong>Hinchey IV:</strong> Peritonitis fecaloidea generalizada por disrupción macroscópica no sellada.'
        ]
      },
      {
        subhead: '3. Manejo Médico Conservador vs Drenaje Percutáneo Intervencional',
        paragraphs: [
          '<strong>Diverticulitis No Complicada (Hinchey 0 e Ia):</strong> Pacientes jóvenes, estables, sin comorbilidad grave y con adecuada tolerancia oral pueden manejarse de forma <strong>ambulatoria</strong> con dieta líquida fraccionada, analgesia con paracetamol y reposo. En pacientes con comorbilidades, ancianos, inmunodeprimidos o con fiebre elevada se indica <strong>hospitalización</strong> con régimen cero, hidratación EV y antibióticos parenterales: <strong>Ceftriaxona 1-2 g/día EV + Metronidazol 500 mg c/8h EV</strong> o Ciprofloxacino + Metronidazol.',
          '<strong>Absceso Localizado Pequeño (Hinchey Ib < 3-4 cm):</strong> Manejo hospitalario con antibióticos endovenosos de amplio espectro; más del 80% resuelven favorablemente sin necesidad de intervención invasiva.',
          '<strong>Absceso Pélvico o Grande (Hinchey II ≥ 4 cm):</strong> El tratamiento de elección es el <strong>Drenaje Percutáneo Guiado por TAC o Ecografía</strong> con catéter pigtail asociado a antibioticoterapia endovenosa. Este abordaje evita la laparotomía de urgencia en un ambiente séptico severo, permite controlar la infección y transforma una cirugía de urgencia con estoma en una resección colónica electiva posterior en un solo tiempo con anastomosis primaria.'
        ]
      },
      {
        subhead: '4. Indicaciones Quirúrgicas de Urgencia y Colonoscopía Diferida',
        paragraphs: [
          'Las indicaciones absolutas de <strong>cirugía de urgencia</strong> son: 1) Peritonitis generalizada purulenta o fecaloidea (Hinchey III y IV); 2) Falla del tratamiento médico o del drenaje percutáneo con empeoramiento de la sepsis; 3) Absceso inaccesible para drenaje percutáneo con deterioro clínico; 4) Neumoperitoneo masivo con shock séptico.',
          'La técnica clásica de urgencia es la <strong>Operación de Hartmann</strong> (sigmoidectomía con resección del segmento inflamado perforado, cierre del muñón rectal ciego y abocamiento del colon descendente como colostomía terminal en fosa ilíaca izquierda). En pacientes seleccionados con Hinchey III estables, cirujanos colorrectales experimentados pueden optar por resección con anastomosis primaria y ostomía de protección.',
          '<strong>Seguimiento a las 6 a 8 semanas: Colonoscopía Total Obligatoria</strong>. Una vez resuelto por completo el episodio agudo inflamatorio, todo paciente debe ser sometido a colonoscopía completa para <strong>descartar un adenocarcinoma de colon</strong>, dado que hasta un 2 a 5% de los cuadros diagnosticados inicialmente como diverticulitis corresponden en realidad a un cáncer de colon perforado o coexistente.'
        ]
      }
    ],
    table: {
      title: 'Clasificación de Hinchey Modificada y Algoritmo Terapéutico Escalonado',
      headers: ['Estadio Hinchey', 'Hallazgos Patológicos / Tomográficos', 'Estrategia Terapéutica de Elección', 'Criterios de Hospitalización / Cirugía'],
      rows: [
        ['Hinchey 0', 'Diverticulitis clínica; engrosamiento parietal sin flemón', 'Manejo médico ambulatorio; analgesia y dieta líquida', 'Hospitalizar solo si intolerancia oral o comorbilidad'],
        ['Hinchey Ia', 'Flemón o inflamación pericólica confinada a mesocolon', 'Hospitalización, reposo intestinal, ATB endovenosos', 'Ceftriaxona + Metronidazol EV; respuesta > 90%'],
        ['Hinchey Ib', 'Absceso pericólico o mesocólico pequeño (< 4 cm)', 'Antibioticoterapia EV parenteral exclusiva', 'Vigilancia tomográfica si hay persistencia febril'],
        ['Hinchey II', 'Absceso a distancia pélvico o retroperitoneal (≥ 4 cm)', 'Drenaje percutáneo guiado por TAC + ATB EV', 'Evita colostomía de urgencia; resección electiva diferida'],
        ['Hinchey III', 'Peritonitis purulenta generalizada sin contenido fecal libre', 'Laparotomía urgente: Operación de Hartmann o resección + ileo', 'Cirugía inmediata con lavado peritoneal y UCI'],
        ['Hinchey IV', 'Peritonitis fecaloidea generalizada por perforación macroscópica', 'Operación de Hartmann de urgencia + Resucitación intensiva', 'Mortalidad 20-30%; lavado profuso y soporte en UPC']
      ]
    },
    severityTable: {
      title: 'Criterios de Gravedad, Falla de Tratamiento y Selección Quirúrgica',
      headers: ['Parámetro de Riesgo', 'Definición de Alarma', 'Significado Fisiopatológico', 'Conducta Inmediata'],
      rows: [
        ['Neumoperitoneo masivo', 'Aire libre difuso subdiafragmático o en varios cuadrantes', 'Perforación libre de asa colónica hacia cavidad peritoneal', 'Laparotomía exploradora inmediata'],
        ['Inestabilidad hemodinámica', 'PAS < 90 mmHg, oliguria, lactato > 2.0 mmol/L', 'Shock séptico de origen abdominal (Hinchey III-IV)', 'Resucitación Parkland-like + Hartmann urgente'],
        ['Falla de manejo médico', 'Persistencia de fiebre o dolor > 48-72 h con ATB EV', 'Progresión de flemón a absceso o perforación secundaria', 'Repetir TAC de abdomen con contraste urgente'],
        ['Inmunosupresión basal', 'Corticoides crónicos, quimioterapia, trasplante renal', 'Ausencia de respuesta leucocitaria; alto riesgo de perforación oculta', 'Hospitalización obligatoria y umbral quirúrgico bajo']
      ]
    },
    treatmentTable: {
      title: 'Protocolo Farmacológico y Tiempos de Procedimientos en Diverticulitis',
      headers: ['Intervención', 'Fármacos / Abordaje Técnico', 'Duración / Ventana Temporal', 'Reglas Clínicas Clave'],
      rows: [
        ['Antibioticoterapia Ambulatoria', 'Ciprofloxacino 500 mg c/12h + Metronidazol 500 mg c/8h oral', '7 a 10 días por vía oral', 'Alternativa: Amoxicilina/Clavulánico 875/125 mg c/8h'],
        ['Antibioticoterapia Parenteral', 'Ceftriaxona 1-2 g/día EV + Metronidazol 500 mg c/8h EV', 'Mínimo 3 a 5 días EV; completar 10-14 días oral', 'Cubrir enterobacterias (E. coli) y anaerobios (B. fragilis)'],
        ['Drenaje Percutáneo', 'Catéter pigtail 8-12 Fr guiado por TAC', 'Mantener hasta débito purulento < 10-15 mL/24h', 'Indicado en abscesos ≥ 4 cm accesibles sin interposición de asas'],
        ['Colonoscopía de Control', 'Endoscopía digestiva baja total bajo sedación', '6 a 8 semanas post-resolución del episodio agudo', 'OBLIGATORIA para descartar adenocarcinoma de colon enmascarado']
      ]
    },
    vignette: 'Hombre de 62 años, hipertenso en tratamiento con enalapril, consulta por dolor constante de 3 días de evolución localizado en la fosa ilíaca izquierda, que ha aumentado progresivamente de intensidad, acompañado de náuseas, constipación y temperatura axilar de 38.2 °C. Al examen físico destaca abdomen distendido, con dolor marcado a la palpación en fosa ilíaca izquierda, resistencia muscular involuntaria focal y signo de Blumberg positivo en dicho cuadrante. El hemograma muestra 15.200 leucocitos/mm³ con 82% neutrófilos y PCR de 120 mg/L. Se realiza un TAC de abdomen y pelvis con contraste intravenoso que demuestra múltiples divertículos en colon sigmoides, engrosamiento parietal de 7 mm con importante estriación de la grasa pericólica y una colección líquida hipodensa tabicada con burbujas de gas de 5.5 cm de diámetro adyacente al sigmoides, sin líquido libre en otros cuadrantes.',
    explicacion: 'El paciente presenta una diverticulitis aguda complicada con un absceso pélvico pericólico de 5.5 cm de diámetro, clasificada como Hinchey II (absceso a distancia/pélvico ≥ 4 cm). En abscesos diverticulares mayores o iguales a 4 cm, la conducta estándar y de elección es hospitalizar en sala de cirugía, mantener régimen cero, iniciar hidratación parenteral y antibioticoterapia endovenosa de amplio espectro (ceftriaxona + metronidazol), y realizar un drenaje percutáneo guiado por TAC con colocación de catéter pigtail. Este enfoque evita una cirugía de Hartmann de urgencia con colostomía y permite enfriar el proceso para una eventual sigmoidectomía electiva con anastomosis primaria.',
    keyPoints: [
      'La diverticulitis aguda ocurre por microperforación diverticular en el colon sigmoides y se presenta con dolor en FII, fiebre y Blumberg (+).',
      'El TAC de abdomen y pelvis con contraste intravenoso es el examen de primera línea obligatorio para diagnosticar y etapificar según Hinchey.',
      'La colonoscopía está FORMALMENTE CONTRAINDICADA en la fase aguda por riesgo inminente de perforación barométrica libre.',
      'Abscesos diverticulares ≥ 4 cm (Hinchey II) se manejan de elección con drenaje percutáneo guiado por TAC + antibióticos endovenosos.',
      'Abscesos pequeños < 3-4 cm (Hinchey Ib) responden exitosamente a tratamiento médico exclusivo con antibióticos endovenosos.',
      'La peritonitis generalizada purulenta o fecal (Hinchey III-IV) es una emergencia quirúrgica absoluta que exige Operación de Hartmann.',
      'A las 6-8 semanas de resuelto el cuadro agudo, la colonoscopía completa es mandatoria para descartar cáncer colorrectal subyacente.'
    ],
    questions: [
      {
        stem: 'Un hombre de 65 años consulta por dolor en fosa ilíaca izquierda y fiebre de 38.5 °C. El TAC de abdomen y pelvis con contraste revela una diverticulitis aguda sigmoidea complicada con un absceso pélvico de 5 cm de diámetro bien delimitado. El paciente se encuentra hemodinámicamente estable sin signos de peritonitis generalizada. ¿Cuál es el tratamiento inicial más adecuado?',
        options: [
          { id: 'A', text: 'Laparotomía exploradora urgente y Operación de Hartmann' },
          { id: 'B', text: 'Antibióticos endovenosos más drenaje percutáneo guiado por TAC' },
          { id: 'C', text: 'Antibioticoterapia oral ambulatoria con ciprofloxacino y metronidazol' },
          { id: 'D', text: 'Colonoscopía de urgencia para descompresión endoscópica del absceso' },
          { id: 'E', text: 'Hemicolectomía izquierda laparoscópica inmediata' }
        ],
        correcta: 'B',
        explicacion: 'En la diverticulitis aguda complicada con un absceso loculado ≥ 4 cm (Hinchey II) en un paciente hemodinámicamente estable, el tratamiento de elección es la antibioticoterapia endovenosa combinada con el drenaje percutáneo guiado por TAC. Este procedimiento logra controlar el foco séptico en más del 80-90% de los casos sin necesidad de laparotomía de urgencia ni colostomía. La operación de Hartmann (A) se reserva para peritonitis difusa o falla del drenaje.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.008'
      },
      {
        stem: 'Un paciente de 58 años se recupera satisfactoriamente tras 6 días de hospitalización por un primer episodio de diverticulitis aguda no complicada confirmada por TAC de abdomen. Al momento del alta hospitalaria, ¿cuál es la indicación médica más relevante respecto al estudio diferido de su colon?',
        options: [
          { id: 'A', text: 'Realizar colonoscopía total a las 6 a 8 semanas para descartar neoplasia maligna oculta' },
          { id: 'B', text: 'Programar enema baritado a los 10 días del alta' },
          { id: 'C', text: 'No requiere estudios adicionales por tener diagnóstico tomográfico confirmado' },
          { id: 'D', text: 'Indicar colonoscopía inmediata antes del alta médica' },
          { id: 'E', text: 'Solicitar antígeno carcinoembrionario y ecografía abdominal de control' }
        ],
        correcta: 'A',
        explicacion: 'En todo paciente que ha sufrido un episodio de diverticulitis aguda, es obligatorio realizar una colonoscopía total diferida a las 6 u 8 semanas del cuadro agudo (una vez que la inflamación haya cedido por completo). El objetivo principal es descartar un adenocarcinoma de colon o pólipos avanzados que puedan haberse manifestado con una clínica similar o haber provocado la perforación diverticular. Realizarla antes del alta (D) o a los pocos días conlleva riesgo de perforación.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.008'
      },
      {
        stem: 'Una mujer de 72 años ingresa a urgencias por dolor abdominal difuso severo, taquicardia de 118 lpm, PA 85/50 mmHg y temperatura de 39.0 °C. Al examen físico presenta abdomen en tabla con dolor exquisito y contractura involuntaria en los cuatro cuadrantes. El TAC abdominal revela diverticulosis sigmoidea con perforación libre colónica, presencia de abundante neumoperitoneo y líquido libre purulento-fecaloideo difuso en toda la cavidad peritoneal. Tras iniciar reanimación con fluidos y antibióticos EV, ¿cuál es la conducta quirúrgica indicada?',
        options: [
          { id: 'A', text: 'Drenaje percutáneo de colecciones bajo visión tomográfica' },
          { id: 'B', text: 'Laparotomía exploradora de urgencia con Operación de Hartmann' },
          { id: 'C', text: 'Laparoscopía diagnóstica con lavado peritoneal exclusivo sin resección' },
          { id: 'D', text: 'Instalación de sonda rectal descompresiva y observación' },
          { id: 'E', text: 'Anastomosis ileorrectal primaria sin ostomía' }
        ],
        correcta: 'B',
        explicacion: 'La paciente presenta una diverticulitis aguda Hinchey IV (peritonitis fecaloidea generalizada con shock séptico y neumoperitoneo masivo). La indicación quirúrgica de urgencia es absoluta e inaplazable. La técnica de elección es la Operación de Hartmann (resección del colon sigmoides perforado, cierre del muñón rectal y colostomía terminal en FII), acompañada de un lavado peritoneal profuso. El lavado exclusivo sin resección (C) tiene una alta tasa de mortalidad en peritonitis fecal.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.008'
      },
      {
        stem: '¿Cuál de los siguientes esquemas antibióticos parenterales es el más adecuado para el manejo hospitalario de una diverticulitis aguda complicada con flemón pericólico (Hinchey Ia)?',
        options: [
          { id: 'A', text: 'Ceftriaxona 1 a 2 g/día EV más Metronidazol 500 mg cada 8 horas EV' },
          { id: 'B', text: 'Cloxacilina 2 g cada 4 horas EV en monoterapia' },
          { id: 'C', text: 'Vancomicina 1 g cada 12 horas EV más Amikacina 1 g cada 24 horas EV' },
          { id: 'D', text: 'Claritromicina 500 mg cada 12 horas EV más Cefazolina 1 g cada 8 horas EV' },
          { id: 'E', text: 'Azitromicina 500 mg cada 24 horas EV en monoterapia' }
        ],
        correcta: 'A',
        explicacion: 'La flora bacteriana implicada en la diverticulitis aguda es la flora colónica endógena mixta, compuesta fundamentalmente por bacilos gramnegativos aerobios y facultativos (Escherichia coli, Klebsiella spp.) y bacterias anaerobias estrictas (Bacteroides fragilis). El esquema clásico y altamente efectivo es la combinación de Ceftriaxona (cubre gramnegativos) con Metronidazol (cubre anaerobios). Alternativas válidas incluyen Ciprofloxacino + Metronidazol o Piperacilina/Tazobactam.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.008'
      }
    ]
  },
  // ==========================================================================
  // TEMA 11.4: OBSTRUCCIÓN INTESTINAL MECÁNICA (TIER 3 · 4 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-04',
    classId: 'cirugia-04',
    tier: 3,
    blockNum: 1,
    blockName: 'Abdomen Agudo Quirúrgico',
    topicLabel: '11.4',
    title: 'Obstrucción Intestinal Mecánica: Bridas vs Vólvulo Sigmoides vs Cáncer',
    perfilCode: '4.01.2.005',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Sin garantía GES específica · Cobertura por Ley de Urgencias en casos con riesgo vital o estrangulación isquémica.',
    reconstrucciones: 'EUNACOM Julio 2024 (Q#117) · EUNACOM Enero 2023 (Q#173) · EUNACOM Diciembre 2022 (Q#128) · EUNACOM Agosto 2021 (Q#175)',
    frecuencia: 'Máxima frecuencia histórica en EUNACOM · Pregunta angular de urgencias quirúrgicas con 12 reconstrucciones oficiales',
    diagram: flowCirugia('Algoritmo Diagnóstico y Conducta en Obstrucción Intestinal Mecánica', [
      { t: 'Sospecha de Obstrucción Intestinal Mecánica', s: 'Tetraedro clásico: Dolor cólico + Distensión abdominal + Vómitos + Detención de gases y heces', type: 'acc' },
      { t: 'Rx de Abdomen Simple de Pie y Decúbito (o TAC de Abdomen)', s: 'Niveles hidroaéreos en escalera (delgado) vs Grano de café (vólvulo) vs Dilatación marco colónico', type: 'warn' },
      { k: 'split', q: '¿Etiología y Nivel de Obstrucción en Imágenes?', s: 'Diferenciación entre delgado (bridas/hernias) y colon (vólvulo/cáncer)',
        ll: 'Intestino Delgado: Bridas / Hernia / Sin Estrangulación',
        left: { t: 'Manejo Inicial Conservador', s: 'Sonda nasogástrica (SNG) a caída libre + Hidratación EV + Balances · Laparotomía si falla > 48 h', type: 'dec' },
        rl: 'Vólvulo de Sigmoides (Signo grano de café)',
        right: { t: 'Desvolvulación Endoscópica Urgente', s: 'Rectosigmoidoscopía rígida o colonoscopía descompresiva · Sonda rectal · Cirugía diferida', type: 'crit' }
      },
      { t: 'Signos de Estrangulación o Sufrimiento de Asa (Urgencia Absoluta)', s: 'Fiebre, taquicardia, dolor continuo no cólico, peritonismo, leucocitosis, acidosis láctica', type: 'crit' },
      { t: 'Cirugía de Urgencia Inmediata', s: 'Laparotomía urgente para resección de segmento necrosado y descompresión', type: 'acc' }
    ]),
    contexto: 'La obstrucción intestinal mecánica representa hasta el 20% de todos los ingresos por abdomen agudo. Su etiología depende críticamente del segmento comprometido: en el intestino delgado, las bridas o adherencias postoperatorias son la causa más frecuente (60-70%), seguidas por las hernias atascadas; en el colon, el cáncer colorrectal encabeza la lista (60%), seguido por el vólvulo de sigmoides (20%). El mayor desafío clínico es diagnosticar precozmente el sufrimiento de asa (estrangulación), el cual transforma un cuadro médico-quirúrgico electivo en una urgencia de laparotomía inmediata por riesgo de necrosis y perforación.',
    contentSections: [
      {
        subhead: '1. Fisiopatología, Semiología y Tetraedro Cardinal',
        paragraphs: [
          'La oclusión mecánica luminal desencadena una cascada fisiopatológica: acumulación proximal de gas deglutido y líquido digestivo (hasta 8-10 litros diarios), distensión progresiva de asas, aumento de la presión intraluminal, hiperperistaltismo reflejo de lucha y compromiso del retorno venoso mural, lo que conduce a trasudación de líquido al tercer espacio, hipovolemia severa y desequilibrio hidroelectrolítico (alcalosis hipoclorémica en obstrucciones altas, acidosis metabólica en bajas o estranguladas).',
          '<strong>Tetraedro cardinal de la obstrucción intestinal:</strong>',
          '1) <strong>Dolor abdominal:</strong> Típicamente cólico, intermitente y periumbilical en fases iniciales. <em>Alerta: Si el dolor se torna continuo, sordo y exquisito, debe sospecharse estrangulación e isquemia mural.</em>',
          '2) <strong>Distensión abdominal:</strong> Mínima o ausente en obstrucciones altas (duodeno o yeyuno proximal) y marcada o masiva en obstrucciones bajas (íleon distal y colon).',
          '3) <strong>Vómitos:</strong> Precoces, profusos y biliosos en obstrucciones altas; tardíos, fecaloideos y precedidos de náuseas intensas en obstrucciones bajas.',
          '4) <strong>Detención de emisión de gases y heces:</strong> Signo cardinal tardío pero constante en la obstrucción completa.',
          'Al examen físico destacan ruidos hidroaéreos de lucha metálicos o de "bazuqueo" en fase precoz, seguidos de silencio auscultatorio por agotamiento muscular. <strong>Es mandatorio palpar minuciosamente todos los orificios herniarios (inguinal, crural, umbilical)</strong>: una hernia crural atascada no diagnosticada es un error fatal prevenible.'
        ]
      },
      {
        subhead: '2. Diagnóstico Imagenológico: Radiología Simple vs TAC',
        paragraphs: [
          'La <strong>Radiografía simple de abdomen de pie y decúbito</strong> es el estudio inicial: en intestino delgado muestra dilatación central de asas (> 3 cm), <strong>niveles hidroaéreos en escalera</strong> y pliegues circulares o <em>válvulas conniventes</em> que atraviesan la totalidad del diámetro luminal, con ausencia de gas en marco colónico.',
          'En obstrucción de colon, se observa distensión periférica en marco (> 6 cm en colon, > 9 cm en ciego) con haustras que no cruzan completamente la luz. En el <strong>vólvulo de sigmoides</strong>, la radiografía es diagnóstica en más del 80% de los casos al revelar el clásico <strong>signo del grano de café o asa en omega</strong>: un asa sigmoidea masivamente distendida que asciende desde la fosa ilíaca izquierda hacia el hipocondrio o cuadrante superior derecho, con dos paredes adyacentes gruesas centrales.',
          'El <strong>TAC de abdomen y pelvis con contraste intravenoso</strong> es el estándar de oro actual: identifica con precisión la zona de transición (sitio exacto de obstrucción), la etiología subyacente (brida, tumor, intususcepción, cálculo biliar en íleo biliar) y evalúa la viabilidad vascular (neumatosis intestinal, gas en vena porta, engrosamiento parietal con falta de realce en estrangulación).'
        ]
      },
      {
        subhead: '3. Criterios Diagnósticos de Sufrimiento de Asa (Estrangulación)',
        paragraphs: [
          'La <strong>estrangulación intestinal</strong> se define por la oclusión concomitante del suministro sanguíneo mesentérico arterial o venoso (frecuente en hernias atascadas, vólvulos y obstrucciones en asa cerrada con válvula ileocecal continente). Provoca infarto transmural, necrosis bacteriana y perforación peritonítica en cuestión de horas.',
          '<strong>Criterios cardinales de estrangulación (obligan a cirugía inmediata):</strong>',
          '• <strong>Dolor abdominal continuo</strong>, intenso, refractario a analgesia, que pierde su carácter cólico intermitente.',
          '• <strong>Signos de irritación peritoneal focal o generalizada</strong> (resistencia muscular involuntaria y Blumberg positivo).',
          '• <strong>Fiebre sostenida</strong> (> 38.0 °C) y taquicardia desproporcionada (> 100-110 lpm).',
          '• <strong>Leucocitosis marcada con desviación izquierda</strong> (> 15.000/mm³).',
          '• <strong>Acidosis metabólica con elevación de lactato sérico</strong> (marcador de hipoperfusión tisular e isquemia mesentérica).'
        ]
      },
      {
        subhead: '4. Manejo Terapéutico: Bridas vs Vólvulo de Sigmoides vs Cáncer de Colon',
        paragraphs: [
          '<strong>Obstrucción por Bridas/Adherencias (Intestino Delgado):</strong> En ausencia de signos de estrangulación, el tratamiento inicial es <strong>médico-conservador</strong>: régimen cero, <strong>Sonda Nasogástrica (SNG) a caída libre</strong> para descompresión gástrica (reduce el riesgo de broncoaspiración y vómitos), reposición hidroelectrolítica agresiva con Ringer Lactato o Suero Fisiológico y balance hídrico estricto. El 70-80% de las obstrucciones por bridas resuelven espontáneamente en las primeras 24 a 48 horas. Si no hay resolución en 48-72 horas o aparecen signos de estrangulación, se indica laparotomía/laparoscopía con adhesiolisis.',
          '<strong>Vólvulo de Sigmoides No Complicado (Sin gangrena ni peritonitis):</strong> El tratamiento de elección es la <strong>desvolvulación y descompresión endoscópica urgente</strong> mediante rectosigmoidoscopía rígida o colonoscopía con colocación de una sonda rectal tutor durante 24-48 horas. Si la mucosa está viable, el procedimiento es exitoso en >80%; sin embargo, la recurrencia supera el 50%, por lo que se programa <strong>sigmoidectomía electiva en la misma hospitalización</strong>. Si hay mucosa necrótica o peritonitis: laparotomía urgente con Operación de Hartmann.',
          '<strong>Cáncer de Colon Obstructivo:</strong> Se presenta como obstrucción colónica baja progresiva con válvula ileocecal continente (asa cerrada; riesgo inminente de perforación cecal por diastasis cuando el diámetro cecal supera los 10-12 cm). El tratamiento de urgencia es quirúrgico: resección oncológica con colostomía (Hartmann) o colocación de stent colónico autoexpandible como puente a cirugía en centros terciarios.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial: Obstrucción de Intestino Delgado vs Obstrucción de Colon',
      headers: ['Característica Clínica / Radiológica', 'Obstrucción Intestino Delgado (Alta)', 'Obstrucción de Colon (Baja)', 'Vólvulo de Sigmoides'],
      rows: [
        ['Etiología principal', 'Bridas postquirúrgicas (60-70%), hernias (20%)', 'Cáncer colorrectal (60%), diverticulitis (10%)', 'Rotación sigmoidea sobre su meso elongado (chagas, dieta)'],
        ['Dolor abdominal', 'Cólico periumbilical precoz y muy frecuente', 'Cólico en hipogastrio o flancos, insidioso', 'Dolor cólico que se torna sordo en hemiabdomen izquierdo'],
        ['Vómitos', 'Precoces, abundantes, biliosos a porráceos', 'Tardíos o ausentes; fecaloideos en fase avanzada', 'Tardíos; náuseas precedentes'],
        ['Distensión abdominal', 'Discreta o moderada; central', 'Severa, marcada, periférica en marco', 'Masiva, asimétrica, timpanismo marcado'],
        ['Radiografía simple', 'Asas centrales en escalera con válvulas conniventes', 'Marco colónico dilatado con haustras periféricas', 'Signo del "grano de café" o asa en omega nacida en FII'],
        ['Manejo de primera línea', 'Médico conservador (SNG + Sueros) x 24-48 h', 'Quirúrgico según etiología (o stent colónico)', 'Desvolvulación endoscópica urgente + sonda rectal']
      ]
    },
    severityTable: {
      title: 'Criterios de Estrangulación y Signos de Alarma en Obstrucción Intestinal',
      headers: ['Criterio de Gravedad', 'Hallazgo Clínico / Laboratorio', 'Mecanismo Patológico', 'Conducta Quirúrgica Mandatoria'],
      rows: [
        ['Dolor continuo', 'Dolor sordo persistente entre paroxismos cólicos', 'Isquemia parietal sostenida e inflamación peritoneal', 'Laparotomía exploradora urgente sin dilación'],
        ['Irritación peritoneal', 'Defensa muscular voluntaria o involuntaria y Blumberg (+)', 'Microperforación o trasudación séptica transmural', 'Aseo quirúrgico, enterectomía y anastomosis o estoma'],
        ['Fiebre y taquicardia', 'T° > 38.0 °C y FC > 100 lpm persistente', 'Síndrome de respuesta inflamatoria sistémica / sepsis', 'Resucitación hemodinámica intensiva y pabellón'],
        ['Lactato elevado', 'Lactato sérico > 2.0-2.5 mmol/L y acidosis metabólica', 'Metabolismo anaeróbico por hipoperfusión intestinal', 'Marcador bioquímico de necrosis intestinal establecida'],
        ['Neumatosis en TAC', 'Gas intramural en asa o gas en ramas de vena porta', 'Disrupción mucosa con pasaje de gas a la pared y lecho', 'Cirugía de rescate vital inmediata por infarto mesentérico']
      ]
    },
    treatmentTable: {
      title: 'Manejo Médico Conservador vs Opciones Quirúrgicas según Etiología',
      headers: ['Patología / Escenario', 'Tratamiento Inicial de Elección', 'Criterios de Fracaso / Conversión', 'Procedimiento Quirúrgico Definitivo'],
      rows: [
        ['Bridas No Estranguladas', 'SNG a caída libre + Ringer Lactato EV + Balance x 24-48 h', 'Falta de tránsito a las 48-72 h o dolor continuo', 'Laparotomía / Laparoscopía con lisis de bridas (adhesiolisis)'],
        ['Hernia Inguinal/Crural Atascada', 'Intento prudente de reducción suave en < 4-6 h (taxis)', 'Dolor exquisito, cambios cutáneos eritematosos o peritonismo', 'Hernioplastia urgente con exploración y resección de asa necrosada'],
        ['Vólvulo Sigmoides No Necrosado', 'Desvolvulación endoscópica (rectosigmoidoscopía) + sonda', 'Isquemia mucosa endoscópica, perforación o peritonitis', 'Sigmoidectomía electiva en misma hospitalización (o Hartmann)'],
        ['Cáncer Colorrectal Oclusivo', 'Estabilización, corrección electrolítica y TAC urgente', 'Riesgo de perforación cecal si diámetro ciego > 10-12 cm', 'Operación de Hartmann o colectomía subtotal de urgencia']
      ]
    },
    vignette: 'Hombre de 71 años, postrado parcial por secuela de ACV y con constipación crónica pertinaz, es llevado a urgencias por sus cuidadores debido a 48 horas de detención completa de emisión de gases y deposiciones, asociado a distensión abdominal progresiva y vómitos alimentarios en dos ocasiones. Al examen físico: PA 126/78 mmHg, FC 88 lpm, afebril. Destaca un abdomen groseramente distendido, timpánico en su totalidad, no doloroso a la palpación profunda y sin signos de irritación peritoneal. Los orificios herniarios están libres y el tacto rectal muestra ampolla vacía. La radiografía simple de abdomen de pie muestra una notable dilatación de un asa colónica en forma de "U" invertida que ocupa desde la pelvis hasta el hipocondrio derecho, configurando el signo del "grano de café", sin niveles hidroaéreos en intestino delgado.',
    explicacion: 'El cuadro clínico y radiológico es patognomónico de un vólvulo de colon sigmoides no complicado (sin signos de peritonitis, fiebre ni sepsis). La torsión axial del mesocolon sigmoides sobre su eje genera una obstrucción mecánica colónica en asa cerrada. En ausencia de signos de estrangulación o perforación peritoneal, la conducta inicial de elección es la desvolvulación y descompresión endoscópica mediante rectosigmoidoscopía rígida o colonoscopía flexible con colocación de una sonda rectal tutora. Tras el éxito de la descompresión, se programa la sigmoidectomía electiva durante la misma hospitalización para prevenir la recidiva, que supera el 50%. La cirugía de urgencia (Hartmann) se reserva para casos con necrosis mucosa, perforación o falla del procedimiento endoscópico.',
    keyPoints: [
      'La causa más frecuente de obstrucción de intestino delgado son las bridas postoperatorias (60-70%); en colon es el cáncer colorrectal (60%).',
      'El tetraedro de la obstrucción es dolor cólico, vómitos, distensión abdominal y detención de gases y heces.',
      'En intestino delgado sin estrangulación, el manejo inicial es MÉDICO CONSERVADOR con Sonda Nasogástrica y fluidos EV por 24-48 horas.',
      'Signos de estrangulación (dolor continuo, fiebre, taquicardia, peritonismo, leucocitosis, acidosis láctica) exigen laparotomía inmediata.',
      'El vólvulo de sigmoides muestra el signo del "grano de café" y se maneja inicialmente con desvolvulación endoscópica si no hay necrosis.',
      'Siempre palpar orificios herniarios: la hernia crural atascada es una causa típica y grave de obstrucción en mujeres añosas.',
      'En obstrucción colónica en asa cerrada con válvula continente, un diámetro cecal > 10-12 cm indica riesgo inminente de perforación diastásica.'
    ],
    questions: [
      {
        stem: 'Un hombre de 45 años, con antecedente de apendicectomía abierta hace 5 años, consulta por dolor cólico periumbilical, vómitos biliosos reiterados y distensión abdominal de 24 horas de evolución, con detención de eliminación de heces y gases. Al examen físico está afebril, hemodinámicamente estable, con abdomen distendido, ruidos metálicos aumentados, blando y depresible, sin signos de irritación peritoneal. La radiografía de abdomen de pie confirma dilatación de asas delgadas con niveles hidroaéreos en escalera y ausencia de gas colónico. ¿Cuál es el tratamiento inicial más apropiado?',
        options: [
          { id: 'A', text: 'Laparotomía exploradora urgente con enterostomía de descarga' },
          { id: 'B', text: 'Instalación de sonda nasogástrica a caída libre, hidratación endovenosa y vigilancia clínica' },
          { id: 'C', text: 'Administración de laxantes osmóticos orales y enemas evacuantes a repetición' },
          { id: 'D', text: 'Colonoscopía de urgencia para descompresión intestinal retrógrada' },
          { id: 'E', text: 'Antibioticoterapia de amplio espectro y alta médica con control ambulatorio' }
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta una obstrucción mecánica de intestino delgado secundaria a bridas postquirúrgicas, no complicada (sin signos de estrangulación ni peritonitis). En esta fase, la conducta inicial de elección es el manejo médico conservador consistente en régimen cero, descompresión mediante sonda nasogástrica (SNG) a caída libre, hidratación parenteral y monitorización clínica estricta durante 24 a 48 horas, resolviéndose el cuadro en el 70-80% de los casos sin cirugía. Los laxantes (C) están contraindicados.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.005'
      },
      {
        stem: 'Un paciente de 74 años consulta por dolor y distensión abdominal masiva. La radiografía de abdomen demuestra una gran dilatación del sigmoides con el signo clásico del "grano de café". El paciente está afebril, normotenso y su abdomen es timpánico y no doloroso a la palpación, sin peritonismo. ¿Cuál es la conducta inicial de elección?',
        options: [
          { id: 'A', text: 'Operación de Hartmann de urgencia' },
          { id: 'B', text: 'Desvolvulación endoscópica mediante rectosigmoidoscopía o colonoscopía' },
          { id: 'C', text: 'Instalación de sonda nasogástrica y tratamiento médico expectante' },
          { id: 'D', text: 'Laparotomía exploradora con cecostomía percutánea' },
          { id: 'E', text: 'Enema baritado a alta presión para reducción hidrostática' }
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta un vólvulo de sigmoides no complicado (sin signos de necrosis, peritonitis ni sepsis). La conducta inicial estandarizada es la desvolvulación y descompresión endoscópica urgente mediante rectosigmoidoscopía rígida o colonoscopía flexible, habitualmente dejando una sonda rectal tutora. Este procedimiento tiene éxito en más del 80% de los casos y permite enfriar el cuadro para realizar una sigmoidectomía electiva con anastomosis primaria en la misma hospitalización, evitando una colostomía de Hartmann (A).',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.005'
      },
      {
        stem: '¿Cuál de los siguientes hallazgos clínicos o de laboratorio es el indicador más sugerente de estrangulación (isquemia parietal intestinal) en un paciente con obstrucción mecánica de intestino delgado?',
        options: [
          { id: 'A', text: 'Presencia de dolor cólico intermitente que cede entre crisis' },
          { id: 'B', text: 'Ruidos hidroaéreos de tono metálico con bazuqueo gástrico' },
          { id: 'C', text: 'Dolor abdominal continuo, resistencia muscular involuntaria y acidosis láctica' },
          { id: 'D', text: 'Vómitos biliosos abundantes de inicio precoz' },
          { id: 'E', text: 'Visualización de niveles hidroaéreos en escalera en la radiografía simple' }
        ],
        correcta: 'C',
        explicacion: 'La estrangulación intestinal implica el compromiso vascular del asa ocluida, evolucionando a necrosis y perforación. Sus manifestaciones cardinales son la transformación del dolor de cólico a continuo intenso, la aparición de signos de irritación peritoneal (defensa involuntaria, Blumberg +), fiebre, taquicardia sostenida, leucocitosis marcada y acidosis metabólica con hiperlactatemia (>2 mmol/L) por hipoperfusión tisular. Los ruidos metálicos (B) y el dolor cólico (A) son propios de la fase no complicada.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.005'
      },
      {
        stem: 'Una mujer de 82 años sin antecedentes de cirugías abdominales previas consulta por vómitos fecaloideos, distensión y dolor abdominal de 2 días de evolución. Al examen físico destaca distensión abdominal moderada y a la inspección de la región inguinal se palpa una masa dolorosa irreductible de 2 cm por debajo del ligamento inguinal, medial a los vasos femorales. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Hernia inguinal indirecta estrangulada' },
          { id: 'B', text: 'Hernia crural (femoral) atascada' },
          { id: 'C', text: 'Adenitis inguinal inflamatoria' },
          { id: 'D', text: 'Hernia obturatriz incarcerada' },
          { id: 'E', text: 'Aneurisma femoral trombosado' }
        ],
        correcta: 'B',
        explicacion: 'En mujeres añosas sin antecedentes quirúrgicos que debutan con obstrucción intestinal, la causa principal es una hernia externa atascada. La localización anatómica descrita (por debajo del ligamento inguinal y medial a la vena femoral, en el anillo crural) corresponde específicamente a una hernia crural o femoral. Las hernias crurales tienen el mayor riesgo de atascamiento y estrangulación isquémica de todas las hernias de pared abdominal debido a la rigidez del anillo crural (ligamento de Gimbernat y Cooper), constituyendo una urgencia quirúrgica absoluta.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.005'
      }
    ]
  },
  // ==========================================================================
  // TEMA 11.5: PERITONITIS GENERALIZADA & ABDOMEN PERFORATIVO (TIER 2 · 2-3 PÁGINAS)
  // ==========================================================================
  {
    id: 'cir-05',
    classId: 'cirugia-05',
    tier: 2,
    blockNum: 1,
    blockName: 'Abdomen Agudo Quirúrgico',
    topicLabel: '11.5',
    title: 'Peritonitis Generalizada & Abdomen Perforativo (Neumoperitoneo)',
    perfilCode: '4.01.2.003',
    dx: 'Específico',
    tx: 'Inicial',
    seg: 'Derivar',
    ges: 'Sin garantía GES específica · Cobertura por Ley de Urgencias Médicas Vitales ante riesgo inminente de shock séptico.',
    reconstrucciones: 'EUNACOM Julio 2023 (Q#104) · EUNACOM Diciembre 2020 (Q#78) · EUNACOM Julio 2018 (Q#33)',
    frecuencia: 'Alta frecuencia en el EUNACOM · Emergencia quirúrgica mayor del abdomen agudo',
    diagram: flowCirugia('Enfrentamiento de la Peritonitis Generalizada y Abdomen Perforativo', [
      { t: 'Paciente con Dolor Súbito "En Puñalada" y Abdomen en Tabla', s: 'Signos de peritonitis difusa: Dolor a la descompresión en 4 cuadrantes + Rigidez involuntaria', type: 'acc' },
      { t: 'Rx de Tórax de Pie o TAC de Abdomen de Urgencia', s: 'Pesquisa de neumoperitoneo (signo de la media luna subdiafragmática de Jobert)', type: 'warn' },
      { k: 'split', q: '¿Presencia de Neumoperitoneo / Abdomen Perforativo?', s: 'Confirmación de perforación de víscera hueca vs peritonitis primaria',
        ll: 'Neumoperitoneo (+) o Peritonitis Secundaria Quirúrgica',
        left: { t: 'Laparotomía Exploradora Urgente', s: 'Control del foco séptico + Lavado profuso + Sutura con parche de Graham o resección', type: 'crit' },
        rl: 'Sin Neumoperitoneo en Paciente Cirrótico con Ascitis',
        right: { t: 'Paracentesis Diagnóstica (Descartar PBE)', s: 'Recuento PMN ≥ 250/mm³ en líquido ascítico · Tratamiento médico con Cefotaxima EV', type: 'dec' }
      },
      { t: 'Reanimación Hemodinámica Intensiva Preoperatoria', s: 'Cristaloides en bolos agresivos + ATB amplio espectro parenteral + Sonda Foley y SNG', type: 'acc' }
    ]),
    contexto: 'La peritonitis generalizada es la inflamación difusa del peritoneo provocada por contaminación bacteriana o química. La distinción cardinal es entre la Peritonitis Primaria o Espontánea (PBE, que se presenta en cirróticos con ascitis, es monomicrobiana y se trata médicamente con cefalosporinas de 3ª generación sin cirugía) y la Peritonitis Secundaria (causada por perforación de víscera hueca o dehiscencia anastomótica, polimicrobiana y que constituye una emergencia de laparotomía urgente). La perforación de úlcera gastroduodenal es el arquetipo del abdomen perforativo.',
    contentSections: [
      {
        subhead: '1. Clasificación Etiológica: Primaria vs Secundaria vs Terciaria',
        paragraphs: [
          '<strong>Peritonitis Primaria o Bacteriana Espontánea (PBE):</strong> Infección del líquido ascítico en pacientes con cirrosis hepática o síndrome nefrótico, en ausencia de un foco infeccioso intraabdominal evidente. Su mecanismo es la traslocación bacteriana entérica por vía hematógena o linfática. Es <strong>monomicrobiana</strong> (Escherichia coli 60%, Klebsiella pneumoniae, Streptococcus pneumoniae). Su diagnóstico se confirma mediante <strong>paracentesis con recuento de polimorfonucleares (PMN) ≥ 250/mm³</strong> y su tratamiento es estrictamente <strong>médico con Cefotaxima o Ceftriaxona endovenosa</strong>; la cirugía está formalmente contraindicada.',
          '<strong>Peritonitis Secundaria:</strong> Representa más del 90% de las peritonitis quirúrgicas. Ocurre por <strong>rotura o perforación de una víscera hueca</strong> intraabdominal (úlcera péptica perforada, apendicitis gangrenosa perforada, diverticulitis Hinchey III-IV, perforación intestinal traumática) o por dehiscencia anastomótica. Es <strong>polimicrobiana</strong> (flora mixta entérica con gramnegativos aerobios y anaerobios como Bacteroides fragilis). El tratamiento es la <strong>laparotomía exploradora de urgencia</strong> obligatoria para el control del foco.',
          '<strong>Peritonitis Terciaria:</strong> Cuadro infeccioso intraabdominal persistente o recurrente que aparece tras más de 48 horas de un tratamiento quirúrgico aparentemente adecuado de una peritonitis secundaria, habitualmente en pacientes críticos inmunocomprometidos en UPC, con microorganismos oportunistas nosocomiales multirresistentes (Enterococcus faecium, Candida spp., Pseudomonas).'
        ]
      },
      {
        subhead: '2. Abdomen Perforativo: Síndrome de Úlcera Perforada y Semiología',
        paragraphs: [
          'La perforación de una úlcera péptica gastroduodenal produce la salida brusca de ácido clorhídrico, pepsina y bilis a la cavidad peritoneal libre, desencadenando una <strong>peritonitis química hiperaguda</strong> extremadamente dolorosa, seguida en 12 horas de sobreinfección bacteriana.',
          '<strong>Semiología del abdomen perforativo:</strong>',
          '• Inicio hiperagudo, súbito, en segundos, descrito clásicamente por el paciente como un <strong>dolor "en puñalada" en epigastrio</strong> que rápidamente se difunde a todo el abdomen.',
          '• El paciente permanece inmóvil en decúbito dorsal (cualquier movimiento, tos o respiración profunda incrementa la agonía).',
          '• Inspección: Abdomen plano, con ausencia total de excursión respiratoria parietal.',
          '• Palpación: <strong>Abdomen en tabla</strong> (contractura muscular refleja involuntaria rígida como madera, invencible en los cuatro cuadrantes) y signo de Blumberg generalizado.',
          '• Percusión: <strong>Signo de Jobert positivo</strong> (desaparición de la matidez hepática a la percusión sobre el hemitórax anterior derecho por interposición de gas libre neumoperitoneal).'
        ]
      },
      {
        subhead: '3. Diagnóstico Imagenológico y Tratamiento Quirúrgico de Urgencia',
        paragraphs: [
          'El examen inicial de mayor rendimiento por su rapidez es la <strong>Radiografía de tórax de pie</strong> (o radiografía de abdomen en decúbito lateral izquierdo con rayo horizontal en pacientes que no toleran bipedestación), que demuestra <strong>neumoperitoneo</strong> (aire libre subdiafragmático en forma de semiluna radiolúcida) en más del 75-80% de los casos.',
          'Si la radiografía es negativa o dudosa pero la sospecha clínica persiste, el <strong>TAC de abdomen y pelvis</strong> confirma la presencia de mínimas burbujas de gas extraluminal, líquido libre peritoneal y localiza el sitio anatómico de perforación.',
          '<strong>Conducta terapéutica inmediata:</strong>',
          '1) Resucitación hidroelectrolítica agresiva con suero cristaloide isotónico por dos vías venosas periféricas gruesas.',
          '2) Instalación de <strong>Sonda Nasogástrica</strong> para evacuar el contenido gástrico residual y detener la fuga peritoneal.',
          '3) Antibioticoterapia endovenosa de amplio espectro inmediata (Ceftriaxona 2 g/día + Metronidazol 500 mg c/8h o Piperacilina/Tazobactam).',
          '4) <strong>Laparotomía o laparoscopía exploradora urgente:</strong> Lavado exhaustivo de toda la cavidad peritoneal con suero fisiológico tibio (6 a 10 litros) y <strong>cierre primario de la perforación con parche de epiplón vascularizado (Técnica de Graham)</strong> en úlcera péptica.'
        ]
      }
    ],
    table: {
      title: 'Diagnóstico Diferencial Clave: Peritonitis Primaria vs Secundaria vs Terciaria',
      headers: ['Criterio Diferencial', 'Peritonitis Primaria (PBE)', 'Peritonitis Secundaria (Quirúrgica)', 'Peritonitis Terciaria (Nosocomial)'],
      rows: [
        ['Población típica', 'Cirrótico con ascitis descompensada o nefrótico', 'Cualquier persona; úlcera, apendicitis, divertículo', 'Paciente crítico en UPC tras laparotomía previa'],
        ['Mecanismo causal', 'Traslocación bacteriana monomicrobiana sin rotura', 'Perforación de víscera hueca o dehiscencia de sutura', 'Sobreinfección persistente en huésped inmunodeprimido'],
        ['Microbiología', 'Monomicrobiana (E. coli, Klebsiella, Neumococo)', 'Polimicrobiana (Enterobacterias + B. fragilis)', 'Microorganismos multirresistentes (Candida, Enterococo)'],
        ['Examen de elección', 'Paracentesis diagnóstica (PMN ≥ 250/mm³)', 'Radiografía de tórax / TAC (neumoperitoneo)', 'TAC con contraste + Cultivo de drenajes'],
        ['Tratamiento', 'MÉDICO: Cefotaxima EV (¡Cirugía contraindicada!)', 'QUIRÚRGICO: Laparotomía urgente + Lavado', 'Re-laparotomía / Abdomen abierto + Antifúngicos']
      ]
    },
    vignette: 'Hombre de 38 años, fumador y usuario crónico de ketoprofeno por lumbalgia mecánica, ingresa a urgencias traído por el SAMU por dolor abdominal de inicio súbito e hiperagudo hace 3 horas mientras cenaba, descrito como una puñalada desgarradora en el epigastrio que se irradió rápidamente a todo el abdomen. Al examen físico: sudoroso, pálido, taquicárdico a 112 lpm, PA 105/65 mmHg, T° 37.5 °C. El abdomen no tiene movilidad respiratoria, se encuentra rígidamente contracturado ("abdomen en tabla") con dolor insoportable a la palpación mínima y descompresión positiva generalizada. A la percusión se constata timpanismo sobre la zona hepática (signo de Jobert). La radiografía de tórax de pie muestra una clara semiluna de aire libre bajo el hemidiafragma derecho.',
    explicacion: 'El cuadro clínico es el arquetipo de un abdomen perforativo secundario a úlcera gastroduodenal perforada (dolor en puñalada, vientre en tabla, signo de Jobert positivo y neumoperitoneo subdiafragmático en la radiografía de tórax). La presencia de neumoperitoneo en el contexto de peritonitis generalizada es una indicación formal e inmediata de intervención quirúrgica de urgencia. La conducta obligatoria consiste en instalar dos vías venosas de grueso calibre para resucitación inmediata con cristaloides, colocar sonda nasogástrica a caída libre para vaciar el estómago, administrar analgesia endovenosa, iniciar antibióticos de amplio espectro (ceftriaxona + metronidazol) y trasladar inmediatamente a pabellón para laparotomía exploradora, sutura de la úlcera con parche de epiplón de Graham y lavado profuso de la cavidad peritoneal.',
    keyPoints: [
      'Peritonitis primaria (PBE) = cirrótico, monomicrobiana, PMN ≥ 250/mm³ en líquido ascítico, manejo MÉDICO con Cefotaxima EV.',
      'Peritonitis secundaria = rotura de víscera hueca, polimicrobiana, neumoperitoneo, manejo QUIRÚRGICO de urgencia.',
      'El dolor "en puñalada" de inicio súbito + "vientre en tabla" + signo de Jobert (timpanismo hepático) es patognomónico de úlcera perforada.',
      'La radiografía de tórax de pie es el estudio inicial más rápido para confirmar neumoperitoneo (semiluna subdiafragmática).',
      'El tratamiento de la úlcera péptica perforada es la laparotomía/laparoscopía con lavado peritoneal profuso y sutura con parche de epiplón (Graham).',
      'Jamás realizar endoscopía digestiva alta ante sospecha de úlcera perforada, ya que la insuflación neumática empeora masivamente el cuadro.'
    ],
    questions: [
      {
        stem: 'Un hombre de 42 años con antecedente de consumo frecuente de ibuprofeno presenta dolor epigástrico de inicio súbito tipo "puñalada" hace 4 horas, que luego se generalizó. Al examen físico se aprecia pálido, sudoroso, con PA 100/60 mmHg y taquicardia de 108 lpm. Su abdomen presenta contractura muscular involuntaria rígida ("vientre en tabla") con dolor a la descompresión en todos los cuadrantes y timpanismo en la región de matidez hepática. ¿Cuál es el examen inicial de elección para confirmar la principal sospecha diagnóstica?',
        options: [
          { id: 'A', text: 'Endoscopía digestiva alta de urgencia' },
          { id: 'B', text: 'Radiografía de tórax de pie' },
          { id: 'C', text: 'Ecografía abdominal enfocada en vesícula y páncreas' },
          { id: 'D', text: 'Colonoscopía con insuflación de CO2' },
          { id: 'E', text: 'Amilasa y lipasa plasmáticas seriadas' }
        ],
        correcta: 'B',
        explicacion: 'El cuadro corresponde clínicamente a una perforación de úlcera péptica gastroduodenal con peritonitis química generalizada (dolor en puñalada, abdomen en tabla, desaparición de matidez hepática o signo de Jobert). El examen inicial de elección por su rapidez y alta sensibilidad para pesquisar neumoperitoneo (aire libre subdiafragmático) es la radiografía de tórax de pie. La endoscopía digestiva alta (A) está formalmente contraindicada por riesgo de insuflar más aire a la cavidad.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.003'
      },
      {
        stem: 'Un paciente de 56 años con cirrosis hepática por alcohol y ascitis moderada acude al hospital por aumento de volumen abdominal y dolor sordo difuso de 2 días de evolución. No tiene antecedentes de cirugías previas. Al examen físico está febril (38.3 °C), abdomen distendido con onda ascítica presente, blando y con dolor difuso a la palpación profunda pero sin signos de abdomen en tabla. Se realiza paracentesis diagnóstica que da salida a líquido cetrino con 420 leucocitos/mm³ y 75% de polimorfonucleares. La tinción de Gram no muestra bacterias. ¿Cuál es la conducta terapéutica indicada?',
        options: [
          { id: 'A', text: 'Laparotomía exploradora de urgencia para control de foco' },
          { id: 'B', text: 'Iniciar Cefotaxima o Ceftriaxona endovenosa más infusión de albúmina' },
          { id: 'C', text: 'Realizar paracentesis evacuadora total y dar de alta con reposo' },
          { id: 'D', text: 'Indicar tratamiento ambulatorio exclusivo con ciprofloxacino oral' },
          { id: 'E', text: 'Solicitar TAC abdominal y diferir tratamiento hasta obtener el resultado del cultivo' }
        ],
        correcta: 'B',
        explicacion: 'El paciente presenta una Peritonitis Bacteriana Espontánea (PBE), confirmada por el recuento de PMN ≥ 250/mm³ en el líquido ascítico (420 x 0.75 = 315 PMN/mm³). La PBE es una peritonitis primaria monomicrobiana de manejo estrictamente MÉDICO mediante antibioticoterapia endovenosa con cefalosporinas de 3ª generación (Cefotaxima 2 g c/8h o Ceftriaxona 2 g/día) asociada a albúmina humana endovenosa para prevenir el síndrome hepatorrenal. Someter a este paciente a una laparotomía exploradora (A) es un error gravísimo que incrementa drásticamente la mortalidad.',
        recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.003'
      }
    ]
  }
];

module.exports = { bloque1Classes };
