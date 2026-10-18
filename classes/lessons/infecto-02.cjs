// Clase 1.2 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_infectologia.cjs (inf-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'infecto-02',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Cuándo pedir TAC antes de puncionar, qué antibiótico va primero y cómo leer el LCR',
      say: 'Bienvenidos. En la clase anterior vimos que en la sepsis el antibiótico no puede esperar. Hoy aplicamos esa misma regla al sistema nervioso central con la meningitis aguda, bacteriana y viral. El examen pregunta dos cosas una y otra vez: cuándo se pide una TAC antes de la punción lumbar, sin atrasar nunca el antibiótico, y cómo se lee el líquido cefalorraquídeo para separar bacteria de virus. Partamos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: '¿Por qué la meningitis bacteriana mata rápido?',
      nodes: [
        { id: 'neu', col: 0, row: 0, k: 'cause', t: 'Streptococcus pneumoniae', s: 'Neumococo' },
        { id: 'men', col: 0, row: 2, k: 'cause', t: 'Neisseria meningitidis', s: 'Meningococo' },
        { id: 'sub', col: 1, row: 1, k: 'mech', t: 'Infección subaracnoidea', s: 'Respuesta inflamatoria masiva' },
        { id: 'ede', col: 2, row: 1, k: 'mech', t: 'Edema cerebral', s: 'Vasogénico, citotóxico e intersticial' },
        { id: 'pic', col: 3, row: 1, k: 'risk', t: 'Presión intracraneana alta', s: 'Riesgo de isquemia cerebral' },
        { id: 'her', col: 4, row: 1, k: 'alert', t: 'Herniación', s: 'Si hay efecto de masa' },
      ],
      edges: [
        { from: 'neu', to: 'sub' },
        { from: 'men', to: 'sub' },
        { from: 'sub', to: 'ede' },
        { from: 'ede', to: 'pic' },
        { from: 'pic', to: 'her' },
      ],
      steps: [
        { show: ['neu', 'men'], note: 'Los dos agentes de la comunidad',
          say: 'Partamos por los culpables. La meningitis bacteriana de la comunidad la producen principalmente dos agentes: el Streptococcus pneumoniae, el neumococo, y la Neisseria meningitidis, el meningococo. Esos dos nombres te van a acompañar toda la clase.' },
        { show: ['sub'], note: 'La bacteria llega al espacio subaracnoideo',
          say: 'La bacteria llega al espacio subaracnoideo, que es donde circula el líquido cefalorraquídeo. Y ahí se desencadena una respuesta inflamatoria masiva.' },
        { show: ['ede'], note: 'Tres tipos de edema a la vez',
          say: 'Esa inflamación produce edema cerebral de los tres tipos a la vez: vasogénico, citotóxico e intersticial. El cerebro se hincha dentro de una caja que no se puede expandir.' },
        { show: ['pic'], note: 'El cráneo no se expande',
          say: 'Por eso la presión intracraneana sube rápido, y con ella el riesgo de isquemia cerebral. Esto explica por qué la meningitis bacteriana es una emergencia de horas, no de días.' },
        { show: ['her'], note: 'Aquí nace la pregunta de la TAC',
          say: 'Y guarda esta última idea, porque de aquí sale la pregunta más repetida del tema. Si dentro del cráneo hay un efecto de masa y sacas líquido por abajo con una punción lumbar, el cerebro se puede desplazar hacia abajo. Eso es la herniación cerebral, y es fatal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica',
      title: '¿Cómo llega el paciente con meningitis?',
      cards: [
        { title: 'Tríada clásica', tag: 'Sospecha', kind: 'key', items: [
          { t: 'Fiebre, cefalea y rigidez de nuca', d: 'La inflamación irrita las meninges',
            say: 'Veamos cómo llega el paciente. La tríada clásica es fiebre, cefalea y rigidez de nuca. La rigidez se explica por la inflamación de las meninges: mira cómo el cuello flectado encuentra resistencia, porque mover el cuello estira una membrana inflamada, y eso duele.',
            photo: { src: 'biblioteca/07_infectologia/infecto-02/02_rigidez_nuca__bates_p906.jpg', label: 'Rigidez de nuca', at: 'mira cómo el cuello', credit: 'Bates 12.ª ed., Fig. 18-72' } },
          { t: 'Completa en menos del 50 %', d: 'No esperes verla entera',
            say: 'Pero ojo: la tríada completa aparece en menos de la mitad de los casos. No esperes tenerla entera para sospechar la enfermedad.' },
          { t: 'Sin ninguno de los 3: casi se descarta', d: 'Su ausencia tiene alto valor',
            say: 'Lo contrario, en cambio, es muy útil. Si el paciente no tiene ninguno de los tres elementos, prácticamente se descarta la meningitis.' },
        ] },
        { title: 'Signos meníngeos', tag: 'Al examen', kind: 'criteria', items: [
          { t: 'Kernig y Brudzinski', d: 'Maniobras que estiran las meninges',
            say: 'Al examen buscas los signos meníngeos, Kernig y Brudzinski, que son maniobras que estiran las meninges inflamadas. Mira el signo de Kernig: con la cadera flectada, extender la rodilla duele y ofrece resistencia. Los vas a ver en casi todos los enunciados.',
            photo: { src: 'biblioteca/07_infectologia/infecto-02/01_signo_kernig__bates_p795.jpg', label: 'Kernig', at: 'Mira el signo de Kernig', credit: 'Bates 12.ª ed., Fig. 17-62' } },
          { t: 'Fotofobia y vómitos', d: 'Acompañan a la cefalea',
            say: 'Y suele acompañarse de fotofobia y vómitos. Si además hay compromiso de conciencia, piensa que la presión intracraneana ya está subiendo.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Banderas rojas',
      title: '¿Cuándo pedir TAC antes de la punción lumbar?',
      nodes: [
        { id: 'foc', col: 0, row: 0, k: 'risk', t: 'Déficit neurológico focal', s: 'Paresia, asimetría facial, afasia' },
        { id: 'con', col: 0, row: 1, k: 'risk', t: 'Convulsión reciente', s: 'Menos de 1 semana' },
        { id: 'gcs', col: 0, row: 2, k: 'risk', t: 'Glasgow < 10', s: 'Compromiso de conciencia profundo' },
        { id: 'pap', col: 0, row: 3, k: 'risk', t: 'Papiledema o inmunodepresión', s: 'VIH con CD4 bajo' },
        { id: 'tto', col: 2, row: 1, k: 'good', t: 'Hemocultivos + dexametasona + ATB', s: 'De inmediato, antes de la imagen' },
        { id: 'tac', col: 3, row: 1, k: 'refer', t: 'Luego TAC', s: 'Y después, punción lumbar' },
        { id: 'tra', col: 2, row: 3, k: 'trap', t: 'Esperar la TAC para tratar', s: 'Error grave' },
      ],
      edges: [
        { from: 'foc', to: 'tto' }, { from: 'con', to: 'tto' }, { from: 'gcs', to: 'tto' }, { from: 'pap', to: 'tto' },
        { from: 'tto', to: 'tac' },
        { from: 'tto', to: 'tra', label: 'nunca al revés' },
      ],
      steps: [
        { show: ['foc'], note: 'Focalidad: sospecha de masa',
          say: 'La punción lumbar es el estudio de elección, pero antes tienes que preguntarte si hay riesgo de herniación. La primera bandera roja es el déficit neurológico focal: una paresia, una asimetría facial, una afasia. Eso te hace pensar en algo que ocupa espacio.' },
        { show: ['con'], note: 'Convulsión de inicio reciente',
          say: 'La segunda es una crisis convulsiva de inicio reciente, de menos de una semana.' },
        { show: ['gcs'], note: 'Compromiso de conciencia profundo',
          say: 'La tercera, un compromiso de conciencia profundo, con un Glasgow menor de diez.' },
        { show: ['pap'], note: 'Papiledema o inmunodepresión severa',
          say: 'Y la cuarta, el papiledema en el fondo de ojo, o una inmunodepresión severa, como un paciente con VIH y recuento de CD cuatro bajo. Cualquiera de estas banderas obliga a una TAC antes de puncionar.' },
        { show: ['tto'], note: 'Regla de oro: el antibiótico no espera',
          say: 'Pero aquí está la regla de oro, la que decide la pregunta. Si el paciente necesita TAC, nunca esperas la imagen para tratar. Tomas hemocultivos, administras dexametasona y antibióticos empíricos endovenosos de inmediato.' },
        { show: ['tac'], note: 'Primero tratar, después la imagen',
          say: 'Y recién después lo trasladas a la TAC. Si la imagen no muestra efecto de masa, se hace la punción lumbar. Los hemocultivos que tomaste antes te siguen sirviendo para identificar el germen.' },
        { show: ['tra'], note: 'Trampa: diferir el antibiótico por la imagen',
          say: 'La trampa es la alternativa que dice trasladar a TAC sin administrar fármacos para no interferir con los cultivos. Suena ordenada, pero es incorrecta: en una meningitis bacteriana, cada hora sin antibiótico cuesta cerebro.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento',
      title: 'Tratamiento empírico: qué va y en qué orden',
      cards: [
        { title: 'Corticoide', tag: 'Antes o junto al ATB', kind: 'alert', items: [
          { t: 'Dexametasona 10 mg c/6 h EV', d: 'Por 4 días',
            say: 'Pasemos al tratamiento, y partimos por el corticoide, porque el orden se pregunta. Dexametasona endovenosa, diez miligramos cada seis horas, por cuatro días.' },
          { t: '15–20 min antes o junto al ATB', d: 'Menos secuelas auditivas y mortalidad',
            say: 'Se administra quince a veinte minutos antes, o junto con, la primera dosis de antibiótico. ¿Por qué ahí? Porque su objetivo es frenar la inflamación que desencadena la bacteria al morir. Reduce las secuelas auditivas y la mortalidad en la meningitis por neumococo.' },
        ] },
        { title: 'Esquema estándar', tag: '3 meses a 50 años', kind: 'pharma', items: [
          { t: 'Ceftriaxona 2 g c/12 h EV', d: 'Cubre neumococo y meningococo',
            say: 'El esquema estándar, entre los tres meses y los cincuenta años, es ceftriaxona, dos gramos cada doce horas endovenosa, que cubre a los dos agentes que vimos al comienzo.' },
          { t: '+ Vancomicina 15–20 mg/kg c/12 h EV', d: 'Por neumococo resistente',
            say: 'Más vancomicina, quince a veinte miligramos por kilo cada doce horas endovenosa, para cubrir al neumococo con resistencia.' },
        ] },
        { title: 'Agregar ampicilina', tag: 'Listeria', kind: 'criteria', items: [
          { t: 'Mayores de 50, embarazadas, inmunodeprimidos', d: 'Ampicilina 2 g c/4 h EV',
            say: 'Y el dato que más se pregunta del tratamiento. En mayores de cincuenta años, embarazadas e inmunodeprimidos se agrega ampicilina, dos gramos cada cuatro horas endovenosa.' },
          { t: 'Listeria es resistente a cefalosporinas', d: 'La ceftriaxona sola no la cubre',
            say: '¿Por qué? Porque en esos pacientes aparece la Listeria monocytogenes, que es intrínsecamente resistente a las cefalosporinas. Si olvidas la ampicilina en un paciente de sesenta años, dejaste un agente sin cubrir.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Líquido cefalorraquídeo',
      title: 'El LCR separa bacteria de virus',
      nodes: [
        { id: 'pl', col: 0, row: 1, k: 'start', t: 'Punción lumbar', s: 'Citoquímico del LCR' },
        { id: 'glu', col: 1, row: 1, k: 'q', t: '¿Cómo está la glucosa?', s: 'Razón LCR/suero' },
        { id: 'bac', col: 2, row: 0, k: 'alert', t: 'Glucosa baja, < 0,4', s: 'PMN > 80 % · proteínas > 100' },
        { id: 'vir', col: 2, row: 2, k: 'good', t: 'Glucosa normal, > 0,6', s: 'Mononucleares · proteínas levemente altas' },
        { id: 'mba', col: 3, row: 0, k: 'risk', t: 'Meningitis bacteriana', s: 'La bacteria consume glucosa' },
        { id: 'mvi', col: 3, row: 2, k: 'effect', t: 'Meningitis viral', s: 'Aséptica' },
      ],
      edges: [
        { from: 'pl', to: 'glu' },
        { from: 'glu', to: 'bac', label: 'baja' },
        { from: 'glu', to: 'vir', label: 'normal' },
        { from: 'bac', to: 'mba' },
        { from: 'vir', to: 'mvi' },
      ],
      steps: [
        { show: ['pl'], note: 'La punción orienta la etiología',
          say: 'Ahora, lo segundo que el examen siempre pregunta: cómo leer el líquido cefalorraquídeo. La punción no solo confirma la meningitis, también te orienta a la causa.' },
        { show: ['glu'], note: 'La glucosa es el dato que más discrimina',
          say: 'Y el dato que más discrimina es la glucosa, comparada con la glicemia del mismo momento. Lo normal es que la glucosa del líquido sea más del sesenta por ciento de la sanguínea.' },
        { show: ['bac', 'mba'], note: 'Bacteriana: consume glucosa',
          say: 'En la meningitis bacteriana, la bacteria y los neutrófilos consumen glucosa, así que la razón cae bajo cero coma cuatro. Se acompaña de pleocitosis con más del ochenta por ciento de polimorfonucleares y proteínas muy elevadas, sobre cien.' },
        { show: ['vir', 'mvi'], note: 'Viral: la glucosa se respeta',
          say: 'En la meningitis viral, en cambio, la glucosa es normal. Hay predominio de mononucleares, y las proteínas suben solo levemente. Si te quedas con un solo dato: glucosa baja es bacteria; glucosa normal es virus.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Meningococcemia',
      title: 'Meningococcemia: no se espera la punción',
      cards: [
        { title: 'Cómo se presenta', tag: 'Urgencia', kind: 'alert', items: [
          { t: 'Petequias que se vuelven púrpura', d: 'Fiebre alta brusca, hipotensión, CID',
            say: 'La meningococcemia es la sepsis por Neisseria meningitidis, con o sin meningitis. Fiebre alta de inicio brusco, mialgias y petequias que en horas se convierten en equimosis y púrpura fulminante; mira esta púrpura extensa que no blanquea. Hay hipotensión y coagulación intravascular.',
            photo: { src: 'biblioteca/07_infectologia/infecto-02/01_purpura-meningococica__cto-infecto_p38.jpg', label: 'Púrpura meningocócica', at: 'mira esta púrpura extensa', credit: 'Manual CTO Infecciosas 14.ª ed., p. 38' } },
          { t: 'Waterhouse-Friderichsen', d: 'Hemorragia suprarrenal bilateral y shock',
            say: 'Si además hay hemorragia suprarrenal bilateral, es el síndrome de Waterhouse-Friderichsen: shock refractario por insuficiencia suprarrenal aguda.' },
        ] },
        { title: 'Conducta inmediata', tag: 'Sin esperar la PL', kind: 'pharma', items: [
          { t: 'Hemocultivos y ceftriaxona 2 g EV', d: 'Volumen, UCI, corticoide si shock refractario',
            say: 'Ante la sospecha no se espera la punción lumbar: hemocultivos, ceftriaxona dos gramos endovenosa de inmediato, volumen, y UCI. Corticoide si el shock es refractario.' },
          { t: 'Gotitas, notificación y profilaxis', d: 'Aislamiento hasta 24 h de tratamiento',
            say: 'Se aísla por gotitas hasta las veinticuatro horas de tratamiento, se notifica de inmediato y se da quimioprofilaxis a los contactos íntimos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Punción lumbar',
      title: 'Punción lumbar: técnica y cultivo',
      cards: [
        { title: 'Antes de pinchar', tag: 'Contraindicaciones', kind: 'alert', items: [
          { t: 'Descartar efecto de masa', d: 'Plaquetas bajo 50.000 o INR sobre 1,5',
            say: 'Antes de la punción lumbar descartas efecto de masa, infección en la piel del sitio y coagulopatía: plaquetas bajo cincuenta mil o INR sobre uno coma cinco.' },
        ] },
        { title: 'Técnica', tag: 'Línea de Tuffier', kind: 'key', items: [
          { t: 'L3–L4 en decúbito lateral', d: 'Línea que une las crestas ilíacas',
            say: 'Paciente de lado en posición fetal. El espacio entre ele tres y ele cuatro se ubica con la línea que une ambas crestas ilíacas, la línea de Tuffier.' },
          { t: 'Presión de apertura y 4 tubos', d: 'Normal 10–20 cmH₂O · glicemia simultánea',
            say: 'Con asepsia y anestesia local, entras con el bisel paralelo a las fibras de la duramadre. Mides la presión de apertura, normal de diez a veinte, y recoges cuatro tubos, más una glicemia simultánea.' },
          { t: 'Cefalea postpunción', d: 'Reposo, hidratación; parche hemático',
            say: 'La complicación más frecuente es la cefalea postpunción. Se trata con reposo, hidratación y cafeína; si persiste, parche hemático.' },
        ] },
        { title: 'Cultivo del LCR', tag: 'No refrigerar', kind: 'criteria', items: [
          { t: 'Procesar de inmediato, a temperatura ambiente', d: 'Meningococo y Haemophilus mueren con el frío',
            say: 'El líquido se procesa de inmediato y a temperatura ambiente. No se refrigera, porque el meningococo y el Haemophilus son lábiles al frío.' },
          { t: 'Agar sangre y chocolate', d: 'Gram directo orienta en minutos',
            say: 'Se siembra en agar sangre y agar chocolate. El Gram directo orienta en minutos; mira este Gram del líquido, con neutrófilos y cocos entre ellos. Diplococos grampositivos lanceolados son neumococo; diplococos gramnegativos, meningococo.',
            photo: { src: 'biblioteca/07_infectologia/infecto-02/03_gram-lcr-diplococos__commons.jpg', label: 'Gram del LCR', at: 'mira este Gram', credit: 'Wikimedia Commons, CC BY-SA 4.0' } },
          { t: 'Tinta china', d: 'Levaduras encapsuladas: criptococo',
            say: 'En un paciente inmunodeprimido, otra tinción útil es la tinta china. Mira estas levaduras con una cápsula clara alrededor: es el criptococo.',
            photo: { src: 'biblioteca/07_infectologia/infecto-02/02_tinta-china-criptococo__cto-infecto_p142.jpg', label: 'Criptococo con tinta china', at: 'Mira estas levaduras', credit: 'Manual CTO Infecciosas 14.ª ed., p. 142' } },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'El LCR separa bacteria de virus',
      images: [
        { src: 'animaciones/infecto-02/A1_lcr_bacteria_virus.mp4', label: 'Meningitis', credit: 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'La glucosa desempata',
          say: 'El neumococo y el meningococo inflaman las meninges. En el líquido, la bacteriana tiene polimorfonucleares, glucosa bajo cero coma cuatro de la sanguínea, y proteínas sobre cien. La viral tiene mononucleares y glucosa normal. Y mononucleares con glucosa muy baja, bajo cero coma tres, hacen pensar en tuberculosis.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un solo árbol de decisión, tal como lo vas a razonar en la urgencia.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'El citoquímico del LCR',
      head: ['Parámetro', 'Bacteriana aguda', 'Viral (aséptica)', 'Tuberculosa o fúngica'],
      rows: [
        { cells: ['Presión de apertura (normal 10–20 cm H₂O)', 'Elevada, > 25', 'Normal o leve aumento', 'Muy elevada, > 30'],
          say: 'Repasemos el citoquímico completo, porque cada casilla puede ser una pregunta. La presión de apertura normal es de diez a veinte centímetros de agua. En la bacteriana sube sobre veinticinco, en la viral es normal o sube poco, y en la tuberculosa o fúngica sube mucho, sobre treinta.' },
        { cells: ['Leucocitos (normal < 5/mm³)', '1.000–10.000 o más', '50–500', '100–500'],
          say: 'Los leucocitos: normal, menos de cinco. La bacteriana tiene muchísimos, de mil a diez mil o más. La viral y la tuberculosa tienen una cantidad moderada, de decenas a cientos.' },
        { cells: ['Predominio celular', 'Polimorfonucleares > 80 %', 'Mononucleares', 'Mononucleares'],
          say: 'El tipo de célula: polimorfonucleares en la bacteriana; mononucleares en la viral y también en la tuberculosa. Ojo con esto, porque el predominio mononuclear solo no basta para decir virus.' },
        { cells: ['Glucosa LCR/suero (normal > 0,6)', 'Baja, < 0,4', 'Normal, > 0,6', 'Muy baja, < 0,3'],
          say: 'Y ahí entra la glucosa, que desempata. La viral la respeta; la bacteriana la baja bajo cero coma cuatro; y la tuberculosa o fúngica la baja todavía más, bajo cero coma tres. Mononucleares con glucosa muy baja no es virus: piensa en tuberculosis.' },
        { cells: ['Proteínas (normal < 45 mg/dL)', 'Muy elevadas, 100–500', 'Leve aumento, 50–100', 'Muy elevadas, 100–500 o más'],
          say: 'Las proteínas: normal, menos de cuarenta y cinco. Muy elevadas en la bacteriana y en la tuberculosa, y apenas aumentadas en la viral.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Mujer de 54 años con 24 horas de cefalea holocránea, fiebre de 39,2 °C, fotofobia y vómitos. Glasgow 14, sin focalidad, fondo de ojo normal, rigidez de nuca y Brudzinski (+). PL inmediata: LCR turbio, presión 32 cm H₂O, 4.200 leucocitos/mm³ (92 % PMN), glucosa 18 mg/dL (glicemia 110 mg/dL), proteínas 280 mg/dL.',
      question: '¿Cuál es el tratamiento empírico más adecuado?',
      options: [
        { letter: 'A', text: 'Ceftriaxona + vancomicina EV' },
        { letter: 'B', text: 'Dexametasona + ceftriaxona + vancomicina + ampicilina EV' },
        { letter: 'C', text: 'Aciclovir EV' },
        { letter: 'D', text: 'Ceftriaxona EV en monoterapia' },
        { letter: 'E', text: 'Esperar el cultivo del LCR para iniciar antibióticos' },
      ],
      correct: 'B',
      explanation: 'Citoquímico bacteriano típico (PMN > 80 %, razón de glucosa < 0,4, proteínas muy altas). Por ser mayor de 50 años se agrega ampicilina para cubrir Listeria, junto con dexametasona precoz y ceftriaxona + vancomicina.',
      say: {
        stem: 'Vamos con un caso. Mujer de cincuenta y cuatro años con un día de cefalea, fiebre de treinta y nueve, fotofobia y vómitos. Tiene Glasgow catorce, sin focalidad, fondo de ojo normal y signos meníngeos. Se punciona de inmediato: líquido turbio, presión alta, cuatro mil doscientos leucocitos con noventa y dos por ciento de polimorfonucleares, glucosa de dieciocho con una glicemia de ciento diez, y proteínas de doscientos ochenta.',
        question: '¿Cuál es el tratamiento empírico más adecuado?',
        options: 'Las opciones son: ceftriaxona con vancomicina; dexametasona con ceftriaxona, vancomicina y ampicilina; aciclovir; ceftriaxona sola; o esperar el cultivo. Piénsalo.',
        answer: 'La respuesta es la B. El líquido es bacteriano sin duda: neutrófilos y una glucosa que no llega ni a la quinta parte de la glicemia. Y el detalle es la edad: tiene cincuenta y cuatro años, así que hay que cubrir Listeria con ampicilina. La A es el distractor tentador, porque es el esquema correcto para una persona de treinta, pero aquí le falta la ampicilina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 37',
      stem: 'Mujer de 23 años, con cuadro de 24 horas de evolución de compromiso del estado general, fiebre y soñolencia progresiva. Al examen físico destaca con temperatura de 38,5ºC, petequias y equimosis en extremidades, rigidez de nuca sin focalización neurológica.',
      question: 'El diagnóstico más probable es:',
      options: [
        { letter: 'A', text: 'Meningitis tuberculosa' },
        { letter: 'B', text: 'Meningitis meningococica' },
        { letter: 'C', text: 'Meningitis neumocócica' },
        { letter: 'D', text: 'Meningitis por listeria' },
        { letter: 'E', text: 'Meningitis herpética' },
      ],
      correct: 'B',
      explanation: 'Cuadro de meningitis bacteriana aguda en una joven. Las petequias y equimosis orientan a meningococcemia: Neisseria meningitidis.',
      say: {
        stem: 'Ahora las preguntas reales. La primera es del EUNACOM de julio de dos mil trece. Mujer de veintitrés años con un día de compromiso del estado general, fiebre y somnolencia progresiva. Al examen tiene treinta y ocho y medio de temperatura, petequias y equimosis en las extremidades, y rigidez de nuca sin focalidad.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: meningitis tuberculosa, meningocócica, neumocócica, por Listeria, o herpética. Piénsalo.',
        answer: 'Es la B, meningitis meningocócica. El cuadro de un día con fiebre y rigidez de nuca es una meningitis bacteriana aguda, y lo que define el agente es la piel: las petequias y equimosis son la meningococcemia. El neumococo es el distractor, porque es el agente más frecuente, pero no da ese compromiso cutáneo. Esta pregunta se ha repetido casi igual, preguntando directamente el agente: Neisseria meningitidis.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2017 · Pregunta 81',
      stem: 'Un paciente de 65 años, consulta por fiebre y cefalea de 3 días de evolución, a lo que luego se agrega desorientación. Al examen físico se aprecia confuso, con temperatura 38,5 grados Celsius, FC: 95x’ y PA: 110/70 mmHg. En su examen neurológico se aprecia rigidez de nuca, por lo que realiza punción lumbar, que da salida a un líquido cefalorraquídeo con 610 células por mm3, con 90% de polimorfonucleares, glucosa: 26 mg/dl y proteínas 123 mg/dl. Además, la tinción de Gram muestra visualización de diplococos gramnegativos.',
      question: '¿Cuál es el tratamiento de elección?',
      options: [
        { letter: 'A', text: 'Ceftriaxona endovenosa' },
        { letter: 'B', text: 'Cloxacilina endovenosa' },
        { letter: 'C', text: 'Vancomicina endovenosa' },
        { letter: 'D', text: 'Imipenem endovenoso' },
        { letter: 'E', text: 'Ciprofloxacino oral' },
      ],
      correct: 'A',
      explanation: 'LCR bacteriano con diplococos gramnegativos en el Gram: meningococo. Se trata con ceftriaxona endovenosa. El Gram ya identificó el agente, por lo que no se trata de un esquema empírico.',
      say: {
        stem: 'La siguiente es del EUNACOM de julio de dos mil diecisiete. Paciente de sesenta y cinco años con tres días de fiebre y cefalea, al que se agrega desorientación. Tiene rigidez de nuca, y la punción muestra seiscientas diez células con noventa por ciento de polimorfonucleares, glucosa de veintiséis y proteínas de ciento veintitrés. Y el Gram muestra diplococos gramnegativos.',
        question: '¿Cuál es el tratamiento de elección?',
        options: 'Las opciones son: ceftriaxona, cloxacilina, vancomicina, imipenem, o ciprofloxacino oral. Piénsalo.',
        answer: 'Es la A, ceftriaxona. Diplococos gramnegativos en el líquido son el meningococo, y la ceftriaxona lo cubre. Quizás te preguntes por la ampicilina, si tiene sesenta y cinco años. La diferencia es que aquí el Gram ya identificó el agente: la ampicilina se agrega en el esquema empírico, cuando todavía no sabes qué bacteria es. La vancomicina es el distractor: apunta al neumococo resistente, que es un coco grampositivo.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2017 · Pregunta 61',
      stem: 'Un paciente consulta por 5 días de cefalea holocránea intensa, asociada a fiebre hasta 38 grados. En su examen físico se aprecia rigidez de nuca y signo de Brudzinsky esbozados, por lo que se realiza punción lumbar, que da salida a un líquido con 60 células por mm3, 86% mononucleares, glucorraquia: 0,67 y proteínas de 66 mg/dl.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Meningitis bacterial' },
        { letter: 'B', text: 'Encefalitis herpética' },
        { letter: 'C', text: 'Meningitis viral' },
        { letter: 'D', text: 'Tuberculosis meníngea' },
        { letter: 'E', text: 'Infección por Listeria monocytogenes' },
      ],
      correct: 'C',
      explanation: 'Pleocitosis moderada mononuclear, razón de glucosa normal (0,67) y proteínas levemente elevadas: meningitis viral. No hay compromiso de funciones cerebrales que sugiera encefalitis herpética.',
      say: {
        stem: 'Ahora una del EUNACOM de diciembre de dos mil diecisiete. Paciente con cinco días de cefalea intensa y fiebre de hasta treinta y ocho, con rigidez de nuca y Brudzinski esbozados. La punción muestra sesenta células con ochenta y seis por ciento de mononucleares, una razón de glucosa de cero coma sesenta y siete, y proteínas de sesenta y seis.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las opciones son: meningitis bacteriana, encefalitis herpética, meningitis viral, tuberculosis meníngea, o Listeria. Piénsalo.',
        answer: 'Es la C, meningitis viral. Aplica lo que vimos: mononucleares, glucosa normal, sobre cero coma seis, y proteínas apenas elevadas. La tuberculosis es el distractor, porque también da mononucleares, pero baja mucho la glucosa. Y la encefalitis herpética necesita compromiso del cerebro, como conducta alterada o convulsiones, que este paciente no tiene. Eso es justamente lo que vemos en la próxima clase.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 80',
      stem: 'Escolar de 10 años con fiebre alta, rigidez de nuca, fotofobia y petequias en piel. Sospecha de meningitis bacteriana.',
      question: '¿Cuál es el esquema antibiótico empírico de elección?',
      options: [
        { letter: 'A', text: 'Ceftriaxona + vancomicina EV' },
        { letter: 'B', text: 'Ciprofloxacino EV' },
        { letter: 'C', text: 'Doxiciclina oral' },
        { letter: 'D', text: 'Azitromicina oral' },
        { letter: 'E', text: 'Amoxicilina oral' },
      ],
      correct: 'A',
      explanation: 'Mayor de 3 meses y menor de 50 años: los agentes son neumococo y meningococo. Esquema empírico: ceftriaxona + vancomicina EV, con dexametasona antes o junto al antibiótico.',
      say: {
        stem: 'Y la última, del EUNACOM de julio de dos mil veinticinco, para mostrarte que el tema sigue vigente. Escolar de diez años con fiebre alta, rigidez de nuca, fotofobia y petequias. Se sospecha una meningitis bacteriana.',
        question: '¿Cuál es el esquema antibiótico empírico de elección?',
        options: 'Las opciones son: ceftriaxona con vancomicina endovenosa, ciprofloxacino, doxiciclina oral, azitromicina oral, o amoxicilina oral. Piénsalo.',
        answer: 'Es la A, ceftriaxona más vancomicina. Tiene diez años, está dentro del rango de tres meses a cincuenta años, así que no necesita ampicilina. Cualquier alternativa oral queda fuera de inmediato: una meningitis bacteriana se trata siempre por vía endovenosa y hospitalizada.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.04.4.006 · Estudio citoquímico de LCR",
      "stem": "Hombre de 30 años con 5 días de cefalea, fiebre de 38 °C y rigidez de nuca, sin compromiso de conciencia ni focalidad. LCR: claro, 180 células/mm³ con 90 % de linfocitos, proteínas 0,7 g/L, glucosa 60 mg/dL con glicemia de 100 mg/dL, y Gram sin bacterias.",
      "question": "¿Cuál es el agente etiológico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Enterovirus"
        },
        {
          "letter": "B",
          "text": "Streptococcus pneumoniae"
        },
        {
          "letter": "C",
          "text": "Mycobacterium tuberculosis"
        },
        {
          "letter": "D",
          "text": "Listeria monocytogenes"
        },
        {
          "letter": "E",
          "text": "Neisseria meningitidis"
        }
      ],
      "correct": "A",
      "explanation": "LCR claro con pleocitosis linfocitaria moderada, proteínas levemente elevadas y glucosa normal (índice LCR/plasma 0,6) es un patrón de meningitis viral, y el agente más frecuente es enterovirus. La bacteriana da neutrófilos y glucosa baja; la tuberculosa, linfocitos con glucosa muy baja y proteínas muy altas.",
      "say": {
        "stem": "Vamos con una pregunta de práctica. Hombre de treinta años con cinco días de cefalea, fiebre y rigidez de nuca, lúcido y sin focalidad. El líquido es claro, con ciento ochenta células, casi todas linfocitos, proteínas apenas elevadas y glucosa normal, y el Gram no muestra bacterias.",
        "question": "¿Cuál es el agente etiológico más probable?",
        "options": "Las opciones: enterovirus, neumococo, Mycobacterium tuberculosis, Listeria o meningococo. Piénsalo.",
        "answer": "Es la A. Linfocitos con glucosa normal y proteínas casi normales es el patrón viral, y el virus más frecuente es el enterovirus. La tuberculosis es el distractor: también da linfocitos, pero con la glucosa muy baja y las proteínas muy altas."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.04.5.002 · Punción lumbar",
      "stem": "Mujer de 70 años con fiebre de 39 °C, cefalea y rigidez de nuca, que además presenta una crisis convulsiva y hemiparesia derecha. Glasgow 12.",
      "question": "Respecto de la punción lumbar, ¿cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Punción lumbar inmediata y antibióticos según el Gram"
        },
        {
          "letter": "B",
          "text": "Hemocultivos, dexametasona y antibióticos empíricos, y luego TAC de cerebro antes de la punción lumbar"
        },
        {
          "letter": "C",
          "text": "TAC de cerebro y esperar su resultado para iniciar antibióticos"
        },
        {
          "letter": "D",
          "text": "Contraindicar definitivamente la punción lumbar"
        },
        {
          "letter": "E",
          "text": "Punción lumbar con la paciente sentada, sin imágenes previas"
        }
      ],
      "correct": "B",
      "explanation": "Focalidad neurológica, convulsiones, compromiso de conciencia, inmunosupresión o papiledema obligan a TAC antes de la punción por riesgo de herniación. Pero el antibiótico no se retrasa: hemocultivos, dexametasona y antibióticos empíricos primero; luego TAC y, si no hay efecto de masa, punción lumbar.",
      "say": {
        "stem": "Vamos con una pregunta de práctica. Mujer de setenta años con fiebre, cefalea y rigidez de nuca, que además convulsionó y tiene una hemiparesia derecha. Su Glasgow es doce.",
        "question": "Respecto de la punción lumbar, ¿cuál es la conducta más adecuada?",
        "options": "Las opciones: punción inmediata, hemocultivos con dexametasona y antibióticos y luego tomografía antes de puncionar, tomografía y esperar para dar antibióticos, no puncionar nunca, o puncionar sentada sin imágenes. Piénsalo.",
        "answer": "Es la B. La focalidad y la convulsión obligan a una tomografía antes de puncionar, por riesgo de herniación, pero el antibiótico va primero. La C es la trampa: esperar la tomografía para dar el antibiótico retrasa el tratamiento y aumenta la mortalidad."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2025 · Pregunta 80",
      "stem": "Escolar de 10 años con fiebre alta, rigidez de nuca, fotofobia y petequias en la piel. Se sospecha meningitis bacteriana.",
      "question": "¿Cuál es el esquema antibiótico empírico de elección?",
      "options": [
        {
          "letter": "A",
          "text": "Ceftriaxona + vancomicina EV"
        },
        {
          "letter": "B",
          "text": "Ciprofloxacino EV"
        },
        {
          "letter": "C",
          "text": "Doxiciclina oral"
        },
        {
          "letter": "D",
          "text": "Azitromicina oral"
        },
        {
          "letter": "E",
          "text": "Amoxicilina oral"
        }
      ],
      "correct": "A",
      "explanation": "Sobre los 3 meses, los agentes de meningitis bacteriana son S. pneumoniae y N. meningitidis. El esquema empírico es cefalosporina de tercera generación (ceftriaxona o cefotaxima) más vancomicina por la posibilidad de neumococo resistente, idealmente con dexametasona antes o junto con la primera dosis. Las petequias orientan a meningococo, cubierto por la ceftriaxona.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil veinticinco. Un escolar de diez años tiene fiebre alta, rigidez de nuca, fotofobia y petequias, con sospecha de meningitis bacteriana.",
        "question": "¿Cuál es el esquema antibiótico empírico de elección?",
        "options": "Las opciones: ceftriaxona más vancomicina, ciprofloxacino, doxiciclina, azitromicina o amoxicilina. Piénsalo.",
        "answer": "Es la A. Sobre los tres meses la meningitis bacteriana se trata empíricamente con ceftriaxona más vancomicina, por el neumococo resistente. El ciprofloxacino tienta porque se usa en meningococo, pero solo como profilaxis de contactos, no como tratamiento."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.2.016 · Meningococcemia",
      "stem": "Una niña de 4 años presenta fiebre de 39,5 °C de 8 horas de evolución, decaimiento y lesiones purpúricas que no blanquean a la presión, que se extienden rápidamente en tronco y extremidades. Al examen tiene FC 160/min, llene capilar de 4 segundos y extremidades frías.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Realizar punción lumbar antes de iniciar antibióticos"
        },
        {
          "letter": "B",
          "text": "Administrar ceftriaxona endovenosa de inmediato y reanimar con fluidos"
        },
        {
          "letter": "C",
          "text": "Esperar el resultado del hemograma y la PCR"
        },
        {
          "letter": "D",
          "text": "Indicar amoxicilina oral y control en 24 horas"
        },
        {
          "letter": "E",
          "text": "Solicitar TAC de cerebro antes de cualquier tratamiento"
        }
      ],
      "correct": "B",
      "explanation": "Fiebre con púrpura que progresa rápidamente y signos de shock es meningococcemia (enfermedad meningocócica invasora) hasta demostrar lo contrario, con alta mortalidad en horas. Se inicia ceftriaxona endovenosa (o intraósea) de inmediato, sin esperar exámenes ni punción lumbar, junto con reanimación con fluidos. Es de notificación inmediata y requiere quimioprofilaxis de contactos cercanos.",
      "say": {
        "stem": "Una niña de cuatro años tiene ocho horas de fiebre alta y púrpura que se extiende rápidamente, con taquicardia y mala perfusión.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: punción lumbar antes, ceftriaxona endovenosa inmediata con fluidos, esperar exámenes, amoxicilina oral o TAC antes de tratar. Piénsalo.",
        "answer": "Es la B. Es una meningococcemia con shock, y la ceftriaxona endovenosa inmediata con reanimación salva vidas. La punción lumbar tienta para confirmar, pero en un niño inestable retrasa el antibiótico y no debe hacerse."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.04.5.003 · Sembrar muestras para cultivo",
      "stem": "Se realiza una punción lumbar a las 3 de la madrugada a un paciente de 25 años con sospecha de meningitis bacteriana. El laboratorio de microbiología procesará la muestra en 2 horas.",
      "question": "¿Cuál es el manejo más adecuado de la muestra de LCR para cultivo?",
      "options": [
        {
          "letter": "A",
          "text": "Mantenerla a temperatura ambiente (o en estufa a 35-37 °C) y enviarla lo antes posible"
        },
        {
          "letter": "B",
          "text": "Refrigerarla a 4 °C hasta su procesamiento"
        },
        {
          "letter": "C",
          "text": "Congelarla"
        },
        {
          "letter": "D",
          "text": "Agregarle suero fisiológico para conservarla"
        },
        {
          "letter": "E",
          "text": "Sembrarla al día siguiente"
        }
      ],
      "correct": "A",
      "explanation": "El LCR para cultivo no se refrigera, porque N. meningitidis y H. influenzae son lábiles al frío. Se envía de inmediato a temperatura ambiente o se mantiene en estufa a 35-37 °C. En cambio, la orina para urocultivo sí se refrigera si no se siembra dentro de 2 horas, para evitar la multiplicación bacteriana.",
      "say": {
        "stem": "A un joven de veinticinco años con sospecha de meningitis bacteriana se le hace una punción lumbar de madrugada, y el laboratorio procesará la muestra en dos horas.",
        "question": "¿Cómo se maneja correctamente el líquido cefalorraquídeo para cultivo?",
        "options": "Las opciones: mantenerlo a temperatura ambiente o en estufa y enviarlo pronto, refrigerarlo, congelarlo, diluirlo con suero o sembrarlo al día siguiente. Piénsalo.",
        "answer": "Es la A. El meningococo y el Haemophilus son sensibles al frío, así que el líquido cefalorraquídeo no se refrigera. Refrigerar tienta porque así se hace con la orina, pero aquí mata a los gérmenes buscados."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.08.5.006 · Punción lumbar",
      "stem": "Hombre de 45 años con fiebre, cefalea y rigidez de nuca de 12 horas. Al examen presenta paresia braquiocrural izquierda y papiledema. Glasgow 14.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Punción lumbar inmediata y luego antibióticos según el Gram"
        },
        {
          "letter": "B",
          "text": "Hemocultivos, dexametasona y antibióticos empíricos inmediatos, y luego TAC de cerebro antes de la punción lumbar"
        },
        {
          "letter": "C",
          "text": "TAC de cerebro y esperar el resultado para iniciar antibióticos"
        },
        {
          "letter": "D",
          "text": "Resonancia magnética y punción lumbar al día siguiente"
        },
        {
          "letter": "E",
          "text": "Punción lumbar sin TAC porque el Glasgow es mayor de 13"
        }
      ],
      "correct": "B",
      "explanation": "Ante déficit focal, papiledema, convulsiones, inmunosupresión o compromiso de conciencia se hace TAC antes de la punción lumbar por riesgo de herniación. Pero los antibióticos y la dexametasona no deben retrasarse: se toman hemocultivos y se inicia tratamiento empírico antes del TAC, porque retrasar el antibiótico aumenta la mortalidad.",
      "say": {
        "stem": "Hombre de cuarenta y cinco años con fiebre, rigidez de nuca, paresia izquierda y papiledema.",
        "question": "¿Qué haces?",
        "options": "Las opciones: punción lumbar inmediata, hemocultivos con dexametasona y antibióticos y luego TAC antes de la punción, TAC y esperar para el antibiótico, resonancia y punción al día siguiente, o punción sin TAC. Piénsalo.",
        "answer": "Es la B. Hemocultivos, dexametasona y antibióticos de inmediato, y luego TAC antes de puncionar por el déficit focal. Esperar la TAC para dar antibióticos es el error más peligroso."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.10.2.016 · Síndromes meníngeos con meningitis purulenta o bacteriana",
      "stem": "Hombre de 68 años, diabético, presenta fiebre de 39 °C, cefalea intensa, rigidez de nuca y somnolencia de 12 horas, sin déficit focal. Punción lumbar: líquido turbio, 2.800 leucocitos/mm3 con 90% polimorfonucleares, proteínas 210 mg/dL y glucosa 15 mg/dL (glicemia 160 mg/dL).",
      "question": "¿Cuál es el tratamiento empírico más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Ceftriaxona sola"
        },
        {
          "letter": "B",
          "text": "Penicilina sódica sola"
        },
        {
          "letter": "C",
          "text": "Aciclovir endovenoso"
        },
        {
          "letter": "D",
          "text": "Ceftriaxona más ampicilina, junto con dexametasona"
        },
        {
          "letter": "E",
          "text": "Ciprofloxacino oral"
        }
      ],
      "correct": "D",
      "explanation": "Un LCR con pleocitosis neutrofílica, proteínas altas y glucosa muy baja confirma una meningitis bacteriana. En mayores de 50 años, embarazadas o inmunosuprimidos se agrega ampicilina a la ceftriaxona para cubrir Listeria, junto con dexametasona antes o con la primera dosis; vancomicina se suma según la resistencia local del neumococo. El aciclovir corresponde a encefalitis herpética.",
      "say": {
        "stem": "Hombre de sesenta y ocho años, diabético, con meningitis bacteriana: líquido turbio, muchos neutrófilos y glucosa muy baja.",
        "question": "¿Qué tratamiento empírico indicas?",
        "options": "Las opciones: solo ceftriaxona, solo penicilina, aciclovir, ceftriaxona con ampicilina y dexametasona o ciprofloxacino oral. Piénsalo.",
        "answer": "Es la D. Ceftriaxona más ampicilina y dexametasona, porque sobre los cincuenta años hay que cubrir Listeria. La ceftriaxona sola es la trampa, porque no cubre Listeria."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Antes de puncionar', tag: 'Banderas rojas', kind: 'alert', items: [
          { t: 'Focalidad, convulsión, Glasgow < 10', d: 'Papiledema o inmunodepresión: TAC primero',
            say: 'Cerremos con las reglas de oro. Focalidad, convulsión reciente, Glasgow bajo diez, papiledema o inmunodepresión: TAC antes de puncionar.' },
          { t: 'Nunca esperar la imagen para tratar', d: 'Hemocultivos, dexametasona y ATB primero',
            say: 'Pero nunca esperas la imagen para tratar. Primero hemocultivos, dexametasona y antibióticos; después, la TAC.' },
        ] },
        { title: 'Tratamiento', tag: 'Empírico', kind: 'pharma', items: [
          { t: 'Ceftriaxona + vancomicina', d: 'Dexametasona antes o junto al ATB',
            say: 'El esquema es ceftriaxona más vancomicina, con dexametasona antes o junto con el antibiótico.' },
          { t: 'Mayor de 50, embarazo, inmunodepresión', d: '+ Ampicilina por Listeria',
            say: 'Y en mayores de cincuenta, embarazadas e inmunodeprimidos, se agrega ampicilina por la Listeria.' },
        ] },
        { title: 'LCR', tag: 'La glucosa decide', kind: 'key', items: [
          { t: 'PMN + glucosa < 0,4', d: 'Bacteriana',
            say: 'En el líquido: polimorfonucleares con glucosa baja es bacteria.' },
          { t: 'Mononucleares + glucosa normal', d: 'Viral · si la glucosa es muy baja, TBC',
            say: 'Mononucleares con glucosa normal es virus; y si la glucosa está muy baja, piensa en tuberculosis. Si te llevas una sola idea de hoy: el antibiótico nunca espera a la TAC, y en el líquido, la glucosa separa bacteria de virus. La próxima clase vemos qué pasa cuando el virus no se queda en las meninges y entra al cerebro. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Meningitis aguda: TAC, tratamiento y LCR',
    root: N('start', 'Fiebre, cefalea y rigidez de nuca', 'Sospecha de meningitis',
      'Paciente con fiebre, cefalea y rigidez de nuca. Sospechas meningitis, y la primera decisión no es el antibiótico, sino si puedes puncionar de inmediato.',
      ['', N('q', '¿Hay bandera roja?', 'Focalidad · convulsión · Glasgow < 10 · papiledema · inmunodepresión',
        'Buscas las banderas rojas: focalidad, convulsión reciente, Glasgow bajo diez, papiledema o inmunodepresión severa.',
        ['SÍ', N('alert', 'Tratar primero, luego TAC', 'Hemocultivos + dexametasona + ATB',
          'Si hay alguna, tomas hemocultivos, das dexametasona y antibióticos de inmediato, y recién después vas a la TAC. La punción se hace si la imagen lo permite.')],
        ['NO', N('do', 'Punción lumbar inmediata', 'Y tratamiento empírico sin demora',
          'Si no hay ninguna, se hace la punción lumbar de inmediato y se inicia el tratamiento sin esperar resultados.',
          ['', N('q', '¿Mayor de 50, embarazada o inmunodeprimido?', 'Riesgo de Listeria',
            'Para elegir el esquema, la pregunta es si el paciente tiene riesgo de Listeria.',
            ['NO', N('ok', 'Ceftriaxona + vancomicina', 'Con dexametasona',
              'Si no lo tiene, ceftriaxona más vancomicina, con dexametasona antes o junto al antibiótico.')],
            ['SÍ', N('refer', 'Agregar ampicilina', 'Ceftriaxona + vancomicina + ampicilina',
              'Si lo tiene, al mismo esquema le agregas ampicilina, porque la Listeria no responde a cefalosporinas.')])])])]),
  },
};
