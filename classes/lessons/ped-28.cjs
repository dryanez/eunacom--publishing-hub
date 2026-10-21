// Clase 18.28 (Pediatría) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/dataset_pediatria_bloque_1.cjs (ped-28). Códigos (v3_topic_codes.json y v3_codemap.json):
// 2.01.1.138 Maltrato infantil, 2.01.3.004 Entrevista y comunicación efectiva, 2.01.3.009 Prevención de conductas de riesgo,
// 2.01.3.012 Psiquiatría de enlace (ver el codemap para los niveles de cada uno).
// Preguntas reales (rq por códigos + class_questions.cjs --search "maltrato|abuso sexual|sacudido|malas noticias|crafft|adherencia"):
// Julio 2015 P150 (lactante con subdural, fracturas costales y equimosis: fondo de ojo). El banco real no tiene preguntas pediátricas de
// entrevista, conductas de riesgo ni psiquiatría de enlace; para esos tres temas se usan los casos del libro con la etiqueta
// "Banco EUNACOM · Caso representativo" y sin fecha (SPIKES, tamizaje CRAFFT, adherencia en diabetes tipo 1).
// No usadas: Agosto 2021 P10 y Diciembre 2018 P35 (trastornos de la personalidad del adulto con abuso sexual en la infancia: psiquiatría),
// Julio 2025 P38 (trastorno disocial: psiquiatría), Julio 2024 P63 y P64 y Diciembre 2025 P120 (responsabilidad médica y comunicación
// con la prensa: salud pública).
// Julio 2015 P150: la explicación del propio banco dice que "en realidad el diagnóstico ya está hecho y lo más urgente es operar el
// hematoma subdural" (pregunta mala); se mantiene la clave D (fondo de ojo), que es la del libro, y la voz aclara que la urgencia
// neuroquirúrgica se resuelve en paralelo.
// Fotos (ya en la biblioteca y nuevas): hemorragias retinianas (Nelson Fig. 670.13), quemaduras por inmersión en calcetín y en guante
// (Fig. 17.2), fractura metafisaria de la tibia en un lactante (Fig. 17.5) y tomografía con hematomas subdurales por traumatismo
// abusivo (Fig. 82.8). Todas son de pie, mano, radiografía, TAC o fondo de ojo; ninguna muestra a un niño desnudo ni genitales.
// En movimiento: scenes/ped_nuevas.html (?v=maltrato), gráfico solo código (ventanas de tiempo de la denuncia y las profilaxis).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-28',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Maltrato infantil, entrevista, conductas de riesgo del adolescente y psiquiatría de enlace',
      say: 'Bienvenido. Esta clase junta lo que el examen llama habilidades psicosociales de la pediatría. Parte por el maltrato infantil, donde reconocer a tiempo puede salvar una vida, y sigue con cómo entrevistar, cómo dar una mala noticia, cómo prevenir conductas de riesgo en el adolescente y cuándo pedir apoyo de salud mental. Casi todo se resuelve con un orden: proteger, estudiar y comunicar bien.',
    },

    {
      type: 'points',
      kicker: 'Maltrato infantil',
      title: 'Tipos y factores de riesgo',
      cards: [
        { title: 'Tipos', tag: 'No solo golpes', kind: 'key', items: [
          { t: 'Físico, emocional, negligencia', d: 'Abuso sexual; Münchhausen por poderes',
            say: 'El maltrato infantil incluye el maltrato físico, el emocional o psicológico, la negligencia, el abuso sexual y el síndrome de Münchhausen por poderes, en que los cuidadores inducen o inventan los síntomas del niño.' },
        ] },
        { title: 'Factores de riesgo', tag: 'Quién está más expuesto', kind: 'criteria', items: [
          { t: 'Menor de 3 años, prematuro, discapacidad', d: 'Mayor vulnerabilidad',
            say: 'Los factores de riesgo del niño son tener menos de tres años, ser prematuro o tener una discapacidad.' },
          { t: 'Cuidadores jóvenes o con consumo', d: 'Violencia intrafamiliar, depresión materna, aislamiento',
            say: 'Y los del entorno: cuidadores jóvenes o con consumo de sustancias, violencia intrafamiliar, depresión materna y aislamiento social.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Sospecha',
      title: 'Cuándo el relato no calza',
      cards: [
        { title: 'En la historia', tag: 'Lo primero que se nota', kind: 'alert', items: [
          { t: 'Relato inconsistente o que cambia', d: 'Entrevistas por separado',
            say: 'Se sospecha ante un relato inconsistente o que cambia entre un cuidador y otro, y por eso conviene entrevistarlos por separado.' },
          { t: 'Lesión incompatible con la etapa del desarrollo', d: 'Lactante que no camina con fractura de fémur',
            say: 'Ante una lesión incompatible con la etapa del desarrollo, como un lactante que no camina con una fractura de fémur.' },
          { t: 'Consulta tardía, múltiples consultas', d: 'Cuidador que no mira al niño',
            say: 'Ante una consulta tardía o múltiples consultas por lesiones, o un cuidador que no mira al niño.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Lesiones sospechosas',
      title: 'Piel y huesos',
      cards: [
        { title: 'Piel', tag: 'Patrón y localización', kind: 'alert', items: [
          { t: 'Equimosis en lactante, cara, oído, cuello, tórax', d: 'Abdomen, nalgas, genitales; marcas con patrón',
            say: 'En la piel, son sospechosas las equimosis en un lactante, o en la cara, el oído, el cuello, el tórax, el abdomen o las nalgas, y las marcas con patrón, de cinturón, de mano o de cuerda.' },
          { t: 'Quemaduras por inmersión: guante y calcetín', d: 'Bordes netos; o de cigarrillo',
            say: 'Y las quemaduras por inmersión, que tienen bordes netos: mira este pie, con una quemadura en calcetín, y esta mano, con una quemadura en guante. Tampoco olvides las de cigarrillo.',
            photos: [
              { src: 'biblioteca/15_pediatria/ped-28/02_quemadura-inmersion-calcetin__nelson_p220.jpg', label: 'Quemadura en calcetín', at: 'mira este pie', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., Fig. 17.2B' },
              { src: 'biblioteca/15_pediatria/ped-28/03_quemadura-inmersion-guante__nelson_p220.jpg', label: 'Quemadura en guante', at: 'esta mano', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., Fig. 17.2C' },
            ] },
        ] },
        { title: 'Huesos', tag: 'Mecanismo de sacudida o torsión', kind: 'key', items: [
          { t: 'Fracturas metafisarias «en esquina»', d: 'Costillas posteriores; múltiples de distinta edad',
            say: 'En los huesos, las fracturas de las costillas posteriores, las metafisarias en esquina y las múltiples en distintas etapas de consolidación. Mira esta radiografía de la pierna de un lactante de tres meses: la fractura está en la metáfisis de la tibia distal, justo bajo la placa de crecimiento.',
            photo: { src: 'biblioteca/15_pediatria/ped-28/04_fractura-metafisaria-tibia__nelson_p221.jpg', label: 'Maltrato infantil: fracturas metafisarias en esquina (A) y fracturas costales posteriores en consolidación (B)', at: 'Mira esta radiografía', credit: 'Herring, Learning Radiology, 4.ª ed., p. 409' } },
          { t: 'Fractura en un lactante que no deambula', d: 'Sospechosa por sí sola',
            say: 'Y toda fractura en un lactante que no deambula es sospechosa por sí sola.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Niño sacudido',
      title: 'Traumatismo craneano abusivo',
      cards: [
        { title: 'Cuadro', tag: 'Menor de 1 año', kind: 'alert', items: [
          { t: 'Irritabilidad, vómitos, letargia, convulsiones', d: 'Hematoma subdural y fracturas costales',
            say: 'El síndrome del niño sacudido, o traumatismo craneano abusivo, se presenta en un menor de un año con irritabilidad, vómitos, letargia o convulsiones, con fracturas costales. Mira esta tomografía de un lactante: los hematomas subdurales se ven a ambos lados del cerebro.',
            photo: { src: 'biblioteca/15_pediatria/ped-28/05_hematoma-subdural-abuso-tac__nelson_p781.jpg', label: 'Hematomas subdurales en TAC', at: 'Mira esta tomografía', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., Fig. 82.8' } },
          { t: 'Hemorragias retinianas', d: 'El fondo de ojo las muestra',
            say: 'El hallazgo característico está en el fondo de ojo: mira estas hemorragias retinianas, múltiples, en varias capas, imposibles de contar.',
            photo: { src: 'biblioteca/15_pediatria/ped-28/01_hemorragias-retinianas__nelson_p5060.jpg', label: 'Hemorragias retinianas', at: 'mira estas hemorragias', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., Fig. 670.13' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio',
      title: 'Qué se pide ante la sospecha',
      cards: [
        { title: 'Examen y exámenes', tag: 'Lo que se pregunta', kind: 'criteria', items: [
          { t: 'Examen completo y fondo de ojo', d: 'Niño desvestido; hemorragias retinianas',
            say: 'El estudio parte con un examen físico completo, con el niño desvestido y con delicadeza, y el fondo de ojo, para buscar hemorragias retinianas.' },
          { t: 'Serie esquelética en menores de 2 años', d: 'TAC o resonancia cerebral',
            say: 'Se pide una serie esquelética en menores de dos años, y una tomografía o una resonancia cerebral.' },
          { t: 'Coagulación y plaquetas', d: 'Osteogénesis imperfecta o raquitismo según el caso',
            say: 'Y estudio de coagulación y plaquetas, para descartar una diátesis hemorrágica, y de osteogénesis imperfecta o raquitismo según el caso.' },
        ] },
        { title: 'Cómo se registra', tag: 'Y en el abuso sexual', kind: 'key', items: [
          { t: 'Relato textual y fotografías', d: 'Registrar lo que dicen',
            say: 'Se registra el relato textual y se fotografían las lesiones.' },
          { t: 'Abuso sexual: lesiones, ITS, embarazo', d: 'No se interroga repetidamente al niño',
            say: 'En el abuso sexual se buscan lesiones genitales o anales, infecciones de transmisión sexual, embarazo y conductas sexualizadas. Y nunca se interroga al niño repetidamente.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Conducta',
      title: 'Proteger, denunciar, derivar',
      cards: [
        { title: 'Siempre', tag: 'Inicial / derivar', kind: 'alert', items: [
          { t: 'Proteger: hospitalizar si hay riesgo', d: 'Informar al asistente social',
            say: 'Primero se protege al niño, hospitalizándolo si hay riesgo inmediato, y se informa al asistente social.' },
          { t: 'Denunciar dentro de 24 horas', d: 'Carabineros, PDI, Fiscalía o tribunales; art. 175 CPP',
            say: 'Segundo, denunciar. El personal de salud tiene obligación legal de denunciar un delito que advierta en el ejercicio de su función, dentro de veinticuatro horas, ante Carabineros, la PDI, la Fiscalía o los tribunales, según el artículo ciento setenta y cinco del Código Procesal Penal.' },
          { t: 'Medida de protección: Tribunal de Familia', d: 'No se confronta al agresor',
            say: 'Además se solicita una medida de protección al Tribunal de Familia. No se confronta al presunto agresor.' },
        ] },
        { title: 'Abuso sexual agudo', tag: 'Ventanas de tiempo', kind: 'pharma', items: [
          { t: 'Servicio Médico Legal', d: 'Derivar según el tiempo',
            say: 'Si el abuso sexual es agudo, se deriva al Servicio Médico Legal.' },
          { t: 'Anticoncepción de emergencia: hasta 120 h', d: 'Profilaxis de ITS y de hepatitis B',
            say: 'Y según el tiempo, se indica anticoncepción de emergencia hasta las ciento veinte horas, profilaxis de infecciones de transmisión sexual y de hepatitis B.' },
          { t: 'Profilaxis post-exposición de VIH: 72 h', d: '',
            say: 'La profilaxis post-exposición de VIH debe empezar dentro de las setenta y dos horas.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Las ventanas de tiempo',
      images: [
        { src: 'animaciones/ped-28/A1_ventanas_maltrato.mp4', label: 'Denuncia y profilaxis: plazos en horas', credit: 'Animación propia' },
      ],
      steps: [
        { note: '24, 72 y 120 horas',
          say: 'Mira los tres relojes. La denuncia obligatoria corre desde que conoces el hecho y vence a las veinticuatro horas. La profilaxis post-exposición de VIH, en abuso sexual agudo, se inicia dentro de setenta y dos horas. Y la anticoncepción de emergencia llega hasta las ciento veinte. Desde el primer minuto, además, se protege al niño, se avisa al asistente social y se pide la medida de protección. Nunca se confronta al presunto agresor.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Lesiones y signos sugerentes de maltrato',
      head: ['Hallazgo', 'Por qué sospechar', 'Estudio', 'Conducta'],
      rows: [
        { cells: ['Equimosis en lactante o en zonas protegidas', 'Zonas protegidas y edad sin deambulación', 'Coagulación y plaquetas', 'Registro, protección y denuncia'],
          say: 'Para ordenarlo. Equimosis en un lactante o en zonas protegidas: improbable el trauma accidental. Estudias coagulación y plaquetas, registras, proteges y denuncias.' },
        { cells: ['Fracturas costales posteriores, metafisarias, múltiples', 'Sacudida, compresión o torsión', 'Serie esquelética < 2 años', 'Hospitalizar y denunciar'],
          say: 'Fracturas costales posteriores, metafisarias y múltiples de distinta edad: serie esquelética en menores de dos años, hospitalizar y denunciar.' },
        { cells: ['Subdural más hemorragias retinianas', 'Niño sacudido', 'Fondo de ojo y TAC o RM', 'UCI o neurocirugía; denuncia'],
          say: 'Hematoma subdural con hemorragias retinianas: niño sacudido, con fondo de ojo y neuroimagen, manejo en cuidados intensivos o neurocirugía, y denuncia.' },
        { cells: ['Quemadura por inmersión o de cigarrillo', 'Contacto forzado, bordes netos', 'Fotografías; valorar cuidadores', 'Hospitalizar y denunciar'],
          say: 'Quemadura por inmersión, en guante o en calcetín, o de cigarrillo: bordes netos, se fotografía, se valora a los cuidadores, y se hospitaliza y denuncia.' },
        { cells: ['Relato inconsistente o consulta tardía', 'Incompatible con la lesión', 'Entrevistas separadas; asistente social', 'Proteger al niño'],
          say: 'Y el relato inconsistente o la consulta tardía: entrevistas por separado, asistente social y protección del niño.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Entrevista clínica',
      title: 'Cómo se entrevista a un niño y su familia',
      cards: [
        { title: 'Los pasos', tag: 'Centrada en el paciente', kind: 'key', items: [
          { t: 'Saludar, ambiente privado, preguntas abiertas', d: 'Luego preguntas específicas',
            say: 'La entrevista centrada en el paciente parte por saludar y presentarse, crear un ambiente privado y sin interrupciones, y usar preguntas abiertas, seguidas de preguntas específicas.' },
          { t: 'Escucha activa, lenguaje simple', d: 'Resumir y confirmar la comprensión',
            say: 'Sigue con escucha activa y empatía, lenguaje simple sin tecnicismos, y termina resumiendo, confirmando la comprensión, pidiendo que repitan lo entendido, y acordando un plan.' },
        ] },
        { title: 'En pediatría', tag: 'El niño también es el paciente', kind: 'criteria', items: [
          { t: 'Hablar directamente al niño', d: 'Juego, dibujo, preguntas simples',
            say: 'En pediatría se habla directamente al niño, según su edad, con juego, dibujo y preguntas simples, y no solo a los padres.' },
          { t: 'Derecho a ser informado: Ley 20.584', d: 'Según su madurez',
            say: 'Se respeta su derecho a ser informado y a participar en las decisiones según su madurez, como establece la ley veinte mil quinientos ochenta y cuatro, de derechos de los pacientes.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Adolescente',
      title: 'Tiempo a solas y HEADSSS',
      cards: [
        { title: 'Confidencialidad', tag: 'Y sus límites', kind: 'alert', items: [
          { t: 'Ofrecer tiempo a solas', d: 'Explicar la confidencialidad',
            say: 'En el adolescente se ofrece un tiempo a solas, y se explica la confidencialidad y sus límites.' },
          { t: 'Se rompe ante riesgo vital, abuso o violencia grave', d: 'Sin juzgar',
            say: 'La confidencialidad se rompe ante un riesgo vital, un abuso o una violencia grave. Se evita juzgar y se refuerzan los factores protectores.' },
        ] },
        { title: 'HEADSSS', tag: 'La guía de exploración', kind: 'criteria', items: [
          { t: 'Hogar, Educación, Actividades, Drogas', d: 'Sexualidad, Suicidio y depresión, Seguridad',
            say: 'La guía HEADSSS ordena la exploración: Hogar, Educación o empleo, Actividades, Drogas, Sexualidad, Suicidio y depresión, y Seguridad.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Malas noticias',
      title: 'Protocolo SPIKES',
      nodes: [
        { id: 's', col: 0, row: 1, k: 'start', t: 'S: lugar', s: 'Privado, sin interrupciones, ambos padres' },
        { id: 'p', col: 1, row: 1, k: 'q', t: 'P: percepción', s: '¿Qué saben y entienden?' },
        { id: 'i', col: 2, row: 1, k: 'q', t: 'I: invitación', s: '¿Cuánto quieren saber?' },
        { id: 'k', col: 3, row: 1, k: 'mech', t: 'K: conocimiento', s: 'De a poco, lenguaje simple' },
        { id: 'e', col: 4, row: 1, k: 'good', t: 'E: emociones', s: 'Reconocer y acoger' },
        { id: 'r', col: 4, row: 3, k: 'refer', t: 'S: estrategia y resumen', s: 'Plan y seguimiento' },
      ],
      edges: [
        { from: 's', to: 'p' }, { from: 'p', to: 'i' }, { from: 'i', to: 'k' }, { from: 'k', to: 'e' }, { from: 'e', to: 'r' },
      ],
      steps: [
        { show: ['s', 'p'], note: 'Preparar y explorar',
          say: 'Para dar una mala noticia usas el protocolo SPIKES. La S es el lugar: privado, sin interrupciones, con los dos padres presentes y tiempo suficiente. La P es la percepción: preguntas qué saben y qué entienden.' },
        { show: ['i', 'k'], note: 'Dosificar la información',
          say: 'La I es la invitación: preguntas cuánta información desean. La K es el conocimiento: entregas la información de a poco, en lenguaje simple y con pausas.' },
        { show: ['e', 'r'], note: 'Emociones y plan',
          say: 'La E son las emociones: las reconoces y las acoges con empatía. Y la última S es la estrategia y el resumen: acuerdas un plan y aseguras el seguimiento. No se informa en un pasillo, no se usan tecnicismos, no se dan cifras de sobrevida si no las piden y no se delega la noticia en un solo padre.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Conductas de riesgo',
      title: 'Prevenir en el adolescente',
      cards: [
        { title: 'Qué hay que buscar', tag: 'Y qué protege', kind: 'criteria', items: [
          { t: 'Alcohol, tabaco, vapeadores, drogas', d: 'Sexo sin protección, violencia, ciberacoso',
            say: 'Las conductas de riesgo del adolescente son el consumo de alcohol, tabaco, vapeadores y drogas, las relaciones sexuales sin protección, la violencia y el acoso, incluido el ciberacoso, la conducta suicida y las autolesiones, la conducción imprudente y los malos hábitos.' },
          { t: 'Protegen: vínculo familiar y escuela', d: 'Actividades extraprogramáticas, habilidades socioemocionales',
            say: 'Los factores protectores son un vínculo familiar sólido, el rendimiento y la pertenencia escolar, las actividades extraprogramáticas y las habilidades socioemocionales. La estrategia en atención primaria es el Control de Salud del Joven Sano, anual, con entrevista confidencial.' },
        ] },
        { title: 'Tamizaje e intervención', tag: 'Lo que se pregunta', kind: 'key', items: [
          { t: 'CRAFFT: 2 o más positivas', d: 'Car, Relax, Alone, Forget, Friends, Trouble',
            say: 'Para el consumo de sustancias se usa el cuestionario CRAFFT. Dos o más respuestas positivas indican un consumo problemático probable.' },
          { t: 'Intervención breve motivacional', d: 'Derivar si es problemático: GES < 20 años',
            say: 'La respuesta es una intervención breve motivacional, ajustada al riesgo y con seguimiento, y derivación a tratamiento si el consumo es problemático, que tiene garantía GES en menores de veinte años.' },
          { t: 'Preguntar directo por el suicidio', d: 'No aumenta el riesgo; PHQ-A para depresión',
            say: 'En salud mental, se tamiza la depresión y se indaga directamente la ideación suicida, porque preguntar no aumenta el riesgo. En sexualidad, consejería sobre condón y anticonceptivos, incluida la de emergencia, con confidencialidad.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Psiquiatría de enlace',
      title: 'Cuándo pedir apoyo de salud mental',
      cards: [
        { title: 'Se solicita ante', tag: 'Niño en atención médica general', kind: 'alert', items: [
          { t: 'Enfermedad crónica con depresión o ansiedad', d: 'Diabetes, cáncer, epilepsia, fibrosis quística',
            say: 'La psiquiatría de enlace es la interconsulta de salud mental para pacientes que están en atención médica general. Se solicita ante trastornos adaptativos, depresión o ansiedad en niños con enfermedades crónicas, como diabetes, cáncer, epilepsia o fibrosis quística.' },
          { t: 'Mala adherencia al tratamiento', d: 'Por ejemplo, omisión de insulina',
            say: 'También ante la mala adherencia al tratamiento, por ejemplo la omisión de insulina, los trastornos de la conducta alimentaria, y los síntomas somáticos sin causa orgánica, como el dolor abdominal funcional, la cefalea o el trastorno conversivo.' },
          { t: 'Intento de suicidio o autolesiones', d: 'Duelo, delirium, efectos de corticoides',
            say: 'Y ante reacciones a la hospitalización, duelo, intento de suicidio o autolesiones, delirium y efectos neuropsiquiátricos de fármacos, como los corticoides.' },
        ] },
        { title: 'Manejo', tag: 'Conjunto con el equipo', kind: 'key', items: [
          { t: 'Evaluación integral, psicoeducación, TCC', d: 'Intervención familiar; fármacos si corresponde',
            say: 'El manejo es conjunto con el equipo tratante: evaluación integral del niño y la familia, psicoeducación, intervención familiar y psicoterapia cognitivo-conductual, y fármacos cuando corresponde.' },
          { t: 'Adolescente con DM1 y cetoacidosis repetida', d: 'Pensar en depresión, TCA o conflicto familiar',
            say: 'La mala adherencia de un adolescente con diabetes tipo uno y cetoacidosis repetida debe hacer pensar en depresión, en un trastorno de la conducta alimentaria, por omisión de insulina para bajar de peso, o en conflictos familiares. Reforzar la educación no basta. Y ante un intento de suicidio se protege al paciente y se pide evaluación psiquiátrica antes del alta.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la sospecha de maltrato a la conducta, y de la entrevista a la interconsulta.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Lactante de 5 meses traído a urgencia por vómitos e irritabilidad de 2 días. La madre de 17 años refiere que «se cayó de la cama». Está poco reactivo, con fontanela tensa y equimosis de distinto color en el tórax y el flanco. La TAC de cerebro muestra un hematoma subdural y la radiografía de tórax, fracturas costales posteriores en distintas etapas de consolidación.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Alta con control en 48 horas, porque el relato de una caída de la cama es plausible' },
        { letter: 'B', text: 'Hospitalizar, solicitar fondo de ojo, serie esquelética y coagulación, avisar al asistente social y denunciar dentro de 24 horas con medida de protección' },
        { letter: 'C', text: 'Solicitar solo exámenes para osteogénesis imperfecta antes de decidir' },
        { letter: 'D', text: 'Confrontar a la madre en la misma consulta para obtener una confesión' },
        { letter: 'E', text: 'Esperar el resultado de los estudios antes de realizar la denuncia' },
      ],
      correct: 'B',
      explanation: 'El cuadro es un traumatismo craneano abusivo (síndrome del niño sacudido) con maltrato crónico: hematoma subdural, fracturas costales posteriores de edades distintas, equimosis de distintas fechas y un relato inconsistente con el desarrollo del lactante. Se hospitaliza, se completa el estudio con fondo de ojo (hemorragias retinianas), serie esquelética y coagulación, se avisa al asistente social y se realiza la denuncia obligatoria dentro de 24 horas, con solicitud de medida de protección. No se confronta al presunto agresor.',
      say: {
        stem: 'Un lactante de cinco meses llega a urgencia por vómitos e irritabilidad de dos días. La madre, de diecisiete años, dice que se cayó de la cama. Está poco reactivo, con la fontanela tensa y equimosis de distinto color en el tórax y el flanco. La tomografía muestra un hematoma subdural, y la radiografía de tórax, fracturas costales posteriores en distintas etapas de consolidación.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: alta con control en cuarenta y ocho horas; hospitalizar, completar el estudio, avisar al asistente social y denunciar dentro de veinticuatro horas; solo estudio de osteogénesis imperfecta; confrontar a la madre; o esperar los estudios antes de denunciar. Piénsalo.',
        answer: 'Es la B. Un subdural, fracturas costales posteriores de edades distintas y equimosis de distintas fechas, con un relato que no calza con el desarrollo, es un traumatismo craneano abusivo. Se protege hospitalizando, se completa el estudio y se denuncia en veinticuatro horas, sin esperar resultados. La C tienta, porque la osteogénesis imperfecta es un diferencial, pero el diagnóstico sospechado ya obliga a proteger. Y no se confronta a la madre.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2015 · Pregunta 150',
      stem: 'Un lactante de 6 meses es traído por la madre, porque presenta epistaxis. La madre, de 17 años, refiere que se cayó de la cama. Al examen está poco reactivo y presenta múltiples equimosis, algunas de color morado y otras de color verde. Además tiene dos fracturas costales posteriores. Su TAC de cerebro muestra un hematoma subdural.',
      question: '¿Qué examen es más adecuado para proseguir con el estudio de este paciente?',
      options: [
        { letter: 'A', text: 'PTH y calcio' },
        { letter: 'B', text: 'Tiempos de coagulación' },
        { letter: 'C', text: 'Exáenes para descartar osteogénesis imperfecta' },
        { letter: 'D', text: 'Fondo de ojo' },
        { letter: 'E', text: 'Ecografía abdominal' },
      ],
      correct: 'D',
      explanation: 'Equimosis de distintas edades, fracturas costales posteriores y hematoma subdural en un lactante, con relato inconsistente, sugieren un traumatismo craneano abusivo; el fondo de ojo busca hemorragias retinianas, hallazgo característico del síndrome del niño sacudido. La coagulación se pide como parte del estudio, pero no orienta el diagnóstico de abuso; la osteogénesis imperfecta es un diferencial. La urgencia neuroquirúrgica del hematoma se resuelve en paralelo.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil quince. Un lactante de seis meses llega por epistaxis. La madre, de diecisiete años, dice que se cayó de la cama. Está poco reactivo y tiene múltiples equimosis, algunas moradas y otras verdes, dos fracturas costales posteriores y un hematoma subdural en la tomografía.',
        question: '¿Qué examen es más adecuado para proseguir el estudio?',
        options: 'Las opciones: PTH y calcio; tiempos de coagulación; estudio de osteogénesis imperfecta; fondo de ojo; o ecografía abdominal. Piénsalo.',
        answer: 'Es la D. Equimosis de distinta edad, fracturas costales posteriores y subdural con un relato inconsistente son un niño sacudido, y el fondo de ojo busca las hemorragias retinianas. La B tienta porque la coagulación se pide, pero no orienta al abuso. Y la urgencia neuroquirúrgica del hematoma se resuelve en paralelo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Usted debe comunicar a los padres de un niño de 5 años que el mielograma confirmó una leucemia linfoblástica aguda.',
      question: '¿Cuál es la forma más adecuada de iniciar esta conversación?',
      options: [
        { letter: 'A', text: 'En el pasillo, para no retrasar la información' },
        { letter: 'B', text: 'Esperar a que los padres pregunten por el resultado' },
        { letter: 'C', text: 'Entregar la información técnica completa con estadísticas de sobrevida desde el inicio' },
        { letter: 'D', text: 'En un lugar privado y sin interrupciones, explorando primero qué saben y qué desean saber' },
        { letter: 'E', text: 'Informar solo al padre para que él se lo comunique a la madre' },
      ],
      correct: 'D',
      explanation: 'El protocolo SPIKES recomienda un lugar privado y sin interrupciones, explorar lo que la familia sabe y quiere saber, dar la información en forma gradual con lenguaje simple, acoger las emociones con empatía y acordar un plan. La noticia no se da en un pasillo, no se espera a que pregunten, no se abruma con cifras y ambos padres tienen derecho a ser informados.',
      say: {
        stem: 'Un caso representativo del banco de preguntas. Debes comunicar a los padres de un niño de cinco años que el mielograma confirmó una leucemia linfoblástica aguda.',
        question: '¿Cuál es la forma más adecuada de iniciar esta conversación?',
        options: 'Las opciones: en el pasillo; esperar a que pregunten; entregar toda la información técnica con estadísticas de sobrevida; en un lugar privado, explorando qué saben y qué desean saber; o informar solo al padre. Piénsalo.',
        answer: 'Es la D. SPIKES parte por un lugar privado y sin interrupciones, y por explorar qué saben y cuánto quieren saber. La C tienta porque suena completa y honesta, pero entregar cifras y datos técnicos de golpe abruma. Y ambos padres tienen derecho a ser informados.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un adolescente de 15 años acude a control de salud. En la entrevista a solas, refiere que consume alcohol los fines de semana con sus amigos. No tiene síntomas.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Informar inmediatamente a los padres' },
        { letter: 'B', text: 'No abordar el tema porque no tiene síntomas' },
        { letter: 'C', text: 'Derivar directamente a un centro de rehabilitación' },
        { letter: 'D', text: 'Realizar tamizaje estructurado de consumo (ej. CRAFFT) e intervención breve motivacional' },
        { letter: 'E', text: 'Solicitar test de drogas en orina sin su consentimiento' },
      ],
      correct: 'D',
      explanation: 'La prevención de conductas de riesgo se basa en la entrevista confidencial (HEADSSS), el tamizaje estructurado de consumo (CRAFFT) y la intervención breve con enfoque motivacional, ajustando el seguimiento al riesgo. Se mantiene la confidencialidad salvo riesgo vital; la ausencia de síntomas no justifica omitir la prevención; derivar a rehabilitación sin evaluar el nivel de consumo es desproporcionado; y un examen de orina sin consentimiento vulnera la confidencialidad y la autonomía.',
      say: {
        stem: 'Un caso representativo del banco de preguntas. Un adolescente de quince años va a control de salud, y en la entrevista a solas cuenta que consume alcohol los fines de semana con sus amigos. No tiene síntomas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: informar de inmediato a los padres; no abordar el tema; derivar a rehabilitación; tamizaje con CRAFFT e intervención breve motivacional; o test de drogas en orina sin su consentimiento. Piénsalo.',
        answer: 'Es la D. Se tamiza con CRAFFT y se hace una intervención breve motivacional, ajustada al riesgo y con seguimiento. La A tienta por la preocupación, pero la confidencialidad se rompe solo ante riesgo vital, abuso o violencia grave. La B es el error contrario: sin síntomas igual se previene.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Una adolescente de 14 años con diabetes mellitus tipo 1 ha tenido tres hospitalizaciones por cetoacidosis en 6 meses. Reconoce que omite dosis de insulina. Refiere ánimo bajo, aislamiento y conflictos familiares desde el diagnóstico.',
      question: 'Además de reforzar la educación en diabetes, ¿cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Aumentar la dosis de insulina basal' },
        { letter: 'B', text: 'Hospitalizar hasta que cumpla 18 años' },
        { letter: 'C', text: 'Indicar que cumpla mejor el tratamiento y control en 3 meses' },
        { letter: 'D', text: 'Cambiar a hipoglicemiantes orales' },
        { letter: 'E', text: 'Solicitar interconsulta a salud mental (psiquiatría de enlace) para evaluación integral' },
      ],
      correct: 'E',
      explanation: 'La mala adherencia en adolescentes con enfermedades crónicas se asocia con frecuencia a depresión, trastornos de la conducta alimentaria (omisión de insulina para bajar de peso) y conflictos familiares. La psiquiatría de enlace permite la evaluación integral y el tratamiento conjunto. El problema no es la dosis sino la omisión; la hospitalización prolongada no es terapéutica; insistir sin evaluar la causa perpetúa el problema; y los hipoglicemiantes orales no reemplazan la insulina en la diabetes tipo 1.',
      say: {
        stem: 'Un caso representativo del banco de preguntas. Una adolescente de catorce años con diabetes tipo uno ha tenido tres hospitalizaciones por cetoacidosis en seis meses. Reconoce que omite dosis de insulina, y cuenta ánimo bajo, aislamiento y conflictos familiares desde el diagnóstico.',
        question: 'Además de reforzar la educación en diabetes, ¿cuál es la conducta más adecuada?',
        options: 'Las opciones: aumentar la insulina basal; hospitalizar hasta los dieciocho años; pedirle que cumpla mejor y controlar en tres meses; cambiar a hipoglicemiantes orales; o interconsulta a salud mental, psiquiatría de enlace. Piénsalo.',
        answer: 'Es la E. Omitir insulina con ánimo bajo y conflictos familiares sugiere depresión, un trastorno de la conducta alimentaria o un problema familiar, y eso lo evalúa la psiquiatría de enlace junto al equipo tratante. La A tienta porque parece lógico subir la dosis, pero el problema es que no se la pone. Y los hipoglicemiantes orales no reemplazan la insulina en la diabetes tipo uno.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: lo psicosocial en pediatría',
      cards: [
        { title: 'Maltrato', tag: 'Proteger y denunciar', kind: 'alert', items: [
          { t: 'Relato que no calza: sospechar', d: 'Subdural + costillas posteriores + equimosis',
            say: 'Cerremos con las reglas de oro. Un relato que no calza con la lesión, o con la etapa del desarrollo, obliga a sospechar maltrato. Subdural, fracturas costales posteriores y equimosis de distintas fechas son un niño sacudido hasta demostrar lo contrario.' },
          { t: 'Fondo de ojo, serie esquelética, coagulación', d: 'Hospitalizar y proteger',
            say: 'Se pide fondo de ojo, serie esquelética en menores de dos años y coagulación, y se hospitaliza para proteger.' },
          { t: 'Denunciar en 24 horas', d: 'Medida de protección; no confrontar',
            say: 'Y la denuncia es obligatoria, dentro de veinticuatro horas, con solicitud de medida de protección al Tribunal de Familia, sin confrontar al presunto agresor.' },
        ] },
        { title: 'Comunicación y salud mental', tag: 'Lo que se pregunta', kind: 'key', items: [
          { t: 'SPIKES: lugar privado, explorar, dosificar', d: 'Ambos padres',
            say: 'Para una mala noticia, SPIKES: lugar privado, explorar lo que saben y quieren saber, información de a poco, y acoger las emociones.' },
          { t: 'Adolescente: a solas, HEADSSS y CRAFFT', d: 'Intervención breve; preguntar por el suicidio',
            say: 'Al adolescente lo entrevistas a solas, con HEADSSS, tamizas el consumo con CRAFFT y haces una intervención breve. Preguntar por el suicidio no aumenta el riesgo.' },
          { t: 'Mala adherencia con ánimo bajo: enlace', d: 'Depresión, TCA, conflicto familiar',
            say: 'Y la mala adherencia en una enfermedad crónica, sobre todo con ánimo bajo, requiere psiquiatría de enlace. Si te llevas una sola idea de hoy: ante una lesión que no calza con la historia, primero se protege al niño y se denuncia dentro de veinticuatro horas. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Sospecha de maltrato y apoyo psicosocial',
    root: N('start', 'Niño con lesión o consulta psicosocial', 'Relato, desarrollo, lesiones, historia',
      'Atiendes a un niño con una lesión, o a un adolescente con una consulta psicosocial. Revisas el relato, la etapa del desarrollo, las lesiones y la historia, y te preguntas: ¿la lesión calza con el relato?',
      ['La lesión no calza con el relato', N('alert', 'Sospecha de maltrato', 'Relato inconsistente, consulta tardía, lesión incompatible',
        'Si la lesión no calza con el relato o con la etapa del desarrollo, sospechas maltrato. Lo primero es proteger al niño.',
        ['Estudio', N('do', 'Fondo de ojo, serie esquelética, coagulación', 'TAC o RM; registrar y fotografiar',
          'Pides fondo de ojo, serie esquelética en menores de dos años, coagulación y neuroimagen, y registras el relato textual y fotografías.')],
        ['Siempre', N('refer', 'Hospitalizar y denunciar en 24 horas', 'Asistente social; medida de protección',
          'Hospitalizas si hay riesgo, avisas al asistente social, denuncias dentro de veinticuatro horas y solicitas la medida de protección al Tribunal de Familia. No confrontas al agresor.')],
        ['Abuso sexual agudo', N('refer', 'SML y profilaxis', 'Anticoncepción 120 h; PEP VIH 72 h',
          'Si es un abuso sexual agudo, derivas al Servicio Médico Legal y, según el tiempo, indicas anticoncepción de emergencia hasta ciento veinte horas, profilaxis de infecciones de transmisión sexual, de hepatitis B, y de VIH dentro de setenta y dos horas.')],
      )],
      ['Mala noticia a la familia', N('ok', 'SPIKES', 'Lugar privado, percepción, invitación, de a poco',
        'Si debes dar una mala noticia, usas SPIKES, en un lugar privado, con ambos padres, explorando qué saben y quieren saber, y acogiendo las emociones.')],
      ['Adolescente en control sano', N('do', 'A solas, HEADSSS y CRAFFT', 'Intervención breve; confidencialidad',
        'Con el adolescente, tiempo a solas, HEADSSS, CRAFFT e intervención breve motivacional, rompiendo la confidencialidad solo ante riesgo vital, abuso o violencia grave.')],
      ['Enfermedad crónica y mala adherencia', N('refer', 'Psiquiatría de enlace', 'Depresión, TCA, conflicto familiar',
        'Si hay mala adherencia en una enfermedad crónica, con ánimo bajo o conflictos, pides interconsulta de psiquiatría de enlace para una evaluación integral.')],
    ),
  },
};
