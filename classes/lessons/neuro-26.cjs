// Clase 10.26 (Neurología y Geriatría) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/neurologia_extra/c.cjs (neuro-26, tema 10.26, tier 3). Códigos 1.07.3.003, 1.08.3.007 y 1.08.3.008
// según books/data/v3_codemap.json (nivel Conocimiento en diagnóstico, tratamiento y seguimiento).
// Preguntas reales (class_questions.cjs neuro-26 no trae códigos; el banco real tiene una sola pregunta del código 1.07.3.003): Julio 2013 P14
// (vía subcutánea en cuidados paliativos). El enunciado y las alternativas son los del banco real. El comentario del banco dice "mala pregunta"
// porque depende del fármaco, pero coincide con el libro (si no hay vía oral, vía subcutánea, por ejemplo morfina).
// Búsquedas hechas sin otras preguntas pertinentes (morfina, opioide, paliativo, tramadol, sedación, eutanasia, duelo, compresión medular).
// No usada: Diciembre 2024 P18 (compresión medular con cáncer de próstata: estudio con resonancia con gadolinio) sale del tema de
// oncología y urgencias; no se pregunta en la forma paliativa del libro.
// Fotos: gammagrafía de metástasis óseas (Bailey & Love Fig. 75.27b) y resonancia de compresión medular epidural (Harrison Fig. 442-2).
// En movimiento: scenes/neuro_nuevas.html (?v=escalera), gráfico solo código de la escalera analgésica de la OMS con las dosis del libro.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-26',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuidados paliativos, dolor crónico y final de vida: escalera analgésica, morfina bien usada y cómo acompañar',
      say: 'Bienvenido. Cerramos el bloque de geriatría con una clase que se pregunta menos, pero que se maneja todos los días: cuidados paliativos. Aquí no se trata de curar, sino de aliviar. Vamos a ver qué son realmente, cómo se usa la escalera analgésica y la morfina, qué se hace con los síntomas del paciente terminal y cómo se reconoce y acompaña el final de la vida. La idea que lo ordena todo es el dolor total.',
    },

    {
      type: 'points',
      kicker: 'Concepto',
      title: 'Cuidados paliativos: qué son y a quién',
      cards: [
        { title: 'Qué son', tag: 'No es solo cáncer ni solo el final', kind: 'key', items: [
          { t: 'Prevenir y aliviar el sufrimiento', d: 'Sin acelerar ni retrasar la muerte',
            say: 'Los cuidados paliativos buscan prevenir y aliviar el sufrimiento del paciente con una enfermedad grave, avanzada y progresiva, y de su familia, sin acelerar ni retrasar la muerte.' },
          { t: 'Dolor total', d: 'Físico, psicológico, social y espiritual',
            say: 'Integran lo físico, lo psicológico, lo social y lo espiritual, que es el concepto de dolor total. Se brindan junto al tratamiento de la enfermedad, y van pasando a ser el eje principal a medida que esta progresa.' },
          { t: 'Cáncer y no cáncer', d: 'IC, EPOC, ERC, cirrosis, demencia, ELA, fragilidad',
            say: 'Se aplican en el cáncer avanzado, pero también en enfermedades no oncológicas: insuficiencia cardíaca, EPOC, insuficiencia renal, cirrosis, demencia avanzada, enfermedades neurodegenerativas y fragilidad severa. El equipo incluye médico, enfermera, psicólogo, trabajador social, kinesiólogo y apoyo espiritual, con la familia como parte de la unidad de cuidado.' },
        ] },
        { title: 'Marco legal en Chile', tag: 'Derechos del paciente', kind: 'criteria', items: [
          { t: 'GES número 4 y ley 21.375', d: 'Alivio del dolor por cáncer avanzado',
            say: 'En Chile, el GES número cuatro garantiza el alivio del dolor por cáncer avanzado y los cuidados paliativos, y la ley veintiún mil trescientos setenta y cinco los consagra para las personas con enfermedades terminales o graves.' },
          { t: 'Ley 20.584: rechazar un tratamiento', d: 'Información, compañía y asistencia espiritual',
            say: 'La ley veinte mil quinientos ochenta y cuatro reconoce el derecho a ser informado, a rechazar o interrumpir un tratamiento, y a la compañía y la asistencia espiritual.' },
          { t: 'No es eutanasia', d: 'Sí: limitar el esfuerzo y sedación paliativa',
            say: 'La eutanasia y el suicidio asistido no forman parte de los cuidados paliativos. Sí lo son la limitación del esfuerzo terapéutico, que es no iniciar o retirar tratamientos que no benefician, y la sedación paliativa de los síntomas refractarios.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Dolor',
      title: 'Evaluar el dolor y subir la escalera',
      cards: [
        { title: 'Evaluación', tag: 'Antes de recetar', kind: 'criteria', items: [
          { t: 'Escala numérica 0 a 10', d: 'Demencia o afasia: PAINAD',
            say: 'Primero se mide el dolor con una escala numérica de cero a diez. En demencia o afasia se usan escalas de observación, como PAINAD.' },
          { t: 'Nociceptivo o neuropático', d: 'Somático, óseo o visceral · ardor, descarga, alodinia',
            say: 'Después se caracteriza. El dolor nociceptivo puede ser somático, óseo o visceral. El neuropático es ardor, descarga eléctrica o alodinia. Y eso decide qué adyuvante se agrega.' },
        ] },
        { title: 'Escalera de la OMS', tag: 'Tres peldaños', kind: 'pharma', items: [
          { t: '1. No opioides', d: 'Paracetamol, AINE',
            say: 'La escalera analgésica de la Organización Mundial de la Salud tiene tres peldaños. El primero, los no opioides: paracetamol y antiinflamatorios.' },
          { t: '2. Opioides débiles', d: 'Tramadol, codeína ± no opioides',
            say: 'El segundo, los opioides débiles, tramadol o codeína, con o sin no opioides.' },
          { t: '3. Opioides potentes', d: 'Morfina, fentanilo, oxicodona, metadona',
            say: 'Y el tercero, los opioides potentes: morfina, fentanilo, oxicodona o metadona, con o sin no opioides. En todos los peldaños se pueden agregar adyuvantes, y si el dolor es intenso desde el inicio, no hay que subir uno por uno: se parte directo en el peldaño que corresponde.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Morfina',
      title: 'Cómo se usa la morfina oral',
      nodes: [
        { id: 'v', col: 0, row: 1, k: 'start', t: 'Vía oral, la preferida', s: 'Subcutánea si no puede tragar' },
        { id: 'i', col: 1, row: 1, k: 'mech', t: 'Liberación inmediata', s: '5 mg cada 4 h (2,5 mg en frágil)' },
        { id: 'r', col: 2, row: 0, k: 'mech', t: 'Rescates', s: '1/6 de la dosis diaria total' },
        { id: 'a', col: 2, row: 2, k: 'mech', t: 'Ajustar a diario', s: 'Hasta controlar el dolor' },
        { id: 'p', col: 3, row: 1, k: 'good', t: 'Liberación prolongada', s: 'Misma dosis total' },
        { id: 's', col: 4, row: 0, k: 'q', t: 'Subcutánea', s: 'La mitad de la dosis oral' },
        { id: 'f', col: 4, row: 2, k: 'alert', t: 'Falla renal', s: 'Evitar morfina: fentanilo, oxicodona o metadona' },
      ],
      edges: [
        { from: 'v', to: 'i' }, { from: 'i', to: 'r' }, { from: 'i', to: 'a' }, { from: 'a', to: 'p' }, { from: 'r', to: 'p' },
        { from: 'p', to: 's' }, { from: 'p', to: 'f' },
      ],
      steps: [
        { show: ['v', 'i'], note: 'Se parte baja y rápida',
          say: 'Esto es lo que se pregunta del tercer peldaño. La vía oral es la preferida, y se parte con morfina de liberación inmediata, cinco miligramos cada cuatro horas, y dos coma cinco en el anciano o frágil.' },
        { show: ['r', 'a'], note: 'Rescate y titulación',
          say: 'Se agregan dosis de rescate, equivalentes a un sexto de la dosis diaria total, y se ajusta todos los días hasta controlar el dolor.' },
        { show: ['p'], note: 'Cuando está controlado',
          say: 'Cuando el dolor está controlado, se pasa a una forma de liberación prolongada con la misma dosis total. El fentanilo transdérmico se reserva para el dolor estable o para quien no puede usar la vía oral.' },
        { show: ['s', 'f'], note: 'Dos reglas de examen',
          say: 'Y dos reglas de examen. La dosis subcutánea de morfina es la mitad de la oral. Y en insuficiencia renal se evita la morfina, porque se acumulan sus metabolitos, y se prefieren fentanilo, oxicodona o metadona.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Opioides',
      title: 'Efectos adversos: anticiparse',
      cards: [
        { title: 'Siempre', tag: 'Desde el primer día', kind: 'alert', items: [
          { t: 'Laxante regular desde el inicio', d: 'No hay tolerancia al estreñimiento',
            say: 'Todo paciente con opioide recibe un laxante regular desde el inicio. Es la regla más preguntada, porque no se desarrolla tolerancia al estreñimiento.' },
        ] },
        { title: 'Suelen ceder', tag: 'En pocos días', kind: 'normal', items: [
          { t: 'Náuseas y somnolencia', d: 'Haloperidol o metoclopramida',
            say: 'Las náuseas, que se tratan con haloperidol o metoclopramida, y la somnolencia suelen ceder en pocos días.' },
        ] },
        { title: 'Vigilar', tag: 'Menos frecuentes', kind: 'criteria', items: [
          { t: 'Depresión respiratoria', d: 'Rara si se titula · más con dosis altas, ERC, benzodiacepinas',
            say: 'La depresión respiratoria es rara si se titula, y más probable con dosis altas, insuficiencia renal o benzodiacepinas.' },
          { t: 'Neurotoxicidad', d: 'Mioclonías, alucinaciones, delirium: rotar y hidratar',
            say: 'Y la neurotoxicidad, con mioclonías, alucinaciones o delirium, obliga a rotar el opioide y a hidratar. El miedo a la adicción no debe limitar su uso en el dolor oncológico o terminal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Dolor',
      title: 'Adyuvantes según el tipo de dolor',
      cards: [
        { title: 'Neuropático', tag: 'Ardor, descarga, alodinia', kind: 'pharma', items: [
          { t: 'Gabapentina o pregabalina', d: 'Antidepresivos: amitriptilina, nortriptilina, duloxetina',
            say: 'En el dolor neuropático, gabapentina o pregabalina, y antidepresivos: amitriptilina o nortriptilina en dosis bajas, con precaución en el anciano, o duloxetina. La carbamazepina sirve en la neuralgia del trigémino.' },
        ] },
        { title: 'Óseo', tag: 'Metástasis dolorosas', kind: 'alert', items: [
          { t: 'AINE, dexametasona, radioterapia', d: 'Bifosfonatos o denosumab',
            say: 'En el dolor óseo se usan antiinflamatorios, dexametasona, bifosfonatos o denosumab, y sobre todo radioterapia, que es muy eficaz en las metástasis dolorosas. Mira este estudio: son huesos con múltiples zonas de captación, es el esqueleto invadido por un cáncer. Cada zona de esas puede doler.',
            photo: { src: 'biblioteca/09_neurologia/neuro-26/01_gammagrafia-metastasis-oseas__bailey-love_p1414.jpg', label: 'Metástasis óseas múltiples', at: 'Mira este estudio', credit: 'Bailey & Love 27.ª ed., Fig. 75.27b (gammagrafía)' } },
          { t: 'Corticoides en compresión nerviosa', d: 'Y en hipertensión endocraneana',
            say: 'Los corticoides se agregan cuando hay compresión nerviosa o hipertensión endocraneana.' },
        ] },
        { title: 'Dolor crónico no oncológico', tag: 'Multimodal', kind: 'criteria', items: [
          { t: 'Paracetamol, tópicos, ejercicio, TCC', d: 'Sin AINE crónicos en el anciano',
            say: 'En el dolor crónico no oncológico se prefiere un enfoque multimodal: paracetamol, analgésicos tópicos, ejercicio y terapia cognitivo-conductual. Se evitan los antiinflamatorios crónicos en el anciano, y los opioides se reservan para casos seleccionados y con vigilancia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Paciente oncológico terminal',
      title: 'Quién es y qué cambia',
      cards: [
        { title: 'Criterios', tag: 'Cáncer avanzado, progresivo, incurable', kind: 'key', items: [
          { t: 'Sin respuesta a tratamientos específicos', d: 'Pronóstico de meses o menos',
            say: 'Un paciente oncológico terminal tiene un cáncer avanzado, progresivo e incurable, sin respuesta a los tratamientos específicos y con un pronóstico de vida de meses o menos.' },
          { t: 'ECOG 3-4 · Karnofsky ≤ 50 · PPS ≤ 50%', d: 'Estado funcional muy deteriorado',
            say: 'Con un estado funcional muy deteriorado: ECOG tres a cuatro, Karnofsky de cincuenta o menos, o PPS de cincuenta por ciento o menos.' },
        ] },
        { title: 'Qué cambia', tag: 'De curar a acompañar', kind: 'criteria', items: [
          { t: 'Controlar síntomas y acompañar', d: 'Plan acordado con paciente y familia',
            say: 'El objetivo pasa de curar a controlar los síntomas y acompañar, con un plan acordado con el paciente y su familia.' },
          { t: 'Lugar de cuidado y rescates en casa', d: 'A quién llamar en una crisis',
            say: 'Ese plan define el lugar de cuidado, que puede ser el domicilio con apoyo o una unidad de paliativos, los fármacos de rescate que estarán en casa y a quién llamar ante una crisis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Síntomas',
      title: 'Síntomas frecuentes: qué dar',
      cards: [
        { title: 'Respiratorios y digestivos', tag: 'Primera elección', kind: 'pharma', items: [
          { t: 'Disnea: morfina en dosis baja', d: 'O₂ solo si hay hipoxemia · ventilador · benzodiacepina',
            say: 'La disnea se trata con morfina en dosis baja. El oxígeno solo si hay hipoxemia, un ventilador sobre la cara ayuda, y una benzodiacepina si hay ansiedad.' },
          { t: 'Náuseas y vómitos', d: 'Haloperidol, metoclopramida, ondansetrón, dexametasona',
            say: 'Las náuseas y los vómitos, con haloperidol, metoclopramida, ondansetrón o dexametasona.' },
          { t: 'Obstrucción intestinal maligna', d: 'Hioscina, octreotida, dexametasona',
            say: 'La obstrucción intestinal maligna, con hioscina, octreotida y dexametasona. La sonda o la cirugía quedan solo para casos seleccionados.' },
        ] },
        { title: 'Otros', tag: 'Lo que más se ve', kind: 'criteria', items: [
          { t: 'Anorexia-caquexia, estreñimiento', d: 'Delirium y depresión',
            say: 'Se suman la anorexia-caquexia, el estreñimiento, el delirium y la depresión.' },
          { t: 'Derrame pleural o ascitis', d: 'Drenaje paliativo · y hemorragia',
            say: 'El derrame pleural y la ascitis se resuelven con drenaje paliativo. Y la hemorragia es otra complicación frecuente.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Urgencias paliativas',
      title: 'Cuatro urgencias oncológicas',
      cards: [
        { title: 'Metabólica', tag: 'Hipercalcemia maligna', kind: 'alert', items: [
          { t: 'Hidratación y ácido zoledrónico', d: 'Confusión, poliuria, estreñimiento',
            say: 'Primera urgencia: la hipercalcemia maligna. Se trata con hidratación y ácido zoledrónico.' },
        ] },
        { title: 'Neurológica', tag: 'Compresión medular', kind: 'alert', items: [
          { t: 'Dexametasona y radioterapia urgente', d: 'Dolor de espalda y déficit neurológico',
            say: 'Segunda: la compresión medular. Dexametasona y radioterapia urgente. Mira esta resonancia: una masa epidural, que aquí viene de un cáncer de mama, comprime la médula en ese nivel. El dolor de espalda con déficit neurológico en un paciente con cáncer es la señal.',
            photo: { src: 'biblioteca/09_neurologia/neuro-26/02_compresion-medular-rm__harrison_p3489.jpg', label: 'Compresión medular epidural', at: 'Mira esta resonancia', credit: 'Harrison 21.ª ed., Fig. 442-2 (resonancia sagital)' } },
        ] },
        { title: 'Otras dos', tag: 'Dexametasona', kind: 'criteria', items: [
          { t: 'Síndrome de vena cava superior', d: 'Y metástasis cerebrales',
            say: 'Y el síndrome de vena cava superior, y las metástasis cerebrales con hipertensión endocraneana, que se tratan con dexametasona y radioterapia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Final de vida',
      title: 'Los últimos días: reconocer y simplificar',
      cards: [
        { title: 'Signos', tag: 'Se reconoce la agonía', kind: 'alert', items: [
          { t: 'Somnolencia, rechazo de alimentos', d: 'Oliguria, extremidades frías, livideces',
            say: 'Los signos de los últimos días son somnolencia creciente, rechazo de alimentos y líquidos, oliguria, extremidades frías y livideces.' },
          { t: 'Cheyne-Stokes y estertores', d: 'Deterioro de la deglución, a veces delirium',
            say: 'Y también deterioro de la deglución, respiración irregular tipo Cheyne-Stokes, estertores de la agonía y, a veces, delirium terminal.' },
        ] },
        { title: 'Qué se hace', tag: 'Cambiar los objetivos', kind: 'key', items: [
          { t: 'Suspender lo que ya no beneficia', d: 'Exámenes, monitoreo, antihipertensivos, estatinas',
            say: 'Reconocerlos permite cambiar los objetivos. Se suspenden los exámenes, los monitoreos y los fármacos que ya no benefician, como antihipertensivos, estatinas y antibióticos preventivos.' },
          { t: 'Simplificar y vía subcutánea', d: 'Sin hidratación ni nutrición artificial',
            say: 'Se simplifica el esquema y se pasa a la vía subcutánea cuando se pierde la vía oral. La hidratación y la nutrición artificial en la agonía no mejoran la comodidad ni la sobrevida.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Final de vida',
      title: 'Fármacos subcutáneos y sedación paliativa',
      cards: [
        { title: 'Por síntoma', tag: 'Vía subcutánea', kind: 'pharma', items: [
          { t: 'Dolor y disnea: morfina en dosis baja', d: 'Náuseas: haloperidol',
            say: 'Para el dolor y la disnea, morfina en dosis baja. Para las náuseas, haloperidol.' },
          { t: 'Estertores: hioscina o escopolamina', d: 'Cambio de posición · no aspirar secreciones profundas',
            say: 'Para los estertores, butilbromuro de hioscina o escopolamina, y cambio de posición. No se aspiran las secreciones profundas.' },
          { t: 'Agitación terminal: causas reversibles', d: 'Retención urinaria, fecaloma, dolor → haloperidol → midazolam',
            say: 'La agitación o el delirium terminal se estudia primero por causas reversibles: retención urinaria, fecaloma, dolor. Después haloperidol y, si no cede, midazolam.' },
        ] },
        { title: 'Sedación paliativa', tag: 'Síntoma refractario', kind: 'alert', items: [
          { t: 'Midazolam con consentimiento y registro', d: 'Acuerdo de la familia',
            say: 'En un síntoma refractario a todo tratamiento se puede indicar sedación paliativa con midazolam, con consentimiento o acuerdo de la familia y registro en la ficha.' },
          { t: 'La indicación es el síntoma', d: 'No acortar la vida: no es eutanasia',
            say: 'Y la indicación es el síntoma, no acortar la vida. Esa es la diferencia con la eutanasia, y se pregunta.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Comunicación y acompañamiento',
      title: 'Conversar antes de la crisis',
      cards: [
        { title: 'Comunicar', tag: 'SPIKES', kind: 'criteria', items: [
          { t: 'Protocolo SPIKES', d: 'Explorar qué sabe y qué quiere saber',
            say: 'Las malas noticias se comunican con un protocolo, el SPIKES, explorando qué sabe el paciente y qué quiere saber, y evitando la conspiración del silencio entre la familia y el equipo.' },
          { t: 'Objetivos de cuidado en la ficha', d: 'Lugar, reanimación, hospitalización',
            say: 'Los objetivos de cuidado y las preferencias, como el lugar de la muerte, la reanimación y la hospitalización, se conversan antes de la crisis y se dejan en la ficha.' },
        ] },
        { title: 'Acompañar', tag: 'Familia y duelo', kind: 'key', items: [
          { t: 'Apoyo espiritual y psicológico', d: 'Cuidar al cuidador',
            say: 'Se ofrece apoyo espiritual y psicológico, se enseña a la familia qué esperar y se cuida al cuidador, por la sobrecarga y la culpa.' },
          { t: 'Constatar, certificar, seguir el duelo', d: 'Contacto con la familia después',
            say: 'Después de la muerte se constata el fallecimiento, se emite el certificado de defunción y se contacta a la familia para el seguimiento del duelo.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'La escalera analgésica de la OMS',
      images: [
        { src: 'animaciones/neuro-26/A1_escalera_analgesica.mp4', label: 'Escalera analgésica y titulación de morfina', credit: 'Gráfico propio con las dosis del libro' },
      ],
      steps: [
        { note: 'Tres peldaños y una morfina que se titula',
          say: 'Mira la escalera. En el primer peldaño, paracetamol y antiinflamatorios. En el segundo, un opioide débil como tramadol o codeína. Y en el tercero, el opioide potente: morfina de liberación inmediata, cinco miligramos cada cuatro horas, con rescates del sexto de la dosis diaria, que se ajustan cada día. Al lado, la morfina subcutánea vale la mitad de la oral, y siempre un laxante. Si el dolor es intenso desde el inicio, te saltas peldaños.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: del dolor del paciente avanzado a la conducta paliativa.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Dolor y síntomas: primera elección y trampa',
      head: ['Problema', 'Primera elección', 'Precaución o trampa'],
      rows: [
        { cells: ['Dolor leve (1-3)', 'Paracetamol hasta 3 g/día', 'AINE en el anciano: riñón y estómago'],
          say: 'Dolor leve: paracetamol hasta tres gramos al día. Un antiinflamatorio en el anciano obliga a cuidar el riñón y el estómago.' },
        { cells: ['Dolor moderado (4-6)', 'Tramadol o codeína + paracetamol', 'Tramadol: hiponatremia, convulsiones, serotoninérgico'],
          say: 'Dolor moderado: un opioide débil, tramadol o codeína, con paracetamol. El tramadol puede dar hiponatremia, convulsiones y síndrome serotoninérgico.' },
        { cells: ['Dolor intenso (7-10)', 'Morfina oral de liberación inmediata, rescates y titulación', 'Siempre laxante; en ERC evitar morfina'],
          say: 'Dolor intenso: morfina oral de liberación inmediata, con rescates y titulación. Siempre laxante. En insuficiencia renal, se evita la morfina.' },
        { cells: ['Dolor neuropático', 'Gabapentina o pregabalina', 'Dosis bajas en el anciano; carbamazepina en trigémino'],
          say: 'Dolor neuropático: gabapentina o pregabalina, y como alternativa amitriptilina, nortriptilina o duloxetina, en dosis bajas en el anciano.' },
        { cells: ['Dolor óseo', 'AINE + opioide', 'La radioterapia es muy eficaz'],
          say: 'Dolor óseo: antiinflamatorio más opioide, con dexametasona, bifosfonatos y, sobre todo, radioterapia.' },
        { cells: ['Disnea', 'Morfina en dosis baja', 'La refractaria puede requerir sedación'],
          say: 'Disnea: morfina en dosis baja, ventilador, oxígeno solo si hay hipoxemia y benzodiacepina. Si es refractaria, puede requerir sedación paliativa.' },
        { cells: ['Estertores de la agonía', 'Hioscina o escopolamina SC', 'No aspirar secreciones profundas'],
          say: 'Estertores de la agonía: hioscina o escopolamina subcutánea y cambio de posición. No se aspira.' },
        { cells: ['Agitación terminal', 'Causas reversibles + haloperidol', 'Midazolam SC si no cede; la indicación es el síntoma'],
          say: 'Agitación terminal: tratas causas reversibles, haloperidol y, si no cede, midazolam. La indicación es el síntoma, no acortar la vida.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 70 años con cáncer de pulmón metastásico a hueso, sin respuesta a la quimioterapia, ECOG 3. Tiene dolor lumbar intenso (8/10) pese a paracetamol y tramadol, y hace 5 días no defeca. Su función renal es normal.',
      question: '¿Cuál es el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'Morfina oral de liberación inmediata en dosis baja con rescates y titulación diaria, laxante regular y radioterapia de la metástasis ósea' },
        { letter: 'B', text: 'Aumentar el tramadol y agregar un segundo opioide débil' },
        { letter: 'C', text: 'Evitar los opioides por el riesgo de adicción y usar solo AINE' },
        { letter: 'D', text: 'Morfina oral sin laxante, porque el estreñimiento cede en pocos días' },
        { letter: 'E', text: 'Sedación paliativa con midazolam desde el inicio' },
      ],
      correct: 'A',
      explanation: 'Dolor oncológico intenso: se pasa al tercer peldaño con morfina oral de liberación inmediata en dosis baja, con rescates y titulación diaria, y se rota a una forma de liberación prolongada una vez controlado. Se agrega siempre un laxante regular (no hay tolerancia al estreñimiento), un antiemético al inicio y, como adyuvantes, un AINE o dexametasona y la radioterapia para la metástasis ósea dolorosa. Se acuerda el plan de cuidados con el paciente y su familia.',
      say: {
        stem: 'Un hombre de setenta años tiene un cáncer de pulmón metastásico a hueso, sin respuesta a la quimioterapia, con ECOG tres. Tiene un dolor lumbar intenso, de ocho sobre diez, pese a paracetamol y tramadol, y hace cinco días no defeca. Su función renal es normal.',
        question: '¿Cuál es el manejo más adecuado?',
        options: 'Las opciones: morfina oral de liberación inmediata en dosis baja con rescates, laxante y radioterapia; aumentar el tramadol y agregar otro opioide débil; evitar los opioides y usar solo antiinflamatorios; morfina sin laxante; o sedación paliativa desde el inicio. Piénsalo.',
        answer: 'Es la A. Con un dolor intenso que ya no responde al segundo peldaño, subes al tercero: morfina de liberación inmediata en dosis baja, con rescates y titulación diaria, y siempre un laxante regular. Y como es una metástasis ósea, la radioterapia suma. La C tienta por el miedo a la adicción, pero eso no limita el uso en un dolor oncológico terminal. Y la D es el error clásico: el estreñimiento por opioides no cede solo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 14',
      stem: 'Un paciente de 80 años en cuidados paliativos por cáncer de glotis, presenta desde hace un mes tos y regurgitación alimenticia, no ha presentado neumonías aspirativas ni otras complicaciones.',
      question: '¿Cuál es la vía de administración de medicamentos más adecuada para este paciente?',
      options: [
        { letter: 'A', text: 'Rectal' },
        { letter: 'B', text: 'Sublingual' },
        { letter: 'C', text: 'Intramuscular' },
        { letter: 'D', text: 'Endovenosa' },
        { letter: 'E', text: 'Subcutánea' },
      ],
      correct: 'E',
      explanation: 'En general, los pacientes en cuidados paliativos reciben los fármacos por vía oral y, si no es posible, por vía subcutánea (por ejemplo, la morfina subcutánea): la absorción es más constante que por vía rectal o sublingual y es menos dolorosa que la intramuscular.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil trece. Un paciente de ochenta años en cuidados paliativos por un cáncer de glotis tiene desde hace un mes tos y regurgitación de los alimentos, sin neumonías aspirativas ni otras complicaciones.',
        question: '¿Cuál es la vía de administración de medicamentos más adecuada?',
        options: 'Las opciones: rectal; sublingual; intramuscular; endovenosa; o subcutánea. Piénsalo.',
        answer: 'Es la E. En paliativos la vía preferida es la oral, y cuando no se puede, la subcutánea, porque su absorción es más constante que la rectal o la sublingual, y es menos dolorosa que la intramuscular. La D tienta, pero la vía endovenosa es innecesaria e invasiva en este contexto. Recuerda además que la morfina subcutánea vale la mitad de la dosis oral.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: cuidados paliativos',
      cards: [
        { title: 'Dolor', tag: 'Escalera y morfina', kind: 'key', items: [
          { t: 'Paliativos: dolor total, no solo cáncer', d: 'Eutanasia no; limitar el esfuerzo sí',
            say: 'Cerremos con las reglas de oro. Los cuidados paliativos abordan el dolor total, no se limitan al cáncer ni al final, y no son eutanasia. Limitar el esfuerzo terapéutico y rechazar un tratamiento son derechos del paciente.' },
          { t: 'Escalera OMS; morfina oral titulada', d: 'Rescate 1/6 · SC = mitad · laxante siempre',
            say: 'La escalera de la Organización Mundial de la Salud tiene tres peldaños, y la morfina oral se titula con rescates del sexto de la dosis diaria. La subcutánea es la mitad de la oral, y todo opioide lleva laxante regular desde el inicio. En insuficiencia renal, se evita la morfina.' },
        ] },
        { title: 'Síntomas y final de vida', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Neuropático: gabapentinoides; óseo: radioterapia', d: 'Dexametasona en compresión medular',
            say: 'El dolor neuropático se trata con gabapentinoides, antidepresivos o duloxetina, y el óseo con antiinflamatorios, dexametasona y radioterapia, que además es urgente en la compresión medular.' },
          { t: 'Últimos días: simplificar, vía subcutánea', d: 'Hioscina en estertores · midazolam en refractarios',
            say: 'En los últimos días se simplifican los fármacos y se usa la vía subcutánea: hioscina para los estertores, haloperidol para náuseas y agitación, y midazolam solo en los síntomas refractarios. Su finalidad es aliviar el síntoma, no acortar la vida.' },
          { t: 'Hablar antes de la crisis', d: 'SPIKES, objetivos de cuidado, duelo',
            say: 'Y la conversación de objetivos de cuidado se hace antes de la crisis. Si te llevas una sola idea de hoy: en paliativos no preguntas cuánto queda, sino qué le importa al paciente, y alivias el sufrimiento con la dosis justa. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Paciente con enfermedad avanzada y dolor: conducta paliativa',
    root: N('start', 'Paciente con enfermedad avanzada y dolor', 'Medir intensidad y tipo',
      'Un paciente con una enfermedad avanzada, oncológica o no, consulta por dolor. Primero lo mides, con la escala de cero a diez, y lo caracterizas: nociceptivo, óseo o neuropático.',
      ['Leve a moderado', N('do', 'Peldaños 1 y 2', 'Paracetamol; tramadol o codeína',
        'Si el dolor es leve, paracetamol hasta tres gramos al día. Si es moderado, un opioide débil como tramadol o codeína, con paracetamol. Si no controla, subes de peldaño.')],
      ['Intenso, o no controla', N('alert', 'Peldaño 3: morfina oral', 'Liberación inmediata, rescates y titulación; laxante',
        'Si el dolor es intenso desde el inicio o no controla con el segundo peldaño, usas morfina oral de liberación inmediata, cinco miligramos cada cuatro horas, con rescates y titulación diaria, y siempre un laxante regular. Luego pasas a liberación prolongada.',
        ['Falla renal', N('refer', 'Evitar morfina', 'Fentanilo, oxicodona o metadona',
          'Con insuficiencia renal, evitas la morfina, porque se acumulan sus metabolitos, y prefieres fentanilo, oxicodona o metadona.')],
        ['Tipo de dolor', N('q', 'Agregar adyuvante', 'Neuropático u óseo',
          'Y agregas un adyuvante según el tipo de dolor.',
          ['Neuropático', N('do', 'Gabapentinoide o antidepresivo', 'O duloxetina',
            'Si es neuropático, gabapentina o pregabalina, o un antidepresivo en dosis bajas, o duloxetina.')],
          ['Óseo', N('do', 'AINE, dexametasona, radioterapia', 'Bifosfonatos o denosumab',
            'Si es óseo, antiinflamatorio, dexametasona, bifosfonatos o denosumab, y radioterapia, que es muy eficaz en las metástasis dolorosas.')],
        )],
      )],
      ['Últimos días: agonía', N('ok', 'Simplificar y vía subcutánea', 'Hioscina, haloperidol, midazolam si refractario',
        'Si reconoces los signos de los últimos días, suspendes lo que ya no beneficia, pasas a vía subcutánea, tratas los estertores con hioscina, la agitación con haloperidol y, si es refractaria, indicas sedación paliativa con midazolam. Y acompañas a la familia, antes y después, en el duelo.')],
    ),
  },
};
