// Clase 10.18 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_neurologia.cjs (neuro-18).
// Preguntas reales: banco real (classes/scripts/class_questions.cjs neuro-18 y --search).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'neuro-18',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Brotes separados en el tiempo y en el espacio, bandas oligoclonales y qué hacer con el brote',
      say: 'Bienvenidos. En la clase anterior vimos la miastenia, una enfermedad autoinmune de la unión neuromuscular. Hoy la autoinmunidad sube al sistema nervioso central, con la esclerosis múltiple. Es la primera causa de discapacidad neurológica no traumática en adultos jóvenes, y en el examen se ordena con una idea: lesiones que aparecen en distintos lugares y en distintos momentos. Si entiendes eso, entiendes los criterios de McDonald. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'Linfocitos que atacan la mielina',
      nodes: [
        { id: 'tol', col: 0, row: 1, k: 'cause', t: 'Pérdida de autotolerancia', s: 'Contra antígenos de la mielina' },
        { id: 'bhe', col: 1, row: 1, k: 'mech', t: 'Linfocitos T cruzan la BHE', s: 'Vía integrina α4 (VLA-4)' },
        { id: 'inf', col: 2, row: 1, k: 'mech', t: 'Inflamación perivenular', s: 'Citoquinas, microglía, linfocitos B' },
        { id: 'des', col: 3, row: 0, k: 'effect', t: 'Placa de desmielinización', s: 'Axón respetado al inicio: brote' },
        { id: 'axo', col: 3, row: 2, k: 'risk', t: 'Daño axonal irreversible', s: 'Atrofia y discapacidad (EDSS)' },
      ],
      edges: [
        { from: 'tol', to: 'bhe' }, { from: 'bhe', to: 'inf' },
        { from: 'inf', to: 'des' }, { from: 'inf', to: 'axo', label: 'si se cronifica' },
      ],
      steps: [
        { show: ['tol'], note: 'Enfermedad autoinmune, inflamatoria y desmielinizante del SNC',
          say: 'Partamos por el mecanismo. La esclerosis múltiple es una enfermedad autoinmune: el sistema inmune pierde la tolerancia frente a proteínas de la vaina de mielina del sistema nervioso central. Ojo, del sistema nervioso central. El nervio periférico no se toca; eso era el Guillain-Barré.' },
        { show: ['bhe'], note: 'La puerta de entrada: la barrera hematoencefálica',
          say: 'Los linfocitos T autorreactivos cruzan la barrera hematoencefálica, y para hacerlo se anclan al endotelio con una molécula de adhesión, la integrina alfa cuatro. Guarda ese nombre, porque uno de los fármacos más potentes de la enfermedad bloquea justamente esa puerta.' },
        { show: ['inf'], note: 'Inflamación alrededor de las vénulas',
          say: 'Ya dentro del cerebro, liberan citoquinas, activan la microglía y hacen que los linfocitos B y las células plasmáticas fabriquen anticuerpos dentro del sistema nervioso. Esos anticuerpos producidos adentro son los que después vamos a ver en el líquido cefalorraquídeo.' },
        { show: ['des'], note: 'Desmielinización focal: el brote',
          say: 'El resultado es una placa de desmielinización alrededor de una vénula. Al principio se daña la mielina y se respeta el axón, y por eso el déficit puede recuperarse: eso es el brote que remite.' },
        { show: ['axo'], note: 'La inflamación crónica corta axones',
          say: 'Pero si la inflamación se mantiene en el tiempo, el axón sin soporte termina muriendo. Ese daño es irreversible, produce atrofia cerebral y discapacidad acumulada, que se mide con la escala EDSS. Por eso el tratamiento de fondo busca frenar los brotes precozmente.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología',
      title: 'Tres signos que se preguntan',
      cards: [
        { title: 'Fenómeno de Uhthoff', tag: 'Calor', kind: 'key', items: [
          { t: 'Empeora con calor o fiebre', d: 'Baño caliente, ejercicio, días de calor',
            say: 'Hay tres fenómenos que el examen adora. El primero es el fenómeno de Uhthoff: los síntomas previos, como la visión borrosa o una paresia, empeoran de forma transitoria con el calor. Un baño caliente, la fiebre, el ejercicio intenso.' },
          { t: 'Transitorio: no es un brote', d: 'Axón desmielinizado, poco margen de conducción',
            say: '¿Por qué? Porque el axón desmielinizado conduce con muy poco margen de seguridad, y el calor basta para bloquearlo. Es reversible y no significa un nuevo brote inflamatorio. No se trata con corticoides.' },
        ] },
        { title: 'Signo de Lhermitte', tag: 'Cuello', kind: 'criteria', items: [
          { t: 'Descarga eléctrica al flectar el cuello', d: 'Baja por la espalda a las extremidades',
            say: 'El segundo es el signo de Lhermitte: al flectar el cuello, el paciente siente una descarga eléctrica que baja por la espalda hacia brazos y piernas.' },
          { t: 'Cordones posteriores cervicales', d: 'Axones desmielinizados hiperexcitables',
            say: 'Se produce porque los axones desmielinizados de los cordones posteriores de la médula cervical se vuelven hiperexcitables al estiramiento.' },
        ] },
        { title: 'Pupila de Marcus Gunn', tag: 'Neuritis óptica', kind: 'alert', items: [
          { t: 'Defecto pupilar aferente relativo', d: 'Al iluminar el ojo enfermo, ambas se dilatan',
            say: 'Y el tercero es el defecto pupilar aferente relativo, o pupila de Marcus Gunn. Al pasar la luz al ojo con neuritis óptica, ambas pupilas se dilatan en vez de contraerse, porque ese nervio óptico conduce menos luz. Es el signo objetivo de la neuritis, y lo vas a ver en las preguntas reales.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: 'El debut: síndrome clínicamente aislado',
      cards: [
        { title: 'Neuritis óptica', tag: 'La más típica', kind: 'key', items: [
          { t: 'Pérdida visual monocular subaguda', d: 'En horas a días',
            say: 'La enfermedad suele debutar con un síndrome clínicamente aislado: un primer episodio de déficit neurológico que dura más de veinticuatro horas. El más clásico es la neuritis óptica: pérdida de visión de un ojo que se instala en horas a días. Fíjate en eso: no es súbita.' },
          { t: 'Dolor al mover el ojo, discromatopsia', d: 'Pierde el rojo; DPAR',
            say: 'Se acompaña de dolor retroocular que aumenta al mover los ojos, en nueve de cada diez casos, de pérdida de la visión de colores, sobre todo el rojo, y del defecto pupilar aferente.' },
          { t: 'Fondo de ojo normal en 2/3', d: 'Retrobulbar; edema de papila leve en 1/3',
            say: 'En dos tercios el fondo de ojo es normal, porque la inflamación está detrás del globo: ni el paciente ve ni el médico ve nada. En el tercio restante puede haber un edema de papila leve.' },
        ] },
        { title: 'Médula y tronco', tag: 'Otros debuts', kind: 'criteria', items: [
          { t: 'Mielitis transversa parcial', d: 'Parestesias asimétricas, nivel sensitivo, vejiga',
            say: 'El segundo debut es la mielitis transversa incompleta: parestesias asimétricas, un nivel sensitivo en el tronco, urgencia urinaria y paraparesia espástica.' },
          { t: 'Oftalmoplejía internuclear', d: 'Lesión del fascículo longitudinal medial',
            say: 'Y el tercero es el síndrome de tronco, con la oftalmoplejía internuclear. Se lesiona el fascículo longitudinal medial: al mirar al lado contrario, el ojo del lado de la lesión no aduce y el otro ojo hace nistagmo al abducir.' },
          { t: 'OIN bilateral en un joven', d: 'Prácticamente diagnóstica de EM',
            say: 'Si esa oftalmoplejía internuclear es bilateral y el paciente es un adulto joven, es prácticamente diagnóstica de esclerosis múltiple.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Formas evolutivas',
      title: 'Brotes, o progresión sin brotes',
      nodes: [
        { id: 'deb', col: 0, row: 1, k: 'start', t: 'Mujer de 20 a 45 años', s: 'Relación mujer:hombre 3:1' },
        { id: 'rr', col: 1, row: 0, k: 'effect', t: 'Remitente-recurrente', s: '85%: brotes que remiten' },
        { id: 'sp', col: 2, row: 0, k: 'risk', t: 'Secundaria progresiva', s: '>50% de las no tratadas, a 10–20 años' },
        { id: 'pp', col: 1, row: 2, k: 'risk', t: 'Primaria progresiva', s: '10–15%: progresión desde el inicio' },
        { id: 'edss', col: 3, row: 1, k: 'alert', t: 'EDSS 6: necesita bastón', s: 'Para caminar 100 metros' },
      ],
      edges: [
        { from: 'deb', to: 'rr' }, { from: 'rr', to: 'sp', label: 'sin tratamiento' },
        { from: 'deb', to: 'pp' }, { from: 'sp', to: 'edss' }, { from: 'pp', to: 'edss' },
      ],
      steps: [
        { show: ['deb'], note: 'Adulto joven, predominio femenino',
          say: '¿Quién es la paciente típica? Una mujer entre veinte y cuarenta y cinco años; las mujeres se afectan tres veces más que los hombres.' },
        { show: ['rr'], note: 'La forma más frecuente al inicio',
          say: 'En el ochenta y cinco por ciento debuta como forma remitente-recurrente: brotes agudos que remiten por completo o con secuelas mínimas, y entre brote y brote la enfermedad no avanza. Es la forma que cubre el GES.' },
        { show: ['sp'], note: 'La remitente-recurrente puede volverse progresiva',
          say: 'Sin tratamiento, más de la mitad de estas pacientes pasa en diez a veinte años a una forma secundaria progresiva: la discapacidad avanza de a poco, aunque ya no haya brotes. Refleja el daño axonal que vimos, y responde menos a los antiinflamatorios.' },
        { show: ['pp'], note: 'Sin brotes desde el comienzo',
          say: 'La forma primaria progresiva es el diez a quince por ciento. Progresa desde el inicio, sin brotes, en un adulto algo mayor, muchas veces como una paraparesia espástica que avanza. Aquí la relación entre mujeres y hombres se iguala.' },
        { show: ['edss'], note: 'La discapacidad se mide con la EDSS',
          say: 'La discapacidad se mide con la escala EDSS. Un hito que conviene recordar es el seis: el paciente necesita un bastón o una muleta para caminar cien metros. Con siete ya se moviliza en silla de ruedas.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Diagnóstico',
      title: 'Criterios de McDonald 2017',
      nodes: [
        { id: 'cis', col: 0, row: 1, k: 'start', t: 'Primer brote típico', s: 'Síndrome clínicamente aislado' },
        { id: 'dis', col: 1, row: 1, k: 'q', t: 'Diseminación en espacio', s: '≥1 lesión T2 en ≥2 de 4 zonas' },
        { id: 'zon', col: 1, row: 3, k: 'mech', t: 'Las 4 zonas', s: 'Periventricular, yuxtacortical, infratentorial, médula' },
        { id: 'dit', col: 2, row: 0, k: 'q', t: 'Diseminación en tiempo', s: 'Lesión que capta y otra que no, o lesión nueva' },
        { id: 'boc', col: 2, row: 2, k: 'good', t: 'Bandas oligoclonales en LCR', s: 'Sustituyen a la DIT' },
        { id: 'em', col: 3, row: 1, k: 'alert', t: 'Esclerosis múltiple', s: 'Descartando otras causas' },
      ],
      edges: [
        { from: 'cis', to: 'dis' }, { from: 'dis', to: 'zon', label: 'dónde' },
        { from: 'dis', to: 'dit' }, { from: 'dis', to: 'boc', label: 'o' },
        { from: 'dit', to: 'em' }, { from: 'boc', to: 'em' },
      ],
      steps: [
        { show: ['cis'], note: 'Un primer brote no basta por sí solo',
          say: 'Ahora el diagnóstico. El punto de partida es un paciente con un primer brote típico. Un solo episodio no basta: los criterios de McDonald, en su revisión de dos mil diecisiete, piden demostrar que la enfermedad está diseminada en el espacio y en el tiempo.' },
        { show: ['dis'], note: 'Varias zonas del neuroeje',
          say: 'La diseminación en el espacio se cumple con al menos una lesión hiperintensa en T dos en dos o más de las cuatro zonas típicas de la resonancia.' },
        { show: ['zon'], note: 'Dedos de Dawson: perpendiculares a los ventrículos',
          say: 'Esas cuatro zonas son: periventricular, donde las lesiones ovoideas se ponen perpendiculares a los ventrículos, los famosos dedos de Dawson; la yuxtacortical o cortical; la infratentorial, en tronco y cerebelo; y la médula espinal, con lesiones cortas, de menos de dos segmentos.' },
        { show: ['dit'], note: 'Lesiones de distinta edad',
          say: 'La diseminación en el tiempo se demuestra con lesiones de distinta edad: en una misma resonancia, unas que captan gadolinio, que son activas, y otras que no captan, que son antiguas. O con una lesión nueva en una resonancia de control.' },
        { show: ['boc'], note: 'El gran cambio de 2017',
          say: 'Y aquí está el cambio clave de McDonald dos mil diecisiete, que se pregunta. Las bandas oligoclonales en el líquido cefalorraquídeo reemplazan a la diseminación en el tiempo. Un primer brote, más lesiones en el espacio, más bandas positivas, y el diagnóstico está hecho sin esperar un segundo brote.' },
        { show: ['em'], note: 'Siempre descartando imitadores',
          say: 'Con eso se diagnostica la esclerosis múltiple, siempre que se hayan descartado otras causas. Y de esos imitadores hablamos ahora.' },
      ],
    },

    {
      type: 'points',
      kicker: 'LCR y diferenciales',
      title: 'Lo que muestra el líquido y lo que no hay que confundir',
      cards: [
        { title: 'Bandas oligoclonales', tag: 'Síntesis intratecal', kind: 'key', items: [
          { t: '≥2 bandas IgG en LCR, no en suero', d: 'Patrón tipo 2; positivas en 85–95%',
            say: 'Las bandas oligoclonales se buscan comparando el líquido cefalorraquídeo con el suero. El patrón típico, llamado tipo dos, son dos o más bandas de inmunoglobulina G presentes en el líquido y ausentes en la sangre. Significa que los anticuerpos se fabrican dentro del sistema nervioso. Son positivas en ochenta y cinco a noventa y cinco por ciento de los pacientes.' },
          { t: 'Índice de IgG elevado', d: 'Mayor de 0,7',
            say: 'El índice de inmunoglobulina G suele estar elevado, por sobre cero coma siete.' },
        ] },
        { title: 'Neuromielitis óptica', tag: 'Diferencial clave', kind: 'alert', items: [
          { t: 'Neuritis bilateral grave + mielitis extensa', d: '≥3 cuerpos vertebrales; anti-acuaporina 4',
            say: 'El diferencial más importante es el espectro de la neuromielitis óptica: neuritis óptica bilateral y grave, con una mielitis larga, de tres o más cuerpos vertebrales, y anticuerpos anti acuaporina cuatro. Compara con la esclerosis múltiple, cuyas lesiones medulares son cortas.' },
          { t: 'Interferón, natalizumab y fingolimod la agravan', d: 'Advertencia EUNACOM',
            say: 'Y aquí está la advertencia: el interferón beta, el natalizumab y el fingolimod, que sirven en la esclerosis múltiple, agravan gravemente la neuromielitis. Por eso confundirlas tiene consecuencias.' },
        ] },
        { title: 'Otros imitadores', tag: 'Descartar', kind: 'criteria', items: [
          { t: 'Anti-MOG', d: 'Neuritis bilateral con edema de papila',
            say: 'Otro diferencial es la enfermedad por anticuerpos anti MOG, con neuritis bilateral y edema de papila marcado, que responde muy bien a corticoides.' },
          { t: 'B12, sífilis, VIH, vasculitis', d: 'También neurosarcoidosis',
            say: 'Y hay que descartar el déficit de vitamina B doce, la neurosífilis, el VIH, las vasculitis como el lupus o el Behçet, y la neurosarcoidosis.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento del brote',
      title: 'El brote: corticoides en megadosis',
      cards: [
        { title: 'Definición de brote', tag: 'Antes de tratar', kind: 'criteria', items: [
          { t: 'Déficit nuevo o agravado >24 h', d: 'Sin fiebre ni infección',
            say: 'El tratamiento tiene dos partes: el brote agudo y la prevención a largo plazo. Primero, ¿qué es un brote? Un déficit neurológico nuevo o que empeora, que dura más de veinticuatro horas, sin fiebre ni infección. Si hay fiebre, piensa en el Uhthoff, que no es brote.' },
        ] },
        { title: 'Metilprednisolona EV', tag: 'Pilar', kind: 'pharma', items: [
          { t: '1 g al día por 3 a 5 días', d: 'Infusión de 2 horas en suero fisiológico',
            say: 'El pilar es la metilprednisolona endovenosa: un gramo al día, en infusión de dos horas, por tres a cinco días seguidos.' },
          { t: 'Sin descenso oral', d: 'Proteger el estómago con omeprazol',
            say: 'No necesita descenso gradual con corticoides orales. Se asocia omeprazol por la gastritis, y hay que vigilar la hiperglicemia y el insomnio.' },
        ] },
        { title: 'Rescate', tag: 'Brote grave refractario', kind: 'alert', items: [
          { t: 'Plasmaféresis', d: 'Si no responde en 2 semanas; 5 a 7 sesiones',
            say: 'Si el brote es grave e incapacitante, como una ceguera por neuritis o una hemiparesia importante, y no responde a los corticoides en dos semanas, el rescate es la plasmaféresis: cinco a siete recambios en días alternos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapia modificadora',
      title: 'Prevenir brotes: terapia modificadora GES 69',
      cards: [
        { title: 'Primera línea', tag: 'Eficacia moderada', kind: 'pharma', items: [
          { t: 'Interferón beta y glatiramero', d: 'Glatiramero: seguro en el embarazo',
            say: 'La segunda parte es la terapia modificadora de la enfermedad, garantizada por el GES sesenta y nueve para la forma remitente-recurrente. Reduce los brotes y las lesiones nuevas. En primera línea están el interferón beta, inyectable, que da síndrome pseudogripal y depresión, y el acetato de glatiramero, que es seguro en el embarazo.' },
          { t: 'Dimetilfumarato y teriflunomida', d: 'Orales; teriflunomida teratogénica',
            say: 'También hay orales: el dimetilfumarato, que da rubefacción y linfopenia, y la teriflunomida, que es hepatotóxica y muy teratogénica.' },
        ] },
        { title: 'Alta eficacia', tag: 'Segunda línea', kind: 'alert', items: [
          { t: 'Natalizumab: anti-integrina α4', d: 'Riesgo de LMP por virus JC',
            say: '¿Recuerdas la integrina alfa cuatro, la puerta de entrada de los linfocitos? El natalizumab es el anticuerpo que la bloquea. Es muy eficaz, pero su riesgo es lo que se pregunta: la reactivación del virus JC, que produce una leucoencefalopatía multifocal progresiva, muchas veces letal. Por eso se controlan los anticuerpos contra el virus JC.' },
          { t: 'Ocrelizumab: anti-CD20', d: 'Único con beneficio en la primaria progresiva',
            say: 'El ocrelizumab es un anticuerpo anti CD veinte, contra los linfocitos B, y es la única terapia con beneficio comprobado en la forma primaria progresiva.' },
          { t: 'Fingolimod', d: 'ECG en la primera dosis; edema macular',
            say: 'Y el fingolimod, oral, secuestra linfocitos en los ganglios. Puede dar bradicardia en la primera dosis, por lo que se monitoriza con electrocardiograma, y edema macular, por lo que se controla el fondo de ojo.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en el examen.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Respuesta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Joven con déficits focales en distintos momentos', 'Esclerosis múltiple', 'Guillain-Barré o polineuropatía'],
          say: 'Repasemos las trampas. Adulto joven con déficits focales distintos, en momentos distintos, que se recuperan: esclerosis múltiple. El error es pensar en un Guillain-Barré, que es periférico y simétrico.' },
        { cells: ['Visión baja en días, dolor al mover el ojo, DPAR', 'Neuritis óptica', 'Neuropatía óptica isquémica'],
          say: 'Pérdida visual en horas a días, con dolor al mover el ojo y defecto pupilar aferente: neuritis óptica. Si fuera súbita en un paciente vascular, sería isquémica.' },
        { cells: ['Empeora en un baño caliente', 'Fenómeno de Uhthoff', 'Tratarlo como brote'],
          say: 'Síntomas que empeoran con el calor: fenómeno de Uhthoff. No es un brote y no lleva corticoides.' },
        { cells: ['Primer brote + DIS + bandas oligoclonales', 'Diagnóstico de EM', 'Esperar un segundo brote'],
          say: 'Primer brote, diseminación en el espacio y bandas oligoclonales positivas: ya es esclerosis múltiple. Esperar un segundo brote es el error.' },
        { cells: ['Brote agudo', 'Metilprednisolona 1 g/día EV por 3–5 días', 'Prednisona oral con descenso'],
          say: 'Brote agudo: metilprednisolona endovenosa, un gramo al día por tres a cinco días, sin descenso oral.' },
        { cells: ['Mielitis de ≥3 vértebras, neuritis bilateral', 'Neuromielitis óptica: anti-AQP4', 'Iniciar interferón o natalizumab'],
          say: 'Mielitis larga, de tres o más vértebras, con neuritis bilateral: neuromielitis óptica. Indicar interferón o natalizumab la empeora.' },
        { cells: ['Paciente con natalizumab', 'Vigilar virus JC', 'Olvidar la LMP'],
          say: 'Y en el paciente con natalizumab, la complicación que siempre buscas es la leucoencefalopatía multifocal progresiva por virus JC.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 26 años, profesora, con 3 días de baja visual del ojo derecho y dolor retroorbitario que empeora al mover los ojos; ve los rojos "deslavados". Hace un año tuvo parestesias en la pierna izquierda por 2 semanas, que cedieron solas. AV OD 20/100, OI 20/20; DPAR derecho; fondo de ojo normal. RM: lesiones periventriculares perpendiculares a los ventrículos y una yuxtacortical; dos captan gadolinio. LCR: 4 bandas oligoclonales IgG ausentes en suero.',
      question: '¿Cuál es la conducta inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Prednisona oral 1 mg/kg/día con descenso gradual' },
        { letter: 'B', text: 'Metilprednisolona EV 1 g/día por 3 a 5 días y derivar a neurología (GES)' },
        { letter: 'C', text: 'Natalizumab EV como primera medida' },
        { letter: 'D', text: 'Observar y repetir la RM en 6 meses para confirmar diseminación en tiempo' },
        { letter: 'E', text: 'Plasmaféresis de inmediato' },
      ],
      correct: 'B',
      explanation: 'Neuritis óptica retrobulbar en una mujer joven con RM que cumple diseminación en espacio y en tiempo (lesiones que captan y no captan), además de bandas oligoclonales: esclerosis múltiple remitente-recurrente. El brote se trata con metilprednisolona EV 1 g/día por 3–5 días y se deriva para inicio de terapia modificadora GES. No hay que esperar otra RM; la plasmaféresis es rescate si falla el corticoide.',
      say: {
        stem: 'Vamos con un caso. Mujer de veintiséis años, profesora, con tres días de baja de visión del ojo derecho y dolor que empeora al moverlo; ve los rojos deslavados. Hace un año tuvo parestesias en una pierna que cedieron solas. Tiene defecto pupilar aferente derecho y fondo de ojo normal. La resonancia muestra lesiones periventriculares y una yuxtacortical, y dos captan gadolinio. El líquido tiene cuatro bandas oligoclonales ausentes en el suero.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'Las opciones: prednisona oral con descenso, metilprednisolona endovenosa por tres a cinco días con derivación a neurología, natalizumab de entrada, observar y repetir la resonancia en seis meses, o plasmaféresis inmediata. Piénsalo.',
        answer: 'Es la B. Es una neuritis óptica retrobulbar, y la paciente ya cumple McDonald: lesiones en dos zonas, lesiones que captan junto a otras que no, y además bandas positivas. El brote se trata con metilprednisolona endovenosa y se deriva por GES para la terapia modificadora. El distractor tentador es esperar otra resonancia, pero la diseminación en el tiempo ya está demostrada. Y la plasmaféresis es el rescate si el corticoide falla.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 104',
      stem: 'Una paciente de 30 años presenta un cuadro de un mes de evolución de neuralgia de la primera rama del trigémino. Hace una semana se agrega disminución de la sensibilidad del muslo derecho, con dificultades para caminar. Como antecedente, refiere que hace un año tuvo un trastorno del equilibrio, que resolvió espontáneamente.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Polineuropatía por déficit de vitamina B12' },
        { letter: 'B', text: 'Síndrome de Guillain Barré de presentación atípica' },
        { letter: 'C', text: 'Infarto talámico' },
        { letter: 'D', text: 'Esclerosis múltiple' },
        { letter: 'E', text: 'Neurinoma con compresión del troncoencéfalo' },
      ],
      correct: 'D',
      explanation: 'Mujer joven con déficits focales en distintos territorios (trigémino, muslo, equilibrio) y en distintos momentos, con recuperación espontánea del primero: diseminación en espacio y en tiempo, es decir, esclerosis múltiple.',
      say: {
        stem: 'Ahora preguntas reales. Esta es del EUNACOM de julio de dos mil diecinueve. Paciente de treinta años con un mes de neuralgia de la primera rama del trigémino. Hace una semana se agrega disminución de la sensibilidad del muslo derecho, con dificultad para caminar. Hace un año tuvo un trastorno del equilibrio que se resolvió solo.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: polineuropatía por déficit de vitamina B doce, Guillain-Barré atípico, infarto talámico, esclerosis múltiple, o neurinoma que comprime el tronco. Piénsalo.',
        answer: 'Es la D, esclerosis múltiple. Cuenta los territorios: trigémino, muslo y equilibrio, es decir, lesiones en distintos lugares. Y en distintos momentos, con un episodio que remitió solo. Eso es diseminación en el espacio y en el tiempo. El infarto talámico tienta por la alteración sensitiva, pero no explica un cuadro repartido en el tiempo que se recupera. Y el Guillain-Barré sería simétrico y ascendente.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2016 · Pregunta 5',
      stem: 'Una paciente de 26 años, con antecedente de esclerosis múltiple consulta por disminución de la agudeza visual derecha, de 2 días de evolución, asociado a leve dolor retroocular derecho, que aumenta con los movimientos. Al examen físico se aprecia rojo pupilar y movimientos normales, escape pupilar, con defecto pupilar aferente en el ojo derecho y presencia de un escotoma derecho.',
      question: '¿Cuál es el diagnóstico más probale?',
      options: [
        { letter: 'A', text: 'Desprendimiento de retina' },
        { letter: 'B', text: 'Trombosis de la vena central de la retina' },
        { letter: 'C', text: 'Trombosis de arteria central de la retina' },
        { letter: 'D', text: 'Neuritis óptica' },
        { letter: 'E', text: 'Absceso orbitario' },
      ],
      correct: 'D',
      explanation: 'Baja visual en días, dolor retroocular que aumenta con los movimientos oculares y defecto pupilar aferente, en una paciente con esclerosis múltiple: neuritis óptica.',
      say: {
        stem: 'La siguiente es del EUNACOM de julio de dos mil dieciséis. Paciente de veintiséis años con esclerosis múltiple, con dos días de baja de visión derecha y leve dolor detrás del ojo, que aumenta con los movimientos. Tiene rojo pupilar y motilidad normales, defecto pupilar aferente derecho y un escotoma.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: desprendimiento de retina, trombosis de la vena central, trombosis de la arteria central, neuritis óptica, o absceso orbitario. Piénsalo.',
        answer: 'Es la D, neuritis óptica. Tiene los tres elementos: baja visual que se instala en días, dolor al mover el ojo y defecto pupilar aferente, en una paciente con esclerosis múltiple. Las oclusiones vasculares de la retina son súbitas e indoloras. Y el absceso orbitario tentaría por el dolor, pero daría fiebre, edema palpebral y alteración de la motilidad, que aquí es normal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 82',
      stem: 'Una paciente, con antecedente de esclerosis múltiple, consulta por dolor ocular derecho, de 2 días de evolución, a lo que se le ha agregado visión borrosa. Tiene agudeza visual de 0,9 en el lado derecho y 1 en el lado izquierdo, que no cambia al mirar por un agujero estenopeico. Además se constata que en el ojo derecho está muy afectada la visión de colores.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Discromatopsia' },
        { letter: 'B', text: 'Retinitis pigmentosa' },
        { letter: 'C', text: 'Coriorretinitis' },
        { letter: 'D', text: 'Desprendimiento de retina' },
        { letter: 'E', text: 'Neuritis óptica' },
      ],
      correct: 'E',
      explanation: 'Dolor ocular y visión borrosa de días, con gran compromiso de la visión de colores aunque la agudeza visual esté casi normal, en una paciente con esclerosis múltiple: neuritis óptica. La discromatopsia es un signo, no el diagnóstico.',
      say: {
        stem: 'Otra variante, del EUNACOM de diciembre de dos mil diecisiete. Paciente con esclerosis múltiple, con dos días de dolor ocular derecho y visión borrosa. La agudeza visual es casi normal, cero coma nueve, y no cambia con el agujero estenopeico. Pero la visión de colores del ojo derecho está muy afectada.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones: discromatopsia, retinitis pigmentosa, coriorretinitis, desprendimiento de retina, o neuritis óptica. Piénsalo.',
        answer: 'Es la E, neuritis óptica. Lo que enseña esta pregunta es que la agudeza visual puede estar casi normal, y aun así la visión de colores se pierde precozmente. La trampa es la alternativa discromatopsia: es verdad que la tiene, pero es un signo, no el diagnóstico. La retinitis pigmentosa es crónica y el desprendimiento no duele.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 17',
      stem: 'Una paciente de 14 años presenta disminución de la visión del izquierdo, de dos días de evolución. Su agudeza visual es 20/200 en el ojo izquierdo y 20/20 en el derecho. Tiene antecedente de hemiparesia braquial. Al fondo de ojo se observa papilitis izquierda. Su resonancia magnética nuclear muestra lesiones desmielinizantes cerebrales.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Desprendimiento de retina' },
        { letter: 'B', text: 'Neuritis óptica' },
        { letter: 'C', text: 'Neuropatía óptica isquémica' },
        { letter: 'D', text: 'Degeneración macular' },
        { letter: 'E', text: 'Hipertensión endocraneana' },
      ],
      correct: 'B',
      explanation: 'Baja visual monocular en días, antecedente de otro déficit focal y lesiones desmielinizantes en la RM: neuritis óptica en el contexto de esclerosis múltiple. Un tercio de las neuritis muestra edema de papila (papilitis), que es unilateral; el edema de papila bilateral orienta a hipertensión endocraneana.',
      say: {
        stem: 'La última es del EUNACOM de julio de dos mil diecinueve. Paciente de catorce años con dos días de baja de visión del ojo izquierdo, con agudeza de veinte sobre doscientos en ese ojo. Tiene el antecedente de una hemiparesia braquial. En el fondo de ojo hay papilitis izquierda, y la resonancia muestra lesiones desmielinizantes cerebrales.',
        question: 'El diagnóstico más probable es:',
        options: 'Las opciones: desprendimiento de retina, neuritis óptica, neuropatía óptica isquémica, degeneración macular, o hipertensión endocraneana. Piénsalo.',
        answer: 'Es la B, neuritis óptica. Esta pregunta rompe una idea fija: el fondo de ojo no siempre es normal. En un tercio de los casos hay edema de papila, y aquí es de un solo ojo. El distractor es la hipertensión endocraneana, pero esa da edema de papila bilateral. Y la neuropatía isquémica sería súbita, en un adulto con factores de riesgo vascular.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Clínica', tag: 'Espacio y tiempo', kind: 'key', items: [
          { t: 'Mujer joven, déficits que van y vienen', d: 'En distintos lugares y momentos',
            say: 'Cerremos con las reglas de oro. Mujer joven con déficits focales en distintos lugares y en distintos momentos, que se recuperan: piensa en esclerosis múltiple.' },
          { t: 'Neuritis óptica, mielitis, OIN', d: 'Uhthoff y Lhermitte',
            say: 'Los debuts clásicos son la neuritis óptica, la mielitis parcial y la oftalmoplejía internuclear, y los signos que se preguntan son el Uhthoff con el calor y el Lhermitte al flectar el cuello.' },
        ] },
        { title: 'Diagnóstico', tag: 'McDonald 2017', kind: 'criteria', items: [
          { t: 'DIS + DIT en la RM', d: 'Bandas oligoclonales sustituyen la DIT',
            say: 'El diagnóstico exige diseminación en el espacio y en el tiempo, y las bandas oligoclonales reemplazan a la diseminación en el tiempo.' },
          { t: 'Descartar neuromielitis óptica', d: 'Mielitis ≥3 vértebras, anti-acuaporina 4',
            say: 'Y siempre descarta la neuromielitis óptica, porque los fármacos de la esclerosis múltiple la empeoran.' },
        ] },
        { title: 'Tratamiento', tag: 'Brote y fondo', kind: 'pharma', items: [
          { t: 'Brote: metilprednisolona EV 1 g/día', d: '3 a 5 días; plasmaféresis si falla',
            say: 'El brote se trata con metilprednisolona endovenosa, un gramo al día por tres a cinco días, y la plasmaféresis es el rescate.' },
          { t: 'Fondo: terapia modificadora GES 69', d: 'Natalizumab: vigilar virus JC',
            say: 'Y a largo plazo, terapia modificadora por GES, recordando que el natalizumab expone a la leucoencefalopatía por virus JC. Si te llevas una sola idea de hoy: la esclerosis múltiple es inflamación del sistema nervioso central diseminada en el espacio y en el tiempo, y las bandas oligoclonales pueden reemplazar al tiempo. En la próxima clase vemos la parálisis facial. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Esclerosis múltiple: del primer brote al tratamiento',
    root: N('start', 'Adulto joven con déficit focal >24 h', 'Neuritis óptica, mielitis o tronco',
      'Adulto joven con un déficit neurológico focal que dura más de veinticuatro horas: una neuritis óptica, una mielitis parcial o un síndrome de tronco.',
      ['', N('q', '¿Hay fiebre o calor?', 'Buscar Uhthoff o infección',
        'Lo primero es preguntarse si hay fiebre, calor o infección, porque eso cambia todo.',
        ['Sí', N('ok', 'Uhthoff o seudobrote', 'Tratar la causa, sin corticoides',
          'Si el empeoramiento se explica por calor o fiebre, es un fenómeno de Uhthoff, no un brote. Se trata la causa y no se dan corticoides.')],
        ['No', N('do', 'Brote: metilprednisolona EV', '1 g/día por 3 a 5 días',
          'Si no hay fiebre, es un brote, y se trata con metilprednisolona endovenosa, un gramo al día por tres a cinco días.',
          ['Refractario grave', N('alert', 'Plasmaféresis', 'Si no responde en 2 semanas',
            'Si el brote es grave y no responde en dos semanas, plasmaféresis.')],
          ['Estudio', N('q', 'RM con gadolinio + LCR', '¿DIS y DIT, o DIS y bandas?',
            'En paralelo se estudia con resonancia con gadolinio y punción lumbar, buscando diseminación en el espacio y en el tiempo, o bandas oligoclonales.',
            ['Cumple McDonald', N('refer', 'EM: derivar a neurología GES', 'Terapia modificadora',
              'Si cumple McDonald, es esclerosis múltiple: se deriva a neurología por GES para iniciar terapia modificadora.')],
            ['Mielitis extensa', N('alert', 'Sospechar neuromielitis óptica', 'Anti-acuaporina 4; no interferón',
              'Si la mielitis ocupa tres o más vértebras o la neuritis es bilateral y grave, sospecha neuromielitis óptica y no indiques interferón ni natalizumab.')])])])]),
  },
};
