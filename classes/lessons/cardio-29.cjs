// Clase 5.1 (Cardiología) — Hipertensión arterial: diagnóstico, MAPA y etapificación. Guion escrito a mano (estándar Módulo 1, modelo cardio-14).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_5.cjs (cardio-29). Códigos (books/data/v3_codemap.json): 1.01.1.015 Hipertensión
// arterial esencial (Dx específico · Tx completo · Seguimiento completo) y 1.01.4.011 Holter de presión arterial (emplea informe).
// Preguntas reales (class_questions.cjs cardio-29 y --search "MAPA|holter de presión|bata blanca"): Diciembre 2025 P177 (Holter confirma la
// HTA: ARA II), Julio 2024 P144 (diabético con dos tomas altas: iniciar tratamiento) y Agosto 2021 P136 (MAPA con carga tensional: HTA
// resistente). Enunciados y alternativas copiados del banco (Diciembre 2025 P177: se repararon las ligaduras «2» del PDF en «Diuréticos tiazídicos»).
// No usadas: Diciembre 2017 P65, Diciembre 2017 P9, Julio 2016 P14, Julio 2025 P32 (tratamiento: van en cardio-30); Diciembre 2022 P51 y
// Diciembre 2025 P171 (HTA secundaria: cardio-31); Diciembre 2024 P78 (alternativas rotas: «Amoxicilina, Ibuprofeno…»); Diciembre 2022 P105
// (clave dudosa: atenolol en un diabético de 56 años sin otra indicación); Diciembre 2022 P36 (clave dudosa: doxazosina con síntomas de IC).
// Foto en contexto: fondo de ojo con retinopatía hipertensiva (Bates, Guide to Physical Examination and History Taking, 2017, Tabla 7-16).
// En movimiento: scenes/cardio_b5.html ?v=mapa (gráfico propio: MAPA con patrones dipper, non-dipper y riser).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cardio-29',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuántas tomas, cuántos milímetros, cuándo basta una sola consulta y qué agrega el MAPA',
      say: 'Bienvenido. Entramos al bloque de la presión arterial, el pericardio y los vasos, y partimos por la enfermedad crónica más frecuente de la atención primaria: la hipertensión. Hoy no hablamos de remedios, sino de cómo se hace bien el diagnóstico: cómo se mide, qué cifras valen en la consulta, en la casa y en el monitoreo de veinticuatro horas, y cómo se clasifica. El examen pregunta los cortes y los casos de bata blanca y enmascarada.',
    },

    {
      type: 'flow',
      kicker: 'Por qué importa',
      title: 'Una enfermedad que no se siente',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'cause', t: 'Sal, peso, edad', s: 'Genética y estrés' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'Presión alta sostenida', s: 'Sin síntomas' },
        { id: 'c', col: 2, row: 0, k: 'effect', t: 'Corazón y cerebro', s: 'IAM, IC, ACV' },
        { id: 'd', col: 2, row: 2, k: 'effect', t: 'Riñón y ojo', s: 'ERC, retinopatía' },
        { id: 'e', col: 3, row: 1, k: 'alert', t: 'Diagnóstico seguro', s: 'Más de una medición' },
      ],
      edges: [{ from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'b', to: 'd' }, { from: 'c', to: 'e' }, { from: 'd', to: 'e' }],
      steps: [
        { show: ['a', 'b'], note: 'Más del noventa por ciento es esencial',
          say: 'En casi nueve de cada diez hipertensos no hay una causa corregible: se llama hipertensión esencial, y resulta de la suma de sal, peso, sedentarismo, alcohol, edad y herencia. Menos de uno de cada diez tiene una causa secundaria, que vemos dos clases más adelante. Lo traicionero es que no da síntomas.' },
        { show: ['c', 'd'], note: 'El daño es de órgano blanco',
          say: 'La presión alta sostenida lesiona los órganos con más flujo y vasos más finos: el corazón, con hipertrofia, insuficiencia cardíaca e infarto; el cerebro, con accidente cerebrovascular; el riñón, con albuminuria y enfermedad renal crónica; y el ojo, con retinopatía. A eso se le llama daño de órgano blanco.' },
        { show: ['e'], note: 'Tratamiento de por vida',
          say: 'Como el tratamiento va a ser de por vida y la presión de una misma persona cambia durante el día, el diagnóstico no se hace con un número aislado, tomado con el paciente angustiado o con el brazalete mal puesto. Se hace con varias mediciones en condiciones controladas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnica',
      title: 'Cómo se mide bien la presión',
      cards: [
        { title: 'El paciente', tag: 'Condiciones', kind: 'key', items: [
          { t: 'Sentado, 5 min de reposo', d: 'Espalda apoyada, brazo a la altura del corazón',
            say: 'El paciente debe estar sentado, con la espalda apoyada, los pies en el suelo y el brazo a la altura del corazón, después de cinco minutos de reposo. Sin café, sin tabaco y sin ejercicio en la media hora previa.' },
          { t: 'Brazalete del tamaño correcto', d: 'Cubre ≥ 80% del brazo',
            say: 'El brazalete tiene que ser del tamaño adecuado. Si es muy chico, sobrestima la presión, un error frecuente en el obeso. Si es muy grande, la subestima.' },
        ] },
        { title: 'Las mediciones', tag: 'Cuántas y dónde', kind: 'criteria', items: [
          { t: 'Ambos brazos la primera vez', d: 'Dif. sostenida > 15-20 mmHg: pensar en disección',
            say: 'En la primera consulta se mide en los dos brazos, y se sigue con el de cifras más altas. Una diferencia sostenida de más de quince a veinte milímetros de mercurio obliga a pensar en estenosis subclavia o en disección aórtica.' },
          { t: '2 tomas por visita, promedio', d: 'Una tercera si difieren > 5 mmHg',
            say: 'Se hacen al menos dos mediciones por visita, separadas por uno o dos minutos, y se promedian. En el adulto mayor y en el diabético, se mide también de pie, para detectar hipotensión ortostática.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios diagnósticos',
      title: 'Los cortes que se preguntan',
      cards: [
        { title: 'En la consulta', tag: 'Perfil de PA', kind: 'key', items: [
          { t: '≥ 140/90 en ≥ 2 visitas', d: 'Separadas por 1-2 semanas',
            say: 'El criterio estándar es el perfil de presión arterial: el promedio de al menos dos tomas, en dos visitas separadas por una a dos semanas, con sistólica de ciento cuarenta o más, o diastólica de noventa o más.' },
          { t: 'Primera consulta: ≥ 180/110', d: 'O ≥ 140/90 con daño de órgano blanco',
            say: 'La excepción: se diagnostica en una sola visita si la presión es de ciento ochenta sobre ciento diez o más, o si es de ciento cuarenta sobre noventa o más con daño de órgano blanco, como hipertrofia en el electrocardiograma, retinopatía grado tres o cuatro, enfermedad renal o un infarto o un accidente cerebrovascular previo. Al diabético con dos tomas altas tampoco se le hace esperar.' },
        ] },
        { title: 'Fuera de la consulta', tag: 'Más bajos', kind: 'criteria', items: [
          { t: 'MAPA 24 h ≥ 130/80', d: 'Día ≥ 135/85 · noche ≥ 120/70',
            say: 'Fuera de la consulta los umbrales son más bajos, porque la presión ambulatoria es menor. En el monitoreo de veinticuatro horas, el promedio total se considera alto desde ciento treinta sobre ochenta, el de vigilia desde ciento treinta y cinco sobre ochenta y cinco, y el nocturno desde ciento veinte sobre setenta.' },
          { t: 'AMPA 7 días ≥ 135/85', d: 'Dos tomas en la mañana y dos en la noche',
            say: 'El automonitoreo domiciliario, durante siete días, se considera alto con un promedio de ciento treinta y cinco sobre ochenta y cinco o más. No los confundas: ciento cuarenta noventa en la consulta, y ciento treinta y cinco ochenta y cinco en la casa y en el día del monitoreo.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'El MAPA: dipper, non-dipper y riser',
      images: [
        { src: 'animaciones/cardio-29/A1_mapa_24h.mp4', label: 'Presión de 24 horas y descenso nocturno', credit: 'Gráfico propio · criterios del Manual EUNACOM de Cardiología, tema 5.1' },
      ],
      steps: [
        { note: 'La noche dice más que el día',
          say: 'Mira cómo se ve un monitoreo de veinticuatro horas. La línea punteada amarilla es el corte del día y la violeta, el de la noche. En el patrón normal, llamado dipper, la presión cae entre diez y veinte por ciento durante el sueño. En el non-dipper cae menos de diez por ciento, y en el riser incluso sube de noche.' },
        { note: 'Non-dipper y riser: buscar la causa',
          say: 'Esos dos patrones se asocian a más daño de órgano blanco y obligan a buscar apnea del sueño, enfermedad renal crónica, hiperaldosteronismo y exceso de sal. Y si la presión nocturna está alta con el esquema de la mañana, parte de los fármacos se pasa a la noche.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Indicaciones y conclusiones',
      title: 'Bata blanca y enmascarada',
      cards: [
        { title: 'Cuándo pedir un MAPA', tag: 'Indicaciones', kind: 'key', items: [
          { t: 'Sospecha de bata blanca', d: 'Consulta alta sin daño de órgano blanco',
            say: 'El monitoreo se pide cuando la presión de consulta no cuadra con el resto. Primero, ante la sospecha de bata blanca: presión alta en la consulta, normal fuera de ella y sin daño de órgano blanco.' },
          { t: 'Sospecha de HTA enmascarada', d: 'Consulta normal con daño de órgano, diabetes o ERC',
            say: 'Segundo, ante la sospecha de hipertensión enmascarada: presión normal en la consulta, pero con daño de órgano blanco, diabetes o enfermedad renal. También se pide en la hipertensión resistente, para descartar pseudorresistencia, y cuando la presión es muy variable.' },
        ] },
        { title: 'Qué concluir', tag: 'Conducta', kind: 'criteria', items: [
          { t: 'Bata blanca: sin fármaco', d: 'Estilo de vida y control anual',
            say: 'Si el promedio de las veinticuatro horas es menor de ciento treinta sobre ochenta con la presión de consulta alta, es bata blanca: no se parte con fármacos, se indican medidas de estilo de vida y se repite el control al año. Una parte evoluciona a hipertensión sostenida.' },
          { t: 'Enmascarada: se trata como HTA', d: 'Carga tensional > 40% es patológica',
            say: 'La hipertensión enmascarada se trata como hipertensión confirmada. Y un dato del informe que se pregunta: la carga tensional, que es el porcentaje de lecturas sobre el valor normal. Más de cuarenta por ciento es patológica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Etapificación',
      title: 'Grados, riesgo y daño de órgano blanco',
      cards: [
        { title: 'Grados de HTA', tag: 'Por la presión de consulta', kind: 'criteria', items: [
          { t: 'Grado 1: 140-159 / 90-99', d: 'Grado 2: 160-179 / 100-109',
            say: 'Los grados se definen por la presión de consulta. Grado uno, de ciento cuarenta a ciento cincuenta y nueve, o de noventa a noventa y nueve. Grado dos, de ciento sesenta a ciento setenta y nueve, o de cien a ciento nueve. Grado tres, ciento ochenta sobre ciento diez o más. Cuando la sistólica y la diastólica caen en grados distintos, manda la más alta.' },
          { t: 'Grado 3: ≥ 180/110', d: 'Hipertensión sistólica aislada: PAS ≥ 140 con PAD < 90',
            say: 'La hipertensión sistólica aislada, con sistólica alta y diastólica normal, es la forma típica del adulto mayor, por rigidez de las arterias.' },
        ] },
        { title: 'Riesgo y órgano blanco', tag: 'Lo que decide el tratamiento', kind: 'key', items: [
          { t: 'Riesgo cardiovascular global', d: 'Diabetes, ERC o ECV = alto riesgo',
            say: 'El grado no basta. El tratamiento depende del riesgo cardiovascular global: la edad, el tabaco, el colesterol, la diabetes, la enfermedad renal y el daño de órgano blanco. Un grado uno con diabetes o enfermedad renal ya es de alto riesgo.' },
          { t: 'Fondo de ojo: grados III y IV', d: 'Hemorragias, exudados; el IV tiene edema de papila',
            say: 'Y el fondo de ojo clasifica la retinopatía. Mira este fondo de ojo: hay exudados duros que forman una estrella alrededor de la mácula y hemorragias dispersas. Los grados tres y cuatro indican daño avanzado, y el grado cuatro, con edema de papila, es una emergencia hipertensiva, que vemos en la clase de crisis.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-29/01_retinopatia-hipertensiva-estrella-macular__bates_t7-16.jpg', label: 'Retinopatía hipertensiva', at: 'Mira este fondo de ojo', credit: 'Bates, Guide to Physical Examination and History Taking (2017), Tabla 7-16' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio inicial y GES',
      title: 'Qué pedir y qué garantiza el sistema',
      cards: [
        { title: 'Exámenes básicos', tag: 'Programa cardiovascular', kind: 'key', items: [
          { t: 'ECG, creatinina y RAC', d: 'VFG, glicemia, perfil lipídico, potasio',
            say: 'Confirmada la hipertensión, se pide electrocardiograma, creatinina con velocidad de filtración glomerular, la razón albuminuria creatininuria, glicemia, perfil de lípidos, potasio y orina. Se buscan además los fármacos que suben la presión: antiinflamatorios, corticoides, anticonceptivos y descongestionantes.' },
          { t: 'Potasio bajo, soplo, crisis', d: 'Orientan a causa secundaria',
            say: 'Y se está atento a las pistas de causa secundaria: potasio bajo sin diuréticos, un soplo abdominal, una creatinina que sube con el inhibidor de la enzima convertidora, o crisis de cefalea con sudor. Eso es la próxima clase.' },
        ] },
        { title: 'GES número 21', tag: 'Garantía', kind: 'criteria', items: [
          { t: 'HTA primaria desde los 15 años', d: 'Confirmación, tratamiento y controles',
            say: 'La hipertensión primaria en personas de quince años y más es el problema de salud GES número veintiuno. El sistema garantiza la confirmación diagnóstica, el tratamiento y los controles, con atención de especialidad cuando corresponde.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la presión alta en la consulta al diagnóstico confirmado.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Diagnóstico de HTA: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Consulta ≥ 140/90 en 2 visitas', 'HTA confirmada', 'Exigir un MAPA siempre'],
          say: 'Presión de ciento cuarenta noventa o más en dos visitas: la hipertensión está confirmada. Exigir un monitoreo en todos los casos es un error.' },
        { cells: ['≥ 180/110 o daño de órgano blanco', 'Diagnóstico en la 1.ª consulta', 'Esperar otra visita'],
          say: 'Ciento ochenta ciento diez, o daño de órgano blanco: se diagnostica y se trata esa misma vez. Esperar otra visita retrasa el tratamiento.' },
        { cells: ['MAPA 24 h < 130/80, consulta alta', 'Bata blanca: sin fármaco', 'Iniciar antihipertensivo'],
          say: 'Monitoreo normal con la presión de consulta alta: es bata blanca. Se controla al año y no se indica un fármaco.' },
        { cells: ['Consulta normal, MAPA alto', 'HTA enmascarada: tratar', 'Dar de alta como normotenso'],
          say: 'Consulta normal con monitoreo elevado: hipertensión enmascarada, y se trata como hipertensión. Darlo de alta como normal es el error.' },
        { cells: ['Descenso nocturno < 10%', 'Non-dipper: buscar SAHOS, ERC', 'Ignorarlo'],
          say: 'Si la presión baja menos de diez por ciento de noche, es non-dipper. Se busca apnea del sueño, enfermedad renal y aldosterona, y no se ignora.' },
        { cells: ['Diabético con 2 tomas ≥ 140/90', 'Iniciar tratamiento (IECA o ARA II)', 'Pedir MAPA antes de tratar'],
          say: 'En el diabético, con dos tomas altas, se inicia el tratamiento, con un inhibidor de la enzima convertidora o un ARA dos. Pedir un monitoreo antes de tratar retrasa el beneficio.' },
        { cells: ['Brazalete pequeño en obeso', 'Sobrestima la PA', 'Diagnosticar HTA con esa cifra'],
          say: 'Un brazalete chico en un paciente obeso sobrestima la presión, y diagnosticar con esa cifra es un error de técnica.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 47 años, IMC 31 kg/m², sin síntomas. En dos visitas separadas por 10 días, con técnica correcta, registra 148/94 y 146/92 mmHg. Creatinina, potasio, glicemia, RAC y ECG normales. Su MAPA muestra promedio de 24 horas 132/82, diurno 138/86 y nocturno 118/68 mmHg, con descenso nocturno de 14%.',
      question: '¿Cuál es la interpretación y la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Bata blanca: control en 1 año sin fármacos' },
        { letter: 'B', text: 'HTA grado 1 esencial dipper: medidas de estilo de vida e inicio de tratamiento' },
        { letter: 'C', text: 'HTA enmascarada: derivar a nefrología' },
        { letter: 'D', text: 'Non-dipper: estudio de feocromocitoma' },
        { letter: 'E', text: 'Normotensa: el MAPA descarta HTA' },
      ],
      correct: 'B',
      explanation: 'Dos visitas con presión ≥ 140/90 cumplen el criterio de consulta, y el MAPA lo confirma (24 horas 132/82 ≥ 130/80; diurno 138/86 ≥ 135/85). El descenso nocturno de 14% es normal (dipper). Es una HTA grado 1 esencial sin daño de órgano blanco: estilo de vida y tratamiento, sin estudio de causas secundarias.',
      say: {
        stem: 'Una mujer de cuarenta y siete años, obesa y sin síntomas. En dos visitas, con buena técnica, tiene ciento cuarenta y ocho sobre noventa y cuatro, y ciento cuarenta y seis sobre noventa y dos. Sus exámenes son normales. Su monitoreo de veinticuatro horas da ciento treinta y dos sobre ochenta y dos de promedio, y de día ciento treinta y ocho sobre ochenta y seis. De noche baja catorce por ciento.',
        question: '¿Cuál es la interpretación y la conducta?',
        options: 'Las opciones: bata blanca; hipertensión grado uno esencial con patrón dipper, con estilo de vida y tratamiento; hipertensión enmascarada; non-dipper con estudio de feocromocitoma; o normotensa. Piénsalo.',
        answer: 'Es la B. Las dos visitas confirman el criterio de consulta, y el monitoreo lo confirma, porque el promedio total supera ciento treinta sobre ochenta y el diurno supera ciento treinta y cinco sobre ochenta y cinco. El descenso de catorce por ciento es normal. La A tienta, pero la bata blanca exigiría un monitoreo normal, y aquí está alto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 177',
      stem: 'Un paciente de 45 años, con IMC de 32 kg/m², acude a control médico, objetivándose presión arterial de 146/92 mmHg. Se solicita Holter de presión arterial, que muestra múltiples registros sobre 140/90 mmHg, diagnosticándose hipertensión arterial. Sus exámenes de laboratorio resultan normales, incluyendo función renal, electrolitos plasmáticos y electrocardiograma.',
      question: '¿Qué tipo de fármacos es el más adecuado para iniciar el tratamiento antihipertensivo en este paciente?',
      options: [
        { letter: 'A', text: 'Bloqueadores alfa-adrenérgicos' },
        { letter: 'B', text: 'Bloqueadores beta-adrenérgicos' },
        { letter: 'C', text: 'Inhibidores del canal de calcio' },
        { letter: 'D', text: 'Antagonistas del receptor de angiotensina' },
        { letter: 'E', text: 'Diuréticos tiazídicos' },
      ],
      correct: 'D',
      explanation: 'Sin elementos que sugieran causa secundaria, es una HTA esencial; en un paciente joven se parte con un inhibidor del sistema renina-angiotensina (IECA o ARA II). Los alfabloqueadores y los betabloqueadores no son de primera línea.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un hombre de cuarenta y cinco años, obeso, con presión de ciento cuarenta y seis sobre noventa y dos. Se le hace un Holter de presión, que muestra múltiples registros sobre ciento cuarenta noventa, y se confirma la hipertensión. Sus exámenes son normales.',
        question: '¿Qué tipo de fármacos es el más adecuado para iniciar el tratamiento?',
        options: 'Las opciones: alfabloqueadores; betabloqueadores; calcioantagonistas; antagonistas del receptor de angiotensina; o diuréticos tiazídicos. Piénsalo.',
        answer: 'Es la D. No hay datos de causa secundaria, así que es una hipertensión esencial, y en el paciente joven se parte con un inhibidor del sistema renina angiotensina, aquí un ARA dos. Los betabloqueadores y los alfabloqueadores no son de primera línea. Fíjate además en el paso previo: el Holter de presión fue lo que confirmó el diagnóstico.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 144',
      stem: 'Un paciente diabético de larga data en tratamiento con empagliflozina 10 mg al día, metformina 1.000 mg cada 8 horas y atorvastatina 20 mg al día, presenta presiones arteriales de 140/90 mmHg y 158/87 mmHg en dos controles diferentes. El resto de su examen físico es normal y trae exámenes, entre los que destaca hemoglobina glicosilada de 6.9%.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar terapia depletiva de potasio' },
        { letter: 'B', text: 'Iniciar tratamiento antihipertensivo' },
        { letter: 'C', text: 'Solicitar un monitoreo ambulatorio de presión arterial (MAPA)' },
        { letter: 'D', text: 'Iniciar terapia antiagregante plaquetaria' },
        { letter: 'E', text: 'Iniciar insulina' },
      ],
      correct: 'B',
      explanation: 'En el diabético, dos tomas elevadas en controles distintos bastan para confirmar la hipertensión: su meta es < 130/80 y su riesgo es alto, por lo que no se espera un MAPA. Se inicia tratamiento, con IECA o ARA II de primera elección.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un diabético de larga data, con metformina, empagliflozina y atorvastatina, tiene presiones de ciento cuarenta sobre noventa y de ciento cincuenta y ocho sobre ochenta y siete en dos controles distintos. Su hemoglobina glicosilada es de seis coma nueve por ciento.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: terapia depletiva de potasio; iniciar tratamiento antihipertensivo; pedir un monitoreo ambulatorio; antiagregantes plaquetarios; o insulina. Piénsalo.',
        answer: 'Es la B. En el diabético, dos tomas elevadas ya bastan, porque su meta es menor de ciento treinta sobre ochenta y su riesgo es alto. La C es la trampa: el monitoreo es útil cuando hay dudas, pero aquí retrasaría el tratamiento. Y se parte con un inhibidor de la enzima convertidora o un ARA dos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 136',
      stem: 'Un paciente de 38 años, diagnosticado de hipertensión arterial, está en tratamiento con enalapril 20 mg c/12 horas, hidroclorotiazida 25 mg/d y amlodipino 10 mg/día. Se realiza control con monitoreo de 24 horas de presión arterial que muestra presiones arteriales diurnas promedio de 152/100 mmHg, con sobrecarga tensional de 60% sistólica y 43% diastólica y presiones arteriales nocturnas de 140/92 mmHg, con sobrecarga tensional de 25% sistólica y 27% diastólica.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Aumentar la dosis de hidroclorotiazida' },
        { letter: 'B', text: 'Aumentar la dosis de enalapril' },
        { letter: 'C', text: 'Iniciar inhibidor del receptor de aldosterona y descartar hipertensión secundaria' },
        { letter: 'D', text: 'Reemplazar el enalapril por losartán' },
        { letter: 'E', text: 'Reemplazar la hidroclorotiazida por un inhibidor del receptor de aldosterona' },
      ],
      correct: 'C',
      explanation: 'Con tres fármacos, incluido un diurético, a dosis altas y un MAPA con presión diurna 152/100 y cargas tensionales elevadas, la hipertensión no está controlada: es una HTA resistente. Se agrega un antagonista de la aldosterona como cuarto fármaco y se estudia una causa secundaria.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un hombre de treinta y ocho años con enalapril, hidroclorotiazida y amlodipino a dosis altas. Su monitoreo de veinticuatro horas muestra una presión diurna promedio de ciento cincuenta y dos sobre cien, con sobrecarga tensional de sesenta por ciento en la sistólica, y presiones nocturnas elevadas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: subir la hidroclorotiazida; subir el enalapril; iniciar un antagonista de la aldosterona y descartar causa secundaria; cambiar el enalapril por losartán; o cambiar la hidroclorotiazida por un antagonista de la aldosterona. Piénsalo.',
        answer: 'Es la C. Con tres fármacos, uno de ellos un diurético, a dosis altas, y un monitoreo que confirma que la presión sigue alta, es una hipertensión resistente. El cuarto fármaco es la espironolactona, y se estudia una causa secundaria. La E tienta, porque cambia el diurético, pero la espironolactona se agrega, no reemplaza.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: diagnóstico de la HTA',
      cards: [
        { title: 'Confirmar', tag: 'Cortes', kind: 'key', items: [
          { t: '≥ 140/90 en 2 visitas', d: '≥ 180/110 o daño de órgano blanco: una visita',
            say: 'Cerremos con las reglas de oro. La hipertensión se confirma con ciento cuarenta noventa o más en dos visitas, o en una sola si hay ciento ochenta ciento diez o daño de órgano blanco.' },
          { t: 'MAPA ≥ 130/80 · día 135/85 · noche 120/70', d: 'AMPA ≥ 135/85',
            say: 'Fuera de la consulta, los cortes son más bajos: monitoreo de ciento treinta ochenta en veinticuatro horas, ciento treinta y cinco ochenta y cinco de día y ciento veinte setenta de noche, y automonitoreo de ciento treinta y cinco ochenta y cinco.' },
        ] },
        { title: 'Interpretar', tag: 'Casos especiales', kind: 'alert', items: [
          { t: 'Bata blanca: sin fármaco', d: 'Enmascarada: se trata',
            say: 'Bata blanca es consulta alta con monitoreo normal, y no se trata. Enmascarada es consulta normal con monitoreo alto, y sí se trata.' },
          { t: 'Non-dipper o riser: buscar la causa', d: 'SAHOS, ERC, aldosterona, sal',
            say: 'Y si la presión no baja de noche, se busca apnea del sueño, enfermedad renal y exceso de sal. Si te llevas una sola idea de hoy: el diagnóstico de la hipertensión no es un número, es un promedio medido bien, y el monitoreo de veinticuatro horas resuelve las dudas. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hipertensión arterial: de la presión alta al diagnóstico',
    root: N('start', 'PA ≥ 140/90 en la consulta', 'Técnica correcta, 2 tomas por visita',
      'Llega un paciente con presión alta en la consulta. Lo primero es repetir la medición con buena técnica: sentado, en reposo, con brazalete adecuado y dos tomas.',
      ['≥ 180/110 o daño de órgano', N('alert', 'HTA confirmada hoy', 'Tratar; descartar emergencia',
        'Si la presión es de ciento ochenta ciento diez o más, o hay daño de órgano blanco, la hipertensión queda confirmada en esa visita, se inicia el tratamiento y se descarta una emergencia.')],
      ['< 180/110 sin daño', N('q', 'Confirmar fuera de la consulta', '2.ª visita, MAPA o AMPA',
        'Si no hay cifras extremas ni daño, se confirma con una segunda visita en una a dos semanas, o con monitoreo ambulatorio o automonitoreo.',
        ['MAPA o AMPA normal', N('ok', 'Bata blanca', 'Sin fármaco; control anual',
          'Si la presión fuera de la consulta es normal, es bata blanca: se indican medidas de estilo de vida y se controla al año.')],
        ['MAPA ≥ 130/80, AMPA ≥ 135/85', N('do', 'HTA confirmada', 'Etapificar y estudiar',
          'Si el monitoreo está alto, la hipertensión está confirmada. Se clasifica por grado y riesgo, se busca daño de órgano blanco con electrocardiograma, creatinina, albuminuria y fondo de ojo, y se inicia el tratamiento.')],
      )],
    ),
  },
};
