// Clase 18.13 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-13).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-13',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Infección del tracto urinario en pediatría, métodos de recolección, ITU febril versus cistitis, antibióticos parenterales y orales, contraindicación de nitrofurantoína y estudio por imágenes',
      say: 'Bienvenidos a la clase sobre infección del tracto urinario en pediatría, uno de los cuadros infecciosos bacterianos más trascendentes en la infancia y un tema evaluado con alta frecuencia en el examen EUNACOM. En esta sesión dominaremos las técnicas estériles de recolección de orina, desarmaremos la clásica trampa diagnóstica de la bolsa recolectora, aprenderemos a elegir el antibiótico correcto según la edad y fijaremos el algoritmo de estudio por imágenes con ecografía, uretrocistografía y cintigrama renal. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología urológica',
      title: 'Vía Ascendente, Colonización Vesical e Invasión del Parénquima Renal',
      nodes: [
        { id: 'col', col: 0, row: 1, k: 'start', t: 'Colonización perineal fecal', s: 'Enterobacterias colónicas patógenas se adhieren al introito o prepucio' },
        { id: 'asc', col: 1, row: 1, k: 'mech', t: 'Ascenso uretral a vejiga', s: 'Multiplicación bacteriana rápida en la orina vesical con cistitis local' },
        { id: 'ref', col: 2, row: 1, k: 'risk', t: 'Reflujo vesicoureteral ascendente', s: 'Propagación retrógrada de bacterias hacia pelvis y cálices renales' },
        { id: 'cic', col: 3, row: 1, k: 'alert', t: 'Pielonefritis y cicatriz renal', s: 'Respuesta inflamatoria con daño cortical permanente e hipertensión' },
      ],
      edges: [
        { from: 'col', to: 'asc', label: 'adhesinas fimbriales' },
        { from: 'asc', to: 'ref', label: 'incompetencia valvular' },
        { from: 'ref', to: 'cic', label: 'endotoxinas e isquemia' },
      ],
      steps: [
        {
          show: ['col', 'asc'],
          note: 'Colonización por uropatógenos entéricos y ascenso vesical',
          say: 'La gran mayoría de las infecciones urinarias pediátricas se originan por vía retrógrada ascendente a partir de bacilos gramnegativos entéricos, fundamentalmente cepas de Escherichia coli uropatógena dotadas de fimbrias que se adhieren a la mucosa urotelial y ascienden por la uretra hacia la vejiga.',
        },
        {
          show: ['ref', 'cic'],
          note: 'Ascenso al parénquima renal y cascada inflamatoria que genera cicatriz',
          say: 'Cuando existe incompetencia de la unión vesicoureteral o factores de virulencia microbiana agresivos, los gérmenes ascienden hacia el parénquima renal, desencadenando una intensa respuesta leucocitaria liberadora de citoquinas y enzimas proteolíticas que destruyen tejido tubular y glomerulares, dejando cicatrices corticales fijas que predisponen a hipertensión arterial y proteinuria a largo plazo.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Epidemiología y factores de riesgo',
      title: 'Predisposición según Edad, Sexo y Anomalías Estructurales',
      cards: [
        {
          title: 'Epidemiología según Grupo Etario y Sexo',
          tag: 'Inversión epidemiológica en el primer año',
          kind: 'key',
          items: [
            {
              t: 'Varones menores de tres meses y prepucio redundante',
              d: 'Mayor incidencia en niños varones pequeños por colonización prepucial activa y mayor frecuencia de malformaciones congénitas',
              say: 'Durante los primeros tres meses de vida la infección urinaria es más prevalente en niños de sexo masculino, especialmente aquellos no circuncidados debido a la abundante colonización bacteriana subprepucial.',
            },
            {
              t: 'Lactantes mayores y niñas: predominio femenino marcado',
              d: 'A partir del sexto mes las mujeres representan más del setenta y cinco por ciento de los casos por uretra corta anatómica',
              say: 'Posterior al tercer mes de vida se produce un marcado vuelco epidemiológico, convirtiéndose en una patología de predominio femenino indiscutido por la cercanía entre el ano y la corta uretra de las niñas.',
            },
          ],
        },
        {
          title: 'Factores de Riesgo Anatómicos y Funcionales',
          tag: 'Uropatías y disfunción del piso pélvico',
          kind: 'alert',
          items: [
            {
              t: 'Malformaciones nefrourológicas congénitas',
              d: 'Estenosis de la unión pieloureteral, valvas de uretra posterior, doble sistema colector y reflujo vesicoureteral primario',
              say: 'La presencia de malformaciones estructurales urinarias genera estasis de orina y reflujo retrógrado, convirtiendo a los niños afectados en pacientes de altísimo riesgo de pielonefritis recurrente.',
            },
            {
              t: 'Constipación intestinal crónica y disfunción miccional',
              d: 'El fecaloma rectal comprime el cuello vesical impidiendo el vaciamiento completo y facilitando la translocación fecal',
              say: 'La retención fecal crónica y los hábitos miccionales defectuosos causan vaciamiento incompleto de la vejiga y sobrecrecimiento de patógenos, siendo el factor de riesgo funcional corregible más frecuente.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Métodos de recolección de orina',
      title: 'Técnicas de Toma de Muestra: La Trampa de la Bolsa Recolectora',
      cards: [
        {
          title: 'Bolsa Recolectora Perineal: Peligro Diagnóstico',
          tag: 'Tasa inaceptable de falsos positivos mayor al ochenta por ciento',
          kind: 'alert',
          items: [
            {
              t: 'Contaminación inevitable por flora de piel y periné',
              d: 'La flora comensal perineal coloniza el plástico de la bolsa en minutos, arrojando falsos sedimentos patológicos y cultivos polimicrobianos',
              say: 'La bolsa recolectora perineal jamás debe emplearse para confirmar una infección urinaria ni mucho menos para sembrar un urocultivo sobre el cual fundar un tratamiento antibiótico, ya que su tasa de falsos positivos supera el ochenta por ciento.',
            },
            {
              t: 'Única utilidad médica: Alto valor predictivo negativo',
              d: 'Si el sedimento de orina obtenido por bolsa resulta absolutamente limpio y sin leucocitos, descarta con seguridad la presencia de ITU',
              say: 'La única utilidad aceptada de la bolsa es descartar el cuadro: si la orina es totalmente normal, no hay infección. Pero si muestra leucocitos o bacterias, estamos obligados a obtener una muestra por cateterismo estéril.',
            },
          ],
        },
        {
          title: 'Técnicas Estériles Fidedignas en Lactantes',
          tag: 'Procedimientos obligados antes de indicar antibióticos',
          kind: 'criteria',
          items: [
            {
              t: 'Cateterismo vesical transuretral estéril (Sondeo)',
              d: 'Técnica de elección habitual en servicios de urgencia y salas de hospitalización en lactantes sin control de esfínteres',
              say: 'El sondeo vesical transuretral con técnica aséptica es el estándar clínico en el lactante sin control de esfínteres, permitiendo recolectar orina fidedigna para sedimento y urocultivo cuantitativo inmediato.',
            },
            {
              t: 'Punción suprapúbica vesical guiada por ecografía',
              d: 'Estándar de oro indiscutible en menores de seis meses con vejiga pletórica visualizada por ecógrafo a pie de cama',
              say: 'La punción suprapúbica es el estándar de oro absoluto, libre de cualquier contacto uretral. En menores de seis meses guiada por ecografía es rápida, segura y cualquier crecimiento bacteriano en ella confirma la infección.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Criterios microbiológicos cuantitativos',
      title: 'Interpretación Cuantitativa del Urocultivo según Método de Toma',
      head: ['Método de Recolección', 'Umbral Diagnóstico (UFC/mL)', 'Riesgo de Contaminación', 'Conducta Médica Obligada'],
      rows: [
        {
          cells: ['Punción suprapúbica', 'Cualquier recuento (> 0)', 'Prácticamente nulo', 'Diagnóstico de certeza de ITU'],
          say: 'En punción suprapúbica, cualquier número de unidades formadoras de colonias de un bacilo gramnegativo es confirmatorio indiscutible de infección urinaria activa.',
        },
        {
          cells: ['Cateterismo vesical estéril', 'Mayor o igual a 50.000', 'Bajo si se realiza estéril', 'Confirmación estándar en lactante'],
          say: 'En muestra obtenida por sondeo vesical estéril, la Academia Americana de Pediatría define corte positivo ante cincuenta mil colonias monomicrobianas acompañadas de piuria.',
        },
        {
          cells: ['Segundo chorro limpio', 'Mayor o igual a 100.000', 'Moderado si falta aseo', 'Aplicable solo en niños que controlan'],
          say: 'En niños mayores que controlan esfínteres, la toma por segundo chorro exige al menos cien mil unidades formadoras de colonias de un único uropatógeno.',
        },
        {
          cells: ['Bolsa recolectora perineal', 'No interpretable (> 80% falsos)', 'Extremadamente alto', 'Nunca iniciar antibiótico sin sondeo'],
          say: 'El urocultivo por bolsa carece por completo de validez diagnóstica. Si el sedimento está alterado, es imperativo realizar sondeo vesical previo al inicio de antibióticos.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Clínica y diagnóstico diferencial',
      title: 'Pielonefritis Aguda versus Cistitis Aguda en Pediatría',
      cards: [
        {
          title: 'Pielonefritis Aguda (ITU Febril o Alta)',
          tag: 'Compromiso parenquimatoso con riesgo de cicatriz renal',
          kind: 'alert',
          items: [
            {
              t: 'Fiebre alta, compromiso del estado general y dolor lumbar',
              d: 'Temperatura superior a 38.5 grados, letargia o irritabilidad, vómitos reiterados, dolor en flanco o puñopercusión positiva',
              say: 'La pielonefritis aguda se manifiesta como un cuadro sistémico febril con temperatura elevada sobre treinta y ocho coma cinco grados, decaimiento marcado, dolor lumbar o abdominal y elevación masiva de proteína C reactiva.',
            },
            {
              t: 'Regla del lactante menor: Toda ITU es pielonefritis',
              d: 'En menores de dos años resulta imposible delimitar clínicamente la infección a la vejiga, asumiéndose siempre afección parenquimatosa',
              say: 'En lactantes menores de veinticuatro meses resulta imposible descartar afectación parenquimatosa, por lo cual todo episodio con urocultivo positivo en presencia de fiebre debe diagnosticarse y manejarse como pielonefritis aguda.',
            },
          ],
        },
        {
          title: 'Cistitis Aguda (ITU Baja Afebril)',
          tag: 'Infección localizada exclusivamente en mucosa vesical',
          kind: 'normal',
          items: [
            {
              t: 'Síntomas miccionales irritativos sin fiebre ni toxicidad',
              d: 'Disuria, poliaquiuria, tenesmo vesical, enuresis secundaria o dolor suprapúbico en niños preescolares o escolares',
              say: 'La cistitis se limita a la vejiga y se observa típicamente en niños mayores con disuria, polaquiuria, tenesmo y dolor suprapúbico, cursando invariablemente sin fiebre y sin repercusión sistémica.',
            },
            {
              t: 'Ausencia total de riesgo parenquimatoso',
              d: 'No existe invasión tubular ni peligro de cicatriz renal cortical, permitiendo manejo exclusivamente ambulatorio',
              say: 'La cistitis no genera cicatrices renales permanentes ni compromete la función del órgano, por lo que su pronóstico es benigno y no requiere hospitalización ni estudios invasivos.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Algoritmo de actuación clínica',
      title: 'Enfrentamiento Metódico del Lactante con Sospecha de ITU Febril',
      nodes: [
        { id: 'f1', col: 0, row: 1, k: 'start', t: 'Lactante febril sin foco', s: 'Temperatura axilar mayor o igual a 38.0 grados sin hallazgos al examen' },
        { id: 'f2', col: 1, row: 1, k: 'q', t: 'Control de esfínteres', s: 'Verificar si niño avisa micción o utiliza pañales permanentemente' },
        { id: 'f3', col: 2, row: 1, k: 'good', t: 'Cateterismo estéril urgente', s: 'Aseo perineal y sondeo estéril para sedimento y urocultivo' },
        { id: 'f4', col: 3, row: 1, k: 'mech', t: 'Sedimento con leucocituria', s: 'Más de diez leucocitos por campo, bacterias o nitritos positivos' },
        { id: 'f5', col: 4, row: 1, k: 'effect', t: 'Inicio antibiótico dirigido', s: 'Elección según edad, tolerancia oral y gravedad clínica' },
      ],
      edges: [
        { from: 'f1', to: 'f2', label: 'anamnesis' },
        { from: 'f2', to: 'f3', label: 'no controla esfínteres' },
        { from: 'f3', to: 'f4', label: 'microscopía' },
        { from: 'f4', to: 'f5', label: 'siembra urocultivo' },
      ],
      steps: [
        {
          show: ['f1', 'f2', 'f3'],
          note: 'Identificación del lactante sin foco y técnica aséptica obligatoria',
          say: 'Frente a un lactante con fiebre sin foco evidente en el examen físico y que no controla esfínteres, el paso inicial impostergable es realizar un cateterismo vesical estéril tras un cuidadoso aseo perineal.',
        },
        {
          show: ['f4', 'f5'],
          note: 'Confirmación microscópica, siembra de urocultivo e inicio terapéutico',
          say: 'Si el sedimento urinario evidencia piuria significativa con más de diez leucocitos por campo o nitritos reactivos, se siembra de inmediato el urocultivo cuantitativo y se procede al inicio del tratamiento antibiótico empírico ajustado a la edad.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estratificación y derivación',
      title: 'Criterios de Hospitalización Mandatoria en ITU Pediátrica',
      cards: [
        {
          title: 'Criterios de Ingreso Inmediato en Cuidado Cerrado',
          tag: 'Pacientes con alto riesgo de complicaciones o sepsis',
          kind: 'criteria',
          items: [
            {
              t: 'Edad cronológica menor a tres meses de vida',
              d: 'Riesgo extremo de bacteriemia concomitante, urosepsis, choque endotóxico y daño tisular renal precoz',
              say: 'Todo lactante menor de tres meses con infección urinaria febril debe hospitalizarse de forma mandatoria para administración de terapia antimicrobiana endovenosa y monitorización estrecha de sepsis.',
            },
            {
              t: 'Aspecto séptico, toxicidad clínica o deshidratación',
              d: 'Llenado capilar enlentecido, letargia, irritabilidad inconsolable o vómitos incoercibles que impiden medicación oral',
              say: 'La presencia de aspecto tóxico, signos de hipoperfusión periférica, deshidratación moderada o vómitos incoercibles que impiden la vía oral exige internación inmediata para reposición hidroelectrolítica parenteral.',
            },
          ],
        },
        {
          title: 'Factores de Riesgo Subyacentes y Criterio Social',
          tag: 'Comorbilidades nefrológicas y vulnerabilidad familiar',
          kind: 'key',
          items: [
            {
              t: 'Anomalía urológica conocida o paciente monorreno',
              d: 'Reflujo vesicoureteral de alto grado, hidronefrosis severa o riñón único con riesgo inminente de falla renal',
              say: 'Los pacientes con malformaciones nefrourológicas conocidas, monorrenos o con antecedentes de daño renal previo deben internarse ante el riesgo inminente de deterioro funcional del parénquima.',
            },
            {
              t: 'Riesgo social o imposibilidad de control precoz',
              d: 'Familias con ruralidad extrema, falta de comprensión o imposibilidad demostrada de reevaluación médica en 48 horas',
              say: 'La falta de garantías para un control médico presencial en cuarenta y ocho horas o la vulnerabilidad sociofamiliar severa constituyen indicación formal de ingreso hospitalario transitorio.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapéutica hospitalaria',
      title: 'Antibioticoterapia Parenteral en Pacientes Hospitalizados',
      cards: [
        {
          title: 'Cefalosporinas de Tercera Generación Endovenosas',
          tag: 'Tratamiento de primera línea en pielonefritis hospitalizada',
          kind: 'pharma',
          items: [
            {
              t: 'Cefotaxima endovenosa: Primera línea estándar',
              d: 'Cien a ciento cincuenta miligramos por kilo día divididos cada ocho horas por vía endovenosa',
              say: 'La cefotaxima endovenosa a dosis de cien a ciento cincuenta miligramos por kilo día es el antibiótico de elección en lactantes hospitalizados por su excelente penetración tisular y perfil de seguridad.',
            },
            {
              t: 'Ceftriaxona endovenosa: Excelente en mayores de un mes',
              d: 'Setenta y cinco miligramos por kilo día en dosis única diaria; evitar formalmente en neonatos con hiperbilirrubinemia',
              say: 'La ceftriaxona en dosis única diaria es muy cómoda en niños mayores de un mes, pero debe evitarse rigurosamente en el período neonatal por su competencia con la bilirrubina por la albúmina sérica.',
            },
          ],
        },
        {
          title: 'Esquema Neonatal: Ampicilina más Aminoglucósido',
          tag: 'Cobertura ampliada para Listeria y Enterococo',
          kind: 'pharma',
          items: [
            {
              t: 'Ampicilina asociada a Gentamicina o Amikacina',
              d: 'Ampicilina cien a doscientos miligramos por kilo día más Gentamicina cinco miligramos por kilo día en dosis única',
              say: 'En neonatos y menores de dos meses, el esquema clásico combina ampicilina para cubrir Listeria monocytogenes y enterococo, más gentamicina para una potente sinergia bactericida contra gramnegativos.',
            },
            {
              t: 'Transición a vía oral (Switch terapéutico)',
              d: 'Tras 48 a 72 horas afebril con mejoría clínica evidente y urocultivo con antibiograma en mano, completar 10 a 14 días',
              say: 'Una vez completadas cuarenta y ocho a setenta y dos horas afebril con franca mejoría clínica, se efectúa el cambio a vía oral con antibiótico según antibiograma hasta completar diez a catorce días totales.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Terapéutica ambulatoria',
      title: 'Manejo Ambulatorio de la ITU Febril de Bajo Riesgo',
      cards: [
        {
          title: 'Cefalosporinas Orales de Primera Generación',
          tag: 'Esquema oral de elección en lactante mayor estable',
          kind: 'pharma',
          items: [
            {
              t: 'Cefadroxilo oral: Estándar ambulatorio en Chile',
              d: 'Cincuenta miligramos por kilo día divididos en dos tomas cada doce horas durante siete a diez días',
              say: 'En lactantes mayores de tres meses en buen estado general que toleran plenamente la vía oral, el cefadroxilo oral a cincuenta miligramos por kilo día cada doce horas es el fármaco de primera línea.',
            },
            {
              t: 'Excelente concentración urinaria y tisular',
              d: 'Alcanza concentraciones terapéuticas bactericidas en orina y corteza renal frente a cepas de Escherichia coli sensibles',
              say: 'El cefadroxilo ofrece una óptima biodisponibilidad digestiva y alcanza excelentes concentraciones en el parénquima renal, permitiendo tratar la pielonefritis no complicada en el hogar.',
            },
          ],
        },
        {
          title: 'Condiciones Obligatorias para el Manejo Ambulatorio',
          tag: 'Parámetros de seguridad que garantizan el éxito',
          kind: 'criteria',
          items: [
            {
              t: 'Tolerancia oral comprobada en el box de urgencia',
              d: 'Administración supervisada de fluidos o medicamentos en el servicio antes de autorizar el alta a domicilio',
              say: 'Es imperativo certificar que el niño retiene líquidos y medicamentos en el box de atención antes de indicar el tratamiento domiciliario, evitando fracasos por vómitos inadvertidos.',
            },
            {
              t: 'Control médico obligatorio en cuarenta y ocho horas',
              d: 'Cita médica presencial agendada para corroborar cese de fiebre, buen estado general y ajuste según urocultivo definitivo',
              say: 'El manejo ambulatorio exige citar a un control médico presencial obligatorio en cuarenta y ocho horas para verificar la defervescencia térmica y ajustar la terapia según el antibiograma.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Perla farmacológica de alta rentabilidad',
      title: 'Contraindicación Absoluta: Nitrofurantoína en ITU Febril',
      cards: [
        {
          title: '¿Por qué Nitrofurantoína JAMÁS se usa en Pielonefritis?',
          tag: 'Farmacocinética nefrológica crítica en el examen',
          kind: 'alert',
          items: [
            {
              t: 'Cero concentración terapéutica en parénquima renal',
              d: 'Se absorbe con rapidez pero se elimina de inmediato por filtración glomerular, concentrándose exclusivamente en vejiga',
              say: 'La nitrofurantoína se excreta rápidamente hacia el lumen vesical sin alcanzar concentraciones medibles en el parénquima renal ni en la sangre, por lo que carece por completo de actividad sobre la corteza renal.',
            },
            {
              t: 'Peligro inminente de absceso renal y sepsis invasiva',
              d: 'Administrar nitrofurantoína en una ITU febril equivale a dejar la pielonefritis sin antibiótico, facilitando la destrucción tisular',
              say: 'Prescribir nitrofurantoína en una pielonefritis aguda equivale a dejar la infección sin cobertura, provocando progresión hacia abscesos renales, bacteriemia persistente y extensas cicatrices corticales.',
            },
          ],
        },
        {
          title: 'Indicaciones Exclusivas de Nitrofurantoína en Pediatría',
          tag: 'Solo dos escenarios clínicos validados',
          kind: 'pharma',
          items: [
            {
              t: 'Cistitis aguda afebril en niños mayores',
              d: 'Cinco a siete miligramos por kilo día fraccionados cada seis u ocho horas durante cinco días en infección baja',
              say: 'La nitrofurantoína es un excelente fármaco para la cistitis aguda no complicada en niños mayores de tres meses, donde la infección está confinada estrictamente a la vejiga.',
            },
            {
              t: 'Quimioprofilaxis nocturna en dosis reducida',
              d: 'Uno a dos miligramos por kilo día en una sola toma nocturna para prevenir recurrencias en reflujo de alto grado',
              say: 'Su otra indicación estandarizada es la profilaxis a bajas dosis en toma única nocturna en pacientes seleccionados con reflujo vesicoureteral severo o uropatías obstructivas.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Arsenal farmacológico comparativo',
      title: 'Antibióticos de Uso Frecuente en Infección Urinaria Pediátrica',
      head: ['Fármaco', 'Vía de Elección', 'Indicación Clínica Precisa', 'Advertencia Farmacológica'],
      rows: [
        {
          cells: ['Cefotaxima', 'Endovenosa', 'Pielonefritis hospitalizada', 'Excelente espectro en lactantes pequeños'],
          say: 'La cefotaxima endovenosa es el betalactámico de referencia en lactantes hospitalizados por pielonefritis aguda.',
        },
        {
          cells: ['Cefadroxilo', 'Oral', 'ITU febril ambulatoria', 'Primera línea oral en mayores de tres meses'],
          say: 'El cefadroxilo oral representa el tratamiento estándar ambulatorio para ITU febril en niños estables.',
        },
        {
          cells: ['Gentamicina', 'Endovenosa o IM', 'Sepsis neonatal con ampicilina', 'Monitorear función renal y niveles séricos'],
          say: 'La gentamicina se asocia a ampicilina en sepsis urinaria neonatal, requiriendo vigilar la función del riñón.',
        },
        {
          cells: ['Nitrofurantoína', 'Oral exclusiva', 'Cistitis baja o profilaxis', 'Prohibida en pielonefritis o lactante febril'],
          say: 'La nitrofurantoína está estrictamente prohibida en infecciones urinarias febriles por falta de nivel en parénquima.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudio de imágenes escalonado',
      title: 'Ecografía Renal y Vesical: Estudio Obligado de Primera Línea',
      cards: [
        {
          title: 'Ecografía Renal y Vesical en Todo Primer Episodio',
          tag: 'Examen de detección anatómica universal inocuo',
          kind: 'key',
          items: [
            {
              t: 'Indicación universal tras primer episodio de ITU febril',
              d: 'Debe solicitarse a todo lactante o niño menor con diagnóstico confirmado de ITU febril, sin excepciones',
              say: 'La ecografía renal y vesical es obligatoria en todo paciente pediátrico tras su primer episodio confirmado de infección urinaria febril, constituyendo el examen inicial no invasivo por excelencia.',
            },
            {
              t: 'Objetivos anatómicos principales de la ecografía',
              d: 'Descartar uropatías obstructivas mayores, dilatación pielocalicial, hidronefrosis, duplicidad ureteral o pionefrosis',
              say: 'Su objetivo primordial es identificar malformaciones anatómicas mayores como hidronefrosis, litiasis, sistemas colectores dobles o signos sugestivos de valvas uretrales posteriores.',
            },
          ],
        },
        {
          title: 'Momento Óptimo y Limitaciones Anatómicas',
          tag: 'Cuándo pedirla de urgencia y qué no puede ver',
          kind: 'criteria',
          items: [
            {
              t: 'Oportunidad: Urgente en mala respuesta, diferida si evoluciona bien',
              d: 'Si persiste febril tras 48 horas de antibióticos se realiza urgente; si la respuesta es óptima se agenda ambulatoria',
              say: 'Si el paciente presenta mala evolución con fiebre persistente a las cuarenta y ocho horas se realiza de urgencia buscando abscesos. Si evoluciona bien, se efectúa de manera diferida ambulatoria.',
            },
            {
              t: 'Limitación: No descarta reflujo vesicoureteral leve o moderado',
              d: 'Una ecografía completamente normal no excluye la presencia de reflujo grado uno a tres en vías urinarias no dilatadas',
              say: 'Es crucial recordar que una ecografía renal normal no descarta la presencia de reflujo vesicoureteral moderado, dado que solo detecta cambios cuando existe dilatación o distorsión calicial.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estudios de segunda línea',
      title: 'Uretrocistografía Miccional y Cintigrama DMSA',
      cards: [
        {
          title: 'Uretrocistografía Miccional Seriada (UCG)',
          tag: 'Estándar de oro para reflujo vesicoureteral y uretra',
          kind: 'criteria',
          items: [
            {
              t: 'Indicaciones precisas de uretrocistografía',
              d: 'Ecografía renal patológica con dilatación, ITU febril recurrente, septicemia urinaria o infección por germen distinto a Escherichia coli',
              say: 'La uretrocistografía miccional se indica formalmente ante una ecografía renal alterada, recurrencia de episodios febriles, urosepsis o infección por patógenos distintos de Escherichia coli.',
            },
            {
              t: 'Evaluación del reflujo y patología uretral masculina',
              d: 'Gradúa el reflujo en cinco estadios y es el método diagnóstico definitivo de las valvas de uretra posterior en varones',
              say: 'La uretrocistografía permite diagnosticar y clasificar el reflujo vesicoureteral del grado uno al cinco, siendo además el examen de elección para diagnosticar valvas de uretra posterior.',
            },
          ],
        },
        {
          title: 'Cintigrama Renal DMSA: Detección de Cicatrices',
          tag: 'Medicina nuclear para evaluar secuelas corticales',
          kind: 'key',
          items: [
            {
              t: 'Evaluación a los seis meses del episodio agudo',
              d: 'El examen con ácido dimercaptosuccínico debe realizarse al menos 6 meses después para no confundir inflamación con cicatriz',
              say: 'El cintigrama renal con ácido dimercaptosuccínico debe solicitarse al menos seis meses después de la infección para asegurar que los defectos de captación representan cicatrices fijas y no edema agudo.',
            },
            {
              t: 'Impacto pronóstico en función renal relativa',
              d: 'Mide la masa tubular funcionante de cada riñón por separado y cuantifica el daño parenquimatoso permanente',
              say: 'El cintigrama cuantifica con exactitud la función renal diferencial de cada riñón, identificando pérdida de masa cortical que requiera seguimiento por nefrología pediátrica.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de estudio y manejo',
      title: 'Algoritmo Escalonado de Diagnóstico, Manejo e Imágenes en ITU Febril',
      say: 'Examinemos el algoritmo integral para el enfrentamiento metódico de la infección urinaria febril, integrando la confirmación diagnóstica, la antibioticoterapia y el estudio por imágenes.',
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.049',
      title: 'Toma de Muestra y Conducta en Lactante Febril',
      stem: 'Una lactante de 8 meses presenta fiebre de 39°C sin foco clínico evidente. Se realiza toma de muestra de orina mediante bolsa recolectora perineal, cuyo sedimento informa: leucocitos 30 por campo, nitritos positivos y bacterias abundantes.',
      question: '¿Cuál es la conducta médica correcta antes de iniciar el tratamiento antibiótico definitivo?',
      options: [
        { letter: 'A', text: 'Iniciar de inmediato Nitrofurantoína oral ambulatoria basada en el resultado de la bolsa recolectora' },
        { letter: 'B', text: 'Realizar cateterismo vesical estéril (sondeo) para confirmar el sedimento y sembrar urocultivo fidedigno' },
        { letter: 'C', text: 'Esperar 48 horas sin tratamiento para que el urocultivo de la bolsa recolectora confirme el diagnóstico' },
        { letter: 'D', text: 'Indicar Ciprofloxacino oral y solicitar cintigrama DMSA urgente' },
        { letter: 'E', text: 'Dar el alta con paracetamol considerando que la bolsa recolectora siempre es contaminante y descartar ITU' },
      ],
      correct: 'B',
      explanation: 'La bolsa recolectora perineal presenta una tasa inaceptable de contaminación bacteriana que supera el 80% de falsos positivos. Si el sedimento obtenido por bolsa resulta patológico en un lactante febril sin control de esfínteres, la norma de la Academia Americana de Pediatría y de la Sociedad Chilena de Pediatría exige confirmar el resultado mediante cateterismo vesical estéril (o punción suprapúbica) para microscopía y siembra de urocultivo cuantitativo antes de iniciar antibióticos definitivos. Además, la nitrofurantoína está contraindicada en ITU febril.',
      say: {
        stem: 'Lactante de ocho meses febril sin foco con sedimento patológico obtenido mediante bolsa recolectora perineal.',
        question: '¿Cuál es la conducta médica correcta antes de iniciar el tratamiento antibiótico definitivo?',
        options: 'La opción A nitrofurantoína oral inmediata. La B realizar cateterismo vesical estéril para confirmar sedimento y urocultivo. La C esperar cultivo de bolsa. La D ciprofloxacino y cintigrama. La E alta con paracetamol descartando infección. Recuerda la tasa de falsos positivos. Piénsalo.',
        answer: 'La respuesta correcta es la B. La bolsa recolectora no sirve para confirmar; ante un sedimento alterado es obligatorio realizar cateterismo vesical estéril.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.1.049',
      title: 'Contraindicación Farmacológica en Pielonefritis Aguda',
      stem: '¿Cuál de los siguientes antibióticos está FORMALMENTE CONTRAINDICADO como tratamiento de primera línea en una Pielonefritis Aguda (ITU febril) pediátrica debido a que no alcanza concentraciones terapéuticas en el parénquima renal?',
      options: [
        { letter: 'A', text: 'Cefadroxilo' },
        { letter: 'B', text: 'Cefotaxima' },
        { letter: 'C', text: 'Nitrofurantoína' },
        { letter: 'D', text: 'Ceftriaxona' },
        { letter: 'E', text: 'Gentamicina' },
      ],
      correct: 'C',
      explanation: 'La Nitrofurantoína se absorbe rápidamente pero se excreta de forma casi exclusiva hacia la orina vesical, sin alcanzar concentraciones tisulares activas en el parénquima renal ni en el torrente sanguíneo. Por ello, está formalmente contraindicada en pielonefritis aguda, ITU febril y urosepsis, reservándose exclusivamente para cistitis afebril de vía urinaria baja o quimioprofilaxis nocturna en reflujo vesicoureteral.',
      say: {
        stem: 'Pregunta directa sobre el antibiótico formalmente contraindicado como tratamiento de primera línea en pielonefritis aguda pediátrica.',
        question: '¿Cuál de los siguientes antibióticos carece de concentraciones terapéuticas en el parénquima renal?',
        options: 'La opción A cefadroxilo. La B cefotaxima. La C nitrofurantoína. La D ceftriaxona. La E gentamicina. Analiza la farmacocinética tisular. Piénsalo.',
        answer: 'La respuesta correcta es la C. La nitrofurantoína solo se concentra en la vejiga y está contraindicada en infecciones urinarias febriles.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Puntos Clave y Perlas Indispensables en ITU Pediátrica',
      cards: [
        {
          title: 'Diagnóstico y Toma de Muestra Confiable',
          tag: 'Procedimientos microbiológicos rigurosos',
          kind: 'key',
          items: [
            {
              t: 'Bolsa alterada exige sondeo vesical previo a tratar',
              d: 'Jamás fundar un diagnóstico ni un tratamiento en urocultivo de bolsa; confirmar siempre con técnica estéril',
              say: 'La bolsa recolectora solo sirve si es normal. Si sale alterada, el cateterismo vesical estéril es el paso obligatorio antes de administrar cualquier antibiótico.',
            },
            {
              t: 'Lactante menor de tres meses se hospitaliza siempre',
              d: 'Todo menor de tres meses con ITU febril requiere ingreso inmediato para estudio de sepsis y antibioticoterapia endovenosa',
              say: 'Todo lactante febril menor de tres meses con infección urinaria debe hospitalizarse sin demora para terapia parenteral por el alto riesgo de bacteriemia.',
            },
          ],
        },
        {
          title: 'Farmacología y Algoritmo de Imágenes',
          tag: 'Elección terapéutica y seguimiento a largo plazo',
          kind: 'pharma',
          items: [
            {
              t: 'Prohibición absoluta de Nitrofurantoína en fiebre',
              d: 'La nitrofurantoína solo sirve en cistitis baja o profilaxis nocturna; en pielonefritis usar cefadroxilo o cefotaxima',
              say: 'Recuerden que la nitrofurantoína jamás se utiliza ante cuadros febriles. En pacientes ambulatorios la primera línea es cefadroxilo y en hospitalizados cefotaxima.',
            },
            {
              t: 'Ecografía renal universal y uretrocistografía selectiva',
              d: 'Ecografía renal a todo primer episodio febril; UCG si la ecografía es anormal, hay recurrencia o germen atípico',
              say: 'La ecografía renal se indica en todo primer episodio febril. Si te llevas una sola idea de hoy: el diagnóstico de certeza de infección urinaria en lactantes exige urocultivo por cateterismo vesical estéril, jamás por bolsa recolectora. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Diagnóstico, Manejo y Estudio Imagenológico de la ITU Febril Pediátrica',
    root: N(
      'start',
      'Lactante o Niño con Sospecha Clínica de ITU Febril (Temperatura >= 38.5°C)',
      'Fiebre sin foco en lactante o cuadro febril con dolor abdominal, vómitos o compromiso sistémico',
      'Iniciamos el abordaje del paciente febril verificando de inmediato el método adecuado para la recolección de orina.',
      [
        'Paciente sin control de esfínteres (Lactante con pañales)',
        N(
          'q',
          '¿Método de toma de muestra de orina empleado en la urgencia?',
          'Técnica estéril mandatoria versus bolsa recolectora',
          'En el lactante sin control evaluamos la técnica utilizada para la obtención de la muestra de orina.',
          [
            'Muestra obtenida por bolsa recolectora con sedimento patológico',
            N(
              'alert',
              'Contaminación Muy Probable: Confirmación Estéril Obligatoria',
              'Prohibido iniciar tratamiento solo con bolsa · Realizar cateterismo vesical estéril (sondeo) o punción suprapúbica · Repetir sedimento y urocultivo',
              'La bolsa perineal tiene más de ochenta por ciento de falsos positivos; ante sedimento alterado es obligatorio sondear al paciente.',
            ),
          ],
          [
            'Cateterismo vesical estéril realizado: Sedimento con piuria y nitritos',
            N(
              'q',
              '¿Presenta criterios de hospitalización mandatoria o aspecto tóxico?',
              'Edad menor a 3 meses, vómitos incoercibles, deshidratación o aspecto séptico',
              'Con la muestra estéril confirmada evaluamos si el paciente requiere ingreso hospitalario inmediato.',
              [
                'Sí: Menor de 3 meses, aspecto séptico, vómitos o deshidratación',
                N(
                  'refer',
                  'Hospitalización Inmediata y Terapia Parenteral',
                  'Hospitalizar en sala o intermedio · Hemocultivos · Cefotaxima EV 100-150 mg/kg/día (o Ampicilina + Gentamicina en neonatos) · Ecografía renal urgente si no mejora en 48h',
                  'Si es menor de tres meses o presenta toxicidad se hospitaliza de inmediato para tratamiento con cefotaxima endovenosa.',
                ),
              ],
              [
                'No: Mayor de 3 meses, buen estado general y excelente tolerancia oral',
                N(
                  'ok',
                  'Manejo Ambulatorio con Cefadroxilo Oral y Control en 48 Horas',
                  'Cefadroxilo oral 50 mg/kg/día cada 12 horas por 7 a 10 días · Prohibida Nitrofurantoína · Control presencial obligatorio a las 48 horas con urocultivo',
                  'En pacientes estables mayores de tres meses se indica cefadroxilo oral ambulatorio con control presencial en dos días.',
                ),
              ],
            ),
          ],
        ),
      ],
      [
        'Estudio de Imágenes Post-Tratamiento de la ITU Febril',
        N(
          'q',
          '¿Resultado de la Ecografía Renal y Vesical realizada a todo primer episodio?',
          'Búsqueda de hidronefrosis, duplicidad, litiasis o signos de uropatía obstructiva',
          'Tras superar el cuadro febril evaluamos los hallazgos de la ecografía renal obligatoria.',
          [
            'Ecografía patológica, ITU febril recurrente o germen distinto a E. coli',
            N(
              'refer',
              'Solicitar Uretrocistografía Miccional Seriada (UCG)',
              'Estudio de reflujo vesicoureteral (grados 1 a 5) y descarte de valvas de uretra posterior · Evaluar quimioprofilaxis con Nitrofurantoína o Cefadroxilo · DMSA a 6 meses',
              'Ante ecografía alterada o infecciones recurrentes se solicita uretrocistografía para descartar reflujo vesicoureteral.',
            ),
          ],
          [
            'Ecografía completamente normal con evolución clínica favorable',
            N(
              'ok',
              'Seguimiento Clínico Ambulatorio y Control de Factores de Riesgo',
              'Manejo activo de la constipación intestinal · Fomentar vaciamiento vesical frecuente y adecuada ingesta de agua · No requiere profilaxis ni UCG de rutina',
              'Si la ecografía es normal y el niño evoluciona favorablemente se mantiene control clínico y corrección de la constipación.',
            ),
          ],
        ),
      ],
    ),
  },
};
