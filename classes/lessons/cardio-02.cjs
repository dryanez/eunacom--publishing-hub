// Clase 1.2 (Cardiología) — Paro cardiorrespiratorio: reconocimiento, RCP de alta calidad y DEA. Guion escrito a mano (modelo cardio-14).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_1.cjs (cardio-02). Códigos 1.01.2.006 Paro cardiorrespiratorio (Dx específico,
// Tx completo, seguimiento derivar), 1.01.5.006 Resucitación cardiorrespiratoria (realizar) y los equivalentes de respiratorio y cirugía
// (1.05.2.012, 1.05.5.010, 4.01.2.030, 4.01.5.028), según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-02 y --search "paro|reanimación|compresiones"): Enero 2023 P120 y Diciembre 2022 P158
// (primer gesto: compresiones). Enunciados y alternativas copiados del banco. Se agrega una pregunta del banco del libro (Banco Oficial
// AEE) con los parámetros de la RCP de alta calidad.
// No usadas: Agosto 2021 P55 y Julio 2017 P35 (compresiones en el paro presenciado: van en cardio-03); Diciembre 2024 P105 (alternativas
// duplicadas); Diciembre 2025 P4 (necesita el ECG).
// Fotos en contexto: Blausen «CPR Adult Chest Compression» (CC BY 3.0), recortada sin el título en inglés.
// En movimiento: scenes/cardio_b1.html ?v=rcp (sobre la ilustración Blausen, con rótulos y medidores propios).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });
const BLA = 'Ilustración: Blausen.com staff (2014), CC BY 3.0';

module.exports = {
  id: 'cardio-02',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Reconocer el paro, comprimir bien y usar el desfibrilador automático',
      say: 'Bienvenido. Después de aprender a leer el electrocardiograma, pasamos a la emergencia en que cada minuto cuenta: el paro cardiorrespiratorio. Tú puedes ser la persona que está al lado del paciente en el SAPU o en la calle, y el examen pregunta casi siempre lo mismo: cuál es el primer gesto, cómo se hacen bien las compresiones y cuándo se usa el desfibrilador. Hoy es el soporte vital básico; el avanzado lo vemos en la próxima clase.',
    },

    {
      type: 'flow',
      kicker: 'Reconocer',
      title: 'Cuándo es un paro',
      nodes: [
        { id: 'i', col: 0, row: 1, k: 'start', t: 'No responde', s: 'Inconsciencia' },
        { id: 'r', col: 1, row: 1, k: 'mech', t: 'No respira', s: 'O solo jadea (gasping)' },
        { id: 'p', col: 2, row: 1, k: 'mech', t: 'Sin pulso carotídeo', s: 'Buscar ≤ 10 segundos' },
        { id: 'a', col: 3, row: 0, k: 'alert', t: 'Pedir ayuda', s: '131 o Código Azul + DEA' },
        { id: 'c', col: 3, row: 2, k: 'good', t: 'Comprimir ya', s: 'Sin esperar nada' },
      ],
      edges: [{ from: 'i', to: 'r' }, { from: 'r', to: 'p' }, { from: 'p', to: 'a' }, { from: 'p', to: 'c' }],
      steps: [
        { show: ['i', 'r'], note: 'Dos señales',
          say: 'El paro se reconoce por una tríada. Primero, la persona no responde. Segundo, no respira, o solo hace inspiraciones ruidosas y aisladas, que se llaman gasping. Ese gasping no es respirar: ocurre en los primeros minutos de un paro y no debe retrasar la reanimación.' },
        { show: ['p'], note: 'El pulso, pero poco rato',
          say: 'Tercero, no hay pulso carotídeo, y el personal de salud lo busca durante cinco a diez segundos, nunca más. Si dudas, comienza a comprimir.' },
        { show: ['a', 'c'], note: 'Ayuda y compresiones',
          say: 'Y de inmediato haces dos cosas: pides ayuda, activando el ciento treinta y uno, el SAMU, o el Código Azul en el hospital, y pides el desfibrilador; y empiezas las compresiones. No esperas a que llegue nadie para comprimir.' },
      ],
    },

    {
      type: 'points',
      kicker: 'La cadena de supervivencia',
      title: 'Seis eslabones, tres decisivos',
      cards: [
        { title: 'Los seis eslabones', tag: 'Chile', kind: 'key', items: [
          { t: 'Reconocer y activar el sistema', d: '131 SAMU o Código Azul',
            say: 'La cadena de supervivencia tiene seis eslabones. El primero es reconocer el paro y activar el sistema de emergencia: llamar al ciento treinta y uno o activar el Código Azul.' },
          { t: 'RCP inmediata y desfibrilación precoz', d: 'Los que más cambian la sobrevida',
            say: 'El segundo es la reanimación de alta calidad, inmediata, y el tercero la desfibrilación precoz. Estos tres primeros dependen del primer testigo y son los que más modifican la sobrevida.' },
          { t: 'Soporte avanzado, post-paro y recuperación', d: 'Eslabones 4, 5 y 6',
            say: 'Los otros tres son el soporte vital avanzado y el traslado, los cuidados post-paro y la recuperación.' },
        ] },
        { title: 'El primer gesto', tag: 'C-A-B', kind: 'alert', items: [
          { t: 'Pedir ayuda y comprimir', d: 'No intubar, no canalizar, no ECG, no adrenalina antes',
            say: 'Y ahora la pregunta que más cae. Un paciente pierde la conciencia, no respira y no tiene pulso. Además de pedir ayuda, ¿qué haces primero? Comprimir. La secuencia es C-A-B: primero circulación, después vía aérea y ventilación. No intubas, no canalizas, no pides un electrocardiograma ni das adrenalina antes. Y el golpe precordial no se hace.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Parámetros',
      title: 'Compresiones de alta calidad',
      cards: [
        { title: 'Las cifras', tag: 'Se preguntan', kind: 'criteria', items: [
          { t: '100-120 por minuto', d: '≥ 5 cm de profundidad (máx. 6 cm)',
            say: 'Mira cómo se colocan las manos: el talón de una sobre la otra, en la mitad inferior del esternón, con los brazos rectos. Las compresiones van a cien a ciento veinte por minuto y llegan al menos a cinco centímetros de profundidad, sin pasar de seis.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-02/01_rcp-compresiones-manos-sobre-esternon__blausen.jpg', label: 'Manos sobre el esternón', at: 'Mira cómo se colocan las manos', credit: BLA } },
          { t: 'Dejar re-expandir el tórax', d: 'Sin apoyarse entre compresiones',
            say: 'Después de cada compresión dejas que el tórax vuelva a subir por completo. Si te apoyas, el corazón no se llena.' },
          { t: 'Pausas < 10 s · relevo cada 2 min', d: 'Fracción de compresión > 80%',
            say: 'Las interrupciones duran menos de diez segundos, y el reanimador se releva cada dos minutos, porque la calidad cae aunque no lo notes.' },
        ] },
        { title: 'Ventilación', tag: '30 a 2', kind: 'key', items: [
          { t: '30:2 sin vía aérea avanzada', d: '1 ventilación cada 6 s con vía avanzada',
            say: 'Sin vía aérea avanzada, la relación es treinta compresiones y dos ventilaciones. Con tubo o mascarilla laríngea, las compresiones son continuas y se da una ventilación cada seis segundos. Y no hay que hiperventilar.' },
          { t: 'Bolsa-mascarilla con O₂ alto flujo', d: 'Extensión de cabeza o tracción mandibular',
            say: 'Para ventilar, extensión de cabeza y elevación del mentón, o tracción mandibular si sospechas lesión cervical, con bolsa-mascarilla y oxígeno a alto flujo, un segundo por ventilación.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Así se ve una RCP bien hecha',
      images: [
        { src: 'animaciones/cardio-02/A1_rcp_alta_calidad.mp4', label: 'Compresiones, ciclo 30:2, relevo y DEA', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Ritmo, profundidad y ciclo',
          say: 'Mira cómo se ve en la práctica. Las compresiones siguen un ritmo de unos ciento diez por minuto, y cada una debe llegar a la zona verde de profundidad, por sobre los cinco centímetros. Se cuentan treinta compresiones, se dan dos ventilaciones y se repite el ciclo. A los dos minutos, relevo de quien comprime y análisis del ritmo con el desfibrilador, para descargar si está indicado y volver a comprimir de inmediato.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Desfibrilador externo automático',
      title: 'El DEA en cuatro pasos',
      cards: [
        { title: 'Paso a paso', tag: 'Cualquiera puede usarlo', kind: 'key', items: [
          { t: 'Encender y colocar los parches', d: 'Infraclavicular derecho y axilar izquierdo',
            say: 'El desfibrilador externo automático analiza el ritmo y te dice si debes descargar, así que cualquier persona puede usarlo. Lo enciendes, secas el tórax y colocas un parche debajo de la clavícula derecha y otro en la axila izquierda. Si hay un marcapaso visible, el parche va a unos ocho centímetros.' },
          { t: 'Analizar sin tocar al paciente', d: 'Nadie en contacto, oxígeno apartado',
            say: 'Dejas que analice sin que nadie toque al paciente. Si indica descarga, avisas que todos se alejen y presionas el botón.' },
          { t: 'Después de la descarga: comprimir 2 minutos', d: 'Sin buscar pulso',
            say: 'Y lo más importante: inmediatamente después de la descarga, reanudas las compresiones por dos minutos, sin buscar el pulso ni mirar el ritmo.' },
        ] },
        { title: 'Cuándo sirve', tag: 'Tiempo es sobrevida', kind: 'alert', items: [
          { t: 'FV: ritmo inicial más frecuente del paro súbito', d: 'Sobrevida cae ≈ 10% por minuto',
            say: 'La fibrilación ventricular es el ritmo inicial más frecuente del paro súbito de origen cardíaco, y la sobrevida cae cerca de un diez por ciento por cada minuto sin desfibrilar. Por eso el desfibrilador se trae apenas se activa el sistema.' },
          { t: 'Presenciado y monitorizado: descargar primero', d: 'Solo con las tres condiciones',
            say: 'Un matiz: si el paro es presenciado, el paciente está monitorizado, el desfibrilador está a mano y hay un ritmo desfibrilable constatado, se descarga de inmediato. En todos los demás casos, se comprime mientras llega el equipo.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Paros que no son cardíacos',
      title: 'Respiratorio y perioperatorio',
      cards: [
        { title: 'Causa respiratoria', tag: 'Asistolia o AESP', kind: 'alert', items: [
          { t: 'Asfixia, ahogamiento, asma, opioides', d: 'Bradicardia → asistolia o AESP',
            say: 'En el paro de causa respiratoria, como la asfixia, el ahogamiento, el asma grave o la sobredosis de opioides, el ritmo inicial suele ser una bradicardia que termina en asistolia o actividad eléctrica sin pulso, y no una fibrilación ventricular.' },
          { t: 'La ventilación pesa tanto como las compresiones', d: 'Naloxona · descompresión del neumotórax',
            say: 'Por eso la ventilación y la oxigenación importan tanto como las compresiones, y se trata la causa: desobstruir la vía aérea, ventilar con oxígeno al cien por ciento, dar naloxona en los opioides y descomprimir un neumotórax a tensión.' },
        ] },
        { title: 'Paro en pabellón', tag: 'Monitorizado', kind: 'pharma', items: [
          { t: 'Caída de saturación, CO₂ o presión', d: 'Vía aérea · hemorragia · anafilaxia',
            say: 'El paro perioperatorio ocurre en un paciente monitorizado, y se reconoce porque cae la saturación, el CO₂ espirado o la presión. Las causas son problemas de la vía aérea, hemorragia, anafilaxia, neumotórax, hiperkalemia por succinilcolina y toxicidad del anestésico local.' },
          { t: 'Anestésico local: emulsión lipídica 20%', d: 'Hipertermia maligna: dantroleno',
            say: 'Si es toxicidad por bupivacaína, se agrega emulsión lipídica; si es hipertermia maligna, dantroleno; si es anafilaxia, adrenalina. Y se suspende el anestésico y se ventila con oxígeno al cien por ciento.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Situaciones especiales',
      title: 'Atragantamiento, embarazo y ahogamiento',
      cards: [
        { title: 'Casos que cambian la técnica', tag: 'Para recordar', kind: 'criteria', items: [
          { t: 'Atragantamiento: maniobra de Heimlich', d: 'Si pierde la conciencia: RCP',
            say: 'En un atragantamiento con obstrucción total, aplicas compresiones abdominales, la maniobra de Heimlich. Si el paciente pierde la conciencia, comienzas la reanimación y miras la boca antes de cada ventilación.' },
          { t: 'Embarazada: útero a la izquierda', d: 'Cesárea de emergencia si no hay respuesta',
            say: 'En la embarazada se desplaza el útero a la izquierda para liberar la vena cava y se prepara una cesárea de emergencia si no recupera la circulación.' },
          { t: 'Ahogamiento: 5 ventilaciones de rescate', d: 'Hipotermia: se comprime y se recalienta',
            say: 'En el ahogamiento se parte con cinco ventilaciones de rescate, porque la causa es la hipoxia. Y en la hipotermia grave nadie está muerto hasta que está tibio y muerto.' },
        ] },
      ],
    },

    { type: 'pathway', intro: 'Armemos el árbol: de la persona que se desploma al desfibrilador.' },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Paro: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Sin conciencia, sin respiración ni pulso', 'Pedir ayuda y comprimir', 'Intubar o pedir un ECG primero'],
          say: 'Sin conciencia, sin respiración y sin pulso: pides ayuda y comprimes. El error es intubar, canalizar o pedir un electrocardiograma antes.' },
        { cells: ['Paro presenciado, sin desfibrilador a mano', 'Comprimir hasta que llegue', 'Esperar el desfibrilador sin comprimir'],
          say: 'Si el paro es presenciado pero no tienes el desfibrilador a mano, comprimes hasta que llegue. Esperarlo sin comprimir es perder tiempo.' },
        { cells: ['Compresiones de 3 cm a 140 por minuto', 'Corregir a ≥ 5 cm y 100-120', 'Dar pausas para buscar pulso'],
          say: 'Compresiones superficiales o demasiado rápidas se corrigen: al menos cinco centímetros y cien a ciento veinte por minuto. Y no se detiene todo el tiempo para buscar el pulso.' },
        { cells: ['Paciente intubado en RCP', 'Compresiones continuas y 1 ventilación cada 6 s', 'Seguir con 30 a 2 e hiperventilar'],
          say: 'Con vía aérea avanzada, las compresiones son continuas y la ventilación es una cada seis segundos. Hiperventilar baja el retorno venoso.' },
        { cells: ['Ahogamiento o sobredosis de opioides', 'Ventilar y tratar la causa', 'Solo comprimir'],
          say: 'En el ahogamiento y en la sobredosis de opioides, el paro es hipóxico: se ventila y se trata la causa, con naloxona en los opioides.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 62 años, fumador e hipertenso, consulta en un SAPU por dolor torácico opresivo de 1 hora. En la sala de procedimientos pierde la conciencia: no responde, solo hace una inspiración ruidosa ocasional y no se palpa pulso carotídeo tras 10 segundos. El auxiliar trae el desfibrilador automático, todavía sin conectar.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Intubar y canalizar una vía venosa antes de cualquier otra maniobra' },
        { letter: 'B', text: 'Tomar un ECG de 12 derivaciones para definir el ritmo' },
        { letter: 'C', text: 'Pedir ayuda, iniciar compresiones torácicas y conectar el DEA en cuanto esté listo' },
        { letter: 'D', text: 'Administrar adrenalina 1 mg endovenosa' },
        { letter: 'E', text: 'Dar un golpe precordial y esperar el pulso' },
      ],
      correct: 'C',
      explanation: 'Inconsciencia, gasping y ausencia de pulso: es un paro. Se pide ayuda (Código Azul o 131) y se inician de inmediato compresiones de alta calidad mientras se conecta el DEA; si el análisis indica descarga, se descarga y se reanuda la RCP por 2 minutos sin buscar pulso. No se pierde tiempo intubando, canalizando ni pidiendo un ECG.',
      say: {
        stem: 'Un hombre de sesenta y dos años, fumador e hipertenso, consulta en un SAPU por dolor torácico. En la sala de procedimientos pierde la conciencia: no responde, hace una inspiración ruidosa ocasional y no tiene pulso carotídeo después de diez segundos. Traen el desfibrilador automático, aún sin conectar.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: intubar y canalizar primero; tomar un electrocardiograma; pedir ayuda, comprimir y conectar el desfibrilador; adrenalina; o un golpe precordial. Piénsalo.',
        answer: 'Es la C. Es un paro: pides ayuda y comprimes de inmediato mientras se conecta el desfibrilador automático. La A tienta por parecer muy completa, pero la intubación y la vía venosa se hacen sin interrumpir las compresiones, nunca antes.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 120',
      stem: 'Diabético hipertenso con dolor torácico súbito, luego compromiso de conciencia y ausencia de pulso.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Desfibrilación inmediata sin RCP previa' },
        { letter: 'B', text: 'Iniciar compresiones torácicas externas (RCP)' },
        { letter: 'C', text: 'Intubación orotraqueal inmediata' },
        { letter: 'D', text: 'Administrar adrenalina 1 mg EV de inmediato' },
        { letter: 'E', text: 'Acceso venoso y carga de volumen' },
      ],
      correct: 'B',
      explanation: 'Sin pulso y sin conciencia es un paro: lo primero son las compresiones torácicas, además de pedir ayuda. La desfibrilación inmediata solo corresponde con paro presenciado, monitorizado y ritmo desfibrilable constatado.',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un paciente diabético e hipertenso tiene un dolor torácico súbito, luego compromiso de conciencia y ausencia de pulso.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: desfibrilación inmediata sin reanimación previa; iniciar compresiones torácicas; intubación inmediata; adrenalina de inmediato; o vía venosa y volumen. Piénsalo.',
        answer: 'Es la B. Un paro se maneja con compresiones torácicas, apenas pides ayuda. La A tienta, porque el desfibrilador salva vidas, pero solo se usa primero si el paro es presenciado, monitorizado y ya sabes que el ritmo es desfibrilable.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 158',
      stem: 'Un paciente de 67 años, diabético, hipertenso y dislipidémico, fumador activo, consulta en el servicio de urgencia por dolor torácico opresivo e intenso, de 2 horas de evolución, irradiado al hombro derecho y asociado a disnea. Mientras estaba en la sala de reanimación presenta pérdida de conciencia y usted constata que no se mueve, no respira y no tiene pulso. Además de pedir ayuda y activar el código de paro,',
      question: '¿Cuál es la conducta inmediata?',
      options: [
        { letter: 'A', text: 'Instalar el monitor cardíaco en modo paletas' },
        { letter: 'B', text: 'Realizar intubación orotraqueal' },
        { letter: 'C', text: 'Solicitar electrocardiograma' },
        { letter: 'D', text: 'Realizar compresiones torácicas' },
        { letter: 'E', text: 'Administrar adrenalina endovenosa en bolo' },
      ],
      correct: 'D',
      explanation: 'Tras pedir ayuda y activar el código de paro, el primer gesto es comprimir con alta calidad. El monitor, la intubación, el ECG y la adrenalina se hacen mientras otro integrante del equipo sigue comprimiendo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veintidós. Un paciente de sesenta y siete años, con factores de riesgo, tiene un dolor torácico y, en la sala de reanimación, pierde la conciencia: no se mueve, no respira y no tiene pulso. Además de pedir ayuda y activar el código de paro, ¿qué haces de inmediato?',
        question: '¿Cuál es la conducta inmediata?',
        options: 'Las opciones: el monitor en modo paletas; intubar; pedir un electrocardiograma; compresiones torácicas; o adrenalina en bolo. Piénsalo.',
        answer: 'Es la D. Se comprime. El monitor, la intubación y la adrenalina se hacen mientras otra persona sigue comprimiendo. La A tienta porque parece una conducta de reanimación avanzada, pero conectar el monitor nunca reemplaza las compresiones.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un paciente es recibido en urgencia sin pulso ni respiración. El equipo realiza compresiones torácicas.',
      question: '¿Cuál de las siguientes condiciones corresponde a una RCP de alta calidad en el adulto?',
      options: [
        { letter: 'A', text: 'Compresiones de 100 a 120 por minuto y de al menos 5 cm de profundidad, permitiendo la re-expansión del tórax' },
        { letter: 'B', text: 'Compresiones de 60 a 80 por minuto con ventilaciones continuas' },
        { letter: 'C', text: 'Compresiones de 2 a 3 cm de profundidad para evitar fracturas costales' },
        { letter: 'D', text: 'Una ventilación cada 2 segundos con vía aérea avanzada' },
        { letter: 'E', text: 'Pausas de 30 segundos cada 2 minutos para buscar pulso' },
      ],
      correct: 'A',
      explanation: 'La RCP de alta calidad exige 100 a 120 compresiones por minuto, al menos 5 cm de profundidad, re-expansión completa, interrupciones menores de 10 segundos y ventilación sin exceso.',
      say: {
        stem: 'Una pregunta del banco del libro. Un paciente sin pulso ni respiración recibe compresiones torácicas.',
        question: '¿Cuál condición corresponde a una reanimación de alta calidad en el adulto?',
        options: 'Las opciones: cien a ciento veinte por minuto, al menos cinco centímetros y re-expansión; sesenta a ochenta por minuto; dos a tres centímetros; una ventilación cada dos segundos; o pausas de treinta segundos para buscar pulso. Piénsalo.',
        answer: 'Es la A. Frecuencia de cien a ciento veinte, profundidad de al menos cinco centímetros y re-expansión completa. La D tienta, pero hiperventilar con vía aérea avanzada es un error: es una ventilación cada seis segundos.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: soporte vital básico',
      cards: [
        { title: 'Reconocer y actuar', tag: 'Primer gesto', kind: 'key', items: [
          { t: 'Sin conciencia, sin respiración, sin pulso: paro', d: 'Pulso ≤ 10 segundos',
            say: 'Cerremos con las reglas de oro. Un paciente sin conciencia, sin respiración y sin pulso está en paro; el pulso se busca no más de diez segundos.' },
          { t: 'Pedir ayuda y comprimir', d: 'C-A-B',
            say: 'El primer gesto es pedir ayuda y comprimir. La secuencia es circulación, vía aérea y ventilación.' },
        ] },
        { title: 'Calidad', tag: 'Se preguntan las cifras', kind: 'criteria', items: [
          { t: '100-120/min · ≥ 5 cm · 30:2', d: 'Relevo cada 2 min',
            say: 'Compresiones de cien a ciento veinte por minuto, de al menos cinco centímetros, relación treinta a dos y relevo cada dos minutos.' },
          { t: 'DEA: parches, analizar y comprimir de inmediato', d: 'Sin buscar pulso',
            say: 'Con el desfibrilador, parches, análisis sin tocar al paciente y, tras la descarga, compresiones inmediatas por dos minutos.' },
          { t: 'Paro respiratorio: ventilar y tratar la causa', d: 'Naloxona en opioides',
            say: 'Si te llevas una sola idea de hoy: ante un paro, el que está al lado del paciente decide, y lo primero no es un fármaco ni un examen, sino pedir ayuda y comprimir bien. Nos vemos en la próxima clase, donde veremos qué ritmo muestra el monitor y qué fármacos se usan.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Paro cardiorrespiratorio: del colapso al desfibrilador',
    root: N('start', 'Persona que se desploma', 'No responde, sin respiración ni pulso',
      'Un paciente se desploma y no responde. Compruebas que no respira y que no tiene pulso carotídeo en menos de diez segundos: es un paro cardiorrespiratorio.',
      ['Sin pulso ni respiración', N('alert', 'Pedir ayuda y comprimir', '131 o Código Azul · DEA',
        'Pides ayuda, activas el Código Azul o el ciento treinta y uno y solicitas el desfibrilador. De inmediato empiezas las compresiones a cien a ciento veinte por minuto y al menos cinco centímetros.',
        ['Llega el DEA o el monitor', N('q', 'Analizar el ritmo', 'Nadie toca al paciente',
          'Cuando llega el desfibrilador, lo enciendes, pones los parches y dejas que analice sin tocar al paciente.',
          ['Descarga indicada', N('ok', 'Descargar y RCP 2 minutos', 'Sin buscar pulso',
            'Si indica descarga, avisas que se alejen, descargas y reanudas de inmediato las compresiones por dos minutos, sin buscar el pulso. Luego se repite el ciclo hasta que llegue el equipo avanzado.')],
          ['Descarga no indicada', N('do', 'Seguir con RCP', 'Soporte avanzado: Tema 1.3',
            'Si no hay descarga indicada, sigues con la reanimación y buscas la causa. El manejo de la asistolia y de la actividad eléctrica sin pulso lo vemos en la próxima clase.')],
        )],
        ['Causa respiratoria', N('refer', 'Ventilar y tratar la causa', 'Naloxona · descompresión',
          'Si el paro es de causa respiratoria, como un ahogamiento o una sobredosis de opioides, la ventilación pesa tanto como las compresiones y se trata la causa mientras se reanima.')],
      )],
    ),
  },
};
