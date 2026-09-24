// Clase 3.3 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_gastroenterologia.cjs (gastro-15).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'gastro-15',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Las complicaciones del cirrótico y las dos reglas que no fallan',
      say: 'Bienvenidos. Hoy vemos daño hepático crónico e hipertensión portal, es decir, las complicaciones del paciente cirrótico. Es un tema denso y de alta rentabilidad, pero tiene dos reglas que se preguntan sin falta: a todo cirrótico con ascitis que consulta se le hace paracentesis diagnóstica, y el TIPS está contraindicado si hay encefalopatía. No son reglas para memorizar a ciegas: las dos salen directo de la fisiopatología, y por eso vamos a partir por ahí. Vamos a entender por qué.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología',
      title: 'La cirrosis descompensa por dos vías',
      nodes: [
        { id: 'cir', col: 0, row: 2, k: 'start', t: 'Cirrosis', s: 'Hígado fibrótico' },
        { id: 'htp', col: 1, row: 1, k: 'mech', t: 'Hipertensión portal', s: 'La sangre no pasa por el hígado' },
        { id: 'var', col: 2, row: 0, k: 'risk', t: 'Várices esofágicas', s: 'Pueden sangrar' },
        { id: 'asc', col: 2, row: 1, k: 'risk', t: 'Ascitis', s: 'Y peritonitis bacteriana espontánea' },
        { id: 'shr', col: 3, row: 1, k: 'alert', t: 'Síndrome hepatorrenal', s: 'Falla renal funcional' },
        { id: 'ih', col: 1, row: 3, k: 'mech', t: 'Insuficiencia hepática', s: 'El hígado no alcanza a funcionar' },
        { id: 'enc', col: 2, row: 3, k: 'risk', t: 'Encefalopatía', s: 'Toxinas llegan al cerebro' },
        { id: 'coa', col: 2, row: 4, k: 'risk', t: 'Coagulopatía', s: 'INR alto, plaquetas bajas' },
      ],
      edges: [
        { from: 'cir', to: 'htp' }, { from: 'htp', to: 'var' }, { from: 'htp', to: 'asc' }, { from: 'asc', to: 'shr' },
        { from: 'cir', to: 'ih' }, { from: 'ih', to: 'enc' }, { from: 'ih', to: 'coa' },
      ],
      steps: [
        { show: ['cir'], note: 'Venga de donde venga',
          say: 'Partamos por el mapa. La cirrosis puede venir del alcohol o de las hepatitis crónicas que vimos en la clase anterior, pero una vez instalada, descompensa siempre por dos vías.' },
        { show: ['htp'], note: 'Primera vía: la presión',
          say: 'La primera vía es la hipertensión portal. El hígado fibrótico opone resistencia, la sangre del intestino no logra pasar, y la presión sube hacia atrás, en todo el territorio de la vena porta. Casi todo lo que vamos a ver hoy es consecuencia de esa presión.' },
        { show: ['var', 'asc'], note: 'Várices y ascitis',
          say: 'Esa presión abre colaterales, que son las várices esofágicas, y empuja líquido al peritoneo, que es la ascitis. Y esa ascitis se puede infectar: la peritonitis bacteriana espontánea.' },
        { show: ['shr'], note: 'El riñón paga las consecuencias',
          say: 'Y en el cirrótico avanzado, la circulación está tan alterada que el riñón termina fallando sin estar enfermo: es el síndrome hepatorrenal. Guárdalo, porque la albúmina que vamos a indicar en varias situaciones existe justamente para prevenirlo.' },
        { show: ['ih'], note: 'Segunda vía: la función',
          say: 'La segunda vía es la insuficiencia hepática: el hígado ya no alcanza a hacer su trabajo.' },
        { show: ['enc', 'coa'], note: 'No depura, no fabrica',
          say: 'No depura las toxinas, y aparece la encefalopatía. No fabrica factores de coagulación, y aparece la coagulopatía. Cada una de estas complicaciones tiene su conducta, y las vamos a ver una por una.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Várices esofágicas',
      title: 'Profilaxis: ¿ya sangró o nunca sangró?',
      cards: [
        { title: 'Pesquisa', tag: 'Todo cirrótico', kind: 'key', items: [
          { t: 'Endoscopía a todo cirrótico', d: 'Para buscar várices',
            say: 'Empecemos por las várices. A todo cirrótico se le hace una endoscopía para pesquisarlas, aunque nunca haya sangrado. La idea es encontrarlas antes de que sangren, porque la hemorragia variceal es la complicación más dramática del cirrótico.' },
        ] },
        { title: 'Profilaxis primaria', tag: 'Nunca sangró', kind: 'pharma', items: [
          { t: 'Betabloqueo no selectivo', d: 'Propranolol o carvedilol',
            say: 'Si tiene várices y nunca ha sangrado, hablamos de profilaxis primaria, y es con betabloqueo no selectivo: propranolol o carvedilol. El betabloqueo baja la presión portal y con eso el riesgo de sangrado.' },
          { t: 'Contraindicado: ligadura', d: 'Asma, EPOC grave, intolerancia',
            say: 'Solo si el betabloqueo está contraindicado, por ejemplo en un asmático, se hace ligadura endoscópica. Ligar de entrada a un paciente que puede recibir propranolol es la trampa.' },
        ] },
        { title: 'Profilaxis secundaria', tag: 'Ya sangró', kind: 'alert', items: [
          { t: 'Propranolol + ligadura', d: 'Las dos juntas',
            say: 'Si ya sangró una vez, la profilaxis secundaria suma las dos cosas: propranolol más ligadura. Primaria, una; secundaria, las dos. Esa diferencia se pregunta.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Urgencia',
      title: 'Hemorragia variceal activa',
      nodes: [
        { id: 'hda', col: 0, row: 1, k: 'start', t: 'Cirrótico con HDA', s: 'Hematemesis o melena' },
        { id: 'vol', col: 1, row: 0, k: 'good', t: 'Reposición de volumen', s: 'Estabilizar' },
        { id: 'ter', col: 1, row: 2, k: 'good', t: 'Terlipresina', s: 'O somatostatina / octreótido' },
        { id: 'atb', col: 2, row: 1, k: 'alert', t: 'Antibióticos: ceftriaxona', s: 'Profilaxis de PBE — no omitir' },
        { id: 'lig', col: 3, row: 1, k: 'good', t: 'Endoscopía con ligadura', s: 'En las primeras 12 h' },
        { id: 'tia', col: 3, row: 3, k: 'mech', t: 'Tiamina', s: 'Si es alcohólico' },
        { id: 'tips', col: 4, row: 1, k: 'refer', t: 'Refractaria: TIPS', s: 'Derivación portosistémica' },
      ],
      edges: [
        { from: 'hda', to: 'vol' }, { from: 'hda', to: 'ter' }, { from: 'vol', to: 'atb' }, { from: 'ter', to: 'atb' },
        { from: 'atb', to: 'lig' }, { from: 'lig', to: 'tips', label: 'falla' }, { from: 'lig', to: 'tia' },
      ],
      steps: [
        { show: ['hda'], note: 'La complicación más dramática',
          say: 'Ahora, el cirrótico que llega sangrando. Esto conecta con la clase de hemorragia digestiva alta, pero aquí el paquete es específico.' },
        { show: ['vol', 'ter'], note: 'Estabilizar y bajar la presión portal',
          say: 'Primero, reposición de volumen para estabilizar. Y en paralelo, terlipresina, o somatostatina u octreótido, que bajan la presión portal y ayudan a detener el sangrado.' },
        { show: ['atb'], note: 'La omisión más preguntada',
          say: 'Tercero, y aquí está la trampa: antibióticos, con ceftriaxona. El cirrótico que sangra tiene alto riesgo de infectarse, y el antibiótico es profilaxis de peritonitis bacteriana espontánea. Omitir los antibióticos es el error que buscan.' },
        { show: ['lig'], note: 'Diagnostica y trata',
          say: 'Cuarto, endoscopía con ligadura de las várices, dentro de las primeras doce horas. La endoscopía confirma que el sangrado es variceal y, en el mismo acto, lo trata.' },
        { show: ['tia'], note: 'No olvidar en el alcohólico',
          say: 'Y si el paciente es alcohólico, se agrega tiamina.' },
        { show: ['tips'], note: 'Rescate si todo falla',
          say: 'Si a pesar de todo el sangrado es refractario, el rescate es el TIPS, una derivación portosistémica que descomprime el sistema portal. Guarda este nombre, porque más adelante vamos a ver cuándo está prohibido.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Ascitis',
      title: 'Tratamiento escalonado',
      cards: [
        { title: 'No complicada', tag: 'Primera línea', kind: 'pharma', items: [
          { t: 'Restricción de sodio', d: 'Base del tratamiento',
            say: 'Vamos a la ascitis. Recuerda que es líquido empujado por la hipertensión portal, y que el riñón del cirrótico retiene sodio. Por eso el tratamiento de la ascitis no complicada parte con restricción de sodio.' },
          { t: 'Espironolactona ± furosemida', d: 'Diuréticos',
            say: 'Y se suman diuréticos: espironolactona, con o sin furosemida. La espironolactona es la base, y la furosemida se agrega cuando hace falta.' },
        ] },
        { title: 'A tensión', tag: 'Evacuar', kind: 'alert', items: [
          { t: 'Paracentesis evacuadora + albúmina', d: '~8 g de albúmina por litro extraído',
            say: 'Si la ascitis está a tensión, se hace paracentesis evacuadora y se repone albúmina, cerca de ocho gramos por cada litro extraído. La albúmina evita que el paciente descompense su circulación al sacarle tanto líquido de golpe.' },
          { t: 'Antes: paracentesis diagnóstica', d: 'Descartar PBE antes de drenar',
            say: 'Pero ojo: antes de evacuar, siempre la paracentesis diagnóstica. Drenar sin descartar una peritonitis es una trampa clásica.' },
        ] },
        { title: 'Refractaria', tag: 'Últimos escalones', kind: 'key', items: [
          { t: 'Paracentesis seriadas con albúmina', d: 'Considerar TIPS o trasplante',
            say: 'Si la ascitis es refractaria a los diuréticos, se hacen paracentesis seriadas con albúmina, y se considera el TIPS o el trasplante hepático.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Paracentesis diagnóstica',
      title: 'Lo que dice el líquido ascítico',
      nodes: [
        { id: 'par', col: 0, row: 1, k: 'start', t: 'Paracentesis diagnóstica', s: 'A todo cirrótico con ascitis que consulta' },
        { id: 'gasa', col: 1, row: 0, k: 'q', t: 'GASA ≥ 1,1 g/dL', s: 'Gradiente albúmina suero-ascitis' },
        { id: 'htp', col: 2, row: 0, k: 'effect', t: 'Hipertensión portal', s: 'Confirma la causa' },
        { id: 'alb', col: 1, row: 1, k: 'q', t: 'Albúmina en líquido < 1,5 g/dL', s: 'Poca defensa' },
        { id: 'pp', col: 2, row: 1, k: 'good', t: 'Alto riesgo de PBE', s: 'Profilaxis primaria' },
        { id: 'pmn', col: 1, row: 2, k: 'q', t: 'PMN ≥ 250/mm³', s: 'Polimorfonucleares' },
        { id: 'pbe', col: 2, row: 2, k: 'alert', t: 'Peritonitis bacteriana espontánea', s: 'Tratar ya' },
      ],
      edges: [
        { from: 'par', to: 'gasa' }, { from: 'gasa', to: 'htp' },
        { from: 'par', to: 'alb' }, { from: 'alb', to: 'pp' },
        { from: 'par', to: 'pmn' }, { from: 'pmn', to: 'pbe' },
      ],
      steps: [
        { show: ['par'], note: 'Regla número uno del tema',
          say: 'Y aquí viene la primera regla de oro. A todo cirrótico con ascitis que consulta, por lo que sea, se le hace una paracentesis diagnóstica. Veamos qué buscamos en ese líquido.' },
        { show: ['gasa', 'htp'], note: 'La causa de la ascitis',
          say: 'Primero, la causa. Se calcula el gradiente entre la albúmina del suero y la del líquido ascítico. Si es de uno coma uno gramos por decilitro o más, confirma que la ascitis se debe a hipertensión portal.' },
        { show: ['alb', 'pp'], note: 'Riesgo de infección',
          say: 'Segundo, el riesgo. Si la albúmina del líquido está bajo uno coma cinco gramos por decilitro, ese líquido tiene poca capacidad de defensa, el riesgo de peritonitis es alto, y se indica profilaxis primaria.' },
        { show: ['pmn', 'pbe'], note: 'El diagnóstico de PBE',
          say: 'Y tercero, lo más importante: el recuento de polimorfonucleares. Doscientos cincuenta o más por milímetro cúbico hacen el diagnóstico de peritonitis bacteriana espontánea.' },
      ],
    },

    {
      type: 'flow',
      kicker: 'Peritonitis bacteriana espontánea',
      title: 'Diagnóstico y tratamiento de la PBE',
      nodes: [
        { id: 'cli', col: 0, row: 1, k: 'start', t: 'Cirrótico con ascitis', s: 'Fiebre, dolor o cualquier descompensación' },
        { id: 'pmn', col: 1, row: 1, k: 'q', t: '≥ 250 PMN/mm³', s: 'Agente más frecuente: E. coli' },
        { id: 'cef', col: 2, row: 0, k: 'good', t: 'Cefotaxima o ceftriaxona ev', s: '5–7 días' },
        { id: 'alb', col: 2, row: 2, k: 'good', t: 'Albúmina día 1 y día 3', s: 'Previene el síndrome hepatorrenal' },
        { id: 'ami', col: 3, row: 0, k: 'trap', t: 'No aminoglucósidos', s: 'Nefrotóxicos' },
        { id: 'cip', col: 3, row: 2, k: 'mech', t: 'Profilaxis secundaria', s: 'Ciprofloxacino indefinido mientras haya ascitis' },
      ],
      edges: [
        { from: 'cli', to: 'pmn', label: 'paracentesis' }, { from: 'pmn', to: 'cef' }, { from: 'pmn', to: 'alb' },
        { from: 'cef', to: 'ami' }, { from: 'alb', to: 'cip', label: 'después' },
      ],
      steps: [
        { show: ['cli'], note: 'La clínica puede ser mínima',
          say: 'Ahora la peritonitis bacteriana espontánea. Fíjate que el paciente puede llegar solo con febrícula o con más ascitis, sin dolor peritoneal. Por eso no esperamos la clínica: puncionamos.' },
        { show: ['pmn'], note: 'Una bacteria intestinal',
          say: 'Con doscientos cincuenta o más polimorfonucleares por milímetro cúbico, es una peritonitis. El agente más frecuente es la Escherichia coli, una bacteria que viene del intestino. No hay una perforación ni un foco quirúrgico: por eso se llama espontánea.' },
        { show: ['cef'], note: 'Cefalosporina de tercera generación',
          say: 'El tratamiento es cefotaxima, o ceftriaxona, endovenosa por cinco a siete días.' },
        { show: ['ami'], note: 'Distractor clásico',
          say: 'Y ojo con el distractor: los aminoglucósidos no se usan, porque son nefrotóxicos, y el riñón de este paciente ya está en riesgo.' },
        { show: ['alb'], note: 'La mitad del tratamiento',
          say: 'La otra mitad del tratamiento es la albúmina, el día uno y el día tres. No es un detalle: la albúmina es la que previene el síndrome hepatorrenal.' },
        { show: ['cip'], note: 'Después de una PBE',
          say: 'Y superada la peritonitis, queda profilaxis secundaria indefinida con ciprofloxacino, mientras persista la ascitis. Un paciente que ya hizo una peritonitis tiene alto riesgo de repetirla.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Encefalopatía hepática',
      title: 'Buscar el precipitante',
      cards: [
        { title: 'Clínica', tag: 'Toxinas en el cerebro', kind: 'criteria', items: [
          { t: 'Desorientación + asterixis', d: 'El temblor en aleteo',
            say: 'Vamos a la encefalopatía hepática. El hígado no depura las toxinas intestinales, como el amonio, y estas llegan al cerebro. Se ve como desorientación y asterixis, ese temblor en aleteo de las manos.' },
          { t: 'Precipitante más frecuente: infección', d: 'También HDA, constipación, sedantes, diuréticos',
            say: 'Casi siempre hay un gatillo, y el más frecuente es una infección. También la hemorragia digestiva, la constipación, los sedantes y los diuréticos.' },
        ] },
        { title: 'Tratamiento', tag: 'Dos pasos', kind: 'pharma', items: [
          { t: 'Tratar el precipitante', d: 'Siempre lo primero',
            say: 'Por eso el tratamiento tiene dos pasos. Primero, buscar y tratar el precipitante. Un cirrótico que se desorienta tiene una infección hasta que se demuestre lo contrario.' },
          { t: 'Lactulosa: 2–3 deposiciones blandas al día', d: '+ rifaximina',
            say: 'Segundo, lactulosa, titulada hasta lograr dos a tres deposiciones blandas al día, y se puede sumar rifaximina. La lactulosa ayuda a eliminar las toxinas por el intestino. Y por lo mismo, la constipación es un precipitante: el paciente tiene que evacuar.' },
        ] },
        { title: 'TIPS', tag: 'Segunda regla de oro', kind: 'alert', items: [
          { t: 'Contraindicado en la encefalopatía', d: 'La sangre salta el hígado',
            say: 'Y aquí la segunda regla de oro. El TIPS está contraindicado en la encefalopatía. ¿Por qué? Porque crea un puente que hace que la sangre intestinal salte el hígado. Baja la presión portal, pero manda más amonio directo al cerebro.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Riñón y coagulación',
      title: 'Síndrome hepatorrenal y coagulopatía',
      cards: [
        { title: 'Síndrome hepatorrenal', tag: 'Muy mal pronóstico', kind: 'alert', items: [
          { t: 'Falla renal funcional', d: 'Cirrótico avanzado',
            say: 'Nos quedan dos complicaciones. El síndrome hepatorrenal es una falla renal funcional del cirrótico avanzado: el riñón está sano, pero no recibe una perfusión adecuada. Su pronóstico es muy malo.' },
          { t: 'Terlipresina + albúmina', d: 'Y trasplante hepático',
            say: 'Se trata con terlipresina más albúmina, y la solución definitiva es el trasplante. Por eso insistimos tanto en prevenirlo con albúmina en la peritonitis y en las paracentesis grandes.' },
        ] },
        { title: 'Coagulopatía', tag: 'No corregir de rutina', kind: 'normal', items: [
          { t: 'INR alto + trombopenia', d: 'Déficit de factores e hiperesplenismo',
            say: 'La coagulopatía tiene dos componentes: un INR alto, porque el hígado no fabrica factores, y plaquetas bajas, por el hiperesplenismo.' },
          { t: 'Corregir solo si sangra o hay procedimiento', d: 'No para normalizar el examen',
            say: 'Y se corrige solo ante un sangrado o un procedimiento. No se transfunde para normalizar un número. De hecho, un INR alto no impide hacer la paracentesis diagnóstica.' },
        ] },
      ],
    },

    {
      type: 'pathway',
      intro: 'Ahora pongamos todo en un solo árbol de decisión.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Complicaciones del cirrótico: conducta clave',
      head: ['Situación', 'Primera línea', 'Trampa frecuente'],
      rows: [
        { cells: ['Várices que nunca sangraron', 'Betabloqueo no selectivo (propranolol)', 'Ligar de entrada sin indicación'],
          say: 'Repasemos en una tabla. Várices que nunca sangraron: propranolol. La trampa es ligar de entrada sin indicación; la ligadura sola queda para quien no tolera el betabloqueo.' },
        { cells: ['Hemorragia variceal activa', 'Volumen + terlipresina + antibióticos + ligadura', 'Omitir los antibióticos'],
          say: 'Hemorragia variceal activa: volumen, terlipresina, antibióticos y ligadura. La trampa es olvidar los antibióticos.' },
        { cells: ['Ascitis a tensión', 'Paracentesis diagnóstica, luego evacuadora + albúmina', 'Drenar sin descartar PBE'],
          say: 'Ascitis a tensión: primero paracentesis diagnóstica, luego evacuadora con albúmina. La trampa es drenar sin descartar la peritonitis.' },
        { cells: ['Líquido con ≥ 250 PMN/mm³', 'Cefotaxima + albúmina', 'Usar aminoglucósidos'],
          say: 'Líquido con doscientos cincuenta polimorfonucleares o más: cefotaxima y albúmina. La trampa son los aminoglucósidos, que dañan un riñón que ya está en riesgo.' },
        { cells: ['Encefalopatía + ascitis refractaria', 'Lactulosa + tratar precipitante; NO TIPS', 'Indicar TIPS'],
          say: 'Y encefalopatía con ascitis refractaria: lactulosa y tratar el precipitante. La trampa es indicar un TIPS, que solo empeoraría la encefalopatía.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 58 años con cirrosis por alcohol, en control ambulatorio, consulta por aumento del perímetro abdominal en la última semana y febrículas. Examen: ascitis moderada, sin dolor peritoneal, sin encefalopatía. Hemodinámicamente estable.',
      question: '¿Cuál es la primera conducta?',
      options: [
        { letter: 'A', text: 'Aumentar la dosis de espironolactona y furosemida' },
        { letter: 'B', text: 'Paracentesis diagnóstica' },
        { letter: 'C', text: 'Paracentesis evacuadora de gran volumen sin estudio del líquido' },
        { letter: 'D', text: 'Iniciar lactulosa' },
        { letter: 'E', text: 'Derivar para instalación de TIPS' },
      ],
      correct: 'B',
      explanation: 'Cirrótico con ascitis y fiebre: la primera conducta es la paracentesis diagnóstica para descartar PBE, antes de ajustar diuréticos o evacuar. Si hay ≥ 250 PMN/mm³, cefotaxima endovenosa + albúmina. Aunque la fiebre sea baja y no haya dolor, obliga a puncionar.',
      say: {
        stem: 'Vamos al caso. Hombre de cincuenta y ocho años con cirrosis por alcohol, en control, que consulta por aumento del perímetro abdominal en la última semana y febrículas. Tiene ascitis moderada, sin dolor peritoneal ni encefalopatía, y está estable.',
        question: '¿Cuál es la primera conducta?',
        options: 'Las alternativas: subir los diuréticos, paracentesis diagnóstica, paracentesis evacuadora sin estudiar el líquido, iniciar lactulosa, o derivar para TIPS. Piénsalo.',
        answer: 'Es la B, paracentesis diagnóstica. Cirrótico con ascitis que consulta, y además con febrícula: hay que descartar una peritonitis bacteriana espontánea antes que nada. El distractor tentador es subir los diuréticos, porque el problema parece ser solo más ascitis. Pero la peritonitis puede no dar dolor, y si no puncionas, no la ves. Y la paracentesis evacuadora sin estudiar el líquido es el mismo error: sacas el líquido sin saber si está infectado. Si el recuento sale sobre doscientos cincuenta polimorfonucleares, inicias cefotaxima y albúmina.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Paciente con cirrosis y várices esofágicas medianas encontradas en una endoscopía de tamizaje. Nunca ha presentado hemorragia digestiva.',
      question: '¿Cuál es la profilaxis indicada?',
      options: [
        { letter: 'A', text: 'Ligadura endoscópica de várices + propranolol' },
        { letter: 'B', text: 'Propranolol (o carvedilol) por vía oral, titulado por frecuencia cardíaca' },
        { letter: 'C', text: 'Instalación electiva de TIPS' },
        { letter: 'D', text: 'Terlipresina endovenosa mensual' },
        { letter: 'E', text: 'Ácido tranexámico oral permanente' },
      ],
      correct: 'B',
      explanation: 'Profilaxis primaria (nunca sangró): betabloqueo no selectivo, titulado para reducir la frecuencia cardíaca. La ligadura se añade en la profilaxis secundaria o se usa sola si el betabloqueo está contraindicado (asma, EPOC grave, intolerancia).',
      say: {
        stem: 'Ahora una pregunta del banco EUNACOM. Paciente cirrótico con várices esofágicas medianas encontradas en una endoscopía de tamizaje. Nunca ha sangrado.',
        question: '¿Cuál es la profilaxis indicada?',
        options: 'Las opciones: ligadura más propranolol, propranolol o carvedilol titulado por frecuencia cardíaca, TIPS electivo, terlipresina mensual, o ácido tranexámico permanente. Piénsalo.',
        answer: 'La respuesta es la B, betabloqueo no selectivo. Nunca sangró, así que es profilaxis primaria, y se titula bajando la frecuencia cardíaca. El distractor tentador es la A, ligadura más propranolol, pero esa combinación es la profilaxis secundaria, para el que ya sangró. Y el TIPS o la terlipresina no tienen lugar en un paciente que nunca ha sangrado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Caso representativo · banco EUNACOM',
      stem: 'Cirrótico con ascitis refractaria a diuréticos que además ha tenido dos episodios de encefalopatía hepática en el último mes. El equipo tratante propone instalar un TIPS para controlar la ascitis.',
      question: '¿Cuál es la conducta correcta?',
      options: [
        { letter: 'A', text: 'Instalar el TIPS: resuelve simultáneamente la ascitis y reduce el riesgo de várices' },
        { letter: 'B', text: 'No instalar el TIPS: la encefalopatía es una contraindicación' },
        { letter: 'C', text: 'Instalar el TIPS solo si se agrega lactulosa profiláctica' },
        { letter: 'D', text: 'Instalar el TIPS y suspender los betabloqueadores' },
        { letter: 'E', text: 'Instalar el TIPS con anestesia general para evitar la descompensación' },
      ],
      correct: 'B',
      explanation: 'El TIPS hace que la sangre intestinal "salte" el hígado: alivia la hipertensión portal, pero aumenta el amonio y las toxinas que llegan al cerebro. La encefalopatía, aun leve o recurrente, lo contraindica. Se mantienen paracentesis seriadas con albúmina y se prioriza la evaluación para trasplante.',
      say: {
        stem: 'Y otra pregunta del banco. Cirrótico con ascitis refractaria a diuréticos, que además ha tenido dos episodios de encefalopatía hepática en el último mes. El equipo propone instalar un TIPS para controlar la ascitis.',
        question: '¿Cuál es la conducta correcta?',
        options: 'Las opciones: instalar el TIPS porque resuelve la ascitis y las várices, no instalarlo porque la encefalopatía lo contraindica, instalarlo con lactulosa profiláctica, instalarlo y suspender el betabloqueo, o instalarlo con anestesia general. Piénsalo.',
        answer: 'Es la B: no se instala. La encefalopatía contraindica el TIPS, porque la sangre saltaría el hígado y llevaría más amonio al cerebro. El distractor tentador es la C, agregar lactulosa, que suena a solución intermedia, pero no elimina la contraindicación. Este paciente sigue con paracentesis seriadas con albúmina y va a evaluación para trasplante. Fíjate que la alternativa A suena muy razonable, porque el TIPS sí trataría la ascitis. Pero el costo sería un cerebro más intoxicado, y eso es lo que el examen quiere que veas.',
      },
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Ascitis y PBE', tag: 'Regla uno', kind: 'alert', items: [
          { t: 'Cirrótico con ascitis: paracentesis diagnóstica', d: 'Antes que nada',
            say: 'Cerremos con las reglas de oro. Todo cirrótico con ascitis que consulta: paracentesis diagnóstica antes que nada.' },
          { t: 'PBE: cefotaxima + albúmina', d: '≥ 250 PMN/mm³; albúmina días 1 y 3',
            say: 'Con doscientos cincuenta polimorfonucleares o más, es peritonitis: cefotaxima más albúmina el día uno y el día tres.' },
        ] },
        { title: 'Várices', tag: 'Primaria vs secundaria', kind: 'pharma', items: [
          { t: 'Nunca sangró: propranolol', d: 'Ya sangró: propranolol + ligadura',
            say: 'Várices que nunca sangraron: propranolol. Ya sangró: propranolol más ligadura.' },
          { t: 'Sangrado activo: no olvidar antibióticos', d: 'Terlipresina + ceftriaxona + ligadura',
            say: 'Y en el sangrado activo, terlipresina, ligadura y nunca olvidar los antibióticos.' },
        ] },
        { title: 'Encefalopatía', tag: 'Regla dos', kind: 'key', items: [
          { t: 'Precipitante + lactulosa', d: 'El TIPS está contraindicado',
            say: 'En la encefalopatía, tratar el precipitante y dar lactulosa, y el TIPS está contraindicado. Si te llevas una sola idea de hoy: al cirrótico con ascitis se le punciona siempre, y al encefalopático nunca se le pone un TIPS. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'Complicaciones del cirrótico: ¿qué hago primero?',
    root: N('start', 'Cirrótico descompensado', 'Consulta en urgencias',
      'Partimos del cirrótico que llega descompensado a urgencias. Lo primero es identificar cuál de las complicaciones tiene.',
      ['', N('q', '¿Qué lo descompensó?', 'Sangrado, ascitis o compromiso de conciencia',
        '¿Viene sangrando, con más ascitis, o desorientado? Cada vía tiene su conducta.',
        ['Sangra', N('alert', 'Hemorragia variceal', 'Volumen + terlipresina + ceftriaxona + ligadura < 12 h',
          'Si sangra: volumen, terlipresina, antibióticos con ceftriaxona y endoscopía con ligadura en las primeras doce horas. Si es refractaria, TIPS. Después, profilaxis secundaria con propranolol más ligadura.')],
        ['Ascitis', N('do', 'Paracentesis diagnóstica', 'Siempre, antes que nada',
          'Si tiene ascitis, paracentesis diagnóstica siempre, aunque no tenga dolor. Contamos los polimorfonucleares.',
          ['≥ 250 PMN', N('alert', 'PBE: cefotaxima + albúmina', 'Albúmina días 1 y 3; luego ciprofloxacino',
            'Con doscientos cincuenta o más, es peritonitis bacteriana espontánea: cefotaxima endovenosa y albúmina el día uno y el tres. Después, profilaxis con ciprofloxacino.')],
          ['< 250 PMN', N('ok', 'Tratar la ascitis', 'Sodio + diuréticos; a tensión: evacuar + albúmina',
            'Sin peritonitis, tratamos la ascitis: restricción de sodio y diuréticos, y si está a tensión, paracentesis evacuadora con albúmina.')])],
        ['Desorientado', N('q', 'Encefalopatía: ¿precipitante?', 'Infección, HDA, constipación, sedantes',
          'Si está desorientado con asterixis, es encefalopatía. Buscamos el precipitante, que casi siempre es una infección.',
          ['', N('refer', 'Lactulosa + tratar precipitante', 'NO TIPS · evaluar trasplante',
            'Tratamos el gatillo y damos lactulosa hasta dos a tres deposiciones blandas al día. El TIPS está contraindicado, y el paciente se evalúa para trasplante.')])])]),
  },
};
