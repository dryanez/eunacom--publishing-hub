// Clase 2.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-07).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-07',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Falta agua: quién no puede tomarla, quién no puede retenerla',
      say: 'Bienvenidos. Las dos clases anteriores fueron de sodio bajo, es decir, de agua que sobra. Hoy damos vuelta el problema: la hipernatremia, donde falta agua. Y dentro de ella, la diabetes insípida, con una pregunta que el examen repite: si es central o nefrogénica, y qué hace el litio. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué sube el sodio?',
      nodes: [
        { id: 'def', col: 0, row: 1, k: 'cause', t: 'Déficit de agua libre', s: 'Falta agua respecto del sodio' },
        { id: 'sed', col: 1, row: 0, k: 'good', t: 'Sed y ADH lo impiden', s: 'Basta subir 1 a 2% la osmolaridad' },
        { id: 'acc', col: 1, row: 2, k: 'risk', t: 'Sin acceso al agua', s: 'Postrados, intubados, lactantes' },
        { id: 'pol', col: 2, row: 2, k: 'risk', t: 'Poliuria masiva', s: 'Diabetes insípida' },
        { id: 'neu', col: 3, row: 1, k: 'mech', t: 'La neurona se deshidrata', s: 'El cerebro se retrae' },
        { id: 'hem', col: 4, row: 1, k: 'alert', t: 'Desgarro de venas puente', s: 'Hemorragia subdural o subaracnoidea' },
      ],
      edges: [
        { from: 'def', to: 'sed', label: 'normalmente' }, { from: 'def', to: 'acc', label: 'si falla' },
        { from: 'acc', to: 'neu' }, { from: 'pol', to: 'neu' }, { from: 'neu', to: 'hem' },
      ],
      steps: [
        { show: ['def'], note: 'La hipernatremia es siempre hiperosmolar',
          say: 'Partamos por el mecanismo. La hipernatremia, un sodio sobre ciento cuarenta y cinco, significa que falta agua libre en relación con el sodio. Y a diferencia de la hiponatremia, siempre implica un plasma hiperosmolar.' },
        { show: ['sed'], note: 'Un sistema de defensa muy sensible',
          say: 'Pero hay una pregunta clave: ¿por qué es tan rara en una persona sana? Porque bastan uno a dos puntos porcentuales de aumento en la osmolaridad para que aparezca una sed intensa y se libere hormona antidiurética. Mientras el paciente pueda tomar agua, se defiende.' },
        { show: ['acc'], note: 'Quien no puede pedir agua',
          say: 'Por eso la hipernatremia sostenida aparece en quien no puede llegar al agua por sí mismo: el adulto mayor postrado, el paciente intubado, el lactante. Cuando en el caso veas uno de estos pacientes, piensa en hipernatremia.' },
        { show: ['pol'], note: 'O quien pierde agua más rápido de lo que la repone',
          say: 'El otro escenario es el que pierde agua a chorros, más rápido de lo que alcanza a reponer: la poliuria masiva de la diabetes insípida.' },
        { show: ['neu', 'hem'], note: 'El cerebro se encoge dentro del cráneo',
          say: 'Y el daño es el espejo de la hiponatremia. Ahora el agua sale de las neuronas y el cerebro se retrae dentro del cráneo. Al encogerse, tracciona las venas puente, que se pueden desgarrar y dar una hemorragia subdural o subaracnoidea.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Cuánta agua falta y a qué velocidad darla',
      cards: [
        { title: 'Déficit de agua libre', tag: 'La fórmula', kind: 'criteria', items: [
          { t: 'DAL = ACT × (Na actual / 140 − 1)', d: 'ACT: 0,6 × peso hombre · 0,5 × peso mujer',
            say: 'Para tratar, primero calcula cuánta agua falta. El déficit de agua libre es el agua corporal total multiplicada por el sodio actual dividido por ciento cuarenta, menos uno. Y el agua corporal total, como ya sabes, es cero coma seis por el peso en el hombre y cero coma cinco en la mujer.' },
          { t: 'Agua por vía enteral o SG 5%', d: 'Reponer en 48 a 72 horas',
            say: 'Ese volumen se repone con agua libre por vía enteral, o con suero glucosado al cinco por ciento por vía venosa, de forma progresiva, en cuarenta y ocho a setenta y dos horas.' },
        ] },
        { title: 'Velocidad de descenso', tag: 'El espejo de la hiponatremia', kind: 'alert', items: [
          { t: 'Máximo 10 a 12 mEq/L en 24 h', d: 'Bajar más rápido produce edema cerebral',
            say: 'Y aquí está el número que se pregunta. El sodio no debe bajar más de diez a doce miliequivalentes por litro en veinticuatro horas. ¿Por qué? Porque el cerebro también se adaptó a la hipernatremia, y si lo diluyes de golpe, el agua entra a las neuronas y produces un edema cerebral.' },
          { t: 'Si hay shock: primero volumen', d: 'Suero fisiológico antes que el agua libre',
            say: 'Y una excepción que el examen adora: si el paciente con hipernatremia está en shock, primero se repone el volumen con suero fisiológico, y recién después se corrige el agua. Lo vas a ver en una pregunta real, y lo profundizamos en la clase de fluidoterapia.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diabetes insípida',
      title: 'Central o nefrogénica: la desmopresina decide',
      nodes: [
        { id: 'di', col: 0, row: 2, k: 'start', t: 'Poliuria hipotónica', s: 'Más de 3 L/día, Osm urinaria menor de 300' },
        { id: 'dd', col: 1, row: 2, k: 'q', t: 'Prueba con desmopresina', s: 'DDAVP subcutánea o intranasal' },
        { id: 'cen', col: 2, row: 0, k: 'good', t: 'Osm urinaria sube más de 50%', s: 'DI central' },
        { id: 'cau', col: 3, row: 0, k: 'cause', t: 'Falta la hormona', s: 'TEC, cirugía selar, hipofisitis' },
        { id: 'nef', col: 2, row: 4, k: 'risk', t: 'Osm urinaria no cambia', s: 'DI nefrogénica' },
        { id: 'can', col: 3, row: 4, k: 'cause', t: 'El riñón no responde', s: 'Litio, hipercalcemia, hipokalemia' },
      ],
      edges: [
        { from: 'di', to: 'dd' }, { from: 'dd', to: 'cen' }, { from: 'cen', to: 'cau' },
        { from: 'dd', to: 'nef' }, { from: 'nef', to: 'can' },
      ],
      steps: [
        { show: ['di'], note: 'Mucha orina, y muy diluida',
          say: 'Vamos a la diabetes insípida. Se presenta como poliuria de gran volumen, de más de tres y hasta diez litros al día, con una orina diluida: osmolaridad urinaria bajo trescientos y densidad bajo uno coma cero cero cinco. El paciente compensa tomando mucha agua.' },
        { show: ['dd'], note: 'Una sola prueba separa los dos tipos',
          say: 'Hay dos tipos, y los separa una sola prueba: se administra desmopresina, que es hormona antidiurética sintética, y se mide la osmolaridad urinaria.' },
        { show: ['cen'], note: 'Si responde, lo que faltaba era la hormona',
          say: 'Si la orina se concentra, con un aumento de la osmolaridad urinaria sobre cincuenta por ciento, y el volumen urinario baja, el riñón funciona. Lo que faltaba era la hormona. Eso es la diabetes insípida central.' },
        { show: ['cau'], note: 'Daño de la hipófisis posterior',
          say: 'Sus causas son las que dañan la neurohipófisis: el traumatismo encefalocraneano, la cirugía de la silla turca, la hipofisitis, o es idiopática. Y se trata justamente con desmopresina, oral o intranasal.' },
        { show: ['nef'], note: 'Si no responde, el problema es el riñón',
          say: 'Si después de la desmopresina la orina sigue diluida, la hormona no es el problema: el túbulo colector no le responde. Eso es la diabetes insípida nefrogénica.' },
        { show: ['can'], note: 'La causa emblemática es el litio',
          say: 'La causa emblemática en el examen es el carbonato de litio, en el paciente bipolar. Después vienen la hipercalcemia severa y la hipokalemia crónica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Litio',
      title: 'DI nefrogénica por litio: mecanismo y tratamiento',
      cards: [
        { title: 'Mecanismo', tag: 'Por qué el riñón no responde', kind: 'key', items: [
          { t: 'Entra por el canal ENaC', d: 'A las células del túbulo colector',
            say: 'Veamos el litio de cerca. El litio entra a las células del túbulo colector por el canal epitelial de sodio, el ENaC.' },
          { t: 'Bloquea las acuaporinas-2', d: 'El colector se vuelve impermeable al agua',
            say: 'Adentro, interfiere con la señal del receptor de la hormona antidiurética, y las acuaporinas dos no llegan a la membrana. El colector queda impermeable al agua, aunque la hormona esté alta.' },
        ] },
        { title: 'Tratamiento', tag: 'Paradójico', kind: 'pharma', items: [
          { t: 'Suspender el litio si se puede', d: 'Con psiquiatría · dieta hiposódica',
            say: 'El tratamiento parte por suspender o ajustar el litio, junto con psiquiatría, y una dieta hiposódica.' },
          { t: 'Hidroclorotiazida', d: 'Hipovolemia leve: más reabsorción proximal',
            say: 'Y luego viene lo paradójico: se usa un diurético, la hidroclorotiazida. Produce una hipovolemia leve, y eso hace que el túbulo proximal reabsorba más agua, así que llega menos agua al final de la nefrona y baja la poliuria.' },
          { t: 'Amilorida', d: 'Bloquea el ENaC: el litio no entra',
            say: 'Se asocia amilorida, que bloquea el canal ENaC. Si cierras la puerta por donde entra el litio, proteges al túbulo colector. Fíjate cómo el mecanismo explica el tratamiento.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico diferencial',
      title: 'Poliuria: ¿diabetes insípida o polidipsia?',
      cards: [
        { title: 'Polidipsia psicógena', tag: 'Toma de más', kind: 'normal', items: [
          { t: 'Osm urinaria menor de 100', d: 'Dilución máxima',
            say: 'La poliuria también aparece en la polidipsia psicógena, que vimos la clase pasada. Aquí el paciente toma de más, y su orina está en la dilución máxima, bajo cien.' },
          { t: 'Se corrige con la privación de agua', d: 'La orina se concentra',
            say: 'Y la diferencia es que, si le quitas el agua, la orina se concentra, porque su hormona y su riñón funcionan bien. En la diabetes insípida, en cambio, la poliuria sigue aunque no beba.' },
        ] },
        { title: 'Con hipernatremia ya establecida', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'No privar de agua', d: 'Riesgo de shock y deshidratación grave',
            say: 'Pero ojo. Si el paciente ya llega con hipernatremia, la prueba de privación de agua está contraindicada: lo deshidratarías todavía más, con riesgo de shock.' },
          { t: 'Directo a la prueba con desmopresina', d: 'Ejemplo: poliuria tras un TEC',
            say: 'En ese caso se va directo a la prueba con desmopresina. El ejemplo típico es el paciente con un traumatismo encefalocraneano que empieza a orinar a chorros en la unidad de cuidados intensivos.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Poliuria hipotónica: diferencial y manejo',
      head: ['Entidad', 'Osm urinaria basal', 'Respuesta', 'Tratamiento'],
      rows: [
        { cells: ['DI central', 'Menor de 300', 'Sube más de 50% con DDAVP', 'Desmopresina oral o intranasal'],
          say: 'Repasemos lado a lado. Diabetes insípida central: orina diluida que se concentra con la desmopresina, y se trata con desmopresina.' },
        { cells: ['DI nefrogénica (litio)', 'Menor de 300', 'Sin cambio con DDAVP', 'Suspender litio + tiazida + amilorida'],
          say: 'Diabetes insípida nefrogénica por litio: la orina no cambia con la desmopresina. Por eso darle desmopresina no sirve. Se suspende el litio y se usa tiazida con amilorida.' },
        { cells: ['Polidipsia psicógena', 'Menor de 100', 'Se concentra al privar de agua', 'Restringir la ingesta de agua'],
          say: 'Polidipsia psicógena: la orina más diluida de las tres, que se concentra al quitar el agua. Se trata restringiendo la ingesta.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 22 años con TEC cerrado y fractura de base de cráneo. Al tercer día en UCI presenta poliuria de 600 mL/hora durante 4 horas. Na 150 mEq/L, Osm urinaria 140 mOsm/kg. Se sospecha diabetes insípida central.',
      question: '¿Cuál es la prueba diagnóstica y terapéutica inicial de elección?',
      options: [
        { letter: 'A', text: 'Prueba de privación de agua por 12 horas' },
        { letter: 'B', text: 'Dosis de prueba de desmopresina y Osm urinaria seriada' },
        { letter: 'C', text: 'Resonancia magnética de silla turca con gadolinio' },
        { letter: 'D', text: 'Vasopresina plasmática tras suero hipertónico' },
        { letter: 'E', text: 'Hidroclorotiazida más amilorida' },
      ],
      correct: 'B',
      explanation: 'Poliuria hipotónica con hipernatremia tras un trauma de base de cráneo: sospecha de DI central. Con hipernatremia establecida, la privación de agua está contraindicada. La dosis de prueba de desmopresina confirma el diagnóstico si la Osm urinaria sube más de 50% y el volumen urinario cae, y a la vez trata. Tiazida + amilorida es para la DI nefrogénica.',
      say: {
        stem: 'Vamos con un caso. Hombre de veintidós años con un traumatismo encefalocraneano y fractura de la base del cráneo. Al tercer día en la unidad de cuidados intensivos empieza a orinar seiscientos mililitros por hora. Su sodio es ciento cincuenta y la osmolaridad urinaria es ciento cuarenta.',
        question: '¿Cuál es la prueba diagnóstica y terapéutica inicial de elección?',
        options: 'Las alternativas: prueba de privación de agua, dosis de prueba de desmopresina, resonancia de silla turca, vasopresina plasmática, o hidroclorotiazida con amilorida. Piénsalo.',
        answer: 'Es la B. Trauma de base de cráneo, poliuria con orina diluida y sodio alto: diabetes insípida central. La desmopresina confirma, si la orina se concentra, y al mismo tiempo trata. El distractor tentador es la privación de agua, que es la prueba clásica de poliuria, pero este paciente ya tiene hipernatremia: quitarle el agua es peligroso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 124',
      stem: 'Niño operado de cirugía cerebral, luego presenta hipernatremia y poliuria.',
      question: '¿Diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Síndrome de secreción inadecuada de ADH (SIADH)' },
        { letter: 'B', text: 'Diabetes mellitus tipo 1' },
        { letter: 'C', text: 'Hiperaldosteronismo secundario' },
        { letter: 'D', text: 'Diabetes insípida central' },
        { letter: 'E', text: 'Polidipsia psicogénica' },
      ],
      correct: 'D',
      explanation: 'Poliuria con hipernatremia después de una cirugía cerebral: déficit de ADH por daño hipotálamo-hipofisario, diabetes insípida central. El SIADH da lo contrario (hiponatremia) y la polidipsia psicógena cursa con sodio bajo o normal.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de enero de dos mil veintitrés. Un niño operado de una cirugía cerebral presenta después hipernatremia y poliuria.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: SIADH, diabetes mellitus tipo uno, hiperaldosteronismo secundario, diabetes insípida central, o polidipsia psicógena. Piénsalo.',
        answer: 'Es la D, diabetes insípida central. Cirugía cerebral más poliuria más sodio alto: se dañó la producción de hormona antidiurética. El distractor es el SIADH, que también aparece en patología del sistema nervioso, pero da exactamente lo contrario: sodio bajo y orina escasa y concentrada. Y la polidipsia psicógena no sube el sodio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 125',
      stem: 'Paciente usuaria de lamotrigina, ácido valproico y litio, presenta diuresis de 12.600 mL/día, deshidratación e hipernatremia.',
      question: '¿Cuál es la causa más probable?',
      options: [
        { letter: 'A', text: 'Ácido valproico' },
        { letter: 'B', text: 'Carbonato de litio (diabetes insípida nefrogénica)' },
        { letter: 'C', text: 'Lamotrigina' },
        { letter: 'D', text: 'Polidipsia psicogénica inducida por antipsicóticos' },
        { letter: 'E', text: 'Hiperglicemia osmótica' },
      ],
      correct: 'B',
      explanation: 'Poliuria masiva con deshidratación e hipernatremia en una usuaria de litio: diabetes insípida nefrogénica. La polidipsia psicógena no produce hipernatremia ni deshidratación.',
      say: {
        stem: 'Otra pregunta real, del mismo EUNACOM de enero de dos mil veintitrés. Paciente que usa lamotrigina, ácido valproico y litio, con una diuresis de más de doce litros al día, deshidratación e hipernatremia.',
        question: '¿Cuál es la causa más probable?',
        options: 'Las opciones: ácido valproico, carbonato de litio, lamotrigina, polidipsia psicógena por antipsicóticos, o hiperglicemia. Piénsalo.',
        answer: 'Es la B, el litio, con una diabetes insípida nefrogénica. El distractor tentador es la polidipsia psicógena, porque es un paciente psiquiátrico que orina mucho. Pero fíjate en el sodio: el que toma agua de más tiene el sodio normal o bajo, nunca alto. Poliuria con hipernatremia y deshidratación significa que el riñón está perdiendo agua.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 147',
      stem: "Una paciente de 78 años, con antecedente de hipertensión arterial, en tratamiento con hidroclorotiazida, presenta un cuadro de diarrea y vómitos, seguido de compromiso de conciencia. Al examen físico está en sopor profundo, con PA: 80/50 y frecuencia cardiaca de 120x', regular, con sequedad de mucosas. Se solicitan exámenes de laboratorio que muestran natremia: 156. mEq/L, cloremia: 114 mEq/L, potasemia: 3,1 mEq/L, pH: 7,40, bicarbonato: 14 mmol/L, CO2: 20 mmHg.",
      question: '¿Cuál de los siguientes fluidos se debe administrar en primer lugar?',
      options: [
        { letter: 'A', text: 'Suero glucosado al 5% ev' },
        { letter: 'B', text: 'Suero fisiológico al 0,9% ev' },
        { letter: 'C', text: 'Solución de bicarbonato al 2/3 molar ev' },
        { letter: 'D', text: 'Agua por sonda nasogástrica' },
        { letter: 'E', text: 'Sales de rehidratación oral' },
      ],
      correct: 'B',
      explanation: 'Deshidratación hipertónica con shock (PA 80/50, FC 120, sopor). La prioridad es restaurar la volemia con cristaloide isotónico; el suero glucosado o el agua libre no expanden el intravascular. Una vez estable, se calcula el déficit de agua libre y se corrige lento.',
      say: {
        stem: 'Y una pregunta real que une esta clase con la que viene, del EUNACOM de julio de dos mil dieciséis. Mujer de setenta y ocho años, hipertensa, que toma hidroclorotiazida, con diarrea y vómitos, y luego compromiso de conciencia. Está en sopor profundo, con presión de ochenta sobre cincuenta, frecuencia de ciento veinte y mucosas secas. Su sodio es ciento cincuenta y seis.',
        question: '¿Cuál de los siguientes fluidos se debe administrar en primer lugar?',
        options: 'Las opciones: suero glucosado al cinco por ciento, suero fisiológico, bicarbonato, agua por sonda, o sales de rehidratación oral. Piénsalo.',
        answer: 'Es la B, suero fisiológico. El sodio de ciento cincuenta y seis tienta a dar agua libre, y ese es el distractor: el suero glucosado. Pero esta paciente está en shock, y el suero glucosado se va a las células, no se queda en los vasos. Primero se salva la perfusión con cristaloide isotónico, y cuando esté estable, recién se corrige el agua, lento.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Hipernatremia', tag: 'Falta agua', kind: 'key', items: [
          { t: 'Pensar en quien no accede al agua', d: 'Postrado, intubado, lactante',
            say: 'Cerremos con las reglas de oro. La hipernatremia aparece en quien no puede llegar al agua, o en quien la pierde por una diabetes insípida.' },
          { t: 'Bajar máximo 10 a 12 en 24 h', d: 'Si hay shock: primero suero fisiológico',
            say: 'Se corrige lento, sin bajar más de diez a doce miliequivalentes en veinticuatro horas, y si hay shock, primero suero fisiológico.' },
        ] },
        { title: 'Diabetes insípida', tag: 'La desmopresina decide', kind: 'alert', items: [
          { t: 'Responde a DDAVP: central', d: 'TEC o cirugía cerebral',
            say: 'Si la orina se concentra con desmopresina, es central, y piensa en trauma o cirugía cerebral.' },
          { t: 'No responde: nefrogénica', d: 'Litio: tiazida + amilorida',
            say: 'Si no responde, es nefrogénica, casi siempre por litio, y se trata con tiazida y amilorida. Si te llevas una sola idea de hoy: poliuria con sodio alto es un riñón que pierde agua; poliuria con sodio bajo es alguien que toma de más. En la próxima clase vemos cómo elegir el suero y el diurético correcto. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hipernatremia y poliuria: de la volemia al tipo de diabetes insípida',
    root: N('start', 'Sodio mayor de 145', 'Déficit de agua libre',
      'Paciente con sodio sobre ciento cuarenta y cinco. La primera pregunta no es la causa: es si está estable.',
      ['', N('q', '¿Está en shock?', 'Hipotensión, taquicardia, sopor',
        '¿Hay hipotensión, taquicardia o compromiso de conciencia por hipovolemia?',
        ['SÍ', N('alert', 'Suero fisiológico 0,9% primero', 'Recuperar la volemia',
          'Si está en shock, primero suero fisiológico para recuperar la perfusión. El agua libre viene después.')],
        ['NO', N('q', '¿Hay poliuria hipotónica?', 'Más de 3 L/día, Osm urinaria menor de 300',
          'Si está estable, calcula el déficit de agua libre y repónlo en cuarenta y ocho a setenta y dos horas, sin bajar más de diez a doce en el día. Y busca la causa: ¿orina mucho y diluido?',
          ['NO', N('do', 'Reponer agua libre', 'Sin acceso al agua: postrado, intubado',
            'Si no hay poliuria, es el paciente que no pudo tomar agua. Agua por vía enteral o suero glucosado, lento.')],
          ['SÍ · responde a DDAVP', N('ok', 'DI central', 'Desmopresina',
            'Si la osmolaridad urinaria sube más de cincuenta por ciento con la desmopresina, es diabetes insípida central, y se trata con desmopresina.')],
          ['SÍ · no responde', N('refer', 'DI nefrogénica', 'Suspender litio · tiazida + amilorida',
            'Si la orina sigue diluida, es nefrogénica. Se suspende el litio con psiquiatría y se indica tiazida con amilorida.')])])]),
  },
};
