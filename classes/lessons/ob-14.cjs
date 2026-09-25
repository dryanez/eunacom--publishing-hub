// Clase 3.14 — guion docente escrito a mano (estándar Módulo 3 · Obstetricia).
// Fuente clínica: books/scripts/dataset_obstetricia.cjs (ob-14).

const N = (k, t, s, say, ...kids) => ({ k, t, s, say, kids });

module.exports = {
  id: 'ob-14',
  tier: 3,
  slides: [
    {
      type: 'cover',
      subtitle: 'Rotura prematura de membranas, período de latencia, antibióticos y corioamnionitis clínica: abordaje según edad gestacional',
      say: 'Bienvenidos a la clase sobre rotura prematura de membranas ovulares y corioamnionitis clínica. La rotura prematura de membranas es responsable de un tercio de los partos de pretérmino. En esta sesión dominaremos la especuloscopía estéril, la estricta prohibición del tacto vaginal digital, el umbral crítico de treinta y cuatro semanas, los antibióticos de latencia y los criterios diagnósticos de Gibbs. Comencemos.',
    },

    {
      type: 'flow',
      kicker: 'Fisiopatología perinatal',
      title: 'Etiología y mecanismos de la rotura prematura de membranas',
      nodes: [
        { id: 'cau', col: 0, row: 1, k: 'start', t: 'Factores desencadenantes', s: 'Infección genital ascendente, sobredistensión, tabaquismo y conización' },
        { id: 'enz', col: 1, row: 1, k: 'mech', t: 'Metaloproteinasas y colagenólisis', s: 'Activación enzimática bacteriana o inflamatoria que degrada el colágeno corioamniótico' },
        { id: 'fis', col: 2, row: 1, k: 'effect', t: 'Fisura o rotura de membranas', s: 'Pérdida de la integridad física de la cavidad amniótica con salida de líquido' },
        { id: 'lat', col: 3, row: 0, k: 'good', t: 'Período de latencia clínica', s: 'Tiempo transcurrido entre la rotura de membranas y el inicio del trabajo de parto' },
        { id: 'inf', col: 3, row: 2, k: 'trap', t: 'Ascenso bacteriano e infección', s: 'Pérdida de la barrera estéril con invasión de corion, amnios y feto' },
      ],
      edges: [
        { from: 'cau', to: 'enz', label: 'inflamación' },
        { from: 'enz', to: 'fis', label: 'lisis de colágeno' },
        { from: 'fis', to: 'lat', label: 'evolución natural' },
        { from: 'fis', to: 'inf', label: 'exposición cavitaria' },
      ],
      steps: [
        {
          show: ['cau', 'enz'],
          note: 'Degradación enzimática del corion y amnios',
          say: 'La rotura prematura de membranas no es un simple desgaste físico mecánico, sino un proceso biológico activo donde gérmenes ascendentes del tracto genital inferior o procesos inflamatorios inducen la síntesis de metaloproteinasas y colagenasas que degradan la matriz extracelular de las membranas ovulares.',
        },
        {
          show: ['fis', 'lat'],
          note: 'Solución de continuidad y período de latencia',
          say: 'Al romperse las membranas se produce la salida de líquido amniótico al exterior. El intervalo entre la rotura y el desencadenamiento espontáneo de las contracciones uterinas se denomina período de latencia; a menor edad gestacional, más prolongada suele ser esta latencia fisiológica.',
        },
        {
          show: ['inf'],
          note: 'Riesgo inminente de infección intraamniótica',
          say: 'La complicación más grave de la rotura de membranas es la pérdida de la barrera de esterilidad amniótica. Los microorganismos vaginales ascienden rápidamente hacia la cavidad uterina, colonizando la placenta, el cordón y los pulmones fetales, lo cual puede culminar en sepsis neonatal grave y corioamnionitis.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Diagnóstico semiológico',
      title: 'Diagnóstico Clínico y Contraindicación Absoluta en Sospecha de RPM',
      cards: [
        {
          title: 'Especuloscopía Estéril (Estándar de Oro)',
          tag: 'Inspección visual directa',
          kind: 'key',
          items: [
            {
              t: 'Salida de líquido con olor a hipoclorito',
              d: 'Líquido transparente con olor característico a cloro o semen en genitales',
              say: 'La paciente relata la pérdida brusca o continua de abundante líquido acuoso transparente, tibio y con olor característico a hipoclorito de sodio o semen. Este olor a cloro orienta fuertemente al clínico antes de iniciar el examen físico.',
            },
            {
              t: 'Visualización con maniobra de Valsalva o Tarnier',
              d: 'Salida de líquido por el orificio cervical al pujar o al rechazar la presentación',
              say: 'La especuloscopía estéril es el examen de elección. Permite visualizar directamente la salida de líquido amniótico por el orificio cervical externo de forma espontánea, al solicitar a la paciente que puje con la maniobra de Valsalva o al rechazar suavemente la presentación fetal hacia arriba mediante la maniobra de Tarnier.',
            },
          ],
        },
        {
          title: '¡PROHIBICIÓN DEL TACTO VAGINAL!',
          tag: 'Regla de oro EUNACOM',
          kind: 'alert',
          items: [
            {
              t: 'Contraindicación formal del tacto digital',
              d: 'Arrastra bacterias vaginales directo al canal cervical y cavidad amniótica',
              say: 'El tacto vaginal digital está terminantemente contraindicado en la sospecha de rotura de membranas sin trabajo de parto franco. Constituye una de las preguntas trampa clásicas del examen EUNACOM que ningún postulante debe olvidar jamás.',
            },
            {
              t: 'Acorta la latencia y cuadruplica la infección',
              d: 'Multiplica por cuatro el riesgo de corioamnionitis y sepsis neonatal precoz',
              say: 'Realizar un tacto vaginal digital arrastra microorganismos de la microbiota vaginal patógena directamente al canal endocervical. Esto reduce a la mitad el tiempo de latencia libre de parto y cuadruplica el riesgo de infección intraamniótica materna y sepsis neonatal grave.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Estudios de confirmación',
      title: 'Pruebas diagnósticas auxiliares en casos dudosos de RPM',
      head: ['Prueba diagnóstica', 'Fundamento del test', 'Riesgo de falsos resultados'],
      rows: [
        {
          cells: ['Cristalización en helecho', 'Toma de líquido de fondo de saco; seca formando hojas de helecho al microscopio', 'Falsos negativos si la toma es escasa o hay sangre masiva'],
          say: 'El test de cristalización en hoja de helecho detecta la arborización producida por la concentración de cloruro de sodio y mucina al secarse al aire libre en un portaobjetos, observándose al microscopio con una sensibilidad diagnóstica superior al noventa por ciento.',
        },
        {
          cells: ['Test de Nitrazina (pH)', 'Viraje de papel a color azul intenso por pH alcalino mayor a seis punto cinco', 'Falsos positivos por semen, sangre, orina infectada o vaginosis'],
          say: 'El test de nitrazina aprovecha el pH básico del líquido amniótico, en contraste con el pH ácido normal de la vagina. El viraje del papel a un color azul intenso indica alcalinidad, aunque la presencia de semen, orina infectada o sangre pueden arrojar falsos positivos.',
        },
        {
          cells: ['Biomarcadores AmniSure (PAMG-1)', 'Detección rápida en secreción vaginal de alfa-microglobulina-1 placentaria', 'Sensibilidad y especificidad cercanas al noventa y nueve por ciento'],
          say: 'Los inmunoensayos modernos como la microglobulina placentaria alfa-uno tienen una sensibilidad y especificidad superiores al noventa y ocho por ciento, siendo sumamente útiles en el servicio de urgencias cuando la especuloscopía no es concluyente.',
        },
        {
          cells: ['Ecografía obstétrica', 'Evaluación del índice de líquido amniótico y bolsillo único mayor', 'El oligohidramnios apoya la sospecha pero no es confirmatorio por sí solo'],
          say: 'La ecografía obstétrica evalúa el índice de líquido amniótico y el bolsillo único mayor. El hallazgo de oligohidramnios o disminución marcada del volumen apoya fuertemente la sospecha clínica, pero nunca confirma por sí solo la existencia de una rotura de membranas.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Algoritmo decisional perinatal',
      title: 'Manejo de la RPM según Edad Gestacional: el umbral de 34 semanas',
      nodes: [
        { id: 'rpm', col: 0, row: 1, k: 'start', t: 'Rotura prematura confirmada', s: 'Diagnóstico certificado por especuloscopía estéril' },
        { id: 'e34', col: 1, row: 0, k: 'alert', t: 'Gestación mayor o igual a 34 semanas', s: 'Riesgos infecciosos superan a la morbimortalidad por prematurez' },
        { id: 'ind', col: 2, row: 0, k: 'good', t: 'Interrupción activa del embarazo', s: 'Inducción inmediata de parto con oxitocina o misoprostol' },
        { id: 'pre', col: 1, row: 2, k: 'mech', t: 'Gestación de 24 a 33 semanas con 6 días', s: 'Candidata a manejo expectante conservador en ARO' },
        { id: 'aro', col: 2, row: 2, k: 'good', t: 'Hospitalización y latencia', s: 'Antibióticos de latencia, betametasona y vigilancia estrecha' },
      ],
      edges: [
        { from: 'rpm', to: 'e34', label: 'evaluar edad' },
        { from: 'e34', to: 'ind', label: 'conducta activa' },
        { from: 'rpm', to: 'pre', label: 'evaluar edad' },
        { from: 'pre', to: 'aro', label: 'manejo expectante' },
      ],
      steps: [
        {
          show: ['rpm', 'e34', 'ind'],
          note: 'Conducta activa obligatoria a partir de 34 semanas',
          say: 'A partir de las treinta y cuatro semanas de gestación la conducta indicada es la interrupción activa del embarazo. La madurez pulmonar fetal ya está prácticamente consolidada y prolongar la gestación solo aumenta exponencialmente el riesgo de corioamnionitis, desprendimiento placentario y compresión del cordón umbilical.',
        },
        {
          show: ['rpm', 'pre', 'aro'],
          note: 'Manejo expectante estricto entre 24 y 33 semanas con 6 días',
          say: 'En embarazos entre las veinticuatro y las treinta y tres semanas con seis días, si no hay evidencia de infección clínica o desprendimiento, se indica un manejo conservador hospitalizado en sala de alto riesgo obstétrico para ganar madurez fetal mediante corticoides y antibióticos de latencia.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Manejo conservador en ARO',
      title: 'Pilares Terapéuticos del Manejo Expectante de la RPM de Pretérmino',
      cards: [
        {
          title: 'Antibioticoterapia de Latencia',
          tag: 'Esquema obligatorio',
          kind: 'pharma',
          items: [
            {
              t: 'Prolongación de la latencia y prevención de sepsis',
              d: 'Aumenta significativamente el tiempo hasta el parto y reduce secuelas neurológicas',
              say: 'La antibioticoterapia de latencia prolonga significativamente los días de gestación libre de parto. Además, disminuye la tasa de corioamnionitis materna y reduce en el neonato las complicaciones más temidas: la sepsis precoz, la enterocolitis necrotizante y la hemorragia intraventricular.',
            },
            {
              t: 'Esquema combinado MINSAL y ACOG',
              d: 'Ampicilina endovenosa más Eritromicina oral por siete días completos',
              say: 'El protocolo normado por el MINSAL y las guías internacionales contempla una fase inicial endovenosa de cuarenta y ocho horas con ampicilina y eritromicina, continuada por cinco días de amoxicilina oral combinada con eritromicina oral hasta completar siete días íntegros.',
            },
          ],
        },
        {
          title: 'Maduración y Neuroprotección Fetal',
          tag: 'Intervenciones neonatales',
          kind: 'criteria',
          items: [
            {
              t: 'Betametasona para maduración pulmonar',
              d: 'Doce miligramos intramusculares cada veinticuatro horas por dos dosis en total',
              say: 'En todo embarazo entre las veinticuatro y treinta y cuatro semanas administramos betametasona intramuscular en dos dosis de doce miligramos separadas por veinticuatro horas. Este esquema acelera la síntesis de surfactante y reduce el síndrome de distrés respiratorio y la mortalidad neonatal.',
            },
            {
              t: 'Sulfato de magnesio para neuroprotección',
              d: 'Indicado si el parto prematuro es inminente antes de las treinta y dos semanas',
              say: 'Cuando el parto prematuro es inminente en gestaciones menores a treinta y dos semanas, indicamos una infusión de sulfato de magnesio como neuroprotector fetal, reduciendo a la mitad el riesgo de parálisis cerebral infantil y disfunción motora severa.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Fármacos indispensables',
      title: 'Esquema de Antibióticos de Latencia en RPM según Guía Perinatal MINSAL',
      head: ['Fármaco y vía', 'Dosis y frecuencia', 'Duración del esquema'],
      rows: [
        {
          cells: ['Ampicilina endovenosa', 'Dos gramos de carga seguidos de un gramo cada seis horas', 'Primeras cuarenta y ocho horas'],
          say: 'Iniciamos ampicilina endovenosa con dos gramos de carga seguidos de un gramo cada seis horas por cuarenta y ocho horas para lograr concentraciones bactericidas inmediatas contra estreptococo del grupo B y enterobacterias.',
        },
        {
          cells: ['Eritromicina oral o endovenosa', 'Doscientos cincuenta miligramos cada seis horas', 'Siete días continuos'],
          say: 'Asociamos eritromicina en dosis de doscientos cincuenta miligramos cada seis horas durante siete días para erradicar gérmenes atípicos como Ureaplasma urealyticum y Mycoplasma hominis, agentes etiológicos centrales en la colagenólisis de membranas.',
        },
        {
          cells: ['Amoxicilina oral de mantención', 'Quinientos miligramos cada ocho horas', 'Cinco días posteriores (días tres a siete)'],
          say: 'A partir del tercer día pasamos a la vía oral con amoxicilina quinientos miligramos cada ocho horas durante cinco días más, completando los siete días normados sin requerir antibióticos adicionales si la paciente permanece asintomática.',
        },
      ],
    },

    {
      type: 'flow',
      kicker: 'Sepsis intraamniótica',
      title: 'Fisiopatología de la Corioamnionitis Clínica',
      nodes: [
        { id: 'rup', col: 0, row: 1, k: 'start', t: 'Rotura prolongada de membranas', s: 'Apertura de la cavidad con ascenso de microorganismos urogenitales' },
        { id: 'inv', col: 1, row: 1, k: 'mech', t: 'Invasión microbiana corioamniótica', s: 'Colonización por Ureaplasma, Mycoplasma, E. coli o Estreptococo grupo B' },
        { id: 'firs', col: 2, row: 1, k: 'risk', t: 'FIRS: Síndrome de Respuesta Fetal', s: 'Liberación masiva de interleucinas proinflamatorias interleucina seis y factor tumoral' },
        { id: 'sep', col: 3, row: 0, k: 'trap', t: 'Sepsis neonatal y leucomalacia', s: 'Parálisis cerebral, distrés respiratorio severo y muerte neonatal' },
        { id: 'mat', col: 3, row: 2, k: 'trap', t: 'Shock séptico materno y CID', s: 'Bacteriemia, hemorragia postparto por inercia uterina y falla orgánica' },
      ],
      edges: [
        { from: 'rup', to: 'inv', label: 'ascenso patógeno' },
        { from: 'inv', to: 'firs', label: 'activación inmune' },
        { from: 'firs', to: 'sep', label: 'daño orgánico fetal' },
        { from: 'inv', to: 'mat', label: 'translocación sistémica' },
      ],
      steps: [
        {
          show: ['rup', 'inv'],
          note: 'Invasión microbiana ascendente',
          say: 'La colonización de la cavidad amniótica por gérmenes como Ureaplasma, micoplasmas, Escherichia coli o Estreptococo del grupo B genera una intensa infiltración leucocitaria en las membranas, el cordón y el líquido amniótico.',
        },
        {
          show: ['firs', 'sep'],
          note: 'Síndrome de Respuesta Inflamatoria Sistémica Fetal (FIRS)',
          say: 'El feto responde a la infección con una masiva liberación de citocinas inflamatorias como interleucina seis. Este síndrome de respuesta fetal puede lesionar la sustancia blanca cerebral provocando leucomalacia periventricular y parálisis cerebral permanente.',
        },
        {
          show: ['mat'],
          note: 'Complicaciones infecciosas y hemorrágicas maternas',
          say: 'Para la madre, la corioamnionitis representa un riesgo inminente de sepsis grave, shock séptico, abscesos pélvicos y atonía uterina postparto con hemorragia masiva por incapacidad de contracción del miometrio infectado.',
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Criterios de Gibbs',
      title: 'Diagnóstico Clínico de Corioamnionitis según Criterios de Gibbs',
      cards: [
        {
          title: 'Criterio Obligatorio',
          tag: 'Signo cardinal indispensable',
          kind: 'alert',
          items: [
            {
              t: 'Fiebre materna mayor o igual a 38.0°C',
              d: 'Temperatura axilar constatada en dos tomas separadas o 38.5°C en toma única',
              say: 'El diagnóstico clínico de corioamnionitis requiere de manera obligatoria e insustituible la presencia de fiebre materna, definida como temperatura axilar de treinta y ocho grados o más en dos tomas separadas o treinta y ocho punto cinco grados en una sola medición.',
            },
            {
              t: 'Ausencia de otro foco infeccioso identificable',
              d: 'Descartar pielonefritis, infección respiratoria alta o infección viral aguda',
              say: 'Esta fiebre debe ocurrir sin que exista otro foco infeccioso extrauterino que la explique, como una pielonefritis aguda, un cuadro respiratorio bajo o una apendicitis aguda concomitante durante la gestación.',
            },
          ],
        },
        {
          title: 'Criterios Secundarios (al menos dos presentes)',
          tag: 'Signos inflamatorios asociados',
          kind: 'criteria',
          items: [
            {
              t: 'Taquicardia materna y taquicardia fetal',
              d: 'FC materna mayor a 100 lpm y FCF sostenida mayor a 160 lpm',
              say: 'Los criterios secundarios incluyen taquicardia materna sobre cien latidos por minuto o taquicardia fetal sostenida sobre ciento sesenta latidos por minuto, que es la señal más precoz de respuesta fetal.',
            },
            {
              t: 'Dolor uterino y líquido purulento fétido',
              d: 'Sensibilidad a la palpación del miometrio o salida de secreción de olor fétido',
              say: 'Se constata hipersensibilidad o dolor marcado a la palpación del cuerpo y fondo uterino, o bien la salida evidente de líquido amniótico turbio, francamente purulento y con olor fétido descompuesto.',
            },
            {
              t: 'Leucocitosis materna significativa',
              d: 'Recuento de leucocitos mayor a quince mil por milímetro cúbico con neutrofilia',
              say: 'El hemograma materno confirma leucocitosis superior a quince mil células por milímetro cúbico asociada a desviación izquierda con presencia de baciliformes o neutrofilia patológica.',
            },
          ],
        },
      ],
    },

    {
      type: 'points',
      kicker: 'Conducta médica de urgencia',
      title: 'Conducta Terapéutica Inmediata ante Corioamnionitis Clínica',
      cards: [
        {
          title: 'Interrupción Inmediata del Embarazo',
          tag: 'Independiente de la edad gestacional',
          kind: 'alert',
          items: [
            {
              t: 'La corioamnionitis no admite manejo expectante',
              d: 'No esperar efecto de corticoides ni administrar tocolíticos bajo ninguna circunstancia',
              say: 'La presencia de corioamnionitis clínica es una contraindicación absoluta para cualquier manejo expectante. Está formalmente prohibido administrar tocolíticos para intentar frenar el trabajo de parto o retrasar la evacuación uterina para esperar el efecto de los corticoides.',
            },
            {
              t: 'La vía de parto depende de las condiciones obstétricas',
              d: 'El parto vaginal es la vía preferida; la cesárea solo por indicación obstétrica formal',
              say: 'La corioamnionitis no es una indicación directa e indiscutible de cesárea. Si las condiciones obstétricas y cervicales son favorables con feto en cefálica y bienestar conservado, la vía vaginal con inducción acelerada es la primera opción para evitar mayor morbilidad operatoria.',
            },
          ],
        },
        {
          title: 'Antibioticoterapia Endovenosa Inmediata',
          tag: 'Terapia de amplio espectro',
          kind: 'pharma',
          items: [
            {
              t: 'Ampicilina más Gentamicina endovenosa',
              d: 'Ampicilina dos gramos cada seis horas más Gentamicina tres a cinco miligramos por kilo',
              say: 'Iniciamos de forma inmediata antibioticoterapia endovenosa de amplio espectro combinando ampicilina dos gramos cada seis horas más gentamicina endovenosa, garantizando una rápida concentración tisular fetal y placentaria.',
            },
            {
              t: 'Adición de Clindamicina o Metronidazol en cesárea',
              d: 'Para cobertura anaeróbica y prevención de endometritis postquirúrgica grave',
              say: 'Si el parto debe resolverse mediante operación cesárea por motivos obstétricos, se agrega clindamicina o metronidazol endovenoso para una adecuada cobertura de bacterias anaerobias, disminuyendo el riesgo de fascitis y peritonitis puerperal.',
            },
          ],
        },
      ],
    },

    {
      type: 'table',
      kicker: 'Diagnóstico diferencial de guardia',
      title: 'Distracciones y errores comunes en preguntas de RPM del EUNACOM',
      head: ['Escenario clínico en la pregunta', 'Error conceptual frecuente', 'Conducta médica correcta'],
      rows: [
        {
          cells: ['Sospecha de RPM en gestante sin trabajo de parto', 'Realizar tacto vaginal digital para evaluar dilatación del cuello', 'Especuloscopía estéril y visualización con maniobra de Valsalva'],
          say: 'El tacto vaginal digital a ciegas en sospecha de rotura de membranas está formalmente contraindicado porque introduce gérmenes y cuadruplica la infección.',
        },
        {
          cells: ['RPM a las 35 semanas con líquido claro y sin dinámica', 'Administrar antibióticos de latencia y betametasona en espera', 'Inducción inmediata del parto por haber cumplido 34 semanas'],
          say: 'A partir de las treinta y cuatro semanas no se administra maduración pulmonar ni se espera; la conducta es la inducción activa del parto.',
        },
        {
          cells: ['RPM a las 29 semanas con fiebre, taquicardia y dolor uterino', 'Indicar nifedipino para frenar contracciones y completar corticoides', 'Interrupción inmediata del embarazo e iniciar ampicilina más gentamicina'],
          say: 'Ante corioamnionitis clínica la interrupción debe ser inmediata; la tocolisis está estrictamente contraindicada porque perpetúa el foco séptico intrauterino.',
        },
        {
          cells: ['Corioamnionitis clínica confirmada en feto en presentación cefálica', 'Indicar cesárea de urgencia inmediata de forma obligatoria', 'Inducción de parto vaginal si el cuello es favorable y FCF tolerada'],
          say: 'La corioamnionitis no obliga a cesárea per se; el parto vaginal inducido es la vía de elección salvo que existan contraindicaciones obstétricas clásicas.',
        },
      ],
    },

    {
      type: 'pathway',
      kicker: 'Algoritmo de decisión clínica',
      title: 'Algoritmo Clínico de Manejo de la Rotura Prematura de Membranas',
      say: 'Revisemos el algoritmo estructurado paso a paso para el abordaje de la rotura prematura de membranas en el examen EUNACOM y en el servicio de urgencias.',
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Manejo de RPM de Pretérmino · 31 Semanas',
      stem: 'Una gestante de 31 semanas consulta por pérdida de líquido claro por vagina hace 6 horas. La especuloscopía estéril confirma salida de líquido amniótico por el orificio cervical externo. Signos vitales: T° 36.8°C, PA 110/70 mmHg, FC 76 lpm. El feto presenta una FCF de 145 lpm con variabilidad conservada y no hay dinámica uterina ni dolor a la palpación del fondo uterino.',
      question: '¿Cuál es la conducta médica más apropiada a seguir?',
      options: [
        { letter: 'A', text: 'Realizar tacto vaginal para evaluar dilatación cervical e inducir el parto de inmediato' },
        { letter: 'B', text: 'Hospitalizar en ARO, administrar Betametasona intramuscular y antibióticos de latencia' },
        { letter: 'C', text: 'Manejo ambulatorio con reposo en cama y control ecográfico en 2 semanas' },
        { letter: 'D', text: 'Programar cesárea de urgencia en las próximas 2 horas por riesgo de compresión' },
        { letter: 'E', text: 'Iniciar tocolisis continua con nifedipino oral durante 14 días' },
      ],
      correct: 'B',
      explanation: 'En una paciente con rotura prematura de membranas confirmada entre las 24 y 33+6 semanas sin signos de infección ni trabajo de parto, la conducta es el manejo conservador hospitalizado en sala de Alto Riesgo Obstétrico (ARO). Se indica corticoterapia con Betametasona (12 mg IM cada 24 horas por 2 dosis) para maduración pulmonar y esquema de antibióticos de latencia (Ampicilina + Eritromicina) para prolongar el período libre de parto y prevenir la infección perinatal.',
      say: {
        stem: 'Una gestante de treinta y una semanas consulta por pérdida de líquido claro con especuloscopía confirmatoria, afebril y sin dolor uterino ni dinámica.',
        question: '¿Cuál es la conducta médica más apropiada a seguir?',
        options: 'La opción A propone tacto vaginal e inducción. La B hospitalizar en ARO con betametasona y antibióticos de latencia. La C manejo ambulatorio. La D cesárea de urgencia. La E tocolisis por catorce días. Piénsalo.',
        answer: 'La respuesta correcta es la B. Entre las veinticuatro y treinta y tres semanas con seis días se hospitaliza para manejo expectante con betametasona intramuscular y antibióticos de latencia.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Corioamnionitis Clínica Aguda · Criterios y Conducta',
      stem: 'Una primigesta de 30 semanas hospitalizada hace 3 días por rotura prematura de membranas en manejo conservador presenta súbitamente fiebre de 38.6°C, calofríos y taquicardia materna de 115 lpm. Al examen obstétrico: el útero está hipertónico y muy sensible a la palpación. A la especuloscopía fluye líquido amniótico francamente purulento y fétido. El monitor fetal muestra taquicardia fetal a 175 lpm. El hemograma confirma leucocitosis de 19.500 /mm³ con baciliformes.',
      question: '¿Cuál es la conducta médica inmediata e impostergable?',
      options: [
        { letter: 'A', text: 'Administrar antipiréticos y tocolíticos para frenar las contracciones y esperar a las 34 semanas' },
        { letter: 'B', text: 'Iniciar antibioticoterapia endovenosa con Ampicilina más Gentamicina e interrupción INMEDIATA' },
        { letter: 'C', text: 'Administrar un segundo ciclo de betametasona y esperar 48 horas para maduración' },
        { letter: 'D', text: 'Realizar una amniocentesis diagnóstica para cultivo y esperar resultado en 72 horas' },
        { letter: 'E', text: 'Indicar infusión de sulfato de magnesio y mantener conducta expectante' },
      ],
      correct: 'B',
      explanation: 'El cuadro cumple con creces los criterios de Gibbs para Corioamnionitis Clínica: fiebre materna (38.6°C) asociada a taquicardia materna, taquicardia fetal, hipersensibilidad uterina, líquido purulento fétido y leucocitosis con desviación izquierda. La presencia de corioamnionitis clínica es una indicación absoluta de INTERRUPCIÓN INMEDIATA del embarazo, independientemente de la edad gestacional, asociada al inicio sin demora de antibióticos endovenosos de amplio espectro (Ampicilina + Gentamicina). La tocolisis está estrictamente contraindicada.',
      say: {
        stem: 'Una gestante de treinta semanas con rotura de membranas presenta fiebre de treinta y ocho punto seis, taquicardia materna y fetal, útero muy doloroso y líquido purulento fétido.',
        question: '¿Cuál es la conducta médica inmediata e impostergable?',
        options: 'La opción A propone tocolíticos y esperar. La B ampicilina más gentamicina e interrupción inmediata del embarazo. La C corticoides y esperar dos días. La D amniocentesis. La E sulfato de magnesio expectante. Reflexiona. Piénsalo.',
        answer: 'La respuesta correcta es la B. La corioamnionitis clínica exige interrupción inmediata del embarazo bajo cobertura antibiótica endovenosa con ampicilina y gentamicina sin esperar maduración pulmonar.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'RPM a las 36 Semanas · Guía Perinatal MINSAL',
      stem: 'Una gestante de 36 semanas consulta por pérdida abundante de líquido claro por genitales hace 8 horas. Al examen con espéculo estéril se observa cuello borrado en un 50% con 2 cm de dilatación y abundante salida de líquido amniótico claro por el orificio cervical. La paciente se encuentra afebril, con signos vitales normales y monitoreo fetal reactivo sin contracciones uterinas dolorosas regulares.',
      question: '¿Cuál es la conducta indicada según las guías clínicas del MINSAL?',
      options: [
        { letter: 'A', text: 'Inducir el parto de inmediato con oxitocina o prostaglandinas' },
        { letter: 'B', text: 'Administrar betametasona intramuscular y mantener reposo por 1 semana' },
        { letter: 'C', text: 'Indicar antibióticos de latencia por 7 días y dar el alta domiciliaria' },
        { letter: 'D', text: 'Indicar tocolisis con nifedipino oral para evitar el parto prematuro' },
        { letter: 'E', text: 'Programar cesárea electiva para la semana 39' },
      ],
      correct: 'A',
      explanation: 'En toda paciente con Rotura Prematura de Membranas a partir de las 34 semanas de gestación (en este caso 36 semanas), la conducta médica obligatoria es la INTERRUPCIÓN DEL EMBARAZO mediante inducción del parto. A esta edad gestacional los riesgos de infección ovular y morbimortalidad superan ampliamente las complicaciones de la prematurez tardía. No están indicados los corticoides de maduración pulmonar ni los tocolíticos.',
      say: {
        stem: 'Una gestante de treinta y seis semanas consulta por rotura de membranas de ocho horas de evolución, afebril, con cuello favorable y monitor reactivo.',
        question: '¿Cuál es la conducta indicada según las guías clínicas del MINSAL?',
        options: 'La opción A propone inducir el parto de inmediato con oxitocina. La B betametasona y reposo. La C antibióticos de latencia ambulatorios. La D tocolisis con nifedipino. La E cesárea a la semana treinta y nueve. Piénsalo.',
        answer: 'La respuesta correcta es la A. Cumplidas las treinta y cuatro semanas de gestación, la conducta de consenso ante rotura de membranas es la inducción expedita del parto.',
      },
    },

    {
      type: 'quiz',
      kicker: 'EUNACOM Módulo 3',
      title: 'Contraindicación Diagnóstica Formal en RPM',
      stem: '¿Cuál de las siguientes maniobras o exámenes está FORMALMENTE CONTRAINDICADO como método diagnóstico inicial en una paciente con sospecha de rotura prematura de membranas que no se encuentra en trabajo de parto activo?',
      question: 'Seleccione la maniobra formalmente proscrita:',
      options: [
        { letter: 'A', text: 'Especuloscopía estéril con maniobra de Valsalva' },
        { letter: 'B', text: 'Tacto vaginal digital' },
        { letter: 'C', text: 'Test de cristalización en hoja de helecho' },
        { letter: 'D', text: 'Determinación de pH con papel de nitrazina' },
        { letter: 'E', text: 'Detección de alfa-microglobulina-1 placentaria (PAMG-1)' },
      ],
      correct: 'B',
      explanation: 'El tacto vaginal digital está terminantemente contraindicado en la evaluación inicial de la sospecha de rotura prematura de membranas sin trabajo de parto activo. Su realización introduce gérmenes de la microbiota vaginal al canal endocervical, acorta significativamente el período de latencia y cuadruplica el riesgo de infección intraamniótica y sepsis neonatal. El diagnóstico debe confirmarse mediante especuloscopía estéril y pruebas de laboratorio si persiste la duda.',
      say: {
        stem: 'Se consulta cuál examen o maniobra médica está formalmente contraindicado como método diagnóstico inicial en sospecha de rotura prematura de membranas sin trabajo de parto.',
        question: '¿Cuál es la maniobra formalmente proscrita?',
        options: 'La opción A propone especuloscopía estéril. La B tacto vaginal digital. La C cristalización en hoja de helecho. La D papel de nitrazina. La E detección de microglobulina placentaria. Piénsalo.',
        answer: 'La respuesta correcta es la B. El tacto vaginal digital está terminantemente proscrito porque arrastra microorganismos patógenos y multiplica por cuatro la tasa de infección intraamniótica.',
      },
    },

    {
      type: 'points',
      kicker: 'Reglas de oro',
      title: 'Conceptos clave de RPM y Corioamnionitis para el EUNACOM',
      cards: [
        {
          title: 'Semiología y Tiempos Gestacionales',
          tag: 'Diagnóstico y umbrales',
          kind: 'key',
          items: [
            {
              t: 'Especuloscopía sí, tacto digital jamás',
              d: 'Confirmar salida de líquido por OCE con maniobra de Valsalva estéril',
              say: 'La especuloscopía estéril con maniobra de Valsalva es el estándar de oro inicial; el tacto vaginal digital está terminantemente prohibido porque introduce gérmenes exógenos y cuadruplica la infección intraamniótica.',
            },
            {
              t: 'El corte decisivo son las 34 semanas',
              d: 'Menor a 34 semanas manejo conservador en ARO; mayor o igual a 34 semanas interrupción',
              say: 'El umbral decisivo son las treinta y cuatro semanas: bajo esta edad indicamos manejo expectante en ARO con betametasona y antibióticos; sobre las treinta y cuatro semanas la indicación categórica es la inducción del parto.',
            },
          ],
        },
        {
          title: 'Farmacología y Corioamnionitis',
          tag: 'Conductas impostergables',
          kind: 'pharma',
          items: [
            {
              t: 'Esquema de latencia de siete días',
              d: 'Ampicilina más Eritromicina EV y VO para prolongar el embarazo y prevenir morbilidad',
              say: 'En recién nacidos pretérmino administramos ampicilina más eritromicina por siete días completos, logrando prolongar significativamente la latencia y prevenir secuelas neurológicas e infecciosas graves.',
            },
            {
              t: 'Corioamnionitis: interrupción inmediata con ampicilina y gentamicina',
              d: 'Fiebre más criterios de Gibbs obligan a evacuar el útero sin demora',
              say: 'La sospecha de corioamnionitis obliga a interrumpir la gestación de inmediato. Si te llevas una sola idea de hoy: en la rotura prematura de membranas pretérmino el manejo es expectante con antibióticos de latencia, pero la infección intraamniótica obliga a interrumpir de inmediato. Nos vemos en la próxima clase.',
            },
          ],
        },
      ],
    },
  ],

  pathway: {
    title: 'Algoritmo de Abordaje Clínico de la Sospecha de RPM',
    root: N(
      'start',
      'Sospecha de Rotura Prematura de Membranas (RPM)',
      '¡NO REALIZAR TACTO VAGINAL DIGITAL! · Especuloscopía estéril con maniobra de Valsalva',
      'Iniciamos el abordaje recordando que el tacto digital está estrictamente prohibido y realizamos una especuloscopía estéril suave.',
      [
        'Visualización directa de líquido amniótico saliendo por el cérvix',
        N(
          'q',
          'Diagnóstico confirmado de RPM',
          'Evaluar edad gestacional exacta y signos clínicos de infección intraamniótica',
          'Confirmada la salida de líquido amniótico, evaluamos la edad gestacional y descartamos signos de corioamnionitis clínica.',
          [
            'Presencia de Fiebre materna y Criterios de Gibbs (Corioamnionitis)',
            N(
              'alert',
              'Corioamnionitis Clínica Aguda',
              'Ampicilina dos gramos cada seis horas EV más Gentamicina e interrupción INMEDIATA',
              'Si presenta fiebre y criterios de Gibbs diagnosticamos corioamnionitis e interrumpimos de inmediato el embarazo con antibióticos.',
            ),
          ],
          [
            'Gestación mayor o igual a 34 semanas sin infección',
            N(
              'do',
              'Interrupción Activa del Embarazo',
              'Inducción del parto con oxitocina o misoprostol según condiciones cervicales',
              'A partir de las treinta y cuatro semanas indicamos la inducción activa del parto por vía vaginal.',
            ),
          ],
          [
            'Gestación entre 24 y 33 semanas con 6 días sin infección',
            N(
              'ok',
              'Manejo Conservador Hospitalizado en ARO',
              'Betametasona IM dos dosis + Antibióticos de latencia por siete días + vigilancia',
              'En pretérminos sin infección indicamos reposo en sala de alto riesgo obstétrico con betametasona y antibióticos de latencia.',
            ),
          ],
        ),
      ],
      [
        'Especuloscopía dudosa o sin salida evidente de líquido',
        N(
          'do',
          'Pruebas Auxiliares Confirmatorias',
          'Test de cristalización en helecho, papel de nitrazina o detección de PAMG-1',
          'Si la especuloscopía es dudosa solicitamos cristalización en hoja de helecho o microglobulina placentaria alfa-uno.',
        ),
      ],
    ),
  },
};
