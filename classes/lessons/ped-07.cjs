// Clase 18.07 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-07).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-07',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Neumonía adquirida en la comunidad pediátrica, etiología por grupos etarios, taquipnea como signo cardinal, amoxicilina a dosis plenas, ampicilina endovenosa y derrame paraneumónico',
      say: 'Bienvenidos a la clase sobre neumonía adquirida en la comunidad en pediatría, un tema troncal con alta tasa de preguntas clínicas en el examen EUNACOM. En esta sesión abordaremos la estratificación etiológica según la edad del paciente, el rol de la taquipnea como signo cardinal definido por la Organización Mundial de la Salud, la dosificación de amoxicilina ambulatoria y ampicilina hospitalaria, los criterios estrictos de ingreso y el manejo del derrame pleural complicado. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología alveolar',
      title: 'Invasión Neumocócica, Exudado Fibrinoso y Condensación Lobar',
      nodes: [
        { id: 'asp', col: 0, row: 1, k: 'start', t: 'Colonización nasofaríngea', s: 'Aspiración de neumococo o virus respiratorio al árbol bronquial distal' },
        { id: 'pro', col: 1, row: 1, k: 'mech', t: 'Proliferación intraalveolar', s: 'Activación de macrófagos alveolares y liberación de citoquinas proinflamatorias' },
        { id: 'con', col: 2, row: 1, k: 'effect', t: 'Hepatización y exudado denso', s: 'Acumulación de fibrina, eritrocitos y neutrófilos con ocupación alveolar' },
        { id: 'vqd', col: 3, row: 1, k: 'alert', t: 'Efecto shunt e hipoxemia', s: 'Alveolos perfundidos pero no ventilados que generan desbalance V/Q y taquipnea' },
      ],
      edges: [
        { from: 'asp', to: 'pro', label: 'microaspiración' },
        { from: 'pro', to: 'con', label: 'respuesta inflamatoria' },
        { from: 'con', to: 'vqd', label: 'ocupación alveolar' },
      ],
      steps: [
        {
          show: ['asp', 'pro'],
          note: 'Microaspiración bacteriana y respuesta inmune innata',
          say: 'La infección se inicia por la microaspiración de patógenos desde la nasofaringe colonizada hacia los alveolos distales, donde el neumococo evade las defensas mucociliares y activa a los macrófagos locales desencadenando una intensa cascada inflamatoria.',
        },
        {
          show: ['con', 'vqd'],
          note: 'Ocupación exudativa alveolar y desbalance ventilación perfusión',
          say: 'El espacio aéreo se llena rápidamente de un exudado rico en fibrina, leucocitos y detritus celulares que consolida el parénquima pulmonar, aboliendo la ventilación alveolar y generando un cortocircuito pulmonar que conduce a hipoxemia y taquipnea refleja.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Etiología según grupo etario',
      title: 'Patógenos Prevalentes: Del Recién Nacido al Escolar',
      cards: [
        {
          title: 'Periodo Neonatal y Menor de Tres Meses',
          tag: 'Flora del canal del parto y gérmenes perinatales',
          kind: 'alert',
          items: [
            {
              t: 'Recién nacido menor de un mes',
              d: 'Streptococcus agalactiae grupo B, Escherichia coli, Listeria monocytogenes y Klebsiella',
              say: 'En el neonato menor de un mes predominan los patógenos del canal del parto, destacando Streptococcus agalactiae, enterobacterias como Escherichia coli y Listeria monocytogenes.',
            },
            {
              t: 'Lactante de uno a tres meses febril',
              d: 'Streptococcus pneumoniae, virus respiratorios y persistencia de patógenos perinatales',
              say: 'Entre el primer y tercer mes de vida el neumococo comienza a ser el agente bacteriano dominante, coexistiendo con virus respiratorios y riesgo latente de sepsis bacteriana oculta.',
            },
          ],
        },
        {
          title: 'Lactantes Mayores y Escolares',
          tag: 'Neumococo versus patógenos atípicos intracelulares',
          kind: 'key',
          items: [
            {
              t: 'Lactante y preescolar de 3 meses a 5 años',
              d: 'Streptococcus pneumoniae es el patógeno bacteriano clásico; virus respiratorios causan gran proporción',
              say: 'Entre los tres meses y los cinco años, Streptococcus pneumoniae es el agente bacteriano por excelencia, aunque los virus respiratorios como el sincicial y metapneumovirus son extraordinariamente frecuentes.',
            },
            {
              t: 'Escolar y adolescente mayor de cinco años',
              d: 'Mycoplasma pneumoniae y Chlamydophila pneumoniae representan más del 50% de las neumonías en este grupo',
              say: 'En niños mayores de cinco años los microorganismos atípicos como Mycoplasma pneumoniae y Chlamydophila superan al neumococo, presentándose como cuadros insidiosos con tos seca y mialgias.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Signo cardinal de la OMS',
      title: 'Taquipnea Pediátrica: Umbrales Estandarizados según Edad',
      cards: [
        {
          title: 'Definición de Taquipnea según la OMS',
          tag: 'El parámetro clínico individual más sensible y específico',
          kind: 'criteria',
          items: [
            {
              t: 'Menor de dos meses de vida cumplidos',
              d: 'Frecuencia respiratoria mayor o igual a 60 respiraciones por minuto en reposo',
              say: 'En el lactante menor de dos meses, la Organización Mundial de la Salud define taquipnea como una frecuencia respiratoria igual o superior a sesenta respiraciones por minuto contadas en reposo.',
            },
            {
              t: 'Lactante de dos a once meses de edad',
              d: 'Frecuencia respiratoria mayor o igual a 50 respiraciones por minuto en reposo',
              say: 'Entre los dos y once meses cumplidos, el punto de corte diagnóstico de taquipnea es de cincuenta respiraciones por minuto o más.',
            },
          ],
        },
        {
          title: 'Preescolares y Niños Mayores',
          tag: 'Cortes fisiológicos a partir del año de vida',
          kind: 'key',
          items: [
            {
              t: 'Preescolar de doce meses a cuatro años',
              d: 'Frecuencia respiratoria mayor o igual a 40 respiraciones por minuto en reposo',
              say: 'En niños entre uno y cuatro años de edad, se considera taquipnea toda frecuencia respiratoria igual o superior a cuarenta respiraciones por minuto.',
            },
            {
              t: 'Escolar mayor de cinco años',
              d: 'Frecuencia respiratoria mayor a 28 a 30 respiraciones por minuto en reposo',
              say: 'En el niño mayor de cinco años el límite superior fisiológico desciende a treinta respiraciones por minuto, marcando un signo precoz de insuficiencia ventilatoria.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología respiratoria',
      title: 'Neumonía Típica Bacteriana versus Neumonía Atípica',
      cards: [
        {
          title: 'Neumonía Típica (Neumocócica)',
          tag: 'Inicio brusco y condensación alveolar localizada',
          kind: 'key',
          items: [
            {
              t: 'Fiebre alta, compromiso del estado general y dolor pleural',
              d: 'Comienzo súbito con escalofríos, fiebre sobre 39 grados, taquipnea y en ocasiones dolor en puntada de costado',
              say: 'La neumonía bacteriana clásica por neumococo debuta en forma aguda con fiebre alta, calofríos, decaimiento marcado y dolor torácico de tipo pleurítico o dolor abdominal referido.',
            },
            {
              t: 'Signos auscultatorios de condensación focal',
              d: 'Crépitos localizados unilaterales, soplo tubario, aumento de la transmisión de la voz y matidez a la percusión',
              say: 'Al examen físico destacan crépitos finos inspiratorios focalizados en una zona pulmonar, respiración soplante o soplo tubario y matidez percutoria en la base afectada.',
            },
          ],
        },
        {
          title: 'Neumonía Atípica (Mycoplasma)',
          tag: 'Curso insidioso y disociación clínico radiológica',
          kind: 'criteria',
          items: [
            {
              t: 'Tos seca irritativa prolongada y síntomas extrapulmonares',
              d: 'Tos en accesos de más de 7 a 10 días, febrícula, cefalea intensa, odinofagia y mialgias generalizadas',
              say: 'La neumonía atípica por Mycoplasma presenta un curso solapado con tos seca en salvas de más de una semana de evolución, acompañada de cefalea, dolor faríngeo y dolores musculares.',
            },
            {
              t: 'Disociación clínico radiológica evidente',
              d: 'Paciente en buen estado general con escasa auscultación pero radiografía con infiltrado intersticial extenso',
              say: 'El sello distintivo es la disociación clínico radiológica: el escolar se aprecia en buen estado general con auscultación pulmonar modesta, pero su radiografía muestra densos infiltrados bilaterales.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Entidad neonatal específica',
      title: 'Neumonía Afebril del Lactante por Chlamydia Trachomatis',
      cards: [
        {
          title: 'Mecanismo de Transmisión y Pródromo',
          tag: 'Infección vertical durante el parto vaginal',
          kind: 'alert',
          items: [
            {
              t: 'Adquisición en canal del parto y conjuntivitis previa',
              d: 'Lactante de 1 a 3 meses con antecedente de conjuntivitis purulenta neonatal en las primeras semanas de vida',
              say: 'Chlamydia trachomatis se adquiere durante el paso por el canal de parto infectado, debutando típicamente entre el primer y tercer mes de vida tras un antecedente de conjuntivitis neonatal.',
            },
            {
              t: 'Tos en staccato o tos coqueluchoidea sin fiebre',
              d: 'Tos seca espasmódica entrecortada, polipnea sin fiebre y ausencia casi total de compromiso sistémico',
              say: 'La clínica es muy característica: presenta tos entrecortada en staccato similar al coqueluche, taquipnea y ausencia total de fiebre, encontrándose el lactante alerta y afebril.',
            },
          ],
        },
        {
          title: 'Laboratorio Típico y Tratamiento',
          tag: 'Eosinofilia periférica y respuesta a macrólidos',
          kind: 'pharma',
          items: [
            {
              t: 'Eosinofilia en hemograma e infiltrado intersticial',
              d: 'Hemograma con más de 400 a 500 eosinófilos por microlitro y radiografía con hiperinsuflación e infiltrado reticular',
              say: 'En el laboratorio destaca una eosinofilia sanguínea marcada y la radiografía de tórax revela infiltrados intersticiales bilaterales con hiperinsuflación pulmonar simétrica.',
            },
            {
              t: 'Tratamiento antibiótico de elección con macrólidos',
              d: 'Azitromicina o claritromicina oral por diez a catorce días; curación microbiológica y clínica completa',
              say: 'El tratamiento de elección se realiza con macrólidos por vía oral como claritromicina o azitromicina durante catorce días, logrando la remisión completa del cuadro respiratorio.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación imagenológica',
      title: 'Rol de la Radiografía de Tórax y Patrones Radiológicos',
      cards: [
        {
          title: '¿Cuándo está Indicada la Radiografía en NAC?',
          tag: 'No se requiere de rutina en neumonía ambulatoria típica',
          kind: 'key',
          items: [
            {
              t: 'Manejo ambulatorio no complicado no exige radiografía',
              d: 'El diagnóstico de NAC en atención primaria es eminentemente clínico y no requiere placa para iniciar amoxicilina',
              say: 'En la atención primaria de salud no es obligatorio solicitar radiografía de tórax ante un niño con clínica clara de neumonía no complicada que tolera la vía oral y satura adecuadamente.',
            },
            {
              t: 'Indicaciones formales de estudio radiológico',
              d: 'Pacientes que requieren hospitalización, sospecha de derrame pleural, falta de respuesta tras 48 a 72 horas o duda diagnóstica',
              say: 'La placa de tórax es imperativa si el paciente requiere hospitalización, si se sospecha complicación como derrame o atelectasia, o si persiste con fiebre tras cuarenta y ocho horas de antibióticos.',
            },
          ],
        },
        {
          title: 'Patrones Radiológicos Principales',
          tag: 'Condensación alveolar versus infiltrado intersticial',
          kind: 'criteria',
          items: [
            {
              t: 'Consolidación alveolar lobar o segmentaria con broncograma',
              d: 'Opacidad homogénea que ocupa un lóbulo con signo del broncograma aéreo; altamente sugerente de neumococo',
              say: 'La consolidación alveolar densa y homogénea con broncograma aéreo que compromete un segmento o lóbulo completo es el patrón radiológico clásico de la neumonía bacteriana neumocócica.',
            },
            {
              t: 'Patrón intersticial peribroncovascular bilateral',
              d: 'Engrosamiento peribronquial e infiltrado reticulonodular difuso; orienta a etiología viral o microorganismos atípicos',
              say: 'El patrón intersticial con infiltrados reticulares difusos bilaterales y engrosamiento peribronquial orienta a patógenos virales o bacterias atípicas como Mycoplasma.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estratificación de riesgo vital',
      title: 'Criterios Absolutos de Hospitalización en Neumonía Infantil',
      cards: [
        {
          title: 'Criterios por Edad y Estado Clínico',
          tag: 'Condiciones de ingreso hospitalario inmediato',
          kind: 'alert',
          items: [
            {
              t: 'Edad menor de tres meses cumplidos (criterio absoluto)',
              d: 'Todo lactante menor de 90 días con neumonía debe hospitalizarse por riesgo de sepsis, apnea y colapso rápido',
              say: 'En el examen EUNACOM la regla es absoluta: cualquier niño menor de tres meses de vida diagnosticado con neumonía debe hospitalizarse de inmediato por alto riesgo de bacteriemia oculta y apnea.',
            },
            {
              t: 'Hipoxemia y dificultad respiratoria moderada a severa',
              d: 'Saturación ambiental menor a 93% en vigilia, aleteo nasal, quejido respiratorio o tiraje universal severo',
              say: 'La saturación arterial inferior a noventa y tres por ciento al aire ambiente, el quejido espiratorio audible y las retracciones torácicas severas obligan al ingreso hospitalario urgente.',
            },
          ],
        },
        {
          title: 'Criterios de Tolerancia y Complicaciones',
          tag: 'Falla oral, comorbilidades y riesgo social',
          kind: 'criteria',
          items: [
            {
              t: 'Intolerancia a la vía oral y deshidratación',
              d: 'Vómitos incoercibles o incapacidad para lactar que impiden la administración segura de antibióticos orales',
              say: 'La imposibilidad de alimentarse o la presencia de vómitos reiterados que impiden la terapia oral constituyen indicación estricta de hospitalización para hidratación y antibióticos endovenosos.',
            },
            {
              t: 'Sospecha de derrame pleural o falta de respuesta clínica',
              d: 'Persistencia de fiebre o deterioro clínico tras 48 a 72 horas de amoxicilina oral bien administrada',
              say: 'El fracaso clínico tras cuarenta y ocho a setenta y dos horas de amoxicilina oral o el hallazgo de un derrame pleural exigen el ingreso hospitalario inmediato para estudio invasivo.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Terapéutica antimicrobiana',
      title: 'Esquemas Antimicrobianos en Neumonía según Edad y Escenario',
      head: ['Grupo de Edad', 'Etiología Prevalente', 'Tratamiento de Elección', 'Vía y Dosificación'],
      rows: [
        {
          cells: ['Menor de un mes (Neonato)', 'Streptococcus grupo B, E. coli, Listeria', 'Ampicilina más Cefotaxima o Amikacina', 'Endovenoso en neonatología'],
          say: 'El neonato con neumonía se hospitaliza siempre recibiendo ampicilina más cefotaxima endovenosa para cubrir estreptococo del grupo B, listeria y bacilos entéricos.',
        },
        {
          cells: ['Uno a tres meses febril', 'Streptococcus pneumoniae, virus, EGB', 'Ampicilina más Cefotaxima endovenosa', 'Hospitalización obligatoria'],
          say: 'El lactante menor de tres meses febril requiere hospitalización formal con ampicilina y cefotaxima parenteral por el riesgo elevado de infección bacteriana invasiva.',
        },
        {
          cells: ['Tres meses a cinco años', 'Streptococcus pneumoniae (Neumococo)', 'Amoxicilina oral a dosis altas', 'Oral 80 a 90 mg por kilo al día por 7 días'],
          say: 'En el lactante mayor ambulatorio la amoxicilina oral a dosis plenas de ochenta a noventa miligramos por kilo al día durante siete días es el tratamiento de primera línea.',
        },
        {
          cells: ['Hospitalizado mayor 3 meses', 'Streptococcus pneumoniae sensible', 'Ampicilina endovenosa', 'Endovenoso 150 a 200 mg por kilo al día'],
          say: 'En el niño hospitalizado que tolera bien y no está séptico, la ampicilina endovenosa a ciento cincuenta a doscientos miligramos por kilo es el fármaco de elección.',
        },
        {
          cells: ['Mayor de cinco años (Escolar)', 'Mycoplasma pneumoniae y Chlamydia', 'Azitromicina o Claritromicina oral', 'Oral 10 mg por kilo día uno y 5 mg días dos a cinco'],
          say: 'En escolares con neumonía atípica se indican macrólidos orales como azitromicina a diez miligramos por kilo el primer día y cinco miligramos los cuatro días siguientes.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Pilar ambulatorio de primera línea',
      title: 'Tratamiento Ambulatorio: Amoxicilina a Dosis Plenas (80-90 mg/kg/día)',
      cards: [
        {
          title: 'Fundamento de las Dosis Altas de Amoxicilina',
          tag: 'Superar la resistencia intermedia de neumococo',
          kind: 'pharma',
          items: [
            {
              t: 'Mecanismo de resistencia no mediado por betalactamasas',
              d: 'Streptococcus pneumoniae altera sus proteínas fijadoras de penicilina (PBP); no produce betalactamasas',
              say: 'La resistencia del neumococo a la penicilina se debe a mutaciones en las proteínas fijadoras de penicilina y no a betalactamasas, por lo que se vence aumentando la concentración sérica del fármaco.',
            },
            {
              t: 'Dosis exacta de 80 a 90 mg/kg/día fraccionada cada 8 o 12 horas',
              d: 'Dosis de 40 a 50 mg/kg es insuficiente; la pauta de 80 a 90 mg/kg por 7 días garantiza curación superior al 95%',
              say: 'La dosis correcta exigida en las guías nacionales es de ochenta a noventa miligramos por kilo al día dividida cada ocho o doce horas por siete días. Dosis menores son un error frecuente en el examen.',
            },
          ],
        },
        {
          title: '¿Por Qué NO Usar Ácido Clavulánico de Entrada?',
          tag: 'Ineficacia sobre neumococo y toxicidad gastrointestinal',
          kind: 'alert',
          items: [
            {
              t: 'El ácido clavulánico no aporta contra neumococo',
              d: 'Al no producir betalactamasas, el inhibidor es farmacológicamente inútil frente a Streptococcus pneumoniae',
              say: 'Es un error común indicar amoxicilina con ácido clavulánico para tratar una neumonía típica: el clavulánico no tiene ninguna acción sobre las proteínas mutadas del neumococo y solo aumenta la diarrea.',
            },
            {
              t: 'Control médico obligatorio a las 48 horas en APS',
              d: 'Citar a control clínico en dos días para constatar defervescencia térmica y mejoría del apetito y taquipnea',
              say: 'Todo paciente que inicia amoxicilina ambulatoria debe ser reevaluado a las cuarenta y ocho horas en el consultorio para comprobar el cese de la fiebre y la disminución de la frecuencia respiratoria.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Pilar hospitalario parenteral',
      title: 'Tratamiento Parenteral: Ampicilina versus Cefotaxima EV',
      cards: [
        {
          title: 'Ampicilina EV como Primera Línea Hospitalaria',
          tag: 'Monoterapia eficaz en el paciente hospitalizado no crítico',
          kind: 'pharma',
          items: [
            {
              t: 'Ampicilina endovenosa a 150 a 200 mg/kg/día',
              d: 'Administrada cada 6 horas por vía endovenosa en lactantes mayores de tres meses inmunizados',
              say: 'Para el niño hospitalizado que no presenta criterios de choque séptico, la ampicilina endovenosa a dosis de ciento cincuenta a doscientos miligramos por kilo al día fraccionada cada seis horas es la terapia de primera línea.',
            },
            {
              t: 'Traspaso a vía oral tras 24 a 48 horas afebril',
              d: 'Al lograr estabilidad clínica, tolerancia oral y defervescencia, se completa el esquema con amoxicilina oral',
              say: 'Una vez que el paciente permanece afebril por más de veinticuatro horas y se alimenta con normalidad, se realiza el traspaso secuencial a amoxicilina oral para completar siete a diez días de tratamiento.',
            },
          ],
        },
        {
          title: 'Indicaciones de Cefalosporinas de Tercera Generación',
          tag: 'Sospecha de resistencia, sepsis grave o empiema',
          kind: 'criteria',
          items: [
            {
              t: 'Cefotaxima o ceftriaxona en pacientes graves o no vacunados',
              d: 'Neumonía con compromiso hemodinámico, lactante no inmunizado contra neumococo o falla a ampicilina',
              say: 'Se indica cefotaxima o ceftriaxona endovenosa si el paciente ingresa séptico, en lactantes no vacunados contra Haemophilus o neumococo, o si no responde a la ampicilina inicial.',
            },
            {
              t: 'Asociación con cloxacilina o vancomicina ante sospecha estafilocócica',
              d: 'Deterioro rápido, neumonía necrotizante, neumatoceles o presencia de lesiones cutáneas purulentas',
              say: 'Si la neumonía evoluciona con neumatoceles rápidos o choque tóxico, se asocia cloxacilina o vancomicina para cubrir Staphylococcus aureus resistente productor de toxina de Panton Valentine.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicación bacteriana mayor',
      title: 'Derrame Pleural Paraneumónico y Empiema Pediátrico',
      cards: [
        {
          title: 'Sospecha y Fisiopatología del Derrame',
          tag: 'Fiebre persistente y matidez pulmonar asimétrica',
          kind: 'alert',
          items: [
            {
              t: 'Sospechar derrame ante fiebre que persiste tras 48 horas',
              d: 'La persistencia de fiebre o el empeoramiento del dolor torácico tras 48 horas de antibióticos obliga a sospechar derrame',
              say: 'Si un niño con neumonía continúa con fiebre alta tras cuarenta y ocho horas de antibiótico adecuado o presenta matidez marcada con silencio vesicular en una base, se debe sospechar derrame paraneumónico.',
            },
            {
              t: 'Ecografía pleural como estudio de elección',
              d: 'Superior a la radiografía para cuantificar líquido, detectar tabiques de fibrina y guiar la punción diagnóstica',
              say: 'La ecografía pleural es el examen de elección para evaluar el derrame, ya que cuantifica el volumen exacto, identifica la presencia de tabicaciones precoces y marca el sitio ideal para la punción.',
            },
          ],
        },
        {
          title: 'Criterios de Empiema y Conducta Terapéutica',
          tag: 'Toracocentesis, drenaje y fibrinolíticos',
          kind: 'criteria',
          items: [
            {
              t: 'Criterios de empiema en líquido pleural',
              d: 'Aspecto francamente purulento, pH menor a 7.20, glucosa menor a 40 mg/dL, LDH mayor a 1.000 UI/L o bacterias al Gram',
              say: 'El diagnóstico de empiema se confirma si el líquido es purulento o presenta pH menor a siete coma veinte, glucosa menor a cuarenta miligramos por decilitro o bacterias visibles en la tinción de Gram.',
            },
            {
              t: 'Tubo de drenaje pleural y videotoracoscopía precoz',
              d: 'Instalación de tubo pleural con fibrinolíticos intrapleurales (alteplasa) o videotoracoscopía asistida (VATS)',
              say: 'El empiema exige la colocación inmediata de un tubo de drenaje pleural bajo aspiración asociado al uso de fibrinolíticos intrapleurales o resolución quirúrgica mediante videotoracoscopía temprana.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo clínico MINSAL',
      title: 'Algoritmo de Diagnóstico, Manejo y Criterios de Ingreso en NAC',
      say: 'Examinemos el algoritmo integrado para evaluar la neumonía adquirida en la comunidad, definir el escenario de manejo e iniciar el tratamiento antimicrobiano correcto.',
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Tratamiento de Elección en NAC Ambulatoria del Lactante',
      stem: 'Un lactante de 8 meses consulta en el CESFAM por fiebre de 38.8°C y tos de 2 días. Al examen físico se constata FR de 54 rpm, SatO2 95% al aire ambiente, buen estado general y crépitos en la base pulmonar izquierda. Tolera bien la lactancia materna.',
      question: '¿Cuál es el tratamiento de primera línea más adecuado?',
      options: [
        { letter: 'A', text: 'Azitromicina oral a 10 mg/kg/día por 3 días' },
        { letter: 'B', text: 'Amoxicilina oral a 80-90 mg/kg/día dividida cada 8 o 12 horas por 7 días' },
        { letter: 'C', text: 'Ceftriaxona intramuscular diaria por 7 días' },
        { letter: 'D', text: 'Salbutamol inhalado exclusivo sin antibióticos' },
        { letter: 'E', text: 'Amoxicilina con ácido clavulánico a 40 mg/kg/día' },
      ],
      correct: 'B',
      explanation: 'En un lactante de 8 meses con neumonía adquirida en la comunidad no complicada, en buen estado general, con saturación normal y adecuada tolerancia oral, el patógeno bacteriano predominante es Streptococcus pneumoniae (neumococo). Según la guía clínica del MINSAL y de la SOCHIPE, el tratamiento antibiótico empírico ambulatorio de primera línea es Amoxicilina oral a dosis altas de 80 a 90 mg/kg/día dividida cada 8 o 12 horas durante 7 días. Esta dosificación elevada asegura concentraciones séricas y alveolares suficientes para erradicar cepas con resistencia intermedia de PBP.',
      say: {
        stem: 'Lactante de ocho meses en consultorio con fiebre tos taquipnea de cincuenta y cuatro saturación noventa y cinco por ciento y crépitos basales izquierdos tolerando el pecho.',
        question: '¿Cuál es el tratamiento de primera línea más adecuado?',
        options: 'La opción A propone azitromicina oral por tres días. La B amoxicilina oral a ochenta a noventa miligramos por kilo al día por siete días. La C ceftriaxona intramuscular. La D salbutamol exclusivo. La E amoxicilina clavulánico a dosis bajas. Selecciona la pauta ministerial.',
        answer: 'La respuesta correcta es la B. La amoxicilina a dosis plenas de ochenta a noventa miligramos por kilo al día es el estándar indiscutido contra el neumococo en el lactante.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Criterio Absoluto de Hospitalización en Neumonía',
      stem: '¿Cuál de los siguientes pacientes con neumonía adquirida en la comunidad presenta un CRITERIO ABSOLUTO DE HOSPITALIZACIÓN?',
      options: [
        { letter: 'A', text: 'Lactante de 14 meses con fiebre de 38.5°C y SatO2 de 96% que toma mamadera normalmente' },
        { letter: 'B', text: 'Lactante de 2 meses de vida con fiebre de 38.2°C y taquipnea de 64 rpm' },
        { letter: 'C', text: 'Niño de 4 años con tos y crépitos basales derechos con SatO2 de 95%' },
        { letter: 'D', text: 'Niña de 6 años con infiltrado intersticial bilateral que tolera azitromicina oral' },
        { letter: 'E', text: 'Lactante de 9 meses con temperatura de 39°C que cede con paracetamol y tiene SatO2 de 97%' },
      ],
      correct: 'B',
      explanation: 'La edad menor de 3 meses cumplidos (< 90 días de vida) constituye por sí misma un criterio absoluto e imperativo de hospitalización en cualquier paciente con neumonía clínica, independientemente de que mantenga una saturación arterial aceptable o aparente estabilidad. En este grupo etario el riesgo de deterioro súbito por apnea, bacteriemia oculta, choque séptico o infección por microorganismos perinatales invasivos es sumamente elevado, requiriendo monitorización continua y antibioterapia endovenosa combinada.',
      say: {
        stem: 'Pregunta sobre la identificación del criterio absoluto e imperativo de hospitalización en un niño con neumonía adquirida en la comunidad.',
        question: '¿Cuál de los siguientes pacientes presenta indicación estricta de ingreso hospitalario inmediato?',
        options: 'La opción A lactante de catorce meses con saturación normal que come bien. La B lactante de dos meses de vida con fiebre y taquipnea. La C niño de cuatro años que satura noventa y cinco por ciento. La D escolar con neumonía atípica. La E lactante de nueve meses afebril con paracetamol. Identifica la edad crítica.',
        answer: 'La respuesta correcta es la B. Todo lactante menor de tres meses con neumonía tiene indicación obligatoria de hospitalización por riesgo de bacteriemia y colapso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Neumonía Atípica en Escolar y Terapia con Macrólidos',
      stem: 'Un niño de 7 años consulta por tos seca persistente de 10 días de evolución, febrícula intermitente (37.8°C), cefalea y mialgias difusas. Al examen: buen estado general, escasos crépitos y sibilancias bilaterales difusas. La radiografía de tórax evidencia un patrón intersticial reticulonodular bilateral perihiliar disociado de su buen estado clínico general.',
      question: '¿Cuál es el tratamiento antibiótico empírico de elección?',
      options: [
        { letter: 'A', text: 'Amoxicilina oral a 80 mg/kg/día' },
        { letter: 'B', text: 'Azitromicina oral a 10 mg/kg el día 1, luego 5 mg/kg/día los días 2 a 5' },
        { letter: 'C', text: 'Ampicilina endovenosa a 150 mg/kg/día' },
        { letter: 'D', text: 'Cloxacilina oral a 100 mg/kg/día' },
        { letter: 'E', text: 'Gentamicina intramuscular en dosis diaria' },
      ],
      correct: 'B',
      explanation: 'En niños mayores de 5 años (escolares y adolescentes), la presentación clínica con tos seca insidiosa prolongada, síntomas constitucionales como cefalea y mialgias, examen físico con auscultación poco llamativa e imágenes con infiltrado intersticial bilateral difuso define una Neumonía Atípica por Mycoplasma pneumoniae (o Chlamydophila pneumoniae). Debido a que Mycoplasma carece de pared celular de peptidoglicano, los betalactámicos (amoxicilina, ampicilina, cefalosporinas) son intrínsecamente ineficaces. El tratamiento de elección son los macrólidos orales (Azitromicina o Claritromicina).',
      say: {
        stem: 'Niño de siete años con tos seca de diez días cefalea mialgias buen estado general y radiografía con infiltrado intersticial bilateral disociado.',
        question: '¿Cuál es el tratamiento antibiótico empírico de elección?',
        options: 'La opción A propone amoxicilina oral a dosis altas. La B azitromicina oral a diez miligramos por kilo el primer día y cinco miligramos los días dos a cinco. La C ampicilina endovenosa. La D cloxacilina. La E gentamicina. Recuerda la estructura celular de Mycoplasma.',
        answer: 'La respuesta correcta es la B. Mycoplasma carece de pared celular siendo inmune a penicilinas y respondiendo de forma electiva a los macrólidos orales.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco EUNACOM · Caso representativo',
      title: 'Complicación con Derrame Paraneumónico a las 48 Horas',
      stem: 'Un lactante de 11 meses con diagnóstico de neumonía en tratamiento con amoxicilina oral a dosis plenas desde hace 48 horas persiste con fiebre de 39°C y aumento del trabajo respiratorio. En la reevaluación se constata matidez y abolición del murmullo pulmonar en la base derecha. La radiografía de tórax confirma un derrame pleural paraneumónico moderado derecho.',
      question: '¿Cuál es la conducta inmediata correcta?',
      options: [
        { letter: 'A', text: 'Mantener amoxicilina oral por 48 horas más y dar el alta a domicilio' },
        { letter: 'B', text: 'Hospitalizar de inmediato, indicar ecografía pleural con toracocentesis diagnóstica y cambiar antibiótico a vía endovenosa' },
        { letter: 'C', text: 'Indicar kinesioterapia respiratoria vigorosa y antipiréticos ambulatorios' },
        { letter: 'D', text: 'Nebulizar con salbutamol cada 4 horas y enviar a control en 7 días' },
        { letter: 'E', text: 'Solicitar hemograma y diferir la hospitalización si los leucocitos son normales' },
      ],
      correct: 'B',
      explanation: 'La persistencia de fiebre alta a las 48 horas de antibioticoterapia oral adecuada asociada a signos de ocupación pleural (matidez y disminución del murmullo) traduce un fracaso terapéutico ambulatorio y el desarrollo de un derrame pleural paraneumónico. Esta complicación mayor exige hospitalización inmediata, realización de ecografía pleural para estratificar la presencia de tabiques o fibrina, toracocentesis diagnóstica (con análisis citoquímico, Gram y cultivo de líquido pleural para descartar empiema) y cambio urgente a antibióticos parenterales como Cefotaxima EV.',
      say: {
        stem: 'Lactante de once meses en tratamiento con amoxicilina que persiste con fiebre a las cuarenta y ocho horas constatándose matidez basal y derrame pleural derecho en la placa.',
        question: '¿Cuál es la conducta inmediata correcta?',
        options: 'La opción A mantener amoxicilina oral por dos días más. La B hospitalizar de inmediato con ecografía pleural punción diagnóstica y antibióticos endovenosos. La C kinesioterapia respiratoria. La D salbutamol nebulizado. La E diferir hospitalización. Aplica el protocolo de falla.',
        answer: 'La respuesta correcta es la B. El derrame paraneumónico con fiebre persistente es un fracaso de tratamiento que exige hospitalización urgente y punción diagnóstica.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Neumonía Adquirida en la Comunidad Pediátrica',
      cards: [
        {
          title: 'Dosificación y Selección Antimicrobiana',
          tag: 'Amoxicilina plenas dosis y macrólidos según edad',
          kind: 'pharma',
          items: [
            {
              t: 'Amoxicilina a 80 a 90 mg/kg/día por 7 días en el lactante',
              d: 'Dosis mandatoria para vencer resistencia intermedia de neumococo; nunca indicar ácido clavulánico de rutina',
              say: 'Graben la dosis exacta de amoxicilina: ochenta a noventa miligramos por kilo al día por siete días en el lactante ambulatorio. No asocien clavulánico de entrada porque no aporta sobre el neumococo.',
            },
            {
              t: 'Macrólidos en escolares mayores de cinco años',
              d: 'Mycoplasma y Chlamydia exigen azitromicina o claritromicina por carecer de pared de peptidoglicano',
              say: 'En escolares mayores de cinco años con cuadro atípico y disociación radiológica el fármaco de elección es la azitromicina oral, ya que los betalactámicos son completamente inactivos.',
            },
          ],
        },
        {
          title: 'Criterios de Seguridad y Complicaciones',
          tag: 'Menor de tres meses y sospecha de derrame',
          kind: 'alert',
          items: [
            {
              t: 'Menor de tres meses se hospitaliza siempre',
              d: 'Criterio absoluto de internación independientemente del estado clínico aparente del lactante',
              say: 'Todo menor de tres meses con sospecha de neumonía se hospitaliza de forma mandataria sin excepción por el altísimo riesgo de bacteriemia oculta.',
            },
            {
              t: 'Fiebre a las 48 horas obliga a buscar derrame pleural',
              d: 'Solicitar radiografía y ecografía pleural; toracocentesis si hay líquido significativo para descartar empiema',
              say: 'Si la fiebre persiste tras cuarenta y ocho horas de antibióticos sospechen derrame paraneumónico y soliciten ecografía pleural. Nos vemos en la próxima clase para revisar cuerpo extraño en la vía aérea.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Manejo de la Neumonía Adquirida en la Comunidad en Pediatría',
    root: N(
      'start',
      'Paciente Pediátrico con Tos, Fiebre, Taquipnea y Sospecha Clínica de NAC',
      'Evaluación de frecuencia respiratoria según umbral OMS, saturación de oxígeno, tolerancia oral y edad cronológica',
      'Iniciamos la evaluación estratificando los factores de riesgo de hospitalización inmediata y la presencia de dificultad respiratoria.',
      [
        'Presencia de criterios de hospitalización (menor de 3 meses, SatO2 < 93%, quejido o intolerancia oral)',
        N(
          'refer',
          'Hospitalización Inmediata en Sala Pediátrica',
          'Oxígeno humidificado para meta > 93% · Régimen cero o sonda si polipnea > 60 rpm · Radiografía de tórax frontal y lateral',
          'Ante cualquiera de estos criterios se hospitaliza de inmediato indicando oxígeno humidificado y radiografía de tórax.',
          [
            'Lactante mayor de 3 meses en condiciones no críticas con neumonía típica',
            N(
              'do',
              'Antibioticoterapia Endovenosa con Ampicilina',
              'Ampicilina EV 150 a 200 mg/kg/día cada 6 horas · Reevaluar a las 24 a 48 horas para traspaso a amoxicilina oral',
              'En el paciente hospitalizado no crítico se inicia ampicilina endovenosa pasando a vía oral tras la defervescencia térmica.',
            ),
          ],
          [
            'Neonato menor de 1 mes o cuadro séptico severo hemodinámicamente inestable',
            N(
              'alert',
              'Antibioticoterapia de Amplio Espectro Parenteral',
              'Ampicilina más Cefotaxima EV en neonatos · Cefotaxima o Ceftriaxona más Cloxacilina en sepsis severa infantil',
              'En neonatos o cuadros sépticos graves se emplean cefalosporinas de tercera generación asociadas según la sospecha microbiológica.',
            ),
          ],
        ),
      ],
      [
        'Sin criterios de hospitalización (mayor de 3 meses, SatO2 >= 93%, tolera vía oral y buen soporte familiar)',
        N(
          'q',
          '¿Cuál es el grupo etario y el patrón clínico predominante?',
          'Diferenciación entre sospecha de neumococo típico versus neumonía atípica en escolares',
          'En el paciente ambulatorio estable evaluamos la edad y el cuadro clínico para elegir el antibiótico correcto.',
          [
            'Lactante o preescolar de 3 meses a 5 años (Cuadro típico febril y crépitos focales)',
            N(
              'ok',
              'Tratamiento Ambulatorio con Amoxicilina a Dosis Plenas',
              'Amoxicilina oral 80 a 90 mg/kg/día cada 8 a 12 horas por 7 días · Control médico obligatorio a las 48 horas en CESFAM',
              'Se prescribe amoxicilina a dosis plenas de ochenta a noventa miligramos por kilo citando a control médico en dos días.',
            ),
          ],
          [
            'Escolar mayor de 5 años con tos seca insidiosa, síntomas extrapulmonares e infiltrado intersticial',
            N(
              'ok',
              'Tratamiento Ambulatorio de Neumonía Atípica con Macrólidos',
              'Azitromicina oral 10 mg/kg día 1, luego 5 mg/kg días 2 a 5 (o Claritromicina 15 mg/kg/día cada 12h por 10 días)',
              'En sospecha de patógenos atípicos se indica azitromicina oral en pauta de cinco días con excelente respuesta clínica.',
            ),
          ],
        ),
      ],
    ),
  },
};
