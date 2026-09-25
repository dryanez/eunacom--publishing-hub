// Clase 11.2 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-02).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-02',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Fisiopatología, Guías de Tokio 2018, signos ecográficos cardinales, colecistectomía laparoscópica precoz y colecistostomía percutánea',
      say: 'Bienvenidos a la segunda clase de cirugía general. Hoy abordamos la colecistitis aguda, la segunda causa más frecuente de abdomen agudo quirúrgico y una patología de altísima prevalencia en Chile debido a nuestras elevadas tasas de colelitiasis. Al terminar esta clase vas a dominar la diferenciación con el cólico biliar, los criterios diagnósticos y de severidad de las Guías de Tokio dos mil dieciocho, los signos ecográficos cardinales y la indicación precisa entre colecistectomía precoz y colecistostomía percutánea. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Cascada fisiopatológica',
      title: 'De la impactación litiásica a la sobreinfección bacteriana',
      nodes: [
        { id: 'imp', col: 0, row: 2, k: 'start', t: 'Impactación litiásica', s: 'Cálculo en bacinete o conducto cístico · 95% litiásica' },
        { id: 'est', col: 1, row: 1, k: 'mech', t: 'Estasis e hipertensión biliar', s: 'Distensión vesicular y dolor continuo mayor a 6 horas' },
        { id: 'qui', col: 2, row: 0, k: 'risk', t: 'Inflamación química parietal', s: 'Liberación de fosfolipasa A2 y prostaglandinas' },
        { id: 'isq', col: 2, row: 2, k: 'alert', t: 'Compromiso vascular e isquemia', s: 'Edema de pared, trombosis venosa y necrosis focal' },
        { id: 'bac', col: 3, row: 1, k: 'mech', t: 'Sobreinfección bacteriana secundaria', s: 'Enterobacterias: Escherichia coli, Klebsiella y Enterococo' },
        { id: 'com', col: 4, row: 2, k: 'trap', t: 'Complicaciones graves', s: 'Gangrena, enfisema parietal, perforación y peritonitis' },
      ],
      edges: [
        { from: 'imp', to: 'est', label: 'obstrucción mecánica' },
        { from: 'est', to: 'qui', label: 'activación enzimática' },
        { from: 'est', to: 'isq', label: 'isquemia mural' },
        { from: 'qui', to: 'bac', label: 'proliferación' },
        { from: 'isq', to: 'bac', label: 'traslocación' },
        { from: 'bac', to: 'com', label: 'progresión séptica' },
      ],
      steps: [
        {
          show: ['imp', 'est'],
          note: 'Impactación y estasis biliar',
          say: 'En más del noventa y cinco por ciento de los casos, la colecistitis aguda se desencadena por la impactación mecánica de un cálculo biliar en el cuello vesicular o en el conducto cístico. A diferencia del cólico biliar simple, donde el cálculo se desimpacta espontáneamente antes de cuatro a seis horas, en la colecistitis aguda la obstrucción persiste en el tiempo, provocando estasis de bilis y distensión progresiva de la vesícula.',
        },
        {
          show: ['qui'],
          note: 'Inflamación química aséptica inicial',
          say: 'La distensión y el contacto de la mucosa con sales biliares concentradas liberan fosfolipasa A dos y factores proinflamatorios locales. Esto genera una inflamación química aguda inicial de la pared vesicular, mediada por prostaglandinas, que explica el dolor continuo e intenso en el hipocondrio derecho que se prolonga más allá de seis horas.',
        },
        {
          show: ['isq', 'bac'],
          note: 'Isquemia parietal y colonización bacteriana',
          say: 'A medida que la presión intraluminal vesicular supera la presión capilar, se produce edema mural marcado, estasis venosa e isquemia parietal. En este tejido hipóxico proliferan secundariamente bacterias provenientes del duodeno o por vía portal. Los microorganismos más frecuentemente aislados son bacilos gramnegativos entéricos, liderados por Escherichia coli y Klebsiella pneumoniae, seguidos por Enterococcus faecalis.',
        },
        {
          show: ['com'],
          note: 'Progresión a necrosis y perforación',
          say: 'Si no se instaura tratamiento oportuno, la isquemia progresa a necrosis transmural, originando colecistitis gangrenosa. Esto puede evolucionar a perforación vesicular contenida con absceso pericolecístico, fístula colecistoentérica o perforación libre con peritonitis biliar difusa y shock séptico.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología y presentación clínica',
      title: 'Cuadro cardinal: dolor continuo, Murphy clínico y masas palpables',
      cards: [
        {
          title: 'Dolor y localización típica',
          kind: 'criteria',
          items: [
            {
              text: 'Dolor continuo en hipocondrio derecho o epigastrio mayor a seis horas de evolución.',
              say: 'La manifestación clínica fundamental es el dolor en hipocondrio derecho o epigastrio continuo, sordo y progresivo que dura más de seis horas, típicamente desencadenado tras una ingesta copiosa rica en grasas. Con frecuencia se irradia hacia la región subescapular derecha o al dorso, y se acompaña de náuseas, vómitos y fiebre mantenida.',
            },
            {
              text: 'Diferencia crucial con cólico biliar: duración mayor a seis horas y síndrome inflamatorio.',
              say: 'La regla temporal es tajante para el EUNACOM: si el dolor cede antes de seis horas y no hay fiebre ni leucocitosis, estamos ante un cólico biliar simple. Si el dolor persiste por más de seis horas asociado a fiebre y dolor exquisito al examen, el diagnóstico es colecistitis aguda.',
            },
          ],
        },
        {
          title: 'Signo de Murphy clínico y masa palpable',
          kind: 'alert',
          items: [
            {
              text: 'Signo de Murphy: detención súbita de la inspiración profunda al palpar el punto cístico.',
              say: 'El signo de Murphy clínico es el sello del examen físico. El médico coloca sus dedos bajo el reborde costal derecho a nivel de la línea medioclavicular y pide al paciente que realice una inspiración profunda. Al descender el diafragma, la vesícula inflamada choca contra la mano del examinador, produciendo un dolor punzante intolerable que detiene bruscamente la respiración.',
            },
            {
              text: 'Vesícula palpable o empastamiento en hipocondrio derecho en un tercio de los pacientes.',
              say: 'En un tercio de los casos puede palparse una masa firme y dolorosa en el hipocondrio derecho. Esta masa no siempre es solo la vesícula distendida, sino un plastrón vesicular constituido por el epiplón mayor que acude a bloquear el proceso inflamatorio agudo.',
            },
          ],
        },
        {
          title: 'Alerta clínica: Ictericia en patología biliar',
          kind: 'key',
          items: [
            {
              text: 'La colecistitis aguda simple habitualmente no produce ictericia marcada.',
              say: 'Un concepto clave evaluado repetidamente en el examen: la colecistitis aguda aislada no complicada cursa con bilirrubina normal o levemente elevada menor a dos miligramos por decilitro. La presencia de ictericia franca con bilirrubina total sobre cuatro miligramos por decilitro obliga a sospechar coledocolitiasis concomitante.',
            },
            {
              text: 'Síndrome de Mirizzi: compresión extrínseca del colédoco por un cálculo gigante en el cístico.',
              say: 'Otra causa de ictericia en colecistitis es el síndrome de Mirizzi, en el cual un cálculo de gran tamaño impactado en el bacinete o cístico comprime extrínsecamente el conducto hepático común o fistuliza hacia él, generando colestasia obstructiva sin necesidad de que el cálculo haya migrado al colédoco.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Consenso internacional',
      title: 'Guías de Tokio 2018: Criterios diagnósticos y estratificación de severidad',
      head: ['Criterio / Grado', 'Definición clínica y parámetros objetivos', 'Hallazgos clave', 'Implicancia en la conducta'],
      rows: [
        {
          cells: [
            'Criterios diagnósticos Tokio 2018',
            'A. Signos locales de inflamación · B. Signos sistémicos · C. Imágenes confirmatorias',
            'Murphy (+) o masa en HCD (A) + Fiebre o leucocitosis (B) + Ecografía (+) (C)',
            'Sospecha diagnóstica: A + B · Diagnóstico definitivo confirmado: A + B + C.',
          ],
          say: 'Las Guías de Tokio dos mil dieciocho definen el diagnóstico con tres pilares: categoría A para inflamación local como signo de Murphy o dolor en hipocondrio derecho; categoría B para signos sistémicos como fiebre, leucocitosis o proteína C reactiva elevada; y categoría C para imágenes confirmatorias. La sospecha clínica requiere un signo de A y uno de B; el diagnóstico definitivo exige confirmar con la categoría C mediante ecografía o tomografía.',
        },
        {
          cells: [
            'Grado I: Leve y Grado II: Moderada',
            'Grado I: confinada a la vesícula en paciente sano sin disfunción de órganos. Grado II: inflamación local avanzada o leucocitos > 18.000.',
            'Grado II: evolución > 72 h, masa palpable, leucocitos > 18.000 o colecistitis gangrenosa/enfisematosa',
            'Colecistectomía laparoscópica precoz dentro de las setenta y dos horas en ambos estratos.',
          ],
          say: 'En la clasificación de severidad, el Grado uno o leve corresponde a una colecistitis en un paciente sin disfunción orgánica. El Grado dos o moderada se define por alguno de cuatro factores: leucocitosis mayor a dieciocho mil por milímetro cúbico, masa dolorosa palpable en hipocondrio derecho, síntomas por más de setenta y dos horas, o complicaciones locales como gangrena, enfisema o absceso. En ambos grados, la indicación de elección es la colecistectomía laparoscópica precoz.',
        },
        {
          cells: [
            'Grado III: Severa con disfunción orgánica',
            'Compromiso y falla de al menos un órgano o sistema vital.',
            'Hipotensión que requiere vasopresores, compromiso de conciencia, oliguria o creatinina > 2.0, o plaquetas < 100.000',
            'Estabilización médica intensiva y colecistostomía percutánea si el riesgo quirúrgico es prohibitivo.',
          ],
          say: 'El Grado tres o grave se caracteriza por la disfunción de al menos un órgano vital: cardiovascular requiriendo noradrenalina, neurológica con letargo, respiratoria, renal con creatinina mayor a dos, hepática con prolongación del tiempo de protrombina o hematológica con plaquetas bajo cien mil. Estos pacientes requieren reanimación intensiva y, si el riesgo quirúrgico es prohibitivo, colecistostomía percutánea bajo anestesia local.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico por imágenes',
      title: 'Signos ecográficos cardinales en colecistitis aguda',
      cards: [
        {
          title: 'Ecografía abdominal: examen de primera línea',
          kind: 'key',
          items: [
            {
              text: 'Litiasis vesicular impactada en el cuello o conducto cístico.',
              say: 'La ecografía abdominal es el método de elección absoluto por su sensibilidad superior al noventa por ciento y bajo costo. El primer hallazgo es la visualización directa del cálculo biliar que no se moviliza con los cambios de decúbito del paciente, alojado fijamente en el bacinete.',
            },
            {
              text: 'Signo de Murphy ecográfico positivo: dolor exquisito al presionar la vesícula con el transductor.',
              say: 'El signo de Murphy ecográfico es el hallazgo con mayor especificidad diagnóstica de todos. Consiste en reproducir exactamente el dolor del paciente al ejercer presión focal directa sobre la vesícula visualizada en tiempo real con el transductor ecográfico.',
            },
          ],
        },
        {
          title: 'Signos parietales y perivesiculares',
          kind: 'criteria',
          items: [
            {
              text: 'Engrosamiento de la pared vesicular mayor o igual a cuatro milímetros.',
              say: 'El engrosamiento mural mayor o igual a cuatro milímetros, a menudo con aspecto en doble contorno o halo hipoecogénico submucoso por edema, es un criterio ecográfico fundamental. Debe interpretarse con cautela si coexiste ascitis, cirrosis hepática o insuficiencia cardíaca.',
            },
            {
              text: 'Líquido libre perivesicular y distensión vesicular mayor a ocho por cuatro centímetros.',
              say: 'La presencia de una lámina anecoica de líquido libre en el lecho vesicular y la sobredistensión con diámetro mayor a ocho centímetros longitudinal o cuatro transversal apoyan fuertemente el diagnóstico agudo.',
            },
          ],
        },
        {
          title: 'Tomografía computarizada y centelleografía HIDA',
          kind: 'alert',
          items: [
            {
              text: 'Tomografía axial computarizada: indicada ante sospecha de complicaciones graves.',
              say: 'La tomografía computarizada de abdomen se solicita si se sospecha colecistitis gangrenosa, perforación, pancreatitis aguda biliar concomitante o colecistitis enfisematosa con gas en la pared vesicular.',
            },
            {
              text: 'Centelleografía con HIDA marcado con tecnecio noventa y nueve: máxima sensibilidad.',
              say: 'La centelleografía biliar con derivados del ácido iminodiacético marcados con tecnecio noventa y nueve es el examen con mayor sensibilidad y especificidad, superior al noventa y siete por ciento. Si el radiotrazador llena el colédoco y duodeno pero no entra a la vesícula tras cuatro horas, confirma la obstrucción cística aguda.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo terapéutico',
      title: 'Toma de decisiones y momento quirúrgico en colecistitis aguda',
      say: 'Revisemos el algoritmo terapéutico para la colecistitis aguda según la severidad clínica y el riesgo quirúrgico del paciente.',
    },

    {
      type: 'points',
      kicker: 'Técnica y seguridad quirúrgica',
      title: 'Colecistectomía laparoscópica y Visión Crítica de Strasberg',
      cards: [
        {
          title: 'Momento quirúrgico ideal: Precoz dentro de 72 horas',
          kind: 'key',
          items: [
            {
              text: 'Colecistectomía laparoscópica precoz dentro de setenta y dos horas desde el inicio de los síntomas.',
              say: 'La evidencia científica y las normas clínicas recomiendan la colecistectomía laparoscópica precoz, realizada idealmente dentro de las primeras setenta y dos horas de evolución o durante la misma hospitalización. Operar precozmente reduce las complicaciones infecciosas, acorta la estancia hospitalaria total y disminuye la tasa de conversión a cirugía abierta en comparación con el manejo diferido.',
            },
            {
              text: 'Falso mito: no es necesario enfriar el cuadro con antibióticos si el paciente es operable.',
              say: 'Una creencia antigua y errónea en el examen es sugerir enfriar el cuadro durante seis a ocho semanas con antibióticos antes de operar. En pacientes candidatos a cirugía, el manejo diferido conlleva un veinte por ciento de readmisiones de urgencia por colecistitis recurrente, pancreatitis o perforación.',
            },
          ],
        },
        {
          title: 'Visión Crítica de Seguridad de Strasberg',
          kind: 'criteria',
          items: [
            {
              text: 'Tres requisitos obligatorios antes de cortar o engrapar cualquier estructura tubular.',
              say: 'Para prevenir la temida lesión iatrogénica de la vía biliar principal, el cirujano debe obtener de forma mandatoria la visión crítica de seguridad de Strasberg antes de colocar cualquier clip o tijera.',
            },
            {
              text: 'Triángulo hepatocístico despejado, tercio inferior disecado y solo dos estructuras visibles.',
              say: 'Los tres pasos son: primero, liberar el triángulo hepatocístico de toda grasa y tejido inflamatorio fibroso; segundo, disecar el tercio inferior de la vesícula separándola de la placa hepática; y tercero, confirmar de manera indubitable que únicamente dos estructuras tubulares entran a la vesícula, que son el conducto cístico y la arteria cística.',
            },
          ],
        },
        {
          title: 'Colecistostomía percutánea en paciente crítico',
          kind: 'alert',
          items: [
            {
              text: 'Indicada en Grado III con shock séptico o riesgo quirúrgico prohibitivo.',
              say: 'En pacientes con colecistitis Grado tres con falla multiorgánica o en aquellos con comorbilidades médicas extremas que contraindican la anestesia general, como un infarto miocárdico reciente o insuficiencia cardíaca descompensada, la conducta salvadora es la colecistostomía percutánea transhepática.',
            },
            {
              text: 'Descompresión percutánea bajo anestesia local más antibióticos endovenosos.',
              say: 'Bajo guía ecográfica o tomográfica y anestesia local se introduce un catéter que descomprime la bilis infectada a tensión. Una vez estabilizado el paciente y resuelta la sepsis, se puede programar una colecistectomía electiva diferida.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnósticos diferenciales y escenarios especiales',
      title: 'Trampas del EUNACOM en patología vesicular aguda',
      head: ['Patología simuladora', 'Contexto clínico típico', 'Mecanismo o hallazgo clave', 'Conducta diagnóstica o terapéutica'],
      rows: [
        {
          cells: [
            'Cólico biliar simple',
            'Mujer de mediana edad tras ingesta de grasas con dolor epigástrico o en hipocondrio derecho',
            'Dolor de menos de cuatro a seis horas de duración, sin fiebre, sin leucocitosis y sin engrosamiento parietal',
            'Analgesia con antiinflamatorios no esteroidales o antiespasmódicos y colecistectomía electiva ambulatoria.',
          ],
          say: 'El cólico biliar simple es autolimitado a menos de seis horas de duración. No presenta fiebre, ni taquicardia ni leucocitosis, y la ecografía muestra litiasis móvil sin engrosamiento de pared ni líquido perivesicular. Se trata con analgesia y colecistectomía electiva programada.',
        },
        {
          cells: [
            'Colecistitis aguda alitiásica',
            'Paciente crítico en unidad de cuidados intensivos, gran quemado, politraumatizado o en nutrición parenteral prolongada',
            'Isquemia vesicular primaria por hipoperfusión y estasis biliar sin cálculos presentes',
            'Alta mortalidad; requiere colecistectomía urgente o colecistostomía percutánea descompresiva inmediata.',
          ],
          say: 'La colecistitis alitiásica ocurre en pacientes críticos hospitalizados en UCI, grandes quemados o pacientes sépticos en nutrición parenteral total prolongada. Es causada por hipoperfusión e isquemia microvascular sin cálculos. Presenta un curso fulminante con alta tasa de necrosis y requiere colecistectomía urgente o colecistostomía percutánea.',
        },
        {
          cells: [
            'Colecistitis enfisematosa',
            'Varón adulto mayor diabético descompensado con dolor abdominal agudo severo y toxicidad sistémica',
            'Infección por anaerobios productores de gas como Clostridium perfringens con gas en pared o lumen vesicular',
            'Tomografía computarizada urgente que muestra aire parietal y colecistectomía de urgencia inmediata.',
          ],
          say: 'La colecistitis enfisematosa es una variante fulminante típica de adultos mayores diabéticos, causada por bacterias anaerobias formadoras de gas como Clostridium perfringens o Escherichia coli. La tomografía demuestra gas en la pared o en la luz vesicular. Requiere cobertura antibiótica de amplio espectro y colecistectomía urgente inmediata.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2025 · Pregunta 151',
      caseText: 'Mujer de cincuenta y cinco años con colecistitis aguda de cuarenta y ocho horas de evolución. Se encuentra estable hemodinámicamente, con fiebre de treinta y ocho grados Celsius y catorce mil leucocitos por milímetro cúbico. ¿Cuál es el manejo quirúrgico más adecuado?',
      question: '¿Cuál es el manejo quirúrgico más adecuado?',
      options: [
        { letter: 'A', text: 'Colecistectomía laparoscópica precoz dentro de las setenta y dos horas', isCorrect: true },
        { letter: 'B', text: 'Cirugía electiva diferida en seis semanas tras tratamiento antibiótico', isCorrect: false },
        { letter: 'C', text: 'Drenaje percutáneo y cirugía diferida', isCorrect: false },
        { letter: 'D', text: 'Solo antibióticos endovenosos y observación ambulatoria', isCorrect: false },
        { letter: 'E', text: 'Colecistostomía abierta de urgencia', isCorrect: false },
      ],
      correct: 'A',
      say: {
        stem: 'Revisemos esta pregunta oficial del examen de julio de dos mil veinticinco. Una paciente de cincuenta y cinco años presenta colecistitis aguda de cuarenta y ocho horas de evolución. Está hemodinámicamente estable, con fiebre de treinta y ocho grados y catorce mil leucocitos.',
        question: 'Nos consultan por el manejo quirúrgico más adecuado.',
        options: 'Las alternativas son: opción A, colecistectomía laparoscópica precoz dentro de setenta y dos horas; opción B, cirugía electiva en seis semanas; opción C, drenaje percutáneo y cirugía diferida; opción D, solo antibióticos endovenosos y observación; y opción E, colecistostomía abierta de urgencia.',
        answer: 'La respuesta correcta es la opción A. En un paciente con colecistitis aguda Grado uno o dos sin disfunción de órganos y con menos de setenta y dos horas de evolución, la colecistectomía laparoscópica precoz es la conducta de elección categórica. Enfriar el cuadro con antibióticos para operar en seis semanas aumenta complicaciones y estadía hospitalaria.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      caseText: 'Un hombre de setenta y ocho años con antecedentes de infarto miocárdico reciente hace tres semanas y enfermedad pulmonar obstructiva crónica severa oxigenodependiente, consulta por fiebre de treinta y ocho coma cinco grados y dolor en hipocondrio derecho de cuatro días de evolución. Al examen físico destaca presión arterial de ochenta con cincuenta milímetros de mercurio que requiere noradrenalina por vía central, taquicardia de ciento diez por minuto y signo de Murphy intensamente positivo. La ecografía confirma colecistitis aguda litiásica Grado tres con pared engrosada y líquido perivesicular. El equipo de anestesiología califica el riesgo quirúrgico como prohibitivo. ¿Cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Colecistectomía abierta de urgencia de inmediato', isCorrect: false },
        { letter: 'B', text: 'Colecistostomía percutánea transhepática guiada por imágenes más antibióticos endovenosos', isCorrect: true },
        { letter: 'C', text: 'Tratamiento exclusivamente médico con antibióticos sin descompresión biliar', isCorrect: false },
        { letter: 'D', text: 'Colangiopancreatografía retrógrada endoscópica con esfinterotomía', isCorrect: false },
        { letter: 'E', text: 'Observación en sala básica con hidratación endovenosa', isCorrect: false },
      ],
      correct: 'B',
      say: {
        stem: 'Analicemos este caso clásico de paciente de alto riesgo. Un hombre de setenta y ocho años con infarto reciente y daño pulmonar severo cursa con colecistitis aguda Grado tres en shock séptico que requiere noradrenalina y con riesgo anestésico prohibitivo.',
        question: 'Se pregunta por la conducta más adecuada en este escenario.',
        options: 'Las alternativas son: opción A, colecistectomía abierta de urgencia; opción B, colecistostomía percutánea transhepática guiada por imágenes más antibióticos endovenosos; opción C, antibióticos exclusivos sin descompresión; opción D, colangiopancreatografía retrógrada endoscópica; y opción E, observación en sala básica.',
        answer: 'La respuesta correcta es la opción B. Ante un paciente con colecistitis aguda Grado tres con inestabilidad hemodinámica y comorbilidades prohibitivas para someterse a anestesia general, la colecistostomía percutánea descompresiva bajo anestesia local es el procedimiento salvador de elección.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      caseText: 'Una mujer de cuarenta y dos años consulta en el servicio de urgencia por dolor continuo en hipocondrio derecho de ocho horas de evolución. Se realiza ecografía abdominal que demuestra varios cálculos milimétricos en el interior de la vesícula biliar. ¿Cuál de los siguientes hallazgos ecográficos presenta la mayor especificidad diagnóstica para confirmar colecistitis aguda litiásica?',
      question: '¿Cuál de los siguientes hallazgos ecográficos presenta la mayor especificidad diagnóstica?',
      options: [
        { letter: 'A', text: 'Presencia de litiasis vesicular múltiple con sombra acústica posterior', isCorrect: false },
        { letter: 'B', text: 'Engrosamiento difuso de la pared vesicular mayor a cuatro milímetros', isCorrect: false },
        { letter: 'C', text: 'Signo de Murphy ecográfico positivo al presionar la vesícula con el transductor', isCorrect: true },
        { letter: 'D', text: 'Diámetro longitudinal vesicular superior a diez centímetros', isCorrect: false },
        { letter: 'E', text: 'Presencia de barro biliar móvil en el lumen vesicular', isCorrect: false },
      ],
      correct: 'C',
      say: {
        stem: 'Revisemos esta pregunta orientada a la semiología ecográfica. Una mujer de cuarenta y dos años consulta por dolor continuo de ocho horas con litiasis en la ecografía.',
        question: 'Nos consultan cuál de los hallazgos ecográficos tiene la mayor especificidad diagnóstica para confirmar colecistitis aguda.',
        options: 'Las alternativas son: opción A, litiasis múltiple con sombra acústica; opción B, engrosamiento de pared mayor a cuatro milímetros; opción C, signo de Murphy ecográfico positivo al presionar con el transductor; opción D, diámetro mayor a diez centímetros; y opción E, barro biliar móvil.',
        answer: 'La respuesta correcta es la opción C. El signo de Murphy ecográfico positivo, que consiste en reproducir el dolor exquisite al comprimir directamente la vesícula con el transductor bajo visión ecográfica directa, es el signo con mayor especificidad diagnóstica, superando el noventa y cinco por ciento de especificidad.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos clave para el EUNACOM',
      title: 'Reglas de oro en colecistitis aguda',
      cards: [
        {
          title: 'Cuatro certezas clínicas',
          kind: 'key',
          items: [
            {
              text: 'Dolor en hipocondrio derecho mayor a seis horas y Murphy orientan a colecistitis.',
              say: 'Primera regla: la persistencia del dolor en hipocondrio derecho por más de seis horas asociado a signo de Murphy positivo y síndrome inflamatorio separa categóricamente la colecistitis del cólico biliar simple.',
            },
            {
              text: 'La ecografía abdominal es la primera línea diagnóstica obligada.',
              say: 'Segunda regla: la ecografía abdominal es el método de elección inicial; el signo de Murphy ecográfico es el hallazgo más específico y el engrosamiento parietal mayor a cuatro milímetros es el criterio morfológico cardinal.',
            },
            {
              text: 'Colecistectomía laparoscópica precoz dentro de las setenta y dos horas.',
              say: 'Tercera regla: en pacientes Grado uno y Grado dos operables, el tratamiento estándar es la colecistectomía laparoscópica precoz dentro de setenta y dos horas; nunca diferir innecesariamente para enfriar el cuadro.',
            },
            {
              text: 'Colecistostomía percutánea en pacientes en shock o con riesgo prohibitivo.',
              say: 'Cuarta regla: en pacientes con falla orgánica Grado tres o riesgo anestésico prohibitivo, la colecistostomía percutánea bajo anestesia local es el procedimiento salvador de urgencia.',
            },
          ],
        },
        {
          title: 'Idea final',
          kind: 'normal',
          items: [
            {
              text: 'La ictericia marcada en colecistitis obliga a descartar coledocolitiasis o Mirizzi.',
              say: 'Si te llevas una sola idea de hoy: la colecistitis aguda no complicada cursa sin ictericia; si hay bilirrubina elevada sobre cuatro miligramos por decilitro, debes buscar activamente una coledocolitiasis o un síndrome de Mirizzi. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Diagnóstico y Manejo de Colecistitis Aguda',
    root: N(
      'start',
      'Sospecha de colecistitis aguda',
      'Dolor continuo en HCD > 6 horas · fiebre · Murphy (+)',
      'Iniciamos el enfrentamiento confirmando el diagnóstico mediante ecografía abdominal urgente.',
      [
        'Ecografía confirma colecistitis',
        N(
          'q',
          'Evaluar estratificación de Tokio y riesgo quirúrgico',
          'Cálculo impactado · engrosamiento parietal ≥ 4 mm · Murphy ecográfico (+)',
          'Confirmada la colecistitis aguda, estratificamos la gravedad según las Guías de Tokio dos mil dieciocho.',
          [
            'Grado I o Grado II en paciente operable',
            N(
              'do',
              'Colecistectomía laparoscópica precoz',
              'Realizar dentro de las 72 horas desde el inicio de síntomas',
              'En pacientes Grado uno o dos candidatos a cirugía, indicamos colecistectomía laparoscópica precoz dentro de setenta y dos horas.',
              [
                'Cirugía laparoscópica con visión crítica',
                N(
                  'ok',
                  'Obtener Visión Crítica de Seguridad de Strasberg',
                  'Triángulo despejado · tercio inferior liberado · 2 estructuras',
                  'Antes de clipear o cortar aseguramos la visión crítica de Strasberg para proteger la vía biliar.',
                ),
              ],
              [
                'Triángulo congelado o anatomía distorsionada',
                N(
                  'alert',
                  'Cirugía de rescate: colecistectomía subtotal o conversión',
                  'Evitar a toda costa la lesión iatrogénica de la vía biliar',
                  'Si la inflamación extrema impide identificar con certeza las estructuras, convertimos a cirugía abierta o realizamos colecistectomía subtotal.',
                ),
              ],
            ),
          ],
          [
            'Grado III o riesgo quirúrgico prohibitivo',
            N(
              'alert',
              'Inestabilidad hemodinámica o comorbilidad crítica',
              'Falla orgánica (vasopresores, creatinina > 2, etc.) · riesgo anestésico extremo',
              'Si el paciente está en shock séptico o tiene contraindicación para anestesia general, desaconsejamos la colecistectomía inmediata.',
              [
                'Procedimiento descompresivo de urgencia',
                N(
                  'do',
                  'Colecistostomía percutánea transhepática',
                  'Drenaje guiado por ecografía o TAC bajo anestesia local + ATB EV',
                  'Efectuamos colecistostomía percutánea transhepática descompresiva de urgencia asociada a antibióticos endovenosos.',
                  [
                    'Evolución tras descompresión',
                    N(
                      'ok',
                      'Resolución de sepsis y colecistectomía diferida',
                      'Cirugía electiva una vez recuperada la estabilidad clínica',
                      'Tras superar la sepsis y estabilizar las comorbilidades, se programa colecistectomía electiva diferida.',
                    ),
                  ],
                ),
              ],
            ),
          ],
        ),
      ],
      [
        'Ictericia franca concomitante',
        N(
          'alert',
          'Bilirrubina total elevada > 4 mg/dL',
          'Sospecha de coledocolitiasis o Síndrome de Mirizzi',
          'Si el paciente presenta ictericia franca concomitante, sospechamos coledocolitiasis asociada o síndrome de Mirizzi.',
          [
            'Estudio de vía biliar',
            N(
              'do',
              'Colangiorresonancia o ERCP según probabilidad',
              'Descartar cálculo en colédoco o colangitis aguda',
              'Solicitamos colangiorresonancia magnética o indicamos colangiopancreatografía retrógrada endoscópica terapéutica.',
            ),
          ],
        ),
      ],
    ),
  },
};
