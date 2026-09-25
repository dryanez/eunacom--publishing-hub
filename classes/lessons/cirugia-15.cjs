// Clase 11.15 — guion docente escrito a mano (estándar Módulo 2 · Cirugía).
// Fuente clínica: books/scripts/dataset_cirugia.cjs (cir-15).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'cirugia-15',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Anestesia general vs neuroaxial raquídea y peridural, farmacología de anestésicos locales, dosis máximas, intoxicación LAST y emulsión lipídica',
      say: 'Bienvenidos a la clase de anestesiología y toxicidad por anestésicos locales. Todo médico que realiza procedimientos quirúrgicos menores o atiende partos y urgencias debe dominar el uso seguro de los anestésicos locales. En el EUNACOM se evalúan con especial énfasis las dosis máximas de seguridad, el reconocimiento inmediato de los pródromos de la toxicidad sistémica o síndrome LAST, la indicación del antídoto con emulsión lipídica al veinte por ciento y el manejo de la cefalea post-punción dural. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Mecanismo farmacológico y toxicidad',
      title: 'Bloqueo de canales de sodio y fisiopatología del síndrome LAST',
      nodes: [
        { id: 'blo', col: 0, row: 2, k: 'start', t: 'Infiltración de anestésico local', s: 'Inyección tisular o bloqueo de nervios periféricos' },
        { id: 'can', col: 1, row: 1, k: 'mech', t: 'Bloqueo de canales de sodio NaV', s: 'Inhibe la despolarización axonal y la conducción del dolor' },
        { id: 'abs', col: 2, row: 0, k: 'alert', t: 'Inyección intravascular inadvertida', s: 'Paso directo a vénula o absorción sistémica masiva' },
        { id: 'snc', col: 2, row: 2, k: 'risk', t: 'Toxicidad sobre sistema nervioso', s: 'Inhibición de vías GABAérgicas produce convulsiones' },
        { id: 'cvs', col: 3, row: 1, k: 'trap', t: 'Colapso cardiovascular agudo', s: 'Depresión miocárdica severa y arritmias ventriculares' },
        { id: 'lip', col: 4, row: 2, k: 'good', t: 'Rescate con emulsión lipídica', s: 'Intralipid 20% secuestra el fármaco y restaura ATP' },
      ],
      edges: [
        { from: 'blo', to: 'can', label: 'efecto local' },
        { from: 'blo', to: 'abs', label: 'inadvertida' },
        { from: 'abs', to: 'snc', label: 'umbral tóxico' },
        { from: 'snc', to: 'cvs', label: 'progresión rápida' },
        { from: 'abs', to: 'cvs', label: 'dosis masiva' },
        { from: 'cvs', to: 'lip', label: 'antídoto urgente' },
      ],
      steps: [
        {
          show: ['blo', 'can'],
          note: 'Mecanismo de acción anestésico local',
          say: 'Los anestésicos locales actúan bloqueando los canales de sodio dependientes de voltaje en la membrana neuronal. Al impedir la entrada de sodio, suprimen la generación del potencial de acción, bloqueando de manera reversible la transmisión del dolor.',
        },
        {
          show: ['abs', 'snc'],
          note: 'Paso a la circulación y pródromos del SNC',
          say: 'Si el anestésico se inyecta accidentalmente dentro de un vaso o supera la dosis máxima segura, pasa a la circulación sistémica. El sistema nervioso central es el primero en sufrir: se bloquean las neuronas inhibidoras corticales, desatando pródromos sensoriales y luego convulsiones tónico-clónicas generalizadas.',
        },
        {
          show: ['cvs', 'lip'],
          note: 'Colapso cardiovascular y rescate lipídico',
          say: 'A concentraciones más elevadas, fármacos muy lipofílicos como la bupivacaína bloquean los canales de sodio cardíacos durante la sístole, provocando bradicardia extrema, bloqueo auriculoventricular y colapso circulatorio. El rescate farmacológico específico e impostergable es la emulsión lipídica al veinte por ciento.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Estructura molecular',
      title: 'Clasificación química de anestésicos locales: ésteres versus amidas',
      cards: [
        {
          title: 'Anestésicos tipo amino-éster',
          tag: 'Metabolismo plasmático',
          kind: 'criteria',
          items: [
            {
              t: 'Procaína, clorprocaína y tetracaína',
              d: 'Metabolizados por la pseudocolinesterasa plasmática',
              say: 'Los amino-ésteres tienen una sola letra i en su nombre genérico. Se metabolizan rápidamente en la sangre por acción de la pseudocolinesterasa plasmática circulante.',
            },
            {
              t: 'Mayor potencial alérgico por PABA',
              d: 'Generan ácido para-aminobenzoico responsable de hipersensibilidad',
              say: 'Su degradación produce ácido para-aminobenzoico, el PABA, una molécula altamente inmunogénica que explica las reacciones alérgicas verdaderas tipo uno.',
            },
          ],
        },
        {
          title: 'Anestésicos tipo amino-amida',
          tag: 'Metabolismo hepático',
          kind: 'key',
          items: [
            {
              t: 'Lidocaína, bupivacaína y mepivacaína',
              d: 'Tienen dos letras i en su nombre; degradación por citocromo hepático',
              say: 'Los amino-amidas se reconocen fácilmente porque tienen dos letras i en su nombre genérico: lidocaína, bupivacaína, ropivacaína. Se metabolizan exclusivamente en el hígado por el sistema del citocromo pe cuatrocientos cincuenta.',
            },
            {
              t: 'Reacciones alérgicas extremadamente raras',
              d: 'La alergia verdadera es casi inexistente; sospechar toxicidad sistémica',
              say: 'La alergia a las amidas es casi anecdótica. Si un paciente dice ser alérgico a la lidocaína, habitualmente se trató de una inyección intravascular con taquicardia por epinefrina o un pródromo de toxicidad sistémica.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Modalidades anestésicas',
      title: 'Anestesia general: inducción, mantención y reversión neuromuscular',
      cards: [
        {
          title: 'Componentes de la anestesia general',
          tag: 'Tríada clásica',
          kind: 'criteria',
          items: [
            {
              t: 'Hipnosis y amnesia',
              d: 'Propofol en bolo endovenoso para pérdida rápida de conciencia',
              say: 'La inducción de la hipnosis se logra habitualmente con propofol, un agonista del receptor GABA que induce inconsciencia suave en menos de un minuto.',
            },
            {
              t: 'Analgesia opioide potente',
              d: 'Fentanilo o remifentanilo para suprimir la respuesta simpática',
              say: 'El componente analgésico se cubre con opioides sintéticos de alta potencia como el fentanilo o remifentanilo, que atenúan la taquicardia e hipertensión provocadas por la intubación y la incisión.',
            },
            {
              t: 'Relajación neuromuscular y monitoreo',
              d: 'Bloqueadores neuromusculares no despolarizantes tipo rocuronio',
              say: 'La relajación muscular facilita la intubación y la exposición quirúrgica abdominal. Se monitoriza mediante el tren de cuatro o TOF estimulando el nervio cubital.',
            },
          ],
        },
        {
          title: 'Reversión y fármacos específicos',
          tag: 'Recuperación segura',
          kind: 'pharma',
          items: [
            {
              t: 'Sugammadex para rocuronio',
              d: 'Encapsula selectivamente la molécula de rocuronio en plasma',
              say: 'El sugammadex es una ciclodextrina modificada que revierte de forma inmediata y completa el bloqueo neuromuscular inducido por rocuronio o vecuronio mediante quelación química.',
            },
            {
              t: 'Neostigmina más atropina',
              d: 'Inhibidor de acetilcolinesterasa asociado a anticolinérgico',
              say: 'La reversión clásica con neostigmina aumenta la acetilcolina en la placa motora, pero requiere administrarse siempre junto a atropina para prevenir bradicardia y broncorrea muscarínica severa.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Bloqueos centrales',
      title: 'Anestesia neuroaxial: raquídea versus peridural',
      cards: [
        {
          title: 'Anestesia raquídea o subaracnoidea',
          tag: 'Intratecal directa',
          kind: 'key',
          items: [
            {
              t: 'Punción del espacio subaracnoideo',
              d: 'Atraviesa duramadre y aracnoides; se confirma con flujo de LCR',
              say: 'La anestesia raquídea deposita el anestésico directamente en el líquido cefalorraquídeo atravesando la duramadre. Se realiza por debajo del cono medular, a nivel lumbar tres cuatro o lumbar cuatro cinco.',
            },
            {
              t: 'Dosis mínima y bloqueo potente inmediato',
              d: 'Volúmenes pequeños de dos a tres mililitros con inicio en dos minutos',
              say: 'Requiere dosis muy pequeñas de anestésico, apenas diez a quince miligramos de bupivacaína pesada, logrando un bloqueo sensitivo y motor denso en menos de tres minutos.',
            },
          ],
        },
        {
          title: 'Anestesia peridural o epidural',
          tag: 'Espacio extradural',
          kind: 'criteria',
          items: [
            {
              t: 'Espacio peridural virtual',
              d: 'No atraviesa la duramadre; técnica de pérdida de resistencia',
              say: 'La anestesia peridural introduce la aguja de Tuohy en el espacio que rodea la duramadre sin perforarla, identificado mediante la técnica de pérdida de resistencia con jeringa de baja fricción.',
            },
            {
              t: 'Catéter peridural y analgesia continua',
              d: 'Permite infusiones continuas prolongadas para trabajo de parto y dolor postoperatorio',
              say: 'Permite dejar un catéter para infundir anestésicos y opioides durante horas o días, siendo la técnica de elección para analgesia del trabajo de parto y postoperatorio torácico o abdominal.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Complicación neuroaxial cardinal',
      title: 'Cefalea post-punción dural y parche hemático epidural',
      cards: [
        {
          title: 'Fisiopatología y semiología',
          tag: 'Cefalea ortostática',
          kind: 'alert',
          items: [
            {
              t: 'Fuga continua de líquido cefalorraquídeo',
              d: 'El orificio meníngeo permite la salida constante de LCR al espacio peridural',
              say: 'La cefalea post-punción dural se produce por la fuga de líquido cefalorraquídeo a través del orificio meníngeo no cicatrizado, reduciendo la presión intracraneana y traccionando las meninges.',
            },
            {
              t: 'Carácter estrictamente postural',
              d: 'Aparece o empeora al ponerse de pie y desaparece al acostarse',
              say: 'Su rasgo patognomónico es postural: dolor frontal u occipital intenso que aparece a los pocos segundos de incorporarse o ponerse de pie, y que alivia por completo en posición horizontal supina.',
            },
          ],
        },
        {
          title: 'Tratamiento escalonado',
          tag: 'De conservador a intervencional',
          kind: 'key',
          items: [
            {
              t: 'Manejo médico inicial',
              d: 'Reposo en cama, hidratación parenteral abundante, analgesia y cafeína',
              say: 'El manejo inicial comprende reposo horizontal, hidratación endovenosa vigorosa, analgésicos comunes y cafeína oral o endovenosa por su efecto vasoconstrictor cerebral.',
            },
            {
              t: 'Parche hemático epidural autógeno',
              d: 'Estándar de oro si persiste tras veinticuatro a cuarenta y ocho horas',
              say: 'Si la cefalea no cede tras cuarenta y ocho horas o es invalidante, el tratamiento de elección es el parche hemático: se inyectan quince a veinte mililitros de sangre autógena en el espacio peridural para sellar la brecha meníngea.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Farmacología clínica',
      title: 'Anestésicos locales tipo amida: dosis máximas y cardiotoxicidad',
      head: ['Fármaco anestésico', 'Dosis máxima sin epinefrina', 'Dosis máxima con epinefrina', 'Perfil de cardiotoxicidad'],
      rows: [
        {
          cells: ['Lidocaína al 2%', '4 a 5 mg/kg (máximo 300 mg)', '7 mg/kg (máximo 500 mg)', 'Toxicidad intermedia · predomina SNC'],
          say: 'La lidocaína tolera cuatro a cinco miligramos por kilo sola y hasta siete miligramos por kilo con epinefrina, con un tope absoluto de quinientos miligramos.',
        },
        {
          cells: ['Bupivacaína al 0.5%', '2 mg/kg (máximo 150 mg)', '2.5 mg/kg (máximo 175 mg)', 'MÁXIMA CARDIOTOXICIDAD · arritmias letales'],
          say: 'La bupivacaína tiene un tope estrecho de dos miligramos por kilo y posee la mayor cardiotoxicidad de todos los anestésicos locales.',
        },
        {
          cells: ['Mepivacaína al 2%', '4 a 5 mg/kg (máximo 300 mg)', '7 mg/kg (máximo 500 mg)', 'Toxicidad intermedia · menor vasodilatación propia'],
          say: 'La mepivacaína tiene un perfil posológico similar a la lidocaína con menor efecto vasodilatador intrínseco.',
        },
        {
          cells: ['Ropivacaína al 0.75%', '3 mg/kg (máximo 200 mg)', '3.5 mg/kg (máximo 250 mg)', 'Baja cardiotoxicidad · menor bloqueo motor'],
          say: 'La ropivacaína es un enantiómero puro con mucha menor toxicidad miocárdica que la bupivacaína.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Pródromos y alerta precoz',
      title: 'Manifestaciones neurológicas de la intoxicación LAST',
      cards: [
        {
          title: 'Pródromos sensoriales iniciales',
          tag: 'Alerta temprana en el box',
          kind: 'alert',
          items: [
            {
              t: 'Sabor metálico lingual y parestesias periorales',
              d: 'Sensación metálica en la boca y adormecimiento de labios y lengua',
              say: 'El primer síntoma de alarma que refiere el paciente despierto es un sabor metálico característico en la lengua, acompañado de hormigueo o parestesias en los labios y la región perioral.',
            },
            {
              t: 'Tinnitus auditivo y diplopía visual',
              d: 'Zumbido de oídos de tono agudo, mareos, visión borrosa y euforia',
              say: 'Le siguen rápidamente acúfenos o zumbido en los oídos, sensación de mareo, dificultad para articular palabras y visión doble o borrosa.',
            },
          ],
        },
        {
          title: 'Excitación y colapso neurológico',
          tag: 'Crisis comicial',
          kind: 'key',
          items: [
            {
              t: 'Fasciculaciones y convulsiones generalizadas',
              d: 'Temblor fino facial que progresa a crisis tónico-clónica bilateral',
              say: 'Al caer la inhibición cortical aparecen temblores involuntarios y convulsiones tónico-clónicas generalizadas que aumentan el consumo de oxígeno y generan acidosis láctica.',
            },
            {
              t: 'Depresión profunda del SNC',
              d: 'Coma profundo, abolición de reflejos de tronco y paro respiratorio',
              say: 'La fase excitatoria es transitoria y culmina en una depresión neurológica global con pérdida de conciencia, coma arrefléctico y apnea.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Emergencia hemodinámica',
      title: 'Colapso cardiovascular por anestésicos locales y bupivacaína',
      cards: [
        {
          title: 'Mecanismo de la cardiotoxicidad',
          tag: 'Bloqueo cardíaco irreversible',
          kind: 'alert',
          items: [
            {
              t: 'Unión tenaz y lenta a canales de sodio miocárdicos',
              d: 'La bupivacaína se fija en sístole y tarda decenas de segundos en disociarse',
              say: 'A diferencia de la lidocaína que se disocia rápidamente del canal de sodio cardíaco, la bupivacaína se une fuertemente y no se despega durante la diástole, enlenteciendo la conducción ventricular.',
            },
            {
              t: 'Inhibición del metabolismo mitocondrial',
              d: 'Bloquea el transporte de carnitina y la producción de ATP miocárdico',
              say: 'Además del bloqueo eléctrico, los anestésicos lipofílicos inhiben la síntesis de trifosfato de adenosina mitocondrial, provocando una pérdida aguda e intratable de la contractilidad miocárdica.',
            },
          ],
        },
        {
          title: 'Trastornos del ritmo y shock',
          tag: 'Arritmias refractarias',
          kind: 'key',
          items: [
            {
              t: 'Bradicardia extrema y ensanchamiento del QRS',
              d: 'Bloqueos auriculoventriculares avanzados de segundo y tercer grado',
              say: 'En el electrocardiograma se observa un alargamiento progresivo del intervalo PR y ensanchamiento bizarro del complejo QRS con bradicardia severa.',
            },
            {
              t: 'Fibrilación ventricular y asistolia terminal',
              d: 'Paro cardiorrespiratorio resistente a la reanimación habitual',
              say: 'El desenlace final es la taquicardia ventricular, fibrilación ventricular o asistolia con colapso cardiogénico refractario a los inotrópicos habituales.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Antídoto específico',
      title: 'Protocolo de rescate con emulsión lipídica al 20% (Intralipid)',
      cards: [
        {
          title: 'Mecanismo de acción: trampa lipídica',
          tag: 'Secuestro molecular',
          kind: 'pharma',
          items: [
            {
              t: 'Trampa lipídica intravascular',
              d: 'Crea una fase hidrofóbica plasmática que absorbe el anestésico libre',
              say: 'La emulsión de lípidos al veinte por ciento forma una fase hidrofóbica en el torrente sanguíneo que actúa como una esponja molecular, extrayendo las moléculas lipofílicas de anestésico libre del corazón y el cerebro.',
            },
            {
              t: 'Recuperación del metabolismo mitocondrial',
              d: 'Aporta ácidos grasos como sustrato energético directo al cardiomiocito',
              say: 'Al mismo tiempo, los triglicéridos de la emulsión proporcionan energía directa al miocardio agotado, restaurando la contractilidad cardíaca.',
            },
          ],
        },
        {
          title: 'Pauta posológica estandarizada (Guías ASRA)',
          tag: 'Dosis exacta de rescate',
          kind: 'key',
          items: [
            {
              t: 'Bolo inicial de 1.5 mL por kilo en un minuto',
              d: 'Aproximadamente cien mililitros de emulsión al veinte por ciento en adulto de setenta kilos',
              say: 'Ante sospecha fundada de LAST con arritmias o convulsiones, se administra un bolo endovenoso directo de uno coma cinco mililitros por kilo de emulsión lipídica al veinte por ciento en un minuto.',
            },
            {
              t: 'Infusión continua de 0.25 mL por kilo por minuto',
              d: 'Mantener la infusión al menos quince minutos tras recuperar estabilidad',
              say: 'Inmediatamente después se inicia una infusión continua a cero coma veinticinco mililitros por kilo por minuto, repitiendo el bolo si el colapso persiste hasta un techo máximo de doce mililitros por kilo.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Soporte vital modificado',
      title: 'Modificaciones críticas al protocolo ACLS en paro por LAST',
      cards: [
        {
          title: 'Ajuste de dosis de adrenalina',
          tag: 'Dosis reducidas',
          kind: 'alert',
          items: [
            {
              t: 'Dosis bajas de adrenalina: menores a un microgramo por kilo',
              d: 'Dosis estándar de un miligramo empeora arritmias y eleva postcarga',
              say: 'En el paro cardíaco por anestésicos locales, la dosis estándar de un miligramo de adrenalina está desaconsejada porque provoca arritmias ventriculares intratables. Se usan bolos pequeños menores a un microgramo por kilo.',
            },
            {
              t: 'Vasopresina terminantemente contraindicada',
              d: 'La vasopresina causa acidosis láctica y agrava el colapso miocárdico',
              say: 'La vasopresina está formalmente contraindicada en la reanimación por LAST debido a que empeora el pronóstico neurológico y cardíaco.',
            },
          ],
        },
        {
          title: 'Fármacos proscritos y soporte prolongado',
          tag: 'Seguridad en reanimación',
          kind: 'pharma',
          items: [
            {
              t: 'Contraindicados bloqueadores de calcio y betabloqueadores',
              d: 'Deprimen aún más la contractilidad y la conducción auriculoventricular',
              say: 'No administres bloqueadores de canales de calcio ni betabloqueadores porque agravan la depresión cardíaca.',
            },
            {
              t: 'Reanimación prolongada y soporte circulatorio mecánico',
              d: 'Las maniobras de RCP deben mantenerse por tiempo prolongado con lípidos',
              say: 'El anestésico local se metaboliza lentamente. El masaje cardíaco debe prolongarse durante sesenta minutos o más mientras se infunden los lípidos, evaluando bypass cardiopulmonar de rescate si no hay respuesta.',
            },
          ],
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Árbol de decisión clínica',
      title: 'Algoritmo de diagnóstico y manejo de la toxicidad por anestésicos locales (LAST)',
      say: 'Analicemos el árbol de decisiones ante un paciente sometido a bloqueo anestésico local o regional que presenta síntomas tóxicos agudos.',
    },

    {
      type: 'table',
      kicker: 'Trampas del EUNACOM',
      title: 'Errores frecuentes en el uso de anestésicos locales y LAST',
      head: ['Situación clínica', 'Conducta médica estándar', 'Error fatal o trampa'],
      rows: [
        {
          cells: [
            'Infiltración con lidocaína al 2% con epinefrina',
            'Respetar dosis máxima de 7 mg/kg (techo 500 mg)',
            'Infiltrar sin calcular volumen ni peso del paciente',
          ],
          say: 'Infiltrar varios frascos de lidocaína a ciegas supera rápidamente la dosis tóxica sistémica.',
        },
        {
          cells: [
            'Convulsiones y bradicardia por bupivacaína',
            'Infusión precoz de emulsión lipídica al 20%',
            'Administrar bolo estándar de un miligramo de adrenalina',
          ],
          say: 'El antídoto específico es la emulsión lipídica; la adrenalina en dosis altas desencadena arritmias ventriculares letales.',
        },
        {
          cells: [
            'Cefalea intensa a las 48 h de anestesia raquídea',
            'Diagnosticar cefalea post-punción dural si es postural',
            'Solicitar punción lumbar diagnóstica para descartar meningitis',
          ],
          say: 'Puncionar nuevamente a una paciente con cefalea post-punción empeora la fuga de líquido cefalorraquídeo.',
        },
        {
          cells: [
            'Anestesia de dedo de la mano o pabellón auricular',
            'Utilizar siempre lidocaína pura sin epinefrina',
            'Infiltrar lidocaína con epinefrina en territorio terminal',
          ],
          say: 'Inyectar vasoconstrictores en dedos, orejas o pene produce vasoespasmo y necrosis isquémica irreversible.',
        },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.028',
      stem: 'Durante la realización de un bloqueo peridural para una intervención ginecológica utilizando bupivacaína, la paciente refiere repentinamente sabor metálico en la boca, mareos y zumbido de oídos. Segundos después presenta una convulsión tónico-clónica generalizada seguida de colapso hemodinámico con bradicardia severa y ensanchamiento del QRS. ¿Cuál es el tratamiento farmacológico específico que debe iniciarse de urgencia?',
      question: '¿Cuál es el antídoto específico indicado?',
      options: [
        { letter: 'A', text: 'Infusión inmediata de emulsión lipídica al veinte por ciento (Intralipid)' },
        { letter: 'B', text: 'Bolo de un miligramo de adrenalina endovenosa directa' },
        { letter: 'C', text: 'Sulfato de magnesio cinco gramos en infusión rápida' },
        { letter: 'D', text: 'Flumazenil endovenoso en bolos seriados' },
        { letter: 'E', text: 'Amiodarona trescientos miligramos en bolo endovenoso' },
      ],
      correct: 'A',
      explanation: 'La paciente presenta una toxicidad sistémica por anestésicos locales (LAST) severa por inyección intravascular inadvertida de bupivacaína. El antídoto específico indiscutido según las guías internacionales es la emulsión lipídica al 20%, que secuestra el fármaco libre y restaura el metabolismo miocárdico.',
      say: {
        stem: 'Revisemos este caso de emergencia anestesiológica. Una paciente a quien se le infiltra bupivacaína presenta sabor metálico, tinnitus, convulsiones y colapso cardiovascular con bradicardia extrema y QRS ancho.',
        question: '¿Cuál es el tratamiento farmacológico específico de urgencia?',
        options: 'Las alternativas plantean: emulsión lipídica al veinte por ciento, un miligramo de adrenalina directa, sulfato de magnesio, flumazenil o amiodarona. Piénsalo.',
        answer: 'La respuesta correcta es la A, infusión inmediata de emulsión lipídica al veinte por ciento. La bupivacaína causa un bloqueo cardíaco gravísimo por toxicidad sistémica. El antídoto de elección es el Intralipid al veinte por ciento, que actúa atrapando las moléculas lipofílicas en sangre y reactivando la síntesis de energía miocárdica.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.028',
      stem: '¿Cuál es la dosis máxima recomendada de lidocaína al 2% CON epinefrina que se puede infiltrar de forma segura en un paciente adulto de 70 kg durante una intervención de cirugía menor ambulatoria?',
      question: '¿Cuál es la dosis máxima de lidocaína con epinefrina?',
      options: [
        { letter: 'A', text: 'Tres miligramos por kilo (aproximadamente doscientos diez miligramos)' },
        { letter: 'B', text: 'Siete miligramos por kilo (aproximadamente cuatrocientos noventa a quinientos miligramos)' },
        { letter: 'C', text: 'Diez miligramos por kilo (aproximadamente setecientos miligramos)' },
        { letter: 'D', text: 'Quince miligramos por kilo (aproximadamente mil cincuenta miligramos)' },
        { letter: 'E', text: 'Uno coma cinco miligramos por kilo (aproximadamente ciento cinco miligramos)' },
      ],
      correct: 'B',
      explanation: 'La dosis máxima de lidocaína con epinefrina es de 7 mg/kg de peso corporal, con un techo máximo absoluto de 500 mg en adultos. La epinefrina enlentece la absorción sistémica vascular, permitiendo aumentar la dosis segura respecto a la lidocaína pura sin vasoconstrictor, cuya dosis máxima es de 4 a 5 mg/kg (máximo 300 mg).',
      say: {
        stem: 'Analicemos esta pregunta directa sobre dosificación segura en cirugía menor. Se consulta por la dosis máxima recomendada de lidocaína con epinefrina en un adulto de setenta kilos.',
        question: '¿Cuál es la dosis máxima permisible?',
        options: 'Las alternativas proponen: tres miligramos por kilo, siete miligramos por kilo, diez miligramos por kilo, quince miligramos por kilo o uno coma cinco miligramos por kilo. Piénsalo.',
        answer: 'La respuesta correcta es la B, siete miligramos por kilo, con un tope absoluto de quinientos miligramos. Recuerda la regla mnemotécnica: sin epinefrina la dosis máxima de lidocaína es cuatro a cinco miligramos por kilo con techo de trescientos miligramos; con epinefrina sube a siete miligramos por kilo con techo de quinientos miligramos.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.028',
      stem: 'Una mujer de 28 años fue sometida a cesárea bajo anestesia raquídea hace 48 horas. Al levantarse para amamantar presenta cefalea holocraneana severa y dolor cervical que empeora drásticamente al ponerse de pie y desaparece por completo al adoptar el decúbito supino horizontal. El examen neurológico es normal. ¿Cuál es el diagnóstico más probable?',
      question: '¿Cuál es el diagnóstico clínico más probable?',
      options: [
        { letter: 'A', text: 'Meningitis bacteriana aguda nosocomial' },
        { letter: 'B', text: 'Cefalea post-punción dural por fuga de líquido cefalorraquídeo' },
        { letter: 'C', text: 'Trombosis venosa de senos durales' },
        { letter: 'D', text: 'Hemorragia subaracnoidea aneurismática' },
        { letter: 'E', text: 'Cefalea tensional por contractura muscular' },
      ],
      correct: 'B',
      explanation: 'El rasgo patognomónico de la cefalea post-punción dural es su carácter estrictamente postural: aparece al sentarse o ponerse de pie y alivia completamente al acostarse en decúbito supino. Es causada por la fuga de LCR a través del orificio dejado por la aguja en la duramadre, lo que provoca hipotensión intracraneal y tracción meníngea.',
      say: {
        stem: 'Revisemos este cuadro clásico puerperal. Una paciente sometida a cesárea bajo anestesia raquídea presenta cefalea intensa que aparece al sentarse o caminar y desaparece por completo al acostarse.',
        question: '¿Cuál es el diagnóstico más probable?',
        options: 'Las alternativas proponen: meningitis bacteriana nosocomial, cefalea post-punción dural por fuga de LCR, trombosis de senos durales, hemorragia subaracnoidea o cefalea tensional. Piénsalo.',
        answer: 'La respuesta correcta es la B, cefalea post-punción dural. La naturaleza estrictamente ortostática confirma la pérdida continua de líquido cefalorraquídeo por el orificio de la duramadre. Si no responde al reposo, hidratación y cafeína, se resuelve con un parche hemático epidural.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      recTag: 'Banco Oficial AEE · Perfil V3 4.01.2.028',
      stem: 'Durante la reanimación cardiopulmonar avanzada de un paciente en paro cardiorrespiratorio inducido por toxicidad sistémica severa por bupivacaína (LAST), ¿cuál de las siguientes modificaciones al algoritmo estándar de ACLS debe aplicarse de forma estricta?',
      question: '¿Cuál es la modificación mandatoria en la reanimación por LAST?',
      options: [
        { letter: 'A', text: 'Administrar bolos de adrenalina de tres miligramos cada dos minutos' },
        { letter: 'B', text: 'Reducir las dosis de adrenalina a menos de un microgramo por kilo y evitar vasopresina' },
        { letter: 'C', text: 'Administrar infusión continua de diltiazem para estabilizar membranas' },
        { letter: 'D', text: 'Interrumpir el masaje cardíaco si no hay pulso a los diez minutos' },
        { letter: 'E', text: 'Indicar cardioversión eléctrica sincronizada en presencia de asistolia' },
      ],
      correct: 'B',
      explanation: 'En el paro cardíaco por toxicidad sistémica por anestésicos locales (LAST) se debe reducir la dosis de adrenalina a bolos pequeños menores a 1 mcg/kg para evitar arritmias ventriculares refractarias e hiperpresión arterial pulmonar. Además, se proscribe la vasopresina y los bloqueadores de canales de calcio, priorizando la infusión precoz de emulsión lipídica.',
      say: {
        stem: 'Analicemos esta modificación técnica de soporte vital avanzado. Se consulta por los cambios mandatorios al protocolo estándar de reanimación cardiopulmonar en un paro inducido por toxicidad por bupivacaína.',
        question: '¿Cuál es la modificación específica recomendada?',
        options: 'Las opciones son: dosis altas de adrenalina de tres miligramos, reducir la adrenalina a menos de un microgramo por kilo y evitar vasopresina, infundir diltiazem, suspender masaje a los diez minutos o cardiovertir la asistolia. Piénsalo.',
        answer: 'La respuesta correcta es la B. En la LAST, los bolos habituales de un miligramo de adrenalina empeoran la isquemia miocárdica y desencadenan arritmias ventriculares letales. Se usan dosis reducidas menores a un microgramo por kilo, se evita la vasopresina y se inicia de inmediato la infusión de emulsión lipídica al veinte por ciento.',
      },
    },

    {
      type: 'points',
      kicker: 'Conceptos indispensables',
      title: 'Reglas de oro en anestesiología y anestésicos locales',
      cards: [
        {
          title: 'Dosificación segura y pródromos',
          tag: 'Prevención estricta',
          kind: 'alert',
          items: [
            {
              t: 'Lidocaína con epinefrina máximo siete miligramos por kilo',
              d: 'Techo absoluto de quinientos miligramos en adultos; aspirar antes de inyectar',
              say: 'Respeta siempre las dosis máximas: siete miligramos por kilo con epinefrina y cuatro a cinco sin vasoconstrictor, aspirando siempre con la jeringa antes de infiltrar.',
            },
            {
              t: 'Sabor metálico y tinnitus alertan toxicidad',
              d: 'Detener inmediatamente la inyección y preparar emulsión lipídica',
              say: 'Si el paciente refiere sabor metálico en la boca o zumbido en los oídos, detén de inmediato la infiltración.',
            },
          ],
        },
        {
          title: 'Rescate farmacológico y técnica',
          tag: 'Antídoto de urgencia',
          kind: 'key',
          items: [
            {
              t: 'Emulsión lipídica al veinte por ciento es el antídoto',
              d: 'Bolo de 1.5 mL por kilo seguido de infusión a 0.25 mL por kilo por minuto',
              say: 'El antídoto específico de la LAST es el Intralipid al veinte por ciento: un bolo inicial de uno coma cinco mililitros por kilo y luego infusión continua.',
            },
            {
              t: 'Parche hemático epidural cura la CPPD',
              d: 'Cefalea ortostática refractaria se sella con sangre autógena',
              say: 'Si te llevas una sola idea de hoy: la toxicidad sistémica por anestésicos locales es una emergencia letal que avisa con sabor metálico y tinnitus antes de causar convulsiones y colapso cardíaco. Ante cualquier signo de toxicidad, suspende la infiltración, pide ayuda e inicia de inmediato el rescate con emulsión lipídica al veinte por ciento. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Diagnóstico y Manejo de la Toxicidad Sistémica por Anestésicos Locales (LAST)',
    root: N(
      'start',
      'Infiltración o bloqueo con anestésico local',
      'Monitoreo clínico continuo y comunicación activa con el paciente',
      'Iniciamos la vigilancia clínica durante y después de la administración de anestésicos locales.',
      [
        'Pródromos neurológicos iniciales',
        N(
          'alert',
          'Sabor metálico, tinnitus o parestesias periorales',
          'Suspender de inmediato la inyección del fármaco',
          'Ante el primer síntoma de alarma sensorial se detiene la infiltración y se pide el carro de paro.',
          [
            '¿Aparición de convulsiones tónico-clónicas?',
            N(
              'do',
              'Asegurar vía aérea y benzodiacepinas',
              'Oxígeno al cien por ciento y midazolam o diazepam',
              'Se ventila con oxígeno al cien por ciento y se controlan las convulsiones con benzodiacepinas a dosis bajas.',
              [
                'Progresión a colapso cardiovascular',
                N(
                  'alert',
                  'Rescate urgente con emulsión lipídica al 20%',
                  'Bolo de 1.5 mL por kg e infusión a 0.25 mL por kg por minuto',
                  'Se infunde Intralipid al veinte por ciento de inmediato para secuestrar el anestésico de la circulación coronaria.'
                )
              ]
            )
          ]
        )
      ],
      [
        'Colapso hemodinámico o paro cardiorrespiratorio',
        N(
          'alert',
          'Modificaciones de reanimación ACLS por LAST',
          'Adrenalina en dosis bajas menores a 1 mcg por kg y evitar vasopresina',
          'Se realiza reanimación cardiopulmonar de alta calidad evitando dosis estándar de adrenalina.',
          [
            'Infusión continua de lípidos',
            N(
              'ok',
              'Mantener soporte prolongado con Intralipid',
              'RCP prolongada durante sesenta minutos hasta metabolización',
              'Se mantiene el soporte circulatorio y la emulsión lipídica hasta restaurar el ritmo cardíaco sinusal espontáneo.'
            )
          ]
        )
      ]
    ),
  },
};
