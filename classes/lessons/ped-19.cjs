// Clase 18.19 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-19).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-19',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Sepsis neonatal, clasificación precoz versus tardía, factores de riesgo perinatales, resistencia intrínseca de Listeria a cefalosporinas y esquemas antibióticos empíricos',
      say: 'Bienvenidos a la clase sobre sepsis neonatal, una de las principales causas de morbimortalidad en el período perinatal y una materia evaluada constantemente en el examen EUNACOM. En esta sesión aprenderemos a diferenciar con exactitud la sepsis precoz de transmisión vertical de la sepsis tardía nosocomial, dominaremos el estudio séptico riguroso, comprenderemos por qué la ampicilina es insustituible por la resistencia natural de Listeria monocytogenes y fijaremos las conductas antimicrobianas de rescate. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Invasión y respuesta sistémica',
      title: 'Transmisión Vertical, Bacteriemia Sistémica y Choque Séptico Neonatal',
      nodes: [
        { id: 'col', col: 0, row: 1, k: 'start', t: 'Colonización materna genital', s: 'Infección intraamniótica ascendente o paso por canal de parto colonizado' },
        { id: 'bac', col: 1, row: 1, k: 'mech', t: 'Aspiración e invasión vascular', s: 'Aspiración de líquido amniótico infectado y translocación bacteriana a la sangre' },
        { id: 'cit', col: 2, row: 1, k: 'alert', t: 'Cascada inflamatoria y endotelio', s: 'Liberación descontrolada de citoquinas con permeabilidad capilar y colapso' },
        { id: 'cho', col: 3, row: 1, k: 'risk', t: 'Choque séptico y falla multiorgánica', s: 'Hipotensión refractaria, coagulación intravascular diseminada y muerte' },
      ],
      edges: [
        { from: 'col', to: 'bac', label: 'rotura de membranas' },
        { from: 'bac', to: 'cit', label: 'endotoxinas bacterianas' },
        { from: 'cit', to: 'cho', label: 'falla microvascular' },
      ],
      steps: [
        {
          show: ['col', 'bac'],
          note: 'Colonización materna y aspiración fetal de microorganismos',
          say: 'La sepsis precoz se inicia habitualmente por vía ascendente desde el tracto genital materno colonizado hacia la cavidad amniótica, donde el feto aspira o deglute líquido infectado, permitiendo que las bacterias penetren el epitelio alveolar y pasen directamente a la circulación sanguínea.',
        },
        {
          show: ['cit', 'cho'],
          note: 'Respuesta inflamatoria sistémica y colapso hemodinámico',
          say: 'La presencia de bacterias y endotoxinas en el torrente sanguíneo desata una respuesta inflamatoria desregulada con liberación masiva de interleuquinas y factor de necrosis tumoral, provocando fuga capilar, depresión miocárdica, choque séptico distributivo y acidosis metabólica refractaria con coagulación intravascular.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación temporal estricta',
      title: 'Sepsis Precoz versus Sepsis Tardía: El Límite de las Setenta y Dos Horas',
      cards: [
        {
          title: 'Sepsis Neonatal Precoz: Menor a 72 Horas de Vida',
          tag: 'Transmisión vertical originada en el período periparto',
          kind: 'alert',
          items: [
            {
              t: 'Mecanismo de contagio: Infección perinatal materna',
              d: 'Adquisición intrauterina por vía hematógena transplacentaria o más frecuentemente ascendente durante el trabajo de parto',
              say: 'La sepsis precoz debuta en las primeras setenta y dos horas de vida y es el resultado directo de la transmisión vertical de microorganismos provenientes del canal del parto o de la cavidad amniótica materna.',
            },
            {
              t: 'Presentación clínica fulminante multisistémica',
              d: 'Suele manifestarse como dificultad respiratoria grave precoz asociada a choque séptico y bacteriemia rápidamente progresiva',
              say: 'Tiene una presentación aguda y fulminante que remeda el distrés respiratorio, progresando rápidamente hacia la inestabilidad hemodinámica y la falla multiorgánica con elevada letalidad.',
            },
          ],
        },
        {
          title: 'Sepsis Neonatal Tardía: Mayor a 72 Horas de Vida',
          tag: 'Transmisión horizontal intrahospitalaria o comunitaria',
          kind: 'key',
          items: [
            {
              t: 'Mecanismo de contagio: Flora nosocomial o del entorno',
              d: 'Microorganismos adquiridos en la unidad de neonatología a través de catéteres vasculares, ventilación mecánica o cuidadores',
              say: 'La sepsis tardía se manifiesta después del tercer día de vida y hasta el mes, originándose por la transmisión horizontal de patógenos del ambiente hospitalario, dispositivos invasivos o la comunidad.',
            },
            {
              t: 'Alta frecuencia de siembras focales y meningitis',
              d: 'Compromiso meníngeo en más de un tercio de los casos, artritis séptica, osteomielitis o infección urinaria recurrente',
              say: 'Su inicio es más insidioso pero se asocia a una frecuencia muy elevada de meningitis bacteriana, artritis séptica o focos infecciosos profundos que exigen búsqueda activa.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Microbiología vertical',
      title: 'Etiología de la Sepsis Neonatal Precoz: Los Tres Grandes Patógenos',
      cards: [
        {
          title: 'Streptococcus agalactiae (Estreptococo Grupo B)',
          tag: 'El patógeno clásico de transmisión vertical perinatal',
          kind: 'key',
          items: [
            {
              t: 'Colonizador habitual del tracto genital y anorrectal materno',
              d: 'Coco grampositivo diplococo encapsulado; causa bacteriemia, neumonía neonatal precoz y shock séptico fulminante',
              say: 'El estreptococo del grupo B es un coco grampositivo que coloniza la vagina y el recto materno, siendo el principal agente etiológico bacteriano de sepsis precoz en países con tamizaje incompleto.',
            },
            {
              t: 'Sensibilidad universal y profilaxis antibiótica intraparto',
              d: 'Altamente sensible a penicilina y ampicilina; la profilaxis con penicilina intraparto previene la transmisión vertical',
              say: 'Conserva una sensibilidad excelente a la penicilina y ampicilina, razón por la cual la profilaxis antibiótica intraparto con ampicilina o penicilina previene eficazmente la infección neonatal.',
            },
          ],
        },
        {
          title: 'Escherichia coli y Listeria monocytogenes',
          tag: 'Bacilos entéricos y bacteriemia materna transplacentaria',
          kind: 'alert',
          items: [
            {
              t: 'Escherichia coli: Predominio marcado en recién nacidos prematuros',
              d: 'Bacilo gramnegativo entérico capsular (antígeno K1) asociado a meningitis precoz y alta resistencia a ampicilina',
              say: 'Escherichia coli es el patógeno predominante en recién nacidos prematuros, destacando cepas con cápsula ca uno que presentan gran tropismo por las meninges causando bacteriemia y meningitis neonatal invasiva gran tropismo por las meninges y resistencia a aminopenicilinas.',
            },
            {
              t: 'Listeria monocytogenes: Bacilo grampositivo intracelular',
              d: 'Transmisión transplacentaria por consumo materno de lácteos no pasteurizados; causa granulomatosis infantiséptica y meningitis',
              say: 'Listeria monocytogenes se adquiere por vía digestiva materna consumiendo quesos no pasteurizados, cruza la placenta y produce microabscesos diseminados conocidos como granulomatosis infantiséptica.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Microbiología nosocomial',
      title: 'Etiología de la Sepsis Neonatal Tardía: Patógenos Asociados a Cuidados',
      cards: [
        {
          title: 'Staphylococcus Coagulasa Negativo: El Patógeno Dominante',
          tag: 'Responsable de más de la mitad de las sepsis tardías en prematuros',
          kind: 'alert',
          items: [
            {
              t: 'Staphylococcus epidermidis y formación de biopelículas',
              d: 'Coloniza catéteres venosos centrales y líneas arteriales; sintetiza una matriz de slime que lo protege de antibióticos',
              say: 'Staphylococcus epidermidis es el agente más habitual de sepsis nosocomial tardía en recién nacidos prematuros portadores de catéteres venosos centrales, gracias a su capacidad de formar biopelículas protectoras.',
            },
            {
              t: 'Resistencia masiva a meticilina y necesidad de vancomicina',
              d: 'Más del noventa por ciento de las cepas son resistentes a oxacilina requiriendo glucopéptidos parenterales',
              say: 'Debido a que casi todas las cepas hospitalarias portan genes de resistencia a meticilina, el tratamiento empírico de elección ante la sospecha de sepsis tardía exige el uso de vancomicina.',
            },
          ],
        },
        {
          title: 'Bacilos Gramnegativos y Hongos Oportunistas',
          tag: 'Flora hospitalaria resistente y micosis sistémicas',
          kind: 'key',
          items: [
            {
              t: 'Klebsiella, Pseudomonas y Enterobacter nosocomiales',
              d: 'Bacilos gramnegativos multirresistentes productores de betalactamasas de espectro extendido (BLEE)',
              say: 'Los bacilos gramnegativos hospitalarios como Klebsiella o Pseudomonas colonizan la vía aérea y el intestino, generando bacteriemias graves con resistencia a múltiples familias de antibióticos.',
            },
            {
              t: 'Candida albicans y Candida parapsilosis en nutrición parenteral',
              d: 'Riesgo crítico en prematuros menores de mil gramos con uso prolongado de antibióticos de amplio espectro y lípidos EV',
              say: 'La infección por Candida debe sospecharse en prematuros extremos con deterioro clínico refractario a antibacterianos que reciben nutrición parenteral prolongada a través de catéteres vasculares.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Comparación clínica maestro',
      title: 'Diferencias Cardinales entre Sepsis Neonatal Precoz y Tardía',
      head: ['Parámetro Clínico', 'Sepsis Precoz (< 72 horas)', 'Sepsis Tardía (> 72 horas)', 'Implicancia Terapéutica'],
      rows: [
        {
          cells: ['Vía de transmisión', 'Vertical materna perinatal', 'Horizontal intrahospitalaria', 'La precoz refleja factores obstétricos'],
          say: 'La sepsis precoz refleja factores de riesgo obstétricos maternos, mientras que la tardía se relaciona con procedimientos invasivos y hospitalización.',
        },
        {
          cells: ['Microorganismos', 'S. agalactiae, E. coli, Listeria', 'S. epidermidis, BGN, Candida', 'La precoz exige ampicilina obligatoria'],
          say: 'La etiología precoz está dominada por estreptococo del grupo B y Listeria, a diferencia de la tardía dominada por estafilococo coagulasa negativo.',
        },
        {
          cells: ['Clínica predominante', 'Distrés respiratorio precoz', 'Compromiso meníngeo y focal', 'La tardía exige descartar meningitis con PL'],
          say: 'La sepsis precoz debuta con dificultad respiratoria y choque, mientras que la sepsis tardía presenta una tasa muy alta de compromiso meníngeo.',
        },
        {
          cells: ['Esquema inicial', 'Ampicilina más Cefotaxima o Genta', 'Vancomicina más Cefalosporina o Amika', 'Cobertura ajustada al origen infeccioso'],
          say: 'El esquema empírico inicial combina ampicilina en la precoz para cubrir Listeria, mientras que en la tardía se inicia vancomicina de entrada.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Factores de riesgo obstétricos',
      title: 'Factores de Riesgo Mayores para Sepsis Neonatal Precoz',
      cards: [
        {
          title: 'Criterios Maternos de Alto Riesgo Perinatal',
          tag: 'Banderas rojas que obligan a evaluar al recién nacido',
          kind: 'alert',
          items: [
            {
              t: 'Fiebre materna intraparto igual o mayor a 38.0 grados',
              d: 'Signo cardinal de sospecha de corioamnionitis materna asociado a taquicardia fetal o leucocitosis materna',
              say: 'La presencia de fiebre materna durante el trabajo de parto es el factor clínico de mayor peso para sospechar corioamnionitis e infección bacteriana intrauterina.',
            },
            {
              t: 'Rotura prematura de membranas mayor a 18 horas',
              d: 'A mayor tiempo de bolsa rota se incrementa exponencialmente la ascensión bacteriana hacia la cavidad amniótica',
              say: 'Una rotura prematura de membranas ovulares que sobrepasa las dieciocho horas de evolución multiplica exponencialmente el riesgo de invasión microbiana ascendente hacia la cavidad amniótica y el feto.',
            },
          ],
        },
        {
          title: 'Colonización por Estreptococo y Prematurez',
          tag: 'Criterios microbiológicos y madurativos fetales',
          kind: 'criteria',
          items: [
            {
              t: 'Cultivo vagino-rectal positivo para Estreptococo Grupo B',
              d: 'O antecedente de hijo previo con sepsis por SGB o bacteriuria por SGB durante el embarazo actual sin profilaxis',
              say: 'El tamizaje vagino-rectal positivo para estreptococo del grupo B sin profilaxis antibiótica intraparto completa exige vigilar estrechamente al recién nacido.',
            },
            {
              t: 'Parto prematuro espontáneo menor a 37 semanas',
              d: 'El feto prematuro tiene niveles mínimos de anticuerpos IgG transplacentarios y mayor vulnerabilidad invasiva',
              say: 'El nacimiento prematuro espontáneo antes de las treinta y siete semanas incrementa notablemente la vulnerabilidad inmunológica ante cualquier germen del canal.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología clínica sutil',
      title: 'Manifestaciones Clínicas de Sepsis Neonatal: El Neonato que "No Luce Bien"',
      cards: [
        {
          title: 'Termorregulación y Conducta: Los Primeros Signos',
          tag: 'La hipotermia es más frecuente que la fiebre en el neonato',
          kind: 'alert',
          items: [
            {
              t: 'Hipotermia persistente menor a 36.0 grados Celsius',
              d: 'Incapacidad de regular la temperatura corporal debido a disfunción del centro termorregulador por endotoxinas',
              say: 'A diferencia de los niños mayores, el recién nacido séptico debuta típicamente con hipotermia y no con fiebre, mostrando gran dificultad para mantener su temperatura.',
            },
            {
              t: 'Letargia, hipotonía y rechazo de la alimentación',
              d: 'Dificultad para despertar, succión débil o ineficaz, irritabilidad al estímulo y llanto quejumbroso apagado',
              say: 'Los padres o el equipo de enfermería notan que el niño no luce bien: se torna somnoliento, rechaza el pecho, pierde el tono muscular y emite un llanto débil.',
            },
          ],
        },
        {
          title: 'Manifestaciones Cardiorrespiratorias y Cutáneas',
          tag: 'Signos de choque distributivo y mala perfusión tisular',
          kind: 'criteria',
          items: [
            {
              t: 'Quejido espiratorio, polipnea y apneas inexplicadas',
              d: 'El compromiso respiratorio es el signo más común de sepsis precoz, simulando una membrana hialina o neumonía',
              say: 'El compromiso respiratorio manifestado por taquipnea superficial, quejido espiratorio audible, aleteo nasal o pausas de apnea inexplicadas representa la forma de debut clínico más habitual en la sepsis precoz.',
            },
            {
              t: 'Llenado capilar enlentecido mayor a tres segundos y piel moteada',
              d: 'Palidez terrosa, livedo reticularis, taquicardia o bradicardia paradójica y pulsos periféricos débiles',
              say: 'La piel marmórea con llenado capilar prolongado por sobre tres segundos y la palidez terrosa advierten hipoperfusión tisular y choque séptico inminente.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio de laboratorio sistemático',
      title: 'Estudio Séptico Completo: Biomarcadores y Cultivos Fidedignos',
      cards: [
        {
          title: 'Hemograma y Reactantes de Fase Aguda',
          tag: 'Índice de inmaduros sobre totales y proteína C reactiva',
          kind: 'key',
          items: [
            {
              t: 'Leucopenia menor a 5.000 o leucocitosis mayor a 25.000',
              d: 'La leucopenia extrema tiene un valor predictivo positivo mucho mayor para sepsis grave que la leucocitosis aislada',
              say: 'En el hemograma completo la leucopenia marcada menor a cinco mil leucocitos constituye un signo cardinal de alarma biológica que refleja agotamiento medular ante una bacteriemia invasiva fulminante.',
            },
            {
              t: 'Índice de baciliformes sobre neutrófilos totales (I/T) mayor a 0.2',
              d: 'Desviación a la izquierda patológica que demuestra la salida masiva de formas jóvenes inmaduras desde la médula ósea',
              say: 'El índice entre neutrófilos inmaduros y totales mayor a cero punto dos refleja una desviación a la izquierda que apoya fuertemente el diagnóstico de sepsis.',
            },
          ],
        },
        {
          title: 'Cultivos Obligatorios y Punción Lumbar',
          tag: 'Aislamiento microbiológico antes del inicio antibiótico',
          kind: 'criteria',
          items: [
            {
              t: 'Hemocultivos periféricos por duplicado',
              d: 'Toma de al menos un mililitro de sangre estéril por punción periférica limpia antes de iniciar los antibióticos',
              say: 'Es mandatario extraer hemocultivos con técnica rigurosamente estéril antes de administrar la primera dosis de antibiótico parenteral.',
            },
            {
              t: 'Punción lumbar para estudio de líquido cefalorraquídeo',
              d: 'Estudio citoquímico, Gram y cultivo de LCR indispensable para confirmar o descartar meningitis bacteriana neonatal',
              say: 'La punción lumbar forma parte esencial e insustituible del estudio séptico completo para evaluar celularidad, proteínas, glucosa y tinción de Gram en el líquido cefalorraquídeo descartando meningitis.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Algoritmo de emergencia asistencial',
      title: 'Secuencia de Manejo Inicial ante Sospecha de Sepsis Precoz',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Sospecha clínica de sepsis', s: 'Neonato con letargia, hipotermia, quejido o factores maternos de riesgo' },
        { id: 'est', col: 1, row: 1, k: 'mech', t: 'Estabilización hemodinámica', s: 'Aporte de calor radiante, oxígeno y accesos vasculares permeables' },
        { id: 'cul', col: 2, row: 1, k: 'good', t: 'Estudio séptico completo', s: 'Hemocultivos, punción lumbar, hemograma y reactantes de fase aguda' },
        { id: 'ant', col: 3, row: 1, k: 'alert', t: 'Inicio antibiótico en primera hora', s: 'Administración inmediata de Ampicilina más Cefotaxima o Gentamicina' },
      ],
      edges: [
        { from: 'sos', to: 'est', label: 'reconocimiento' },
        { from: 'est', to: 'cul', label: 'muestras biológicas' },
        { from: 'cul', to: 'ant', label: 'sin demora' },
      ],
      steps: [
        {
          show: ['sos', 'est'],
          note: 'Reconocimiento precoz y medidas de soporte vital inmediato',
          say: 'Ante un recién nacido con hipotermia, quejido o mala perfusión, la prioridad es estabilizar la temperatura bajo cuna radiante, asegurar una adecuada oxigenación y canalizar accesos vasculares.',
        },
        {
          show: ['cul', 'ant'],
          note: 'Toma expedita de cultivos e inicio antibiótico en la primera hora',
          say: 'Se realiza rápidamente el estudio séptico completo que incluye hemocultivos y punción lumbar, iniciando la antibioticoterapia empírica parenteral dentro de la primera hora de atención sin demoras.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapéutica empírica estándar',
      title: 'Esquema Antibiótico de Primera Línea en Sepsis Neonatal Precoz',
      cards: [
        {
          title: 'Combinación Sinérgica de Elección',
          tag: 'Ampicilina asociada a Gentamicina o Cefotaxima',
          kind: 'pharma',
          items: [
            {
              t: 'Ampicilina: Cien a doscientos miligramos por kilo día',
              d: 'Dosis dividida cada doce horas en la primera semana de vida por vía endovenosa en infusión lenta',
              say: 'La ampicilina endovenosa se prescribe a dosis de cien a doscientos miligramos por kilo día, administrada cada doce horas durante la primera semana de vida para garantizar niveles bactericidas sostenidos en sangre y tejidos.',
            },
            {
              t: 'Gentamicina: Cuatro a cinco miligramos por kilo día',
              d: 'Administración en dosis única diaria endovenosa; excelente potencia bactericida contra bacilos gramnegativos entéricos',
              say: 'Se asocia habitualmente a gentamicina en dosis única diaria de cuatro a cinco miligramos por kilo día para una potente sinergia bactericida contra enterobacterias.',
            },
          ],
        },
        {
          title: 'Alternativa en Sospecha de Meningitis: Cefotaxima',
          tag: 'Excelente difusión a través de la barrera hematoencefálica',
          kind: 'pharma',
          items: [
            {
              t: 'Cefotaxima: Cien a ciento cincuenta miligramos por kilo día',
              d: 'Cefalosporina de tercera generación de elección ante sospecha clínica o confirmación de meningitis bacteriana',
              say: 'Si se sospecha meningitis neonatal o hay compromiso neurológico, se prefiere asociar ampicilina con cefotaxima endovenosa por su óptima penetración en el líquido cefalorraquídeo.',
            },
            {
              t: 'Monitoreo de función renal y ajuste de dosis',
              d: 'En pacientes tratados con aminoglucósidos se debe vigilar la creatinina plasmática y los niveles séricos para prevenir ototoxicidad',
              say: 'Cuando se utilizan aminoglucósidos es fundamental controlar la diuresis y la función renal para evitar toxicidad coclear y tubular en el neonato.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Perla microbiológica indispensable',
      title: '¿Por qué la Ampicilina es Obligatoria?: La Regla de Listeria',
      cards: [
        {
          title: 'Resistencia Intrínseca de Listeria a Cefalosporinas',
          tag: 'Pregunta clásica de ciencias básicas y clínica en EUNACOM',
          kind: 'alert',
          items: [
            {
              t: 'Carencia de proteínas ligadoras de penicilina afines',
              d: 'Listeria monocytogenes no posee receptores PBP que fijen cefalosporinas; es naturalmente resistente a todas las generaciones',
              say: 'Listeria monocytogenes presenta una resistencia intrínseca natural absoluta a todas las cefalosporinas existentes, debido a que carece de proteínas ligadoras de penicilina que reconozcan a estos fármacos.',
            },
            {
              t: 'El error fatal de usar Cefotaxima en monoterapia',
              d: 'Tratar una sepsis neonatal precoz solo con cefotaxima deja a Listeria sin ninguna cobertura, causando muerte por meningitis',
              say: 'Utilizar una cefalosporina como monoterapia en el período neonatal constituye una negligencia grave, pues dejaría a Listeria sin cobertura terapéutica con desenlace mortal.',
            },
          ],
        },
        {
          title: 'Sensibilidad Excelente de Listeria a Ampicilina',
          tag: 'La aminopenicilina es el tratamiento de elección absoluto',
          kind: 'pharma',
          items: [
            {
              t: 'Unión bactericida de alta afinidad a PBP-3',
              d: 'La ampicilina penetra la pared bacteriana de Listeria logrando lisis bactericida rápida potenciada por gentamicina',
              say: 'La ampicilina se une con altísima afinidad a la pared celular de Listeria, ejerciendo una acción bactericida potente que se potencia de forma sinérgica con aminoglucósidos.',
            },
            {
              t: 'Doble cobertura: Estreptococo Grupo B y Enterococo',
              d: 'Además de Listeria, la ampicilina garantiza la erradicación óptima de Streptococcus agalactiae y Enterococcus faecalis',
              say: 'Además de cubrir a Listeria, la ampicilina asegura una cobertura perfecta contra el estreptococo del grupo B y los enterococos entéricos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Farmacovigilancia y toxicidad',
      title: 'Contraindicación Formal de Ceftriaxona en el Período Neonatal',
      cards: [
        {
          title: 'Desplazamiento de la Bilirrubina y Riesgo de Kernicterus',
          tag: 'Competencia farmacocinética por la albúmina sérica',
          kind: 'alert',
          items: [
            {
              t: 'Alta afinidad de la ceftriaxona por la albúmina plasmática',
              d: 'Desplaza competitivamente a la bilirrubina no conjugada de sus sitios de unión en la albúmina, elevando la fracción libre',
              say: 'La ceftriaxona presenta una altísima afinidad de unión por la albúmina plasmática, desplazando competitivamente a la bilirrubina no conjugada e incrementando bruscamente la fracción libre neurotóxica capaz de atravesar la barrera hematoencefálica inmadura.',
            },
            {
              t: 'Precipitación de encefalopatía bilirrubínica aguda',
              d: 'Facilita el depósito de bilirrubina en los ganglios basales incluso con cifras séricas moderadas de bilirrubinemia',
              say: 'Este desplazamiento competitivo puede precipitar un kernicterus grave en un recién nacido ictérico, razón por la cual está formalmente contraindicada.',
            },
          ],
        },
        {
          title: 'Precipitación de Sales de Calcio en Pulmón y Riñón',
          tag: 'Formación de cristales insolubles letales con gluconato de calcio',
          kind: 'alert',
          items: [
            {
              t: 'Complejos insolubles de ceftriaxona cálcica',
              d: 'La administración concomitante con soluciones que contienen calcio causa precipitados intravasculares en microcirculación',
              say: 'La administración concomitante de ceftriaxona con soluciones intravenosas que contienen sales de calcio como el gluconato de calcio genera precipitados cristalinos insolubles de ceftriaxona cálcica que provocan embolias microvasculares pulmonares y daño renal agudo irreversible.',
            },
            {
              t: 'Cefotaxima: La cefalosporina segura en neonatos',
              d: 'No compite significativamente con la bilirrubina ni precipita con sales de calcio; es la alternativa de elección',
              say: 'La cefotaxima no compite con la albúmina ni precipita con calcio, siendo la única cefalosporina de tercera generación autorizada con seguridad en neonatología.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapéutica nosocomial',
      title: 'Esquema Antibiótico Empírico en Sepsis Neonatal Tardía',
      cards: [
        {
          title: 'Cobertura Dirigida a Flora Hospitalaria Resistente',
          tag: 'Esquema de elección en unidades de cuidados intensivos',
          kind: 'pharma',
          items: [
            {
              t: 'Vancomicina endovenosa: Primera línea obligada',
              d: 'Diez a quince miligramos por kilo dosis cada ocho a doce horas; cubre Staphylococcus epidermidis y aureus meticilino resistente',
              say: 'En la sepsis tardía hospitalaria se inicia vancomicina endovenosa como terapia de primera línea para erradicar cepas de Staphylococcus epidermidis asociadas a biopelículas y Staphylococcus aureus meticilino resistente.',
            },
            {
              t: 'Asociación para Bacilos Gramnegativos Multirresistentes',
              d: 'Se asocia Cefotaxima, Cefepime o Amikacina según el mapa microbiológico de la unidad neonatal de procedencia',
              say: 'La vancomicina se asocia rigurosamente a un fármaco con amplio espectro contra bacilos gramnegativos hospitalarios como amikacina, cefepime o meropenem según el mapa microbiológico de la unidad neonatal.',
            },
          ],
        },
        {
          title: 'Manejo de Catéteres Vasculares y Sospecha Fúngica',
          tag: 'Retiro de dispositivos colonizados y anfotericina B',
          kind: 'criteria',
          items: [
            {
              t: 'Retiro del catéter venoso central ante bacteriemia persistente',
              d: 'Las biopelículas de estafilococo coagulasa negativo impiden la esterilización del catéter a pesar de antibióticos óptimos',
              say: 'Si los hemocultivos persisten positivos o hay deterioro hemodinámico, es mandatario retirar el catéter venoso central para erradicar la fuente bacteriana.',
            },
            {
              t: 'Sospecha de Candidiasis sistémica en prematuro extremo',
              d: 'Añadir Anfotericina B deoxicolato o liposomal ante shock refractario con trombocitopenia severa en nutrición parenteral',
              say: 'Ante un prematuro extremo con trombocitopenia inexplicable y mala respuesta a antibacterianos se debe añadir precozmente anfotericina B por sospecha de candidiasis.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Arsenal farmacológico neonatal',
      title: 'Antibióticos de Uso Frecuente en Sepsis Neonatal Precoz y Tardía',
      head: ['Fármaco', 'Vía y Espectro Clave', 'Indicación Clínica Precisa', 'Precaución o Toxicidad'],
      rows: [
        {
          cells: ['Ampicilina', 'Endovenosa (SGB y Listeria)', 'Sepsis precoz obligatoria', 'Ajustar intervalo según días de vida'],
          say: 'La ampicilina endovenosa es el componente insustituible del esquema precoz para garantizar la cobertura de Listeria y estreptococo del grupo B.',
        },
        {
          cells: ['Gentamicina', 'Endovenosa (E. coli y gramnegativos)', 'Sepsis precoz con ampicilina', 'Controlar diuresis y vigilar ototoxicidad'],
          say: 'La gentamicina aporta sinergia bactericida rápida contra bacilos gramnegativos, requiriendo monitorizar la función renal.',
        },
        {
          cells: ['Cefotaxima', 'Endovenosa (Gramnegativos y LCR)', 'Sospecha de meningitis neonatal', 'Excelente paso de barrera hematoencefálica'],
          say: 'La cefotaxima es la cefalosporina de elección cuando se sospecha infección meníngea por su óptima penetración en líquido cefalorraquídeo.',
        },
        {
          cells: ['Vancomicina', 'Endovenosa (Estafilococos meticilino R)', 'Sepsis tardía nosocomial', 'Monitorear niveles valle y función renal'],
          say: 'La vancomicina es la primera línea en sepsis tardía para erradicar estafilococos resistentes a meticilina asociados a catéteres.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de actuación clínica',
      title: 'Algoritmo de Diagnóstico, Estratificación y Tratamiento de la Sepsis Neonatal',
      say: 'Examinemos el algoritmo paso a paso para la toma de decisiones clínicas ante la sospecha de sepsis neonatal precoz y tardía, integrando cultivos y esquemas terapéuticos.',
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.120',
      title: 'Diagnóstico y Conducta en Neonato con Hipotermia y RPM',
      stem: 'Un recién nacido de 36 horas de vida presenta letargia, rechazo alimentario, quejido espiratorio e hipotermia de 35.6°C. Antecedente materno de rotura prematura de membranas de 24 horas y fiebre en el trabajo de parto.',
      question: '¿Cuál es la sospecha diagnóstica y el esquema antibiótico empírico de primera línea?',
      options: [
        { letter: 'A', text: 'Taquipnea transitoria; oxigenoterapia en halo sin antibióticos' },
        { letter: 'B', text: 'Sepsis neonatal precoz; Ampicilina más Cefotaxima (o Gentamicina) endovenosa' },
        { letter: 'C', text: 'Sepsis neonatal tardía; Vancomicina más Meropenem endovenoso' },
        { letter: 'D', text: 'Enfermedad de membrana hialina; Surfactante endotraqueal exclusivo' },
        { letter: 'E', text: 'Hipoglicemia transitoria; infusión de suero glucosado al 10% sin cultivos' },
      ],
      correct: 'B',
      explanation: 'El paciente es un recién nacido de 36 horas de vida (< 72 horas) con antecedentes obstétricos de alto riesgo mayor (rotura prematura de membranas > 18 horas y sospecha de corioamnionitis por fiebre materna) que debuta con la clínica cardinal de infección sistémica: hipotermia, decaimiento, rechazo alimentario y quejido. El diagnóstico indiscutible es Sepsis Neonatal Precoz. La conducta reglamentaria e inmediata es hospitalizar en neonatología, realizar estudio séptico completo que incluya hemocultivos y punción lumbar, e iniciar antibioticoterapia empírica parenteral con Ampicilina (para cubrir Streptococcus agalactiae y Listeria) más Cefotaxima o Gentamicina (para cubrir Escherichia coli).',
      say: {
        stem: 'Recién nacido de treinta y seis horas con letargia hipotermia de treinta y cinco coma seis y quejido con madre con rotura de membranas prolongada y fiebre.',
        question: '¿Cuál es la sospecha diagnóstica y el esquema antibiótico de primera línea?',
        options: 'La opción A taquipnea transitoria con halo. La B sepsis neonatal precoz con ampicilina más cefotaxima o gentamicina endovenosa. La C sepsis tardía con vancomicina y meropenem. La D membrana hialina. La E hipoglicemia transitoria. Evalúa las horas de vida y los antecedentes. Piénsalo.',
        answer: 'La respuesta correcta es la B. Por debutar antes de setenta y dos horas con antecedentes maternos es una sepsis precoz que requiere ampicilina más cefotaxima o gentamicina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.120',
      title: 'Mecanismo de Resistencia y Necesidad de Ampicilina',
      stem: '¿Por qué motivo la Ampicilina forma parte obligatoria del esquema antibiótico empírico inicial en la sepsis neonatal precoz, en lugar de utilizar una cefalosporina de tercera generación como monoterapia?',
      options: [
        { letter: 'A', text: 'Porque las cefalosporinas no cubren a Escherichia coli' },
        { letter: 'B', text: 'Porque Listeria monocytogenes presenta resistencia intrínseca a todas las cefalosporinas y requiere ampicilina' },
        { letter: 'C', text: 'Porque la ampicilina es el único fármaco activo contra Pseudomonas aeruginosa' },
        { letter: 'D', text: 'Porque las cefalosporinas están contraindicadas en recién nacidos por toxicidad renal irreversible' },
        { letter: 'E', text: 'Por razones exclusivamente económicas de bajo costo en el formulario nacional' },
      ],
      correct: 'B',
      explanation: 'Listeria monocytogenes es un bacilo grampositivo intracelular patógeno relevante en sepsis y meningitis neonatal de transmisión vertical perinatal. Este microorganismo carece de proteínas de unión a penicilina (PBP) con afinidad por las cefalosporinas, presentando resistencia intrínseca natural absoluta a todas las cefalosporinas existentes (incluidas Cefotaxima, Ceftriaxona y Cefepime). Por esta razón microbiológica fundamental, la Ampicilina es un componente insustituible del esquema empírico inicial en todo el período neonatal.',
      say: {
        stem: 'Pregunta sobre la justificación microbiológica de incorporar obligatoriamente ampicilina en el esquema de sepsis neonatal precoz en vez de usar cefalosporinas solas.',
        question: '¿Por qué motivo la ampicilina forma parte obligatoria del esquema inicial?',
        options: 'La opción A porque cefalosporinas no cubren Escherichia coli. La B porque Listeria monocytogenes presenta resistencia intrínseca a todas las cefalosporinas y requiere ampicilina. La C ampicilina cubre Pseudomonas. La D toxicidad renal. La E costo económico. Recuerda la microbiología de Listeria. Piénsalo.',
        answer: 'La respuesta correcta es la B. Listeria monocytogenes es naturalmente resistente a todas las cefalosporinas, haciendo que la ampicilina sea insustituible.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Puntos Clave y Perlas Indispensables en Sepsis Neonatal',
      cards: [
        {
          title: 'Cronología y Microorganismos Clave',
          tag: 'Límites temporales y cobertura antimicrobiana dirigida',
          kind: 'key',
          items: [
            {
              t: 'Setenta y dos horas delimitan precoz de tardía',
              d: 'Menor a 72 horas es vertical materna (SGB, E. coli, Listeria); mayor a 72 horas es nosocomial (estafilococo coagulasa negativo)',
              say: 'Recuerden con exactitud el límite temporal de setenta y dos horas de vida: antes de este plazo corresponde a transmisión vertical materna perinatal y posterior a este corte se trata de infección nosocomial u horizontal asociada a dispositivos invasivos.',
            },
            {
              t: 'Ampicilina obligatoria por resistencia natural de Listeria',
              d: 'Listeria no responde a ninguna cefalosporina; el esquema precoz siempre debe incluir ampicilina más aminoglucósido o cefotaxima',
              say: 'Tengan grabado para siempre que Listeria monocytogenes presenta resistencia natural intrínseca a todas las generaciones de cefalosporinas, haciendo mandatoria la incorporación de ampicilina en todo esquema empírico neonatal.',
            },
          ],
        },
        {
          title: 'Farmacovigilancia y Conducta ante Sospecha',
          tag: 'Prohibición de ceftriaxona y punción lumbar',
          kind: 'alert',
          items: [
            {
              t: 'Prohibida la Ceftriaxona en neonatos: Usar Cefotaxima',
              d: 'La ceftriaxona desplaza la bilirrubina de la albúmina causando kernicterus y precipita letalmente con sales de calcio',
              say: 'Jamás prescriban ceftriaxona en un recién nacido en sala o intensivo: desplaza a la bilirrubina causando kernicterus y precipita con gluconato de calcio; usen siempre cefotaxima endovenosa.',
            },
            {
              t: 'La hipotermia es el signo de sepsis por excelencia',
              d: 'Neonato con temperatura menor a 36 grados que no se alimenta bien debe considerarse séptico e iniciar antibióticos en la primera hora',
              say: 'La hipotermia y el decaimiento en el neonato son signos de sepsis hasta demostrar lo contrario. Si te llevas una sola idea de hoy: el esquema empírico inicial en sepsis precoz combina ampicilina y gentamicina, cubriendo Streptococcus agalactiae y Listeria monocytogenes. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Diagnóstico, Estratificación y Manejo de la Sepsis Neonatal',
    root: N(
      'start',
      'Recién Nacido con Sospecha de Infección Sistémica o Factores de Riesgo Perinatales',
      'Hipotermia (< 36.0°C), letargia, quejido, rechazo alimentario o madre con RPM > 18h / fiebre intraparto',
      'Iniciamos el abordaje evaluando la cronología del debut clínico para clasificar en sepsis precoz o tardía.',
      [
        'Sepsis de inicio precoz: Menor a setenta y dos horas de vida (< 72 h)',
        N(
          'alert',
          'Sepsis Neonatal Precoz: Transmisión Vertical Materna',
          'Estabilización térmica en cuna radiante · Accesos vasculares · Estudio séptico completo: hemocultivos x 2, punción lumbar para LCR y hemograma · Iniciar antibióticos en la primera hora',
          'En la sepsis precoz estabilizamos al paciente, tomamos cultivos y punción lumbar e iniciamos antibióticos antes de sesenta minutos.',
        ),
        N(
          'q',
          '¿Existe sospecha clínica o confirmación de meningitis bacteriana?',
          'Letargia profunda, fontanela abombada, convulsiones o LCR alterado',
          'Evaluamos si existe sospecha o confirmación de invasión al sistema nervioso central.',
          [
            'Sí: Sospecha o confirmación de meningitis bacteriana neonatal',
            N(
              'refer',
              'Esquema Empírico con Excelente Paso a LCR: Ampicilina + Cefotaxima EV',
              'Ampicilina 200-300 mg/kg/día cada 8-12h (Listeria y SGB) + Cefotaxima 150-200 mg/kg/día cada 8h (E. coli K1) · Tratamiento por 21 días para bacilos gramnegativos o 14 días para SGB',
              'Ante meningitis neonatal indicamos ampicilina a dosis meníngeas más cefotaxima endovenosa para una penetración óptima en líquido cefalorraquídeo.',
            ),
          ],
          [
            'No: Sepsis sistémica sin evidencia de meningitis',
            N(
              'ok',
              'Esquema Estándar de Primera Línea: Ampicilina + Gentamicina EV',
              'Ampicilina 100-150 mg/kg/día cada 12h + Gentamicina 4-5 mg/kg/día en dosis única diaria · Reevaluar con resultado de hemocultivos a las 48-72h para desescalar o suspender',
              'En sepsis sistémica sin meningitis el esquema de elección es ampicilina más gentamicina en dosis única diaria.',
            ),
          ],
        ),
      ],
      [
        'Sepsis de inicio tardío: Mayor a setenta y dos horas de vida (> 72 h a 28 días)',
        N(
          'alert',
          'Sepsis Neonatal Tardía: Origen Nosocomial o Dispositivos Invasivos',
          'Estudio séptico completo obligatorio: hemocultivos, punción lumbar (30% meningitis) y urocultivo por sonda vesical estéril · Evaluar retiro de catéter venoso central',
          'En la sepsis tardía el estudio completo exige además urocultivo por sonda y evaluación del retiro de catéteres.',
        ),
        N(
          'refer',
          'Esquema Empírico Nosocomial: Vancomicina + Cefotaxima (o Amikacina)',
          'Vancomicina 10-15 mg/kg cada 8-12h (Staphylococcus epidermidis y aureus) + Cefotaxima o Amikacina (Gramnegativos resistentes) · Añadir Anfotericina B si sospecha de Candida',
          'Indicamos vancomicina para estafilococos resistentes asociada a cefotaxima o amikacina para bacilos gramnegativos hospitalarios.',
        ),
      ],
    ),
  },
};
