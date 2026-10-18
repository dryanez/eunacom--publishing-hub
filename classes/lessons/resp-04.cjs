// Clase Neumología 1.4 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-04, bloque 1).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-04',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Confirmar con espirometría, clasificar en A, B o E, y saber qué alarga la vida',
      say: 'Bienvenidos. Cerramos el bloque obstructivo con la EPOC estable, un problema GES para personas de quince años y más, y uno de los temas más preguntados del examen. En la clase anterior vimos que en el asma manda el corticoide inhalado; hoy la lógica se invierte: en la EPOC mandan los broncodilatadores de larga acción. El examen pregunta tres cosas: cómo se clasifica, con qué se trata, y cuáles son las únicas medidas que alargan la vida. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'Se sospecha por el tabaco, se confirma con la curva',
      cards: [
        { title: 'Sospecha', tag: 'Exposición + síntomas', kind: 'criteria', items: [
          { t: 'Tabaco > 10–20 paquetes-año', d: 'O exposición a biomasa',
            say: 'Partamos por el diagnóstico. La enfermedad pulmonar obstructiva crónica, la EPOC, se sospecha en todo adulto expuesto al tabaco, habitualmente más de diez a veinte paquetes año, o al humo de biomasa, como la leña.' },
          { t: 'Tos, expectoración y disnea progresiva', d: 'De esfuerzo, crónica',
            say: 'Y que consulta por tos crónica, expectoración y disnea de esfuerzo que va progresando.' },
        ] },
        { title: 'Confirmación', tag: 'Solo espirometría', kind: 'key', items: [
          { t: 'VEF1/CVF < 0,70 post-BD', d: 'Obstrucción que no revierte',
            say: 'Pero la sospecha no basta. El diagnóstico se confirma exclusivamente con la espirometría: relación VEF uno sobre CVF bajo cero coma setenta después del broncodilatador. Es la obstrucción fija de la primera clase. Y en la radiografía de un EPOC avanzado, mira esta imagen: pulmones hiperinsuflados con el diafragma aplanado. Y en este esquema, los tipos de enfisema según la parte del acino que se destruye.',
            photos: [{ src: 'biblioteca/02_neumologia/resp-04/01_epoc_hiperinsuflacion__cxr_p292.jpg', label: 'Hiperinsuflación', at: 'mira esta imagen', credit: 'The Chest X-Ray: A Survival Guide, Fig. 22.2' }, { src: 'biblioteca/02_neumologia/resp-04/01_tipos-de-enfisema__cto-neumo_p43.jpg', label: 'Tipos de enfisema', at: 'Y en este esquema', credit: 'Manual CTO Neumología 14.ª ed., p. 43' }] },
          { t: 'Fumador con espirometría normal', d: 'No es EPOC',
            say: 'La consecuencia se pregunta: un fumador con tos y expectoración, pero con espirometría normal, no tiene EPOC. Puede tener una bronquitis crónica, pero sin obstrucción no hay EPOC.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Bronquitis crónica',
      title: 'Una definición clínica, no espirométrica',
      cards: [
        { title: 'Definición', tag: 'Fenotipo mucoso', kind: 'key', items: [
          { t: 'Tos con expectoración ≥ 3 meses al año', d: 'Por 2 años seguidos, sin otra causa',
            say: 'La bronquitis crónica se define por la clínica: tos con expectoración la mayor parte de los días, por al menos tres meses al año, durante dos años consecutivos, una vez descartadas otras causas como bronquiectasias, tuberculosis o insuficiencia cardíaca.' },
          { t: 'Hipersecreción y daño ciliar', d: 'Casi siempre tabaco o biomasa',
            say: 'El mecanismo es la hipertrofia de las glándulas mucosas, con hipersecreción y daño de los cilios, casi siempre por tabaco o por humo de leña.' },
        ] },
        { title: 'El límite con el EPOC', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Sin obstrucción no hay EPOC', d: 'VEF1/CVF < 0,70 post-broncodilatador',
            say: 'No toda bronquitis crónica es EPOC. La espirometría decide: si la relación VEF uno sobre CVF postbroncodilatador es menor de cero coma setenta, además es EPOC. Si es normal, es bronquitis crónica sin obstrucción.' },
          { t: 'El manejo es el del EPOC', d: 'Cese del tabaco, vacunas, rehabilitación',
            say: 'El tratamiento es el mismo: dejar de fumar, broncodilatadores si hay obstrucción, vacunas y rehabilitación, y las exacerbaciones se manejan según Anthonisen.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación',
      title: 'Dos ejes: la curva y el paciente',
      cards: [
        { title: 'Severidad funcional', tag: 'VEF1 post-BD', kind: 'criteria', items: [
          { t: 'GOLD 1 ≥ 80% · GOLD 2 50–79%', d: 'Del predicho',
            say: 'La EPOC se clasifica en dos ejes. El primero es la espirometría, igual que en la primera clase: con el VEF uno post broncodilatador. GOLD uno, ochenta por ciento o más; GOLD dos, de cincuenta a setenta y nueve.' },
          { t: 'GOLD 3 30–49% · GOLD 4 < 30%', d: 'Describe el pulmón',
            say: 'GOLD tres, de treinta a cuarenta y nueve; y GOLD cuatro, bajo treinta. Este número describe el pulmón, pero no es lo que decide el tratamiento inicial.' },
        ] },
        { title: 'Grupos clínicos', tag: 'Deciden el tratamiento', kind: 'key', items: [
          { t: 'A: mMRC 0–1 / CAT < 10', d: 'Pocos síntomas, sin exacerbaciones graves',
            say: 'El segundo eje es el paciente, y ese sí decide el tratamiento. Se mide la disnea con la escala mMRC o el cuestionario CAT, y se cuentan las exacerbaciones del último año. Grupo A: pocos síntomas, mMRC cero a uno o CAT bajo diez, y sin exacerbaciones graves.' },
          { t: 'B: mMRC ≥ 2 / CAT ≥ 10', d: 'Muy sintomático, sin exacerbaciones graves',
            say: 'Grupo B: muy sintomático, mMRC dos o más, o CAT de diez o más, también sin exacerbaciones graves. Un mMRC dos es el paciente que camina más lento que la gente de su edad por la disnea.' },
          { t: 'E: ≥ 2 moderadas o ≥ 1 hospitalización', d: 'En el último año, con cualquier síntoma',
            say: 'Y grupo E, el exacerbador: dos o más exacerbaciones moderadas, o una o más con hospitalización en el último año, sin importar los síntomas. Ojo: la clasificación actual fusionó los antiguos grupos C y D en este grupo E.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'Broncodilatadores de larga acción según el grupo',
      nodes: [
        { id: 'q', col: 0, row: 1, k: 'q', t: '¿Qué grupo?', s: 'Síntomas y exacerbaciones' },
        { id: 'a', col: 1, row: 0, k: 'good', t: 'Grupo A', s: 'Un broncodilatador: LAMA o LABA' },
        { id: 'b', col: 1, row: 1, k: 'good', t: 'Grupo B', s: 'LAMA + LABA de inicio' },
        { id: 'e', col: 1, row: 2, k: 'risk', t: 'Grupo E', s: 'LAMA + LABA inicial' },
        { id: 'eos', col: 2, row: 2, k: 'q', t: '¿Eosinófilos ≥ 300/µL?', s: 'Exacerbador frecuente' },
        { id: 'tri', col: 3, row: 2, k: 'mech', t: 'Terapia triple', s: 'LAMA + LABA + CI' },
      ],
      edges: [
        { from: 'q', to: 'a' }, { from: 'q', to: 'b' }, { from: 'q', to: 'e' },
        { from: 'e', to: 'eos' }, { from: 'eos', to: 'tri', label: 'sí' },
      ],
      steps: [
        { show: ['q'], note: 'La base: broncodilatadores de larga acción',
          say: 'Con el grupo definido, el tratamiento es directo. La base son los broncodilatadores de larga acción: los antimuscarínicos, o LAMA, como el tiotropio, y los beta dos agonistas, o LABA, como el olodaterol o el vilanterol.' },
        { show: ['a'], note: 'Pocos síntomas',
          say: 'En el grupo A basta un broncodilatador de larga acción, LAMA o LABA.' },
        { show: ['b'], note: 'Doble broncodilatación',
          say: 'En el grupo B, doble broncodilatación de inicio, LAMA más LABA, por ejemplo tiotropio con olodaterol, o umeclidinio con vilanterol.' },
        { show: ['e'], note: 'El exacerbador también parte con doble',
          say: 'Y en el grupo E, también LAMA más LABA como inicio. Fíjate que ningún grupo parte con corticoide inhalado solo.' },
        { show: ['eos', 'tri'], note: 'El corticoide entra solo aquí',
          say: 'El corticoide inhalado entra en un solo escenario: el exacerbador frecuente con eosinófilos en sangre de trescientos por microlitro o más. Ahí se pasa a terapia triple, LAMA, LABA y corticoide inhalado.' },
      ],
    },

    {
      type: 'points',
      kicker: 'La diferencia que más se pregunta',
      title: 'Corticoide inhalado: el gran cambio respecto del asma',
      cards: [
        { title: 'Nunca en monoterapia', tag: 'Contraindicado', kind: 'alert', items: [
          { t: 'CI solo está contraindicado', d: 'Aumenta el riesgo de neumonía',
            say: 'Detengámonos en esto, porque es la gran diferencia con la clase anterior. En el asma, el corticoide inhalado es la piedra angular. En la EPOC, el corticoide inhalado en monoterapia está contraindicado, y además aumenta el riesgo de neumonía bacteriana.' },
        ] },
        { title: 'Solo en triple', tag: 'Según eosinófilos', kind: 'criteria', items: [
          { t: 'Exacerbador con eosinófilos ≥ 300/µL', d: 'LAMA + LABA + CI',
            say: 'Se reserva para la terapia triple, en pacientes con exacerbaciones frecuentes y eosinófilos de trescientos o más.' },
          { t: 'O ≥ 100/µL', d: 'Con historia de asma o ≥ 2 exacerbaciones',
            say: 'El libro agrega que también se considera con eosinófilos de cien o más, si hay historia de asma o dos o más exacerbaciones. Con eosinófilos bajos y sin exacerbaciones, no hay corticoide.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cesación del tabaco',
      title: 'Dejar de fumar: cómo se logra',
      cards: [
        { title: 'En cada consulta', tag: 'Las 5 A', kind: 'key', items: [
          { t: 'Preguntar, aconsejar, evaluar', d: 'Consejo breve con fecha de cese',
            say: 'Dejar de fumar es la única medida que enlentece la caída del VEF uno y la que más sobrevida da. Por eso se aplica en cada consulta la estrategia de las cinco A: preguntar si fuma, aconsejar dejarlo, evaluar si está dispuesto.' },
          { t: 'Ayudar y acordar seguimiento', d: 'Programa de cesación en APS',
            say: 'Y luego ayudar, con apoyo conductual y fármacos, y acordar el seguimiento. En el sistema público hay consejería y programas de cesación en atención primaria.' },
        ] },
        { title: 'Fármacos', tag: '8 a 12 semanas', kind: 'pharma', items: [
          { t: 'Reemplazo de nicotina', d: 'Parche más goma o pastilla',
            say: 'El tratamiento farmacológico duplica la tasa de abstinencia. Primera opción: reemplazo de nicotina, con parche más goma o pastilla.' },
          { t: 'Bupropión o vareniclina', d: 'Bupropión: no en convulsiones ni conducta alimentaria',
            say: 'Otras dos: bupropión, que está contraindicado en convulsiones y en trastornos de la conducta alimentaria, y vareniclina. Todos por ocho a doce semanas, junto con apoyo conductual.' },
        ] },
        { title: 'Por qué importa', tag: 'Daño del tabaco', kind: 'alert', items: [
          { t: 'Más que el pulmón', d: 'Cáncer, coronarias, ACV, bajo peso al nacer',
            say: 'El tabaco causa cáncer de pulmón, laringe y vejiga, EPOC, enfermedad coronaria, accidente cerebrovascular y bajo peso al nacer. Y el humo ajeno agrava el asma de los niños.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Sobrevida',
      title: 'Lo único que alarga la vida',
      cards: [
        { title: 'Tres medidas', tag: 'Aumentan la sobrevida', kind: 'key', items: [
          { t: 'Dejar de fumar', d: 'La más costo-efectiva',
            say: 'Y ahora la pregunta que el examen repite: ¿qué medidas aumentan la sobrevida en la EPOC? La primera, y la más costo efectiva de todas, es dejar de fumar.' },
          { t: 'Oxígeno domiciliario ≥ 15 h/día', d: 'Si cumple los criterios',
            say: 'La segunda es la oxigenoterapia domiciliaria crónica, usada al menos quince horas al día, en el paciente que cumple los criterios.' },
          { t: 'Reducción de volumen o trasplante', d: 'En casos hiperseleccionados',
            say: 'Y la tercera, la cirugía de reducción de volumen o el trasplante pulmonar, en casos muy seleccionados.' },
        ] },
        { title: 'Lo que no alarga la vida', tag: 'Trampa', kind: 'alert', items: [
          { t: 'Broncodilatadores', d: 'Mejoran síntomas y exacerbaciones',
            say: 'Fíjate en lo que no está en la lista: los broncodilatadores. Son la base del tratamiento, mejoran los síntomas, pero la pregunta de sobrevida se responde con el tabaco y el oxígeno.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Oxígeno domiciliario',
      title: 'Criterios de oxigenoterapia crónica (GES)',
      nodes: [
        { id: 'gsa', col: 0, row: 1, k: 'start', t: 'Gases en reposo', s: 'Paciente estable' },
        { id: 'p55', col: 1, row: 0, k: 'alert', t: 'PaO2 ≤ 55 mmHg', s: 'O SatO2 ≤ 88%' },
        { id: 'p59', col: 1, row: 1, k: 'q', t: 'PaO2 56–59 mmHg', s: '¿Daño por hipoxemia?' },
        { id: 'dan', col: 2, row: 1, k: 'risk', t: 'Cor pulmonale o HTP', s: 'O poliglobulia: Hto > 55%' },
        { id: 'p60', col: 1, row: 2, k: 'good', t: 'PaO2 ≥ 60 mmHg', s: 'Sin indicación' },
        { id: 'ocd', col: 3, row: 0, k: 'good', t: 'Oxígeno ≥ 15 h/día', s: 'Aumenta la sobrevida' },
      ],
      edges: [
        { from: 'gsa', to: 'p55' }, { from: 'gsa', to: 'p59' }, { from: 'gsa', to: 'p60' },
        { from: 'p55', to: 'ocd' }, { from: 'p59', to: 'dan', label: 'con' }, { from: 'dan', to: 'ocd' },
      ],
      steps: [
        { show: ['gsa'], note: 'En reposo y en fase estable',
          say: 'Veamos los criterios del oxígeno domiciliario, que son GES. Se miden con gases en reposo, con el paciente estable, no durante una exacerbación.' },
        { show: ['p55', 'ocd'], note: 'Primer criterio',
          say: 'Primer criterio: presión arterial de oxígeno de cincuenta y cinco milímetros de mercurio o menos, o saturación de ochenta y ocho por ciento o menos. Basta eso para indicar oxígeno.' },
        { show: ['p59', 'dan'], note: 'Segundo criterio: hipoxemia con daño',
          say: 'Segundo criterio: presión de oxígeno entre cincuenta y seis y cincuenta y nueve, pero con evidencia de que la hipoxemia ya está dañando: cor pulmonale, hipertensión pulmonar, o poliglobulia, con hematocrito sobre cincuenta y cinco por ciento.' },
        { show: ['p60'], note: 'Sobre 59, no hay indicación',
          say: 'Con sesenta o más, no hay indicación de oxígeno domiciliario, aunque el paciente tenga mucha disnea. La trampa es indicarlo por el síntoma y no por el gas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Corazón pulmonar crónico',
      title: 'Cuando el pulmón enferma al ventrículo derecho',
      cards: [
        { title: 'Qué es', tag: 'Cor pulmonale', kind: 'key', items: [
          { t: 'Hipertrofia y dilatación del VD', d: 'Por hipertensión pulmonar de causa pulmonar',
            say: 'El corazón pulmonar crónico es la hipertrofia y dilatación del ventrículo derecho secundaria a hipertensión pulmonar por una enfermedad del pulmón. La causa más frecuente es el EPOC avanzado, por la vasoconstricción de la hipoxemia crónica.' },
          { t: 'Edema, yugulares, hepatomegalia', d: 'R2 fuerte, soplo tricuspídeo, poliglobulia',
            say: 'Se sospecha por disnea con edema de las piernas, yugulares ingurgitadas, hígado grande, segundo ruido pulmonar fuerte, soplo de insuficiencia tricuspídea y poliglobulia. El ECG muestra onda P pulmonar y eje derecho; se confirma con ecocardiograma.' },
        ] },
        { title: 'Tratamiento', tag: 'Lo que cambia el curso', kind: 'pharma', items: [
          { t: 'Oxígeno domiciliario > 15 h/día', d: 'Meta SatO2 ≥ 90%',
            say: 'Lo más eficaz es la oxigenoterapia domiciliaria continua, más de quince horas al día, con meta de saturación de noventa por ciento o más, junto con el manejo del EPOC.' },
          { t: 'Diuréticos con cuidado', d: 'Alcalosis metabólica reduce el impulso respiratorio',
            say: 'Los diuréticos se usan solo si hay congestión, y con cuidado, porque la alcalosis metabólica que producen reduce el impulso respiratorio. La flebotomía queda para la poliglobulia sintomática con hematocrito sobre cincuenta y cinco a sesenta por ciento.' },
        ] },
        { title: 'Pronóstico', tag: 'Nivel del Perfil', kind: 'alert', items: [
          { t: 'Su aparición marca mal pronóstico', d: 'Diagnóstico, tratamiento inicial y derivación',
            say: 'Cuando aparece el cor pulmonale, el pronóstico empeora. Tu nivel es diagnóstico específico, tratamiento inicial y derivación.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Enfisema en movimiento',
      images: [
        { src: 'animaciones/resp-04/A1_enfisema_real.mp4', label: 'Enfisema', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Tabiques rotos, aire atrapado',
          say: 'En el enfisema se rompen los tabiques entre los alvéolos: quedan espacios grandes, con menos superficie de intercambio. En cada espiración una parte del aire no alcanza a salir, y el pulmón queda hiperinsuflado.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol, tal como lo vas a razonar frente a un paciente con EPOC en el policlínico.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Fumador con tos, espirometría normal', 'No es EPOC', 'Diagnosticar EPOC por el tabaco'],
          say: 'Repasemos las trampas. Fumador con tos y espirometría normal: no es EPOC. El error es diagnosticarla por el tabaco.' },
        { cells: ['Grupo B: disneico, sin exacerbaciones', 'LAMA + LABA', 'Corticoide inhalado'],
          say: 'Grupo B, disneico y sin exacerbaciones: LAMA más LABA. El error es agregar corticoide inhalado.' },
        { cells: ['Exacerbador, eosinófilos ≥ 300/µL', 'Triple: LAMA + LABA + CI', 'CI solo'],
          say: 'Exacerbador con eosinófilos de trescientos o más: terapia triple. El corticoide solo está contraindicado.' },
        { cells: ['¿Qué aumenta la sobrevida?', 'Dejar de fumar y oxígeno ≥ 15 h', 'Broncodilatadores o corticoides'],
          say: '¿Qué alarga la vida? Dejar de fumar y el oxígeno domiciliario. Los broncodilatadores y los corticoides son el distractor.' },
        { cells: ['PaO2 57 con hematocrito 58%', 'Oxígeno domiciliario', 'Esperar a PaO2 ≤ 55'],
          say: 'Presión de oxígeno de cincuenta y siete con poliglobulia: sí va oxígeno domiciliario. El error es esperar a que baje de cincuenta y cinco.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 66 años, fumador de 35 paquetes-año, con EPOC GOLD 3. Refiere disnea al caminar en plano al ritmo de personas de su edad (mMRC 2). Sin exacerbaciones en el último año. Eosinófilos 90/µL. Gases basales: PaO2 64 mmHg, PaCO2 42 mmHg.',
      question: '¿Cuál es el tratamiento más adecuado?',
      options: [
        { letter: 'A', text: 'LAMA + LABA (por ejemplo, tiotropio/olodaterol)' },
        { letter: 'B', text: 'LAMA + LABA + corticoide inhalado' },
        { letter: 'C', text: 'Fluticasona inhalada en monoterapia' },
        { letter: 'D', text: 'LAMA + LABA y oxígeno domiciliario 15 horas al día' },
        { letter: 'E', text: 'Salbutamol a demanda como única terapia' },
      ],
      correct: 'A',
      explanation: 'Disnea mMRC ≥ 2 sin exacerbaciones: grupo B, que se trata con doble broncodilatación LAMA + LABA. No tiene indicación de CI (eosinófilos < 300, no exacerbador) ni de oxígeno domiciliario (PaO2 > 59 mmHg).',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y seis años, fumador de treinta y cinco paquetes año, con EPOC GOLD tres. Camina más lento que la gente de su edad por la disnea, un mMRC dos. No tuvo exacerbaciones el último año. Sus eosinófilos son noventa, y su presión arterial de oxígeno es sesenta y cuatro.',
        question: '¿Cuál es el tratamiento más adecuado?',
        options: 'Las opciones: LAMA más LABA; terapia triple; fluticasona sola; LAMA más LABA con oxígeno domiciliario; o salbutamol a demanda. Piénsalo.',
        answer: 'Es la A. Clasifica al paciente, no a la curva: tiene mucha disnea y ninguna exacerbación, así que es grupo B, y el grupo B parte con doble broncodilatación. El GOLD tres es el distractor que invita a subir a triple, pero no es exacerbador y sus eosinófilos son bajos. Y el oxígeno no va, porque su presión de oxígeno es sesenta y cuatro, sobre cincuenta y nueve.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 14',
      stem: 'Un paciente de 65 años, fumador de 40 paquetes año, consulta por disnea de algunos meses de evolución, progresiva, que actualmente le dificulta caminar más de 3 cuadras. Su examen físico demuestra espiración prolongada y algunas sibilancias en ambos campos pulmonares. Actualmente ya no fuma. Se solicita espirometría que muestra lo siguiente: Basal: CVF 2,68 L (90%); VEF1 1,35 L (50%); VEF1/CVF 55. Post SBT: CVF 2,96 L (102%); VEF1 1,38 L (51%); VEF1/CVF 57.',
      question: '¿Cuál es el tratamiento inicial?',
      options: [
        { letter: 'A', text: 'Salbutamol inhalado' },
        { letter: 'B', text: 'Budesonida inhalada' },
        { letter: 'C', text: 'Ipatropio inhalado' },
        { letter: 'D', text: 'Fluticasona inhalada' },
        { letter: 'E', text: 'Tiotropio inhalado' },
      ],
      correct: 'E',
      explanation: 'Obstrucción que no revierte con broncodilatador en un exfumador: EPOC. La base del tratamiento es dejar de fumar y los broncodilatadores de larga acción; de las opciones, el tiotropio (LAMA). Los corticoides inhalados solos están contraindicados.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil diecisiete. Hombre de sesenta y cinco años, exfumador de cuarenta paquetes año, con disnea progresiva que le impide caminar más de tres cuadras. La espirometría muestra una relación de cincuenta y cinco que queda en cincuenta y siete después del broncodilatador, con un VEF uno de cincuenta por ciento.',
        question: '¿Cuál es el tratamiento inicial?',
        options: 'Las opciones: salbutamol, budesonida, ipratropio, fluticasona o tiotropio. Piénsalo.',
        answer: 'Es la E, tiotropio. La obstrucción no revierte: es EPOC. Y la base del tratamiento son los broncodilatadores de larga acción; el tiotropio es un LAMA. La budesonida y la fluticasona son la trampa del asma: en la EPOC, el corticoide inhalado solo está contraindicado. El salbutamol y el ipratropio son de acción corta, útiles como rescate, pero no como base.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 155',
      stem: 'Un paciente de 66 años, fumador de 40 paquetes-año presenta tos con expectoración mucosa, de 4 años de evolución. Tiene broncorrea, mayor en la mañana y presenta 2 infecciones respiratorias al año, que requieren de antibióticos. Su radiografía de tórax y espirometría son normales.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Cáncer de pulmón' },
        { letter: 'B', text: 'Tuberculosis pulmonar' },
        { letter: 'C', text: 'Fibrosis pulmonar' },
        { letter: 'D', text: 'EPOC' },
        { letter: 'E', text: 'Bronquitis crónica' },
      ],
      correct: 'E',
      explanation: 'Fumador con tos y expectoración crónicas, mayores en la mañana: bronquitis crónica. No es EPOC porque la espirometría es normal: la EPOC exige VEF1/CVF < 0,70 post-BD.',
      say: {
        stem: 'Otra pregunta real, del EUNACOM de julio de dos mil dieciséis. Hombre de sesenta y seis años, fumador de cuarenta paquetes año, con cuatro años de tos y expectoración, mayor en la mañana, y dos infecciones respiratorias al año. La radiografía y la espirometría son normales.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: cáncer de pulmón, tuberculosis, fibrosis pulmonar, EPOC o bronquitis crónica. Piénsalo.',
        answer: 'Es la E, bronquitis crónica. El distractor evidente es la EPOC, porque el paciente es un gran fumador con tos y expectoración. Pero la EPOC se confirma exclusivamente con una espirometría obstructiva, y aquí es normal. Sin obstrucción, no hay EPOC.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 115',
      stem: 'Un paciente de 76 años, fumador de 80 paquetes-año, con EPOC severo en tratamiento con budesonida y salmeterol inhalados, presenta aumento de su disnea e intolerancia al ejercicio desde hace 7 días, asociado a edema de extremidades inferiores. Al examen físico tiene frecuencia cardíaca 100 por minuto, presión arterial 110/70 mmHg e ingurgitación yugular a 45°. Se ausculta ritmo regular en dos tonos con ruidos apagados y murmullo pulmonar disminuido de manera bilateral, con roncus y sibilancias difusos. Se solicita ecocardiograma que muestra cavidades izquierdas con leve dilatación del ventrículo izquierdo y fracción de eyección conservada de 58%, y cavidades derechas dilatadas con paredes hipertróficas, con estimación de presión de arteria pulmonar de 68 mmHg.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hipertensión pulmonar primaria' },
        { letter: 'B', text: 'Insuficiencia cardíaca congestiva' },
        { letter: 'C', text: 'Exacerbación de enfermedad pulmonar obstructiva crónica' },
        { letter: 'D', text: 'Cor pulmonale descompensado' },
        { letter: 'E', text: 'Tromboembolismo pulmonar' },
      ],
      correct: 'D',
      explanation: 'Signos de insuficiencia cardíaca derecha (edema, ingurgitación yugular) con cavidades derechas dilatadas e hipertróficas e hipertensión pulmonar secundaria a EPOC: cor pulmonale. La función izquierda está conservada. En EPOC, el cor pulmonale es criterio de oxígeno domiciliario con PaO2 56–59 mmHg.',
      say: {
        stem: 'Una más, del EUNACOM de diciembre de dos mil veinticinco. Hombre de setenta y seis años, fumador de ochenta paquetes año, con EPOC severa. Hace una semana tiene más disnea y edema de piernas, con ingurgitación yugular. El ecocardiograma muestra el lado izquierdo con fracción de eyección conservada, y el lado derecho dilatado e hipertrófico, con una presión de arteria pulmonar de sesenta y ocho.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hipertensión pulmonar primaria, insuficiencia cardíaca congestiva, exacerbación de EPOC, cor pulmonale descompensado, o tromboembolismo pulmonar. Piénsalo.',
        answer: 'Es la D, cor pulmonale. La hipoxemia crónica de la EPOC sube la presión pulmonar, y el ventrículo derecho termina fallando: edema e ingurgitación, con el izquierdo normal. La A cae porque la hipertensión pulmonar no es primaria, es secundaria a la EPOC. Y conéctalo con los criterios de oxígeno: el cor pulmonale es justamente lo que indica oxígeno domiciliario con una presión de oxígeno entre cincuenta y seis y cincuenta y nueve.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.05.4.005 · Espirometría",
      "stem": "Hombre de 58 años, fumador de 30 paquetes-año, con tos matinal y disnea de grandes esfuerzos. Espirometría basal: VEF1/CVF 0,66; VEF1 82 % del predicho. Tras 400 mcg de salbutamol: VEF1/CVF 0,74; VEF1 91 % del predicho.",
      "question": "¿Cuál es la interpretación más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "EPOC GOLD 1 confirmada"
        },
        {
          "letter": "B",
          "text": "Patrón restrictivo"
        },
        {
          "letter": "C",
          "text": "EPOC GOLD 2 por VEF1 basal bajo 85 %"
        },
        {
          "letter": "D",
          "text": "No se confirma EPOC: la relación VEF1/CVF posbroncodilatador es mayor de 0,70"
        },
        {
          "letter": "E",
          "text": "Asma grave"
        }
      ],
      "correct": "D",
      "explanation": "El diagnóstico de EPOC exige obstrucción persistente: VEF1/CVF menor de 0,70 después del broncodilatador. Aquí la obstrucción revierte (0,74), así que no se confirma EPOC. Igual corresponde indicar cesación tabáquica y reevaluar, porque tiene síntomas y factor de riesgo.",
      "say": {
        "stem": "Un hombre de cincuenta y ocho años, fumador, tiene tos matinal. En la espirometría basal la relación entre volumen espiratorio del primer segundo y capacidad vital es cero coma sesenta y seis, pero después del salbutamol sube a cero coma setenta y cuatro.",
        "question": "¿Cuál es la interpretación más adecuada?",
        "options": "Las opciones: EPOC leve confirmada, restricción, EPOC moderada, no se confirma EPOC o asma grave. Piénsalo.",
        "answer": "Es la D. La EPOC se diagnostica con la relación posbroncodilatador bajo cero coma setenta, y aquí queda sobre ese valor. Diagnosticar EPOC leve tienta porque el valor basal es bajo, pero el que manda es el posterior al broncodilatador."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.05.3.004 · Tabaquismo: prevención, cesación y efectos nocivos para la salud",
      "stem": "Hombre de 62 años, fumador activo de 20 cigarrillos al día (40 paquetes-año), con EPOC GOLD 2 recién diagnosticada. Pregunta qué puede hacer para que su enfermedad avance más lento.",
      "question": "¿Cuál de las siguientes intervenciones ha demostrado enlentecer la caída anual del VEF1?",
      "options": [
        {
          "letter": "A",
          "text": "Tiotropio inhalado"
        },
        {
          "letter": "B",
          "text": "Corticoide inhalado en dosis alta"
        },
        {
          "letter": "C",
          "text": "Dejar de fumar"
        },
        {
          "letter": "D",
          "text": "Vacuna antineumocócica"
        },
        {
          "letter": "E",
          "text": "Rehabilitación pulmonar"
        }
      ],
      "correct": "C",
      "explanation": "La cesación tabáquica es la única intervención que normaliza la velocidad de caída del VEF1 y, junto al oxígeno domiciliario en hipoxémicos, la que reduce mortalidad. Broncodilatadores y corticoides mejoran síntomas y exacerbaciones, pero no cambian la historia natural. Se debe ofrecer consejería más fármacos.",
      "say": {
        "stem": "Un hombre de sesenta y dos años, que fuma veinte cigarrillos al día, tiene una EPOC moderada recién diagnosticada y pregunta qué puede hacer para que avance más lento.",
        "question": "¿Qué intervención ha demostrado enlentecer la caída anual de la función pulmonar?",
        "options": "Las opciones: tiotropio, corticoide inhalado, dejar de fumar, vacuna antineumocócica o rehabilitación. Piénsalo.",
        "answer": "Es la C, dejar de fumar. Es lo único que vuelve la caída de la función pulmonar a la velocidad normal, y con el oxígeno es lo que alarga la vida. El tiotropio tienta porque mejora mucho los síntomas, pero no cambia la pendiente de la enfermedad."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.01.3.007 · Tabaquismo: prevención, cesación y efectos nocivos para la salud",
      "stem": "Una mujer de 52 años fuma 20 cigarrillos al día desde los 18 años. En el control refiere que quiere dejar de fumar en las próximas semanas. Fuma el primer cigarrillo a los 5 minutos de despertar. No tiene antecedentes de convulsiones ni de enfermedad psiquiátrica.",
      "question": "Además de la consejería, ¿cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Fijar una fecha de cese e indicar farmacoterapia (vareniclina o terapia de reemplazo de nicotina)"
        },
        {
          "letter": "B",
          "text": "Indicar reducir gradualmente a 10 cigarrillos y reevaluar en 1 año"
        },
        {
          "letter": "C",
          "text": "Cambiar a cigarrillo electrónico en forma indefinida"
        },
        {
          "letter": "D",
          "text": "Indicar benzodiacepinas para la ansiedad"
        },
        {
          "letter": "E",
          "text": "Esperar que lo intente sola antes de indicar fármacos"
        }
      ],
      "correct": "A",
      "explanation": "Está en etapa de preparación y tiene alta dependencia (primer cigarrillo antes de 30 minutos). Se indica consejería, fecha de cese y farmacoterapia de primera línea: vareniclina, terapia de reemplazo de nicotina o bupropión. Combinar consejería y fármacos multiplica las tasas de abstinencia; solo reducir no es cesación.",
      "say": {
        "stem": "Una mujer de cincuenta y dos años fuma veinte cigarrillos al día desde joven, quiere dejarlo en las próximas semanas y fuma el primero a los cinco minutos de despertar.",
        "question": "Además de la consejería, ¿qué conducta es la más adecuada?",
        "options": "Las opciones: fijar fecha de cese con vareniclina o reemplazo de nicotina, solo reducir el número de cigarrillos, cigarrillo electrónico indefinido, benzodiacepinas o esperar que lo intente sola. Piénsalo.",
        "answer": "Es la A. Está preparada para dejarlo y tiene alta dependencia, así que se fija fecha y se agrega farmacoterapia, lo que multiplica el éxito. Reducir gradualmente tienta, pero no es cesación y casi no baja el riesgo."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2016 · Pregunta 155",
      "stem": "Un paciente de 66 años, fumador de 40 paquetes-año, presenta tos con expectoración mucosa de 4 años de evolución. Tiene broncorrea, mayor en la mañana, y presenta 2 infecciones respiratorias al año que requieren antibióticos. Su radiografía de tórax y su espirometría son normales.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Cáncer de pulmón"
        },
        {
          "letter": "B",
          "text": "Tuberculosis pulmonar"
        },
        {
          "letter": "C",
          "text": "Fibrosis pulmonar"
        },
        {
          "letter": "D",
          "text": "EPOC"
        },
        {
          "letter": "E",
          "text": "Bronquitis crónica"
        }
      ],
      "correct": "E",
      "explanation": "La bronquitis crónica es tos productiva al menos 3 meses al año por 2 años consecutivos, descartadas otras causas. Sin obstrucción en la espirometría (VEF1/CVF post broncodilatador sobre 0,7) no puede diagnosticarse EPOC, y la radiografía normal hace improbables cáncer, TBC y fibrosis. Lo clave es dejar de fumar.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil dieciséis. Un hombre de sesenta y seis años, gran fumador, tiene tos con expectoración mucosa matinal desde hace cuatro años, con dos infecciones respiratorias al año. Su radiografía y su espirometría son normales.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: cáncer de pulmón, tuberculosis, fibrosis pulmonar, EPOC o bronquitis crónica. Piénsalo.",
        "answer": "Es la E. Tos productiva crónica en un fumador es bronquitis crónica. El EPOC tienta, pero sin obstrucción en la espirometría no se puede diagnosticar."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.05.1.008 · Corazón pulmonar crónico",
      "stem": "Un hombre de 70 años con EPOC grave presenta edema de extremidades inferiores, ingurgitación yugular y hepatomegalia. El ecocardiograma muestra dilatación del ventrículo derecho y presión de arteria pulmonar estimada de 55 mmHg, con FEVI normal. Gases arteriales en reposo: PaO2 52 mmHg.",
      "question": "¿Cuál es la intervención que ha demostrado mejorar la sobrevida en esta condición?",
      "options": [
        {
          "letter": "A",
          "text": "Digoxina"
        },
        {
          "letter": "B",
          "text": "Oxigenoterapia crónica domiciliaria más de 15 horas al día"
        },
        {
          "letter": "C",
          "text": "Betabloqueadores"
        },
        {
          "letter": "D",
          "text": "Anticoagulación oral"
        },
        {
          "letter": "E",
          "text": "Sildenafil en todos los casos"
        }
      ],
      "correct": "B",
      "explanation": "El cor pulmonale por EPOC con hipoxemia crónica (PaO2 ≤55 mmHg, o 56-59 con cor pulmonale o poliglobulia) tiene indicación de oxigenoterapia crónica domiciliaria más de 15 horas al día, única intervención que mejora la sobrevida al revertir la vasoconstricción hipóxica. Los diuréticos alivian el edema; la digoxina no se indica salvo FA.",
      "say": {
        "stem": "Un hombre de setenta años con EPOC grave tiene edema, ingurgitación yugular y hepatomegalia, con ventrículo derecho dilatado, presión pulmonar elevada y una presión arterial de oxígeno de cincuenta y dos.",
        "question": "¿Qué intervención ha demostrado mejorar la sobrevida?",
        "options": "Las opciones: digoxina, oxígeno domiciliario más de quince horas al día, betabloqueadores, anticoagulación o sildenafil. Piénsalo.",
        "answer": "Es la B. En el cor pulmonale hipoxémico, el oxígeno domiciliario por más de quince horas diarias es lo único que mejora la sobrevida. La digoxina tienta por ser insuficiencia cardíaca, pero no mejora la sobrevida en la falla derecha."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Solo la espirometría', kind: 'key', items: [
          { t: 'VEF1/CVF < 0,70 post-BD', d: 'Sin obstrucción no hay EPOC',
            say: 'Cerremos con las reglas de oro. La EPOC se confirma solo con la espirometría: relación bajo cero coma setenta post broncodilatador. Sin obstrucción, no hay EPOC.' },
        ] },
        { title: 'Tratamiento', tag: 'Según el grupo', kind: 'pharma', items: [
          { t: 'A: un BD · B y E: LAMA + LABA', d: 'El grupo, no el GOLD, decide',
            say: 'El tratamiento lo decide el grupo: A, un broncodilatador de larga acción; B y E, LAMA más LABA.' },
          { t: 'CI solo en triple con eosinófilos ≥ 300', d: 'Nunca en monoterapia',
            say: 'El corticoide inhalado nunca va solo, y entra en terapia triple en el exacerbador con eosinófilos altos.' },
        ] },
        { title: 'Sobrevida', tag: 'Tabaco y oxígeno', kind: 'alert', items: [
          { t: 'Dejar de fumar + O2 ≥ 15 h/día', d: 'PaO2 ≤ 55, o 56–59 con daño',
            say: 'Y lo que alarga la vida es dejar de fumar y el oxígeno domiciliario, con presión de oxígeno de cincuenta y cinco o menos, o de cincuenta y seis a cincuenta y nueve con cor pulmonale o poliglobulia.' },
          { t: 'Próxima clase: la exacerbación', d: 'Cuando el paciente se descompensa',
            say: 'En la próxima clase vemos qué pasa cuando este paciente se descompensa: la exacerbación de la EPOC. Si te llevas una sola idea de hoy: en la EPOC mandan los broncodilatadores, pero la vida la alargan el tabaco que se deja y el oxígeno bien indicado. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'EPOC estable: del diagnóstico al tratamiento',
    root: N('start', 'Fumador con disnea y tos', 'Sospecha de EPOC',
      'Adulto fumador, o expuesto a biomasa, con tos, expectoración y disnea progresiva. Sospechas EPOC.',
      ['', N('q', '¿VEF1/CVF < 0,70 post-BD?', 'Espirometría',
        'La confirmación es solo espirométrica: ¿la relación queda bajo cero coma setenta después del broncodilatador?',
        ['NO', N('ok', 'No es EPOC', 'Evaluar bronquitis crónica u otro',
          'Si no, no es EPOC, aunque fume. Puede ser una bronquitis crónica u otra causa.')],
        ['SÍ', N('q', '¿Qué grupo?', 'Síntomas y exacerbaciones',
          'Si hay obstrucción fija, es EPOC. Ahora clasificas por síntomas y exacerbaciones del último año.',
          ['A', N('do', 'Un broncodilatador de larga acción', 'LAMA o LABA',
            'Grupo A, pocos síntomas: un broncodilatador de larga acción.')],
          ['B', N('do', 'LAMA + LABA', 'Doble broncodilatación',
            'Grupo B, muy sintomático: doble broncodilatación de inicio.')],
          ['E', N('alert', 'LAMA + LABA; triple si eosinófilos ≥ 300', 'Exacerbador',
            'Grupo E, exacerbador: LAMA más LABA, y terapia triple con corticoide si los eosinófilos son de trescientos o más.')],
          ['Todos', N('refer', 'Dejar de fumar + evaluar oxígeno', 'PaO2 ≤ 55, o 56–59 con daño',
            'Y en todos: dejar de fumar, y gases en reposo para evaluar oxígeno domiciliario. Son las medidas que alargan la vida.')])])]),
  },
};
