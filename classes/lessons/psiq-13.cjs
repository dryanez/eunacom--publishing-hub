// Clase 17.13 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1), reescrito desde el tema del libro. Tier 3 del libro.
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-13). Código del Perfil: 1.13.2.001 / 5.01.5.002 (books/data/v3_topic_codes.json).
// Preguntas reales (class_questions.cjs y --search "neuroléptico|serotoninérgico|rabdomiólisis|dantroleno|bromocriptina|CPK"):
//   Julio 2016 P141 (haloperidol sube de 10 a 20, rigidez, CPK 1200: SNM clásico), Enero 2023 P109 (flufenazina, fiebre, rigidez y taquicardia: SNM frente a hipertermia
//   maligna, serotoninérgico y distonía), Julio 2016 P61 (clorpromazina con retención urinaria y midriasis: síndrome anticolinérgico, el contraste que se confunde con el SNM).
// No usadas: Julio 2019 P18 (anticolinérgico, repite P61); Diciembre 2019 P9 (clave serotoninérgico sin hiperreflexia ni clonus en el enunciado: ambigua frente a lo que enseña el libro);
//   Agosto 2021 P105 y Julio 2016 P96 (polimiositis y rabdomiólisis por ejercicio: no son del SNM, aunque comparten CPK).
// Las cuatro preguntas del libro tienen etiqueta "Banco Oficial AEE" sin fecha: no se usan porque hay reales; el caso clínico es la viñeta del libro.
// Imágenes: ninguna. No hay foto verificada de SNM (el cuadro es clínico y de laboratorio) ni en atlas_fotos_verificadas.json ni en classes/media/biblioteca.
// Animación: gráfico solo de código (classes/scripts/jsvideo/scenes/psiq_nuevas.html?v=snm): curso en horas con el umbral de hipertermia, rigidez y CPK, y qué se hace en cada paso.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-13',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Síndrome neuroléptico maligno: fiebre, rigidez y CPK después de un antipsicótico, y qué hacer en la primera hora',
      say: 'Bienvenido. Hoy vemos una urgencia que nace de un tratamiento: el síndrome neuroléptico maligno. Aparece en un paciente que ya toma un antipsicótico, mata por falla renal y de otros órganos si se pasa por alto, y en el examen se pregunta de dos maneras. Una es reconocerlo, con su tétrada y su CPK altísima. La otra es distinguirlo del síndrome serotoninérgico. Y la conducta casi siempre empieza igual: suspender el fármaco. Partamos por el mecanismo.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Un bloqueo dopaminérgico que arrasa el músculo',
      nodes: [
        { id: 'b', col: 0, row: 2, k: 'cause', t: 'Bloqueo agudo de D2', s: 'Antipsicótico o retiro de levodopa' },
        { id: 'h', col: 1, row: 0, k: 'mech', t: 'Hipotálamo', s: 'Se descontrola el termostato' },
        { id: 't', col: 3, row: 0, k: 'effect', t: 'Hipertermia', s: 'Puede pasar de 40 °C' },
        { id: 'n', col: 1, row: 4, k: 'mech', t: 'Vía nigroestriada', s: 'Contracción tónica masiva' },
        { id: 'r', col: 3, row: 4, k: 'effect', t: 'Rigidez en caño de plomo', s: 'Generalizada' },
        { id: 'm', col: 4, row: 2, k: 'risk', t: 'Rabdomiólisis', s: 'CPK y mioglobina a la sangre' },
        { id: 'k', col: 4, row: 3, k: 'alert', t: 'Falla renal', s: 'Mioglobinuria, necrosis tubular' },
      ],
      edges: [
        { from: 'b', to: 'h' }, { from: 'b', to: 'n' }, { from: 'h', to: 't' },
        { from: 'n', to: 'r' }, { from: 'r', to: 'm' }, { from: 'm', to: 'k' },
      ],
      steps: [
        { show: ['b'], note: 'Todo parte con el bloqueo de la dopamina',
          say: 'El síndrome neuroléptico maligno es una reacción idiosincrática, es decir, que no depende de la dosis de forma predecible, a cualquier antipsicótico. Se produce por un bloqueo brusco y masivo de la dopamina en dos lugares. También ocurre al contrario: cuando a un paciente con Parkinson se le suspende de golpe la levodopa, porque el resultado es el mismo, falta dopamina.' },
        { show: ['h', 't'], note: 'Hipotálamo: pierde el control de la temperatura',
          say: 'El primer lugar es el hipotálamo anterior, que regula la temperatura. Sin dopamina pierde el control y aparece una hipertermia que puede pasar de los cuarenta grados. Y como el origen es central, el paracetamol no la corrige. Guarda esto, porque se pregunta como trampa.' },
        { show: ['n', 'r'], note: 'Nigroestriada: el músculo no se relaja',
          say: 'El segundo lugar es la vía nigroestriada, la de los ganglios basales. Con el bloqueo, el músculo queda contraído en forma continua. Es una rigidez generalizada, uniforme, que el examen describe como en caño de plomo.' },
        { show: ['m'], note: 'Contracción sostenida: se destruye el músculo',
          say: 'Esa contracción sostenida gasta el músculo hasta romperlo. Es una rabdomiólisis: las fibras se destruyen y liberan a la sangre la creatina fosfoquinasa, la CPK, y la mioglobina. Por eso la CPK es el sello de laboratorio de este síndrome.' },
        { show: ['k'], note: 'La mioglobina tapa el riñón',
          say: 'La mioglobina precipita en los túbulos del riñón y produce una necrosis tubular aguda. Esa falla renal, junto con el shock, explica la mortalidad histórica de diez a veinte por ciento. Todo el tratamiento que veremos busca frenar esta cadena.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Quién lo hace',
      title: 'Factores de riesgo',
      cards: [
        { title: 'Fármaco y manera de usarlo', tag: 'Qué sube el riesgo', kind: 'pharma', items: [
          { t: 'Alta potencia: haloperidol', d: 'Y depósito parenteral',
            say: 'Puede darlo cualquier antipsicótico, pero el riesgo es mayor con los típicos de alta potencia, como el haloperidol, y con las formulaciones de depósito.' },
          { t: 'Dosis altas o subida rápida', d: 'Los primeros días del ingreso',
            say: 'También cuando la dosis es alta o se sube rápido, que es lo que pasa en un ingreso por descompensación psicótica.' },
          { t: 'Retiro brusco de levodopa', d: 'En el paciente con Parkinson',
            say: 'Y no solo con antipsicóticos: el retiro brusco de agonistas dopaminérgicos en un paciente con Parkinson produce el mismo cuadro.' },
        ] },
        { title: 'Paciente', tag: 'Terreno', kind: 'key', items: [
          { t: 'Deshidratación y agitación previa', d: 'Sexo masculino',
            say: 'El terreno también cuenta: deshidratación, agitación previa y sexo masculino. Por eso el clásico del examen es un varón agitado, hospitalizado hace pocos días y sedado con dosis altas.' },
          { t: 'Mortalidad histórica 10 a 20 %', d: 'Falla multiorgánica y shock',
            say: 'La mortalidad histórica es de diez a veinte por ciento, por falla de varios órganos y shock. Es una emergencia vital.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'La tétrada: se arma en 24 a 72 horas',
      cards: [
        { title: 'Cuatro pilares', tag: 'Inseparables', kind: 'key', items: [
          { t: 'Hipertermia > 38 °C', d: 'Hasta 39,5 a 41; no cede con antipiréticos',
            say: 'El cuadro se arma en uno a tres días. Primer pilar, hipertermia: más de treinta y ocho grados y con frecuencia entre treinta y nueve y medio y cuarenta y uno, que no responde a los antipiréticos comunes.' },
          { t: 'Rigidez en caño de plomo', d: 'Resistencia uniforme y continua',
            say: 'Segundo, la rigidez muscular severa: una resistencia plástica, igual en todo el recorrido del movimiento, en las cuatro extremidades. A veces con rueda dentada.' },
          { t: 'Disautonomía', d: 'PA lábil, taquicardia, diaforesis',
            say: 'Tercero, la inestabilidad autonómica: presión que sube y baja, taquicardia sobre cien o ciento veinte, sudoración que empapa las sábanas, taquipnea e incontinencia.' },
          { t: 'Alteración de conciencia', d: 'Mutismo, estupor, coma',
            say: 'Y cuarto, la conciencia: parte con confusión o mutismo, sigue con estupor y puede llegar al coma.' },
        ] },
        { title: 'Cómo lo ves', tag: 'Examen', kind: 'alert', items: [
          { t: 'Reflejos normales o bajos', d: 'No hiperreflexia ni clonus',
            say: 'Un detalle del examen físico que después nos servirá: en este síndrome los reflejos están disminuidos, por la hipertonía plástica. No hay clonus.' },
          { t: 'Foco infeccioso: negativo', d: 'Pulmón y abdomen sin foco',
            say: 'Y no encuentras un foco infeccioso que explique la fiebre, aunque los leucocitos estén altos. Esa combinación simula una sepsis y es la razón de que se confunda.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Laboratorio',
      title: 'La CPK es el sello',
      cards: [
        { title: 'Qué se ve', tag: 'Exámenes urgentes', kind: 'criteria', items: [
          { t: 'CPK > 1.000, a menudo > 10.000', d: 'Puede llegar a 50.000 UI/L',
            say: 'El hallazgo central es la creatina fosfoquinasa muy elevada: habitualmente sobre mil unidades por litro y con frecuencia sobre diez mil, y puede llegar a cincuenta mil.' },
          { t: 'Leucocitos 15.000 a 30.000', d: 'Neutrofilia sin foco',
            say: 'Los leucocitos suben mucho, entre quince mil y treinta mil, con neutrofilia, sin una infección que lo explique.' },
          { t: 'BUN y creatinina altos', d: 'Mioglobinuria: orina pardo oscuro',
            say: 'Suben el nitrógeno ureico y la creatinina, y la orina sale de color pardo oscuro, con mioglobina en el sedimento.' },
          { t: 'Acidosis metabólica láctica', d: 'pH < 7,25 en los graves',
            say: 'Y aparece una acidosis metabólica láctica, por el metabolismo anaeróbico del músculo y la mala perfusión.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Gravedad',
      title: 'Marcadores de gravedad y falla de órganos',
      head: ['Parámetro', 'Valor crítico', 'Qué puede pasar'],
      rows: [
        { cells: ['CPK', '> 10.000 a 50.000 UI/L', 'Necrosis tubular por mioglobina'],
          say: 'La CPK sobre diez mil, hasta cincuenta mil, habla de una rabdomiólisis masiva, con riesgo de necrosis tubular aguda por mioglobina.' },
        { cells: ['Temperatura', '> 40 °C', 'Edema cerebral, convulsiones, colapso'],
          say: 'La temperatura sobre cuarenta grados es parálisis del centro termorregulador, y el riesgo es edema cerebral, convulsiones y colapso circulatorio.' },
        { cells: ['Creatinina y BUN', 'BUN sobre creatinina > 20, oliguria', 'Hemodiálisis'],
          say: 'Con relación nitrógeno ureico a creatinina sobre veinte y diuresis baja, la falla renal ya es mioglobinúrica y puede requerir hemodiálisis.' },
        { cells: ['Leucocitos', '> 20.000 a 30.000 / mm³', 'Parece sepsis'],
          say: 'Leucocitos sobre veinte mil son una respuesta inflamatoria hipermetabólica sin foco, que imita una sepsis grave.' },
        { cells: ['Gases arteriales', 'pH < 7,25', 'Arritmias y paro'],
          say: 'Y un pH bajo siete coma veinticinco es una acidosis láctica, que predispone a arritmias ventriculares y paro cardíaco.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico diferencial',
      title: 'Lo que se parece al SNM',
      cards: [
        { title: 'Serotoninérgico', tag: 'El que más se confunde', kind: 'key', items: [
          { t: 'Hiperreflexia y clonus', d: 'Diarrea, midriasis, temblor',
            say: 'El gran diferencial es el síndrome serotoninérgico, que dan los ISRS, el tramadol, los IMAO y el éxtasis. Tiene fiebre y taquicardia como el neuroléptico maligno, pero con hiperreflexia marcada y clonus, diarrea, temblor y midriasis.' },
          { t: 'Rigidez leve, de piernas', d: 'Inicio en horas, tras una coingesta',
            say: 'La rigidez es leve y de predominio en las piernas, y empieza en horas después de una sobredosis o una combinación de fármacos, no en días.' },
        ] },
        { title: 'Otros', tag: 'Descartar', kind: 'alert', items: [
          { t: 'Hipertermia maligna', d: 'Anestésicos halogenados o succinilcolina',
            say: 'La hipertermia maligna ocurre en el pabellón, en minutos, tras anestésicos inhalatorios como el sevoflurano o la succinilcolina, por una mutación del receptor de rianodina.' },
          { t: 'Meningitis o encefalitis', d: 'Punción lumbar si hay duda',
            say: 'Y siempre hay que descartar una infección del sistema nervioso central; si hay duda clínica, se hace punción lumbar.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'La comparación que se pregunta',
      title: 'Neuroléptico maligno frente a serotoninérgico',
      head: ['Dato', 'Neuroléptico maligno', 'Serotoninérgico'],
      rows: [
        { cells: ['Fármaco', 'Antipsicótico o retiro de levodopa', 'ISRS, tramadol, IMAO, éxtasis'],
          say: 'Primero, el fármaco. Antipsicóticos o retiro de levodopa en el neuroléptico maligno; ISRS, tramadol, IMAO o éxtasis en el serotoninérgico.' },
        { cells: ['Inicio', 'Días a semanas', 'Horas'],
          say: 'El inicio es subagudo, de días a semanas después de un cambio de dosis, contra horas después de una coingesta o una sobredosis.' },
        { cells: ['Tono muscular', 'Caño de plomo, extrema', 'Leve a moderada, en piernas'],
          say: 'El tono: rigidez extrema, uniforme y generalizada en el neuroléptico maligno, y leve a moderada en el serotoninérgico.' },
        { cells: ['Reflejos', 'Normales o disminuidos', 'Hiperreflexia y clonus'],
          say: 'Los reflejos son la clave del examen. En el neuroléptico maligno están normales o disminuidos; en el serotoninérgico hay hiperreflexia marcada y clonus.' },
        { cells: ['Pupilas y diarrea', 'Pupilas normales, estreñimiento', 'Midriasis y diarrea'],
          say: 'Las pupilas son normales en el neuroléptico maligno, mientras que en el serotoninérgico hay midriasis y diarrea profusa.' },
        { cells: ['Tratamiento', 'Dantroleno y bromocriptina', 'Ciproheptadina y benzodiacepinas'],
          say: 'Y el tratamiento específico: dantroleno y bromocriptina para uno; ciproheptadina y benzodiacepinas para el otro. En los dos, la primera medida es retirar el fármaco que lo causa.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Primera hora: suspender, enfriar, hidratar',
      cards: [
        { title: 'Medidas inmediatas', tag: 'Emergencia vital', kind: 'alert', items: [
          { t: 'Suspender el antipsicótico', d: 'Y la metoclopramida',
            say: 'La primera medida, absoluta y sin esperar exámenes, es suspender el antipsicótico, y también cualquier otro bloqueador de la dopamina, como la metoclopramida. Y se traslada a la Unidad de Paciente Crítico, la UPC.' },
          { t: 'Enfriamiento físico activo', d: 'No paracetamol',
            say: 'Se enfría con medidas físicas: compresas frías en cuello, axilas e ingles, mantas térmicas y sueros fríos. El paracetamol no sirve, porque la fiebre es de origen central y no inflamatorio.' },
          { t: 'Monitoreo y vía aérea', d: 'Hemodinamia continua',
            say: 'Se monitoriza la hemodinamia en forma continua y se protege la vía aérea.' },
        ] },
        { title: 'Proteger el riñón', tag: 'Hidratación', kind: 'key', items: [
          { t: 'Suero fisiológico 3 a 6 L al día', d: 'Meta: diuresis 2 a 3 mL/kg/h',
            say: 'Se hidrata de forma agresiva con suero fisiológico, tres a seis litros al día. La meta es una diuresis de dos a tres mililitros por kilo por hora, para arrastrar la mioglobina antes de que dañe el riñón.' },
          { t: 'Bicarbonato si hay acidosis grave', d: 'Alcalinizar la orina',
            say: 'Y si hay una acidosis grave, se alcaliniza la orina con bicarbonato de sodio.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fármacos de rescate',
      title: 'Cuando no basta con lo anterior',
      cards: [
        { title: 'Dopaminérgicos', tag: 'Devolver la dopamina', kind: 'pharma', items: [
          { t: 'Bromocriptina', d: '2,5 a 5 mg c/8 h, hasta 20 mg/día',
            say: 'Si el cuadro es grave o no cede, se agregan fármacos específicos. La bromocriptina es un agonista dopaminérgico que se da por vía oral o por sonda, dos y medio a cinco miligramos cada ocho horas, hasta veinte miligramos al día. Restaura el tono dopaminérgico del hipotálamo y del estriado.' },
          { t: 'Amantadina', d: '100 a 200 mg c/12 h',
            say: 'La amantadina es la alternativa: cien a doscientos miligramos cada doce horas.' },
        ] },
        { title: 'Relajante muscular', tag: 'Bloquear la contracción', kind: 'pharma', items: [
          { t: 'Dantroleno EV', d: '1 a 2,5 mg/kg; máx. 10 mg/kg/día',
            say: 'El dantroleno es un relajante de acción periférica: bloquea la liberación de calcio del retículo sarcoplásmico. Se da por vía endovenosa, uno a dos y medio miligramos por kilo en bolo, hasta diez miligramos por kilo al día.' },
          { t: 'Rigidez extrema con hipertermia', d: 'Suspender si hay hepatotoxicidad',
            say: 'Se reserva para la rigidez extrema con hipertermia severa e hipercatabolismo, y se suspende si aparece hepatotoxicidad.' },
        ] },
        { title: 'Lo que no va', tag: 'Errores', kind: 'alert', items: [
          { t: 'Mantener o subir el antipsicótico', d: 'Es la conducta mortal',
            say: 'Y lo que nunca va: mantener o subir el antipsicótico, y esperar que baje la fiebre solo con paracetamol.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Después de la crisis',
      title: 'Volver a un antipsicótico, con cuidado',
      cards: [
        { title: 'Reintroducción', tag: 'Solo si es necesario', kind: 'key', items: [
          { t: 'Esperar al menos 2 semanas', d: 'CPK y temperatura normales',
            say: 'Cuando el cuadro se resolvió, con la CPK y la temperatura normales por al menos catorce días, el paciente puede necesitar un antipsicótico por su enfermedad de base. Hay que esperar un mínimo de dos semanas de recuperación completa.' },
          { t: 'Baja afinidad D2: quetiapina o clozapina', d: 'Dosis mínima eficaz',
            say: 'Se elige un antipsicótico de segunda generación con baja afinidad por el receptor D dos, como la quetiapina o la clozapina, se parte con una dosis mínima y se vigilan de cerca la temperatura y la CPK.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Las primeras horas del síndrome neuroléptico maligno',
      images: [
        { src: 'animaciones/psiq-13/A1_curso_snm.mp4', label: 'Curso en horas y conducta', credit: 'Gráfico y animación propios' },
      ],
      steps: [
        { note: 'Fiebre, rigidez y CPK suben juntas; la conducta frena la cadena',
          say: 'Mira cómo evoluciona en el tiempo. Tras subir la dosis del antipsicótico, la temperatura, la rigidez y la CPK suben juntas durante uno a tres días. Cuando se cruza el umbral de treinta y ocho grados y la CPK pasa de mil, se actúa: se suspende el fármaco, se enfría y se hidrata de forma intensa. Observa que el riñón se protege si la diuresis se mantiene sobre la meta. Si hay rigidez extrema, se suman bromocriptina o dantroleno.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del paciente con fiebre y rigidez bajo antipsicóticos a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Neuroléptico maligno: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Fiebre, rigidez y CPK alta con haloperidol', 'Suspender y llevar a UPC', 'Subir el antipsicótico o dar antibiótico solo'],
          say: 'Fiebre, rigidez y CPK alta en un paciente con haloperidol: suspender el fármaco y llevar a la UPC. Subir la dosis o tratar solo como infección es el error mortal.' },
        { cells: ['Rigidez con hiperreflexia y clonus', 'Serotoninérgico: ciproheptadina', 'Dantroleno y bromocriptina'],
          say: 'Si hay hiperreflexia y clonus, es serotoninérgico y se maneja con ciproheptadina y benzodiacepinas. Dar dantroleno y bromocriptina es confundir los dos cuadros.' },
        { cells: ['Fiebre alta sin respuesta a paracetamol', 'Enfriar físicamente', 'Insistir con antipiréticos'],
          say: 'La fiebre central no cede con paracetamol: se enfría con medios físicos. Insistir con antipiréticos retrasa la conducta.' },
        { cells: ['CPK altísima y orina oscura', 'Suero fisiológico, diuresis forzada', 'Restringir líquidos'],
          say: 'CPK muy alta y orina oscura: suero fisiológico en abundancia, con diuresis sobre dos mililitros por kilo por hora, para proteger el riñón.' },
        { cells: ['Retención urinaria, midriasis, sequedad', 'Síndrome anticolinérgico', 'Neuroléptico maligno'],
          say: 'Retención urinaria, midriasis y mucosas secas bajo clorpromazina son un síndrome anticolinérgico, sin fiebre alta ni rigidez. No es el neuroléptico maligno.' },
        { cells: ['Rigidez extrema que no cede', 'Agregar bromocriptina o dantroleno', 'Biperideno'],
          say: 'Y si la rigidez no cede, se agrega bromocriptina o dantroleno. El biperideno trata la distonía, no este síndrome.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 31 años con esquizofrenia paranoide, ingresado hace 4 días por una descompensación psicótica agresiva, que recibe haloperidol 10 mg IM al día y clorpromazina 100 mg VO al día. En la visita de la mañana está soporoso, sin responder, con diaforesis profusa que empapa las sábanas. Temperatura axilar 39,8 °C, PA 175/105 mmHg muy lábil, FC 128 lpm, FR 28 rpm. Al movilizar las cuatro extremidades hay una rigidez extrema y continua en caño de plomo, con hiporreflexia osteotendinosa. Pulmón y abdomen sin foco. CPK 16.800 UI/L, leucocitos 19.500/mm³ con desviación a la izquierda, creatinina 2,3 mg/dL y orina de color pardo oscuro.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Ceftriaxona y vancomicina por sospecha de meningitis, manteniendo el antipsicótico' },
        { letter: 'B', text: 'Suspender los antipsicóticos, trasladar a UPC, hidratar con suero fisiológico y enfriar; agregar bromocriptina o dantroleno si no cede' },
        { letter: 'C', text: 'Aumentar el haloperidol para controlar la agitación y dar paracetamol' },
        { letter: 'D', text: 'Ciproheptadina y benzodiacepinas por síndrome serotoninérgico' },
        { letter: 'E', text: 'Biperideno intramuscular por distonía aguda' },
      ],
      correct: 'B',
      explanation: 'Es un síndrome neuroléptico maligno completo: tétrada (hipertermia, rigidez en caño de plomo, disautonomía y compromiso de conciencia) tras antipsicóticos de alta potencia, con rabdomiólisis (CPK > 16.000), leucocitosis y falla renal. La conducta es suspender todo antipsicótico, llevar a UPC, hidratar para forzar la diuresis (> 2-3 mL/kg/h), enfriar físicamente y agregar bromocriptina o dantroleno. Mantener o subir el antipsicótico es mortal.',
      say: {
        stem: 'Un hombre de treinta y un años con esquizofrenia lleva cuatro días hospitalizado y recibe haloperidol y clorpromazina. Esta mañana está soporoso, empapado en sudor, con temperatura de treinta y nueve coma ocho, presión muy lábil y taquicardia. Tiene una rigidez extrema en las cuatro extremidades, con reflejos disminuidos, y no hay foco infeccioso. La CPK es de dieciséis mil ochocientos, los leucocitos están en diecinueve mil quinientos, la creatinina sube y la orina es pardo oscura.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Las opciones: antibióticos por meningitis manteniendo el antipsicótico; suspender los antipsicóticos, ir a UPC, hidratar y enfriar; subir el haloperidol y dar paracetamol; ciproheptadina por serotoninérgico; o biperideno por distonía. Piénsalo.',
        answer: 'Es la B. Es un síndrome neuroléptico maligno clásico: tétrada completa, CPK altísima y falla renal por mioglobina. Se suspende todo antipsicótico, se traslada a UPC, se hidrata para forzar la diuresis y se enfría; si no cede, bromocriptina o dantroleno. La A tienta porque la fiebre con compromiso de conciencia sugiere meningitis, pero la rigidez en caño de plomo con CPK alta y el antipsicótico lo explican. La C es la conducta mortal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 141',
      stem: 'Un hombre de 48 años, diagnosticado de esquizofrenia, presenta episodio de agitación, por lo cual se aumenta la dosis de haloperidol de 10 a 20 mg al día, evolucionando con malestar general, dificultad para la marcha y disminución del nivel de conciencia. Al examen físico, tiene FC: 100x\', PA: 140/90 mmHg, temperatura 38 grados Celsius y rigidez de las extremidades. Se solicitan exámenes, en los que destaca leucocitosis de 19.000 blancos por mm3 y CPK de 1200 UI/L.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Distonía' },
        { letter: 'B', text: 'Síndrome neuroléptico maligno' },
        { letter: 'C', text: 'Síndrome anticolinérgico' },
        { letter: 'D', text: 'Síndrome adrenérgico' },
        { letter: 'E', text: 'Distrofia muscular de Duchenne' },
      ],
      correct: 'B',
      explanation: 'Síndrome neuroléptico maligno clásico: se inicia o se aumenta la dosis de un neuroléptico y evoluciona con rigidez, hipertermia y compromiso de conciencia, con leucocitosis y CPK elevada. En el caso la CPK es de solo 1.200: un valor modesto igual lo hace diagnóstico en el contexto, aunque lo habitual es sobre 1.000 y a menudo sobre 10.000.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un hombre de cuarenta y ocho años con esquizofrenia está agitado y le duplican el haloperidol, de diez a veinte miligramos al día. Evoluciona con malestar, dificultad para caminar y menor nivel de conciencia. Tiene treinta y ocho grados, rigidez de las extremidades, leucocitos en diecinueve mil y una CPK de mil doscientos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: distonía; síndrome neuroléptico maligno; síndrome anticolinérgico; síndrome adrenérgico; o distrofia muscular de Duchenne. Piénsalo.',
        answer: 'Es la B. Se aumentó el neuroléptico y aparecieron rigidez, hipertermia y compromiso de conciencia, con leucocitosis y CPK alta. Fíjate que la CPK es de solo mil doscientos: no necesitas diez mil para plantearlo, basta que esté sobre mil en el contexto. La A tienta, porque la distonía también es un efecto del haloperidol, pero es una contracción focal y dolorosa, sin fiebre ni alteración de conciencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 109',
      stem: 'Paciente en tratamiento con flufenazina, presenta alteración de conciencia, fiebre, rigidez de extremidades y taquicardia.',
      question: '¿Diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hipertermia maligna anestésica' },
        { letter: 'B', text: 'Síndrome serotoninérgico' },
        { letter: 'C', text: 'Crisis distónica aguda' },
        { letter: 'D', text: 'Síndrome neuroléptico maligno' },
        { letter: 'E', text: 'Encefalitis autoinmune' },
      ],
      correct: 'D',
      explanation: 'Antipsicótico (flufenazina) más alteración de conciencia, fiebre, rigidez y taquicardia: síndrome neuroléptico maligno. La hipertermia maligna ocurre en el pabellón con anestésicos; el serotoninérgico, con fármacos serotoninérgicos e hiperreflexia y clonus; la distonía es focal y sin fiebre.',
      say: {
        stem: 'Una pregunta real del EUNACOM de enero de dos mil veintitrés. Un paciente en tratamiento con flufenazina, un antipsicótico típico, presenta alteración de conciencia, fiebre, rigidez de las extremidades y taquicardia.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hipertermia maligna anestésica; síndrome serotoninérgico; crisis distónica aguda; síndrome neuroléptico maligno; o encefalitis autoinmune. Piénsalo.',
        answer: 'Es la D. Un antipsicótico más fiebre, rigidez, taquicardia y compromiso de conciencia es la tétrada. La A tienta porque también hay fiebre y rigidez, pero la hipertermia maligna ocurre en minutos durante una anestesia con halogenados o succinilcolina. Y el serotoninérgico necesitaría un fármaco serotoninérgico y reflejos exaltados.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 61',
      stem: 'Un paciente de 24 años, con antecedente de retraso mental severo, en tratamiento con clorpromazina, aumenta la dosis de 100 mg al día a 300 mg al día. Evoluciona con mayor agresividad, asociada a retención urinaria y constipación. Al examen destacan mucosas secas y midriasis.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Síndrome colinérgico' },
        { letter: 'B', text: 'Síndrome anticolinérgico' },
        { letter: 'C', text: 'Síndrome neuroléptico maligno' },
        { letter: 'D', text: 'Síndrome serotoninérgico' },
        { letter: 'E', text: 'Síndrome adrenérgico' },
      ],
      correct: 'B',
      explanation: 'Síndrome anticolinérgico clásico: retención urinaria, constipación, mucosas secas y midriasis tras subir un antipsicótico de baja potencia. El colinérgico tiene miosis, vómitos y bradicardia; el neuroléptico maligno, hipertermia, rigidez y compromiso de conciencia; el serotoninérgico, hipertonía y compromiso de conciencia; el adrenérgico, hipertensión, taquicardia, hipertermia y temblor.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un paciente de veinticuatro años con retraso mental severo sube la clorpromazina de cien a trescientos miligramos al día. Queda más agresivo, con retención urinaria, constipación, mucosas secas y midriasis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: síndrome colinérgico; anticolinérgico; neuroléptico maligno; serotoninérgico; o adrenérgico. Piénsalo.',
        answer: 'Es la B. Retención de orina, constipación, sequedad y midriasis es el síndrome anticolinérgico, que también dan los antipsicóticos, sobre todo los de baja potencia como la clorpromazina. La C tienta porque hay un antipsicótico y una dosis que sube, pero faltan la fiebre alta, la rigidez y la CPK. Y la A es el opuesto: el colinérgico tiene pupilas contraídas.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: síndrome neuroléptico maligno',
      cards: [
        { title: 'Reconocer', tag: 'Tétrada y CPK', kind: 'key', items: [
          { t: 'Fiebre, caño de plomo, disautonomía, conciencia', d: 'Tras subir o iniciar un antipsicótico',
            say: 'Cerremos con las reglas de oro. Fiebre, rigidez en caño de plomo, inestabilidad autonómica y compromiso de conciencia, después de iniciar o subir un antipsicótico, es un síndrome neuroléptico maligno hasta que se demuestre lo contrario.' },
          { t: 'CPK muy alta, reflejos normales o bajos', d: 'Serotoninérgico: hiperreflexia y clonus',
            say: 'La CPK está muy elevada y los reflejos están normales o bajos. Si hay hiperreflexia y clonus, piensa en serotoninérgico.' },
        ] },
        { title: 'Conducta', tag: 'En orden', kind: 'alert', items: [
          { t: 'Suspender, UPC, enfriar, hidratar', d: 'Diuresis 2 a 3 mL/kg/h',
            say: 'La conducta es suspender el antipsicótico, trasladar a la UPC, enfriar con medios físicos e hidratar con suero fisiológico hasta una diuresis de dos a tres mililitros por kilo por hora.' },
          { t: 'Bromocriptina o dantroleno', d: 'Si es grave o refractario',
            say: 'Si es grave o no cede, se suma bromocriptina o dantroleno. Si te llevas una sola idea de hoy: ante un antipsicótico con fiebre, rigidez y CPK alta, lo primero es suspender el fármaco, y lo segundo, hidratar para proteger el riñón. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Síndrome neuroléptico maligno: del examen a la conducta',
    root: N('start', 'Fiebre y rigidez bajo antipsicótico', 'Disautonomía y alteración de conciencia',
      'Un paciente que toma un antipsicótico, o que dejó de golpe la levodopa, presenta fiebre, rigidez, inestabilidad autonómica y compromiso de conciencia. La primera pregunta es qué dicen los reflejos.',
      ['Hiperreflexia y clonus', N('do', 'Serotoninérgico', 'Ciproheptadina y benzodiacepinas',
        'Si hay hiperreflexia marcada y clonus, con diarrea y midriasis, y un fármaco serotoninérgico de por medio, es un síndrome serotoninérgico. Se retira el fármaco y se usa ciproheptadina con benzodiacepinas.')],
      ['Rigidez en caño de plomo y CPK alta', N('alert', 'Neuroléptico maligno', 'Suspender el fármaco y a UPC',
        'Si hay rigidez plástica con reflejos normales o bajos, CPK alta y leucocitosis sin foco, es un síndrome neuroléptico maligno. Se suspende de inmediato todo bloqueador dopaminérgico y se traslada a la Unidad de Paciente Crítico.',
        ['Soporte', N('do', 'Hidratar y enfriar', 'Suero fisiológico; diuresis 2 a 3 mL/kg/h',
          'Se hidrata de forma agresiva con suero fisiológico para forzar la diuresis y proteger el riñón, y se enfría con medios físicos. No se da paracetamol como medida central.')],
        ['Grave o refractario', N('do', 'Bromocriptina o dantroleno', 'Dopaminérgico o relajante muscular',
          'Si la rigidez es extrema o la hipertermia no cede, se agrega bromocriptina, un agonista dopaminérgico, o dantroleno endovenoso, que bloquea la liberación de calcio del músculo.',
          ['Resuelto', N('ok', 'Reintroducir con cuidado', 'Esperar 2 semanas; quetiapina o clozapina',
            'Con CPK y temperatura normales por catorce días, si todavía necesita un antipsicótico, se espera al menos dos semanas y se elige uno de baja afinidad por el receptor D dos, a dosis mínima y con control de temperatura y CPK.')],
        )],
      )],
      ['Fiebre en pabellón, minutos después de anestesia', N('alert', 'Hipertermia maligna', 'Dantroleno; suspender anestésico',
        'Si la rigidez y la fiebre aparecen en minutos durante una anestesia con halogenados o succinilcolina, es una hipertermia maligna, que se trata también con dantroleno y suspendiendo el anestésico.')],
    ),
  },
};
