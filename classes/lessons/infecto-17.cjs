// Clase 4.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_infectologia.cjs (inf-17).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-17',
  tier: 1,
  slides: [
    {
      type: 'cover',
      subtitle: 'El quiste que no se rompe y el cerdo que no se inspecciona',
      say: 'Bienvenidos. Volvemos a las zoonosis chilenas, esta vez con dos parásitos del mundo rural y ganadero: la hidatidosis y la triquinosis. El examen las pregunta de forma muy clásica. En la hidatidosis, reconocer el quiste en la imagen y saber que su rotura puede dar un shock anafiláctico. En la triquinosis, reconocer la tríada después de un asado con cecinas caseras. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Hidatidosis · ciclo',
      title: 'El perro, la oveja y el humano',
      nodes: [
        { id: 'per', col: 0, row: 1, k: 'cause', t: 'Perro', s: 'Hospedero definitivo · gusano adulto' },
        { id: 'hue', col: 1, row: 1, k: 'mech', t: 'Huevos en las heces', s: 'Echinococcus granulosus' },
        { id: 'gan', col: 2, row: 0, k: 'effect', t: 'Ovinos, caprinos, bovinos', s: 'Quistes en las vísceras' },
        { id: 'hum', col: 2, row: 2, k: 'risk', t: 'Humano', s: 'Hospedero intermediario accidental' },
        { id: 'hig', col: 3, row: 2, k: 'alert', t: 'Hígado 65–75%', s: 'Lóbulo derecho' },
        { id: 'pul', col: 3, row: 3, k: 'alert', t: 'Pulmón 15–25%', s: 'Bases pulmonares' },
      ],
      edges: [
        { from: 'per', to: 'hue' }, { from: 'hue', to: 'gan', label: 'pastoreo' },
        { from: 'gan', to: 'per', label: 'vísceras crudas' },
        { from: 'hue', to: 'hum', label: 'ingiere huevos' },
        { from: 'hum', to: 'hig' }, { from: 'hum', to: 'pul' },
      ],
      steps: [
        { show: ['per', 'hue'], note: 'El gusano adulto vive en el intestino del perro',
          say: 'Empecemos por la hidatidosis, o equinococosis quística. La causa la fase larvaria de un cestodo, el Echinococcus granulosus. El hospedero definitivo es el perro: el gusano adulto vive en su intestino y elimina huevos en las heces.' },
        { show: ['gan'], note: 'El ciclo se cierra cuando el perro come vísceras',
          say: 'Esos huevos los ingieren ovinos, caprinos y bovinos, que forman quistes en sus vísceras. Y el ciclo se cierra cuando al perro lo alimentan con esas vísceras crudas. Por eso es una enfermedad de zonas ganaderas.' },
        { show: ['hum'], note: 'El humano entra por accidente',
          say: 'El humano entra por accidente, como hospedero intermediario, al ingerir los huevos de las heces del perro. Fíjate en el detalle que se pregunta: no nos contagiamos comiendo carne de oveja, sino por contacto con perros.' },
        { show: ['hig', 'pul'], note: 'Primero el hígado, después el pulmón',
          say: 'Una vez adentro, la larva forma quistes. La localización más frecuente es el hígado, entre el sesenta y cinco y el setenta y cinco por ciento, sobre todo en el lóbulo derecho. La segunda es el pulmón, entre el quince y el veinticinco por ciento, en las bases.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hidatidosis · diagnóstico',
      title: 'El quiste se diagnostica con la imagen',
      cards: [
        { title: 'Ecografía abdominal', tag: 'Examen de elección', kind: 'key', items: [
          { t: 'Vesículas hijas', d: 'Imagen en rueda de carreta',
            say: 'El quiste hidatídico hepático se diagnostica con la ecografía abdominal, y se clasifica con la clasificación de Gharbi o de la OMS. Un signo clásico son las vesículas hijas dentro del quiste, que dan la imagen en rueda de carreta.' },
          { t: 'Signo del camalote', d: 'Membrana germinativa desprendida',
            say: 'El otro, el que más se pregunta, es el signo del camalote o del nenúfar: la membrana germinativa interna se desprende y queda flotando dentro del quiste. Si ves camalote en un enunciado, la respuesta es hidatidosis.' },
        ] },
        { title: 'Serología', tag: 'Apoyo', kind: 'normal', items: [
          { t: 'Arco 5 o ELISA IgG', d: 'Apoya el diagnóstico de la imagen',
            say: 'La serología, con el arco cinco o la ELISA IgG, tiene valor de apoyo. Es el examen de laboratorio que confirma la sospecha que te dio la imagen.' },
        ] },
        { title: 'Lo que no tiene', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Suele ser un hallazgo', d: 'Masa quística indolora',
            say: 'Y un dato de contexto: el quiste suele ser una masa indolora, muchas veces un hallazgo ecográfico. No esperes un cuadro agudo dramático, salvo que el quiste se rompa.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Hidatidosis · complicación y tratamiento',
      title: 'Lo que más se teme es la rotura',
      nodes: [
        { id: 'qui', col: 0, row: 1, k: 'start', t: 'Quiste hidatídico', s: 'Líquido muy antigénico' },
        { id: 'rot', col: 1, row: 0, k: 'risk', t: 'Rotura', s: 'Traumática o espontánea' },
        { id: 'ana', col: 2, row: 0, k: 'alert', t: 'Shock anafiláctico', s: 'Por el líquido hidatídico' },
        { id: 'sie', col: 3, row: 0, k: 'alert', t: 'Siembra peritoneal', s: 'Quistes secundarios' },
        { id: 'alb', col: 1, row: 2, k: 'good', t: 'Albendazol', s: '10–15 mg/kg/día' },
        { id: 'pai', col: 2, row: 2, k: 'good', t: 'PAIR', s: 'Con escolicida' },
        { id: 'cir', col: 3, row: 2, k: 'good', t: 'Periquistectomía', s: 'Cirugía conservadora' },
      ],
      edges: [
        { from: 'qui', to: 'rot' }, { from: 'rot', to: 'ana' }, { from: 'ana', to: 'sie' },
        { from: 'qui', to: 'alb', label: 'tratar' }, { from: 'alb', to: 'pai', label: 'más' }, { from: 'alb', to: 'cir', label: 'o' },
      ],
      steps: [
        { show: ['qui', 'rot'], note: 'Un golpe menor puede romperlo',
          say: 'Ahora, por qué este quiste indoloro es peligroso. Puede romperse, ya sea por un trauma o de forma espontánea.' },
        { show: ['ana'], note: 'La complicación más temida',
          say: 'Y cuando se rompe, libera el líquido hidatídico, que es muy antigénico. El resultado es un shock anafiláctico grave. Esa es la complicación más temida, y es la respuesta cuando te preguntan qué es lo más grave que le puede pasar a un paciente con un quiste.' },
        { show: ['sie'], note: 'Además, nuevos quistes en el peritoneo',
          say: 'Además, el contenido del quiste siembra el peritoneo y forma quistes secundarios.' },
        { show: ['alb'], note: 'La base de todo tratamiento',
          say: 'El tratamiento parte con albendazol oral, de diez a quince miligramos por kilo al día.' },
        { show: ['pai', 'cir'], note: 'Albendazol más un procedimiento',
          say: 'Y el albendazol se asocia a un procedimiento. Puede ser la PAIR, que significa punción, aspiración, inyección de un agente escolicida, como suero salino hipertónico o alcohol, y reaspiración. O puede ser una cirugía conservadora, la periquistectomía.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Triquinosis · mecanismo',
      title: 'Del cerdo clandestino al músculo',
      nodes: [
        { id: 'cer', col: 0, row: 1, k: 'cause', t: 'Cerdo sin inspección', s: 'Cecinas, longanizas, jamón casero' },
        { id: 'est', col: 1, row: 1, k: 'mech', t: 'Larvas liberadas', s: 'En el estómago' },
        { id: 'int', col: 2, row: 1, k: 'mech', t: 'Maduran en el intestino', s: 'Hembras liberan larvas nuevas' },
        { id: 'mus', col: 3, row: 1, k: 'effect', t: 'Músculo estriado', s: 'Diafragma, maseteros, lengua, bíceps' },
        { id: 'tri', col: 3, row: 3, k: 'alert', t: 'Tríada + eosinofilia', s: 'Edema palpebral, mialgias, fiebre' },
      ],
      edges: [
        { from: 'cer', to: 'est' }, { from: 'est', to: 'int' },
        { from: 'int', to: 'mus', label: 'circulación' }, { from: 'mus', to: 'tri' },
      ],
      steps: [
        { show: ['cer'], note: 'La pista está en la anamnesis',
          say: 'Pasemos a la triquinosis. La causa un nematodo, Trichinella spiralis, y se adquiere comiendo carne de cerdo o subproductos, como cecinas, longanizas o jamón casero, crudos o mal cocidos. La clave es que vienen de un faenamiento clandestino, sin inspección veterinaria, sin la triquinoscopía.' },
        { show: ['est', 'int'], note: 'Primero el tubo digestivo',
          say: 'Las larvas enquistadas en esa carne se liberan en el estómago, maduran en el intestino delgado, y las hembras liberan larvas recién nacidas.' },
        { show: ['mus'], note: 'Buscan el músculo que más trabaja',
          say: 'Esas larvas entran a la circulación y migran al músculo estriado de alta actividad metabólica: el diafragma, los maseteros, la lengua y el bíceps. Ahí se enquistan.' },
        { show: ['tri'], note: 'La migración explica la clínica',
          say: 'Esa invasión muscular es la que explica la clínica: dolor en los músculos que más trabajan, fiebre, y una reacción inflamatoria con muchos eosinófilos. Vamos a verla en detalle.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Triquinosis · clínica y tratamiento',
      title: 'La tríada y la eosinofilia',
      cards: [
        { title: 'Tríada clásica', tag: 'Patognomónica', kind: 'criteria', items: [
          { t: 'Edema bipalpebral bilateral', d: 'Simétrico, con hemorragias subconjuntivales',
            say: 'La tríada clásica de la triquinosis parte con el edema bipalpebral y facial, bilateral y simétrico, a menudo con hemorragias subconjuntivales y hemorragias en astilla bajo las uñas. Ojo con la palabra bilateral: el Chagas agudo, que vimos hace dos clases, da un edema palpebral unilateral, el signo de Romaña.' },
          { t: 'Mialgias intensas', d: 'Dolor al masticar, tragar o respirar',
            say: 'Segundo, mialgias intensas y generalizadas. Duele masticar, tragar y respirar, justo los músculos que la larva prefiere.' },
          { t: 'Fiebre alta persistente', d: '39–40 °C',
            say: 'Y tercero, fiebre alta y persistente, de treinta y nueve a cuarenta grados.' },
        ] },
        { title: 'Laboratorio', tag: 'El dato cardinal', kind: 'key', items: [
          { t: 'Eosinofilia masiva', d: 'Más de 20–50% de los leucocitos',
            say: 'El hallazgo de laboratorio cardinal es una eosinofilia muy elevada, de más del veinte al cincuenta por ciento de los leucocitos. Mialgias con eosinofilia así de alta es triquinosis hasta demostrar lo contrario.' },
          { t: 'CPK y LDH elevadas', d: 'Daño muscular',
            say: 'Y como el músculo está siendo invadido, suben las enzimas musculares, la CPK y la LDH.' },
        ] },
        { title: 'Tratamiento', tag: 'Albendazol', kind: 'pharma', items: [
          { t: 'Albendazol 400 mg c/12 h', d: 'Por 10 a 14 días, o mebendazol',
            say: 'El tratamiento es albendazol, cuatrocientos miligramos cada doce horas por diez a catorce días, o mebendazol, más analgésicos.' },
          { t: 'Corticoides si es severa', d: 'Miocarditis o toxicidad sistémica',
            say: 'Y si el cuadro es severo, con miocarditis o toxicidad sistémica, se agregan corticoides, como la prednisona. La miocarditis es la complicación que más se teme, porque la larva también puede llegar al corazón.' },
          { t: 'Notificar de inmediato', d: 'ENO: decomisar el alimento',
            say: 'Por último, es una enfermedad de notificación obligatoria: se notifica de inmediato a la SEREMI de Salud, para decomisar el alimento y cortar el brote.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos las dos zoonosis en un árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Hidatidosis versus triquinosis',
      head: ['Característica', 'Hidatidosis', 'Triquinosis'],
      rows: [
        { cells: ['Contagio', 'Heces de perro, agua con huevos', 'Cerdo o cecinas caseras crudas'],
          say: 'Comparemos las dos, porque el examen las pone como distractor una de la otra. El contagio: la hidatidosis viene de las heces del perro; la triquinosis, del cerdo o las cecinas caseras crudas.' },
        { cells: ['Órgano blanco', 'Hígado 70% y pulmón 20%', 'Músculo estriado'],
          say: 'El órgano blanco: en la hidatidosis, el hígado y luego el pulmón; en la triquinosis, el músculo estriado.' },
        { cells: ['Manifestación', 'Quiste indoloro, hallazgo ecográfico', 'Edema bipalpebral + mialgias + fiebre'],
          say: 'La hidatidosis suele ser un quiste indoloro; la triquinosis es un cuadro agudo con la tríada.' },
        { cells: ['Hallazgo clave', 'Camalote en la imagen, serología IgG', 'Eosinofilia masiva + CPK elevada'],
          say: 'La clave diagnóstica de la hidatidosis está en la imagen, el camalote; la de la triquinosis, en el hemograma, con la eosinofilia masiva y la CPK alta.' },
        { cells: ['Complicación temida', 'Rotura con shock anafiláctico', 'Miocarditis o encefalitis'],
          say: 'La complicación que más se teme: en la hidatidosis, la rotura con shock anafiláctico; en la triquinosis, la miocarditis o la encefalitis por migración de larvas.' },
        { cells: ['Tratamiento', 'Albendazol + PAIR o cirugía', 'Albendazol + corticoides si es severa'],
          say: 'Y el tratamiento en ambas parte con albendazol. En la hidatidosis se suma un procedimiento; en la triquinosis grave, corticoides.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 44 años con 4 días de fiebre de 39 °C, mialgias severas en brazos y piernas que le dificultan caminar y masticar, e hinchazón de ojos. Hace 10 días comió carne de cerdo y longanizas artesanales faenadas en el campo. Edema bipalpebral bilateral con hiperemia conjuntival y dolor a la palpación muscular. Leucocitos 16.200/mm³ con 42% de eosinófilos; CPK 890 UI/L.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Notificar a la SEREMI e iniciar albendazol 400 mg cada 12 horas por 10 a 14 días' },
        { letter: 'B', text: 'Solicitar ecografía abdominal y serología para hidatidosis' },
        { letter: 'C', text: 'Iniciar nifurtimox por sospecha de Chagas agudo' },
        { letter: 'D', text: 'Iniciar ceftriaxona endovenosa por fiebre tifoidea' },
        { letter: 'E', text: 'Solo analgesia y control en una semana' },
      ],
      correct: 'A',
      explanation: 'Cecinas caseras sin inspección + edema bipalpebral bilateral + mialgias + fiebre + eosinofilia masiva y CPK alta: triquinosis aguda. Se notifica de inmediato (ENO) y se trata con albendazol 400 mg cada 12 h por 10 a 14 días. El Chagas agudo da edema unilateral.',
      say: {
        stem: 'Vamos con un caso. Hombre de cuarenta y cuatro años, con cuatro días de fiebre, mialgias tan severas que le cuesta caminar y masticar, y los ojos hinchados. Hace diez días comió carne de cerdo y longanizas faenadas en el campo. Tiene edema bipalpebral bilateral, dolor a la palpación muscular, cuarenta y dos por ciento de eosinófilos y la CPK elevada.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: notificar e iniciar albendazol, pedir ecografía y serología para hidatidosis, tratar un Chagas agudo, tratar una fiebre tifoidea, o solo analgesia. Piénsalo.',
        answer: 'La respuesta es la A. Cecinas caseras sin inspección, la tríada completa, y una eosinofilia masiva con la CPK alta: es una triquinosis. Se notifica de inmediato para cortar el brote y se trata con albendazol por diez a catorce días. El distractor tentador es el Chagas, porque también hay edema palpebral, pero el Chagas agudo da un edema unilateral, y aquí es bilateral.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 56',
      stem: 'Un paciente de 25 años que vive en una zona rural consulta por cefalea y mialgias intensas de 7 días de evolución, asociadas a malestar general y sensación febril. Al examen físico presenta temperatura: 37,5 °C, frecuencia cardíaca: 115 por minuto y presión arterial: 100/60 mmHg. Se solicitan exámenes que muestran PCR 5,6 mg/L (valor normal: menor a 0,5 mg/dl), hemograma con 15.000 glóbulos blancos/mm³, 290.000 plaquetas/mm³ y hematocrito de 35%. En la fórmula diferencial de la serie blanca presenta 40% de eosinófilos. Se solicitan CK, que resultan 2.500 U/L (VN: 30-170 U/L). El estudio ecocardiográfico es compatible con miocarditis aguda.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Fasciolasis hepática' },
        { letter: 'B', text: 'Neurocisticercosis' },
        { letter: 'C', text: 'Hidatidosis' },
        { letter: 'D', text: 'Infección por Trichinella spiralis' },
        { letter: 'E', text: 'Infección por virus Coxsackie' },
      ],
      correct: 'D',
      explanation: 'Mialgias + eosinofilia masiva + CK elevada: triquinosis clásica, aquí con miocarditis. Se trata con albendazol y analgésicos, y por la miocarditis se agregan corticoides. El Coxsackie da miocarditis, pero no eosinofilia.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Un paciente de veinticinco años, de zona rural, con siete días de cefalea, mialgias intensas y sensación febril. Está taquicárdico. Tiene cuarenta por ciento de eosinófilos, una CK de dos mil quinientos, y la ecocardiografía es compatible con una miocarditis aguda.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: fasciolasis hepática, neurocisticercosis, hidatidosis, infección por Trichinella spiralis, o virus Coxsackie. Piénsalo.',
        answer: 'Es la D, triquinosis. Mialgias, eosinofilia masiva y una CK muy alta es la combinación clásica, y aquí la larva llegó al corazón. El distractor tentador es el Coxsackie, porque es la causa típica de miocarditis viral, pero no explica cuarenta por ciento de eosinófilos. Y recuerda la conducta: por la miocarditis, al albendazol se le agregan corticoides.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 72',
      stem: 'Un hombre de 40 años presenta un cuadro de dolor abdominal, de 3 meses de evolución, leve, intermitente. Al examen físico presenta leve dolor a la palpación del hipocondrio derecho, por lo que se solicita una ecografía de abdomen, que visualiza una lesión hepática quística, con paredes visibles y gruesas, de 8 cm. En sus exámenes destaca hemograma con hematocrito y plaquetas normales, con 8.000 blancos, 50% de neutrófilos, 40% de linfocitos, 3% de eosinófilos y 7% de monocitos.',
      question: '¿Qué examen es el más adecuado para confirmar el diagnóstico?',
      options: [
        { letter: 'A', text: 'IgG para Toxoplasma gondii' },
        { letter: 'B', text: 'Serología para hidatidosis' },
        { letter: 'C', text: 'Serología para Triquinella spiralis' },
        { letter: 'D', text: 'IgG para Fasciola hepática (Distoma)' },
        { letter: 'E', text: 'Examen parasitológico seriado de deposiciones' },
      ],
      correct: 'B',
      explanation: 'Lesión hepática quística con pared gruesa: quiste hidatídico. La ecografía ya orienta; la serología apoya el diagnóstico. La ausencia de eosinofilia no lo descarta.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil dieciséis. Hombre de cuarenta años con tres meses de dolor abdominal leve e intermitente. La ecografía muestra una lesión quística en el hígado, de ocho centímetros, con paredes gruesas. Los eosinófilos están normales, en tres por ciento.',
        question: '¿Qué examen es el más adecuado para confirmar el diagnóstico?',
        options: 'Las opciones son: IgG para toxoplasma, serología para hidatidosis, serología para triquinosis, IgG para Fasciola hepática, o parasitológico seriado de deposiciones. Piénsalo.',
        answer: 'Es la B, la serología para hidatidosis. Un quiste hepático con pared gruesa en la ecografía es un quiste hidatídico, y la serología es el examen de apoyo que lo confirma. Fíjate en el distractor escondido: los eosinófilos normales te pueden empujar a descartar un parásito, pero el quiste intacto no tiene por qué dar eosinofilia. La eosinofilia masiva es de la triquinosis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 11',
      stem: 'Un paciente de 42 años presenta tos seca de 7 días de evolución que hace 3 días se volvió productiva, con secreción de sabor salado. Al examen físico tiene frecuencia cardíaca 68 lpm, presión arterial 120/80 mmHg y frecuencia respiratoria 16 rpm. El examen pulmonar muestra matidez en la zona inferior del campo pulmonar derecho, con disminución del murmullo pulmonar en dicha zona. Los exámenes de laboratorio revelan un hematocrito: 38%, plaquetas: 312.000 por mm³, y glóbulos blancos: 12.000 por mm³, con 10% de eosinófilos.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Derrame pleural tuberculoso' },
        { letter: 'B', text: 'Hidatidosis pulmonar' },
        { letter: 'C', text: 'Absceso pulmonar' },
        { letter: 'D', text: 'Neumonía' },
        { letter: 'E', text: 'Carcinoma broncogénico' },
      ],
      correct: 'B',
      explanation: 'Expectoración de sabor salado (vómica) en la base pulmonar con eosinofilia: quiste hidatídico pulmonar roto hacia el bronquio. El quiste pulmonar intacto suele ser asintomático.',
      say: {
        stem: 'Ahora el pulmón, con una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Paciente de cuarenta y dos años con tos que se volvió productiva, con una secreción de sabor salado. Tiene matidez y menos murmullo en la base derecha, y diez por ciento de eosinófilos.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: derrame pleural tuberculoso, hidatidosis pulmonar, absceso pulmonar, neumonía o carcinoma broncogénico. Piénsalo.',
        answer: 'Es la B, hidatidosis pulmonar. Esa expectoración de sabor salado se llama vómica: es el líquido de un quiste hidatídico que se rompió hacia un bronquio. Y calza con lo que vimos: base pulmonar, y eosinofilia. El absceso pulmonar es el distractor, pero su expectoración es purulenta y fétida, no salada.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 70',
      stem: 'Un paciente de 34 años presenta un episodio de tos intensa, con salida de abundante líquido salobre, con presencia de membranas blanquecinas y restos hemoptoicos. Su examen físico es normal.',
      question: '¿Cuál es el examen más adecuado para iniciar el estudio de este paciente?',
      options: [
        { letter: 'A', text: 'TAC de tórax y abdomen' },
        { letter: 'B', text: 'Parasitológico de deposiciones' },
        { letter: 'C', text: 'Radiografía de tórax' },
        { letter: 'D', text: 'Ecografía abdominal' },
        { letter: 'E', text: 'Colonoscopía' },
      ],
      correct: 'C',
      explanation: 'Vómica con líquido salobre y membranas: hidatidosis pulmonar. El primer examen es la radiografía de tórax; luego TAC y ecografía abdominal para buscar quistes hepáticos.',
      say: {
        stem: 'Y una última pregunta real, del EUNACOM de agosto de dos mil veintiuno. Paciente de treinta y cuatro años con un episodio de tos intensa, con salida de abundante líquido salobre, membranas blanquecinas y restos de sangre. Su examen físico es normal.',
        question: '¿Cuál es el examen más adecuado para iniciar el estudio?',
        options: 'Las opciones son: TAC de tórax y abdomen, parasitológico de deposiciones, radiografía de tórax, ecografía abdominal o colonoscopía. Piénsalo.',
        answer: 'Es la C, la radiografía de tórax. De nuevo es una vómica, ahora con las membranas del quiste: hidatidosis pulmonar. Y aquí la pregunta no es el diagnóstico, sino el primer examen. Se parte siempre por la radiografía de tórax. La TAC es el distractor, porque es mejor examen, pero va después, igual que la ecografía abdominal para buscar un quiste en el hígado.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Hidatidosis', tag: 'Perro · quiste', kind: 'key', items: [
          { t: 'Huevos de heces de perro', d: 'Hígado primero, pulmón después',
            say: 'Cerremos con las reglas de oro. La hidatidosis se contagia por los huevos de las heces del perro, y forma quistes en el hígado y luego en el pulmón.' },
          { t: 'Camalote en la ecografía', d: 'Serología como apoyo',
            say: 'En el hígado, el diagnóstico es ecográfico, con el signo del camalote, y la serología apoya. En el pulmón, la vómica salada y la radiografía de tórax como primer examen.' },
          { t: 'Rotura: shock anafiláctico', d: 'Albendazol + PAIR o periquistectomía',
            say: 'La complicación más temida es la rotura con shock anafiláctico, y el tratamiento es albendazol más PAIR o cirugía.' },
        ] },
        { title: 'Triquinosis', tag: 'Cerdo · músculo', kind: 'alert', items: [
          { t: 'Cecinas caseras sin inspección', d: 'Edema bipalpebral + mialgias + fiebre',
            say: 'La triquinosis viene de cecinas o cerdo sin inspección, y da la tríada: edema bipalpebral bilateral, mialgias y fiebre.' },
          { t: 'Eosinofilia masiva + CPK alta', d: 'Albendazol · corticoides si es grave',
            say: 'Si te llevas una sola idea de hoy: quiste con camalote es hidatidosis y su riesgo es la anafilaxia; mialgias con eosinofilia masiva es triquinosis, y ambas se tratan con albendazol. En la próxima clase seguimos con las bacteriosis zoonóticas: brucelosis, leptospirosis y fiebre tifoidea. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Zoonosis parasitaria rural: quiste o músculo',
    root: N('start', 'Paciente rural', 'Contacto con perros o cecinas caseras',
      'Paciente de zona rural o ganadera. La anamnesis y el primer hallazgo te dicen si estás frente a un quiste o frente a un músculo invadido.',
      ['', N('q', '¿Qué encuentras?', 'Quiste en imagen · tríada muscular',
        '¿Encuentras un quiste en la imagen, o un cuadro agudo con edema palpebral, mialgias y fiebre?',
        ['Quiste', N('q', 'Hidatidosis: ¿está roto?', 'Camalote · serología de apoyo',
          'Un quiste con camalote o vesículas hijas es hidatidosis. La pregunta que decide la urgencia es si se rompió.',
          ['NO', N('do', 'Albendazol + procedimiento', 'PAIR o periquistectomía',
            'Quiste intacto: albendazol de diez a quince miligramos por kilo al día, asociado a PAIR con escolicida o a una periquistectomía.')],
          ['SÍ', N('alert', 'Shock anafiláctico', 'Y siembra peritoneal',
            'Quiste roto: el líquido hidatídico produce un shock anafiláctico grave y siembra el peritoneo. Es una emergencia vital.')])],
        ['Tríada + eosinofilia', N('q', 'Triquinosis: ¿es severa?', 'Miocarditis o toxicidad sistémica',
          'Edema bipalpebral bilateral, mialgias, fiebre, eosinofilia masiva y CPK alta: triquinosis. Se notifica de inmediato, y se define si es severa.',
          ['NO', N('ok', 'Albendazol + analgésicos', '400 mg c/12 h por 10 a 14 días',
            'Sin gravedad: albendazol cuatrocientos miligramos cada doce horas por diez a catorce días, o mebendazol, con analgésicos.')],
          ['SÍ', N('refer', 'Agregar corticoides', 'Prednisona',
            'Con miocarditis o toxicidad sistémica: al albendazol se agregan corticoides, como la prednisona.')])])]),
  },
};
