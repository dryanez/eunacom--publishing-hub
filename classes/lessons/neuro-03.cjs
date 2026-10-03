// Clase 10.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-03).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-03',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Un hematoma que crece: presión arterial, reversión de anticoagulantes y el cerebelo que se opera',
      say: 'Bienvenidos. En las dos clases anteriores vimos el infarto cerebral y su aviso, el AIT. Hoy vemos la otra cara del accidente cerebrovascular: la hemorragia intracerebral espontánea. Es solo un quinto de los ACV, pero concentra más de la mitad de la mortalidad. Y todo el tema gira en torno a una idea: el hematoma crece en las primeras horas, y tu trabajo es frenarlo. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo',
      title: 'Dos arterias enfermas, dos lugares distintos',
      nodes: [
        { id: 'hta', col: 0, row: 0, k: 'cause', t: 'HTA crónica mal controlada', s: 'Arteriolopatía hipertensiva · 80 %' },
        { id: 'lip', col: 1, row: 0, k: 'mech', t: 'Lipohialinosis y microaneurismas', s: 'Charcot-Bouchard en perforantes' },
        { id: 'pro', col: 2, row: 0, k: 'effect', t: 'Hemorragia profunda', s: 'Putamen, tálamo, puente, cerebelo' },
        { id: 'aac', col: 0, row: 2, k: 'cause', t: 'Angiopatía amiloide', s: 'Mayor de 65–70 años · 15–20 %' },
        { id: 'bam', col: 1, row: 2, k: 'mech', t: 'Beta-amiloide en la pared', s: 'Arterias corticales y leptomeníngeas' },
        { id: 'lob', col: 2, row: 2, k: 'effect', t: 'Hemorragia lobar', s: 'Recurrente, con microsangrados' },
        { id: 'exp', col: 3, row: 1, k: 'alert', t: 'El hematoma se expande', s: 'Primeras 3 a 6 horas' },
        { id: 'otr', col: 3, row: 3, k: 'risk', t: 'Joven o sin HTA', s: 'MAV, cocaína, tumor, trombosis venosa' },
      ],
      edges: [
        { from: 'hta', to: 'lip' }, { from: 'lip', to: 'pro' },
        { from: 'aac', to: 'bam' }, { from: 'bam', to: 'lob' },
        { from: 'pro', to: 'exp' }, { from: 'lob', to: 'exp' },
        { from: 'lob', to: 'otr', label: 'otras causas' },
      ],
      steps: [
        { show: ['hta'], note: 'La causa del 80 %',
          say: 'Partamos por el mecanismo. La hemorragia intracerebral espontánea es la rotura de una arteria pequeña que ya estaba enferma. Y la gran causa, el ochenta por ciento, es la hipertensión crónica mal controlada.' },
        { show: ['lip'], note: 'La pared se debilita',
          say: 'Años de presión alta dañan las arterias perforantes profundas: aparece lipohialinosis, degeneración fibrinoide y pequeños microaneurismas, los de Charcot-Bouchard. Un día, uno de ellos se rompe.' },
        { show: ['pro'], note: 'Por eso sangra en lo profundo',
          say: 'Como esas perforantes irrigan los núcleos profundos, la hemorragia hipertensiva cae en lugares muy predecibles: el putamen, que es la mitad de los casos, el tálamo, el puente y el cerebelo. Guarda esos cuatro lugares, porque cada uno tiene su propia clínica.' },
        { show: ['aac', 'bam'], note: 'El anciano no necesariamente hipertenso',
          say: 'La segunda causa es la angiopatía amiloide. Es del adulto mayor, sobre sesenta y cinco o setenta años, y no necesariamente hipertenso. El beta-amiloide se deposita en la pared de las arterias de la corteza y las meninges.' },
        { show: ['lob'], note: 'Lobar y recurrente',
          say: 'Por eso sangra en la superficie: da hemorragias lobares, que tienden a repetirse, y la resonancia muestra microsangrados corticales asintomáticos. La regla es simple: profunda piensa en hipertensión, lobar en el anciano piensa en amiloide.' },
        { show: ['otr'], note: 'El joven obliga a buscar otra causa',
          say: 'Y si el paciente es joven o no es hipertenso, busca otra causa: una malformación arteriovenosa, cocaína o anfetaminas, una coagulopatía, una trombosis venosa, o un tumor que sangra, como una metástasis de melanoma o de cáncer renal.' },
        { show: ['exp'], note: 'La idea central de la clase',
          say: 'Ahora, lo más importante. A diferencia del infarto, el hematoma no se queda quieto: tiende a expandirse activamente en las primeras tres a seis horas. Todo el manejo que vamos a ver, bajar la presión y revertir la anticoagulación, tiene un solo objetivo: frenar esa expansión.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: '¿Cómo llega este paciente?',
      cards: [
        { title: 'Presentación típica', tag: 'Minutos a horas', kind: 'key', items: [
          { t: 'Cefalea intensa y vómitos', d: 'Instalación aguda, a veces explosiva',
            say: 'Veamos cómo llega el paciente. Es un cuadro agudo, de minutos a pocas horas: cefalea intensa, náuseas y vómitos explosivos. Fíjate que la cefalea y los vómitos hablan de un hematoma que ocupa espacio dentro del cráneo.' },
          { t: 'Déficit focal progresivo', d: 'Que empeora en la primera hora',
            say: 'Además hay un déficit motor o sensitivo focal, que puede ir progresando. Tiene sentido: el hematoma sigue creciendo.' },
          { t: 'PA muy alta y compromiso de conciencia', d: 'PAS frecuentemente > 180–220 mmHg',
            say: 'Y dos datos que suman: la presión arterial muy elevada, con sistólicas frecuentemente sobre ciento ochenta o doscientos veinte, y el compromiso de conciencia, que puede ir desde la somnolencia hasta el coma.' },
        ] },
        { title: 'La clínica no basta', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'No se distingue del infarto al lado de la cama', d: 'Siempre neuroimagen',
            say: 'Pero ojo: aunque estos datos orientan, ninguno permite asegurar al lado de la cama que es una hemorragia y no un infarto. Eso lo decide la imagen, que vemos en un momento.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Topografía',
      title: 'Hemorragias supratentoriales: los ojos te dicen dónde',
      cards: [
        { title: 'Putaminal', tag: '50 %', kind: 'criteria', items: [
          { t: 'Hemiplejia contralateral densa', d: 'Faciobraquiocrural, con hemihipoestesia',
            say: 'Vamos a la topografía, porque el examen la pregunta. La hemorragia putaminal, la más frecuente, da una hemiplejia contralateral densa y armónica, faciobraquiocrural, con hemihipoestesia, y afasia si toca el hemisferio dominante.' },
          { t: 'El paciente mira su lesión', d: 'Desviación conjugada hacia el hematoma',
            say: 'Y el signo clave está en los ojos: desviación conjugada de la mirada hacia el lado de la lesión. El paciente mira su lesión, y le da la espalda a su hemiplejia.' },
        ] },
        { title: 'Talámica', tag: '15–20 %', kind: 'key', items: [
          { t: 'Predomina lo sensitivo', d: 'Hemihipoestesia mayor que el déficit motor',
            say: 'La talámica es distinta: predomina el déficit sensitivo, una hemihipoestesia contralateral severa, mayor que la debilidad. A largo plazo puede dejar un dolor talámico crónico.' },
          { t: 'Ojos que miran la nariz', d: 'Parálisis de la mirada vertical · miosis',
            say: 'Y los ojos se desvían hacia abajo y hacia adentro, como mirando la nariz, con parálisis de la mirada vertical hacia arriba, el síndrome de Parinaud, pupilas pequeñas que no reaccionan, y somnolencia precoz.' },
        ] },
        { title: 'Lobar', tag: 'Angiopatía amiloide', kind: 'normal', items: [
          { t: 'Déficit del lóbulo afectado', d: 'Afasia, hemianopsia',
            say: 'Y la lobar da un déficit limitado al lóbulo que sangra: afasia si es temporal o frontal, hemianopsia si es occipital.' },
          { t: 'Crisis epilépticas precoces', d: 'Porque toca la corteza',
            say: 'Como compromete la corteza, es la que más se acompaña de crisis epilépticas de inicio temprano.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Topografía',
      title: 'Fosa posterior: el puente y el cerebelo',
      cards: [
        { title: 'Protuberancial', tag: 'Pronóstico ominoso', kind: 'alert', items: [
          { t: 'Coma fulminante', d: 'Tetraparesia o descerebración precoz',
            say: 'Bajemos a la fosa posterior. La hemorragia del puente es la más grave: coma fulminante, tetraparesia flácida o postura de descerebración temprana, hipertermia y paro respiratorio central, porque destruye los centros del tronco.' },
          { t: 'Pupilas puntiformes reactivas', d: 'Sin reflejos oculocefálicos',
            say: 'El signo que se pregunta son las pupilas puntiformes, en miosis extrema, pero que todavía reaccionan a la luz si las miras con lupa. Y no hay reflejos oculocefálicos.' },
        ] },
        { title: 'Cerebelosa', tag: 'Urgencia quirúrgica', kind: 'key', items: [
          { t: 'Cefalea occipital, vértigo, vómitos', d: 'Súbitos e intensos',
            say: 'Y la más importante de toda la clase: la hemorragia cerebelosa. Cefalea occipital súbita, vértigo intenso y vómitos incoercibles.' },
          { t: 'No se puede poner de pie', d: 'Ataxia y dismetría ipsilateral',
            say: 'El paciente no se puede parar: tiene una ataxia de la marcha que le impide la bipedestación, con dismetría del mismo lado y nistagmo.' },
          { t: 'Sin debilidad al inicio', d: 'Por eso se subestima',
            say: 'Y fíjate en la trampa: al inicio no tiene debilidad de las extremidades. Como no hay hemiplejia, parece un vértigo, y se subestima. Pero es la urgencia quirúrgica máxima, porque el cerebelo, al hincharse, comprime el tronco, obstruye el cuarto ventrículo y puede herniar en horas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico',
      title: 'El TAC sin contraste lo resuelve',
      cards: [
        { title: 'Examen de elección', tag: 'Gold standard en agudo', kind: 'key', items: [
          { t: 'TAC de encéfalo sin contraste', d: 'Hiperdensidad intraparenquimatosa',
            say: 'El diagnóstico lo hace el TAC de encéfalo sin contraste, el examen de elección en agudo. La sangre fresca se ve blanca: una colección hiperdensa, homogénea, dentro del parénquima. Es el mismo TAC que pedimos en el infarto para separar uno del otro.' },
          { t: 'Volumen: fórmula ABC/2', d: '≥ 30 mL cambia el pronóstico',
            say: 'El volumen se estima con una fórmula simple: se multiplican los tres diámetros del hematoma, A por B por C, y se divide por dos. Treinta mililitros o más es un corte que vamos a volver a usar.' },
        ] },
        { title: 'Predice expansión', tag: 'AngioTAC', kind: 'alert', items: [
          { t: 'Signo del spot', d: 'Fuga activa de contraste',
            say: 'Si se hace una AngioTAC, puede aparecer el signo del spot: un punto de contraste que se escapa dentro del hematoma. Es una fuga activa, y predice que el hematoma va a crecer en las próximas horas.' },
        ] },
        { title: 'Amiloide', tag: 'Resonancia', kind: 'normal', items: [
          { t: 'Microsangrados corticales', d: 'En gradiente de eco o SWI',
            say: 'Y en el anciano con hemorragia lobar, la resonancia con secuencias de gradiente de eco muestra los microsangrados corticales que apoyan la angiopatía amiloide.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Presión arterial',
      title: 'Bajar la presión: rápido, pero sin pasarse',
      cards: [
        { title: 'La meta', tag: 'PAS 150–220 al ingreso', kind: 'key', items: [
          { t: 'PAS 130–140 mmHg', d: 'Idealmente en 1 a 2 horas',
            say: 'Pasemos al manejo, empezando por la presión arterial. La presión muy alta hace crecer el hematoma y aumenta el edema. Por eso, si la sistólica al ingreso está entre ciento cincuenta y doscientos veinte, la meta es llevarla a ciento treinta a ciento cuarenta, idealmente en la primera o segunda hora.' },
          { t: 'Nunca bajo 130 mmHg', d: 'Ni caídas > 60 mmHg en minutos',
            say: 'Pero hay un límite de seguridad: la sistólica no debe caer bajo ciento treinta, ni bajar más de sesenta en pocos minutos. Eso compromete la perfusión cerebral y daña el riñón. Rápido, suave y sostenido.' },
        ] },
        { title: 'Fármacos de elección', tag: 'EV en infusión', kind: 'pharma', items: [
          { t: 'Labetalol EV', d: 'Bolos de 10–20 mg o infusión 2–8 mg/min',
            say: 'Se usan fármacos endovenosos de vida media corta, que se pueden titular. El labetalol, en bolos de diez a veinte miligramos cada diez a quince minutos, o en infusión de dos a ocho miligramos por minuto.' },
          { t: 'Nicardipino EV', d: 'Infusión de 5–15 mg/h',
            say: 'O el nicardipino, en infusión continua de cinco a quince miligramos por hora.' },
        ] },
        { title: 'Evitar', tag: 'Suben la PIC', kind: 'alert', items: [
          { t: 'Nitroprusiato e hidralazina', d: 'Vasodilatación venosa cerebral, suben la PIC',
            say: 'Y lo que no se usa: el nitroprusiato y la hidralazina, porque dilatan las venas cerebrales y suben la presión intracraneana. Compáralo con el infarto: allá se tolera la presión alta hasta doscientos veinte; aquí se baja activamente.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Anticoagulantes',
      title: 'Revertir en minutos, según el fármaco',
      nodes: [
        { id: 'hic', col: 0, row: 2, k: 'start', t: 'Hemorragia en anticoagulado', s: 'Expansión 50 % · mortalidad > 60 %' },
        { id: 'avk', col: 1, row: 0, k: 'q', t: 'Acenocumarol o warfarina', s: 'INR > 1,4' },
        { id: 'ccp', col: 2, row: 0, k: 'good', t: 'CCP 4 factores + vitamina K EV', s: '25–50 UI/kg + 10 mg EV lenta' },
        { id: 'pfc', col: 3, row: 0, k: 'trap', t: 'Plasma fresco', s: 'Solo si no hay CCP' },
        { id: 'dab', col: 1, row: 1, k: 'q', t: 'Dabigatrán', s: 'Inhibidor de la trombina' },
        { id: 'ida', col: 2, row: 1, k: 'good', t: 'Idarucizumab 5 g EV', s: 'Dos bolos de 2,5 g' },
        { id: 'xa', col: 1, row: 3, k: 'q', t: 'Rivaroxabán o apixabán', s: 'Anti-Xa' },
        { id: 'and', col: 2, row: 3, k: 'good', t: 'Andexanet alfa', s: 'Si no hay: CCP 4F 50 UI/kg' },
        { id: 'hep', col: 1, row: 4, k: 'q', t: 'Heparina', s: 'HNF o HBPM' },
        { id: 'prt', col: 2, row: 4, k: 'good', t: 'Protamina EV', s: '1 mg por 100 UI de HNF' },
      ],
      edges: [
        { from: 'hic', to: 'avk' }, { from: 'avk', to: 'ccp' }, { from: 'ccp', to: 'pfc', label: 'no es primera línea' },
        { from: 'hic', to: 'dab' }, { from: 'dab', to: 'ida' },
        { from: 'hic', to: 'xa' }, { from: 'xa', to: 'and' },
        { from: 'hic', to: 'hep' }, { from: 'hep', to: 'prt' },
      ],
      steps: [
        { show: ['hic'], note: 'El anticoagulado sangra más y crece más',
          say: 'La segunda medida urgente es revertir la anticoagulación. Una hemorragia en un paciente anticoagulado se expande en la mitad de los casos, y la mortalidad supera el sesenta por ciento. La reversión empieza en minutos, y depende del fármaco.' },
        { show: ['avk', 'ccp'], note: 'Primera línea: CCP de 4 factores',
          say: 'El caso más preguntado es el acenocumarol, con un INR sobre uno coma cuatro. La primera línea es el complejo protrombínico concentrado de cuatro factores, el CCP, de veinticinco a cincuenta unidades por kilo endovenoso. Normaliza el INR en quince a treinta minutos, sin sobrecargar de volumen.' },
        { show: ['ccp'], note: 'La vitamina K va siempre junto al CCP',
          say: 'Y siempre junto al CCP, vitamina K, diez miligramos endovenosos lentos. ¿Por qué las dos? Porque el CCP actúa de inmediato pero dura pocas horas, y la vitamina K recién hace efecto a las cuatro a seis horas, cuando el hígado fabrica factores nuevos. Así se evita que el INR rebote.' },
        { show: ['pfc'], note: 'El plasma es el distractor',
          say: 'El plasma fresco congelado es el distractor clásico. Solo se usa si no hay CCP, porque demora horas en descongelarse, requiere mucho volumen y puede dar edema pulmonar.' },
        { show: ['dab', 'ida'], note: 'Dabigatrán tiene antídoto propio',
          say: 'Si el paciente usa dabigatrán, tiene un antídoto específico: el idarucizumab, cinco gramos endovenosos, en dos bolos de dos coma cinco. Revierte el efecto en minutos.' },
        { show: ['xa', 'and'], note: 'Anti-Xa: andexanet o CCP en dosis alta',
          say: 'Si usa rivaroxabán o apixabán, el antídoto es el andexanet alfa, si el centro lo tiene. Si no, CCP de cuatro factores en dosis alta, cincuenta unidades por kilo.' },
        { show: ['hep', 'prt'], note: 'Heparina: protamina',
          say: 'Y la heparina se revierte con protamina: un miligramo neutraliza cien unidades de heparina no fraccionada de las últimas dos a tres horas. Con las heparinas de bajo peso, la neutralización es solo parcial.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Neurocirugía',
      title: '¿A quién se opera?',
      nodes: [
        { id: 'hem', col: 0, row: 1, k: 'start', t: 'Hemorragia confirmada', s: '¿Dónde está?' },
        { id: 'cer', col: 1, row: 0, k: 'q', t: 'Cerebelosa', s: '¿≥ 3 cm o compresión?' },
        { id: 'qx', col: 2, row: 0, k: 'alert', t: 'Evacuación suboccipital urgente', s: 'Indicación absoluta' },
        { id: 'sup', col: 1, row: 2, k: 'q', t: 'Supratentorial', s: 'Ganglios basales o tálamo' },
        { id: 'med', col: 2, row: 2, k: 'good', t: 'Manejo médico en UCI', s: 'Cirugía rutinaria sin beneficio (STICH)' },
        { id: 'lob', col: 3, row: 3, k: 'refer', t: 'Casos seleccionados', s: 'Lobar > 30 mL, < 1 cm de la corteza, con deterioro' },
        { id: 'dve', col: 3, row: 1, k: 'refer', t: 'Hidrocefalia o sangre ventricular', s: 'Drenaje ventricular externo' },
      ],
      edges: [
        { from: 'hem', to: 'cer' }, { from: 'cer', to: 'qx', label: 'sí' },
        { from: 'hem', to: 'sup' }, { from: 'sup', to: 'med' }, { from: 'med', to: 'lob', label: 'excepción' },
        { from: 'hem', to: 'dve', label: 'en cualquiera' },
      ],
      steps: [
        { show: ['hem'], note: 'La ubicación decide',
          say: 'La tercera decisión es quirúrgica, y aquí la ubicación lo cambia todo. Supratentorial e infratentorial se manejan con principios opuestos.' },
        { show: ['cer', 'qx'], note: 'Regla de oro: cerebelo de 3 cm se opera',
          say: 'La regla de oro: todo hematoma cerebeloso de tres centímetros o más de diámetro, o que comprima el tronco, deforme el cuarto ventrículo o produzca hidrocefalia, se opera de urgencia, con evacuación por craniectomía suboccipital. Observarlo es un error fatal: el paciente muere por enclavamiento en horas.' },
        { show: ['sup', 'med'], note: 'Profundo: no se opera de rutina',
          say: 'En cambio, en los hematomas profundos, del putamen o del tálamo, la cirugía abierta de rutina no demostró beneficio frente al manejo médico intensivo, según los ensayos STICH. Van a la unidad de cuidados intensivos, con presión controlada y anticoagulación revertida.' },
        { show: ['lob'], note: 'La excepción supratentorial',
          say: 'La excepción son casos seleccionados: un hematoma lobar superficial grande, de más de treinta mililitros y a menos de un centímetro de la corteza, en un paciente que se va deteriorando. O una craniectomía descompresiva si el edema es masivo e intratable.' },
        { show: ['dve'], note: 'Hidrocefalia: drenaje ventricular',
          say: 'Y en cualquier ubicación, si la sangre invade los ventrículos y aparece hidrocefalia, se instala un drenaje ventricular externo de urgencia, que descomprime y permite medir la presión intracraneana.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Pronóstico',
      title: 'Score ICH de Hemphill',
      cards: [
        { title: 'Componentes', tag: '0 a 6 puntos', kind: 'criteria', items: [
          { t: 'Glasgow 3–4: 2 · 5–12: 1', d: '13–15: 0',
            say: 'Para cerrar el manejo, el pronóstico. El score ICH de Hemphill va de cero a seis puntos y predice la mortalidad a treinta días. El Glasgow es lo que más pesa: de tres a cuatro suma dos puntos, y de cinco a doce, uno.' },
          { t: 'Volumen ≥ 30 mL: 1', d: 'Sangre intraventricular: 1',
            say: 'Luego suma un punto cada uno: un volumen de treinta mililitros o más, y la invasión ventricular.' },
          { t: 'Infratentorial: 1', d: 'Edad ≥ 80 años: 1',
            say: 'Y un punto más por origen infratentorial, en el cerebelo o el tronco, y por edad de ochenta años o más.' },
        ] },
        { title: 'Mortalidad a 30 días', tag: 'Sube muy rápido', kind: 'alert', items: [
          { t: '0: 0 % · 1: 13 % · 2: 26 %', d: 'Pronóstico aún favorable',
            say: 'Con cero puntos la mortalidad es cero; con uno, trece por ciento; con dos, veintiséis.' },
          { t: '3: 72 % · 4: 97 % · 5–6: 100 %', d: 'El salto está en los 3 puntos',
            say: 'Y fíjate en el salto: con tres puntos ya es setenta y dos por ciento, con cuatro, noventa y siete, y con cinco o seis, cien por ciento. Tres puntos es donde el pronóstico se vuelve crítico.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol, desde el paciente con cefalea y déficit hasta la decisión quirúrgica.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Hemorragia con PAS 150–220', 'Bajar a PAS 130–140 con labetalol o nicardipino EV', 'Tolerar hasta 220 como en el infarto'],
          say: 'Repasemos las trampas. Hemorragia con sistólica entre ciento cincuenta y doscientos veinte: se baja a ciento treinta a ciento cuarenta con labetalol o nicardipino. El error es aplicar la regla del infarto y tolerar hasta doscientos veinte.' },
        { cells: ['Descenso de presión', 'Suave y sostenido, nunca bajo 130', 'Caídas bruscas o nitroprusiato'],
          say: 'Pero el descenso es suave: nunca bajo ciento treinta, y sin nitroprusiato ni hidralazina.' },
        { cells: ['Hemorragia con acenocumarol', 'CCP 4 factores + vitamina K EV', 'Plasma fresco de primera línea, o vitamina K sola'],
          say: 'Hemorragia en un paciente con acenocumarol: CCP de cuatro factores más vitamina K endovenosa. El plasma de primera línea, o la vitamina K sola, son las respuestas incorrectas.' },
        { cells: ['Hemorragia con dabigatrán', 'Idarucizumab 5 g EV', 'Protamina o vitamina K'],
          say: 'Con dabigatrán, idarucizumab. Ni protamina ni vitamina K sirven.' },
        { cells: ['Hematoma cerebeloso ≥ 3 cm', 'Evacuación suboccipital urgente', 'Observar porque no hay hemiplejia'],
          say: 'Hematoma cerebeloso de tres centímetros o más: cirugía de urgencia. La trampa es observarlo porque el paciente no tiene hemiplejia.' },
        { cells: ['Hematoma putaminal o talámico', 'Manejo médico en UCI', 'Evacuación quirúrgica de rutina'],
          say: 'Hematoma putaminal o talámico: manejo médico en cuidados intensivos. Operarlo de rutina no sirve.' },
        { cells: ['Hemorragia lobar en mayor de 70 sin HTA', 'Pensar en angiopatía amiloide', 'Atribuirla a hipertensión'],
          say: 'Y la hemorragia lobar en un anciano no hipertenso: piensa en angiopatía amiloide, no en hipertensión.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 62 años con fibrilación auricular en tratamiento con acenocumarol e HTA mal controlada. Presenta cefalea súbita, vómitos explosivos y hemiplejia izquierda. PA 205/115 mmHg, Glasgow 11, desviación conjugada de la mirada hacia la derecha. TAC sin contraste: hematoma de 32 mL en el putamen derecho con invasión ventricular. INR 3,4.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Plasma fresco congelado y vitamina K oral; control de PA si supera 220 mmHg' },
        { letter: 'B', text: 'Complejo protrombínico de 4 factores + vitamina K EV y labetalol EV hasta PAS 130–140 mmHg' },
        { letter: 'C', text: 'Evacuación quirúrgica abierta del hematoma putaminal' },
        { letter: 'D', text: 'Nitroprusiato EV hasta PAS menor de 120 mmHg y suspender el acenocumarol' },
        { letter: 'E', text: 'Idarucizumab 5 g EV y nicardipino EV' },
      ],
      correct: 'B',
      explanation: 'Hemorragia putaminal hipertensiva agravada por acenocumarol (INR 3,4). Dos medidas simultáneas en minutos: CCP 4F (25–50 UI/kg) + vitamina K1 10 mg EV, y labetalol o nicardipino EV a PAS 130–140 mmHg sin bajar de 130. Ingreso a UCI con evaluación neuroquirúrgica. La evacuación abierta del putamen no está indicada de rutina (STICH). El idarucizumab revierte dabigatrán, no acenocumarol.',
      say: {
        stem: 'Vamos con un caso. Hombre de sesenta y dos años, con fibrilación auricular en tratamiento con acenocumarol, e hipertenso mal controlado. Presenta cefalea súbita, vómitos explosivos y hemiplejia izquierda. Presión de doscientos cinco sobre ciento quince, Glasgow once, y la mirada desviada hacia la derecha. El TAC muestra un hematoma de treinta y dos mililitros en el putamen derecho, con sangre en el ventrículo. El INR es tres coma cuatro.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Las opciones: plasma y vitamina K oral, tratando la presión solo sobre doscientos veinte; complejo protrombínico más vitamina K endovenosa y labetalol hasta ciento treinta a ciento cuarenta; cirugía abierta del hematoma; nitroprusiato hasta menos de ciento veinte; o idarucizumab con nicardipino. Piénsalo.',
        answer: 'Es la B. El paciente mira su lesión, a la derecha: putamen derecho. Hay que frenar la expansión con dos medidas a la vez: CCP más vitamina K endovenosa, y sistólica a ciento treinta a ciento cuarenta. La A es la trampa: el plasma es inferior, y tolerar hasta doscientos veinte es la regla del infarto. El nitroprusiato no se usa, y el idarucizumab es para el dabigatrán.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 26',
      stem: 'Un paciente de 60 años, con hipertensión arterial de larga data mal controlada, consulta por cefalea intensa que ha aumentado en intensidad hasta EVA 9/10, asociada a vómitos y mareos de 2 horas de evolución, por lo que acude al servicio de urgencias. Al examen físico presenta presión arterial 170/105 mmHg y frecuencia cardíaca 62 lpm, sin signos focales en el examen neurológico. Se solicita una TAC de cerebro que se muestra a continuación:',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Hematoma subdural' },
        { letter: 'B', text: 'Hemorragia subaracnoidea' },
        { letter: 'C', text: 'Infarto de arteria cerebral media con transformación hemorrágica' },
        { letter: 'D', text: 'Hematoma talámico derecho' },
        { letter: 'E', text: 'Hemorragia intraparenquimatosa secundaria a malformación arteriovenosa' },
      ],
      correct: 'D',
      explanation: 'La TAC original mostraba una hiperdensidad (sangre) intraparenquimatosa en el tálamo. Hipertenso crónico mal controlado con cefalea y vómitos: hemorragia hipertensiva en un núcleo profundo. Contraindica antiagregantes, anticoagulación y trombólisis; la meta es una PAS cercana a 140 mmHg. La MAV se piensa en el joven o no hipertenso.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de diciembre de dos mil veinticinco. Paciente de sesenta años, hipertenso de larga data mal controlado, con dos horas de cefalea intensa que va en aumento, vómitos y mareos. Tiene una presión de ciento setenta sobre ciento cinco, y el examen neurológico no muestra signos focales. En el examen original venía la TAC, que mostraba una hiperdensidad dentro del tálamo derecho.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: hematoma subdural, hemorragia subaracnoidea, infarto de la cerebral media con transformación hemorrágica, hematoma talámico derecho, o hemorragia por malformación arteriovenosa. Piénsalo.',
        answer: 'Es la D, hematoma talámico derecho. La sangre fresca en la TAC es blanca, y está dentro del parénquima, en un núcleo profundo: eso es la hemorragia hipertensiva típica. El distractor tentador es la malformación arteriovenosa, pero esa se piensa en el joven o en el que no es hipertenso; este paciente tiene años de presión mal controlada. Y como es un ACV hemorrágico, nada de aspirina, anticoagulación ni trombólisis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 29',
      stem: 'Un paciente de 67 años, con antecedente de hipertensión arterial sin tratamiento, consulta por vértigo intenso de inicio súbito hace 2 horas, asociado a dificultades en la marcha que le impiden mantenerse de pie. Al examen físico se observa hipotónico, con dismetría de extremidades y nistagmus multidireccional.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Iniciar difenidol' },
        { letter: 'B', text: 'Realizar examen de VIII par' },
        { letter: 'C', text: 'Solicitar prueba calórica' },
        { letter: 'D', text: 'Solicitar resonancia magnética nuclear de troncoencéfalo' },
        { letter: 'E', text: 'Solicitar TAC de cerebro' },
      ],
      correct: 'E',
      explanation: 'Vértigo central: súbito, con incapacidad para la bipedestación, dismetría y nistagmo multidireccional en un hipertenso. La primera sospecha es un ACV cerebeloso o vertebrobasilar, y lo urgente es la TAC de cerebro: rápida, detecta la hemorragia (que, si es cerebelosa ≥ 3 cm, se opera) y, si no hay sangre, permite evaluar trombólisis. La resonancia ve mejor la fosa posterior, pero viene después.',
      say: {
        stem: 'Otra del mismo examen, diciembre de dos mil veinticinco. Paciente de sesenta y siete años, hipertenso sin tratamiento, con vértigo intenso de inicio súbito hace dos horas y una dificultad en la marcha que le impide mantenerse de pie. Está hipotónico, con dismetría y nistagmo multidireccional.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: iniciar difenidol, examinar el octavo par, pedir una prueba calórica, pedir una resonancia de tronco, o pedir un TAC de cerebro. Piénsalo.',
        answer: 'Es la E, TAC de cerebro. Esto no es un vértigo periférico: es súbito, el paciente no se puede parar, tiene dismetría y un nistagmo que cambia de dirección. Es un síndrome cerebeloso, y en un hipertenso tienes que pensar en un ACV del cerebelo, incluida la hemorragia que se opera. La resonancia tienta, porque ve mejor la fosa posterior, pero lo urgente es el TAC, que es rápido. Y el difenidol solo taparía un cuadro grave.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'Dónde sangra', kind: 'key', items: [
          { t: 'Profunda: HTA · lobar en anciano: amiloide', d: 'Joven: buscar MAV o drogas',
            say: 'Cerremos con las reglas de oro. La hemorragia profunda es hipertensiva, y la lobar en el anciano es amiloide. En el joven, busca otra causa.' },
          { t: 'TAC sin contraste', d: 'Hiperdensidad; mide el volumen',
            say: 'El diagnóstico lo hace el TAC sin contraste, y el vértigo súbito con ataxia en un hipertenso también se estudia con TAC.' },
        ] },
        { title: 'Frenar la expansión', tag: 'En minutos', kind: 'pharma', items: [
          { t: 'PAS 130–140, nunca bajo 130', d: 'Labetalol o nicardipino EV',
            say: 'El hematoma crece en las primeras horas. Se baja la sistólica a ciento treinta a ciento cuarenta, sin pasar bajo ciento treinta.' },
          { t: 'Acenocumarol: CCP + vitamina K EV', d: 'Dabigatrán: idarucizumab',
            say: 'Y se revierte la anticoagulación: CCP más vitamina K para el acenocumarol, idarucizumab para el dabigatrán.' },
        ] },
        { title: 'Cirugía', tag: 'Decide la ubicación', kind: 'alert', items: [
          { t: 'Cerebelo ≥ 3 cm: cirugía urgente', d: 'Profundo supratentorial: manejo médico',
            say: 'El cerebelo de tres centímetros se opera de urgencia; el putamen y el tálamo, no. Si te llevas una sola idea de hoy: en la hemorragia, el hematoma crece, y tu trabajo en los primeros minutos es frenarlo, bajando la presión y revirtiendo el anticoagulante. La próxima vez vemos la otra hemorragia, la subaracnoidea. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Hemorragia intracerebral espontánea',
    root: N('start', 'Cefalea, vómitos y déficit focal', 'PA muy elevada',
      'Paciente con cefalea intensa, vómitos, déficit focal y presión muy alta. La clínica orienta, pero no distingue la hemorragia del infarto.',
      ['', N('q', 'TAC sin contraste: ¿hay sangre?', 'Hiperdensidad intraparenquimatosa',
        'Primero el TAC sin contraste. ¿Hay una hiperdensidad dentro del parénquima?',
        ['NO', N('refer', 'Manejo de infarto', 'Evaluar trombólisis',
          'Si no hay sangre, vuelves al camino del infarto cerebral, y evalúas la trombólisis.')],
        ['SÍ', N('do', 'Frenar la expansión', 'PAS 130–140 + revertir anticoagulación',
          'Si hay sangre, dos medidas simultáneas en minutos: bajar la sistólica a ciento treinta a ciento cuarenta con labetalol o nicardipino, y revertir el anticoagulante según el fármaco.',
          ['', N('q', '¿Dónde está el hematoma?', 'Infra o supratentorial',
            'Y luego la pregunta quirúrgica: ¿dónde está el hematoma?',
            ['Cerebelo ≥ 3 cm', N('alert', 'Evacuación suboccipital urgente', 'O si comprime tronco o da hidrocefalia',
              'Si es cerebeloso de tres centímetros o más, o comprime el tronco, cirugía de urgencia. Observarlo es un error fatal.')],
            ['Profundo', N('ok', 'Manejo médico en UCI', 'Sin cirugía de rutina',
              'Si es profundo, en el putamen o el tálamo, manejo médico en cuidados intensivos. La cirugía de rutina no aporta.')],
            ['Hidrocefalia', N('refer', 'Drenaje ventricular externo', 'Y monitoreo de PIC',
              'Si hay sangre en los ventrículos con hidrocefalia, drenaje ventricular externo de urgencia.')])])])]),
  },
};
