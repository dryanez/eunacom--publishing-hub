// Clase 1.3 (Cardiología) — ACLS: ritmos desfibrilables y no desfibrilables, fármacos y cuidados post-paro. Guion escrito a mano.
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_1.cjs (cardio-03). Códigos 1.01.5.004 Desfibrilación (realizar),
// 1.01.2.006 Paro cardiorrespiratorio y 1.01.5.006 Resucitación cardiorrespiratoria, según books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs cardio-03): Agosto 2021 P55 y Julio 2017 P35 (primer gesto en el paro presenciado: se pide
// ayuda y se comprime mientras llega el desfibrilador). Enunciados y alternativas copiados del banco (se unieron palabras cortadas por
// guion). Se agregan dos preguntas del banco del libro (Banco Oficial AEE): conducta tras la descarga y asistolia.
// No usadas: Diciembre 2025 P4 (SCACEST inferior que degenera en FV: depende del ECG que el banco no trae; no se encontró un trazado
// equivalente verificado, anotado en las dudas); Enero 2023 P120 y Diciembre 2022 P158 (primer gesto: van en cardio-02).
// Fotos en contexto: dos registros de Stroobandt, Barold y Sinnaeve, «ECG from Basics to Essentials» (Wiley, 2016), p. 307 (fibrilación
// ventricular) y p. 309 (descarga de un DAI termina una FV), en classes/media/biblioteca/20_cardiologia/cardio-03/.
// En movimiento: scenes/cardio_b1.html ?v=acls (gráfico propio).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });
const STRO = p => `Stroobandt, Barold y Sinnaeve. ECG from Basics to Essentials (Wiley, 2016), p. ${p}`;

module.exports = {
  id: 'cardio-03',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuál es el ritmo del paro, cuándo se descarga y qué fármaco entra en cada momento',
      say: 'Bienvenido. En la clase anterior aprendimos a comprimir y a usar el desfibrilador automático. Hoy llega el monitor y el paro deja de ser una maniobra universal: lo que haces con una fibrilación ventricular es lo contrario de lo que haces con una asistolia. El examen pregunta cuándo se descarga, cuándo entran la adrenalina y la amiodarona, cuáles son las causas reversibles y qué se hace al recuperar el pulso.',
    },

    {
      type: 'flow',
      kicker: 'Clasificar el ritmo',
      title: 'Dos vías, dos conductas',
      nodes: [
        { id: 'm', col: 0, row: 2, k: 'start', t: 'Monitor conectado', s: 'Pausa < 10 segundos' },
        { id: 'q', col: 1, row: 2, k: 'q', t: '¿Desfibrilable?', s: 'FV o TV sin pulso' },
        { id: 'd', col: 3, row: 0, k: 'good', t: 'Descarga + RCP', s: '200 J bifásicos' },
        { id: 'n', col: 3, row: 4, k: 'trap', t: 'Asistolia o AESP', s: 'NO se descarga' },
        { id: 'a', col: 4, row: 0, k: 'alert', t: 'Adrenalina y amiodarona', s: 'Tras la 2.ª y la 3.ª descarga' },
        { id: 'r', col: 4, row: 4, k: 'refer', t: 'Adrenalina ya + 5H y 5T', s: 'RCP ininterrumpida' },
      ],
      edges: [{ from: 'm', to: 'q' }, { from: 'q', to: 'd', label: 'Sí' }, { from: 'q', to: 'n', label: 'No' }, { from: 'd', to: 'a' }, { from: 'n', to: 'r' }],
      steps: [
        { show: ['m', 'q'], note: 'Primero, clasificar',
          say: 'Cuando llega el monitor lo primero es clasificar el ritmo, en una pausa de menos de diez segundos. Hay solo dos vías. Los ritmos desfibrilables son la fibrilación ventricular y la taquicardia ventricular sin pulso. Los no desfibrilables son la asistolia y la actividad eléctrica sin pulso.' },
        { show: ['d', 'a'], note: 'Vía uno: descargar',
          say: 'En la vía uno, la de los ritmos desfibrilables, descargas de inmediato con doscientos joules bifásicos y reanudas las compresiones. Más adelante entran la adrenalina y la amiodarona. Es la que tiene mejor sobrevida si se desfibrila precoz.' },
        { show: ['n', 'r'], note: 'Vía dos: no descargar',
          say: 'En la vía dos, la asistolia y la actividad eléctrica sin pulso, la descarga está contraindicada. Comprimes sin parar, das adrenalina lo antes posible y buscas la causa con la regla de las cinco H y las cinco T.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Reconocer',
      title: 'Cómo se ven los ritmos del paro',
      cards: [
        { title: 'Desfibrilables', tag: 'Hay que descargar', kind: 'alert', items: [
          { t: 'Fibrilación ventricular', d: 'Oscilaciones caóticas, sin QRS identificables',
            say: 'Mira este trazado. La fibrilación ventricular son oscilaciones caóticas e irregulares, sin ningún complejo QRS que se pueda identificar. Es el ritmo más frecuente del paro súbito presenciado.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-03/01_fibrilacion-ventricular-ecg__stroobandt-ecg_p307.jpg', label: 'Fibrilación ventricular', at: 'Mira este trazado', credit: STRO(307) } },
          { t: 'TV sin pulso', d: 'QRS ancho, rápido y regular',
            say: 'La taquicardia ventricular sin pulso es un ritmo ancho, rápido y organizado, pero en un paciente sin pulso. Se trata igual que la fibrilación.' },
        ] },
        { title: 'No desfibrilables', tag: 'Solo RCP y fármacos', kind: 'key', items: [
          { t: 'Asistolia', d: 'Línea plana en 2 derivaciones',
            say: 'La asistolia es una línea casi plana. Antes de aceptarla, confirmas en dos derivaciones que los electrodos estén bien puestos y la ganancia no esté en cero.' },
          { t: 'AESP', d: 'Ritmo organizado sin pulso',
            say: 'La actividad eléctrica sin pulso es cualquier ritmo organizado, incluso sinusal, en un paciente sin pulso. Siempre tiene una causa que buscar.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Vía uno',
      title: 'FV y TV sin pulso: la secuencia',
      cards: [
        { title: 'Descargas y RCP', tag: 'Cada dos minutos', kind: 'key', items: [
          { t: 'Descarga 200 J y RCP 2 minutos', d: 'Sin chequear pulso ni ritmo',
            say: 'Descargas con doscientos joules bifásicos, o trescientos sesenta si el equipo es monofásico, y de inmediato reanudas las compresiones por dos minutos. No palpas el pulso ni miras el monitor justo después del choque: el corazón recién desfibrilado necesita compresiones para recuperar su gasto. Esto cae casi todos los años.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-03/02_fv-terminada-por-descarga-dai__stroobandt-ecg_p309.jpg', label: 'TV que degenera en FV (registro de un DAI)', at: 'Esto cae casi todos los años', credit: STRO(309) } },
          { t: 'Persiste: 2.ª descarga + adrenalina 1 mg', d: 'Repetir cada 3-5 minutos',
            say: 'A los dos minutos reevalúas. Si persiste la fibrilación, segunda descarga, compresiones y adrenalina un miligramo endovenoso, que se repite cada tres a cinco minutos.' },
        ] },
        { title: 'Antiarrítmicos', tag: 'Refractaria', kind: 'pharma', items: [
          { t: 'Tras la 3.ª descarga: amiodarona 300 mg', d: 'Luego 150 mg',
            say: 'Si persiste después de la tercera descarga, se agrega amiodarona trescientos miligramos en bolo, con una segunda dosis de ciento cincuenta.' },
          { t: 'Alternativa: lidocaína 1-1,5 mg/kg', d: 'Torsión de puntas: magnesio 2 g',
            say: 'Si no hay amiodarona, se usa lidocaína de uno a uno y medio miligramo por kilo. Y en una torsión de puntas o con magnesio bajo, sulfato de magnesio dos gramos.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Descarga, RCP y fármacos en el tiempo',
      images: [
        { src: 'animaciones/cardio-03/A1_acls_fv_descarga.mp4', label: 'FV, tres descargas, adrenalina, amiodarona y retorno', credit: 'Animación propia con los criterios del libro' },
      ],
      steps: [
        { note: 'Cada ciclo dura dos minutos',
          say: 'Veamos el orden en el tiempo. El paciente está en fibrilación ventricular: primera descarga y dos minutos de compresiones. Se revisa el ritmo: persiste, entonces segunda descarga y adrenalina. Otros dos minutos, tercera descarga y amiodarona. Al final aparece un ritmo organizado con pulso: es el retorno de circulación. Y abajo, la regla de la vía dos: en asistolia o actividad eléctrica sin pulso, nunca se descarga.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Vía dos',
      title: 'Asistolia y AESP',
      cards: [
        { title: 'Qué se hace', tag: 'No se descarga', kind: 'alert', items: [
          { t: 'RCP ininterrumpida', d: 'Compresiones de alta calidad',
            say: 'En la asistolia y en la actividad eléctrica sin pulso, la descarga no tiene utilidad, daña el miocardio y retrasa las compresiones, por eso está contraindicada. Comprimes sin interrupciones.' },
          { t: 'Adrenalina 1 mg lo antes posible', d: 'Cada 3-5 minutos',
            say: 'Das adrenalina un miligramo endovenoso lo antes posible, en el primer minuto, y la repites cada tres a cinco minutos.' },
          { t: 'Revisar el ritmo cada 2 minutos', d: 'Si aparece FV: pasar a la vía 1',
            say: 'Cada dos minutos revisas el ritmo. Si aparece una fibrilación ventricular, pasas a la vía uno; si aparece un ritmo organizado con pulso, comienzan los cuidados post-paro.' },
        ] },
        { title: 'Vía aérea y monitoreo', tag: 'Durante el paro', kind: 'criteria', items: [
          { t: 'Vía venosa o intraósea', d: 'Nada por el tubo traqueal',
            say: 'El acceso es una vía venosa periférica o, si no se logra, intraósea. Los fármacos no se dan por el tubo orotraqueal.' },
          { t: 'Capnografía: CO₂ < 10 mmHg', d: 'Mejorar las compresiones',
            say: 'La capnografía confirma la posición del tubo y guía la calidad de la reanimación: un CO₂ espirado menor de diez milímetros de mercurio indica compresiones ineficaces, y un alza súbita sugiere retorno de circulación.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Causas reversibles',
      title: 'Las cinco H y las cinco T',
      cards: [
        { title: 'Las 5H', tag: 'Buscar mientras se comprime', kind: 'key', items: [
          { t: 'Hipovolemia · Hipoxia · Hidrogeniones', d: 'Volumen · O₂ 100% · bicarbonato si pH < 7,1',
            say: 'La causa se busca y se trata mientras comprimes. Las cinco H son: hipovolemia, que se corrige con cristaloides o sangre; hipoxia, con intubación y oxígeno al cien por ciento; e hidrogeniones o acidosis, donde el bicarbonato se reserva para un pH menor de siete coma uno o los tricíclicos.' },
          { t: 'Hipo o hiperkalemia · Hipotermia', d: 'Calcio EV · recalentar',
            say: 'La cuarta es la alteración del potasio: en la hiperkalemia con QRS ancho, gluconato de calcio endovenoso de inmediato. Y la quinta, la hipotermia, con recalentamiento activo.' },
        ] },
        { title: 'Las 5T', tag: 'Causas con tratamiento específico', kind: 'alert', items: [
          { t: 'Trombosis coronaria · trombosis pulmonar', d: 'Angioplastía · alteplasa',
            say: 'Las cinco T: trombosis coronaria, es decir infarto, que va a angioplastía después del retorno; y trombosis pulmonar masiva, que se trata con alteplasa durante el paro.' },
          { t: 'Tensión (neumotórax) · Taponamiento · Tóxicos', d: 'Descompresión · pericardiocentesis · naloxona',
            say: 'Después, el neumotórax a tensión, que se descomprime con aguja; el taponamiento, que va a pericardiocentesis; y los tóxicos, como la sobredosis de opioides, que requiere naloxona.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Después del paro',
      title: 'Cuidados post-paro',
      cards: [
        { title: 'Primeras horas', tag: 'Define el pronóstico', kind: 'key', items: [
          { t: 'SpO₂ 92-98% · PAM ≥ 65 mmHg', d: 'Evitar la hiperoxia',
            say: 'Al recuperar el pulso mantienes la saturación entre noventa y dos y noventa y ocho por ciento, para evitar la hiperoxia, y una presión arterial media de al menos sesenta y cinco, con volumen y noradrenalina.' },
          { t: 'ECG inmediato y coronariografía si hay SDST', d: 'Aunque esté en coma',
            say: 'Tomas un electrocardiograma de doce derivaciones de inmediato. Si hay supradesnivel del ST, el paciente va a coronariografía urgente, aunque esté en coma, porque la causa más frecuente del paro es el infarto.' },
          { t: 'Evitar la fiebre · glicemia · tratar las convulsiones', d: 'Temperatura 32-37,5 °C',
            say: 'Controlas la temperatura, evitando la fiebre, y la glicemia, y tratas las convulsiones.' },
        ] },
        { title: 'Pronóstico', tag: 'No apresurarse', kind: 'alert', items: [
          { t: 'Pronóstico neurológico a las 72 horas', d: 'Evaluación multimodal',
            say: 'No se pronostica antes de las setenta y dos horas, con una evaluación que combina el examen, el electroencefalograma, las imágenes y los biomarcadores.' },
          { t: 'Todo paro se documenta y va a UCI', d: 'Conversar con la familia',
            say: 'Todo paro se documenta y el paciente se traslada a cuidados intensivos. Con la familia se conversa de manera clara y respetuosa, y si el pronóstico es muy malo, se discuten los límites del esfuerzo terapéutico.' },
        ] },
      ],
    },

    { type: 'pathway', intro: 'Armemos el árbol: del monitor al retorno de circulación.' },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'ACLS: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Asistolia en dos derivaciones', 'RCP + adrenalina + causas', 'Descargar 200 J'],
          say: 'Asistolia confirmada en dos derivaciones: compresiones, adrenalina y buscar la causa. Descargar es el error clásico, y está contraindicado.' },
        { cells: ['Recién descargado, FV persiste', 'Reanudar RCP por 2 minutos', 'Palpar el pulso o mirar el monitor'],
          say: 'Justo después de una descarga, reanudas las compresiones por dos minutos. Palpar el pulso o mirar el monitor genera pausas inútiles.' },
        { cells: ['FV persiste tras la 3.ª descarga', 'Amiodarona 300 mg EV', 'Dar amiodarona antes de la tercera'],
          say: 'Si la fibrilación persiste después de la tercera descarga, amiodarona trescientos miligramos. Darla antes no corresponde al algoritmo.' },
        { cells: ['Paciente en diálisis, QRS ancho, T picudas', 'Gluconato de calcio 10% EV', 'Descargar o solo adrenalina'],
          say: 'En un paciente en diálisis con QRS ancho y T picudas, es hiperkalemia: gluconato de calcio al diez por ciento, además de la reanimación.' },
        { cells: ['Retorno con SDST', 'Coronariografía urgente', 'Esperar 72 horas para decidir'],
          say: 'Si al recuperar el pulso hay supradesnivel del ST, la coronariografía es urgente. Esperar las setenta y dos horas es solo para el pronóstico neurológico.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 63 años con insuficiencia renal crónica terminal colapsa en el centro de diálisis. No responde, no respira y no tiene pulso carotídeo. Ya se están dando compresiones de calidad. El monitor muestra QRS muy anchos a 40 lpm con ondas T picudas gigantes.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Descarga de 200 J y seguir con RCP' },
        { letter: 'B', text: 'Cardioversión sincronizada' },
        { letter: 'C', text: 'RCP, adrenalina 1 mg EV y gluconato de calcio al 10% EV, sin descargar' },
        { letter: 'D', text: 'Amiodarona 300 mg EV y una descarga' },
        { letter: 'E', text: 'Atropina 1 mg y marcapaso transcutáneo' },
      ],
      correct: 'C',
      explanation: 'Es una AESP (ritmo organizado sin pulso), no desfibrilable. Con insuficiencia renal en diálisis y un ECG con QRS ancho y T picudas, la causa es una hiperkalemia grave (una de las 5H): además de la RCP y la adrenalina se da gluconato de calcio al 10% EV, y después insulina con glucosa y bicarbonato.',
      say: {
        stem: 'Un hombre de sesenta y tres años con insuficiencia renal terminal colapsa en el centro de diálisis, sin respuesta, respiración ni pulso. Ya reciben compresiones. El monitor muestra complejos QRS muy anchos a cuarenta por minuto, con ondas T picudas gigantes.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: descarga y RCP; cardioversión sincronizada; RCP, adrenalina y gluconato de calcio sin descargar; amiodarona y descarga; o atropina y marcapaso. Piénsalo.',
        answer: 'Es la C. Es una actividad eléctrica sin pulso, no desfibrilable, y la causa es la hiperkalemia. Se comprime, se da adrenalina y gluconato de calcio, y después insulina con glucosa. La A tienta porque el ritmo es anormal, pero la descarga no corresponde a la AESP.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 55',
      stem: 'Un paciente de 60 años, con antecedentes de hipertensión arterial, dislipidemia, diabetes mellitus tipo 2 y tabaquismo de 20 paquetes año, consulta en el servicio de urgencia, por dolor precordial opresivo. Luego de su ingreso, presenta compromiso de conciencia, sin respuesta. Al examen físico no respira y es imposible palpar el pulso carotídeo.',
      question: 'Además de solicitar ayuda, la conducta inicial más adecuada es:',
      options: [
        { letter: 'A', text: 'Realizar compresiones torácicas' },
        { letter: 'B', text: 'Realizar intubación orotraqueal' },
        { letter: 'C', text: 'Dar golpe torácico' },
        { letter: 'D', text: 'Desfibrilar' },
        { letter: 'E', text: 'Administrar adrenalina endovenosa' },
      ],
      correct: 'A',
      explanation: 'La desfibrilación inmediata solo corresponde si el paro es presenciado, monitorizado y con el desfibrilador a mano y un ritmo desfibrilable constatado. Lo habitual es pedir ayuda e iniciar compresiones mientras llega el equipo con el desfibrilador y el carro de paro.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un paciente de sesenta años con factores de riesgo consulta por dolor precordial; en la urgencia pierde la conciencia, no respira y no tiene pulso carotídeo.',
        question: 'Además de pedir ayuda, ¿cuál es la conducta inicial?',
        options: 'Las opciones: compresiones torácicas; intubación; golpe torácico; desfibrilar; o adrenalina. Piénsalo.',
        answer: 'Es la A. Aunque el paro sea presenciado, desfibrilar primero solo corresponde si hay monitor, desfibrilador a mano y un ritmo desfibrilable ya visto. Si no, se comprime mientras llega el desfibrilador y el carro de paro. La D tienta, pero le falta ese contexto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 35',
      stem: 'Un paciente de 60 años, con antecedentes de hipertensión arterial, dislipidemia, diabetes mellitus tipo 2 y tabaquismo de 50 paquetes año, consulta por dolor precordial opresivo y durante la anamnesis presenta compromiso de conciencia, sin respuesta. Al examen no respira y es imposible palpar el pulso carotídeo.',
      question: 'Además de solicitar ayuda, la conducta más adecuada es:',
      options: [
        { letter: 'A', text: 'Realizar compresiones torácicas' },
        { letter: 'B', text: 'Realizar intubación orotraqueal' },
        { letter: 'C', text: 'Dar golpe torácico' },
        { letter: 'D', text: 'Administrar adrenalina intracardiaca' },
        { letter: 'E', text: 'Realizar angioplastia de urgencia' },
      ],
      correct: 'A',
      explanation: 'Es un paro: se pide ayuda y se inician las compresiones. Si el desfibrilador está disponible en un paro presenciado se conecta lo antes posible, pero entre las alternativas la conducta es comprimir. La adrenalina intracardíaca no se usa y la angioplastía es posterior al retorno de circulación.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un paciente de sesenta años con muchos factores de riesgo consulta por dolor precordial y, durante la anamnesis, pierde la conciencia: no respira y no tiene pulso.',
        question: 'Además de pedir ayuda, ¿cuál es la conducta más adecuada?',
        options: 'Las opciones: compresiones torácicas; intubación; golpe torácico; adrenalina intracardíaca; o angioplastía de urgencia. Piénsalo.',
        answer: 'Es la A. Es un paro presenciado, y lo ideal es conectar el desfibrilador cuanto antes, pero entre las opciones la conducta es comprimir. La E tienta porque el origen es coronario, pero la angioplastía viene después de recuperar la circulación.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Durante la reanimación cardiopulmonar avanzada de una mujer de 50 años en fibrilación ventricular, se realiza la primera descarga de 200 J bifásicos.',
      question: '¿Cuál es la acción inmediata que debe realizar el equipo?',
      options: [
        { letter: 'A', text: 'Reanudar inmediatamente las compresiones torácicas durante 2 minutos antes de cualquier otra evaluación' },
        { letter: 'B', text: 'Palpar el pulso carotídeo para verificar si recuperó circulación espontánea' },
        { letter: 'C', text: 'Mirar el monitor para comprobar si el ritmo cambió a sinusal' },
        { letter: 'D', text: 'Administrar inmediatamente 1 mg de adrenalina endovenosa' },
        { letter: 'E', text: 'Administrar 300 mg de amiodarona en bolo rápido' },
      ],
      correct: 'A',
      explanation: 'Inmediatamente después de una descarga se reanudan las compresiones por 2 minutos, sin interrumpir para ver el ritmo ni el pulso. La adrenalina entra tras la segunda descarga y la amiodarona tras la tercera.',
      say: {
        stem: 'Una pregunta del banco del libro. Una mujer de cincuenta años está en fibrilación ventricular y recibe la primera descarga de doscientos joules bifásicos.',
        question: '¿Cuál es la acción inmediata del equipo?',
        options: 'Las opciones: reanudar las compresiones por dos minutos; palpar el pulso; mirar el monitor; adrenalina de inmediato; o amiodarona en bolo. Piénsalo.',
        answer: 'Es la A. Después de la descarga se comprime dos minutos sin evaluar. La D tienta, pero la adrenalina se da después de la segunda descarga, y la amiodarona, después de la tercera.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: ACLS',
      cards: [
        { title: 'Dos vías', tag: 'Según el ritmo', kind: 'key', items: [
          { t: 'FV / TV sin pulso: descarga 200 J y RCP 2 min', d: 'Adrenalina tras la 2.ª · amiodarona tras la 3.ª',
            say: 'Cerremos con las reglas de oro. En fibrilación ventricular y taquicardia sin pulso, descarga de doscientos joules y compresiones por dos minutos; adrenalina tras la segunda descarga y amiodarona tras la tercera.' },
          { t: 'Asistolia / AESP: nunca descargar', d: 'Adrenalina ya + 5H y 5T',
            say: 'En asistolia y actividad eléctrica sin pulso, nunca se descarga: compresiones, adrenalina lo antes posible y causas reversibles.' },
        ] },
        { title: 'Después', tag: 'Clave', kind: 'alert', items: [
          { t: 'Tras la descarga, comprimir sin mirar', d: 'No palpar pulso',
            say: 'Después de cada descarga se reanudan las compresiones, sin buscar el pulso.' },
          { t: 'Retorno con SDST: coronariografía urgente', d: 'Pronóstico a las 72 horas',
            say: 'Con el retorno de circulación y supradesnivel del ST, coronariografía urgente; el pronóstico neurológico, a las setenta y dos horas.' },
          { t: 'Desfibrilación ≠ cardioversión', d: 'Paro sin sincronizar · con pulso sincronizada',
            say: 'Si te llevas una sola idea de hoy: el ritmo del monitor decide todo, y descargar en un ritmo no desfibrilable es el error que más se castiga. Nos vemos en la próxima clase, donde veremos la arritmia más frecuente de la consulta: la fibrilación auricular.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Paro cardiorrespiratorio avanzado: del monitor al retorno de circulación',
    root: N('start', 'Paro con RCP en curso', 'Monitor y análisis del ritmo',
      'Estás reanimando a un paciente en paro, con compresiones de calidad. Llega el monitor y analizas el ritmo en menos de diez segundos.',
      ['FV o TV sin pulso', N('alert', 'Ritmo desfibrilable', 'Descarga 200 J + RCP 2 min',
        'Si es fibrilación ventricular o taquicardia ventricular sin pulso, descargas doscientos joules y reanudas las compresiones por dos minutos, sin buscar el pulso.',
        ['Persiste a los 2 minutos', N('do', '2.ª descarga + adrenalina', '1 mg EV cada 3-5 minutos',
          'Si persiste, segunda descarga, nuevas compresiones y adrenalina un miligramo endovenoso, repetida cada tres a cinco minutos.',
          ['Persiste a los 4 minutos', N('refer', '3.ª descarga + amiodarona', '300 mg EV, luego 150 mg',
            'Si persiste tras la tercera descarga, amiodarona trescientos miligramos, o lidocaína si no la hay.')])]
      )],
      ['Asistolia o AESP', N('alert', 'Ritmo no desfibrilable', 'No se descarga',
        'Si es asistolia o actividad eléctrica sin pulso, no se descarga: compresiones ininterrumpidas y adrenalina lo antes posible, y buscas la causa con las cinco H y las cinco T.',
        ['Se encuentra la causa', N('do', 'Tratar la causa', 'Calcio · volumen · descompresión · naloxona',
          'Con hiperkalemia, gluconato de calcio; con hipovolemia, volumen; con neumotórax a tensión, descompresión; con opioides, naloxona; con taponamiento, pericardiocentesis.')])],
      ['Retorno de circulación', N('ok', 'Cuidados post-paro', 'SpO₂ 92-98% · PAM ≥ 65 · ECG',
        'Si recuperas el pulso, mantienes la saturación entre noventa y dos y noventa y ocho, la presión media sobre sesenta y cinco y tomas un electrocardiograma: con supradesnivel, coronariografía urgente. El pronóstico neurológico se decide a las setenta y dos horas.')],
    ),
  },
};
