// Clase 14.11 (Otorrinolaringología) — guion docente escrito a mano (estándar Módulo 1).
// Fuente clínica: books/scripts/dataset_otorrino.cjs (orl-11). Preguntas: el banco real EUNACOM no tiene preguntas de manejo
// de epistaxis por otorrino (class_questions.cjs y --search); se usan 2 del libro como "Caso representativo".

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'orl-11',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Epistaxis anterior y posterior: la escalera de manejo, el nitrato de plata y cuándo hospitalizar',
      say: 'Bienvenido. La epistaxis es una de las urgencias de otorrino que más se preguntan, y casi siempre el examen quiere una sola cosa: que sepas en qué orden se hacen las medidas y dónde está el límite entre lo que se resuelve en el box y lo que exige hospitalizar. Hoy aprendemos la escalera completa, una regla de seguridad que no se negocia, y cómo reconocer a tiempo la epistaxis posterior.',
    },

    {
      type: 'flow',
      kicker: 'Anatomía',
      title: 'De dónde sangra la nariz',
      nodes: [
        { id: 'kie', col: 0, row: 0, k: 'cause', t: 'Plexo de Kiesselbach', s: 'Tabique anteroinferior, área de Little' },
        { id: 'ana', col: 1, row: 0, k: 'mech', t: 'Cuatro arterias se anastomosan', s: 'Labial superior, palatina mayor, esfenopalatina, etmoidal anterior' },
        { id: 'ant', col: 2, row: 0, k: 'good', t: 'Epistaxis anterior', s: 'Más de 90% · niños y jóvenes' },
        { id: 'esf', col: 0, row: 2, k: 'cause', t: 'Arteria esfenopalatina', s: 'Pared posterolateral · plexo de Woodruff' },
        { id: 'hta', col: 1, row: 2, k: 'risk', t: 'Adulto mayor, hipertenso o anticoagulado', s: 'Vasos frágiles y presión alta' },
        { id: 'pos', col: 2, row: 2, k: 'alert', t: 'Epistaxis posterior', s: '5 a 10% · profusa, pasa a la faringe' },
      ],
      edges: [
        { from: 'kie', to: 'ana' },
        { from: 'ana', to: 'ant' },
        { from: 'esf', to: 'hta' },
        { from: 'hta', to: 'pos' },
      ],
      steps: [
        { show: ['kie', 'ana'], note: 'Cuatro arterias confluyen en un punto',
          say: 'Parte por la anatomía, porque define todo el manejo. En la parte anteroinferior del tabique, justo detrás del vestíbulo, confluyen cuatro arterias: la labial superior, la palatina mayor, la esfenopalatina y la etmoidal anterior. Esa red se llama plexo de Kiesselbach o área de Little, y es un lugar muy vascularizado y muy expuesto.' },
        { show: ['ant'], note: 'Casi toda epistaxis es anterior',
          say: 'Por eso más del noventa por ciento de las epistaxis son anteriores. Es la epistaxis del niño, del adolescente y del adulto joven, habitualmente benigna, que aparece por un hurgado nasal, por resequedad del ambiente o por una rinitis alérgica. Y como el punto está adelante, lo puedes ver y lo puedes tratar.' },
        { show: ['esf', 'hta'], note: 'La posterior es otra enfermedad',
          say: 'La epistaxis posterior es otra historia. Nace de las ramas posteriores de la arteria esfenopalatina, o del plexo de Woodruff, en la pared posterolateral de la nariz. Ocurre en el adulto mayor, hipertenso, con ateroesclerosis o anticoagulado.' },
        { show: ['pos'], note: 'Profusa y hacia la faringe',
          say: 'Entre cinco y diez por ciento de los casos, pero es la que puede matar. El sangrado es profuso, difícil de controlar, y fluye hacia la orofaringe, con riesgo de shock hipovolémico y de aspiración.' },
      ],
    },

    {
      type: 'image',
      light: true,
      kicker: 'Así se ve',
      title: 'Las arterias del tabique',
      images: [
        { src: 'biblioteca/17_otorrino/orl-11/01_irrigacion-tabique-plexo-kiesselbach__bailey-love_p738.jpg', label: 'Irrigación del tabique nasal izquierdo: plexo de Kiesselbach adelante, esfenopalatina atrás', credit: 'Bailey & Love 27.ª ed., Fig. 46.36 (rótulos traducidos)' },
      ],
      steps: [
        { note: 'Adelante: el plexo de Kiesselbach',
          say: 'Mira el tabique visto de lado. Adelante y abajo, donde llega la rama labial de la facial y se juntan las demás, está el plexo de Kiesselbach. Es el punto que ves con el espéculo y el que cauterizas en la epistaxis anterior.' },
        { note: 'Atrás: la esfenopalatina',
          say: 'Ahora fíjate atrás: la arteria esfenopalatina entra por la parte posterior de la nariz. Ese sangrado no lo alcanzas con el espéculo, por eso la epistaxis posterior necesita taponamiento posterior.' },
      ],
    },

    {
      type: 'table',
      kicker: 'Gravedad',
      title: 'Leve, moderada y severa',
      head: ['Nivel', 'Cómo se ve', 'Conducta'],
      rows: [
        { cells: ['Leve', 'Signos vitales normales; cede solo', 'Compresión digital 15 minutos'],
          say: 'Primero la gravedad, porque define cuánto escalas. En la epistaxis leve los signos vitales son normales y el sangrado es anterior, unilateral y autolimitado. Basta la compresión de las alas nasales durante quince minutos, con el cuerpo inclinado hacia adelante.' },
        { cells: ['Moderada', 'Sangrado continuo; vitales estables', 'Vasoconstrictor y cauterización o Merocel'],
          say: 'En la moderada el sangrado es activo y no cede con la compresión, pero el paciente está estable. Aquí subes la escalera: vasoconstrictor tópico y luego cauterización con nitrato de plata o taponamiento con Merocel.' },
        { cells: ['Severa o posterior', 'Taquicardia, hipotensión, shock', 'ABC, dos vías, Foley posterior, hospitalizar'],
          say: 'En la severa o posterior hay taquicardia, hipotensión o shock. Primero se reanima, el ABC, con dos vías venosas, y se pone un taponamiento posterior con sonda Foley mientras se hospitaliza de urgencia. El sangrado nasal es un problema hemodinámico antes que un problema de nariz.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Epistaxis anterior',
      title: 'La escalera de cuatro peldaños',
      nodes: [
        { id: 'e1', col: 0, row: 1, k: 'start', t: 'Compresión digital', s: 'Cabeza hacia adelante, 15 minutos' },
        { id: 'e2', col: 1, row: 1, k: 'mech', t: 'Vasoconstrictor tópico', s: 'Algodón con lidocaína y adrenalina, 5 a 10 minutos' },
        { id: 'e3', col: 2, row: 1, k: 'good', t: 'Nitrato de plata', s: 'Si ves el vaso sangrante' },
        { id: 'e4', col: 3, row: 1, k: 'alert', t: 'Taponamiento anterior', s: 'Si no ubicas el vaso o falla' },
      ],
      edges: [
        { from: 'e1', to: 'e2', label: 'si persiste' },
        { from: 'e2', to: 'e3', label: 'si ves el vaso' },
        { from: 'e3', to: 'e4', label: 'si falla' },
      ],
      steps: [
        { show: ['e1'], note: 'Resuelve 70 a 80% de los casos',
          say: 'El primer peldaño es el más importante y el más olvidado: la compresión digital. Paciente sentado, tronco y cabeza ligeramente hacia adelante, nunca hacia atrás, para no tragar sangre y evitar vómitos y aspiración. Se le pide sonarse suavemente para sacar los coágulos y se pinzan las alas nasales contra el tabique, de forma firme y continua, quince minutos de reloj. Con eso se resuelve entre setenta y ochenta por ciento de los episodios.' },
        { show: ['e2'], note: 'Algodón con vasoconstrictor y anestesia',
          say: 'Si sigue sangrando, se coloca en la fosa nasal un algodón embebido en lidocaína al dos por ciento con adrenalina, o con nafazolina u oximetazolina, a presión moderada, durante cinco a diez minutos. Además de frenar el sangrado, te deja ver el punto exacto.' },
        { show: ['e3'], note: 'Cauterización puntual y concéntrica',
          say: 'Al retirar el algodón, si ves el vaso sangrante en el plexo de Kiesselbach, lo cauterizas con una barra de nitrato de plata al setenta y cinco por ciento, de forma suave y concéntrica alrededor del vaso, durante unos segundos.' },
        { show: ['e4'], note: 'Gasa vaselinada o Merocel, 48 horas',
          say: 'Si no logras ubicar el vaso, o la cauterización fracasa, pasas al taponamiento anterior: gasa orillada con vaselina o una esponja expansible de alcohol polivinílico, el Merocel, colocada en capas hacia el piso de la fosa nasal. Queda por cuarenta y ocho horas, con reposo relativo y lubricación, y el paciente se va a la casa. El orden de estos cuatro peldaños es exactamente lo que se pregunta.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad',
      title: 'Lo que nunca se hace',
      cards: [
        { title: 'Prohibiciones', tag: 'Se preguntan', kind: 'alert', items: [
          { t: 'Cabeza hacia atrás', d: 'La sangre se deglute: vómitos y aspiración',
            say: 'Hay tres errores que el examen usa de distractor. El primero: inclinar la cabeza hacia atrás. La sangre baja a la faringe, se deglute y produce vómitos y riesgo de broncoaspiración.' },
          { t: 'Cauterizar ambos lados del tabique', d: 'Necrosis isquémica y perforación septal',
            say: 'El segundo es la regla de oro: está prohibido cauterizar ambos lados del tabique en la misma sesión. El cartílago septal no tiene irrigación propia y se nutre por difusión desde el pericondrio de cada cara. Si quemas las dos caras, lo dejas sin sangre: necrosis y perforación septal permanente.' },
        ] },
        { title: 'Lo que sí', tag: 'Conducta correcta', kind: 'key', items: [
          { t: 'Cauterizar un lado y esperar', d: 'Si hay que tratar el otro, otro día',
            say: 'Si necesitas tratar el otro lado, lo dejas para otra sesión. Un lado a la vez.' },
          { t: 'Retirar tapón a las 48 horas', d: 'Reposo, lubricación y analgesia',
            say: 'Y el taponamiento anterior se retira a las cuarenta y ocho horas, con reposo relativo, lubricación y analgesia. Fíjate en que no se deja puesto por días sin control.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Epistaxis posterior',
      title: 'Cuando el tapón anterior falla',
      nodes: [
        { id: 'fa', col: 0, row: 1, k: 'q', t: 'Tapón anterior bien puesto', s: 'Sigue sangrando' },
        { id: 'si', col: 1, row: 0, k: 'alert', t: 'Sangre fresca por la faringe', s: 'Cae por la úvula' },
        { id: 'ma', col: 1, row: 2, k: 'alert', t: 'Adulto mayor con vitales alterados', s: 'Epistaxis masiva' },
        { id: 'fo', col: 2, row: 1, k: 'good', t: 'Sonda Foley y tapón anterior', s: 'Balón con 8 a 10 mL de agua' },
      ],
      edges: [
        { from: 'fa', to: 'si' },
        { from: 'fa', to: 'ma' },
        { from: 'si', to: 'fo' },
        { from: 'ma', to: 'fo' },
      ],
      steps: [
        { show: ['fa', 'si', 'ma'], note: 'Dos señales de sospecha',
          say: 'Sospechas una epistaxis posterior en dos situaciones. Una, cuando el taponamiento anterior bien hecho no detiene el sangrado, y ves un flujo constante de sangre roja fresca que cae por la pared posterior de la faringe, por detrás de la úvula. Otra, en el adulto mayor con una epistaxis masiva que compromete los signos vitales.' },
        { show: ['fo'], note: 'Foley lubricada hasta la orofaringe',
          say: 'La conducta de elección en el box es el taponamiento posterior con sonda Foley. Se introduce una sonda del número doce o catorce, lubricada, por la fosa que sangra, hasta ver la punta en la orofaringe. Se insufla el balón con ocho a diez mililitros de agua destilada o suero, nunca con aire, que se desinfla por difusión.' },
        { show: ['fo'], note: 'Se tracciona y se fija a la columela',
          say: 'Luego se tracciona suavemente hacia adelante para que el balón quede impactado en la coana, y se fija a la columela protegiendo con gasa, para evitar la necrosis del ala nasal. Siempre se complementa con un taponamiento anterior del mismo lado.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Protocolo mandatorio',
      title: 'Con tapón posterior, se hospitaliza',
      cards: [
        { title: 'Tres obligaciones', tag: 'Todo taponamiento posterior', kind: 'criteria', items: [
          { t: 'Hospitalización y monitoreo', d: 'Hipoxemia, bradiarritmia por reflejo nasovagal',
            say: 'Todo paciente con taponamiento posterior queda hospitalizado, con monitorización hemodinámica continua. El balón en la nasofaringe puede producir hipoxemia, bradiarritmias por reflejo nasovagal y aspiración.' },
          { t: 'Antibiótico profiláctico', d: 'Amoxicilina con clavulánico o cefazolina',
            say: 'Segundo, antibiótico profiláctico sistémico, amoxicilina con ácido clavulánico o cefazolina. El tapón obstruye los ostium y favorece la rinosinusitis, y puede desencadenar el síndrome de shock tóxico estafilocócico. Esto se pregunta mucho: el taponamiento posterior siempre lleva antibiótico.' },
          { t: 'Retiro a las 48-72 horas', d: 'Por otorrino; si falla, ligadura endoscópica',
            say: 'Tercero, retiro programado del tapón a las cuarenta y ocho a setenta y dos horas por el especialista. Y si fracasa, la ligadura endoscópica de la arteria esfenopalatina en pabellón.' },
        ] },
      ],
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Anterior frente a posterior',
      head: ['Parámetro', 'Anterior', 'Posterior'],
      rows: [
        { cells: ['Frecuencia', '90 a 95%', '5 a 10%, más grave'],
          say: 'Cerremos el cuerpo de la clase con la comparación que se pregunta. La anterior es la gran mayoría de las consultas. La posterior es poco frecuente, pero de alta gravedad.' },
        { cells: ['Paciente típico', 'Niño o adulto joven sano', 'Mayor de 60, hipertenso, ateroesclerosis'],
          say: 'La anterior es del niño y del adulto joven sano. La posterior, del mayor de sesenta años, hipertenso o con ateroesclerosis.' },
        { cells: ['Vaso', 'Plexo de Kiesselbach', 'Arteria esfenopalatina'],
          say: 'El origen anterior es el plexo de Kiesselbach, el posterior son las ramas de la esfenopalatina.' },
        { cells: ['Faringe', 'Poca o nula sangre', 'Flujo continuo de sangre fresca'],
          say: 'En la inspección de la faringe, la anterior casi no deja sangre atrás; en la posterior ves un flujo continuo.' },
        { cells: ['Manejo inicial', 'Compresión, nitrato de plata, tapón anterior', 'Foley posterior y tapón anterior'],
          say: 'El manejo anterior es la escalera de compresión, nitrato de plata y taponamiento anterior. El posterior, sonda Foley más taponamiento anterior.' },
        { cells: ['Destino', 'Ambulatorio; retiro a las 48 horas', 'Hospitalización obligatoria con antibiótico'],
          say: 'Y el destino: la anterior se va a la casa, con retiro del Merocel a las cuarenta y ocho horas. La posterior se hospitaliza siempre, con antibiótico.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Armemos el árbol completo: desde la compresión hasta el tapón posterior.',
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Un hombre de 71 años, hipertenso con tratamiento irregular, llega a urgencia con sangrado nasal bilateral abundante de 1 hora. Está pálido y sudoroso, con PA 190/105 mmHg y FC 105 lpm. Tras compresión digital durante 15 minutos y taponamiento anterior bilateral con Merocel, sigue cayendo sangre roja abundante por la pared posterior de la orofaringe, con tos y arcadas.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Nitrato de plata en ambos lados del tabique' },
        { letter: 'B', text: 'Cambiar el Merocel y dar de alta con control en 48 horas' },
        { letter: 'C', text: 'Taponamiento posterior con sonda Foley, tapón anterior, hospitalización y antibiótico profiláctico' },
        { letter: 'D', text: 'Pedir cabeza hacia atrás y observación en el box' },
        { letter: 'E', text: 'Solo antihipertensivos orales y observar en casa' },
      ],
      correct: 'C',
      explanation: 'Es una epistaxis posterior, probablemente de la arteria esfenopalatina en un adulto mayor hipertenso. Falló el tapón anterior y hay sangre fresca en la orofaringe. Se coloca Foley con 8 a 10 mL de agua, más tapón anterior ipsilateral; se hospitaliza con monitorización, se piden hemograma y pruebas de coagulación, se controla la presión y se da amoxicilina con clavulánico.',
      say: {
        stem: 'Veamos un caso. Hombre de setenta y un años, hipertenso con tratamiento irregular, con sangrado nasal bilateral abundante de una hora. Está pálido, sudoroso, con presión de ciento noventa sobre ciento cinco y frecuencia cardíaca de ciento cinco. Se le hizo compresión durante quince minutos y taponamiento anterior bilateral con Merocel, y sigue cayendo sangre roja abundante por la pared posterior de la faringe, con tos y arcadas.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: nitrato de plata en ambos lados del tabique; cambiar el Merocel y alta; taponamiento posterior con sonda Foley, tapón anterior, hospitalización y antibiótico; cabeza hacia atrás y observación; o solo antihipertensivos y observar en casa. Piénsalo.',
        answer: 'Es la C. Un tapón anterior que falla, con sangre fresca en la orofaringe en un adulto mayor hipertenso, es una epistaxis posterior. Se coloca la Foley con ocho a diez mililitros de agua, más un tapón anterior del mismo lado, y el paciente se hospitaliza con monitorización y antibiótico profiláctico. Cauterizar ambos lados del tabique es la trampa: produce perforación septal, y además aquí no se ve ningún vaso al que cauterizar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Un niño de 9 años consulta en urgencia por sangrado nasal derecho activo tras hurgarse la nariz. Está hemodinámicamente estable. Se realiza compresión bimanual de las alas nasales durante 15 minutos continuos con cabeza hacia adelante, pero al soltar persiste sangrado leve. Al colocar un algodón con vasoconstrictor y retirarlo bajo buena luz con espéculo nasal, se visualiza claramente un vaso sangrante superficial en la porción anteroinferior del tabique nasal derecho.',
      question: '¿Cuál es la conducta terapéutica de elección a continuación?',
      options: [
        { letter: 'A', text: 'Realizar taponamiento nasal posterior con sonda Foley de urgencia.' },
        { letter: 'B', text: 'Cauterización química del vaso sangrante con bastón de nitrato de plata.' },
        { letter: 'C', text: 'Indicar ácido tranexámico endovenoso y hospitalizar para observación.' },
        { letter: 'D', text: 'Cauterización bilateral simultánea de ambas caras del tabique nasal.' },
        { letter: 'E', text: 'Indicar al paciente mantener la cabeza inclinada hacia atrás durante las próximas 4 horas.' },
      ],
      correct: 'B',
      explanation: 'Con el vaso identificado en el plexo de Kiesselbach, tras compresión y vasoconstrictor, corresponde cauterizar con nitrato de plata, de forma suave y concéntrica. Cauterizar ambos lados causa necrosis y perforación septal; la cabeza hacia atrás induce deglución de sangre; el taponamiento posterior y la hospitalización son desproporcionados.',
      say: {
        stem: 'Esta es una pregunta representativa del banco EUNACOM. Un niño de nueve años con sangrado nasal derecho tras hurgarse la nariz. Está estable. Ya se hizo compresión de quince minutos con la cabeza hacia adelante, pero persiste un sangrado leve. Con un algodón con vasoconstrictor y buena luz, ves claramente un vaso sangrante superficial en la parte anteroinferior del tabique derecho.',
        question: '¿Cuál es la conducta de elección a continuación?',
        options: 'Las opciones: taponamiento posterior con Foley; cauterización con nitrato de plata; ácido tranexámico y hospitalizar; cauterización de ambas caras del tabique; o cabeza hacia atrás por cuatro horas. Piénsalo.',
        answer: 'Es la B. Ya subiste dos peldaños de la escalera, la compresión y el vasoconstrictor, y ahora ves el vaso: corresponde cauterizar con nitrato de plata. La D es la trampa clásica, porque cauterizar ambos lados perfora el tabique. La A y la C son desproporcionadas para un sangrado anterior puntual.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Una paciente de 75 años con hipertensión arterial presenta epistaxis masiva que no cedió tras taponamiento anterior bilateral con Merocel, con sangrado activo y abundante por la faringe posterior. Se decide realizar taponamiento nasal posterior con sonda Foley.',
      question: 'Respecto al manejo integral de esta paciente, ¿cuál de las siguientes medidas es una indicación OBLIGATORIA?',
      options: [
        { letter: 'A', text: 'Alta inmediata a domicilio con indicación de retirar la sonda Foley a las 12 horas.' },
        { letter: 'B', text: 'Hospitalización con monitorización de signos vitales e inicio de antibióticos profilácticos sistémicos.' },
        { letter: 'C', text: 'Insuflar el balón de la sonda Foley con 25 mL de aire para asegurar hemostasia máxima.' },
        { letter: 'D', text: 'Suspensión absoluta de toda hidratación parenteral y mantener presión arterial sistólica sobre 180 mmHg.' },
        { letter: 'E', text: 'Realizar cauterización a ciegas con nitrato de plata de la pared posterior de la orofaringe.' },
      ],
      correct: 'B',
      explanation: 'El taponamiento posterior exige hospitalización con monitorización, por el riesgo de hipoxia, bradiarritmias por reflejo nasovagal y aspiración, y antibiótico profiláctico sistémico (amoxicilina con clavulánico o cefazolina) para prevenir shock tóxico estafilocócico y rinosinusitis. El balón se insufla con 8 a 10 mL de agua, nunca con aire.',
      say: {
        stem: 'Otra pregunta representativa del banco EUNACOM. Paciente de setenta y cinco años, hipertensa, con epistaxis masiva que no cedió con taponamiento anterior bilateral, y sangrado activo por la faringe posterior. Se decide poner una sonda Foley como taponamiento posterior.',
        question: 'Respecto al manejo integral, ¿cuál medida es obligatoria?',
        options: 'Las opciones: alta inmediata y retiro a las doce horas; hospitalización con monitorización y antibiótico profiláctico; balón con veinticinco mililitros de aire; suspender la hidratación y mantener la presión alta; o cauterizar a ciegas la pared posterior. Piénsalo.',
        answer: 'Es la B. Todo taponamiento posterior se hospitaliza con monitorización y lleva antibiótico profiláctico, para prevenir el síndrome de shock tóxico y la rinosinusitis. La C es doblemente errada: el balón se insufla con ocho a diez mililitros de agua, nunca con aire, y veinticinco mililitros sería excesivo.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro: epistaxis',
      cards: [
        { title: 'Anterior', tag: 'Escalera', kind: 'key', items: [
          { t: 'Compresión, vasoconstrictor, nitrato de plata, tapón', d: 'En ese orden, cabeza hacia adelante',
            say: 'Cerremos con las reglas de oro. La epistaxis anterior nace en el plexo de Kiesselbach y se maneja en orden: compresión de quince minutos con la cabeza hacia adelante, vasoconstrictor, nitrato de plata si ves el vaso, y taponamiento anterior que se retira a las cuarenta y ocho horas.' },
          { t: 'Nunca cauterizar ambos lados', d: 'Riesgo de perforación septal',
            say: 'Y jamás se cauterizan ambos lados del tabique en la misma sesión.' },
        ] },
        { title: 'Posterior', tag: 'Hospitalizar', kind: 'alert', items: [
          { t: 'Mayor hipertenso, sangre en faringe', d: 'Foley con 8 a 10 mL de agua más tapón',
            say: 'La epistaxis posterior viene del adulto mayor hipertenso, con sangre fresca bajando por la faringe. Se trata con sonda Foley insuflada con agua, más taponamiento anterior.' },
          { t: 'Hospitalización y antibiótico', d: 'Previene shock tóxico estafilocócico',
            say: 'Y todo taponamiento posterior se hospitaliza y lleva antibiótico profiláctico. Si te llevas una sola idea de hoy: el sangrado anterior se escala peldaño a peldaño, y el posterior se tapona y se hospitaliza. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de manejo escalonado de la epistaxis',
    root: N('start', 'Paciente con epistaxis', '¿Hemodinámicamente estable?',
      'Un paciente con sangrado nasal. Lo primero es mirar sus signos vitales.',
      ['No: shock o sangrado masivo', N('alert', 'ABC y Foley posterior', 'Dos vías, tapón posterior y hospitalizar',
        'Si hay shock o un sangrado masivo, se reanima primero, con dos vías venosas, y se coloca un taponamiento posterior con sonda Foley más tapón anterior. Hospitalización urgente y antibiótico profiláctico.')],
      ['Sí', N('do', 'Compresión digital 15 minutos', 'Cabeza hacia adelante',
        'Si está estable, se parte con compresión digital de las alas nasales durante quince minutos, con la cabeza hacia adelante.',
        ['Cede', N('ok', 'Alta con indicaciones', 'Lubricación y evitar hurgado',
          'Si cede, se va de alta con lubricación nasal y la indicación de no hurgarse.')],
        ['Persiste', N('do', 'Vasoconstrictor y buscar el vaso', 'Algodón por 5 a 10 minutos',
          'Si persiste, un algodón con vasoconstrictor de cinco a diez minutos y se busca el vaso sangrante.',
          ['Vaso visible', N('ok', 'Nitrato de plata, un solo lado', 'Prohibido ambos lados',
            'Si ves el vaso, cauterizas con nitrato de plata, un solo lado por sesión.')],
          ['No se ve o falla', N('do', 'Taponamiento anterior 48 horas', 'Si sigue sangrando por la faringe: posterior',
            'Si no ves el vaso o la cauterización falla, taponamiento anterior por cuarenta y ocho horas. Si aun así sigue cayendo sangre por la faringe, es posterior y se tapona con Foley y se hospitaliza.')],
        )],
      )],
    ),
  },
};
