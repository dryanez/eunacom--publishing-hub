// Clase 4.7 (Cardiología) — Endocarditis infecciosa: criterios de Duke, tratamiento y profilaxis. Guion escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_cardiologia_bloque_4.cjs (cardio-28). Códigos y niveles (books/data/v3_codemap.json):
// 1.01.1.007 Endocarditis infecciosa y no infecciosa (Dx sospecha · Tx inicial · Seg derivar), 1.04.2.003 Endocarditis bacteriana (urgencia,
// Dx sospecha · Tx inicial · Seg derivar) y 1.04.3.007 Profilaxis de endocarditis infecciosa (conocimiento).
// Preguntas reales (class_questions.cjs cardio-28): Julio 2017 P70 (fiebre prolongada con soplo: ecocardiograma), Diciembre 2017 P63 (examen
// para el diagnóstico etiológico: hemocultivos), Diciembre 2018 P123 (prótesis, S. viridans: penicilina), Julio 2025 P136 (prótesis precoz:
// estafilococo) y Julio 2017 P154 (glomerulonefritis inmunológica en la endocarditis, código 1.09.1.022). Se unieron las palabras cortadas con guion
// y se corrigieron los errores de tipeo del banco («temeratura», «ausulta»).
// Descartadas: Julio 2016 P115 (hemiparesia súbita con soplo: válida, se deja fuera para no repetir el patrón de fenómenos embólicos);
// Diciembre 2018 P95, Diciembre 2019 P180 y Agosto 2021 P137 (flutter con prótesis/estenosis mitral: van en cardio-04, necesitan el ECG).
// La profilaxis dental se pregunta con un caso representativo escrito para la clase (el banco no trae ninguna con enunciado completo).
// Fotos en contexto: vegetaciones de S. viridans en la válvula mitral (Harrison 21.ª ed., p. 1064), mancha de Roth (Harrison, p. 262) y eco de
// endocarditis aórtica con regurgitación (Nelson 22.ª ed., p. 2853).
// En movimiento: scenes/cardio_b4.html ?v=duke (criterios de Duke del caso clínico uno a uno), gráfico propio de código.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cardio-28',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Sospecharla, confirmarla con Duke, elegir el antibiótico según el germen y saber a quién dar profilaxis',
      say: 'Bienvenido. Cerramos el bloque de valvulopatías con la endocarditis infecciosa, una urgencia que se esconde tras una fiebre prolongada. El paciente consulta por cansancio, fiebre y baja de peso, y el diagnóstico exige pensar en ella antes de dar un antibiótico que negativice los cultivos. El examen la pregunta desde tres ángulos: el examen de elección, el antibiótico según el germen y la profilaxis dental. Hoy los aprendes todos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Una vegetación sobre la válvula',
      nodes: [
        { id: 'b', col: 0, row: 1, k: 'cause', t: 'Bacteriemia', s: 'Dental, piel, catéter, droga EV' },
        { id: 'v', col: 1, row: 1, k: 'mech', t: 'Válvula dañada o protésica', s: 'Endotelio alterado' },
        { id: 'e', col: 2, row: 1, k: 'mech', t: 'Vegetación', s: 'Fibrina, plaquetas y gérmenes' },
        { id: 'l', col: 3, row: 0, k: 'risk', t: 'Daño local', s: 'Insuficiencia, absceso, bloqueo AV' },
        { id: 'm', col: 3, row: 2, k: 'effect', t: 'Embolias y complejos inmunes', s: 'ACV, bazo, Osler, Roth, nefritis' },
        { id: 'c', col: 4, row: 1, k: 'alert', t: 'Insuficiencia cardíaca', s: 'Primera causa de cirugía y de muerte' },
      ],
      edges: [{ from: 'b', to: 'v' }, { from: 'v', to: 'e' }, { from: 'e', to: 'l' }, { from: 'e', to: 'm' }, { from: 'l', to: 'c' }],
      steps: [
        { show: ['b', 'v'], note: 'Bacterias que llegan a una válvula vulnerable',
          say: 'La endocarditis infecciosa es la infección del endocardio. Todo parte con una bacteriemia, que puede venir de la boca, la piel, un catéter o una droga endovenosa, y que encuentra una válvula dañada o una prótesis: valvulopatía reumática o degenerativa, válvula bicúspide, prolapso con insuficiencia, cardiopatía congénita o una endocarditis previa.' },
        { show: ['e'], note: 'La vegetación',
          say: 'Sobre esa válvula se forma una vegetación: una masa de fibrina y plaquetas con los gérmenes dentro, que crece y se desprende.' },
        { show: ['l', 'm', 'c'], note: 'Tres tipos de daño',
          say: 'El daño es de tres tipos. Local: perforación de la valva, insuficiencia valvular aguda, absceso del anillo con bloqueo aurículo-ventricular. A distancia, por embolias: cerebro, bazo, riñón. E inmunológico, por complejos inmunes: nódulos de Osler, manchas de Roth, glomerulonefritis. La insuficiencia cardíaca por la válvula destruida es la primera causa de cirugía y de muerte.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Sospecha',
      title: 'Cuándo pensar en endocarditis',
      cards: [
        { title: 'La sospecha clínica', tag: 'Fiebre + soplo', kind: 'key', items: [
          { t: 'Fiebre + soplo nuevo o que cambia', d: 'Fenómenos embólicos o inmunológicos',
            say: 'Piensa en endocarditis ante una fiebre con un soplo nuevo o que cambia, ante fenómenos embólicos o inmunológicos, o ante una fiebre prolongada sin foco en un paciente de riesgo.' },
          { t: 'Riesgo: prótesis, EI previa, drogas EV', d: 'Congénita, valvulopatía, dispositivos, hemodiálisis',
            say: 'Los factores de riesgo: prótesis valvular, endocarditis previa, consumo de drogas endovenosas, cardiopatía congénita, valvulopatía previa, dispositivos intracardíacos, catéteres, hemodiálisis y procedimientos dentales o quirúrgicos.' },
        ] },
        { title: 'Dos formas', tag: 'Por velocidad y germen', kind: 'criteria', items: [
          { t: 'Subaguda: S. viridans', d: 'Semanas; válvula dañada; origen dental',
            say: 'La endocarditis subaguda evoluciona en semanas, sobre válvulas dañadas, y la causa más frecuente es Streptococcus viridans, de origen dental. Da fiebre, astenia, baja de peso, soplo y fenómenos inmunológicos.' },
          { t: 'Aguda: S. aureus', d: 'Días; válvula sana; drogas EV; tricúspide',
            say: 'La aguda, de menos de siete días, la produce Staphylococcus aureus, incluso sobre válvulas sanas. Es la típica del consumo de drogas endovenosas, donde afecta la válvula tricúspide y produce embolias sépticas pulmonares.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Examen físico',
      title: 'Los signos periféricos',
      cards: [
        { title: 'Embólicos', tag: 'Indoloros', kind: 'alert', items: [
          { t: 'Petequias y hemorragias en astilla', d: 'Conjuntivas, paladar, uñas',
            say: 'Los signos periféricos son una clave del examen. Las petequias, en conjuntivas, paladar y extremidades, y las hemorragias en astilla bajo las uñas.' },
          { t: 'Lesiones de Janeway', d: 'Máculas indoloras en palmas y plantas',
            say: 'Las lesiones de Janeway son máculas eritematosas indoloras, en las palmas y las plantas, y son embolias sépticas.' },
        ] },
        { title: 'Inmunológicos', tag: 'Dolorosos o retinianos', kind: 'criteria', items: [
          { t: 'Nódulos de Osler', d: 'Dolorosos, en la pulpa de los dedos',
            say: 'Los nódulos de Osler son dolorosos, en la pulpa de los dedos, y son un fenómeno inmunológico. Un truco: Osler duele, Janeway no.' },
          { t: 'Manchas de Roth', d: 'Hemorragia retiniana de centro pálido',
            say: 'Y las manchas de Roth: hemorragias en la retina, de centro pálido. Mira esta fotografía del fondo de ojo: la hemorragia tiene un centro blanco, y es propia de la endocarditis bacteriana subaguda.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-24/02_mancha-de-roth__harrison_p262.jpg', label: 'Mancha de Roth', at: 'Mira esta fotografía', credit: 'Harrison, Principios de Medicina Interna, 21.ª ed., p. 262' } },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Exámenes iniciales',
      title: 'Hemocultivos antes del antibiótico; ecocardiograma',
      cards: [
        { title: 'Hemocultivos', tag: 'El examen del germen', kind: 'key', items: [
          { t: 'Tres, de sitios distintos', d: 'Antes de la primera dosis; sin esperar el peak',
            say: 'El examen de elección para el diagnóstico etiológico son los hemocultivos: tres, de sitios distintos, antes de la primera dosis de antibiótico, sin esperar el peak febril. Esa es la respuesta del examen cuando preguntan por el diagnóstico etiológico.' },
          { t: 'Hemograma, VHS, PCR, orina', d: 'Anemia, hematuria, factor reumatoideo',
            say: 'Se piden hemograma, que muestra leucocitosis y anemia, velocidad de sedimentación y proteína C reactiva elevadas, y orina con hematuria. Si hay glomerulonefritis, el complemento C tres baja y la creatinina sube.' },
        ] },
        { title: 'Ecocardiograma', tag: 'Ve la vegetación', kind: 'criteria', items: [
          { t: 'Transtorácico a todos', d: 'Transesofágico si prótesis, duda o complicación',
            say: 'El ecocardiograma transtorácico se pide a todo paciente con sospecha, y el transesofágico si el estudio es negativo con alta sospecha, si hay prótesis o si se sospechan complicaciones. Mira este eco de una endocarditis de la válvula aórtica: a la izquierda las vegetaciones sobre las valvas, y a la derecha el color muestra la insuficiencia aórtica grave.',
            photo: { src: 'biblioteca/20_cardiologia/cardio-28/03_endocarditis-aortica-eco-vegetaciones-e-insuficiencia__nelson_p2853.jpg', label: 'Eco: endocarditis aórtica', at: 'Mira este eco', credit: 'Nelson Textbook of Pediatrics, 22.ª ed., p. 2853' } },
          { t: 'Un eco normal no la descarta', d: 'Repetir en 7 a 10 días',
            say: 'Un ecocardiograma normal no descarta la endocarditis si la sospecha es alta: se repite en siete a diez días.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios de Duke modificados',
      title: 'Mayores y menores',
      cards: [
        { title: 'Criterios mayores', tag: 'Dos', kind: 'criteria', items: [
          { t: 'Hemocultivos positivos típicos', d: '≥ 2 muestras separadas, o persistentes',
            say: 'Los criterios de Duke tienen dos mayores. Primero, hemocultivos positivos para un germen típico: Streptococcus viridans, gallolyticus, el grupo HACEK, Staphylococcus aureus o enterococo comunitario, en al menos dos muestras separadas, o persistentemente positivos.' },
          { t: 'Compromiso endocárdico', d: 'Vegetación, absceso, dehiscencia o regurgitación nueva',
            say: 'Segundo, evidencia de compromiso del endocardio: vegetación, absceso o dehiscencia nueva de una prótesis en el ecocardiograma, o una regurgitación valvular nueva.' },
        ] },
        { title: 'Criterios menores', tag: 'Cinco', kind: 'normal', items: [
          { t: 'Predisposición y fiebre ≥ 38 °C', d: 'Prótesis, drogas EV, cardiopatía',
            say: 'Los criterios menores son: la predisposición, es decir una cardiopatía de riesgo o consumo de drogas; la fiebre de treinta y ocho grados o más; fenómenos vasculares, como embolias, aneurismas micóticos o lesiones de Janeway; y fenómenos inmunológicos, como glomerulonefritis, Osler, Roth o factor reumatoideo. El quinto es la evidencia microbiológica que no alcanza a ser mayor.' },
        ] },
      ],
    },

    {
      type: 'image',
      kicker: 'En movimiento',
      title: 'Los criterios de Duke, uno a uno',
      images: [
        { src: 'animaciones/cardio-28/A1_duke_caso_clinico.mp4', label: 'Duke aplicado al caso clínico', credit: 'Animación propia con los criterios del libro' },
      ],
      steps: [
        { note: 'Dos mayores y cuatro menores: definida',
          say: 'Apliquemos Duke a un portador de una prótesis aórtica con fiebre de tres semanas y un soplo diastólico nuevo. Los tres hemocultivos positivos, tomados antes del antibiótico, son el primer criterio mayor. La regurgitación valvular nueva en el ecocardiograma, el segundo. Después, la prótesis, la fiebre, los nódulos de Osler y las hemorragias en astilla suman los menores. Con dos mayores, la endocarditis queda definida.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Interpretación de Duke',
      title: 'Definida, posible o descartada',
      head: ['Categoría', 'Regla', 'Pista'],
      rows: [
        { cells: ['Definida', '2 mayores, o 1 mayor + 3 menores, o 5 menores', 'Tratar y derivar'],
          say: 'La endocarditis es definida con dos criterios mayores, o uno mayor y tres menores, o cinco menores.' },
        { cells: ['Posible', '1 mayor + 1 menor, o 3 menores', 'No esperar para actuar'],
          say: 'Es posible con un mayor y un menor, o con tres menores.' },
        { cells: ['Descartada', 'Diagnóstico alternativo firme o fiebre que cede en menos de 4 días de antibiótico', 'Excepcional'],
          say: 'Se descarta si hay un diagnóstico alternativo firme, o si la fiebre cede con menos de cuatro días de antibiótico.' },
        { cells: ['Para el médico general', 'Ante la sospecha: hemocultivos, eco y derivar', 'Duke no es requisito para actuar'],
          say: 'Pero ojo: para el médico general, Duke no es un requisito para actuar. Ante una sospecha razonable, se toman los hemocultivos, se pide el ecocardiograma y se deriva a un centro con equipo de endocarditis.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Antibiótico dirigido',
      title: 'El germen según el contexto',
      head: ['Contexto', 'Germen', 'Tratamiento'],
      rows: [
        { cells: ['Subaguda, válvula nativa, origen dental', 'Streptococcus viridans', 'Penicilina o ceftriaxona 4 semanas; prótesis 6'],
          say: 'Endocarditis subaguda sobre una válvula nativa, de origen dental: Streptococcus viridans. Se trata con penicilina sódica o ceftriaxona, cuatro semanas, y seis si hay prótesis.' },
        { cells: ['Aguda, usuario de drogas EV, tricúspide', 'Staphylococcus aureus', 'Cloxacilina 4-6 semanas; SARM: vancomicina'],
          say: 'Aguda, en un usuario de drogas endovenosas, en la tricúspide: Staphylococcus aureus. Cloxacilina por cuatro a seis semanas, y vancomicina si es resistente a meticilina.' },
        { cells: ['Prótesis precoz (< 2 meses de la cirugía)', 'S. aureus o S. epidermidis', 'Vancomicina + gentamicina + rifampicina, al menos 6 semanas'],
          say: 'Prótesis precoz, de menos de dos meses desde la cirugía: estafilococo aureus o epidermidis. Vancomicina, gentamicina y rifampicina por al menos seis semanas.' },
        { cells: ['Origen urinario o digestivo', 'Enterococo', 'Ampicilina + ceftriaxona o gentamicina, 6 semanas'],
          say: 'Origen urinario o digestivo: enterococo. Ampicilina con ceftriaxona o gentamicina, seis semanas.' },
        { cells: ['Cáncer de colon o hepatopatía', 'S. gallolyticus (bovis)', 'Penicilina; colonoscopia'],
          say: 'Y con cáncer de colon, Streptococcus gallolyticus, que antes se llamaba bovis. Se trata con penicilina y se hace una colonoscopia.' },
        { cells: ['Hemocultivo negativo', 'HACEK, Coxiella, Bartonella', 'Serología; infectología'],
          say: 'Con hemocultivos negativos, lo más frecuente es el antibiótico previo. Si no, el grupo HACEK, Coxiella o Bartonella, que se manejan con infectología.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento inicial',
      title: 'Hospitalizar, cultivar y tratar',
      cards: [
        { title: 'Conducta inicial', tag: 'Nivel inicial y derivación', kind: 'pharma', items: [
          { t: 'Hospitalizar; hemocultivos primero', d: 'Empírico solo si hay sepsis o IC',
            say: 'La conducta inicial: hospitalizar, tomar los hemocultivos y comenzar el antibiótico endovenoso sin esperar el resultado solo si el paciente está séptico o tiene insuficiencia cardíaca.' },
          { t: 'Nativa: ampicilina + cloxacilina + gentamicina', d: 'Prótesis o SARM: vancomicina + gentamicina',
            say: 'Para una válvula nativa adquirida en la comunidad, ampicilina, cloxacilina y gentamicina. Si hay prótesis o riesgo de resistencia, vancomicina y gentamicina. Se ajusta de inmediato al germen aislado.' },
          { t: 'Evitar anticoagulantes', d: 'Riesgo de hemorragia por embolia cerebral',
            say: 'Se evitan los anticoagulantes si no son indispensables, por el riesgo de hemorragia cerebral. Los hemocultivos se repiten a las cuarenta y ocho a setenta y dos horas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Cirugía',
      title: 'Cuándo se opera',
      cards: [
        { title: 'Indicaciones', tag: 'Centro de referencia', kind: 'alert', items: [
          { t: 'Insuficiencia cardíaca por válvula', d: 'La más frecuente y urgente',
            say: 'Se decide con el equipo en el centro de referencia. La indicación más frecuente y urgente es la insuficiencia cardíaca por disfunción valvular severa.' },
          { t: 'Infección no controlada', d: 'Absceso, bloqueo AV nuevo, fiebre > 7-10 días',
            say: 'Segunda, la infección no controlada: absceso, fístula, bloqueo aurículo-ventricular nuevo, o hemocultivos positivos y fiebre persistentes después de siete a diez días de tratamiento adecuado.' },
          { t: 'Prevenir embolias', d: 'Vegetación > 10 mm con embolia, o > 15 mm',
            say: 'Tercera, prevenir embolias: una vegetación mayor de diez milímetros con una o más embolias, o mayor de quince milímetros.' },
          { t: 'Germen difícil · prótesis disfuncional', d: 'Urgente en 24 h si shock o edema',
            say: 'Y los gérmenes difíciles, como hongos o estafilococo resistente persistente, y la prótesis con dehiscencia. Es urgente, dentro de veinticuatro horas, si hay shock o edema pulmonar refractario.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicaciones y formas especiales',
      title: 'Más allá de la válvula',
      cards: [
        { title: 'Complicaciones', tag: 'Definen el pronóstico', kind: 'alert', items: [
          { t: 'Embolias y aneurismas micóticos', d: 'ACV, bazo, riñón; la trombolisis está contraindicada',
            say: 'Las embolias sépticas afectan el cerebro, el bazo y el riñón. Los aneurismas micóticos pueden romperse semanas después: ante una cefalea nueva se pide una angiografía. Un accidente cerebrovascular en una endocarditis contraindica la trombolisis.' },
          { t: 'Glomerulonefritis inmune', d: 'C3 bajo, hematuria dismórfica',
            say: 'La glomerulonefritis por complejos inmunes da hematuria dismórfica, cilindros hemáticos, creatinina alta y complemento bajo, y mejora al tratar la infección.' },
        ] },
        { title: 'Formas especiales', tag: 'Derecha y no infecciosa', kind: 'key', items: [
          { t: 'Endocarditis derecha', d: 'Tricúspide; embolias pulmonares; cloxacilina',
            say: 'La endocarditis derecha del usuario de drogas se localiza en la tricúspide, con embolias sépticas pulmonares y un soplo que aumenta con la inspiración. Casi nunca da insuficiencia cardíaca izquierda y se opera solo si falla el tratamiento.' },
          { t: 'No infecciosa: marántica y Libman-Sacks', d: 'Hemocultivos negativos; heparina y tratar la causa',
            say: 'Existe también la endocarditis no infecciosa. La marántica, de los pacientes con cáncer, y la de Libman-Sacks, del lupus y del síndrome antifosfolípido. Tienen hemocultivos negativos y se tratan con anticoagulación y con la enfermedad de base, no con antibióticos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Profilaxis · 1.04.3.007',
      title: 'Solo alto riesgo y solo procedimientos dentales',
      cards: [
        { title: 'Quién y cuándo', tag: 'Se preguntó', kind: 'criteria', items: [
          { t: 'Prótesis valvular o endocarditis previa', d: 'Congénita cianótica o con material; trasplante con valvulopatía',
            say: 'La profilaxis ya no se da a todos los portadores de valvulopatía. Se reserva a los de alto riesgo: prótesis valvular, mecánica, biológica o transcatéter, o material protésico en una reparación, endocarditis previa, cardiopatía congénita cianótica no reparada, reparada con material en los primeros seis meses o con defectos residuales, y trasplante cardíaco con valvulopatía.' },
          { t: 'Procedimientos dentales con manipulación gingival', d: 'Extracciones, cirugía, limpieza profunda',
            say: 'Y solo para procedimientos dentales que manipulan la encía, la región periapical o perforan la mucosa. No se indica en endoscopia, colonoscopia, partos ni procedimientos urinarios, ni en la valvulopatía nativa.' },
        ] },
        { title: 'Esquema', tag: 'Dosis única', kind: 'pharma', items: [
          { t: 'Amoxicilina 2 g VO, 30-60 min antes', d: 'Una sola dosis; no se repite',
            say: 'El esquema es amoxicilina, dos gramos por vía oral, de treinta a sesenta minutos antes del procedimiento, en dosis única. No se dan dosis posteriores.' },
          { t: 'Alérgico: azitromicina o claritromicina 500 mg', d: 'Doxiciclina 100 mg; la clindamicina ya no',
            say: 'En alérgicos a la penicilina, azitromicina o claritromicina, quinientos miligramos, o doxiciclina, cien. La clindamicina ya no se recomienda. Y la mejor prevención es la higiene dental.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la fiebre con soplo a la cirugía.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Endocarditis: dato, decisión, error',
      head: ['Dato', 'Decisión', 'Error típico'],
      rows: [
        { cells: ['Fiebre prolongada + soplo nuevo', 'Hemocultivos x3 y ecocardiograma', 'Antibiótico empírico sin cultivos'],
          say: 'Fiebre prolongada con un soplo nuevo: tres hemocultivos y ecocardiograma. Dar antibióticos sin cultivar es el error.' },
        { cells: ['Examen para el diagnóstico etiológico', 'Hemocultivos', 'Ecocardiograma'],
          say: 'Si preguntan por el examen para el diagnóstico etiológico, la respuesta son los hemocultivos. El ecocardiograma muestra la vegetación.' },
        { cells: ['Subaguda con germen en cadena', 'Penicilina o ceftriaxona', 'Cloxacilina'],
          say: 'Cocáceas grampositivas en cadena en una subaguda: penicilina. La cloxacilina es para el estafilococo.' },
        { cells: ['Prótesis con menos de 2 meses', 'Estafilococo: vancomicina + gentamicina + rifampicina', 'Streptococcus viridans'],
          say: 'Prótesis con menos de dos meses de operada: estafilococo, con vancomicina, gentamicina y rifampicina. No es Streptococcus viridans.' },
        { cells: ['Usuario de drogas EV con embolias pulmonares', 'Tricúspide, S. aureus: cloxacilina', 'Cirugía de rutina'],
          say: 'Usuario de drogas con embolias pulmonares: tricúspide, estafilococo aureus, cloxacilina. La cirugía solo si falla.' },
        { cells: ['Estenosis aórtica nativa y extracción dental', 'Sin profilaxis', 'Amoxicilina de rutina'],
          say: 'Estenosis aórtica nativa que va a una extracción dental: sin profilaxis. Dar amoxicilina es el error.' },
        { cells: ['Prótesis y extracción dental', 'Amoxicilina 2 g, una vez, antes', 'Curso de 7 días después'],
          say: 'Prótesis valvular y extracción dental: amoxicilina dos gramos, una vez, antes. Un curso de siete días después es el error.' },
        { cells: ['ACV embólico en una endocarditis', 'No trombolizar', 'Trombolisis o anticoagulación'],
          say: 'Un accidente cerebrovascular embólico en una endocarditis: no se tromboliza ni se anticoagula de rutina.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 52 años, portador de una prótesis valvular aórtica biológica colocada hace 3 años, consulta por 3 semanas de fiebre vespertina, sudoración nocturna y baja de peso de 4 kg. Hace una semana se hizo una extracción dental sin profilaxis. T° 38,3 °C, soplo diastólico aórtico nuevo, hemorragias en astilla subungueales y nódulos dolorosos en la pulpa de los dedos. Hb 10 g/dL, leucocitos 13.000/mm³, PCR 85 mg/L. Tres hemocultivos tomados antes de los antibióticos son positivos para cocáceas grampositivas en cadena.',
      question: '¿Cuál es el diagnóstico y el manejo más adecuado?',
      options: [
        { letter: 'A', text: 'Endocarditis por S. viridans; ecocardiograma, penicilina o ceftriaxona por 6 semanas y derivar a centro con cirugía cardíaca' },
        { letter: 'B', text: 'Endocarditis por S. aureus; cloxacilina por 2 semanas' },
        { letter: 'C', text: 'Fiebre reumática; penicilina benzatina cada 3 semanas' },
        { letter: 'D', text: 'Endocarditis por S. viridans; amoxicilina oral ambulatoria por 10 días' },
        { letter: 'E', text: 'Observación y repetir los hemocultivos en un mes' },
      ],
      correct: 'A',
      explanation: 'Endocarditis protésica tardía subaguda por Streptococcus viridans de origen dental, con dos criterios mayores (hemocultivos típicos y regurgitación valvular nueva) más menores (predisposición, fiebre, fenómenos inmunológicos): definida. Se hospitaliza, se pide ecocardiograma transtorácico y transesofágico, penicilina sódica o ceftriaxona endovenosa por 6 semanas (prótesis) y se deriva a un centro con cirugía cardíaca. Debió recibir amoxicilina 2 g, 30 a 60 minutos antes de la extracción.',
      say: {
        stem: 'Un hombre de cincuenta y dos años, con una prótesis aórtica biológica de tres años, tiene tres semanas de fiebre vespertina, sudoración nocturna y baja de peso. Se hizo una extracción dental hace una semana, sin profilaxis. Tiene un soplo diastólico aórtico nuevo, hemorragias en astilla y nódulos dolorosos en la pulpa de los dedos. Tres hemocultivos tomados antes del antibiótico muestran cocáceas grampositivas en cadena.',
        question: '¿Cuál es el diagnóstico y el manejo más adecuado?',
        options: 'Las opciones: endocarditis por viridans con ecocardiograma, penicilina por seis semanas y derivación; endocarditis por aureus con cloxacilina por dos semanas; fiebre reumática; viridans con amoxicilina oral ambulatoria; o observación. Piénsalo.',
        answer: 'Es la A. Es una endocarditis protésica subaguda por Streptococcus viridans, de origen dental: dos criterios mayores y varios menores. Se trata con penicilina o ceftriaxona endovenosa por seis semanas, por ser prótesis, y se deriva. La D tienta por el germen, pero la endocarditis nunca se trata con antibiótico oral ambulatorio. Y este paciente debió recibir amoxicilina dos gramos antes de la extracción.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 70',
      stem: 'Un paciente de 45 años, consulta por fiebre de 3 semanas de evolución sin otros síntomas. Al examen físico tiene temperatura 37,8°C, frecuencia cardiaca de 92 por minuto, con presión arterial 120/80mmHG. Al examen cardiaco se ausculta un soplo sistólico en ápex irradiado a dorso. En sus exámenes destacan leucocitos de 12.000/mm3 y PCR 9,6 (valor normal menor a 1,0).',
      question: '¿Cuál es el examen de elección para continuar el estudio?',
      options: [
        { letter: 'A', text: 'Ecocardiografía bidimensional' },
        { letter: 'B', text: 'Resonancia magnética cardiaca' },
        { letter: 'C', text: 'Radiografía de tórax' },
        { letter: 'D', text: 'AngioTAC de tórax' },
        { letter: 'E', text: 'TAC de tórax abdomen y pelvis' },
      ],
      correct: 'A',
      explanation: 'Fiebre prolongada de 3 semanas con un soplo sistólico apical irradiado al dorso, leucocitosis y PCR elevada: endocarditis subaguda hasta demostrar lo contrario. Se piden hemocultivos y ecocardiografía; el ecocardiograma es el examen de imagen de elección para ver la vegetación y las complicaciones valvulares.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un hombre de cuarenta y cinco años tiene tres semanas de fiebre sin otros síntomas. Hay un soplo sistólico en el ápex irradiado al dorso, leucocitosis y una proteína C reactiva elevada.',
        question: '¿Cuál es el examen de elección para continuar el estudio?',
        options: 'Las opciones: ecocardiografía bidimensional; resonancia cardíaca; radiografía de tórax; angioTAC de tórax; o TAC de tórax, abdomen y pelvis. Piénsalo.',
        answer: 'Es la A. Fiebre prolongada con un soplo es una endocarditis subaguda hasta demostrar lo contrario, y el examen de imagen es el ecocardiograma, junto con los hemocultivos. La E tienta porque busca un foco, pero acá el soplo ya apunta al corazón.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 63',
      stem: 'Un paciente de 57 años consulta por un cuadro de 7 días de astenia, malestar general, fiebre hasta 39 grados celsius. Al examen físico tiene un soplo pansistólico III/VI en el precordio izquierdo, además de apreciarse petequias en los pulpejos y alguna petequias subconjuntivales.',
      question: '¿Cuál es el examen de elección para el diagnóstico etiológico?',
      options: [
        { letter: 'A', text: 'Ecocardiograma' },
        { letter: 'B', text: 'Hemocultivos' },
        { letter: 'C', text: 'Hemograma' },
        { letter: 'D', text: 'Coronariografía' },
        { letter: 'E', text: 'ANA y complemento' },
      ],
      correct: 'B',
      explanation: 'Fiebre, soplo y petequias en los pulpejos y la conjuntiva: endocarditis subaguda. Para el diagnóstico etiológico se piden hemocultivos (tres, antes del antibiótico); el ecocardiograma es el examen de imagen y define la complicación valvular.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Un hombre de cincuenta y siete años tiene siete días de astenia y fiebre de treinta y nueve grados. Hay un soplo pansistólico de grado tres, y petequias en los pulpejos y en la conjuntiva.',
        question: '¿Cuál es el examen de elección para el diagnóstico etiológico?',
        options: 'Las opciones: ecocardiograma; hemocultivos; hemograma; coronariografía; o anticuerpos antinucleares y complemento. Piénsalo.',
        answer: 'Es la B. Se pregunta por el diagnóstico etiológico, es decir, por el germen, y para eso se piden los hemocultivos. La A tienta porque también es un examen clave, pero el ecocardiograma muestra la vegetación y no dice qué germen la produjo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 123',
      stem: 'Un paciente de 51 años, con antecedente de un recambio valvular, secundario a una valvulopatía, consulta por un cuadro de 2 semanas de astenia, fiebre y malestar general. Al examen físico tiene T°: 38,2°C, PA: 120/80 mmHg, FC: 94x’, se observan lesiones eritematosas en los dedos de ambas manos y algunas petequias en las extremidades inferiores y, en el examen cardíaco, se aprecia un soplo diastólico de intensidad IV/VI. Se solicitan exámenes de sangre, entre los que destaca PCR: 12 mg/L, VHS: 70 mm/h y leucocitosis de 16.000 por mm3. Además, se realizan 3 hemocultivos, que resultan todos positivos para cocáceas Gram positivas, en cadena.',
      question: '¿Cuál es el antibiótico de elección para iniciar el tratamiento?',
      options: [
        { letter: 'A', text: 'Penicilina sódica' },
        { letter: 'B', text: 'Cloxacilina' },
        { letter: 'C', text: 'Clindamicina' },
        { letter: 'D', text: 'Ceftazidima' },
        { letter: 'E', text: 'Gentamicina' },
      ],
      correct: 'A',
      explanation: 'Portador de una prótesis valvular con fiebre, lesiones eritematosas en los dedos y petequias, soplo diastólico y hemocultivos con cocáceas grampositivas en cadena: endocarditis subaguda por Streptococcus viridans, que se trata con penicilina sódica (o ceftriaxona) por 4 semanas, y por 6 semanas si hay prótesis. La cloxacilina se reserva al S. aureus y la gentamicina sola no es suficiente.',
      say: {
        stem: 'Una pregunta real del EUNACOM de diciembre de dos mil dieciocho. Un hombre de cincuenta y un años, con un recambio valvular previo, tiene dos semanas de astenia y fiebre. Tiene lesiones eritematosas en los dedos, petequias y un soplo diastólico de grado cuatro. Los tres hemocultivos muestran cocáceas grampositivas en cadena.',
        question: '¿Cuál es el antibiótico de elección para iniciar el tratamiento?',
        options: 'Las opciones: penicilina sódica; cloxacilina; clindamicina; ceftazidima; o gentamicina. Piénsalo.',
        answer: 'Es la A. Cocáceas grampositivas en cadena en una endocarditis subaguda son Streptococcus viridans, y se tratan con penicilina sódica. La B tienta porque es el antibiótico del estafilococo, pero el estafilococo se ve en racimos, y no en cadena.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 136',
      stem: 'Paciente operado de válvula cardíaca hace 2 meses. Presenta fiebre, soplo cardíaco nuevo y hemocultivos positivos.',
      question: '¿Cuál es el agente más probable en endocarditis infecciosa post-cirugía cardíaca precoz?',
      options: [
        { letter: 'A', text: 'Staphylococcus aureus o S. epidermidis' },
        { letter: 'B', text: 'Streptococcus viridans' },
        { letter: 'C', text: 'Enterococcus faecalis' },
        { letter: 'D', text: 'HACEK group' },
        { letter: 'E', text: 'Candida albicans' },
      ],
      correct: 'A',
      explanation: 'En el posoperatorio precoz de una cirugía valvular (< 2 meses), los gérmenes más probables son los estafilococos adquiridos en el pabellón (S. aureus y S. epidermidis); el S. viridans causa la endocarditis tardía de origen dental, y los enterococos y HACEK son menos frecuentes.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un paciente operado de una válvula cardíaca hace dos meses tiene fiebre, un soplo nuevo y hemocultivos positivos.',
        question: '¿Cuál es el agente más probable en la endocarditis posterior a una cirugía cardíaca precoz?',
        options: 'Las opciones: Staphylococcus aureus o epidermidis; Streptococcus viridans; Enterococcus faecalis; grupo HACEK; o Candida albicans. Piénsalo.',
        answer: 'Es la A. En la endocarditis protésica precoz, los gérmenes son hospitalarios: estafilococo aureus o epidermidis, adquiridos en el pabellón. La B tienta porque es el germen clásico de la endocarditis, pero el viridans causa la forma tardía, de origen dental.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 154',
      stem: 'Un paciente de 33 años, hospitalizado por una endocarditis subaguda por estreptococus víridans, en tratamiento con penicilina y gentamicina por vía endovenosa, presenta un cuadro de hematuria de algunos días de evolución. Se solicita sedimento de orina que muestra 50 glóbulos rojos por campo con 95% de dismorfia y presencia de cilindros hemáticos, creatinina de 2,4mg/dL, ANA (-), fracción C3 del complemento de 53mg/dL (valor normal: 75-135 mg/dL).',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Embolias renales a repetición' },
        { letter: 'B', text: 'Nefritis intersticial secundaria al uso de penicilina' },
        { letter: 'C', text: 'Daño tubular agudo secundario al uso de gentamicina' },
        { letter: 'D', text: 'Glomerulonefritis por depósito de complejos inmunes' },
        { letter: 'E', text: 'Síndrome hemolítico urémico' },
      ],
      correct: 'D',
      explanation: 'Un paciente con endocarditis por S. viridans que desarrolla hematuria dismórfica, cilindros hemáticos, creatinina elevada y C3 bajo tiene una glomerulonefritis por depósito de complejos inmunes: un fenómeno inmunológico de la endocarditis. La nefritis intersticial por penicilina daría eosinofiluria, y el daño tubular por gentamicina no produce cilindros hemáticos ni hipocomplementemia.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil diecisiete. Un hombre de treinta y tres años está hospitalizado por una endocarditis por estreptococo viridans, con penicilina y gentamicina endovenosas. Presenta hematuria. El sedimento muestra cincuenta glóbulos rojos por campo, con noventa y cinco por ciento de dismorfia, cilindros hemáticos, una creatinina de dos coma cuatro y un complemento C tres bajo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: embolias renales; nefritis intersticial por penicilina; daño tubular por gentamicina; glomerulonefritis por complejos inmunes; o síndrome hemolítico urémico. Piénsalo.',
        answer: 'Es la D. La hematuria dismórfica con cilindros hemáticos y el complemento bajo son una glomerulonefritis por complejos inmunes, un fenómeno inmunológico de la propia endocarditis. La C tienta porque está recibiendo gentamicina, pero el daño tubular no da cilindros hemáticos ni baja el complemento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un hombre de 60 años, portador de una prótesis valvular aórtica mecánica, debe someterse a una extracción dental. No tiene alergias.',
      question: '¿Cuál es la profilaxis de endocarditis infecciosa más adecuada?',
      options: [
        { letter: 'A', text: 'No requiere profilaxis' },
        { letter: 'B', text: 'Ciprofloxacino oral' },
        { letter: 'C', text: 'Amoxicilina 500 mg cada 8 horas por 7 días después del procedimiento' },
        { letter: 'D', text: 'Amoxicilina 2 g oral, 30 a 60 minutos antes del procedimiento' },
        { letter: 'E', text: 'Vancomicina endovenosa por 5 días' },
      ],
      correct: 'D',
      explanation: 'La profilaxis está indicada en pacientes de alto riesgo (prótesis valvular, endocarditis previa, ciertas cardiopatías congénitas) sometidos a procedimientos dentales con manipulación gingival o periapical. Se usa una dosis única de amoxicilina 2 g oral, 30 a 60 minutos antes; en alérgicos, un macrólido. No se recomiendan cursos prolongados posteriores.',
      say: {
        stem: 'Un hombre de sesenta años, con una prótesis aórtica mecánica, se va a hacer una extracción dental. No tiene alergias.',
        question: '¿Cuál es la profilaxis de endocarditis más adecuada?',
        options: 'Las opciones: no requiere profilaxis; ciprofloxacino oral; amoxicilina cada ocho horas por siete días después; amoxicilina dos gramos, treinta a sesenta minutos antes; o vancomicina endovenosa por cinco días. Piénsalo.',
        answer: 'Es la D. Una prótesis valvular es de alto riesgo, y una extracción manipula la encía: amoxicilina, dos gramos por vía oral, treinta a sesenta minutos antes, una sola vez. La C tienta porque suena a un tratamiento completo, pero no se dan dosis posteriores.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: endocarditis',
      cards: [
        { title: 'Diagnosticar', tag: 'Cultivar primero', kind: 'key', items: [
          { t: 'Fiebre + soplo nuevo o cambiante', d: 'Tres hemocultivos ANTES del antibiótico; eco',
            say: 'Cerremos con las reglas de oro. Fiebre con un soplo nuevo o cambiante, fenómenos embólicos o inmunológicos: endocarditis hasta demostrar lo contrario. Tres hemocultivos antes del antibiótico, que es el examen del germen, y ecocardiograma, que ve la vegetación.' },
          { t: 'Duke: 2 mayores, 1 + 3, o 5 menores', d: 'Osler duele, Janeway no',
            say: 'Duke define la endocarditis con dos mayores, un mayor y tres menores, o cinco menores. Los nódulos de Osler duelen, y las lesiones de Janeway no.' },
        ] },
        { title: 'Tratar y prevenir', tag: 'Germen y profilaxis', kind: 'alert', items: [
          { t: 'Viridans: penicilina 4 semanas (prótesis 6)', d: 'S. aureus: cloxacilina; prótesis precoz: vancomicina',
            say: 'El viridans se trata con penicilina o ceftriaxona por cuatro semanas, seis con prótesis. El aureus, con cloxacilina. La prótesis precoz, con vancomicina, gentamicina y rifampicina.' },
          { t: 'Cirugía por IC, infección no controlada o embolias', d: 'Profilaxis solo alto riesgo y dental',
            say: 'Se opera por insuficiencia cardíaca, infección no controlada o embolias con vegetación grande. Y la profilaxis es solo para alto riesgo y procedimientos dentales: amoxicilina dos gramos, una vez, antes. Si te llevas una sola idea de hoy: ante una fiebre con un soplo, primero los hemocultivos, y después el antibiótico. Nos vemos en la próxima clase, con la hipertensión arterial.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Endocarditis infecciosa: de la fiebre con soplo a la cirugía',
    root: N('start', 'Fiebre + soplo nuevo o cambiante', 'Riesgo: prótesis, drogas EV, valvulopatía',
      'Un paciente con fiebre y un soplo nuevo o que cambia, o con fenómenos embólicos o inmunológicos. Lo primero es no dar antibióticos antes de cultivar.',
      ['Sospecha razonable', N('q', 'Hemocultivos x3 + ecocardiograma', 'Antes del antibiótico; transesofágico si prótesis',
        'Tomas tres hemocultivos de sitios distintos antes de cualquier antibiótico, y pides el ecocardiograma, transesofágico si hay prótesis. Y aplicas Duke.',
        ['Duke definida o posible', N('alert', 'Hospitalizar y tratar', 'Empírico si hay sepsis o IC; luego dirigido',
          'Con la endocarditis definida, o posible con alta sospecha, hospitalizas e inicias el antibiótico endovenoso, empírico si hay sepsis o insuficiencia cardíaca, y luego dirigido al germen, de cuatro a seis semanas.',
          ['IC, absceso, embolias o germen difícil', N('refer', 'Cirugía valvular', 'Centro con equipo de endocarditis',
            'Si hay insuficiencia cardíaca, infección no controlada, embolias con vegetación grande o un germen difícil, se opera en un centro con equipo de endocarditis.')],
          ['Buena evolución', N('ok', 'Completar el tratamiento', 'Control, eco final y salud dental',
            'Si evoluciona bien, se completa el tratamiento, se hace un ecocardiograma de control y se cuida la salud dental.')],
        )],
      )],
      ['Paciente de alto riesgo con procedimiento dental', N('do', 'Profilaxis', 'Amoxicilina 2 g, una vez, antes',
        'Si es un paciente de alto riesgo, con prótesis o endocarditis previa, que va a un procedimiento dental con manipulación gingival, se da amoxicilina dos gramos, una sola vez, antes.')],
    ),
  },
};
