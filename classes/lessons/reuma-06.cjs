// Clase 1.6 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia.cjs (reuma-06).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'reuma-06',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Pannus sinovial, criterios ACR/EULAR 2010 y el valor pronóstico de los anti-CCP',
      say: 'Bienvenidos. Hoy entramos a la artritis reumatoide, la artropatía inflamatoria autoinmune más emblemática y preguntada de la medicina interna. En el EUNACOM se evalúa con tres ejes muy claros: reconocer la poliartritis simétrica de pequeñas articulaciones con rigidez matinal prolongada, aplicar con precisión los criterios clasificatorios actuales con los anticuerpos antipéptidos citrulinados, y diagnosticar a tiempo las manifestaciones extraarticulares que amenazan órganos vitales. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Del gatillo inmune a la destrucción ósea por pannus',
      nodes: [
        { id: 'gat', col: 0, row: 1, k: 'cause', t: 'Predisposición y factores ambientales', s: 'HLA-DR cuatro · tabaquismo activo' },
        { id: 'cit', col: 1, row: 1, k: 'mech', t: 'Citrulinación de proteínas', s: 'Pérdida de tolerancia inmune' },
        { id: 'pan', col: 2, row: 1, k: 'alert', t: 'Formación del pannus sinovial', s: 'Tejido invasivo ricamente vascular' },
        { id: 'ost', col: 3, row: 0, k: 'alert', t: 'Activación de osteoclastos', s: 'Erosiones óseas marginales precoces' },
        { id: 'car', col: 3, row: 2, k: 'alert', t: 'Degradación enzimática del cartílago', s: 'Colagenasas y metaloproteinasas' },
      ],
      edges: [
        { from: 'gat', to: 'cit' },
        { from: 'cit', to: 'pan' },
        { from: 'pan', to: 'ost' },
        { from: 'pan', to: 'car' },
      ],
      steps: [
        { show: ['gat', 'cit'], note: 'Gatillante ambiental y genético',
          say: 'En un individuo con susceptibilidad genética portador del alelo HLA-DR cuatro, el tabaquismo crónico gatilla la citrulinación de proteínas en la mucosa respiratoria. El sistema inmune desconoce estos péptidos modificados y monta una respuesta de autoanticuerpos.' },
        { show: ['pan'], note: 'El tejido destructor característico',
          say: 'Los linfocitos T colaboradores y macrófagos activados migran a la membrana sinovial y liberan citoquinas como factor de necrosis tumoral e interleuquina seis. La sinovial sufre hiperplasia masiva y neoangiogénesis, formando el pannus: un tejido invasivo destructivo.' },
        { show: ['ost'], note: 'Erosión ósea en sacabocado',
          say: 'El pannus expresa el ligando de RANK y estimula la formación acelerada de osteoclastos. Esto provoca las erosiones óseas marginales en sacabocado y la osteopenia yuxtaarticular en las zonas descubiertas de cartílago.' },
        { show: ['car'], note: 'Destrucción del cartílago',
          say: 'Al mismo tiempo, la liberación continua de metaloproteinasas degrada la matriz cartilaginosa, provocando la pérdida del espacio articular. Comprender este mecanismo explica por qué el tratamiento debe partir antes de que el pannus destruya el hueso.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica articular',
      title: 'Poliartritis simétrica y rigidez matinal prolongada',
      cards: [
        { title: 'Patrón articular típico', tag: 'Pequeñas y medianas', kind: 'key', items: [
          { t: 'Poliartritis simétrica de manos', d: 'MCF, IFP y muñecas bilaterales',
            say: 'La presentación clínica es un cuadro insidioso y progresivo de poliartritis simétrica que compromete muñecas, articulaciones metacarpofalángicas e interfalángicas proximales en ambas manos, afectando a mujeres en proporción de tres a uno.' },
          { t: 'Rigidez matinal mayor a una hora', d: 'Alivia con la actividad motora',
            say: 'El síntoma funcional cardinal es la rigidez matinal prolongada, habitualmente superior a una o dos horas, que mejora lentamente a medida que el paciente moviliza las extremidades.' },
        ] },
        { title: 'Lo que NUNCA compromete', tag: 'Reglas anatómicas', kind: 'alert', items: [
          { t: 'Respeta interfalángicas distales', d: 'Las IFD son territorio de artrosis',
            say: 'Esta es una regla de oro semiológica absoluta para el examen: la artritis reumatoide jamás compromete las articulaciones interfalángicas distales. Si encuentras nódulos óseos o tumefacción en las distales, debes pensar inmediatamente en artrosis o en artritis psoriásica, pero nunca en artritis reumatoide.' },
          { t: 'Respeta la columna dorsolumbar', d: 'No produce lumbago inflamatorio',
            say: 'Tampoco compromete jamás las articulaciones sacroilíacas ni la columna torácica o lumbar. Todo dolor lumbosacro de características inflamatorias que despierte de noche orienta directamente a una espondiloartropatía como la espondilitis anquilosante.' },
        ] },
        { title: 'La excepción axial: Cervical', tag: 'Riesgo neurológico vital', kind: 'criteria', items: [
          { t: 'Subluxación atloideo-axoidea', d: 'Compromiso sinovial entre C1 y C2',
            say: 'Existe una sola articulación axial con sinovial que sí se inflama: la articulación atloideo-axoidea entre la primera y segunda vértebra cervical. El pannus debilita el ligamento transverso del atlas.' },
          { t: 'Cuidado al intubar en pabellón', d: 'Riesgo de compresión medular fatal',
            say: 'Atención con esta pregunta: en cirugías electivas, la flexión o extensión forzada del cuello durante la intubación endotraqueal puede desencadenar una subluxación con sección medular irreversible.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Deformidades tardías',
      title: 'Secuelas anatómicas de la enfermedad no frenada',
      nodes: [
        { id: 'sin', col: 0, row: 1, k: 'start', t: 'Sinovitis proliferativa crónica', s: 'Laxitud y rotura tendinosa' },
        { id: 'raf', col: 1, row: 0, k: 'alert', t: 'Desviación ulnar en ráfaga', s: 'Subluxación palmar de las MCF' },
        { id: 'cis', col: 1, row: 1, k: 'alert', t: 'Dedo en cuello de cisne', s: 'Hiperextensión IFP + flexión IFD' },
        { id: 'bot', col: 1, row: 2, k: 'alert', t: 'Dedo en ojal o boutonnière', s: 'Flexión de IFP + hiperextensión IFD' },
        { id: 'bak', col: 2, row: 1, k: 'trap', t: 'Quiste poplíteo de Baker', s: 'Pseudo-tromboflebitis al romperse' },
      ],
      edges: [
        { from: 'sin', to: 'raf' },
        { from: 'sin', to: 'cis' },
        { from: 'sin', to: 'bot' },
        { from: 'sin', to: 'bak' },
      ],
      steps: [
        { show: ['sin', 'raf'], note: 'Ráfaga ulnar',
          say: 'Si no se frena tempranamente con fármacos modificadores, la destrucción de la cápsula y los tendones extensores provoca la subluxación palmar de las metacarpofalángicas, desviando los dedos hacia el lado ulnar en ráfaga.' },
        { show: ['cis', 'bot'], note: 'Cuello de cisne y ojal',
          say: 'En los dedos de las manos se observan dos deformidades clásicas opuestas: el dedo en cuello de cisne, por hiperextensión de la interfalángica proximal y flexión distal; y el dedo en ojal o boutonnière, por flexión de la interfalángica proximal e hiperextensión de la distal. Además, en el pulgar se produce la deformidad en zeta por hiperextensión metatarsofalángica.' },
        { show: ['bak'], note: 'Quiste de Baker roto',
          say: 'En la rodilla la inflamación a tensión produce un quiste de Baker en el hueco poplíteo. Si se rompe, el líquido sinovial diseca los gemelos, simulando un cuadro idéntico a una trombosis venosa profunda.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios ACR/EULAR 2010',
      title: 'Puntaje diagnóstico: 6 o más puntos de 10',
      cards: [
        { title: 'Compromiso articular (0 a 5 pts)', tag: 'El peso de las pequeñas', kind: 'criteria', items: [
          { t: 'De 1 a 3 articulaciones pequeñas', d: 'Otorga 2 puntos de entrada',
            say: 'Los criterios de dos mil diez se diseñaron para diagnosticar antes de las erosiones. De una a tres articulaciones pequeñas otorga dos puntos; de cuatro a diez pequeñas da tres puntos.' },
          { t: 'Más de 10 con 1 pequeña al menos', d: 'Puntaje máximo de 5 puntos',
            say: 'Y más de diez articulaciones comprometidas, con al menos una pequeña, entrega el puntaje máximo de cinco puntos en este dominio.' },
        ] },
        { title: 'Serología (0 a 3 pts)', tag: 'Títulos altos pesan más', kind: 'key', items: [
          { t: 'FR o anti-CCP positivo bajo', d: 'Menor a tres veces el valor normal: 2 pts',
            say: 'El segundo dominio es la serología. Factor reumatoide o anticuerpos anti-CCP positivo a títulos bajos otorga dos puntos.' },
          { t: 'FR o anti-CCP positivo alto', d: 'Mayor a tres veces el límite normal: 3 pts',
            say: 'Si cualquiera de los dos está positivo a títulos altos, definidos como más de tres veces el valor de corte, otorga tres puntos completos.' },
        ] },
        { title: 'Reactantes y duración (0 a 2 pts)', tag: 'Inflamación y tiempo', kind: 'alert', items: [
          { t: 'VHS o PCR elevada: 1 punto', d: 'Evidencia de inflamación sistémica',
            say: 'El tercer dominio suma un punto si la velocidad de sedimentación globular o la proteína C reactiva están por encima del límite superior normal.' },
          { t: 'Duración mayor o igual a 6 semanas', d: 'Suma 1 punto definitivo',
            say: 'Y el cuarto dominio entrega un punto si la sinovitis persiste por seis semanas o más. Con seis puntos o más de diez, el diagnóstico de artritis reumatoide queda formalmente confirmado.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Inmunoserología',
      title: 'Factor Reumatoide versus Anticuerpos Anti-CCP',
      nodes: [
        { id: 'ser', col: 0, row: 1, k: 'start', t: 'Sospecha clínica de AR', s: 'Solicitar perfil de autoanticuerpos' },
        { id: 'fr', col: 1, row: 0, k: 'mech', t: 'Factor Reumatoide (IgM anti-Fc)', s: 'Sensible 75% · poco específico' },
        { id: 'ccp', col: 1, row: 2, k: 'good', t: 'Anticuerpos Anti-CCP (ACPA)', s: 'Especificidad sobresaliente > 95%' },
        { id: 'fal', col: 2, row: 0, k: 'trap', t: 'Falsos positivos frecuentes', s: 'Ancianos · VHC · endocarditis · Sjögren' },
        { id: 'pro', col: 2, row: 2, k: 'alert', t: 'Marcador de agresividad y erosión', s: 'Predice rápida progresión ósea' },
      ],
      edges: [
        { from: 'ser', to: 'fr' },
        { from: 'ser', to: 'ccp' },
        { from: 'fr', to: 'fal' },
        { from: 'ccp', to: 'pro' },
      ],
      steps: [
        { show: ['ser', 'fr'], note: 'Factor Reumatoide',
          say: 'El factor reumatoide es un anticuerpo, habitualmente de isotipo inmunoglobulina M, dirigido contra la fracción constante Fc de la inmunoglobulina G. Es positivo en el setenta y cinco por ciento de los pacientes, pero su especificidad es baja.' },
        { show: ['fal'], note: 'Múltiples falsos positivos',
          say: 'Puede dar positivo en ancianos sanos, en infecciones crónicas como hepatitis C, tuberculosis y endocarditis bacteriana, y en otras enfermedades autoinmunes como síndrome de Sjögren y lupus.' },
        { show: ['ccp'], note: 'Anticuerpos anti-CCP: la estrella',
          say: 'Por esa baja especificidad del factor reumatoide, el examen serológico específico de elección indiscutida son los anticuerpos antipéptidos citrulinados cíclicos o anti-CCP. Tienen una especificidad diagnóstica superior al noventa y seis a noventa y ocho por ciento, confirmando la enfermedad de forma inequívoca.' },
        { show: ['pro'], note: 'Valor pronóstico de daño óseo',
          say: 'Además, los títulos elevados de anti-CCP predicen una enfermedad altamente erosiva con rápida progresión a deformidades, lo que obliga a indicar terapia combinada precoz.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Compromiso sistémico',
      title: 'Manifestaciones extraarticulares mayores',
      cards: [
        { title: 'Compromiso Ocular', tag: 'De ojo seco a escleritis', kind: 'alert', items: [
          { t: 'Queratoconjuntivitis sicca', d: 'Síndrome de Sjögren secundario muy frecuente',
            say: 'La manifestación ocular más prevalente en la artritis reumatoide es la queratoconjuntivitis seca debida a un síndrome de Sjögren secundario, presente en más de un tercio de las pacientes, que se manifiesta por sensación de arenilla, lagrimeo paradójico reflejo, fotofobia e intolerancia a lentes de contacto.' },
          { t: 'Escleritis anterior dolorosa', d: 'Dolor sordo profundo que despierta de noche',
            say: 'Mucho más grave es la escleritis anterior necrotizante: se presenta con dolor ocular sordo, intenso y profundo, pudiendo provocar adelgazamiento escleral y escleromalacia perforante.' },
        ] },
        { title: 'Compromiso Pleuropulmonar', tag: 'Pleura e intersticio', kind: 'criteria', items: [
          { t: 'Pleuritis con glucosa muy baja', d: 'Menor a treinta miligramos por decilitro',
            say: 'La pleuritis reumatoide se caracteriza por un líquido pleural exudativo con niveles extremadamente bajos de glucosa, inferiores a treinta miligramos por decilitro, y deshidrogenasa láctica muy alta.' },
          { t: 'Enfermedad pulmonar intersticial', d: 'Patrón fibrótico en tomografía de tórax',
            say: 'Puede provocar compromiso intersticial pulmonar difuso con patrón de neumonía intersticial usual, siendo una de las principales causas de morbimortalidad respiratoria.' },
        ] },
        { title: 'Nódulos y Vasculitis', tag: 'Marcadores de seropositividad', kind: 'key', items: [
          { t: 'Nódulos subcutáneos en codos', d: 'Indoloros en superficies extensoras',
            say: 'Los nódulos reumatoides subcutáneos aparecen en superficies extensoras de roce como el olécranon, y se asocian fuertemente a títulos altos de factor reumatoide y anti-CCP.' },
          { t: 'Vasculitis necrotizante periférica', d: 'Úlceras isquémicas y mononeuritis múltiple',
            say: 'En casos seropositivos severos de larga evolución puede desarrollarse una vasculitis reumatoide necrotizante sistémica, caracterizada por úlceras isquémicas profundas y tórpidas en las piernas, púrpura palpable en extremidades inferiores y mononeuritis múltiple con caída del pie o de la muñeca.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Asociaciones clásicas',
      title: 'Síndrome de Felty y Síndrome de Caplan',
      nodes: [
        { id: 'ar', col: 0, row: 1, k: 'start', t: 'Artritis Reumatoide severa', s: 'Seropositiva de larga data' },
        { id: 'fel', col: 1, row: 0, k: 'alert', t: 'Síndrome de Felty', s: 'AR + esplenomegalia + neutropenia' },
        { id: 'cap', col: 1, row: 2, k: 'mech', t: 'Síndrome de Caplan', s: 'AR + neumoconiosis pulmonar' },
        { id: 'inf', col: 2, row: 0, k: 'risk', t: 'Infecciones piógenas graves', s: 'Por neutrófilos < 1.500 por mm³' },
        { id: 'nod', col: 2, row: 2, k: 'effect', t: 'Nódulos pulmonares múltiples', s: 'En mineros expuestos a carbón o sílice' },
      ],
      edges: [
        { from: 'ar', to: 'fel' },
        { from: 'ar', to: 'cap' },
        { from: 'fel', to: 'inf' },
        { from: 'cap', to: 'nod' },
      ],
      steps: [
        { show: ['ar', 'fel'], note: 'Tríada de Felty',
          say: 'El síndrome de Felty es una complicación clásica de la artritis reumatoide de larga data. Se define por la tríada de artritis reumatoide severa, esplenomegalia palpable y neutropenia menor a mil quinientos neutrófilos.' },
        { show: ['inf'], note: 'Riesgo séptico de Felty',
          say: 'La neutropenia predispone a infecciones bacterianas cutáneas y respiratorias graves recurrentes, requiriendo un manejo agresivo y control estricto.' },
        { show: ['cap', 'nod'], note: 'Síndrome de Caplan',
          say: 'Y el síndrome de Caplan corresponde a la asociación de artritis reumatoide con neumoconiosis en trabajadores de la minería expuestos a carbón o sílice, desarrollando múltiples nódulos pulmonares periféricos en la radiografía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Morbimortalidad sistémica',
      title: 'Aterosclerosis acelerada: la principal causa de muerte',
      cards: [
        { title: 'Riesgo cardiovascular', tag: 'Aterosclerosis acelerada', kind: 'alert', items: [
          { t: 'Causa número uno de mortalidad', d: 'Infarto de miocardio y accidente cerebrovascular',
            say: 'La principal causa de muerte en pacientes con artritis reumatoide no es articular: es el daño cardiovascular. La inflamación sistémica crónica mediada por citoquinas acelera la formación de placas de ateroma en las arterias coronarias y carotídeas.' },
          { t: 'Equivalente coronario', d: 'Riesgo equiparable a diabetes mellitus',
            say: 'Tener una artritis reumatoide activa de larga data confiere un riesgo de infarto al miocardio equiparable a ser diabético. Por eso el control estricto de la inflamación salva vidas.' },
        ] },
        { title: 'Infecciones y osteoporosis', tag: 'Comorbilidades mayores', kind: 'criteria', items: [
          { t: 'Mayor susceptibilidad a gérmenes', d: 'Por la enfermedad y por la inmunosupresión',
            say: 'La segunda causa de muerte son las infecciones bacterianas graves, favorecidas tanto por la disfunción inmune como por el uso de corticoides y fármacos biológicos.' },
          { t: 'Osteoporosis generalizada precoz', d: 'Riesgo elevado de fracturas vertebrales',
            say: 'Además, las citoquinas inflamatorias y el reposo forzado aceleran la pérdida de masa ósea, provocando osteoporosis precoz con alto riesgo de fracturas por fragilidad.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Integremos todo el algoritmo diagnóstico de la artritis reumatoide.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Puntaje diagnóstico ACR/EULAR 2010 para Artritis Reumatoide',
      head: ['Dominio', 'Hallazgos clínicos y de laboratorio', 'Puntaje asignado', 'Regla de oro'],
      rows: [
        { cells: ['Compromiso articular', '4 a 10 articulaciones pequeñas (o > 10 con 1 pequeña)', '3 puntos (o 5 puntos si > 10)', 'Manos y muñecas suman el puntaje máximo'],
          say: 'Repasemos la tabla de criterios de dos mil diez. El compromiso de cuatro a diez articulaciones pequeñas otorga tres puntos, y más de diez con al menos una pequeña da cinco puntos.' },
        { cells: ['Serología', 'FR o anti-CCP positivo a títulos altos (> 3 veces valor)', '3 puntos', 'Títulos altos de anti-CCP confirman y sellan 3 puntos'],
          say: 'Serología con factor reumatoide o anti-CCP sobre tres veces el límite normal entrega tres puntos completos.' },
        { cells: ['Reactantes de fase aguda', 'VHS o PCR marcadamente elevadas', '1 punto', 'Basta que una de las dos esté alterada para sumar'],
          say: 'Reactantes de fase aguda elevados con velocidad de sedimentación o PCR alterada suma un punto.' },
        { cells: ['Duración de síntomas', 'Duración mayor o igual a 6 semanas', '1 punto', 'Descarta artritis virales y reactivas agudas'],
          say: 'Y duración de seis semanas o más entrega el punto final. Con seis puntos o más de un total de diez, se confirma el diagnóstico de artritis reumatoide.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico tipo EUNACOM',
      stem: 'Mujer de 46 años consulta por 8 semanas de dolor y tumefacción simétrica en articulaciones metacarpofalángicas, interfalángicas proximales y muñecas de ambas manos, con rigidez matinal de 90 minutos que dificulta sus labores matutinas. Al examen físico destaca sinovitis activa en 8 articulaciones de las manos, sin compromiso de interfalángicas distales. Sus exámenes muestran VHS de 48 mm/h, PCR de 3,2 mg/dl y anticuerpos anti-CCP fuertemente positivos a títulos de 180 UI/ml (valor de corte 20 UI/ml). Radiografía de manos muestra osteopenia yuxtaarticular.',
      question: 'Según los criterios ACR/EULAR 2010, ¿cuál es el puntaje acumulado y la conducta diagnóstica?',
      options: [
        { letter: 'A', text: '4 puntos; no cumple criterios, se descarta artritis reumatoide' },
        { letter: 'B', text: '5 puntos; sospecha intermedia, solicitar resonancia magnética' },
        { letter: 'C', text: '8 puntos; diagnóstico confirmado de artritis reumatoide' },
        { letter: 'D', text: '7 puntos; requiere biopsia sinovial obligatoria para confirmación' },
        { letter: 'E', text: '2 puntos; el cuadro corresponde a artrosis nodal de manos' },
      ],
      correct: 'C',
      explanation: 'La paciente suma 8 puntos en los criterios ACR/EULAR 2010: 3 puntos por 4 a 10 articulaciones pequeñas afectadas + 3 puntos por anti-CCP a títulos altos (> 3 veces el corte) + 1 punto por reactantes elevados (VHS/PCR) + 1 punto por duración ≥ 6 semanas. Con ≥ 6 puntos el diagnóstico de artritis reumatoide es de certeza.',
      say: {
        stem: 'Vamos al caso clínico. Mujer de cuarenta y seis años con ocho semanas de poliartritis simétrica en manos con rigidez matinal de noventa minutos. Tiene sinovitis en ocho articulaciones pequeñas, velocidad de sedimentación elevada y anti-CCP en títulos altos, nueve veces el corte.',
        question: 'Según los criterios actuales, ¿cuál es el puntaje acumulado y la conducta diagnóstica?',
        options: 'Las opciones: cuatro puntos descartando la enfermedad, cinco puntos requiriendo resonancia, ocho puntos con diagnóstico confirmado, siete puntos requiriendo biopsia, o dos puntos por artrosis. Piénsalo.',
        answer: 'La respuesta correcta es la C. Sumemos los puntos según los criterios vigentes: ocho articulaciones pequeñas suma tres puntos; anti-CCP positivo a títulos altos suma tres puntos; reactantes elevados suma un punto; y ocho semanas de evolución aporta otro punto. Da ocho puntos de diez. Como el umbral diagnóstico es de seis puntos, el diagnóstico de artritis reumatoide está formalmente confirmado sin requerir exámenes invasivos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 94',
      stem: 'Paciente con dolor articular en MCF e IFP, con rigidez matinal importante. ¿Cuál es el examen específico a solicitar?',
      options: [
        { letter: 'A', text: 'Factor reumatoide (IgM)' },
        { letter: 'B', text: 'ANA y anti-DNA doble cadena' },
        { letter: 'C', text: 'Ácido úrico sérico' },
        { letter: 'D', text: 'Anticuerpos anti-CCP' },
        { letter: 'E', text: 'HLA-B27' },
      ],
      correct: 'D',
      explanation: 'Ante la sospecha clínica de artritis reumatoide (artritis de MCF e IFP con rigidez matinal), el examen con mayor especificidad diagnóstica (> 95-98%) son los anticuerpos anti-péptidos cíclicos citrulinados (anti-CCP). El factor reumatoide es sensible pero inespecífico.',
      say: {
        stem: 'Pregunta real del EUNACOM de enero de dos mil veintitrés, pregunta noventa y cuatro. Paciente con dolor articular en metacarpofalángicas e interfalángicas proximales, con rigidez matinal importante. Se pregunta cuál es el examen específico a solicitar.',
        question: '¿Cuál es el examen específico a solicitar?',
        options: 'Las alternativas: factor reumatoide, anticuerpos antinucleares y anti-DNA, ácido úrico sérico, anticuerpos anti-CCP, o HLA-B veintisiete. Piénsalo.',
        answer: 'Es la D. Fíjate en la palabra clave del enunciado: pide el examen específico. El factor reumatoide es sensible pero puede elevarse en muchas otras patologías, mientras que los anticuerpos anti-CCP tienen una especificidad superior al noventa y cinco por ciento para artritis reumatoide. Es el examen serológico de elección.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 128',
      stem: 'Una paciente de 50 años consulta por artralgias y edema de las manos, especialmente en las articulaciones metacarpofalángicas, interfalángicas proximales y en las muñecas de ambas manos. Refiere fenómeno de Raynaud y rigidez matinal de 1 hora de duración. Además, relata sensación de arenilla ocular y boca seca. Se solicitan exámenes, que muestran hemograma normal, VHS: 52 mm/h, PCR: 2,8 mg/dl, anticuerpos antinucleares positivos en titulación 1/80, factor reumatoide: 118 UI/ml y anticuerpos anti-CCP: 200 UI/ml. La radiografía de manos muestra osteopenia yuxtarticular de los huesos metacarpianos.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Lupus eritematoso sistémico' },
        { letter: 'B', text: 'Artritis reumatoide' },
        { letter: 'C', text: 'Vasculitis primaria' },
        { letter: 'D', text: 'Esclerosis sistémica' },
        { letter: 'E', text: 'Síndrome de Sjögren primario' },
      ],
      correct: 'B',
      explanation: 'Poliartritis simétrica en manos (MCF, IFP, muñecas) con rigidez matinal de 1 hora, osteopenia yuxtaarticular en radiografía y títulos muy altos de anti-CCP (200 UI/ml) y factor reumatoide confirma Artritis Reumatoide. La presencia de xeroftalmia y xerostomía corresponde a un Síndrome de Sjögren secundario.',
      say: {
        stem: 'Examen de diciembre de dos mil diecinueve, pregunta ciento veintiocho. Paciente de cincuenta años con artralgias y edema simétrico en metacarpofalángicas, interfalángicas proximales y muñecas, con rigidez de una hora, ojo seco y boca seca. Tiene factor reumatoide de ciento dieciocho y anti-CCP de doscientos, con osteopenia yuxtaarticular en la radiografía.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: lupus, artritis reumatoide, vasculitis primaria, esclerosis sistémica, o síndrome de Sjögren primario. Piénsalo.',
        answer: 'La respuesta correcta es la B. Cumple todos los criterios de artritis reumatoide seropositiva: poliartritis simétrica de manos, rigidez matinal de una hora, osteopenia y anti-CCP en doscientos. El ojo y boca seca representan un síndrome de Sjögren secundario. La trampa es marcar lupus o Sjögren primario por los anticuerpos antinucleares positivos a títulos bajos, pero los anti-CCP elevados sellan el diagnóstico de artritis reumatoide.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 114',
      stem: 'Paciente de 40 años con ojo rojo, sensación de arenilla, lagrimeo y fotofobia desde hace 3 meses. Usa lentes de contacto hace años. Antecedente de artritis reumatoide.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Síndrome de ojo seco (queratoconjuntivitis sicca)' },
        { letter: 'B', text: 'Conjuntivitis bacteriana' },
        { letter: 'C', text: 'Úlcera corneal por Acanthamoeba' },
        { letter: 'D', text: 'Escleritis' },
        { letter: 'E', text: 'Glaucoma agudo' },
      ],
      correct: 'A',
      explanation: 'Los síntomas crónicos de sensación de cuerpo extraño o arenilla, lagrimeo reflejo y fotofobia en un paciente con artritis reumatoide corresponden a queratoconjuntivitis seca por síndrome de Sjögren secundario, la manifestación oftalmológica más frecuente de la enfermedad.',
      say: {
        stem: 'Pregunta real de julio de dos mil veinticinco, pregunta ciento catorce. Paciente de cuarenta años con sensación de arenilla ocular, lagrimeo reflejo y fotofobia de tres meses de evolución, con antecedente conocido de artritis reumatoide.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las alternativas: síndrome de ojo seco o queratoconjuntivitis seca, conjuntivitis bacteriana, úlcera corneal por amebas, escleritis, o glaucoma agudo. Piénsalo.',
        answer: 'Es la A. La queratoconjuntivitis seca secundaria a síndrome de Sjögren es la manifestación ocular más frecuente de la artritis reumatoide. Cursa con la clásica sensación de arenilla ocular y lagrimeo reflejo por mala lubricación corneal. El tratamiento inicial consiste en lágrimas artificiales lubricantes.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Patrón articular cardinal', tag: 'Simétrica y periférica', kind: 'key', items: [
          { t: 'MCF, IFP y muñecas simétricas', d: 'Rigidez matinal prolongada mayor a 1 hora',
            say: 'Cerremos con las tres reglas de oro. La artritis reumatoide es una poliartritis simétrica de manos con rigidez matinal mayor a una hora que respeta siempre las interfalángicas distales.' },
          { t: 'Subluxación C1-C2 en columna', d: 'Riesgo de daño medular al intubar',
            say: 'La única parte de la columna que compromete es la articulación atloideo-axoidea cervical, con riesgo de daño medular severo durante la intubación.' },
        ] },
        { title: 'Diagnóstico serológico', tag: 'Anti-CCP es el rey', kind: 'alert', items: [
          { t: 'Anti-CCP específico sobre el 95%', d: 'Predice enfermedad erosiva agresiva',
            say: 'Los anticuerpos anti-CCP son el examen de mayor especificidad y predicen daño óseo erosivo precoz.' },
          { t: 'Puntaje ACR/EULAR mayor a 6', d: 'Confirma diagnóstico de certeza',
            say: 'El diagnóstico se confirma con seis o más puntos de diez en los criterios clasificatorios de dos mil diez.' },
        ] },
        { title: 'Manifestaciones extraarticulares', tag: 'Ojo, pulmón y Felty', kind: 'criteria', items: [
          { t: 'Ojo seco y escleritis dolorosa', d: 'Glucosa pleural menor a treinta',
            say: 'En el ojo produce ojo seco por Sjögren secundario y escleritis dolorosa; en el pulmón, pleuritis con glucosa menor a treinta miligramos.' },
          { t: 'Síndrome de Felty con neutropenia', d: 'Artritis severa y esplenomegalia',
            say: 'Y el síndrome de Felty une artritis, esplenomegalia y neutropenia grave. Si te llevas una sola idea de hoy: la artritis reumatoide es simétrica, ataca las metacarpofalángicas respetando las distales, y los anti-CCP confirman el diagnóstico. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo diagnóstico: Artritis Reumatoide',
    root: N('start', 'Poliartritis simétrica de manos', 'Rigidez matinal prolongada > 1 hora',
      'Paciente con dolor, calor y aumento de volumen simétrico en metacarpofalángicas, interfalángicas proximales o muñecas de más de seis semanas.',
      ['', N('q', '¿Compromete articulaciones interfalángicas distales?', 'Exclusión de artrosis',
        'Se examinan las manos con detención para evaluar las articulaciones más distales.',
        ['SÍ: Compromete distales (Heberden)', N('refer', 'Sospechar Artrosis nodal de manos', 'Pinzamiento y osteofitos sin erosiones',
          'La presencia de nódulos de Heberden en interfalángicas distales apunta con fuerza a artrosis. Solicitar radiografía simple y descartar enfermedad inflamatoria autoinmune.')],
        ['NO: Respeta interfalángicas distales', N('do', 'Solicitar Anti-CCP, Factor Reumatoide y VHS/PCR', 'Evaluación serológica e inflamatoria',
          'Se solicita perfil serológico completo y reactantes de fase aguda para calcular los criterios clasificatorios de dos mil diez.',
          ['', N('q', '¿Puntaje acumulado en criterios 2010?', 'Cálculo de los cuatro dominios',
            'Se suman los puntos de articulaciones afectadas, serología, reactantes y duración de síntomas.',
            ['Puntaje >= 6 puntos', N('ok', 'Diagnóstico confirmado de Artritis Reumatoide', 'Derivación urgente a Reumatología GES',
              'Diagnóstico de certeza de artritis reumatoide. Ingresar de inmediato a la canasta GES para inicio precoz de fármacos modificadores como metotrexato antes de que aparezcan erosiones irreversibles.')],
            ['Puntaje < 6 puntos', N('refer', 'Seguimiento estrecho en atención primaria', 'Revaluar síntomas y signos articulares',
              'No cumple criterios completos aún. Mantener con analgesia sintomática, revaluar en cuatro semanas y derivar si aparecen nuevas articulaciones inflamadas.')])])])]),
  },
};
