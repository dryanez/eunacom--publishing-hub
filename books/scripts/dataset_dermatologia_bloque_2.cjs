/**
 * TOMO 16 · DERMATOLOGÍA — BLOQUE 02: Dermatosis Inflamatorias, Psoriasis & Eccemas
 * Clases 16.5 a 16.8 · Editorial EUNACOM 2026 · Color #a21caf
 */

const { flow } = require('./dataset_dermatologia_bloque_1.cjs');

const bloque2 = [
  {
    id: 'derma-05',
    classId: 'derma-05',
    tier: 3,
    blockNum: 2,
    blockName: 'Dermatosis Inflamatorias, Psoriasis & Eccemas',
    topicLabel: '16.5',
    title: 'Psoriasis Vulgar: Fenómeno de Koebner, Auspitz y Terapias Tópicas/Sistémicas',
    perfilCode: '6.01.1.006',
    dx: 'Específico', tx: 'Inicial', seg: 'Completo',
    ges: 'Garantía Explícita en Salud: Psoriasis Moderada a Grave en personas de 15 años y más (GES N° 84)',
    reconstrucciones: 'EUNACOM 2013 (Q#104) · EUNACOM Julio 2016 (Q#51) · EUNACOM Diciembre 2021 (Q#72)',
    frecuencia: 'Máxima rentabilidad · Tríada semiológica de Brocq, Koebner, artritis psoriásica y contraindicación de corticoides sistémicos',
    diagram: flow('Algoritmo de Manejo y Escalamiento de Psoriasis Vulgar', [
      { t: 'Paciente con Placas Eritematodescamativas Nacaradas en Codos, Rodillas o Cuero Cabelludo', s: 'Paso 1: Evaluar Signo de Auspitz (rocío sangrante), Koebner y Porcentaje de Superficie Corporal (BSA)' },
      { k: 'split', q: '¿Psoriasis Leve (< 5-10% BSA) vs Moderada-Grave (> 10% BSA / Artritis / PASI > 10)?', s: 'Estratificación de gravedad clínica para definir terapia tópica vs sistémica/biológica', ll: 'Psoriasis Leve (< 10% de superficie)', rl: 'Psoriasis Moderada a Grave (> 10% BSA)',
        left: { t: 'Terapia Tópica Combinada de Primera Línea', s: 'Corticoide tópico de alta potencia (Clobetasol 0.05%) + Análogo de Vitamina D (Calcipotriol)', type: 'acc' },
        right: { t: 'Terapia Sistémica y Biológicos (GES N° 84)', s: 'Fototerapia UVB de banda estrecha · Metotrexato oral · Terapia Biológica anti-IL17/IL23/TNF', type: 'warn' },
        ll: 'manejo ambulatorio tópico', rl: 'fármacos sistémicos ges' },
      { t: 'CONTRAINDICACIÓN FATAL ABSOLUTA EN PSORIASIS', s: 'NUNCA ADMINISTRAR CORTICOIDES ORALES O PARENTERALES: al suspenderlos provocan rebote a Psoriasis Pustulosa Generalizada o Eritrodermia letal', type: 'dec', al: 'trampa mortal de examen', from: 'right' },
    ]),
    contexto: 'La psoriasis es una enfermedad inflamatoria sistémica inmunomediada crónica caracterizada por hiperproliferación epidérmica acelerada. En el examen se evalúan tres áreas esenciales: la semiología del raspado metódico de Brocq con el signo de Auspitz, el fenómeno de Koebner, y la prohibición estricta de prescribir corticoides sistémicos.',
    contentSections: [
      {
        subhead: '1. Fisiopatología Inmune y Recambio Celular',
        paragraphs: [
          'Es una afección poligénica con fuerte asociación al antígeno <strong>HLA-Cw6</strong>. El eje patogénico central involucra la activación de linfocitos T colaboradores (Th1 y Th17) estimulados por <strong>IL-23</strong> que producen <strong>IL-17, IL-22 y TNF-alfa</strong>.<br>' +
          '• Esta cascada citoquínica provoca una hiperplasia epidérmica masiva con <strong>aceleración del recambio celular de queratinocitos de 28 días a solo 3 a 4 días</strong>.<br>' +
          '• Como las células ascienden demasiado rápido, conservan sus núcleos en el estrato córneo (<strong>paraqueratosis</strong>) y no logran sintetizar queratohialina (agranulosis), formando las típicas escamas gruesas plateadas.',
        ],
      },
      {
        subhead: '2. Semiología Clásica: Raspado de Brocq, Koebner y Compromiso Ungueal',
        paragraphs: [
          '• <strong>Placa Típica:</strong> Placa eritematosa viva, bien delimitada, cubierta por gruesas escamas blanco-nacaradas o plateadas no grasosas. Localización clásica bilateral y simétrica en <strong>superficies de extensión: codos, rodillas, región lumbosacra y cuero cabelludo</strong>.<br>' +
          '• <strong>Raspado Metódico de Brocq (curetaje con cucharilla):</strong><br>' +
          '1. <em>Signo de la bujía o mancha de cera:</em> Al raspar la placa se desprenden virutas blanquecinas semejantes a raspar una vela de cera.<br>' +
          '2. <em>Signo de la película despegable (membrana de Duncan-Dulck):</em> Se desprende una fina película epidérmica transparente continua.<br>' +
          '3. <strong>SIGNO DE AUSPITZ O DEL ROCÍO SANGRANTE (PATOGNOMÓNICO):</strong> Al retirar la membrana transparente, quedan al descubierto las papilas dérmicas elongadas con capilares dilatados, produciéndose un punteado hemorrágico fino en gotitas diminutas.<br>' +
          '• <strong>Fenómeno Isomórfico de Koebner:</strong> Aparición de lesiones psoriásicas típicas sobre áreas de piel sana que han sufrido un traumatismo mecánico, herida quirúrgica, roce o rascado (típico también en vitíligo y liquen plano).<br>' +
          '• <strong>Compromiso Ungueal (Psoriasis ungueal en 50%):</strong> <strong>Pitting o piqueteado ungueal en dedal</strong> (pequeñas depresiones cupuliformes), mancha en "gota de aceite" (decoloración amarronada subungueal), hiperqueratosis subungueal y onicolisis distolateral.',
        ],
      },
      {
        subhead: '3. Formas Clínicas Especiales y Artritis Psoriásica',
        paragraphs: [
          '• <strong>Psoriasis en Gotas o Guttata:</strong> Erupción brusca de pápulas milimétricas descamativas generalizadas ("en gotas de lluvia") en niños o adultos jóvenes, <strong>desencadenada 1 a 2 semanas después de una faringoamigdalitis estreptocócica</strong>. Responde a antibióticos y fototerapia; excelente pronóstico.<br>' +
          '• <strong>Psoriasis Invertida:</strong> Afecta los grandes pliegues (axilas, ingles, submamario, interglúteo). Por la maceración y sudor, <strong>las placas carecen de escamas</strong> y se ven rojas brillantes y húmedas (confundible con intertrigo candidiásico).<br>' +
          '• <strong>Eritrodermia Psoriásica y Psoriasis Pustulosa Generalizada (von Zumbusch):</strong> Formas graves potencialmente letales con compromiso hemodinámico, hipotermia y sepsis.<br>' +
          '• <strong>Artritis Psoriásica (10% a 30% de los pacientes):</strong> Asociada a HLA-B27, seronegativa (Factor Reumatoide negativo). Afecta articulaciones interfalángicas distales (IFD), cursa con <strong>dactilitis ("dedo en salchicha")</strong> y entesitis.',
        ],
      },
      {
        subhead: '4. Escalonamiento Terapéutico y Garantía GES N° 84',
        paragraphs: [
          '• <strong>Psoriasis Leve (< 5% a 10% de superficie corporal, PASI < 10):</strong><br>' +
          'Tratamiento de elección: <strong>Terapia tópica combinada fija de Corticoide de alta potencia (Dipropionato de Betametasona o Clobetasol) + Análogo de Vitamina D (Calcipotriol)</strong> en ungüento/espuma. El calcipotriol frena la proliferación y el corticoide frena la inflamación con sinergia y menor atrofia.<br>' +
          '• <strong>Psoriasis Moderada a Grave (> 10% superficie o compromiso ungueal/articular extenso):</strong><br>' +
          '- <strong>Fototerapia:</strong> Radiación ultravioleta B de banda estrecha (UVB-NB) o PUVA.<br>' +
          '- <strong>Fármacos Sistémicos Clásicos:</strong> <strong>Metotrexato oral (15 a 25 mg una vez por semana + ácido fólico)</strong> como fármaco de primera línea; Acitretina oral (retinoide sistémico); Ciclosporina A oral.<br>' +
          '- <strong>Terapias Biológicas (Garantía GES N° 84):</strong> Anticuerpos monoclonales anti-TNF (Adalimumab, Infliximab), anti-IL-17 (Secukinumab, Ixekizumab) y anti-IL-23 (Ustekinumab, Guselkumab).<br>' +
          '• <strong>REGLA DE ORO VITAL: LOS CORTICOIDES SISTÉMICOS (ORALES O ENDOVENOSOS) ESTÁN ESTRICTAMENTE CONTRAINDICADOS</strong>.<br>' +
          'Aunque aclaran las placas rápidamente, su suspensión desencadena invariablemente un rebote violento hacia Psoriasis Pustulosa Generalizada o Eritrodermia de alta mortalidad.',
        ],
      },
    ],
    table: {
      title: 'Formas Clínicas de Psoriasis y Diagnóstico Diferencial',
      headers: ['Forma Clínica', 'Localización / Lesión Elemental', 'Desencadenante Típico', 'Conducta Terapéutica'],
      rows: [
        ['En Placas (Vulgar, 85%)', 'Placas eritematosas con escamas nacaradas en codos/rodillas', 'Trauma local (Koebner), estrés, tabaco', 'Tópicos (Clobetasol + Calcipotriol) / MTX'],
        ['En Gotas (Guttata)', 'Pápulas descamativas en gotas en tronco de niños/jóvenes', 'Infección estreptocócica faríngea previa', 'Amoxicilina/Penicilina + Fototerapia UVB'],
        ['Invertida', 'Placas rojas lisas SIN escamas en axilas/ingles', 'Fricción y maceración en pliegues', 'Inhibidores de calcineurina / corticoides suaves'],
        ['Pustulosa Generalizada', 'Pústulas estériles confluentes + fiebre alta', 'SUSPENSIÓN DE CORTICOIDES ORALES', 'Hospitalización urgente + Acitretina / Infliximab'],
        ['Artropatía Psoriásica', 'Dactilitis ("dedo en salchicha") + artritis IFD', 'Antígeno HLA-B27, factor reumatoide (-)', 'Metotrexato o Biológicos anti-TNF / anti-IL17'],
      ],
    },
    severityTable: {
      title: 'Estratificación de Severidad y Criterios de Ingreso a GES N° 84',
      headers: ['Estrato de Gravedad', 'Criterios Cuantitativos (BSA / PASI / DLQI)', 'Impacto en Calidad de Vida', 'Línea Terapéutica Indicada'],
      rows: [
        ['Psoriasis Leve', 'BSA < 10%, PASI < 10 y DLQI ≤ 10', 'Bajo a moderado; localizada en codos/rodillas', 'Tratamiento tópico exclusivo'],
        ['Psoriasis Moderada a Grave', 'BSA ≥ 10% O PASI ≥ 10 O DLQI > 10', 'Severo; afectación extensa de tronco y extremidades', 'Fototerapia UVB / Metotrexato oral (GES)'],
        ['Psoriasis en Sitios Especiales', 'Palmas, plantas, cara, genitales o cuero cabelludo severo', 'Gran discapacidad funcional/laboral aun con BSA baja', 'Terapia sistémica precoz'],
        ['Psoriasis Refractaria', 'Falla a Metotrexato y Fototerapia en dosis plenas', 'Persistencia de PASI > 50% de la basal', 'Terapia Biológica anti-IL17/IL23/TNF (GES)'],
      ],
    },
    treatmentTable: {
      title: 'Protocolo Terapéutico Escalonado en Psoriasis Vulgar',
      headers: ['Escalón', 'Fármaco / Modalidad', 'Mecanismo de Acción', 'Precaución de Seguridad'],
      rows: [
        ['1. Tópico', 'Calcipotriol + Dipropionato de Betametasona ungüento', 'Sinergia antiproliferativa y antiinflamatoria', 'No exceder 100 g/semana por riesgo de hipercalcemia'],
        ['2. Fototerapia', 'Radiación Ultravioleta B de banda estrecha (UVB-NB)', 'Inmunomodulación dérmica y apoptosis linfocitaria', 'Contraindicado en melanoma previo o lupus'],
        ['3. Sistémico clásico', 'Metotrexato 15-25 mg oral 1 vez por semana + Ácido fólico', 'Antagonista de folatos; frena replicación celular', 'Hepatotoxicidad, mielosupresión; pedir hemograma y perfil'],
        ['4. Sistémico oral 2', 'Acitretina 25-50 mg/día oral (retinoide)', 'Regula la diferenciación epidérmica en pustulosa', 'TERATOGÉNICO: prohibido embarazo por 3 años post-uso'],
        ['5. Biológico', 'Anti-IL-17 (Secukinumab) o Anti-IL-23 (Ustekinumab)', 'Bloqueo selectivo de la cascada citoquínica Th17', 'Descartar Tuberculosis latente (PPD/QuantiFERON) previa'],
      ],
    },
    vignette: 'Hombre de 42 años consulta por placas eritematosas pruriginosas en ambos codos, región sacra y cuero cabelludo desde hace 2 años. Al examen físico se aprecian placas eritematosas solevantadas de 4 a 6 cm de diámetro, muy bien delimitadas, cubiertas por escamas gruesas blanco-nacaradas. Al realizar el curetaje metódico con un abatelenguas, las escamas se desprenden en virutas blanquecinas, luego se levanta una membrana transparente continua y finalmente brota un punteado hemorrágico fino en gotitas rojas sobre la superficie desnudada.',
    explicacion: 'El raspado metódico de Brocq con visualización sucesiva del signo de la bujía, membrana despegable y la aparición del Signo de Auspitz o rocío sangrante patognomónico confirma el diagnóstico de Psoriasis Vulgar en placas. El rocío hemorrágico se produce al decaptar los capilares dilatados de las papilas dérmicas elongadas que llegan muy cerca de la superficie por la paraqueratosis y agranulosis epidérmica. La conducta terapéutica inicial de primera línea para placas localizadas es la combinación tópica de un corticoide potente (clobetasol o betametasona) con un análogo de la vitamina D (calcipotriol).',
    keyPoints: [
      'El raspado metódico de Brocq culmina en el Signo de Auspitz (rocío sangrante patognomónico).',
      'El fenómeno de Koebner es la aparición de lesiones psoriásicas típicas sobre piel sana traumatizada.',
      'La psoriasis en placas típica se ubica en superficies de extensión: codos, rodillas y región lumbosacra.',
      'La psoriasis en gotas ocurre en jóvenes tras una faringoamigdalitis estreptocócica.',
      'El tratamiento tópico de elección es la combinación fija de Corticoide potente + Calcipotriol.',
      'La psoriasis moderada-grave ingresa a garantías GES N° 84 (fototerapia, metotrexato y biológicos).',
      'CONTRAINDICACIÓN FATAL: NUNCA usar corticoides orales o parenterales (causan rebote a psoriasis pustulosa letal).',
    ],
    questions: [
      {
        stem: 'Un hombre de 36 años con antecedente de psoriasis en placas bien controlada sufre una herida cortante lineal en el antebrazo izquierdo durante un trabajo de carpintería. Tres semanas después, observa con sorpresa que sobre la cicatriz lineal de la herida se ha desarrollado una placa eritematosa idéntica a sus lesiones de psoriasis, cubierta de escamas plateadas nacaradas. ¿Cómo se denomina este fenómeno semiológico?',
        options: [
          { id: 'A', text: 'Signo de Darier' },
          { id: 'B', text: 'Fenómeno isomórfico de Koebner' },
          { id: 'C', text: 'Signo de Nikolsky' },
          { id: 'D', text: 'Fenómeno de patergia' },
          { id: 'E', text: 'Signo de Auspitz' },
        ],
        correcta: 'B',
        explicacion: 'El desarrollo de lesiones cutáneas características de una dermatosis previa sobre áreas de piel sana que han sufrido un traumatismo físico, mecánico, químico o quirúrgico (como una herida, incisión, quemadura o rascado) se denomina Fenómeno Isomórfico de Koebner. Es un sello semiológico característico de la Psoriasis, del Liquen Plano y del Vitíligo. El signo de Darier (A) ocurre en mastocitosis (habón al frotar). El signo de Nikolsky (C) es el despegamiento epidérmico por presión en pénfigo o NET. La patergia (D) es la formación de una pústula estéril tras un pinchazo en enfermedad de Behçet o pioderma gangrenoso. Perla. Aparición de lesiones sobre cicatriz o trauma es el fenómeno de Koebner.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.006',
      },
      {
        stem: 'Un escolar de 10 años, que presentó una faringoamigdalitis purulenta tratada con paracetamol hace dos semanas, es traído por su madre por la aparición súbita y eruptiva de múltiples pápulas eritematosas pequeñas de 3 a 5 mm, cubiertas por una fina escama blanquecina, diseminadas en todo el tronco y raíz de extremidades. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Pitiriasis rosada de Gibert' },
          { id: 'B', text: 'Psoriasis en gotas (guttata)' },
          { id: 'C', text: 'Exantema súbito por herpesvirus 6' },
          { id: 'D', text: 'Sífilis secundaria (roseola sifilítica)' },
          { id: 'E', text: 'Escabiosis complicada' },
        ],
        correcta: 'B',
        explicacion: 'El brote eruptivo agudo de pápulas descamativas pequeñas ("en gotas de lluvia") en tronco y extremidades en un paciente pediátrico o adolescente, precedido 1 a 2 semanas antes por una infección faringoamigdalina estreptocócica por Streptococcus pyogenes, es la presentación arquetípica de la Psoriasis en Gotas o Guttata. Las toxinas superantigénicas estreptocócicas activan de forma masiva a los linfocitos T cutáneos. Tiene un excelente pronóstico, respondiendo muy bien a la erradicación del estreptococo con antibióticos (amoxicilina) y fototerapia natural o UVB. Perla. Erupción en gotas tras amigdalitis estreptocócica es psoriasis guttata.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.006',
      },
      {
        stem: '¿Cuál de los siguientes tratamientos está FORMALMENTE CONTRAINDICADO en un paciente con psoriasis vulgar debido al altísimo riesgo de desencadenar un rebote potencialmente mortal hacia psoriasis pustulosa generalizada o eritrodermia al suspenderlo?',
        options: [
          { id: 'A', text: 'Calcipotriol tópico en ungüento' },
          { id: 'B', text: 'Corticoides orales o sistémicos (como prednisona o betametasona parenteral)' },
          { id: 'C', text: 'Metotrexato oral semanal con suplemento de ácido fólico' },
          { id: 'D', text: 'Fototerapia con radiación ultravioleta B de banda estrecha' },
          { id: 'E', text: 'Anticuerpos monoclonales anti-interleucina 17 (secukinumab)' },
        ],
        correcta: 'B',
        explicacion: 'Una de las contraindicaciones farmacológicas más universales y estrictas de la dermatología es el uso de corticosteroides por vía sistémica (oral, intramuscular o endovenosa) en pacientes con psoriasis vulgar. Aunque los corticoides orales provocan una mejoría clínica espectacular y rápida durante los primeros días de administración, su reducción o suspensión desencadena invariablemente un fenómeno de rebote severo y catastrófico, induciendo la transformación de la psoriasis vulgar en una Psoriasis Pustulosa Generalizada de von Zumbusch o una Eritrodermia Psoriásica, entidades graves con riesgo de descompensación hemodinámica, hipotermia, sobreinfección bacteriana y muerte. Trampa. NUNCA indicar prednisona oral en un brote de psoriasis vulgar.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.006',
      },
      {
        stem: 'Un hombre de 45 años con psoriasis en placas severa que compromete el 25% de su superficie corporal consulta además por dolor e inflamación tumefacta marcada en el segundo dedo de la mano derecha y en el tercer dedo del pie izquierdo, los cuales lucen completamente engrosados y tumefactos en toda su longitud, semejando un embutido. El factor reumatoide es negativo y la radiografía muestra erosiones en las articulaciones interfalángicas distales. ¿Cómo se denomina este signo inflamatorio característico?',
        options: [
          { id: 'A', text: 'Nódulos de Heberden' },
          { id: 'B', text: 'Dactilitis o "dedo en salchicha"' },
          { id: 'C', text: 'Tofos gotosos periarticulares' },
          { id: 'D', text: 'Tenosinovitis infecciosa flexora' },
          { id: 'E', text: 'Eritema nudoso digital' },
        ],
        correcta: 'B',
        explicacion: 'La inflamación simultánea y difusa de toda la estructura de un dedo (que involucra las articulaciones interfalángicas, tendones flexores y partes blandas periarticulares), dándole un aspecto tumefacto cilíndrico homogéneo semejante a un embutido, se denomina Dactilitis o "dedo en salchicha". Es un signo patognomónico característico de las espondiloartropatías seronegativas asociadas a HLA-B27, particularmente de la Artritis Psoriásica (afectando a un 30% de estos pacientes). Se acompaña frecuentemente de compromiso de articulaciones interfalángicas distales (IFD), entesitis aquiliana y onicopatía psoriásica. Perla. Dedo en salchicha (dactilitis) en paciente psoriásico confirma artritis psoriásica.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.006',
      },
    ],
  },

  {
    id: 'derma-06',
    classId: 'derma-06',
    tier: 2,
    blockNum: 2,
    blockName: 'Dermatosis Inflamatorias, Psoriasis & Eccemas',
    topicLabel: '16.6',
    title: 'Dermatitis Atópica: Hanifin y Rajka, Corticoides Tópicos e Hidratación',
    perfilCode: '6.01.1.004',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica · Guía de Práctica Clínica de Dermatitis Atópica',
    reconstrucciones: 'EUNACOM 2014 (Q#66) · EUNACOM Diciembre 2018 (Q#29)',
    frecuencia: 'Muy alta · Criterio cardinal de prurito, distribución anatómica por edad y manejo de base',
    diagram: flow('Algoritmo de Fases Clínicas y Manejo de Dermatitis Atópica', [
      { t: 'Paciente Pediátrico o Adulto con Eccema Pruriginoso Crónico Recidivante', s: 'Criterio cardinal obligatorio: PRURITO INTENSO (sin prurito no hay dermatitis atópica)' },
      { k: 'split', q: '¿Distribución según Edad: Lactante vs Infantil vs Adulto?', s: 'Topografía cutánea característica evolutiva de la atopia', ll: 'Lactante (< 2 años): Mejillas y convexidades', rl: 'Infantil y Adulto (> 2 años): Pliegues flexurales',
        left: { t: 'Lactante (< 2 años)', s: 'Respeta estrictamente el área del pañal · Mejillas eritematosas exudativas y superficies extensoras', type: 'acc' },
        right: { t: 'Infantil y Adulto (> 2 años)', s: 'Pliegues flexurales (fosas antecubitales y poplíteas) · Cuello, muñecas y marcada liquenificación', type: 'warn' },
        ll: 'fase del lactante', rl: 'fase flexural infantil/adulto' },
      { t: 'Pilar Terapéutico de Base y Manejo de Brotes', s: 'Base: Emolientes diarios abundantes + baños tibios cortos · Brote: Corticoides tópicos según potencia adaptada a la zona', type: 'dec', al: 'terapia de mantenimiento y rescate', from: 'left' },
    ]),
    contexto: 'La dermatitis atópica es la dermatosis inflamatoria más frecuente de la infancia y forma parte de la marcha atópica (junto con alergias alimentarias, asma y rinitis). El prurito intenso es el síntoma mandatorio y la hidratación cutánea con emolientes es la piedra angular que repara la barrera cutánea deficiente por mutaciones en la filagrina.',
    contentSections: [
      {
        subhead: '1. Fisiopatología de la Barrera Cutánea y Marcha Atópica',
        paragraphs: [
          'La dermatitis atópica resulta de la interacción de dos anomalías primarias:<br>' +
          '1. <strong>Defecto de la barrera epidérmica:</strong> Mutaciones con pérdida de función en el gen de la <strong>filagrina</strong> (proteína clave en la compactación de queratina y síntesis de factores humectantes naturales), lo que provoca pérdida transepidérmica de agua (piel seca o xerosis extrema) y penetración facilitada de alérgenos.<br>' +
          '2. <strong>Desregulación inmunológica Th2:</strong> Sobreproducción de IgE e hiperreactividad frente a antígenos ambientales.<br>' +
          '• <strong>Marcha Atópica:</strong> Secuencia temporal típica en niños con predisposición: Dermatitis Atópica en lactante → Alergia alimentaria → Asma bronquial infantil → Rinitis alérgica.',
        ],
      },
      {
        subhead: '2. Criterios de Hanifin y Rajka y Distribución según la Edad',
        paragraphs: [
          'Para el diagnóstico se exige el cumplimiento de <strong>3 o más criterios mayores</strong> y 3 menores. <strong>Criterio cardinal indispensable: PRURITO INTENSO</strong>.<br>' +
          '• <strong>Topografía según la edad del paciente (pregunta típica de examen):</strong><br>' +
          '- <strong>Fase del Lactante (menores de 2 años):</strong> Afecta predominantemente las <strong>mejillas (respetando el triángulo nasogeniano perioral)</strong>, cuero cabelludo y las caras extensoras de extremidades. Las lesiones son eccematosas agudas y exudativas con costras. <strong>SIGNO CLAVE DE EXAMEN: RESPETA ESTRICTAMENTE LA ZONA CUBIERTA POR EL PAÑAL</strong> (el microclima húmedo del pañal previene la sequedad atópica).<br>' +
          '- <strong>Fase Infantil (2 a 12 años):</strong> Las lesiones se trasladan a los <strong>pliegues flexurales</strong>: fosas antecubitales (pliegue del codo) y fosas poplíteas (hueco detrás de la rodilla), muñecas, tobillos y cuello. Lesiones subagudas con inicio de liquenificación.<br>' +
          '- <strong>Fase del Adulto (> 12 años):</strong> Compromete pliegues de flexión, cuello, cara y dorso de manos, con <strong>liquenificación marcada</strong> (piel engrosada con pliegues acentuados por rascado crónico).',
        ],
      },
      {
        subhead: '3. Tratamiento Escalonado y Complicaciones Infecciosas',
        paragraphs: [
          '• <strong>Tratamiento de Mantenimiento de Base (Pilar Fundamental):</strong><br>' +
          '- <strong>Emolientes e hidratantes abundantes a diario</strong> aplicados inmediatamente tras el baño ("técnica soak and seal").<br>' +
          '- Baños cortos (5 a 10 min) con agua tibia (no caliente) y jabones syndet (sin detergentes agresivos). Ropa 100% de algodón.<br>' +
          '• <strong>Manejo del Brote Agudo: Corticoides Tópicos</strong>.<br>' +
          'Fármaco de elección adaptando la potencia al sitio anatómico:<br>' +
          '- <em>Cara, párpados y pliegues:</em> Corticoides de <strong>baja potencia (Hidrocortisona al 1%)</strong> o inhibidores de la calcineurina tópicos (<strong>Tacrolimus 0.03-0.1%</strong>, Pimecrolimus) para evitar atrofia cutánea y estrías.<br>' +
          '- <em>Tronco y extremidades:</em> Corticoides de <strong>mediana a alta potencia (Betametasona, Mometasona)</strong> por 7 a 14 días.<br>' +
          '• <strong>Complicaciones Infecciosas:</strong><br>' +
          '- <em>Impetiginización bacteriana secundaria (S. aureus):</em> Costras melicéricas mielosas amarillentas; requiere antibióticos tópicos (mupirocina) u orales (cefadroxilo).<br>' +
          '- <strong>Eccema Herpético de Kaposi:</strong> Infección viral diseminada por VHS sobre la piel atópica dañada; brote agudo de vesículas umbilicadas dolorosas generalizadas con fiebre. <strong>EMERGENCIA MÉDICA: Requiere ACICLOVIR ENDOVENOSO urgente</strong>.',
        ],
      },
    ],
    table: {
      title: 'Topografía de la Dermatitis Atópica según Grupo Etario',
      headers: ['Etapa Etaria', 'Localización Cutánea Clásica', 'Tipo de Lesión Predominante', 'Zona Respetada Típica'],
      rows: [
        ['Lactante (< 2 años)', 'Mejillas, cuero cabelludo, caras extensoras', 'Eccema agudo exudativo, eritema y costras', 'RESPETA EL ÁREA DEL PAÑAL y triángulo perioral'],
        ['Infantil (2 a 12 años)', 'Pliegues flexurales (fosa antecubital y poplítea)', 'Pápulas descamativas, liquenificación leve', 'Menor compromiso facial que en lactantes'],
        ['Adulto (> 12 años)', 'Pliegues de flexión, cuello, manos y párpados', 'Placas liquenificadas secas por rascado crónico', 'Tronco suele estar menos afectado'],
      ],
    },
    vignette: 'Lactante de 7 meses es traído por su madre por presentar lesiones rojas muy pruriginosas en ambas mejillas que le impiden dormir. Al examen físico se aprecia eritema brillante exudativo con pequeñas vesículas y costras en ambas mejillas, respetando el área perioral, y lesiones similares en las caras extensoras de brazos y piernas. Al desvestirlo para cambiar el pañal, la piel de toda la región glútea e inguinal cubierta por el pañal se encuentra completamente sana y sin lesiones.',
    explicacion: 'La presencia de eccema agudo exudativo pruriginoso en mejillas y superficies de extensión en un lactante menor, con el signo cardinal patognomónico de respeto absoluto de la zona del pañal, establece el diagnóstico definitivo de Dermatitis Atópica en fase del lactante. La zona del pañal no se afecta porque la oclusión y humedad natural del pañal impiden la xerosis epidérmica atópica. La conducta médica correcta consiste en indicar cuidados generales de la piel (baños cortos tibios con sustitutos de jabón syndet, emolientes tópicos sin perfume post-baño) y prescribir un corticoide tópico de baja potencia (hidrocortisona al 1% en crema) aplicado dos veces al día por pocos días en las mejillas.',
    keyPoints: [
      'El PRURITO INTENSO es el criterio diagnóstico cardinal obligatorio de dermatitis atópica.',
      'En el lactante afecta mejillas y convexidades, y RESPETA ESTRICTAMENTE el área del pañal.',
      'En niños mayores y adultos se localiza en los PLIEGUES FLEXURALES (fosas antecubitales y poplíteas).',
      'La base terapéutica de por vida son los emolientes e hidratantes diarios ("soak and seal").',
      'En brotes se usan corticoides tópicos (baja potencia en cara/pliegues como hidrocortisona; alta en cuerpo).',
      'El Eccema herpético de Kaposi (vesículas umbilicadas + fiebre) requiere Aciclovir EV urgente.',
    ],
    questions: [
      {
        stem: 'Un lactante de 8 meses presenta lesiones eccematosas eritematosas, exudativas y muy pruriginosas en ambas mejillas y caras de extensión de los miembros inferiores desde hace 2 meses. Al retirar el pañal, la piel de la zona genitoinguinal y perianal se encuentra perfectamente íntegra y sin eritema ni descamación. ¿Cuál es el diagnóstico más probable?',
        options: [
          { id: 'A', text: 'Dermatitis del pañal candidiásica' },
          { id: 'B', text: 'Dermatitis atópica del lactante' },
          { id: 'C', text: 'Psoriasis vulgar infantil' },
          { id: 'D', text: 'Dermatitis seborreica del lactante' },
          { id: 'E', text: 'Acrodermatitis enteropática' },
        ],
        correcta: 'B',
        explicacion: 'El cuadro de lesiones eccematosas exudativas bilaterales intensamente pruriginosas en las mejillas y superficies extensoras de las extremidades en un lactante, con preservación estricta y absoluta de la región cubierta por el pañal, es la presentación semiológica clásica y definitoria de la Dermatitis Atópica en su fase del lactante. La dermatitis del pañal (A) comprometería precisamente el área del pañal. La dermatitis seborreica (D) afecta cuero cabelludo ("costra láctea"), pliegues y área del pañal con escamas untuosas y NO respeta el pañal ni causa prurito tan intenso. La acrodermatitis enteropática (E) por déficit de zinc produce placas erosivas periorificiales y diarrea. Perla. Eccema en mejillas que respeta el pañal es dermatitis atópica del lactante.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.004',
      },
      {
        stem: 'Un niño de 5 años con antecedentes de dermatitis atópica severa presenta bruscamente un empeoramiento clínico con fiebre de 38.9 °C, malestar general y la aparición de múltiples vesículas umbilicadas agrupadas y pústulas dolorosas que rápidamente se erosionan formando costras en sacabocados sobre las áreas de eccema en cuello y flexuras. ¿Cuál es el diagnóstico de esta complicación y el tratamiento específico de urgencia?',
        options: [
          { id: 'A', text: 'Impétigo ampollar; indicar cefadroxilo oral' },
          { id: 'B', text: 'Eccema herpético de Kaposi (erupción variceliforme); hospitalizar e iniciar aciclovir endovenoso' },
          { id: 'C', text: 'Sepsis por Pseudomonas; iniciar ceftazidima endovenosa' },
          { id: 'D', text: 'Reacción adversa a corticoides tópicos; suspender todo tratamiento y observar' },
          { id: 'E', text: 'Molusco contagioso diseminado; realizar curetaje de las lesiones' },
        ],
        correcta: 'B',
        explicacion: 'La sobreinfección diseminada por el Virus Herpes Simple (VHS-1 o VHS-2) sobre una piel con dermatitis atópica con barrera epidérmica dañada se denomina Eccema Herpético de Kaposi (o erupción variceliforme de Kaposi). Se caracteriza por un brote agudo y masivo de vesículas umbilicadas agrupadas, dolorosas y confluentes que evolucionan a erosiones en sacabocados con costras hemáticas, acompañadas de fiebre alta y adenopatías. Constituye una verdadera emergencia dermatológica y pediátrica por el alto riesgo de diseminación visceral herpética, queratitis herpética y sobreinfección bacteriana secundaria. Requiere hospitalización urgente y tratamiento antiviral sistémico inmediato con Aciclovir endovenoso. Perla. Niño atópico con brote agudo de vesículas umbilicadas y fiebre tiene eccema herpético (Aciclovir EV).',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.004',
      },
    ],
  },

  {
    id: 'derma-07',
    classId: 'derma-07',
    tier: 2,
    blockNum: 2,
    blockName: 'Dermatosis Inflamatorias, Psoriasis & Eccemas',
    topicLabel: '16.7',
    title: 'Dermatitis Seborreica vs Dermatitis de Contacto (Alérgica vs Irritativa)',
    perfilCode: '6.01.1.004',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica · Diagnóstico Diferencial de Eccemas',
    reconstrucciones: 'EUNACOM 2015 (Q#91) · EUNACOM Julio 2020 (Q#38)',
    frecuencia: 'Alta · Diferenciación entre contacto irritativa vs alérgica (pruebas de parche) y dermatitis seborreica',
    diagram: flow('Algoritmo Diferencial de Eccemas: Seborreica vs Contacto', [
      { t: 'Paciente con Placas Eritematodescamativas / Eccematosas en Rostro o Extremidades', s: 'Paso 1: Evaluar localización (zonas seborreicas vs áreas expuestas a sustancias externas)' },
      { k: 'split', q: '¿Zonas Seborreicas (Surcos/Cuero Cabelludo) vs Área de Contacto con Sustancia?', s: 'Diferenciación etiológica fundamental entre causa endógena y exógena', ll: 'Surcos nasogenianos, cejas, cuero cabelludo', rl: 'Confinada a manos, lóbulos de orejas o cintura',
        left: { t: 'DERMATITIS SEBORREICA (Malassezia)', s: 'Escamas amarillentas untuosas o grasosas · Champú ketoconazol 2% + corticoide suave en pulsos', type: 'acc' },
        right: { t: 'DERMATITIS DE CONTACTO (Irritativa vs Alérgica)', s: 'Irritativa: quemazón directa (jabones) · Alérgica: prurito intenso por hipersensibilidad IV (Níquel)', type: 'warn' },
        ll: 'distribución seborreica', rl: 'exposición exógena' },
      { t: 'Confirmación Diagnóstica en Dermatitis Alérgica', s: 'Pruebas epicutáneas del parche (Patch test) con lectura a las 48 y 96 horas para identificar el alérgeno', type: 'dec', al: 'estudio alergológico', from: 'right' },
    ]),
    contexto: 'Los eccemas comprenden un grupo heterogéneo de dermatosis inflamatorias con prurito y espongiosis epidérmica. El médico general debe distinguir con certeza la dermatitis seborreica (dependiente de Malassezia en áreas sebáceas) de la dermatitis de contacto irritativa (frecuente en dueñas de casa y trabajadores manuales) y de la dermatitis de contacto alérgica mediada por inmunidad celular frente a metales como el níquel.',
    contentSections: [
      {
        subhead: '1. Dermatitis Seborreica: Clínica y Poblaciones de Riesgo',
        paragraphs: [
          'Dermatosis eritematoescamosa crónica, muy prevalente, mediada por una respuesta inflamatoria anormal a levaduras del género <em>Malassezia</em> (<em>Pityrosporum ovale</em>) que colonizan el sebo cutáneo.<br>' +
          '• <strong>Clínica en el Adulto:</strong> Placas eritematosas cubiertas por <strong>escamas grasosas, untuosas y amarillentas</strong> en áreas de alta densidad sebácea: <strong>cuero cabelludo (pitiriasis capitis o "caspa"), surcos nasogenianos, entrecejo, conducto auditivo externo, pestañas (blefaritis) y región esternal media</strong>. Prurito leve o moderado.<br>' +
          '• <strong>Poblaciones Especiales de Alerta:</strong><br>' +
          '- <strong>Lactantes:</strong> "Costra láctea" en cuero cabelludo y dermatitis en pliegues; cuadro benigno autolimitado.<br>' +
          '- <strong>Pacientes con VIH/SIDA o Enfermedad de Parkinson:</strong> La dermatitis seborreica es extraordinariamente severa, extensa, confluente y refractaria a tratamiento convencional. Un brote atípico explosivo en un adulto joven obliga a solicitar test de VIH.<br>' +
          '• <strong>Tratamiento:</strong> Champú antifúngico con <strong>Ketoconazol al 2%</strong> o sulfuro de selenio / piritionato de zinc 2 a 3 veces por semana + Corticoides tópicos de baja potencia (hidrocortisona) en ciclos muy cortos para el eritema agudo.',
        ],
      },
      {
        subhead: '2. Dermatitis de Contacto Irritativa (DCI)',
        paragraphs: [
          'Representa el <strong>80% de todas las dermatitis de contacto</strong>. Es un daño citotóxico físico o químico directo sobre la barrera epidérmica <strong>SIN BASE INMUNOLÓGICA</strong> (no requiere sensibilización previa y puede ocurrirle a cualquier persona si la sustancia es suficientemente concentrada).<br>' +
          '• <strong>Agentes comunes:</strong> Detergentes, lejía/cloro, disolventes, ácidos, álcalis, fricción repetida, agua y jabón constantes ("eccema de las amas de casa").<br>' +
          '• <strong>Clínica:</strong> Confinada <strong>estrictamente a la zona anatómica de contacto con el irritante</strong> (habitualmente manos), con bordes netos. Predomina la sensación de <strong>ardor, tirantez, sequedad y quemazón</strong> más que prurito. Piel eritematosa, agrietada, fisurada y descamativa.<br>' +
          '• <strong>Pruebas epicutáneas del parche: NEGATIVAS</strong>.<br>' +
          '• <strong>Tratamiento:</strong> Retirar y evitar el irritante, uso de guantes protectores con forro de algodón interno y cremas barrera hidratantes.',
        ],
      },
      {
        subhead: '3. Dermatitis de Contacto Alérgica (DCA)',
        paragraphs: [
          'Representa el <strong>20% de las dermatitis de contacto</strong>. Es una reacción de <strong>hipersensibilidad retardada celular Tipo IV</strong> mediada por linfocitos T sensibilizados.<br>' +
          '• Requiere un período de sensibilización previo (días a años). Afecta solo a individuos previamente alérgicos.<br>' +
          '• <strong>Alérgenos clásicos de examen:</strong><br>' +
          '- <strong>NÍQUEL (el alérgeno más frecuente del mundo):</strong> Joyas de fantasía, bisutería, hebillas de cinturón (eccema periumbilical), botones metálicos de jeans, relojes.<br>' +
          '- <strong>Cromo / Dicromato de potasio:</strong> Cemento húmedo (típico en trabajadores de la construcción) y curtido de cueros.<br>' +
          '- Fragancias, bálsamo del Perú, conservantes de cosméticos y resinas epoxi.<br>' +
          '• <strong>Clínica:</strong> <strong>PRURITO INTENSO CARDINAL</strong>. Lesiones eccematosas exudativas con vesículas agudas que <strong>tienden a sobrepasar y extenderse más allá de los límites físicos del contacto</strong>.<br>' +
          '• <strong>Diagnóstico de Certeza: PRUEBAS EPICUTÁNEAS DEL PARCHE (PATCH TEST)</strong>.<br>' +
          'Se aplican alergenos en la espalda bajo oclusión durante 48 horas. Se realizan <strong>dos lecturas: a las 48 horas</strong> (al retirar los parches) y <strong>a las 96 horas</strong> (4.° día, donde la reacción alérgica persiste o aumenta, a diferencia de la irritativa que se desvanece).<br>' +
          '• <strong>Tratamiento:</strong> Evitación estricta del alérgeno específico y <strong>corticoides tópicos de mediana o alta potencia</strong> durante 1 a 2 semanas.',
        ],
      },
    ],
    table: {
      title: 'Diagnóstico Diferencial: Contacto Irritativa vs Contacto Alérgica vs Seborreica',
      headers: ['Criterio', 'Contacto Irritativa (80%)', 'Contacto Alérgica (20%)', 'Dermatitis Seborreica'],
      rows: [
        ['Mecanismo etiopatogénico', 'Daño tóxico celular directo no inmune', 'Hipersensibilidad retardada Tipo IV (linfocitos T)', 'Respuesta inmune a levadura Malassezia'],
        ['Sensibilización previa', 'NO requiere; le ocurre a cualquiera', 'SÍ requiere sensibilización previa', 'No aplica (flora comensal comúnmente presente)'],
        ['Síntoma cardinal', 'Ardor, quemazón, tirantez dolorosa', 'PRURITO INTENSO y continuo', 'Prurito leve o asintomático'],
        ['Límites de las lesiones', 'Confinadas estrictamente al área de contacto', 'SOBREPASAN los límites del contacto', 'Zonas seborreicas (surcos, cejas, tórax)'],
        ['Aspecto de la escama', 'Escama seca, fisurada, agrietada', 'Eccema microvesicular exudativo', 'Escamas GRASOSAS, untuosas, amarillentas'],
        ['Pruebas del parche (Patch test)', 'NEGATIVAS (sin reacción alérgica)', 'POSITIVAS a las 48 y 96 horas', 'No indicadas'],
        ['Tratamiento de elección', 'Evitar irritante + cremas barrera', 'Evitar alérgeno + Corticoide tópico', 'Champú Ketoconazol 2% + corticoide suave'],
      ],
    },
    vignette: 'Mujer de 26 años consulta por lesiones eccematosas muy pruriginosas en el abdomen inferior de 3 semanas de evolución. Al examen físico se aprecia una placa eritematosa con pequeñas vesículas y excoriaciones por rascado de 4 x 3 cm localizada en la línea media periumbilical inferior, que coincide exactamente con el roce de la hebilla metálica de sus pantalones de mezclilla. Además, refiere que cuando usa aretes de fantasía se le inflaman los lóbulos de las orejas.',
    explicacion: 'La presencia de una placa eccematosa intensamente pruriginosa localizada bajo el ombligo en la zona de contacto con una hebilla metálica, asociada al antecedente de eccema en los lóbulos auriculares con bisutería de fantasía, es diagnóstica de Dermatitis de Contacto Alérgica por Níquel (hipersensibilidad retardada tipo IV). El níquel es el sensibilizante cutáneo más común a nivel mundial. La confirmación etiológica formal se realiza mediante Pruebas Epicutáneas del Parche (Patch Test) con lectura a las 48 y 96 horas. El tratamiento consiste en evitar el contacto directo con metales niquelados y aplicar corticoides tópicos de mediana potencia por 7 a 10 días.',
    keyPoints: [
      'La dermatitis seborreica cursa con escamas amarillentas untuosas en surcos nasogenianos y cuero cabelludo.',
      'Dermatitis seborreica severa y refractaria en adultos jóvenes obliga a descartar infección por VIH o Parkinson.',
      'Dermatitis de contacto irritativa (80%) = daño tóxico no inmune con ardor/fisuras delimitado a la zona de contacto.',
      'Dermatitis de contacto alérgica (20%) = hipersensibilidad tipo IV con prurito intenso que sobrepasa el área de contacto.',
      'El alérgeno más frecuente es el NÍQUEL (bisutería, hebillas, botones de jeans).',
      'El diagnóstico de confirmación de dermatitis alérgica es el Patch test con lectura a las 48 y 96 horas.',
    ],
    questions: [
      {
        stem: 'Un trabajador de la construcción de 40 años consulta por eccema subagudo en ambas manos de 2 meses de evolución. Trabaja preparando mezclas de cemento y albañilería. Refiere prurito intenso que se extiende desde las palmas hacia el dorso de las manos y antebrazos. Se sospecha una dermatitis de contacto alérgica ocupacional. ¿Cuál es el alérgeno presente en el cemento más probablemente responsable del cuadro y el examen para confirmarlo?',
        options: [
          { id: 'A', text: 'Níquel; determinación de IgE específica sérica' },
          { id: 'B', text: 'Dicromato de potasio (cromo); pruebas epicutáneas del parche (Patch test)' },
          { id: 'C', text: 'Látex; prueba de provocación bronquial' },
          { id: 'D', text: 'Resina epoxi; biopsia cutánea por congelación' },
          { id: 'E', text: 'Formaldehído; frotis directo con hidróxido de potasio' },
        ],
        correcta: 'B',
        explicacion: 'El dicromato de potasio (sales de cromo hexavalente) es el alérgeno clásico presente en el cemento húmedo y constituye la causa profesional más frecuente de dermatitis de contacto alérgica grave e incapacitante en trabajadores de la construcción y albañiles. Dado que es una reacción de hipersensibilidad celular tipo IV mediada por linfocitos T, el método confirmatorio de certeza son las pruebas epicutáneas del parche (Patch test) con lectura a las 48 y 96 horas. El níquel (A) es típico de bisutería. El látex (C) produce hipersensibilidad inmediata tipo I con habones. Perla. Eccema de manos en trabajador de la construcción con cemento es alergia al cromo (dicromato de potasio).',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.004',
      },
      {
        stem: 'Un hombre de 34 años consulta por eritema marcado y descamación grasosa amarillenta muy abundante que compromete de forma simétrica los surcos nasogenianos, el entrecejo y las regiones malares, con brotes intensos en el cuero cabelludo desde hace 3 meses, resistente a cremas hidratantes. Se observa además adelgazamiento moderado y una candidiasis oral al examen bucal. ¿Cuál es la conducta diagnóstica de mayor prioridad clínica que debe plantear el médico?',
        options: [
          { id: 'A', text: 'Solicitar perfil lipídico y curva de tolerancia a la glucosa para descartar síndrome metabólico' },
          { id: 'B', text: 'Solicitar prueba de ELISA para VIH con consentimiento informado' },
          { id: 'C', text: 'Realizar biopsia de cuero cabelludo para descartar lupus discoide' },
          { id: 'D', text: 'Indicar tratamiento con isotretinoína oral a dosis plenas' },
          { id: 'E', text: 'Prescribir antibióticos orales de amplio espectro por 6 meses' },
        ],
        correcta: 'B',
        explicacion: 'La presencia de una Dermatitis Seborreica extensa, atípica, severa y refractaria a tratamiento convencional en un adulto joven, especialmente cuando se acompaña de signos de inmunodepresión celular como candidiasis orofaríngea recurrente o baja de peso, es un marcador clínico centinela de Primoinfección o infección avanzada por Virus de la Inmunodeficiencia Humana (VIH). La prevalencia de dermatitis seborreica alcanza entre el 40% y el 80% en pacientes seropositivos, con una severidad que se correlaciona inversamente con el recuento de linfocitos CD4. La conducta médica inmediata e inexcusable en atención primaria es ofrecer y solicitar el test de ELISA para VIH. Perla. Dermatitis seborreica severa o explosiva en adulto joven exige solicitar test de VIH.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.004',
      },
    ],
  },

  {
    id: 'derma-08',
    classId: 'derma-08',
    tier: 2,
    blockNum: 2,
    blockName: 'Dermatosis Inflamatorias, Psoriasis & Eccemas',
    topicLabel: '16.8',
    title: 'Urticaria Aguda y Crónica: Habones Evanescentes, Angioedema y Antihistamínicos',
    perfilCode: '6.01.1.002',
    dx: 'Específico', tx: 'Completo', seg: 'Completo',
    ges: 'Sin garantía GES específica · Guía de Manejo de la Urticaria y Anafilaxia',
    reconstrucciones: 'EUNACOM 2013 (Q#28) · EUNACOM Diciembre 2017 (Q#19)',
    frecuencia: 'Muy alta · Carácter evanescente del habón (< 24h) y escalonamiento con antihistamínicos H1',
    diagram: flow('Algoritmo Escalonado de Manejo de la Urticaria', [
      { t: 'Paciente con Habones (Ronchas) Pruriginosos Sobreelevados con o sin Angioedema', s: 'Paso 1: Evaluar Signos de Anafilaxia (estridor, disnea, hipotensión) y duración de las lesiones' },
      { k: 'split', q: '¿Presencia de Compromiso Respiratorio o Hemodinámico (Anafilaxia)?', s: 'Bifurcación de emergencia vital absoluta', ll: 'SÍ: Estridor, broncoespasmo, hipotensión arterial', rl: 'NO: Cuadro estrictamente cutáneo localizado',
        left: { t: 'ANAFILAXIA: EMERGENCIA VITAL', s: 'ADRENALINA INTRAMUSCULAR INMEDIATA (0.3 - 0.5 mg en cara anterolateral del muslo) · Oxígeno + Fluidos', type: 'warn' },
        right: { t: 'URTICARIA CUTÁNEA PURA', s: 'Aguda (< 6 semanas) vs Crónica (≥ 6 semanas) · Antihistamínicos H1 de 2.ª generación a dosis estándar', type: 'acc' },
        ll: 'emergencia anafiláctica', rl: 'urticaria cutánea' },
      { t: 'Escalamiento en Urticaria Refractaria', s: 'Si no controla en 2 a 4 semanas: Cuadruplicar dosis de Antihistamínico H1 (hasta 4 veces la dosis) · 3.ª línea: Omalizumab', type: 'dec', al: 'guía internacional eaaci/ga2len', from: 'right' },
    ]),
    contexto: 'La urticaria es uno de los motivos de consulta más frecuentes en los servicios de urgencias. La perla semiológica cardinal e indiscutible del habón o roncha es su carácter EVANESCENTE: cada lesión individual brota y desaparece por completo en menos de 24 horas sin dejar rastro. El escalonamiento moderno de guías internacionales prohíbe el uso crónico de corticoides y se basa en cuadruplicar los antihistamínicos de segunda generación.',
    contentSections: [
      {
        subhead: '1. Fisiopatología Mastocitaria y Semiología del Habón',
        paragraphs: [
          'La lesión elemental patognomónica de la urticaria es el <strong>HABÓN O RONCHA</strong>.<br>' +
          '• Se produce por la <strong>degranulación de mastocitos dérmicos</strong> con liberación de histamina, leucotrienos y prostaglandinas, induciendo vasodilatación arteriolar (eritema) y aumento transitorio de la permeabilidad capilar con edema de la dermis papilar y media.<br>' +
          '• <strong>CRITERIO PATOGNOMÓNICO ABSOLUTO DE EXAMEN: CARÁCTER EVANESCENTE</strong>.<br>' +
          'Cada habón individual aparece en minutos, dura entre 30 minutos y pocas horas, y <strong>DESAPARECE TOTALMENTE EN MENOS DE 24 HORAS SIN DEJAR HUELLA NI CICATRIZ</strong>.<br>' +
          '<strong>Regla de oro de examen:</strong> Si una lesión con aspecto de habón permanece <strong>FIJA en el mismo sitio durante más de 24 a 48 horas</strong> o al resolverse deja una pigmentación purpúrica residual (hemosiderina), NO es una urticaria común: es una <strong>Vasculitis Urticariana</strong> y obliga a realizar biopsia cutánea.',
        ],
      },
      {
        subhead: '2. Angioedema y Alerta de Anafilaxia',
        paragraphs: [
          '• <strong>Angioedema:</strong> Es el mismo proceso fisiopatológico edematoso pero originado en la <strong>dermis profunda, tejido celular subcutáneo y submucosas</strong>. Se manifiesta como tumefacción difusa tensa y deformante de párpados, labios, lengua o genitales. Cursa con <strong>sensación de tensión, ardor o dolor, más que prurito</strong>. Tarda de 48 a 72 horas en reabsorberse.<br>' +
          '• <strong>Banderas Rojas de ANAFILAXIA:</strong> Si los habones o el angioedema se acompañan de:<br>' +
          '- Compromiso respiratorio (estridor laríngeo por edema de glotis, disnea, sibilancias o disfonía).<br>' +
          '- Compromiso hemodinámico (hipotensión arterial, mareo, síncope, shock).<br>' +
          '- Síntomas digestivos cólicos intensos con vómitos tras exposición alérgica.<br>' +
          '<strong>TRATAMIENTO DE ELECCIÓN INMEDIATO: ADRENALINA (EPINEFRINA) INTRAMUSCULAR</strong> a dosis de <strong>0.3 a 0.5 mg (solución 1:1.000 sin diluir) inyectada en la cara anterolateral del muslo</strong>. Los corticoides y antihistamínicos son fármacos secundarios que tardan horas en actuar y NUNCA reemplazan a la adrenalina.',
        ],
      },
      {
        subhead: '3. Clasificación Temporal y Algoritmo Terapéutico Internacional',
        paragraphs: [
          '• <strong>Urticaria Aguda:</strong> Duración de los brotes <strong>menor a 6 semanas</strong>. En más del 60% de los casos en niños y adultos se desencadena por <strong>infecciones virales respiratorias o digestivas comunes</strong>. Otras causas: fármacos (AINEs, antibióticos betalactámicos) y alimentos.<br>' +
          '• <strong>Urticaria Crónica:</strong> Brotes diarios o casi diarios de habones durante <strong>6 semanas o más</strong>. En el 80% de los casos es <strong>Urticaria Crónica Espontánea (idiopática)</strong>, mediada por autoanticuerpos IgG dirigidos contra el receptor FcεRI del mastocito o contra la IgE.<br>' +
          '• <strong>Algoritmo de Tratamiento Escalonado (Guías EAACI / GA²LEN / WAO):</strong><br>' +
          '1. <strong>Primera Línea:</strong> <strong>Antihistamínico H1 de segunda generación (no sedante: Cetirizina 10 mg, Levocetirizina 5 mg, Desloratadina 5 mg, Fexofenadina 180 mg) a dosis estándar diaria</strong>.<br>' +
          '2. <strong>Segunda Línea: CUADRUPLICAR LA DOSIS DEL ANTIHISTAMÍNICO H1 DE SEGUNDA GENERACIÓN (hasta 4 veces la dosis estándar diaria)</strong> si no hay control a las 2 a 4 semanas. Es una estrategia de altísima eficacia y seguridad.<br>' +
          '3. <strong>Tercera Línea:</strong> <strong>Omalizumab</strong> (anticuerpo monoclonal anti-IgE) 300 mg subcutáneo mensual.<br>' +
          '4. <strong>Cuarta Línea:</strong> Ciclosporina A oral.<br>' +
          '<strong>TRAMPA GRAVE DE EXAMEN:</strong> Los corticoides orales NUNCA se usan en el tratamiento de mantenimiento de la urticaria crónica. Solo se permiten ciclos ultracortos (máximo 3 a 5 días) como rescate en exacerbaciones agudas severas.',
        ],
      },
    ],
    table: {
      title: 'Urticaria Común vs Vasculitis Urticariana',
      headers: ['Parámetro', 'Urticaria Común (Aguda o Crónica)', 'Vasculitis Urticariana'],
      rows: [
        ['Duración de cada lesión individual', 'EVANESCENTE: desaparece en < 24 HORAS', 'FIJA: persiste MÁS DE 24 a 48 HORAS'],
        ['Síntoma subjetivo predominante', 'PRURITO INTENSO (picazón)', 'ARDOR, dolor, quemazón o sensibilidad'],
        ['Evolución al resolverse', 'Desaparece sin dejar NINGUNA marca', 'Deja PÚRPURA o mancha pigmentaria residual'],
        ['Fisiopatología', 'Degranulación mastocitaria e histamina', 'Vasculitis leucocitoclástica por inmunocomplejos'],
        ['Estudio diagnóstico', 'Clínico; no requiere biopsia', 'BIOPSIA CUTÁNEA OBLIGATORIA (estudio de LES/hipocomplementemia)'],
      ],
    },
    vignette: 'Hombre de 32 años consulta por aparición recurrente de ronchas solevantadas, rojizas y muy pruriginosas en el tronco y las extremidades desde hace 3 meses, que aparecen prácticamente todos los días. Refiere que cada roncha individual le dura entre 4 y 6 horas y desaparece sin dejar ninguna cicatriz ni marca en la piel, pero brotan otras nuevas en sitios diferentes. Ha estado usando desloratadina 5 mg al día sin lograr mejoría satisfactoria. Examen físico: múltiples habones eritematosos con halo pálido en abdomen y muslos.',
    explicacion: 'El paciente presenta una Urticaria Crónica Espontánea (duración de los brotes mayor a 6 semanas con habones típicamente evanescentes que duran menos de 24 horas y no dejan rastro). Ante la falta de control con un antihistamínico H1 de segunda generación a dosis convencional, la conducta médica estandarizada según las guías clínicas internacionales de consenso (EAACI/GA²LEN) y el MINSAL es Aumentar la dosis del antihistamínico H1 de segunda generación hasta 4 veces la dosis estándar diaria (ej. Levocetirizina 10 a 20 mg/día o Desloratadina 10 a 20 mg/día). Está contraindicado prescribir corticoides orales de forma crónica o mantenida.',
    keyPoints: [
      'El habón o roncha es EVANESCENTE: dura menos de 24 horas y desaparece sin dejar rastro.',
      'Si el habón dura más de 24 horas o deja mancha purpúrica residual, es Vasculitis Urticariana (requiere biopsia).',
      'Urticaria aguda < 6 semanas (desencadenada por virus o fármacos); Urticaria crónica ≥ 6 semanas (autoinmune).',
      'Primera línea: Antihistamínicos H1 de 2.ª generación no sedantes (Cetirizina, Desloratadina, Levocetirizina).',
      'Si no responde en 2 a 4 semanas: CUADRUPLICAR la dosis del antihistamínico H1 de 2.ª generación (hasta 4 veces).',
      'En ANAFILAXIA (compromiso de vía aérea o hipotensión), el tratamiento inmediato vital es ADRENALINA INTRAMUSCULAR.',
      'Los corticoides orales NUNCA se usan como tratamiento crónico en urticaria.',
    ],
    questions: [
      {
        stem: 'Un hombre de 28 años presenta ronchas eritematosas pruriginosas diseminadas en el cuerpo desde hace 2 meses. El médico sospecha una urticaria crónica espontánea. Para corroborar el diagnóstico clínico antes de solicitar exámenes, ¿cuál es la pregunta semiológica clave que debe formularse respecto a las lesiones?',
        options: [
          { id: 'A', text: '¿Cada roncha individual dura más de 72 horas en el mismo sitio?' },
          { id: 'B', text: '¿Las ronchas desaparecen en menos de 24 horas sin dejar marca, apareciendo otras en sitios distintos?' },
          { id: 'C', text: '¿Las lesiones dejan cicatrices atróficas deprimidas al desaparecer?' },
          { id: 'D', text: '¿Aparecen ampollas de contenido purulento en el centro de las ronchas?' },
          { id: 'E', text: '¿Las ronchas duelen intensamente al tacto sin producir picazón?' },
        ],
        correcta: 'B',
        explicacion: 'La propiedad semiológica definitoria y sine qua non del habón de la urticaria es su carácter evanescente o fugaz: debido a que el edema vasomotor de la dermis papilar se reabsorbe con rapidez, cada lesión individual tiene una duración efímera, desapareciendo por completo en menos de 24 horas sin dejar ninguna mancha, hematoma ni cicatriz en la piel afectada, mientras brotan nuevas lesiones en otras localizaciones anatómicas. Si la lesión permanece fija por más de 24-48 horas o deja una pigmentación purpúrica hemosiderótica al resolverse (A, C, E), orienta a una vasculitis urticariana. Perla. El habón de la urticaria dura menos de 24 horas y desaparece sin dejar rastro.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.002',
      },
      {
        stem: 'Una paciente de 35 años con diagnóstico de urticaria crónica espontánea continúa presentando brotes diarios de habones intensamente pruriginosos a pesar de tomar religiosamente cetirizina 10 mg al día durante el último mes. No tiene signos de angioedema ni compromiso respiratorio. Según las guías internacionales de manejo de urticaria, ¿cuál es el siguiente paso terapéutico recomendado?',
        options: [
          { id: 'A', text: 'Iniciar prednisona oral 40 mg al día durante 3 meses continuos' },
          { id: 'B', text: 'Aumentar la dosis del antihistamínico H1 de segunda generación hasta cuatro veces la dosis estándar (cetirizina hasta 40 mg/día)' },
          { id: 'C', text: 'Cambiar a clorfenamina oral 4 mg cada 6 horas' },
          { id: 'D', text: 'Iniciar tratamiento con azatioprina oral' },
          { id: 'E', text: 'Indicar plasmaféresis de urgencia' },
        ],
        correcta: 'B',
        explicacion: 'El algoritmo internacional estandarizado de las guías EAACI/GA²LEN/EDF/WAO para el tratamiento de la urticaria crónica refractaria establece claramente que, ante el fracaso terapéutico de un antihistamínico H1 de segunda generación a dosis estándar transcurridas 2 a 4 semanas, el segundo escalón mandatorio es incrementar la dosis del mismo antihistamínico H1 de segunda generación hasta dos, tres o cuatro veces la dosis habitual (hasta 4 veces la dosis convencional, ej. cetirizina 40 mg/día o levocetirizina 20 mg/día). Esta estrategia logra el control en más del 60-70% de los pacientes refractarios con un excelente perfil de seguridad. Los corticoides orales a largo plazo (A) están contraindicados. Los antihistamínicos de primera generación como clorfenamina (C) ya no se recomiendan por sus efectos sedantes y anticolinérgicos. Perla. En urticaria refractaria a dosis estándar, se cuadruplica el antihistamínico de 2.ª generación.',
        recTag: 'Banco Oficial AEE · Perfil V3 6.01.1.002',
      },
    ],
  },
];

module.exports = {
  bloque2,
  flow,
};
