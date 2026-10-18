// Clase 4.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neumologia.cjs (resp-18).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'resp-18',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Crépitos en velcro, panal de abejas y por qué aquí los corticoides hacen daño',
      say: 'Bienvenidos. Hoy vemos las enfermedades pulmonares intersticiales difusas, y en especial la fibrosis pulmonar idiopática. Si en la clase anterior el enemigo era una masa, hoy es todo el pulmón que se va endureciendo de a poco. El examen pregunta tres cosas: reconocer la clínica, leer el patrón del scanner y no caer en la trampa de los corticoides. Partamos.',
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: '¿Cómo llega este paciente?',
      cards: [
        { title: 'Síntomas', tag: 'Meses a años', kind: 'key', items: [
          { t: 'Disnea de esfuerzo progresiva', d: 'Insidiosa, a lo largo de meses o años',
            say: 'Empecemos por cómo consulta. El síntoma cardinal es una disnea de esfuerzo que se instala de forma insidiosa y avanza lento, a lo largo de meses o años. El paciente de a poco deja de subir escaleras o de cargar peso, y muchas veces no se da cuenta hasta que ya está limitado.' },
          { t: 'Tos seca persistente', d: 'Irritativa, sin expectoración',
            say: 'Se acompaña de tos seca e irritativa. Fíjate que es seca: el intersticio que se engrosa no produce secreción. Eso ya la separa de la bronquitis crónica o de las bronquiectasias.' },
        ] },
        { title: 'Examen físico', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Crépitos secos tipo velcro', d: 'Teleinspiratorios, bibasales, en más del 80 %',
            say: 'Y el examen físico tiene dos signos que el EUNACOM ama. El primero son los crépitos secos tipo velcro: al final de la inspiración, en ambas bases, suenan como cuando despegas un velcro. Están en más del ochenta a noventa por ciento de los pacientes con fibrosis.' },
          { t: 'Acropaquia', d: 'Dedos en palillo de tambor, en la mitad de las FPI',
            say: 'El segundo es la acropaquia, los dedos en palillo de tambor con uñas en vidrio de reloj, presente en cerca de la mitad de las fibrosis pulmonares idiopáticas. Disnea progresiva, tos seca, crépitos en velcro y acropaquia: esa es la foto del examen. Mira estas manos.',
            photo: { src: 'biblioteca/02_neumologia/resp-18/03_acropaquias__amir-reuma_p113.jpg', label: 'Acropaquias', at: 'Mira estas manos', credit: 'Manual AMIR Reumatología, p. 113' } },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'La TACAR decide el patrón',
      nodes: [
        { id: 'sos', col: 0, row: 1, k: 'start', t: 'Sospecha de EPID', s: 'Disnea + velcro + acropaquia' },
        { id: 'tac', col: 1, row: 1, k: 'q', t: 'TACAR sin contraste', s: 'Examen de elección' },
        { id: 'niu', col: 2, row: 0, k: 'risk', t: 'Patrón NIU', s: 'Panal de abejas subpleural basal' },
        { id: 'fpi', col: 3, row: 0, k: 'alert', t: 'Fibrosis pulmonar idiopática', s: 'Sin biopsia si > 60 años' },
        { id: 'nin', col: 2, row: 2, k: 'effect', t: 'Patrón NINE', s: 'Vidrio esmerilado' },
        { id: 'sec', col: 3, row: 2, k: 'refer', t: 'Causa secundaria', s: 'Conectivopatía o fármaco' },
      ],
      edges: [
        { from: 'sos', to: 'tac' },
        { from: 'tac', to: 'niu' }, { from: 'niu', to: 'fpi' },
        { from: 'tac', to: 'nin' }, { from: 'nin', to: 'sec' },
      ],
      steps: [
        { show: ['sos'], note: 'La clínica orienta, pero no define',
          say: 'Con esa clínica, sospechas una enfermedad intersticial. Pero la clínica no te dice cuál. Para eso necesitas ver el pulmón por dentro.' },
        { show: ['tac'], note: 'Tomografía de alta resolución, sin contraste',
          say: 'El examen de elección es la tomografía computarizada de alta resolución, la TACAR, sin contraste. No buscamos vasos, buscamos el dibujo del intersticio, y ese dibujo tiene nombre.' },
        { show: ['niu'], note: 'El sello de la FPI',
          say: 'Si el dibujo es de neumonía intersticial usual, el patrón NIU, con panal de abejas en las bases y bajo la pleura, estás frente al sello de la fibrosis pulmonar idiopática. Mira esta tomografía: el panal de abejas bajo la pleura. Y en esta radiografía, el patrón reticular de las bases.',
            photos: [{ src: 'biblioteca/02_neumologia/resp-18/01_fpi-rx-y-tc_alt1__cto-neumo_p73.jpg', label: 'Panal de abejas', at: 'Mira esta tomografía', credit: 'Manual CTO Neumología 14.ª ed., p. 73' }, { src: 'biblioteca/02_neumologia/resp-18/01_fpi-rx-y-tc__cto-neumo_p73.jpg', label: 'FPI en la radiografía', at: 'Y en esta radiografía', credit: 'Manual CTO Neumología 14.ª ed., p. 73' }] },
        { show: ['fpi'], note: 'Esto se pregunta: no hace falta biopsia',
          say: 'Y aquí viene un dato muy preguntado: si la TACAR muestra un patrón NIU definitivo en un paciente de más de sesenta años, sin otra causa, el diagnóstico está hecho. No se requiere biopsia pulmonar.' },
        { show: ['nin', 'sec'], note: 'NINE: pensar en el tejido conectivo',
          say: 'Si en cambio predomina el vidrio esmerilado, el patrón es de neumonía intersticial no específica, la NINE. Ese patrón te obliga a buscar una causa secundaria, sobre todo una enfermedad del tejido conectivo, o un fármaco.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Patrón tomográfico',
      title: 'NIU vs NINE: cómo se leen',
      cards: [
        { title: 'Patrón NIU', tag: 'Fibrosis idiopática', kind: 'criteria', items: [
          { t: 'Reticulación subpleural y basal', d: 'Bilateral',
            say: 'Veamos cómo se define el patrón NIU, porque tiene cuatro componentes. El primero son opacidades reticulares, bajo la pleura y en las bases, en ambos pulmones. Mira estos esquemas del patrón intersticial.',
            photos: [{ src: 'biblioteca/02_neumologia/resp-18/02_patrones-intersticiales_1__cto-neumo_p80.jpg', label: 'Patrón quístico', at: 'Mira estos esquemas', credit: 'Manual CTO Neumología 14.ª ed., p. 80' }, { src: 'biblioteca/02_neumologia/resp-18/02_patrones-intersticiales_2__cto-neumo_p80.jpg', label: 'Patrón periférico', at: 'Mira estos esquemas', credit: 'Manual CTO Neumología 14.ª ed., p. 80' }] },
          { t: 'Panal de abejas subpleural', d: 'El hallazgo clave',
            say: 'El segundo, y el más importante, es el panal de abejas: pequeños quistes apilados bajo la pleura. Es pulmón destruido y cicatrizado.' },
          { t: 'Bronquiectasias por tracción', d: 'La fibrosis tira de la vía aérea',
            say: 'El tercero son bronquiectasias y bronquiolectasias por tracción: la fibrosis se retrae y tira de los bronquios, que se dilatan.' },
          { t: 'Sin hallazgos incompatibles', d: 'Sin vidrio esmerilado extenso ni nódulos',
            say: 'Y el cuarto es lo que no aparece: no hay nódulos difusos, ni condensaciones, ni vidrio esmerilado extenso. Si aparecen, ya no es un NIU típico.' },
        ] },
        { title: 'Patrón NINE', tag: 'Conectivopatías', kind: 'normal', items: [
          { t: 'Vidrio esmerilado subpleural', d: 'Respeta el espacio subpleural inmediato',
            say: 'La NINE es otra cosa: predomina el vidrio esmerilado subpleural bilateral, y típicamente respeta la franja inmediatamente bajo la pleura. Es el patrón de la esclerodermia, el lupus y la artritis reumatoide. Mira esta tomografía: el vidrio esmerilado de la NINE, sin panal.',
            photo: { src: '_verificadas/172_resp_Fibrosis_pulmonar_idiopática__nelsontext_p3338_1.jpg', label: 'NINE: vidrio esmerilado', at: 'Mira esta tomografía', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., p. 3338' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Causas secundarias',
      title: 'Antes de decir idiopática, busca la causa',
      cards: [
        { title: 'Fármacos', tag: 'Toxicidad intersticial', kind: 'pharma', items: [
          { t: 'Amiodarona', d: 'La causa más frecuente en cardiología',
            say: 'Idiopática significa que no encontraste causa, así que primero hay que buscarla. Y la más preguntada es un fármaco: la amiodarona. Es la causa más frecuente de toxicidad pulmonar en cardiología, porque se acumula en el pulmón. Paciente con fibrilación auricular, en amiodarona, que empieza con disnea y tos seca: ahí está tu respuesta.' },
          { t: 'Metotrexato, bleomicina, nitrofurantoína', d: 'Esta última en uso crónico',
            say: 'Otros tres fármacos que debes reconocer son el metotrexato, la bleomicina y la nitrofurantoína en uso crónico. Cuando el culpable es un fármaco, el primer paso es suspenderlo.' },
        ] },
        { title: 'Otras causas', tag: 'Patrón no NIU', kind: 'normal', items: [
          { t: 'Enfermedades del tejido conectivo', d: 'Esclerodermia, lupus, artritis reumatoide',
            say: 'La segunda gran familia son las enfermedades del tejido conectivo, las que dan el patrón NINE: esclerosis sistémica, lupus y artritis reumatoide.' },
          { t: 'Neumonitis por hipersensibilidad', d: 'Otra causa secundaria a descartar',
            say: 'Y el algoritmo del libro agrega la neumonitis por hipersensibilidad como otra causa secundaria a considerar cuando el patrón no es un NIU típico.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Neumoconiosis',
      title: 'Polvos minerales: silicosis y asbestosis',
      cards: [
        { title: 'Silicosis', tag: 'Minería, canteras, arenado', kind: 'key', items: [
          { t: 'Nódulos en lóbulos superiores', d: 'Adenopatías hiliares en cáscara de huevo',
            say: 'Las neumoconiosis son enfermedades intersticiales por inhalar polvo mineral durante años. La silicosis, en minería, canteras, arenado o cerámica, da nódulos pequeños de predominio en los lóbulos superiores, con adenopatías hiliares en cáscara de huevo. Mira esta radiografía: los nódulos mal definidos arriba.',
            photo: { src: 'biblioteca/02_neumologia/resp-18/10_silicosis-cronica-rx__harrison_p2210.jpg', label: 'Silicosis crónica', at: 'Mira esta radiografía', credit: 'Harrison, Principios de Medicina Interna, p. 2210' } },
          { t: 'Más tuberculosis y cáncer', d: 'La del carbón es parecida',
            say: 'Aumenta el riesgo de tuberculosis y de cáncer de pulmón. La neumoconiosis de los mineros del carbón se parece a la silicosis.' },
        ] },
        { title: 'Asbestosis', tag: 'Asbesto', kind: 'alert', items: [
          { t: 'Fibrosis basal y placas pleurales calcificadas', d: 'Mesotelioma y cáncer, más si fuma',
            say: 'La asbestosis produce fibrosis de las bases y placas pleurales calcificadas, y aumenta el riesgo de mesotelioma y de cáncer de pulmón, sobre todo en fumadores. Y en esta TACAR, la reticulación bajo la pleura, en las bases.',
            photo: { src: 'biblioteca/02_neumologia/resp-18/11_asbestosis-tacar__harrison_p2209.jpg', label: 'Asbestosis en la TACAR', at: 'Y en esta TACAR', credit: 'Harrison, Principios de Medicina Interna, p. 2209' } },
        ] },
        { title: 'Diagnóstico y manejo', tag: 'Ley 16.744', kind: 'criteria', items: [
          { t: 'Historia ocupacional + radiografía o TACAR', d: 'Disnea de esfuerzo; espirometría restrictiva',
            say: 'La clínica es disnea de esfuerzo y tos tras años de exposición, con patrón restrictivo en la espirometría. El diagnóstico se basa en la historia ocupacional y la radiografía o la TACAR.' },
          { t: 'No hay tratamiento que revierta la fibrosis', d: 'Retirar de la exposición, tratar TBC latente',
            say: 'No existe tratamiento que revierta la fibrosis: se retira al trabajador de la exposición, se trata la tuberculosis latente, se vigila el cáncer y se deriva. Son enfermedades profesionales, Ley dieciséis mil setecientos cuarenta y cuatro.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Tratamiento',
      title: 'La trampa de los corticoides',
      nodes: [
        { id: 'fpi', col: 0, row: 1, k: 'start', t: 'Fibrosis pulmonar idiopática', s: 'Patrón NIU' },
        { id: 'cor', col: 1, row: 0, k: 'trap', t: 'Corticoides + azatioprina', s: 'Lo que se hacía antes' },
        { id: 'pan', col: 2, row: 0, k: 'alert', t: 'Estudio PANTHER', s: 'Aumentó la mortalidad' },
        { id: 'afb', col: 1, row: 2, k: 'good', t: 'Antifibróticos', s: 'Pirfenidona o nintedanib' },
        { id: 'cvf', col: 2, row: 2, k: 'effect', t: 'Frenan la caída de la CVF', s: 'Y reducen exacerbaciones' },
        { id: 'nin', col: 3, row: 1, k: 'refer', t: 'NINE: inmunosupresión', s: 'Sí responde a corticoides' },
      ],
      edges: [
        { from: 'fpi', to: 'cor', label: 'antes' }, { from: 'cor', to: 'pan' },
        { from: 'fpi', to: 'afb', label: 'hoy' }, { from: 'afb', to: 'cvf' },
      ],
      steps: [
        { show: ['fpi'], note: 'El tratamiento depende del patrón',
          say: 'Ahora el tratamiento, que es donde el examen pone su trampa más clásica. Tienes una fibrosis pulmonar idiopática con patrón NIU.' },
        { show: ['cor'], note: 'La intuición dice inflamación, pero no',
          say: 'La intuición dice: es una enfermedad del pulmón, démosle corticoides. Y durante años se usó la combinación de corticoides con azatioprina.' },
        { show: ['pan'], note: 'Los corticoides están contraindicados',
          say: 'Pero el estudio PANTHER mostró que esa combinación aumentaba la mortalidad. Por eso, en la fibrosis pulmonar idiopática, los corticoides están contraindicados. Si ves prednisona como respuesta en una FPI, descártala.' },
        { show: ['afb'], note: 'El tratamiento actual',
          say: 'El tratamiento actual son los antifibróticos: pirfenidona o nintedanib.' },
        { show: ['cvf'], note: 'No curan: enlentecen',
          say: 'Ojo con lo que hacen: no revierten la fibrosis, la frenan. Enlentecen la caída de la capacidad vital forzada y reducen las exacerbaciones agudas.' },
        { show: ['nin'], note: 'El contraste que se pregunta',
          say: 'Y el contraste: la NINE de las conectivopatías sí responde a los corticoides y a inmunosupresores como el micofenolato o la azatioprina. El mismo fármaco sirve en un patrón y daña en el otro. Por eso el patrón manda.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Prevención',
      title: 'Cuidar el pulmón del polvo y del humo',
      cards: [
        { title: 'En el trabajo', tag: 'Jerarquía', kind: 'key', items: [
          { t: 'Eliminar o sustituir el agente', d: 'Se prohíbe el asbesto',
            say: 'La prevención sigue un orden: primero eliminar o sustituir el agente, y se prohíbe el asbesto. Después controlar el polvo en la fuente, humedeciendo, ventilando y extrayendo localizado.' },
          { t: 'Mascarillas al final', d: 'Vigilancia con espirometría y radiografía',
            say: 'Los respiradores van al final de la lista. Y a los expuestos a sílice, asbesto o carbón se les hace vigilancia médica periódica con espirometría y radiografía.' },
        ] },
        { title: 'En el hogar', tag: 'Inhalantes domésticos', kind: 'criteria', items: [
          { t: 'No leña ni parafina sin ventilación', d: 'Evitar humo de tabaco ajeno',
            say: 'En la casa: no usar leña ni parafina sin ventilación, evitar el humo de tabaco ajeno, controlar la humedad y los mohos, y ventilar cuando se usan aerosoles, pinturas y solventes.' },
        ] },
        { title: 'Otras enfermedades por inhalantes', tag: 'No solo fibrosis', kind: 'alert', items: [
          { t: 'Asma ocupacional, neumonitis por hipersensibilidad, EPOC', d: 'Pulmón del granjero o de las aves',
            say: 'Los inhalantes domésticos y laborales causan además asma ocupacional, neumonitis por hipersensibilidad, como el pulmón del granjero o de los criadores de aves, y EPOC.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Desde las bases',
      images: [
        { src: 'animaciones/resp-18/A1_fibrosis_bases.mp4', label: 'Fibrosis pulmonar', credit: 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Panal de abejas',
          say: 'La fibrosis pulmonar idiopática parte en las bases y bajo la pleura, y avanza con quistes en panal de abejas. Es un hombre mayor de sesenta, con disnea progresiva y crépitos tipo velcro. Con un patrón NIU definitivo no se necesita biopsia.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'NIU vs NINE',
      head: ['Característica', 'NIU (FPI)', 'NINE (conectivopatías)'],
      rows: [
        { cells: ['Paciente típico', 'Hombre > 60–65 años, fumador', 'Mujer joven a madura, no fumadora'],
          say: 'Repasemos con la tabla. El paciente con NIU suele ser un hombre mayor de sesenta a sesenta y cinco años, fumador. El de la NINE, una mujer más joven, no fumadora.' },
        { cells: ['Hallazgo en TACAR', 'Panal de abejas + tracción', 'Vidrio esmerilado homogéneo'],
          say: 'En el scanner, el NIU es panal de abejas con bronquiectasias por tracción; la NINE, vidrio esmerilado.' },
        { cells: ['Zona subpleural', 'Comprometida', 'Típicamente respetada'],
          say: 'El NIU compromete justo bajo la pleura; la NINE típicamente la respeta.' },
        { cells: ['Corticoides', 'Contraindicados (dañan)', 'Respuesta favorable'],
          say: 'Y lo más preguntado: en el NIU los corticoides están contraindicados; en la NINE, responden bien.' },
        { cells: ['Tratamiento', 'Pirfenidona o nintedanib', 'Micofenolato, azatioprina'],
          say: 'Por eso el NIU se trata con antifibróticos, y la NINE con inmunosupresión.' },
        { cells: ['NIU definitivo > 60 años', 'Diagnóstico sin biopsia', 'Error: pedir biopsia'],
          say: 'Y una trampa de conducta: con un NIU definitivo en un mayor de sesenta, pedir biopsia pulmonar es innecesario.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 68 años con disnea de esfuerzo lentamente progresiva desde hace 1 año y tos seca. SatO2 91 % ambiental, acropaquia y crépitos secos teleinspiratorios bibasales tipo velcro. La TACAR muestra reticulación subpleural y múltiples quistes en panal de abejas bibasales, sin vidrio esmerilado.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Biopsia pulmonar quirúrgica para confirmar el diagnóstico' },
        { letter: 'B', text: 'Prednisona 1 mg/kg/día' },
        { letter: 'C', text: 'Prednisona más azatioprina' },
        { letter: 'D', text: 'Iniciar antifibrótico (pirfenidona o nintedanib)' },
        { letter: 'E', text: 'Broncodilatadores de acción prolongada' },
      ],
      correct: 'D',
      explanation: 'Clínica típica y patrón NIU definitivo en mayor de 60 años: fibrosis pulmonar idiopática sin necesidad de biopsia. Los corticoides (solos o con azatioprina) están contraindicados porque aumentan la mortalidad; se indican antifibróticos.',
      say: {
        stem: 'Vamos a un caso. Hombre de sesenta y ocho años, con un año de disnea de esfuerzo que avanza lento, y tos seca. Satura noventa y uno, tiene acropaquia y crépitos secos en ambas bases, como un velcro. La TACAR muestra reticulación subpleural y quistes en panal de abejas en las bases, sin vidrio esmerilado.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: biopsia quirúrgica, prednisona sola, prednisona con azatioprina, un antifibrótico, o broncodilatadores. Piénsalo.',
        answer: 'Es la D. La clínica y el patrón NIU definitivo en un mayor de sesenta hacen el diagnóstico de fibrosis pulmonar idiopática, sin biopsia; por eso cae la A. Y la B y la C son la trampa de siempre: los corticoides, solos o con azatioprina, aumentan la mortalidad en la FPI. Lo que corresponde es pirfenidona o nintedanib.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 38',
      stem: 'Una paciente de 58 años, hipertensa, en tratamiento con enalapril e hidroclorotiazida, consulta por un cuadro de 2 años de evolución de disnea progresiva, que ha aumentado en el último tiempo, volviéndose de pequeños esfuerzos. Además, refiere expectoración mucosa, que suele ser mayor en las mañanas. Evita realizar actividad física, transportar carga y subir escaleras, debido a la disnea. Como antecedente, fumó 4 cigarrillos al día, hasta hace un año. En el examen físico, tiene frecuencia cardíaca: 86 lpm, presión arterial: 120/70 mmHg, frecuencia respiratoria basal: 15 rpm, saturación arterial de oxígeno: 93% a FiO2 ambiental. La auscultación cardíaca muestra ritmo regular en dos tiempos, sin presencia de soplos y la auscultación pulmonar muestra murmullo pulmonar presente, disminuido de manera global, con presencia de crepitaciones bilaterales. Además, tiene hipocratismo digital. Se solicita una radiografía de tórax, que se muestra a continuación (fuente: Radiopaedia):',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Asma alérgica' },
        { letter: 'B', text: 'Enfermedad pulmonar obstructiva crónica' },
        { letter: 'C', text: 'Bronquitis crónica por cigarrillo' },
        { letter: 'D', text: 'Fibrosis pulmonar idiopática' },
        { letter: 'E', text: 'Insuficiencia cardíaca congestiva' },
      ],
      correct: 'D',
      explanation: 'Disnea progresiva de años, crepitaciones bilaterales e hipocratismo digital en una paciente con tabaquismo mínimo: fibrosis pulmonar idiopática. El EPOC y la bronquitis crónica no explican la acropaquia ni las crepitaciones, y el consumo de tabaco es muy bajo.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil veinticuatro. Mujer de cincuenta y ocho años, hipertensa, con dos años de disnea que avanza hasta ser de pequeños esfuerzos, y algo de expectoración matinal. Fumó apenas cuatro cigarrillos al día. Satura noventa y tres, tiene crepitaciones bilaterales e hipocratismo digital. La radiografía original no la tenemos, pero la clínica basta.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: asma alérgica, EPOC, bronquitis crónica por cigarrillo, fibrosis pulmonar idiopática, o insuficiencia cardíaca. Piénsalo.',
        answer: 'Es la D. Disnea progresiva de años, crepitaciones bilaterales y acropaquia es la foto de la fibrosis. El distractor es la bronquitis crónica, porque el enunciado mete expectoración y tabaco a propósito; pero cuatro cigarrillos al día no alcanzan para un EPOC, y ni el EPOC ni la bronquitis dan acropaquia. Cuando veas acropaquia con crépitos, piensa en el intersticio.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 106',
      stem: 'Una paciente de 68 años, con antecedente de hipertensión y cardiopatía hipertensiva, en tratamiento con losartán y clortalidona, que, además, tiene fibrilación auricular crónica, en tratamiento con amiodarona y rivaroxabán, consulta por un cuadro de disnea progresiva que se ha instalado en los últimos meses, que actualmente es de medianos esfuerzos y se asocia a tos seca, mayor en la noche. Al examen físico tiene pulso regular a 74x’, PA: 130/80 mmHg, examen pulmonar con crepitaciones bilaterales, examen cardiaco: RR2T sin soplos, con abdomen y extremidades sin alteraciones. Se solicita radiografía de tórax, que se muestra a continuación (fuente: Radiopaedia):',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar salbutamol' },
        { letter: 'B', text: 'Agregar espironolactona' },
        { letter: 'C', text: 'Suspender el rivaroxabán' },
        { letter: 'D', text: 'Suspender la amiodarona' },
        { letter: 'E', text: 'Agregar furosemida' },
      ],
      correct: 'D',
      explanation: 'Disnea progresiva de meses, tos seca y crepitaciones bilaterales en usuaria de amiodarona, sin signos de congestión: toxicidad pulmonar intersticial por amiodarona. La conducta es suspender el fármaco.',
      say: {
        stem: 'Otra real, del EUNACOM de diciembre de dos mil veintidós. Mujer de sesenta y ocho años, hipertensa, con fibrilación auricular en tratamiento con amiodarona y rivaroxabán. Lleva meses con disnea progresiva, ya de medianos esfuerzos, y tos seca. Tiene crepitaciones bilaterales, pero el corazón, el abdomen y las extremidades están normales. La radiografía tampoco la tenemos.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: salbutamol, agregar espironolactona, suspender el rivaroxabán, suspender la amiodarona, o agregar furosemida. Piénsalo.',
        answer: 'Es la D. Disnea progresiva con tos seca y crepitaciones en una usuaria de amiodarona es toxicidad pulmonar por amiodarona, y lo primero es suspenderla. El distractor tentador es la furosemida, porque es cardiópata y tiene crépitos; pero no hay edema ni otros signos de congestión, y la tos seca de meses apunta al intersticio.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2015 · Pregunta 137",
      "stem": "Un paciente de 67 años, fumador de 15 paquetes-año que dejó de fumar hace 10 años, jubilado de la minería, consulta por disnea de esfuerzos progresiva de 6 meses de evolución, asociada a tos. Al examen físico presenta murmullo pulmonar globalmente disminuido, sibilancias y roncus bilaterales, asociados a crepitaciones difusas. La radiografía de tórax muestra infiltrados bilaterales, mayores en las zonas centrales, con imágenes verticales onduladas de 1 a 2 cm en ambos campos pulmonares.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Bronquitis crónica"
        },
        {
          "letter": "B",
          "text": "Neumoconiosis"
        },
        {
          "letter": "C",
          "text": "Cáncer de pulmón"
        },
        {
          "letter": "D",
          "text": "Limitación crónica del flujo aéreo"
        },
        {
          "letter": "E",
          "text": "Fibrosis pulmonar idiopática"
        }
      ],
      "correct": "B",
      "explanation": "El antecedente laboral en la minería, con disnea progresiva y compromiso intersticial bilateral de predominio central y superior, orienta a neumoconiosis, en Chile principalmente silicosis. La fibrosis pulmonar idiopática compromete las bases y la periferia, y el tabaquismo leve y antiguo no explica el cuadro.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil quince. Un hombre de sesenta y siete años, jubilado de la minería y exfumador leve, tiene seis meses de disnea progresiva y tos, con sibilancias y crepitaciones difusas. La radiografía muestra infiltrados bilaterales de predominio central.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: bronquitis crónica, neumoconiosis, cáncer de pulmón, limitación crónica del flujo aéreo o fibrosis pulmonar idiopática. Piénsalo.",
        "answer": "Es la B, neumoconiosis. El dato clave es la minería: en Chile eso es sílice, y da compromiso intersticial de predominio central y superior. La fibrosis pulmonar idiopática tienta por las crepitaciones, pero compromete las bases y la periferia, y aquí hay una exposición que lo explica."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.05.3.002 · Prevención de daño pulmonar por inhalantes domésticos y laborales",
      "stem": "Un hombre de 50 años trabaja hace 20 años en una mina subterránea perforando roca sin protección respiratoria. Presenta disnea progresiva. La radiografía muestra múltiples nódulos pequeños en lóbulos superiores y adenopatías hiliares con calcificación 'en cáscara de huevo'.",
      "question": "¿Cuál es la medida más importante para prevenir esta enfermedad en los demás trabajadores?",
      "options": [
        {
          "letter": "A",
          "text": "Antibióticos profilácticos"
        },
        {
          "letter": "B",
          "text": "Corticoides inhalados preventivos"
        },
        {
          "letter": "C",
          "text": "Vacunación BCG anual"
        },
        {
          "letter": "D",
          "text": "Control de la exposición (técnicas húmedas y ventilación), protección respiratoria certificada y vigilancia médica con radiografía periódica"
        },
        {
          "letter": "E",
          "text": "Suplementos de vitamina D"
        }
      ],
      "correct": "D",
      "explanation": "La silicosis es una neumoconiosis por inhalación de sílice cristalina, sin tratamiento curativo, que predispone a tuberculosis y cáncer pulmonar. Se previene controlando la exposición (técnicas húmedas, ventilación, encierro de procesos), con protección respiratoria adecuada y vigilancia ocupacional con radiografía periódica. Debe notificarse como enfermedad profesional.",
      "say": {
        "stem": "Un minero subterráneo de cincuenta años, sin protección respiratoria por veinte años, tiene disnea progresiva, nódulos pequeños en lóbulos superiores y ganglios hiliares calcificados en cáscara de huevo.",
        "question": "¿Cuál es la medida más importante para prevenir esta enfermedad en sus compañeros?",
        "options": "Las opciones: antibióticos profilácticos, corticoides inhalados, BCG anual, control de la exposición con protección respiratoria y vigilancia radiológica o vitamina D. Piénsalo.",
        "answer": "Es la D. La silicosis no tiene cura, así que se previene controlando la exposición al polvo de sílice y vigilando a los trabajadores. La BCG tienta porque la silicosis predispone a tuberculosis, pero no previene la silicosis."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Reconocer', tag: 'Clínica', kind: 'key', items: [
          { t: 'Velcro + acropaquia', d: 'Con disnea progresiva y tos seca',
            say: 'Cerremos con las reglas de oro. Disnea de esfuerzo progresiva, tos seca, crépitos tipo velcro en las bases y acropaquia: enfermedad intersticial, y en el mayor de sesenta, fibrosis pulmonar idiopática.' },
          { t: 'TACAR: NIU = FPI', d: 'Sin biopsia si es típico y > 60 años',
            say: 'El examen de elección es la TACAR. Panal de abejas subpleural basal es patrón NIU, y si es definitivo en un mayor de sesenta, no hace falta biopsia.' },
        ] },
        { title: 'Tratar', tag: 'La trampa', kind: 'alert', items: [
          { t: 'FPI: corticoides contraindicados', d: 'Aumentan la mortalidad',
            say: 'En la FPI los corticoides están contraindicados, porque aumentan la mortalidad.' },
          { t: 'Pirfenidona o nintedanib', d: 'Frenan la caída de la CVF',
            say: 'Se trata con pirfenidona o nintedanib, que frenan la caída de la capacidad vital forzada.' },
        ] },
        { title: 'Buscar la causa', tag: 'Antes de decir idiopática', kind: 'pharma', items: [
          { t: 'Amiodarona: suspender', d: 'También metotrexato, bleomicina, nitrofurantoína',
            say: 'Y antes de decir idiopática, busca la causa: si el paciente usa amiodarona, suspéndela. Si te llevas una sola idea de hoy: el patrón de la TACAR manda, y en el NIU los corticoides no se usan. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Enfermedad intersticial: el patrón manda',
    root: N('start', 'Disnea progresiva + tos seca', 'Crépitos velcro, acropaquia',
      'Paciente con disnea de esfuerzo que avanza en meses, tos seca, crépitos tipo velcro en las bases y acropaquia. Sospechas una enfermedad intersticial.',
      ['', N('q', '¿Usa un fármaco tóxico?', 'Amiodarona, metotrexato, bleomicina',
        'Antes de llamarla idiopática, pregunta por fármacos que dañan el intersticio.',
        ['Sí', N('do', 'Suspender el fármaco', 'Amiodarona, metotrexato, bleomicina',
          'Si usa amiodarona u otro fármaco tóxico para el pulmón, lo primero es suspenderlo.')],
        ['No', N('q', 'TACAR: ¿qué patrón?', 'Examen de elección',
          'Si no hay causa evidente, la TACAR sin contraste define el patrón.',
          ['NIU', N('alert', 'FPI: antifibróticos', 'Pirfenidona o nintedanib · sin corticoides',
            'Panal de abejas subpleural basal con bronquiectasias por tracción: patrón NIU, fibrosis pulmonar idiopática, sin biopsia en el mayor de sesenta. Se trata con pirfenidona o nintedanib; los corticoides están contraindicados.')],
          ['NINE', N('refer', 'Buscar conectivopatía', 'Inmunosupresión',
            'Vidrio esmerilado que respeta la zona subpleural: patrón NINE. Busca una conectivopatía; aquí sí responden los corticoides e inmunosupresores.')])])]),
  },
};
