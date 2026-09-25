// Clase 3.9 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-09).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-09',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Bacteriuria asintomática, cistitis, pielonefritis aguda parenteral, esquemas antimicrobianos y profilaxis continua hasta el parto',
      say: 'Bienvenidos a la clase sobre infección del tracto urinario en el embarazo. La infección urinaria es la complicación médica infecciosa más frecuente de la gestación y una causa directa prevenible de prematurez y shock séptico. En esta sesión aprenderemos por qué la bacteriuria asintomática debe tratarse siempre en la gestante, los esquemas antibióticos ambulatorios de primera línea, la indicación de hospitalización obligatoria en pielonefritis aguda y la quimioprofilaxis continua hasta el parto. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Predisposición anatómica y hormonal',
      title: 'Modificaciones gravídicas que favorecen la infección ascendente',
      nodes: [
        { id: 'pro', col: 0, row: 1, k: 'start', t: 'Efecto de la progesterona', s: 'Relajación del músculo liso con hipotonía ureteral y vesical' },
        { id: 'hid', col: 1, row: 1, k: 'mech', t: 'Hidronefrosis fisiológica', s: 'Dilatación pielocalicial y éstasis urinario de predominio derecho' },
        { id: 'ute', col: 2, row: 0, k: 'risk', t: 'Compresión mecánica uterina', s: 'Dextrorrotación del útero comprime el uréter derecho en el estrecho superior' },
        { id: 'met', col: 2, row: 2, k: 'risk', t: 'Cambios bioquímicos urinarios', s: 'Glucosuria y aminoaciduria aumentan pH y nutren uropatógenos' },
        { id: 'asc', col: 4, row: 1, k: 'trap', t: 'Colonización y ascenso bacteriano', s: 'Escherichia coli asciende fácilmente desde la vejiga hacia el parénquima renal' },
      ],
      edges: [
        { from: 'pro', to: 'hid', label: 'hipotonía muscular' },
        { from: 'ute', to: 'hid', label: 'compresión pélvica' },
        { from: 'hid', to: 'asc', label: 'éstasis urinario' },
        { from: 'met', to: 'asc', label: 'medio favorable' },
      ],
      steps: [
        {
          show: ['pro', 'hid'],
          note: 'Hipotonía ureteral por progesterona',
          say: 'Durante el embarazo, los altos niveles de progesterona inducen una profunda relajación del músculo liso ureteral y vesical. Esto provoca hipotonía, dilatación de la pelvis renal y los uréteres, y un marcado éstasis urinario.',
        },
        {
          show: ['ute', 'met'],
          note: 'Factores mecánicos y metabólicos coadyuvantes',
          say: 'A esto se suma la compresión mecánica ejercida por el útero grávido en dextrorrotación sobre el uréter derecho en el estrecho pélvico superior, junto con el aumento de la filtración glomerular que incrementa la glucosa y aminoácidos en la orina, alcalinizándola.',
        },
        {
          show: ['asc'],
          note: 'Facilitación del ascenso bacteriano',
          say: 'Este ambiente de éstasis y nutrientes permite que bacterias uropatógenas del microbiota fecal, principalmente Escherichia coli, colonicen la uretra, proliferen en la vejiga y asciendan rápidamente hacia el parénquima renal.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Regla cardinal EUNACOM',
      title: 'Bacteriuria Asintomática en la embarazada: diagnóstico y tratamiento',
      cards: [
        {
          title: 'Definición y pesquisa sistemática',
          tag: 'Criterio microbiológico',
          kind: 'criteria',
          items: [
            {
              t: 'Urocultivo con cien mil UFC por mililitro',
              d: 'Aislamiento de germen único en muestra de segundo chorro sin síntomas',
              say: 'La bacteriuria asintomática se define por el aislamiento de cien mil o más unidades formadoras de colonias por mililitro de un único germen en una paciente sin ningún síntoma urinario ni sistémico.',
            },
            {
              t: 'Tamizaje rutinario universal',
              d: 'Urocultivo de ingreso en primer trimestre para todas las gestantes',
              say: 'El tamizaje con urocultivo es mandatorio para todas las embarazadas en su primer control prenatal, debido a que la prevalencia de bacteriuria asintomática oscila entre el cinco y diez por ciento.',
            },
          ],
        },
        {
          title: 'Conducta terapéutica obligatoria',
          tag: 'Prevención de prematurez',
          kind: 'alert',
          items: [
            {
              t: 'Se trata siempre en la embarazada',
              d: 'Si no se trata, el 30 a 40% progresa a pielonefritis aguda',
              say: 'En población general la bacteriuria asintomática no se trata. En la embarazada se trata siempre, porque si se deja evolucionar, hasta un cuarenta por ciento desarrollará pielonefritis aguda y sepsis.',
            },
            {
              t: 'Riesgo de parto prematuro',
              d: 'La endotoxemia bacteriana gatilla dinámica uterina precoz',
              say: 'La colonización urinaria no tratada se asocia directamente a rotura prematura de membranas, bajo peso al nacer y síndrome de parto prematuro por activación de mediadores inflamatorios.',
            },
            {
              t: 'Urocultivo de control obligatorio',
              d: 'Solicitar siete a catorce días tras finalizar los antibióticos',
              say: 'Una vez finalizado el tratamiento antibiótico, es mandatorio solicitar un urocultivo de control entre los siete y catorce días para confirmar la erradicación bacteriana bacteriológica.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Espectro de gravedad clínica',
      title: 'Clasificación de la infección urinaria: Cistitis versus Pielonefritis',
      head: ['Parámetro de comparación', 'Cistitis Aguda (baja)', 'Pielonefritis Aguda (alta)'],
      rows: [
        {
          cells: ['Localización anatómica', 'Vejiga y uretra proximal', 'Parénquima renal y sistema pielocalicial'],
          say: 'La cistitis se limita a la mucosa vesical, mientras que la pielonefritis compromete el parénquima renal profundo.',
        },
        {
          cells: ['Manifestaciones clínicas', 'Disuria, polaquiuria, tenesmo, dolor suprapúbico', 'Fiebre alta, calofríos intensos, dolor lumbar y vómitos'],
          say: 'La cistitis cursa únicamente con síntomas irritativos bajos sin fiebre; la pielonefritis debuta con fiebre en agujas, calofríos y dolor en fosa lumbar.',
        },
        {
          cells: ['Examen físico característico', 'Dolor a la palpación hipogástrica', 'Puñopercusión lumbar francamente positiva'],
          say: 'El signo semiológico cardinal de la pielonefritis es la puñopercusión lumbar marcadamente positiva, con mayor frecuencia en el lado derecho.',
        },
        {
          cells: ['Nivel de atención y manejo', 'Manejo ambulatorio en atención primaria', 'Hospitalización inmediata obligatoria en sala de ARO'],
          say: 'La cistitis se trata de forma ambulatoria por vía oral; la pielonefritis exige hospitalización inmediata en todas las embarazadas sin excepción.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Cadena de complicación sistémica',
      title: 'Fisiopatología de la Pielonefritis Aguda: del riñón al choque séptico',
      nodes: [
        { id: 'bac', col: 0, row: 1, k: 'start', t: 'Invasión pielonefrítica', s: 'Proliferación masiva de bacilos gramnegativos en parénquima renal' },
        { id: 'end', col: 1, row: 1, k: 'mech', t: 'Liberación de endotoxinas', s: 'Lipopolisacáridos bacterianos ingresan a la circulación sistémica' },
        { id: 'cit', col: 2, row: 1, k: 'risk', t: 'Tormenta de citoquinas', s: 'Interleucina uno, seis, factor de necrosis tumoral y prostaglandinas' },
        { id: 'app', col: 3, row: 0, k: 'alert', t: 'Amenaza de parto prematuro', s: 'Las prostaglandinas estimulan receptores de oxitocina y maduran el cérvix' },
        { id: 'sdr', col: 3, row: 2, k: 'trap', t: 'SDRA materno y shock séptico', s: 'Fuga capilar pulmonar alveolar y colapso cardiovascular refractario' },
      ],
      edges: [
        { from: 'bac', to: 'end', label: 'lisis bacteriana' },
        { from: 'end', to: 'cit', label: 'respuesta inflamatoria' },
        { from: 'cit', to: 'app', label: 'prostaglandinas E2 y F2a' },
        { from: 'cit', to: 'sdr', label: 'daño endotelial difuso' },
      ],
      steps: [
        {
          show: ['bac', 'end'],
          note: 'Lisis bacteriana y endotoxemia sistémica',
          say: 'Al proliferar en el tejido renal, los bacilos gramnegativos liberan grandes cantidades de lipopolisacáridos al torrente sanguíneo, desatando una severa endotoxemia materna.',
        },
        {
          show: ['cit', 'app'],
          note: 'Inducción de dinámica uterina prematura',
          say: 'Las endotoxinas activan la síntesis masiva de interleucinas y prostaglandinas E dos y F dos alfa. Estas prostaglandinas desencadenan contracciones miometriales y borramiento cervical, provocando amenaza de parto prematuro.',
        },
        {
          show: ['sdr'],
          note: 'Riesgo de distress respiratorio y choque séptico',
          say: 'Las citoquinas dañan también la microvasculatura capilar pulmonar, causando edema alveolar no cardiogénico conocido como síndrome de distrés respiratorio agudo del adulto, junto con riesgo de choque séptico refractario.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento antimicrobiano',
      title: 'Terapéutica escalonada para ITU en la gestante',
      cards: [
        {
          title: 'Infección urinaria baja (BA y cistitis)',
          tag: 'Tratamiento oral ambulatorio',
          kind: 'pharma',
          items: [
            {
              t: 'Cefadroxilo oral de primera línea',
              d: 'Quinientos miligramos cada doce horas por vía oral por siete días',
              say: 'El cefadroxilo es la cefalosporina oral de primera elección en Chile por su excelente perfil de seguridad en todos los trimestres del embarazo y alta concentración urinaria.',
            },
            {
              t: 'Nitrofurantoína oral',
              d: 'Cien miligramos cada ocho horas por siete días (evitar en semanas 36 a 40)',
              say: 'La nitrofurantoína es una alternativa eficaz, pero debe evitarse en las últimas semanas de gestación por el riesgo teórico de hemólisis neonatal en recién nacidos con déficit enzimático.',
            },
            {
              t: 'Fármacos contraindicados en embarazo',
              d: 'Quinolonas (Ciprofloxacino) y aminoglucósidos proscritos',
              say: 'Las fluoroquinolonas están contraindicadas por inducir artropatía y daño de cartílagos de crecimiento en el feto. El cotrimoxazol se proscribe en el primer y tercer trimestre.',
            },
          ],
        },
        {
          title: 'Pielonefritis aguda parenteral',
          tag: 'Hospitalización inmediata',
          kind: 'alert',
          items: [
            {
              t: 'Cefazolina o Ceftriaxona endovenosa',
              d: 'Cefazolina un gramo cada ocho horas o Ceftriaxona un a dos gramos cada veinticuatro horas',
              say: 'En cambio, ante una pielonefritis aguda la hospitalización es obligada. Iniciamos tratamiento parenteral inmediato con cefazolina o ceftriaxona endovenosa, manteniéndolo hasta que cumpla cuarenta y ocho horas afebril.',
            },
            {
              t: 'Completar catorce días de terapia total',
              d: 'Paso a vía oral con Cefadroxilo hasta completar dos semanas continuas',
              say: 'Tras cumplir cuarenta y ocho horas afebril, se traslapa a vía oral con cefadroxilo para completar un ciclo antibiótico total de catorce días.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Prevención secundaria de recurrencias',
      title: 'Indicaciones y esquemas de quimioprofilaxis antibiótica nocturna',
      head: ['Indicación clínica formal', 'Esquema antimicrobiano nocturno', 'Momento de administración', 'Duración del tratamiento'],
      rows: [
        {
          cells: ['Post episodio de pielonefritis aguda', 'Cefadroxilo 500 mg o Nitrofurantoína 100 mg', 'Dosis única oral nocturna al acostarse', 'Continua hasta el momento del parto'],
          say: 'Toda gestante que supera una pielonefritis aguda debe recibir profilaxis antibiótica nocturna continua hasta el parto para evitar recidivas que pongan en riesgo al feto.',
        },
        {
          cells: ['Dos o más episodios de ITU baja en el embarazo', 'Cefadroxilo 500 mg o Cefalexina 500 mg', 'Dosis única nocturna diaria', 'Continua durante toda la gestación'],
          say: 'La presencia de dos o más episodios de cistitis o bacteriuria en el mismo embarazo también es indicación formal de profilaxis supresora nocturna.',
        },
        {
          cells: ['Seguimiento con urocultivos mensuales', 'Urocultivo mensual de vigilancia sistemática', 'Durante toda la quimioprofilaxis', 'Hasta el puerperio'],
          say: 'Las pacientes bajo profilaxis deben controlarse con urocultivos mensuales para pesquisar precozmente la aparición de cepas bacterianas resistentes.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo de Manejo de la Infección Urinaria en el Embarazo',
      say: 'Revisemos el algoritmo estructurado para el abordaje de la bacteriuria asintomática, cistitis y pielonefritis en la gestante.',
    },

    {
      type: 'table',
      kicker: 'Trampas frecuentes EUNACOM',
      title: 'Distracciones y errores comunes en preguntas de infección urinaria',
      head: ['Situación presentada en la pregunta', 'Error habitual del postulante', 'Conducta médica correcta'],
      rows: [
        {
          cells: ['Bacteriuria asintomática con 100.000 UFC en embarazada sana', 'No tratar porque la paciente no presenta molestias urinarias', 'Tratar de inmediato con Cefadroxilo oral por 7 días y urocultivo de control'],
          say: 'En el adulto no gestante no se trata la bacteriuria asintomática. En la embarazada es un error gravísimo no tratarla, pues evolucionará a pielonefritis y parto prematuro.',
        },
        {
          cells: ['Embarazada con disuria tratada con Ciprofloxacino oral', 'Aceptar el tratamiento asumiendo adecuada cobertura gramnegativa', 'Suspender Ciprofloxacino por contraindicación fetal y sustituir por Cefalosporina'],
          say: 'El ciprofloxacino está absolutamente contraindicado en el embarazo por provocar toxicidad sobre el cartílago articular fetal en desarrollo.',
        },
        {
          cells: ['Pielonefritis aguda en embarazada de 24 semanas sin shock', 'Indicar antibióticos orales ambulatorios con reposo domiciliario', 'Hospitalización inmediata obligatoria e inicio de antibióticos endovenosos'],
          say: 'La pielonefritis aguda en una embarazada nunca se trata de forma ambulatoria. Requiere hospitalización obligatoria para vigilar sepsis y dinámica uterina.',
        },
        {
          cells: ['Alta médica tras pielonefritis aguda resuelta a las 26 semanas', 'Dar de alta con control habitual sin fármacos de mantenimiento', 'Prescribir quimioprofilaxis antibiótica nocturna continua hasta el parto'],
          say: 'Dar el alta sin profilaxis nocturna tras una pielonefritis es una falla habitual. La paciente debe mantener profilaxis hasta el alumbramiento.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso de razonamiento clínico',
      title: 'Pesquisa y conducta ante Bacteriuria Asintomática en el primer trimestre',
      stem: 'Una mujer de 24 años, primigesta cursando un embarazo de 11 semanas, acude a revisión de exámenes del primer control prenatal. Se encuentra asintomática, sin disuria, polaquiuria ni dolor lumbar. En el sedimento de orina se observan leucocitos de 15 a 20 por campo, y el urocultivo tomado por segundo chorro informa desarrollo de Escherichia coli con recuento mayor a 100.000 unidades formadoras de colonias por mililitro, sensible a cefalosporinas.',
      question: '¿Cuál es la conducta médica más adecuada?',
      options: [
        { letter: 'A', text: 'Observar evolución sin antibióticos por tratarse de un hallazgo asintomático' },
        { letter: 'B', text: 'Indicar aumento de ingesta de líquidos y repetir urocultivo en el segundo trimestre' },
        { letter: 'C', text: 'Indicar tratamiento con Cefadroxilo 500 mg cada 12 horas por 7 días y solicitar urocultivo de control' },
        { letter: 'D', text: 'Hospitalizar de inmediato para tratamiento con Ceftriaxona endovenosa' },
        { letter: 'E', text: 'Prescribir Ciprofloxacino 500 mg cada 12 horas por 3 días' },
      ],
      correct: 'C',
      explanation: 'La paciente presenta una Bacteriuria Asintomática (urocultivo mayor o igual a 100.000 UFC/mL sin síntomas). En la embarazada es mandatorio el tratamiento antimicrobiano para prevenir su progresión a pielonefritis aguda (30-40% de riesgo) y parto prematuro. El tratamiento de primera línea es Cefadroxilo oral por 7 días, seguido de urocultivo de control a los 7-14 días.',
      say: {
        stem: 'Una primigesta de once semanas presenta urocultivo de control prenatal con Escherichia coli mayor a cien mil unidades formadoras de colonias por mililitro, completamente asintomática.',
        question: '¿Cuál es la conducta médica más adecuada?',
        options: 'La opción A propone observar sin antibióticos. La B aumentar líquidos y repetir en el segundo trimestre. La C indicar cefadroxilo oral por siete días y urocultivo de control. La D hospitalizar para ceftriaxona endovenosa. La E ciprofloxacino oral. Piénsalo.',
        answer: 'La respuesta correcta es la C. Toda bacteriuria asintomática en la embarazada debe tratarse con antibióticos por vía oral durante siete días para evitar pielonefritis, requiriendo urocultivo de control posterior.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2025',
      title: 'EUNACOM Julio 2025 · Pregunta 34',
      stem: 'Embarazada de 20 semanas con urocultivo positivo para Escherichia coli multisensible. Sin antecedentes de alergias a medicamentos ni patologías asociadas. ¿Cuál es el antibiótico de elección para el tratamiento de la infección urinaria en este contexto clínico?',
      question: '¿Cuál es el antibiótico de elección?',
      options: [
        { letter: 'A', text: 'Cefalexina o Cefadroxilo oral por 7 días' },
        { letter: 'B', text: 'Amoxicilina oral por 3 días' },
        { letter: 'C', text: 'Cotrimoxazol oral por 7 días' },
        { letter: 'D', text: 'Ciprofloxacino oral por 5 días' },
        { letter: 'E', text: 'Gentamicina intramuscular por 7 días' },
      ],
      correct: 'A',
      explanation: 'Las cefalosporinas de primera generación orales (Cefadroxilo o Cefalexina) administradas durante 7 días constituyen el tratamiento antimicrobiano de primera línea de elección para la infección urinaria en el embarazo en Chile. Presentan un excelente perfil de seguridad materno-fetal en todos los trimestres. Las quinolonas como Ciprofloxacino están contraindicadas por artropatía fetal, y Cotrimoxazol se proscribe en el primer y tercer trimestre.',
      say: {
        stem: 'Una paciente de veinte semanas de gestación presenta urocultivo positivo para Escherichia coli sensible, sin antecedentes de alergias.',
        question: '¿Cuál es el antibiótico de elección para el tratamiento de la infección urinaria?',
        options: 'La opción A propone cefalexina o cefadroxilo oral por siete días. La B amoxicilina por tres días. La C cotrimoxazol oral. La D ciprofloxacino oral. La E gentamicina intramuscular. Piénsalo.',
        answer: 'La respuesta correcta es la A. Las cefalosporinas de primera generación orales por siete días son el tratamiento de primera línea de elección en el embarazo en Chile por su máxima seguridad fetal.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Caso de razonamiento clínico',
      title: 'Manejo inicial y hospitalización en Pielonefritis Aguda gravídica',
      stem: 'Una mujer de 22 años, cursando un embarazo de 26 semanas, consulta en el servicio de urgencia por cuadro de 24 horas de fiebre hasta 39°C asociada a calofríos intensos, náuseas, vómitos y dolor lumbar derecho. Al examen físico destaca temperatura de 38.8°C, frecuencia cardíaca de 105 latidos por minuto, presión arterial de 100/65 mmHg y puñopercusión lumbar derecha francamente positiva. Se constata útero blando sin dinámica.',
      question: '¿Cuál es la conducta médica inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Indicar hidratación oral y ciprofloxacino ambulatorio con control en 48 horas' },
        { letter: 'B', text: 'Hospitalización inmediata, toma de urocultivo e inicio de Cefazolina o Ceftriaxona endovenosa' },
        { letter: 'C', text: 'Administrar paracetamol endovenoso y dar de alta con nitrofurantoína oral' },
        { letter: 'D', text: 'Realizar cesárea de emergencia inmediata por riesgo inminente de sepsis' },
        { letter: 'E', text: 'Indicar reposo en cama y analgésicos antiespasmódicos orales' },
      ],
      correct: 'B',
      explanation: 'La paciente presenta una Pielonefritis Aguda del Embarazo (síndrome febril alto, compromiso del estado general y dolor lumbar con puñopercusión positiva). Toda pielonefritis en el embarazo es de manejo intrahospitalario estricto debido al alto riesgo de sepsis materna, choque séptico, distrés respiratorio (SDRA) y amenaza de parto prematuro. Se hospitaliza de inmediato, se toman urocultivo y hemocultivos y se inicia antibioticoterapia parenteral con Cefazolina o Ceftriaxona EV.',
      say: {
        stem: 'Una paciente de veintiséis semanas consulta en urgencias por fiebre de treinta y nueve grados, calofríos, náuseas y puñopercusión lumbar derecha intensamente positiva.',
        question: '¿Cuál es la conducta médica inmediata más adecuada?',
        options: 'La opción A propone ciprofloxacino oral ambulatorio. La B hospitalización inmediata, urocultivo e inicio de cefazolina o ceftriaxona endovenosa. La C paracetamol y alta con nitrofurantoína. La D cesárea de emergencia. La E reposo y antiespasmódicos. Piénsalo.',
        answer: 'La respuesta correcta es la B. La pielonefritis aguda en el embarazo exige hospitalización obligatoria inmediata para inicio de antibióticos parenterales y monitorización estricta de complicaciones sistémicas.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro',
      title: 'Conceptos clave en infección urinaria y embarazo para el EUNACOM',
      cards: [
        {
          title: 'Tamizaje y tratamiento oral',
          tag: 'Manejo ambulatorio',
          kind: 'key',
          items: [
            {
              t: 'La bacteriuria asintomática se trata siempre',
              d: 'Cefadroxilo oral por 7 días más urocultivo de control posterior',
              say: 'La bacteriuria asintomática en el embarazo se trata siempre para prevenir pielonefritis y parto prematuro.',
            },
            {
              t: 'Cefalosporinas de primera línea',
              d: 'Cefadroxilo y Cefalexina seguros; quinolonas prohibidas',
              say: 'El cefadroxilo oral por siete días es la primera línea; las quinolonas están estrictamente prohibidas por daño del cartílago fetal.',
            },
          ],
        },
        {
          title: 'Pielonefritis y profilaxis',
          tag: 'Manejo intrahospitalario',
          kind: 'alert',
          items: [
            {
              t: 'Hospitalización inmediata en pielonefritis',
              d: 'Cefazolina o Ceftriaxona EV hasta 48 horas afebril',
              say: 'La pielonefritis aguda gestacional requiere hospitalización inmediata obligatoria con antibioticoterapia endovenosa.',
            },
            {
              t: 'Profilaxis nocturna continua hasta el parto',
              d: 'Mandatoria post pielonefritis o tras dos episodios de ITU baja',
              say: 'Si te llevas una sola idea de hoy: toda gestante que supera una pielonefritis debe recibir quimioprofilaxis antibiótica nocturna continua hasta el momento del parto. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Abordaje de la Infección Urinaria en el Embarazo',
    root: N(
      'start',
      'Tamizaje o Sospecha de Infección Urinaria en Gestante',
      'Urocultivo de rutina en primer trimestre o paciente con sintomatología urinaria o sistémica',
      'Iniciamos el abordaje evaluando la presencia de síntomas sistémicos y el resultado del urocultivo.',
      [
        'Urocultivo mayor o igual a 100.000 UFC/mL sin síntomas',
        N(
          'alert',
          'Bacteriuria Asintomática',
          'Tratamiento ambulatorio obligatorio para evitar progresión a pielonefritis',
          'Si confirma bacteriuria asintomática, indicamos tratamiento oral obligatorio durante siete días.',
          [
            'Tratamiento de primera línea',
            N(
              'do',
              'Cefadroxilo 500 mg c/12h por 7 días vía oral',
              'Alternativa: Nitrofurantoína 100 mg c/8h por 7 días (evitar en semanas 36 a 40)',
              'Indicamos cefadroxilo oral durante siete días y programamos urocultivo de control posterior.',
              [
                'Control post tratamiento',
                N(
                  'ok',
                  'Urocultivo de control a los 7 a 14 días',
                  'Confirmar erradicación bacteriológica completa · seguimiento con urocultivos mensuales',
                  'Solicitamos urocultivo de control a los siete a catorce días de terminado el esquema.',
                ),
              ],
            ),
          ],
        ),
      ],
      [
        'Síntomas miccionales bajos sin fiebre ni dolor lumbar',
        N(
          'do',
          'Cistitis Aguda',
          'Disuria, polaquiuria y tenesmo · Cefadroxilo oral 500 mg c/12h por 7 días',
          'Ante síntomas bajos tratamos como cistitis aguda con cefadroxilo oral durante siete días.',
        ),
      ],
      [
        'Fiebre alta, calofríos y puñopercusión lumbar positiva',
        N(
          'alert',
          'Pielonefritis Aguda',
          'Hospitalización inmediata obligatoria en sala de Alto Riesgo Obstétrico (ARO)',
          'Ante sospecha de pielonefritis hospitalizamos de inmediato para manejo parenteral y vigilancia de sepsis.',
          [
            'Terapia parenteral de urgencia',
            N(
              'do',
              'Cefazolina 1 g c/8h EV o Ceftriaxona 1 a 2 g/día EV',
              'Mantener endovenoso hasta 48 horas afebril · completar 14 días totales con Cefadroxilo oral',
              'Iniciamos cefazolina o ceftriaxona endovenosa hasta cumplir cuarenta y ocho horas afebril y completamos catorce días.',
              [
                'Prevención secundaria obligatoria',
                N(
                  'ok',
                  'Quimioprofilaxis antibiótica nocturna hasta el parto',
                  'Cefadroxilo 500 mg/noche o Nitrofurantoína 100 mg/noche hasta el parto',
                  'Al egreso indicamos quimioprofilaxis nocturna continua hasta el parto para prevenir recidivas.',
                ),
              ],
            ),
          ],
        ),
      ],
    ),
  },
};
