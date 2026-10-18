// Clase 17.14 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1), reescrito desde el tema del libro. Tier 3 del libro.
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-14). Códigos del Perfil: 5.01.2.002 Agitación psicomotora y 5.01.1.014 Delirium (books/data/v3_topic_codes.json).
// Preguntas reales (class_questions.cjs psiq-14 y --search "agitación psicomotora|contención|olanzapina|síndrome confusional|delirium"):
//   Enero 2023 P130 (agitación con agresión verbal: contención verbal y ambiental como conducta inicial), Julio 2016 P8 (delirium vespertino en neumonía),
//   Julio 2016 P138 (delirium nocturno en pielonefritis: haloperidol oral y benzodiacepinas contraindicadas).
// DESCARTADAS: Diciembre 2022 P30 (agresión verbal sin agresión física; la clave del banco es «contención física», lo que contradice el escalamiento del libro: primero verbal);
//   Diciembre 2025 P24 (Alzheimer con delirium: la clave es haloperidol pero la explicación del banco defiende risperidona como correcta; clave y explicación se contradicen);
//   Julio 2013 P130 (haloperidol EV: el libro da la vía oral o intramuscular, y la explicación del banco la llama muy discutible); Diciembre 2019 P8 (distonía por haloperidol, tema de la clase de esquizofrenia).
//   Repiten delirium y no se usan: Julio 2013 P68 y P168, Enero 2023 P172, Julio 2019 P139, Diciembre 2018 P119 (geriatría, código 1.07.2.005). Las de delirium tremens son de la clase 15.
// Las cuatro preguntas del libro tienen etiqueta «Banco Oficial AEE» sin fecha: no se usan porque hay reales; el caso clínico es la viñeta del libro.
// Imágenes: ninguna (no hay foto útil de agitación ni de delirium).
// Animación: gráfico solo de código (psiq_nuevas.html?v=agitacion): escalera de la escala RASS y de la conducta, con la advertencia de olanzapina más benzodiacepina.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-14',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Agitación psicomotora y delirium: descartar lo orgánico, contener por escalones y no mezclar lo que mata',
      say: 'Bienvenido. Hoy entramos a una de las situaciones más complejas de urgencia: el paciente agitado. Es un síndrome, no una enfermedad, y el examen pregunta tres cosas. Primero, descartar la causa orgánica que puede matar, como el delirium. Segundo, el orden de la contención: palabra, fármaco y, solo al final, sujeción. Y tercero, qué fármacos se pueden combinar y cuál combinación está prohibida. Partamos por quién es el paciente.',
    },

    {
      type: 'points',
      kicker: 'Primer paso',
      title: 'Antes de sedar: ¿es orgánica?',
      cards: [
        { title: 'Causas orgánicas', tag: 'Descartar primero', kind: 'alert', items: [
          { t: 'Glicemia capilar y oximetría', d: 'Hipoglicemia e hipoxia',
            say: 'La agitación psicomotora es una hiperactividad motora desorganizada, con tensión interna, agresividad e impulsividad, que pone en riesgo al paciente y al equipo. Antes de sedar a nadie, hay que descartar la causa orgánica. Lo primero, siempre, es la glicemia capilar y la oximetría de pulso, porque la hipoglicemia y la hipoxia matan y se corrigen en minutos.' },
          { t: 'TEC, ACV, meningitis, sepsis', d: 'Retención de orina, fecaloma',
            say: 'Después piensa en un traumatismo de cráneo, un accidente cerebrovascular, una meningitis o encefalitis, una sepsis, y en cosas tan simples como una retención de orina o un fecaloma.' },
          { t: 'Intoxicación o abstinencia', d: 'Alcohol, cocaína, benzodiacepinas',
            say: 'Y las intoxicaciones y abstinencias: alcohol, cocaína y benzodiacepinas. Si el origen es orgánico, el delirium hiperactivo, el tratamiento es la causa.' },
        ] },
        { title: 'Causas psiquiátricas', tag: 'Después', kind: 'key', items: [
          { t: 'Manía, brote psicótico', d: 'Pánico grave, personalidad límite',
            say: 'Las causas psiquiátricas primarias son la crisis maníaca del bipolar, el brote psicótico de la esquizofrenia, la crisis de pánico grave y la descompensación impulsiva de una personalidad límite o antisocial.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Orgánica o psiquiátrica',
      title: 'Cómo se distinguen en el box',
      head: ['Dato', 'Orgánica (delirium)', 'Psiquiátrica primaria'],
      rows: [
        { cells: ['Conciencia', 'Fluctuante, desorientado', 'Vigil, orientado'],
          say: 'La conciencia es la primera pista. En la causa orgánica fluctúa y el paciente está desorientado en tiempo y espacio; en la psiquiátrica está vigil, lúcido y orientado.' },
        { cells: ['Inicio', 'Agudo; peor de noche', 'Insidioso; antecedentes'],
          say: 'El inicio es agudo, en horas o días, y empeora en la noche, lo que se llama sundowning. En la psiquiátrica es insidioso o subagudo, con antecedentes previos.' },
        { cells: ['Alucinaciones', 'Visuales o táctiles', 'Auditivas'],
          say: 'Las alucinaciones del delirium son visuales o táctiles, como sombras o animalitos. Las de la psicosis son auditivas, complejas o en tercera persona.' },
        { cells: ['Signos vitales', 'Alterados, focalidad', 'Normales'],
          say: 'En la causa orgánica los signos vitales suelen estar alterados, con fiebre, sudoración, taquicardia o focalidad neurológica. En la psiquiátrica son normales, salvo la taquicardia por el esfuerzo.' },
        { cells: ['Manejo', 'Tratar la causa', 'Contención escalonada'],
          say: 'Y el manejo: en la orgánica se trata la causa médica, con glicemia, oxígeno, antibióticos o sonda. En la psiquiátrica se aplica la contención escalonada con antipsicóticos o benzodiacepinas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Delirium',
      title: 'Criterios y formas del delirium',
      cards: [
        { title: 'Criterios DSM-5', tag: 'Disfunción cerebral aguda', kind: 'criteria', items: [
          { t: 'Atención y conciencia alteradas', d: 'Menor orientación al entorno',
            say: 'El delirium, o síndrome confusional agudo, es una disfunción cerebral aguda y reversible de causa médica. El criterio central es la alteración de la atención y de la conciencia.' },
          { t: 'Inicio agudo y curso fluctuante', d: 'Horas a días, cambio del nivel basal',
            say: 'Con inicio agudo, en horas o días, y curso que fluctúa durante el día, como un cambio respecto de cómo estaba el paciente.' },
          { t: 'Otra alteración cognitiva', d: 'No es demencia ni coma',
            say: 'Se agrega otra alteración cognitiva, como la memoria, el lenguaje o las alucinaciones visuales, que no se explica por una demencia ni por un coma, y hay una causa médica, un fármaco, una intoxicación o una abstinencia.' },
        ] },
        { title: 'Formas y tamizaje', tag: 'Reconocerlo', kind: 'key', items: [
          { t: 'Hipoactiva: la más frecuente', d: 'Subdiagnosticada, peor pronóstico',
            say: 'Hay una forma hiperactiva, con agitación, una hipoactiva y una mixta. La hipoactiva, la del paciente silencioso y somnoliento, es la más frecuente, la más subdiagnosticada y la de peor pronóstico.' },
          { t: 'CAM: 3 de 4 elementos', d: 'Inicio agudo, inatención, pensamiento, conciencia',
            say: 'Se tamiza con el CAM: inicio agudo y curso fluctuante, inatención, y pensamiento desorganizado o alteración del nivel de conciencia.' },
          { t: 'Demencia: insidiosa, sin fluctuar', d: 'Depresión y psicosis: atención conservada',
            say: 'Y se diferencia de la demencia, que es insidiosa y sin fluctuación, aunque es el principal factor de riesgo, y de la depresión o la psicosis, que conservan la atención y la conciencia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Delirium',
      title: 'Buscar la causa y tratarla',
      cards: [
        { title: 'Causas a buscar siempre', tag: 'Las más frecuentes', kind: 'alert', items: [
          { t: 'Fármacos', d: 'Anticolinérgicos, benzodiacepinas, opioides, corticoides',
            say: 'Las causas se buscan siempre. Los fármacos, sobre todo los anticolinérgicos, las benzodiacepinas, los opioides, los corticoides y los antihistamínicos.' },
          { t: 'Infección, hipoxia, deshidratación', d: 'Urinaria y neumonía; Na, Ca',
            say: 'Luego las infecciones, en especial la urinaria y la neumonía, la hipoxia, la deshidratación y los trastornos del sodio y del calcio.' },
          { t: 'Retención, fecaloma, dolor', d: 'Abstinencia y falla orgánica',
            say: 'Y la retención urinaria, el fecaloma, el dolor, la abstinencia de alcohol o sedantes y cualquier falla de órgano.' },
        ] },
        { title: 'Estudio y tratamiento', tag: 'Qué pedir y qué hacer', kind: 'key', items: [
          { t: 'Signos, glicemia, hemograma, electrolitos', d: 'Orina, ECG, radiografía de tórax',
            say: 'El estudio parte con signos vitales, saturación y glicemia capilar, hemograma, electrolitos, función renal y hepática, orina completa, electrocardiograma y radiografía de tórax. El TAC se pide si hay focalidad, trauma o causa no aclarada; la punción lumbar, si hay fiebre y signos meníngeos.' },
          { t: 'Reorientar, luz, sueño, lentes', d: 'Sin contenciones ni sondas',
            say: 'El tratamiento es tratar la causa y aplicar medidas no farmacológicas: reorientar, luz natural, dormir bien, lentes y audífonos, movilizar y acompañar. Se evitan las contenciones y las sondas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Escalón 1',
      title: 'Seguridad y desescalada verbal',
      cards: [
        { title: 'Seguridad de la escena', tag: 'Antes de acercarse', kind: 'alert', items: [
          { t: 'Nunca entrar solo', d: 'Puerta abierta',
            say: 'Si no es una causa orgánica a tratar de inmediato, entras al protocolo escalonado. Antes de cualquier contacto, aseguras la escena. Nunca entras solo a evaluar a un paciente agitado, y la puerta del box queda abierta.' },
          { t: 'Tú entre el paciente y la salida', d: 'Distancia de dos brazos',
            say: 'Te ubicas siempre entre el paciente y la salida, de modo que tengas una vía de escape libre, y mantienes una distancia de al menos dos brazos.' },
        ] },
        { title: 'Desescalada verbal', tag: 'Primer paso obligatorio', kind: 'key', items: [
          { t: 'Voz calmosa, baja y firme', d: 'Sin movimientos bruscos',
            say: 'La desescalada verbal es el primer paso obligatorio. Hablas con un tono calmo, bajo y firme, sin movimientos bruscos y sin invadir su espacio.' },
          { t: 'Escuchar y validar el malestar', d: 'No discutir el delirio',
            say: 'Escuchas con empatía y validas el malestar, pero no discutes el delirio ni adoptas una actitud punitiva o desafiante.' },
          { t: 'Ofrecer medicación voluntaria', d: 'Alternativas, no órdenes',
            say: 'Y ofreces alternativas voluntarias, como tomar un medicamento. Esto es lo que pregunta el examen cuando habla de la conducta inicial.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Escala RASS',
      title: 'Cuánta agitación, qué escalón',
      head: ['RASS', 'Cómo está', 'Qué haces'],
      rows: [
        { cells: ['+1 Inquieto', 'Ansioso, sin agresividad', 'Desescalada verbal y observar'],
          say: 'Plus uno, inquieto: ansioso y aprensivo, con movimientos que no son agresivos. Se hace desescalada verbal en un ambiente tranquilo y se observa.' },
        { cells: ['+2 Agitado', 'Movimientos frecuentes, no coordinados', 'Verbal y ansiolítico o atípico oral'],
          say: 'Plus dos, agitado: movimientos frecuentes y descoordinados. Se combina contención verbal con un ansiolítico oral o un antipsicótico atípico.' },
        { cells: ['+3 Muy agitado', 'Agresivo, se saca vías', 'Haloperidol y lorazepam parenterales'],
          say: 'Plus tres, muy agitado: es agresivo, se arranca las vías y no coopera. Aquí corresponde la contención farmacológica parenteral, haloperidol más lorazepam.' },
        { cells: ['+4 Combativo', 'Violento, peligro inmediato', 'Contención física de 4 puntos y fármacos IM'],
          say: 'Y plus cuatro, combativo: violento, con peligro inmediato para el personal. Se necesita contención física con un equipo coordinado y fármacos por vía intramuscular.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Escalón 2',
      title: 'Contención farmacológica: vía y combinación',
      cards: [
        { title: 'Si coopera: vía oral', tag: 'La preferida', kind: 'pharma', items: [
          { t: 'Lorazepam 2 mg VO', d: 'O risperidona 2 mg VO',
            say: 'Si la desescalada verbal fracasa o hay riesgo inminente de violencia, pasas a la contención farmacológica. La vía oral es la preferida si el paciente colabora: lorazepam dos miligramos, o risperidona dos miligramos.' },
          { t: 'Olanzapina 10 mg bucodispersable', d: 'Comprimido que se disuelve',
            say: 'También sirve la olanzapina de diez miligramos en comprimido bucodispersable, que se disuelve en la boca.' },
        ] },
        { title: 'Si rechaza: intramuscular', tag: 'Esquema clásico', kind: 'pharma', items: [
          { t: 'Haloperidol 5 mg + lorazepam 2 a 4 mg IM', d: 'Misma jeringa o por separado',
            say: 'Si rechaza la vía oral o la agitación es grave, el esquema de elección es haloperidol cinco miligramos más lorazepam dos a cuatro miligramos, por vía intramuscular. Pueden ir en la misma jeringa o por separado.' },
          { t: 'Más rápido, menos dosis, sin distonía', d: 'Sinergia sedante',
            say: 'La combinación sedó más rápido que cada uno por separado, permite usar dosis menores, y la benzodiacepina previene la distonía aguda que produce el haloperidol.' },
          { t: 'Alternativa: olanzapina o aripiprazol IM', d: 'Olanzapina 10 mg; aripiprazol 9,75 mg',
            say: 'La alternativa son los atípicos intramusculares: olanzapina diez miligramos o aripiprazol nueve coma setenta y cinco miligramos.' },
        ] },
        { title: 'Prohibido', tag: 'Contraindicación mortal', kind: 'alert', items: [
          { t: 'Olanzapina IM + benzodiacepina parenteral', d: 'Esperar 2 horas',
            say: 'Y aquí está la trampa que más se pregunta. Está prohibido dar olanzapina intramuscular junto con una benzodiacepina parenteral, como el lorazepam intramuscular, por el riesgo de colapso cardiorrespiratorio, hipotensión refractaria y muerte. Si usaste olanzapina, deben pasar al menos dos horas antes de considerar una benzodiacepina.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Fármacos en urgencias',
      title: 'Dosis, ventaja y advertencia',
      head: ['Fármaco', 'Dosis', 'Advertencia crítica'],
      rows: [
        { cells: ['Haloperidol IM', '2,5 a 5 mg (máx. 15-20 mg/día)', 'Distonía aguda y QTc largo'],
          say: 'Haloperidol intramuscular, dos y medio a cinco miligramos, máximo quince a veinte al día. Sedación rápida sin depresión respiratoria profunda, pero con riesgo de distonía aguda y de alargar el intervalo QT.' },
        { cells: ['Lorazepam IM', '2 a 4 mg (máx. 8 mg/día)', 'Evitar en ancianos con delirium'],
          say: 'Lorazepam intramuscular, dos a cuatro miligramos, máximo ocho al día. Se absorbe bien, pero en el anciano con delirium empeora la confusión.' },
        { cells: ['Haloperidol + lorazepam IM', '5 mg + 2 mg', 'Vigilar saturación y respiración'],
          say: 'La combinación de cinco más dos es la sinergia de elección, más rápida y previene la distonía. Se vigila la saturación y la frecuencia respiratoria.' },
        { cells: ['Olanzapina IM', '10 mg (5 mg en ancianos)', 'No mezclar con lorazepam IM'],
          say: 'Olanzapina intramuscular, diez miligramos y cinco en los ancianos. Controla bien la hostilidad, pero nunca se mezcla con lorazepam intramuscular.' },
        { cells: ['Haloperidol en ancianos', '0,5 a 1 mg VO o IM', 'Nunca dosis de adulto joven'],
          say: 'Y el haloperidol en el adulto mayor, medio a un miligramo oral o intramuscular, jamás con la dosis del adulto joven.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Escalón 3',
      title: 'Contención física: último recurso y con ley',
      cards: [
        { title: 'Cómo se hace', tag: 'Equipo y seguridad', kind: 'criteria', items: [
          { t: 'Equipo de 5 personas', d: 'Bajo el mando del médico',
            say: 'La contención física mecánica es excepcional y se indica solo si las medidas verbales y farmacológicas no bastan para evitar un daño inminente. Se hace con un equipo coordinado de al menos cinco personas, una para la cabeza y una por cada extremidad, bajo el mando del médico.' },
          { t: 'Cuatro puntos, a la estructura de la cama', d: 'Nunca a las barandas móviles',
            say: 'Son cuatro puntos: muñecas y tobillos a la estructura rígida de la cama, nunca a las barandas móviles, con la cabecera elevada entre treinta y cuarenta y cinco grados para evitar la broncoaspiración.' },
        ] },
        { title: 'Ley 21.331', tag: 'Exigencia legal', kind: 'alert', items: [
          { t: 'Orden médica escrita en la ficha', d: 'Justificación, hora de inicio y término previsto',
            say: 'La Ley veintiuno mil trescientos treinta y uno exige una orden médica escrita en la ficha, con la justificación, la hora de inicio y el término previsto.' },
          { t: 'Control cada 15 a 30 minutos', d: 'Signos, saturación, perfusión',
            say: 'Y una vigilancia continua: signos vitales, saturación y perfusión de las extremidades cada quince a treinta minutos.' },
          { t: 'Retiro progresivo apenas se calme', d: 'Una sujeción a la vez',
            say: 'Las sujeciones se retiran una a una apenas el paciente recupera la calma conductual. Nunca se deja en posición prona.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Poblaciones especiales',
      title: 'El adulto mayor con delirium',
      cards: [
        { title: 'Qué se usa', tag: 'Dosis geriátrica', kind: 'pharma', items: [
          { t: 'Haloperidol 0,5 a 1 mg VO o IM', d: 'Solo si hay riesgo',
            say: 'En el adulto mayor con delirium hiperactivo, el fármaco para la agitación que pone en riesgo es el haloperidol a dosis muy bajas, medio a un miligramo, y se reserva para cuando hay peligro físico.' },
          { t: 'Quetiapina 25 mg VO', d: 'Alternativa atípica',
            say: 'Una alternativa es la quetiapina, veinticinco miligramos por vía oral.' },
        ] },
        { title: 'Qué no se usa', tag: 'Evitar', kind: 'alert', items: [
          { t: 'Benzodiacepinas en monoterapia', d: 'Salvo abstinencia de alcohol o sedantes',
            say: 'Las benzodiacepinas están contraindicadas en monoterapia, porque empeoran la desorientación, pueden dar un efecto paradójico y duplican el riesgo de caídas y de broncoaspiración. La excepción es la abstinencia de alcohol o de sedantes.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'La escalera de la agitación',
      images: [
        { src: 'animaciones/psiq-14/A1_escalera_agitacion.mp4', label: 'RASS y escalones de contención', credit: 'Gráfico y animación propios' },
      ],
      steps: [
        { note: 'A más RASS, más escalones; olanzapina más lorazepam no',
          say: 'Mira cómo sube el puntaje y cómo cambia la conducta. Con un puntaje bajo, basta la palabra. Si sube, se suma el fármaco, primero oral y luego intramuscular. Solo en el puntaje más alto se agrega la contención física, con equipo, orden escrita y vigilancia. Y observa la advertencia que se enciende al lado de la olanzapina: nunca se combina con una benzodiacepina parenteral.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del paciente agitado a la conducta, con la causa orgánica por delante.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Agitación: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Agitado y agresivo verbal, sin violencia física', 'Contención verbal y ambiental', 'Sujetar o inyectar de entrada'],
          say: 'Agitado, con agresión verbal pero sin violencia física: primero contención verbal y ambiental. Sujetar o inyectar de entrada es saltarse el escalón.' },
        { cells: ['Agitación sin causa conocida', 'Glicemia y oximetría primero', 'Sedar sin descartar lo orgánico'],
          say: 'Agitación sin causa conocida: glicemia y oximetría antes de sedar. Sedar sin descartar una hipoglicemia o una hipoxia es el error que mata.' },
        { cells: ['Psicosis agitada que rechaza la vía oral', 'Haloperidol más lorazepam IM', 'Olanzapina IM más lorazepam IM'],
          say: 'Psicosis agitada que rechaza la vía oral: haloperidol más lorazepam intramusculares. Olanzapina más lorazepam intramusculares es la combinación prohibida.' },
        { cells: ['Anciano hospitalizado, confuso de noche', 'Tratar la causa; haloperidol bajo', 'Benzodiacepina'],
          say: 'Anciano hospitalizado, confuso y agitado de noche: se trata la causa y, si hay riesgo, haloperidol en dosis bajas. La benzodiacepina empeora el cuadro.' },
        { cells: ['Alucinaciones visuales, fluctúa, fiebre', 'Delirium orgánico', 'Esquizofrenia o psicosis'],
          say: 'Alucinaciones visuales con curso fluctuante y signos vitales alterados: delirium orgánico. Llamarlo psicosis es el error de diagnóstico.' },
        { cells: ['Sujeción necesaria', 'Orden escrita y control cada 15-30 min', 'Indicación verbal, sin registro'],
          say: 'Y si la sujeción es necesaria: orden médica escrita y control cada quince a treinta minutos. La indicación verbal sin registro no cumple la ley.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 26 años con esquizofrenia paranoide que abandonó el tratamiento hace 3 meses. Lo trasladan a urgencias porque en su domicilio se encerró con un cuchillo, rompió mobiliario y amenazó de muerte a su madre diciendo que estaba «poseída por un demonio». En el box está hostil, gritando insultos, con los puños cerrados, lanzando patadas contra las camillas e intentando golpear a quien se acerca. El médico intenta una desescalada verbal manteniendo la distancia, pero el paciente lanza una bandeja metálica a la enfermera y amenaza con «romperles el cuello a todos». Ya se descartaron hipoglicemia e hipoxia.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Repetir la desescalada verbal hasta que se calme, sin medicación' },
        { letter: 'B', text: 'Contención física transitoria con equipo de 5 personas, haloperidol 5 mg + lorazepam 2 mg IM, registro escrito en la ficha y control de signos cada 15 a 30 minutos' },
        { letter: 'C', text: 'Olanzapina 10 mg IM + lorazepam 4 mg IM en la misma jeringa' },
        { letter: 'D', text: 'Risperidona oral y dejarlo en el box sin sujeción' },
        { letter: 'E', text: 'Solo contención física hasta que se duerma, sin fármacos' },
      ],
      correct: 'B',
      explanation: 'Agitación severa (RASS +4) por descompensación psicótica, con fracaso de la contención verbal y agresión activa. Se inmoviliza de forma transitoria con un equipo coordinado, se administra la combinación de elección haloperidol + lorazepam IM, se vigilan signos vitales, saturación y perfusión cada 15 a 30 minutos y se deja la constancia escrita que exige la Ley 21.331. La olanzapina IM con una benzodiacepina parenteral está contraindicada.',
      say: {
        stem: 'Un hombre de veintiséis años con esquizofrenia abandonó el tratamiento hace tres meses. En su casa se encerró con un cuchillo y amenazó de muerte a su madre. En el box grita insultos, lanza patadas, y cuando el médico intenta calmarlo con la palabra, le tira una bandeja a la enfermera y amenaza con romperles el cuello a todos. Ya se descartaron hipoglicemia e hipoxia.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: repetir la desescalada verbal sin medicación; contención física con equipo más haloperidol y lorazepam intramusculares con registro y control; olanzapina y lorazepam en la misma jeringa; risperidona oral sin sujeción; o solo contención física sin fármacos. Piénsalo.',
        answer: 'Es la B. La palabra ya fracasó y hay agresión activa, el puntaje más alto de la escala. Se inmoviliza de forma transitoria con un equipo, se da haloperidol más lorazepam intramusculares, se registra por escrito según la ley y se controlan los signos cada quince a treinta minutos. La C es la trampa: olanzapina intramuscular con una benzodiacepina parenteral puede producir un colapso cardiorrespiratorio. Y la E trata solo la conducta sin tratar la agitación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 130',
      stem: 'Paciente ingresado con agitación, agresión verbal y movimientos inquietos de manos y pies.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Haloperidol 5 mg IM inmediato' },
        { letter: 'B', text: 'Contención verbal y ambiental' },
        { letter: 'C', text: 'Lorazepam 2 mg IM' },
        { letter: 'D', text: 'Contención física' },
        { letter: 'E', text: 'Olanzapina 10 mg IM' },
      ],
      correct: 'B',
      explanation: 'En una agitación con agresión solo verbal, sin violencia física, la conducta inicial es la contención verbal y ambiental: desescalada, ambiente tranquilo y distancia de seguridad. Los fármacos parenterales y la sujeción son escalones posteriores si fracasa la palabra o hay riesgo inminente.',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un paciente ingresado presenta agitación, agresión verbal y movimientos inquietos de manos y pies.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: haloperidol intramuscular inmediato; contención verbal y ambiental; lorazepam intramuscular; contención física; o olanzapina intramuscular. Piénsalo.',
        answer: 'Es la B. La agresión es solo verbal y el paciente no es violento, así que se parte por el primer escalón, que es la palabra y el ambiente. Las tentaciones son la A y la E, que saltan directo al fármaco inyectable, y la D, que es el último recurso. Fíjate en que la pregunta dice conducta inicial: ese es el escalón uno.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 8',
      stem: 'Mujer de 81 años, hospitalizada por neumonía, presenta agitación psicomotora en las noches, agrediendo al personal hospitalario y no reconoce a sus familiares. En el día, por el contrario, está en buenas condiciones, tranquila y no recuerda lo sucedido.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Esquizofrenia' },
        { letter: 'B', text: 'Accidente vascular encefálico' },
        { letter: 'C', text: 'Delirium' },
        { letter: 'D', text: 'Demencia' },
        { letter: 'E', text: 'Trastorno delirante' },
      ],
      correct: 'C',
      explanation: 'Delirium clásico: alteración de la atención y de la conciencia de inicio agudo, desorientación y agitación, con curso fluctuante que empeora al atardecer y en la noche (sundowning), en una anciana hospitalizada por una infección.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Una mujer de ochenta y un años, hospitalizada por neumonía, se agita por las noches, agrede al personal y no reconoce a sus familiares. Durante el día está tranquila y no recuerda lo ocurrido.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: esquizofrenia; accidente vascular; delirium; demencia; o trastorno delirante. Piénsalo.',
        answer: 'Es la C. Inicio agudo en una anciana hospitalizada por una infección, con confusión, curso que fluctúa y empeoramiento nocturno: es un delirium. La D tienta porque es una persona mayor con confusión, pero la demencia es insidiosa y no fluctúa de esta manera. Y el trastorno delirante y la esquizofrenia no se inician de golpe con alteración de la atención.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 138',
      stem: 'Una paciente de 78 años, diabética e hipertensa, es hospitalizada por una pielonefritis aguda. Estaba en tratamiento con enalapril, hidroclorotiazida y metformina. Durante el día está tranquila, pero en la noche se agita y dice que la tienen secuestrada.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar benzodiacepinas en la noche' },
        { letter: 'B', text: 'Indicar haloperidol oral' },
        { letter: 'C', text: 'Agregar glibenclamida al tratamiento' },
        { letter: 'D', text: 'Disminuir la dosis de metformina' },
        { letter: 'E', text: 'Administrar suero fisiológico' },
      ],
      correct: 'B',
      explanation: 'Es un delirium en una paciente hospitalizada por una infección. Se trata la causa y, si la agitación lo requiere, se usa haloperidol en dosis bajas. Las benzodiacepinas están contraindicadas en el delirium no alcohólico porque empeoran la confusión y aumentan el riesgo de caídas.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Una paciente de setenta y ocho años, diabética e hipertensa, está hospitalizada por pielonefritis. De día está tranquila, pero de noche se agita y dice que la tienen secuestrada.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: benzodiacepinas en la noche; haloperidol oral; agregar glibenclamida; disminuir la metformina; o suero fisiológico. Piénsalo.',
        answer: 'Es la B. Es un delirium por la infección, con empeoramiento nocturno. Además de tratar la pielonefritis, el fármaco para la agitación es el haloperidol en dosis bajas. La A es la tentación: una benzodiacepina parece calmar, pero en el delirium no alcohólico empeora la confusión y aumenta el riesgo de caídas.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: el paciente agitado',
      cards: [
        { title: 'Antes de sedar', tag: 'Orden', kind: 'key', items: [
          { t: 'Glicemia y oximetría primero', d: 'Delirium: tratar la causa',
            say: 'Cerremos con las reglas de oro. Antes de sedar, glicemia capilar y oximetría, y buscar la causa orgánica. Si es un delirium, se trata la causa y se usa la medicación mínima.' },
          { t: 'Verbal, farmacológica, física', d: 'La física, último recurso con orden escrita',
            say: 'La contención es escalonada: primero la palabra y el ambiente, después el fármaco, y solo al final la sujeción, con orden médica escrita y control cada quince a treinta minutos.' },
        ] },
        { title: 'Fármacos', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Haloperidol + lorazepam IM', d: 'El esquema de elección',
            say: 'El esquema intramuscular de elección en la psicosis agitada es haloperidol más lorazepam.' },
          { t: 'Nunca olanzapina IM + benzodiacepina parenteral', d: 'Anciano: haloperidol bajo, sin benzodiacepinas',
            say: 'Nunca olanzapina intramuscular con una benzodiacepina parenteral. Y en el anciano con delirium, haloperidol en dosis muy bajas y sin benzodiacepinas. Si te llevas una sola idea de hoy: primero descarta lo orgánico, y contén en escalones. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Paciente agitado: de la causa a la contención',
    root: N('start', 'Paciente agitado en urgencias', 'Seguridad de la escena primero',
      'Llega un paciente agitado. Aseguras la escena, con la puerta abierta y tú entre el paciente y la salida, y antes de sedar te preguntas si hay una causa orgánica.',
      ['Fluctúa, visuales, signos alterados', N('do', 'Causa orgánica o delirium', 'Glicemia, oximetría, buscar la causa',
        'Si fluctúa, tiene alucinaciones visuales o signos vitales alterados, piensas en una causa orgánica. Se mide glicemia y oximetría, se busca la causa y se trata, con medidas no farmacológicas.',
        ['Anciano con riesgo', N('ok', 'Haloperidol dosis baja', 'Sin benzodiacepinas',
          'Si hay riesgo físico, se usa haloperidol en dosis muy bajas, medio a un miligramo. Las benzodiacepinas se evitan, salvo en la abstinencia de alcohol o de sedantes.')],
      )],
      ['Vigil, orientado, antecedente psiquiátrico', N('q', 'Psiquiátrica primaria', 'Contención escalonada',
        'Si está vigil y orientado, con antecedentes, es una agitación psiquiátrica. Comienza el escalamiento, y el primer paso siempre es la palabra.',
        ['Se calma con la palabra', N('ok', 'Desescalada verbal', 'Voz calma, distancia, ofrecer medicación',
          'Con voz calma, distancia de dos brazos y validando el malestar, muchas veces basta. Se ofrece medicación voluntaria si no se calma.')],
        ['Fracasa o riesgo inminente', N('do', 'Contención farmacológica', 'Oral si colabora; si no, IM',
          'Si coopera, vía oral: lorazepam o risperidona. Si rechaza o es grave, haloperidol más lorazepam intramusculares. Nunca olanzapina intramuscular con una benzodiacepina parenteral.',
          ['Violencia activa', N('alert', 'Contención física', 'Equipo, orden escrita, control cada 15-30 min',
            'Si hay violencia activa y los fármacos no bastan o hay que inyectar, se inmoviliza con equipo de cinco personas, cuatro puntos a la estructura de la cama, orden escrita en la ficha y control cada quince a treinta minutos, con retiro progresivo.')],
        )],
      )],
    ),
  },
};
