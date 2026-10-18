// Clase 11.19 (Cirugía) — guion docente escrito a mano (estándar Módulo 1). Tema nuevo de hueco del Perfil V3.
// Fuente clínica: books/scripts/cirugia_extra/c.cjs (cirugia-19, tier 3). Códigos: 4.01.1.044 (aneurismas aorta torácica, femoral y poplítea),
// 4.01.1.048 (várices e insuficiencia venosa), 4.01.1.050 (úlceras de las piernas). Niveles en books/data/v3_codemap.json.
// Preguntas reales (class_questions.cjs --search "várices|aneurisma|úlcera venosa|tromboflebitis|isquemia aguda"): Julio 2025 P26 (várices simples,
// código 4.01.1.048) y Julio 2024 P61 (úlcera venosa, código 4.01.1.050). Enunciados y alternativas copiados tal cual del banco.
// No usadas: Julio 2017 P65 (aneurisma de aorta abdominal: fuera del alcance de la clase, que trata aorta torácica, femoral y poplíteo),
// Julio 2017 P26 (confianza 0,45) y las de várices esofágicas (otra enfermedad).
// Fotos en contexto (atlas, books/data/atlas_fotos_verificadas.json): úlcera venosa (Bailey & Love p. 995), lipodermatoesclerosis (p. 994)
// y várices extensas (Fitzpatrick p. 1719). En movimiento: scenes/cirugia_nuevas.html (?v=varices) sobre Blausen "Varicose Vein", CC BY 3.0.

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-19',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Aneurismas, várices y úlceras de la pierna: qué se vigila, qué se maneja y qué no se comprime',
      say: 'Bienvenido. Hoy vemos la patología vascular periférica, que en el consultorio se resume en tres motivos de consulta: la masa pulsátil, las piernas con várices y la úlcera que no cierra. En el examen se repiten tres ideas. Primero, el aneurisma poplíteo no se rompe, se obstruye. Segundo, las várices simples se manejan sin cirugía. Y tercero, antes de comprimir una úlcera, siempre tomas los pulsos y mides el índice tobillo-brazo.',
    },

    {
      type: 'flow',
      kicker: 'Aneurismas',
      title: 'Una pared débil que se dilata',
      nodes: [
        { id: 'a', col: 0, row: 0, k: 'cause', t: 'Aterosclerosis', s: 'Hipertensión y tabaco' },
        { id: 'n', col: 0, row: 2, k: 'cause', t: 'Necrosis quística de la media', s: 'Marfan, Ehlers-Danlos, válvula bicúspide' },
        { id: 'v', col: 0, row: 4, k: 'cause', t: 'Arteritis y sífilis', s: 'Takayasu, células gigantes' },
        { id: 'd', col: 2, row: 2, k: 'mech', t: 'Pared arterial debilitada', s: 'Dilatación ≥ 50% del diámetro normal' },
        { id: 'r', col: 4, row: 1, k: 'risk', t: 'Aorta: disección o rotura', s: 'Sangrado masivo' },
        { id: 't', col: 4, row: 3, k: 'risk', t: 'Poplíteo: trombosis o embolia', s: 'Isquemia aguda de la pierna' },
      ],
      edges: [
        { from: 'a', to: 'd' }, { from: 'n', to: 'd' }, { from: 'v', to: 'd' },
        { from: 'd', to: 'r' }, { from: 'd', to: 't' },
      ],
      steps: [
        { show: ['d'], note: 'Dilatación permanente y localizada',
          say: 'Un aneurisma es una dilatación permanente y localizada de una arteria, con un aumento del diámetro de al menos la mitad respecto del normal. La pared está debilitada y cede.' },
        { show: ['a', 'n', 'v'], note: 'Tres causas',
          say: 'La causa más frecuente es la aterosclerosis, con hipertensión y tabaquismo. En la aorta torácica se suman las enfermedades de la capa media, como el Marfan, el Ehlers-Danlos y la válvula aórtica bicúspide, además de las arteritis y la sífilis.' },
        { show: ['r', 't'], note: 'Cada localización, su complicación',
          say: 'Y lo que importa para el examen es que la complicación depende del lugar. La aorta se disecta o se rompe. El aneurisma poplíteo, en cambio, casi nunca se rompe: se llena de trombos y tapa la arteria, o lanza émbolos hacia el pie.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Aorta torácica',
      title: 'Silencioso hasta que crece',
      cards: [
        { title: 'Presentación', tag: 'Casi siempre un hallazgo', kind: 'key', items: [
          { t: 'Asintomático', d: 'Ensanchamiento mediastínico en la radiografía',
            say: 'El aneurisma de la aorta torácica es silencioso. Se descubre como un ensanchamiento del mediastino en una radiografía o en una ecocardiografía.' },
          { t: 'Si crece: compresión', d: 'Dolor torácico o dorsal, disfonía, disnea, disfagia',
            say: 'Cuando crece, comprime lo que tiene alrededor: da dolor torácico o dorsal, disfonía, disnea o disfagia. Se confirma con angioTAC, y su complicación grave es la disección o la rotura.' },
        ] },
        { title: 'Conducta', tag: 'Controlar y derivar', kind: 'alert', items: [
          { t: 'Betabloqueo y presión controlada', d: 'Sin tabaco; imágenes seriadas',
            say: 'Mientras no se opera, se controla la presión con betabloqueadores, se suspende el tabaco y se vigila con imágenes seriadas.' },
          { t: 'Cirugía: ≥ 5,5 cm', d: 'Antes en Marfan o bicúspide; crece > 0,5 cm/año o síntomas',
            say: 'Se deriva a cirugía cardiovascular cuando el diámetro supera los cinco coma cinco centímetros, o antes si hay Marfan o válvula bicúspide, si crece más de medio centímetro en un año, o si da síntomas. La reparación puede ser abierta o endovascular.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Poplíteo y femoral',
      title: 'El aneurisma que se obstruye',
      cards: [
        { title: 'Poplíteo', tag: 'El más frecuente de los periféricos', kind: 'alert', items: [
          { t: 'Masa pulsátil en el hueco poplíteo', d: 'Bilateral en cerca de la mitad',
            say: 'El aneurisma poplíteo es el más frecuente de los periféricos. Es bilateral en cerca de la mitad de los casos, así que siempre buscas el del otro lado. Se presenta como una masa pulsátil en el hueco poplíteo.' },
          { t: 'Asociado a aneurisma aórtico', d: 'Un tercio de los casos',
            say: 'Y en un tercio de los casos se asocia a un aneurisma de la aorta abdominal. Por eso, cuando encuentras uno, buscas el otro.' },
          { t: 'Trombosis o embolia distal', d: 'Isquemia aguda: riesgo de amputación',
            say: 'Pero la forma más común de presentarse es una isquemia aguda de la pierna. A diferencia del aneurisma aórtico, la complicación no es la rotura, sino la trombosis o la embolia hacia distal, con riesgo de amputación. Esa diferencia se pregunta.' },
        ] },
        { title: 'Femoral', tag: 'Comportamiento similar', kind: 'key', items: [
          { t: 'Seudoaneurisma tras punción', d: 'Masa pulsátil con soplo',
            say: 'El aneurisma femoral se comporta de manera parecida. Ojo con el seudoaneurisma, que aparece como una masa pulsátil con soplo después de una punción o de un cateterismo.' },
          { t: 'Eco-Doppler', d: 'Confirma el diagnóstico',
            say: 'En ambos, el diagnóstico se confirma con eco-Doppler.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Conducta',
      title: 'Derivar y reconocer la isquemia aguda',
      cards: [
        { title: 'Cirugía vascular', tag: 'Cuándo se repara', kind: 'criteria', items: [
          { t: 'Poplíteo ≥ 2 cm, con trombo o sintomático', d: 'Exclusión con puente de vena safena',
            say: 'El aneurisma poplíteo se repara cuando mide dos centímetros o más, cuando tiene trombo, o cuando da síntomas. La técnica es la exclusión con un puente de vena safena.' },
          { t: 'Pequeño y asintomático: vigilar', d: 'Eco-Doppler seriado, sin trombo',
            say: 'Si es pequeño, no tiene trombo y no da síntomas, se vigila con eco-Doppler.' },
        ] },
        { title: 'Isquemia aguda', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Dolor, palidez, sin pulso, frialdad, parestesias', d: 'La pierna se ve y se siente distinta',
            say: 'Y si el paciente llega con dolor, palidez, ausencia de pulso, frialdad y parestesias, es una isquemia aguda de la extremidad.' },
          { t: 'Heparina y revascularización', d: 'Urgente, en centro vascular',
            say: 'Es una urgencia: se anticoagula con heparina y se revasculariza.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Aneurismas: localización, complicación y conducta',
      head: ['Localización', 'Complicación típica', 'Cuándo se opera', 'Clave'],
      rows: [
        { cells: ['Aorta torácica', 'Disección o rotura', '≥ 5,5 cm, crece > 0,5 cm/año o síntomas', 'Betabloqueo y control de la presión'],
          say: 'Aorta torácica: se complica con disección o rotura y se opera desde los cinco coma cinco centímetros, o si crece rápido o da síntomas. Mientras tanto, betabloqueo y presión controlada.' },
        { cells: ['Poplíteo', 'Trombosis y embolia distal', '≥ 2 cm, trombo o síntomas', 'Bilateral en la mitad; buscar aneurisma aórtico'],
          say: 'Poplíteo: no se rompe, se obstruye. Se opera desde los dos centímetros, con trombo o con síntomas. Es bilateral en la mitad de los casos y se busca el aórtico.' },
        { cells: ['Femoral', 'Trombosis y embolia distal', 'Sintomático o ≥ 2,5 cm', 'Seudoaneurisma: masa pulsátil con soplo'],
          say: 'Femoral: también se obstruye. Se opera si da síntomas o mide dos coma cinco centímetros o más. Y tras un cateterismo, una masa pulsátil con soplo es un seudoaneurisma.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Insuficiencia venosa',
      title: 'De la válvula incompetente a la úlcera',
      nodes: [
        { id: 'v', col: 0, row: 1, k: 'cause', t: 'Válvulas incompetentes', s: 'Safena, perforantes o venas profundas' },
        { id: 'f', col: 0, row: 3, k: 'cause', t: 'Factores de riesgo', s: 'Mujer, embarazo, obesidad, bipedestación' },
        { id: 'r', col: 2, row: 2, k: 'mech', t: 'Reflujo e hipertensión venosa', s: 'La sangre baja y se acumula' },
        { id: 's', col: 4, row: 0, k: 'effect', t: 'Pesadez, calambres, edema', s: 'Mejora con elevar o caminar' },
        { id: 'p', col: 4, row: 2, k: 'effect', t: 'Pigmentación y eczema', s: 'Lipodermatoesclerosis' },
        { id: 'u', col: 4, row: 4, k: 'alert', t: 'Úlcera venosa', s: 'Maleolar medial' },
      ],
      edges: [
        { from: 'v', to: 'r' }, { from: 'f', to: 'r' },
        { from: 'r', to: 's' }, { from: 'r', to: 'p' }, { from: 'p', to: 'u' },
      ],
      steps: [
        { show: ['v', 'r'], note: 'La válvula falla, la sangre refluye',
          say: 'Las venas de las piernas empujan la sangre hacia arriba con la ayuda de válvulas y del músculo de la pantorrilla. Cuando las válvulas de las venas superficiales, perforantes o profundas son incompetentes, la sangre refluye y la presión venosa se mantiene alta.' },
        { show: ['f'], note: 'Quién la tiene',
          say: 'Es muy frecuente, sobre todo en mujeres, y lo favorecen la edad, el embarazo, la obesidad, estar mucho tiempo de pie y los antecedentes familiares.' },
        { show: ['s', 'p', 'u'], note: 'De los síntomas a la úlcera',
          say: 'Primero vienen la pesadez, el dolor, los calambres nocturnos, la picazón y el edema de la tarde, que mejoran al elevar las piernas o caminar. Con los años aparecen el eczema, la pigmentación, la lipodermatoesclerosis y, al final, la úlcera.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'La válvula que falla',
      images: [
        { src: 'animaciones/cirugia-19/A1_varices_valvula.mp4', label: 'Vena normal frente a vena con várice', credit: 'Ilustración: Blausen.com staff (2014), CC BY 3.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Un solo sentido, o reflujo',
          say: 'Mira la vena normal: cuando el músculo de la pantorrilla empuja, la sangre sube, y al relajarse la válvula cierra y no vuelve. En la vena con várice la válvula es incompetente: la sangre refluye, la vena se dilata y la presión venosa se mantiene alta al caminar. Esa hipertensión sostenida produce el edema, la pigmentación, la lipodermatoesclerosis y la úlcera maleolar medial.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Várices',
      title: 'Examinar de pie y confirmar con Doppler',
      cards: [
        { title: 'Clínica', tag: 'Paciente de pie', kind: 'key', items: [
          { t: 'Várices tronculares y telangiectasias', d: 'Safena interna o externa',
            say: 'La clave del examen es hacerlo con el paciente de pie. Ahí se ven las várices tronculares de la safena interna o externa y las telangiectasias.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-19/03_varices-extensas__fitzpatrick_p1719.jpg', label: 'Várices extensas', at: 'Ahí se ven', credit: 'Fitzpatrick, Dermatology in General Medicine, p. 1719' } },
          { t: 'Edema, pigmentación, eczema', d: 'Lipodermatoesclerosis',
            say: 'Después buscas el edema, la pigmentación, el eczema y el endurecimiento de la piel, que es la lipodermatoesclerosis.' },
        ] },
        { title: 'Diagnóstico', tag: 'Confirmar y descartar', kind: 'criteria', items: [
          { t: 'Eco-Doppler venoso', d: 'Documenta reflujo y mapea la safena',
            say: 'El diagnóstico es clínico y se confirma con eco-Doppler venoso, que documenta el reflujo y mapea la safena.' },
          { t: 'Descartar trombosis profunda', d: 'Várices secundarias: síndrome postflebítico',
            say: 'También descarta una trombosis venosa profunda, porque las várices secundarias son la secuela de una: el síndrome postflebítico.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Clasificación',
      title: 'CEAP clínica: de C0 a C6',
      head: ['Clase', 'Hallazgo', 'Conducta'],
      rows: [
        { cells: ['C0', 'Sin signos de enfermedad venosa', 'Medidas generales'],
          say: 'La clasificación CEAP gradúa la gravedad. C cero es sin signos visibles ni palpables, y bastan las medidas generales.' },
        { cells: ['C1', 'Telangiectasias o venas reticulares', 'Escleroterapia si lo desea'],
          say: 'C uno son telangiectasias, un problema casi estético: escleroterapia si el paciente lo desea.' },
        { cells: ['C2', 'Várices > 3 mm', 'Compresión y ejercicio; cirugía si hay síntomas'],
          say: 'C dos son las várices de más de tres milímetros. Compresión y ejercicio, y cirugía si hay síntomas.' },
        { cells: ['C3', 'Edema', 'Compresión; estudiar el reflujo'],
          say: 'C tres suma el edema: compresión y estudio del reflujo.' },
        { cells: ['C4', 'Pigmentación, eczema, lipodermatoesclerosis', 'Compresión; derivar a vascular'],
          say: 'Desde C cuatro hay cambios en la piel, como pigmentación, eczema y lipodermatoesclerosis. Aquí ya se deriva a cirugía vascular.',
          photo: { src: 'biblioteca/10_cirugia/cirugia-19/02_lipodermatoesclerosis__bailey-love_p994.jpg', label: 'Lipodermatoesclerosis', at: 'Aquí ya', credit: 'Bailey & Love 27.ª ed., p. 994' } },
        { cells: ['C5 · C6', 'Úlcera cicatrizada · úlcera activa', 'Compresión permanente y multicapa; derivar'],
          say: 'C cinco es una úlcera cicatrizada y C seis una úlcera activa. Compresión permanente, curación y derivación para tratar el reflujo.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Várices simples: primero conservador',
      cards: [
        { title: 'Sin complicaciones', tag: 'Lo que se pregunta', kind: 'pharma', items: [
          { t: 'Caminata, elevación y control del peso', d: 'Evitar estar mucho de pie',
            say: 'La pregunta clásica es la mujer con várices sin úlceras ni tromboflebitis. El manejo inicial es conservador: caminar, elevar las piernas, controlar el peso y evitar la bipedestación prolongada.' },
          { t: 'Medias de compresión graduada', d: '20-30 mmHg',
            say: 'Y se agregan medias de compresión graduada, de veinte a treinta milímetros de mercurio.' },
          { t: 'Cirugía o ablación si falla', d: 'Láser, radiofrecuencia, safenectomía, escleroterapia',
            say: 'Si persisten los síntomas o aparecen complicaciones, se deriva para ablación térmica con láser o radiofrecuencia, safenectomía, flebectomías o escleroterapia. Anticoagular o derivar de urgencia a una várice simple es el error.' },
        ] },
        { title: 'Complicaciones', tag: 'Qué hacer', kind: 'alert', items: [
          { t: 'Tromboflebitis superficial', d: 'AINE, compresión y deambulación',
            say: 'La tromboflebitis superficial es un cordón doloroso, rojo y duro sobre una várice. Se trata con antiinflamatorios, compresión y deambulación.' },
          { t: 'Anticoagular si ≥ 5 cm o cerca de la unión safenofemoral', d: 'A menos de 3 cm',
            say: 'Pero si el trombo mide cinco centímetros o más, o está a menos de tres centímetros de la unión safenofemoral, se agrega anticoagulación por el riesgo de trombosis profunda.' },
          { t: 'Várice sangrante', d: 'Elevar y comprimir; suturar si no cede',
            say: 'Y la várice sangrante se controla elevando la pierna y comprimiendo directo, con sutura del punto sangrante si no cede.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Úlceras',
      title: 'Venosa o arterial: se distingue por dónde y cuánto duele',
      cards: [
        { title: 'Úlcera venosa', tag: '70 a 80% de las úlceras', kind: 'key', items: [
          { t: 'Maleolar medial, poco dolorosa', d: 'Bordes irregulares, fondo granulante con fibrina',
            say: 'La úlcera venosa es la más frecuente. Se ubica en el tercio inferior de la pierna, sobre el maléolo medial, con bordes irregulares y un fondo con tejido de granulación y fibrina. Mira esta úlcera: es exudativa y duele poco.',
            photo: { src: 'biblioteca/10_cirugia/cirugia-19/01_ulcera-venosa__bailey-love_p995.jpg', label: 'Úlcera venosa', at: 'Mira esta úlcera', credit: 'Bailey & Love 27.ª ed., p. 995' } },
          { t: 'Piel hiperpigmentada, eczema, várices', d: 'Pulsos conservados',
            say: 'Alrededor, la piel está oscura, con eczema y endurecida, hay várices o antecedente de trombosis profunda, y los pulsos están conservados.' },
        ] },
        { title: 'Úlcera arterial', tag: 'Isquemia', kind: 'alert', items: [
          { t: 'Dedos, talón, maléolo lateral', d: 'En sacabocados, muy dolorosa',
            say: 'La úlcera arterial, en cambio, afecta los dedos, el talón, el maléolo lateral y las zonas de presión. Tiene aspecto en sacabocados y duele mucho, más en decúbito, y alivia con la pierna colgando.' },
          { t: 'Piel fría y pálida, sin pulsos', d: 'ITB < 0,9; claudicación previa',
            say: 'La piel está fría y pálida, los pulsos ausentes, hubo claudicación antes, y el índice tobillo-brazo es menor de cero coma nueve.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Otras úlceras',
      title: 'Neuropática, hipertensiva y específicas',
      cards: [
        { title: 'Por su causa', tag: 'Reconocer', kind: 'criteria', items: [
          { t: 'Neuropática: planta, callo, indolora', d: 'Pie diabético',
            say: 'La úlcera neuropática, del pie diabético, aparece en la planta, sobre los puntos de presión, rodeada de callo, y no duele.' },
          { t: 'Hipertensiva de Martorell', d: 'Cara posterolateral, muy dolorosa, necrótica',
            say: 'La úlcera hipertensiva de Martorell es una arteriolopatía de la cara posterolateral de la pierna, en hipertensos o diabéticos mal controlados. Es muy dolorosa y con necrosis.' },
          { t: 'Pioderma, vasculitis, falciforme, infecciosas', d: 'Borde violáceo socavado: pioderma',
            say: 'Entre las específicas están el pioderma gangrenoso, con borde violáceo y socavado, asociado a enfermedad inflamatoria intestinal, las vasculitis, la anemia falciforme y las infecciosas.' },
        ] },
        { title: 'No se te puede pasar', tag: 'Neoplásica', kind: 'alert', items: [
          { t: 'Carcinoma escamoso', d: 'Sobre una úlcera crónica',
            say: 'Y la neoplásica: un carcinoma escamoso puede crecer sobre una úlcera crónica.' },
          { t: 'Biopsia si no cura en 3 meses', d: 'O bordes elevados',
            say: 'Por eso toda úlcera que no cura en tres meses, o que tiene bordes elevados, se biopsia.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio y manejo inicial',
      title: 'Pulsos e ITB antes de comprimir',
      cards: [
        { title: 'Primero evaluar', tag: 'Estudio', kind: 'alert', items: [
          { t: 'Palpar pulsos y medir ITB', d: 'Siempre antes de indicar compresión',
            say: 'Frente a una úlcera, lo primero es palpar los pulsos pedios y tibiales y medir el índice tobillo-brazo, antes de comprimir.' },
          { t: 'Eco-Doppler, glicemia, hemograma', d: 'Cultivo solo si hay infección',
            say: 'Después pides eco-Doppler, glicemia y hemograma. El cultivo se toma solo si hay signos de infección.' },
        ] },
        { title: 'Tratamiento', tag: 'Según el origen', kind: 'pharma', items: [
          { t: 'Venosa: compresión multicapa', d: '30-40 mmHg, solo si ITB > 0,8',
            say: 'La úlcera venosa se trata con terapia compresiva multicapa, de treinta a cuarenta milímetros de mercurio, y solo si el índice tobillo-brazo es mayor de cero coma ocho. Se suman curación con apósitos húmedos, desbridamiento y elevación de las piernas.' },
          { t: 'Derivar para corregir el reflujo', d: 'La recidiva es muy frecuente',
            say: 'Y se deriva para corregir el reflujo, porque la recidiva es muy frecuente.' },
          { t: 'Arterial: no se comprime', d: 'Revascularización, antiagregante y estatina',
            say: 'En la úlcera arterial no se comprime. Se deriva a cirugía vascular para revascularizar, se controlan los factores de riesgo y se indican un antiagregante y una estatina.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol: de la úlcera de pierna a la conducta.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Úlceras de la pierna: cómo distinguirlas',
      head: ['Tipo', 'Dónde y cómo duele', 'Pulsos / ITB', 'Conducta'],
      rows: [
        { cells: ['Venosa', 'Maleolar medial, poco dolorosa, pigmentación', 'Presentes · ITB > 0,8', 'Compresión multicapa y curación húmeda'],
          say: 'Venosa: maleolar medial, poco dolorosa, con pigmentación y pulsos presentes. Compresión multicapa y curación húmeda.' },
        { cells: ['Arterial', 'Dedos, talón, maléolo lateral; muy dolorosa', 'Ausentes · ITB < 0,9', 'No comprimir; derivar a vascular'],
          say: 'Arterial: distal, muy dolorosa y sin pulsos. No se comprime y se deriva.' },
        { cells: ['Neuropática', 'Planta con callo; indolora', 'Variables', 'Descarga, curación y control glicémico'],
          say: 'Neuropática: la planta del pie con callo y sin dolor. Descarga de la zona, curación y control de la glicemia.' },
        { cells: ['Martorell', 'Posterolateral, necrótica, muy dolorosa', 'Presentes', 'Control de la presión; injerto'],
          say: 'Martorell: posterolateral y necrótica, en el hipertenso mal controlado. Se controla la presión y a veces se hace injerto.' },
        { cells: ['Específica o neoplásica', 'Borde violáceo o elevado; atípica', 'Variables', 'Biopsia del borde; tratar la causa'],
          say: 'Específica o neoplásica: borde violáceo o elevado, o que no cura. Biopsia del borde y tratamiento de la causa.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 62 años, obesa, con várices en ambas piernas desde hace 20 años, consulta por una úlcera de 4 cm sobre el maléolo medial izquierdo, de 3 meses de evolución, poco dolorosa, con bordes irregulares, fondo granulante con fibrina y exudado moderado. La piel circundante está hiperpigmentada y endurecida, y presenta edema vespertino. Los pulsos pedios y tibiales posteriores son palpables y el índice tobillo-brazo es 1,0. El eco-Doppler muestra reflujo en la safena interna. No hay signos de infección.',
      question: '¿Cuál es el manejo inicial?',
      options: [
        { letter: 'A', text: 'Terapia compresiva multicapa y curación húmeda, con derivación para corregir el reflujo' },
        { letter: 'B', text: 'Antibióticos orales por 14 días' },
        { letter: 'C', text: 'Reposo absoluto con la pierna en declive' },
        { letter: 'D', text: 'Derivar a cirugía vascular para revascularización de urgencia' },
        { letter: 'E', text: 'Biopsia de la úlcera antes de cualquier otra medida' },
      ],
      correct: 'A',
      explanation: 'Es una úlcera venosa: maleolar medial, poco dolorosa, con hiperpigmentación y lipodermatoesclerosis, en una paciente con várices y pulsos conservados. Con un ITB de 1,0 no hay enfermedad arterial significativa, por lo que se indica terapia compresiva multicapa, el pilar del tratamiento, junto con curación con apósitos húmedos, desbridamiento, elevación de la pierna y ejercicio. Se deriva a cirugía vascular para corregir el reflujo safeno y disminuir las recidivas. No hay signos de infección que justifiquen antibióticos, y la compresión estaría contraindicada solo si el ITB fuera menor de 0,8.',
      say: {
        stem: 'Una mujer de sesenta y dos años, obesa, con várices desde hace veinte años, tiene una úlcera de cuatro centímetros sobre el maléolo medial izquierdo, de tres meses, con bordes irregulares, fondo granulante con fibrina, poco dolorosa. La piel de alrededor está oscura y endurecida, y tiene edema en la tarde. Los pulsos están presentes, el índice tobillo-brazo es uno, y el eco-Doppler muestra reflujo en la safena interna. No hay signos de infección.',
        question: '¿Cuál es el manejo inicial?',
        options: 'Las opciones: compresión multicapa y curación húmeda con derivación; antibióticos por catorce días; reposo con la pierna en declive; revascularización de urgencia; o biopsia antes de cualquier otra medida. Piénsalo.',
        answer: 'Es la A. Es una úlcera venosa: maleolar medial, poco dolorosa, con piel pigmentada y pulsos presentes. Con un índice tobillo-brazo de uno puedes comprimir sin riesgo, y la compresión multicapa es el pilar del tratamiento. La B tienta, pero sin signos de infección los antibióticos no sirven. Y la D sería el error contrario: esa es la conducta de la úlcera arterial.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 26',
      stem: 'Mujer de 45 años con várices en extremidades inferiores bilaterales, sin úlceras ni tromboflebitis. Sin otros antecedentes mórbidos.',
      question: '¿Cuál es el manejo inicial más adecuado?',
      options: [
        { letter: 'A', text: 'Anticoagulación oral' },
        { letter: 'B', text: 'Flebectomía inmediata' },
        { letter: 'C', text: 'Escleroterapia de urgencia' },
        { letter: 'D', text: 'Medidas conservadoras: dieta, ejercicio y medias compresivas' },
        { letter: 'E', text: 'Derivación vascular urgente' },
      ],
      correct: 'D',
      explanation: 'Várices simples sin complicaciones: manejo inicial conservador con elevación de las extremidades, ejercicio (caminata), control del peso y medias de compresión elástica. La cirugía y la escleroterapia se reservan para cuando las medidas conservadoras fallan o hay complicaciones.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticinco. Una mujer de cuarenta y cinco años tiene várices en las dos piernas, sin úlceras ni tromboflebitis, y no tiene otros antecedentes.',
        question: '¿Cuál es el manejo inicial más adecuado?',
        options: 'Las opciones: anticoagulación oral; flebectomía inmediata; escleroterapia de urgencia; medidas conservadoras con dieta, ejercicio y medias compresivas; o derivación vascular urgente. Piénsalo.',
        answer: 'Es la D. Son várices simples, sin complicaciones, y el manejo inicial es conservador: caminar, controlar el peso, elevar las piernas y usar medias de compresión. La B y la C tientan porque son tratamientos de las várices, pero se reservan para cuando lo conservador falla o aparecen complicaciones. Y la A no tiene lugar sin una trombosis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 61',
      stem: 'Un paciente de 58 años, con antecedente de várices en ambas piernas, de gran tamaño, consulta porque hace dos semanas sufrió un pequeño trauma en su extremidad inferior izquierda, evolucionando con una lesión ulcerada que ha aumentado de tamaño, hasta alcanzar 1,5 cm y que se ubica a 2 cm del maléolo interno. Al examen físico, se aprecia oscurecimiento de la piel circundante, más la presencia de las várices descritas.',
      question: '¿Cuál es la etiología más probable de su lesión?',
      options: [
        { letter: 'A', text: 'Infecciosa' },
        { letter: 'B', text: 'Isquémica' },
        { letter: 'C', text: 'Venosa' },
        { letter: 'D', text: 'Neuropática' },
        { letter: 'E', text: 'Por presión' },
      ],
      correct: 'C',
      explanation: 'Úlcera venosa: se ubica sobre el maléolo medial, tiene piel oscura alrededor y aparece en una pierna con várices grandes. Las úlceras venosas suelen ser poco dolorosas, mientras que las arteriales duelen y se ubican en el maléolo lateral, los ortejos o el talón.',
      say: {
        stem: 'Una pregunta real del EUNACOM de julio de dos mil veinticuatro. Un hombre de cincuenta y ocho años con várices grandes en las dos piernas sufre un pequeño golpe en la pierna izquierda. Dos semanas después tiene una úlcera de un centímetro y medio, a dos centímetros del maléolo interno, con la piel de alrededor oscura.',
        question: '¿Cuál es la etiología más probable de su lesión?',
        options: 'Las opciones: infecciosa; isquémica; venosa; neuropática; o por presión. Piénsalo.',
        answer: 'Es la C. Hay tres datos que se juntan: las várices grandes, la ubicación sobre el maléolo medial y la piel oscura alrededor. Eso es una úlcera venosa. El trauma menor solo fue el gatillo, porque la piel con hipertensión venosa ya estaba frágil. La B tienta, pero la isquémica es distal, muy dolorosa y en una pierna con pulsos ausentes.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: patología vascular periférica',
      cards: [
        { title: 'Aneurismas', tag: 'Lo que se pregunta', kind: 'key', items: [
          { t: 'Poplíteo: se obstruye, no se rompe', d: 'Bilateral y asociado a aneurisma aórtico',
            say: 'Cerremos con las reglas de oro. El aneurisma poplíteo se complica con trombosis o embolia, no con rotura, y se busca el del otro lado y el de la aorta.' },
          { t: 'Aorta torácica: betabloqueo y cirugía desde 5,5 cm', d: 'Antes si crece rápido o da síntomas',
            say: 'En la aorta torácica, betabloqueo y control de la presión, y cirugía desde los cinco coma cinco centímetros, o antes si crece rápido o da síntomas.' },
        ] },
        { title: 'Venas y úlceras', tag: 'Conducta', kind: 'alert', items: [
          { t: 'Várices simples: conservador', d: 'Ejercicio, elevación, peso y medias',
            say: 'Las várices simples se manejan primero con medidas conservadoras y medias de compresión.' },
          { t: 'Venosa: maleolar medial; arterial: distal y dolorosa', d: 'Palpar pulsos y medir ITB',
            say: 'La úlcera venosa es maleolar medial y poco dolorosa, y la arterial es distal, muy dolorosa y sin pulsos.' },
          { t: 'Nunca comprimir sin ITB', d: 'Contraindicado si ITB < 0,8',
            say: 'Antes de comprimir, siempre pulsos e índice tobillo-brazo: con menos de cero coma ocho, la compresión está contraindicada. Si te llevas una sola idea de hoy: la pierna se evalúa primero con los pulsos, y solo después se comprime. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Úlcera crónica de la pierna',
    root: N('start', 'Úlcera de pierna o pie', 'Pulsos y ITB primero',
      'Llega un paciente con una úlcera crónica de la pierna. Antes de pensar en el tratamiento, palpas los pulsos pedios y tibiales y mides el índice tobillo-brazo.',
      ['Pulsos presentes, ITB > 0,8', N('q', 'Maleolar medial, indolora, pigmentada', 'Con várices',
        'Si los pulsos están presentes y el índice es mayor de cero coma ocho, y la úlcera es maleolar medial, poco dolorosa y con piel pigmentada, es venosa.',
        ['Úlcera venosa', N('do', 'Compresión multicapa', 'Curación húmeda y elevar la pierna',
          'La tratas con compresión multicapa, curación con apósitos húmedos, desbridamiento y elevación de la pierna.',
          ['Corregir el reflujo', N('refer', 'Cirugía vascular', 'Previene la recidiva',
            'Y la derivas para corregir el reflujo, porque la recidiva es muy frecuente.')],
        )],
      )],
      ['Pulsos ausentes, ITB < 0,9', N('alert', 'Úlcera arterial', 'Distal, muy dolorosa, piel fría',
        'Si los pulsos están ausentes, el índice es menor de cero coma nueve y la úlcera es distal y muy dolorosa, es arterial. No se comprime.',
        ['Cirugía vascular', N('refer', 'Revascularización', 'Antiagregante y estatina',
          'La derivas a cirugía vascular para revascularizar, controlas los factores de riesgo y das un antiagregante y una estatina.')],
      )],
      ['Planta con callo, indolora', N('do', 'Úlcera neuropática', 'Descarga y control glicémico',
        'Si está en la planta, sobre un punto de presión, con callo y sin dolor, es neuropática del pie diabético. Descargas la zona, curas y controlas la glicemia.')],
      ['No cura en 3 meses o borde elevado', N('alert', 'Biopsia del borde', 'Descartar carcinoma escamoso',
        'Y si la úlcera no cura en tres meses, o tiene un borde elevado o atípico, tomas una biopsia del borde para descartar un carcinoma escamoso.')],
    ),
  },
};
