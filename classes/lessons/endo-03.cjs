// Clase 1.3 de Endocrinología — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_endocrinologia.cjs (endo-03).
// Preguntas reales: books/data/real_questions_by_code.json vía classes/scripts/class_questions.cjs.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'endo-03',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Reconocerlo en la urgencia y dar el corticoide antes que la hormona',
      say: 'Bienvenidos. En la clase anterior tratamos el hipotiroidismo de la consulta. Hoy vemos su forma extrema, la mayor urgencia del hipotiroidismo: el coma mixedematoso, con una mortalidad de treinta a cincuenta por ciento. El examen pregunta dos cosas: si lo reconoces en una anciana fría y soporosa en invierno, y si sabes el orden del tratamiento. Y ese orden tiene una regla que salva la vida.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Cuando falta hormona en todas las células',
      nodes: [
        { id: 'hip', col: 0, row: 1, k: 'cause', t: 'Hipotiroidismo grave', s: 'No diagnosticado o abandonado' },
        { id: 'gat', col: 0, row: 3, k: 'cause', t: 'Factor gatillante', s: 'Presente en más del 90%' },
        { id: 'fal', col: 1, row: 2, k: 'mech', t: 'Falla metabólica celular', s: 'Todo el organismo se apaga' },
        { id: 'ter', col: 3, row: 0, k: 'effect', t: 'Sin termogénesis', s: 'Hipotermia' },
        { id: 'res', col: 3, row: 1, k: 'effect', t: 'Hipoventilación', s: 'Hipercapnia e hipoxia' },
        { id: 'cor', col: 3, row: 2, k: 'effect', t: 'Miocardio deprimido', s: 'Bajo gasto, bradicardia' },
        { id: 'ren', col: 3, row: 3, k: 'effect', t: 'Menor filtración', s: 'Retención de agua' },
        { id: 'com', col: 4, row: 2, k: 'alert', t: 'Coma mixedematoso', s: 'Mortalidad 30–50%' },
      ],
      edges: [
        { from: 'hip', to: 'fal' }, { from: 'gat', to: 'fal', label: 'descompensa' },
        { from: 'fal', to: 'ter' }, { from: 'fal', to: 'res' }, { from: 'fal', to: 'cor' }, { from: 'fal', to: 'ren' },
        { from: 'cor', to: 'com' },
      ],
      steps: [
        { show: ['hip'], note: 'El terreno: años sin hormona',
          say: 'Partamos por el mecanismo. El terreno es un hipotiroidismo grave de larga data, que nunca se diagnosticó, o un paciente que abandonó la levotiroxina.' },
        { show: ['gat'], note: 'Casi nunca es espontáneo',
          say: 'Pero rara vez se descompensa solo: en más del noventa por ciento hay un gatillante. Lo vemos en detalle enseguida, porque buscarlo es parte del tratamiento.' },
        { show: ['fal'], note: 'La falla es global',
          say: 'Cuando falta hormona tiroidea en todas las células, el metabolismo entero se apaga. Y ese apagón explica cada signo del cuadro.' },
        { show: ['ter', 'res'], note: 'Frío y sin respirar bien',
          say: 'Sin hormona no hay producción de calor, y aparece la hipotermia. El centro respiratorio se deprime, el paciente hipoventila y retiene CO dos, con hipoxia.' },
        { show: ['cor', 'ren'], note: 'Corazón lento, riñón que retiene agua',
          say: 'El corazón pierde contractilidad: bradicardia y bajo gasto. Y el riñón filtra menos y retiene agua, lo que explica la hiponatremia.' },
        { show: ['com'], note: 'La suma es el coma',
          say: 'La suma de todo eso es el coma mixedematoso: un paciente frío, lento, que no ventila, con el corazón deprimido y el sodio bajo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Gatillantes',
      title: '¿Quién llega y por qué hoy?',
      cards: [
        { title: 'La paciente típica', tag: 'Invierno', kind: 'key', items: [
          { t: 'Mujer de edad avanzada', d: 'Letargia progresiva, sopor o coma',
            say: 'La paciente típica es una mujer de edad avanzada que llega con letargia progresiva, sopor o coma. Y el contexto del enunciado casi siempre es el mismo: el invierno.' },
        ] },
        { title: 'Gatillantes', tag: 'Buscarlos siempre', kind: 'alert', items: [
          { t: 'Frío ambiental intenso', d: 'Típico en los meses de invierno',
            say: 'El gatillante clásico es la exposición a frío intenso: la anciana que vive sola y la encuentran en su casa durante una ola de frío.' },
          { t: 'Infecciones', d: 'Neumonía, infección urinaria, sepsis',
            say: 'El otro gran gatillante son las infecciones, como una neumonía, una infección urinaria o una sepsis. Es tan frecuente que siempre se toman hemocultivos y se inician antibióticos empíricos de amplio espectro.' },
          { t: 'Sedantes, opioides, anestesia', d: 'Depresores del sistema nervioso',
            say: 'Luego, los depresores del sistema nervioso central: sedantes, opioides o anestésicos generales. Ojo con el paciente hipotiroideo que se descompensa después de una cirugía.' },
          { t: 'ACV o infarto', d: 'Eventos agudos graves',
            say: 'Y los eventos agudos graves, como un accidente cerebrovascular o un infarto.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'La tríada que lo delata',
      cards: [
        { title: 'Hipotermia', tag: '< 35 °C', kind: 'criteria', items: [
          { t: 'Temperatura central < 35 °C', d: 'Frecuente entre 30 y 34 °C',
            say: 'La tríada de sospecha tiene tres componentes. El primero, la hipotermia: temperatura central bajo treinta y cinco grados, frecuentemente entre treinta y treinta y cuatro.' },
          { t: 'Termómetro rectal', d: 'El común puede no registrarla',
            say: 'Un detalle práctico: el termómetro clínico común puede no alcanzar a marcarla, y se necesita uno rectal para medir la hipotermia profunda.' },
        ] },
        { title: 'Estado mental', tag: 'Del sopor al coma', kind: 'alert', items: [
          { t: 'Somnolencia, estupor, coma', d: 'O psicosis: la "locura mixedematosa"',
            say: 'El segundo, el compromiso de conciencia: somnolencia extrema, estupor, confusión o coma. A veces se presenta como una psicosis, la llamada locura mixedematosa.' },
        ] },
        { title: 'Corazón y pulmón', tag: 'Inestable', kind: 'key', items: [
          { t: 'Bradicardia < 50 e hipotensión', d: 'Shock que no responde a volumen',
            say: 'Y el tercero, el compromiso cardiovascular y respiratorio: bradicardia extrema, bajo cincuenta, e hipotensión o shock que no responde al volumen, porque el miocardio está deprimido y a veces hay derrame pericárdico.' },
          { t: 'Hipoventilación e hipercapnia', d: 'Suele requerir intubación',
            say: 'Además, respiración lenta y superficial, con hipercapnia marcada, que muchas veces exige intubación inmediata. Anciana, fría, soporosa y bradicárdica en invierno: piensa en coma mixedematoso.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Laboratorio',
      title: 'Los exámenes confirman, no retrasan',
      cards: [
        { title: 'Perfil tiroideo', tag: 'Confirma', kind: 'key', items: [
          { t: 'TSH > 50–100, T4L indetectable', d: 'Salvo el central: TSH baja',
            say: 'Los exámenes confirman: TSH muy elevada, sobre cincuenta a cien, con T cuatro libre indetectable o muy baja. La excepción es el origen central, donde la TSH está baja, tal como vimos en la primera clase del bloque.' },
        ] },
        { title: 'Urgencia', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Hiponatremia < 120–125', d: 'No puede eliminar agua libre',
            say: 'Los exámenes de urgencia muestran una hiponatremia hiposmolar grave, bajo ciento veinte a ciento veinticinco, porque el riñón no logra eliminar agua libre y sube la hormona antidiurética.' },
          { t: 'Hipoglicemia', d: 'Alerta: suprarrenal o hipófisis',
            say: 'Y la hipoglicemia, que es una alerta: debe hacerte pensar que además falla la suprarrenal o la hipófisis. Guarda este dato para la regla que viene.' },
          { t: 'Acidosis respiratoria, CK alta, anemia', d: 'Gases con hipercapnia',
            say: 'Completan el cuadro la anemia, la CK muy elevada y unos gases con acidosis respiratoria hipercápnica e hipoxemia.' },
        ] },
        { title: 'Score de Popoveniuc', tag: 'Puntaje', kind: 'criteria', items: [
          { t: '≥ 60 puntos: diagnóstico casi seguro', d: 'Temperatura, conciencia, corazón, gatillante',
            say: 'Existe un puntaje diagnóstico, el de Popoveniuc, que suma temperatura, conciencia, compromiso cardiovascular y gatillante. Con sesenta puntos o más, el diagnóstico es casi seguro. Pero la sospecha es clínica, y el tratamiento no espera los exámenes.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'La regla de oro',
      title: 'Hidrocortisona antes que la levotiroxina',
      nodes: [
        { id: 'res', col: 0, row: 1, k: 'cause', t: 'Reserva suprarrenal limítrofe', s: 'Autoinmunidad poliglandular o hipopituitarismo' },
        { id: 'lt4', col: 1, row: 0, k: 'trap', t: 'Levotiroxina sola', s: 'Sin corticoide previo' },
        { id: 'deg', col: 2, row: 0, k: 'mech', t: 'Se acelera el metabolismo', s: 'Y la degradación del cortisol' },
        { id: 'cri', col: 3, row: 0, k: 'alert', t: 'Crisis adisoniana', s: 'Colapso vascular y paro' },
        { id: 'hc', col: 1, row: 2, k: 'good', t: 'Hidrocortisona EV', s: '100 mg bolo, luego 100 mg c/8 h' },
        { id: 'ok', col: 3, row: 2, k: 'good', t: 'Luego o junto: levotiroxina', s: 'Sin esperar el cortisol sérico' },
      ],
      edges: [
        { from: 'res', to: 'lt4' }, { from: 'lt4', to: 'deg' }, { from: 'deg', to: 'cri' },
        { from: 'res', to: 'hc', label: 'lo correcto' }, { from: 'hc', to: 'ok' },
      ],
      steps: [
        { show: ['res'], note: 'La suprarrenal también puede estar fallando',
          say: 'Ahora la regla que salva la vida, y para entenderla hay que mirar la suprarrenal. Muchos de estos pacientes tienen una reserva suprarrenal limítrofe: por autoinmunidad de varias glándulas, el síndrome de Schmidt, o por un hipopituitarismo. Por eso te pedí que guardaras la hipoglicemia.' },
        { show: ['lt4', 'deg'], note: 'La hormona acelera el consumo de cortisol',
          say: '¿Qué pasa si das levotiroxina sola? La hormona tiroidea acelera de golpe el metabolismo, incluida la degradación del poco cortisol que queda.' },
        { show: ['cri'], note: 'El error que mata',
          say: 'Y ese paciente sin reserva cae en una crisis adisoniana fulminante, con colapso vascular y paro cardíaco. Es la misma advertencia que vimos en el hipotiroidismo central, llevada al extremo.' },
        { show: ['hc'], note: 'Dosis de estrés',
          say: 'Por eso, en todo paciente con sospecha de coma mixedematoso, se administra hidrocortisona endovenosa: cien miligramos en bolo, y luego cien miligramos cada ocho horas.' },
        { show: ['ok'], note: 'Antes o al mismo tiempo',
          say: 'Y se da antes o al mismo tiempo que la hormona tiroidea, nunca después. No se espera el resultado del cortisol para ponerla. En la pregunta real vas a ver que esta es exactamente la respuesta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'La hormona tiroidea: endovenosa',
      cards: [
        { title: 'Levotiroxina EV', tag: 'Vía de elección', kind: 'pharma', items: [
          { t: 'Carga 300–500 mcg EV en 30 min', d: 'Luego 50–100 mcg/día',
            say: 'Con el corticoide cubierto, viene la hormona. La levotiroxina se da endovenosa: una carga de trescientos a quinientos microgramos en treinta minutos, y luego cincuenta a cien microgramos al día de mantención.' },
          { t: '¿Por qué EV?', d: 'Íleo mixedematoso: absorción errática',
            say: '¿Por qué endovenosa? Porque el intestino también está apagado, con un íleo mixedematoso, y la absorción oral es impredecible. Si no hay formulación endovenosa, se da por sonda nasogástrica.' },
          { t: 'T3 en dosis bajas', d: 'Opcional, si se dispone',
            say: 'Si está disponible, se puede asociar liotironina, la T tres, en dosis bajas.' },
        ] },
        { title: 'Recuerda', tag: 'El orden', kind: 'alert', items: [
          { t: '1° hidrocortisona, 2° levotiroxina', d: 'O ambas juntas',
            say: 'Y recuerda el orden del protocolo: primera prioridad, hidrocortisona; segunda, levotiroxina. O ambas juntas, pero nunca la levotiroxina sola.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Soporte crítico',
      title: 'Calentar despacio, ventilar, cuidar el sodio',
      nodes: [
        { id: 'fri', col: 0, row: 0, k: 'start', t: 'Paciente hipotérmico', s: 'Vasoconstricción periférica' },
        { id: 'act', col: 1, row: 0, k: 'trap', t: 'Recalentamiento activo', s: 'Baños calientes, mantas eléctricas' },
        { id: 'sho', col: 2, row: 0, k: 'alert', t: 'Vasodilatación brusca', s: 'Shock e infarto' },
        { id: 'pas', col: 1, row: 1, k: 'good', t: 'Recalentamiento PASIVO', s: 'Mantas en sala temperada' },
        { id: 'vm', col: 0, row: 3, k: 'mech', t: 'Intubación y ventilación', s: 'Revertir la hipercapnia' },
        { id: 'na', col: 2, row: 3, k: 'mech', t: 'Restricción hídrica', s: 'Suero glucosado' },
        { id: 'hip', col: 3, row: 3, k: 'refer', t: 'NaCl 3% lento', s: 'Si Na < 120 sintomático' },
      ],
      edges: [
        { from: 'fri', to: 'act', label: 'error' }, { from: 'act', to: 'sho' }, { from: 'fri', to: 'pas', label: 'correcto' },
        { from: 'vm', to: 'na' }, { from: 'na', to: 'hip', label: 'si convulsiona' },
      ],
      steps: [
        { show: ['fri'], note: 'La vasoconstricción sostiene la presión',
          say: 'Vamos al soporte, empezando por la temperatura. Este paciente está frío, y sus vasos periféricos están contraídos. Esa vasoconstricción es lo que sostiene su poca presión.' },
        { show: ['act', 'sho'], note: 'Calentar rápido mata',
          say: 'Si lo calientas rápido, con baños calientes o mantas térmicas eléctricas, los vasos de la piel se abren de golpe, la sangre se queda en la periferia y el retorno al corazón colapsa. El resultado es un shock distributivo e incluso un infarto. Por eso el recalentamiento activo está prohibido.' },
        { show: ['pas'], note: 'Mantas comunes y una sala temperada',
          say: 'El recalentamiento correcto es estrictamente pasivo: mantas convencionales en una habitación calefaccionada. Lento a propósito.' },
        { show: ['vm'], note: 'La hipoventilación no espera',
          say: 'Luego la vía aérea: la hipoventilación con hipercapnia se trata con intubación y ventilación mecánica en la unidad de paciente crítico.' },
        { show: ['na'], note: 'El problema es exceso de agua',
          say: 'Y el sodio. Recuerda que la hiponatremia es por exceso de agua, así que se hace una restricción moderada de volumen, con sueros glucosados isotónicos, que además corrigen la hipoglicemia.' },
        { show: ['hip'], note: 'Solo la hiponatremia grave sintomática',
          say: 'Solo si la hiponatremia es grave, bajo ciento veinte y con síntomas como convulsiones, se usa solución salina hipertónica al tres por ciento, en infusión lenta y controlada.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Pongamos el rescate completo en un árbol, en el orden en que lo harías en la urgencia.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'El rescate en orden',
      head: ['Intervención', 'Correcto', 'Error frecuente'],
      rows: [
        { cells: ['Corticoide', 'Hidrocortisona 100 mg EV, antes o junto', 'Levotiroxina sola, o esperar el cortisol'],
          say: 'Repasemos las trampas en el orden del rescate. Primero el corticoide: hidrocortisona cien miligramos endovenosa, antes o junto con la hormona. El error es dar levotiroxina sola, o esperar el cortisol sérico.' },
        { cells: ['Hormona tiroidea', 'Levotiroxina 300–500 mcg EV de carga', 'Vía oral por un intestino con íleo'],
          say: 'La hormona: carga de trescientos a quinientos microgramos endovenosa. El error es confiar en la vía oral con un intestino paralizado.' },
        { cells: ['Temperatura', 'Recalentamiento pasivo con mantas', 'Baño caliente o manta eléctrica'],
          say: 'La temperatura: recalentamiento pasivo. El baño caliente o la manta eléctrica producen shock.' },
        { cells: ['Hiponatremia', 'Restricción hídrica; NaCl 3% si Na < 120 sintomático', 'Hemodiálisis o bolos de suero'],
          say: 'El sodio: restricción hídrica, y suero hipertónico solo si es grave y sintomático. La hemodiálisis no tiene lugar aquí.' },
        { cells: ['Gatillante', 'Hemocultivos y antibióticos empíricos', 'Olvidar buscar la infección'],
          say: 'Y el gatillante: hemocultivos y antibióticos empíricos, porque la infección es el desencadenante más frecuente.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 78 años con hipotiroidismo en abandono de tratamiento, encontrada inconsciente en su casa durante una ola de frío. En urgencia: coma, piel fría y engrosada, temperatura rectal 31,8 °C, FC 42 lpm, PA 80/50 mmHg, FR 8 rpm. Glicemia 55 mg/dL, Na 118 mEq/L, acidosis respiratoria hipercápnica, TSH > 100 mUI/L y T4 libre indetectable.',
      question: 'Además de intubarla, ¿cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Levotiroxina 500 mcg EV y esperar el cortisol sérico antes de dar corticoides' },
        { letter: 'B', text: 'Hidrocortisona 100 mg EV antes o junto con la carga de levotiroxina EV, y recalentamiento pasivo' },
        { letter: 'C', text: 'Baño de inmersión en agua caliente y levotiroxina oral' },
        { letter: 'D', text: 'Hemodiálisis de urgencia por la hiponatremia' },
        { letter: 'E', text: 'Levotiroxina 25 mcg oral y subir lentamente cada 6 semanas' },
      ],
      correct: 'B',
      explanation: 'Coma mixedematoso gatillado por frío: hipotermia, coma, bradicardia, hipotensión, hipoventilación, hiponatremia e hipoglicemia. Se da hidrocortisona 100 mg EV antes o junto con la levotiroxina EV de carga, sin esperar el cortisol, con recalentamiento pasivo.',
      say: {
        stem: 'Vamos al caso. Mujer de setenta y ocho años, hipotiroidea que abandonó el tratamiento, encontrada inconsciente en su casa durante una ola de frío. Llega en coma, con la piel fría y engrosada, temperatura rectal de treinta y uno coma ocho, frecuencia de cuarenta y dos, presión de ochenta cincuenta y ocho respiraciones por minuto. Glicemia de cincuenta y cinco, sodio de ciento dieciocho, acidosis respiratoria, TSH sobre cien y T cuatro libre indetectable.',
        question: 'Además de intubarla, ¿cuál es la conducta inmediata más adecuada?',
        options: 'Las opciones: levotiroxina endovenosa esperando el cortisol, hidrocortisona antes o junto con la levotiroxina endovenosa y recalentamiento pasivo, baño caliente con levotiroxina oral, hemodiálisis, o levotiroxina oral en dosis baja. Piénsalo.',
        answer: 'Es la B. Anciana, invierno, hipotermia, coma, bradicardia, hiponatremia: coma mixedematoso. Y fíjate en la hipoglicemia, que te avisa de la suprarrenal. La A es la trampa más peligrosa: la dosis de levotiroxina es correcta, pero esperar el cortisol puede desencadenar una crisis adisoniana. La C cae por el baño caliente, y la E, porque la dosis lenta es para el hipotiroidismo de la consulta, no para esta urgencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 153',
      stem: 'Paciente con piel seca, bradicardia, hipotensión, compromiso de conciencia, TSH 100 y T4 libre muy baja.',
      question: '¿Diagnóstico?',
      options: [
        { letter: 'A', text: 'Coma mixedematoso' },
        { letter: 'B', text: 'Hipotiroidismo subclínico severo' },
        { letter: 'C', text: 'Insuficiencia suprarrenal aguda' },
        { letter: 'D', text: 'Encefalopatía hipoglucémica' },
        { letter: 'E', text: 'Hipotiroidismo primario descompensado' },
      ],
      correct: 'A',
      explanation: 'Hipotiroidismo grave (TSH 100, T4 libre muy baja) con compromiso de conciencia, bradicardia e hipotensión: coma mixedematoso. El compromiso de conciencia y la inestabilidad hemodinámica lo separan de un hipotiroidismo descompensado sin urgencia vital.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de enero de dos mil veintitrés, y es corta. Paciente con piel seca, bradicardia, hipotensión, compromiso de conciencia, TSH de cien y T cuatro libre muy baja.',
        question: '¿Cuál es el diagnóstico?',
        options: 'Las opciones: coma mixedematoso, hipotiroidismo subclínico severo, insuficiencia suprarrenal aguda, encefalopatía hipoglicémica, o hipotiroidismo primario descompensado. Piénsalo.',
        answer: 'Es la A, coma mixedematoso. Hipotiroidismo grave más compromiso de conciencia, bradicardia e hipotensión: es la tríada. La E es la trampa, porque técnicamente es un hipotiroidismo descompensado; pero el compromiso de conciencia con inestabilidad hemodinámica tiene nombre propio, y ese nombre cambia la conducta. La B cae de inmediato: con la T cuatro libre baja, no es subclínico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 30',
      stem: 'Una paciente de 46 años, con antecedentes de anemia perniciosa y vitíligo, es traída al servicio de urgencia por un cuadro de malestar general y desorientación. Sus familiares relatan que ha presentado compromiso del estado general y astenia de 3 semanas de evolución, asociando recientemente a somnolencia y desorientación. Al examen físico está en sopor superficial y sus signos vitales muestran presión arterial: 90/60 mmHg, frecuencia cardíaca: 62 lpm, temperatura: 36 °C. En el examen segmentario se objetiva lengua de gran tamaño y edema de extremidades inferiores. Al examen neurológico está soporosa, no tiene focalidad neurológica y se observa enlentecimiento de la fase de relajación de los reflejos osteotendíneos. Los exámenes de laboratorio muestran sodio: 130 mEq/L, hemoglobina: 10 g/dl, hematocrito: 31%, VCM 102 fL, glóbulos blancos: 5.200/mm³ y plaquetas: 180.000/mm³. Se solicita TAC de cerebro, que no muestra alteraciones.',
      question: '¿Cuál es el tratamiento inicial más adecuado?',
      options: [
        { letter: 'A', text: 'Suero hipertónico endovenoso' },
        { letter: 'B', text: 'Suero fisiológico endovenoso' },
        { letter: 'C', text: 'Levotiroxina endovenosa' },
        { letter: 'D', text: 'Corticoides endovenosos' },
        { letter: 'E', text: 'Antibióticos endovenosos' },
      ],
      correct: 'D',
      explanation: 'Coma mixedematoso en una tiroiditis autoinmune (vitíligo y anemia perniciosa sugieren autoinmunidad poliglandular). La primera medida son los corticoides EV, seguidos de la levotiroxina EV: darla sola puede precipitar una insuficiencia suprarrenal aguda.',
      say: {
        stem: 'Y la más reciente, del EUNACOM de diciembre de dos mil veinticinco. Mujer de cuarenta y seis años con anemia perniciosa y vitíligo, con tres semanas de astenia, y ahora somnolencia y desorientación. Está soporosa, con presión de noventa sesenta, frecuencia de sesenta y dos, lengua grande, edema de piernas y relajación lenta de los reflejos. Tiene sodio de ciento treinta, anemia macrocítica, y un escáner cerebral normal.',
        question: '¿Cuál es el tratamiento inicial más adecuado?',
        options: 'Las opciones: suero hipertónico, suero fisiológico, levotiroxina endovenosa, corticoides endovenosos, o antibióticos. Piénsalo.',
        answer: 'Es la D, corticoides endovenosos. Es un coma mixedematoso, y fíjate en las pistas: vitíligo y anemia perniciosa te dicen autoinmunidad de varias glándulas, así que la suprarrenal puede estar fallando. Por eso primero el corticoide y después la levotiroxina. La C es la trampa perfecta: es el tratamiento correcto, pero en el orden equivocado. Y el suero hipertónico cae porque el sodio de ciento treinta no es grave.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Reconocerlo', tag: 'Sospecha clínica', kind: 'key', items: [
          { t: 'Anciana, invierno, fría y soporosa', d: 'Con bradicardia e hiponatremia',
            say: 'Cerremos con las reglas de oro. Anciana en invierno, fría, soporosa y bradicárdica, con hiponatremia: coma mixedematoso. Y busca siempre el gatillante, sobre todo la infección.' },
        ] },
        { title: 'El orden', tag: 'Salva la vida', kind: 'alert', items: [
          { t: 'Hidrocortisona 100 mg EV primero', d: 'Antes o junto con la levotiroxina',
            say: 'Primero hidrocortisona endovenosa, cien miligramos, antes o junto con la levotiroxina, sin esperar el cortisol.' },
          { t: 'Levotiroxina EV 300–500 mcg', d: 'Luego 50–100 mcg/día',
            say: 'Luego la levotiroxina endovenosa, con una carga de trescientos a quinientos microgramos.' },
        ] },
        { title: 'Soporte', tag: 'Sin apuro', kind: 'pharma', items: [
          { t: 'Recalentamiento pasivo', d: 'Nunca baño caliente',
            say: 'El recalentamiento es pasivo, con mantas. Ventilación si hipoventila, restricción hídrica, y suero hipertónico solo si el sodio está bajo ciento veinte con síntomas. Si te llevas una sola idea de hoy: en el coma mixedematoso, el corticoide va antes que la hormona, y el calor va despacio. En la próxima clase vemos el hipotiroidismo en el embarazo y en el recién nacido. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Rescate del coma mixedematoso',
    root: N('start', 'Sopor + hipotermia + bradicardia', 'Anciana, invierno, hipotiroidea',
      'Paciente anciana, en invierno, con sopor, hipotermia y bradicardia, muchas veces con hipotiroidismo conocido o tratamiento abandonado. La sospecha es clínica, y el tratamiento parte antes de los resultados.',
      ['', N('q', '¿Ventila bien?', 'Hipercapnia, bradipnea',
        'Lo primero es la vía aérea. ¿Está ventilando? La hipoventilación con hipercapnia es frecuente.',
        ['NO', N('alert', 'Intubación y ventilación', 'En unidad de paciente crítico',
          'Si hipoventila, intubación y ventilación mecánica, y el paciente va a la unidad de paciente crítico.')],
        ['SÍ, y en todos', N('do', 'Hidrocortisona 100 mg EV', 'Antes o junto con la hormona',
          'En todos, lo primero farmacológico es la hidrocortisona endovenosa, cien miligramos, sin esperar el cortisol sérico.',
          ['Luego', N('do', 'Levotiroxina EV 300–500 mcg', 'Luego 50–100 mcg/día',
            'Después, o junto, la carga de levotiroxina endovenosa, y luego la mantención diaria.',
            ['Soporte', N('q', '¿Qué más corregir?', 'Temperatura, sodio, gatillante',
              'Con el corticoide y la hormona en marcha, se corrige el resto.',
              ['Hipotermia', N('ok', 'Recalentamiento pasivo', 'Mantas, sala temperada',
                'La hipotermia, con recalentamiento pasivo. Nunca baño caliente ni mantas eléctricas.')],
              ['Na < 120 sintomático', N('refer', 'NaCl 3% lento', 'Si no: restricción hídrica',
                'La hiponatremia, con restricción hídrica, y solución hipertónica al tres por ciento solo si es grave y sintomática.')],
              ['Gatillante', N('do', 'Hemocultivos + antibióticos', 'Amplio espectro',
                'Y el gatillante: hemocultivos y antibióticos empíricos de amplio espectro, porque la infección es el desencadenante más frecuente.')])])])])]),
  },
};
