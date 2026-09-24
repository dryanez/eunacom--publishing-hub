// Clase 1.2 — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_reumatologia.cjs (reuma-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'reuma-02',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Microbiología, los dos pilares simultáneos y las articulaciones de rescate quirúrgico',
      say: 'Bienvenidos. Hoy abordamos la artritis séptica del adulto y de prótesis articulares, la emergencia reumatológica más destructiva del EUNACOM. Una articulación infectada es un absceso a tensión: destruye los condrocitos en cuestión de horas y produce secuelas articulares irreversibles si te demoras. La conducta descansa en dos pilares inseparables: descompresión mecánica urgente y antibióticos bactericidas endovenosos. Vamos a revisar la microbiología, los esquemas empíricos y por qué la cadera nunca puede esperar. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Cómo llega la bacteria a la articulación?',
      nodes: [
        { id: 'foc', col: 0, row: 1, k: 'cause', t: 'Foco bacteriano a distancia', s: 'Piel · boca · orina · catéter' },
        { id: 'hem', col: 1, row: 1, k: 'mech', t: 'Diseminación hematógena', s: 'La vía más frecuente en adultos' },
        { id: 'sin', col: 2, row: 1, k: 'mech', t: 'Siembra en membrana sinovial', s: 'Muy vascularizada · sin lámina basal' },
        { id: 'pus', col: 3, row: 0, k: 'alert', t: 'Pus a tensión y neutrófilos', s: 'Enzimas lisosomales destructivas' },
        { id: 'des', col: 4, row: 0, k: 'alert', t: 'Condrólisis irreversible', s: 'Destrucción en 24 a 48 horas' },
        { id: 'ino', col: 1, row: 3, k: 'trap', t: 'Inoculación o contigüidad', s: 'Infiltración previa o trauma penetrante' },
      ],
      edges: [
        { from: 'foc', to: 'hem' },
        { from: 'hem', to: 'sin' },
        { from: 'sin', to: 'pus' },
        { from: 'pus', to: 'des' },
        { from: 'ino', to: 'sin', label: 'vía directa' },
      ],
      steps: [
        { show: ['foc', 'hem'], note: 'La vía hematógena domina',
          say: 'La gran mayoría de las artritis sépticas en el adulto se producen por vía hematógena. Una bacteriemia transitoria originada en una herida cutánea, un procedimiento dental, una infección urinaria o un catéter venoso siembra gérmenes en el torrente sanguíneo.' },
        { show: ['sin'], note: 'La sinovial es vulnerable',
          say: 'La membrana sinovial es ricamente vascularizada y carece de una lámina basal limitante. Eso permite que las bacterias pasen con enorme facilidad desde los capilares directo al espacio intraarticular.' },
        { show: ['pus'], note: 'Reacción purulenta masiva',
          say: 'Una vez dentro, se desencadena una respuesta inflamatoria masiva con migración de millones de neutrófilos. La articulación se transforma en un absceso cerrado a alta presión.' },
        { show: ['des'], note: 'Daño rápido e irreparable',
          say: 'Las enzimas lisosomales de los neutrófilos y las toxinas bacterianas destruyen la matriz de colágeno y los condrocitos en apenas veinticuatro a cuarenta y ocho horas. De ahí la urgencia de descomprimir.' },
        { show: ['ino'], note: 'Otras vías de entrada',
          say: 'Otras vías menos frecuentes pero siempre preguntadas son la inoculación directa tras una infiltración o artroscopía, y la extensión por contigüidad desde una osteomielitis o celulitis profunda.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Microbiología EUNACOM',
      title: 'Los cuatro perfiles bacterianos clave',
      cards: [
        { title: 'Staphylococcus aureus', tag: 'El rey absoluto', kind: 'alert', items: [
          { t: 'Más del 50 a 60% de los casos', d: 'Principal agente en todas las edades',
            say: 'Estafilococo áureo es la causa más común en todas las edades y en ambos sexos, explicando más de la mitad de todos los casos en articulaciones nativas y protésicas.' },
          { t: 'Cocos grampositivos en racimo', d: 'Evaluar riesgo de SAMR',
            say: 'En la tinción de Gram se observa como cocos grampositivos en racimo. En Chile siempre debemos estratificar si el paciente tiene factores de riesgo para estafilococo resistente a meticilina.' },
        ] },
        { title: 'Streptococcus y bacilos entéricos', tag: 'Poblaciones especiales', kind: 'criteria', items: [
          { t: 'Estreptococos: 15 a 20%', d: 'Pyogenes, agalactiae y pneumoniae',
            say: 'Los estreptococos ocupan el segundo lugar, con un quince a veinte por ciento. Destaca estreptococo agalactiae en diabéticos y ancianos, y neumococo en pacientes alcohólicos o esplenectomizados.' },
          { t: 'Bacilos gramnegativos: 10 a 15%', d: 'E. coli, Klebsiella y Pseudomonas',
            say: 'Los bacilos gramnegativos entéricos se presentan en adultos mayores frágiles, usuarios de sondas urinarias, o pacientes adictos a drogas endovenosas donde Pseudomonas es característica.' },
        ] },
        { title: 'Neisseria gonorrhoeae', tag: 'Adulto joven activo', kind: 'key', items: [
          { t: 'Síndrome artritis-dermatitis', d: 'Tenosinovitis y pústulas acrales',
            say: 'En adultos jóvenes con vida sexual activa, el patógeno clásico es Neisseria gonorrhoeae. Se manifiesta con el síndrome de artritis y dermatitis: fiebre, tenosinovitis migratoria de manos o muñecas y pústulas escasas en la piel.' },
          { t: 'Gram positivo en menos del 25%', d: 'Diplococos gramnegativos intracelulares',
            say: 'Luego evoluciona a una monoartritis purulenta de rodilla o tobillo. Ojo en el examen: la tinción de Gram suele ser negativa en más del setenta y cinco por ciento de las infecciones gonocócicas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica y sospecha',
      title: 'El paciente con articulación infectada',
      cards: [
        { title: 'Signos cardinales', tag: 'Inspección y palpación', kind: 'alert', items: [
          { t: 'Dolor agudo lancinante', d: 'Con derrame y calor local',
            say: 'El paciente consulta por dolor monoarticular lancinante de comienzo brusco, con marcado aumento de volumen, calor y eritema sobre la articulación.' },
          { t: 'Movilidad pasiva intolerable', d: 'La maniobra física que manda',
            say: 'El signo físico más orientador es la limitación funcional absoluta: el paciente no tolera ni el más mínimo intento de movilización activa o pasiva. Si la articulación se deja mover sin dolor, duda del diagnóstico.' },
        ] },
        { title: 'Fiebre y excepciones', tag: 'Termometría', kind: 'criteria', items: [
          { t: 'Fiebre en 60 a 80% de casos', d: 'Generalmente alta con calofríos',
            say: 'La fiebre con calofríos está presente en el sesenta a ochenta por ciento de los pacientes.' },
          { t: 'Puede faltar en ancianos', d: 'O bajo inmunosupresión profunda',
            say: 'Sin embargo, en adultos mayores frágiles, diabéticos o usuarios crónicos de corticoides, la fiebre puede estar ausente. Su ausencia jamás descarta una artritis séptica si la clínica articular es llamativa.' },
        ] },
        { title: 'Factores de riesgo', tag: 'Terreno predisponente', kind: 'key', items: [
          { t: 'Artritis reumatoide previa', d: 'El mayor factor de riesgo articular',
            say: 'Tener una artritis reumatoide previa es uno de los mayores factores de riesgo: una articulación dañada y crónicamente inflamada es el blanco perfecto para la siembra de bacterias circulantes.' },
          { t: 'Diabetes, diálisis y prótesis', d: 'Inmunocompromiso y cuerpos extraños',
            say: 'Otros factores determinantes son la diabetes mellitus, la insuficiencia renal en hemodiálisis y la presencia de prótesis articulares.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico diferencial físico',
      title: 'Artritis séptica versus bursitis prepatelar u olecraneana',
      nodes: [
        { id: 'sus', col: 0, row: 1, k: 'start', t: 'Dolor y aumento de volumen', s: 'Rodilla o codo inflamado' },
        { id: 'mov', col: 1, row: 1, k: 'q', t: '¿Cómo es la movilidad pasiva?', s: 'Examen físico dirigido' },
        { id: 'art', col: 2, row: 0, k: 'alert', t: 'Artritis séptica intraarticular', s: 'Dolor exquisito pasivo y activo' },
        { id: 'bur', col: 2, row: 2, k: 'good', t: 'Bursitis superficial', s: 'Movilidad pasiva articular conservada' },
        { id: 'con', col: 3, row: 0, k: 'alert', t: 'Artrocentesis + pabellón', s: 'Pus a tensión dentro de la cápsula' },
        { id: 'tra', col: 3, row: 2, k: 'good', t: 'Punción de bursa o AINEs', s: 'Patología extracapsular' },
      ],
      edges: [
        { from: 'sus', to: 'mov' },
        { from: 'mov', to: 'art', label: 'intolerable' },
        { from: 'mov', to: 'bur', label: 'conservada' },
        { from: 'art', to: 'con' },
        { from: 'bur', to: 'tra' },
      ],
      steps: [
        { show: ['sus', 'mov'], note: 'La trampa del examen físico',
          say: 'Una de las trampas más repetidas en el examen es confundir una artritis séptica con una bursitis, especialmente en la rodilla con la bursa prepatelar o en el codo con el olécranon.' },
        { show: ['art'], note: 'Compromiso intraarticular difuso',
          say: 'En la artritis séptica el proceso es intraarticular: cualquier intento de movilizar pasivamente la rodilla o el codo genera un dolor insoportable, porque toda la cápsula y la sinovial están a tensión.' },
        { show: ['bur'], note: 'Proceso puramente extracapsular',
          say: 'En cambio, en la bursitis el líquido está en la bolsa extracapsular, por delante de la rótula o sobre el olécranon. La flexión pasiva de la articulación está conservada o causa muy poca molestia.' },
        { show: ['con', 'tra'], note: 'Conductas opuestas',
          say: 'Esa simple maniobra te salva de llevar a pabellón una bursitis superficial, o al revés, de dar de alta con antiinflamatorios una articulación llena de pus.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Conducta integral',
      title: 'Los dos pilares inseparables de tratamiento',
      nodes: [
        { id: 'dx', col: 0, row: 1, k: 'start', t: 'Diagnóstico de artritis séptica', s: 'Líquido purulento o > 50.000 GB' },
        { id: 'hem', col: 1, row: 0, k: 'mech', t: 'Hemocultivos x 2 inmediatos', s: 'Previos al primer antibiótico' },
        { id: 'atb', col: 2, row: 0, k: 'alert', t: 'Pilar 1: Antibióticos EV', s: 'Bactericidas a dosis plenas' },
        { id: 'drn', col: 2, row: 2, k: 'alert', t: 'Pilar 2: Drenaje articular', s: 'Descompresión mecánica urgente' },
        { id: 'con', col: 3, row: 1, k: 'good', t: 'Salvar la función articular', s: 'Prevenir anquilosis y artrosis' },
      ],
      edges: [
        { from: 'dx', to: 'hem' },
        { from: 'hem', to: 'atb' },
        { from: 'dx', to: 'drn' },
        { from: 'atb', to: 'con' },
        { from: 'drn', to: 'con' },
      ],
      steps: [
        { show: ['dx', 'hem'], note: 'Paso cero obligatorio',
          say: 'Confirmado el líquido séptico, el paso previo a la medicación es tomar dos pares de hemocultivos de venas periféricas distintas. En la mitad de los pacientes son positivos y te darán el antibiograma definitivo.' },
        { show: ['atb'], note: 'Pilar médico',
          say: 'El primer pilar es el tratamiento antimicrobiano bactericida endovenoso a dosis plenas. Debe iniciarse de inmediato, sin esperar los resultados de los cultivos.' },
        { show: ['drn'], note: 'Pilar quirúrgico mecánico',
          say: 'Y el segundo pilar es la descompresión mecánica urgente. Los antibióticos no pueden penetrar adecuadamente ni detener el daño si no se vacía el pus acumulado y se disminuye la presión intraarticular.' },
        { show: ['con'], note: 'La meta final',
          say: 'Ningún pilar funciona sin el otro. Si solo das antibióticos el cartílago se destruye; si solo drenas sin antibióticos la articulación se reinfecta en pocas horas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Antimicrobianos empíricos',
      title: 'Esquemas de rescate según escenario clínico',
      cards: [
        { title: 'Adulto estándar comunitario', tag: 'SASM habitual', kind: 'pharma', items: [
          { t: 'Cefazolina 2 g EV cada 8 h', d: 'O cloxacilina 2 g EV cada 4 horas',
            say: 'En el adulto estándar de la comunidad sin factores de riesgo para resistencia, el esquema de elección es cefazolina dos gramos endovenosos cada ocho horas, o cloxacilina dos gramos cada cuatro horas.' },
          { t: 'Excelente penetración articular', d: 'Cubre SASM y estreptococos',
            say: 'Ambos betalactámicos tienen excelente penetración sinovial y cubren estafilococo áureo sensible y estreptococos.' },
        ] },
        { title: 'Sospecha de SAMR o intrahospitalario', tag: 'Resistencia', kind: 'alert', items: [
          { t: 'Vancomicina 15 a 20 mg/kg cada 12 h', d: 'Con niveles plasmáticos valle de 15 a 20',
            say: 'Si el paciente está colonizado por estafilococo resistente a meticilina, está en hemodiálisis, tiene hospitalización reciente o sepsis grave, se inicia vancomicina quince a veinte miligramos por kilo cada doce horas.' },
          { t: 'Daptomicina como alternativa', d: '8 a 10 mg/kg al día',
            say: 'En pacientes con insuficiencia renal o toxicidad por vancomicina, la alternativa recomendada es daptomicina ocho a diez miligramos por kilo al día.' },
        ] },
        { title: 'Gramnegativos y gonococo', tag: 'Espectro dirigido', kind: 'criteria', items: [
          { t: 'Ceftriaxona 2 g EV al día', d: 'Añadir en ancianos, ITU o drogas EV',
            say: 'En ancianos frágiles, pacientes con infección urinaria concurrente o sospecha de gramnegativos, se añade ceftriaxona dos gramos endovenosos al día a la cobertura antiestafilocócica.' },
          { t: 'Ceftriaxona + Azitromicina', d: 'En artritis gonocócica diseminada',
            say: 'Y en el adulto joven con sospecha gonocócica, se indica ceftriaxona uno a dos gramos endovenosos al día más un gramo de azitromicina oral en dosis única para cubrir clamidia.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Técnica de drenaje',
      title: 'Rodilla versus cadera: cuándo operar de inmediato',
      nodes: [
        { id: 'art', col: 0, row: 1, k: 'start', t: 'Articulación infectada', s: 'Decidir vía de drenaje' },
        { id: 'rod', col: 1, row: 0, k: 'good', t: 'Rodilla u hombro accesible', s: 'Superficial y compresible' },
        { id: 'cad', col: 1, row: 2, k: 'alert', t: 'Cadera del adulto o niño', s: 'Profunda · cápsula no distensible' },
        { id: 'pun', col: 2, row: 0, k: 'mech', t: 'Punciones evacuadoras o artroscopía', s: 'Aspiración diaria con aguja gruesa' },
        { id: 'pab', col: 2, row: 2, k: 'alert', t: 'Aseo quirúrgico urgente en pabellón', s: 'Artrotomía abierta o artroscopía' },
        { id: 'avn', col: 3, row: 2, k: 'trap', t: 'Peligro de necrosis avascular', s: 'Isquemia de cabeza femoral' },
      ],
      edges: [
        { from: 'art', to: 'rod' },
        { from: 'art', to: 'cad' },
        { from: 'rod', to: 'pun' },
        { from: 'cad', to: 'pab' },
        { from: 'pab', to: 'avn', label: 'previene' },
      ],
      steps: [
        { show: ['art', 'rod'], note: 'Articulación de fácil acceso',
          say: 'La técnica de drenaje depende de la anatomía de la articulación. En la rodilla, que es superficial y accesible, se puede iniciar con artrocentesis evacuadoras diarias con aguja gruesa o lavado artroscópico.' },
        { show: ['cad'], note: 'La cadera es una emergencia quirúrgica absoluta',
          say: 'Pero mucha atención con la cadera: la cadera es una articulación profunda, inextensible y rodeada por una cápsula fibrosa muy rígida.' },
        { show: ['pab'], note: 'Siempre va directo a pabellón',
          say: 'En la cadera, las punciones cerradas son ineficaces y peligrosas. Toda artritis séptica de cadera requiere aseo quirúrgico formal urgente en pabellón, ya sea por artrotomía abierta o artroscopía.' },
        { show: ['avn'], note: 'Riesgo de necrosis avascular',
          say: '¿Por qué la urgencia quirúrgica? Porque el pus a tensión dentro de la cadera colapsa los vasos retinaculares e interrumpe el flujo sanguíneo a la cabeza femoral, provocando necrosis avascular irreversible.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Infección protésica',
      title: 'Prótesis articular y el biofilm',
      cards: [
        { title: 'Tiempos de presentación', tag: 'Cronología', kind: 'criteria', items: [
          { t: 'Precoz en menos de 3 meses', d: 'Adquirida durante la cirugía',
            say: 'Las infecciones sobre prótesis se clasifican según el tiempo: precoz si aparece antes de los tres meses de la cirugía, habitualmente por gérmenes virulentos como estafilococo áureo.' },
          { t: 'Tardía entre 3 y 24 meses', d: 'Gérmenes de baja virulencia',
            say: 'Tardía entre los tres y veinticuatro meses, dominada por estafilococo epidermidis y bacterias formadoras de biofilm, o hematógena aguda en cualquier momento.' },
        ] },
        { title: 'Estrategia quirúrgica', tag: 'DAIR vs recambio', kind: 'alert', items: [
          { t: 'Desbridamiento con retención', d: 'Solo si síntomas duran menos de 3 semanas',
            say: 'El desbridamiento con retención del implante solo se indica si la prótesis está mecánicamente fija y los síntomas tienen menos de tres semanas de evolución.' },
          { t: 'Recambio protésico en uno o dos tiempos', d: 'La conducta estándar habitual',
            say: 'En todos los demás casos se debe retirar el material infectado y realizar un recambio protésico en uno o dos tiempos.' },
        ] },
        { title: 'Rifampicina obligatoria', tag: 'Destruye el biofilm', kind: 'pharma', items: [
          { t: 'Rifampicina 300 a 450 mg cada 12 h', d: 'Vía oral asociada al antibiótico base',
            say: 'En infecciones por estafilococo sobre prótesis es mandatorio asociar rifampicina oral trescientos a cuatrocientos cincuenta miligramos cada doce horas.' },
          { t: 'Solo tras controlar el inóculo', d: 'Nunca como monoterapia',
            say: 'La rifampicina penetra y erradica el biofilm bacteriano sobre el titanio o polietileno. Se inicia una vez drenado el pus y nunca como monoterapia para no generar resistencia.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Veamos el algoritmo completo de decisiones frente a la sospecha de artritis séptica.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Esquemas antimicrobianos empíricos en artritis séptica',
      head: ['Escenario clínico', 'Microorganismo sospechoso', 'Esquema empírico de elección', 'Drenaje y duración'],
      rows: [
        { cells: ['Adulto sano comunitario', 'S. aureus sensible y Streptococcus', 'Cefazolina 2 g c/8h EV (o Cloxacilina 2 g c/4h)', 'Punción repetida o artroscopía · 3 a 4 semanas'],
          say: 'Repasemos la tabla de esquemas empíricos. Adulto sano comunitario con sospecha de estafilococo sensible: cefazolina dos gramos cada ocho horas endovenosa o cloxacilina dos gramos cada cuatro horas. Duración de tres a cuatro semanas.' },
        { cells: ['Riesgo SAMR o hemodiálisis', 'SAMR intrahospitalario / comunitario', 'Vancomicina 15 a 20 mg/kg c/12h EV', 'Drenaje urgente + niveles valle · 4 semanas'],
          say: 'Riesgo de estafilococo resistente o paciente en hemodiálisis: vancomicina quince a veinte miligramos por kilo cada doce horas, ajustada por niveles plasmáticos valle. Duración de cuatro semanas.' },
        { cells: ['Adulto joven sexualmente activo', 'Neisseria gonorrhoeae', 'Ceftriaxona 1 a 2 g c/24h EV + Azitromicina 1 g VO', 'Punción evacuadora · 7 a 10 días'],
          say: 'Adulto joven con sospecha gonocócica: ceftriaxona uno a dos gramos al día endovenosa más azitromicina oral en dosis única. Responde rápido; duración de siete a diez días.' },
        { cells: ['Anciano frágil o ITU concurrente', 'Bacilos Gram (-) entéricos y Pseudomonas', 'Ceftriaxona 2 g EV + Cefazolina (o Cefepime)', 'Drenaje mecánico · 4 a 6 semanas'],
          say: 'Anciano frágil, antecedente de infección urinaria o drogas endovenosas: ceftriaxona dos gramos al día más cefazolina, o cefepime si hay sospecha de Pseudomonas. Duración de cuatro a seis semanas.' },
        { cells: ['Infección de prótesis articular', 'S. aureus y S. epidermidis con biofilm', 'Antibiótico base EV + Rifampicina 300 a 450 mg c/12h', 'Cirugía de recambio o DAIR · 3 a 6 meses'],
          say: 'Y en prótesis articular: antibiótico endovenoso dirigido más rifampicina trescientos a cuatrocientos cincuenta miligramos cada doce horas para erradicar el biofilm, con recambio quirúrgico y tratamiento por tres a seis meses.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico tipo EUNACOM',
      stem: 'Un paciente de 33 años consulta por dolor intenso y claudicación en la cadera izquierda de 24 horas de evolución, asociado a fiebre de 38,8 °C. La movilidad pasiva de la cadera es extremadamente dolorosa. La artrocentesis bajo ecografía da salida a líquido francamente purulento y la tinción de Gram revela cocáceas grampositivas en racimo.',
      question: '¿Cuál es la conducta terapéutica de elección?',
      options: [
        { letter: 'A', text: 'Iniciar cloxacilina oral y mantener en reposo en cama' },
        { letter: 'B', text: 'Iniciar ceftriaxona endovenosa e indicar descarga con muletas' },
        { letter: 'C', text: 'Iniciar vancomicina endovenosa y realizar punciones evacuadoras seriadas en sala' },
        { letter: 'D', text: 'Iniciar cefazolina endovenosa y realizar aseo quirúrgico urgente de la articulación' },
        { letter: 'E', text: 'Administrar corticoides intraarticulares y analgesia con opioides' },
      ],
      correct: 'D',
      explanation: 'El hallazgo de cocos grampositivos en racimo orienta a Staphylococcus aureus sensible de la comunidad, tratable con cefazolina EV o cloxacilina EV. Por tratarse de la cadera, una articulación profunda e inextensible con alto riesgo de necrosis avascular de la cabeza femoral, el aseo quirúrgico urgente en pabellón es mandatorio.',
      say: {
        stem: 'Vamos al caso clínico de la clase. Paciente de treinta y tres años con dolor intenso y claudicación de cadera izquierda de veinticuatro horas, con fiebre de treinta y ocho coma ocho grados e impotencia funcional severa. La punción muestra líquido purulento y el Gram revela cocos grampositivos en racimo.',
        question: '¿Cuál es la conducta terapéutica de elección?',
        options: 'Las opciones: cloxacilina oral con reposo, ceftriaxona endovenosa con muletas, vancomicina endovenosa con punciones seriadas en sala, cefazolina endovenosa y aseo quirúrgico urgente en pabellón, o corticoides intraarticulares con opioides. Piénsalo.',
        answer: 'La respuesta correcta es la D. Los cocos grampositivos en racimo son estafilococo áureo, y el tratamiento bactericida de primera línea en la comunidad es cefazolina o cloxacilina endovenosa. Pero la clave del caso está en la articulación: la cadera es profunda y las punciones en sala no logran evacuar el pus a presión, arriesgando necrosis avascular de la cabeza femoral. El aseo quirúrgico en pabellón es mandatorio e inaplazable.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 126',
      stem: 'Hombre de 60 años con dolor, calor y aumento de volumen en la rodilla derecha de inicio súbito. Artrocentesis: líquido turbio, 50.000 GB con 90% PMN. Gram: cocos gram positivos en racimos. ¿Cuál es el diagnóstico?',
      options: [
        { letter: 'A', text: 'Artritis séptica por Staphylococcus aureus' },
        { letter: 'B', text: 'Gota aguda' },
        { letter: 'C', text: 'Artritis reumatoide' },
        { letter: 'D', text: 'Pseudogota (artritis por pirofosfato)' },
        { letter: 'E', text: 'Artritis reactiva' },
      ],
      correct: 'A',
      explanation: 'Artritis séptica confirmada por recuento sinovial de 50.000 leucocitos/mm³ con 90% de neutrófilos y tinción de Gram demostrando cocos grampositivos en racimo, compatible con Staphylococcus aureus. Requiere drenaje articular urgente y antibióticos antiestafilocócicos EV.',
      say: {
        stem: 'Pregunta real del examen de julio de dos mil veinticinco, pregunta ciento veintiséis. Hombre de sesenta años con dolor, calor y aumento de volumen súbito en la rodilla derecha. La artrocentesis muestra líquido turbio con cincuenta mil glóbulos blancos, noventa por ciento de polimorfonucleares y el Gram muestra cocos grampositivos en racimo.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: artritis séptica por estafilococo áureo, gota aguda, artritis reumatoide, pseudogota por pirofosfato, o artritis reactiva. Piénsalo.',
        answer: 'Es la A. Cincuenta mil leucocitos con noventa por ciento de polimorfonucleares es el punto de corte del líquido séptico, y la observación de cocos grampositivos en racimo entrega el diagnóstico etiológico inmediato de Staphylococcus aureus. Aunque la gota puede alcanzar cifras inflamatorias muy altas, la presencia bacteriana en el Gram descarta una causa puramente microcristalina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 39',
      stem: "Una paciente de 67 años consulta por un cuadro de dolor e impotencia funcional del codo derecho, asociado a fiebre, que inició hace 2 días. Al examen físico tiene temperatura de 39 grados Celsius, FC: 100x' y PA: 110/70 mmHg, asociado a aumento de volumen del codo derecho, con eritema y aumento de la temperatura local. Además, tanto la movilidad pasiva, como la activa, son muy dolorosas. ¿Cuál es el diagnóstico más probable?",
      options: [
        { letter: 'A', text: 'Artritis reactiva' },
        { letter: 'B', text: 'Artritis séptica' },
        { letter: 'C', text: 'Artritis gotosa' },
        { letter: 'D', text: 'Condrocalcinosis' },
        { letter: 'E', text: 'Artritis reumatoide' },
      ],
      correct: 'B',
      explanation: 'Monoartritis aguda febril con dolor extremo tanto a la movilidad activa como pasiva en una articulación como el codo es el cuadro clásico de artritis séptica. Las artropatías por cristales son mucho menos frecuentes en el codo y rara vez debutan con fiebre tan elevada.',
      say: {
        stem: 'Examen de julio de dos mil dieciséis, pregunta treinta y nueve. Paciente de sesenta y siete años con dolor e impotencia funcional en el codo derecho desde hace dos días, con fiebre de treinta y nueve grados, taquicardia y eritema local. Tanto la movilidad activa como la pasiva son intensamente dolorosas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: artritis reactiva, artritis séptica, artritis gotosa, condrocalcinosis, o artritis reumatoide. Piénsalo.',
        answer: 'La respuesta correcta es la B. Fiebre alta de treinta y nueve grados, compromiso agudo del codo y dolor exquisito tanto a la movilidad activa como pasiva configuran una artritis séptica clásica. Fíjate cómo la pregunta destaca el dolor a la movilidad pasiva: eso confirma que la infección es intraarticular y no una simple bursitis olecraneana superficial.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 103',
      stem: 'Una paciente de 61 años, hipertensa y diabética, en tratamiento regular con hipoglicemiantes orales y antihipertensivos, desde hace 3 días presenta dolor y aumento de volumen en hombro derecho. Al examen físico presenta temperatura 38,2 ºC, eritema, rubor y aumento de volumen del hombro derecho y limitación funcional, que impide el movimiento. El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Gota' },
        { letter: 'B', text: 'Condrocalcinosis' },
        { letter: 'C', text: 'Artritis reumatoidea' },
        { letter: 'D', text: 'Artritis séptica' },
        { letter: 'E', text: 'Artritis reactiva' },
      ],
      correct: 'D',
      explanation: 'Paciente diabética con monoartritis aguda febril de hombro derecho. La diabetes es un factor de riesgo mayor para bacteriemia y artritis séptica. La localización en hombro y la presencia de fiebre alejan a la gota y condrocalcinosis, que afectan rodilla o pie.',
      say: {
        stem: 'Pregunta real de julio de dos mil dieciséis, pregunta ciento tres. Paciente de sesenta y un años, diabética e hipertensa, que presenta tres días de dolor, aumento de volumen y rubor en el hombro derecho, con fiebre de treinta y ocho coma dos grados y limitación funcional que impide todo movimiento.',
        question: 'El diagnóstico más probable es:',
        options: 'Las alternativas: gota, condrocalcinosis, artritis reumatoide, artritis séptica, o artritis reactiva. Piénsalo.',
        answer: 'Es la D. En una paciente diabética, con fiebre y monoartritis aguda de hombro, la artritis séptica es el diagnóstico obligado. La diabetes predispone a bacteriemias, y el hombro es una articulación típica de siembra hematógena. La gota y la condrocalcinosis afectan predominantemente el primer ortejo y la rodilla, y rara vez comprometen el hombro con fiebre.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Etiología y microbiología', tag: 'El microorganismo reina', kind: 'key', items: [
          { t: 'Staphylococcus aureus es el número 1', d: 'En todas las edades y prótesis',
            say: 'Cerremos con las tres reglas de oro. Estafilococo áureo es la causa más frecuente en todas las edades. En adultos jóvenes sexualmente activos sospecha gonococo con síndrome de artritis y dermatitis.' },
          { t: 'Cefazolina o cloxacilina de entrada', d: 'Vancomicina si hay sospecha de SAMR',
            say: 'El esquema empírico inicial en la comunidad es cefazolina o cloxacilina endovenosa, reservando vancomicina para hemodiálisis o riesgo de resistencia.' },
        ] },
        { title: 'Los dos pilares obligatorios', tag: 'Nunca separados', kind: 'alert', items: [
          { t: 'Antibióticos EV + drenaje mecánico', d: 'Pilares simultáneos e indivisibles',
            say: 'El tratamiento descansa en dos pilares simultáneos: antibióticos bactericidas endovenosos y descompresión mecánica urgente.' },
          { t: 'Cadera siempre va a pabellón', d: 'Riesgo de necrosis avascular de fémur',
            say: 'La rodilla puede drenarse con punciones seriadas o artroscopía, pero la cadera siempre requiere aseo quirúrgico urgente en pabellón para evitar necrosis avascular.' },
        ] },
        { title: 'Prótesis y trampas clínicas', tag: 'Detalles que definen', kind: 'pharma', items: [
          { t: 'Rifampicina contra el biofilm', d: 'Asociada al antibiótico antiestafilocócico',
            say: 'En prótesis articulares por estafilococo es mandatorio asociar rifampicina oral para erradicar el biofilm.' },
          { t: 'Dolor pasivo separa de bursitis', d: 'La movilidad pasiva está conservada en bursa',
            say: 'Y en el examen físico, el dolor intolerable a la movilidad pasiva confirma artritis séptica y descarta bursitis. Si te llevas una sola idea de hoy: en artritis séptica los antibióticos y el drenaje jamás se separan, y la cadera nunca puede esperar. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de manejo urgente: Artritis Séptica',
    root: N('start', 'Sospecha de artritis séptica', 'Monoartritis aguda + impotencia dolorosa',
      'Paciente con dolor articular agudo lancinante, limitación funcional e impotencia motora pasiva y activa. Se debe actuar con máxima urgencia.',
      ['', N('q', '¿Qué articulación está comprometida?', 'Localización anatómica',
        'La anatomía articular determina el tipo de drenaje y el riesgo de secuelas vasculares graves.',
        ['Cadera (adulto o pediátrico)', N('alert', 'Aseo quirúrgico urgente en pabellón', 'Riesgo inminente de necrosis avascular',
          'La cadera es una articulación profunda e inextensible. Las punciones cerradas están contraindicadas. Se programa de inmediato aseo quirúrgico formal en pabellón, ya sea por artrotomía o artroscopía, y se inician antibióticos endovenosos.')],
        ['Rodilla u otra accesible', N('do', 'Artrocentesis diagnóstica inmediata', 'Tomar líquido antes del primer antibiótico',
          'En rodilla u otra articulación periférica accesible, se realiza artrocentesis diagnóstica y evacuadora inmediata antes de administrar antibióticos.',
          ['', N('q', '¿Gram y factores de riesgo microbiológico?', 'Estratificación etiológica',
            'Se revisa la tinción de Gram rápida y el perfil clínico del paciente para seleccionar el esquema empírico.',
            ['Cocos Gram (+) en racimo / Comunidad', N('ok', 'Cefazolina 2 g EV c/8h o Cloxacilina 2 g c/4h', 'Drenaje por punciones seriadas o artroscopía',
              'Estafilococo áureo sensible de la comunidad. Esquema de elección: cefazolina dos gramos cada ocho horas endovenosa o cloxacilina dos gramos cada cuatro horas, asociado a punciones articulares evacuadoras diarias.')],
            ['Riesgo SAMR / Diálisis / UCI', N('alert', 'Vancomicina 15 a 20 mg/kg c/12h EV', 'Titular por niveles plasmáticos valle',
              'Sospecha de estafilococo resistente por hemodiálisis crónica, catéteres vasculares o infección nosocomial. Se indica vancomicina endovenosa con niveles valle entre quince y veinte microgramos por mililitro.')],
            ['Adulto joven con síndrome artritis-dermatitis', N('ok', 'Ceftriaxona 1 a 2 g EV + Azitromicina 1 g VO', 'Sospecha de Neisseria gonorrhoeae',
              'Adulto joven sexualmente activo con tenosinovitis o lesiones cutáneas: sospecha de infección gonocócica diseminada. Ceftriaxona endovenosa más azitromicina oral en monodosis.')],
            ['Compromiso sobre prótesis articular', N('refer', 'Evaluación traumatológica + Rifampicina', 'Recambio protésico o DAIR',
              'Infección sobre material protésico. Requiere evaluación traumatológica urgente para recambio o desbridamiento, asociando rifampicina oral una vez drenado el foco para erradicar el biofilm bacteriano.')])])])]),
  },
};
