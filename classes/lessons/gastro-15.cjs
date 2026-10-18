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
          say: 'Partamos por el mapa. La cirrosis puede venir del alcohol o de las hepatitis crónicas que vimos en la clase anterior, pero una vez instalada, descompensa siempre por dos vías. Mira esta ecografía de un hígado cirrótico: la superficie es irregular, señalada por las flechas.',
          photo: { src: 'biblioteca/01_gastroenterologia/gastro-15/04_eco-cirrosis__cto-radiologia_p42.jpg', label: 'Ecografía en la cirrosis', at: 'Mira esta ecografía', credit: 'Manual CTO Radiología 14.ª ed., p. 42' } },
        { show: ['htp'], note: 'Primera vía: la presión',
          say: 'La primera vía es la hipertensión portal. El hígado fibrótico opone resistencia, la sangre del intestino no logra pasar, y la presión sube hacia atrás, en todo el territorio de la vena porta. Casi todo lo que vamos a ver hoy es consecuencia de esa presión.' },
        { show: ['var', 'asc'], note: 'Várices y ascitis',
          say: 'Esa presión abre colaterales, que son las várices esofágicas, y empuja líquido al peritoneo, que es la ascitis. Y esa ascitis se puede infectar: la peritonitis bacteriana espontánea. Mira esta portografía: se rellenan grandes colaterales venosas tortuosas. Y estas venas dilatadas alrededor del ombligo, en la pared del abdomen, son la cabeza de medusa.',
          photos: [
            { src: 'biblioteca/01_gastroenterologia/gastro-15/03_cabeza-de-medusa_2__cto-digestivo_p216.jpg', label: 'Portografía: colaterales', at: 'Mira esta portografía', credit: 'Manual CTO Digestivo 14.ª ed., p. 216' },
            { src: 'biblioteca/01_gastroenterologia/gastro-15/03_cabeza-de-medusa_1__cto-digestivo_p216.jpg', label: 'Cabeza de medusa', at: 'Y estas venas dilatadas', credit: 'Manual CTO Digestivo 14.ª ed., p. 216' },
          ] },
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
          say: 'Primero, reposición de volumen para estabilizar al paciente. Y en paralelo, sin esperar la endoscopía, terlipresina, o somatostatina u octreótido, que bajan la presión portal y ayudan a detener el sangrado.' },
        { show: ['atb'], note: 'La omisión más preguntada',
          say: 'Tercero, y aquí está la trampa: antibióticos, con ceftriaxona. El cirrótico que sangra tiene alto riesgo de infectarse, y el antibiótico es profilaxis de peritonitis bacteriana espontánea. Omitir los antibióticos es el error que buscan, y es la omisión más frecuente en las alternativas.' },
        { show: ['lig'], note: 'Diagnostica y trata',
          say: 'Cuarto, endoscopía con ligadura de las várices, dentro de las primeras doce horas. La endoscopía confirma que el sangrado es variceal y, en el mismo acto, lo trata. Mira esta endoscopía: una várice esofágica abultada, con la banda elástica de la ligadura puesta en su base.',
          photo: { src: 'biblioteca/01_gastroenterologia/gastro-15/05_varices-esofagicas-ligadura__atlas-eunacom.jpg', label: 'Várice con ligadura', at: 'Mira esta endoscopía', credit: 'Atlas EUNACOM 2026' } },
        { show: ['tia'], note: 'No olvidar en el alcohólico',
          say: 'Y si el paciente es alcohólico, se agrega tiamina, como en todo paciente con consumo crónico de alcohol que llega a urgencias.' },
        { show: ['tips'], note: 'Rescate si todo falla',
          say: 'Si a pesar de todo el sangrado es refractario, el rescate es el TIPS, una derivación portosistémica que descomprime el sistema portal. Guarda este nombre, porque más adelante vamos a ver cuándo está prohibido. Y una vez superado el episodio, el paciente queda con profilaxis secundaria: propranolol más ligadura.' },
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
            say: 'Si la ascitis está a tensión, se hace paracentesis evacuadora y se repone albúmina, cerca de ocho gramos por cada litro extraído. Mira esta ascitis a tensión: el abdomen globoso, tenso, con la piel brillante. La albúmina evita que el paciente descompense su circulación al sacarle tanto líquido de golpe.',
            photo: { src: 'biblioteca/01_gastroenterologia/gastro-15/02_ascitis_tension_foto__commons.jpg', label: 'Ascitis a tensión', at: 'Mira esta ascitis a tensión', credit: 'Wikimedia Commons «Hepaticfailure.jpg», CC BY-SA 3.0, James Heilman, MD' } },
          { t: 'Antes: paracentesis diagnóstica', d: 'Descartar PBE antes de drenar',
            say: 'Pero ojo: antes de evacuar, siempre la paracentesis diagnóstica. Drenar sin descartar una peritonitis es una trampa clásica.' },
        ] },
        { title: 'Refractaria', tag: 'Últimos escalones', kind: 'key', items: [
          { t: 'Paracentesis seriadas con albúmina', d: 'Considerar TIPS o trasplante',
            say: 'Si la ascitis es refractaria a los diuréticos, se hacen paracentesis seriadas con albúmina, y se considera el TIPS o el trasplante hepático. Pero el TIPS no siempre se puede usar, y eso lo veremos en la encefalopatía.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Procedimiento',
      title: 'Paracentesis: cómo se hace',
      cards: [
        { title: 'Dónde y cómo', tag: 'Técnica', kind: 'key', items: [
          { t: 'Fosa ilíaca izquierda', d: '2 a 3 cm sobre y medial a la espina ilíaca',
            say: 'Con consentimiento y la vejiga vacía, el paciente va semisentado o de lado. Se punciona en la fosa ilíaca izquierda, dos a tres centímetros sobre y por dentro de la espina ilíaca anterosuperior, o en la línea media bajo el ombligo. Se evitan las cicatrices y los vasos epigástricos.' },
          { t: 'Asepsia, anestesia y técnica en Z', d: 'Para que no filtre líquido',
            say: 'Con asepsia y anestesia local, y con técnica en Z, para que después no filtre líquido por el orificio.' },
        ] },
        { title: 'Qué se saca', tag: 'Dos tipos', kind: 'normal', items: [
          { t: 'Diagnóstica: 30 a 60 mL', d: 'Recuento celular, albúmina, cultivo al lado de la cama',
            say: 'La diagnóstica son treinta a sesenta mililitros: recuento celular, albúmina para el gradiente, y cultivo en frascos de hemocultivo, directamente junto a la cama.' },
          { t: 'Evacuadora: albúmina si más de 5 L', d: '6 a 8 g por litro',
            say: 'En la evacuadora, si se extraen más de cinco litros se repone albúmina, seis a ocho gramos por litro. Y no se corrige el INR ni las plaquetas de rutina.' },
        ] },
        { title: 'Complicaciones', tag: 'Raras', kind: 'alert', items: [
          { t: 'Filtración y hematoma de pared', d: 'Perforación intestinal',
            say: 'Pueden ocurrir filtración, hematoma de la pared, y, rara vez, perforación intestinal.' },
          { t: 'Hipotensión posparacentesis', d: 'Disfunción circulatoria',
            say: 'Y la hipotensión por disfunción circulatoria posparacentesis, que la albúmina ayuda a prevenir.' },
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
          say: 'Y aquí viene la primera regla de oro. A todo cirrótico con ascitis que consulta, por lo que sea, se le hace una paracentesis diagnóstica. Aunque venga por otra cosa, aunque no tenga dolor ni fiebre alta. Veamos qué buscamos en ese líquido.' },
        { show: ['gasa', 'htp'], note: 'La causa de la ascitis',
          say: 'Primero, la causa. Se calcula el gradiente entre la albúmina del suero y la del líquido ascítico. Si es de uno coma uno gramos por decilitro o más, confirma que la ascitis se debe a hipertensión portal. Es decir, que el problema es la presión y no, por ejemplo, un tumor en el peritoneo.' },
        { show: ['alb', 'pp'], note: 'Riesgo de infección',
          say: 'Segundo, el riesgo. Si la albúmina del líquido está bajo uno coma cinco gramos por decilitro, ese líquido tiene poca capacidad de defensa, el riesgo de peritonitis es alto, y se indica profilaxis primaria.' },
        { show: ['pmn', 'pbe'], note: 'El diagnóstico de PBE',
          say: 'Y tercero, lo más importante: el recuento de polimorfonucleares. Doscientos cincuenta o más por milímetro cúbico hacen el diagnóstico de peritonitis bacteriana espontánea. Ese número se pregunta, apréndelo tal cual.' },
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
            say: 'Se trata con terlipresina más albúmina, y la solución definitiva es el trasplante. Por eso insistimos tanto en prevenirlo con albúmina en la peritonitis y en las paracentesis grandes. Es mucho más fácil prevenirlo que tratarlo.' },
        ] },
        { title: 'Coagulopatía', tag: 'No corregir de rutina', kind: 'normal', items: [
          { t: 'INR alto + trombopenia', d: 'Déficit de factores e hiperesplenismo',
            say: 'La coagulopatía tiene dos componentes: un INR alto, porque el hígado no fabrica factores, y plaquetas bajas, por el hiperesplenismo.' },
          { t: 'Corregir solo si sangra o hay procedimiento', d: 'No para normalizar el examen',
            say: 'Y se corrige solo ante un sangrado o un procedimiento. No se transfunde plasma ni plaquetas solo para normalizar un examen.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo de base',
      title: 'Dieta y cuidados del cirrótico',
      cards: [
        { title: 'Dieta', tag: 'Qué sí y qué no', kind: 'key', items: [
          { t: 'Sodio menor de 2 g al día', d: 'Sin sal agregada ni procesados',
            say: 'La dieta del cirrótico tiene una regla central: sodio menor de dos gramos al día. Sin sal agregada y sin alimentos procesados.' },
          { t: 'No restringir líquidos ni proteínas', d: 'Líquidos: solo si sodio menor de 125',
            say: 'No se restringen los líquidos, salvo que el sodio plasmático sea menor de ciento veinticinco. Y tampoco las proteínas: uno coma dos a uno coma cinco gramos por kilo, incluso en la encefalopatía.' },
          { t: 'Colación nocturna; sin alcohol', d: '35 kcal/kg, comidas fraccionadas',
            say: 'Se da un aporte calórico adecuado, comidas fraccionadas y una colación nocturna para evitar el catabolismo. Y abstinencia absoluta de alcohol.' },
        ] },
        { title: 'Insuficiencia hepática crónica', tag: 'Cómo se reconoce', kind: 'normal', items: [
          { t: 'Ictericia, coagulopatía, edema, encefalopatía', d: 'Eritema palmar, arañas, ginecomastia',
            say: 'La insuficiencia hepática crónica se reconoce por ictericia, coagulopatía, hipoalbuminemia con edema y ascitis, encefalopatía, eritema palmar, arañas vasculares, ginecomastia y atrofia testicular. Mira esta araña vascular: un punto rojo central del que salen pequeñas ramas, que desaparece si la presionas. Y este eritema palmar es el enrojecimiento de las eminencias tenar e hipotenar; junto con las arañas, refleja el exceso de estrógenos.',
            photos: [
              { src: 'biblioteca/01_gastroenterologia/gastro-15/01_aranas-vasculares__cto-digestivo_p211.jpg', label: 'Arañas vasculares', at: 'Mira esta araña vascular', credit: 'Manual CTO Digestivo 14.ª ed., p. 211' },
              { src: 'biblioteca/01_gastroenterologia/gastro-15/02_eritema-palmar__cto-digestivo_p212.jpg', label: 'Eritema palmar', at: 'Y este eritema palmar', credit: 'Manual CTO Digestivo 14.ª ed., p. 212' },
            ] },
        ] },
        { title: 'Medidas de base', tag: 'Ante una descompensación', kind: 'pharma', items: [
          { t: 'Buscar el desencadenante', d: 'Infección, hemorragia, alcohol, fármacos, trombosis, hepatocarcinoma',
            say: 'Ante una descompensación, siempre se busca el desencadenante: infección, hemorragia, alcohol, fármacos, trombosis portal o hepatocarcinoma.' },
          { t: 'Vacunas, evitar AINE y sedantes', d: 'Hepatitis A y B, neumococo, influenza',
            say: 'Se vacuna contra hepatitis A y B, neumococo e influenza, y se evitan los antiinflamatorios y los sedantes. Además, ecografía de vigilancia del hepatocarcinoma.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Pronóstico',
      title: 'Child-Pugh y MELD',
      cards: [
        { title: 'Qué mide función', tag: 'Síntesis', kind: 'key', items: [
          { t: 'Albúmina, INR y bilirrubina', d: 'Las transaminasas miden daño, no función',
            say: 'La función del hígado se lee con la albúmina, el INR, que refleja los factores de coagulación, y la bilirrubina. Las transaminasas miden daño, no función. Esa diferencia se pregunta.' },
        ] },
        { title: 'Child-Pugh', tag: 'Cinco variables', kind: 'criteria', items: [
          { t: 'Bilirrubina, albúmina, INR, ascitis, encefalopatía', d: 'A: 5 a 6 · B: 7 a 9 · C: 10 a 15',
            say: 'El Child-Pugh suma cinco variables: bilirrubina, albúmina, INR, ascitis y encefalopatía. De cinco a seis puntos es A, compensado. De siete a nueve, B. Y de diez a quince, C, descompensado y de peor pronóstico.' },
        ] },
        { title: 'MELD', tag: 'Trasplante', kind: 'pharma', items: [
          { t: 'Bilirrubina, INR, creatinina y sodio', d: 'Ordena la lista de espera',
            say: 'El MELD usa bilirrubina, INR, creatinina y sodio, y es el que ordena la lista de espera de trasplante.' },
          { t: 'Derivar a trasplante con una complicación mayor o MELD 15 o más', d: 'Evaluación en centro de trasplante',
            say: 'Se deriva a evaluación de trasplante cuando aparece una complicación mayor o el MELD llega a quince o más.' },
        ] },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'La hipertensión portal',
      images: [
        { src: 'animaciones/gastro-15/A1_hipertension_portal_3d.mp4', label: 'Colaterales y ascitis', credit: 'Modelo 3D: Z-Anatomy (CC BY-SA 4.0) · BodyParts3D (DBCLS, CC BY 4.0)' },
      ],
      steps: [
        { note: 'La sangre busca otro camino',
          say: 'Normalmente la sangre del intestino y del bazo pasa por la porta y atraviesa el hígado. El hígado cirrótico frena ese paso y la presión portal sube. El bazo crece, y la sangre busca colaterales: várices esofágicas y cabeza de medusa. Y el líquido se filtra al abdomen: ascitis.' },
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
        { cells: ['Dieta del cirrótico', 'Sodio menor de 2 g al día; sin restringir proteínas', 'Restringir proteínas en la encefalopatía'],
          say: 'Y la dieta del cirrótico: sodio menor de dos gramos al día, sin restringir proteínas, ni siquiera en la encefalopatía. Restringir proteínas es la trampa.' },
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
        answer: 'Es la B, paracentesis diagnóstica. Cirrótico con ascitis que consulta, y además con febrícula: hay que descartar una peritonitis bacteriana espontánea antes que nada. El distractor tentador es subir los diuréticos, porque el problema parece ser solo más ascitis. Pero la peritonitis puede no dar dolor, y si no puncionas, no la ves. Y la paracentesis evacuadora sin estudiar el líquido es el mismo error: sacas el líquido sin saber si está infectado.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2019 · Pregunta 148',
      stem: 'Paciente de 55 años con múltiples episodios de hematemesis, cerca de un litro, en la última hora. Al examen: palidez de piel y mucosas, FC 120/min, PA 80/60 mmHg, estigmas de daño hepático crónico, abdomen blando y sensible.',
      question: '¿Cuál es la conducta inicial?',
      options: [
        { letter: 'A', text: 'Administrar terlipresina endovenosa' },
        { letter: 'B', text: 'Administrar cristaloides endovenosos' },
        { letter: 'C', text: 'Instalar balón de Sengstaken' },
        { letter: 'D', text: 'Realizar endoscopía digestiva alta' },
        { letter: 'E', text: 'Transfundir glóbulos rojos' },
      ],
      correct: 'B',
      explanation: 'Hemorragia digestiva alta variceal masiva, con hipotensión y taquicardia: la conducta inicial, antes que cualquier otra cosa, es reponer volumen con cristaloides. La terlipresina y la endoscopía se dan de inmediato después, pero primero se estabiliza al paciente.',
      say: {
        stem: 'Y ahora preguntas reales. Esta es del EUNACOM de julio de dos mil diecinueve. Paciente de cincuenta y cinco años con varios episodios de hematemesis, cerca de un litro en la última hora. Está pálido, con una frecuencia cardíaca de ciento veinte y una presión de ochenta sobre sesenta, con estigmas de daño hepático crónico.',
        question: '¿Cuál es la conducta inicial?',
        options: 'Las opciones: terlipresina endovenosa, cristaloides endovenosos, balón de Sengstaken, endoscopía digestiva alta, o transfundir glóbulos rojos. Piénsalo.',
        answer: 'Es la B, cristaloides. Independiente de la causa, toda hemorragia digestiva se maneja primero reponiendo volumen. La terlipresina y la endoscopía son parte del paquete, pero no van antes que estabilizar al paciente que está en shock.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 98',
      stem: 'Paciente de 55 años, con daño hepático crónico por virus hepatitis C, consulta por malestar general, febrículas, confusión y aumento del perímetro abdominal. Al examen: matidez desplazable. Paracentesis diagnóstica: transudado con 300 leucocitos por mm³, 100 % polimorfonucleares.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Administrar albúmina endovenosa' },
        { letter: 'B', text: 'Realizar paracentesis evacuadora' },
        { letter: 'C', text: 'Observar' },
        { letter: 'D', text: 'Administrar antibióticos de forma empírica' },
        { letter: 'E', text: 'Iniciar terapia con furosemida y espironolactona' },
      ],
      correct: 'D',
      explanation: 'Trescientos leucocitos, cien por ciento polimorfonucleares en el líquido ascítico: peritonitis bacteriana espontánea. También corresponde dar albúmina, pero lo prioritario y lo que define la pregunta es iniciar antibióticos empíricos de inmediato, con cefotaxima.',
      say: {
        stem: 'Esta es del EUNACOM de julio de dos mil trece. Paciente de cincuenta y cinco años, con daño hepático crónico por virus C, que consulta por malestar general, febrículas, confusión y más ascitis. Al examen tiene matidez desplazable, y la paracentesis diagnóstica muestra trescientos leucocitos, cien por ciento polimorfonucleares.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: albúmina endovenosa, paracentesis evacuadora, observar, antibióticos empíricos, o diuréticos. Piénsalo.',
        answer: 'Es la D, antibióticos empíricos. Trescientos polimorfonucleares confirman la peritonitis bacteriana espontánea. También va a necesitar albúmina, pero lo que define esta pregunta y lo más urgente es partir el antibiótico, con cefotaxima, sin esperar el cultivo.',
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
        answer: 'Es la B: no se instala. La encefalopatía contraindica el TIPS, porque la sangre saltaría el hígado y llevaría más amonio al cerebro. El distractor tentador es la A, porque el TIPS sí trataría la ascitis, pero a costa de un cerebro más intoxicado. Y la lactulosa no elimina la contraindicación. Este paciente sigue con paracentesis seriadas con albúmina y va a evaluación para trasplante.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Julio 2015 · Pregunta 123",
      "stem": "Paciente con antecedente de daño hepático crónico por alcohol presenta desorientación, lenguaje incoherente y tendencia a la somnolencia. Al examen físico tiene ictericia, arañas vasculares en la cara y el pecho, asterixis y compromiso cualitativo de conciencia.",
      "question": "¿Qué fármaco es el más adecuado para su tratamiento?",
      "options": [
        {
          "letter": "A",
          "text": "Amonio"
        },
        {
          "letter": "B",
          "text": "N-acetilcisteína"
        },
        {
          "letter": "C",
          "text": "Risperidona"
        },
        {
          "letter": "D",
          "text": "Donepezilo"
        },
        {
          "letter": "E",
          "text": "Lactulosa"
        }
      ],
      "correct": "E",
      "explanation": "Compromiso de conciencia con asterixis en un cirrótico es una encefalopatía hepática. Se trata con lactulosa, buscando 2 a 3 deposiciones blandas al día, y corrigiendo el factor desencadenante: infección, hemorragia digestiva, trastorno electrolítico o constipación. La amonemia orienta el diagnóstico; no es un tratamiento.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de julio de dos mil quince. Paciente con daño hepático crónico por alcohol, que está desorientado, con lenguaje incoherente y somnoliento. Tiene ictericia, arañas vasculares, asterixis y compromiso cualitativo de conciencia.",
        "question": "¿Qué fármaco es el más adecuado para su tratamiento?",
        "options": "Las opciones: amonio, N acetilcisteína, risperidona, donepezilo, o lactulosa. Piénsalo.",
        "answer": "Es la E, lactulosa. Un cirrótico confuso y con asterixis tiene una encefalopatía hepática, y la lactulosa reduce la absorción de amonio en el intestino. Junto con ella hay que buscar siempre qué la descompensó, partiendo por las infecciones. La risperidona es la trampa: sedar a este paciente empeora la encefalopatía."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.3.009 · Conceptos generales de hipertensión portal",
      "stem": "Hombre de 58 años con ascitis de reciente aparición. Se realiza una paracentesis diagnóstica: albúmina en líquido ascítico 1,0 g/dL, con albúmina plasmática de 3,2 g/dL. Proteínas totales del líquido 1,5 g/dL y 100 células/mm3.",
      "question": "¿Qué indica el gradiente de albúmina sérica-ascítica de este paciente?",
      "options": [
        {
          "letter": "A",
          "text": "Ascitis por carcinomatosis peritoneal"
        },
        {
          "letter": "B",
          "text": "Ascitis por hipertensión portal"
        },
        {
          "letter": "C",
          "text": "Ascitis por tuberculosis peritoneal"
        },
        {
          "letter": "D",
          "text": "Ascitis pancreática"
        },
        {
          "letter": "E",
          "text": "Peritonitis bacteriana secundaria"
        }
      ],
      "correct": "B",
      "explanation": "El gradiente de albúmina sérica-ascítica es 3,2 menos 1,0, es decir 2,2 g/dL. Un gradiente de 1,1 g/dL o más indica hipertensión portal (cirrosis, insuficiencia cardíaca, síndrome de Budd-Chiari); uno menor de 1,1 sugiere causas peritoneales como carcinomatosis, tuberculosis o pancreatitis. Las proteínas bajas orientan a cirrosis más que a causa cardíaca.",
      "say": {
        "stem": "Hombre de cincuenta y ocho años con ascitis reciente. En la paracentesis, la albúmina del líquido es uno, la del plasma es tres coma dos, con proteínas bajas y cien células.",
        "question": "¿Qué indica el gradiente de albúmina de este paciente?",
        "options": "Las opciones: carcinomatosis peritoneal, hipertensión portal, tuberculosis peritoneal, ascitis pancreática, o peritonitis secundaria. Piénsalo.",
        "answer": "Es la B. El gradiente es dos coma dos, y todo gradiente de uno coma uno o más indica hipertensión portal. La carcinomatosis tienta como causa de ascitis nueva en un hombre mayor, pero esa da un gradiente bajo, porque el problema está en el peritoneo y no en la presión portal."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.01.5.025 · Paracentesis",
      "stem": "Hombre de 60 años con cirrosis y ascitis a tensión refractaria a diuréticos. Se realiza una paracentesis evacuadora, extrayendo 7 litros de líquido ascítico sin incidentes.",
      "question": "¿Qué medida es fundamental para prevenir la disfunción circulatoria postparacentesis?",
      "options": [
        {
          "letter": "A",
          "text": "Administrar furosemida endovenosa en dosis altas"
        },
        {
          "letter": "B",
          "text": "Administrar albúmina endovenosa, 6 a 8 g por litro extraído"
        },
        {
          "letter": "C",
          "text": "Administrar 3 litros de suero fisiológico"
        },
        {
          "letter": "D",
          "text": "Restringir completamente el sodio por 48 horas"
        },
        {
          "letter": "E",
          "text": "No se requiere ninguna medida adicional"
        }
      ],
      "correct": "B",
      "explanation": "En paracentesis de más de 5 litros se debe reponer albúmina endovenosa, 6 a 8 g por cada litro extraído, para prevenir la disfunción circulatoria postparacentesis, que se asocia a hiponatremia, insuficiencia renal (síndrome hepatorrenal) y mayor mortalidad. Los cristaloides son menos eficaces como expansores en este contexto.",
      "say": {
        "stem": "Hombre de sesenta años con cirrosis y ascitis a tensión que no responde a diuréticos. Se le hace una paracentesis evacuadora de siete litros.",
        "question": "¿Qué medida es fundamental para prevenir la disfunción circulatoria después del procedimiento?",
        "options": "Las opciones: furosemida endovenosa en dosis altas, albúmina endovenosa de seis a ocho gramos por litro extraído, tres litros de suero fisiológico, restricción total de sodio, o nada adicional. Piénsalo.",
        "answer": "Es la B. Cuando sacas más de cinco litros, repones albúmina, seis a ocho gramos por litro, para evitar la disfunción circulatoria y la falla renal. El suero fisiológico tienta porque también expande volumen, pero en el cirrótico es menos eficaz y se va al tercer espacio."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.3.010 · Regímenes dietéticos fundamentales",
      "stem": "Un hombre de 58 años con cirrosis hepática por alcohol presenta ascitis moderada, sin encefalopatía. Su natremia es 136 mEq/L.",
      "question": "¿Cuál es el régimen dietético más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Restricción hídrica bajo 500 mL/día"
        },
        {
          "letter": "B",
          "text": "Restricción proteica estricta, bajo 0,5 g/kg/día"
        },
        {
          "letter": "C",
          "text": "Régimen hiposódico (unos 2 g de sodio al día) con aporte proteico normal"
        },
        {
          "letter": "D",
          "text": "Régimen hipersódico para expandir el volumen"
        },
        {
          "letter": "E",
          "text": "Ayuno hasta resolver la ascitis"
        }
      ],
      "correct": "C",
      "explanation": "En la ascitis cirrótica el pilar dietético es la restricción de sodio (unos 2 g de sodio, o 5 g de sal, al día) junto a diuréticos. El aporte proteico debe ser normal (1,2-1,5 g/kg/día), porque suelen estar desnutridos; la restricción proteica ya no se recomienda. La restricción hídrica solo se indica con natremia bajo 125 mEq/L.",
      "say": {
        "stem": "Un hombre de cincuenta y ocho años con cirrosis alcohólica tiene ascitis moderada, sin encefalopatía y con sodio plasmático normal.",
        "question": "¿Cuál es el régimen dietético más adecuado?",
        "options": "Las opciones: restricción hídrica severa, restricción proteica estricta, régimen hiposódico con proteínas normales, régimen hipersódico o ayuno. Piénsalo.",
        "answer": "Es la C. La base es restringir el sodio, con un aporte de proteínas normal porque suelen estar desnutridos. La restricción proteica tienta por la cirrosis, pero empeora la desnutrición y ya no se recomienda."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.06.1.022 · Insuficiencia hepática crónica",
      "stem": "Hombre de 59 años con cirrosis hepática alcohólica, en control en policlínico. Se desea estimar su pronóstico mediante la clasificación de Child-Pugh.",
      "question": "¿Cuál de los siguientes parámetros NO forma parte de la clasificación de Child-Pugh?",
      "options": [
        {
          "letter": "A",
          "text": "Bilirrubina total"
        },
        {
          "letter": "B",
          "text": "Creatinina plasmática"
        },
        {
          "letter": "C",
          "text": "Tiempo de protrombina o INR"
        },
        {
          "letter": "D",
          "text": "Albúmina plasmática"
        },
        {
          "letter": "E",
          "text": "Presencia y grado de ascitis"
        }
      ],
      "correct": "B",
      "explanation": "Child-Pugh incluye bilirrubina, albúmina, tiempo de protrombina o INR, ascitis y encefalopatía. La creatinina no forma parte de Child-Pugh: está en el MELD (bilirrubina, INR, creatinina y sodio en el MELD-Na), que se usa para priorizar el trasplante hepático.",
      "say": {
        "stem": "Un paciente con cirrosis alcohólica, y quieres calcular su Child-Pugh.",
        "question": "¿Qué parámetro no forma parte de Child-Pugh?",
        "options": "Las opciones: bilirrubina, creatinina, protrombina o INR, albúmina o ascitis. Piénsalo.",
        "answer": "Es la B. La creatinina es del MELD, no de Child-Pugh. Child-Pugh usa bilirrubina, albúmina, protrombina, ascitis y encefalopatía."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.06.4.011 · Estudio de función hepática",
      "stem": "Paciente de 45 años con cirrosis hepática conocida presenta una descompensación aguda. Se desea evaluar precozmente la capacidad de síntesis del hígado.",
      "question": "¿Cuál es el parámetro que refleja más rápidamente los cambios en la función de síntesis hepática?",
      "options": [
        {
          "letter": "A",
          "text": "Tiempo de protrombina o INR"
        },
        {
          "letter": "B",
          "text": "Albúmina plasmática"
        },
        {
          "letter": "C",
          "text": "Transaminasas (GOT y GPT)"
        },
        {
          "letter": "D",
          "text": "Fosfatasa alcalina"
        },
        {
          "letter": "E",
          "text": "GGT"
        }
      ],
      "correct": "A",
      "explanation": "Los factores de coagulación tienen vida media de horas (el factor VII, cerca de 6 horas), por lo que el tiempo de protrombina o INR refleja precozmente la función de síntesis. La albúmina tiene vida media cercana a 20 días y cambia lentamente. Las transaminasas indican necrosis hepatocelular, y FA y GGT, colestasia.",
      "say": {
        "stem": "Un paciente cirrótico se descompensa y quieres evaluar rápido la síntesis hepática.",
        "question": "¿Qué parámetro cambia más rápido?",
        "options": "Las opciones: protrombina o INR, albúmina, transaminasas, fosfatasa alcalina o GGT. Piénsalo.",
        "answer": "Es la A. La protrombina, porque los factores de coagulación duran horas. La albúmina también mide síntesis, pero tarda semanas en bajar."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.06.5.001 · Paracentesis",
      "stem": "Hombre de 61 años con cirrosis y ascitis presenta dolor abdominal difuso, fiebre de 38 °C y leve confusión. Se realiza paracentesis diagnóstica.",
      "question": "¿Qué hallazgo del líquido ascítico confirma peritonitis bacteriana espontánea?",
      "options": [
        {
          "letter": "A",
          "text": "Recuento de polimorfonucleares de 250/mm3 o más"
        },
        {
          "letter": "B",
          "text": "Proteínas mayores de 2,5 g/dL"
        },
        {
          "letter": "C",
          "text": "Gradiente de albúmina suero-ascitis mayor de 1,1 g/dL"
        },
        {
          "letter": "D",
          "text": "Glucosa menor de 50 mg/dL con múltiples gérmenes en el Gram"
        },
        {
          "letter": "E",
          "text": "Recuento de glóbulos rojos mayor de 10.000/mm3"
        }
      ],
      "correct": "A",
      "explanation": "La PBE se define por 250 o más polimorfonucleares por mm3 en el líquido ascítico, sin foco quirúrgico. Se trata con cefotaxima o ceftriaxona y albúmina. Un GASA mayor de 1,1 indica hipertensión portal, no infección. Glucosa baja con flora polimicrobiana sugiere peritonitis secundaria por perforación, que requiere TAC y cirugía.",
      "say": {
        "stem": "Hombre cirrótico con ascitis, fiebre y leve confusión. Le haces una paracentesis.",
        "question": "¿Qué hallazgo confirma peritonitis bacteriana espontánea?",
        "options": "Las opciones: polimorfonucleares de doscientos cincuenta o más, proteínas altas, gradiente de albúmina alto, glucosa baja con varios gérmenes o muchos glóbulos rojos. Piénsalo.",
        "answer": "Es la A. Doscientos cincuenta polimorfonucleares o más. La glucosa baja con varios gérmenes es tentadora, pero apunta a peritonitis secundaria por perforación."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.10.2.006 · Encefalopatías tóxico metabólicas (urémica, hepática, etc)",
      "stem": "Hombre de 63 años con cirrosis alcohólica, abstinente, es traído por somnolencia y desorientación de 2 días. Al examen tiene asterixis, sin fiebre ni dolor abdominal, y refiere constipación de 5 días. Glicemia y electrolitos normales. La paracentesis no muestra signos de infección.",
      "question": "¿Cuál es el tratamiento más adecuado?",
      "options": [
        {
          "letter": "A",
          "text": "Flumazenil"
        },
        {
          "letter": "B",
          "text": "Restricción proteica absoluta"
        },
        {
          "letter": "C",
          "text": "Benzodiacepinas para la agitación"
        },
        {
          "letter": "D",
          "text": "Lactulosa oral para lograr 2 a 3 deposiciones blandas al día"
        },
        {
          "letter": "E",
          "text": "Furosemida endovenosa"
        }
      ],
      "correct": "D",
      "explanation": "Un compromiso de conciencia con asterixis en un cirrótico es una encefalopatía hepática, aquí precipitada por constipación. Se buscan y corrigen los precipitantes (infección, hemorragia, diuréticos, alteraciones electrolíticas) y se indica lactulosa para lograr 2 a 3 deposiciones blandas al día, agregando rifaximina si recurre. La restricción proteica ya no se recomienda y las benzodiacepinas la empeoran.",
      "say": {
        "stem": "Hombre cirrótico, somnoliento y desorientado, con asterixis y cinco días sin evacuar.",
        "question": "¿Qué tratamiento indicas?",
        "options": "Las opciones: flumazenil, restricción proteica absoluta, benzodiacepinas, lactulosa o furosemida. Piénsalo.",
        "answer": "Es la D. Lactulosa hasta lograr dos a tres deposiciones blandas al día. La restricción proteica era la indicación clásica, pero hoy no se recomienda porque empeora la desnutrición."
      }
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
            say: 'Várices que nunca sangraron: propranolol, y ligadura sola solo si no lo tolera. Ya sangró: propranolol más ligadura.' },
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
      'Partimos del cirrótico que llega descompensado a urgencias. Lo primero es identificar cuál de las complicaciones tiene, porque cada una sale de una de las dos vías que vimos: la presión portal o la falla del hígado.',
      ['', N('q', '¿Qué lo descompensó?', 'Sangrado, ascitis o compromiso de conciencia',
        '¿Viene sangrando, con más ascitis, o desorientado? Pueden coexistir, y entonces se manejan todas, pero cada una tiene su conducta.',
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
