// Clase 18.09 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-09).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-09',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Síndrome febril agudo sin foco en el lactante, estratificación por grupos etarios, criterios de bajo riesgo de Rochester, bacteriemia oculta e infección urinaria',
      say: 'Bienvenidos a la clase sobre síndrome febril agudo sin foco en el lactante, un desafío diagnóstico constante en el examen EUNACOM. Hoy aprenderemos a estratificar el riesgo según la edad, dominaremos el estudio séptico del neonato, aplicaremos los criterios de Rochester de uno a tres meses y fijaremos la conducta ante bacteriemia e infección urinaria oculta. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología de la bacteriemia',
      title: 'Inmadurez Inmunológica, Bacteriemia Oculta y Foco Séptico Secundario',
      nodes: [
        { id: 'inm', col: 0, row: 1, k: 'start', t: 'Inmadurez fagocítica y humoral', s: 'Bajos niveles de anticuerpos específicos e inmadurez del sistema de complemento' },
        { id: 'col', col: 1, row: 1, k: 'mech', t: 'Colonización e invasión vascular', s: 'Paso silente de bacterias a la circulación sistémica sin focalidad clínica evidente' },
        { id: 'fie', col: 2, row: 1, k: 'effect', t: 'Respuesta febril aislada', s: 'Fiebre como única manifestación de alarma biológica en lactantes pequeños' },
        { id: 'men', col: 3, row: 1, k: 'alert', t: 'Diseminación y siembra meníngea', s: 'Riesgo de siembra bacteriana en meninges, riñón, articulaciones o choque séptico' },
      ],
      edges: [
        { from: 'inm', to: 'col', label: 'permeabilidad' },
        { from: 'col', to: 'fie', label: 'citoquinas pirogénicas' },
        { from: 'fie', to: 'men', label: 'siembra secundaria' },
      ],
      steps: [
        {
          show: ['inm', 'col'],
          note: 'Vulnerabilidad inmunitaria y translocación bacteriana vascular',
          say: 'Los lactantes menores presentan una inmadurez marcada en la función de opsonización y fagocitosis, lo que facilita que microorganismos patógenos atraviesen las barreras mucosas y colonicen el torrente sanguíneo de manera asintomática.',
        },
        {
          show: ['fie', 'men'],
          note: 'Fiebre como único signo y peligro de diseminación metastásica',
          say: 'La elevación térmica suele ser la única manifestación inicial de esta bacteriemia oculta, la cual, de no ser identificada precozmente, puede evolucionar con rapidez hacia siembras metastásicas graves como meningitis purulenta, artritis séptica o choque séptico fulminante.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Conceptos y definiciones',
      title: 'Fiebre sin Foco Evidente versus Fiebre de Origen Desconocido',
      cards: [
        {
          title: 'Síndrome Febril sin Foco (SFSF)',
          tag: 'Fiebre aguda menor a siete días de evolución',
          kind: 'key',
          items: [
            {
              t: 'Definición operativa de fiebre sin foco',
              d: 'Temperatura axilar mayor o igual a 38.0 grados de menos de 7 días de duración sin foco tras examen físico meticuloso',
              say: 'El síndrome febril sin foco corresponde a toda temperatura axilar igual o superior a treinta y ocho grados de menos de una semana de evolución, en que no encuentras ninguna causa tras un examen físico minucioso.',
            },
            {
              t: 'Etiología viral benigna versus infección bacteriana grave',
              d: 'La mayoría son virosis autolimitadas, pero un 5% a 10% oculta una infección bacteriana potencialmente letal',
              say: 'Si bien la gran mayoría corresponde a pródromos de infecciones virales autolimitadas, el objetivo primordial del médico es pesquisar oportunamente ese diez por ciento que alberga una infección bacteriana grave oculta.',
            },
          ],
        },
        {
          title: 'Diferenciación con Fiebre de Origen Desconocido (FOD)',
          tag: 'Proceso crónico prolongado mayor a dos a tres semanas',
          kind: 'criteria',
          items: [
            {
              t: 'Fiebre prolongada que supera los catorce a veintiún días',
              d: 'Fiebre documentada de más de 2 a 3 semanas de duración sin diagnóstico tras una semana de estudio intrahospitalario',
              say: 'No debe confundirse la fiebre aguda sin foco con la fiebre de origen desconocido, entidad que exige más de dos o tres semanas de fiebre comprobada sin diagnóstico tras un estudio hospitalario estructurado.',
            },
            {
              t: 'Enfoque hacia causas reumatológicas, infecciosas atípicas y neoplásicas',
              d: 'En FOD se investigan enfermedades autoinmunes como artritis idiopática juvenil, leucemias o tuberculosis',
              say: 'El estudio de la fiebre prolongada se orienta hacia patologías no habituales como enfermedad de Kawasaki, artritis idiopática juvenil, tuberculosis, abscesos profundos o neoplasias hematológicas.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Microbiología por grupos etarios',
      title: 'Etiología Bacteriana Invasiva: Del Neonato al Lactante Mayor',
      cards: [
        {
          title: 'Patógenos Perinatales del Neonato (< 28 días)',
          tag: 'Transmisión vertical durante el parto',
          kind: 'alert',
          items: [
            {
              t: 'Streptococcus agalactiae y Escherichia coli',
              d: 'Causantes de más del 80% de las sepsis neonatales precoces y tardías con riesgo de meningitis',
              say: 'En el neonato menor de veintiocho días los gérmenes predominantes son Streptococcus agalactiae del grupo B y Escherichia coli, ambos capaces de producir meningitis y bacteriemia fulminante.',
            },
            {
              t: 'Listeria monocytogenes y enterobacterias nosocomiales',
              d: 'Listeria se asocia a transmisión transplacentaria o perinatal; Klebsiella en neonatos hospitalizados',
              say: 'Listeria monocytogenes también integra este espectro patogénico neonatal, justificando plenamente el uso empírico mandatorio de ampicilina para garantizar su erradicación.',
            },
          ],
        },
        {
          title: 'Patógenos en Lactantes Mayores de un Mes',
          tag: 'Infección urinaria y neumococo',
          kind: 'key',
          items: [
            {
              t: 'Escherichia coli uropatógena como causa hegemónica',
              d: 'La infección del tracto urinario representa más del 85% de las infecciones bacterianas graves en lactantes',
              say: 'Desde el segundo mes de vida la infección del tracto urinario por bacilos coliformes representa por lejos la causa bacteriana grave más frecuente en niños con fiebre sin foco evidente.',
            },
            {
              t: 'Streptococcus pneumoniae y Neisseria meningitidis',
              d: 'La vacunación conjugada ha reducido la bacteriemia oculta a menos del 1%, pero persiste como causa de sepsis grave',
              say: 'Gracias a las vacunas conjugadas infantiles, la bacteriemia por neumococo y meningococo ha caído a mínimos históricos, pero continúan siendo patógenos temibles ante fiebre muy elevada.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo en el periodo neonatal',
      title: 'Neonato Febril (< 28 días): Alto Riesgo y Estudio Séptico Completo',
      cards: [
        {
          title: 'Regla de Oro: Todo Neonato Febril se Hospitaliza',
          tag: 'Sin importar su buen estado general aparente',
          kind: 'alert',
          items: [
            {
              t: 'El aspecto activo y sonriente NO excluye infección severa',
              d: 'Los recién nacidos tienen respuestas clínicas atenuadas y pueden lucir eutróficos cursando una sepsis invasiva',
              say: 'En el examen EUNACOM la regla es categórica: todo recién nacido menor de veintiocho días con fiebre axilar igual o superior a treinta y ocho grados se considera de alto riesgo y se hospitaliza de inmediato.',
            },
            {
              t: 'Indicación de hospitalización formal en neonatología',
              d: 'Jamás enviar a domicilio con antipiréticos ni postergar el estudio invasivo en un menor de un mes',
              say: 'El manejo ambulatorio expectante en un neonato con fiebre sin foco constituye una negligencia médica grave por la elevada mortalidad asociada a la sepsis neonatal no tratada.',
            },
          ],
        },
        {
          title: 'Estudio Séptico Completo Obligatorio',
          tag: 'Sangre, orina por sondeo y líquido cefalorraquídeo',
          kind: 'criteria',
          items: [
            {
              t: 'Hemograma, reactantes de fase aguda y dos hemocultivos',
              d: 'Leucocitosis o leucopenia, índice de baciliformes, proteína C reactiva o procalcitonina y hemocultivos seriados',
              say: 'El protocolo exige hemograma con recuento diferencial, reactantes de fase aguda y toma rigurosa de dos frascos de hemocultivos obtenidos por punciones venosas independientes.',
            },
            {
              t: 'Punción lumbar y orina por cateterismo estéril',
              d: 'Citoquímico, Gram y cultivo de LCR para descartar meningitis; orina obtenida por sonda vesical estéril',
              say: 'Es imperativo realizar punción lumbar para análisis citoquímico y cultivo de líquido cefalorraquídeo, y recolectar orina mediante sonda vesical estéril antes de iniciar antibióticos endovenosos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Seguridad farmacológica neonatal',
      title: 'Tratamiento Empírico Neonatal: Ampicilina más Cefotaxima EV',
      cards: [
        {
          title: 'Esquema Antimicrobiano de Primera Línea',
          tag: 'Cobertura sinérgica para Listeria y bacilos gramnegativos',
          kind: 'pharma',
          items: [
            {
              t: 'Ampicilina endovenosa a 100 a 200 mg/kg/día',
              d: 'Cobertura electiva para Streptococcus agalactiae, Listeria monocytogenes y enterococos susceptibles',
              say: 'La ampicilina endovenosa garantiza una cobertura bactericida óptima contra Listeria monocytogenes y estreptococo del grupo B, microorganismos resistentes a todas las cefalosporinas.',
            },
            {
              t: 'Cefotaxima endovenosa a 100 a 150 mg/kg/día',
              d: 'Cefalosporina de tercera generación con excelente penetración al LCR para cubrir Escherichia coli y Klebsiella',
              say: 'Se asocia cefotaxima endovenosa para erradicar enterobacterias como Escherichia coli con excelente paso a través de la barrera hematoencefálica hacia el espacio subaracnoideo.',
            },
          ],
        },
        {
          title: '¿Por Qué la Ceftriaxona está Contraindicada en Neonatos?',
          tag: 'Riesgo letal de kernicterus y precipitados cálcicos',
          kind: 'alert',
          items: [
            {
              t: 'Desplazamiento competitivo de la bilirrubina indirecta',
              d: 'La ceftriaxona compite fuertemente por la unión a albúmina sérica, desatando encefalopatía por kernicterus',
              say: 'La ceftriaxona está terminantemente contraindicada en menores de veintiocho días porque desplaza a la bilirrubina no conjugada de la albúmina, gatillando encefalopatía bilirrubínica o kernicterus.',
            },
            {
              t: 'Precipitación letal con soluciones de gluconato de calcio',
              d: 'Forma sales insolubles de ceftriaxona-calcio que precipitan en pulmones y riñones con falla orgánica fulminante',
              say: 'Además, la ceftriaxona forma cristales insolubles irreversibles con el calcio presente en infusiones parenterales neonatales, provocando embolias microvasculares letales en parénquima pulmonar y renal.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estratificación validada',
      title: 'Lactante de 29 a 90 Días: Criterios de Bajo Riesgo de Rochester',
      cards: [
        {
          title: 'Criterios Clínicos de Bajo Riesgo',
          tag: 'Condiciones de normalidad anamnéstica y física',
          kind: 'criteria',
          items: [
            {
              t: 'Recién nacido de término sin patología perinatal',
              d: 'Edad gestacional mayor o igual a 37 semanas, peso de nacimiento adecuado y sin hospitalización previa',
              say: 'El paciente debe haber nacido a término, sin hospitalizaciones previas, sin uso reciente de antibióticos y sin enfermedades crónicas subyacentes que aumenten su susceptibilidad.',
            },
            {
              t: 'Buen estado general y exploración física normal',
              d: 'Activo, reactivo, sin signos de dificultad respiratoria, sin focalidad cutánea, articular, ósea u ótica',
              say: 'Al examen físico el lactante debe lucir activo, con llanto vigoroso, hidratación conservada y sin ningún foco infeccioso evidente en piel, articulaciones, tórax ni oídos.',
            },
          ],
        },
        {
          title: 'Criterios de Laboratorio de Rochester',
          tag: 'Parámetros hematológicos y urinarios estandarizados',
          kind: 'key',
          items: [
            {
              t: 'Leucocitos en sangre y recuento de baciliformes',
              d: 'Leucocitos totales entre 5.000 y 15.000 por microlitro; recuento absoluto de baciliformes menor a 1.500',
              say: 'El hemograma debe registrar leucocitos estrictamente entre cinco mil y quince mil por microlitro y formas inmaduras o baciliformes inferiores a mil quinientos.',
            },
            {
              t: 'Sedimento urinario normal sin leucocituria',
              d: 'Menos de 10 leucocitos por campo en orina centrifugada y ausencia total de bacterias en la tinción de Gram',
              say: 'El sedimento de orina debe ser estrictamente normal con menos de diez leucocitos por campo y bacterias negativas en orina obtenida por técnica limpia o cateterismo.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Toma de decisiones clínicas',
      title: 'Manejo según Rochester: Bajo Riesgo versus Alto Riesgo',
      cards: [
        {
          title: 'Conducta ante Criterios de Bajo Riesgo Cumplidos',
          tag: 'Valor predictivo negativo superior al 98%',
          kind: 'key',
          items: [
            {
              t: 'Manejo ambulatorio sin antibióticos empíricos',
              d: 'No se indican antibióticos por vía oral para evitar enmascarar una bacteriemia oculta o meningitis precoz',
              say: 'Si el lactante cumple rigurosamente todos los criterios de Rochester, se indica manejo ambulatorio sin prescribir antibióticos empíricos, los cuales solo enmascararían una infección no diagnosticada.',
            },
            {
              t: 'Control médico presencial obligatorio a las 24 horas',
              d: 'Antipiréticos con paracetamol según malestar, educación rigurosa en signos de alarma y cita en 24 horas',
              say: 'Se administran antipiréticos para el malestar, se educa a los padres en signos de alarma y es imperativo citar a un control médico presencial obligatorio a las veinticuatro horas en el centro de salud.',
            },
          ],
        },
        {
          title: 'Conducta ante Rochester Alterado (Alto Riesgo)',
          tag: 'Riesgo de infección bacteriana grave superior al 10%',
          kind: 'alert',
          items: [
            {
              t: 'Punción lumbar diagnóstica de LCR obligatoria',
              d: 'Cualquier criterio clínico o de laboratorio alterado obliga a estudiar el LCR antes de iniciar antibióticos',
              say: 'Si el paciente falla cualquiera de los criterios de Rochester, se considera de alto riesgo y se debe realizar punción lumbar para estudio microbiológico y bioquímico del líquido cefalorraquídeo.',
            },
            {
              t: 'Hospitalización inmediata y Cefotaxima o Ceftriaxona EV',
              d: 'Internación en sala pediátrica e inicio de cefalosporina de tercera generación parenteral empírica',
              say: 'El lactante debe ser hospitalizado de urgencia iniciando tratamiento antibiótico parenteral con cefotaxima o ceftriaxona endovenosa mientras se monitoriza su evolución y se aguardan los cultivos.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Estratificación protocolizada',
      title: 'Protocolo de Manejo en Síndrome Febril sin Foco según Edad',
      head: ['Grupo de Edad', 'Estratificación de Riesgo', 'Estudio Diagnóstico', 'Conducta Terapéutica'],
      rows: [
        {
          cells: ['Menor de 28 días', 'Alto riesgo absoluto (15%)', 'Estudio séptico completo con punción lumbar', 'Hospitalización formal más Ampicilina con Cefotaxima EV'],
          say: 'El neonato febril se hospitaliza siempre realizando estudio séptico con punción lumbar y recibiendo ampicilina con cefotaxima endovenosa.',
        },
        {
          cells: ['29 a 90 días (Bajo riesgo)', 'Riesgo menor al 1% a 2%', 'Hemograma, orina completa y urocultivo por sondeo', 'Manejo ambulatorio sin antibióticos y control en 24 horas'],
          say: 'El lactante de uno a tres meses que cumple criterios de Rochester se maneja ambulatorio con control presencial en veinticuatro horas.',
        },
        {
          cells: ['29 a 90 días (Alto riesgo)', 'Riesgo mayor al 10%', 'Punción lumbar, hemocultivos y urocultivo completo', 'Hospitalización más Cefotaxima o Ceftriaxona endovenosa'],
          say: 'Si falla algún criterio de Rochester se realiza punción lumbar, se hospitaliza y se administran cefalosporinas de tercera generación parenterales.',
        },
        {
          cells: ['3 a 36 meses (Buen aspecto)', 'Riesgo de bacteriemia menor al 1%', 'Orina completa y urocultivo si fiebre supera 39 grados', 'Manejo sintomático ambulatorio con signos de alarma'],
          say: 'En el lactante mayor de tres meses con vacunas al día se descarta infección urinaria y se maneja ambulatorio con pautas de alarma.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Enfoque en lactante mayor',
      title: 'Lactante de 3 a 36 Meses: La Infección Urinaria como Causa Principal',
      cards: [
        {
          title: 'Epidemiología de la Infección Oculta',
          tag: 'La ITU representa más del 80% de las infecciones bacterianas',
          kind: 'key',
          items: [
            {
              t: 'La infección del tracto urinario es la más prevalente',
              d: 'En lactantes febriles sin foco de 3 a 24 meses, la ITU supera ampliamente a la bacteriemia y meningitis',
              say: 'En niños de tres a veinticuatro meses con síndrome febril sin foco, la infección urinaria es la causa bacteriana más común, presentándose con irritabilidad, vómitos esporádicos o simplemente fiebre aislada.',
            },
            {
              t: 'Factores de riesgo epidemiológicos para ITU oculta',
              d: 'Niñas menores de 24 meses, varones no circuncidados menores de 12 meses y fiebre sobre 39 grados de más de 48 horas',
              say: 'El riesgo de infección urinaria oculta es mayor en niñas menores de dos años, niños no circuncidados menores de un año y ante temperaturas superiores a treinta y nueve grados de más de dos días de duración.',
            },
          ],
        },
        {
          title: 'Evaluación de Bacteriemia Oculta Residual',
          tag: 'Impacto protector de las vacunas conjugadas',
          kind: 'criteria',
          items: [
            {
              t: 'Esquema de vacunación al día como factor protector',
              d: 'Niño con tres dosis de vacuna antineumocócica conjugada tiene riesgo de bacteriemia menor al 0.5%',
              say: 'Un lactante que cuenta con sus dosis correspondientes de vacuna hexavalente y antineumocócica conjugada presenta un riesgo de bacteriemia oculta inferior al cero coma cinco por ciento.',
            },
            {
              t: 'Indicación de hemograma y hemocultivos en casos seleccionados',
              d: 'Solo si el niño luce tóxico, presenta temperatura mayor a 39.5 grados persistente o no está vacunado',
              say: 'El hemograma y los hemocultivos se reservan para lactantes con fiebre muy elevada sobre treinta y nueve coma cinco grados, esquemas de vacunación incompletos o aspecto clínico tóxico.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Procedimiento de laboratorio crítico',
      title: 'Toma de Muestra de Orina: Por Qué la Bolsa Recolectora NO Sirve',
      cards: [
        {
          title: 'La Falacia de la Bolsa Recolectora Adhesiva',
          tag: 'Falsos positivos de urocultivo superiores al 85%',
          kind: 'alert',
          items: [
            {
              t: 'Altísima tasa de contaminación por flora perineal',
              d: 'La piel perineal está colonizada; la bolsa recolectora genera falsos positivos que inducen sobretratamiento',
              say: 'La bolsa recolectora adhesiva presenta una tasa de falsos positivos en el cultivo superior al ochenta y cinco por ciento debido al arrastre de bacterias saprófitas de la piel perineal.',
            },
            {
              t: 'La bolsa solo sirve si la orina completa es 100% normal',
              d: 'Un sedimento urinario negativo por bolsa descarta ITU, pero si es positivo NO sirve para iniciar antibióticos',
              say: 'Una orina normal tomada por bolsa recolectora tiene alto valor predictivo negativo para descartar infección, pero si sale alterada jamás autoriza a diagnosticar o tratar sin una muestra estéril.',
            },
          ],
        },
        {
          title: 'Técnicas Estériles Validadas: Cateterismo y Punción',
          tag: 'Sondeo vesical como técnica de primera elección',
          kind: 'key',
          items: [
            {
              t: 'Cateterismo vesical transuretral estéril',
              d: 'Técnica de elección en el lactante sin control de esfínteres; corte positivo de urocultivo: mayor a 50.000 UFC/mL',
              say: 'El sondeo vesical estéril con sonda nelaton fina es la técnica estándar para confirmar infección urinaria en lactantes, considerándose positivo con más de cincuenta mil unidades formadoras de colonias.',
            },
            {
              t: 'Punción suprapúbica guiada por ecografía',
              d: 'Estándar de oro histórico; cualquier recuento de bacilos gramnegativos (mayor a 1 UFC/mL) confirma ITU',
              say: 'La punción suprapúbica guiada por ecografía es el método de referencia más limpio, donde la presencia de cualquier colonia bacteriana confirma de manera categórica el diagnóstico.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología de toxicidad sistémica',
      title: 'Escala de Yale y Detección Precoz del Niño Séptico Tóxico',
      cards: [
        {
          title: 'Parámetros de la Escala de Observación de Yale',
          tag: 'Evaluación estructurada del comportamiento infantil',
          kind: 'criteria',
          items: [
            {
              t: 'Seis ítems semiológicos clave de conducta',
              d: 'Calidad del llanto, reacción a estímulos de los padres, estado de vigilia, color de piel, hidratación y respuesta social',
              say: 'La escala de Yale evalúa seis variables clínicas conductuales: la fuerza del llanto, el consuelo en brazos de los padres, el estado de alerta, la coloración cutánea, la hidratación y la respuesta social.',
            },
            {
              t: 'Puntaje total y riesgo de infección bacteriana grave',
              d: 'Menor o igual a 10: riesgo bajo (3%). 11 a 15: moderado. Mayor o igual a 16: alto riesgo de sepsis invasiva (92%)',
              say: 'Un puntaje menor o igual a diez puntos refleja bajo riesgo de bacteriemia, mientras que valores iguales o superiores a dieciséis puntos traducen una probabilidad superior al noventa por ciento de sepsis grave.',
            },
          ],
        },
        {
          title: 'Signos de Toxicidad Clínica Inmediata',
          tag: 'Banderas rojas que invalidan cualquier protocolo ambulatorio',
          kind: 'alert',
          items: [
            {
              t: 'Llenado capilar mayor a tres segundos y piel moteada',
              d: 'Perfusión tisular deficiente, extremidades frías y livedo reticularis traducen choque séptico compensado',
              say: 'El enlentecimiento del llenado capilar por sobre tres segundos, la piel marmórea y las extremidades frías advierten mala perfusión periférica y choque séptico precoz.',
            },
            {
              t: 'Letargia, irritabilidad inconsolable o quejido',
              d: 'La mirada perdida, la hipotonía y el quejido respiratorio constante exigen reanimación médica inmediata',
              say: 'La somnolencia patológica, la hipotonía y el llanto débil o quejumbroso son signos de afectación meníngea o colapso sistémico que obligan a iniciar reanimación con fluidos y antibióticos endovenosos.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de estratificación',
      title: 'Algoritmo de Manejo de la Fiebre sin Foco en el Lactante',
      say: 'Examinemos el algoritmo paso a paso para estratificar la conducta frente a un lactante febril sin foco según su grupo etario y criterios clínicos.',
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.017',
      title: 'Conducta Mandatoria en Neonato Febril Menor de un Mes',
      stem: 'Un recién nacido de 14 días de vida es llevado al Servicio de Urgencia por presentar fiebre axilar de 38.4°C constatada en el hogar y en el box. Al examen físico se observa activo, reactivo, se alimenta bien al pecho materno y no se encuentra ningún foco clínico evidente de infección.',
      question: '¿Cuál es la conducta médica correcta?',
      options: [
        { letter: 'A', text: 'Indicar Paracetamol oral en gotas y control ambulatorio en el CESFAM si la fiebre persiste por más de 48 horas' },
        { letter: 'B', text: 'Hospitalizar de inmediato, realizar estudio séptico completo que incluya punción lumbar e iniciar Ampicilina más Cefotaxima endovenosa' },
        { letter: 'C', text: 'Solicitar hemograma y sedimento de orina; si son normales, dar el alta ambulatoria sin antibióticos' },
        { letter: 'D', text: 'Administrar una dosis de Ceftriaxona intramuscular y control en 24 horas' },
        { letter: 'E', text: 'Indicar enfriamiento con compresas tibias y suspender temporalmente la lactancia materna' },
      ],
      correct: 'B',
      explanation: 'Todo recién nacido menor de 28 días (< 1 mes de vida) con fiebre axilar o rectal igual o superior a 38.0°C se clasifica de alto riesgo absoluto de infección bacteriana grave invasiva (riesgo de sepsis o meningitis de 10% a 15%), con independencia de su aparente buen estado general o vitalidad al examen físico. La conducta reglamentaria e impostergable es hospitalizar de inmediato, realizar estudio séptico completo (hemograma, hemocultivos x 2, sedimento urinario y urocultivo por cateterismo estéril, y punción lumbar para estudio citoquímico, Gram y cultivo de LCR) e iniciar antibióticos endovenosos empíricos combinados con Ampicilina (para cubrir Listeria y Streptococcus agalactiae) más Cefotaxima (para cubrir Escherichia coli). La ceftriaxona está contraindicada por riesgo de kernicterus.',
      say: {
        stem: 'Recién nacido de catorce días febril con temperatura de treinta y ocho coma cuatro activo reactivo que lacta bien y sin foco evidente.',
        question: '¿Cuál es la conducta médica correcta?',
        options: 'La opción A paracetamol oral y control en dos días. La B hospitalizar de inmediato con estudio séptico que incluya punción lumbar e iniciar ampicilina más cefotaxima endovenosa. La C alta si exámenes normales. La D ceftriaxona intramuscular. La E compresas tibias. Aplica la regla neonatal.',
        answer: 'La respuesta correcta es la B. Todo menor de veintiocho días febril se hospitaliza de inmediato para estudio séptico completo con punción lumbar y cobertura parenteral.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.017',
      title: 'Lactante de 45 Días con Criterios de Rochester Cumplidos',
      stem: 'Un lactante de 45 días de vida presenta fiebre de 38.2°C de 6 horas de evolución sin síntomas respiratorios ni digestivos. Al examen físico se encuentra en excelentes condiciones generales, activo y sonriente. Se aplican los criterios de Rochester: leucocitos 9.200/mm³, baciliformes 3%, orina completa con 2 leucocitos por campo y sin bacterias. Cumple con la totalidad de los criterios de bajo riesgo.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Hospitalización inmediata y punción lumbar para estudio de LCR' },
        { letter: 'B', text: 'Manejo ambulatorio con Paracetamol oral según dolor o fiebre y control médico presencial obligatorio a las 24 horas' },
        { letter: 'C', text: 'Iniciar Amoxicilina oral ambulatoria por 7 días de forma empírica' },
        { letter: 'D', text: 'Realizar ecografía cerebral y tomografía de tórax ambulatoria' },
        { letter: 'E', text: 'Dar de alta definitiva sin necesidad de nuevo control si no presenta fiebre' },
      ],
      correct: 'B',
      explanation: 'En lactantes entre 29 y 90 días de vida con síndrome febril sin foco que cumplen la totalidad de los criterios clínicos y de laboratorio de Rochester (nacido a término, buen estado general, leucocitos entre 5.000 y 15.000, baciliformes < 1.500 y sedimento urinario normal sin leucocituria), el valor predictivo negativo para infección bacteriana grave supera el 98% a 99%. La conducta validada internacionalmente y por el MINSAL es el manejo ambulatorio sin antibióticos empíricos (que solo enmascararían una eventual infección bacteriana), administración de Paracetamol oral (15 mg/kg/dosis) para el confort térmico, educación exhaustiva a los padres en signos de alarma y control médico presencial obligatorio a las 24 horas.',
      say: {
        stem: 'Lactante de cuarenta y cinco días con fiebre de treinta y ocho coma dos en excelentes condiciones que cumple la totalidad de los criterios de bajo riesgo de Rochester.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'La opción A hospitalización inmediata y punción lumbar. La B manejo ambulatorio con paracetamol oral y control médico presencial obligatorio a las veinticuatro horas. La C amoxicilina empírica. La D tomografía de tórax. La E alta definitiva sin control. Evalúa el riesgo.',
        answer: 'La respuesta correcta es la B. Si cumple todos los criterios de Rochester el riesgo es menor al uno por ciento permitiendo manejo ambulatorio con control presencial en veinticuatro horas.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.017',
      title: 'Infección Bacteriana Grave Oculta Más Frecuente',
      stem: '¿Cuál es la infección bacteriana grave oculta más frecuente en un lactante de 6 meses con síndrome febril agudo sin foco evidente al examen físico?',
      options: [
        { letter: 'A', text: 'Meningitis bacteriana aguda' },
        { letter: 'B', text: 'Infección del Tracto Urinario (ITU)' },
        { letter: 'C', text: 'Osteomielitis aguda de fémur' },
        { letter: 'D', text: 'Bacteriemia oculta por Salmonella' },
        { letter: 'E', text: 'Absceso retrofaríngeo' },
      ],
      correct: 'B',
      explanation: 'En la edad pediátrica posterior a los 3 meses de vida, la Infección del Tracto Urinario (ITU) representa con creces la infección bacteriana grave más frecuente en pacientes que consultan por fiebre aguda sin foco evidente, constituyendo más del 80% al 85% de todas las etiologías bacterianas confirmadas en este grupo. Por esta razón epidemiológica fundamental, el estudio del sedimento urinario y el urocultivo por cateterismo estéril representan el examen paraclínico de primera línea en todo lactante con fiebre no explicada.',
      say: {
        stem: 'Pregunta sobre la etiología bacteriana grave invasiva oculta más frecuente en un lactante de seis meses con síndrome febril agudo sin foco.',
        question: '¿Cuál es la infección bacteriana más prevalente en este escenario clínico?',
        options: 'La opción A meningitis bacteriana aguda. La B infección del tracto urinario. La C osteomielitis aguda. La D bacteriemia por Salmonella. La E absceso retrofaríngeo. Recuerda la epidemiología ambulatoria.',
        answer: 'La respuesta correcta es la B. La infección del tracto urinario representa más del ochenta por ciento de las infecciones bacterianas ocultas en lactantes con fiebre sin foco.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.017',
      title: 'Lactante con Criterios de Rochester Alterados e ITU',
      stem: 'Un lactante de 2 meses consulta por fiebre de 38.6°C. El hemograma muestra 18.500 leucocitos/mm³ con 12% de baciliformes (2.220 baciliformes/mm³). El sedimento de orina muestra 35 leucocitos por campo y bacterias abundantes.',
      question: '¿Cuál es la conducta médica indicada?',
      options: [
        { letter: 'A', text: 'Iniciar Cefadroxilo oral ambulatorio y citar a control en 72 horas' },
        { letter: 'B', text: 'Hospitalizar para tratamiento antibiótico endovenoso con Cefotaxima y estudio complementario' },
        { letter: 'C', text: 'Enviar a domicilio con paracetamol a la espera del resultado definitivo del urocultivo' },
        { letter: 'D', text: 'Realizar punción suprapúbica sin iniciar antibióticos' },
        { letter: 'E', text: 'Indicar nitrofurantoína oral ambulatoria por 10 días' },
      ],
      correct: 'B',
      explanation: 'El paciente es un lactante pequeño de 2 meses que no cumple los criterios de bajo riesgo de Rochester por presentar leucocitosis marcada (> 15.000), desviación a la izquierda (> 1.500 baciliformes) y un sedimento patológico con leucocituria y bacteriuria compatible con pielonefritis aguda. Por su edad (< 3 meses) y alteración de los parámetros biológicos, tiene un riesgo muy alto de bacteriemia secundaria, pielonefritis invasiva y cicatriz renal permanente. Debe hospitalizarse de inmediato para urocultivo por sonda, antibioticoterapia parenteral con Cefotaxima EV (o Ceftriaxona) y ecografía renal precoz. La nitrofurantoína está contraindicada en ITU febril/pielonefritis.',
      say: {
        stem: 'Lactante de dos meses con fiebre leucocitosis de dieciocho mil quinientos desviación a la izquierda y sedimento con leucocituria y bacterias abundantes.',
        question: '¿Cuál es la conducta médica indicada?',
        options: 'La opción A cefadroxilo oral ambulatorio. La B hospitalizar para tratamiento antibiótico endovenoso con cefotaxima y estudio complementario. La C observar con paracetamol. La D punción suprapúbica sin antibióticos. La E nitrofurantoína. Identifica el alto riesgo.',
        answer: 'La respuesta correcta es la B. Por ser menor de tres meses con criterios de Rochester alterados e infección urinaria febril debe hospitalizarse para antibióticos endovenosos.',
      },
    },

    {
      type: 'points',
      kicker: 'Puntos clave EUNACOM',
      title: 'Reglas de Oro en Fiebre sin Foco en Pediatría',
      cards: [
        {
          title: 'Reglas Estratificadas según Grupo Etario',
          tag: 'Cortes críticos de decisión médica',
          kind: 'key',
          items: [
            {
              t: 'Neonato febril (< 28 días): Hospitalización obligatoria',
              d: 'Estudio séptico completo con punción lumbar e inicio de Ampicilina más Cefotaxima endovenosa siempre',
              say: 'Recuerden que el neonato menor de veintiocho días con fiebre se hospitaliza siempre realizando estudio séptico con punción lumbar e indicando ampicilina más cefotaxima endovenosa.',
            },
            {
              t: 'Lactante de 29 a 90 días: Aplicar criterios de Rochester',
              d: 'Bajo riesgo: ambulatorio con control en 24 horas. Alto riesgo: punción lumbar, hospitalización y antibióticos EV',
              say: 'Entre uno y tres meses apliquen los criterios de Rochester: si cumple todos los parámetros se maneja ambulatorio con control en veinticuatro horas; si falla alguno se hospitaliza con punción lumbar.',
            },
          ],
        },
        {
          title: 'Perlas de Laboratorio y Farmacología',
          tag: 'Errores graves que castiga el examen',
          kind: 'alert',
          items: [
            {
              t: 'Ceftriaxona formalmente prohibida en el neonato',
              d: 'Produce kernicterus por desplazamiento de bilirrubina y precipitados letales con calcio; usar Cefotaxima',
              say: 'Jamás indiquen ceftriaxona en el neonato por riesgo de kernicterus y cristales cálcicos pulmonares; la cefalosporina de elección en neonatos es siempre la cefotaxima.',
            },
            {
              t: 'La bolsa recolectora no sirve para confirmar ITU',
              d: 'Falsos positivos > 85%; la muestra para urocultivo debe obtenerse por cateterismo vesical estéril',
              say: 'Nunca tomen un urocultivo por bolsa recolectora debido a su enorme tasa de contaminación. Si te llevas una sola idea de hoy: en el lactante menor febril, la sospecha manda y la punción lumbar no se posterga ante la menor duda. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Enfrentamiento del Síndrome Febril sin Foco en el Lactante',
    root: N(
      'start',
      'Lactante con Fiebre Aguda (Temperatura >= 38.0°C) sin Foco Evidente al Examen Físico',
      'Evaluación inicial de signos vitales, escala de observación de Yale, signos de toxicidad y edad cronológica exacta',
      'Iniciamos la evaluación clínica clasificando al paciente según su edad y evaluando de inmediato si presenta signos de toxicidad clínica.',
      [
        'Presencia de signos de toxicidad clínica o apariencia séptica (Escala de Yale >= 16, letargia o mala perfusión)',
        N(
          'alert',
          'Sepsis Probable / Choque Séptico: Reanimación Inmediata',
          'Vía venosa urgente · Cargas de suero fisiológico a 20 mL/kg · Estudio séptico completo con punción lumbar · Cefotaxima EV inmediata',
          'Ante un niño séptico tóxico se procede a reanimación vascular inmediata con fluidos y antibióticos parenterales de amplio espectro.',
        ),
      ],
      [
        'Buen estado general aparente: Estratificación estricta según edad cronológica',
        N(
          'q',
          '¿En qué rango etario se ubica el lactante para definir el protocolo?',
          'Selección de conducta según madurez inmunológica y riesgo de bacteriemia oculta',
          'En el niño con buen estado general evaluamos la edad cronológica para aplicar el protocolo correspondiente.',
          [
            'Neonato menor de 28 días de vida (cero a veintisiete días)',
            N(
              'refer',
              'Alto Riesgo Absoluto: Hospitalización Neonatal Mandatoria',
              'Hospitalizar en neonatología · Estudio séptico completo: hemograma, hemocultivos x 2, punción lumbar y urocultivo por sonda · Ampicilina + Cefotaxima EV',
              'El recién nacido se hospitaliza de manera obligatoria realizando punción lumbar e iniciando ampicilina más cefotaxima endovenosa.',
            ),
          ],
          [
            'Lactante de 29 a 90 días de vida (uno a tres meses)',
            N(
              'q',
              '¿Cumple la totalidad de los criterios clínicos y de laboratorio de Rochester?',
              'Evaluación de antecedentes de término, hemograma (5.000-15.000, baciliformes < 1.500) y sedimento urinario normal',
              'En lactantes de uno a tres meses aplicamos los criterios de Rochester clínicos y de laboratorio.',
              [
                'Cumple TODOS los criterios de bajo riesgo de Rochester',
                N(
                  'ok',
                  'Manejo Ambulatorio de Bajo Riesgo sin Antibióticos',
                  'Manejo en domicilio con paracetamol SOS · Pautas estrictas de alarma a padres · Control médico presencial obligatorio a las 24 horas en APS',
                  'Si cumple todos los criterios se maneja en casa con paracetamol y control presencial obligatorio a las veinticuatro horas.',
                ),
              ],
              [
                'Falla UNO o más criterios de Rochester (Alto riesgo relativo)',
                N(
                  'refer',
                  'Alto Riesgo: Hospitalización y Punción Lumbar',
                  'Hospitalización formal · Punción lumbar para estudio de LCR · Urocultivo por sonda · Cefotaxima o Ceftriaxona EV empírica',
                  'Si falla cualquier criterio se hospitaliza para punción lumbar y tratamiento con cefalosporinas de tercera generación.',
                ),
              ],
            ),
          ],
          [
            'Lactante de 3 a 36 meses con vacunas al día y buen estado general',
            N(
              'do',
              'Descarte Dirigido de Infección del Tracto Urinario (ITU)',
              'Orina completa y urocultivo por cateterismo en niñas < 24m o niños < 12m si T° > 39°C o fiebre > 48h · Manejo ambulatorio con signos de alarma',
              'En mayores de tres meses descartamos infección urinaria por sondeo y mantenemos observación ambulatoria con pautas de alarma.',
            ),
          ],
        ),
      ],
    ),
  },
};
