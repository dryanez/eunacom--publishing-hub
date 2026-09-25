// Clase 1.1 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-01).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-01',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Calendario de controles, cálculo de edad gestacional, suplementación con ácido fólico y batería de exámenes por trimestre',
      say: 'Bienvenidos al módulo tres de ginecología y obstetricia. Iniciamos con la clase fundamental de la especialidad: el control prenatal de bajo riesgo. En esta sesión dominaremos el calendario de controles según las normas técnicas del Ministerio de Salud, el cálculo exacto de la fecha probable de parto, las dosis diferenciales de suplementación con ácido fólico, calcio y fierro, y la batería cronológica de exámenes por trimestre. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Cronología y principios',
      title: 'Principios rectores del control prenatal y cálculo de edad gestacional',
      nodes: [
        { id: 'pre', col: 0, row: 2, k: 'start', t: 'Ingreso precoz', s: 'Ideal antes de las 12 semanas · integral y continuo' },
        { id: 'fur', col: 1, row: 1, k: 'mech', t: 'Regla de Naegele', s: 'FUR confiable: más siete días y menos tres meses' },
        { id: 'eco', col: 2, row: 0, k: 'alert', t: 'Ecografía precoz LCN', s: 'Longitud céfalo-nalgas de 7 a 14 semanas · máxima precisión' },
        { id: 'cor', col: 2, row: 2, k: 'risk', t: 'Ajuste de edad gestacional', s: 'Discrepancia mayor a cinco a siete días corrige FUR' },
        { id: 'per', col: 3, row: 1, k: 'good', t: 'Controles periódicos', s: 'Mensual hasta semana 28 · quincenal a 36 · semanal al parto' },
        { id: 'pla', col: 4, row: 2, k: 'good', t: 'Plan de parto y pesquisa', s: 'Detección temprana de patologías materno-fetales' },
      ],
      edges: [
        { from: 'pre', to: 'fur', label: 'anamnesis' },
        { from: 'fur', to: 'eco', label: 'confirmación' },
        { from: 'fur', to: 'cor', label: 'evaluar desfase' },
        { from: 'eco', to: 'cor', label: 'criterio LCN' },
        { from: 'cor', to: 'per', label: 'cronograma' },
        { from: 'per', to: 'pla', label: 'término' },
      ],
      steps: [
        {
          show: ['pre', 'fur'],
          note: 'Ingreso precoz y regla de Naegele',
          say: 'El control prenatal debe ser precoz, idealmente antes de las doce semanas de gestación, periódico, continuo e integral. Para determinar la fecha probable de parto se utiliza la regla de Naegele a partir de una fecha de última regla segura y confiable: se suman siete días y se restan tres meses al primer día de la última menstruación.',
        },
        {
          show: ['eco', 'cor'],
          note: 'Confirmación y corrección ecográfica',
          say: 'El estándar de máxima precisión para fijar la edad gestacional es la ecografía precoz del primer trimestre mediante la medición de la longitud céfalo-nalgas entre las siete y catorce semanas. Si existe una discrepancia mayor a cinco a siete días entre la fecha de última regla y la ecografía precoz, la edad gestacional se corrige oficialmente por la ecografía.',
        },
        {
          show: ['per', 'pla'],
          note: 'Periodicidad del seguimiento clínico',
          say: 'En un embarazo de bajo riesgo, el calendario estandarizado establece un control mensual hasta la semana veintiocho, luego cada quince días entre las semanas veintiocho y treinta y seis, y finalmente semanal desde la semana treinta y seis hasta el momento del parto.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Evaluación clínica basal',
      title: 'Parámetros obligatorios en cada control prenatal',
      cards: [
        {
          title: 'Examen físico y signos vitales',
          kind: 'criteria',
          items: [
            {
              text: 'Presión arterial sentada con manguito adecuado: pesquisa de hipertensión gestacional.',
              say: 'La toma rigurosa de la presión arterial en el brazo derecho con la paciente sentada es el parámetro físico más relevante en cada control para pesquisar precozmente trastornos hipertensivos del embarazo.',
            },
            {
              text: 'Curva de peso materno e incremento según índice de masa corporal pregestacional.',
              say: 'El incremento ponderal se evalúa con la gráfica de Rosso y Mardones según el estado nutricional inicial: las pacientes con enflaquecimiento deben ganar entre doce y dieciocho kilos, mientras que en pacientes con obesidad se restringe la ganancia entre cinco y nueve kilos.',
            },
          ],
        },
        {
          title: 'Parámetros fetales y obstétricos',
          kind: 'key',
          items: [
            {
              text: 'Altura uterina con huincha métrica desde el borde superior del pubis al fondo uterino.',
              say: 'La altura uterina se mide en centímetros desde la semana veinte. Un crecimiento menor al percentil diez obliga a descartar restricción del crecimiento fetal u oligohidramnios; una altura sobre el percentil noventa orienta a macrosomía o polihidramnios.',
            },
            {
              text: 'Auscultación de latidos cardiofetales con doppler portátil desde las doce semanas.',
              say: 'Los latidos cardiofetales normales oscilan entre ciento diez y ciento sesenta latidos por minuto. Su ausencia o alteración del ritmo obliga a evaluación fetal urgente.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Suplementación farmacológica universal',
      title: 'Ácido fólico: prevención de defectos del tubo neural',
      cards: [
        {
          title: 'Población general de bajo riesgo',
          kind: 'key',
          items: [
            {
              text: 'Dosis estándar: cero coma cuatro a un miligramo al día por vía oral.',
              say: 'En la población general sin factores de riesgo, la recomendación oficial del Ministerio de Salud es indicar ácido fólico en dosis de cero coma cuatro a un miligramo al día por vía oral.',
            },
            {
              text: 'Ventana temporal crítica: tres meses antes de la concepción hasta la semana doce.',
              say: 'Para asegurar el cierre adecuado del tubo neural, que culmina a los veintiocho días postconcepción, el suplemento debe iniciarse al menos tres meses antes del embarazo y continuarse durante todo el primer trimestre hasta la semana doce.',
            },
          ],
        },
        {
          title: 'Población de alto riesgo',
          kind: 'alert',
          items: [
            {
              text: 'Dosis alta: cuatro a cinco miligramos al día por vía oral.',
              say: 'Se debe prescribir una dosis diez veces mayor, de cuatro a cinco miligramos al día, en cuatro situaciones específicas muy preguntadas en el examen.',
            },
            {
              text: 'Indicaciones formales de dosis alta: hijo previo con defecto del tubo neural, diabetes pregestacional, obesidad mórbida o uso de anticonvulsivantes como ácido valproico o carbamazepina.',
              say: 'Las indicaciones categóricas son: antecedente de un hijo previo con anencefalia o espina bífida, madre con diabetes mellitus pregestacional, obesidad materna severa o usuaria de fármacos anticonvulsivantes antifolato como ácido valproico o carbamazepina.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Micronutrientes esenciales',
      title: 'Suplementación con calcio y fierro elemental en el embarazo',
      cards: [
        {
          title: 'Calcio para prevención de preeclampsia',
          kind: 'pharma',
          items: [
            {
              text: 'Dosis de mil a mil quinientos miligramos al día desde la semana doce de gestación.',
              say: 'El carbonato de calcio en dosis de mil a mil quinientos miligramos de calcio elemental al día se indica desde las doce semanas hasta el parto en mujeres con baja ingesta láctea o con factores de riesgo de preeclampsia. Reduce significativamente la incidencia de hipertensión gestacional.',
            },
            {
              text: 'Separar la toma de calcio de la de fierro para evitar interferencia en la absorción intestinal.',
              say: 'Ojo con este detalle práctico: el calcio y el fierro compiten por el mismo transportador intestinal de cationes divalentes. Deben administrarse separados por al menos dos horas.',
            },
          ],
        },
        {
          title: 'Fierro elemental universal',
          kind: 'key',
          items: [
            {
              text: 'Suplementación universal profiláctica: treinta a sesenta miligramos al día desde la semana veinte.',
              say: 'A partir de la semana veinte se inicia suplementación universal con treinta a sesenta miligramos al día de hierro elemental, habitualmente como sulfato ferroso doscientos miligramos al día, para compensar la expansión fisiológica del volumen plasmático y el consumo fetal.',
            },
            {
              text: 'Dosis terapéutica en anemia: ciento veinte a doscientos miligramos de hierro elemental al día.',
              say: 'Si la hemoglobina desciende bajo once gramos por decilitro en el primer o tercer trimestre, o bajo diez coma cinco en el segundo trimestre, se duplica la dosis a tratamiento curativo de anemia ferropénica.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Batería sistemática de laboratorio',
      title: 'Exámenes de ingreso en el primer trimestre de gestación',
      head: ['Examen de ingreso', 'Objetivo clínico y corte patológico', 'Conducta médica inmediata'],
      rows: [
        {
          cells: [
            'Grupo sanguíneo y factor Rh con Coombs indirecto',
            'Identificar pacientes Rh negativas y evaluar aloinmunización eritrocitaria previa',
            'Si Rh negativa con Coombs negativo, repetir Coombs a las veintiocho semanas e indicar profilaxis con inmunoglobulina anti-D.',
          ],
          say: 'El grupo sanguíneo y factor Rh junto al test de Coombs indirecto pesquisan el riesgo de enfermedad hemolítica perinatal. Si la madre es Rh negativa y no está sensibilizada, se repetirá el Coombs a las veintiocho semanas para administrar la inmunoglobulina anti-D.',
        },
        {
          cells: [
            'Glicemia en ayunas del primer trimestre',
            'Pesquisa de diabetes pregestacional o diabetes gestacional precoz',
            'Glicemia entre cien y ciento veinticinco en dos tomas confirma diabetes gestacional; mayor o igual a ciento veintiséis confirma diabetes pregestacional.',
          ],
          say: 'En Chile, una glicemia en ayunas entre cien y ciento veinticinco miligramos por decilitro en dos ocasiones distintas durante el primer trimestre diagnostica diabetes gestacional. Si supera ciento veintiséis en dos tomas, define diabetes pregestacional.',
        },
        {
          cells: [
            'VDRL o RPR y serología VIH con consentimiento',
            'Prevención de transmisión vertical de sífilis congénita y virus de inmunodeficiencia humana',
            'Si VDRL es reactivo, tratar de inmediato con Penicilina Benzatina según etapa; si VIH es positivo, iniciar triterapia antirretroviral GES.',
          ],
          say: 'El VDRL o RPR y el test de VIH son universales para prevenir la transmisión vertical. Si el VDRL es reactivo, se confirma y se inicia penicilina benzatina de inmediato. La penicilina es el único fármaco que trata eficazmente al feto.',
        },
        {
          cells: [
            'Sedimento de orina y Urocultivo',
            'Pesquisa sistemática de bacteriuria asintomática presente en el cinco al diez por ciento',
            'Tratar todo urocultivo positivo con más de cien mil unidades formadoras de colonias con antibióticos por siete días.',
          ],
          say: 'El urocultivo es mandatorio porque la bacteriuria asintomática no tratada progresa a pielonefritis aguda en un tercio de las embarazadas, gatillando sepsis y parto prematuro. Se trata siempre según antibiograma.',
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Seguimiento por etapas',
      title: 'Exámenes complementarios en segundo y tercer trimestre',
      head: ['Edad gestacional', 'Examen específico', 'Criterio diagnóstico clave', 'Conducta recomendada'],
      rows: [
        {
          cells: [
            'Semana 24 a 28',
            'Prueba de tolerancia a la glucosa oral con setenta y cinco gramos',
            'Glicemia a las dos horas mayor o igual a ciento cuarenta miligramos por decilitro',
            'Diagnostica diabetes gestacional; manejo nutricional, automonitoreo y eventual insulina si no logra metas.',
          ],
          say: 'Entre las semanas veinticuatro y veintiocho se realiza la prueba de tolerancia a la glucosa oral con setenta y cinco gramos. Una glicemia a las dos horas mayor o igual a ciento cuarenta miligramos por decilitro establece el diagnóstico de diabetes gestacional.',
        },
        {
          cells: [
            'Semana 28 a 30',
            'Segundo VDRL y repetición de Coombs indirecto en Rh negativas',
            'Pesquisa de sífilis adquirida durante la gestación y verificación de no sensibilización Rh',
            'Administración de inmunoglobulina anti-D trescientos microgramos a la semana veintiocho si el Coombs sigue negativo.',
          ],
          say: 'A las veintiocho semanas se repite el VDRL y se aplica la dosis profiláctica de inmunoglobulina anti-D de trescientos microgramos en toda paciente Rh negativa no sensibilizada.',
        },
        {
          cells: [
            'Semana 35 a 37',
            'Cultivo rectovaginal universal para Estreptococo del grupo B',
            'Detección de colonización por Streptococcus agalactiae',
            'Si es positivo, indicar profilaxis antibiótica intraparto con Penicilina sódica o Ampicilina endovenosa.',
          ],
          say: 'Entre las semanas treinta y cinco y treinta y siete se toma el cultivo rectovaginal sin espéculo para pesquisar Estreptococo del grupo B. Si resulta positivo, la paciente recibirá profilaxis intraparto con penicilina endovenosa durante el trabajo de parto para prevenir sepsis neonatal precoz.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Flujo de estratificación de riesgo en el ingreso prenatal',
      say: 'Revisemos el árbol de decisiones para estratificar a la paciente en bajo o alto riesgo obstétrico al momento de su primer control prenatal.',
    },

    {
      type: 'table',
      kicker: 'Diagnósticos diferenciales y trampas',
      title: 'Trampas clásicas del EUNACOM en control prenatal',
      head: ['Escenario clínico', 'Error diagnóstico o de manejo', 'Concepto correcto', 'Conducta según norma técnica'],
      rows: [
        {
          cells: [
            'VDRL no reactivo con prueba treponémica reactiva (MHA-TP o FTA-ABS)',
            'Indicar tratamiento antibiótico asumiendo sífilis activa no diagnosticada',
            'Las pruebas treponémicas quedan positivas de por vida tras una infección tratada en el pasado',
            'Considerar sífilis curada y continuar control prenatal habitual repitiendo VDRL a las veintiocho semanas.',
          ],
          say: 'Una de las trampas predilectas del examen: una embarazada con VDRL no reactivo y prueba treponémica reactiva tiene una cicatriz serológica de una sífilis tratada en el pasado. No requiere penicilina ahora, sino su control habitual con VDRL a las veintiocho a treinta semanas.',
        },
        {
          cells: [
            'Mujer hipertensa crónica que planifica embarazo en uso de Enalapril o Losartán',
            'Mantener el tratamiento antihipertensivo habitual durante el primer trimestre',
            'Los inhibidores de la enzima convertidora y antagonistas de angiotensina son teratogénicos y causan falla renal fetal',
            'Suspender inmediatamente y cambiar por Alfametildopa o Labetalol oral antes de concebir.',
          ],
          say: 'Los fármacos bloqueadores del sistema renina-angiotensina causan displasia renal, oligohidramnios e hipoplasia pulmonar fetal. Deben suspenderse y sustituirse por alfametildopa, labetalol o nifedipino.',
        },
        {
          cells: [
            'Embarazada con urocultivo positivo asintomática',
            'Desestimar el resultado por falta de disuria y no indicar tratamiento',
            'La bacteriuria asintomática causa pielonefritis aguda y prematurez en el embarazo',
            'Tratar siempre con antibióticos por siete días según antibiograma y realizar urocultivo de control posterior.',
          ],
          say: 'En población general la bacteriuria asintomática no se trata, pero en el embarazo es mandatorio erradicarla con antibióticos para prevenir pielonefritis y parto prematuro.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2022 · Pregunta 163',
      caseText: 'Una pareja consulta porque hace un año tuvieron una interrupción de un embarazo debido a que el feto tenía anencefalia. Desde entonces ella ha tomado anticonceptivos; sin embargo, ahora quieren intentar un nuevo embarazo. Él tiene treinta y ocho años y ella treinta y cinco. Como antecedente, ella tiene diagnóstico de hipotiroidismo subclínico sin tratamiento y él tiene un hermano con trisomía veintiuno. ¿Cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Realizar cariograma a ambos miembros de la pareja', isCorrect: false },
        { letter: 'B', text: 'Iniciar levotiroxina a la mujer y suspender anticonceptivos', isCorrect: false },
        { letter: 'C', text: 'Solicitar espermiograma al hombre', isCorrect: false },
        { letter: 'D', text: 'Iniciar ácido fólico cuatro miligramos al día desde tres meses antes del embarazo a la mujer', isCorrect: true },
        { letter: 'E', text: 'Solicitar anticuerpos antifosfolípidos a la mujer', isCorrect: false },
      ],
      correct: 'D',
      say: {
        stem: 'Revisemos esta pregunta oficial de diciembre de dos mil veintidós. Una mujer de treinta y cinco años con antecedente de un embarazo previo afectado por anencefalia planifica una nueva gestación.',
        question: 'Nos consultan por la conducta más adecuada en la consulta preconcepcional.',
        options: 'Las alternativas son: opción A, cariograma a ambos; opción B, iniciar levotiroxina; opción C, espermiograma al hombre; opción D, iniciar ácido fólico cuatro miligramos al día desde tres meses antes del embarazo; y opción E, anticuerpos antifosfolípidos. Piénsalo.',
        answer: 'La respuesta correcta es la opción D. El antecedente de un hijo previo con defecto del tubo neural como anencefalia o espina bífida sitúa a la paciente en la categoría de alto riesgo. Por ende, la indicación formal es prescribir ácido fólico en dosis alta de cuatro miligramos al día, iniciándolo al menos tres meses antes de la concepción y manteniéndolo durante todo el primer trimestre.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2024 · Pregunta 69',
      caseText: 'Una paciente de veinticinco años, embarazada con doce semanas contadas desde una fecha de última regla segura y confiable, se realiza exámenes de ingreso entre los que trae un VDRL que resulta no reactivo y un test treponémico MHA-TP que resulta reactivo. ¿Cuál es la conducta más adecuada?',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar penicilina benzatina de inmediato a la paciente y su pareja', isCorrect: false },
        { letter: 'B', text: 'Realizar VDRL mensual durante el resto del embarazo', isCorrect: false },
        { letter: 'C', text: 'Continuar control prenatal habitual con nuevo VDRL a las veintiocho a treinta semanas', isCorrect: true },
        { letter: 'D', text: 'Solicitar un examen FTA-ABS confirmatorio adicional', isCorrect: false },
        { letter: 'E', text: 'Indicar tratamiento con doxiciclina por vía oral', isCorrect: false },
      ],
      correct: 'C',
      say: {
        stem: 'Analicemos esta pregunta real de julio de dos mil veinticuatro. Una gestante de doce semanas presenta en sus exámenes de ingreso un VDRL no reactivo y una prueba treponémica reactiva.',
        question: 'Se pregunta por la conducta médica más adecuada a seguir.',
        options: 'Las opciones son: opción A, penicilina benzatina inmediata; opción B, VDRL mensual; opción C, continuar control habitual con VDRL a las veintiocho a treinta semanas; opción D, solicitar FTA-ABS; y opción E, doxiciclina oral. Piénsalo.',
        answer: 'La respuesta correcta es la opción C. Las pruebas no treponémicas como el VDRL se negativizan tras un tratamiento exitoso, mientras que las treponémicas persisten reactivas de por vida como memoria inmunológica. Un VDRL no reactivo con treponémica positiva traduce una sífilis curada en el pasado. Corresponde continuar el control prenatal habitual con repetición de VDRL a las veintiocho a treinta semanas.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos clave para el EUNACOM',
      title: 'Reglas de oro en control prenatal de bajo riesgo',
      cards: [
        {
          title: 'Cuatro certezas clínicas',
          kind: 'key',
          items: [
            {
              text: 'La ecografía precoz por LCN corrige la FUR si discrepa más de cinco a siete días.',
              say: 'Primera regla: la ecografía precoz del primer trimestre mediante longitud céfalo-nalgas es el estándar más exacto y corrige la fecha de última regla ante una discrepancia mayor a cinco a siete días.',
            },
            {
              text: 'Ácido fólico en dosis de cuatro a cinco miligramos en alto riesgo.',
              say: 'Segunda regla: la dosis de ácido fólico es de cero coma cuatro a un miligramo en bajo riesgo y de cuatro a cinco miligramos al día en pacientes con antecedente de defecto del tubo neural o diabetes pregestacional, iniciándolo tres meses antes de concebir.',
            },
            {
              text: 'Cultivo rectovaginal para Estreptococo grupo B a las treinta y cinco a treinta y siete semanas.',
              say: 'Tercera regla: el tamizaje universal de Streptococcus agalactiae se realiza a las treinta y cinco a treinta y siete semanas; si es positivo, se administra profilaxis con penicilina intraparto.',
            },
            {
              text: 'Inmunoglobulina anti-D a las veintiocho semanas en Rh negativas no sensibilizadas.',
              say: 'Cuarta regla: toda gestante Rh negativa con Coombs indirecto negativo debe recibir inmunoglobulina anti-D profiláctica a las veintiocho semanas de gestación.',
            },
          ],
        },
        {
          title: 'Idea final',
          kind: 'normal',
          items: [
            {
              text: 'Toda bacteriuria asintomática en el embarazo se trata con antibióticos por siete días.',
              say: 'Si te llevas una sola idea de hoy: en la embarazada, todo urocultivo positivo con más de cien mil unidades formadoras de colonias se trata siempre con antibióticos para prevenir pielonefritis y parto prematuro. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Estratificación de Riesgo en Ingreso Prenatal',
    root: N(
      'start',
      'Gestante en primer control prenatal',
      'Confirmación de embarazo · anamnesis y cálculo de edad gestacional',
      'Iniciamos el control calculando la edad gestacional por fecha de última regla y solicitando ecografía precoz.',
      [
        'Factores de alto riesgo identificados',
        N(
          'alert',
          'Embarazo de Alto Riesgo Obstétrico (ARO)',
          'Hijo previo con DTN · diabetes · hipertensión crónica · patología materna severa',
          'Si identificamos comorbilidades severas o antecedentes críticos, derivamos a policlínico de alto riesgo obstétrico.',
          [
            'Antecedente de defecto del tubo neural',
            N(
              'do',
              'Ácido fólico dosis alta 4 a 5 mg/día',
              'Iniciar 3 meses pregestacional y mantener hasta semana 12',
              'Indicamos ácido fólico en dosis alta de cuatro a cinco miligramos al día por vía oral.',
            ),
          ],
          [
            'Uso de antihipertensivos teratogénicos (IECA o ARA II)',
            N(
              'do',
              'Cambio inmediato a Alfametildopa o Labetalol',
              'Suspender Enalapril o Losartán por riesgo de fetopatía renal',
              'Sustituimos de inmediato por antihipertensivos seguros en el embarazo.',
            ),
          ],
        ),
      ],
      [
        'Embarazo de bajo riesgo sin comorbilidad',
        N(
          'q',
          'Control prenatal en Atención Primaria de Salud',
          'Calendario: mensual hasta sem 28 · quincenal a 36 · semanal al término',
          'En gestantes sanas mantenemos el control periódico en atención primaria según cronograma estandarizado.',
          [
            'Suplementación profiláctica universal',
            N(
              'do',
              'Ácido fólico estándar + Calcio + Fierro',
              'Fólico 1 mg hasta sem 12 · Calcio 1 g desde sem 12 · Fierro 30 a 60 mg desde sem 20',
              'Iniciamos suplementación escalonada según la edad gestacional de la paciente.',
            ),
          ],
          [
            'Batería sistemática de exámenes por trimestre',
            N(
              'ok',
              'Exámenes reglamentarios MINSAL',
              'Trimestre 1: VDRL, VIH, Chagas, Coombs, orina · Trimestre 2: PTGO · Trimestre 3: SGB',
              'Solicitamos la batería estandarizada de exámenes en cada etapa del embarazo.',
            ),
          ],
        ),
      ],
    ),
  },
};
