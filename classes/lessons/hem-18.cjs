// Clase 8.18 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_hematologia.cjs (hem-18).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'hem-18',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'El ganglio entero, los síntomas B y la diferencia entre Hodgkin y no Hodgkin',
      say: 'Bienvenidos. En la clase anterior cerramos con el síndrome de Richter, el paso de una leucemia linfática crónica a un linfoma agresivo. Hoy entramos de lleno a los linfomas: el de Hodgkin y los no Hodgkin. Es un tema muy preguntado, y el examen insiste en cuatro cosas: reconocer la adenopatía sospechosa, saber que el diagnóstico exige sacar el ganglio entero, definir bien los síntomas B, y separar el Hodgkin de los no Hodgkin.',
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'La adenopatía que no es una infección',
      cards: [
        { title: 'Cómo es', tag: 'Más del 80% debuta así', kind: 'key', items: [
          { t: 'Indolora, gomosa o pétrea', d: 'No adherida a planos profundos',
            say: 'Partamos por cómo llega el paciente. En más del ochenta por ciento de los linfomas, lo primero es una o varias adenopatías periféricas. Y tienen un perfil que tienes que reconocer: indoloras, de consistencia gomosa o pétrea, y no adheridas a planos profundos.' },
          { t: 'Más de 2 cm, más de 4–6 semanas', d: 'Crece, sin foco infeccioso que la explique',
            say: 'Además miden más de dos centímetros, llevan más de cuatro a seis semanas y siguen creciendo, sin una infección cercana que las justifique. Fíjate en el contraste: el ganglio reactivo de una infección duele, es blando y se va en pocas semanas.' },
        ] },
        { title: 'Dónde', tag: 'Cadenas más comunes', kind: 'criteria', items: [
          { t: 'Cervical, supraclavicular, axilar', d: 'Las localizaciones más frecuentes',
            say: 'Las cadenas más comprometidas son la cervical, la supraclavicular y la axilar.' },
          { t: 'Supraclavicular izquierdo: Virchow', d: 'Neoplásico hasta demostrar lo contrario',
            say: 'Y ojo con una en particular: el ganglio supraclavicular izquierdo, el de Virchow. Siempre es neoplásico hasta demostrar lo contrario. Si aparece en un caso, la respuesta nunca es observar.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'El linfoma se diagnostica con el ganglio entero',
      nodes: [
        { id: 'ade', col: 0, row: 1, k: 'start', t: 'Adenopatía sospechosa', s: 'Más de 2 cm, persistente' },
        { id: 'acc', col: 1, row: 1, k: 'q', t: '¿Es accesible?', s: 'Periférica o profunda' },
        { id: 'esc', col: 2, row: 0, k: 'good', t: 'Biopsia escisional', s: 'El ganglio completo' },
        { id: 'tru', col: 2, row: 2, k: 'good', t: 'Aguja gruesa (trucut)', s: 'Guiada por imágenes' },
        { id: 'arq', col: 3, row: 1, k: 'mech', t: 'Se ve la arquitectura', s: '¿Folicular o difuso?' },
        { id: 'paa', col: 1, row: 3, k: 'trap', t: 'PAAF', s: 'Contraindicada: solo células sueltas' },
      ],
      edges: [
        { from: 'ade', to: 'acc' }, { from: 'acc', to: 'esc', label: 'sí' }, { from: 'acc', to: 'tru', label: 'no' },
        { from: 'esc', to: 'arq' }, { from: 'tru', to: 'arq' }, { from: 'ade', to: 'paa', label: 'nunca' },
      ],
      steps: [
        { show: ['ade'], note: 'La regla de oro del tema',
          say: 'Ahora, la regla de oro de toda la clase, la que más se pregunta. Frente a una adenopatía sospechosa de linfoma, ¿cómo se confirma?' },
        { show: ['acc', 'esc'], note: 'Sacar el ganglio completo',
          say: 'Con una biopsia escisional: el cirujano saca el ganglio completo, el más representativo. Si el ganglio es accesible, esta es siempre la respuesta.' },
        { show: ['tru'], note: 'Si no se puede sacar entero',
          say: 'Si el ganglio es profundo e inaccesible, se usa una biopsia con aguja gruesa, tipo trucut, guiada por imágenes. Sigue sacando un cilindro de tejido.' },
        { show: ['arq'], note: 'La arquitectura clasifica el linfoma',
          say: '¿Y por qué tanto empeño en el tejido entero? Porque el patólogo necesita ver la arquitectura del ganglio: si el crecimiento es folicular o difuso. Sin arquitectura no se puede clasificar el linfoma, y sin clasificarlo no se puede tratar.' },
        { show: ['paa'], note: 'La trampa clásica del examen',
          say: 'Por eso la punción aspirativa con aguja fina, la PAAF, está contraindicada para el diagnóstico inicial. Solo extrae células sueltas, sin arquitectura, y además da falsos negativos. En el examen, la alternativa de punción aspirativa es la trampa.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Síntomas B',
      title: 'Síntomas B: la carga tumoral se hace sistémica',
      nodes: [
        { id: 'car', col: 0, row: 1, k: 'cause', t: 'Carga tumoral alta', s: 'Muchas células malignas' },
        { id: 'cit', col: 1, row: 1, k: 'mech', t: 'Citocinas', s: 'IL-1, IL-6, TNF-alfa' },
        { id: 'fie', col: 2, row: 0, k: 'effect', t: 'Fiebre > 38 °C', s: 'Inexplicada · Pel-Ebstein' },
        { id: 'sud', col: 2, row: 1, k: 'effect', t: 'Sudoración nocturna', s: 'Empapa la ropa de cama' },
        { id: 'pes', col: 2, row: 2, k: 'effect', t: 'Baja de peso > 10%', s: 'En los últimos 6 meses' },
        { id: 'suf', col: 3, row: 1, k: 'risk', t: 'Sufijo B', s: 'Peor pronóstico, más tratamiento' },
        { id: 'pru', col: 1, row: 3, k: 'trap', t: 'Prurito · dolor con alcohol', s: 'Orientan a Hodgkin, no son B' },
      ],
      edges: [
        { from: 'car', to: 'cit' }, { from: 'cit', to: 'fie' }, { from: 'cit', to: 'sud' }, { from: 'cit', to: 'pes' },
        { from: 'fie', to: 'suf' }, { from: 'sud', to: 'suf' }, { from: 'pes', to: 'suf' },
      ],
      steps: [
        { show: ['car', 'cit'], note: 'El tumor libera señales inflamatorias',
          say: 'Pasemos a los síntomas B, que el examen pide con una definición exacta. Primero, el porqué. Cuando la carga tumoral es alta, el linfoma libera citocinas inflamatorias en forma masiva: interleucina uno, interleucina seis y factor de necrosis tumoral. Esas citocinas son las que dan los síntomas.' },
        { show: ['fie'], note: 'Fiebre sin causa, a veces cíclica',
          say: 'El primero es la fiebre inexplicada sobre treinta y ocho grados. Puede ser continua o cíclica: la fiebre de Pel-Ebstein, con varios días de fiebre alta y luego varios días sin fiebre, es característica del Hodgkin.' },
        { show: ['sud'], note: 'Tiene que empapar',
          say: 'El segundo, la sudoración nocturna profusa: la que empapa la ropa de cama y obliga a cambiarse en la noche. Un poco de sudor no cuenta.' },
        { show: ['pes'], note: 'La cifra exacta se pregunta',
          say: 'Y el tercero, la baja de peso involuntaria de más del diez por ciento del peso basal en los últimos seis meses. Memoriza la cifra: más de diez por ciento, en seis meses.' },
        { show: ['suf'], note: 'A: sin síntomas · B: con síntomas',
          say: 'En la etapificación, la presencia de estos síntomas se marca con la letra B, y su ausencia con la A. La B significa peor pronóstico y un tratamiento más intenso.' },
        { show: ['pru'], note: 'Orientadores, pero fuera de la definición',
          say: 'Y dos síntomas que orientan mucho al Hodgkin, pero que no son síntomas B: el prurito generalizado sin lesiones en la piel, y el dolor en los ganglios al tomar alcohol, el signo de Hoster. Si te preguntan cuáles son los síntomas B, no los incluyas.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Linfoma de Hodgkin',
      title: 'Hodgkin: pocas células malignas, mucha inflamación',
      cards: [
        { title: 'Quién', tag: 'Distribución bimodal', kind: 'key', items: [
          { t: 'Dos picos de edad', d: '15 a 35 años y sobre 60',
            say: 'Veamos el linfoma de Hodgkin. Es el diez a quince por ciento de los linfomas y tiene una distribución bimodal: un primer pico en adultos jóvenes, entre quince y treinta y cinco años, y un segundo sobre los sesenta. Por eso, un joven con adenopatías y síntomas B te debe hacer pensar primero en Hodgkin.' },
        ] },
        { title: 'Reed-Sternberg', tag: 'La célula diagnóstica', kind: 'criteria', items: [
          { t: 'Gigante, binucleada, "ojos de búho"', d: 'Núcleos en espejo, nucléolos grandes',
            say: 'La célula que hace el diagnóstico es la de Reed-Sternberg: una célula gigante, con dos o más núcleos en imagen de espejo y nucléolos prominentes. Por eso se describe como ojos de búho.' },
          { t: 'CD30+, CD15+, CD45−', d: 'Inmunofenotipo clásico',
            say: 'Su inmunofenotipo clásico es CD treinta positivo, CD quince positivo, y CD cuarenta y cinco negativo.' },
        ] },
        { title: 'Un tumor raro', tag: 'Casi todo es reactivo', kind: 'alert', items: [
          { t: 'Células malignas: 1–2%', d: 'El resto: infiltrado inflamatorio',
            say: 'Y aquí está lo curioso del Hodgkin. Las células malignas son apenas uno a dos por ciento del tumor. Todo lo demás es un infiltrado inflamatorio reactivo: linfocitos T, eosinófilos, células plasmáticas e histiocitos. Eso lo separa del no Hodgkin, donde la masa está hecha de células neoplásicas.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Linfoma de Hodgkin',
      title: 'Subtipos y diseminación ordenada',
      cards: [
        { title: 'Los frecuentes', tag: '90% de los casos', kind: 'key', items: [
          { t: 'Esclerosis nodular: 70%', d: 'Mujer joven, mediastino anterior',
            say: 'Hay cuatro subtipos clásicos, y uno domina el examen. La esclerosis nodular es el más frecuente, setenta por ciento. Predomina en mujeres jóvenes y suele comprometer el mediastino anterior. Tiene células lacunares y bandas de colágeno. Mujer joven con masa en el mediastino y adenopatía cervical: piensa en esclerosis nodular.' },
          { t: 'Celularidad mixta: 20%', d: 'Hombre mayor, VIH, Epstein-Barr',
            say: 'El segundo es la celularidad mixta, veinte por ciento. Predomina en hombres mayores y en pacientes con VIH, es rica en eosinófilos y se asocia fuertemente al virus de Epstein-Barr.' },
        ] },
        { title: 'Los raros', tag: 'Pronóstico opuesto', kind: 'criteria', items: [
          { t: 'Predominio linfocítico: 5%', d: 'Excelente pronóstico',
            say: 'Los otros dos son raros y tienen pronósticos opuestos. El predominio linfocítico, cinco por ciento, tiene un pronóstico excelente.' },
          { t: 'Depleción linfocítica: bajo 5%', d: 'Anciano, agresivo, mal pronóstico',
            say: 'La depleción linfocítica, menos de cinco por ciento, es del anciano, muy agresiva y de mal pronóstico.' },
        ] },
        { title: 'Diseminación', tag: 'Por contigüidad', kind: 'alert', items: [
          { t: 'De un grupo ganglionar al vecino', d: 'Ordenada y predecible',
            say: 'Y una característica que se pregunta: el Hodgkin se disemina en orden, por contigüidad, de un grupo ganglionar al vecino. Es predecible. Guarda esta idea, porque es justo lo contrario de lo que hacen los no Hodgkin.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Linfomas no Hodgkin',
      title: 'No Hodgkin: agresivo curable o indolente incurable',
      nodes: [
        { id: 'lnh', col: 0, row: 1, k: 'start', t: 'Linfoma no Hodgkin', s: 'Más de 60 tipos · 85–90% B' },
        { id: 'dis', col: 0, row: 3, k: 'mech', t: 'Diseminación hematógena', s: 'Precoz, no contigua, extraganglionar' },
        { id: 'agr', col: 1, row: 0, k: 'alert', t: 'Agresivo: LDCBG', s: '35% · crece en semanas' },
        { id: 'rch', col: 2, row: 0, k: 'good', t: 'R-CHOP', s: 'Curable en más del 60%' },
        { id: 'ind', col: 1, row: 2, k: 'risk', t: 'Indolente: folicular', s: '20% · t(14;18) · BCL-2' },
        { id: 'obs', col: 2, row: 2, k: 'effect', t: 'Vive años, pero incurable', s: 'Se observa si es asintomático' },
        { id: 'tra', col: 3, row: 1, k: 'trap', t: 'Transformación', s: 'A linfoma difuso agresivo' },
      ],
      edges: [
        { from: 'lnh', to: 'agr' }, { from: 'agr', to: 'rch' }, { from: 'lnh', to: 'ind' }, { from: 'ind', to: 'obs' },
        { from: 'lnh', to: 'dis' }, { from: 'obs', to: 'tra', label: 'puede' },
      ],
      steps: [
        { show: ['lnh'], note: 'Un grupo enorme, del adulto mayor',
          say: 'Pasemos a los no Hodgkin. Son más de sesenta neoplasias distintas: entre ochenta y cinco y noventa por ciento vienen de linfocitos B, y el resto de linfocitos T o NK. Su incidencia sube con la edad, sobre los sesenta o sesenta y cinco años.' },
        { show: ['dis'], note: 'Lo contrario del Hodgkin',
          say: 'Y aquí está el contraste que te pedí guardar. Los no Hodgkin se diseminan por vía hematógena, en forma precoz, desordenada y no contigua. Por eso comprometen mucho órganos fuera del ganglio: estómago, anillo de Waldeyer, médula ósea, piel y sistema nervioso central.' },
        { show: ['agr'], note: 'Masas que crecen de forma explosiva',
          say: 'Para el examen se dividen en dos comportamientos. El agresivo tiene como prototipo el linfoma difuso de células B grandes, el treinta y cinco por ciento de los no Hodgkin y el más común. Debuta con masas de crecimiento explosivo y síntomas B, y sin tratamiento mata en meses.' },
        { show: ['rch'], note: 'Lo agresivo responde a la quimioterapia',
          say: 'Pero, justamente porque crece rápido, responde bien: con R-CHOP, que es rituximab, ciclofosfamida, doxorrubicina, vincristina y prednisona, se cura más del sesenta por ciento.' },
        { show: ['ind'], note: 'Una célula que no muere',
          say: 'El indolente tiene como prototipo el linfoma folicular, el veinte por ciento. Se origina por la translocación catorce dieciocho, que pone el gen BCL dos, que impide la apoptosis, bajo el promotor de las inmunoglobulinas. No es una célula que prolifera rápido: es una célula que no muere.' },
        { show: ['obs'], note: 'La paradoja: vive más, pero no se cura',
          say: 'Por eso da adenopatías generalizadas por años, que crecen y se achican. Tiene sobrevidas muy largas, pero es incurable con la quimioterapia estándar. Si está asintomático, se observa, igual que la linfática crónica de la clase anterior.' },
        { show: ['tra'], note: 'El riesgo a vigilar',
          say: 'Y su riesgo a largo plazo es transformarse en un linfoma difuso agresivo. Por eso se controla periódicamente.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Linfoma MALT',
      title: 'El linfoma que se trata con antibióticos',
      cards: [
        { title: 'Linfoma gástrico MALT', tag: 'Helicobacter pylori', kind: 'key', items: [
          { t: 'Linfoma extraganglionar del estómago', d: 'Asociado a Helicobacter pylori',
            say: 'Un caso especial de no Hodgkin extraganglionar, que conecta con gastroenterología: el linfoma gástrico MALT, del tejido linfoide asociado a mucosas. Está asociado a la infección por Helicobacter pylori.' },
          { t: 'Temprano: erradicar H. pylori', d: 'IBP + claritromicina + amoxicilina',
            say: 'Y su tratamiento en estadio temprano es la erradicación de la bacteria: inhibidor de la bomba de protones, claritromicina y amoxicilina. Con eso se cura más del setenta y cinco por ciento. Si en el examen ves un linfoma MALT gástrico temprano, la respuesta es erradicar, no la quimioterapia.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Hodgkin vs no Hodgkin',
      title: 'Las diferencias que se preguntan',
      head: ['Característica', 'Hodgkin', 'No Hodgkin'],
      rows: [
        { cells: ['Edad', 'Bimodal: jóvenes y sobre 60', 'Aumenta con la edad (sobre 60)'],
          say: 'Pongamos los dos lado a lado. En edad, el Hodgkin es bimodal, con un pico en jóvenes; el no Hodgkin aumenta con la edad.' },
        { cells: ['Diseminación', 'Ordenada, por contigüidad', 'Desordenada, hematógena precoz'],
          say: 'El Hodgkin se disemina en orden, por contigüidad; el no Hodgkin, en forma desordenada y por la sangre desde temprano.' },
        { cells: ['Extraganglionar', 'Muy raro al inicio (< 5–10%)', 'Frecuente (> 30–40%)'],
          say: 'Por lo mismo, el compromiso fuera del ganglio es muy raro al inicio en el Hodgkin, y frecuente en el no Hodgkin: tubo digestivo, sistema nervioso central, piel y bazo.' },
        { cells: ['Mediastino', 'Frecuente en esclerosis nodular', 'Menos común'],
          say: 'El mediastino se compromete mucho en el Hodgkin de esclerosis nodular, y menos en el no Hodgkin.' },
        { cells: ['Célula', 'Reed-Sternberg (CD30+, CD15+)', 'Clon homogéneo B o T'],
          say: 'La célula del Hodgkin es la Reed-Sternberg; en el no Hodgkin hay un clon homogéneo de linfocitos B o T.' },
        { cells: ['Infiltrado inflamatorio', 'Predomina (casi toda la masa)', 'Escaso'],
          say: 'En el Hodgkin, casi toda la masa es infiltrado inflamatorio; en el no Hodgkin, casi todo es tumor.' },
        { cells: ['Curabilidad', 'Más del 85% con ABVD', 'LDCBG 60%; folicular incurable'],
          say: 'Y el pronóstico: el Hodgkin se cura en más del ochenta y cinco por ciento con ABVD. En el no Hodgkin, el difuso de células grandes se cura en un sesenta por ciento, y el folicular no se cura.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Etapificación',
      title: 'Ann Arbor: el diafragma como frontera',
      head: ['Estadio', 'Definición', 'Pronóstico y abordaje'],
      rows: [
        { cells: ['I', 'Una sola región ganglionar (o un sitio extraganglionar: IE)', 'Localizado: ABVD abreviado + radioterapia'],
          say: 'Veamos la etapificación de Ann Arbor, que rige el tratamiento. La referencia es el diafragma. Estadio uno: una sola región ganglionar, por ejemplo solo los ganglios cervicales derechos, o un solo sitio extraganglionar.' },
        { cells: ['II', 'Dos o más regiones, mismo lado del diafragma', 'Localizado: curación sobre 90%'],
          say: 'Estadio dos: dos o más regiones, pero al mismo lado del diafragma, ambas arriba o ambas abajo. Sigue siendo enfermedad localizada, con curación sobre noventa por ciento.' },
        { cells: ['III', 'Regiones a ambos lados del diafragma (± bazo)', 'Avanzado: ABVD completo, 6 ciclos'],
          say: 'Estadio tres: ganglios a ambos lados del diafragma, arriba y abajo. Ya es enfermedad avanzada, y lleva seis ciclos de ABVD.' },
        { cells: ['IV', 'Órganos extralinfáticos no contiguos', 'Diseminado: quimioterapia sistémica'],
          say: 'Estadio cuatro: compromiso difuso de órganos fuera del sistema linfático, no contiguos, como la médula ósea, el hígado o el pulmón.' },
        { cells: ['Sufijos', 'A/B: síntomas B · E: extraganglionar contiguo · X: bulky > 10 cm', 'Bulky mediastínico: agregar radioterapia'],
          say: 'A cada estadio se le agrega la letra A o B según los síntomas B. Además, la E marca extensión extraganglionar contigua, y la X una masa voluminosa, de más de diez centímetros. Una masa mediastínica voluminosa obliga a sumar radioterapia.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento GES',
      title: 'Esquemas garantizados y su toxicidad',
      cards: [
        { title: 'Hodgkin', tag: 'ABVD · GES 38', kind: 'pharma', items: [
          { t: 'Doxorrubicina, bleomicina, vinblastina, dacarbazina', d: '± radioterapia del campo comprometido',
            say: 'Pasemos al tratamiento, garantizado en el GES número treinta y ocho para mayores de quince años, y en el GES de cáncer en menores de quince. El Hodgkin, temprano o avanzado, se trata con ABVD: adriamicina, que es la doxorrubicina, bleomicina, vinblastina y dacarbazina, con o sin radioterapia del campo comprometido. Cura más del ochenta y cinco por ciento.' },
          { t: 'Bleomicina: pulmón · doxorrubicina: corazón', d: 'Toxicidades a vigilar',
            say: 'Y dos toxicidades que se preguntan: la bleomicina da fibrosis pulmonar, y la doxorrubicina, cardiotoxicidad.' },
        ] },
        { title: 'No Hodgkin agresivo B', tag: 'R-CHOP', kind: 'pharma', items: [
          { t: 'Rituximab + CHOP', d: 'Ciclofosfamida, doxorrubicina, vincristina, prednisona',
            say: 'El no Hodgkin agresivo de células B se trata con R-CHOP: rituximab más ciclofosfamida, doxorrubicina, vincristina y prednisona.' },
          { t: 'Vincristina: neuropatía · rituximab: VHB', d: 'Reacción infusional, reactivar hepatitis B',
            say: 'Aquí la vincristina da neuropatía periférica, y el rituximab puede dar reacciones a la infusión y reactivar una hepatitis B.' },
        ] },
        { title: 'Sin quimioterapia', tag: 'Ojo en el examen', kind: 'alert', items: [
          { t: 'Folicular asintomático: observar', d: 'Control semestral por transformación',
            say: 'Y dos escenarios donde no se da quimioterapia. El folicular asintomático se observa, con control cada seis meses buscando la transformación.' },
          { t: 'MALT gástrico temprano: erradicar', d: 'Tratamiento de Helicobacter pylori',
            say: 'Y el MALT gástrico temprano se trata erradicando el Helicobacter.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol de decisión, partiendo del ganglio que no se va.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Respuesta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Adenopatía sospechosa de linfoma', 'Biopsia escisional del ganglio', 'PAAF'],
          say: 'Repasemos las trampas. Adenopatía sospechosa de linfoma: biopsia escisional del ganglio completo. La punción aspirativa es el error más clásico del tema.' },
        { cells: ['Joven con adenopatía y síntomas B', 'Linfoma, probable Hodgkin', 'Tuberculosis o mononucleosis'],
          say: 'Adulto joven con adenopatías persistentes y síntomas B: linfoma, probablemente Hodgkin. No te distraigas con la tuberculosis o la mononucleosis: el cuadro de adenopatía persistente con síntomas B es linfoma, y lo aclara la biopsia.' },
        { cells: ['Definir síntomas B', 'Fiebre, sudoración, baja de peso > 10%', 'Incluir prurito o dolor con alcohol'],
          say: 'Síntomas B son fiebre sobre treinta y ocho, sudoración nocturna profusa y baja de peso de más del diez por ciento en seis meses. El prurito y el dolor con alcohol orientan, pero no son síntomas B.' },
        { cells: ['Ganglios arriba y abajo del diafragma', 'Estadio III', 'Llamarlo estadio IV'],
          say: 'Ganglios a ambos lados del diafragma es estadio tres. El cuatro requiere órganos extralinfáticos como médula, hígado o pulmón.' },
        { cells: ['Linfoma folicular asintomático', 'Observar', 'Quimioterapia de entrada'],
          say: 'Folicular asintomático: se observa. La quimioterapia de entrada no lo cura.' },
        { cells: ['MALT gástrico temprano', 'Erradicar H. pylori', 'Quimioterapia o gastrectomía'],
          say: 'Y MALT gástrico temprano: erradicación del Helicobacter, no quimioterapia ni cirugía.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 25 años con aumento de volumen cervical izquierdo de 2 meses, indoloro y de crecimiento paulatino. En el último mes, sudoración nocturna que empapa su camiseta y baja involuntaria de 7 kg (peso basal 68 kg). Conglomerado adenopático supraclavicular y cervical lateral izquierdo de 4 cm, gomoso, móvil, no sensible. Sin otras adenopatías ni visceromegalias. El médico general sospecha tuberculosis y solicita una PAAF.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar la PAAF y esperar el resultado citológico' },
        { letter: 'B', text: 'Iniciar tratamiento antituberculoso empírico' },
        { letter: 'C', text: 'Suspender la PAAF y derivar para biopsia escisional del ganglio completo' },
        { letter: 'D', text: 'Indicar antibióticos por 2 semanas y reevaluar' },
        { letter: 'E', text: 'Iniciar ABVD por sospecha de linfoma de Hodgkin' },
      ],
      correct: 'C',
      explanation: 'Adulto joven con adenopatía supraclavicular gomosa persistente y síntomas B (sudoración nocturna y baja de peso > 10%): sospecha de linfoma de Hodgkin. La PAAF no evalúa la arquitectura ni permite tipificar el linfoma. Se suspende y se deriva para biopsia escisional (Reed-Sternberg) y etapificación, con cobertura GES 38. No se trata sin confirmación histológica.',
      say: {
        stem: 'Vamos con un caso. Hombre de veinticinco años con un aumento de volumen cervical izquierdo de dos meses, indoloro y que va creciendo. En el último mes suda en la noche hasta empapar la camiseta y bajó siete kilos, desde un peso de sesenta y ocho. Tiene un conglomerado supraclavicular y cervical izquierdo de cuatro centímetros, gomoso e indoloro. El médico sospecha tuberculosis y pide una punción aspirativa.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Tienes cinco opciones: hacer la punción y esperar la citología, tratamiento antituberculoso empírico, suspender la punción y derivar para biopsia escisional, antibióticos por dos semanas, o iniciar ABVD. Piénsalo.',
        answer: 'La respuesta es la C. Es un joven con adenopatía supraclavicular gomosa y síntomas B: siete kilos de sesenta y ocho es más del diez por ciento. Hay que pensar en Hodgkin, y el diagnóstico exige el ganglio completo. La punción es la trampa: no muestra la arquitectura y puede dar un falso negativo. Y el ABVD, aunque sea el tratamiento del Hodgkin, no se inicia sin confirmación histológica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 106',
      stem: 'Una paciente de 20 años consulta por aumento de volumen en el cuello de 2 meses de evolución, asociado a leve malestar general, fiebre ocasional y sudoración nocturna. Al examen físico, se palpan adenopatías submandibulares y cervicales bilaterales de consistencia aumentada.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Tuberculosis ganglionar' },
        { letter: 'B', text: 'Linfoma' },
        { letter: 'C', text: 'Infección por VIH' },
        { letter: 'D', text: 'Sarcoidosis' },
        { letter: 'E', text: 'Mononucleosis infecciosa' },
      ],
      correct: 'B',
      explanation: 'Mujer joven con adenopatías cervicales duras de 2 meses, fiebre y sudoración nocturna: linfoma, probablemente de Hodgkin por la edad. El diagnóstico definitivo se hace con biopsia ganglionar.',
      say: {
        stem: 'Ahora preguntas reales. La primera es del EUNACOM de julio de dos mil veinticuatro. Mujer de veinte años con dos meses de aumento de volumen en el cuello, malestar, fiebre ocasional y sudoración nocturna. Tiene adenopatías submandibulares y cervicales bilaterales de consistencia aumentada.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: tuberculosis ganglionar, linfoma, infección por VIH, sarcoidosis, o mononucleosis infecciosa. Piénsalo.',
        answer: 'Es la B, linfoma. Adenopatías duras que llevan dos meses, en una mujer joven, con fiebre y sudoración nocturna: por la edad, probablemente Hodgkin. El distractor más tentador es la tuberculosis ganglionar, que también da fiebre y sudoración. Pero el cuadro clásico de adenopatía persistente con síntomas B en una joven es linfoma, y en cualquier caso la biopsia es la que decide.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 4',
      stem: 'Una paciente de 22 años presenta un cuadro de fiebre nocturna, asociada a baja de peso de 3 meses de evolución y astenia. Además refiere aumento de volumen cervical. Al examen físico se aprecia palidez de piel y mucosas y una masa de 6 cm de diámetro en la cara lateral derecha del cuello. En la radiografía de tórax, se constata ensanchamiento del mediastino.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Leucemia linfática crónica' },
        { letter: 'B', text: 'Infección por VIH' },
        { letter: 'C', text: 'Tuberculosis ganglionar' },
        { letter: 'D', text: 'Linfoma de Hodgkin' },
        { letter: 'E', text: 'Linfoma no Hodgkin' },
      ],
      correct: 'D',
      explanation: 'Mujer joven con síntomas B, masa cervical y ensanchamiento mediastínico: linfoma de Hodgkin, probablemente esclerosis nodular (mujer joven, mediastino anterior). La edad orienta a Hodgkin por sobre no Hodgkin; la LLC es del adulto mayor.',
      say: {
        stem: 'La segunda es del EUNACOM de julio de dos mil dieciséis. Mujer de veintidós años con fiebre nocturna, baja de peso de tres meses y astenia, y un aumento de volumen cervical. Tiene una masa de seis centímetros en el cuello, y la radiografía de tórax muestra el mediastino ensanchado.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: leucemia linfática crónica, VIH, tuberculosis ganglionar, linfoma de Hodgkin, o linfoma no Hodgkin. Piénsalo.',
        answer: 'Es la D, linfoma de Hodgkin. Esta pregunta te pide un paso más: no solo linfoma, sino cuál. Mujer joven, síntomas B y mediastino ensanchado es el retrato de la esclerosis nodular. El no Hodgkin es el distractor, porque también da adenopatías y síntomas B, pero la edad joven y el mediastino inclinan al Hodgkin. Y la linfática crónica es del anciano.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 140',
      stem: 'Un paciente de 15 años consulta por tos de 7 días de evolución asociada a cefalea y malestar general, que en los últimos días ha evolucionado con empeoramiento de los síntomas, dificultad respiratoria y edema de la cara. Al examen físico se observa agitado, con eritema facial, edema de párpados y lengua de mayor tamaño que lo normal. Se aprecian yugulares visibles en el cuello y se palpan adenopatías cervicales múltiples, de hasta 2 cm de diámetro. Se solicita radiografía de tórax que muestra presencia de una masa mediastínica.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Linfoma de Hodgkin' },
        { letter: 'B', text: 'Carcinoma broncogénico' },
        { letter: 'C', text: 'Cáncer de tiroides' },
        { letter: 'D', text: 'Tuberculosis' },
        { letter: 'E', text: 'Timoma' },
      ],
      correct: 'A',
      explanation: 'Edema facial, yugulares ingurgitadas y masa mediastínica: síndrome de vena cava superior. En un adolescente con adenopatías cervicales, la causa más probable es un linfoma de Hodgkin con compromiso mediastínico. En un adulto mayor fumador sería más probable el carcinoma broncogénico.',
      say: {
        stem: 'La tercera es del EUNACOM de diciembre de dos mil veinticinco. Adolescente de quince años con una semana de tos, cefalea y malestar, que empeora con dificultad respiratoria y edema de la cara. Tiene eritema facial, edema de párpados, la lengua aumentada, yugulares visibles y adenopatías cervicales múltiples. La radiografía muestra una masa mediastínica.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: linfoma de Hodgkin, carcinoma broncogénico, cáncer de tiroides, tuberculosis, o timoma. Piénsalo.',
        answer: 'Es la A, linfoma de Hodgkin. Lo nuevo aquí es la complicación: edema de la cara con yugulares ingurgitadas es un síndrome de vena cava superior, porque la masa del mediastino comprime la vena. En un adolescente con adenopatías, la causa es el Hodgkin, que compromete mucho el mediastino. El carcinoma broncogénico es el distractor: sería la respuesta en un adulto mayor fumador.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 102',
      stem: 'Un paciente de 55 años presenta un cuadro de 3 meses de evolución de astenia y baja de peso de 5 kg, a lo que se ha agregado sudoración en la noche y fiebre intermitente hasta 38,5 °C que ha manejado con paracetamol. Al examen físico está hemodinámicamente estable, con signos vitales dentro de rango normal, y se palpan adenopatías cervicales de consistencia gomosa en ambos lados de la zona anterior del cuello. Se solicita hemograma que muestra hematocrito: 37%, hemoglobina: 12,2 g/dL, glóbulos blancos: 5.600/mm³ y plaquetas: 160.000/mm³. Se solicita radiografía de tórax que muestra múltiples adenopatías mediastínicas y TAC de abdomen y pelvis que muestra presencia de múltiples adenopatías retroperitoneales.',
      question: '¿Cuál es el examen de elección para determinar el diagnóstico en este caso?',
      options: [
        { letter: 'A', text: 'Biopsia de médula ósea' },
        { letter: 'B', text: 'Serología para virus de Epstein-Barr, citomegalovirus y VIH' },
        { letter: 'C', text: 'Biopsia aspirativa de la adenopatía' },
        { letter: 'D', text: 'Biopsia ganglionar excisional' },
        { letter: 'E', text: 'Hemocultivos' },
      ],
      correct: 'D',
      explanation: 'Adenopatías gomosas cervicales, mediastínicas y retroperitoneales con síntomas B: linfoma (por la edad, probablemente no Hodgkin). El diagnóstico se hace con biopsia ganglionar excisional; la aspirativa no muestra la arquitectura. El hemograma casi normal no descarta linfoma.',
      say: {
        stem: 'Y la última, también de diciembre de dos mil veinticinco. Hombre de cincuenta y cinco años con tres meses de astenia, baja de cinco kilos, sudoración nocturna y fiebre hasta treinta y ocho y medio. Tiene adenopatías cervicales gomosas bilaterales, el hemograma es casi normal, y las imágenes muestran adenopatías en el mediastino y en el retroperitoneo.',
        question: '¿Cuál es el examen de elección para determinar el diagnóstico?',
        options: 'Las opciones son: biopsia de médula ósea, serologías virales, biopsia aspirativa de la adenopatía, biopsia ganglionar excisional, o hemocultivos. Piénsalo.',
        answer: 'Es la D, la biopsia ganglionar excisional. Por la edad, probablemente es un no Hodgkin, pero eso lo decide el patólogo con el ganglio entero. El distractor está puesto a propósito: la biopsia aspirativa. Suena a biopsia, pero es la punción con aguja fina y no muestra la arquitectura. Y fíjate: el hemograma normal no descarta un linfoma.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Diagnóstico', tag: 'El ganglio entero', kind: 'key', items: [
          { t: 'Indolora, gomosa, > 2 cm, > 4–6 semanas', d: 'Sospechar linfoma',
            say: 'Cerremos con las reglas de oro. Una adenopatía indolora, gomosa, de más de dos centímetros, que lleva más de un mes sin infección que la explique, es un linfoma hasta demostrar lo contrario.' },
          { t: 'Biopsia escisional, nunca PAAF', d: 'Se necesita la arquitectura',
            say: 'Se confirma con biopsia escisional del ganglio completo. Nunca con punción aspirativa.' },
          { t: 'Síntomas B', d: 'Fiebre > 38, sudoración, peso > 10% en 6 meses',
            say: 'Los síntomas B son fiebre sobre treinta y ocho, sudoración nocturna profusa y baja de peso de más del diez por ciento en seis meses.' },
        ] },
        { title: 'Hodgkin', tag: 'Joven, mediastino', kind: 'criteria', items: [
          { t: 'Reed-Sternberg CD30+, CD15+', d: 'Esclerosis nodular, contigüidad',
            say: 'El Hodgkin tiene Reed-Sternberg, predomina la esclerosis nodular en mujeres jóvenes con masa mediastínica, y se disemina por contigüidad.' },
          { t: 'ABVD cura más del 85%', d: 'GES 38',
            say: 'Se trata con ABVD, y se cura en más del ochenta y cinco por ciento.' },
        ] },
        { title: 'No Hodgkin', tag: 'Agresivo o indolente', kind: 'alert', items: [
          { t: 'LDCBG: R-CHOP, curable', d: 'Folicular: incurable, se observa',
            say: 'En el no Hodgkin, el difuso de células grandes es agresivo pero curable con R-CHOP; el folicular es indolente, incurable, y se observa si está asintomático.' },
          { t: 'MALT gástrico: erradicar H. pylori', d: 'Temprano, sin quimioterapia',
            say: 'Si te llevas una sola idea de hoy: el linfoma se diagnostica con el ganglio completo, y la punción aspirativa siempre es la trampa. En la próxima clase veremos el mieloma múltiple, la neoplasia de la célula plasmática. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Adenopatía sospechosa: del ganglio al tratamiento',
    root: N('start', 'Adenopatía sospechosa', 'Biopsia escisional · nunca PAAF',
      'Paciente con una adenopatía indolora, gomosa, de más de dos centímetros, que lleva más de cuatro a seis semanas sin infección que la explique. El primer paso es la biopsia escisional del ganglio completo, o con aguja gruesa si es inaccesible. Nunca punción aspirativa.',
        ['', N('q', '¿Reed-Sternberg?', 'CD30+, CD15+',
          '¿La histología muestra células de Reed-Sternberg?',
          ['SÍ', N('refer', 'Linfoma de Hodgkin', 'Ann Arbor + ABVD · GES 38',
            'Si las hay, es un linfoma de Hodgkin. Se deriva con garantía GES, se etapifica con Ann Arbor y se trata con ABVD, con radioterapia según el estadio.')],
          ['NO', N('q', '¿Agresivo o indolente?', 'Linfoma no Hodgkin',
            'Si no, es un no Hodgkin. La pregunta ahora es su comportamiento.',
            ['Agresivo', N('refer', 'LDCBG: R-CHOP', 'Curable en más del 60%',
              'Si es un difuso de células B grandes, agresivo: R-CHOP, con intención curativa.')],
            ['Folicular', N('ok', 'Asintomático: observar', 'Control por transformación',
              'Si es un folicular asintomático: observar, con controles periódicos por el riesgo de transformación.')],
            ['MALT gástrico', N('ok', 'Erradicar H. pylori', 'En estadio temprano',
              'Y si es un MALT gástrico temprano: erradicar el Helicobacter pylori.')])])]),
  },
};
