// Clase 8.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-03',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'La ferropenia no es un diagnóstico final: es una pista que obliga a buscar la pérdida',
      say: 'Bienvenidos. Hoy vemos la anemia ferropénica, la anemia más frecuente del mundo, de Chile y del EUNACOM. En las dos clases anteriores aprendimos a reconocerla: microcítica, arregenerativa y con ferritina baja. Hoy damos el paso que el examen realmente evalúa. Porque el error más grave no es equivocarse en el hierro, sino recetar hierro y no preguntarse por dónde se perdió.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'El cuerpo no sabe eliminar hierro',
      nodes: [
        { id: 'tot', col: 0, row: 1, k: 'start', t: 'Hierro total: 3 a 4 g', s: '65 % en la hemoglobina' },
        { id: 'dep', col: 0, row: 3, k: 'mech', t: 'Depósitos: 25 %', s: 'Ferritina y hemosiderina' },
        { id: 'abs', col: 1, row: 0, k: 'good', t: 'Entra por el duodeno', s: 'Absorción activa por DMT-1' },
        { id: 'exc', col: 1, row: 2, k: 'trap', t: 'No hay excreción activa', s: 'Solo ~1 mg/día por descamación' },
        { id: 'per', col: 2, row: 1, k: 'cause', t: 'Pérdida de sangre', s: 'Menstrual o digestiva' },
        { id: 'mal', col: 2, row: 3, k: 'cause', t: 'Falla de absorción', s: 'Celiaquía, cirugía gástrica' },
        { id: 'fer', col: 3, row: 2, k: 'risk', t: 'Ferropenia', s: 'Se vacían los depósitos' },
      ],
      edges: [
        { from: 'abs', to: 'tot' }, { from: 'tot', to: 'dep' }, { from: 'tot', to: 'exc' },
        { from: 'per', to: 'fer' }, { from: 'mal', to: 'fer' },
      ],
      steps: [
        { show: ['tot', 'dep'], note: 'La mayor parte del hierro está circulando en los glóbulos',
          say: 'Partamos por el balance. Un adulto tiene tres a cuatro gramos de hierro. Cerca de dos tercios está en la hemoglobina, un diez por ciento en la mioglobina y las enzimas, y un cuarto guardado en los depósitos, como ferritina y hemosiderina en los macrófagos del hígado y el bazo.' },
        { show: ['abs'], note: 'La única puerta es el duodeno',
          say: 'El hierro entra por una sola puerta: la absorción activa en el duodeno, con un transportador llamado DMT uno. Guarda este dato, porque cuando esa puerta falla, el hierro oral deja de servir.' },
        { show: ['exc'], note: 'El cuerpo no regula la salida',
          say: 'Y aquí está la clave. El cuerpo no tiene una forma activa de eliminar hierro. Solo pierde cerca de un miligramo al día, por la descamación de la piel y del intestino. Todo el balance depende de lo que entra.' },
        { show: ['per', 'mal'], note: 'Si no hay excreción, la ferropenia es pérdida o mala absorción',
          say: 'Entonces, si el cuerpo no bota hierro por su cuenta, ¿cómo se queda sin él? Solo de dos maneras: porque sangra, o porque no lo absorbe. Una dieta pobre casi nunca basta en el adulto.' },
        { show: ['fer'], note: 'Por eso la ferropenia obliga a buscar la causa',
          say: 'Y esa es la lógica de toda la clase. La ferropenia no es un diagnóstico final: es la consecuencia de una pérdida o de una falla de absorción, y tu trabajo es encontrar cuál.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Etapas',
      title: 'Primero se vacían los depósitos, al final baja la Hb',
      cards: [
        { title: '1. Ferropenia prelatente', tag: 'Depósitos vacíos', kind: 'normal', items: [
          { t: 'Ferritina < 30 ng/mL', d: 'Hb, VCM, ferremia e IST normales',
            say: 'El déficit de hierro avanza en tres etapas, y conviene entenderlas porque explican por qué a veces la ferritina está baja con un hemograma normal. En la primera, la prelatente, se vacían los depósitos: la ferritina cae bajo treinta, pero la hemoglobina y el VCM siguen normales. La médula todavía compensa.' },
        ] },
        { title: '2. Ferropenia latente', tag: 'Falta para fabricar', kind: 'criteria', items: [
          { t: 'Ferremia e IST bajos (< 15 %)', d: 'Transferrina alta, RDW elevado',
            say: 'En la segunda, la latente, ya no alcanza el hierro para fabricar hemo. Caen la ferremia y la saturación bajo quince por ciento, sube la transferrina, y en el frotis aparece anisocitosis, con el RDW alto que vimos en la primera clase. La hemoglobina puede estar normal o en el límite bajo.' },
        ] },
        { title: '3. Anemia ferropénica', tag: 'La Hb claudica', kind: 'alert', items: [
          { t: 'Microcítica e hipocrómica', d: 'Con trombocitosis reactiva',
            say: 'Y en la tercera la síntesis de hemoglobina claudica: aparece la anemia microcítica e hipocrómica. Muchas veces con trombocitosis reactiva, porque la trombopoyetina se estimula en forma cruzada. Plaquetas altas con microcitosis es una combinación que el examen usa para orientarte a ferropenia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Síndrome anémico y signos del hierro',
      cards: [
        { title: 'Síndrome anémico', tag: 'Común a toda anemia', kind: 'normal', items: [
          { t: 'Astenia, adinamia, taquicardia', d: 'Palidez de conjuntivas y pliegues palmares',
            say: 'La clínica tiene dos partes. La primera es el síndrome anémico, común a cualquier anemia: astenia, adinamia, taquicardia y palidez de las conjuntivas y de los pliegues palmares. Es de instalación lenta, y el paciente muchas veces se acostumbra.' },
        ] },
        { title: 'Falta de hierro en los tejidos', tag: 'Propios de la ferropenia', kind: 'key', items: [
          { t: 'Coiloniquia', d: 'Uñas en cuchara',
            say: 'La segunda parte es propia de la ferropenia, porque el hierro no solo sirve para la hemoglobina: también lo necesitan los epitelios. La coiloniquia, las uñas en cuchara, es el signo clásico.' },
          { t: 'Queilitis angular y glositis atrófica', d: 'Lengua lisa y dolorosa, sin papilas',
            say: 'También la queilitis angular, las grietas en las comisuras, y la glositis atrófica: una lengua lisa, dolorosa, que perdió sus papilas.' },
          { t: 'Pica', d: 'Hielo (pagofagia), tierra o almidón',
            say: 'Y la pica, el deseo compulsivo de comer cosas que no son alimento: tierra, almidón, o hielo, que se llama pagofagia. Si un caso te cuenta que la paciente mastica hielo todo el día, piensa en hierro.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Cómo se confirma',
      cards: [
        { title: 'Hemograma y frotis', tag: 'Microcítica hipocrómica', kind: 'criteria', items: [
          { t: 'VCM < 80 fL, HCM < 27 pg', d: 'Microcitosis, poiquilocitosis, dianocitos ocasionales',
            say: 'La confirmación de laboratorio junta lo que ya sabes. En el hemograma, VCM bajo ochenta y HCM bajo veintisiete. En el frotis, microcitosis, glóbulos de formas variadas y algunos dianocitos.' },
        ] },
        { title: 'Perfil de hierro', tag: 'La ferritina decide', kind: 'key', items: [
          { t: 'Ferritina < 30 ng/mL', d: 'Confirma sin médula',
            say: 'Y lo que confirma es el perfil de hierro: una ferritina bajo treinta, sin necesidad de examen de médula.' },
          { t: 'Con inflamación: ferritina < 100 + IST < 15 %', d: 'También confirma',
            say: 'Si el paciente tiene un estado inflamatorio, recuerda la clase anterior: una ferritina bajo cien con una saturación bajo quince por ciento también ratifica el diagnóstico.' },
        ] },
        { title: 'La regla del examen', tag: 'No es el final', kind: 'alert', items: [
          { t: 'La ferropenia es un síntoma', d: 'Exige encontrar el sangrado o la malabsorción',
            say: 'Pero con eso no terminaste. La frase que tienes que llevar al examen es esta: la anemia ferropénica no es un diagnóstico final, es un síntoma que exige encontrar el origen del sangrado o de la malabsorción.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Estudio causal',
      title: '¿Quién es el paciente? Eso decide el estudio',
      nodes: [
        { id: 'fer', col: 0, row: 2, k: 'start', t: 'Ferropenia confirmada', s: 'Ferritina < 30' },
        { id: 'muj', col: 1, row: 0, k: 'q', t: 'Mujer fértil con hipermenorrea', s: 'Sin síntomas digestivos' },
        { id: 'gin', col: 2, row: 0, k: 'good', t: 'Causa ginecológica', s: 'Sin estudio invasivo inmediato' },
        { id: 'hom', col: 1, row: 2, k: 'q', t: 'Hombre o posmenopáusica', s: 'A cualquier edad' },
        { id: 'end', col: 2, row: 2, k: 'alert', t: 'EDA + colonoscopía total', s: 'Obligatorio' },
        { id: 'cau', col: 3, row: 2, k: 'risk', t: 'Cáncer de colon derecho o gástrico', s: 'Angiodisplasias, úlceras, pólipos' },
        { id: 'neg', col: 2, row: 4, k: 'q', t: 'Endoscopías negativas', s: 'Malabsorción o falla del hierro oral' },
        { id: 'cel', col: 3, row: 4, k: 'refer', t: 'Enfermedad celíaca', s: 'Anti-transglutaminasa IgA + biopsia' },
      ],
      edges: [
        { from: 'fer', to: 'muj' }, { from: 'muj', to: 'gin' },
        { from: 'fer', to: 'hom' }, { from: 'hom', to: 'end' }, { from: 'end', to: 'cau', label: 'buscar' },
        { from: 'end', to: 'neg', label: 'sin hallazgos' }, { from: 'neg', to: 'cel' },
      ],
      steps: [
        { show: ['fer'], note: 'La anamnesis elige la ruta',
          say: 'Ahora lo más preguntado del tema: una vez confirmada la ferropenia, ¿a quién estudias y cómo? La respuesta no la da un examen, la da la anamnesis: quién es el paciente.' },
        { show: ['muj', 'gin'], note: 'La menstruación explica la pérdida',
          say: 'Si es una mujer en edad fértil, con una hipermenorrea clara y sin ningún síntoma digestivo, la causa más frecuente es ginecológica. Ahí la pérdida está a la vista, y no necesita un estudio invasivo de rutina inmediato.' },
        { show: ['hom'], note: 'Aquí no hay menstruación que explique la pérdida',
          say: 'Pero si es un hombre, de cualquier edad, o una mujer posmenopáusica, no hay menstruación que explique la pérdida. Y si el cuerpo no bota hierro solo, lo está perdiendo por algún lado, casi siempre por el tubo digestivo, en forma oculta.' },
        { show: ['end'], note: 'Estudio alto y bajo, sin excepción',
          say: 'La conducta es obligada e inapelable: endoscopía digestiva alta y colonoscopía total. Las dos, no una. Y esa es la respuesta correcta aunque el paciente no cuente dolor ni deposiciones oscuras.' },
        { show: ['cau'], note: 'Cáncer hasta demostrar lo contrario',
          say: '¿Qué buscamos? Sobre todo un cáncer: de colon derecho, que sangra en forma silenciosa, o un adenocarcinoma gástrico. También angiodisplasias, úlceras pépticas o pólipos avanzados. En este paciente, la ferropenia es cáncer digestivo hasta demostrar lo contrario.' },
        { show: ['neg', 'cel'], note: 'La otra puerta: el duodeno',
          say: 'Y si las dos endoscopías salen negativas, y el paciente tiene síntomas de malabsorción o no responde al hierro oral, piensa en la otra causa: la puerta de entrada. Hay que descartar enfermedad celíaca, con anticuerpos antitransglutaminasa tisular IgA y biopsia duodenal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hierro oral',
      title: 'Menos dosis, mejor absorción',
      cards: [
        { title: 'Por qué menos es más', tag: 'Hepcidina', kind: 'key', items: [
          { t: 'Cada dosis sube la hepcidina 24–48 h', d: 'Bloquea la absorción de la siguiente',
            say: 'Pasemos al tratamiento. La primera línea es el hierro oral. Antes se daban ciento cincuenta a doscientos miligramos de hierro elemental al día, repartidos. Pero cada dosis de hierro sube la hepcidina durante veinticuatro a cuarenta y ocho horas, y la hepcidina cierra la puerta del duodeno.' },
          { t: 'El hierro no absorbido irrita', d: 'Náuseas, epigastralgia, constipación',
            say: 'Resultado: la segunda dosis casi no se absorbe, y ese hierro libre que queda en el intestino es el que da náuseas, dolor epigástrico, constipación o diarrea. Más dosis no significa más hierro absorbido; significa más efectos adversos.' },
        ] },
        { title: 'Esquema actual', tag: 'Sulfato ferroso', kind: 'pharma', items: [
          { t: '40 a 100 mg de hierro elemental al día', d: '1 comprimido de 200 mg = 40–60 mg elemental',
            say: 'Por eso hoy se recomiendan cuarenta a cien miligramos de hierro elemental al día. En la práctica, un comprimido de sulfato ferroso de doscientos miligramos, que aporta cuarenta a sesenta de hierro elemental.' },
          { t: 'O en días alternos', d: 'Lunes, miércoles y viernes',
            say: 'O la misma dosis en días alternos, lunes, miércoles y viernes, para darle tiempo a la hepcidina de bajar.' },
          { t: 'En ayunas, con vitamina C', d: 'Mantiene el hierro ferroso soluble',
            say: 'Se toma en ayunas, o lejos de las comidas, idealmente con vitamina C o jugo de cítricos, que mantiene el hierro en su forma ferrosa, la que se absorbe.' },
        ] },
        { title: 'Advertencia obligatoria', tag: 'Falsa melena', kind: 'alert', items: [
          { t: 'Tiñe las deposiciones de negro', d: 'Sin el mal olor de la melena',
            say: 'Y una advertencia que siempre hay que dar: el hierro tiñe las deposiciones de color negro. Es una falsa melena, sin el hedor característico. Si no se lo avisas, el paciente llega a la urgencia asustado.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Seguimiento',
      title: 'Cronología de la respuesta al hierro',
      head: ['Tiempo', 'Qué se mira', 'Lo esperado', 'Conducta'],
      rows: [
        { cells: ['48 a 72 horas', 'Estado general', 'Mejoría subjetiva precoz', 'Confirmar tolerancia digestiva'],
          say: 'Una vez que inicias el hierro, la respuesta sigue un calendario que se pregunta. A las cuarenta y ocho a setenta y dos horas, el paciente se siente mejor, porque se reponen las enzimas de los tejidos. Solo confirmas que lo tolera.' },
        { cells: ['5 a 7 días', 'Reticulocitos', 'Pico de reticulocitos', 'Primer marcador objetivo de respuesta'],
          say: 'Entre el quinto y el séptimo día aparece la crisis reticulocitaria: el pico de reticulocitos. Es el primer marcador objetivo de que la médula recibió el hierro. Fíjate cómo conecta con la primera clase: una anemia arregenerativa se vuelve regenerativa al darle el sustrato.' },
        { cells: ['3 a 4 semanas', 'Hemoglobina', 'Sube 1,5 a 2 g/dL', 'Si no sube: adherencia, pérdidas o malabsorción'],
          say: 'A las tres o cuatro semanas, la hemoglobina debería haber subido al menos uno coma cinco a dos gramos. Si no sube, no aumentes la dosis a ciegas: revisa la adherencia, busca pérdidas que continúan o una malabsorción.' },
        { cells: ['2 meses', 'Hemograma', 'Hb y VCM normales', '¡No suspender el hierro!'],
          say: 'Hacia el segundo mes, la hemoglobina y el VCM se normalizan. Y aquí está la trampa: no se suspende el hierro. La hemoglobina está bien, pero los depósitos siguen vacíos.' },
        { cells: ['3 a 6 meses más', 'Ferritina', 'Ferritina > 50–100 ng/mL', 'Recién ahí se suspende'],
          say: 'Hay que seguir tres a seis meses más después de normalizar la hemoglobina, hasta que la ferritina supere cincuenta a cien. Ese es el momento de suspender. Si cortas antes, la anemia vuelve.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Hierro endovenoso',
      title: '¿Cuándo pasar a la vena?',
      cards: [
        { title: 'Indicaciones', tag: 'Cuando el oral no sirve', kind: 'criteria', items: [
          { t: 'Intolerancia grave al hierro oral', d: 'Tras probar días alternos',
            say: 'El hierro endovenoso tiene indicaciones precisas, y todas responden a una misma lógica: la vía oral es ineficaz, dañina o insuficiente. La primera es la intolerancia gástrica grave, después de haber probado el esquema en días alternos.' },
          { t: 'Malabsorción documentada', d: 'Celiaquía, gastrectomía, by-pass, EII activa',
            say: 'La segunda es la malabsorción documentada: enfermedad celíaca activa, gastrectomía, by-pass gástrico, resección ileal amplia, o enfermedad inflamatoria intestinal activa. Si la puerta del duodeno está cerrada o saltada, el hierro oral no llega.' },
          { t: 'ERC 4–5 o hemodiálisis con EPO', d: 'Embarazo ≥ 32 semanas con anemia grave',
            say: 'La tercera, la enfermedad renal crónica en etapas cuatro y cinco o en hemodiálisis, con eritropoyetina. La cuarta, la anemia grave en el tercer trimestre del embarazo, desde las treinta y dos semanas, cuando hay que reponer rápido antes del parto.' },
          { t: 'Pérdidas activas continuas', d: 'Superan lo que el duodeno absorbe',
            say: 'Y la quinta, las pérdidas activas y continuas que superan lo que el duodeno es capaz de absorber.' },
        ] },
        { title: 'Preparados modernos', tag: 'Dosis única', kind: 'pharma', items: [
          { t: 'Carboximaltosa férrica o hierro sacarato', d: '500 a 1.000 mg en 15 a 30 minutos',
            say: 'Los preparados modernos, la carboximaltosa férrica y el hierro sacarato, liberan el hierro lentamente y permiten infundir quinientos a mil miligramos en quince a treinta minutos.' },
          { t: 'Sin el riesgo del hierro dextrano', d: 'Que requería dosis de prueba',
            say: 'Y no tienen el riesgo histórico de anafilaxia del hierro dextrano de alto peso molecular, que exigía una dosis de prueba.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Oral vs endovenoso',
      title: 'Dos vías, dos pacientes distintos',
      head: ['Parámetro', 'Hierro oral (sulfato ferroso)', 'Hierro endovenoso'],
      rows: [
        { cells: ['Indicación', 'Primera línea, ferropenia ambulatoria no complicada', 'Malabsorción, EII, by-pass, intolerancia grave, diálisis, 3er trimestre'],
          say: 'Comparemos las dos vías. El oral es la primera línea en la ferropenia ambulatoria no complicada. El endovenoso queda para las indicaciones que acabamos de ver.' },
        { cells: ['Posología', '200 mg de sulfato ferroso al día o en días alternos', '500 a 1.000 mg en 15–30 minutos, monitorizado'],
          say: 'El oral es un comprimido de doscientos miligramos al día o en días alternos. El endovenoso, quinientos a mil miligramos en una infusión corta, en un ambiente monitorizado.' },
        { cells: ['Ventajas', 'Barato, disponible en APS, fácil', 'Repleción rápida, no depende del duodeno'],
          say: 'El oral es barato, está disponible en toda la atención primaria y es fácil de usar. El endovenoso repone rápido y no depende del transporte duodenal.' },
        { cells: ['Efectos adversos', 'Dispepsia, constipación, diarrea, heces negras', 'Cefalea, rubor, flebitis, hipofosfemia leve transitoria'],
          say: 'El oral da molestias digestivas y deposiciones negras. El endovenoso puede dar cefalea, rubor facial, flebitis local, náuseas pasajeras y una hipofosfemia leve y transitoria.' },
        { cells: ['Duración', 'Hb normal en 1–2 meses + 3 a 6 meses más', 'Dosis total por fórmula de Ganzoni, en 1 a 2 sesiones'],
          say: 'Y la duración: el oral, uno a dos meses para normalizar la hemoglobina y tres a seis meses más para llenar los depósitos. El endovenoso calcula la dosis total con la fórmula de Ganzoni y la pone en una o dos sesiones.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Situaciones especiales',
      title: 'Transfusión y la constipación que engaña',
      cards: [
        { title: 'Transfusión', tag: 'No por un número', kind: 'alert', items: [
          { t: 'La ferropenia se instala lento', d: 'El cuerpo compensa: 2,3-DPG, gasto cardíaco',
            say: 'Dos situaciones especiales. La primera es la transfusión. Como la ferropenia se instala lento, el cuerpo alcanza a compensar: sube el dos tres difosfoglicerato, que ayuda a la hemoglobina a soltar oxígeno, redistribuye el flujo y aumenta el gasto cardíaco. Por eso un paciente puede caminar con una hemoglobina muy baja.' },
          { t: 'Se transfunde por la clínica', d: 'Inestabilidad, disnea CF IV, angina',
            say: 'Entonces la transfusión no se decide por un valor de hemoglobina, sino por la clínica: inestabilidad hemodinámica, hipotensión refractaria, taquicardia severa en reposo, disnea en clase funcional cuatro, o angina en un paciente coronario. Sin eso, se trata con hierro.' },
        ] },
        { title: 'Constipación', tag: 'Ojo en el examen', kind: 'key', items: [
          { t: 'Empezó después del hierro', d: 'Días alternos o laxante osmótico',
            say: 'La segunda es la constipación. Si empezó después del hierro, es un efecto adverso: pasas a días alternos o agregas un laxante osmótico suave, como lactulosa o polietilenglicol.' },
          { t: 'Empezó antes del hierro', d: 'Colonoscopía de inmediato',
            say: 'Pero si el cambio del hábito intestinal venía de antes, constipación progresiva o alternancia con diarrea, jamás lo culpes al hierro. Eso obliga a adelantar la colonoscopía de inmediato, para descartar un cáncer de colon estenosante. Lo que decide es qué fue primero.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos el estudio y el tratamiento en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Hombre o posmenopáusica con ferropenia', 'EDA + colonoscopía total + hierro oral', 'Solo recetar hierro'],
          say: 'Repasemos las trampas. Hombre o mujer posmenopáusica con ferropenia: endoscopía alta, colonoscopía y hierro oral. El error más grave del tema es solo recetar hierro.' },
        { cells: ['Mujer fértil con hipermenorrea, sin síntomas digestivos', 'Hierro oral y manejo ginecológico', 'Endoscopía de rutina inmediata'],
          say: 'Mujer fértil con hipermenorrea y sin síntomas digestivos: hierro y manejo de la causa ginecológica. Aquí el error es el contrario, pedir endoscopías de rutina de entrada.' },
        { cells: ['Endoscopías negativas y falla del hierro oral', 'Anti-transglutaminasa IgA + biopsia duodenal', 'Subir la dosis de hierro oral'],
          say: 'Endoscopías negativas y el hierro oral no funciona: busca celiaquía. Subir la dosis no sirve si la puerta está cerrada.' },
        { cells: ['By-pass gástrico o celiaquía activa', 'Hierro endovenoso', 'Insistir con hierro oral'],
          say: 'By-pass gástrico o celiaquía activa: hierro endovenoso, porque el duodeno está saltado o dañado.' },
        { cells: ['Hb normalizada a los 2 meses', 'Seguir 3 a 6 meses más', 'Suspender el hierro'],
          say: 'Hemoglobina normal a los dos meses: seguir tres a seis meses más. Suspender ahí es quedarse con los depósitos vacíos.' },
        { cells: ['Hb baja, paciente estable', 'Hierro, sin transfusión', 'Transfundir por el número'],
          say: 'Hemoglobina baja en un paciente estable: hierro, sin transfundir. La transfusión la decide la clínica, no el número.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 58 años, fumador ocasional, con 2 meses de disnea de medianos esfuerzos y palpitaciones. Sin dolor abdominal ni deposiciones oscuras. Palidez, FC 96 lpm. Hb 8,1 g/dL, VCM 68 fL, HCM 21 pg, plaquetas 510.000/µL, reticulocitos 0,8 %. Ferritina 8 ng/mL, TIBC 440 µg/dL, saturación 4,5 %. Refiere que hace 4 meses evacua con menor frecuencia.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Transfundir 2 unidades de glóbulos rojos' },
        { letter: 'B', text: 'Sulfato ferroso oral y control de hemograma en 3 meses' },
        { letter: 'C', text: 'Sulfato ferroso oral más laxante osmótico' },
        { letter: 'D', text: 'Sulfato ferroso oral y colonoscopía total más endoscopía digestiva alta prioritarias' },
        { letter: 'E', text: 'Hierro endovenoso y anticuerpos anti-transglutaminasa' },
      ],
      correct: 'D',
      explanation: 'Anemia ferropénica microcítica, arregenerativa, con trombocitosis reactiva en un hombre de 58 años con cambio del hábito intestinal previo: sangrado digestivo por cáncer de colon hasta demostrar lo contrario. Se inicia hierro oral y se piden con prioridad colonoscopía y EDA. Está estable: no requiere transfusión.',
      say: {
        stem: 'Vamos con un caso. Hombre de cincuenta y ocho años, con dos meses de disnea de medianos esfuerzos y palpitaciones. No tiene dolor abdominal ni deposiciones oscuras. Está pálido, con frecuencia cardíaca de noventa y seis. Hemoglobina ocho coma uno, VCM sesenta y ocho, plaquetas quinientas diez mil, reticulocitos bajos. Ferritina ocho, TIBC alta y saturación de cuatro coma cinco por ciento. Y cuenta que desde hace cuatro meses evacua con menos frecuencia.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: transfundir, hierro oral y control en tres meses, hierro oral con laxante, hierro oral más colonoscopía y endoscopía alta prioritarias, o hierro endovenoso con estudio de celiaquía. Piénsalo.',
        answer: 'Es la D. Es una ferropenia clarísima, pero la pregunta es quién es el paciente: un hombre de cincuenta y ocho años. Eso ya obliga a estudiar arriba y abajo. Y el dato final lo empeora: la constipación empezó antes que cualquier hierro, así que no es efecto adverso, es un cáncer de colon hasta demostrar lo contrario. El laxante es la trampa. Y no se transfunde: está estable, sin angina ni hipotensión.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 28',
      stem: 'Un paciente de 64 años presenta dolor abdominal desde hace un mes, asociado a cambio en el hábito intestinal. Su examen físico no aporta mayor información. Se había realizado un hemograma que muestra una anemia microcítica.',
      question: '¿Qué examen se debe solicitar?',
      options: [
        { letter: 'A', text: 'Colonoscopía' },
        { letter: 'B', text: 'Radiografía simple de abdomen y pelvis' },
        { letter: 'C', text: 'Ecografía abdominal' },
        { letter: 'D', text: 'Tomografía axial computarizada de abdomen y pelvis' },
        { letter: 'E', text: 'Test de sangre oculta en deposiciones' },
      ],
      correct: 'A',
      explanation: 'Hombre de 64 años con cambio del hábito intestinal y anemia microcítica: la sospecha es un cáncer de colon, y el examen es la colonoscopía. La sangre oculta no aporta: la anemia ferropénica ya es la evidencia de la pérdida.',
      say: {
        stem: 'Ahora las preguntas reales. La primera es del EUNACOM de diciembre de dos mil diecisiete. Hombre de sesenta y cuatro años con un mes de dolor abdominal y cambio del hábito intestinal. Examen físico sin hallazgos, y un hemograma con anemia microcítica.',
        question: '¿Qué examen se debe solicitar?',
        options: 'Las opciones: colonoscopía, radiografía de abdomen, ecografía abdominal, TAC de abdomen y pelvis, o test de sangre oculta en deposiciones. Piénsalo.',
        answer: 'Es la A, colonoscopía. Hombre mayor, cambio del hábito intestinal y microcitosis: es el mismo paciente del caso que acabamos de ver, y la sospecha es un cáncer de colon. El distractor tentador es la sangre oculta, pero no aporta nada: la anemia microcítica ya te está diciendo que hay pérdida. Lo que falta es encontrar la lesión.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 161',
      stem: 'Una paciente de 65 años, con antecedente de haber sido tratada de una úlcera duodenal hace 20 años, y de un infarto agudo al miocardio hace un año, utilizando aspirina 100 mg al día desde entonces, sufre un esguince de tobillo, por lo que se indica analgesia con diclofenco 100 mg cada 12 horas. En los días siguientes evoluciona con malestar general que va agravándose y se agrega disnea. Al examen físico presenta palidez mucocutánea, FC: 110x’, PA: 110/66 mmHg, examen pulmonar normal y examen cardíaco que solo muestra taquicardia. Se solicita hemograma, que muestra hemoglobina: 7,5 g/dl, hematocrito: 23% VCM: 58 ft, plaquetas: 370.000 por mm3, ferritina: 12 ng/ml. El electrocardiograma muestra una taquicardia sinusal, sin signos actuales de isquemia.',
      question: '¿Cuál es el examen para proseguir el estudio etiológico?',
      options: [
        { letter: 'A', text: 'Prueba de antígeno en deposiciones para Helicobacter pylori' },
        { letter: 'B', text: 'Niveles de vitamina B12' },
        { letter: 'C', text: 'Biopsia de médula ósea' },
        { letter: 'D', text: 'Endoscopía digestiva alta' },
        { letter: 'E', text: 'Test de sangre oculta en deposiciones' },
      ],
      correct: 'D',
      explanation: 'Ferropenia (VCM 58, ferritina 12) en una posmenopáusica con antecedente de úlcera duodenal que usa aspirina y diclofenaco: la sospecha es sangrado péptico. Se estudia con endoscopía digestiva alta, que además permite tratar la lesión.',
      say: {
        stem: 'La segunda, del EUNACOM de diciembre de dos mil veintidós. Mujer de sesenta y cinco años, con una úlcera duodenal tratada hace veinte años y un infarto hace uno, que toma aspirina. Por un esguince le indican diclofenaco, y en los días siguientes aparece malestar progresivo y disnea. Está pálida y taquicárdica. Hemoglobina siete coma cinco, VCM cincuenta y ocho y ferritina doce. El electrocardiograma no muestra isquemia.',
        question: '¿Cuál es el examen para proseguir el estudio etiológico?',
        options: 'Las opciones: antígeno de Helicobacter en deposiciones, vitamina B doce, biopsia de médula, endoscopía digestiva alta, o sangre oculta en deposiciones. Piénsalo.',
        answer: 'Es la D, endoscopía digestiva alta. La ferritina de doce y el VCM de cincuenta y ocho confirman ferropenia, y es una mujer posmenopáusica: hay que buscar el sangrado. Pero aquí la anamnesis ya apunta arriba: antecedente de úlcera, aspirina y un antiinflamatorio. El antígeno de Helicobacter es el distractor tentador, pero no te muestra la lesión que sangra; la endoscopía sí.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Agosto 2021 · Pregunta 111',
      stem: 'Una paciente de 23 años, vegetariana estricta, consulta por diarrea de algunos meses de evolución, asociada a baja de peso. Además, trae exámenes, entre los que destaca anemia microcítica e hipoalbuminemia. Su examen físico no aporta mayor información.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Parasitosis intestinal' },
        { letter: 'B', text: 'Enfermedad celíaca' },
        { letter: 'C', text: 'Colitis ulcerosa' },
        { letter: 'D', text: 'Enfermedad de Cröhn' },
        { letter: 'E', text: 'Enteropatía perdedora de proteínas' },
      ],
      correct: 'B',
      explanation: 'Diarrea crónica, baja de peso, anemia microcítica e hipoalbuminemia: malabsorción. La ferropenia por falla de absorción duodenal sugiere enfermedad celíaca. Ser vegetariana aumenta el riesgo de déficit de B12, que daría macrocitosis, no microcitosis.',
      say: {
        stem: 'La tercera es del EUNACOM de agosto de dos mil veintiuno. Mujer de veintitrés años, vegetariana estricta, con diarrea de meses y baja de peso. En sus exámenes destaca anemia microcítica e hipoalbuminemia.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: parasitosis intestinal, enfermedad celíaca, colitis ulcerosa, enfermedad de Crohn, o enteropatía perdedora de proteínas. Piénsalo.',
        answer: 'Es la B, enfermedad celíaca. Diarrea, baja de peso y albúmina baja hablan de malabsorción, y la microcitosis te dice que no se está absorbiendo el hierro. Recuerda que el hierro entra por el duodeno, que es justo lo que daña la celiaquía. El dato de vegetariana es un distractor: haría pensar en falta de B doce, pero eso daría una anemia macrocítica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 27',
      stem: 'Una paciente de 19 años, con antecedentes de sangrado menstrual abundante desde su menarquia a los 12 años y de una cirugía de by pass gástrico realizado hace un año, consulta por un cuadro de disnea e intolerancia al ejercicio, de 4 meses de evolución, que ha ido en aumento. Se solicitan exámenes, entre los que destaca un hemograma con hemoglobina: 9,1 g/dl, hematocrito 28%, blancos: 6.200 por mm3, plaquetas 300.000 por mm3; ferritina plasmática: 9 ng/ml (VN: 12 – 150 ng/ml) y saturación de transferrina 12%.',
      question: 'La conducta más adecuada es:',
      options: [
        { letter: 'A', text: 'Indicar hierro por vía oral' },
        { letter: 'B', text: 'Administrar hierro por vía endovenosa' },
        { letter: 'C', text: 'Administrar folatos orales' },
        { letter: 'D', text: 'Administrar vitamina B12 por vía intra muscular' },
        { letter: 'E', text: 'Transfundir glóbulos rojos' },
      ],
      correct: 'B',
      explanation: 'Anemia ferropénica (ferritina 9, saturación 12 %) en una paciente con by-pass gástrico: el hierro se absorbe en el duodeno, que el by-pass excluye. La malabsorción documentada es indicación de hierro endovenoso.',
      say: {
        stem: 'La cuarta es del EUNACOM de julio de dos mil veinticuatro. Mujer de diecinueve años, con reglas abundantes desde la menarquia y un by-pass gástrico hace un año, con disnea e intolerancia al ejercicio progresivas. Hemoglobina nueve coma uno, ferritina nueve y saturación de transferrina doce por ciento.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: hierro oral, hierro endovenoso, folatos orales, vitamina B doce intramuscular, o transfusión. Piénsalo.',
        answer: 'Es la B, hierro endovenoso. La ferropenia está confirmada, y en una mujer joven con hipermenorrea tiene una causa clara. El distractor tentador es el hierro oral, porque es la primera línea. Pero esta paciente tiene un by-pass, que salta el duodeno, la única puerta de entrada del hierro. Malabsorción documentada es indicación de hierro endovenoso.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 166',
      stem: 'Una paciente de 28 años se encuentra en su quinto día postparto, tras el cual presentó atonía uterina que se manejó farmacológicamente. En el examen físico, presenta palidez de piel y mucosas, por lo que se solicita hemograma, que muestra hemoglobina: 8.6 g/dL y hematocrito: 25%.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar hierro por vía oral' },
        { letter: 'B', text: 'Administrar hierro por vía endovenosa' },
        { letter: 'C', text: 'Realizar una transfusión de glóbulos rojos' },
        { letter: 'D', text: 'Administrar un uterotónico' },
        { letter: 'E', text: 'Administrar ácido fólico y vitamina B12' },
      ],
      correct: 'A',
      explanation: 'Anemia moderada tras una hemorragia posparto ya controlada, sin inestabilidad: se repone hierro, y la vía oral es la de elección. No hay criterios clínicos de transfusión ni malabsorción que obligue a la vía endovenosa.',
      say: {
        stem: 'Y la última, también de julio de dos mil veinticuatro. Mujer de veintiocho años, en su quinto día posparto, después de una atonía uterina que se manejó con fármacos. Está pálida, con hemoglobina ocho coma seis y hematocrito veinticinco.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: hierro oral, hierro endovenoso, transfusión, un uterotónico, o ácido fólico con vitamina B doce. Piénsalo.',
        answer: 'Es la A, hierro oral. Perdió sangre, y con ella hierro, así que hay que reponerlo. El sangrado ya se controló, y no hay inestabilidad, angina ni disnea de reposo: la transfusión no se decide por el número. Tampoco hay malabsorción ni intolerancia que justifique la vena. Entonces, primera línea: hierro oral.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Estudio', tag: 'Buscar la pérdida', kind: 'alert', items: [
          { t: 'La ferropenia es un síntoma', d: 'Sangrado o malabsorción',
            say: 'Cerremos con las reglas de oro. La ferropenia es un síntoma: el cuerpo no bota hierro, así que o sangra, o no absorbe.' },
          { t: 'Hombre o posmenopáusica: EDA + colonoscopía', d: 'Cáncer digestivo hasta demostrar lo contrario',
            say: 'En el hombre y en la mujer posmenopáusica, endoscopía alta y colonoscopía, siempre. En la mujer fértil con hipermenorrea sin síntomas digestivos, basta la causa ginecológica. Y con endoscopías negativas, busca celiaquía.' },
        ] },
        { title: 'Hierro oral', tag: 'Primera línea', kind: 'pharma', items: [
          { t: '40–100 mg elemental al día o días alternos', d: 'Ayunas, vitamina C, avisar heces negras',
            say: 'El hierro oral va en dosis bajas, diarias o en días alternos, en ayunas con vitamina C, y siempre avisando que las deposiciones se ponen negras.' },
          { t: 'Pico de reticulocitos a los 5–7 días', d: 'Seguir 3 a 6 meses tras normalizar la Hb',
            say: 'Los reticulocitos suben a la semana, la hemoglobina se normaliza en uno a dos meses, y se sigue tres a seis meses más para llenar los depósitos.' },
        ] },
        { title: 'Endovenoso y transfusión', tag: 'Indicaciones precisas', kind: 'key', items: [
          { t: 'EV: malabsorción, intolerancia, ERC, embarazo tardío', d: 'O pérdidas que superan la absorción',
            say: 'El hierro endovenoso se usa cuando el oral no puede funcionar: malabsorción, by-pass, intolerancia grave, diálisis o tercer trimestre.' },
          { t: 'Transfusión por la clínica, no por la Hb', d: 'Constipación previa al hierro: colonoscopía',
            say: 'Se transfunde por la clínica, no por el número. Y la constipación que empezó antes del hierro es un cáncer de colon hasta demostrar lo contrario. Si te llevas una sola idea de hoy: frente a una anemia ferropénica, la pregunta no es solo cuánto hierro dar, sino por dónde se está perdiendo. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Anemia ferropénica: estudio y tratamiento',
    root: N('start', 'Ferropenia confirmada', 'Microcítica + ferritina < 30',
      'Tienes una anemia microcítica con ferritina baja: la ferropenia está confirmada. Ahora hay dos tareas en paralelo, buscar la causa y reponer el hierro.',
      ['', N('q', '¿Quién es el paciente?', 'La anamnesis elige la ruta',
        'La primera pregunta es quién es el paciente, porque eso decide el estudio.',
        ['Mujer fértil con hipermenorrea', N('ok', 'Causa ginecológica', 'Hierro oral, sin endoscopía de rutina',
          'Mujer en edad fértil con hipermenorrea y sin síntomas digestivos: causa ginecológica. Hierro oral y manejo del sangrado, sin endoscopía de rutina inmediata.')],
        ['Hombre o posmenopáusica', N('alert', 'EDA + colonoscopía total', 'Más hierro oral',
          'Hombre de cualquier edad o mujer posmenopáusica: endoscopía digestiva alta y colonoscopía total, obligatorias, mientras se inicia el hierro oral.',
          ['Negativas', N('refer', 'Descartar celiaquía', 'Anti-transglutaminasa IgA + biopsia',
            'Si las dos endoscopías salen negativas y hay malabsorción o falla del hierro oral, descarta enfermedad celíaca con antitransglutaminasa y biopsia duodenal.')])],
        ['Malabsorción o intolerancia grave', N('do', 'Hierro endovenoso', 'Carboximaltosa o sacarato',
          'Si hay malabsorción documentada, by-pass, intolerancia grave, diálisis o embarazo avanzado, se pasa a hierro endovenoso.')],
        ['Inestable o con angina', N('alert', 'Transfusión', 'La decide la clínica',
          'Y si el paciente está inestable, con disnea de reposo o angina, se transfunde. Lo decide la clínica, no el valor de hemoglobina.')])]),
  },
};
