// Clase 13.2 (Urología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_urologia.cjs (uro-02). Preguntas: banco real EUNACOM (class_questions.cjs --search).
// Preguntas reales de la clase: Julio 2025 P19, Diciembre 2025 P5, Diciembre 2019 P90. Julio 2015 P43 y Agosto 2021 P61 (trauma de uretra)
// ya las usa trauma-05 y no se repiten; el trauma de uretra se enseña desde el libro.
// Se descartó Diciembre 2022 P66 (RTU previa, sonda que no pasa, globo vesical): su clave marca ecografía pélvica,
// mientras Enero 2023 P142 (mismo escenario, sin globo) marca uretrografía retrógrada; las dos claves no son coherentes entre sí.
// El banco real no tiene preguntas sobre diuresis postobstructiva: se usa la pregunta del libro como "Caso representativo".
// Imagen: Bailey & Love 27.ª ed., Fig. 78.12 (caption ubicado junto a la figura 78.11; la imagen del TAC es la segunda del par).
// Fotos del atlas (18-10-2026): Bailey & Love Fig. 78.9 (residuo), 79.9 (estenosis bulbar) y 14.28 (extravasación en fractura pélvica).
// Contenido nuevo del libro (secciones 4 y 5 de uro-02: hidronefrosis, nefrostomía, técnica de cistostomía, cistostomía abierta,
// estenosis uretral, uretrografía) en dos diapositivas: "La cistostomía, paso a paso" y "Estenosis uretral e hidronefrosis".
// En movimiento: scenes/uro.html (?v=foley, ?v=cistostomia) sobre Blausen "Male Pelvic Muscles", CC BY 3.0.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'uro-02',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Retención aguda de orina: sonda Foley o cistostomía, y qué vigilar al descomprimir',
      say: 'Bienvenido. Hoy vemos la retención aguda de orina, una urgencia dolorosa que se resuelve con una decisión sencilla pero que se pregunta mucho: sonda Foley o cistostomía suprapúbica. La clave está en una sola pregunta que debes hacerte antes de tocar la uretra: ¿hay sospecha de trauma uretral?',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'De la obstrucción a la retención',
      nodes: [
        { id: 'h', col: 0, row: 0, k: 'cause', t: 'Hiperplasia prostática', s: 'La causa más frecuente en el adulto mayor' },
        { id: 'f', col: 0, row: 2, k: 'cause', t: 'Fármacos', s: 'Anticolinérgicos, opiáceos, alcohol' },
        { id: 'r', col: 1, row: 1, k: 'mech', t: 'La vejiga no se vacía', s: 'Se llena sin salida' },
        { id: 'g', col: 2, row: 1, k: 'effect', t: 'Dolor y globo vesical', s: 'Masa mate sobre el pubis' },
        { id: 'b', col: 3, row: 0, k: 'risk', t: 'Incontinencia por rebalse', s: 'En el adulto mayor' },
        { id: 'k', col: 3, row: 2, k: 'alert', t: 'Daño renal', s: 'Si se mantiene la obstrucción' },
        { id: 'd', col: 4, row: 1, k: 'good', t: 'Descomprimir', s: 'Calma el dolor y protege el riñón' },
      ],
      edges: [
        { from: 'h', to: 'r' },
        { from: 'f', to: 'r', label: 'la descompensan' },
        { from: 'r', to: 'g' },
        { from: 'g', to: 'b' },
        { from: 'g', to: 'k' },
        { from: 'k', to: 'd', label: 'urgente' },
      ],
      steps: [
        { show: ['h', 'f', 'r'], note: 'Una próstata grande, descompensada',
          say: 'La retención aguda de orina es la incapacidad súbita de vaciar una vejiga llena. En el hombre mayor, la causa más frecuente es la hiperplasia prostática, y muchas veces la descompensa un fármaco: un anticolinérgico, un antihistamínico como la clorfenamina, un descongestionante, un opiáceo o el alcohol.' },
        { show: ['g'], note: 'El globo vesical se palpa',
          say: 'El paciente llega con dolor intenso en el hipogastrio, agitado y sudoroso. Y al examen palpas el globo vesical: una masa convexa, dolorosa y mate a la percusión, que sobrepasa el pubis.' },
        { show: ['b', 'k'], note: 'Rebalse y daño renal',
          say: 'En el adulto mayor o en el paciente con vejiga neurógena puede verse como incontinencia por rebalse, que es el escape de orina de una vejiga que está llena. Y si la obstrucción se mantiene, se compromete el riñón.' },
        { show: ['d'], note: 'Descomprimir de inmediato',
          say: 'Por eso la retención aguda es una urgencia, y el tratamiento es descomprimir la vejiga. La pregunta es con qué técnica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Causas',
      title: 'Por qué se retiene la orina',
      cards: [
        { title: 'Mecánicas', tag: 'Obstáculo', kind: 'key', items: [
          { t: 'Próstata: HPB o cáncer', d: 'Comprimen la uretra',
            say: 'Las causas mecánicas son las que bloquean el paso: la hiperplasia prostática y el cáncer de próstata.' },
          { t: 'Cálculo, coágulos o estenosis', d: 'Obstruyen el trayecto de la uretra',
            say: 'También un cálculo enclavado en la uretra, los coágulos dentro de la vejiga y las estenosis uretrales.' },
        ] },
        { title: 'Neurológicas y fármacos', tag: 'Detrusor y esfínter', kind: 'alert', items: [
          { t: 'Vejiga neurógena, shock espinal', d: 'Falla el control del vaciado',
            say: 'Las causas neurológicas son la vejiga neurógena y el shock espinal, donde el músculo no se contrae.' },
          { t: 'Anticolinérgicos y opiáceos', d: 'También antihistamínicos y descongestionantes',
            say: 'Y los fármacos: anticolinérgicos, antihistamínicos de primera generación, descongestionantes simpaticomiméticos y opiáceos. Un resfrío tratado con clorfenamina puede ser la gota que rebasa el vaso en un hombre con la próstata grande.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Elección de técnica',
      title: 'Foley o cistostomía: la pregunta clave',
      nodes: [
        { id: 's', col: 0, row: 1, k: 'start', t: 'Retención aguda con globo', s: 'Hay que descomprimir' },
        { id: 'q', col: 1, row: 1, k: 'q', t: '¿Sospecha de trauma uretral?', s: 'Sangre, hematoma, pelvis' },
        { id: 'n', col: 2, row: 0, k: 'good', t: 'Sonda Foley', s: '16 a 18 French' },
        { id: 'y', col: 2, row: 2, k: 'alert', t: 'Cistostomía suprapúbica', s: 'Por punción, sin pasar por la uretra' },
        { id: 'x', col: 3, row: 1, k: 'trap', t: 'No se sonda a ciegas', s: 'Puede cortar una uretra desgarrada' },
      ],
      edges: [
        { from: 's', to: 'q' },
        { from: 'q', to: 'n', label: 'no' },
        { from: 'q', to: 'y', label: 'sí' },
        { from: 'y', to: 'x' },
      ],
      steps: [
        { show: ['s', 'q'], note: 'Antes de sondar, pregunta',
          say: 'Antes de pasar cualquier sonda, busca señales de lesión de la uretra: sangre en el meato, que es la uretrorragia, un hematoma escrotal o perineal, o una fractura de pelvis.' },
        { show: ['n'], note: 'Sin trauma: sonda Foley',
          say: 'Si no hay trauma, la primera elección es la sonda Foley transuretral. Es la técnica más simple, y calma el dolor y protege el riñón.' },
        { show: ['y', 'x'], note: 'Con trauma: cistostomía',
          say: 'Si hay sospecha de lesión uretral, la sonda está contraindicada, porque al pasarla a ciegas puedes convertir un desgarro parcial en una sección completa. Se descomprime por la vía suprapúbica, con una cistostomía.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Técnica',
      title: 'Cómo se pasa bien una sonda Foley',
      cards: [
        { title: 'Paso a paso', tag: 'Foley', kind: 'key', items: [
          { t: 'Calibre 16 a 18 French', d: 'Con lidocaína jalea al 2%',
            say: 'La sonda Foley de dieciséis a dieciocho French se pasa con técnica estéril, y la uretra se lubrica generosamente con lidocaína en jalea al dos por ciento.' },
          { t: 'Avanza con suavidad', d: 'Sin forzar la sonda',
            say: 'Se avanza con suavidad. Si sientes un tope, no empujes: ahí es donde se produce una falsa vía.' },
          { t: 'Confirma orina antes de inflar', d: 'Balón con agua bidestilada',
            say: 'Y la regla de oro: antes de inflar el balón tiene que salir orina por la sonda. Se infla con agua bidestilada, no con aire ni suero fisiológico.' },
        ] },
        { title: 'Qué sale mal', tag: 'Complicaciones', kind: 'alert', items: [
          { t: 'Inflar sin ver orina', d: 'Desgarra la uretra',
            say: 'Si inflas el balón dentro de la uretra, antes de ver orina, desgarras la mucosa. Hay dolor intenso y sangrado.' },
          { t: 'Falsa vía o infección', d: 'Si falla, cistostomía',
            say: 'Las complicaciones tempranas son la falsa vía, la uretrorragia y la infección. Si el cateterismo fracasa y hay globo vesical, la salida es la cistostomía suprapúbica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cistostomía suprapúbica',
      title: 'Cuándo se hace cistostomía',
      cards: [
        { title: 'Tres indicaciones', tag: 'Por punción', kind: 'alert', items: [
          { t: 'Trauma uretral', d: 'Uretrorragia, hematoma perineal, pelvis rota',
            say: 'La primera y más preguntada: sospecha o confirmación de trauma uretral. Sangre en el meato, hematoma escrotal o perineal en mariposa, o fractura de pelvis.' },
          { t: 'Sonda imposible', d: 'Estenosis severa o falsa vía',
            say: 'La segunda: no se puede pasar la sonda, por una estenosis uretral severa o una falsa vía.' },
          { t: 'Prostatitis aguda grave', d: 'La sonda duele y puede dar bacteriemia',
            say: 'Y la tercera, una prostatitis aguda bacteriana grave con retención, donde sondar es muy doloroso y puede producir bacteriemia.' },
        ] },
        { title: 'La técnica', tag: 'Cystofix', kind: 'key', items: [
          { t: 'Trocar de 10 a 14 French', d: 'Sobre el pubis, con globo palpable',
            say: 'Se punciona sobre el pubis con un trocar de diez a catorce French. Necesitas un globo vesical palpable: sin globo, se podría puncionar el intestino.' },
          { t: 'Estudio de la uretra después', d: 'Uretrocistografía retrógrada',
            say: 'Si fue por trauma, la uretra se estudia después con una uretrocistografía retrógrada, y se repara con cirugía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cistostomía por punción',
      title: 'La cistostomía, paso a paso',
      cards: [
        { title: 'La técnica', tag: 'La realizas tú', kind: 'key', items: [
          { t: 'Confirma el globo', d: 'Palpable y mate, o vejiga llena en la eco',
            say: 'Primero confirmas que la vejiga está llena: un globo palpable y mate, o una vejiga distendida en la ecografía. Mira esta ecografía tomada después de orinar: la zona oscura, sin ecos, es orina que quedó dentro. Con el paciente en decúbito dorsal, haces la asepsia.',
            photo: { src: 'biblioteca/19_urologia/uro-02/02_ecografia-residuo-postmiccional-grande__bailey-love_p1481.jpg', label: 'Ecografía: gran residuo', at: 'Mira esta ecografía', credit: 'Bailey & Love 27.ª ed., Fig. 78.9' } },
          { t: 'Lidocaína al 2 %, línea media', d: '2 a 3 cm sobre la sínfisis del pubis',
            say: 'Anestesias con lidocaína al dos por ciento en la línea media, dos a tres centímetros sobre la sínfisis del pubis.' },
          { t: 'Punciona y aspira orina', d: 'Perpendicular, levemente hacia caudal',
            say: 'Puncionas perpendicular a la piel, levemente hacia caudal, y aspiras: si sale orina, estás en la vejiga. Avanzas el trócar, retiras el mandril, pasas la sonda, la fijas con el balón o con un punto y la conectas a la bolsa.' },
        ] },
        { title: 'Cuándo no puncionar', tag: 'Contraindicaciones', kind: 'alert', items: [
          { t: 'Vejiga no distendida', d: 'O cirugía abdominal baja previa',
            say: 'No se punciona si la vejiga no está distendida, ni si hubo una cirugía abdominal baja, porque las asas pueden estar pegadas a la pared y perforarías el intestino.' },
          { t: 'Coagulopatía o tumor vesical', d: 'Riesgos: hematuria, perforación, infección',
            say: 'Tampoco con una coagulopatía no corregida o si sospechas un tumor de vejiga. Las complicaciones son la hematuria, la perforación intestinal, la falsa vía y la infección.' },
          { t: 'Si no se puede: cistostomía abierta', d: 'La hace el urólogo: tú derivas',
            say: 'Cuando la punción está contraindicada o fracasa, se deriva para una cistostomía abierta, que hace el urólogo en pabellón. Y la sonda de cistostomía se cambia cada cuatro a seis semanas.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Comparación',
      title: 'Foley contra cistostomía',
      head: ['Parámetro', 'Sonda Foley', 'Cistostomía suprapúbica'],
      rows: [
        { cells: ['Indicación', 'HPB, fármacos, funcional, sin trauma', 'Trauma, estenosis, prostatitis grave'],
          say: 'La sonda Foley es para la retención por hiperplasia, por fármacos o funcional, sin trauma. La cistostomía, para el trauma uretral, la estenosis infranqueable y la prostatitis bacteriana aguda.' },
        { cells: ['Contraindicación', 'Sospecha de lesión uretral', 'Sin globo palpable'],
          say: 'La contraindicación de la Foley es la sospecha de lesión uretral. La de la cistostomía es que no haya globo vesical palpable, porque aumenta el riesgo de puncionar el intestino.' },
        { cells: ['Calibre', '16 a 18 French', '10 a 14 French'],
          say: 'El calibre es de dieciséis a dieciocho French en la Foley, y de diez a catorce en la cistostomía.' },
        { cells: ['Complicaciones', 'Falsa vía, uretrorragia, infección', 'Punción intestinal, hematoma de pared'],
          say: 'La Foley puede dar falsa vía, sangrado e infección. La cistostomía, punción intestinal, si no hay globo, y hematoma de la pared abdominal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Después de descomprimir',
      title: 'Lo que pasa al vaciar la vejiga',
      cards: [
        { title: 'Cómo descomprimir', tag: 'Continuo', kind: 'key', items: [
          { t: 'Completa y sin clampeo', d: 'El clampeo intermitente está obsoleto',
            say: 'La descompresión debe ser continua y completa. La antigua práctica de clampear la sonda para evitar la hematuria ex vacuo o un colapso fue desmentida por la evidencia: el clampeo solo prolonga el dolor.' },
          { t: 'Todos van a urología', d: 'Para estudiar la causa',
            say: 'Y todo paciente con retención aguda de orina se deriva a urología para estudiar la causa.' },
        ] },
        { title: 'Diuresis postobstructiva', tag: 'Vigilar', kind: 'alert', items: [
          { t: 'Más de 1.000 mL al sondar', d: 'Se observa al paciente',
            say: 'Si al descomprimir salen más de mil mililitros, el paciente debe quedar en observación, y se anota el volumen evacuado.' },
          { t: 'Poliuria, hipovolemia, hipokalemia', d: 'Se pierde el gradiente medular',
            say: 'El riesgo es la diuresis postobstructiva: el riñón pierde transitoriamente su gradiente medular, y el paciente orina muchísimo. Puede caer en hipovolemia y en hipokalemia severas.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Foley o cistostomía',
      images: [
        { src: 'animaciones/uro-02/A1_retencion_sonda_foley.mp4', label: 'Retención por hiperplasia: sonda Foley', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
        { src: 'animaciones/uro-02/A2_trauma_uretral_cistostomia.mp4', label: 'Trauma uretral: cistostomía por punción', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Sin trauma: primero orina, después el balón',
          say: 'Mira la próstata: al crecer estrecha la uretra, y la vejiga no logra vaciarse. Se distiende y forma el globo vesical, que sobrepasa el pubis. Sin trauma, pasas una sonda Foley lubricada con lidocaína, sin forzar. Primero tiene que salir orina, y recién entonces inflas el balón con agua bidestilada. Si salen más de mil mililitros, vigila la diuresis postobstructiva.' },
        { note: 'Con trauma: se punciona sobre el pubis',
          say: 'Ahora es un trauma: fractura de pelvis, hematoma perineal y sangre en el meato, porque la uretra está desgarrada. Si pasas la sonda a ciegas, un desgarro parcial puede volverse una sección completa. Por eso la vejiga se punciona por arriba, en la línea media, dos a tres centímetros sobre el pubis, y solo con globo palpable. Después se estudia la uretra con uretrocistografía retrógrada.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Otras obstrucciones',
      title: 'Estenosis uretral e hidronefrosis',
      cards: [
        { title: 'Estenosis uretral', tag: 'Varón joven', kind: 'alert', items: [
          { t: 'Chorro fino, residuo, ITU a repetición', d: 'Tras uretritis, sondeos, trauma perineal o de pelvis',
            say: 'Sospecha una estenosis uretral en el hombre con chorro fino y débil, esfuerzo para orinar, residuo o infecciones urinarias a repetición, con antecedente de uretritis gonocócica, sondeos, trauma perineal o fractura de pelvis. Es la causa de retención en el hombre joven con la próstata pequeña.' },
          { t: 'Uretrografía: sitio y largo', d: 'Uroflujometría con flujo bajo y aplanado',
            say: 'La uroflujometría muestra un flujo bajo y aplanado, y la uretrografía muestra dónde está la estrechez y cuánto mide. Mira esta uretrografía ascendente: en la uretra bulbar hay un segmento estrecho, la estenosis. Y en esta otra, tras una fractura de pelvis, el contraste se escapa fuera de la uretra. Por eso, en el trauma, la uretrografía se pide antes de pasar cualquier sonda.',
            photos: [
              { src: 'biblioteca/19_urologia/uro-02/03_uretrografia-ascendente-estenosis-uretra-bulbar__bailey-love_p1504.jpg', label: 'Estenosis uretra bulbar', at: 'Mira esta uretrografía ascendente', credit: 'Bailey & Love 27.ª ed., Fig. 79.9' },
              { src: 'biblioteca/19_urologia/uro-02/04_uretrografia-retrograda-extravasacion-fractura-pelvica__bailey-love_p227.jpg', label: 'Contraste fuera de la uretra', at: 'Y en esta otra', credit: 'Bailey & Love 27.ª ed., Fig. 14.28' },
            ] },
          { t: 'Con retención: cistostomía', d: 'Sin sondeos ciegos; el urólogo dilata o hace uretrotomía',
            say: 'Si hay retención, descomprimes con una cistostomía y evitas los sondeos ciegos repetidos. El urólogo hace la dilatación o la uretrotomía interna, y la uretroplastia en las estenosis largas o que recidivan.' },
        ] },
        { title: 'Hidronefrosis', tag: 'Ecografía renal', kind: 'key', items: [
          { t: 'Pelvis y cálices dilatados', d: 'Sospecha: retención, cólico o creatinina alta',
            say: 'La hidronefrosis es la dilatación de la pelvis y los cálices del riñón por una obstrucción. Se sospecha en la retención, en el cólico renal o cuando sube la creatinina, y la confirma la ecografía renal. Mira este TAC: en los dos riñones la pelvis está dilatada y llena de líquido, una hidronefrosis bilateral por una obstrucción en la salida de la vejiga.',
            photo: { src: 'biblioteca/19_urologia/uro-02/01_tac-hidronefrosis-bilateral-obstruccion-vesical__bailey-love_p1482.jpg', label: 'TAC: hidronefrosis bilateral', at: 'Mira este TAC', credit: 'Bailey & Love 27.ª ed., Fig. 78.12' } },
          { t: 'Primero, la obstrucción baja', d: 'Sonda vesical, creatinina, electrolitos, urocultivo',
            say: 'Tu conducta inicial: resolver la obstrucción baja con una sonda vesical, pedir creatinina, electrolitos y urocultivo, y derivar.' },
          { t: 'Urgente: bilateral, monorreno o fiebre', d: 'Pionefrosis: nefrostomía percutánea',
            say: 'Es urgente si es bilateral, en un monorreno, con fiebre o con deterioro de la función renal. Si hay pionefrosis, se drena con una nefrostomía percutánea: tú no la haces, pero la pides y mantienes antibióticos y volumen mientras trasladas.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la retención aguda a la técnica de descompresión y lo que se vigila después.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Retención aguda: dato, conducta, error',
      head: ['Dato', 'Conducta', 'Error típico'],
      rows: [
        { cells: ['Retención con HPB, sin trauma', 'Sonda Foley', 'Empezar con alfabloqueante'],
          say: 'Retención aguda por hiperplasia, sin trauma: sonda Foley. El alfabloqueante se agrega después, para prevenir la recurrencia.' },
        { cells: ['Uretrorragia o fractura de pelvis', 'Cistostomía suprapúbica', 'Pasar la sonda Foley'],
          say: 'Uretrorragia, hematoma perineal o fractura de pelvis: cistostomía. El error es pasar la sonda.' },
        { cells: ['Sospecha de lesión uretral', 'Uretrocistografía retrógrada', 'Cistoscopía o TAC'],
          say: 'Para estudiar una lesión de uretra se pide uretrocistografía retrógrada, no cistoscopía ni TAC.' },
        { cells: ['Sonda que no pasa y sangra', 'Cistostomía', 'Insistir con un calibre menor'],
          say: 'Si la sonda no avanza y hay uretrorragia, cistostomía. No insistas con otra sonda.' },
        { cells: ['Más de 1.000 mL evacuados', 'Observar diuresis y electrolitos', 'Clampear la sonda'],
          say: 'Más de mil mililitros al sondar: vigilas la diuresis y los electrolitos. El clampeo ya no se usa.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 72 años con dolor intenso en el bajo vientre e imposibilidad de orinar desde hace 14 horas, tras tomar clorfenamina por un resfrío. Está taquicárdico y sudoroso. Se palpa una masa dolorosa y mate en el hipogastrio, 4 cm sobre el pubis. No hay trauma ni sangre en el meato.',
      question: '¿Cuál es la conducta inicial más adecuada?',
      options: [
        { letter: 'A', text: 'Cistostomía suprapúbica por punción' },
        { letter: 'B', text: 'Sonda Foley transuretral, con descompresión continua' },
        { letter: 'C', text: 'Sonda Foley con clampeo cada 300 mL' },
        { letter: 'D', text: 'Solicitar uretrocistografía retrógrada antes de sondar' },
        { letter: 'E', text: 'Furosemida endovenosa y observar' },
      ],
      correct: 'B',
      explanation: 'Es una retención aguda de orina por un antihistamínico con efecto anticolinérgico, sobre una hiperplasia prostática probable. Sin trauma ni uretrorragia, la primera maniobra es la sonda Foley, con descompresión continua y completa. El clampeo fraccionado no se usa, y se registra el volumen evacuado para vigilar la diuresis postobstructiva.',
      say: {
        stem: 'Un hombre de setenta y dos años con dolor intenso en el bajo vientre y sin poder orinar hace catorce horas, después de tomar clorfenamina por un resfrío. Tiene una masa dolorosa y mate sobre el pubis. No hay trauma ni sangre en el meato.',
        question: '¿Cuál es la conducta inicial más adecuada?',
        options: 'Las opciones: cistostomía suprapúbica; sonda Foley con descompresión continua; sonda Foley con clampeo cada trescientos mililitros; uretrocistografía antes de sondar; o furosemida y observar. Piénsalo.',
        answer: 'Es la B. Sin signos de trauma, se pasa una sonda Foley. La A es la tentación, pero la cistostomía se reserva para el trauma o para cuando la sonda no pasa. Y la C es una práctica obsoleta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 19',
      stem: 'Hombre de 70 años con HPB conocida llega a urgencias con incapacidad de orinar desde hace 8 horas, vejiga palpable en hipogastrio y dolor intenso.',
      question: '¿Cuál es el manejo inicial de elección?',
      options: [
        { letter: 'A', text: 'Sonda Foley vesical' },
        { letter: 'B', text: 'Diurético EV' },
        { letter: 'C', text: 'Alfa-bloqueador oral y esperar' },
        { letter: 'D', text: 'Cistostomía suprapúbica inmediata' },
        { letter: 'E', text: 'Cateterismo intermitente' },
      ],
      correct: 'A',
      explanation: 'Retención urinaria aguda: manejo inmediato = sonda Foley para drenaje vesical. Alivia el dolor y previene daño renal. Cistostomía solo si falla la sonda. Alfa-bloqueador se agrega DESPUÉS del episodio agudo para prevención de recurrencia.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un hombre de setenta años con hiperplasia prostática conocida, que no puede orinar hace ocho horas, con vejiga palpable en el hipogastrio y dolor intenso.',
        question: '¿Cuál es el manejo inicial de elección?',
        options: 'Las opciones: sonda Foley vesical; diurético endovenoso; alfabloqueador oral y esperar; cistostomía suprapúbica inmediata; o cateterismo intermitente. Piénsalo.',
        answer: 'Es la A. Sin trauma, la primera maniobra es la sonda Foley, que alivia el dolor y protege el riñón. La D es la trampa: la cistostomía solo se usa si la sonda falla. El alfabloqueador se agrega después del episodio agudo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 5',
      stem: 'Un paciente de 68 años consulta por imposibilidad de orinar asociada a dolor abdominal. Refiere que desde hace 3 días presenta dificultades en la micción que progresaron hasta la anuria en las últimas 24 horas. Al examen físico se observa sudoroso, con frecuencia cardíaca de 100 lpm y quejumbroso. El examen abdominal demuestra matidez a la percusión hipogástrica y dolor a la palpación abdominal baja sin signos peritoneales. Tiene antecedente de una resección transuretral hace 10 años por uropatía obstructiva baja asociada a hiperplasia prostática benigna. Se intenta instalar una sonda Foley número 18 por uretra; sin embargo, se encuentra un tope a los 6 cm, con imposibilidad de pasar la sonda y, luego, uretrorragia moderada.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Cistostomía abierta' },
        { letter: 'B', text: 'Intentar instalar una sonda de menor calibre' },
        { letter: 'C', text: 'UroTAC' },
        { letter: 'D', text: 'Cistostomía suprapúbica' },
        { letter: 'E', text: 'Uretrocistografía' },
      ],
      correct: 'D',
      explanation: 'Se trata de una retención urinaria aguda, probablemente por estenosis uretral (post RTU) o recurrencia de hiperplasia prostática. El manejo inicial es sondaje vesical; sin embargo, al fracasar 2 a 3 intentos o al producirse uretrorragia (sugestiva de lesión uretral o falsa vía), la conducta correcta es realizar una cistostomía suprapúbica percutánea para descompresión vesical.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil veinticinco. Un hombre de sesenta y ocho años, con anuria de veinticuatro horas, dolor, matidez en el hipogastrio y una resección transuretral previa por hiperplasia prostática. Intentan pasar una sonda Foley número dieciocho, pero hay un tope a los seis centímetros, no pasa, y aparece una uretrorragia moderada.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: cistostomía abierta; intentar una sonda de menor calibre; urotac; cistostomía suprapúbica; o uretrocistografía. Piénsalo.',
        answer: 'Es la D. La sonda no pasa y hay uretrorragia: ya hay una falsa vía o una lesión uretral, y el paciente sigue con globo vesical. Se descomprime por punción suprapúbica. La B es la trampa: insistir con otra sonda empeora la lesión.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2019 · Pregunta 90',
      stem: 'Un paciente de 42 años sufre un accidente automovilístico, resultado con múltiples traumatismos. Al examen físico tiene movilidad de las extremidades inferiores, sin signos de fractura y examen genital con uretrorragia. Las radiografías confirman una fractura de pelvis estable.',
      question: '¿Cuál es el examen más adecuado para proseguir el estudio?',
      options: [
        { letter: 'A', text: 'Pielografía de eliminación endovenosa' },
        { letter: 'B', text: 'Uretrocistografía retrógrada' },
        { letter: 'C', text: 'Cistoscopía' },
        { letter: 'D', text: 'TAC de pelvis' },
        { letter: 'E', text: 'Resonancia magnética nuclear de pelvis' },
      ],
      correct: 'B',
      explanation: 'Tiene una sección uretral, la que se estudia con uretrocistografía retrógrada y se trata con cirugía. Recordar que está contraindicada la sonda (también la cistoscopía) y, si hay globo vesical, se maneja con cistostomía suprapúbica.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecinueve. Un paciente de cuarenta y dos años, con múltiples traumatismos en un accidente. Mueve las piernas, y tiene uretrorragia. Las radiografías muestran una fractura de pelvis estable.',
        question: '¿Cuál es el examen más adecuado para seguir el estudio?',
        options: 'Las opciones: pielografía de eliminación; uretrocistografía retrógrada; cistoscopía; TAC de pelvis; o resonancia magnética. Piénsalo.',
        answer: 'Es la B. Uretrorragia con fractura de pelvis es una lesión uretral hasta demostrar lo contrario, y se estudia con uretrocistografía retrógrada. No se pasa sonda ni se hace cistoscopía. Si hubiera globo vesical, se descomprime con cistostomía suprapúbica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Varón de 69 años con retención urinaria aguda de 12 horas es sondado con éxito en urgencias mediante sonda Foley, evacuándose de forma inmediata 1.400 mL de orina clara. El paciente refiere alivio inmediato del dolor.',
      question: '¿Cuál es la complicación fisiopatológica que debe monitorizarse con mayor atención en las primeras 24 horas?',
      options: [
        { letter: 'A', text: 'Reflejo vasovagal sostenido con paro cardíaco' },
        { letter: 'B', text: 'Síndrome de diuresis post-obstructiva con deshidratación e hipokalemia' },
        { letter: 'C', text: 'Estenosis uretral isquémica precoz' },
        { letter: 'D', text: 'Necrosis tubular aguda anúrica irreversible' },
        { letter: 'E', text: 'Hematuria ex vacuo masiva con shock hipovolémico' },
      ],
      correct: 'B',
      explanation: 'Tras la descompresión de una obstrucción severa y prolongada, sobre todo con más de 1.000 mL, puede aparecer el síndrome de diuresis postobstructiva: pérdida del gradiente medular y excreción de la urea retenida, con diuresis masiva, deshidratación e hipokalemia. La hematuria ex vacuo con shock es un mito.',
      say: {
        stem: 'Un caso representativo del banco de preguntas. Un hombre de sesenta y nueve años con retención aguda de orina de doce horas. Lo sondan con éxito y salen mil cuatrocientos mililitros de orina clara, con alivio inmediato del dolor.',
        question: '¿Qué complicación debes vigilar con más atención en las primeras veinticuatro horas?',
        options: 'Las opciones: reflejo vasovagal con paro; diuresis postobstructiva con deshidratación e hipokalemia; estenosis uretral precoz; necrosis tubular irreversible; o hematuria ex vacuo con shock. Piénsalo.',
        answer: 'Es la B. Con más de mil mililitros al descomprimir, el riñón puede orinar masivamente y deshidratar al paciente. La E es el mito clásico: la hematuria ex vacuo no produce shock, y por eso ya no se clampea la sonda.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.5.005 · Instalación y cuidado de sonda Foley",
      "stem": "Hombre de 70 años hospitalizado por neumonía requiere sonda Foley para medir diuresis horaria. Al instalarla, después de introducir unos 10 cm, aún no sale orina.",
      "question": "Respecto de la técnica y cuidados de la sonda Foley, ¿cuál afirmación es correcta?",
      "options": [
        {
          "letter": "A",
          "text": "Inflar el balón en cuanto se sienta resistencia, para fijarla"
        },
        {
          "letter": "B",
          "text": "Mantener la bolsa sobre el nivel de la vejiga para facilitar el drenaje"
        },
        {
          "letter": "C",
          "text": "Cambiar la bolsa abriendo el sistema cada 8 horas para evitar infecciones"
        },
        {
          "letter": "D",
          "text": "Introducir la sonda hasta la bifurcación y verificar la salida de orina antes de inflar el balón con agua destilada, con técnica aséptica y sistema de drenaje cerrado"
        },
        {
          "letter": "E",
          "text": "Indicar profilaxis antibiótica permanente mientras dure la sonda"
        }
      ],
      "correct": "D",
      "explanation": "En el hombre se lubrica con lidocaína en gel, se introduce la sonda hasta la bifurcación y solo después de ver orina se infla el balón, para no inflarlo en la uretra. Se usa técnica aséptica, sistema cerrado, bolsa bajo el nivel vesical y se retira apenas no se necesite. La profilaxis antibiótica no está indicada.",
      "say": {
        "stem": "A un hombre de setenta años hospitalizado se le instala una sonda Foley para medir diuresis. Después de introducir diez centímetros aún no sale orina.",
        "question": "¿Qué afirmación sobre la técnica y los cuidados es correcta?",
        "options": "Las opciones: inflar el balón al sentir resistencia, bolsa sobre la vejiga, abrir el sistema cada ocho horas, introducir hasta la bifurcación y ver orina antes de inflar con sistema cerrado o antibióticos permanentes. Piénsalo.",
        "answer": "Es la D. En el hombre se introduce la sonda hasta el final y se infla el balón solo cuando sale orina, con técnica estéril y sistema cerrado. Inflar al sentir resistencia tienta, pero el balón quedaría en la uretra y puede romperla."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.5.004 · Cistostomía por punción",
      "stem": "Hombre de 25 años sufre una caída a horcajadas sobre una viga. Consulta por imposibilidad de orinar de 6 horas. Al examen hay sangre en el meato uretral, hematoma perineal en alas de mariposa y globo vesical palpable a 3 cm bajo el ombligo. Hemodinámicamente estable.",
      "question": "¿Cuál es la conducta más adecuada para drenar la vejiga?",
      "options": [
        {
          "letter": "A",
          "text": "Sonda Foley transuretral con lubricación abundante"
        },
        {
          "letter": "B",
          "text": "Punción vesical con aguja y aspiración repetida cada 6 horas"
        },
        {
          "letter": "C",
          "text": "Sondeo con sonda metálica para vencer la estrechez"
        },
        {
          "letter": "D",
          "text": "Furosemida endovenosa y esperar micción espontánea"
        },
        {
          "letter": "E",
          "text": "Cistostomía suprapúbica por punción, idealmente guiada por ecografía, y estudio posterior con uretrografía retrógrada"
        }
      ],
      "correct": "E",
      "explanation": "Sangre en el meato y hematoma perineal tras caída a horcajadas sugieren lesión de uretra bulbar: está contraindicado el sondeo transuretral. Con globo vesical palpable, la vejiga se drena mediante cistostomía suprapúbica por punción, y la uretra se estudia con uretrografía retrógrada.",
      "say": {
        "stem": "Un hombre de veinticinco años cae a horcajadas sobre una viga y no puede orinar. Tiene sangre en el meato, hematoma perineal en alas de mariposa y la vejiga palpable bajo el ombligo.",
        "question": "¿Cómo se drena la vejiga?",
        "options": "Las opciones: sonda Foley con mucho lubricante, punciones repetidas con aguja, sonda metálica, furosemida y esperar o cistostomía suprapúbica por punción. Piénsalo.",
        "answer": "Es la E. La sangre en el meato tras una caída a horcajadas sugiere lesión de uretra, y entonces se drena por arriba con una cistostomía por punción. La sonda Foley tienta porque es lo habitual, pero puede transformar una rotura parcial en completa."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.005 · Instalación y cuidado de sonda Foley",
      "stem": "Hombre de 70 años con retención urinaria aguda requiere la instalación de una sonda Foley. Se realiza técnica aséptica con lubricante con lidocaína.",
      "question": "¿En qué momento debe inflarse el balón de la sonda?",
      "options": [
        {
          "letter": "A",
          "text": "Apenas la punta de la sonda pasa el meato"
        },
        {
          "letter": "B",
          "text": "Al sentir resistencia en la uretra prostática, sin esperar salida de orina"
        },
        {
          "letter": "C",
          "text": "Antes de introducir la sonda, para comprobar el balón dentro de la uretra"
        },
        {
          "letter": "D",
          "text": "Después de observar salida de orina y avanzar la sonda hasta su bifurcación"
        },
        {
          "letter": "E",
          "text": "Solo si el paciente refiere dolor"
        }
      ],
      "correct": "D",
      "explanation": "El balón debe inflarse solo cuando se confirma que está en la vejiga: tras ver salir orina, se avanza la sonda hasta la bifurcación y luego se infla con agua destilada. Inflarlo en la uretra produce dolor, sangrado y lesión uretral (falsa vía). Ante resistencia que no cede o sangre en el meato, no se debe forzar.",
      "say": {
        "stem": "Hombre de setenta años con retención urinaria aguda, al que se le instalará una sonda Foley con técnica aséptica y lubricante con lidocaína.",
        "question": "¿En qué momento se infla el balón?",
        "options": "Las opciones: apenas pasa el meato, al sentir resistencia en la próstata, antes de introducirla, después de ver orina y avanzar hasta la bifurcación o solo si hay dolor. Piénsalo.",
        "answer": "Es la D. El balón se infla cuando estás seguro de estar en la vejiga: sale orina, avanzas hasta la bifurcación y recién ahí lo inflas. Inflarlo al sentir resistencia tienta porque parece que llegaste, pero esa resistencia suele ser la próstata, y lo inflarías dentro de la uretra."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.1.025 · Uropatía obstructiva",
      "stem": "Hombre de 79 años con síntomas urinarios obstructivos de años presenta tenesmo vesical, goteo y dolor hipogástrico. Al examen se palpa globo vesical. Creatinina 3,8 mg/dL (basal 1,1). La ecografía muestra hidroureteronefrosis bilateral y vejiga distendida.",
      "question": "¿Cuál es la conducta inicial más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Instalación de sonda vesical Foley"
        },
        {
          "letter": "B",
          "text": "Nefrostomía percutánea bilateral"
        },
        {
          "letter": "C",
          "text": "Hemodiálisis de urgencia"
        },
        {
          "letter": "D",
          "text": "Iniciar tamsulosina y control en 1 semana"
        },
        {
          "letter": "E",
          "text": "Resección transuretral de próstata de urgencia"
        }
      ],
      "correct": "A",
      "explanation": "Es una uropatía obstructiva baja con insuficiencia renal posrenal por hiperplasia prostática con retención crónica. Lo primero es descomprimir la vejiga con sonda Foley, lo que resuelve la hidronefrosis bilateral, vigilando la poliuria posobstructiva. La nefrostomía se usa en la obstrucción alta y la diálisis no corresponde si se corrige la causa.",
      "say": {
        "stem": "Hombre de setenta y nueve años con globo vesical, hidronefrosis bilateral y creatinina elevada.",
        "question": "¿Qué haces primero?",
        "options": "Las opciones: sonda Foley, nefrostomía bilateral, hemodiálisis, tamsulosina y control o resección prostática urgente. Piénsalo.",
        "answer": "Es la A. Sonda Foley, porque la obstrucción está en la salida vesical. La nefrostomía tienta por la hidronefrosis bilateral, pero esta se resuelve vaciando la vejiga."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.5.002 · Cistostomía de urgencia",
      "stem": "Hombre de 30 años, motociclista, con fractura de pelvis tras una colisión. Presenta sangre en el meato uretral, hematoma perineal y globo vesical palpable, y no puede orinar.",
      "question": "¿Cuál es la conducta más adecuada para drenar la vejiga?",
      "options": [
        {
          "letter": "A",
          "text": "Instalar sonda Foley forzando el paso"
        },
        {
          "letter": "B",
          "text": "Nefrostomía percutánea bilateral"
        },
        {
          "letter": "C",
          "text": "Esperar la micción espontánea"
        },
        {
          "letter": "D",
          "text": "Sonda Foley de menor calibre bien lubricada"
        },
        {
          "letter": "E",
          "text": "Cistostomía suprapúbica"
        }
      ],
      "correct": "E",
      "explanation": "Sangre en el meato con fractura de pelvis sugiere lesión de la uretra posterior: está contraindicado instalar una sonda uretral, que puede completar la rotura. Se estudia con uretrografía retrógrada y la vejiga se drena con cistostomía suprapúbica, idealmente guiada por ecografía. La nefrostomía corresponde a obstrucción alta, no vesical.",
      "say": {
        "stem": "Motociclista con fractura de pelvis, sangre en el meato uretral y globo vesical.",
        "question": "¿Cómo drenas la vejiga?",
        "options": "Las opciones: Foley forzada, nefrostomía, esperar la micción, Foley de menor calibre o cistostomía suprapúbica. Piénsalo.",
        "answer": "Es la E. Cistostomía suprapúbica, porque la sangre en el meato sugiere rotura uretral. Una Foley más delgada parece más suave, pero igual puede completar la lesión."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.5.005 · Nefrostomia percutánea",
      "stem": "Mujer de 52 años con cáncer cervicouterino avanzado presenta oliguria y creatinina de 5,2 mg/dL. La ecografía muestra hidroureteronefrosis bilateral por compresión tumoral de ambos uréteres distales, y la cistoscopía muestra infiltración tumoral del trígono que impide identificar los meatos ureterales.",
      "question": "¿Cuál es la conducta más adecuada para descomprimir la vía urinaria?",
      "options": [
        {
          "letter": "A",
          "text": "Sonda Foley"
        },
        {
          "letter": "B",
          "text": "Nefrostomía percutánea"
        },
        {
          "letter": "C",
          "text": "Catéter doble J por vía cistoscópica"
        },
        {
          "letter": "D",
          "text": "Cistostomía suprapúbica"
        },
        {
          "letter": "E",
          "text": "Hemodiálisis como único tratamiento"
        }
      ],
      "correct": "B",
      "explanation": "En la obstrucción ureteral bilateral, cuando no es posible pasar un catéter doble J por vía retrógrada porque los meatos están infiltrados por tumor, se realiza una nefrostomía percutánea guiada por imágenes, que drena directamente la pelvis renal. La sonda Foley y la cistostomía drenan solo la vejiga y no resuelven una obstrucción ureteral.",
      "say": {
        "stem": "Mujer con cáncer cervicouterino avanzado, hidronefrosis bilateral y meatos ureterales infiltrados por tumor.",
        "question": "¿Cómo descomprimes la vía urinaria?",
        "options": "Las opciones: sonda Foley, nefrostomía percutánea, catéter doble jota, cistostomía, o solo hemodiálisis. Piénsalo.",
        "answer": "Es la B. Nefrostomía percutánea, porque no se pueden encontrar los meatos para pasar un doble jota. El doble jota sería lo habitual, pero aquí es técnicamente imposible."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2017 · Pregunta 55",
      "stem": "Paciente masculino de 30 años consulta por disminución del calibre miccional, asociada a disuria de esfuerzo de varios meses de evolución. Tiene antecedente de un trauma perineal hace 3 años. Al examen físico tiene genitales externos normales y su tacto rectal demuestra una próstata pequeña y blanda.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Cáncer de próstata"
        },
        {
          "letter": "B",
          "text": "Uretritis"
        },
        {
          "letter": "C",
          "text": "Hiperplasia prostática benigna"
        },
        {
          "letter": "D",
          "text": "Estenosis uretral"
        },
        {
          "letter": "E",
          "text": "Urolitiasis"
        }
      ],
      "correct": "D",
      "explanation": "Un hombre joven con chorro débil progresivo y antecedente de trauma perineal (lesión de uretra bulbar) tiene una estenosis uretral hasta demostrar lo contrario. Se estudia con uroflujometría y uretrografía retrógrada. La HPB ocurre en mayores y con próstata aumentada de tamaño.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecisiete. Hombre de treinta años con chorro miccional cada vez más delgado y esfuerzo para orinar, con trauma perineal hace tres años y próstata pequeña al tacto.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: cáncer de próstata, uretritis, hiperplasia prostática, estenosis uretral o urolitiasis. Piénsalo.",
        "answer": "Es la D. El trauma perineal previo y el chorro débil en un joven apuntan a estenosis uretral. La hiperplasia prostática tienta por los síntomas obstructivos, pero ocurre en mayores y con una próstata grande."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2019 · Pregunta 74",
      "stem": "Paciente de 18 años consulta por dolor lumbar izquierdo de larga evolución. Al examen físico tiene una masa en el flanco izquierdo. La ecografía abdominal muestra hidronefrosis izquierda con adelgazamiento de la corteza renal, sin dilatación ureteral. Su creatinina plasmática es 0,9 mg/dL y su sedimento de orina es normal. La cintigrafía renal muestra función diferencial de 90% a derecha y 10% a izquierda.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Realizar pieloplastía izquierda"
        },
        {
          "letter": "B",
          "text": "Realizar nefrostomía percutánea"
        },
        {
          "letter": "C",
          "text": "Realizar nefrectomía izquierda"
        },
        {
          "letter": "D",
          "text": "Instalar sonda Foley"
        },
        {
          "letter": "E",
          "text": "Solicitar pieloTAC"
        }
      ],
      "correct": "C",
      "explanation": "Hidronefrosis sin dilatación ureteral indica estenosis pieloureteral. Con corteza adelgazada y función diferencial de 10% o menos en la cintigrafía, el riñón se considera no recuperable y sintomático: se indica nefrectomía. Si la función estuviera conservada, la conducta sería pieloplastía. La nefrostomía es solo una medida transitoria de drenaje.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil diecinueve. Joven de dieciocho años con dolor lumbar crónico y masa en el flanco izquierdo. Tiene hidronefrosis izquierda sin dilatación del uréter, corteza delgada, y la cintigrafía muestra que ese riñón aporta apenas el diez por ciento de la función.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: pieloplastía, nefrostomía, nefrectomía, sonda Foley o pieloTAC. Piénsalo.",
        "answer": "Es la C. Con un riñón que aporta solo el diez por ciento y corteza adelgazada, no es recuperable y se indica nefrectomía. La pieloplastía tienta porque corrige la estenosis pieloureteral, pero solo vale la pena si el riñón conserva función."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.2.003 · Parafimosis",
      "stem": "Hombre de 70 años hospitalizado con sonda Foley. Al día siguiente de instalada, la enfermera nota el glande edematoso y violáceo con un anillo prepucial retraído y tenso detrás del glande, muy doloroso.",
      "question": "¿Cuál es el diagnóstico y la conducta inicial?",
      "options": [
        {
          "letter": "A",
          "text": "Balanitis; antifúngico tópico"
        },
        {
          "letter": "B",
          "text": "Parafimosis; circuncisión inmediata en todos los casos"
        },
        {
          "letter": "C",
          "text": "Fimosis; corticoide tópico"
        },
        {
          "letter": "D",
          "text": "Parafimosis; reducción manual del prepucio previa compresión del edema y analgesia"
        },
        {
          "letter": "E",
          "text": "Gangrena de Fournier; aseo quirúrgico"
        }
      ],
      "correct": "D",
      "explanation": "La parafimosis es el prepucio retraído que no vuelve a su posición y forma un anillo constrictor, típicamente iatrogénica tras sonda o examen sin reponer el prepucio. Es una urgencia: se reduce manualmente tras analgesia y compresión del edema; si fracasa, incisión dorsal del anillo. La circuncisión se plantea en forma diferida.",
      "say": {
        "stem": "Hombre de setenta años con sonda Foley que al día siguiente presenta el glande hinchado y violáceo, con un anillo de prepucio retraído y apretado detrás.",
        "question": "¿Cuál es el diagnóstico y la conducta inicial?",
        "options": "Las opciones: balanitis con antifúngico, parafimosis con circuncisión inmediata, fimosis con corticoide, parafimosis con reducción manual o gangrena de Fournier. Piénsalo.",
        "answer": "Es la D. Es una parafimosis por no reponer el prepucio al instalar la sonda, y se reduce manualmente tras comprimir el edema. La circuncisión inmediata tienta, pero solo se usa en forma diferida o si fallan la reducción y la incisión dorsal."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Enero 2023 · Pregunta 142",
      "stem": "Paciente con antecedente de resección transuretral de próstata hace 10 años, sin micción desde hace 8 horas. Al intentar instalar una sonda, esta no avanza más allá de la uretra bulbar y se produce uretrorragia. No hay globo vesical palpable.",
      "question": "¿Cuál es el examen de elección?",
      "options": [
        {
          "letter": "A",
          "text": "Ecografía pelviana"
        },
        {
          "letter": "B",
          "text": "UroTAC sin contraste"
        },
        {
          "letter": "C",
          "text": "Uretrografía retrógrada"
        },
        {
          "letter": "D",
          "text": "Cistouretrografía miccional"
        },
        {
          "letter": "E",
          "text": "Cistoscopía flexible"
        }
      ],
      "correct": "C",
      "explanation": "Una sonda que no progresa en la uretra bulbar en un paciente con instrumentación previa sugiere estenosis uretral. La uretrografía retrógrada (contraste por el meato) define ubicación y longitud de la estenosis anterior. La cistouretrografía miccional requiere que el paciente orine o vejiga accesible, y evalúa mejor la uretra posterior y el reflujo.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de enero de dos mil veintitrés. Paciente con resección prostática transuretral hace diez años, sin orinar por ocho horas. La sonda no pasa de la uretra bulbar y sangra por la uretra.",
        "question": "¿Cuál es el examen de elección?",
        "options": "Las opciones: ecografía pelviana, uroTAC sin contraste, uretrografía retrógrada, cistouretrografía miccional o cistoscopía flexible. Piénsalo.",
        "answer": "Es la C. La uretrografía retrógrada, inyectando contraste por el meato, muestra la estenosis de la uretra anterior. La cistouretrografía miccional tienta por el nombre parecido, pero necesita que el paciente orine y evalúa mejor la uretra posterior."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.5.003 · Cistostomía abierta",
      "stem": "Hombre de 30 años, tras caída a horcajadas sobre una viga, presenta sangre en el meato uretral, hematoma perineal en alas de mariposa y no puede orinar. Tiene globo vesical palpable. Está estable.",
      "question": "¿Cuál es la conducta más adecuada para drenar la vejiga?",
      "options": [
        {
          "letter": "A",
          "text": "Instalar sonda Foley por vía uretral con fuerza"
        },
        {
          "letter": "B",
          "text": "Sondeo con sonda metálica"
        },
        {
          "letter": "C",
          "text": "Esperar micción espontánea"
        },
        {
          "letter": "D",
          "text": "Cistostomía suprapúbica (por punción o abierta) y luego estudio con uretrografía retrógrada"
        },
        {
          "letter": "E",
          "text": "Uretroplastía inmediata"
        }
      ],
      "correct": "D",
      "explanation": "Uretrorragia, hematoma perineal y retención tras trauma a horcajadas indican lesión de uretra bulbar. Está contraindicado el sondeo uretral a ciegas porque puede completar la rotura. La vejiga se drena con cistostomía suprapúbica (percutánea o abierta si la vejiga no es puncionable con seguridad), y se estudia con uretrografía retrógrada; la reparación es diferida.",
      "say": {
        "stem": "Hombre de treinta años que cayó a horcajadas sobre una viga, con sangre en el meato, hematoma perineal y retención urinaria, estable.",
        "question": "¿Cuál es la conducta para drenar la vejiga?",
        "options": "Las opciones: sonda Foley forzada, sonda metálica, esperar micción, cistostomía suprapúbica y luego uretrografía o uretroplastía inmediata. Piénsalo.",
        "answer": "Es la D. Con sospecha de lesión uretral se drena por cistostomía suprapúbica y se estudia con uretrografía retrógrada. La sonda Foley tienta por ser lo habitual, pero puede completar la rotura de la uretra."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.5.006 · Reducción de parafimosis",
      "stem": "Niño de 10 años con parafimosis de 3 horas tras retraer el prepucio al bañarse. Glande edematoso, rosado, con anillo constrictor retraído. Se decide reducción manual en urgencia.",
      "question": "¿Cuál es la técnica adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Tirar del prepucio hacia adelante sin preparar el glande"
        },
        {
          "letter": "B",
          "text": "Analgesia, compresión manual sostenida del glande para reducir el edema, y luego empujar el glande con los pulgares mientras los índices y medios traccionan el prepucio hacia distal"
        },
        {
          "letter": "C",
          "text": "Incisión dorsal del prepucio como primera medida"
        },
        {
          "letter": "D",
          "text": "Aplicar calor local y esperar reducción espontánea"
        },
        {
          "letter": "E",
          "text": "Indicar corticoide tópico y control en 1 semana"
        }
      ],
      "correct": "B",
      "explanation": "La reducción manual de la parafimosis requiere analgesia (bloqueo peneano o anestesia tópica), compresión sostenida del glande para disminuir el edema y luego presión del glande con los pulgares mientras los dedos índice y medio llevan el anillo prepucial sobre él. Si falla, se realiza incisión dorsal. El calor aumenta el edema.",
      "say": {
        "stem": "Niño de diez años con parafimosis de tres horas, glande hinchado y anillo de prepucio retraído. Se intentará reducirla manualmente.",
        "question": "¿Cuál es la técnica adecuada?",
        "options": "Las opciones: tirar del prepucio sin preparar, analgesia y compresión del glande y luego empujarlo con los pulgares mientras se trae el prepucio, incisión dorsal primero, calor y esperar, o corticoide y control. Piénsalo.",
        "answer": "Es la B. Primero analgesia y compresión del glande para bajar el edema, y luego empujarlo con los pulgares mientras se trae el prepucio hacia adelante. La incisión dorsal tienta, pero es el rescate si la reducción manual falla."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: retención aguda de orina',
      cards: [
        { title: 'Reconocer y descomprimir', tag: 'Urgencia', kind: 'key', items: [
          { t: 'Dolor hipogástrico y globo vesical', d: 'Causa frecuente: HPB descompensada',
            say: 'Cerremos con las reglas de oro. Dolor hipogástrico y un globo vesical palpable es una retención aguda, y en el adulto mayor suele ser una hiperplasia prostática descompensada por un fármaco.' },
          { t: 'Sin trauma: sonda Foley primero', d: 'Alfabloqueador después',
            say: 'Sin signos de trauma, la primera maniobra es la sonda Foley. El alfabloqueador se agrega después del episodio agudo.' },
        ] },
        { title: 'Trampas', tag: 'Lo que se pregunta', kind: 'alert', items: [
          { t: 'Uretrorragia o pelvis rota: sin sonda', d: 'Cistostomía y uretrocistografía',
            say: 'Uretrorragia, hematoma perineal o fractura de pelvis: la sonda está contraindicada, se hace cistostomía suprapúbica y se estudia con uretrocistografía retrógrada.' },
          { t: 'Descompresión continua y vigilada', d: 'Más de 1.000 mL: diuresis y potasio',
            say: 'Se descomprime en forma continua, sin clampear. Y si salen más de mil mililitros, se vigilan la diuresis y el potasio. Si te llevas una sola idea de hoy: antes de pasar una sonda, busca señales de trauma uretral. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Retención aguda de orina: cómo descomprimir',
    root: N('start', 'Dolor hipogástrico y globo vesical', 'Retención aguda de orina',
      'Un paciente con dolor en el hipogastrio, sin poder orinar, y con un globo vesical palpable. Antes de sondar, mira si hay señales de lesión de la uretra.',
      ['Sin trauma uretral', N('do', 'Sonda Foley 16 a 18 French', 'Descompresión continua',
        'Si no hay trauma, se pasa una sonda Foley de dieciséis a dieciocho French, con lidocaína en jalea, y se infla el balón solo después de ver orina.',
        ['Pasa la sonda', N('ok', 'Descomprimir y vigilar', 'Más de 1.000 mL: diuresis y potasio',
          'Si pasa, se descomprime de forma continua. Si salen más de mil mililitros, se vigilan la diuresis y el potasio por el riesgo de diuresis postobstructiva, y se deriva a urología.')],
        ['No pasa o sangra', N('refer', 'Cistostomía suprapúbica', 'Por punción',
          'Si la sonda no pasa, o aparece sangrado, se hace una cistostomía suprapúbica por punción.')],
      )],
      ['Uretrorragia, hematoma perineal o pelvis rota', N('alert', 'No pasar sonda', 'Cistostomía suprapúbica',
        'Si hay uretrorragia, hematoma perineal o fractura de pelvis, la sonda está contraindicada. Se descomprime con cistostomía suprapúbica y la uretra se estudia después con una uretrocistografía retrógrada.')],
    ),
  },
};
