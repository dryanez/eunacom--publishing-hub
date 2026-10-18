// Clase 5.1 — guion docente escrito a mano (ver gastro-01.cjs para el formato).
// Fuente clínica: books/scripts/dataset_nefrologia.cjs (nefro-18).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'nefro-18',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Etapificar con dos números, frenar la progresión y saber cuándo entra el GES',
      say: 'Bienvenidos al bloque de enfermedad renal crónica. Es de los temas más rentables del examen, y casi todas las preguntas caen en tres decisiones: cuándo indicar un IECA, qué hacer si la creatinina sube después de indicarlo, y cuándo el paciente entra al GES. En la clase anterior vimos un riñón que terminaba cicatrizado; hoy vemos qué pasa con todos los riñones que llegan a ese punto, y cómo evitar que lleguen.',
    },

    {
      type: 'flow',
      kicker: 'Definición',
      title: '¿Qué es enfermedad renal crónica?',
      nodes: [
        { id: 'dm', col: 0, row: 0, k: 'cause', t: 'Diabetes mellitus', s: 'Primera causa en Chile y el mundo' },
        { id: 'hta', col: 0, row: 2, k: 'cause', t: 'Hipertensión arterial', s: 'Nefroangioesclerosis' },
        { id: 'tfg', col: 1, row: 0, k: 'mech', t: 'TFGe < 60 mL/min/1,73 m²', s: 'Por CKD-EPI con creatinina' },
        { id: 'dan', col: 1, row: 2, k: 'mech', t: 'Marcadores de daño renal', s: 'Albuminuria, sedimento, imagen…' },
        { id: 'mes', col: 2, row: 1, k: 'q', t: 'Más de 3 meses', s: 'Uno de los dos basta' },
        { id: 'erc', col: 3, row: 1, k: 'risk', t: 'Enfermedad renal crónica', s: 'Se etapifica con G y A' },
      ],
      edges: [
        { from: 'dm', to: 'tfg' }, { from: 'dm', to: 'dan' }, { from: 'hta', to: 'dan' }, { from: 'hta', to: 'tfg' },
        { from: 'tfg', to: 'mes' }, { from: 'dan', to: 'mes' }, { from: 'mes', to: 'erc' },
      ],
      steps: [
        { show: ['dm', 'hta'], note: 'Las dos causas que más se preguntan',
          say: 'Partamos por quién llega a esto. La primera causa de enfermedad renal crónica terminal, en Chile y en el mundo, es la nefropatía diabética. La segunda es la hipertensión, con la nefroangioesclerosis. Por eso casi todos los casos del examen son un diabético o un hipertenso en control.' },
        { show: ['tfg'], note: 'Primer criterio: la función',
          say: 'La enfermedad renal crónica se define con dos criterios, y basta uno. El primero es de función: una filtración glomerular estimada bajo sesenta, calculada con la ecuación CKD-EPI a partir de la creatinina.' },
        { show: ['dan'], note: 'Segundo criterio: la estructura',
          say: 'El segundo es de estructura: algún marcador de daño renal, aunque la filtración sea normal. El más importante es la albuminuria, pero también cuentan el sedimento alterado, las imágenes y la biopsia. Los vemos enseguida.' },
        { show: ['mes'], note: 'Lo que la separa de la injuria aguda',
          say: 'Y lo que convierte cualquiera de los dos en crónico es el tiempo: más de tres meses. Esa es la diferencia con la injuria renal aguda que vimos al inicio del libro. Una creatinina alta aislada no es enfermedad renal crónica.' },
        { show: ['erc'], note: 'Se etapifica con dos letras',
          say: 'Cumplido eso, tienes una enfermedad renal crónica, y se etapifica con dos letras: la G, de filtración, y la A, de albuminuria.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Definición',
      title: 'Marcadores de daño renal',
      cards: [
        { title: 'Albuminuria', tag: 'El más importante', kind: 'key', items: [
          { t: 'RAC ≥ 30 mg/g', d: 'Razón albúmina/creatinina en muestra aislada',
            say: 'El marcador de daño que más se pregunta es la albuminuria persistente: una razón albúmina creatinina en una muestra aislada de orina de treinta miligramos por gramo o más.' },
          { t: 'O IPC ≥ 0,2 mg/mg', d: 'Índice proteinuria/creatininuria',
            say: 'En muchas preguntas chilenas te dan el índice proteinuria creatininuria. Desde cero coma dos ya es anormal. Grábate ese número, porque las preguntas reales de esta clase lo usan.' },
        ] },
        { title: 'Otros marcadores', tag: 'Persistentes', kind: 'criteria', items: [
          { t: 'Sedimento patológico', d: 'Hematuria dismórfica o cilindros',
            say: 'Otros marcadores: un sedimento patológico persistente, con hematuria dismórfica o cilindros, y las alteraciones electrolíticas de origen tubular.' },
          { t: 'Imagen o biopsia alterada', d: 'Riñones < 9 cm, poliquísticos',
            say: 'También las alteraciones en la biopsia o en la ecografía: riñones pequeños, de menos de nueve centímetros, pérdida de la relación córtico medular, o riñones poliquísticos.' },
          { t: 'Trasplante renal', d: 'Siempre cuenta como ERC',
            say: 'Y el antecedente de trasplante renal, que por definición ya es enfermedad renal crónica.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Clasificación KDIGO',
      title: 'Dos ejes: filtración y albuminuria',
      cards: [
        { title: 'Eje G', tag: 'Filtración', kind: 'criteria', items: [
          { t: 'G1 ≥ 90 · G2 60–89', d: 'Solo es ERC si hay daño renal',
            say: 'La clasificación KDIGO es bidimensional. En el eje G, la G uno es una filtración de noventa o más, y la G dos, de sesenta a ochenta y nueve. Fíjate que en estas dos la filtración no alcanza a definir la enfermedad: solo son ERC si hay un marcador de daño.' },
          { t: 'G3a 45–59 · G3b 30–44', d: 'La etapa 3 se divide en dos',
            say: 'La etapa tres se divide en dos: la tres a, de cuarenta y cinco a cincuenta y nueve, y la tres b, de treinta a cuarenta y cuatro.' },
          { t: 'G4 15–29 · G5 < 15', d: 'Severa y terminal',
            say: 'La G cuatro, de quince a veintinueve, es la falla renal severa, y la G cinco, bajo quince, es la falla renal terminal. El corte de treinta, que separa la tres de la cuatro, es el que abre el GES.' },
        ] },
        { title: 'Eje A', tag: 'Albuminuria (RAC)', kind: 'key', items: [
          { t: 'A1 < 30 mg/g', d: 'Normal o levemente aumentada',
            say: 'En el eje A, la A uno es una albuminuria bajo treinta, normal o levemente aumentada.' },
          { t: 'A2 30–300 · A3 > 300', d: 'Moderada y severa',
            say: 'La A dos, de treinta a trescientos, es la antigua microalbuminuria; y la A tres, sobre trescientos, la macroalbuminuria. Y el riesgo sube con los dos ejes: a peor filtración y a más albuminuria, más riesgo. Por eso un paciente se describe con las dos letras, por ejemplo G tres a A dos.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Medir la filtración',
      title: 'Clearance de creatinina: cuándo medirlo',
      cards: [
        { title: 'Clearance de 24 horas', tag: 'Normal 90–120 mL/min/1,73 m²', kind: 'key', items: [
          { t: 'Cr urinaria × volumen por minuto ÷ Cr plasmática', d: 'Orina de 24 horas',
            say: 'Además de la filtración estimada, existe el clearance de creatinina medido en orina de veinticuatro horas. Se calcula multiplicando la creatinina urinaria por el volumen urinario por minuto, y dividiendo por la creatinina plasmática. El valor normal es de noventa a ciento veinte mililitros por minuto.' },
          { t: 'Sobreestima la TFG real en 10–20 %', d: 'La creatinina también se secreta en el túbulo',
            say: 'Pero ojo: sobreestima la filtración real entre diez y veinte por ciento, porque la creatinina también se secreta en el túbulo, y más aún en la enfermedad renal avanzada.' },
          { t: 'Colección confiable: 20–25 mg/kg en hombres, 15–20 en mujeres', d: 'Menos sugiere recolección incompleta',
            say: 'Una colección es confiable si la creatinina urinaria de veinticuatro horas es de veinte a veinticinco miligramos por kilo en hombres, y de quince a veinte en mujeres. Cifras menores sugieren que la recolección quedó incompleta.' },
        ] },
        { title: 'Sin recolectar orina', tag: 'Cockcroft-Gault', kind: 'pharma', items: [
          { t: '(140 − edad) × peso ÷ (72 × creatinina)', d: '× 0,85 en mujeres',
            say: 'Si no hay orina, se puede estimar con la fórmula de Cockcroft y Gault: ciento cuarenta menos la edad, por el peso en kilos, dividido por setenta y dos veces la creatinina, y se multiplica por cero coma ochenta y cinco en mujeres.' },
          { t: 'Útil para ajustar dosis de fármacos', d: 'Más que para etapificar',
            say: 'Esta fórmula es útil sobre todo para ajustar dosis de fármacos.' },
        ] },
        { title: 'Cuándo preferir medirlo', tag: 'TFGe poco confiable', kind: 'alert', items: [
          { t: 'Masa muscular extrema', d: 'Amputados, desnutrición, obesidad mórbida',
            say: 'Se prefiere medirlo cuando la filtración estimada es poco confiable: con masa muscular extrema, como en amputados, desnutridos u obesos mórbidos.' },
          { t: 'Embarazo, dieta vegetariana, creatina', d: 'Cirrosis y evaluación de donante renal',
            say: 'También en el embarazo, con dieta vegetariana estricta o suplementos de creatina, en la cirrosis y en la evaluación de un donante renal.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'Nefroprotección',
      title: 'IECA o ARA-II: el pilar',
      nodes: [
        { id: 'alb', col: 0, row: 1, k: 'start', t: 'Albuminuria A2 o A3', s: 'Hipertenso o normotenso' },
        { id: 'ieca', col: 1, row: 1, k: 'good', t: 'IECA o ARA-II', s: 'Enalapril o losartán' },
        { id: 'efe', col: 2, row: 0, k: 'mech', t: 'Dilata la arteriola eferente', s: 'Baja la presión intraglomerular' },
        { id: 'pro', col: 3, row: 0, k: 'good', t: 'Menos proteinuria', s: 'Frena la progresión' },
        { id: 'cr', col: 2, row: 2, k: 'effect', t: 'Creatinina sube hasta 30 %', s: 'Esperable: no se suspende' },
        { id: 'sus', col: 3, row: 2, k: 'alert', t: 'Ajustar o pausar', s: 'Si sube > 30 % o K > 5,5 mEq/L' },
      ],
      edges: [
        { from: 'alb', to: 'ieca' }, { from: 'ieca', to: 'efe' }, { from: 'efe', to: 'pro' },
        { from: 'efe', to: 'cr', label: 'baja la hiperfiltración' }, { from: 'cr', to: 'sus', label: 'solo si' },
      ],
      steps: [
        { show: ['alb'], note: 'La albuminuria es la indicación',
          say: 'Vamos a la nefroprotección. El objetivo en las etapas precoces, de la G uno a la G tres, es retardar la llegada a diálisis. Y la indicación clave es la albuminuria A dos o A tres, tenga o no hipertensión el paciente.' },
        { show: ['ieca'], note: 'Primera línea',
          say: 'Ese paciente tiene que recibir un bloqueador del sistema renina angiotensina: un IECA, como enalapril, o un ARA dos, como losartán. Es la primera línea, y es la respuesta de la mayoría de las preguntas reales de este tema.' },
        { show: ['efe'], note: 'El mecanismo explica todo lo demás',
          say: '¿Por qué funcionan? Porque dilatan selectivamente la arteriola eferente, la de salida del glomérulo. Al abrir la salida, baja la presión dentro del glomérulo.' },
        { show: ['pro'], note: 'Menos presión, menos proteinuria',
          say: 'Y con menos presión intraglomerular, se filtra menos proteína y el glomérulo se daña más lento. Por eso protegen el riñón más allá de bajar la presión arterial.' },
        { show: ['cr'], note: 'La pregunta trampa del tema',
          say: 'Pero ese mismo mecanismo tiene una consecuencia. Si baja la presión del glomérulo, baja un poco la filtración, y la creatinina sube. Un aumento de hasta un treinta por ciento sobre la basal es esperable, y no es motivo para suspender. También puede subir un poco el potasio.' },
        { show: ['sus'], note: 'El corte que se pregunta',
          say: 'Solo si la creatinina sube más de un treinta por ciento, o el potasio pasa de cinco coma cinco, se ajusta o se pausa el fármaco. Suspender un IECA por un alza pequeña de creatinina es la respuesta incorrecta clásica.' },
      ],
    },

    {
      type: 'points',
      kicker: 'Nefroprotección',
      title: 'Lo que se suma al IECA',
      cards: [
        { title: 'Inhibidores de SGLT2', tag: 'Dapagliflozina, empagliflozina', kind: 'pharma', items: [
          { t: 'Reducen 35–40 % los eventos renales', d: 'Duplicar creatinina, muerte renal, diálisis',
            say: 'Al IECA se suman los inhibidores del cotransportador sodio glucosa tipo dos, como dapagliflozina y empagliflozina. Reducen entre un treinta y cinco y un cuarenta por ciento el riesgo de duplicar la creatinina, de muerte renal o de llegar a diálisis.' },
          { t: 'Con o sin diabetes', d: 'En ERC con albuminuria',
            say: 'Y lo hacen en diabéticos y también en no diabéticos con enfermedad renal y albuminuria. Actúan por natriuresis en la mácula densa, restaurando el control túbulo glomerular.' },
        ] },
        { title: 'Presión arterial', tag: 'Meta', kind: 'key', items: [
          { t: 'PA < 130/80 mmHg', d: 'Sistólica < 120 si es automatizada (KDIGO 2024)',
            say: 'La meta de presión es bajo ciento treinta con ochenta. Las guías KDIGO de dos mil veinticuatro proponen incluso una sistólica bajo ciento veinte, si se mide en forma automatizada y en reposo.' },
        ] },
        { title: 'Riesgo cardiovascular', tag: 'Siempre', kind: 'normal', items: [
          { t: 'Glicemia, estatinas, LDL < 70', d: 'Y sodio < 2 g/día',
            say: 'Y todo esto va con control metabólico y cardiovascular estricto: control de la glicemia, estatinas con meta de colesterol LDL bajo setenta, y restricción de sodio.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Fármacos en ERC',
      title: 'Lo que se ajusta y lo que se suspende',
      cards: [
        { title: 'Metformina', tag: 'Acidosis láctica', kind: 'alert', items: [
          { t: 'Ajustar si TFG < 45', d: 'Etapa G3b',
            say: 'En la etapa tres hay que revisar los fármacos. El que más se pregunta es la metformina: se ajusta la dosis cuando la filtración baja de cuarenta y cinco.' },
          { t: 'Suspender si TFG < 30', d: 'Riesgo de acidosis láctica',
            say: 'Y se suspende obligatoriamente cuando baja de treinta, por el riesgo de acidosis láctica. Si ves un paciente en etapa cuatro o cinco que sigue con metformina, la respuesta es suspenderla.' },
        ] },
        { title: 'AINE', tag: 'De por vida', kind: 'alert', items: [
          { t: 'Suspender los antiinflamatorios', d: 'Nefrotóxicos',
            say: 'Los antiinflamatorios no esteroidales, los AINE, se suspenden de por vida en el paciente con enfermedad renal crónica. En la última clase del libro vemos en detalle el ajuste de fármacos.' },
        ] },
        { title: 'Etapa G3', tag: 'Pesquisa', kind: 'criteria', items: [
          { t: 'Buscar anemia y CKD-MBD', d: 'Las complicaciones de la ERC',
            say: 'Además, desde la etapa tres se buscan la anemia y el trastorno mineral óseo. Son las complicaciones de la enfermedad renal crónica, y son el tema de la próxima clase.' },
        ] },
      ],
    },

    {
      type: 'flow',
      kicker: 'GES N° 1',
      title: 'Etapas 4 y 5: entra el GES',
      nodes: [
        { id: 'g4', col: 0, row: 1, k: 'start', t: 'TFG < 30 mL/min', s: 'Etapa 4 o 5' },
        { id: 'not', col: 1, row: 1, k: 'mech', t: 'Notificar GES N° 1', s: 'Fonasa o Isapre' },
        { id: 'nef', col: 2, row: 0, k: 'good', t: 'Nefrólogo en ≤ 30 días', s: 'Nivel secundario' },
        { id: 'fav', col: 2, row: 2, k: 'good', t: 'Fístula AV autóloga', s: '≥ 6 meses antes de la diálisis' },
        { id: 'trr', col: 3, row: 1, k: 'refer', t: 'Terapia de reemplazo', s: 'HD, peritoneodiálisis, trasplante' },
      ],
      edges: [
        { from: 'g4', to: 'not' }, { from: 'not', to: 'nef' }, { from: 'not', to: 'fav' },
        { from: 'nef', to: 'trr' }, { from: 'fav', to: 'trr', label: 'etapa 5' },
      ],
      steps: [
        { show: ['g4'], note: 'El corte de 30',
          say: 'Ahora el GES. El problema de salud GES número uno cubre la enfermedad renal crónica etapas cuatro y cinco. Es decir, se activa cuando la filtración baja de treinta.' },
        { show: ['not'], note: 'Lo primero es notificar',
          say: 'Lo primero que hace el médico, esté donde esté, es notificar el caso GES. Aplica a pacientes de Fonasa y de Isapre.' },
        { show: ['nef'], note: 'Plazo garantizado',
          say: 'Y derivar al nefrólogo del nivel secundario, que tiene un plazo máximo de treinta días para atenderlo. Ese plazo se pregunta.' },
        { show: ['fav'], note: 'Preparación prediálisis',
          say: 'En la etapa cuatro además empieza la preparación para la diálisis: educación sobre las terapias de reemplazo, y la confección de una fístula arteriovenosa autóloga, al menos seis meses antes de la fecha estimada de diálisis.' },
        { show: ['trr'], note: 'Garantizado en etapa 5',
          say: 'Y en la etapa cinco, el GES garantiza la terapia de reemplazo: hemodiálisis crónica o peritoneodiálisis, los medicamentos de soporte, y el ingreso a la lista de espera de trasplante renal.' },
      ],
    },

    {
      type: 'points',
      kicker: 'GES N° 1',
      title: 'Fístula y terapia de reemplazo',
      cards: [
        { title: 'Fístula arteriovenosa', tag: 'Acceso vascular', kind: 'key', items: [
          { t: 'Radiocefálica, brazo no dominante', d: 'Brescia-Cimino',
            say: 'La fístula habitual es la radiocefálica de Brescia Cimino, en el brazo no dominante.' },
          { t: '≥ 6 meses antes: para que madure', d: 'La vena se arterializa',
            say: '¿Por qué seis meses antes? Porque la vena conectada a la arteria tiene que madurar: se dilata y engruesa su pared con el flujo arterial, hasta soportar punciones repetidas con agujas gruesas. Ese proceso tarda meses. Mira esta fístula ya madura: la vena del antebrazo, dilatada y engrosada, se palpa con frémito y se puede puncionar.',
            photo: { src: 'biblioteca/07_nefrologia/nefro-18/01_fistula_av_radiocefalica__kumar-clark_p886.jpg', label: 'Fístula radiocefálica', at: 'Mira esta fístula', credit: 'Kumar and Clark\'s Clinical Medicine, p. 886' } },
          { t: 'Evitar el catéter venoso central', d: 'Bacteriemias y estenosis venosa',
            say: 'Si la fístula no está lista, el paciente entra a diálisis con un catéter venoso central transitorio, que se asocia a bacteriemias y a estenosis venosa central. Eso es lo que se quiere evitar.' },
        ] },
        { title: 'Garantías en etapa 5', tag: 'GES', kind: 'pharma', items: [
          { t: 'Hemodiálisis 3 veces/semana', d: '4 horas por sesión, o peritoneodiálisis',
            say: 'En la etapa cinco, la hemodiálisis crónica es de tres sesiones a la semana, de cuatro horas cada una. La alternativa es la peritoneodiálisis.' },
          { t: 'EPO, hierro EV, vitamina D, quelantes', d: 'Y lista de espera de trasplante',
            say: 'El GES también cubre la eritropoyetina, el hierro endovenoso, los análogos de vitamina D y los quelantes de fósforo, y la incorporación a la lista de trasplante. Todos esos fármacos los vamos a entender en la próxima clase. Antes de eso, el nefrólogo también vacuna contra la hepatitis B.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Diálisis',
      title: 'Complicaciones de la hemodiálisis y la peritoneodiálisis',
      cards: [
        { title: 'Durante la hemodiálisis', tag: 'Intradiálisis', kind: 'alert', items: [
          { t: 'Hipotensión: la más frecuente', d: 'Suspender la ultrafiltración, Trendelenburg, SF 100–250 mL',
            say: 'Veamos qué puede salir mal en la diálisis. En la hemodiálisis, la complicación más frecuente durante la sesión es la hipotensión, por exceso de ultrafiltración. Se suspende la ultrafiltración, se coloca al paciente en Trendelenburg y se administran cien a doscientos cincuenta mililitros de suero fisiológico.' },
          { t: 'Calambres, náuseas, cefalea, arritmias', d: 'Síndrome de desequilibrio en las primeras sesiones',
            say: 'Siguen los calambres, las náuseas, la cefalea y las arritmias. En las primeras sesiones puede aparecer el síndrome de desequilibrio dialítico: cefalea, vómitos y convulsiones, por edema cerebral al bajar la urea muy rápido.' },
          { t: 'Acceso: bacteriemia, trombosis de la fístula', d: 'S. aureus · pérdida de frémito y soplo · robo distal',
            say: 'Del acceso vascular, la bacteriemia por catéter es la principal causa de infección, y el agente es el estafilococo dorado. La trombosis o estenosis de la fístula se reconoce porque se pierden el frémito y el soplo. También hay aneurisma, isquemia distal por robo y estenosis venosa central.' },
        ] },
        { title: 'A largo plazo', tag: 'Crónicas', kind: 'key', items: [
          { t: 'Enfermedad cardiovascular y desnutrición', d: 'Anemia y CKD-MBD',
            say: 'A largo plazo dominan la enfermedad cardiovascular, la desnutrición, la anemia y las alteraciones del metabolismo mineral y óseo.' },
          { t: 'Amiloidosis por β2-microglobulina', d: 'Túnel carpiano y artropatía',
            say: 'Aparece la amiloidosis por beta dos microglobulina, con síndrome del túnel carpiano y artropatía. Y las hepatitis B y C, por eso se vacuna contra la hepatitis B.' },
        ] },
        { title: 'Peritoneodiálisis', tag: 'Peritonitis', kind: 'pharma', items: [
          { t: 'Dolor abdominal y líquido turbio', d: '> 100 leucocitos/µL con > 50 % PMN: Gram y cultivo',
            say: 'En la peritoneodiálisis, la complicación principal es la peritonitis: dolor abdominal y líquido de drenaje turbio. Se confirma con más de cien leucocitos por microlitro, con más de cincuenta por ciento de polimorfonucleares, y se toma Gram y cultivo.' },
          { t: 'Antibióticos intraperitoneales empíricos', d: 'Vancomicina o cefazolina + ceftazidima o gentamicina',
            say: 'Se trata con antibióticos intraperitoneales empíricos, vancomicina o cefazolina más ceftazidima o gentamicina, ajustados al cultivo. Si no responde en cinco días, se retira el catéter.' },
          { t: 'Hernias, fugas, hiperglicemia, falla de ultrafiltración', d: 'Glucosa del dializado: peso y triglicéridos',
            say: 'Otras complicaciones son las hernias y fugas, la hiperglicemia, la hipertrigliceridemia y el aumento de peso por la glucosa del dializado, y la falla de ultrafiltración por esclerosis peritoneal.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Trasplante renal',
      title: 'Trasplante: a quién y con qué compatibilidad',
      cards: [
        { title: 'Indicación', tag: 'Tratamiento de elección', kind: 'key', items: [
          { t: 'ERC etapa 5 sin contraindicaciones', d: 'Mejor sobrevida y calidad de vida que la diálisis',
            say: 'El trasplante renal es el tratamiento de elección de la enfermedad renal crónica etapa cinco, con mejor sobrevida y calidad de vida que la diálisis. Se indica a todo paciente sin contraindicaciones.' },
          { t: 'Idealmente antes de dializar', d: 'TFG < 20 mL/min',
            say: 'Idealmente se hace antes de iniciar diálisis, con filtración bajo veinte mililitros por minuto.' },
          { t: 'Donante vivo o fallecido', d: 'Vivo: mejor sobrevida del injerto · lista de espera GES',
            say: 'El injerto viene de un donante vivo, que da mejor sobrevida del injerto, o de un donante fallecido, con lista de espera garantizada por el GES. Se estudia compatibilidad ABO, HLA, prueba cruzada y serología viral.' },
        ] },
        { title: 'Contraindicaciones', tag: 'No se trasplanta', kind: 'alert', items: [
          { t: 'Neoplasia activa o reciente', d: 'Infección activa no controlada: TBC, sepsis, VIH',
            say: 'No se trasplanta a un paciente con neoplasia activa o reciente, ni con infección activa no controlada, como tuberculosis activa, sepsis o VIH sin control.' },
          { t: 'Enfermedad grave o mala adherencia', d: 'Cardiovascular o pulmonar, vida corta, consumo de sustancias, psiquiátrica',
            say: 'Tampoco con enfermedad cardiovascular o pulmonar grave, expectativa de vida corta, consumo activo de sustancias, o mala adherencia o enfermedad psiquiátrica grave no controlada.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Trasplante renal',
      title: 'Trasplante: rechazo, inmunosupresión e infecciones',
      cards: [
        { title: 'Rechazo', tag: 'Tres tipos', kind: 'alert', items: [
          { t: 'Hiperagudo: minutos a horas', d: 'Anticuerpos preformados',
            say: 'El rechazo puede ser de tres tipos. El hiperagudo ocurre en minutos a horas, por anticuerpos preformados.' },
          { t: 'Agudo celular: semanas a meses', d: 'Sube la creatinina · biopsia · metilprednisolona o timoglobulina',
            say: 'El agudo celular aparece en semanas a meses: sube la creatinina, se confirma con biopsia del injerto y se trata con bolos de metilprednisolona o timoglobulina.' },
          { t: 'Crónico: años', d: 'Fibrosis progresiva',
            say: 'Y el crónico, de años, con fibrosis progresiva del injerto.' },
        ] },
        { title: 'Inmunosupresión', tag: 'Triple esquema', kind: 'pharma', items: [
          { t: 'Tacrolimus + micofenolato + prednisona', d: 'O ciclosporina en lugar de tacrolimus',
            say: 'La inmunosupresión de mantención es triple: tacrolimus, o ciclosporina, más micofenolato y prednisona.' },
          { t: 'Nefrotoxicidad por inhibidores de calcineurina', d: 'Diabetes, HTA, dislipidemia, temblor, hiperkalemia, osteoporosis',
            say: 'Sus efectos adversos: nefrotoxicidad por los inhibidores de calcineurina, diabetes postrasplante, hipertensión, dislipidemia, temblor, hiperkalemia y osteoporosis. El micofenolato da mielosupresión y diarrea.' },
          { t: 'Macrólidos, azoles y diltiazem elevan el tacrolimus', d: 'Evitar AINE · control en el centro de trasplante',
            say: 'En la atención general, se evitan los antiinflamatorios, y se recuerda que los macrólidos, los azoles y el diltiazem elevan el tacrolimus. El control se hace en el centro de trasplante.' },
        ] },
        { title: 'Infecciones y otras', tag: 'Oportunistas', kind: 'key', items: [
          { t: 'CMV, virus BK, Pneumocystis, ITU', d: 'CMV entre 1 y 6 meses · cotrimoxazol de profilaxis',
            say: 'Las infecciones oportunistas son el citomegalovirus, entre uno y seis meses después, la nefropatía por virus BK, el Pneumocystis, con profilaxis de cotrimoxazol, y las infecciones urinarias.' },
          { t: 'Cáncer de piel y linfoma', d: 'Estenosis ureteral, fístula, linfocele, trombosis vascular',
            say: 'Entre las neoplasias, el cáncer de piel y el linfoma postrasplante. Y las complicaciones quirúrgicas: estenosis ureteral, fístula urinaria, linfocele y trombosis vascular.' },
        ] },
      ],
    },

    {
      type: 'points',
      kicker: 'Nutrición',
      title: 'Dieta en la ERC',
      cards: [
        { title: 'Siempre', tag: 'Todas las etapas', kind: 'normal', items: [
          { t: 'Sodio < 2 g/día', d: 'Menos de 5 g de sal',
            say: 'La dieta también nefroprotege. En todas las etapas, sodio bajo dos gramos al día, que equivale a menos de cinco gramos de sal.' },
        ] },
        { title: 'G3 a G5 sin diálisis', tag: 'Proteínas', kind: 'criteria', items: [
          { t: '0,6–0,8 g/kg/día de proteínas', d: 'Restricción moderada',
            say: 'En las etapas tres a cinco que todavía no se dializan, restricción moderada de proteínas, de cero coma seis a cero coma ocho gramos por kilo al día. Así baja la carga de toxinas nitrogenadas y la presión glomerular.' },
        ] },
        { title: 'Etapas avanzadas', tag: 'Fósforo y potasio', kind: 'alert', items: [
          { t: 'Menos fósforo', d: 'Lácteos, bebidas cola, procesados',
            say: 'Y en las etapas avanzadas se restringe el fósforo, que está en los lácteos, las bebidas cola y los alimentos procesados.' },
          { t: 'Menos potasio', d: 'Frutos secos, plátano, cítricos',
            say: 'Y el potasio, que está en los frutos secos, el plátano y los cítricos. El riñón que ya no filtra no alcanza a eliminarlos.' },
        ] },
      ],
    },

    {
      type: 'image',
      light: true,
      kicker: 'Así se ve',
      title: 'Clasificación KDIGO',
      images: [
        { src: 'biblioteca/03_nefrologia/nefro-18/S1_kdigo__propio.svg', label: 'Filtrado y albuminuria', credit: 'Dibujo propio (esquema)' },
      ],
      steps: [
        { note: 'Dos números, un color de riesgo',
          say: 'La enfermedad renal crónica se etapifica con dos números: el filtrado, de G uno a G cinco, y la albuminuria, de A uno a A tres. El cruce da un color de riesgo, y ese color decide la frecuencia de control y la derivación.' },
      ],
    },

    {
      type: 'image',
      layout: 'sequence',
      kicker: 'En movimiento',
      title: 'Las nefronas que se pierden',
      images: [
        { src: 'animaciones/nefro-18/A1_nefronas_erc.mp4', label: 'Enfermedad renal crónica', credit: 'Ilustración: Servier Medical Art, CC BY 4.0 · rótulos y animación propios' },
      ],
      steps: [
        { note: 'Hiperfiltración y nefroprotección',
          say: 'A medida que se pierden nefronas cae la filtración y el paciente baja de etapa. Las que sobreviven hiperfiltran, con más presión dentro del glomérulo y más albuminuria. El IECA o ARA dos dilata la arteriola eferente, baja esa presión y frena la proteinuria. Bajo treinta de filtración entra el GES.' },
      ],
    },

    {
      type: 'pathway',
      intro: 'Juntemos todo en un árbol: dos preguntas deciden el manejo.',
    },

    {
      type: 'table',
      kicker: 'Trampas EUNACOM',
      title: 'Las decisiones que más se preguntan',
      head: ['Escenario', 'Conducta correcta', 'Error frecuente'],
      rows: [
        { cells: ['Diabético con IPC ≥ 0,2 o RAC ≥ 30', 'Iniciar IECA o ARA-II', 'Mantener porque la PA está casi normal'],
          say: 'Repasemos las trampas. Diabético con proteinuria, aunque su presión esté casi normal: IECA o ARA dos. El error es mantener el tratamiento porque la presión no parece tan alta.' },
        { cells: ['Creatinina sube < 30 % tras IECA, K normal', 'Mantener y monitorizar', 'Suspender por toxicidad renal'],
          say: 'Creatinina que sube menos de un treinta por ciento después del IECA, con potasio normal: se mantiene y se controla. Suspenderlo es la trampa.' },
        { cells: ['Creatinina sube > 30 % o K > 5,5', 'Ajustar o pausar el IECA', 'Seguir igual'],
          say: 'Si sube más de un treinta por ciento, o el potasio pasa de cinco coma cinco, ahí sí se ajusta o se pausa.' },
        { cells: ['TFG < 30 en APS', 'Notificar GES y nefrólogo en ≤ 30 días', 'Control en un año o diálisis inmediata'],
          say: 'Filtración bajo treinta en atención primaria: notificar GES y derivar al nefrólogo, que atiende en treinta días. Ni esperar un año, ni dializar de inmediato a un paciente sin síntomas urémicos.' },
        { cells: ['Etapa 4 camino a diálisis', 'Fístula AV ≥ 6 meses antes', 'Esperar y usar catéter central'],
          say: 'Etapa cuatro que va hacia la diálisis: fístula al menos seis meses antes. Esperar hasta necesitar un catéter central es el error.' },
        { cells: ['Metformina con TFG < 30', 'Suspenderla', 'Mantenerla o subirla'],
          say: 'Y metformina con filtración bajo treinta: se suspende, por la acidosis láctica.' },
        { cells: ['Peritoneodiálisis con líquido turbio y dolor', '> 100 leucocitos con > 50 % PMN: antibióticos intraperitoneales', 'Retirar el catéter de entrada o esperar el cultivo'],
          say: 'Paciente en peritoneodiálisis con dolor y líquido turbio: más de cien leucocitos con más de cincuenta por ciento de polimorfonucleares, y antibióticos intraperitoneales empíricos. El catéter se retira solo si no responde en cinco días.' },
        { cells: ['Hipotensión durante la hemodiálisis', 'Suspender ultrafiltración, Trendelenburg, SF', 'Dar un vasopresor de entrada'],
          say: 'Y la hipotensión durante la hemodiálisis: se suspende la ultrafiltración, se coloca al paciente en Trendelenburg y se da suero fisiológico.' },
      ],
    },

    {
      type: 'quiz',
      kicker: 'Caso clínico',
      title: 'Caso clínico',
      stem: 'Hombre de 54 años, DM2 de 14 años e HTA, en tratamiento con metformina 850 mg c/12 h y amlodipino 10 mg/día. Asintomático. PA 142/88 mmHg, retinopatía diabética no proliferativa. HbA1c 7,4 %, creatinina 1,5 mg/dL (TFGe CKD-EPI 52 mL/min/1,73 m²), K 4,2 mEq/L, orina completa normal, RAC 180 mg/g confirmada en 2 tomas.',
      question: '¿Cuál es la conducta más adecuada para la protección renal?',
      options: [
        { letter: 'A', text: 'Suspender la metformina e iniciar insulina' },
        { letter: 'B', text: 'Agregar hidroclorotiazida' },
        { letter: 'C', text: 'Iniciar IECA o ARA-II más un inhibidor de SGLT2' },
        { letter: 'D', text: 'Derivar por GES para confección de fístula arteriovenosa' },
        { letter: 'E', text: 'Mantener el tratamiento y repetir la RAC en un año' },
      ],
      correct: 'C',
      explanation: 'ERC G3a A2 por nefropatía diabética. La albuminuria A2 en un diabético hipertenso es indicación de primera línea de bloqueo del SRAA (enalapril o losartán), que dilata la arteriola eferente y baja la presión intraglomerular, sumado a un inhibidor de SGLT2. La metformina se mantiene con TFG de 52 (se ajusta bajo 45 y se suspende bajo 30). El GES aplica desde TFG < 30.',
      say: {
        stem: 'Vamos al caso. Hombre de cincuenta y cuatro años, diabético hace catorce años e hipertenso, con metformina y amlodipino. Está asintomático. Presión de ciento cuarenta y dos con ochenta y ocho, y retinopatía diabética. La filtración estimada es de cincuenta y dos, el potasio es normal, y la razón albúmina creatinina es de ciento ochenta, confirmada en dos muestras.',
        question: '¿Cuál es la conducta más adecuada para proteger su riñón?',
        options: 'Las alternativas: suspender la metformina e iniciar insulina, agregar hidroclorotiazida, iniciar IECA o ARA dos más un inhibidor del cotransportador sodio glucosa, derivar por GES para fístula, o mantener y repetir en un año. Piénsalo.',
        answer: 'Es la C. Primero etapifica: filtración de cincuenta y dos es G tres a, y albuminuria de ciento ochenta es A dos. Esa albuminuria es la indicación de IECA o ARA dos, más el inhibidor del cotransportador. La A es la trampa: con cincuenta y dos de filtración la metformina se mantiene; se ajusta bajo cuarenta y cinco y se suspende bajo treinta. Y la D llega antes de tiempo: el GES empieza bajo treinta.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Julio 2013 · Pregunta 76',
      stem: 'Un paciente de 46 años, con antecedente de diabetes mellitus tipo 2 en tratamiento con metformina, acude a control, refiere estar asintomático. Al examen físico se encuentra presión arterial de 138/83, sin otros hallazgos. Sus exámenes de control muestran hemoglobina glicosilada en 6.9%, indice proteinuria creatininuria de 0.3, creatinina 0.8 mg/mL.',
      question: 'La conducta más adecuada en este caso es:',
      options: [
        { letter: 'A', text: 'Aumentar dosis de metformina' },
        { letter: 'B', text: 'Iniciar hidroclorotiazida' },
        { letter: 'C', text: 'Iniciar enalapril' },
        { letter: 'D', text: 'Suspender metformina e indicar insulina' },
        { letter: 'E', text: 'Mantener tratamiento actual y reforzar medidas como dieta y ejercicio' },
      ],
      correct: 'C',
      explanation: 'Índice proteinuria/creatininuria de 0,3 (≥ 0,2) es proteinuria: marcador de daño renal en un diabético. Indicación de IECA (enalapril) o ARA-II como nefroprotector, independiente de la presión. La HbA1c está en meta y la función renal es normal, así que la metformina se mantiene.',
      say: {
        stem: 'Ahora una pregunta real, del EUNACOM de julio de dos mil trece. Paciente de cuarenta y seis años, diabético, con metformina, asintomático. Presión de ciento treinta y ocho con ochenta y tres. Hemoglobina glicosilada de seis coma nueve, índice proteinuria creatininuria de cero coma tres, y creatinina normal.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: aumentar la metformina, iniciar hidroclorotiazida, iniciar enalapril, cambiar a insulina, o mantener y reforzar dieta y ejercicio. Piénsalo.',
        answer: 'Es la C, enalapril. El número que decide es el índice de cero coma tres: desde cero coma dos es proteinuria, un marcador de daño renal, y eso indica IECA aunque la presión esté casi en meta. La E es la trampa, porque la glicemia está bien controlada y todo parece en orden. Pero la pregunta no es por el azúcar, es por el riñón.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2018 · Pregunta 114',
      stem: 'Un paciente de 62 años, diabético e hipertenso, en tratamiento con metformina 850 mg/8h, hidroclorotiazina 50 mg/día y atenolol 50 mg/día, acude a control. Su presión arterial es 146/100 mmHg, Su examen físico segmentario no aporta mayor información. Trae algunos exámenes, entre los que destacan clearence de creatinina de 48 mililitros por minuto y proteinuria de 500 mg/litro.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Agregar amlodipino' },
        { letter: 'B', text: 'Agregar doxazosina' },
        { letter: 'C', text: 'Agregar enalapril' },
        { letter: 'D', text: 'Mantener las indicaciones' },
        { letter: 'E', text: 'Reemplazar la hidroclorotiazida por furosemida' },
      ],
      correct: 'C',
      explanation: 'Diabético hipertenso fuera de meta (146/100, meta < 130/80), con ERC (clearence 48) y proteinuria: el fármaco que falta es el bloqueador del SRAA. Se agrega enalapril, que baja la presión y además reduce la proteinuria y frena la progresión.',
      say: {
        stem: 'Otra real, del EUNACOM de diciembre de dos mil dieciocho. Paciente de sesenta y dos años, diabético e hipertenso, con metformina, hidroclorotiazida y atenolol. Su presión es de ciento cuarenta y seis con cien. Tiene un clearence de cuarenta y ocho y proteinuria.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: agregar amlodipino, agregar doxazosina, agregar enalapril, mantener, o cambiar la tiazida por furosemida. Piénsalo.',
        answer: 'Es la C, agregar enalapril. Está fuera de meta, que es bajo ciento treinta con ochenta, así que hay que sumar un fármaco. Y el que se suma es el que además protege el riñón: tiene proteinuria y ya toma dos antihipertensivos, pero ninguno es un IECA. El amlodipino es el distractor tentador, porque también bajaría la presión, pero no reduce la proteinuria.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta real EUNACOM',
      title: 'EUNACOM Diciembre 2025 · Pregunta 122',
      stem: 'Un paciente de 78 años, diabético tipo 2 e hipertenso, sin controles hace 5 años, en tratamiento con enalapril, hidroclorotiazida, amlodipino y metformina, Acude a control, con exámenes de laboratorio. Su presión arterial es de 152/96 mmHg y su frecuencia cardíaca de 68 latidos por minuto. Su examen cardiopulmonar y abdominal es normal. Entre sus exámenes destaca hemoglobina glicosilada: 6%, creatinina plasmática: 3,8 mg/dL, natremia: 140 mEq/L y potasemia: 4,8 mEq/L.',
      question: '¿Cuál es la conducta más adecuada?',
      options: [
        { letter: 'A', text: 'Mantener el tratamiento' },
        { letter: 'B', text: 'Suspender la metformina' },
        { letter: 'C', text: 'Suspender el diurético' },
        { letter: 'D', text: 'Suspender el enalapril' },
        { letter: 'E', text: 'Suspender el amlodipino' },
      ],
      correct: 'B',
      explanation: 'Con creatinina de 3,8 mg/dL a los 78 años, la filtración está muy por debajo de 30 mL/min: la metformina está contraindicada por riesgo de acidosis láctica. Además, su HbA1c de 6 % indica sobretratamiento para su edad. El enalapril se mantiene: potasio normal y presión aún elevada.',
      say: {
        stem: 'Y una reciente, del EUNACOM de diciembre de dos mil veinticinco. Paciente de setenta y ocho años, diabético e hipertenso, sin controles hace cinco años, que toma enalapril, hidroclorotiazida, amlodipino y metformina. Presión de ciento cincuenta y dos con noventa y seis. Hemoglobina glicosilada de seis, creatinina de tres coma ocho, y potasio de cuatro coma ocho.',
        question: '¿Cuál es la conducta más adecuada?',
        options: 'Las opciones: mantener todo, suspender la metformina, suspender el diurético, suspender el enalapril, o suspender el amlodipino. Piénsalo.',
        answer: 'Es la B. Con una creatinina de tres coma ocho a los setenta y ocho años, la filtración está muy por debajo de treinta, y ahí la metformina se suspende por el riesgo de acidosis láctica. La D es la trampa: el enalapril asusta con esa creatinina, pero el potasio es normal y la presión sigue alta, así que se mantiene. Además, una glicosilada de seis a esa edad ya habla de sobretratamiento.',
      },
    },

    {
      type: 'quiz',
      kicker: 'Pregunta del banco EUNACOM',
      title: 'Banco EUNACOM · Caso representativo',
      stem: 'Mujer de 62 años con diabetes mellitus e hipertensión arterial consulta a control en Cesfam. Trae exámenes que muestran creatinina de 2,1 mg/dL, con TFG estimada de 24 mL/min/1,73 m² (confirmada con examen similar hace 4 meses). No presenta síntomas urémicos.',
      question: 'De acuerdo a la normativa GES en Chile, ¿cuál es la conducta que debe adoptar el médico tratante?',
      options: [
        { letter: 'A', text: 'Notificar caso GES N° 1 de ERC etapa 4 y generar interconsulta prioritaria a Nefrología para ingreso en menos de 30 días' },
        { letter: 'B', text: 'Instalar catéter venoso central transitorio para hemodiálisis en el servicio de urgencias' },
        { letter: 'C', text: 'Citar a nuevo control en atención primaria en un año para reevaluar función renal' },
        { letter: 'D', text: 'Iniciar diálisis peritoneal ambulatoria de forma inmediata en el consultorio' },
        { letter: 'E', text: 'Indicar restricción hídrica estricta de 500 mL/día y suspender todo tratamiento oral' },
      ],
      correct: 'A',
      explanation: 'TFG de 24 mL/min confirmada por más de 3 meses: ERC etapa 4. El GES N° 1 cubre las etapas 4 y 5: se notifica y se deriva al nefrólogo, que debe atender en un plazo máximo de 30 días para optimizar el manejo, vacunar contra hepatitis B y planificar la fístula arteriovenosa.',
      say: {
        stem: 'Terminemos con una pregunta del banco EUNACOM sobre el GES. Mujer de sesenta y dos años, diabética e hipertensa, en control en el Cesfam. Tiene una filtración estimada de veinticuatro, confirmada con un examen similar de hace cuatro meses. No tiene síntomas urémicos.',
        question: 'Según la normativa GES, ¿qué debe hacer el médico tratante?',
        options: 'Las opciones: notificar GES y derivar a nefrología en menos de treinta días, instalar un catéter para hemodiálisis, controlar en un año, iniciar peritoneodiálisis inmediata, o restricción hídrica estricta. Piénsalo.',
        answer: 'Es la A. Filtración de veinticuatro, confirmada por más de tres meses, es una etapa cuatro, y la etapa cuatro es GES: se notifica y se deriva al nefrólogo, que tiene treinta días para verla. La C es el error por omisión: no se espera un año. Y la B y la D son el error por exceso: sin síntomas urémicos no hay diálisis de urgencia; lo que se prepara es la fístula.',
      },
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.1.017 · Progresión de la IRC",
      "stem": "Hombre de 61 años, hipertenso, con ERC en control en CESFAM. Hace 1 año TFGe 58 mL/min/1,73 m²; hoy 45 mL/min/1,73 m², confirmada en 2 mediciones. RAC 420 mg/g. PA 136/84 mmHg con losartán 50 mg/día. K 4,6 mEq/L.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Mantener el control anual en atención primaria"
        },
        {
          "letter": "B",
          "text": "Iniciar preparación para diálisis con fístula arteriovenosa"
        },
        {
          "letter": "C",
          "text": "Suspender el losartán por la caída de la TFG"
        },
        {
          "letter": "D",
          "text": "Derivar a nefrología por progresión acelerada y albuminuria severa"
        },
        {
          "letter": "E",
          "text": "Solicitar biopsia renal en atención primaria"
        }
      ],
      "correct": "D",
      "explanation": "Una caída de la TFG mayor de 5 mL/min/1,73 m² en un año define progresión acelerada, y una RAC sobre 300 mg/g es albuminuria severa: ambos son criterios de derivación a nefrología. Mientras, se optimiza el bloqueo del sistema renina-angiotensina y la PA bajo 130/80 mmHg.",
      "say": {
        "stem": "Un hombre de sesenta y un años, hipertenso, con enfermedad renal crónica, perdió trece puntos de filtración en un año: de cincuenta y ocho a cuarenta y cinco. Su razón albúmina creatinina es cuatrocientos veinte, y usa losartán.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: control anual, preparar diálisis, suspender losartán, derivar a nefrología o biopsia en atención primaria. Piénsalo.",
        "answer": "Es la D. Perder más de cinco puntos de filtración al año es progresión acelerada, y una albuminuria sobre trescientos es severa: los dos piden nefrólogo. Suspender el losartán tienta, pero es justamente lo que frena la progresión, y no hay hiperkalemia ni caída aguda que lo justifique."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.3.004 · Diálisis y complicaciones",
      "stem": "Mujer de 57 años en diálisis peritoneal ambulatoria continua hace 2 años. Consulta por 24 horas de dolor abdominal difuso y líquido de drenaje turbio. T° 37,9 °C, abdomen sensible sin signos de perforación. Recuento del efluente: 850 leucocitos/mm³ con 82 % de polimorfonucleares.",
      "question": "¿Cuál es la conducta más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Tomar cultivo del efluente e iniciar antibióticos intraperitoneales empíricos"
        },
        {
          "letter": "B",
          "text": "Retirar el catéter peritoneal de inmediato"
        },
        {
          "letter": "C",
          "text": "Laparotomía exploradora de urgencia"
        },
        {
          "letter": "D",
          "text": "Cambiar a hemodiálisis y observar sin antibióticos"
        },
        {
          "letter": "E",
          "text": "Ciprofloxacino oral y control en 1 semana"
        }
      ],
      "correct": "A",
      "explanation": "Peritonitis asociada a diálisis peritoneal: efluente turbio con más de 100 leucocitos/mm³ y más de 50 % de PMN. Se cultiva el líquido y se inician antibióticos intraperitoneales que cubran grampositivos y gramnegativos. El catéter se retira solo si es refractaria o fúngica.",
      "say": {
        "stem": "Una mujer de cincuenta y siete años, en diálisis peritoneal hace dos años, tiene dolor abdominal y el líquido de drenaje sale turbio. Tiene febrícula y el efluente trae ochocientos cincuenta leucocitos, la mayoría polimorfonucleares.",
        "question": "¿Cuál es la conducta más adecuada?",
        "options": "Las opciones: cultivo y antibióticos intraperitoneales, retirar el catéter, laparotomía, pasar a hemodiálisis sin antibióticos o ciprofloxacino oral. Piénsalo.",
        "answer": "Es la A. Es una peritonitis de diálisis peritoneal y se trata con cultivo y antibióticos por el mismo peritoneo, de amplio espectro. Retirar el catéter tienta, pero se reserva para la peritonitis que no responde o la fúngica."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.1.064 · Insuficiencia renal crónica",
      "stem": "En un policlínico de nefrología infantil se revisa la etiología de los niños con enfermedad renal crónica.",
      "question": "¿Cuál es la causa más frecuente de enfermedad renal crónica en niños?",
      "options": [
        {
          "letter": "A",
          "text": "Nefropatía diabética"
        },
        {
          "letter": "B",
          "text": "Nefropatía hipertensiva"
        },
        {
          "letter": "C",
          "text": "Nefropatía por IgA"
        },
        {
          "letter": "D",
          "text": "Malformaciones congénitas del riñón y vía urinaria (uropatías obstructivas y displasias)"
        },
        {
          "letter": "E",
          "text": "Enfermedad renal poliquística autosómica dominante"
        }
      ],
      "correct": "D",
      "explanation": "En pediatría, especialmente en menores de 5 años, la principal causa de enfermedad renal crónica son las anomalías congénitas del riñón y la vía urinaria: hipoplasia o displasia renal, uropatías obstructivas como válvulas de uretra posterior y reflujo vesicoureteral con nefropatía. Las glomerulopatías ganan importancia en escolares y adolescentes; la diabetes y la hipertensión son causas del adulto.",
      "say": {
        "stem": "Se revisa la etiología de los niños con enfermedad renal crónica.",
        "question": "¿Cuál es la causa más frecuente en pediatría?",
        "options": "Las opciones: nefropatía diabética, hipertensiva, nefropatía por IgA, malformaciones congénitas renales y urinarias o poliquistosis dominante. Piénsalo.",
        "answer": "Es la D. En niños la enfermedad renal crónica se debe sobre todo a malformaciones congénitas del riñón y la vía urinaria. La nefropatía diabética tienta porque es la primera causa en adultos, pero no en pediatría."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 2.01.4.022 · Pruebas de función renal",
      "stem": "Un niño de 8 años, con talla de 125 cm, tiene creatinina plasmática de 0,9 mg/dL. Se quiere estimar su velocidad de filtración glomerular.",
      "question": "¿Qué método es el más adecuado para estimarla en pediatría?",
      "options": [
        {
          "letter": "A",
          "text": "Fórmula de Schwartz (talla y creatinina)"
        },
        {
          "letter": "B",
          "text": "Fórmula de Cockcroft-Gault"
        },
        {
          "letter": "C",
          "text": "Ecuación CKD-EPI"
        },
        {
          "letter": "D",
          "text": "Solo el nitrógeno ureico"
        },
        {
          "letter": "E",
          "text": "La creatinina sola, comparada con valores del adulto"
        }
      ],
      "correct": "A",
      "explanation": "En niños, la filtración glomerular se estima con la fórmula de Schwartz modificada: VFG = 0,413 × talla (cm) / creatinina (mg/dL). En este caso, 0,413 × 125 / 0,9 = 57 mL/min/1,73 m2, es decir, disminuida. Las fórmulas del adulto (CKD-EPI, Cockcroft-Gault) no son válidas en niños, y la creatinina normal varía con la edad y la masa muscular.",
      "say": {
        "stem": "Un niño de ocho años que mide ciento veinticinco centímetros tiene creatinina de cero coma nueve, y se quiere estimar su filtración glomerular.",
        "question": "¿Qué método es el más adecuado?",
        "options": "Las opciones: fórmula de Schwartz, Cockcroft-Gault, CKD-EPI, solo nitrógeno ureico o creatinina sola. Piénsalo.",
        "answer": "Es la A. En pediatría se usa la fórmula de Schwartz, que considera la talla y la creatinina, y aquí muestra una filtración disminuida. La CKD-EPI tienta porque es la estándar, pero solo es válida en adultos."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.02.4.005 · Creatininemia",
      "stem": "Una mujer de 84 años, de 45 kg y con sarcopenia, tiene creatinina plasmática de 1,0 mg/dL. Se calcula su velocidad de filtración glomerular estimada (VFGe) en 50 mL/min/1,73 m².",
      "question": "¿Cuál es la interpretación más adecuada?",
      "options": [
        {
          "letter": "A",
          "text": "Tiene disminución de la función renal, que la creatinina sola subestima por su baja masa muscular"
        },
        {
          "letter": "B",
          "text": "Su función renal es normal, porque la creatinina está en rango normal"
        },
        {
          "letter": "C",
          "text": "La creatinina sobreestima el daño renal en los adultos mayores"
        },
        {
          "letter": "D",
          "text": "Debe medirse solo la creatinina en orina de 24 horas"
        },
        {
          "letter": "E",
          "text": "La VFGe no es aplicable en mayores de 70 años"
        }
      ],
      "correct": "A",
      "explanation": "La creatinina depende de la masa muscular: en adultos mayores con poca masa muscular, una creatinina normal puede ocultar una VFG disminuida. Por eso se usa la VFG estimada (CKD-EPI), que ajusta por edad y sexo. Es clave para ajustar dosis de fármacos y para etapificar la enfermedad renal crónica.",
      "say": {
        "stem": "Una mujer de ochenta y cuatro años, de cuarenta y cinco kilos y con sarcopenia, tiene creatinina de uno coma cero y una filtración glomerular estimada de cincuenta.",
        "question": "¿Cuál es la interpretación más adecuada?",
        "options": "Las opciones: función renal disminuida que la creatinina sola subestima, función renal normal por creatinina normal, la creatinina sobreestima el daño, medir solo creatinina en orina de veinticuatro horas o la filtración estimada no sirve en mayores. Piénsalo.",
        "answer": "Es la A. Con poca masa muscular, una creatinina normal puede ocultar una filtración disminuida. La opción normal tienta por el valor de uno, pero en ella ese uno corresponde a una filtración de cincuenta."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2024 · Pregunta 103",
      "stem": "Paciente con trasplante renal hace 9 años, usuario de tacrolimus, presenta hace 1 semana compromiso del estado general y dolor en la zona del injerto. Los exámenes de rutina de hace 10 días mostraban niveles plasmáticos de tacrolimus en rango normal y creatinina de 0,9 mg/dL. Exámenes actuales: creatinina 2,3 mg/dL y orina completa con leucocitos y bacterias.",
      "question": "¿Cuál es el diagnóstico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Rechazo agudo"
        },
        {
          "letter": "B",
          "text": "Rechazo crónico"
        },
        {
          "letter": "C",
          "text": "Intoxicación por tacrolimus"
        },
        {
          "letter": "D",
          "text": "Pielonefritis del injerto"
        },
        {
          "letter": "E",
          "text": "Pielonefritis de los riñones nativos"
        }
      ],
      "correct": "D",
      "explanation": "Dolor sobre el injerto, compromiso general, leucocituria y bacteriuria con alza aguda de creatinina sugieren pielonefritis del injerto, infección frecuente en trasplantados por la inmunosupresión. Requiere urocultivo y antibióticos endovenosos. Con niveles normales de tacrolimus la toxicidad es improbable, el rechazo crónico es lento y el rechazo agudo no explica la piuria.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil veinticuatro. Paciente con trasplante renal y tacrolimus en rango, con dolor en el injerto, alza de creatinina y orina con leucocitos y bacterias.",
        "question": "¿Cuál es el diagnóstico más probable?",
        "options": "Las opciones: rechazo agudo, rechazo crónico, toxicidad por tacrolimus, pielonefritis del injerto, o pielonefritis de los riñones nativos. Piénsalo.",
        "answer": "Es la D. Pielonefritis del injerto, porque hay dolor en el injerto con leucocitos y bacterias en la orina. El rechazo agudo también sube la creatinina y duele, pero no explica la orina infectada."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta real EUNACOM",
      "title": "EUNACOM Diciembre 2017 · Pregunta 48",
      "stem": "Un paciente de 28 años, con antecedente de tuberculosis renal tratada a los 16 años, presenta edema blando de extremidades inferiores, mayor en las tardes, e hipertensión arterial de 150/90 mmHg. En sus exámenes destaca creatinina plasmática 2,8 mg/dL, BUN 40 mg/dL, Na+ 132 mEq/L, K+ 5,0 mEq/L y orina completa con proteinuria ++ y sedimento normal.",
      "question": "¿Cuál es el examen de elección para continuar el estudio diagnóstico?",
      "options": [
        {
          "letter": "A",
          "text": "Pielografía de eliminación"
        },
        {
          "letter": "B",
          "text": "Ecografía abdominal"
        },
        {
          "letter": "C",
          "text": "Índice proteinuria/creatininuria"
        },
        {
          "letter": "D",
          "text": "Cintigrafía DMSA"
        },
        {
          "letter": "E",
          "text": "TAC renal"
        }
      ],
      "correct": "B",
      "explanation": "Ante una falla renal de reciente diagnóstico, la ecografía renal es el examen inicial: riñones pequeños con pérdida de la diferenciación corticomedular indican enfermedad crónica, y además evalúa asimetrías, secuelas de tuberculosis e hidronefrosis. Es inocua, a diferencia de la pielografía y la TAC con contraste. La cintigrafía DMSA puede complementar después.",
      "say": {
        "stem": "Una pregunta real del EUNACOM de diciembre de dos mil diecisiete. Hombre de veintiocho años con antecedente de tuberculosis renal, ahora hipertenso, con edema y creatinina de dos coma ocho.",
        "question": "¿Qué examen sigue?",
        "options": "Las opciones: pielografía, ecografía, índice proteinuria creatininuria, cintigrafía DMSA, o TAC renal. Piénsalo.",
        "answer": "Es la B. La ecografía, que diferencia una falla aguda de una crónica por el tamaño renal y busca hidronefrosis. La cintigrafía tienta por la tuberculosis, pero es un examen complementario, no inicial."
      }
    },
    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 1.09.4.009 · Clearence de creatinina",
      "stem": "Hombre de 60 años con enfermedad renal crónica. Se estima su función renal con el clearance de creatinina en orina de 24 horas y se compara con la filtración glomerular medida por un método de referencia.",
      "question": "¿Por qué el clearance de creatinina tiende a sobreestimar la filtración glomerular real, especialmente en ERC avanzada?",
      "options": [
        {
          "letter": "A",
          "text": "Porque la creatinina se reabsorbe en el túbulo"
        },
        {
          "letter": "B",
          "text": "Porque la creatinina se metaboliza en el hígado"
        },
        {
          "letter": "C",
          "text": "Porque una fracción de la creatinina se secreta en el túbulo proximal"
        },
        {
          "letter": "D",
          "text": "Porque la creatinina no se filtra libremente"
        },
        {
          "letter": "E",
          "text": "Porque la orina de 24 horas siempre se recolecta en exceso"
        }
      ],
      "correct": "C",
      "explanation": "La creatinina se filtra libremente y, además, se secreta en el túbulo proximal, fracción que aumenta a medida que cae la filtración; por eso el clearance sobreestima la VFG en la ERC avanzada. Su principal error práctico es la recolección incompleta de orina. Hoy se prefieren ecuaciones de estimación como CKD-EPI.",
      "say": {
        "stem": "En un paciente con enfermedad renal crónica, el clearance de creatinina de veinticuatro horas resulta más alto que la filtración real.",
        "question": "¿Por qué lo sobreestima?",
        "options": "Las opciones: reabsorción tubular, metabolismo hepático, secreción tubular proximal, filtración no libre o recolección en exceso. Piénsalo.",
        "answer": "Es la C. Por la secreción tubular de creatinina, que aumenta cuando cae la filtración. La reabsorción tubular es la trampa: haría lo contrario y subestimaría."
      }
    },

    {
      "type": "quiz",
      "kicker": "Pregunta de práctica",
      "title": "Perfil V3 4.03.3.006 · Trasplante renal, indicaciones y complicaciones",
      "stem": "Mujer de 45 años, trasplantada renal hace 4 meses, en tratamiento con tacrolimus, micofenolato y prednisona. Consulta por fiebre de 38 °C, tos y disnea progresiva de 1 semana. Radiografía con infiltrado intersticial bilateral. LDH elevada. Suspendió por su cuenta la profilaxis con cotrimoxazol hace 1 mes.",
      "question": "¿Cuál es el agente etiológico más probable?",
      "options": [
        {
          "letter": "A",
          "text": "Pneumocystis jirovecii"
        },
        {
          "letter": "B",
          "text": "Streptococcus pneumoniae"
        },
        {
          "letter": "C",
          "text": "Mycoplasma pneumoniae"
        },
        {
          "letter": "D",
          "text": "Legionella pneumophila"
        },
        {
          "letter": "E",
          "text": "Rechazo agudo del injerto"
        }
      ],
      "correct": "A",
      "explanation": "Entre el primer y sexto mes postrasplante predominan las infecciones oportunistas (CMV, Pneumocystis), por la inmunosupresión máxima. Neumonía intersticial bilateral con LDH alta e hipoxemia, sin profilaxis con cotrimoxazol, sugiere Pneumocystis jirovecii. Se trata con cotrimoxazol en dosis altas. Por eso la profilaxis se mantiene al menos 6 meses.",
      "say": {
        "stem": "Mujer de cuarenta y cinco años, con trasplante renal hace cuatro meses e inmunosupresores, que dejó la profilaxis con cotrimoxazol. Tiene fiebre, tos, disnea, infiltrado intersticial bilateral y LDH alta.",
        "question": "¿Cuál es el agente más probable?",
        "options": "Las opciones: Pneumocystis, neumococo, micoplasma, legionela o rechazo agudo. Piénsalo.",
        "answer": "Es la A. Es Pneumocystis: período de máxima inmunosupresión, neumonía intersticial con LDH alta y sin profilaxis. El neumococo tienta por ser la causa más común de neumonía, pero da consolidación lobar, no un patrón intersticial bilateral en un inmunosuprimido."
      }
    },

    {
      type: 'points',
      kicker: 'Cierre',
      title: 'Reglas de oro para el examen',
      cards: [
        { title: 'Definir y etapificar', tag: 'KDIGO', kind: 'key', items: [
          { t: 'TFG < 60 o daño > 3 meses', d: 'Se etapifica con G y A',
            say: 'Cerremos con las reglas de oro. Enfermedad renal crónica es filtración bajo sesenta, o un marcador de daño, por más de tres meses. Y se describe con dos letras: G y A.' },
        ] },
        { title: 'Nefroprotección', tag: 'IECA o ARA-II', kind: 'pharma', items: [
          { t: 'Albuminuria = IECA o ARA-II', d: 'IPC ≥ 0,2 o RAC ≥ 30',
            say: 'Toda albuminuria A dos o A tres, o un índice proteinuria creatininuria desde cero coma dos, lleva IECA o ARA dos, más un inhibidor del cotransportador sodio glucosa.' },
          { t: 'Creatinina sube < 30 %: se mantiene', d: 'Se pausa si > 30 % o K > 5,5',
            say: 'Y si la creatinina sube menos de un treinta por ciento, el IECA se mantiene.' },
        ] },
        { title: 'GES N° 1', tag: 'Etapas 4 y 5', kind: 'alert', items: [
          { t: 'TFG < 30: notificar y nefrólogo ≤ 30 días', d: 'Fístula ≥ 6 meses antes de dializar',
            say: 'Bajo treinta de filtración entra el GES: nefrólogo en treinta días y fístula seis meses antes de dializar. Si te llevas una sola idea de hoy: la albuminuria indica el IECA, y el treinta de filtración abre el GES. Nos vemos en la próxima clase.' },
        ] },
      ],
    },
  ],

  pathway: {
    title: 'ERC: albuminuria y filtración deciden',
    root: N('start', 'ERC confirmada', 'TFG < 60 o daño renal > 3 meses',
      'Paciente con enfermedad renal crónica confirmada: filtración bajo sesenta o un marcador de daño, por más de tres meses. Dos preguntas deciden el manejo.',
      ['', N('q', '¿Albuminuria A2 o A3?', 'RAC ≥ 30 mg/g',
        'La primera pregunta: ¿tiene albuminuria moderada o severa, una razón albúmina creatinina de treinta o más?',
        ['SÍ', N('do', 'IECA o ARA-II + iSGLT2', 'PA < 130/80',
          'Si la tiene, bloqueo del sistema renina angiotensina con IECA o ARA dos, más un inhibidor del cotransportador sodio glucosa, con meta de presión bajo ciento treinta con ochenta.',
          ['', N('q', '¿TFG < 30?', 'Etapa 4 o 5',
            'La segunda pregunta es la filtración: ¿bajó de treinta?',
            ['NO', N('ok', 'Manejo en APS', 'TFG y RAC cada 6–12 meses',
              'Si no, sigue en atención primaria, controlando filtración y albuminuria cada seis a doce meses, y ajustando fármacos como la metformina.')],
            ['SÍ', N('alert', 'GES N° 1', 'Nefrólogo ≤ 30 días · fístula AV',
              'Si bajó de treinta, se notifica GES y se deriva al nefrólogo en treinta días, con preparación de la fístula y vacuna contra la hepatitis B.')])])],
        ['NO', N('do', 'Control metabólico y CV', 'Glicemia, estatinas, sodio < 2 g, sin AINE',
          'Si la albuminuria es A uno, lo central es el control metabólico y cardiovascular: glicemia, estatinas, sodio bajo dos gramos y nada de antiinflamatorios. Y la misma segunda pregunta: si la filtración baja de treinta, entra el GES.',
          ['TFG < 30', N('alert', 'GES N° 1', 'Notificar y derivar',
            'Filtración bajo treinta: notificar GES y derivar al nefrólogo, igual que en la otra rama.')])])]),
  },
};
