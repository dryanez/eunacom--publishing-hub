// Clase 8.7 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-07).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-07',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Reconocer la hemólisis, confirmar con el Coombs y separar el anticuerpo caliente del frío',
      say: 'Bienvenidos. En la clase anterior vimos una anemia con LDH y bilirrubina altas pero con reticulocitos bajos. Hoy vemos el caso contrario: una médula sana que produce a toda máquina, pero cuyos glóbulos rojos son destruidos por el propio sistema inmune. Es la anemia hemolítica autoinmune. El examen pregunta tres cosas: reconocer la hemólisis, confirmarla con el test de Coombs, y saber que el anticuerpo caliente responde a corticoides y el frío no.',
    },

    {
      type: 'points',
      kicker: 'Síndrome hemolítico',
      title: 'Los cuatro pilares de la hemólisis',
      cards: [
        { title: 'La médula responde', tag: 'Anemia regenerativa', kind: 'key', items: [
          { t: 'Índice reticulocitario > 2 %', d: 'Médula sana frente a la hipoxia',
            say: 'Partamos por reconocer la hemólisis, porque tiene cuatro pilares. El primero: los reticulocitos. El índice reticulocitario corregido está sobre dos por ciento, porque la médula está sana y responde a la anemia. Esa es la diferencia con la megaloblástica de la clase anterior: allá la médula no podía; aquí, sí puede.' },
        ] },
        { title: 'El glóbulo se rompe', tag: 'Productos de destrucción', kind: 'criteria', items: [
          { t: 'LDH elevada', d: 'Liberada al romperse el glóbulo rojo',
            say: 'El segundo: la LDH sube, porque sale del glóbulo rojo cuando se rompe.' },
          { t: 'Bilirrubina indirecta 2 a 5 mg/dL', d: 'Del catabolismo del grupo hemo',
            say: 'El tercero: la bilirrubina de predominio indirecto, habitualmente entre dos y cinco, que viene de degradar el grupo hemo de todos esos glóbulos destruidos.' },
          { t: 'Haptoglobina < 10 mg/dL', d: 'Se consume al unir hemoglobina libre',
            say: 'Y el cuarto: la haptoglobina colapsa, bajo diez. La haptoglobina es una proteína del hígado que atrapa la hemoglobina libre y se elimina con ella. Si hay mucha hemoglobina que atrapar, la haptoglobina se agota. Es el marcador más sensible de hemólisis.' },
        ] },
        { title: 'Ojo con el VCM', tag: 'Detalle de examen', kind: 'alert', items: [
          { t: 'VCM puede estar algo alto', d: 'Los reticulocitos son células grandes',
            say: 'Y un detalle que confunde en el examen: en la hemólisis el VCM puede subir un poco, porque los reticulocitos son más grandes que el glóbulo rojo maduro. No te lleva a pensar en B doce si los reticulocitos están altos.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Anticuerpos calientes: el bazo se come al glóbulo',
      nodes: [
        { id: 'igg', col: 0, row: 1, k: 'cause', t: 'Autoanticuerpo IgG', s: 'Máxima afinidad a 37 °C' },
        { id: 'ops', col: 1, row: 1, k: 'mech', t: 'Glóbulo rojo opsonizado', s: 'IgG, con o sin C3d' },
        { id: 'bzo', col: 2, row: 1, k: 'mech', t: 'Macrófagos del bazo', s: 'Receptores Fc-gamma' },
        { id: 'esf', col: 3, row: 0, k: 'effect', t: 'Microesferocito', s: 'Pierde membrana, no volumen' },
        { id: 'ext', col: 3, row: 2, k: 'risk', t: 'Hemólisis extravascular', s: 'En el bazo' },
        { id: 'cau', col: 0, row: 3, k: 'cause', t: 'Idiopática o secundaria', s: 'LES, LLC, fármacos' },
      ],
      edges: [
        { from: 'igg', to: 'ops' }, { from: 'ops', to: 'bzo', label: 'pulpa roja' },
        { from: 'bzo', to: 'esf', label: 'muerde membrana' }, { from: 'esf', to: 'ext' },
        { from: 'cau', to: 'igg' },
      ],
      steps: [
        { show: ['igg'], note: '80 a 90 % de las AHAI',
          say: 'Ahora el mecanismo, que se divide según la temperatura a la que funciona el anticuerpo. La forma más frecuente, del ochenta al noventa por ciento, es la de anticuerpos calientes. Es una IgG que se une al glóbulo rojo con máxima afinidad a la temperatura del cuerpo, treinta y siete grados, principalmente contra antígenos del sistema Rh.' },
        { show: ['ops'], note: 'La IgG no rompe el glóbulo en la sangre',
          say: 'La IgG cubre al glóbulo rojo, a veces junto con la fracción C tres d del complemento. Pero fíjate: la IgG sola no rompe el glóbulo dentro del vaso. Solo lo marca.' },
        { show: ['bzo'], note: 'El bazo reconoce la marca',
          say: 'Esa marca la reconocen los macrófagos del bazo, que tienen receptores para la IgG. Cuando el glóbulo pasa por los cordones de la pulpa roja, los macrófagos le arrancan pedazos de membrana.' },
        { show: ['esf'], note: 'Menos superficie, mismo volumen: una esfera',
          say: 'El glóbulo pierde superficie, pero conserva su volumen, así que deja de ser un disco y se transforma en una esfera densa y rígida: el microesferocito. Por eso en el frotis de estos pacientes ves microesferocitos abundantes.' },
        { show: ['ext'], note: 'Destrucción fuera del vaso',
          say: 'Y ese esferocito rígido ya no pasa por el bazo y queda atrapado ahí. Es una hemólisis extravascular, esplénica. Guarda este dato, porque explica por qué la esplenectomía sirve en esta forma.' },
        { show: ['cau'], note: 'Buscar lupus, leucemia linfática crónica y fármacos',
          say: 'Puede ser idiopática, o secundaria. Las causas que tienes que buscar son el lupus eritematoso sistémico, la leucemia linfática crónica y fármacos como la metildopa, la penicilina y las cefalosporinas.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Crioaglutininas: el frío y el complemento',
      nodes: [
        { id: 'igm', col: 0, row: 1, k: 'cause', t: 'Autoanticuerpo IgM', s: 'Se une a 0–4 °C en las acras' },
        { id: 'c1', col: 1, row: 1, k: 'mech', t: 'Fija el complemento', s: 'Activa la vía clásica' },
        { id: 'sal', col: 2, row: 1, k: 'mech', t: 'A 37 °C la IgM se suelta', s: 'Queda el C3b pegado' },
        { id: 'int', col: 3, row: 0, k: 'risk', t: 'Hemólisis intravascular', s: 'Complejo de ataque a membrana' },
        { id: 'hig', col: 3, row: 2, k: 'effect', t: 'Hemólisis en el hígado', s: 'Células de Kupffer' },
        { id: 'cau', col: 0, row: 3, k: 'cause', t: 'Mycoplasma, VEB, linfoma', s: '10 a 15 % de los casos' },
      ],
      edges: [
        { from: 'igm', to: 'c1' }, { from: 'c1', to: 'sal', label: 'recircula' },
        { from: 'sal', to: 'int' }, { from: 'sal', to: 'hig' },
        { from: 'cau', to: 'igm' },
      ],
      steps: [
        { show: ['igm'], note: 'Se une donde la sangre se enfría',
          say: 'La otra forma es la enfermedad por crioaglutininas, del diez al quince por ciento. Aquí el anticuerpo es una IgM, una molécula grande, que se une al glóbulo rojo a temperaturas muy bajas, de cero a cuatro grados. ¿Dónde se enfría la sangre? En las acras: dedos, orejas y nariz.' },
        { show: ['c1'], note: 'La IgM es la gran activadora del complemento',
          say: 'La IgM fija con mucha fuerza el complemento y activa la vía clásica. Ese es el verdadero agresor en esta forma.' },
        { show: ['sal'], note: 'El anticuerpo se va, el complemento se queda',
          say: 'Cuando la sangre vuelve a las vísceras, a treinta y siete grados, la IgM se suelta del glóbulo. Pero el complemento que dejó pegado, el C tres b, se queda. Este detalle explica el resultado del Coombs, que vemos en un momento.' },
        { show: ['int', 'hig'], note: 'Dentro del vaso o en el hígado, no en el bazo',
          say: 'Ese complemento destruye el glóbulo de dos formas: dentro del vaso, por el complejo de ataque a membrana, o en el hígado, por las células de Kupffer. Fíjate que el bazo casi no participa, y por eso la esplenectomía no sirve aquí.' },
        { show: ['cau'], note: 'Asociaciones que se preguntan',
          say: 'Y las asociaciones clásicas: la neumonía por Mycoplasma pneumoniae, la mononucleosis por virus de Epstein-Barr y los linfomas de bajo grado. Si el caso es un paciente con neumonía atípica que se pone ictérico y anémico, piensa en crioaglutininas.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Confirmación',
      title: 'El test de Coombs directo',
      nodes: [
        { id: 'gr', col: 0, row: 1, k: 'start', t: 'Glóbulos rojos del paciente', s: 'Lavados' },
        { id: 'sue', col: 1, row: 1, k: 'mech', t: 'Suero de Coombs', s: 'Anti-IgG y anti-C3d' },
        { id: 'agl', col: 2, row: 1, k: 'q', t: '¿Aglutinan?', s: 'Anticuerpo ya pegado in vivo' },
        { id: 'cal', col: 3, row: 0, k: 'good', t: 'IgG positivo', s: '± C3d: AHAI caliente' },
        { id: 'fri', col: 3, row: 2, k: 'refer', t: 'Solo C3d positivo', s: 'IgG negativo: crioaglutininas' },
      ],
      edges: [
        { from: 'gr', to: 'sue' }, { from: 'sue', to: 'agl' },
        { from: 'agl', to: 'cal', label: 'IgG' }, { from: 'agl', to: 'fri', label: 'solo C3d' },
      ],
      steps: [
        { show: ['gr', 'sue'], note: 'Busca lo que ya está pegado al glóbulo',
          say: 'Con la hemólisis reconocida, ¿cómo confirmas que es autoinmune? Con la prueba de Coombs directa, también llamada prueba de antiglobulina directa. Se toman los glóbulos rojos del paciente, se lavan, y se mezclan con el suero de Coombs, que trae anticuerpos contra la IgG humana y contra el C tres d.' },
        { show: ['agl'], note: 'Si aglutinan, hay anticuerpo fijado in vivo',
          say: 'Si los glóbulos aglutinan, significa que ya venían cubiertos de anticuerpo o de complemento desde el cuerpo del paciente. Eso confirma la anemia hemolítica autoinmune.' },
        { show: ['cal'], note: 'Caliente: IgG, y en la mitad también C3d',
          say: 'En la forma caliente, el Coombs directo es positivo para IgG, y en la mitad de los casos también para C tres d.' },
        { show: ['fri'], note: 'Frío: la IgM ya se soltó a 37 °C',
          say: 'Y en las crioaglutininas, es positivo solo para C tres d, con IgG negativa. ¿Por qué? Porque la IgM ya se soltó a treinta y siete grados, y lo único que queda pegado es el complemento. El mecanismo te dice el resultado del examen.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'Cómo se presenta cada forma',
      cards: [
        { title: 'AHAI caliente', tag: 'Puede ser brusca', kind: 'key', items: [
          { t: 'Astenia, taquicardia, dolor lumbar', d: 'Inicio brusco en la crisis',
            say: 'Veamos la clínica. La forma caliente puede iniciarse de manera brusca, con astenia intensa, taquicardia y dolor lumbar o abdominal.' },
          { t: 'Palidez con ictericia flavínica', d: 'Amarillo pálido, bilirrubina indirecta',
            say: 'El paciente está pálido y amarillo a la vez. Es la ictericia flavínica, un amarillo pálido, propio de la bilirrubina indirecta.' },
          { t: 'Esplenomegalia leve en la mitad', d: 'Congestión del bazo que trabaja',
            say: 'En la mitad de los casos se palpa una esplenomegalia leve a moderada. Tiene lógica: el bazo es donde se destruyen los glóbulos, y está trabajando de más.' },
          { t: 'Orina oscura sin coluria verdadera', d: 'Urobilinógeno; la indirecta no filtra',
            say: 'La orina puede oscurecerse por el exceso de urobilinógeno, pero no hay coluria verdadera, porque la bilirrubina indirecta va unida a la albúmina y no se filtra en el glomérulo.' },
        ] },
        { title: 'Crioaglutininas', tag: 'Síntomas con el frío', kind: 'normal', items: [
          { t: 'Acrocianosis, livedo, Raynaud', d: 'Dedos, orejas, punta de la nariz',
            say: 'En las crioaglutininas, la clave son los síntomas acrales con el frío: acrocianosis dolorosa, livedo reticularis y fenómeno de Raynaud en los dedos, las orejas y la punta de la nariz. Son los glóbulos aglutinándose en la microcirculación fría.' },
        ] },
        { title: 'Síndrome de Evans', tag: 'Se pregunta', kind: 'alert', items: [
          { t: 'AHAI + trombocitopenia inmune', d: 'Hemólisis con púrpura',
            say: 'Y un nombre que se pregunta: el síndrome de Evans. Es la combinación de una anemia hemolítica autoinmune con una trombocitopenia inmune primaria. Hemólisis más púrpura, en una enfermedad autoinmune grave.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Gravedad',
      title: 'Cuánto urge: de ambulatorio a UCI',
      cards: [
        { title: 'Leve a moderada', tag: 'Ambulatorio o sala', kind: 'normal', items: [
          { t: 'Hb 9,5 a 11 g/dL: prednisona 1 mg/kg', d: 'Ácido fólico 5 mg/día, control semanal',
            say: 'Antes de tratar, hay que medir la gravedad. Con hemoglobina entre nueve coma cinco y once, asintomático en reposo, se trata con prednisona oral a un miligramo por kilo, ácido fólico cinco miligramos al día, y control semanal en policlínico.' },
          { t: 'Hb 7,5 a 9,4 g/dL: prednisona 1,5 mg/kg', d: 'Buscar infección o neoplasia gatillante',
            say: 'Con hemoglobina entre siete coma cinco y nueve coma cuatro, con astenia y taquicardia de esfuerzo, se sube a uno coma cinco miligramos por kilo, y se busca una infección o una neoplasia que lo haya gatillado.' },
        ] },
        { title: 'Grave', tag: 'Hospitalizar', kind: 'alert', items: [
          { t: 'Hb < 7, disnea de reposo, dolor torácico', d: 'LDH > 1.500 UI/L',
            say: 'La forma grave tiene hemoglobina bajo siete, disnea de reposo, dolor torácico, o una LDH sobre mil quinientos.' },
          { t: 'Metilprednisolona EV 1 g/día', d: 'Monitoreo en UCI o intermedio',
            say: 'Se hospitaliza de inmediato, con pulsos de metilprednisolona endovenosa de un gramo al día y monitoreo hemodinámico continuo.' },
          { t: 'Riesgo vital: shock, conciencia, isquemia', d: 'Única indicación de transfundir',
            say: 'Y si hay riesgo vital inminente, con shock, compromiso de conciencia o isquemia miocárdica, recién ahí se suma la transfusión, con las precauciones que veremos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Primera línea: corticoides para el caliente, abrigo para el frío',
      cards: [
        { title: 'AHAI caliente', tag: 'Corticoides', kind: 'pharma', items: [
          { t: 'Prednisona 1 a 1,5 mg/kg/día', d: 'Responde el 70 a 80 % en 7 a 14 días',
            say: 'El pilar de la forma caliente es el corticoide: prednisona oral, uno a uno coma cinco miligramos por kilo al día. Frena la producción de anticuerpos y apaga los receptores de los macrófagos del bazo. Responde el setenta a ochenta por ciento de los pacientes, en siete a catorce días.' },
          { t: 'Crisis: metilprednisolona 1 g EV × 3 días', d: 'Si hay descompensación hemodinámica',
            say: 'En la crisis hemolítica con descompensación, se usan pulsos de metilprednisolona endovenosa, un gramo al día por tres días.' },
          { t: 'Descenso muy lento: 3 a 6 meses', d: 'Suspender rápido gatilla recaídas',
            say: 'Cuando la hemoglobina se estabiliza y los reticulocitos bajan, el corticoide se reduce de forma muy lenta, a lo largo de tres a seis meses. Bajarlo rápido gatilla recaídas graves. Y siempre con calcio, vitamina D y protección gástrica.' },
          { t: 'Ácido fólico 5 mg/día', d: 'La médula acelerada consume folato',
            say: 'Además, ácido fólico cinco miligramos al día mientras dure la hemólisis. Conecta con la clase anterior: una médula que trabaja a toda máquina consume folato, y puede caer en una crisis megaloblástica.' },
        ] },
        { title: 'Crioaglutininas', tag: 'No corticoides', kind: 'alert', items: [
          { t: 'No responde a corticoides ni esplenectomía', d: 'La lisis no ocurre en el bazo',
            say: 'La gran diferencia: las crioaglutininas no responden a corticoides ni a esplenectomía. Recuerda el mecanismo: la destrucción ocurre en los vasos y en el hígado, no en el bazo.' },
          { t: 'Evitar el frío; rituximab si es grave', d: 'Mantas y líquidos tibios',
            say: 'El manejo es evitar estrictamente el frío, mantener al paciente temperado con mantas y líquidos tibios, y en los casos graves o refractarios, rituximab.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Segunda línea',
      title: 'Cuando el corticoide no alcanza',
      cards: [
        { title: 'Indicaciones', tag: 'AHAI caliente', kind: 'criteria', items: [
          { t: 'Corticorrefractario', d: 'Sin respuesta a las 3 semanas',
            say: '¿Cuándo se pasa a segunda línea en la forma caliente? Cuando el paciente es corticorrefractario, es decir, no responde a las tres semanas.' },
          { t: 'Corticodependiente', d: 'Recae bajo 15 a 20 mg/día de prednisona',
            say: 'Cuando es corticodependiente, y recae cada vez que la prednisona baja de quince a veinte miligramos al día. O cuando tiene una contraindicación mayor a los esteroides.' },
        ] },
        { title: 'Opciones', tag: 'Especialista', kind: 'pharma', items: [
          { t: 'Rituximab anti-CD20', d: '375 mg/m² semanal por 4 semanas',
            say: 'La primera opción es el rituximab, un anticuerpo monoclonal anti CD veinte que elimina los linfocitos B, en dosis de trescientos setenta y cinco miligramos por metro cuadrado, semanal por cuatro semanas. Por su eficacia y seguridad, ha desplazado a la cirugía.' },
          { t: 'Esplenectomía electiva', d: 'Vacunas 2 semanas antes',
            say: 'La otra es la esplenectomía, que saca el sitio donde se destruyen los glóbulos. Exige vacunar contra neumococo, meningococo y Haemophilus influenzae tipo b, al menos dos semanas antes de la cirugía.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Alerta EUNACOM',
      title: 'El dilema de la transfusión',
      nodes: [
        { id: 'anti', col: 0, row: 1, k: 'cause', t: 'IgG contra antígenos universales', s: 'Sistema Rh' },
        { id: 'cru', col: 1, row: 1, k: 'mech', t: 'Pruebas cruzadas incompatibles', s: 'Con todas las unidades' },
        { id: 'rie', col: 2, row: 0, k: 'trap', t: 'Transfundir por la cifra', s: 'Hemólisis masiva' },
        { id: 'reg', col: 2, row: 2, k: 'q', t: '¿Compromiso vital?', s: 'Shock, ángor, conciencia' },
        { id: 'sol', col: 3, row: 2, k: 'alert', t: 'Unidad menos incompatible', s: 'Lenta, con corticoide EV previo' },
      ],
      edges: [
        { from: 'anti', to: 'cru' }, { from: 'cru', to: 'rie', label: 'error' },
        { from: 'cru', to: 'reg' }, { from: 'reg', to: 'sol', label: 'sí' },
      ],
      steps: [
        { show: ['anti'], note: 'El anticuerpo también ataca al glóbulo del donante',
          say: 'Y ahora la advertencia que más se pregunta. El autoanticuerpo IgG va dirigido contra antígenos que tienen casi todos los glóbulos rojos, del sistema Rh. Eso significa que también va a atacar a los glóbulos del donante.' },
        { show: ['cru'], note: 'No existe una unidad compatible',
          say: 'Por eso, en el banco de sangre, la prueba cruzada sale incompatible con absolutamente todas las unidades. No existe sangre compatible para este paciente.' },
        { show: ['rie'], note: 'Transfundir puede empeorar la hemólisis',
          say: 'Si transfundes solo porque la hemoglobina está baja, arriesgas una hemólisis masiva y empeorar al paciente. Por eso la regla es evitar la transfusión siempre que se pueda.' },
        { show: ['reg', 'sol'], note: 'Solo ante compromiso vital inminente',
          say: 'Solo se transfunde ante compromiso vital inminente: shock refractario, ángor inestable o compromiso de conciencia. Y en ese caso se usa la unidad menos incompatible, infundida lento, bajo monitoreo estrecho y después de haber dado corticoides endovenosos.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol, partiendo de una anemia con signos de hemólisis.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Caliente vs frío: lo que decide cada pregunta',
      head: ['Parámetro', 'AHAI caliente', 'Crioaglutininas'],
      rows: [
        { cells: ['Frecuencia', '80 a 90 %', '10 a 15 %'],
          say: 'Comparemos las dos formas. La caliente es la gran mayoría, ochenta a noventa por ciento; la fría, diez a quince.' },
        { cells: ['Anticuerpo y temperatura', 'IgG a 37 °C', 'IgM a 0–4 °C'],
          say: 'El anticuerpo: IgG a temperatura corporal en la caliente; IgM que se une en el frío en la otra.' },
        { cells: ['Sitio de lisis', 'Extravascular en el bazo', 'Intravascular y en el hígado'],
          say: 'Dónde se destruye el glóbulo: en el bazo en la caliente; en los vasos y en el hígado en la fría.' },
        { cells: ['Frotis', 'Microesferocitos, policromatofilia', 'Glóbulos aglutinados'],
          say: 'El frotis: microesferocitos en la caliente, glóbulos aglutinados en la fría.' },
        { cells: ['Coombs directo', 'IgG positivo (± C3d)', 'Solo C3d positivo'],
          say: 'El Coombs: IgG positivo en la caliente; solo complemento en la fría.' },
        { cells: ['Asociaciones', 'Idiopática, LES, LLC, fármacos', 'Mycoplasma, VEB, linfoma B'],
          say: 'Las asociaciones: lupus, leucemia linfática crónica y fármacos en la caliente; Mycoplasma, Epstein-Barr y linfoma en la fría.' },
        { cells: ['Primera línea', 'Prednisona 1 a 1,5 mg/kg/día', 'Evitar el frío; rituximab. Sin corticoides'],
          say: 'Y el tratamiento: prednisona en la caliente; evitar el frío y rituximab en la fría. La trampa clásica es indicar corticoides o esplenectomía en las crioaglutininas.' },
        { cells: ['Transfusión', 'Solo con riesgo vital', 'Pruebas cruzadas siempre incompatibles'],
          say: 'Y la última trampa, que aplica sobre todo a la caliente: no se transfunde por la cifra. Solo con riesgo vital, porque todas las pruebas cruzadas salen incompatibles.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 31 años con diagnóstico reciente de LES consulta por disnea de reposo, astenia intensa, orinas oscuras e ictericia de 48 horas. PA 100/60 mmHg, FC 115 lpm, lúcida, sin dolor torácico. Palidez intensa, ictericia conjuntival y polo de bazo palpable. Hb 5,8 g/dL, VCM 104 fL, reticulocitos 9,2 %, plaquetas 240.000/µL, bilirrubina indirecta 4,1 mg/dL, LDH 1.340 UI/L, haptoglobina < 5 mg/dL. Frotis: abundantes microesferocitos.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Transfundir 2 unidades de glóbulos rojos de inmediato y luego estudiar' },
        { letter: 'B', text: 'Coombs directo, hospitalizar, metilprednisolona EV 1 g/día y ácido fólico, evitando transfundir' },
        { letter: 'C', text: 'Esplenectomía de urgencia' },
        { letter: 'D', text: 'Mantenerla temperada, evitar el frío e iniciar rituximab' },
        { letter: 'E', text: 'Vitamina B12 IM y ácido fólico oral' },
      ],
      correct: 'B',
      explanation: 'Hemólisis (reticulocitos altos, bilirrubina indirecta, LDH alta, haptoglobina indetectable) con microesferocitos en una paciente con LES: AHAI por anticuerpos calientes, grave (Hb < 7, disnea de reposo). Se confirma con Coombs directo, se hospitaliza con pulsos de metilprednisolona y ácido fólico, y se evita la transfusión mientras no haya shock, ángor ni compromiso de conciencia. La esplenectomía es segunda línea y el manejo del frío corresponde a crioaglutininas.',
      say: {
        stem: 'Vamos con un caso. Mujer de treinta y un años, con lupus recién diagnosticado, que consulta por disnea de reposo, astenia intensa, orinas oscuras e ictericia de dos días. Presión de cien con sesenta, taquicárdica, lúcida y sin dolor torácico. Está muy pálida, ictérica y con el bazo palpable. Hemoglobina cinco coma ocho, reticulocitos de nueve por ciento, bilirrubina indirecta y LDH altas, haptoglobina indetectable, y microesferocitos en el frotis.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: transfundir de inmediato, Coombs y metilprednisolona endovenosa evitando transfundir, esplenectomía de urgencia, evitar el frío con rituximab, o vitamina B doce con ácido fólico. Piénsalo.',
        answer: 'Es la B. Tiene los cuatro pilares de hemólisis, microesferocitos y lupus: es una hemolítica autoinmune caliente, y grave. Se confirma con Coombs, se hospitaliza con metilprednisolona endovenosa y ácido fólico. El distractor tentador es la A, porque la hemoglobina está bajo seis, pero está lúcida, sin shock ni dolor torácico, y todas las pruebas cruzadas saldrán incompatibles. La D es el manejo del anticuerpo frío, y la esplenectomía es segunda línea.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 21',
      stem: 'Un paciente de 29 años presenta ictericia, disnea y compromiso marcado del estado general. Su examen físico solo muestra ictericia de escleras y piel, sin alteraciones relevantes en el examen segmentario. Sus exámenes de laboratorio muestran hemograma con hematocrito: 12%, hemoglobina: 4,1 g/dL, plaquetas: 250.000/mm³, glóbulos blancos 7.800/mm³, VCM: 103 fL y CHCM: 32 pg; en el frotis se observa presencia de microesferocitos. Las pruebas hepáticas muestran GOT: 52 U/L, GPT: 56 U/L, bilirrubina total: 4,1 mg/dL, bilirrubina directa 0,5: mg/dL, GGT: 50 U/L, fosfatasas alcalinas: 211 U/L y LDH: 960 U/L.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hepatitis A' },
        { letter: 'B', text: 'Anemia por déficit de vitamina B12' },
        { letter: 'C', text: 'Hemólisis' },
        { letter: 'D', text: 'Anemia aplásica' },
        { letter: 'E', text: 'Mielodisplasia' },
      ],
      correct: 'C',
      explanation: 'Anemia aguda y grave con bilirrubina de predominio indirecto, LDH alta, transaminasas casi normales y microesferocitos: hemólisis, probablemente autoinmune. El VCM levemente alto se explica por la reticulocitosis. El Coombs directo positivo la confirmaría.',
      say: {
        stem: 'Ahora preguntas reales. La primera, del EUNACOM de diciembre de dos mil veinticinco. Hombre de veintinueve años con ictericia, disnea y compromiso del estado general. Hemoglobina cuatro coma uno, VCM ciento tres, plaquetas y leucocitos normales, y microesferocitos en el frotis. La bilirrubina total es cuatro coma uno, con la directa en cero coma cinco, la LDH está alta y las transaminasas casi normales.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hepatitis A, déficit de vitamina B doce, hemólisis, anemia aplásica, o mielodisplasia. Piénsalo.',
        answer: 'Es la C, hemólisis, probablemente autoinmune. La bilirrubina es casi toda indirecta y las transaminasas están casi normales, así que no es una hepatitis. Y los microesferocitos son la huella del bazo mordiendo la membrana. El distractor tentador es la B doce, por el VCM de ciento tres, pero ese VCM viene de los reticulocitos, y las otras series están normales. El paso siguiente sería el Coombs directo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 52',
      stem: 'Una mujer de 40 años consulta por astenia, asociada a adinamia y disnea de medianos esfuerzos progresivas, desde hace una semana. Al examen físico tiene palidez de piel y mucosas. Se solicita un hemograma que muestra hematocrito: 24%, hemoglobina: 8 mg/dl, VCM elevado; glóbulos blancos: 9.800 por mm3, plaquetas: 160.000 por mm3. El frotis sanguíneo demuestra macrocitosis y policromasia.',
      question: '¿Cuál es el examen más adecuado para confirmar el diagnóstico?',
      options: [
        { letter: 'A', text: 'Prueba de Coombs' },
        { letter: 'B', text: 'Niveles plasmáticos de B12' },
        { letter: 'C', text: 'LDH y bilirrubina directa' },
        { letter: 'D', text: 'Recuento de reticulocitos' },
        { letter: 'E', text: 'Biopsia de médula ósea' },
      ],
      correct: 'A',
      explanation: 'Anemia de instalación en una semana con macrocitosis y policromasia (reticulocitos jóvenes) y resto del hemograma normal: anemia hemolítica, probablemente autoinmune. El examen que confirma el diagnóstico etiológico es la prueba de Coombs directa.',
      say: {
        stem: 'La segunda, del EUNACOM de diciembre de dos mil diecisiete. Mujer de cuarenta años con astenia y disnea progresivas desde hace una semana. Hemoglobina ocho, VCM elevado, leucocitos y plaquetas normales, y en el frotis macrocitosis y policromasia.',
        question: '¿Cuál es el examen más adecuado para confirmar el diagnóstico?',
        options: 'Las opciones: prueba de Coombs, niveles de B doce, LDH y bilirrubina directa, recuento de reticulocitos, o biopsia de médula ósea. Piénsalo.',
        answer: 'Es la A, la prueba de Coombs. La policromasia en el frotis son reticulocitos jóvenes, y una anemia que se instala en una semana con reticulocitos altos es una hemólisis. La que confirma que es autoinmune es el Coombs directo. El distractor tentador es la B doce, por la macrocitosis, pero con leucocitos y plaquetas normales y policromasia, la macrocitosis la ponen los reticulocitos. Los reticulocitos y la LDH apoyan la hemólisis, pero no confirman la causa.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Reconocer', tag: 'Cuatro pilares', kind: 'key', items: [
          { t: 'Reticulocitos altos, LDH alta', d: 'Bilirrubina indirecta alta, haptoglobina baja',
            say: 'Cerremos con las reglas de oro. Hemólisis son cuatro pilares: reticulocitos altos, LDH alta, bilirrubina indirecta alta y haptoglobina colapsada.' },
          { t: 'Coombs directo confirma', d: 'IgG: caliente. Solo C3d: frío',
            say: 'El Coombs directo confirma que es autoinmune: IgG positivo en la caliente, solo complemento en la fría.' },
        ] },
        { title: 'Tratar', tag: 'Según la temperatura', kind: 'pharma', items: [
          { t: 'Caliente: prednisona 1 a 1,5 mg/kg', d: 'Descenso lento; luego rituximab o esplenectomía',
            say: 'La caliente se trata con prednisona, con descenso lento, y en segunda línea rituximab o esplenectomía.' },
          { t: 'Frío: evitar el frío, rituximab', d: 'No responde a corticoides ni esplenectomía',
            say: 'La fría no responde a corticoides ni a esplenectomía: se evita el frío y se usa rituximab.' },
        ] },
        { title: 'No transfundir por la cifra', tag: 'Alerta', kind: 'alert', items: [
          { t: 'Pruebas cruzadas siempre incompatibles', d: 'Solo con riesgo vital, unidad menos incompatible',
            say: 'Y no se transfunde por la cifra: las pruebas cruzadas siempre son incompatibles, y solo se transfunde con riesgo vital.' },
          { t: 'Próxima clase: hemólisis Coombs negativas', d: 'Esferocitosis, G6PD, HPN',
            say: 'En la próxima clase vemos las hemólisis en que el Coombs es negativo, porque el problema está en el propio glóbulo: la esferocitosis hereditaria, el déficit de G seis PD y la hemoglobinuria paroxística nocturna. Si te llevas una sola idea de hoy: hemólisis con Coombs IgG positivo se trata con corticoides, y la sangre no se da por la cifra. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Anemia hemolítica autoinmune: confirmar, clasificar y tratar',
    root: N('start', 'Anemia con signos de hemólisis', 'Reticulocitos, LDH, bilirrubina indirecta, haptoglobina',
      'Tienes una anemia con reticulocitos altos, LDH y bilirrubina indirecta altas, y haptoglobina baja. Es una hemólisis. Ahora hay que saber si es autoinmune.',
      ['', N('q', '¿Coombs directo?', 'Prueba de antiglobulina directa',
        'Pide el Coombs directo. Es el examen que confirma la causa autoinmune.',
        ['Negativo', N('refer', 'Hemólisis no autoinmune', 'Próxima clase',
          'Si es negativo, el problema no es un anticuerpo: piensa en defectos del propio glóbulo, como la esferocitosis hereditaria o el déficit de G seis PD, que vemos en la próxima clase.')],
        ['Solo C3d', N('do', 'Crioaglutininas', 'Evitar el frío; rituximab si es grave',
          'Si es positivo solo para complemento, son crioaglutininas. Busca Mycoplasma, Epstein-Barr o linfoma, evita el frío y usa rituximab si es grave. Nada de corticoides ni esplenectomía.')],
        ['IgG', N('q', '¿Grave o riesgo vital?', 'Hb < 7, disnea de reposo, shock',
          'Si es positivo para IgG, es una hemolítica caliente. La siguiente pregunta es la gravedad.',
          ['No', N('ok', 'Prednisona 1 a 1,5 mg/kg', 'Más ácido fólico; descenso en 3 a 6 meses',
            'Si no es grave, prednisona oral de uno a uno coma cinco miligramos por kilo, ácido fólico, y un descenso muy lento en tres a seis meses. Si no responde en tres semanas o recae al bajar, rituximab o esplenectomía.')],
          ['Grave', N('alert', 'Metilprednisolona EV', 'Hospitalizar; evitar transfundir',
            'Si es grave, se hospitaliza con pulsos de metilprednisolona endovenosa. Solo si hay shock, ángor o compromiso de conciencia, se transfunde la unidad menos incompatible, lento y con monitoreo.')])])]),
  },
};
