// Clase 3.7 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-07).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-07',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Criterios de primer trimestre, tamizaje con PTGO a las 24 a 28 semanas, hipótesis de Pedersen, metas glucémicas e insulinoterapia',
      say: 'Bienvenidos a la clase sobre diabetes gestacional y pregestacional. El control metabólico durante el embarazo es un tema cardinal en el EUNACOM por sus profundas implicancias sobre la salud de la madre y el recién nacido. En esta sesión dominaremos los algoritmos diagnósticos del primer trimestre y del tamizaje sistemático con prueba de sobrecarga oral, comprenderemos el mecanismo de la macrosomía por hiperinsulinismo fetal, fijaremos las metas glucémicas y aprenderemos cuándo iniciar insulina subcutánea. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Algoritmo de diagnóstico cronológico',
      title: 'Detección secuencial: primer trimestre y tamizaje sistemático',
      nodes: [
        { id: 'tri1', col: 0, row: 1, k: 'start', t: 'Ingreso prenatal', s: 'Glicemia en ayunas en la batería rutinaria del primer trimestre' },
        { id: 'dmpg', col: 2, row: 0, k: 'alert', t: 'Diabetes pregestacional', s: 'Glicemia en ayunas mayor o igual a 126 en dos tomas o mayor a 200 más síntomas' },
        { id: 'dmgp', col: 2, row: 2, k: 'risk', t: 'Diabetes gestacional precoz', s: 'Dos glicemias en ayunas entre 100 y 125 miligramos por decilitro' },
        { id: 'ptgo', col: 3, row: 1, k: 'mech', t: 'Tamizaje semana 24 a 28', s: 'Prueba de tolerancia oral con 75 gramos de glucosa en pacientes con glicemia normal' },
        { id: 'dmgt', col: 4, row: 1, k: 'trap', t: 'Diabetes gestacional clásica', s: 'Glicemia a las dos horas poscarga mayor o igual a 140 miligramos por decilitro' },
      ],
      edges: [
        { from: 'tri1', to: 'dmpg', label: 'glicemia ayuno mayor a 126' },
        { from: 'tri1', to: 'dmgp', label: 'glicemia ayuno 100 a 125' },
        { from: 'tri1', to: 'ptgo', label: 'glicemia ayuno menor a 100' },
        { from: 'ptgo', to: 'dmgt', label: 'poscarga 2h mayor o igual a 140' },
      ],
      steps: [
        {
          show: ['tri1'],
          note: 'Evaluación inicial en el primer control',
          say: 'A toda mujer embarazada se le solicita una glicemia plasmática en ayunas en su primer control prenatal durante el primer trimestre. Este examen inicial permite pesquisar tanto una diabetes previa no diagnosticada como una intolerancia a los carbohidratos de debut precoz inducida por las primeras modificaciones hormonales.',
        },
        {
          show: ['dmpg', 'dmgp'],
          note: 'Criterios diagnósticos del primer trimestre',
          say: 'Si presenta dos glicemias de ayuno mayores o iguales a ciento veintiséis miligramos por decilitro, se diagnostica diabetes pregestacional manifiesta. Si presenta dos glicemias de ayuno entre cien y ciento veinticinco miligramos por decilitro en días diferentes, se confirma el diagnóstico de diabetes gestacional precoz sin requerir prueba de sobrecarga.',
        },
        {
          show: ['ptgo', 'dmgt'],
          note: 'Tamizaje universal a las 24 a 28 semanas',
          say: 'Si la glicemia inicial es estrictamente menor a cien, la paciente continúa su control prenatal habitual y se somete a tamizaje universal entre las semanas veinticuatro y veintiocho mediante una prueba de tolerancia a la glucosa oral con setenta y cinco gramos. Un valor a las dos horas mayor o igual a ciento cuarenta sella el diagnóstico de diabetes gestacional.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios diagnósticos formales',
      title: 'Puntos de corte normativos del Ministerio de Salud',
      cards: [
        {
          title: 'Primer trimestre de gestación',
          tag: 'Glicemias de ayuno',
          kind: 'criteria',
          items: [
            {
              t: 'Glicemia normal bajo cien',
              d: 'Glicemia en ayunas menor a 100 miligramos por decilitro',
              say: 'Una glicemia de ayuno menor a cien se considera fisiológica y no requiere intervenciones dietéticas, programándose la prueba de sobrecarga de rutina para la semana veinticuatro a veintiocho.',
            },
            {
              t: 'Diabetes gestacional precoz',
              d: 'Dos valores en ayunas entre 100 y 125 miligramos por decilitro',
              say: 'La confirmación de dos glicemias de ayuno entre cien y ciento veinticinco miligramos por decilitro diagnostica formalmente diabetes gestacional precoz e impone manejo nutricional inmediato.',
            },
            {
              t: 'Diabetes pregestacional manifiesta',
              d: 'Glicemias mayores o iguales a 126 o al azar sobre 200 con síntomas',
              say: 'Valores en ayunas mayores o iguales a ciento veintiséis en dos oportunidades o una glicemia al azar mayor a doscientos con poliuria y polidipsia definen diabetes pregestacional.',
            },
          ],
        },
        {
          title: 'Segundo y tercer trimestre',
          tag: 'PTGO 75 gramos',
          kind: 'alert',
          items: [
            {
              t: 'Tamizaje rutinario semana 24 a 28',
              d: 'Valor a las 2 horas mayor o igual a 140 mg/dL',
              say: 'En el segundo trimestre, una glicemia a las dos horas poscarga mayor o igual a ciento cuarenta miligramos por decilitro diagnostica diabetes gestacional. No se requieren dos exámenes alterados; basta una sola prueba alterada.',
            },
            {
              t: 'Repetición tardía semana 30 a 32',
              d: 'Indicada ante macrosomía fetal, polihidramnios o factores de riesgo',
              say: 'Si la prueba fue normal a las veinticuatro semanas pero en el tercer trimestre el feto presenta crecimiento acelerado o polihidramnios inexplicable, debe repetirse una nueva prueba de sobrecarga oral entre las semanas treinta y treinta y dos.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología molecular',
      title: 'Resistencia a la insulina inducida por la placenta',
      nodes: [
        { id: 'pla', col: 0, row: 1, k: 'start', t: 'Masa placentaria creciente', s: 'Aumento de tamaño y vascularización trofoblástica en semana 24 a 28' },
        { id: 'hor', col: 1, row: 1, k: 'mech', t: 'Hormonas diabetogénicas', s: 'Lactógeno placentario, progesterona, cortisol y prolactina' },
        { id: 'res', col: 2, row: 1, k: 'risk', t: 'Resistencia insulínica periférica', s: 'Fosforilación anormal del receptor de insulina en músculo y tejido adiposo' },
        { id: 'com', col: 3, row: 0, k: 'good', t: 'Compensación pancreática', s: 'Gestante sana: hiperplasia de células beta e hiperinsulinemia adaptativa' },
        { id: 'fpa', col: 3, row: 2, k: 'trap', t: 'Falla de reserva celular beta', s: 'Diabetes gestacional: incapacidad de triplicar secreción insulínica' },
        { id: 'hip', col: 4, row: 2, k: 'alert', t: 'Hiperglicemia materna', s: 'Flujo facilitado masivo de glucosa hacia el compartimento fetal' },
      ],
      edges: [
        { from: 'pla', to: 'hor', label: 'secreción endocrina' },
        { from: 'hor', to: 'res', label: 'bloqueo periférico' },
        { from: 'res', to: 'com', label: 'reserva normal' },
        { from: 'res', to: 'fpa', label: 'déficit funcional' },
        { from: 'fpa', to: 'hip', label: 'descompensación' },
      ],
      steps: [
        {
          show: ['pla', 'hor'],
          note: 'Producción de hormonas contrainsulares',
          say: 'A partir de la semana veinticuatro, la placenta alcanza su máxima tasa de crecimiento y secreta al torrente materno potentes hormonas contrainsulares: lactógeno placentario humano, progesterona, cortisol placentario y prolactina.',
        },
        {
          show: ['res', 'com', 'fpa'],
          note: 'Resistencia periférica y reserva pancreática',
          say: 'Estas hormonas inducen una profunda resistencia a la insulina en los tejidos periféricos de la madre. Una gestante sana compensa triplicando la producción de insulina por sus células beta pancreáticas; pero si existe una limitación previa en su reserva secretora, sobreviene la diabetes gestacional.',
        },
        {
          show: ['hip'],
          note: 'Hiperglicemia materna y transferencia transplacentaria',
          say: 'La incapacidad de compensar produce hiperglicemia materna sostenida. Como la glucosa atraviesa libremente la membrana sincitiotrofoblástica por difusión facilitada mediante transportadores GLUT uno, el feto queda expuesto a sobrecargas continuas de glucosa.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Embriofetopatía diabética',
      title: 'Hipótesis de Pedersen: hiperglicemia fetal y macrosomía',
      nodes: [
        { id: 'glu', col: 0, row: 1, k: 'start', t: 'Hiperglicemia fetal', s: 'Paso continuo de glucosa materna por difusión facilitada' },
        { id: 'pan', col: 1, row: 1, k: 'mech', t: 'Hiperinsulinismo fetal', s: 'El páncreas fetal responde desde la semana doce hipertrofiando islotes' },
        { id: 'ana', col: 2, row: 1, k: 'risk', t: 'Anabolismo acelerado', s: 'La insulina actúa como la principal hormona de crecimiento fetal' },
        { id: 'mac', col: 3, row: 0, k: 'alert', t: 'Macrosomía y organomegalia', s: 'Depósito graso escapular, cardiomiopatía hipertrófica y hepatomegalia' },
        { id: 'neo', col: 3, row: 2, k: 'trap', t: 'Complicaciones neonatales', s: 'Hipoglicemia neonatal brusca, hipocalcemia, policitemia e hiperbilirrubinemia' },
      ],
      edges: [
        { from: 'glu', to: 'pan', label: 'estímulo glicémico' },
        { from: 'pan', to: 'ana', label: 'efecto hormonal' },
        { from: 'ana', to: 'mac', label: 'crecimiento excesivo' },
        { from: 'ana', to: 'neo', label: 'corte de cordón' },
      ],
      steps: [
        {
          show: ['glu', 'pan'],
          note: 'Hipertrofia del páncreas fetal',
          say: 'La insulina materna no es capaz de cruzar la placenta, pero la glucosa pasa con extrema facilidad. El páncreas fetal responde a este aporte excesivo de glucosa desarrollando una marcada hiperplasia de islotes de Langerhans con hiperinsulinismo reactivo persistente.',
        },
        {
          show: ['ana', 'mac'],
          note: 'Efecto anabólico y macrosomía',
          say: 'En la vida intrauterina la insulina es la hormona anabólica y promotora del crecimiento más potente. Estimula el depósito masivo de glucógeno y lípidos en el hígado, corazón y cintura escapular, causando macrosomía desproporcionada con alto riesgo de impactación de hombros durante el parto.',
        },
        {
          show: ['neo'],
          note: 'Hipoglicemia neonatal al cortar el cordón',
          say: 'Al nacer y pinzar el cordón umbilical, cesa de golpe el suministro materno de glucosa, pero el hiperinsulinismo fetal se mantiene plenamente activo. Esto desencadena una hipoglicemia neonatal sintomática severa durante las primeras horas de vida.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Morbimortalidad neonatal',
      title: 'Complicaciones del recién nacido hijo de madre diabética',
      cards: [
        {
          title: 'Metabólicas y hematológicas',
          tag: 'Adaptación neonatal',
          kind: 'alert',
          items: [
            {
              t: 'Hipoglicemia neonatal sintomática',
              d: 'Glicemia menor a 40 mg/dL en las primeras horas de vida',
              say: 'El recién nacido sufre un colapso glucémico rápido debido a la secreción autónoma de insulina fetal. Requiere inicio precoz de lactancia materna dentro de los primeros treinta minutos de vida y controles de hemoglucotest seriados.',
            },
            {
              t: 'Hipocalcemia e hipomagnesemia',
              d: 'Tetania neonatal por supresión funcional de paratohormona',
              say: 'Se produce una demora fisiológica en la activación de la paratohormona neonatal sumada a hipercalciuria fetal, provocando irritabilidad, temblores e hipocalcemia que amerita reposición parenteral si es sintomática.',
            },
            {
              t: 'Policitemia e hiperbilirrubinemia',
              d: 'Aumento de eritropoyetina por hiperconsumo de oxígeno fetal',
              say: 'El metabolismo anabólico acelerado genera hipoxia tisular relativa, lo que dispara la síntesis de eritropoyetina. La policitemia resultante aumenta la viscosidad sanguínea y desata ictericia neonatal masiva.',
            },
          ],
        },
        {
          title: 'Respiratorias y cardíacas',
          tag: 'Maduración y miocardio',
          kind: 'criteria',
          items: [
            {
              t: 'Distrés respiratorio por déficit de surfactante',
              d: 'La insulina antagoniza el efecto madurativo del cortisol pulmonar',
              say: 'La hiperinsulinemia fetal bloquea directamente la síntesis de fosfolípidos del surfactante en los neumocitos tipo dos. Por ello, el hijo de madre diabética tiene riesgo de enfermedad de membrana hialina incluso cerca del término.',
            },
            {
              t: 'Miocardiopatía hipertrófica asimétrica',
              d: 'Hipertrofia del tabique interventricular con obstrucción al tracto de salida',
              say: 'El exceso de insulina provoca hipertrofia del septum interventricular cardíaco. Puede generar estenosis funcional subaórtica transitoria que revierte espontáneamente en los primeros meses de vida tras normalizar los niveles de insulina.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Comparación patológica',
      title: 'Diabetes Gestacional clásica versus Diabetes Pregestacional',
      head: ['Parámetro clínico', 'Diabetes Gestacional típica', 'Diabetes Pregestacional (DM1 o DM2 previa)'],
      rows: [
        {
          cells: ['Momento de inicio', 'Segundo o tercer trimestre (semana 24 a 28)', 'Antes del embarazo o en el primer trimestre'],
          say: 'La gestacional aparece tarde por influjo de hormonas placentarias; la pregestacional ya existía durante la fecundación y organogénesis.',
        },
        {
          cells: ['Malformaciones congénitas', 'No aumentan sobre la población general', 'Muy aumentadas si hay mal control periconcepcional'],
          say: 'La diabetes gestacional típica no produce malformaciones congénitas porque no afecta la organogénesis. En cambio, la pregestacional mal controlada quintuplica el riesgo de malformaciones.',
        },
        {
          cells: ['Malformaciones características', 'Ninguna específica', 'Agenesia sacra, cardiopatías complejas y defectos del tubo neural'],
          say: 'La agenesia sacra o síndrome de regresión caudal es la malformación más específica de la diabetes pregestacional descompensada.',
        },
        {
          cells: ['Complicaciones vasculares maternas', 'Ausentes', 'Retinopatía proliferativa, nefropatía y preeclampsia sobreagregada'],
          say: 'La diabetes pregestacional de larga data se asocia a microangiopatía renal y retiniana, aumentando el riesgo de preeclampsia severa.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Metas del automonitoreo',
      title: 'Objetivos glucémicos estrictos durante el embarazo',
      cards: [
        {
          title: 'Metas en sangre capilar',
          tag: 'Control diario con glucómetro',
          kind: 'criteria',
          items: [
            {
              t: 'Glicemia en ayunas',
              d: 'Estrictamente entre 70 y 90 miligramos por decilitro (menor a 95)',
              say: 'La meta de glicemia en ayunas es mantenerse bajo noventa a noventa y cinco miligramos por decilitro. Valores superiores aumentan el riesgo de macrosomía y polihidramnios.',
            },
            {
              t: 'Glicemia postprandial a las 2 horas',
              d: 'Menor a 120 miligramos por decilitro tras cada comida principal',
              say: 'A las dos horas de haber iniciado el desayuno, almuerzo o cena, la glicemia debe ser estrictamente menor a ciento veinte miligramos por decilitro.',
            },
            {
              t: 'Glicemia postprandial a la hora',
              d: 'Menor a 140 miligramos por decilitro si se usa control horario',
              say: 'Si el centro asistencial prefiere la medición a la hora de las comidas, el límite de corte es ciento cuarenta miligramos por decilitro.',
            },
          ],
        },
        {
          title: 'Criterio para iniciar insulina',
          tag: 'Falla del manejo nutricional',
          kind: 'alert',
          items: [
            {
              t: 'Regla del veinte por ciento',
              d: 'Más del 20 por ciento de los controles sobre la meta tras una a dos semanas de dieta',
              say: 'Si tras una o dos semanas de dieta y ejercicio bien cumplidos, más del veinte por ciento de las mediciones sobrepasan las metas, se indica inicio de insulinoterapia.',
            },
            {
              t: 'Crecimiento fetal excesivo precoz',
              d: 'Circunferencia abdominal fetal ecográfica mayor al percentil 75',
              say: 'La presencia de una circunferencia abdominal fetal ecográfica sobre el percentil setenta y cinco antes de la semana treinta y dos apoya la indicación temprana de insulina.',
            },
          ],
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Pilares terapéuticos',
      title: 'Manejo escalonado: terapia médica nutricional e insulinoterapia',
      nodes: [
        { id: 'die', col: 0, row: 1, k: 'start', t: 'Paso 1: Dieta y actividad física', s: 'Plan alimentario fraccionado en 4 comidas y 2 colaciones con carbohidratos complejos' },
        { id: 'mon', col: 1, row: 1, k: 'mech', t: 'Automonitoreo seriado', s: 'Glucemias capilares basales y postprandiales 3 a 4 veces al día' },
        { id: 'eva', col: 2, row: 1, k: 'q', t: 'Evaluación a 1 a 2 semanas', s: 'Revisión del registro: porcentaje de glicemias fuera de meta' },
        { id: 'met', col: 3, row: 0, k: 'good', t: 'Metas cumplidas (más de 80%)', s: 'Mantener plan nutricional y control habitual hasta el parto' },
        { id: 'ins', col: 3, row: 2, k: 'alert', t: 'Paso 2: Insulinoterapia', s: 'Insulina NPH intermedia basal matutina y nocturna más insulina ultrarrápida' },
      ],
      edges: [
        { from: 'die', to: 'mon', label: 'iniciar pauta' },
        { from: 'mon', to: 'eva', label: 'registro continuo' },
        { from: 'eva', to: 'met', label: 'menos de 20% alteradas' },
        { from: 'eva', to: 'ins', label: 'más de 20% alteradas' },
      ],
      steps: [
        {
          show: ['die', 'mon'],
          note: 'Terapia nutricional inicial',
          say: 'El pilar inicial en toda diabetes gestacional es el plan alimentario fraccionado en cuatro comidas y dos colaciones, evitando azúcares refinados, sumado a caminata de treinta minutos posprandial y automonitoreo glucémico.',
        },
        {
          show: ['eva', 'met'],
          note: 'Respuesta favorable a la dieta',
          say: 'Si más del ochenta por ciento de las mediciones se mantienen dentro de las metas en una a dos semanas de seguimiento, se continúa con el manejo nutricional sin requerir fármacos.',
        },
        {
          show: ['ins'],
          note: 'Inicio de insulinoterapia de elección',
          say: 'Si fracasa la dieta, el fármaco de elección absoluta según la normativa del Ministerio de Salud es la insulina humana NPH subcutánea combinada con insulina regular o ultrarrápida. Los hipoglicemiantes orales como la metformina no son la primera línea oficial en Chile porque atraviesan la barrera placentaria.',
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Manejo obstétrico y vía de parto',
      title: 'Momento de interrupción y vía de parto en diabetes gestacional',
      head: ['Condición clínica de la paciente', 'Momento de interrupción', 'Vía de parto recomendada', 'Precaución intraparto'],
      rows: [
        {
          cells: ['Diabetes gestacional con dieta y buen control', 'Treinta y ocho a cuarenta semanas', 'Parto vaginal por inducción o espontáneo', 'Monitoreo de glicemia horaria materno'],
          say: 'La paciente bien controlada con dieta puede esperar el parto vaginal espontáneo hasta las cuarenta semanas con vigilancia biofísica semanal.',
        },
        {
          cells: ['Diabetes gestacional usuaria de insulina', 'Treinta y ocho a treinta y nueve semanas', 'Parto vaginal o cesárea según indicación obstétrica', 'Infusión de glucosa e insulina durante el parto'],
          say: 'La paciente insulinodependiente se interrumpe entre las treinta y ocho y treinta y nueve semanas, manteniendo infusión continua de glucosa para evitar descompensaciones.',
        },
        {
          cells: ['Feto con macrosomía (peso sobre 4.000 a 4.500 g)', 'Treinta y ocho a treinta y nueve semanas', 'Operación cesárea electiva', 'Prevención activa de distocia de hombros'],
          say: 'Si la estimación de peso fetal supera los cuatro mil quinientos gramos en una madre diabética, se programa cesárea electiva para prevenir la impactación de hombros y parálisis braquial.',
        },
        {
          cells: ['Período de posparto inmediato', 'Suspensión inmediata de insulina', 'Alimentación habitual', 'PTGO con 75 g a las 6 a 12 semanas posparto'],
          say: 'Tras el alumbramiento la resistencia insulínica desaparece. Se suspende la insulina y se reclasifica a la paciente a las seis semanas posparto con una nueva prueba de sobrecarga.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo de tamizaje, diagnóstico y manejo de la diabetes en el embarazo',
      say: 'Revisemos el algoritmo estructurado para el tamizaje, diagnóstico y escalonamiento terapéutico de la diabetes gestacional.',
    },

    {
      type: 'table',
      kicker: 'Trampas frecuentes EUNACOM',
      title: 'Distracciones y errores comunes en preguntas de diabetes gestacional',
      head: ['Situación presentada en la pregunta', 'Error habitual del postulante', 'Conducta médica correcta'],
      rows: [
        {
          cells: ['Glicemia de ayuno de 108 mg/dL en primer control prenatal', 'Solicitar prueba de tolerancia a las 24 semanas', 'Repetir una segunda glicemia en ayunas en días inmediatos'],
          say: 'Un valor entre cien y ciento veinticinco en el primer trimestre no espera a la semana veinticuatro. Se repite de inmediato en ayunas para confirmar diabetes gestacional precoz.',
        },
        {
          cells: ['PTGO a las 26 semanas con resultado basal 85 y a las 2h 145 mg/dL', 'Clasificarla como intolerancia a la glucosa y dar de alta', 'Diagnosticar diabetes gestacional e iniciar plan nutricional'],
          say: 'En el embarazo no existe el concepto de intolerancia a la glucosa oral. Un valor poscarga mayor o igual a ciento cuarenta es por definición diabetes gestacional.',
        },
        {
          cells: ['Embarazada diabética gestacional con 30% de glicemias sobre meta', 'Iniciar metformina oral como primera línea', 'Iniciar insulina humana NPH subcutánea'],
          say: 'En Chile la metformina no es la primera línea en las guías técnicas del Ministerio de Salud. La insulina es el fármaco de elección indiscutido por no cruzar la placenta.',
        },
        {
          cells: ['Hijo de madre con diabetes gestacional que nace con malformación cardíaca', 'Atribuir la malformación a la diabetes gestacional', 'Explicar que las malformaciones solo se asocian a diabetes pregestacional'],
          say: 'La diabetes gestacional típica no produce malformaciones congénitas porque debuta en el tercer trimestre, mucho después de completada la organogénesis.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso de razonamiento clínico',
      title: 'Pesquisa y conducta ante glicemia alterada en el primer trimestre',
      stem: 'Una mujer de 28 años, primigesta cursando un embarazo de 9 semanas, acude a revisión de exámenes del primer control prenatal. Su glicemia en ayunas es de 112 mg/dL. Se encuentra asintomática, su examen físico es normal y tiene un índice de masa corporal de 27.',
      question: '¿Cuál es la conducta médica inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Solicitar prueba de tolerancia a la glucosa oral con 75 gramos de inmediato' },
        { letter: 'B', text: 'Repetir una segunda glicemia en ayunas para confirmar el diagnóstico' },
        { letter: 'C', text: 'Esperar hasta las 24 semanas para realizar el tamizaje habitual' },
        { letter: 'D', text: 'Iniciar insulina NPH subcutánea en dosis nocturna' },
        { letter: 'E', text: 'Indicar metformina 850 mg cada doce horas vía oral' },
      ],
      correct: 'B',
      explanation: 'En el primer trimestre de gestación, un valor de glicemia en ayunas entre 100 y 125 mg/dL es sospechoso de Diabetes Gestacional Precoz. La norma técnica del MINSAL exige confirmar el hallazgo mediante una segunda glicemia en ayunas tomada en días posteriores. Si la segunda medición resulta nuevamente entre 100 y 125 mg/dL, se sella el diagnóstico y se inicia manejo nutricional.',
      say: {
        stem: 'Una primigesta de nueve semanas presenta una glicemia de ayunas de ciento doce miligramos por decilitro en sus exámenes de ingreso prenatal, asintomática.',
        question: '¿Cuál es la conducta inmediata más adecuada?',
        options: 'La opción A propone realizar prueba de tolerancia oral inmediata. La B repetir una segunda glicemia en ayunas. La C esperar a la semana veinticuatro. La D iniciar insulina subcutánea. La E iniciar metformina oral. Piénsalo.',
        answer: 'La respuesta correcta es la B. Ante una glicemia entre cien y ciento veinticinco en el primer trimestre, la norma ministerial exige solicitar una segunda glicemia en ayunas para confirmar diabetes gestacional precoz.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2016',
      title: 'EUNACOM Julio 2016 · Pregunta 38',
      stem: 'Una paciente de 31 años, cursando un embarazo de 28 semanas, sin alteraciones hasta el momento, se realiza un test de tolerancia a la glucosa oral con 75 gramos de glucosa, que resulta 75 mg/dL basal y 160 mg/dL a las 2 horas de la carga de glucosa.',
      question: '¿Cuál es el diagnóstico más probable?',
      options: [
        { letter: 'A', text: 'Intolerancia a la glucosa oral' },
        { letter: 'B', text: 'Diabetes gestacional' },
        { letter: 'C', text: 'Diabetes pregestacional' },
        { letter: 'D', text: 'Diabetes mellitus tipo dos descompensada' },
        { letter: 'E', text: 'Resistencia a la insulina severa' },
      ],
      correct: 'B',
      explanation: 'En una paciente embarazada que se realiza una PTGO con 75 g a las 24-28 semanas, cualquier valor a las 2 horas mayor o igual a 140 mg/dL establece formalmente el diagnóstico de Diabetes Gestacional. En la paciente obstétrica no existe la categoría de intolerancia a la glucosa oral; cualquier alteración sobre 140 mg/dL califica directamente como diabetes gestacional.',
      say: {
        stem: 'Una paciente de treinta y un años con embarazo de veintiocho semanas presenta una prueba de sobrecarga oral con setenta y cinco gramos de glucosa que resulta con setenta y cinco basal y ciento sesenta miligramos por decilitro a las dos horas.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'La opción A propone intolerancia a la glucosa. La B diabetes gestacional. La C diabetes pregestacional. La D diabetes tipo dos. La E resistencia a la insulina. Piénsalo.',
        answer: 'La respuesta correcta es la B. En obstetricia, un valor a las dos horas poscarga mayor o igual a ciento cuarenta miligramos por decilitro es diagnóstico de diabetes gestacional.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Julio 2024',
      title: 'EUNACOM Julio 2024 · Pregunta 9',
      stem: 'Una paciente embarazada de 32 semanas, con altura uterina de 38 cm e IMC de 33, se realiza una ecografía obstétrica que muestra feto creciendo en percentil 93 con ILA de 12. Se solicita test de tolerancia a la glucosa oral, que resulta 92 mg/dL basal y 170 mg/dL a las dos horas postcarga de glucosa.',
      question: '¿Cuál es la causa más probable de la condición fetal?',
      options: [
        { letter: 'A', text: 'Diabetes mellitus gestacional' },
        { letter: 'B', text: 'Obesidad materna aislada' },
        { letter: 'C', text: 'Diabetes mellitus pregestacional oculta' },
        { letter: 'D', text: 'Incompatibilidad de grupo sanguíneo Rh' },
        { letter: 'E', text: 'Síndrome hipertensivo del embarazo' },
      ],
      correct: 'A',
      explanation: 'El feto presenta una estimación de peso fetal en percentil 93 (grande para la edad gestacional / macrosomía) asociado a una PTGO de 170 mg/dL a las 2 horas (patológica al ser mayor o igual a 140 mg/dL). La causa directa del sobrecrecimiento fetal es la Diabetes Gestacional, mediante la hipótesis de Pedersen: la hiperglicemia materna condiciona hiperglicemia fetal y sobreproducción de insulina fetal, potente hormona anabólica.',
      say: {
        stem: 'Una embarazada de treinta y dos semanas con altura uterina discordante presenta ecografía con feto en percentil noventa y tres. La prueba de tolerancia a la glucosa muestra noventa y dos basal y ciento setenta miligramos por decilitro a las dos horas.',
        question: '¿Cuál es la causa más probable de la condición fetal?',
        options: 'La opción A propone diabetes gestacional. La B obesidad materna aislada. La C diabetes pregestacional. La D incompatibilidad Rh. La E síndrome hipertensivo. Piénsalo.',
        answer: 'La respuesta correcta es la A. El resultado de ciento setenta poscarga confirma diabetes gestacional, y el hiperinsulinismo fetal secundario es la causa directa del sobrecrecimiento y macrosomía.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Caso de razonamiento clínico',
      title: 'Indicación de inicio de insulinoterapia en el embarazo',
      stem: 'Una gestante de 29 semanas con diagnóstico de diabetes gestacional ha seguido durante dos semanas un plan de alimentación fraccionado estricto supervisado por nutricionista y caminata diaria. En su libreta de automonitoreo capilar presenta 6 de 20 controles en ayunas entre 102 y 110 mg/dL y 7 de 20 controles postprandiales entre 130 y 145 mg/dL. Su examen físico y biometría fetal son acordes.',
      question: '¿Cuál es la conducta médica indicada?',
      options: [
        { letter: 'A', text: 'Mantener la dieta por dos semanas más antes de iniciar fármacos' },
        { letter: 'B', text: 'Iniciar metformina oral 850 mg al día' },
        { letter: 'C', text: 'Iniciar insulina humana NPH subcutánea' },
        { letter: 'D', text: 'Programar operación cesárea inmediata' },
        { letter: 'E', text: 'Indicar restricción calórica estricta a menos de 1.000 kilocalorías diarias' },
      ],
      correct: 'C',
      explanation: 'La paciente presenta más del 20% de sus glicemias capilares por sobre las metas terapéuticas (ayuno < 95 mg/dL y postprandial < 120 mg/dL) tras dos semanas completas de adecuado cumplimiento dietético. Cumple criterio formal de fracaso de la terapia nutricional. El tratamiento farmacológico estándar de primera línea indicado por el MINSAL es el inicio de Insulina Humana NPH subcutánea.',
      say: {
        stem: 'Una gestante de veintinueve semanas con diabetes gestacional presenta más del treinta por ciento de sus registros de automonitoreo capilar sobre las metas recomendadas tras dos semanas de dieta estricta.',
        question: '¿Cuál es la conducta médica indicada?',
        options: 'La opción A propone mantener la dieta por dos semanas más. La B iniciar metformina oral. La C iniciar insulina humana NPH subcutánea. La D programar cesárea. La E restricción calórica estricta. Piénsalo.',
        answer: 'La respuesta correcta es la C. Ante el fracaso del manejo nutricional documentado por más del veinte por ciento de valores fuera de meta, la conducta obligatoria según la norma técnica es iniciar insulina humana NPH.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro',
      title: 'Conceptos clave en diabetes y embarazo para el EUNACOM',
      cards: [
        {
          title: 'Algoritmos y puntos de corte',
          tag: 'Diagnóstico de certeza',
          kind: 'key',
          items: [
            {
              t: 'Corte de ayuno en primer trimestre',
              d: 'Dos glicemias entre 100 y 125 mg/dL definen diabetes gestacional',
              say: 'Dos mediciones en ayunas entre cien y ciento veinticinco en el primer trimestre confirman diabetes gestacional precoz.',
            },
            {
              t: 'Tamizaje universal a las 24 a 28 semanas',
              d: 'PTGO con valor a las dos horas mayor o igual a 140 mg/dL',
              say: 'Una glicemia a las dos horas poscarga mayor o igual a ciento cuarenta sella el diagnóstico de diabetes gestacional.',
            },
          ],
        },
        {
          title: 'Manejo y riesgos perinatales',
          tag: 'Terapéutica oficial',
          kind: 'alert',
          items: [
            {
              t: 'Insulina es el fármaco de elección',
              d: 'Indicada ante fracaso de dieta sin recurrir a metformina',
              say: 'La insulina humana es la primera línea farmacológica oficial porque no atraviesa la barrera placentaria.',
            },
            {
              t: 'Malformaciones versus macrosomía',
              d: 'Malformaciones solo en pregestacional; macrosomía en ambas',
              say: 'Si te llevas una sola idea de hoy: las malformaciones congénitas solo aumentan en diabetes pregestacional mal controlada durante el primer trimestre, mientras que la macrosomía por hiperinsulinismo ocurre en ambas. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Diagnóstico y Manejo de la Diabetes en el Embarazo',
    root: N(
      'start',
      'Tamizaje y Diagnóstico de Hiperglicemia en Gestantes',
      'Primer trimestre: Glicemia en ayunas · Semana 24 a 28: PTGO con 75 g de glucosa',
      'Iniciamos el abordaje evaluando la glicemia en ayunas del primer trimestre o la prueba de tolerancia en el segundo trimestre.',
      [
        'Primer trimestre: Dos glicemias de ayuno entre 100 y 125 mg/dL',
        N(
          'alert',
          'Diabetes Gestacional Precoz',
          'Ingreso inmediato a programa de nutrición y automonitoreo glucémico capilar',
          'Si confirma dos glicemias de ayuno entre cien y ciento veinticinco, diagnosticamos diabetes gestacional precoz e iniciamos dieta.',
          [
            'Cumple metas de automonitoreo (más del 80%)',
            N(
              'ok',
              'Continuar manejo médico nutricional',
              'Ayuno menor a 90-95 y 2 horas postprandial menor a 120 · control obstétrico habitual',
              'Si cumple las metas con el plan nutricional, mantenemos el manejo expectante hasta el término.',
            ),
          ],
          [
            'Más del 20% de glicemias sobre la meta tras 2 semanas',
            N(
              'do',
              'Iniciar Insulinoterapia Subcutánea',
              'Insulina humana NPH matutina y nocturna · titulación según automonitoreo',
              'Si fracasa la dieta con más del veinte por ciento de valores alterados, iniciamos insulina humana NPH.',
            ),
          ],
        ),
      ],
      [
        'Semana 24 a 28: PTGO con valor a las 2h mayor o igual a 140 mg/dL',
        N(
          'alert',
          'Diabetes Gestacional Clásica',
          'Plan alimentario fraccionado · 4 comidas y 2 colaciones · automonitoreo glucémico',
          'Si la prueba a las veinticuatro semanas resulta mayor o igual a ciento cuarenta, iniciamos manejo nutricional y automonitoreo.',
          [
            'Feto con macrosomía o sospecha de polihidramnios',
            N(
              'do',
              'Ecografía seriada y evaluación de vía de parto',
              'Si estimación de peso mayor a 4.500 gramos, programar cesárea a las 38-39 semanas',
              'Evaluamos el crecimiento fetal seriado para prevenir distocia de hombros mediante cesárea electiva si supera cuatro mil quinientos gramos.',
            ),
          ],
        ),
      ],
      [
        'Primer trimestre: Glicemia en ayunas mayor o igual a 126 mg/dL',
        N(
          'alert',
          'Diabetes Pregestacional Manifiesta',
          'Derivación a policlínico de Alto Riesgo Obstétrico (ARO) · fondo de ojo y función renal',
          'Si presenta glicemias de ayuno mayores o iguales a ciento veintiséis, se maneja como diabetes pregestacional con estudio de microangiopatía.',
        ),
      ],
    ),
  },
};
