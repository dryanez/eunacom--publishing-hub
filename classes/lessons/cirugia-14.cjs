// Clase 11.14 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-14).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-14',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Escala ASA, capacidad funcional en METs, score de Lee y manejo perioperatorio de fármacos crónicos',
      say: 'Bienvenidos a la clase de evaluación preoperatoria. Todo médico general en Chile debe enfrentar periódicamente la evaluación preanestésica de pacientes ambulatorios e internados. En el EUNACOM este tema se enfoca en tres aspectos fundamentales: asignar correctamente la categoría de estado físico ASA, calcular la capacidad funcional en METs e indicar con precisión cuáles medicamentos habituales se suspenden y cuáles deben mantenerse obligatoriamente la mañana de la cirugía. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Evaluación funcional',
      title: 'Capacidad funcional en METs y algoritmo de evaluación cardíaca',
      nodes: [
        { id: 'pro', col: 0, row: 2, k: 'start', t: 'Cirugía electiva programada', s: 'Evaluación preoperatoria ambulatoria en policlínico' },
        { id: 'met', col: 1, row: 1, k: 'q', t: '¿Capacidad funcional ≥ 4 METs?', s: 'Subir dos pisos de escaleras o caminar en subida' },
        { id: 'aut', col: 2, row: 0, k: 'good', t: 'Capacidad funcional adecuada', s: 'Bajo riesgo de eventos cardíacos perioperatorios' },
        { id: 'lee', col: 2, row: 2, k: 'risk', t: 'Menor a 4 METs o desconocida', s: 'Calcular predictores del score cardíaco de Lee (RCRI)' },
        { id: 'pab', col: 3, row: 0, k: 'good', t: 'Autorización a pabellón', s: 'Sin necesidad de pruebas cardíacas complementarias' },
        { id: 'tes', col: 3, row: 2, k: 'alert', t: 'Riesgo elevado: Test de esfuerzo', s: 'Ecocardiograma o angiografía solo si cambia conducta' },
      ],
      edges: [
        { from: 'pro', to: 'met', label: 'anamnesis dirigida' },
        { from: 'met', to: 'aut', label: 'cuatro o más METs' },
        { from: 'met', to: 'lee', label: 'menor a cuatro METs' },
        { from: 'aut', to: 'pab', label: 'cirugía autorizada' },
        { from: 'lee', to: 'pab', label: 'cero predictores' },
        { from: 'lee', to: 'tes', label: 'dos o más predictores' },
      ],
      steps: [
        {
          show: ['pro', 'met'],
          note: 'El punto de corte de los 4 METs',
          say: 'El primer paso ante todo paciente que va a una cirugía no cardíaca es interrogar su capacidad funcional expresada en equivalentes metabólicos o METs. La pregunta clave es si el paciente es capaz de subir dos pisos de escaleras a paso normal o caminar varias cuadras en subida sin detenerse por disnea o dolor torácico.',
        },
        {
          show: ['aut', 'pab'],
          note: 'Tolerancia funcional demostrada',
          say: 'Si el paciente tiene una capacidad funcional demostrada mayor o igual a cuatro METs, su reserva cardiopulmonar es excelente. En este escenario, las guías internacionales autorizan la cirugía directamente sin solicitar electrocardiograma de esfuerzo ni ecocardiograma, independientemente de sus factores de riesgo.',
        },
        {
          show: ['lee', 'tes'],
          note: 'Capacidad pobre y estratificación con score de Lee',
          say: 'Si la capacidad funcional es pobre, menor a cuatro METs, o no se puede evaluar porque el paciente tiene limitación ortopédica, se aplica el índice de riesgo cardíaco de Lee. Solo si el score arroja riesgo elevado y el resultado va a modificar la técnica quirúrgica se solicitan exámenes complementarios.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación de riesgo anestésico',
      title: 'Escala de estado físico ASA de la Sociedad Americana de Anestesiología',
      cards: [
        {
          title: 'Categorías I a III',
          tag: 'Manejo ambulatorio frecuente',
          kind: 'criteria',
          items: [
            {
              t: 'ASA uno: Paciente sano normal',
              d: 'Sin patología orgánica ni tabaquismo; peso normal',
              say: 'El paciente ASA uno es una persona completamente sana, no fumadora, sin consumo problemático de alcohol y con índice de masa corporal normal.',
            },
            {
              t: 'ASA dos: Enfermedad sistémica leve',
              d: 'Sin limitación funcional sustancial; tabaquismo o HTA controlada',
              say: 'El ASA dos tiene una patología sistémica leve bien controlada y sin limitación funcional: fumador activo, hipertenso compensado o diabetes controlada con fármacos orales.',
            },
            {
              t: 'ASA tres: Enfermedad sistémica severa',
              d: 'Con limitación funcional sustancial pero no incapacitante',
              say: 'El ASA tres presenta una patología severa con limitación de sus actividades diarias: infarto miocárdico antiguo de más de tres meses, angina estable de esfuerzo o diabetes con daño de órgano blanco.',
            },
          ],
        },
        {
          title: 'Categorías IV a VI',
          tag: 'Alto riesgo vital',
          kind: 'alert',
          items: [
            {
              t: 'ASA cuatro: Amenaza constante a la vida',
              d: 'Enfermedad incapacitante con riesgo vital permanente',
              say: 'El ASA cuatro padece una patología severa que pone en riesgo su vida de manera continua: infarto miocárdico reciente de menos de tres meses, angina inestable de reposo o insuficiencia cardíaca descompensada.',
            },
            {
              t: 'ASA cinco y seis',
              d: 'Cinco moribundo sin sobrevida sin cirugía; seis muerte encefálica',
              say: 'El ASA cinco es un paciente moribundo que no sobrevivirá veinticuatro horas sin la intervención quirúrgica. El ASA seis es un paciente en muerte encefálica donante de órganos.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estratificación cardiológica',
      title: 'Índice de Riesgo Cardíaco Revisado de Lee (Score RCRI)',
      cards: [
        {
          title: 'Los seis predictores de Lee',
          tag: 'Un punto por cada factor',
          kind: 'key',
          items: [
            {
              t: 'Cirugía de alto riesgo intrínseco',
              d: 'Cirugía vascular mayor intraperitoneal o intratorácica',
              say: 'El primer predictor es la cirugía de alto riesgo: procedimientos vasculares aórticos o periféricos mayores, cirugía esofágica o torácica mayor.',
            },
            {
              t: 'Cardiopatía isquémica documentada',
              d: 'Historia de infarto, angina de pecho o uso de nitratos',
              say: 'El segundo factor es el antecedente de cardiopatía coronaria con infarto previo, angina o antecedentes de revascularización coronaria previa.',
            },
            {
              t: 'Insuficiencia cardíaca congestiva',
              d: 'Historia de disnea paroxística, edema pulmonar o tercer ruido',
              say: 'El tercer factor es la presencia de insuficiencia cardíaca clínica documentada o antecedentes de edema agudo de pulmón.',
            },
            {
              t: 'Enfermedad cerebrovascular previa',
              d: 'Historia de accidente cerebrovascular isquémico o ataque transitorio',
              say: 'El cuarto factor es el antecedente de accidente cerebrovascular o ataque isquémico transitorio.',
            },
            {
              t: 'Diabetes mellitus insulinorrequiriente',
              d: 'Tratamiento crónico con insulina para control glicémico',
              say: 'El quinto factor es la diabetes que exige tratamiento con insulina exógena. La diabetes tratada solo con dieta o metformina no suma este punto.',
            },
            {
              t: 'Insuficiencia renal con creatinina elevada',
              d: 'Creatinina sérica basal mayor a dos miligramos por decilitro',
              say: 'El sexto factor es la falla renal con creatinina sérica preoperatoria superior a dos miligramos por decilitro.',
            },
          ],
        },
        {
          title: 'Interpretación del riesgo',
          tag: 'Mortalidad cardiovascular',
          kind: 'criteria',
          items: [
            {
              t: 'Cero predictores: Riesgo muy bajo',
              d: 'Complicaciones cardíacas mayores menores al cero coma cuatro por ciento',
              say: 'Con cero puntos el riesgo cardíaco mayor perioperatorio es despreciable y no requiere ningún estudio adicional.',
            },
            {
              t: 'Tres o más predictores: Alto riesgo',
              d: 'Complicaciones mayores superiores al nueve a once por ciento',
              say: 'Con dos o más predictores el riesgo de infarto o paro cardíaco supera el diez por ciento, requiriendo evaluación cardiológica formal y optimización médica.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Farmacología perioperatoria',
      title: 'Manejo de fármacos crónicos la mañana de la cirugía',
      head: ['Fármaco o grupo', 'Conducta la mañana de cirugía', 'Momento de suspensión', 'Motivo fisiopatológico'],
      rows: [
        {
          cells: ['Betabloqueadores y estatinas', 'MANTENER con sorbo de agua', 'No se suspenden jamás', 'Previene taquicardia de rebote e isquemia'],
          say: 'Los betabloqueadores y estatinas se toman la mañana de la cirugía con un sorbo de agua para evitar taquicardia refleja e infarto.',
        },
        {
          cells: ['IECAs y ARA-II', 'SUSPENDER la dosis matinal', 'Veinticuatro horas antes', 'Evita hipotensión refractaria en inducción'],
          say: 'Los inhibidores de la ECA y ARA dos se suspenden veinticuatro horas antes porque bloquean la respuesta presora a la anestesia general.',
        },
        {
          cells: ['Metformina oral', 'SUSPENDER día del pabellón', 'Veinticuatro a cuarenta y ocho horas', 'Previene acidosis láctica por hipoperfusión'],
          say: 'La metformina se suspende antes de la cirugía para evitar acidosis láctica grave si ocurre hipovolemia o daño renal intraoperatorio.',
        },
        {
          cells: ['Aspirina en prevención secundaria', 'MANTENER en cirugía general', 'Solo suspender en neurocirugía', 'Trombosis del stent supera riesgo de sangrado'],
          say: 'La aspirina en pacientes coronarios se mantiene en cirugía general; solo se suspende en neurocirugía o cirugía de cámara posterior del ojo.',
        },
        {
          cells: ['Clopidogrel', 'SUSPENDER cinco a siete días', 'Cinco a siete días previos', 'Inhibición plaquetaria irreversible profunda'],
          say: 'El clopidogrel debe suspenderse cinco a siete días antes por su potente efecto antiagregante irreversible.',
        },
        {
          cells: ['Anticoagulantes orales directos', 'SUSPENDER cuarenta y ocho horas', 'Sin terapia puente de heparina', 'Vida media corta con alto riesgo hemorrágico'],
          say: 'Los anticoagulantes orales directos como apixabán o rivaroxabán se suspenden cuarenta y ocho horas antes sin necesidad de puente con heparina.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo farmacológico específico',
      title: 'Fármacos cardiovasculares, hipoglicemiantes y corticoides',
      cards: [
        {
          title: 'Regla de oro cardiovascular',
          tag: 'Qué mantener y qué suspender',
          kind: 'alert',
          items: [
            {
              t: 'Betabloqueadores se mantienen siempre',
              d: 'Bisoprolol, carvedilol o atenolol con un sorbo de agua',
              say: 'La suspensión brusca de un betabloqueador desata taquicardia de rebote, hipertensión e isquemia miocárdica perioperatoria. Debe administrarse la mañana de la cirugía.',
            },
            {
              t: 'IECAs y ARA-II se suspenden 24 horas antes',
              d: 'Enalapril, losartán, valsartán u olmesartán',
              say: 'Los IECA y ARA dos bloquean la vasoconstricción compensatoria. Si se administran la mañana de la cirugía, el paciente presenta hipotensión severa refractaria a fluidos.',
            },
          ],
        },
        {
          title: 'Diabetes y dosis de estrés esteroidal',
          tag: 'Metabolismo y endocrinología',
          kind: 'pharma',
          items: [
            {
              t: 'Insulina basal y ayuno operatorio',
              d: 'Reducir insulina basal a la mitad o dos tercios; omitir rápida',
              say: 'En diabéticos que usan insulina, la mañana de la cirugía se reduce la dosis de insulina lenta a la mitad o dos tercios y se suspende la insulina rápida hasta reanudar alimentación.',
            },
            {
              t: 'Corticoides crónicos y dosis de estrés',
              d: 'Más de cinco miligramos de prednisona por tres semanas',
              say: 'Todo paciente que usa más de cinco miligramos de prednisona al día por más de tres semanas tiene suprimido el eje suprarrenal. Requiere dosis de estrés con hidrocortisona endovenosa en pabellón.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo hematológico',
      title: 'Anticoagulantes, antiagregantes y terapia puente',
      cards: [
        {
          title: 'Antiagregantes plaquetarios',
          tag: 'Aspirina vs Clopidogrel',
          kind: 'key',
          items: [
            {
              t: 'Aspirina en prevención secundaria se mantiene',
              d: 'El riesgo de trombosis vascular supera al sangrado quirúrgico menor',
              say: 'En pacientes portadores de stents coronarios la aspirina se mantiene durante todo el perioperatorio, excepto en neurocirugía y cirugía oftalmológica posterior donde un microhematoma es devastador.',
            },
            {
              t: 'Clopidogrel se suspende cinco a siete días',
              d: 'Requiere recambio de la población plaquetaria circulante',
              say: 'El clopidogrel produce inhibición irreversible del receptor plaquetario de ADP. Se suspende cinco a siete días antes de la cirugía para permitir la producción de nuevas plaquetas.',
            },
          ],
        },
        {
          title: 'Anticoagulación oral y terapia puente',
          tag: 'Warfarina vs DOACs',
          kind: 'criteria',
          items: [
            {
              t: 'Warfarina y acenocumarol: cinco días antes',
              d: 'Suspender cinco días antes y verificar INR menor a uno coma cinco',
              say: 'Los antagonistas de vitamina K se suspenden cinco días antes para normalizar el INR. Si el paciente tiene alto riesgo tromboembólico, se inicia terapia puente con heparina de bajo peso molecular.',
            },
            {
              t: 'DOACs: suspender 48 horas sin terapia puente',
              d: 'Apixabán y rivaroxabán tienen vida media corta y no requieren heparina',
              say: 'Los nuevos anticoagulantes orales directos se suspenden cuarenta y ocho horas antes de la cirugía. Gracias a su vida media corta, jamás requieren terapia puente con heparina.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Árbol de decisión clínica',
      title: 'Algoritmo de evaluación preoperatoria y manejo de fármacos',
      say: 'Analicemos el árbol de decisiones en la evaluación preoperatoria. La primera evaluación clasifica la capacidad funcional del paciente y el tipo de intervención programada.',
    },

    {
      type: 'table',
      kicker: 'Trampas del EUNACOM',
      title: 'Errores frecuentes en la preparación preoperatoria',
      head: ['Situación clínica', 'Conducta médica correcta', 'Error fatal o trampa'],
      rows: [
        {
          cells: [
            'Paciente coronario usuario de bisoprolol',
            'Mantener bisoprolol la mañana con sorbo de agua',
            'Suspender betabloqueador para no deprimir el miocardio',
          ],
          say: 'Suspender el betabloqueador produce taquicardia e infarto intraoperatorio.',
        },
        {
          cells: [
            'Hipertenso tratado con enalapril o losartán',
            'Suspender enalapril veinticuatro horas antes',
            'Administrar la dosis habitual la mañana del pabellón',
          ],
          say: 'Tomar enalapril la mañana de la cirugía causa hipotensión refractaria a la inducción.',
        },
        {
          cells: [
            'Paciente con stent coronario que va a colecistectomía',
            'Mantener aspirina durante toda la hospitalización',
            'Suspender aspirina siete días antes por miedo a sangrado',
          ],
          say: 'Suspender aspirina con un stent causa trombosis coronaria aguda en pabellón.',
        },
        {
          cells: [
            'Paciente que toma apixabán o rivaroxabán',
            'Suspender cuarenta y ocho horas antes sin heparina',
            'Indicar terapia puente con heparina de bajo peso molecular',
          ],
          say: 'Los anticoagulantes orales directos no requieren terapia puente con heparina.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.5.013',
      stem: 'Un paciente de 62 años, hipertenso en tratamiento crónico con enalapril y amlodipino, y con cardiopatía coronaria en tratamiento con bisoprolol y atorvastatina, será sometido a una hernioplastia inguinal electiva. ¿Cuál de las siguientes indicaciones sobre sus medicamentos habituales es la más apropiada para el día de la intervención?',
      question: '¿Cuál es la indicación farmacológica correcta?',
      options: [
        { letter: 'A', text: 'Suspender todos los medicamentos antihipertensivos y coronarios cuarenta y ocho horas antes' },
        { letter: 'B', text: 'Suspender el enalapril veinticuatro horas antes y mantener el bisoprolol y atorvastatina la mañana de la cirugía' },
        { letter: 'C', text: 'Suspender el bisoprolol veinticuatro horas antes y administrar el enalapril la mañana de la cirugía' },
        { letter: 'D', text: 'Mantener todos los fármacos sin excepción administrados con un sorbo de agua' },
        { letter: 'E', text: 'Reemplazar todos los fármacos orales por infusión de nitroprusiato de sodio' },
      ],
      correct: 'B',
      explanation: 'Las guías de evaluación perioperatoria recomiendan suspender los IECA (enalapril) y ARA-II 24 horas antes de la cirugía para evitar episodios graves de hipotensión refractaria a la inducción anestésica. En cambio, los betabloqueadores (bisoprolol) y las estatinas (atorvastatina) deben mantenerse rigurosamente la mañana de la cirugía con un sorbo de agua para prevenir taquicardia de rebote e isquemia miocárdica.',
      say: {
        stem: 'Revisemos esta pregunta clásica de farmacología perioperatoria. Un paciente hipertenso y coronario en tratamiento con enalapril, amlodipino, bisoprolol y atorvastatina va a hernioplastia electiva.',
        question: '¿Cuál es la conducta correcta respecto a sus medicamentos habituales?',
        options: 'Las alternativas proponen suspender todo, suspender enalapril y mantener bisoprolol y estatina, suspender bisoprolol y dar enalapril, o mantener todo sin cambios. Piénsalo.',
        answer: 'La respuesta correcta es la B. El enalapril se suspende veinticuatro horas antes para evitar la temida hipotensión refractaria durante la anestesia. Por el contrario, el bisoprolol y la atorvastatina jamás deben suspenderse bruscamente y se toman la mañana de la cirugía con un pequeño sorbo de agua para evitar infartos perioperatorios.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.5.013',
      stem: '¿Cuál de los siguientes pacientes corresponde con mayor precisión a la categoría de estado físico ASA tres de la American Society of Anesthesiologists?',
      question: '¿Cuál de los siguientes pacientes corresponde a ASA tres?',
      options: [
        { letter: 'A', text: 'Mujer de 32 años no fumadora, previamente sana, programada para biopsia mamaria' },
        { letter: 'B', text: 'Hombre de 45 años fumador de cinco cigarrillos al día, hipertenso bien controlado sin daño orgánico' },
        { letter: 'C', text: 'Hombre de 68 años con antecedente de infarto miocárdico hace un año, con angina estable a esfuerzos moderados' },
        { letter: 'D', text: 'Mujer de 72 años con infarto miocárdico hace tres semanas y angina de reposo inestable' },
        { letter: 'E', text: 'Paciente politraumatizado en shock hipovolémico que fallece durante la laparotomía' },
      ],
      correct: 'C',
      explanation: 'La categoría ASA III corresponde a un paciente con enfermedad sistémica severa que produce una limitación funcional sustancial pero no incapacitante. El antecedente de infarto miocárdico antiguo (> 3 meses) con angina estable o limitación al esfuerzo encaja tildadamente en ASA III. La opción A es ASA I (sano). La opción B es ASA II (enfermedad leve sin limitación). La opción D es ASA IV (amenaza constante a la vida).',
      say: {
        stem: 'Analicemos este ejercicio de clasificación ASA. Se pide identificar cuál de los pacientes descritos pertenece a la categoría de estado físico ASA tres.',
        question: '¿Cuál de las siguientes situaciones clínicas corresponde a un paciente ASA tres?',
        options: 'Las opciones describen: mujer sana para biopsia, hipertenso fumador controlado, infarto antiguo con angina de esfuerzo moderado, infarto reciente de tres semanas con angina inestable o politrauma en shock. Piénsalo.',
        answer: 'La respuesta correcta es la C. El paciente con infarto antiguo de más de tres meses con angina de esfuerzo tiene una limitación funcional real pero no incapacitante, lo que define al ASA tres. La opción B es ASA dos porque está compensado sin limitación, y la opción D es ASA cuatro porque el infarto es menor a tres meses y amenaza constantemente su vida.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos indispensables',
      title: 'Reglas de oro en evaluación preoperatoria',
      cards: [
        {
          title: 'Capacidad funcional y estratificación',
          tag: 'Criterios clínicos',
          kind: 'alert',
          items: [
            {
              t: 'Cuatro METs autorizan la cirugía',
              d: 'Subir dos pisos de escaleras descarta necesidad de pruebas cardíacas',
              say: 'Si el paciente sube dos pisos de escaleras sin problemas, tiene cuatro METs y no requiere estudios cardiológicos invasivos.',
            },
            {
              t: 'ASA tres limita la función sin amenazar la vida',
              d: 'Diferenciar del ASA cuatro que amenaza constantemente la vida',
              say: 'El ASA tres tiene limitación funcional por patología severa; el ASA cuatro tiene riesgo vital inminente como infarto menor a tres meses.',
            },
          ],
        },
        {
          title: 'Manejo de fármacos',
          tag: 'Decisiones matinales',
          kind: 'key',
          items: [
            {
              t: 'Betabloqueador se mantiene, IECA se suspende',
              d: 'Bisoprolol previene infarto; enalapril previene hipotensión refractaria',
              say: 'Mantén siempre los betabloqueadores y estatinas; suspende los IECA y ARA dos veinticuatro horas antes.',
            },
            {
              t: 'Aspirina se mantiene y DOACs no usan puente',
              d: 'Aspirina previene trombosis de stent y DOACs se suspenden 48 horas sin heparina',
              say: 'Si te llevas una sola idea de hoy: en el paciente coronario programado para cirugía general, mantén la aspirina y el betabloqueador con un sorbo de agua para evitar la trombosis aguda del stent y el infarto perioperatorio, y suspende el enalapril veinticuatro horas antes para prevenir el colapso hemodinámico a la inducción. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Evaluación Preoperatoria y Manejo de Medicamentos Crónicos',
    root: N(
      'start',
      'Paciente programado para cirugía electiva no cardíaca',
      'Evaluación clínica integral y anamnesis farmacológica',
      'Iniciamos la evaluación preoperatoria determinando la capacidad funcional y revisando los fármacos crónicos.',
      [
        'Capacidad funcional en METs',
        N(
          'q',
          '¿Capacidad funcional mayor o igual a cuatro METs?',
          'Sube dos pisos de escaleras o camina en subida',
          'Evaluamos si el paciente tolera cuatro equivalentes metabólicos sin síntomas.',
          [
            'Cuatro o más METs confirmados',
            N(
              'ok',
              'Autorización directa a pabellón',
              'Sin indicación de pruebas cardíacas de esfuerzo',
              'El paciente tiene excelente reserva y va a cirugía sin necesidad de ecocardiograma ni test de esfuerzo.'
            )
          ],
          [
            'Menor a cuatro METs o no evaluable',
            N(
              'do',
              'Calcular predictores del score de Lee (RCRI)',
              'Coronariopatía, falla cardíaca, ACV, diabetes o creatinina',
              'Estratificamos el riesgo cardíaco contando cuántos de los seis factores de Lee presenta el paciente.',
              [
                'Dos o más predictores de Lee',
                N(
                  'alert',
                  'Evaluación cardiológica adicional',
                  'Ecocardiograma o test de esfuerzo si cambia conducta',
                  'Se solicita evaluación formal por cardiología solo si el resultado modificará la técnica quirúrgica.'
                )
              ]
            )
          ]
        )
      ],
      [
        'Conducta con fármacos cardiovasculares',
        N(
          'q',
          '¿Qué medicamentos toma habitualmente?',
          'Betabloqueadores, estatinas, IECA o anticoagulantes',
          'Revisamos la indicación precisa para la mañana de la intervención.',
          [
            'Betabloqueadores y estatinas',
            N(
              'do',
              'Mantener la mañana de la cirugía con sorbo de agua',
              'Previene taquicardia de rebote e isquemia miocárdica',
              'Se administran puntualmente la mañana de la cirugía para evitar infartos perioperatorios.'
            )
          ],
          [
            'IECA o ARA-II (Enalapril / Losartán)',
            N(
              'alert',
              'Suspender veinticuatro horas antes de la cirugía',
              'Previene hipotensión arterial severa refractaria',
              'Se omite la dosis matinal para evitar vasodilatación incontrolable durante la inducción anestésica.'
            )
          ]
        )
      ]
    ),
  },
};
