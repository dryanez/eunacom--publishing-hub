// Clase 18.20 — guion docente escrito a mano (estándar Módulo 3 · Pediatría).
// Fuente clínica: books/scripts/dataset_pediatria.cjs (ped-20).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ped-20',
  tier: 2,
  slides: [
    {
      type: 'cover',
      subtitle: 'Hipoglicemia neonatal, hipocalcemia, trastornos del metabolismo mineral en el recién nacido, protocolos de corrección endovenosa y prevención de daño neurológico',
      say: 'Bienvenidos a la clase sobre hipoglicemia, hipocalcemia y trastornos metabólicos neonatales, una de las emergencias bioquímicas más comunes en la sala de recién nacidos y una pregunta reiterada en el examen EUNACOM. En esta sesión aprenderemos a definir y estratificar la hipoglicemia en las primeras horas, dominaremos el cálculo de la velocidad de infusión de glucosa sin cometer errores osmolares y revisaremos el manejo agudo de la hipocalcemia con gluconato de calcio. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Homeostasia energética perinatal',
      title: 'Transición Metabólica al Nacer, Consumo Cerebral y Vulnerabilidad',
      nodes: [
        { id: 'pla', col: 0, row: 1, k: 'start', t: 'Cese de aporte placentario continuo', s: 'El clampeo del cordón interrumpe el flujo ininterrumpido de glucosa materna' },
        { id: 'glu', col: 1, row: 1, k: 'mech', t: 'Glucogenolisis y gluconeogénesis', s: 'Activación hepática compensatoria de fosforilasa y lipólisis de grasa parda' },
        { id: 'con', col: 2, row: 1, k: 'risk', t: 'Alto consumo cerebral de glucosa', s: 'El cerebro neonatal utiliza el noventa por ciento de la glucosa total circulante' },
        { id: 'dan', col: 3, row: 1, k: 'alert', t: 'Daño neuronal excitotóxico', s: 'Falla de bombas iónicas con edema celular y apoptosis cortical si no se corrige' },
      ],
      edges: [
        { from: 'pla', to: 'glu', label: 'clampeo de cordón' },
        { from: 'glu', to: 'con', label: 'mantenimiento basal' },
        { from: 'con', to: 'dan', label: 'agotamiento energético' },
      ],
      steps: [
        {
          show: ['pla', 'glu'],
          note: 'Interrupción del flujo materno y activación de vías endógenas',
          say: 'Al clampear el cordón umbilical cesa bruscamente la entrega transplacentaria de glucosa. El recién nacido sano responde con una elevación de glucagón y catecolaminas que moviliza el glucógeno hepático e induce gluconeogénesis para estabilizar sus niveles sanguíneos.',
        },
        {
          show: ['con', 'dan'],
          note: 'Consumo cerebral desproporcionado y peligro de apoptosis cortical',
          say: 'El encéfalo neonatal consume casi la totalidad de la glucosa circulante. Si los depósitos de glucógeno son escasos o la insulina está desmedidamente alta, la glucosa plasmática se desploma, desatando una falla bioenergética neuronal que culmina en apoptosis occipital irreversible.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Definiciones y umbrales operativos',
      title: 'Definición de Hipoglicemia Neonatal y Pacientes en Alto Riesgo',
      cards: [
        {
          title: 'Umbrales Numéricos de Hipoglicemia',
          tag: 'Criterios de la Academia Americana de Pediatría',
          kind: 'criteria',
          items: [
            {
              t: 'Menor a cuarenta y cinco miligramos por decilitro en las primeras 48 horas',
              d: 'Glicemia plasmática inferior a 45 mg/dL en las primeras 24 a 48 horas de vida exige intervención activa inmediata',
              say: 'Durante las primeras cuarenta y ocho horas de vida se define hipoglicemia ante cualquier cifra plasmática menor a cuarenta y cinco miligramos por decilitro, umbral bajo el cual peligra el metabolismo cerebral.',
            },
            {
              t: 'Menor a sesenta miligramos por decilitro después de las 48 horas',
              d: 'Tras el período adaptativo neonatal inicial, el objetivo fisiológico normal es mantener cifras sobre 60 mg/dL',
              say: 'Posterior a las cuarenta y ocho horas de adaptación el valor de corte se eleva, exigiéndose mantener la glicemia por sobre los sesenta miligramos por decilitro de manera continua.',
            },
          ],
        },
        {
          title: 'Poblaciones de Recién Nacidos en Máximo Riesgo',
          tag: 'Candidatos obligados a tamizaje seriado con hemoglucotest',
          kind: 'key',
          items: [
            {
              t: 'Pequeños para la edad gestacional (PEG) y prematuros',
              d: 'Depósitos mínimos de glucógeno hepático y escaso tejido graso para sostener la gluconeogénesis basal',
              say: 'Los recién nacidos prematuros y los pequeños para la edad gestacional nacen con depósitos hepáticos mínimos, agotando sus escasas reservas energéticas en las primeras dos a cuatro horas.',
            },
            {
              t: 'Hijos de madre diabética y grandes para la edad (GEG)',
              d: 'Hiperplasia de islotes pancreáticos fetales con hiperinsulinismo masivo que bloquea la producción hepática de glucosa',
              say: 'Los hijos de madre diabética sufren hiperinsulinismo severo de rebote: al cortarse el cordón, las concentraciones masivas de insulina desploman la glicemia en las primeras horas de vida.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología de la hipoglicemia',
      title: 'Manifestaciones Clínicas: Síntomas Neurológicos y Autonómicos',
      cards: [
        {
          title: 'Signos de Neuroglucopenia y Excitabilidad',
          tag: 'Expresión clínica del sufrimiento neuronal agudo',
          kind: 'alert',
          items: [
            {
              t: 'Temblores finos en extremidades e irritabilidad',
              d: 'Temblores distales que ceden al sujetar la extremidad (diferenciándolos de convulsiones clónicas focales)',
              say: 'El síntoma cardinal más precoz son los temblores finos en brazos y piernas que ceden al sujetar con suavidad la extremidad, acompañados de irritabilidad desproporcionada al tacto.',
            },
            {
              t: 'Succión débil, hipotonía y letargia progresiva',
              d: 'Dificultad marcada para prenderse al pezón, llanto apagado, somnolencia profunda y rechazo alimentario',
              say: 'Conforme se profundiza la falta de glucosa, el niño se torna hipotónico, pierde la fuerza de succión, no despierta para alimentarse y cae en un estado de letargia profunda.',
            },
          ],
        },
        {
          title: 'Manifestaciones Severas de Emergencia Vital',
          tag: 'Signos de compromiso cortical y del tronco encefálico',
          kind: 'alert',
          items: [
            {
              t: 'Crisis de apnea, cianosis y respiración irregular',
              d: 'Pausas respiratorias prolongadas mayores a 20 segundos asociadas a bradicardia o cianosis central',
              say: 'La neuroglucopenia severa compromete el centro respiratorio bulbar, originando pausas de apnea prolongadas, cianosis y respiración periódica.',
            },
            {
              t: 'Crisis convulsivas e hipotermia refractaria',
              d: 'Despolarizaciones corticales paroxísticas e incapacidad de generar termogénesis química por falta de sustrato',
              say: 'En casos graves se desencadenan crisis convulsivas e hipotermia persistente debido a la incapacidad biológica de quemar grasa parda sin glucosa intracelular.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Estratificación y conducta',
      title: 'Clasificación Clínica de la Hipoglicemia y Conducta Médica Inmediata',
      head: ['Escenario Clínico', 'Nivel de Glicemia', 'Estado Neurológico', 'Conducta Médica Obligada'],
      rows: [
        {
          cells: ['Asintomático limítrofe', '35 a 44 mg/dL', 'Activo con succión vigorosa', 'Ofrecer pecho materno y reevaluar en una hora'],
          say: 'En el niño asintomático con valores limítrofes se indica alimentación láctea inmediata y nuevo control en sesenta minutos.',
        },
        {
          cells: ['Asintomático severo', 'Menor a 35 mg/dL', 'Sin síntomas pero en riesgo', 'Bolo de suero glucosado o leche y vía venosa'],
          say: 'Si la glicemia desciende de treinta y cinco miligramos, aunque esté asintomático, se inicia aporte parenteral preventivo.',
        },
        {
          cells: ['Sintomático (Urgencia)', 'Menor a 45 mg/dL', 'Temblores, letargia o apnea', 'Bolo EV de suero glucosado al 10% más infusión'],
          say: 'Ante un neonato sintomático con temblores o letargia se administra de inmediato un bolo endovenoso de glucosa al diez por ciento.',
        },
        {
          cells: ['Crisis convulsiva', 'Cualquier nivel bajo', 'Convulsiones o coma', 'Bolo endovenoso urgente y carga continua alta'],
          say: 'Si presenta convulsiones se administra bolo de suero glucosado al diez por ciento y se ajusta la carga de glucosa sobre ocho.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Farmacoterapia de urgencia',
      title: 'Protocolo de Corrección Parenteral: El Bolo y la Carga Continua',
      nodes: [
        { id: 'ide', col: 0, row: 1, k: 'start', t: 'Hipoglicemia sintomática', s: 'Temblores, letargia o apnea con glicemia menor a 45 mg/dL' },
        { id: 'bol', col: 1, row: 1, k: 'alert', t: 'Bolo EV de SG 10% a 2 mL/kg', s: 'Doscientos miligramos por kilo de glucosa administrados en cinco minutos' },
        { id: 'vig', col: 2, row: 1, k: 'good', t: 'Infusión continua (VIG 6 a 8)', s: 'Velocidad de infusión de glucosa de 6 a 8 mg/kg/minuto para mantención' },
        { id: 'ree', col: 3, row: 1, k: 'mech', t: 'Control de glicemia a 30 min', s: 'Verificar que la glicemia supere los cincuenta miligramos por decilitro' },
      ],
      edges: [
        { from: 'ide', to: 'bol', label: 'urgencia inmediata' },
        { from: 'bol', to: 'vig', label: 'mantención obligada' },
        { from: 'vig', to: 'ree', label: 'monitoreo estrecho' },
      ],
      steps: [
        {
          show: ['ide', 'bol'],
          note: 'Administración del bolo inicial de suero glucosado al diez por ciento',
          say: 'En todo recién nacido con hipoglicemia sintomática se administra de inmediato un bolo endovenoso de suero glucosado al diez por ciento a dos mililitros por kilo, infundido lentamente en cinco minutos para recuperar el nivel plasmático sin provocar hiperosmolaridad.',
        },
        {
          show: ['vig', 'ree'],
          note: 'Inicio simultáneo de infusión continua y control a los treinta minutos',
          say: 'Inmediatamente después del bolo se conecta una infusión continua con una carga de glucosa de seis a ocho miligramos por kilo minuto, controlando la glicemia plasmática a los treinta minutos para certificar que supere los cincuenta miligramos por decilitro.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Errores graves en farmacología',
      title: 'Contraindicación Absoluta: Soluciones Hipertónicas en Bolo',
      cards: [
        {
          title: '¿Por qué Jamás Usar Suero Glucosado al 20% o 50% en Bolo?',
          tag: 'Graves riesgos de lesión vascular y rebote hiperinsulinémico',
          kind: 'alert',
          items: [
            {
              t: 'Hiperosmolaridad plasmática y hemorragia cerebral',
              d: 'Las soluciones hipertónicas al 50% provocan deshidratación neuronal brusca y rotura de capilares periventriculares',
              say: 'El uso de glucosa hipertónica al veinte o cincuenta por ciento en bolo genera una hiperosmolaridad intravascular devastadora, causando deshidratación neuronal aguda y hemorragia intraventricular.',
            },
            {
              t: 'Estimulación masiva de insulina e hipoglicemia de rebote',
              d: 'El pico agudo de hiperglicemia activa una secreción torrencial de insulina que desploma nuevamente la glicemia a niveles fatales',
              say: 'Además, la llegada masiva de glucosa al páncreas desata una liberación masiva de insulina que provoca una hipoglicemia de rebote aún más profunda y refractaria.',
            },
          ],
        },
        {
          title: 'La Regla de Oro de la Dilución Neonatal',
          tag: 'Solo utilizar Suero Glucosado al diez por ciento',
          kind: 'pharma',
          items: [
            {
              t: 'SG al 10% como concentración máxima en bolo periférico',
              d: 'Asegura una concentración osmolar fisiológicamente tolerable por las venas periféricas del neonato',
              say: 'La única concentración autorizada para administrar en bolo por vía venosa en el neonato es el suero glucosado al diez por ciento, garantizando eficacia terapéutica y seguridad endotelial.',
            },
            {
              t: 'Manejo del hiperinsulinismo refractario persistente',
              d: 'Si requiere VIG mayor a 12 a 15 mg/kg/min considerar hidrocortisona, diazóxido o glucagón previa evaluación endocrinológica',
              say: 'Si los requerimientos de glucosa superan los doce miligramos por kilo minuto para mantener cifras normales, se debe sospechar hiperinsulinismo congénito indicando diazóxido o hidrocortisona.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Metabolismo del calcio',
      title: 'Hipocalcemia Neonatal: Clasificación Precoz versus Tardía',
      cards: [
        {
          title: 'Hipocalcemia Precoz: Menor a 72 Horas de Vida',
          tag: 'Asociada a interrupción brusca del flujo transplacentario',
          kind: 'key',
          items: [
            {
              t: 'Factores de riesgo: Prematurez, asfixia perinatal y madre diabética',
              d: 'Inmadurez de la respuesta de paratohormona y aumento de calcitonina por estrés asfíctico neonatal',
              say: 'La hipocalcemia precoz debuta en los primeros tres días en prematuros, asfícticos o hijos de madre diabética, debida a una respuesta transitoria insuficiente de la paratohormona al corte del cordón.',
            },
            {
              t: 'Niveles diagnósticos de calcio sérico',
              d: 'Calcio total sérico menor a 7.0 mg/dL en prematuros o menor a 8.0 mg/dL en término, o calcio iónico menor a 1.0 mmol/L',
              say: 'Se confirma ante un calcio total menor a siete u ocho miligramos por decilitro o un calcio iónico biológicamente activo menor a un milimol por litro.',
            },
          ],
        },
        {
          title: 'Hipocalcemia Tardía: Mayor a 72 Horas de Vida',
          tag: 'Asociada a sobrecarga de fósforo o hipoparatiroidismo congénito',
          kind: 'alert',
          items: [
            {
              t: 'Ingesta de fórmulas con alta carga de fósforo o leche de vaca',
              d: 'El exceso de fosfatos quelata el calcio en el lumen intestinal y plasmático provocando hipocalcemia e hiperfosfatemia',
              say: 'La hipocalcemia tardía aparece al final de la primera semana, típicamente por consumo de leche de vaca no modificada cuya alta carga de fósforo deprime los niveles de calcio sérico.',
            },
            {
              t: 'Síndrome de DiGeorge (Deleción 22q11.2) e hipoparatiroidismo',
              d: 'Aplasia o hipoplasia tímica y paratiroidea con cardiopatía conotruncal y dismorfia facial clásica',
              say: 'También puede traducir un hipoparatiroidismo congénito en el contexto de un síndrome de DiGeorge, asociándose a cardiopatías congénitas e inmunodeficiencia de células T.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Semiología y electrocardiografía',
      title: 'Manifestaciones Clínicas y Electrocardiográficas de la Hipocalcemia',
      cards: [
        {
          title: 'Signos de Hiperexcitabilidad Neuromuscular',
          tag: 'Aumento de permeabilidad neuronal al sodio por déficit de calcio',
          kind: 'alert',
          items: [
            {
              t: 'Temblores exagerados, hiperreflexia y clonus espontáneo',
              d: 'Respuesta motora aumentada a estímulos táctiles o auditivos mínimos; signos de Chvostek y Trousseau inconstantes',
              say: 'La falta de calcio estabilizador de membrana produce hiperexcitabilidad con temblores intensos, hiperreflexia osteotendinosa y clonus patológico ante el menor estímulo.',
            },
            {
              t: 'Estridor laríngeo, espasmo carpopedal y convulsiones',
              d: 'Laringoespasmo con estridor inspiratorio y crisis convulsivas tónicas que no responden a anticonvulsivantes habituales',
              say: 'En casos severos se presenta estridor respiratorio por laringoespasmo, contracturas musculares tónicas y convulsiones que solo ceden al administrar calcio.',
            },
          ],
        },
        {
          title: 'Alteraciones en el Electrocardiograma: El Intervalo QT',
          tag: 'Marcador bioeléctrico patognomónico de hipocalcemia',
          kind: 'key',
          items: [
            {
              t: 'Prolongación del intervalo QT corregido (QTc largo)',
              d: 'El déficit de calcio alarga la fase dos de meseta del potencial de acción cardíaco, elongando el segmento ST y el intervalo QT',
              say: 'En el electrocardiograma el hallazgo característico es la prolongación del intervalo QT corregido a expensas de un segmento ST alargado, predisponiendo a arritmias ventriculares graves.',
            },
            {
              t: 'Reversibilidad inmediata con la administración de calcio',
              d: 'La infusión de calcio normaliza la duración del potencial de acción acortando el intervalo QT a valores normales',
              say: 'La duración del intervalo QT se normaliza con rapidez al corregir los niveles séricos de calcio iónico, sirviendo como guía de respuesta terapéutica.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Tratamiento de emergencia',
      title: 'Tratamiento de la Hipocalcemia Neonatal Sintomática',
      cards: [
        {
          title: 'Gluconato de Calcio al 10% Endovenoso Lento',
          tag: 'Fármaco de elección en la urgencia aguda',
          kind: 'pharma',
          items: [
            {
              t: 'Dosis: Uno a dos mililitros por kilo de Gluconato de Calcio 10%',
              d: 'Aporta 100 a 200 mg/kg de gluconato de calcio (9 a 18 mg/kg de calcio elemental); diluir al medio con suero o agua',
              say: 'El tratamiento de urgencia consiste en administrar gluconato de calcio al diez por ciento a dosis de uno a dos mililitros por kilo, diluido al medio con agua bidestilada o solución salina.',
            },
            {
              t: 'Infusión endovenosa lenta en diez a quince minutos',
              d: 'Administración obligatoria en un lapso no menor a 10 minutos bajo estricta monitorización electrocardiográfica continua',
              say: 'Debe infundirse muy lentamente en diez a quince minutos, manteniendo una monitorización electrocardiográfica continua y suspendiendo la infusión si aparece bradicardia.',
            },
          ],
        },
        {
          title: 'Riesgos de Infusión Rápida y Extravasación',
          tag: 'Efectos adversos locales y cardíacos potencialmente letales',
          kind: 'alert',
          items: [
            {
              t: 'Bradicardia severa, paro sinusal y arritmias por infusión veloz',
              d: 'La elevación brusca de calcio miocárdico enlentece la conducción auriculoventricular desatando colapso hemodinámico',
              say: 'La administración rápida en bolo directo está formalmente prohibida por el riesgo letal de bradicardia extrema, paro sinusal y asistolía ventricular.',
            },
            {
              t: 'Necrosis cutánea grave por extravasación tisular',
              d: 'La fuga extravascular de calcio produce calcinosis cutis, necrosis dérmica severa y ulceración que requiere aseo quirúrgico',
              say: 'La extravasación del gluconato de calcio causa necrosis tisular severa y calcinosis dérmica profunda, requiriendo verificar minuciosamente la permeabilidad de la vena.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Cationes interconectados',
      title: 'Hipomagnesemia Asociada: La Causa de Hipocalcemia Refractaria',
      cards: [
        {
          title: 'Fisiopatología del Bloqueo por Déficit de Magnesio',
          tag: 'El magnesio como cofactor obligatorio de la paratohormona',
          kind: 'key',
          items: [
            {
              t: 'Inhibición de la secreción y resistencia a la paratohormona',
              d: 'El magnesio intracelular es indispensable para la liberación de PTH por las paratiroides y para la respuesta del receptor renal y óseo',
              say: 'El magnesio es un cofactor indispensable para la síntesis y liberación de paratohormona. Ante una hipomagnesemia profunda la glándula paratiroides no secreta hormona y los tejidos diana no responden a ella.',
            },
            {
              t: 'Hipocalcemia que no responde a la infusión de calcio',
              d: 'Por más calcio que se administre, los niveles séricos no se sostienen si no se corrige paralelamente el déficit de magnesio',
              say: 'Toda hipocalcemia que resulte refractaria a la administración reiterada de gluconato de calcio se debe a una hipomagnesemia concomitante que bloquea el eje hormonal.',
            },
          ],
        },
        {
          title: 'Diagnóstico y Corrección con Sulfato de Magnesio',
          tag: 'Nivel sérico de magnesio menor a 1.5 mg/dL',
          kind: 'pharma',
          items: [
            {
              t: 'Medición obligatoria de magnesemia en hipocalcemia refractaria',
              d: 'Confirmar si la concentración de magnesio sérico es inferior a 1.5 mg/dL en pacientes con temblores persistentes',
              say: 'Es mandatario dosificar magnesio plasmático ante cualquier recién nacido con temblores persistentes o hipocalcemia que no normaliza sus valores tras el tratamiento inicial.',
            },
            {
              t: 'Sulfato de Magnesio al 50%: Cincuenta a cien miligramos por kilo',
              d: 'Administrado por vía intramuscular profunda o endovenosa diluido en infusión continua de dos a cuatro horas',
              say: 'Se corrige administrando sulfato de magnesio al cincuenta por ciento a dosis de cincuenta a cien miligramos por kilo en infusión lenta diluida o por vía intramuscular profunda.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Resumen comparativo terapéutico',
      title: 'Manejo de Emergencia en Trastornos Metabólicos Neonatales Frecuentes',
      head: ['Trastorno Metabólico', 'Criterio Diagnóstico Clave', 'Fármaco de Elección Aguda', 'Regla de Oro en Administración'],
      rows: [
        {
          cells: ['Hipoglicemia sintomática', 'Menor a 45 mg/dL con síntomas', 'Suero Glucosado al 10% a 2 mL/kg', 'Seguir de inmediato con infusión continua'],
          say: 'La hipoglicemia sintomática se corrige con suero glucosado al diez por ciento a dos mililitros por kilo seguido de infusión continua.',
        },
        {
          cells: ['Hipocalcemia sintomática', 'Calcio total < 7 con temblores', 'Gluconato de Calcio al 10% a 1-2 mL/kg', 'Infusión lenta en diez minutos con monitor'],
          say: 'La hipocalcemia sintomática se trata con gluconato de calcio al diez por ciento en infusión lenta bajo monitorización cardíaca.',
        },
        {
          cells: ['Hipomagnesemia asociada', 'Magnesio sérico < 1.5 mg/dL', 'Sulfato de Magnesio a 50 mg/kg', 'Tratar ante hipocalcemia refractaria a calcio'],
          say: 'La hipomagnesemia debe corregirse con sulfato de magnesio si la hipocalcemia no responde a las dosis estándar de calcio.',
        },
        {
          cells: ['Hiperinsulinismo severo', 'Requerimiento de VIG > 12', 'Diazóxido o Hidrocortisona EV', 'Reservado para hiperinsulinismo congénito'],
          say: 'El hiperinsulinismo persistente con cargas elevadas de glucosa se maneja con diazóxido o hidrocortisona en cuidados intensivos.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de actuación clínica',
      title: 'Algoritmo de Pesquisa y Tratamiento de la Hipoglicemia e Hipocalcemia Neonatal',
      say: 'Examinemos el algoritmo paso a paso para la monitorización de glicemia en pacientes en riesgo, el manejo escalonado de la hipoglicemia y la corrección de la hipocalcemia.',
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.2.009',
      title: 'Manejo Inmediato de Hipoglicemia Neonatal Sintomática',
      stem: 'Un recién nacido de 38 semanas, con peso de 4.250 g, hijo de madre con diabetes gestacional, presenta temblores finos en extremidades superiores y succión débil a las 2 horas de vida. Se realiza control de glicemia venosa que informa 32 mg/dL.',
      question: '¿Cuál es la conducta médica inmediata más adecuada?',
      options: [
        { letter: 'A', text: 'Ofrecer mamadera de 20 mL de agua con azúcar por vía oral y reevaluar en 2 horas' },
        { letter: 'B', text: 'Administrar un bolo endovenoso de Suero Glucosado al 10% a 2 mL/kg en 5 minutos, seguido de infusión continua de glucosa a 6-8 mg/kg/min' },
        { letter: 'C', text: 'Administrar un bolo endovenoso rápido de Suero Glucosado al 50% a 5 mL/kg' },
        { letter: 'D', text: 'Administrar Hidrocortisona endovenosa a 10 mg/kg como primera línea' },
        { letter: 'E', text: 'Mantener en observación sin tratamiento, dado que a las 2 horas la glicemia de 32 mg/dL es normal' },
      ],
      correct: 'B',
      explanation: 'El paciente es un recién nacido grande para la edad gestacional, hijo de madre diabética (alto riesgo de hiperinsulinismo), que a las 2 horas de vida presenta hipoglicemia severa sintomática (temblores, succión débil y glicemia de 32 mg/dL). La hipoglicemia sintomática es una emergencia neurológica que exige aporte parenteral inmediato: bolo endovenoso de Suero Glucosado al 10% a 2 mL/kg (200 mg/kg de glucosa) infundido lentamente en 5 minutos, seguido inmediatamente de una infusión continua de glucosa a una velocidad de infusión (VIG) de 6 a 8 mg/kg/minuto para mantener niveles seguros y prevenir recaídas.',
      say: {
        stem: 'Recién nacido de término macrosómico de madre diabética que a las dos horas presenta temblores succión débil y glicemia de treinta y dos miligramos por decilitro.',
        question: '¿Cuál es la conducta médica inmediata más adecuada?',
        options: 'La opción A agua con azúcar oral. La B bolo endovenoso de suero glucosado al diez por ciento a dos mililitros por kilo en cinco minutos seguido de infusión continua. La C glucosa al cincuenta por ciento en bolo. La D hidrocortisona. La E observación. Analiza el estado sintomático.',
        answer: 'La respuesta correcta es la B. La hipoglicemia sintomática exige bolo de suero glucosado al diez por ciento seguido de infusión continua de glucosa.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Banco Oficial AEE · Perfil V3 2.01.2.009',
      title: 'Urgencia en Hipocalcemia Sintomática con QT Prolongado',
      stem: 'Un recién nacido pretérmino de 34 semanas presenta a las 36 horas de vida temblores e irritabilidad marcada. La glicemia es de 62 mg/dL (normal). En los exámenes de laboratorio se constata: Calcio total sérico de 6.2 mg/dL y Calcio iónico de 0.85 mmol/L (normal > 1.1 mmol/L). En el electrocardiograma se evidencia prolongación del intervalo QTc.',
      question: '¿Cuál es el tratamiento de urgencia indicado?',
      options: [
        { letter: 'A', text: 'Gluconato de Calcio al 10% a 1 a 2 mL/kg por vía endovenosa lenta con monitorización cardíaca' },
        { letter: 'B', text: 'Carbonato de calcio oral en polvo diluido en leche cada 12 horas' },
        { letter: 'C', text: 'Sulfato de magnesio endovenoso en bolo rápido' },
        { letter: 'D', text: 'Vitamina D3 en megadosis intramuscular de 100.000 UI' },
        { letter: 'E', text: 'Cloruro de potasio en bolo endovenoso directo' },
      ],
      correct: 'A',
      explanation: 'El paciente presenta una Hipocalcemia Neonatal Precoz sintomática (calcio sérico total de 6.2 mg/dL y calcio iónico < 1.0 mmol/L, con temblores, hiperexcitabilidad y prolongación del intervalo QTc en el trazado electrocardiográfico). El tratamiento de emergencia para frenar la hiperexcitabilidad y prevenir arritmias ventriculares o convulsiones consiste en administrar Gluconato de Calcio al 10% a dosis de 1 a 2 mL/kg (100 a 200 mg/kg) por vía endovenosa lenta diluido en 10 a 15 minutos, bajo estricta monitorización electrocardiográfica continua para vigilar bradicardia.',
      say: {
        stem: 'Recién nacido pretérmino con temblores irritabilidad calcio sérico de seis coma dos calcio iónico bajo e intervalo QTc prolongado.',
        question: '¿Cuál es el tratamiento de urgencia indicado?',
        options: 'La opción A gluconato de calcio al diez por ciento a uno a dos mililitros por kilo por vía endovenosa lenta con monitorización cardíaca. La B calcio oral. La C sulfato de magnesio en bolo rápido. La D vitamina D intramuscular. La E cloruro de potasio. Identifica el fármaco de emergencia.',
        answer: 'La respuesta correcta es la A. Se administra gluconato de calcio al diez por ciento endovenoso lento en diez a quince minutos bajo monitorización cardíaca continua.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro EUNACOM',
      title: 'Puntos Clave y Perlas Indispensables en Metabolismo Neonatal',
      cards: [
        {
          title: 'Reglas de Seguridad en Hipoglicemia',
          tag: 'Límites osmolares y corrección protocolizada',
          kind: 'alert',
          items: [
            {
              t: 'Cuarenta y cinco mg/dL: Umbral sagrado de intervención',
              d: 'Glicemia menor a 45 en menores de 48 horas exige tratamiento activo para evitar necrosis de corteza occipital',
              say: 'Recuerden siempre el umbral de cuarenta y cinco miligramos por decilitro en las primeras cuarenta y ocho horas para intervenir y prevenir daño cerebral.',
            },
            {
              t: 'Bolo de SG al 10% a 2 mL/kg siempre seguido de infusión',
              d: 'Nunca dar bolos de glucosa al 25% o 50% por riesgo de hemorragia intraventricular e hipoglicemia de rebote masiva',
              say: 'Utilicen siempre suero glucosado al diez por ciento a dos mililitros por kilo en cinco minutos, seguido inmediatamente de infusión continua.',
            },
          ],
        },
        {
          title: 'Reglas de Seguridad en Hipocalcemia',
          tag: 'Monitoreo cardíaco y pesquisa de hipomagnesemia',
          kind: 'pharma',
          items: [
            {
              t: 'Gluconato de calcio en diez minutos con electrocardiograma',
              d: 'La infusión rápida causa paro cardíaco en diástole; la extravasación produce necrosis cutánea profunda irreversible',
              say: 'Infundan el gluconato de calcio en al menos diez minutos con monitorización electrocardiográfica para frenar ante cualquier bradicardia.',
            },
            {
              t: 'Hipocalcemia que no responde: Medir y tratar Magnesio',
              d: 'El déficit de magnesio bloquea la liberación de paratohormona; dosificar magnesio y corregir con sulfato de magnesio',
              say: 'Ante una hipocalcemia refractaria dosifiquen magnesio sérico de inmediato y administren sulfato de magnesio para desbloquear la paratohormona.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Diagnóstico, Monitorización y Manejo de la Hipoglicemia e Hipocalcemia Neonatal',
    root: N(
      'start',
      'Recién Nacido con Factores de Riesgo Metabólico o Síntomas de Hiperexcitabilidad',
      'Hijo de madre diabética, PEG, prematuro, o neonato con temblores, succión débil, letargia o apnea',
      'Iniciamos el abordaje evaluando la glicemia capilar o venosa para confirmar o descartar hipoglicemia aguda.',
      [
        'Glicemia menor a 45 mg/dL en las primeras 48 horas de vida',
        N(
          'q',
          '¿Presenta síntomas neurológicos (temblores, letargia) o glicemia menor a 35?',
          'Estratificación de severidad: hipoglicemia sintomática versus asintomática',
          'Evaluamos si el paciente presenta síntomas neurológicos o si la cifra es inferior a treinta y cinco.',
          [
            'Sí: Neonato sintomático o glicemia menor a 35 mg/dL',
            N(
              'alert',
              'Bolo EV de SG 10% a 2 mL/kg + Infusión Continua de Glucosa (VIG 6 a 8)',
              'Bolo endovenoso de SG al 10% a 2 mL/kg en 5 minutos · Seguir de inmediato con infusión continua a VIG de 6 a 8 mg/kg/min · Control de glicemia venosa en 30 minutos',
              'Administramos bolo de suero glucosado al diez por ciento a dos mililitros por kilo seguido de infusión continua y control en media hora.',
            ),
          ],
          [
            'No: Asintomático vigoroso con glicemia entre 35 y 44 mg/dL',
            N(
              'ok',
              'Alimentación Precoz con Leche Materna o Fórmula y Control a los 60 min',
              'Ofrecer pecho materno inmediato o 5-10 mL/kg de fórmula · Reevaluar hemoglucotest a los 60 minutos · Si persiste < 45 mg/dL pasar a vía parenteral',
              'En el recién nacido asintomático indicamos alimentación láctea inmediata y repetimos el control glicémico en sesenta minutos.',
            ),
          ],
        ),
      ],
      [
        'Glicemia normal pero persiste con temblores marcados, clonus o QT prolongado',
        N(
          'q',
          '¿Resultado del Calcio sérico total e iónico en sangre venosa?',
          'Sospecha de Hipocalcemia Neonatal Precoz o Tardía',
          'Con glicemia normal evaluamos los niveles de calcio iónico y total para diagnosticar hipocalcemia.',
          [
            'Calcio total menor a 7.0 mg/dL (o calcio iónico menor a 1.0 mmol/L)',
            N(
              'refer',
              'Administración de Gluconato de Calcio al 10% EV Lento bajo Monitor',
              'Gluconato de calcio al 10% a 1-2 mL/kg diluido al medio con agua bidestilada en 10-15 min · Monitorización ECG continua por riesgo de bradicardia · Medir Magnesio si es refractario',
              'Administramos gluconato de calcio al diez por ciento endovenoso lento en diez a quince minutos bajo monitorización cardíaca continua.',
            ),
          ],
          [
            'Calcio sérico normal: Evaluar otros desórdenes neurobiológicos',
            N(
              'ok',
              'Descarte de Encefalopatía Hipóxico-Isquémica, Infección SNC o Abstinencia',
              'Monitoreo clínico continuo · Estudio de sepsis neonatal · Evaluar historia materna de consumo de fármacos o drogas',
              'Si el calcio es normal descartamos asfixia perinatal, infección del sistema nervioso central o síndrome de privación.',
            ),
          ],
        ),
      ],
    ),
  },
};
