// Clase 17.15 (Psiquiatría) — guion docente escrito a mano (estándar Módulo 1), reescrito desde el tema del libro. Tier 3 del libro.
// Fuente clínica: books/scripts/dataset_psiquiatria.cjs (psiq-15). Códigos del Perfil: 5.01.1.012 Dependencia de alcohol, 1.10.2.004 Estado confusional agudo, 1.10.3.001 Manifestaciones
// neurológicas del abuso de sustancias, 5.01.5.001 EBBA y 1.02.2.004 Déficit agudo de tiamina (books/data/v3_topic_codes.json).
// Preguntas reales (class_questions.cjs psiq-15 y --search "alcohol|abstinencia|tiamina|wernicke|tremens|korsakoff|disulfiram|naltrexona|CIWA"):
//   Diciembre 2025 P72 (antecedente de abstinencia con alucinaciones: desintoxicación hospitalaria), Julio 2025 P103 (delirium tremens: diazepam, tiamina y electrolitos),
//   Julio 2017 P51 (delirium tremens en cirrótico: lorazepam), Julio 2017 P114 (abstinencia moderada sin delirium ni convulsiones).
// No usadas: Enero 2023 P131 y Julio 2019 P15 y Diciembre 2019 P37 y Julio 2015 P81 (delirium tremens, repiten P103),
//   Agosto 2021 P133 (abstinencia, repite P114), Diciembre 2024 P36 (definición de adicción, no está en el libro), la de la entrevista motivacional (Diciembre 2025 P73) va en la clase 16.
// DESCARTADAS: Diciembre 2022 P148 (delirium tremens con clave «tiamina» y explicación copiada de demencia; el libro y las otras del banco dan benzodiacepinas),
//   Diciembre 2024 P22 (Wernicke tras cirugía bariátrica: las alternativas D y E son de otra pregunta y la A tiene la explicación pegada),
//   Diciembre 2025 P89 (cerebelitis paraneoplásica, fuera del libro).
// Sin pregunta real limpia sobre Wernicke ni deshabituación: se usa una pregunta del libro como «Caso representativo» (tiamina antes de la glucosa); las demás del libro se omiten porque hay reales.
// Imágenes: ninguna. No hay foto verificada de temas de alcohol en atlas_fotos_verificadas.json ni en classes/media/biblioteca (la RM de Wernicke no está en los libros extraídos).
// Animación: gráfico solo de código (psiq_nuevas.html?v=alcohol): cronología de la abstinencia en horas con el estado de conciencia y la conducta de cada etapa.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'psiq-15',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Abstinencia alcohólica, delirium tremens y Wernicke: la tiamina antes de la glucosa y la benzodiacepina según el hígado',
      say: 'Bienvenido. El alcohol es la principal adicción en Chile, y en el examen se pregunta por lo que pasa cuando el paciente deja de beber. Veremos la cronología de la abstinencia, cómo se mide con la escala CIWA, qué benzodiacepina se elige según el hígado, y una regla que se repite en todas las pruebas: siempre tiamina antes del suero glucosado. Partamos por qué le pasa esto al cerebro.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Un cerebro adaptado al alcohol y de pronto sin él',
      nodes: [
        { id: 'c', col: 0, row: 0, k: 'cause', t: 'Alcohol crónico', s: 'GABA-A abajo, NMDA arriba' },
        { id: 'z', col: 0, row: 3, k: 'trap', t: 'Cese o baja brusca', s: 'La alcoholemia cae' },
        { id: 's', col: 2, row: 2, k: 'mech', t: 'Tormenta glutamato y noradrenalina', s: 'Sin freno gabaérgico' },
        { id: 'a', col: 4, row: 1, k: 'effect', t: 'Hiperactividad autonómica', s: 'Temblor, taquicardia, sudor' },
        { id: 'n', col: 4, row: 3, k: 'alert', t: 'Neurotoxicidad', s: 'Convulsión y delirium tremens' },
      ],
      edges: [
        { from: 'c', to: 's' }, { from: 'z', to: 's' }, { from: 's', to: 'a' }, { from: 's', to: 'n' },
      ],
      steps: [
        { show: ['c'], note: 'El cerebro se adapta al alcohol',
          say: 'El alcohol potencia el receptor GABA-A, que inhibe, y bloquea el receptor NMDA del glutamato, que excita. Con el consumo crónico, el cerebro se adapta: baja los receptores GABA-A y sube los NMDA, para compensar. El bebedor crónico funciona con un sistema nervioso empujado hacia la calma por el alcohol.' },
        { show: ['z', 's'], note: 'Se quita el freno y queda el acelerador',
          say: 'Cuando el consumo se interrumpe o baja bruscamente, desaparece el freno y queda el acelerador. Se produce una tormenta de glutamato y de noradrenalina. Eso es el síndrome de abstinencia.' },
        { show: ['a'], note: 'Lo que se ve primero',
          say: 'Lo primero que se ve es la hiperactividad autonómica: temblor fino de las manos, sudor, taquicardia, hipertensión, náuseas e insomnio.' },
        { show: ['n'], note: 'Lo que mata',
          say: 'Y lo que mata es la neurotoxicidad: las convulsiones y el delirium tremens, que tiene una mortalidad que el libro da hasta de quince por ciento sin tratamiento. Veamos en qué momento aparece cada cosa.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Cronología',
      title: 'Qué aparece y cuándo, desde el último trago',
      head: ['Síndrome', 'Cuándo', 'Clínica', 'Conciencia'],
      rows: [
        { cells: ['Abstinencia leve', '6 a 12 horas', 'Temblor, sudor, taquicardia, náuseas', 'Vigil y orientado'],
          say: 'A las seis a doce horas aparece la abstinencia leve: temblor fino distal, sudoración, taquicardia, náuseas y ansiedad. El paciente está vigil y orientado.' },
        { cells: ['Alucinosis alcohólica', '12 a 24 horas', 'Alucinaciones auditivas o visuales', 'Lúcido y orientado'],
          say: 'Entre las doce y las veinticuatro horas puede aparecer la alucinosis alcohólica: alucinaciones auditivas o visuales con el sensorio completamente lúcido y orientado. Esa es la diferencia con el delirium tremens.' },
        { cells: ['Convulsiones', '12 a 48 horas', 'Tónico-clónicas generalizadas', 'Postictal breve'],
          say: 'Entre las doce y las cuarenta y ocho horas, pueden venir las convulsiones de abstinencia, tónico-clónicas generalizadas, únicas o en una salva breve. Se tratan con benzodiacepinas.' },
        { cells: ['Delirium tremens', '48 a 96 horas', 'Confusión, zoopsias, fiebre, disautonomía', 'Compromiso severo'],
          say: 'Entre las cuarenta y ocho y las noventa y seis horas, y hasta siete días, aparece el delirium tremens: confusión global, desorientación, temblor grosero, fiebre, sudor profuso, agitación y zoopsias, que es ver insectos, culebras o ratas. Ahí el sensorio está comprometido.' },
        { cells: ['Encefalopatía de Wernicke', 'Cualquier momento', 'Oftalmoplejía, ataxia, confusión', 'Confusional o estupor'],
          say: 'Y la encefalopatía de Wernicke puede aparecer en cualquier momento, porque depende del déficit de tiamina y no del tiempo desde la última copa.' },
      ],
    },

    {
      type: 'points',
      kicker: 'La diferencia que se pregunta',
      title: 'Alucinosis, convulsión y delirium tremens',
      cards: [
        { title: 'Alucinosis y convulsión', tag: 'Primeras 48 horas', kind: 'criteria', items: [
          { t: 'Alucinosis: alucina, pero sabe dónde está', d: 'Lúcido y orientado',
            say: 'La alucinosis y el delirium tremens se parecen por las alucinaciones, y se separan por la conciencia. En la alucinosis el paciente escucha voces o ve cosas, pero está lúcido, sabe dónde está y la fecha, y puede incluso reconocer que las voces vienen de haber dejado el trago.' },
          { t: 'Convulsión: benzodiacepina', d: 'No fenitoína de mantención',
            say: 'La convulsión de abstinencia es autolimitada y se trata de forma aguda con benzodiacepinas. No requiere anticonvulsivantes de mantención como la fenitoína, y esa es una trampa del examen.' },
        ] },
        { title: 'Delirium tremens', tag: 'Emergencia vital', kind: 'alert', items: [
          { t: 'Confusión global, desorientación', d: 'Compromiso severo de conciencia',
            say: 'En el delirium tremens hay confusión global, desorientación en tiempo, espacio y persona, y la atención no se puede captar.' },
          { t: 'Fiebre, taquicardia, sudor', d: 'Temblor grosero y agitación',
            say: 'Con una disautonomía severa: fiebre, taquicardia, hipertensión, sudor profuso y temblor grosero. El paciente grita aterrorizado por animales que ve en las sábanas.' },
          { t: 'Mortalidad de 5 a 15 % sin tratamiento', d: 'Hospitalizar',
            say: 'Es una emergencia médica vital, con una mortalidad de cinco a quince por ciento sin tratamiento, y por eso se hospitaliza.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Medir para decidir',
      title: 'La escala CIWA-Ar',
      cards: [
        { title: 'Qué mide', tag: 'Escala de 0 a 67', kind: 'criteria', items: [
          { t: 'Náuseas, temblor, sudor, ansiedad', d: 'Agitación y cefalea',
            say: 'La escala CIWA-Ar cuantifica la gravedad de la abstinencia y guía cuánta benzodiacepina dar. Evalúa náuseas, temblor, sudoración, ansiedad, agitación, alteraciones táctiles, auditivas y visuales, cefalea y orientación, en un puntaje de cero a sesenta y siete.' },
        ] },
        { title: 'Cómo se usa', tag: 'Tres cortes', kind: 'key', items: [
          { t: 'Menos de 10: leve', d: 'Sin benzodiacepinas de rutina',
            say: 'Con menos de diez puntos la abstinencia es leve y no se dan benzodiacepinas de rutina. El manejo es ambulatorio, con un familiar que acompañe, hidratación y complejo B oral.' },
          { t: '10 a 19: moderada', d: 'Benzodiacepina oral supervisada',
            say: 'De diez a diecinueve es moderada. Se usan benzodiacepinas por vía oral, bajo observación en urgencias.' },
          { t: '20 o más: severa', d: 'Hospitalizar; sobre 30 o DT: UPC',
            say: 'Con veinte puntos o más es severa: hospitalización obligatoria en cama monitorizada. Sobre treinta o con delirium tremens, el ingreso es a la Unidad de Paciente Crítico.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Esquema según CIWA',
      title: 'Cuánta benzodiacepina y dónde',
      head: ['CIWA-Ar', 'Benzodiacepina', 'Destino'],
      rows: [
        { cells: ['Menos de 10', 'No de rutina', 'Ambulatorio con familiar'],
          say: 'Con menos de diez, medidas generales y observación, sin benzodiacepina de rutina, en el domicilio con un familiar que contenga.' },
        { cells: ['10 a 19', 'Diazepam 10-20 mg VO cada 1-2 h hasta CIWA < 10', 'Urgencias o cama básica'],
          say: 'De diez a diecinueve: diazepam diez a veinte miligramos por vía oral cada una a dos horas, hasta bajar de diez, o lorazepam dos miligramos si hay hepatopatía. En observación o cama básica.' },
        { cells: ['20 a 30', 'Diazepam 20 mg VO cada hora o 10 mg EV lento cada 15 min', 'Hospitalización monitorizada'],
          say: 'De veinte a treinta: diazepam veinte miligramos oral cada hora, o diez miligramos endovenosos lentos cada quince minutos, hasta una sedación tranquila. Hospitalización monitorizada.' },
        { cells: ['Más de 30 o delirium tremens', 'Bolos repetidos o infusión continua EV', 'UPC'],
          say: 'Sobre treinta o con delirium tremens: bolos repetidos o infusión continua endovenosa, con monitoreo hemodinámico, en la Unidad de Paciente Crítico.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Qué benzodiacepina',
      title: 'Diazepam o lorazepam: lo decide el hígado',
      cards: [
        { title: 'Hígado conservado', tag: 'Diazepam', kind: 'pharma', items: [
          { t: 'Diazepam: primera línea', d: 'Inicio rápido, vida media larga',
            say: 'Si el hígado funciona, la primera línea es el diazepam, por su inicio rápido y su vida media larga con metabolitos activos. Eso produce una autotitulación suave y previene las convulsiones de rebote.' },
        ] },
        { title: 'Cirrosis, anciano o EPOC grave', tag: 'Lorazepam', kind: 'pharma', items: [
          { t: 'Lorazepam: sin metabolitos activos', d: '2 a 4 mg VO o SL cada 2 h',
            say: 'En el cirrótico, en el anciano y en el paciente con EPOC grave se prefiere el lorazepam, dos a cuatro miligramos oral o sublingual cada dos horas. Se elimina por glucuronidación directa, sin metabolitos activos, y no se acumula cuando el hígado falla.' },
        ] },
        { title: 'Lo que no va', tag: 'Errores', kind: 'alert', items: [
          { t: 'Haloperidol solo o fenitoína', d: 'No tratan la abstinencia',
            say: 'El haloperidol solo no trata la abstinencia, y la fenitoína no previene sus convulsiones. En el delirium tremens la excepción a las psicosis agitadas es que se usan benzodiacepinas, no antipsicóticos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Wernicke',
      title: 'Tiamina antes de la glucosa',
      cards: [
        { title: 'Tríada de Wernicke', tag: 'Emergencia neurológica', kind: 'alert', items: [
          { t: 'Oftalmoplejía o nistagmo', d: 'Parálisis del VI par o de la mirada',
            say: 'La encefalopatía de Wernicke es una emergencia neurológica por déficit de tiamina, la vitamina B uno, frecuente en alcohólicos por desnutrición y malabsorción. Tiene tres signos. Primero, la oftalmoplejía: parálisis del sexto par, nistagmo o parálisis de la mirada conjugada.' },
          { t: 'Ataxia de marcha y tronco', d: 'No puede ponerse de pie',
            say: 'Segundo, la ataxia de la marcha y del tronco, en que el paciente no logra mantenerse de pie.' },
          { t: 'Confusión aguda', d: 'Solo 30 % tiene la tríada completa',
            say: 'Y tercero, el síndrome confusional agudo. La tríada completa aparece solo en el treinta por ciento, así que basta uno o dos signos en un bebedor crónico para sospecharlo.' },
        ] },
        { title: 'La regla de oro', tag: 'Siempre', kind: 'key', items: [
          { t: 'Tiamina antes de cualquier glucosado', d: 'La glucosa consume la B1',
            say: 'Y la regla que se repite: siempre tiamina antes de cualquier suero glucosado. La tiamina es cofactor de enzimas del metabolismo de la glucosa. Si pasas glucosa sin tiamina, consumes las últimas reservas de vitamina B uno, y causas acidosis láctica focal y necrosis de los cuerpos mamilares y del tálamo.' },
          { t: 'Reversible pasa a irreversible', d: 'Daño cerebral permanente',
            say: 'Eso transforma un cuadro reversible en un daño cerebral permanente.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tiamina',
      title: 'Dosis, vía y Korsakoff',
      cards: [
        { title: 'Cómo se da', tag: 'Parenteral', kind: 'pharma', items: [
          { t: 'Wernicke: 500 mg EV, 3 veces al día', d: 'Por 2 a 3 días; luego 250 mg al día',
            say: 'Si sospechas Wernicke, se da tiamina quinientos miligramos endovenosa, tres veces al día, por dos a tres días, y luego doscientos cincuenta miligramos al día por tres a cinco días más, seguido de cien miligramos orales diarios.' },
          { t: 'Profilaxis: 100 a 250 mg al día IM o EV', d: 'Todo alcohólico hospitalizado',
            say: 'Como profilaxis, en todo alcohólico hospitalizado o desnutrido se dan cien a doscientos cincuenta miligramos al día, intramuscular o endovenosa.' },
          { t: 'La vía oral no sirve', d: 'Absorbe mal',
            say: 'La vía oral no sirve para tratar el Wernicke, porque el alcohólico absorbe mal.' },
        ] },
        { title: 'Síndrome de Korsakoff', tag: 'Secuela', kind: 'alert', items: [
          { t: 'Amnesia anterógrada profunda', d: 'No incorpora información nueva',
            say: 'El síndrome de Korsakoff es la secuela crónica e irreversible de un Wernicke que no se trató a tiempo. Se caracteriza por amnesia anterógrada profunda: el paciente no logra incorporar información nueva.' },
          { t: 'Confabulación', d: 'Memoria remota conservada',
            say: 'Y por confabulación: inventa sin querer historias verosímiles para llenar sus vacíos, mientras la memoria remota queda relativamente preservada.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estado confusional',
      title: 'El alcohólico confuso no siempre es abstinencia',
      cards: [
        { title: 'Descartar', tag: 'Otras causas', kind: 'alert', items: [
          { t: 'Hipoglicemia', d: 'Glicemia capilar de inmediato',
            say: 'Un alcohólico confuso tiene otras causas posibles, además del delirium tremens y del Wernicke. La primera es la hipoglicemia, por eso se mide la glicemia capilar de inmediato.' },
          { t: 'Encefalopatía hepática, hiponatremia, uremia', d: 'Amonemia, electrolitos, función renal',
            say: 'Después la encefalopatía hepática, la hiponatremia y la uremia, para lo que se piden electrolitos, función hepática y renal y amonemia.' },
          { t: 'Hemorragia subdural, infección, otras drogas', d: 'TAC si trauma o focalidad',
            say: 'Y la hemorragia subdural por caídas, las infecciones y la intoxicación por otras sustancias. El TAC se pide si hay trauma, focalidad o la causa no está clara, y se da tiamina mientras se trata la causa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'En atención primaria',
      title: 'Tamizaje, etapas del cambio y fármacos de mantención',
      cards: [
        { title: 'Tamizar y motivar', tag: 'EBBA, AUDIT, Prochaska', kind: 'criteria', items: [
          { t: 'EBBA: tamizaje, no diagnóstico', d: 'Sí o no, sin juicio',
            say: 'En atención primaria, la escala breve de beber anormal, la EBBA, es un tamizaje rápido de preguntas de sí o no. Orienta, pero no diagnostica por sí sola. Se aplica a solas y sin juzgar.' },
          { t: 'AUDIT: menos de 8, 8 a 15, más de 16', d: 'Riesgo bajo, intervención breve, derivar',
            say: 'El AUDIT clasifica: menos de ocho es bajo riesgo; ocho a quince, consumo de riesgo, con consejería e intervención breve; y sobre dieciséis, probable dependencia, con derivación a un programa especializado.' },
          { t: 'Precontemplación a mantención', d: 'Adaptar la intervención, sin confrontar',
            say: 'La entrevista motivacional se adapta a la etapa del cambio: precontemplación, contemplación, preparación, acción y mantenimiento. No se confronta.' },
        ] },
        { title: 'Fármacos para mantener la abstinencia', tag: 'Deshabituación', kind: 'pharma', items: [
          { t: 'Naltrexona 50 mg al día', d: 'Reduce el craving; no con opioides ni hepatitis',
            say: 'La naltrexona, cincuenta miligramos al día, bloquea los receptores opioides y reduce el craving y el placer del alcohol. Está contraindicada si usa opioides o hay falla hepática aguda.' },
          { t: 'Disulfiram 250 mg al día', d: 'Reacción aversiva; exige motivación y supervisión',
            say: 'El disulfiram inhibe la aldehído deshidrogenasa, y si el paciente bebe se acumula acetaldehído, con vómitos, rubor e hipotensión. Exige un paciente muy motivado y supervisado.' },
          { t: 'Acamprosato', d: 'Seguro en falla hepática',
            say: 'El acamprosato modula el glutamato y reduce la disforia de la abstinencia prolongada. Se elimina por el riñón y es seguro en insuficiencia hepática.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'El reloj de la abstinencia alcohólica',
      images: [
        { src: 'animaciones/psiq-15/A1_reloj_abstinencia.mp4', label: 'Cronología de la abstinencia', credit: 'Gráfico y animación propios' },
      ],
      steps: [
        { note: 'Cada etapa tiene su hora, su conciencia y su conducta',
          say: 'Mira cómo avanza el tiempo desde el último trago. Primero el temblor, luego la alucinosis con la conciencia intacta, y las convulsiones. Solo después de las cuarenta y ocho horas aparece el delirium tremens, y ahí la conciencia se enturbia. Observa la tiamina en cada etapa: antes de la glucosa, siempre. Y al final, el cuadro de conducta: benzodiacepinas guiadas por la escala, diazepam, o lorazepam si hay cirrosis.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del bebedor que consulta a la conducta, con la tiamina por delante.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Alcohol: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Alcohólico confuso con hipoglicemia', 'Tiamina, luego glucosa', 'Glucosa sola'],
          say: 'Un alcohólico confuso con hipoglicemia: tiamina primero y luego la glucosa. La glucosa sola puede precipitar un Wernicke irreversible.' },
        { cells: ['Alucinaciones y está orientado', 'Alucinosis alcohólica', 'Delirium tremens'],
          say: 'Alucinaciones con sensorio lúcido y orientado, a las doce a veinticuatro horas: alucinosis. Llamarlo delirium tremens es el error.' },
        { cells: ['48 a 96 h, confuso, fiebre, zoopsias', 'Delirium tremens: benzodiacepina', 'Haloperidol solo'],
          say: 'Cuarenta y ocho a noventa y seis horas, confuso, con fiebre y zoopsias: delirium tremens, que se trata con benzodiacepinas. El haloperidol solo es el error clásico.' },
        { cells: ['Abstinencia en cirrótico', 'Lorazepam', 'Diazepam'],
          say: 'Abstinencia en un cirrótico: lorazepam, que no se acumula. El diazepam, con sus metabolitos activos, se acumula.' },
        { cells: ['Convulsión de abstinencia', 'Benzodiacepina aguda', 'Fenitoína de mantención'],
          say: 'Convulsión de abstinencia: benzodiacepina de forma aguda. Fenitoína de mantención no está indicada.' },
        { cells: ['Antecedente de abstinencia con alucinaciones', 'Desintoxicar en hospital', 'Suspender en casa de golpe'],
          say: 'Quien ya tuvo una abstinencia grave y quiere dejar de beber: desintoxicación hospitalaria. Suspender en la casa es riesgoso por el delirium tremens.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 49 años con consumo perjudicial de alcohol de 20 años (1 litro de vino y pisco al día) que dejó de beber bruscamente hace 60 horas tras una discusión. Lo traen por agitación, sudoración profusa y temblor extremo. Está desorientado en tiempo, espacio y persona, con atención inatrapable, temblor grosero que le impide sostener un vaso, PA 175/100 mmHg, FC 124 lpm, temperatura axilar 38,3 °C. Grita aterrorizado señalando que las sábanas están llenas de arañas negras gigantes. CIWA-Ar estimado: 26 puntos. Tiene eritema palmar y arañas vasculares, con hepatopatía crónica compensada.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Haloperidol 5 mg IM y alta con control en 48 horas' },
        { letter: 'B', text: 'Suero glucosado al 5 % para hidratar y luego tiamina' },
        { letter: 'C', text: 'Hospitalizar en cama monitorizada; tiamina EV o IM antes de cualquier glucosado, benzodiacepina titulada por CIWA-Ar (lorazepam por la hepatopatía) y corrección hidroelectrolítica' },
        { letter: 'D', text: 'Fenitoína de carga para prevenir convulsiones y observación' },
        { letter: 'E', text: 'Naltrexona oral desde hoy para reducir el deseo de beber' },
      ],
      correct: 'C',
      explanation: 'Delirium tremens establecido: 48 a 96 horas desde el cese, desorientación, disautonomía, temblor grosero y zoopsias, con CIWA-Ar de 26. Es una emergencia vital: hospitalización monitorizada, tiamina antes de cualquier glucosado, benzodiacepinas guiadas por CIWA-Ar (se prefiere lorazepam si hay hepatopatía), corrección de electrolitos y contención ambiental en un box tranquilo.',
      say: {
        stem: 'Un hombre de cuarenta y nueve años bebe un litro de vino y pisco al día desde hace veinte años y dejó de beber hace sesenta horas. Llega agitado, empapado en sudor y con un temblor tan grande que no puede sostener un vaso. Está desorientado, con presión alta, taquicardia, treinta y ocho coma tres de temperatura, y grita porque ve arañas gigantes en las sábanas. La escala CIWA da veintiséis puntos, y tiene signos de hepatopatía crónica.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: haloperidol y alta; suero glucosado y luego tiamina; hospitalizar, con tiamina antes de la glucosa, benzodiacepina titulada y corrección de electrolitos; fenitoína de carga; o naltrexona. Piénsalo.',
        answer: 'Es la C. Sesenta horas desde la última copa, desorientación, fiebre, taquicardia y zoopsias: delirium tremens, una emergencia vital. Se hospitaliza, se da tiamina antes de cualquier glucosado, benzodiacepina según la escala, y como tiene hepatopatía se prefiere lorazepam. La B es la trampa del orden: glucosa antes de la tiamina. Y la A y la D no tratan la abstinencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 103',
      stem: 'Paciente de 55 años alcohólico crónico, 48 horas después de dejar de beber presenta agitación severa, alucinaciones visuales de insectos, temblor generalizado, taquicardia 120 lpm, sudoración y fiebre 38°C.',
      question: '¿Cuál es el diagnóstico y tratamiento?',
      options: [
        { letter: 'A', text: 'Delirium tremens: diazepam EV + tiamina + corrección hidrolectrolítica' },
        { letter: 'B', text: 'Psicosis alcohólica: haloperidol' },
        { letter: 'C', text: 'Meningoencefalitis: antibióticos EV' },
        { letter: 'D', text: 'Hipoglicemia: glucosa EV en bolo' },
        { letter: 'E', text: 'ACV isquémico: tPA' },
      ],
      correct: 'A',
      explanation: 'Delirium tremens: abstinencia alcohólica grave, 48 a 96 horas después del cese. Tratamiento: benzodiacepinas (diazepam o lorazepam) para controlar la abstinencia y prevenir convulsiones, tiamina y corrección de líquidos y electrolitos.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un alcohólico crónico de cincuenta y cinco años, cuarenta y ocho horas después de dejar de beber, presenta agitación severa, alucinaciones visuales de insectos, temblor generalizado, taquicardia, sudoración y fiebre.',
        question: '¿Cuál es el diagnóstico y el tratamiento?',
        options: 'Las opciones: delirium tremens con diazepam, tiamina y electrolitos; psicosis alcohólica con haloperidol; meningoencefalitis con antibióticos; hipoglicemia con glucosa; o accidente cerebrovascular con trombolisis. Piénsalo.',
        answer: 'Es la A. Cuarenta y ocho horas, insectos, temblor, fiebre y disautonomía: delirium tremens, que se trata con benzodiacepinas, tiamina y reposición de líquidos y electrolitos. La B es la tentación: parece una psicosis, pero el haloperidol solo no trata la abstinencia. Y la D tienta porque hay hipoglicemia en alcohólicos, pero la glucosa va después de la tiamina, nunca sola.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 51',
      stem: 'Un paciente con antecedente de daño hepático crónico por consumo de alcohol, bebedor activo, que toma 1 botella de vino al día, sin emborracharse, es ingresado al hospital. Evoluciona con malestar general, ansiedad y luego desorientación, asociada a alucinaciones zoomorfas de pequeños animales que lo atacan.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'Haloperidol' },
        { letter: 'B', text: 'Lorazepam' },
        { letter: 'C', text: 'Tiamina' },
        { letter: 'D', text: 'Carbamacepina' },
        { letter: 'E', text: 'Setralina' },
      ],
      correct: 'B',
      explanation: 'Es un delirium tremens por privación de alcohol, que se trata con benzodiacepinas. Como tiene daño hepático crónico, se prefiere lorazepam, que no genera metabolitos activos y no se acumula.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un paciente con daño hepático crónico por alcohol, bebedor activo, es hospitalizado. Evoluciona con malestar, ansiedad y luego desorientación, con alucinaciones de pequeños animales que lo atacan.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: haloperidol; lorazepam; tiamina; carbamazepina; o sertralina. Piénsalo.',
        answer: 'Es la B. Ansiedad, desorientación y alucinaciones zoomorfas en un bebedor hospitalizado: delirium tremens. Se trata con benzodiacepinas, y como tiene daño hepático, la elección es lorazepam, porque no se acumula. La A tienta porque es el fármaco de la agitación psicótica, y la C porque la tiamina siempre se da, pero no es el tratamiento de la abstinencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 114',
      stem: 'Un paciente alcohólico es ingresado, indicándosele tratamiento con diazepam 0,5 mg/noche y haloperidol 0,5 mg/noche. Evoluciona con sudoración, inquietud, palpitaciones e insomnio con angustia que es mayor en la noche.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Acatisia' },
        { letter: 'B', text: 'Síndrome de privación de alcohol' },
        { letter: 'C', text: 'Síndrome neuroléptico maligno' },
        { letter: 'D', text: 'Distonía aguda' },
        { letter: 'E', text: 'Diquinesia aguda' },
      ],
      correct: 'B',
      explanation: 'Síndrome de abstinencia alcohólica de intensidad moderada: sudoración, inquietud, palpitaciones e insomnio con angustia, sin delirium tremens ni convulsiones, que serían la forma severa. Las dosis de diazepam y haloperidol indicadas son demasiado bajas para el cuadro.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. A un paciente alcohólico hospitalizado le indican diazepam y haloperidol en dosis muy bajas, medio miligramo cada noche. Evoluciona con sudoración, inquietud, palpitaciones e insomnio con angustia, mayor en la noche.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: acatisia; síndrome de privación de alcohol; síndrome neuroléptico maligno; distonía aguda; o diquinesia aguda. Piénsalo.',
        answer: 'Es la B. Sudor, inquietud, palpitaciones e insomnio en un alcohólico hospitalizado son una abstinencia moderada, aún sin delirium ni convulsiones. La A tienta, porque la inquietud puede ser acatisia por haloperidol, pero la sudoración, las palpitaciones y el contexto de un alcohólico apuntan a la abstinencia. Y la dosis de diazepam indicada es insuficiente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 72',
      stem: 'Un paciente de 70 años, con antecedente de daño hepático crónico y consumo de alcohol activo, consulta porque quiere dejar de beber. Consume 3 litros de cerveza al día y comenta que hace un año intentó bajar el consumo a 1 litro al día, sin embargo, presentó agitación, angustia y la visualización de insectos que él no sabía que no eran reales.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar el cese inmediato del consumo de alcohol' },
        { letter: 'B', text: 'Iniciar disulfiram' },
        { letter: 'C', text: 'Hospitalizar para desintoxicación' },
        { letter: 'D', text: 'Indicar lorazepam' },
        { letter: 'E', text: 'Derivar para psicoterapia cognitivo-conductual' },
      ],
      correct: 'C',
      explanation: 'Tiene consumo alto y motivación para dejar de beber, pero con antecedente de abstinencia grave con alucinaciones: la suspensión debe hacerse con supervisión médica en el hospital. El cese inmediato en el domicilio es riesgoso por el delirium tremens, el disulfiram no se inicia con daño hepático y la psicoterapia sola no resuelve el riesgo de abstinencia.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un paciente de setenta años, con daño hepático crónico, bebe tres litros de cerveza al día y quiere dejarlo. Hace un año intentó bajar a un litro y tuvo agitación, angustia y alucinaciones de insectos que no sabía que eran irreales.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: cese inmediato del alcohol; disulfiram; hospitalizar para desintoxicación; lorazepam; o psicoterapia cognitivo-conductual. Piénsalo.',
        answer: 'Es la C. Quiere dejar de beber, pero ya tuvo una abstinencia grave con alucinaciones, así que la desintoxicación debe ser supervisada, en el hospital. La A es la trampa, porque es lo que él quiere, pero en su casa hay riesgo de delirium tremens. El disulfiram se evita con daño hepático, y el lorazepam solo, sin supervisión, no resuelve el riesgo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Hombre de 52 años en situación de calle, con alcoholismo crónico severo y desnutrición extrema, llevado a urgencias por compromiso de conciencia progresivo. Está en sopor profundo, con nistagmo bilateral horizontal y ataxia de tronco que le impide ponerse de pie. La glicemia capilar es de 48 mg/dL.',
      question: '¿Cuál es la secuencia farmacológica obligatoria que debe administrarse de inmediato?',
      options: [
        { letter: 'A', text: 'Suero glucosado al 30 % en bolo rápido y luego evaluar vitaminas' },
        { letter: 'B', text: 'Tiamina 100 mg endovenosa o intramuscular antes o junto con la infusión de suero glucosado' },
        { letter: 'C', text: 'Fenitoína 1 g en infusión endovenosa rápida' },
        { letter: 'D', text: 'Naloxona 0,4 mg EV y flumazenil 0,5 mg EV directo' },
        { letter: 'E', text: 'Insulina cristalina 10 UI subcutáneas' },
      ],
      correct: 'B',
      explanation: 'Tríada de Wernicke (nistagmo, ataxia y compromiso de conciencia) con hipoglicemia severa. En todo paciente con alcoholismo crónico o desnutrición, la tiamina se administra antes de la glucosa, para no consumir las últimas reservas de B1 y precipitar un daño cerebral irreversible.',
      say: {
        stem: 'Un caso representativo del banco. Un hombre de cincuenta y dos años, en situación de calle, con alcoholismo crónico y desnutrición extrema, llega con el sensorio cada vez más comprometido. Tiene nistagmo, ataxia que le impide pararse y una glicemia de cuarenta y ocho.',
        question: '¿Cuál es la secuencia farmacológica obligatoria?',
        options: 'Las opciones: glucosado concentrado en bolo y luego vitaminas; tiamina antes o junto con la glucosa; fenitoína; naloxona y flumazenil; o insulina. Piénsalo.',
        answer: 'Es la B. Nistagmo, ataxia y confusión son la tríada de Wernicke, y la glicemia es muy baja. Hay que corregirla, pero con tiamina por delante. La A es la tentación: tratar solo la hipoglicemia. Pero la glucosa sin tiamina consume las últimas reservas de vitamina B uno y puede dejar un daño cerebral permanente.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: alcohol y abstinencia',
      cards: [
        { title: 'Reconocer', tag: 'Cronología y conciencia', kind: 'key', items: [
          { t: 'Alucinosis: lúcido; delirium tremens: confuso', d: 'Doce a veinticuatro horas; cuarenta y ocho a noventa y seis',
            say: 'Cerremos con las reglas de oro. La alucinosis aparece a las doce a veinticuatro horas, con el sensorio lúcido. El delirium tremens, a las cuarenta y ocho a noventa y seis, con confusión, fiebre y zoopsias.' },
          { t: 'Wernicke: oftalmoplejía, ataxia, confusión', d: 'Basta uno o dos signos',
            say: 'Y el Wernicke se sospecha con uno o dos signos de su tríada en un bebedor crónico.' },
        ] },
        { title: 'Conducta', tag: 'Siempre en este orden', kind: 'alert', items: [
          { t: 'Tiamina antes de la glucosa', d: 'Siempre, en todo alcohólico',
            say: 'La tiamina va antes de cualquier suero glucosado, siempre.' },
          { t: 'Benzodiacepina según CIWA-Ar', d: 'Diazepam; lorazepam si hay cirrosis',
            say: 'La abstinencia se trata con benzodiacepinas guiadas por la escala CIWA: diazepam si el hígado funciona, lorazepam si hay cirrosis. Si te llevas una sola idea de hoy: tiamina primero, benzodiacepina después, y la conciencia separa la alucinosis del delirium tremens. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Alcohol: de la abstinencia a la conducta',
    root: N('start', 'Bebedor que consulta', 'Cuánto, cuándo y desde cuándo no bebe',
      'Un bebedor consulta. Lo primero es saber hace cuánto dejó de beber y cómo está su conciencia. Y en todo alcohólico confuso, tiamina antes que glucosa.',
      ['Sigue bebiendo y no ve el problema', N('do', 'Entrevista motivacional', 'Etapa del cambio; AUDIT',
        'Si sigue bebiendo y no reconoce el problema, se aplica el AUDIT y se hace entrevista motivacional según la etapa del cambio, sin confrontar. El consumo de riesgo recibe intervención breve.')],
      ['Quiere dejar de beber y es de riesgo bajo', N('do', 'Abstinencia ambulatoria', 'CIWA bajo 10 y familiar presente',
        'Si quiere dejar de beber y la abstinencia es leve, con CIWA bajo diez, se maneja de forma ambulatoria con un familiar, hidratación y complejo B. Si es dependiente motivado, se puede iniciar naltrexona.')],
      ['Abstinencia moderada o severa', N('q', 'Medir con CIWA-Ar', 'Tiamina antes de glucosa',
        'Si hay abstinencia moderada o severa, se mide con la escala CIWA, se da tiamina antes de cualquier glucosado y se elige la benzodiacepina según el hígado.',
        ['CIWA 10 a 19, hígado sano', N('do', 'Diazepam oral', 'Observación en urgencias',
          'En una abstinencia moderada con hígado sano, diazepam por vía oral cada una a dos horas hasta bajar de diez puntos, en observación.')],
        ['Cirrosis, anciano o EPOC grave', N('do', 'Lorazepam', 'No se acumula',
          'Si hay cirrosis, edad avanzada o EPOC grave, se prefiere lorazepam, que no tiene metabolitos activos.')],
        ['CIWA 20 o más, delirium tremens', N('alert', 'Hospitalizar; UPC si es DT', 'Benzodiacepina EV repetida',
          'Con veinte o más, o con delirium tremens, se hospitaliza en cama monitorizada, o en UPC si es grave, con benzodiacepinas endovenosas repetidas, tiamina y corrección de electrolitos. Nunca fenitoína de mantención ni haloperidol solo.')],
      )],
      ['Confusión, oftalmoplejía y ataxia', N('alert', 'Wernicke', 'Tiamina EV 500 mg tres veces al día',
        'Si hay confusión, oftalmoplejía o ataxia, es un Wernicke hasta que se demuestre lo contrario. Se da tiamina por vía endovenosa a dosis altas antes de cualquier glucosa, y se evita el Korsakoff.')],
    ),
  },
};
