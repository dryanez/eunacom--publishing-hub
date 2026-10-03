// Clase 5.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_diabetes.cjs (diab-22).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'diab-22',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Monofilamento, Wagner y estilete óseo: qué se maneja en APS y qué se hospitaliza',
      say: 'Bienvenidos. Después de la retina bajamos al pie. El pie diabético es una de las complicaciones más costosas y discapacitantes de toda la medicina, y en el examen es de frecuencia máxima. Se pregunta con cuatro herramientas: el monofilamento de diez gramos, la clasificación de Wagner, la prueba del estilete óseo, y los criterios para hospitalizar. Al final de la clase vas a poder mirar una úlcera y decidir dónde se trata.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Tres componentes y un traumatismo',
      nodes: [
        { id: 'neu', col: 0, row: 0, k: 'cause', t: 'Neuropatía', s: 'Más del 80 % de los casos' },
        { id: 'isq', col: 0, row: 2, k: 'cause', t: 'Enfermedad arterial periférica', s: 'Isquemia infragenicular' },
        { id: 'tra', col: 1, row: 1, k: 'mech', t: 'Traumatismo desencadenante', s: 'Calzado, roce, cuerpo extraño' },
        { id: 'ulc', col: 2, row: 1, k: 'effect', t: 'Úlcera', s: 'Que no se siente y cicatriza mal' },
        { id: 'inf', col: 3, row: 1, k: 'risk', t: 'Infección', s: 'Absceso, osteomielitis' },
        { id: 'amp', col: 4, row: 1, k: 'alert', t: 'Gangrena y amputación', s: 'El desenlace que se quiere evitar' },
      ],
      edges: [
        { from: 'neu', to: 'tra', label: 'no lo siente' }, { from: 'isq', to: 'ulc', label: 'no cicatriza' },
        { from: 'tra', to: 'ulc' }, { from: 'ulc', to: 'inf' }, { from: 'inf', to: 'amp' },
      ],
      steps: [
        { show: ['neu'], note: 'El componente principal',
          say: 'Partamos por entender por qué se ulcera un pie diabético. El componente principal, en más del ochenta por ciento de los casos, es la neuropatía. El paciente pierde la sensibilidad protectora: ya no siente el roce, el calor ni la piedra en el zapato.' },
        { show: ['tra', 'ulc'], note: 'Sin dolor, el daño sigue',
          say: 'Entonces aparece el gatillo: un calzado inadecuado, un roce repetido o un cuerpo extraño. En una persona sana, el dolor obliga a sacarse el zapato. En este paciente, el daño sigue sin aviso, y se forma una ampolla, un callo fisurado o una úlcera.' },
        { show: ['isq'], note: 'La isquemia impide cicatrizar',
          say: 'El segundo componente es la enfermedad arterial periférica. La diabetes acelera la ateroesclerosis, sobre todo bajo la rodilla, en las tibiales y la peronea. Un pie mal irrigado no cicatriza.' },
        { show: ['inf', 'amp'], note: 'La úlcera se infecta y progresa',
          say: 'Y sobre una úlcera que no se siente y no cicatriza, llega la infección: absceso, osteomielitis, y finalmente gangrena. Esa es la cadena que termina en amputación, y todo lo que veremos hoy busca cortarla lo antes posible.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Los componentes',
      title: 'Qué hace cada componente en el pie',
      cards: [
        { title: 'Neuropatía', tag: 'Tres tipos de fibra', kind: 'key', items: [
          { t: 'Sensitiva', d: 'Pierde sensibilidad térmica, dolorosa y táctil protectora',
            say: 'La neuropatía afecta tres tipos de fibra, y cada una deja su huella. La sensitiva quita la sensibilidad térmica, dolorosa y táctil protectora frente a roces y cuerpos extraños.' },
          { t: 'Motora', d: 'Dedos en garra o martillo, cabezas metatarsianas prominentes',
            say: 'La motora atrofia la musculatura intrínseca del pie. El arco anterior colapsa, aparecen los dedos en garra o en martillo, y las cabezas de los metatarsianos quedan prominentes: nuevos puntos de apoyo y presión.' },
          { t: 'Autonómica', d: 'Anhidrosis: piel seca e hiperqueratósica',
            say: 'Y la autonómica quita el sudor. La piel queda seca, escamosa y con hiperqueratosis, y se fisura con facilidad: otra puerta de entrada.' },
        ] },
        { title: 'Isquemia', tag: 'Arteriopatía distal', kind: 'alert', items: [
          { t: 'Pulsos distales ausentes', d: 'Palidez al elevar, rubor al declive',
            say: 'La isquemia se reconoce al examen: pulsos distales ausentes, palidez al elevar la pierna y rubor cuando cuelga. Y una cicatrización que se retrasa.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tamizaje anual en APS',
      title: 'El examen del pie en el control cardiovascular',
      cards: [
        { title: 'Monofilamento de 10 g', tag: 'Estándar', kind: 'criteria', items: [
          { t: 'Semmes-Weinstein 5.07', d: '10 gramos de fuerza',
            say: 'Como la neuropatía es silenciosa, se busca una vez al año en el control de salud cardiovascular. El examen estándar es el monofilamento de Semmes-Weinstein cinco coma cero siete, que ejerce diez gramos de fuerza. Ese dato se pregunta tal cual.' },
          { t: 'Pulpejos 1.º, 3.º y 5.º y cabezas metatarsianas', d: 'Perpendicular, hasta curvarlo, 1 a 2 segundos',
            say: 'Se apoya perpendicular a la piel, en el pulpejo del primer, tercer y quinto dedo y en las cabezas de los metatarsianos, hasta que el filamento se curve, durante uno a dos segundos.' },
          { t: 'Un punto no percibido', d: 'Pie de alto riesgo de ulceración',
            say: 'Y basta con que no perciba uno solo de esos puntos para que el pie sea de alto riesgo de ulceración.' },
        ] },
        { title: 'Complementos', tag: 'Vibración y pulsos', kind: 'normal', items: [
          { t: 'Diapasón de 128 Hz', d: 'Sensibilidad vibratoria en el hallux',
            say: 'Se complementa con el diapasón de ciento veintiocho hertz en el ortejo mayor, que mide la sensibilidad vibratoria.' },
          { t: 'Pulsos pedio y tibial posterior', d: 'Si faltan: índice tobillo-brazo',
            say: 'Y se palpan los pulsos pedio y tibial posterior. Si están ausentes o disminuidos, se calcula el índice tobillo-brazo. Lo normal es entre cero coma nueve y uno coma tres; bajo cero coma nueve confirma enfermedad arterial periférica.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial',
      title: 'Úlcera neuropática vs úlcera isquémica',
      head: ['Característica', 'Neuropática', 'Isquémica'],
      rows: [
        { cells: ['Ubicación', 'Zonas de apoyo: cabeza del 1.er metatarsiano, talón', 'Zonas distales: pulpejos, bordes de los dedos'],
          say: 'Con esos componentes puedes separar las dos úlceras clásicas. La neuropática aparece donde se apoya el pie: la cabeza del primer metatarsiano o el talón. La isquémica, en lo más distal, donde llega menos sangre: pulpejos y bordes de los dedos.' },
        { cells: ['Aspecto', 'Rodete grueso de hiperqueratosis', 'Bordes excavados, pálidos, lecho necrótico'],
          say: 'La neuropática está rodeada de un rodete grueso de callo. La isquémica tiene bordes excavados y pálidos, con un lecho necrótico o cianótico.' },
        { cells: ['Dolor', 'Indolora', 'Muy dolorosa, peor al elevar'],
          say: 'La diferencia más útil es el dolor. La neuropática es indolora, porque el pie está denervado. La isquémica duele mucho, y más al elevar la pierna.' },
        { cells: ['Temperatura y pulsos', 'Pie tibio, pulsos presentes', 'Pie frío, pulsos ausentes'],
          say: 'La neuropática tiene el pie tibio y los pulsos presentes. La isquémica, un pie frío, pálido al elevar, y pulsos ausentes o muy disminuidos.' },
        { cells: ['Reflejo aquiliano', 'Abolido', 'Conservado si no hay neuropatía'],
          say: 'Y el reflejo aquiliano está abolido en la neuropática, y conservado en la isquémica pura. Por eso a esta úlcera indolora en la planta se le llama mal perforante plantar.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Clasificación de Wagner',
      title: 'Wagner: la profundidad decide la conducta',
      nodes: [
        { id: 'w0', col: 0, row: 0, k: 'good', t: 'Grado 0', s: 'Pie de riesgo, sin úlcera' },
        { id: 'w1', col: 1, row: 0, k: 'effect', t: 'Grado 1', s: 'Úlcera superficial' },
        { id: 'w2', col: 2, row: 0, k: 'effect', t: 'Grado 2', s: 'Expone tendón o cápsula' },
        { id: 'w3', col: 2, row: 2, k: 'alert', t: 'Grado 3', s: 'Absceso u osteomielitis' },
        { id: 'w4', col: 3, row: 2, k: 'alert', t: 'Grado 4', s: 'Gangrena localizada' },
        { id: 'w5', col: 4, row: 2, k: 'alert', t: 'Grado 5', s: 'Gangrena de todo el pie' },
        { id: 'amb', col: 4, row: 0, k: 'start', t: 'Grados 0 a 2', s: 'Manejo ambulatorio' },
        { id: 'hos', col: 4, row: 4, k: 'refer', t: 'Grados 3 a 5', s: 'Hospitalizar' },
      ],
      edges: [
        { from: 'w0', to: 'w1' }, { from: 'w1', to: 'w2' }, { from: 'w2', to: 'w3', label: 'se infecta a fondo' },
        { from: 'w3', to: 'w4' }, { from: 'w4', to: 'w5' },
        { from: 'w2', to: 'amb' }, { from: 'w5', to: 'hos' },
      ],
      steps: [
        { show: ['w0'], note: 'Aún no hay úlcera',
          say: 'Ahora la escala que el examen pide de memoria: Wagner, del cero al cinco. El grado cero es el pie de riesgo, sin úlcera activa: callos gruesos, dedos en garra o un pie de Charcot. La conducta es educación, calzado terapéutico amplio y podología.' },
        { show: ['w1'], note: 'Todo el espesor de la piel, nada más',
          say: 'El grado uno es la úlcera superficial: compromete todo el espesor de la piel, pero no llega a tendón, cápsula ni hueso. Es el mal perforante plantar típico. Se maneja con curación avanzada y descarga estricta.' },
        { show: ['w2'], note: 'Se ve tendón, ligamento o cápsula',
          say: 'El grado dos es más profundo: expone tendón, ligamento o cápsula articular, pero sin absceso y sin hueso. Desbridamiento en curación avanzada y evaluación por un equipo multiprofesional.' },
        { show: ['amb'], note: 'Hasta aquí, ambulatorio',
          say: 'Fíjate en el corte: del cero al dos, el manejo es ambulatorio, en atención primaria o con especialidad.' },
        { show: ['w3'], note: 'El salto: infección profunda',
          say: 'El grado tres es el que más se pregunta: úlcera profunda con absceso, osteomielitis o artritis séptica. La conducta es hospitalización obligatoria, aseo quirúrgico amplio y antibióticos endovenosos prolongados.' },
        { show: ['w4', 'w5'], note: 'Gangrena: localizada o extensa',
          say: 'El grado cuatro es la gangrena localizada, en un dedo, el talón o el antepié: hospitalización urgente, antibióticos, estudio vascular y revascularización o amputación menor. El grado cinco es la gangrena de todo el pie con repercusión sistémica: amputación mayor, bajo o sobre la rodilla.' },
        { show: ['hos'], note: 'Del tres al cinco, hospital',
          say: 'Y el otro corte: del tres al cinco, siempre se hospitaliza. Si recuerdas solo esa frontera, ya respondes la mitad de las preguntas del tema.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Osteomielitis',
      title: 'La prueba del estilete óseo',
      nodes: [
        { id: 'ulc', col: 0, row: 1, k: 'start', t: 'Úlcera profunda o tórpida', s: 'Que no mejora' },
        { id: 'est', col: 1, row: 1, k: 'q', t: 'Estilete estéril de punta roma', s: '¿Toca hueso?' },
        { id: 'pos', col: 2, row: 0, k: 'alert', t: 'Superficie dura y rugosa', s: 'Probe-to-bone positivo' },
        { id: 'ost', col: 3, row: 0, k: 'risk', t: 'Osteomielitis', s: 'VPP mayor al 90 %' },
        { id: 'img', col: 3, row: 2, k: 'good', t: 'Radiografía o resonancia', s: 'RM en casos precoces' },
        { id: 'w3', col: 4, row: 1, k: 'refer', t: 'Wagner 3: hospitalizar', s: 'Aseo quirúrgico + antibióticos EV' },
      ],
      edges: [
        { from: 'ulc', to: 'est' }, { from: 'est', to: 'pos', label: 'sí' }, { from: 'pos', to: 'ost' },
        { from: 'ost', to: 'img' }, { from: 'ost', to: 'w3' },
      ],
      steps: [
        { show: ['ulc', 'est'], note: 'Un examen de consulta, sin tecnología',
          say: '¿Y cómo sabes si una úlcera ya llegó al hueso? Con un examen que se hace en la misma consulta. En toda úlcera profunda o de evolución tórpida, introduces suavemente un estilete metálico estéril, de punta roma, hasta el fondo de la lesión.' },
        { show: ['pos', 'ost'], note: 'Tocar hueso es tener osteomielitis',
          say: 'Si el estilete choca con una superficie dura, rugosa, como piedra, la prueba es positiva, y confirma una osteomielitis con un valor predictivo positivo mayor al noventa por ciento.' },
        { show: ['img'], note: 'La radiografía llega tarde',
          say: 'Luego se pide una radiografía simple del pie. Pero ojo, la resorción cortical y la lisis ósea son tardías; en los casos precoces, la resonancia magnética es más útil.' },
        { show: ['w3'], note: 'El estilete sube el grado',
          say: 'Y lo más importante: una úlcera que parecía superficial, con estilete positivo, pasa automáticamente a Wagner tres. Eso significa hospitalizar, aseo quirúrgico y antibióticos endovenosos.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Los pilares del manejo local',
      cards: [
        { title: 'Descarga', tag: 'Off-loading', kind: 'key', items: [
          { t: 'Sin descarga, ninguna úlcera cicatriza', d: 'Reposo, férula de contacto total, calzado especial',
            say: 'Pasemos al tratamiento. El pilar número uno no es un fármaco: es la descarga de presión. Si el paciente sigue apoyando sobre la úlcera, ninguna curación ni antibiótico la va a cerrar. Se logra con reposo, férula de contacto total o calzado terapéutico.' },
        ] },
        { title: 'Curación avanzada', tag: 'Ambiente húmedo', kind: 'normal', items: [
          { t: 'Retirar esfacelo y necrosis', d: 'Mantener un ambiente húmedo fisiológico',
            say: 'El segundo pilar es la curación avanzada: retirar el tejido esfacelado o necrótico, y mantener un ambiente húmedo fisiológico que permita cicatrizar.' },
        ] },
        { title: 'Lo que el examen castiga', tag: 'Ojo', kind: 'alert', items: [
          { t: 'Cultivo de tejido profundo', d: 'Nunca hisopado superficial',
            say: 'Dos detalles que el examen castiga. El cultivo no se toma con hisopado de la superficie, que solo recoge colonizantes: se toma de tejido profundo o de biopsia ósea en pabellón.' },
          { t: 'Gangrena: estudiar la irrigación', d: 'Eco-Doppler o AngioTAC antes de resecar',
            say: 'Y en la gangrena localizada, antes de cualquier resección, hay que estudiar la irrigación distal con eco-Doppler o angioTAC. Si amputas sin saber si llega sangre, el muñón no va a cicatrizar.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Antibióticos',
      title: 'Esquema escalonado según la gravedad',
      cards: [
        { title: 'Leve', tag: 'Oral, ambulatorio', kind: 'pharma', items: [
          { t: 'Celulitis menor de 2 cm, superficial', d: 'S. aureus y estreptococo',
            say: 'El antibiótico se escala según la gravedad, y la lógica es la flora. En la infección leve, superficial, con celulitis de menos de dos centímetros, los gérmenes son Staphylococcus aureus y estreptococo.' },
          { t: 'Cefadroxilo o cloxacilina VO', d: '7 a 14 días',
            say: 'Se tratan por vía oral, en forma ambulatoria, con cefadroxilo o cloxacilina, por siete a catorce días. El libro menciona también clindamicina o amoxicilina con ácido clavulánico.' },
        ] },
        { title: 'Moderada', tag: 'Oral', kind: 'pharma', items: [
          { t: 'Celulitis mayor de 2 cm o absceso local', d: 'Polimicrobiana',
            say: 'En la moderada, con celulitis de más de dos centímetros o un absceso local, la flora ya es polimicrobiana: grampositivos, gramnegativos y anaerobios.' },
          { t: 'Amoxicilina-clavulánico o ciprofloxacino + clindamicina', d: '14 a 21 días',
            say: 'Se usa amoxicilina con ácido clavulánico, o ciprofloxacino más clindamicina, por catorce a veintiún días.' },
        ] },
        { title: 'Severa y osteomielitis', tag: 'EV, hospitalizado', kind: 'alert', items: [
          { t: 'Wagner 3 a 5 o compromiso sistémico', d: 'Ceftriaxona + metronidazol EV',
            say: 'En la severa, con compromiso sistémico o Wagner tres a cinco, el paciente se hospitaliza y recibe tratamiento endovenoso: ceftriaxona más metronidazol, o piperacilina con tazobactam.' },
          { t: 'Osteomielitis: según cultivo de biopsia ósea', d: 'Total 4 a 6 semanas',
            say: 'Y si hay osteomielitis comprobada, el esquema se ajusta al cultivo de la biopsia ósea, parte por vía parenteral y dura en total cuatro a seis semanas.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol, tal como lo razonas frente a un pie diabético.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Tamizaje anual de neuropatía', 'Monofilamento de 10 g', 'Electromiografía anual'],
          say: 'Repasemos las trampas. El tamizaje anual de la neuropatía es con el monofilamento de diez gramos, en la consulta. No se pide una electromiografía cada año.' },
        { cells: ['Pie de riesgo sin úlcera (Wagner 0)', 'Educación, calzado, podología', 'Derivar a urgencia'],
          say: 'Un pie de riesgo, sin úlcera, es Wagner cero: educación, calzado adecuado y podología. No es una urgencia.' },
        { cells: ['Úlcera superficial (Wagner 1)', 'Descarga + curación avanzada', 'Pomadas o antisépticos'],
          say: 'La úlcera superficial se cierra con descarga y curación avanzada. Las pomadas con antibióticos o los baños antisépticos no reemplazan la descarga.' },
        { cells: ['Estilete toca hueso', 'Wagner 3: hospitalizar', 'Curación ambulatoria'],
          say: 'Si el estilete toca hueso, es Wagner tres aunque la úlcera se vea pequeña: se hospitaliza. Seguir con curaciones ambulatorias es el error clásico.' },
        { cells: ['Gangrena seca de dedos', 'Wagner 4: estudio vascular + amputación menor', 'Amputación mayor de entrada'],
          say: 'Gangrena de uno o dos dedos es Wagner cuatro: estudio vascular, revascularización o amputación menor. La amputación mayor queda para la gangrena de todo el pie, el Wagner cinco.' },
        { cells: ['Cultivo de la úlcera', 'Tejido profundo o biopsia ósea', 'Hisopado superficial'],
          say: 'El cultivo es de tejido profundo o de hueso, nunca de un hisopado superficial.' },
        { cells: ['Pulsos pedios ausentes', 'Índice tobillo-brazo', 'Asumir úlcera neuropática pura'],
          say: 'Y si faltan los pulsos, se mide el índice tobillo-brazo antes de asumir que la úlcera es solo neuropática.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 64 años, DM2 de 16 años mal controlada, tabáquico. Úlcera plantar de 3 semanas, de 2,5 cm, sobre la cabeza del 1.er metatarsiano, con hiperqueratosis alrededor e indolora. Al explorar el fondo con un estilete estéril, choca con una superficie dura y rugosa. Pie tibio, pulsos pedio y tibial posterior presentes.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Curación avanzada ambulatoria y descarga; control en 1 semana' },
        { letter: 'B', text: 'Cefadroxilo oral por 10 días y curación en APS' },
        { letter: 'C', text: 'Hospitalizar: imagen, desbridamiento con biopsia ósea, descarga y antibióticos EV' },
        { letter: 'D', text: 'Amputación supracondílea de urgencia' },
        { letter: 'E', text: 'Derivar a cirugía vascular para bypass ambulatorio' },
      ],
      correct: 'C',
      explanation: 'Mal perforante plantar neuropático (indoloro, hiperqueratosis, pulsos presentes) con estilete óseo positivo: osteomielitis, Wagner 3. Se hospitaliza para radiografía o resonancia, desbridamiento quirúrgico con biopsia ósea para cultivo, descarga absoluta y antibióticos parenterales prolongados.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y cuatro años, diabético tipo dos hace dieciséis años, mal controlado y fumador. Tiene una úlcera plantar de tres semanas, de dos centímetros y medio, sobre la cabeza del primer metatarsiano, rodeada de callo y sin dolor. Al explorar el fondo con un estilete estéril, choca con algo duro y rugoso. El pie está tibio y los pulsos están presentes.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones son: curación ambulatoria con descarga, cefadroxilo oral y curación en atención primaria, hospitalizar con imagen, desbridamiento, biopsia ósea y antibióticos endovenosos, amputación supracondílea, o bypass ambulatorio. Piénsalo.',
        answer: 'La respuesta es la C. Todo te dice úlcera neuropática: plantar, con callo, indolora, pie tibio con pulsos. Pero el estilete tocó hueso, y eso es osteomielitis: Wagner tres. Se hospitaliza para imagen, desbridamiento con biopsia ósea para cultivo, descarga absoluta y antibióticos endovenosos prolongados. La A es la trampa, porque sería correcta sin el estilete positivo. Y el bypass no tiene sentido si los pulsos están presentes.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2024 · Pregunta 93',
      stem: 'DM con polineuropatía, dedos en garra, hiperqueratosis, con test de monofilamento alterado, pulsos disminuidos, conducta:',
      question: '¿Cuál es la conducta?',
      options: [
        { letter: 'A', text: 'Mejorar calzado' },
        { letter: 'B', text: 'Electromiografia, realizar test de nuevo en unos meses' },
        { letter: 'C', text: 'Observación clínica' },
        { letter: 'D', text: 'Derivar a urgencia' },
        { letter: 'E', text: 'Control ambulatorio' },
      ],
      correct: 'A',
      explanation: 'Pie de riesgo sin úlcera (dedos en garra, hiperqueratosis, monofilamento alterado): Wagner 0. La conducta es preventiva: calzado adecuado, educación y podología. No es una urgencia y no requiere electromiografía.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de diciembre de dos mil veinticuatro, y es muy breve. Diabético con polineuropatía, dedos en garra, hiperqueratosis, monofilamento alterado y pulsos disminuidos.',
        question: '¿Cuál es la conducta?',
        options: 'Las opciones son: mejorar el calzado, electromiografía y repetir el test en unos meses, observación clínica, derivar a urgencia, o control ambulatorio. Piénsalo.',
        answer: 'Es la A, mejorar el calzado. No hay úlcera: es un pie de riesgo, Wagner cero, y la conducta es preventiva: calzado adecuado, educación y podología. Derivar a urgencia es exagerar, y la electromiografía no cambia nada, porque el monofilamento ya mostró la pérdida de sensibilidad. Y como los pulsos están disminuidos, en la práctica sumas un índice tobillo-brazo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 56',
      stem: 'Un paciente de 58 años, diabético tipo 2 de larga data, mal controlado, consulta por dolor en las extremidades inferiores, de tipo urente y que es más intenso en la noche. Al examen físico se aprecia ausencia de la sensibilidad de las extremidades con el uso de monofilamento e importante disminución de los pulsos pedios.',
      question: '¿Cuál es el examen más adecuado para confirmar el diagnóstico?',
      options: [
        { letter: 'A', text: 'Estudio Doppler vascular de extremidades inferiores' },
        { letter: 'B', text: 'Electromiografía' },
        { letter: 'C', text: 'Resonancia magnética nuclear de columna lumbosacra' },
        { letter: 'D', text: 'Angiografía aortofemoral' },
        { letter: 'E', text: 'Pletismografía de volumen del pulso de extremidades inferiores' },
      ],
      correct: 'B',
      explanation: 'Dolor urente, de predominio nocturno, con monofilamento alterado: polineuropatía diabética. Su diagnóstico es clínico, pero el examen que la objetiva es la electromiografía. Los pulsos disminuidos son un distractor que lleva a los estudios vasculares.',
      say: {
        stem: 'Otra del EUNACOM de diciembre de dos mil diecinueve. Paciente de cincuenta y ocho años, diabético tipo dos de larga data y mal controlado, con dolor urente en las piernas, que empeora en la noche. El monofilamento no se percibe, y los pulsos pedios están muy disminuidos.',
        question: '¿Cuál es el examen más adecuado para confirmar el diagnóstico?',
        options: 'Las opciones son: Doppler vascular, electromiografía, resonancia de columna, angiografía aortofemoral, o pletismografía. Piénsalo.',
        answer: 'Es la B, electromiografía. La pregunta es qué explica el síntoma: un dolor urente y nocturno, con pérdida de sensibilidad, es neuropático. La polineuropatía se diagnostica con la clínica, y si hay que objetivarla, se usa la electromiografía. Los pulsos disminuidos son el distractor que te lleva al Doppler, pero el dolor de la isquemia aparece al caminar o al elevar la pierna, no es urente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Enero 2023 · Pregunta 146',
      stem: 'Diabético fumador con dolor en pantorrillas al caminar 120 metros, ausencia de reflejos patelares, hipoestesia y pulsos pedios débiles. ¿Cuál es el examen de elección?',
      question: '¿Cuál es el examen de elección?',
      options: [
        { letter: 'A', text: 'Electromiografía y velocidad de conducción nerviosa' },
        { letter: 'B', text: 'AngioTAC de extremidades inferiores' },
        { letter: 'C', text: 'Arteriografía de extremidades inferiores' },
        { letter: 'D', text: 'Doppler venoso de extremidades inferiores' },
        { letter: 'E', text: 'Índice tobillo-brazo (ITB)' },
      ],
      correct: 'E',
      explanation: 'Dolor de pantorrillas al caminar una distancia fija (claudicación intermitente) con pulsos débiles: enfermedad arterial periférica. El examen inicial es el índice tobillo-brazo; bajo 0,9 la confirma. Los signos de neuropatía son el distractor.',
      say: {
        stem: 'Y la pregunta espejo, del EUNACOM de enero de dos mil veintitrés. Diabético fumador con dolor en las pantorrillas al caminar ciento veinte metros, reflejos patelares ausentes, hipoestesia y pulsos pedios débiles.',
        question: '¿Cuál es el examen de elección?',
        options: 'Las opciones son: electromiografía, angioTAC, arteriografía, Doppler venoso, o índice tobillo-brazo. Piénsalo.',
        answer: 'Es la E, índice tobillo-brazo. Ahora el síntoma es otro: dolor en la pantorrilla que aparece al caminar una distancia fija, eso es claudicación intermitente, y con pulsos débiles apunta a la arteria. El primer examen es el índice tobillo-brazo; bajo cero coma nueve confirma la enfermedad arterial. Compárala con la anterior: los dos pacientes tienen neuropatía y pulsos bajos, y lo que decide el examen es qué explica el dolor.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Tamizaje', tag: 'APS, cada año', kind: 'criteria', items: [
          { t: 'Monofilamento de 10 g', d: 'Un punto no percibido: pie de alto riesgo',
            say: 'Cerremos con las reglas de oro. El tamizaje anual es con el monofilamento de diez gramos, y un solo punto no percibido define un pie de alto riesgo.' },
          { t: 'Neuropática: indolora, pulsos presentes', d: 'Isquémica: dolorosa, pulsos ausentes',
            say: 'La úlcera neuropática es indolora, en zona de apoyo, con pulsos presentes. La isquémica duele, es distal y no tiene pulsos.' },
        ] },
        { title: 'Wagner', tag: 'El corte', kind: 'alert', items: [
          { t: '0 a 2: ambulatorio', d: 'Descarga + curación avanzada',
            say: 'Del Wagner cero al dos, manejo ambulatorio, con descarga y curación avanzada.' },
          { t: '3 a 5: hospitalizar', d: 'Cirugía + antibióticos EV',
            say: 'Del tres al cinco, se hospitaliza, con cirugía y antibióticos endovenosos.' },
          { t: 'Estilete toca hueso', d: 'Osteomielitis: Wagner 3',
            say: 'Y si el estilete toca hueso, es osteomielitis y es Wagner tres.' },
        ] },
        { title: 'Tratamiento', tag: 'Lo que más cierra úlceras', kind: 'key', items: [
          { t: 'Descarga de presión', d: 'La medida no quirúrgica más importante',
            say: 'Si te llevas una sola idea de hoy: el pie diabético es un pie que no siente, así que el médico tiene que mirar por él; y la úlcera que no se descarga no cierra, y la que toca hueso se hospitaliza. En la próxima clase pasamos a las dislipidemias y al riesgo cardiovascular. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Pie diabético: del tamizaje a la hospitalización',
    root: N('start', 'Paciente diabético', 'Examen anual del pie',
      'Todo diabético tiene su examen anual del pie: monofilamento, diapasón y pulsos.',
      ['', N('q', '¿Hay úlcera?', 'Inspección del pie',
        'La primera pregunta es si hay una úlcera activa.',
        ['NO', N('ok', 'Wagner 0: pie de riesgo', 'Educación, calzado, podología',
          'Sin úlcera, pero con monofilamento alterado, callos o deformidades, es un pie de riesgo, Wagner cero: educación, calzado adecuado y podología. Si faltan los pulsos, índice tobillo-brazo.')],
        ['SÍ', N('q', '¿Qué tan profunda?', 'Examen con estilete óseo',
          'Si hay úlcera, define su profundidad y pasa el estilete estéril hasta el fondo.',
          ['Piel o tendón', N('do', 'Wagner 1 a 2: ambulatorio', 'Descarga + curación avanzada',
            'Si compromete la piel, o llega a tendón o cápsula sin absceso ni hueso, es Wagner uno o dos: descarga y curación avanzada ambulatoria, con desbridamiento en el grado dos. Antibiótico oral si hay celulitis.')],
          ['Absceso o hueso', N('alert', 'Wagner 3: hospitalizar', 'Aseo quirúrgico + ATB EV',
            'Si hay absceso, o el estilete toca hueso, es Wagner tres: hospitalizar, aseo quirúrgico, biopsia ósea para cultivo y antibióticos endovenosos por cuatro a seis semanas.')],
          ['Gangrena', N('refer', 'Wagner 4 a 5: urgencia', 'Estudio vascular y amputación',
            'Si hay gangrena, se hospitaliza de urgencia. Localizada, es Wagner cuatro: estudio vascular, revascularización o amputación menor. Extensa, en todo el pie, es Wagner cinco: amputación mayor.')])])]),
  },
};
