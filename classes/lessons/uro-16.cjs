// Clase 13.16 (Urología) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/dataset_urologia.cjs (uro-16). Códigos: 4.03.1.009 Fimosis, parafimosis · 4.03.1.001 Balanitis, balano postitis
// · 4.03.2.004 Priapismo · 4.03.1.005 Disfunción sexual de causa orgánica (niveles según Perfil2026.pdf).
// Preguntas reales (class_questions.cjs --search): Julio 2025 P62 (fimosis fisiológica), Diciembre 2017 P74 (balanopostitis y diabetes),
// Diciembre 2025 P94 (priapismo isquémico por cocaína), Julio 2025 P112 (iPDE5 primera línea), Agosto 2021 P145 (sildenafil y nitroglicerina).
// En Diciembre 2025 P94 y Agosto 2021 P145 se corrigieron solo errores de OCR del banco ("físico", "objetiva", "Doxasozina", "suprdesnivel").
// No usadas: Diciembre 2022 P114, Diciembre 2018 P49 y Julio 2018 P66 (claves erróneas según REVISION_CONTENIDO.md, E3); Diciembre 2018 P32 (atenolol como causa
// de disfunción eréctil: la hidroclorotiazida de la alternativa C también la causa); Diciembre 2024 P107 (enunciado roto); Agosto 2021 P62 y
// Diciembre 2019 P66 (misma pregunta que Diciembre 2025 P94); Enero 2023 P21 (repite la idea de Julio 2025 P62); Julio 2024 P49/P50 (ya en ped-13).
// Sin imágenes: no hay foto verificada del tema en books/data/atlas_fotos_verificadas.json.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'uro-16',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fimosis, parafimosis, balanopostitis, priapismo y disfunción eréctil: qué se observa, qué es urgencia y qué se trata',
      say: 'Bienvenido. Hoy vemos el pene, que el examen pregunta con cuatro situaciones muy concretas. Una fimosis de niño que casi siempre se observa, una balanopostitis que te obliga a pedir glicemia, un priapismo que es una urgencia con hora de término, y una disfunción eréctil que te avisa de un problema cardiovascular. Partamos por el prepucio.',
    },

    {
      type: 'points',
      kicker: 'Fimosis',
      title: 'Fisiológica o patológica',
      cards: [
        { title: 'Fimosis fisiológica', tag: 'Lo normal en el niño', kind: 'normal', items: [
          { t: 'Prepucio no retráctil al nacer', d: 'Adherencias balanoprepuciales normales',
            say: 'Fimosis es no poder retraer el prepucio por detrás del glande. Al nacer, casi todos los niños la tienen, porque el prepucio está pegado al glande por adherencias normales.' },
          { t: 'Se suelta sola con los años', d: 'Solo 1% persiste en la adolescencia',
            say: 'Esas adherencias se sueltan solas con las erecciones y la descamación, ese material blanco que llamamos esmegma. La gran mayoría se hace retráctil en la infancia, y solo cerca de uno por ciento persiste al final de la adolescencia.' },
          { t: 'Prepucio sano, sin cicatriz', d: 'Se abre en forma de flor',
            say: 'Fíjate en cómo se ve: el prepucio es sano y flexible, y al intentar retraerlo se abre como una flor. No hay ningún anillo blanco.' },
        ] },
        { title: 'Fimosis patológica', tag: 'Cicatricial', kind: 'alert', items: [
          { t: 'Anillo blanco, fibroso, inelástico', d: 'Cicatriz en la punta del prepucio',
            say: 'La fimosis patológica es distinta: hay un anillo blanquecino, fibroso, que no cede. Eso es una cicatriz.' },
          { t: 'Balanitis, retracción forzada, liquen', d: 'Liquen escleroso: balanitis xerótica',
            say: 'Esa cicatriz viene de balanopostitis repetidas, de retracciones a la fuerza o de un liquen escleroso, que antes se llamaba balanitis xerótica obliterante.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fimosis',
      title: 'Cuándo se trata y con qué',
      cards: [
        { title: 'Escalones', tag: 'Conducta', kind: 'key', items: [
          { t: 'Asintomática: observar', d: 'Aseo suave, nunca retraer a la fuerza',
            say: 'La regla de oro: la fimosis fisiológica sin síntomas no se trata, se observa. Se enseña aseo suave y se prohíbe retraer a la fuerza, porque eso produce fisuras y termina en la cicatriz que querías evitar.' },
          { t: 'Sintomática: corticoide tópico', d: 'Betametasona 0,05% por 4 a 8 semanas',
            say: 'Si da síntomas, como balanopostitis, infección urinaria o un prepucio que se abomba al orinar, la primera línea es un corticoide tópico. Betametasona al cero coma cero cinco por ciento, dos veces al día, por cuatro a ocho semanas, con éxito cercano a ochenta por ciento.' },
          { t: 'Circuncisión: cicatriz o fracaso', d: 'O infección recurrente',
            say: 'La circuncisión queda para la fimosis cicatricial o por liquen, el fracaso del corticoide, la balanopostitis o la infección urinaria recurrentes, y la parafimosis que se repite.' },
        ] },
        { title: 'Fimosis del adulto', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Adquirida: pedir glicemia', d: 'Descartar diabetes y liquen',
            say: 'En el adulto la historia cambia. Una fimosis que aparece de nuevo obliga a descartar diabetes y liquen escleroso.' },
          { t: 'Más riesgo de cáncer de pene', d: 'Si la fimosis se mantiene',
            say: 'Y una fimosis que se mantiene en el tiempo se asocia a más riesgo de cáncer de pene. Por eso en el adulto no se observa indefinidamente.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia',
      title: 'Parafimosis: el anillo que estrangula',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'cause', t: 'Prepucio estrecho retraído', s: 'Tras sonda, aseo o coito' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'Anillo detrás del glande', s: 'No vuelve a su lugar' },
        { id: 'c', col: 2, row: 1, k: 'effect', t: 'Edema del glande', s: 'Bloqueo venoso y linfático' },
        { id: 'd', col: 3, row: 1, k: 'alert', t: 'Isquemia y necrosis', s: 'Si no se reduce' },
        { id: 'e', col: 2, row: 3, k: 'good', t: 'Comprimir y reducir', s: 'Analgesia y maniobra manual' },
        { id: 'f', col: 3, row: 3, k: 'refer', t: 'Si falla: incisión dorsal', s: 'Circuncisión diferida' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd', label: 'horas' },
        { from: 'c', to: 'e', label: 'conducta' }, { from: 'e', to: 'f', label: 'fracaso' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'Lo contrario de la fimosis',
          say: 'La parafimosis es lo contrario de la fimosis. Un prepucio estrecho se retrae y queda atrapado detrás del surco del glande. La causa más típica la provocamos nosotros: instalar una sonda o examinar, y no volver a poner el prepucio en su lugar.' },
        { show: ['c', 'd'], note: 'Por eso es urgencia',
          say: 'Ese anillo aprieta, bloquea el retorno venoso y linfático, y el glande se hincha en pocas horas. Mientras más se hincha, más aprieta el anillo. Si no lo resuelves, viene la isquemia y la necrosis. Por eso es una urgencia.' },
        { show: ['e'], note: 'Primero baja el edema, después reduce',
          say: 'La conducta es tuya. Analgesia, con bloqueo del pene o anestésico tópico, y compresión sostenida del glande por varios minutos, con una gasa fría, para sacar el edema. Después, los pulgares empujan el glande hacia adentro mientras los dedos llevan el anillo hacia adelante. El calor está de más, porque aumenta el edema.' },
        { show: ['f'], note: 'La circuncisión nunca es de urgencia',
          say: 'Si la reducción falla, se corta el anillo con una incisión dorsal bajo anestesia local. La circuncisión se programa después, nunca sobre un tejido hinchado. Y la prevención se pregunta: siempre reponer el prepucio después de sondear.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Balanopostitis',
      title: 'Glande y prepucio inflamados',
      cards: [
        { title: 'Cómo se presenta', tag: 'Clínica', kind: 'key', items: [
          { t: 'Balanitis más postitis', d: 'Glande y prepucio a la vez',
            say: 'Balanitis es la inflamación del glande, y postitis la del prepucio. Como casi siempre van juntas, hablamos de balanopostitis. Es más frecuente en el no circuncidado con prepucio estrecho, mal aseo o, al revés, con jabones irritantes.' },
          { t: 'Eritema, ardor, prurito, exudado', d: 'Sin fiebre',
            say: 'Da eritema, ardor, picazón, edema y exudado con mal olor, pero sin fiebre. Ojo con eso: un niño con fimosis y fiebre alta no tiene una balanopostitis, tiene una infección urinaria hasta demostrar lo contrario.' },
        ] },
        { title: 'Causas', tag: 'La que se pregunta', kind: 'alert', items: [
          { t: 'Candida: pápulas satélites', d: 'La más frecuente en el adulto',
            say: 'En el adulto, la causa infecciosa más frecuente es Candida albicans. La reconoces por un eritema brillante con pápulas satélites y un exudado blanquecino.' },
          { t: 'Pensar en diabetes', d: 'También antibióticos y gliflozinas',
            say: 'La Candida se asocia a diabetes, y a veces la balanopostitis es la primera manifestación de una diabetes. También a antibióticos recientes, a inmunosupresión y a las gliflozinas, que dejan glucosa en la orina.' },
          { t: 'Bacteriana, irritativa, transmisión sexual', d: 'Y dermatosis: liquen, psoriasis',
            say: 'Otras causas son bacterianas, por estreptococo, estafilococo o anaerobios con olor fétido; irritativas; de transmisión sexual, como tricomonas, gonococo, herpes o sífilis; y dermatosis como el liquen escleroso o la psoriasis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Balanopostitis',
      title: 'Tratamiento completo y banderas rojas',
      cards: [
        { title: 'Tratamiento', tag: 'Lo haces tú', kind: 'pharma', items: [
          { t: 'Aseo, secado, sin irritantes', d: 'Base de todos los casos',
            say: 'Aquí el Perfil te pide el tratamiento completo. La base, en todos, es aseo diario con agua tibia, secado prolijo, retracción suave y suspender los jabones irritantes.' },
          { t: 'Candida: clotrimazol 7 a 14 días', d: 'Fluconazol 150 mg si es extensa',
            say: 'La candidiásica se trata con clotrimazol en crema al uno por ciento, cada doce horas, por siete a catorce días. Si es extensa o recurrente, fluconazol ciento cincuenta miligramos oral en dosis única. Se trata a la pareja si tiene síntomas, y siempre se pide glicemia.' },
          { t: 'Niño: baños de asiento', d: 'Antibiótico oral si hay celulitis',
            say: 'En el niño suele ser irritativa o bacteriana: baños de asiento tibios y aseo. Si hay pus o celulitis del prepucio, se agrega antibiótico oral contra estreptococo y estafilococo, como cefadroxilo o amoxicilina con ácido clavulánico.' },
        ] },
        { title: 'Banderas rojas', tag: 'Derivar', kind: 'alert', items: [
          { t: 'Sin respuesta en 4 a 6 semanas', d: 'Biopsia',
            say: 'La bandera roja es la balanitis que no responde después de cuatro a seis semanas de tratamiento bien hecho. Esa se deriva para biopsia.' },
          { t: 'Placa persistente o lesión indurada', d: 'Liquen, carcinoma in situ, cáncer',
            say: 'Lo que buscas es un liquen escleroso, una eritroplasia de Queyrat, que es un carcinoma in situ, o un cáncer de pene. Y la balanopostitis recurrente es indicación de circuncisión.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Priapismo',
      title: 'Isquémico: un síndrome compartimental',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'cause', t: 'Erección más de 4 horas', s: 'Sin estímulo sexual' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'Sangre atrapada', s: 'No drena por las venas' },
        { id: 'c', col: 2, row: 1, k: 'effect', t: 'Hipoxia y acidosis', s: 'Doloroso, glande blando' },
        { id: 'd', col: 3, row: 1, k: 'risk', t: 'Fibrosis cavernosa', s: 'Tras unas 24 horas' },
        { id: 'e', col: 4, row: 1, k: 'alert', t: 'Disfunción eréctil permanente', s: 'Cada hora cuenta' },
        { id: 'f', col: 1, row: 3, k: 'trap', t: 'Fármacos, cocaína, sangre', s: 'Alprostadil, trazodona, drepanocitosis' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' }, { from: 'd', to: 'e' },
        { from: 'f', to: 'b', label: 'causa' },
      ],
      steps: [
        { show: ['a'], note: 'La definición',
          say: 'Priapismo es una erección que dura más de cuatro horas y que no tiene que ver con el estímulo sexual. Hay dos tipos, y el examen quiere que los separes.' },
        { show: ['b', 'c'], note: 'Bajo flujo: el noventa y cinco por ciento',
          say: 'El isquémico, o de bajo flujo, es cerca del noventa y cinco por ciento. La sangre queda atrapada en los cuerpos cavernosos, no drena, y se vuelve ácida y sin oxígeno. Por eso duele, los cuerpos cavernosos están rígidos, y el glande y el cuerpo esponjoso están blandos. Ese contraste se pregunta.' },
        { show: ['d', 'e'], note: 'Por eso es urgencia',
          say: 'Se comporta como un síndrome compartimental. Pasadas unas veinticuatro horas, el músculo liso se necrosa y se fibrosa, y el paciente queda con una disfunción eréctil permanente. Es una urgencia, y cada hora cuenta.' },
        { show: ['f'], note: 'Siempre buscar la causa',
          say: 'Las causas: drogas inyectadas en el pene, como alprostadil o papaverina; fármacos con efecto alfa bloqueador, como trazodona y antipsicóticos; cocaína y alcohol; y la sangre, con drepanocitosis en niños y leucemia. Por eso en todo priapismo isquémico pides un hemograma.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Diferencial',
      title: 'Priapismo isquémico vs no isquémico',
      head: ['Dato', 'Isquémico', 'No isquémico'],
      rows: [
        { cells: ['Causa', 'Fármacos, cocaína, drepanocitosis, leucemia', 'Trauma perineal o peneano'],
          say: 'El no isquémico, o de alto flujo, es raro y casi siempre viene de un trauma: una caída a horcajadas o un golpe con la bicicleta, que abre una fístula entre la arteria y los cuerpos cavernosos.' },
        { cells: ['Dolor y rigidez', 'Doloroso, rígido, glande blando', 'Indoloro, erección parcial'],
          say: 'El isquémico duele y es rígido. El de alto flujo no duele, la erección es parcial y aparece horas o días después del trauma.' },
        { cells: ['Gasometría cavernosa', 'Oscura: PO2 < 30, PCO2 > 60, pH < 7,25', 'Roja: gases arteriales, pH 7,40'],
          say: 'La gasometría de la sangre aspirada los separa. En el isquémico es oscura, con presión de oxígeno bajo treinta, de dióxido de carbono sobre sesenta y pH bajo siete coma veinticinco. En el de alto flujo es roja, como sangre arterial.' },
        { cells: ['Eco Doppler', 'Sin flujo cavernoso', 'Flujo alto, fístula'],
          say: 'El eco Doppler muestra ausencia de flujo en el isquémico, y flujo alto con la fístula en el otro.' },
        { cells: ['Conducta', 'Urgencia: aspiración y fenilefrina', 'Observar, hielo; embolizar si persiste'],
          say: 'Y la conducta es opuesta. El isquémico es urgencia. El de alto flujo no tiene isquemia, así que se observa con hielo y compresión, porque muchos se resuelven solos, y si persiste el urólogo emboliza la arteria.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Priapismo isquémico',
      title: 'Tratamiento escalonado',
      cards: [
        { title: 'En urgencia', tag: 'No se espera', kind: 'pharma', items: [
          { t: 'Analgesia y bloqueo peneano', d: 'Primer paso',
            say: 'El tratamiento es escalonado y no se espera. Primero, analgesia y bloqueo del nervio dorsal del pene.' },
          { t: 'Aspiración de los cuerpos cavernosos', d: 'Más irrigación con suero; da la gasometría',
            say: 'Segundo, aspirar sangre de los cuerpos cavernosos con una aguja, con o sin lavado con suero fisiológico. Esa misma sangre te da la gasometría.' },
          { t: 'Fenilefrina intracavernosa', d: '200 µg cada 3 a 5 min, máx. 1 mg/h',
            say: 'Tercero, fenilefrina en el cuerpo cavernoso. Es un agonista alfa uno puro: contrae el músculo liso y abre el drenaje venoso. Se dan doscientos microgramos cada tres a cinco minutos, hasta un miligramo en una hora, con monitoreo de presión y frecuencia cardíaca, porque puede subir la presión y bajar el pulso.' },
        ] },
        { title: 'Si falla', tag: 'Urólogo', kind: 'alert', items: [
          { t: 'Shunt quirúrgico', d: 'Cavernoglandular o cavernoesponjoso',
            say: 'Si la aspiración y la fenilefrina fracasan, el urólogo hace un shunt quirúrgico, que conecta los cuerpos cavernosos con el glande o con el cuerpo esponjoso.' },
          { t: 'Hielo y ejercicio no sirven', d: 'Solo retrasan',
            say: 'Y la trampa: el hielo, el ejercicio o esperar no resuelven un priapismo isquémico, solo lo retrasan. Tu nivel es tratamiento inicial y derivación urgente al urólogo, que sigue la función eréctil.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiología',
      title: 'Cómo se produce una erección',
      nodes: [
        { id: 'a', col: 0, row: 1, k: 'start', t: 'Estímulo sexual', s: 'Parasimpático S2-S4' },
        { id: 'b', col: 1, row: 1, k: 'mech', t: 'Óxido nítrico', s: 'Nervios y endotelio' },
        { id: 'c', col: 2, row: 1, k: 'mech', t: 'Sube el GMP cíclico', s: 'Relaja el músculo liso' },
        { id: 'd', col: 3, row: 1, k: 'good', t: 'Sinusoides llenos', s: 'Comprimen las venas' },
        { id: 'e', col: 2, row: 3, k: 'cause', t: 'Fosfodiesterasa 5', s: 'Degrada el GMP cíclico' },
        { id: 'f', col: 3, row: 3, k: 'effect', t: 'Alfa 1 simpático', s: 'Detumescencia' },
      ],
      edges: [
        { from: 'a', to: 'b' }, { from: 'b', to: 'c' }, { from: 'c', to: 'd' },
        { from: 'e', to: 'c', label: 'frena' }, { from: 'f', to: 'd', label: 'vacía' },
      ],
      steps: [
        { show: ['a', 'b'], note: 'Es un fenómeno vascular',
          say: 'Para entender la disfunción eréctil, mira cómo se produce una erección. Es un fenómeno vascular. El estímulo activa el parasimpático, y nervios y endotelio liberan óxido nítrico.' },
        { show: ['c', 'd'], note: 'Llenar y cerrar la salida',
          say: 'El óxido nítrico sube el GMP cíclico, que relaja el músculo liso. Los sinusoides se llenan de sangre y comprimen las venas contra la albugínea. Así se llena y se cierra la salida.' },
        { show: ['e'], note: 'Aquí actúa el sildenafil',
          say: 'La fosfodiesterasa cinco degrada el GMP cíclico y termina la erección. Si la bloqueas, la erección dura: así funciona el sildenafil. Fíjate que necesita el óxido nítrico del estímulo, por eso sin estímulo no hace nada.' },
        { show: ['f'], note: 'Y aquí la fenilefrina',
          say: 'El simpático, por receptores alfa uno, vacía el pene. Ahora entiendes por qué la fenilefrina resuelve el priapismo, y por qué los fármacos alfa bloqueadores pueden causarlo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Disfunción eréctil',
      title: 'Causa orgánica: piensa en las arterias',
      cards: [
        { title: 'Causas orgánicas', tag: 'La más frecuente: vascular', kind: 'key', items: [
          { t: 'Vasculogénica: aterosclerosis', d: 'DM, HTA, dislipidemia, tabaco',
            say: 'Disfunción eréctil es no lograr o no mantener una erección suficiente por al menos tres meses. La causa orgánica más frecuente es vascular, con los mismos factores de riesgo de la aterosclerosis: diabetes, hipertensión, colesterol alto, tabaco, obesidad y sedentarismo.' },
          { t: 'Anticipa la enfermedad coronaria', d: 'En 2 a 5 años',
            say: 'Y esta es la idea que más vale: la disfunción eréctil precede en dos a cinco años a la enfermedad coronaria. Las arterias del pene son finas y se tapan primero. Es un marcador de riesgo cardiovascular.' },
          { t: 'Neurogénica, hormonal, fármacos', d: 'Betabloqueadores, tiazidas, ISRS',
            say: 'Otras causas: neurogénicas, como la diabetes, la lesión medular o la prostatectomía radical; hormonales, como hipogonadismo o prolactina alta; y fármacos, como betabloqueadores, tiazidas, espironolactona, antidepresivos ISRS, antipsicóticos y antiandrógenos.' },
        ] },
        { title: 'Orgánica vs psicógena', tag: 'Se pregunta', kind: 'criteria', items: [
          { t: 'Psicógena: brusca y situacional', d: 'Joven, erecciones matinales conservadas',
            say: 'La psicógena empieza de golpe, depende de la situación o de la pareja, se ve en jóvenes y conserva las erecciones nocturnas y matinales.' },
          { t: 'Orgánica: progresiva y global', d: 'Sin erecciones matinales',
            say: 'La orgánica es progresiva, ocurre en todas las situaciones y se pierden las erecciones matinales. Esa pregunta, si despierta con erección, es la más útil de la anamnesis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Disfunción eréctil',
      title: 'Estudio y tratamiento',
      cards: [
        { title: 'Estudio', tag: 'Diagnóstico específico', kind: 'criteria', items: [
          { t: 'Historia sexual y de fármacos', d: 'Genitales, pulsos, presión, IMC',
            say: 'El estudio es tuyo. Historia sexual y de fármacos, y examen de genitales, caracteres sexuales, pulsos, presión arterial e índice de masa corporal.' },
          { t: 'Glicemia, lípidos, testosterona', d: 'Testosterona total matinal',
            say: 'Pides glicemia o hemoglobina glicada, perfil lipídico y testosterona total en la mañana. Si sale baja, se repite y se agregan LH, FSH y prolactina. Y siempre estratificas el riesgo cardiovascular antes de tratar.' },
        ] },
        { title: 'Tratamiento', tag: 'Inicial y seguimiento', kind: 'pharma', items: [
          { t: 'iPDE5: sildenafil o tadalafil', d: 'Primera línea, con estímulo',
            say: 'Primero, corregir factores de riesgo y cambiar el fármaco causante si se puede. La primera línea son los inhibidores de la fosfodiesterasa cinco: sildenafil cincuenta miligramos una hora antes, o tadalafil, que dura hasta treinta y seis horas.' },
          { t: 'Nunca con nitratos', d: '24 h sildenafil, 48 h tadalafil',
            say: 'Su contraindicación absoluta son los nitratos, en cualquier forma, por hipotensión grave. Si tomó sildenafil, no das nitratos por veinticuatro horas; si tomó tadalafil, por cuarenta y ocho. Precaución con alfa bloqueadores y cardiopatía inestable.' },
          { t: 'Testosterona solo si hay hipogonadismo', d: 'Si fallan: alprostadil, prótesis',
            say: 'La testosterona solo se da con hipogonadismo confirmado. Controlas la respuesta, y si los inhibidores bien usados fracasan, derivas al urólogo para alprostadil intracavernoso, que también puede causar priapismo, o una prótesis.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del motivo de consulta a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Pene: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Niño, prepucio sano no retráctil', 'Observar', 'Circuncisión o retraer a la fuerza'],
          say: 'Niño con prepucio sano que no se retrae: se observa. Operar o retraer a la fuerza es el error.' },
        { cells: ['Prepucio atrapado tras sonda', 'Comprimir y reducir', 'Circuncisión de urgencia o calor'],
          say: 'Prepucio atrapado después de una sonda: se comprime y se reduce. La circuncisión urgente y el calor son trampas.' },
        { cells: ['Balanopostitis en adulto', 'Antifúngico y glicemia', 'Tratar sin buscar diabetes'],
          say: 'Balanopostitis en un adulto: antifúngico y glicemia. Olvidar la diabetes es lo que castiga el examen.' },
        { cells: ['Erección dolorosa, glande blando', 'Aspiración y fenilefrina', 'Hielo u observar'],
          say: 'Erección dolorosa con glande blando: aspiración y fenilefrina. El hielo es el distractor.' },
        { cells: ['Erección indolora post trauma', 'Doppler y observar', 'Fenilefrina o shunt'],
          say: 'Erección indolora después de un trauma perineal: Doppler y observación. La fenilefrina aquí no tiene sentido.' },
        { cells: ['Usuario de sildenafil con dolor torácico', 'No dar nitratos', 'Nitroglicerina sublingual'],
          say: 'Usuario de sildenafil con dolor torácico: nada de nitratos. Es la interacción que más se pregunta.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Niño de 12 años, con erección persistente de 2 días que apareció 24 horas después de caer a horcajadas sobre su bicicleta. No le duele. El pene está en erección parcial, hay un hematoma perineal leve. La sangre aspirada del cuerpo cavernoso es roja brillante: PO2 95 mmHg, PCO2 38 mmHg, pH 7,40. Hemograma normal.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Fenilefrina intracavernosa repetida hasta la detumescencia' },
        { letter: 'B', text: 'Shunt cavernoesponjoso de urgencia' },
        { letter: 'C', text: 'Eco Doppler, observación con hielo y compresión, y control con urología' },
        { letter: 'D', text: 'Exanguinotransfusión parcial' },
        { letter: 'E', text: 'Prótesis de pene precoz' },
      ],
      correct: 'C',
      explanation: 'Erección indolora y parcial tras trauma perineal, con gasometría arterial: priapismo no isquémico por fístula arteriocavernosa. Sin isquemia no es urgencia: Doppler, observación con hielo y compresión; embolización selectiva si persiste.',
      say: {
        stem: 'Un niño de doce años tiene una erección hace dos días, que apareció un día después de caer a horcajadas sobre la bicicleta. No le duele, la erección es parcial y la sangre aspirada sale roja, con gases como de sangre arterial. El hemograma es normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: fenilefrina repetida; shunt de urgencia; eco Doppler, observación con hielo y control con urología; exanguinotransfusión; o prótesis precoz. Piénsalo.',
        answer: 'Es la C. Indoloro, parcial, después de un trauma y con sangre arterial: es un priapismo de alto flujo, sin isquemia, y se observa. Si persiste, el urólogo emboliza. La A es la trampa, porque la fenilefrina es para el isquémico, y aquí no hay sangre atrapada que drenar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 62',
      stem: 'Niño de 5 años con incapacidad de retraer el prepucio sobre el glande. Sin dolor ni infecciones previas.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Circuncisión electiva inmediata' },
        { letter: 'B', text: 'Tranquilizar: fimosis fisiológica normal hasta los 6-7 años; observar' },
        { letter: 'C', text: 'Corticoides tópicos en el prepucio' },
        { letter: 'D', text: 'Derivar a urología' },
        { letter: 'E', text: 'Dilatación manual bajo anestesia' },
      ],
      correct: 'B',
      explanation: 'Fimosis fisiológica en niño de 5 años es normal. No requiere intervención.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un niño de cinco años no puede retraer el prepucio. No tiene dolor ni ha tenido infecciones.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: circuncisión inmediata; tranquilizar y observar; corticoide tópico; derivar a urología; o dilatación bajo anestesia. Piénsalo.',
        answer: 'Es la B. Un prepucio sano, sin síntomas, en un niño de cinco años es una fimosis fisiológica, y se observa. La C es la más tentadora, pero el corticoide se reserva para la fimosis con síntomas. Y dilatar a la fuerza deja la cicatriz que transforma una fimosis normal en una patológica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 74',
      stem: 'Un paciente de 60 años consulta por eritema y prurito en el glande y el prepucio. Al examen físico se constatan signos inflamatorios en dicha zona.',
      question: 'Además de tratar la enfermedad descrita, ¿qué enfermedad sistémica se debe descartar?',
      options: [
        { letter: 'A', text: 'Cáncer' },
        { letter: 'B', text: 'Daño hepático crónico' },
        { letter: 'C', text: 'Diabetes' },
        { letter: 'D', text: 'Lupus' },
        { letter: 'E', text: 'Insuficiencia renal' },
      ],
      correct: 'C',
      explanation: 'La balanopostitis (en especial la candidiásica) se asocia a diabetes.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un hombre de sesenta años con eritema y picazón del glande y del prepucio, con signos inflamatorios.',
        question: 'Además de tratarlo, ¿qué enfermedad sistémica se debe descartar?',
        options: 'Las opciones: cáncer; daño hepático crónico; diabetes; lupus; o insuficiencia renal. Piénsalo.',
        answer: 'Es la C, diabetes. Es una balanopostitis, y en el adulto la más frecuente es la candidiásica, que se asocia a diabetes y a veces es su primera señal. El cáncer tienta, pero la biopsia es para la lesión que no responde tras cuatro a seis semanas, no para el primer episodio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 94',
      stem: 'Un paciente de 24 años, con antecedente de consumo frecuente de cocaína, presenta dolor peneano de 5 horas de evolución asociado a una erección constante. Al examen físico se objetiva erección de los cuerpos cavernosos, con flacidez del glande y el cuerpo esponjoso.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar adrenalina intracavernosa' },
        { letter: 'B', text: 'Propranolol vía oral' },
        { letter: 'C', text: 'Doxazosina vía oral' },
        { letter: 'D', text: 'Derivación cavernoesponjosa quirúrgica' },
        { letter: 'E', text: 'Administrar fenilefrina intracavernosa' },
      ],
      correct: 'E',
      explanation: 'Tiene un priapismo isquémico o verdadero (erección dolorosa y mantenida, limitada a los cuerpos cavernosos). El tratamiento sigue el siguiente orden: 1. Fenilefrina intracavernosa, 2. Procedimientos invasivos (drenaje de los cuerpos cavernosos con suero fisiológico o derivación cavernoesponjosa). Además, se debe buscar la presencia de leucemia y anemia de células falciformes, aunque en este caso la causa más probable parece estar relacionada con el consumo de cocaína.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un joven de veinticuatro años que consume cocaína tiene dolor del pene y una erección de cinco horas. Los cuerpos cavernosos están erectos, y el glande y el cuerpo esponjoso, flácidos.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: adrenalina intracavernosa; propranolol oral; doxazosina oral; derivación cavernoesponjosa; o fenilefrina intracavernosa. Piénsalo.',
        answer: 'Es la E. Más de cuatro horas, doloroso y con glande blando: priapismo isquémico, y la droga de elección es la fenilefrina, un alfa uno puro con menos efecto cardíaco que la adrenalina. La derivación quirúrgica tienta, pero es para cuando fracasan la aspiración y la fenilefrina. La doxazosina es un alfa bloqueador: empeoraría el cuadro.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 112',
      stem: 'Hombre de 55 años con disfunción eréctil de 6 meses de evolución, sin causa aparente. HTA controlada con enalapril. Sin síntomas de hipogonadismo.',
      question: '¿Cuál es el tratamiento de primera línea?',
      options: [
        { letter: 'A', text: 'Inhibidores de la fosfodiesterasa tipo 5 (sildenafil o tadalafil)' },
        { letter: 'B', text: 'Testosterona intramuscular' },
        { letter: 'C', text: 'Alprostadil intracavernoso' },
        { letter: 'D', text: 'Prótesis de pene' },
        { letter: 'E', text: 'Solo consejería psicológica' },
      ],
      correct: 'A',
      explanation: 'Disfunción eréctil: primera línea = inhibidores de PDE5 (sildenafil, tadalafil). Contraindicados con nitratos. Enalapril no contraindica su uso. La testosterona solo si hay hipogonadismo confirmado.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un hombre de cincuenta y cinco años, hipertenso controlado con enalapril, tiene disfunción eréctil hace seis meses, sin síntomas de déficit de testosterona.',
        question: '¿Cuál es el tratamiento de primera línea?',
        options: 'Las opciones: sildenafil o tadalafil; testosterona; alprostadil intracavernoso; prótesis; o solo consejería psicológica. Piénsalo.',
        answer: 'Es la A. Los inhibidores de la fosfodiesterasa cinco son la primera línea, y el enalapril no los contraindica; lo que los contraindica son los nitratos. La testosterona tienta, pero sin hipogonadismo demostrado no sirve. Y no olvides evaluar el riesgo cardiovascular de este paciente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 145',
      stem: 'Un paciente de 67 años, usuario de sildenafil, que se automedica como tratamiento de impotencia sexual, presenta dolor torácico intenso, que inició una hora después de haber consumido dicho medicamento. Se solicita un electrocardiograma, que muestra supradesnivel del segmento ST en las derivaciones inferiores.',
      question: '¿Qué fármaco está contraindicado en el manejo de este paciente?',
      options: [
        { letter: 'A', text: 'Clopidogrel' },
        { letter: 'B', text: 'Aspirina' },
        { letter: 'C', text: 'Atenolol' },
        { letter: 'D', text: 'Nitroglicerina' },
        { letter: 'E', text: 'Estreptoquinasa' },
      ],
      correct: 'D',
      explanation: 'Los nitratos están contraindicados en las 24 horas siguientes al sildenafil (48 horas con tadalafil): ambos aumentan el GMP cíclico y su suma produce hipotensión grave. Además, en un infarto inferior la nitroglicerina se usa con cautela por el posible compromiso del ventrículo derecho.',
      say: {
        stem: 'Una pregunta real del EUNACOM de agosto de dos mil veintiuno. Un hombre de sesenta y siete años se automedica sildenafil. Una hora después tiene dolor torácico intenso, y el electrocardiograma muestra supradesnivel del ST en la cara inferior.',
        question: '¿Qué fármaco está contraindicado?',
        options: 'Las opciones: clopidogrel; aspirina; atenolol; nitroglicerina; o estreptoquinasa. Piénsalo.',
        answer: 'Es la D, nitroglicerina. El sildenafil y los nitratos suben el GMP cíclico por dos caminos, y juntos producen una hipotensión grave. Con sildenafil no se dan nitratos por veinticuatro horas. La estreptoquinasa puede asustar, pero en un infarto con supradesnivel es una opción válida si no hay angioplastía disponible.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: patología peneana',
      cards: [
        { title: 'Prepucio y glande', tag: 'Fimosis y balanitis', kind: 'key', items: [
          { t: 'Fimosis sana del niño: observar', d: 'Corticoide si hay síntomas',
            say: 'Cerremos con las reglas de oro. La fimosis sana del niño se observa y nunca se retrae a la fuerza. Si da síntomas, corticoide tópico, y circuncisión si hay cicatriz o fracasa.' },
          { t: 'Parafimosis: comprimir y reducir', d: 'Siempre reponer el prepucio',
            say: 'La parafimosis es urgencia: se comprime el edema y se reduce, y si falla, incisión dorsal. Siempre repón el prepucio después de una sonda.' },
          { t: 'Balanopostitis: clotrimazol y glicemia', d: 'Biopsia si no responde',
            say: 'La balanopostitis del adulto se trata con clotrimazol y obliga a pedir glicemia. Si no responde en cuatro a seis semanas, biopsia.' },
        ] },
        { title: 'Erección', tag: 'Priapismo y disfunción', kind: 'alert', items: [
          { t: 'Priapismo doloroso: fenilefrina', d: 'Urgencia y urólogo',
            say: 'El priapismo doloroso con glande blando es isquémico: aspiración, fenilefrina y urólogo de urgencia. El indoloro después de un trauma se observa.' },
          { t: 'Disfunción eréctil: riesgo cardiovascular', d: 'iPDE5, nunca con nitratos',
            say: 'Y la disfunción eréctil orgánica se trata con inhibidores de la fosfodiesterasa cinco, nunca junto a nitratos. Si te llevas una sola idea de hoy: una disfunción eréctil es un aviso de las arterias, así que trátala, pero busca también la enfermedad cardiovascular que viene detrás. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Patología peneana',
    root: N('start', 'Consulta por el pene', 'Prepucio, glande o erección',
      'Un paciente consulta por un problema del pene. Lo primero es ordenar: ¿es el prepucio, el glande o la erección?',
      ['Prepucio no retrae', N('q', '¿Prepucio sano o con cicatriz?', 'Mirar el anillo',
        'Si el prepucio no se retrae, miras si es sano y flexible o si tiene un anillo blanco y fibroso.',
        ['Sano y sin síntomas', N('ok', 'Fimosis fisiológica', 'Observar y aseo suave',
          'Si es sano y no da síntomas, es una fimosis fisiológica. Se observa, con aseo suave y sin retraer a la fuerza.')],
        ['Síntomas o cicatriz', N('do', 'Corticoide tópico', 'Circuncisión si falla o hay cicatriz',
          'Si da balanitis, infección urinaria o dificultad para orinar, corticoide tópico por cuatro a ocho semanas. Si hay cicatriz o el corticoide fracasa, circuncisión.')],
      )],
      ['Prepucio retraído atrapado', N('alert', 'Parafimosis', 'Comprimir y reducir de urgencia',
        'Si el prepucio quedó atrapado detrás del glande, es una parafimosis. Analgesia, compresión del edema y reducción manual, y si falla, incisión dorsal.')],
      ['Glande rojo con prurito', N('do', 'Balanopostitis', 'Aseo, clotrimazol y glicemia',
        'Si el glande y el prepucio están rojos y pican, es una balanopostitis. Aseo, clotrimazol y glicemia; si no responde en cuatro a seis semanas, biopsia.')],
      ['Erección de más de 4 horas', N('q', '¿Duele y el glande está blando?', 'Gasometría cavernosa',
        'Si la erección dura más de cuatro horas, preguntas si duele y si el glande está blando, y confirmas con la gasometría.',
        ['Sí: isquémico', N('alert', 'Aspiración y fenilefrina', 'Urólogo de urgencia',
          'Si duele, el glande está blando y la sangre es oscura, es isquémico. Aspiración, fenilefrina intracavernosa y urólogo de urgencia.')],
        ['Indoloro tras trauma', N('refer', 'Alto flujo', 'Doppler, observar, embolizar si persiste',
          'Si es indoloro y viene después de un trauma perineal, es de alto flujo. Se confirma con Doppler, se observa y se emboliza si persiste.')],
      )],
      ['No logra erección', N('do', 'Disfunción eréctil', 'Riesgo cardiovascular e iPDE5',
        'Si no logra erecciones, es una disfunción eréctil. Estudias glicemia, lípidos y testosterona, evalúas el riesgo cardiovascular y das un inhibidor de la fosfodiesterasa cinco, nunca con nitratos.')],
    ),
  },
};
